---
normalized_id: shared-pdf-reference-doe-j-structural-inference-in-cointegrated-vector-autoregressive-models
exam_code: SHARED
material_scope: doe j. - structural inference in cointegrated vector autoregressive models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Doe J. - Structural Inference in Cointegrated Vector Autoregressive Models.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-doe-j-structural-inference-in-cointegrated-vector-autoregressive-models

Contents

0 Introduction                                                                      3

1 The reduced form                                                                  7
  1.1   The stationary VAR model . . . . . . . . . . . . . . . . . . . . . .        9
  1.2   Deterministic terms . . . . . . . . . . . . . . . . . . . . . . . . . .    11
  1.3   Alternative representations of cointegrated VARs . . . . . . . . .         16
  1.4   Weak exogeneity in stationary VARs . . . . . . . . . . . . . . . .         20
  1.5   Identifying restrictions . . . . . . . . . . . . . . . . . . . . . . . .   24
  1.6   Estimation under long run restrictions . . . . . . . . . . . . . . .       29
  1.7   Restrictions on short run parameters . . . . . . . . . . . . . . . .       39
  1.8   Deterministic terms . . . . . . . . . . . . . . . . . . . . . . . . . .    44
  1.9   An empirical example . . . . . . . . . . . . . . . . . . . . . . . . .     46

2 Structural VARs                                                                  49
  2.1   Rational expectations . . . . . . . . . . . . . . . . . . . . . . . . .    51
  2.2   The identification of shocks . . . . . . . . . . . . . . . . . . . . .     53
  2.3   A class of structural VARs . . . . . . . . . . . . . . . . . . . . . .     56
  2.4   Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   57
  2.5   A latent variables framework . . . . . . . . . . . . . . . . . . . . .     61
  2.6   Imposing long run restrictions . . . . . . . . . . . . . . . . . . . .     62
  2.7   Inference on impulse responses . . . . . . . . . . . . . . . . . . . .     66
  2.8   Empirical applications . . . . . . . . . . . . . . . . . . . . . . . .     76
        2.8.1   A simple IS-LM model . . . . . . . . . . . . . . . . . . . .       76
        2.8.2   The Blanchard-Quah model . . . . . . . . . . . . . . . . .         81

                                         1
2                                                                      CONTENTS

          2.8.3   The KPSW model . . . . . . . . . . . . . . . . . . . . . .      84
          2.8.4   The causal graph model of Swanson-Granger (1997) . . . .        90
    2.9   Problems with the SVAR approach . . . . . . . . . . . . . . . . .       93

3 Problems of temporal aggregation                                              101
    3.1   Granger causality . . . . . . . . . . . . . . . . . . . . . . . . . . . 103
    3.2   Asymptotics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105
    3.3   Contemporaneous causality . . . . . . . . . . . . . . . . . . . . . 114
    3.4   Monte Carlo experiments . . . . . . . . . . . . . . . . . . . . . . . 120
    3.5   Aggregation of SVAR models . . . . . . . . . . . . . . . . . . . . 123

4 Inference in nonlinear models                                                 129
    4.1   Inconsistency of linear cointegration tests . . . . . . . . . . . . . . 132
    4.2   Rank tests for unit roots . . . . . . . . . . . . . . . . . . . . . . . 136
    4.3   A rank test for neglected nonlinearity . . . . . . . . . . . . . . . . 144
    4.4   Nonlinear short run dynamics . . . . . . . . . . . . . . . . . . . . 147
    4.5   Small sample properties . . . . . . . . . . . . . . . . . . . . . . . 154
    4.6   Empirical applications . . . . . . . . . . . . . . . . . . . . . . . . 163
    4.7   Appendix: Critical values . . . . . . . . . . . . . . . . . . . . . . 169

5 Conclusions and outlook                                                       173
Chapter 0

Introduction

In one of the first attempts to apply regression techniques to economic data,
Moore (1914) estimated the “law of demand” for various commodities. In his
application the percentage change in the price per unit is explained by a linear
or cubic function of the percentage change of the produced quantities. His results
are summarized as follows:

     “The statistical laws of demand for the commodities corn, hay, oats,
     and potatoes present the fundamental characteristic which, in the clas-
     sical treatment of demand, has been assumed to belong to all demand
     curves, namely, they are all negatively inclined”.

(Moore 1914, p. 76). Along with his encouraging results, Moore (1914) estimated
the demand curve for raw steel (pig-iron). To his surprise he found a positively
sloped demand curve and he claimed he have found a brand-new type of demand
curve. Lehfeldt (1915), Wright (1915) and Working (1927) argued, however, that
Moore has actually estimated a supply curve because the data indicated a moving
demand curve that is shifted during the business cycle, whereas the supply curve
appears relatively stable.
   This was probably the first thorough discussion of the famous identification
problem in econometrics. Although the arguments of Wright (1915) come close to
a modern treatment of the problem, it took another 30 years until Haavelmo (1944)
suggested a formal framework to resolve the identification problem. His elegant

                                        3
4                                               CHAPTER 0. INTRODUCTION

probabilistic framework has become the dominating approach in subsequent years
and was refined technically by Fisher (1966), Rothenberg (1971), Theil (1971) and
Zellner (1971), among others.

    Moore’s (1914) estimates of “demand curves” demonstrate the importance
of prior information for appropriate inference from estimated economic systems.
This is a typical problem when collected data are used instead of experimental
data that are produced under controlled conditions. Observed data for prices and
quantities result from an interaction of demand and supply so that any regression
between such variables require further assumptions to disentangle the effects of
shifts in the demand and supply schedules.

    This ambiguity is removed by using prior assumptions on the underlying eco-
nomic structure. A structure is defined as a complete specification of the prob-
ability distribution function of the data. The set of all possible structures S is
called a model. If the structures are distinguished by the values of the parameter
vector θ that is involved by the probability distribution function, then the identi-
fication problem is equivalent to the problem of distinguishing between parameter
points (see Hsiao 1983, p. 226). To select a unique structure as a probabilistic
representation of the data, we have to verify that there is no other structure in
S that leads to the same probability distribution function. In other words, an
identified structure implies that there is no observationally equivalent structure
in S. In this case we say that the structure is identified (e.g. Judge et al. 1988,
Chapter 14).

    In this thesis I consider techniques that enables structural inference (that is
estimation and tests in identified structural models) by focusing on a particular
class of dynamic linear models that has become important in recent years. Since
the books of Box and Jenkins (1970) and Granger and Newbold (1977), time series
techniques have become popular for analysing the dynamic relationship between
time series. Among the general class of the multivariate ARIMA (AutoRegressive
Integrated Moving Average) model, the Vector Autoregressive (VAR) model turns
out to be particularly convenient for empirical work. Although there are important
reasons to allow also for moving average errors (e.g. Lütkepohl 1991, 1999), the
                                                                                  5

VAR model has become the dominant work horse in the analysis of multivariate
time series. Furthermore, Engle and Granger (1987) show that the VAR model is
an attractive starting point to study the long run relationship between time series
that are stationary in first differences. Since Johansen’s (1988) seminal paper, the
cointegrated VAR model has become very popular in empirical macroeconomics.
   An important drawback of the cointegrated VAR approach is that it takes the
form of a “reduced form representation”, that is, its parameters do not admit
a structural interpretation. In this thesis, I review and supplement recent work
that intends to bridge the gap between such reduced form VAR representations
and structural models in the tradition of Haavelmo (1944). To do this, I first
discuss in Chapter 1 aspects of the reduced form model that are fundamental
for the subsequent structural analysis as well. In Chapter 2 I consider structural
models that take the form of a linear set of simultaneous equations advocated by
the influential Cowles Commission. An alternative kind of structural models are
known as “Structural VAR models” or “Identified VAR models”. These models
are considered in Chapter 3. Problems due to the temporal aggregation of time
series are studied in Chapter 4 and Chapter 5 deals with some new approaches to
analyze nonlinear models. Chapter 6 concludes and makes suggestions for future
work.
6   CHAPTER 0. INTRODUCTION
Chapter 1

The reduced form

Since Haavelmo (1944) it is common in econometrics to distinguish a structural
model from the reduced form of an economic system. The reduced form provides
a data admissible statistical representation of the economic system and the struc-
tural form can be seen as a reformulation of the reduced form in order to impose
a particular view suggested by economic theory. Therefore, it is important to
specify both the reduced and structural representation appropriately.
    In this chapter the vector autoregressive (VAR) model is used as a convenient
statistical representation of the reduced form relationship between the variables.
Zellner and Palm (1974) and Wallis (1977) argue that under certain conditions the
reduced (or final) form of a set of linear simultaneous equations can be represented
as a VARMA (Vector-Autoregressive-Moving-Average) process. Here it is as-
sumed that such a VARMA representation can be approximated by a VAR model
with a sufficient lag order. A similar framework is used by Monfort and Rabem-
ananjara (1990), Spanos (1990), Clemens and Mizon (1991), Juselius (1993) inter
alia.
    The reduced form model is represented by a conditional density function of
the vector of time series yt conditional on It denoted by f (yt |It ; θ), where θ is a
finite dimensional parameter vector (e.g. Hendry and Mizon 1983). Here we let
It = {yt−1 , yt−2 , . . .} and it is usually assumed that f (·|· ; θ) is the normal density.
Sometimes the conditioning set includes a vector of “exogenous variables”. How-

                                             7
8                                          CHAPTER 1. THE REDUCED FORM

ever, the distinction between endogenous and exogenous variables is considered
as a structural problem and will be discussed in Chapter 2.
    The specification of an appropriate VAR model as a statistical representation
of the reduced form involves the following problems:


    • The choice of the model variables.


    • The choice of an appropriate variable transformation (if necessary).


    • The selection of the lag order.


    • The specification of the deterministic variables (dummy variables, time trend
      etc.)


    • The selection of the cointegration rank.


This chapter contributes mainly to the last issue, that is, the selection of the
cointegration rank. Problems involved by deterministic variables are only touched
occasionally and the choice of an appropriate variable transformation is considered
only in the sense that the choice of the cointegration rank may suggest that (some
of) the variables must be differenced to obtain a stationary VAR representation.
We do not discuss the choice of the lag order because there already exists an
extensive literature dealing with this problem (cf. Lütkepohl 1991, Lütkepohl
and Breitung 1997, and the references therein). Furthermore, it is assumed that
the variables of the system are selected guided by to economic theory.
    If the reduced form VAR model is specified, it can be estimated by using
a maximum likelihood approach. For completeness I restate in Section 1.1 some
well-known results on the estimation of stationary VAR models that are enhanced
in Section 1.3 by introducing deterministic terms. Some useful representations
of cointegrated VAR models are considered Section 1.3. Section 1.4 suggests a
unifying approach for the estimation of the cointegration vectors and Section 1.5
discusses different approaches for testing the cointegration rank.
1.1. THE STATIONARY VAR MODEL                                                          9

1.1      The stationary VAR model
Assume that the n × 1 times series vector yt is stationary with E(yt ) = 0 and
      0
E(yt yt+j ) = Γj such that there exists a Wold representation of the form:

                         yt = ε∗t + B1 ε∗t−1 + B2 ε∗t−2 + · · ·                    (1.1)
                             = B(L)ε∗t ,                                           (1.2)

where B(L) = In + B1 L + B2 L2 + · · · is a (possibly infinite) n × n lag poly-
nomial and ε∗t is a vector of white noise errors with positive definite covariance
matrix E(ε∗t ε∗t 0 ) = Σ∗ . Furthermore, it is assumed that the matrix polynomial
|B(z)| 6= 0 for all |z| ≤ 1. If in addition the coefficient matrices B1 , B2 , . . . obey
P∞ 1/2
  j=1 j   ||Bj || < ∞, where ||Bj || = [tr(Bj Bj0 )]1/2 , then there exists a VAR repre-
sentation of the form

                          yt = A1 yt−1 + A2 yt−2 + · · · + ε∗t .

In practice this infinite VAR representation is approximated by a finite order
VAR[p] model:
                          yt = A1 yt−1 + · · · + Ap yt−p + εt ,                    (1.3)

where εt = ε∗t +Ap+1 yt−p−1 +Ap+2 yt−p−2 +· · · and, thus, the error vector εt includes
the approximation error ηtp = Ap+1 yt−p−1 + Ap+2 yt−p−2 + · · ·. In what follows it
is assumed that the approximation error is “small” relative to the innovation ε∗t
and so I am able to neglect the term ηtp . With respect to the consistency and
asymptotic normality of the least-squares estimator, Lewis and Reinsel (1985)
have shown that the approximation error is asymptotically negligible if for → ∞
and p → ∞
                                         ∞
                                 √       X
                                     T           ||Aj || → 0 .                     (1.4)
                                         j=p+1

In many cases this condition is satisfied if p increases with the sample size T but
at a smaller rate than T . For example, if yt is generated by a finite order MA
process, then p(T ) = T 1/δ with δ > 3 is sufficient for (1.4) to hold (see Lütkepohl
1991, p. 307).
10                                                 CHAPTER 1. THE REDUCED FORM

     Unfortunately, such asymptotic conditions are of limited use in practice. First,
there is usually a wide range of valid rates for p(T ). For MA models we may use
p(T ) = T 1/3.01 as well as p(T ) = T 1/100 . Obviously, both possible rules will render
quite different model orders. Second, a factor c may be introduced such that
p(T ) = cT 1/δ . For asymptotic considerations the factor c is negligible as long as
c > 0. However, in small samples it can make a big difference if c = 0.1 or c = 20,
for example. In practice it is therefore useful to employ selection criteria for the
choice of the autoregressive order p (see Lütkepohl 1991, Chapter 4).
     For later reference I now summarize the basic assumptions of the VAR model
used in the subsequent sections.

Assumption 1.1 (Stationary VAR[p] model). Let yt = [y1t , . . . , ynt ]0 be an n × 1
vector of stationary time series with the VAR[p] representation

                           yt = A1 yt−1 + · · · + Ap yt−p + εt ,                        (1.5)

where {εt } is white noise with E(εt ) = 0, E(εt ε0t ) = Σ and Σ is a positive definite
n × n matrix.

     Usually, the coefficient matrices are unknown and can be estimated by multi-
                                  0              0
variate least-squares. Let xt = [yt−1 , . . . , yt−p ]0 and A = [A1 , . . . , Ap ] so that the
VAR[p] model can be written as yt = Axt + εt . Then the least-squares estimator
is given by
                                   T                T
                                                                    !−1
                                   X                X
                             A
                             b=           yt x0t           xt x0t         .
                                  t=p+1            t=p+1

Under Assumption 1.1 the least-squares estimator is consistent and asymptotically
normally distributed with
                        √                    d
                                     b − A) −→
                               T vec(A         N (0, VAb) ,

where
                                                     −1
                                 VAb = [E(xt x0t )]        ⊗Σ .

If in addition it is assumed that εt is normally distributed, then the least-squares
estimator is asymptotically equivalent to the maximum likelihood estimator and,
hence, the least-squares estimator is asymptotically efficient.
1.2. DETERMINISTIC TERMS                                                             11

   The covariance matrix Σ can be consistently estimated using
                                    T
                              1    X
                                                         b t )0 .
                       Σ
                       b=               (yt − Ax
                                              b t )(yt − Ax                       (1.6)
                            T − p t=p+1


1.2      Deterministic terms
So far I have assumed that E(yt ) = 0. In most applications, however, yt has a
nonzero mean such as a constant or a linear time trend. Assume that the mean
is a linear function of the k × 1 vector dt so that

                                     E(yt ) = Cdt .                               (1.7)

For example, the elements of the matrix dt may be the terms of a polynomial time
trend or dummy variables.
   Another possibility to accommodate a nonzero mean is to include deterministic
terms in the autoregressive representation

                      yt = C ∗ d∗t + A1 yt−1 + · · · + Ap yt−p + εt .             (1.8)

The relationship between the mean function implied by (1.7) and (1.8) is found
from solving the difference equation

                     Cdt − A1 Cdt−1 − · · · − Ap Cdt−p = C ∗ d∗t .

If the elements of dt can be represented as tk for k = {0, 1, 2, . . .}, then d∗t = dt .
However in other cases C 6= C ∗ , in general.
   The matrix C ∗ in (1.8) can be asymptotically efficiently estimated by OLS.
The mean function in (1.7) is asymptotically efficiently estimated by applying a
GLS procedure to
                                    yt = Cdt + ut ,                               (1.9)

where
                          ut = A1 ut−1 + · · · + Ap ut−p + εt .

The GLS estimator of C results as
                                 T                 T
                                                                      !−1
                                 X                 X
                           C
                           e=           ỹt d˜0t           d˜t d˜0t         ,    (1.10)
                                t=p+1              t=p+1
12                                           CHAPTER 1. THE REDUCED FORM

where

                           ỹt = yt − A1 yt−1 − · · · − Ap yt−p
                           d˜t = dt − A1 dt−1 − · · · − Ap dt−p .

To obtain a feasible GLS procedure, the unknown matrices A1 , . . . , Ap must be
replaced by consistent estimates.
     As shown by Grenander and Rosenblatt (1957, Sec. 7) there are important
cases where the OLS estimator of C is as efficient as the GLS estimator. For
example, this is the case if the elements of dt are the terms of a polynomial trend
regression, i.e., dt = (tj )j=0,...,k . Another example are seasonal dummy variables,
which can be estimated efficiently by OLS (cf Grenander and Rosenblatt 1957, p.
246).
     Besides trend polynomials and seasonal dummies the deterministic term often
includes “impulse-dummies” and “step-dummies”. Since such terms are not con-
sidered by Grenander and Rosenblatt (1957), the following theorem states that for
step-dummies a similar result applies while for an impulse-dummy the OLS esti-
mate has a different limiting distribution than the GLS estimate. As in Grenander
and Rosenblatt (1957) I consider a univariate process but the generalization to a
vector process is straightforward.


THEOREM 1.1 Let dpt and dst denote an impulse-dummy and a step-dummy
defined as
                                                           
                      1      for t = T0                     0     for t ≤ T0
         dpt (λ) =                          and dst (λ) =
                      0      otherwise                      1     for t > T0

where T0 = [λT ], 0 < λ < 1, and [·] indicates the integer part of the argument.
(i) For the regression model yt = cs dst (λ)+ut , where ut = α1 ut−1 +. . .+αp ut−p +εt
is a stationary AR[p] process, the OLS and GLS estimates have the same limiting
distribution.
(ii) The respective estimates for the model yt = cp dpt (λ) + ut have a different
distribution as long as ut is different from a white noise process.
1.2. DETERMINISTIC TERMS                                                                                      13

Proof: (i) In the model with a step-dummy dst (λ) we have
                  T                                T
                                                                                 σ 2 (1 − λ)
                                                                                                     
                                                                d
                  X                                X
           −1/2
       T                 dst (λ)ut = T −1/2               ut −→ N        0,                               .
                  t=1                              t=T0
                                                                            (1 − α1 − · · · − αp )2
                           PT
Furthermore, T −1                     s    2
                                 t=1 dt (λ) = (1 − λ). It follows that the OLS estimator of c
                                                                                              s


is asymptotically distributed as

                                         σ2
                                                           
                      N 0,                                    .
                             (1 − λ)(1 − α1 − · · · − αp )2

To derive the limiting distribution of the GLS estimator, let

                           dest (λ) = dst (λ) − α
                                                b1 dst−1 (λ) − · · · − α
                                                                       bp dst−p (λ) .

Using dest (λ) = 1 − α
                     b1 − . . . − α
                                  bp for t > T0 + p we obtain
                                       T
                                       X
                         plim T −1            [dest (λ)]2 = (1 − λ)(1 − α1 − · · · − αp )2
                         T →∞           t=1

and
                          T
                                             d
                          X
                  −1/2
                                 dest (λ)εt −→ N 0, σ 2 (1 − λ)(1 − α1 − · · · − αp )2 .
                                                                                      
             T
                          t=1

Combining these results it follows that
                          T
                            dest (λ)εt
                          P
                 √                                                       σ2
                                                                                             
                          t=1                  d
                     T                        −→ N        0,                                      ,
                           T                                 (1 − λ)(1 − α1 − · · · − αp )2
                                [dest (λ)]2
                          P
                          t=1

and, thus, the GLS estimator has the same asymptotic distribution as the OLS
estimator.
    (ii) For the model with an impulse-dummy dpt (λ) we have for the OLS estimator
cp = yT0 so that
b
                                                            d
                                               cp − cp −→ N (0, σu2 ) ,
                                               b

where σu2 denotes the variance of ut . For the GLS estimator we have e
                                                                     cp = yT0 −
b1 yT0 −1 − · · · − α
α                   bp yT0 −p and, thus,

                                                            d
                                               cp − cp −→ N (0, σε2 ) .
                                               e
14                                                    CHAPTER 1. THE REDUCED FORM

Unless σu2 = σε2 , that is ut is white noise, the limiting distributions for the estima-
tors of cp are different, in general. 

         Since the least-squares estimation of a VAR system is equivalent to the separate
estimation of the equations, it is straightforward to show that this result also holds
for a multivariate estimation of the VAR system. Furthermore it can be shown by
using the same techniques as in Theorem 1.1 that in a regression with a polynomial
trend dummy defined as djt = d1t (λ)tj the OLS and GLS estimates have the same
limiting distribution as well.
         The Grenander-Rosenblatt theorem and its extension to step dummies in The-
orem 1.1 implies that for estimating the parameters of a VAR process the esti-
mation method (OLS or GLS) is irrelevant for the asymptotic properties.1 Fur-
thermore the invariance of the ML estimation implies that the ML estimation
of λ is identical to λ     b where g(·) is a matrix function Rk → Rk with a
                     e = g(θ),
regular matrix of first derivatives and θ, λ are k × 1 vectors. Since there exists
a one-to-one relationship between C and C ∗ it therefore follows that asymptot-
ically the estimates of A1 , . . . , Ap and Σ are not affected whether the process is
demeaned by estimating the mean in (1.7) or in (1.8). Thus I present only the
limiting distributions for the case of an OLS based on (1.8).


THEOREM 1.2 Let yt − Cdt be a stationary n × 1 vector generated by a VAR[p]
as in Assumption 1.1. Furthermore assume that there exits a diagonal matrix
ΥT = diag[T δ1 , . . . , T δk ] with δr > 0 for r = 1, . . . , k such that the limiting matrix

                               T
                               X
              Γd = lim Υ−1
                        T             det de0t   where det = dt − A1 dt−1 − · · · − Ap dt−p
                  T →∞
                              t=p+1



exists and is positive definite. Let b
                                     a = vec(A),
                                              b σ b = vech(Σ)
                                                           b and bc = vec(C),
                                                                          b where
vec(A)
     b stacks the columns of A    b into a vector, vech(Σ)
                                                        b stacks the non-redundant

     1
         Notice that in Grenander and Rosenblatt (1957) as well as in Theorem 1.1 it is assumed
that yt − E(yt ) is stationary. The results do not apply if the process has one or more roots on
the unit circle (see Lütkepohl and Saikkonen 2000).
1.2. DETERMINISTIC TERMS                                                           15

elements of the columns of Σ
                           b into a n(n + 1)/2 vector and

                                  T                    T
                                                                         !−1
                                  X                    X
                        A
                        b =              ȳt x̄0t             x̄t x̄0t
                                 t=p+1                t=p+1
                                         T
                                         X
                        b = T −1
                        Σ                           (ȳt − Ax̄         b t )0 ,
                                                           b t )(ȳt − Ax̄
                                       t=p+1


               b t , x̄t = [ȳ 0 , . . . , ȳ 0 ]0 . As T → ∞
ȳt−j = yt−j − Cd             t−1            t−p

                      √               
                              a − a)
                           T (b
                      √              d
                       T (b
                            σ − σ)   −→ N (0, diag[Va , Vσ , Vc ]) ,
                                     
                         1/2
                        ΥT (b c − c)

where


                                 Va = Γ−1
                                       x ⊗Σ
                                                                           0
                                 Vσ = 2Dn+ (Σ ⊗ Σ)Dn+
                                 Vc = Γ−1
                                       d ⊗Σ .



where Dn+ = (Dn0 Dn )−1 Dn0 is the Moore-Penrose generalized inverse of the n2 ×
n(n + 1)/2 duplication matrix Dn (cf. Lütkepohl 1991, p. 84).



Proof: The proof is a straightforward extension of the proof in Lütkepohl (1991,
Sec. 3.4.3). 


Since the asymptotic covariance matrix is block diagonal, it follows that any other
consistent estimator for C besides C
                                   b can be used without affecting the asymptotic
properties of the other estimators. Thus, even if a mean function is used where
the Grenander-Rosenblatt theorem does not apply, the limiting distributions of
A1 , . . . , Ap and Σ are not affected by the estimator of C as long as C is estimated
consistently. Furthermore a possible overspecification of the deterministic terms
does not affect the asymptotic properties of the estimators of A1 , . . . , Ap and Σ.
16                                                CHAPTER 1. THE REDUCED FORM

1.3           Alternative representations of cointegrated
              VARs
As already observed by Box and Jenkins (1970), many economic variables must
be differenced to become stationary. They introduced the notation that a (mean-
adjusted) variable is called I(d) (integrated of order d) if at least d differences
are necessary to achieve a stationary series. Modeling integrated time series in a
multivariate system raises a number of important problems and since the late 80s
various inference procedures were suggested to deal with such problems. It is not
the intention to give a detailed account of all developments in this area.2 Rather,
I focus on the most important developments as well as on my own work in this
area.
         Consider the VAR[p] model

                               yt = A1 yt−1 + · · · + Ap yt−p + εt ,                    (1.11)

where for convenience we leave out deterministic terms like constants, time trends
and dummy variables. As noted in Section 1.1, the process is stationary if the
polynomial A(L) = In − A1 L − · · · − Ap Lp has all roots outside the unit circle,
that is, if
                        |In − A1 z − · · · − Ap z p | =
                                                      6 0   for all |z| ≤ 1 .

On the other hand, if |A(zj )| = 0 for |zj | = 1 and j = 1, 2, . . . , q, we say that the
process has q unit roots. In what follows, I will focus on unit roots “at frequency
zero”, i.e., zj = 1 for j = 1, 2, . . . , q. Complex unit roots are important in the
analysis of the seasonal behavior of the time series but are left out here for ease
of exposition.
         To assess the properties of the process, it is not sufficient to consider merely the
number of unit roots. For example, assume that the process for yt = [y1t , y2t , y3t ]0
has two unit roots. This may be due to fact that [∆y1t , ∆y2t , y3t ] is stationary,
where ∆ = 1 − L denotes the difference operator. Another possibility is that
     2
         For recent surveys see, e.g., Hamilton (1994), Watson (1994), Mills (1998), Lütkepohl
(1999a).
1.3. ALTERNATIVE REPRESENTATIONS OF COINTEGRATED VARS 17

[∆2 y1t , y2t , y3t ] is stationary, i.e., y1t is I(2) in the terminology of Box and Jenkins
(1970). Finally the unit roots may be due to the fact that [∆y1t , ∆y2t , y3t − by1t ]
is stationary. In this case y3t and y1t are integrated but there exists a linear
combination y3t − by1t that is stationary. In this case we say that the variables y3t
and y1t are cointegrated.
   To facilitate the analysis, it is convenient to rule out that components of yt
are integrated with a degree larger than one. The analysis of I(2) variables is
considerably more complicated than the analysis of I(1) variables (see, e.g., Stock
and Watson 1993, Johansen 1995c), and in empirical practice the case with I(1)
variables is more important. We therefore make the following assumption:

Assumption 1.2 The vector ∆yt is stationary.

The VECM representation. Following Engle and Granger (1997) it is conve-
nient to reformulate the VAR system as a “vector error correction model” (VECM)
given by
            ∆yt = Πyt−1 + Γ1 ∆yt−1 + · · · + Γp−1 ∆yt−p+1 + εt ,       (1.12)

where Π = pj=1 Aj − In and Γj = − pi=j+1 Ai . This representation can be used
         P                       P

to define cointegration in a VAR system.

DEFINITION 1.1 (Cointegration). A VAR[p] system as defined in Assumption
1.1 is called cointegrated with rank r, if r = rk(Π) with 0 < r < n.

If Π has a reduced rank then there exists a factorisation Π = αβ 0 such that α
and β are n × r matrices. Furthermore, from Assumption 1.2 and (1.12) it follows
that Πyt−1 = αβ 0 yt−1 is stationary. Since α is a matrix of constants, β 0 yt defines r
stationary linear combinations of yt . Furthermore, it follows that ∆yt has a MA
representation of the form

                         ∆yt = εt + C1 εt−1 + C2 εt−1 + · · ·
                         ∆yt = C(L)εt .

As shown by Johansen (1991), the MA representation can be reformulated as

                              ∆yt = C(1)εt + C ∗ (L)∆εt ,                            (1.13)
18                                                       CHAPTER 1. THE REDUCED FORM

where C ∗ (L) = C0∗ + C1∗ L + C2∗ L2 + · · · has all roots outside the complex unit
circle,
                                         0
                             C(1) = β⊥ [α⊥ Γ(1)β⊥ ]−1 α⊥
                                                       0
                                                         ,                                            (1.14)
                 Pp−1
and Γ(1) = I +      j=1 Γj (Johansen 1991, Theorem 4.1).                              Assumption 1.2 implies
                  0
that the matrix [α⊥ Γ(1)β⊥ ] is invertible.

A canonical representation. The VECM representation used by Engle and
Granger (1987), Johansen (1995a) and many others is not the only way to rep-
resent a cointegrated system. Phillips (1991) uses a “triangular representation”
                                       0     0 0
resulting from the partitioning yt = [y1t , y2t ] , where y1t and y2t are r × 1 and
(n − r) × 1 subvectors. In the subsequent sections it will be convenient to use
another representation that is based on the following theorem.


THEOREM 1.3 Let yt be a n×1 vector of cointegrated variables with 0 < r < n
and ∆yt is stationary. Then there exists an invertible matrix Q = [β ∗ , γ ∗ ]0 , where
β ∗ is an n × r cointegration matrix and γ ∗ is an n × (n − r) matrix linearly
independent of β ∗ such that

                                                                       β ∗ 0 yt
                                          "          #             "              #
                                              x1t
                                  xt =                   = Qyt =
                                              x2t                      γ ∗ 0 yt
                                             [aT ]
                                             X
                                      −1/2
                                  T                  x1i ⇒ Wr (a)
                                             i=1

                                  T −1/2 x2,[aT ] ⇒ Wn−r (a),

where [aT ] signifies the integer part of aT and Wr (a), Wn−r (a) are uncorrelated r
and (n − r) dimensional Brownian motions with unit covariance matrix.


Proof: From the MA representation (1.13) we have

                         β 0 yt = β 0 C ∗ (L)εt
                                      = β 0 C ∗ (1)εt + β 0 C ∗∗ (L)∆εt
                                                  X t
                         γ 0 yt          0
                                      = γ C(1)        εi + C ∗ (L)εt ,
                                                         i=1
1.3. ALTERNATIVE REPRESENTATIONS OF COINTEGRATED VARS 19

where γ is an n × (n − r) matrix linearly independent of β and C ∗∗ (L) = [C ∗ (L) −
C ∗ (1)](1 − L)−1 has all roots outside the complex unit circle. The expression
(1 − L)−1 is equivalent to the polynomial 1 + L + L2 + L3 + . . .. Let R be a lower
block diagonal matrix such that
                                                 "                        #
                                                      R11          0
                                       R=
                                                      R21         R22

and                                                                    #0
                               β 0 C ∗ (1)               β 0 C ∗ (1)
                           "                 #       "
                                                 Σ                            = RR0 .
                                   0                          0
                                  γC                          γC
Then, by using
                                                         β0               β ∗0
                                                     "        #       "          #
                                  Q = R−1                         =
                                                         γ0               γ∗0
                         P[aT ]
it follows that T −1/2     i=1 x1i and T
                                                     −1/2
                                                            x2,[aT ] converge weakly to the standard
Brownian motions Wr and Wn−r , respectively (e.g. Phillips and Durlauf 1986).


    This representation is called “canonical” since it transforms the system into r
asymptotically independent stationary and n − r nonstationary components with
uncorrelated limiting processes. Since this representation separates the stationary
and non-stationary components from the system it is convenient for the analysis
of the asymptotic properties of the system. Furthermore, the representation is
related to Phillips’ (1991) triangular representation given by

                                        y1t = By2t + ut                                       (1.15)
                                       ∆y2t = vt ,                                            (1.16)

where ut and vt are I(0). However, (1.15) implies the normalization β = [Ir , −B]0
that is not assumed in the former representation.

The SE representation. Another convenient reformulation of the system is
the representation in the form of a traditional system of Simultaneous Equations
(SE). This representation imposes r2 normalization restrictions on the loading
20                                           CHAPTER 1. THE REDUCED FORM

matrix α. Specifically, we let
                                                 φ0
                                             "        #
                                      α∗ =                ,                        (1.17)
                                                 Ir
where φ is an unrestricted r × (n − r) matrix. Obviously, φ0 = α1 α2−1 , where
α = [α10 , α20 ]0 and α2 is an invertible r × r matrix. Note that the variables in yt
can always be arranged such that α2 is invertible.
     The system (1.12) is transformed by using the matrix

                                      In−r −φ0
                                    "             #
                               C0 =
                                        0    Ir

so that
              C0 ∆yt = Π∗ yt−1 + Γ∗1 ∆yt−1 + · · · + Γ∗p−1 ∆yt−p+1 + u∗t ,         (1.18)

where Π∗ = C0 αβ 0 = [0, π2 ]0 , Γ∗j = C0 Γ and π20 = α2 β 0 is the lower r × n block of
Π = αβ 0 . Let yt = [y1t
                      0     0 0
                         , y2t ] , then (1.18) can be represented by the two subsystems:

                           ∆y1t = φ0 ∆y2t + lags + w1t                             (1.19)
                            ∆y2t = π20 yt−1 + lags + w2t                           (1.20)

where “lags” represent the terms due to ∆yt−1 , . . . , ∆yt−p+1 . Although, the sys-
tem (1.18) is written as a structural model considered by Hsiao (1997), it is not
a “structural” system in the usual sense. It should further be noticed that in
(1.19) the rank restrictions show up in the form of (n − r)2 linear over-identifying
restrictions. The remaining r equations in (1.20) are just identified. The SE rep-
resentation turns out to be useful for imposing restrictions on the parameters (see
Chapter 2).



1.4       Weak exogeneity in stationary VARs
An important structural assumption is the distinction between exogenous and
endogenous variables. Let zt0 = [yt0 , x0t ], where yt and xt are m × 1 and k × 1
vectors of time series, respectively. Furthermore we define the increasing sigma-
field Zt = {zt , zt−1 , zt−2 , . . .}. Then, according to Engle et al. (1983) the variable
1.4. WEAK EXOGENEITY IN STATIONARY VARS                                                      21

xt is (weakly) exogenous if we can factorize the joint density of zt with parameter
vector θ = [θ10 , θ20 ]0 as

                    f (zt |Zt−1 , ; θ) = f1 (yt |xt , Zt−1 ; θ1 ) · f2 (xt |Zt−1 ; θ2 )

such that the parameter vector θ1 of the conditional density f1 (·|· ; θ1 ) does not
depend on the parameter vector θ2 of the conditional density f2 (·|· ; θ2 ), and θ1
and θ2 are variation free, that is, a change in θ2 has no effect on θ1 (cf Engle et
al. 1983).
     In the dynamic structural model given in (??) the parameter θ1 comprises the
elements of the matrices Γ0 , . . . , Γp , B0 , . . . , Bp and the non-redundant elements of
Σ. To embed the structural form in a corresponding form derived from the VAR
representation of the system we define the matrix

                                   Im −Σ12 Σ−1
                                 "               #
                                              22
                            Q=                     ,
                                    0      Ik

where the covariance matrix of the VAR innovations Σ = E(εt ε0t ) is decomposed
as                                          "                #
                                                Σ11    Σ12
                                                Σ21    Σ22
such that Σ11 is the covariance matrix of the innovations of yt and Σ22 is the
covariance matrix of the innovations of xt . Multiplying the VAR system (1.5) by
Q yields a block recursive system of the form

                              Φ0 zt = Φ1 zt−1 + · · · + Φp zt−p + vt                      (1.21)

or for the first m equations

                       yt = Φ12 xt + Φ1,1 zt−1 + · · · + Φ1,p zt−p + v1t ,                (1.22)

where Φ0 = Q, Φ12 = Σ12 Σ−1
                         22 and the matrix Φ1,j denotes the upper m × n

block of the matrix Φj = QAj for j = 1, . . . , p. Similarly, vt is partitioned as
             0     0 0
Qεt = vt = [v1t , v2t ] , where the covariance matrix of vt is block diagonal with
respect to v1 and v2 .
22                                                    CHAPTER 1. THE REDUCED FORM

          In many applications, economic theory does not imply restrictions on the short
run dynamics of the system.3 Thus we follow Monfort and Rabemananjara (1990)
and assume that there are no restrictions on the matrices Γ1 , Γ2 , . . . , Γp . Premulti-
plying (1.22) by B0 and comparing the result with (??) gives rise to the following
characterization of a vector of weakly exogenous variables.

DEFINITION 1.2 Let zt = [yt0 , x0t ]0 be an n × 1 time series vector with a sta-
tionary VAR[p] representation as given in Assumption 1.1 and εt ∼ N (0, Σ). The
subvector xt is weakly exogenous for the parameters of the structural form (??),
iff
                                               B0 Φ12 = Γ0 .                                   (1.23)

It is straightforward to show that this definition is indeed equivalent to the defi-
nition of weak exogeneity suggested by Engle et al. (1983). From (1.22) it follows
that
                   E(yt |xt , zt−1 , . . . , zt−p ) = Φ12 xt + Φ1,1 zt−1 + · · · + Φ1,p zt−p

Accordingly, if xt is predetermined, the parameters of the structural form result
as functions from the parameters of the conditional mean and variance of yt given
xt , zt−1 , . . . , zt−p . Under normality it follows that the vector of structural param-
eters θ1 in f1 (yt |xt , Zt−1 ; θ1 ) does not depend on θ2 in f2 (xt |Zt−1 ; θ2 ).
          If there are (cross-equation) restrictions on the matrices B1 , . . . , Bp some ex-
tra conditions are needed to ensure that xt is weakly exogenous (see Monfort
and Rabemananjara 1990). An important example for such restrictions are rank
restrictions in cointegrated systems.
          Assume that the structural analog of a cointegrated system can be represented
as
                           C0 zt = C1 zt−1 + C2 zt−2 + · · · + Cp zt−p + et ,                  (1.24)

where zt = [yt0 , x0t ]0 is partitioned such that
                                           "         #
                                              B0 −Γ0
                                      C0 =
                                             Cxx Cxy
      3
          A notable exception are models based on dynamic maximization assuming rational expec-
tations (e.g. Wickens 1982).
1.4. WEAK EXOGENEITY IN STATIONARY VARS                                                        23

and the upper m × n block of Cj (j = 1, . . . , p) is equal to [Bj , Γj ]. The error
vector et = [u0t , wt0 ]0 is white noise. Accordingly, the upper m equations of the
system yield a traditional structural form as given in (??). The structural system
as given in (1.24) is obtained from the reduced form VAR representation (1.5) by
a pre-multiplication with the matrix C0 .
    Premultiplying the reduced form VECM (1.12) by C0 the structural form of
the cointegrated system is obtained (cf Johansen and Juselius 1994)

      B0 ∆yt = α1∗ β 0 zt−1 + Γ0 ∆xt + Γ∗1 ∆zt−1 + · · · + Γ∗p−1 ∆zt−p+1 + ut ,             (1.25)

where Γ∗j is the upper m×n block of the matrix C0 Γj and α1∗ = [Γ0 , B0 ]α. Without
additional restrictions both expectations E(yt |xt , zt−1 , . . . ,zt−p ) and E(yt |zt−1 , . . . ,
zt−p ) depend on the error correction term β 0 zt−1 , in general. It follows that the
parameter vectors θ1 in f1 (yt |xt , Zt−1 ; θ1 ) and θ2 in f2 (xt |Zt−1 ; θ2 ) depend on β
and, hence, xt is not weakly exogenous in the sense of Engle et al. (1983). How-
ever, if the lower k × n block of α (resp. Π) is a zero matrix, that is, the error
correction term does not enter the “marginal model”, then the vector θ1 does not
depend on β (see Boswijk and Urbain (1997) and the references therein).
    As before let

              E(yt |xt , zt−1 , . . . , zt−p ) = Φ12 xt + Φ1,1 zt−1 + · · · + Φ1,p zt−p .

If there are no restrictions on Γ∗1 , . . . , Γ∗p−1 , Definition 1.2 can be straightforwardly
adapted to the case of weak exogeneity in a cointegrated system.

DEFINITION 1.3 Let zt0 = [yt0 , x0t ] be a (m + k) × 1 time series vector with
a cointegrated VAR[p] representation given in (1.12) and εt ∼ N (0, Σ). The
subvector xt is weakly exogenous with respect to the structural VECM given in
(1.25), iff

                                           (i)      B0 Φ12 = Γ0
                                    and (ii)        α2 = 0,

where α2 is the lower k × r block of the matrix α.
24                                            CHAPTER 1. THE REDUCED FORM

     This definition of weak exogeneity is more general than the definition suggested
by Johansen (1992b), who assumes that B0 = I and Boswijk and Urbain (1997),
who assume that the matrix B0 is block triangular. In the latter case , the
condition (i) of Definition 1.3 can be replaced by the condition (i’) E(ut wt0 ) = 0,
where et = [u0t , wt0 ] is the vector of disturbances in (1.24).
     If xt is weakly exogenous for the structural parameters B0 , Γ0 , Γ∗1 , . . . , Γ∗p−1 ,
then the partial system (1.25) can be estimated efficiently without involving the
marginal model for xt (Johansen 1992b). In particular, if m = 1, the parameters
can be estimated efficiently by OLS on the single equations. Dolado (1992) shows
that condition (ii) in Definition 1.3 is not necessary to establish the efficiency of
the OLS estimator. The reason is that for an efficient OLS estimator it is required
that
                                   lim E(∆xT u0T ) = 0 .
                                  T →∞

This condition is satisfied by imposing α2 = 0 but it may also be fulfilled by
imposing restrictions on β⊥ (cf. Dolado 1992).



1.5       Identifying restrictions
Consider the structural VECM model given by (1.25). To achieve a unique iden-
tification of the structural form, restrictions on the parameters are required. Fol-
lowing Hsiao (1997) I first make the following assumption:
                                                                T
Assumption 1.3 It is assumed that |B0 | 6= 0 and T −2                 xt x0t converges in dis-
                                                                P
                                                                t=1
tribution to a nonsingular random matrix.

     Hsiao (1997) shows that this assumption implies that the roots of the poly-
nomial B0 + B1 L + · · · + Bp Lp lie outside the unit circle and, thus, the usual
stability condition for dynamic systems (e.g. Davidson and Hall 1991) is satisfied.
An important property of the stable dynamic system is that the distribution of yt
conditional on xt does not depend on initial conditions.
     Johansen and Juselius (1994) distinguish four kinds of identifying assumptions:
1.5. IDENTIFYING RESTRICTIONS                                                             25

(i) Linear restrictions on the contemporary relationships:

                                  R0 vec(B0 , Γ0 ) = r0 .                             (1.26)

(ii) Restrictions on the short run dynamics:

                               R1 vec(Γ∗1 , . . . , Γ∗p−1 ) = r1 .                    (1.27)

(iii) Restrictions on the long run relationships:

                                     Rβ vec(β) = rβ .                                 (1.28)

(iv) Restrictions on the “loading matrix”:

                                     Rα vec(α1∗ ) = rα .                              (1.29)

In principle we may also include restrictions on the covariance matrix Σ in the
list of identifying assumptions. However, in the traditional Cowles-Commission
type of structural models such restrictions are not very common. In contrast,
the “structural VAR approach” which is considered in Chapter 3 relies heavily on
covariance restrictions.
   To identify the parameters of the structural form, a sufficient number of re-
strictions is required. Hsiao (1997) calls the matrix Π∗1 = α1∗ β 0 “long run rela-
tion matrices”. He assumes that linear restrictions are imposed on the matrix
A∗ = [B0 , Γ0 , Γ∗1 , . . . , Γ∗p−1 , Π∗1 ] so that for the g’th equation the restriction can
concisely be written as Rg∗ a∗g = 0, where a∗g is the g’th column of A∗ 0 and Rg∗ is a
known matrix. In this case the rank condition is

                                  rk(Rg∗ A∗ 0 ) = m − 1 .

Hsiao (1997) emphasize that this rank condition is equivalent to the usual rank
condition in the SE model and, thus, cointegration does not imply additional
complications to the identification problem. However, this is only true if Π∗1 is
considered as the long run parameter matrix. In Johansen’s (1995b) framework
the long run parameters are represented by the matrix β and the nonlinearity im-
plied by the product α1∗ β 0 indeed imply additional problems for the identification
26                                                   CHAPTER 1. THE REDUCED FORM

of the system. Specifically Johansen (1995b) points out that the rank condition
must be checked for every possible value of β. He suggests a sequential procedure
to verify a more restrictive concept labeled as “generic identification”.
         In practice, identification is often checked by applying the so-called order con-
dition, which is a necessary condition for identification. The application of these
criteria for restrictions of the form (i) and (ii) is well documented in many econo-
metric text books (e.g. Judge et al. 1988, Hamilton 1994) and there is no need
to repeat the discussion here. Rather I will concentrate on the structural form of
a cointegrated system given in (1.25).
         First, I consider the identification of the cointegration matrix β. Johansen and
Juselius (1990, 1992) consider restrictions of the form

                                            Rβ = 0,      j = 1, . . . , r                       (1.30)
                                    or      β = Hϕ,                                             (1.31)

where R is a given (n−q)×n matrix and H is a n×q matrix obeying RH = 0 and
q ≤ n − r. Comparing this restriction with (1.28) reveals two differences. First,
the restriction (1.30) assumes rβ = 0. This specification excludes the restriction of
cointegration parameters to prespecified values. Since the cointegration property
is invariant to a scale transformation of the cointegration vector, such constants
are not identified.4 Second, all r cointegration vectors are assumed to satisfy the
same linear restriction Rβj = 0, where βj is the j’th row of β. Of course, this is
a serious limitation of such type of restrictions. Nevertheless, in many empirical
applications, the restrictions on the cointegration vectors can be written as in
(1.30) (e.g. Johansen and Juselius 1990, 1992, Hoffman and Rasche 1996).
         Of course, if there is only one cointegration vector, then this kind of restriction
does not imply a loss of generality. Another important class of restrictions covered
by (1.30) is the case that the basis of the cointegration space is known. As in King
et al. (1991) assume that yt = [ct , it , ot ]0 , where ct denotes the log of consumption,
     4
         To facilitate the interpretation, the cointegration vectors are often normalized so that one of
the coefficients is unity. However such a normalization does not restrict the cointegration space
and is therefore not testable.
1.5. IDENTIFYING RESTRICTIONS                                                         27

it is the log of investment, and ot denotes the log output. Suppose that ct − ot and
it − ot are stationary. Accordingly, the cointegration space can be represented as
                                              
                                       1     0
                                              
                               β=    0     1 ϕ .
                                               
                                      −1 −1
Another important special case are “separable restrictions”, that is, restrictions
that apply to different parts of the cointegration vectors. An example is the
restriction:                  "                        #
                                  1 −1 0           0
                                            β=0.
                           0 0 1 −1
Notwithstanding these cases encountered frequently in practice, the restriction
(1.30) rules out important cases. Johansen and Juselius (1994) therefore consider
more general restrictions given by

                             diag(R1 , . . . , Rr )vec(β) = 0

or
                                  β = [H1 ϕ1 , . . . , Hr ϕr ] ,                  (1.32)

where Hj is a n×qj matrix and ϕj is a qj ×1 vector with qj ≤ n−r. This set of re-
strictions is more general than (1.30), since it allows for different linear restrictions
on the cointegration vectors. However, no restrictions across cointegration vec-
tors are accommodated. Such restrictions between different cointegration vectors,
however, do not seem to be important in practice.
     To identify the cointegration vector βj it is required that no other cointegration
vector (or a linear combination thereof) satisfy the restriction for βj . Accordingly,
the rank condition results as

                              rk(Rj β1 , . . . , Rj βr ) = r − 1

(cf. Johansen and Juselius 1994). The problem with the application of such a
rank condition is that it depends on the (unknown) parameter values β1 , . . . , βr .
To overcome the difficulties Johansen and Juselius (1994) suggest a criterion to
check for generic identification. Inserting (1.32) gives

                         rk(Rj H1 ϕ1 , . . . , Rj Hr ϕr ) = r − 1 .
28                                           CHAPTER 1. THE REDUCED FORM

From this rank condition Johansen (1995) derives a sequence of rank criteria which
can be used to check the identification for “almost all” possible vectors β. Fur-
thermore a simple order condition can be derived. Since (Rj β) is a qj × r matrix,
qj ≥ r − 1 restrictions are needed to identify βj in addition to a normalization
restriction.
     Davidson (1998) suggests an “atheoretical” approach to achieve unique coin-
tegration vectors that are identified up to a scale transformation. A cointegration
vector is called irreducible if no variable can be omitted from the cointegration
relationship without loss of the cointegration property. Such an irreducible coin-
tegration vector is unique up to a scale transformation. Davidson (1998) provides
a program that allows to determine the irreducible cointegration vectors from an
estimated cointegration matrix.
     Whenever the long run parameters β are properly identified, the short run
parameters can be identified in the usual way. Letting wt = β 0 yt , the structural
form of the VECM can be written as

       B0 ∆yt = α1∗ wt−1 + Γ0 ∆xt + Γ∗1 ∆zt−1 + · · · + Γ∗p−1 ∆zt−p+1 + ut ,          (1.33)

which takes the form of a traditional linear system of simultaneous equations. It
follows that the “short run parameters” B0 , Γ0 , α1∗ , Γ∗1 , . . . , Γ∗p−1 can be identified
by applying the traditional rank or order conditions (e.g. Judge et al. 1988, Hsiao
1997).
     As in Johansen and Juselius (1994) it is assumed that the long run and short
run parameters were identified separately. However, as pointed out by Boswijk
(1995), it is possible to identify β by using restrictions on α. For example, assume
that α is restricted to have a form similar to α = [Ir , α2 ]0 . Then β is identified
and can be computed from the reduced form as the upper block of the matrix
Π = αβ 0 . This identification is used in the SE representation of a cointegrated
system which is discussed in Section 1.3. The mixed case using restrictions on α
and β together to identify β is more complicated and does not seem important
for the empirical practice. See Boswijk (1995) for more details.
     As in the usual SE model, the identifying assumptions are derived from eco-
nomic theory. The assumptions on the long run relationships often result from
1.6. ESTIMATION UNDER LONG RUN RESTRICTIONS                                      29

equilibrium conditions on markets for goods and services, whereas the short run
restrictions are more difficult to motivate. An important source of short run
restrictions is the theory of rational expectations. Unfortunately, the resulting
restrictions usually imply highly nonlinear cross equation restrictions that are
difficult to impose on the SE systems. Therefore, the short run restrictions are
often imposed by making informal (“plausible”) assumptions or by testing the
coefficients against zero (the simplification stage of Hendry’s methodology). Ex-
amples are Juselius (1998) and Lütkepohl and Wolters (1998). Similarly, Garratt
et al. (1999) advocate a different treatment of long and short run restrictions.
They derive the long run relationships from (steady state) economic theory and
impose these restrictions on the cointegration vectors of a cointegrated VAR. The
resulting model for the long run relationship is called the “core model”:

                                   β 0 zt − c0 − c1 t = wt ,

where the vector zt = [yt0 , x0t ]0 comprises the endogenous and exogenous variables
of the system and β is subject to linear restrictions given in (1.28). At the second
stage, the short run response is represented in the model of the usual form (1.25).
The lag length of the adjustment model is selected by using conventional informa-
tion criteria like AIC or the BIC (cf. Lütkepohl 1991). Furthermore, coefficients
may be set to zero whenever they turn out to be insignificant with respect to a
prespecified significance level.



1.6      Estimation under long run restrictions
First the estimation of cointegrated VAR models with restrictions on the coin-
tegration vectors is considered. Since we assume that all other parameters are
unrestricted, the model can be estimated in its concentrated form:

                                    yt = αβ 0 yet−1 + εet ,
                                   ∆e                                        (1.34)

where ∆e
       yt and yet−1 are residual vectors from a regression of ∆yt and yt−1 on
∆yt−1 , . . . , ∆yt−p+1 and possible deterministic terms. The concentrated form is
30                                            CHAPTER 1. THE REDUCED FORM

equivalent to a cointegrated VAR[1] model. In what follows we therefore drop the
tildes for notational convenience.
     In the case that the restrictions on β take the form as in (1.31), Johansen and
Juselius (1990, 1992) suggest a simple ML estimation procedure. The restriction
is inserted in the VECM format (1.34) yielding

                              ∆yt = αφ0 H 0 yt−1 + εt
                                     = α∗ yt−1
                                           ∗
                                               + εt ,                         (1.35)

where α∗ = αφ0 and yt−1
                    ∗
                        = H 0 yt−1 . The restricted cointegration vectors can
                                                              ∗
easily be estimated from a reduced rank regression of ∆yt on yt−1 (cf Johansen
and Juselius 1992).
     To estimate the model under the more general set of restrictions given in (1.32)
no such simple reformulation of the model is available. Inserting the restriction
for the j’th cointegration vector in (1.34) gives
                                     r
                                     X
                            ∆yt =          αj ϕ0j Hj0 yt−1 + εt .             (1.36)
                                     j=1

Assume that we want to estimate the parameters of the first cointegration vector
ϕ1 . Equation (1.36) can then be reformulated as

                         ∆yt = α1 ϕ01 H10 yt−1 + ϑ02 yt−1 + εt ,              (1.37)

where ϑ2 = [β2 , . . . , βr ]. The idea of the switching algorithm suggested by Jo-
hansen (1995) is to estimate α1∗ = α1 ϕ01 conditional on an initial estimate of the
remaining cointegration vectors stacked in ϑ2 . In other words the system is es-
timated by treating the additional variables z2t = ϑ02 yt−1 as given. With the
resulting estimate of β1 a new set of variables is formed that are treated as given
for the estimation of the second cointegration vector. Therefore, the procedure
employs updated cointegration vectors on every estimation stage and proceeds
until the estimates have converged.
     Johansen (1995b) was not able to show that his “switching algorithm” indeed
converges to the global maximum of the likelihood function. Nevertheless, his
method is computationally convenient and seems to have reasonable properties in
1.6. ESTIMATION UNDER LONG RUN RESTRICTIONS                                        31

practice. It is implemented in the PcGive 9.0 software of Doornik and Hendry
(1996).
   Pesaran and Shin (1995) consider the ML estimation of the restricted likelihood
function which is equivalent to maximizing the function

              S ∗ (β, λ) = log |β 0 AT β| − log |β 0 BT β| + 2λ0 Hβ vec(β) ,    (1.38)

                          0
where AT = S11 − S01 S11 S01 and BT = S11 with Sij as defined in Section 1.4 and
restrictions of the general form (1.28) with rβ = 0. The derivative is

      ∂S ∗ (β, λ)  0                                       
                 = [(β AT β)−1 ⊗ AT ] − [(β 0 BT β)−1 ⊗ BT ] vec(β) + Hβ0 λ .
       vec(β)

From this derivative and ∂S ∗ (β, λ)/λ = Hβ vec(β), Pesaran and Shin (1995) derive
a first order condition which can be written as vec(β) = f (β), where f (β) is a
complicated nonlinear function. Based on this first order condition they suggest
an iterative scheme, where the updated estimate β (1) results from the preliminary
estimate β (0) as f (β (0) ). An important problem with such a procedure is, however,
that it is unknown whether it converges to a maximum. Pesaran and Shin (1995)
therefore suggest a “generalized Newton Raphson procedure” based on the first
and second derivatives of S ∗ (β, λ) given in (1.38). This estimator turns out to
be quite complicated but can be implemented by using numerical techniques (cf
Pesaran and Shin (1995) for more details).
   Hsiao (1997) argues that structural models can be estimated in the usual way
(e.g. using 2SLS, 3SLS or FIML) from a structural version of the VECM model.
However, this is only possible if the long run restrictions can be written as linear
restrictions on the matrix Π∗1 = α1∗ β 0 . Unfortunately, the matrix Π∗ mixes short
and long run parameters so that a linear restriction on β must be translated
into linear restriction on Π∗ . A simple way to do this is suggested in Breitung
(1995b). As in Section 1.3 we reformulate the system using α∗ = αα2−1 = [φ, Ir ]0
and φ = α1 α2−1 . Furthermore, we define π2 = βα20 so that α∗ π20 = αβ 0 .
   The reduced form VECM is multiplied by the matrix

                                  In−r −φ0
                                "           #
                          C0 =
                                    0    Ir
32                                          CHAPTER 1. THE REDUCED FORM

so that the resulting system can be written as

                                 ∆y1t = φ0 ∆y2t + w1t                           (1.39)
                             ∆y2t = π20 yt−1 + w2t ,                            (1.40)

              0      0 0
where yt = [∆y1t , ∆y2t ] . For more details on this representation see Section 1.3.
     The restriction for the j’th cointegration vector can be formulated as

                         βj = π2 aj = Hj ϕj ,     j = 1, . . . , r ,

where aj is the j’th row of α2−1 . Inserting this restriction into the subsystem (1.40)
gives

                            a0j ∆y2t = a0j π20 yt−1 + w2t
                                                       ∗


                                       = ϕj Hj0 yt−1 + w2t
                                                        ∗

                                             ∗        ∗
                                       = ϕj yj,t−1 + w2t ,                      (1.41)

       ∗
where w2t = a0j w2t and yj,t−1
                         ∗
                               = Hj0 yt−1 . Accordingly, the lower subsystem of the
structural model (1.40) is replaced by equations of the form (1.41), where the
        ∗
vector yj,t−1 is a vector of transformed variables.
     An example may help to illustrate the approach. To highlight the key features
of the transformation, consider the following example. Let yt = [Yt , Rt , rt , Mt ]0 ,
where Yt is the log of output, Rt and rt are a long term and a short term interest
rates, and Mt is the log of real money balances. Economic theory gives rise to two
cointegrating relationships, namely, a money demand relationship and the term
structure of interest rates. Accordingly, the cointegration space can be represented
as b1 Mt − b1 Yt + b2 Rt + b3 rt ∼ I(0) and b4 Rt − b4 rt ∼ I(0) (see, e.g., Hoffman
and Rasche, 1996, p. 194). Hence, under this hypothesis the cointegration space
is given by the matrix
                                           
                                 −b1    0
                                          
                            b2        −b4 
                         β=                = [H1 ϕ1 , H2 ϕ2 ] ,               (1.42)
                                          
                            b3         b4 
                                          
                                 b1     0
1.6. ESTIMATION UNDER LONG RUN RESTRICTIONS                                               33

where
                                                                      
                −1 0 0                                               0
                                                                  
            0         1 0                                      −1 
      H1 =                 ,   ϕ1 = [ b1 , b2 , b3 ] ,   H2 =      ,     ϕ2 = b 4 .
                                                                  
            0         0 1                                      1 
                                                                  
                1      0 0                                        0

Imposing these restrictions gives the following structural form:

          ∆Yt = φ11 ∆rt + φ12 ∆Mt + w1t
          ∆Rt = φ21 ∆rt + φ22 ∆Mt + w2t
                                                                         ∗
        a11 ∆rt = −a12 ∆Mt + ϕ11 (Mt−1 − Yt−1 ) + ϕ12 Rt−1 + ϕ13 rt−1 + w1t
                                                 ∗
      a22 ∆Mt = −a21 ∆rt + ϕ21 (Rt−1 − rt−1 ) + w2t .

To estimate this system, the third and fourth equation must be divided by a11
and a22 , respectively. The resulting system can be estimated with conventional
system estimators such as the 3SLS or the FIML estimator and no additional
complications arise by the cointegration properties of the system (cf. Hsiao 1997).
The asymptotic properties of the 2SLS and 3SLS estimator are given in

THEOREM 1.4 Let yt be generated by a cointegrated VAR[1] with 0 < r <
n. Furthermore, J1 and J2 are known matrices satisfying rk(J1 α) = s ≤ r and
rk(β 0 J2 ) ≤ s. Then:

  (i) The 2SLS and 3SLS estimates of φ in (1.39) are identical.
                                                               √
 (ii) The 2SLS and the 3SLS estimates of J1 π 0 J2 are             T –consistent and asymp-
      totically normally distributed with the same non-singular covariance matrix.

Proof: (i) As has been shown by Zellner and Theil (1962) the 2SLS and 3SLS
estimates of an over-identified subsystem are identical if the remaining equations
are just identified.
(ii) The model can be re-written as
                              " 0     #"      #
                                φ 0      ∆y2t
                    ∆yt =                       + wt
                                0 π20    yt−1
34                                                   CHAPTER 1. THE REDUCED FORM
                                                                            
                                                                  ∆y2t
                                           φ0
                                       "                  #
                                                0        0           
                                   =                        β 0 yt−1  + wt
                                           0    α2       τ
                                                                     
                                                              0
                                                             β⊥ yt−1
                                   = Xt θ + wt ,

where τ = 0 and
                                                                  0
                                                     "                                           #
                                                         In−r ⊗ ∆y2t                   0
                  θ = vec(φ, π2 , α20 ),    Xt =                                                     .
                                                                                   0
                                                              0              Ir ⊗ yt−1 β

In this representation the subvector θ1 in θ = [θ10 , θ20 ]0 comprises the parameters
attached to stationary variables, whereas θ2 contains the parameters attached to
the nonstationary variables β⊥0 yt−1 . In this representation [α2 , τ ] = π20 Q−1 , where
Q = [β, β⊥ ]0 .
                                                                                0             0 0
     Stacking the observations for t = 2, . . . , T into matrices such as X = [X12 , . . . , X1T ],
y = [∆y20 , . . . , ∆yT0 ]0 , and w = [w20 , . . . , wT0 ]0 the model is written as y = Xθ + w.
                                                     0               0             0 0
The matrix of instruments is defined as Z1t = (In ⊗ yt−1 ) and Z = [Z12 , . . . , Z1T ].
The IV estimator of θ is given by

                       θbiv = [X 0 Z(Z 0 ΩZ)−1 Z 0 X]−1 X 0 Z(Z 0 ΩZ)−1 Z 0 y .

For the 2SLS estimate Ω = I and for the 3SLS estimate Ω = (IT −1 ⊗ C0 ΣC00 ).
   Let ΥT = diag{T −1/2 I, T −1 I}. Using Q = [β, β⊥ ]0 we get
                                                    " 0          #"           #−1 "                                             #
                                                       A 1    0     A 2    0         A1                                    0
ΥT X 0 ZQΥT (ΥT Q0 Z 0 ΩZQΥT )−1 ΥT Q0 Z 0 XΥT ⇒
                                                        0 B0        0 B2             0                                     B1
                                                        " 0 1−1                    #
                                                          A 1 A2 A1         0
                                                    =
                                                               0       B10 B2−1 B1
and
                                                                                                          #−1 "
                                                                       A01
                                                                   "                   #"                              #
                                                                                 0          A2       0            B3
ΥT X 0 ZQΥT (ΥT Q0 Z 0 ΩZQΥT )−1 Υ2 Q0 Z 0 w                  ⇒
                                                                       0         B20        0        B2           B4
                                                                           A01 A−1
                                                                       "                    #
                                                                                2 B3
                                                                   =                            ,
                                                                           B10 B2−1 B4

where Ai (i = 1, 2) are fixed matrices and Bi (i = 1, . . . , 4) are stochastic matrices
which can be represented as functionals of Brownian motions. Note that only the
1.6. ESTIMATION UNDER LONG RUN RESTRICTIONS                                           35

matrices A2 and B3 depend on the covariance matrix Ω. With these results we
obtain:
                                          (A01 A−1    −1 0 −1
                                      "                                  #
                                                2 A1 ) A1 A2 B3
                    ΥT (θbiv − θ) ⇒                                          .
                                          (B10 B2−1 B1 )−1 B10 B2−1 B4
Since A1 and B2 are square matrices we get
                                           A−1
                                       "           !#
                                            1 B3
                       ΥT (θbiv − θ) ⇒                .
                                           B1−1 B4
which does not depend on Ω. Thus, the limiting distributions of the 2SLS and
the 3SLS estimators are the same.

    (iii) Since B3 is normally distributed it is seen from (ii) that the IV estimator
for θ1 is asymptotically normal. Furthermore, B1 is the limit of T −2 β⊥0 yt−1 yt−1  0
                                                                       P
                                                                                       β⊥
and B4 is the limit of T −1 β⊥0 yt−1 so that B1−1 B4 is mixed normal. The IV esti-
                            P

mate of the matrix π2 is equivalent to the product of IV estimates α    b2,iv βb0 . Since
                                                                                 iv

                                                               b2,iv β 0 . Therefore a
βb is super-consistent, the asymptotic behaviour is similar to α
                             0
necessary condition for J1 π
                           b2,iv to have a regular normal limiting distribution is
that the matrix J1 has rank s1 ≤ r rows. Similarly, it is easy to show that a sec-
                                  0
ond necessary condition is that π
                                b2,iv      b2,iv β 0 J2 whenever rk(β 0 J2 ) ≤ s because
                                      J2 = α
otherwise the rank of the covariance matrix is singular. 

Remark A: It is important to notice that the cointegration parameters are not
estimated super-consistently but have the usual rate for coefficients attached to
stationary variables. The reason is that in the SE system the matrix π2 = βα20 is
a product of short and long run parameters so that the properties implied by the
short run parameters dominate the asymptotic properties of the estimate of π2 .

Remark B: Since the system (1.39) – (1.40) is a linear transformation of the
                               b2 is identical to (β̂ α̂0 ), where βb and α
VECM system, the FIML estimate π                                2         b2 denote
Johansen’s (1988) ML estimators. Accordingly, T −consistent estimates of the
cointegration vectors can be obtained by post-multiplying π
                                                          b2 with the inverse of
b20 . It will be shown below that if the cointegration vectors are identified by
α
using sufficient long run restrictions, the associated parameters can be estimated
T −consistently.
36                                         CHAPTER 1. THE REDUCED FORM

Remark C: The matrix of coefficients attached to the lagged levels admits the
expansion π    b2 β 0 + Op (T −1 ), where α
          b2 = α                          b2 is the least-squares estimate of α2 in
the regression ∆y2t = α2 zt−1 + w2t and z = β 0 yt . Thus, for any fixed matrices J1
                         √
and J2 the estimates are T −consistent and asymptotically normal. To obtain a
nonsingular covariance matrix of J1 π20 J2 , rank conditions on the matrices J1 and
J2 are required.

Next, we consider the Full Information Maximum Likelihood (FIML) estimator.
Using the SE representation (1.39) and (1.40) the following lemma gives simple
expressions for the scores of the likelihood function.

LEMMA 1.1 (i) Let B
                  b1 (zt ) and B
                               b2 (zt ) denote the least-squares estimates of B1
and B2 in a regression
                             zt = B1 w1t + B2 w2t + et ,
                                                                 0     0 0
where w1t , w2t are (n−r)×1 and r ×1 subvectors such that wt = [w1t , w2t ] = C0 εt .
Then, the scores of the likelihood function for the SE model given in (1.39) – (1.40)
can be written as
                              ∂L(φ, π2 )
                                         = B
                                           b1 (∆y2t )
                                ∂φ0
                              ∂L(φ, π2 )
                                         = B
                                           b2 (yt−1 ),
                                ∂π20
where L(·) denotes the (conditional) log-likelihood function.

Proof: (i) For convenience we first orthogonalize the system given by (1.39)
and (1.40) so that it is written in a recursive form. Let w1t = H1 w2t + v1t ,
       0                         0
E(w2t w2t ) = Σ22 , H1 = [E(w2t w2t )]−1 E(w2t w1t
                                                0
                                                   ) such that v1t is orthogonal to w2t
and Σ1|2 denotes the covariance matrix of v1t . Then, the log-likelihood function
is given by

         2L(·) = const − T ln |Σ22 | − T ln |Σ1|2 |
                 X                X
               −      0
                    w2t Σ−1
                         22 wt2 −     (w1t − H10 w2t )0 Σ−1          0
                                                         1|2 (w1t − H1 w2t ).


It is easy to obtain the derivatives with respect to Σ∗ = E(wt wt0 ) as
                               ∂L      T ∗ 1 0
                                     =   Σ − WW ,
                              ∂(Σ∗ )   2    2
1.6. ESTIMATION UNDER LONG RUN RESTRICTIONS                                                 37

where W = [W1 , W2 ], W1 = [w12 , . . . , w1T ]0 , W2 = [w22 , . . . , w2T ]0 . Differentiating
with respect to φ0 and inserting estimates for H1 and Σ1|2 gives

                             ∂L
                                 = ∆Y20 (W1 − W2 H1 )Σ−1 1|2
                             ∂φ0
                                 = ∆Y20 P2 W1 (W10 P2 W1 )
                                   = B
                                     b1 (y2t )

where P2 = I − W2 (W20 W2 )−1 W20 .
    Concentrating with respect to Σ22 and Σ1|2 we get

                    ∂L      0
                        = Y−1   [I − V1 (V10 V1 )−1 W10 ]W2 (W20 W2 )−1
                    ∂π2
                              0     b1 (yt−1 )W 0 ]W2 (W 0 W2 )−1
                        = [Y−1    −B              1       2
                              0
                           = Y−1 P1 W2 (W20 P1 W2 )−1                                   (1.43)
                           = B
                             b2 (yt−1 ) ,                                               (1.44)

where P1 = I − W1 (W10 W1 )−1 W10 . 

    Using the expressions for the scores in this lemma, a simple scoring algorithm
can be constructed by replacing the conditional expectations by least-squares
coefficients from multivariate regressions of the respective vectors on the residuals
w
b1t , w
      b2t of the previous iteration.
    It is interesting to know whether the asymptotic equivalence of the estimators
is also reflected in small samples. To this end a small Monte Carlo experiment is
performed. The data are generated according to the model

                                 y1t = y1,t−1 + ε1t                                     (1.45)
                                 y2t = π11 y1,t−1 + ε2t ,                               (1.46)

where                                                    
                                                 1   0.5
                               εt ∼ N 0,                  .
                                               0.5    1
For this model φ = 0 and π20 = [π21 , −1]. The FIML estimator is computed
using the scoring algorithm suggested in Theorem 1.1. Table 2.1 presents the
38                                             CHAPTER 1. THE REDUCED FORM

                 Table 2.1: Standardized RMSE for different estimators

                                      T =100                            T =1000
     √
         T ·RMSE of       2SLS        3SLS     FIML          2SLS       3SLS       FIML
                                                        π21 =1
            φb            1.02         1.02      0.94            1.01    1.01       1.00
           π
           b21            1.50         1.45      1.41            1.43    1.44       1.43
           π
           b22            1.44         1.44      1.39            1.43    1.43       1.43
                                                     π21 =0.5
            φb            0.92         0.92      0.87            0.90    0.90       0.89
           π
           b21            0.79         0.69      0.68            0.64    0.63       0.63
           π
           b22            1.30         1.29      1.25            1.25    1.25       1.25
                                                     π21 =0.2
            φb            0.80         0.80      0.77            0.79    0.79       0.78
           π
           b21            0.49         0.34      0.34            0.26    0.23       0.23
           π
           b22            1.14         1.13      1.11            1.09    1.09       1.09

     Note: This table presents the standardized root mean squared errors for alternative
     estimators computed from 1000 Monte Carlo replications of the model (1.45) and
     (1.46) with φ = 0 and π20 = [π21 , −1].



standardized root mean squared error computed as
                                      v
                                           M
                    √
                                      u
                                      uT X
                      T · RMSE(θ̂) =  t       (θ̂i − θ)2 ,                                 (1.47)
                                        M i=1

where θ̂i is the i’th realization (i = 1, . . . , M ) of the estimator θ̂ for θ. In case of
√
  T –consistent estimates the standardized RMSE should converge to the limiting
value as T → ∞. In our experiment we let π21 ∈ {1, 0.5, 0.2}, T ∈ {100, 1000}
and M = 1000.
     As can be seen from Table 2.1 the alternative estimators perform roughly
similar in samples as large as T = 1000. Moreover, the standardized RMSE are of
                                                                           √
the same magnitude confirming our theoretical result that all estimates are T –
1.7. RESTRICTIONS ON SHORT RUN PARAMETERS                                             39

consistent. In small samples, however, the performance of the estimators depends
crucially on the parameter π21 . This parameter determines the importance of the
random walk component in y2t and thus affects the validity of the asymptotic
approximation in small samples. In effect, if π21 is small, the dynamic properties
of the series y2t are dominated by the stationary term ε2t . For stationary variables
the 3SLS (and FIML) estimates are more efficient than the 2SLS estimates, so
that a gain in efficiency is observed for π21 = 0.2. For a more important random
walk component in y2t we observe that all estimators perform similarly.
   An important problem is the normalization of the equation (1.41). Usually
the matrix C0 is normalized to have unit elements on the leading diagonal. This
normalization implies that the variable with a unit coefficient is the dependent
variable in the equation. For this normalization, all parameter estimates are
                                                                 √
asymptotically normal with the usual convergence rate of T . The reason is
that the ML estimate of π20 = α2 β 0 is identical to α
                                                     b2 βb0 , where α
                                                                    b2 and βb denote
                                                                  √
the ML estimates using Johansen’s approach. Since α         b2 is T -consistent and
asymptotically normal, the asymptotic properties of π
                                                    b2 are dominated by the
properties of α
              b2 .
   If one is interested in super-consistent estimates of the cointegration param-
eters, a normalization with respect to the cointegration parameters is required.
A possibility is to normalize the cointegration vectors as in Phillips (1991). This
is achieved by letting βbP = π   π21 )−1 , where π
                             b2 (b               b21 is the upper r × r block of π
                                                                                 b2 .
The resulting estimator is T −consistent and has the same asymptotic properties
as Phillips’ (1991) estimator.



1.7      Restrictions on short run parameters
Following Johansen and Juselius (1994) and Hsiao (1997), the parameters α1∗ , Γ0 ,
Γ∗1 , . . . , Γ∗p−1 in (1.25) are classified as “short run parameters”. Usually, economic
theory is silent about the short run parameters Γ∗1 , . . . , Γ∗p−1 . Therefore, these
parameters are left unrestricted and, thus, these parameters can be “partialled
out” for convenience. In contrast, economic theory often motivates hypotheses on
40                                           CHAPTER 1. THE REDUCED FORM

the loading matrix α (or α1∗ ).

Hypotheses on α. Johansen (1991) and Johansen and Juselius (1992) consider
the null hypothesis
                              Rα α = 0     or    α = Aϕα ,                     (1.48)

where Rα is a known (n − q) × n matrix and A is an n × q matrix satisfying
Rα A = 0. Note that q cannot be smaller than r because otherwise the rank of α
is smaller than r.
     To estimate the system under restriction (1.48) we consider again a VAR[1]
model and assume that no other restrictions are imposed. Following Johansen
(1995a, p. 124) the system is multiplied by the matrices Ā and A⊥ with the
properties that Ā0 A = I and A0⊥ A = 0 so that

                               Ā0 ∆yt = ϕα β 0 yt−1 + Ā0 εt
                              A0⊥ ∆yt = A0⊥ εt .

The restricted eigenvalue problem results as

                                      0
                      |λS11.ap erp − Sa1.a      S −1 S
                                           p erp aa.a⊥ a1.a⊥
                                                             |=0,              (1.49)

where

                 S11.a⊥ = S11 − S10 A⊥ (A0⊥ S00 A⊥ )−1 A0⊥ S10
                                                            0


               Sa1.ap erp = Ā0 S11 − Ā0 S10 A⊥ (A0⊥ S00 A⊥ )−1 A0⊥ S10
                                                                      0


                 Saa.a⊥ = Ā0 S11 Ā − Ā0 S10 A⊥ (A0⊥ S00 A⊥ )−1 A0⊥ S10
                                                                       0
                                                                          Ā

(see Johansen, 1995a, Theorem 8.2). Estimates for the cointegration vectors are
obtained as the eigenvectors of the eigenvalue problem (1.49).
     Since this approach is fairly complicated, it is attractive to consider the cor-
responding procedure in the SE approach. Premultiplying the (concentrated)
VECM format with Rα gives
                                       Rα ∆yt = ε∗t

where ε∗t = Rα εt .
1.7. RESTRICTIONS ON SHORT RUN PARAMETERS                                          41

   An important special case of linear restrictions on α is the hypothesis that a
subset of variables is weakly exogenous. Let zt = [yt0 , x0t ]0 , where yt and xt are
m × 1 and k × 1 subvectors. Then, the conditional model for yt given xt can be
estimated efficiently if xt is weakly exogenous for the parameters of the conditional
model in the sense of Engle, Hendry and Richard (1983). From Definition 1.3 it
follows that this is the case if the error correction term β 0 yt−1 does not enter the
marginal system for xt and, thus, the corresponding block α2 is equal to zero.
   This restriction can easily be imposed using the simultaneous equation ap-
proach given in (1.39) – (1.40). The null hypothesis (1.48) implies that the rows
of Rα lie in the space spanned by the columns of the orthogonal complement α⊥ .
Accordingly, the null hypothesis can be imposed by replacing the upper n−q rows
of transformation matrix C0 by the first n − q rows of Rα .
   As an example, assume that we want to test whether the variable it in the
cointegrated system yt = [Yt , it , Mt ]0 is weakly exogenous. If we assume a single
cointegration relationship, this hypothesis implies that the second element of the
vector α is zero. Accordingly Rα = [0, 1, 0] and the model becomes

                       ∆it = w1t                                               (1.50)
                      ∆Yt = a1 ∆Mt + w2t                                       (1.51)
                     ∆Mt = b1 Yt−1 + b2 it−1 + b3 Mt−1 + w3t .                 (1.52)

The additional over-identifying restriction in (1.50) can be tested, e.g., using an
LR test procedure, for example. In our example it is also possible to test the
restriction by testing whether the additional inclusion of ∆Mt in equation (1.50)
yields a significant coefficient.
   Hypotheses on α may also be motivated by a structural model for the per-
                               0
manent shocks defined as τt = α⊥ εt (cf. Johansen 1995, p. 74). For example, a
real business cycle framework implies that the permanent shocks are related to
the technical progress (or other supply side factors) and, thus, it may be asserted
that innovations of monetary variables do not enter the permanent shock. To
identify the first permanent shock of the system (1.50) — (1.52) as a real shock,
we may therefore set the coefficient a1 equal to zero, which is of course identical
to assuming that Yt is weakly exogenous.
42                                           CHAPTER 1. THE REDUCED FORM

     The information that some variables in yt are exogenous may also be used to
improve the power of the LR test for the cointegration rank (Harbo et al. 1998
and Pesaran et al. 1999). Consider a VAR[1] process for the vector zt = [yt0 , x0t ]0 ,
where yt is a vector of m endogenous variables and xt is the vector of k exogenous
variables. Following Harbo et al. (1998) assume that the structural VECM can be
written as in (1.25) where B0 = Im and the matrices Γ0 and Γ∗j (j = 1, . . . , p − 1)
are assumed to be unrestricted. Hence, the only restriction, which is used is that
xt is exogenous and, thus, the respective submatrix of α in the reduced form
VECM is equal to zero. The concentrated model results as

                                   yt = Π∗1 zet−1 + u
                                  ∆e                et ,
                                                                           0
where yet and zet−1 are the residuals from a regression of yt and zt−1 = [yt−1 , x0t−1 ]0
on ∆xt , . . . , ∆xt−p+1 . The LR test of the hypothesis r = r0 results as the sum of
the eigenvalues from a reduced rank regression of ∆e
                                                   yt on zet−1 . As shown by Harbo
et al. (1998) the resulting LR (trace) statistic is asymptotically distributed as
                     nZ 1                       Z 1                     −1
                                              0                       0
        Λ(r0 ) ⇒ tr         dWm−r (a)Wn−r (a)        Wn−r (a)Wn−r (a) da
                         0                         0
                      Z 1                     o
                           Wn−r (a)dWm−r (a)0
                        0
and, thus, the table for the critical values must account for the dimensions m and
r (see Harbo et al. 1998).
     Rahbek and Mosconi (1999) consider tests of the cointegration rank in the
presence of weakly exogenous I(0) regressors. Let xt denote a stationary weakly
exogenous variable. Rahbek and Mosconi (1999) suggest forming the partial sum
process x∗t = x1 +· · ·+xt and include x∗t instead of xt in the system. The resulting
cointegration vector is restricted not to include the variables in x∗t and the usual
LR test procedures can be applied in the system zt∗ = [yt0 , x∗t 0 ]0 .

Testing causality. Another important hypothesis concerning the short run pa-
rameters of the system is that some variables are not causal for other variables of
                                            0     0     0 0
the system. Let yt be partitioned as yt = [y1t , y2t , y3t ] , where the three subvectors
are of dimension n1 , n2 and n3 , respectively. If y2t is not causal for y1t accord-
ing to the definition of Granger (1969), then E(y1,t+1 |It ) = E(y1,t+1 |It∗ ), where
1.7. RESTRICTIONS ON SHORT RUN PARAMETERS                                                       43

It = {yt , yt−1 , . . .} and It∗ = {y1t , y3t , y1,t−1 , y3,t−1 , . . .}. Although this hypothesis
imposes restrictions on the matrices Π = αβ 0 and Γ1 , . . . , Γp−1 in (1.12), we con-
centrate our discussion to the restrictions on the matrix Π. Restrictions on the
matrices Γ1 , . . . , Γp−1 do not imply additional complications.
    Toda and Phillips (1993, 1994) consider two approaches to test the causality
hypothesis. First, the hypothesis may be tested by using an unrestricted VAR in
levels. In a VAR[1] system4 this amounts to testing whether the estimated matrix
Π
e 12 from the partitioning
                                               
                       Π
                       e 11   Π
                              e 12       Π
                                         e 13                       !                     !−1
                                                    T
                                                    X                   T
                                                                        X
                                                              0                     0
                                             
             e = Π
             Π    21
                   e          Π
                              e 22       Π
                                         e 23  =
                                                         yt yt−1             yt−1 yt−1
                                                    t=2                 t=2
                   Π
                   e 11       Π
                              e 12       Π13
                                         e

is significantly different from the zero matrix. Since this estimator has asymptotic
representation Π e 12 = αb1 β20 + Op (T −1 ), where αj and βj (j = 1, 2, 3) are subma-
trices of α and β partitioned according to the subvectors of yt . To obtain an
asymptotically normal estimator for Π12 with a nonsingular covariance matrix we
need to assume that rk(β2 ) = r2 . This condition is called “sufficient cointegration”
by Toda and Phillips (1994). Of course this condition may fail in practice and
for this case, Toda and Phillips (1993) show that the asymptotic distribution of
the Wald statistic is nonstandard and depends on nuisance parameters. Assume
for example that n = 3 and r = 1 with a cointegration vector β = [β1 , 0, β3 ]0 so
that rk(β2 ) = 0. In this case the Wald statistic fails to yield an asymptotically χ2
distributed test statistic.
    The second approach is to estimate α and β by using Johansen’s ML estima-
                        b1 βb0 is significantly different from zero. This approach
tor and testing whether α            2

suffers from a similar rank problem and sufficient conditions for χ2 distributed
test statistics are the rank conditions (i) rk(β2 ) = r2 or (ii) rk(α1 ) = n1 (cf Toda
and Phillips 1993).
    Dolado and Lütkepohl (1996) and Toda and Yamamoto (1995) suggest an
elegant approach to resolve these problems. They show that the Wald test has
the usual χ2 distribution whenever the VAR model is estimated with an additional
lag which is, however, not included in the null hypothesis. This test is called the
44                                        CHAPTER 1. THE REDUCED FORM

“lag-augmentation test” for causality. Assume that we estimate a VAR[2] model
instead of the true VAR[1] process. Then, the estimator of Π12 results from
replacing y1t and y2,t−1 by the residual vectors from the regressions of y1t and
y2,t−1 on yt−2 . In contrast to the original variables, these residuals are stationary
and, therefore, the resulting estimate for Π12 has standard asymptotic properties
and the Wald statistic is valid in any case. Of course this approach implies a loss
of power because the model is augmented with unnecessary regressors.
     The causality hypothesis can also be implemented in the SE approach. Assume
that the system can be arranged so that the last n1 < r equations have y1t as the
set of dependent variables. If there is no causality from y2t , then the respective
coefficients of the matrix π20 in the lower n1 equations are zero. Of course, the
dimension of the vector must have a dimension lower than r which is also assumed
in the work of Toda and Phillips (1993, 1994). Furthermore from Theorem 1.4 (iii)
rank conditions for α1 and β2 can be deduced that are the same as in Toda and
Phillips (1993, 1994). Therefore, the SE approach suffers from the same problems
as the other approaches.



1.8       Deterministic terms
In this section the treatment of deterministic terms is discussed. Following Jo-
hansen (1994) we will confine ourselves to the case of a constant and linear trend.
Models with dummy variables like intervention dummies or seasonal dummies can
be handled in a similar manner.
     For convenience we consider again a cointegrated VAR[1] model. Since we can
concentrate out any unrestricted higher order dynamics this does not imply a loss
of generality. Introducing a linear time trend in the VECM representation yields

                           ∆yt = µ∗0 + µ∗1 t + Πyt−1 + εt .                    (1.53)

Since ∆yt is allowed to have a linear time trend, yt may have a quadratic time
trend, in general. Accordingly, the demeaned VECM can be written as

        ∆yt − µ0 − µ1 t = Π yt−1 − µ0 − µ1 (t − 1) − µ2 (t − 1)2 + εt .
                                                               
                                                                               (1.54)
1.8. DETERMINISTIC TERMS                                                              45

                 Table 2.2: Hypotheses on the deterministic trends

           mean function            Restrictions in SE       Explanation
  H(r)         µ∗0 + µ∗1 t                   —               no restrictions
 H ∗ (r)       µ∗0 + αb1 t                 c∗1 = 0           no quadratic trend in data
 H1 (r)            µ0                 c∗1 = 0, µ∗21 = 0      no trend in β 0 yt
 H1∗ (r)          αb0            c∗0 = 0, c∗1 = 0, µ∗21 = 0 no trend in data
   H2              0                 no deterministics



Using (1.53) we get

         µ∗0 + µ∗1 t = E(∆yt ) − E(Πyt−1 )
                    = µ0 + µ1 t − Π(µ0 − µ1 + µ2 ) − Π(µ1 − 2µ2 )t − Πµ2 t2 .

To match both sides of the equation we obtain Πµ2 = 0 or, equivalently, β 0 µ2 = 0.
   The vectors µ∗i (i = 0, 1) can be projected onto the subspaces spanned by the
columns of α and α⊥ :
                                       µ∗i = αbi + α⊥ ci ,                        (1.55)

where bi = (α0 α)−1 α0 µ∗i and ci = (α⊥
                                      0
                                        α⊥ )−1 α⊥
                                                0 ∗
                                                  µi (see Johansen, 1994, p. 208).
Accordingly we define

                                       0 ∗     0
                                      α⊥ µi = α⊥ α⊥ ci
                                              ≡ c∗i .

       0
Using α⊥ = [I, −φ0 ], the SE system (1.39) and (1.40) can accommodate determin-
istic terms:

                             ∆y1t = c∗0 + c∗1 t + φ0 ∆yt2 + w1t                   (1.56)
                             ∆y2t = µ∗20 + µ∗21 t + π20 yt−1 + w2t ,              (1.57)

where µ∗2j denotes the lower r × 1 subvector of µ∗j .
   Johansen (1994) considers 5 hypotheses of interest which are included in Table
2.2. Using the representation given in (1.56) and (1.57) these hypotheses can
46                                         CHAPTER 1. THE REDUCED FORM

be formulated by using restrictions on c∗0 , c∗1 , µ∗20 and µ∗21 (see Table 2.2). Thus,
Johansen’s hypotheses about the deterministic part of the model can conveniently
be tested using LR tests for restrictions on the constant and the drift. Since the
tests are based on a linear transformation of the model, the LR statistics have the
same asymptotic χ2 distributions as in Johansen (1994).



1.9       An empirical example
To illustrate the estimation and test procedures discussed in this chapter we con-
sider a four variable system yt = [Yt , Rt , rt , Mt ]0 as in Hoffman and Rasche (1996).
We use quarterly U.S. data running from 1970(i) through 1994(iv). Output (Yt )
is measured by the log of real GNP, Rt is the ten year government bond yield,
the short term interest rate rt is measured by the 3-month LIBOR and Mt is the
log of the money base M3 adjusted by the implicit price deflator of GNP. The
data for Yt and Mt are seasonally adjusted and taken form the Main Economic
Indicator data base of the OECD. The interest rates are taken from the IMF data
base.
     We start with an appropriate deterministic specification. For this purpose an
unrestricted linear trend is included and the lag order of the VAR is determined.
The BIC and Hannan-Quinn criteria are minimized by a VAR[2] specification so
a VAR[2] model is used for the following analysis. The likelihood ratio statistics
cannot reject the null hypothesis that there is no trend term in the VAR represen-
tation (H1 (r)). Since the hypothesis H1∗ (r) : c∗0 = 0 is rejected but H ∗ (r) : c∗1 = 0
cannot be rejected, I conclude that the unconditional mean of the variables can
be represented by a linear time trend.
     Next, the cointegration rank is selected. This can be done by using Johansen’s
test based on eigenvalues or by using a likelihood ratio test on the restrictions in
the SE representation (1.39) – (1.40). The results of both procedures are presented
in Table 2.3. As expected, both approaches yield identical results and suggest that
the cointegration rank is r = 2.
     Economic theory suggests (see, e.g., Hoffman and Rasche 1996) that the two
1.9. AN EMPIRICAL EXAMPLE                                                           47

                     Table 2.3: LR tests of the cointegration rank

                            (a) Johansen’s LR test statistics

           H0 :                r0 = 4      r0 = 3       r0 = 2    r0 = 1   r0 = 0
        max. EV                   —         0.887       3.846     27.77     46.71
           trace                  —         0.887       4.732     32.50     79.21


                        (b) Simultaneous equation representation

                               r0 = 4      r0 = 3       r0 = 2    r0 = 1   r0 = 0
           L(r0 )             1052.746 1052.302 1050.379 1036.496 1013.141
  −2[L(r0 ) − L(r0 + 1)]          —         0.887       3.846     27.77     46.71
    −2[L(r0 ) − L(n)]             —         0.887       4.732     32.50     79.21


                                 (c) 0.05 Critical values

           H0 :                r0 = 4      r0 = 3       r0 = 2    r0 = 1   r0 = 0
    max. EV (µ0 6= 0)             —         3.962       14.04     20.78     27.17
      trace (µ0 6= 0)             —         3.962       15.20     29.51     47.18



cointegration relationships are a money demand relation

                               Mt = Yt + β1 Rt − β2 rt + u1t                   (1.58)

and the term structure relation

                                      Rt = rt + u2t ,                          (1.59)

where u1t and u2t are stationary error terms. Although the order condition for
identification is fulfilled for these two cointegration vectors, the rank condition is
violated. This can be seen by subtracting δ(Rt − rt − u2t ) = 0 from the right hand
side of (1.58) yielding

                    Mt = Yt + (β1 − δ)Rt − (β2 − δ)rt + (u1t + δu2t ) .
48                                        CHAPTER 1. THE REDUCED FORM

For any value for δ this gives a new cointegrated relationship and, therefore, β1
and β2 are not jointly identified. However, the difference between the coefficients
of the interest rates is identified. In practice one may therefore normalize one of
the coefficients to be equal to zero by letting δ = β2 , for example. In this case the
interest rate rt cancels from the money demand relation and the coefficient of Rt
measures the difference β1 − β2 . For a detailed discussion of this and alternative
identification procedures see Hoffman and Rasche (1996, 194f).
     The corresponding system of simultaneous equations is estimated as

          ∆Yet = 0.030∆e
                       rt + 2.693∆M
                                  ft + w
                                       e1t
           et = −0.773∆e
          ∆R           rt − 138.4∆M
                                  ft + w
                                       e2t
            rt = −110.2∆M
           ∆e                      et−1 − ret−1 ) + w
                        ft + 0.072(R                e3t
           ft = −0.0007∆e
          ∆M            rt − 0.025(M
                                   ft−1 − Yet−1 ) − 0.0007Rt−1 + w
                                                                 e4t ,

where the constants of the equations are suppressed. From these estimates, the
money demand relation results as Mt = Yt − 0.026Rt + û1t , where 0.026 is the
estimated difference between β1 and β2 in (1.58). The LR test statistic for the
over-identifying restriction in the term structure equation (1.59) is 0.9905 which is
not significant with respect to the critical values of an asymptotic χ2 -distribution
with one degree of freedom. Exactly the same value of the test statistic results if
the test statistic is computed by using the LR procedure of Johansen and Juselius
(1994).
     Finally, we test whether the variables Yt and Rt are weakly exogenous. Ap-
plying the simultaneous equations approach suggested in Section 1.3 we test that
the corresponding row of the matrix α is zero. The LR statistic for the hypothesis
that Yt is weakly exogenous is 24.349. This value is highly significant with respect
to an asymptotic χ2 distribution with two degrees of freedom. In contrast, the
LR statistic for the hypothesis that Rt is exogenous is only 1.340 and, therefore,
implies that this variable may be treated as (weakly) exogenous. These results
correspond well with conventional wisdom suggesting that the long run interest
rate is determined outside the system on the international capital markets (e.g.
Nautz and Wolters 1999).
Chapter 2

Structural VARs

Until the late 70th, the simultaneous equation approach, advocated by the influen-
tial Cowles Commission clearly dominated the empirical research in econometrics.
However, the initial optimism about the potential of the simultaneous equation
model was not fulfilled and the inability of large macroeconomic models to com-
pete with “atheoretic” Box-Jenkins ARIMA models on predictive grounds led to
an increased adoption of time series techniques. In particular, the seminal paper
by Sims (1980) prepared the ground for the ultimate success of vector autoregres-
sions in econometrics. However, as argued forcefully by, e.g., Cooley and LeRoy
(1985), vector autoregressions have the status of “reduced form” and, thus, are
merely vehicles to summarize the dynamic properties of the data. Without refer-
ring to a specific economic structure such reduced form VAR models are difficult
to understand. For example, it is often difficult to draw any conclusion from the
large number of coefficient estimates in a VAR system. As long as such parameters
are not related to “deep” structural parameters characterizing preferences, tech-
nologies, and optimization behaviour, the parameters do not have an economic
meaning and are subject to the so-called “Lucas critique”.
   The new research program known as Real Business Cycle (RBC) agenda em-
ploys dynamic stochastic general equilibrium models that are driven by real tech-
nology shocks. In later work (e.g. Christiano and Eichenbaum 1992) further
“shocks” like demand shocks resulting from public expenditures or the supply of

                                       49
50                                         CHAPTER 2. STRUCTURAL VARS

money were included to represent other aspects of the economic system. Kyd-
land and Prescott (1982) acknowledge from the outset that their models, like all
models, are false and they recognize that traditional econometric estimation pro-
cedures such as Gaussian maximum likelihood may be inappropriate. Therefore,
they advocate to apply less structured “calibration” methods, that is, the param-
eters underlying the simulated model economy are typically set to values that are
considered to be “reasonable” or in agreement with earlier estimates.

     At the same time, Sims (1981, 1986), Bernanke (1986) and Shapiro and Watson
(1988) put forward a new kinds of econometric model that is now known as “struc-
tural VAR” (SVAR) or “identified VAR” approach. There are several features of
this approach that make the SVAR model an attractive model for empirical work
in the spirit of the RBC agenda. First, the deviations from the steady state of a
RBC model can usually be represented by a (vector) ARMA model that can be
conveniently approximated by a vector autoregression. Second, the driving forces
of an RBC type model are different kinds of exogenous shocks. This parallels the
structural shocks identified from a typical SVAR model.

     The similarity of the RBC and the SVAR approach initiated several stud-
ies comparing the outcomes of calibrated RBC models with the corresponding
findings from estimating a SVAR model. Cogley and Nason (1995) are able to
produce a good correspondence between both approaches, whereas Cooley and
Dwyer (1998) observe that results from SVAR models are sensitive to the identi-
fying assumption and may produce outcomes that are at odds with the original
RBC style model. Using German data, Breitung and Heinemann (1998) find
that both approaches yield qualitatively similar findings but differ substantially
in detail.

     Another important motivation for the development of SVAR models was the
paradigm of “rational expectations” (cf Sims 1980). In Section 3.1 the relationship
between rational expectation models and the identification of shocks is discussed.
Different approaches to identify the structural shocks are discussed in Section
3.2. A general class of structural VAR models is presented in Section 3.3 and
Section 3.4 discusses alternative approaches to estimate the structural parameters.
2.1. RATIONAL EXPECTATIONS                                                               51

Section 3.5 suggests a latent variable framework that can be used for estimation
and inference. Long run restrictions are considered in Section 3.6 and inference
on impulse response function is considered in Section 3.7. Section 3.8 gives three
empirical applications and Section 3.9 discusses problems of the structural VAR
approach.



2.1        Rational expectations
The theory of rational expectations implies that the effects of expected policy
actions are generally different from the effects of an unexpected policy. This
can be demonstrated using the money demand model of Cuthbertson and Taylor
(1989).1
      Assume that (real) money demand Mt is decomposed into a planned compo-
nent Mtp and an unplanned component εM
                                     t . It is assumed that agents choose short

run money balances to minimize the expected present value of a quadratic loss
function. This gives rise to the planned money demand of the form
                                                    ∞
                                                    X
                     Mtp = β1 Mt−1 + β1 (1 − β2 )         β2j Et−1 (Mt+j
                                                                     ∗
                                                                         ),
                                                    j=0

where 0 < β1 , β2 < 1 are parameters implied by the quadratic loss function, Et−1
denotes expectation with respect to the information available at time t − 1 and

                                  Mt∗ = γ0 + γ1 Yt + γ2 it

denotes the desired long run money balances which are obtained by ignoring
adjustment costs (cf. Cuthbertson and Taylor 1989). The variable Yt and it
represent (logged) output and the relevant interest rate.
      The unplanned component is represented as

                        εM                      Y       i    M
                         t = Mt − Et−1 Mt = b1 εt + b2 εt + ut ,                      (2.1)

i.e., the εM                                                 Y
           t is a weighted average of the prediction errors εt = Yt − Et−1 Yt and

εit = it − Et−1 it and an additional error uM
                                            t .
  1
      The relationship between rational expectations and SVAR models is discussed in Dhrymes
and Thomakos (1998).
52                                                  CHAPTER 2. STRUCTURAL VARS

     We are now in the position to compare the effects of an expected and an
unexpected monetary policy using the interest rates as instruments. A predictable
change in it affects the observed money demand via the expected long run money
              ∗
demand Et−1 (Mt+j ), whereas an unexpected change in the interest rate enters the
unplanned component with coefficient γ1 . Accordingly, the effects of expected and
unexpected changes in the interest rates may be quite different (see also McCallum
1999). The SVAR approach focuses on the effects of unexpected variation in the
policy instrument by using a linear relationship similar to (2.1).

                         ∗
     If expectations of Mt+j are linear with respect to the information set {xt−1 , xt−2 ,
. . .}, where xt = [Mt , Yt , it ]0 , we obtain



                                      ∞
                                      X
                     Mt = ψ0 +               x0t−j ψj + b1 εYt + b2 εit + uM
                                                                           t .
                                       j=1




This equation contains all typical features of an SVAR model. The conditional
                                                                   P∞ 0
expectation with respect to the past of the process is µM
                                                        t−1 = ψ0 +  j=1 xt−j ψj .

In an SVAR model this expectation is approximated by a finite number of lags in
all variables of the system. Furthermore, possible (nonlinear) restrictions on the
parameters ψ1 , ψ2 , . . . resulting from the particular rational expectation model
are ignored in order to keep the estimation procedure “sophisticatedly simple”
(Zellner 1992). The terms b1 εYt and b2 εit represent the part of the prediction error
of Mt that is due to other variables like Yt and it and, thus, the remaining error
uM
 t represents the “autonomous” shock associated with real money balances.


     To sum up, it is seen that models involving rational expectation can be repre-
sented as an SVAR model. The resulting structural shocks represent the “news”
in the variable that cannot be explained by other variables of the system and,
therefore, measure the autonomous contribution to the respective variables. It is
quite natural to focus on the dynamic effects of such shocks when assessing the
impact of political instruments on the target variables.
2.2. THE IDENTIFICATION OF SHOCKS                                                53

2.2      The identification of shocks
As already noted, structural shocks are the central quantities in an SVAR model.
These shocks are unpredictable with respect to the past of the process and are the
input of a linear dynamic system producing the n-dimensional time series vector
yt . These shocks are attached with an economic meaning such as an oil price
shock, reunification shock, exchange rate shock or a monetary shock. It should
be noted, however, that these shocks do not only represent disastrous singular
events. In contrast, we assume that the economy is hit regularly by such shocks
and the size of the shock is usually small.
   Since the shocks are not directly observed, assumptions are needed to identify
them. There seems to be a consensus that structural shocks should be mutually
uncorrelated (and thus “orthogonal”). This assumption is required to consider the
dynamic impact of an isolated shock. If the shocks were correlated, we would have
to take into account the relationship between the shocks. Moreover, the decom-
position into orthogonal components has a long tradition in statistical analysis,
and is also used in factor analysis, for example. Another possibility is to consider
the shocks as bits of information about the state of the economic system. Hence,
the news of the system is projected into a particular orthogonal space, where the
axes represent different aspects of reality.
   The assumption of orthogonal shocks is, however, not sufficient to achieve
identification. For an n dimensional system, n(n − 1)/2 additional restrictions
are necessary. These restrictions can be obtained from a “timing scheme” for
the shocks. Such an identification scheme assumes that the shocks may affect a
subset of variables directly within the current time period, whereas another subset
of variables is affected with a time lag only. An example of such an identification
scheme is the triangular (or recursive) identification suggested by Sims (1980).
In this model the shocks enter the equation successively so that the shock of the
second equation does not affect the variable explained by the first equation in the
same period. Similarly, the third shock does not affect the variables explained by
the first and second equation in the current time period. Such a scheme is called
a “Wold causal chain system” (Wold 1960) and is often associated with a causal
54                                          CHAPTER 2. STRUCTURAL VARS

chain from the first to the last variable in the system.

     An alternative approach to the identification of the shocks is to formulate
structural equations for the errors of the system. In this case it is convenient to
think of the equations as an IS curve or a money demand relation, for example,
but with the difference that the equations apply to the unexpected part of the
variables (the “innovations”) instead of the variables themselves. If the equations
are valid for the system variables, then they also apply for the unexpected part of
the variables. Therefore, the identification using a set of simultaneous equations
is appealing with respect to the traditional approach advocated by the Cowles
Commission and it is not surprising that this kind of identification has become
very popular in empirical work using SVAR models.

     In recent work, the identification of shocks using restrictions on the long run
effects of structural shocks has become popular. In many cases economic theory
suggests that the effects of some shocks are zero in the long run, that is, the
shocks are transitory with respect to particular variables. For example, classical
economic theory implies that the effect of nominal shocks on real variables like
output or unemployment vanishes as time goes by. Such assumptions give rise to
nonlinear restrictions on the parameters and may be used to identify the structure
of the system. However, recent work demonstrates (e.g. Faust and Leeper 1997)
that such long run restrictions may be problematical in practice.

     There are several important differences between the identification of an SVAR
model and the identification of a simultaneous equation model. First, the latter
models are usually identified by linear (exclusion) restrictions. In contrast, SVAR
models assume orthogonal shocks so that the structure is identified using also
restrictions on the covariance matrix of the errors. This complicates the estimation
of such systems considerably.

     Second, traditional simultaneous equation models usually employ many more
restrictions than necessary to identify the system, that is, these models are often
highly over-identified. In his famous critique, Sims (1980) qualifies these overly
restricted models as “incredible”. SVAR proponents therefore try to avoid to over-
simplifying the structure and impose just enough restrictions needed to identify
2.2. THE IDENTIFICATION OF SHOCKS                                                 55

the structure. Accordingly, most SVAR models are just identified. However, it
is important to notice that just identified models are merely a convenient refor-
mulation of the reduced form. Therefore, as long as the reduced form is correctly
specified, any just identified structure is also correctly specified in a statistical
sense and it is not possible to decide between alternative identified structures on
empirical grounds. To quote Dhrymes and Tomakos (1998, p. 190):



      “Thus, two just identifying sets of conditions, which have diametri-
      cally opposed economic implications may well have the same empirical
      justification, viz. the estimates of the reduced form parameters in the
      context of which they are applied. As such they do not add anything
      further to our understanding of the economic phenomenon in question
      over and above what was conveyed by the reduced form, and they are
      both equally defensible or equally subject to severe criticism.”



SVAR models are used to quantify prior views of the economy and to assess the
plausibility of the outcomes. For example, we may use a Keynesian structure
to investigate the long run effects of a monetary shock on unemployment. A
monetarist economist would in contrast favour an SVAR model with the restriction
that the long run effect of a monetary shock on real variables vanishes. Since both
structures are based on the same reduced form, both structures are admissible and,
thus, it is not possible to decide which model “is true”.

   However, it is possible to assess the plausibility of the outcomes. If, for ex-
ample, a Keynesian economist finds that an expansive monetary shock leads to
increasing unemployment and rising prices, then such result would be highly im-
plausible with respect to a Keynesian framework. If, on the other hand, our
Keynesian economist would find that the effects of a monetary shock are similar
to the effects in a monetarist type of model, then this result suggests that the
observed effect of a monetary policy is not sensitive with respect to the different
orthodox perspectives (e.g. Dolado, Lopez-Salido and Vega 1999).
56                                              CHAPTER 2. STRUCTURAL VARS

2.3       A class of structural VARs
Assume that the n × 1 time series vector yt admits a stationary VAR[p] repre-
sentation as defined in Assumption 1.1. This VAR model is referred to as the
reduced form of the system. Associated with the reduced form is a structural form
resulting from the set of structural equations:

                                   Bεt = Rut ,                                   (2.2)

so that
                      Byt = BA1 yt−1 + · · · + BAp yt−p + Rut .                  (2.3)

The matrices B and R are assumed to be invertible and ut is an n × 1 vector of
structural shocks with covariance matrix E(ut u0t ) = Ω. This includes all models
considered by Amisano and Giannini (1997).
     The dynamic effect of the structural shocks is analysed by considering the
moving average representation

          yt = εt + Φ1 εt−1 + Φ2 εt−2 + · · · ≡ Φ(L)εt
              = B −1 Rut + Φ1 B −1 Rut−1 + Φ2 B −1 Rut−2 + · · · = Ψ(L)ut ,

where Φ(L) = A(L)−1 and Ψ(L) = A(L)−1 B −1 R. If yt is measured in first differ-
ences, then the matrix

                     Ψ ≡ Ψ(1) = (In − A1 − · · · − Ap )−1 B −1 R                 (2.4)

measures the long run impact of ut on the levels of yt .
     To identify the parameters, restrictions on the parameter matrices B, R, A1 ,
. . . , Ap , Ω are necessary. In empirical applications such restrictions are suggested
by economic theory or are imposed just for convenience. The most popular kinds
of restrictions can be classified as follows:

 (i) The structural errors are assumed to be mutually uncorrelated such that
       Ω = E(ut u0t ) is a diagonal matrix. In some applications, the shocks are
       normalized to have a unit variance, i.e., Ω = In .
2.4. ESTIMATION                                                                  57

 (ii) R = In . The vector of innovations (εt ) is modeled as an interdependent
      system of linear equations such that Bεt = ut , where B is normalized to have
      ones on the leading diagonal and linear restrictions of the form Q1 vec(B) =
      h1 are imposed. Empirical examples include Sims (1986), Bernanke (1986)
      and Shapiro and Watson (1988).

(iii) B = In . In this case the model for the innovations is εt = Rut and to exclude
      some (linear combinations of the) structural shocks in particular equations,
      restrictions of the form Q2 vec(R) = h2 are imposed. Empirical examples
      can be found in Blanchard and Quah (1989), Roberts (1993) and Ahmed et
      al. (1993).

(iv) The AB-model of Amisano and Giannini (1997) combines (ii) and (iii) such
      that the model for the innovations is Bεt = Rut . Accordingly, the two sets
      of restrictions Q1 vec(B) = h1 and Q2 vec(R) = h2 are used to identify the
      system. Empirical examples are provided by Blanchard (1989) and Gali
      (1992).

 (v) If (some of) the variables are measured in first differences, there may be
      prior information on the long run effect of the shocks. The long run effect
      of the shocks are measured by the matrix Ψ which is defined in (2.13). If a
      shock is assumed to have no permanent effect on the elements of yt , then the
      respective elements of Ψ are zero. Such linear restrictions can be written
      as Q3 vec(Ψ) = h3 (see, e.g. Lütkepohl and Breitung 1997). Empirical
      examples are given by Blanchard and Quah (1989), King et al. (1991) and
      Roberts (1993).



2.4      Estimation
The estimation of the SVAR model is equivalent to the problem of estimating a
simultaneous equation model with covariance restrictions. Using (2.2) the struc-
tural model can be reformulated as

                B∆yt = Π∗ yt−1 + Γ∗1 ∆yt−1 + · · · + Γ∗p−1 ∆yt−p+1 + Rut ,     (2.5)
58                                              CHAPTER 2. STRUCTURAL VARS
                        Pp                          Pp
where Π∗ = −B(In −                         ∗
                           j=1 Aj ) = and Γk = −       j=k+1 BAj for k = 1, . . . , p − 1. In

this formulation the long run behaviour of the shocks is determined by the matrix
Π∗ , while the short run dynamics are governed by the matrices Γ∗1 , . . . , Γ∗p−1 .
     Let ∆e
          yt and yet−1 denote the residual vectors from the regressions of ∆yt and
yt−1 on ∆yt−1 , . . . , ∆yt−p+1 . If there are no restrictions on the short run parameters
Γ∗1 , . . . , Γ∗p−1 we may concentrate the system as

                                  yt = Π∗ yet−1 + Re
                                B∆e                ut ,                                (2.6)

which results from replacing Γ∗1 , . . . , Γ∗p by least-squares estimates.
     For notational convenience we reformulate model (2.5) as

                             B∆yt = Π∗ yt−1 + Cxt−1 + Rut ,

where C = [Γ∗1 , . . . , Γp−1 , Cp−1
                                 ∗                   0
                                     ] and xt−1 = [∆yt−1             0
                                                         , . . . , ∆yt−p+1 ]0 . It is assumed
that ut is white noise with ut ∼ N (0, In ). The log-likelihood function of the model
is

       L(B, C, R) = const + (T − p) ln |det(BR−1 )|                           (2.7)
               T
           1 X
         −         (B∆yt − Π∗ yt−1 − Cxt−1 )(RR0 )−1 (B∆yt − Π∗ yt−1 − Cxt−1 )0 ,
           2 t=p+1

subject to the restrictions:

                                       Q1 vec(B) = h1                                  (2.8)
                                       Q2 vec(R) = h2                                  (2.9)
                                       Q3 vec(Ψ) = h3 .                               (2.10)

where the (2.10) implies restrictions on the long run effect of the structural shocks.
     In general, the maximization of (2.7) under the constraints (2.8) – (2.10) is
a computationally demanding problem. Even for the very simple model of Blan-
chard and Quah (1989), there exist multiple solutions and there are points in
the parameter space, where the log-likelihood function is undefined. In particular
the latter problem occurs when the matrix B or R is singular and convergence
problems can arise in the neigbourhood of singular matrices.
2.4. ESTIMATION                                                                       59

   If there are no restrictions on the long run impact matrix Ψ, the maximation
problem can be simplified by “concentrating out” the parameters in C. Setting
the derivative with respect to C equal to zero gives
                         T                              T
                                                                             !−1
                         X                              X
                 C
                 b=           (B∆ − Π∗ yt−1 )yt x0t−1           xt−1 x0t−1
                      t=p+1                             t=p+1

and

B∆yt − Π∗ yt−1 − Cx
                 b t−1 = B∆yt − Π∗ yt−1
                          XT                          T
                                                     X            −1
                                        ∗       0
                         −     (B∆yt − Π yt−1 )xt−1      xt−1 x0t−1     xt−1
                                       t=p+1                             t=p+1
                                  yt − Π∗ yet−1 ,
                              = B∆e

Accordingly, the ML problem is equivalent to the maximation of the concentrated
likelihood function

      LC (B, Π∗ , R) = const + (T − p) ln |det(BR−1 )|
                             T
                         1 X
                       −           yt − Π∗ yet−1 )0 B(RR0 )−1 (B∆e
                                 (∆e                             yt − Π∗ yet−1 ) .
                         2 t=p+1

The likelihood function corresponds to a “concentrated model” given by

                                    yt = Π∗ yet−1 + Re
                                  B∆e                ut .                          (2.11)

Accordingly, the ML estimation of the concentrated system is equivalent to the
maximization of (2.7).
   The concentration with respect to C is not possible in systems with restrictions
on the long run effect on ut and in other cases where C is restricted. In the next
section, a convenient representation is suggested, which allows the inclusion of
long run restrictions.
   Instead of the ML estimation of the system, other estimation principles may
be adopted. The Minimum Distance (MD) estimation first estimates the reduced
form parameters θ =vec(A1 , . . . , Ap , Σ) and then obtains structural estimates of
the vector of structural parameters λ by solving the problem

                      λM D = argmin{[θb − F (λ)]0 Vθ [θb − F (λ)]} ,               (2.12)
                                   λ
60                                                 CHAPTER 2. STRUCTURAL VARS

subject to the restrictions (2.8) – (2.10), where θb denotes the vector of the esti-
mated reduced form parameters (cf. Watson 1995). The matrix Vθ denotes the
asymptotic covariance matrix of the estimator θ.
                                              b The function θ = F (λ) relates
the reduced form parameters to the structural parameters. This function is the
vectorized analog of the two matrix functions

                         Σ = B −1 RR0 (B 0 )−1
                         Ψ = (In − A1 − · · · − Ap )−1 B −1 R

subject to the constraints (2.8) – (2.10). The estimation procedure based on (2.12)
is asymptotically equivalent to the ML estimation.
     Furthermore, a GMM procedure can be adopted. The assumption that the
structural shocks are uncorrelated gives rise to the following (n − 1)n/2 moment
conditions:
                               E(uit ujt ) = 0 for i < j ,                          (2.13)

subject to the constraints (2.8) – (2.10), where ut = [u1t , . . . , unt ]0 is given by

                      ut = B −1 R(yt − A1 yt−1 − · · · − Ap yt−p ) .

The GMM estimate is obtained by minimizing the distance function
                           (    T
                                           !       T
                                                            !)
                                X                 X
          θGMM = argmin             mt (λ)0 W         mt (λ)
                       λ                t=p+1                    t=p+1

where mt (λ) = (uit ujt )i<j , λ is the vector of structural parameters and W is a
weight matrix given by
                                 "   T
                                                             #−1
                                     X
                           W =               E[mt (λ)mt (λ)0 ]      .
                                     t=p+1

In practice this weight matrix is replaced by
                                " T                #−1
                                   X
                         WT =          mt (λ)m  b0
                                           b t (λ)     ,
                                       t=p+1


where mt (λ)
          b = (ûit ûjt )i<j and ûit denotes the estimated structural shock from
a consistent initial estimate of the model. A possible initial estimate may be
2.5. A LATENT VARIABLES FRAMEWORK                                                    61

obtained by replacing W by the identity matrix. If the errors are i.i.d. and
normally distributed, the GMM estimator is asymptotically equivalent to the ML
estimator. However, if the errors are non-normal or heteroscedastic, the GMM
estimator is asymptotically more efficient than the (pseudo) ML estimator.



2.5        A latent variables framework
Assume that the matrices Γ∗1 , . . . , Γ∗p−1 in (2.5) are not subject to restrictions so
that the model can be represented as

                                 yt = Π∗ yet−1 + Rut ,
                               B∆e                                               (2.14)

where ∆e
       yt and yet−1 denote the residual vectors from the regressions of ∆yt and
yt−1 on ∆yt−1 , . . . , ∆yt−p+1 . For convenience we drop the tildes and consider the
VAR[1] model.
   To derive the latent variable representation we pre-multiply (2.14) by R−1
yielding

                           R−1 B∆yt = R−1 Π∗ yt−1 + ut
                                        = −Ψ−1 yt−1 + ut .

Using Ψ = −Π∗−1 R the two sets of latent variables are defined as

                                  ξty = R−1 B∆yt ,                               (2.15)
                                 ξtx = −Ψ−1 yt−1 .                               (2.16)

Using these variables the system can simply be written as

                                     ξty = ξtx + ut .                            (2.17)

The measurement equations (2.15) and (2.16) relate the latent variables to the
observed variables, whereas the system equations (2.17) specify the relationship
between the latent variables. The problem with (2.15) is that the equation is non-
linear in the structural parameters. To avoid such complications it is convenient
to introduce another set of latent variables defined by the measurement equation
62                                                       CHAPTER 2. STRUCTURAL VARS

∆yt = ξtz and, thus, from (2.15) the corresponding system equation is Rξty = Bξtz .
The complete LV system results as


                                           
                                            ∆y
                                                     t   = ξtz
         Measurement equations:
                                            y
                                                   t−1   = −Ψξtx

                                   " z#        "                     #" z #       " #           "        #
                                    ξt             (I − B) R           ξt          0                0
         System equations:                 =                                  +         ξtx +                .
                                     ξty             0           0     ξty         I                ut



This is the conventional formulation of Linear Structural Relations (LISREL) as
suggested by Jöreskog (1969). The matrix B is normalized to have ones on the
leading diagonal. Note that the vector of latent variables ξtz is a linear combi-
nation of ξty and, therefore, no additional measurement equations are required.2
Furthermore, if B = In we can neglect ξtz and a LV model can be formulated with
(2.17) as the set of system equations.
         The main advantage of formulating the structural VAR as a LV model of the
LISREL type is that the system is formulated linearly in the parameters of interest
B, R, Ψ. Such a system can conveniently be estimated and tested using widely
used software like the LISREL package by Jöreskog and Sörbom (1993).



2.6           Imposing long run restrictions
So far we have assumed that the vector yt has a stationary representation. In this
section the case that the lag polynomial A(L) has some roots on the unit circle is
considered and, thus, the shocks may have a permanent effect on the time series.
         The first model that introduces information on the long run behaviour is the
often cited paper by Blanchard and Quah (1989). In this paper it is assumed that
one variable (output) is I(1), whereas the second variable (the unemployment rate)
     2
         To implement such a system into the LISREL program, one specifies the first set of mea-
surement equations as ∆yt = ξtz + Kξty and imposes the restriction K = 0.
2.6. IMPOSING LONG RUN RESTRICTIONS                                                             63

is I(0). For the identification of the shocks it is assumed that the demand shock
has a transitory effect on output (that is its effect tends to zero with an increasing
time horizon), whereas supply shocks may effect output permanently. Crowder
(1995) demonstrates that this model can be written as a special cointegrated
system with the cointegration vector β = [0, 1]0 .3
       The Blanchard-Quah model was extended to systems with more then two
variables by King et al. (1991). Further developments of this kind of models are
discussed in Levtchenkova, Pagan and Robertson (1998).

Contemporaneous identification of the shocks. While cointegration among
the variables imposes restrictions on the long run relationship between the system
variables, the first class of models assumes that the structural shocks are identified
by restrictions on R and B. Accordingly, the structural shocks are identified
by their contemporaneous relationship instead of their long run effects on the
variables. An example is the empirical model of Clarida and Gertler (1996).
       Assume that the cointegrating vectors are known so that the error correction
terms can be constructed as wt = β 0 yt . The structural system is written as
                                                 p−1
                                                 X
                                       ∗
                           B∆yt = α wt−1 +             Γ∗k ∆yt−k + Rut ,                    (2.18)
                                                 k=1

where α∗ = Bα. Since α is assumed to be unrestricted, so is α∗ . Hence, we
are able to “partial out” the unrestricted coefficient matrices α∗ and Γ∗1 , . . . , Γ∗p−1
by regressing ∆yt on wt−1 , ∆yt−1 , . . . , ∆yt−p+1 . Let εet denote the corresponding
vector of residuals. Then, the structural system is transformed into

                                           Be
                                            εt = Re
                                                  ut .                                      (2.19)

It follows that the only difference from the original SVAR model is that the struc-
tural model is formulated by using the residuals from the VECM representation
(1.12) instead of the unrestricted VAR residuals.
   3                                                           0
       However, Crowder (1995) is in error when claiming that α⊥ is (a multiple of) [0, 1] (p.236).
Such a restriction would imply that no lagged Ut enters the output equation. This, however, is an
additional restriction not entailed in the original model. Since the BQ-Model is just identified,
there is no such over-identification restriction to be tested as suggested by Crowder.
64                                                      CHAPTER 2. STRUCTURAL VARS

Permanent and transitory shocks. To accommodate a structural interpreta-
tion of the long run behaviour of the system, the shocks are classified as “perma-
nent” and “transitory”. While a permanent shock has a long run effect on the
future level of at least one variable, all impulse response functions with respect to
a transitory shock die out as the lag horizon tends to infinity.
     In a system with cointegration rank r, there are n − r permanent and r transi-
tory shocks. As shown, e.g., in Johansen (1994), the vector of permanent shocks
can be represented as upt = α⊥
                             0
                               εt . The vector of transitory (or “cyclical”) shocks
can be represented as uct = γ 0 εt , where the columns of the n × r matrix γ are
linearly independent of the columns of α⊥ . In the structural form (2.2) the shocks
are related to the innovations by

                                          upt
                                      "         #
                               ut =                 = R−1 Bεt .                                      (2.20)
                                          uct

In order to impose the restriction that the first n − r elements of ut are permanent
shocks, the upper (n − r) × n block of the matrix (R−1 B) must be orthogonal to
α. Furthermore, let R be lower block-triangular so that the upper right (n − r) × r
block is zero. In this case, the permanent shocks result from setting the upper
block of B equal to α⊥ . Accordingly, shocks are restricted to have a permanent
effect by setting the corresponding rows of Γ = R−1 B equal to zero.
     This gives rise to the following estimation procedure. Let ∆e
                                                                 yt and yet−1 denote
the residuals from a regression of ∆yt and yt−1 on ∆yt−1 , . . . , ∆yt−p , respectively.
Letting ξty = R−1 B∆e
                    yt = Γw
                          et−1 + u       et−1 = β 0 yet−1 , the corresponding LV
                                 et with w
model is given by


                                      
                                       ∆e
                                         y          t    = ξtz
     Measurement equations:
                                       w
                                        e       t−1      = ξtx

                             " z#         "                      #" z #       " #           "        #
                              ξt              (I − B) R            ξt          0                0
     System equations:               =                                    +         ξtx +                ,
                               ξty                  0        0     ξty         Γ                ut
2.6. IMPOSING LONG RUN RESTRICTIONS                                                   65

where the permanent shocks result from setting the corresponding rows of Γ equal
to zero.
   This framework is more general than the estimation method suggested by
King et al. (1991) that is based on a just identified system with a triangular
identification of the transitory shocks (see Section 3.8.3 for more details).

Linear restrictions on the long run effect of the shocks. If the structural
model implies restrictions on the magnitude of the long run effect, a LV represen-
tation of the LISREL type does not seem possible in the general case. However,
for B = In the LV framework can be used as follows.
   Following Warne (1990) the cointegrated system is transformed to a statio-
nary VAR using the vector of transformed variables zt = [yt0 β, ∆yt0 γ]0 , where γ
is some fixed n × (n − r) matrix linearly independent of β. The vector zt has
a stationary VAR(p) representation and, thus, the usual SVAR framework can
be used. Let Ψz denote the long run impulse response of the integrated series
st = tj=1 zj = [ tj=1 yj0 β, yt0 γ]0 with respect to the structural shocks. From the
     P          P

relationship between yt and zt we can deduce the long run response of st from the
impact matrix Ψz . Let
               "                #                       "                      #
                 Ir      0                                  (1 − L)Ir    0
       D(L) =                           and    D(L) =
                  0 (1 − L)In−r                                 0       In−r
such that D(L)D(L) = (1 − L)In . Furthermore, let Q = [β, γ]0 . The relationship
between zt and yt is given by

                                  zt = D(L)Qyt .                                   (2.21)

Multiplying with Q−1 D(L) gives

                                ∆yt = Q−1 D(L)zt .                                 (2.22)

It follows that the long run impulse response of yt denoted by Ψy is given by

                                 Ψy = Q−1 D(1)Ψz                                   (2.23)

and, thus, linear restrictions on Ψy imply linear restrictions on Ψz . That is,
the structural form of the cointegrated VAR can be estimated by using the LV
representation for zt as considered in Section 3.5.
66                                               CHAPTER 2. STRUCTURAL VARS

     It is important to notice that the matrix Q is treated as fixed. Since β can
be estimated super-consistently, one may use an estimate of β without affecting
the asymptotic properties of the estimation procedure. The choice of γ is more
problematical. Of course it is possible to select the values of γ arbitrarily as
a block from the identity matrix, for example. However, if there is no prior
information about the cointegrating space, it may be that some vectors of γ fall in
the cointegrating space and, therefore, the matrix Q is not invertible. In practice
one should therefore test whether the column vectors of γ fall in the cointegrating
space by using, e.g., Johansen’s (1991) LR tests.



2.7       Inference on impulse responses
The impulse response ϕh (i, j) measures the effect of the j’th shock on the i’th
variable h periods ahead (cf. Lütkepohl 1991, Sec. 2.3.2). Formally the impulse
response function is defined as

                                        ∂E(yi,t+h |Yt−1 , ujt )
                          ϕh (i, j) =                           ,            (2.24)
                                               ∂ujt

where Yt−1 = {yt−1 , yt−2 , . . .}. The impulse responses can be computed from the
MA representation of the system. It is convenient to introduce the companion
form of the VAR model:
                                   zt = M zt−1 + νt ,                        (2.25)

where

                       zt = [yt0 , yt−1
                                    0              0
                                        , . . . , yt−p+1 ]0
                      νt = [ε0t , 00 ]0
                                                                   
                              A1 A 2            · · · Ap−1    Ap
                                                                
                            In 0
                                               ···      0    0 
                                                                
                      M =  0 In               ···      0    0  .
                            .                  ..            .. 
                            ..                    .           . 
                                                                
                                0       0       ···     In    0
2.7. INFERENCE ON IMPULSE RESPONSES                                                   67

The matrices B and R are subject to the linear restrictions

                                           Q1 vec(B) = h1                         (2.26)
                                           Q2 vec(R) = h2 .                       (2.27)

These restrictions can be re-written as

                                      vec(B) = h∗1 + Q∗1 b∗                       (2.28)
                                      vec(R) = h∗2 + Q∗2 r∗ ,                     (2.29)

where b∗ and r∗ are unrestricted parameter vectors, Q∗1 and Q∗2 are known matrices
with the property Q1 Q∗1 = 0 and Q2 Q∗2 = 0 and h1 , h2 are vector of constants.
    From this representation the original time series vector is obtained as yt = J 0 zt ,
where J is a selection matrix defined as J 0 = [In , 0, . . . , 0]. Using the companion
form, the MA representation can be written as
                                            ∞
                                            X
                                  yt =             J 0 M j Jεt−j
                                            j=0
                                            X∞
                                       =           J 0 M j JBR−1 ut−j .
                                             j=0

Let Φh denote the impulse response matrix with typical element ϕh (i, j). From
the MA representation this matrix results as

                                        Φh = J 0 M h JB −1 R .                    (2.30)

The impulse response can therefore be represented as a nonlinear function of the
structural parameters:
                                      ϕh = vec(Φh ) = fϕh (θ) ,                   (2.31)

where θ =vec([A1 , . . . , Ap ], B, R) ≡ [θ10 , θ20 , θ30 ]0 .
    Lütkepohl (1990) derives the asymptotic distribution of the estimated impulse
response function for the VAR model with triangular identification scheme by
using the Delta method. This method can also be used to derive the asymptotic
distribution of the estimated impulse responses in the structural model:

                                              bh = fϕh (θ)
                                              ϕ         b .                       (2.32)
68                                                    CHAPTER 2. STRUCTURAL VARS

The Delta method is based on the mean value expansion:

                                 bh = ϕh + ∇fϕh (θ̄)(θb − θ) ,
                                 ϕ                                                      (2.33)

                                           b and ∇f h (θ̄) denotes the derivative
where θ̄ lies on the intersection of θ and θ,      ϕ

∂fϕh (θ)/∂θ0 evaluated at θ̄. To derive the asymptotic distribution of the estimated
impulse responses, the derivatives must be computed. For the case R = In and a
structural matrix B with the restriction Q1 vec(B) = h1 , the derivative is derived
in Vlaar (1999). The following lemma provides the derivative of fϕh (θ) for the case
that the variables are not cointegrated and no long run restrictions are used to
identify the parameters.

LEMMA 2.1 Let yt be generated by the structural model given by (2.3) with the
parameter vector θ = [θ10 , b∗ 0 , r∗ 0 ]0 and θ1 = vec(A1 , . . . , Ap ). Then, the derivative
is given by
                                     ∇fϕh (θ) = [Dha , Dhb , Dhr ] ,

where

              D0a = 0 for h = 0
                    h−1
                    X
                a
              Dh =      (B −1 R)0 J 0 (M 0 )h−1−j ⊗ J 0 M h J for h = 1, 2, . . .
                        j=0
                                                   
                                     −1
              Dhb =        −R0 B 0   ⊗ J 0 M h JB −1 Q∗1
              Dhr =      I ⊗ J 0 M h JB −1 Q∗2 .
                                            


Proof: The result follows from (2.30) and eq. (13) in Sec. 10.5.1 of Lütkepohl
(1996) and is similar to the result given in Lütkepohl (1990, Prop. 1).
     From eq. (1) in Sec. 10.6.1 of Lütkepohl (1996) it follows that

                             ∂fϕh (θ)
                                   b
                                                 −1
                                      0
                                        = −R0 B 0 ⊗ J 0 M h JB −1 .
                            ∂vec(B)

Using ∂vec(B)/∂b∗ 0 = Q∗1 the matrix D0b follows immediately.
     From eq. (3) in Sec. 10.4.1 of Lütkepohl (1996) it follows that

                                 ∂fϕh (θ)
                                       b
                                          0
                                            = I ⊗ J 0 M h JB −1 .
                                ∂vec(R)
2.7. INFERENCE ON IMPULSE RESPONSES                                                69

Using ∂vec(R)/∂r∗ 0 = Q∗2 the matrix D0r follows easily. 

   If the structural model is subject to long run restrictions, the derivative is much
more complicated. The problem is that the respective restrictions are nonlinear:

               Q3 vec (In − A1 − · · · − Ap )−1 B
                                                 

                  = Q3 In ⊗ (In − A1 − · · · − Ap )−1 vec(B) = h3 .
                                                    


For the estimated model this restriction takes the form:

                                    Q
                                    b3 vecB
                                          b = h3 ,                             (2.34)

      b3 = Q3 [In ⊗ (In − A
where Q                                bp )−1 ]. Vlaar (1999) calls (2.34) a “stochas-
                          b1 − · · · − A
tic restriction”. He notes that the software packages Malcolm in Rats (see
Mosconi 1998) treats this restriction like a usual linear restriction by neglecting
the stochastic nature of the matrix Q
                                    b3 . Vlaar (1999) therefore derives the correct
asymptotic distribution by taking into account the distribution of Q
                                                                   b3 . The result-
ing formulae are however rather messy and it is therefore appealing to make use
of the reformulation used to derive the latent variable representation.
   Following Johansen (1988) the system can be represented as

                    e1 ∆yt−1 + · · · + Γ
      ∆yt = Πyt−p + Γ                  ep−1 ∆yt−p+1 + εt

            = −B −1 RΨ−1 yt−p + Γ                  ep−1 ∆yt−p+1 + B −1 Rut ,
                                e1 ∆yt−1 + · · · + Γ

      ej = −In + A1 + · · · + Aj for j = 1, . . . , p − 1. The difference to the form
where Γ
used in (1.12) is that here the levels are lagged by p periods instead of a single
lag. It is assumed that Γej are unrestricted matrices for j = 1, . . . , p − 1. This
model can be written in companion form as in (2.25), where

                zt = [∆yt0 , ∆yt−1
                                 0             0
                                   , . . . , ∆yt−p+2    0
                                                     , yt−p+1 ]
                                                 ep−1 −B −1 RΨ−1
                                                                 
                       Γ
                       e1 Γ   e2 · Γ     ep−2 Γ
                                                                 
                      In 0 .               0     0             0 
                                                                 
                                                                 
                      0 In .               0     0             0 
                M = 
                                                                 
                                                                  
                      .       .   .        .      .            . 
                                                                 
                                                                 
                      0 0 .                0     In            0 
                                                                 
                           0    0    .    0     In         In
70                                                   CHAPTER 2. STRUCTURAL VARS

                    νt = [(B −1 Rut )0 , 0]0 .

The impulse response matrix with respect to h periods results as

                                       Φh = J 0 M h JB −1 R .

The important advantage of this representation is that long run restrictions can
be written as linear restrictions on Ψ:

                        Q3 vec(Ψ) = h3 or vec(Ψ) = h∗3 + Q∗3 ψ ∗ .

The derivative can be obtained in the same manner as in the case without long
run restrictions. The results are given in the following lemma.

LEMMA 2.2 Let yt be generated by the VAR[p] model with the structural form
(2.2) and the parameter vector θ = [θ10 , b∗ 0 , r∗ 0 , ψ ∗ 0 ]0 , where θ1 = vec(A1 , . . . , Ap ).
Then, the derivative is given by

                                ∇fϕh (θ) = [Dha , Dhb , Dhr , Dhψ ] ,

where

D0a = 0 for h = 0
      h−1
      X
  a
Dh =      (B −1 R)0 J 0 (M 0 )h−1−j ⊗ J 0 M h J for h = 1, 2, . . .
           j=0
          h                                                                                    i
                                                          −1            −1
Dhb   =        h
              FM (Ip+1 ⊗ Kn,p+1 ⊗ In )(vec(τ ) ⊗ Ψ0 R0 B 0 ⊗ B −1 ) − R0 ⊗ J 0 M h J               Q∗1
Dhr =      h
             (Ip+1 ⊗ Kn,p+1 ⊗ In )(vec(τ ) ⊗ In ⊗ B −1 R) + In ⊗ J 0 M h JB −1 Q∗2
                                                                             
         −FM
Dhψ        h
             (Ip ⊗ Kn,p ⊗ In )(vec(τ ) ⊗ Ψ0 ⊗ B −1 ) Q∗3
                                                   
      = −FM

where Kn,k is a commutation matrix (e.g. Lütkepohl 1996, p. 9) and
                                   h−1
                                   X
                         h
                        FM     =          (B −1 R)0 J 0 (M 0 )h−1−j ⊗ J 0 M h
                                    j=0
                                   "                          #
                                        01×p−1          1
                           τ =                                    .
                                       0p−1×p−1      0p−1×1
2.7. INFERENCE ON IMPULSE RESPONSES                                             71

Proof: The derivative of fϕh (θ)
                              b with respect to θ1 has the same form as in the
case of Lemma 2.1. For the remaining derivatives we have to account for the
dependence of M on B, R and Ψ. Using the chain rule and the product rule we
obtain
                    ∂fϕh (θ)
                          b
                                 h vec(M )         −1
                            0
                              = FM       0
                                           − R0 B 0 ⊗ J 0 M h JB −1
                    vec(B)         vec(B)
                    ∂fϕh (θ)
                          b
                                 h vec(M )
                            0
                              = FM         + In ⊗ J 0 M h JB −1 ,
                    vec(R)         vec(R)0
       h
where FM = ∂fϕh (θ)/vec(M
                 b        )0 . To compute the derivatives of M it is useful to
write
                                                        
                        Γ
                        e1    Γ
                              e2    · Γ
                                      ep−2    Γ
                                              ep−1   0
                                                       
                 In           0    .   0      0     0
                                                       
                                                       
                 0            In   .   0      0     0
            M =                                         + τ ⊗ −B −1 RΨ
                                                       
                 .            .    .    .      .     . 
                                                       
                                                       
                 0            0    .   0      In    0
                                                       
                        0      0    .   0      In    In
Using eq. (7b) of Sec. 10.5.5, eq. (3) of Sec. 10.4.1 and eq. (1) of Sec. 10.6.1 of
of Lütkepohl (1996) we get
           ∂vec(M )
                    = −(Ip+1 ⊗ Kn,p+1 ⊗ In )(vec(τ ) ⊗ In ⊗ B −1 R)
           ∂vec(Ψ)0
           ∂vec(M )                                        −1
                    = (Ip ⊗ Kn,p ⊗ In )(vec(τ ) ⊗ Ψ0 R0 B 0 ⊗ B −1 )
           ∂vec(B)0
           ∂vec(M )
                    = −(Ip ⊗ Kn,p ⊗ In )(vec(τ ) ⊗ Ψ0 ⊗ B −1 ).
           ∂vec(R)0
Finally, using ∂vec(B)/∂b∗ 0 = Q∗1 , ∂vec(R)/∂r∗ 0 = Q∗2 and ∂vec(Ψ)/∂ψ ∗ 0 = Q∗3
the derivatives follow. 

   With these results for the derivative ∇fϕh (θ) we are able to state the main
result:

THEOREM 2.1 Under the assumptions that

                             (i)    rk[∇fϕh (θ)] = n2
                                    √             d
                            (ii)      T (θb − θ) −→ N (0, Σθ )
72                                             CHAPTER 2. STRUCTURAL VARS

where Σθ is the asymptotic covariance matrix of θ,
                                                b it follows that
                    √                 d
                           bh − ϕh ) −→ N (0, ∇fϕh (θ)Σθ ∇fϕh (θ)0 ) ,
                        T (ϕ

where ∇fϕh (θ) is given in Lemma 2.1 or Lemma 2.2.

Proof: The proof of this theorem immediately follows from the mean value
expansion given in (2.33). 

     It is important to notice that the assumptions (i) and (ii) in Theorem 2.1
may fail in practice. As pointed out by Lütkepohl (1990), the derivative may
be zero for some particular values of the structural parameters. This problem
already occurs in a univariate model (cf. Benkwitz et al. 2000). In the simple
AR(1) model yt = αyt−1 + εt the estimated impulse response is ϕ    bh . The
                                                              bh = α
derivative is ∇fϕh (θ) = hαh−1 . Obviously, the derivative is zero for α = 0 and
h ≥ 2 and, thus, the impulse responses have a nonstandard limiting distribution
                                           √
and converge with the rate T h/2 instead of T . Benkwitz et al. (2000) discuss
alternative methods to overcome this problem.
     Assumption (ii) of Theorem 2.1 may be violated if the process has roots on or
inside the unit circle. In this case some parameters have a nonstandard limiting
distribution. Again it is useful to consider the simplest case of a univariate AR(1)
model. If α = 1, the least-squares estimator is distributed as
                                        R1
                                           W (r)dW (r)
                             α − 1) ⇒ 0R 1
                          T (b
                                           0
                                             W (r)2 dr

and, obviously, the impulse responses fail to be asymptotically normally dis-
tributed for all h. Phillips (1998) shows that for h → ∞ the impulse responses are
not even consistent as h/T → λ for T → ∞ and λ > 0, that is, if the lag horizon
of the impulse responses are large relative to the sample size. This problem can
however be resolved by using the VECM representation instead of an unrestricted
VAR in levels (Phillips 1998 and Vlaar 1999).
     Sims and Zha (1994) argue hat classical (frequentist) confidence intervals can
be poor measures of the ignorance about estimated impulse response functions in
small samples. First, using bootstrap methods yields a confidence interval which
2.7. INFERENCE ON IMPULSE RESPONSES                                                 73

is based on “an average across informative and uninformative samples” (Sims and
Zha 1994, p.6). In contrast, a Bayesian confidence interval always conditions on
the actual sample and, thus, provides a measure of ignorance by using the data
at hand. Second, in small samples confidence intervals often exhibit a substantial
asymmetry. This important feature cannot be represented by using an asymptotic
approach based on a normal limiting distribution.
   Most of the empirical studies using SVAR models neglect possible information
on the long run relationships among the variables. To address this question in
more detail, assume that yt is generated by a cointegrated model with a VECM
representation given in (1.12). Engle and Yoo (1991) show that the information
matrix of the likelihood function assuming normal innovations is block diagonal
with respect to θ1 = vec(β), θ2 = vec(α, Γ1 , . . . , Γp−1 ) and θ3 = vec(Σ). Accord-
ingly, the estimates Σ
                     b (and therefore B
                                      b and R)
                                             b are asymptotically independent of
the estimates of Γ1 , . . . , Γp−1 , Π and β. It follows that the structural parameters
in B and R are not affected by imposing the rank restrictions on Π as long as Π
is estimated consistently.
   Since the impulse responses involve the parameter matrices B, R and Π, this
result is not sufficient to conclude that the distribution of the impulse response
function is not affected by the cointegration properties. Nevertheless, it can be
shown that the impulse response matrix at a fixed lag horizon is indeed asympto-
tically the same whether an unrestricted VAR in levels or an appropriate VECM
is used to estimate the impulse responses. This result is based on the following
lemma (see also Phillips and Durlauf 1986 and Sims et al. (1990) for similar
results).


LEMMA 2.3 Assume that yt is generated by a cointegrated VAR. Let Π        e denote
the unrestricted least-squares estimator of Π and Π
                                                  b is the ML estimator conditional
on the true cointegration rank r. Then, Π  b + op (T −1/2 ).
                                        e =Π


Proof: To facilitate the notation, a VAR(1) model is used to demonstrated the
result. The extension to VAR(p) models is straightforward.
   Let Υ = [T −1/2 β, T −1 β⊥ ]0 . In a VAR(1) model the unrestricted least-squares
74                                                        CHAPTER 2. STRUCTURAL VARS

estimator for Π is given by:

                            T
                                                 !    T
                                                                           !−1
                            X                         X
                                          0                          0
                  Π
                  e =                ∆yt yt−1                  yt−1 yt−1
                               t=2                       t=2
                            T
                                                     !         T
                                                                                        !−1
                            X                                  X
                                          0
                    =                ∆yt yt−1 Υ0           Υ                0
                                                                      yt−1 yt−1 Υ0             Υ.
                               t=2                              t=2

Denoting
                         T
                                                           "                           #
                         X
                                      0
                                                                 A1        op (1)
                               Υyt−1 yt−1 Υ0          =
                         t=2                                    op (1)      A2
                               T
                                                           "                #
                               X
                                          0
                                                                B1     B2
                                      εt yt−1 Υ0 =                                ,
                                t=2                             B3     B4

where
                          T                                                T
              A1 = T −1         β 0 yt−1 yt−1
                                          0
                                                          A2 = T −2              β⊥0 yt−1 yt−1
                                                                                           0
                          P                                                P
                                              β                                                β⊥
                           t=2                                           t=2
                              T                                             T
                        −1/2             0                            −1/2                0
                             P                                             P
              B1 = T                 εt yt−1 β            B2 = T                      εt yt−1 β⊥
                           t=2                                              t=2
                          T                                                T
              B3 = T −1             0
                                                          B4 = T −1                  0
                          P                                                P
                                εt yt−1 β                                        εt yt−1 β⊥ .
                          t=2                                              t=2

It follows that

                                              B1 A−1 0   −1/2
                                                              B2 A−1 0
                                          "                                                #
                   √                              1 β +T          2 β⊥
                          e − Π) =
                       T (Π                                                                    .
                                              B3 A−1 0
                                                  1 β +T
                                                         −1/2
                                                              B4 A−1 0
                                                                  2 β⊥


Since the ML estimator Π
                       b is asymptotically equivalent to the least-squares esti-
mator of ∆yt on β 0 yt−1 we have

                                                      B1 A−1  0
                                                  "                   #
                          √                               1 β
                                  b − Π) =
                               T (Π                                       + op (1)
                                                      B3 A−1
                                                          1 β
                                                              0


and, thus, the required result follows. 

     It may be surprising to learn that imposing the correct rank restriction on
the matrix Π yields no gain in efficiency for estimating the impulse responses.
The reason is that the limiting behaviour of the impulse responses at a finite lag
horizon is dominated by the limiting behaviour of the short run parameters.
2.7. INFERENCE ON IMPULSE RESPONSES                                                75

THEOREM 2.2 Let yt be generated by a cointegrated VAR with cointegration
rank r and a VECM representation as in (1.12). Then, the asymptotic distribution
of the estimated impulse response at a finite lag horizon h is the same whether the
impulse response is estimated from an unrestricted VAR instead or a VECM with
cointegration rank r.

Proof: The VECM model has a companion form according to (2.25) with
                                                   
                        Γ
                          e1 Γe2 . Γ ep−2 Γep−1 Π               
          ∆yt                                                  εt
           ..          In   0  .   0      0    0                
             .                                                 0
                                                 
                                                   
  zt =           , M =
                         .    . .     .     .    . 
                                                     , νt = 
                                                              
                                                                ... 
                                                                     
        ∆yt−p+2                                  
                       0 0 . In           0    0
                                                                
           yt                                                     0
                                                   
                          0 0 .       0     In   In
The impulse responses result as

                                Φh = J 0 M h JBR−1

or
                                    ϕh = fϕh (θ) ,

where θ =vec(Γ
             e1 , . . . , Γ
                          ep−1 , Π, B, R). Using Lemma (2.3) it follows that θb = θe +
op (T −1/2 ) so that under the conditions of Theorem 2.1

                           ϕ
                           bh (i, j) = fϕ (θ)
                                           b
                                          e + op (T −1/2 )
                                    = fϕ (θ)

and, thus, ϕ
           bh (i, j) and ϕ
                         eh (i, j) have the same limiting distributions. 

     This result implies that information on the long run relationship of the vari-
ables does not help to improve the short run impulse responses. However, Clarida
and Gertler (1996) claim that in small samples the estimates may be improved
by imposing the correct cointegration rank. Furthermore, as shown by Phillips
(1998) the estimates of the impulse responses deteriorate with an increasing lag
horizon and become insignificant if the lag horizon grows as fast as the sample
size. Hence, in practice it may be advantageous to use a VECM representation
with a proper cointegration rank to estimate the impulse responses.
76                                          CHAPTER 2. STRUCTURAL VARS

2.8       Empirical applications
In this section we consider three structural models that can be seen to be “repre-
sentative” for many recent applications using SVAR models. The first example is
related to the early contributions by Sims (1981, 1986). The simple structure of
the model allows the application of a convenient instrumental variable estimator.
The model suggested by Blanchard and Quah (1989) achieves identification by
imposing assumptions on the long run effect of the shocks. This model is ex-
tended by King et al. (1991) in order to identify n − r permanent shocks in a
cointegrated system. For the latter two models point estimates of the structural
parameters can be obtained analytically by exploiting the relationship between
the parameters of the structural and the reduced form. However, standard errors
of the estimates are not available by using this approach.
     The fourth example is an over-identified structural model which was recently
suggested by Swanson and Granger (1997). This model is motivated using a
causal interpretation based on graph theory. The LV framework provides effi-
cient estimation and inference procedures for estimating and testing such kind of
models.



2.8.1      A simple IS-LM model

To illustrate the “first generation” SVAR models advocated by Sims (1981),
Bernanke (1986) and others, a traditional IS-LM model is estimated using quar-
terly U.S. data from 1970(i) to 1997(iv). The output Yt is measured by real GDP,
Mt is the monetary base as computed by the Federal Reserve Bank of St. Louis
divided by the GDP deflator, and it is the 3-month interbank interest rate.
     Let εYt , εit and εM
                        t denote the innovations of the VAR equations for Yt , it and

Mt . The model considered in Pagan (1995) is given by

           εYt   = α εit + uIS
                            t               (IS curve)
           εit   = β1 εYt + β2 εM    LM
                                t + ut      (inverted money demand)           (2.35)
           εM
            t = uM
                 t
                   S
                                            (money supply)
2.8. EMPIRICAL APPLICATIONS                                                      77

Accordingly, R = I3 and
                                                       
                                        1    −α     0
                                                      
                                 −β1
                              B=            1     −β2 
                                                        .
                                        0    0      1
Estimating this model (2.35) by using the LISREL package yields the estimated
equations:
                          εYt = 0.04 εit +   uIS
                                              t

                                  (0.26)


                           εit = 0.14 εYt − 0.73 εM    LM
                                                  t + ut  ,
                                  (0.51)     (−4.99)
where t-values are given in parentheses. The estimate of the coefficient α is in-
significant and positive so that we do not obtain a reasonable estimate of the IS
equation. The parameters of the LM curve have the correct sign but the estimate
of β1 is statistically insignificant.
   Nevertheless, we compute the impulse response functions to analyse the im-
pact of structural shocks on the system variables. The respective graphs are given
in Figure 3.1. It should be mentioned that the LISREL package does not provide
confidence intervals for the impulse responses so that it is difficult to assess the
economic relevance of the results. With this limitation Figure 3.1 a) shows that
in response to an upward shift of the IS curve output increases immediately but
the increase dies out within six years. A positive money demand shock (LM) is
equivalent to an increase in the interest rate and from Figure 3.1 b) it can be
seen that output decreases gradually with a minimum after two years. The im-
pulse response function shows that the small positive correlation between output
and interest rates resulting from the estimated IS curve is merely a short run
phenomenon and at longer horizons the relationship is strong and negative as
expected from economic theory.
   The negative response of output following a positive money supply shock is
somewhat puzzling. From theory we expect that an increase in real money bal-
ances yields an expansive effect on output. However, the impulse response function
78                             CHAPTER 2. STRUCTURAL VARS




     Figure 2.1: Impulse responses for the IS-LM model
2.8. EMPIRICAL APPLICATIONS                                                         79

                       Table 3.1: Variance decompositions

                            IS                  LM                    MS
          yt    1          0.996               0.003                0.001
                4          0.915               0.055                0.030
                8          0.525               0.331                0.144
                12         0.133               0.648                0.219
          it    1          0.010               0.810                0.180
                4          0.332               0.614                0.054
                8          0.533               0.404                0.063
                12         0.622               0.264                0.114
          Mt    1          0.000               0.000                1.000
                4          0.050               0.068                0.882
                8          0.525               0.331                0.144
                12         0.133               0.648                0.219

          The table presents the forecast variances decomposition with respect to
          the structural shocks. All numbers are given in decimales. The forecast
          horizon is measured in quarters.




given in Figure 3.1 c) implies that a positive money supply shock produces a drop
in output after roughly 2 years. Although the size of the effect is moderate, this
result suggests that monetary policy shocks are not measured appropriately by in-
novations in the monetary base. Indeed, recent empirical work demonstrates that
monetary policy in the U.S. is more accurately measured by innovations in the
Federal Funds Rate or a combination of a narrow monetary base and short-term
interest rates (Bernanke and Mihov 1997).

   A positive shift in the IS curve increases interest rates with a maximal re-
sponse at two years (Figure 3.1 d), whereas real money decreases gradually with
a minimum at three years (Figure 3.1 g). These effects are predicted by the IS-
LM model. Similarly, a LM shock leads to an increase in interest rates and a
80                                          CHAPTER 2. STRUCTURAL VARS

decrease in real money (see Figures 3.1 e and 3.1 h) which is also predicted by the
theoretical model. Finally, a positive money supply shock leads to an immediate
drop in interest rates (Figure 3.1 f) and a gradual increase in real money. This
effect is known as the “liquidity effect” and is also an important consequence of
the standard IS-LM model (e.g. Hamilton 1997).


     To assess the importance of the three different shocks for the system variables,
the forecast error variances of the variables are decomposed with respect to the
shocks. Since the shocks are orthogonal, their contribution can be measured as
a fraction of the total forecast error variance. The results for different forecast
horizons are presented in Table 3.1. It turns out that the money supply shock
contributes only a small fraction to the forecast error variance of output. Once
again this result confirms that the innovation in money does not seem to be an
accurate indicator for monetary policy. IS shocks clearly dominate the short run
behaviour of the output series but with respect to a longer forecast horizon, IS
shocks become less important. Finally, money demand shocks play a minor role
in the short run. However with an increasing forecast horizon, the LM shocks
become more and more important. The relative contribution of the shocks to the
forecast error variance of interest rates and real money can be interpreted in a
similar manner.


     Summing up, the results demonstrate that even such a simple model for the
U.S. economy is able to produce reasonable results although some findings are at
variance with our preconceptions emerging from the basic version of an IS-LM
model. In fact, it is often encountered in practice that some aspects of the SVAR
model are inconsistent with theoretical reasoning. For example, in several studies
for the U.S., monetary policy shocks produce results consistent with common
priors about the qualitative effects of monetary policy on output and prices, but
produce a so-called “liquidity puzzle”, that is, expansive monetary policy increases
interest rates (see, e.g., Fung and Kasumovich 1998). However, such a result does
not demonstrate the general failure of the SVAR approach. Rather, such findings
give an indication of the direction in which the model may be improved.
2.8. EMPIRICAL APPLICATIONS                                                        81

2.8.2       The Blanchard-Quah model
Based on a simple economic model, Blanchard and Quah (1989) identify supply
shocks to have persistent effects on output whereas demand shocks are transitory.
That is, in a VAR model with yt = [∆Yt , Ut ]0 , where Yt denotes the log of output
and Ut is the unemployment rate, the vector of structural shocks ut = [ust , udt ]0 is
identified by setting the (1,2) element of the long run impact matrix Ψ equal to
zero. Furthermore, we let Ω = I, so that the shocks are normalized to have unit
variance.
   The structural form is related to the reduced form as

              ΨΨ0 = (I − A1 − · · · − Ap )−1 Σ(I − A01 − · · · − A0p )−1 .

Since Ψ is assumed to be lower triangular, it can be obtained from a Choleski
decomposition of the matrix (I − A1 − · · · − Ap )−1 Σ(I − A01 − · · · − A0p )−1 . It
is important to note, however, that this computation implies that the diagonal
elements of Ψ are strictly positive. This additional identification restriction will
be discussed below.
   The Blanchard-Quah model can also be estimated by using the LV represen-
tation that has the simple form:


                                                   
                                                    ∆e
                                                      y   t   = Rξty
                Measurement equations:
                                                    ye
                                                        t−1   = −Ψξtx


                System equations:                  ξty = ξtx + ut ,



where ∆e
       yt and yet−1 denote the first step residuals obtained from a regression of
∆yt and yt−1 on the lags of ∆yt and the deterministic terms of the system. The
(1, 2) element of Ψ is set to zero.
   With respect to the discussion in Section 3.6 it is also interesting to compare
the findings with the corresponding results using a cointegration approach. Since
Ut is assumed to be stationary, it follows that β = [0, 1]0 and the error correction
82                                              CHAPTER 2. STRUCTURAL VARS

form of the model is
                                8
                                X                        7
                                                         X
             ∆Yt = α1 Ut−1 +          c11,j ∆Yt−j +              c12,j ∆Ut−j + ε1t
                                j=1                      j=1
                                8
                                X                        7
                                                         X
             ∆Ut = α2 Ut−1 +          c21,j ∆Yt−j +              c22,j ∆Ut−j + ε2t .
                                j=1                      j=1


An estimate of α = [α1 , α2 ]0 is obtained by OLS and an orthogonal complement of
this vector is α⊥ = [α2 , −α1 ]0 . Accordingly, an estimator of the matrix Q defined
in Section 3.6 can be constructed as
                                       "                 #
                                           0     1
                                Q=                           .
                                           α2   −α1

To compute R, let P be the Choleski factor of (QΣQ0 ). Then, as shown in Section
3.6, R can be obtained as R = Q−1 P .
     To estimate the system, we first employ the software package LISREL 8.12a
to estimate the latent variable representation. The maximum likelihood estimates
result as                                                       
                                      0.070      0.876
                                               
                               (0.237) (15.75) 
                            R
                            b=                 
                                               
                               0.207 −0.196 
                                               
                                (3.067) (2.841)
and                                                             
                                      0.489          0
                                                
                                (3.067)         
                            Ψ
                            b =                  ,
                                                
                                0.008 −3.809 
                                                
                                 (0.005) (2.995)
where the absolute t-values are given in parentheses. The estimates are numeri-
cally identical to the estimates obtained by applying the computational method
suggested by Blanchard and Quah (1989). However, the t-statistics are not avail-
able by using the latter technique.
     It may be interesting to note that the “supply shock” has an insignificant
contemporaneous impact (|t| = 0.237) on output growth. Thus, the demand
shock is approximately the innovation of the output growth equation.
2.8. EMPIRICAL APPLICATIONS                                         83




       Figure 2.2: Impulse responses for the Blanchard-Quah model
84                                          CHAPTER 2. STRUCTURAL VARS

     In Figure 3.2 the impulse response functions with respect to the structural
shocks are presented. The impulse response function are very similar to the ones
obtained by Blanchard and Quah (1989) and a careful economic interpretation of
the figures is given in their paper. The 90% confidence intervals are computed by
1000 Monte Carlo draws of the estimated reduced form and normally distributed
errors. Comparing our confidence sets with the bootstrap intervals presented in
Blanchard and Quah (1989) reveals that their confidence bands are much more
asymmetric than ours. As argued by Sims and Zha (1994), this is due to an
improper bootstrap algorithm used by Blanchard and Quah (1989).
     In practical applications, the cointegration approach yields different estimates
of the structural parameters even if maximum likelihood techniques are used. This
is due to the different model representation used in this framework. If some vari-
ables are differenced, the degree of the corresponding lag polynomials is reduced
by one and, thus, the VAR equations have a different lag order. It is possible
to account for such differences by using a VAR representation with different lag
orders for the variables. The efficient estimation of such systems is, however,
much more complicated than an unrestricted VAR so that we do not consider
such modifications in what follows.
     For the Blanchard-Quah model the cointegration approach yields the estimate
                                "                   #
                                  0.0746 0.9296
                          R
                          bCI =                       ,
                                  0.2198 −0.2082
which is – in absolute values – not far away from the estimates using the LISREL
approach.


2.8.3      The KPSW model
A simple example of a cointegrated system with a structural identification of the
shocks is provided by King, Plosser, Stock and Watson (KPSW) (1991). Stan-
dard RBC models with permanent technology shocks imply that the logarithm of
private output (qt ), consumption (ct ) and investment (it ) are I(1) processes with
the cointegration relations ct − qt ∼ I(0) and it − qt ∼ I(0). Since β⊥ (the or-
thogonal complement of β) is a vector with identical elements, the common trend
2.8. EMPIRICAL APPLICATIONS                                                       85

representation according to (1.13) is found as
                                 
                            ∆qt         a
                                  0
                   ∆yt =  ∆ct  =  a  (α⊥ εt ) + C(L)∆εt ,
                                                  e

                            ∆it         a

where the polynomial C(L)
                     e    =C
                           e0 + C      e2 L2 + · · · has all roots outside the
                                e1 L + C
complex unit circle. It is seen that the permanent shock has an identical long run
impact on the variables.
   To achieve a structural identification, King et al. (1991) assume that the
first shock (u1t ) is permanent and the remaining two shocks (u2t , u3t ) are transi-
tory. Furthermore, the shocks are mutually uncorrelated with unit variance, i.e.,
E(ut u0t ) = I3 . These assumptions are sufficient to identify the permanent shock
but are not sufficient for the identification of the transitory shocks. The identi-
fication of u1t follows immediately from the fact that in this case α⊥ is a 3 × 1
                              0
                                    p 0
vector and, therefore, u1t = α⊥ εt / α⊥ Σα⊥ . However, to identify the transitory
shocks an additional restriction is needed.
   King et al. (1991) assume that the transitory shocks enter the system re-
cursively, as in the triangular identification scheme implied by using a Choleski
decomposition. Such a procedure is obtained by letting R be lower triangular and
                                             
                                     1 b1 b2
                                             
                             B=   0 1 0 .
                                              

                                     0 0 1

Since the first shock is assumed to be permanent, the first row [1, b1 , b2 ] must be
orthogonal to the columns of the matrix α. Furthermore the (1,1) element of B
is normalized to unity in order to achieve identification of the (1,1) element of R.
The matrix Γ = R−1 Bα is a 3 × 2 matrix with zeros in the first row (see Section
3.6). This model has {6, 2, 4} unknown parameters for {R, B, Γ} and, thus, the
structural model has the same number of parameters as the reduced form.
   For the empirical application we use U.S. real national income account vari-
ables for 1960(i) through 1988(iv), so that the data and the sample period are sim-
ilar to King et al. (1991). The variable qt is the per capita private Gross National
86                                                 CHAPTER 2. STRUCTURAL VARS

Product (GNP less government purchases of goods and services), ct measures per
capita Private Consumption Expenditures and it is measured by per capita Gross
Private Fixed Investments.4 As in King et al. (1991) all computations are based
on a VAR(6) representation.
         Table 3.2 presents the results of Johansen’s (1991) trace test for the cointe-
gration rank. An unrestricted linear time trend is included and the corresponding
critical values of Perron and Campbell (1993) are applied. The hypothesis that
the three series are not cointegrated (r = 0) can be rejected at a significance level
of 0.10. Furthermore, the hypothesis that the cointegration rank is r = 1 or r = 2
cannot be rejected. Although this is only a weak empirical support we follow King
et al. (1991) and choose the cointegration rank r = 2 in what follows. Using the
LR test suggested by Johansen and Juselius (1992) the theoretical cointegration
vectors β1 = [−1, 1, 0]0 and β1 = [−1, 0, −1]0 cannot be rejected at a critical value
of 0.05.
         Maximizing the likelihood function of the structural model, the following es-
timates are obtained:
                                                                                
                                                                0         0
                    1 0.418 −0.300                                           
                                                             −0.103 0.065 
                      (0.09) (0.50)
                                                                           
                                                                             
                B
                b=                               ,      b =  (1.01) (1.75) 
                                                          Γ
                                                  
                  
                  0    1       0                            
                                                              
                                                                              
                                                                              
                                                             0.079 −0.029 
                    0   0       1
                                                                             
                                                                (0.62) (0.37)
and                                                              
                                        0.950         0       0
                                                                  
                                  (0.28)                          
                                                                  
                                                                  
                                  0.488 −0.486               0 
                               R
                               b=                                 .
                                                                   
                                 
                                  (1.76) (1.77)                   
                                                                  
                                                                  
                                  −2.003 −2.781            1.794 
                                                                  
                                        (1.92)   (0.90)     (0.33)

     4
         Our data is different from the data used in KPSW. In our application the variables are
taken from the data bank of St. Louis Federal Reserve Bank, except the population series which
comes from the Citibase data tape.
2.8. EMPIRICAL APPLICATIONS                                                          87




                Figure 2.3: Responses w.r.t. the permanent shock




In Figure 3.3 the impulse response functions with respect to the permanent shock
are depicted. In all, they have a similar shape as those presented in King et
al. (1991). However, the investment response is much more pronounced than
the respective response presented in the original paper. This seems to be due to
differences in the data construction.




   An alternative way to formulate the structural model is to adopt a structural
model for the transformed set of variables zt = [ct − qt , it − qt , ∆qt ]0 . The corre-
88                                              CHAPTER 2. STRUCTURAL VARS

                         Table 3.2: Cointegration statistics

          H0               Trace            0.10 critical value      0.05 critical value
         r≤2                4.481                   9.75                     11.62
         r≤1                15.74                  21.22                     23.65
         r=0                37.17                  36.52                     39.67
 β1 = [−1, 1, 0]0           2.575                   2.71                     3.84
 β2 = [−1, 0, 1]0           0.160                   2.71                     3.84
     joint(β1 , β2 )        2.642                   4.60                     5.99

 Notes: This table presents LR statistic for the cointegration rank and for prespecified
 cointegration vectors. The critical values of Perron and Campbell (1993) are applied.




sponding (concentrated) latent variables representation is


                                                      
                                                       ∆e
                                                         z   t   = Rξtz
                   Measurement equations:
                                                       ze
                                                           t−1   = −Ψz ξtx


                   System equations:                  ξtz = ξtx + ut .



The matrix Ψz has the following structure:
                                            
                                      ∗ ∗ ∗
                                            
                              Ψz =  ∗  ∗ ∗ ,
                                             
                                      a 0 0

where a is the long run impact of the permanent shock. The zeros in the last row of
Ψz result from the assumption that the second and the third shock are transitory.
In order to identify the transitory shocks we need an additional restriction. Again
one may set the (2,3) element of R equal to zero. However, one should note that
the matrix R in the representation for zt is not identical to the matrix R of the
former model for ∆yt .
2.8. EMPIRICAL APPLICATIONS                                                       89

   Since the (concentrated) reduced form implies 15 parameters and [Ψz , R] con-
tains 7+9=16 parameters we need an additional restriction. In King et al. (1991)
and the cointegration approach considered above the transitory shocks are uniquely
obtained by using a Choleski decomposition. An equivalent identification is ob-
tained using a matrix with a structure like
                                                    
                                   r11 r12     r13
                                                 
                            R=   r21 r22      0 
                                                   ,
                                   r31 r32     r33

where r22 and r33 are positive numbers. Here, identification is achieved by assum-
ing that the third structural shock is uncorrelated with the second innovation.
The kind of identification restriction for the transitory shocks does not, however,
affect the construction of the permanent shock.
   Maximizing the likelihood function of the LV model, the long run impact of
the permanent shock is estimated as 0.855 with an estimated standard deviation
of 0.181. The corresponding estimate from the cointegration approach (0.617, see
above) is in the range of two times the standard deviation.
   In the present application we use the transformation matrix
                                                      
                          −1 1 0                  0 0 1
                                     , Q−1 =  1 0 1  .
                                                      
                   Q=   −1   0  1                    
                           1 0 0                  0 1 1

According to (2.22) the impulse response function (IRF) of qt with respect to the
permanent shocks is identical to the cumulated IRF of ∆qt with respect to the
permanent shock. The IRF of ct is equal to the sum of the cumulated IRF of
ct − qt with respect to the permanent shock and the IRF of ct − qt with respect to
the the first transitory shock. The IRF of it is equal to the sum of the cumulated
IRF of ct − qt with respect to the permanent shock and the IRF of it − qt with
respect to the the second transitory shock.
   From B  b it is seen that the estimated permanent shock is proportional to
[1, 0.418, −0.3]εt . However, the parameter estimates are not significantly different
from zero. Excluding the investment innovation gives a permanent shock with the
90                                            CHAPTER 2. STRUCTURAL VARS

estimate 1.81 and a t-value of 3.56 for the coefficient attached to the consumption
innovation. From these results it is obvious that the parameter estimates in B    b
are highly correlated and a data consistent restriction can change the remaining
parameter estimates dramatically.
     In all, this application demonstrates that the simple neoclassical growth model
seems to be perform well at least for the data used in King et al. (1991). The long
run response of consumption, investment and output to a permanent (technology)
shock is the same but the short run response of investment is much more cyclical
than the short run response of consumption. This is also predicted by standard
neoclassical models (e.g. Kydland and Prescott 1982).


2.8.4      The causal graph model of Swanson-Granger (1997)
In order to identify a causal structure for the innovations, Swanson and Granger
(1997) adopt a graph theoretical approach. Assume that a vector of uncorrelated
shocks ut = [u1t , . . . , unt ]0 can be found such that the innovations of the (station-
ary) VAR are arranged as ε1t = u1t ; ε2t = a2 ε1t + u2t ; · · · ; εnt = an εn−1,t + unt .
Such a structure can be represented by a causal graph as

                         ε1t −→ ε2t −→ · · · −→ εnt
                          ↑           ↑          ↑           ↑                    (2.36)
                         u1t         u2t        ···         unt

The arrows are assumed to indicate a simple form of causal directionality (cf.
Swanson and Granger, 1997). It should be noted that this concept of causality is
different from what is known as “Granger causality”. The latter concept implies
an ordering in time so that a cause must be prior to the effect. The causal graph
approach is a way to formalize the notion of “instantaneous causality” discussed,
e.g., in Lütkepohl (1993).
     The causal ordering given in (2.36) implies that E(εit εkt |εjt ) = 0 for any
i < j < k. Accordingly, Swanson and Granger (1997) suggest testing the par-
tial correlation between εit and εkt conditional on εjt in order to recover the
causal ordering empirically. To motivate this concept consider the condition
2.8. EMPIRICAL APPLICATIONS                                                             91

E(ε1t ε3t |ε2t ) = 0. From ε3t = a3 ε2t + u3t and E(ε2t u3t ) = 0 it follows that given ε2t
the variable ε1t does not help to “predict” ε3t . On the other hand, if a3 6= 0, then
the partial correlation between ε3t and ε2t conditional on ε1t is different from zero
and, thus, ε2t provide additional information to predict ε3t . Hence, ε2t may be
seen as a cause of ε3t . It is important to note that the causal graph ε1t → ε2t → ε3t
implies the same restriction on the conditional expectation as ε3t → ε2t → ε1t and,
therefore, the direction of the graph is not identified.
   This causality concept can be represented as a structural VAR by letting
                                                          
                            1      0    0 ···      0    0
                                                          
                          −a2     1    0   · · ·  0    0  
                                                          
                                                          
                    B= 0       −a3 1 · · ·       0    0               (2.37)
                          .           ..          ..   .. 
                          ..
                                                           
                                         .         .    .
                            0      0    0 · · · −an 1
and R = In . The corresponding LV representation is given by



               Measurement equations:              εet = ξty


               System equations:                   ξty = (I − B)ξty + ut .



It is easy to see that such a structural model implies (n − 2)(n − 1)/2 over-
identifying restrictions, which can be tested empirically by comparing the value
of the log likelihood function with the corresponding value of the unrestricted
VAR using the LR test statistic. This test avoids problems of the sequential test
procedure suggested in Swanson and Granger (1997).
   As an application of this approach we consider a four-variate system for the
U.S. including the log of the money base M3 (M ), log of real GNP (Y ), the 3-
month LIBOR interest rate (R) and the log of the implicit GNP deflator (P ).
The data for M, Y and P are seasonally adjusted and is taken from the Main
Economic Indicator data base. The interest rate R is not seasonally adjusted and
taken from the IMF data base. All data run from 1970(i) through 1994(iv).
92                                               CHAPTER 2. STRUCTURAL VARS

         Table 3.3: Tests for the cointegration rank of the reduced form

          H0      max. eigenvalue         crit. val.        trace          crit. val.
         r=3            1.473               3.962           1.473           3.962
         r=2            5.509               14.04           6.982           15.20
         r=1            33.31               20.78           40.29           29.51
         r=0            50.06               27.17           90.35           47.18

         Note: “max. eigenvalue” and “trace” indicate Johansen’s LR statistics for
         the cointegration rank including an unrestricted constant in VECM represen-
         tation. The critical values correspond to a significance value of 0.05 and are
         taken from Osterwald-Lenum (1990).




     The vector of time series is modeled using a cointegrated VAR including a
vector of constants in the error correction representation. Model selection crite-
ria like AIC and tests for serial correlation of the errors suggest that a VAR(2)
model is sufficient to render white noise errors. Table 3.3 presents Johansen’s
(1991) trace and maximum eigenvalue test statistics for the cointegration rank.
The results suggest that there are two cointegration relationships among the vari-
ables. Therefore, the residuals from the estimated VECM model are used for the
structural model of the form Be
                              εt = u
                                   et , where B has the form as in (2.37).

     Table 3.4 presents the results of the LR test of the over-identifying restrictions
implied by the corresponding causal graph. There exist 4! = 24 possible graphs.
However, since the direction of the graph is not identified, only 12 graphs are
considered. The “mirror graphs” yield the same values of the LR statistic, so
there is no point in reporting them. It turns out that only two causal graphs
are accepted at a significance level of 0.05. Both graphs do not correspond well
with the type of transmission mechanism of monetary policy discussed in the
literature. The graphs imply that (real) effects on output are “causally prior”
to the (nominal) effects on prices, while theory usually conjectures the reverse
ordering. Since we only intend to give an illustration of the approach suggested by
Swanson and Granger (1997), we do not attempt to reconcile this finding with the
2.9. PROBLEMS WITH THE SVAR APPROACH                                                       93

                    Table 3.4: Tests of the causal graph model
           graph              LR     p-value             graph          LR     p-value
    M →Y →R→P                3.32      0.34      R→M →Y →P              15.5    < 0.01
    R→Y →M →P                5.77      0.12      M →P →Y →R             15.9    < 0.01
    R→P →M →Y                10.7      0.01      Y →R→M →P              16.1    < 0.01
    M →Y →P →R               11.8      0.01      M →R→Y →P              17.1    < 0.01
    Y →M →R→P                12.0    < 0.01      M →R→P →Y              22.1    < 0.01
    M →P →R→Y                12.3    < 0.01      R→M →P →Y              24.5    < 0.01

    Note: The entries of this table present the values of the LR statistic of the over-
    identifying restrictions of the Swanson-Granger model. Under the null hypothesis the
    statistic is χ2 distributed with three degrees of freedom.




counterfactual evidence using alternative methods. A more thorough discussion
of the merits and pitfalls of this new approach is left for future research.



2.9      Problems with the SVAR approach
Identification problems. In a critique of Blanchard and Quah (1989), Lippi
and Reichlin (1993) point out that a stationary VAR has an infinite manifold
of different MA representations. Among those, however, only one (the Wold or
fundamental representation) has the property that the determinant of the MA
polynomial has all its roots on or outside the unit circle. There are, however,
non-fundamental representations with roots inside the unit circle. The associated
white noise errors are linear combinations of current, past and future values of
yt . Lippi and Reichlin (1993) argue that such non-fundamental representations
usually cannot be ruled out a priori. Specifically, nonfundamental representations
can occur if the information space of the economic agents is different from the
information space of the econometrician.
   In a reply to this critique Blanchard and Quah (1993) admit that the limi-
tation to fundamental representations is somewhat arbitrary but that it cannot
94                                           CHAPTER 2. STRUCTURAL VARS

be considered less plausible than alternative non-fundamental representations. In
fact, in most cases it is not possible to select the “correct” representation on
empirical grounds and it seems thus natural to select the most convenient one.
The Blanchard–Quah methodology formally decompose a set of time series into
certain orthogonal shocks with some prespecified properties. Whether such quan-
tities have the attached economic meaning of representing demand and supply
shifts cannot be decided empirically. It merely provides one admissible inter-
pretation of the data which is generally not refutable as long as just identified
structures are considered.
     Another important problem is that even if one confines oneself to the Wold
representation, the structural model need not be unique. The Blanchard-Quah
model provides a good example for illustrating the problems involved by the iden-
tification of structural VARs. The reduced form is a bivariate VAR modeling the
unemployment rate and output growth and the two structural errors are inter-
preted as supply and demand shocks, where the effect of the demand shocks on
the output measure is assumed to vanish in the long run (see Section 3.8.2).
     Let rij , σij , cij denote the (i, j) elements of R, Σ = RR0 and C = Π−1 . Then
the set of restrictions for the structural model is:

                                   2     2
                                  r11 + r12 = σ11                               (2.38)
                                   2     2
                                  r21 + r22 = σ22                               (2.39)
                                  r21 r11 + r22 r12 = σ12                       (2.40)
                                  c11 r12 + c12 r22 = 0 .                       (2.41)

It is easily seen that these restrictions identify the absolute value of the parameters
but are not sufficient to determine the sign of the parameter uniquely. Specifically,
if the matrix R(1) obeys the restrictions then also the matrix R(2) = −R(1) and
                                       !                           !
                          −r11 −r12                     r11   r12
                R(3) =                    , R(4) =                   ,
                           r21    r22                  −r21 −r22
                                     !                        !
                          −r11 r12                   r11 −r12
                R(5) =                  , R(6) =                  ,
                          −r21 r22                   r21 −r22
fulfill the above constraints. In this simple example it is obvious that a unique
2.9. PROBLEMS WITH THE SVAR APPROACH                                             95

representation is obtained if there are additional assumptions about the signs of
the diagonal elements of R. Indeed, this is the case if the Choleski decomposition
is applied for computing the structural parameters from the reduced form as in
Blanchard and Quah (1989). In models using R = I, identification is usually
achieved by setting the diagonal elements of B equal to one.
   Waggoner and Zha (1997) show that the normalization used to identify the
shocks is not only important for the interpretation of the model but also affects
statistical inference in small samples. A similar point is made by Pagan and
Robertson (1998) by using a different perspective. To illustrate the problem, we
follow these authors and consider the model suggested by Gordon and Leeper
(1994):

                        MS :      mt = b12 it + γ10 x1t + ust
                        MD :      it = b21 mt + γ20 x2t + udt ,

where ust and udt represent money supply and money demand shocks, respectively.
The vectors x1t and x2t comprise further (exogenous) variables that are used
to identify the two equations. These variables are, however, inessential for our
reasoning and so we drop these variables for the ease of exposition.
   The contemporary impulse responses are obtained as
                "        #−1               "            #
                   1 b12            1         1    −b12
                              =                           .                  (2.42)
                  b21 1         1 − b21 b12 −b21    1

Economic theory implies that b12 > 0 and b21 < 0 so that b21 b12 is negative. In
finite samples there is a positive probability that for the estimates b̂21 b̂12 > 1,
in particular, if b21 and b12 are estimated using “weak instruments” (Pagan and
Robertson 1998). It follows that in finite samples there may be a substantial
probability that the impulse responses swich their sign. The resulting distribution
of the impulse responses therefore tends to have two different modes and the
normal distribution yields a poor approximation to the actual distribution. Pagan
and Robertson (1998) show that this problem is in fact relevant in empirical
applications. Waggoner and Zha (1997) resolve the problem by using a data
dependent normalization rule (the “ML distance normalization”). It is important
96                                           CHAPTER 2. STRUCTURAL VARS

to note, however, that the problem disappears as T tends to infinity, because the
denominator in (2.42) converges in probability to a positive constant under the
maintained assumption.

     Another identification problem arises when using long run restrictions. Faust
and Leeper (1997) show that additional assumptions on the short run dynamics are
required to enable reliable inference. An intuitive explanation is that for a VAR
with an infinite lag order, a small change of the model parameters has a cumulative
effect on the long run responses of the shocks. An obvious remedy of this problem
is to assume that the VAR order is finite which is equivalent to the assumption
that all higher autoregressive coefficients are equal to zero. Alternatively, one may
assume that not only the long run effect is zero but also the responses beyond
a lag of, say, 40 periods vanish (Faust and Leaper 1997, Sec. 2.2). Although
this critique is certainly important from a theoretical perspective, it is difficult to
assess the relevance for empirical practice. The message for practical work, which
can be concluded from such kind of reasoning, is that it may be hazardous to rely
on long run restrictions, when identifying the model, in particular, if the lag order
of the VAR is large.

     Finally it is interesting to consider the problem, that the dimension of the
empirical VAR is smaller than the underlying dynamic system. In this case the
estimated shocks can only be estimated in an aggregated form. The crucial ques-
tion is, whether the aggregated shocks have the same properties than the original
shocks. In the Blanchard-Quah model the demand shock are identified as the tran-
sitory shock, whereas the supply shock has a permanent effect on output. Now,
assume that there are m1 > 1 orthogonal demand shocks and m2 > 1 orthogo-
nal supply shocks with the same long run properties. The interesting question
is, whether it is possible to identify a “joint” aggregated demand (supply) shock
as a linear combination of the original demand (supply) shocks only, or whether
the aggregated system mixes up both type of shocks. Faust and Leeper (1997)
derive conditions that ensure that the aggregated demand and supply shock can
be suitably separated. However, without knowledge of the complete dynamical
process, the condition cannot be verified. Faust and Leeper (1997) present in-
2.9. PROBLEMS WITH THE SVAR APPROACH                                                      97

direct evidence that the condition for an appropriate separation of demand and
supply shocks is violated.

Robustness. In a number of recent papers, the SVAR approach is criticized
for its lack of robustness under different structural assumptions. For example,
Cochrane (1998) finds that output responses vary a lot as one changes identifying
assumptions. Rudebusch (1998, p. 925) concludes the comparison of the shocks
from three different SVAR specifications:

         “Obviously, these three series give very different interpretations of the
         history of monetary policy surprises, and in several periods, the VAR
         series describe a stance for monetary policy that is greatly at variance
         with historical accounts.”

As a second example, Cooley and Dwyer (1998) summarize their comparison of
different SVAR models:

         “The findings of this paper suggest that conclusions about the impor-
         tance of technology and other shocks based on simple SVARs are cer-
         tainly not invariant to the identifying assumptions and may not be very
         reliable as vehicles for identifying the relative importance of shocks.”

Needless to say that this danger is always present, when structural economet-
ric models are based on prior information derived from economic theory. There
seems to be a consensus, however, that SVAR models are particularly sensitive
to alternative identifying assumptions and that conclusions from an SVAR model
are therefore “unreliable” and “fragile”.5 In a similar vein, it is claimed that eco-
nomic theory is not informative enough to arrive at a unique SVAR specification
and, hence, the researcher is free to choose among a large number of possible
specifications. To quote Uhlig (1997):

         “There is a danger here that we just get out what we have stuck in,
         albeit a bit more polished and with numbers attached ...”
   5
       It is interesting to note that the same arguments were put forward by Leamer (1983) to
criticize the simultaneous equation approach.
98                                         CHAPTER 2. STRUCTURAL VARS

To overcome this problem, different approaches were suggested to account for the
uncertainty of model specification. King and Watson (1997) compute the impulse
responses for all models with plausible identification assumptions. The resulting
range of impulse response functions represents the possible effects on the variable
of interest. Of course, whenever the resulting range of impulse responses is wide,
little is learned from the estimation of SVAR models.

     A similar approach is suggested by Uhlig (1997) and Faust (1998). They
assume that economic theory is at best able to make predictions on the sign
of the impulse response at various lag horizons. Uhlig (1997) uses a penalized
likelihood approach that introduces a penalty term implying a sharp decrease
of the maximization criterion whenever the inequality conditions on the impulse
response functions are violated. Faust (1998) considers the range of models that
results from a rotation of the system and satisfies the sign restrictions on the
impulse responses. Within this range of models he considers the worst case and
therefore draws a very cautious conclusion about the effect on the shocks.

     A closely related approach employs a Bayesian methodology. Sims and Zha
(1998) impose prior information on the autoregressive parameters, whereas Dwyer
(1998) and Gordon and Boccanfuso (1998) directly specify prior distributions
on the plausible shape of the impulse response functions. The latter approach
allows the imposition of inequality restrictions on the impulse response functions
by assigning zero weights to implausible values of the prior distributions of the
impulse responses.

     Uhlig (1997) adopts a related Bayesian approach. He uses Litterman’s prior
distribution on the parameters of the VAR model and computes an estimate of
the structural parameters for each realization of the artificial model, simulated
by using the posterior distribution of the VAR parameters. The parameter values
which do not satisfy the structural assumptions (for example that a positive shock
in interest rates leads to a decreases in the monetary base) are dropped and
confidence intervals can be computed from the set of valid impulse responses
among all simulated realizations.

     These alternative approaches are suggested to overcome the lack of robustness
2.9. PROBLEMS WITH THE SVAR APPROACH                                         99

in the structural VAR analysis. It is however not clear, whether it is realistic
to claim for such kind of robustness. In general, prior information is necessary
because economic data are too uninformative about the underlying structure.
Therefore, it is expected that prior assumptions are important for the analysis
of economic data and, thus, different assumptions may produce different results.
Similarly, we cannot hope to be able to refute economic theories definitely by
using a structural approach (cf. Breitung et al. 1993). Therefore, these methods
should be seen as a more or less useful device to recover structures behind the
data. In other words, economic data is used to quantify prior beliefs about the
economic system rather then to decide between alternative theories.
100   CHAPTER 2. STRUCTURAL VARS
Chapter 3

Problems of temporal aggregation

This chapter addresses the question, how temporal aggregation affects structural
inference. Indeed this is an important issue, since in practice the frequency of
observation is usually different from what may be called the natural frequency of
the underlying time series. For example, at financial markets, agents react very
rapidly to news and, thus, the natural frequency of a model that describes the
behaviour of financial agents is likely to be minutes rather the hours or days.
   However, if the natural frequency of the underlying process is high relative to
the observed frequency of the data, temporal aggregation may completely change
the structural relations in the system. It is therefore interesting to investigate the
effects of temporal aggregation on structural inference.
   To do so, it is assumed that the data are generated by a discrete stochastic
process with some causal ordering as suggested by Granger (1969). Given the
causal structure of the data generating process, what kind of structural model
results when the data is temporally aggregated? Does the observed structure
correspond to the underlying causal relationship among the variables or is the
observed structure different from the original causal structure?
   In this chapter it is argued that SVAR models as considered in Chapter 3 can
be motivated with respect to the underlying causal ordering by using Granger’s
original definition of a causal process. Conditions are given to ensure that suffi-
ciently aggregated data are able to reflect the causal structure in the covariance

                                         101
102            CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION

matrix of the VAR innovations. It does not come as a surprise, however, that
temporal aggregation implies a loss of information. Specifically, the contempo-
raneous correlation of the innovations cannot identify the direction of causality.
However, conditions can be given that rule out “spurious instantaneous causality”
and, thus, we are able to verify that the observed structure is not an artifact of
the underlying aggregation process.

   Furthermore, I address the question what happens with a particular structure
that can be represented by a SVAR model if the data is temporally aggregated.
It is shown that in general the structural representation of the VAR may change
substantially with the aggregation level of the data. For an empirical example
I find that the general shape of the impulse responses does not change a lot by
aggregating the data. However, temporal aggregation has a substantial effect on
the magnitude of impulse responses.

   There is already a rich literature that analyses the effects of temporal aggrega-
tion in a multiple time series framework. An early example is Quenouille (1957),
where the temporal aggregation of ARMA processes is studied. Amemiya and Wu
(1972), and Brewer (1973) refine and generalize Quenouille’s result by including
exogenous variables. Zellner and Montmarquette (1971) discuss the effects of tem-
poral aggregation on estimation and testing. Engle (1969) and Wei (1978) analyze
the effects of temporal aggregation on parameter estimation in a distributed lag
model. More recently, Weiss (1984), Stram and Wei (1986), Lütkepohl (1987), and
Marcellino (1999) provide detailed studies of the effects of temporal aggregation
in a VARMA framework.

   The results of these studies can be summarized by quoting Tiao (1999): “So
the causality issue is muddled once the data are aggregated. The problem is that
if the data are observed at intervals when the dynamics are not working properly,
then we may not get any kind of causality.” In this chapter it is argued that this
statement is also true for inference based on structural VARs.

   In Section 4.1 I discuss the concept of Granger causality under temporal ag-
gregation. Some useful asymptotic results for large aggregation intervals are pre-
sented in Section 4.2. The consequences for causal inference are discussed in
3.1. GRANGER CAUSALITY                                                                 103

Section 4.3 and the relevance in finite aggregation intervals is studied in Section
4.4 by using Monte Carlo simulations. In Section 4.5 presents an empirical appli-
cation where the effects of temporal aggregation are studied by using US data of
unemployment and inflation.



3.1      Granger causality
Following Granger (1969), consider a conditional distribution with respect to two
information sets which are available at time t, say It and It∗ = {It , xt , xt−1 , . . .},
where xt denotes a (possibly causal) variable. As in Section 2.4, the variable xt
is defined to be Granger causal for the variable yt if there exist an h ∈ {1, 2, . . .}
such that
                             E(yt+h |It ) 6= E(yt+h |It∗ ) .                         (3.1)

If It = {yt , yt−1 , . . .}, that is, when causality is investigated in a bivariate system,
it is sufficient to consider h = 1 (e.g. Lütkepohl 1999).
   An important problem with this definition is the choice of the sampling in-
terval. It is possible that Granger causality is observed when data is measured
at a daily basis, say, but at a monthly or quarterly frequency the causality may
disappear. Thus, for inference on causality it is important that the data has the
“correct” sampling frequency. There are two alternative approaches to deal with
this problem. First, it may be assumed that the underlying time series has a con-
                                                 R
tinuous time Wold representation given by y(t) = f (τ )ε(t − τ )dτ , where f (τ ) is
a continuous vector function and ε(t) is continuous white noise (e.g. Christiano
and Eichenbaum (1987), Renault and Szafarz (1991)). In this framework the data
should be observed at a (approximately) continuous basis to avoid misleading
inference on causality. However, with the exception of some financial variables,
economic data are usually observed at a monthly or quarterly frequency, so the
relevance of such a continuous time framework is limited in practice.
   An alternative approach is to assume that the data are generated by a discrete
ARIMA process sampled at some given frequency (e.g. Tiao 1972, Lütkepohl
1987, Marcellino 1999). When investigating causality it seems quite obvious how
104                CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION

to choose the natural frequency. If we assume that cause and effect are ordered
in time so that the causal event is observed in advance of the effect then the
sampling frequency should be sufficient to distinguish the cause and the effect.
Thus, at the natural frequency there should be no contemporaneous relationship
between the cause and effect (see also Granger 1988). On the other hand, if
the process is aggregated such that the cause and effect is (partly) observed at
the same time, then the causal relationship implies a contemporary relationship
between the variables.
    It therefore seems useful to link the concept of Granger causality at the natural
frequency with contemporaneous correlation for aggregated processes. Such a
causality concept is provided by the following definition.

DEFINITION 3.1 Let ξt = [xt , yt , zt0 ]0 be an n × 1 vector of time series and
zt is an (n − 2) × 1 subvector. Further, define the information sets as It =
{zt , yt , zt−1 , yt−1 , . . .} and It+ = {ξt , ξt−1 , . . .} = {It , xt , xt−1 , . . .}. Then xt is said
to be a cause of yt with respect to the underlying sampling frequency if

                          E(yt+1 |xt+1 , zt+1 , It+ ) 6= E(yt+1 |zt+1 , It ).

This definition combines traditional Granger causality with instantaneous causal-
ity as used in Lütkepohl (1991, p. 40f), for example. In a vector autoregressive
system, causality according to Definition 3.1 can be tested by running the regres-
sion
                              p                 p                 p
                              X                 X                 X
                       yt =         αi yt−j +         βj xt−j +         γj0 zt−j + ut
                              i=1               j=0               j=0

and testing the hypothesis β0 = β1 = · · · = βp .
    If the process is observed at the natural sampling frequency, then there is no
contemporaneous relationship between xt and yt conditional on zt and the past
of the process. Accordingly, we have β0 = 0 at the natural frequency and our
definition of causality is equivalent to the traditional (Granger) causality. If, on
the other hand, the process is multivariate white noise, then xt is an “instanta-
neous cause” of yt whenever ρ(yt , xt |zt ) 6= 0, where ρ(a, b|c) denotes the partial
correlation between a and b conditional on c.
3.2. ASYMPTOTICS                                                                     105

3.2      Asymptotics
In order to examine the relationship between contemporaneous correlation and
Granger causality in the presence of temporally aggregated data, two different
procedures are considered (e.g. see Lütkepohl 1987). For flow data, time series
values are cumulated (or averaged) at k successive time periods
                                                  k−1
                                                  X
                                           −1/2
                                 ȳt = k                yt−j ,
                                                  j=0


where the factor k −1/2 is introduced to obtain a limiting process with a finite
variance. The aggregated series results from applying skip-sampling of the form

                             ȲN = ȳkN ,     N = 1, 2, . . . .

Stock data are aggregated by directly applying the skip-sampling scheme to the
data, so that YN = ykN for N = 1, 2, . . ..
   It is known (see, e.g., Lütkepohl 1987 and Marcellino 1999) that if the original
process is an ARMA process then the aggregated process also has an ARMA
representation. In general, zero restrictions on the autoregressive representation
of the original process are lost when aggregating the process, so that “spurious
causality” may occur in aggregated time series.
   In order to obtain some general results on causality in aggregated time series
we consider an asymptotic theory for large aggregation intervals k. The following
theorem summarizes the results for stationary variables.

THEOREM 3.1 Let yt be generated by an n dimensional linear process yt =
C0 εt + C1 εt−1 + C2 εt−2 + · · ·, where εt is white noise, C0 = In , E(εt ε0t ) = Ω, and
yt is one-summable such that ∞
                                  P
                                    j=0 j||Cj || < ∞. As k → ∞, the processes for the

aggregated vectors YN and ȲN have the properties:

                     stock variables:
                                     X∞
                                0
              (i)    lim E(YN YN ) =    Cj ΩCj0
                     k→∞
                                       j=0
                                0
             (ii)     lim E(YN YN +j ) = 0         for j ≥ 1,
                     k→∞
106               CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION



                      flow variables:
            (iii)      lim E(ȲN ȲN0 ) = 2πfy (0)
                      k→∞
                                                    ∞ j
                                                                      !            ∞
                                                                                                !0
                                                    X X                            X
            (iv)       lim k · E(ȲN ȲN0 +1 ) =                    Ci Ω                   Ci
                      k→∞
                                                    j=1       i=0                  i=j+1

             (v)       lim k · E(ȲN ȲN0 +j ) = 0        for j ≥ 2,
                      k→∞


where fy (ω) denotes the spectral density matrix of yt at frequency ω.

Proof: (i) From YN = ykN and assuming stationarity we have
                                                             ∞
                                                             X
                           E(YN YN0 ) = E(yt yt0 ) =               Ci ΩCi0 .
                                                             i=0




(ii) Since the process is assumed to be ergodic we have

                       lim E(YN YN0 +j ) = lim E(ykN ykN
                                                      0
                                                         +jk ) = 0
                      k→∞                     k→∞


for all j ≥ 1.

(iii) The vector of aggregated flow variables is given by

                                                    k−1
                                                    X
                                             −1/2
                                   ȲN = k                ykN −j
                                                    j=0


and therefore ȲN behaves as a (normalized) vector partial sum. For partial sums
it is known that
                               lim E(ȲN ȲN0 ) = Ω + Γ + Γ0 ,
                              k→∞
            ∞
                        0
            P
where Γ =         E(y1 y1+j ). In the frequency domain this expression can be repre-
            j=1
sented as
                                          ∞
                                                     !         ∞
                                                                           !
                                          X                    X
                           2πfy (0) =           Cj       Ω           Cj0       .
                                          j=0                  j=0
3.2. ASYMPTOTICS                                                               107

(iv) Let

                       k 1/2 ȲN = (1 + L + L2 + Lk−1 )C(L)εt
                                 ≡ D(L)εt ,

where
                           D(L) = Im + D1 L + D2 L2 + · · ·

and
                                         min(j,k−1)
                                            X
                                  Dj =                  Cj−i .
                                             i=0

   It is convenient to decompose ȲN as

           k 1/2 ȲN = D0 εt + Dk εt−k + D2k εt−2k + · · ·
                        +D1 εt−1 + Dk+1 εt−k−1 + D2k+1 εt−2k−1 + · · ·
                        ..
                         .
                        +Dk−1 εt−k+1 + D2k−1 εt−2k+1 + D3k−1 εt−3k+1 + · · ·
                    ≡ u0t + · · · + uk−1,t ,

where
                           ujt = Dj εt−j + Dj+k εt−j−k + · · ·

Note that E(uit u0jt ) = 0 for i 6= j.
   From

                          k 1/2 ȲN = u0t + · · · + uk−1,t
                        k 1/2 ȲN +1 = u0,t+k + · · · + uk−1,t+k
                        k 1/2 ȲN +2 = u0,t+2k + · · · + uk−1,t+2k

we obtain:
                                                  k−1
                                                  X
                          k · E(ȲN ȲN0 +1 ) =         E(ujt u0j,t+k ).
                                                  j=0

Consider
                                                        0
                       E(u0t u00,t+k ) = D0 ΩDk0 + Dk ΩD2k + ···.
108                CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION

For a summable sequence Ci we have

                    lim |D2k | = lim |Ck+1 + Ck+2 + · · · + C2k | = 0
                    k→∞           k→∞

so that

                    lim E(u0t u00,t+k ) = D0 ΩDk0
                    k→∞
                                           = Ω(C1 + C2 + · · · + Ck )0 .

Similarly we get:

            lim E(u1t u01,t+k ) = D1 ΩDk+1
                                       0
            k→∞
                                = (In + C1 )Ω(C2 + C3 + · · · + Ck+1 )0
      lim E(uk−1,t u0k−1,t−k ) = (C1 + · · · + Ck−1 )Ω(Ck + Ck+1 + · · · + C2k−1 )0 .
      k→∞

Adding these expressions gives the desired result.
                            ∞ P j         ∞
                                              Ci )0 is bounded.
                           P             P
  It remains to show that     ( Ci )Ω(
                                j=0 i=0            i=j+1
   This follows from
             ∞ j                                         j
                          !       ∞
                                               !       ∞                    ∞
             X X                  X                    X X                  X
                         Ci Ω            Ci0       ≤               Ci kΩk           j kCi k ,
             j=0   i=0           i=j+1                 j=0   i=0            i=j+1

which is finite by assumption.

Consider
                    E(u0t u00,t−pk ) = D0 ΩDpk
                                            0
                                               + Dk ΩD(p+1)k + · · · .

Since
                    lim D(p+j)k = 0            for p ≥ 2 and j = 0, 1, . . .
                    k→∞

it follows that the autocovariances disappear for p ≥ 2. 

   According to Theorem 3.1, it turns out that for k → ∞, the aggregated
processes are asymptotically white noise. Of course this result is not particularly
surprising, since it is intuitively plausible that with increasing sampling interval,
short run dynamics disappear. Furthermore, for moderate k it is expected that
aggregated flow variables are well approximated by a vector MA(1) process. The
3.2. ASYMPTOTICS                                                                        109

reason for this is that according to (iv), the first order autocorrelation is O(k −1 ),
while (v) implies that higher order autocorrelations are o(k −1 ).
   Next, assume that yt is a vector of integrated variables such that yt is difference
stationary.

THEOREM 3.2 Let ∆yt be generated by an n dimensional linear process ∆yt =
εt + C1 εt−1 + C2 εt−2 + · · ·, where it is assumed that E(εt ε0t ) = Ω, ∞
                                                                        P
                                                                         j=1 j||Cj || < ∞
                         P∞
and the matrix C̄ =           j=0 Cj has full rank. As k → ∞, the processes for the

aggregated vectors YN and ȲN are characterized by:

                  stock variables:
                      1
           (i)     lim E(YN − YN −1 )(YN − YN −1 )0 = 2πf∆y (0)
                  k→∞ k
                      1
          (ii)     lim E(YN − YN −1 )(YN +j − YN +j−1 )0 = 0 for j ≥ 1,
                  k→∞ k



                  flow variables:
                       1                                     4π
         (iii)     lim 2 E(ȲN − ȲN −1 )(ȲN0 − ȲN −1 )0 =    f∆y (0)
                  k→∞ k                                       3
                       1                                     π
         (iv)      lim 2 E(ȲN − ȲN −1 )(ȲN +1 − ȲN )0 = f∆y (0)
                  k→∞ k                                      3
                       1
          (v)      lim    E(ȲN − ȲN −1 )(ȲN +j − YN +j−1 )0 = 0 for j ≥ 2,
                  k→∞ k 2

where f∆y (ω) denotes the spectral density matrix of ∆yt at frequency ω.

Proof: The difference
                                                    k
                                                    X
                    YN − YN −1 = ykN − ykN −k =            ∆y(k−1)N +i
                                                     i=1

is a partial sums process with asymptotic covariance matrix

                 lim k −1 E(YN − YN −1 )(YN − YN −1 )0 = Ω + Γ + Γ0
                 k→∞
                                                           = 2πf∆y (0) .
                                     k
                                     P                     2k
                                                           P
(ii) Define the partial sum S1 =           ui and S2 =           ui , where ut is stationary
                                     i=1                 i=k+1
with covariance function Γj . The covariance between S1 and S2 is given by

         E(S1 S20 ) = Γ1 + 2Γ2 + · · · + kΓk + (k − 1)Γk+1 + · · · + Γ2k−1 .
110              CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION
      P∞
For      j=1 j||Γj || < ∞ we have

                                                    ∞
                                                    X
                          ||E(S1 S20 )||   < ||         jΓj ||
                                                j=1
                                               ∞
                                               X
                                           ≤          j||Γj || < ∞
                                                j=1

and, thus, by letting S1 = YN − YN −1 and S2 = YN +1 − YN it follows that
E(YN − YN −1 )(YN +1 − YN ) is O(1). A similar result is obtained for higher or-
der autocovariances.

(iii) Let

 k(ȲN − ȲN −1 ) = ykN − ykN −k + ykN −1 − ykN −k−1 + · · · + ykN −k+1 − ykN −2k+1
                   = Sk (L)∆ykN + Sk (L)∆ykN −1 + · · · + Sk (L)∆ykN −k+1
                   = Sk (L)2 ∆ykN ,

where
                           Sk (L) = 1 + L + L2 + · · · + Lk−1

and

          Sk (L)2 = 1 + 2L + 3L2 + · · · + kLk−1 + (k − 1)Lk + · · · + L2k−2
                  = w0 + w1 L + w2 L + · · · + w2k−2 L2k−2

is a symmetric filter with triangular weights.
      The covariance matrix is given by
                                                      2k−2
                                                                          !    2k−2
                                                                                                   !
                                                      X                        X
   k · E(ȲN − ȲN −1 )(ȲN − ȲN −1 )0 = E                  wi ∆ykN −i                    0
                                                                                      wi ∆ykN −i
                                                      i=0                       i=0
                                                2k−2        2k−1−|p|
                                                X             X
                                           =                           wi wi+|p| Γp ,
                                               p=−2k+2        i=1

                   0
where Γp = E(∆yt ∆yt−p ).
      Consider the odd values p = ±1, ±3, ±5, . . .. We have
                         2k−1−|p|                   k−(|p|+1)/2
                           X                           X
                                    wi wi+|p| = 2                 i(i + p)
                           i=1                         i=1
3.2. ASYMPTOTICS                                                                                                            111

and as k → ∞
                            k−|(p+1)/2|                  ∞           ∞
                               X                        X           X
                                             2              2
                     lim                  2(i − ip) = 2(   i ) − 2p(   i)
                    k→∞
                               i=1                                       i=1                  i=1
                                                                 2 3
                                                               =   k + O(k 2 ).
                                                                 3
For even values p = 0, ±2, ±4, . . . we have
                    2k−1−|p|                                                  k−|p|/2−1
                      X                                                           X
                                                                   2
                               wi wi+|p| = (k − |p|/2) + 2                                  i(i + p)
                      i=1                                                         i=1

and, thus,
                                  k−|(p+1)/2|
                                     X                       2
                            lim                  2(i2 − ip) = k 3 + O(k 2 ) .
                           k→∞
                                     i=1
                                                             3
Using these results yields
                                                                    ∞
                                                  0      2 2       X
          E(ȲN − ȲN −1 )(ȲN − ȲN −1 )              =   k [Γ0 +     (Γj + Γ0j )] + o(k 2 )
                                                         3         j=1
                                                               4π 2
                                                       =          k f∆y (0) + o(k 2 ).
                                                                3

(iv) The first order autocovariance matrix is given by
                                                                       2k−2       2k−1−|p|
                                                                       X              X
                                                       0
         k · E(ȲN − ȲN −1 )(ȲN +1 − ȲN )               =                                 wi+k wi+k+|p| Γp
                                                                   p=−2k+2            i=1

                   0
where Γp = E(∆yt ∆yt−p ).
   For an odd value of p we have
       2k−1−|p|                           ∞
         X                                X
 lim              wi+k wi+k+|p| =                (k − i)(i + p) + O(k 2 )
 k→∞
         i=1                               i=1
                                                 ∞
                                                           !        ∞
                                                                                  !                 ∞
                                                                                                                  !
                                                 X                  X                               X
                                     = k               i       −             i2       + k2p − p               i       + O(k 2 )
                                                 i=1                   i=1                              i=1
                                           1 3
                                     =       k + O(k 2 ) .
                                           6
It follows that
                                                                      ∞
                                                                                                    !
                                                         1 2         X
         E(ȲN − ȲN −1 )(ȲN +1 − ȲN )0              =   k Γ0 +        Γj + Γ0j                       + o(k 2 )
                                                         6           j=1
                                                         π 2
                                                       =   k f∆y (0) + o(k 2 ).
                                                         3
112            CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION

(v) To simplify the proof we assume that the degree of the polynomial C(L) =
I + C1 L + · · · + Cq Lq is finite, that is, ∆yt has a vector MA(q) representation
with q < k. Since k → ∞ the proof is valid for q → ∞, as well. Of course, the
assumption q < k imposes the restriction that q does not grow at a faster rate
than k.
   The second order autocovariance matrix is given by
                                                   2k−2
                                                                         !      2k−2
                                                                                                        !
                                                   X                            X
k · E(ȲN − ȲN −1 )(ȲN +2 − ȲN +1 )0 = E               wi ∆ykN −i                         0
                                                                                        wi ∆ykN +2k−i
                                                   i=0                          i=0
                                               |p|
                                             k X
                                             X
                                      =                  wi w2k−i−|p|+1 (Γp + Γ0p ) .
                                             p=1 i=1

There exists a constant c < ∞ such that for all p
                    |p|                      p
                    X                        X
                          wi w2k−i−|p|+1 =         i(p − i + 1) < cp3 .
                    i=1                      i=1

Thus, it follows that
                  |p|
                k X                                           k
                X                                             X
                          wi w2k−i−|p|+1 |Γp + Γ0p | <              2cp3 |Γp |
                p=1 i=1                                       p=1
                                                                        k
                                                                        X
                                                                    2
                                                          < 2ck               p|Γp |,
                                                                        p=1
                                     Pk
where we have used p < k. From           p=1 p|Γp | < ∞ it finally follows that

                       1
                    lim    E(ȲN − ȲN −1 )(ȲN +2 − YN +1 )0 = 0 .
                   k→∞ k 2

Similarly it can be shown that the higher order autocorrelations converge to zero
as well. 

   From Theorem 3.2 it follows that as k tends to infinity, the vector of aggregated
flow variables has the vector MA(1) representation:
                                                             √
                     k −1 (ȲN − ȲN −1 ) = UN + (2 −            3)UN −1 ,                         (3.2)

where
                                               2π
                          E(UN UN0 ) =            √ f∆y (0) .
                                         1 + (2 − 3)2
3.2. ASYMPTOTICS                                                                    113

Note that for the special case where n = 1 (a single time series), our results
correspond to the result of Working (1960) who shows that the first order auto-
correlation of the increments from an aggregated random walk is 0.25.

   The asymptotic results of Theorems 3.1 and 3.2 imply that for difference sta-
tionary stock variables as well as for stationary and difference stationary flow
variables the contemporaneous relationship of the limiting process reflects the
causal relationship at frequency zero in the sense of Geweke (1986) and Granger
and Lin (1995).

   It is interesting to consider the case that yt is cointegrated. To discuss the
effects of aggregating a set of cointegrated variables it is useful to define the ma-
trix Q = [β, β⊥ ]0 , where β is an n × r matrix of cointegration vectors such that
zt = β 0 yt is stationary. The matrix β⊥ is a n × (n − r) orthogonal complement of
β. The linear combinations wt = β⊥0 yt are assumed to be I(1). From Theorem 3.2
(iii) it follows that Z̄N − Z̄N −1 is Op (1) whereas W̄N − W̄N −1 is Op (k 1/2 ). Hence,
as the aggregation interval k tends to infinity, the variance of the “nonstation-
ary linear combinations” dominates the variance of the “error correction terms”.
Consequently,

                                                       "                  #
                1                         1                Z̄N − Z̄N −1
                     (ȲN − ȲN −1 ) =           Q−1
             k 3/2                       k 3/2             W̄N − W̄N −1
                                          1
                                    =            Q−1                       −1
                                                  2 (W̄N − W̄N −1 ) + Op (k )
                                         k 3/2


where Q−1                                   −1
       2 is the lower n × (n − r) block of Q . This implies that the differences

of ȲN possess a singular distribution as k tends to infinity. It is important to note
that the limiting processes of the aggregated variables have a singular spectral
density matrix for all frequencies 0 ≤ ω ≤ π, while the spectral density matrix of
yt is singular at ω = 0 only. In other words, the limiting behavior of the aggregated
time series is dominated by the stochastic trends and, thus, the standardized
variance of the error correction terms tends to zero. Since this does not seem
to be a relevant feature of observed time series, the aggregation of cointegrated
variables is excluded from the subsequent considerations.
114               CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION

3.3      Contemporaneous causality
Using the causality definition given in Section 4.2, I am able to consider the
relationship between Granger causality at the natural frequency (k = 1) and con-
temporaneous causality in the limiting process (k → ∞). As mentioned above,
this comparison is of interest as it is unlikely that any given vector of time series
will be observed with a time scale which allows an unambiguous ordering of cause
and effect in time. Thus, it is helpful to know in which situation contempora-
neous causality corresponds to Granger causality and whether it is possible that
“spurious causality” results from the aggregation process.
   Spurious causality between two variables xt and yt occurs when the variables
do not possess a causal relationship at the natural frequency but for the aggregated
variables we find ρ(XN , YN |ZN ) 6= 0. In this case, the causality in the aggregated
process is obviously due to the aggregation procedure. For the practical appli-
cation of a concept of causality it is therefore important to have conditions that
rules out such kind of spurious causality. The following theorem gives sufficient
conditions for non-causality between two aggregated variables.

THEOREM 3.3 Let ξt = [xt , yt , zt0 ]0 , where zt is a (n − 2) × 1 vector. Assume
that either:

          (i)      ξt is a vector of stationary flow variables, or
          (ii)     ξt is a vector of difference stationary flow variables, or
          (iii)    ξt is a vector of difference stationary stock variables.

If there is no Granger causality between xt and yt and

               (a) xt →
                      / zj,t or (b) yt →
                                       / zj,t for all j = 1, . . . , n − 2,

where zj,t is the j 0 th element of zt , then, as k → ∞, we have for the partial
correlations of the aggregated variables that:

                        for case (i)    ρ(X̄N , ȲN |Z̄N ) = 0
                       for case (ii)    ρ(∆X̄N , ∆ȲN |∆Z̄N ) = 0
                      for case (iii)    ρ(∆XN , ∆YN |∆ZN ) = 0 .
3.3. CONTEMPORANEOUS CAUSALITY                                                  115

Proof: For convenience, we confine ourselves to a trivariate VAR(p) process.
The proof can easily be generalized to systems with n > 3.
   First consider a VAR process obeying the conditions:

                                           xt →
                                              / yt
                                           yt →
                                              / xt
                                      (a) xt →
                                             / zt ,

that is, there is no causality between y1,t and y2,t and condition (a) is satisfied.
From the Theorems 3.1 and 3.2 we know that the limiting processes for the cases
(i) – (iii) are white noise with a covariance matrix proportional to the spectral
density matrix of the original process. Thus, the limiting process for case (i), for
example, has a representation of the form:
                                                    
                                   −1   X̄N       U1,N
                           ∞
                                 !
                          X                         
                              Cj       ȲN  =  U2,N 
                                                    
                          j=0
                                        Z̄N       U3,N

where E(UN UN0 ) = Ω. A similar representation exists for the cases (ii) and (iii).
We therefore confine ourselves to case (i). The proof for case (ii) and (iii) is
straightforward.
   Since we assume that the MA representation is invertible there exists an au-
toregressive representation with autoregressive polynomial
                                                 ∞
                                                          !−1
                                                 X
                     In − A1 L − A2 L2 − · · · =    Cj Lj
                                                           j=0

and thus the limiting process can be written as
                                                 
                          X̄N          X̄N       U1,N
                                                 
                         ȲN  = Ā  ȲN  +  U2,N  ,
                                                 
                          Z̄N          Z̄N       U3,N
where                                                              
                                               ā11    0     ā13
                                ∞
                                X                                
                         Ā =         Aj = 
                                            0        ā22   ā23 
                                                                  .
                                j=1
                                                0     ā32   ā33
116               CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION

The zero restrictions in the matrix Ā result from the assumptions on the causal
relationship between the variables. Accordingly, we find

                              (1 − ā11 )X̄N = ā13 Z̄N + U1,N

Since ρ(ȲN , Z̄N |Z̄N ) = 0 and ρ(ȲN , U3,N |Z̄N ) = 0 it immediately follows that
ρ(X̄N , ȲN |Z̄N ) = 0.
     Second, consider the condition (b) yt →
                                           / zt instead of (a) xt →
                                                                  / zt . In this case
the limiting process can be represented as
                                                      
                   X̄N        ā11 0      0     X̄N     U1,N
                                                      
                  ȲN  =  0 ā22 ā23   ȲN  +  U2,N 
                                                      
                    Z̄N       ā31 ā32 ā33    Z̄N     U3,N

This gives:

                             (1 − ā22 )ȲN = ā23 ZN + U2,N
                          (1 − ā22 )X̄N YN = ā23 XN ZN + XN U2,N

Since ρ(X̄N , Z̄N |Z̄N ) = 0 and ρ(X̄N , U2,N |Z̄N ) = 0 it follows that ρ(X̄N , ȲN |Z̄N ) =
0.
     To generalize the proof to the case k > 3, we let Z̄N be a (n − 2)-dimensional
vector. The reasoning of the proof applies to this case in a straightforward manner.


     Theorem 3.3 gives sufficient conditions for ruling out spurious contempora-
neous causality. If conditions (a) or (b) are violated it may be the case that
there is contemporaneous causality between aggregated variables, although there
is no Granger causality at the original time scale. This is the case of spurious
contemporaneous causality.
     Necessary and sufficient conditions for ruling out spurious contemporaneous
causality in aggregated time series can be derived from the relationship between
the original process at k = 1 and the limiting process for k → ∞. Unfortunately,
such conditions are nonlinear and depend on the precise parameter values of the
process describing yt . Since these parameter values are usually unknown and
3.3. CONTEMPORANEOUS CAUSALITY                                                      117

cannot be estimated without observing the process at its natural frequency, the
practical value of the necessary and sufficient conditions is quite limited.
   If xt → yt and yt → xt we say that there is feedback causality between xt and
yt . An important consequence of Theorem 3.3 can be derived for the case that
there is no feedback causality among the variables.

COROLLARY 3.1 For the cases (i) – (iii) of Theorem 3.3 and under the as-
sumption that there is no feedback causality among the variables it follows that,
as k → ∞, there is no spurious causality among the aggregated variables of the
system.

Whenever there is no feedback Granger causality, the variables of the system can
be arranged such that one of the conditions (a) and (b) in Theorem 3.3 is satisfied.
This rules out the case of spurious contemporary causality.
   Another (less trivial) consequence of Theorem 3.3 can be derived for a trivari-
ate system. Following Dufour and Renault (1998, Definition 2.2) and Lütkepohl
and Burda (1997) we say that xt does not cause yt at horizon h if

                              E(yt+h |It ) = E(yt+h |It+ ),                        (3.3)

where It and It+ are the same information sets as in (3.1). Obviously, the usual
definition of Granger causality given in (3.1) is a special case with h = 1. If xt
does not cause yt at any horizon we write xt →
                                             / ∞ yt . For a trivariate system the
following result holds.

COROLLARY 3.2 Let ξt = [xt , yt , zt ]0 be a stationary or the differences of a
difference stationary 3×1 vector with an invertible MA representation. If yt →
                                                                             / ∞ zt
and (i) – (iii) of Theorem 3.3 hold, then as k → ∞, there is no spurious causality
among the aggregated counterparts.

Proof: Consider the AR representation of the system

                          ξt = A1 ξt−1 + A2 ξt−2 + · · · + εt .

Causality at horizon h can be deduced from the conditional expectation
                                      (h)         (h)             (h)
          E(ξt |ξt−h , ξt−h−1 , . . .) = π1 ξt−h + π2 ξt−h−1 + π3 ξt−h−2 + · · ·
118             CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION

                       (h)
where the matrices πj        are given in Dufour and Renault (1998). Non-causality
between xt and yt at horizon h implies

                                 (h)
                             e02 πj e1 = 0    for j = 1, 2, . . . ,

                                                                          (h)
where ei is the i’th column of the 3×3 identity matrix. The matrix π1 is identical
to the matrix Bh in the moving average representation

                             ξt = εt + B1 εt−1 + B2 εt−2 + · · ·

Thus, noncausality at all horizons implies

                              e0i Bh ej = 0   for h = 1, 2, . . .                  (3.4)

Assuming stationary flow variables it follows from Theorem 3.1 that the limiting
process can be represented as (I3 − Ā)ȲN = UN . Non-causality of the form yt →
                                                                               / zt
at h = 1 implies that the (3, 1) elements of the matrices Ak , k = 1, 2, . . . are zero.
Accordingly, the limiting distribution can be represented as

                      (1 − ā11 )X̄N = ā12 ȲN + ā13 Z̄N + U1,N                  (3.5)
                      (1 − ā22 )ȲN = ā21 X̄N + ā23 Z̄N + U2,N                  (3.6)
                      (1 − ā33 )Z̄N = ā31 X̄N + U3,N                             (3.7)
                                                             P
where āij denotes the (i, j) element of the matrix Ā =         Ak . From the MA
representation we get (I − Ā)−1 = (I − B̄), where B̄ = Bk . From (3.4) it follows
                                                        P

            / ∞ zt we have b̄32 = 0. Thus, the representation ξ¯N = (I3 − Ā)−1 UN =
that for yt →
(I3 − B̄)UN gives rise to the equation

                             Z̄N = −b̄31 U1,N + (1 − b̄33 )U3,N .

Solving this equation for U3,N and inserting in (3.7) gives

                                  X̄N = c1 Z̄N + c2 U1,N ,                         (3.8)

where c1 and c2 are functions of ā31 , ā33 , b̄31 and b̄33 . Comparing (3.8) with (3.5)
shows that ā12 must be zero and, thus, implies the same restriction for the limiting
process as the assumption that yt does not cause xt . From Theorem 3.3 it follows
3.3. CONTEMPORANEOUS CAUSALITY                                                      119

that in this case there is no spurious contemporaneous causality between ȲN and
Z̄N .
    The proofs for the cases (i) and (iii) are essentially the same. 

This result is intuitively plausible because the assumption of no causality at any
horizon rules out indirect causal effects via the remaining variable zt . Accordingly,
for xt → yt we must rule out that xt causes zt at longer lag horizons h, since
otherwise yt may be used to predict zt+h via xt+j , where 0 < j < h. Unfortunately,
I was not able to generalize this result to higher dimensional systems with n > 3.
    In order to illustrate the results in this section, it is useful to construct some
examples based on a trivariate VAR(1) model for yt , where all innovation terms
represent mutually uncorrelated white noise processes.

Example A: Assume that ξt = [xt , yt , zt ] is stationary and has a causal structure
given by xt → yt and yt → zt . In particular, assume a VAR(1) representation of
the form

                                  xt = ε1,t
                                  yt = axt−1 + ε2,t
                                  zt = byt−1 + ε3,t .

Since xt →
         / zt and zt →
                     / yt , it follows from Theorem 3.3 that ρ(X̄N , Z̄N |ȲN ) = 0, and
that there is no contemporaneous causality between X̄N and Z̄N . Furthermore,
there is no feedback causality among the variable, so that the result immediately
follows from the Corollary 3.1.

Example B: Assume that a vector of flow variables is generated by a stationary
process given by:

                             xt = ayt−1 + bzt−1 + ε1,t
                             yt = ε2,t
                             zt = ε3,t .

Applying Granger’s concept of causality, there is no causality between yt and zt .
Further, a simple calculation shows that for the limiting process, ρ(ȲN , Z̄N |X̄N ) =
120             CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION

−ab/(a2 + a2 + 1). Thus, a necessary and sufficient condition for the aggregated
variables ȲN and Z̄N to have no contemporaneous causal relationship is that either
a or b, or both parameters are equal to zero. This result is also an immediate
consequence from Theorem 3.3, which states that there is no contemporaneous
causality if either yt or zt is not Granger causal for xt .

Example C: To illustrate the problems with aggregated stock variables which
are discussed above, consider the stationary process given by:

                                 xt = ε1,t
                                 yt = axt−1 + ε2,t
                                 zt = byt−1 + ε3,t .

In this system, xt → yt and yt → zt . For k ≥ 3 the aggregated process becomes
white noise with:

                               XN = U1,N
                               YN = U2,N
                               ZN = abXN + U3,N .

For ab 6= 0 there exists spurious contemporaneous causality between XN and
ZN , as there is no Granger causality between xt and zt . Stated another way, the
indirect causal relationship between xt and zt via yt becomes a direct causal link
under aggregation. See also Lütkepohl and Burda (1997).



3.4      Monte Carlo experiments
In this section, the asymptotic implications of Theorem 3.3 and Corollary 3.1
are examined via a simple Monte Carlo experiment. In particular, the following
VAR(1) model is considered:
                 d               d                 
                  ∆ xt       a 0 0     ∆ xt−1        ε1,t
                 d                                 
                 ∆ yt  =  b a 0   ∆d yt−1  +  ε2,t  ,                 (3.9)
                                                   
                   d                    d
                  ∆ zt       0 b a     ∆ zt−1        ε3,t
3.4. MONTE CARLO EXPERIMENTS                                                           121

where d ∈ {0, 1} and εi,t is an i.i.d. vector of standard normal random variables.
For b 6= 0, the Granger causal structure of this system is: xt → yt and yt → zt .
From Theorem 3.3 and Corollary 3.1 it follows that as k → ∞, the limiting process
has a partial correlation structure such that E(u1,N u3,N |u2,N ) = 0 and all other
partial correlations are nonzero, where the uj,N (j = 1, 2, 3) denote the innovations
from an estimated VAR[4] model using data generated according to (3.9) and
aggregated appropriately. Swanson and Granger henceforth: SG (1997) propose
tests for assessing whether the above partial correlation restriction holds which
are based on Fisher’s z-statistics or alternatively on t-statistics from regressions
involving the residuals. Here we use the Fisher’s z-statistic.
       Empirical sizes corresponding to 5% nominal size tests and for various param-
eterizations of the VAR are reported in Tables 4.1. Note also that results are
reported for stationary stock variables, which are not treated in Theorem 3.3. In
all experiments, b is set equal to 0.5, as results were found not to be sensitive
to the choice of b. The parameter a is set equal to {0.0, 0.2, 0.4, 0.6, 0.8}. Not
surprisingly, the magnitude of the parameter a is crucial when k is small, as a
determines the roots of the autoregressive polynomial in our model. Thus, our
asymptotic results may be a poor guide to finite sample behavior for small k and
|a| close to unity.1 All entries in the Table 4.1 are based on 10,000 Monte Carlo
replications, and all estimations use 100 observations of appropriately aggregated
data.
       Tables 4.1a-c contain results for cases (i) – (iii) in 3.3. Interestingly, the
empirical sizes approach the nominal size quite quickly when k increases, for small
and moderately sized values of a. For a = 0.8, however, the SG test is upwards
biased, even for relatively large values of k.
       Table 4.1d reports results for stationary stock variables, for which Theorem
3.3 does not apply. For a = 0, however, note that An = 0 for n ≥ 3, and thus the
covariance matrix of the limiting process is Ω + AΩA0 + A2 Ω(A2 )0 (see Theorem

   1
       Recall also that the aggregated processes which we construct are VARMA processes, in
general. Thus, lower order VAR approximations may not yield good estimates of the errors of
the process.
122            CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION

              Table 4.1: Empirical size of the SG test procedure
                        a) Stationary flow variables (case (i))
       k        a=0           a=0.2         a=0.4         a=0.6          a=0.8
       2        0.10           0.10          0.11          0.11         0.11
       5        0.07           0.08          0.16          0.33         0.61
      10        0.07           0.07          0.10          0.35         0.95
      20        0.07           0.07          0.08          0.19         0.98
      50        0.07           0.07          0.07          0.09         0.80
      100       0.07           0.07          0.07          0.07         0.47
                b) Difference stationary flow variables (case (ii))
       k        a=0           a=0.2         a=0.4         a=0.6          a=0.8
       2        0.11           0.11          0.11          0.11         0.11
       5        0.08           0.10          0.17          0.34         0.61
      10        0.07           0.07          0.10          0.31         0.93
      20        0.07           0.07          0.07          0.14         0.95
      50        0.07           0.07          0.07          0.07         0.53
      100       0.07           0.07          0.07          0.07         0.17

                       c) Stationary stock variables (case (iii))
       k        a=0           a=0.2         a=0.4         a=0.6          a=0.8
       2        0.10           0.11          0.11          0.11         0.11
       5        0.07           0.09          0.16          0.33         0.61
      10        0.07           0.07          0.10          0.35         0.95
      20        0.07           0.07          0.08          0.19         0.98
      50        0.07           0.07          0.07          0.09         0.80
      100       0.07           0.07          0.07          0.07         0.47
                       d) Difference stationary flow variables
       k        a=0           a=0.2         a=0.4         a=0.6          a=0.8
       2        0.07           0.07          0.07          0.07         0.11
       5        0.07           0.07          0.07          0.09         0.26
      10        0.07           0.07          0.07          0.10         0.52
      20        0.07           0.07          0.07          0.10         0.66
      50        0.07           0.07          0.07          0.10         0.66
      100       0.07           0.07          0.07          0.10         0.66
      Notes: Entries correspond to the frequency of times that the correct con-
      temporaneous causal structure is uncovered, based on empirical procedure
      given in SG (1997). Results are based on estimations using 100 observa-
      tions of data generated according to (3.9), and aggregated according to
      the aggregation interval, k. All entries are based on 10,000 Monte Carlo
      replications.
3.5. AGGREGATION OF SVAR MODELS                                                   123

3.1 (i)), which is a diagonal matrix in this special case. Therefore, all partial
correlations are zero, and spurious contemporaneous correlation should not arise
for a = 0. This is the reason why the empirical size of the SG test is still close
to the nominal size when stationary stock variables, as long as a is close to zero.
In contrast, for a substantially different from zero, partial correlations need not
die out as k increases. Indeed, from Table 4.1 it is seen that the empirical sizes
are far from the nominal size for large values of a(i.e. when a = 0.8 and k = 100
empirical size is 0.66).



3.5      Aggregation of SVAR models
The asymptotic results of Section 4.3 can be used to analyse the (asymptotic)
effects of the aggregation procedure on the estimated structural model. Assume
that at some (“natural”) sampling frequency the process can be represented as a
stationary VAR[p] model with

                                      Bεt = Rut .

The vector ut represents the structural shocks, where it is assumed that Ω =
E(ut u0t ) is a diagonal matrix. We therefore have E(εt ε0t ) = Σ = B −1 RΩR0 B 0 −1 .
From Theorem 3.1 it follows that for k → ∞ the covariance matrix of the aggre-
gated process is given by

                  0
            E(yN yN ) = (I − A1 − · · · − Ap )−1 Σ(I − A01 − · · · − A0p )−1

and, thus, the corresponding structural model is

                           (I − A1 − · · · − Ap )−1 BεN = RuN .

In general, the aggregation of the data therefore may have a substantial effect on
the structural model and may even change the sign of the structural parameter.
   To assess the effect of temporal aggregation in practice, a simple example is
considered. Let Ut and πt denote the unemployment rate and the yearly inflation
rate of the US, which is observed on a monthly basis from 1960 (i) to 1998 (xii).
124            CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION




Figure 3.1: Impulse responses at different aggregation intervals.
                            Neoclassical specification

 solid line: supply shock             dashed line: demand shock
3.5. AGGREGATION OF SVAR MODELS                                                              125

Two different specifications are considered. One is the neoclassical version of
the Phillips curve (cf. Dolado et al. 1999). This model employs a triangular
identification given by

                                     εUt = ust
                                     επt = r12 ust + udt ,

where εUt , επt are the residuals from an estimated VAR[15] model with a constant
mean, which is suggested by the AIC criterion. The supply shock is denoted by
ust and udt denotes the demand shock. The notion behind this specification is that
in a (neo)classical framework, monetary shocks should not affect real variables.
       The estimated impulse response functions for this model are depicted in Figure
4.1. Both shocks have a positive short run effect on the unemployment rate so
that these shocks represent an unfavourable change in supply or demand. The
supply shock has a negative effect on the inflation rate at 1–3 years.2 Since we are
interested in the effect of temporal aggregation we do not give a detailed discussion
of the economic implications (see Dolado et al. (1999) for a detailed discussion of
alternative specifications).
       If the data is aggregated by computing the averages3 of k time periods, we
find that for a quarterly sample frequency (k = 3) the estimated model yields
qualitatively similar results. There is again a peak at 1 year in the impulse
response of the unemployment rate with respect to a supply shock. Similarly
the minimum of the impulse response of inflation following a demand shock is
a little less than 2 years for k = 1 and k = 3. Therefore, the general shape of
the impulse response functions does not change a lot when aggregating monthly
data to a quarterly interval. Similar conclusions can be drawn be aggregating the
   2
       It is not the intention to draw economic conclusions from this example. Therefore, no
confidence intervals are presented. Furthermore, temporal aggregation reduces the number of
observations so that it is difficult to compare the confidence intervals for different k.
   3
     The reader may notice that the unemployment rate is not a flow variable but a stock variable.
However, since in the theoretical work I did not consider models that mix stock and flow data,
I assume that both variables are flow data. In fact, official agencies also report the average
unemployment rate within a month (quarter).
126            CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION




Figure 3.2: Impulse responses at different aggregation intervals.
                            Monetarist specification

 solid line: supply shock             dashed line: demand shock
3.5. AGGREGATION OF SVAR MODELS                                                 127

data further to a bi-anual sample interval. Again the maximum and minimum
of the impulse response functions occur at roughly the same time but the size of
the impulse responses seems to be affected to a greater extent. For example, the
minimum in the impulse responses of the inflation rate with respect to supply
shocks is −12 for k = 3 but −7 for k = 6. The maximum response of the
unemployment rate following a supply shock is roughly 8 for k = 3 and only 4
for k = 6. Therefore, it seems that the aggregation of the data “smoothes” the
unemployment rate.
   In order to check whether the conclusion is a result of the particular neoclas-
sical specification, we repeat the experiment by using a monetarist identification
scheme. In this specification it is assumed that the monetary (demand) shock may
affect the unemployment rate at a short horizon but this effect dies out with an
increasing lag horizon. That is, we impose the long run restriction as in Blanchard
and Quah (1989). The estimated impulse responses are depicted in Figure 4.2.
It is seen that this identification scheme yields quite different impulse responses.
Again we do not discuss the economic implications of this estimate but focus on
the effect of temporal aggregation.
   It turns out that the general shape of the impulse response functions is com-
patible for the different aggregation intervals. In particular the relative maxima
and minima of the impulse response functions occur at roughly the same time.
However, the magnitude of the effects becomes less important for higher aggrega-
tion intervals. For example, the long run effect of supply shocks is 0.30 for k = 1
but 0.15 for k = 3 and 0.10 for k = 6. Similarly, the maximum of the impulse
response of inflation with respect to a supply shock is 0.36 at a monthly basis but
0.75 for quarterly data and 1.0 for the bi-anual aggregation interval.
   Our experiment suggests that temporal aggregation may have an important
effect on the magnitude of the impulse response but seems to have little effect
on the general shape of the impulse response functions. Of course, it remains to
show that this conclusions applies to other applications as well.
128   CHAPTER 3. PROBLEMS OF TEMPORAL AGGREGATION
Chapter 4

Inference in nonlinear models

Since the introduction of the concept of cointegration by Granger (1981) the ana-
lysis of cointegrated models was intensively studied in a linear context, whereas
the work on the extension to nonlinear cointegration is still comparatively lim-
ited. Useful reviews of recent work in the analysis of nonlinear cointegration are
provided by Granger and Teräsvirta (1993), Granger (1995), and Granger, Inoue
and Morin (1997).
   In many cases, economic theory suggests a nonlinear relationship as for the
production function or the Phillips curve, for example. However, theory does not
always provide a precise specification of the functional form so that it is desirable
to have nonparametric tools for estimation and inference.
   Unfortunately, the usual nonparametric techniques based on kernel functions
are not applicable in a nonstationary framework. The reason is that the nonpara-
metric estimate of E(y|x0 ) for some given value x0 is based on neighbourhood
values of x0 , where the kernel function employs a weight function decreasing in
|x − x0 |. If xt is a random walk, then the process drifts away from the initial value
and, thus, the relative number of observations in a neighbourhood [x0 − , x0 + ]
tends to zero. This can be illustrated by considering the number of axis cross-
ings, that is, the number of times xt crosses the zero level. The number of axis
crossings can be seen as a measure of the frequency the process returns to a zero
initial value. For a stationary Gaussian AR(1) process, Kedem (1980) shows that

                                         129
130                    CHAPTER 4. INFERENCE IN NONLINEAR MODELS

the probability of axis crossings is



                                                1 1
                     Prob(xt < 0|xt−1 > 0) =     − sin−1 ρ ,
                                                2 π



where ρ denotes the first order autocorrelation of xt . Note that if ρ approaches
one, then this probability tends to zero. Indeed, for a random walk process Bur-
ridge and Guerre (1996) show that the probability of an axis crossing tends to
zero with T −1/2 . Similarly, it can be shown that for a random walk the relative
number of observations in the interval [x0 − , x0 + ] tends to zero with T −1/2 and
asymptotically does not depend on the value x0 (cf. Burridge and Guerre 1996).
Therefore, the asymptotic theory for kernel estimates is not applicable in the case
of nonstationary variables.

   Alternatively, Granger and Hallman (1991a, 1991b) and Breitung and Gourié-
roux (1997) suggest using the rank transformation. It is well known that the
ranks of the observations are invariant under monotonic transformations of the
data. Thus, statistics based on the ranks of the observations do not depend on
(monotonous) nonlinear functions of the data. To motivate the test procedure I
first show in Section 5.1 that linear cointegration tests may have a poor power
against nonlinear cointegration relationships. In Section 5.2 this idea is adopted
to test for nonlinear cointegration. Furthermore, the rank transformation is used
to decide whether the cointegration relationship is linear or nonlinear (Section
5.3).

   An alternative strand of literature was initiated by Bierens (1997a,b) and
Vogelsang (1998a,b). These papers allow for unknown nonlinearity in the short
run dynamics of the process. Accordingly, such tests are well suited to test for
cointegrated models with a nonlinear adjustment process. In Section 5.4 a new test
procedure is suggested. The small sample properties of the test are considered in
Section 5.5. Furthermore, the test procedures are applied to investigate the term
structure of interest rates and the relationship between German dual-class shares.
4.1. INCONSISTENCY OF LINEAR COINTEGRATION TESTS   131
132                     CHAPTER 4. INFERENCE IN NONLINEAR MODELS

4.1      Inconsistency of linear cointegration tests
To illustrate the problems of applying linear cointegration tests to a nonlinear
relationship, it is helpful to consider a simple example. Let xt be a nonlinear
                                t
random walk given by x3t =        vj , where {vt }T1 is a white noise sequence with
                               P
                               j=1
            2
vt ∼ N (0, σv ). Furthermore, yt is given by

                                    yt = x3t + ut ,                              (4.1)

where ut is white noise with ut ∼ N (0, σu2 ). Figure 5.1 presents a realization of the
sequences xt and yt , where σv2 = σu2 = 0.01. The sample size is T = 200. Appar-
ently, there is a fairly strong comovement between both series suggesting a stable
long run relationship. However, applying an augmented Dickey-Fuller test (with
four lagged differences and a constant), the value of the t-statistic is −2.77, which
is insignificant with respect to the 0.05 significance level. In fact, the residuals of
the linear cointegration regression (see Figure 5.2) do not look stationary. On the
other hand, if the cointegration regression is based on the underlying nonlinear
relationship, that is, yt is regressed on x3t , the resulting residual series resembles
white noise (see Figure 5.3). Applying the rank tests suggested in Section 5.3
yields significant test statistics with respect to all reasonable significance levels.
This example illustrates that ignoring the nonlinear nature of the cointegration
relationship may lead to the misleading conclusion that there exists no long run
relationship between the series.
   On the other hand, one may argue that there is no problem with a test that
fails to reject in the presence a nonlinear alternative because we are interested
in detecting a linear cointegrating relationship. In many applications, however,
it is not clear whether the variables must be transformed (e.g. to logarithms)
to achieve a linear cointegrating relationship (e.g. Franses and McAleer 1998)
and thus the robustness of the test against such monotonic transformation is a
desirable property of a cointegration test.
   For a theoretical analysis of a nonlinear cointegration relationship, different
concepts are used. Granger and Hallman (1991a) and Granger (1995) consider
time series which are long memory in mean but have a nonlinear relationship
4.1. INCONSISTENCY OF LINEAR COINTEGRATION TESTS                                               133

which is short memory in mean. Corradi (1995) considers “non-strong mixing”
processes (processes with a long memory) and strong mixing processes (short
memory). Here we I adopt the definition of an integrated process due to Phillips
(1987a). The degree of integration is defined as follows:

DEFINITION 4.1 (i) A time series zt is I(0) if, as T → ∞,
                                          [aT ]
                                      1 X
                                     √       zt ⇒ σ̄z W (a) ,
                                       T t=1
                                            T
where σ̄z2 = lim E(T z̄ 2 ), z̄ = T −1
                                            P
                                                  zt , and W (a) represents a standard Brown-
                 T →∞                       t=1
ian motion. (ii) If (1 − B)d zt ∼ I(0), then zt is integrated of order d, denoted as
zt ∼ I(d).

       Different sets of sufficient conditions for zt ∼ I(0) are given in Phillips (1987a),
Gallant and White (1988), and Phillips and Solo (1992), for example. If we assume
that yt is stationary with an invertible MA representation then the usual definition
used in Section 1.3 results. However, since we assume that yt is a nonlinear
process, it may not possess a MA representation and, therefore, the assumption
of a stationary process is overly restrictive within a nonlinear framework (e.g.
Corradi 1995).
       In this section I consider the nonlinear relationship between two real valued
time series {xt }T1 and {yt }T1

                                         yt = f (xt ) + ut ,                                  (4.2)

where yt ∼ I(1) and f (xt ) ∼ I(1). Under the null hypothesis, ut is assumed to be
I(1), whereas under the alternative of nonlinear cointegration, ut ∼ I(0).
       As demonstrated by Granger and Hallman (1991b), the Dickey-Fuller test may
perform poorly when applied to a nonlinear transformation of a random walk. To
investigate the effects of a nonlinear cointegration relationship on the power of
a residual based cointegration test, it is convenient to consider a variant of the
Dickey-Fuller test due to Sargan and Bhargava (1983) and Phillips and Ouliaris1
   1
       The Sargan-Bhargava statistic equals the inverse of the variance ratio statistic suggested by
Phillips and Ouliaris.
134                            CHAPTER 4. INFERENCE IN NONLINEAR MODELS

(1990). The statistic is given by
                                                     T
                                               1     X
                                  ST2 =                     (yt − β̂xt )2 ,                        (4.3)
                                            ω11·2 T 2 t=1

where the β̂ is the least-squares estimator from a regression of yt on xt . The
parameter ω11·2 is defined in Phillips and Ouliaris (1990, below eq. 12) and can
be neglected in what follows.
   For the function z = f (x) the following assumption is made:

Assumption 4.1 (i) The function f (x) is monotonically increasing. (ii) There
exists a function h(a) such that f −1 (az) = h(a)f −1 (z), where f −1 (z) indicates the
inverse function.

   In the following theorem, it is stated that a test against linear cointegration
may be inconsistent for some class of nonlinear functions. Further results can be
obtained by using the framework of Park and Phillips (1999). However, since the
latter approach requires some specialized concepts that are of no interest here,
I will confine myself to a simple class of nonlinear functions, which includes the
function yt = xat as a special case.

THEOREM 4.1 Let zt ∼ I(1) and yt is generated as in (4.2), where ut ∼ I(0).
Under Assumption 4.1, a test based on the statistic ST2 given in (4.3) is consistent
if and only if f (x) is a linear function.

Proof: Using
                                                                               T
                                                                                        2
                                                                         −2
                                                                                P
                              T          T                           T       yt xt
                          1 X 2      1 X 2                              t=1
                                u
                                b =        y −
                         T 2 t=1 t  T 2 t=1 t                              T
                                                                              x2t
                                                                          P
                                                                     T −2
                                                                          t=1

the test is seen to be consistent if the difference on the right hand side converges
to zero as T → ∞. From the continuous mapping theorem it follows that
                         T
                         X                  T
                                            X                                   Z 1
                    −2
                T              yt2 = T −2                    2
                                                  (zt + ut ) ⇒           σ̄z2         W (a)2 da.   (4.4)
                         t=1                t=1                                  0
4.1. INCONSISTENCY OF LINEAR COINTEGRATION TESTS                                                                    135

Furthermore,
                          T
                          X                           T
                                                      X
                   T −2         x2t = T −2                  f −1 (zt )2
                          t=1                         t=1
                                                                           T
                                                                           X
                                         = h(σ̄z T −1/2 )−2 T −2                     f −1 (σ̄z T −1/2 zt )2
                                                                               t=1
                                                                   Z 1
                                     ⇒ h(σ̄z T −1/2 )−2                    f −1 [W (a)]2 da
                                                                      0

and
                        T
                        X                             T
                                                      X
                   −2                            −2
               T              yt xt = T                     zt f −1 (zt ) + op (1)
                        t=1                           t=1
                                                                           T
                                                                           X
                                                       −1/2 −1        −2
                                     = h(σ̄z T                  ) T                  zt f −1 (σz T −1/2 zt )
                                                                           t=1
                                                                      Z 1
                                     ⇒ σ̄z h(σ̄z T −1/2 )−1                     W (a)f −1 [W (a)]da .
                                                                           0

It follows that
                                                                  nR                                  o2
                                                                     1                  −1
           1
             T
             X                      Z 1
                                                                      0
                                                                           W (a)f            [W (a)]da
                 û2 ⇒ σ̄z2               W (a)2 da − σ̄z2                                                     .   (4.5)
          T 2 t=1 t
                                                                           R1
                                     0                                      0
                                                                              f −1 [W (a)]2 da

Since x = f −1 (z) is an affine mapping it is seen that the right hand side of (4.5)
is zero iff f (x) = bx with some constant b. 

   This Theorem shows that residual based cointegration tests are inconsistent
for the class of functions given by Assumption 4.1. With some straightforward
modifications the result extends to other unit root tests like the original Dickey-
Fuller test.
   An example may help to illustrate the result. Let yt be generated as in the
previous example given in eq. (4.1). Using (4.5) and f −1 (z) = x1/3 we have for
β 6= 0:                                    Z 1           R
                                                        [ W (a)4/3 da]2
                              ST2   ⇒         W (a) da − R  2
                                                                        .
                                            0              W (a)2/3 da
Thus, under the alternative of nonlinear cointegration, the test statistic is Op (1).
Accordingly, a test based on ST2 is inconsistent against a nonlinear cointegration
relationship as given in (4.1).
136                          CHAPTER 4. INFERENCE IN NONLINEAR MODELS

4.2          Rank tests for unit roots
Before considering tests for cointegration based on ranks, it is useful to review the
theory on rank tests for a unit root. Assume that the time series xt is generated
by the autoregressive process:

                                           xt = αxt−1 + ut ,

where ut is I(0) as defined in Definition 4.1.
   The test statistic is based on the ranks of yt defined as

                           RT (yt ) = Rank[of yt among y1 , . . . , yT ] .

An asymptotic theory for the ranks is developed by Breitung and Gouriéroux
(1997) and is given in a slightly more general form in the following theorem:

THEOREM 4.2 Let f (yt ) ∼ I(1), where f (·) is a strictly monotonous func-
tion. Then, as T → ∞, the limiting distribution of the sequence of ranks can be
represented as
                             T −1 RT (x[aT ] ) ⇒ aA1 + (1 − a)A2 ,

where A1 and A2 are two independent random variables with an arcsine distribu-
tion.

Proof: Let 1I(a) be an indicator function that is one if the argument is true and
zero otherwise. Then,
                                         T
                                         X
            −1                      −1
        T        RT (x[aT ] ) = T              1I(xt < x[aT ] )
                                         t=1
                             X  1                 1
                                                           
                                                               t   t−1
                                                                       
                           =     1I √ z[ Tt T ] < √ z[aT ]       −
                              t
                                       T            T         T      T
                             Z 1
                           ⇒     1I[W (u) < W (a)]du
                              0
                             Z a                       Z 1
                           =     1I[W (u) < W (a)]du +      1I[W (u) < W (a)]du .
                                 0                                a

Since the increments of the Brownian motion are independent, the two parts of
the integral are independent as well.
4.2. RANK TESTS FOR UNIT ROOTS                                                    137

          d
   Using = to indicate equality in distribution we have
           Z a                            Z a
               1I[W (u) < W (a)]du =           1I[W (a) − W (u) > 0]du
             0
                                          Z0 a
                                      d
                                     =         1I[W (a − u) > 0]du
                                           0
                                           Z 1
                                      d
                                     = a         1I[W (u) > 0]du
                                                  0
                                          d
                                          = aA1 ,
               R1
where A1 =     0
                    1I[W (u) > 0]du is a random variable with an arcsine distribution
(cf. Breitung and Gouriéroux, 1997). Similarly, we find
                     Z 1
                          1I[W (u) < W (a)]du = (1 − a)A2 ,
                           a

where A2 is another random variable with an arcsine distribution independent of
A1 . 

   The arcsine distribution has a quite different shape than the normal distri-
bution and some properties are discussed in Breitung and Gouriéroux (1997).
Theorem 4.2 generalizes Theorem 1 of Breitung and Gouriéroux (1997) to serially
correlated time series. It is important to notice that short run dynamics in ∆yt
do not change the distribution of the ranks. Thus, the ranks do not depend on
the long run variance of the process.
   These results can be used to construct a rank test for cointegration. Consider
the null hypothesis that f (xt ) and g(yt ) are independent random walk sequences.
This null hypothesis is tested against the alternative of a cointegration relationship
of the form:
                                  ut = g(yt ) − f (xt ) ,                       (4.6)

where f (xt ) ∼ I(1), g(yt ) ∼ I(1) and ut ∼ I(0). The functions g(y) and f (x)
are monotonically increasing. If it is not known whether these functions are
monotonically increasing or decreasing, a two-sided test is available. A similar
framework is considered in Granger and Hallman (1991a).
   The rank statistic is constructed by replacing f (xt ) and g(yt ) by RT (xt ) and
RT (yt ), respectively. Since it is assumed that f (xt ) and g(yt ) are two random
138                      CHAPTER 4. INFERENCE IN NONLINEAR MODELS

walk series, it follows that RT (xt ) = RT [f (xt )] and RT (yt ) = RT [g(yt )] behave like
ranked random walks for which the limiting distribution is given in Theorem 4.2.
The advantage of a statistic based on the sequence of ranks is that the functions
f (·) and g(·) need not be known.
   We consider two “distance measures” between the sequences RT (xt ) and RT (yt ):

                                    κT = T −1 sup |dt |                              (4.7)
                                                   t
                                                   T
                                                   X
                                    ξT = T −3            d2t ,                       (4.8)
                                                   t=1

where dt = RT (yt ) − RT (xt ). It should be noted that dt is Op (T ) and, thus, the
normalization factors are different from other applications of these measures. The
statistic κT is a Kolmogorov-Smirnov type of statistic considered by Lo (1991) and
ξT is a Cramer-von-Mises type of statistic used by Sargan and Bhargava (1983).
The null hypothesis of no (nonlinear) cointegration between xt and yt is rejected
if the test statistics are too small.
   It is interesting to note that the statistic ξT allows for different interpretations.
Let b̃T denote the least-squares estimate from a regression of RT (yt ) on RT (xt ).
          RT (xt )2 = RT (yt )2 = T 3 /3 + O(T 2 ) we have
       P             P
Using
                                T
                        1 X
                ξT   =         [RT (yt )2 − 2RT (yt )RT (xt ) + RT (xt )2 ]
                       T 3 t=1
                                     T
                       2 − 2b̃T X
                     =            RT (xt )2
                         T 3 t=1
                         2
                     =     (1 − b̃T ) + op (1) .
                         3
If yt and xt are not cointegrated, then b̃T has a nondegenerate limiting distribution
(see Phillips (1987a) for the linear case). On the other hand, if yt and xt are
cointegrated, then b̃T converges to one in probability and therefore ξT converges
to zero.
   Second, consider a Cramer-von Mises type of statistic based on the residuals
of a cointegration regression on the ranks:
                            T
                        1 X
             ξeT =       3
                             [RT (yt ) − b̃T RT (xt )]2
                       T t=1
4.2. RANK TESTS FOR UNIT ROOTS                                                        139

                          T
                      1 X
                 =           [RT (yt )2 − 2b̃T RT (yt )RT (xt ) + b̃2T RT (xt )2 ]
                     T 3 t=1
                               T
                     1 − b̃2T X
                 =              RT (xt )2
                       T 3 t=1
                     1
                 =     (1 − b̃2T ) + op (1) .
                     3
Hence, a two-step approach similar to the one suggested by Engle and Granger
(1987) can be seen as a two-sided version of a test based on ξT .
   Third, the statistic ξT is related to the rank correlation coefficient, which is
known as “Spearman’s rho”. Spearman’s rho is defined as
                                              T
                                          6  X
                               rs = 1 − 3       d2                                   (4.9)
                                       T − T t=1 t

(e.g. Kendall and Gibbons 1990, p.8). The statistic rs can therefore be seen as a
mapping of ξT into the interval [−1, 1]. If xt and yt are cointegrated, Spearman’s
rho converges in probability to one as T → ∞.
   Theorem 4.2 implies that, if f (xt ) and g(yt ) are independent random walk
sequences, we have

                  T −1 d[aT ] ⇒ a(A1 − A3 ) + (1 − a)(A2 − A4 ) ,

where A1 , . . . , A4 are independent random variables with an arcsine distribution.
Since Theorem 5.2 allows for heteroscedastic and serially correlated increments,
the asymptotic distributions of the differences dt is not affected by weak forms of
heteroskedasticity and short run serial correlation.

Power. Under the alternative of a cointegration relationship as given in (4.6) we
have

         T −1 d[aT ] = T −1 RT [T −1/2 g(yt )] − RT [T −1/2 f (xt )]
                           

                     = T −1 RT [T −1/2 f (xt ) + op (1)] − RT [T −1/2 f (xt )]
                           

                     ⇒ 0.

Hence, κT and ξT converge to zero as T → ∞, i.e., both rank tests are consistent.
140                     CHAPTER 4. INFERENCE IN NONLINEAR MODELS

   Apart from this general statement it is quite difficult to obtain analytical re-
sults for the (local) power of the test. Nevertheless, some interesting properties of
the rank test can be observed when the parametric analog of the ranked differences
is considered. Let the normalized difference of the series be defined as
                                             yt   xt
                                      δt =      −    ,
                                             σ̄y σ̄x
where yt and xt are I(1), E(yt ) = E(xt ) = 0 for all t, and σ̄x2 , σ̄y2 denote the
respective long run variances (cf Definition 4.1). Accordingly, a parametric analog
of the statistic ξT is constructed as
                                                  T
                                          1 X 2
                                     DT = 2   δ                                        (4.10)
                                         T t=1 t

and under the null hypothesis of two uncorrelated random walk sequences, the
                                          R           R
statistic is asymptotically distributed as W1 (a)2 dr+ W2 (a)2 dr, where W1 (a)
and W2 are independent standard Brownian motions. Under the alternative hy-
pothesis assume that ut = yt − βxt is stationary and β > 0. In this case we have
σ̄y = β σ̄x so that
                            T                        2                     T
                      1 X           βxt + ut   xt                   1       X
                 DT = 2                      −             =                    u2 .
                     T t=1            β σ̄x    σ̄x             β 2 σ̄x2 T 2 t=1

It is seen that for large T the power of the test depends on the “signal-to-noise
ratio” β 2 σ̄x2 /σu2 , where σu2 is the variance of ut . As a consequence, the power of
the test is a monotonically increasing function of the parameter β. In contrast,
β does not affect the power of a Dickey-Fuller cointegration test. As a result, we
expect that a test based on DT or its ranked counterpart ξT has more (less) power
than the Dickey-Fuller type cointegration test if β is large (small).

Extensions. So far I have assumed that f (xt ) and g(yt ) are independent I(1)
series. Of course, this assumption is quite restrictive and in many applications
it is reasonable to assume that the series are correlated. We therefore relax this
assumption and instead assume that f (xt ) and g(yt ) converge to two correlated
Brownian motions W1 (a) and W2 (a) with correlation coefficient

                                ρ = E[W1 (1)W2 (1)] .
4.2. RANK TESTS FOR UNIT ROOTS                                                   141

Since f (xt ) and g(yt ) are not observed it is not possible to estimate ρ directly.
Rather I will investigate the relationship between ρ and the expected correlation
coefficient of the rank differences
                                     T
                                     P
                                           ∆RT (xt )∆RT (yt )
                                     t=2
                    ρR
                     T = s                      T             .           (4.11)
                               T
                               P                  P
                                     ∆RT (xt )2      ∆RT (yt )2
                               t=2                      t=2


If there exists an (asymptotic) one-to-one relationship between ρ and E(ρR
                                                                         T ), then

it is possible to derive the limiting distributions of the test statistics. Unfortu-
nately, the relationship between ρ and E(ρR
                                          T ) is very complicated and an analytical

evaluation appears intractable. Therefore, Monte Carlo, simulations are employed
to approximate the functional relationship between the two parameters.
   Figure 5.4 presents the estimated relation between ρ and E(ρR
                                                               T ) using 5000

Monte Carlo replications with T = 100. It is seen that the correlation between
the ranked differences ρR
                        T tends to underestimate ρ in absolute value. However,

the difference is small for moderate values of ρ, ρR
                                                   T can be used as a first guess of

ρ. This suggests that for small values of ρ, the test statistic can be corrected in a
similar manner as in the linear case:

                       ξT∗ = ξ/b 2
                               σ∆d          and      κ∗T = κT /b
                                                               σ∆d ,          (4.12)

where
                                             T
                                             X
                            σ 2
                            b∆d = T −2             (dt − dt−1 )2 .
                                             t=2

Critical values for the corrected statistic ξT∗ and κ∗T are presented in Table A.5.1
in the appendix to this chapter. If the absolute value of ρ is close to one, this
correction performs poorly, however, and a more precise correction is required. In
general, the critical values of the statistics ξT∗ and κ∗T depend on the correlation
coefficient ρ or - by using the relationship between ρ and E(ρR          R
                                                              T ), on E(ρT ). Let

cαξ (ρ) denote the critical value of ξT∗ with respect to the significance level of α.
Using the relationship between ρ and E(ρR
                                        T ), the critical value may alternatively

be expressed as
                              cαξ (ρ) = cαξ (0)λαξ (EρR
                                                      T) ,
142    CHAPTER 4. INFERENCE IN NONLINEAR MODELS




                  Figure 5.4:
      The relationship between ρ and E(ρR
                                        T)
4.2. RANK TESTS FOR UNIT ROOTS                                                                143

where λαξ (·) is an (unknown) function and cαξ (0) is the critical value of ξT∗ as
presented in Table A.5.1. Accordingly, a test with a correct size in the case of a
substantial value of the correlation coefficient is obtained as

                      ξT∗∗ = ξT∗ /λαξ (EρR
                                         T)   and       κ∗∗   ∗   α    R
                                                         T = κT /λκ (EρT ) .               (4.13)

Unfortunately, the determination of the function λαξ (EρR
                                                        T ) seems intractable so

that an approximation is obtained using Monte Carlo simulations. Specifically I
use 5000 Monte Carlo replications with T = 100 in the range ρ = [−0.98, −0.96, . . . ,
0.96, 0.98]. For the resulting 99 values of λαξ = cαξ (ρ)/cαξ (0) with α = 0.05 the fol-
lowing regression equations were fitted2

                       λ0.05
                        κ    ≃ 1 − 0.174(ρR
                                          T)
                                            2
                                                                (R2 = 0.985)
                       λ0.05
                        ξ    ≃ 1 − 0.462ρR
                                         T ,                     (R2 = 0.929)

where the uncentered R2 is given in parentheses. The statistics ξT∗∗ and κ∗∗
                                                                          T have

the same limiting distributions as for the case assuming uncorrelated series (see
Table A.5.1 for critical values).
       Furthermore, it is possible to generalize the test in order to test for cointegra-
tion among the k + 1 variables yt , x1t , . . . , xkt , where it is assumed that g(yt ) and
fj (xjt ) (j = 1, . . . , k) are monotonic functions. Let RT (xt ) = [RT (x1t ), . . . , RT (xkt )]0
be a k × 1 vector and b       e T is the least-squares estimate from a regression of RT (yt )
on RT (xt ). Using the residuals

                                                    e 0 RT (xt ).
                                   ũt = RT (yt ) − b T


a multivariate rank statistic is obtained from the normalized sum of squares of
the residuals:
                                                      T
                                                      X
                                                 −3
                                    ΞT [k] = T              (ũR  2
                                                               t ) ,
                                                      t=1
   2
       To select an appropriate regression equation, a fourth order polynomial was estimated and
the dominant regressor is selected for the approximation. Somewhat surprisingly, the dominant
regressor for λ0.05 R                                                   0.05 R
               κ (ρT ) is the squared correlation coefficient, whereas λξ   (ρT ) is well approxi-
mated by using a linear function.
144                         CHAPTER 4. INFERENCE IN NONLINEAR MODELS

Using
                            T                                 
                       −3
                            X                       1 2
                   T            RT (yt )RT (xjt ) =       − ξjt + op (1) ,
                            t=1
                                                    2   3
                                                                                 PT
where ξjt is the bivariate rank statistic for yt and xjt defined as ξjt = T −3    t=1 [RT (yt )−

RT (xjt )]2 , it is not difficult to show that the multivariate test statistic can be rep-
resented as
                                              1 1 0
                                   ΞT [k] =    − δ ΨT δT ,
                                              3 4 T
where                                                           
                                                  ξ1T − 2/3
                                                      
                                            ξ2T − 2/3 
                                      δT = 
                                                      
                                                .
                                                 ..
                                                       
                                                       
                                                      
                                             ξkT − 2/3
and
                                            T
                                            X
                                ΨT = T −3          RT (xt )RT (xt )0 .
                                            t=1

To account for a possible correlation between the series, a modified statistic can
be constructed:
                                     Ξ∗T [k] = ΞT [k]/b 2
                                                      σ∆u ,                           (4.14)

where
                                              T
                                              X
                                 σ 2
                                 b∆u = T −2             (ũt − ũt−1 )2 .
                                                  t=2

Critical values for the test statistic Ξ∗T [k] are presented in Table A.5.1.



4.3      A rank test for neglected nonlinearity
Whenever the rank test for cointegration indicates a stable long run relationship, it
is interesting to know whether the cointegration relationship is linear or nonlinear.
For a convenient representation of such null and alternative hypotheses I follow
Granger (1995) and write the nonlinear relationship as

                                yt = γ0 + γ1 xt + f ∗ (xt ) + ut ,                    (4.15)
4.3. A RANK TEST FOR NEGLECTED NONLINEARITY                                         145

where γ0 + γ1 xt is the linear part of the relationship. Under the null hypothesis it
is assumed that f ∗ (xt ) = 0 for all t. If f ∗ (xt ) is unknown, it may be approximated
by Fourier series (e.g. Gallant 1981) or a neural network (Lee, White and Granger
1993). Here we suggest to use the multiple of the rank transformation θRT (xt )
instead of f ∗ (xt ).
    It is interesting to note that the rank transformation is to some extent related
to the neural network approach suggested by Lee, White and Granger (1993). If xt
is a k ×1 vector of “input variables” and α is a corresponding vector of coefficients,
the neural network approach approximates f ∗ (xt ) by qj=1 βj ψ(x0t αj ), where ψ(·)
                                                        P

has the properties of a cumulated distribution function. A function often used in
practice is the logistic ψ(x) = x/(1 − x). In our context, xt is a scalar variable, so
that the neural network term simplifies to βψ(αxt ). Using T −1 RT (xt ) = FbT (xt ),
where FbT (xt ) is the empirical distribution function, the rank transformation can
be motivated by letting ψ(αxt ) be the empirical distribution function with the
attractive property that the parameter α can be dropped due to the invariance of
the rank transformation.
    If it is assumed that xt is exogenous and ut is white noise with ut ∼ N (0, σ 2 ),
a score test statistic is obtained as the T · R2 of the least-squares regression

                          ũt = c0 + c1 xt + c2 RT (xt ) + et ,                  (4.16)

where ũt = yt − γ̃0 − γ̃1 xt and γ̃0 and γ̃1 are the least-squares estimates from a
regression of yt on a constant and xt .
    A problem with applying the usual asymptotic theory to derive the limiting
null distribution of the test statistic is that the regression (4.16) involves the
nonstationary variables xt and RT (xt ). However under some (fairly restrictive)
assumptions, the following theorem shows that under the null hypothesis c2 = 0
the score statistic is asymptotically χ2 distributed.
                              t
                              P
THEOREM 4.3 Let xt =                vj and
                              j=1

                                 yt = γ0 + γ1 xt + ut ,

where it is assumed that vt is I(0) and ut is white noise with E(ut ) = 0 and
146                        CHAPTER 4. INFERENCE IN NONLINEAR MODELS

E(u2t ) = σu2 . As T → ∞, the score statistic for H0 : c2 = 0 in the regression
(4.16) has an asymptotic χ2 distribution with one degree of freedom.


Proof: It is convenient to introduce the matrix notation:
                                                       
                          1 x1                   RT (x1 )
                        .     ..                  ..
                          ..
                                                         
                  X1 =        .  and X2 = 
                                                   .     ,
                                                          
                          1 xT                   RT (xT )

y = [y1 , . . . , yT ]0 and ũ = [ũ1 , . . . , ũT ]0 . With this notation, the score statistic can
be written as

                                1
                   T · R2 =       2
                                    (β̂2 )2 [X20 X2 − X20 X1 (X10 X1 )−1 X10 X2 ] ,
                               σ̃

where β̂2 is the least-squares estimator of β2 in the regression y = X1 β1 + X2 β2 +
u and σ̃ 2 = ũ0 ũ/T . As shown by Park and Phillips (1988), the least-squares
estimator in a regression with strictly exogenous I(1) regressors is conditionally
normally distributed, so that conditional on X = [X1 , X2 ], β̃2 is asymptotically
distributed as N (0, V2 ), where

                        V2 = σu2 [X20 X2 − X20 X1 (X10 X1 )−1 X10 X2 ]−1 .

Since σ̃u2 converges weakly to σu2 it follows that T · R2 has an asymptotic χ2
distribution with one degree of freedom. 

    Unfortunately, the assumptions of Theorem 4.3 are too restrictive to provide
a useful result for practical situations. In many situations, the errors ut are
found to be serially correlated and the regressor xt may be endogenous. However,
using standard techniques for cointegration regressions (Saikonnen 1991, Stock
and Watson 1993) the test can be modified to accommodate serially correlated
errors and endogenous regressors. For this purpose assume that

                         ut = E(ut |∆xt , ∆xt±1 , ∆xt±2 , . . .) + vt
                              X∞
                            =       πj ∆xt−j + vt
                                  j=−∞
4.4. NONLINEAR SHORT RUN DYNAMICS                                                    147

and vt admits the autoregressive representation
                                   X∞
                              vt =    αj vt−j + εt ,
                                            j=1

where the roots of the lag polynomial α(B) = 1 − α1 B − α2 B 2 − · · · are bounded
away rom the unit circle.
   Under the null hypothesis of linear cointegration we thus have the representa-
tion                          ∞                            ∞
                              X                            X
                 yt = γ0∗ +         αj yt−j + γ1∗ xt +           πj∗ ∆xt−j + εt    (4.17)
                              j=1                         j=−∞

(see Stock and Watson 1993 and Inder 1995).
   A test for non-linear cointegration can be obtained by truncating the infinite
sums appropriately and forming T · R2 for the regression of the residuals ε̃t on the
regressors of (4.17) and RT (xt ). Along the lines of Theorem 4.3 it can be shown
that the resulting score statistic is asymptotically χ2 distributed under the null
hypothesis of a linear cointegration relationship.



4.4      Nonlinear short run dynamics
In recent papers by Bierens (1997a,b) and Vogelsang (1998a,b) it was observed
that it is possible to construct test statistics that asymptotically do not depend
on parameters involved in the short run dynamics of the process. Accordingly,
it is not necessary to estimate the nuisance parameters such as the coefficients
for the lagged differences in a Dickey-Fuller regression or the “long run variance”
(2π times the spectral density at frequency zero) by using a kernel estimate as in
Phillips and Perron (1988). Such an approach is called “model free” in Bierens
(1997a) and “nonparametric” in Bierens (1997b). Albeit both terms may be
somewhat misleading, I follow Bierens (1997b) and use the term “nonparametric”.
In fact, it is difficult to think of any test, which is “less parametric”.
   The idea behind this approach is the following. Under suitable conditions on
the sequence ε1 , ε2 , . . . the functional central limit theorem (FCLT) implies
                                           [aT ]
                                           X
                                    −1/2
                               T                   εt ⇒ σ̄W (a) .                  (4.18)
                                           t=1
148                     CHAPTER 4. INFERENCE IN NONLINEAR MODELS

In what follows I consider tests, which by construction do not depend on the
parameter σ̄ 2 , asymptotically.
   To test the hypothesis that yt is I(0) against the alternative yt ∼ I(1), Tanaka
(1990) and Kwiatkowski et al. (1992) suggest an LM type test statistic given by
                                                   T
                                            T −2         Yt2
                                                   P
                                                   t=1
                                     %T =           T
                                                               ,              (4.19)
                                                         yt2
                                                    P
                                            T −1
                                                   t=1

where Yt = y1 + · · · + yt denotes the partial sum process and it is assumed that
yt is white noise. If yt is serially correlated, the denominator is replaced by the
estimated long run variance (cf Kwiatkowski et al. 1992). Note that %T is the
(normalized) variance ratio of the partial sums and the original series. This test
statistic is therefore referred to as the “variance ratio statistic”.
   In contrast to Kwiatkowski et al. (1992), the variance ratio statistic is em-
ployed to test the null hypothesis that yt is I(1) against the alternative yt ∼ I(0).
Thus, our test flips the null and alternative hypothesis of the test suggested by
Kwiatkowski et al. (1992). The following theorem presents the limiting null dis-
tribution of such a test procedure.

THEOREM 4.4 Let yt ∼ I(1). Then, as T → ∞, we have
                             R1 Ra
                    −1         [ W (s)ds]2 da
                              0 0
                  T %T ⇒        R1            .
                                 0
                                   W (a)2 da
Proof: From Definition (4.1) it follows that

                           T −1/2 y[aT ] ⇒ σ̄W (a)
                                              Z a
                             −3/2
                           T      Y[aT ] ⇒ σ̄     W (s)ds
                                                         0

Thus, we get
                                                   T
                                            T −4         Yt2
                                                   P
                                                   t=1
                           T −1 %T    =             T
                                                 yt2
                                                    P
                                        T −2
                                             t=1
                                        R1 Ra
                                          [ W (s)ds]2 da
                                         0 0
                                      ⇒    R1
                                            0
                                               W (a)2 da
4.4. NONLINEAR SHORT RUN DYNAMICS                                                                 149



    It is important to notice that the null distribution does not depend on nuisance
parameters. This is due to the fact that the parameter σ̄ 2 cancels in the variance
ratio. The following theorem shows that the test is consistent against stationary
alternatives and the usual class of local alternatives (e.g. Phillips 1987b).
                                                                                          ∞
                                                                                          P
THEOREM 4.5 Let yt be stationary with the Wold representation yt =                              γj εt−j ,
                                                                                          j=0
                   ∞
                         γj2 < ∞, and εt is white noise with E(εt ) = 0 and E(ε2t ) = σε2 .
                   P
where γ0 = 1,
                  j=0
Under this alternative we have as T → ∞
                                       R1
                                   σ̄ 2 0 W (a)2 dr
                             %T ⇒                   ,
                                          σy2
                 ∞                               ∞
where σ̄ 2 = (         γj )2 σε2 and σy2 =            γj2 σε2 .
                 P                               P
                 j=0                            j=0
    Under the local alternative φT = 1 − c/T in yt = φT yt−1 + εt the limiting
distribution is given by
                                                  R1 Ra
                                     −1             [ J (s)ds]2 da
                                                   0 0 c
                                 T        %T    ⇒    R1            ,
                                                        J (a)2 da
                                                      0 c
                                                                                         R a (a−s)c
where Jc (a) represents an Ornstein-Uhlenbeck process defined as Jc (a) =                 0
                                                                                            e       dW (s).

Proof: Under a stationary alternative we have
                           X             Z 1
                        −2      2      2
                      T       Yt ⇒ σ̄        W (a)2 da .
                                                                  0

                                          T
                                                     p
Using these results and T −1                    yt2 −→σy2 , the limiting distribution against a sta-
                                          P
                                          t=1
tionary alternative follows immediately.
    Under the sequence of local alternatives we have (cf Phillips 1987b)

                                   T −1/2 y[aT ] ⇒ Jc (a)
                                                   Z a
                                     −3/2
                                   T      Y[aT ] ⇒      Jc (s)ds .
                                                                  0

Therefore, the limiting distribution results from replacing the Brownian motion
W (a) in Theorem 4.4 by Jc (a). 
150                     CHAPTER 4. INFERENCE IN NONLINEAR MODELS

Testing the cointegration rank. The variance ratio statistic for a nonpara-
metric unit root test can be generalized straightforwardly to test hypotheses on
the cointegration rank in the spirit of Johansen (1988, 1991). To this end I make
the following assumption.

Assumption 4.2 There exists an invertible matrix Q = [γ, β]0 , where γ and β
are linearly independent n×q and n×(n−q) matrices, respectively, with 0 ≤ q < n
such that
                                              γ 0 yt
                                          "            #       "        #
                                                                   ξt
                               Qyt =                       ≡                = zt
                                              β 0 yt               ut
                               T −1/2 ξ[aT ] ⇒ Wq (a)
                                        T
                                        X
                                   −2
                               T              ut u0t = op (1) ,
                                        t=1

where Wq (a) is a q–dimensional Brownian motion with unit covariance matrix.

   To allow for some general nonlinear processes generating ut , it is not assumed
that the “error correction term” ut is stationary. Instead I assume that the trend
component ξt is “variance dominating” in the sense that the variance of ξt diverges
with a faster rate than ut .
   The dimension of the stochastic trend component ξt is related to the cointe-
gration rank of a linear system by q = n − r, where r is the rank of the matrix Π
in the VECM representation

                                   ∆yt = Πyt−1 + vt ,                                (4.20)

and vt is a stationary error vector. In a linear system, the hypothesis on the
number of stochastic trends is equivalent to a hypothesis on the cointegration
rank as in Johansen (1988). However, since we do not assume that the process is
linear, the representation of the form (4.20) may not exist.
   Our test statistic is based on the eigenvalues λj of the problem

                                   |λj BT − AT | = 0 ,                               (4.21)

where
                                   T
                                   X                               T
                                                                   X
                          AT =           yt yt0 ,      BT =                 Yt Yt0
                                   t=1                              t=1
4.4. NONLINEAR SHORT RUN DYNAMICS                                                            151
           Pt
and Yt =    j=1 yj denotes the n-dimensional partial sum with respect to yt . The

eigenvalues of (4.21) are identical to the eigenvalues of the matrix RT = AT BT−1 .
For n = 1 the eigenvalue is identical to the statistic 1/%T and, thus, the test can
be seen as a generalization of the variance ratio statistic to multivariate processes.
   The eigenvalues of (4.21) are given by
                                             ηj0 AT ηj
                                         λj = 0        ,                                  (4.22)
                                             ηj BT ηj
where ηj is the eigenvector associated with the eigenvalue λj . If the vector ηj falls
inside the space spanned by the columns of γ, then ηj0 AT ηj is Op (T 2 ) and ηj0 BT ηj
is Op (T 4 ) so that the eigenvalue is Op (T −2 ). On the other hand, if the eigenvector
ηj falls into the space spanned by the columns of β, it follows that T 2 λj tends to
infinity, as T → ∞. Therefore, the test statistic
                                                        q
                                                        X
                                                    2
                                         Λq = T               λj                          (4.23)
                                                        j=1

has a nondegenerate limiting distribution, where λ1 ≤ λ2 ≤ · · · ≤ λn denote the
eigenvalues of the matrix RT . In contrast, if the number of stochastic trends is
smaller than q, then Λq diverges to infinity. The following theorem presents the
limiting null distribution for the test statistic Λq .

THEOREM 4.6 Assume that yt admits a decomposition as in Assumption 4.2
with 0 < q ≤ n. Then, as T → ∞
                     (Z
                         1                  Z 1                 −1 )
            Λq ⇒ tr        Wq (a)Wq (a)0 da      Vq (a)Vq (a)0 da      ,
                              0                               0
                                                                                    Ra
where Wq (a) is a q-dimensional standard Brownian motion and Vq (a) =               0
                                                                                         Wq (s)ds.
                    t
                          zj denote the partial sum with respect to zt = Qyt = [ξt0 , u0t ]0 .
                    P
Proof: Let Zt =
                    j=1
Then, the eigenvalues of problem (4.21) also solves the problem

                                     |λj DT − CT | = 0 ,

where
                                   T
                                   X                              T
                                                                  X
                            CT =         zt zt0 ,   DT =                 Zt Zt0 .
                                   t=1                             t=1
152                            CHAPTER 4. INFERENCE IN NONLINEAR MODELS

                                                  0      0 0
Partition the corresponding eigenvectors η̃j = [η̃1j , η̃2j ] such that η̃j0 zt = η̃1j
                                                                                    0
                                                                                       ξ1t +
  0
η̃2j u2t , and Zt is partitioned accordingly. We normalize the eigenvectors as
                                                                    "        #
                                                                        Iq
                                   η̃1 = [η̃11 , . . . , η̃1q ] =
                                                                        ΦT
          0
so that η̃1j zt = ξjt + Φ0T ut , where ξjt denotes the j-th component of the vector ξt .
It follows that
                                             η̃j0 CT η̃j
                                     λj    = 0
                                             η̃j DT η̃j
                                               T
                                                    2
                                                       + op (T 2 )
                                              P
                                                   ξjt
                                           = t=1
                                              T
                                                     2
                                             P
                                                   Zjt  + op (T 4 )
                                                 t=1
                                                  T
                                                        2
                                                  P
                                                       ξjt
                                                 t=1
                                           =      T
                                                             + op (1),
                                                        2
                                                 P
                                                       Zjt
                                                 t=1

                   t
                   P
where Zjt =              ξjs . As T → ∞ we therefore have
                   s=1

                   q
                   X
                                   (Z
                                      1                             Z 1                    −1 )
               2                                             0                          0
           T             λj ⇒ tr          Wq (a)Wq (a) da                    Vq (a)Vq (a) da
                   j=1                0                                 0




    From this theorem it follows that the asymptotic distribution of the q smallest
eigenvalues of the problem (4.21) does not depend on nuisance parameters and,
thus, we do not need to select the lag order of the VAR process as in Johansen’s
approach or the truncation lag as for the test of Quintos (1998).

Including Deterministic Terms. To accommodate processes with a nonzero
mean assume that the mean function E(yt ) = Cdt is a linear function of deter-
ministic variables like a constant, time trend or dummy variables stacked in the
k × 1 vector dt and C is a matrix (or vector) of unknown coefficients. In this case
it is natural to remove the mean of the time series by using the residuals from the
4.4. NONLINEAR SHORT RUN DYNAMICS                                                          153

regression yt = Cd
                b t+u bt , where C
                                 b denotes the least-squares estimator of C. The
                                                               b1 + · · · + u
partial sums are then constructed by using the residuals Ybt = u            bt . This
procedure is referred to as “OLS-detrending”.3
       In cointegrated systems it is often the case that the deterministic terms are
constrained under the cointegration hypothesis. In particular, it is assumed that
yt has a linear time trend, whereas the cointegrating relations β 0 yt have a constant
mean. This specification of the mean function is used if the model is estimated
with Johansen’s ML procedure including unrestricted constants. This specifi-
cation implies that the linear combinations ut = β 0 yt are adjusted for a mean,
whereas the vector of permanent components ξt = γ 0 yt is adjusted for a time
trend. Thus, in order to impose these restrictions on the deterministic terms,
estimates for the matrices β and γ are needed. A possible way to estimate these
matrices is to use the principle component estimator. An attractive property of
this estimator is that in this case γ is estimated to be the orthogonal complement
of the cointegration matrix. It follows, that this matrix is estimated with the
same convergence rate as the cointegration matrix (cf Harris 1997).
   Let βb and γ
              b denote the estimates from a principal component procedure. Then,
the adjusted vector of time series results as
                                  " 0                     #
                                    γ
                                    b y t −b  a 0 −b a 1t
                            x∗t =                           ,
                                         βb0 yt − bb

where b
      a0 and b
             a1 are the least-squares estimates from a regression of ξbt = γb0 yt on a
                                                     bt = βb0 yt . Then, the statistic
constant and a time trend and bb denotes the mean of u
is computed by using x∗t instead of yt and the critical values for a test with time
trend are applied. Note that
                           " 0           0              1/2
                                                              #
                             γ y t − E(γ yt ) + op (T       )
                     x∗t =
                              β 0 yt − E(β 0 yt ) + Op (1)

and, thus, the differences between the estimated and true nonstationary compo-
nents are asymptotically negligible but the transitory components are measured
   3
       Alternatively, the parameters in C may be estimated by applying quasi differences to the
nonstationary components as in Xiao and Phillips (1999).
154                    CHAPTER 4. INFERENCE IN NONLINEAR MODELS

with an nonvanishing error. However, since the transitory components are asymp-
totically irrelevant under the null hypothesis, this does not affects the null distri-
bution of the test.



4.5       Small sample properties
Rank tests. To investigate the small sample properties of the rank tests for non-
linear cointegration I follow Gonzalo (1994) and generate two time series according
to the model equations

                       yt = βzt + ut ,        ut = αut−1 + εt                  (4.24)
                       zt = zt−1 + vt ,

where                      "        #         "         #!
                               εt                 1 ρ
                                ∼ iid N 0,            .
                            vt               ρ 1
The variable xt is obtained from the random walk zt by using the inverse function
xt = f −1 (zt ).



    Under the null hypothesis H0 : α = 1 there is no cointegration relationship
between the series. If in addition β = 0 and ρ = 0, then xt and yt are two indepen-
dent random walks with serially uncorrelated increments. For this specification,
Table 5.1 reports the rejection frequencies of different cointegration tests. The
rank tests κT and ξT are computed as in (4.7) and (4.8) and “CDF” indicates the
Dickey-Fuller t-test applied to the residuals of a linear regression of yt on xt and
a constant. The results for the linear process is given in the left half of Table 5.1
indicated by f (x) = x. It might be surprising to see that for β = 1 the rank test
is much more powerful than the CDF test if α is close to one. As was argued in
Section 5.3, this is due to the fact that the rank statistics depend on the parameter
β, whereas the Dickey-Fuller type test for cointegration does not depend on β.
In fact, the simulation results indicate that the power of the rank tests are very
sensitive to the value of β. For β = 0.5 the Dickey-Fuller tests perform better,
whereas for β = 1 the rank tests clearly outperform the Dickey-Fuller type tests.
4.5. SMALL SAMPLE PROPERTIES                                                          155




                      Table 5.1: Size and power (θ = 0)



      f (x) =                  x                     x3      log(x)      tan(xt )


        α           κT         ξT        CDF         CDF      CDF         CDF
                                      Size (β = 0)
       1.00       0.049       0.049      0.050     0.098      0.051       0.077
                                    Power (β = 0.5)
       0.98       0.232       0.248      0.080     0.310      0.156       0.186
       0.95       0.288       0.332      0.225     0.491      0.229       0.295
       0.90       0.387       0.484      0.698     0.730      0.323       0.474
       0.80       0.551       0.708      0.999     0.866      0.410       0.616
                                    Power (β = 1)
       0.98       0.594       0.616      0.080     0.310      0.156       0.186
       0.95       0.733       0.792      0.225     0.491      0.229       0.295
       0.90       0.861       0.930      0.698     0.730      0.323       0.474
       0.80       0.953       0.993      0.999     0.866      0.410       0.616

      Note: Rejection frequencies resulting from 10,000 replications of the pro-
      cess given in (4.24). The sample size is T = 200. The nominal size is 0.05.
      The test statistic κT and ξT are defined in (4.7) and (4.8). CDF indicates a
      Dickey-Fuller t-test on the residuals of a cointegrating regression including
      a constant term.
156                          CHAPTER 4. INFERENCE IN NONLINEAR MODELS

                     Table 5.2: Testing correlated random walks

            ρ          κ∗T              ξT∗          κ∗∗
                                                      T                  ξT∗∗              Ξ∗T [1]
         -0.900       0.130           0.007         0.054            0.033                 0.003
         -0.600       0.073           0.016         0.048            0.039                 0.012
         -0.400       0.058           0.023         0.048            0.042                 0.020
         -0.200       0.052           0.030         0.049            0.042                 0.029
         0.000        0.048           0.041         0.047            0.040                 0.042
         0.200        0.050           0.053         0.047            0.040                 0.056
         0.400        0.052           0.070         0.043            0.037                 0.074
         0.600        0.062           0.096         0.039            0.036                 0.107
         0.900        0.105           0.234         0.038            0.053                 0.255

         Note:     Rejection frequencies resulting from two random walks with
         corr(∆xt , ∆yt )=ρ. The sample size is T = 200. The statistics κ∗T and ξT∗
         are defined in (4.12) and κ∗∗     ∗∗                                    ∗
                                    T and ξT are given in (4.13). The statistic ΞT [1] is

         the two-sided test statistic given in (4.14).




          Table 5.3: Power against nonlinear cointegration relationships



       f (x) =                  x3                    log(x)                         tan(x)


      regressor:     RT (xt )        f (xt )    RT (xt )       f (xt )          RT (xt )       f (xt )
      β = 0.01        0.267          0.252      0.246       0.216               0.237          0.226
      β = 0.05        0.473          0.485      0.701       0.676               0.549          0.548
       β = 0.1        0.714          0.746      0.957       0.955               0.834          0.855
       β = 0.5        0.974          0.988      1.000       1.000               0.999          1.000

      Note: Simulated power from a score tests using RT (xt ) and f (xt ) as additional
      regressors. The sample size is T = 200.
4.5. SMALL SAMPLE PROPERTIES                                                       157

   It should also be noted that the rank test does not require to estimate the
cointegration parameter β. Accordingly, this test has the same power as for the
case of a known cointegration relationship. Furthermore, the rank tests impose
the one-sided hypothesis that f (xt ) is an increasing function.

   Since the rank tests are invariant to a monotonic transformation of the vari-
ables, the power function is the same as for the linear case. Comparing the power
of the CDF test with the rank counterparts, it turns out that the power of the
CDF test may drop dramatically for nonlinear alternatives (see also Granger and
Hallman (1991b)), while the rank test performs as well as in the linear case. In
particular, for the case f (x) = log(x) the parametric CDF test performs quite
poorly.

   To study the ability of the modified statistics suggested in Section 5.3 to
account for correlated random walks, I simulate correlated data by varying the
correlation coefficient in the range ρ = −0.9, . . . , 0.9. The statistics κ∗T and ξT∗
use a correction that is similar to the correction in the linear case. As argued in
Section 5.3, this test statistic should perform well if the correlation is moderate.
For more substantial correlation coefficients, the improved statistics κ∗∗     ∗∗
                                                                        T and ξT

defined in (4.13) should be used.

   Table 5.2 presents the empirical sizes for testing the null hypothesis of no
cointegration with β = 0 and α = 1. It turns out that the statistic κ∗T performs
well in the range ρ ∈ [−0.4, 0.4], whereas the statistic ξT∗ should only be used for
a small correlation in the range ρ ∈ [−0.2, 0.2]. In contrast, the statistics κ∗∗
                                                                               T and

ξT∗∗ turn out to be very robust against a correlation among xt and yt .

   Next, consider the small sample properties of the rank test for nonlinear coin-
tegration suggested in Section 5.4. It is assumed that yt and xt are cointegrated
so that yt − βf (xt ) is stationary. By setting α = 0.5 I generate serially correlated
errors and by letting ρ = 0.5, the variable xt is correlated with the errors ut ,
that is, xt is endogenous. The rank test for nonlinear cointegration is obtained by
regressing yt on xt , yt−1 , ∆xt+1 , ∆xt , ∆xt−1 and a constant. The score statistic is
computed as T · R2 from a regression of the residuals on the same set of regressors
and the ranks RT (xt ).
158                    CHAPTER 4. INFERENCE IN NONLINEAR MODELS

   To study the power of the tests I consider three different nonlinear functions.
As a benchmark I perform the tests using f (xt ) instead of the ranks RT (xt ). Of
course, using the true functional form, which is usually unknown in practice, the
test is expected to have better power than the test based on the ranks. Surpris-
ingly, the results of the Monte Carlo simulations (see Table 5.3) suggest that the
rank test may even be (slightly) more powerful than the parametric test, whenever
the nonlinear term enters the equation with a small weight (β = 0.01). However,
the gain in power is quite small and falls in the range of the simulation error. In
any case, the rank test performs very well and seems to imply no important loss
of power in comparison to the parametric version of the test.
4.5. SMALL SAMPLE PROPERTIES                                                       159

Nonlinear short run dynamics. Next, I consider the small sample properties of
nonparametric tests of Section 5.5 that were suggested to allow for nonlinear short
run dynamics. Four nonlinear processes are considered, where the assumptions of
the Dickey-Fuller test are violated. The first process it the bilinear process:

               (bilin): ∆yt = φεt−1 ∆yt−1 + εt .                                (4.25)

Note that the correlation between εt−1 and ∆yt−1 implies a linear time trend in
yt . The second process is a variable coefficient model of the form

              (VCM): ∆yt = αt ∆yt−1 + εt with αt = cos(2πt/T ) .                (4.26)

Kim (1999) shows that in such an “evolutionary model” the augmented Dickey-
Fuller test has a limiting distribution that is different from the distribution derived
in Dickey and Fuller (1979).
   Third, I consider a threshold autoregressive process given by
                              
                               y +ε
                                  t−1    t       for |εt | < 2σε
               (TAR): yt =                                       .              (4.27)
                               0.8y + ε
                                        t−1    t for |ε | ≥ 2σ
                                                          t       ε

The fourth process is a stochastic unit root process as considered in Granger and
Swanson (1997):

         (STUR): yt = αt yt−1 + εt with αt = 0.4 + 0.6αt−1 + ηt ,               (4.28)

where E(ε2t ) = 1 and E(ηt2 ) = 0.012 . Note that E(αt ) = 1.
   The empirical sizes computed from 10,000 realizations with T = 200 are pre-
sented in Table 5.4. All tests allow for a linear trend. For the TAR and STUR
model, the size bias of the ADF(1) test is very small and the variance ratio statis-
tic %T performs only marginally better. However, for the bilinear model and the
VCM model, the size bias of the ADF(1) test is more substantial. In these cases
the nonparametric statistic % performs much better.
   To investigate the properties of the nonparametric cointegration test I generate
data according to the “canonical” process (Toda 1994) with MA(1) errors
     "      # "          #"        # " # "              #"        #
       ∆y1t       φ1 0      y1,t−1     ε1t      0.5 0      ε1,t−1
             =                      +       −                       ,   (4.29)
       ∆y2t       0 φ2      y2,t−1     ε2t       0 0.5     ε2,t−1
160                    CHAPTER 4. INFERENCE IN NONLINEAR MODELS

where E(ε21t ) = E(ε22t ) = 1 and E(ε1t ε2t ) = θ. To test the hypothesis r = 1, I
let φ1 = 0 and φ2 = −0.2. Under the alternative I set φ1 ∈ {−0.05, −0.1, −0.2}.
Furthermore, I let θ = 0 and θ = 0.8 to investigate the impact of the error
correlation. The sample size is T = 200 and 10,000 samples are generated to
compute the rejection frequencies of the tests.
   For Johansen’s LR trace test, the process is approximated by a VAR[p] process,
where p is 4 and 12, respectively. The respective tests are denoted by LR(4) and
LR(12). Unrestricted constants are included in each equation. The nonparametric
test statistic is denoted by Λq and the critical values are taken from Table A.5.3 in
the appendix to this chapter. First, consider the results for testing H0 : q = r = 1
presented in Table 5.5. From the empirical sizes it turns out that for θ = 0, a
VAR[4] model is not sufficient to approximate the infinite VAR process, whereas
a VAR[12] approximation yields an accurate size. The nonparametric statistic Λq
possesses a negligible size bias, only. The power of Λq is substantially smaller than
the power of LR(4) but clearly higher than the power of LR(12). Similar results
apply for the tests letting θ = 0.8. However, the LR(12) statistic now possesses a
moderate size bias, whereas Λq is nearly unbiased. Moreover, the power of Λq is
closer to the (favorable) LR(4) statistic than in the case of θ = 0.
   We now turn to the test of H0 : r = 0. Under the null hypothesis the difference
of the variables are generated by a multivariate MA process. In this case, all three
test statistic are substantially biased, where the size bias does not depend on the
parameter θ. Although the size bias differs for the three tests, the differences are
moderate and some general conclusions with respect to the relative power of the
tests can be drawn. For θ = 0 and φ1 close to unity, the nonparametric test Λq
is slightly more powerful than the LR(4) test, whereas for φ1 = 0.8 the power of
LR(4) is slightly higher. Finally, the power of LR(12) is much smaller than the
power of the other two tests. For θ = 0.8 a different picture emerges. The relative
power of Λq drops substantially and for φ1 close to one, the power is even lower
than the power of the LR(12) test. The results for a model with a linear time
trend are qualitatively similar and are not presented here.
4.5. SMALL SAMPLE PROPERTIES                                                161




        Table 5.4: Empirical sizes for some nonlinear processes

             process                    ADF(1)                     %
                 bilin                   0.091                 0.046
                 VCM                     0.138                 0.072
                 TAR                     0.055                 0.053
                 STUR                    0.053                 0.051

         Note: The entries of the table display the empirical sizes com-
         puted from 10,000 replications of model (4.25) – (4.28). “bilin”
         is a bilinear process, “VCM” is a process with a structural
         changes in the short run dynamics, “TAR” is a threshold unit
         root process, and “STUR” is a stochastic unit root process.
         The sample size is T = 200 and the nominal size of the test is
         0.05.
162                       CHAPTER 4. INFERENCE IN NONLINEAR MODELS




                Table 5.5: Testing hypotheses on the cointegration rank

                                    H0 : r = 1 ,       φ2 = −0.2
 test statistic        φ1 = 0          φ1 = −0.05             φ1 = −0.10             φ1 = −0.20
      θ=0
        ΛT             0.059               0.346                  0.604                  0.853
      LR(4)            0.072               0.428                  0.894                  0.999
      LR(12)           0.048               0.180                  0.389                  0.636


      θ = 0.8
        ΛT             0.043               0.295                  0.566                  0.853
      LR(4)            0.057               0.310                  0.793                  0.999
      LR(12)           0.063               0.190                  0.382                  0.636
                                      H0 : r = 0 ,       φ2 = 0
 test statistic        φ1 = 0          φ1 = −0.05             φ1 = −0.10             φ1 = −0.20
      θ=0
        ΛT             0.107               0.300                  0.582                  0.900
      LR(4)            0.083               0.241                  0.558                  0.962
      LR(12)           0.094               0.166                  0.290                  0.506


      θ = 0.8
        ΛT             0.107               0.240                  0.508                  0.854
      LR(4)            0.083               0.511                  0.949                  1.000
      LR(12)           0.094               0.352                  0.581                  0.768

 Note: The entries of the table report the rejection frequencies based on 10,000 replications of
 model (4.29), where E(yt ) is constant.
4.6. EMPIRICAL APPLICATIONS                                                                  163

4.6         Empirical applications
The term structure of interest rates. The rank tests are applied to test for
a possible nonlinear cointegration between interest rates with different time to
maturity. Recent empirical work suggests that interest rates with a different time
to maturity are nonlinearly related.4 The data set consists of monthly yields of
government bonds with different time to maturity as published by the Deutsche
Bundesbank. The sample runs from 1967(i) through 1995(xii) yielding 348 monthly
observations for each variable.
      The nonlinear relationship between yields for different times to maturity can
be motivated as follows. Let rt denote the yield of a one-period bond and Rt
represents the yield of a two-period bond at time t. The expectation theory of
the term structure implies that

                               Rt = φt + 0.5rt + 0.5Et (rt+1 ) ,                          (4.30)

where Et denotes the conditional expectation with respect to the relevant infor-
mation set available at period t and φt represents the risk premium. Letting
rt+1 = Et (rt+1 ) + 2νt and subtracting rt from both sides of (4.30) gives

                             Rt − rt = 0.5(rt+1 − rt ) + φt + νt .

Assuming that rt is I(1) and φt + νt is stationary implies that Rt and rt are
(linearly) cointegrated (e.g. Wolters 1995). However, if the risk premium depends
on rt such that φt = f ∗ (rt ) + ηt with ηt stationary, then the yields are nonlinearly
cointegrated:
                                  Rt − f (rt ) = ut ∼ I(0) ,

where f (rt ) = rt +f ∗ (rt ) and ut = 0.5(rt+1 −rt )+ηt +νt . Note that ut is correlated
with rt and, therefore, rt is endogenous. Furthermore, if the sampling interval is
shorter than the time to maturity, then the errors are serially correlated even if
νt and ηt are white noise.
  4
      See, e.g., Campbell and Galbraith (1993), Pfann et al. (1996), and the reference therein.
164                         CHAPTER 4. INFERENCE IN NONLINEAR MODELS

   To test whether interest rates possess a (nonlinear) cointegration relationship
various tests for unit roots are applied first. Neither the conventional Dickey-
Fuller t-test nor the ranked counterpart discussed in Section 5.2 reject the null
hypothesis that the interest rates are I(1) (not presented).
   The results presented in Table 5.6 highlight the cointegration properties of
yields with different time to maturity. The parametric as well as the rank tests
indicate a cointegration relationship between the short term bonds, while the
evidence for cointegration between short run and long run bonds (e.g. R1 and
R10) is much weaker. Furthermore, the rank test for nonlinear cointegration
(“nonlin”) does not reveal any evidence against a linear cointegration relationship.
All values of the test statistic suggested in Section 5.4 are much smaller than the
critical value of 3.84. This result suggests that a linear version of the expectation
theory for the term structure yields an appropriate description of the long run
relationship between interest rates with different time to maturity.




                  Table 5.6: The cointegration relationship with R1

      Var.      CDF           QT [1]∗          κ∗∗
                                                T            ξT∗∗        ρR
                                                                          T        nonlin
      R2      –4.138∗         0.010∗          0.407        0.017∗      0.893        0.003
      R3      –3.591∗         0.014∗          0.405         0.022      0.808        0.012
      R4      –3.373∗         0.016∗          0.404         0.023      0.730        0.034
      R5       –3.213         0.018∗          0.413         0.025      0.678        0.107
      R10      –2.702          0.025          0.498         0.033      0.582        0.489

      Note: “CDF” denotes the Dickey-Fuller t-test applied to the residuals of the cointe-
      gration regression. ΞT [1]∗ is the two-sided test statistic given in (4.14) and κ∗∗
                                                                                       T and

      ξT∗∗ are defined in (4.13). “nonlin” indicates the test for nonlinearity using the ranks
      as additional regressors, and ρR
                                     T is the correlation coefficient between the differences

      of the rank sequences. “*” indicates significance at the 0.05 significance level.
4.6. EMPIRICAL APPLICATIONS                                                        165

The relationship between dual-class shares. In an early paper on cointe-
gration Granger (1986, p. 218) states that “[i]f xt , yt are a pair of prices from
a jointly efficient, speculative market, they cannot be cointegrated.” The reason
is that whenever two variables are cointegrated, there exists an error correction
representation so that at least one variable can be forecasted by using the lagged
error correction term.

   Recently, however, this statement was called into question in a number of
studies. For example, Kasa (1992) finds evidence for common stochastic trends
(and thus of cointegration) in international stock markets. Kehr (1997) shows
that stock prices traded at different regional markets in Germany are cointegrated
and Krämer (1999) and Dittmann (1998) find (fractional) cointegration between
different classes of stocks of the same or very similar German companies.

   These conflicting views of the efficient market hypothesis can be resolved by as-
suming a nonlinear error correction mechanism (ECM). The idea is that small de-
viations from the long run relationship are not predictable as claimed by Granger
(1986). If the deviations become large, however, an effective adjustment process
prevents stock prices of fundamentally related assets from drifting too far away.
The economic reason behind such a nonlinear adjustment process is that transac-
tion costs make it unprofitable to exploit small deviations from the fundamental
relationship. When undervaluation (or overvaluation) becomes more substantial,
agents will buy (or sell) the respective assets until the fundamental relationship is
re-established. This reasoning naturally leads to a nonlinear version of the error
correction model (e.g. Escribano and Mira 1998).

   We apply a variety of cointegration tests to time series data of pairs of Ger-
man voting and non-voting shares issued by the same firm (dual-class firm). Daily
stock price data adjusted for stock splits, dividends and other corporate events
are from the “Deutsche Finanzdatenbank” (DFDB) in Karlsruhe. We use loga-
rithms of stock prices in our statistical analysis. According to the criteria liquidity
and availability of long time series, a sample of 6 dual-class firms is chosen for
examination. Among those four are contained in the index of the 30 largest Ger-
man blue-chip stocks (DAX), the remaining two are in the German mid-cap index
166                    CHAPTER 4. INFERENCE IN NONLINEAR MODELS

MDAX. In Table 5.7 the sample is further described.

   German corporate law requires that holders of non-voting shares must be com-
pensated for the lack of corporate control by a dividend advantage. This usually
takes the form of a minimum preferred dividend (stated as percentage of par value)
which will be carried forward in particular years of dividend omissions (cumula-
tive preferred dividend). Both the cumulative (past) preferred dividends and the
current preferred dividends have to be paid out before the common shareholders
can receive anything. In addition some firms commit themselves to pay the non-
voting shareholders a certain (non-cumulative) amount in excess of the common
stock dividend.

   To test for (linear) cointegration I first compute the augmented Dickey-Fuller
(ADF) and Phillips-Perron (PP) test applied to the residuals of a OLS cointe-
grating regression (cf. Phillips and Ouliaris 1990). For the ADF test ten lagged
differences and a constant are included in the regression. The truncation lag for
the Phillips-Perron test on the residuals is set to 20. Using these tests, only a weak
evidence for cointegration is found for RWE, and RHM (see Table 5.8), whereas in
the other cases, the null hypothesis of no cointegration is rejected at a significance
level of 0.05. Applying Johansen’s (1988) likelihood-ratio test procedure based on
a VAR[10] model with a constant restricted to the cointegration relationship gives
a slightly different picture. This test finds a cointegration relationship for RWE,
MAN and BMW. In the remaining cases, the LR statistics are insignificant.

   An important problem is, however, that these test procedures are based on the
assumption of a linear process and thus may be problematical in applications using
financial time series data. Applying the nonparametric test statistic suggested in
Section 5.5, the evidence for cointegration decrease substantially. Only for BMW
the test clearly points to a cointegration relationship. For RHM a cointegration
relationship is found at the 0.05 significance level but not on the 0.01 significance
level. The diminished evidence may be due to an improved robustness against
nonlinear short run dynamics. However, it may also be due to a lack of power
compared to the parametric counterparts.

   Interestingly, the rank tests for cointegration unambiguously reject the hypoth-
4.6. EMPIRICAL APPLICATIONS                                                                167

esis of no cointegration. This may be the result of a structural instability of the
cointegration relationships, that may be represented by a nonlinear cointegration
relationship. In fact, as shown by Breitung and Wulff (1999), there is a strong
evidence for structural changes in RWE, MAN, BMW, and BOSS. Furthermore,
tests for nonlinearity in the error correction mechanism suggest that the stock
prices of MAN, RHM and BOSS indeed react nonlinearly to a deviation to the
long run relationship in the previous period.




                     Table 5.7: Details of the dual-class shares

     Firm         Abbrev. No. obs.             Sample range            Index      Div. adv.
     RWE           RWE           5894        1/2/74 – 7/31/97          DAX          5/–
     MAN           MAN           5588       4/24/75 – 7/31/97          DAX          4/–
    BMW            BMW           1983       8/25/89 – 7/31/97          DAX          2/–
 Volkswagen         VW           2706       10/6/86 – 7/31/97          DAX          4/2
 Rheinmetall       RHM           3182      10/31/84 – 7/31/97 MDAX                  6/2
     Boss          BOSS          2052       5/22/89 – 7/31/97         MDAX          3/3

 Note: Dividend advantage (“Div. adv.”) is expressed in percent of par value, whereby the
 first figure indicates the minimum dividend and the excess dividend is given after the slash.
168                       CHAPTER 4. INFERENCE IN NONLINEAR MODELS




         Table 5.8: Cointegration tests for voting and non-voting stocks

 Test        RWE           MAN             BMW             VW            RHM            BOSS
 ADF         –3.197       –5.638∗∗        –6.641∗∗       –3.551∗        –2.824         –3.812∗
  PP        –3.744∗       –8.707∗∗        –11.19∗∗      –4.139∗∗       –3.517∗         –5.701∗∗
  LR         21.42∗        36.21∗∗        47.14∗∗         15.87          17.78           18.52
   Λ         94.15          236.6         501.38∗∗        83.53        340.91∗           302.6
 RDF       –22.47∗∗       –15.43∗∗        –10.74∗∗      –6.859∗∗       –7.219∗∗        –9.380∗∗
 Rdiff     0.0005∗∗       0.0011∗∗        0.0024∗∗       0.0058∗       0.0047∗∗         0.0030

 Note: “ADF” denotes the augmented Dickey-Fuller test including 10 lagged differences and
 a constant. “PP” is the unit root test of Phillips and Perron (1988) applied to the residuals
 of the cointegration regression. “LR” is Johansen’s trace statistic for the hypothesis that the
 cointegration rank is zero. Λ is the nonparametric test for cointegration. “RDF” is rank tests
 for cointegration as suggested by Granger and Hallman (1991) and “Rdiff” is the statistic ξT
 as defined in (4.8). ∗ and ∗∗ indicate significance with respect to the 0.05 and 0.01 significance
 level, respectively.
4.7. APPENDIX: CRITICAL VALUES                                          169

4.7   Appendix: Critical values




          Table A.5.1: Critical values for the rank statistics

             T            0.10            0.05             0.01
              κ          0.644            0.552            0.422
              ξ          0.057            0.042            0.024
             κ∗          0.394            0.364            0.316
             ξ∗          0.023            0.019            0.013
           Ξ∗ [1]        0.025            0.020            0.014
           Ξ∗ [2]        0.020            0.016            0.012
           Ξ∗ [3]        0.016            0.014            0.010
           Ξ∗ [4]        0.014            0.012            0.009
           Ξ∗ [5]        0.012            0.010            0.008
           Ξ∗ [6]        0.010            0.009            0.008

           Note: Critical values computed from 10,000 realizations of
           independent random walk sequences with T = 500.
170              CHAPTER 4. INFERENCE IN NONLINEAR MODELS




      Table A.5.2: Critical values for T −1 %T statistic (%T )

             T         0.1             0.05              0.01
                              mean adjusted
            100      0.01435         0.01004           0.00551
            250      0.01433         0.01003           0.00561
            500      0.01473         0.01046           0.00536
                              trend adjusted
            100      0.00436         0.00342           0.00214
            250      0.00442         0.00344           0.00223
            500      0.00450         0.00355           0.00225

            Note: The hypothesis of a unit root process
            is rejected if the test statistic falls below the
            respective critical values reported in this table.
4.7. APPENDIX: CRITICAL VALUES                                         171




                     Table A.5.3: Critical values for Λq

           q0 = n − r 0        0.1            0.05            0.01
                                mean adjusted
                 1            67.89          95.60            185.0
                 2            261.0          329.9            505.8
                 3            627.8          741.1            1024
                 4            1200            1360            1702
                 5            2025            2255            2761
                 6            3177            3460            4045
                 7            4650            5049            5905
                 8            6565            7061            8032
                                trend adjusted
                 1            222.4          281.1            443.6
                 2            596.2          713.3            976.1
                 3            1158            1330            1689
                 4            1972            2184            2699
                 5            3107            3429            4120
                 6            4572            4954            5780
                 7            6484            6984            8012
                 8            8830            9388           10714

           Note: The hypothesis r = r0 is rejected if the test
           statistic exceeds the respective critical value. The sim-
           ulation are based on a sample size of T = 500.
172   CHAPTER 4. INFERENCE IN NONLINEAR MODELS
Chapter 5

Conclusions and outlook

The previous chapters give an account of recent research in multiple time se-
ries analysis that intends to bridge the gap between reduced form VAR models
used in Johansen’s (1995) work and structural models based on sets of simultane-
ous equations advocated by the influential Cowles commission. A variant of this
methodology was developed by Sims (1986) and others who suggest to impose
restrictions on the covariance matrix of the errors in order to identify macroe-
conomic shocks. The latter approach became recently very popular and plays a
dominating role during the last few years. It was argued that the structural frame-
work is able to account for the cointegration properties of the data so that the long
run relationship of the variables can be given a structural interpretation. This is
an important advantage over the (reduced form) cointegration analysis that can
only indicate some stationary linear combination of the variables. Whether the
observed long run relationship is a “money demand schedule” or a ”money supply
schedule” or a mixture of both cannot be decided without imposing additional
assumption needed to identify the structure.
   It is sometimes argued (see e.g. Möller 1993) that it does not make sense to
attach the usual structural interpretation to the long run solution of a system
because the variables in a long run relationship cannot be qualified as dependent
and predetermined variables. This is indeed correct as long as the short run
dynamics of the system are left unspecified. However, if the dynamic structure

                                        173
174                            CHAPTER 5. CONCLUSIONS AND OUTLOOK

(that is the long and short run parameters) is identified appropriately, the error
correction representation is a particular reformulation of the structural model and
structural inference applies in the usual way (Hsiao 1997).

   If the errors of the system are identified as economic shocks, it is attractive to
impose cointegration relationships as it allows to qualify shocks to be transitory
or permanent. For example, it is often assumed that demand shocks affect real
quantities only in the short run, whereas supply shocks may have a permanent
effect on variables like output and unemployment. As demonstrated in Chapter 3,
such assumptions can easily be imposed in a structural cointegrated VAR model.
Using impulse response analysis the dynamic effects of structural stocks on the
variables of interest can be studied.

   To discuss the alternative approaches to draw structural inference from linear
dynamic models it was assumed that sufficient identifying restrictions can be de-
rived from economic theory so that the remaining problem is how to impose these
assumptions on the cointegrated VAR system. In many applications, however,
economic theory gives only a vague motivation of some structural properties but
the initial enthusiasm that fully specified models can be derived from some basic
assumptions on optimizing agents under limited resources is unwarranted. Usu-
ally, economic theory is not a “sharp theory” in the sense that it attach a prior
probability of one to a single structure and a probability of zero to all other struc-
tures (see also Leamer 1983). Rather, theoretical reasoning suggests that some
specifications are more plausible than others. Empirical work should therefore
start with specifications that correspond best to the preferred theoretical model
and try out other specifications that are similarly plausible.

   Such a “robustness analysis” is often encountered in practice (for example
Bernanke and Mihow 1997, Cochrane 1998, Rudebush 1998). Although it is
clearly desirable to have robust results for the range of all possible specifications
it is questionable to claim that robustness of the results is a necessary condition
for a credible empirical finding (e.g. Cooley and Dwyer 1998). First, it does not
seem sensible to claim for a “robust” judgement in the sense that it is always
be compatible with the addresses to the jury delivered from both the prosecutor
                                                                                 175

and the defense counsel. Of course the judge is in a comfortable position if the
prosecutor and the defense counsel demand for the same judgement but it is unre-
alistic to claim that this should always be the case. Second, a result that is robust
against a change in the assumptions may simply demonstrate that the assump-
tions are uninformative. Why should we confine ourselves to use uninformative
assumptions?
   In many cases theoretical considerations give rise to a particular structural as-
sumption but is silent about other aspects of the model that have to be specified as
well. For example, (keynesian) money demand theory states that money demand
depends on output and interest rates so that an increase in output has a positive
effect on money demand, whereas a raise in interest rates leads to a decrease in
the desired monetary base. For a dynamic analysis of the relationship between
money, output and interest rates, we need further structural assumptions on the
effect of interest rates on output (such as an IS-schedule) and an equation with
interest rates as the dependent variable (e.g. a money supply function). Hence,
the structural system employs quite different theoretical ingredients that may in-
teract in a complex way. Indeed, as argued forcefully by Sims (1980), the theory
of rational expectation implies that it does not make sense to specify structural
elements of the system in isolation. On the other hand, theoretical models that
try to model the all aspects of economic behaviour jointly are difficult to handle
and yield structural models with nonlinear cross-equation constraints (see, e.g.,
Wickens 1982) that are not considered in this thesis. Future work should therefore
allow for more complex specifications. Examples for current research in that field
are Johansen and Swensen (1999) and Kozicki and Tinsley (1988).
176   CHAPTER 5. CONCLUSIONS AND OUTLOOK
Bibliography

Amemiya, T. and R.Y. Wu (1972), The Effect of Aggregation on Prediction in
    the Autoregressive Model, Journal of the American Statistical Association,
    339, 628-632.

Amisano, G. and C. Giannini (1997), Topics in Structural VAR Econometrics,
    2nd ed., Berlin: Springer.

Balke, N.S. and T.B. Fomby (1997), Threshold Cointegration, International Eco-
    nomic Review, 38, 627–645.

Benkwitz, A., Lütkepohl, H., Neumann, M.H. (1999), Problems Related to Con-
    fidence Intervals for Impulse Responses of Autoregressive Processes. Econo-
    metric Reviews, forthcoming.

Bernanke, B.S. und H. Mihov (1997), What does the Bundesbank Target?, Euro-
    pean Economic Review, 41, 1025–1053.

Bewley, R. and D. Orden (1994), Alternative Methods for Estimating Long-Run
    Responses With Applications to Australian Import Demand, Econometric
    Reviews, 13, 179–204.

Bewley, R. and M. Yang (1995), Tests for Cointegration Based on Canonical
    Correlation Analysis, Journal of the American Statistical Association, 90,
    990–996.

Bierens, H.J. (1997a), Testing the Unit Root With Drift Hypothesis Against Non-
    linear Trend Stationarity, With an Application to the US price Level and
    Interest Rate, Journal of Econometrics, 81, 29–64.

                                     177
178                                                             BIBLIOGRAPHY

Bierens, H.J. (1997b), Cointegration Analysis, in: C. Heij, H. Schumacher, B.
      Hanzon, and C. Praagman (eds), System Dynamics in Economic and Finan-
      cial Models, New York: John Wiley.

Blanchard, O.J (1989), A Traditional Interpretation of Macroeconomic Fluctua-
      tions, American Economic Review, 79, 1146–1164.

Blanchard, O.J. and D. Quah (1989), The Dynamic Effects of Aggregate Supply
      and Demand Disturbances, American Economic Review, 79, 655–673.

Bossaerts, P. (1988), Common Nonstationary Components of Asset Prices, Jour-
      nal of Economic Dynamics and Control 12, 347–364.

Boswijk, H.P. (1995), Identifiability in Cointegrated Systems, Paper presented at
      the 7th World Congress of the Econometric Society, Tokyo 1995.

Boswijk, H.P. (1996), Testing Identifiability of Cointegration Vectors, Journal of
      Business & Economic Statistics, 14, 153–160.

Boswijk, H.P. and J.-P. Urbain (1997), Lagrange-Multiplier Tests for Weak Exo-
      geneity: A synthesis, Econometric Review, 16, 21–38.

Box, G.E.P. and G.M. Jenkins (1970), Time Series Analysis, Forecasting and
      Control, San Francisco: Holden Day.

Breitung, J. (1995a), A Simultaneous Equations Approach to Cointegrated Sys-
      tems, SFB 373 Discussion Paper No. 46/1995, Humboldt University Berlin

Breitung, J. (1995b), Modified Stationarity Tests With Improved Power in Small
      Samples, Statistical Papers, 36, 77–95.

Breitung, J. (1998), Canonical Correlation Statistics for Testing the Cointegration
      Rank in a Reversed Order, SFB 373 Discussion Paper No. 105/1998.

Breitung, J. and C. Gouriéroux (1997), Rank tests for Unit Roots, Journal of
      Econometrics, 81, 7-28.
BIBLIOGRAPHY                                                                  179

Breitung, J. and M. Heinemann (1998), Short Run Comovement, Persistent
    Shocks and the Business Cycle, Jahrbücher für Nationalökonomie und Statis-
    tik, 436–448.

Breitung, J. and C. Wulff (1999), Nonlinear Error Correction and the Efficient
    Market Hypothesis: The Case of German Dual-Class Shares, SFB 373 Dis-
    cussion Paper No. 67/1999.

Breitung, J., F. Haslinger and M. Heinemann (1993), Ist die Makroökonomik eine
    wissenschaftliche Illusion?, Ökonomie und Gesellschaft, 10, 150–203.

Brewer, K.R.W. (1973), Some Consequences of Temporal Aggregation and Sys-
    tematic Sampling for ARMA and ARMAX Models, Journal of Econometrics,
    1, 133-154.

Burridge, P. and E. Guerre (1996), The Limit Distribution of Level Crossings
    of a Random Walk and a Simple Unit Root Test, Econometric Theory, 12,
    705–723.

Caporale, G.M. and N. Pittis (1999), Efficient Estimation of Cointegrating Vectors
    and Testing for Causality in Vector Autoregressions, Journal of Economic
    Surveys, 13, 1–35.

Campbell, B. and J.W. Galbraith (1993), Inference in Expectations Models of
    the Term Structure: A non-parametric approach, Empirical Economics 18,
    623–638.

Choi, I. (1994), Residual-Based Tests for the Null of Stationarity With Applica-
    tions to U.S. Macroeconomic Time Series, Econometric Theory, 10, 720–746.

Choi, I. and B.C. Ahn (1995), Testing for Cointegration in Systems of Equations,
    Econometric Theory, 11, 952–983.

Choi, I. and B.C. Ahn (1999), Testing the Null of Stationarity for Multiple Time
    Series, Journal of Econometrics, 88, 41–77.
180                                                             BIBLIOGRAPHY

Christiano and Eichenbaum (1987), Temporal Aggregation and Structural Infer-
      ence in Macroeconomics, Carnegie-Rochester Conference Series on Public
      Policy, 26, 63–130.

Christiano, L. and M. Eichenbaum (1992), Current Real-Business-Cycle Theories
      and Aggregate Labour-Market Fluctuations, American Economic Review, 82,
      430–450.

Clarida, R. and M. Gertler (1996), How the Bundesbank Conducts Monetary
      Policy, NBER Working Paper No. 5581.

Clemens, M.P. and G.E. Mizon (1991), Empirical Analysis of Macroeconomic
      Time Series: VAR and structural models, European Economic Review, 35,
      887–932.

Cochrane, J.H. (1998), What do the VARs mean? Measuring the Output Effects
      of Monetary Policy, Journal of Monetary Economics, 41, 277–300.

Cogley, T. and J.M. Nason (1995), Output Dynamics in Real-Business-Cycle Mod-
      els, American Economic Review, 85, 492–511.

Cooley, T.F. and M. Dwyer (1998), Business Cycle Analysis Without Much The-
      ory: A Look at Structural VARs, Journal of Econometrics, 83, 57–88.

Cooley, T.F. and S.F. LeRoy (1985), Atheoretical Macroeconometrics: A Critique,
      Journal of Monetary Economics, 16, 283–308.

Corradi, V. (1995), Nonlinear Transformations of Integrated Time Series: A re-
      consideration, Journal of Time Series Analysis, 16, 537–549.

Crowder, W.J. (1995), The Dynamic Effects of Aggregate Demand and Supply
      Disturbances: Another look, Eonomics Letters, 49, 231–237.

Cuthbertson, K. and M.P. Taylor (1989), Anticipated and Unanticipated Variables
      in the Demand for M1 in the U.K., Manchester School, 57, 319–339.

Davidson, J. (1998), Structural Relations, Cointegration and Identification: Some
      simple results and their application, Journal of Econometrics, 87, 87-113.
BIBLIOGRAPHY                                                                 181

Davidson, J. and S. Hall (1991), Cointegration in Recursive Systems, Economic
    Journal, 101, 239–251.

Dickey, D.A. and W.A. Fuller (1979), Distribution of the Estimates for Autore-
    gressive Time Series With a Unit Root, Journal of the American Statistical
    Association 74, 427–431.

Dickey, D.A. and S.G. Pantula (1987), Determining the Order of Differencing in
    Autoregressive Processes, Journal of Business and Economic Statistics, 5,
    455–461.

Dittmann, I. (1998), Fractional Cointegration of Voting and Non-Voting Shares,
    Discussion Paper, Universität Dortmund, Nr. 98-02.

Dolado, J.J. (1992), A Note on Weak Exogeneity in VAR Cointegrated Models,
    Econometric Letters, 38, 139–143.

Dolado, J.J., J.D. Lopez-Salido, and J.L. Vega (1999), Spanish Unemployment
    and Inflation Persistence: Are there Phillips Trade-offs?, Spanish Economic
    Review, forthcoming.

Dhrymes, P. and D.D. Thomakos (1998), Structural VAR, MARMA, and Open
    Economy Models, International Journal of Forecasting, 14, 187–198.

Dufour, J.-M. and E. Renault (1998), Short Run and Long Run Causality in Time
    Series: Theory, Econometrica, 66, 1099–1126.

Dwyer, M. (1998), Impulse Response Priors for Discriminating Structural Vector
    Autoregressions, Woking Paper, Los Angeles.

Elliot, G., T.J. Rothenberg and J.H. Stock (1996), Efficient Tests for an Autore-
    gressive Unit Root, Econometrica, 813–836.

Engle, R.F. (1969), Biases from Time-Aggregation of Distributed Lag Models,
    Ph.D. Dissertation, Cornell University.

Engle, R.F. and C.W.J. Granger (1987), Co-integration and Error Correction:
    Representation, Estimation, and Testing, Econometrica, 55, 251-276.
182                                                              BIBLIOGRAPHY

Engle, R.F. and B.S. Yoo (1991), Cointegrated Economic Time Series: An
      Overview with New Results, in: Fomby, T.B. and G.F. Rhodes (eds.),
      Advances in Econometrics: Co-Integration, Spurious Regression, and Unit
      Roots, Greenwich: JAI Press, 237–266.

Engle, R.F., D.F. Hendry, and J.-F. Richard (1983), Exogeneity, Econometrica,
      51, 277–304.

Escribano, A. and S. Mira (1998), Nonlinear Cointegration and Error Correction,
      Working paper, Department of Statistics and Econometrics, Universidad Car-
      los III de Madrid.

Faust, J. (1998), The Robustness of Identified VAR Conclusions about Money,
      Carnegie-Rochester Conference Series on Public Policy, 49, 207–244.

Faust, J. and E.M. Leeper (1997), When do Long-Run Identifying Restrictions
      Give Reliable Results?, Journal of Business and Economic Statistics, 15,
      345–352.

Fisher, F.M. (1966), The Identification Problem in Econometrics, New York:
      McGraw-Hill.

Fountis, N.G. and D.A. Dickey (1989), Testing for a Unit Root Nonstationarity
      in Multivariate Autoregressive Time Series, 17, 419–428.

Franses, P.H. and McAlleer, M. (1998), Testing for Unit Roots and Nonlinear
      Transformations, Journal of Time Series Analysis, 19, 147–164.

Fung, B. S. and M. Kasumovich (1998), Monetary Shocks in the G-6 Countries:
      Is there a Puzzle?, Journal of Monetary Economics, 42, 575–592.

Gali, J. (1992), How Well Does the IS-LM Model Fit Postwar U.S. Data?, Quar-
      terly Journal of Economics, 709–738.

Gallant, A.R. (1981), Unbiased Determination of Production Technologies, Jour-
      nal of Econometrics, 30, 149–169.
BIBLIOGRAPHY                                                                 183

Gallant, A.R. and H. White (1988), A Unified Theory of Estimation and Inference
    for Nonlinear Dynamic Models, Oxford: Basil Blackwell.

Garratt, A., K. Lee, M.H. Pesaran, and Y. Shin (1999), A Structural Cointegrating
    VAR Approach to Macroeconometric Modelling, mimeo.

Geweke, J. (1986), Measurement of Linear Dependence and Feedback Between
    Multiple Time Series, Journal of American Statistical Association, 77, 304–
    313.

Gonzalo, J. (1994), Five Alternative Methods of Estimation Long-run Equilibrium
    Relationships, Journal of Econometrics, 60, 203–233.

Gordon, S. and D. Boccanfuso (1998), What Can We Learn from Structural Vector
    Autoregression Models, Université Laval, Canada, mimeo.

Gordon, D.B. and E.M. Leeper (1994), The Dynamic Impacts of Monetary Policy:
    An Exercise in Tentative Identification, Journal of Political Economy, 102,
    1228–1247.

Granger, C.W.J. (1969), Investigating Causal Relations by Econometric Models
    and Cross Spectral Methods, Econometrica, 37, 428-438.

Granger, C.W.J. (1980), Testing for Causality, A Personal Viewpoint, Journal of
    Economic Dynamics and Control, 2, 329-352.

Granger, C.W.J. (1981), Some Properties of Time Series Data and their Use in
    Econometric Model Specification, Journal of Econometrics, 16, 121–130.

Granger, C.W.J. (1986), Developments in the Study of Co-integrated Economic
    Variables, Oxford Bulletin of Economics and Statistics, 48, 213–228.

Granger, C.W.J. (1988), Some Recent Developments in a Concept of Causality,
    Journal of Econometrics, 39, 199-211.

Granger, C.W.J. (1995), Modelling Nonlinear Relationships Between Extended-
    memory Variables, Econometrica, 63, 265–279.
184                                                             BIBLIOGRAPHY

Granger, C.W.J. and J. Hallman (1991a), Long Memory Processes With Attrac-
      tors, Oxford Bulletin of Economics and Statistics, 53, 11–26.

Granger, C.W.J. and J. Hallman (1991b), Nonlinear Transformations of Inte-
      grated Time Series, Journal of Time Series Analysis, 12, 207–224.

Granger, C.W.J. and N.R. Swanson (1997), An Introduction to Stochastic Unit-
      Root Processes, Journal of Econometrics, 80, 35–62.

Granger, C.W.J., and J.-L. Lin (1995), Causality in the Long Run, Econometric
      Theory, 11, 530-536.

Granger, C.W.J. and T. Teräsvirta (1993), Modelling Nonlinear Economic Rela-
      tionships, Oxford: Oxford University Press.

Granger, C.W.J., T. Inoue and N. Morin (1997), Nonlinear Stochastic Trends,
      Journal of Econometrics, 81, 65–92.

Granger, C.W.J. and P. Newbold (1977), Forecasting Economic Time Series, New
      York: Academic Press.

Grenander, U. and M. Rosenblatt (1957), Statistical Analysis of Stationary Time
      Series, New York: John Wiley.

Haavelmo, T. (1944), The Probability Approach in Econometrics, Econometrica,
      12, 1–118, Supplement.

Haldrup, N. (1994), The Asymptotics of Single-Equation Cointegration Regres-
      sions with I(1) and I(2) Variables, Journal of Econometrics, 63, 153–181.

Hamilton, J.D. (1994), Time Series Analysis, Princeton: Princeton University
      Press.

Harris, D. (1997), Principal Components Analysis of Cointegrated Time Series,
      Econometric Theory, 13, 529–557.
BIBLIOGRAPHY                                                                185

Harris, D. and B. Inder (1994), A Test of the Null Hypothesis of Cointegration,
    in: C.P. Hargreaves (ed.), Nonstationary Time Series Analysis and Cointe-
    gration, Oxford: Oxford University Press, 133–152.

Harbo, I., S. Johansen, B. Nielsen, A. Rahbek (1998), Asymptotic Inference on
    Cointegrating Rank in Partial Systems, Journal of Business & Economic
    Statistics, 16, 388–399.

Hartley, P.R. and C.E. Walsh (1992), A Generalized Method of Moments Ap-
    proach to Estimating a Structural Vector Autoregression, Journal of Macroe-
    conomics, 14, 199–232.

Haug, A. (1996), Tests for Cointegration: A Monte Carlo Comparison, Journal of
    Econometrics, 71, 89–115.

Heckman, J.L. (1999), Causal Parameters and Policy Analysis in Econometrics:
    A twentieth century retrospective, NBER Working Paper No. 7333.

Hendry, D.F. and G.E. Mizon (1983), Evaluating Dynamic Econometric Models
    by Encompassing the VAR, in: P.C.B. Phillips (ed.) Models, Methods and
    Applications of Econometrics: The XXth anniverary of CORE, Cambridge
    (MA): MIT Press.

Hoffman, D.L. and R.H. Rasche (1996), Aggregate Money Demand Functions,
    Boston: Kluwer.

Holly, A. (1988), Specification Tests: an overview, in: T.F. Bewley, Fifth World
    Congress, Vol 1, p. 59–97.

Hood, W.C. and T.C. Koopmans (1953), Studies in Econometric Method, New
    York: John Wiley.

Horvath, M.T.K. and M.W. Watson (1995), Testing for Cointegration When Some
    of the Cointegrating Vectors are Prespecified, Econometric Theory, 11, 984–
    1014.
186                                                              BIBLIOGRAPHY

Hsiao, C. (1983), Identification, in: Z. Griliches and M.D. Intriligator (eds), Hand-
      book of Econometrics, Vol. 1., Amsterdam: North-Holland.

Hsiao, C. (1997), Cointegration and Dynamic Simultaneous Equation Models,
      Econometrica, 65, 647–670.

Hubrich, K., H. Lütkepohl, and P. Saikkonen (1998), A Review of System Coin-
      tegration Tests, Humboldt-University Berlin, SFB 373 Working Paper, No.
      101/1998.

Inder, B. (1995), Finite Sample Arguments for Appropriate Estimation of Coin-
      tegrating Vectors, Discussion Paper, Monash University, Australia.

Jöreskog, K.G. (1969), A General Approach to Confirmatory Factor Analysis,
      Psychometrika, 34, 183–202.

Jöreskog, K.G. and D. Sörbom (1993), LISREL 8: User’s Reference Guide, Scien-
      tific Software International, 1525 East 53rd Street, Chicago, Illinois 60615.

Johansen, S. (1988), Statistical Analysis of Cointegration Vectors, Journal of Eco-
      nomic Dynamics and Control, 12, 231–254.

Johansen, S. (1991), Estimation and Hypothesis Testing of Cointegration Vectors
      in Gaussian Vector Autoregressive Models, Econometrica, 59, 1551–1580.

Johansen, S. (1992a), Determination of Cointegration Rank in the Presence of a
      Linear Time Trend, Oxford Bulletin of Economics and Statistics, 54, 383–397.

Johansen, S. (1992b), Testing Weak Exogeneity and the Order of Cointegration
      in UK Money Demand Data, Journal of Policy Modeling, 14, 313–334.

Johansen, S. (1994), The Role of the Constant and Linear Terms in Cointegration
      Analysis of Nonstationary Variables, Econometric Reviews, 13, 205–229.

Johansen, S. (1995a), Likelihood-based Inference in Cointegrated Vector Autore-
      gressive Models, Oxford: University Press.
BIBLIOGRAPHY                                                                  187

Johansen, S. (1995b), Identifying Restrictions of Linear Equations With Applica-
    tions to Simultaneous Equations and Cointegration, Journal of Econometrics,
    69, 111-132.

Johansen, S. (1995c), A Statistical Analysis of Cointegration for I(2) Variables,
    Econometric Theory, 11, 25–59.

Johansen, S. and K. Juselius (1990), Maximum Likelihood Estimation and Infer-
    ence on Cointegration – With applications to the demand for money, Oxford
    Bulletin of Economics and Statistics, 52, 169–210.

Johansen, S. and K. Juselius (1992), Structural Tests in a Multivariate Cointe-
    gration Analysis of the PPP and the UIP for UK, Journal of Econometrics,
    53, 211-244.

Johansen, S. and K. Juselius (1994), Identification of the Long-Run and the Short-
    Run Structure: An application to the ISLM model, Journal of Econometrics,
    63, 7–36.

Judge, G.G., R.C. Hill, W.E. Griffiths, H. Lütkepohl, and T.-C. Lee (1988), In-
    troduction to the Theory and Practice of Econometrics, 2. ed., New York:
    Wiley.

Juselius, K. (1993), VAR Modelling and Haavelmo’s Probability Approach to
    Macroeconomic Modelling, Empirical Economics, 18, 595–622.

Juselius, K. (1998), A Structured VAR for Denmark Under Changing Monetary
    Regimes, Journal of Business & Economic Statistics, 16, 400–411.

Kasa, K. (1992), Common Stochastic Trends in International Stock Markets, Jour-
    nal of Monetary Economics, 29, 95–124.

Kedem, B. (1980), Binary Time Series, New York: Marcel Dekker.

Kehr, L.-H. (1997), Preisfindung bei verteilter Börsenstruktur, Wiesbaden: DUV.

Kendall, M. and J.D. Gibbons (1990), Rank Correlation Methods, London: Ed-
    ward Arnold.
188                                                              BIBLIOGRAPHY

King, R.G., C.I. Plosser, J.H. Stock and M.W. Watson (1991), Stochastic Trends
      and Economic Fluctuations, The American Economic Review, 81, 819–840.

King, R. and M. Watson (1997), Testing Long-Run Neutrality, Federal Reserve
      Bank of Richmond, Economic Quarterly, 83, 69–101.

Krämer, W. (1997), Kointegration von Aktienkursen, Universität Dortmund,
      mimeo.

Kydland, F.E. and E.C. Prescott (1982), Time to Build and Aggregate Fluctua-
      tions, Econometrica, 50, 1345–1370.

Kwiatkowski, D., P.C.B. Phillips, P. Schmidt, and Y. Shin (1992), Testing the Null
      Hypothesis of Stationary Against the Alternative of a Unit Root: How sure
      are we that economic time series have a unit root?, Journal of Econometrics
      54, 159–178.

Leamer, E.E. (1983), Let’s Take the Con Out of Econometrics, American Eco-
      nomic Review, 73, 31–43.

Lee T.-H., White H., Granger C.W.J. (1993), Testing for Neglected Nonlinear-
      ity in Time Series Models: A comparison of neural network methods and
      alternative tests, Journal of Econometrics, 56, 269–290.

Lehfeldt, R.A. (1915), review of H.L. Moore: Economic Cycles: Their Law and
      Cause, Economic Journal, 25, 409–411.

Leybourne, S.J. and B.P.M. Mc Cabe (1994a), A Simple Test for Cointegration,
      Oxford Bulletin of Economics and Statistics, 56, 97–103.

Leybourne, S.J. and B.P.M. Mc Cabe (1994b), A Consistent Test for a Unit Root,
      Journal of Business & Economic Statistics, 12, 157–166.

Levtchenkova, S., A.R. Pagan and J.C. Robertson (1998), Shocking Stories, Jour-
      nal of Economic Surveys, 12, 507–532.

Lewis, R. and G.C. Reinsel (1985), Prediction of Multivariate Time Series by
      Autoregressive Model Fitting, Journal of Multivariate Analysis, 16, 393–411.
BIBLIOGRAPHY                                                                189

Lippi, M. and L. Reichlin (1993), The Dynamic Effects of Aggregated Demand and
    Supply Disturbances: Comment, American Economic Review, 83, 644–658.

Lo, A.W. (1991), Long-Term Memory in Stock Market Prices, Econometrica, 59,
    1279–1314.

Lucas, R.E. (1976), Econometric Policy Evolution: A Critique, in: K. Brunner and
    A. Meltzer (eds.), The Phillips Curve and Labor Markets, Vol.1 of Carnegie-
    Rochester Conferences on Public Policy, Amsterdam: North Holland.

Lütkepohl, H. (1987), Forecasting Aggregated Vector ARMA Processes, Berlin,
    Springer.

Lütkepohl, H. (1991), Introduction to Multiple Time Series Analysis, Berlin:
    Springer.

Lütkepohl, H. (1993), Testing for Causation Between Two Variables in Higher
    Dimensional VAR Models, in: H. Schneeweiß and K.F. Zimmermann (eds.),
    Studies in Applied Econometrics, 73–91, Heidelberg: Physica.

Lütkepohl, H. (1999a), Vector Autoregressions, SFB 373 Discussion Paper No.
    4/1999.

Lütkepohl, H. (1999b), Forecasting Cointegrated VARMA Processes, SFB 373
    Discussion Paper No. 68/1999.

Lütkepohl, H. und J. Breitung (1997), Impulse Response Analysis of Vector Au-
    toregressive Processes, in: C. Heij, H. Schumacher, B. Hanzon und C. Praag-
    man (eds.), System Dynamics in Economic and Financial Models, New York:
    John Wiley.

Lütkepohl, H. and M.M. Burda (1997), Modified Wald Tests Under Nonregular
    Conditions, Journal of Econometrics, 78, 315–332.

Lütkepohl, H. and P. Saikkonen (1999), Testing for the Cointegrating Rank of a
    VAR Process with a Time Trend, Journal of Econometrics, forthcoming.
190                                                              BIBLIOGRAPHY

Lütkepohl H. and J. Wolters (1998), A Money Demand System for German M3,
      Empirical Economics, 23, 371-386.

Marcellino, M. (1999), Some Consequences of Temporal Aggregation in Empirical
      Analysis, Journal of Economic and Business Statistics, 17, 129–136.

McCallum, B.T. (1999), Analysis of the Monetary Transmission Mechanism:
      Methodological issues, NBER Working Paper No. 7395.

Mills, T.C. (1998), Recent Developments in Modelling Nonstationary Vector Au-
      toregressions, Journal of Economic Surveys, 12, 279–313.

Monfort, A. and R. Rabemananjara (1990), From a VAR Model to a Structural
      Model, with an Application to the Wage-Price Spiral, Journal of Applied
      Econometrics, 5, 203–227.

Moore, H.L. (1914), Economic Cycles – Their Law and Cause, New York: Macmil-
      lan.

Mosconi, R. (1998), Malcolm: The Theory and Practice of Cointegration Analysis
      in RATS, Milano: Cafoscarina.

Nautz, D. and J. Wolters (1999), The Response of Long-Term Interest Rates to
      News about Monetary Policy Actions: Empirical Evidence for the U.S. and
      Germany, Weltwirtschaftliches Archiv, 135, 397–412

Pagan, A. (1995), Three Econometric Methodologies: An update, in: L. Oxley,
      D.A.R. George, C.J. Roberts und S. Sayer (eds.), Surveys in Econometrics,
      Oxford: Basil Blackwell.

Pagan, A.R. and J.C. Robertson (1998), Structural Models of the Liquidity Effect,
      Review of Economics and Statistics, 80, 203–217.

Park, J.Y. and P.C.B. Phillips (1988), Statistical Inference in Regressions With
      Integrated Processes: Part 1, Econometric Theory, 4, 468–497.

Park, J.Y. and P.C.B. Phillips (1999), Asymptotics for Nonlinear Transformations
      of Integrated Time Series, Econometric Theory, 15, 269–298.
BIBLIOGRAPHY                                                                 191

Perron, P. and J.Y. Campbell (1993), A Note on Johansen’s Cointegration Pro-
    cedure when Trends are Present, Empirical Economics, 18, 777-789.

Pesaran, M.H. and Y. Shin (1995), Long-Run Structural Modelling, Paper pre-
    sented at the 7th World Meeting of the Econometric Society, Tokyo, 1995.

Pesaran, M.H., Y. Shin and R. Smith (1999), Structural Analysis of Vector Error
    Correction Models with Exogenous I(1) Variables, Journal of Econometrics,
    forthcoming.

Pfann, G., P. Schotman, and R. Tschernig (1996), Nonlinear Interest Rate Dy-
    namics and Implications for the Term Structure, Journal of Econometrics 74,
    149–176.

Phillips, P.C.B. (1987a), Time Series Regression With a Unit Root, Econometrica
    55, 277–301.

Phillips, P.C.B. (1987b), Towards a Unified Asymptotic Theory of Autoregression,
    Biometrika, 74, 535–48.

Phillips, P.C.B. (1991), Optimal Inference in Co-integrated Systems, Economet-
    rica, 59, 282–306.

Phillips, P.C.B. (1995), Fully Modified Least Squares and Vector Autoregressions,
    Econometrica, 1023–1078.

Phillips, P.C.B. (1998), Impulse Response and Forecast Error Variance Asymp-
    totics in Nonstationary VARs, Journal of Econometrics, 83, 21–56.

Phillips, P.C.B. and S. Durlauf (1986), Multiple Time Series Regression With
    Integrated Processes, Review of Economic Studies, 53, 473–495.

Phillips, P.C.B. and B.E. Hansen (1990), Statistical Inference in Instrumental
    Variable Regression with I(1) Processes, Review of Economic Studies, 57,
    99–125.

Phillips, P.C.B. and S. Ouliaris (1990), Asymptotic Properties of Residual Based
    Tests for Cointegration, Econometrica, 58, 165–193.
192                                                           BIBLIOGRAPHY

Phillips, P.C.B. and P. Perron (1988), Testing for a Unit Root in Time Series
      Regression, Biometrika 75, 335–346.

Phillips, P.C.B. and V. Solo (1992), Asymptotics for Linear Processes, Annals of
      Statistics, 20, 971–1001.

Quenouille, M.H. (1957), The Analysis of Multiple Time Series, London: Griffin.

Quintos, C.E. (1998), Fully Modified Vector Autoregressive Inference in Partially
      Nonstationary Models, Journal of the American Statistical Association, 93,
      783–795.

Rahbek, A. and R. Mosconi (1999), Cointegration Rank Inference with Stationary
      Regressors in VAR Models, Econometrics Journal, 2.

Rasche, R.H. (1994), Money Demand and the Term Structure: Some New Ideas
      on an Old Problem, Michigan State University.

Renault, E. and A. Szafarz (1991), True Versus Spurious Instantaneous Causality,
      Working paper, GREMAQ and IDEI, Toulouse, France.

Roberts, J.M. (1993), The Sources of Business Cycles: A Monetarist Interpreta-
      tion, International Economic Review, 34, 923–934.

Rothenberg, T.J. (1971), Identification in Parametric Models, Econometrica, 39,
      577–592.

Rudebusch, G. (1998), Do Measures of Monetary Policy in a VAR Make Sense?,
      International Economic Review, 39, 907–948.

Saikkonen, P. (1991), Asymptotically Efficient Estimation of Cointegration Re-
      gressions, Econometric Theory, 7, 1–21.

Sargan, J.D. and A. Bhargava (1983), Testing Residuals from Least Squares Re-
      gression for Being Generated by the Gaussian Random Walk, Econometrica,
      51, 153–174.

Schmidt, P. (1976), Econometrics, New York: Marcel Decker.
BIBLIOGRAPHY                                                                193

Shapiro, M. and M.W. Watson (1988), Sources of Business Cycle Fluctuations,
    NBER Macroeconomcs Annual, 3, 111–156.

Shin, Y. (1994) A Residual-Based Test of the Null of Cointegration Against the
    Alternative of No Cointegration, Econometric Theory, 10, 91–115.

Sims, C.A. (1980), Macroeconomics and Reality, Econometrica, 48, 1–47.

Sims, C.A. (1981), An Autoregressive Index Model for the U.S. 1948-1975, in:
    J. Kmenta and J.B. Ramsey (eds.), Large-Scale Macro-Econometric Models,
    Amsterdam: North-Holland, 283-327.

Sims, C.A. (1986), Are Forecasting Models Usable for Policy Analysis?, Quarterly
    Review, Federal Reserve Bank of Minneapolis, Winter.

Sims, C.A. and T. Zha (1994), Error Bands for Impulse Responses, mimeo.

Sims, C.A. and T. Zha (1998), Bayesian Methods for Dynamic Multivariate Mod-
    els, International Economic Review, 39, 949–968.

Sims, C.A., J.H. Stock, M.W. Watson (1990), Inference in Linear Time Series
    Models With Some Unit Roots, Econometrica, 58, 113–144.

Spanos, A. (1990), The Simultaneous-Equations Model Revisited: Statistical ad-
    equacy and identification, Journal of Econometrics, 44, 87-105.

Snell, A. (1998), Testing for r Versus r − 1 Cointegrating Vectors, Journal of
    Econometrics, 88, 151–191.

Stock, J.H. (1994a), Deciding Between I(1) and I(0), Journal of Econometrics,
    105–131.

Stock, J.H. (1994b), Unit Roots, Structural Breaks and Trends, in: R.F Engle
    and D.L. McFadden (eds.), Handbook of Econometrics, Vol. 4, Amsterdam:
    North Holland.

Stock, J.H. and M.W. Watson (1988), Testing for Common Trends, Journal of
    the American Statistical Association, 83, 1097-1107.
194                                                            BIBLIOGRAPHY

Stock, J.H. and M.W. Watson (1993), A Simple Estimator of Cointegrating Vec-
      tors in Higher Order Integrated Systems, Econometrica, 61, 783–820.

Stram, D.O. and W.W.S. Wei (1986), Temporal Aggregation in the ARIMA Pro-
      cess, Journal of Time Series Analysis, 7, 279-292.

Swanson, N.R. und C.W.J. Granger (1997), Impulse Response Functions Based on
      a Causal Approach to Residual Orthogonalization in Vector Autoregressions,
      Journal of the American Statistical Association, 92, 357–367.

Tanaka, K. (1990), Testing for a Moving Average Root, Econometric Theory 6,
      433–444.

Theil, H. (1971), Principles of Econometrics, New York: John Wiley.

Tiao, G.C. (1972), Asymptotic Behaviour of Temporal Aggregates of Time Series,
      Biometrika, 59, 525–531.

Tiao, G.C. (1999), The ET Interview: Professor George C. Tiao, Econometric
      Theory, 15, 389–424.

Toda, H.Y. (1994), Finite Sample Properties of Likelihood Ratio Tests for Coin-
      tegrating Ranks When Linear Trends are Present, The Review of Economics
      and Statistics, , 66–79.

Toda, H.Y. and Phillips, P.C.B. (1993), Vector Autoregressions and Causality,
      Econometrica, 61, 1367–1394.

Toda, H.Y. and P.C.B. Phillips (1994), Vector Autoregression and Causality: A
      Theoretical Overview and a Simulation Study, Econometric Reviews, 13,
      259–285.

Tsay, R.S. (1993), Testing for Noninvertible Models With Applications, Journal
      of Business & Economic Statistics, 11, 225–233.

Uhlig, H. (1997), What are the Effects of Monetary Policy? Results from an
      Agnostic Identification Procedure, CentER, Tilburg University, Juni 1997.
BIBLIOGRAPHY                                                                 195

Vlaar, P.J.G. (1999) On the Asymptotic Distribution of Impulse Response Func-
    tions With Long Run Restrictions, Amsterdam, mimeo.

Vogelsang, T.J. (1998a), Trend Function Hypothesis Testing in the Presence of
    Serial Correlation, Econometrica, 66, 123–148.

Vogelsang, T.J. (1998b), Testing for the Shift in Mean Without Having to Esti-
    mate Serial-Correlation Parameters, Journal of Business & Economic Statis-
    tics, 16, 73–80.

Waggoner, D.F. and T. Zha (1997), Normalization, Probability Distribution, and
    Impulse Responses, Federal Reserve Bank of Atlanta, Working Paper 97-11.

Wallis, K.F. (1977), Multiple Time Series Analysis and the Final Form of Econo-
    metric Models, Econometrica, 45, 1481-1491.

Warne, A. (1990), Vector Autoregressions and Common Trends in Macro and
    Financial Economics, PhD thesis, Stockholm School of Economics.

Watson, M.W. (1994), Vector Autoregressions and Cointegration, in: Engle, R.F.
    and D.L. McFadden (eds.), Handbook of Econometrics, Vol. IV, New York:
    Elsevier.

    8

Weber, C.E. (1995), Cyclical Output, Cyclical Unemployment, and Okun’s Coef-
    ficient: A new approach, Journal of Applied Econometrics, 10, 433–445.

Wei, W.W.S. (1978), The Effect of Temporal Aggregation on Parameter Estima-
    tion in Distributed Lag Models, Journal of Econometrics, 8, 237-246.

Wei, W.W.S. (1981), Effect of Systematic Sampling on ARIMA Models, Commu-
    nications in Statistical-Theoretical Mathematics A, 10, 2389-2398.

Weiss, A.A. (1984), Systematic Sampling and Temporal Aggregation in Time
    Series Models, Journal of Econometrics, 26, 271-281.
196                                                            BIBLIOGRAPHY

Wickens, M.R. (1982), The Efficient Estimation of Econometric Models with Ra-
      tional Expectations, Review of Economic Studies, 49, 55–67.

Wickens, M.R. (1996), Interpreting Cointegrating Vectors and Common Stochas-
      tic Trends, Journal of Econometrics, 74, 255–271.

Wold, H. (1960), A Generalization of Causal Chain Models, Econometrica, 28,
      443–463.

Wolters, J. (1995), On the Term Structure of Interest Rates – Empirical Results
      for Germany, Statistical Papers, 36, 193–214.

Working, H. (1960), Note on the Correlation of First Differences of Averages in a
      Random Chain, Econometrica, 26, 916–918.

Wright, P.G. (1915), review of H.L. Moore: Economic Cycles – Their Law and
      Cause, Quarterly Journal of Economics, 29, 631–641.

Yang, M. (1998), System Estimators of Cointegrating Matrix in Absence of Nor-
      malising Information, Journal of Econometrics, 2, 317-337.

Xiao, Z. and P.C.B. Phillips (1999), Efficient Detrending in Cointegrating Regres-
      sion, Econometric Theory, 15, 519-548.

Zellner, A. (1971), An Introduction to Bayesian Inference in Econometrics, New
      York: John Wiley.

Zellner, A. (1992), Statistics, Science and Public Policy, Journal of the American
      Statistical Association, 87, 1–6.

Zellner, A. and C. Montmarquette (1971), A Study of Some Aspects of Temporal
      Aggregation Problems in Econometric Analyses, Review of Economics and
      Statistics, 335-342.

Zellner, A. and F. Palm (1974), Time Series Analysis and Simultaneous Equations
      Econometric Models, Journal of Econometrics, 2, 17–54.
BIBLIOGRAPHY                                                            197

Zellner, A. and H. Theil, H. (1962), Three–Stage Least-Squares: Simultaneous
    Estimation of Simultaneous Equations, Econometrica, 30, 54–78.



---
normalized_id: shared-pdf-reference-linton-o-econometrics-ln-lse-2002-144s-gl
exam_code: SHARED
material_scope: linton o. econometrics (ln, lse, 2002)(144s)_gl_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Linton O. Econometrics (LN, LSE, 2002)(144s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-linton-o-econometrics-ln-lse-2002-144s-gl

EC403, Part 1

  Oliver Linton

October 14, 2002
2
Contents

1 Linear Regression                                                          7
  1.1 The Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    7
  1.2 The OLS Procedure . . . . . . . . . . . . . . . . . . . . . . . .     10
      1.2.1 Some Alternative Estimation Paradigms . . . . . . . .           12
  1.3 Geometry of OLS and Partitioned Regression . . . . . . . . .          14
  1.4 Goodness of Fit . . . . . . . . . . . . . . . . . . . . . . . . . .   19
  1.5 Functional Form . . . . . . . . . . . . . . . . . . . . . . . . .     21

2 Statistical Properties of the OLS Estimator                              25
  2.1 Optimality . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28

3 Hypothesis Testing                                                        33
  3.1 General Notations . . . . . . . . . . . . . . . . . . . . . . . . .   35
  3.2 Examples . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    36
  3.3 Test of a Single Linear Hypothesis . . . . . . . . . . . . . . . .    37
  3.4 Test of a Multiple Linear Hypothesis . . . . . . . . . . . . . .      40
  3.5 Test of Multiple Linear Hypothesis Based on Þt . . . . . . . .        42
  3.6 Examples of F —Tests, t vs. F . . . . . . . . . . . . . . . . . .     46
  3.7 Likelihood Based Testing . . . . . . . . . . . . . . . . . . . . .    48

4 Further Topics in Estimation:                                             53
  4.1 Omission of Relevant Variables . . . . . . . . . . . . . . . . .      53
  4.2 Inclusion of irrelevant variables . . . . . . . . . . . . . . . . .   55
  4.3 Model Selection . . . . . . . . . . . . . . . . . . . . . . . . . .   56
  4.4 Multicollinearity . . . . . . . . . . . . . . . . . . . . . . . . .   57
  4.5 Inßuential Observations . . . . . . . . . . . . . . . . . . . . .     59
  4.6 Missing Observations . . . . . . . . . . . . . . . . . . . . . . .    60

                                      3
4                                                                CONTENTS

5 Asymptotics                                                               65
  5.1 Types of Asymptotic Convergence . . . . . . . . . . . . . . . .       65
  5.2 Laws of Large Numbers and Central Limit Theorems . . . . .            67
  5.3 Additional Results . . . . . . . . . . . . . . . . . . . . . . . .    69
  5.4 Applications to OLS . . . . . . . . . . . . . . . . . . . . . . .     70
  5.5 Asymptotic Distribution of OLS . . . . . . . . . . . . . . . . .      71
  5.6 Order Notation . . . . . . . . . . . . . . . . . . . . . . . . . .    73
  5.7 Standard Errors and Test Statistics in Linear Regression . . .        73
  5.8 The delta method . . . . . . . . . . . . . . . . . . . . . . . . .    75

6 Errors in Variables                                                       77
  6.1 Solutions to EIV . . . . . . . . . . . . . . . . . . . . . . . . .    81
  6.2 Other Types of Measurement Error . . . . . . . . . . . . . . .        82
  6.3 Durbin-Wu-Hausman Test . . . . . . . . . . . . . . . . . . . .        83

7 Heteroskedasticity                                                        85
  7.1 Eﬀects of Heteroskedasticity . . . . . . . . . . . . . . . . . . .    85
  7.2 Plan A: Eicker-White . . . . . . . . . . . . . . . . . . . . . . .    87
  7.3 Plan B: Model Heteroskedasticity . . . . . . . . . . . . . . . .      88
  7.4 Properties of the Procedure . . . . . . . . . . . . . . . . . . .     89
  7.5 Testing for Heteroskedasticity . . . . . . . . . . . . . . . . . .    90

8 Nonlinear Regression Models                                            93
  8.1 Computation . . . . . . . . . . . . . . . . . . . . . . . . . . . 94
  8.2 Consistency of NLLS . . . . . . . . . . . . . . . . . . . . . . . 96
  8.3 Asymptotic Distribution of NLLS . . . . . . . . . . . . . . . . 98
  8.4 Likelihood and Eﬃciency . . . . . . . . . . . . . . . . . . . . . 101

9 Generalized Method of Moments                                            103
  9.1 Asymptotic Properties in the iid case . . . . . . . . . . . . . . 105
  9.2 Test Statistics . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
  9.3 Examples . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108
  9.4 Time Series Case . . . . . . . . . . . . . . . . . . . . . . . . . 111
  9.5 Asymptotics . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113
  9.6 Example . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114
CONTENTS                                                                      5

10 Time Series                                                              117
   10.1 Some Fundamental Properties . . . . . . . . . . . . . . . . . . 117
   10.2 Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122
   10.3 Forecasting . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125
   10.4 Autocorrelation and Regression . . . . . . . . . . . . . . . . . 126
   10.5 Testing for Autocorrelation . . . . . . . . . . . . . . . . . . . . 129
   10.6 Dynamic Regression Models . . . . . . . . . . . . . . . . . . . 130
   10.7 Adaptive expectations . . . . . . . . . . . . . . . . . . . . . . 132
   10.8 Partial adjustment . . . . . . . . . . . . . . . . . . . . . . . . 133
   10.9 Error Correction . . . . . . . . . . . . . . . . . . . . . . . . . 133
   10.10Estimation of ADL Models . . . . . . . . . . . . . . . . . . . . 134
   10.11Nonstationary Time Series Models . . . . . . . . . . . . . . . 135
   10.12Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137
   10.13Testing for Unit Roots . . . . . . . . . . . . . . . . . . . . . . 138
   10.14Cointegration . . . . . . . . . . . . . . . . . . . . . . . . . . . 139
   10.15Martingales . . . . . . . . . . . . . . . . . . . . . . . . . . . . 140
   10.16GARCH Models . . . . . . . . . . . . . . . . . . . . . . . . . . 141
   10.17Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144
6   CONTENTS
Chapter 1

Linear Regression

1.1     The Model
  • The Þrst part of the course will be concerned with estimating and
    testing in the linear model. We will suggest procedures and derive
    their properties under certain assumptions. The linear model is the
    basis for most of econometrics and a Þrm grounding in this theory is
    essential for future work.

  • We observe the following data
                               
                             y1
                               
                   y =  ...  ;
                             yn
                                                  
                             x11 · · · xK1       x01
                                       ..  =  ..  ,
                  X =  ...              .   . 
                               x1n       xKn          x0n

      where rank(X) = K. Note that this is an assumption, but it is imme-
      diately veriÞable from the data in contrast to some other assumptions
      we will make.

  • It is desirable for statistical analysis to specify a model of how these
    data were generated. We suppose that there is a random mechanism
    which is behind everything - the data we have is one realisation of

                                     7
8                                     CHAPTER 1. LINEAR REGRESSION

      an inÞnity of such potential outcomes. We shall make the following
      assumptions regarding the way y, X were generated:




    • Fixed Design Linear Model

         — (A1) X is Þxed in repeated samples
         — (A2) ∃β = (β 1 , . . . , β K )0 such that E(y) = Xβ.
         — (A3) Var(y) = σ 2 In×n .




    • We stick with Þxed design for most of the linear regression section.
      Fixed design is perhaps unconvincing for most economic data sets, be-
      cause of the asymmetry between y and x. That is, in economic datasets
      we have no reason to think that some data were randomly generated
      while others were Þxed. This is especially so in time series when one
      regressor might be a lagged value of the dependent variable.

    • A slightly diﬀerent speciÞcation is Random Design Linear Model

         — (A1r) X is random with respect to repeated samples
         — (A2r) ∃β s.t. E(y|X) = Xβ
         — (A3r) Var(y|X) = σ 2 In×n ,

where formally A2r and A3r hold with probability one.

    • However, one can believe in a random design model, but want to con-
      duct inference in the conditional distribution [given X]. This is sensible
      at least in the cross-section case where there are no lagged dependent
      variables. In this case, we are eﬀectively working in a Þxed design
      model. So the real distinction in this case is whether one evaluates
      quantities in the conditional or unconditional distribution.
1.1. THE MODEL                                                                9

  • Finally, we write the regression model in the more familiar form. DeÞne
    ε = y − Xβ = (ε1 , . . . , εn )0 , then
                                   y = Xβ + ε,
    where [in the Þxed design]
                                  E(ε) = 0
                                 E(εε0 ) = σ 2 In .
    The linear regression model is more commonly stated like this with
    statistical assumptions made about the unobservable ε rather than di-
    rectly on the observable y. The assumptions about the vector ε are
    quite weak in some respects - the observations need not be indepen-
    dent and identically distributed, since only the Þrst two mometns of
    the vector are speciÞed - but strong in regard to the second moments
    themselves.
  • It is worth discussing here some alternative assumptions made about
    the error terms. For this purpose we shall assume a random design,
    and moreover suppose that (xi , εi ) are i.i.d. In this case, we can further
    assume that

       — E(εi xi ) = 0
       — E(εi |xi ) = 0, denoted εi ⊥ xi
       — εi are i.i.d. and independent of xi , denoted εi ⊥⊥ xi .
       — εi ∼ N(0, σ 2 ).

  • The Þrst assumption, called an unconditional moment condition, is the
    weakest assumption needed to ‘identify’ the parameter β.
  • The second assumption, called a conditional moment restriction, is
    a little bit stronger. It is really just a rewriting of the deÞnition of
    conditional expectation.
  • The third assumption is much stronger and is not strictly necessary for
    estimation purposes although it does have implications about eﬃciency
    and choice of estimator.
  • The fourth assumption we will sometimes make in connection with
    hypothesis testing and for establishing optimality of least squares.
10                                      CHAPTER 1. LINEAR REGRESSION

1.2       The OLS Procedure
     • In practice we don’t know the parameter β and seek to estimate it from
       the data.
     • For any b, deÞne Xb and

                                      u(b) = y − Xb.

       Then u(b) is the vector of discrepancies between the observed y from
       the predicted by Xb.
                                                          b to minimize
     • The Ordinary Least Squares (OLS) procedure chooses β
       the quadratic form
                                        X
                                        n
                              0
                  S(b) = u(b) u(b) =           u2i (b) = (y − Xb)0 (y − Xb)
                                         i=1

       with respect to b ∈ Rk . This is perhaps the main estimator of β, and
       we shall study its properties at length.
     • The Þrst question is whether a minimum exists. Since the criterion is
       a continuous function of b, a minimum over any compact subset always
       exists.
     • A necessary condition for the uniqueness of a solution is that n ≥ K.
       If n = K, the solution essentially involves interpolating the data, i.e.,
       the Þtted value of y will be equal to the actual value.
     • When the assumption that rank(X) = K is made, β   b is uniquely de-
       Þned for any y and X independently of model; so there is no need for
       assumptions A1-A3 when it comes to computing the estimator.
     • We now give two derivations of the well-known result that

                                  b = (X 0 X)−1 X 0 y.
                                  β

     • We suppose the answer is given by this formula and demonstrate that
       b minimizes S(b) with respect to b. Write
       β
                                             b +X β
                                  u(b) = y−X β    b −Xb,
1.2. THE OLS PROCEDURE                                                    11

    so that
                             b +X β
                 S(b) = (y−X β    b −Xb)0 (y−X β
                                               b +X β
                                                    b −Xb)

                               b 0 (y−X β)
                        = (y−X β)         b
                            b −b)0 X 0 X(β
                          +(β            b −b)
                                b 0 X(β
                          +(y−X β)    b −b) + (β
                                               b −b)0 X 0 (y−X β)
                                                               b


                    =          b 0 (y−X β)
                          (y−X β)       b + (β
                                             b −b)0 X 0 X(β
                                                          b −b),

    because
                                    b = X 0 y − X 0 y = 0.
                           X 0 (y−X β)
    But
                               b −b)0 X 0 X(β
                              (β            b − b) ≥ 0,
                                     b
    and equality holds only when b = β.

  • A minimizer of S(b) must satisfy the vector of Þrst order conditions:
                               ∂S             b = 0.
                                  = 2X 0 (y−X β)
                               ∂b
    Therefore,
                                                  b
                                    X 0 y = X 0 X β.
    Now we use the assumption that X is of full rank. This ensures that
    X 0 X is invertible, and
                                  b = (X 0 X)−1 X 0 y
                                  β

    as required. To verify that we have found a local minimum rather than
    maximum it is necessary to calculate the second derivatives
                                   ∂ 2S
                                        =2X 0 X > 0.
                                  ∂b∂b0

  • The vector derivatives follow by straightforward calculus

                  ∂ X               X                   X
                      n              n                   n
                               2               ∂ui
                         ui (b) = 2     ui (b)     = −2     ui (b)xij ,
                 ∂bj i=1            i=1
                                               ∂bj      i=1
  12                                    CHAPTER 1. LINEAR REGRESSION

         since
                                       ∂ui
                                           = −xij .
                                       ∂bj
       • Characterization of the Solution. DeÞne the Þtted value yb =
          b and the OLS residuals
         Xβ
                                   u                  b
                                   b = y − yb = y − X β.
                  b solves the normal equations X 0 u
       • The OLSE β                                 b = 0, i.e.,
                                      X
                                      n
                                                bi = 0
                                            x1i u
                                      i=1
                                      Xn
                                                bi = 0
                                            x2i u
                                      i=1
                                                      ..
                                                       .
                                     X
                                     n
                                                bi = 0.
                                            xKi u
                                      i=1

• We say that X is orthogonal
                        Pn to u  b, denoted X ⊥ u
                                                b. Note that if, as usual
  X1i = 1, then, we have i=1 ubi =0.

  1.2.1      Some Alternative Estimation Paradigms
       • We brießy mention some alternative estimation methods which actually
         lead to the same estimator as the OLS estimator in some special cases,
         but which are more broadly applicable.
       • Maximum Likelihood. Suppose we also assume that y ∼ N (Xβ, σ 2 I).
         Then the density function of y [conditional on X] is
                                            µ                 ¶
                                 1             1         0
                  fy|X (y) =             exp − (y−Xβ) (y−Xβ) .
                             (2πσ 2 )n/2       2

       • The density function depends on the unknown parameters β, σ 2 , which
         we want to estimate. We therefore switch the emphasis an call the
         following quantity the log likelihood function for the observed data
                                    n        n          1
                 `(b, ω 2 |y, X) = − log 2π − log ω 2 − 2 (y−Xb)0 (y−Xb),
                                    2        2         2ω
1.2. THE OLS PROCEDURE                                                        13

    where b and ω are unknown parameters.
  • The maximum likelihood estimator β      bmle , σ
                                                   b2mle maximizes `(b, ω2 ) with
    respect to b and ω 2 . It is easy to see that
                       β      b
                       bmle = β

                                  1                     bmle ).
                                           bmle )0 (y−X β
                       b2mle =
                       σ            (y−X β
                                 n
    Basically, the criterion function is the least squares criterion apart from
    an aﬃne transformation involving only ω.
  • Note however, that if we had a diﬀerent assumption about the errors
    than A4, e.g., they were from a t-distribution, then we would have
                                                        b In particular,
    a diﬀerent likelihood and a diﬀerent estimator than β.
    the estimator may not be explicitly deÞned and may be a nonlinear
    function of y.
  • Method of Moments. Suppose that we deÞne parameters through
    some population moment conditions; this can arise from an economic
    optimization problem, see below.
  • For example, suppose that we say that β is deÞned as the unique para-
    meter that satisÞes the K moment conditions [we need as many moment
    conditions as parameters]
                                 E[xi (yi −x0i β)] = 0.
    Note that this is the natural consequence of our assumption that E(εi xi ) =
    0.
  • Replacing the population by the sample average we must Þnd b such
    that
                           1X
                              n
                                 xi (yi −x0i b) = 0.
                           n i=1
    The solution to this is of course
                                 b = (X 0 X)−1 X 0 y,
                                 β
    i.e., the MOM estimator is equal to OLS in this case. Thus, for the
    moment conditions above we are lead to the least squares estimator.
14                                      CHAPTER 1. LINEAR REGRESSION

     • However, if we chose some other conditions, then a diﬀerent estimator
       results. For example, suppose that we assume that

                                 E[xi (yi −x0i β)3 ] = 0,

       we would be lead to a diﬀerent estimator - any solution of

                                1X
                                    n
                                      xi (yi −x0i b)3 = 0.
                                n i=1

       In general, this would be more complicated to analyze.

     • We emphasize here that the above estimation methods are all suggested
       or motivated by our assumptions, but of course we can always carry
       out the procedure without regard to underlying model - that is, the
       procedures only require data, not assumptions.


1.3       Geometry of OLS and Partitioned Re-
          gression
     • We want to give a geometric interpretation to the OLS procedure.
     • The data: y, x1 , . . . , xK , can all be viewed as elements of the vector
       space Rn . DeÞne the set
              C(X) = {α1 x1 + · · · + αK xK } = {Xα : α ∈ RK } ⊆ Rn ,

       otherwise known as the column span of X.
     • Then, C(X) is a linear subspace of Rn of dimension K assuming that
       the matrix X is of full rank. If it is only of rank K ∗ with K ∗ < K then
       C(X) is still a linear subspace of Rn but of dimension K.
     • The OLS procedure can equivalently be deÞned as Þnding the point in
       C(X) closest to y, where closeness is measured in terms of Euclidean
       distance, i.e.,
                      d(y, Xb) = ky−Xbk2 = (y−Xb)0 (y−Xb)

       is the Euclidean distance of y to the point Xb ∈ C(X).
1.3. GEOMETRY OF OLS AND PARTITIONED REGRESSION                             15

  • This is an old problem in geometry, which is now given a key role in
    abstract mathematics.

  • The projection theorem [Hilbert] says that there is a unique solution to
    the minimization problem, call it yb, which is characterized by the fact
    that
                                 b = y − yb
                                 u
    is orthogonal to C(X).

  • Equivalently we can write uniquely

                                    y = yb + u
                                             b,

    where yb ∈ C(X) and u  b ∈ C ⊥ (X) [the space C ⊥ (X) is called the ortho-
    complement of C(X), and consists of all vectors orthogonal to C(X)].
    Essentially, one is dropping a perpendicular, and the procedure should
    be familiar from high school geometry.

  • For example, let n = 3 and
                                         
                                      1 0
                                X =  0 1 .
                                      0 0

    Then C(X) is the set of all vectors in R3 with third component zero.
    What is the closest point for the example above with y = (1, 1, 1)0 ?
                            b u
    This is (1, 1, 0)0 = X β,   b = (0, 0, 1)0 In fact u
                                                       b is orthogonal to C(X),
          b ∈ C ⊥ (X) = (0, 0, α)0 .
    i.e., u

  • In general how do we Þnd yb? When X is of full rank we can give a
    simple explicit solution
                                yb = PX y,
    where the Projector matrix

                               PX = X(X 0 X)−1 X 0

    projects onto C(X).
16                                    CHAPTER 1. LINEAR REGRESSION

           b = y − yb = MX y, where the Projector matrix
     • Let u
                               MX = I − X(X 0 X)−1 X 0
       projects onto C ⊥ (X). Thus for any y, we can write
                               y = yb + u
                                        b = PX y + MX y.
       The matrices PX and MX are symmetric and idempotent, i.e.,
                               PX = PX0 and PX2 = PX .
       After applying PX once you are ready in C(X). This implies that
                              PX X = X and MX X = 0,
       so that
                                PX MX y = 0 for all y.
                                                    b so that β
     • Since yb ∈ C(X), we can rewrite it as yb = X β,        b = (X 0 X)−1 X 0 y.

     • The space C(X) is invariant to nonsingular linear transforms
                         X 7−→ XAK×K , where det A 6= 0.
       Let z ∈ C(X). Then there exists an α ∈ RK such that z = Xα.
       Therefore,
                           z = XAA−1 α = XAγ,
       where γ = A−1 α ∈ RK , and vice-versa.
     • Since C(X) is invariant to linear transformations, so are yb and u
                                                                        b (but
           b
       not β). For example, rescaling of the components of X does not aﬀect
       the values of yb and u
                            b.
                                 y on (x1 , x2 , x3 )(1)
                    y on (x1 + x2 , 2x2 − x3 , 3x1 − 2x2 + 5x3 )(2)
       in which case the transformation is
                                            
                                      1 0  3
                               A =  1 2 −2  ,
                                      0 −1 5
       which is of full rank. Therefore, (1) and (2) yield the same yb, u
                                                                        b.
1.3. GEOMETRY OF OLS AND PARTITIONED REGRESSION                         17

  • Emphasizing C(X) rather than X itself is called the coordinate free ap-
    proach. Some aspects of model/estimate are properties of C(X) choice
    of coordinates is irrelevant.

  • When X is not of full rank

      — the space C(X) is still well deÞned, as is the projection from y
        onto C(X).
      — The Þtted value yb and residual u
                                        b are uniquely deÞned in this case,
      — but there is no unique coeﬃcient vector β.b
      — This is the case commonly called multicollinearity.

  • We next consider an important application of the projection idea. Par-
    tition
                  X = (X1n×K1 , X2n×k2 ) , K1 + K2 = K,
                                                             b1 in the
    and suppose we are interested in obtaining the coeﬃcient β
    projection of y onto C(X).

  • A key property of projection is that if X1 and X2 are orthogonal, i.e.,
    if X10 X2 = 0, then
                              PX = PX1 + PX2 .
    This can be veriÞed algebraically, but also should be obvious geomet-
    rically. In this case, write
                      b = PX y = PX y + PX y = X1 β
               yb = X β                           b1 + X2 β
                                                          b2 .
                                   1      2


                                                                        b1
    This just says that if X1 and X2 were orthogonal, then we could get β
    by regressing y on X1 only, and βb2 by regressing y on X2 only.

  • Very rarely are X1 and X2 orthogonal, but we can construct equiva-
    lent regressors that are orthogonal. Suppose we have general X1 and
    X2 , whose dimensions satisfy K1 + K2 = K. We make the following
    observations:

      — (X1 , X2 ) and (M2 X1 , X2 ) span the same space. This follows be-
        cause
                                X1 = M2 X1 + P2 X1 ,
18                                     CHAPTER 1. LINEAR REGRESSION

             where C(P2 X1 ) ⊂ C(X2 ). Therefore,

                                 C(M2 X1 , X2 ) = C(X1 , X2 ).

          — M2 X1 and X2 are orthogonal.

     • This says that if we regress y on (X1 , X2 ) or y on (M2 X1 , X2 ) we get
       the same yb and u
                       b, and that if we wanted the coeﬃcients on M2 X1 from
       the second regression we could in fact just regress y on M2 X1 only.

     • What are the coeﬃcients on M2 X1 ? Recall that
                              b1 + X2 β
                      yb = X1 β       b2
                                        b1 + X2 β
                         = (M2 + P2 )X1 β       b2
                        = M2 X1 β        b2 + (X 0 X2 )−1 X 0 X1 β
                                b1 + X2 [β                       b1 ]
                                                2          2
                                b1 + X2 C,
                        = M2 X1 β        b

       where
                              b=β
                              C                         b1 .
                                b2 + (X 0 X2 )−1 X 0 X1 β
                                       2          2

                                                 b1 , while that on X2 is some
     • So the coeﬃcient on M2 X1 is the original β
       combination of βb1 and β b2 . Note that M2 X1 are the residuals from a
       regression of X1 on X2 .


     • Practical Implication. If K is large and primarily interested in
                                          b1 by regressing y [or M2 y equiva-
       Þrst K1 variables, then we can get β
       lently] on M2 X1 only, i.e.,

               b1 = (X 0 M2 X1 )−1 X 0 M2 y = (X 0 M2 M2 X1 )−1 X 0 M2 M2 y.
               β      1             1           1                1

       This involves inversion of only K1 × K1 and K2 × K2 matrices, which
       involves less computing time than inverting K × K matrices, especially
       when K is large [this computation can be as bad as O(K 3 )].

     • Suppose that X2 = (1, 1, . . . , 1)0 = i, then

                                                             ii0
                             M2 = In − i(i0 i)−1 i0 = In −
                                                             n
1.4. GOODNESS OF FIT                                                      19

      and                                                  
                                   X
                                   n       1         x1i − x1
                               1                           
               M2 x1n×1 = x1 −       x1i  ...  =      ..
                                                          .   .
                               n i=1
                                           1         x1n − x1
      When regression includes an intercept, can Þrst demean the X variables
      (and the y’s) then do regression on the demeaned variables.


1.4     Goodness of Fit
  • How well does the model explain the data? One possibility is to mea-
    sure the Þt by the residual sum of squares
                                     X
                                     n
                               RSS =   (yi − ybi )2 .
                                        i=1

      In general, the smaller the RSS the better. However, the numerical
      value of RSS depends on the units used to measure y in so that one
      cannot compare across models.
  • Generally used measure of goodness of Þt is the R2 . In actuality, there
    are three alternative deÞnitions in general.

        — One minus the ratio of the residual sum of squares to total sum
          of squares,
                                             Pn
                        2        RSS               (yi − ybi )2
                      R1 = 1 −         = 1 − Pi=1
                                                n             2
                                                                .
                                 T SS           i=1 (yi − y)

        — The sample correlation squared between y and yb,
                                  P
                          2      [ ni=1 (yi − y)(byi − yb)]2
                        R2 = Pn                P n              .
                                 i=1 (yi − y)
                                             2        yi − yb)2
                                                 i=1 (b

        — The ratio of explained sum of squares to total sum of squares
                                          Pn
                              2   ESS       i=1 (byi − y)2
                            R3 =       = nP              2
                                                           .
                                  T SS      i=1 (yi − y)
                    P                  P
          Here, y = ni=1 yi /n and yb = ni=1 ybi /n.
20                                       CHAPTER 1. LINEAR REGRESSION

     • Theorem. When an intercept is included, all three measures are the
       same.

     • Proof of R12 = R22 . Since an intercept is included, we have
                                         X
                                         n
                                                bi = 0,
                                                u
                                          i=1


       which implies that yb = y. Therefore,
              X
              n                     X
                                    n                    X
                                                         n
                         yi − yb) =
                (yi − y)(b            (yi − y)(b
                                               yi − y) =    yi − y)2 ,
                                                           (b
               i=1                       i=1                      i=1

       because
                                  X
                                  n
                                         bi (b
                                         u   yi − y) = 0.
                                   i=1

     • Proof of R12 = R32 . Similarly,
                     X
                     n            X
                                  n               X
                                                  n
                               2               2
                       (yi − y) =   (yi − ybi ) +    yi − y)2 .
                                                    (b
                      i=1            i=1                    i=1




     • If an intercept is included, then 0 ≤ R2 ≤ 1. If not, then 0 ≤ R22 ≤ 1,
       but R32 could be greater than one, and R12 could be less than zero.

     • If y = α + βx + u, then R2 is the squared sample correlation between
       y and x.

     • The R2 is invariant to some changes of units.

     • If y 7→ ay + b for any constants a, b, then

          — ybi 7→ ab
                    yi + b and
          — y 7→ ay + b,
          — so R2 is the same in this case.
          — Clearly, if X 7→ XA for a nonsingular matrix A, then yb is un-
            changed, as is y and y.
1.5. FUNCTIONAL FORM                                                       21

  • R2 always increases with addition of variables. With K = n we can
    make R2 = 1.

  • Theil’s adjusted R2 is deÞned as follows

                                 2         n−1
                               R =1−           (1 − R2 ).
                                           n−K
      This amounts to dividing the sum of squares by the appropriate degrees
      of freedom, so that
                                      1
                                         Pn
                                2   n−K
                                                     bi )2
                                           i=1 (yi − y
                          1 − R = 1 Pn                  2
                                                           .
                                     n−1   i=1 (yi − y)

      It follows that
                           2
                        ∆R    n − 1 ∆R2     n−1
                           =            −        2
                                                   (1 − R2 ).
                        ∆K   n − K
                             | {z } ∆K    (n − K)
                                          | {z }
                                     +             −


      This measure allows some trade-oﬀ between Þt and parsimony.


1.5      Functional Form
  • Linearity can often be restrictive. We shall now consider how to gen-
    eralize slightly the use of the linear model, so as to allow certain types
    of nonlinearity, but without fundamentally altering the applicability of
    the analytical results we have built up.

                          W ages = α + βed + γUNION + u

                         W ages = α + βed + γab + δed · ab + u
                    W ages = α + βed + γex + δex2 + ρex3 + u
                         log W ages = α + βed + γUNION + u
                                       fs
                               log          = α + βinc + u
                                     1 − fs
22                                           CHAPTER 1. LINEAR REGRESSION

     • These are all linear in the parameters model, i.e., can write

                                            y = Xβ + u

       for some X, some β, some y.

     • Another interesting example is Splines. This is a Piecewise Linear
       function. For example, suppose we have a scalar regressor x, which is
       time, i.e., xt = t, t = 1, 2, . . . , T. Further suppose that
                              
                               α1 + β 1 x + u          if x ≤ t∗1
                         y=       α2 + β 2 x + u if t∗1 ≤ x ≤ t∗2
                              
                                  α3 + β 3 x + u        if x ≥ t∗2 .

     • This can be expressed as follows:

                y = α1 + β 1 x + γ 1 D1 + δ 1 D1 · x + γ 2 D2 + δ 2 D2 · x + u,

       where
                                             ½
                                                 1 if x ≥ t∗1 ,
                                  D1 =
                                                 0    else
                                             ½
                                                 1 if x ≥ t∗2 ,
                                  D2 =
                                                 0    else.

     • How do we impose that the function join up? We must have

                              α1 + β 1 t∗1 = α1 + γ 1 + (β 1 + δ 1 )t∗1

               α1 + β 1 t∗2 + γ 1 + δ 1 t∗2 = α1 + γ 1 + (β 1 + δ 1 )t∗1 + γ 2 + δ 2 t∗2 ,
       which implies that

                                  γ 1 = −δ 1 t∗1 and γ 2 = −δ2 t∗2 ,

       which are two linear restrictions on the parameters, i.e.,

                 y = α1 + β 1 x + (D1 x − D1 t∗1 )δ 1 + (D2 x − D2 t∗2 )δ 2 + u.

     • Some Nonlinear in Parameters Functions
1.5. FUNCTIONAL FORM                                              23

  • Box—Cox
                                       xλ − 1
                             y =α+β           + u,
                                         λ
    where
                                  xλ − 1
                       as λ → 0,         → ln(x);
                                    λ
                                  xλ − 1
                        as λ → 1,        →x−1
                                    λ

  • Real money demand
                                            β2
                           y = β 1 X1 +          + u.
                                          x2 − γ
    If there exists γ > 0, then we have a Liquidity trap.

  • CES production function
                         £                            ¤β /β
                  Q = β 1 β 2 K −β 3 + (1 − β 2 )L−β 3 4 3 + u.

    Methods for treating these models will be considered below.
24   CHAPTER 1. LINEAR REGRESSION
Chapter 2
Statistical Properties of the
OLS Estimator

 • We now investigate the statistical properties of the OLS estimator in
   both the Þxed and random designs. SpeciÞcally, we calculate its exact
   mean and variance. We shall examine later what happens when the
   sample size increases.
                                             b is that it is linear in y, i.e.,
 • The Þrst thing to note in connection with β
   there exists a matrix C not depending on y such that

                          b = (X 0 X)−1 X 0 y = Cy.
                          β

 This property makes a lot of calculations simple.

 • We want to evaluate how βb varies across hypothetical repeated samples.
   We shall examine both the Þxed design and the random design case.
   The Þxed design is the main setting we use in this course; it is simpler to
   work with and gives the main intuition. The random design approach
   is given here for completeness; it will be come more relevant later in
   the course.

 • Fixed Design. First,
                 b = (X 0 X)−1 X 0 E(y) = (X 0 X)−1 X 0 Xβ = β,
               E(β)
                                                    b is unbiased.
   where this equality holds for all β. We say that β

                                     25
26CHAPTER 2. STATISTICAL PROPERTIES OF THE OLS ESTIMATOR

                                                                   b
  • Furthermore, we shall calculate the K × K covariance matrix of β,

                             b = E{(β
                         var(β)     b − β)(β
                                           b − β)0 }.

                                   bj ) and oﬀ-diagonals cov(β
    This has diagonal elements var(β                         bj , β
                                                                  bk ). We
    have

    var((X 0 X)−1 X 0 y) = (X 0 X)−1 X 0 var yX(X 0 X)−1 = E{(X 0 X)−1 X 0 εε0 X(X 0 X)−1 }
                         = (X 0 X)−1 X 0 σ 2 IX(X 0 X)−1 = σ 2 (X 0 X)−1 .

  • Random Design. For this result we need E[εi |xi ] = 0. We Þrst condition
    on the matrix X; this results in a Þxed design and the above results
    hold. Thus, if we are after conditional results, we can stop here. If
    we want to calculate unconditional mean and variance we must now
    average over all possible X designs. Thus

                         b = E{E(β|X)}
                       E(β)      b     = E(β) = β.

    On average we get the true parameter β. Note that this calculation uses
    the important property called “The Law of Iterated Expectation”. The
    most general version of this says that

                           E(Y |I1 ) = E[E(Y |I2 )|I1 ],

    whenever I1 ⊆ I2 for two information sets I1 , I2 .

  • Note that if only E[xi εi ] = 0, then the above calculation may not be
    valid. For example, suppose that Yi = Xi3 , where Xi is i.i.d. standard
    normal. Then β = 3 minimizes E[(Yi − bXi )2 ]. Now consider the least
    squares estimator
                                Pn            Pn    4
                         b        i=1 Xi Yi    i=1 Xi
                         β = Pn          2
                                            = Pn    2
                                                      .
                                   i=1 Xi      i=1 Xi

    You can’t show that this is unbiased, and indeed it isn’t.

  • As for the variance, we use another important property

                      var[y] =E[var(y|X)] + var[E(y|X)],
                                                                               27

  which is established by repeated application of the law of iterated ex-
  pectation. We now obtain
                       b = Evar(β|X)
                   var(β)       b    = σ 2 E{(X 0 X)−1 }.
   This is not quite the same answer as in the Þxed design case, and the
  interpretation is of course diﬀerent.
• The properties of an individual coeﬃcient can be obtained from the
  partitioned regression formula
                           e1 = (X 0 M2 X1 )−1 X 0 M2 y.
                           β      1             1


• In the Fixed Design
      b1 ] = (X 0 M2 X1 )−1 X 0 M2 Eεε0 M2 X1 (X 0 M2 X1 )−1 = σ 2 (X 0 M2 X1 )−1 .
  var[β        1             1                  1                    1


• In the special case that X2 = (1, . . . , 1)0 , we have

                               b1 ) = Pn       σ2
                           var(β                      2
                                                        .
                                          i=1 (xi − x)

  This is the well known variance of the least squares estimator in the
  single regressor plus intercept regression.
                                      b This will be important when we
• We now turn to the distribution of β.
  want to conduct hypothesis tests and construct conÞdence intervals. In
  order to get the exact distribution we will need to make an additional
  assumption.

     — (A4) y ∼ N(Xβ, σ 2 I) or
     — (A4r) y|X ∼ N(Xβ, σ 2 I).

• Under A4,
                             b ∼ N(β, σ 2 (X 0 X)−1 )
                             β
  in the Þxed design case, because
                                                  X
                                                  n
                          b = (X 0 X)−1 X 0 y =
                          β                             ci yi ,
                                                  i=1

        b is a linear combination of independent normals.
  i.e., β
28CHAPTER 2. STATISTICAL PROPERTIES OF THE OLS ESTIMATOR

  • Under A4r, the conditional distribution of β   b given X is normal with
                              2   0  −1
    mean β and variance σ (X X) . However, the unconditional distrib-
    ution will not be normal - in fact, it will be a scale mixture of normals
    meaning that, in the scalar case for simplicity, its density function is
                                Z         µ       ¶
                                     1      z−β
                      fβb (z) =         φ           g(v)dv,
                                    σ·v      σ·v
                                 P         1/2
    where g is the density of ( ni=1 x2i )     and φ is the standard normal
    density function.


2.1    Optimality
  • There are many estimators of β. Consider
                                       Pn       thePscalar regression yi =
                                    b
    βxi + εi . The OLS estimator is β = i=1 xi yi / ni=1 x2i . Also plausible
        e = y/x and β = Pn yi /xi , as well as nonlinear estimators such
    are β                   i=1
    as the LAD procedure
                                        X
                                        n
                             arg min             |yi − βxi |.
                                    β
                                           i=1

             b β,
  • In fact, β, e and β are all linear unbiased. How do we choose between
    estimators? Computational convenience is an important issue, but the
    above estimators are all similar in their computational requirements.
    We now investigate statistical optimality.
  • DeÞnition: The mean squared error (hereafter MSE) matrix of a generic
    estimator b
              θ of a parameter θ ∈ Rp is
                    E[(b
                       θ−θ)(b
                            θ−θ)0 ]

                 = E[(b
                      θ−E(b
                          θ)+E(b
                               θ) − θ)(b
                                       θ−E(b
                                           θ)+E(b
                                                θ)−θ)0 ]

                 = E[(b
                      θ−E(b
                          θ))(b
                              θ−E(b
                                  θ))0 ]
                   |       {z        }
                             variance

                    + [E(b
                         θ)−θ][E(b
                                 θ)−θ]0 .
                      |      {z      }
                            squared bias
2.1. OPTIMALITY                                                            29

  • The MSE matrix is generally a function of the true parameter θ. We
    would like a method that does well for all θ, not just a subset of para-
    meter values - the estimator b
                                 θ = 0 is an example of a procedure that
    will have MSE equal to zero at θ = 0, and hence will do well at this
    point, but as θ moves away, the MSE increases quadratically without
    limit.

  • MSE deÞnes a complete ordering when p = 1, i.e., one can always rank
    any two estimators according to MSE. When p > 1, this is not so. In
    the general case we say that b
                                 θ is better (according to MSE) than e
                                                                     θ if

                                     B≥A

    (i.e., B − A is a positive semideÞnite matrix), where B is the MSE
    matrix of e
              θ and A is the MSE of bθ.

  • For example, suppose that
                            · ¸               ·   ¸
                              10            2 0
                        A=       ,       B=         .
                              01            0 1/4

    In this case, we can not rank the estimators. The problem is due to
    the multivariate nature of the optimality criterion.

  • One solution is to take a scalar function of MSE such as the trace or de-
    terminant, which will result in a complete ordering. However, diﬀerent
    functions will rank estimators diﬀerently [see the example above].

  • Also note that no estimator can dominate uniformly across θ according
    to MSE because it would have to beat all constant estimatros which
    have zero MSE at a single point. This is impossible unless there is no
    randomness.

  • One solution is to change the criterion function. For example, we might
    take maxθ tr(MSE), which takes the most pessimistic view. In this
    case, we might try and Þnd the estimator that minimizes this criterion
    - this would be called a minimax estimator. The theory for this class of
    estimators is very complicated, and in any case it is not such a desirable
    criterion because it is so pessimistic about nature trying to do the worst
    to us.
30CHAPTER 2. STATISTICAL PROPERTIES OF THE OLS ESTIMATOR

  • Instead, we reduce the class of allowable estimators. If we restrict
    attention to unbiased estimators then this rules out estimators like
    b
    θ = 0 because they will be biased. In this case there is some hope of
    an optimality theory for the class of unbiased estimators.

  • We will now return to the linear regression model and make the further
    restriction that the estimators we consider are linear in y. That is, we
                                                   e that satisfy
    suppose that we have the set of all estimators β
                                    e = Ay
                                    β

      for some Þxed matrix A such that
                                  e = β, ∀β.
                                E(β)

      This latter condition implies that (AX − I)β = 0 for all β, which is
      equivalent to AX = I.

  • Gauss Markov Theorem. Assume that A1—A3 hold. The OLS estimator
    b is Best Linear Unbiased (BLUE), i.e.,
    β

                                    b ≤ var(β)
                                var(β)      e

      for any other LUE.

  • Proof. var(β)                      e = σ 2 AA0 and
               b = σ 2 (X 0 X)−1 ; var(β)

                    e − var(β)
                var(β)      b =     σ 2 [AA0 − (X 0 X)−1 ]
                               =    σ 2 [AA0 − AX(X 0 X)−1 X 0 A0 ]
                               =    σ 2 A[I − X(X 0 X)−1 X 0 ]A0
                               =    σ 2 AMA0
                               =    σ 2 (AM) · (M 0 A0 )
                               ≥    0.

  •     — Makes no assumption about the distribution of the errors; it only
          assumes 0 mean and σ 2 I variance.
        — Result only
                   Pncompares linear estimators; it says nothing about for
          example i=1 |yi − βxi |.
2.1. OPTIMALITY                                                         31

      — Result only compares unbiased estimators [biased estimators can
        have 0 variances]. In fact, although the OLS estimator is admis-
        sible with respect to MSE, it is inadmissible with respect to trace
        mean squared error when the number of regressors is at least three.
        The Stein estimator is better according to trace mean squared er-
        ror. Of course in large samples this is all irrelevant.
      — There are extensions to consider aﬃne estimators β      e = a + Ay
        for vectors a. There are also equivalent results for the invariant
        quantity yb.

  • If we dispense with the unbiasedness assumption and add the model
    assumption of error normality we get the well-known result.
                                     b is Best Unbiased (statement
  • Cramèr—Rao Theorem. Under A1-A4, β
    is for MLE’s).

  • By making the stronger assumption A4, we get a much stronger con-
    clusion. This allows us to compare say LAD estimation with OLS.

  • Asymptotically, a very large class of estimators are both unbiased and
    indeed linear so that the Gauss-Markov and Cramèr—Rao Theorems
    apply to a very broad class of estimators when the words “for large n”
    are inserted.
32CHAPTER 2. STATISTICAL PROPERTIES OF THE OLS ESTIMATOR
Chapter 3
Hypothesis Testing

 • In addition to point estimation we often want to know how good our
   estimator is and whether it is compatible with certain preconceived
   ‘hypotheses’ about the data.
 • Suppose that we observe certain data (y, X), and there is a true data
   distribution denoted by f , which is known to lie in a family of models
   F. We now suppose there is a further reduction called a Hypothesis
   H0 ⊆ F. For example, H0 could be the:

     — Prediction of a scientiÞc theory. For example, the interest elas-
       ticity of demand for money is zero; the gravitational constant is
       9.
     — Absence of some structure, e.g., independence of error term over
       time, homoskedasticity etc.
     — Pretesting (used as part of model building process).

 • We distinguish between a Simple hypothesis (under H0 , the data distri-
   bution is completely speciÞed) and a Composite hypothesis (in which
   case, H0 does not completely determine the distribution, i.e., there are
   ‘nuisance’ parameters not speciÞed by H0 ).
 • We also distinguish between Single and Multiple hypotheses (one or
   more restriction on parameters of f ).
 • We shall also introduce the alternative hypothesis HA , which will be
   the complement of H0 in F, i.e., F = H0 ∪ HA . That is, the choice of

                                   33
34                                 CHAPTER 3. HYPOTHESIS TESTING

      F is itself of some signiÞcance since it can restrict the range of values
      taken by the data distribution. We shall also distinguish between one-
      sided and two-sided alternatives; when we have a single real-valued
      parameter this is an easy notion to comprehend.

     • Examples

         — The theoretical model is the Cobb—Douglas production function

                                       Q = AK α Lβ .

           Empirical version: take logs and add an error term to give a linear
           regression
                                 q = a + αk + β` + ε.

           It is often of interest whether constant returns to scale operate,
           i.e., would like to test whether

                                        α+β =1

           is true. We may specify the alternative as α + β < 1, because we
           can rule out increasing returns to scale.
         — Market eﬃciency
                                  rt = µ + γ 0 It−1 + εt ,

           where rt are returns on some asset held between period t − 1 and
           t, while It is public information at time t. Theory predicts that
           γ = 0; there is no particular reason to restrict the alternative
           here.
         — Structural change

                                y = α + βxt + γDt + εt
                                       ½
                                           0 , t < 1974
                                Dt =
                                           1 , t ≥ 1974.
           Would like to test γ = 0.
3.1. GENERAL NOTATIONS                                                      35

3.1      General Notations
  • A hypothesis test is a rule [function of the data] which yields either
    reject or accept outcomes.
  • There are two types of mistakes that any rule can make:

        — Type I error is to reject when the null hypothesis is true
        — Type II error is of accepting a false hypothesis.

  • We would like to have as small a Type I and Type II error as possible.
    Unfortunatley, these are usually in conßict. The traditional approach
    is to Þx the Type I error and then try to do the best in terms of the
    Type II error.
  • We choose α ∈ [0, 1] called the size of the test [magnitude of Type I
    error]. Let T (data) be a test statistic, typically scalar valued. Then,
    Þnd acceptance region Cα of size α such that
                                Pr[T ∈
                                     / Cα |H0 ] = α.
      The rule is to reject H0 if T ∈
                                    / Cα and to accept otherwise. The practical
      problem is how to choose T so that Cα [or equivalently the rejeciton
      region Rα ] is easy to Þnd.
  • DeÞne also Power of test:
                        π = Pr[T ∈
                                 / Cα |HA ] = 1 − TypeII.
      It is desirable, ceteris paribus, to have a test that maximizes power for
      any given size.
  • Optimal testing. Neyman-Pearson Lemma. Suppose you have a para-
    metric model with parameter θ and consider the simple null hypothesis
    against a one-sided alternative:
                        H0 : θ = θ0 , HA : θ > θ0 or θ < θ0 .
      The likelihood ratio test is Uniformly Most Powerful UMP provided the
      parametric model has the monotone likelihood ratio (MLR) property.
      Examples: One parameter exponential families, e.g., Normal,Poisson,
      and Binomial.
36                                    CHAPTER 3. HYPOTHESIS TESTING

     • Testing against two-sided alternatives, UMP’s do not exist.
     • Example. X ∼ N(µ, 1); H0 : µ = 0 vs. µ > 0. In this case, the best
       rejection region is {X n : X̄ > zα /n1/2 }. For any µ > 0, this test is most
       powerful µ = 0 vs. µ. Region and rule distribution is independent of
       µ. In the two-sided test
                                                  zα/2
                                    {X n : |X̄| > 1/2 }
                                                  n
       is less powerful than
                                            zα
                             {X n : X̄ >        } when µ > 0,
                                           n1/2
       and less powerful than
                                            zα
                             {X n : X̄ <        } when µ < 0.
                                           n1/2
     • Unbiased and Invariant Tests. Just like in estimation it can help to
       reduce the class of tests. An unbiased test satisÞes
                                π(θ) ≥ α for all θ ∈ Θ1 .
       Clearly the one-sided interval is biased because when µ < 0 power is
       zero. The above two-sided normal test is UMP unbiased. Alterna-
       tively can eliminate some tests by requiring invariance under a group
       of transformations.


3.2       Examples
     • Hypothesis Testing in Linear Regression: y ∼ N(Xβ, σ 2 I).

          — Single (Linear) Hypothesis:
                                           c0 β = γ ∈ R,
            e.g., β 2 = 0 (t—test).
          — Multiple (Linear) Hypothesis:
                                 Rq×K β K×1 = rq×1 ,       q ≤ K,
            e.g., β 2 = β 3 = · · · = β K = 0.
3.3. TEST OF A SINGLE LINEAR HYPOTHESIS                                  37

        — Single Non-linear Hypothesis:

                               β 21 + β 22 + · · · + β 2K = 1.

Note that these are all composite hypotheses, i.e., there are nuisance para-
meters like σ 2 that are not speciÞed by the null hypothesis.


3.3     Test of a Single Linear Hypothesis
   • We wish to test the hypothesis

                                          c0 β = γ,

      e.g., β 2 = 0. Suppose that y ∼ N(Xβ, σ 2 I). Then,
                                    b−γ
                                 c0 β
                                                ∼ N(0, 1).
                           σ(c0 (X 0 X)−1 c)1/2
      We don’t know σ and must replace it by an estimate. There are two
      widely used estimates:

                                                ε0b
                                                b ε
                                 b2mle =
                                 σ
                                                 n

                                      2        ε0b
                                               b ε
                                     s      =
                                              n−K
      The Þrst estimate is the maximum likelihood estimator of σ 2 , which
      can be easily veriÞed. The second estimate is a modiÞcation of the
      MLE, which happens to be unbiased. Now deÞne the test statistic
                                              b−γ
                                           c0 β
                               T =                        .
                                     s(c0 (X 0 X)−1 c)1/2

   • Theorem Under H0 ,
                                  T ∼ t(n − K).

   • Proof. We show that:

        — (1) n−K
               σ2
                  s2 ∼ χ2n−K
38                                CHAPTER 3. HYPOTHESIS TESTING

                         b − γ are independent.
         — (2) s2 and c0 β

This establishes the theorem by the deÞning property of a t-random variable.

     • Recall that
                               ε0 ε X ³ εi ´2
                                       n

                                  2
                                    =         ∼ χ2n .
                               σ      i=1
                                          σ
       But b
           ε are residuals that use K parameter estimates. Furthermore,

                                   ε0b
                                   b ε = ε0 MX ε

       and

                           E[ε0 MX ε] =   E[tr MX εε0 ]
                                      =   tr MX E(εε0 )
                                      =   σ 2 tr MX
                                      =   σ 2 (n − tr PX )
                                      =   σ 2 (n − K)

       because

                      tr(X(X 0 X)−1 X 0 ) = tr X 0 X(X 0 X)−1
                                          = tr IK = K.

       These calculations show that

                                 ε0b
                                Eb ε = σ 2 (n − K),

                           ε0b
       which suggests that b ε/σ 2 cannot be χ2n [and incidentally that Es2 =
       σ 2 ].
     • Note that MX is a symmetric idempotent matrix, which means that it
       can be written
                                 MX = QΛQ0 ,
       where QQ0 = I and Λ is a diagonal matrix of eigenvalues, which in this
       case are either zero (K times) or one (n − K times). Furthermore, by
       a property of the normal distribution,

                                      Qε = ε∗
3.3. TEST OF A SINGLE LINEAR HYPOTHESIS                                  39

    has exactly the same normal distribution as ε [it has the same mean
    and variance, which is suﬃcient to determine the normal distribution].
    Therefore,
                                   ε X 2
                                       n−K
                                 ε0b
                                 b
                                     =      zi
                                 σ2     i=1

                                                                     ε0b
    for some i.i.d. standard normal random variables zi . Therefore, b ε/σ 2
        2
    is χn−K by the deÞnition of a chi-squared random variable.

  • Furthermore, under H0 ,
                        b − γ = c0 (X 0 X)−1 X 0 ε and b
                     c0 β                              ε = MX ε

    are mutually uncorrelated since

                E[MX εε0 X(X 0 X)−1 c] = σ 2 MX X(X 0 X)−1 c = 0.

    Under normality, uncorrelatedness is equivalent to independence.

  • We can now base test of H0 on
                                              b−γ
                                           c0 β
                               T =                        ,
                                     s(c0 (X 0 X)−1 c)1/2
    using the tn−k distribution for an exact test under normality. Can test
    either one-sided and two-sided alternatives, i.e., reject if

                                 |T | ≥ tn−K (α/2)

    [two-sided alternative] or if

                                     T ≥ tn−K (α)

    [one-sided alternative].

  • Above is a general rule, and would require some additional compu-
                            b Sometimes one can avoid this: if computer
    tations in addition to β.
    automatically prints out results of hypothesis for β i = 0, and one can
    redesign the null regression suitably. For example, suppose that

                                H0 : β 2 + β 3 = 1.
40                                     CHAPTER 3. HYPOTHESIS TESTING

       Substitute the restriction in to the regression yi = β 1 + β 2 xi + β 3 zi + ui ,
       which gives the restricted regression

                             yi − zi = β 1 + β 2 (xi − zi ) + ui .

       Now test whether β 3 = 0 in the regression

                         yi − zi = β 1 + β 2 (xi − zi ) + β 3 zi + ui .


3.4       Test of a Multiple Linear Hypothesis
     • We now consider a test of the multiple hypothesis Rβ = r. DeÞne the
       quadratic form
                                   £               ¤
                  F = (Rβ  b − r)0 s2 R(X 0 X)−1 R0 −1 (Rβ
                                                         b − r)/q

                            b − r)0 [R(X 0 X)−1 R0 ] (Rβ
                          (Rβ                          b − r)/q
                                                         −1
                        =                                       .
                                  (n − K)s2 /(n − K)

     • If y ∼ N(Xβ, σ 2 I), then
                                      χ2q /q
                           F =                  ∼ F (q, n − K)
                                 χ2n−K /(n − K)
       under H0 . The rule is that if

                                    F ≥ Fα (q, n − K),

then reject H0 at level α. Note that we can only test against a two-sided
alternative Rβ 6= r because we have squared value above.

     • Examples

         — Standard F —test, which is outputed from computer, is of the hy-
           pothesis
                                 β 2 = 0, . . . , β K = 0,
            where the intercept β 1 is included. In this case, q = K − 1, and

                                           H0 : Rβ = 0,
3.4. TEST OF A MULTIPLE LINEAR HYPOTHESIS                                41

         where                                 
                                       0
                                               
                                 R =  ... IK−1  .
                                       0
         The test statistic is compared with critical value from the F (K −
         1, n − K) distribution.
      — Structural Change. Null hypothesis is

                                     y = Xβ + u.

         Alternative is

                            y1 = X1 β 1 + u1 ,      i ≤ n1 ,
                            y2 = X2 β 2 + u2 ,      i ≥ n2 ,

         where n = n1 + n2 . Let
                               µ ¶           ·       ¸
                                 y1     ∗      X1 0
                       y =           , X =             ,
                                 y2            0 X2
                               µ ¶              µ ¶
                        ∗        β1               u1
                      β =                 , u=           .
                                 β 2 2K×1         u2 n×1
         Then, we can write the alternative regression as

                                    y = X ∗ β ∗ + u.

         Consider the null hypothesis H0 : β 1 = β 2 . Let
                                            .
                               RK×2K = [IK .. − IK ].

         Compare with F (K, n − 2K).

  • ConÞdence interval is just critical region centred not at H0 , but at a
    function of parameter estimates. For example,
                         b ± tα/2 (n − K)s{c0 (X 0 X)−1 c}1/2
                      c0 β

    is a two-sided conÞdence interval for the scalar quantity c0 β. Can also
    construct one-sided conÞdence intervals and multivariate conÞdence in-
    tervals.
42                                    CHAPTER 3. HYPOTHESIS TESTING

3.5       Test of Multiple Linear Hypothesis Based
          on Þt
     • The idea behind the F test is that under H0 ,

                                           b−r
                                          Rβ

       should be stochastically small, but under the alternative hypothesis it
       will not be so.

     • An alternative approach is based on Þt. Suppose we estimate β subject
       to the restriction Rβ = r, then the sum of squared residuals from that
       regression should be close to that from the unconstrained regression
       when the null hypothesis is true [but if it is false, the two regressions
       will have diﬀerent Þtting power].

     • To understand this we must investigate the restricted least squares
       estimation procedure.

          — Unrestricted regression:

                                     min(y − Xb)0 (y − Xb)
                                      b


            b, u
            β           b , Q=u
               b = y − Xβ     b0 u
                                 b.
          — Restricted regression:

                            min(y − Xb)0 (y − Xb) s.t. Rb = r.
                             b

                                             0
            β ∗ , u∗ = y − Xβ ∗ , Q∗ = u∗ u∗

     • The idea is that under H0 , Q∗ ∼ Q, but under the alternative the two
       quantities diﬀer. The following theorem makes this more precise.

     • Theorem. Under H0 ,

                         Q∗ − Q n − K
                                      = F ∼ F (q, n − K).
                           Q      q
3.5. TEST OF MULTIPLE LINEAR HYPOTHESIS BASED ON FIT 43

  • Proof. We show that
                                    £             ¤
                             b − r)0 R(X 0 X)−1 R0 −1 (Rβ
                  Q∗ − Q = (Rβ                          b − r)

    Then, since
                                  s2 = Q/(n − K)
    the result is established.
  • To solve the restricted least squares problem we use the Lagrangean
    method. We know that β ∗ and λ∗ solve the Þrst order condition of the
    Lagrangean
                            1
                   L(b, λ) = (y − Xb)0 (y − Xb) + λ0 (Rb − r).
                            2
    The Þrst order conditions are

                         −X 0 y + X 0 Xβ ∗ + R0 λ∗ = 0(1)

                                              Rβ ∗ = r.(2)

    Now, from (1)
                          R0 λ∗ = X 0 y − X 0 Xβ ∗ = X 0 u∗ ,
    which implies that

              (X 0 X)−1 R0 λ∗ = (X 0 X)−1 X 0 y − (X 0 X)−1 X 0 Xβ ∗

                                   b − β∗
                                 = β

    and
                                         b − Rβ ∗ = Rβ
                     R(X 0 X)−1 R0 λ∗ = Rβ           b − r.
    Therefore,               £              ¤−1
                         λ∗ = R(X 0 X)−1 R0       b − r)
                                                (Rβ
    and                               £             ¤
                      b − (X 0 X)−1 R0 R(X 0 X)−1 R0 −1 (Rβ
                 β∗ = β                                   b − r).
    This gives the restricted least squares estimator in terms of the restric-
    tions and the unrestricted least squares estimator. From this relation
    we can derive the statistical properties of the estimator β ∗ .
44                                     CHAPTER 3. HYPOTHESIS TESTING

     • We now return to the testing question. First, write
                                          b + β∗ − β
                                     β∗ = β        b

       and

                         (y − Xβ ∗ )0 (y − Xβ ∗ )

                               b − X(β ∗ − β)]
                      = [y − X β           b 0 [y − X β
                                                      b − X(β ∗ − β]
                                                                  b

                               b 0 (y − X β)
                      = (y − X β)         b + (βb − β ∗ )0 X 0 X(β
                                                                 b − β∗)
                                 b 0 X(β ∗ − β)
                        −(y − X β)           b


                        b0 u
                      = u       b − β ∗ )0 X 0 X(β
                           b + (β                b − β∗)

       using the orthogonality property of the unrestricted least squares esti-
       mator. Therefore,
                                      b − β ∗ )0 X 0 X(β
                            Q∗ − Q = (β                b − β ∗ ).

                                     b − β ∗ and λ∗ obtained above and can-
       Substituting our formulae for β
       celling out, we get
                                       £            ¤
                               b − r)0 R(X 0 X)−1 R0 −1 (Rβ
                    Q∗ − Q = (Rβ                          b − r)

       as required.



     • An intermediate representation is
                                            0
                               Q∗ − Q = λ∗ R(X 0 X)−1 R0 λ∗ .

       This brings out the use of the Lagrange Multipliers in deÞning the test
       statistic, and lead to the use of this name.

     • Importance of the result: the Þt version was easier to apply in the
       old days, before fast computers, because one can just do two separate
       regressions and use the sum of squared residuals. Special cases:
3.5. TEST OF MULTIPLE LINEAR HYPOTHESIS BASED ON FIT 45

      — Zero restrictions
                                β2 = · · · = βK = 0
         Then restricted regression is easy. In this case, q = K − 1. Note
         that the R2 can be used to do an F —test of this hypothesis. We
         have
                                        Q     Q∗ − Q
                             R2 = 1 − ∗ =              ,
                                        Q        Q
         which implies that
                                      R2 /(K − 1)
                               F =                   .
                                   (1 − R2 )/(n − k)
      — Structural change. Allow coeﬃcients to be diﬀerent in two periods.
        Partition                      µ ¶
                                         y1 n1
                                    y=
                                         y2 n2
                                    ¾          ·      ¸µ ¶
                   y1 = X1 β 1 + u1              X1 0   β1
                                      or y =                 + u.
                   y2 = X2 β 2 + u2              0 X2   β2
        Null is of no structural change, i.e.,
                                   H0 : β 1 = β 2 ,
         with
                                           .
                                   R = (I .. − I).

  • Consider the more general linear restriction
                             β 1 + β 2 − 3β 4 = 1
                                    β 6 + β 1 = 2.
    Harder to work with. Nevertheless, can always reparameterize to obtain
    restricted model as a simple regression. Partition X, β, and R
                X = ( X1 , X2 ) ;            R = ( R1 , R2 ) ;
                     n×(k−q) n×q                    q×(k−q) q×q
                    µ ¶
                      β1
                β =       ,
                      β2
    where
                  X1 β 1 + X2 β 2 = Xβ   ;     R1 β 1 + R2 β 2 = r,
    where R2 is of full rank and invertible.
46                                      CHAPTER 3. HYPOTHESIS TESTING

     • Therefore,

                         β 2 = R2−1 (r − R1 β 1 )

                        Xβ = X1 β 1 + X2 [R2−1 (r − R1 β 1 )]
                           = (X1 − X2 R2−1 R1 )β 1 + X2 R2−1 r,

       so that
                        y − X2 R2−1 r = (X1 − X2 R2−1 R1 )β 1 + u.

     • In other words, we can regress

                                      y ∗ = y − X2 R2−1 r

       on
                                 X1∗ = (X1 − X2 R2−1 R1 )
       to get β ∗1 , and then deÞne

                                  β ∗2 = R2−1 (r − R1 β ∗1 ).

       We then deÞne
                             u∗ = y − X1 β ∗1 − X2 β ∗2 and Q∗
       accordingly.


3.6         Examples of F —Tests, t vs. F
     • Chow Tests: Structural change with intercepts. The unrestricted model
       is                                           
                µ     ¶ ·                   ¸ α1         µ     ¶
                   y1         i1 0 x1 0        α2
                                                     
                                                     +     u1
                         =                                       ,
                   y2         0 i2 0 x2  β 1              u2
                                                 β2
       and let θ = (α1 , α2 , β 1 , β 2 ). Diﬀerent slopes and intercepts allowed.

     • The Þrst null hypothesis is that the slopes are the same, i.e.,

                                      H0 : β 1 = β 2 = β.
3.6. EXAMPLES OF F —TESTS, T VS. F                                          47

    The restricted regression is
                                                            
                    µ        ¶       ·             ¸      α1     µ    ¶
                        y1               i1 0 x1         α2  +   u1
                                 =                                      .
                        y2               0 i2 x2                   u2
                                                          β

    The test statistic is
                                            0
                                     (u∗ u∗ − ub0 u
                                                  b)/ dim(β 1 )
                                 F =                            ,
                                       ubu
                                         0 b/(n − dim(θ))
    which is compared with the quantiles from the

                                     F (dim(β 1 ), n − dim(θ))

    distribution.

  • The second null hypothesis is that the intercepts are the same, i.e.,

                                         H0 : α1 = α2 = α.

    Restricted regression (α, β 1 , β 2 )
                                                            
                    µ        ¶       ·              ¸     α      µ    ¶
                        y1               i1 x1 0         β1  +   u1
                                 =                                      .
                        y2               i2 0 x2                   u2
                                                          β2

    Note that the unrestricted model can be rewritten using dummy vari-
    ables:
                      yi = α + βxi + γDi + δxi Di + ui ,
    where                                   ½
                                                1 in period 2
                                     Di =
                                                0 else.
    Then, in period 1
                                         yi = α + βxi + ui ,
    while in period 2

                                 yi = α + γ + (β + δ)xi + ui .

    The null hypothesis is that γ = 0.
48                                   CHAPTER 3. HYPOTHESIS TESTING

     • But now suppose that n2 < K. The restricted regression is ok, but
       the unrestricted regression runs into problems in the second period
       because n2 is too small. In fact, ub2 ≡ 0. In this case we must simply
       acknowledge the fact that the degrees of freedom lost are n2 not K.
       Thus
                                (Q∗ − Q)/n2
                          F =               ∼ F (n2 , n1 − K)
                                Q/(n1 − K)
       is a valid test in this case.


3.7       Likelihood Based Testing
     • We have considered several diﬀerent approaches which all led to the
       F test in linear regression. We now consider a general class of test
       statistics based on the Likelihood function. In principle these apply
       to any parametric model, but we shall at this stage just consider its
       application to linear regression.
     • The Likelihood is denoted L(y, X; θ), where y, X are the observed data
       and θ is a vector of unknown parameter. The maximum likelihood esti-
       mator can be determined from L(y, X; θ), as we have already discussed.
       This quantity is also useful for testing.
     • Consider again the linear restrictions
                                      H0 : Rθ = r.

          — The unrestricted maximum likelihood estimator of θ is denoted by
            b
            θ
          — the restricted MLE is denoted by θ∗ , [this maximizes L subject to
            the restrictions Rθ − r = 0].

     • Now deÞne the following test statistics:
                           "             #
                                 L(b  θ)
                  LR : 2 log           ∗   = 2{log L(b  θ) − log L(θ∗ )}
                                 L(θ )
                                      n               o−1
               Wald : (Rb    θ − r)0 RH(b     θ)−1 R0     (Rb
                                                            θ − r)
                          ∂ log L ¯¯0                   ¯
                                           ∗ −1 ∂ log L ¯
                 LM :              ¯  H(θ   )           ¯ ,
                             ∂θ θ∗                 ∂θ θ∗
3.7. LIKELIHOOD BASED TESTING                                           49

    where
                                             ∂ 2 log L ¯¯
                                  H(θ) = −              ¯
                                              ∂θ∂θ0 θ
      — The Wald test only requires computation of the unrestricted esti-
        mator
      — the Lagrange Multiplier only requires computation of the restricted
        estimator.
      — The Likelihood ratio requires computation of both.
      — There are circumstances where the restricted estimator is easier to
        compute, and there are situations where the unrestricted estimator
        is easier to compute. These computational diﬀerences are what
        has motivated the use of either the Wald or the LM test.
      — When it comes to nonlinear restrictions g(θ) = 0, the LR test has
        the advantage that it is invariant to the parameterization, while
        the Wald test is aﬀected by the way in which the restrictions are
        expressed.

  • In the linear regression case, θ = (β, σ 2 ), and the restrictions only
    apply to β, so that Rβ = r. Therefore, we can replace the derivatives
    with respect to θ by derivatives with respect to β only.
  • The log-likelihood is
                              −n         n          1
               log L(θ) =        log 2π − log σ 2 − 2 u(β)0 u(β)
                               2         2         2σ
    and its derivatives are
                       ∂ log L          1 0
                                   =      X u(β)
                          ∂β           σ2
                       ∂ log L            n       1
                                   =   − 2 + 4 u(β)0 u(β)
                          ∂σ 2           2σ      2σ
                        2
                      ∂ log L          −1 0
                                   =       XX
                       ∂β∂β 0          σ2
                      ∂ 2 log L         n       2
                                   =        − 6 u(β)0 u(β)
                      (∂σ 2 )2         2σ 4   2σ
                      ∂ 2 log L           1
                                   =   − 4 X 0 u(β).
                      ∂β∂σ 2             σ
50                                  CHAPTER 3. HYPOTHESIS TESTING

     • The Wald test is
                                 £                 ¤−1
                   W = (Rβb − r)0 R(X 0 X)−1 R0 σ
                                                b2       b − r)
                                                       (Rβ
                       Q∗ − Q
                     =         ,
                        (Q/n)
       where
                                      b2 = Q/n
                                      σ
       is the MLE of σ 2 .

         — The Wald test statistic is the same as the F —test apart from the
                  b2 instead of s2 and a multiplicative factor q. In fact,
           use of σ
                                                 n
                                      W = qF        .
                                                n−k
            This is approximately equal to qF when the sample size is large.

     • The Lagrange Multiplier or Score or Rao test statistic is
                                   0  ½       ¾−1 0 ∗
                                 u∗ X X 0 X       Xu
                         LM = ∗2           ∗2
                                                        ,
                                  σ      σ         σ ∗2
       where
                                     σ ∗2 = Q∗ /n.

         — Recall that
                                       X 0 u∗ = R0 λ∗ .
            Therefore,
                                          0
                                      λ∗ R(X 0 X)−1 R0 λ∗
                               LM =                       ,
                                             σ ∗2
            where λ∗ is the vector of Lagrange Multipliers evaluated at the
            optimum.
         — Furthermore, we can write the score test as
                                               µ        ¶
                                 Q∗ − Q               Q
                          LM =            =n 1− ∗ .
                                  (Q∗ /n)            Q
            When the restrictions are the standard zero ones, the test statistic
            is n times the R2 from the unrestricted regression.
3.7. LIKELIHOOD BASED TESTING                                            51

  • The Likelihood Ratio

          b σ        n       n         1 0      n        1     b0 u
                                                               u  b n
    log L(β, b2 ) = − log 2π− log σ
                                  b2 − 2 u
                                         bub = − log 2π− 2 log      −
                     2       2        2b
                                       σ        2       2b
                                                         σ      n 2
    and
                                                                              0
            ∗        n       n           1            n       n    u∗ u∗ n
    log L(β , σ ) = − log 2π− log σ ∗2 − ∗2 u∗0 u∗ = − log 2π− log
                 ∗2
                                                                        − .
                     2       2          2σ            2       2      n   2
    These two lines follow because

                        b2 = u
                        σ    b0 u
                                b/n and σ ∗2 = u∗0 u∗ /n.

    Therefore,
                    b σ         ·               ¸
                  L(β, b2 )          Q∗       Q
       LR = 2 log            = n log    − log     = n[log Q∗ − log Q].
                  L(β, σ 2 )         n        n

  • Note that W, LM, and LR are all monotonic functions of F, in fact
                                    qn
                            W = F      ,
                                  n−k
                                    W
                           LM =          ,
                                1 + W/n
                                     µ       ¶
                                           W
                           LR = n log 1 +      .
                                           n
    If we knew the exact distribution of any of them we can obtain the
    exact distributions of the others and the test result will be the same.

  • However, in practice one uses asymptotic critical values, which lead to
    diﬀerences in outcomes.We have

                               LM ≤ LR ≤ W,

    so that the Wald test will reject more frequently than the LR test and
    the LM tests, supposing that the same critical values are used.

  • Also,
                                     qF ≤ W
52   CHAPTER 3. HYPOTHESIS TESTING
Chapter 4
Further Topics in Estimation:

4.1     Omission of Relevant Variables
  • Suppose that
                               y = X1 β 1 + X2 β 2 + u,
      where the error term obeys the usual conditions.
  • Suppose however that we regress y on X1 only. Then,
                 b1 = (X 0 X1 )−1 X 0 y
                 β        1        1
                    = (X10 X1 )−1 X10 (X1 β 1 + X2 β 2 + u)
                    = β 1 + (X10 X1 )−1 X10 X2 β 2 + (X10 X1 )−1 X10 u,
      so that
                          b1 ) = β 1 + (X 0 X1 )−1 X 0 X2 β 2
                        E(β                1        1
                               = β 1 + β 12 ,
      where
                              β 12 = (X10 X1 )−1 X10 X2 β 2 .
      In general βb1 is biased and inconsistent; the direction and magnitude
      of the bias depends on β 2 and on X10 X2 .
  • Example. Wages on education get positive eﬀect but are omitting abil-
    ity. If ability has a positive eﬀect on wages and is positively correlated
    with education this would explain some of the positive eﬀect. Wages
    on race/gender (discrimination). Omit experience/education.

                                        53
54                  CHAPTER 4. FURTHER TOPICS IN ESTIMATION:

     • What about variance? In Þxed design, variance is σ 2 (X10 X1 )−1 , which
       is smaller than when X2 is included. Therefore, if MSE is the criterion,
       one may actually prefer this procedure - at least in Þnite samples.

     • Estimated variance is
                                      s2 (X10 X1 )−1 ,
       where
                                  y 0 M1 y
                         s2 =
                                 n − K1
                                 (X2 β 2 + u)0 M1 (X2 β 2 + u)
                               =                               ,
                                           n − K1
       which has expectation

                                 2     β 02 X20 M1 X2 β 2
                                          2
                           E(s ) = σ +
                                            n − K1

                                     ≥ σ2,

       since M1 is a positive semi-deÞnite matrix.

                                                b1 is upwardly biased.
         — Therefore, the estimated variance of β

     • If X10 X2 = 0, then βb is unbiased, but standard errors are still biased
       with expectation
                                     2    β 02 X20 X2 β 2
                                    σ +                   .
                                             n − K1
       In this special case, the t—ratio is downward biased.

     • More generally, t—ratio could be upward or downward biased depending
                                                 b1 .
       of course on the direction of the bias of β

     • Some common examples of omitted variables

         — Seasonality
         — Dynamics
         — Nonlinearity.
4.2. INCLUSION OF IRRELEVANT VARIABLES                                      55

  • In practice we might suspect that there are always going to be omitted
    variables. The questions is: is the magnitude large and the direction un-
    ambiguous? To address this question we Þrst look at the consequences
    of including too many variables in the regression.


4.2     Inclusion of irrelevant variables
  • Suppose now that
                                   y = X1 β 1 + u,
      where u obeys the usual conditions.

  • However, we regress y on both X1 and X2 . Then
                        b1 = (X 0 M2 X1 )−1 X 0 M2 y
                        β        1           1
                           = β 1 + (X10 M2 X1 )−1 X10 M2 u

  • Therefore

                            E(βb1 ) = β 1 all β 1
                               b1 ) = σ 2 (X 0 M2 X1 )−1 .
                           var(β            1


  • Compare this with the variance of y on X1 , which is only σ 2 (X10 X1 )−1 .
    Now
                     X10 X1 − X10 M2 X1 = X10 P2 X1 ≥ 0
      which implies that

                           (X10 X1 )−1 − (X10 M2 X1 )−1 ≤ 0.

      Always better oﬀ, as far as variance is concerned, with the smaller
      model.

  • We can generalize the above discussion to the case where we have some
    linear restrictions Rβ = r. In which case, the restricted estimator is
                       b − (X 0 X)−1 R0 [R(X 0 X)−1 R0 ]−1 (Rβ
                  β∗ = β                                     b − r)

      If we estimate by restricted least squares we get smaller variance but
      if the restriction is not true, then there is a bias.
56                    CHAPTER 4. FURTHER TOPICS IN ESTIMATION:

     • There is clearly a trade-oﬀ between bias and variance.

     • The above arguments suggest that including irrelevant variables never
       leads to bias, but this is not correct. We relied above on the assumption
       that the included regressors are all Þxed and therefore the error term is
       uncorrelated with them. Clearly, if one of the included right hand side
       variables was say y, then you would deÞnitely get a biased estimate of
       the coeﬃcient on the remaining variables.


4.3        Model Selection
     • Let M be a collection of linear regression models obtained from a
       given set of K regressors X = (X1 , . . . , XK ), e.g., X, X1 , ( X2 , X27 ), etc.
       Suppose that the true model lies in M. There are a total of (2K − 1)
       diﬀerent subsets of X, i.e., models.

     • Let Kj be the number of explanatory variables in a given regression.
       The following criteria can be used for selecting the ‘best’ regression:

                       2         n−1                     n−1 u bj u
                                                                  bj
                    Rj = 1 −           (1 − Rj2 ) = 1 −          0 ,
                                n − Kj                  n − Kj u u
                                                 µ        ¶
                                          b0j u
                                          u   bj       Kj
                                P Cj =             1+
                                        n − Kj          n
                                            b0j u
                                            u   bj 2Kj
                                   AICj = ln       +
                                              n      n
                                          0
                                        u   bj Kj log n
                                         bj u
                            BICj = ln            +      .
                                          n          n
       The Þrst criterion should be maximized, while the others should be
                                                2
       minimized. Note that maximizing Rj is equivalent to minimizing the
                                  bj u
       unbiased variance estimate u  bj /(n − Kj ).

     • It has been shown that all these methods have the property that the
       selected model is larger than or equal to the true model with proba-
       bility tending to one; only BICj correctly selects the true model with
       probability tending to one.

     • M may be large and computing 2K − 1 regressions infeasible.
4.4. MULTICOLLINEARITY                                                       57

  • True model may not be in M, but procedure is guaranteed to Þnd a
    best model (data mining).
  • Other criteria are important, especially for nonexperimental data.
        — Consistency with economic theory elasticities the right sign? De-
          mand slopes down?
        — Consistency with data, e.g., suppose dependent variable is food
          share ∈/ [0, 1], then ideally don’t want a model that predicts out-
          side this range.
        — Residuals should be approximately random, i.e., pass diagnostic
          checks for serial correlation, heteroskedasticity, nonlinearity, etc.
        — How well model performs out-of-sample. (Often used in time series
          analysis.)
        — Correlation is not causation.
  • An alternative strategy is to choose a large initial model and perform a
    sequence of t—tests to eliminate redundant variables. Finally, we give a
    well known result that links the properties of the regression t test and
    the R squared.
       2
  • R falls (rises) when the deleted variable has t > (<)1


4.4        Multicollinearity
  • Exact multicollinearity: X 0 X is singular, i.e., there is an exact, linear,
    relationship between variables in X. In this case, cannot deÞne least
    squares estimates
                              b = (X 0 X)−1 X 0 y.
                              β
      Solution: Find a minimal (not unique) basis X ∗ for C(X) and do least
      squares.
  • Example: Seasonal dummies
                          D1    =   1ifQuarter 1, 0 else
                          D2    =   1ifQuarter 2, 0 else
                          D3    =   1ifQuarter 3, 0 else
                          D4    =   1ifQuarter 4, 0 else.
58                   CHAPTER 4. FURTHER TOPICS IN ESTIMATION:

     DeÞne the regressor matrix
                                                     
                                  1        1 0 0 0
                                 ...      0 1 0 0 
                                                      
                                 .                    
                                 ..       0 0 1 0 
                                                      
                            X =  ..                   .
                                 .        0 0 0 1 
                                                      
                                           .. ..      
                                 1          . . 0 0 
                                  ..       .. .. .. ..
                                   .        . . . .

     In this case, for all observations:

                       Col2 + Col3 + Col4 + Col5 = Col1

     • Solution

          — Drop D4, and run

                             y = α + β 1 D1 + β 2 D2 + β 3 D3 + u

          — Drop intercept, and run

                           y = γ 1 D2 + γ 2 D2 + γ 3 D3 + γ 4 D4 + u.

            Gives same yb and ub, but diﬀerent parameters. Intuitively, the
            same vector space is generated by both sets of regressors.

     • ‘Approximate Multicollinearity’, i.e., det(X 0 X) ≈ 0. Informally, if the
       columns of X are highly mutually correlated then it is hard to get their
       separate eﬀects. This is really a misnomer and shan’t really be treated
       as a separate subject. Arthur Goldberger in his text on econometrics
       illustrated this point by having a section on ‘micronumerosity’, a sup-
       posed problem where one has too few observations. The consequence of
       this is that the variance of the parameter estimates is large - precisely
       the symptom of ‘Approximate Multicollinearity’.
4.5. INFLUENTIAL OBSERVATIONS                                               59

4.5      Inßuential Observations
  • At times one can suspect that some observations are having a large
    impact on the regression results. This could be a real inßuence, i.e.,
    just part of the way the data were generated, or it could be because
    some observations have been misrecorded, say with an extra zero added
    on by a careless clerk.

  • How do we detect inßuential observations? Delete one observation at
    a time and see what changes. DeÞne the leave-one-out estimator and
    residual

                          b
                          β(i)  = [X(i)0 X(i)]−1 X(i)0 y(i)
                         u                 b
                         bj (i) = yj − X 0 β(i),  j


      where
                         y(i) = (y1 , . . . , yi−1 , yi+1 , . . . , yn )0
      and similarly for X(i). We shall say that observation (Xi , yi ) is inßu-
                bi (i) is large.
      ential if u

  • Note that
                              u                  b − β),
                              bi (i) = ui − Xi0 (β(i)
      so that

                      E[bui (i)] = 0
                         ui (i)] = σ 2 [1 + x0i (X 0 (i)X(i))−1 xi ].
                     var[b

      Then examine standardized residuals
                                           bi (i)
                                           u
                         Ti =        0
                                                             .
                                ú + xi (X (i)X(i))−1 xi )1/2
                                s(1      0



  • Large values of Ti , in comparison with standard normal, are evidence
    of extreme observations or outliers. Unfortunately, we do not learn
    whether this is because the error distribution has a diﬀerent shape
    from the normal, e.g., t-distribution, or whether the observation has
    been misrecorded by some blundering clerk.
60                   CHAPTER 4. FURTHER TOPICS IN ESTIMATION:

4.6       Missing Observations
     • In surveys, responders are not representative sample of full popula-
       tion. For example, we don’t have information
                                               Pn       on people with y >
                                             1
       $250, 000, y ≤ $5, 000. In this case, n i=1 yi is biased and inconsis-
       tent as an estimate of the population mean.

     • In regression, parameter estimates are biased if selection is:

          — On dependent variable (or on error term);
          — Non-random. For example, there is no bias [although precision is
            aﬀected] if in a regression of inc on education, we have missing
            data when edu ≥ 5 years.

     • We look at ‘ignorable’ case where the process of missingness is unrelated
       to the eﬀect of interest.

     • Missing y
                                    yA XA nA
                                     ? XB nB .

     • What do we do? One solution is to impute values of the missing vari-
       able. In this case, we might let

                     ybB = XB β          bA = (X 0 XA )−1 X 0 yA .
                              bA , where β
                                                A          A


       We can then recompute the least squares estimate of β using ‘all the
       data’
                                             · ¸
                          b          0  −1 0 yA
                          β = (X X) X               ,
                                               ybB
                                 µ     ¶
                                    XA
                         X =             .
                                   XB

       However, some simple algebra reveals that there is no new information
       in ybB , and in fact
                                     b=β
                                     β   bA .
4.6. MISSING OBSERVATIONS                                                             61

  • Start from
                                                ·          ¸
                               0     −1     0        yA
                         (X X) X                       b     = (XA0 XA )−1 XA0 yA ,
                                                    XB β A
    and pre-multiply both sides by

                                     X 0 X = (XA0 XA + XB0 XB ).

  • Ee have
                         ·           ¸
                     0        yA                             bA
                 X              bA         = XA0 yA + XB0 XB β
                             XB β

                                           = XA0 yA + XB0 XB (XA0 XA )−1 XA0 yA

    and

           X 0 X(XA0 XA )−1 XA0 yA = XA0 yA + (XB0 XB )(XA0 XA )−1 XA0 yA .

    Therefore, this imputation method has not really added anything. It
    is not possible to improve estimation in this case.
  • Now suppose that we have some missing X. For example, X = (x, z),
    and xB is missing, i.e., we observe (xA , zA , yA ) and (zB , yB ). The model
    for the complete data set is

                                                y = βx + γz + u

    with var(u) = σ 2u , and suppose also that

                                                      x = δz + ²

    with ² being an iid mean zero error term with var(²) = σ 2u .
  • There are a number of ways of trying to use the information in period
    B. First, predict xB by regressing xA on zA

                                          bB = zB (zA0 zA )−1 zA0 xA .
                                          x

    Then regress y on                                   µ           ¶
                                                b=          xA zA
                                                X                       .
                                                            bB zB
                                                            x
62                  CHAPTER 4. FURTHER TOPICS IN ESTIMATION:

     • The second approach is to write now

                          yA = βxA + γzA + uA
                          xA = δzA + ²A
                          yB = (γ + βδ)zB + uB + β²B ,

       where we have substituted out the xB , which we don’t observe. Now
       we can estimate β, γ, and δ from the A observations, denoting these
                    bA , γ
       estimates by β    bA , and b
                                  δA . Then we have a new regression with
                                   bAb
                              yB − β δ A zB = γzB + eB

       for some error term e that includes uB + β²B plus the estimation error
          bAb
       in β  δ A . This regression can be jointly estimated with the
                                    bA xA = γzA + eA .
                               yA − β

     • This sometimes improves matters, but sometimes does not! The answer
       depends on relationship between x and z. In any case, the eﬀect β of
       x is not better estimated; the eﬀect of z maybe improved. Griliches
       (1986) shows that the (asymptotic) relative eﬃciency of this approach
       to the just use A least squares estimator is
                                       µ          2
                                                    ¶
                                               2 σ²
                                (1 − λ) 1 + λβ 2 ,
                                                 σu
       where λ is the fraction of the sample that is missing. Eﬃciency will be
       improved by this method when

                                        σ 2²    1
                                   β2    2
                                             <     ,
                                        σu     1−λ
       i.e., the unpredictable part of x from z is not too large relative to the
       overall noise in the y equation.

     • Another approach. Let θ = γ + βδ. Then clearly, we can estimate θ
       from the B data by OLS say, call this b             bB = b
                                             θB . Then let γ         bAb
                                                                θB − β δA.
       Now consider the class of estimators

                              b        γ A + (1 − ω)b
                              γ (ω) = ωb            γB ,
4.6. MISSING OBSERVATIONS                                                    63

    as ω varies. In the homework 2 we showed that the best choice of ω is
                                           σ 2A − σ AB
                            ω opt =                       ,
                                      σ 2A + σ 2B − 2σ AB

    where in our case σ 2A , σ 2B are the asymptotic variances of the two es-
    itmators and σ AB is their asymptotic vcovariance. Intuitively, unless
    either σ 2A = σ AB or σ 2B = σ AB , we should be able to improve matters.

  • What about the likelihood approach? Suppose for convenience that z
    is a Þxed variable, then the log likelihood function of the observed data
    is              X                           X
                         log f (yA , xA |zA ) +   log f (yB |zB ).
                      A                         B

    Suppose that u, ² are normally distributed and mutually independent,
    then
           µ     ¶       ·µ              ¶ µ 2                       ¶¸
              yA             (γ + βδ)zA         σ u + β 2 σ 2² βσ 2²
                    ∼N                     ,
             xA                  δzA                           σ 2²
                              £                           ¤
                       yB ∼ N (γ + βδ)zB , σ 2u + β 2 σ 2² ,
    which follows from the relations x = δz + ² and y = (γ + βδ)z + u + β².
    There are Þve unknown parameters θ = (γ, β, δ, σ 2u , σ 2² ). The likelihood
    follow from this.

  • The MLE is going to be quite complicated here because the error vari-
    ances depend on the mean parameter β, but it going to be more eﬃcient
    than the simple least squares that only uses the A data.
64   CHAPTER 4. FURTHER TOPICS IN ESTIMATION:
Chapter 5
Asymptotics

5.1      Types of Asymptotic Convergence
  • Exact distribution theory is limited to very special cases [normal i.i.d.
    errors linear estimators], or involves very diﬃcult calculations. This is
    too restrictive for applications. By making approximations based on
    large sample sizes, we can obtain distribution theory that is applicable
    in a much wider range of circumstances.
  • Asymptotic theory involves generalizing the usual notions of conver-
    gence for real sequences to allow for random variables. We say that a
    real sequence xn converges to a limit x∞ , denoted limn→∞ xn = x∞ , if
    for all ² > 0 there exists an n0 such that

                                   |xn − x∞ | < ²

      for all n ≥ n0 .
  • Definition: We say that a sequence of random variables {Xn }∞
                                                                n=1
    converges in probability to a random variable X, denoted,
                               P
                          Xn −→ X or p lim Xn = X.
                                          n→∞

      if for all ε > 0,
                           lim Pr[|Xn − X| > ε] = 0.
                          n→∞
      X could be a constant or a random variable.


                                     65
66                                                CHAPTER 5. ASYMPTOTICS

     • We say that a sequence of random variables {Xn }∞n=1 converges almost
       surely or with probability one to a random variable X, denoted
                                           a.s.
                                       Xn −→ X,

       if
                                 Pr[ lim Xn = X] = 1.
                                    n→∞




     • Definition: We say that a sequence of random variables {Xn }∞
                                                                   n=1
       converges in distribution to a random variable X, denoted,
                                            D
                                       Xn −→ X,

       if for all x,
                              lim Pr[Xn ≤ x] = Pr[X ≤ x].
                             n→∞

       SpeciÞcally, we often have
                                            D
                               n1/2 (b
                                     θ − θ) −→ N(0, σ 2 ) .

     • Definition: We say that a sequence of random variables {Xn }∞
                                                                   n=1
       converges in mean square to a random variable X, denoted
                                           m.s.
                                       Xn −→ X,

       if
                                 lim E[|Xn − X|2 ] = 0.
                                n→∞


            — This presumes of course that EXn2 < ∞ and EX 2 < ∞.
            — When X is a constant,

                       E[|Xn − X|2 ] = E[|Xn − EXn |2 ] + |EXn − X|2
                                     = var(Xn ) + |EXn − X|2 ,

              and it is necessary and suﬃcient that

                                EXn → X and var(Xn ) → 0.
5.2. LAWS OF LARGE NUMBERS AND CENTRAL LIMIT THEOREMS67

  • Mean square convergence implies convergence in probability. This fol-
    lows from the Chebychev inequality

                                         E[|Xn − X|2 ]
                      Pr[|Xn − X| > ε] ≤               .
                                              ε2

  • Note that convergence in probability is stronger than convergence in
    distribution, but they are equivalent when X is a constant (i.e., not
    random). Almost sure convergence implies convergence in probability,
    but there is no necessary relationship between almost sure convergence
    and convergence in mean square. Examples where convergence in dis-
    tribution does not imply convergence in probability.


5.2      Laws of Large Numbers and Central Limit
         Theorems
  • (Kolmogorov Law of Large Numbers) Suppose that X1 , . . . , Xn are
    independent and identically distributed (i.i.d.). Then a necessary and
    suﬃcient condition for

                           1X
                               n
                                    a.s.
                                 Xi −→ µ ≡ E(X1 ),
                           n i=1

      is that
                                   E(|Xi |) < ∞.

  • (Lindeberg-Levy Central Limit Theorem) Suppose that X1 , . . . , Xn are
    i.i.d. with E(Xi ) = µ and var(Xi ) = σ 2 . Then

                          1 X Xi − µ D
                               n
                                    −→ N(0, 1).
                         n1/2 i=1 σ

  • These results are important because many estimators and test statistics
    can be reduced to sample averages or functions thereof. There are now
    many generalizations of these results for data that are not i.i.d., e.g.,
    heterogeneous, dependent weighted sums. We give one example
68                                           CHAPTER 5. ASYMPTOTICS

     • (Lindeberg-Feller) Let X1 , . . . , Xn be independent random variables
       with E(Xi ) = 0 and var(Xi ) = σ 2i . Suppose also that Lindeberg’s
       condition holds: for all ² > 0,
                                    "       Ã                !#
                        1     Xn                    Xi
                    Pn      2
                                  E Xi2 1 Xi2 > ²       σ 2j    → 0.
                          σ
                      i=1 i i=1                     j=1

       Then
                              1           Xn
                                                  D
                           Pn                 Xi −→ N(0, 1).
                          ( i=1 σ 2i )1/2 i=1

     • A suﬃcient condition for the Lindeberg condition is that

                                   E[|Xi |3 ] < ∞.
5.3. ADDITIONAL RESULTS                                                   69

5.3     Additional Results
  • Mann—Wald Theorem.
                  D
        — If Xn −→ X and if g is continuous, then
                                                 D
                                       g(Xn ) −→ g(X).
                  P
        — If Xn −→ α, then
                                                 P
                                       g(Xn ) −→ g(α).
                                   D            P
  • Slutsky Theorem. If Xn −→ X, yn −→ α, then:
                       D
        — Xn + yn −→ X + α;
                  D
        — Xn yn −→ αX; and
                   D
        — Xn /yn −→ X/α, provided α 6= 0.

  • Vector random variables. Consider the vector sequence
                                 Xn = (Xn1 , . . . , Xnk )0 .
      We have the result that
                                                     P
                                    kXn − Xk −→ 0,
      where kxk = (x0 x)1/2 is Euclidean norm, if and only if
                                       P
                         |Xnj − Xj | −→ 0 for all j = 1, . . . , k.

        — The if part is no surprise and follows from the continuous mapping
          theorem. The only if part follows because if
                                           kXn − Xk < ε
           then there exists a constant c such that
                                       |Xnj − Xj | < ε/c
           for each j.

  • Cramers Theorem. A vector Xn converges in distribution to a normal
    vector X if and only if a0 Xn converges in distribution to a0 X for every
    vector a.
70                                                 CHAPTER 5. ASYMPTOTICS

5.4       Applications to OLS
     • We are now able to establish some results about the large sample prop-
       erties of the least squares estimator. We start with the i.i.d. random
       design case because the result is very simple.

     • If we assume that:

         — xi , εi are i.i.d. with E(xi εi ) = 0
         — 0 < E [xi x0i ] < ∞ and E [kxi εi k] < ∞.
         — Then,
                                            b −→
                                            β
                                               P
                                                 β.

     • The proof comes from applying laws of large numbers to the numerator
       and denominator of
                                " n           #−1
                                  1 X             1X
                                                     n
                        b
                        β−β =               0
                                        xi xi           xi εi .
                                  n i=1           n i=1

       These regularity conditions are often regarded as unnecessary and per-
       haps strong and unsuited to the Þxed design.

     • We next consider the ‘bare minimum’ condition that works in the Þxed
       design case and is perhaps more general since it allows for example
       trending variables.

     • Theorem. Suppose that A0-A2 hold and that

                       λmin (X 0 X) → ∞ as n → ∞.            (?)

       Then,
                                            P
                                         b −→
                                         β    β.

     • Proof. First,
                                          b =β
                                        E(β)
       for all β. Then,
                                      b = σ 2 (X 0 X)−1 ,
                                  var(β)
5.5. ASYMPTOTIC DISTRIBUTION OF OLS                                         71

      where
                   ° 0 −1 °                                      1
                   °(X X) ° = λmax ((X 0 X)−1 ) =                       ,
                                                           λmin (X 0 X)
      and provided (?) is true,
                                            b → 0.
                                        var(β)

  • Suppose that xi = iα for some α, then
                                  ½
                b        σ2          O(n−(2α+1) ) if α 6= −1/2
            var(β) = Pn 2α =                                   .
                        j=1 j
                                     O(1/ log n) if α = −1/2

      Therefore, consistency holds if and only if α ≥ −1/2.

  • If we have a random design then the conditions and conclusion should
    be interpreted as holding with probability one in the conditional dis-
    tribution given X. Under the above random design assumptions, (?)
    holds with probability one.


5.5     Asymptotic Distribution of OLS
  • We Þrst state the result for the simplest random design case.

  • Suppose that

        — xi , εi are i.i.d. with εi independent of xi ,
        — E(ε2i ) = σ 2
        — 0 < E [xi x0i ] < ∞.
        — Then,
                                          D
                                b − β) −→ N(0, σ 2 {E [xi x0 ]} ). −1
                          n1/2 (β                          i

  • Proof uses Mann—Wald Theorem and Slutsky Theorems.

  • We next consider the Þxed design case [where the errors are i.i.d. still].
    In this case, it suﬃces to have a vector central limit theorem for the
    weighted i.i.d. sequence
                            Xn          X
                                        n         X
                                                  n
                      b
                      β−β =(       0 −1
                               xi xi )    xi εi =   wi εi ,
                                  i=1         i=1           i=1
72                                                     CHAPTER 5. ASYMPTOTICS

       for some weights wi depending only on the X data. That is, the source
       of the heterogeneity is the Þxed regressors.
     • A suﬃcient condition for the scalar standardized random variable
                                     Pn
                                           wi εi
                            Tn = Pn i=1          1/2
                                  ( i=1 wi2 σ 2 )
    to converge to a standard normal random variable is the following condi-
tion
                               max1≤i≤n wi2
                                  Pn      2
                                             → 0.
                                     i=1 wi
    This is a so-called negligibility requirement, which means that no one of
the weights
    dominates every other term.
     • Therefore,
                       Ã n                   !1/2
                        X
                               xi x0i /σ 2           b − β) −→ N(0, 1),
                                                    (β
                                                               D

                         i=1
       provided the following negligibility condition holds:
                         max xi (X 0 X)−1 x0i → 0 as n → ∞.
                         1≤i≤n

       Actually it suﬃces for the diagonal elements of this matrix to converge
       to zero. This condition is usually satisÞed.
     • If also X 0 X/n → M > 0, then
                                                D
                                 b − β) −→ N(0, σ 2 M −1 ),
                           n1/2 (β

     • Suppose k = 1, then the negligibility condition is
                                          x2
                                     max Pn i            2
                                                             → 0.
                                                    j=1 xj
                                     1≤i≤n

       For example, if xi = i,
                               max1≤i≤n i2  n2
                                Pn 2 =            → 0.
                                  j=1 j    O(n3 )
       In this case, even though the largest element is increasing with sample
       size many other elements are increasing just as fast.
5.6. ORDER NOTATION                                                        73

  • An example, where the CLT would fail is
                                ½
                                  1 if i < n
                           xi =
                                  n if i = n.
      In this case, the negligibility condition fails and the distribution of
      the least squares estimator would be largely determined by the last
      observation.


5.6      Order Notation
  • In the sequel we shall use the Order notation:
                                                    Xn P
                                Xn = op (δ n ) if      −→ 0
                                                    δn
      and
                   Xn = Op (δ n ) if Xn /δ n is stochastically bounded,
      i.e., if for all K,           ·¯ ¯        ¸
                                      ¯ Xn ¯
                                      ¯    ¯
                             lim Pr ¯ ¯ > K < 1.
                            n→∞         δn
      The latter means that Xn is of no larger order than δ n , while the Þrst
      one is stronger and says that Xn is of smaller order than δ n . These
      concepts correspond to the o(·) and O(·) used in standard real analysis.
  • The order symbols obey the following algebra, which is really just the
    Slutsky theorem:
                              Op (1)op (1) = op (1)
                           Op (an )Op (bn ) = Op (an bn )
                        Op (an ) + Op (bn ) = Op (max{an , bn }).


5.7      Standard Errors and Test Statistics in Lin-
         ear Regression
  • We Þrst consider the standard error. We have
                         b0 u
                         u  b
               s2 =
                        n−k
74                                                 CHAPTER 5. ASYMPTOTICS

                      1
                  =       {u0 u − u0 X(X 0 X)−1 X 0 u}
                    n
                    µ − k  ¶ 0
                        n      uu       1 u0 X 0
                  =                −             (X X/n)−1 X 0 u/n1/2 .
                      n−k       n     n − k n1/2

     • Theorem. Suppose that ui are i.i.d. with Þnite fourth moment, and that
       the regressors are from a Þxed design and satisfy (X 0 X/n) → M,where
       M is a positive deÞnite matrix. Then
                                           D
                       n1/2 (s2 − σ 2 ) −→ N(0, var[u2 − σ 2 ]).

     • Proof. Note that
                                     u0 X         X 0X
                                 var( 1/2 ) = σ 2      ,
                                     n             n
       which stays bounded by assumption, so that (u0 X/n1/2 ) = Op (1).
       Therefore the second term in s2 is Op (n−1 ). Furthermore, u0 u/n con-
       verges in probability to σ 2 by the Law of Large Numbers. Therefore,
                                                      1
                         s2 = [1 + op (1)]σ 2 −          Op (1)
                                                     n−k

                             = σ 2 + op (1).

     • What about the asymptotic distribution of s2 ?

                        n1/2 (s2 − σ 2 )
                                    1 X 2
                                               n
                                                          n1/2
                    = [1 + op (1)] 1/2     (ui − σ 2 ) −        Op (1)
                                  n    i=1
                                                         n −  k
                        1 X 2
                           n
                    = 1/2     (ui − σ 2 ) + op (1)
                      n   i=1
                         D
                        −→ N(0, var[u2 − σ 2 ]),

       provided the second moment of (u2i − σ 2 ) exists, which it does under
       our assumption. When the errors are normally distributed,

                                  var[u2 − σ 2 ] = 2σ 4 .
5.8. THE DELTA METHOD                                                           75

   • Now what about the t statistic:
                                                              b
                                                      n1/2 c0 β
                                         t =             0    −1
                                              s(c0 (X X)
                                                      n
                                                           c)1/2
                                                         b
                                                 n1/2 c0 β
                                            =                 + op (1)
                                              σ(c0 M −1 c)1/2
                  D   N(0, σ 2 c0 M −1 c)
                 −→                       ≡ N(0, 1) under H0 .
                       σ(c0 M −1 c)1/2

   • As for the Wald statistic
                                    "      µ       ¶−1        #−1
                                     0
                       b − r)0 s2 R X X
                W = n(Rβ                                 R0           b − r).
                                                                    (Rβ
                                     n

   Theorem. Suppose that R is of full rank, that ui are i.i.d. with Þnite
fourth moment, and that the regressors are from a Þxed design and satisfy
                                 (X 0 X/n) → M,
where M is a positive deÞnite matrix. Then,
         D
   W −→ N(0, σ 2 RM −1 R0 ) × [σ 2 RM −1 R0 ]−1 × N(0, σ 2 RM −1 R0 ) = χ2q .


5.8       The delta method
   • Theorem. Suppose that

                               n1/2 (b
                                               D
                                     θ − θ) −→ N(0, Σ)
      and that f is a continuously diﬀerentiable function. Then
                                             µ             ¶
                       1/2  b           D          ∂f ∂f
                     n (f (θ) − f (θ)) −→ N 0,       Σ       .
                                                   ∂θ ∂θ0

   • Proof (Scalar case). By the mean value theorem

                            f (b
                               θ) = f (θ) + (b
                                             θ − θ)f 0 (θ∗ ),
      i.e.,
                      n1/2 (f (b
                               θ) − f (θ)) = f 0 (θ∗ ) · n1/2 (b
                                                               θ − θ).
76                                                 CHAPTER 5. ASYMPTOTICS

     • Furthermore,
                                     b  P         P
                                     θ −→ θ ⇒ θ∗ −→ θ,
       which implies that
                                               P
                                      f 0 (θ∗ ) −→ f 0 (θ),
       where
                                       f 0 (θ) 6= 0 < ∞.

     • Therefore,

                    n1/2 (f (b
                             θ) − f (θ)) = [f 0 (θ) + op (1)]n1/2 (b
                                                                   θ − θ),

       and the result now follows.
                                                                      b
     • Example 1. f (β) = eβ , what is the distribution of eβ (scalar)
                              b                   b − β)
                       n1/2 (eβ − eβ ) = eβ n1/2 (β

                                               D
                                               → N(0, e2β σ 2 M −1 ).

     • Example 2. Suppose that

                               y = β 1 + β 2 x2 + β 3 x3 + u.
                  b2 /β
       What about β    b3 ? We have
                       Ã         !      µ                    ¶
                          b
                          β2 β2
                   1/2               D        2 ∂f   −1 ∂f
                 n          −       −→ N 0, σ      M           ,
                          b3 β 3
                          β                     ∂β      ∂β 0

       where                                         
                                              0
                                     ∂f
                                        =  1/β 3  ,
                                     ∂β
                                           −β 2 /β 23
       so that the limiting variance is
                        (Ã 1 ! µ                         ¶Ã    1
                                                                     !)
                              β3          M 22 M 23           β3
                      σ2      −β 2                            −β 2        .
                              β 23
                                          M 32 M 33           β 23
Chapter 6
Errors in Variables

 • Measurement error is a widespread problem in practice, since much
   economics data is poorly measured. This is an important problem that
   has been investigated a lot over the years.

 • One interpretation of the linear model is that

      - there is some unobservable y ∗ satisfying

                                     y ∗ = Xβ

      - we observe y ∗ subject to error

                                    y = y ∗ + ε,

        where ε is a mean zero stochastic error term satisfying

                                       ε ⊥ y∗

        [or more fundamentally, ε ⊥ X].

 • Combining these two equations

                                y = Xβ + ε,

   where ε has the properties of the usual linear regression error term. It
   is clear that we treat X, y asymmetrically; X is assumed to have been
   measured perfectly.

                                  77
78                                 CHAPTER 6. ERRORS IN VARIABLES

     • What about assuming instead that
                                     y = X ∗ β + ε,
       where
                                     X = X ∗ + U.
       We might assume that X is stochastic but X ∗ is Þxed or that both
       are random. The usual strong assumption is that U, ε ⊥ X ∗ in any
       case, and that U, ε are mutually independent. Clearly a variety of
       assumptions can be made here, and the results depend critically on
       what is assumed.
     • Together these equations imply that
                            y = Xβ + ε − Uβ = Xβ + ν,
       where
                                     ν = ε − Uβ
       is correlated with X because X(U) and ν(U).
     • In this case, the least squares estimator has an obvious bias. We have
                     b = (X 0 X)−1 X 0 y
                     β
                       = β + (X 0 X)−1 X 0 ν
                       = β + (X 0 X)−1 X 0 ε − (X 0 X)−1 X 0 Uβ.
       Take expectations [note that X is now a random variable, although X ∗
       may not be]
                                     ©                   ª
                       b = β − E (X 0 X)−1 X 0 E[U|X] β
                    E(β)

                                    ©                        ª
                             = β − E (X 0 X)−1 X 0 [X − X ∗ ] β
       In general this is not equal to β, but it is diﬃcult to calculate the bias
       exactly. Instead it is better to work with asymptotic approximation
       and to obtain an asymptotic bias.
                          b satisÞes
     • The denominator of β
                          X 0X   X ∗0 X ∗    X ∗0 U U 0 U
                               =          +2       +      .
                           n        n         n      n
                                                                    79

• We shall suppose that for
                                   X ∗0 X ∗ P
                                            −→ Q∗
                                      n
                                   X ∗0 U P
                                           −→ 0
                                     n
                                   U 0ε P
                                         −→ 0
                                    n
                                   X ∗0 ε P
                                          −→ 0
                                    n
                                   U 0U P
                                          −→ ΣUU
                                    n
  which would be justiÞed by the Law of Large Numbers under some
  assumptions on U, ε, X ∗ . Therefore,
                             X 0X P
                                 −→ Q∗ + ΣU U .
                              n
                   b satisÞes
• The numerator of β
                                   X 0ε P
                                       −→ 0
                                    n
                   X 0U   X ∗0 U P     U 0U P
                        =       −→ 0 +     −→ ΣUU
                     n     n            n
  by similar reasoning.
• Therefore,
         P                           ©                 ª
      b −→
      β    β − [Q∗ + ΣU U ]−1 ΣUU β = [Q∗ + ΣU U ]−1 Q∗ · β ≡ Cβ.

• In the scalar case,
                                    q           1
                           C=             =             ,
                                 q + σ 2u   1 + σ 2u /q
  where σ 2u /q is the noise to signal ratio;

     - when
                                      noise
                                             = 1,
                                      signal
       b is unbiased.
       β
80                                      CHAPTER 6. ERRORS IN VARIABLES

          - When
                                              noise
                                                     ↑,
                                              signal
             |bias| increases and β shrinks towards zero.

     • In the vector case
                                             b ≤ kβk ,
                                    || p lim β||
                                        n→∞

       but it is not necessarily the case that each element is shrunk towards
       zero.

     • Suppose that K > 1, but only one regressor is measured with error,
       i.e.,                         · 2     ¸
                                       σu 0
                              ΣU U =           .
                                       0 0
                         b are biased; that particular coeﬃcient estimate is
       In this case, all β
       shrunk towards zero.

     • The downward bias result is speciÞc to the strong assumptions case.
       For example, suppose that (Xi∗ , Ui , εi ) are normally distributed but
       that Ui , εi are mutually correlated with covariance σ uε . Then

                                  P
                               b −→        βq      σ uε
                               β                 +        ,
                                         q + σ u q + σ 2u
                                               2


       and if σ uε is large enough the bias can even be upward.

     • If X ∗ is trending, then measurement error may produce no bias. For
       example, suppose that

                               x∗t = t and xt = x∗t + Ut .

       Now
                                              X
                                              T
                               ∗0   ∗
                             X X         =          t2 = O(T 3 ),
                                              t=1
                                              XT
                               U 0U =               Ut2 = Op (T ).
                                              t=1
6.1. SOLUTIONS TO EIV                                                    81

      Therefore,

                                     X 0 X P X ∗0 X ∗
                                           −→
                                      T3         T3
                          X 0U         ∗0
                                     X U       0
                                             UU P
                                   =       + 3/2 −→ 0.
                          T 3/2      T 3/2   T
      Therefore,
                                        b −→
                                        β
                                           P
                                             β.
      This is because the signal here is very strong and swamps the noise.


6.1     Solutions to EIV
                                                                b appropri-
  • Assume knowledge of signal to noise ratio q/σ 2u and adjust β
    ately. This is hard to justify nowadays because we rarely are willing to
    specify this information.

  • Orthogonal regression.

  • Instrumental variables. Let Zn×k be instruments; that is, we have

                                       Z 0X P
                                            −→ QZX
                                        n
                                       Z 0ν P
                                           −→ 0,
                                        n
                             P                   P
      or equivalently Z 0 ε/n −→ 0, Z 0 U/n −→ 0.

  • Then deÞne the instrumental variables estimator (IVE)

                                  bIV = (Z 0 X)−1 Z 0 y.
                                  β

  • We have                           µ          ¶−1
                        bIV = β +         Z 0X         Z 0ν P
                        β                                  −→ β,
                                           n            n
      using the above assumptions.
82                                 CHAPTER 6. ERRORS IN VARIABLES

     • Suppose that ν i are i.i.d. with mean zero and variance σ 2ν and that in
       fact
                                 Z 0ν D         2
                                    1 −→ N(0, σ ν QZZ ).
                                  n2
       Then, we can conclude that
                               ³        ´ µ Z 0 X ¶−1 Z 0 ν
                            1
                                 b
                          n 2 β IV − β =                   1
                                                n        n2
                               D      ¡                  ¢
                             −→ N 0, σ 2ν Q−1        −1
                                           ZX QZZ QZX .

     • Where do the instruments come from?
          - Suppose that measurement errors aﬀects cardinal outcome but not
            ordinality, i.e.,
                                    xi < xj ⇔ x∗i < x∗j .
            Then take as zi the rank of xi .
          - A slightly weaker restriction is to suppose that measurement error
            does not aﬀect whether a variable is below or above the median,
            although it could aﬀect other ranks. In this case,
                                    ½
                                       1 if xi > median xi
                               zi =
                                       0 if xi < median xi
            would be the natural instrument.
          - Method of grouping Wald (1940). The estimator is y 1 /x1 .
          - Time series examples, z are lagged variables.
          - SpeciÞc examples. Month of birth.


6.2       Other Types of Measurement Error
     • Discrete Covariates. Suppose that the covariate is discrete, then the
       above model of measurement is logically impossible. Suppose instead
       that                  ½ ∗
                                Xi        with prob π
                        Xi =          ∗
                                1 − Xi with prob 1 − π.
       We can write this as Xi = Xi∗ + Ui , but Ui is not independent of Xi∗ .
     • Magic Numbers. Suppose that there is rounding of numbers so that
       Xi∗ is continuous, while Xi is the closest integer to Xi∗ .
6.3. DURBIN-WU-HAUSMAN TEST                                                83

6.3      Durbin-Wu-Hausman Test
  • We now consider a well known test for the presence of measurement
    error, called the Durbin-Wu-Hausman test. Actually, the test is ap-
    plicable more generally.
  • Suppose that our null hypothesis is

                              H0 : no measurement error.

      This is equivalent to
                                       σ 2U = 0,
      which may be a diﬃcult test to contemplate by our existing methods.
  • Instead consider the test statistic
                        ³              ´0  ³           ´
                   H= β   bOLS − βbIV Vb −1 βbOLS − β
                                                    bIV ,

      and reject the null hypothesis for large values of this statistic.

         - The idea is that βbOLS and β  bIV are both consistent under H0 ,
                          b
           but under HA , β OLS is inconsistent. Therefore, there should be a
           discrepancy that can be picked up under the alternative.

  • What is the null asymptotic variance? We have
                           ©                             ª
             bOLS − β
             β        bIV = (Z 0 X)−1 Z 0 − (X 0 X)−1 X 0 ν = Aν

      with variance V = σ 2ν AA0 .
  • In fact, AA0 simpliÞes

                     AA0 = (Z 0 X)−1 Z 0 Z(Z 0 X)−1
                           −(Z 0 X)−1 Z 0 X(X 0 X)−1
                           −(X 0 X)−1 X 0 Z(Z 0 X)−1
                           +(X 0 X)−1
                         = (Z 0 X)−1 Z 0 Z(Z 0 X)−1 − (X 0 X)−1
                         ≥ 0,

      where the inequality follows by the Gauss Markov Theorem.
84                                   CHAPTER 6. ERRORS IN VARIABLES

     • So we use
               ©                                    ª
       Vb = s2ν (Z 0 X)−1 Z 0 Z(Z 0 X)−1 − (X 0 X)−1 = s2ν (Z 0 X)−1 Z 0 MX Z(X 0 Z)−1 ,

       where
                                              1 X 2
                                                   n
                                    s2ν =            b
                                                     ν ,
                                            n − k i=1 i
       where
                                     b            bIV .
                                     ν i = yi − X β

     • Thus
                            Vb −1 = s−2 0    0     −1 0
                                     ν X Z (Z MX Z)  Z X.

     • Under H0 ,
                                              D
                                        H −→ χ2K ,
       and the rule is to reject for large values of H.
Chapter 7
Heteroskedasticity

  • We made the assumption that
                                   V ar(y) = σ 2 I
      in the context of the linear regression model. This contains two material
      parts:

         - oﬀ diagonals are zero (independence), and
         - diagonals are the same.

  • Here we extend to the case where
                                              
                                  σ 21     0
                                      ...     
                      V ar(y) =                = Σ,
                                             2
                                  0        σn
      i.e., the data are heterogeneous.
  • We look at the eﬀects of this on estimation and testing inside linear
    (nonlinear) regression model, where E(y) = Xβ. In practice, many
    data are heterogeneous.


7.1      Eﬀects of Heteroskedasticity
  • Consider the OLS estimator
                                 b = (X 0 X)−1 X 0 y.
                                 β

                                      85
86                                   CHAPTER 7. HETEROSKEDASTICITY

     • In the new circumstances, this is unbiased, because
                                       b = β,
                                     E(β)              ∀β.

     • However,
                       b = (X 0 X)−1 X 0 ΣX(X 0 X)−1
                  V ar(β)
                            Ã n         !−1 n             Ã n        !−1
                             X             X               X
                          =      xi x0i       xi x0i σ 2i     xi x0i
                                  i=1            i=1             i=1
                           6= σ 2 (X 0 X)−1 .

     • As sample size increases,
                                              b → 0,
                                         V ar(β)

       so that the OLSE is still consistent.
     • The main problem then is with the variance.

          - Least squares standard errors are estimating the wrong quantity.
            We have
                                                  1X 2
                                                     n
                                         1
                            s2 =            b0 u
                                            u  b=      u + op (1)
                                        n−k       n i=1 i
                                                   1X 2
                                                             n
                                         P   2
                                        −→ σ ≡ lim       σi ,
                                               n→∞ n
                                                     i=1

            but
                           1X                1X 2 1X
                              n                 n          n
                                     0 2
                                 xi xi σ i −       σi ·       xi x0i 9 0
                           n i=1             n i=1      n i=1
            in general.

     • OLS is ineﬃcient. Why?

                    y ∗ = Σ−1/2 y = Σ−1/2 Xβ + Σ−1/2 u = X ∗ β + u∗ ,

       where u∗ are homogeneous. Therefore,
                                                ¡         ¢
                  βb∗ = (X ∗0 X ∗ )−1 X ∗0 y ∗ = X 0 Σ−1 X −1 X 0 Σ−1 y
7.2. PLAN A: EICKER-WHITE                                                                                 87

      is eﬃcient by Gauss-Markov. So
                                 ¡        ¢
                          bGLS = X 0 Σ−1 X −1 X 0 Σ−1 y
                          β
      is the eﬃcient estimator here; this is not equal to
                              βbOLS = (X 0 X)−1 X 0 y,
      unless
                                              Σ = σ2I
      (or some more complicated conditions are satisÞed).
  • Can show directly that
                  ¡ 0 −1 ¢−1
                   XΣ X      ≤ (X 0 X)−1 X 0 ΣX(X 0 X)−1 .
      In some special cases OLS = GLS, but in general they are diﬀerent.
      What to do?


7.2        Plan A: Eicker-White
  • Use OLS but correct standard errors. Accept ineﬃciency but have
    correct tests, etc.
  • How do we do this? Can’t estimate σ 2i , i = 1, ..., n because there are n
    of them. However,Pthis is not necessary - instead we must estimate the
    sample average n1 ni=1 xi x0i σ 2i . We estimate V ar(β)    b =
                Ã n            !−1 Ã n                     !−1 Ã n            !−1
               1 1X                      1 X                     1 X
          V =           xi x0i                 xi x0i σ 2i             xi x0i
               n n i=1                   n i=1                   n i=1
      by
                     Ã                    !−1 Ã                        !−1 Ã                    !−1
                         1X                       1X                           1X
                          n                        n                            n
                 1
            Vb =                 xi x0i                   xi x0i u
                                                                 b2i                   xi x0i         .
                 n       n i=1                    n i=1                        n i=1

      Then under regularity conditions
                           1X
                              n
                                                       P
                                 xi x0i (b
                                         u2i − σ 2i ) −→ 0,
                           n i=1
      which shows that
                                                    P
                                            Vb − V −→ 0.
88                                   CHAPTER 7. HETEROSKEDASTICITY

     • Typically Þnd that White’s standard errors [obtained from the diagonal
       elements of Vb ] are larger than OLS standard errors.
     • Finally, one can construct test statistics which are robust to heteroskedas-
       ticity, thus
                            b − r)0 [RVb R0 ]−1 (Rβ       D
                                                  b − r) −→
                        n(Rβ                                  χ2J .


7.3       Plan B: Model Heteroskedasticity
     • Sometimes models are suggested by data. Suppose original observations
       are by individual, but then aggregate up to a household level. Homo-
       geneous at the individual level implies heterogeneous at the household
       level, i.e.,
                                             ni
                                         1 X
                                   ui =         uij .
                                         ni j=1
       Then,
                                        1               σ2
                               V ar(ui ) = V ar(uij ) = .
                                        ni              ni
       Here, the variance is inversely proportional to household size. This is
       easy case since apart from single constant, σ 2 , σ 2i is known.
     • General strategy. Suppose that
                                        Σ = Σ(θ).
       Further example σ 2i = eγ xi or σ 2i = γx2i for some parameters.
     • Suppose we have a normal error and that θ ∩ β = φ. Then,
                            1                1
              L(β, θ) = − ln |Σ(θ)| − (y − Xβ)0 Σ(θ) (y − Xβ)
                            2                2
                            1X                  1X
                               n                   n
                                                                  2
                      = −         ln σ 2i (θ) −       (yi − x0i β) σ −2
                                                                     i (θ).
                            2 i=1               2 i=1
       In this case,
                       ∂L   Xn
                                   (yi − x0i β)
                          =     xi
                       ∂β   i=1
                                     σ 2i (θ)
                                                "                 #
                              1 X ∂ ln σ 2i
                                 n
                       ∂L                         (yi − x0i β)2
                          = −               (θ)                 −1 .
                       ∂θ     2 i=1 ∂θ               σ 2i (θ)
7.4. PROPERTIES OF THE PROCEDURE                                            89

  • The estimators (βbMLE , b
                            θMLE ) solve this pair of equations, which are
    nonlinear in general.

  • Note that the equation for β is conditionally linear, that is suppose
    that we have a solution b
                            θMLE , then
                      " n                    #−1 n
                       X                        X
             bMLE =
             β             xi x0 σ −2 (b
                                       θMLE )      xi yi σ −2 (b
                                                               θMLE ).
                                  i i                                i
                          i=1                              i=1

                          bOLS , which is consistent, this gives us b
      Iterate. Start with β                                         θ, which we
      then use in the GLS deÞnition. See below for a proper treatment of
      nonlinear estimators.

  • Example. Suppose that
                                                1
                                    σ 2i =
                                             θ (x0i xi )
      for some positive constant θ. In this case

                               1X1 1X 2
                                  n       n
                          ∂`
                             =        +      ui (β)x0i xi .
                          ∂θ   2 i=1 θ 2 i=1

      Therefore, we have a closed form solution

                                b               1
                                θ = 1 Pn                         ,
                                                  b 0 xi
                                             b2i (β)x
                                    n    i=1 u       i

      where
                                 u             bMLE .
                                 bi = yi − x0i β


7.4      Properties of the Procedure
  • Firstly, under general conditions not requiring y to be normally dis-
    tributed,          1³             ´ 
                         n β
                           2 b     −β
                       1 ³ MLE       ´  −→ D
                                                N(0, Ω)
                             b
                         n 2 θMLE − θ
      for some Ω.
90                                   CHAPTER 7. HETEROSKEDASTICITY

     • If y is normal, then Ω = I −1 , the information matrix,
                              ·                           ¸
                                limn→∞ n−1 X 0 Σ−1 X o
                          I=                                .
                                            0           ?
                     b is asymptotically equivalent to
       In this case, β
                                    ¡         ¢
                             bGLS = X 0 Σ−1 X −1 X 0 Σ−1 y.
                             β
                   bML is asymptotically Gauss-Markov eﬃcient, BLAUE.
       We say that β
     • Often people use ad hoc estimates of θ and construct
                             ³               ´−1
                    bF GLS = X 0 Σ−1 (b
                    β                 θAH )X     X 0 Σ−1 (b
                                                          θAH )y.

                    P
       Provided b
                θ −→ θ and some additional conditions, this procedure is also
                                    bGLS .
       asymptotically equivalent to β


7.5       Testing for Heteroskedasticity
     • The likelihood framework has been widely employed to suggest tests of
       heteroskedasticity. Suppose that
                                   σ 2i (θ) = αeγxi
                                  H0 : γ = 0 vs. γ 6= 0.

     • The LM tests are simplest to implement here because we only have to
       estimate under homogeneous null. We have
                                             µ 2   ¶
                                    1X
                                       n
                           ∂L                 ui
                               =−         xi     −1 .
                           ∂γ       2 i=1     α

       Under normality,                    µ 2¶
                                            ui
                                      V ar      = 2.
                                            α
       Therefore,
                        n µ 2
                        X          ¶ " X  n
                                                   #−1 n µ
                                                      X u         ¶
                           b
                           u  i                  0         b2i
               LM =             − 1 xi 2     xi xi             − 1 xi ,
                        i=1
                              b
                              α          i=1          i=1
                                                           b
                                                           α
7.5. TESTING FOR HETEROSKEDASTICITY                                   91

    where
                                   1X 2
                                           n
                                b=
                                α       b,
                                        u
                                   n i=1 i
          b2i are the OLS residuals from the restricted regression.
    where u

  • Under H0
                                       D
                                 LM −→ χ21 .
    Reject for large LM.
92   CHAPTER 7. HETEROSKEDASTICITY
Chapter 8
Nonlinear Regression Models

 • Suppose that
                      yi = g(xi , β) + εi ,      i = 1, 2, ..., n,
   where εi are i.i.d. mean zero with variance σ 2 .
 • In this case, how do we estimate β? The main criterion we shall consider
   is the Nonlinear least squares, which is of course the MLE when y ∼
   N(g, σ 2 I). In this case one chooses β to minimize

                                 1X
                                       n
                        Sn (β) =       [yi − g(xi , β)]2
                                 n i=1

   over some parameter set B. Let
                            bNLLS =arg min Sn (β).
                            β
                                           β∈B


 • If B is compact and g is continuous, then the minimizer exists but
   is not necessarily unique. More generally, one cannot even guarantee
   existence of a solution.
 • We usually try to solve a Þrst order condition, which would be appro-
   priate for Þnding interior minima in diﬀerentiable cases. In general, the
   Þrst order conditions do not have a closed form solution. If there are
   multiple solutions to the Þrst order condition, then one can end up with
   diﬀerent answers depending on the way the algorithm is implemented.
                                         bNLLS is a nonlinear function of y,
   Statistical properties also an issue, β
   so we cannot easily calculate mean and variance.

                                     93
94                   CHAPTER 8. NONLINEAR REGRESSION MODELS

     • If Sn is globally convex, then there exists a unique minimum for all
       n regardless of the parameter space. Linear regression has a globally
       convex criterion - it is a quadratic function. Some nonlinear models
       are also known to have this property.


8.1       Computation
     • In one-dimension with a bounded parameter space B, the method of
       line search is eﬀective. This involves dividing B into a grid of, perhaps
       equally spaced, points, computing the criterion at each point and then
       settling on the minimum. There can be further reÞnements - you fur-
       ther subdivide the grid around the minimum etc. Unfortunately, this
       method is not so useful in higher dimensions d because of the ‘curse of
       dimensionality’. That is, the number of grid points required to achieve
       a given accuracy increases exponentially in d.

     • ‘Concentration’ or ‘ProÞling’ can sometimes help: some aspects of the
       problem may be linear, e.g.,

                                                xλ − 1
                                  g(x, θ) = β          .
                                                  λ
       If λ were known, would estimate β by

                             b = [X(λ)0 X(λ)]−1 X(λ)0 y,
                             β

       where                               xλ −1 
                                                 1
                                                 λ
                                                    ..   
                                 X(λ) =              .   .
                                                xλ
                                                 n −1
                                                  λ

       Then write
                       ³       ´ 1X  n ·                  ¸2
                         b                   b    xλi − 1
                     Sn β(λ), λ =       yi − β(λ)            ,
                                  n i=1               λ

                                                             b to min this,
       which is the concentrated criterion function. Now Þnd λ
       e.g., by line search on [0, 1].
8.1. COMPUTATION                                                               95

  • Derivative based methods. We are trying to Þnd a root of

                                  ∂Sn ³b     ´
                                       β NNLS = 0.
                                  ∂β

  • Can evaluate Sn , ∂Sn /∂β, ∂ 2 Sn /∂β∂β 0 , for any β. Suppose we take an
    initial guess β 1 and then modify it - which direction and how far?

        - If ∂Sn (β 1 )/∂β > 0, then we are to the right of the minimum,
          should move left.
        - We Þt a line tangent to the curve ∂Sn /∂β at the point β 1 and Þnd
          where that line intersects the zero.

  • The tangent at β 1 is ∂ 2 Sn (β 1 )/∂β 2 and the constant term is ∂Sn (β 1 )/∂β−
    ∂ 2 Sn (β 1 )/∂β 2 β 1 .

  • Therefore,

                         ∂ 2 Sn             ∂Sn        ∂ 2 Sn
                    0=          (β 1 )β 2 +     (β ) −        (β 1 )β 1 ,
                         ∂β 2               ∂β 1        ∂β

    which implies that
                                   · 2         ¸−1
                                    ∂ Sn           ∂Sn
                         β2 = β1 −     2 (β 1 )        (β ).
                                    ∂β             ∂β 1

    Repeat until convergence. This is Newton’s method.

  • In practice the following criteria are used
                  ¯            ¯        ¯                       ¯
                  ¯β r+1 − β r ¯ < τ or ¯Sn (β r+1 ) − Sn (β r )¯ < τ

    to stop the algorithm.

  • In k-dimensions
                                     ·           ¸−1
                                  ∂ 2 Sn             ∂Sn
                        β2 = β1 −        0 (β 1 )        (β ).
                                  ∂β∂β               ∂β 1
96                   CHAPTER 8. NONLINEAR REGRESSION MODELS

     • There are some modiÞcations to this that sometimes work better. Outer
       produce (OPE) of the scores
                            " n                     #−1 n
                             X ∂Si         ∂Si         X ∂Si
                  β2 = β1 −          (β 1 ) 0 (β 1 )          (β 1 ).
                             i=1
                                 ∂β        ∂β          i=1
                                                           ∂β

     • Variable step length λ
                                       ·               ¸−1
                                        ∂ 2 Sn             ∂Sn
                      β 2 (λ) = β 1 − λ        0 (β 1 )        (β ),
                                        ∂β∂β               ∂β 1
       and choose λ to max Sn (β 2 (λ)).
     • There are some issues with all the derivative-based methods:

          - If there are multiple local minima, need to try diﬀerent starting
            values and check that always converge to same value.
          - When the criterion function is not globally convex one can have
            overshooting, and the process may not converge. The variable
            step length method can improve this.
          - If their criterion is ßat near the minimum, then the algorithm may
            take a very long time to converge. The precise outcome depends
            on which convergence criterion is used. If you use the change in the
            criterion function then the chosen parameter value may actually
            be far from the true minimum.
          - If the minimum is at a boundary point, then the derivative-based
            methods will not converge.
          - In some problems, the analytic derivatives are diﬃcult or time
            consuming to compute, and people substitute them by numeri-
            cal derivatives, computed by an approximation. These can raise
            further problems of stability and accuracy.


8.2       Consistency of NLLS
     • Theorem. Suppose that

        (1) The parameter space B is a compact subset of RK ;
8.2. CONSISTENCY OF NLLS                                                         97

     (2) Sn (β) is continuous in β for all possible data;
     (3) Sn (β) converges in probability to a non-random function S(β)
         uniformly in β ∈ B, i.e.,
                                                          P
                                  sup |Sn (β) − S(β)| → 0.
                                  β∈B


     (4) The function S(β) is uniquely minimized at β = β 0 .
       - Then
                                            b→
                                            β
                                              P
                                                β0.

  • Proof is in Amemiya (1986, Theorem 4.1.1). We just show why (3) and
    (4) are plausible. Substituting for yi , we have

             1X
                    n
    Sn (β) =       [εi + g(xi , β 0 ) − g(xi , β)]2
             n i=1
              1X 2 1X                                      1X
                 n       n                                    n
                                                      2
            =      ε +      [g(xi , β) − g(xi , β 0 )] + 2       εi [g(xi , β) − g(xi , β 0 )] .
              n i=1 i n i=1                                n i=1

  • With i.i.d. data, by the Law of Large numbers

                        1X 2 P 2
                           n
                             ε →σ
                        n i=1 i
                        1X
                           n
                                                            P
                              εi [g(xi , β) − g(xi , β 0 )] → 0 for all β
                        n i=1

    and for all β

           1X
              n
                                             P  ¡                           ¢
                 [g(xi , β) − g(xi , β 0 )]2 → E [g(xi , β) − g(xi , β 0 )]2 .
           n i=1

    Therefore,
                        P        ¡                           ¢
                 Sn (β) → σ 2 + E [g(xi , β) − g(xi , β 0 )]2 ≡ S(β).
98                    CHAPTER 8. NONLINEAR REGRESSION MODELS

     • Need convergence in probability to hold uniformly in a compact set
       containing β 0 (or over B), which requires a domination condition like

                           sup |Sn (β)| ≤ Y with E(Y ) < ∞.
                           β∈B


     • Now
                          S(β 0 ) = σ 2 and S(β) ≥ σ 2 for all β.
       So, in the limit, β 0 minimizes S. Need S(β) to be uniquely minimized
       at β 0 (identiÞcation condition).

     • Example where (4) is satisÞed is where g is linear, i.e., g(xi , β) = β 0 xi .
       Then
                     S(β) = σ 2 + (β − β 0 )0 E[xi x0i ](β − β 0 ),
       which is a quadratic function of β. (3) also holds in this case under
       mild conditions on xi .


8.3       Asymptotic Distribution of NLLS
     • Theorem. Suppose that:
        b is such that
     1. β
                                              b
                                         ∂Sn (β)
                                                 =0
                                           ∂β
       and satisÞes
                                           b→P
                                           β   β0,
       where β 0 is an interior point of B;

     2. ∂ 2 Sn (β)/∂β∂β 0 exists and is continuous in an open convex neighbour-
        hood of β 0 ;

     3. ∂ 2 Sn (β)/∂β∂β 0 converges in probability to a Þnite nonsingular matrix
        A(β) uniformly in β over any shrinking neighbourhood of β 0 ;

     4. For some Þnite matrix B,
                                  1   ∂Sn (β 0 ) D
                                 n2              → N (0, B) .
                                        ∂β
8.3. ASYMPTOTIC DISTRIBUTION OF NLLS                                             99

       - Then,
                                        1
                                           b − β 0 ) → N0, V ),
                                      n 2 (β
                                                    D


          where V = A−1 BA−1 and A = A(β 0 ).

  • Proof. We have
                      1   ∂Sn b      1 ∂Sn          ∂ 2 Sn ∗ 1 b
             0 = n2          (β) = n 2     (β 0 ) +        (β )n 2 (β − β 0 ),
                          ∂β           ∂β           ∂β∂β 0
                                   b by the multivariate mean value theorem.
    where β ∗ lies between β 0 and β
    Applying assumptions (1)-(3) we get

                            1
                               b − β) = −A−1 n 12 ∂Sn (β 0 ) + op (1).
                          n 2 (β
                                                  ∂β

    Finally, apply assumption (4) we get the desired result.

  • We now investigate the sort of conditions needed to satisfy the assump-
    tions of the theorem. In our case

                                   1X
                                                n
                   ∂Sn                                       ∂g
                       (β 0 ) = −2       [yi − g(xi , β 0 )]    (xi , β 0 )
                   ∂β              n i=1                     ∂β
                                  −2 X
                                            n
                                             ∂g
                                =       εi ·    (xi , β 0 ).
                                  n i=1      ∂β

  • Suppose that (xi , εi ) are i.i.d. with

                                        E(εi | xi ) = 0

    with probability one. In this case, provided
                       ·°                                  °¸
                        ° 2 ∂g              ∂g             °
                     E °  ε
                        ° i ∂β (x i , β 0 )      (xi , β   °
                                                         0 ° < ∞,
                                                          )
                                            ∂β 0

    we can apply the standard central limit theorem to obtain
                   D        µ     ·                               ¸¶
               1∂Sn                 2 ∂g            ∂g
              n2    (β ) → N 0, 4E εi    (xi , β 0 ) 0 (xi , β 0 ) .
                ∂β 0                  ∂β            ∂β
100                  CHAPTER 8. NONLINEAR REGRESSION MODELS

  • What about (3)?

                      1 X ∂ 2g                                 1 X ∂g ∂g
                         n                                        n
      ∂ 2 Sn
             (β) = −2              (xi , β) [yi − g(xi , β)]+2               (xi , β),
      ∂β∂β 0          n i=1 ∂β∂β 0                             n i=1 ∂β ∂β 0

      which in the special case β = β 0 is

                         −2 X                       2 X ∂g ∂g
                            n                          n
            ∂ 2 Sn                ∂2g
                   (β) =      ε i     (xi , β 0 ) +               (xi , β 0 ).
            ∂β∂β 0       n i=1 ∂β∂β 0               n i=1 ∂β ∂β 0

  • Provided                     ·°                   °¸
                                  ° ∂ 2g              °
                                E °ε
                                  ° ∂β∂β
                                    i    0 (xi , β 0 )° <∞
                                                      °
      and                    ·°                     °¸
                               ° ∂g ∂g              °
                          E °  ° ∂β ∂β 0 (xi , β 0 )° < ∞,
                                                    °
      we can apply the law of large numbers to obtain

                       1X
                            n
                                ∂2g                P
                             εi       (xi , β 0 ) → 0
                       n i=1 ∂β∂β 0
                                                     ·                    ¸
                       1 X ∂g ∂g
                          n
                                                 P     ∂g ∂g
                                     (xi , β 0 ) → E           (xi , β 0 ) .
                       n i=1 ∂β ∂β 0                   ∂β ∂β 0

  • These conditions need to be strengthened a little to obtain uniformity
    over the neighbourhood of β 0 . For example, suppose that we have
    additional smoothness and
                 ∂ 2g         ∗     ∂ 2g                  ∗         ∂ 3g
                      (xi , β   ) =      (xi , β 0 ) + (β   − β 0 )      (xi , β ∗∗ )
                 ∂β 2               ∂β 2                            ∂β 3
      for some intermediate point β ∗∗ . Then, provided
                               ° 3            °
                               °∂ g           °
                               °           ∗∗ °
                           sup ° 3 (x, β )° ≤ D(x)
                           β∈B ∂β

      for some function D for which
                                         ED(X) < ∞,
      condition (2) will be satisÞed.
8.4. LIKELIHOOD AND EFFICIENCY                                             101

  • Similar results can be shown in the Þxed design case, but we need to
    use the CLT and LLN for weighted sums of i.i.d. random variables.

  • Note that when εi are i.i.d. and independent of xi , we have
                                 ·                    ¸
                                   ∂g ∂g                B
                       A = 4E            0 (xi , β 0 ) = 2
                                   ∂β ∂β                σ
      and the asymptotic distribution is
                                        D  ¡          ¢
                             1
                                b − β0) →
                           n 2 (β         N 0, σ 2 A−1 .

  • Standard errors. Let
                                1 X ∂g ∂g
                                   n
                             b
                             A=                     b
                                              (xi , β)
                                n i=1 ∂β ∂β 0

                                 Xn
                            b= 1
                            B
                                     ∂g ∂g         b ε2 ,
                                             (xi , β)bi
                               n i=1 ∂β ∂β 0

      where b                b
            εi = yi − g(xi , β).Then
                                          P
                                       Vb → V.


8.4     Likelihood and Eﬃciency
  • These results generalize to the likelihood framework for i.i.d. data
                                              X
                                              n
                               `(data, θ) =         `i (θ).
                                              i=1


      Let b
          θ maximize `(data, θ).

  • Then under regularity conditions

                                       b P
                                       θ → θ0

      and                                  ¡             ¢
                          n 2 (b
                            1           D
                               θ − θ0 ) → N 0, I −1 (θ0 ) ,
102                 CHAPTER 8. NONLINEAR REGRESSION MODELS

      where the information matrix
                            ·              ¸     · 2             ¸
                              ∂`i ∂`i              ∂ `i
                 I(θ0 ) = E           (θ0 ) = −E        ∂`i (θ0 ) .
                              ∂θ ∂θ0              ∂θ∂θ0

      This last equation is called the information matrix equality.

  • Asymptotic Cramér-Rao Theorem. The MLE is asymptotically “eﬃ-
    cient” amongst the class of all asymptotically normal estimates (stronger
    than Gauss-Markov).
Chapter 9
Generalized Method of
Moments

 • We suppose that there is i.i.d. data {Zi }ni=1 from some population.

 • It is known that there exists a unique θ0 such that

                               E [g(θ0 , Zi )] = 0

   for some q × 1 vector of known functions g(θ0 , ·).

     — For example, g could be the Þrst order condition from OLS or
       more generally maximum likelihood, e.g., g(β, Zi ) = xi (yi − x0i β).
     — Conditional moment speciÞcation. Suppose in fact we know for
       some given function ρ that

                                E[ρ(θ0 , Zi )|Xi ] = 0,

        where Xi can be a subset of Zi .Then this implies the unconditional
        moment given above when you take

                           g(θ0 , Zi ) = ρ(θ0 , Zi ) ⊗ h(Xi )

        for any function h of the ‘instruments’ Xi . This sort of speciÞcation
        arises a lot in economic models, which is what really motivates this
        approach.
     — The functions g can be nonlinear in θ and Z.

                                   103
104            CHAPTER 9. GENERALIZED METHOD OF MOMENTS

        — The distribution of Zi is unspeciÞed apart from the q moments.

  • For any θ, let
                                        1X
                                            n
                               Gn (θ) =       g(θ, Zi ).
                                        n i=1

  • There are several cases:

         - p > q unidentiÞed case
         - p = q exactly identiÞed case
         - p < q overidentiÞed case.

  • In the exactly identiÞed case, we deÞne our estimator as any solution
    to the equations
                                  Gn (b
                                      θ) = 0.
      Since we have p equations in p-unknowns, we can expect a solution
      to exist under some regularity conditions. However, the equations are
      nonlinear and have to be solved by numerical methods.
  • When p < q, we cannot simultaneously solve all equations, and the
    most we can hope to do is to make them close to zero.
  • Let
                            Qn (θ) = Gn (θ)0 Wn Gn (θ),
      where Wn is a q × q positive deÞnite weighting matrix. For example,
      Wn = Qq×q . Then let
                               b
                               θGMM minimize Qn (θ)

                                  over θ ∈ Θ ⊆ Rp .

  • This deÞnes a large class of estimators, one for each weighting matrix
    Wn .
  • It is generally a nonlinear optimization problem like nonlinear least
    squares; various techniques are available for Þnding the minimizer.

  • GMM is a general estimation method that includes both OLS and more
    general MLE as special cases!!
9.1. ASYMPTOTIC PROPERTIES IN THE IID CASE                             105

  • Thus consider the sample log likelihood
                                      X
                                      n
                                            `(Zi , θ),
                                      i=1

      where exp(`) is the density function of Zi . The MLE maximises the
      log likelihood function or equivalently Þnds the parameter value that
      solves the score equations:
                               X
                               n
                                 ∂`
                                            (Zi , θ) = 0.
                                i=1
                                      ∂θ

  • This is exactly identiÞed GMM with
                                               ∂`
                              g(θ, Zi ) =         (Zi , θ).
                                               ∂θ
  • What is diﬀerent is really the model speciÞcation part, that is the
    speciÞcation of models through conditional moment restrictions.


9.1     Asymptotic Properties in the iid case
  • We now turn to the asymptotic properties. Under some regularity
    conditions we have
                            b      P
                            θGMM → θ0 .
      Namely, we need that the criterion function converges uniformly to a
      function that is uniquely minimized by θ0 .
  • Under further regularity conditions, we can establish
             ³          ´       ¡                         ¢
           1
              b            D
          n θGMM − θ → N 0, (Γ0 W Γ)−1 Γ0 W ΩW Γ(Γ0 W Γ)−1 ,
           2



      where:
                                                   1
                           Ω(θ0 ) = Var n 2 Gn (θ0 ),
                                         ∂Gn (θ0 )
                              Γ = p lim             .
                                    n→∞      ∂θ
                               0 < W =p lim Wn .
                                                  n→∞
106             CHAPTER 9. GENERALIZED METHOD OF MOMENTS

  • Special case of exactly identiÞed case: weights are irrelevant and
                                      D  ¡            ¢
                        n 2 (b
                          1
                             θ − θ0 ) → N 0, Γ−1 ΩΓ−10 .

  • What is the optimal choice of W in the overidentiÞed case?

         - In fact Wn should be an estimate of Ω−1 .
         - In the iid case we take
                                      1X e
                                         n
                           e     e
                           Ω = Ω(θ) =       g(θ, Zi )g(e
                                                       θ, Zi )0 ,
                                      n i=1

            where e
                  θ is a preliminary estimate of θ0 obtained using some arbi-
            trary weighting matrix, e.g., Iq .

  • In sum, then, the full procedure is

         - e
           θ = arg min Gn (θ)0 Gn (θ)
              opt
         - b
           θ=b                      e −1 Gn (θ).
             θGMM = arg min Gn (θ)0 Ω

  • The asymptotic distribution is now normal with mean zero and variance
                                       ¡               ¢
                      n 2 (b
                        1           D
                           θ − θ0 ) → N 0, (Γ0 Ω−1 Γ)−1 .

  • This estimator is eﬃcient in the sense that it has minimum asymptotic
    variance among all GMM estimators.
  • Can estimate the asymptotic variance of b θ by
                                 h           i−1
                            Vb = Γ b0 Ω
                                      b −1 Γ
                                           b     ,

      where
                                   1X b
                                      n
                        b = Ω(b
                        Ω     θ) =       g(θ, Zi )g(b
                                                    θ, Zi )0 ,
                                   n i=1
      and
                                             b
                                   b = ∂Gn (θ) ,
                                   Γ
                                          ∂θ
      are consistent estimates of Γ and Ω.
9.2. TEST STATISTICS                                                         107

9.2     Test Statistics
  • t-test. Consider the null hypothesis

                                        c0 θ = γ

      for some vector c and scalar γ. Then

                                n 2 [c0b
                                  1
                                       θ − γ] D
                                              → N(0, 1)
                                  (c0 Vb c) 2
                                            1




      under the null hypothesis. Can do one-sided and two-sided tests.

  • Consider the null hypothesis

                                        Rθ = r,

      where r is of dimensions m. Then

                            θ − r)0 [RVb R0 ]−1 (Rb
                         n(Rb
                                                         D
                                                  θ − r) → χ2m .

  • Reject for large values.

  • Nonlinear restrictions. Suppose that

                               n 2 (b
                                 1         D
                                    θ − θ) → N(0, V (θ))

      for some variance V .
  • By a Taylor series expansion

                              f (b
                                 θ) ' f (θ) + F (θ)(b
                                                    θ − θ),

      where
                                              ∂f (θ)
                                    F (θ) =          .
                                               ∂θ0
  • Therefore,
                     ³            ´
                     1
                        b           D
                   n f (θ) − f (θ) → N (0, F (θ)V (θ)F (θ)0 ) .
                     2




  • This is called the delta method. If f is linear, then this is obvious.
108            CHAPTER 9. GENERALIZED METHOD OF MOMENTS

  • Application to hypothesis testing. Consider the null hypothesis

                                       f (θ) = 0

      for some m vector nonlinear function f .

  • Let
                              fb = f (b
                                      θ) and Fb = F (b
                                                     θ).
      Then                         h         i−1
                                                    D
                               nfb0 FbVb Fb0     fb → χ2m
      under H0 .


9.3      Examples
  • Linear regression
                                    y = Xβ + u,
      with some error vector u.

  • Suppose also that it is known that for some unique β 0 we have

                                  E [xi ui (β 0 )] = 0.

      There are K conditions and K parameters and this is an exactly iden-
      tiÞed case.

                                               b the OLS estimator in fact,
         - In this case, there exists a unique β,
           that satisÞes the empirical conditions
                                    1 0        b = 0.
                                      X (y − X β)
                                    n
  • Suppose now
                                  E [xi ui (β 0 )] 6= 0,
      i.e., the errors are correlated with the regressors. This could be because

         - omitted variables. There are variables in u that should be in X.
         - The included X variables have been measured with error
9.3. EXAMPLES                                                              109

     (a) Simultaneous Equations. Demand and supply

                                 QS = S(P ; w, r, t)

                                 QD = D(P ; P ∗ , y)
         In equilibrium QS = QD determines Q, P given w, r, t, P ∗ , and
         y. The econometric model

                  ln Q = α + β ln P + δw + ρr + τ t + e , supply

                   ln Q = α0 + β 0 ln P + ξP ∗ + ηy + u , demand
         Parameters of interest β, β 0 price elasticities, ξ cross-price, η in-
         come. This is a simultaneous system. P , Q endogenous variables.
         w, r, t, P ∗ and y exogenous variables. Because P and Q simulta-
         neously determined, expect

                             Cov(P, e) 6= 0 6= Cov(Q, u)

                                Q(P ), P (u) ⇒ Q(u)
                                 P (Q), Q(e) ⇒ P (e)
         Simultaneity means we can’t usually use OLS to estimate para-
         meters.

  • Suppose however that there exists some instruments zi such that

                                E [zi ui (β 0 )] = 0                     (9.1)

    for some instruments zi ∈ RJ .

  • Suppose that there are many instruments, i.e., J > K. In this case,
                                bIV because there are too many equations
    we can’t solve uniquely for β
    which can’t all be satisÞed simultaneously.

  • Now take
                                   1 0
                         Gn (β) =    Z (y − Xβ)
                                   n
                                   1X
                                      n
                                 =       zi (yi − x0i β).
                                   n i=1
110            CHAPTER 9. GENERALIZED METHOD OF MOMENTS

      A GMM estimator can be deÞned as any minimizer of
                        Qn (β) = (y − Xβ)0 ZWn Z 0 (y − Xβ)
      for some J × J weighting matrix Wn . What is the estimator?
  • We shall suppose that Wn is a symmetric matrix and deÞne the real
    symmetric matrix
                               A = ZWn Z 0
                             1
      and its square root A 2 . Letting
                                     1                  1
                             y ∗ = A 2 y and X ∗ = A 2 X
      we see that
                          Qn (β) = (y ∗ − X ∗ β)0 (y ∗ − X ∗ β)
      with solution
                      bGMM = (X ∗0 X ∗ )−1 X ∗0 y ∗
                      β
                                        −1
                           = (X 0 AX) X 0 Ay
                                              −1
                           = (X 0 ZWn Z 0 X) X 0 ZWn Z 0 y.

  • The question is, what is the best choice of Wn ? Suppose also that u has
    variance matrix σ 2 I independent of Z, and that Z is a Þxed variable.
    Then                h 1         i       1            Z 0Z
                   var n 2 Gn (β 0 ) = var 1 Z 0 u = σ 2      .
                                           n2             n
    Therefore, the optimal weighting is to take
                                    Wn ∝ (Z 0 Z)−1
      in which case
                            bGMM = (X 0 PZ X)−1 X 0 PZ y,
                            β
      where
                                  PZ = Z(Z 0 Z)−1 Z 0
      i.e., it is the two-stage least squares estimator.
  • Suppose instead that ui is heteroskedastic, then the optimal weighting
    is by
                                     1X 0 2
                                        n
                              Wn =             b.
                                          zi z u
                                    n i=1 i i
9.4. TIME SERIES CASE                                                        111

9.4     Time Series Case
  • We next suppose that the data is stationary and mixing.

  • CONDITIONAL MOMENT RESTRICTIONS. We suppose that for
    some m × 1 vector of known functions ρ, with probability one

                                 E [ρ(θ0 , Yt ) |Ft ] = 0

      where θ0 ∈ Rp is the true parameter value and Ft is some information
      set containing perhaps contemporaneous regressors and lagged vari-
      ables. Many economic models fall into this framework for example
      Euler equations. In Þnance applications ρ could be some excess return,
      and the eﬃcient markets hypothesis guarantees that this is unfore-
      castable given certain sorts of information.

  • Examples.

        — Static time series regression

                           yt = β 0 xt + εt , where E(εt |xt ) = 0.

           In this case, the error term εt can be serially correlated.
        — Time series regression

                     yt = γyt−1 + εt , where E(εt |yt−1 , yt−2 . . .) = 0.

           In this case, the error term is serially uncorrelated.
        — Same model but instead suppose only that

                                      E(εt |yt−1 ) = 0.

           This is strictly weaker than the earlier assumption.
        — Same model but instead suppose that

                                     E(εt |xt , yt−1 ) = 0.

           This is strictly weaker than the earlier assumption.
112            CHAPTER 9. GENERALIZED METHOD OF MOMENTS

  • Estimation now proceeds by forming some UNCONDITIONAL MO-
    MENT RESTRICTIONS using valid instruments, i.e., variables from
    Ft∗ ⊂ Ft . Thus, let
                              g(θ, Zt ) = ρ(θ0 , Yt ) ⊗ Xt ,
      where Xt ∈ Ft and Zt = (Yt , Xt ). We suppose that g is of dimensions
      q with q ≥ p. Then
                             E[g(θ, Zt )] = 0 ⇐⇒ θ = θ0 .
      We then form the sample moment condition

                                        1X
                                               T
                               GT (θ) =       g(θ, Zt ).
                                        T i=1

  • If q = p, the estimator solves GT (θ) = 0. If q > p, let
                              QT (θ) = GT (θ)0 WT GT (θ),
      where WT is a q × q positive deÞnite weighting matrix. For example,
      WT = Iq×q . Then let
                           b
                           θGMM         minimize          QT (θ)
                                 over       θ ∈ Θ ⊆ Rp .

  • In the regression case E(εt |xt ) = 0 means that
                                    E(εt · h(xt )) = 0
      for any measurable function h. Therefore, take
                             g(θ, Zt ) = h(xt ) · (yt − β 0 xt )
      In the autoregression case E(εt |yt−1 , . . .) = 0 means that
                                E(εt · h(yt−1 , . . .)) = 0
      for any measurable function h. Therefore, take
                        g(θ, Zt ) = h(yt−1 , . . .) · (yt − γyt−1 ) .
      In this case there are many functions that work.
9.5. ASYMPTOTICS                                                             113

9.5     Asymptotics
  • As before we have
              ³       ´   ¡                               ¢
            1
               b        D
          T θGMM − θ → N 0, (Γ0 W Γ)−1 Γ0 W ΩW Γ(Γ0 W Γ)−1 ,
            2




      where:
                                                           1
                             Ω(θ0 ) = Var n 2 Gn (θ0 ),
                                           ∂Gn (θ0 )
                                Γ = p lim             .
                                      n→∞      ∂θ
                                 0 < W =p lim Wn .
                                                           n→∞


  Now, however
                                         1
               Ω(θ0 ) =   lim varT 2 GT (θ0 )
                          T →∞
                                     "                              #
                                             1 X
                                                 T
                     =    lim var            1        g(θ0 , Zt )
                          T →∞           T 2 t=1
                                 "                            #
                             1 XX
                                T   T
                     = lim E           g(θ0 , Zt )g(θ0 , Zs )0 .
                       T →∞  T t=1 s=1

  • In the special case where g(θ, Zt ) is a martingale with respect to past
    information, i.e., E[g(θ, Zt )|Ft−1 } = 0, where Zt ∈ Ft , then
                                         "                       #
                                   1X
                                      T
                                                               0
                    Ω(θ0 ) = lim E       g(θ0 , Zt )g(θ0 , Zt ) .
                            T →∞   T t=1


  • In general though, you have to take account of the covariance terms.
    If the vector time series Ut = g(θ0 , Zt ) is stationary, then

                                                     X
                                                     ∞
                            Ω(θ0 ) = γ 0 +                 (γ k + γ 0k ) ,
                                                     k=1
114            CHAPTER 9. GENERALIZED METHOD OF MOMENTS

  where

                        γ k = E [g(θ0 , Zt )g(θ0 , Zt−k )0 ]

                        γ 0k = E [g(θ0 , Zt−k )g(θ0 , Zt )0 ]

  is the covariance function of Ut .

  • For standard errors and optimal estimation we need an estimator of Ω.
    The Newey-West estimator
                       XX                    ³     ´ ³     ´0
               b
               ΩT =                           e       e
                                w (|t − s|) g θ, Zt g θ, Zs ,
                         t,s:|t−s|≤n(T )


      where
                                                   j
                                     w(j) = 1 −       ,
                                                  n+1
      and where eθ is a preliminary estimate of θ0 obtained using some arbi-
      trary weighting matrix, e.g., Iq . This ensures a positive deÞnite covari-
      ance matrix estimate. Provided n = n(T ) → ∞ but n(T )/T → 0 at
      some rate
                                           P
                                      b T −→
                                     Ω         Ω.

  • This is used to construct standard errors.

  • The optimal choice of W should be an estimate of Ω−1 . We take WT =
    b −1 .
    Ω T



9.6      Example
  • Hansen and Singleton, Econometrica (1982). One of the most in-
    ßuential econometric papers of the 1980s. Intertemporal consump-
    tion/Investment decision:

         - ct consumption
         - u(·) utility uc > 0, ucc < 0.
         - 1 + ri,t+1 , i = 1, . . . , m is gross return on asset i at time t + 1.
9.6. EXAMPLE                                                                         115

  • The representative agent solves the following optimization problem
                                               X
                                               ∞
                                  max                 β τ E [u(ct+τ ) |It ] ,
                                {ct ,wt }∞
                                         t=0
                                               τ =0

    where

        - wt is a vector of portfolio weights.
        - β is the discount rate with 0 < β < 1.
        - It is the information available to the agent at time t.

  • We assume that there is a unique interior solution; this is characterized
    by the following condition

                            u0 (ct ) = βE [(1 + ri,t+1 )u0 (ct+1 ) |It ] ,

    for i = 1, . . . , m.

  • Now suppose that
                                        (
                                               c1−γ
                                                t
                                                          if γ > 0, γ 6= 1,
                             u(ct ) =          1−γ
                                               log ct     γ = 1.

    Here, γ is the coeﬃcient of relative risk aversion.

  • In this case, the Þrst order condition is
                                    £                    ¤
                          c−γ
                           t  = βE (1 + ri,t+1 )c−γ
                                                 t+1 |It

    for i = 1, . . . , m.

  • This implies that
                    "              (                      µ       ¶−γ )         #
                                                    ct+1
                     E 1−β            (1 + ri,t+1 )                       |It∗ = 0
                                                     ct

    for i = 1, . . . , m, where
                                                  It∗ ⊂ It
    and It∗ is the econometrician’s information set.
116            CHAPTER 9. GENERALIZED METHOD OF MOMENTS

  • We want to estimate the parameters θp×1 = (β, γ) and test whether
    the theory is valid given a dataset consisting of

                                     {ct , ri,t+1 , It∗ }Tt=1 .

  • DeÞne the q × 1 vector
                                         ..                   
                                           .
                         ·    ½             ³      ´−γ ¾¸     
                                              ct+1            
            g(θ, xt ) =  1 − β (1 + ri,t+1 ) ct           zjt  ,
                                                              
                                         ..
                                          .

      where
                                        zt ∈ It∗ ⊂ RJ
      are ‘instruments’, q = mJ, and

                        xt = (zt , ct , ct+1 , r1,t+1 , . . . , rm,t+1 )0 .

  • Typically, zt is chosen to be lagged variables and are numerous, so that
    q ≥ p.

  • The model assumption is that

                                     E [g(θ0 , xt )] = 0

      for some unique θ0 .

  • This is a nonlinear function of γ.

  • Exercise. Show how to consistently estimate Γ and Ω in this case.
Chapter 10

Time Series

10.1      Some Fundamental Properties
  • We start with univariate time series {yt }Tt=1 . There are two main fea-
    tures:

       - stationarity/nonstationarity
       - dependence

  • We Þrst deÞne stationarity.

  • Strong Stationarity. The stochastic process y is said to be strongly
    stationary if the vectors
                               (yt , . . . , yt+r )
    and
                                (yt+s , . . . , yt+s+r )
    have the same distribution for all t, s, r.

  • Weak Stationarity. The stochastic process y is said to be weakly sta-
    tionary if the vectors
                               (yt , . . . , yt+r )
    and
                                (yt+s , . . . , yt+s+r )
    have the same mean and variance for all t, s, r.

                                     117
118                                             CHAPTER 10. TIME SERIES

  • Most of what we know is restricted to stationary series, but in the last
    20 years there have been major advances in the theory of nonstationary
    time series, see below. In Gaussian [i.e., linear] time series processes,
    strong and weak stationarity coincide.

  • Dependence. One measure of dependence is given by the covariogram
    [or correlogram]
                                                 γ
                     cov(yt , yt−s ) = γ s ; ρs = s .
                                                 γ0

  • Note that stationarity was used here in order to assert that these mo-
    ments only depend on the gap s and not on calendar time t as well.

  • For i.i.d. series,
                                 γ s = 0 for all s 6= 0,
      while for positively (negative) dependent series γ s > (<)0. Economics
      series data often appear to come from positively dependent series.

  • Mixing. (Covariance) If γ s → 0 as s → ∞.

  • This just says that the dependence [as measured by the covariance] on
    the past shrinks with horizon. This is an important property that is
    possessed by many models.

  • ARMA Models. The following is a very general class of models called
    ARMA(p, q):

                         yt = µ + φ1 yt−1 + . . . + φp yt−p
                              +εt − θ1 εt−1 − . . . − θq εt−q ,

      where εt is i.i.d., mean zero and variance σ 2 .

         - We shall for convenience usually assume that µ = 0.
         - We also assume for convenience that this model holds for t =
           0, ±1, . . ..

  • It is convenient to write this model using lag polynomial notation. We
    deÞne the lag operator
                                    Lyt = yt−1
10.1. SOME FUNDAMENTAL PROPERTIES                                       119

    so that we can now deÞne
                                A(L)yt = B(L)εt ,
    where the lag polynomials
                       A(L) = 1 − φ1 L − . . . − φp Lp
                       B(L) = 1 − θ1 L − . . . − θq Lq .
    The reason for this is to save space and to emphasize the mathematical
    connection with the theory of polynomials.
  • Special case AR(1). Suppose that
                                 yt = φyt−1 + εt .
    Here,
                                A(L) = 1 − φL.

       - We assume |φ| < 1, which is necessary and suﬃcient for yt to be
         a stationary process.
       - Now write
                               yt−1 = φyt−2 + εt−1 .
         Continuing we obtain
                         yt = εt + φεt−1 + φ2 yt−2
                            = εt + φεt−1 + φ2 εt−2 + . . .
                              X∞
                            =     φj εt−j ,
                                   j=0

         which is called the MA(∞) representation of the time series;
       - this shows that yt depends on all the past shocks.

  • Now we calculate the moments of yt using the stationarity property.
    We have
                           E(yt ) = φE(yt−1 ),
    which can be phrased as
                                µ = φµ ⇔ µ = 0,
    where
                              µ = E(yt ) = E(yt−1 ).
120                                             CHAPTER 10. TIME SERIES

  • Furthermore,
                             var(yt ) = φ2 var(yt−1 ) + σ 2 ,
      which implies that
                                              σ2
                                     γ0 =          ,
                                            1 − φ2
      where
                              γ 0 = var(yt ) = var(yt−1 ).
      This last calculation of course requires that |φ| < 1, which we are
      assuming for stationarity.

  • Finally,
                                                         2
                     cov(yt , yt−1 ) = E(yt yt−1 ) = φE(yt−1 ) + 0,
      which implies that
                                               σ2
                                    γ1 = φ          ,
                                             1 − φ2
      while
                                                                       σ2
               cov(yt , yt−2 ) = E(yt yt−2 ) = φE(yt−1 yt−2 ) = φ2          .
                                                                     1 − φ2

  • In general
                                      φs
                              γ s = σ2     ; ρs = φs .
                                    1 − φ2
      The correlation function decays geometrically towards zero.

  • Exercise calculate correlogram for AR(2).

  • Moving Average MA(1). Suppose that

                                    yt = εt − θεt−1 ,

      where as before εt are i.i.d. mean zero with variance σ 2 .

         - In this case,
                                         E(yt ) = 0,
           and
                                   var(yt ) = σ 2 (1 + θ2 ).
10.1. SOME FUNDAMENTAL PROPERTIES                                       121

       - Furthermore,

                 cov(yt , yt−1 ) = E {(εt − θεt−1 ) (εt−1 − θεt−2 )}
                                 = −θE(ε2t−1 )
                                 = −θσ 2 .

        Therefore,

                                           −θ
                                ρ1 =            ,
                                         1 + θ2
                                ρj     = 0, j = 2, . . .

       - This is a 1-dependent series. MA(q) is a q-dependent series.
       - Note that the process is automatically stationary for any value of
         θ.
       - If |θ| < 1, we say that the process is invertible and we can write

                                     X
                                     ∞
                                           θj yt−j = εt .
                                     j=0


  • In general ARMA(p, q), we can write

                               A(L)yt = B(L)εt .

       - The stationarity condition for an ARMA(p, q) process is just that
         the roots of the autoregressive polynomial

                                1 − φ1 z − . . . − φp z p

        to be outside unit circle.
       - Likewise the condition for invertibility is that the roots of the
         moving average polynomial

                                1 − θ1 z − . . . − θq z q

        lie outside the unit circle.
122                                          CHAPTER 10. TIME SERIES

         - Assuming these conditions are satisÞed we can write this process
           in two diﬀerent ways:

                              A(L)      X∞
                                   yt =     γ j yt−j = εt .
                              B(L)      j=0


          This is called the AR(∞) representation, and expresses y in terms
          of its own past. Or

                                   B(L)      X∞
                              yt =      εt =     δ j εt−j .
                                   A(L)      j=0


          This is called the MA(∞) representation, and expresses y in terms
          of the past history of the random shocks.


10.2      Estimation
In this section we discuss estimation of the autocovariance function of a
stationary time series as well as the parameters of an ARMA model.

   • Autocovariance. Replace population quantities by sample

                               1    XT
                      bs
                      γ    =            (yt − y)(yt−s − y)
                             T − s t=s+1

                              bs
                              γ
                      b
                      ρs =       .
                              b0
                              γ

      These sample quantities are often used to describe the actual series
      properties. Consistent and asymptotically normal.

   • Box-Jenkins analysis: ‘identiÞcation’ of the process by looking at the
     correlogram. In practice, it is hard to identify any but the simplest
     processes, but the covariance function still has many uses.

   • Estimation of ARMA parameters φ. Can ‘invert’ the autocovariance/autocorrelation
     function to compute an estimate of φ. For example in the AR(1) case,
     the parameter ρ is precisely the Þrst order autocorrelation. In the
10.2. ESTIMATION                                                         123

    MA(1) case, can show that the parameter θ satisÞes a quadratic equa-
    tion in which the coeﬃcients are the autocorrelation function at the
    Þrst two lags. A popular estimation method is the Likelihood under
    normality. Suppose that
                                
                              ε1
                            .. 
                            .  ∼ N(0, σ 2 I),
                              εT
    then                           
                                 y1
                                .. 
                                .  ∼ N (0, Σ)
                                     yT
    for some matrix Σ.

       - for an AR(1) process
                                                      
                                  1 γ γ 2 · · · γ T −1
                                 2
                           σ             ...      .. 
                      Σ=                           . ,
                         1 − γ2           ...
                                                  1

       - for an MA(1) process
                                                   −θ
                                                                    
                                               1   1+θ2
                                                                0
                                                         ...       
                         Σ = σ 2 (1 + θ2 )                         .
                                               0                1

  • For general ARMA then, the log likelihood function is
                          −T         1         1
                    `=       log 2π − log |Σ| − y 0 Σ−1 y.
                           2         2         2
    Maximize with respect to all the parameters φ.
  • Distribution theory. The MLE is consistent and asymptotically normal
    provided the process is stationary and invertible.
                                           ¡ −1 ¢
                             1
                                b − φ) →
                           T 2 (φ
                                       D
                                         N 0, Iφφ   ,
    where Iφφ is the information matrix.
124                                                         CHAPTER 10. TIME SERIES

  • In practice, |Σ| and Σ−1 can be tough to Þnd. We seek a helpful
    approach to computing the likelihood and an approximation to it, which
    is even easier to work with.
  • The Prediction error decomposition is just a factorization of the joint
    density into the product of a conditional density and a marginal density,

                                        f (x, z) = f (x |z )f (z).

      We use this repeatedly and take logs to give
                                         X
                                         T
            ` (y1 , . . . , yT ; θ) =           ` (yt |yt−1 , . . . , y1 ) + ` (y1 , . . . , yp ) .
                                        t=p+1


  • This writes the log likelihood in terms of conditional distributions
    and a single marginal distribution. In AR cases the distribution of
    yt |yt−1 , . . . , y1 is easy to Þnd:
                                              ¡                               ¢
                     yt |yt−1 , . . . , y1 ∼ N φ1 yt−1 + . . . + φp yt−p , σ 2 .

  • In the AR(1) case
                                1             1
                    `t|t−1 ∼ − log σ 2 − 2 (yt − φ1 yt−1 )2 .
                                2            2σ
                  ¡                 ¢
      Also, y1 ∼ N 0, σ 2 /(1 − φ2 ) , i.e.,

                                     1      σ2     (1 − φ2 ) 2
                           `(y1 ) = − log        −          y1 .
                                     2    1 − φ2      2σ 2
      Therefore, the full likelihood in the AR(1) case is

                         1 X
                                           T
          T −1                                 1      σ2     1 − φ2 2
      `=−      log σ 2 − 2     (yt − φyt−1 )2 − log        −        y .
            2           2σ t=2                 2    1 − φ2     2σ 2 1

                                                                        PT
  • Often it is argued that `(y1 ) is small relative to                     t=2 ` (yt |yt−1 , . . . , y1 ),
    in which case we use

                                            1 X
                                                            T
                             T −1
                         −        log σ 2 − 2     (yt − φyt−1 )2 .
                               2           2σ t=2
10.3. FORECASTING                                                              125

  • This criterion is equivalent to the least squares criterion, and has unique
    maximum                           PT
                                 b          yt yt−1
                                 φ = Pt=2 T    2
                                                    .
                                          t=2 yt−1
    This estimator is just the OLS on yt on yt−1 [but using the reduced
    sample]. Can also interpret this as a GMM estimator with moment
    condition
                             E [yt−1 (yt − φyt−1 )] = 0.
  • The full MLE will be slightly diﬀerent from the approximate MLE. In
    terms of asymptotic properties, the diﬀerence is negligible.

        - However, in Þnite sample there can be signiÞcant diﬀerences.
        - Also, the MLE imposes that φ b be less than one - as φ → ±1,
          ` → −∞. The OLS estimate however can be either side of the
          unit circle.


10.3     Forecasting
  • Let the sample be {y1 , . . . , yT }. Suppose that
                              yt = γyt−1 + εt ,     |γ| < 1,
    where we Þrst assume that γ is known.
  • Want to forecast yT +1 , yT +2 , . . . , yT +r given the sample information. We
    have
                                 yT +1 = γyT + εT +1 .
    Therefore, forecast yT +1 by
                         ybT +1|T = E [yT +1 |sample] = γyT .

  • The forecast error is εT +1 , which is mean zero and has variance σ 2 .
  • What about forecasting r periods ahead?
                       yT +r = γ r yT + γ r−1 εT +1 + . . . + εT +r .
    Therefore, let
                                     ybT +r|T = γ r yT
    be our forecast.
126                                            CHAPTER 10. TIME SERIES

  • The forecast error ybT +r|T − yT +r has mean zero and variance
                               ¡                        ¢
                            σ 2 1 + γ 2 + . . . + γ 2r−2 .

  • Asymptotically the forecast reverts to the unconditional mean and the
    forecast variance reverts to the unconditional variance.

  • In practice, we must use an estimate of γ, so that

                                             b r yT ,
                                  ybT +r|T = γ

      where γb is estimated from sample data. If γ is estimated well, then this
      will not make much diﬀerence.

  • Forecast interval
                              ybT +r|t ± 1.96 · DS,
                                  ¡                       ¢
                         SD = σ 2 1 + γ 2 + . . . + γ 2r−2 .
      This is to be interpreted like a conÞdence interval. Again we must
      replace the unknown parameters by consistent estimates.

  • This theory generalizes naturally to AR(2) and higher order AR processes
    in which case the forecast is a linear combination of the most recent
    observations. The question is, how to forecast for an MA(1) process?

                           yt = εt − θεt−1 = (1 − θL)εt .

      We must use the AR(∞) representation
                            yt
                                 = yt + θyt−1 + . . . = εt .
                          1 − θL
      This means that the forecast for MA processes is very complicated and
      depends on all the sample y1 , . . . , yT .


10.4      Autocorrelation and Regression
  • Regression models with correlated disturbances

                                   yt = β 0 xt + ut ,
10.4. AUTOCORRELATION AND REGRESSION                                     127

    where xt is exogenous, i.e., is determined outside the system; Þxed
    regressors are an example. There are a number of diﬀerent variations
    on this theme - strongly exogenous and weakly exogenous. A weakly
    exogenous process could include lagged dependent variables. We will
    for now assume strong exogeneity.

  • We also suppose that

                          E(ut us ) 6= 0 for some s 6= t.

  • As an example, suppose that

                         ln GNP = β 1 + β 2 time + ut .

    We expect the deviation from trend, ut , to be positively autocorrelated
    reßecting the business cycle, i.e., not i.i.d. Recession quarter tends to
    be followed by recession quarter.

  • We can write the model in matrix form

                                  y = Xβ + u,
                                                           
                                   γ 0 γ 1 γ 2 · · · γ T −1
                                              ...          
                   E(uu0 ) = Σ =                     γ2  .
                                               ...
                                                      γ0

  • The consequences for estimation and testing of β are the same as
    with heteroskedasticity: OLS is consistent and unbiased, but ineﬃcient,
    while the SE’s are wrong.

  • SpeciÞcally,
                           b = (X 0 X)−1 X 0 ΣX(X 0 X)−1 ,
                       var(β)
    where
                                        X
                                        T X
                                          T
                       ψ T = X 0 ΣX =             xt x0t γ |t−s| .
                                        t=1 s=1
128                                                 CHAPTER 10. TIME SERIES

  • A naive implementation of the White strategy is going to fail here, i.e.,
                                           
                      b21 u
                      u   b1 u
                             b2 · · · u
                                      b1 u
                                         bT
                          b21
                           u                    XT X T
             b     0                       
             ψT = X            ...         X =         xt x0t u
                                                                bt u
                                                                   bs
                                               t=1 s=1
                                       b2T
                                       u

      is inconsistent. This is basically because there are too many random
      variables in the sample matrix, in fact order T 2 , whereas in the inde-
      pendent but heterogeneous case there were only order T terms.

  • The correct approach is to use some downweighting that concentrates
    weight on a smaller fraction of their terms. Bartlett/White/Newey/West
    SE’s: Replace by sample equivalents and use weights

                                                     j
                                 w(j) = 1 −             ,
                                                    n+1

      so that
                              XX
                      bT =
                      ψ                       Xt Xs0 w (|t − s|) u
                                                                 bt u
                                                                    bs .
                            t,s:|t−s|≤n(T )

      This also ensures a positive deÞnite covariance matrix estimate. Pro-
      vides consistent standard errors.

  • An alternative strategy is to parameterize ut by, say, an ARMA process
    and do maximum likelihood
                      1           1
                 ` = − ln |Σ(θ)| − (y − Xβ)0 Σ(θ)−1 (y − Xβ) .
                      2           2

  • Eﬃcient estimate of β (under Gaussianity) is a sort of GLS
                            ³             ´−1
                       bML = X 0 Σ(b
                       β           θ)−1 X     X 0 Σ(b
                                                    θ)−1 y,

      where b
            θ is the MLE of θ. This will be asymptotically eﬃcient when the
      chosen parametric model is correct.
10.5. TESTING FOR AUTOCORRELATION                                       129

10.5     Testing for Autocorrelation
  • Suppose that we observe ut , which is generated from an AR(1) process
                                  ut = ρut−1 + εt ,
    where εt are i.i.d.
  • The null hypothesis is that ut is i.i.d., i.e.,
                           H0 : ρ = 0 vs. HA : ρ 6= 0.
    This is used as (a) general diagnostic, and (b) eﬃcient markets.
  • General strategy: use LR, Wald or LM tests to detect departures.
  • The LM test is easiest, this is based on
                              µP             ¶
                                      u  bt−1 2
                                      bt u              D
                    LM = T          t
                                  P 2           = T r12 → χ21 ,
                                       b
                                       u
                                      t t−1

          bt are the OLS residuals. Therefore, we reject the null hypothesis
    where u
    when LM is large relative to the critical value from χ21 .
  • This approach is limited to two-sided alternatives. We can however
                                   1
    also use the signed version, T 2 r1 , which satisÞes
                                    1      D
                                  T 2 r1 → N(0, 1)
    under the null hypothesis.
  • The Durbin-Watson d is
                                   PT
                                             ut − u
                                        t=2 (b     bt−1 )2
                              d=          PT 2             .
                                              t=1 b
                                                  ut

    This is always printed out by many regression packages.
  • Using the approximation
                                   d ≈ 2(1 − r1 ),
    we have [under the null hypothesis]
                               µ     ¶
                             1     d
                           T2 1−        → N(0, 1).
                                   2
130                                                CHAPTER 10. TIME SERIES

  • Generalization (test against AR(p)). Suppose that

                           ut = ρ1 ut−1 + . . . + ρp ut−p + εt ,

      where εt are i.i.d. The null hypothesis is that ut is i.i.d., i.e.,

                                H0 : ρ1 = . . . = ρp = 0

                                 vs. HA some ρj 6= 0.

  • Box-Pierce Q
                                          X
                                          P
                                                    D
                                 Q=T            rj2 → χ2P .
                                          j=1



10.6       Dynamic Regression Models
  • We have looked at pure time series models with dynamic response and
    at static regression models. In practice, we may want to consider mod-
    els that have both features.

  • Distributed lag
                                         q
                                         X
                              yt = α +          β j Xt−j + ut ,
                                         j=0

      [could have q = ∞], where for now
                                         iid
                                     ut ∼ 0,       σ2.

      Captures the idea of dynamic response: aﬀect on y of change in x may
      take several periods to work through.

  • Temporary change. Suppose that

                                      xt → xt + ∆

      but that future xs are unaﬀected, then

                                 yt → yt + β 0 ∆
                               yt+1 → yt + β 1 ∆ etc.
10.6. DYNAMIC REGRESSION MODELS                                             131

  • Permanent change. Suppose that
                             xs → xs + ∆,           ∀s ≥ t.
    Then
                            yt → yt + β 0 ∆
                          yt+1 → yt + (β 0 + β 1 )∆ etc.

       - The impact eﬀect is β 0 ∆.
                             P
       - Long run eﬀect is ∆ ∞   s=0 β s .

  • When q is large (inÞnite) there are too many free parameters β j , which
    makes estimation diﬃcult and imprecise. To reduce the dimensionality
    it is appropriate to make restrictions on β j .

       - The polynomial lag
                          ½
                            a0 + a1 j + . . . + ap j p           if j ≤ p
                    βj =
                            0                                    else.
       - The Geometric lag
                                β j = βλj ,        j = 0, 1, . . .
         for some 0 < λ < 1. This implies that
                                             X
                                             ∞
                           yt = α + β              λj xt−j + ut
                                             j=0
                                     "∞       #
                                      X
                                          j j
                               = α+β    (λ L ) xt + ut
                                              j=0
                                                1
                               = α+β                xt + ut .
                                             1 − λL
         Therefore,
                      (1 − λL)yt = α(1 − λL) + βxt + (1 − λL)ut ,
         which is the same as
                       yt = α(1 − λ) + λyt−1 + βxt + ut − λut−1 .
         The last equation is called the lagged dependent variable repre-
         sentation.
132                                                   CHAPTER 10. TIME SERIES

  • More generally [ADL model]
                                A(L)yt = B(L)xt + ut ,
      where A, B are polynomials of order p, q, while
                         C(L)ut = D(L)εt ,            εt i.i.d. 0, σ 2 .
      This is a very general class of models; estimation, forecasting, and
      testing have all been worked out at this generality, and one can Þnd
      accounts of this in advanced time series texts.


10.7          Adaptive expectations
  • Suppose that
                             yt = α + β              x∗t+1        +εt ,
                            |{z}                     |{z}
                           demand                expected price
      but that the expected price is made at time t and is unobserved by the
      econometrician. Let
  • We observe xt , where
                           x∗t+1 − x∗t         = (1 − λ) (xt − x∗t ) ,
                           | {z }                        | {z }
                        revised expectations                 forecast error

      i.e.,
                            x∗t+1 =      λx∗t       + (1 − λ)xt .
                                         |{z}         | {z }
                                     old forecast         news

  • Write
                               (1 − λL)x∗t = (1 − λ)xt ,
      which implies that
                    (1 − λ)             £                            ¤
              x∗t =         xt = (1 − λ) xt + λxt−1 + λ2 xt−2 + . . . .
                    1 − λL
  • Therefore,
                                           β(1 − λ)
                              yt = α +              xt + εt ,
                                            1 − λL
      which implies that
                 yt = λyt−1 + α(1 − λ) + β(1 − λ)xt + εt − λεt−1 .
      This is an ADL with an MA(1) error term.
10.8. PARTIAL ADJUSTMENT                                             133

10.8     Partial adjustment
  • Suppose that
                                        yt∗ = α + βxt ,

    where yt∗ is the desired level.

  • However, because of costs of adjustment

                        y − y = (1 − λ)(yt∗ − yt−1 ) + εt .
                        |t {z t−1}
                        actual change



  • Substituting we get

                   yt = (1 − λ)yt∗ + λyt−1 + εt
                      = α(1 − λ) + λyt−1 + β(1 − λ)xt + εt .

    This is an ADL with an i.i.d. error term - assuming that the original
    error term was i.i.d.


10.9     Error Correction
  • Suppose long run equilibrium is

                                           y = λx.


  • Disequilibria are corrected according to

                     ∆yt = β (yt−1 − λxt−1 ) + λ∆xt−1 + εt ,

    where β < 0.

  • This implies that

                 yt = yt−1 (1 + β) + λ(1 − β)xt−1 − λxt−2 + εt .
134                                                 CHAPTER 10. TIME SERIES

10.10        Estimation of ADL Models
  • Suppose that
                                 yt = θ1 + θ2 yt−1 + θ3 xt + εt ,
      where we have two general cases regarding the error term:

       (1) εt is i.i.d. 0, σ 2
       (2) εt is autocorrelated.

  • In case (1), we can use OLS regression to get consistent estimates of
    θ1 , θ2 and θ3 . The original parameters are related to the θj in some
    way, for example                          
                                θ1 = α(1 − λ) 
                                θ2 = λ          .
                                              
                                θ3 = β(1 − λ)
      In this case, we would estimate the original parameters by indirect least
      squares
                                        b = b
                                        λ   θ2
                                                  b
                                                  θ1
                                        b =
                                        α
                                                 1−b θ2
                                                  b
                                                  θ3
                                        b =
                                        β                 .
                                                 1−b
                                                   θ2

  • In case (2), we must use instrumental variables or some other procedure
    because OLS will be inconsistent.

         - For example, if
                                           εt = η t − θηt−1 ,
           then yt−1 is correlated with εt through ηt−1 . In this case there are
           many instruments: (1) All lagged xt , (2) yt−2 , . . ..
         - However, when
                                           εt = ρεt−1 + ηt ,
           η t i.i.d. lagged y are no longer valid instruments and we must rely
           on lagged x.
10.11. NONSTATIONARY TIME SERIES MODELS                                   135

  • There are many instruments; eﬃciency considerations require that one
    has a good way of combining them such as in our GMM discussion.
  • IV are not generally as eﬃcient as ML when the error terms are nor-
    mally distributed.


10.11      Nonstationary Time Series Models
  • There are many diﬀerent ways in which a time series yt can be nonsta-
    tionary. For example, there may be Þxed seasonal eﬀects such that
                                     X
                                     m
                              yt =         Djt γ j + ut ,
                                     j=1

    where Djt are seasonal dummy variables, i.e., one if we are in season j
    and zero otherwise. If ut is an iid mean zero error term,
                                           X
                                           m
                                Eyt =            Djt γ j
                                           j=1

    and so varies with time. In this case there is a sort of periodic movement
    in the time series but no ‘trend’.
  • We next discuss two alternative models of trending data: trend sta-
    tionary and diﬀerence stationary.
  • Trend stationary. Consider the following process
                                yt = µ + βt + ut ,
    where {ut } is a stationary mean zero process e.g.,
                               A(L)ut = B(L)εt
    with the polynomials A, B satisfying the usual conditions required for
    stationarity and invertibility. This is the trend+stationary decomposi-
    tion.

      — We have
                           Eyt = µ + βt;             var(yt ) = σ 2
         for all t. The lack of stationarity comes only through the mean.
136                                            CHAPTER 10. TIME SERIES

        — The shocks (ut ) are transitory - they last for some period of time
          and then are forgotten as yt returns to trend.
        — Example. GNP grows at 3% per year (on average) for ever after.

  • Diﬀerence stationary I(1)
                                  yt = µ + yt−1 + ut ,
      where {ut } is a stationary process. This is called the random walk plus
      drift. When µ = 0, we have the plain vanilla random walk.

        — We can’t now suppose that the process has been going on for
          an inÞnite amount of time, and the starting condition is of some
          signiÞcance.
        — We can make two assumptions about the initial conditions:
                             ½
                               Þxed
                        y0 =
                               random Variable N(0, v)
           for some variance v.
        — Any shocks have permanent aﬀects
                                                    P
                                                    t
                                   yt = y0 + tµ +         us .
                                                    s=1

           The diﬀerenced series is than
                               ∆yt = yt − yt−1 = µ + ut .

  • Both the mean and the variance of this process are generally explosive.
                         Eyt = y0 + tµ;        var yt = σ 2 t.
      If µ = 0, the mean does not increase over time but the variance does.
  • Note that diﬀerencing in the trend stationary case gives
                               ∆yt = β + ut + ut−1 ,
      which is a unit root MA. So although diﬀerencing apparently elimi-
      nates stationarity it induces non-invertibility. Likewise detrending the
      diﬀerence stationary case is not perfect.
10.12. ESTIMATION                                                        137

  • A model that nests both trend stationary and diﬀerence stationary is
                           yt = µ + βt + ut , ut = ρut−1 + η t ,
    where ηt is a stationary ARMA process. We have
                       yt = µ + βt + ρ(yt−1 − µ + β(t − 1)) + η t ,
    When ρ = 1 and β = 0 we get the random walk plus drift.


10.12       Estimation
  • Eﬀects of time trend on estimation:
        - you get superconsistent T 3/2 estimates of β, but still Gaussian
          t-tests still valid.
  • Eﬀects of unit root:
        - superconsistent estimates, but with nonstandard distributions: t-
          tests not valid!
  • Suppose that
                          yt = ρyt−1 + ut ,   where ut ∼ 0, σ 2 .
    Then,                              PT
                                           yt yt−1 P
                            ρOLS = Pt=2
                            b        T        2
                                                   → ρ,    ∀ρ.
                                         t=2 yt−1

        - If |ρ| < 1
                                   1
                                      ρ − ρ) → N(0, 1 − ρ2 ).
                                 T 2 (b
        - If ρ = 1, 1 − ρ2 = 0, so the implied variance above is zero. So
          what happens in this case? If ρ = 1,
                                                  D
                                           ρ − ρ) → X,
                                        T (b
          where X is not Gaussian; it is asymmetric and in fact E(b   ρ) < 1,
          ∀T . The rate of convergence is faster but the asymptotic distrib-
          ution is non standard.
        - Dickey-Fuller (1981) derived the distribution of bρ and the distri-
          bution of the corresponding t-statistic, tρ , when ρ = 1, and they
          tabulated it.
138                                          CHAPTER 10. TIME SERIES

10.13       Testing for Unit Roots
  • Suppose that
                                yt = µ + ρyt−1 + ut ,
      where the process ut is i.i.d. By taking diﬀerences we obtain

                               ∆yt = µ + γyt−1 + ut

      with γ = ρ − 1.

  • To test whether ρ = 1 is equivalent to testing γ = 0 in the model

                               ∆yt = µ + γyt−1 + ut .

      We do a one-sided test

                                H0 : γ = 0 vs γ < 0

      because the explosive alternatives are not interesting.

  • Dickey and Fuller (1979) tabulated the distribution of the least squares
    estimator bγ and its associated t-test in the case that ρ = 1 i.e., γ = 0.
    This is exactly the null case. Their critical values can be used to do
    the test. Large negative values of the test statistic are evidence against
    the null hypothesis.

  • The critical values are −3.96 and −3.41 at the 1% and 5% levels re-
    spectively.

  • If you do it without the intercept, i.e., run the regression

                                 ∆yt = γyt−1 + ut .

      the critical values are −3.43 and −2.86 at the 1% and 5% levels respec-
      tively. This assumes that the null hypothesis is the driftless random
      walk.

  • Can also do a test based on the raw estimates.
10.14. COINTEGRATION                                                      139

  • The DF test is only valid if the error term ut is i.i.d. Have to adjust
    for the serial correlation in the error terms to get a valid test. The
    Augmented D-F allows the error term to be correlated over time upto
    a certain order. Their test is based on estimating the regression

                                           P
                                           p−1
                       ∆yt = µ + γyt−1 +         φj ∆yt−j + η t
                                           j=1


                                                           b or rather the
    by least squares and using the ADF critical values for γ
    t-ratio.

  • Can also add trend terms in the regression. Phillips-Perron test (PP)
    is an alternative way of correcting for serial correlation in ut .

  • Applications


10.14      Cointegration
  • Suppose yt and xt are I(1) but there is a β such that

                                     yt − βxt

    is I(0), then we say that yt , xt are cointegrated.

        - For example, aggregate consumption and income appear to be
          nonstationary processes, but appear to deviate from each other in
          only a stationary fashion, i.e., there exists a long-run equilibrium
          relationship about which there are only stationary deviations.
        - Note that β is not necessarily unique.

  • Can estimate the cointegrating parameter β by an OLS regression of yt
    on xt but although the estimator is consistent, the distribution theory
    is again non-standard, but has been tabulated.

  • More general system. Suppose that yt = (y1t , y2t )0 ∈ Rk1 +k2 and that

                               y1t = β 0 y2t + ut
                               y2t = y2t−1 + ηt ,
140                                              CHAPTER 10. TIME SERIES

      If ut and ηt are mutually uncorrelated, then we call the system triangu-
      lar. Special results apply in this case. This model assumes knowledge
      about the number of cointegrating relations, i.e., k1 , and it makes a
      particular normalization. Can
  • Johansen test for the presence of cointegration and the number of coin-
    tegrating relations. If we have a k-vector unit root series yt there can
    be no cointegrating relations, one,..., k − 1 cointegrating relations.. Jo-
    hansen tests these restrictions sequentially to Þnd the right number of
    cointegrating relations in the data.


10.15        Martingales
  • We say that the process yt is a martingale if
                                E [yt |It−1 ] = yt−1 a.s.,
      where It−1 is information available at time t, for example It−1 = {yt−1 , . . .},
      i.e.,
                                   yt = yt−1 + ut ,
      where ut is a martingale diﬀerence sequence and satisÞes
                                  E [ut |It−1 ] = 0 a.s.
      The process ut may be heterogeneous but is uncorrelated.

        — Hall (1978): Consumption is a martingale.
        — Fama: Stock prices are martingales.
                                   E (Pt+1 |Pt , . . .) = Pt .
           This is a bit too strong and is unsupported by the data.

  • The assumption of unforecastability rules out serial correlation in εt
    and hence rt , but it does not by itself say anything more about the
    distribution of εt . That is, εt could be heterogeneous and be non-
    normal. It could itself be non-stationary - for example εt independent
    over time with
                                εt ∼ N (0, f (t))
      is consistent with the eﬃcient markets hypothesis. However, it is fre-
      quently assumed that the error term is itself stationary process.
10.16. GARCH MODELS                                                         141

10.16       GARCH Models
  • Engle (1982) introduced the following class of models

                                       rt = εt σ t ,

    where εt is i.i.d. (0, 1), while

                                σ 2t = var (rt |Ft−1 )

    is the (time-varying) conditional variance.

  • For example,
                                  σ 2t = α + γrt−1
                                               2
                                                   ,
    which is the ARCH(1) model. Provided γ < 1, the process rt is weakly
    stationary and has Þnite unconditional variance σ 2 given by

                                 σ 2 = E(σ 2t ) < ∞,

    where
                                                        α
                              σ 2 = α + γσ 2 =             .
                                                       1−γ
  • This uses the law of iterated expectations E(Y ) = E (E(Y |I )) to argue
                        ¡ 2 ¢         ¡ ¡           ¢     ¢
                     E rt−1      = E E ε2t−1 |It−1 σ 2t−1
                                      ¡     ¢
                                 = E σ 2t−1 = σ 2 .

  • The unconditional distribution of rt is thick-tailed; that is, even if εt is
    normally distributed, rt is going to have an unconditional distribution
    that is a mixture of normals and is more leptokurtic. Suppose εt is
    standard normal, then E(ε4t ) = 3 and
                                               ¡    ¢
                          µ4 = E(rt4 ) = E ε4t σ 4t
                                = 3E(σ 4t ),

    where
                                 £¡                       ¢¤
                    E(σ 4t ) = E α2 + γ 2 rt−1
                                             4        2
                                                + 2αγrt−1
                             = α2 + γ 2 µ4 + 2αγσ 2 .
142                                              CHAPTER 10. TIME SERIES

      Therefore,
                                  ¡                     ¢
                            µ4 = 3 α3 + γ 2 µ4 + 2αγσ 2
                                 3 (α2 + 2αγσ 2 )
                               =
                                      1 − 3γ 2
                                           3α2
                               ≥ 3σ 4 =           .
                                         (1 − γ)2

  • The process rt is uncorrelated, i.e.,

                                    cov(rt , rt−s ) = 0

      for all s 6= 0. However, the process rt is dependent so that

                        E (g(rt )g(rt−s )) 6= E (g(rt )) E(h(rt−s ))

      for arbitrary functions g, h, certainly for g(r) = h(r) = r2 this is not
      true.

  • Can write the process as an AR(1) process in u2t , i.e.,

                                  rt2 = α + γrt−1
                                              2
                                                  + ηt ,

      where η t = rt2 − σ 2t is a mean zero innovation that is uncorrelated with
      its past.

  • Therefore, since γ > 0, the volatility process is positively autocorre-
    lated, i.e.,                 ¡            ¢
                             cov σ 2t , σ 2t−j > 0.
      Hence we get volatility clustering.

  • We can rewrite the process as
                                             ¡ 2       ¢
                               σ 2t − σ 2 = γ rt−1 − σ2 .

      Suppose that σ 2t−1 = σ 2 . When we get a large shock, i.e., ε2t−1 > 1,
      we get σ 2t > σ 2 but the process decays rapidly to σ 2 unless we get a
      sequence of large shocks ε2t−1+s > 1, s = 0, 1, 2, . . .. In fact, for a normal
      distribution the probability of having ε2 > 1 is only about 0.32 so we
      generally see little persistence.
10.16. GARCH MODELS                                                      143

  • Although the ARCH model implies volatility clustering, it does not in
    practice generate enough.

  • Generalize to ARCH(p), write
                                           p
                                           X
                              σ 2t = α +              2
                                                 γ j rt−j ,
                                           j=1


    where p is some positive integer and γ j are positive coeﬃcients.

  • This model is Þne, but estimation is diﬃcult. When p is large one Þnds
    that the coeﬃcients are imprecisely estimated and can be negative.
    Have to impose some restrictions on the coeﬃcients.

  • Instead GARCH(1, 1)

                           σ 2t = α + βσ 2t−1 + γrt−1
                                                  2
                                                      ,

    where α, β, γ are positive.

       - We have
                                      α     X∞
                            σ 2t =       +γ     β j−1 rt−j
                                                       2
                                                           ,
                                     1−β    j=1

         so that it is an inÞnite order ARCH model with geometric decline
         in the coeﬃcients.
       - If γ + β < 1, then the process rt is weakly stationary, i.e., the
         unconditional variance exists, and

                                     σ 2 = E(σ 2t ) < ∞,

         where
                                                            α
                        σ 2 = α + βσ 2 + γσ 2 =                    .
                                                       1 − (β + γ)

       - Surprisingly, even for some values of β, γ with γ + β ≥ 1, the
         process σ 2t is strongly stationary although the unconditional vari-
         ance does not exist in this case.
144                                               CHAPTER 10. TIME SERIES

  • More general class of models GARCH(p, q)
                               B(L)σ 2t = α + C(L)rt−1
                                                   2
                                                       ,
      where A and B are lag polynomials. Usually assume that the parame-
      ters in α, B, C > 0 to ensure that the variance is positive.
  • Other models. For example, one can write the model for log of variance,
    i.e.,
                       log σ 2t + α + β log σ 2t−1 + γrt−1
                                                       2
                                                           .
      This automatically imposes the restriction that σ 2t ≥ 0 so there is no
      need to impose restrictions on the parameters.
  • Nelsons EGARCH
                 log σ 2t = α + β log σ 2t−1 + γεt + δ (|εt | − E (|εt |)) .

  • T ARCH, SGARCH, CGARCH etc.


10.17       Estimation
  • More general model
                          yt = b0 xt + εt σ t
                                                           2
                      B(L)σ 2t = α + C(L) (yt−1 − b0 xt−1 ) .

  • If ARCH eﬀects are present, then we need to use robust estimates of
    the standard errors for the parameters b of the mean model.
  • Also, the variance process itself is of interest. Want to estimate the
    parameters of σ 2t too.
             ¡                                         ¢
  • Let θ = b, α, β 1 , . . . , β p , γ 1 , . . . , γ q . Estimation by ML suggested by
    εt being standard normal. In this case
                              1X                  1 X (yt − b0 xt )2
                                 T                   T
                                          2
                   `T (θ) = −       log σ t (θ) −                    .
                              2 t=1               2 t=1  σ 2t (θ)
      The ML estimator of b, θ can be obtained from this criterion. This
      involves nonlinear optimization. Have to impose the inequality restric-
      tions on the parameters which can be tricky.



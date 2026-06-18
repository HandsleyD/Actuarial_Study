---
normalized_id: shared-pdf-reference-linear-inverse-problems-in-structural-econometrics-estimation-based-on-spectral-decomposition-and-regularization
exam_code: SHARED
material_scope: linear inverse problems in structural econometrics estimation based on spectral decomposition and regularization.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Linear Inverse Problems in Structural Econometrics Estimation based on spectral decomposition and regularization.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-linear-inverse-problems-in-structural-econometrics-estimation-based-on-spectral-decomposition-and-regularization

  Linear Inverse Problems in Structural Econometrics
      Estimation based on spectral decomposition
                   and regularization∗
                                     Marine Carrasco
                                  University of Rochester
                                Jean-Pierre Florens
                  Université de Toulouse (GREMAQ and IDEI)
                                   Eric Renault
                     University of North Carolina, Chapel Hill
                                        January 2005


                                            Abstract
          This chapter provides an introduction to the estimation of the solution of in-
      verse problems. The beginning of this chapter focuses on integral equations of the
      first kind. Solving these equations is particularly challenging as the solution does
      not necessarily exist, may not be unique, and is not continuous. As a result, a
      regularized (or smoothed) solution needs to be implemented. We review different
      regularization methods and study the properties of the estimator. Integral equa-
      tions of the first kind appear, among others, in the generalized method of moments
      when the number of moment conditions is infinite and in the nonparametric estima-
      tion of instrumental variable regressions. At the end of this chapter, we investigate
      integral equations of the second kind, which solution may not be unique but is con-
      tinuous. Such equations appear when estimating nonparametrically additive models
      and measurement error models.

          Keywords: Additive models, Integral equation, Generalized Method of Mo-
      ments, Instrumental variables, Large number of regressors, Nonparametric estima-
      tion, Tikhonov and Landweber-Fridman regularizations.

          JEL: C13, C14, C20.

  ∗
    This chapter is a working draft for eventual publication in the Handbook of Econometrics, Vol 6.
Carrasco gratefully aknowledges financial support from the National Science Foundation, grant # SES-
0211418.
1. Introduction
1.1. Structural models and functional estimation
The objective of this chapter is to analyze functional estimation in structural econometric
models. There exist different approaches to structural inference in econometrics and
our presentation may be viewed as a non parametric extension of the basic example of
structural models, namely the static linear simultaneous equations model (SEM). Let us
consider Y a vector of random endogenous variables and Z a vector of exogenous random
variables. A SEM is characterized by a system

                                     Bθ Y + Cθ Z = U                                    (1.1)

where Bθ and Cθ are matrices that are functions of an unknown “structural” parameter
θ and E [U |Z] = 0. The reduced form is a multivariate regression model

                                       Y = ΠZ + V                                       (1.2)

where Π is the matrix of ordinary regression coefficients. The relation between reduced
and structural form is, in absence of higher moments restrictions, characterized by:

                                      Bθ Π + Cθ = 0.                                    (1.3)

    The two essential issues of structural modeling, the identification and the overidenti-
fication problems, follow from the consideration of Equation (1.3). The uniqueness of the
solution in θ for given Π defines the identification problem. The existence of a solution (or
restrictions imposed to Π to guarantee the existence) defines the overidentification ques-
tion. The reduced form parameter Π can be estimated by OLS and if a unique solution in
θ exists for any Π, it provides the Indirect Least Square estimate of θ. If the solution does
not exist for any Π, θ can be estimated by a suitable minimization of Bθ Π̂ + Cθ where Π̂
is an estimator of Π.
    We address in this chapter the issue of functional extension of this construction. The
data generating process (DGP) is described by a stationary ergodic stochastic process
which generates a sequence of observed realizations of a random vector X.
    The structural econometric models considered in this chapter are about the station-
ary distribution of X. This distribution is characterized by its cumulative distribution
function (c.d.f.) F while the functional parameter of interest is an element ϕ of some in-
finite dimensional Hilbert space. Following the notation of Florens (2003), the structural
econometric model defines the connection between ϕ and F under the form of a functional
equation:

                                       A(ϕ, F ) = 0.                                    (1.4)

    This equation extends Equation (1.3) and the definitions of identification (uniqueness
of this solution) and of overidentification (constraints on F such that a solution exists)
are analogous to the SEM case.

                                             1
   The estimation is also performed along the same line : F can be estimated by the
empirical distribution of the sample or by a more sophisticated estimator (like kernel
smoothing) belonging to the domain of A and ϕ is estimated by solving (1.4) or, in
the presence of overidentification, by a minimization of a suitable norm of A(ϕ, F ) after
plugging in the estimator of F .
   This framework may be clarified by some remarks.

  1. All the variables are treated as random in our model and this construction seems to
     differ from the basic econometric models which are based on a distinction between
     exogenous or conditioning variables and endogenous variables. Actually this dis-
     tinction may be used in our framework. Let X be decomposed into Y and Z and F
     into FY (.|Z = z) the conditional c.d.f. of Y given Z = z, and FZ the marginal c.d.f.
     of Z. Then, the exogeneity of Z is tantamount to the conjunction of two conditions.
     Firstly, the solution ϕ of (1.4) only depends on FY (.|Z = z) and ϕ is identified by
     the conditional model only. Secondly if FY ( |Z = z) and FZ are “variations free” in
     a given statistical model defined by a family of sampling distributions (intuitively
     no restrictions link FY ( |Z = z) and FZ ), no information on FY (.|Z = z) (and then
     on ϕ) is lost by neglecting the estimation of FZ . This definition fully encompasses
     the usual definition of exogeneity in terms of cuts (see Engle, Hendry and Richard
     (1983), Florens and Mouchart (1985)). Extension of that approach to sequential
     models and then to sequential or weak exogeneity is straightforward.

  2. Our construction does not explicitly involve residuals or other unobservable vari-
     ables. As it will be illustrated in the examples below, most of the structural econo-
     metric models are formalized by a relationship between observable and unobservable
     random elements. A first step in the analysis of these models is to express the re-
     lationship between the functional parameters of interest and the DGP, or, in our
     terminology, to specify the relation A(ϕ, F ) = 0. We start our presentation at the
     second step of this approach and our analysis is devoted to the study of this equation
     and to its use for estimation.

  3. The overidentification is handled by extending the definition of the parameter in
     order to estimate overidentified models. Even if A(ϕ, F ) = 0 does not have a so-
     lution for a given F , the parameter ϕ is still defined as the minimum of a norm of
     A(ϕ, F ). Then ϕ can be estimated from an estimation of F, which does not satisfy
     the overidentification constraints. This approach extends the original Generalized
     Method of Moments (GMM) treatment of overidentification. Another way to take
     into account overidentification constraints consists in estimating F under these con-
     straints (the estimator of F is the nearest distribution to the empirical distribution
     for which there exists a solution, ϕ, of A(ϕ, F ) = 0). This method extends the new
     approach to GMM called the empirical likelihood analysis (see Owen (2001) and
     references therein). In this chapter, we remain true to the first approach: if the
     equation A(ϕ, F ) = 0 has no solution it will be replaced by the first order condition


                                            2
      of the minimization of a norm of A(ϕ, F ). In that case, this first order condition
      defines a functional equation usually still denoted A(ϕ, F ) = 0.

1.2. Notation
In this chapter, X is a random element of a finite or infinite dimensional space X . In most
of the examples, X is a finite dimensional euclidean space (X ⊂ Rm ) and the distribution
on X, denoted F is assumed to belong to a set F. If F is absolutely continuous, its density
is denoted by f . Usually, X is decomposed into several components, X = (Y, Z, W ) ∈
Rp × Rq × Rr (p + q + r = m) and marginal c.d.f. or probability density function (p.d.f.)
are denoted by FY , FZ , FW . and fY , fX , fW respectively. Conditional c.d.f. are denoted
by FY (.|Z = z) or FY (.|z) and conditional density by fY (.|Z = z) or fY (.|z) . The sample
may be an i.i.d. sample of X (denoted in that case (xi )i=1,...,n ) or weakly dependent time
series sample denoted (xt )t=1,...,T in the dynamic case.
    The paper focuses on the estimation of an infinite dimensional parameter denoted
by ϕ, which is an element of a Hilbert space H (mathematical concepts are recalled in
Section 2). In some particular cases, finite dimensional parameters are considered and
this feature is underlined by the notation θ ∈ Θ ⊂ Rd .
    The structural model is expressed by an operator A from H × F into an Hilbert space
E and defines the equation A(ϕ, F ) = 0. The (possibly local) solution of this equation is
denoted by:

                                         ϕ = Ψ(F ).                                      (1.5)

     For statistical discussions, a specific notation for the true value is helpful and F0 will
denote the true c.d.f. (associated with the density f0 and with the true parameter ϕ0 (or
θ0 )). The estimators of the c.d.f. will be denoted by Fn in an i.i.d. setting or FT in a
dynamic environment.
     The operator A may take various forms. Particular cases are linear operators with
respect to F or to ϕ. The first case will be illustrated in the GMM example but most
of the paper will be devoted to the study of linear operator relatively to ϕ. In that case,
equation A(ϕ, F ) = 0 can be rewritten :


                                   A(ϕ, F ) = Kϕ − r = 0                                 (1.6)

where K is a linear operator from H to E depending on F and r is an element of E and
is also a function of F . The properties of K are essential and we will present different
examples of integral or differential operators. More generally, A may be nonlinear either
with respect to F or to ϕ but, as usual in functional analysis, most of the analysis of
nonlinear operators may be done locally (around the true value typically) and reduces to
the linear case. Game theoretic model or surplus estimation give examples of nonlinear
models.
    The problem of solving Equation (1.4) enters in the class of inverse problems. An
inverse problem consists into the resolution of an equation where the elements of the

                                              3
equations are imperfectly known. In the linear case, the equation is Kϕ = r and F is not
exactly known but only estimated. Then, r is also imperfectly known. The econometric
situation is more complex than most of the inverse problems studied in the statistical liter-
ature because K is also only imperfectly known. According to the classification proposed
by Vapnik (1998), the stochastic inverse problems of interest in this chapter are more
often than not characterized by equations with both the operator and the right-hand side
approximately defined. Inverse problems are said to be well-posed if a unique solution
exists and depends continuously of the imperfectly known elements of the equation. In
our notation, this means that Ψ in (1.5) exists as a function of F and is continuous. Then,
if F is replaced by Fn , the solution ϕn of A(ϕn , Fn ) = 0 exists and the convergence of Fn
to F0 implies by continuity the convergence of ϕn to ϕ0 . Unfortunately a large class of
inverse problems relevant to econometric applications are not well-posed (they are then
said to be ill-posed in the Hadamard sense, see e.g. Kress (1999), Vapnik (1998)). In
this case, a regularization method needs to be implemented to stabilize the solution. Our
treatment of ill-posed problems is closed to that of Van Rooij and Ryumgaart (1999).

1.3. Examples
This section presents various examples of inverse problems motivated by structural econo-
metric models. We will start by the GMM example, which is the most familiar to econome-
tricians. Subsequently, we present several examples of linear (w.r.t. ϕ) inverse problems.
The last three examples are devoted to nonlinear inverse problems.

1.3.1. Generalized Method of Moments (GMM)
Let us assume that X is m dimensional and the parameter of interest θ is also finite
dimensional (θ ∈ Θ ⊂ Rd ). We consider a function

                                     h : Rm × Θ → E                                     (1.7)

and the equation connecting θ and F is defined by:

                                A(θ, F ) = E F (h(X, θ)) = 0                            (1.8)

    A particular case is given by h(X, θ) = µ(X) − θ where θ is exactly the expectation
of a transformation µ of the data. More generally, θ may be replaced by an infinite
dimensional parameter ϕ but we do not consider here this extension.
    The GMM method was introduced by Hansen (1982) and has received numerous ex-
tensions (see Ai and Chen (2003) for the case of an infinite dimensional parameter). GMM
consists in estimating θ by solving an inverse problem linear in F but nonlinear in θ. It
is usually assumed that θ is identified i.e. that θ is uniquely characterized by Equation
(1.8). Econometric specifications are generally overidentified and a solution to (1.8) only
exists for some particular F , including the true DGP F0 , under the hypothesis of correct



                                             4
specification of the model. The c.d.f F is estimated by the empirical distribution and the
equation (1.8) becomes:
                                        n
                                     1X
                                           h(xi , θ) = 0,                                (1.9)
                                     n i=1

which has no solution in general. Overidentification is treated by an extension of the
definition of θ as follows:
                                  θ = arg min kBE F (h)k2                              (1.10)
                                             θ

where B is a linear operator in E and kk denotes the norm in E. This definition coincides
with (1.8) if F satisfies the overidentification constraints. Following Equation (1.10), the
estimator is:
                                               Ã n              !
                                                 1X
                            θ̂n = arg min kBn          h(xi , θ) k2                   (1.11)
                                       θ         n i=1

where Bn is a sequence of operators converging to B. If the number of moment conditions
is finite, Bn and B are square matrices.
     As θ is finite dimensional, the inverse problem generated by the first order conditions
of (1.10) or (1.11) is well-posed and consistency of the estimators follows from standard
regularity conditions. As it will be illustrated in Section 6, an ill-posed inverse problem
arises if the number of moment conditions is infinite and if optimal GMM is used. In finite
                                                                                − 12
dimension, optimal GMM is obtained   ¡
                                 √ 1 n  Pfor a specific
                                                      ¢ weighting matrix, B = Σ      , where Σ
is the asymptotic variance of n n i=1 h(xi , θ) (Σ = V ar(h) in i.i.d. sampling). In
the general case, optimal GMM requires the minimization of kgk2 where
                                         1
                                       Σ 2 g = E F (h)                                 (1.12)
The function g is then the solution of a linear inverse problem. If the dimension of h is not
finite, Equation (1.12) defines an ill-posed inverse problem, which requires a regularization
scheme (see Section 3)

1.3.2. Instrumental variables
Instrumental regression is a possible strategy to perform non parametric estimation when
explanatory variables are endogenous. Let us decompose X into (Y, X, W ) where Y ∈ R,
Z ∈ Rq , W ∈ Rr . The subvectors Z and W may have elements in common. The
econometrician starts with a relation
                                       Y = ϕ(Z) + U                                    (1.13)
where U is a random term which does not satisfy E(U |Z) = 0. This assumption is
replaced by the more general hypothesis
                                        E(U |W ) = 0                                   (1.14)

                                                 5
and W is called the set of instrumental variables. Condition (1.14) defines ϕ as the
solution of an integral equation. In terms of density, (1.14) means that
                          Z                         Z
              A(ϕ, F ) = ϕ(z)fZ (z|W = w)dz − yfY (y|W = w)dy = 0             (1.15)

Using previous notation, the first part of (1.15) is denoted Kϕ and the second part is
equal to r.
    This expression is actually linear in ϕ and in F (after multiplication by fW (w)) but the
linearity with respect to the distribution does not play any role. As we will see later, this
problem is essentially nonlinear in F because, even if the denominator can be eliminated in
(1.15), the treatment of overidentification and of regularization will necessarily reintroduce
the denominator.
    Instrumental regression introduced in (1.15) can be generalized to local instrumental
regression and to generalized local instrumental regression. These extensions are relevant
in more complex models than (1.13) where in particular the error term may enter the
equation in non additive ways (see for such a treatment, Florens, Heckman, Meghir, and
Vytlacil (2002)). For example, consider the equation
                                    Y = ϕ(Z) + Zε + U                                  (1.16)
where Z is scalar and ε is a random unobservable heterogeneity component. It can be
proved that, under a set of identification assumptions, ϕ satisfies the equations :
                                                     ∂
                               µ               ¶         E(Y |W = w)
                             F   ∂ϕ(Z)              ∂Wj
              Aj (ϕ, F ) = E            |W = w −                         =0         (1.17)
                                   ∂Z                ∂
                                                         E(Z|W = w)
                                                    ∂Wj
for any j = 1, ..., r. This equation, linear with respect to ϕ, combines integral and differ-
ential operators.
    Instrumental variable estimation and its local extension define ill-posed inverse prob-
lems as it will be seen in Section 5.

1.3.3. Deconvolution
Another classical example of ill-posed inverse problem is given by the deconvolution prob-
lem. Let us assume that X, Y, Z be three scalar random elements such that
                                        Y =X +Z                                        (1.18)
Only Y is observable. The two components X and Z are independent. The density of Z
(the error term) is known and denoted g. The parameter of interest is the density ϕ of
X. Then ϕ is solution of:
                                  Z
                       A(ϕ, F ) =    ϕ(y)g(x − y)dy − f (x) = 0
                                                                                       (1.19)
                                  = Kϕ − r

                                              6
This example is comparable to the instrumental variables case but only the r.h.s. r = f
is unknown whereas the operator K is given.

1.3.4. Regression with many regressors
This example constitutes also a case of linear ill-posed inverse problems. Let us consider
a regression model where the regressors are indexed by τ belonging to an infinite index
set provided with a measure Π. The model says:
                                   Z
                              Y = Z(τ )ϕ(τ )Π(dτ ) + U                              (1.20)

where E(U |(Z(τ ))τ ) = 0 and ϕ is the parameter of interest and is infinite dimensional.
Examples of regression with many regressors are now common in macroeconomics (see
Stock and Watson (2002) or Forni and Reichlin (1998) for two presentations of this topic).
   Let us assume that Y and (Z(τ ))τ are observable. Various treatments of (1.20) can
be done and we just consider the following analysis. The conditional moment equation
E(U |(Z(τ ))τ ) = 0 implies an infinite number of conditions for any τ which implies:

                                   E(Z(τ )U ) = 0,       ∀τ

or equivalently
                   Z
                       E F (Z(τ )Z(ρ))ϕ(ρ)Π(dρ) − E F (Y Z(τ )) = 0,     ∀τ              (1.21)

    This equation generalizes to an infinite number of regressors the usual normal equa-
tions of the linear regression. The inverse problem defined in (1.21) is linear in both F and
ϕ but it is ill posed. An intuitive argument to illustrate this issue is to consider the estima-
tion using a finite number of observations of the second moment operator E F (Z(τ )Z(ρ))
which is infinite dimensional. The resulting multicolinearity problem is solved by a ridge
regression. The “infinite matrix” E F (Z(.)Z(.)) is replaced by αI + E F (Z(.)Z(.)) where
I is the identity and α a positive number or by a reduction of the set of regressors to the
first principal components. These two solutions are particular examples of regularization
methods (namely the Tikhonov and the spectral cut-off regularizations), which will be
introduced in Section 3.

1.3.5. Additive models
The nature of the integral equations generated by this example and by the next one is very
different from that of the three previous examples. We consider an additive regression
model:

                                   Y = ϕ(Z) + ψ(W ) + U                                  (1.22)

where E(U |Z, W ) = 0 and X = (Y, Z, W ) is the observable element. The parameters of
interest are the two functions ϕ and ψ. The approach we propose here is related to the

                                               7
backfitting approach (see Hastie and Tibshirani (1990)). Other treatments of additive
models have been considered in the literature (see Pagan and Ullah (1999)). Equation
(1.22) implies
                    
                     E F (Y |Z = z) = ϕ(z) + E F (ψ(W )|Z = z)
                                                                               (1.23)
                     F                   F
                       E (Y |W = w) = E (ϕ(Z)|W = w) + ψ(w)

and by substitution

                         ϕ(z) − E F (E F (ϕ(Z)|W )|Z = z)
                                                                                            (1.24)
                            = E F (Y |Z = z) − E F (E F (Y |W )|Z = z)

or, in our notations:

                                         (I − K) ϕ = r

where K = E F (E F ( . |W )|Z). Backfitting refers to the iterative method to solve Equation
(1.23).
    An analogous equation characterizes ψ. Actually even if (1.22) is not well specified,
these equations provide the best approximation of the regression of Y given Z and W by
an additive form. Equation (1.24) is a linear integral equation and even if this inverse
problem is ill-posed because K is not one-to-one (ϕ is only determined up to a constant
term), the solution is still continuous and therefore the difficulty is not as important as
that of the previous examples.

1.3.6. Measurement-error models or non parametric analysis of panel data
We denote by η an unobservable random variable for which two measurements are available
Y1 and Y2 . These measurements are affected by a bias dependent of observable variables
Z1 and Z2 . More formally:
                   
                    Y1 = η + ϕ(Z1 ) + U1     E(U1 |η, Z1 , Z2 ) = 0
                                                                                 (1.25)
                   
                      Y2 = η + ϕ(Z2 ) + U2    E(U2 |η, Z1 , Z2 ) = 0

An i.i.d. sample (y1i , y2i , η i , z1i , z2i ) is drawn but the η i are unobservable. Equivalently
this model may be seen as a two period panel data with individual effects η i .
    The parameter of interest is the “bias function” ϕ, identical for the two observations.
In the measurement context, it is natural to assume that the distribution of the observ-
able is independent of the order of the observations, or, equivalently (Y1 , Z1 , Y2 , Z2 ) is
distributed as (Y2 , Z2 , Y1 , Z1 ). This assumption is not relevant in a dynamic context.
    The model is transformed in order to eliminate the unobservable variable by difference:

                                    Y = ϕ(Z2 ) − ϕ(Z1 ) + U                                 (1.26)

                                                8
where Y = Y2 − Y1 , U = U2 − U1 , and E(U |Z1 , Z2 ) = 0.
     This model is similar to an additive model except for the symmetry between the
variables and the fact that, with the notation of (1.22), ϕ and ψ are identical. An
application of this model may be found in Gaspar and Florens (1998) where y1i and y2i
are two measurements of the level of the ocean in location i by a satellite radar altimeter,
η i is the true level and ϕ is the “sea state bias” depending on the waves’ height and the
wind speed (Z1i and Z2i are both two dimensional).
     The model is treated through the relation:

                       E(Y |Z2 = z2 ) = ϕ(z2 ) − E(ϕ(Z1 )|Z2 = z2 )                  (1.27)

which defines an integral equation Kϕ = r. The exchangeable property between the
variables implies that conditioning on Z1 gives the same equation (where Z1 and Z2 are
exchanged).

1.3.7. Game theoretic model
This example and the next ones present economic models formalized by nonlinear inverse
problems. As the focus of this chapter is on linear equations, these examples are given
for illustration and will not be treated outside of this section. The analysis of nonlinear
functional equations raises numerous questions: uniqueness and existence of the solution,
asymptotic properties of the estimator, implementation of the estimation procedure and
numerical computation of the solution.
    Most of these questions are usually solved locally by a linear approximation of the
nonlinear problem deduced from a suitable concept of derivative. A strong concept of
derivation (typically Frechet derivative) is needed to deal with the implicit form of the
model, which requires the use of the Implicit Function theorem.
    The first example of nonlinear inverse problems follows from the strategic behavior of
the players in a game. Let us assume that for each game, each player receives a random
signal or type denoted by ξ and plays an action X. The signal is generated by a probability
described by its c.d.f. ϕ and the players all adopt a strategy σ dependent on ϕ which
associates X with ξ, i.e.

                                        X = σ ϕ (ξ).

The strategy σ ϕ is determined as an equilibrium of the game (e.g. Nash equilibrium) or
by an approximation of the equilibrium (bounded rationality behavior). The signal ξ is a
private knowledge for the player but is unobservable for the econometrician and the c.d.f.
ϕ is common knowledge for the players but is unknown for the statistician. The strategy
σ ϕ is determined from the rule of the game and by the assumptions on the behavior of the
players. The essential feature of the game theoretic model from a statistical viewpoint is
that the relation between the unobservable and the observable variables depends on the
distribution of the unobservable component. The parameter of interest is the c.d.f. ϕ of
the signals.

                                             9
    Let us restrict our attention to cases where ξ and X are scalar and where σ ϕ is strictly
increasing. Then the c.d.f. F of the observable X is connected with ϕ by:

                                A(ϕ, F ) = F ◦ σ ϕ − ϕ = 0                            (1.28)

    If the signals are i.i.d. across the different players and different games, F can be
estimated by a smooth transformation of the empirical distribution and Equation (1.28)
is solved in ϕ. The complexity of this relation can be illustrated by the auction model.
In the private value first price auction model, ξ is the value of the object and X the bid.
If the number of bidders is N + 1 the strategy function is equal to:
                                             Z ξ
                                                 ϕN (u)du
                                               ξ
                                   X =ξ−                                              (1.29)
                                                   ϕN (ξ)

where [ξ, ξ̄] is the support of ξ and ϕN (u) = [ϕ(u)]N is the c.d.f. of the maximum private
value among N players.
    Model (1.28) may be extended to a non iid setting (depending on exogenous variables)
or to the case where σ ϕ is partially unknown. The analysis of this model has been done
by Guerre, Perrigne and Vuong (2000) in a non parametric context. The framework of
inverse problem is used by Florens, Protopopescu and Richard (1997).

1.3.8. Solution of a differential equation
In several models like the analysis of the consumer surplus, the function of interest is
solution of a differential equation depending on the data generating process.
    Consider for example a class of problem where X = (Y, Z, W ) ∈ R3 is i.i.d., F is the
c.d.f. of X and the parameter ϕ verifies:
                                   d
                                      ϕ(z) = mF (z, ϕ(z))                             (1.30)
                                   dz
when mF is a regular function depending on F . A first example is

                            mF (z, w) = E F (Y |Z = z, W = w))                        (1.31)

but more complex examples may be constructed in order to take into account the en-
dogeneity of one or two variables. For example, Z may be endogenous and mF may be
defined by:

              E(Y |W1 = w1 , W2 = w2 ) = E(mF (Z, W1 )|W1 = w1 , W2 = w2 )            (1.32)

Economic applications can be found in Hausman (1981, 1985) and Hausman and Newey
(1995) and a theoretical treatment of these two problems is given by Vanhems (2000) and
Loubes and Vanhems (2001).

                                             10
1.3.9. Instrumental variables in a nonseparable model
Another example of a nonlinear inverse problem is provided by the following model:

                                         Y = ϕ (Z, U )                                    (1.33)

where Z is an endogenous variable. The function ϕ is the parameter of interest. Denote
ϕz (u) = ϕ (z, u) . Assume that ϕz (u) is an increasing function of u for each z. Moreover,
the distribution, FU , of U is assumed to be known for identification purpose. Model
(1.33) may arise in a duration model where Y would be the duration (see Equation (2.2)
of Horowitz 1999). One difference with Horowitz (1999) is the presence of an endogenous
variable here. There is a vector of instruments, W, which is independent of U . Because U
and W are independent, we have

                         P (U ≤ u|W = w) = P (U ≤ u) = FU (u) .                           (1.34)

Denote f the density of (Y, Z) and
                                               Z y
                                F (y, z|w) =         f (t, z|w) dt.
                                                −∞

F can be estimated using the observations (yi , zi , wi ), i = 1, 2, ..., n. By a slight abuse of
notations, we use the notation P (Y ≤ y, Z = z|W = w) for F (y, z|w) . We have
                                             ¡                                    ¢
            P (U ≤ u, Z = z|W = w) = P ϕz (Y )−1 ≤ u, Z = z|W = w
                                       = P (Y ≤ ϕz (u) , Z = z|W = w)
                                       = F (ϕz (u) , z|w) .                                (1.35)

Combining Equations (1.34) and (1.35), we obtain
                           Z
                             F (ϕz (u) , z|w) dz = FU (u) .                               (1.36)

Equation (1.36) belongs to the class of Urysohn equations of Type I (Polyanin and Manzhi-
rov, 1998). The estimation of the solution of Equation (1.36) is discussed in Florens
(2005).

1.4. Organization of the chapter
Section 2 reviews the basic definitions and properties of operators in Hilbert spaces.
The focus is on compact operators because they have the advantage to have a discrete
spectrum. We recall some laws of large numbers and central limit theorems for Hilbert
valued random elements. Finally, we discuss how to estimate the spectrum of a compact
operator and how to estimate the operators themselves.
   Section 3 is devoted to solving integral equation of the first kind. As these equations
are ill-posed, the solution needs to be regularized (or smoothed). We investigate the
properties of the regularized solutions for different types of regularizations.

                                               11
    In Section 4, we show under suitable assumptions, the consistency and asymptotic
normality of regularized solutions.
    Section 5 detail five examples: the ridge regression, the factor model, the infinite
number of regressors, the deconvolution, and the instrumental variables estimation.
    Section 6 has two parts. First, it recalls the main results relative to reproducing
kernels. Reproducing kernel theory is closely related to that of the integral equations
of the first kind. Second, we explain the extension of GMM to a continuum of moment
conditions and how the GMM objective function reduces to the norm of the moment
functions in a specific reproducing kernel Hilbert space. Several examples are provided.
    Section 7 tackles the problem of solving integral equation of the second kind. A typical
example of such a problem is the additive model introduced earlier.

2. Spaces and Operators
The purpose of this section is to introduce terminology and to state the main properties of
operators in Hilbert spaces which are used in our econometric applications. Most of these
results can be found in Debnath and Mikusinsky (1999) and Kress (1999). Ait-Sahalia,
Hansen, and Scheinkman (2004) provide an excellent survey of operator methods for the
purpose of financial econometrics.

2.1. Hilbert spaces
We start by recalling some of the basic concepts of analysis. In the sequel, C denotes the
set of complex numbers. A vector space equipped by a norm is called a normed space.
A sequence (ϕn ) of elements in a normed space is called a Cauchy sequence if for every
ε > 0 there exists an integer N (ε) such that

                                      kϕn − ϕm k < ε

for all n, m ≥ N (ε) , i.e, if limn,m→∞ kϕn − ϕm k = 0. A space S is complete if every
Cauchy sequence converges to an element in S. A complete normed vector space is called
a Banach space.
    Let (E, E, Π) be a probability space and
                   (                                  µZ        ¶        )
                                                                       1/p
                                                                p
   LpC (E, E, Π) =   f : E → C measurable s.t. kf k ≡        |f | dΠ         < ∞ , p ≥ 1.



Then, LpC (E, E, Π) is a Banach space. If we only consider functions valued in R this space
is still a Banach space and is denoted in that case by Lp (we drop the subscript C). In
the sequel, we also use the following notation. If E is a subset of Rp , then the σ−field E
will always be the Borel σ−field and will be omitted in the notation Lp (Rp , Π). If Π has
a density π with respect to Lebesgue measure, Π will be replaced by π. If π is uniform, it
will be omitted in the notation.

                                            12
Definition 2.1 (Inner product). Let H be a complex vector space. A mapping h, i :
H × H → C is called an inner product in H if for any ϕ, ψ, ξ ∈ H and α, β ∈ C the
following conditions are satisfied:
    (a) hϕ, ψi = hψ, ϕi (the bar denotes the complex conjugate),
    (b) hαϕ + βψ, ξi = α hϕ, ξi + β hψ, ξi ,
    (c) hϕ, ϕi ≥ 0 and hϕ, ϕi = 0 ⇐⇒ ϕ = 0.
    A vector space equipped by an inner product is called an inner product space.
   Example. The space CN of ordered N -tuples x = (x1 , ..., xN ) of complex numbers,
with the inner product defined by
                                                       N
                                                       X
                                          hx, yi =           xl yl
                                                       l=1

is an inner product space
P∞Example.          The space l2 of all sequences (x1 , x2 , ...) of P
                                                                     complex numbers such that
              2                                                        ∞
   j=1 |x j |   < ∞ with   the inner  product  defined by hx, yi  =    j=1 xj yj for x = (x1 , x2 , ...)
and y = (y1 , y2 , ...) is an infinite dimensional inner product space.
    Example. The space L2C (E, E, Π) associated with the inner product defined by
                                                    Z
                                          hϕ, ψi = ϕψdΠ

is an inner product space. On the other hand, LpC (E, E, Π) is not a inner product space
if p 6= 2.
    An inner product satisfies the Cauchy-Schwartz inequality, that is,
                                      |hϕ, ψi|2 ≤ hϕ, ϕi hψ, ψi
for all ϕ, ψ ∈ H. Remark that hϕ, ϕi is real because hϕ, ϕi = hϕ, ϕi. It actually defines a
norm kϕk = hϕ, ϕi1/2 (this is the norm induced by the inner product h, i).
Definition 2.2 (Hilbert space). If an inner product space is complete in the induced
norm, it is called a Hilbert space.
    A standard theorem in functional analysis guarantees that every inner product space
H can be completed to form a Hilbert space H. Such a Hilbert space is said to be the
completion of H.
    Example. CN , l2 and L2 (R,Π) are Hilbert spaces.
    Example. (Sobolev space) Let Ω = [a, b] be an interval of R. Denote by H̃ m (Ω),
m = 1, 2, ..., the space of all complex-valued functions ϕ ∈ C m such that for all |l| ≤ m,
ϕ(l) = ∂ l ϕ (τ ) /∂τ l ∈ L2 (Ω) . The inner product on H̃ m (Ω) is
                                          Z bXm
                                 hϕ, ψi =        ϕ(l) (τ ) ψ (l) (τ )dτ .
                                            a   l=0

H̃ m (Ω) is an inner product space but it is not a Hilbert space because it is not complete.
The completion of H̃ m (Ω) , denoted H m (Ω), is a Hilbert space.

                                                      13
Definition 2.3 (Convergence). A sequence (ϕn ) of vectors in an inner product space
H is called strongly convergent to a vector ϕ ∈ H if kϕn − ϕk → 0 as n → ∞.

    Remark that if (ϕn ) converges strongly to ϕ in H then hϕn , ψi → hϕ, ψi as n → ∞,
for every ψ ∈ H. The converse is false.

Definition 2.4. Let H be an inner product space. A sequence (ϕn ) of nonzero vectors
in H is called an orthogonal sequence if hϕm , ϕn i = 0 for n 6= m. If in addition kϕn k = 1
for all n, it is called orthonormal sequence.

    Example. Let π (x) be the pdf of a normal with mean µ and variance σ 2 . Denote by
φj the Hermite polynomials of degree j:
                                                         dj π
                                                       j dxj
                                     φj (x) = (−1)              .                      (2.1)
                                                           π
The functions φj (x) form an orthogonal system in L2 (R, π) .
                            ¡ ¢
     Any sequence of vectors ψ j in an inner product space that is linearly independent,
i.e.,
                           ∞
                           X
                                 αj ψ j = 0 ⇒ αj = 0 ∀j = 1, 2, ...
                           j=1

can be transformed into an orthonormal sequence by the method called Gram-Schmidt¡ ¢
orthonormalization¡ process.
                     ¢       This process consists in the following steps. Given  ψj ,
define a sequence ϕj inductively as

                                       ψ1
                            ϕ1 =            ,
                                     kψ 1 k
                                       ψ 2 − hψ 2 , ϕ1 i ϕ1
                            ϕ2    =
                                     kψ 2 − hψ 2 , ϕ1 i ϕ1 k
                                    ..
                                     .        P
                                       ψ n − n−1      hψ n , ϕl i ϕl
                            ϕn    = °         Pl=1                     °.
                                     °ψ n −     n−1
                                                      hψ n , ϕ l i ϕ l
                                                                       °
                                                l=1
            ¡ ¢
As a result, ϕj is orthonormal and any linear combinations of vectors ϕ1 , ..., ϕn is also
a linear combinations of ψ 1 , ..., ψ n and vice versa.

Theorem 2.5 (Pythagorean formula). If ϕ1 , ..., ϕn are orthogonal vectors in an inner
product space, then
                          ° n    °
                          °X °2 X      n
                                           ° °2
                          °      °         °ϕ j ° .
                          °   ϕj ° =
                          °      °
                                     j=1             j=1



                                                14
   From the Pythagorean formula, it can be seen that the αl that minimize
                                  °             °
                                  °     Xn      °
                                  °             °
                                  ° ϕ −    α  ϕ
                                             j j°
                                  °             °
                                                j=1

                  ­     ®
are such that αj = ϕ, ϕj . Moreover
                                  n
                                  X ¯­     ®¯
                                    ¯ ϕ, ϕj ¯2 ≤ kϕk2 .                                (2.2)
                                  j=1

                   P∞ ¯­     ®¯
Hence the series      ¯ ϕ, ϕj ¯2 converges for every ϕ ∈ H. The expansion
                     j=1

                                              ∞
                                              X ­         ®
                                    ϕ=               ϕ, ϕj ϕj                          (2.3)
                                              j=1

is called a generalized Fourier series of ϕ. In general, we do not know whether the series
in (2.3) is convergent. Below we give a sufficient condition for convergence.
                                                                                     ¡ ¢
Definition 2.6 (Complete orthonormal sequence ). An orthonormal sequence ϕj
in an inner product space H is said to be complete if for every ϕ ∈ H, we have
                                              ∞
                                              X ­         ®
                                    ϕ=               ϕ, ϕj ϕj
                                              j=1

where the equality means
                                   °                 °
                                   °    n
                                        X ­      ®   °
                                   °                 °
                               lim °ϕ −     ϕ, ϕj ϕj ° = 0
                              n→∞ °                  °
                                              j=1


where k.k is the norm in H.
                                         ¡ ¢
   A complete orthonormal sequence ϕj in an inner product space       P∞ H is an orthonormal
basis in H, that is every ϕ ∈ H has a unique representation ϕ = j=1 αj ϕj where αl ∈ C.
  ¡ ¢
If ϕj is a complete orthonormal sequence in an inner product space H then the set
                                       ( n                                   )
                                        X
                span {ϕ1 , ϕ2 , ...} =     αj ϕj : ∀n ∈ N, ∀α1 , ..., αn ∈ C
                                        j=1

is dense in H.
                                              ¡ ¢
Theorem­   2.7.
             ®  An orthonormal    sequence     ϕj in a Hilbert space H is complete if and
only if ϕ, ϕj = 0 for all j = 1, 2, ... implies ϕ = 0.

                                                    15
                                                         ¡ ¢
Theorem 2.8 (Parseval’s formula). An orthonormal sequence ϕj in a Hilbert space
H is complete if and only if
                                        ∞
                                        X ¯­     ®¯
                                      2
                                  kϕk =   ¯ ϕ, ϕj ¯2                                (2.4)
                                          j=1


for every ϕ ∈ H.

Definition 2.9 (Separable space). A Hilbert space is called separable if it contains a
complete orthonormal sequence.

   Example. A complete orthonormal sequence in L2 ([−π, π]) is given by

                                     eijx
                            φj (x) = √ , j = ..., −1, 0, 1, ...
                                       2π

Hence, the space L2 ([−π, π]) is separable.

Theorem 2.10. Every separable Hilbert space contains a countable dense subset.

2.2. Definitions and basic properties of operators
In the sequel, we denote K : H → E the operator that maps a Hilbert space H (with
norm k.kH ) into a Hilbert space E (with norm k.kE ).

Definition 2.11. An operator K : H → E is called linear if

                              K (αϕ + βψ) = αKϕ + βKψ

for all ϕ, ψ ∈ H and all α, β ∈ C.

Definition 2.12. (i) The null space of K : H → E is the set N (K) = {ϕ ∈ H : Kϕ = 0} .
  (ii) The range of K : H → E is the set R(K) = {ψ ∈ E : ψ = Kϕ for some ϕ ∈ H} .
  (iii) The domain of K : H → E is the subset of H denoted D(K) on which K is defined.
  (iv) An operator is called finite dimensional if its range is of finite dimension.

Theorem 2.13. A linear operator is continuous if it is continuous at one element.

Definition 2.14. A linear operator K : H → E is called bounded if there exists a positive
number C such that

                                     kKϕkE ≤ C kϕkH

for all ϕ ∈ H.



                                              16
Definition 2.15. The norm of a bounded operator K is defined as

                                    kKk ≡ sup kKϕkE
                                            kϕk≤1


Theorem 2.16. A linear operator is continuous if and only if it is bounded.

   Example. The identity operator defined by Iϕ = ϕ for all ϕ ∈ H is bounded with
kIk = 1.
   Example. Consider the differential operator:
                                             dϕ (τ )
                                (Dϕ) (x) =           = ϕ0 (τ )
                                              dτ
                                                                                   qR
                                                                                       π
defined on the space E1 = {ϕ ∈ L2 ([−π, π]) : ϕ0 ∈ L2 ([−π, π])} with norm kϕk =       −π
                                                                                          |f (τ )|2 dτ .
                                              ° ° qR π                     √      °     °
For ϕj (τ ) = sin jτ , j = 1, 2, ..., we have °ϕj ° =  −π
                                                          |sin (jτ )|2 dτ = π and °Dϕj ° =
qR                            √               °     °    ° °
    π                2                        °Dϕj ° = j °ϕj ° proving that the differential
    −π
       |j cos (jτ )|   dτ = j   π.  Therefore
operator is not bounded.

Theorem 2.17. Each linear operator K from a finite dimensional normed space H into
a normed space E is bounded.

    An important class of linear operators are valued in C and they are characterized by
Riesz theorem. From (2.2), we know that for any fixed vector g in an inner product space
H, the formula G (ϕ) = hϕ, gi defines a bounded linear functional on H. It turns out that
if H is a Hilbert space, then every bounded linear functional is of this form.

Theorem 2.18 (Riesz). Let H be a Hilbert space. Then for each bounded linear func-
tion G : H → C there exists a unique element g ∈ H such that

                                       G (ϕ) = hϕ, gi

for all ϕ ∈ H. The norms of the element g and the linear function F coincide

                                        kgkH = kGk

where k.kH is the norm in H and k.k is the operator norm.

Definition 2.19 (Hilbert space isomorphism). A Hilbert space H1 is said to be iso-
metrically isomorphic (congruent) to a Hilbert space H2 if there exists a one-to-one linear
mapping J from H1 to H2 such that

                                hJ (ϕ) , J (ψ)iH2 = hϕ, ψiH1

for all ϕ, ψ ∈ H1 . Such a mapping J is called a Hilbert space isomorphism (or congruence)
from H1 to H2 .

                                              17
   The terminology “congruence” is used by Parzen (1959, 1970).

Theorem 2.20. Let H be a separable Hilbert space.
  (a) If H is infinite dimensional, then it is isometrically isomorphic to l2 .
  (b) If H has a dimension N , then it is isometrically isomorphic to CN .

    A consequence of Theorem 2.20 is that two separable Hilbert spaces of same dimensions
(finite or infinite) are isometrically isomorphic.

Theorem 2.21. Let H and E be Hilbert spaces and let K : H → E be a bounded op-
erator. Then there exists a uniquely determined linear operator K ∗ : E → H with the
property

                                   hKϕ, ψiE = hϕ, K ∗ ψiH

for all ϕ ∈ H and ψ ∈ E. Moreover the operator K ∗ is bounded and kKk = kK ∗ k . K ∗ is
called the adjoint operator of K.

   Riesz Theorem 2.18 implies that, in Hilbert spaces, the adjoint of a bounded operator
always exists.
    Example 2.1. (discrete case)
                               © Let π and ρ be two discrete probability
                                                                  P      density func-
                                                                                    ª
tions on N. Let H = L2 (N, π) = ϕ : N → R, ϕ = (ϕl )l∈N such that          2
                                                                    l∈N l π (l) < ∞
                                                                         ϕ
            2
and
¡ ¢E = L (N, ρ). The operator K that associates to elements (ϕl )l∈N of H elements
 ψ p p∈N of E such that
                                              X
                              (Kϕ)p = ψ p =          k (p, l) ϕl π (l)
                                               l∈N
is an infinite dimensional matrix. If H and E are finite dimensional, then K is simply a
matrix.
    Example 2.2. (integral operator) An important kind of operator is the integral
operator. Let H = L2C (Rq , π) and E =L2C (Rr , ρ) where π and ρ are pdf. The integral
operator K : H → E is defined as
                                       Z
                            Kϕ (τ ) = k (τ , s) ϕ (s) π (s) ds.                    (2.5)

The function k is called kernel of the operator. If k satisfies
                           Z Z
                                 |k (τ , s)|2 π (s) ρ (τ ) dsdτ < ∞                 (2.6)

(k is said to be a L2 −kernel) then K is a bounded operator and
                                 sZ Z
                          kKk ≤           |k (τ , s)|2 π (s) ρ (τ ) dsdτ .


                                              18
Indeed for any ϕ ∈ H, we have
                                      Z ¯Z                              ¯2
                                        ¯                               ¯
                       kKϕk2E       =   ¯   k (τ  , s) ϕ  (s) π (s) ds  ¯ ρ (τ ) dτ
                                        ¯                               ¯
                                      Z
                                    =   |hk (τ , .) , ϕ (.)iH |2 ρ (τ ) dτ
                                      Z
                                    ≤   kk (τ , .)k2H kϕk2H ρ (τ ) dτ

by Cauchy-Schwarz inequality. Hence we have
                                    Z
                  kKϕkE ≤ kϕkH kk (τ , .)k2H ρ (τ ) dτ
                       2          2

                                    Z Z
                                  2
                           = kϕkH        |k (τ , s)|2 π (s) ρ (τ ) dsdτ .

The upperbound for kKk follows.
  The adjoint K ∗ of the operator K is also an integral operator
                                    Z
                          K ψ (s) = k ∗ (s, τ ) ψ (τ ) ρ (τ ) dτ
                           ∗
                                                                                              (2.7)

with k ∗ (s, τ ) = k (τ , s). Indeed, we have
                                    Z
                   hKϕ, ψiE =          (Kϕ) (τ ) ψ (τ )ρ (τ ) dτ
                                    Z µZ                              ¶
                                 =          k (τ , s) ϕ (s) π (s) ds ψ (τ )ρ (τ ) dτ
                                    Z        µZ                          ¶
                                 =     ϕ (s)       k (τ , s) ψ (τ )ρ (τ ) π (s) ds
                                      Z           µZ                           ¶
                                =         ϕ (s)        k ∗ (s, τ ) ψ (τ ) ρ (τ )   π (s) ds

                                = hϕ, K ∗ ψiH .

There are two types of integral operators, we will be interested in, the covariance operator
and the conditional expectation operator.
    Example 2.3. (conditional expectation operator) When K is a conditional ex-
pectation operator, it is natural to define the spaces of reference as a function of unknown
pdfs. Let (Z, W ) ∈ Rq × Rr be a r.v. with distribution FZ,W , let FZ , and FW be the
marginal distributions of Z and W respectively. The corresponding pdfs are denoted fZ,W ,
fZ , and fW . Define

                                      H = L2 (Rq , fZ ) ≡ L2Z ,
                                      E = L2 (Rr , fW ) ≡ L2W .

                                                       19
Let K be the conditional expectation operator:

                                   K : L2Z → L2W
                                   ϕ → E [ϕ (Z) |W ] .                                 (2.8)

K is an integral operator with kernel
                                                fZ,W (z, w)
                                  k (w, z) =
                                               fZ (z) fW (w)

By Equation (2.7), its adjoint K ∗ has for kernel k ∗ (z, w) = k (w, z) and is also a condi-
tional expectation operator:

                                  K ∗ : L2W → L2Z
                                   ψ → E [ψ (W ) |Z] .

   Example 2.4. (Restriction of an operator on a subset of H) Let K : H → E
and consider the restriction denoted K0 of K on a subspace H0 of H. K0 : H0 → E is such
that K0 and K coincide on H0 . It can be shown that the adjoint K0∗ of K0 is the operator
mapping E into H0 such that

                                        K0∗ = P K ∗                                    (2.9)

where P is the projection on H0 . The expression of K0∗ will reflect the extra information
contained in H0 .
   To prove (2.9), we use the definition of K ∗ :

                  hKϕ, ψiE    =    hϕ, K ∗ ψiH for all ϕ ∈ H0
                              =    hϕ, K0∗ ψiH0 for all ϕ ∈ H0
                              ⇔    hϕ, K ∗ ψ − K0∗ ψiH = 0 for all ϕ ∈ H0
                              ⇔    K ∗ ψ − K0∗ ψ ∈ H0⊥
                              ⇔    K0∗ ψ = P K ∗ ψ.

   A potential application of this result to the conditional expectation Example 2.3 in
the case where ϕ is known to be additive. Let Z = (Z1 , Z2 ) . Then
                      ©                                                 ª
                H0 = ϕ (Z) = ϕ1 (Z1 ) + ϕ2 (Z2 ) : ϕ1 ∈ L2Z1 , ϕ2 ∈ L2Z2 .

Assume that E [ϕ1 (Z1 )] = E [ϕ2 (Z2 )] = 0. We have P ϕ = (ϕ1 , ϕ2 ) with

                           ϕ1 = (I − P1 P2 )−1 (P1 − P1 P2 ) ϕ,
                           ϕ2 = (I − P1 P2 )−1 (P2 − P1 P2 ) ϕ,

where P1 and P2 are the projection operators on L2Z1 and L2Z2 respectively. If the two
spaces L2Z1 and L2Z2 are orthogonal, then ϕ1 = P1 ϕ and ϕ2 = P2 ϕ.

                                               20
Definition 2.22 (Self-adjoint). If K = K ∗ then K is called self-adjoint (or Hermitian).

   Remark that if K is a self-adjoint integral operator then k (s, τ ) = k (τ , s).

Theorem 2.23. Let K : H → H be a self-adjoint operator then
                                       ¯         ¯
                          kKk = sup ¯hKϕ, ϕiH ¯ .
                                         kϕk=1

Definition 2.24 (Positive operator). An operator K : H → H is called positive if it
is self-adjoint and hKϕ, ϕiH ≥ 0.

Definition 2.25. A sequence (Kn ) of operators Kn : H → E is called pointwise conver-
gent if for every ϕ ∈ H, the sequence Kn ϕ converges in ε. A sequence (Kn ) of bounded
operators converges in norm to a bounded operator K if kKn − Kk → 0 as n → ∞.

Definition 2.26 (Compact operator). A linear operator K : H → E is called a com-
pact operator if for every bounded sequence (ϕn ) in H, the sequence (Kϕn ) contains a
convergent subsequence in E.

Theorem 2.27. Compact linear operators are bounded.

   Not every bounded operator is compact. An example is given by the identity operator
on an infinite dimensional space H. Consider an orthonormal sequence (en ) in H. Then
the sequence Ien = en does not contain a convergent subsequence.

Theorem 2.28. Finite dimensional operators are compact.

Theorem 2.29. Let the sequence Kn : H → E of compact linear operators that are norm
convergent to a linear operator K : H → E, i.e., kKn − Kk → 0 as n → ∞ then K is
compact. Moreover, every compact operator is the limit of a sequence of operators with
finite dimensional range.

   Hilbert Schmidt operators are discussed in Dunford and Schwartz (1988, p. 1009),
Dautray and Lyons (1988, Vol 5, p.41, chapter VIII).
                                                      ©           ª
Definition 2.30 (Hilbert-Schmidt operator). Let ϕj , j = 1, 2, ... be a complete or-
thonormal set in a Hilbert space H. An operator K : H → E is said to be a Hilbert-
Schmidt operator if the quantity k.kHS defined by
                                       (∞            )1/2
                                         X°       °2
                             kKk =           °Kϕj °
                                    HS                 E
                                            j=1

is finite. The number kKkHS is called the Hilbert-Schmidt norm of K. Moreover
                                      kKk ≤ kKkHS                                     (2.10)
and hence K is bounded.

                                             21
   From (2.10), it follows that HS norm convergence implies (operator) norm convergence.

Theorem 2.31. The Hilbert-Schmidt norm is independent of the orthonormal basis used
in its definition.

Theorem 2.32. Every Hilbert-Schmidt operator is compact.

Theorem 2.33. The adjoint of an Hilbert-Schmidt operator is itself a Hilbert-Schmidt
operator and kKkHS = kK ∗ kHS .

    Theorem 2.32 implies that Hilbert-Schmidt (HS) operators can be approached by a
sequence of finite dimensional operators, which is an attractive feature when it comes
to estimating K. Remark that the integral operator K defined by (2.5) and (2.6) is a
Hilbert-Schmidt (HS) operator and its adjoint is also a HS operator. Actually, all Hilbert-
Schmidt operators of L2 (Rq , π) in L2 (Rr , ρ) are integral operators. The following theorem
is proved in Dautray and Lions (Vol. 5, p. 45).

Theorem 2.34. An operator of L2 (Rq , π) in L2 (Rr , ρ) is Hilbert-Schmidt if and only if
it admits a kernel representation (2.5) conformable to (2.6). In this case, the kernel k is
unique.
                                                  2           2
    Example 2.1 (continued). P    Let
                                    PK from2L (N, π) in L (N, ρ) with kernel k (l, p). K
is a Hilbert-Schmidt operator if       k (l, p) π (l) ρ (p) < ∞. In particular, the operator
defined by (Kϕ)1 = ϕ1 and (Kϕ)p = ϕp − ϕp−1 , p = 2, 3, ... is not a Hilbert-Schmidt
operator; it is not even compact.
    Example 2.3 (continued). By Theorem 2.34, a sufficient condition for K and K ∗
to be compact is
                      Z Z ·               ¸2
                             fZ,W (z, w)
                                              fZ (z) fW (w) dzdw < ∞.
                            fZ (z) fW (w)

   Example 2.5 (Conditional expectation with common elements). Consider a
conditional expectation operator from L2 (X, Z) into L2 (X, W ) defined by

                       (Kϕ) (x, w) = E [ϕ (X, Z) |X = x, W = w] .

Because there are common elements between the conditioning variable and the argument
of the function ϕ, the operator K is not compact. Indeed, let ϕ (X) be such that E (ϕ2 ) =
1, we have Kϕ = ϕ. It follows that the image of the unit circle in L2 (X, Z) contains the
unit circle of L2 (X) and hence is not compact. Therefore K is not compact.
    Example 2.6 (Restriction). For illustration, we consider the effect of restricting K
                                       e the operator defined by
on a subset of L2C (Rq , π) . Consider K

                              Ke : L2 (Rq , π
                                            e) → L2C (Rr , e
                                                           ρ)
                                    C
                             e
                             Kϕ  = Kϕ

                                             22
for every ϕ ∈ L2C (Rq , π
                        e) , where L2C (Rq , π
                                             e) ⊂ L2C (Rq , π) and L2C (Rr , e
                                                                             ρ) ⊃ L2C (Rr , ρ) .
Assume that K is a HS operator defined by (2.5). Under which conditions is K         e an HS
operator? Let
                                      Z
                          e
                          Kϕ (s) =       k (τ , s) ϕ (s) π (s) ds
                                      Z
                                                   π (s)
                                  =      k (τ , s)       ϕ (s) π
                                                               e (s) ds
                                                   π
                                                   e (s)
                                      Z
                                  ≡      e
                                         k (τ , s) ϕ (s) π
                                                         e (s) ds.

Assume that π
            e (s) = 0 implies π (s) = 0 and ρ (τ ) = 0 implies e           ρ (τ ) = 0. Note that
                     Z ¯           ¯2
                         ¯e        ¯
                         ¯k (τ , s)¯ πe (s) eρ (τ ) dsdτ
                     Z
                                      π (s) eρ (τ )
                  =      |k (τ , s)|2                π (s) ρ (τ ) dsdτ
                                      π
                                      e (s) ρ (τ )
                          ¯       ¯      ¯         ¯Z
                          ¯ π (s) ¯      ¯eρ (τ ) ¯¯
                  < sup ¯ ¯       ¯ sup  ¯             |k (τ , s)|2 π (s) ρ (τ ) dsdτ .
                       s    e (s) ¯ τ ¯ ρ (τ ) ¯
                            π

Hence the HS property is preserved if (a) there is a constant c > 0 such that π (s) ≤ ce π (s)
             q                                                                        r
for all s ∈ R and (b) there is a constant d such that e ρ (τ ) ≤ dρ (τ ) for all τ ∈ R .

2.3. Spectral decomposition of compact operators
For compact operators, spectral analysis reduces to the analysis of eigenvalues and eigen-
functions. Let K : H → H be a compact linear operator.

Definition 2.35. λ is an eigenvalue of K if there is a nonzero vector φ ∈ H such that
Kφ = λφ. φ is called eigenfunction of K corresponding to λ.

Theorem 2.36. All eigenvalues of a self-adjoint operator are real and eigenfunctions
corresponding to different eigenvalues are orthogonal.

Theorem 2.37. All eigenvalues of a positive operator are nonnegative.

Theorem 2.38. For every eigenvalue λ of a bounded operator K, we have |λ| ≤ kKk .

Theorem 2.39. Let K be a self-adjoint
                                    ¡ ¢ compact operator, the set of its eigenvalues (λj )
is countable and its eigenvectors φj can be orthonormalized. Its largest eigenvalue (in
absolute value) satisfies |λ1 | = kKk . If K has infinitely many eigenvalues |λ1 | ≥ |λ2 | ≥ ...,
then limj→∞ λj = 0.

    Let K : H → E, K ∗ K and KK ∗ are self-adjoint positive operators on H and E respec-
tively. Hence their eigenvalues are nonnegative by Theorem 2.37.

                                                  23
Definition 2.40. Let H and E be Hilbert spaces, K : H → E be a compact linear
operator and K ∗ : E → H be its adjoint. The square roots of the eigenvalues of the
nonnegative self-adjoint compact operator K ∗ K : H → H are called singular values of K.

   The following results (Kress, 1999, Theorem 15.16) apply to operators that are not
necessarily self-adjoint.

Theorem 2.41. Let (λj ) denote the sequence of the nonzero singular values of the com-
pact linear operator K repeated according to their multiplicity. Then there exist or-
thonormal sequences φj of H and ψ j of E such that

                                   Kφj = λj ψ j , K ∗ ψ j = λj φj                                        (2.11)

for all j ∈ N. For each ϕ ∈ H we have the singular value decomposition
                                           ∞
                                           X ­     ®
                                        ϕ=    ϕ, φj φj + Qϕ                                              (2.12)
                                                   j=1


with the orthogonal projection operator Q : H → N (K) and
                                                     ∞
                                                     X         ­     ®
                                            Kϕ =             λj ϕ, φj ψ j .                              (2.13)
                                                       j=1

   ©             ª
    λj , φj , ψ j is called singular system of K. Note that λ2j are the nonzero eigenvalues
of KK ∗ and K ∗ K associated with the eigenfunctions ψ j and φj respectively.

Theorem 2.42.©Let K beªthe integral operator defined by (2.5) and assume Condition
(2.6) holds. Let λj , φj , ψ j be as in (2.11). Then:
    (i) The Hilbert Schmidt norm of K can be written as
                        (                   )1/2         ½Z Z                                     ¾1/2
                         X              2                                    2
             kKkHS =            |λj |              =              |k (τ , s)| π (s) ρ (τ ) dsdτ
                          j∈N

where each λj is repeated according to its multiplicity.
                                     P
  (ii) (Mercer’s formula) k (τ , s) = ∞j=1 λj ψ j (τ ) φj (s).


   Example (degenerate operator). Consider an integral operator defined on L2 ([a, b])
with a Pincherle-Goursat kernel
                                     Z b
                           Kf (τ ) =     k (τ , s) f (s) ds,
                                                          a
                                                         n
                                                         X
                                k (τ , s) =                    al (τ ) bl (s) .
                                                         l=1


                                                             24
Assume that al and bl belong to L2 ([a, b]) for all l. By (2.6), it follows that K is bounded.
As moreover K is finite dimensional, we have K compact by Theorem 2.28. Assume that
the set of functions (al ) is linearly independent. The equality Kφ = λφ yields
                              X n        Z
                                  al (τ ) bl (s) φ (s) ds = λφ (τ ) ,
                            l=1
                                           P
hence φ (τ ) is necessarily of the form nl=1 cl al (τ ). The dimension of the range of K is
therefore n, there are at most n nonzero eigenvalues.                        R1
    Example. Let H = L2 ([0, 1]) and the integral operator Kf (τ ) = 0 (τ ∧ s) f (s) ds
where τ ∧ s = min(τ , s). It is possible to computeRτ    explicitly the
                                                                    R 1 eigenvalues and eigen-
functions of K by solving Kφ = λφ ⇐⇒ 0 sφ (s) ds + τ τ φ (s) ds = λφ (τ ) . Us-
ing two successive differentiations with respect to τ , we obtain a differential equation
φ (τ ) = −λφ00 (τ ) with boundary conditions
                                           √      φ (0) = 0 and φ0 (1) = 0. Hence the set of
orthonormal eigenvectors is φj (τ ) = 2 sin ((πjτ ) /2) associated with the eigenvalues
λj = 4/ (π 2 j 2 ), j = 1, 3, 5, ....We can see that the eigenvalues converge to zero at an
arithmetic rate.
    Example. Let π be the pdf of the standard normal distribution and H = L2 (R, π) .
Define K be the integral operator with kernel
                                                    l (τ , s)
                                    k (τ , s) =
                                                  π (τ ) π (s)
                                                                 µµ¶ µ        ¶¶
                                                                 0      1 ρ
where l (τ , s) is the joint pdf of the bivariate normal N           ,            . Then K
                                                                 0      ρ 1
is a self-adjoint operator with eigenvalues λj = ρj and eigenfunctions the Hermite poly-
nomials φj , j = 1, 2, ... defined in (2.1). This is an example where the eigenvalues decay
exponentially fast.

2.4. Random element in Hilbert spaces
2.4.1. Definitions
Let H be a real separable Hilbert space with norm kk induced by the inner product h, i .
Let (Ω, F, P ) be a complete probability space. Let X : Ω → H be a Hilbert space-valued
random
R        element (an H-r.e.). X is integrable or has finite expectation E (X) if E (kXk) =
   kXk  dP  < ∞, in that case E (X) satisfies E (X) ∈ H and E [hX, ϕi] = hE (X) , ϕi for
 Ω                                                     £        ¤
all ϕ ∈ H. An H-r.e. X is weakly second order if E hX, ϕi2 < ∞ for all ϕ ∈ H. For a
weakly second order H-r.e. X with expectation E (X) , we define the covariance operator
K as

                         K : H→H
                        Kϕ = E [hX − E (X) , ϕi (X − E (X))]

for all ϕ ∈ H. Note that var hX, ϕi = hKϕ, ϕi .

                                              25
                                                    hR               i1/2
                                                      1
                             2
   Example. Let H = L ([0, 1]) with kgk =            0
                                                        g (τ )2 dτ          and X = h (τ , Y ) where Y
                                       2
is a random variable and h (., Y ) ∈ L ([0, 1]) with probability one. Assume E (h (τ , Y )) =
0, then the covariance operator takes the form:

                       Kϕ (τ ) = E [hh (., Y ) , ϕi h (τ , Y )]
                                   ·µZ                         ¶        ¸
                               = E         h (s, Y ) ϕ (s) ds h (τ , Y )
                                 Z
                               =    E [h (τ , Y ) h (s, Y )] ϕ (s) ds
                                 Z
                               ≡    k (τ , s) ϕ (s) ds.

If moreover, h (τ , Y ) = I {Y ≤ τ } − F (τ ) then k (τ , s) = F (τ ∧ s) − F (τ ) F (s) .

Definition 2.43. An H-r.e. Y has a Gaussian distribution on H if for all ϕ ∈ H the
real-valued r.v. hϕ, Y i has a Gaussian distribution on R.

Definition 2.44 (strong mixing). Let {Xi,n , i = ..., −1, 0, 1, ...; n ≥ 1} be an array of
H-r.e., defined on the probability space (Ω, F, P ) and define An,bn,a = σ (Xi,n , a ≤ i ≤ b)
for all −∞ ≤ a ≤ b ≤ +∞, and n ≥ 1. The array {Xi,n } is called a strong or α−mixing
array of H-r.e. if limj→∞ α (j) = 0 where
                        h                                                       i
     α (j) = sup sup sup |P (A ∩ B) − P (A) P (B)| : A ∈ An,l
                                                           n,−∞  ,  B  ∈ A n,+∞
                                                                           n,l+j .
             n≥1   l   A,B


2.4.2. Central limit theorem for mixing processes
                                                          P
We want to study the asymptotic properties of Zn = n−1/2 ni=1 Xi,n where {Xi,n : 1 ≤ 1 ≤ n}
is an array of H-r.e.. Weak and strong laws of large numbers for near epoch dependent
(NED) processes can be found in Chen and White (1996). Here we provide sufficient
conditions for the weak convergence of processes to be denoted ⇒ (see Davidson, 1994,
for a definition). Weak convergence is stronger than the standard central limit theorem
(CLT) as illustrated by a simple example. Let (Xi ) an iid sequence of zero mean weakly
second order elements of H. Then for any Z in H, hXi , Zi is an iid zero mean sequence
of C with
      P finite variance hKZ, Zi. Then standardPCLT implies the asymptotic normality
of √1n ni=1 hXi , Zi . The weak convergence of √1n ni=1 Xi to a Gaussian process N (0, K)
in H requires an extra assumption, namely E kX1 k2 < ∞. Weak convergence theorems
for NED processes that might have trending mean (hence are not covariance stationary)
are provided by Chen and White (1998). Here, we report results for mixing processes
proved by Politis and Romano (1994). See also van der Vaart and Wellner (1996) for iid
sequences.

Theorem 2.45. Let {Xi,n : 1 ≤ 1 ≤ n} be a double array of stationaryP      mixing H-r.e.
with zero mean such that, for all n, kXi,n k < B with probability one, and m     2
                                                                            j=1 j α (j) ≤


                                               26
Kmr for all 1 ≤ m ≤ n and n, and some r < 3/2. Assume, for any integer l ≥ 1,
that (X1,n , ..., Xl,n ), regarded as a r.e. of Hl , converges in distribution to (X1 , ..., Xl ), say.
Moreover, assume E [hX1,n , Xl,n i] → E [hX1 , Xl i] as n → ∞ and
                               n
                               X                            ∞
                                                            X
                        lim          E [hX1,n , Xl,n i] =         E [hX1 , Xl i] < ∞.
                       n→∞
                               l=1                          l=1
                  Pn
Let Zn = n−1/2                                      2
                    i=1 Xi,n . For any ϕ ∈ H, let σ ϕ,n denote the variance of hZn , ϕi . Assume
                                                            ∞
                                                            X
                σ 2ϕ,n → σ 2ϕ ≡ V ar (hX1 , ϕi) + 2               cov (hX1 , ϕi , hX1+i , ϕi) .     (2.14)
                     n→∞
                                                            i=1

Then Zn converges weakly to a Gaussian process N (0, K) in H, with zero mean and
covariance operator K satisfying hKϕ, ϕi = σ 2ϕ for each ϕ ∈ H.

   In the special case when the Xi,n = Xi form a stationary sequence, the conditions
simplify considerably:

Theorem 2.46. Assume X1 , X2 , ...isPa stationary sequence of H-r.e. with mean µ and
mixing coefficient
          ³        α.´Let Zn = n−1/2 ni=1 (Xi − µ).
                                               P
   (i)If E kX1 k2+δ < ∞ for some δ > 0, and j [α (j)]δ/(2+δ) < ∞
    (ii) or if X1 , X2 , ...is iid and E kX1 k2 < ∞
    Then Zn converges weakly to a Gaussian process G ∼ N (0, K) in H. The distribu-         ¡     ¢
tion of G is determined by the distribution of its marginals hG, ϕi which are N 0, σ 2ϕ
distributed for every ϕ ∈ H where σ 2ϕ is defined in (2.14).
                                                                         P
    Let {el } be a complete orthonormal basis of P  H then £kX1 k2 = ¤ ∞                 2
                                                                           l=1 hX1 , el i hence, in
the iid case, it suffices to check that E kX1 k2 = ∞  l=1 E hX1 , el i
                                                                       2
                                                                          < ∞.
    The following theorem is stated in more general terms in Chen and White (1992).

Theorem 2.47. Let An be a random bounded linear operator from H to H and A 6= 0
be a nonrandom bounded linear operator from H to H. If kAn − Ak → 0 in probability
as n → ∞ and Yn ⇒ Y ∼ N (0, K) in H. Then An Yn ⇒ AY ∼ N (0, AKA∗ ).

   In Theorem 2.47, the boundedness of A is crucial. In most of our applications, A will
not be bounded and we will not be able to apply Theorem 2.47. Instead we will have to
check the Liapunov condition (Davidson 1994) “by hand”.

Theorem 2.48. Let the array {Xi,n } be independent with zero mean and variance se-
      ©      ª          P                     P          d
quence σ 2i,n satisfying nt=1 σ 2i,n = 1. Then ni=1 Xi,n → N (0, 1) if
                               n
                               X      h          i
                         lim         E |Xi,n |2+δ = 0                                 (Liapunov condition)
                        n→∞
                               i=1

for some δ > 0.

                                                     27
2.5. Estimation of an operator and its adjoint
2.5.1. Estimation of an operator
In many cases of interest, an estimator of the compact operator, K, is given by a degen-
erate operator of the form
                                                      Ln
                                                      X
                                            K̂n ϕ =          al (ϕ) εl                        (2.15)
                                                      l=1

where εl ∈ E, al (ϕ) is linear in ϕ.
  Examples:
  1 - Covariance operator
                                   Z
                       Kϕ (τ 1 ) = E [h (τ 1 , X) h (τ 2 , X)] ϕ (τ 2 ) dτ 2 .

Replacing the expectation by the sample mean, one obtains an estimator of K :
                               Z Ã X  n
                                                                    !
                                   1
                K̂n ϕ (τ 1 ) =           h (τ 1 , xi ) h (τ 2 , xi ) ϕ (τ 2 ) dτ 2
                                   n i=1
                                      n
                                      X
                                =           ai (ϕ) εi
                                      i=1

with
                                  Z
                              1
                     ai (ϕ) =         h (τ 2 , xi ) ϕ (τ 2 ) dτ 2 and εi = h (τ 1 , xi ) .
                              n
Note that here K is self-adjoint and the rate of convergence of K̂n is parametric.
   2 - Conditional expectation
                                    Kϕ (w) = E [ϕ (Z) |W = w] .
The kernel estimator of K with kernel ω and bandwidth cn is given by
                                        Pn              ³      ´
                                                          w−wi
                                          i=1 ϕ (zi ) ω    cn
                         K̂n ϕ (w) =       Pn       ³       ´
                                                      w−wi
                                             i=1 ω      cn
                                                  n
                                                  X
                                              =          ai (ϕ) εi
                                                  i=1

where
                                                                      ³          ´     
                                                                           w−wi
                                                                   ω        cn
                         ai (ϕ) = ϕ (zi ) and εi =  P                      ³          ´ .
                                                                  n             w−wi
                                                                  i=1 ω          cn

In this case, the rate of convergence of K̂n is nonparametric, see Subsection 4.1.

                                                        28
2.5.2. Estimation of the adjoint of a conditional expectation operator
Consider a conditional expectation operator as described in Example 2.3. Let K : L2Z →
L2W be such that (Kϕ) (w) = E [ϕ (Z) |W = w] and its adjoint is K ∗ : L2W → L2Z with
(Kψ) (z) = E [ψ (W ) |Z = z] . Let fˆZ,W , fˆZ (z), and fˆW (w) be nonparametric estimators
of fZ,W , fZ (z), and fW (w) obtained either by kernel or sieves estimators. Assume that
K and K ∗ are estimated by replacing the unknown pdfs by their estimators, that is:
                                      Z ˆ
                                        fZ,W (z, w)
                         K̂n ϕ (w) =                ϕ (z) dz,
                                           fˆZ (z)
                                      Z ˆ
                      [   ∗ ) ψ (z) =
                                        fZ,W (z, w)
                      (K     n                      ψ (w) dw.
                                          fˆW (w)
                     ³ ´∗
             [ ∗
Then we have (K )n =
                   6   K̂n for H = L2Z and E = L2W . Indeed, we do not have
                               D        E D           E
                                              [
                                K̂n ϕ, ψ = ϕ, (K ∗) ψ   .                             (2.16)
                                                   n
                                            E                    H

There
   ³ are ´two solutions ³to this problem.
                                 ´        First, we choose ³as space
                                                                ´∗ of references Hn =
 2    q ˆ              2    r ˆ                   [  ∗
L R , fZ and En = L R , fW . In which case, (K )n = K̂n for Hn and En because
                              D         E        D           E
                               K̂n ϕ, ψ              [ ∗
                                                = ϕ, (K )n ψ          .               (2.17)
                                         En                      Hn

The new spaces Hn and En depend on the sample size and on the estimation procedure.
Another approach consists in defining H = L2 (Rq , π) and E = L2 (Rr , ρ) where π and ρ are
known and satisfy: There exist c, c0 > 0 such that fZ (z) ≤ cπ (z) and fW (w) ≥ c0 ρ (w) .
Then
                                        Z
                              ∗            fZ,W (z, w) ρ (w)
                           K ψ (z) =                         ψ (w) dw
                                             fW (w) π (z)
                                     6= E [ψ (W ) |Z = z] .
                        ³ ´∗
               [
In that case, (K  ∗ ) = K̂
                            n   for H and E but the choice of π and ρ require some knowledge
                     n
on the support and the tails of the distributions of W and Z.
    An alternative solution to estimating K and K ∗ by kernel is to estimate the spectrum
of K and ªto apply Mercer’s formula. Let H = L2Z and E = L2W . The singular system
©
 λj , φj , ψ j of K satisfies
                                        £              ¤
                            λj = sup E φj (Z) ψ j (W ) , j = 1, 2...                   (2.18)
                               φj ,ψ j

              ° °        ­     ®                            ° °         ­         ®
subject to °φj °H = 1, φj , φl H = 0, l = 1, 2, ..., j − 1, °ψ j °E = 1, ψ j , ψ l E = 0, l =
1, 2, ..., j − 1. Assume the econometrician observes a sample {wi , zi : i = 1, ..., n}. To

                                                 29
          ©           ª
estimate λj , φj , ψ j , one can either estimate (2.18) by replacing the expectation by the
sample mean or by replacing the joint pdf by a nonparametric estimator.
    The first approach was adopted by Darolles, Florens, and Renault (1998). Let
                               ½              Z                     ¾
                                       q              2 b
                       Hn =      ϕ : R → R, ϕ (z) dFZ (z) < ∞ ,
                               ½              Z                       ¾
                                       r               2 b
                        En =     ψ : R → R, ψ (w) dFW (w) < ∞

                                                                                 P
where FbZ and FbW are the empirical distributions of Z and W that is kϕk2Hn = n1 ni=1 ϕ (zi )2
           2      1
                    Pn          2
and
©     kψk  E n ª= n  i=1 ψ (wi ) . Darolles, Florens, and Renault (1998) propose to estimate
 λj , φj , ψ j by solving

                                                  1 Xh                      i
                                                     n
                             λ̂j = sup                  φ̂j (zi ) ψ̂ j (wi ) , j = 1, 2...                          (2.19)
                                        φ̂j ,ψ̂ j n i=1

           ° °               D          E                                    ° °                  D            E
           ° °                                                               ° °
subject to °φ̂j °        = 1, φ̂j , φ̂l           = 0, l = 1, 2, ..., j − 1, °ψ̂ j °          = 1, ψ̂ j , ψ̂ l          = 0,
                    Hn                       Hn                                          En                        En
l = 1, 2, ..., j − 1 where φ̂j and ψ̂ j are elements of increasing dimensional spaces

                                                            J
                                                            X
                                              φ̂j (z) =            αj aj (z) ,
                                                             j=1
                                                            J
                                                            X
                                             ψ̂ j (w) =            β j bj (w)
                                                             j=1


for some basis {aj } and {bj }. By Mercer’s formula (2.13), K can be estimated by
                                   X µZ                         ¶
                     K̂n ϕ (w) =      λ̂j                    b
                                              φ̂j (z) ϕ (z) dFZ ψ̂ j (w)
                                   X µZ                           ¶
                   [  ∗
                  (K )n ψ (z) =       λ̂j                      b
                                              ψ̂ j (w) ψ (w) dFW φ̂j (z) .

             ³ ´∗
      [ ∗
Hence (K )n = K̂n for Hn and En .
   The second approach consists in replacing fZ,W by a nonparametric estimator fˆZ,W .
Darolles, Florens, and Gourieroux (2004) use a kernel estimator,
                                                             ³      whereas
                                                                    ´       Chen,³Hansen´
and Scheinkman (1998) use B-spline wavelets. Let Hn = L2 Rq , fˆZ and En = L2 Rr , fˆW
where fˆZ and fˆW are the marginals of fˆZ,W . (2.18) can be replaced
                                        Z
                     λ̂j = sup              φj (z) ψ j (w) fˆZ,W (z, w) dzdw, j = 1, 2...                           (2.20)
                              φj ,ψ j



                                                           30
               ° °           ­      ®                                   ° °          ­      ®
subject to °φj °Hn = 1, φj , φl Hn = 0, l = 1, 2, ..., j − 1, °ψ j °En = 1, ψ j , ψ l En = 0,
                             n              o                              ©          ª
l = 1, 2, ..., j −1. Denote λ̂j , φ̂j , ψ̂ j the resulting estimators of λj , φj , ψ j . By Mercer’s
formula, K can be approached by
                                      X µZ                                ¶
                     K̂n ϕ (w) =            λ̂j                  ˆ
                                                   φ̂j (z) ϕ (z) fZ (z) dz ψ̂ j (w)
                                      X µZ                                   ¶
                   [  ∗
                   (K )n ψ (z) =            λ̂j                    ˆ
                                                   ψ̂ j (w) ψ (w) fW (w) dw φ̂j (z) .

                 ³ ´∗
        [  ∗
Hence (K )n = K̂n for Hn and En . Note that in the three articles mentioned above,
Z = Xt+1 and W = Xt where {Xt } is a Markov process. These papers are mainly
concerned with estimation. When the data are the discrete observations of a diffusion
process, the nonparametric estimations of a single eigenvalue-eigenfunction pair and of
the marginal distribution are enough to recover a nonparametric estimate of the diffusion
coefficient. The techniques described here can also be used for testing the reversibility of
the process {Xt } , see Darolles, Florens, and Gourieroux (2004).

2.5.3. Computation of eigenvalues and eigenfunctions of finite dimensional op-
       erators
Here, we assume that we have some estimators of K and K ∗ , denoted K̂n and K̂n∗ such
that K̂n and K̂n∗ have finite range and satisfy
                                                     Ln
                                                     X
                                     K̂n ϕ =                al (ϕ) εl                        (2.21)
                                                     l=1
                                                     Ln
                                                     X
                                     K̂n∗ ψ =               bl (ψ) η l                       (2.22)
                                                      l=1

where εl ∈ E, η l ∈ H, al (ϕ) is linear in ϕ and bl (ψ) is linear in ψ. Moreover the {εl } and
{η l } are assumed to be linearly independent. It follows that
                                           Ln
                                                 ÃL              !
                                          X       X n
                             ∗
                           K̂n K̂n ϕ =        bl      al0 (ϕ) εl0 η l
                                            l=1           l0 =1
                                            XLn
                                       =             al0 (ϕ) bl (εl0 ) η l .                 (2.23)
                                           l,l0 =1


We calculate the eigenvalues and eigenfunctions of K̂n∗ K̂n by solving

                                         K̂n∗ K̂n φ = λ2 φ.



                                                     31
                                                P
Hence φ is necessarily of the form: φ =               l β l η l . Replacing in (2.23), we have

                                              Ln
                                              X              ¡ ¢
                                λ2 β l =              β j al0 η j bl (εl0 ) .                    (2.24)
                                           l0 ,j=1
          £               ¤
Denote β̂= β 1 , ..., β Ln the solution of (2.24). Solving (2.24) is equivalent to finding the
                           2      2
Ln nonzero eigenvalues λ̂1 , ..., λ̂Ln and eigenvectors β̂ 1 , ...,β̂ Ln of an Ln × Ln −matrix C
with principle element
                                              Ln
                                              X          ¡ ¢
                                     cl,j =           al0 η j bl (εl0 ) .
                                              l0 =1

The eigenfunctions of K̂n∗ K̂n are
                                           Ln
                                           X          j
                                  φ̂j =          β̂ l η l, j = 1, ...Ln
                                           l=1

                   2         2
                                 n                   o
associated with λ̂1 , ..., λ̂Ln . φ̂j : j = 1, .., Ln need to be orthonormalized. The estima-
                                          q
                                              2
tors of the singular values are λ̂j = λ̂j .

2.5.4. Estimation of noncompact operators
This chapter mainly focuses on compact operators, because compact operators can be
approached by a sequence of finite dimensional operators and therefore can be easily
estimated. However, it is possible to estimate a noncompact operator by an estimator,
which is infinite dimensional. A simple example is provided by the conditional expectation
operator with common elements.
    Example 2.5 (continued). This example is discussed in Hall and Horowitz (2004).
Assume that the dimension of Z is p. The conditional expectation operator K can be
estimated by a kernel estimator with kernel ω and bandwidth cn
                         Pn hR 1                 ³
                                                   z−zi
                                                        ´ i ³
                                                                x−xi
                                                                     ´ ³
                                                                         w−wi
                                                                              ´
        ³     ´            i=1    cpn
                                      ϕ (x, z) ω cn dz ω cn ω cn
           b
          Kϕ    (x, w) =                         ³      ´ ³      ´              .
                                        Pn         x−xi     w−wi
                                           i=1 ω    cn
                                                         ω   cn


We can see that Kb is an infinite dimensional operator because all functions ϕ (x) that
depend only on x are in the range of K̂.

3. Regularized solutions of integral equations of the first kind
Let H and E be two Hilbert spaces considered only over the real scalars for sake of
notational simplicity. Let K be a linear operator on D(K) ⊂ H into E. This section

                                                          32
discusses the properties of operator equations (also called Fredholm equations) of the first
kind

                                          Kϕ = r                                         (3.1)

where K is typically an integral compact operator. Such an equation in ϕ is in general
an ill-posed problem by opposition to a well-posed problem. Equation (3.1) is said to be
well-posed if (i) (existence) a solution exists, (ii) (uniqueness) the solution is unique, and
(iii) (stability) the solution is continuous in r, that is ϕ is stable with respect to small
changes in r. Whenever one of these conditions is not satisfied, the problem is said to
be ill-posed. The lack of stability is particularly problematic and needs to be addressed
by a regularization scheme. Following Wahba (1973) and Nashed and Wahba (1974), we
introduce generalized inverses of operators in Reproducing Kernel Hilbert Spaces (RKHS).
Properties of RKHS will be studied more extensively in Section 6.

3.1. Ill-posed and well-posed problems
This introductory subsection gives an overview of the problems encountered when solving
an equation Kϕ = r where K is a linear operator, not necessarily compact. A more
detailed encounter can be found in Groetsch (1993). We start with a formal definition of
a well-posed problem.

Definition 3.1. Let K : H → E. The equation

                                          Kϕ = r                                         (3.2)

is called well-posed if K is bijective and the inverse operator K −1 : E → H is continuous.
Otherwise, the equation is called ill-posed.

    Note that K is injective means N (K) = {0} , K is surjective means R (K) = E. In
this section, we will restrict ourselves to the case where K is a bounded (and therefore
continuous) linear operator. By Banach theorem (Kress, 1999, page 266), if K : H → E
is a bounded linear operator, K bijective implies that K −1 : E → H is bounded and
therefore continuous. In this case, Kϕ = r is well-posed.
    An example of a well-posed problem is given by

                                       (I − C) ϕ = r

where C : H → H is a compact operator and 1 is not an eigenvalue of K. This is an
example of Fredholm equation of the second kind that will be studied in Section 7.
    We now turn our attention to ill-posed problems.
    Problem of uniqueness:
    If N (K) 6= {0} , then to any solution of ϕ of (3.2), one can add an element ϕ1 of
N (K), so that ϕ + ϕ1 is again solution. A way to achieve uniqueness, is to look for the
solution with minimal norm.

                                             33
   Problem of existence:
   A solution to (3.2) exists if and only if

                                        r ∈ R (K) .

Since K is linear, R (K) is a subspace of E, however it generally does not exhaust E.
Therefore, a traditional solution of (3.2) exists only for a restricted class of functions r.
If we are willing to broaden our notion of solution, we may enlarge the class of functions
r for which a type of generalized solution exists to a dense subspace of functions of E.

Definition 3.2. An element ϕ̃ ∈ H is said to be a least squares solution of (3.2) if:

                          kK ϕ̃ − rk ≤ kKf − rk , for any f ∈ H                         (3.3)

If the set Sr of all least squares solution of (3.2) for a given r ∈ E is not empty and
admits an element ϕ of minimal norm, then ϕ is called a pseudosolution of (3.2).

    The pseudosolution, when it exists, is denoted ϕ = K † r where K † is by definition the
Moore Penrose generalized inverse of K. However, the pseudosolution does not necessarily
exist. The pseudosolution exists if and only if P r ∈ R (K) where P is the projection
operator on R (K), the closure of the range of K. Note that P r ∈ R (K) if and only if

                         r = P r + (1 − P ) r ∈ R (K) + R (K)⊥ .                        (3.4)

Therefore, a pseudosolution exists if and only if r lies in the dense subspace R (K) +
R (K)⊥ of E.
   We distinguish two cases:
   1. R (K) is closed.
   For any r ∈ E, ϕ = K † r exists and is continuous in r.
   Example. (I − C) ϕ = r where K is compact and 1 is an eigenvalue of K. The
problem is ill-posed because the solution is not unique but it is not severally ill-posed
because the pseudosolution exists and is continuous.
   2. R (K) is not closed.
   The pseudosolution exists if and only if r ∈ R (K) + R (K)⊥ . But here, ϕ = K † r is
not continuous in r.
   Example. K is a compact infinite dimensional operator.

    For the purpose of econometric applications, condition (3.4) will be easy to maintain
since:
    Either (K, r) denotes the true unknown population value, and then the assumption r
∈ R (K) means that the structural econometric model is well-specified. Inverse problems
with specification errors are beyond the scope of this chapter.
    Or (K, r) denotes some estimators computed from a finite sample of size n. Then,
insofar as the chosen estimation procedure is such that R (K) is closed (for instance
because it is finite dimensional as in Subsection 2.5.1), we have R (K) + R (K)⊥ = E.

                                               34
    The continuity assumption of K will come in general with the compacity assumption
for population values and, for sample counterparts, with the finite dimensional prop-
erty. Moreover, the true unknown value K0 of K will be endowed with the identification
assumption:

                                      N (K0 ) = {0}                                    (3.5)

and the well-specification assumption:


                                         r0 ∈ R (K0 ) .                                (3.6)

(3.5) and (3.6) ensure the existence of a unique true unknown value ϕ0 of ϕ defined as
the (pseudo) solution of the operator equation K0 ϕ0 = r0 . Moreover, this solution is not
going to depend on the choice of topologies on the two spaces H and E.
    It turns out that a compact operator K with infinite-dimensional range is a prototype
of an operator for which R (K) is not closed. Therefore, as soon as one tries to generalize
structural econometric estimation from a parametric setting (K finite dimensional) to
a non-parametric one, which can be seen as a limit of finite dimensional problems (K
compact), one is faced with an ill-posed inverse problem. This is a serious issue for the
purpose of consistent estimation since in general, one does not know the true unknown
value r0 of r but only a consistent estimator r̂n . Therefore, there is no hope to get a
consistent estimator ϕ̂n of ϕ by solving K ϕ̂n = r̂n that is ϕ̂n = K † r̂n , when K † is not
continuous. In general, the issue to address will be even more involved since K † and K
must also be estimated.
    Let us finally recall a useful characterization of the Moore-Penrose generalized inverse
of K.

Proposition 3.3. Under (3.4), K † r is the unique solution of minimal norm of the equa-
tion K ? Kϕ = K ? r.

   In other words, the pseudosolution ϕ of (3.2) can be written in two ways:

                                 ϕ = K † r = (K ? K)† K ? r

For r ∈ R (K) (well-specification assumption in the case of true unknown values), K ? r
∈ R (K ? K) and then (K ? K)−1 K ? r is well defined. The pseudosolution can then be
represented from the singular value decomposition of K as
                                                   X ∞ ­        ®
                              †       ?  −1   ?
                                                         r, ψ j
                        ϕ = K r = (K K) K r =                     φj              (3.7)
                                                    j=1
                                                          λj

It is worth noticing that the spectral decomposition (3.7) is also valid for any r ∈
R (K) + R (K)⊥ to represent the pseudo-solution       ϕ = K † r = (K ? K)† K ? r since
          ⊥                  †
r ∈ R (K) is equivalent to K r = 0.

                                              35
     Formula (3.7) clearly demonstrates the ill-posed nature of the equation Kϕ = r. If
                                        δ                                     δ
we perturb the right-hand
                   ° δ    ° side
                              ° δr by °r = r + δψ j , we obtain the solution ϕ = ϕ + δφj /λj .
Hence, the ratio °ϕ − ϕ° / °r − r° = 1/λj can be made arbitrary large due to the fact
that the singular values tend to zero. Since the influence of estimation errors in r is
controlled by the rate of this convergence, Kress (1999, p. 280) says that the equation
is “mildly ill-posed” if the singular values decay slowly to zero and that it is “severely
ill-posed” if they
                 ­ decay
                       ® rapidly. Actually, the critical property is the relative decay rate
of the sequence r, ψ j with respect to the decay of the sequence λj . To see this, note that
the solution ϕ has to be determined from its Fourier coefficients by solving the equations
                                  ­       ® ­      ®
                               λj ϕ, φj = r, ψ j , for all j.

Then,
­     ®we may expect high instability of the solution ϕ if λj goes to zero faster than
 ϕ, φj . The properties of regularity spaces introduced below precisely document this
intuition.

3.2. Regularity spaces
As stressed by Nashed and Wahba (1974), an ill-posed problem relative to H and E may
                                                                   0              0
be recast as a well-posed problem relative to new spaces H ⊂ H and E ⊂ E, with
                      0
topologies on H0 and E , which are different from the topologies on H and E respectively.
                                                                                     0
While Nashed and Wahba (1974) build generally these Hilbert spaces H0 and E as RKHS
associated with an arbitrary self-adjoint Hilbert-Schmidt operator, we focus here on the
RKHS associated with (K ? K)β , for some positive β. More precisely, assuming that K is
Hilbert-Schmidt and denoting by (λj , φj , ψ j ) its singular system, we define the self-adjoint
operator (K ? K)β by:
                                              ∞
                                              X
                                      β                  ­     ®
                                  ?
                               (K K) ϕ =             λ2β
                                                      j   ϕ, φj φj .
                                               j=1


Definition 3.4. The β−regularity space of the compact operator K is defined for all
β > 0, as the RKHS associated with (K ? K)β , that is the space:
                      (                           ∞ ­        ®2    )
                                   ⊥
                                                 X     ϕ, φj
                 Φβ = ϕ ∈ N (K) such that                       <∞            (3.8)
                                                 j=1    λ2β
                                                          j


where a Hilbert structure is being defined through the inner product

                                             ∞ ­
                                             X
                                                     ®­     ®
                                                f, φj g, φj
                                 hf, giβ =
                                             j=1        λ2β
                                                         j


for f and g ∈ Φβ .


                                               36
    Note however that the construction of RKHS considered here is slightly more general
than the one put forward in Nashed and Wahba (1974) since we start from elements of a
general Hilbert space, not limited to be a L2 space of functions defined on some interval of
the real line. This latter example will be made explicit in Section 6. Moreover, the focus
of our interest here will only be the regularity spaces associated with the true unknown
value K0 of the operator K. Then, the identification assumption will ensure that all the
regularity spaces are dense in H :

Proposition 3.5.© ªUnder the identification assumption N (K) = {0}, the sequence of
eigenfunctions φj associated with the non-zero singular values λj defines a Hilbert
basis of H. In particular,
                 © ª       all the regularity spaces Φβ , β > 0, contain the vectorial space
spanned by the φj and, as such, are dense in H .

    Proposition 3.5. is a direct consequence of the singular value decomposition (2.9).
Generally speaking, when β increases, Φβ , β > 0, is a decreasing family of subspaces of
H. Hence, β may actually be interpreted as the regularity level of the functions, ϕ, as
illustrated by the following result.

Proposition 3.6. Under the identification assumption (N (K) = {0}), for any β > 0,
                                        h       β
                                                  i
                               Φβ = R (K ∗ K) 2 .

In particular, Φ1 = R (K ∗ ) .
                                                                  β
                                                             ∗
Proof.
P∞ β ­ By ®definition, the elements of the range of (K K) can be written f =
                                                                 2


   j=1 λj ϕ, φj φj for some ϕ ∈ H. Note that this decomposition also describes the range
of K ∗ for β = 1. Then:
                           X∞ ­      ®2
                                               X∞
                       2       ϕ, φj               ­     ®2
                   kf kβ =        2β
                                        λ 2β
                                          j  =      ϕ, φj = kϕk2 < ∞.
                           j=1  λj             j=1
        h        β
                   i
Hence R (K ∗ K) 2 ⊂ Φβ .
   Conversely, for any ϕ ∈ Φβ , one can define:
                                        X∞ ­       ®
                                             ϕ, φj
                                   f=                φj
                                        j=1   λβj
                 β       P∞ ­        ®                                          h        β
                                                                                           i
and then (K ∗ K) 2 f =    j=1 ϕ, φ j   φj = ϕ since N (K) = {0}. Hence, Φ β ⊂ R  (K ∗
                                                                                      K) 2 .




    Since we mainly consider operators, K, which are integral operators with continu-
                                           β
ous kernels, applying the operator (K ∗ K) 2 has a smoothing effect, which is stronger for
larger β. This is the reason why the condition ϕ ∈ Φβ qualifies the level, β, of regu-
larity or smoothness of ϕ. The associated smoothness properties are studied in further

                                             37
details in Loubes and Vanhems (2003). The space Φ1 of functions is also put forward
in Schaumburg (2004) when K denotes the conditional expectation operator for a con-
tinuous time Markov process Xt with Levy type generator sampled in discrete time. He
shows that whenever a transformation ϕ(Xt ) of the diffusion process is considered with
ϕ ∈ Φ1 , the conditional expectation operator E[ϕ(Xt+h ) |Xt ] admits a convergent power
series expansion as exponential of the infinitesimal generator.
    The regularity spaces Φβ are of interest here as Hilbert spaces (included in H but
endowed with another scalar product) where our operator equation (3.2) is going to be-
come well-posed. More precisely, let us also consider the family of regularity spaces Ψβ
associated with the compact operator K ∗ :
                        (                            ∞ ­        ®2   )
                                                    X    ψ, ψ j
                  Ψβ = ψ ∈ N (K ? )⊥ such that                     <∞
                                                    j=1   λ2β
                                                            j


Ψβ is a Hilbert space endowed with the inner product:
                                 ­     ®­      ®
                           P∞ F, ψ j G, ψ j
Definition 3.7. hF, Giβ = j=1                    for F and G ∈ Ψβ .
                                      λ2β
                                        j


   Note that the spaces Ψβ are not in general dense in E since N (K ? ) 6= {0}. But they
describe well the range of K when K is restricted to some regularity space:

Proposition 3.8. Under the identification assumption N (K) = {0}, K(Φβ ) = Ψβ+1 for
all positive β. In particular, Ψ1 = R (K) .

Proof. We know     from® Proposition 3.6 that, when ϕ ∈ Φβ , it can be­written:
       P∞ β ­                                               P                  ®
    ϕ = j=1 λj f, φj φj for some f ∈ H. Then, Kϕ = ∞              λ
                                                              j=1 j
                                                                    β+1
                                                                        f, φ j   ψ j ∈ Ψβ+1 .
Hence K(Φβ ) ⊂ Ψβ+1 .
© Conversely,
    ª          since according to a singular value decomposition like (2.9), the sequence
 ψ j defines a basis of N (K ? )⊥ , any element of Ψβ+1 can be written as

                          X∞                   X∞ ­        ®2
                              ­      ®              ψ, ψ j
                       ψ=      ψ, ψ j ψ j with        2β+2
                                                              < ∞.
                          j=1                  j=1  λ j

                         P∞              ­      ®
Let us then define ϕ =     j=1 (1/λj )    ψ, ψ j φj .We have

                              ∞ ­
                              X
                                       ®2        ∞ ­
                                                 X
                                                           ®2
                                 ϕ, φj              ψ, ψ j
                                             =                  <∞
                              j=1   λ2β
                                     j           j=1   λ2β+2
                                                        j

                                            P∞ ­       ®
and thus ϕ ∈ Φβ . Moreover, Kϕ =             j=1 ψ, ψ j ψ j = ψ. This proves that Ψβ+1 ⊂
K(Φβ ).



                                                 38
    Therefore, when viewed as an operator from Φβ into Ψβ+1 , K has a closed range
defined by the space Ψβ+1 itself. It follows that the ill-posed problem

                                      K : H→E
                                     Kϕ = r

may be viewed as well-posed relative to the subspaces Φβ into Ψβ+1 and their associated
norms. This means that
    (i) First, we think about the pseudosolution ϕ = K † r as a function of r evolving in
Ψβ+1 , for some positive β.
    (ii) Second, continuity of ϕ = K † r with respect to r must be understood with respect
                              1/2                     1/2
to the norms krkβ+1 = hr, riβ+1 and kϕkβ = hϕ, ϕiβ
    To get an intuition of this result, it is worth noticing that these new topologies define
another adjoint operator Kβ? of K characterized by:
                                                  ­       ®
                                  hKϕ, ψiβ+1 = ϕ, Kβ? ψ β ,

and thus:
                                         ∞
                                         X        ­      ®
                               Kβ? ψ =     (1/λj ) ψ, ψ j φj .
                                         j=1

In particular, Kβ? ψ j = (1/λj )φj . In other words, all the eigenvalues of Kβ? K and KKβ?
are now equal to one and the pseudosolution is defined as:
                                                  X∞ ­         ®
                                                       r, ψ  j
                             ϕ = Kβ† r = Kβ? r =                 φj .
                                                  j=1
                                                         λ j


The pseudosolution depends continuously on r because Kβ† = Kβ? is a bounded operator
for the chosen topologies; it has actually a unit norm.
    For the purpose of econometric estimation, we may be ready to assume that the true
unknown value ϕ0 belongs to some regularity space Φβ . This just amounts to an additional
smoothness condition about our structural functional parameter of interest. Then, we are
going to take advantage of this regularity assumption through the rate of convergence of
some regularization bias as characterized in the next subsection.
    Note finally that assuming ϕ0 ∈ Φβ , that is r0 ∈ Ψβ+1 for some positive β, is nothing
but a small reinforcement of the common criterion of existence of a solution, known as
the Picard’s theorem (see e.g. Kress, 1999, page 279), which states that r0 ∈ Ψ1 = R (K).
The spaces Φβ and Ψβ are strongly related to the concept of Hilbert scales, see Natterer
(1984), Engl, Hanke, and Neubauer (1996), and Tautenhahn (1996).

3.3. Regularization schemes
As pointed out in Subsection 3.1, the ill-posedness of an equation of the first kind with
a compact operator stems from the behavior of the sequence of singular values, which

                                               39
converge to zero. This suggests trying to regularize the equation by damping the explosive
asymptotic effect of the inversion of singular values. This may be done in at least two
ways:
    A first estimation strategy consists in taking advantage of the well-posedness of the
problem when reconsidered within regularity spaces. Typically, a sieve kind of approach
may be designed, under the maintained assumption that the true unknown value r0 ∈ Ψβ+1
for some positive β, in such a way that the estimator r̂n evolves, when n increases, in
an increasing sequence of finite dimensional subspaces of Ψβ+1 . Note however that, when
the operator K is unknown, the constraint r̂n ∈ N (K ? )⊥ may be difficult to implement.
Hence, we will not pursue this route any further.
    The approach adopted in this chapter follows the general regularization
                                                                       ©     ª framework
of Kress (1999, Theorem 15.21). It consists
                                       ©       in replacing
                                                    ª       a sequence  1/µj  of explosive
inverse singular values by a sequence q(α, µj )/µj where the damping function q(α, µ)
is chosen such that:
    (i) {q(α, µ)/µ} remains bounded when µ goes to zero (damping effect),
    (ii) for any given µ : Limα−→0 q(α, µ) = 1 (asymptotic unbiasedness).
    Since our inverse problem of interest can be addressed in two different ways:

                                ϕ = K † r = (K ? K)† K ? r,

the regularization scheme can be applied either to K † (µj = λj ) or to (K ? K)† (µj =
λ2j ). The latter approach is better suited for our purpose since estimation errors will
be considered below at the level of (K ? K) and K ? r respectively. We maintain in this
subsection the identification assumption N (K) = {0}. We then define:

Definition 3.9. A regularized version ϕα = Aα K ? r of the pseudosolution ϕ = (K ? K)† K ? r
is defined as:
                    X∞                            X∞
                        1 ¡      2
                                   ¢­ ?     ®         1 ¡       ¢­     ®
             ϕα   =      2 q α, λj   K r, φj φj =       q α, λ2j r, ψ j φj           (3.9)
                       λ
                    j=1 j
                                                     λ
                                                  j=1 j
                    ∞
                    X  ¡      ¢­    ®
                  =   q α, λ2j ϕ, φj φj
                     j=1

where the real-valued function, q, is such that

                                    |q (α, µ)| ≤ d (α) µ                            (3.10)
                                 lim q (α, µ) = 1.
                                 α→0

   Note that (3.9) leaves unconstrained the values of the operator Aα on the space
R (K ∗ )⊥ = N (K) . However, since N (K) = {0}, Aα is uniquely defined as
                                   X∞
                                       1 ¡      2
                                                  ¢­      ®
                            Aα ϕ =      2 q α, λj    ϕ, φj φj                       (3.11)
                                      λ
                                   j=1 j



                                            40
for all ϕ ∈ H. Note that as q is real, Aα is self-adjoint. Then by (3.10), Aα is a bounded
operator from H into H with
                                         kAα k ≤ d (α) .                               (3.12)
In the following, we will always normalize the exponent of the regularization parameter
α such that αd (α) has a positive finite limit c when α goes to zero. By construction,
Aα K ∗ Kϕ → ϕ as α goes to zero. When a genuine solution exists (r = Kϕ), the regular-
ization induces a bias:
               X∞                                        ∞
                                                         X
                   £      ¡    2
                                 ¢¤ ­       ®              £      ¡       ¢¤ ­      ®
     ϕ − ϕα =        1 − q α, λj      r, ψ j (φj /λj ) =     1 − q α, λ2j      ϕ, φj φj (3.13)
               j=1                                       j=1

The squared regularization bias is
                                           ∞
                                           X
                                     2               ¡      ¢­    ®2
                           kϕ − ϕα k =             b2 α, λ2j ϕ, φj ,                   (3.14)
                                           j=1
          ¡     ¢          ¡    ¢
where b α, λ2j = 1 − q α, λ2j is the bias function characterizing the weight of the
                    ­     ®
Fourier coefficient ϕ, φj . Below, we show that the most common regularization schemes
fulfill the above conditions. We characterize these schemes through the definitions of the
damping weights q (α, µ) or equivalently, of the bias function b (α, µ) .
   Example (Spectral cut-off ).
   The spectral cut-off regularized solution is
                                       X 1 ­          ®
                                ϕα =            r, ψ j φj .
                                       2
                                             λj
                                         λj ≥α/c

The explosive influence of the factor (1/µ) is filtered out by imposing q (α, µ) = 0 for
small µ , that is |µ| < α/c. α is a positive regularization parameter such that no bias is
introduced when |µ| exceeds the threshold α/c :
                                                  ½
                                                     1 if |µ| ≥ α/c,
                       q (α, µ) = I {|µ| ≥ α/c} =
                                                      0 otherwise.
For any given scaling factor c, the two conditions
                                                ¡ of ¢Definition 3.9. are then satisfied
(with d(α) = c/α) and we get a bias function b α, λ2 which is maximum (equal to 1)
when λ2 < α/c and minimum (equal to 0) when λ2 ≥ α/c.
   Example (Landweber-Fridman).

                                         1/α−1
                                          X
                             Aα = c              (I − cK ∗ K)l K ∗ ,
                                          l=0
                                         1/α−1
                                          X
                             ϕα = c              (I − cK ∗ K)l K ∗ r.
                                          l=0


                                                 41
The basic idea is similar to spectral cut-off but with a smooth bias function. Of course,
one way¡ to2 ¢make the bias2 function continuous while meeting the conditions b (α, 0) = 1
and b ¡α, λ ¢ = 0 for λ > α/c would be to consider a piecewise linear bias function
with b α, λ2 = 1 − (c/α)λ2 for λ2 ≤ α/c . Landweber-Fridman regularization makes it
smooth, while keeping the same level and the same slope at λ2 = 0 and zero bias for large
      ¡     ¢ ¡         ¢1/α
λ2 , b α, λ2 = 1 − cλ2        for λ2 ≤ 1/c and zero otherwise, that is
                                    ½
                                                1 if |µ| > 1/c,
                       q (α, µ) =
                                        1 − (1 − cµ)1/α for |µ| ≤ 1/c.

For any given scaling factor c, the two conditions of Definition 3.9 are then satisfied with
again d(α) = c/α.

   Example (Tikhonov regularization).
   Here, we have
                              ³α           ´−1
                       Aα =       I + K ∗K      ,
                                c
                              ³α           ´−1
                       ϕα =       I + K ∗K      K ∗r
                                c
                              X∞
                                      λj    ­      ®
                           =        2        r, ψ j φj
                              j=1 j
                                   λ + α/c

where c is some scaling factor. In contrast to the two previous examples, the bias function
is never zero but decreases toward zero at a hyperbolic rate (when λ2 becomes infinitely
large), while still starting from 1 for λ2 = 0 :
                                     ¡     ¢        (α/c)
                                    b α, λ2 =                .
                                                  (α/c) + λ2

that is:
                                     ¡     ¢          λ2
                                    q α, λ2 =
                                                  (α/c) + λ2

For any given scaling factor c, the two conditions of Definition 3.9 are again satisfied with
d(α) = c/α.

    We are going to show now that the regularity spaces Φβ introduced in the previous
subsection are well-suited for controlling the regularization bias. The basic idea is a
straightforward consequence of (3.15):

                                              ¡      ¢
                          kϕ − ϕα k2 ≤ [sup b2 α, λ2j λ2β     2
                                                       j ] kϕkβ                       (3.15)
                                             j



                                                 42
Therefore, the rate of convergence (when the regularization parameter α goes to zero) of
the regularization bias will be controlled, for ϕ ∈ Φβ , by the rate of convergence of
                                                 ¡     ¢
                                 Mβ (α) = sup b2 α, λ2j λ2β
                                                          j
                                           j


The following definition is useful to characterize the regularization schemes.

Definition 3.10 (Geometrically ¡unbiased ¢    regularization). A regularization scheme
                                       2
characterized by a bias function b α, λ is said to be geometrically unbiased at order
β > 0 if:
                                     ¡     ¢
                               sup b2 α, λ2 λ2β = O(αβ ).
                                λ2

Proposition 3.11. The spectral cut-off and the Landweber-Fridman regularization schemes
are geometrically unbiased at any positive order β, whereas Tikhonov regularization
scheme is geometrically unbiased at all order β ∈ (0, 2]. For Tikhonov regularization
and β ≥ 2, we have

                                     Mβ (α) = O(α2 ).

Proof.  In the spectral cut-off case, there is no bias for λ2j > α/c while the bias is
maximum, equal to one, for smaller λ2j . Therefore:

                                     Mβ (α) ≤ (α/c)β .

   In the Landweber-Fridman case, there is no bias for λ2j > 1/c but a decreasing
     ¡        ¢1/α
bias 1 − cλ2j      for λ2j increasing from zero to (1/c). Therefore, Mβ (α) ≤ [Supλ2 ≤(1/c)
¡        ¢2/α 2β
 1 − cλ2     λ ]. The supremum is reached for λ2 =(β/c)[β + (2/α)]−1 and gives:

                      Mβ (α) ≤ (β/c)β [β + (2/α)]−β ≤ (β/2)β (α/c)β .

     In the Tikhonov case, the bias decreases hyperbolically and then Mβ (α) ≤ supλ2
    (α/c)
[ (α/c)+λ2 ]2 λ2β . For β < 2, the supremum is reached for λ2 = (βα/c)[2 − β]−1 and thus

                           Mβ (α) ≤ λ2β ≤ [β/(2 − β)]β (α/c)β .

As K is bounded, its largest eigenvalue is bounded. Therefore, for β ≥ 2, we have
                                                        2(β−2)
                               Mβ (α) ≤ (α/c)2 sup λj            .
                                                    j




                                               43
Proposition 3.12. Let K : H → E be an injective compact operator. Let us assume that
the solution ϕ of Kϕ = r lies in the β−regularity space Φβ of operator K, for some positive
β. Then, if ϕα is defined by a regularization scheme geometrically unbiased at order β,
we have
                                                   ¡ ¢
                                   kϕα − ϕk2 = O αβ .

    Therefore, the smoother the function ϕ of interest (ϕ ∈ Φβ for larger β) is, the faster
the rate of convergence to zero of the regularization bias will be. However, a degree of
smoothness larger than or equal to 2 (corresponding to the case ϕ ∈ R [(K ∗ K)])     may be
                                                                                ¡ min(β,2) ¢
                                                                          2
useless in the Tikhonov case. Indeed, for Tikhonov, we have kϕα − ϕk = O α                   .
This is basically the price to pay for a regularization procedure, which is simple to imple-
ment and rather intuitive (see Subsection 3.4 below) but introduces a regularization bias
which never vanishes completely.
    Both the operator interpretation and the practical implementation of smooth regular-
ization schemes (Tikhonov and Landweber-Fridman) are discussed below.

3.4. Operator Interpretation and Implementation
In contrast to spectral cut-off, the advantage of Tikhonov and Landweber-Fridman regu-
larization schemes is that they can be interpreted in terms of operators. Their algebraic
expressions only depend on the global value of (K ∗ K) and (K ∗ r), and not of the singular
value decomposition. An attractive feature is that it implies that they can be implemented
from the computation of sample counterparts (K̂n K̂n∗ ) and (K̂n∗ r̂n ) without resorting to
an estimation of eigenvalues and eigenfunctions.
    The Tikhonov regularization is based on

                       (αn I + K ∗ K) ϕαn = K ∗ r ⇔
                                            X∞
                                                    λj   ­       ®
                                      ϕαn =               r, ψ j   φj
                                            j=1 j
                                                 λ2 + αn
                                         q
for a penalization term αn and λj =       λ2j , while, for notational simplicity, the scaling
factor c has been chosen equal to 1.

   The interpretation of αn as a penalization term comes from the fact that ϕα can be
seen as the solution of

      ϕα = arg min kKϕ − rk2 + α kϕk2 = hϕ, K ∗ Kϕ + αϕ − 2K ∗ ri + krk2 .
                  ϕ

To see this, just compute the Frechet derivative of the above expression and note that it
is zero only for K ∗ Kϕ + αϕ = K ∗ r.
    This interpretation of Tikhonov regularization in terms of penalization may suggest to
look for quasi-solutions (see Kress, 1999, section 16-3), that is solutions of the minimiza-
tion of kKϕ − r k subject to the constraint that the norm is bounded by kϕk ≤ ρ for

                                             44
given ρ . For the purpose of econometric estimation, the quasi-solution may actually be
the genuine solution if the specification of the structural econometric model entails that
the function ϕ of interest lies in some compact set (Newey and Powell, 2003).
    If one wants to solve directly the first order conditions of the above minimization,
it is worth mentioning that the inversion of the operator (αI + K ∗ K) is not directly
well-suited for iterative approaches since, typically for small α, the series expansion of
[I + (1/α)K ∗ K]−1 does not converge. However, a convenient choice of the estimators
K̂n and K̂n∗ may allow to replace the inversion of infinite dimensional operators by the
inversion of finite dimensional matrices.

    More precisely, when K̂n and K̂n∗ can be written as in (2.21) and (2.22), one can write
directly the finite sample problem as:
                                 ³                ´
                                   αn I + K̂n∗ K̂n ϕ = K̂n∗ r ⇔
                                   Ln
                                   X                                      Ln
                                                                          X
                         αn ϕ +             al0 (ϕ) bl (εl0 ) η l =             bl (r) η l         (3.16)
                                  l,l0 =1                                 l=1

1) First we compute al (ϕ) :
   Apply aj to (3.16):
                                 Ln
                                 X                                        Ln
                                                                          X
                   αn aj (ϕ) +             a (ϕ) bl (ε ) aj (η l ) =
                                            l0           l0                     bl (r) aj (η l )   (3.17)
                                 l,l0 =1                                  l=1

(3.17) can be rewritten as

                                             (αn I + A) a = b
            £                                       ¤0
where a =       a1 (ϕ) a2 (ϕ) · · ·         aLn (ϕ) , A is the Ln × Ln −matrix with principal
element
                                                  Ln
                                                  X
                                       Aj,l0 =          bl (εl0 ) aj (η l )
                                                  l=1

and
                                              P                          
                                                     l bl (r) a1 (η l )
                                                           ..           
                                    b=                      .           .
                                                 P
                                                     l bl (r) aLn (η l )

   2) From (3.16), we have
                               "L                  Ln
                                                                             #
                             1 X  n               X
                       ϕ̂n =        bl (r) η l −        al0 (ϕ) bl (εl0 ) η l .
                             αn l=1                 0
                                                 l,l =1



                                                        45
    Landweber-Fridman regularization
    The great advantage of this regularization scheme is that, not only it can be written
directly in terms of quantities (K ∗ K) and (K ∗ r), but also the resulting operator problem
can be solved by a simple iterative procedure, with a finite number of steps. To get this,
one has to choose, first a sequence of regularization parameters, αn , such that (1/αn ) is
an integer and second the scaling factor c so that 0 < c < 1/ kKk2 . This latter condition
may be problematic to implement since the norm of the operator K may be unknown.
The refinements of an asymptotic theory able to accommodate a first step estimation of
kKk before the selection of an appropriate c is beyond the scope of this chapter. Note
however that, in several cases of interest, kKk is known a priori even though the operator
K itself is unknown. For example, if K is the conditional expectation operator, kKk = 1.
    The advantage of the condition c < 1/ kKk2 is to guarantee a unique expression for
                    ¡     ¢ ¡          ¢1/α
the bias function b α, λ2 = 1 − cλ2         since, for all eigenvalues, λ2 ≤ 1/c. Thus, when
(1/α) is an integer :
                                       ∞
                                       X 1                   ­      ®
                              ϕα =                 q(α, λ2j ) r, ψ j φj
                                       j=1
                                             λj

with
                             ¡      ¢     ¡         ¢1/α
                            q α, λ2j = 1 − 1 − cλ2j
                                                         1/α−1
                                                         X ¡             ¢l
                                            =     cλ2j           1 − cλ2j .
                                                          l=0

Thus,
                                   1/α−1 ∞
                                    X X              ¡        ¢l ­   ®
                        ϕα = c                     λj 1 − cλ2j r, ψ j φj
                                      l=0    j=1
                                   1/α−1 ∞
                                    X X               ¡        ¢l ­  ®
                             = c                   λ2j 1 − cλ2j ϕ, φj φj
                                      l=0    j=1
                                   1/α−1
                                      X
                             = c             (I − cK ∗ K)l K ∗ Kϕ.
                                      l=0

Therefore, the estimation procedure will only resort to estimators of K ∗ K and of K ∗ r,
without need for either the singular value decomposition nor any inversion of operators.
For a given c and regularization parameter αn , the estimator of ϕ is
                                      1/αn −1 ³                    ´l
                                       X
                            ϕ̂n = c                I − cK̂n∗ K̂n        K̂n∗ r̂n .
                                       l=0



                                                    46
ϕ̂n can be computed recursively by
                      ³            ´
               ϕ̂l,n = I − cK̂n K̂n ϕ̂l−1,n + cK̂n∗ r̂n , l = 1, 2, ..., 1/αn − 1.
                              ∗



starting with ϕ̂0,n = cK̂n∗ r̂n . This scheme is known as the Landweber-Fridman iteration
(see Kress, 1999, p. 287).

3.5. Estimation bias
Regularization schemes have precisely been introduced because the right hand side r
of the inverse problem Kϕ = r is generally unknown and replaced by an estimator.
Let us denote by r̂n an estimator computed from an observed sample of size n. As
announced in the introduction, a number of relevant inverse problems in econometrics are
even more complicated since the operator K itself is unknown. Actually, in order to apply
a regularization scheme, we may© need not only an estimator  ª       of K but also of its adjoint
K ∗ and of its singular systemn λj , φj , ψ j : j = 1, 2, ... o. In this subsection, we consider
such estimators K̂n , K̂n∗ , and λ̂j , φ̂j ,ψ̂ j : j = 1, ..., Ln as given. We also maintain the
identification assumption, so that the equation Kϕ = r defines without ambiguity a true
unknown value ϕ0 .
    If ϕα = Aα K ∗ r is the chosen regularized solution, the proposed estimator ϕ̂n of ϕ0 is
defined by

                                         ϕ̂n = Âαn K̂n∗ r̂n .                            (3.18)

Note that the definition of this estimator involves two decisions. First, we need to select a
sequence (αn ) of regularization parameters so that limn→∞ αn = 0 (possibly in a stochastic
sense in the case of a data-driven regularization) in order to get a consistent estimator
of ϕ0 . Second, for a given αn , we estimate the second order regularization scheme Aαn K ∗
by Âαn K̂n∗ . Generally speaking, Âαn is defined from
                                                      ­ (3.9)® where the singular values are
replaced by their estimators and the inner products ϕ, φj are replaced by their empirical
counterparts (see Subsection 2.5.3). Yet, we have seen above that in some cases, the
estimation of the regularized solution does not involve the estimators λ̂j but only the
estimators K̂n and K̂n∗ .
    In any case, the resulting estimator bias ϕ̂n − ϕ0 has two components:

                               ϕ̂n − ϕ0 = ϕ̂n − ϕαn + ϕαn − ϕ0 .                          (3.19)

While the second component ϕαn − ϕ0 defines the regularization bias characterized in
the Subsection 3.3, the first component ϕ̂n − ϕαn is the bias corresponding to the es-
timation of the regularized solution of ϕαn . The goal of this subsection is to point out
a set of statistical assumptions about the estimators K̂n , K̂n∗ , and°r̂n that allow
                                                                                  °   to up-
per bound (asymptotically)   the specific estimation bias magnitude   °ϕ̂n − ϕα ° when the
                     °        °                                                 n
regularization bias °ϕαn − ϕ0 ° is controlled.

                                                 47
Definition 3.13 (Smooth regularization). A regularization scheme is said to be smooth
when
  °³                      ´ °             °              °°         °
  °                           °           ° ∗         ∗ °°
  ° Âαn K̂n K̂n − Aαn K K ϕ0 ° ≤ d (αn ) °K̂n K̂n − K K ° ϕαn − ϕ0 ° (1 + εn ) (3.20)
           ∗            ∗


           ³°                 °´
            °                 °
with εn = O °K̂n∗ K̂n − K ∗ K ° .

Proposition 3.14 (Estimation bias). If ϕα = Aα K ∗ r is the regularized solution con-
formable to Definition 3.9 and ϕ̂n = Âαn K̂n∗ r̂n , then
                  °           °
                  °ϕ̂n − ϕα °                                                       (3.21)
                        °   n
                                               ° °³                           ´ °
                        °                      ° °                                °
             ≤ d (αn ) °K̂n∗ r̂n − K̂n∗ K̂n ϕ0 ° + ° Âαn K̂n∗ K̂n − Aαn K ∗ K ϕ0 °

In addition, both the Tikhonov and Landweber-Fridman regularization schemes are smooth.
In the Tikhonov case, εn = 0 identically.

Proof.

               ϕ̂n − ϕαn = Âαn K̂n∗ r̂n − Aαn K ∗ r
                                      ³            ´
                         = Âαn K̂n∗ r̂n − K̂n ϕ0 + Âαn K̂n∗ K̂n ϕ0 − Aαn K ∗ Kϕ0

Thus,
     °         °           °                     ° °                              °
     °ϕ̂n − ϕα ° ≤ d (αn ) °  ∗         ∗        ° °         ∗               ∗    °
                           °K̂n r̂n − K̂n K̂n ϕ0 ° + °Âαn K̂n K̂n ϕ0 − Aαn K Kϕ0 ° .
                 n



1) Case of Tikhonov regularization:

                         Âαn K̂n∗ K̂n ϕ0 − Aαn K ∗ Kϕ0                                 (3.22)
                              ³                 ´       ³     ´
                       = Âαn K̂n∗ K̂n − K ∗ K ϕ0 + Âαn − Aαn K ∗ Kϕ0 .

Since, in this case,

                                     Aα = (αI + K ∗ K)−1 ,

the identity

                                B −1 − C −1 = B −1 (C − B)C −1

gives
                                             ³                ´
                            Âαn − Aαn = Âαn K ∗ K − K̂n∗ K̂n Aαn



                                               48
and thus,
               ³             ´              ³               ´
                   Âαn − Aαn K ∗ Kϕ0 = Âαn K ∗ K − K̂n∗ Kn Aαn K ∗ Kϕ0                (3.23)
                                            ³               ´
                                               ∗        ∗
                                      = Âαn K K − K̂n K̂n ϕαn .

(3.22) and (3.23) together give

                               Âαn K̂n∗ K̂n ϕ0 − Aαn K ∗ Kϕ0
                                    ³                 ´¡      ¢
                             = Âαn K̂n∗ K̂n − K ∗ K ϕ0 − ϕαn ,

which shows that Tikhonov regularization is smooth with εn = 0.
   2) Case of Landweber-Fridman regularization:
   In this case,
                               ∞ h
                               X     ¡         ¢1/α i
                        ϕα   =    1 − 1 − cλ2j        < ϕ0 , φ j > φj
                                  j=1
                               h                 i
                                          ∗  1/α
                             = I − (I − cK K)      ϕ0 .

Thus,

               Â K̂ ∗ K̂ ϕ − Aαn K ∗ Kϕ0
               · αn n n 0         ³             ´1/αn ¸
                          ∗ 1/αn           ∗
             = (I − cK K)        − I − cK̂n K̂n         ϕ0
                 ·      ³         ´1/αn                     ¸
                                                      −1/αn
                               ∗
               + I − I − cK̂n K̂n                ∗
                                        (I − cK K)            (I − cK ∗ K)1/αn ϕ0
                 ·      ³         ´1/αn                     ¸
                               ∗                 ∗    −1/αn ¡           ¢
               + I − I − cK̂n K̂n       (I − cK K)             ϕ0 − ϕαn .

Then, a Taylor expansion gives:
                         °    ³                ´1/αn                      °
                         °                                                °
                         °I − I − cK̂n K̂n∗
                                                      (I − cK   ∗
                                                                  K)−1/αn °
                         °                                                °
                         ° ³                      ´ °
                         ° c                        °
                     = ° ° αn   K̂n
                                   ∗
                                     K̂n −  K ∗
                                                K   ° (1 + εn )
                                                    °
             ³°               °´
               ° ∗          ∗ °
with εn = O °K̂n K̂n − K K ° .
   The result follows with d(α) = c/α.
   Note that we are not able to establish (3.20) for the spectral cut-off regularization. In
that case, the threshold introduces a lack of smoothness, which precludes a similar Taylor
expansion based argument as above.
   The result of Proposition 3.14 jointly with (3.19) shows that two ingredients matter in
controlling the estimation bias kϕ̂n − ϕ0 k . First, the choice of a sequence of regularization

                                               49
parameters,
°           ° αn , will govern the speed of convergence to zero of the regularization bias
°ϕα − ϕ0 ° (for ϕ0 in a given Φβ ) and the speed of convergence to infinity of d (αn ).
    n
Second,
°         nonparametric
                      °    estimation
                            °          of K °and r will determine the rates of convergence of
° ∗                   °     ° ∗              °
°K̂n r̂n − K̂n K̂n ϕ0 ° and °K̂n K̂n − K ∗ K ° .
             ∗



4. Asymptotic properties of solutions of integral equations of the
   first kind
4.1. Consistency
Let ϕ0 be the solution of Kϕ = r. By abuse of notation, we denote Xn = O (cn ) for
positive sequences {Xn } and {cn }, if the sequence Xn /cn is upper bounded.
   We maintain the following assumptions:
A1. K̂n , r̂n are consistent estimators of K and r.
    °                  °      ³ ´
    ° ∗             ∗ °
A2. °K̂n K̂n − K K ° = O a1n
    °                     °     ³ ´
    ° ∗                   °
A3. °K̂n r̂n − K̂n K̂n ϕ0 ° = O b1n
                  ∗


    As before ϕα = Aα K ∗ r is the regularized solution where Aα is a second order regular-
ization scheme and ϕ̂n = Âαn K̂n∗ r̂n . Proposition 4.1 below follows directly from Proposi-
tion 3.9 and Definition 3.6 (with the associated normalization rule αd(α) = O(1)):
Proposition 4.1. When applying a smooth regularization scheme, we get:
                          kϕ̂n − ϕ0 k
                            µ           µ          ¶            ¶
                                 1         1         °        °
                        = O           +         + 1 °ϕαn − ϕ0 ° .
                               α n bn     αn an
    Discussion on the rate of convergence:
    The general idea is that the fastest possible rate of convergence in probability
                                                                                 °         of
                                                                                           °
kϕ̂n − ϕ0 k to zero should be the rate of convergence of the regularization bias °ϕαn − ϕ0 °.
Proposition 4.1 shows that these two rates of convergence will precisely coincide when the
rate of convergence to zero of the regularization parameter αn is chosen sufficiently slow
with respect to both the rate of convergence an of the sequence of approximations of the
true operator and the rate of convergence bn of the estimator of the right-hand side of
the operator equation. This is actually a common strategy when both the operator and
the right-hand side of the inverse problem have to be estimated (see e.g. Vapnik (1998),
corollary p. 299).
° To get°−1  this, it is first obvious that αn bn must go to infinity at least as fast as
°ϕα − ϕ0 ° . For ϕ0 ∈ Φβ , β > 0, and a geometrically unbiased regularization scheme,
    n
this means that:
                                        α2n b2n ≥ α−β
                                                   n


                                             50
                     2
                 −
that is αn ≥ bn β+2 . To get the fastest possible rate of convergence under this constraint,
we will choose:
                                                      2
                                                 −
                                      αn = bn β+2 .
                                                  °        °
Then, the rate of convergence of kϕ̂n − ϕ0 k and °ϕαn − ϕ0 ° will coincide if and only if
       2
   −
an bn β+2 is bounded away from zero. Thus, we have proved:

Proposition 4.2. Consider a smooth regularization scheme, which is geometrically un-
biased of order β > 0 with estimators of K and r conformable to Assumptions A1, A2,
                 2
             −
A3, and an bn β+2 bounded away from zero. For ϕ0 ∈ Φβ , the optimal choice of the regu-
                                    2
                                −
larization parameter is αn = bn β+2 , and then,
                                                      µ            ¶
                                                           − β
                                    kϕ̂n − ϕ0 k = O       bn β+2       .

                                                                               − min( β+2
                                                                                       2
                                                                                          , 21 )
For Tikhonov regularization, when ϕ0 ∈ Φβ , β > 0, provided an bn                                  is bounded
                          − min( β+2
                                  2
                                     , 12 )
away from zero and αn = bn                  , we have
                                                  µ                   ¶
                                                    − min( β+2
                                                            β
                                                               , 12 )
                           kϕ̂n − ϕ0 k = O bn                           .

   Note that the only condition about the estimator of the operator K ∗ K is that its rate
                                                                           2
of convergence, an , is sufficiently fast to be greater than bnβ+2 . But, under this condition,
the rate of convergence of ϕ̂n does not depend upon the accuracy of the estimator of K ∗ K.
Of course, the more regular the unknown function ϕ0 is, the larger β is and the easier
it will be to meet the required condition. Generally speaking, the condition will involve
the relative bandwidth sizes in the nonparametric estimation of K ∗ K and K ∗ r. Note that
if, as it is generally the case for √
                                    a convenient bandwidth choice (see e.g. subsection 5.4),
bn is the parametric rate (bn = n), an must be at least n1/(β+2) . For β not too small,
this condition will be fulfilled by optimal nonparametric rates. For instance, the optimal
unidimensional nonparametric rate, n2/5 , will work as soon as β ≥ 1/2.
     The larger β is, the faster© the
                                    ª rate of convergence of ϕ̂n is. In the case
                                                                             √ where ϕ0 is a
finite linear combination of φj (case where β is infinite), and bn = n, an estimator
based on a geometrically unbiased regularization scheme (such as Landweber-Fridman)
achieves the parametric rate of convergence. We are not able to obtain such a fast rate
for Tikhonov, therefore it seems that if the function ϕ0 is suspected to be very regular,
Landweber-Fridman is preferable to Tikhonov. However, it should be noted that the rates
of convergence in Proposition 4.2 are upperbounds and could possibly be improved upon.




                                               51
4.2. Asymptotic normality
Asymptotic normality of

                     ϕ̂n − ϕ0 = ϕ̂n − ϕαn + ϕαn − ϕ0
                               = Âαn K̂n∗ r̂n − Aαn K ∗ Kϕ0 + ϕαn − ϕ0

can be deduced from a functional central limit theorem applied to K̂n∗ r̂n − K̂n∗ K̂n ϕ0 .
Therefore, we must reinforce Assumption A3 by assuming a weak convergence in H:
   Assumption WC:
                          ³                      ´
                        bn K̂n∗ r̂n − K̂n∗ K̂n ϕ0 ⇒ N (0, Σ) in H.

   According to (3.21), (3.22), and (3.23), we have in the case of Tikhonov regularization:
                                           h                   i
                                               ∗       ∗
                 bn (ϕ̂n − ϕ0 ) = bn Âαn K̂n r̂n − K̂n K̂n ϕ0                        (4.1)
                                             h               i¡         ¢
                                    +bn Âαn K̂n∗ K̂n − K ∗ K ϕ0 − ϕαn                (4.2)

while an additional term corresponding εn in (3.20) should be added for general regular-
ization schemes. The term (4.1) can be rewritten as

                                    Âαn ξ + Âαn (ξ n − ξ)

where ξ denotes the random variable N (0, Σ) in H and
                                    ³                     ´
                            ξ n = bn K̂n∗ rn − K̂n∗ K̂n ϕ0 .

By definition:
                                   D          E
                                    Âαn ξ, g    d
                                  °            °→  N (0, 1)
                                  ° 1/2        °
                                  °Σ Âαn g °

for all g ∈ H. Then, we may hope to get a standardized normal asymptotic probability
distribution for
                                      hbn (ϕ̂n − ϕ0 ) , gi
                                        °            °
                                        ° 1/2        °
                                        ° Σ    Â  g
                                                 αn °


for vectors g conformable to the following assumption:
    Assumption G
                                     °       °
                                     °       °
                                     °Âαn g °
                                  °             ° = O (1) .
                                  ° 1/2         °
                                  ° Σ   Â    g
                                           αn °



                                              52
   Indeed, we have in this case:
                       ¯D                  E¯            °       °
                       ¯                    ¯            °       °
                       ¯ Âαn (ξ n − ξ) , g ¯  kξ n − ξk °Âαn g °
                            °          °      ≤ °            ° ,
                            ° 1/2      °          ° 1/2      °
                            °Σ Âαn g °           °Σ Âαn g °

                                                         P
which converges to zero in probability because kξ n − ξk → 0 by WC. We are then able to
show:

Proposition 4.3. Consider a Tikhonov regularization. Suppose Assumptions A1, A2,
                                                min(β/2,1)
A3, and WC hold and ϕ0 ∈ Φβ , β > 0, with bn αn             → 0, we have for any g
                                                           n→∞
conformable to G:
                              hbn (ϕ̂n − ϕ0 ) , gi d
                                °            ° → N (0, 1) .
                                ° 1/2        °
                                ° Σ    Â  g
                                         αn °


Proof. From the proof of Proposition 3.9, we have:
                       ­ ¡           ¢ ®
                        bn ϕ̂n − ϕαn , g
                       D       E
                   = Âαn ξ, g
                         D                  E
                       + Âαn (ξ n − ξ) , g
                         D       h               i¡       ¢ E
                       + bn Âαn K̂n∗ K̂n − K ∗ K ϕ0 − ϕαn , g                        (4.3)

in the case of Tikhonov regularization. We already took care of the terms in ξ and ξ n , it
remains to deal with the bias term corresponding to (4.3):
                            D       ³                ´¡        ¢ E
                         bn Âαn K̂n∗ K̂n − K ∗ K ϕ0 − ϕαn , g
                                           °          °
                                           ° 1/2      °
                                           °Σ Âαn g °
                            D³                    ´¡      ¢        E
                                  ∗           ∗
                         bn K̂n K̂n − K K ϕ0 − ϕαn , Âαn g
                     ≤                     °          °
                                           ° 1/2      °
                                           °Σ Âαn g °
                                                            °        °
                           °                    °°          °        °
                           ° ∗                          °   ° Â   g
                                                                 αn °
                                            ∗ °°
                     ≤ bn °K̂n K̂n − K K ° ϕ0 − ϕαn ° °   ° 1/2
                                                                       °
                                                                       °
                                                          °Σ Âαn g °
                           Ã                  !
                                   min(β/2,1)
                              bn α n
                     = O                        .
                                     an




                                            53
    Discussion of Proposition 4.3.
    (i) It is worth noticing that Proposition 4.3 does not deliver in general a weak con-
vergence result for bn (ϕ̂n − ϕ0 ) because it does not hold for all g ∈ H. However, the
condition G is not so restrictive. It just amounts to assume that the multiplication by
Σ1/2 does not modify the rate of convergence of Âαn g.
    (ii) We remark that for g = K ∗ Kh, Âαn g and Σ1/2 Âαn g converge respectively to h and
Σ1/2 h. Moreover, if g 6= 0, Σ1/2 h = Σ1/2 (K ∗ K)−1 g 6= 0. Therefore, in this case, not only
the condition G is fulfilled but we get asymptotic normality with rate of convergence bn ,
that is typically root n. This result is conformable to the theory of asymptotic efficiency
of inverse estimators as recently developed by Van Rooij, Ruymgaart and Van Zwet
(2000). They show that there is a dense linear submanifold of functionals for which the
estimators are asymptotically normal at the root n rate with optimal variance (in the
sense of minimum variance in the class of the moment estimators). We do get optimal
variance in Proposition 4.3 in this case since (using heuristic notations as if we were in
finite dimension) the asymptotic variance is:
                                      lim g 0 Aαn ΣAαn
                                      n→∞

                                  = g (K K)−1 Σ (K ∗ K)−1 g.
                                       0  ∗


    Moreover, we get this result in particular for any nonzero g in R (K ∗ K) while we
know that R (K ∗ ) is dense in H (identification condition). Generally speaking, Van
Rooij, Ruymgaart and Van Zwet (2000) stress that the inner products do not converge
weakly for every vector g in H at the same rate, if they converge at all.
                            min(β/2,1)
    (iii) The condition bn αn          → 0 imposes a convergence to zero of the regularization
                                              − min( β+2
                                                      2
                                                         , 21 )
coefficient αn faster than the rate αn = bn                     required for the consistency. This
stronger condition is needed to show that the regularization bias multiplied by bn converges
to zero. A fortiori, the estimation bias term vanishes asymptotically.
    The results of Proposition 4.3 are established under strong assumptions: convergence
in H and restriction on g. An alternative method consists in establishing the normality
of ϕ̂n by the Liapunov condition (Davidson, 1994), see the example on deconvolution in
Section 5 below.

5. Applications
A well-known example is that of the kernel estimator of the density. Indeed, the estimation
of the pdf f of a random variable X can be seen as solving an integral equation of the
first kind
                                  Z +∞
                       Kf (x) =         I (u ≤ x) f (u) du = F (x)                    (5.1)
                                      −∞

where F is the cdf of X. Applying the Tikhonov regularization to (5.1), one obtains a
kernel estimator of f . This example is detailed in Hardle and Linton (1994) and in Vapnik
(1998, pages 308-311) and will not be discussed further.

                                               54
   This section review the standard examples of the ridge regression and factor models
and less standard examples such as the regression with an infinity of regressors, the
deconvolution and the instrumental variable estimation.

5.1. Ridge regression
The Tikhonov regularization discussed in Section 3 can be seen as an extension of the
well-known ridge regression. The ridge regression was introduced by Hoerl and Kennard
(1970). It was initially motivated by the fact that in presence of nearly multicollinearity of
the regressors, the least squares estimator may vary dramatically as the result of a small
perturbation in the data. The ridge estimator is more stable and may have a lower risk
than the conventional least squares estimator. For a review of this method, see Judge,
Griffiths, Hill, Lutkepohl, and Lee (1980) and for a discussion in the context of inverse
problems, see Ruymgaart (2001).
    Consider the linear model (the notation of this paragraph is specific and corresponds
to general notations of linear models):

                                        y = Xθ + ε                                       (5.2)

where y and ε are n×1−random vectors, X is a n×q matrix of regressors of full rank, and
θ is an unknown q × 1−vector of parameters. The number of explanatory variables, q, is
assumed to be constant and q < n. Assume that X is exogenous and all the expectations
are taken conditionally on X. The classical least-squares estimator of θ is
                                                    −1
                                     θ̂ = (X 0 X)        X 0 y.

There exists an orthogonal transformation such that X 0 X/n = P 0 DP with
                                                   
                                        µ1       0
                                           ..      
                                D=            .    ,
                                        0        µq




                                             55
µj > 0, and P 0 P = Iq . Using the mean square error as measure of the risk, we get
                     °      °2      °                       °2
                     °      °       ° 0 −1 0                °
                   E °θ̂ − θ° = E °(X X) (X (Xθ + ε) − θ)°
                                    °              °
                                    ° 0 −1 0 °2
                               = E °(X X) X ε°
                                    ³                   ´
                                                 −2
                               = E ε0 X (X 0 X) X 0 ε
                                           ³              ´
                                                     −2
                               = σ 2 trace X (X 0 X) X 0
                                            Ãµ      ¶−1 !
                                 σ2            X 0X
                               =      trace
                                  n             n
                                    σ2      ¡          ¢
                                  =    trace P 0 D−1 P
                                    n
                                         q
                                    σ2 X 1
                                  =           .
                                    n j=1 µj

If some of the columns of X are closely collinear, the eigenvalues may be very small and
the risk very large. Moreover, when the number of regressors is infinite, the risk is no
longer bounded.
    A solution is to use the ridge regression estimator:

                          θ̂a = arg min ky − Xθk2 + a kθk2
                                              θ
                                                           −1
                                 ⇒ θ̂a = (aI + X 0 X)           X 0y

for a > 0. We prefer to introduce α = a/n and define
                                         µ               ¶−1
                                                  X 0X         X 0y
                                 θ̂α =       αI +                   .                 (5.3)
                                                   n            n

This way, the positive constant α corresponds to the regularization parameter introduced
in earlier sections.
    The estimator θ̂α is no longer unbiased. We have
                                 ³ ´ µ          X 0X
                                                     ¶−1 0
                                                         XX
                          θα = E θ̂α = αI +                    θ.
                                                  n        n

Using the fact that A−1 − B −1 = A−1 [B − A] B −1 . The bias can be rewritten as
                             µ      ¶−1 0      µ 0 ¶−1 0
                               X 0X    XX       XX    XX
                θα − θ =  αI +              θ−           θ
                                n        n       n     n
                          µ          ¶−1
                                X 0X
                       = α αI +          θ.
                                  n

                                                  56
The risk becomes
       °      °2      °          °2
       °      °       °          °
    E °θ̂α − θ° = E °θ̂α − θα ° + kθα − θk2
                      °µ               ¶−1 0 °     2       °µ                ¶−1 °
                      °          X 0X        X ε°          °           X 0
                                                                           X         °2
                      °                          °         °                         °
                 = E ° αI +                      ° + α2 ° αI +                     θ°
                      °            n          n °          °             n           °
                      Ã        µ             ¶−2 0       !         °                ¶−1 °
                         ε0 X          X 0X       Xε               °µ        X 0
                                                                                 X       °2
                                                                2°                       °
                 = E             αI +                      + α ° αI +                   θ°
                           n            n            n             °          n          °
                               Ãµ              ¶−2 0 !               ° µ               ¶−1 °
                   σ 2
                                        XX 0
                                                     XX              °           XX0        °2
                                                                    2°                      °
                 =     trace      αI +                         + α ° αI +                  θ°
                   n                      n             n            °            n         °
                                                     ³        ´2
                   σ2 X
                         q
                                 µj            Xq      (P θ)j
                                             2
                 =           ¡       ¢  +  α         ¡         ¢2 .
                   n j=1 α + µj 2              j=1    α  + µ j

There is the usual trade-off between the variance (decreasing in α) and the bias (increasing
in α). For each θ and σ 2 , there is a°value of°α for which the risk of θ̂α is smaller than
                                      °         °2
that of θ̂. As q is finite, we have E °θ̂α − θα ° ∼ 1/n and kθα − θk2 ∼ α2 . Hence, the
                                 √
MSE is minimized for αn ∼ 1/ n. Let us compare this rate with that necessary to the
asymptotic normality of θ̂α . We have
                                µ           ¶−1     µ            ¶−1 0
                                       X 0X                 X 0X      Xε
                 θ̂α − θ = −α αI +               θ + αI +                 .
                                         n                   n         n

Therefore, if X and ε satisfy standard assumptions     ´ of stationarity and mixing, θ̂α is
                                           √ ³
consistent as soon as αn goes to zero and n θ̂α − θ is asymptotically centered normal
                    √
provided αn = o (1/ n) , which is a faster rate than that obtained in the minimization of
the MSE. Data-dependent methods for selecting the value of α are discussed in Judge et
al. (1980).
    Note that the ridge estimator (5.3) is the regularized inverse of the equation

                                             y = Xθ,                                             (5.4)

where obviously θ is overidentified as there are n equations for q unknowns. Let H be Rq
endowed with the euclidean norm and E be Rn endowed with the norm, kvk2 = v 0 v/n.
Define K : H → E such that Ku = Xu for any u ∈ Rq . Solving hKu, vi = hu, K ∗ vi, we
find the adjoint of K, K ∗ : E → H where K ∗ v = X 0 v/n for any v ∈ Rn . The Tikhonov
regularized solution of (5.4) is given by

                                   θ̂α = (αI + K ∗ K)−1 K ∗ y,

which corresponds to (5.3). It is also interesting to look at the spectral cut-off reg-
ularization. Let {P1 , P2 , ..., Pq } be the orthonormal eigenvectors of the q × q matrix

                                                57
K ∗ K = X 0 X/n and {Q1 , Q2 , ..., Qn } be the orthonormal eigenvectors of the n × n matrix
                           √
KK ∗ = XX 0 /n. Let λj = µj . Then the spectral cut-off regularized estimator is
                                  X 1                             X 1 y 0 Qj
                          θ̂α =                hy, Qj i Pj =                        Pj .
                                  λj ≥α
                                          λj                      λj ≥α
                                                                             λj n

A variation on the spectral cut-off consists in keeping the l largest eigenvalues to obtain
                                                  l
                                                  X 1 y 0 Qj
                                          θ̂l =                       Pj .
                                                  j=1
                                                        λj n

We will refer to this method as truncation. A forecast of y is given by
                                                            l
                                                            X y 0 Qj
                                     ŷ = K θ̂l =                       Qj .               (5.5)
                                                            j=1
                                                                  n

Equation (5.5) is particularly interesting for its connection with forecasting using factors
as described in the next subsection.

5.2. Principal components and factor models
Let Xit be the observed data for the ith cross-section unit at time t, with i = 1, 2, ..., q
and t = 1, 2, ..., T. Consider the following dynamic factor model

                                               Xit = δ 0i Ft + eit                         (5.6)

where Ft is an l × 1 vector of unobserved common factors and δ i is the vector of factor
loadings associated with Ft . The factor model is used in finance, where Xit represents the
return of asset i at time t, see Ross (1976). Here we focus on the application of (5.6) to
forecasting a single time series using a large number of predictors as in Stock and Watson
(1998, 2002), Forni and Reichlin (1998), and Forni, Hallin, Lippi, and Reichlin (2000).
Stock and Watson (1998, 2002) consider the forecasting equation

                                           yt+1 = β 0 Ft + ²t+1

where yt is either the inflation or the industrial production and Xt in (5.6) comprises 224
macroeconomic time-series. If the number of factors l is known, then Λ = (δ 1 , δ 2 , ..., δ q )
and F = (F1 , F2 , ..., FT )0 can be estimated from
                                                  q     T
                                       1 XX                      2
                                  min            (Xit − δ 0i Ft )                          (5.7)
                                  Λ,F qT
                                         i=1 t=1




                                                        58
under the restriction F 0 F/T = I. The F solution of (5.7) are the eigenvectors of XX 0 /T
associated with the l largest eigenvalues. Hence F = [Q1 | ... | Ql ] where Qj is jth eigen-
vector of XX 0 /T. Using the compact notation y = (y2 , ..., yT +1 )0 , a forecast of y is given
by
                                           b
                                    ŷ = F β
                                                   −1
                                       = F (F 0 F ) F 0 y
                                            F 0y
                                       = F
                                             T
                                          l
                                         X Q0j y
                                       =           Qj .
                                         j=1
                                                T

We recognize (5.5). It means that forecasting using a factor model (5.6) is equivalent to
forecasting Y from (5.4) using a regularized solution based on the truncation. The only
difference is that in the factor literature, it is assumed that there exists a fixed number of
common factors, whereas in the truncation approach (5.5), the number of factors grows
with the sample size. This last assumption may seem more natural when the number of
explanatory variables, q, goes to infinity.
    An important issue in factor analysis is the estimation of the number of factors. Stock
and Watson (1998) propose to minimize the MSE of the forecasting. Bai and Ng (2002)
propose various BIC and AIC criterions that permit to estimate consistently the number
of factors, even when T and q go to infinity.

5.3. Regression with an infinity of regressors
Consider the following model

                                      Z
                                Y =       Z (τ ) ϕ (τ ) Π (dτ ) + U                       (5.8)

where Z is uncorrelated with U and may include lags of Y , Π is a known measure (possibly
with finite or discrete support). One observes (yi , zi (τ ))i=1,...,n .
   First approach: Ridge regression
   (5.8) can be rewritten as
                             R                                       
                         y1          z1 (τ ) ϕ (τ ) Π (dτ )            u1
                       ..                  ..              .. 
                       . =                  .            + . 
                                   R
                         yn          zn (τ ) ϕ (τ ) Π (dτ )            un

or equivalently

                                           y = Kϕ + u


                                                59
where the operator K is defined in the following manner

                                 K  L2 (Π) → Rn
                                      :
                                     R                         
                                         z1 (τ ) ϕ (τ ) Π (dτ )
                                                 ..            
                               Kϕ =               .            .
                                       R
                                         zn (τ ) ϕ (τ ) Π (dτ )

As it is usual in the regression, the error term u is omitted and we solve

                                                Kϕ = y

using a regularized inverse

                                     ϕα = (K ∗ K + αI)−1 K ∗ y.                          (5.9)

As an exercise, we compute K ∗ and K ∗ K. To compute K ∗ , we solve

                                          hKϕ, ψi = hϕ, K ∗ ψi

for ψ = (ψ 1 , ..., ψ n ) and we obtain
                                               n
                                   1X
                          (K ∗ y) (τ ) = yi zi (τ ) ,
                                   n i=1
                                   Z     n
                        ∗             1X
                       K Kϕ (τ ) =           zi (τ ) zi (s) ϕ (s) Π (ds) .
                                      n i=1

The properties of the estimator (5.9) are further discussed in Van Rooij, Ruymgaart and
Van Zwet (2000).
   Second approach: moment conditions
   Alternatively, (5.8) can be rewritten as

                    E [Y − hZ, ϕi |Z (τ )] = 0 for all τ in the support of Π

Replacing the conditional moments by unconditional moments, we have

                           E [Y Z (τ ) − hZ, ϕi Z (τ )] = 0 ⇐⇒
                      Z
                          E [Z (τ ) Z (s)] ϕ (s) Π (ds) = E [Y Z (τ )] ⇐⇒
                                                      T ϕ = r.                         (5.10)
                                                                      1 Pn
The operator T can be estimated by T̂n , the operator with kernel           zi (τ ) zi (s) and
                                                                      n i=1
                                  1 Pn
rF can be estimated by r̂n (τ ) =        yi zi (τ ) . Hence (5.10) becomes
                                  n i=1
                                               T̂n ϕ = r̂n ,                           (5.11)

                                                    60
which is equal to
                                               K ∗ Kϕ = K ∗ y.

If one preconditions (5.11) by applying the operator T̂n∗ , one gets the solution
                                      ³             ´
                                 ϕ̂n = αI + T̂n∗ T̂n T̂n∗ r̂n                        (5.12)

which differs from the solution (5.9). When α goes to zero at an appropriate rate of con-
vergence (different in both cases), the solutions of (5.9) and (5.12) will be asymptotically
equivalent. Actually the preconditioning by an operator in the Tikhonov regularization
has for purpose to construct an operator which is positive self-adjoint. Because T̂n = K ∗ K
is already positive self-adjoint, there is no reason to precondition here. Sometimes precon-
ditioning more than necessary has for aim to facilitate the calculations (see Ruymgaart,
2001).
    Using the results of Section 4, we can establish the asymptotic normality of ϕ̂n defined
in (5.12).
    Assuming that
    A1 - ui has mean zero and variance σ 2 and is uncorrelated with zi (τ ) for all τ
    A2 - ui zi (.) is an iid process of L2 (Π) .
    A3 - E kui zi (.)k2 < ∞.
    we °have        °       ³ ´
        °           °
    (i) °T̂n2 − T 2 ° = O √1n
         √ ³                 ´
                          2
    (ii) n T̂n r̂n − T̂n ϕ0 ⇒ N (0, Σ) in L2 (Π) .
    (i) is straightforward. (ii) follows from
                                    n               Z    n
                                1X                    1X
               r̂n − T̂n ϕ0 =          yi zi (τ ) −         zi (τ ) zi (s) ϕ0 (s) Π (ds)
                                n i=1                 n i=1
                                       n
                                   1X
                          =              ui zi (τ ) .
                                   n i=1
             √                √
Here, an =       n and bn =       n. Under Assumptions A1 to A3, we have
                                           n
                                     1 X                  ¡         ¢
                                    √       ui zi (τ ) ⇒ N 0, σ 2 T
                                      n i=1

in L2 (Π) by Theorem 2.46. Hence
                         √ ³                  ´   ¡          ¢
                           n T̂n r̂n − T̂n2 ϕ0 ⇒ N 0, σ 2 T 3 .

Let us rewrite Condition G in terms of the eigenvalues λj and eigenfunctions φj of T :
                              °                 °2
                              ° 2           −1 °
                              °(T + αn I) g °
                            °                       ° = O (1)
                            °T 3/2 (T 2 + αn I)−1 g °2


                                                        61
                                      P∞  hg,φj i
                                                       2

                                     j=1 λ2 +α 2
                                         ( j )
                                  ⇔                 = O (1) .
                                    P∞ λ3j hg,φj i2
                                     j=1 λ2 +α 2
                                         ( j )

Obviously the condition G will not be satisfied for all g in L2 (Π) .
                                                                 √ β/2
   By Proposition 4.3, assuming that ϕ0 ∈ Φβ , 0 < β < 2 and nαn → 0, we have for
g conformable with Condition G,
                             √
                            h n (ϕ̂n − ϕ0 ) , gi    d
                          °                       ° → N (0, 1) .
                          °T 3/2 (T 2 + αn I)−1 g °

The asymptotic variance is given by
                                              ∞ ­       ®2
                                  ° −1/2 °2 X     g, φj
                                  °T    g° =               .
                                             j=1
                                                    λj
                                             ¡      ¢
Whenever it is finite, that is whenever g ∈ R T −1/2 , h(ϕ̂n − ϕ0 ) , gi converges at the
parametric rate.
   A related but different model from (5.8) is the Hilbertian autoregressive model:

                                       Xt = ρ (Xt−1 ) + εt                            (5.13)

where Xt and εt are random elements in a Hilbert space and ρ is a compact linear operator.
The difference between (5.13) and (5.8) is that in (5.8), Y is a random variable and not
an element of a Hilbert space. Bosq (2000) proposes an estimator of ρ and studies its
properties.
   Kargin and Onatski (2004) are interested in the best prediction of the interest rate
curve. They model the forward interest rate Xt (τ ) at maturity τ by (5.13) where ρ is a
Hilbert-Schmidt integral operator:
                                          Z ∞
                             (ρf ) (τ ) =     ρ (τ , s) f (s) ds.                   (5.14)
                                              0

The operator ρ is identified from the covariance and cross-covariance of the process Xt . Let
Γ11 be the covariance operator of random curve Xt and Γ12 the cross-covariance operator
of Xt and Xt+1 . For convenience, the kernels of Γ11 and Γ12 are denoted using the same
notation. Equations (5.13) and (5.14) yield

                     Γ12 (τ 1 , τ 2 ) = E [Xt+1 (τ 1 ) Xt (τ 2 )]
                                          ·Z                                   ¸
                                      = E      ρ (τ 1 , s) Xt (s) Xt (τ 2 ) ds
                                        Z
                                      =    ρ (τ 1 , s) Γ11 (s, τ 2 ) ds.

                                                  62
Hence,

                                       Γ12 = ρΓ11 .

Solving this equation requires a regularization as Γ11 is compact. Interestingly, Kargin
and Onatski (2004) show that the best prediction of the interest rate curve in finite
sample is not necessarily provided by the eigenfunctions of Γ11 associated with the largest
eigenvalues. It means that the spectral cut-off does not provide satisfactory predictions
in small samples. They propose a better predictor of the interest rate curve.
    Continuous-time models have been extensively studied by Le Breton (1994) and Bergstrom
(1988).

5.4. Deconvolution
Assume we observe iid realizations y1 , ..., yn of a random variable Y with unknown pdf h,
where Y satisfies

                                       Y =X +Z

where X and Z are independent random variables with pdf ϕ and g respectively. The
aim is to give an estimator of ϕ assuming g is known. This problem consists in solving in
ϕ the equation:
                                      Z
                               h (y) = g (y − x) ϕ (x) dx.                         (5.15)

(5.15)
R      is an integral equation of the first kind where the operator K defined by (Kϕ) (y) =
  g (y − x) ϕ (x) dx has a known kernel and need not be estimated. Note that K is not a
compact operator with respect to Lebesgue measure and hence has a continuous spectrum.
The most common approach to solving (5.15) is to use a kernel estimator, this method was
pioneered by Carroll and Hall (1988) and Stefanski and Carroll (1990). It is essentially
equivalent to inverting Equation (5.15) by means of the continuous spectrum of K, see
Carroll, Van Rooij, and Ruymgaart (1991) and Subsection 5.4.2 below. In a related paper,
Van Rooij and Ruymgaart (1991) propose a regularized inverse to a convolution problem
of the type (5.15) where g has for support the circle. They invert the operator K using
its continuous spectrum.

5.4.1. A new estimator based on Tikhonov regularization
The approach of Carrasco and Florens (2002) consists in defining two spaces of reference,
L2πX (R) and L2πY (R) as
                           ½                 Z                        ¾
                 2                                   2
               LπX (R) =    φ (x) such that    φ (x) π X (x) dx < ∞ ,
                           ½                 Z                        ¾
                 2                                    2
                LπY (R) =   ψ (y) such that    ψ (y) π Y (y) dy < ∞ ,

                                            63
so that K is a Hilbert-Schmidt operator from L2πX (R) to L2πY (R), that is the following
condition is satisfied
                     Z Z µ                    ¶2
                            π Y (y) g (y − x)
                                                 π Y (y) π X (x) dxdy < ∞.
                             π Y (y) π X (x)
                                                                           ©          ª
As a result K has a discrete spectrum for these spaces of reference. Let λj , φj , ψ j denote
its singular value decomposition. Equation (5.15) can be approximated by a well-posed
problem using Tikhonov regularization

                                  (αn I + K ∗ K) ϕαn = K ∗ h.

Hence we have
                                  ∞
                                  X          1     ­ ∗        ®
                    ϕαn (x) =                       K  h, φ j   φj (x)
                                      j=1
                                          αn + λ2j
                                  ∞
                                  X          1     ­       ®
                              =                     h, Kφ j φj (x)
                                      j=1
                                          αn + λ2j
                                  ∞
                                  X         λj     ­      ®
                              =                     h, ψ j φj (x)
                                      j=1
                                          αn + λ2j
                                  ∞
                                  X         λj       £                      ¤
                              =                    E   ψ j (Y i ) π Y (Y i )  φj (x) .
                                      j=1
                                          αn + λ2j

The estimator of ϕ is obtained by replacing the expectation by a sample mean:
                                  n      ∞
                             1 X X λj
                       ϕ̂n =                   ψ (yi ) π Y (yi ) φj (x) .
                             n i=1 j=1 αn + λ2j j

Note that we avoided estimating h by a kernel estimator. In some cases, ψ j and φj are
                                                                             ¡ √           ¢
known. For instance, if Z ∼ N (0, σ 2 ), π Y (y) = φ (y/τ ) and π X (x) = φ x/ τ 2 + σ 2
then ψ j and φj are Hermite polynomials associated with λj = ρj . When ψ j and φj are
unknown, they can be estimated via simulations. As one can do as many simulations as
one wishes, the error due to the estimation of ψ j and φj can be considered negligeable.
   Using the results of Section 3, one can establish the rate of convergence of kϕ̂n − ϕ0 k .
Assume that ϕ0 ∈ Φβ , 0 < β < 2, that is
                                         ∞ ­
                                         X
                                                   ®2
                                             ϕ, φj
                                                          < ∞.
                                         j=1     λ2β
                                                  j

        °          °     ³     ´      °           °            √                √
We have °ϕαn − ϕ0 ° = O αn       and °ϕ̂n − ϕαn ° = O (1/ (αn n)) as here bn = n. For
                           β/2

                                                        ¡         ¢
an optimal choice of αn = Cn−1/(β+2) , kϕ̂n − ϕ0 k2 is O n−β/(β+2) . The mean integrated

                                                    64
square error (MISE) defined as E kϕ̂n − ϕ0 k2 has the same rate of convergence. Fan (1993)
provides the optimal rate of convergence for a minimax criterion on a Lipschitz class of
functions. The optimal rate of the MISE when the error term is normally distributed is
only (ln n)−2 when ϕ is twice differentiable. On the contrary, here we get an arithmetic
rate of convergence. The condition ϕ0 ∈ Φβ has for effect to reduce the class of admissible
functions and hence to improve the rate of convergence. Which type of restriction does
ϕ0 ∈ Φβ impose? In Carrasco and Florens (2002), it is shown that ϕ0 ∈ Φ1 is satisfied if
                                   Z ¯           ¯
                                      ¯ ψ ϕ0 (t) ¯
                                      ¯          ¯
                                      ¯ ψ (t) ¯ dt < ∞                               (5.16)
                                          g

where ψ ϕ0 and ψ g denote the characteristic functions of ϕ0 and g respectively. This con-
dition can be interpreted as the noise is “smaller” than the signal. Consider for example
the case where ϕ0 and g are normal. Condition (5.16) is equivalent to the fact that the
variance of g is smaller than that of ϕ0 . Note that the condition ϕ0 ∈ Φ1 relates ϕ0 and
g while one usually imposes restrictions on ϕ0 independently of those on g.

5.4.2. Comparison with the kernel density estimator
Let L2λ (R) be the space of square-integrable functions with respect to Lebesgue measure
on R. Let F denote the Fourier transform operator from L2λ (R) into L2λ (R) defined by
                                               Z
                                           1
                              (F q) (s) = √      eisx q (x) dx.
                                            2π
F satisfies that F ∗ = F −1 . We see that

                                        F (g ∗ f ) = φg F f

so that K admits the following spectral decomposition (see Carroll, van Rooij and Ruym-
gaart, 1991, Theorem 3.1.):

                                         K = F −1 Mφg F

where Mρ is the multiplication operator Mρ ϕ = ρϕ.

                                   K ∗ K = F −1 M φ 2 F.
                                                 | g|

We want to solve in f the equation:

                                         K ∗ Kf = K ∗ h.

Let us denote
                                                 Z
                                    ∗
                         q (x) = (K h) (x) =         g (y − x) h (y) dy.


                                                65
Then,
                                                   n
                                              1X
                                     q̂ (x) =       g (yi − x)
                                              n i=1
    √
is a n−consistent estimator of q.
    Using the spectral cut-off regularized inverse of K ∗ K, we get

                                    fˆ = F −1 M 1 {|φg |>α} F q̂
                                                |φg |2

Using the change of variables u = yi − x, we have

                                               n       Z
                                        1X
                           (F q̂) (t) =                    eitx g (yi − x) dx
                                        n i=1
                                               n       Z
                                         1X
                                       =                   eit(yi −u) g (u) du
                                         n i=1
                                               n
                                         1X
                                       =      φ (t)eityi .
                                         n i=1 g

                                Z
                           1           ©¯        ¯     ª      1
                 fˆ (x) =       e−itx I ¯φg (t)¯ > α ¯          ¯ (F q̂) (t) dt
                          2π                             ¯φg (t)¯2
                                n Z
                           1 1X                     ©¯      ¯     ª 1
                        =              e−it(yi −x) I ¯φg (t)¯ > α          dt.
                          2π n i=1                                 φg (t)
                                                                               ©¯      ¯    ª
Assuming that φg > 0 and strictly decreasing as |t| goes to infinity, we have I ¯φg (t)¯ > α =
I {−A ≤ t ≤ A} for some A > 0 so that
                                           n Z
                             ˆ        1 1 X A e−it(yi −x)
                             f (x) =                      dt.
                                     2π n i=1 −A φg (t)

Now compare this expression with the kernel estimator (see e.g. Stefanski and Carroll,
1990). For a smoothing parameter c and a kernel ω, the kernel estimator is given by
                                     n     Z
                        ˆ        1 X 1        φω (u) iu(yi −x)/c
                        fk (x) =                      e          du.                    (5.17)
                                 nc i=1 2π   φg (u/c)

Hence fˆ coincides with the kernel estimator with φω (u) = I[−1,1] (u). This is the sinc kernel
corresponding to ω (x) = sin c (x) = sin (x) /x. This suggests that the kernel estimator is
obtained by inverting an operator that has a continuous spectrum. Because this spectrum
is given by the characteristic function of g, the speed of convergence of the estimator

                                                 66
depends on the behavior of φg in the tails. For a formal exposition, see Carroll et al (1991,
Example 3.1.). They assume in particular that the function to estimate is p differentiable
and they obtain a rate of convergence (as a function of p) that is of the same order as the
rate of the kernel estimator.
   By using the Tikhonov regularization instead of the spectral cut-off, we obtain
                                    n Z
                         ˆ       1X         φg (t)
                         f (y) =        ¯      ¯      e−itxi eity dt.
                                 n i=1  ¯φg (t)¯2 + α

We apply a change of variable u = −t,
                                   n     Z
                        ˆ       1X 1           φg (u)
                        f (y) =            ¯       ¯2   eiu(xi −y) du.                 (5.18)
                                n i=1 2π   ¯φg (u)¯ + α

The formulas (5.18) and (5.17) differ only by the way the smoothing is applied.

5.5. Instrumental variables
This example is mainly based in Darolles, Florens and Renault (2002).
   An economic relationship between a response variable Y and a vector Z of explanatory
variables is often represented by an equation:

                                      Y = ϕ (Z) + U ,                                  (5.19)

where the function ϕ(.) defines the parameter of interest while U is an error term. The
relationship (5.19) does not characterize the function ϕ if the residual term is not con-
strained. This difficulty is solved if it is assumed that E[U | Z] = 0, or if equivalently
ϕ (Z) = E[Y | Z]. However in numerous structural econometric models, the conditional
expectation function is not the parameter of interest. The structural parameter is a rela-
tion between Y and Z where some of the Z components are endogenous. This is the case
in various situations: simultaneous equations, error-in-variables models, treatment model
with endogenous selection etc.
    The first issue is to add assumptions to Equation (5.19) in order to characterize ϕ. Two
general strategies exist in the literature, at least for linear models. The first one consists
in introducing some hypotheses on the joint distribution of U and Z (for example on the
variance matrix). The second one consists in increasing the vector of observables from
(Y, Z) to (Y, Z, W ), where W is a vector of instrumental variables. The first approach
was essentially followed in the error-in-variables models and some similarities exist with
the instrumental variables model (see e.g. Malinvaud (1970, ch. 9), Florens, Mouchart,
Richard (1974) or Florens, Mouchart, Richard (1987) for the linear case). Instrumental
variable analysis as a solution to an endogeneity problem was proposed by Reiersol (1941,
1945), and extended by Theil (1953), Basmann (1957), and Sargan (1958).
    However, even in the instrumental variables framework, a definition of the functional
parameter of interest remains ambiguous in the general nonlinear case. Three possible

                                             67
definitions of ϕ have been proposed (see Florens, Heckman, Meghir and Vytlacil (2002) for
a general comparison between these three concepts and their extensions to more general
treatment models).
i) The first one replaces E[U | Z] = 0 by E[U | W ] = 0, or equivalently it defines ϕ as
the solution of

                                  E[Y − ϕ (Z) | W ] = 0.                              (5.20)

    This definition was the foundation of the analysis of simultaneity in linear models or
parametric nonlinear models (see Amemiya (1974)), but its extension to the nonparamet-
ric case raises new difficulties. The focus of this subsection is to show how to address this
issue in the framework of ill-posed inverse problems. A first attempt was undertaken by
Newey and Powell (2003), who prove consistency of a series estimator of ϕ in Equation
(5.20). Florens (2003) and Blundell and Powell (2003) consider various nonparametric
methods for estimating a nonlinear regression with endogenous regressors. Darolles, Flo-
rens, and Renault (2002) prove both the consistency and the asymptotic distribution of
a kernel estimator of ϕ. Hall and Horowitz (2004) give the optimal rate of convergence of
the kernel estimator under conditions, which differ from those of Darolles, Florens, and
Renault (2002). Finally, Blundell, Chen, and Kristensen (2003) propose a sieves estimator
of the Engel curve.
ii) A second approach is now called control function approach and was systematized by
Newey, Powell, and Vella (1999). This technique was previously developed in specific
models (e.g. Mills ratio correction in some selection models for example). The starting
point is to compute E[Y | Z, W ] which satisfies:

                             E[Y | Z, W ] = ϕ (Z) + h(Z, W ),                         (5.21)

where h(Z, W ) = E[U | Z, W ]. Equation (5.21) does not characterize ϕ. However we
can assume that there exists a function V (the control function) of (Z, W ) (typically
Z − E[Z | W ]), which captures all the endogeneity of Z in the sense that E[U | W, V ] =
E[U | V ] = h̃ (V ). This implies that (5.21) may be rewritten as

                               E[Y | Z, W ] = ϕ (Z) + h̃(V ),                         (5.22)

and, under some conditions, ϕ may be identified from (5.22), up to an additive constant
term. This model is an additive model where the V are not observed but are estimated.
iii) A third definition follows from the literature on treatment model (see e.g. Imbens,
Angrist (1994), Heckman, Ichimura, Smith, Todd (1998) and Heckman, Vytlacil (2000)).
We simplify extremely this analysis by considering Z and W as scalar. Local instrument is
defined by ∂E[Y
              ∂W
                |W ] ∂E[Z|W ]
                    / ∂W , and the function of interest ϕ is assumed to be characterized
by the relation:
                                  ∂E[Y |W ]     ·     ¸
                                    ∂W           ∂ϕ
                                  ∂E[Z|W ]
                                              =E    |W .                              (5.23)
                                                 ∂Z
                                    ∂W


                                               68
   Let us summarize the arguments, which justify Equation (5.23).
   Equation (5.19) is extended to a non separable model

                                      Y = ϕ (Z) + Zε + U                                    (5.24)

where ε and U are two random noises.
  First, we assume that

                                    E(U |W ) = E (ε|W ) = 0

This assumption extends the instrumental variable assumption but is not sufficient to
identify the parameter of interest ϕ. From (5.24) we get:
                                      Z
                    E (Y |W = w) = [ϕ (z) + zr (z, w)] fZ (z|w) dz

where fZ (.|.) denote the conditional density of Z given W and r (z, w) = E (ε|Z = z, W = w) .
Then
                             Z                          Z
     ∂                                 ∂                    ∂
       E (Y |W = w) =           ϕ (z)     fZ (z|w) dz + z     r (z, w) fZ (z|w) dz
    ∂w                       Z        ∂w                   ∂w
                                           ∂
                         +      zr (z, w)     fZ (z|w) dz.
                                          ∂w
We assume that the order of integration and derivative may commute (in particular the
boundary of the distribution of Z given W = w does not depends on w).
   Second, we introduce the assumption that V = Z − E (Z|W ) is independent of W. In
terms of density, this assumption implies that fZ (z|w) = f˜ (z − m (w)) where m (w) =
E (Z|W = w) and f˜ is the density of v. Then:
                                                   Z
                 ∂                        ∂m (w)             ∂
                    E (Y |W = w) = −                  ϕ (z) fZ (z|w) dz
                ∂w                      Z ∂w                ∂z
                                              ∂
                                   +       z    r (z, w) fZ (z|w) dz
                                             ∂wZ
                                       ∂m (w)                 ∂
                                   −               zr (z, w) fZ (z|w) dz
                                         ∂w                  ∂z
An integration by parts of the first and the third integrals gives
                                                 Z
                 ∂                       ∂m (w)      ∂
                   E (Y |W = w) =                       ϕ(z)fZ (z|w) dz
                ∂w                      Z ∂wµ       ∂z        ¶
                                               ∂r     ∂m ∂r
                                     +     z       +            fZ (z|w) dz
                                               ∂wZ ∂w ∂z
                                         ∂m (w)
                                     +              r (z, w) fZ (z|w) dz
                                           ∂w
The last integral is zero under E (ε|w) = 0. Finally, we need to assume that the second in-
tegral is zero. This is true in particular if there exists r̃ such that r (z, w) = r̃ (z − m (w)) .

                                                69
   Hence, Equation (5.23) is verified.

    These three concepts are identical in the linear normal case but differ in general.
We concentrate our presentation on this chapter on the pure instrumental variable cases
defined by equation (5.20).
    For a general approach of Equation (5.20) in terms of inverse problems, we introduce
the following notations:
K : L2F (Z) → L2F (W ) ϕ → Kϕ = E[ϕ (Z) | W ],
K ∗ : L2F (W ) → L2F (Z) ψ → K ∗ ψ = E[ψ (W ) | Z].
All these spaces are defined relatively to the true (unknown) DGP. The two linear oper-
ators K and K ∗ satisfy:
 hϕ (Z) , ψ (W )i = E[ϕ (Z) ψ (W )] = hKϕ (W ) , ψ (W )iL2F (W ) = hϕ (Z) , K ∗ ψ (Z)iL2F (Z) .


Therefore, K ∗ is the adjoint operator of K, and reciprocally. Using these notations, the
unknown instrumental regression ϕ corresponds to any solution of the functional equation:
                                   A(ϕ, F ) = Kϕ − r = 0,                                 (5.25)
where r (W ) = E[Y | W ].

    In order to illustrate this construction and the central role played by the adjoint
operator K ∗ , we consider first the example where Z is discrete, namely Z is binary. This
model is considered by Das (2005) and Florens and Malavolti (2002). In that case, a
function ϕ(Z) is characterized by two numbers ϕ(0) and ϕ(1) and L2Z is isomorphic to
R2 . Equation (5.20) becomes
    ϕ (0) Prob (Z = 0|W = w) + ϕ (1) Prob (Z = 1|W = w) = E (Y |W = w) .
The instruments W need to take at least two values in order to identify ϕ (0) and ϕ (1) from
this equation. In general, ϕ is overidentified and overidentification is solved by replacing
(5.25) by
                                        K ∗ Kϕ = K ∗ r
or, in the binary case, by
  ϕ (0) E (Prob (Z = 0|W ) |Z) + ϕ (1) E (Prob (Z = 1|W ) |Z) = E (E (Y |W ) |Z) .
In the latter case, we get two equations which have in general a unique solution.
    This model can be extended by considering Z = (Z1 , Z2 ) where Z1 is discrete (Z1 ∈ {0, 1})
and Z2 is exogenous (i.e. W = (W1 , Z2 )). In this extended binary model, ϕ is characterized
by two functions ϕ(0, z2 ) and ϕ(1, z2 ) solutions of
 ϕ(0, z2 )E (Prob (Z1 = 0|W ) |Z1 = z1 , Z2 = z2 ) + ϕ (1, z2 ) E (Prob (Z1 = 1|W ) |Z1 = z1 , Z2 = z2 )
                        = E (E (Y |W ) |Z1 = z1 , Z2 = z2 )        for z1 = 0, 1


                                              70
The properties of the estimator based on the previous equation are considered in Flo-
rens and Malavolti (2002). In this case, no regularization is needed because K ∗ K has a
continuous inverse (since the dimension is finite in the pure binary case and K ∗ K is not
compact in the extended binary model).
   We can also illustrate our approach in the case where the Hilbert spaces are not
necessarily L2 spaces. Consider the following semi parametric case. The function ϕ is
constrained to be an element of
                                     (           L
                                                           )
                                                X
                                X = ϕ/ϕ =           β l εl
                                                               l=1

where (εl )l=1,...,L is a vector of fixed functions in L2F (Z) . Then, X is a finite dimensional
Hilbert space. However, we keep the space E equal to L2F (W ). The model is then partially
parametric but the relation between Z and W is treated non parametrically. In this case,
it can be easily shown that K ∗ transforms any function ψ of L2F (W ) into a function of
X , which is its best approximation in L2 sense (see Example 2.4. in Section 2). Indeed:
    If ψ ∈ L2F (W ) , ∀j ∈ {1, ...L}

                              E (εj ψ) = hKεj , ψi = hεj , K ∗ ψi .
                                   L
                                   X
Moreover, K ∗ ψ ∈ X =⇒ K ∗ ψ =              αl εl , therefore
                                     l=1
                                 *          L
                                                           +
                                            X
                                     εj ,         α l εl       = E (ψεj )
                                            l=1
                                   L
                                   X
                               ⇔            αl E (εj εl ) = E (ψεj ) .
                                   l=1

The function ϕ defined as the solution of Kϕ = r is in general overidentified but the equa-
tion K ∗ Kϕ = K ∗ r has always a unique solution. The finite dimension of X implies that
(K ∗ K)−1 is a finite dimensional linear operator and is then continuous. No regularization
is required.

   Now we introduce an assumption which is only a regularity condition when Z and W
have no element in common. However, this assumption cannot be satisfied if there are
some elements in common between Z and W . Extensions to this latter case are discussed
in Darolles, Florens and Renault (2002), see also Example 2.5. in Section 2.
Assumption A.1: The joint distribution of (Z, W ) is dominated by the product of its
marginal distributions, and its density is square integrable w.r.t. the product of margins.
    Assumption A.1 ensures that K and K ∗ are Hilbert Schmidt operators, and is a
sufficient condition of the compactness of K, K ∗ , K K ∗ and K ∗ K (see Lancaster (1968),
Darolles, Florens, Renault (2002)) and Theorem 2.34.

                                                       71
     Under Assumption A1, the instrumental regression ϕ is identifiable if and only if 0 is
not an eigenvalue of K ∗ K. Then, for the sake of expositional simplicity, we focus on the
i.i.d. context:
Assumption A.2: The data (yi , zi , wi ) i = 1, · · · n, are i.i.d samples of (Y, Z, W ).
    We estimate the joint distribution F of (Y, Z, W ) using a kernel smoothing of the
empirical distribution. In the applications, the bandwidths differ, but they have all the
same speed represented by the notation cn .
    For economic applications, one may be interested either by the unknown function
ϕ(Z) itself, or only by its moments, including covariances with some known functions.
These moments may for instance be useful for testing economic statements about scale
economies, elasticities of substitutions, and so on.
    For such tests, one will only need the empirical counterparts of these moments and
their asymptotic probability distribution. An important advantage of the instrumental
variable approach is that it permits to estimate the covariance between ϕ(Z) and g(Z)
for a large class of functions. Actually, the identification assumption amounts to ensure
that the range R(K ∗ ) is dense in L2F (Z) and for any g in this range:

                            ∃ψ ∈ L2F (W ), g(Z) = E[ψ (W ) | Z],

and then Cov[ϕ(Z), g(Z)] = Cov[ϕ(Z), E[ψ (W ) | Z]] = Cov[ϕ(Z), ψ (W )] = Cov[E[ϕ(Z) |
W ], ψ (W )] = Cov[Y, ψ (W )], can be estimated with standard parametric techniques. For
instance, if E[g(Z)] = 0, the empirical counterpart of Cov[Y, ψ (W )], i.e.:
                                          n
                                       1X
                                             Yi ψ (Wi ) ,
                                       n i=1

is a root-n consistent estimator of Cov[ϕ(Z), g(Z)], and:
                 " n                                 #
             √ 1X                                      d
               n         Yi ψ (Wi ) − Cov[ϕ(Z), g(Z)] → N (0, V ar[Y ψ (W )]),
                   n i=1

where V ar[Y ψ (W )] will also be estimated by its sample counterpart. However in practice
this analysis has very limited interest because even if g is given, ψ is not known and must
be estimated by solving the integral equation g(Z) = E[ψ(W ) | Z], where the conditional
distribution of W given Z is also estimated.

    Therefore, the real problem of interest is to estimate Cov[ϕ(Z), g(Z)], or hϕ, gi by
replacing ϕ by an estimator. This estimator will be constructed by solving a regularized
version of the empirical counterpart of (5.25) where K and r are replaced by their estima-
tors. In the case of kernel smoothing, the necessity of a regularization appears obviously.
Using the notation of 2.5.3, the equation

                                          K̂n ϕ = r̂n

                                              72
becomes
                            n
                            X              µ               ¶          n
                                                                      X             µ¶
                                             w − wi                           w − wi
                                 ϕ (zi ) ω                              yi ω
                            i=1
                                               cn                               cn
                                 n     µ         ¶                = i=1n µ          ¶ .
                               X          w − wi                     X       w − wi
                                    ω                                    ω
                                i=1
                                            cn                       i=1
                                                                               cn

The function ϕ can not be obtained from this equation except for the values ϕ (zi ) equal
to yi . This solution does not constitute a consistent estimate. The regularized Tikhonov
solution is the solution of:
                                         X
                                         n
                                                         wj −wi
                                                                  !                              X
                                                                                                 n
                                                                                                              wj −wi
                                                                                                                       !

                 X n
                            z − zj   !         ϕ(zi )ω
                                                           cn             X
                                                                          n
                                                                                    z − zj   !         yi ω
                                                                                                                cn
                                         i=1                                                     i=1
                        ω                                                       ω
                              cn          X
                                          n
                                                     wj −wi
                                                              !                       cn         X n
                                                                                                              wj −wi
                                                                                                                       !
                  j=1                                                     j=1
                                                 ω                                                      ω
                                                       cn                                                       cn
   αn ϕ (z) +                  X
                                           i=1
                                                                      =                 X
                                                                                                 i=1
                                                                                                                           .
                                      z − zj !                                                z − zj !
                               n                                                        n

                                    ω                                                       ω
                                j=1
                                        cn                                              j=1
                                                                                                cn

This functional equation may be solved in two steps. First, the z variable is fixed to the
values zi and the system becomes an n × n linear system, which can be solved in order to
obtain the ϕ (zi ) . Second, the previous expression gives a value of ϕ (z) for any value of
z.
    If n is very large, this inversion method may be difficult to apply and may be replaced
by a Landweber Fridman resolution (see Section 3). A first expression of ϕ (z) may be for
instance the estimated conditional expectation E (E (Y |W ) |Z) and this estimator will be
modified a finite number of times by the formula
                                     ³             ´
                              ϕ̂l,n = I − cK̂n∗ K̂n ϕ̂l−1,n + cK̂n∗ r̂n .

   To simplify our analysis, we impose a relatively strong assumption:
   Assumption A.3: The error term is homoskedastic, that is:

                                                 V ar (U |W ) = σ 2 .


   In order to check the asymptotic properties of the estimator of ϕ, it is necessary to
study to properties of the estimators of K and of r. Under regularity conditions such as
the compactness of the joint distribution support and the smoothness of the density (see
Darolles
      ° et al. (2002)),the
                        °2 estimation    by boundary kernels gives the following results:
                               ³                ´
      °                 °
   i) °K̂n∗ K̂n − K ∗ K ° ∼ O n(c1n )p + (cn )2ρ where ρ is the order of the kernel and p the
dimension
       ° of Z.             °2
       ° ∗                 °     ¡            ¢
   ii) °K̂n r̂n − K̂n K̂n ϕ° ∼ O n1 + (cn )2ρ
                    ∗



                                                            73
   iii) A suitable choice of cn implies
                        √ ³ ∗                  ´    ¡             ¢
                          n K̂n r̂n − K̂n K̂n ϕ =⇒ N 0, σ 2 K ∗ K
                                        ∗



This convergence is a weak convergence in L2F (Z) (see Section 2.4).

    Using results developed in Section 4 and in Darolles et al. (2002) it can be deduced
that:               2ρ
    a) If αn → 0, cαn2 → 0, α2 1ncρn ∼ O (1) the regularized estimator ϕ̂n converge in proba-
                     n       n
bility to ϕ in L2 norm.
    b) If ϕ ∈ Φβ (0 < β ≤ 2) , the optimal choices of αn and cn are:
                                                   1
                                       αn = k1 n− 2β
                                                   1
                                       cn = k2 n− 2ρ
                               p       β
and, if ρ is chosen such that 2ρ  ≤ 2+β  , we obtain the following bound for the rate of
convergence
                                               ³     β
                                                       ´
                                 kϕ̂n − ϕk ∼ O n− 2+β

c) Let us assume that α is kept constant. In that case, the linear operators
(αI + Kn∗ Kn )−1 and (αI + K ∗ K)−1 are bounded and, using a functional version of
the Slutsky theorem (see Chen and White (1992), and Section 2.4), it is immediately
checked that:
                           √
                             n(ϕ̂n − ϕ − bαn ) =⇒ N (0, Ω),                  (5.26)

where
                              £                                 ¤
                       bαn = α (αI + Kn∗ Kn )−1 − (αI + K ∗ K)−1 ϕ,

and

                        Ω = σ 2 (αI + K ∗ K)−1 K ∗ K(αI + K ∗ K)−1 .

    Some comments may illustrate this first result:
i) The convergence obtained in (5.26) is still a functional distributional convergence in
the
√ Hilbert space      L2F (Z), which in particular implies the convergence of inner product
  nhϕ̂n − ϕ − bαn , gi to univariate normal distribution N (0, hg, Ωgi).
ii) The convergence of ϕ̂n involves two bias terms. The first bias is ϕα − ϕ. This term is
due to the regularization and does not decrease if α is constant. The second one, ϕ̂n − ϕα
follows from the estimation
                       √     error of K. This bias decreases to zero when n increases, but
at a lower speed than n.


                                             74
iii) The asymptotic variance in (5.26) can be seen as the generalization of the two stage
least squares asymptotic variance. An intuitive (but not correct) interpretation of this
result could be the following: if α is small, the asymptotic variance is approximately
σ 2 (K ∗ K)−1 , which is the functional extension of σ 2 (E(ZW 0 )E(W W 0 )−1 E(W Z 0 ))−1 .
     d) Let us now consider the case where α → 0. For any δ ∈ Φβ (β ≥ 1), if αn is optimal
(= k1 n− 2β ) and if cn = k2 n−( 2ρ +ε) (ε > 0) , we have
          1                       1




                        p                                ¡      ¢
                           ν n (δ) hϕ̂n − ϕ, δi − Bn =⇒ N 0, σ 2 ,
where the speed of convergence is equal to
                                           n                  ³ 2β ´
                       ν n (δ) = °                     °  ≥ O  n 2+β ,
                                 °K (αn I + K ∗ K)−1 δ °2
                                p
and the bias Bn is equal to ν n (δ) hϕα − ϕ, δi , which in general does not vanish. If δ
= 1 for example, this bias is O (nα2n ) and diverges.
    The notion of Φβ permits to define rigorously the concept of weak or strong instru-
ments. Indeed, if λj are not zero for any j, the function ϕ is identified by Equation (5.25)
and ϕ̂n is a consistent estimator. A bound for the speed of convergence of ϕ̂n is provided
under the restriction that ϕ belongs to a space Φβ with β > 0. The condition ϕ ∈ Φβ
means that the rate of decline of the Fourier coefficients of ϕ in the basis of φj is faster
than the rate of decline of the λβj (which measures the dependence). In order to have an
asymptotic normality we need to assume that β ≥ 1. In that case, if ϕ ∈ Φβ , we have
asymptotic normality of inner products hϕ̂n − ϕ, δi in the vector space Φβ . Then, it is
natural to say that W is a strong instrument for ϕ if ϕ is an element of a Φβ with β ≥ 1.
This may have two equivalent interpretations. Given Z and W , the set of instrumental re-
gression for which W is a strong instrument is Φ1 or given Z and ϕ, any set of instruments
is strong if ϕ is an element of the set Φ1 defined using these instruments.
    We may complete this short presentation by two final remarks. First, the optimal
choice of cn and αn implies that the speed of convergence and the asymptotic distribution
are not affected by the fact that K is not known and is estimated. The accuracy of the
estimation is governed by the estimation of the right hand side term K ∗ r. Secondly, the
usual “curse of dimensionality” of nonparametric estimation appears in a complex way.
The dimension of Z appears in many places but the dimension of W is less explicit. The
value and the rate of decline of the λj depend on the dimension of W : given Z, the
reduction of the number of instruments implies a faster rate of decay of λj to zero and a
slower rate of convergence of the estimator.

6. Reproducing kernel and GMM in Hilbert spaces
6.1. Reproducing kernel
Models based on reproducing kernels are the foundation for penalized likelihood estimation
and splines (see e.g. Berlinet and Thomas-Agnan, 2004). However, it has been little used

                                            75
in econometrics so far. The theory of reproducing kernels becomes very useful when the
econometrician has an infinity of moment conditions and want to exploit all of them in
an efficient way. For illustration, let θ ∈ R be the parameter of interest and consider
an L × 1−vector h that gives L moment conditions satisfying E θ0 (h (θ)) = 0 ⇔ θ = θ0 .
Let hn (θ) be the sample estimate of E θ0 (h (θ)). The (optimal) generalized method of
moments (GMM) estimator of θ is the minimizer of hn (θ)0 Σ−1 hn (θ) where Σ is the
                                                                °            °2
covariance matrix of h. hn (θ)0 Σ−1 hn (θ) can be rewritten as °Σ−1/2 hn (θ)° and coincides
with the norm of hn (θ) in a particular space called the reproducing kernel Hilbert space
(RKHS). When h is finite dimensional, the computation of the GMM objective function
does not raise any particular difficulty, however when h is infinite dimensional (for instance
is a function) then the theory of RKHS becomes very handy. A second motivation for the
introduction of the RKHS of a self-adjoint operator K is the following. Let T be such
that K = T T ∗ then the RKHS of K corresponds to the 1−regularity space of T (denoted
Φ1 in Section 3.1).

6.1.1. Definitions and basic properties of RKHS
This section presents the theory of reproducing
                                        ©        kernels, as Rdescribed in Aronszajnª(1950)
and Parzen (1959, 1970). Let LC (π) = ϕ : I ⊂ RL → C : I |ϕ (s)|2 π (s) ds < ∞ where
                               2

π is a pdf (π may have a discrete or continuous support) and denote k.k and h, i the norm
and inner product on L2C (π).

Definition 6.1. A space H (K) of complex-valued functions defined on a set I ⊂ RL is
said to be a reproducing kernel Hilbert space H (K) associated with the integral operator
K : L2C (π) → L2C (π) with kernel k (t, s) if the three following conditions hold
    (i) it is a Hilbert space (with inner product denoted h, iK ),
    (ii) for every s ∈ I, k (t, s) as a function of t belongs to H (K) ,
    (iii) (reproducing property) for every s ∈ I and ϕ ∈ H (K), ϕ (s) = hϕ (.) , k (., s)iK .
    The kernel k is then called reproducing kernel.

    The following properties are listed in Aronszajn (1950):
    1 - If the RK k exists, it is unique.
    2 - A Hilbert space H of functions defined on I ⊂ RL is a RKHS if and only if all
functionals ϕ → ϕ (s) for all ϕ ∈ H, s ∈ I, are bounded.
    3 - K is a self-adjoint positive operator on L2C (π).
    4 - To a self-adjoint positive operator K on I, there corresponds a unique RKHS H (K)
of complex-valued functions.
    5 - Every sequence of functions {ϕn } which converges weakly to ϕ in H (K) (that is
hϕn , giK → hϕ, giK for all g ∈ H (K)) converges also pointwise, that is lim ϕn (s) = ϕ (s) .

   Note that (2) is a consequence of Riesz theorem 2.18: there exists a representor k
such that for all ϕ ∈ H

                                      ϕ (t) = hϕ, kt iK .

                                              76
Let kt = k (t, .) so that hkt , ks iK = k (t, s). (5) follows from the reproducing property.
Indeed, hϕn (t) − ϕ (t) , k (t, s)iK = ϕn (s) − ϕ (s) .
    Example (finite dimensional case). Let I = {1, 2, ..., L} , let Σ be a positive
definite L × L matrix with principal element σ t,s . Σ defines an inner product on RL :
hϕ, ψiΣ = ϕ0 Σ−1 ψ. Let (σ 1 , ..., σ L ) be the columns of Σ. Let ϕ = (ϕ (1) , ..., ϕ (L))0 , then
we have the reproducing property

                                  hϕ, σ t iΣ = ϕ (t) , τ = 1, ..., L

because ϕΣ−1 Σ = ϕ. Now we diagonalize Σ, Σ = P DP 0 where P is the m × m matrix
with (t, j) element φj (t) (φj are the orthonormal eigenvectors of Σ) and D is the diagonal
matrix with diagonal element λj (the eigenvalues of Σ). The (t, s)th element of Σ can be
rewritten as
                                                m
                                                X
                                  σ (t, s) =          λj φj (t) φj (s) .
                                                j=1

We have
                                           Xm
                                       0   −1  1 ­     ®­     ®
                         hϕ, ψiΣ = ϕ Σ ψ =        ϕ, φj ψ, φj
                                              λ
                                           j=1 j


where h, i is the euclidean inner product.

   From this small example, we see that the norm in a RKHS can be characterized by the
spectral decomposition
                ©       of an operator.
                                     ª Let K be a positive self-adjoint compact operator
with spectrum φj , λj : j = 1, 2, ... . Assume that N (K) = 0. It turns out that H (K)
coincides with the 1/2-regularization space of the operator K :
                     (                          ¯
                                             ∞ ¯­        ®¯2    )
                                            X     ϕ, φ j
                                                          ¯
            H (K) = ϕ : ϕ ∈ L2 (π) and                       < ∞ = Φ1/2 (K) .
                                            j=1
                                                   λ j


We can check that
  (i) H (K) is a Hilbert space with inner product

                                           X∞ ­     ®­     ®
                                               ϕ, φj ψ, φj
                                 hϕ, ψiK =
                                           j=1
                                                    λj

and norm
                                                   ¯
                                                 ∞ ¯­     ®¯2
                                                 X   ϕ, φj ¯
                                    kϕk2K =                         .
                                                 j=1
                                                            λj

   (ii) k (., t) belongs to H (K)

                                                  77
   (iii) hϕ, k(., t)iK = ϕ (t) .
Proof.        (ii) follows from Mercer’s formula       (Theorem 2.42 (iii)) that   is k (t,
                                                                                          ¯2 s) =
P∞                                            P∞ ¯­             ®¯2       P∞ ¯
                                        2           ¯            ¯
      λj φj (t) φj (s). Hence kk (., t)kK = j=1 φj , k (., t) /λj = j=1 λj φj (t)¯ /λj =
                                                                               ¯
Pj=1
  ∞
      λj φj (t) φj (t) = k (t, t) < ∞. For (iii), we use again Mercer’s formula. hϕ (.) , k (., t)iK =
  j=1 ­
P∞                 ®­      ®        P ­          ®               P∞ ­        ®
  j=1 φj , k (., t)   ϕ, φj /λj = ∞   j=1 ϕ, φj Kφj (t) /λj =       j=1 ϕ, φj φj (t) = ϕ (t) .
   There is a link between calculating a norm in a RKHS and solving an integral equation
Kϕ = ψ. We follow Nashed and Wahba (1974) to enlighten this link. We have
                                                ∞
                                                X       ­     ®
                                     Kϕ =             λj ϕ, φj φj .
                                                j=1


Define K 1/2 the square root of K:
                                                ∞
                                                X
                                     1/2
                                                  p          ­     ®
                                 K         ϕ=              λj ϕ, φj φj .
                                                j=1

                      ¡    ¢                                            ¡  ¢†
Note that N (K) = N K 1/2 , H (K) = K 1/2 (L2C (π)) . Define K −1/2 = K 1/2 where ()†
is the Moore-Penrose generalized inverse introduced in Subsection 3.1.:
                                                ∞
                                                X
                                       †          1 ­            ®
                                   K ψ=                     ψ, φj φj .
                                                j=1
                                                      λj

Similarly, the generalized inverse of K 1/2 takes the form:
                                                X∞
                                                     1 ­      ®
                                K −1/2 ψ =          p    ψ, φj φj .
                                                j=1
                                                      λj

From Nashed and Wahba (1974), we have the relations
                             ©                                 ª
                 kϕk2K = inf kpk : p ∈ L2C (π) and ϕ = K 1/2 p ,
                          ­                ®
               hϕ, ψiK = K −1/2 ϕ, K −1/2 ψ , for all ϕ, ψ ∈ H (K) .                         (6.1)

   The following result follows from Proposition 3.6.

Proposition 6.2. Let T : E →L2C (π) be an operator such that K = T T ∗ then
                                  ¡    ¢
                      H (K) = R K 1/2 = R (T ∗ ) = Φ1 (T ) .

   Note that T ∗ : L2C (π) → E and K 1/2 : L2C (π) → L2C (π) are not equal because they
take their values in different spaces.



                                                      78
6.1.2. RKHS for covariance operators of stochastic processes
In the previous section, we have seen how to characterize H (K) using the spectral de-
composition of K. When K is known to be the covariance kernel of a stochastic pro-
cess, then H (K) admits a simple representation. The main results of this section come
from Parzen (1959). Consider a random element (r.e.). {h (t) , t ∈ I ⊂ Rp } defined on
a probability space (Ω, F, P ) and observed
                                          ¡     for all Rvalues of t. Assume h (t) is a sec-
                                                 2¢
ond order random function that is E |h (t)| = Ω |h (t)|2 dP < ∞ for every t ∈ I.
                                                                      R
Let L2 (Ω, F, P ) be the set of all r.v. U such that E |U |2 = Ω |U |2 dP < ∞. De-
fine the inner product hU, V iL2 (Ω,F,P ) between any two r.v. U and V of L2 (Ω, F, P )
                          ¡      ¢    R
by hU, V iL2 (Ω,F ,P ) = E U V = Ω U V dP. Let L2 (h (t) , t ∈ I) be the Hilbert space
spanned
   ³     by the
              ´ r.e. {h (t) , t ∈ I}. Define K the covariance operator with kernel k (t, s) =
E h (t) h (s) . The following theorem implies that any symmetric nonnegative kernel can
be written as a covariance kernel of a particular process.

Theorem 6.3. K is a covariance operator of a r.e. if and only if K is a positive self-
adjoint operator.

   The following theorem can be found in Parzen (1959) for real-valued functions. The
complex case is treated in Saitoh (1997).

Theorem 6.4. Let {h (t) , t ∈ I} be a r.e. with mean zero and covariance kernel k. Then
   (i) L2 (h (t) , t ∈ I) is isometrically isomorphic or congruent to the RKHS H (K) . De-
note J : H (K) → L2 (h (t) , t ∈ I) this congruence.
   (ii) For every function ϕ in H (K) , J (ϕ) satisfies
                                  ³           ´
    hJ (ϕ) , h (t)iL2 (Ω,F,P ) = E J (ϕ) h (t) = hϕ, k (., t)iK = ϕ (t) , for all t ∈ I (6.2)

where J (ϕ) is unique in L2 (h (t) , t ∈ I) and has mean zero and variance such that
                                                       ¡        ¢
                        kϕk2K = kJ (ϕ)k2L2 (Ω,F,P ) = E |J (ϕ)|2 .

    Note that, by (6.2), the congruence is such that J (k (., t)) = h (t). The r.v. U ∈
L2 (h (t) , t ∈ I) corresponding to ϕ ∈ H (K) is denoted below as hϕ, hiK (or J (ϕ)). As
L2 (h (t) , t ∈ I) and H (K) are isometric, we have by Definition 2.19

                                                h           i
                    cov [hϕ, hiK , hψ, hiK ] = E J (ϕ) J (ψ) = hϕ, ψiK

for every ϕ, ψ ∈ H (K) . Note that hϕ, hiK is not a correct notation because h =
P ­       ®                                                                      P ­           ®2
   j h, φj φj a.s. does ­
                        not belong to H (K). If it were the case, we should have j h, φj /λj <
                                ®                                            ­            ®
∞ a.s.. Unfortunately
          hP ­           h,iφ j   are independent with mean  0 and variance    Kφ j , φ j   = λj .
                     ®2                                            P ­      ®2
Hence, E     j h, φj    /λj = ∞ and by Kolmogorov’s theorem j h, φj /λj = ∞ with

                                             79
nonzero probability. The r.v. J (ϕ) itself is well-defined, only the notation hϕ, hiK is not
adequate; as Kailath (1971) explains, it should be regarded only as a mnemonic for finding
J (ϕ) in a closed form. The rest of this section is devoted on the calculation of kϕkK .
Note that the result (6.2) is valid when t is multidimensional, t ∈ RL . In the next section,
h (t) will be a moment function indexed by an arbitrary index parameter t.
    Assume that the kernel k on I × I can be represented as
                                        Z
                              k (s, t) = h (s, x) h (t, x)P (dx)                        (6.3)

where P is a probability measure and {h (s, .) , s ∈ I} is a family of functions on L2 (Ω, F, P ) .
By Theorem 6.4, H (K) consists of functions ϕ on I of the form
                                      Z
                              ϕ (t) = ψ (x) h (t, x)P (dx)                               (6.4)

for some unique ψ in L2 (h (t, .) , t ∈ I) , the subspace of L2 (Ω, F, P ) spanned by {h (t, .) , t ∈ I}.
The RKHS norm of ϕ is given by
                                      kϕk2K = kψk2L2 (Ω,F,P ) .

When calculating kϕk2K in practice, one looks for the solutions of (6.4). If there are several
solutions, it is not always obvious to see which one is spanned by {h (t, .) , t ∈ I}. In this
case, the right solution is the solution with minimal norm (Parzen, 1970):
                                kϕk2K =         min        kψk2L2 (Ω,F,P ) .
                                          ψ/ϕ=hψ,hiL
                                                       2


   Theorem 6.4 can be reinterpreted in terms of range. Let T and T ∗ be
                            T   L2 (π) → L2 (h (t, .) , t ∈ I)
                                 :
                                         Z
                            ϕ → T ϕ (x) = ϕ (t) h (t, x) π (t) dt.

and


                          T∗    L2 (h (t, .) , t ∈ I) → L2 (π)
                                 :
                                              Z
                                 ∗
                            ψ → T ψ (s) = ψ (x) h (s, x)P (dx) .

To check that T ∗ is indeed the dual of T, it suffices to check hT ϕ, ψiL2 (Ω,F,P ) = hϕ, T ∗ ψiL2 (π)
for ϕ ∈ L2 (π) and ψ (x) = h (t, x) as h (t, .) spans L2 (h (t, .) , t ∈ I) . Using the fact that
K = T ∗ T and Proposition 6.2, we have H (K) = R (T ∗ ), which gives Equation (6.4).

   Example. Let k (t, s) = t ∧ s. k can be rewritten as
                                     Z 1
                          k (t, s) =     (t − x)0+ (s − x)0+ du
                                            0


                                                  80
with
                                               ½
                                                    1 if x < s
                                 (s − x)0+ =                   .
                                                    0 if x ≥ s

It follows that H (K) consists of functions ϕ of the form:
                           Z 1                     Z t
                                            0
                 ϕ (t) =       ψ (x) (t − x)+ dx =     ψ (x) dx, 0 ≤ t ≤ 1
                             0                             0
                       ⇒ ψ (t) = ϕ0 (t) .

Hence, we have
                                  Z 1                    Z 1
                                                                      2
                        kϕk2K =                2
                                        |ψ (x)| dx =           |ϕ0 (x)| dx.
                                   0                      0

    Example. Let k be defined as in (6.3) with h (t, x) = eitx . Assume P admits for pdf
fθ0 (x) positive everywhere. Equation (6.4) is equivalent to
                                      Z
                             ϕ (t) =     ψ (x) e−itx P (dx)
                                      Z
                                   =     ψ (x) e−itx fθ0 (x) dx.

By the Fourier Inversion formula, we have
                                                     Z
                                      1    1
                             ψ (x) =                     eitx ϕ (t) dt.
                                     2π fθ0 (x)

6.2. GMM in Hilbert spaces
First introduced by Hansen (1982), the Generalized Method of Moments (GMM) became
the cornerstone of modern structural econometrics. In Hansen, the number of moment
conditions is supposed to be finite. The method proposed in this section permits to deal
with moment functions that take their values in a finite or infinite dimensional Hilbert
space. It was initially proposed by Carrasco and Florens (2000) and further developed in
Carrasco and Florens (2001) and Carrasco, Chernov, Florens, and Ghysels (2004).

6.2.1. Definition and examples
Let {xi : i = 1, 2, ..., n} be an iid sample of a random vector X ∈ Rp . The case where X
is a time-series will be discussed later. The distribution of X is indexed by a parameter
θ ∈ Θ ⊂ Rd . Denote E θ the expectation with respect to this distribution. The unknown
parameter θ is identified from the function h (X; θ) (called moment function) defined on
Rp × Θ, so that the following is true.


                                               81
   Identification Assumption

                                E θ0 (h (X; θ)) = 0 ⇔ θ = θ0 .                           (6.5)

It is assumed that h (X; θ) takes its values in a Hilbert space H with inner product h., .i
and norm k.k . When f = (f1 , ..., fL ) and g = (g1 , ..., gL ) are vectors of functions of H,
we use the convention that hf, g 0 i denotes the L × L−matrix with (l, m) element hfl , gm i .
Let Bn : H → H be a sequence of random bounded linear operators and
                                                 n
                                             1X
                                   ĥn (θ) =       h (xi ; θ) .
                                             n i=1

We define the GMM estimator associated with Bn as
                                             °          °
                                             °          °
                         θ̂n (Bn ) = arg min °Bn ĥn (θ)° .                              (6.6)
                                               θ∈Θ

Such an estimator will be in general suboptimal; we will discuss the optimal choice of Bn
later. Below, we give four examples that can be handled by the method discussed in this
section. They illustrate the versatility of the method as it can deal with a finite number of
moments (Example 1), a continuum (Examples 2 and 3) and a countably infinite sequence
(Example 4).
  Example 1 (Traditional GMM). Let h (x; θ) be a vector of RL , Bn be a L ×
L−matrix and k.k denote the Euclidean norm. The objective function to minimize is
                         °          °2
                         °          °          0
                         °Bn ĥn (θ)° = ĥn (θ) Bn0 Bn ĥn (θ)

and corresponds to the usual GMM quadratic form ĥn (θ)0 Wn ĥn (θ) with weighting matrix
Wn = Bn0 Bn .
    Example 2 (Continuous time process). Suppose we observe independent repli-
cations of a continuous time process

                    X i (t) = G (θ, t) + ui (t) , 0 ≤ t ≤ T , i = 1, 2, ..., n           (6.7)

where G is a known function and ui = {ui (t) : 0 ≤ t ≤ T } is a zero mean Gaussian
process with continuous covariance function k (t, s) = E [u (t) u (s)], t, s ∈ [0, T ] . Denote
X i = {X i (t) : 0 ≤ t ≤ T }, G (θ) = {G (θ, t) : 0 ≤ t ≤ T } , and H = L2 ([0, T ]). The
unknown parameter θ is identified from the moment of the function
                                   ¡       ¢
                                  h X i ; θ = X i − G (θ) .

Assume h (X i ; θ) ∈ L2 ([0, T ]) with probability one. Candidates for Bn are arbitrary
bounded operators on L2 ([0, T ]) including the identity. For Bn f = f , we have
                                °          °2 Z T
                                °          °
                                °Bn ĥn (θ)° =     ĥn (θ)2 dt.
                                                     0


                                               82
Estimation of Model (6.7) is discussed in Kutoyants (1984).
                                                             £ 0 ¤
    Example 3 (Characteristic function). Denote ψ θ (t) = E θ eit X the characteris-
tic function of X. Inference can be based on
                                               0
                             h (t, X; θ) = eit X − ψ θ (t) , t ∈ RL .

Note
¯ it0 X ¯that contrary to the former examples, h (t, X; θ) is complex valued and |h¡ (t, X;¢θ)| ≤
¯e ¯ + |ψ θ (t)| ≤ 2. Let Π be a probability measure on RL and H = L2 RL , Π . As
                                          ¡       ¢                             C
h (., X; θ) is bounded, it belongs to L2C RL , Π for any Π. Feuerverger and McDunnough
(1981) and more recently Singleton (2001) show that an efficient     R estimator of θ is ob-
tained from h (., X; θ) by solving an empirical counterpart of Eh (t, X; θ) ω (t) dt = 0
for an adequate weighting function ω, which turns out to be a function of the pdf of X.
This efficient estimator is not implementable as the pdf of X is unknown. They suggest
estimating θ by GMM using moments obtained from a discrete grid t = t1 , t2 , ..., tM . An
alternative strategy put forward in this section is to use the full continuum    ¡ of    moment
                                                                                          ¢
                                                                               2      L
conditions by considering the moment function h as an element of H = LC R , Π .
   Example 4 (Conditional moment restrictions). Let X = (Y, Z) . For a known
function ρ ∈ R, we have the conditional moment restrictions

                                    E θ0 [ρ (Y, Z, θ) |Z] = 0.

Hence for any function g (Z), we can construct unconditional moment restrictions

                                  E θ0 [ρ (Y, Z, θ) g (Z)] = 0.

Assume Z has bounded support. Chamberlain (1987) shows that the semiparametric
efficiency bound can be approached by a GMM estimator based on a sequence of mo-
ment conditions using as instruments the power function of Z : 1, Z, Z 2 , ..., Z L for a
large L. Let πPbe the Poisson probability measure π (l) = e−1 /l! and H = L2 (N,π) =
{f : N → R : ∞  l=1 g (l) π (l) < ∞} . Let

                            h (l, X; θ) = ρ (Y, Z, θ) Z l , l = 1, 2, ...

If h (l, X; θ) is bounded with probability one, then h (., X; θ) ∈ L2 (N,π) with probability
one. Instead of using an increasing sequence of moments as suggested by Chamberlain, it
is possible to handle h (., X; θ) as a function. The efficiency of the GMM estimator based
on the countably infinite number of moments {h (l, X; θ) : l ∈ N} will be discussed later.

6.2.2. Asymptotic properties
                     ©            R                   ª
Let H = L2C (I, Π) = f : I → C : I |f (t)|2 Π (dt) < ∞ where I is a subset of RL for
some L ≥ 1 and Π is a (possibly discrete) probability measure.√ This choice of H is
consistent with Examples 1 to 4. Under some weak assumptions, nĥn (θ0 ) converges to


                                                   83
a Gaussian process N (0, K) in H where K denotes the covariance operator of h (X; θ0 ) .
K is defined by

                    K       :       H→H                   Z
                    f → Kf (s) = hf, k (., t)i =                  k (t, s) f (s) Π (ds)
                                                              I
                                                 h                           i
where the kernel k of K satisfies k (t, s) = E θ0 h (t, X; θ0 ) h (s, X; θ0 ) and k (t, s) =
k (s, t). Assume moreover that K is a Hilbert Schmidt operator and hence admits a discrete
spectrum. Suppose that Bn converges to    ° a bounded °linear operator B defined on H
and that θ0 is the unique minimizer of °BE θ0 h (X; θ)° then θ̂n (Bn ) is consistent and
asymptotically normal. The following result is proved in Carrasco and Florens (2000).

Proposition 6.5. Under Assumptions 1 to 11 of Carrasco and Florens (2000), θ̂n (Bn )
is consistent and
                         √ ³               ´
                                             L
                           n θ̂n (Bn ) − θ0 → N (0, V )

with
                                    ­                             ®−1
                        V       =    BE θ0 (∇θ h) , BE θ0 (∇θ h)0
                                      ­                                     ®
                                    × BE θ0 (∇θ h) , (BKB ∗ ) BE θ0 (∇θ h)0
                                      ­                             ®−1
                                    × BE θ0 (∇θ h) , BE θ0 (∇θ h)0

where B ∗ is the adjoint of B.

6.2.3. Optimal choice of the weighting operator
Carrasco and Florens (2000) show that the asymptotic variance V given in Proposi-
tion 6.5 is minimal for B = K −1/2
­ −1/2                           ®−1. In that case, the asymptotic covariance becomes
         θ0         −1/2 θ0
 K     E (∇θ h) , K     E (∇θ h)      .
   Example 1 (continued).
                     ³       ´ ³K is 1the ´0 L × L−covariance      matrix of h (X; θ) . Let Kn be
           1
             Pn            1                           1
the matrix n i=1 h xi ; θ̂ h xi ; θ̂         where θ̂ is a consistent first step estimator of θ.
Kn is a consistent estimator of K. Then the objective function becomes
                     D                                E
                       Kn−1/2 ĥn (θ) , Kn−1/2 ĥn (θ) = ĥn (θ)0 Kn−1 ĥn (θ)

which delivers the optimal GMM estimator.
   When H is infinite dimensional, we have    seen
                                          ¡ 1/2 ¢−1 in Section 3.1 that the inverse of K,
  −1                              −1/2
K , is not bounded. Similarly K        = K           is not bounded on H and its domain
has been shown in Subsection 6.1.1 to be the subset of H which coincides with the RKHS
associated with K and denoted H (K) .

                                                   84
                                                                                1
√ To estimate the covariance operator K, we need a first step estimator θ̂ that is
  n−consistent. It may be obtained by letting Bn equal the identity in (6.6) or by using
a finite number of moments. Let Kn be the operator with kernel

                                   1X ³                ´ ³          ´
                                      n
                                                     1            1
                       kn (t, s) =       h t, xi ; θ̂ h s, xi ; θ̂ .
                                   n i=1
                                                                 √
Then Kn is a consistent estimator of K and kKn − Kk = O (1/ n) . As K −1 f is not
continuous in f , we estimate K −1 by the Tykhonov regularized inverse of Kn :
                                          ¡          ¢−1
                              (Knαn )−1 = αn I + Kn2     Kn

for some penalization term αn ≥ 0. If αn > 0, (Knαn )−1 f is continuous in f but is
a biased estimator of K −1 f. There is a trade-off between the stability of the solution
and its bias. Hence, we will let αn decrease to zero at an appropriate rate. We define
             ¡          ¢1/2
(Knαn )−1/2 = (Knαn )−1      .
    The optimal GMM estimator is given by
                                             °                °
                                             ° αn −1/2        °
                               θ̂n = arg min °(Kn )    ĥn (θ)° .
                                     θ∈Θ


Interestingly, the optimal GMM estimator minimizes the norm of ĥn (θ) in the RKHS
associated with Knαn . Under certain regularity conditions, we have
                          °                  °
                          ° αn −1/2          ° P °            °
                          °(Kn )      ĥn (θ)° → °E θ0 (h (θ))°K .

A condition for applying this method is that E θ0 (h (θ)) ∈ H (K) . This condition can be
verified using results from 6.1.1.

Proposition 6.6. Under the regularity conditions of Carrasco and Florens (2000, Theo-
rem 8), θ̂n is consistent and
                √ ³         ´
                              L
                                ³ ­
                                      θ0              θ0           0 ®−1
                                                                         ´
                  n θ̂n − θ0 → N 0, E (∇θ h (θ0 )) , E (∇θ h (θ0 )) K

as n and nα3n → ∞ and αn → 0.

    The stronger condition nα3n → ∞ of Carrasco and Florens (2000) has been relaxed
into nα2 → ∞ in Carrasco, Chernov, Florens, and Ghysels (2004). Proposition 6.6 does
not indicate how to select αn in practice. A data-driven method is desirable. Carrasco
and Florens (2001) propose to select the αn that minimizes the mean square error (MSE)
of the GMM estimator θ̂n . As θ̂n is consistent for any value of αn , it is necessary to
compute the higher order expansion of the MSE, which is particularly tedious. Instead of
relying on an analytic expression, it may be easier to compute the MSE via bootstrap or
simulations.

                                            85
6.2.4. Implementation
There are two equivalent ways to compute the objective function
                                 °                °2
                                 ° αn −1/2        °
                                 °(Kn )    ĥn (θ)° ,                                   (6.8)

    1) using the spectral decomposition of Kn ,or
    2) using a simplified formula that involves only vectors and matrices.
    The first method discussed in Carrasco and Florens (2000) requires calculating the
eigenvalues and eigenfunctions of Kn using the method described in 2.5.3. Let φ̂j denote
the orthonormalized eigenfunctions of Kn and λ̂j the corresponding eigenvalues. The
objective function in Equation (6.8) becomes
                               n
                               X         λ̂j   ¯D             E¯2
                                               ¯               ¯
                                     2         ¯ ĥn (θ) , φ̂j ¯ .                      (6.9)
                                j=1 λ̂j + αn

The expression
     D√          (6.9)Esuggests a nice interpretation of the GMM estimator. Indeed, note
that     nĥn (θ0 ) , φj , j = 1, 2, ... are asymptotically normal with mean 0 and vari-
ance λj and are independent across j. Therefore (6.9) is the regularized version of the
objective
  £­      function
             ®¤        of the optimal GMM estimator based on the n moment conditions
E h (θ) , φj = 0, j = 1, 2, ..., n.
   The second method is more attractive by its simplicity. Carrasco and al. (2004) show
that (6.8) can be rewritten as
                                         0£          ¤−1
                                   v (θ) αn In + C 2     v (θ)

where C is a n × n−matrix with (i, j) element cij , In is the n × n identity matrix and
v (θ) = (v1 (θ) , ..., vn (θ))0 with
                                     Z ³             ´0
                                                   1
                          vi (θ) =     h t, xi ; θ̂ ĥn (t; θ) Π (dt)
                                       Z ³              ´0 ³        ´
                                     1                1           1
                              cij =      h t, xi ; θ̂ h t, xj ; θ̂ Π (dt) .
                                     n
Note that the dimension of C is the same whether h ∈ R or h ∈ RL .

6.2.5. Asymptotic Efficiency
Assume that the pdf of X, fθ , is differentiable with respect to θ. Let L2 (h) be the closure
of the subspace of L2 (Ω, F, P ) spanned by {h (t, Xi ; θ0 ) : t ∈ I}.

Proposition 6.7. Under standard regularity conditions, the GMM estimator based on
{h (t, xi ; θ) : t ∈ I} is asymptotically as efficient as the MLE if and only if

                                 ∇θ ln fθ (xi ; θ0 ) ∈ L2 (h) .

                                               86
    This result is proved in Carrasco and Florens (2004) in a more general setting where Xi
is Markov of order L. A similar efficiency result can be found in Hansen (1985), Tauchen
(1997) and Gallant and Long (1997).
    Example 2 (continued). Let K be the covariance operator of {u (t)} and H (K) the
RKHS associated with K. Kutoyants (1984) shows that if G (θ) ∈ H (K) , the likelihood
ratio of the measure induced by X (t) with respect to the measure induced by u (t) equals
                              Yn      ½                           ¾
                                       ­        i
                                                  ®     1       2
                     LR (θ) =     exp G (θ) , x K − kG (θ)kK
                              i=1
                                                        2

where hG, XiK has been defined in Subsection 6.1.2 and denotes the element of L2 (X (t) : 0 ≤ t ≤ T )
under the mapping J −1 of the function G (θ) (J is defined in Theorem 6.4). The score
function with respect to θ is
                                   *               n
                                                                  +
                                               1 X¡ i           ¢
                   ∇θ ln (LR (θ)) = ∇θ G (θ) ,        x − G (θ)       .
                                               n i=1
                                                                       K

For θ = θ0 and a single observation, the score is equal to

                                       h∇θ G (θ0 ) , uiK ,

which is an element of L2 (u (t) : 0 ≤ t ≤ T ) = L2 (h (X (t) ; θ0 ) : 0 ≤ t ≤ T ) . Hence, by
Proposition 6.7, the GMM estimator based on h (X; θ0 ) is asymptotically efficient. This
efficiency result is corroborated by the following. The GMM objective function is
                               * n                      n
                                                                           +
                           2     1 X¡ i           ¢ 1X     ¡ i           ¢
                 kh (x; θ)kK =          x − G (θ) ,         x − G (θ)         .
                                 n i=1               n i=1
                                                                           K

The first order derivative equals to
                                         *            n
                                                                       +
                                                   1 X¡ i         ¢
                  ∇θ kh (x; θ)k2K   = 2 ∇θ G (θ) ,       x − G (θ)
                                                   n i=1
                                                                           K
                                    = 2∇θ ln (LR (θ)) .

Therefore, the GMM estimator coincides with the MLE in this particular case as they are
solutions of the same equation.
    Example 3 (continued).© Under minor conditions       ª     on the distribution of Xi , the
                                                       L
closure of the linear span of h (t, Xi ; θ0 ) : t ∈ R      contains all functions of L2 (X) =
©         £     2 ¤      ª
  g : E θ0 g (X) < ∞ and hence the score ∇θ ln fθ (Xi ; θ0 ) itself. Therefore the GMM
estimator is efficient. Another way to prove efficiency is to calculate explicitly the asymp-
totic covariance of θ̂n . To simplify, assume that θ is scalar. By Theorem 6.4, we have
                      ° θ              °    °                 °2
                      °E 0 (∇θ h (θ0 ))°2 = °
                                            ° E θ 0 (∇ h (θ ))° = E |U |2
                                                      θ    0 °
                                         K                   K


                                               87
where U satisfies
                               h               i
                          θ0
                      E            U h (t; θ0 ) = E θ0 (∇θ h (t; θ0 )) for all t ∈ RL

which is equivalent to
                   h     ³ 0              ´i
               E θ0 U (X) eit X − ψ θ0 (t) = −∇θ ψ θ0 (t) for all t ∈ RL .                (6.10)

As U has mean zero, U has also mean zero and we can replace (6.10) by
                       h           0
                                     i
                   E θ0 U (X)eit X = −∇θ ψ θ0 (t) for all t ∈ RL ⇔
              Z
                         0
                 U (x)eit x fθ0 (x) dx = −∇θ ψ θ0 (t) for all t ∈ RL ⇔
                                             Z
                                           1         0
                        U (x)fθ0 (x) = −         e−it x ∇θ ψ θ0 (t) dt.                   (6.11)
                                          2π
The last equivalence follows from the Fourier inversion formula. Assuming that we can
exchange the integration and derivation in the right hand side of (6.11), we obtain

                              U (x)fθ0 (x) = −∇θ fθ0 (x) ⇔
                                     U (x) = −∇θ ln fθ0 (x) .
                       £                ¤
Hence E θ0 |U |2 = E θ0 (∇θ ln fθ0 (X))2 . And the asymptotic variance of θ̂n coincides with
the Cramer Rao efficiency bound even if, contrary to Example 3, θ̂n differs from the MLE.
   Example 4 (continued). As in the previous example, we intend to calculate the
asymptotic covariance of θ̂n using Theorem 6.4. We need to find U the p−vector of r.v.
such that
                   £                   ¤      £                   ¤
              E θ0 U ρ (Y, Z; θ0 ) Z l = E θ0 ∇θ ρ (Y, Z; θ0 ) Z l for all l ∈ N, ⇔
         £                             ¤      £                              ¤
     E θ0 E θ0 [U ρ (Y, Z; θ0 ) |Z] Z l = E θ0 E θ0 [∇θ ρ (Y, Z; θ0 ) |Z] Z l for all l ∈ N(6.12)

(6.12) is equivalent to

                       E θ0 [U ρ (Y, Z; θ0 ) |Z] = E θ0 [∇θ ρ (Y, Z; θ0 ) |Z] .           (6.13)

by the completeness of polynomials (Sansone, 1959) under some mild conditions on the
distribution of Z. A solution is
                                                  £                  ¤−1
              U0 = E θ0 [∇θ ρ (Y, Z; θ0 ) |Z] E θ0 ρ (Y, Z; θ0 )2 |Z     ρ (Y, Z; θ0 ) .

We have to check that this solution has minimal norm among all the solutions. Consider
an arbitrary solution U = U0 + U1 . U solution of (6.13) implies

                                          E θ0 [U1 ρ (Y, Z; θ0 ) |Z] = 0.

                                                        88
Hence E θ0 (U U 0 ) = E θ0 (U0 U00 ) + E θ0 (U1 U10 ) and is minimal for U1 = 0. Then
         ° θ                °
         °E 0 (∇θ h (θ0 ))°2
                               K
            θ0
      = E        (U0 U00 )
            n                               £                  ¤−1 θ0                     o
      = E θ0 E θ0 [∇θ ρ (Y, Z; θ0 ) |Z] E θ0 ρ (Y, Z; θ0 )2 |Z    E [∇θ ρ (Y, Z; θ0 ) |Z]0 .

Its inverse coincides with the semi-parametric efficiency bound derived by Chamberlain
(1987).
    Note that in Examples 2 and 3, the GMM estimator reaches the Cramer Rao efficiency
bound asymptotically while in Example 4, it reaches the semi-parametric efficiency bound.

6.2.6. Testing overidentifying restrictions
Hansen (1982) proposes a test of specification, which basically tests whether the overiden-
tifying restrictions are close to zero. Carrasco and Florens (2000) propose the analogue
to Hansen’s J test in the case where there is a continuum of moment conditions. Let
                                     n       2            n          4
                                     X     λ̂j            X        λ̂j
                             p̂n =         2      , qbn = 2    ³ 2       ´2
                                     j=1 λ̂j + αn           j=1 λ̂j + αn



where λ̂j are the eigenvalues of Kn as described earlier.

Proposition 6.8. Under the assumptions of Theorem 10 of Carrasco and Florens (2000),
we have
                         °              ³ ´°2
                         ° αn −1/2         °
                         °(Kn )    ĥn θ̂n ° − p̂n d
                   τn =                            → N (0, 1)
                                    qbn

as αn goes to zero and nα3n goes to infinity.

    This test can also be used for testing underidentification. Let θ0 ∈ R be such that
E [h (X, θ0 )] = 0. Arellano, Hansen and Sentana (2005) show that the parameter, θ0 ,
is locally unidentified if E [h (X, θ)] = 0 for all θ ∈ R. It results a continuum of mo-
ment conditions indexed by θ. Arellano et al. (2005) apply τ n to test for the null of
underidentification.

6.2.7. Extension to time series
So far, the data were assumed to be iid. Now we relax this assumption. Let {x1 , ..., xT } be
the observations of a time series {Xt } that satisfies some mixing conditions. Inference will
be based on moment functions {h (τ , Xt ; θ0 )} indexed by a real, possibly multidimensional,
index τ . {h (τ , Xt ; θ0 )} are in general autocorrelated, except in some special cases, an
example of which will be discussed below.

                                                   89
     Example 5 (Conditional characteristic function). Let Yt be a (scalar) Markov
process and assume that the conditional characteristic function (CF) of Yt+1 given Yt ,
ψ θ (τ |Yt ) ≡ E θ [exp (iτ Yt+1 ) |Yt ] , is known. The following conditional moment condition
holds
                                          £                        ¤
                                    E θ eiτ Yt+1 − ψ θ (τ |Yt ) |Yt = 0.

Denote Xt = (Yt , Yt+1 )0 . Let g (Yt ) be an instrument so that
                                            ¡                       ¢
                            h (τ , Xt ; θ) = eiτ Yt+1 − ψ θ (τ |Yt ) g (Yt )

satisfies the identification condition (6.5). {h (τ , Xt ; θ)} is a martingale difference se-
quence and is therefore uncorrelated. The use of the conditional CF is very popular in
finance. Assume that {Yt , t = 1, 2, ..., T } is a discretely sampled diffusion process, then Yt
is Markov. While the conditional likelihood of Yt+1 given Yt does not have a closed form
expression, the conditional CF of affine diffusions is known. Hence GMM can replace
MLE to estimate these models where MLE is difficult to implement. For an adequate
choice of the instrument g (Yt ), the GMM estimator is asymptotically as efficient as the
MLE. The conditional CF has been recently applied to the estimation of diffusions by
Singleton (2001), Chacko and Viceira (2003), and Carrasco et al. (2004). The first two
papers use GMM based on a finite grid of values for τ , whereas the last paper advocates
using the full continuum of moments which permits to achieve efficiency asymptotically.
    Example 6 (Joint characteristic function). Assume Yt is not Markov. In that
case, the conditional CF is usually unknown. On the other hand, the joint characteristic
function may be calculated explicitly (for instance when Yt is an ARMA process with sta-
ble error, see Knight and Yu, 2002; or Yt is the growth rate of a stochastic volatility model,
see Jiang and Knight, 2002) or may be estimated via simulations (this technique is devel-
oped in Carrasco et al., 2004). Denote ψ θ (τ ) ≡ E θ [exp (τ 1 Yt + τ 2 Yt+1 + ... + τ L+1 Yt+L )]
with τ = (τ 1 , ..., τ L )0 , the joint CF of Xt ≡ (Yt , Yt+1 , ..., Yt+L )0 for some integer L ≥ 1.
Assume that L is large enough for
                                                        0
                                    h (τ , Xt ; θ) = eiτ Xt − ψ θ (τ )

to identify the parameter θ. Here {h (τ , Xt ; θ)} are autocorrelated. Knight and Yu (2002)
estimate various models by minimizing the following norm of h (τ , Xt ; θ) :
                               Z Ã      T
                                                           !2
                                     1 X iτ 0 xt               0
                                           e     − ψ θ (τ ) e−τ τ dτ .
                                     T t=1
                                 °                      °2
                                 ° 1 PT                 °             0
This is equivalent to minimizing °B T t=1 h (τ , Xt ; θ)° with B = e−τ τ /2 . This choice of
B is suboptimal but has the advantage to be easy to implement. The optimal weighting
operator is, as before, the square root of the inverse of the covariance operator. Its
estimation will be discussed shortly.

                                                   90
                                                                                                PT
    Under some mixing conditions on {h (τ , Xt ; θ0 )} , the process ĥT (θ0 ) = T1              t=1 h (τ , Xt ; θ 0 )
follows a functional CLT (see Subsection 2.4.2):
                                         √                L
                                             T ĥT (θ0 ) → N (0, K)

where the covariance operator K is an integral operator with kernel
                                        +∞
                                        X          h                                       i
                     k (τ 1 , τ 2 ) =          E θ0 h (τ 1 , Xt ; θ0 ) h (τ 2 , Xt−j ; θ0 ) .
                                        j=−∞


The kernel k can be estimated using a kernel-based estimator as those described in An-
drews (1991) and references therein. Let ω : R → [−1, 1] be a kernel satisfying the
conditions stated by Andrews. Let q be the largest value in [0, +∞) for which

                                                        1 − ω (u)
                                           ω q = lim
                                                    u→∞    |u|q

is finite. In the sequel, we will say that ω is a q−kernel. Typically, q = 1 for the Bartlett
kernel and q = 2 for Parzen, Tuckey-Hanning and quadratic spectral kernels. We define
                                                      T −1
                                                      X       µ ¶
                                                T               j
                           k̂T (τ 1 , τ 2 ) =               ω     Γ̂T (j)                               (6.14)
                                              T − d j=−T +1    ST

with
                                       ³                  ´ ³                     ´
                          
                               1
                                    PT                   1                       1
                                t=j+1
                                T
                                      h   τ 1 , X t ; θ̂ T  h   τ 2 , X t−j ; θ̂ T , j ≥ 0
               Γ̂T (j) =     P          ³                     ´   ³                 ´                   (6.15)
                                                           1
                          T1 Tt=−j+1 h τ 1 , Xt+j ; θ̂T h τ 2 , Xt ; θ̂T , j < 0
                                                                                  1



                                                                          1
where ST is some bandwidth that diverges with T and θ̂T is a T 1/2 −consistent estimator
of θ. Let KT be the integral estimator with kernel k̂T . Under some conditions on ω
and {h (τ , Xt ; θ0 )} , Carrasco et al. (2004) establish the rate of convergence of KT to K.
Assuming ST2q+1 /T → γ ∈ (0, +∞) , we have
                                                   ¡           ¢
                                  kKT − Kk = Op T −q/(2q+1) .
                                                                                                             −1
    The inverse of K is estimated using the regularized inverse of KT , KTαT = (KT2 + αT I)                       KT
for a penalization term αT ≥ 0. As before, the optimal GMM estimator is given by
                                           °                   °
                                           °                   °
                             θ̂T = arg min °(KTαT )−1/2 ĥT (θ)° .
                                                θ∈Θ

Carrasco et al. (2004) show the following result.



                                                        91
Proposition 6.9. Assume that ω is a q−kernel and that ST2q+1 /T → γ ∈ (0, +∞) . We
have
               √                  ³ ¡­                             ´
                               L       θ0         θ0       0 ® ¢−1
                 T (θ̂T − θ0 ) → N 0, E (∇θ h) , E (∇θ h) K                 (6.16)

as T and T q/(2q+1) αT go to infinity and αT goes to zero.

    Note that the implementation of this method requires two smoothing parameters αT
and ST . No cross-validation method for selecting these two parameters simultaneously
has been derived yet. If {ht } is uncorrelated, then K can be estimated
                                                                ¡ −1/2 ¢ using the sample
average and the resulting estimator satisfies kKT − Kk = Op T           . When {ht } are
correlated, the convergence rate of KT is slower and accordingly the rate of convergence
of αT to zero is slower.


7. Estimation of the solution of an integral equation of the second
   kind
7.1. Introduction
The objective of this section is to study the properties of the solution of an integral
equation of the second kind (also called Fredholm equation of the second type) defined
by:

                                        (I − K)ϕ = r                                (7.1)

where ϕ is an element of a Hilbert space H, K is a compact operator from H to H and r
is an element of H. As in the previous sections, K and r are known functions of a data
generating process characterized by its c.d.f. F and the functional parameter of interest
is the function ϕ.
    In most cases, H is a functional space and K is an integral operator defined by its
kernel k and Equation (7.1) becomes:
                                   Z
                            ϕ(t) − k(t, s)ϕ(s)Π(ds) = r(t)                          (7.2)

The estimated operators are often degenerated, see Subsection 2.5.1. and, in that case,
Equation (7.2) simplifies into:
                                        L
                                        X
                               ϕ(t) −         a` (ϕ)ε` (t) = r(t)                   (7.3)
                                        `=1

where the a` (ϕ) are linear forms on H and ε` belongs to H for any `.
    The essential difference between equations of the first kind and of the second kind
is the compactness of the operator. In (7.1), K is compact but I − K is not compact.

                                               92
Moreover, if I − K is one-to-one, its inverse is bounded. In that case, the inverse problem
is well-posed. Even if I − K is not one-to-one, the ill-posedness of equation (7.1) is less
severe than in the first kind case because the solutions are stable in r.
    In most cases, K is a self-adjoint operator (and hence I −K is also self-adjoint) but we
will not restrict our presentation to this case. On the other hand, Equation (7.1) could be
extended by considering an equation (S − K)ϕ = r where K is a compact operator from
H to E (instead of H to H) and S is a one-to-one bounded operator from H to E with a
bounded inverse. Indeed, (S − K)ϕ = r ⇔ (I − S −1 K) ϕ = S −1 r where S −1 K : H → H
is compact. So that we are back to Equation (7.1), see Corollary 3.6. of Kress (1999).
    This section will be organized in the following way. The next paragraph recalls the
main mathematical properties of the equations of the second kind. The two following
paragraphs present the statistical properties of the solution in the cases of well-posed and
of ill-posed problems and the last paragraph applies these results to the two examples
given in Section 1.
    The implementation of the estimation procedures is not discussed here because it is
similar to the implementation of the estimation of a regularized equation of the first kind
(see Section 3). Actually, regularizations transform first kind equations into second kind
equations and the numerical methods are then formally equivalent, even though statistical
properties are fundamentally different.

7.2. Riesz theory and Fredholm alternative
We first briefly recall the main results about equations of the second kind as they were
developed at the beginning of the 20th century by Fredholm and Riesz. The statements
are given without proofs (see e.g. Kress, 1999, Chapters 3 and 4).
    Let K be a compact operator from H to H and I be the identity on H (which is
compact only if H is finite dimensional). Then, the operator I −K has a finite dimensional
null space and its range is closed. Moreover, I −K is injective if and only if it is surjective.
In that case I − K is invertible and its inverse (I − K)−1 is a bounded operator.
    An element of the null space of I−K verifies Kϕ = ϕ and if ϕ 6= 0, it is an eigenfunction
of K associated with the eigenvalue equal to 1. Equivalently the inverse problem (7.1) is
well-posed if and only if 1 is not an eigenvalue of K. The Fredholm alternative follows
from the previous results.

Theorem 7.1 (Fredholm alternative). Let us consider the two equations of the sec-
ond kind:

                                        (I − K)ϕ = r                                      (7.4)

and

                                        (I − K ∗ )ψ = s                                   (7.5)

where K ∗ is the adjoint of K. Then:


                                              93
   i) Either the two homogeneous equations (I − K)ϕ = 0 and (I − K ∗ )ψ = 0 only have
      the trivial solutions ϕ = 0 and ψ = 0 and in that case (7.4) and (7.5) have a unique
      solution for any r and s in H

  ii) or the two homogeneous equations (I − K)ϕ = 0 and (I − K ∗ )ψ = 0 have the
      same finite number m of linearly independent solutions ϕj and ψ j (j = 1, ..., m)
      respectively and the solutions of (7.4) and (7.5) exist if and only if hψ j , ri = 0 and
      hϕj , si = 0 for any j = 1, ..., m.

   (ii) means that the null spaces of I − K and I − K ∗ are finite dimensional and have
same dimensions. Moreover, the ranges of I − K and I − K ∗ satisfy

                              R (I − K) = N (I − K ∗ )⊥ ,
                              R (I − K ∗ ) = N (I − K)⊥ .

7.3. Well-posed equations of the second kind
In this subsection, we assume that I − K is injective. In this case, the problem is well-
posed and the asymptotic properties of the solution are easily deduced from the properties
of the estimation of the operator K and of the right-hand side r.
    The starting point of this analysis is the relation:
                          ³       ´−1
            ϕ̂n − ϕ0 = I − K̂n         r̂n − (I − K)−1 r
                          ³       ´−1              ·³      ´−1               ¸
                                                                          −1
                      = I − K̂n        (r̂n − r) + I − K̂n      − (I − K)      r
                          ³       ´−1 h           ³       ´             i
                      = I − K̂n          r̂n − r + K̂n − K (I − K)−1 r
                          ³       ´−1 h           ³       ´ i
                      = I − K̂n          r̂n − r + K̂n − K ϕ0                        (7.6)

where the third equality follows from A−1 − B −1 = A−1 (B − A) B −1 .

Theorem 7.2. If
     °        °
     °        °
  i) °K̂n − K ° = o (1)
      °³            ´            °     µ ¶
      °                          °      1
  ii) ° r̂n + K̂n ϕ0 − (r + Kϕ0 )° = O
                                        an
                         µ ¶
                           1
    Then kϕ̂n − ϕ0 k = O
                           an




                                             94
Proof.      As I − K is invertible and admits a continuous inverse, i) implies that
 ³        ´−1                °          °
k I − K̂n     k converges to °(I − K)−1 ° and the result follows from (7.6).
    In some cases kr − r̂n k = O( b1n ) and kK̂n − Kk = O( d1n ). Then a1n = b1n + d1n . In
some particular examples, as it will be illustrated in the last subsection, the asymptotic
behavior of r̂n − K̂n ϕ is directly considered.
    Asymptotic normality can be obtained from different sets of assumptions. The follow-
ing theorems illustrate two kinds of asymptotic normality.

Theorem 7.3. If
     °        °
     °        °
  i) °K̂n − K ° = o (1)
           ³³                  ´               ´
  ii) an        r̂n + K̂n ϕ0       − (r + Kϕ0 ) =⇒ N (0, Σ) (weak convergence in H)

   Then
                                            ¡                           ¢
                         an (ϕ̂n − ϕ0 ) =⇒ N 0, (I − K)−1 Σ (I − K ∗ )−1 .

Proof. The proof follows immediately from (7.6) and Theorem 2.47.

Theorem 7.4. We consider the case where H = L2 (Rp , π). If

   i) kK̂n − Kk = o(1)
                h³           ´            i
                                               d
  ii) ∃an s.t an r̂n + K̂n ϕ0 − (r + Kϕ0 ) (x) → N (0, σ 2 (x)) ,              ∀x ∈ Rp

 iii) ∃bn s.t abnn = o(1) and
           h³            ´          i
      bn K̂ r̂n + K̂n ϕ − (r + Kϕ0 ) =⇒ N (0, Ω) (weak convergence in H)
     Then
                                                        d  ¡          ¢
                                     an (ϕ̂n − ϕ0 ) (x) → N 0, σ 2 (x) ,    ∀x.

Proof. Using
                                        (I − K)−1 = I + (I − K)−1 K
we deduce from (7.6):

                                 n            h                       io
           an (ϕ̂n − ϕ0 )(x) = an (I − K̂n )−1 r̂n + K̂n ϕ0 − r − Kϕ0

                                     = an (r̂n + K̂n ϕ0 − r − Kϕ0 )(x)
                                                                                               (7.7)
                                       an n                                             o
                                     +     bn (I − K̂n )−1 K̂n (r̂n + K̂n ϕ0 − r − Kϕ0 ) (x)
                                       bn

                                                      95
The last term into bracket converges (weakly in L2 ) to a N (0, (I − K)−1 Ω(I − K)−1 ) and
the value of this function at any point x also converges to a normal distribution (weak
convergence implies finite dimensional convergence). Then the last term into brackets is
bounded and the result is verified.
    Note that condition (iii) is satisfied as soon as premultiplying by K increases the rate
of convergence of r̂n + K̂n ϕ. This is true in particular if K is an integral operator.
    We illustrate these results by the following three examples. The first example is an
illustrative example, while the other two are motivated by relevant econometric issues.
   Example. Consider L2 (R, Π) and (Y, Z) is a random element of R × L2 (R, Π). We
study the integral equation of the second kind defined by
                          Z
                   ϕ(x) + E F (Z(x)Z(y)) ϕ(y)Π (dy) = E F (Y Z(x))             (7.8)

denoted by ϕ + V ϕ = r. Here K = −V . As the covariance operator, V, is a positive opera-
tor, K is a negative operator and therefore 1 can not be an eigenvalue of K. Consequently,
Equation (7.8) defines a well-posed inverse problem.
    We assume that an i.i.d. sample of (Y, Z) is available and the estimated equation
(7.8) defines the parameter of interest as the solution of an integral equation having the
following form:
                               n        Z                           n
                         1X                                      1X
                  ϕ(x) +       zi (x)       zi (y)ϕ(y)Π (dy) =         yi zi (x)       (7.9)
                         n i=1                                   n i=1
                                                                            ³ ´
Under some standard regularity conditions, one can check that kV̂n − V k = O √1n and
that
              ½      ·    Z                 ¸                 Z                      ¾
     √ 1X                                         F                F
       n       zi (·) yi − zi (y)ϕ(y)Π(dy) − E (Y Z (·)) − E (Z(.)Z(y))ϕ(y)Π(dy)
         n i
   ⇒ N (0, Σ) in L2 (R, Π).
                             R
If for instance E F (Y |Z) = Z(y)ϕ(y)Π(dy) and under a homoscedasticity hypothesis the
operator Σ is a covariance operator with kernel σ 2 E F (Z(x)Z(y)) where
                                   µ     Z                    ¶
                            2
                           σ = V ar Y − Z(y)ϕ(y)Π(dy)|Z .

Then, from Theorem 7.3,

                    √                    ¡                               ¢
                        n (ϕ̂n − ϕ0 ) ⇒ N 0, σ 2 (I + V )−1 V (I + V )−1




                                               96
    Example. Rational expectations asset pricing models:
    Following Lucas (1978), rational expectations models characterize the pricing func-
tional as a function ϕ of the Markov state solution of an integral equation:
                        Z                          Z
                ϕ (x) − a(x, y)ϕ (y) f (y|x) dy = a(x, y)b(y)f (y|x) dy          (7.10)

While f is the transition density of the Markov state, the function a denotes the marginal
rate of substitution and b the dividend function. For sake of expositional simplicity, we
assume here that the functions a and b are both known while f is estimated nonpara-
metrically by a kernel method. Note that if the marginal rate of substitution a involves
some unknown preference parameters (subjective discount factor, risk aversion param-
eter), they will be estimated, for instance by GMM, with a parametric root n rate of
convergence. Therefore, the nonparametric inference about ϕ (deduced from the solution
of (7.10) using a kernel estimation of f ) is not contaminated by this parametric estima-
tion; all the statistical asymptotic theory can be derived as if the preference parameters
were known.
    As far as kernel density estimation is concerned, it is well known that under mild
conditions (see e.g. Bosq (1998)) it is possible to get the same convergence rates and the
same asymptotic distribution with stationary strongly mixing stochastic processes as in
the i.i.d. case.
    Let us then consider a n-dimensional stationary stochastic process Xt and H the
space of square integrable functions of one realization of this process. In this example, H
is defined with respect to the true distribution. The operator K is defined by

                      Kϕ (x) = E F (a (Xt−1 , Xt ) ϕ (Xt ) |Xt−1 = x)

and

                        r (x) = E F (a (Xt−1 , Xt ) b(Xt )|Xt−1 = x)

We will assume that K is compact through possibly a Hilbert-Schmidt condition (see
Assumption A.1 of Section 5.5 for such a condition). A common assumption in rational
expectation models is that K is a contraction mapping, due to discounting. Then, 1 is
not an eigenvalue of K and (7.10) is a well-posed Fredholm integral equation.
    Under these hypotheses, both numerical and statistical issues associated with the
solution of (7.10) are well documented. See Rust, Traub and Wozniakowski (2002) and
references therein for numerical issues. The statistical consistency of the estimator ϕ̂n
obtained from the kernel estimator K̂n is deduced from Theorem 7.2 above. Assumption
i) is satisfied because K̂n − K has the same behavior as the conditional expectation
operator and

                     r̂n + K̂n ϕ − r − Kϕ
                          = E Fn (a (Xt−1 , Xt ) (b(Xt ) + ϕ (Xt )) |Xt−1 )
                          −E F (a (Xt−1 , Xt ) (b(Xt ) + ϕ (Xt )) |Xt−1 )

                                              97
                               ³               ´1/2
                          1         1
converges at the speed   an
                            =      ncm
                                       + c4n  if cn is the bandwidth of the (second order)
                                     n
kernel estimator and m is the dimension of X.
   The weak convergence follows from Theorem 7.4. Assumption ii) of Theorem 7.4 is
the usual result on the normality of kernel estimation of conditional expectation. As K is
an integral operator, the transformation by K increases the speed of convergence, which
implies iii) of Theorem 7.4.

   Example. Partially Nonparametric forecasting model:
   This example is drawn from Linton and Mammen (2003). Nonparametric prediction
of a stationary ergodic scalar random process Xt is often performed by looking for a
predictor m (Xt−1 , ..., Xt−d ) able to minimize the mean square error of prediction:

                                E [Xt − m (Xt−1 , ..., Xt−d )]2

   In other words, if m can be any squared integrable function, the optimal predictor is
the conditional expectation

                          m0 (Xt−1,..., Xt−d ) = E [Xt |Xt−1,..., Xt−d ]

and can be estimated by kernel smoothing or any other nonparametric way to estimate a
regression function. The problems with this kind of approach are twofold. First, it is often
necessary to include many lagged variables and the resulting nonparametric estimation
surface suffers from the well-known “curse of dimensionality”. Second, it is hard to
describe and interpret the estimated regression surface when the dimension is more than
two.
    A solution to deal with these problems is to think about a kind of nonparametric
generalization of ARMA processes. For this purpose, let us consider semiparametric
predictors of the following form
                                                        ∞
                                                        X
                      E [Xt |It−1 ] = mϕ (θ, It−1 ) =         aj (θ) ϕ (Xt−j )       (7.11)
                                                        j=1

where θ is an unknown finite dimensional vector of parameters, aj (.) , j ≥ 1, are known
scalar functions, and ϕ (.) is the unknown functional parameter of interest. The notation

                                   E [Xt |It−1 ] = mϕ (θ, It−1 )

stresses the fact that the predictor depends on the true unknown value of the parameters
θ and ϕ, and of the information It−1 available at time (t − 1) as well. This information is
actually the σ-field generated by Xt−j , j ≥ 1. A typical example is

                          aj (θ) = θj−1 for j ≥ 1 with 0 < θ < 1.                    (7.12)

Then, the predictor defined in (7.11) is actually characterized by

                          mϕ (θ, It−1 ) = θmϕ (θ, It−2 ) + ϕ (Xt−1 )                 (7.13)

                                                  98
    In the context of volatility modelling, Xt would denote a squared asset return over
period [t − 1, t] and mϕ (θ, It−1 ) the so-called squared volatility of this return as expected
at the beginning of the period. Engle and Ng (1993) have studied such a partially non-
parametric (PNP for short) model of volatility and called the function ϕ the “news impact
function”. They proposed an estimation strategy based on piecewise linear splines. Note
that the PNP model includes several popular parametric volatility models as special cases.
For instance, the GARCH (1,1) model of Bollerslev (1986) corresponds to ϕ (x) = w + αx
while the Engle (1990) asymmetric model is obtained for ϕ (x) = w + α (x + δ)2 . More
examples can be found in Linton and Mammen (2003).
    The nonparametric identification and estimation of the news impact function can be
derived for a given value of θ. After that, a profile criterion can be calculated to estimate
θ. In any case, since θ will be estimated with a parametric rate of convergence, the
asymptotic distribution theory of a nonparametric estimator of ϕ is the same as if θ were
known. For sake of notational simplicity, the dependence on unknown finite dimensional
parameters θ is no longer made explicit.

    At least in the particular case (7.12)-(7.13), ϕ is easily characterized as the solution
of a linear integral equation of the first kind

                          E [Xt − θXt−1 |It−2 ] = E [ϕ (Xt−1 ) |It−2 ]

Except for its dynamic features, this problem is completely similar to the nonparametric
instrumental regression example described in Section 5.5. However, as already mentioned,
problems of the second kind are often preferable since they may be well-posed. As shown
by Linton and Mammen (2003) in the particular case of a PNP volatility model, it is
actually possible to identify and consistently estimate the function ϕ defined as
                                         "       ∞
                                                                #2
                                                X
                          ϕ = arg min E Xt −        aj ϕ (Xt−j )                  (7.14)
                                      ϕ
                                                   j=1


from a well-posed linear inverse problem of the second kind. When ϕ is an element of the
Hilbert space L2F (X), its true unknown value is characterized by the first order conditions
obtained by differentiating in the direction of any vector h
                      "Ã         ∞
                                               !Ã ∞               !#
                                X                 X
                    E     Xt −     aj ϕ (Xt−j )       al h (Xt−l )   =0
                                j=1                  l=1




                                              99
In other words, for any h in L2F (X)
                     ∞
                     X
                          aj E X [E [Xt |Xt−j = x] h (x)]
                     j=1
                       X∞
                     −       a2j E X [ϕ (x) h (x)]                                       (7.15)
                         j=1
                         X∞ X∞
                     −              aj al E X [E [ϕ (Xt−l ) |Xt−j = x] h(x)] = 0
                         j=1 l=1
                             l6=j

where E X denotes the expectation with respect to the stationary distribution of Xt . As
equality (7.15) is true for all h, it is true in particular for a complete sequence of functions
of L2F (X). It follows that
                            ∞
                                                       Ã∞ !
                           X                             X
                                aj E [Xt |Xt−j = x] −         a2l ϕ (x)
                            j=1                                 l=1
                              X∞ X
                                 ∞
                            −              aj al E [ϕ (Xt−l ) |Xt−j = x] = 0
                                j=1 l6=j


P X − almost surely on the values of x. Let us denote

                rj (Xt ) = E [Xt+j |Xt ] and Hk (ϕ) (Xt ) = E [ϕ (Xt+k ) |Xt ] .

Then, we have proved that the unknown function ϕ of interest must be the solution of
the linear inverse problem of the second kind

                                    A (ϕ, F ) = (I − K) ϕ − r = 0                        (7.16)

where
                                            Ã∞           !−1 ∞
                                             X              X
                                       r=          a2j           aj rj ,
                                  Ã ∞ j=1 !−1 ∞ j=1
                                   X         XX
                              K=−      a2j          aj al Hj−l ,
                                            j=1           j=1 l6=j

and, with a slight change of notation, F characterizes now the probability distribution of
the stationary process (Xt ) .
    To study the inverse problem (7.16), it is first worth noticing that K is a self adjoint
integral operator. Indeed, while
                           Ã ∞ !−1 +∞                               
                               X        X             +∞
                                                      X
                      K=         a2j        Hk              al al+k 
                                 j=1           h=±1          l=max[1,1−k]



                                                    100
we immediately deduce from Subsection 2.5.1 that the conditional expectation operator
Hk is such that
                                            Hk∗ = H−k
and thus K = K ∗ , since
                              +∞
                              X                              +∞
                                                             X
                                          al al+k =                  al al−k
                           l=max[1,1−k]               l=max[1,1+k]

As noticed by Linton and Mammen (2003), this property greatly simplifies the practical
implementation of the solution of the sample counterpart of equation (7.19). But, even
more importantly, the inverse problem (7.19) will be well-posed as soon as one maintains
the following identification assumption about the news impact function ϕ.
   Assumption
   P∞             A. There exists no θ and ϕ ∈ L2F (X) with ϕ 6= 0 such that
    j=1 aj (θ) ϕ (Xt−j ) = 0 almost surely.

   To see this, observe that Assumption A means that for any non-zero function ϕ
                                     "∞              #2
                                      X
                               0<E       aj ϕ (Xt−j ) ,
                                            j=1

that is
                            ∞
                            X                    ∞ X
                                                 X ∞
                       0<         a2j hϕ, ϕi +               al aj hϕ, Hj−l ϕi .
                            j=1                   j=1 l=1
                                                      l6=j

Therefore
                                    0 < hϕ, ϕi − hϕ, Kϕi                            (7.17)
for non zero ϕ. In other words, there is no non-zero ϕ such that
                                             Kϕ = ϕ
and the operator (I − K) is one-to-one. Moreover, (7.17) implies that (I − K) has eigen-
values bounded from below by a positive number. Therefore, if K depends continuously
on the unknown finite dimensional vector θ of parameters and if θ evolves in some compact
set, the norm of (I − K)−1 will be bounded from above, uniformly on θ.
    It is also worth noticing that the operator K is Hilbert-Schmidt and a fortiori compact
under reasonable assumptions. As already mentioned in Subsection 2.5.1, the Hilbert-
Schmidt property for the conditional expectation operator Hk is tantamount to the inte-
grability condition
                       Z Z ·                   ¸
                              fXt ,Xt−k (x, y) 2
                                                 fXt (x) fXt (y) dxdy < ∞
                               fXt (x) fXt (y)

                                                  101
It amounts to say that there is not too much dependence between Xt and Xt−k . This should
be tightly related to the ergodicity or mixing assumptions about the stationary process
Xt . Then, if all the conditional expectation operator Hk , k ≥ 1, are Hilbert-Schmidt, the
operator K will also be Hilbert-Schmidt insofar as
                                    ∞ X
                                    X
                                                a2j a2l < +∞.
                                     j=1 l6=j


    Up to a straightforward generalization to stationary mixing processes of results only
stated in the i.i.d. case, the general asymptotic theory of Theorems 7.3 and 7.4 can then
be easily applied to nonparametric estimators of the news impact function ϕ based on
the Fredholm equation of the second kind (7.15). An explicit formula for the asymptotic
variance of ϕ̂n as well as a practical implementation by solution of matricial equations
similar to those of Subsection 3.4 (without need of a Tikhonov regularization) is provided
by Linton and Mammen (2003) in the particular case of volatility modelling.
    However, an important difference with the i.i.d. case (see for instance assumption
A.3 in Section 5.5 about instrumental variables) is that the conditional homoskedasticity
assumption cannot be maintained about conditional probability distribution of Xt given
its own past. This should be particularly detrimental in the case of volatility modelling
since, when Xt denotes a squared return, it will be in general even more conditionally
heteroskedastic than returns themselves. Such a severe conditional heteroskedasticity will
likely imply a poor finite sample performance and a large asymptotic variance of the
estimator ϕ̂n defined from the inverse problem (7.15), that is from the least squares
problem (7.14). Indeed, ϕ̂n is a kind of OLS estimator in infinite dimension. In order to
better take into account conditional heteroskedasticity of Xt in the context of volatility
modelling, Linton and Mammen (2003) propose to replace the least squares problem
(7.14) by a quasi-likelihood kind of approach where the criterion to optimize is defined
from the density function of a normal conditional probability distribution of returns, with
variance mϕ (θ, It−1 ) . Then, the difficulty is that the associated first order conditions now
characterize the news impact function ϕ as solution of a nonlinear inverse problem. Linton
and Mammen (2003) suggest to work with a version of this problem which is locally
linearized around the previously described least squares estimator ϕ̂n (and associated
consistent estimator of θ).

7.4. Ill-posed equations of the second kind
The objective of this section is to study equations (I − K)ϕ = r where 1 is an eigenvalue
of K, i.e. where I − K is not injective (or one-to-one). For simplicity, we restrict our
analysis to the case where the order of multiplicity of the eigenvalue 1 is one and the
operator K is self-adjoint. This implies that the dimension of the null spaces of I − K is
one and using the results of Section 7.2, the space H may be decomposed into

                                H = N (I − K) ⊕ R(I − K)


                                                102
i.e. H is the direct sum between the null space and the range of I − K, both closed. We
denote by PN r the projection of r on N (I − K) and by PR r the projection of r on the
range R(I − K).
    Using ii) of Theorem 7.1, a solution of (I − K)ϕ = r exists in the non injective case
only if r is orthogonal to N (I − K) or, equivalently, if r belongs to R(I − K). In other
words, a solution exists if and only if r = PR r. However in this case, this solution is not
unique and there exists a one dimensional linear manifold of solutions. Obviously, if ϕ
is a solution, ϕ plus any element of N (I − K) is again a solution. This non uniqueness
problem will be solved by a normalization rule which selects a unique element in the set
of solutions. The normalization we adopt is
                                          hϕ, φ1 i = 0                                   (7.18)
where φ1 is the eigenfunction of K corresponding to the eigenvalue equal to 1.
    In most statistical applications of equations of the second kind, the r element corre-
sponding to the true data generating process is assumed to be in the range of I − K where
K is also associated with the true DGP. However, this property is no longer true if F is
estimated and we need to extend the resolution of (I − K)ϕ = r to cases where I − K is
not injective and r is not in the range of this operator. This extension must be done in
such a way that the continuity properties of inversion are preserved.
    For this purpose we consider the following generalized inverse of (I − K). As K is
a compact operator, it has a discrete spectrum λ1 = 1, λ2 ,... where only 0 may be an
accumulation point (in particular 1 cannot be an accumulation point). The associated
eigenfunctions are φ1 , φ2 , .... Then we define:
                                    ∞
                                    X     1
                             Lu =               hu, φj iφj ,   u∈H                       (7.19)
                                    j=2
                                        1 − λ j


Note that L = (I − K)† is the generalized inverse of I − K, introduced in Section 3.
Moreover, L is continuous and therefore bounded because 1 is an isolated eigenvalue. This
operator computes the unique solution of (I − K)ϕ = PR u satisfying the normalization
rule (7.18). It can be easily verified that L satisfies:
                                   LPR = L = PR L,
                               L(I − K) = (I − K)L = PR .                                (7.20)
   We now consider estimation. For an observed sample, we obtain the estimator Fn of
F (that may be built from a kernel estimator of the density) and then the estimators r̂n
and K̂n of r and K respectively. Let φ̂1 , φ̂2 , ... denote the eigenfunctions of K̂n associated
with λ̂1 , λ̂2 , ... We restrict our attention to the cases where 1 is also an eigenvalue of
multiplicity one of K̂n (i.e. λ̂1 = 1). However, φ̂1 may be different from φ1 .
   We have to make a distinction between two cases. First, assume that the Hilbert
space H of reference is known and in particular the inner product is given (for example
H = L2 (Rp , Π) with Π given), the normalization rule imposed to ϕ̂n is
                                          hϕ̂n , φ̂1 i = 0

                                               103
and L̂n is the generalized inverse of I − K̂n in H (which depends on the Hilbert space
structure) where

                                         ∞
                                         X      1
                               L̂n u =                 hu, φ̂j iφ̂j ,   u∈H
                                         j=2 1 − λ̂j


Formula (7.20) applies immediately for Fn .
    If however the Hilbert space H depends on F (e.g. H = L2 (Rp , F )), we need to assume
that L2 (R, Fn ) ⊂ L2 (Rp , F ). The orthogonality condition, which defines the normalization
rule (7.18) is related to L2 (Rp , F ) but the estimator ϕ̂n of ϕ will be normalized by

                                             hϕ̂n , φ̂1 in = 0

where h , in denotes the inner product relative to Fn . This orthogonality is different from
an orthogonality relative to h , i. In the same way L̂n is now defined as the generalized
inverse of I − K̂n with respect to the estimated Hilbert structure, i.e.
                                             ∞
                                             X         1
                                   L̂n u =                   hu, φ̂j in φ̂j
                                             j=2 1 − λ̂j


and L̂n is not the generalized inverse of I − K̂n in the original space H. The advantages
of this definition is that L̂n may be effectively computed and satisfies the formula (7.20)
where Fn replaces³ F . In´the sequel PRn denotes the projection for the inner product <,
>n on Rn = R I − K̂n .
    To establish the consistency, we will use the following equality.

                       L̂n − L = L̂n (K̂n − K)L
                               + L̂n (PRn − PR ) + (PRn − PR )L.                      (7.21)

It follows from (7.20) and L̂n − L = L̂n PRn − PR L = L̂n (PRn − PR ) + (PRn − PR )L −
PRn L + L̂n Pr and L̂n (Kn − K) L = L̂n (Kn − I) L + L̂n (I − K) L = PRn L + L̂n Pr .
    The convergence property is given by the following theorem.

Theorem 7.5. Let us define ϕ0 = Lr and ϕ̂n = L̂n r̂n . If
     °        °
     °        °
  i) °K̂n − K ° = o (1)
                        ³ ´
                           1
  ii) kPRn − PR k = O     bn
      °                            °    ³ ´
      °                            °
 iii) °(r̂n + K̂n ϕ0 ) − (r + Kϕ0 )° = O a1n



                                                    104
   Then
                                                 µ           ¶
                                                     1   1
                               kϕ̂n − ϕ0 k = O         +         .
                                                     an bn

Proof. The proof is based on:

                     ϕ̂n − ϕ0 =    L̂n r̂n − Lr
                              =    L̂n (r̂n − r) + (L̂n − L)r
                              =    L̂n (r̂n − r) + L̂n (K̂n − K)ϕ0                  (7.22)
                              +    L̂n (PRn − PR ) r + (PRn − PR )ϕ0

deduced from (7.21). Then

                    kϕ̂n − ϕ0 k ≤ kL̂n kk(r̂n + K̂n ϕ0 ) − (r + Kϕ0 )k
                                + (kL̂n kkrk + kϕk)kPRn − PR k                      (7.23)

Under i) and ii) kL̂n − Lk = o(1) from (7.21). This implies kL̂n k → kLk and the result
follows.
       an                                                           1
    If    = O (1) , the actual speed of convergence is bounded by      . This will be the
       bn                                                           an
                                       an
case in the two examples of 7.5 where     → 0.
                                       bn
    We consider asymptotic normality in this case. By (7.20), we have L̂n = PRn + L̂n K̂n ,
hence:

                             ϕ̂n − ϕ0
                                   h                          i
                           = PRn (r̂n + K̂n ϕ0 ) − (r + Kϕ0 )                       (7.24)
                                     h                           i
                           + L̂n K̂n (r̂n + K̂n ϕ0 ) − (r + Kϕ0 )                   (7.25)
                           + L̂n (PRn − PR )r + (PRn − PR )ϕ0                       (7.26)

Let us assume that there exists a sequence an such that i) and ii) below are satisfied
            h                            i
   i) an PRn (r̂n + K̂n ϕ0 ) − (r + Kϕ0 ) (x) has an asymptotic normal distribution,
        h                                 i           h                 i
  ii) an L̂n K̂n (r̂n + K̂n ϕ0 − r − Kϕ0 ) (x) → 0, an L̂n (PRn − PR ) r (x) → 0,

   and an [(PRn − PR )ϕ0 ] (x) → 0 in probability.
   Then the asymptotic normality of an (ϕ̂n − ϕ0 ) is driven by the behavior of (7.24).
This situation occurs in the nonparametric estimation as illustrated in the next section.



                                           105
7.5. Two examples: backfitting estimation in additive models and panel model
7.5.1. Backfitting estimation in additive models
Using the notation of Subsection 1.3.5, an additive model is defined by

                                (Y, Z, W ) ∈ R × Rp × Rq
                                Y = ϕ(Z) + ψ(W ) + U                               (7.27)
                                E(U |Z, W ) = 0,

in which case (see (1.24)), the function ϕ is solution of the equation:

                   ϕ − E [E(ϕ (Z) |W )|Z] = E(Y |Z) − E [E(Y |W )|Z]

and ψ is the solution of an equation of the same nature obtained by a permutation of
W and Z. The backfitting algorithm of Breiman and Friedman (1985) , and Hastie and
Tibshirani (1990) is widely used to estimate ϕ and ψ in Equation (7.27).Mammen, Linton,
and Nielsen (1999) derive the asymptotic distribution of the backfitting procedure. Al-
ternatively, Newey (1994), Tjostheim and Auestad (1994), and Linton and Nielsen (1995)
propose to estimate ϕ (respectively ψ) by integrating an estimator of E [Y |Z = z, W = w]
with respect to w (respectively z).
    We focus our presentation on the estimation of ϕ. It appears as the resolution of a
linear equation of the second kind. More precisely, we have in that case:

   • H is the space of the square integrable functions of Z with respect to the true data
     generating process. This definition simplifies our presentation but an extension to
     different spaces is possible.

   • The unknown function ϕ is an element of H. Actually asymptotic considerations
     will restrict the class of functions ϕ by smoothness restrictions.

   • The operator K is defined by Kϕ = E [E(ϕ (Z) |W )|Z]. This operator is self adjoint
     and we assume its compactness. This compactness may be obtained through the
     Hilbert Schmidt Assumption A.1 of Subsection 5.5.

   • The function r is equal to E(Y |Z) − E [E(Y |W )|Z].

   The operator I − K is not one-to-one because the constant functions belong to the
null space of this operator. Indeed, the additive model (7.27) does not identify ϕ and ψ.
We introduce the following assumption (see Florens, Mouchart, and Rolin (1990)), which
warrants that ϕ and ψ are exactly identified up to an additive constant or, equivalently,
that the null space of I − K only contains the constants (meaning 1 is an eigenvalue of
K of order 1).
   Identification assumption. Z and W are measurably separated w.r.t. the distri-
bution F i.e. a function of Z almost surely equal to a function of W is almost surely
constant.

                                            106
     This assumption implies that if ϕ1 , ϕ2 , ψ 1 , ψ 2 are such that E(Y |Z, W ) = ϕ1 (Z) +
ψ 1 (W ) = ϕ2 (Z) + ψ 2 (W ) then ϕ1 (Z) − ϕ2 (Z) = ψ 2 (W ) − ψ 1 (W ) which implies that
ϕ1 − ϕ2 and ψ 2 − ψ 1 are a.s. constant. In terms of the null set of I − K we have:
                                     Kϕ = ϕ
                    ⇐⇒ E [E(ϕ (Z) |W )|Z] = ϕ (Z)
                        £                ¤
                    =⇒ E (E [ϕ (Z) |W ])2 = E [ϕ (Z) E (ϕ(Z)|W )]
                                              ¡       ¢
                                           = E ϕ2 (Z) .
But, by Pythagore theorem
                             ϕ(Z) = E(ϕ (Z) |W ) + υ
                         ¡ 2    ¢    ¡               ¢
                        E ϕ (Z) = E (E (ϕ (Z) |W ))2 + Eυ 2 .
Then:
                               Kϕ = ϕ =⇒ υ = 0
                                  ⇔ ϕ(Z) = E [ϕ(Z) |W ] .
Then, if ϕ is an element of the null set of I − K, ϕ is almost surely equal to a function of
W and is therefore constant.
    The eigenvalues of K are real positive and smaller than 1 except for the first one, that
is 1 = λ1 > λ2 > λ3 > ...1 The eigenfunctions are such that φ1 = 1 and the condition
hϕ, φ1 i = 0 means that ϕ has an expectation equal to zero. The range of I − K is the set
of functions with a mean equal to 0 and the projection of u, PR u, equals u − E(u).
    It should be noticed that under the hypothesis of additive model, r has zero mean
and is then an element of R(I − K). Then, a unique (up to the normalization condition)
solution of the structural equation (I − K)ϕ = r exists.
    The estimation may be done by kernel smoothing. The joint density is estimated by

                                   Xn    µ        ¶ µ        ¶ µ        ¶
                                1          y − yi     z − zi     w − wi
              fn (y, z, w) = 1+p+q     ω           ω          ω                           (7.28)
                            ncn    i=1
                                             c n        cn         cn

and Fn is the c.d.f. associated to fn . The estimated K̂n operator verifies:

                                              Z
                               (K̂n ϕ)(z) =        ϕ (u) ân (u, z) du                    (7.29)

where
                                        Z ˆ
                                          fn (., u, w) fˆn (., z, w)
                           ân (u, z) =                                dw.
                                           fˆn (., ., w) fˆn (., z, .)
  1
    Actually K = T ∗ T when T ϕ = E(ϕ|W ) and T ∗ ψ = E(ψ|Z) when ψ is a function of W . The
eigenvalues of K correspond to the squared singular values of the T and T ∗ defined in Section 2.

                                                  107
The operator K̂n must be an operator from H to H (it is by construction an operator
                                                  z−z`
                                              ω(        )
from L2Z (Fn ) into L2Z (Fn )). Therefore, P cz−z    n
                                                           must be square integrable w.r.t. F .
                                               ` ω (  cn )
                                                        `

   The estimation of r by r̂n verifies
                                             n
                                                 Ã          n
                                                                      ! µ        ¶
                                   1        X              X              z − z`
                   r̂n (z) = P n  ³       ´          y` −      yi ω `i ω
                                     z−z`                                   cn
                                 ω cn       `=1            i=1
                           `=1

                  w` − wi !
               ω
where ω `i = X       cn      .
                   w` − wj !
              n

                 ω
             j=1
                       cn

    The operator K̂n has also 1 as the greatest eigenvalue corresponding to an eigenfunc-
tion equal to 1. Since Fn is a mixture of probabilities for which Z and W are independent,
the measurable separability between Z and W is fulfilled. Then, the null set of I − K̂n
reduces to a.s. (w.r.t. Fn ) constant functions. The generalized inverse of an operator
depends on the inner product of the Hilbert space because it is defined as the function ϕ
of minimal norm which minimizes the norm of K̂n ϕ − r̂n . The generalized inverse in the
space L2Z (F ) cannot be used for the estimation because it depends on the actual unknown
F . Then we construct L̂n as the generalized inverse in L2Z (Fn ) of I − K̂n . The practical
computation of L̂n can be done by computing the n eigenvalues of K̂n , λ̂1 = 1, ..., λ̂n and
the n eigenfunctions φ̂1 = 1, φ̂2 , ..., φ̂n . Then

                                  n
                                  X             ½Z                      ¾
                                         1
                        L̂n u =                      u(z)φ̂j (z)fˆn (z)dz φ̂j
                                  j=2 1 − λ̂j


   It can be easily checked that property (7.20) is verified where PRn is the projection
(w.r.t. Fn ) on the orthogonal of the constant function. This operator subtracts to any
functions its empirical mean computed through the smoothed density:
                                            Z        µ        ¶
                                     1 X               z − zi
                        PRn u = u − p          u(z)ω            dz
                                    ncn i                cn

    The right hand side of the equation (I − K̂n )ϕ = r̂n has a mean equal to 0 (w.r.t. Fn ).
Hence, this equation has a³unique  ´ solution ϕ̂n = L̂n ϕ0 which satisfies the normalization
           1
              P R             z−zi
condition ncpn i ϕ̂n (z)ω cn dz = 0.
    The general results of Section 7.4 apply. First, we check that the conditions i) to iii)
of Theorem 7.5 are fulfilled.

   i) Under very general assumptions, kK̂n − Kk → 0 in probability.

                                                 108
ii) We have to check the properties of PRn − PR
                                  Z        µ        ¶     Z
                           1 X               z − zi
          (PRn − PR )ϕ = p           ϕ(z)ω            dz − ϕ(z)f (z)dz.
                          ncn i                cn
                                                  ¯    P R         ³       ´          ¯2
                                                  ¯                                   ¯
    The asymptotic behavior of k(PRn −PR )ϕk2 = ¯ nc1pn ni=1 ϕ(z)ω z−zcn
                                                                         i
                                                                             dz − E(ϕ)¯
    is the same as the asymptotic behavior of the expectation of this positive random
    variable:
                         Ã       n Z       µ        ¶           !2
                            1 X              z − zi
                       E             ϕ(z)ω             dz − E(ϕ) .
                           ncpn i=1            cn

    Standard
      µ        computation
                         ¶     on this expression shows that this mean square error is
        1    2min(d,d0 )
    O     + cn             kϕk2 , where d is the smoothness degree of ϕ and d0 the order of
        n
    the kernel.

iii) The last term we have to consider is actually not computable but its asymptotic
     behavior is easily characterized. We simplify the notation by denoting E Fn (.|.) the
     estimation of a conditional expectation. The term we have to consider is

     (r̂n + K̂n ϕ) − (r + Kϕ) =    E Fn (Y |Z) − E Fn (E Fn (Y |W )|Z) + E Fn (E Fn (ϕ(Z)|W )|Z)
                              −    E F (Y¡ |Z) + E F (E F (Y |W )|Z) − E F (E F (ϕ(Z)|W
                                                                                 ¢      )|Z)
                                     Fn          F              F
                              =    E ¡ Y − E (Y |W ) + E (ϕ (Z) |W ) |Z¢
                              −    E F Y − E F (Y |W ) + E F (ϕ (Z) |W ) |Z
                              −    R

                 ©                                          ª
    where R = E F E Fn (Y − ϕ (Z) |W ) − E F (Y − ϕ (Z) |W ) . Moreover

                           E F (Y |W ) = E F (ϕ (Z) |W ) + ψ (W ) .

    Then
      ³            ´
        r̂n + K̂n ϕ − (r + Kϕ) = E Fn (Y − ψ (W ) |Z) − E F (Y − ψ (W ) |Z)
                               − R.

    The R term converges to zero at a faster rate than the first part of the r.h.s. of this
    equation and can be neglected. We have seen in the other parts of this chapter that
                                                            µ             ¶
               Fn                   F                 2         1      2ρ
            kE (Y − ψ(W )|Z) − E (Y − ψ(W )|Z)k = 0                 + cn
                                                               ncpn

    where ρ depends on the regularity assumptions. Therefore, Condition iii) of Theo-
    rem 7.5 is fulfilled.

                                          109
 µ From Theorem
            ¶     7.5, it follows that kϕ̂n − ϕ0 k → 0 in probability and that kϕ̂n − ϕ0 k =
0 √1 p + cρn .
     ncn
                                             √
   The pointwise asymptotic normality of ncρn (ϕ̂n (z) − ϕ0 (z)) can now be established.
We apply the formulas (7.24) to (7.26) and Theorem 7.4.
                                                                                    ρ+2 min(d,r)
  1) First, consider (7.26). Under a suitable condition on cn (typically ncn                       → 0),
     we have:
     √ pn                                     o
       ncn L̂n (PRn − PR )r + (PRn − PR )ϕ0 → 0 in probability.

  2) Second, consider (7.25). Using the same argument as in Theorem 7.4, a suitable
     choice of cn implies that

                         p                  h                               i
                             ncρn L̂n K̂n       (r̂n + K̂n ϕ0 ) − (r + Kϕ0 ) → 0.                  (7.30)

     Actually, while E Fn (Y − ψ(W )|Z) − E F (Y − ψ(W )|Z) only converges pointwise
     at a nonparametric speed, the transformation by the operator K̂n converts this
     convergence into a functional convergence at a parametric speed. Then
                 p       ° £                                       ¤°
                         °                                          °
                    ncpn °K̂n E Fn (Y − ψ(W )|Z) − E F (Y − ψ(W )|Z ° → 0.

     Moreover, L̂n converges in norm to L, which is a bounded operator. Hence, the
     result of (7.30) follows.
                                                            √
  3) It remains the term (7.24). The convergence of ncpn (ϕFn (z) − ϕF (z)) is then
     identical to the convergence of
        √ p        £                                                ¤
          ncn PR"n E Fn (Y − ψ(W )|Z = z) − E F (Y − ψ(W )|Z = z
           √
        = ncpn E Fn (Y − ψ(W )|Z = z) − E F (Y − ψ(W )|Z = z)
                                        Z Z                           µ          ¶     #
             X                        P                                 z −  z i
        − n1    (yi − ψ(wi )) − nc1pn       (y − ψ(w))f (y, w|Z = z)ω              dzdw .
              i                       i                                   cn


     It can easily be checked that the √
                                       difference between the two sample means converge
     to zero at a higher speed than ncpn and these two last terms can be neglected.
     Then, using standard results on nonparametric estimation, we obtain:
                                       Ã                          R            !
         p                         d                                ω (u) 2
                                                                            du
           ncpn (ϕFn (z) − ϕF (z)) → N 0, V ar(Y − ψ(W )|Z = z)
                                                                     fZ (z)

     where the 0 mean of the asymptotic distribution is obtained thanks to a suitable
     choice of the bandwidth, which needs to converge to 0 faster than the optimal speed.

                                                     110
   Note that the estimator of ϕ has the same properties as the oracle estimator based on
the knowledge of ψ. This attractive feature was proved by Mammen, Linton, and Nielsen
(1999) using different tools.

7.5.2. Estimation of the bias function in a measurement error equation
We have introduced in Example 1.3.6, Section 1, the measurement error model:

                           ½
                               Y1 = η + ϕ (Z1 ) + U1        Y1 , Y 2 ∈ R
                               Y2 = η + ϕ (Z2 ) + U2        Z1 , Z 2 ∈ R p
when η, Ui are random unknown elements and Y1 and Y2 are two measurements of η con-
taminated by a bias term depending on observable elements Z1 and Z2 . The unobservable
component η is eliminated by difference and we get the model under consideration :

                                     Y = ϕ (Z2 ) − ϕ (Z1 ) + U                                   (7.31)

when Y = Y2 − Y1 and E (Y |Z1 , Z2 ) = ϕ (Z2 ) − ϕ (Z1 ) . We assume that i.i.d. obser-
vations of (Y, Z1 , Z2 ) are available. Moreover, the order of measurements is arbitrary or
equivalently (Y1 , Y2 , Z1 , Z2 ) is distributed identically to (Y2 , Y1 , Z2 , Z1 ) . This implies that
(Y, Z1 , Z2 ) and (−Y, Z2 , Z1 ) have the same distribution. In particular, Z1 and Z2 are
identically distributed.

   • The reference space H is the space of random variables defined on Rp that are square
     integrable with respect to the true marginal distribution on Z1 (or Z2 ). We are in a
     case where the Hilbert space structure depends on the unknown distribution
   • The function ϕ is an element of H but this set has to be reduced by smoothness
     condition in order to obtain asymptotic properties of the estimation procedure.
   • The operator K is the conditional expectation operator
                                   (Kϕ) (z) = E F (ϕ (Z2 ) |Z1 = z)
                                            = E F (ϕ (Z1 ) |Z2 = z)
      from H to H. The two conditional expectations are equal because (Z1 , Z2 ) and
      (Z2 , Z1 ) are identically distributed (by the exchangeability property). This operator
      is self-adjoint and we suppose that K is compact. This property may be deduced as
      in previous cases from an Hilbert Schmidt argument.

   Equation (7.31) introduces an overidentification property because it constrains the
conditional expectation of Y given Z1 and Z2. In order to define ϕ for any F (and in
particular for the estimated one), the parameter ϕ is now defined as the solution of the
minimization problem:

                               ϕ = arg min E (Y − ϕ (Z2 ) + ϕ (Z1 ))2
                                         ϕ



                                                 111
or, equivalently as the solution of the first-order conditions:

                            E F [ϕ (Z2 ) |Z1 = z] − ϕ (z) = E (Y |Z1 = z)

because (Y, Z1 , Z2 ) and (−Y, Z2 , Z1 ) are identically distributed.
   The integral equation, which defines the function of interest, ϕ, may be denoted by

                                               (I − K) ϕ = r

where r = E (Y |Z2 = z) = −E (Y |Z1 = z) . As in the additive models, this inverse prob-
lem is ill-posed because I − K is not one-to-one. Indeed, 1 is the greatest eigenvalue
of K and the eigenfunctions associated with 1 are the constant functions. We need an
extra assumption to warranty that the order of multiplicity is one, or, in more statistical
terms, that ϕ is identified up to a constant. This property is obtained if Z1 and Z2 are
measurably separated i.e. if the functions of Z1 , almost surely equal to some functions of
Z2 , are almost surely constant.
    Then the normalization rule is

                                                 hϕ, φ1 i = 0

where φ1 is constant. This normalization is then equivalent to

                                                E F (ϕ) = 0.

If F is estimated using standard kernel procedure, the estimated Fn does not satisfy, in
general, the exchangeability assumption ((Y, Z1 , Z2 ) and (−Y, Z2 , Z1 ) are identically dis-
tributed). A simple way to incorporate this constraint is to estimate F using a sample of
size 2n by adding to the original sample (yi , z1i , z2i )i=1,...,n a new sample (−yi , z2i , z1i )i=1,...,n .
For simplicity, we do not follow this method here and consider an estimation of F, which
does
   ³ not verify
            ´    the exchangeability. In that case r̂n is not, in general, an element of
R I − K̂n and the estimator ϕ̂n is defined as the unique solution of
                                         ³          ´
                                             I − K̂n ϕ = PRn r̂n ,

which satisfies the normalization rule

                                                E Fn (ϕ) = 0.
                                                                       ³         ´
Equivalently, we have seen that the functional equation I − K̂n ϕ = r̂n reduces to a
n dimensional linear system, which is solved by a generalized inversion. The asymptotic
properties of this procedure follows immediately from the theorems of Section 7.4 and are
obtained identically to the case of additive models.



                                                     112
References
 [1] Ai, C. and X. Chen (2003) “Efficient Estimation of Models with Conditional Moment
     Restrictions Containing Unknown Functions”, Econometrica, 71, 1795-1843.

 [2] Ait-Sahalia, Y., L.P. Hansen, and J.A. Scheinkman (2004) “Operator Methods for
     Continuous-Time Markov Processes”, forthcoming in the Handbook of Financial
     Econometrics, edited by L.P. Hansen and Y. Ait-Sahalia, North Holland.

 [3] Arellano, M., L. Hansen, and E. Sentana (2005) “Underidentification?”, mimeo,
     CEMFI.

 [4] Aronszajn, N. (1950) “Theory of Reproducing Kernels”, Transactions of the Amer-
     ican Mathematical Society, Vol. 68, 3, 337-404.

 [5] Bai, J. and S. Ng (2002) “Determining the Number of Factors in Approximate
     Factor Models”, Econometrica, 70, 191-221.

 [6] Basmann, R.L. (1957), “A Generalized Classical Method of Linear Estimation of
     Coefficients in a Structural Equations”, Econometrica, 25, 77-83.

 [7] Berlinet, A. and C. Thomas-Agnan (2004) Reproducing Kernel Hilbert Spaces in
     Probability and Statistics, Kluwer Academic Publishers, Boston.

 [8] Blundell, R., X. Chen, and D. Kristensen (2003) “Semi-Nonparametric IV Esti-
     mation of Shape-Invariant Engel Curves”, Cemmap working paper CWP 15/03,
     University College London.

 [9] Blundell, R. and J. Powell (2003) “Endogeneity in Nonparametric and Semipara-
     metric Regression Models”, in Advances in Economics and Econometrics, Vol. 2,
     eds by M. Dewatripont, L.P. Hansen and S.J. Turnovsky, Cambridge University
     Press, 312-357.

[10] Bollerslev, T. (1986), “Generalized Autoregressive Conditional Heteroskedasticity”,
     Journal of Econometrics 31, 307-327.

[11] Bosq, D. (1998) Nonparametric Statistics for Stochastic Processes. Estimation and
     Prediction, Lecture Notes in Statistics, 110. Springer-Verlag, NewYork.

[12] Bosq, D. (2000) Linear processes in function spaces. Theory and applications, Lec-
     ture Notes in Statistics, 149. Springer-Verlag, NewYork.

[13] Breiman, L. and J.H. Friedman (1985) “Estimating Optimal Transformations for
     Multiple Regression and Correlation”, Journal of American Statistical Association,
     80, 580-619.




                                         113
[14] Carrasco, M., M. Chernov, J.-P. Florens, and E. Ghysels (2004) “Efficient estima-
     tion of jump diffusions and general dynamic models with a continuum of moment
     conditions”, mimeo, University of Rochester.

[15] Carrasco, M. and J.-P. Florens (2000) “Generalization of GMM to a continuum of
     moment conditions”, Econometric Theory, 16, 797-834.

[16] Carrasco, M. and J.-P. Florens (2001) “Efficient GMM Estimation Using the Em-
     pirical Characteristic Function”, mimeo, University of Rochester.

[17] Carrasco, M. and J.-P. Florens (2002) “Spectral method for deconvolving a density”,
     mimeo, University of Rochester.

[18] Carrasco, M. and J.-P. Florens (2004) “On the Asymptotic Efficiency of GMM”,
     mimeo, University of Rochester.

[19] Carroll, R. and P. Hall (1988) “Optimal Rates of Convergence for Deconvolving a
     Density”, Journal of American Statistical Association, 83, No.404, 1184-1186.

[20] Carroll, R., A. Van Rooij, and F. Ruymgaart (1991) “Theoretical Aspects of Ill-
     posed Problems in Statistics”, Acta Applicandae Mathematicae, 24, 113-140.

[21] Chacko, G. and L. Viceira (2003) “Spectral GMM estimation of continuous-time
     processes”, Journal of Econometrics, 116, 259-292.

[22] Chen, X., L.P. Hansen and J. Scheinkman (1998) “Shape-preserving Estimation of
     Diffusions”, mimeo, University of Chicago.

[23] Chen, X., and H. White (1992), “Central Limit and Functional Central Limit The-
     orems for Hilbert Space-Valued Dependent Processes”, Working Paper, University
     of San Diego.

[24] Chen, X. and H. White (1996) “Law of Large Numbers for Hilbert Space-Valued
     mixingales with Applications”, Econometric Theory, 12, 284-304.

[25] Chen, X. and H. White (1998) “Central Limit and Functional Central Limit The-
     orems for Hilbert Space-Valued Dependent Processes”, Econometric Theory, 14,
     260-284.

[26] Darolles, S., J.-P. Florens, and C. Gourieroux (2004) “Kernel Based Nonlinear
     Canonical Analysis and Time Reversibility”, Journal of Econometrics, 119, 323-
     353.

[27] Darolles, S., J.-P. Florens, and E. Renault (1998), “Nonlinear Principal Components
     and Inference on a Conditional Expectation Operator with Applications to Markov
     Processes”, presented in Paris-Berlin conference 1998, Garchy, France.



                                         114
[28] Darolles, S., J.-P. Florens, and E. Renault (2002), “Nonparametric Instrumental
     Regression”, Working paper 05-2002, CRDE.

[29] Das, M. (2005) “Instrumental variables estimators of nonparametric models with
     discrete endogenous regressors”, Journal of Econometrics, 124, 335-361.

[30] Dautray, R. and J.-L. Lions (1988) Analyse mathématique et calcul numérique pour
     les sciences et les techniques. Vol. 5. Spectre des opérateurs, Masson, Paris.

[31] Davidson, J. (1994) Stochastic Limit Theory, Oxford University Press, Oxford.

[32] Debnath, L. and P. Mikusinski (1999) Introduction to Hilbert Spaces with Applica-
     tions, Academic Press. San Diego.

[33] Dunford, N. and J. Schwartz (1988) Linear Operators, Part II: Spectral Theory,
     Wiley, New York.

[34] Engl. H. W., M. Hanke, and A. Neubauer (1996) Regularization of Inverse Problems,
     Kluwer Academic Publishers.

[35] Engle R.F., (1990), “Discussion: Stock Market Volatility and the Crash of ’87”,
     Review of Financial Studies 3, 103-106.

[36] Engle, R.F., D.F. Hendry and J.F. Richard, (1983), “Exogeneity”, Econometrica,
     51 (2) 277-304.

[37] Engle, R.F., and V.K. Ng (1993), “Measuring and Testing the Impact of News on
     Volatility”, The Journal of Finance XLVIII, 1749-1778.

[38] Fan, J. (1993) “Adaptively local one-dimentional subproblems with application to
     a deconvolution problem”, The Annals of Statistics, 21, 600-610.

[39] Feuerverger, A. and P. McDunnough (1981), “On the Efficiency of Empirical Char-
     acteristic Function Procedures”, Journal of the Royal Statistical Society, Series B,
     43, 20-27.

[40] Florens, J.-P. (2003) “Inverse Problems in Structural Econometrics: The Example
     of Instrumental Variables”, in Advances in Economics and Econometrics, Vol. 2, eds
     by M. Dewatripont, L.P. Hansen and S.J. Turnovsky, Cambridge University Press,
     284-311.

[41] Florens, J.-P. (2005) “Engogeneity in nonseparable models. Application to treat-
     ment models where the outcomes are durations”, mimeo, University of Toulouse.

[42] Florens, J.-P., J. Heckman, C. Meghir and E. Vytlacil (2002), “ Instrumental Vari-
     ables, Local Instrumental Variables and Control Functions”, Manuscript, University
     of Toulouse.


                                          115
[43] Florens, J.-P. and Malavolti (2002) “Instrumental Regression with Discrete Vari-
     ables”, mimeo University of Toulouse, presented at ESEM 2002, Venice.

[44] Florens, J.-P. and M. Mouchart (1985), “Conditioning in Dynamic Models”, Journal
     of Time Series Analysis, 53 (1), 15-35.

[45] Florens, J.-P., M. Mouchart, and J.F. Richard (1974), “Bayesian Inference in Error-
     in-variables Models”, Journal of Multivariate Analysis, 4, 419-432.

[46] Florens, J.-P., M. Mouchart, and J.F. Richard (1987), “Dynamic Error-in-variables
     Models and Limited Information Analysis”, Annales d’Economie et Statistiques,
     6/7, 289-310.

[47] Florens, J.-P., M. Mouchart, and J.-M. Rolin (1990) Elements of Bayesian Statistics,
     Dekker, New York.

[48] Florens, J.-P., C. Protopopescu, and J.F. Richard, (1997), “Identification and Esti-
     mation of a Class of Game Theoretic Models”, GREMAQ, University of Toulouse.

[49] Forni, M., M. Hallin, M. Lippi, and L. Reichlin (2000) “The generalized dynamic
     factor model: identification and estimation”, Review of Economic and Statistics,
     82, 4, 540-552.

[50] Forni, M. and L. Reichlin (1998) “Let’s Get Real: A Factor Analytical Approach to
     Disaggregated Business Cycle Dynamics”, Review of Economic Studies, 65, 453-473.

[51] Gallant, A. R. and J. R. Long (1997) “Estimating Stochastic Differential Equations
     Efficiently by Minimum Chi-squared”, Biometrika, 84, 125-141.

[52] Gaspar, P. and J.-P. Florens, (1998), “Estimation of the Sea State Biais in Radar
     Altimeter Measurements of Sea Level: Results from a Nonparametric Method”,
     Journal of Geophysical Research, 103 (15), 803-814.

[53] Guerre, E., I. Perrigne, and Q. Vuong, (2000), “Optimal Nonparametric Estimation
     of First-Price Auctions”, Econometrica, 68 (3), 525-574.

[54] Groetsch, C. (1993) Inverse Problems in Mathematical Sciences, Vieweg Mathemat-
     ics for Scientists and Engineers, Wiesbaden.

[55] Hall, P. and J. Horowitz (2004) “Nonparametric Methods for Inference in the Pres-
     ence of Instrumental Variables”, mimeo, Northwestern University.

[56] Hansen, L.P., (1982), “Large Sample Properties of Generalized Method of Moments
     Estimators”, Econometrica, 50, 1029-1054.

[57] Hansen, L.P. (1985) “A method for calculating bounds on the asymptotic covariance
     matrices of generalized method of moments estimators”, Journal of Econometrics,
     30, 203-238.

                                          116
[58] Hardle, W. and O. Linton (1994) “Applied Nonparametric Methods”, Handbook of
     Econometrics, Vol. IV, edited by R.F. Engle and D.L. McFadden, North Holland,
     Amsterdam.

[59] Hastie, T.J. and R.J. Tibshirani (1990), Generalized Additive Models, Chapman and
     Hall, London.

[60] Hausman, J., (1981), “Exact Consumer’s Surplus and Deadweight Loss”, American
     Economic Review, 71, 662-676.

[61] Hausman, J. (1985), “The Econometrics of Nonlinear Budget sets”, Econometrica,
     53, 1255-1282.

[62] Hausman, J. and W.K. Newey, (1995) “Nonparametric Estimation of Exact Con-
     sumers Surplus and Deadweight Loss”, Econometrica, 63, 1445-1476.

[63] Heckman, J., H. Ichimura, J. Smith, and P. Todd (1998), “Characterizing Selection
     Bias Using Experimental Data”, Econometrica, 66, 1017-1098.

[64] Heckman, J., and V. Vytlacil (2000), “Local Instrumental Variables”, in Nonlin-
     ear Statistical Modeling: Proceedings of the Thirteenth International Symposium in
     Economic Theory and Econometrics: Essays in Honor of Takeshi Amemiya, ed. by
     C. Hsiao, K. Morimune, and J. Powells. Cambridge: Cambridge University Press,
     1-46.

[65] Hoerl, A. E. and R. W. Kennard (1970) “Ridge Regression: Biased Estimation of
     Nonorthogonal Problems”, Technometrics, 12, 55-67.

[66] Horowitz, J. (1999) “Semiparametric estimation of a proportional hazard model
     with unobserved heterogeneity”, Econometrica, 67, 1001-1028.

[67] Imbens, G., and J. Angrist (1994), “Identification and Estimation of Local Average
     Treatment Effects”, Econometrica, 62, 467-476.

[68] Jiang, G. and J. Knight (2002) “Estimation of Continuous Time Processes Via the
     Empirical Characteristic Function”, Journal of Business & Economic Statistics, 20,
     198-212.

[69] Judge, G., W. Griffiths, R. C. Hill, H. Lutkepohl, and T-C. Lee (1980) The Theory
     and Practice of Econometrics, John Wiley and Sons, New York.

[70] Kargin, V. and A. Onatski (2004) “Dynamics of Interest Rate Curve by Func-
     tional Auto-Regression”, mimeo Columbia University, presented at the CIRANO
     and CIREQ Conference on Operator Methods (Montreal, November 2004).

[71] Kitamura, Y. and M. Stutzer (1997), “An Information Theoretic Alternative to
     Generalized Method of Moments Estimation”, Econometrica, 65, 4, 861-874.

                                         117
[72] Knight, J. L. and J. Yu (2002) “Empirical Characteristic Function in Time Series
     Estimation”, Econometric Theory, 18, 691-721.

[73] Kress, R. (1999), Linear Integral Equations, Springer.

[74] Kutoyants, Yu. (1984), Parameter estimation for stochastic processes, Heldermann
     Verlag, Berlin.

[75] Lancaster, H. (1968), “The Structure of Bivariate Distributions”, Annals of Math-
     ematical Statistics, 29, 719-736.

[76] Linton, O. and E. Mammen (2003), “Estimating Semiparametric ARCH(∞) models
     by kernel smoothing methods”, forthcoming in Econometrica.

[77] Linton, O. and J.P. Nielsen (1995) “A Kernel Method of Estimating Structured
     Nonparametric regression Based on Marginal Integration”, Biometrika, 82, 93-100.

[78] Loubes, J.M. and A. Vanhems (2001), “Differential Equation and Endogeneity”,
     Discussion Paper, GREMAQ, University of Toulouse, presented at ESEM 2002,
     Venice.

[79] Loubes, J.M. and A. Vanhems (2003), “Saturation Spaces for Regularization Meth-
     ods in Inverse Problems”, Discussion Paper, GREMAQ, University of Toulouse,
     presented at ESEM 2003, Stockholm.

[80] Lucas, R. (1978) “Asset Prices in an Exchange Economy”, Econometrica, 46, 1429-
     1446.

[81] Luenberger, D. G. (1969) Optimization by Vector Space Methods, Wiley, New York.

[82] Malinvaud, E. (1970), Methodes Statistiques de l’Econométrie, Dunod, Paris.

[83] Mammen, E., O. Linton, and J. Nielsen (1999) “The existence and asymptotic
     properties of a backfitting projection algorithm under weak conditions”, The Annals
     of Statistics, 27, 1443-1490.

[84] Nashed, N. Z. and G. Wahba (1974) “Generalized inverses in reproducing kernel
     spaces: An approach to regularization of linear operator equations”, SIAM Journal
     of Mathematical Analysis, 5, 974-987.

[85] Natterer (1984) “Error bounds for Tikhonov regularization in Hilbert scales”, Ap-
     plicable Analysis, 18, 29-37.

[86] Newey, W. (1994) “Kernel Estimation of Partial Means”, Econometric Theory, 10,
     233-253.

[87] Newey, W., and J. Powell (2003), “Instrumental Variables for Nonparametric Mod-
     els”, Econometrica, 71, 1565-1578.

                                         118
 [88] Newey, W., Powell, J., and F. Vella (1999), “Nonparametric Estimation of Trian-
      gular Simultaneous Equations Models”, Econometrica, 67, 565-604.

 [89] Owen, A. (2001) Empirical likelihood, Monographs on Statistics and Applied Prob-
      ability, vol. 92. Chapman and Hall, London.

 [90] Pagan, A. and A. Ullah (1999), Nonparametric Econometrics, Cambridge University
      Press.

 [91] Parzen, E. (1959) “Statistical Inference on time series by Hilbert Space Methods,I.”,
      Technical Report No.23, Applied Mathematics and Statistics Laboratory, Stanford.
      Reprinted in (1967) Time series analysis papers, Holden-Day, San Francisco.

 [92] Parzen, E. (1970) “Statistical Inference on time series by RKHS methods”, Proc.
      12th Biennal Canadian Mathematical Seminar, R. Pyke, ed. American Mathemati-
      cal Society, Providence.

 [93] Politis, D. and J. Romano (1994) “Limit theorems for weakly dependent Hilbert
      space valued random variables with application to the stationary bootstrap”, Sta-
      tistica Sinica, 4, 451-476.

 [94] Polyanin, A. and A. Manzhirov (1998) Handbook of Integral Equations, CRC Press,
      Bocca Raton, Florida.

 [95] Qin, J. and J. Lawless, (1994), “Empirical Likelihood and General Estimating Equa-
      tions”, The Annals of Statistics, 22, 1, 300-325.

 [96] Reiersol, O. (1941), “Confluence Analysis of Lag Moments and other Methods of
      Confluence Analysis”, Econometrica, 9, 1-24.

 [97] Reiersol, O. (1945), “Confluence Analysis by Means of Instrumental Sets of Vari-
      ables”, Arkiv for Mathematik, Astronomie och Fysik, 32A, 119.

 [98] Ross, S. (1976) “The Arbitrage Theory of Capital Asset Pricing”, Journal of Fi-
      nance, 13, 341-360.

 [99] Rust, J., J. F. Traub, and H. Wozniakowski (2002) “Is There a Curse of Dimension-
      ality for Contraction Fixed Points in the Worst Case?”, Econometrica, 70, 285-330.

[100] Ruymgaart, F. (2001) “A short introduction to inverse statistical inference”, lecture
      given at the conference “L’Odyssée de la Statistique”, Institut Henri Poincaré, Paris.

[101] Saitoh, S. (1997) Integral transforms, reproducing kernels and their applications,
      Longman.

[102] Sansone, G. (1959) Orthogonal Functions, Dover Publications, New York.



                                             119
[103] Sargan, J.D. (1958), “The Estimation of Economic Relationship using Instrumental
      Variables”, Econometrica, 26, 393-415.

[104] Schaumburg, E. (2004) “Estimation of Markov Processes of Levy Type Generators”,
      mimeo, Kellogg School of Management.

[105] Singleton, K. (2001) “Estimation of Affine Pricing Models Using the Empirical
      Characteristic Function”, Journal of Econometrics, 102, 111-141.

[106] Stefanski, L. and R. Carroll (1990) “Deconvoluting Kernel Density Estimators”,
      Statistics, 2, 169-184.

[107] Stock, J. and M. Watson (1998) “Diffusion Indexes”, NBER working paper 6702.

[108] Stock, J. and M. Watson (2002) “Macroeconomic Forecasting Using Diffusion In-
      dexes”, Journal of Business and Economic Statistics, 20, 147-162.

[109] Tauchen, G. (1997) “New Minimum Chi-Square Methods in Empirical Finance”, in
      Advances in Econometrics, Seventh World Congress, eds. D. Kreps and K. Wallis,
      Cambridge University Press, Cambridge.

[110] Tauchen, G. and R. Hussey (1991) “Quadrature-Based Methods for Obtaining Ap-
      proximate Solutions to Nonlinear Asset Pricing Models”, Econometrica, 59, 371-396.

[111] Tautenhahn, U. (1996) “Error estimates for regularization methods in Hilbert
      scales”, SIAM Journal of Numerical Analysis, 33, 2120-2130.

[112] Theil, H.(1953), “Repeated Least-Squares Applied to Complete Equations System”,
      The Hague: Central Planning Bureau (mimeo).

[113] Tjostheim, D. and B. Auestad (1994) “Nonparametric Identification of Nonlinear
      Time Series Projections”, Journal of American Statistical Association, 89, 1398-
      1409.

[114] Vanhems, A. (2000), “Nonparametric Solutions to Random Ordinary Differential
      Equations of First Orders”, GREMAQ-University of Toulouse.

[115] Van Rooij and F. Ruymgaart (1991) “Regularized Deconvolution on the Circle and
      the Sphere”, in Nonparametric Functional Estimation and Related Topics, edited
      by G. Roussas, 679-690, Kluwer Academic Publishers, the Netherlands.

[116] Van Rooij, A., F. Ruymgaart (1999) “On Inverse Estimation”, in Asymptotics,
      Nonparametrics, and Time Series, 579-613, Dekker, NY.

[117] Van Rooij, A., F. Ruymgaart, and W. Van Zwet (2000) “Asymptotic Efficiency of
      Inverse Estimators”, Theory of Probability and its Applications, 44, 4, 722-738.

[118] Vapnik A.C.M. (1998), Statistical Learning Theory, Wiley, New York.

                                          120
[119] Wahba, G. (1973) “Convergence Rates of Certain Approximate Solutions to Fred-
      holm Integral Equations of the First Kind”, Journal of Approximation Theory, 7,
      167-185.




                                        121



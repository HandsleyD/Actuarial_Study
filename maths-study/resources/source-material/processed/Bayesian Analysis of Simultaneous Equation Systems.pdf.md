---
normalized_id: shared-pdf-reference-bayesian-analysis-of-simultaneous-equation-systems
exam_code: SHARED
material_scope: bayesian analysis of simultaneous equation systems.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Bayesian Analysis of Simultaneous Equation Systems.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-bayesian-analysis-of-simultaneous-equation-systems

Chapter 9


BAYESIAN              ANALYSIS                 OF     SIMULTANEOUS                 EQUATION
SYSTEMS
JACQUES H. DREZE and JEAN-FRANCOIS                   RICHARD*
Universiti Catholique de Louvain




Contents

1.   Introduction and summary                                                                  519
     1.1. The simultaneous equation model                                                      519
     1.2. Bayesian inference and identification                                                521
     1.3. Bayesian treatment of exact restrictions                                             522
     1.4. Bayesian analysis of the reduced form                                                523
     1.5. Bayesian analysis of the structural form                                             524
     1.6. Summary                                                                              525
     1.7. Bibliographical note                                                                 526
2.   A special case                                                                            526
     2.1.   Limited information maximum likelihood estimation                                  526
     2.2. A Bayesian analogue                                                                  529
     2.3. The normalization issue                                                              531
     2.4. An application                                                                       533
3.   Identification                                                                            535
     3.1. Classical concepts                                                                   535
     3.2.   Posterior densities and identification                                             536
     3.3. Prior densities and identification                                                   537
     3.4. .Choice of models and identification                                                 538
4.   Reduced-form analytics                                                                    539
     4.1. Natural-conjugate prior densities                                                    539
     4.2.   Further results                                                                    541
5.   Limited information analysis                                                              544
     5.1. Introduction                                                                         544
     5.2. Parametetixation and invariance                                                      544
     5.3. Posterior conditional densities and moments                                          550
     5.4. Posterior marginal densities                                                         552
   *The authors thank David F. Hendry, Teun Kloek, Hans Tompa, Herman van Dijk, and Arnold
Zellner for helpful comments on a preliminary version. They are particularly grateful to LUCBauwens
for his assistance with computations and his detailed comments on the manuscript.
Handbook of Econometrics, Volume I, Edited by Z. Griliches and M.D. Intriligator
0 North-Holland Publishing Company, 1983
518                                                     J. H: D&e   and J- F. Richard


      5.5. An application                                                        555
      5.6. Normalization and invariance                                          557
      5.1. Two generalizations                                                   559
6.    Full information analysis                                                  561
      6.1.   Introduction                                                        561
      6.2.   A special case                                                      561
      6.3. Extended natural-conjugate prior densities                            563
      6.4. Seemingly unrelated regression models                                 567
      6.5. Two-equation models                                                   568
      6.6. Applications                                                          571
7.    Numerics                                                                   579
      7. I. Introduction                                                         579
      7.2. Evaluation of poly-t densities                                        579
      7.3. Numerical integration                                                 581
Appendix A: Elements of multivariate analysis                                    585
Appendix B: Proofs                                                               589
Reference table                                                                  595
References                                                                       596
Ch. 9: Bayesian Analysis of Simultaneous   Equation Systems                                         519




 1.     Introduction and summary

1.1.      The simultaneous equation model

The standard specification of the static simultaneous equation model (SEM) in
econometrics is [see, for example, Goldberger (1964) or Theil(197 l)]

         YB+Zr=lJ,                                                                               0.1)

where
Y is a T X m matrix of observed endogenous variables,
Z is a T X n matrix of observed exogenous’ variables,
B is an m X m non-singular matrix of unknown coefficients,
r is an n x m matrix of unlcnown coefficients, and
U is a T x m matrix of unobserved disturbances.
U and Z are uncorrelated and the T rows of U are assumed identically indepen-
dently normally distributed, each with zero expectation and positive definite
symmetric (PDS) covariance matrix X; hence the matrix U has the mat&variate
normal density (as defined in Appendix A):



  The m equations (1.1) are called structural equations. Solving these explicitly for
Y yields the reduced form:

        y=zII+v,            P(V)     =fIgww@~~,),                                                (1.3)

where

        II=   -rB-‘,         p = B’-‘xB-‘*                                                       0.4)

      The data density p( Y]II, 52)- see footnote 1 -is




    ‘Strictly speaking the variables in Z should be “weakly exogenous” in the terminology of Engle
et al. (1983). The analysis applies to dynamic simultaneous equation models where Z includes lagged
variables, whether exogenous or endogenous. In that case, however, the derivation of a joint predictive
density for several successive periods of time raises problems, some of which are discussed in Richard
(1979). Finally, even though our analysis is conditional on Z, we shall systematically omit Z from the
list of conditioning variables, for notational convenience.
520                                                          J. H. D&e and J- F. Richard

Given Y, (1.5) yields two alternative      expressions for the likelihood function,
namely

                                                                                  (1.6)
with (II, s2) E R”” x C?“, where C?“’denotes the space of all real PDS matrices of
size m; and

      L(B,r,ZIY)     a llBllTpl-(l/Z)T
                       Xexp[-+tr2-‘(YB+ZF)‘(YB+ZF)],                              (1.7)

with (B, F, 2) E CBmx R”” X c?“, where ?i??’denotes the space of all real non-sin-
gular matrices of size m.
   In this model, the reduced-form parameters (II, 52) are identified, but the
structural parameters (B, F, Z) are not. The likelihood function L(B, I’, 21 Y) is
constant over every m*-dimensional subspace defined by given values of II and D
in (1 S). (Every such subspace consists of “observationally equivalent” parameter
points and defines an “equivalence class” in the parameter space.) Identification
of (B, r, 8) is achieved by imposing on the structural parameters a set of exact a
priori conditions (including the normalization rule):

      \k,(&F,Z)=O,          k=l   . ..K.                                          (1.8)

such that (1.4) and (1.8) can be solved uniquely for (B, r, 2) as functions of
(II, a). When a unique solution exists for almost all (J7, fin) in R”” x CT, the
structural model is just-identified and (II, 52) are “unconstrained”.         When a
solution exists only for some, but not for almost all (II, a) in R”” x C”, the
structural model is overidentified and (IT, s1) are constrained. When (1.4) and (1.8)
admit multiple solutions the structural model is underidentified. Note that over-
identification and underidentification are not mutually exclusive. The simplest
example of identifying conditions is obtained when (1.8) is separable across
equations and predetermines m or more coefficients in each row of (B’ rl).
   Maximum likelihood estimation of the structural parameters calls for maximiz-
ing the likelihood function in (1.7) subject to the constraints (1.8). This estimation
method, known as full information maximum likelihood (FIML), is conceptually
straightforward, but relies on numerical procedures and may be computationally
demanding. Also, it may be sensitive to specification errors in the overidentified
case. In particular, estimators of (II, Jz) are then subject to exact a priori
restrictions, some of which may be in conflict with the data.
   An alternative, which is less efficient but also less demanding computationally
and less sensitive to some classes of specification errors, is limited information
maximum likelihood (LIML). It consists in estimating each structural equation
Ch. 9: Bayesian Analysis of Simultaneous   Equation Systems                                           521


separately by maximizing the likelihood function subject only to those constraints
in (1.8) which involve solely the coefficients of the equation being estimated. In
the standard case where the constraints (1.8) are separable across equations, the
LIML and FIML estimators of the coefficients of a structural equation coincide
when the other equations in the system are not overidentified.
   Exact finite sample distributions of maximum likelihood estimators have been
obtained only for LIML analysis of an equation containing two endogenous
variables [see, for example, Mariano (1980)]. LIML and FIML estimators can be
numerically approximated respectively by two-stage (2SLS) and three-stage (3SLS)
least squares estimators with no loss of asymptotic efficiency [see, for example,
Theil(l971) and Hendry (1976)]. In the special case of just-identified models, all
these methods are equivalent.


1.2.    Bayesian inference and identification

A Bayesian analysis of the SEM proceeds along the same lines as any other
Bayesian analysis. Thus, if the analyst has chosen to work in a given parameter
space, he defines a prior density’ on that space and applies Bayes theorem to
revise this prior density in the light of available data. The resulting posterior
density is then used to solve problems of decision and inference. Predictive
densities for future observations can also be derived.
   Thus, let p( y 10) and p(8) denote respectively a data density with parameter 19
and a prior density. The predictive density p(y) and the posterior density p (0 1y)
are then given by


                                                                                                   (l-9)

       P(w = p(Yi:$(e)               aL(e]y)p(e),             (providedp(y)*O),                  (1.10)


where L( 8 Iy ) is the likelihood function. 3 The product L(Oly)p(O) defines a
kernel of the posterior density [see, for example, Raiffa and Schlaifer (1961,
section 2.1.2)].
  The operation (1.10) is well-defined, whether 8 is identified or not; hence the
remark by Lindley (1971, p. 46) that “ unidentifiability causes no real difficulty in

   ‘It is assumed, mainly for convenience, that all the relevant probability distributions are continuous
with respect to an appropriate measure, typically the Lebesgue measure; they are therefore repre-
sented by density functions. By abuse of language, we still use the word “density” rather than
“ measure” when the function is not integrable.
   31n (1.10) the proportionality factor may depend on y, since the posterior density is conditional
on y.
522                                                                    J. H. D&e   and J- F. Richard


the Bayesian approach”.4 In particular, we may analyze an underidentified model,
with a prior density which substitutes stochastic prior information for exact a
priori restrictions. And we may substitute stochastic prior information for over-
identifying a priori restrictions, whenever the underlying economic theory is less
than fully compelling.
   Note, however, an obvious implication of (1.10). If 0, and 8, are two observa-
tionally equivalent points in the parameter space, so that p ( y 18,) = p ( y 1d,), then

       P(w)           _ PUU
       p(e,lyj         pCe,j,    identicdlyiny.                                              (1.11)


Over equivalence classes of the parameter space, the prior density is not revised
through observations. If, in particular, 6’can be partitioned into 6 = (p, A) in such
awaythatp(ylp,A)=p(ylX),identicallyinpandX,                         then

       p(plX,     y) = p(plX),     identically in X and y.                                   (1.12)

The conditional prior density p ( p 1A) is not revised through observations; however,
the marginal prior density p(p) will be revised unless p and X are a priori
independent. See Section 3 for details.


1.3.    Bayesian treatment of exact restrictions

Incorporating in a Bayesian analysis exact prior restrictions such as (1.8) raises
conditionalization paradoxes [see, for example, Kolmogorov (1950)] which we
briefly illustrate by means of a simple bivariate example. Let p(k),, 6,) be a
bivariate uniform density on the open unit square and let D = {(Cl,, t3,) 18, = e,} be
a diagonal of that square. There is no unique way to derive from p(B,, 0,) a
density for 8, conditionally on (e,, (3,) E D. Let, for example, A = 8, - 0, and
p = f+/0,; then

       p(e,lx=o)=i,               ve,40,1[,                                                  (1.13)
       p(e,i~=l)=28,,              ve, ~10, I[.                                              (1.14)

  In (1.13) D is implicitly considered as the limit of the infinite sequence {Din},
where D,, = ((4, e,)i -(l/n)   < 8, - e, < l/n>; in (1.14) it is considered instead



   4The reader may usefully be reminded at once that: “identification is a property of the likelihood
function, and is the same whether considered classically or from the Bayesian approach” [Kadane
(1975, p. 175)].
Ch. 9: Bayesian Analysis of Simultaneous   Equation Systems                                          523

as the limit of the infinite sequence {D&, where

       ~,,={(e,,e,>ll-(l/n)<e,/e,~l+l/n>.

   In order to avoid such paradoxes we shall write explicitly all the exact prior
restrictions,5 and assign probabilities only for parameter vectors defined over a
space of positive Lebesgue measure. In the above example, this approach calls for
selecting among (1.13) and (1.14) - or among other similar expressions- the
density which seems best suited for inference on t?,, without attempting to derive
it from an underlying joint density. If needed, inferences on 0, can always be
drawn through the integrand transformation (3, = 0,.


1.4.    Bayesian analysis of the reduced form

We shall discuss in Section 7 numerical methods for evaluating key characteristics
(integrating constant, moments, fractiles, etc.) of posterior and predictive density
functions. However, for models with many parameters, like most simultaneous
equation models, analytical methods remain indispensable to evaluate these
densities- either fully, or conditionally on a few parameters amenable to numeri-
cal treatment, or approximately to construct importance functions for Monte
Carlo integration. The classes of prior densities permitting analytical evaluation
of the posterior density are limited. In most Bayesian analyses they consist
essentially of the so-called non-informative and natural-conjugate families. Loosely
speaking, a natural-conjugate prior density conveys the same information as a
hypothetical previous sample, whereas a non-informative prior density conveys as
little information as possible. (Typically, a non-informative prior is a limiting
member of the natural-conjugate family.)
    In the simultaneous equation model,, the unrestricted reduced form is a tradi-
tional multivariate regression model, which has been studied extensively [see, for
example, Zelmer (1971, ch. VIII)]. The natural-conjugate density for that model
has the Normal-Wishart form. It follows that the mn X mn marginal covariance
matrix of the column expansion of II is restricted to a Kronecker product, say
W@M- ‘, where W E (2”’ and M E 6?” are matrices of prior parameters6 This
restriction is harmless if we wish the prior density to be non-informative about II
(A4 = 0), or to be informative about the parameters of a single reduced-form
equation (W is zero except for a single diagonal element). It is a severe restriction

  51t is only when such explicitations are not critical for the sake of the argument that we shall use
notations such as p( B, I’, 8), even though (B, r, Z) is subject to the restrictions (1.8).
  61n the natural-conjugate framework, this property reflects the fact that the covariance matrix of the
column expansion of I?, the unrestricted ordinary least squares estimator of II, is given by
SZQ(Z’Z)-‘.
524                                                                       J. H. D&e    and J- F. Richard


in other cases since it implies that all columns of II should have the same
covariance matrix, up to a proportionality factor; see Section 4 for details. As
discussed in Section 6.4, there exist generalizations of the Normal-Wishart
density which are more flexible in that respect and are also natural conjugate for
the seemingly unrelated regression model (SUR) or for reduced forms subject only
to exclusion restrictions. However, the evaluation of these densities requires some
application of numerical methods.


1.5.   Bayesian analysis of the structural form

A “natural-conjugate” approach to inference about the structural parameters is
fraught with even more difficulties. First, if the model is under-identified, a
natural-conjugate prior density is necessarily improper. Second, the restrictive
covariance structure obtained for the reduced-form prior applies also to the
conditional prior density p (r, 2 1B ). Third, a full natural-conjugate prior density
for the structural parameters does not have the Normal-Wishart form, due to the
presence of the additional factor I]BljT in the likelihood (1.7).
   Two alternative approaches have been developed, corresponding respectively to
limited information analysis and to full information analysis. The limited infor-
mation analysis relies on prior information (both exact and stochastic) .about the
parameters of a single structural equation; call them 8. A suitable non-informa-
tive prior density is then defined on the reduced-form parameters (n, a),
conditionally on 8. Bayes’ theorem yields a posterior density in the form
~(01 Y)p(lI,L?lfl,  Y). For a class of prior densities on 8 (including the
Normal-gamma and Student-gamma families), the posterior marginal density for
the regression coefficients in the equation of interest is a poly-t density, i.e. a
density whose kernel is a product, or ratio of products, of Student-t kernels7 [see
Dreze (1977)]. Properties of poly-t densities are discussed in Section 7. In the
cases reviewed here, evaluation of posterior and predictive densities requires at
most unidimensional numerical integration and an efficient software package is
available. A Bayesian limited information analysis is thus fully operational. It is
presented in Section 5, together with an application. In order to provide a simple
preview of the main results with a minimum of technica.lities, we treat first a
special case in Section 2. That section is self-contained, except for proofs.

   “‘Poly-r densities are defined by the simple property that their kernel is a product, or ratio of
products, of Student-t kernels. They are obtained as posterior marginal densities for regression
coefficients, under a variety of specifications for the prior density and the data generating process. No
analytical expressions are available for the integrating constant or moments of poly-r densities, and the
family is not suited for tabulations. Yet, it may (by contemporary standards) be regarded as
‘tractable’,because it lends itself to numerical analysis by integration in a number of dimensions that
does not depend upon the number of variables but rather upon the number of Student-r kernels in the
product, or in the numerator (minus one)” [D&e (1977, p. 330)].
Ch. 9: BayesianAnalysisof SimultaneousEquationSystems                            525

   The full information analysis is more complex. One approach uses the extended
natural-conjugate prior density corresponding to the seemingly unrelated regres-
sions model. That prior density includes as a special case the possibility of
specifying m independent Student densities on the coefficients of the m structural
equations. The posterior density is obtained analytically, either for (B, T) margi-
nally with respect to 2, or for (B, 2) marginally with respect to r. Neither of
these expressions has yet been found amenable to further analytical treatment,
except in the special case of two-equation models, reviewed in Section 6.5.
   The only general procedure is to integrate the posterior density numerically by
a Monte Carlo technique. This approach gives additional flexibility in the
specification of prior densities. It has been developed by Kloek and van Dijck
(1978); see Sections 6.6.2 for an application and 7.3.2 for computational aspects.
   The posterior density for the coefficients of a single equation, defined margi-
nally with respect to X but conditionally on all other parameters of the model,
belongs to the class of poly-t densities whenever the corresponding conditional
prior density belongs to that class (e.g. is a multivariate Student density). When
attention is focused on the coefficients of a single equation, this conditional full
information approach and the limited information approach define two extreme
ways of handling prior information on the other coefficients of the model.
   Full information methods are discussed in Section 6, together with applications.
A table at the end of the chapter contains references to the main formulae for
prior and posterior densities on the coefficients of one equation. Finally, the
formulae pertaining to the Normal-Wishart density, which play a central role in
these analyses, are collected in Appendix A.


1.6.    Summary

In summary, Bayesian limited information analysis of general models and
Bayesian full information analysis of two-equation models have now been devel-
oped to a point where:
 (i)    they allow a flexible specification of the prior density, including well-
        defined non-informative prior measures;
(ii)    they yield exact finite sample posterior and predictive densities with known
        properties; and
(iii)   they can be evaluated through numerical methods (either exact or involving
        integration in a few dimensions), using an efficient integrated software
        package.
  The treatment of stochastic prior information is illustrated in Sections 2.4, 5.5,
and 6.6.1. The use of posterior densities for policy analysis is illustrated in
Sections 6.6.2 and 6.6.3.
526                                                            J. H. D&e   and J- F. Richard


   Remarks (i) and (ii) apply also to full information analysis of general models.
But the numerical evaluation (by Monte Carlo) is more demanding, and no
integrated software package is available yet. Remark (iii) also applies to the
analysis of one structural equation at a time, conditionally on point estimates for
the other parameters. But avenues for further developments are open.
   These advances must be weighted against some lasting drawbacks, in particu-
lar:

 (i)     The computations remain demanding-as could be expected of exact finite
         sample results in a complex model;
 (ii)    the specification of the prior densities requires careful thought to avoid
         misrepresentation of the prior information; and
(iii)    the treatment of identities, non-linear restrictions, reparameterizations, etc.
         is more complicated than under a maximum likelihood approach, to the
         extent that integrand transformations are more complicated than functional
         transformations.

1.7.     Bibliographical note

The Bayesian approach to simultaneous equations analysis was reviewed earlier
by Rothenberg (1975). The intellectual origins of the subject go back to unpub-
lished papers by Drbe ( 1962), Rothenberg ( 1963), and Zellner ( 1965). These three
papers contain ideas developed more fully in ensuing work by the same
authors - see the list of references. These ideas also influenced other researchers at
Louvain, Rotterdam (where Rothenberg had worked in 1962-1964), Madison,
and Chicago. Much of the more definitive work reviewed here was carried out at
these places, notably by Morales, Richard and Tompa, Harkema, Kloek and van
Dijk, and Chetty, Kmenta, Tiao and Vandaele; see the list of references.
   Rothenberg’s 1963 paper contained an application to Haavelmo’s model,
studied in greater details by Chetty (1968). The next applications came from
Harkema (1971), Morales (1971), and Richard (1973). See also Dreze (1976),
Kaufman (1975), and Maddala (1976) for the analysis of Tintner’s model of
supply and demand for meat; and Zellner, Kmenta and Dreze (1966) as well as
Zellner and Richard (1973) for an application to Cobb-Douglas production
functions.


2.      A special caw

2.1.     Limited information maximum likelihood estimation

In order to give a simple preview of the more general analysis to follow, we shall
Ch. 9: Bayesian Analysis ofSimultaneous
                                      Equation Systems                               521

identified equation. As usual, maximum likelihood analysis provides a natural
reference point for the Bayesian approach. Accordingly, we retrace some steps of
LIML analysis and bring out the analogies.
   To single out one equation - labelled equation 1 -we partition the system (1.1)
as

      m      B*l+zh         Gl= [u v,l,                                            (24
where B is m X 1, y is n X 1, and u is T X 1. Let u * denote the first diagonal
element of 2. The equation of interest is thus

      yp+zy=u,                                                                     (2.2)

where u is normally distributed with expectation 0 and covariance matrix a21T.
Compatibility with (1.4) requires

     np+y=o,              p’fib = a*.                                              (2.3)

   Restricting attention to exclusion restrictions, we consider the partitioning


     [Y,    r,,l[fq+tz*              z**l[;]=w                                     (2.4

where Y, is a T x m, matrix consisting of T observations on the m, endogenous
variables included in the first equation; Z, is a T X n, matrix of T observations
on the n, exogenous variables so included; and (&, y *) are the associated
parameters. The partitioning in (2.4) is achieved through appropriate labelling of
the variables (as distinct from the equations). IT and 0 are partitioned conforma-
bly, in an obvious notation, and (2.3) is then rewritten as

        17
            *A    f;;;A)(t)+(;)=o,                       (&   o)o(~)=u*.           (2.5)
       l-r **A


   Under the rank condition

      rankn,,,=m,-1,                                                               (2.6)

(PA, y*, a) is identified up to a scale factor. LIML analysis recognizes this feature
and estimates (flA, y*, a) up to an arbitrary scale factor, to be selected freely. In
particular, if the scale normalization consists in setting one element of /I equal to
unity, the statistical analysis is invariant with respect to the choice of that
particular element. (This is in contrast with 2SLS analysis, whereby a choice of
528                                                           J. H. D&e   and J- F. Richard

   In order to proceed in “limited information” spirit, i.e. without explicit
consideration for the restrictions pertaining to the remaining structural equations,
it is convenient to partition the reduced form (1.3) as

      [Y,     r,l =mA         ~,l+P,      v,lY                                       (2.7)
where Y, is T X 1, IT, is n X 1, and V, is T X 1. Here Y, is any column of Y, (the
labelling inside Y, is arbitrary).
   One may then exhibit the joint density of the disturbances [u V,], i.e. of the T
realizations of one structural disturbance (u) and m - 1 reduced-form dis-
turbances (IQ. Since (U V,) = VL, where L is the triangular matrix


                        9
                                                                                     (2-Q

we have

      P(U     5) =fIt2((.         v,)loJJ*@~~,),                                      (2.9)

with Q* = L’s)L. It follows that the likelihood function (1.7) may be rewritten as



                                  Xexp[-ftrO*-‘[Y,&+Z,y.             Y,-Zn,]’

                                         XDz+Z*Y*          %-zn21].                 (2.10)

  Maximizing (2.10) with respect to II, and O* yields the concentrated likelihood


                                       Pa’KA
                                           84                                       (2.11)
                            (lgA+z*y*)‘(ydpA+z*y,*)

where WA, = YL[I - Z( Z’Z)- ‘Z’] YA.This expression is homogeneous of degree 0
in the parameters (& y *). It can therefore be maximized with respect to any
(m, + n, - 1) elements of (&, y *) conditionally on a normalization rule, in order
to obtain the LIML estimators. Since y* is unrestricted, (2.11) reaches its
maximum at y * = (Z; Z*)- ‘Zi GflA and the resulting concentrated likelihood
function is


      L(pAl   y,   a ( fKiA~ ),,*jT,                                                (2.12)


where VA = Yd[l- Z,(Z:Z,)-‘Z’,]Y,.            (2.12) is homogeneous of degree 0 in &.
Ch. 9: Bayesian Analysis of Simultaneous   Equation System                                       529


   Let fi = (Z’Z)) ‘Z’Y be partitioned conformably with l7 in (2.5). We can then
verify that rank fir,,, = m, - 1, the sampling analogue of (2.6), is equivalent to
rank( WzA- W,,) = m, - 1. The properties of LIML estimators are discussed for
example in Anderson and Rubin (1949) or Theil(l971).


2.2.   A Bayesian analogue

To develop a Bayesian analogue of LIML, we may start from either (1.6) or (2.10)
and combine the likelihood with a prior density which is non-informative with
respect to all the parameters except (& y *, a’). The expression (2.10) provides a
natural starting point to the extent that (&, y *, a2) appear explicitly as argu-
ments of that likelihood function. Also, (II,, 52*) are not subject to exact prior
restrictions. On the other hand, the parameterization of (2.10) includes an element
of arbitrariness, to the extent that the matrix L defined in (2.8) is itself arbitrary.
In particular, the selection of m - 1 columns from I7 (from Y) destroys the
symmmetry among all the endogenous variables included in the equation of
interest. Thus, if Q is any m(m - 1) matrix such that P = [/3 Q] is non-singular,
then the parameterization ( !D2,A), where

       @2=nQ,            A = P’OP,                                                           (2.13)

is just as meaningful as the parameterization (n,, a*).
   This element of arbitrariness is not a difficulty in LIML analysis. Indeed, (2.11)
is invariant with respect to Q in the sense that reformulating (2.10) in terms of
P2,A) and m aximking with respect to ($, A) still yields (2.11) independently
of Q.8 Similarly, in a Bayesian analysis resting on a proper prior density
p( &, y *, IT,, a*), the prior information so defined in (&, y *, IT,, a*)-space
could be translated into the same prior information in (&, y *, G2, A)-space, by an
integrand transformation with a well-defined Jacobian. But this element of
arbitrariness raises a difficulty in defining a non-informatiue prior density on
( 112, 9*) because such a density would generally fail to be equally non-informa-
tive about (G2, A). Fortunately, it is possible to select a particular prior measure
(improper density) which can be claimed “non-informative” in a sense that is both
natural and invariant with respect to Q. It is shown in Section 5 that the density

                                                                                             (2.14)

has the desired property. This density can be interpreted as the product of three

   ‘The LIML estimators of (II, Q) are also invariant with respect to Q. Indeed, under general
conditions, the ML estimator of a function of the parameters is that function of the ML estimators of
the parameters.
530                                                                                J. H. Dr.&e and J- F. Richard

terms:

(i)   P(& Y*), a prior density which is left unspecified at this stage;
(ii)  p(%lJZ*) a IJ%, I -(‘/2)n, the limiting form of an (m - 1)~ n multivariate
      normal density for II, with covariance matrix L?jz,,8M-‘, where M = 0;
      and
(iii) p(L?*)a)52*)-(I)(
                      ’ 2 m+‘), the limiting form of a Wishart density with v
      degrees of freedom, where v = 0.
   Combining (2.10) and (2.14) yields (see footnote 1)



                                        x ILl=lL?*(- (1/2)Texp[ - + tr Jz*-l

                                        mi&+~*Y*                    r,+3721’
                                        mi&+Z*Y*                    Yrzn211.                                 (2.15)

   As shown in Section 5, this expression can be integrated                                  analytically       with
respect to (17,) O*) to yield

                                                                                                 (1/2)(T-m+I)
                                                               &%APA
       P(&9Y*lY)        wL¶>Y*)*(
                                             @iPA+         z*Y*mPA+               Z*Y*)      1
                                                                                                             (2.16)

   The posterior density (2.16) is invariant with respect to Q in the sense that if
the analysis is conducted in terms of (G2, A) instead of (II,, ti*) the same
posterior density is obtained for (&, y *): both the prior density (2.14) and the
likelihood function are invariant with respect to Q.
   Expression (2.16) differs from (2.11) in three respects: (i) it is a density and not
a likelihood function; (ii) it contains as an additional term the prior density
p (&, y *); and (iii) the ratio of quadratic forms in (&, y *) is raised to the power
(T- m + 1)/2 instead of T/2. The first two differences are self-explanatory. The
last one Feflects the difference in exponents (degrees of freedom) between
conditionalization - as in (2.11) - and marginalization - as in (2.16) - of a Wishart
density?
   It is also shown in Section 5 that a prior density of the form

                                                                                                             (2.17)


   ‘Indeed, the stepwise maximization    leading   to (2.11) is algebraically   equivalent   to conditionalization
of a joint density.
Ch. 9: Bayesian Analysis of Simultaneous   Equation Systems                                      531


is invariant with respect to Q and leads to the posterior densities:

       P(P~,Y*IY)~{(P~W~~P~}(‘/*)(~-~+‘)(~P~+~*Y*)’
                                                   -(1/2)(T-   m + m, + n, + 1)
                           x w,      + Z*Y*)>                                     9           (2.18)
       P(pAI Y) a {~~~aa~d}(1/2)(T-m+1){~~~~~~d}-(~/*)(T-~+~,+~).
                                                                                              (2.19)

The prior density (2.17) differs from (2.14) in that p(&, y.,J is replaced by

(i’) ~(Pd,~*lfi*)o(e*)-     (‘/2)(ml+nl), the limiting form of a normal density in
     m, + n , variables with covariance matrix u *N- ‘, where N = 0.

  We now turn to a discussion of the normalization issue- Section 2.3.1 -and
show that (2.16) with p(& y*) suitably chosen, (2.18), and (2.19) define poly-t
densities - Section 2.3.2.


2.3.     The normalization issue

2.3.1.       Invariance

We noted above that the concentrated likelihood functions (2.1 l)-(2.12) are
homogeneous of degree 0 in (PA, y *). Thus, if & is any element of &, such that
p, * 0 with probability one, define:

       a’=#         a;)=$(@2...&,              y 1.‘. yn,)ER(ml-l)+nl,                       (2.20)
                             I

and also, for ease of notation:

       E’=    (1   (Y’)= (Ei; Cx;).                                                          (2.21)

It is obvious that, in the parameterization              (PI, (Y,II,, L?*), P, is not identified. In
particular, (2.11) may be rewritten as
                                                                        OAT
                                           Z’;W*,cY,
       w,dw)a                                                                                (2.22)
                           (3&     + Z*(Y*)‘(~E,        + z*fx*)    I         ’

an expression which no longer depends on j3,. It follows from (1.12) that

       p(p,la,Y)=p(&la),               identicallyinaand(Y,Z).                               (2.23)

Similar identities hold conditionally on II, or &?*.The whole analysis can, without
loss of information, be conducted in terms of the parameters ((Y,II,, a*).
532                                                                         J. H. D&e     and J- F. Richard


   Taking into account the Jacobian Ip,I”l’” 1 of the integrand transformation
from (&ye) to (p,, cw),the posterior marginal densities (2.16), (2.18), and (2.19)
become, respectively:

                                                                           (1/2)(T-   m + 1)
                                               CT;
                                                 W@,
         PC4   y)   aPb>*                                                                           (2.24)
                                (&E,   +   Z,Cx2)‘(YAC?f1+ z*a*)                               ’

         p(aJ Y) a (~~Wdd~,)(1’2)(T-m+1)
                      x{(r,@, + Z&‘(I&                + Z~(Y~))-~“*~~=-~+~~+~~+‘~,                  (2.25)
                                  (1/2)(T-m+l)(~~~~~1)-(l/2)(T--++ml+1)~
      P(o,Iy)a        (vL~1)                                                                        (2.26)

It is shown in Section 5.6 that the (functional forms of the) densities (2.25) and
(2.26) are invariant with respect to the normalization rule, i.e. with respect to the
labelling of variables under &. The density (2.24) is invariant with respect to the
normalization rule if and only if the prior density p(a) has that property.
   In conclusion, our approach to normalization consists in writing a prior density
p(&, y,) a) as p(& Ja, .)p(clll.) and then working with the parameters a alone.
However, for convenience we shall often write our formulae in terms of full
parameter sets such as B, /I, or & and refer to “p normalized by & = 1” as a
substitute for (Y,.The more explicit notation would be heavier, especially when we
shall discuss full information approaches.

2.3.2.     Poly - t densities

Using (2.21), it is easily recognized that (2.25) and (2.26) define l-l poly-t
densities. This is done in Section 5.4-see in particular formulae (5.37) and
(5.38)-where it is shown that Ei;W& = sf +(a, - a,)‘H,(q - a,). The statistics
WA, and (SF, a,, H,) are in one-to-one correspondence. Thus, ti;W,,E, is propor-
tional to the quadratic form appearing in the kernel of a Student density for IY,
centered at a, with the covariance matrix proportional to s;H; ‘. A similar
argument applies to the other factors in the right-hand side of (2.25) and (2.26)
which, therefore, define l-l poly-t densities respectively in (m, + n, - 1) and
(m, - 1) variables- the elements of (&, y *) and & after normalization. These
densities are well defined and integrable, they possess finite fractiles but no
moments of order 1 or higher.”
   When p(a) is a Student density, (2.24) defines a 2-l poly-t density on
(m, + n, - 1) normalized elements of (&, y *). Invariance with respect to the
normalization requires p(a) to be a Cauchy density (Student density with one


  ‘OLIML estimators do not possess finite sampling moments.
Ch. 9: Bayesian Analysis of Simultaneous            Equation Systems                                                533

                                                      Table 2. I
                       Limited information           analysis of the demand   equationa

                                            I322                  Y23                     Y25

       LIML estimators               - 0.6876                0.72548 - 03            0.3456 E + 02
                                      (0.1223)              (0.0730)                (0.05 14)
       Prior (2.17)                  -0.7118                 0.7370 E - 03           0.3550E + 02
                                      (0.1520)              (0.0853)                (0.062 I)
       Prior (2.14)-(2.29)           - 0.6484                0.6860E -03             0.3361E +02
                                      (0.1518)              (0.0853)                (0.0655)
       Prior (2.3 l)-(2.29)          - 0.6005                0.6655E - 03            0.3150E+02
                                       (0.1116)             (0.0657)                (0.0482)

          ‘In order to ensure the existence of moments, the marginal posterior densities
       of /322, y23, and y25 have been truncated over the intervals (- 1.5,0.0), (0.30E -
       03, I. IO E - 03), and (0.0,65.0), respectively. The probability of falling outside
       these intervals is in all cases less than 0.01.


degree of freedom). In that case, (2.24) is integrable, but possesses no moments of
order 1 or higher.


2.4.    An application

As an illustration, we consider the two-equation supply-demand model of the
retail beef market in Belgium discussed in Morales (1971) and Richard (1973).
The model is just identified and the structural coefficients are labelled as follows:


                                                                                                               (2.27)


The corresponding variables in (Y 2) are successively: quantity (kg) consumed
per capita, a meat price index, national income (Belgian francs) per capita, the
cattle stock (number of heads at the beginning of each period) per capita, and a
constant term. Price and income have been deflated by an index of consumer
prices. Sixteen annual observations (1950-1965) are used. We only consider here
the second (demand) equation. The LIML” estimators of its coefficients are
reported in the first row of Table 2.1, together with their asymptotic sampling
standard deviations.
   We first analyze the demand equation under the non-informative prior density
(2.17). The corresponding posterior density of &, is given by (2.26). It is
integrable and its graph is given in Figure 2.1 (curve 1). However, the difference
of exponents between the denominator and the numerator being equal to one, the

   “Since   the model is just-identified,          the LIML and 2SLS estimators      of each equation   coincide.
534                                                                              J. H. Dr&eandJ-F.       Richard




                               Figure 2.1.     Posterior    densities   of &.



posterior moments do not exist. The posterior means and standard deviations
reported in Table 2.1 are truncated moments.
   Prior information on the income coefficient yZ3is available from a subsample of
a budget study undertaken by the Belgian National Institute of Statistics and is
summarized in the following mean and variance:

      E(y2s) = 0.415 x 10-3,               I&)       = 0.1136 x lo-‘.                                    (2.28)

This leads to the following Student prior density: l2

      p(~~~)a     [l+22.007(103~y23-0.415)2]-3~5,                                                        (2.29)

together with (2.14). The corresponding posterior means and standard deviations
as derived from (2.24) are reported in the third row of Table 2.1. The graph of the
posterior density of p,, is given in Figure 2.1 (curve 2). The standard errors in

   ‘*The choice of the degree of freedom     parameter     will be discussed    in Section   5 where additional
results are reported.
Ch. 9: Bayesian Analysis   ofSimultaneous
                                        Equation Systems                                    535

rows 2 and 3 reveal that the asymptotic LIML variances underestimate by 30-60
percent the exact Bayesian results.
   However, since we are non-informative on all coefficients but one, we might
wish to follow the principle underlying the specification of (2.17) replacing,
therefore, the prior density (2.14) by



which leads to the posterior density

        p(alY) ap(y23)(~;W~dCY,)(1'2)(T-m+')
                     X{(Y,E,    + Z*a,)‘(Y,@,    + Z*(Y2)}-(“2)(T-m+m’+n~). (2.31)

The corresponding posterior means and standard deviations are reported in the
fourth row of Table 2.1. The graph of the posterior density of &, is given in
Figure 2.1 (curve 3).
  Note that the larger the exponent of the quadratic form (Y,Z, + Z,a,)‘(Y&& +
Z,a,) in the posterior ~(a 1Y), the more weight is given the OLS values, say 8,
which are respectively - 0.3864, 0.5405E - 03, and 0.2304E + 02. The posterior
variances also go down as the exponent increases; those in row 4 seem artificially
low, in comparison with rows 2 and 3.



3.      Identification

3. I.     Classical concepts

The parameters of the model (l.l)-( 1~2) are (B, r, 2) in am X R”” X em. Let
(1.8) denote the set of exact a priori restrictions imposed on these parameters,
including the normalization rule. The parameter space is then

        $={(B,~,~)E~~xR"~x~~~~~(B,~,~)=O,                                   k=l...K}.    (3.1)

Consider the transformation from (B, r, Xc) to (B, II, 52) as given by (1.4). The
restrictions (3.1) may be expressed equivalently as

        ‘&( B, - IIB, B’SZB) =defXk( B, II, 52) = 0,            k=l     . ..K.           (3.2)

so that the image space of S by the transformation             (1.4) is

        5 = {(B, II, a) E ‘%Y x R”” x l?l-“,(         B, II, 52) = 0,        k=l...K}.   (3.3)
536                                                             .I. H. Dr&eandJ-F.   Richard




                                         Figure 3.1



The transformation (1.4) is a mapping of S onto 5. Conditionally on B, it is also
linear and one-to-one on the appropriate subspaces. The projection of 9 on the
space of (II, L?) is

       ~={(~,~)ER”~x~“~~BE~~:                    (BJ7,52)~5}.                          (3.4)

The section of 5 at given (II, D) is

                                                                                       (3.5)

   These concepts are illustrated in Figure 3.1.
   The model is identified at (II, L?) in 9 if and only if a3,, o is a singleton; it is
identified if and only if $8,. o is a singleton for almost all (II, L!) in 9; otherwise,
it is underidentified, and the set arro defines, for each (IT, 52), an equivalence
class of the parameter space. The model is oueridentified if and only if 9 is a
proper subset of R”” x CL?“.(Thus, Figure 3.1 corresponds to a model which is
both overidentified and underidentified.)


3.2.    Posterior densities and identification

In a formal Bayesian analysis (see footnote 5) one defines a prior density on S, or
on 5, or on any parameter space which is related to S and 5 by one-to-one
mappings. Because B is non-singular the corresponding integrand transformations
have non-vanishing Jacobians. In particular, the prior density p( B, II, 52) can be
factorized as

       P(& fl, 52)= p(K Qb(BIK a),                                                     (3.6)
Ch. 9: Bayesian Analysis of Simultaneous Equation Systems                                    531

where the support of p( II, a) is 55 and the support of p (B 1II, 0) is ‘Srr o. If the
model is identified at (II, L?), then p( BIII, a) has all its mass concentrated at a
single point. Otherwise, p( B III, J2) is a density on ‘Srr c.
   The posterior density is obtained by application of i)ayes theorem:

       p(BJWlY)=              ’
                           -P(YIBJV)P(UW),                                                 (3.7)
                           P(Y)

where, in the continuous case,


                                                                                           (3-g)

In view of (1.6), the data density satisfies

       p(YIB,IT,O)=p(Y(IT,Q),                identicallyinB,II,andQ.                       (3.9)

Consequently, using (1.12) with p = B and X = (II, s2), we have13
Proposition 3.1

       p(BIII,L!,Y)=p(B(II,L?),              identicallyinII,S1,andY.                    (3.10)
                                                                                              0
  The conditional density p( B (II, 42) is not revised through observations;                but
unless p ( B I II, 42) = p(B) the marginal density p(B) is revised, because




                                                                                         (3.11)


Note that (3.10) and (3.11) remain valid under any parameterization, say 8 =
(fl,, fit,), where 8, and 8, are related through one-to-one mappings respectively to
(n, 0) and B.


3.3.    Prior densities and identification

The Bayesian analysis of the observations can be conducted in the reduced-form
parameter space 9 only. To the extent that prior information based on economic

  13This proposition appeared in D&e (1962, 1975); it is discussed in Zellner (1971, p. 257) and
generalized in Kadane (1975, theorem 5).
538                                                                  J. H. D&e    and J- F. Richard


theories is subject to revision through observations, it might sometimes seem
desirable to avoid overidentification, and to embody such prior information in a
marginal prior density p (II, a). However, when the prior information is provided
as p (B, I’, E), it may not be convenient to perform the integrand transformation
from (B, r, 1) to (B, II, a) conditionally on (1 .S); and/or to separate p (B, II, L?)
into the marginal density p(lT, 52) and the conditional density p( B 1II, f2). As we
shall see below, these transformations are not necessary to obtain the posterior
density p( B, T, 2 ] Y, Z).14 But it is advisable to check, before engaging in detailed
computations, that enough prior information has been introduced, so that the
joint posterior density will at least be proper. When the model is identified by the
exact restrictions (1.8), then the posterior density will be proper under almost any
prior density of interest. Whether the model is so identified can be verified by
means of operational conditions extensively discussed in the econometric litera-
 ture [see, for example, Goldberger (1964)].
    When the model is not identified by the exact restrictions (1.8), then the
 posterior density will not be proper, unless the prior density entails a proper
 conditional prior density on the equivalence classes of the parameter space-for
 instance in the form p( B II7, a). Whether this property holds can be verified
 through natural generalizations of the operational conditions for identifiability
just mentioned.
    Let, for example, the conditions (1.8) assign predetermined values to a subset of
 (B, r) and let the prior density consist of a product of independent proper
 densities, each defined on some coefficients from a given structural equation,
 times a non-informative density on the remaining parameters. Then, in order for
p( BIII, $2) to be a proper density, it is necessary that at least m coefficients in
 each structural equation be either predetermined or arguments of a proper prior
 density (generalized order condition); it is sufficient that the corresponding
 submatrix from IT have full rank [generalized rank condition (2.6)].
    More general cases are discussed in Dreze (1975, Section 2.3).


3.4.    Choice of models and identification

Consider two simultaneous equation models, say M, with parameter (B,, r,, X,)
and M2 with parameter ( B2, T,, Z2). The variables Y and Z are taken to be the
same for both models which, therefore, differ only by the set of exact a priori
restrictions, say

       !I’;( B, I-, 2) = 0;     k=l...K,,                                                    (3.12)

   ‘“See, however, Harkema (1971) for an example of explicit derivation   of the complete   marginal
prior density p (II, s2) in a class of underidentified models.
Ch. 9: Bayesian Analysis of Simultaneous   Equation Systems                                                   539

with associated parameter spaces S’, 5 i, 9’ and %rr o (i = 1,2). When 9’ = Gj”,
we could say that the models M, and M, are not identified in relation to one
another. A Bayesian generalization of this concept, introduced in Zellner (1971, p.
254), takes into account the prior densities p( II, 521i&) associated with models Mi
(i = 1,2). The predictive densities, conditional on Mi, are


       P(YIM,)=~iP(Yl~,~)P(~,~l~)dnd~,                                                                  (3.13)

since, bydefinitionof    M, andM2,p(YI~,9)~p(Yln,a,Mi),         i=1,2. ThenM,
and M2 and their associated prior densities are not identified in relation to one
another15 if and only if

       P(WW        = P(J’IM,).                                                                          (3.14)

In such a case, the prior odds for M, and M, are not revised through observa-
tions, and the posterior odds satisfy

       P(WIY)
       p ( M2 I y) = po
                        P(W) ,         identically in Y.                                                (3.15)




4.     Reduced-form analytics

4.1.    Natural-conjugate prior densities

The analytics in this section are not presented because we regard natural-con-
jugate analysis of the reduced form as useful for applications. They are presented
 for easy reference in subsequent sections and as a review of basic tools in
Bayesian econometrics.
    Provided rank Z = n -CT (and n + m < T to validate other results below), the
 likelihood function (1.6) can be expressed in terms of the least-squares estimates:

       I?= (z’z)-‘Z’Y,               (T-+=w=r[r-z(ztz)-‘zl]Y,
                                                                                M = Z’Z,                  (4.1)
       WL     Qiy) a &I- (‘/“Sxp[-+tr&?-‘[(II-~~)‘M(IT-I?)+W]].                                           (4.2)


   “See also Florens   et al. (1974) where the authors   discuss a closely related   concept   of D-identifica-
tion.
540                                                      J. H. D&e   and J- F. Richard

The right-hand side of (4.2) is also a kernel of a Normal-Inverted-Wishart
density on (II, s2). The likelihood function may therefore be rewritten as

      L(II, r(21Y) a f%" (Irlfi,Q@M-')f,(O(W,2=n-m-1).                          (4.3)

Thus a natural-conjugate prior density for (II, Q) is given by the product of a
conditional matricvariate normal prior density:

      p(IIla)   = f~m(Il(IT,,iM4,-‘),      with (II,, MO) E R”“x C?“,           (4.4)

and a marginal Inverted-Wishart    prior density:

      P(Q)=fiw4       67 yoh with WOEC?mandv,>m-l.                              (4.5)

‘The prior expectations of II and Q are

      E(n) = qlqq       = II,,    m-J)=                      (q,>m+l).          (4.6)
                                           VO



The conditional and marginal covariance matrices of vecII,    the column expan-
sion of II, are


                                 wa=vo_;-,
                                       W,@M,-1,                                 (4.7)

where advantage has been taken of the fact that II and Q are linearly independent
even though they are clearly non-independent (implications of this feature for
applied work are discussed below). The (hyper) parameters (II,, MO,W,) and y.
should reflect the a priori information. The marginal prior density on II implied
by (4.4) and (4.5) is a matricvariate-t density:




                                                                                (4-g)

As usual in a natural-conjugate framework, both the prior and the posterior
densities have the same functional form, so that

                                                                                (4.9)

                                                                              (4.10)

                                                                              (4.11)
Ch. 9: Bayesian Analysis of Simultaneous Equation Systems                                       541

where”

       M*=M,+M,                  II*=M;‘(MoII,+MfI),                  v*=q)+T              (4.12a)

and




                                                                                          (4.12b)

   As initially noted by Rothenberg (1963), the natural-conjugate family has a
very restrictive feature. In (4.7), the nm x nm covariance matrix of vet II takes the
form of Kronecker product with, therefore +m(m + l)+ fn(n + 1) instead of
fnm(nm + 1) free (hyper) parameters. This implies in particular that the covari-
ante matrices between pairs of columns of II are all proportional to M; ‘.
   The only relevant situations where this feature is harmless are:
(i)    M,, = 0: The prior density is non-informative about II (and may or may not
       be informative about a).
(ii)   w; = 0 for all i, j except when i = j = 1: The prior density is informative
       about the parameters of a single reduced-form equation (here taken to be the
       first, through appropriate labelling of variables).
   In Section 6.4 we shall define an extended natural-conjugate prior density for
(n, s2), where the (conditional) covariance matrix of vecI7 is no longer con-
strained to the form of a Kronecker product. The cost of this generalization is the
need to rely, partially at least, on numerical methods - a typical trade-off in the
Bayesian framework.


4.2.   Further results

We have already mentioned that, under a natural-conjugate prior density, II and
D are not independent. The practical consequences of this undesirable feature will

  16As shown for example in Raiffa and Schlaifer (1961), these formulae derive from the standard
convolution rules for the sufficient statistics of successive independent samples. Let (Y, Z,,) be a
matrix of observations for a (hypothetical) sample and (Y, Z,) be the pooled samples. Then

                   M,=Z;Z,=ZhZ,+Z’Z=M,,+M,

                M,II,   = Z;Y,    = ZAY, + Z’Y=   MJI,   + MII,

       W’,+II;M,II,=Y;Y,=Y~Y,+Y’Y=(W,+II~M,,&)+(W+~MI^I).
542                                                                                   J. H. D&e    and J- F. Richard

be illustrated in Section 6.6. We could assume instead prior independence
between II and 52 and, in particular, consider the prior density

                                                                                                                (4.13)

When Q, = W, and p. = X0 = vO, the first and second moments of (II, 52) under
(4.13) are the same as those obtained under the natural-conjugate prior densities
(4.4) and (4.5). A kernel of the posterior density is given by the product of the
prior density (4.13) and the likelihood function (4.3). Marginalization with respect
to D yields the posterior density




As such this density is not amenable to further analytical treatment. However, if
we partition the reduced form as in (2.7), the posterior density of II,, the vector
of coefficients of the first reduced-form equation, conditionally on II,, is a 2-O
poly-t density,17 i.e. a product of two kernels of Student densities. As discussed in
Section 7.2, such densities can be evaluated numerically by means of one-dimen-
sional numerical integrations, independently of n, the number of coefficients in
II,. Furthermore, as we shall outline in Section 7.3, this property can be exploited
in order to construct so-called importance functions for the Monte Carlo numeri-
cal integration of the joint posterior density (4.14).
    If we are interested only in II,, an obvious alternative to the above conditional
analysis amounts to using a prior density which is non-informative on (n,, tin>,
following thereby the limited information techniques outlined in Section 2.
Following (2.14), let

                                                                                                                (4.15)

where, for the purpose of comparison with (4.8), p(II,)                            is taken to be the Student
density:


      p(l7,)af;           II,III~,LM,,~o--m+l                      .                                            (4.16)
                      i            4,                          1

The posterior density of II, is then obtained by a direct transposition of formula


   “To see this, factorize the two kernels in the right-hand           side of (4.14) according   to formulae    (A.33)
and (A.34) in Appendix A.
Ch. 9: Bayesian Analysis of Simultaneous        Equation Systems                  543

(2.16): ‘*




                                                                               (4.17)

and is, therefore, again a 2-O poly-t density.
   It will be shown in Section 6.4 that 2-O poly-t densities are also obtained under
extended natural-conjugate prior densities.
   As noted by Zellner (1971, p. 101) the density (4.17) can be approximated by
the normal density f;(IIt 1n,, a), with parameters


         R=(v,-m+l)~+(T-n-m+l)M                                                (4.18)
                            WI1     4,
and

        T&=3?-               (Y,-m+l)M,IIP+(T-n-mfl)~~,                .       (4.19)
                         I                 $1                      I

However, this approximation should not be used indiscriminately. For example,
the density (4.17) could be bimodal or strongly asymmetrical, in which cases the
normal approximation would be misleading.
  Two forms of “non-informative” prior densities have been used for (n, s2):

(0      If we start from the natural-conjugate prior density (4.4) and (4.5) and let
        Me, W,, and v,, tend to zero, we obtain:

              P(fl,fi)         a IQ]-(t/Wm+n+i),                              (4.20)

        which is found for example in Drkze (1976). Note that (4.20) includes a
        factor 1s21-(‘/2)n arising from the integrating constant of (4.4).
        If we\start instead from the independent prior density (4.13) and let Me, W,,
        pO, and X, tend to zero, we obtain:

       p(II,ti)a             ]52]-(1/2)(m+1),                                 (4.21)

        which is advocated [for example by Zellner (1971)] on the basis of Jeffreys’
        invariance principles.


     18We just replace /3; by (I      0’) and y* by II,.
544                                                                 J. H. D&e   and J- F. Richard

   We are not aware of any compelling argument to prefer either specification
over the other. In the posterior densities (4.10)-(4.1 l), the choice affects only v*,
which is equal to T + n under (4.20) and T under (4.21). A conservative attitude
would favor (4.21) which results in larger posterior variances. As shown in Section
5, however, the prior densities used under limited information analysis are closer
to (4.20) than to (4.21).


5.     Limited information analysis

5.1.    Introduction

As indicated in Sections 1.1 and 2.1, classical limited information analysis
estimates the parameters of a single structural equation, taking into account the a
priori restrictions imposed on these parameters, but ignoring the restrictions
imposed on the parameters of the remaining structural equations. The specifica-
tion of these additional equations is used only to complete the list of exogenous
variables. Stated alternatively, limited information analysis ignores all the over-
identifying restrictions pertaining to these remaining equations, and uses only the
restrictions on the reduced-form parameters implied by overidentifying restric-
tions pertaining to the single structural equation of interest.i9
   A Bayesian analogue of this approach similarly uses the exact a priori restric-
tions pertaining only to the parameters of a single structural equation, and
ignores the remaining restrictions. In addition, it rests on a fully specified prior
density for the parameters of the structural equation of interest, together with a
non-informative prior density on the remaining parameters of the system. There is
some arbitrariness in the choice of a parameterization for the rest of the system. It
seems accordingly desirable to specify the prior density in such a way that it be
invariant with respect to this choice. This problem is discussed in Section 5.2. The
reader who is not interested in the technicalities associated with the definition of
non-informative prior densities may turn immediately to Sections 5.3 and 5.4
which are essentially self-contained. The illustration of Section 2.4 is extended in
Section 5.5. Section 5.6 deals with normalization and Section 5.7 with generaliza-
tions.

5.2.    Parameterization and invariance

Using the notation of Section 2, we study a single structural equation
       yp+zy=u,                                                                            (2.2)
  “See, for example, Goldberger (1964, p. 346), Maddala (1977, p. 231), Malinvaud (1978, p. 759),
Theil(1971, p. 503), or Zelher (1971, pp. 264-265).
Ch. 9: Bayesian Analysis   ofSimultaneous   Equation Systems                        545

where u is normally distributed with expectation zero and covariance ~‘1,.
Conditionally on (j3, y, u 2, the reduced-form parameters (l7, Jz) satisfy the n + 1
linear equalities:

      I@+y=o,                 jYOj3=d.                                           (2.3)
Define, for notational convenience, 0 = (8, y, a*)- see footnote 5 -and let 0
denote the set of admissible values for 8. Conditionally on 0, the space of
reduced-form parameters is

      9~={(IIER”m,,+,=o}x{,~,~,,‘~~=.~}=def9~nX9~.                               (5.1)

   In a limited information framework we want to define a “non-informative”
prior measure on $$. If we ignore the restrictions (2.3), then (II, a) will vary
freely over R”“’ X l.?“, and we could use the non-informative prior measures (4.20)
or (4.21).
   Given (2.3), however, (II, 52) are not variation free. In order to overcome this
difficulty (see also the remark at the end of this section), we shall define a family
of one-to-one mappings from ‘?$= $i’/ X 9” onto R*(“-I) X( R”-’ X CL?“‘- ‘).
These mappings are indexed by an (essentially) arbitrary m(m - 1) matrix Q.
Each mapping (each Q) defines a variation-free reparameterization of the reduced
form. The corresponding expressions for the likelihood function are given in
Lemma 5.2. We then define in Lemma 5.3 a condition under which non-informa-
tive prior measures on the new parameter space are invariant with respect to Q.
This condition defines uniquely our non-informative prior measure on $$. Finally,
two corollaries relate this result to the special case of Section 2 and to prior
measures appearing in earlier work.
   We first note that qtifl is an n(m - l)-dimensional linear subspace of R”“‘. Let
Q be an arbitrary m (m - 1) matrix of rank m - 1, such that

     P=(P          Q)                                                            (5.2)
is non-singular almost everywhere2’ and let

     IIP=,,,@=(II/I              IIQ)=(-y            $2).                        (5.3)

Conditionally on 8, (5.3) defines a one-to-one mapping from $lononto R”(“-I),      the
space of !l$, with reciprocal

      Il=@P-‘=          (-y      @*)F.                                           (5.4)

  *‘The notation   Q, might be advisable    in order to stress this condition.
546                                                                              J. H. D&e and J- F. Richard


  ‘3”’ is not a linear subspace of C?“‘.However, it is isomorphic to R”-’                         X C?“- ‘,
as evidenced by the following property:
Lemma 5.1

Let A be an m x m matrix partitioned as

                 All              Al2
       A=        *                                                                                    (5.5)
             i         21         A22    i ’

where A ij is mi x mj, and define

       A,, = A,‘A,,,                           A,,., = A,, - -4210b                                   (5.6)

Then A E C?“’if and only if

        (A,,,A,,,A,,.,)                   E C?“Ix R”‘“’ x ‘2”*.                                       (5.7)


Proof

We rewrite A as


                                                                                                      (5.8)
                                                                                                          0


      We shall apply Lemma 5.1 with ml = 1 and

                                         a=
        A=P’S)P=                                                                                      (5 -9)
                                        Q’fJP

Conditionally on 8, (5.9) defines a one-to-one                         mapping from 9:      onto R”-’     X
CZm-‘, namely

         A,, = o-=/~‘QQ,                                                                             (5.10)

        A 22.,= Q’aQ - a-=Q’,npp’fJQ,                                                                (5.11)

with reciprocal

        Q=p’-’                                                                                       (5.12)
                            (4,          Im?,)(C          AO,,)( :,   ;:l)p-l.
Ch. 9: Bayesian Analysis of Simultaneous    Equation Systems                     547


   The mappings (5.3), (5.10), and (5.11) define the parameterization (8, @*,A,,,
A,,,), with parameter space 0 x R”(“-‘) x R”-’ x L?“‘-‘. These parameters are
variation free. Conditionally on 8, ( az2,A 12,A 22.,) are in one-to-one correspon-
dence with (II, s2) E 9*. Note, however, that the definition of these parameters
depends on the choice of Q.
   We can now rewrite the likelihood function in terms of the new parameters.
Lemma 5.2
The likelihood function (1.6) may be rewritten and factorized as

      L(~,Qi,,A,,,A,,.,IY)=~,(elY).~,(e,~~,A,,,A,,.,IY),                      (5.13)

where

                                                                              (5.14)



                                                       Z) ( ;$A22.*%).        (5.15)


Proof
Combining formulae (1.6), (5.4), (5.10), and (5.1 l), we have successively:

      trK’(Y-ZII)‘(Y-ZII)
             =trA-‘(Yp+Zy                  YQ-Z!P2)‘(Yp+Zy          YQ-ZQ2)
             = uP2(Yp + Zy)‘(Yp + Zy)+trA;2!1
                ~[YQ-Z~~-(YP+ZY)A,,]‘[YQ-Z~,-(YP+ZY)A,~~.

Also, Is21= llPll-21Al = a21P( -21A22,,l.                0
Our prior density will be similarly expressed as

      P(e,~,,A,,,A,,.,)=p(e).p(~2,A,,,A,,.,le).                               (5.16)

We want P(@~,A,~, A 22,,18) to be both non-informative and invariant with
respect to Q. In the Normal-Wishart and Student-Wishart families, a non-infor-
mative measure will be of the form

      p(@22,A,2,A2,.,le)a           (A22.,l-(1~2)(P+m+n+‘),         VER.      (5.17)

   The following lemma yields the desired invariance.
548                                                                          J. H. Dr&eandJ-F.   Richard


Lemma 5.3

The prior measure (5.17) is invariant with respect to Q if and only if v = 0.
Proof

See Appendix B.                  17
   Notethatforv=O,theexponentin(5.17)maybewrittenas(m-l)+(n+l)+l,
where (m - 1) and (n + 1) represent respectively the number of “dependent”
variables and the number of “regressors” in the partial model (5.15), 8 being
given. The prior measure (5.17) could therefore also be justified on the basis of
jeffreys invariance principles. Yet, as mentioned at the end of Section 4.2, these
principles may lead to different choices of exponents, depending on whether or
not the number of regressors is taken into account. If it is not, the resulting prior
measure is no longer invariant with respect to Q, as evidenced by Lemma 5.3.
   Lemma 5.3 can now be applied to the prior measures introduced in Section 2.
In Section 2.1, Q was specified by (2.8) as*’


      Q=        (qfl,)T                                                                          (5.18)

in which case !D2= II, and A = s2*, the covariance matrix of (u                           V,). A,, and
A **., are then given by

      A        zu-*Q*                                                                            (5.19)
          12                12



and

      A 22.1 =    i-J;*,,    =   f-J;*   -   a;,q,      ‘AT!:*,                                  (5.20)

and represent respectively the regression coefficients of V, on u and the covari-
ante matrix of any row of V, given u.
Corollary 5.4

The prior measures




are invariant with respect to Q. Under (2.14), the “marginal” prior measure p(B)


  “A similar choice appears              in Zellner   (1971, section 9.5).
Ch. 9: Bayesian Analysis of Simultaneous   Equation Systems                       549

is given by

      p(8) ap(&,y*)(u*)(“2)(“-3).                                             (5.21)

Under (2.17), it is given instead by


                                                                              (5.22)

Proof

We make the integrand transformation from L?* ( = A) to (u*, A ,*, A **,,), where
“2  and  A,,, are given in (5.19) and (5.20). The Jacobian of this transformation is
( u*)~-‘. After transformation, (2.14) and (2.17) factorize into the product of
(5.17) with (5.21) and (5.22), respectively. The proof follows from the invariance
of (5.17). 0
Remark

Earlier work on limited information Bayesian procedures often relied on prior
measures expressed in terms of (13,II, D). This raises problems of interpretation,
due to the restrictions (2.3). The following corollary helps to relate such measures
to the invariant measures (5.17).
Corollary 5.5

Prior measures of the form

      ~(P,u,~2,~)afo(8,v,~2)l~l-(‘~2)~m+n+1),                                 (5.23)

where j,,(p, y, a*) is an arbitrary measure, are invariant with respect to Q. After
reparameterization they factor into the product of (5.17) and

                                                                              (5.24)




As in the proof of Corollary 5.4, make the integrand transformation      from A to
(e*&,    A,,,).  0
Corollary 5.5 suggests that the marginal density p(p, y, a*) should include the
additional factor (u*)-(‘/~)(~-~+~) as in (5.24), thereby removing an ambiguity in
the interpretation of (5.23) which has hampered previous presentations, as in
Dreze (1976).
550                                                                         J. H. D&e     and J- F. Richard

5.3.    Posterior conditional densities and moments

We now derive posterior densities under the invariant prior measures (5.17). Let

                           P’WP B’WQ)= (2:                  h),
       S=P’WP=             Q’J,,@     QlWQ                                                           (5.25)
                       i




where, following (4. l), W = Y’[ I - Z( Z’Z)- ‘Z’] Y.
Lemma 5.6

Under the prior measure

                 )~cp(8)IA~~,,l-(‘/*)(m+~+~)
       PW@22,42~A**.,                                                                                (5.26)

the joint posterior density ~(0, G2, A,*, A,,, 1Y) may be written as the product
of**

       01 y) a dmw~i                  ('/*)(T-m+')fNT(Yp     + ZylO, &,),                            (5.27)

       p(A,,.,ik    y) =fif;;*(~22.,~~22.,y       up                                               (5.28a)

       p(A,,l~,,,,,~,Y)=~~“-‘)(~,,l(b’WP)-’P’WQ~(P’~)-‘~22.,)~
                                                                                                   (5.28b)

       P(@*l42J**m              8,Y)=f~(m-‘)(qi21~Q-(~~+y)A,2,A22.,~~-’).
                                                                                                   (5.28~)

Proof

See Appendix B.            q

  Digressing briefly, we use Lemma 5.6 at once to validate results quoted in
Section 2.2.
Corollary 5.7

Under the prior measure (2.14), the posterior density of (&, Y*) is given by




                                                                                                    (2.16)

   *‘The density (5.28b) could indifferently be written    as f{-‘(A’,21S,,s,j’,   s,;‘A~~,,).   The matrix
normal notation generalizes to subsystems, as discussed    in Section 5.5.2 below.
Ch. 9: Bayesian Analysis       of Simultaneous Equation Systems                                      551

  Under     the prior measure            (2.17) it is given by


     P(LY*I y) a mwdaPd)“‘2”T-m+‘)
                               X[(~&+Z*y*)‘(lg3d+Z*y*)]-(1’2)-+m~+n~+’).
                                                                                                 (2.18)
Proof

Under    (2.14), we combine            formulae     (5.21) and (5.27), obtaining:




from which (2.16) follows. Under                  (2.18) we simply replace   (5.21) by (5.22).     q

   The posterior density (5.27) is discussed extensively     in Section 5.4. As for
(5.28), it enables us to derive the posterior moments for (IT, 52) and the predictive
moments for Y, conditionally     on 8.

Corollary 5.8

Under the prior measure (5.26), the posterior mean of IT, the posterior covariance
matrix of the column expansion of II, and the posterior mean of 9, are given
conditionally on 8 by

          E(nle,Y)=~-(~~+y)(P’wp)-‘B’w,                                                          (5.29)

     v(vecIIp,       Y) = &               [w-     wa(atw-‘mj

                                 ~[M-‘+(~~+1)(P’~~)-‘(~~+y)‘],                                   (5.30)

          qale,      y) = wp(p~w~)-‘~*(p,wp)-‘~‘w
                                 +~[l+oz(p’~~)-‘l[w-wp(~~~~)-18~~].

                                                                                                 (5.31)

Proof

See Appendix      B.       0

All these expressions    are homogeneous     of degree zero in (p, y, a) and are
therefore invariant with respect to the normalization rule - a property discussed in
Section 5.6.
552                                                           J. H. Dr&e and J- F. Richard

  As a result of (2.3), the conditional moments of (II, Q) satisfy:

       E(IrB + y]@, Y) = 0,                                                        (5.32)
       V(I@ + y]@, Y) = 0,                                                         (5.33)
         E(p’s;rp]e, Y) = u2.                                                      (5.34)

  Predictive moments are by-products         of formulae (5.29)-(5.31).     Let (Z,, &)
denote a future sample. We then have

       E(Y,IZ,, 8, Y) = Z&71@,         Y),
       F/(vecY,1Z,,8,Y)=E(S218,Y)~I+~[vec(Z,IT)l8,Y],                              (5.35)

where V[vec(ZJI)]t9,Y] is obtained from (5.30) by pre- and postmultiplying             the
last term respectively by Z, and Z;.


5.4.    Posterior marginal densities

We now concentrate on the analysis of the posterior density of 8, as given in
(5.27). This density is of direct interest for inference on 13and it is also required to
marginalize the expression derived in Corollary 5.8. The form of p (01 Y) indicates
that, conditionally on p, we can apply the usual analysis of univariate regression
models, as discussed for example in Zellner (1971), whereby p( t3) is either a
Normal-gamma density - as in (5.40) below - or a Student-gamma density- as in
(5.49) below. More general cases must be treated by means of numerical integra-
tion, using the techniques described in Section 7, and will not be discussed. Also,
we only consider exclusion restrictions, since more general linear restrictions can
be handled through suitable linear transformations of the coefficients and the
variables.
   The notations are those of Section 2 and we have p’ = (& 0’) and y’ =
(y;    0’), where & E R”l and y* E R “I. The data matrices are partitioned confor-
mably as in (2.4). As mentioned in Section 3.3, we need not impose the condition
m, + n, < n provided p( 0) is sufficiently informative. Normalization is dealt with
by introducing the transformation from (&, y*, a2) to (/I,, (Y,u:), where

       al=   (a;   a;) =   $(a2...&,Y,...yn,) ER”,
                            I
                                                                                   (2.20)

with I, = (m, - l)+ n, and

                                                                                   (5.36)
Ch. 9: Bayesian Analysis of Simultaneous Equation Systems                                   553

p, is now unidentified and we shall draw inference only on (Y and u:. The
quadratic form &WA,& may be rewritten as

      P~w,,Pa=s:+(a,-a,)‘H,(al-al),                                                     (5.37)

where the statistics (a,, H,,s:)E           Rml-’ X k?ml-l     X C_?‘-see   Lemma 5.1-are   de-
fined through the identity

                s:+ a{H,a,         - a;H,
      K,=
               (    - HP1             Hl     I *
                                                                                        (5.38)


Following (5.27), the posterior density of (a, a:) is given by

     p(~,~~~~)ap(a,a~)[s~+(cu,-a,)~~,(a,-a,)]~*’~~~~~~+‘~
                        x fNT(rl
                              - X% 44)



where p, = T - m - ml + 2 and X is a T X 1, matrix consisting of the columns of
(Y 2) corresponding to the elements of (Y.
Lemma 5.9

Under the prior density

     P(wJ:)=.f~(4a,, ~?H,-‘)hy(u~l~o”~
                                  ILo),                                                 (5.40)

the posterior density of (ar, u:) is given by

     &,#‘)a             [ftm~-1(~llal~~;2Hl~~l)]~1
                        Xra(~Ia*,~:H;~)~i,(':l'S~tL*),                                  (5.41)

where

     H,=Ho+X’X,                 a, = H;‘(H,a,        - X’y),        P*=P,,+T,           (5.42)

        s:=s,2+(y+Xao)‘(ZT-XH;‘X’)(y+Xa,),                                              (5.43)

and the posterior density of cwis the 1- 1 poly-t density
554                                                               .I. H. Dr&e and J- F. Richard


Proof

Up to an additional Student kernel in (Y,, these expressions may be found for
example in Zellner (1971, ch. 4). q
  It is instructive to decompose (5.41) into conditional and marginal densities.
Corollary 5. IO

Under the prior density (5.40), we have




      P(a~la~~Y)afi~(a121s2*+(           a1 -   a:)‘H;Ll.2(q- G),p*+(m, - l>), (5.46)




where a, and H, have been partitioned conformably with ar, and

      a:,, = aa - H;2e’H&a:,             H:,,, = H:, - H:2H22p’H;?:.                    (5.48)


Proof

These results follow from (5.41), by well-known properties of the Student and
Inverted-gamma densities, and in particular by the identity

      ~:+(a-a,)‘H*(a-a,)
      = [s:+(a,-a:)‘H;“,,,((Y,-aa:)]+(CY,-a:.,)’H,*,(a,-a:.,).                               0


   The posterior density of (Y,,being defined through a ratio of Student kernels, is
a so-called l-l poly-t density. Furthermore, following Corollaries 5.8 and 5.10,
the conditional posterior expectations of (n, 62) and covariance matrix of vecII
depend on quadratic forms in (Y, which are precisely those characterizing the
Student kernels in ~(a, I Y). As discussed in Section 7, this makes the Bayesian
limited information analysis of a single equation fully operational under the prior
density (5.40).
   Specifying a sensible prior density for u: is generally a difficult task. Conse-
quently, model-builders often use diffuse specifications. In such cases, it is
advisable to assume prior independence between (Yand a:, as we shall illustrate in
Ch. 9: Bayesion Analysis of Simultaneous Equation System                                  555

Section 5.5. The prior density

       P(WJ:)=f:I(+             ~,Go,~o)fr&~:l&            A,)                        (5.49)

satisfies this independence requirement. Note that when G, = so2H0 and A, = pa,
the prior densities (5.40) and (5.49) imply the same first and second moments for
(cw,CJ~);in particular, cxand CT:are still lineurly independent under (5.40).
Lemma 5.11

Under the prior density (5.49), the posterior densitiesp(af(a,            Y) and p(a) Y) are
given by

                                                                                      (5.50)



                                                                                      (5.51)


       H = X’X,         ci= -(X’X)_‘X’y,              s2=y’[l,-X(X’X)_‘X’]y,

       X, =X0 + T.                                                                    (5.52)

Proof

See, for example, Zellner (1971, ch. 4).          q

   The posterior density p(al Y) is now a so-called 2-l poly-t density. As
discussed in Section 7, this preserves the tractability of the approach.


5.5.    An application

To illustrate, we review the application described in Section 2.4 under both the
Normal-gamma prior density (5.40) and the Student-gamma density (5.49). In
all cases under consideration, the (hyper) parameters in (5.40) and (5.49) are
chosen in such a way that the prior density p( cv) is given by (2.29).23 This leaves

  23That is, A, = p. = 6, and


        ao=0.415E-03     Y ,
                        00


       Go = s~-~&, = 0.22007E +08
556                                                                          J. H. D&e     and J- F. Richard


                                               Table 5.1
                      Limited   information   analysis of the demand     eauation

                                        B22                 Y23                      y25

       Prior (5.40)      A,          -0.6136           0.65086    - 03           0.3302 E + 02
                                       (0.1831)       (0.0962)                  (0.0821)
                         Al          - 0.3992          0.5108E    -03            0.2518E +02
                                       (0.5122)       (0.1896)                  (0.2561)
                         A3             0.2115         0.3578E    - 03           0.0797E + 02
                                       (1.001)        (0.1900)                  (0.5812)

       Prior (5.49)      B,          - 0.6346          0.6808 E - 03             0.3307E + 02
                                      (0.1292)        (0.0763)                  (0.0558)
                         B2          - 0.8047          0.7552 E -03              0.4090 E + 02
                                      (0.2575)        (0.1405)                  (0.1143)
                         B3          - 0.8538          0.7706E - 03              0.4343 E + 02
                                      (0.9325)        (0.4003)                  (0.4490)



only ~0’to be specified. Three different values are considered, namely 4, 16, and
64. The corresponding prior means and standard deviations of a,, are 1, 4, and
16. For comparison, the FIML estimator of uzz is 0.832, a value which should be
unknown when ~(a:) is selected. Hopefully, the second and third values of so”
should appear most implausible to a careful analyst. They have been chosen in
order to exemplify the dangers of a careless assessment of p( CT:), especially under
the Normal-gamma specification (5.40). The runs corresponding to the successive
values of ~0’ are labelled A, --) A, under (5.40) and B, + B3 under (5.49). The
posterior means and standard deviations of (Y are reported in Table 5.1. The
graphs of the posterior densities of & are given in Figures 5.1 and 5.2.

       30




                                                            A2
Ch. 9: Buyesian Analysis of Simultaneous   Equation Systems                                         551


               r
                                                  81
                                                       i


                                                   1
                                                   I




           WA_<A_
          I.



                                    83
                                    /Y



        -3.0                 -213           -ID               0.0           1.0

               Figure 5.2.   Posterior densities of & under Student-gamma   prior densities.


   As evidenced by Figures 5.1 and 5.2, the results are more sensitive to the choice
of p(a:) under (5.40) than they are under (5.49). It is shown in Richard (1973)
that the positive local modes of & under A,, B2, A,, and B, reflect doubtful rank
identification, due to a strong positive correlation between national income and
cattle stock.

5.6.   Normalization and invariance

We mentioned in Section 2.1 that the LIML estimators of (& y *) are invariant
with respect to normalization. It is therefore natural to analyze which of the
posterior densities derived in the previous sections are invariant with respect to
normalization (with respect to the labelling of the endogenous variables). Clearly,
this question is particularly relevant when the prior density is “non-informative”,
as in (2.25) and (2.26) [see Fisher (1976)].
   Assuming 8, and /3,,,, to be non-zero with probability one, let (8, cu) and
(&,     0 denote two reparameterizations associated respectively with the normali-
zation rules “& = 1” and “/3_ = 1” (see the concluding sentences in Section 2.3):

                                                                    q = (1        a;),   (2.20)-(2.21)
558                                                             J. H. Drbe   and J- F. Richard


A density p(a 1.) is said to be invariant with respect to normalization if and only if its
functional form is invariant with respect to the integrand transformation from a
to s:
Lemma 5.12
The posterior densities (2.25) and (2.26) are invariant with respect to normaliza-
tion.
Proof
By definition &(c        S;) = /3,(E{ a;) = (& y;). Let I,, denote the first ele-
ment of {,, i.e. S,, =p,/&,.       Th e integrand transformation from a to { has
Jacobian Il,;‘lm’+nl (l and a contain only m, + n, - 1 elements but S,, is the
reciprocal of the last element of a,). Applying this transformation to (2.25) yields,
therefore,


        P(3
                  x{~~2.(~~, + z*{2)'(YA3;       + z*~2)}-(“2)(T-m+ml+n,+‘),

and IS,, ) cancels out. The same reasoning holds for (2.26) since the integrand
transformation from a, to {, has Jacobian ISG ’ 1’1. 0
Lemma 5.13
The posterior density (2.24) is invariant with respect to normalization if and only
if the prior density p(a) has that property.
Proof
We repeat the argument in the proof of Lemma 5.12. The Jacobian of the
transformation from a to { is absorbed in p( a) and the additional factor in (2.24)
is homogeneous of degree zero in a and, therefore, in 1. 0
      Note that the Student density

        ~(a)=f,%la&~~)                                                                 (5.54)

is invariant with respect to normalization if and only if /.Q = 1, i.e. if and only if
p(a) is Cauchy. A Cauchy density does not possess finite moments of order 1 or
higher, but it possesses finite fractiles. The corresponding posterior density, as
given in (2.24), has the same property since the ratio of quadratic forms in the
right-hand term of (2.24) is homogeneous of degree zero.
   We can apply the same line of reasoning to the posterior densities (5.44) and
(5.5 1).
Ch. 9: Bayesian Analysis of Simultaneous Equation Systems                           559


Lemma 5.14
The posterior density (5.44) is invariant with respect to normalization if and only
if p0 = 2 - m. The posterior density (5.5 1) is invariant with respect to normaliza-
tionifandonlyifp0+X,=2-m.               0
   These results may seem strange at first sight. Actually, they are not surprising
once it is recognized that prior densities like (5.40) or (5.49) are not equivalent to
hypothetical samples. It would take more complex densities, in the form of (5.41)
or (5.50)-(5.51), to represent the information contained in a previous sample
(where equations 2 to m are just identified). The conditions for invariance with
respect to normalization of these more general densities admit a natural interpre-
tation.
   A stronger form of invariance is achieved by imposing a priori exchangeability
among all the elements of (&, y *), i.e. by requiring that (5.54) be of the form

       p ( LX)a { Z( I,, + , - cod) iv) -w2w’     + ‘I,                          (5.55)

where L is an (I, + 1)X 1 vector with every element equal to one and c0 is a scalar
(hyper) parameter (cO < l/(1, + 1)) [see Lindley and Smith (1972)].


5.7.     Two generalizations

We conclude this section by outlining two generalizations of the limited informa-
tion analysis. Details may be found in Richard (1979), Dreze (1976, section 5)
and, for a wider class of linear models, in Florens et al. (1979). Another
generalization to non-linear equations is presented in Ter Berg and Harkema
(1980).

5.7.1.     Informative prior densities

The non-informative conditional prior measure p( Q2, A ,2, A 22,,(0) as given in
(5.17), could be replaced by an informative prior density, provided it be natural-
conjugate for the partial likelihood function (5.15).
   As pointed out in Section 4, such a prior density is still restrictive; this is the
price we have to pay in order to preserve the operational features of limited
information procedures. The alternative is to use the computationally more costly
full information procedures discussed in Section 6.
   Given (5.15), a natural-conjugate prior density p ( Q2, A ,2, A 22,,10) is defined as
the product of a matricvariate normal density on (Q2, A,,), conditionally on
(A 22,,t9) and an Inverted- Wishart density on A 22,, conditionally on 13.The joint
density is fully characterized by a scalar v0 > m - 1 and a matrix ‘k, E Cm+“.
560                                                         J. H. D&e    and J- F. Richard


Following Lemma 5.1, GOis in one-to-one correspondence        with (W,, II,, Me) E
C” x R”” x C” with


                                                                                   (5.56)


   The corresponding conditional prior moments of (If, q) are given by formulae
(5.29)-(5.31) if we substitute (M,,, II,, W,, ~a) for (M, II, IV, T); they will typi-
cally be used for the elicitation of the prior density P(@~,A,~,A~~,,~~). These
moments, being conditional on 8, we must proceed numerically, trying successive
values of ‘k, and computing the corresponding marginal moments of (II, s2) until
a satisfactory assessment is reached.
   As usual within a natural-conjugate framework, the (hyper) parameters of the
posterior density p( Qi2,A ,2, A 22,, 119,Y) are obtained by the convolution


                                       v*=v. + T,                                  (5.57)

from which (IV*, II,, M,) can be obtained through the decomposition in (5.56).
The conditional posterior moments of (II, Q) are also” given by formulae
(5.29)-(5.31), upon substituting (M,, II,, W*, v*) for (M, II, W, T).
   If, in addition, the conditional prior density p( uf 1a) is given by

                                                                                   (5.58)

i.e. if the prior density p(uf, A,2, A **,, Id) derives      from       an   underlying
Inverted-Wishart prior density on 9,

      PCD) =fiWtJzI    wO, vO),
                                                                                   (5.59)

then the results derived above carry over to the informative case. In particular,
the functional form of the posterior densities (2.24) and (5.51) is preserved, the
data moment matrix being replaced by 9,.
   This short discussion indicates that a generalization of the Bayesian limited
information analysis, whereby the joint prior density is now proper, can be
achieved at little additional computational cost.

5.7.2.     Subsystem analysis

Our analysis can be extended from a single equation to a subset of equations from
a simultaneous equation model. Let such a subset be

         YB, + zr, = v,,                                                           (5.60)
               ,   .   ___ ,~ _   -\                                                I,. /.\
Ch. 9: Bayesian Anulysis of Simultaneous   Equation Systems                         561

where B, and r, are respectively m X p, and n X p, matrices of unknown
coefficients. Let 8 = (B,, r,, .ZII). Most formulae derived in the single equation
case remain valid except that dimensions must be readjusted (essentially m - 1
becomes m - p,). In particular, under the non-informative prior measure (5.17)
the posterior density of 8 is given by


       P(QYF       PwIB;WB,l          (“2)(T-m+pl)fa~(YB,     + Zr,lOJ,,@1,).   (5.62)


     Comparing (5.62) and (1.7), it should be clear that:

(i)    the analysis of the posterior density of 8 is the subject-matter of full
       information analysis, to which we turn in Section 6; and
(ii)   formula (5.62) enables us to combine full information analysis of a subsys-
       tem with limited information analysis of the remaining equations.



6.     Full information analysis

6.1.    Introduction

The Bayesian full information analysis of simultaneous equation models raises
difficult problems as regards both the specification of the prior densities and the
(numerical) analysis of the posterior densities. These difficulties are introduced in
Section 6.2 by means of a special case. The more general case is discussed in
Section 6.3 which is also more technical. In Section 6.4 we apply this analysis to
the seemingly unrelated regression model of Zellner (1962). An alternative ap-
proach is presented in Section 6.5, with special emphasis on the two-equation
model, for which a general analysis is fully operational. Three applications are
reviewed in Section 6.6. The more technical details and proofs are regrouped in
Appendix B.


6.2.    A special case

The starting point of our analysis is the likelihood function (1.7) which we rewrite
as

       L( B, C 21 Y) a IIBIITIW (‘/2)Texp[ - f tr Z - ‘A’X’XA] ,                 (6.1)

where X = (Y Z) is the T x (m + n) matrix of observations and A’ = (B’ r’).
We only discuss the case where the elements of A are subject to linear restrictions.
562                                                                     J. H. Dr.&e and J- F. Richard


(pii = 1, i: I--) m) and that the other constraints on A take the form of exclusion
restrictions. Let li = (mi - l)+ n, represent the number of unrestricted coefficients
in the ith equation, Si be the li X 1 vector of these coefficients, Xci, = [J& Z,,,]
be the T X Ii submatrix consisting of the corresponding columns in X, and yi be
the ith column of Y.z4The ith equation of the system becomes

      yi + X(,& = ui.                                                                          (6.2)
The A matrix contains I= cy_ 1li unrestricted coefficients. Let 6’ = (6;. . .a;) be
the 1 X I vector of these coefficients.
   The expression (6.1) suggests integrating out Z first.
Lemma 6.1

Under the prior density

                                                                                               (6.3)

the posterior density of (6,2)        is

      p(ZIS, Y) =fi’z;(Z&          + A’X’XA, v, + T),                                          (6.4)
         p(S(Y)ap(S)((B((T(S,+A’X’XA~-(1’2)(”o+T).                                             (6.5)

Proof

We multiply together the likelihood function (6.1) and the prior density (6.3). The
result follows by properties of the Inverted-Wishart density. 0
   The density (6.5) is the starting point of the analysis by Kloek and van Dijk
(1978)-see also van Dijk and Kloek (1980)-who evaluate the posterior density
of 6 numerically by Monte Carlo procedures- see Section 7. One can also use
(partially) analytical procedures at the cost of imposing constraints on the class of
admissible prior densities. The two approaches are in fact complementary, as we
shall argue in Section 7.
   In order to illustrate the more analytical approach, we assume that the prior
density of 6 takes the form of a product of m independent Student densities:




   24Note the customary change of notation between single equation and full system analysis; thus, 6,
and p,, in this section were denoted (Y and j3, in Sections 2 and 5; also [y, ?I,] and ZC,, were
denoted Y, and Z,, respectively.
Ch. 9: Bayesian Analysis of Simulraneous Equation Systems                                   563

Lemma 6.2

Under the prior densities (6.3)-(6.6) and provided S, is either a constant or of the
form B’W,B with W, constant, 25 the posterior density of 6, conditionally on
(6,. . .a,,,) is a 2- 1 poly-t density.
Proof

See Appendix B. By comparison with formulae such as (4.17), the additional
quadratic form in the kernel of the density originates from the factor JIBlIT in
(6.5). 0
  Lemma 6.2 is of interest for the following reasons.
(1)  It reveals that, under a Student (conditional) prior density for a,, the full
information conditional posterior density p (6, IS,. . . &, Y) has the same analytical
form as the limited information marginal posterior density ~(6, I Y), as given for
example in (5.51). A comparison between these two densities would reveal
whether or not inferences on the coefficients of a single equation are sensitive to
the prior information on the coefficients of the other equations.
(2) As we shall argue in Section 7, Lemma 6.2 can be used to construct
approximate posterior densities from which 6 can be drawn at random. [This is
not true for the exact posterior density (6.5) since its integrating constant is not
known.] These so-called “importance functions” are critical for the application of
Monte Carlo numerical integration procedures.

   In addition, the prior density (6.3)-(6.6) lends itself to the definition of a
non-informative prior density for full information analysis of a model identified
by exact a priori restrictions. Indeed, a natural requirement to impose on such a
prior density is invariance with respect to normalization (as defined in Section
5.6). When v,, = 0 in (6.3) and v,? = 1 for each i in (6.6), the prior density
                                      m

       p(6,E)   a l~l-(1/2)(m+1) ,Q,f>(SildPy          ff,O,l)                           (6.7)
has the desired property. Also, the additional property of exchangeability may be
introduced by appropriate choice of (do, H:) [see formula (5.55)].


6.3.    Extended natural -conjugate prior densities

We now turn to a class of extended natural-conjugate prior densities analyzed by
Dr&ze and Morales (1976). The form of these densities is again suggested by an

  25For example, ifp(Q) = fiG(Ql W,, vo), thenp(XIB)=fi!&(HIB’WoB,v,).Notedso        thatLemma
6.2 remains true if (6.6) is generalized top(a) = f/l(S, Id;, HP, vp).p(S,. ..8,).
564                                                               J. H. Dr.&e and J- F. Richard


appropriate reformulation      of the likelihood function. Let

             ‘6,     o...o ’
               0     is,...0
      A=              ..>
                      . .
                                   E-
                                        [ x(,)x(z)...x(,)].                              (6.8)
               0     o:..im
A and Z are respectively I X m and T X 1 matrices. The likelihood function (6.1)
may be rewritten as

      ~(AJIY)WJIITI~I-           (‘/%xp[-+trZ-‘(Y+EA)‘(Y+XA)]                            (6.9)

or equivalently

      L(A,Z(Y)a’J~B~~T(Z(-(“2)Texp[-~tr~-’[S+(A-~)’~f~(A-6)]],
                                                                                        (6.10)

where A denotes an arbitrary solution to the normal equations

      pd     = - sy,                                                                    (6.11)

and

      s= (r+xd)‘(r+zd).                                                                 (6.12)

Note that E typically includes columns of Y, in which case S is a singular matrix.
Similarly, columns of X may repeat themselves in Z which is then not of full
column rank.
  An extended natural-conjugate (ENC) prior density for (A, X) is then defined
as26

      p(A,Z)       a JIBJp(BI -(1/2)(ro+m+1)

           xexp[-ttrX_‘[&,+(A-D,)‘%,(A-D,)]],                                           (6.13)

where %, and SO are respectively I x 1 and m X m PSDS matrices. This prior
density has the same properties as the posterior density discussed below; when

  26Formula (6.13) is equivalent to formula (2.3) in Drkze and Morales (1976) when the scalar 0
appearing there is set equal to vO- m - 1.
Ch. 9: Bayesian Analysis of Simultaneous   Equation Systems                         565


v,, > 0, it factorizes into the product of the densities:

     @IA)        =fiG(W,         +(A - &?%,(A              - Q,), vo)>          (6.14)
         p(A) a lIBllT~lSO+(A - Q,)‘TR,(A                  - Q,)l -(1/2)Vo.     (6.15)

Lemma 6.3

Under the prior density (6.13), the posterior density of (A, E) is

     p(~lA,Y)=fi”,(~lS,+(A-~,)‘~.(A-~,),v,),                                    (6.16)
         ~(A~Y)o:~~~~~~*~S~+(A-O~)‘~~~(A-O~)~-~*~*)”*,                          (6.17)
where

      9R*=91Lo+~‘~,                v*=vo+T,                7*=7()+2-,           (6.18)
        S*=S,+D~nt,D,+rY-D;Gsn,D,,                                              (6.19)

and D, is an arbitrary solution of the equation system

      t?lL*D, =‘X,,DO--E’Y.                                                    (6.20)

Proof

By application of formulae (4.9)-(4.12).               0
   Morales (1971, section 3.2) has shown that the posterior modes of the density
(6.17) can be computed by the same algorithms as FIML estimators. Other
properties of the densities (6.15) and (6.17) have been derived in Dreze and
Morales (1976) and will be briefly reviewed here. Since the same arguments apply
to both densities, the subscripts 0 and * will be omitted in the rest of this section.
Lemma 6.4

Let B and A in the density (6.15) be partitioned as


                                B= (B, B2),                                    (6.21)


where Ai and Bi are respectively I X mi and m X m, matrices. The matrices S, D,
and % are partitioned conformably. Then, under (6.15) we have



                                                                               (6.22)
566                                                                         J. H. D&e    and J- F. Richard


where S, ,, 5, ,, and R,, are obtained by application of Lemma B. 1 in Appen-
dix B.
Proof

By application of Lemma B.l together with the identity (B.9) applied here with
/I=&.    ‘0
  Lemma 6.6 applies in particular to A; = 8; = (&                         y;), the 1 x 1, vector of
unconstrained coefficients in the first equation.
Corollary 6.5

Let S and ‘ZJlI,I, be PDS matrices. The conditional density p( S, )A2), as given in
(6.22), is then a l-l poly-t density. The same holds for p(j3, (A*).
Proof

See Appendix B.          0
   In the special case where m = 2 and IB I= 1, the first factor in the right-hand
side of (6.22) drops out and under the conditions of Corollary 6.5, the conditional
density ~(6, )A2) is a Student density. This enables us to obtain an analytical
expression for the marginal density p(A 2) which, provided ‘% is PDS, is a 2- 1
poly-t density [see Dreze and Morales (1976)].
   The existence of moments of A can be ascertained from the following lemma.
Lemma 6.6

Let nt = (G3nij) be SPDS, i,j = 1, m. Let p(A) be the density (6.15) with S and
GsltiiPDS matrices. A sufficient condition for the existence of moments of order r
is
      Y-m+l-p-r>>,                                                                                 (6.23)
where p = sup {li; i = 1, m}.*’


See Appendix B.          0
   The import of the results obtained under the ENC prior density (6.13) is
limited for two reasons.

(1) The benefit of using the ENC prior density instead of the more easily
interpretable prior densities (6.3) and (6.6) lies essentially in the fact that the
posterior density ~(6, IA,, Y) is a l-l poly-t density (Corollary 6.5) instead of a

   27Similarly, a sufficient condition for the existence of the conditional moments of order r in (6.22) is
v-II;-r>r.
Ch. 9: Bay&an   Analysis of Simultaneous      Equation Systems                                    561


2- 1 poly-t density (Lemma 6.2). However-                      see Section 7 - this no longer repre-
sents a major advantage in computations.
(2) In contrast with the prior density (6.6), the ENC prior density (6.15) must be
elicited numerically, except in the special case where r0 = 0 and

                ‘dp        o...o      ’                  sp, o...o ’
                  0        d,o...O                       0  sg... 0
        4=        .
                  .
                            .
                            .
                                  .
                                  .
                                          3    &I=         .      .     .   7

                  .         .     .
                                                                  .     .
                                                                  .     .


                \ 0        O...d;                         0      o...g,
                ’ 9lL7,         o...o
                      0      %&...O
       %I=’            .      .     .                                                         (6.24)
                              .     .
                              .     .

                I 0          o...nt;, ,
The ENC prior density takes then the form of a product of m independent
Student densities with a common exponent q,:

                                                                                              (6.25)


The common exponent restriction might not be too severe for most practical
purposes, except in the non-informative case of formula (6.7), which does not fit
into the ENC framework unless Ii has the same value for all i. Note, however, that
the prior density (6.6) may still be completed by an arbitrary Inverted-Wishart
density for X, as shown in Lemma 6.1, while in the ENC framework p(A) and
p(zlA) depend on the same coefficient matrix. As illustrated in Section 6.5, the
ENC framework imposes therefore strong restrictions on the prior density of 2.

   However, we shall argue in Section 7 that it is possible within an ENC
framework to design general procedures for constructing importance functions.
This property, which does not hold with other priors, may prove important for
Monte Carlo applications.


6.4.   Seemingly unrelated regression models

The same analysis applies to the seemingly unrelated regression model of Zellner
(1962). The likelihood function may be written as (6.9) except that B = I, and z
568                                                                              J. H. D&e       and J- F. Richard


contains only exogenous variables. The ENC prior for that model is therefore of
the form (6.13) with r,, = 0. The analysis simplifies since B is now an identity
matrix.
   As a special case, consider the reduced-form model (1.5). Let II,     denote
the ith column of IT(h). Since the regressors are now common to all equations,
the likelihood function (4.2) may be rewritten as

       L(II,s21 Y) a lsll -(*m-
            Xexp[-ftrSZ_‘[W+(A,-du)‘(~~‘@Z’Z)(A,-A,)]],                                                   (6.26)

where 1 is the m X 1 vector with all elements equal to 1 and
                                                                                                  \
                  or,            0     ...       0 \             ’ II,       0    ...    0
                      0         IT,    ...       0                  0    fi,      ...        0
       A,=              .        .      .              3    An                                        .    (6.27)

                      ;,         0 .:. II,,                      \ 0         0    ...   0,        I

An ENC prior density for (II, tin>is given by
       p(fl,Q)        0: 1Q[-(t/WYo+m+l)

            xexp[-jtr52-‘[W,+(A,-A~)‘%,(Arr-A’&)]],                                                       (6.28)

where W, E (I?“‘,$I&, E &?‘,and Aon has the same block-diagonal structure as A,.
Comparing (6.28) with (4.4) it is seen that the extension consists in replacing the
“restrictive” expression Wo@Mo-’ by the general matrix a,.           The posterior
density p(I7,91 Y) has the same functional form as the prior density (6.28) with
parameters ( W*, A’,, % *, Y*), as obtained from formulae (6.18)-(6.20). Note,
however, that A*, will not have the same block-diagonal structure as A’&.


6.5.    Two -equation models

Alternatives to the full information procedures described so far start from a
reformulation of the likelihood function (1.6). Let H = 2-l denote the sample
precision matrix and let
                                        ’ xc,,     0       -0.      0
                 YI \
                 Y2                          0    X(2,     ...      0
       Y=                   3   5x,=                                     ,                                (6.29)

                 Y, I                        0     0       ***   xcm,
Ch. 9: Bayesian Analysis of Simultaneous Equation System                                           569

be respectively mT X 1 and mT X I data matrices. The likelihood function may be
written as

     Jw fw) a llw=lHl(‘/*)/rexp[ - f( y + %a)‘( He~r)(                       y + x8)]          (6.30)
                   cc IIBIITfN”(rl - X8, H_‘@&).

Lemma 6.7

Under the prior density

                                                                                               (6.31)

the conditional posterior density of 6, given H, is


                                                                                               (6.32)


where

                                                                                               (6.33)


Proof

See, for example, Zelhrer (1971, ch. 3) (the generalization                      to a non-scalar
covariance matrix is obvious).** 0
  The algebra simplifies somewhat if we are willing to assume prior dependence
between 6 and H in the form which is usual within a natural-conjugate frame-
work. Note in particular that the ENC prior density (6.13) may be rewritten as

     ~(6, H) a IIBIIT~IHI(1/2)(““-m-1)

        xexp[-f[trH&-,+(S-d,)‘H@&,(S-d,)]],                                                   (6.34)


  28Partition 6’ into (j.3’ y’), where /t regroups the unrestricted elements of B and y those of r, and
consider the case wherep(y(& is a Student density. Conditionally on (#I, H), tf%eposterior density of
y is the product of a Student kernel and a Normal density function. Its integrating constant and
moments can be obtained by means of the procedures described in Richard and Tompa (1980).
Conditionally on 8, the transformation from (y, H-‘)         to (II, a) is linear, since r= - IIB and
H -’ = B’QB. It follows that, conditionally on (p, H), we can easily obtain analytical expressions for
the moments of (II, sl) and for the predictive moments; these expressions will have to be marginalized
numerically with respect to /3 and H at the final stage of the analysis.
570                                                         J. H. D&e and J- F. Richard




                                                                               (6.35)




Lemma 6.8

Under the ENC prior density (6.34), the conditional posterior density of 6, given
H, is

      P(W) a IIBIITfidWLHo%+k                                                  (6.36)

where ‘?XL,is defined in (6.18) and d * is a solution of the equation system

        (Ho‘X~)d,=(Ho‘%&,)d,+%‘(H81,)~.                                        (6.37)

Proof

(6.36) is related to (6.16)-(6.17) in the same way that (6.34) is related to (6.13).
Note that %,‘(H@l,)%      = HCIFZ.     0

   Partition 6’ into (p’, y’), where /3 regroups the unrestricted elements of B and y
those of r. The posterior density p(y I/?, H) is now a normal density. Since the
emphasis is shifted to analytical integration of y, it is no longer necessary to
impose on p( 8, H) all the restrictions which are implicit in the ENC prior density
(6.34). This extension of the natural-conjugate framework has been developed for
two-equation models in Richard (1973) under the more general prior density:



          xexp[-f[trHS,+(S-d,)‘HlT%,,(6-d,)]],                                 (6.38)

where p = a,2(a,,u22)-1~2 = - h,2(h,,h22)-1/2      and g(p, p) is any suitable posi-
tive function of the simultaneity parameters (/3, p) E R* x (- 1,l). Through the
specification of !X,- it can for example contain zeros in the rows and columns
corresponding to /3- and of the function g( 8, p), we can incorporate within (6.38)
an arbitrary prior density for /3 and p. We note that the ENC prior density (6.34)
is a special case of (6.38) with vy = vi = v,, -2 and

                        - p2)(1’2)(vo-3).
      g( p, p) G ~~B~~‘“(l                                                     (6.39)
Ch. 9: Bayesian Analysis     of Simultaneous Equation Systems                                  571


   This last expression illustrates the restrictiveness of the ENC prior density, as
regards Z in particular. It can be shown that, under the prior density (6.38), the
joint posterior density factorizes into

         P(P,Y,h,l,h,,,PlY)=P(YlB,h,l,h,,,p,Y)

                                         x P(h,,lP,     P, Y)P(~*,lA   PP Y)P(A   PI Y),
                                                                                           (6.40)

where, as a result of Lemma 6.8, p(yl& h,,, hz2, p, Y) is a multivariate normal
density. Furthermore, the posterior density p( hii]/3, p, Y), i = 1 or 2, takes the
form of an infinite sum of gamma density functions. Consequently, integration
with respect to (y, h,,, h,,) can be carried out analytically and we are left with
trivariate numerical integration on (pi, &, p), the simultaneity parameters. The
computational burden implied by the presence of infinite sums in the integrands
can be drastically cut by the use of hypergeometric series, which can be computed
efficiently and with high numerical precision by means of finite stable recurrence
relationships. It is also fairly easy to obtain analytical expressions for the
moments of I?, II, and D conditionally on (8, p) and next to marginalize them
numerically with respect to p and p. It follows that a Bayesian full information
analysis of two-equation models under the prior density (6.38) is fully opera-
tional.
   Note finally that the same analysis applies to the two-equation seemingly
unrelated regression model of Zellner (1962), in which case we are simply left with
univariate numerical integration on p E ]- 1, l[.


6.6.      Applications

We conclude this section by discussing three applications.

6.6.1.       The Belgian beef market

The two-equation model (2.27) has been analyzed under full information by
Morales (1971) and Richard (1973). The prior density p( y&, as given in (2.29),
was completed by independent prior information on Y,~, taken from cross-section
data and summarized by the density

                                                                                           644)
with mean and variance

         JqY,4)   =   110,       Y(y,J    = 155.                                           (6.45)
512                                                                        J. H. D&e   and J- F. Richard

Whereas Morales used an ENC prior density, Richard used the joint prior density
(6.38), together with

      dP,J*J+L                      SF2= my2 = 0   7
                                                         vo
                                                          1 = v; = 5   ,                         (6.46)

      41                        m% = 0.2207E + 08.
      -     = 0.00161,          -                                                                (6.47)
       4                            42


This choice ensures that the joint prior density (6.38) is compatible with the
marginal prior densities (2.29) and (6.44). SF, and s!& are then chosen in a way
which reflects prior information on u,, and a,,, if any. Three different sets of
values were considered, namely

      $; = 2$;’ = 4i,          i=1,2,3,                                                         (6.48)

which imply the following conditional prior means for (I,, and a,,:*’

      E(u2,~p=0)=2E(u1,~p=0)=4’-‘,                          i=1,2,3.                            (6.49)

The corresponding runs are labelled A,, A,, and A,. As in Section 5.5, the runs A,
and A, imply implausibly large values for the prior means of u,, and a,, but were
considered mainly for the purpose of illustrating the risks inherent in the
specification of (extended) natural-conjugate prior densities. The posterior means
and standard deviations of the coefficients of the demand equation are reported
in Table 6.1. The graphs of the posterior densities of p2* are given in Figure 6.1.
Detailed comments on these and other results may be found in Richard (1973). In
short, the following remarks deserve mention, even though they might be some-
what specific to the application under review.
(1) Prior information on X has a marked influence on the posterior density of B
(see, in particular, the long left-hand tails in Figure 6.1). The sample information
tends to concentrate the posterior distribution of (II, Jz) near the maximum
likelihood estimators- see formulae (4.10) to (4.12) - and the posterior densities of
(B, r, Z) are left to adjust through the identities B’i2B = Z and IIB + r = 0.
Given a non-informative prior density on B, the prior information on JZ affects
more markedly the posterior density of B than that of s2.
(2) As usual within a natural-conjugate framework, more weight is given to the
prior information on ( y14, y2s) as one increases $, and sg2, leaving the prior


  29Under (6.38) the marginal moments of CT,, and uz2 have to be computed             numerically.  This
contrasts with the limited information analysis where, taking advantage of the diffuse prior density on
0, we can derive these moments analytically.
Ch. 9: Bayesian Analysis of Simultaneous     Equation Systems                                           513

                                              Table 6. I
                           Full information analysis of the demand equation

                                              B22                   Y23                 Y25

          Prior (6.38)       A,            - 0.6423            0.6607E-03           0.3446 E + 02
                                            (0.1557)          (0.0818)             (0.0721)
                             A2            - 0.6968            0.6041 E-03          0.4071E+02
                                             (0.2226)         (0.0858)             (0.1207)
                             a3            -1.110              0.5624 E-03          0.7091 E + 02
                                             (0.475)          (0.0853)             (0.3002)




moments of the y’s unchanged (and, therefore, increasing proportionally                             my, and
G).
(3) By introducing prior information on the y’s, one solves the problems raised
by the strong multicolhnearity between Zs and Z,. In contrast with the limited
information results reported in Section 5.5, positive values of &, are now
overwhelmingly rejected.

6.6.2.    Klein’s model I

Van Dijk and Kloek (1980) have analyzed Klein’s model I [Klein (1950)] under
several full information prior densities by means of nine-dimensional Monte
Carlo numerical integration procedures - see Section 7.3.2. Their results illustrate
the flexibility of the Bayesian approach in dealing with prior information of a




                                                                                              2.4



                                                                                              1.6



                                                                                              38




                               -l.2           - 0.9          -0.6         -a3 -----?I

                                  Figure 6. I.      Posterior densities of j322.
574                                                                  J. H. D&e   and J- F. Richard


complex nature. An interesting feature of the model is that the FIML estimators
of two structural coefficients and, therefore, of several multipliers have “wrong”
signs (not significantly, however).
   Several prior densities have been considered, all of which are non-informative
on Z and on the intercepts of the structural equations. The prior densities on the
nine remaining coefficients are uniform on the unit region IO,1[9 minus the region
where l]Bl] < 0.01 (this restriction ensures the existence of prior moments for the
multipliers). Depending on the runs, additional constraints were imposed on the
parameters, namely:

0)     stability of the system,
       long-run coefficients in the structural equations in the unit interval,
C!)    short-run multipliers less than five in absolute value and with the correct
       signs (ten for the capital lagged multiplier),
(iv)   same constraints on the long-run multipliers, and
w      period of oscillation between three and ten years.

   Two runs are analyzed in greater detail and are labelled respectively run 2,
subject to constraint (i), and run 8, subject to constraints (i)-(v). Posterior
densities and moments are obtained for the structural coefficients, the short-run
and the long-run multipliers. In Table 6.2 we reproduce the FIML estimators and
the posterior means and standard deviations for the short-run and the long-run
multipliers of government wage expenditures (IV,), business taxes (T), and
government non-wage expenditures (G) on net national income (Y). Graphs of
the corresponding posterior densities are given in Figure 6.2.
   These results are illustrative, since the authors’ main purpose is “to demon-
strate that the integrations can be done and how they are done”. However, they
are representative of the output of a Bayesian analysis. Indeed, for such essential
characteristics as multipliers, period of oscillations, etc. complete posterior densi-


                                           Table 6.2
                       Net national income multipliers in Klein’s model I

                                              w             T               G

               Short-run       FIML           1.50        -0.36          0.62
                               Prior 2        2.30        - 1.32         1.65
                                             (0.16)        (0.20)       (0.19)
                               Prior 8        2.49        - 1.81         2.06
                                             (0.26)        (0.34)       (0.30)
               Long-run        FIML           2.57        - 1.30         1.96
                               Prior 2        2.81        - 1.73         2.38
                                             0;;)          (0.23)       (0.14)
                               Prior 8                    - 1.67         2.25
                                             (0.16)        (0.20)       (0.13)
Ch. 9: Bayesian Analysis of Simultnneous Equation Systems



      r c
516                                                      J. H. Drive and J- F. Richard

ties are more relevant than point estimates and asymptotic standard errors. This
feature is also central to our third illustration.

6.6.3.   Belgian foreign trade, wages, and employment

In a paper concerned with substantive policy issues rather than with methodol-
ogy, Dreze and Modigliani (198 1) estimate short-run and medium-run elasticities
of employment with respect to real wages for Belgium. Their theoretical model,
treating the balance of payments as a binding constraint, leads to the short-run
formula




where n = elasticity symbol,
      L = employment,
     W= nominal wages,
      P = price level,
      C= index of factor costs,
     Px= export prices,
      X= export quantities,
     M= import quantities, and
      Y = national income.
   The estimates of four elasticities (nMX, now, nLy, qPW) are borrowed from
previous models of the Belgian economy. The analysis is conditional on point
estimates for the first three of these and uses a posterior density for nPW
subjectively assigned on the basis of published estimates. A three-equation model
of Belgium’s foreign trade, due to Bauwens and d’Alcantara (1981), is used to
estimate the remaining elasticities, namely nwP and nwr (import quantities
equation), nPxc (export prices equation), and ~)xo (export quantities equation).
Eleven annual observations (1966-1976) are used. The system is treated as
block-recursive between the import equation and the two export equations. These
last two structural equations involve seven exogenous variables and the following
(restricted) coefficient matrices:
 Ch. 9: Bayesian Analysis of Simultaneous Equation Systems




                                                                      IO

                         Figure 6.3.   Posterior density for (6.52), short run.



   A full information Bayesian analysis of these two equations is conducted, using
the “non-informative” prior density3’

       P(~,YJ)         a PI -3/2,          @]O,l[,         PER,            YER’,   XEC?~.    (6.51)

2 is integrated out analytically as in (6.5), whereby the posterior density p( /I, y )a,
data) is obtained in the form of a Student density (I B ( = 1). Since

       VP& + (l-    Q&XC         = ~+(1-71~Mx)[(y(P+Y4)-(l-(y)Y~l,                           (6.52)

a posterior density for this quantity, conditionally on (Yand nMX, is obtained as a
univariate Student density and marginalized numerically with respect to (Y(for a
given point estimate of nMX). Th e result is given in Figure 6.3, after multiplication
by vcW = 0.33.
  To evaluate the posterior density of n&,,pI in (6.50), three densities are used,
namely:
(i)     the subjective density for oPW, expressed as a normal density;
(ii)    the posterior joint density of nMP and nMy, obtained from Bayesian single
        equation analysis of the import quantities equation, under a non-informa-
        tive prior density; this joint density is bivariate Student, but approximated
        by the Normal density with the same mean vector and covariance matrix;


   30The “degrees of freedom” parameter -i= -f(m + 1) corresponds to (4.21) and has the
“conservative” bias mentioned at the end of Section 4. With T = 11 and n = 7, the difference between
(4.21) and (4.20) is significant. Our computations with (4.21) give approximately the same results as
those initially reported by D&e and Modigliani, who used (4.20) but adjusted subjectively the
posterior variances. In the light of our discussion of invariance with respect to normalization in
Sections 5.6 and 6.2, we could add to (6.51) a Cauchy prior on (8, y).
578                                                                       J. H. D&e   and J- F. Richard




                      Figure 6.4.     Posterior density for qLcw,pJ, short run.


        and
(iii)   the posterior density of [qPxC + (1 - ~lwx)~xC]~CW in Figure 6.3, approxi-
        mated by the normal density with identical mean and variance.
  A combination of analytical and numerical procedures then yields the marginal
density of q,,( W,Pj in Figure 6.4.


                     3.67.
                                                              short-run   1




                     3.00.




                     2.00.




                     1.00.


                     0.57.



                       -5.0        -4.0      -3.0      -2.0      -1.0         0.0


              Figure 6.5.     Posterior density for qLcw,pj, short run and medium run.
Ch. 9: Bayesian Analysis of Simultaneous Equation Systems                     579

  The questions of central interest to the authors receive rather unequivocal
answers in the form

       Pr( 9LCW,p)> 0) = 0.07,            Pr(n,(,,,,2-1)=1.                (6.53)

A similar analysis of the medium-run elasticity attempts to measure the more
elusive impact of wages on capacity adjustments and capital/labor substitution.
The correspondingly more imprecise results are presented side by side with the
short-run posterior density in Figure 6.5. This time,

       Pr( nLCW,p)2 - 1) = 0.15.                                           (6.54)


7.     Numerics

7.1. Introduction

In the course of this chapter we have been confronted mainly with two types of
numerical problems: (i) the evaluation of poly-t densities, whose kernels are
products, or ratios of products, of multivariate Student kernels; this problem is
discussed in Section 7.2; and (ii) the computation of multidimensional integrals
by numerical procedures; this problem is discussed in Section 7.3. These two
sections can be read independently of each other. Other numerical problems may
arise in specific contexts (computation of hypergeometric functions, computation
of orthogonal polynomials, etc.); these are not discussed here.

7.2.    Evaluation of poly - t densities

Let y E Rk be a random vector and 7 = (1 y’). Let still e,(c,)    denote the cone
of k x k positive (semi) definite symmetric matrices.
Definition 7.1     [Dreze (1977)]
(i)    The kernel of an m-0 (product form) poly-t density is defined as


                                                                            (7.1)

whereS=((Sj,vj);j=l...m)and

       (Sj,vj)~ek+,XR+;               j=l...m,                             (7.2a)

        5 SjEG+,,            Y= F vj-kk0.
       j=l                        j - 1
580                                                                    J. H. D&e   and J- F. Richard


(ii) An m-n (ratio form) poly-t density is essentially3’ defined as the ratio of an
m -0 poly-t density to an n -0 poly-t density.
   In this section we shall restrict our attention            to m-l     poly-t densities with
kernels

      +m,,(Yls,s)= (P’~~P)“‘*““~,(Yl~),                                                       (7.3)

where, in addition to (7.2),

      (&,A)E%+,XR+,                                                                          (7.4a)

      p=v-vO=         E vj-v,-k>O.                                                          (7.4b)
                     j=l

  The numerical evaluation of m- 1 poly-t densities has been discussed in
Richard and Tompa (1980). In this section we only report their two main results
and refer the interested reader to the paper for more details and proofs.
(1) m-0 poly-t densities can be analyzed by means of (m - 1)-dimensional
numerical integrations on an auxiliary vector c E (0,l)” - ‘, irrespective of k, the
number of components in y. This key result is based on an integral identity due to
Dickey (1968). For m G 3, which covers all the cases encountered in this paper,
iterative Simpson rules, as described in Section 7.3.1, have proved very efficient,
especially since the distribution of c may exhibit considerable skewness.
 (2) Under the additional assumption that iv,, is an integer, the integrating
constant and the moments of a l-l poly-t density can be computed by means of
finite analytical recurrence relationships. 32 Non-integer values of fv,, (usually
half-integer for Bayesian applications) are treated by interpolation between
neighboring cases with integer values. This requires only a few additional itera-
 tions with the recurrence formulae.
   There now exists a computer program “poly-t distribution” (FTD) written in
FORTRAN IV and based on the ideas discussed above. It can handle l-0, I- 1,
2-0, 2-1, 3-0, and 3-l poly-t distributions and computes the integrating con-
stant and the first- and second-order moments of y, together with its covariance
matrix. Optionally, the program also computes the skewness and the fractiles for
the components of y, together with plots of the marginal density functions. [It is
clear from the definition of poly-t densities, as given in (7.1) and (7.3), that the
marginal density of a single component of y can be evaluated at any given point
by integrating a (k - l)-dimensional poly-t density of the same type.] Test runs

   3’The constraints (7.2b) need not be satisfied by the n-0 poly-t density in the denominator, as
illustrated by our definition of the m - 1 poly-r density in (7.3)-(7.4).
   32These recurrence formulae are obtained by application of the formula for integration by parts.
Ch. 9: Bayesian Analysis of Simultaneous     Equation Systems                                                  581


and applications have shown the results to be reliable and no problems of
numerical instability have been encountered. A user’s manual is available from
the authors. The program PTD has also been incorporated in a Bayesian
Regression software (BRP) which is designed to evaluate posterior density func-
tions and their moments for a class of models which are discussed in D&e
(1977). This class covers the single equation analysis, both marginally in the
limited information framework and conditionally (Lemma 6.2 and Corollary 6.5)
in the full information framework.


7.3.         Numerical integration

At various stages of our discussion we have been confronted with the necessity of
evaluating multiple integrals by numerical methods. More generally, such meth-
ods are required whenever the restrictions embodied in analytically convenient
prior specifications are thought to be unacceptable. We draw a distinction based
on the dimensional&y of the integrals to be evaluated.
(1) Some of the Bayesian procedures described here call for low-dimensional
numerical integrations, say not more than three-dimensional. This class of prob-
lems includes the limited information procedures described in Section 5, taking
into account our discussion of poly-t densities and the full information proce-
dures for two-equations model. Such low-dimensional integrals can easily be
computed with predetermined accuracy by means of the so-called product rules
described in Section 7.3.1. These rules are of general application in the sense that
they do not depend on the function to be evaluated. (Evidently, the choice of one
rule rather than another may very much depend on the function.)
(2) In cases of higher-dimensional numerical integrations the Monte Carlo
procedures described in Section 7.3.2 will generally prove far more efficient.
However, they suffer from two drawbacks: their numerical accuracy is often
difficult to determine; and they must be adapted to specific features of the
functions to be integrated-features that are typically unknown.

7.3.1.        Product rules

A univariate integral may be evaluated by a weighted mean of the values of the
integrand at certain values xi of the abscissa: 33


             $)dx=        i     w,f(x,)+R,                                                                (7.5)
         /                i=l


   33We shall limit our attention    to integrals   over intervals   since the real line is isomorphic   to IO, I[.
582                                                           J. H. D&e   and J- F. Richard


where the error R depends on n, on the w’s, the X’S, and of course on f. Two
rules have been applied successfully in our field, namely the iterative three-point
Newton-Cotes formula, also known as the iterative Simpson’s rule, and the
n-point Gaussian rule. Other rules may be found for example in Davis and
Rabinowitz ( 1967).
(1) Simpson’s rule uses the function values at the two end points (x, and xs)
and at the mid point (x2) of the range of integration
       b

                                                                                     (7.6)

The error is then given by


                                                                                     (7.7)
where f c4)(6) represents the fourth derivative evaluated at an intermediate point 5.
Simpson’s rule amounts therefore to approximating f by a cubic parabola.
   In the iterative Simpson’s rule, the integral is evaluated by Simpson’s rule and
then a second time by applying Simpson’s rule to the two halves of the range. If
the sum of these two integrals equals the integral over the first range to the
required precision, the value is accepted; if not, the same procedure is applied to
each half of the range successively. Evidently, the stopping rule will not be used
before the function has been evaluated at a minimum number of points. Proper-
ties of the iterative Simpson’s rule are discussed for example in Tompa (1973). In
particular: “. . . the iterative Simpson process is local in the sense that it chooses a
large number of abscissae in regions where it is necessary to do so but uses
comparatively few where a small number suffices; of course the abscissae are still
chosen among a set of predetermined values” [Tompa (1973), p. 14)].
(2) In the Gaussian n-point formula, both the abscissae xi and the weights wi
have been determined in such a way that the rule is exact for polynomials up to
the order 2n - 1. There exists, therefore, no n-point rule of higher order than the
Gaussian rule. The abscissae are irrational- they are in fact the zeros of the nth
degree Legendre polynomials- and do not contain the end points of the range of
integration so that, in contrast, with the iterative Simpson’s rule, the values of the
integrand computed for a given value of n cannot be used for any other value
of n.
   Tompa (1967) has proposed a scheme of automatic Gaussian integration which
he has found to be on the whole more efficient than iterative Simpson integration.
Still, the latter has proved more efficient for evaluating integrals of the form met
in the evaluation of l-l poly-t densities.
Ch. 9: Buyesian Annlysis of Simultaneous   Equation Systems                       583


   Multiple integrals can be evaluated by product rules which are defined by a
recursive application of the corresponding univariate rules. For example, an
integral of the form




can be evaluated by integrating for example first over y and then over x:



                                   1 dx,                                        (7.9)


the bounds of integration being appropriatedly defined. (Note that a2 and b, may
be functions of x since the domain D need not be a rectangle.) When the
procedure is applied to density functions, the marginal density of x is obtained
without further computing effort since it is given by the inner integral in (7.9). In
fact, provided D is a rectangle and the same intermediate points are used (in
which case f is evaluated over a grid of points), both marginal densities are
obtained as by-products of the integral (7.8). The same holds for higher dimen-
sions. The major disadvantage of product rules lies in the fact that the number of
points which are required in order to achieve a predetermined accuracy grows
more or less exponentially with the dimensionality of the integrals. This limits
their usefulness to dimensions up to, say, 3 or 4.

7.3.2.   Monte Carlo procedures

For higher dimensional problems, Kloek and van Dijk (1978) and van Dijk and
Kloek (1980) rightly advocate the use of Monte Carlo procedures. The critical
step in the application of such procedures lies in the construction of an impor-
tance function, i.e. of an approximation of the density function to be evaluated,
from which vectors can be drawn at random (this requires knowledge of the
integrating constant). Let f be the (multivariate) function to be integrated over the
domain D, and g be an importance function. One may then write the integral as


                                                                              (7.10)


Let then x,,x*... x, be a sequence of n independent random drawings from the
density g. The integral (7.10) is evaluated by

                                                                              (7.11)
584                                                          J. H. D&e   and J- F. Richard


To evaluate the number of drawings required in order to achieve a given level of
accuracy, let a2 be the (unknown) variance of f/g. Under the usual assumptions
for the application of central limit theorems, the random variable (G/0)( 1, - I)
converges in distribution towards a standardized normal random variable. Let c,
be the a-percent value of the standardized normal distribution. If we wish to
guarantee a relative error less than E with probability 1 - (Y, the number of
independent drawings should be

                                                                                   (7.12)

   In fact many of the expressions to be evaluated (moments, fractiles, etc.) are
ratios of integrals. As discussed in Kloek and van Dijk (1978), the number of
drawings may then often be reduced, provided the covariance between the
approximations of the numerator and of the denominator is positive. In any case,
an importance function should be chosen in such a way that the variation
coefficient o/l be as small as possible. This is typically a difficult task, especially
when little is known about the properties of the function to be integrated. Van
Dijk and Kloek (1980) have made several pathbreaking advances as regards the
design of importance functions and have applied them successfully to the analysis
of Klein’s model I, an application which requires nine-dimensional numerical
integration (see Section 6.6.2). The prospects are therefore promising. But more
work is needed before Monte Carlo methods can be claimed to be
operational- which would for example require the automatized derivation of
importance functions. It is our belief that the analytical methods discussed in
Sections 6.2-6.3 will be helpful in that respect. Indeed:

(9    the properties of posterior distributions are more easily investigated under
      (extended) natural-conjugate prior densities than they are under more gen-
      eral priors;
w     we could therefore also consider approximating any given prior density by
      an (extended) natural-conjugate prior and using the corresponding impor-
      tance function for the more general case.
   Although these comments are presently highly tentative, we can illustrate them
by proposing a general procedure for constructing an implicit importance func-
tion for the posterior density (6.17). The proposition combines a suggestion made
by van Dijk and Kloek (1980) with the results of Corollary 6.5 and works as
follows.
(1) We draw first a random matrix d from the normal approximation to the
posterior density (6.17) which, as discussed in Morales (1971), can be constructed
by application of the usual full information maximum likelihood estimation
procedures.
Ch. 9: BayesianAnalysisof SimultaneousEquationSystems                              585

(2) We then draw a complete set of S’s from the conditional densities D( 6. IA .),
as given in Corollary 6.5, with the conditioning variables being fixed at the values
obtained in step (1).
   The procedure is repeated n times. It is evidently required that we should be
able to draw random vectors from a 1- 1 poly-t density. Preliminary investigations
indicate that this should be feasible. The analysis of the properties of such
procedures belongs in a list of priorities for further research. They suggest an
avenue to make the application of Bayesian full information procedures opera-
tional for simultaneous equation models with more than two equations.


Appendix A:      Elements of multivariate analysis

We have regrouped here a set of formulae which we have used in the course of
this chapter. For more details and for proofs, see for example the appendices in
Zellner (1971) and Richard (1979).

A. 1.    Notations

cq( cq) denotes the set of 4 X q symmetric positive (semi) definite matrices. Vet A
is the column expansion of the p x q matrix A:
                 a,
        vecA=     ;      ,                                                   (A4
                I a4 I
where ai is the i th column of A. Let X be a p X q random matrix. E(X) and v( X)
represent respectively the expectation. matrix of X and the covariance matrix of
vet X. The following partitionings will be used:


        x=(x,     x*)=
                             (:::)=(::
                                    :$                                       64.2)

where Xii is pi X qj. When X is square and non-singular,        we can partition
conformably X - ’ and we have




                                                                             64.3)
where X,, , = X,, - X,, X,; IX,,. The Moore-Penrose inverse of X is denoted X+.
A remarkable property of symmetric semi definite matrices is that formula (A.3)
586                                                                      J. H. D&e    and J- F. Richard


still applies with Moore-Penrose inverses (since we have in particular X2,X:X,,
= X,,). The same is not true with other matrices.

A.2.

The p x 1 random vector x has a multivariate Normal distribution if and only if
its density function is given by




where 2 E RJ’ and D E (I?*.The properties of the multivariate Normal distribution
need not be reiterated here since they are special cases (q = 1) of the formulae we
give next.


A.3.

The p X q random matrix X has a matricvariate Normal distribution if and only if
its density function p(X) is given by

       p(X)=f&$q(X(T,i-I@P)

                 =def[(2?r)Pq(L?lPlplq]-1’2exp[-+trQ-’(X-                .F)‘P-‘(X-         Z)],
                                                                                                (A.9
where _%E RPXq, P E Cp, and D E eq. We then have

                E(X)        = F,        V(X) = &BP,                                                (‘4.6)
               p(AX)=f~(AXJA~,fif@APA’),                        A,,,,rankA=I~p,                 (A.7)

               p(XB)=~~‘(XB(~B,B’IOB~P),                        B,,,,rarikB=1~q,                (A.@

               P(X(l,)      =~~q(x~,)l~~l)~~~p11),                                                 64.9)

       P~~~2~l~~l)~=~~~(~2~l~~2.1)+PZ1~I;1~~l)’~QP,,)~                                         (A. 10)

where

                 Jf(2.1)   = iq2,-   P,,P,;‘~~,)=    ~~2)+(PzyP2’~~l~,                        (A.ll)

       (q1,9     PI19 q2.l)Y       P21Pl;‘,P22.1)~(R~~x~~C?p~)~(R~~X~~RJ’~XP~~&’z),
                                                                                              (A.12)
Ch. 9: BayesianAnalysisof SimultaneousEquationSystems                                             587


                                                                                              (A.13)
                                                                                              (A.14)

where

                                               - I,
       Jr..,,= x2 - X,~(2,92,,= x2 + qi?‘2( 5222)                                             (A.15)
       (~,,n,,,~2,,,~,‘s2,2,922,,)~(R~X~~~~4~)~(RpxqzXRq~Xq2X~qz).

                                                                                              (~.16)


A.4.

The random variable a2 has an Inverted-gamma                      distribution if and only if its
density function is given by

       P(u2>=fiy(a21S29
                     y,                                                                       (A.17)

                =+(         ;)I-‘(    :)“2~~2)-(l/2)(.+2)expj            _ 3



where s2 > 0 and v > 0. It is a special case (q = 1) of the Inverted-Wishart
density.


A.5

The q x q random matrix D E CSqhas, an Inverted-Wishart                        distribution   if and
only if its density function is given by



                                                          v+l-i     -I
              =def




                       1p/w~~w4M~-~)
                                                fIr(7)]
                                               i=l

                     x IQI (‘/2,YlS21-(‘/2)(‘+4+‘)exp( -+trQ-lQ),
where Q E C.? and v > q - 1. We then have

       E(G)   = v_;_lQ                 b>q+l),                                                (A.19)

       P(fw-4-aA2~5222.1)            =P(~,,)P(~,‘~,,I5222.,)P(~,,.,)Y                         (A.20)
588                                                                     J. H. D&e and J- F. Richard

with

                                                                                           (A.21)

                                                                                          (A.22)

                                                                                          (A.23)

       E@-Vh)= v_b,_1
                    (l+trhQL')(                         8 Q;*.,)
                        +               Qw(I,,Qi'Qn).                                     (A.24)


    If, furthermore, P(XIO)=~~~(XIX,~~H-‘)                       and X,,, = X, - X,O;‘L&,
then ( X,, 42,I ) and ( X,,, , Jz,; ‘ii?,, , P,, ,) are independent and we have in particu-
lar

       P(X2.,1~,‘~,,,~,,.,)          =f~qZ(X,.,IX,.,,52**.,OH-‘),                         (A.25)

       E(XIX,,D,,)=E(XIX,)=X+(X,-X,)(I,,                            Q,‘Q,,),              (~.26)


       wv&~,,)          =WIX,)          = v-b,-1      (ii   Qi.,)
                            @[H-'+(X1-F,)Q,'(X,-x,)'].                                    (A.27)



A.6.

The p x 1 random vector x has a multivariate Student distribution if and only if
its density function is given by

       P(X)   = ftw~,       ff, 4                                                         (~.28)

              =&r[n-(i~W(           qq,r(       f)]

                 x IHl’/2[1+        (x - K)‘H(x - x)] -(1’2)(“+p),

where K E RP, H E C?*,   and v > 0. Its properties are obtained as special cases
(q = 1) of the formulae which are given next.
Ch. 9: BayesianAnalysisof SimultaneowEquationSystems                                                589

A. 7.

The p x q random matrix X has a matricvariate Student distribution if and only if
its density function is given by




                           fl(W)vq fi             4w                -’
               = def                                                                             (A.29)
                                   i=l             v+p+l-i
                                           r
                       i                                2       i
                  x    (Q((l/2)ulHJ(1/2)4JQ+(X_              x)‘H(X_           f)I-(1/2)(v+P),


where FE Rpxq, HE ep, Q E eq, and v > q - 1. We then have

        E(X)=X(v>q),                       v(x)       = v_;-lQ@H-l                   (v>q+l),    (A.30)

        P(X,,,)=~~~‘(X~~~I~~,),Q~H,,.,,V),                                                       (A.3 1)

        P(~2~l~,,)=~~x~(~2~l~2)-Hz;‘H21(~*)-~1))~                                                (A.32)

                                Q + ( XCI,- xc,, )~H,,.2(X~,)-~~,))~H22tV+~1)1

        p(X,)=fR:q’(X,l~,Q,,,H,V-q2),                                                            (A.33)

        P(X~IX,)=~~~~~(X,IX,+(X,-~,)Q,‘Q,,~Q,.,~                                                 (A.34)

                             [H-‘+(X,-x,)Q,‘(X                 1-z,)‘]-‘,v).

Ifp(XIS2)=f~q(XljE;,,~H-‘)                          andp(P)=fiRr(s2lQ,V),           then

          P(X)=~~~~(XI~,Q,H,V),                                                                  (A.35)
        p(alX)=fi~(OIQ+(X-x)‘H(X-X),V+p).                                                        (~.36)




Appendix B:           Proofs

B. 1.    Proof of Lemma 5.3

Let P, = (/3 Q,) and P, = (p Qb), where the indices a and b are used to
denote two alternative choices of Q. Consider the sequence of transformations
590                                                                   J. H. D&e   and J- F. Richard


(@“,   a*, 42,   Aa22.I) !. (@“, Aa)? (Qb, Ab)!. (tDb, CT*, A:,, Ab,,,‘),       where
a’, A., Ai2, A;*,, are obtained respectively from (5.3), (5.9) (5.10), and (5.11). The
transformations 1 and 3 have Jacobians (u*) -cm -‘) and (a*)“’ - ’ which cancel
out.
   Furthermore,

       Ab = (P,- ‘Pb)‘Aa( Pa- ‘P’,),                                                         (B.1)
       @‘= Ga(pa-lPb).                                                                       03.2)
The Jacobian of the transformation              2 is therefore IIPa-‘Pbll -(m+“+1). Also,

       ll432.1 I = IJ -*lAbI   = u -*(Pa-‘Pb(*lAa( = IPa-1Pb(2(A;2.L(.                      03.3)

   Consequently, if p(G$, A:*, A\,, 18) is of the form (5.17), then

       p(@‘, A~,,Ab,,,,]tI) a IIPa-1Pbll~IA~2,1~-(1’2)(~+m+~+1).o                           (B.4)

B.2.    Proof of Lemma 5.6

Our first step is to combine the conditional prior measure ]A **.II -w*)(~+“+ ‘)
and the partial likelihood L,(B, G2, A,*, A,,, ] Y), as defined in (5.15). With fi as
defined in (4. l), the quadratic form in the exponential part of this product is then
rewritten as:

       {[YQ-(YP+ZY)A,,]-Z~~,)‘([YQ-(~+ZY)AI,~-Z~,}                                          (W

       = {@2-[fiQ-(fi/3+~)4,]}‘Z’Z{@2-[~Q-(fi~+~)42]>

           + (42    - G’~l2    ) ‘%I (42   -s?312)+~22.1.


   This decomposition is familiar in stepwise regression whereby, for given A,*,
YQ -(Yb + Zy)A,, is regressed on Z and A,, is estimated by regressing [I -
Z( Z’Z) - ‘Z’] YQ on [I - Z( Z’Z) - ‘Z’] Yb. Formula (5.28) follows immediately.
Note that the integrating constants of these densities include respectively the
factors I S,, ’ I(‘/*jT, IG~2*.11-“*~ and I~22.ll -(1/2)n. This justifies the “degrees
of freedom” parameter Tin (5.28a) and the posterior density




which reduces to (5.27) upon noting from (5.25) that
Ch. 9: Bayesian Analysis of Simultaneous Equation Systems                                 591


B. 3.    Proof of Corollary 5.8

Let x and y represent          two random           vectors. We have, in a self-explanatory
notation:

          E(x) = Ey[Ebb+]            3



          ~(x>=E,[~(xl~)l+V,[E(xl~)l,
        co+,Y) = cov,[E(xly),~1.
Corollary 5.8 is then proved by applying these formulae to the conditional
moments of A 22,,, A12, and $, as obtained from the densities in (5.28). For
example, (5.28~) and (5.28b) yield first

        E(W%      Y) = fiQ -(fib         + v)E@,,l&      Y)                            (B.8)
                     =~~-(~~+u)(B’wa)-‘B’wQ.

   Applying (5.3) and rewriting y as (@I + y)-I@      yields formula (5.29). The
derivation of (5.30) and (5.31) goes along the same lines but is somewhat more
tedious. A direct proof based on properties of matricvariate Normal and In-
verted-Wishart densities may be found in Richard (1979). 0


B.4.     Proof of Lemma 6.2

Let B = (/3,      B2). We then have


        IIBII = IB’BI 1,2 y:             ;;Bg:lln


                         = [p;{r,    - B2(B;B2)-‘B;}j3,]“21B;B2~1?                     (B-9)
The factor IIBIJTin (6.5) is thereby decomposed into the product of a Student
kernel in the unconstrained elements of p,, and a factor which no longer depends
on P,.
   Let A = ((Y, A2). A similar argument - see formula (B. 11) below - enables us
to factorize the determinant ISo + A’X’XA I into the product of a Student kernel
in S,, the vector of unconstrained elements of (Y,, and a factor which no longer
depends on 6,.
  The third Student kernel arises from the marginal prior density
f/O,     I@, HP, ~7).     •I
592                                                                     J. H. D&ze and J- F. Richard


B.5.    Lemma B.1

Let S and % be respectively m X m and I X I PSDS matrices and X be an
arbitrary 1 X m matrix, partitioned conformably as




                                                                                             (B.lO)


Then

        IS+x’E1ILX(=Is,,+X~~X,l.Is,,+(X,,-~,,)’R,,(X,,-x,,)l                                 (B.ll)

where

        s,,=s,,, +(x2, - ~*,~,:~*,)‘~,,.,(~2,
                                           - X2&S2,)~                                        (B.12)

       q, = X,,G%,        - G%(Xz,         - X,J,:%)~                                        (B.13)

         R = 97, - !xx,(s**       + x;9Rx,)‘x;9R.                                            (B.14)

The superscript + denotes Moore-Penrose                   inverses and the following notation
has been used: Aii,j = Aii - AijAiAji.
Proof

We first establish two preliminary results:
 (1) Since S E em we have S,,S&S,, = S,, and


                                                                                              (B.15)



 from which

                          s,,.,   + x;.29w.2              x;.235x2
        1s + X’GJltXl =
                                  ~~9w    .2            s22 + x9Lx2
                                                                                              (~.16)
                       = IS22 + %~X21-         IS,,,,    + X;,RX,.,l9
Ch. 9: Bayesian Analysis of Simultaneous     Equation Systems                                                 593

with

       xi.2 = x, - W&S,,         9                                                                      (B.17)
           R=%-%X,(S,,+X;9RX,)+X;~.                                                                     (~.18)

   (2)      Similarly we have


                                                                                                        (B.19)


from which

       S + _WRJ-= S + X&)~22.,X(2)                  + x;1.2)%lx(l.2)           P                        (B.20)

with

       X(1.2) = X(1) + 9cl9h2x(2)~                                                                      (B.21)

Formulae (B. 1 1)-(B. 14) are then obtained by applying formula (B.20) to the last
term in formula (B.16). 0


B.6.       Proof of Corollary 6.5

Given (B.18) we first have


       R,, = x,1 -@‘L                97412)X2(S22       +   x;=x2)‘xi
                                                                                                        (B.22)


and, together with formula (A.3) applied to Moore-Penrose                             inverses,


       G     =~:l+~:l(%l                    %2>X2(S22           +   x;,~,,.,x22)+x~
                                                                                            i
                                                                                              GsIzl
                                                                                              a
                                                                                                  21   1
                                                                                                       x:1.



                                                                                                       (B.23)

   It follows that if X,, and S,, are PDS matrices then R,, is also PDS. This
condition, together with s,, >/ S, 1,2> 0, insures that the last term in (6.22) is a
proper Student density. Since the first term in (6.22) does not depend on y,,
integration with respect to y, can be carried out analytically by property of the
Student density. 0
594                                                                                    J. H. Dr&e and J- F. Richard


B. 7.   Proof of Lemma 6.6

By application of Lemma 6.4 to the case where A, = 6, (see also Corollary 6.5) we
first have

        (S + (A - D)%(A                       - D) 1-(“2)v

                                                                                                            (B.24)




   Consider next the matrix:




                                                                                                            (B.25)




from which

        I-,,       1. Is,,      +   (A,   -   ~22)‘=22.,@2           -   D22)    I

                                                                                                            (~.26)


and, under the conditions of Corollary 6.5,


        I~11l-‘~l~22l-‘I~lll-                              s22+                                             (B.27)
                                                      ‘1          ( A;f:z2)‘a(       A,f:22)l

 together with g,, 2 S, 1,2> 0. It follows then from (B.24) that




                                                                                                             (B.28)
                                                                         Reference table
                                                                                                                                                  References to
Sections and models                   Prior density        Posterior density       Characteristics                   Properties’                  applications

   Limited information analysis
   Normal-gamma prior
   General                         (5.17)-(5.40)                                     l-l poly-t                                                       5.5
   Non-informative                 (2.17)                                            l-1 poly-t      Invariance with respect to normalization,        2.4
                                                                                                       no moments exist
   2.4
   Student-gamma      prior
   General                         (5.17)-(5.49)                (5.51)               2-l poly-t                                                       5.5
   Non-informative                 (5.17)-(5.49), pa = 1        (5.51)               2-l poly-t      Invariance with respect to normalization,        2.4
                                                                                                       no moments exist
   Non-informative                 (5X17)-(5.49)-(5.55)         (5.51)               2-l poly-t      Invariance with respect to normalization,
     exchangeable                                                                                      no moments exist
    Full information analysis
    Extended natural- conjugate    (6.13)                       (6.22)               l-1 poly-t      Conditional on A r
      prior
    Student - Wishart prior
    General                        (6.3)-(6.6)                Lemma 6.2              2-l poly-t      Conditional on A2
    Non-informative                (6.7)                      Lemma 6.2              2-l poly-t      Conditional on A *, invariancewith respect       6.6.3
                                                                                                       to normalization
    Two-equation models            (6.38)                       (6.40)                               Requires trivariate numerical integrations      6.6.1
    Reduced-form analysis
    Normal-gamma prior
    General                        (4.4)-(4.5)                  (4.11)               Student
    Non-informative                (4.20), M,, = W, = 0,        (4.11)               Student
                                      vg = 0
    Student-gamma     prior
    General                        (4.13)                       (4.14)               2-o poly-t      Conditional on II,
    Limited information            (4.15)-(4.16)                (4.17)               2-o poly-t
    Non-informative                (4.21), Ma = W, = 0,         (4.14)               Student
                                     v, = 0
    Extended natural - conjugate   (6.28)                        (6.28), (6.18)-     Student         Conditional on II,
      prior                                                      (6.20)

  “Unless otherwise specified, the posterior densities are marginal densities for the coefficients of one equation. All the cases mentioned in the table are
covered by the Bayesian Regression Program (BRP) and documented in Bauwens et al. (1981).
596                                                                          J. H. Dr.&e and J- F. Richard

Since


                                                           wl%2   +(A2   -   &2)‘%22(42        -   02211



has the same properties as 1S + (A - D)‘% (A - D) 1, it may be decomposed
similarly and a recursive argument yields



                                                                                                   (B.29)


where (Jj, Hi; j = 1, m) are functions of (Sj+ 1.. .a,) obtained by a recursive
application of formulae (B.12)-(B.14). Well-known results on the existence of
moments for Student densities yield the result. q



References

Anderson, T. W. and H. Rubin (1949) “Estimation of the Parameters of a Single Equation in a
  Complete System of Stochastic Equations”, Annals of Mathematical Statistics, 20, 46-68.
Bauwens, L. and G. d’Alcantara (1981) “An Export Model for the Belgian Industry”, CORE
  Discussion Paper 8105, Universite Catholique de Louvain.
Bauwens, L., J.-P. Bulteau, P. Gille, L. Longree, M. Lubrano and H. Tompa (1981) Bayesian
  Regression Program (BRP) User’s Manual, CORE Computing Report 8 l-A-01.
Chetty, V. K. (1968) “Bayesian Analysis of Haavehno’s Models”, Econometrica, 36, 582-602.
Davis, P. J. and P. Rabinowitz (1967) Numerical Integration. Waltham, Mass.: Blaisdell.
Dickey, J. (1968) “Three Multidimensional-Integral     Identities with Bayesian Applications”, The
  Annals of Mathematical   Statistics,   39, 1615- 1628.
Dr&ze, J. H. ( 1962) ‘IThe Bayesian Approach to Simultaneous Equations Estimation”, ONR Research
  Memorandum 67, The Technological Institute, Northwestern University.
Dr&-ze,J. H. (1975) “Bayesian Theory of Identification in Simultaneous Equations Models”, in: S. E.
  Fienberg and A. Zellner (eds.), Studies in Bayesian Econometrics and Statistics. Amsterdam:
  North-Holland Publishing Co.
D&e, J. H. (1976) “Bayesian Limited Information Analysis of the Simultaneous Equations Model”,
  Econometrica,   44, 1045- 1075.
Drere, J. H. (1977) “Bayesian Regression Analysis Using Poly-t Densities”, Journal of Econometrics, 6,
  329-354.
D&e, J. H. and F. Modigliani (1981) “The Trade-off Between Real Wages and Employment in an
   Open Economy (Belgium)“,’ European Economic Reuiew, 15, l-40.
D&e, J. H. and J. A. Morales (1976) “Bayesian Full Information Analysis of Simultaneous
   Equations”, Journal of the American Statistical Association, 71, 919-923.
Engle, R. F., D. F. Hendry and J. F. Richard (1983) “Exogeneity”, forthcoming in Econometrica.
Fisher, W. (1976) “Normalization in Point Estimation”, Journal of Econometrics, 4, 243-252.
Florens, J. P., M. Mouchart and J. F. Richard (1974) “Bayesian Inference in Error-In-Variables
   Models”, Journal of Multivariate Analysis, 4, 419-452.
Florens, J. P., M. Mouchart and J. F. Richard (1979) “Specification and Inference in Linear Models”,
  CORE Discussion Paper 7943, Universite Catholique de Louvain.
Ch. 9: Bayesian Analysis of Simultaneous Equation Systems                                      597

Gantmacher, F. (1960) Matrix Theory, vol. 1. New York: Chelsea.
Goldberger, A. S. (1964)Econometric Theory. New York: John Wiley & Sons.
Harkema, R. (1971) Simultaneous Equations. A Bayesian Approach. Rotterdam: Universitaire Pers.
Hendry, D. F. (1976) “The Structure of Simultaneous Equations Estimators”, Journal of Econometrics,
  4, 51-88.
Kadane, J. (1975) “The Role of Identification in Bayesian Theory”, in: S. E. Fienberg and A. Zelmer
  (eds.), Studies in Bayesian Econometrics and Statistics. Amsterdam: North-Holland Publishing Co.
Kaufman, G. M. (1975) “Posterior Inference for Structural Parameters Using Cross-Section andTime
  Series Data”, in: S. E. Fienberg and A. Zelhrer (eds.), Studies in Bayesian Econometrics and
  Statistics, Amsterdam: North-Holland Publishing Co.
Klein, L. R. (1950) Economic Fluctuations in the United States, 1921- 1941. New York: John Wiley &
  Sons.
Kloek, T. and H. K. van Dijk (1978) “Bayesian Estimates of Equation Systems Parameters: An
  Aonlication of Intearation bv Monte Carlo”, Econometrica. 46, 1- 19.
Kol;nbgorov, A. N. (1550) Foundations of the Theory of Probability. New York: Chelsea.
Lindley, D. V. (1971) Bayesian Statistics: A Review. Philadelphia: SIAM.
Lindley, D. V. and A. F. M. Smith (1972) “Bayes’ Estimates for the Linear Model”, Journal of the
  Royal Statistical Society, Ser. B, 34, l-41.
Maddala, G. S. (1976) “Weak Priors and Sharp Posteriors in Simultaneous Equation Models”,
  Econometrica, 44, 345-351.
Maddala, G. S. (1977) Econometrics. New York: McGraw-Hill.
Malinvaud, E. (1978) Methodes statist&es de I’economdtrie (3rd edn.). Paris: Dunod.
Mariano, R. S. (1980) “Analytical Small-Sample Distribution Theory in Econometrics: The Simulta-
  neous-Equations Case”, CORE Discussion Paper 8026, Universite Catholique de Louvain.
Morales, J. A. ( 197I) Bayesian Full Information Structural Analysis. Berlin: Springer-Verlag.
Raiffa, H. and R. Schlaifer (1961) Applied Statistical Decision Theory. Cambridge, Mass.: Massachu-
  setts Institute of Technology Press.
Richard, J. F. (1973) Posterior and Predictive Densities for Simultaneous Equation Models. Berlin:
  Springer-Verlag.
Richard, J. F. (1979) “Exogeneity, Inference and Prediction in So-Called Incomplete Dynamic
  Simultaneous Equation Models”, CORE Discussion Paper 7922, Universite Catholique de Louvain.
Richard, J. F. and H. Tompa (1980) “On the Evaluation of Poly-t Density Functions”, Journal of
  Econometrics, 12, 335-351.
Rothenberg, T. (1963) “A Bayesian Analysis of Simultaneous Equation Systems”, Econometric
  Institute Report 63 15, Erasmus Universiteit, Rotterdam.
Rothenberg, T. (1973) Eficient Estimation with A Priori Information, Cowles Foundation Monograph
  23. Yale University Press.
Rothenberg, T. (1975) “Bayesian Analysis of Simultaneous Equations Models”, in: S. E. Fienberg and
  A. Zellner (eds.), Studies in Bayesian Econometrics and Statistics. Amsterdam: North-Holland
  Publishing Co.
Ter Berg, P. and R. Harkema (1980) “Bayesian Limited Information Analysis of Nonlinear Simulta-
  neous Equations Systems”, Econometric Institute Report 8023/E, Erasmus Universiteit, Rotter-
  dam.
Theil, H. (1971) Principles of Econometrics. New York: John Wiley 8r Sons.
Tiao, G. C. and A. Zellner (1964) “On the Bayesian Estimation of Multivariate Regression”, Journal
  of the Royal Statistical Society, Ser. B. 277-285.
Tomoa, H. (1967) “Gaussian Numerical Integration of a Function Depending on a Parameter”, The
   Computerjournal, 10, 204-205.
Tomna. H. (1973) “The Iterative Simpson Method of Numerical Integration”, CORE Discussion
   Paper 7336, Umversite Catholique de Louvain.
van Dijk, H. K. and T. KIoek (1980) “Further Experience in Bayesian Analysis Using Monte Carlo
   Integration”, Econometric Institute Report 8012/E, Erasmus Universiteit, Rotterdam.
Zellner, A. (1962) “An Efficient Method of Estimating Seemingly Unrelated Regressions and Tests for
   Aggregation Bias”, Journal of the American Statistical Association, 57, 348-368.
Zellner, A. (1965)“Bayesian and Non-Bayesian Analysis of Simultaneous Equation Models”, Paper
   presented at the First World Congress of the Econometric Society, Rome, September.
598                                                                   J. H. D&e and J- F. Richard

Zellner, A. (I 97 I) An Introduction to Bayesian Inference in Econometrics. New York: John Wiley &
  Sons.
Zellner, A. and J. F. Richard (1973) “Use of Prior Information in the Analysis and Estimation of
  Cobb-Douglas Production Function Models”, International Economic Review, 14, 107-I 19.
Zellner, A. and W. Vandaele (1975) “Bayes-Stein Estimators for k-Means, Regression and Simulta-
  neous Equation Models”, in: S. E. Feinberg and A. Zellner (eds.), Studies in Bayesian Econometrics
  and Statistics. Amsterdam: North-Holland Publishing Co.
Zellner, A., J. Kmenta and J. H. Dr&ze (1966) “Specification and Estimation of Cobb-Douglas
  Production Function Models”, Econometrica, 34, 784-795.



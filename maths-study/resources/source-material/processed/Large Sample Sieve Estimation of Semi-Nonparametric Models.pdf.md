---
normalized_id: shared-pdf-reference-large-sample-sieve-estimation-of-semi-nonparametric-models
exam_code: SHARED
material_scope: large sample sieve estimation of semi-nonparametric models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Large Sample Sieve Estimation of Semi-Nonparametric Models.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-large-sample-sieve-estimation-of-semi-nonparametric-models

      Large Sample Sieve Estimation of Semi-Nonparametric Models∗
                                              Xiaohong Chen
                                         Department of Economics
                                           New York University
                                             269 Mercer Street
                                           New York, NY 10003
                                       Email: xiaohong.chen@nyu.edu

                                 November 2002, Revised September 2005



                                                     Abstract
          Often researchers ﬁnd parametric models restrictive and sensitive to deviations from the para-
      metric speciﬁcations; semi-nonparametric models are more ﬂexible and robust, but lead to other
      complications such as introducing inﬁnite dimensional parameter spaces that may not be compact.
      The method of sieves provides one way to tackle such complexities by optimizing an empirical criterion
      function over a sequence of approximating parameter spaces, called sieves, which are signiﬁcantly less
      complex than the original parameter space. With diﬀerent choices of criteria and sieves, the method
      of sieves is very ﬂexible in estimating complicated econometric models. For example, it can simulta-
      neously estimate the parametric and nonparametric components in semi-nonparametric models with
      or without constraints. It can easily incorporate prior information, often derived from economic
      theory, such as monotonicity, convexity, additivity, multiplicity, exclusion and non-negativity.
          This chapter describes estimation of semi-nonparametric econometric models via the method of
      sieves. We present some general results on the large sample properties of the sieve estimates, including
      consistency of the sieve extremum estimates, convergence rates of the sieve M-estimates, pointwise
      normality of series estimates of regression functions, root-n asymptotic normality and eﬃciency of
      sieve estimates of smooth functionals of inﬁnite dimensional parameters. Examples are used to
      illustrate the general results.
         Keywords: Semi-nonparametric models, Sieve extremum estimation, Sieve M-estimation, Series,
      Sieve minimum distance.
          JEL: C13, C14, C20.




  ∗
    The author would like to thank C. Ai, J. Heckman, B. Honore, J. Huang, K. Hyndman, G. Imbens, R. Matzkin, W.
Newey and H. White for valuable suggestions, J. Huang for showing his work on concave extended linear models, and
two anonymous referees for critical comments which lead to thorough revisions. She also thanks K. Hyndman, A. Ingster,
M. Kredler and D. Pouzo for proof-reading, to D. Pouzo and V. Tsyrennikov for simulations and to the PhD students
who went through earlier versions used as the lecture notes for Topics in Econometrics during the Fall 2002, Fall 2003
and Spring 2005 sessions at New York University. The author acknowledges ﬁnancial support from the National Science
Foundation and the C.V. Starr Center at NYU. Any errors or omissions are the responsibility of the author.
Contents
1 Introduction                                                                                          1

2 Sieve Estimation: Examples, Deﬁnitions, Sieves                                                         3
  2.1 Empirical examples of semi-nonparametric econometric models . . . . . . . . . . . . . .            4
  2.2 Deﬁnition of sieve extremum estimation . . . . . . . . . . . . . . . . . . . . . . . . . . .       9
      2.2.1 Sieve M-estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    10
      2.2.2 Series estimation, concave extended linear models . . . . . . . . . . . . . . . . . .       11
      2.2.3 Sieve MD estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     14
  2.3 Typical function spaces and sieve spaces . . . . . . . . . . . . . . . . . . . . . . . . . . .    16
      2.3.1 Typical smoothness classes and (ﬁnite-dimensional) linear sieves . . . . . . . . .          16
      2.3.2 Weighted smoothness classes and (ﬁnite-dimensional) linear sieves . . . . . . . .           20
      2.3.3 Other smoothness classes and (ﬁnite-dimensional) nonlinear sieves . . . . . . . .           21
      2.3.4 Inﬁnite-dimensional (nonlinear) sieves and penalization . . . . . . . . . . . . . .         22
      2.3.5 Shape-preserving sieves . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     23
      2.3.6 Choice of a sieve space . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   24
  2.4 A small Monte Carlo study . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     25
  2.5 An incomplete list of sieve applications in econometrics . . . . . . . . . . . . . . . . . .      30

3 Large Sample Properties of Sieve Estimation of Unknown Functions                                      32
  3.1 Consistency of sieve extremum estimators . . . . . . . . . . . . . . . . . . . . . . . . . .      33
  3.2 General convergence rates of sieve M-estimators . . . . . . . . . . . . . . . . . . . . . . .     35
      3.2.1 Example: additive mean regression with a monotone constraint . . . . . . . . . .            37
      3.2.2 Example: multivariate quantile regression . . . . . . . . . . . . . . . . . . . . . .       40
  3.3 Convergence rates of series estimators . . . . . . . . . . . . . . . . . . . . . . . . . . . .    41
  3.4 Pointwise asymptotic normality of series LS estimators . . . . . . . . . . . . . . . . . . .      44
      3.4.1 Asymptotic normality of the spline series LS estimator . . . . . . . . . . . . . . .        44
      3.4.2 Asymptotic normality of functionals of series LS estimator . . . . . . . . . . . . .        45

4 Large Sample Properties of Sieve Estimation of Parametric Parts in Semiparametric
  Models                                                                                            47
  4.1 Semiparametric Two-Step estimators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
      4.1.1 Asymptotic normality . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
  4.2 Sieve simultaneous M-estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51
      4.2.1 Asymptotic normality . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52
      4.2.2 Example: partially additive mean regression with a monotone constraint . . . . . 53
      4.2.3 Eﬃciency of sieve MLE . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55
  4.3 Sieve simultaneous MD estimation: normality and eﬃciency . . . . . . . . . . . . . . . . 56

5 Concluding Remarks                                                                                    59
1     Introduction
    Semiparametric and nonparametric modelling techniques have grown increasingly popular in both
theoretical and applied econometrics.1 This is partly because economic theory seldom suggests any
parametric functional relationships among economic variables, nor does it suggest particular parametric
forms for error distributions. An additional reason for the growing popularity of semi-nonparametric
models is the declining computational cost of collecting and analyzing large economic data sets. All
of the chapters in the book edited by Barnett et al. (1991) and several chapters2 in the Handbook
of Econometrics Volume 4 edited by Engle and McFadden (1994) have already reviewed the work in
semiparametric and nonparametric econometrics that has been conducted up to the mid-1990s. More
recently, Horowitz (1998) has provided a comprehensive treatment of four leading classes of semipara-
metric econometric models estimated via the kernel method. Pagan and Ullah (1999) and Li and Racine
(2006) have surveyed the most well-known existing theoretical and empirical work on the estimation
and testing of semiparametric and nonparametric econometric models via the methods of kernel, local
linear regression and series. This chapter will review some recent developments in large sample theory
on estimation of semi-nonparametric models via the method of sieves (Grenander, 1981).
    Semi-nonparametric models involve unknown parameters that lie in inﬁnite-dimensional parameter
spaces; hence it can be computationally diﬃcult to estimate such models using ﬁnite samples. Moreover,
even if one could solve the problem of optimizing a sample criterion over an inﬁnite-dimensional parame-
ter space, the resulting estimator may have undesirable large sample properties such as inconsistency or
a very slow rate of convergence due to the parameter space being too large and not compact. To resolve
this problem, the method of sieves optimizes a criterion function over a sequence of signiﬁcantly less
complex, and often ﬁnite dimensional, parameter spaces, which we call sieves. To ensure consistency of
the method, we require that the complexity of sieves increases with the sample size so that in the limit
the sieves are dense in the original parameter space.3
    The inﬁnite-dimensional unknown parameter in a nonparametric or semiparametric model can often
be viewed as a member of some function space with certain regularities (e.g., having bounded sec-
ond derivatives, monotone, concave). Thus, many deterministic approximation results developed in
mathematics and computer science can be used to suggest sieves that provide good and computable
approximations to an unknown function. For example, the sieves or approximating spaces can be con-
   1
     In this chapter, an econometric model is termed “parametric” if all of its parameters are in ﬁnite-dimensional param-
eter spaces; a model is “nonparametric” if all of its parameters are in inﬁnite-dimensional parameter spaces; a model is
“semiparametric” if its parameters of interests are in ﬁnite-dimensional spaces but its nuisance parameters are in inﬁnite-
dimensional spaces; a model is “semi-nonparametric” if it contains both ﬁnite-dimensional and inﬁnite-dimensional un-
known parameters of interests.
   2
     See the ones written by Newey and McFadden (1994), Andrews (1994a), Powell (1994), Härdle and Linton (1994),
Matzkin (1994), Manski (1994) and others.
   3
     These terms will become much clearer in the next two sections.



                                                            1
structed using linear spans of power series, Fourier series, splines or many other basis functions; see
e.g. Judd (1998, chapters 6 and 12) for numerical implementation of such sieves for problems in eco-
nomics and ﬁnance. Since these approximating spaces can often be characterized by a ﬁnite number of
“parameters,” a nonparametric or semiparametric estimation problem is often reduced to a parametric
one when the method of sieves is implemented. However, to obtain the desired theoretical properties
of the estimator, it is necessary that the number of parameters increase slowly with the sample size. It
is this feature that gives the sieve method its added ﬂexibility and robustness over classical parametric
methods which assume ﬁxed, ﬁnite-dimensional parameter spaces.
   One attractive feature of the method of sieves is that it is easy to implement. The sieve method is
particularly convenient when the unknown functions enter the criterion function (or moment condition)
nonlinearly, satisfy some known restrictions such as monotonicity, concavity, additivity, multiplicity
and exclusion, or the error distribution has known tail behavior such as fat tails. Moreover, it can
simultaneously estimate the parametric and nonparametric components in semiparametric models with
or without constraints. With diﬀerent choices of criteria and sieves, the method of sieves provides a
ﬂexible and computationally feasible approach to estimate complicated econometric models. We shall
demonstrate this with some examples in the subsequent sections.
   Although the method of sieves is easy to implement when estimating complicated econometric
models, its theoretical properties cannot be justiﬁed by applying the classical theory for parametric
models. Any appropriate large sample theory for the sieve method should not only account for the
approximation errors, which arise because we replace the original parameter space with the simpler sieve
space, but also control for the complexity of the sieve parameter spaces, which increases with the sample
size. Consequently, the large sample properties of the sieve method are in general diﬃcult to derive,
which may partly explain why there are fewer econometric applications using such techniques than
those using the kernel method. However, we should mention that the sieve estimation method admits,
as special cases, many standard estimation methods (such as series-based methods) in econometrics.
As a result, some large sample results appear in the literature in papers that do not mention the word
“sieve” at all.
   In this chapter we shall present some general results on large sample estimation theory using the
method of sieves and illustrate how to apply these results with examples. Instead of presenting the
current sieve estimation theory at its greatest generality, we have chosen to review results that are
relatively accessible but general enough to cover most semi-nonparametric econometric applications.
References are given for the results that are not presented in detail.
   The rest of this chapter is organized as follows. In Section 2, we ﬁrst present several examples of
semi-nonparametric econometric models. We then deﬁne the sieve extremum estimation and its spe-
cial cases including sieve M-estimation, sieve maximum likelihood estimation (MLE), sieve (nonlinear)


                                                    2
least squares (NLS), sieve minimum distance (MD) and others. The various criterion functions are
illustrated using examples. In addition, we introduce the popular series estimators as the sieve M-
estimators obtained when the criterion functions are concave and the sieve spaces are ﬁnite-dimensional
linear.4 We then review typical function spaces and sieve spaces used in econometrics, and conclude
this section with a small Monte Carlo study to demonstrate the implementation of the sieve extremum
estimation.5 Section 3 focuses on the large sample properties of sieve estimation of inﬁnite-dimensional
unknown parameters. We ﬁrst provide a consistency theorem for general sieve extremum estimation
where the original parameter space may not be compact. We then present a convergence rate result for
sieve M-estimators and illustrate how to apply the result with some examples. Finally, we review the
convergence rate and the pointwise asymptotic normality results for the series estimators. In Section
                               √
4, we review general results on n− asymptotic normality of sieve estimators of smooth functionals
of unknown inﬁnite-dimensional parameters. Here we ﬁrst discuss the popular two-step semiparamet-
ric procedures in which the ﬁrst step unknown functions could be estimated by any nonparametric
procedures such as kernel, local linear regression and sieve methods, and the second step unknown
parametric components are estimated by the generalized method of moments (GMM). The theorem on
√
  n− asymptotic normality of the second step GMM estimator is a slight reﬁnement of the existing
                                                         √
ones in the semiparametric literature. We then review the n− asymptotic normality of the sieve M-
estimation of smooth functionals of unknown functions, as well as the semiparametric eﬃciency of the
sieve MLE. Finally we present the recent theory on the sieve MD estimation for the parametric compo-
nents in semi-nonparametric models. Section 5 points out additional topics on statistical inference via
the method of sieves that are not reviewed here due to the lack of space.
        Throughout this chapter, we assume that there is an underlying complete probability space, the
data {Zt : t ≥ 1} is strictly stationary ergodic,6 and all probability calculations are done under the true
probability measure Po . For random variables Vn and positive numbers bn , n ≥ 1, we let Vn = OP (bn )
mean that limc→∞ lim supn P (|Vn | ≥ cbn ) = 0, and let Vn = oP (bn ) mean that limn P (|Vn | ≥ cbn ) = 0
for all c > 0. The notation plimn→∞ Vn = 0 also means that Vn = oP (1) (i.e., Vn converges to 0 in
probability). Similarly Vn = oa.s. (1) means that Vn converges to 0 almost surely.


2        Sieve Estimation: Examples, Deﬁnitions, Sieves
As alluded to in the introduction, the method of sieves consists of two key ingredients: a criterion
function and sieve parameter spaces (a sequence of approximating spaces). Both the criterion functions
    4
     We note that this deﬁnition of series estimators may diﬀer from those in the current econometrics literature.
    5
     See the chapter by Ichimura and Todd (2005) for more details on the implementation of semi-nonparametric estimators.
   6
     See Hansen (1982), White (1984) or Wooldridge (1994) for the deﬁnition of a strictly stationary ergodic process. We
make this assumption to simplify the presentation. See White and Wooldridge (1991) on sieve extremum estimation for
general dependent heterogeneous processes.


                                                           3
and the sieve spaces can be very ﬂexible. In particular, almost all of the classical criterion functions
stated in Newey and McFadden (1994), so long as they still allow for identiﬁcation, can be used as
criterion functions in the method of sieve estimation. Therefore, the main new ingredient is the choice
of sieve parameter spaces, which will be discussed in this section.

2.1   Empirical examples of semi-nonparametric econometric models

It is impossible to list all of the existing and potential semi-nonparametric models and their empirical
applications in econometrics. In this subsection we present three empirical examples as illustration;
additional ones can be found in Manski (1994), Powell (1994), Matzkin (1994), Horowitz (1998), Pagan
and Ullah (1999), Blundell and Powell (2003) and other surveys on this topic.

Example 2.1 (Single spell duration models with unobserved heterogeneity): Classical single spell duration
models in search unemployment (Flinn and Heckman, 1982), job turnover (Jovanovic, 1979), labor
supply (Heckman and Willis, 1977) and others often suggest a functional form for the structural duration
distribution conditional on individual heterogeneity. More speciﬁcally, let G(τ |u, x) be the structural
distribution function of duration T conditional on a scalar of unobserved heterogeneity U = u and a
vector of observed heterogeneity X = x. The distribution of observed duration given X = x is
                                              
                                    F (τ |x) = G(τ |u, x)dh(u),

where the unobserved heterogeneity U is modelled as a random factor with distribution function h(·).
An i.i.d. sample of observations {Ti , Xi }ni=1 allows us to recover the true F (τ |x) uniquely. Theoretical
models often imply parametric functional forms of G up to unknown ﬁnite-dimensional parameters
β. Denote g(·|β, u, x) as the probability density function of G(·|β, u, x). Conventional parametric
MLE method assumes that the unobserved heterogeneity follows some known distribution hγ up to
some unknown ﬁnite-dimensional parameters γ. Under this assumption it then estimates the unknown
                                         
parameters β, γ by arg maxβ,γ n1 ni=1 log{ g(Ti |β, u, Xi )dhγ (u)}.
   Heckman and Singer (1984) point out that both theoretical and empirical examples indicate that
the parametric MLE estimates of structural parameters β in these duration models will be inconsistent
if the distribution of the unobserved heterogeneity is misspeciﬁed. Instead, they propose the following
semi-nonparametric single spell duration model
                                                      
                                   F (τ |β, h, x) =       G(τ |β, u, x)dh(u),                          (2.1)

where the distribution h of unobserved heterogeneity is left unspeciﬁed. Heckman and Singer (1984)
established the identiﬁcation of (β  , h), and proposed a sieve MLE method to estimate (β  , h) jointly.
They also showed that their estimator is consistent.


                                                          4
   The Heckman-Singer model is a typical example of a broad class of semi-nonparametric mod-
els that specify the (conditional) distribution associated with the observed economic variables semi-
nonparametrically, where the speciﬁc semi-nonparametric form can be derived from independence of
errors and regressors such as in discrete choice models, transformation models, sample selection models,
mixture models, random censoring, nonlinear measurement errors and others. More generally, one could
consider semi-nonparametric models based on quantile independence, symmetry or other qualitative re-
strictions on distributions. See Horowitz (1998), Manski (1994), Powell (1994) and Bickel et al. (1993)
for examples.

Example 2.2 (Shape-invariant system of Engel curves): Blundell et al. (2003) have shown that a system
of Engel curves that satisﬁes Slutsky’s symmetry condition and allows for demographic eﬀects on budget
shares in a given year must take the following form:

                         Y1i = h1 (Y2i − h0 (X1i )) + h2 (X1i ) + εi ,    = 1, ..., N,

where Y1i is the i − th household budget share on  − th goods, Y2i is the i − th household log-total
non-durable expenditure, X1i is a vector of the i − th household demographic variables that aﬀect the
household’s non-durable consumption. Note that h0 (X1i ) is common among all the goods and is called
an “equivalence scale” in the consumer demand literature. Citing strong empirical evidence and many
existing works, Blundell et al. (2003) have argued that popular parametric linear and quadratic forms
for h1 (·) are inadequate, and that consumer demand theory only suggests the purely nonparametric
speciﬁcation:

                 E[Y1i − {h1 (Y2i − h0 (X1i )) + h2 (X1i )}|X1i , Y2i ] = E[εi |X1i , Y2i ] = 0,       (2.2)

where h1 , h2 and h0 are all unknown functions. For the identiﬁcation of all these unknown functions
θ = (h0 , h11 , ..., h1N , h21 , ..., h2N ) satisfying (2.2), it suﬃces to assume that at least one of h1 ,  =
1, ..., N is nonlinear and that h2 (x∗1 ) = 0,  = 1, ..., N , for some x∗1 in the support of X1 .
   Unfortunately, when X1i contains too many household demographic variables (say when dim(X1i ) ≥
3), the fully nonparametric speciﬁcation (2.2) cannot lead to precise estimates of the unknown functions
h0 , h21 , ..., h2N due to the so-called “curse of dimensionality”. Therefore, applied researchers must
impose more structure on the model. Using the British family expenditure survey (FES) data, Blundell
et al. (1998) found the following semi-nonparametric speciﬁcation to be reasonable:

                                                              
                           E[Y1i − {h1 (Y2i − g(X1i β1 )) + X1i β2 }|X1i , Y2i ] = 0,                   (2.3)

                                                                               β ) and h (X ) = X  β
where h1 ,  = 1, ..., N are still unknown functions, but now h0 (X1i ) = g(X1i 1       2 1i    1i 2
are known up to unknown ﬁnite-dimensional parameters β1 and β2 . Here the parameters of interest


                                                         5
are θ = (β1 , β21
                 , ..., β  , h , ..., h
                          2N    11
                                             
                                         1N ) . This semi-nonparametric speciﬁcation has been estimated by

Blundell et al. (1998) using the kernel method and Blundell et al. (2001) using the sieve method.
    Both the speciﬁcations (2.2) and (2.3) assume that the total non-durable expenditure Y2i is ex-
ogenous. However, this assumption has been rejected empirically. Noting the endogeneity of total
non-durable expenditure, Blundell et al. (2001) considered the following semi-nonparametric instru-
mental variables (IV) regression:

                                                              
                           E[Y1i − {h1 (Y2i − g(X1i β1 )) + X1i β2 }|X1i , X2i ] = 0,                      (2.4)

where the parameters of interest are still θ = (β1 , β21
                                                        , ..., β  , h , ..., h
                                                                 2N    11
                                                                                    
                                                                                1N ) , and X2i is the gross earnings

of the head of the i − th household which is used as an instrument for the total non-durable expenditure
Y2i . They estimated this model via the sieve method and their empirical ﬁndings demonstrate the
importance of accounting for the endogenous total expenditure semi-nonparametrically.

Example 2.3 (Consumption-based asset pricing models): A standard consumption-based asset pricing
model assumes that at time zero a representative agent maximizes the expected present value of the total
                     
utility function E0 { ∞    t
                      t=0 δ u(Ct )}, where δ is the time discount factor and u(Ct ) is period t’s utility.
The consumption-based asset pricing model comes from the ﬁrst-order conditions of a representative
agent’s optimal consumption choice problem. These ﬁrst-order conditions place restrictions on the joint
distribution of the intertemporal marginal rate of substitution in consumption and asset returns. They
imply that for any traded asset indexed by , with a gross return at time t + 1 of R,t+1 , the following
Euler equation holds:
                                   E (Mt+1 R,t+1 | wt ) = 1,             = 1, ..., N,                       (2.5)

where Mt+1 is the intertemporal marginal rate of substitution in consumption, and E(·| wt ) denotes the
conditional expectation given the information set at time t (which is the sigma-ﬁeld generated by wt ).
More generally, any non-negative random variable Mt+1 satisfying Equation (2.5) is called a stochastic
discount factor (SDF); see Hansen and Richard (1987) and Cochrane (2001).
    Hansen and Singleton (1982) have assumed that the period t utility takes the power speciﬁcation
u(Ct ) = [(Ct )1−γ − 1]/[1 − γ], where γ is the curvature parameter of the utility function at each period,
                                                             −γ
which implies that the SDF takes the form Mt+1 = δ CCt+1    t
                                                                  and the Euler equation becomes:
                                             −γo
                                        Ct+1
                           E   δo                     R,t+1 − 1 | wt   = 0,    = 1, ..., N,                 (2.6)
                                         Ct

where the unknown scalar parameters δo , γo can be estimated by Hansen’s (1982) generalized method of
moment (GMM). However, this classical power utility-based asset pricing model (2.6) has been rejected
empirically.


                                                              6
      Many subsequent papers have tried to relax the model (2.6) to ﬁt the data better by introducing
durable goods, habit formation or a nonseparable preference speciﬁcation. The ﬁrst class of papers
                                                                                              −γ
proposes various parametric forms of the SDF, Mt+1 , that are more ﬂexible than Mt+1 = δ CCt+1
                                                                                            t
                                                                                                   ;
see e.g. Eichenbaum and Hansen (1990), Constantinides (1990), Campbell and Cochrane (1999). The
second class of papers has made the SDF, Mt+1 , to be a purely nonparametric function of a few state
variables; see e.g. Gallant and Tauchen (1989), Newey and Powell (1989) and Bansal and Viswanathan
(1993). Recently, Chen and Ludvigson (2003) have speciﬁed the SDF, Mt+1 , to be semi-nonparametric
in order to incorporate some preference parameters. In particular, they combine the power utility
                                                                
speciﬁcation with a nonparametric internal habit formation: E0 { ∞t=0 δ [(Ct − Ht )
                                                                       t           1−γ
                                                                                       − 1]/[1 − γ]},
where Ht = H(Ct , Ct−1 , ..., Ct−L ) is the period t habit level. Here H(·) is a homogeneous of degree one
unknown function of current and past consumption, and can be rewritten as H(Ct , Ct−1 , ..., Ct−L ) =
                       
                   Ct−L
Ct ho CCt−1
         t
            , ...,  Ct    with ho (·) unknown. It is obvious that one needs to impose 0 ≤ ho < 1 so that
0 ≤ Ht < Ct . The following external habit speciﬁcation is a special case of their model:
                 ⎛                                           −γo                ⎞
                             −γo 1 − h      Ct
                                                 , ...,
                                                        Ct+1−L
                 ⎜       Ct+1            o Ct+1          Ct+1                       ⎟
               E ⎝δ o                                       −γo R,t+1 − 1 | wt ⎠ = 0,              (2.7)
                          Ct                  Ct−1       Ct−L
                                     1 − ho Ct , ..., Ct

for  = 1, ..., N , where γo > 0, δo > 0 are unknown scalar preference parameters, ho ∈ [0, 1) is an
                                                           
                                                    C
unknown function and Ht+1 = Ct+1 ho CCt+1   t
                                              , ..., Ct+1−L
                                                       t+1
                                                              is the habit level at time t + 1. Chen and
Ludvigson (2003) have applied the sieve method to estimate this model and its generalization which
allows for internal habit formation of unknown form. Their empirical ﬁndings, using quarterly data, are
in favor of ﬂexible nonlinear internal habit formation.

      We note that Examples 2.2 and 2.3 and many other economic models imply conditional moment
restrictions of the form
                                                  E[ρ(Zt , θo )|Xt ] = 0,                               (2.8)

where ρ(·, ·) is a column vector of residual functions whose functional forms are assumed to be known
up to an unknown parameter, θ, and E[ρ(Zt , θo )|Xt ] is the conditional expectation of ρ(Zt , θo ) given
Xt . Here {Zt = (Yt , Xt )}nt=1 denotes the observations where Yt is a vector of endogenous variables and
Xt is a vector of conditioning variables.7 We note that the true conditional distribution of Yt given Xt
is unspeciﬁed. The parameters of interest θo ≡ (βo , ho ) contain a vector of ﬁnite dimensional unknown
parameters βo and a vector of inﬁnite dimensional unknown functions ho (·) = (ho1 (·), ..., hoq (·)) . Moti-
vated by the asset pricing and rational expectations models, Hansen (1982, 1985) studied the conditional
moment restriction E[ρ(Zt , βo )|Xt ] = 0 (i.e., without unknown ho ) for stationary time series data (where
typically Zt = (Yt , Xt ) and Xt includes lagged Yt and other pre-determined variables known at time
  7
      Throughout this chapter, the notation  denotes the transpose of a vector.


                                                             7
t). Chamberlain (1992), Newey and Powell (2003), and Ai and Chen (2003) studied the general case
E[ρ(Zt , βo , ho )|Xt ] = 0 for i.i.d. data.
       The class of conditional moment restrictions given by (2.8) can be further classiﬁed into two sub-
classes. The ﬁrst is when ρ(Zt , θ) − ρ(Zt , θo ) does not depend on any endogenous variables (Yt ); hence
the true parameter θo can be identiﬁed as the unique maximizer of

                                               1
                                                  n
                                  Q(θ) = −        E[ρ(Zt , θ) {Σ(Xt )}−1 ρ(Zt , θ)],
                                               n
                                                 t=1

where Σ(Xt ) is a positive deﬁnite weighting matrix. The second sub-class is when ρ(Zt , θ) − ρ(Zt , θo )
does depend on endogenous variables (Yt ). Here the true parameter θo can be identiﬁed as the unique
maximizer of

                        1
                           n
             Q(θ) = −      E[m(Xt , θ) {Σ(Xt )}−1 m(Xt , θ)]        with m(Xt , θ) ≡ E[ρ(Zt , θ)|Xt ].
                        n
                          t=1

       Although the second subclass includes the ﬁrst subclass as a special case, when θ contains unknown
functions, it is much easier to derive asymptotic properties for various nonparametric estimators of θ
identiﬁed by the conditional moment restrictions belonging to the ﬁrst subclass. The ﬁrst subclass
includes the speciﬁcations (2.2) and (2.3) of Example 2.2, and many semi-nonparametric models that
have been well studied in econometrics. For example, it includes the partially linear regression E[Yi −
  β − h (X )|X , X ] = 0 of Engle et al. (1986) and Robinson (1988), the index regression E[Y −
X1i o   o  2i  1i  2i                                                                         i

ho (Xi βo )|Xi ] = 0 studied by Powell et al. (1989) and Ichimura (1993), and the additive model with a
                           
link function E[Yi − F ( qj=1 hoj (Xji ))|X1i , ..., Xqi ] = 0 of Horowitz and Mammen (2004), where F (·) is
a known link function.
       The second subclass includes the speciﬁcation (2.4) of Example 2.2, Example 2.3, many semi-
nonparametric asset pricing and rational expectation models, and simultaneous equations with ﬂexible
parameterization. A leading, yet diﬃcult example of this subclass, is the purely nonparametric instru-
mental variables (IV) regression E[Y1i −ho (Y2i )|Xi ] = 0 studied by Newey and Powell (2003), Darolles et
al. (2002), Blundell et al. (2001) and Hall and Horowitz (2005).8 Other examples include the partially
linear regression with an endogenous nonparametric part E[Y1i − X1i      β − h (Y )|X , X ] = 0 and a
                                                                           o   o 2i    1i   2i
                                                                   
                                                                           q
partially additive IV regression with a link function E[Y1i − F (Y2i βo + j=1 hoj (Xji ))|X0i , ..., Xqi ] = 0
studied by Ai and Chen (2003). See Chamberlain (1992) and Blundell and Powell (2003) for additional
examples.
   8
    See the chapter by Carrasco et al. (2005) for discussion on estimation of purely nonparametric IV regressions via
regularization.




                                                            8
2.2      Deﬁnition of sieve extremum estimation

A typical semi-nonparametric econometric model speciﬁes that there is a population criterion function
Q : Θ → R, which is uniquely maximized at a “true” parameter θo ∈ Θ,9 where Θ denotes a potentially
inﬁnite dimensional parameter space. The “true” parameter θo ∈ Θ is unknown but is related to a
joint probability measure Po (z1 , · · · , zn ), from which a sample of size n observations {Zt }nt=1 , Zt ∈ Rdz ,
1 ≤ dz < ∞, is available. Let Q    n : Θ → R be an empirical criterion, which is a measurable function
of the data {Zt }nt=1 for all θ ∈ Θ, and converges to Q in some sense as the sample size n → ∞. One
general way to estimate θo is by maximizing Q                                        n (θ), assuming it
                                               n over Θ; the maximizer, arg maxθ∈Θ Q
exists, is then called the extremum estimate. See e.g. Amemiya (1985, chapter 4), Gallant and White
(1988b), Newey and McFadden (1994) and Gourieroux and Monfort (1995).
                                              n over Θ may not be well-deﬁned, or even if a maxi-
   When Θ is inﬁnite-dimensional, maximizing Q
                  n (θ) exists, it will generally be diﬃcult to compute. Instead, maximization is often
mizer arg maxθ∈Θ Q
restricted to a sequence of approximating spaces Θn in the sense that ∪n Θn is dense in Θ. Such a
sequence of approximating spaces is called a sieve by Grenander (1981).10 Popular sieves are typically
compact, non-decreasing (Θn ⊆ Θn+1 ⊆ · · · ⊆ Θ) and such that for any θ ∈ Θ there exists an element
πn θ in Θn satisfying d(θ, πn θ) → 0 as n → ∞, where d is a metric on Θ, and the notation πn can be
regarded as a projection mapping from Θ to Θn .
    An approximate sieve extremum estimate, denoted by θ̂n , is deﬁned as an approximate maximizer
    n (θ) over the sieve space Θn , i.e.,
of Q

                           Q                 n (θ) − OP (ηn ),
                            n (θ̂n ) ≥ sup Q                        with ηn → 0 as n → ∞.                              (2.9)
                                       θ∈Θn


When ηn = 0, we call θ̂n in (2.9) the exact sieve extremum estimate.11 The sieve extremum estimation
method clearly includes the standard extremum estimation method by setting Θn = Θ for all n. Fol-
lowing White and Wooldridge (1991, theorem 2.2), one can show that θ̂n in (2.9) is well deﬁned and
                                                              n (θ) is a measurable function of the
measurable under the following mild suﬃcient conditions: (i) Q
                                                               n (θ) is upper semicontinuous on Θn under the
data {Zt }nt=1 for all θ ∈ Θn ; (ii) for any data {Zt }nt=1 , Q
metric d(·, ·); and (iii) the sieve space Θn is compact under the metric d(·, ·). Therefore, in the rest of
this chapter we assume that θ̂n in (2.9) exists and is measurable.
       For a semi-nonparametric econometric model, θo ∈ Θ can be decomposed into two parts θo =
(βo , ho ) ∈ B × H, where B denotes a ﬁnite dimensional compact parameter space, and H an inﬁnite
   9
     The choice of Q(·) and the existence of θo are suggested by the identiﬁcation of an econometric model.
  10
     Since the true unknown θo ∈ Θ, while the estimator θ̂n is obtained                        b
                                                                        S by maximizing Qn (θ) over a sequence of less
complex (than Θ) and typically compact spaces Θn , it is obvious that Θn has to be dense in Θ to ensure consistency.
  11                                                                                                                   b n (θ)
     Since the complexity of the sieve space Θn increases with the sample size, it is obvious that the maximization of Q
over Θn need not be exact and the approximate maximizer θ̂n in (2.9) will be enough for consistency, see the consistency
theorem in Subsection 3.1.


                                                              9
dimensional parameter space. In this case, a natural sieve space will be Θn = B × Hn with Hn being a
sieve for H, and the resulting estimate θ̂n = (βn , 
                                                     hn ) in (2.9) will sometimes be called a simultaneous (or
joint) sieve extremum estimate. For a semi-nonparametric model, we can also estimate the parameters
of interest (βo , ho ) by a proﬁle sieve extremum estimation procedure that consists of two steps:
Step 1, for an arbitrarily ﬁxed value β ∈ B, compute Q     n (β,                n (β, h) − oP (1);
                                                                  h(β)) ≥ suph∈H Q      n

Step 2, estimate βo by βn solving Q    
                                    n (β,    ≥ maxβ∈B Q
                                           h(β))         n (β, 
                                                                h(β)) − oP (1), and then estimate ho by
     
hn = h(βn ).
Depending on the speciﬁc structure of a semi-nonparametric model, the proﬁle sieve extremum estima-
tion procedure may be easier to compute.

2.2.1     Sieve M-estimation

      n (θ) can be expressed as a sample average of the form
When Q

                                                             1
                                                                  n
                                              n (θ) = sup
                                         sup Q                  l(θ, Zt ),
                                        θ∈Θn            θ∈Θn n    t=1

with l : Θ × Rdz → R being the criterion based on a single observation, we also call the θ̂n solving
(2.9) as an approximate sieve maximum-likelihood-like (M-) estimate.12 This includes sieve maximum
likelihood estimation (MLE), sieve least squares (LS), sieve nonlinear least squares (NLS) and sieve
quantile regression as special cases.

Example 2.1 continued : Heckman and Singer (1984) estimated the unknown true parameters θo =
(βo , ho ) ∈ Θ in their semiparametric speciﬁcation, (2.1), of Example 2.1 by the sieve MLE:
                                                                                         
                                                1
                                                        n
                               n (θ) = sup
                          sup Q                    log                g(Ti |β, u, Xi )dh(u) ,
                         θ∈Θn          β∈B,h∈Hn n      i=1

where as n → ∞, the sieve space, Hn , becomes dense in the space of probability distribution functions
over R.

Example 2.2 continued : The nonparametric exogenous expenditure speciﬁcation (2.2) of Example 2.2
can be estimated by the sieve NLS:

                                       −1  
                                             n   N
                       n (θ) = sup
                  sup Q                       [Y1i − {h1 (Y2i − h0 (X1i )) + h2 (X1i )}]2 ,
                  θ∈Θn            h∈Hn n
                                            i=1 =1
                                                                                                 
with θ = h = (h0 , h11 , ..., h1N , h21 , ..., h2N ) the unknown parameters and Θn = Hn = H0,n × N=1 H1,n ×
N                                                                                    ∗
  =1 H2,n the sieve space, where we impose the identiﬁcation condition h2 (x1 ) = 0 on the sieve space
                               13

  12
     Our deﬁnition follows that in Newey and McFadden (1994). Some statisticians such as Birgé and Massart (1998) call
this a sieve minimum contrast estimate.
  13                          Q
     Throughout this chapter N  =1 H,n denotes a Cartesian product H1,n × · · · × HN,n .



                                                            10
H2,n for  = 1, ..., N . The semi-nonparametric exogenous expenditure speciﬁcation (2.3) of Example
2.2 can be also estimated by the sieve NLS:

                                         −1  
                                                n   N
                     n (θ) =
                sup Q              sup                                 
                                                [Y1i − {h1 (Y2i − g(X1i          
                                                                          β1 )) + X1i β2 }]2 ,
                θ∈Θn            β∈B,h∈Hn n
                                               i=1 =1

with θ = (β  , h ) = (β1 , β21
                                 , ..., β  , h , ..., h
                                          2N    11
                                                             
                                                         1N ) the unknown parameters and Θn = B × Hn =
                   N
B1 × N =1 B2 ×      =1 H1,n the sieve space.

    More generally, we can apply the sieve NLS criterion

                                                               
                                                               n
                                        n (θ) = sup −1
                                   sup Q                             ρ(Zi , θ) ρ(Zi , θ)
                                  θ∈Θn           θ∈Θn n        i=1

to estimate all the models belonging to the ﬁrst subclass of the conditional moment restrictions (2.8)
where ρ(Zi , θ) − ρ(Zi , θo ) does not depend on endogenous variables Yi . See Ai and Chen (1999).

2.2.2    Series estimation, concave extended linear models

In this chapter, we call a special case of sieve M-estimation series estimation, which is sieve M-estimation
with concave criterion functions Q   n (θ) = 1 n l(θ, Zt ) and ﬁnite-dimensional linear sieve spaces Θn .
                                               n    t=1
                                    n (τ θ1 + (1 − τ )θ2 ) ≥ τ Q
We say the criterion is concave if Q                             n (θ1 ) + (1 − τ )Q
                                                                                     n (θ2 ) for any θ1 , θ2 ∈ Θ and
any scalar τ ∈ (0, 1). Of course this deﬁnition only makes sense when the parameter space Θ is convex
(i.e., for any θ1 , θ2 ∈ Θ, we have τ θ1 + (1 − τ )θ2 ∈ Θ for any scalar τ ∈ (0, 1)). We say a sieve Θn is
ﬁnite-dimensional linear if it is a linear span of ﬁnitely many known basis functions; see subsection 2.3.1
for examples.
    Although our deﬁnition of series estimation may diﬀer from those in the current econometrics
literature, it is closely related to the deﬁnition of the sieve M-estimation of “concave extended lin-
ear models” in the statistics literature; see e.g. Hansen (1994), Stone et al. (1997), and Huang
(2001). Consider a Z-valued random variable Z, where Z is an arbitrary set. The probability den-
sity po (z) of Z depends on a true but unknown parameter θo .                        All the concave extended linear
models have three common ingredients: (1) a (possibly inﬁnite-dimensional) linear parameter space
Θ; (2) the criterion evaluated at a single observation is concave; that is, given any θ1 , θ2 ∈ Θ,
l(τ θ1 + (1 − τ )θ2 , z) ≥ τ l(θ1 , z) + (1 − τ )l(θ2 , z) for any scalar τ ∈ (0, 1) and any value z ∈ Z; (3)
the population criterion Q(θ) = E[l(θ, Z)] is strictly concave; that is, given any two essentially diﬀerent
functions θ1 , θ2 ∈ Θ, E[l(τ θ1 + (1 − τ )θ2 , Z)] > τ E[l(θ1 , Z)] + (1 − τ )E[l(θ2 , Z)] for any scalar τ ∈ (0, 1).
     The sieve M-estimation of a concave extended linear model can be implemented by maximizing
 n (θ) = 1 n l(θ, Zt ) over a ﬁnite-dimensional linear sieve space Θn without any constraints. The
Q         n   t=1
resulting estimator is called a series estimator in this paper. Therefore, for the same concave criterion


                                                          11
function, a sieve M-estimator is a series estimator if the sieve spaces Θn are ﬁnite-dimensional linear
(such as the ones listed in subsections 2.3.1 and 2.3.2), but is not a series estimator if the sieve spaces
Θn are not ﬁnite-dimensional linear (such as the ones listed in subsections 2.3.3 and 2.3.4). Although
this deﬁnition of a series estimator might look restrictive, it will make the descriptions of large sample
properties much easier in Section 3.
   For series estimation, concavity of the criterion function plays a central role. In particular, the sieve
spaces used in estimation are not required to be compact and can be any unrestricted ﬁnite-dimensional
linear spaces. Such sieves not only make it easy to compute the estimators, but also make it convenient
to discuss orthogonal projections and functional analysis of variance (ANOVA) decompositions (such
as additivity) in the nonparametric multivariate regression framework; see e.g., Stone (1985, 1986),
Andrews and Whang (1990), Huang (1998a).
   In order to apply the series estimation to a semi-nonparametric model, one needs to ﬁrst ﬁnd a
concave criterion function that identiﬁes the unknown parameters of interest. We now present several
such examples.

Example 2.4 (Multivariate LS regression): We consider the estimation of an unknown multivariate
conditional mean function θo (·) = ho (·) = E(Y |X = ·). Here Z = (Y, X), Y is a scalar, X has support
X that is a bounded subset of Rd , d ≥ 1. Suppose ho ∈ Θ, where Θ is a linear subspace of the space of
functions h with E[h(X)2 ] < ∞. Let l(h, Z) = −[Y − h(X)]2 and Q(θ) = −E{[Y − h(X)]2 }; then both
are concave in h and Q is strictly concave in h ∈ Θ.
   Let {pj (X), j = 1, 2, ...} denote a sequence of known basis functions that can approximate any real-
valued square integrable functions of X well; see subsection 2.3.1 or Newey (1997) for speciﬁc examples
of such basis functions. Then

                     Θn = Hn = {h : X → R, h(x) = Σkj=1
                                                     n
                                                        aj pj (x) : a1 , ..., akn ∈ R},                  (2.10)

with dim(Θn ) = kn → ∞ slowly as n → ∞, is a ﬁnite-dimensional linear sieve for Θ, and                 h =
                
arg maxh∈Hn −1n
                   n
                   t=1 [Yt −h(Xt )] is a series estimator of the conditional mean function ho (·) = E(Y |X =
                                   2

·). Moreover, this series estimator h has a simple closed-form expression:
                                                           
                                                           n
                               
                               h(x) = pkn (x) (P  P )−         pkn (Xi )Yi ,   x ∈ X,                  (2.11)
                                                           i=1

with pkn (X) = (p1 (X), ..., pkn (X)) , P = (pkn (X1 ), ..., pkn (Xn )) and (P  P )− the Moore-Penrose gener-
alized inverse. The estimator    h given in (2.11) will be called a series LS estimator or a linear sieve LS
estimator.

Example 2.5 (Multivariate quantile regression): We consider the estimation of an unknown multivariate
α − th quantile function θo (·) = ho (·) such that E[1{Y ≤ ho (X)}|X] = α ∈ (0, 1). Here Z = (Y, X), X

                                                       12
has support X that is a bounded subset of Rd , d ≥ 1. Suppose ho ∈ Θ, where Θ is a linear subspace
of the space of functions h with E[h(X)2 ] < ∞. Let l(h, Z) = [1{Y ≤ h(X)} − α][Y − h(X)],14 and
Q(θ) = E{[1{Y ≤ h(X)} − α][Y − h(X)]}, then both are concave in h and Q is strictly concave in
h ∈ Θ.
    Let Θn = Hn be a ﬁnite-dimensional linear sieve such as the one given in (2.10). Then      h =
            1 n
arg maxh∈Hn n t=1 [1{Yt ≤ h(Xt )} − α][Yt − h(Xt )] is a series estimator of the conditional quantile
function ho .

Example 2.6 (Log-density estimation): Let fo be the true unknown positive probability density of Z on
Z and suppose that we want to estimate the log-density, log fo . Since log fo is subject to the non-linear
                                                                                     
constraint Z exp{log fo (z)}dz = 1, it is more convenient to write log fo = ho − log Z exp ho (z)dz, and
                                                                                      
treat ho as an unknown function in some linear space. Since log fo = [ho + c] − log Z exp[ho (z) + c]dz
for any constant c, we need some location normalization to ensure the identiﬁcation of ho . By imposing
                             
a linear constraint such as Z h(z)dz = 0 (or h(z ∗ ) = 0 for a ﬁxed z ∗ ∈ Z), we can determine h
uniquely and make the mapping h → log f one-to-one. Therefore, we assume ho ∈ Θ, where Θ is a
                                                                                   
linear subspace of the space of real-valued functions h with E[h(Z)2 ] < ∞ and Z h(z)dz = 0. The
                                                                                   
log-likelihood evaluated at a single observation Z is given by l(h, Z) = h(Z) − log Z exp h(z)dz. Stone
                                                                     
(1990) has shown that l(h, Z) is concave and Q(θ) = E{h(Z) − log Z exp h(z)dz} is strictly concave in
h ∈ Θ.
       Let {pj (Z), j = 1, 2, ...} denote a sequence of known basis functions that can approximate any
real-valued square integrable functions of Z well. Then
                                                                   
                 Θn = Hn = {h : Z → R, h(z) = Σkj=1
                                                 n
                                                    aj pj (z) :        h(z)dz = 0, a1 , ..., akn ∈ R},
                                                                   Z

with dim(Θn ) = kn → ∞ slowly as n → ∞, is a ﬁnite-dimensional linear sieve for Θ, and         h =
            1 n
                                         
arg maxh∈Hn n i=1 h(Zi ) − log Z exp h(z)dz is a series estimator of the log-density function ho .
       It is easy to see that log-conditional density and log-spectral density estimation can be carried out
in the same way; see e.g. Stone (1994) and Kooperberg et al. (1995b).

Example 2.7 (Estimation of conditional hazard function): Consider a positive survival time T , a positive
censoring time C, the observed time Y = min(T, C) and an X -valued random vector X of covariates.
Let Z = (X  , Y, 1(T ≤ C)) denote a single observation. Suppose T and C are conditionally independent
given X, and that Pr(C ≤ τ0 ) = 1 for a known positive constant τ0 . Let fo (τ |x) and Fo (τ |x), τ > 0,
be the true unknown conditional density function and conditional distribution function, respectively,
of T given X = x. Then the ratio fo (τ |x)/[1 − Fo (τ |x)], τ > 0, is called the conditional hazard
function of T given X = x. We want to estimate the log-conditional hazard function ho (τ, x) =
  14
       This is a “check” function in Koenker and Bassett (1978).


                                                             13
log{fo (τ |x)/[1 − Fo (τ |x)]}. Since the likelihood at a single observation Z equals
                                                                              Y                
                 1(T ≤C)                                         1(T ≤C)
       [f (Y |X)]         [1 − F (Y |X)]1(T >C)
                                                = [exp{h(Y, X)}]         exp −     exp{h(τ, X)}dτ ,
                                                                                    0

the log-likelihood evaluated at a single observation is given by
                                                           Y
                           l(h, Z) = 1(T ≤ C)h(Y, X) −        exp{h(τ, X)}dτ.
                                                                    0

Kooperberg et al. (1995a) showed that the l(h, Z) is concave in h and Q(θ) = E{l(h, Z)} is strictly
concave in h.
      Suppose ho ∈ Θ, where Θ is a linear subspace of the space of real-valued functions h with E[h(Y, X)2 ] <
∞. Let {pj (Y, X), j = 1, 2, ...} denote a sequence of known basis functions that can approximate any
real-valued square integrable functions of (Y, X) well. Then

                 Θn = Hn = {h : (0, τ0 ] × X → R, h(τ, x) = Σkj=1
                                                               n
                                                                  aj pj (τ, x) : a1 , ..., akn ∈ R},

with dim(Θn ) = kn → ∞ slowly as n → ∞, is a ﬁnite-dimensional linear sieve for Θ, and           h =
                                          Yi               
            1 n
arg maxh∈Hn n i=1 1(Ti ≤ Ci )h(Yi , Xi ) − 0 exp{h(τ, Xi )}dτ is a series estimator of the log-conditional
hazard function ho .

      Finally, we should point out that not all semi-nonparametric M-estimation problems can be reparam-
eterized into series estimation problems. For example, the nonparametric exogenous expenditure speci-
ﬁcation (2.2) of Example 2.2 does not belong to the concave extended linear models, since, in this speci-
ﬁcation, the unknown function h0 (X1 ) enters the other unknown functions h1 (Y2 − h0 (X1 )),  = 1, ..., L
nonlinearly as an argument. Nevertheless, as described in the previous subsection, this model can still
be estimated by the general sieve M-estimation method.

2.2.3      Sieve MD estimation

       n (θ) can be expressed as a quadratic distance from zero, we call the θ̂n solving (2.9) an
When −Q
approximate sieve minimum distance (MD) estimate.
      One typical quadratic form is

                                                     1
                                                         n
                                   n (θ) = sup −
                              sup Q                                 t )}−1 m(X
                                                         t , θ) {Σ(X
                                                        m(X                  t , θ)                   (2.12)
                             θ∈Θn            θ∈Θn    n
                                                        t=1

       t , θo ) → 0 in probability. Here m(X
with m(X                                   t , θ) is a nonparametrically estimated moment condi-
                                     t ) → Σ(Xt ) in probability, where Σ(Xt ) is a positive deﬁnite
tion of ﬁxed, ﬁnite dimension and Σ(X
weighting matrix of the same ﬁxed, ﬁnite dimension as that of m(X                              is
                                                               t , θ). The weighting matrix, Σ,
introduced for the purpose of eﬃciency.15 We can apply the sieve MD criterion, (2.12), to estimate all
 15
      See Ai and Chen (2003) or Subsection 4.3 for details on eﬃciency.


                                                              14
the models belonging to the conditional moment restrictions E[ρ(Z, θo )|X] = 0, regardless of whether
or not ρ(Zt , θ) − ρ(Zt , θo ) depends on endogenous variables Yt . In particular, m(X
                                                                                    t , θ) could be any
nonparametric estimate of the conditional mean function m(Xt , θ) = E[ρ(Z, θ)|X = Xt ]; see e.g. Newey
and Powell (1989, 2003) and Ai and Chen (1999, 2003).
   Another typical quadratic form is the sieve GMM criterion
                                                 n (θ) = sup −
                                            sup Q                       gn (θ)
                                                               gn (θ) W                                           (2.13)
                                           θ∈Θn                   θ∈Θn

with gn (θo ) → 0 in probability. Here gn (θ) is a sample average of some unconditional moment conditions
of increasing dimension, and W   → W in probability, with W being a positive deﬁnite weighting matrix
                                                                                     is introduced for
of the same increasing dimension as that of gn (θ). As above, the weighting matrix W
the purpose of eﬃciency. Note that E[ρ(Z, θo )|X] = 0 if and only if the following increasing number of
unconditional moment restrictions hold:

                                       E[ρ(Zt , θo )p0j (Xt )] = 0, j = 1, 2, ..., km,n ,                          (2.14)

where {p0j (X), j = 1, 2, ..., km,n } is a sequence of known basis functions that can approximate any real-
valued square integrable functions of X well as km,n → ∞. Let pkm,n (X) = (p01 (X), ..., p0km,n (X)) . It
is now obvious that the conditional moment restrictions (2.8) E[ρ(Z, θo )|X] = 0 can be estimated via
                                                
the sieve MD criterion (2.13) using gn (θ) = n1 nt=1 ρ(Zt , θ) ⊗ pkm,n (Xt ).
   Not only is it possible for both the sieve MD, (2.12), and the sieve GMM, (2.13), to estimate all the
models belonging to the conditional moment restrictions (2.8), but they are also very closely related.
For example, when applying the sieve MD (2.12) procedure, we could use the series LS estimator (2.15)
as an estimator of the conditional mean function m(X, θ) = E[ρ(Z, θ)|X]:
                                               
                                               n
                                  
                                  m(X, θ) =          ρ(Zj , θ)pkm,n (Xj ) (P  P )− pkm,n (X),                    (2.15)
                                               j=1

with P = (pkm,n (X1 ), ..., pkm,n (Xn )) where km,n → ∞ slowly as n → ∞, and (P  P )− the Moore-Penrose
inverse. The resulting sieve MD (2.12) with identity weighting Σ(X    t ) = I will become the following
sieve GMM (2.13):
                       n                                                         n
                                                                                
               min           ρ(Zi , θ) ⊗ pkm,n (Xi )              I ⊗ (P  P )−       ρ(Zi , θ) ⊗ pkm,n (Xi ) ,    (2.16)
               θ∈Θn
                       i=1                                                        i=1
where ⊗ denotes the Kronecker product; see Ai and Chen (2003) for details.

Example 2.2 continued : The semi-nonparametric endogenous expenditure speciﬁcation (2.4) of Example
                                                   i , θ) = (m
2.2 can be estimated by the sieve MD (2.12), with m(X                             N (Xi , θ)) ,
                                                               1 (Xi , θ), ..., m
                           
                           n
                                                                   
            (Xi , θ) =
          m                      [Y1j − {h1 (Y2j − g(X1j β1 )) + X1j β2 }]pkm,n (Xj ) (P  P )− pkm,n (Xi ),
                           j=1


                                                                    15
where θ = (β  , h ) = (β1 , β21
                                  , ..., β  , h , ..., h
                                           2N    11
                                                              
                                                          1N ) is the vector of unknown parameters, and Θn =
                                N
B × Hn = B1 × N      =1 B2 ×      =1 H1,n is the sieve space; see Blundell et al. (2001) for details.

Example 2.3 continued : The semi-nonparametric external habit speciﬁcation (2.7) of Example 2.3 can
be estimated by the sieve GMM criterion (2.16), with ρ(Zt , θ) = (ρ1 (Zt , θ), ..., ρN (Zt , θ)) ,
                                                                 
                                        γ 1 − h Ct , ..., Ct+1−L −γ
                                     Ct              Ct+1    Ct+1
              ρ (Zt , θ) = δ                                   −γ R,t+1 − 1,  = 1, ..., N ,
                                    Ct+1              Ct−1   Ct−L
                                              1 − h Ct , ..., Ct
                                                                                        
                           Ct         Ct+1−L Ct−1        Ct−L
               Zt =            , ...,       ,     , ...,      , R1,t+1 , ..., RN,t+1 , Xt , Xt = wt ,
                          Ct+1         Ct+1   Ct          Ct
where θ = (β  , h) = (δ, γ, h) is the vector of unknown parameters, and Θn = B × Hn = Bδ × Bγ × Hn is
the sieve space, here 0 ≤ h < 1 is imposed on the sieve space Hn . Obviously, this model (2.7) can also
be estimated by the sieve MD (2.12), with m(X         t , θ) being a nonparametric estimator such
                                           t , θ) = m(w
as the series LS estimator (2.15) of E[ρ(Zt , θ)|Xt = wt ]; see Chen and Ludvigson (2003) for details.

2.3     Typical function spaces and sieve spaces

Here we will present some commonly used sieves whose approximation properties are already known in
the mathematical literature on approximation theory.

2.3.1    Typical smoothness classes and (ﬁnite-dimensional) linear sieves

We ﬁrst review the most popular smoothness classes of functions used in the nonparametric estimation
literature; see, e.g. Stone (1982, 1994), Robinson (1988), Newey (1997) and Horowitz (1998). Suppose
for the moment that X = X1 × ... × Xd is the Cartesian product of compact intervals X1 , . . . , Xd . Let
0 < γ ≤ 1. A real-valued function h on X is said to satisfy a Hölder condition with exponent γ if there
                                                                                           d      
                                                                                                  2 1/2 is
is a positive number c such that |h(x) − h(y)| ≤ c|x − y|γe for all x, y ∈ X ; here |x|e =   l=1 xl
the Euclidean norm of x = (x1 , . . . , xd ) ∈ X . Given a d-tuple α = (α1 , . . . , αd ) of nonnegative integers,
set [α] = α1 + · · · + αd and let Dα denote the diﬀerential operator deﬁned by

                                                               ∂ [α]
                                                 Dα =                       .
                                                        ∂xα1 1 . . . ∂xαd d

Let m be a nonnegative integer and set p = m + γ. A real-valued function h on X is said to be p-smooth
if it is m times continuously diﬀerentiable on X and Dα satisﬁes a Hölder condition with exponent γ
for all α with [α] = m.
   Denote the class of all p-smooth real-valued functions on X by Λp (X ) (called a Hölder class), and
the space of all m− times continuously diﬀerentiable real-valued functions on X by C m (X ). Deﬁne a



                                                           16
Hölder ball with smoothness p = m + γ as

                                                                             |Dα h(x) − Dα h(y)|
             Λpc (X ) = {h ∈ C m (X ) : sup |h(x)| ≤ c, sup        sup                           ≤ c}.
                                        x∈X                [α]=m x,y∈X ,x=y       |x − y|γe

The Hölder (or p-smooth) class of functions are popular in econometrics because a p-smooth function
can be approximated well by various linear sieves.
    A sieve is called a “(ﬁnite-dimensional) linear sieve” if it is a linear span of ﬁnitely many known
basis functions. Linear sieves, including power series, Fourier series, splines and wavelets, form a large
class of sieves useful for sieve extremum estimation. We now provide some examples of commonly used
linear sieves for univariate functions with support X = [0, 1].
    Polynomials. Let Pol(Jn ) denote the space of polynomials on [0, 1] of degree Jn or less; that is,
                                               
                                                Jn                               
                                 Pol(Jn ) =           ak xk , x ∈ [0, 1] : ak ∈ R .
                                                k=0

    Trigonometric polynomials. Let TriPol(Jn ) denote the space of trigonometric polynomials on
[0, 1] of degree Jn or less; that is,
                                
                                 Jn                                                        
              TriPol(Jn ) = a0 +    [ak cos(2kπx) + bk sin(2kπx)], x ∈ [0, 1] : ak , bk ∈ R .
                                     k=1

Let cos Pol(Jn ) denote the space of cosine polynomials on [0, 1] of degree Jn or less; that is,
                                                
                                                 Jn                                 
                         cos Pol(Jn ) =     a0 +    ak cos(kπx), x ∈ [0, 1] : ak ∈ R .
                                                 k=1

Let sin Pol(Jn ) denote the space of sine polynomials on [0, 1] of degree Jn or less; that is,
                                             
                                              Jn                                     
                            sin Pol(Jn ) =           ak sin(kπx), x ∈ [0, 1] : ak ∈ R .
                                               k=1

We note that the classical trigonometric sieve, TriPol(Jn ), is well suited for approximating periodic
functions on [0, 1], while the cosine sieve, cos Pol(Jn ), is well suited for approximating aperiodic functions
on [0, 1] and the sine sieve, sin Pol(Jn ), can approximate functions vanishing at the boundary points
(i.e., when h(0) = h(1) = 0).
    Univariate splines. Let Jn be a positive integer, and let t0 , t1 , . . . , tJn , tJn +1 be real numbers
with 0 = t0 < t1 < · · · < tJn < tJn +1 = 1. Partition [0, 1] into Jn + 1 subintervals Ij = [tj , tj+1 ),
j = 0, . . . , Jn − 1, and IJn = [tJn , tJn +1 ]. We assume that the knots t1 , . . . , tJn have bounded mesh ratio:

                             max0≤j≤Jn (tj+1 − tj )
                                                    ≤ c for some constant c > 0.                             (2.17)
                             min0≤j≤Jn (tj+1 − tj )

                                                           17
Let r ≥ 1 be an integer. A function on [0, 1] is a spline of order r, equivalently, of degree m ≡ r − 1,
with knots t1 , . . . , tJn if the following hold: (i) it is a polynomial of degree m or less on each interval Ij ,
j = 0, . . . , Jn ; and (ii) (for m ≥ 1) it is (m − 1)-times continuously diﬀerentiable on [0, 1]. Such spline
functions constitute a linear space of dimension Jn + r. For detailed discussions of univariate splines;
see de Boor (1978) and Schumaker (1981). For a ﬁxed integer r ≥ 1, we let Spl(r, Jn ) denote the space
of splines of order r (or of degree m ≡ r − 1) with Jn knots satisfying (2.17). Since
                             
                              r−1        
                                         Jn                                                
               Spl(r, Jn ) =          k
                                  ak x +    bj [max{x − tj , 0}] , x ∈ [0, 1] : ak , bj ∈ R ,
                                                                r−1

                                     k=0            j=1

we also call Spl(r, Jn ) the polynomial spline sieve of degree m ≡ r − 1.
                                                                                                                 
                                                                                                                 X |h(x)| dx < ∞.
          In this chapter, L2 (X , leb) denote the space of real-valued functions h such that                            2

   Wavelets. Let m ≥ 0 be an integer. A real-valued function ψ is called a “mother wavelet” of degree
                                   
m if it satisﬁes the following: (i) R xk ψ(x)dx = 0 for 0 ≤ k ≤ m; (ii) ψ and all its derivatives up to
order m decrease rapidly as |x| → ∞; (iii) {2j/2 ψ(2j x − k) : j, k ∈ Z} forms a Riesz basis of L2 (R, leb),
in the sense that the linear span of {2j/2 ψ(2j x − k) : j, k ∈ Z} is dense in L2 (R, leb) and there exist
positive constants c1 ≤ c2 < ∞ such that
                                                          2
              ∞   ∞            ∞   ∞                                                               ∞
                                                                                                                ∞
                                                                                                                 
                                                          
          c1                 2  
                       |ajk | ≤           ajk 2 ψ(2 x − k)
                                                j/2 j
                                                                                                 ≤ c2                |ajk |2
                                                           
             j=−∞ k=−∞          j=−∞ k=−∞                                                             j=−∞ k=−∞
                                                                                    L2 (R,leb)

for all doubly bi-inﬁnite square-summable sequence {ajk : j, k ∈ Z}.
          A scaling function φ is called a “father wavelet” of degree m if it satisﬁes the following: (i)

    R φ(x)dx      = 1; (ii) φ and all its derivatives up to order m decrease rapidly as |x| → ∞; (iii)
{φ(x − k) : k ∈ Z} forms a Riesz basis for a closed subspace of L2 (R, leb).
          Orthogonal wavelets. Given an integer m ≥ 0, there exist a father wavelet φ of degree m and a
mother wavelet ψ of degree m, both compactly supported, such that for any integer j0 ≥ 0, any function
g in L2 (R, leb) has the following wavelet m− regular multiresolution expansion:
                                           ∞
                                                                    ∞ 
                                                                      ∞
                               g(x) =            aj0 k φj0 k (x) +               bjk ψjk (x),    x ∈ R,
                                          k=−∞                       j=j0 k=−∞

where
                                      
                           ajk =            g(x)φjk (x)dx,      φjk (x) = 2j/2 φ(2j x − k),         x ∈ R,
                                        R
                                      
                           bjk =            g(x)ψjk (x)dx,      ψjk (x) = 2j/2 ψ(2j x − k),             x ∈ R,
                                        R
and {φj0 k , k ∈ Z; ψjk , j ≥ j0 , k ∈ Z} is an orthonormal16 basis of L2 (R, leb); see Meyer (1992, theorem
3.3).
     16
           R                              R                                                      R
R     i.e., R ψjk (x)ψjk (x)dx = 1 and R ψjk (x)ψRj  k (x)dx = 0 for j = j  or k = k ; also R φj0 k (x)φj0 k (x)dx = 1 and
     φ (x)φj0 k (x)dx = 0 for k = k ; in addition R φj0 k (x)ψjk (x)dx = 0 for j ≥ j0 .
    R j0 k



                                                                     18
    For j ≥ 0 and 0 ≤ k ≤ 2j − 1, denote the periodized wavelets on [0, 1] by
                                                                                  
            φ∗jk (x) = 2j/2         φ(2j x + 2j l − k),          ∗
                                                                ψjk (x) = 2j/2           ψ(2j x + 2j l − k),    x ∈ [0, 1].
                              l∈Z                                                  l∈Z

For j0 ≥ 0, the collection {φ∗j0 k , k = 0, · · · , 2j0 − 1; ψjk
                                                              ∗ , j ≥ j , k = 0, . . . , 2j − 1} is an orthonormal basis
                                                                       0

of L2 ([0, 1], leb) (see Daubechies, 1992). We consider the ﬁnite-dimensional linear space spanned by this
wavelet basis. For an integer Jn > j0 , set
                                2
                                  j0 −1
                                                                 n −1 2
                                                                J     j −1                                              
                       Jn
            Wav(m, 2 ) =                   αj0 k φ∗j0 k (x) +                      ∗
                                                                              βjk ψjk (x), x ∈ [0, 1] :   αj0 k , βjk ∈ R
                                     k=0                        j=j0 k=0

or, equivalently (see Meyer, 1992),
                                                    2J
                                                       n −1                                          
                              Wav(m, 2 ) = Jn
                                                                αk φ∗Jn k (x), x ∈ [0, 1] :    αk ∈ R .
                                                       k=0

    Tensor product spaces. Let U , 1 ≤  ≤ d, be compact sets in Euclidean spaces and U =
U1 × ... × Ud be their Cartesian product. Let G be a linear space of functions on U for 1 ≤  ≤ d,
each of which can be any of the sieve spaces described above, among others. The tensor product, G, of
                                                                                 
G1 , . . . , Gd is deﬁned as the space of functions on U spanned by the functions d=1 g (x ), where g ∈ G
                                              
for 1 ≤  ≤ d. We note that dim(G) = d=1 dim(G ). Tensor-product construction is a standard way
to generate linear sieves of multivariate functions from linear sieves of univariate functions.
    Linear sieves are attractive because of their simplicity and ease of implementation. Moreover, linear
sieves can approximate functions in a Hölder space, Λp (X ), well. In the following we let θ denote a
real-valued function with a bounded domain X ⊂ Rd , θ∞ ≡ supx∈X |θ(x)| denote its L∞ norm, and
            
θ2,leb ≡ { X [θ(x)]2 dx/vol(X )}1/2 be the scaled L2 norm relative to Lebesgue measure on X . Deﬁne
the sieve approximation errors to θo ∈ Λp (X ) in L∞ (X , leb)-norm and L2 (X , leb)-norm as

                              ρ∞n ≡ inf ||g − θo ||∞              and ρ2n ≡ inf ||g − θo ||2,leb .
                                        g∈Θn                                        g∈Θn

It is obvious that ρ2n ≤ ρ∞n . For a multivariate function θo ∈ Θ = Λp ([0, 1]d ), we consider the tensor
product linear sieve space Θn , which is constructed as a tensor product space of some commonly used
univariate linear approximating spaces Θn1 , . . . , Θnd . Let dim(Θn ) = kn and [p] be the biggest integer
satisfying [p] < p. Then we have the following tensor product sieve approximation error rates for
θo ∈ Λp ([0, 1]d ):
                                                                                                 −p/d
    Polynomials. If each Θn = Pol(Jn ), then ρ∞n = O(Jn−p ) = O(kn                                     ) (see e.g. Section 5.3.2 of
Timan, 1963).
    Trigonometric polynomials. If θo can be extended to a periodic function, and if each Θn =
                                                   −p/d
TriPol(Jn ), then ρ∞n = O(Jn−p ) = O(kn                   ) (see e.g. Section 5.3.1 of Timan, 1963).

                                                                    19
                                                                                    −p/d
   Splines. If each Θn = Spl(r, Jn ) with r ≥ [p] + 1, then ρ∞n = O(Jn−p ) = O(kn         ) (see (13.69) and
Theorem 12.8 of Schumaker, 1981).
                                                                                                       −p/d
   Orthogonal wavelets. If each Θn = Wav(m, 2Jn ) with m > p, then ρ∞n = O(2−pJn ) = O(kn                    )
(see Proposition 2.5 of Meyer, 1992).

2.3.2     Weighted smoothness classes and (ﬁnite-dimensional) linear sieves

In semi-nonparametric econometric applications, sometimes the parameters of interest are functions
with unbounded supports. Here we present two ﬁnite-dimensional linear sieves that can approximate
functions with unbounded supports well. In the following we let Lp (X , ω), 1 ≤ p < ∞ denote the space
                                    
of real-valued functions h such that X |h(x)|p ω(x)dx < ∞ for a smooth weight function ω : X → (0, ∞).
   Hermite polynomials. Hermite polynomial series {Hk : k = 1, 2, ......} is an orthonormal basis of
L2 (R, ω) with ω(x) = exp{−x2 }. It can be obtained by applying the Gram-Schmidt procedure to the
                                                                             
                    k−1 : k = 1, 2, ......} under the inner product f, g =
polynomial series {x                                                     ω   R f (x)g(x) exp{−x }dx.
                                                                                                2
                                            √
That is, H1 (x) = 1/ R exp{−x2 }dx = 1/ 2π, and for all k ≥ 2,
                                              k−1  k−1
                                       xk−1 − j=1   x , Hj ω Hj (x)
                    Hk (x) =            k−1 k−1                                  .
                                  [xk−1 −       x  , H      H   (x)]2 exp{−x2 }dx
                                R           j=1         j   ω   j


Let Hpol(Jn ) denote the space of Hermite polynomials on R of degree Jn or less:
                                     J
                                       n +1                                    
                                                             x2
                       Hpol(Jn ) =            ak Hk (x) exp{− }, x ∈ R : ak ∈ R .
                                                             2
                                        k=1

Then any function in L2 (R, leb) can be approximated by the Hpol(Jn ) sieve as Jn → ∞.
                                                              √
   When the Hpol(Jn ) sieve is used to approximate an unknown θo , where θo is a probability density
function over R, the corresponding sieve maximum likelihood estimation is also called SNP in econo-
metrics; see e.g. Gallant and Nychka (1987), Gallant and Tauchen (1989) and Coppejans and Gallant
(2002).
   Laguerre polynomials. Laguerre polynomial series {Lk : k = 1, 2, ......} is an orthonormal basis
of L2 ([0, ∞), ω) with ω(x) = exp{−x}. It can be obtained by applying the Gram-Schmidt procedure to
                                                                                 ∞
the polynomial series {xk−1 : k = 1, 2, ......} under the inner product f, gω = 0 f (x)g(x) exp{−x}dx.
Let Lpol(Jn ) denote the space of Laguerre polynomials on [0, ∞) of degree Jn or less:
                                   J
                                     n +1                                         
                                                           x
                     Lpol(Jn ) =            ak Lk (x) exp{− }, x ∈ [0, ∞) : ak ∈ R .
                                                           2
                                     k=1

Then any function in L2 ([0, ∞), leb) can be approximated by the Lpol(Jn ) sieve as Jn → ∞.



                                                      20
2.3.3   Other smoothness classes and (ﬁnite-dimensional) nonlinear sieves

Nonlinear sieves can also be used for sieve extremum estimation. A popular class of nonlinear sieves
in econometrics is single hidden layer feedforward Artiﬁcial Neural Networks (ANN). Here we present
three typical forms of ANNs; see Hornik et al. (1994) for additional ones.
   Sigmoid ANN. Deﬁne
                                       
                                        kn                                                 
                                                     
                      sANN(kn ) =              αj S(γj x + γ0,j ) : γj ∈ Rd , αj , γ0,j ∈ R ,
                                         j=1

where S : R → R is a sigmoid activation function, i.e., a bounded non-decreasing function such that
limu→−∞ S(u) = 0 and limu→∞ S(u) = 1. Some popular sigmoid activation functions include

   • heaviside S(u) = 1{u ≥ 0};

   • logistic S(u) = 1/(1 + exp{−u});

   • hyperbolic tangent S(u) = (exp{u} − exp{−u})/(exp{u} + exp{−u});
                                     u
   • Gaussian sigmoid S(u) = (2π)−1/2 −∞ exp(−y 2 /2)dy;

   • cosine squasher S(u) = 1+cos(u+3π/2)
                                  2       1{|u| ≤ π/2} + 1{u > π/2}.

   Let X be a compact set in Rd , and C(X ) be the space of continuous functions mapping from X to
R. Gallant and White (1988a) ﬁrst established that the sANN sieve with the cosine squasher activation
function is dense in C(X ) under the sup-norm. Cybenko (1989) and Hornik et al. (1989) show that the
sANN(kn ), with any sigmoid activation function, is dense in C(X ) under the sup-norm.
                                
    Let H = {h ∈ L2 (X , leb) : Rd |w||
                                       h(w)|dw < ∞}. This means h ∈ H if and only if it is square
                                                                               
integrable and its Fourier transform h has ﬁnite ﬁrst moment, where 
                                                                      h(w) ≡ exp(−iwx)h(x)dx is
the Fourier transform of h. Barron (1993) established that for any ho ∈ H, the sANN(kn ) sieve
approximation error rate in L2 (X , leb)-norm ρ2n is no slower than O([kn ]−1/2 ), which was later improved
to O([kn ]−1/2−1/(2d) ) in Makovoz (1996) for the sANN(kn ) with the heaviside sigmoid function, and to
O([kn ]−1/2−1/(d+1) ) in Chen and White (1999) for the sANN(kn ) with general sigmoid function.
   General ANN. Deﬁne
                           2
                             rk
                                n                                                                    
                                                        −m       
             gANN(kn ) =            αj [max{|γj |e , 1}]     ψ(γj x + γ0,j ) : γj ∈ R , αj , γ0,j ∈ R ,
                                                                                     d

                             j=1

where ψ : R → R is any activation function but not a polynomial with ﬁxed degree. In particular,
                                                                             
we often let ψ be a smooth function in a Hölder space Λm (R) and satisfy 0 < R |Dr ψ(x)|dx < ∞ for



                                                           21
some r ≥ m. This includes all the above sigmoid activation functions as special cases (with m = 0 and
r = 1); see Hornik et al. (1994) for additional examples.
                                                         
   Let H = {h ∈ L2 (X , µ) : h(x) = exp(ia x)dσh (a), Rd [max{|a|e , 1}]m+1 d|σh |tv (a) < ∞}, where
σh is a complex-valued measure, and |σh |tv denotes the total variation of σh . Let W2m (X , µ) be the
weighted Sobolev space of functions, where functions as well as all their partial derivatives (up to m-th
order) are L2 (X , µ)-integrable for a ﬁnite measure µ. It is known that a function in H also belongs
                                                 
to W2m (X , µ). Denote ||h||m,µ = { h(x)2 dµ(x) + |Dm h(x)|2e dµ(x)}1/2 as the weighted Sobolev norm.
Hornik et al. (1994) established that for any ho ∈ H, the gANN(kn ) sieve approximation error rate
in the weighted Sobolev norm (|| · ||m,µ ) is no slower than O([kn ]−1/2 ), which was later improved to
O([kn ]−1/2−1/(d+1) ) in Chen and White (1999).
   Gaussian radial basis ANN. Let X = Rd . Deﬁne
                         
                          kn                                                                
                                    {(x − γj ) (x − γj )}1/2
        rbANN(kn ) = α0 +    αj G                               : γj ∈ R , αj , σj ∈ R, σj > 0 ,
                                                                        d
                                                σj
                                    j=1

where G is the standard Gaussian density function. Let W1m (X ) be the Sobolev space of functions,
where functions as well as all their partial derivatives (up to m-th order) are L1 (X , leb)-integrable.
Meyer (1992) shows that rbANN(kn ) is dense in the smoothness class W1m (X ). Girosi (1994) established
that for any ho ∈ H, the rbANN(kn ) sieve approximation error rate in L2 (X , leb)-norm ρ2n is no slower
than O([kn ]−1/2 ), which was later improved to O([kn ]−1/2−1/(d+1) ) in Chen et al. (2001).
   Additional examples of nonlinear sieves include spline sieves with data-driven choices of knot loca-
tions (or free-knot splines), and wavelet sieves with thresholding. Nonlinear sieves are more ﬂexible and
may enjoy better approximation properties than linear sieves; see e.g., Chen and Shen (1998) for the
comparison of linear vs. nonlinear sieves.

2.3.4   Inﬁnite-dimensional (nonlinear) sieves and penalization

Most commonly used sieve spaces are ﬁnite-dimensional truncated series such as those listed above.
However, the general theory on sieve extremum estimation can also allow for inﬁnite-dimensional sieve
spaces. For example, consider the smoothness class Θ = Λp (X ) with X = [0, 1], p > 1/2. Then any
                                                                   
function θ ∈ Θ can be expressed as an inﬁnite Fourier series θ(x) = ∞
                                                                    k=1 [ak cos(kx) + bk sin(kx)]; its
derivative with fractional power γ ∈ (0, p] can also be deﬁned in terms of Fourier series:
                       ∞
                                           πγ          πγ                      πγ          πγ
          θ(γ) (x) =         k γ [(ak cos      + bk sin    ) cos(kx) + [(bk cos    − ak sin    ) sin(kx)].
                                             2           2                       2           2
                       k=1

Similarly, any function θ ∈ Θ = Λp (X ) and its fractional derivatives can be expressed as inﬁnite series
of splines and wavelets; see e.g. Meyer (1992).


                                                             22
   However, to make the function estimable given a ﬁnite sample, we must introduce a penalization
                    
term. Let pen(θ) ≡ ( X |θ(p) (x)|q dx)1/q for p > 1/2 and some integer q ≥ 1. Then we can take the sieves
to be Θn = {θ ∈ Θ : pen(θ) ≤ bn } with bn → ∞ as n → ∞ arbitrarily slowly; see e.g. Shen (1997).
                                                                n (θ), such as q = 2 for conditional mean
The choice of q is typically related to the criterion function Q
regression (Wahba, 1990), q = 1 (Koenker et al., 1994) and total variation norm (Koenker and Mizera,
2003) for quantile regressions.

2.3.5     Shape-preserving sieves

There are many sieves that can preserve the shape, such as non-negativity, monotonicity and convexity,
of the unknown function to be approximated. See e.g., DeVore (1977a, 1977b) on shape-preserving
spline and polynomial sieves, Anastassiou and Yu (1992a, 1992b) and Dechevsky and Penev (1997) on
shape-preserving wavelet sieves. Here we mention one of such shape-preserving sieves.
      Cardinal B-spline wavelets. The cardinal B-spline of order r ≥ 1 is given by
                                          
                                          r        
                                    1              r
                        Br (x) =            (−1)j
                                                        [max (0, x − j)]r−1 ,                                           (2.18)
                                 (r − 1)!          j
                                                      j=0

which has support [0, r], is symmetric at r/2 and is a piecewise polynomial of highest degree r − 1. It
                    
satisﬁes Br (x) ≥ 0, +∞
                      k=−∞ Br (x − k) = 1 for all x ∈ R, which is crucial to preserve the shape of the
                                                             ∂
unknown function to be approximated. Its derivative satisﬁes ∂x Br (x) = Br−1 (x) − Br−1 (x − 1). See
Chui (1992, chapter 4) for a recursive construction of cardinal B-splines and their properties.
      We can construct a cardinal B-spline wavelet basis for the space L2 (R, leb) as follows. Let φr (x) =
Br (x) be the father wavelet (or the scaling function). Then there is a “unique” mother wavelet function
ψr with minimum support [0, 2r − 1] and is given by
                              
                              3r−2                                             r 
                                                                                    
                                                                                   r
                   ψr (x) =          q Br (2x − ),                    1−r
                                                             q = (−1) 2                     B2r ( + 1 − j).
                                                                                       j
                              =0                                              j=0

Let
                     φr,jk (x) = 2j/2 Br (2j x − k),           ψr,jk (x) = 2j/2 ψr (2j x − k),        x ∈ R,

Then for an integer j0 ≥ 0, {φr,j0 k , k ∈ Z; ψr,jk , j ≥ j0 , k ∈ Z} is a Riesz basis of L2 (R, leb). Moreover,
any function g in L2 (R, leb) has the following spline-wavelet m = r−1 regular multiresolution expansion:
                              ∞
                                                                     ∞ 
                                                                       ∞
                    g(x) =                  j0 /2
                                      aj0 k 2       Br (2 x − k) +
                                                        j0
                                                                                     bjk ψr,jk (x),   x ∈ R,
                              k=−∞                                    j=j0 k=−∞

see Chui (1992, chapter 6). For an integer Jn > j0 = 0, set
                                 
                                  ∞                                n −1
                                                                  J       ∞
                                                                                                                   
        SplWav(r − 1, 2 ) =
                        Jn
                                            a0k Br (x − k) +                    βjk ψr,jk (x), x ∈ R : a0k , βjk ∈ R
                                     k=−∞                          j=0 k=−∞


                                                                 23
or, equivalently,17
                                                
                                                 ∞                                              
                     SplWav(r − 1, 2 ) =Jn
                                                        αk 2Jn /2
                                                                    Br (2 x − k), x ∈ R : αk ∈ R .
                                                                        Jn

                                                 k=−∞

Any non-decreasing continuous function on R can be approximated well by the SplWav(r − 1, 2Jn ) sieve
with non-decreasing sequence {αk } (i.e., αk ≤ αk+1 ). In particular, Let
                                              ∞
                                                                                         
                                                                           r
           MSplWav(r − 1, 2 ) = g(x) =
                             Jn
                                                   αk 2 Jn /2
                                                              Br (2 x − k + ) : αk ≤ αk+1
                                                                   Jn
                                                                           2
                                                       k=−∞

denote the monotone spline wavelet sieve. Then for any bounded non-decreasing continuous function θo
on R, the MSplWav(r − 1, 2Jn ), r ≥ 1, sieve approximation error rate in sup-norm is O(2−Jn ); for any
bounded non-decreasing continuously diﬀerentiable function θo on R, the MSplWav(r − 1, 2Jn ), r ≥ 2,
sieve approximation error rate in sup-norm is O(2−2Jn ); see e.g. Anastassiou and Yu (1992a).

2.3.6      Choice of a sieve space

The choice of a sieve space Θn = B × Hn depends on how well it approximates Θ = B × H and how
easily one can compute maxθ∈Θ Q  n (θ).
                                       n

                                                     n (θ) when the sieve space, Θn = B × Hn , is an
   In general, it will be easier to compute maxθ∈Θn Q
unconstrained ﬁnite-dimensional linear space. Moreover, if the criterion function, Q n (θ), is concave,
one can choose such a linear sieve, just as in the series estimation of a concave extended linear model
described in Subsection 2.2.2.
      However, the ease of computation should not be the only concern when one decides which sieve
to use in practice. This is because the large sample performance of a sieve estimate also depends on
the approximation properties of the chosen sieve. Unfortunately, a ﬁnite-dimensional linear sieve does
not always possess better approximation properties than some nonlinear sieves. For example, let us
consider the estimation of a multivariate conditional mean function ho (·) = E[Yt |Xt = ·] ∈ Θ. Let
                                                     
Θn be a sieve space. Then θ = h = arg maxh∈Θ −1 n [Yt − h(Xt )]2 is a sieve M-estimator of ho .
                                                n n    t=1
If Θ = Λ ([0, 1] ) is the space of p − smooth functions with p > d/2, then one can take Θn to be
        p       d

any of the ﬁnite-dimensional linear sieve space in Subsection 2.3.1, and the resulting estimator 
                                                                                                 h is a
series estimator. However, if Θ = W11 ([0, 1]d ) as deﬁned in Subsection 2.3.3, then it is better to choose
the sieve space, Θn , to be the nonlinear Gaussian radial basis ANN in Subsection 2.3.3; the resulting
estimator is still a sieve M-estimator but not a series estimator. See Section 3 for additional examples.
      How well a sieve, Θn , approximates Θ often depends on the support, the smoothness, the shape
restrictions of functions in Θ and the structure, such as additivity, non-negativity, exclusion restric-
tions, imposed by the econometric model. For example, a Hermite polynomial sieve can approximate
 17
      See Chen et al. (1998) for the approximation property of this sieve for twice diﬀerentiable functions on R.


                                                               24
a multivariate unknown smooth density with unbounded supports and relatively thin tails well, but
a power series sieve and a Fourier series sieve can not. This is why Gallant and Nychka (1987) con-
sidered Hermite polynomial sieve MLE since they wanted to approximate multivariate densities that
are smooth, have unbounded supports and include the multivariate normal density as a special case.
As another example, a ﬁrst-order monotone spline sieve can approximate any bounded monotone but
non-diﬀerentiable function well, and a third-order cardinal B-spline wavelet sieve can approximate any
bounded monotone diﬀerentiable function well. In Example 2.1, Heckman and Singer (1984, pages
300 and 301) did not want to impose any assumptions on the distribution function h(·) of the la-
tent random factor, hence they applied a ﬁrst-order monotone spline sieve to approximate it. In their
estimation of the ﬁrst eigenfunction of the conditional expectation operator associated with a fully non-
parametric scalar diﬀusion model, Chen et al. (1998) applied a shape-preserving third order cardinal
B-spline wavelet sieve to approximate the unknown ﬁrst eigenfunction, since the ﬁrst eigenfunction is
known to be monotone and twice continuously diﬀerentiable. As a ﬁnal example, in their sieve MD
estimation of the semi-nonparametric external habit model (2.7) of Example 2.3, Chen and Ludvigson
(2003) used the sANN sieve with logistic activation function to approximate the unknown habit function
                                                  
                                              Ct−L
H(Ct , Ct−1 , ..., Ct−L ) = Ct h CCt−1
                                    t
                                       , ...,  Ct    . This is partly because when L ≥ 3, the unknown smooth
function h : RL → [0, 1) can be approximated by a sANN sieve well, and partly because it is very easy
                                                                                          
                                                                                      Ct−L
to impose the habit constraint 0 ≤ H(Ct , Ct−1 , ..., Ct−L ) < Ct when h CCt−1
                                                                            t
                                                                               , ...,  Ct    is approximated
by the sANN sieve with logistic activation function.
      For a sieve estimate to be consistent with a fast rate of convergence, it is important to choose sieves
with good approximation error rates as well as controlled complexity.18 Nevertheless, for econometric
applications where the only prior information on the unknown functions is their smoothness and sup-
ports, the choice of a sieve space is not important, as long as the chosen sieve space has the desired
approximation error rate.

2.4      A small Monte Carlo study

To illustrate how to implement the sieve extremum estimation, we present a small Monte Carlo simu-
lation carried out using Matlab. The true model is: Y1 = X1 βo + ho1 (Y2 ) + ho2 (X2 ) + U with βo = 1,
ho1 (Y2 ) = 1/[1 + exp{−Y2 }] and ho2 (X2 ) = log(1 + X2 ). We assume that Y2 is endogenous and
Y2 = X1 + X2 + X3 + R × U + e with either R = 0.9 (strong correlation) or 0.1 (weak correlation).
Suppose that the regressors X1 , X2 , X3 are independent and uniformly distributed over [0, 1], and that
e is independent of (X, U ) and normally distributed with mean zero and variance 0.05. Conditional
on X = (X1 , X2 , X3 ) , U is normally distributed with mean zero and variance (X12 + X22 + X32 )/3.
Let Z = (Y1 , Y2 , X  ) . A random sample of n = 1000 data {Zi }ni=1 is generated from this design. An
 18
      This will become clear from the large sample theory discussed later in Section 3.


                                                             25
econometrician observes the simulated data {Zi }ni=1 , and wants to estimate θo = (βo , ho1 , ho2 ) , obeying
the conditional moment restriction:

                                  E[Y1i − {X1i βo + ho1 (Y2i ) + ho2 (X2i )}|Xi ] = 0.                             (2.19)

We note that this model is a generalization of the partially linear IV regression example E[Y1 − {X1 βo +
ho1 (Y2 )}|X] = 0 of Ai and Chen (2003) to a partially additive IV regression. Since ho1 (Y2 ) is an
unknown function of the endogenous variable Y2 , both examples belong to the so-called ill-posed inverse
problems.
       Let ρ(Z, θ) = Y1 − {X1 β + h1 (Y2 ) + h2 (X2 )} with θ = (β, h1 , h2 ) . We say that the parameters
θo = (βo , ho1 , ho2 ) are identiﬁed if E[ρ(Z, θ)|X] = 0 only when θ = θo . As a suﬃcient condition for the
identiﬁcation of θo , we assume that V ar(X1 ) > 0, h1 (y2 ) is a bounded function with supy2 |h1 (y2 )| ≤ 1
and that h2 (x2 ) satisﬁes h2 (0.5) = log(3/2). In particular, we assume that θo = (βo , ho1 , ho2 ) ∈ Θ = B×
                                                                                     
H1 × H2 with B a compact interval in R, H1 = {h1 ∈ C 2 (R) : supy2 |h1 (y2 )| ≤ 1, [D2 h1 (y2 )]2 dy2 < ∞}
                                                   
and H2 = {h2 ∈ C 2 ([0, 1]) : h2 (0.5) = log(3/2), [D2 h1 (x2 )]2 dx2 < ∞}.
       Since this model (2.19) ﬁts into the second subclass of the conditional moment restrictions (2.8)
with E[ρ(Z, θo )|X] = 0, we can apply the sieve MD criterion (2.12) to estimate θo = (βo , ho1 , ho2 ). We
take Θn = B × H1n × H2n as the sieve space, where
                                                                                      
                      h1 (y2 ) = Π1 B k1,n (y2 ) = 1j=0 2k=−1 πjk 2j/2 B3 (2j y2 − k) :
             H1n =                         2                                              ,
                                             [D h1 (y2 )]2 dy2 ≤ c1 log n
                                                                                      
                      h2 (x2 ) = Π2 B k2,n (x2 ) = 1j=0 0k=−1 πjk 2j/2 B3 (2j x2 − k) :
             H2n =                                     2                                  ;
                              h2 (0.5) = log(3/2), [D h2 (x2 )]2 dx2 ≤ c2 log n
that is, we have approximated both unknown functions h1 , h2 by a 3rd order cardinal B-spline sieve.
Recall that B3 (·) has support [0, 3], Y2 is largely supported within [0, 3] and X2 has support [0, 1]; we
end up with k1,n = 8 for h1 and k2,n = 4 for h2 .19
       As an illustration, we only consider the sieve MD estimation (2.12) using the identity weighting

Σ(X)                                           
     = I,20 and the series LS estimator as the m(X, θ) for the conditional mean function E[ρ(Z, θ)|X],
thus the criterion becomes
                                                    1
                                                          n
                                       min             {m(X
                                                         i , θ)}2 ,          with
                               β∈B,h1 ∈H1n ,h2 ∈H2n n
                                                         i=1
                               
                               n
                
                m(X, θ) =             [Y1j − {X1j β + h1 (Y2j ) + h2 (X2j )}]pkm,n (Xj ) (P  P )− pkm,n (X),
                                j=1

where in the simulation pkm,n (X) is taken to be the 4th degree polynomial spline sieve, with basis {1,
X1 , X12 , X13 , X14 , [max(X1 − 0.5, 0)]4 , X2 , X22 , X23 , X24 , [max(X2 − 0.5, 0)]4 , X3 , X32 , X33 , X34 , [max(X3 −
  19
       See Blundell et al. (2001) for a more detailed description on the choices of Hjn and kj,n , j = 1, 2
  20
       See Subsection 4.3 or Ai and Chen (2003) for the sieve MD procedure with the optimal weighting matrix.


                                                               26
0.1, 0)]4 , [max(X3 − 0.25, 0)]4 , [max(X3 − 0.5, 0)]4 , [max(X3 − 0.75, 0)]4 , [max(X3 − 0.90, 0)]4 , X1 X3 ,
X2 X3 , X1 [max(X3 −0.25, 0)]4 , X2 [max(X3 −0.25, 0)]4 , X1 [max(X3 −0.75, 0)]4 , X2 [max(X3 −0.75, 0)]4 }.
We note that the above criterion is equivalent to a constrained 2SLS with km,n = 26 instruments and
dim(Θn ) = 13 unknown parameters:

                                min          [Y1 − X1 β − BΠ] P (P  P )− P  [Y1 − X1 β − BΠ],
                      β∈B,h1 ∈H1n ,h2 ∈H2n


where Y1 = (Y11 , ..., Y1n ) , X1 = (X11 , ..., X1n ) , Π = (Π1 , Π2 ) , B1 = (B k1,n (Y21 ), ..., B k1,n (Y2n )) ,
B2 = (B k2,n (X21 ), ..., B k2,n (X2n )) and B = (B1 , B2 ) .
    Since ρ(Z, θ) is linear in θ = (β, h1 , h2 ) , the joint sieve MD estimation is equivalent to the proﬁle
sieve MD estimation for this model. We can ﬁrst compute a proﬁle sieve estimator for h1 (y2 ) + h2 (x2 ).
                                                                           
That is, for any ﬁxed β, we compute the sieve coeﬃcients Π by minimizing ni=1 {m(X i , θ)}2 subject
to the smoothness constraints imposed on the functions h1 and h2 :

                     R           min                 [Y1 − X1 β − BΠ] P (P  P )− P  [Y1 − X1 β − BΠ]                (2.20)
                   Π: [D2 h (y)]2 dy≤c log n,=1,2


for some upper bounds c > 0,  = 1, 2. Let Π(β)          be the solution to (2.20) and   h1 (y2 ; β) + 
                                                                                                          h2 (x2 ; β) =
(B k 1,n      
         (y2 ) , B k 2,n       
                         (x2 ) )Π(β) be the proﬁle sieve estimator of h1 (y2 ) + h2 (x2 ). Next, we estimate β by
βiv which solves the following 2SLS problem:

                                            
                           min[Y1 − X1 β − BΠ(β)]                               
                                                   P (P  P )− P  [Y1 − X1 β − BΠ(β)].                                (2.21)
                            β

Finally we estimate ho1 (y2 ) + ho2 (x2 ) by

                                 h1 (y2 ) + 
                                                                                       β̂iv ),
                                            h2 (x2 ) = (B k1,n (y2 ) , B k2,n (x2 ) )Π(

and then estimate ho1 and ho2 by imposing the location constraint h2 (0.5) = log(3/2):

                                                     2 (β̂iv ) − B k2,n (0.5) Π
                         h2,iv (x2 ) = B k2,n (x2 ) Π                            2 (β̂iv ) + log(3/2),

                                                     1 (β̂iv ) + B k2,n (0.5) Π
                         h1,iv (y2 ) = B k1,n (y2 ) Π                            2 (β̂iv ) − log(3/2).

   We note that although this model (2.19) belongs to the nasty ill-posed inverse problem, the above
proﬁle sieve MD procedure is very easy to compute, and in fact, β̂iv and Π(  β̂iv ) have closed form
solutions. To see this, we note that (2.20) is equivalent to

                                                                                    
                                                                                    2
            min (Y1 − X1 β − BΠ) P (P  P )− P  (Y1 − X1 β − BΠ) +                      λ {Π C Π − c log n},
            Π,λ
                                                                                    =1




                                                               27
                                                                                      
where for  = 1, 2, C =             [D2 B k,n (y)][D2 B k,n (y)] dy, Π C Π =       [D2 h (y)]2 dy and λ ≥ 0 is the
Lagrange multiplier. However, we do not want to specify the upper bounds c > 0,  = 1, 2, instead we
choose some small values as the penalization weights λ1 , λ2 , and solve the following problems:

                                                 
                                                                                             
                                                                                             2
                                                           −   
                    min (Y1 − X1 β − BΠ) P (P P ) P (Y1 − X1 β − BΠ) +                             λ Π C Π           (2.22)
                      Π
                                                                                             =1
                          !         "
                       λ1 C1    0
Denote C(λ1 , λ2 ) =                  as the smoothness penalization matrix. The minimization problem
                         0    λ2 C2
(2.22) has a simple closed form solution:
                                                    −
            
            Π(β) = B P (P  P )− P  B + C(λ1 , λ2 ) B P (P  P )− P  [Y1 − X1 β] = W [Y1 − X1 β],

                                                                                              
with W = (B P (P  P )− P  B + C(λ1 , λ2 ))− B P (P  P )− P  . Substituting the solution Π(β) into the 2SLS
problem (2.21), we obtain

         β̂iv = [X1 (I − BW ) P (P  P )− P  (I − BW )X1 ]−1 X1 (I − BW ) P (P  P )− P  (I − BW )Y1 ,

     β̂iv ) = W [Y1 − X1 β̂iv ].
and Π(
    For R = 0.9, 0.1 and 0.0, a sample of 1000 data points were generated according to the above
                                                                                      
design. The sieve MD procedure was applied to the data with identity weighting matrix Σ(X) = I and
the penalization weights λ1 = 0.005 (or 0.05) and λ2 = 0.001 (or 0.01) for simplicity. The estimated
coeﬃcients were recorded. Then, a new sample of 1000 data points were drawn and the estimated
coeﬃcients were computed again. This procedure was repeated 200 times. The mean (M) and standard
error (SE) of the βo estimator across the 200 simulations are reported in Tables 1-2. To evaluate the
performance of the sieve MD estimators of the nonparametric components ho1 (Y2 ) and ho2 (X2 ), we
report their integrated squared biases (I-Bias2 ) and the integrated mean squared errors (I-MSE) across
the 200 simulations in Tables 1-2.21 Table 1 summarizes the performance of the estimators across
diﬀerent degrees of endogeneity, and Table 2 summarizes the sensitivity of the estimators to diﬀerent
choices of sieve bases and penalization parameters. We also plot the estimated functions ho1 (Y2 ) and
ho2 (X2 ) corresponding to the strong correlation case (R = 0.9) in Figure 1, where the solid lines
represent the true functions and the dashed lines denote the sieve MD (or sieve IV) estimates. Since
both estimates are not sensitive to the choices of sieve bases, we only graph the ones estimated using
third-order B-splines with second order derivative penalization.
  21
     The I-Bias2 (b
                  h1 ) and I-MSE(   b
                                Ph1 ) in Table 1 are calculated as follows. Let ĥi be the estimate of ho1 from the i−th
simulated data set, and h(y) = 200  i=1 ĥi (y)/200 be the pointwise average across 200 simulations. We calculate the pointwise
                                                                          P
squared bias as [h(y) − ho1 (y)]2 , and the pointwise variance as 200−1 200                      2
                                                                             i=1 [ĥi (y) − h(y)] . The integrated squared bias is
calculated by numerically integrating the pointwise squared bias from y to y which are respectively the 2.5th and 97.5th
empirical percentiles of Y2 ; The integrated MSE are computed in a similar way.



                                                                28
                            Table 1: MC Results, Diﬀerent Degree of Endogeneity
                 R     M(β)    SE(β) I-BIAS2 (h1 ) I-MSE(h1 ) I-BIAS2 (h2 ) I-MSE(h2 )
                                 Sieve for h1 = H1n , λ1 = 0.005, λ2 = 0.001
                 0.0   0.9934 0.1044        0.0002        0.0465       0.0000   0.0016
                 0.1   0.9943 0.1040        0.0002        0.0480       0.0000   0.0016
                 0.9   0.9378 0.1002        0.0305        0.1919       0.0002   0.0018
                                   Sieve for h1 = H1n , λ1 = 0.05, λ2 = 0.01
                 0.0   0.9932 0.0930        0.0001        0.0173       0.0000   0.0016
                 0.1   0.9972 0.0915        0.0000        0.0164       0.0000   0.0014
                 0.9   0.9314 0.0836        0.0279        0.0831       0.0003   0.0017

                               Table 2: MC Results, Diﬀerent Sieve Bases for h1
                 R     M(β) SE(β) I-BIAS2 (h1 ) I-MSE(h1 ) I-BIAS2 (h2 ) I-MSE(h2 )
                             Sieve for h1 : BSpline with 1st derivative Penalization
                                              λ1 = 0.005, λ2 = 0.001
             0.9       0.9424 0.0991         0.0094        0.2771        0.0002        0.0018
                                               λ1 = 0.05, λ2 = 0.01
             0.9       0.9326 0.1000         0.0132        0.1783        0.0002        0.0018
                                                              st
                          Sieve for h1 : Hermite Poly. with 1 derivative Penalization
                                              λ1 = 0.005, λ2 = 0.001
             0.9       0.9405 0.0885         0.0110        0.1287        0.0002        0.0018
                                               λ1 = 0.05, λ2 = 0.01
             0.9       0.9306 0.0921         0.0127        0.1621        0.0003        0.0018
                          Sieve for h1 : Hermite Poly. with 2nd derivative Penalization
                                              λ1 = 0.005, λ2 = 0.001
             0.9       0.9411 0.0950         0.0089        0.1231        0.0000        0.0019
                                               λ1 = 0.05, λ2 = 0.01
             0.9       0.9378 0.0945         0.0070        0.0850        0.0002        0.0016

   Tables 1 - 2 and Figure 1 indicate that even under strong correlation, the sieve MD estimates of βo
and ho2 (X2 ) perform well. We ﬁnd that the sieve IV estimates of βo and ho2 (X2 ) are not sensitive to
the choices of the penalization parameters λ1 , λ2 , nor to the choices of sieve bases for ho1 (Y2 ). The sieve
IV estimate of ho1 (Y2 ) is also not very sensitive to the choices of sieve bases, although it is slightly more
sensitive to the penalization parameter λ1 under strong correlation. Since under strong correlation,
the estimation of ho1 (Y2 ) is a nasty ill-posed inverse problem, as the penalization parameter λ1 gets
smaller, the integrated squared bias of ho1 () does not change much but the integrated variance of ho1 ()
increases more. These ﬁndings are consistent with the more detailed Monte Carlo studies in Blundell
et al. (2001).




                                                      29
             1.2                                                    0.8

                                                                    0.7
             1.0
                                                                    0.6

             0.8                                                    0.5

                                                                    0.4
             0.6                                                    0.3

                                                                    0.2
             0.4
                                                   −y −1
                              True h1(y2) = (1 + e   )
                                                     2
                                                                    0.1                True, h2(x2) = ln(1 + x2)
                              Estimated function                                       Estimated function
             0.2                                                      0
                0             1            2               3           0                   0.5                     1

                    Graphs of true and estimated functions with R = 0.9, λ1 = 0.05, λ2 = 0.01.

2.5    An incomplete list of sieve applications in econometrics

We conclude this section by listing a few applications of the sieve extremum estimation in econometrics.22
Most of the existing applications are done in microeconometrics. Elbadawi et al. (1983) studied Fourier
series LS estimation of demand elasticity. Cosslett (1983) proposed nonparametric ML estimation of a
binary choice model. Heckman and Singer (1984) considered sieve ML estimation of a duration model
where the unknown error distribution is approximated by a ﬁrst-order spline. Their estimation procedure
was also applied in Cameron and Heckman (1998) to a life-cycle schooling problem. Duncan (1986)
used spline sieve MLE in estimating a censored regression. Hausman and Newey (1995) considered
power series and spline series LS estimation of consumer surplus. Hahn (1998) and Imbens et al.
(2005) used power series and splines in the two-step eﬃcient estimation of the average treatment eﬀect
models. Newey et al. (1999), and Pinkse (2000) considered series estimation of a triangular system
of simultaneous equations. To estimate semiparametric generalizations of Heckman’s (1979) sample
selection model, Gallant and Nychka (1987) proposed the Hermite polynomial sieve MLE, while Newey
(1988) and Das et al. (2003) applied the series LS estimation method. Recently, Newey (2001) used
the sieve MD procedure to estimate a nonlinear measurement error model. Blundell et al. (2001)
considered a proﬁle sieve MD procedure to estimate shape-invariant Engel curves with nonparametric
endogenous expenditure. Coppejans (2001, 2002) proposed sieve ML estimation of a binary choice
model and of an ordered response model. Khan (2002) considered a sieve LS estimation of a probit
  22
    Although restricting our attention to economic applications only, it is still impossible to mention all the existing
applications of sieve methods in econometrics. Any omissions reﬂect my lack of awareness and are purely unintentional.


                                                               30
binary choice model with unknown heteroskedasticity. Hirano et al. (2003) proposed a sieve logistic
regression to estimate propensity score for treatment eﬀect models. Beresteanu (2004) applied shape
restricted B-splines to estimate cost functions subject to monotonicity and supermodularity restrictions.
Mahajan (2004) estimated a semiparametric single index model with binary misclassiﬁed regressors via
sieve MLE. Chen et al. (2004a) studied sieve MLE of semi-nonparametric multivariate copula models.
Chen et al. (2005) made use of spline sieves to estimate nonlinear non-classical measurement error
models with an auxiliary sample. Their estimation procedure was shown in Chen et al. (2004b) to
be semiparametrically eﬃcient for general nonlinear GMM models of non-classical measurement errors,
missing data and treatment eﬀects. Brendstrup and Paarsch (2004) applied Hermite and Laguerre
polynomial sieve MLE to estimate sequential asymmetric English auctions.
    There have also been many applications of the method of sieves in time series econometrics. En-
gle et al. (1986) forecasted electricity demand using a partially linear spline regression. Engle and
Gonzalez-Rivera (1991) applied sieve MLE to estimate ARCH models where the unknown density of
the standardized innovation is approximated by a ﬁrst order spline sieve. Gallant and Tauchen (1989)
and Gallant et al. (1991) employed Hermite polynomial sieve MLE to study asset pricing and foreign
exchange rates. Gallant and Tauchen (1996, 2001, 2004) have proposed the combinations of Hermite
polynomial sieve and simulated method of moments to eﬀectively solve many complicated asset pricing
models with latent factors, and their methods have been widely applied in empirical ﬁnance. Bansal
and Viswanathan (1993), Bansal et al. (1993) and Chapman (1997) considered sieve approximation of
the whole stochastic discount factor (or pricing kernel) as a function of a few macroeconomic factors.
White (1990) and Granger and Terasvirta (1993) suggested nonparametric LS forecasting via sigmoid
ANN sieve. Hutchinson et al. (1994) applied radial basis ANN to option pricing. Chen et al. (2001)
used partially linear ANN and ridgelet sieves to forecast US inﬂation. McCaﬀrey et al. (1992) estimated
the Lyapunov exponent of a chaotic system via ANN sieves.23 Chen and Ludvigson (2003) employed a
sigmoid ANN sieve to estimate the unknown habit function in a consumption asset pricing model. Polk
et al. (2003) applied sigmoid ANN to compute conditional quantile in testing stock return predictability.
Chen et al. (1998) employed a shape-preserving spline-wavelet sieve to estimate the eigenfunctions of
a fully nonparametric scalar diﬀusion model from discrete-time low-frequency observations. Chen and
Conley (2001) made use of the same sieve to estimate a spatial temporal model with ﬂexible conditional
mean and conditional covariance.24 Recently Engle and Rangel (2004) proposed a new Spline GARCH
model to measure unconditional volatility and have applied it to equity markets for 50 countries for up
   23
      Their work is closely related to the estimation of derivative of a multivariate unknown regression function via ANN
sieves in Gallant and White (1992). Recently Shintani and Linton (2003) proposed a nonparametric test of chaos via ANN
sieves.
   24
      Although the ﬂexible speciﬁcation of the conditional mean part in Chen and Conley (2001) is motivated from their
economic application, but it turns out to be closely related to the functional-coeﬃcient regression model of Cai et al.
(2000) in statistics.


                                                           31
to 50 years of daily data. See Fan and Yao (2003) for additional applications to ﬁnancial time series
models.


3         Large Sample Properties of Sieve Estimation of Unknown Func-
          tions
We already know that the sieve method is very general and easily implementable. In this section, we
shall ﬁrst establish that, under mild regularity conditions, the sieve extremum estimation will consis-
tently estimate both ﬁnite-dimensional and inﬁnite-dimensional unknown parameters. However, for
econometric and statistical inference, one would like to know how accurate a consistent sieve estimator
might be given a ﬁnite data set and what its limiting distribution is. Unfortunately there does not yet
exist a general theory of pointwise limiting distribution for a sieve extremum estimator of an unknown
function. There are a few results on pointwise limiting distribution for series estimators of densities and
LS regression functions, which we shall review at the end of this section. However, all is not lost. We do
have a well developed theory on root-n asymptotic normality of sieve estimators of smooth functionals25
of unknown functions.
                                                                  √
         As we shall see in Section 4, in order to derive             n− asymptotic normality and semiparametric
eﬃciency of sieve estimators of parametric components in a semi-nonparametric model, the sieve esti-
mators of the nonparametric components should converge to the true unknown functions at rates faster
than n−1/4 under certain metric. This motivates the importance of establishing rates of convergence for
sieve estimators of unknown functions even when the unknown functions are nuisance parameters (i.e.,
not the parameters of interest). Moreover, when an unknown function is also a parameter of interest in
a nonparametric or a semi-nonparametric model, the convergence rate will provide useful information
on the accuracy of a sieve estimator for a given ﬁnite sample size. Unfortunately, to date there is no
uniﬁed theory on rates of convergence for the general sieve extremum estimators of unknown functions
either.26 Nevertheless, the theory on convergence rates of sieve M-estimators is by now well developed.
         In this section we ﬁrst provide a consistency theorem on general sieve extremum estimation in sub-
    25
     See Section 4 for the deﬁnition of a “smooth functional”. Here it suﬃces to know that regular ﬁnite-dimensional
parameters and average derivatives of unknown functions are examples of smooth functionals.
  26
     Van der Vaart and Wellner (1996, theorem 3.4.1) stated an abstract rate result for sieve extremum estimation. However,
as they admitted, the main challenge for the application of their theorem 3.4.1 is to derive a maximal inequality with rate
                         √ b                                                                              b
for the centered process n(Q   n − Q), which is currently not available for general extremum criterion Qn . To the best of
our knowledge, at this moment there is only one paper (Ai and Chen, 2003) that derived the convergence rates for the sieve
MD estimates θbn of θo = (βo , ho ) satisfying the semiparametric conditional moment restrictions E[ρ(Z, βo , ho (·))|X] = 0,
where the unknown ho (·) could depend on the endogenous variables Y . However, since the unknown functions ho are
eﬀectively treated as nuisance parameters in their framework, they only care about the establishment of convergence rates
faster than n−1/4 under their root mean squared metric; see Section 4 for more discussion. Although there are a few results
on convergence rates of purely nonparametric sieve MD estimation of ho in speciﬁc models; see e.g. Blundell et al. (2001)
and Hall and Horowitz (2005) for the model E[Y1 − ho (Y2 )|X] = 0, it is fair to say that there is still lack of a general
theory on rates of convergence for sieve extremum estimators.


                                                             32
section 3.1. We then review the existing results on convergence rates and pointwise limiting distributions
for sieve M-estimators of unknown functions. We begin this discussion with a survey of the convergence
rate results for general sieve M-estimators of unknown functions in subsection 3.2 and illustrate how
to verify the technical conditions assumed for the general result with two examples. Although series
estimation is a special case of sieve M-estimation, due to its special properties (i.e., concave criterion and
ﬁnite-dimensional linear sieve space), the convergence rate of a series estimator can be derived under
alternative suﬃcient conditions, which will be reviewed in subsection 3.3. Subsection 3.4 presents the
existing results on the pointwise normality of the series estimator in the special case of a LS regression
function.

3.1      Consistency of sieve extremum estimators

The general consistency results for sieve extremum estimates are similar to the classical consistency
results for parametric nonlinear extremum estimates, except that we do not assume the compactness
of the entire parameter space Θ; instead we require that the union ∪n Θn of the sieve spaces is dense
in Θ. For i.i.d. data, Geman and Hwang (1982) obtained the consistency of sieve MLE; Gallant (1987)
and Gallant and Nychka (1987) derived the consistency of sieve M-estimates. Newey and Powell (2003)
established the consistency of sieve MD estimates. For dependent and possibly heterogeneous processes
White and Wooldridge (1991) obtained the consistency of sieve extremum estimates.27 In the following
we present a consistency theorem that extends theorem 2.1 of Newey and McFadden (1994) and lemma
A1 of Newey and Powell (2003) to allow for non-compact inﬁnite-dimensional Θ.
   Let d(·, ·) be a metric on Θ. In particular, when Θ = B × H where B is a subset of some Euclidean
space and H is a subset of some normed function space, we can use d(θ, θ)          2 + h − 
                                                                        = (|β − β|          h2 )1/2 ,
                                                                                                     e            H
where | · |e denotes the Euclidean norm, and  · H is a norm imposed on the function space H. For
example, if H = C m (X ), we could take hH = h∞ or h2,leb .

Condition 3.1. (identiﬁcation) Q(θ) is uniquely maximized on Θ at θo ∈ Θ, and Q(θo ) > −∞.

Condition 3.2. (sieve spaces) Θn ⊆ Θn+1 ⊆ Θ for all n ≥ 1; and for any θ ∈ Θ there exists πn θ ∈ Θn
such that d(θ, πn θ) → 0 as n → ∞.

Condition 3.3. (continuity) The criterion, Q(θ), is continuous in θ ∈ Θ with respect to d(·, ·).

Condition 3.4. (compact sieve space) The sieve spaces, Θn , are compact under d(·, ·).
                                                                   n (θ) − Q(θ)| = 0.
Condition 3.5. (uniform convergence over sieves) plimn→∞ supθ∈Θn |Q

      Note that when Θn = Θ, conditions 3.4 and 3.5 become the standard assumptions imposed for con-
sistency of parametric extremum estimation in Newey and McFadden (1994). For semi-nonparametric
 27
      Based on a recent theorem of Stinchcombe (2002), the consistency of sieve extremum estimates is a generic property.


                                                            33
models, the entire parameter space Θ contains inﬁnite-dimensional unknown functions and is generally
non-compact.28 Nevertheless, one can easily construct compact approximating parameter spaces (sieves)
Θn . Moreover, it is relatively easy to verify the uniform convergence over compact sieve spaces,29 while
“plimn→∞ supθ∈Θ |Q   n (θ) − Q(θ)| = 0” may fail when the space Θ is too large (in the sense of not totally
bounded).

Theorem 3.1. Let θ̂n be the approximate sieve extremum estimator deﬁned by (2.9). If Conditions 3.1
- 3.5 hold, then d(θ̂n , θo ) = oP (1).

Proof. 30 Let δ > 0 and ε > 0 be any small real numbers. By the deﬁnition of θn we have with
                                       n (θn ) > Q
probability approaching one (w.p.a.1) Q             n (θn ) − δ for all θn ∈ Θn . This and the fact πn θo ∈
                                                               3
                                               
Θn (Condition 3.2) imply w.p.a.1 Qn (θn ) > Qn (πn θo ) − δ . By uniform convergence over the sieve
                                                                      3
space (Condition 3.5), we have w.p.a.1, Q  n (θn ) − Q(θn ) < δ and Q
                                                                        n (πn θo ) − Q(πn θo ) > − δ . Thus
                                                                 3                                  3
          n (θn ) > Q(πn θo ) − 2δ and Q(θn ) > Q(πn θo ) − δ. By Conditions 3.1, 3.3, and the fact
w.p.a.1, Q                            3
that d(πn θo , θo ) → 0 as n → ∞, there is an N ≥ 1 such that Q(θo ) ≤ Q(πn θo ) + 3δ for all n ≥ N .
Substituting this into the previous inequality we obtain w.p.a.1, Q(θn ) > Q(θo ) − (δ + δ ). For any     3
ε > 0, by Conditions 3.2, 3.3 and 3.4, we have sup{θ∈Θn :d(θ,θo )≥ε} Q(θ) exists. This, Condition 3.1 and
Θn ⊆ Θ imply Q(θo ) > sup{θ∈Θn :d(θ,θo )≥ε} Q(θ). Let δ + 3δ = Q(θo ) − sup{θ∈Θn :d(θ,θo )≥ε} Q(θ), then
w.p.a.1, Q(θn ) > sup           Q(θ). Since θn ∈ Θn , Θn ⊆ Θ and Q is continuous on Θ, we obtain
                        {θ∈Θn :d(θ,θo )≥ε}
d(θn , θo ) < ε w.p.a.1.

Remarks: (1) All the remarks after the consistency theorem 2.1 in Newey and McFadden (1994) apply
here. In particular, Condition 3.3 (continuity) can be changed to upper semicontinuity of Q(θ) on Θ, and
Condition 3.5 can be changed to plimn→∞ |Q    n (πn θo ) − Q(πn θo )| = 0 and for all δ > 0, Q
                                                                                               n (θ) < Q(θ) + δ
for all θ ∈ Θn with probability approaching one.
                     n (θ̂n ) ≥ supθ∈Θ Q
(2) If θ̂n satisﬁes Q                                                                                   n (θ)−
                                         n (θ)−oa.s. (1), then under Conditions 3.1 - 3.4 and supθ∈Θ |Q
                                          n                                                                    n

Q(θ)| = oa.s. (1), we have d(θn , θo ) = oa.s. (1) (almost sure consistency of sieve extremum estimate). This
extends Gallant’s (1987) theorem to allow for non-compact inﬁnite-dimensional Θ.
(3) Theorem 3.1 can be viewed as a special case of corollary 2.6 in White and Wooldridge (1991). Their
corollary implies d(θn , θo ) = oP (1) under Conditions 3.2, 3.4, 3.5 and Conditions 3.1’ and 3.3’:
Condition 3.1’ Q(θ) is continuous at θo in Θ, Q(θo ) > −∞, for all ε > 0, Q(θo ) > sup{θ∈Θ:d(θ,θo )≥ε} Q(θ).
  28
     In an inﬁnite-dimensional metric space endowed with a metric d(·, ·), a compact set is a d−closed and totally bounded
set. (A set is totally bounded if for any ε > 0, there exist ﬁnitely many open balls with radius ε that cover the set.) A
d−closed and bounded set is compact only in a ﬁnite-dimensional Euclidean space.
  29
     One could modify the proof of corollary 2.2 in Newey (1991) to provide suﬃcient conditions for Condition 3.5 in terms
of Conditions 3.3 - 3.4 and the pointwise convergence over Θn ; also see lemma 1 in Andrews (1992).
  30
     Proofs presented in this survey chapter are informal and can be formalized using probability and measure theory
languages; see e.g. Gallant and White (1988b) and White (1994).




                                                           34
                n (θ) is a measurable function of the data {Zt }n for all θ ∈ Θn , and is upper
Condition 3.3’ Q                                                 t=1
semicontinuous on Θn under the pseudo-metric d(·, ·) for any data {Zt }nt=1 .
       We note that although it is nice to allow for non-compact inﬁnite-dimensional Θ in Theorem 3.1, to
verify Condition 3.1 (or 3.1’) it is sometimes much easier to assume a compact Θ; see e.g. Newey and
Powell (2003).

3.2       General convergence rates of sieve M-estimators

There are many results on convergence rates of sieve M-estimators of unknown functions. For i.i.d.
data, Van de Geer (1995) obtained the rate for sieve LS regression. Shen and Wong (1994), and Birgé
and Massart (1998) derived the rates for general sieve M-estimation. Van de Geer (1993) and Wong
and Shen (1995) obtained the rates for sieve MLE. For time series data, Chen and Shen (1998) derived
the rate for sieve M-estimation of stationary beta-mixing models.31 The general theory on convergence
rates is technically involved and relies on the theory of empirical processes. In this section we present a
simple version of the rate results for sieve M-estimation whose conditions are easy to verify. However,
readers who are interested in the most general theory on convergence rates of sieve M-estimates are
encouraged to read the papers by Shen and Wong (1994), Wong and Shen (1995) and Birgé and Massart
(1998).
       Recall θo ∈ Θ and that the approximate sieve M-estimate θn solves:

                                  
                                  n                                 
                                                                    n
                             −1                                −1
                         n              l(θ̂n , Zt ) ≥ sup n              l(θ, Zt ) − OP (ε2n ) with εn → 0.              (3.1)
                                  t=1               θ∈Θn            t=1
                          n
Let K(θo , θ) ≡ n−1     t=1 E(l(θo , Zt )−l(θ, Zt )).
                                                     32 Let d(θ , θ) be a metric on Θ that is equivalent to K 1/2
                                                               o

[i.e., there exist constants c1 , c2 > 0 such that c1 K (θo , θ) ≤ d(θo , θ) ≤ c2 K 1/2 (θo , θ) for all θ ∈ Θ].
                                                          1/2

We shall give a convergence rate for sieve estimate θ̂n under d(θo , θ), and thus automatically give an
upper bound on d(θo , θ̂n ), where d is any other metric on Θ satisfying d(θo , θ) ≤ const.K 1/2 (θo , θ).
   In order for θn to converge to θo at a fast rate under the metric d(θo , θn ), not only does the sieve
approximation error rate, d(θo , πn θo ), have to approach zero suitably fast, but additionally, the sieve
space, Θn , must not be too complex. This motivates us to brieﬂy introduce two diﬀerent notions of
complexity for classes of functions. Let Lr (Po ), r ∈ [1, ∞), denote the space of real-valued random
variables with ﬁnite r−th moments and  · r denote the Lr (Po )-norm. Let Fn = {g(θ, ·) : θ ∈ Θn } be a
class of real-valued, Lr (Po )-measurable functions indexed by θ ∈ Θn . The ﬁrst notion of complexity of
  31
     It is impossible to mention here all the existing results on convergence rates of sieve M-estimates. There are many
papers on convergence rates of particular sieves, such as the work on polynomial spline regression and density estimation
by Stone and his collaborators, see subsection 3.3 for details; the work on wavelets by Donoho, Johnstone and others; the
work on neural networks by Barron (1993), White (1990) and others.

  32
       If the criterion is a log-likelihood, then K(θo , θ) is simply the Kullback-Leibler information based on n observations.


                                                                          35
the class Fn is the Lr (Po )− covering numbers without bracketing, which is the minimal number of w-balls
{{f : ||f − gj ||r ≤ w}, ||gj ||r < ∞, j = 1, . . . , N } that cover Fn , denoted as N (w, Fn , || · ||r ). Sometimes
the covering numbers of Fn can grow to inﬁnity very fast as n  ∞; it is then more convenient to
use the notion of Lr (Po )− metric entropy, H(w, Fn , || · ||r ) ≡ log(N (w, Fn , || · ||r )), as a measure of the
complexity of Fn . The second notion of complexity of the class Fn is the Lr (Po )− covering numbers with
bracketing. Let Lr be the completion of Fn under the norm  · r . For any given w > 0, if there exists a
collection of functions (brackets) {g1l , g1u , · · · , gN
                                                         l , g u } ⊂ L such that max
                                                              N       r             1≤j≤N gj − gj r ≤ w and for
                                                                                            u    l

any g ∈ Fn , there exists a j ∈ {1, · · · , N } with gjl ≤ g ≤ gju a.e. − Po , then the minimal number of such
brackets, N[] (w, Fn , ||·||r ) ≡ min(N : {g1l , g1u , · · · , gN
                                                                l , g u }), is called the L (P )− covering numbers with
                                                                     N                     r  o

bracketing. Likewise, H[ ] (w, Fn , || · ||r ) ≡ log(N[] (w, Fn , || · ||r )) is called the Lr (Po )− metric entropy
with bracketing of the class Fn . More detailed discussions of metric entropy can be found in Pollard
(1984), Andrews (1994a), van der Vaart and Wellner (1996) and van de Geer (2000).
       In the following, for two sequences of positive numbers b1n and b2n , the notation b1n  b2n means
that the ratio b1n /b2n is bounded below and above by positive constants. We now present a result of
Chen and Shen (1996) for i.i.d. data; see Chen and Shen (1998) for the stationary beta-mixing case and
Chen and White (1999) for the stationary uniform-mixing case.33

Condition 3.6. {Zt }nt=1 is an i.i.d. or m − dependent sequence.

Condition 3.7. There is a C1 > 0 such that for all small ε > 0,

                                        sup           Var (l(θ, Zt ) − l(θo , Zt )) ≤ C1 ε2 .
                                 {θ∈Θn :d(θo ,θ)≤ε}

Condition 3.8. For any δ > 0, there exists a constant s ∈ (0, 2) such that

                                        sup            |l(θ, Zt ) − l(θo , Zt )| ≤ δ s U (Zt ),
                                  {θ∈Θn :d(θo ,θ)≤δ}

with E([U (Zt )]γ ) ≤ C2 for some γ ≥ 2.
                                                                                                              
       Conditions 3.6 and 3.7 imply that, within a neighborhood of θo , Var n−1/2 nt=1 (l(θ, Zt ) − l(θo , Zt ))
behaves like d2 (θ, θo ). Condition 3.8 implies that, when restricting to a local neighborhood of θo , l(θ, Zt )
is “continuous” at θo with respect to a metric d, which is equivalent to K 1/2 . Conditions 3.7 and 3.8
are usually easily veriﬁable by exploiting the speciﬁc form of the criterion function.
       Denote Fn = {l(θ, Zt ) − l(θo , Zt ) : d(θo , θ) ≤ δ, θ ∈ Θn }, and for some constant b > 0, let34
                                                           δ 
                                               1
                        δn = inf{δ ∈ (0, 1) : √ 2              H[ ] (w, Fn , || · ||2 )dw ≤ const}.
                                               nδ           bδ 2
  33
    See Fan and Yao (2003) for description of various nonparametric methods applied to nonlinear time series models.
  34
    There is a typo in Chen and Shen (1998, p.297), where the “sup” in the deﬁnition of δn should be replaced by the
“inf”. Nevertheless, all the other calculations of δn in Chen and Shen (1998) are correct.


                                                                   36
To calculate δn , an upper bound on H[ ] (w, Fn , || · ||2 ) is often enough, and, fortunately for us, much
of the work has already been done. For instance, according to Lemma 2.1 of Ossiander (1987) we
have that, H[ ] (w, Fn , || · ||2 ) ≤ log N (w, Fn , || · ||∞ ). For ﬁnite-dimensional linear sieves such as those
listed in subsection 2.3.1 we typically have log N (w, Fn , || · ||∞ ) = const. dim(Θn ) log( w1 ) (see e.g. Chen
and Shen, 1998); and for neural network and ridgelet nonlinear sieves we have log N (w, Fn , || · ||∞ ) =
const. dim(Θn ) log( dim(Θ
                        w
                           n)
                              ) (see e.g. Chen and White, 1999).

Theorem 3.2. Let θ̂n be the approximate sieve M-estimator deﬁned by (3.1). If Conditions 3.6–3.8
hold, then
                           d(θo , θ̂n ) = OP (εn ),   with    εn = max{δn , d(θo , πn θo )}.

    We note that δn increases with the complexity of the sieve Θn and can be interpreted as a measure
of the standard deviation term, while the deterministic approximation error d(θo , πn θo ) decreases with
the complexity of the sieve Θn and is a measure of the bias. The best convergence rate can be obtained
by choosing the complexity of the sieve Θn such that δn  d(θo , πn θo ).
    Chen and Shen (1998) have demonstrated how to apply the time series version of this theorem
with three examples: ﬁrst, they considered a multivariate nonparametric regression with either a neural
network sieve, a wavelet sieve or a spline sieve; second, a partially additive time series model via spline
and Fourier series sieves; and third, a transformation model with an unknown link via a monotone spline
sieve. Chen and White (1999) considered a time series nonparametric conditional quantile regression
via neural network sieve and multivariate conditional density estimation via neural network sieve. Chen
and Conley (2001) applied this theorem to a varying coeﬃcient VAR model with a ﬂexible spatial
conditional covariance. In the following we illustrate the veriﬁcation of the conditions of Theorem 3.2
with two examples.

3.2.1     Example: additive mean regression with a monotone constraint

Suppose that the i.i.d. data {Yt , Xt = (X1t , ..., Xqt )}nt=1 is generated according to

                              Yt = ho1 (X1t ) + ... + hoq (Xqt ) + et ,   E[et |Xt ] = 0.

Let θo = (ho1 , ..., hoq ) ∈ Θ = H be the parameters of interest with H = H1 × · · · × Hq to be speciﬁed
in Assumption 3.1. For simplicity, we assume that dim(Xj ) = 1 for j = 1, ..., q, dim(X) = q and
dim(Y ) = 1. We estimate the regression function θo (X) = Σqj=1 hoj (Xjt ) by maximizing over a sieve
                       n (θ) = n−1 n l(θ, Zt ), where l(θ, Zt ) = −(1/2)[Yt − Σq hj (Xjt )]2 and
Θn = Hn the criterion Q                         t=1                                                j=1
Zt = (Yt , Xt ) . Let
                                                                     
             d(θo , θ) = θ − θo  = (E(θ(Xt ) − θo (Xt ))2 )1/2 =    E{Σqj=1 [hj (Xjt ) − hoj (Xjt )]}2 .



                                                             37
Assumption 3.1. (i) ho1 ∈ H1 = C([b11 , b21 ]) ∩ {h : non-decreasing}; (ii) for j = 2, ..., q, hoj ∈ Hj =
 p
Λcjj ([b1j , b2j ]) with pj > 1/2; and hoj (x∗j ) = 0 for some known x∗j ∈ (b1j , b2j ).

Assumption 3.2. σ 2 (X) ≡ E[e2 |X] is bounded.

     Assumption 3.1(ii) is suﬃcient for identiﬁcation, and Assumption 3.2 is a simple regularity condition
that has been imposed in many papers; see e.g. Newey (1997).
     The sieve will be chosen to have the form Hn = Hn1 × · · · × Hnq . First we let Hn1 be a shape-preserving
sieve such as the monotone spline wavelet sieve MSplWav(r1 − 1, 2J1n ) with r1 ≥ 1 and k1n = 2J1n in
Subsection 2.3.5. For j = 2, ..., q, we let Hnj = {hj ∈ Θjn : hj (x∗j ) = 0, ||hj ||∞ ≤ cj } where Θjn can
be any of the ﬁnite-dimensional linear sieve examples in Subsection 2.3.1 such as Θjn = Pol(kjn ) or
TriPol(kjn ) or Spl(rj , kjn ) with rj ≥ [pj ] + 1, or Wav(mj , 2Jjn ) with mj > pj and kjn = 2Jjn .
     In the following result we denote p1 = 1 and p = min{p1 , p2 , · · · , pq }.

Proposition 3.1. Let θn be the sieve M-estimate. Suppose that Assumptions 3.1 and 3.2 hold. Let
kjn = O(n1/(2pj +1) ) for j = 1, ..., q. Then θn − θo  = OP (n−p/(2p+1) ) with p = min{p1 , · · · , pq }.

Proof. Theorem 3.2 is readily applicable to prove this result. It is easy to see that K(θo , θ)  θ − θo 2 .
Condition 3.6 is assumed. Now we check Conditions 3.7 and 3.8. Since l(θ, Zt ) − l(θo , Zt ) = (θ − θo )[et +
(θo − θ)/2], we have

          E[l(θ, Zt ) − l(θo , Zt )]2 ≤ 2E(σ 2 (Xt )[θo (Xt ) − θ(Xt )]2 ) + (1/2)E([θo (Xt ) − θ(Xt )]4 )
                                      ≤ const.θ − θo 2 + (1/2)E([θo (Xt ) − θ(Xt )]4 ).

By Theorem 1 of Gabushin (1967) when p is an integer and Lemma 2 in Chen and Shen (1998) for any
p > 0, we have θ − θo ∞ ≤ cθ − θo 2p/(2p+1) . Hence

                     E([θo (Xt ) − θ(Xt )]4 ) ≤ sup[θ(x) − θo (x)]2 E([θo (Xt ) − θ(Xt )]2 )
                                                     x
                                               ≤ Cθ − θo 2(1+[2p/(2p+1)]) .

So Condition 3.7 is satisﬁed for all ε ≤ 1. On the other hand,

                      |l(θ, Zt ) − l(θo , Zt )| ≤ θ − θo ∞ [|et | + (θo ∞ + θ∞ )/2] a.s..

Using Lemma 2 in Chen and Shen (1998) we see that Condition 3.8 is then satisﬁed with s = 2p/(2p+1),
U (Zt ) = |et | + const. and γ = 2.
     To apply Theorem 3.2, it remains to compute the deterministic approximation error rate ||θo −πn θo ||
and the metric entropy with bracketing H[ ] (w, Fn , ||·||2 ) of the class Fn = {l(θ, Zt )−l(θo , Zt ) : d(θo , θ) ≤
δ, θ ∈ Θn }. By deﬁnition,

                           ||θo − πn θo || ≤ const. max{hoj − πn hoj ∞ : j = 1, ..., q}

                                                         38
              #
and let C =    E{U (Zt )2 }, then for all 0 < C
                                              w
                                                ≤ δ < 1,
                                                                             w j
                                  H[ ] (w, Fn , || · ||2 ) ≤ Σqj=1 log N (    , H , || · ||∞ ).
                                                                             C n
   The ﬁnal bit of calculation now depends on the choice of sieves. First, ho1 − πn ho1 ∞ = O((k1n )−1 )
                                                                        p
by Anastassiou and Yu (1992a); and for j = 2, ..., q, Hj = Λcjj , hoj −πn hoj ∞ = O((kjn )−pj ) by Lorentz
                                                                                                  4c
                                                  w
(1966). Second, for all j = 1, 2, ..., q, log N ( C , Hnj , || · ||∞ ) ≤ const × kjn × log(1 + wj ) by Lemma 2.5 in
van de Geer (2000). Hence δn solves
                    δn                                                      δn $
             1                                                 1                                   4cj
            √ 2          H[ ] (w, Fn , || · ||2 )dw ≤         √ 2 max               kjn × log(1 +      )dw
             nδn       2
                     bδn                                       nδn j=1,...,q    2
                                                                              bδn                   w
                                                                                    δn
                                                               1             #                  4cj
                                                         ≤    √ 2 max          kjn      log(1 +     )dw
                                                               nδn j=1,...,q          2
                                                                                    bδn          w
                                                               1             #
                                                         ≤    √ 2 max          kjn × δn ≤ const
                                                               nδn j=1,...,q
                                          
and the solution is δn  maxj=1,...,q
                                      kjn                                                             −pj , δ }).
                                       n . By Theorem 3.2 we have θn −θo  = OP (maxj=1,...,q {(kjn )        n

With the choice of kjn = O(n 1/(2p j +1)                                 
                                         ) for j = 1, ..., q, we obtain θn − θo  = OP (n −p/(2p+1) ) with
p = min{p1 , · · · , pq } > 0.5. This immediately implies 
                                                           hj − hoj 2 = OP (n−p/(2p+1) ) for j = 1, ..., q.

Remarks: (1) Since the parameter space H = H1 ×···×Hq speciﬁed in Assumption 3.1 is compact with
respect to the norm || · ||, we can take the original parameter space H as the sieve space Hn . Applying
Theorem 3.2 again, note that the approximation error d(θo , πn θo ) = 0, we have θn − θo  = OP (δn ),
where δn solves:
                                   δn 
                            1
                           √ 2          Σqj=1 log N (w, Hj , || · ||∞ )dw
                            nδn      2
                                   bδn
                                 δn $           c 1/pj
                            1                      j
                    ≤      √ 2            Σqj=1           dw by Birman and Solomjak (1967)
                            nδn bδn2              w
                            1                        1− 1
                    ≤      √ 2 max const. (δn ) 2pj ≤ const.
                            nδn j=1,...,q

which is satisﬁed if δn = O(n−p/(2p+1) ) with p = min{p1 , · · · , pq } > 0.5. However, it is unclear how one
can implement such an optimization over the entire parameter space H given a ﬁnite data set.
   (2) Suppose that in Proposition 3.3 we replace Assumption 3.1(i) by ho1 ∈ Λpc11 ([b11 , b21 ]) and let
Hn1 = Pol(k1n ), or TriPol(k1n ), or Spl(r1 , k1n ) with r1 ≥ [p1 ] + 1, or Wav(m1 , 2J1n ) with m1 > p1 ,
2J1n = k1n . Let p = min{p1 , · · · , pq } > 0.5. Then we have 
                                                                hj − hoj 2 = OP (n−p/(2p+1) ) for j = 1, ..., q.
Further, let ||Dm
                 hj −Dm hoj ||2 = {E[Dm   hj (Xjt )−Dm hoj (Xjt )]2 }1/2 for an integer m ≥ 1. If p > m ≥ 1
                                   −(p−m)
then ||Dm hj − Dm hoj ||2 = OP (k        ) = OP (n−(p−m)/(2p+1) ) for j = 1, ..., q. This convergence rate
                                         jn
achieves the optimal one derived in Stone (1982).

                                                              39
3.2.2    Example: multivariate quantile regression

Suppose that the i.i.d. data {Yt , Xt }nt=1 is generated according to

                                 Yt = ho (Xt ) + et ,    P [et ≤ 0|Xt ] = α ∈ (0, 1),

where Xt ∈ X = Rd , d ≥ 1. We estimate a quantile function θo (X) = ho (Xt ) by maximizing over Θn
               n (θ) = n−1 n l(θ, Yt , Xt ), where l(θ, Yt , Xt ) = {1(Yt < h(Xt )) − α}[Yt − h(Xt )]. Let
the criterion Q                  t=1
d(θo , θ) = θ − θo  = (E(θ(Xt ) − θo (Xt ))2 )1/2 and W11 (X ) be the Sobolev space deﬁned in Subsection
2.3.3.

Assumption 3.3. ho ∈ H = W11 (X )

Assumption 3.4. Let fe|X be the conditional density of et given Xt satisfying 0 < inf x∈X fe|X=x (0) ≤
supx∈X fe|X=x (0) < ∞ and supx∈X |fe|X=x (z) − fe|X=x (0)| → 0 as |z| → 0.

   It is known that the tensor product of ﬁnite-dimensional linear sieves such as those in Subsection
2.3.1 will not be able to approximate functions in W1m (X ), m ≥ 1, well, hence the sieve convergence
rates based on those linear sieves will be slower than those based on nonlinear sieves; see e.g. Chen and
Shen (1998, proposition 1 case 1.3(ii)) for such an example. For time series regression models, Chen and
White (1999), Chen et al. (2001) have shown that neural network sieves lead to faster convergence rates
for functions in W1m (X ). Thus we consider the following Gaussian radial basis ANN sieve Θn = Hn for
the unknown ho ∈ W11 (X ):
             ⎧                                                                                     ⎫
             ⎨      kn                                kn                                      ⎬
                               {(x − γj ) (x − γj )}1/2
        Hn = α0 +       αj G                             ,    |αj | ≤ c0 , |γj | ≤ c1 , 0 < σj ≤ c2 ,
             ⎩                             σj                                                      ⎭
                        j=1                                        j=0

where G is the standard Gaussian density function.

Proposition 3.2. Let     hn be the sieve M-estimate. Suppose that Assumptions 3.3 and 3.4 hold. Let
              log(kn ) = O(n). Then  hn − ho  = OP ([n/ log n]−(1+2/(d+1))/[4(1+1/(d+1))] ).
 2(1+1/(d+1))
kn

Proof. Theorem 3.2 is readily applicable to prove this result. Condition 3.6 is directly assumed. By the
above assumptions on conditional density fe|X , it is easy to check that K(θo , θ)  E(θ(Xt ) − θo (Xt ))2 ;
see Chen and White (1999, page 686-687) for details. Now let us check Conditions 3.7 and 3.8. Note
that
                        |l(θ, Yt , Xt ) − l(θo , Yt , Xt )| ≤ max(α, 1 − α)|θ(Xt ) − θo (Xt )|.

This implies that

         Var (l(θ, Yt , Xt ) − l(θo , Yt , Xt )) ≤ E[l(θ, Yt , Xt ) − l(θo , Yt , Xt )]2 ≤ E[θ(Xt ) − θo (Xt )]2 .



                                                            40
and thus Condition 3.7 is satisﬁed. Moreover, we have

                    sup            |l(θ, Yt , Xt ) − l(θo , Yt , Xt )| ≤         sup            |θ(Xt ) − θo (Xt )|,
              {θ∈Θn :d(θo ,θ)≤δ}                                           {θ∈Θn :d(θo ,θ)≤δ}


and θ − θo ∞ ≤ cθ − θo 2/3 by Theorem 1 of Gabushin (1967). Hence, Condition 3.8 is satisﬁed with
s = 2/3, U (Xt ) ≡ c.
    Now by results in Chen et al. (2001), ho − πn ho  ≤ const.(kn )−1/2−1/(d+1) and log N (w, Hn , || ·
                                                log(kn ) = O(n), it is easy to see that θn − θo  =
                                   2(1+1/(d+1))
||∞ ) ≤ const.kn log( kwn ). With kn
OP ([n/ log n]−(1+2/(d+1))/[4(1+1/(d+1))] ) by applying Theorem 3.2.

3.3   Convergence rates of series estimators

In this subsection we present the convergence rate of the series estimators for the concave extended linear
models. Recall that in this framework, the parameter space, Θ, is a linear space which is often a subspace
of the space of square integrable functions, the sample criterion function Q  n (θ) = n−1 n l(θ, Zi ) is
                                                                                              i=1
                                                                                        −1
                                                                                           n
concave in θ ∈ Θ almost surely and the population criterion function Q(θ) = E[n              t=i l(θ, Zi )] is
strictly concave in θ ∈ Θ. The results reported here are largely based on those of Huang (1998a, 2001)
and Newey (1997).
   Throughout this subsection, we assume that the data {Zi }ni=1 is i.i.d. and θ denotes a real-valued
function with a bounded domain, X ⊂ Rd . We will use θ − θo  to measure the discrepancy between θ
and θo and we require the norm  ·  to be equivalent to the scaled L2 (X , leb) norm.

Condition 3.9. There are positive numbers c1 and c2 such that c1 θ2,leb ≤ θ ≤ c2 θ2,leb for any
Lebesgue square-integrable function θ.

   In the multivariate LS regression of Example 2.4, θo (X) = E[Y |X], a natural choice for the norm
is θ = ||θ||2 = {E[θ(X)2 ]}1/2 . If the density of X is bounded away from zero and inﬁnity, then
Condition 3.9 is satisﬁed. In general a natural choice of the norm,  · , will depend on the speciﬁc
application and on the data generating process.
   We impose the following condition on the linear sieve space.

Condition 3.10. The ﬁnite-dimensional linear sieve space, Θn , is theoretically identiﬁable in the sense
that any θ ∈ Θn with θ = 0 implies that θ(u) = 0 everywhere.

   Under Condition 3.9, Condition 3.10 is trivially satisﬁed by commonly used linear approximation
spaces such as those given in Subsection 2.3.1.

Condition 3.11. θo = arg maxΘ E[l(θ, Z)] satisﬁes θo ∞ ≤ Ko < ∞.




                                                               41
Condition 3.12. For each pair of bounded functions θ1 , θ2 ∈ Θ, E[l(θ1 + τ (θ2 − θ1 ), Z)] is twice
continuously diﬀerentiable with respect to τ ∈ [0, 1]. For any positive constant K, there are positive
numbers c1 and c2 such that:

                                              ∂2
                         −c1 θ2 − θ1 2 ≤         E[l(θ1 + τ (θ2 − θ1 ), Z)] ≤ −c2 θ2 − θ1 2
                                              ∂τ 2
for θ1 , θ2 ∈ Θ with θ1 ∞ ≤ K and θ2 ∞ ≤ K and 0 ≤ τ ≤ 1.

    Given the above conditions, we can deﬁne θn ≡ arg maxθ∈Θn E[l(θ, Z)], and it is easy to see that
||θn − θo ||  inf θ∈Θn ||θ − θo ||.

Condition 3.13. For any pair of functions θ1 , θ2 ∈ Θn , l(θ1 + τ (θ2 − θ1 ), Z) is twice continuously
diﬀerentiable with respect to τ . Moreover, (i)
                                  +                + ++
                                  +∂
                                  + l(θn + τ g, Z)++ +          $          
                                  + ∂τ              τ =0 +         dim(Θn )
                             sup                           = OP               ;
                            g∈Θn          g                         n

(ii) for any positive constant K, there is a positive number c such that:

                                       ∂2
                                            l(θ1 + τ (θ2 − θ1 ), Z) ≤ −cθ2 − θ1 2 ,
                                       ∂τ 2
for any θ1 , θ2 ∈ Θn with θ1 ∞ ≤ K and θ2 ∞ ≤ K and 0 ≤ τ ≤ 1, except on an event whose
probability tends to zero as n → ∞.

    Denote kn = dim(Θn ), An ≡ supθ∈Θn , θ 2,leb =0 (||θ||∞ /||θ||2,leb ) and ρ2n ≡ inf θ∈Θn θ−θo 2,leb . Under
Conditions 3.9 - 3.11, we have ρ2n  inf θ∈Θn θ − θo . The following result is a special case of Huang
(2001) for the sieve estimator of a concave extended linear model.

Theorem 3.3. Suppose Conditions 3.9–3.13 hold. Let limn→∞ An ρ2n = 0 and limn→∞ A2n kn /n = 0.
                            exists uniquely with probability approaching one as n → ∞, and
Then the series estimator, θ,
                                                               $ k         
                                             θ − θo  = OP
                                                                   n
                                                                       + ρ2n .
                                                                  n
                                                                                                           
    This theorem could be regarded as a special case of Theorem 3.2 by taking δn                              kn
                                                                                                               n    and
d(θo , πn θo )  ρ2n . To see this, ﬁrst note that under Conditions 3.9 - 3.11 there is an essentially unique
element πn θo ∈ Θn such that ||πn θo − θo || = inf θ∈Θn ||θ − θo ||, and ||πn θo − θo ||  ||πn θo − θo ||2,leb  ρ2n ,
which is the approximation error rate. Second, within the framework of concave extended linear models,
                                                                                                
for a ﬁnite-dimensional linear sieve Θn we have log N (w, Θn , ||·||∞ ) ≤ const.kn log( w1 ), hence δn             kn
                                                                                                                    n .
    The constant An ≥ 1 is a measure of irregularity of the ﬁnite-dimensional linear sieve space, Θn .
Since we require that Θn be theoretically identiﬁable and functions in Θn be bounded, An is ﬁnite. In


                                                            42
fact, let {φj , j = 1, . . . , kn } be an orthonormal basis of Θn relative to the theoretical inner product. Then,
                                                  ,kn           -
                                                               2 1/2 < ∞. It is obvious that θ
by the Cauchy–Schwarz inequality, An ≤                j=1 φj ∞                                    ∞ ≤ An θ2,leb

for all θ ∈ Θn . The linear sieve spaces are usually chosen to be among commonly used approximating
spaces such as those described in subsection 2.3.1 and the associated constant An is readily obtained
by using results in the approximation theory literature. Here are some examples.
   Polynomials. If Θn = Pol(Jn ) and X = [0, 1], then An  Jn (see Theorem 4.2.6 of DeVore and
Lorentz, 1993).
                                                                                               1/2
   Trigonometric polynomials. If Θn = TriPol(Jn ) and X = [0, 1], then An  Jn                       (see Theorem
4.2.6 of DeVore and Lorentz, 1993).
                                                                                     1/2
   Univariate splines. If Θn = Spl(r, Jn ) and X = [0, 1], then An  Jn                    (see Theorem 5.1.2 of
DeVore and Lorentz, 1993).
   Orthogonal wavelets. If Θn = Wav(m, 2Jn ) and X = [0, 1], then An  2Jn /2 (see Lemma 2.8 of
Meyer, 1992).
   Tensor product spaces. Let Θn be the tensor product of Θn1 , . . . , Θnd . The constant An associ-
ated with the tensor product linear sieve space, Θn , can be determined from the corresponding constants
for its components. Set an = supθ∈Θn , θ 2,leb =0 (||θ||∞ /||θ||2,leb ) for 1 ≤  ≤ d. It is shown in Huang
                         
(1998a) that An ≤ const. d=1 an .
   We conclude this subsection with an application to the multivariate LS regression of Example 2.4.

Assumption 3.5. (i) X has a compact support X and has a density that is bounded away from zero and
inﬁnity on X , where X ⊂ Rd is a Cartesian product of compact intervals X1 , ..., Xd ; (ii) V ar(Y |X = ·)
is bounded on X ; (iii) ho (·) = E[Y |X = ·] ∈ Λp (X ) with p > d/2.

   Theorem 3.3 can treat a general ﬁnite-dimensional linear sieve space Θn . For simplicity, however,
we consider here only the case when the sieve space, Θn , in Example 2.4 is constructed as a tensor
product space of some commonly used univariate linear approximating spaces Θn1 , . . . , Θnd . Then
                
kn = dim(Θn ) = d=1 dim(Θn ).

Proposition 3.3. Suppose Assumption 3.5 holds. Let 
                                                   hn be the series estimate of ho in Example 2.4,
with the sieve, Θn , being the tensor-product of the univariate sieve spaces Θn1 , . . . , Θnd . For  = 1, ..., d,
                                                                     #
   • if Θn = Pol(Jn ), p > d and Jn3d /n → 0, then 
                                                     hn − ho  = OP ( Jnd /n + Jn−p );
                                                                          #
   • if Θn = TriPol(Jn ), p > d/2 and Jn2d /n → 0, then 
                                                          hn − ho  = OP ( Jnd /n + Jn−p );
                                                                                           #
   • if Θn = Spl(r, Jn ) with r ≥ [p] + 1, p > d/2 and Jn2d /n → 0, then 
                                                                           hn − ho  = OP ( Jnd /n + Jn−p ).

Let Jn = O(n1/(2p+d) ), then 
                              hn − ho  = OP (n−p/(2p+d) ).



                                                        43
       We note that this proposition35 can also be obtained as a direct consequence of Theorem 1 in Newey
(1997). The choice of Jn  n1/(2p+d) balances the variance (Jnd /n) and the squared bias (Jn−2p ) trade-
oﬀ: Jnd /n  Jn−2p . The resulting rate of convergence n−2p/(2p+d) is actually optimal in the context of
regression and density estimations: no estimate has a faster rate of convergence uniformly over the class
of p-smooth functions (Stone, 1982). The rate of convergence depends on two quantities: the speciﬁed
smoothness p of the target function θo and the dimension d of the domain on which the target function
is deﬁned. Note the dependence of the rate of convergence on the dimension d: given the smoothness
p, the larger the dimension, the slower the rate of convergence; moreover, the rate of convergence tends
to zero as the dimension tends to inﬁnity. This provides a mathematical description of a phenomenon
commonly known as the “curse of dimensionality”. Imposing additivity on an unknown multivariate
function can imply faster rates of convergence of the corresponding estimate; see Subsection 3.2.1, Stone
(1985, 1986), Andrews and Whang (1990), Huang (1998b) and Huang et al (2000).

3.4      Pointwise asymptotic normality of series LS estimators

To date, we have a relatively complete theory on the rates of convergence for sieve M-estimators.
The corresponding asymptotic distribution theory, however, is incomplete and requires much future
work. All of the currently available results are for series estimators of densities and the LS regression
functions. Asymptotic normality of the series LS estimators has been studied in Andrews (1991b),
Gallant and Souza (1991), Newey (1994b, 1997), Zhou et al. (1998), and Huang (2003). Stone (1990)
and Strawderman and Tsiatis (1996) have given asymptotic normality results for polynomial spline
estimators in the context of density estimation and hazard estimation respectively.36
       We focus on Example 2.4 throughout this subsection. That is, we assume that the data {Zi =
(Yi , Xi ) }ni=1 is i.i.d., and the parameter of interest, θo (·) = ho (·) = E[Y |X = ·], is a real-valued
regression function with a bounded domain X ⊂ Rd .

3.4.1      Asymptotic normality of the spline series LS estimator

Here we present a result by Huang (2003) on the pointwise asymptotic normality of the spline series LS
estimator.

Assumption 3.6. (i) V ar(Y |X = ·) is bounded away from zero on X ; (ii)
                                                                   
                   sup E {Y − ho (X)}2 × 1(|Y − ho (X)| > λ) | X = x → 0                    as λ → ∞.
                   x∈X
  35
     Proposition 3.6 is about the convergence rates in || · ||2 −norm for LS regressions. There are also a few results on the
convergence rates in || · ||∞ −norm for LS regressions; see e.g. Stone (1982), Newey (1997) and de Jong (2002).
  36
     See Portnoy (1997) for a closely related result on the asymptotic normality for smoothing spline quantile estimators.




                                                             44
    In the following, Φ(·) denotes the standard normal distribution function, and SD(ĥ(x)|X1 , . . . , Xn ) =
{Var(ĥ(x)|X1 , . . . , Xn )}1/2 .

Theorem 3.4. [Huang 2003] Suppose Assumptions 3.5 and 3.6 hold. Let 
                                                                    hn be the series estimate
of ho in Example 2.4, with the sieve, Θn , being the tensor-product of the univariate spline sieve spaces
Θn = Spl(r, Jn ), r ≥ [p] + 1, 1 ≤  ≤ d. If limn→∞ Jnd log n/n = 0 and limn→∞ Jn /n1/(2p+d) = ∞, then
                                                                         
                        Pr ĥ(x) − ho (x) ≤ t × SD(ĥ(x)|X1 , . . . , Xn ) → Φ(t),    t ∈ R.

    Asymptotic distribution results such as Theorem 3.4 can be used to construct asymptotic conﬁdence
                ĥ(x)|X1 , . . . , Xn ) be a consistent estimate of SD(ĥ(x)|X1 , . . . , Xn ); see Andrews
intervals. Let SD(
(1991b) and Newey (1997) for such an estimate. Let hlα (x) = ĥ(x) − z1−α/2 SD(     ĥ(x)|X1 , . . . , Xn ) and
                          ĥ(x)|X1 , . . . , Xn ), where z1−α/2 is the (1 − α/2)th quantile of the standard
huα (x) = ĥ(x) + z1−α/2 SD(
normal distribution. If the conditions of Theorem 3.4 hold, then [hlα (x), huα (x)] is an asymptotic 1 − α
conﬁdence interval of ho (x); that is, limn P (hlα (x) ≤ ho (x) ≤ huα (x)) = 1 − α.
    Recall that for the tensor product spline sieve Θn , kn = dim(Θn )  Jnd . If ho (·) is p-smooth, then the
                                                             −p/d
tensor product spline sieve has the bias order Jn−p  kn            . The condition limn→∞ Jn /n1/(2p+d) = ∞ in
Theorem 3.4 implies that the bias term is asymptotically negligible relative to the standard deviation
of the estimate. Such a condition, limn→∞ kn /nd/(2p+d) = ∞, is usually called undersmoothing (or
overﬁtting); that is, the total number of sieve parameters (kn ) required for undersmoothing is more
than what is required to achieve Stone’s (1982) optimal rate of convergence.

3.4.2     Asymptotic normality of functionals of series LS estimator

We now review the asymptotic normality results in Newey (1997) for any series estimation of functionals
of the LS regression function. Let a : Θ → R be a functional, and we want to estimate a(ho ), where
                                                               
ho (·) = E[Y |X = ·] ∈ Θ. Recall that 
                                      h(·) = pkn (·) (P  P )− n pkn (Xi )Yi is the series LS estimator of
                                                             i=1
ho (·), with p (X) being the ﬁnite-dimensional linear sieve (2.10), see Example 2.4. Then a(
              k n                                                                           h) will be
a natural estimator for a(ho ).
    Let s ≥ 0 be an integer, and deﬁne a strong norm on Θ as hs,∞ = max[γ]≤s supx∈X |Dγ h(x)|. Also,
let ζ0 (kn ) ≡ supx∈X |pkn (x)|e and ζs (kn ) ≡ max[γ]≤s supx∈X |Dγ pkn (x)|e , where | · |e is the Euclidean
norm.
                                                                                                
Assumption 3.7. (i) V ar(Y |X = ·) is bounded away from zero on X ; supx∈X E {Y − ho (X)}4 |X = x <
∞; (ii) the smallest eigenvalue of E[pkn (X)pkn (X) ] is bounded away from zero uniformly in kn ; (iii) for
an integer s ≥ 0 there are α > 0, βk∗n such that inf g∈Θn g − ho s,∞ = pkn (·) βk∗n − ho (·)s,∞ = O(kn−α ).

Assumption 3.8. Either (i) limn→∞ kn {ζ0 (kn )}2 /n = 0, and a(h) is linear in h ∈ Θ; or (ii) for s
as in Assumption 3.7, limn→∞ k 2 {ζs (kn )}4 /n = 0, and there exists a function D(h; 
                                     n                                                h) that is linear in


                                                        45
h ∈ Θ and such that for some c1 , c2 , ε > 0 and for all 
                                                         h, h with ||
                                                                     h − ho ||s,∞ < ε, ||h − ho ||s,∞ < ε, it is
true that

                          |a(h) − a(
                                    h) − D(h − 
                                               h; 
                                                  h)| ≤ c1 {||h − 
                                                                  h||s,∞ }2 ;     and
                                          h) − D(h; h)| ≤ c2 ||h||s,∞ ||
                                    |D(h;                              h − h||s,∞ .

Assumption 3.9. (i) there is a positive constant c such that |D(h; ho )| ≤ c||h||s,∞ for s from As-
sumption 3.7; (ii) there is a hn ∈ Θn such that E[hn (X)2 ] → 0 but D(hn ; ho ) is bounded away from
zero.

   Assumption 3.7(iii) is a condition on the sieve approximation error under the strong norm ||h||s,∞ .
Assumption 3.8 implies that a(h) is Frechet diﬀerentiable in h with respect to the norm ||h||s,∞ . Assump-
tion 3.9 says that the derivative D(h; ho ) is continuous in the norm ||h||s,∞ but not in the mean-square
norm ||h||2 = {E[h(X)2 ]}1/2 . The lack of mean-square continuity will imply that the estimator a(    h)
       √
is not n−consistent for a(ho ); see Newey (1997) for detailed discussions. In the following we denote
Σ = E[pkn (X)pkn (X) V ar(Y |X)],

             ∂a(pkn (X) β)
        A=                  |βk∗    and Vkn = A {E[pkn (X)pkn (X) ]}−1 Σ{E[pkn (X)pkn (X) ]}−1 A.
                  ∂β            n


         d
We let −→ denote convergence in distribution and N (0, 1) denote a scalar random variable drawn from
a standard normal distribution.

Theorem 3.5. [Newey 1997] Suppose Assumptions 3.5(i)(ii), 3.7 - 3.9 hold. Let         hn be the series
                                                                                           √
estimate of ho in Example 2.4, with the sieve Θn being the linear sieve (2.10). If limn→∞ nkn−α = 0,
then                                  $
                                           n             
                                                             d
                                              a(h) − a(ho ) −→ N (0, 1).
                                          Vkn
   We note that for the linear functional a(ho ) = ho (x), this theorem implies pointwise asymptotic
normality of any series LS estimators 
                                      h(x) satisfying Assumptions 3.5(i)(ii), 3.7, 3.8(i) and 3.9(ii).
When we specialize this theorem further to the tensor product spline series estimator of ho (x), then
Assumption 3.8(i) requires limn→∞ kn2 /n = 0, which is stronger than the condition limn→∞ kn log n/n =
0 in Theorem 3.4. However, Theorem 3.4 is applicable only to the spline series LS estimator, while the
results by Newey (1994b, 1997) are much more general.
   The normality results reported in this section are only valid for i.i.d. data; see Andrews (1991b) for
asymptotic normality of linear functionals of the series LS estimators based on time series dependent
observations.




                                                       46
4         Large Sample Properties of Sieve Estimation of Parametric Parts
          in Semiparametric Models
In the general sieve extremum estimation framework of Section 2, a model typically contains a parameter
vector θ = (β, h), where β is a vector of ﬁnite dimensional parameters and h is a vector of inﬁnite
dimensional parameters. When both β and h are parameters of interest we call the model “semi-
nonparametric”. When h is a vector of nuisance parameters, then, following Powell (1994) and others,
we will call the model “semiparametric”.
     For weakly dependent observations, semiparametric models can be classiﬁed into two categories: (i)
                            √
β cannot be estimated at a n− rate, i.e., β has zero information bound; see van der Vaart (1991); and
                             √
(ii) β can be estimated at a n− rate. Models belonging to category (i) should be correctly viewed as
nonparametric. However, since these models can still be estimated by the method of sieves, the general
                                                                   √
sieve convergence rate results can be applied to derive slower than n− rates for the sieve estimates of
β. To date there is little research about whether or not the sieve estimate of β can reach the optimal
convergence rate and what its limiting distribution is. It is worth mentioning that for Heckman and
Singer’s (1984) model, Ishwaran (1996a) established that the β -parameters cannot be estimated at
√
  n− rate, while Ishwaran (1996b) constructed another estimator of β that converges at the optimal
rate but is not a sieve MLE. Prior to the work of Ishwaran (1996a, b), Honore (1990, 1994) proposed
a clever estimator of β that is not a sieve MLE either and computed its convergence rate. It is still an
open question whether or not Heckman and Singer’s (1984) sieve MLE estimator could reach Ishwaran’s
optimal rate.37
         There is a large literature on semiparametric estimation of β for models belonging to category (ii);
see Bickel et al. (1993), Newey and McFadden (1994), Powell (1994), Horowitz (1998) and Pagan and
Ullah (1999) for reviews. Most of these results are derived using the so-called two-step procedure: Step
one estimates h nonparametrically by  h, while step two estimates β via either M-estimation, GMM or
more generally, MD-estimation with the unknown h replaced by 
                                                             h. A few general results deal with the
simultaneous estimation of β and h. For example, the sieve simultaneous procedure jointly estimates β
                                                 n (β, h) over the sieve parameter space Θn = B × Hn .
and h by maximizing a sample criterion function Q
The earlier applications of sieve MLE in econometrics, such as the papers by Duncan (1986) and Gallant
and Nychka (1987) took this approach.
                                                                  √
         In Subsection 4.1 we review existing theory on the           n− asymptotic normality of the two-step
    37
    There are other important results in econometrics about speciﬁc models belonging to category (i). For example,
Manski (1985) proposed a maximum score estimator of a binary choice model with zero median restriction; Kim and
Pollard (1990) derived the n1/3 consistency of Manski’s estimator; Horowitz (1992) proposed a smoothed maximum score
estimator for Manski’s model, and proved that his smoothed estimator converges faster than n1/3 and is asymptotically
                                                                 √
normal; Andrews and Schafgans (1998) proposed a slower than n rate kernel estimator of the intercept in Heckman’s
                                                                                 √
sample selection model; Honore and Kyriazidou (2000) developed a slower than n rate kernel estimator of a discrete
choice dynamic panel data model. See Powell (1994), Horowitz (1998), Pagan and Ullah (1999) for more examples.


                                                         47
                                                                                     √
estimates of β. In Subsection 4.2, we present recent advances on the     n− asymptotic normality and
                                                                                      √
eﬃciency of the sieve simultaneous M-estimates of β. In Subsection 4.3, we mention the n− asymptotic
normality and eﬃciency of the simultaneous sieve MD estimates of β.

4.1      Semiparametric Two-Step estimators

There are several general theory papers in econometrics about the semiparametric two-step procedure.
Andrews (1994b) proposed the MINPIN estimator of β, which is the extremum estimator of β where the
empirical criterion function depends on the ﬁrst step nonparametric estimator of h. Andrews (1994b)
                                                                      √
also provided a set of relatively high level conditions to ensure the n−normality of his MINPIN
estimator of β. Ichimura and Lee (2005) presented a set of relatively low level conditions to ensure
    √
the n−normality of the semiparametric two-step M-estimator of β. Newey (1994a), Pakes and Olley
(1995), and Chen et al. (2003) have studied the properties of the semiparametric two-step GMM
estimator of β. In addition to providing a general way to compute the asymptotic variance of the
second step β estimate, Newey (1994a) showed that the second stage estimation of β and its asymptotic
variance do not depend on the particular choice of the nonparametric estimation technique in the ﬁrst
step, but only depend on the convergence rate of the ﬁrst step estimation.

4.1.1      Asymptotic normality

In the following we state two results which are slight modiﬁcations of those in Chen et al. (2003), in which
the empirical criterion function can be non-smooth with respect to both β and h. Let M : B ×H → Rdm
be a non-random, vector-valued measurable function, where B is a compact subset in Rdβ with dm ≥ dβ .
The identifying assumption is that M (β, ho (·, β)) = 0 at β = βo ∈ B and M (β, ho (·, β)) = 0 for all
β = βo . We denote βo ∈ B and ho ∈ H as the true unknown ﬁnite and inﬁnite dimensional parameters,
where the function ho ∈ H can depend on the parameters β and the data Z. We usually suppress the
arguments of the function ho for notational convenience; thus: (β, h) ≡ (β, h(·, β)), (β, ho ) ≡ (β, ho (·, β))
and (βo , ho ) ≡ (βo , ho (·, βo )). We assume that H is a vector space of functions endowed with a pseudo-
metric || · ||H , which is a sup-norm metric with respect to the β-argument and a pseudo-metric with
respect to all the other arguments. Suppose that there also exists a random vector-valued function
Mn : B × H → Rdm depending on the data {Zi : i = 1, . . . , n}, such that Mn (β, ho ) W Mn (β, ho ) is
close to M (β, ho ) W M (β, ho ) for some symmetric positive-deﬁnite matrix W . Suppose that for each β
there is an initial nonparametric estimator  h(.) for ho (.). Denote Wn as a possibly random weighting
                                                               which solves the sample minimum
matrix such that Wn − W = oP (1). Then βo can be estimated by β,
distance problem:38
                                               min Mn (β, 
                                                          h) Wn Mn (β, 
                                                                        h).                              (4.1)
                                               β∈B
 38
      See Theorem 1 in Chen et al. (2003) for the consistency property of βb − βo = oP (1).


                                                             48
   For any β ∈ B, we say that M (β, h) is pathwise diﬀerentiable at h in the direction [h − h] if
{h + τ (h − h) : τ ∈ [0, 1]} ⊂ H and limτ →0 [M (β, h + τ (h − h)) − M (β, h)]/τ exists; we denote the limit
by Γ2 (β, h)[h − h].

Theorem 4.1. Suppose that βo ∈ int(B) satisﬁes M (βo , ho ) = 0, that β −βo = oP (1), Wn −W = oP (1),
and that:
                                                         √
(4.1.1) Mn (β, h) = inf ||β−βo ||≤δn Mn (β, 
                                               h) + oP (1/ n) for some positive sequence δn = o(1).
(4.1.2) (i) The ordinary partial derivative Γ1 (β, ho ) in β of M (β, ho ) exists in a neighborhood of βo ,
and is continuous at β = βo ; (ii) the matrix Γ1 ≡ Γ1 (βo , ho ) is such that Γ1 W Γ1 is nonsingular.
(4.1.3) The pathwise derivative Γ2 (β, ho )[h−ho ] of M (β, ho ) exists in all directions [h−ho ] and satisﬁes:

                            ||Γ2 (β, ho )[h − ho ] − Γ2 (βo , ho )[h − ho ]|| ≤ ||β − βo || × o(1)

for all β with ||β − βo || = o(1), all h with ||h − ho ||H = o(1).
                       h) − M (β, ho ) − Γ2 (β, ho )[
either (4.1.4) ||M (β,                              h − ho ]|| = oP (n−1/2 ) for all β with ||β − βo || = o(1);
or (4.1.4)’ (i) there are some constants c ≥ 0,  ∈ (0, 1] such that

                            ||M (β, h) − M (β, ho ) − Γ2 (β, ho )[h − ho ]|| ≤ c||h − ho ||1+
                                                                                           H


for all β with ||β − βo || = o(1) and all h with ||h − ho ||H = o(1); and (ii) c||
                                                                                  h − ho ||1+
                                                                                           H = oP (n
                                                                                                     −1/2 ).

(4.1.5) For all sequences of positive numbers {δn } with δn = o(1),

                                            Mn (β, h) − M (β, h) − Mn (βo , ho )
                                 sup           −1/2 + ||M (β, h)|| + ||M (β, h)||
                                                                                   = oP (1).
                       β−βo <δn , h−ho H <δn n           n

                                           √
                                               n{Mn (βo , ho ) + Γ2 (βo ,ho )[
                                                                                         d
(4.1.6) For some ﬁnite matrix V1 ,                                            h − ho ]} −→ N [0, V1 ].

       √
           n(β − βo ) −→ N [0, (Γ1 W Γ1 )−1 Γ1 W V1 W Γ1 (Γ1 W Γ1 )−1 ].
                        d
Then

Remark: This theorem can be established by following the proof of theorem 2 in Chen et al. (2003).
Note that condition (4.1.4) is implied by condition (4.1.4)’, while condition (4.1.4)’ with  = 1 becomes
the one imposed in Newey (1994a) and Chen et al. (2003). When M (β, h) is highly nonlinear in h and/or
when the argument “·” of h(·, β) has unbounded support, then condition (4.1.4)’(i) with  = 1 may fail
to hold, but condition (4.1.4)’ with 0 <  < 1 is typically satisﬁed. See Chen et al. (2004b) for such an
example in the two-step GMM estimation for non-classical measurement error models and missing data
problems. Of course a smaller  has to be compensated by a faster rate of convergence of 
                                                                                         h to ho in
                         h − ho ||H = oP (n−1/2(1+ ) ). In the extreme case when ||
condition (4.1.4)’(ii) ||                                                         h − ho ||H = OP (n−1/2 ),
which is the case if ho is a probability distribution function, then condition (4.1.4) is implied by condition



                                                             49
(4.1.4)” (i) ||M (β, h) − M (β, ho ) − Γ2 (β, ho )[h − ho ]|| = ||h − ho ||H × o(1) for all β with ||β − βo || = o(1)
and all h with ||h − ho ||H = o(1); and (ii) ||  h − ho ||H = OP (n−1/2 ).
                                                                                                      
    Many econometric models correspond to M (β, h) = E[m(Zi , β, h)] and Mn (β, h) = n−1 ni=1 m(Zi , β, h),
where m : Rdz ×B×H → Rdm is a measurable, vector-valued function such that E[m(Zi , β, ho (·, β))] = 0
if and only if β = βo . In this situation, theorem 3 in Chen et al. (2003) provides a set of easily-veriﬁable
suﬃcient conditions for the stochastic equicontinuity condition (4.1.5) with i.i.d. data {Zi }. The fol-
lowing lemma extends their result to the strictly stationary beta-mixing (or absolutely regular) case.

Lemma 4.1. Suppose that {Zt : t ≥ 1} is strictly stationary beta-mixing with mixing decay rate
∞ 2/(r−2)                                                                           
  t=1 t    βt < ∞ for some r > 2, that M (β, h) = E[m(Zt , β, h)] and Mn (β, h) = n−1 ni=1 m(Zt , β, h),
and that the arguments of the h(·) in m(Zt , β, h(·)) only depend on β and ﬁnitely many Zt . Suppose
that each component mj of m = (m1 , . . . , mdm ) takes the form mj (z, β, h) = mcj (z, β, h) + mlcj (z, β, h),
and satisﬁes:

(3.1) mcj (z, β, h) is Hölder continuous with respect to β, h in the sense:

                                                                                                                   s
                     |mcj (z, β1 , h1 ) − mcj (z, β2 , h2 )| ≤ bj (z){β1 − β2 s1j + h1 − h2 Hj }

for some constants s1j , sj ∈ (0, 1], a measurable function bj (·) with E[bj (Z)]r < ∞, r > 2.
(3.2) mlcj (·, β, h) is locally uniformly Lr (P )−continuous with respect to β, h in the sense:
                 .                                                                                     /   1/r
                                                              +                                    +
                 E                   sup                      +mlcj (Z, β  , h ) − mlcj (Z, β, h)+r             ≤ Kj δ sj
                      (β  ,h ):||β  −β||<δ,||h −h||H <δ

for all (β, h) ∈ B × H, all small positive value δ = o(1), and for some constants sj ∈ (0, 1], Kj > 0.
                                           ∞ 
(3.3) B is a compact subset of Rdβ , and       log N (ε1/sj , H, || · ||H )dε < ∞ for j = 1, . . . , l.
                                                         0
Then for all positive δn with δn = o(1),

                               sup                Mn (β, h) − M (β, h) − Mn (βo , ho ) = oP (n−1/2 ).                       (4.2)
                     β−βo <δn , h−ho H <δn

Proof. Let F = {m(z, β, h) : β ∈ B, h ∈ H} denote the class of measurable functions indexed by (β, h),
and H[] (w, F, || · ||r ) be the Lr (P )−metric entropy with bracketing of the class F. From the proof of
                                                                          ∞ 
theorem 3 in Chen et al. (2003), conditions (3.1) - (3.3) imply that           H[] (w, F, || · ||r )dw < ∞ for
                                                                          0
some r > 2. This and ∞        t=1 t
                                    2/(r−2) β < ∞ imply that all the assumptions in Doukhan et al. (1995)
                                             t

for the Donsker theorem on stationary beta-mixing are satisﬁed, which in turn implies the stochastic
equicontinuity (4.2) result.




                                                                      50
   Both theorem 3 in Chen et al. (2003) and Lemma 4.2 are extensions of the “type II class” and
“type IV class” deﬁned in Andrews (1994a) from β ∈ B to (β, h) ∈ B × H. Condition 3.2 allows for
discontinuous moment functions in (β, h) such as sign and indicator functions of (β, h).

   Given the results of Newey (1994a), Chen et al. (2003) and Theorem 4.1, the choice of estimation
of h in the ﬁrst step should mainly depend on the ease of implementation. Recently, for the partially
                                  β + h (X ) + e , P [e ≤ 0|X ] = α ∈ (0, 1), Lee (2003) proposed
linear quantile regression Yt = X0t o   o  1t    t      t     t
            √
a two-step, n− asymptotically normal and eﬃcient estimator of β, where the ﬁrst step involved a
high dimensional kernel quantile regression of Yt on X = (X0 , X1 ) . Chen et al. (2003) considered a
modiﬁcation of Lee’s model to a partially linear quantile regression with some endogenous regressors,
                      √
and proposed another n asymptotically normal estimator of β by two-step GMM where the ﬁrst
step nonparametric estimation only involves h(X1t ). We can extend their models further to a partially
additive quantile regression:
                            
                      Yt = X0t βo + Σqj=1 hoj (Xjt ) + et ,   P [et ≤ 0|Xt ] = α ∈ (0, 1).

If ho1 , ..., hoq were known, then βo could be estimated based on the moment restriction E[m(Zi , β, ho )] =
0 iﬀ β = βo with m(Zi , β, ho ) = X0 {α − 1(Y ≤ X0t        β + Σq h (X )}. Clearly, to estimate β by
                                                                  j=1 oj     jt
                                                               −1
                                                                  n               
semiparametric two-step GMM using the sample moment n               i=1 m(Zi , β, h), it would be much easier
if 
   h = (
        h1 , ..., 
                  hq ) were a sieve estimate, say obtained by maxh∈H Q    n (β, h) = n−1 n l(β, h, Yt , Xt ),
                                                                         n                     t=1
where
                                                                            
             l(β, h, Yt , Xt ) = {1(Yt < X0t β + Σqj=1 hj (Xjt )) − α}[Yt − X0t β − Σqj=1 hj (Xjt )],

and Hn = Hn1 ×···×Hnq as in Subsection 3.2.1, rather than a high-dimensional kernel quantile regression.
Andrews (1994b), Newey (1994a, b), Newey et al. (1999) and Das et al. (2003) have made the same
recommendation in the context of two-step estimation with an additive LS regression in the ﬁrst step.
   There is also a large literature on the general theory of eﬃcient estimation of β via various two-
step procedures. For instance, the proﬁle MLE estimation of β (which can be viewed as an important
subclass of Andrews’ (1994b) MINPIN procedure) can lead to eﬃcient estimation of β; see e.g. Severini
and Wong (1992), Ai (1997) and Murphy and van der Vaart (2000). Other two-step procedures which
lead to the eﬃcient estimation of β include those based on the eﬃcient score equation approach; see
Bickel et al. (1993) and Newey (1990a), and the optimally weighted GMM approach; see Newey (1990a,
b, 1993). See Powell (1994) and Pagan and Ullah (1999) for other examples. Clearly, these eﬃcient
procedures can be combined with a ﬁrst step nonparametric estimation of h via the method of sieves.

4.2     Sieve simultaneous M-estimation

There are few general theory papers about the sieve simultaneous M-estimation of β and h; see Wong
and Severini (1991), Shen (1997), Chen and Shen (1998). This procedure jointly estimates β and h

                                                       51
by maximizing a sample criterion function Q  n (β, h) over the sieve parameter space Θn = B × Hn ,
       n (β, h) takes a sample average form 1 n l(β, h, Zi ). Wong and Severini (1991) established
where Q                                      n    i=1
√
  n−asymptotic normality and eﬃciency of smooth functionals of nonparametric MLE with parameter
space Θn ≡ Θ = B × H. Shen (1997) extended their results to sieve MLE and to allow for highly curved
(nonlinear) least favorable directions. Chen and Shen (1998) extend the result of Shen (1997) to general
sieve M-estimation with stationary weakly dependent data.

4.2.1    Asymptotic normality
                                            
Let θn = (βn , 
                 hn ) = arg max(β,h)∈B×Hn n1 ni=1 l(β, h, Zi ) denote the sieve M-estimate of θo = (βo , ho ).
                                         √
In this subsection we present a simple n− asymptotic normality theorem for the plug-in estimate of
a smooth functional of θo . See Shen (1997) and Chen and Shen (1998) for the general version.
    Suppose that Θ = B × H is convex in θo so that θo + τ [θ − θo ] ∈ Θ for all small τ ∈ [0, 1] and for all
ﬁxed θ ∈ Θ. Suppose that the directional derivative
                              ∂l(θo , z)                  l(θo + τ [θ − θo ], z) − l(θo , z)
                                         [θ − θo ] ≡ lim
                                 ∂θ                  τ →0                τ
is well-deﬁned for almost all z in the support of Z.
    Let Θ = B × H be equipped with a norm  · . Suppose the functional of interest, f : Θ → R, is
smooth in the sense that
                                ∂f (θo )                  f (θo + τ [θ − θo ]) − f (θo )
                                         [θ − θo ] ≡ lim
                                  ∂θ                 τ →0               τ
is well-deﬁned and
                                                                     ∂f (θo )
                                  ∂f (θo )                   |         ∂θ [θ − θo ]|
                                          ≡      sup                                 < ∞.
                                    ∂θ        {θ∈Θ: θ−θo >0}           θ − θo 
Next, suppose that  ·  induces an inner product ·, · on the completion of the space spanned by Θ − θo ,
denoted as V̄ . By the Riesz representation theorem, there exists v ∗ ∈ V̄ such that, for any θ ∈ Θ,
                              ∂f (θo )                                       ∂f (θo )
                                       [θ − θo ] = θ − θo , v ∗     iﬀ              < ∞.
                                ∂θ                                             ∂θ

Suppose that the sieve M-estimate θ̂n converges to θo at a rate faster than δn (i.e., θ̂n − θo  = oP (δn )).
Let εn denote any sequence satisfying εn = o(n−1/2 ), and µn (g(Z)) = n1 Σnt=1 {g(Zt ) − E(g(Zt ))} denote
the empirical process indexed by the function g. Recall that K(θo , θ) ≡ E[l(θo , Zi ) − l(θ, Zi )].

Condition 4.1. (i) there is an ω > 0 such that |f (θ) − f (θo ) − ∂f∂θ
                                                                    (θo )
                                                                          [θ − θo ]| = O(θ − θo ω ) uniformly
in θ ∈ Θn with θ − θo  = o(1); (ii)  ∂f∂θ
                                          (θo )
                                                 < ∞; (iii) there is a πn v ∗ ∈ Θn such that ||πn v ∗ − v ∗ || ×
θ̂n − θo  = oP (n−1/2 ).

Condition 4.2. sup{θ∈Θn : θ−θo ≤δn } µn (l(θ, Z) − l(θ ± εn πn v ∗ , Z) − ∂l(θ∂θo ,Z) [±εn πn v ∗ ]) = OP (ε2n )


                                                            52
                                                              0                 1
Condition 4.3. K(θo , θ̂n ) − K(θo , θ̂n ± εn πn v ∗ ) = ±εn × θ̂n − θo , πn v ∗ + o(n−1 ).

Condition 4.4. (i) µn ( ∂l(θ∂θo ,Z) [πn v ∗ − v ∗ ]) = oP (n−1/2 ); (ii) E{ ∂l(θ∂θo ,Z) [πn v ∗ ]} = o(n−1/2 ).
                                                  d
Condition 4.5. n1/2 µn ( ∂l(θ∂θo ,Z) [v ∗ ]) −→ N (0, σv2∗ ), with σv2∗ ≡ Varo ( ∂l(θ∂θo ,Z) [v ∗ ]) > 0 for i.i.d. data.

    We note that for classical nonlinear M-estimation such as those reviewed in Newey and McFadden
(1994), Conditions 4.1(i)(ii), 4.2, 4.3 and 4.5 are still required (albeit in slightly diﬀerent expressions),
while Conditions 4.1(iii) and 4.4 are automatically satisﬁed since πn v ∗ = v ∗ for the standard nonlinear
M-estimation.
    Note that for i.i.d. data Condition 4.5 is satisﬁed whenever σv2∗ > 0. Condition 4.2 is implied by:

                                                  ∂l(θ, Z)             ∂l(θo , Z)
                             sup           µn (            [πn v ∗ ] −            [πn v ∗ ]) = oP (n−1/2 ).
                      {θ∈Θn : θ−θo ≤δn }             ∂θ                   ∂θ

Conditions 4.2, 4.3 and 4.4 may need to be modiﬁed when the parameter space Θ is not convex; see
Shen (1997) and Chen and Shen (1998) for the needed modiﬁcation.

Theorem 4.2. Suppose Conditions 4.1–4.5 hold, and θ̂n − θo ω = oP (n−1/2 ). Then, for the sieve
                                              d
M-estimate θ̂n , n1/2 (f (θ̂n ) − f (θo )) −→ N (0, σv2∗ ).

    The proof of Theorem 4.2 follows trivially from those in Shen (1997) and Ai and Chen (1999). In
applications, one needs to specify a Hilbert norm θ − θo  and its corresponding inner product in order
to compute the representor v ∗ . For many applications, Ai and Chen (2003) pointed out that one can
use the L2 (Po ) -norm based on the derivatives of l evaluated at θo , i.e., θ − θo 2 = E{ ∂l(θ∂θo ,Z) [θ − θo ]}2 .
For sieve MLE, this norm is very natural since it is the Fisher norm; see Wong and Severini (1991) and
Shen (1997). In the following we illustrate the veriﬁcation of this theorem with a typical example.
    Finally for statistical inference using the sieve plug-in estimate f (θ̂n ), one needs to estimate the
asymptotic variance σv2∗ consistently. Such estimators can be found in Andrews (1994b), Newey (1994a)
and Ai and Chen (2003) among others.

4.2.2    Example: partially additive mean regression with a monotone constraint

Suppose that the i.i.d. data {Yt , Xt = (X0t
                                            , X , ..., X )}n
                                                1t       qt t=1 is generated according to

                                
                          Yi = X0i βo + ho1 (X1i ) + ... + hoq (Xqi ) + ei ,          E[ei |Xi ] = 0.

Let θo = (βo , ho1 , ..., hoq ) ∈ Θ = B × H be the parameters of interests, where B is a compact subset of
Rdβ and H is the same as that in Subsection 3.2.1. Since ho1 (·) can have a constant we assume that X0
does not contain the constant regressor, dim(X0 ) = dβ , dim(Xj ) = 1 for j = 1, ..., q, dim(X) = dβ + q,
                                                                β + Σq h (X ) by maximizing
and dim(Y ) = 1. We estimate the regression function θo (X) = X0t o   j=1 oj jt



                                                                53
                                n (θ) = n−1                    n                                          
over Θn = B × Hn the criterion Q                      t=1 l(θ, Yt , Xt ), where l(θ, Yt , Xt ) = − 2 [Yt − X0t β −
                                                                                                   1

                                          (β − β ) + Σq [h (X ) − h (X )]}2 .
Σqj=1 hj (Xjt )]2 . Let θ − θo 2 = E{X0t       o      j=1 j      jt      oj  jt
                                  q   ∗               ∗
    Denote Dw∗ (X) ≡ X0 − Σj=1 wj (Xj ), where wj (Xj ), j = 1, ..., q solves

                                   inf q                      E[(X0 − Σqj=1 wj (Xj ))(X0 − Σqj=1 wj (Xj )) ]
                wj ,j=1,...,q : E[|X0 −Σj=1 wj (Xj )|2e ]>0


Assumption 4.1. (i) βo ∈ int(B); (ii) E{X0 X0 } is positive deﬁnite; E[Dw∗ (X) Dw∗ (X)] is positive
deﬁnite; (iii) V ar(et |X) is positive ﬁnite; (iv) each element of wj∗ belongs to the Hölder space Λmj with
mj > 1/2 for all j = 1, ..., q.

Proposition 4.1. Suppose Assumptions 3.1, 3.2, and 4.1 hold. Let kjn = O(n1/(2pj +1) ) for j = 1, ..., q.
Then n1/2 (βn − βo ) −→ N (0, Ω∗ ) with
                       d



        Ω∗ = {E[Dw∗ (X) Dw∗ (X)]}−1 E{Dw∗ (X) Var (et |X)Dw∗ (X)}{E[Dw∗ (X) Dw∗ (X)]}−1 .

Proof. Let f (θ) = λ β, where λ is an arbitrary unit vector in Rdβ . Clearly, Condition 4.1(i) is satisﬁed
with ∂f∂θ
       (θo )
             [θ − θo ] = (β − βo ) λ and ω = ∞. In addition,

                                       {(β − βo ) λ}2
          v ∗ 2 =             sup
                        {θ∈Θ: θ−θo >0}   θ − θo 2
                                                                                 (b λ)2
                   =                    sup                             q                   q            
                        {(b,w): b (X0 −Σqj=1   wj (Xj )) >0} b E[(X0 − Σj=1 wj (Xj ))(X0 − Σj=1 wj (Xj )) ]b

                   = λ {E[Dw∗ (X) Dw∗ (X)]}−1 λ ≡ λ Σ−1
                                                        ∗ λ,


Thus v ∗ = (vβ∗ , vh∗ ), with vβ∗ = Σ−1       ∗      ∗         ∗   −1
                                     ∗ λ and vh = −(w1 , ..., wq )Σ∗ λ. Furthermore, under Assumption
4.1(ii), we have that v ∗ ∈ V̄ , and Condition 4.1(ii) is satisﬁed.
   Let Θn = B × Hn and Hn = Hn1 × · · · × Hnq , where Hnj , j = 1, 2, ..., q are the same as those in
Subsection 3.2.1. By the same proof as that for Proposition 3.3, we have θn − θo  = OP (n−p/(2p+1) )
provided that p = min{p1 , · · · , pq } > 0.5. This and Assumption 4.1(iv) imply Condition 4.1(iii).
   Condition 4.3 is trivially satisﬁed given the deﬁnitions of K(·) and the norm || · ||. Also we note that

                         ∂l(θo , Z)
                                    [θ − θo ] = et {X0 [β − βo ] + Σqj=1 [hj (Xj ) − hoj (Xj )]}
                            ∂θ
Condition 4.4(ii) is automatically satisﬁed since

                             ∂l(θo , Z)                                                      
                        E{              [πn v ∗ ]} = E et {X0 [vβ∗ ] + Σqj=1 [πn vh∗j (Xj )]} = 0.
                                ∂θ
Since
                    1  ∂l(θo , Zt )                   1
                        n                                          n
                                     [πn v ∗ − v ∗ ] =    et {Σqj=1 [πn vh∗j (Xjt ) − vh∗j (Xjt )]},
                    n      ∂θ                          n
                       t=1                                        t=1


                                                                   54
by Chebyshev inequality and Assumption 4.1, we have

                                   1  ∂l(θo , Zi )
                                      n
                                                    [πn v ∗ − v ∗ ] = oP (n−1/2 );
                                   n      ∂θ
                                     i=1

hence Condition 4.4(i) is satisﬁed. Since
                     ∂l(θo , Zt ) ∗          
                                 [v ] = et {X0t [vβ∗ ] + Σqj=1 [vh∗j (Xjt )]} = et Dw∗ (Xt )Σ−1
                                                                                             ∗ λ,
                        ∂θ
Condition 4.5 is satisﬁed under Assumption 4.1, and
                                                    ∂l(θo , Z) ∗
                                    σv2∗ ≡ Varo (             [v ]) = λ Ω∗ λ > 0
                                                       ∂θ
   All that remains is to check Condition 4.2. This condition is implied by:
                                                                                            
        µn {X0 [vβ∗ ] + Σqj=1 [πn vh∗j (Xj )]}{X0 [β − βo ] + Σqj=1 [hj (Xj ) − hoj (Xj )]} = oP (n−1/2 ),

uniformly over θ ∈ Θn with θ − θo  ≤ δn = O(n−p/(2p+1) ), which is in turn implied by Assumption 4.1
                                                    m
and the Donsker theorem since hj ∈ Hj = Λc j with mj > 1/2 for all j = 1, ..., q; see e.g. van der Vaart
and Wellner (1996).
   By Theorem 4.2, we obtain, for any arbitrary unit vector λ ∈ Rdβ , n1/2 λ (βn − βo ) −→ N (0, σ∗2 ).
                                                                                                       d

Hence n1/2 (βn − βo ) −→ N (0, Ω∗ ).
                        d


                                                                           β +h (X )+e , E[e |X ] =
   Notice that for the well-known partially linear regression model Yi = X0i o  o1 1i  i     i  i

0, we can explicitly solve for Dw∗ (X) ≡ X0 − w1∗ (X1 ) with w1∗ (X1 ) = E{X0 |X1 }. Hence Assump-
tion 4.1(iv) will be satisﬁed if E{X0 |X1 } is smooth enough.

4.2.3   Eﬃciency of sieve MLE

Wong (1992), and Wong and Severini (1991) established asymptotic eﬃciency of plug-in nonparametric
MLE estimates of smooth functionals. Shen (1997) extended their results to sieve MLE. We review the
results of Wong (1992) and Shen (1997) in this subsection. Related work can be found in Levit (1978),
Begun et al. (1983), Ibragimov and Has’minskii (1991), Bickel et al. (1993).
                          n (θ) = 1 n l(Zi , θ), where l(Zi , θ) = log p(Zi , θ) is a log-likelihood evalu-
   Here the criterion is Q            n    i=1
ated at the single observation Zi . The norm is taken to be the Fisher norm: θ − θo 2 = E{ ∂l(θ∂θo ,Z) [θ −
θo ]}2 . Recall that a probability family {Pθ : θ ∈ Θ} is locally asymptotically normal (LAN) at θo , if (1)
for any g in the linear span of Θ − θo , θo + tn−1/2 g ∈ Θ for all small t ≥ 0, and (2)
                                                                                     
                     dPθo +n−1/2 g                                  1
                                   (Z1 , · · · , Zn ) = exp Σn (g) − g + Rn (θo , g) ,
                                                                        2
                         dPθo                                       2
                                       d
where Σn (g) is linear in g, Σn (g) −→ N (0, g2 ) and plimn→∞ Rn (θo , g) = 0 (both limits are under the
true probability measure Po = Pθo ); see e.g. LeCam (1960).

                                                          55
   To avoid the “super-eﬃciency” phenomenon, certain conditions on the estimates are required. In
estimating a smooth functional in the inﬁnite-dimensional case, Wong (1992, p.58) deﬁned the class
of pathwise regular estimates in the sense of Bahadur (1964). An estimate Tn (Z1 , · · · , Zn ) of f (θo ) is
pathwise regular if for any real number τ > 0 and any g in the linear span of Θ − θo , we have

                          lim sup Pθn,τ (Tn < f (θn,τ )) ≤ lim inf Pθn,−τ (Tn < f (θn,−τ )),
                           n→∞                                    n→∞

where θn,τ = θo + n−1/2 τ g.

Theorem 4.3. [Wong (1992), Shen (1997)] In addition to LAN, suppose the functional f : Θ → R is
Frechet-diﬀerentiable at θo with 0 <  ∂f∂θ
                                         (θo )
                                                < ∞. Then for any pathwise regular estimate Tn of f (θo ),
and any real number τ > 0,
                                                                  +                    +    
                                     √                           +        ∂f (θo ) 2 ++
                        lim sup Po                                 +
                                          n|Tn − f (θo )| ≤ τ ≤ Po +N (0,           )+ ≤ τ
                         n→∞                                                  ∂θ

where N (0,  ∂f∂θ
                (θo ) 2
                      ) is a scalar random variable drawn from a normal distribution with mean 0 and
variance  ∂f∂θ
             (θo ) 2
                   .
                                                                                                 pθ
Theorem 4.4. [Shen 1997] In addition to the conditions to ensure n1/2 (f (θ̂n ) − f (θo )) −→
                                                                                            o
                                                                                              N (0, σv2∗ )
with σv2∗ =  ∂f∂θ
                (θo ) 2
                      , if LAN holds, then for the plug-in sieve MLE estimates of f (θ), any real number
τ > 0, and any g in the linear span of Θ − θo ,
                                                                    pθn,τ
                                          n1/2 (f (θ̂n ) − f (θn,τ )) −→ N (0, σv2∗ ),
                                           p
where θn,τ = θo + n−1/2 τ g. Here −→
                                   θ
                                     means convergence in distribution under probability measure Pθ .

4.3    Sieve simultaneous MD estimation: normality and eﬃciency

As we mentioned in Section 2.1, most structural econometric models belong to the semiparametric con-
ditional moment framework: E[ρ(Z, βo , ho (·))|X] = 0, where the diﬀerence ρ(Z, β, h(·)) − ρ(Z, βo , ho (·))
does depend on the endogenous variables Y . There are even fewer general theory papers on the sieve
simultaneous MD estimation of βo and ho for this class of models; see Newey and Powell (1989, 2003)
and Ai and Chen (1999, 2003). The sieve simultaneous MD procedure jointly estimates βo and ho by
                                                        i )]−1 m(X
minimizing a sample quadratic form 1 n m(X i , β, h) [Σ(X
                                               n    i=1           i , β, h) over the sieve parameter
space Θn = B × Hn , where m(X
                             i , β, h) is any nonparametric estimator of the conditional mean function
                                 
m(X, β, h) ≡ E[ρ(Z, β, h(·))|X], Σ(X)   → Σ(X) in probability and Σ(X) is a positive deﬁnite weighting
                                                  √
matrix. Ai and Chen (1999, 2003) established the n− asymptotic normality of this sieve MD estimator
β of βo .
   For semiparametric eﬃcient estimation of βo , Ai and Chen (1999) proposed the three-step optimally
weighted sieve MD procedure:

                                                              56
Step 1. Obtain an initial consistent sieve MD estimator θn = (βn , 
                                                                     hn ) by

                                                  1
                                                            n
                                          min         i , θ) m(X
                                                     m(X        i , θ).
                                     θ=(β,h)∈B×Hn n
                                                            i=1

       i , θ) is any nonparametric estimator of the conditional mean function m(X, θ) ≡ E[ρ(Z, β, h(·))|X].
where m(X
                                       o (X) of the optimal weighting matrix Σo (X) ≡ V ar[ρ(Z, βo , ho (·))|X]
Step 2. Obtain a consistent estimator Σ
using θn = (βn , 
                   hn ) and any nonparametric regression procedures (such as kernel, nearest-neighbor or
series LS estimation).
Step 3. Obtain the optimally weighted estimator θn = (βn , 
                                                             hn ) by solving

                                             1
                                                       n
                                    min                     o (Xi )]−1 m(X
                                                 i , θ) [Σ
                                                m(X                      i , θ).
                                θ=(β,h)∈B×Hn n
                                                      i=1

    As an alternative way to eﬃciently estimate βo , Ai and Chen (2003) proposed the locally continuously
updated sieve MD procedure:
                                                                        
Step 1. Obtain an initial consistent sieve MD estimator θn by minθ∈B×Hn ni=1 m(X
                                                                               i , θ) m(X
                                                                                         i , θ),
       i , θ) is the series LS estimator (2.15) of m(X, θ) ≡ E[ρ(Z, β, h(·))|X].
where m(X
Step 2. Obtain the optimally weighted sieve MD estimator θn = (βn , 
                                                                      hn ) by

                                            1
                                                  n
                                   min                     o (Xi , θ)]−1 m(X
                                                i , θ) [Σ
                                               m(X                         i , θ),
                                θ=(β,h)∈Non n
                                                 i=1

                                                                                              o (Xi , θ) is
where Non is a shrinking neighborhood of θo = (βo , ho ) within the sieve space B × Hn , and Σ
any nonparametric estimator of the conditional variance function Σo (X, θ) ≡ V ar[ρ(Z, β, h(·))|X]. To
compute this Step 2 one could use θn = (βn , 
                                               hn ) from Step 1 as a starting point.
    While Ai and Chen (1999) have considered kernel estimation of the conditional mean m(·, θ) and
the conditional variance Σo (·, θ), Ai and Chen (2003) have proposed series LS estimation of m(·, θ) and
Σo (·, θ). Let {p0j (X), j = 1, 2, ..., km,n } be a sequence of known basis functions that can approximate
any real-valued square integrable functions of X well as km,n → ∞, pkm,n (X) = (p01 (X), ..., p0km,n (X))
and P = (pkm,n (X1 ), ..., pkm,n (Xn )) . Then a series LS estimator of the conditional variance Σo (X, θ) ≡
{σojl (X, θ)}j,l=1,...,dρ is:

                          o (X, θ) ≡ {
                         Σ             σojl (X, θ)}j,l=1,...,dρ ; dρ = dim(ρ)
                                         
                                         n
                        ojl (X, θ) ≡
                        σ                      ρj (Zi , θ)ρl (Zi , θ)pkm,n (Xi ) (P  P )−1 pkm,n (X).
                                         i=1

Also, Σo (X) = V ar[ρ(Z, θo )|X] can be simply estimated by Σ          o (X, θn ).
                                                             o (X) ≡ Σ
    We state the following result on semiparametric eﬃcient estimation of βo for the class of conditional
moment restrictions E[ρ(Z, βo , ho (·))|X] = 0; see Ai and Chen (2003) for details. For j = 1, ..., dβ , let

                                                              57
                          ∂E{ρ(Z, β, ho (·))|X}           ∂E{ρ(X, βo , ho (·) + τ wj (·))|X}
               Dwj (X) ≡                          |β=βo −                                    |τ =0 ,
                                     ∂βj                                ∂τ
                       2                            3       ,                              -
                      E Dwj∗ (X) Σo (X)−1 Dwj∗ (X) = inf E Dwj (X) Σo (X)−1 Dwj (X) ,
                                                                     wj
                                    
and Dw∗ (X) ≡ Dw1∗ (X), ..., Dwd∗ (X) be a dρ × dβ − matrix valued measurable function of X.
                                           β


Theorem 4.5. Let βn be either the three-step optimally weighted sieve MD estimator or the two-step
locally continuously updated sieve MD estimator. Under the conditions stated in Ai and Chen (2003,
                                                                 √
theorems 6.1 and 6.2), βn is semiparametric eﬃcient and satisﬁes n(βn − βo ) −→ N (0, V −1 ), with
                                                                                d
                                                                                                          o
                                                                            
                                           Vo = E Dw∗ (X) [Σo (X)]−1 Dw∗ (X) .

       Blundell et al. (2001) have implemented the three-step optimally weighted sieve MD procedure in
the estimation of the Engel curve model with endogenous expenditure speciﬁcation (2.4) of Example
2.2. Their empirical ﬁndings show that the β estimates do diﬀer when controlling for the endogeneity
of total expenditure nonparametrically.
Remarks: (1) The three-step optimally weighted sieve MD leads to semiparametric eﬃcient estimation
of βo for the model E[ρ(Z, βo , ho (·))|X] = 0 regardless ρ(Z, β, h(·)) − ρ(Z, βo , ho (·)) depends on the
endogenous variables Y or not. However, when ρ(Z, β, h(·)) − ρ(Z, βo , ho (·)) does not depend on Y , to
obtain an eﬃcient estimator of βo one can apply the following simpler three-step procedure as suggested
in Ai and Chen (1999):
Step 1, obtain an initial consistent sieve LS estimator (βn , 
                                                               hn ) by

                                                           1
                                                                     n
                            (βn , 
                                   hn ) = arg       min       ρ(Zi , β, h(·)) ρ(Zi , β, h(·)).
                                                (β,h)∈B×Hn n
                                                                    i=1

                                       o (X) of Σo (X) ≡ V ar[ρ(Z, βo , ho (·))|X] by
Step 2, obtain a consistent estimator Σ
                                                     
                                                     n
                                    o (X) = 1
                                   Σ                       ρ(Zi , βn , 
                                                                        hn (·))ρ(Zi , βn , 
                                                                                            hn (·)) .
                                             n
                                                     i=1

Step 3, obtain the optimally weighted LS estimator (βn , 
                                                          hn ) by

                                                     1
                                                              n
                      (βn , 
                             hn ) = arg        min                         o (Xi )]−1 ρ(Zi , β, h(·)).
                                                        ρ(Zi , β, h(·)) [Σ
                                          (β,h)∈B×Hn n
                                                            i=1

Ai and Chen (1999) applied this simpler three-step procedure to eﬃcient estimation of βo in two well-
                                                                        
known examples: a partially additive mean regression of E[Y − X0 βo − qj=1 hoj (Xj )|X] = 0,39 and
  39
    Li (2000) proposed semiparametric eﬃcient estimation of βo for the partially additive mean regression model with
homoskedastic error. This simpler three-step procedure will lead to eﬃcient estimation of βo under heteroskedastic error
of unknown form.


                                                                    58
Klein and Spady’s (1993) binary response model of E[Y − ho (X  βo )|X] = 0 where Y = 1{U ≤ X  βo },
U is independent of X, and ho (u) is the unknown distribution of U .
         (2) For the conditional moment restriction (without unknown function ho ), E[ρ(Z, βo )|X] = 0, there
are many alternative eﬃcient estimation procedures for βo , including the empirical likelihood of Donald,
Imbens and Newey (2003), the generalized empirical likelihood (GEL) of Newey and Smith (2004), the
kernel-based empirical likelihood of Kitamura, Tripathi and Ahn (2004), the continuously updated
minimum distance procedure or the Euclidean conditional empirical likelihood of Bonnal and Renault
(2004), among others. It seems that one could extend their results to the more general conditional
moment framework E[ρ(Z, βo , ho ())|X] = 0, where the unknown function ho () is approximated by a
sieve.40
         (3) Recently Ai and Chen (2004a, b) have considered the semiparametric conditional moment frame-
work E[ρj (Z, βo , ho ())|Xj ] = 0 for j = 1, ..., J with ﬁnite J, where each conditional moment has its own
conditioning set Xj that could diﬀer across equations. This extension would be useful to estimating
semiparametric structure models with incomplete information.


5         Concluding Remarks
In this chapter, we have surveyed some recent large sample results on nonparametric and semiparametric
estimation of econometric models via the method of sieves. We have restricted our attention to gen-
                                                                                   √
eral consistency and convergence rates of sieve estimation of unknown functions and n− asymptotic
normality of sieve estimation of smooth functionals. Examples were used to illustrate the general sieve
estimation theory. It is our hope that the examples adequately depicted the general sieve extremum
estimation approach and its versatility. We conclude this chapter by pointing out additional topics on
the method of sieves that have not been reviewed for lack of time and space.
         First, although there is still lack of general theory on testing via the sieve method, there are some
consistent speciﬁcation tests using the method of sieves. For example, Hong and White (1995) tested a
parametric regression model using series LS estimators; Hart (1997) presented many consistent tests us-
ing series estimators; Stinchcombe and White (1998) tested a parametric conditional moment restriction
E[ρ(Z, βo )|X] = 0 using neural network sieves and Li et al. (2003) tested semiparametric/nonparametric
regression models using spline series estimators. Most recently Song (2005) proposed consistent tests of
semi-nonparametric regression models via conditional martingale transforms where the unknown func-
tions are estimated by the method of sieves. Additional references include Wooldridge (1992), Bierens
(1990), Bierens and Ploberger (1997) and de Jong (1996). Also in principle, all of the existing test
results based on kernel or local linear regression methods such as those in Robinson (1989), Fan and Li
    40
    In fact, for the special case E[ρ(Z, βo , ho (X))|X] = 0 where ho is only a function of conditioning variable X, Zhang
and Gijbels (2003) have considered the sieve empirical likelihood procedure.


                                                           59
(1996), Lavergne and Vuong (1996), Chen and Fan (1999), Fan and Linton (1999), Ait-Sahalia et al.
(2001), Horowitz and Spokoiny (2001) and Fan et al. (2001) can be done using the method of sieves.
   Second, we have not touched on the issue of data-driven selection of sieve spaces. In practice, many
existing model selection methods such as cross-validation (CV), generalized CV and AIC have been
used in the current context due to the connection of the method of sieves with the parametric models;
see the survey chapter by Ichimura and Todd (2005) on implementation details of semi-nonparametric
estimators including series estimators, and the review by Stone et al. (1997) on model selection with
spline sieves for extended linear models. There are a few papers in statistics including Barron et al.
(1999) and Shen and Ye (2002) that address data-driven selection among diﬀerent sieve bases. There are
many results on data-driven selection of the number of terms for a given sieve basis; see e.g. Li (1987),
Andrews (1991a), Hurvich et al. (1998), Donald and Newey (2001), Coppejans and Gallant (2002), Fan
and Peng (2004) and Imbens et al. (2005). In particular Andrews (1991a) established the asymptotic
optimality of CV as a method to select series terms for nonparametric least square regressions with
heteroskedastic errors. Imbens et al. (2005) establishes a similar result for semiparametrically eﬃcient
estimation of average treatment eﬀect parameters with a ﬁrst step series estimation of conditional means.
It would be very useful to extend their results to handle a more general class of semi-nonparametric
models estimated via the method of sieves.
   Third, so far there is little research on the higher order reﬁnements of the large sample properties
of the semiparametric eﬃcient sieve estimators. Many authors, including Linton (1995) and Heckman
et al. (1998), have pointed out that the ﬁrst-order asymptotics of semiparametric procedures could be
misleading and unhelpful. For the case of kernel estimators, some papers such as Robinson (1995), Linton
(1995, 2001), Nishiyama and Robinson (2000), Xiao and Linton (2001) and Ichimura and Linton (2002)
have obtained higher order reﬁnements. It would be useful to extend these results to semiparametric
eﬃcient estimators using the method of sieves.
   Finally, given the relative ease of implementation of the sieve method, but the general diﬃculty of
deriving its large sample properties, it might be fruitful to combine the sieve method with the kernel
or the local linear regression methods (see e.g. Fan and Gijbels, 1996). Recent papers by Horowitz and
Mammen (2004) and Horowitz and Lee (2004) have demonstrated the usefulness of this combination.


References
  [1] Ai, C. (1997) “A Semiparametric Maximum Likelihood Estimator”, Econometrica, 65, 933-964.

  [2] Ai, C., and X. Chen (2003) “Eﬃcient Estimation of Models with Conditional Moment Restrictions
      Containing Unknown Functions”, Econometrica, 71, 1795-1843. Working paper version, 1999.




                                                   60
 [3] Ai, C., and X. Chen (2004a) “Estimation of Possibly Misspeciﬁed Semiparametric Conditional
     Moment Restriction Models with Diﬀerent Conditioning Variables”, Working paper, New York
     University.

 [4] Ai, C., and X. Chen (2004b) “On Eﬃcient Sequential Estimation of Semi-nonparametric Moment
     Models”, Working paper, New York University.

 [5] Ait-Sahalia, Y., P. Bickel and T. Stoker (2001) “Goodness-of-ﬁt Tests for Kernel Regression with
     an Application to Option Implied Volatilities”, Journal of Econometrics, 105, 363-412.

 [6] Amemiya, T. (1985) Advanced Econometrics. Cambridge: Harvard University Press.

 [7] Anastassiou, G. and X. Yu (1992a) “Monotone and Probabilistic Wavelet Approximation”,
     Stochastic Analysis and Applications, 10, 251-264.

 [8] Anastassiou, G. and X. Yu (1992b) “Convex and Convex-Probabilistic Wavelet Approximation”,
     Stochastic Analysis and Applications, 10, 507-521.

 [9] Andrews, D. (1991a) “Asymptotic Optimality of Generalized CL , Cross-validation, and General-
     ized Cross-validation in Regression with Heteroskedastic Errors”, Journal of Econometrics, 47,
     359-377.

[10] Andrews, D. (1991b) “Asymptotic Normality of Series Estimators for Nonparametric and Semi-
     parametric Regression Models”, Econometrica, 59, 307-345.

[11] Andrews, D. (1992) “Generic Uniform Convergence”, Econometric Theory, 241-257.

[12] Andrews, D. (1994a) “Empirical process method in econometrics”, in R.F. Engle III and D.F.
     McFadden (eds.), The Handbook of Econometrics, vol. 4. North-Holland, Amsterdam.

[13] Andrews, D. (1994b) “Asymptotics for Semi-parametric Econometric Models via Stochastic
     Equicontinuity”, Econometrica, 62, 43-72.

[14] Andrews, D. and M. Schafgans (1998) “Semiparametric Estimation of the Intercept of a Sample
     Selection Model”, Review of Economic Studies, 65, 497-517.

[15] Andrews, D. and Y. Whang (1990) “Additive Interactive Regression Models: Circumvention of
     the Curse of Dimensionality”, Econometric Theory, 6, 466-479.

[16] Bahadur, R.R. (1964) “On Fisher’s bound for asymptotic variances”, Ann. Math. Statist. 35,
     1545-1552.

[17] Bansal, R., D. Hsieh and S. Viswanathan (1993) “A New Approach to International Arbitrage
     Pricing”, The Journal of Finance, 48, 1719-1747.

[18] Bansal, R. and S. Viswanathan (1993) “No Arbitrage and Arbitrage Pricing: A New Approach”,
     The Journal of Finance, 48(4), 1231-1262.


                                                61
[19] Barnett, W.A., J. Powell and G. Tauchen (1991) Non-parametric and Semi-parametric Methods
     in Econometrics and Statistics. Cambridge University Press, New York.

[20] Barron, A.R. (1993) “Universal Approximation Bounds for Superpositions of a Sigmoidal Func-
     tion”, IEEE Trans. Information Theory, 39, 930-945.

[21] Barron, A., L. Birgé, P. Massart (1999) “Risk bounds for model selection via penalization”, Probab.
     Theory Related Fields, 113, 301-413.

[22] Begun, J., W. Hall, W. Huang and J.A. Wellner (1983) “Information and asymptotic eﬃciency in
     parametric-nonparametric models”, The Annals of Statistics, 11, 432-452.

[23] Beresteanu, A. (2004) “Nonparametric Analysis of Cost Complementarities in the Telecommuni-
     cations Industry”, forthcoming in RAND Journal of Economics.

[24] Bierens, H. (1990) “A Consistent Conditional Moment Test of Functional Form”, Econometrica,
     58, 1443-1458.

[25] Bierens, H. and W. Ploberger (1997) “Asymptotic Theory of Integrated Conditional Moment
     Tests”, Econometrica, 65, 1129-1151.

[26] Bickel, P.J., C.A.J. Klaassen, Y. Ritov and J.A. Wellner (1993) Eﬃcient and adaptive estimation
     for semiparametric models. The John Hopkins University Press, Baltimore.

[27] Birgé, L., and P. Massart (1998) “Minimum contrast estimators on sieves: Exponential bounds
     and rates of convergence”, Bernoulli, 4 , 329-375

[28] Birman, M. and M. Solomjak (1967) “Piece-wise Polynomial Approximations of Functions in the
     Class Wpα ”, Mathematics of the USSR Sbornik 73 295-317.

[29] Blundell, R. and J. Powell (2003) “Endogeneity in Nonparametric and Semiparametric Regression
     Models”, in Hansen, L.P. (ed.), Advances in Econometrics. North Holland, Amsterdam.

[30] Blundell, R., M. Browning and I. Crawford (2003) “Non-parametric Engel Curves and Revealed
     Preference”, Econometrica, 71, 205-240.

[31] Blundell, R., X. Chen and D. Kristensen (2001) “Semiparametric Engel Curves with Endogenous
     Expenditure”, manuscript, University of College London and New York University.

[32] Blundell, R., A. Duncan and K. Pendakur (1998) “Semiparametric Estimation and Consumer
     Demand”, Journal of Applied Econometrics, 13, 435-461.

[33] Bonnal, H. and E. Renault (2004) “On the Eﬃcient Use of the Informational Content of Estimating
     Equations: Implied Probabilities and Euclidean Empirical Likelihood”, manuscript, University of
     Montreal.

[34] Brendstrup, B. and H. Paarsch (2004) “Identiﬁcation and Estimation in Sequential, Asymmetric,
     English Auctions”, manuscript, University of Iowa.

                                                  62
[35] Cai, Z., J. Fan and Q. Yao (2000) “Functional-coeﬃcient Regression Models for Nonlinear Time
     Series”, Journal of American Statistical Association, 95, 941-956.

[36] Cameron, S. and J. Heckman (1998) “Life Cycle Schooling and Dynamic Selection Bias”, Journal
     of Political Economy, 106, 262-333.

[37] Campbell, J. and J. Cochrane (1999) “By Force of Habit: A Consumption-Based Explanation of
     Aggregate Stock Market Behavior”, Journal of Political Economy, 107, 205-251.

[38] Carrasco, M., J.-P. Florens and E. Renault (2005) “Linear Inverse Problems in Structural Econo-
     metrics Estimation Based on Spectral Decomposition and Regularization”, in J.J. Heckman and
     E.E. Leamer (eds.), The Handbook of Econometrics, vol. 6. North-Holland, Amsterdam.

[39] Chamberlain, G. (1992) “Eﬃciency Bounds for Semiparametric Regression”, Econometrica, 60,
     567-596.

[40] Chapman, D. (1997) “Approximating the Asset Pricing Kernel”, Journal of Finance, 52(4), 1383-
     1410.

[41] Chen, X. and T. Conley (2001) “A New Semiparametric Spatial Model for Panel Time Series”,
     Journal of Econometrics, 105, 59-83.

[42] Chen, X. and Y. Fan (1999) “Consistent Hypothesis Testing in Semiparametric and Nonparametric
     Models for Econometric Time Series,” Journal of Econometrics, 91, 373-401

[43] Chen, X. and S. Ludvigson (2003) “Land of Addicts? An Empirical Investigation of Habit-Based
     Asset Pricing Models”, manuscript, New York University.

[44] Chen, X. and X. Shen (1996) “Asymptotic Properties of Sieve Extremum Estimates for Weakly
     Dependent Data with Applications”, manuscript, University of Chicago.

[45] Chen, X. and X. Shen (1998) “Sieve Extremum Estimates for Weakly Dependent Data”, Econo-
     metrica, 66, 289-314.

[46] Chen, X. and H. White (1999) “Improved Rates and Asymptotic Normality for Nonparametric
     Neural Network Estimators”, IEEE Tran. Information Theory, 45, 682-691.

[47] Chen, X., Y. Fan and V. Tsyrennikov (2004a) “Eﬃcient Estimation of Semiparametric Multivari-
     ate Copula Models”, manuscript, New York University.

[48] Chen, X., L.P. Hansen and J. Scheinkman (1998) “Shape-preserving Estimation of Diﬀusions”,
     manuscript, University of Chicago.

[49] Chen, X., H. Hong and E. Tamer (2005) “Measurement Error Models with Auxiliary Data”,
     Review of Economic Studies, 72, 343-366.




                                                63
[50] Chen, X., H. Hong and A. Tarozzi (2004b) “Semiparametric Eﬃciency in GMM Models of Nonclas-
     sical Measurement Errors, Missing Data and Treatment Eﬀects”, manuscript, New York University
     and Duke University.

[51] Chen, X., O. Linton and I. van Keilegom (2003) “Estimation of Semiparametric Models when the
     Criterion Function is not Smooth”, Econometrica, 71, 1591-1608.

[52] Chen, X., J. Racine and N. Swanson (2001) “Semiparametric ARX Neural Network Models with
     an Application to Forecasting Inﬂation”, IEEE Tran. Neural Networks, 12, 674-683.

[53] Chui, C. (1992) An Introduction to Wavelets. San Diego: Academic Press, Inc.

[54] Cochrane, J. (2001) Asset Pricing. Princeton University Press, Princeton, NJ.

[55] Constantinides, G. (1990) “Habit-formation: A Resolution of the Equity Premium Puzzle”, Jour-
     nal of Political Economy, 98, 519-543.

[56] Coppejans, M. (2001) “Estimation of the Binary Response Model using a Mixture of Distributions
     Estimator (MOD)”, Journal of Econometrics, 102, 231-261.

[57] Coppejans, M. (2002) “On Eﬃcient Estimation of the Ordered Response Model”, manuscript,
     Duke University, Dept. of Economics.

[58] Coppejans, M. and A.R. Gallant (2002) “Cross-validated SNP density estimates”, Journal of
     Econometrics, 110, 27-65.

[59] Cosslett, S. (1983) “Distribution-Free Maximum Likelihood Estimation of the Binary Choice
     Model”, Econometrica, 51, 765-782.

[60] Cybenko, G. (1990) “Approximation by Superpositions of a Sigmoid Function”, Mathematics of
     Control, Signals and Systems, 2, 303-314.

[61] Darolles, S., J.-P. Florens and E. Renault (2002): “Nonparametric Instrumental Regression,”
     mimeo, GREMAQ, University of Toulouse.

[62] Das, M., W.K. Newey and F. Vella (2003) “Nonparametric Estimation of Sample Selection Mod-
     els”, Review of Economic Studies, 70, 33-58.

[63] Daubechies, I. (1992) Ten Lectures on Wavelets, Philadelphia, SIAM.

[64] de Boor, C. (1978) A Practical Guide to Splines. Springer-Verlag, New York.

[65] Dechevsky, L. and S. Penev (1997) “On Shape-Preserving Probabilistic Wavelet Approximators”,
     Stochastic Analysis and Applications, 15, 187-215.

[66] de Jong, R. (1996) “The Bierens Test Under Data Dependence”, Journal of Econometrics 72 1-32.

[67] de Jong, R. (2002) “A Note on ‘Convergence Rates and Asymptotic Normality for Series Estima-
     tors,’: Uniform Convergence Rates”, Journal of Econometrics 111, 1-9.

                                                64
[68] DeVore, R.A. (1977a) “Monotone Approximation by Splines”, SIAM Journal on Mathematical
     Analysis, 8, 891-905.

[69] DeVore, R.A. (1977b) “Monotone Approximation by Polynomials”, SIAM Journal on Mathemat-
     ical Analysis, 8, 906-921.

[70] DeVore, R.A. and G. G. Lorentz (1993) Constructive Approximation. Springer-Verlag, Berlin.

[71] Donald, S. and W. Newey (2001) “Choosing the Number of Instruments”, Econometrica, 69,
     1161-1191.

[72] Donald, S., G. Imbens and W. Newey (2003): “Empirical Likelihood Estimation and Consistent
     Tests with Conditional Moment Restrictions,” Journal of Econometrics, 117, 55–93.

[73] Donoho, D. L., I. M. Johnstone, G. Kerkyacharian and D. Picard (1995) “Wavelet Shrinkage:
     Asymptopia?” Journal of the Royal Statistical Society, Series B, 57, 301-369.

[74] Doukhan, P., P. Massart and E. Rio (1995) “Invariance Principles for Absolutely Regular Empir-
     ical Processes,” Ann. Inst. Henri Poincaré - Probabilités et Statistiques, 31, 393-427.

[75] Duncan, G.M. (1986) “A Semiparametric Censored Regression Estimator”, Journal of Economet-
     rics, 32, 5-34.

[76] Eastwood, B. and A. Gallant (1991) “Adaptive Rules for Seminonparametric Estimators that
     Achieve Asymptotic Normality”, Econometric Theory, 7, 307-340.

[77] Eichenbaum, M. and L.P. Hansen (1990) “Estimating Models with Intertemporal Substitution
     Using Aggregate Time Series Data”, Journal of Business and Economic Statistics, 8, 53-69.

[78] Elbadawi, I., A.R. Gallant and G. Souza (1983) “An Elasticity Can Be Estimated Consistently
     Without A Prior Knowledge of Functional Form”, Econometrica, 51, 1731-1751

[79] Engle, R. and G. Gonzalez-Rivera (1991) “Semiparametric ARCH Models”, Journal of Business
     and Economic Statistics, 9, 345-359.

[80] Engle, R., C. Granger, J. Rice and A. Weiss (1986) “Semiparametric Estimates of the Relation
     between Weather and Electricity Sales”, Journal of the American Statistical Association, 81, 310-
     320.

[81] Engle, R.F. and D.F. McFadden (1994) The Handbook of Econometrics, vol. 4. North-Holland,
     Amsterdam.

[82] Engle, R. and G. Rangel (2004) “The Spline GARCH Model for Unconditional Volatility and its
     Global Macroeconomic Causes”, Working paper, New York University.

[83] Fan, J. and I. Gijbels (1996) Local Polynomial Modelling and Its Applications Chapman and Hall,
     London.


                                                 65
[84] Fan, J. and H. Peng (2004) “On Non-concave Penalized Likelihood with Diverging Number of
     Parameters”, The Annals of Statistics, 32, 928-961.

[85] Fan, J. and Q. Yao (2003) Nonlinear Time Series: Nonparametric and Parametric Methods
     Springer-Verlag, New York.

[86] Fan, J., C. Zhang and J. Zhang (2001) “Generalized Likelihood Ratio Statistics and Wilks Phe-
     nomenon”, The Annals of Statistics, 29, 153-193.

[87] Fan, Y. and Q. Li (1996) “Consistent Model Speciﬁcation Tests: Omitted Variables, Parametric
     and Semiparametric Functional Forms”, Econometrica, 64, 865-890

[88] Fan, Y. and O. Linton (1999) “Some Higher Order Theory for a Consistent Nonparametric Model
     Speciﬁcation Test”, working paper LSE.

[89] Flinn, C. and J. Heckman (1982) “New Methods for Analyzing Structural Models of Labor Force
     Dynamics”, Journal of Econometrics, 18, 115-168.

[90] Gabushin, (1967) “Inequalities for Norms of Functions and their Derivatives in the Lp Metric”,
     Matematicheskie Zametki, 1, 291-298.

[91] Gallant, A.R. (1987) “Identiﬁcation and Consistency in Seminonparametric Regression”, in T. F.
     Bewley (ed.), Advances in Econometrics, Cambridge University Press, Vol. I, 145-170.

[92] Gallant, A.R. and D. Nychka (1987) ”Semi-non-parametric maximum likelihood estimation”,
     Econometrica, 55, 363-390.

[93] Gallant, A.R. and G. Souza (1991) “On the Asymptotic Normality of Fourier Flexible Form
     Estimates”, Journal of Econometrics, 50, 329-353.

[94] Gallant, A.R. and G. Tauchen (1989) “Semiparametric Estimation of Conditional Constrained
     Heterogenous Processes: Asset Pricing Applications”, Econometrica, 57, 1091-1120.

[95] Gallant, A.R. and G. Tauchen (1996) “Which Moments to Match?” Econometric Theory, 12,
     657-681.

[96] Gallant, A.R. and G. Tauchen (2001) “Eﬃcient Method of Moments”, Working paper, Duke
     University.

[97] Gallant, A.R. and G. Tauchen (2004) “EMM: A Program for Eﬃcient Method of Moments Esti-
     mation, Version 2.0 User’s Guide”, Working paper, Duke University.

[98] Gallant, A.R. and H. White (1988a) “There Exists a Neural Network That does not Make Avoid-
     able Mistakes”, in Proceedings of the IEEE 1988 International Conference on Neural Networks,
     Vol. 1, IEEE, New York, pp. 657-664.

[99] Gallant, A.R. and H. White (1988b) A Uniﬁed Theory of Estimation and Inference for Nonlinear
     Dynamic Models. Oxford: Basil Blackwell.

                                               66
[100] Gallant, A.R. and H. White (1992) “On Learning the Derivatives of an Unknown Mapping with
      Multilayer Feedforward Networks”, Neural Networks 5, 129-138.

[101] Gallant, A.R., D. Hsieh and G. Tauchen (1991) “On Fitting a Recalcitrant Series: The
      Pound/Dollar Exchange Rate, 1974-83”, in Barnett, W.A., J. Powell and G. Tauchen (eds.), Non-
      parametric and Semi-parametric Methods in Econometrics and Statistics. New York: Cambridge
      University Press, 199-240.

[102] Geman, S. and C. Hwang (1982) “Nonparametric Maximum Likelihood Estimation by the Method
      of Sieves”, The Annals of Statistics, 10, 401-414.

[103] Girosi, F. (1994) “Regularization theory, radial basis functions and networks”, In From Statistics
      to Neural Networks. Theory and Pattern Recognition Applications, V. Cherkassky, J.H. Friedman,
      and H. Wechsler, eds. Springer-Verlag, Berlin.

[104] Gourieroux, C. and A. Monfort (1995) Statistics and Econometric Models, New York: Cambridge
      University Press.

[105] Granger, C.W.J., and T. Terasvirta (1993) Modelling nonlinear economic relationships, Oxford,
      New York.

[106] Grenander, U. (1981) Abstract Inference, New York: Wiley Series.

[107] Haerdle, W. and O. Linton (1994) “Applied Nonparametric Methods”, in R.F. Engle III and D.F.
      McFadden (eds.), The Handbook of Econometrics, vol. 4. North-Holland, Amsterdam.

[108] Hahn, J. (1998) “On the Role of the Propensity Score in Eﬃcient Semiparametric Estimation of
      Average Treatment Eﬀects”, Econometrica, 66, 315-332.

[109] Hall, P. and J. Horowitz (2005): “Nonparametric Methods for Inference in the Presence of Instru-
      mental Variables,” forthcoming in Annals of Statistics.

[110] Hansen, L.P. (1982) “Large Sample Properties of Generalized Method of Moments Estimators”,
      Econometrica, 50, 1029-1054.

[111] Hansen, L.P. (1985) “A Method for Calculating Bounds on the Asymptotic Covariance Matrices
      of Generalized Method of Moments Estimators”, Journal of Econometrics, 30, 203-238.

[112] Hansen, L.P. and K. Singleton (1982) “Generalized Instrumental Variables Estimation of Nonlin-
      ear Rational Expectations Models”, Econometrica, 50, 1269-86.

[113] Hansen, L.P. and S. Richard (1987): “The Role of Conditioning Information in Deducing Testable
      Restrictions Implied by Dynamic Asset Pricing Models”, Econometrica, 55, 587-613.

[114] Hansen, M.H. (1994) Extended Linear Models, Multivariate Splines, and ANOVA. Ph. D. Disser-
      tation, Department of Statistics, University of California at Berkeley.

[115] Hart, J. (1997) Nonparametric Smoothing and Lack-of-Fit Tests, New York: Springer-Verlag.

                                                  67
[116] Hausman, J. and W. Newey (1995) “Nonparametric Estimation of Exact Consumer Surplus and
      Deadweight Loss”, Econometrica, 63, 1445-1467.

[117] Heckman, J. (1979) “Sample Selection Bias as a Speciﬁcation Error”, Econometrica, 47, 153-161.

[118] Heckman, J. and B. Singer (1984) “A Method for Minimizing the Impact of Distributional As-
      sumptions in Econometric Models for Duration Data”, Econometrica, 68, 839-874.

[119] Heckman, J. and R. Willis (1977) “A Beta Logistic Model for the Analysis of Sequential Labor
      Force Participation of Marries Women”, Journal of Political Economy, 85, 27-58.

[120] Heckman, J., H. Ichimura, J. Smith and P. Todd (1998) “Characterization of Selection Bias Using
      Experimental Data”, Econometrica, 66, 1017-1098.

[121] Hirano, K., G. Imbens and G. Ridder (2003) “Eﬃcient Estimation of Average Treatment Eﬀects
      Using the Estimated Propensity Score”, Econometrica, 71, 1161-1189.

[122] Hong, Y. and H. White (1995) “Consistent Speciﬁcation Testing via Nonparametric Series Re-
      gression”, Econometrica, 63, 1133-1159.

[123] Honore, B. (1990) “Simple Estimation of a Duration Model with Unobserved Heterogeneity,”
      Econometrica 58, 453-473.

[124] Honore, B. (1994) “A Note on the Rate of Convergence of Estimators of Mixtures of Weibulls”,
      manuscript, Northwestern University.

[125] Honore, B. and E. Kyriazidou (2000) “Panel Data Discrete Choice Models with Lagged Dependent
      Variables”, Econometrica, 68, 839-874.

[126] Hornik, K., M. Stinchcombe and H. White (1989) “Multilayer feedforward networks are universal
      approximators”, Neural Networks, 2, 359-366.

[127] Hornik, K., M. Stinchcombe, H. White and P. Auer (1994) “Degree of approximation results for
      feedforward networks approximating unknown mappings and their derivatives”, Neural Compu-
      tation, 6, 1262-75.

[128] Horowitz, J. (1992) “A smoothed Maximum Score Estimator for the Binary Response Model”,
      Econometrica, 60, 505-531.

[129] Horowitz, J. (1998) Semiparametric Methods in Econometrics. New York Springer-Verlag.

[130] Horowitz, J. and S. Lee (2004) “Nonparametric Estimation of An Additive Quantile Regression
      Model”, manuscript, Northwestern University.

[131] Horowitz, J. and E. Mammen (2004) “Nonparametric Estimation of An Additive Model with A
      Link Function”, Annals of Statistics, 32, No. 6.

[132] Horowitz, J. and V. Spokoiny (2001) “An Adaptive, Rate-Optimal Test of a Parametric Mean-
      Regression Model Against a Nonparametric Alternative”, Econometrica, 69, 599-631.

                                                 68
[133] Huang, J.Z. (1998a) “Projection estimation in multiple regression with application to functional
      ANOVA models”, The Annals of Statistics, 26, 242-272.

[134] Huang, J.Z. (1998b) “Functional ANOVA models for generalized regression”, Journal of Multi-
      variate Analysis, 67, 49-71.

[135] Huang, J.Z. (2001) “Concave extended linear modeling: a theoretical synthesis”, Statistica Sinica,
      11, 173-197.

[136] Huang, J.Z. (2003) “Local asymptotics for polynomial spline regression”, The Annals of Statistics,
      31, 1600-1635.

[137] Huang, J.Z., C. Kooperberg, C.J. Stone and Y.K. Truong (2000) “Functional ANOVA modeling
      for proportional hazards regression”, The Annals of Statistics, 28, 960-999.

[138] Hurvich, C., J. Simonoﬀ and C. Tsai (1998) “Smoothing parameter selection in nonparametric re-
      gression using an improved Akaike information criterion”, Journal of the Royal Statistical Society,
      Series B, 60, 271-293.

[139] Hutchinson, J., A. Lo and T. Poggio (1994) “A non-parametric approach to pricing and hedging
      derivative securities via learning networks”, J. of Finance, 3, 851-889.

[140] Ibragimov, I.A. and R.Z. Has’minskii (1991) “Asymptotically normal families of distributions and
      eﬃcient estimation”, The Annals of Statistics, 19, 1681-1724.

[141] Ichimura, H. (1993) “Semiparametric Least Squares (SLS) and Weighted SLS Estimation of Single
      Index Models”, Journal of Econometrics, 58, 71-120.

[142] Ichimura, H. and S. Lee (2005) “Characterization of the Asymptotic Distribution of Semipara-
      metric M-Estimators”, manuscript, UCL.

[143] Ichimura, H. and O. Linton (2002) “Asymptotic Expansions for Some Semiparametric Program
      Evaluation Estimators”, working paper IFS and LSE.

[144] Ichimura, H. and P. Todd (2005) “Implementing Nonparametric and Semiparametric Estimators”,
      in J.J. Heckman and E.E. Leamer (eds.), The Handbook of Econometrics, vol. 6. North-Holland,
      Amsterdam.

[145] Imbens, G., W. Newey and G. Ridder (2005) “Mean-squared-error Calculations for Average Treat-
      ment Eﬀects”, manuscript, UC Berkeley.

[146] Ishwaran, H. (1996a) “Identiﬁcation and Rates of Estimation for Scale Parameters in Location
      Mixture Models”, The Annals of Statistics, 24, 1560-1571.

[147] Ishwaran, H. (1996b) “Uniform Rates of Estimation in the Semiparametric Weibull Mixture Mod-
      els”, The Annals of Statistics, 24, 1572-1585.



                                                   69
[148] Jovanovic, B. (1979) “Job Matching and the Theory of Turnover”, Journal of Political Economy,
      87, 972-990.

[149] Judd, K. (1998) Numerical Method in Economics, MIT University Press.

[150] Kim, J. and D. Pollard (1990) “Cube Root Asymptotics”, The Annals of Statistics, 18, 191-219.

[151] Kitamura, Y., G. Tripathi and H. Ahn (2004) “Empirical Likelihood-based Inference in Condi-
      tional Moment Restriction Models”, Econometrica, 72, 1667-1714.

[152] Khan, S. (2002) “An Alternative Approach to Semiparametric Estimation of Heteroskedastic
      Binary Response Models”, manuscript, University of Rochester.

[153] Klein, R. and R. Spady (1993) “An Eﬃcient Semiparametric Estimator for Binary Response
      Models”, Econometrica, 61, 387-421.

[154] Koenker, R. and G. Bassett (1978) “Regression quantiles”, Econometrica, 46, 33-50.

[155] Koenker, R. and I. Mizera (2003) “Penalized Triograms: Total Variation Regularization for Bi-
      variate Smoothing”, J. Royal Stat. Soc., B, 66, 145-163.

[156] Koenker, R., P. Ng and S. Portnoy (1994) “Quantile Smoothing Splines”, Biometrika, 81, 673-680.

[157] Kooperberg, C., C.J. Stone and Y.K. Truong (1995a) “Hazard regression”, Journal of the Amer-
      ican Statistical Association, 90, 78-94.

[158] Kooperberg, C., C.J. Stone and Y. K. Truong (1995b) “Rate of convergence for logspline spectral
      density estimation”, Journal of Time Series Analysis, 16, 389-401.

[159] Lavergne, P. and Q. Vuong (1996) “Nonparametric Selection of Regressors: the Nonnested Case”,
      Econometrica, 64, 207-219.

[160] LeCam, L. (1960) “Local asymptotically normal families of distributions”, Univ. California Pub-
      lications in Statist. 3, 37-98.

[161] Lee, S. (2003) “Eﬃcient Semiparametric Estimation of a Partially Linear Quantile Regression
      Model”, Econometric Theory, 19, 1-31.

[162] Levit, B. (1978) “Inﬁnite dimensional informational inequalities”, Theory Proba. Appl., 23, 371-
      377.

[163] Li, K. (1987) “Asymptotic Optimality for Cp , CL , Cross-validation, and Generalized Cross-
      validation: Discrete Index Set”, Annals of Statistics 15, 958-975.

[164] Li, Q. (2000) “Eﬃcient Estimation of Additive Partially Linear Models”, International Economic
      Review, 41, 1073-1092.

[165] Li, Q. and J. Racine (2006) Nonparametric Econometrics Theory and Practice, forthcoming in
      Princeton University Press.

                                                 70
[166] Li, Q., C. Hsiao and J. Zinn (2003) “Consistent Speciﬁcation Tests for Semiparamet-
      ric/Nonparametric Models Based on Series Estiamtion Methods”, Journal of Econometrics, 112,
      241-402.

[167] Linton, O. (1995) “Second Order Approximation in the Partially Linear Regression Model”,
      Econometrica, 63, 1079-1112.

[168] Linton, O. (2001) “Edgeworth Approximations for Semiparametric Instrumental Variable Esti-
      mators and Test Statistics”, Journal of Econometrics, 106, 325-368.

[169] Lorentz, G. (1966) Approximation of functions, New York: Holt.

[170] Mahajan, A. (2004) “Identiﬁcation and Estimation of Single Index Models with Misclassiﬁed
      Regressors”, manuscript, Stanford University.

[171] Makovoz, Y. (1996) “Random approximants and neural networks”, J. Approximation Theory, 85,
      98-109.

[172] Manski, C. (1985) “Semiparametric Analysis of Discrete Response: Asymptotic Properties of the
      Maximum Score Estimator”, Journal of Econometrics, 27, 313-334.

[173] Manski, C. (1994) “Analog Estimation of Econometric Models”, in R.F. Engle III and D.F. Mc-
      Fadden (eds.), The Handbook of Econometrics, vol. 4. North-Holland, Amsterdam.

[174] Matzkin, R.L. (1994) “Restrictions of Economic Theory in Nonparametric Methods”, in R.F. Engle
      III and D.F. McFadden (eds.), The Handbook of Econometrics, vol. 4. North-Holland, Amsterdam.

[175] McCaﬀrey, D., S. Ellner, A. Gallant and D. Nychka (1992) “Estimating the Lyapunov exponent of
      a chaotic system with nonparametric regression,” Journal of the American Statistical Association
      87, 682-695.

[176] Meyer, Y. (1992) Ondelettes et operateurs I: Ondelettes, Paris: Hermann.

[177] Murphy, S. and A. van der Vaart (2000) “On Proﬁle Likelihood”, Journal of the American Sta-
      tistical Association, 95, 449-465.

[178] Newey, W.K. (1988) “Two Step Series Estimation of Sample Selection Models”, manuscript, MIT
      Department of Economics.

[179] Newey, W.K. (1990a) “Semiparametric Eﬃciency Bounds,” Journal of Applied Econometrics, 5,
      99-135.

[180] Newey, W.K. (1990b) “Eﬃcient Instrumental Variables Estimation of Nonlinear Models”, Econo-
      metrica, 58, 809-837.

[181] Newey, W.K. (1991) “Uniform Convergence in Probability and Stochastic Equicontinuity”, Econo-
      metrica, 59, 1161-1167.


                                                 71
[182] Newey, W.K. (1993) “Eﬃcient Estimation of Models with Conditional Moment Restrictions, in
      Handbook of Statistics, Vol. 11, G.S. Maddala, C.R. Rao, and H.D. Vinod, eds., Amsterdam:
      North-Holland.

[183] Newey, W.K. (1994a) “The Asymptotic Variance of Semiparametric Estimators”, Econometrica,
      62, 1349-1382.

[184] Newey, W.K. (1994b) “Series Estimation of Regression Functionals”, Econometric Theory, 10,
      1-28.

[185] Newey, W.K. (1997) “Convergence Rates and Asymptotic Normality for Series Estimators”, Jour-
      nal of Econometrics, 79, 147-168.

[186] Newey, W.K. (2001) “Flexible Simulated Moment Estimation of Nonlinear Errors in Variables
      Models,” Review of Economics and Statistics, 83, 616-627.

[187] Newey, W.K. and D. F. McFadden (1994) “Large sample estimation and hypothesis testing”, in
      R.F. Engle III and D.F. McFadden (eds.), The Handbook of Econometrics, vol. 4. North-Holland,
      Amsterdam.

[188] Newey, W.K. and J.L Powell (2003) “Instrumental Variable Estimation of Nonparametric Models”,
      Econometrica, 71, 1565-1578. Working paper version, 1989.

[189] Newey, W.K. and R. Smith (2004) “Higher Order Properties of GMM and Generalized Empirical
      Likelihood Estimators”, Econometrica, 72, 219-256.

[190] Newey, W.K., J.L. Powell and F. Vella (1999) “Nonparametric Estimation of Triangular Simulta-
      neous Equations Models”, Econometrica, 67, 565-603.

[191] Nishiyama, Y. and P.M. Robinson (2000) “Edgeworth Expansions for Semiparametric Averaged
      Derivatives”, Econometrica 68, 931-980.

[192] Ossiander, M. (1987) “A central limit theorem under metric entropy with L2 bracketing”, The
      Annals of Probability, 15, 897-919.

[193] Pagan, A. and A. Ullah (1999) Nonparametric Econometrics, Cambridge University Press.

[194] Pakes, A. and S. Olley (1995) “A Limit Theorem for A Smooth Class of Semiparametric Estima-
      tors”, Journal of Econometrics, 65, 295-332.

[195] Pinkse, J. (2000) “Nonparametric Two-step Regression Estimation When Regressors and Errors
      are Dependent”, Canadian Journal of Statistics, 28, 289-300.

[196] Pollard, D. (1984) Convergence of Statistical Processes. Springer-Verlag, New York.

[197] Polk, C., S. Thompson and T. Vuolteenaho (2003) “New Forecasts of the Equity Premium,”
      manuscript, Harvard University.


                                                 72
[198] Portnoy, S. (1997) “Local Asymptotics for Quantile Smoothing Splines,” The Annals of Statistics,
      25, 387-413.

[199] Powell, J., J. Stock and T. Stoker (1989) “Semiparametric Estimation of Index Coeﬃcients”,
      Econometrica, 57, 1403-1430.

[200] Powell, J. (1994) “Estimation of Semiparametric Models”, in R.F. Engle III and D.F. McFadden
      (eds.), The Handbook of Econometrics, vol. 4. North-Holland, Amsterdam.

[201] Robinson, P. (1988) “Root-N-Consistent Semiparametric Regression”, Econometrica, 56, 931-954.

[202] Robinson, P. (1989) “Hypothesis Testing in Semiparametric and Nonparametric Models for Econo-
      metric Time Series”, Review of Economic Studies, 56, 511-534.

[203] Robinson, P. (1995) “The Normal Approximation for Semiparametric Averaged Derivatives”,
      Econometrica, 63, 667-680.

[204] Schumaker, L. (1981) Spline Functions: Basic Theory. New York: John Wiley & Sons.

[205] Severini, T. and H.W. Wong (1992) “Proﬁle Likelihood and Conditionally Parametric Models”,
      The Annals of Statistics, 20, 1768-1802.

[206] Shen, X. (1997) “On Methods of Sieves and Penalization”, The Annals of Statistics, 25, 2555-2591.

[207] Shen, X. and W. Wong (1994) “Convergence Rate of Sieve Estimates”, The Annals of Statistics,
      22, 580-615.

[208] Shen, X. and J. Ye (2002) “Adaptive Model Selection”, Journal of American Statistical Association
      97, 210-221.

[209] Shintani, M. and O. Linton (2003) “Nonparametric Neural Network Estimation of Lyapunov
      Exponents and a Direct Test for Chaos,” Journal of Econometrics, forthcoming.

[210] Song, K. (2005) “Testing Semiparametric Conditional Moment Restrictions Using Conditional
      Martingale Transforms,” manuscript, Yale University, Dept. of Economics.

[211] Stinchcombe, M. (2002) “Some Genericity Analyses in Nonparametric Econometrics”, manuscript,
      University of Texas, Austin, Dept. of Economics.

[212] Stinchcombe, M. and H. White (1998) “Consistent Speciﬁcation Testing with Nuisance Parameters
      Present Only Under the Alternative”, Econometric Theory, 14, 295-325.

[213] Stone, C.J. (1982) “Optimal Global Rates of Convergence for Nonparametric Regression”, The
      Annals of Statistics, 10, 1040-1053.

[214] Stone, C.J. (1985) “Additive regression and other nonparametric models”, The Annals of Statis-
      tics, 13, 689-705.



                                                  73
[215] Stone, C.J. (1986) “The dimensionality reduction principle for generalized additive models”, The
      Annals of Statistics, 14, 590-606.

[216] Stone, C.J. (1990) “Large-sample inference for log-spline models”, The Annals of Statistics, 18,
      717-741.

[217] Stone, C.J. (1994) “The use of polynomial splines and their tensor products in multivariate func-
      tion estimation” (with discussion), The Annals of Statistics, 22, 118-184.

[218] Stone, C.J., M. Hansen, C. Kooperberg and Y.K. Truong (1997) “Polynomial splines and their
      tensor products in extended linear modeling” (with discussion), The Annals of Statistics, 25,
      1371-1470.

[219] Strawderman, R.L. and A. A. Tsiatis (1996) “On the asymptotic properties of a ﬂexible hazard
      estimator,” The Annals of Statistics, 24 , 41-63.

[220] Timan, A.F. (1963) Theory of Approximation of Functions of a Real Variable, MacMillan, New
      York.

[221] Van de Geer, S. (1993) “Hellinger-consistency of certain nonparametric maximum likelihood esti-
      mators”, The Annals of Statistics, 21, 14-44.

[222] Van de Geer, S. (1995) “The method of sieves and minimum contrast estimators”, Mathematical
      Methods of Statistics, 4 , 20-38.

[223] Van de Geer, S. (2000) Empirical Processes in M-estimation, Cambridge University Press.

[224] Van der Vaart, A. (1991) “On Diﬀerentiable Functionals”, The Annals of Statistics, 19, 178-204.

[225] Van der Vaart, A. and J. Wellner (1996) Weak Convergence and Empirical Processes: with Ap-
      plications to Statistics, New York: Springer-Verlag.

[226] Wahba, G. (1990) Spline Models for Observational Data, CBMS-NSF Regional Conference Series,
      Philadelphia.

[227] White, H. (1984) Asymptotic Theory for Econometricians. Academic Press.

[228] White, H. (1990) “Connectionist Nonparametric Regression: Multilayer Feedforward Networks
      Can Learn Arbitrary Mappings”, Neural Networks, 3, 535-550.

[229] White, H. (1994) Estimation, Inference and Speciﬁcation Analysis, Cambridge University Press.

[230] White, H. and J. Wooldridge (1991) “Some results on sieve estimation with dependent observa-
      tions”, in Barnett, W.A., J. Powell and G. Tauchen (eds.), Non-parametric and Semi-parametric
      Methods in Econometrics and Statistics. New York: Cambridge University Press.

[231] Wong, W.H. (1992) “On Asymptotic Eﬃciency in Estimation Theory”, Statistica Sinica, 2, 47-68.



                                                  74
[232] Wong, W.H. and T. Severini (1991) “On Maximum Likelihood Estimation in Inﬁnite Dimensional
      Parameter Spaces”, The Annals of Statistics, 19, 603-632.

[233] Wong, W.H. and X. Shen (1995) “Probability inequalities for likelihood ratios and convergence
      rates for sieve MLE’s”, The Annals of Statistics, 23, 339-362.

[234] Wooldridge, J. (1992) “A Test for Functional Form Against Nonparametric Alternatives”, Econo-
      metric Theory 8, 452–475.

[235] Wooldridge, J. (1994) “Estimation and Inference for Dependent Processes”, in R.F. Engle III and
      D.F. McFadden (eds.), The Handbook of Econometrics, vol. 4. North-Holland, Amsterdam.

[236] Xiao, Z. and O. Linton (2001) “Second Order Approximation for an Adaptive Estimator in a
      Linear Regression”, Econometric Theory 17, 984-1024.

[237] Zhang, J. and I. Gijbels (2003) “Sieve Empirical Likelihood and Extensions of the Generalized
      Least Squares”, Scandinavian Journal of Statistics, 30, 1-24.

[238] Zhou, S., X. Shen and D. A. Wolfe (1998) “Local Asymptotics for Regression Splines and Conﬁ-
      dence Regions”, The Annals of Statistics, 26 1760-1782.




                                                 75



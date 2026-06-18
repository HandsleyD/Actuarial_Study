---
normalized_id: shared-pdf-reference-econometric-analysis-of-qualitive-response-models
exam_code: SHARED
material_scope: econometric analysis of qualitive response models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Econometric ANalysis of Qualitive Response Models.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-econometric-analysis-of-qualitive-response-models

Chuppter 24


ECONOMETRIC  ANALYSIS                             OF QUALITATIVE
RESPONSE MODELS
DANIEL L. MCFADDEN
Massachusetts Institute of Technology


Contents
1.   The problem                                                                    1396
2.   Binomial response models                                                       1396
     2.1.     Latent variable specification                                         1396
     2.2.     Functional forms                                                      1397
     2.3.     Estimation                                                            1398
     2.4.     Contingency table analysis                                            1400
     2.5.     Minimum &i-square method                                              1400
     2.6.     Discriminant analysis                                                 1401
3.    Multinomial response models                                                   1403
      3.1.    Foundations                                                           1403
      3.2.    Statistical analysis                                                  1406
      3.3. Functional form                                                          1410
      3.4. The multinomial logit model                                              1411
      3.5. Independence from irrelevant alternatives                                1413
      3.6. Limiting the number of alternatives                                      1415
      3.7.    Specification tests for the MNL model                                 1417
      3.8.    Multinomial probit                                                    1418
      3.9. Elimination models                                                       1420
     3.10. Hierarchical response models                                             1422
     3.11. An empirical example                                                     1428
4.    Further topics                                                                1433
      4.1.    Extensions                                                            1433
      4.2.    Dynamic models                                                        1433
      4.3.    Discrete-continuous     systems                                       1434
      4.4.    Self-selection and biased samples                                     1436
      4.5.    Statistical methods                                                   1439
5.  Conclusion                                                                      1442
Appendix: Proof outlines for Theorems l-3                                           1442
References                                                                          1446

Handbook of Econometrics, Volume II, Edited by Z. Griliches and M.D. Intriligator
0 Elseoier Science Publishers BV, 1984
1396                                                                   D. L. McFadden




1.      The problem




                                                                                 An
example is potential bias in analysis of housing expenditure      in a self-selected
population of renters.


2.      Binomial response models



2. I.    Latent variable specification

The starting point for econometric analysis of a continuous response variable y is
often a linear regression model:

        Y, = XrP- Et,                                                          (2.1)
where x is a vector of exogenous variables, E is an unobserved disturbance, and
t=l , . . . , T indexes sample observations. The disturbances are usually assumed to
have a convenient cumulative distribution function F(E~x) such as multi-
variate normal. The model is then characterized by the conditional distribution
Ch. 24: Qualitative Response Models                                             1397

F(y    - xplx),up to the unknown parameters /3 and parameters of the distribution
F. In economic applications,    xp may have a structure derived exactly or ap-
proximately from theory. For example, competitive firms may have x/3 de-
termined by Shephard’s identity from a profit function.
   The linear regression model is extended to binomial response by introducing an
intermediate unobserved (latent) variable y* with:

       Y: = X,P-

and an

                         0,      ify:<O,
                                 ify: 2 0.                                     (2.3)
                       i 1,

If I;(E(x) is the cumulative distribution function of the disturbances, then just as
in the continuous case the model is characterized by the conditional distribution
of Y given x:

       P,=P(z(y*)=l(x)
          =P(y*=xP-&20)                                                        (2.4)
          = w+),

also termed the response probability.


2.2.    Functional forms

The most common binomial models, which assume E independent          of x, are logit
with

       F(xP) =l/(l       +eeXB),                                               (2.5)
probit with

                  =                                                           (2.6)
where @ is the standard cumulative normal, the linear probability model with

       F(xj3)=x/3             (O<xB<l),                                       (2.7)
and the log linear model with

       F( xa) = eXfl          (x/ho).                                         (2.8)
1398                                                                                D. 15. McFadden

The last two models require restrictions on the domain of the latent variable
which may be difficult to enforce in estimation or forecasting.
  The preceding models are derived from distribution functions with thin tails.
Alternatives in which the response probabilities approach zero or one less rapidly
can be constructed from the Student-t or Cauchy distributions; the latter yields
the arctan mod&


       F(x/3) = f + $ tan-‘(#).                                                               (2.9)


   For a given latent variable model y* = x/3 + E, specification of the distribution
function F for E may change substantially the model’s ability to fit data,
particularly if restrictions are imposed on the domain of x/I.’ However respecifi-
cation of the latent variable model can circumvent this problem. Suppose F(E) is
any continuous cumulative distribution function, and $ A ln( F( j?x)/(l -
F(px))) is a linear (in parameters B) global approximation on a compact set2 of
/3x satisfying 0 < F( px) -C1. Then to any desired level of accuracy, the response
probability is logistic in the transformed latent variable model jj* = Zb + E:

       F(xj3)      =l/(l+ePi8).                                                              (2.10)

Thus, the question of the appropriate F is recast as the question of the ap-
propriate specification of arithmetic transformations 2 of the data x in a logit
model.3


2.3.    Estimation

Consider a sample ( y,, x,) with observations indexed t = 1,. . . , T, and a binomial
model PI, = F(xJ3). Assume the sample is random4 with independent observa-
tions. Then the log-likelihood normalized by sample size is:


       L =f        i     [ y,ln P,, + (l-   y,)ln Pot],                                      (2.11)
                   t=1

  ‘The logit and probit models however are rarely distinguishable empirically.
  *The existence of such an approximation is guaranteed by the Weierstrauss approximation theorem.
A constructive approximation theorem with explicit error bounds is given in McFadden (1981).
  30bviously, the logit base cdf could be replaced by any other continuous invertible cdf G( e), with
.$*G-‘(F(.x/~)).
  4Specifically, the probability of being sampled is assumed independent of response; stratification
with respect to X, is permitted.
Ch. 24: Qualitative Response Models                                                                  1399


with PI, = F(x,p)          and PO, = 1 - PI,. The gradient of this function is:


     L/3 = f     i       Wt(Y, - GP)L                                                             (2.12)
                r=l


with w, = F’(x,P)/P,,,P,,,               and the hessian is:

                                                                                                  (2.13)

where
                     T
      JT = f     c       w;P,,,PI,x,x;      = - ELss                                               (2.14)
                r=l


is the information          matrix, and

      u, = (F”W)+(p1,- P,,)(F’(x,p))2)/p~,Pl,.                                                     (2.15)

Under mild regularity conditions, detailed in Section                 the maximum
likelihood estimator fi of is consistent, and 4T (b -      is asymptotically normal
with mean zero and covariance matrix J- ’ = lim,, mJ; ‘. Solution of the normal
equation (2.12) usually requires an iterative procedure. Optimizers such as
Newton-Raphson, quadratic hill-climbing, or BHHH’ work well if three cautions
are observed:
   (1) Accurate numerical approximations for In F(x,& and ln(1 - F(x,p)) are
needed in the tails of the distribution.
   (2) There is a small (and vanishing) probability, in models where the domain of
F is unbounded, that the maximum likelihood estimator will fail to exist and
response is perfectly correlated with the sign of an index xp. Adding a test for
this condition during iteration permits detection of this case and estimation of the
relative weights p. For sample sizes of a few hundred, this outcome is extremely
improbable unless the analyst has entered misspecified x variables which depend
on y.
   %ee Bemdt-Hausman-Hall-Hall(l974)           and Goldfeld and Quandt (1972) for discussions of these
algorithms. The largest component of computation cost in maximum likelihood estimation is usually
evaluation of the response probabilities. Consequently, for maximum efficiency, the number of
function evaluations and passes through the data should be minimized. This is usually achieved by
using analytic derivatives calculated jointly with the likelihood for each observation. For initial search,
it may be advantageous to calculate the hessian matrix required for the Newton-Raphson search
direction rather than use the BHHH approximation. Methods such as Davidon-Fletcher-Powell
which use numerical updates of the hessian matrix are not usually efficient for these problems. A
careful interpolation along the direction of search (e.g. Davidon’s linear search method which uses
cubic interpolation) usually speeds convergence.
1400                                                                   D. L. McFudden

   (3) The log-likelihood L need not be concave in the general case, and there may
be local maxima. However, the logit, probit, and linear probability models for
binomial response have strictly concave log-likelihood functions, provided the
explanatory variables are linearly independent. A check of the condition number
of the information matrix Jr during iteration should detect linear dependencies.
   A family of consistent estimators of p can be derived by replacing wt in (2.12)
with other weight functions, which may depend on x, and /3 but not the response
y,; for example W,= F’(x#)        corresponds to non-linear least squares. These
alternatives are usually inferior to maximum likelihood estimators in both compu-
tation and asymptotic statistical properties.


2.4.    Contingency table analysis

In some economic applications, the number of configurations of explanatory
variables is finite, and the data can be displayed in a contingency table with
counts of responses in each cell. A variety of statistical methods are available for
contingency table analysis; Goodman (1971) and Fienberg (1977) are general
introductions. A common approach is to adopt a log-linear model of the joint
distribution of (y, x) without imposing any structure of cause and response. The
conditional probability of y given x will then have a logit form.
   Log-linear models of contingency tables can be estimated by simple analysis-
of-variance, and are often the most convenient method of obtaining a logit
response probability when the dimension of x is not too large. It is difficult within
this framework to impose prior restrictions from economic theory on the form of
the response probability, a feature that most econometricians would consider a
disadvantage.


2.5.    Minimum chi-square method

Suppose the configurations of x in a contingency table are indexed n = 1,. . . , N,
and let m,, denote the count in the cell with y = i and configuration x,. The
log-likelihood function (2.1) in this notation becomes:


       L= f   f     [m,,lnF(x,/3)+   m,,,ln(l-   F(x,B))+lnCim..,    ml,)],   (2.16)
              n=l


with m .R= men + m,,, C(m,r)=m!/r!(m-r)!,and             T=Cf=‘=,m.,. Consistency
of maximum likelihood estimates will follow whenever T + 00, provided a rank
condition on the hessian is met. This can be accomplished by letting N -+ co, all
m ,n -+ CO,or both, as long as N is at least the dimension of p.
1402                                                                              D. L. McFudden

This probability may in some cases have a parametric form commonly assumed
for response models, and it may be tempting to give it a causal interpretation.
However, a key property of a true causal response P, = F(xP) is invariance with
respect to the marginal distribution p(x) of the explanatory variables. This
invariance condition will be satisfied by (2.20) only if the parameterization of
H( y, x) or Q( x Iy) is “saturated” in x.~
   Discriminant models parameterize the conditional distributions Q( x Iy), and
may be motivated by an assumption of causality from y (subpopulation) to x
(attributes of subpopulation members). For example, y may index subpopulations
of sterile and fecund insects; then Q(xly) characterizes the distribution of
observable attributes of these subpopulations and P, in (2.20) gives the probabil-
ity that an insect with attributes x belongs to population 1. The commonly used
normal linear discriminant model assumes the Q(xly) are normal with means pLv
and common covariance matrix s2. This requires the x variables to be continuous
and range over the real line. The conditional probability of y given x, from (2.20),
then has a logit form:

       P, =l/(l+e-a-“8),                                                                   (2.21)

with /? = 02-1(p1 -CL,,) and (Y= f(&,s2-‘~o - &S1pl)+ln(q,/q,).      The parame-
ters y,, and D can be estimated using sub-sample means and pooled sample
covanance, fi, and &?.Alternatively, ordinary least squares applied to the “linear
probability model”,

       y=a+xb+v,                                                                          (2.22)

yields an estimator b = Ab-‘(ji, - PO) = hb, where A = rorl/(l +(j& - &)’
tiP’(fil - PO)) and I-, is the proportion of sub-population i in the pooled sample.
This relation between logit and linear model parameters under the normality
assumptions of discriminant analysis was noted by Fisher (1939); other references
are Ladd (1966), Anderson (1958) and Chung and Goldberger (1982). It should
be emphasized that the relations (2.21) and (2.22) obtained from the discriminant
model do not imply a causal response structure despite the familiarity of the
forms. Also, if there is in truth a logistic causal response model, it will be
coincidental if the distribution of x is the precise mixture of normals consistent
with the normal conditional distributions Q(x Iy) assumed in discriminant analy-
sis. Otherwise, use of the discriminant sample moments will not yield consistent
estimates of the logit model parameters. There is some evidence, however, that the


   6Amodel is “saturated”in x if it has enough parameters to completely characterize the marginal
distribution p(x) without prior restrictions on p(x). A full log-linear model for H(y, x) has this
property.
1404                                                                   D. L. McFadden

is actually available in discrete quantities h,, and U(y* - h,) is the utility of h,
when the ideal is y*. Define a, so that U(a, -h,)=         U(a, -Xi_,) and A, =
[a,, a,,,). Then the response probability:

                                                                                (3.3)

gives the proportion of agents for which quantity X, is optimal. This model might
be appropriate for describing the choice of number of children or frequency of
shopping trips.
   (c) Multivariate binomial choice. Suppose a vector of h binomial choices y =
(y’, . . .,y”) is observed, with yJ = 1 if yj* 2 0 and y’= 0 otherwise. There are
m = 2h possible observable vectors. In the general terminology, A, is a Cartesian
product of half-lines, with term j equal to (- cc,O) if y’ = 0, [0, + 001 otherwise,
and cV = P(xp - EE Al.). If c:=, y,? is interpreted as an additively separable
utility, with y,* the relative desirability of yj = 1 over y’ = 0, then Py gives the
proportion of agents for which y is optimal. Dependence in the joint distribution
F( E1x) generates dependence among the binomial choices. This model might be
appropriate for describing holdings in a portfolio of household appliances, or for
describing a sequence of binomial decisions over time such as participation in the
labor force.
   These examples should make clear that there is a rich variety of qualitative
response models, drawing upon alternative latent variable structures and gener-
alized indicator functions, which can be tailored for appropriateness and conveni-
ence in various applications. Multinomial, ordered, and multivariate responses
can appear in any combination. In the third example above, multivariate bi-
nomial responses are rewritten as a single multinomial response. Conversely, a
multinomial response can always be represented as a sequence of binomial
responses. When observations extend over time, the system can be enriched
further by treating E as a stochastic process and permitting lagged responses
(“state dependence”) among the explanatory variables. With these elaborations,
the full panoply of econometric techniques for linear models and time series
problems can be brought to bear on qualitative response data. This development
of the latent variable formulation of qualitative response models is due to
Goldberger (1971), Heckman (1976), Amemiya (1976), and Lee (1981). The last
paper also generalizes these systems to combinations of discrete, continuous,
censored, and truncated variables. The examples above have been phrased in
terms of optimizing behavior by economic agents. We shall develop this connec-
tion further to establish the link between stochastic factors surrounding agent
decision-making and the structure of response probabilities. However, it should
be noted that there are applications of qualitative response models where this
framework is inappropriate, or where the analyst may not wish to impose it a
priori. This will in general relax prior restrictions on the structure of x/3 or the
Ch. 24: Qualitatioe Response Models                                                                 1405


distribution   F(EIX) in the latent variable model, but otherwise leave unchanged
the latent variable system determining qualitative response. For example, the
ordered response model (b) with the latent variable y* interpreted as suscepti-
bility and the a, as thresholds for onset of a disease at varying degrees of severity
is the Bradley-Terry model widely used in toxicology. Another example is the
multivariate binomial model (c) applied to a sequence of outcomes of a collective
bargaining process, with J$ interpreted as a measure of the relative strength of
the opposing agents in period h.
   Returning to the problem of qualitative response generated by optimization on
the part of economic agents, consider the multinomial choice example (a). For
concreteness, suppose the agent is a profit-maximizing firm deciding what product
markets to enter or where to locate plants. Given a qualitative alternative i, the
firm faces a technology T’ describing its feasible production plans. Maximization
of profit subject to T’ yields a restricted profit function II’. The technology will
depend on attributes t of the firm; the restricted profit function will consequently
depend on t and on characteristics w of the firm’s market environment, ni(t, w).
The firm will choose the alternative i which maximizes II’(t, w).
   The form of the restricted profit function W will depend on prior assumptions
on the technology and on the nature of the markets the firm faces. If, for example,
the firm faces competitive markets and w is the vector of prices, then 17’ is a
closed, convex, conical7 function of w; see McFadden (1978a). In non-competitive
markets, w summarizes the information available to the firm on strategies of other
agents, and the form of II’ is determined by a theory of non-competitive market
behavior.
   In empirical application, (t, w) will contain both observed and unobserved
components, and the unobserved components will have some distribution over the
population of firms. Let z denote the observed components of (t, w), and Y the
unobserved components, and let G(vlz) denote the distribution of the unobserved
components, given z, in the population. Let p(z) be the expectation of IP(z, v)
with respect to G( viz), or some other measure of location for the random
function II’( z, e). Finally, let ~$3 be a linear-in-parameters global approximation
to p(z),     where x is a vector of arithmetic functions of z, and define E, =
x,/3 - n’(z, v). Then E has a distribution F(E(x) induced by v, and y,* = xip - E,
equals the maximum profit obtainable given discrete alternative i, written in the
latent variable model notation. If all prices are observed and the function
n’( t, w) is closed, convex, and conical in prices, then the expectation r(z)     will
have these properties. The approximation xi/3 to n must then approximate these
properties, although it need not have them exactly unless the family of functions
x(z) used in the approximation is selected to achieve this result. For example, a

   ‘A function is conical if it is homogeneous of degree one; closed if the epigraph of the function is a
closed set.
1406                                                                      D. L. McFadden

convex function n’ can be approximated globally by a nonnegative linear
combination of convex functions, or alternatively by a polynomial which may fail
to be convex over some range; see McFadden (1978a). If it is important to the
analysis to impose on the response model all the prior restrictions implied by the
theory, as would be the case, for example, if the objective of the study were to test
these restrictions, then an approximation should be chosen which inherits the
prior restrictions and which does not in itself restrict the ability of the model to fit
the data. Given the approximation xip, note that as a consequence of the
definition of Ed, the distribution F(E(x) will inherit some properties from the
theory. For example, if 17’ and xi are conical in prices, then F(E(x) must have a
scale which is conical in prices.
   The preceding paragraphs have described a path from the economic theory of
behavior of a firm to properties of the latent variable model and associated
response probability it generates. In applications it is often useful to reverse this
path, writing down a convenient response probability model and then establishing
that it meets sufficient conditions for derivation from the theory of the profit-max-
imizing firm. For the competitive case, a quite general sufficient condition is that
xip be closed, convex, and conical in prices and that E be linear in prices; see
Duncan (1980a) and McFadden (1979a).
   Problems involving utility-maximizing consumers can be analyzed by methods
paralleling the treatment of the firm, with 17’ replaced by the indirect utility
function achieved for given i by optimizing in all remaining dimensions. However,
this case is more complex since the expectation with respect to unobservables of
the indirect utility function given i does not in general inherit all the properties of
an indirect utility function. Consequently, known sufficient conditions for a
specified response probability model to be derivable from a population of utility
maximizers are quite restrictive, bearing a close relation to the sufficient condi-
tions for individual preferences to aggregate to a social utility consistent with
market demands; see MdFadden (1981). Whether there is a practical general
characterization of the response probability models consistent with a population
of utility maximizers, analogous to the integrability theory for individual demand
functions, remains an open question.



3.2.    Statistical   analysis

Consider a general multinomial       response model with m alternatives,       indexed
i=l ,.**, m,

       P, = jib,      e,                                                          (3.4)

generated by some latent variable model and generalized indicator function as in
Ch. 24: Qualitative Response Models                                               1401


(3.1) and (3.2). The x are observed explanatory   variables, and 0 is a vector of
parameters. Consider an independent random sample with observations (y,, x,)
for t=l,..., T. As indicated for the binomial case, maximum likelihood estima-
tion is the most generally applicable and usually the most satisfactory approach
to estimation of 8. Let


                                                                                (3.5)


denote the log-likelihood of observation t, and


                                                                                (34


the sample log-likelihood normalized by sample size. The following regularity
conditions will be shown to imply that the maximum likelihood estimator is
consistent and asymptotically normal.
   (1) The domain of the explanatory variables is a measurable set X with a
probability p(x).
   (2) The parameter space 0 is a subset of Rk, and the true parameter vector 8* is
in the interior of 0.
   (3) The response model Pi = f’(x, 0) is measurable in x for each 0, and for x in
a set X, with p( X,) = 1, f’(x, 0) is continuous in 0.
   (4) The model satisfies a global identification condition: given E> 0, there exists
6 > 0 such that 10 - 8*12 E implies:


      +(e)=/dp(x)           ~fi(x,e*)in[f;(x,e*)//‘(x,e)J     2s                (3.7)
                            i=l


   (5) For x E XI with p( XI) = 1, and some neighborhood 0, of 8*, the derivative
i3f’(x, e)/&3 exists and is measurable in x.
   (6) For some neighborhood 0, of f3* and measurable functions a’(x),
p’(x), y’(x), the following bounds hold:
     (i) ft(~, e) I d(x),
    (ii) IfYlnf’(x,e)/Jel  I/?(X),
   (iii) Ialnf’(x,e)/ae   - alnfi(x,e’)/aej  I y;(x)le - et],
   (iv) /dp(x)cr’(x)~‘(x)*            <co,

    (v) j-dp(xW(x)P’(x)v’(x)                 < 00,

   (vi) /dp(x)ai(x)j?(x)3             < 00.
1408                                                                   D. L. McFadden


  (7) The information matrix J(e*), given by




is non-singular.
   The main results are given by the following theorems.
Theorem 1

If conditions (l)-(4) hold, and (?r is any sequence of measurable estimators which
satisfy

       L&Q   2 sup&(e)-l/T                                                      (3.9)


with probability one, then #r converges almost surely to 8*.
Theorem 2

If conditions (l)-(5) hold, then almost surely a unique maximum likelihood
estimatcr 8, eventually exists and satisfies JL,(t!$)/XJ = 0 and 8, + 0*.
Theorem 3

If conditions (l)-(7) hold, then a(&- - 0*) converges in distribution           to a
normal random vector with mean zero and covariance matrix J(e*)-‘.
   The following paragraphs discuss the regularity conditions and theorems; proof
outlines are deferred to the Appendix. Note first that the theorems assume the
explanatory variables are independently identically distributed for each observa-
tion. This is appropriate for sample survey data, but not necessarily for time-series
data. Analogous theorems hold for the case of non-stochastic or jointly distrib-
uted explanatory variables, but require stronger bounds and a more complicated
definition of the information matrix.
   Conditions (l)-(3) are very mild and easily verified in most models. Note that
the parameter space 0 is not required to be compact, nor is In f i( x, e) required to
be bounded. Condition (4) is a substantive identification requirement which states
that no parameter vector other than the true one can achieve as high a limiting
value of the log-likelihood. Theorem 1 specializes a general consistency theorem
of Huber (1965, theorem 1). It is possible to weaken conditions (l)-(4) further,
with some loss of simplicity, and still utilize Huber’s argument. Note that
Lr(t3) s 0 and, since y,, = 1 implies f’(x,, e*) > 0 almost surely, Lr(e*) > - 00
almost surely. Hence, a sequence of estimators &- satisfying (3.9) almost surely
exists.
Ch. 24: Qualitative Response Models                                                 1409

   Condition (5), requiring differentiability of Lr(@) in a neighborhood of 8*, will
be satisfied by most models. With this condition, Theorem 2 implies that a unique
maximum likelihood estimator almost surely eventually exists and satisfies the
first-order condition for an interior maximum. This result does not imply that
every solution of the first-order conditions is consistent. Note that any strongly
consistent estimator of @*almost surely eventually stays in any specified compact
neighborhood of 8*.
   Condition (6) imposes uniform (in 0) bounds on the response probabilities and
their first derivatives in a neighborhood of O*. Condition (6) (iii) requires that
aln f’(x, @)/ad be Lipschitzian in a neighborhood of 8*.
   Condition (4) combined with (5) and (6) implies J(O) is non-singular at some
point in the intersection of each neighborhood of 8* and line segment extending
from 8*. Hence, condition (7) excludes only pathological irregularities.
   Theorem 3 establishes asymptotic normality for maximum likelihood estimates
of discrete response models under substantially weaker conditions than are
usually imposed. In particular, no assumptions are made regarding second or
third derivatives. Theorem 3 extends an asymptotic normality argument of Rao
(1972, 5e2) for the case of a multinomial model without explanatory variables.
   To illustrate the use of these theorems, consider the multinomial logit model:

      p, = exle/   2 ex,e,                                                       (3.10)
                   j=l


withx=(xi,...,x,)ER       mk and 8 E Rk. This model is continuous in x and 8, and
twice continuously differentiable in 0 for each x. Hence, conditions (l)-(3) and
(5) are immediately satisfied. Since

      alnfi(x,     e)/ae    = X, - CxjfJ(x,   e) = xi - x(e),                    (3.11)


Elx13 < 00 is sufficient for condition (6). The information matrix is:

                                                                                 (3.12)


its non-singularity        in (7) is equivalent to a linear independence   condition on
(x1 - x(e*), . . . ,x, - x(e*)). The function In f’(x, B) is strictly concave in 8 if
condition (7) holds, implying that condition (4) is satisfied. Then Theorems l-3
establish for this model that the maximum likelihood estimator 8, almost surely
eventually exists and converges to 8*, and @(8, - e*) is asymptotically normal
with covariance matrix J(P)‘.
   Since maximum likelihood estimators of qualitative response models fit within
the general large sample theory for non-linear models, statistical inference is
1410                                                                    D. L. McFudden

completely conventional, and Wald, Lagrange multiplier, or likelihood ratio
statistics can be used for large sample tests. It is also possible to define summary
measures of goodness of fit which are related to the likelihood ratio. Let gf andf,’
be two sequences of response probabilities for the sample points t = 1,. . . , T, and
define


       Z,(g,f)=+     i     ggiln       5                                       (3.13)
                     r=1   i=l     i   I i


to be the “average information in g beyond that in f “. If g is the empirical
distribution of the observed response and f is a parametric response model, then
Z( g, f) is monotone in the likelihood function, and maximum likelihood estima-
tion minimizes the average unexplained information. The better the model fits,
the smaller I,( g, f ). Note that for two models fa and fi, the difference in average
information I,( g, &)- I,( g, fi) is proportional to a likelihood ratio statistic.
Goodness-of-fit measures related to (3.13) have been developed by Theil (1970);
see also Judge et al. (1981). Related goodness of fit measures are discussed in
Amemiya (1982). It is also possible to assess qualitative response models in terms
of predictive accuracy; McFadden (1979b) defines prediction success tables and
summary measures of predictive accuracy.


3.3.    Functional form

The primary issues in choice of a functional form for a response probability
model are computational practicality and flexibility in representing patterns of
similarity across alternatives. Practical experience suggests that functional forms
which allow similar patterns of inter-alternative substitution will give comparable
fits to existing economic data sets. Of course, laboratory experimentation or more
comprehensive economic observations may make it possible to differentiate the fit
of function forms with respect to characteristics other than flexibility.
   Currently three major families of concrete functional forms for response
probabilities have been developed in the literature. These are multinomial logit
models, based on the work of Lute (1959), multinomial probit models, based on
the work of Thurstone (1927), and elimination models, based on the work of
Tversky (1972). Figure 3.1 outlines these families; the members are defined in the
following sections. We argue in the following sections that the multinomial logit
model scores well on simplicity and computation, but poorly on flexibility. The
multinomial probit model is simple and flexible, but scores poorly on computa-
tion. Variants of these models, the nested multinomial logit model and the
factorial multinomial probit model, attempt to achieve both flexibility and
computational practicality.
Ch. 24: Qualitatioe Response Models                                                                               1411


                 Probit                                Logit                                      Elimination


         binomial probit                          binomial logit                    elimination-by-aspects(EBA)


                    I
    multinomial probit(MNP)
                                                         I
                                             multinomial logit(MNL)
                                                                                                            I



                                                         I
                                                                                           heirarchial
                                                                                elimination-by-aspects(HEBA)
                                                                                                       /’
                                                                                                   /
                                            generalized extreme value                         /
                                                                                          /
                                                                                    / /
                                                                              / /
                                                                          H
                                                               nested multinomial
                                                                  logit (NMNL)

                     Figure 3.1.    Functional   forms for multinomial   response    probabilities.


   In considering probit, logit, and related models, it is useful to quantify the
hypothesis of an optimizing economic agent in the following terms. Consider a
choice set B= {l,..., m }. Alternative i has a column vector of observed attributes
xi, and an associated utility yi* = (Y’x,, where (Y is a vector of taste weights.
Assume a to have a parametric probability distribution with parameter vector 8,
and let p = P(e) and s2 = Q(8) denote the mean and covariance matrix of (Y.Let
xB = (xi, _. _,x,,,) denote the array of observed attributes of the available altema-
tives. Then the vector of utilities yg = ( y:, . . . ,y;) has a multivariate probability
distribution with mean P’xe and covariance matrix x$?x,. The response proba-
bility f’( xB, 0) for alternative i then equals the probability of drawing a vector yi
from this distribution such that y: 2 y,? forj E B. For calculation, it is convenient
to note that yi_, = (y: - y:,. . . ,y,Yl - y:, JJ:+~- y:,. . . ,y; - f)     has a multi-
variate distribution with mean B’x~_~ and covariance matrix xh_,r(2xBP,, where
xB_,=(xl-x        ,,..., x~~~--x,,x,+~-x   ,,..., x,-x,),    and that f’(zs,O) equals
the non-positive orthant probability for this (m - 1)-dimensional distribution.
   The following sections review a series of concrete probabilistic choice models
which can be derived from the structure above.


3.4.     The multinomial logit model

The most widely used model of multinomial response is the multinomial logit
(MNL) form:


       fyx,,e)            = eQ/     C exje.                                                                     (3.14)
                                   jcB
1412                                                                      D. L. McFudden

This model permits easy computation and interpretation, but has a restrictive
pattern of inter-alternative substitutions.
  The MNL model can be derived from the latent variable model given in (3.1)
and (3.2) by specifying the distribution of the disturbances et = (en,. . . , E,() to be
independent identical type I extreme value:

       p+JX,)   = e-e-‘l’.   . . e-e-em’.                                         (3.15)

This result is demonstrated by a straightforward integration; see McFadden
(1973) and Yellot (1977). Note that this case is a specialization of the model
y; = (YX,in which only the coefficients (Yof alternative-specific dummy variables
are stochastic.
   The disturbance E, in the latent variable model yielding the MNL form may
have the conventional econometric interpretation of the impact of factors known
to the decision-maker but not to the observer. However, it is also possible that a
disturbance exists in the decision protocol of the economic agent, yielding
stochastic choice behavior. These alternatives cannot ordinarily be distinguished
unless the decision protocol is observable or individuals can be confronted
experimentally with a variety of decisions.
   Interpreted as a stochastic choice model, the MNL form is used in psychomet-
rics and is termed the Lute strict utility model. In this literature, uir = x,J3 is
interpreted as a scale value associated with alternative i. References are Lute
(1959, 1977) and Marschak (1960).
   The vector of explanatory variables xi, in the MNL model can be interpreted as
attributes of alternative i. Note that components of xi, which do not vary with i
cancel out of the MNL formula (3.13), and the corresponding component of the
parameter vector 8 cannot be identified from observation on discrete response.
   Some components of x,~ may be alternative-specific, resulting from the interac-
tion of a variable with a dummy variable for alternative i. This is meaningful if
the alternatives are naturally indexed. For example, in a study of durable
ownership the alternative of not holding the durable is naturally distinguished
from all the alternatives where the durable is held. On the other hand, if there is
no link between the true attributes of an alternative and its index i, as might be
the case for the set of available dwellings in a study of housing purchase behavior,
alternative dummies are meaningless.
   Attributes of the respondent may enter the MNL model in interaction with
attributes of alternatives or with alternative specific dummies. For example,
income may enter a MNL model of the housing purchase decision in interaction
with a dwelling attribute such as price, or with a dummy variable for the
non-ownership alternative.
   A case of the MNL model frequently encountered in sociometrics is that in
which the variables in xi, are all interactions of respondent attributes and
Ch. 24: Quulitative Response Models                                                   1413

alternative-specific dummies. Let z1 be a 1 x s vector of respondent attributes and
a,,,, be a dummy variable which is one when i = m, zero otherwise. Define the
1 X sM vector of interactions,

       x,t= (41ztY.,~rM4
and let 13’= (I?’i, . . . ,t$,) be a commensurate vector of parameters. Then


       fTxoe)= ex*,e +rl’:B+e”“Jl
                                                                                    (3.16)
                        eZrel + . . . +eztena


An identifying normalization, say 8, = 0, is required. This model is analyzed
further by Goodman (1972) and Nerlove and Press (1976).
   A convenient feature of the MNL model is that the hessian of the log-likeli-
hood is everywhere negative definite (barring linear dependence of explanatory
variables), so that any stationary value is a global maximum.


3.5.    Independence from irrelevant alternatives

Suppose in the MNL model (3.13) that the vector xi, of explanatory variables
associated with alternative i depends solely on the attributes of i, possibly
interacted with attributes of the respondent. That is, x,~ does not depend on the
attributes of alternatives other than i. Then the MNL model has the Indepen-
dence from Irrelevant Alternatives (IIA) property, which states that the odds of i
being chosen overj is independent of the availability or attributes of alternatives
other than i and j. In symbols, this property can be written:

       ,,ri(XA
           f,(x,,e)      = (%I - x,x                                                (3.17)


independent           of xnlt for m # i, j. Equivalently,    for iEA={l   ,...,J}   5 c=
(l,...,M}:



where

       f”(x ,,~...4,,,+           C fj(xl ,,...,   xMt8e).
                                 JC‘A
1414                                                                             D. L. McFadden

An implication of the IIA property is that the cross-elasticity of the probability of
response i with respect to a component of xjI is the same for all i with i # j. This
property is theoretically implausible in many applications. Nevertheless, empirical
experience is that the MNL model is relatively robust, as measured by goodness
of fit or prediction accuracy, in many cases where the IIA property is theoretically
implausible.
   When the IIA property is valid, it provides a powerful and useful restriction on
model structure. One of its implications is that response probabilities for choice in
restricted or expanded choice sets are obtained from the basic MNL form (3.14)
simply by deleting or adding terms in the denominator. Thus, for example, one
can use the model estimated on existing alternatives to forecast the probability of
a new alternative so long as no parameters unique to the new alternative are
added.
   One useful application of the IIA property is to data where preference rankings
of alternatives are observed, or can be inferred from observed purchase order. If
the probabilities for the most preferred alternatives in each choice set satisfy the
IIA property, then they must be of the MNL form [see McFadden (1973)], and
the probability of an observed ranking 1> 2 > . . . > m of the alternatives is the
product of conditional probabilities of choice from successively restricted subsets:

                                       exlP        ex2P                 exm-lP
          p(1>2>...       >m)zy.-.                          ... .
                                     C eXrB    f     eXdP
                                                                    ex”>-lB + e~,J   a
                                     i=l      i=2


Thus, each selection of a next-ranked alternative from the subset of alternatives
not previously ranked can be treated as an independent observation of choice
from a MNL model. This formulation of ranking probabilities is due to Marschak
(1960). An econometric application has been made by Beggs, Cardell and
Hausman (1981); these authors use the method to estimate individual taste
parameters and investigate the heterogeneity of these parameters across the
population.
   The restrictive IIA feature of the MNL model is present only when the vector
xi, for alternative i is independent of the attributes of alternatives other than i.
When this restriction is dropped, the MNL form is sufficiently flexible to
approximate any continuous positive response probability model on a compact
set of the explanatory variables. Specifically, if f’( x,, 0) is continuous, then it can
be approximated globally to any desired degree of accuracy by a MNL model of
the form:


                                                                                         (3.18)
Ch. 24: Qualitative Response Models                                              1415

where zit = z,,(x[) is an arithmetic function of the attributes of all available
alternatives, not just the attributes of alternative i. This approximation has been
termed the universal logit model. The result follows easily from a global ap-
proximation of the vector of logs of choice probabilities by a multivariate
Bernstein polynomial; details are given in McFadden (1981).
   The universal logit model can describe any pattern of cross-elasticities. Thus, it
is not the MNL form per se, but rather the restriction of xir to depend only on
attributes of i, which implies IIA restrictions. In practice, the global approxima-
tions yielding the universal logit model may be computationally infeasible or
inefficient. In addition, the approximation makes it difficult to impose or verify
consistency with economic theory. The idea underlying the universal logit model
does suggest some useful specification tests; see McFadden, Tye and Train (1976).


3.6.    Limiting the number of alternatives

When the number of alternatives is large, response probability models may
impose heavy burdens of data collection and computation. The special structure
of the MNL model permits a reduction in problem scale by either aggregating
alternatives or by analyzing a sample of the full alternative set. Consider first the
aggregation of relatively homogeneous alternatives into a smaller number of
primary types.
   Suppose elemental alternatives are doubly indexed ij, with i denoting primary
type and j denoting alternatives within a type. Let Zt4, denote the number of
alternatives which are of type i. Suppose choice among all alternatives is de-
scribed by the MNL model. Then choice among primary types is described by
MNL probabilities of the form:

                          exp( x$ + In M, + w,,)
       fG,,Q=                                                                 (3.19)
                     Cexp( xktf3 + In Mk + wkr) ’
                      k


where x,< is the mean within type i of the vectors xi,, of explanatory variables for
the alternative ij, and w,, is a correction factor for heterogeneity within type i
which satisfies:


       wi,=ln+,      ,2 exp[(xij,-xi1)t9].                                     (3.20)
                  ’ J=l




If the alternatives within a type are homogeneous, then w, = 0.
1416                                                                    D. L. McFadden

   A useful approximation to Wecan be obtained if the deviations x,,~ - x,~ within
type i can be treated as independent random drawings from a multivariate
distribution which has a cumulant generating function 19;,(e). If the number of
alternatives M, is large, then the law of large numbers implies that w, converges
almost surely to w, = I#$( 0). For example, if xijt - xit is multivariate normal with
covariance matrix O,,, then w, = W,,( 0) = e’Qi,0/2.
   A practical method for estimation is to either assume within-type homogeneity,
or to use the normal approximation to w,, with Oi, either fitted from data or
treated as parameters with some identifying restrictions over i and t. Then 8 can
be estimated by maximum likelihood estimation of (3.19). The procedure can be
iterated using intermediate estimates of 8 in the exact formula for w,. Data
collection and processing can be reduced by sampling elemental alternatives to
estimate w,. However, it is then necessary to adjust the asymptotic standard errors
of coefficients to include the effect of sampling errors on the measurement of w,.
Further discussion of aggregation of alternatives in a MNL model can be found
in McFadden (1978b).
   A second method of reducing the scale of data collection and computation in
the MNL model when it has the IIA property is to sample a sub-set of the full set
of alternatives. The IIA property implies that the conditional probabilities of
choosing from a restricted subset of the full choice set equal the choice probabili-
ties when the choice set equals the restricted set. Then the MNL model can be
estimated from data on alternatives sampled from the full choice set. In particu-
lar, the MNL model can be estimated from data on binary conditional choices.
Furthermore, subject to one weak restriction, biased sampling of alternatives can
be compensated for within the MNL estimation.
   Let C = {1,. . . ,M} denote the full choice set, and D z C a restricted subset.
The protocol for sampling alternatives is defined by a probability rr( D 1i,, x,) that
D will be sampled, given observed explanatory variables x, and choice i,. For
example, the sampling protocol of selecting the chosen alternative plus one
non-chosen alternative drawn at random satisfies


                                     ifD= {i,,j}    sC,i,+j,
       n(Dli,, x,) = l/W-l),                                                   (3.21)
                     0,              otherwise.


  Let D, denote the subset for case t. The weak regularity condition is:

Positive conditioning property

If an alternative i E D, were the observed choice, there would be a positive
probability that the sampling protocol would select Dt; i.e. if j E D,, then
n(E,Ij, X,) ’ 0.
Ch. 24: Qualitative Response Models                                                1417

  If the positive conditioning property and a standard identification condition
hold, then maximization of the modified MNL log-likelihood function:


                     exP[xi,e +lnr(D,Ii,,     x,)]
       f     iln                                                                (3.22)
            I=i    ,~~exp[x,e+lnn(D,lj,x,)]
                       f


yields consistent estimates of 8. This result is proved by showing that (3.22)
converges in probability uniformly in 0 to an expression which has a unique
maximum at the true parameter vector; details are given in McFadden (1978).
When r is the same for all j E D,,the terms involving v cancel out of the above
expression. This is termed the uniform conditioning property; the example (3.21)
satisfies this property.
   Note that the modified MNL log-likelihood function (3.22) is simply the
conditional log-likelihood of the i,, given the 0,.The inverse of the information
matrix for this conditional likelihood is a consistent estimator of the covariance
matrix of the estimated coefficients, as usual.



3.7.       Specification tests for the MNL model

The MNL model in which the explanatory variables for alternative i are functions
solely of the attributes of that alternative satisfies the restrictive IIA property. An
implication of this property is that the model structure and parameters are
unchanged when choice is analyzed conditional on a restricted subset of the full
choice set. This is a special case of uniform conditioning from the section above
on sampling alternatives.
   The IIA property can be used to form a specification test for the MNL model.
Let C denote the full choice set, and D a proper subset of C. Let &. and V,
denote parameter estimates obtained by maximum likelihood on the full choice
set, and the associated estimate of the covariance matrix of the estimators. Let PO
and V, be the corresponding expressions for maximum likelihood applied to the
restricted choice set D. (If some components of the full parameter vector cannot
be identified from choice within D, let &, PO, V,, and VD denote estimates
corresponding to the identifiable sub-vector.) Under the null hypothesis that the
IIA property holds, implying the MNL specification, PO - & is a consistent
estimator of zero. Under alternative model specifications where IIA fails, PO - &
will almost certainly not be a consistent estimator of zero. Under the null
hypothesis, PO - & has an estimated covariance matrix VD- Vc. Hence, the
1418                                                                     D. L. McFadden

statistic


       S=(P,-Pc)‘(Vo-V,)~‘(Po-PC)                                               (3.23)

is asymptotically chi-square with degrees of freedom equal to the rank of
v, - v,.
   This test is analyzed further in Hausman and McFadden (1984). Note that this
is an omnibus test which may fail because of misspecifications other than IIA.
Empirical experience and limited numerical experiments suggest that the test is
not very powerful unless deviations from MNL structure are substantial.



3.8.   Multinomial probit

 Consider the latent variable model for discrete response, r;” = x,0 + E, and y,, = 1
 ifuz, 2 J$ for n =l,..., M, from (3.1) and (3.2). If E, is assumed to be multivariate
 normal, the resulting discrete response model is termed the multinomial probit
 (MNP) model. The binary case has been used extensively in biometrics; see
 Finney (1971). The multivariate model has been investigated by Bock and Jones
 (1968), McFadden (1976), Hausman and Wise (1978), Daganzo (1980) Manski
 and Lerman (1981), and McFadden (1981).
    A form of the MNP model with a plausible economic interpretation is
J$+= x,(Y,, where (Yeis multivariate normal with mean p and covariance matrix 9,
 and represents taste weights which vary randomly in the population. Note that
 this form implies EE, = 0 and cov(e,) = x$x: in the latent variable model
 formulation. If x, includes alternative dummies, then the corresponding compo-
nents of (Ye are additive random contributions to the latent values of the
 alternatives. Some normalizations are required in this model for identification.
    When correlation is permitted between alternatives, so COV(E,)is not diagonal,
 the MNP model does not have the IIA or related restrictive properties, and
permits very general patterns of cross-elasticities. This is true in particular for the
random taste weight version of the MNP model when there are random compo-
nents of (Y,corresponding to attributes which vary across alternatives.
    Evaluation of MNP probabilities for M alternatives generally requires evalua-
tion of (M - 1)-dimensional orthant probabilities. In the notation of subsection
3.3, f’(x,; /3, s2) is the probability that the (M - l)-dimensional normal random
vector J$_ 1 with mean j3xB_ 1 and covariance matrix xg_ rsZXh_1 is non-positive.
For M d 3, the computation of these probabilities is comparable to that for the
MNL model. However, for A42 5 and 52 unrestricted, numerical integration to
obtain these orthant probabilities is usually too costly for practical application in
iterative likelihood maximization for large data sets. An additional complication
Ch. 24: Qualitative Response Models                                                           1419

is that the hessian of the MNP model is not known to be negative definite; hence
a search may be required to avoid secondary maxima.
   For a multivariate normal vector ( y;, . . . ,y;), one can calculate the mean and
covariance matrix of (rl*, . . . ,y; _ 2, max( J$ _ 1, _y;)); these moments involve only
binary probits and can be computed rapidly. A quick, but crude, approximation
to MNP probabilities can then be obtained by writing:

     f’(x,P,~)=P(y:>max(y,*,max(y,*,...)...))                                              (3.24)

and approximating the maximum of two normal variates by a normal variate; see
Clark (1961) and Daganzo (1980). This approximation is good for non-negatively
correlated variates of comparable variance, but is poor for negative correlations
or unequal variances. The method tends to overestimate small probabilities. For
assessments of this method, see Horowitz, Sparmann and Daganzo (1981) and
McFadden (1981).
   A potentially rapid method of fitting MNP probabilities is to draw realizations
of (Y,repeatedly and use the latent variable model to calculate relative frequencies,
starting from some approximation such as the Clark procedure. This requires a
large number of simple computer tasks, and can be programmed quite efficiently
on an array processor. However, it is difficult to compute small probabilities
accurately by this method; see Lerman and Manski (1980).
   One way to reduce the complexity of the MNP calculation is to restrict the
structure of the covariance matrix s2 by adopting a “factor-analytic” specification
of the latent variable model y: = /?x; + E;. Take
                     J
      E, =q,   +    c    Y;,V,,                                                            (3.25)
                   j=l


with vi and v, independent normal variates with zero means and variances ui2 and
1 respectively. The “factor loading” y,, is in the most general case a parametric
function of the observed attributes of alternatives, and can be interpreted as the
level in alternative i of an unobserved characteristic j. With this structure, the
response probability can be written:




                                      P(xl-xi)+    i     (Ylj-Yij)vj+lll


                           Xfi@
                            i=2
                                                  j=l


                                                        ui
                                                                               dnr,dvr..    . dv,.

                                                                           1
                                                                                           (3.26)
1420                                                                    D. L. McFadden

Numerical integration of this formula is easy for J I 1, but costly for J 2 3. Thus,
this approach is generally practical only for one or two factor models. The
independent MNP model (J = 0) has essentially the same restrictions on cross-
alternative substitutions as the MNL model; there appears to be little reason to
prefer one of these models over the other. However, the one and two factor
models permit moderately rich patterns of cross-elasticities, and are attractive
practical alternatives in cases where the MNL functional form is too restrictive.
   Computation is the primary impediment to widespread use of the MNP model,
which otherwise has the elements of flexibility and ease of interpretation desirable
in a general purpose qualitative response model. Implementation of a fast and
accurate approximation to the MNP probabilities remains an important research
problem.


3.9.   Elimination models

An elimination model views choice as a process in which alternatives are screened
from the choice set, using various criteria, until a single element remains. It can be
defined by the probability of transition from a set of alternatives to any subset,
Q( D 1C). If each transition probability is stationary throughout the elimination
process, then the choice probabilities satisfy the recursion formula:

       f’(c) = CQ(DIW(D),                                                       (3.27)
                D

where f’( C) is the probability of choosing i from set C.
   Elimination models were introduced by Tversky (1972) as a generalization of
the Lute model to allow dependence between alternatives. An adaptation of
Tversky’s elimination by aspects (EBA) model suitable for econometric work
takes transition probabilities to have a MNL form:

       Q(DlC)   = exDbo/ c    e+pA,
                        AGC
                        AZC



where xD is a vector of attributes common to and unique to the set of alternatives
in D. When xs is a null vector and by definition exsSB= 0 for sets B of more than
one element, this model reduces to the MNL model. Otherwise, it does not have
restrictive IIA-like properties.
   The elimination model is not known to have a latent variable characterization.
However, it can be characterized as the result of maximization of random
lexicographic preferences. The model defined by (3.27) and (3.28) has not been
applied in economics. However, if the common unique attributes xD can be
Ch. 24: Qualitative     Response Models                                        1421


defined in an application, this should be a straightforward and flexible functional
form.
   One elimination model which can be expressed in latent variable form is the
generalized extreme value (GEV) model introduced by McFadden (1978, 1981).
Let H(w,,..., w,) be a non-negative, linear homogeneous function of non-nega-
tive wr,..., w,,,which satisfies

        lim H(w,,...,w,)=             +oe,                                  (3.29)
       W,+ m

and has mixed partial derivatives of all orders, with non-positive       even and
non-negative odd mixed derivatives. Then,


      F(q,...,        Ed) = exp{ - H(ePE1,...,e-‘m)}                        (3.30)

is a multivariate extreme value cumulative distribution function. The latent
variable modely; = xip + e, for i E B = {l,...,m} with (q,...,~,) distributed as
(3.30) has response probabilities:


      f’(x,p)         = alnH(e”lS,...,e”mS)/a(xjP).                         (3.31)


  The GEV model reduces to the MNL model when

                                   M       A
      Wwr,...,         w,)=       c wJ/A
                                     1      ,                               (3.32)
                               i i=l     i

with 0 < X I 1. An example of a more general GEV function is:




where 0 < hoc, X, I 1 and a and b are non-negative functions such that each i is
contained in a D and C with a(C), b( D, C) > 0. The response probability for
(3.33) can be written:


     f’(x, 8) = c              c    Q<ilD, C)Q(DlC)Q(ClB),                  (3.34)
                       CCB    DGC
1422                                                                                       D. L. McFadden

where i E D E C G B,

       Q<ilD, C) = exP(xiP/X&c)/                       c     exP(x#/A&c)~                         (3.35)
                                                      j=D

       J(D,   C)   = In    c    exp(xjS/ADC&),                                                    (3.36)
                          jED

       Q(DIC)=b(D,C)exp[J(D,C)h,c]/                              c     b(D’,C)exp[J(D’,C)A,,,],
                                                                D’GC

                                                                                                  (3.37)

       I(C)=ln        c     b(D’,C)exp[J(D’,C)&],                                                 (3.38)
                    D’cC

       Q(c) =a(C)exp[~(C)&]/                      c        ~(C’h&(C’)&~].                         (3.39)
                                                 C’GB


This can be interpreted as an elimination model in which a(C) and b( D, C)
determine the probability of various chains of sets of non-eliminated alternatives,
and h,, and Xc measure the degree of independence of the &iwithin the set D
obtained from C, and within the set C, respectively. The expressions in (3.36) and
(3.38) are termed inclusive values of the associated sets of alternatives.
   When all the X’s are one, this model reduces to a simple MNL model.
Alternatively, when hoc is near zero, the elimination model treats D essentially as
if it contained a single alternative with a scale value equal to the maximum of the
scale values of the elements in D.
   Inspection of the two elimination models described above suggests that they are
comparable in terms of flexibility and complexity. Other things equal, the GEV
model will tend to imply sharper discrimination among similar alternatives than
the EBA model. Limited numerical experiments suggest that the two models will
be difficult to distinguish empirically.


3. IO. Hierarchical response models

When asked to describe the decision process leading to qualitative choice,
individuals often depict a hierarchical structure in which alternatives are grouped
into clusters which are “similar”. The decision protocol is then to eliminate
clusters, proceeding until a single alternative remains. An example of a decision
tree is given in Figure 3.2. Alternatives u-e are in one primary cluster, f and g in
a second, and u-c are in a secondary cluster. Either of the elimination models
described in the preceding section can be specialized to describe hierarchical
response by permitting transitions from a node only to one of the nodes
Ch. 24: Qualitative Response Models                                            1423




                               Figure 3.2.   A hierarchical decision tree.

immediately below it in the tree. Hierarchical decision models are discussed
further in Tversky and Sattath (1979) and McFadden (1981).
   A hierarchical elimination model based on the generalized extreme value
structure described earlier generalizes the MNL model to a nested multinomial
logit (NMNL) structure. Each transition in the tree is described by a MNL model
with one of the variables being an “inclusive value” which summarizes the
attributes of alternatives below a node. An “independence” parameter at each
node in the tree discounts the contribution to value of highly similar alternatives.
   We shall discuss the structure of the NMNL model using an example of
consumer choice of housing. As illustrated in Figure 3.3, the decision can be
described in hierarchical form: first whether to own or rent, second if renting
whether to be the head of household or to sublet from someone else (non-head),
and finally what dwelling unit to occupy within the chosen cluster. Let C =
{I,..., 12) index the final alternatives, r = 0,l index the primary cluster for own
and rent, and h = 0,l index the secondary clusters for head and non-head. Define
A,, to be the set of final alternatives contained in the subcluster rh, and A, to be
the set of subclusters contained in the cluster r. For example, A, contains the
(trivial) subcluster h = 1; A, contains two subclusters h = 0 and h = 1; and
A,, = {10,11,12}.
   The response probability for the NMNL model can be written as a product of
transition probabilities. For i E A,, and h E A,:

      f’(d      = Q(ilA,,)Q(A,,IA,)Q(A,).                                    (3.40)
1424                                                                            D. L. McFadden




                                     Figure 3.3.   Housing choice.

Each transition probability has a NMNL form:

       Q( ilA,,) = e’g”/    c ezla,                                                    (3.41)
                           .iEArh
       QbLk%> =exPb’r,~             + J,,+,)/       c     exP(w,,b   + &J&.),          (3.42)
                                                   CEA,




       Q(4) =exdw+VA/                    i exd~,y+~,~,).                               (3.43)
                                        s=o

Here, xi = (z;, We,,,u,) is the vector of attributes associated with alternative i E A,,
and h E A,, with wr,, and u, denoting components which are common within the
clusters A,,, or A,, respectively; (cq p, y, K,, A,) = 6 are parameters; and Jr,, and I,,
Ch. 24: Qualitative Response Models                                                  1425

are inclusive values satisfying:
       J,,, = In    c erla,                                                       (344)
                   iGA,*
        Z,= ln c          exP(%$        + .Z&%,).                                 (3.45)
                   hEA,


Note that Jlh and Z, are logs of the denominators in (3.41) and (3.42), respectively.
For this example, note that Q(A,, IA,) = 1 and I, = w&3 + JO1~O1.
  Consider the function:

       H(eUl,...                                                                  (3.46)

with
       U,= Z,(YK,$i,      +   Wrhph,    +   Up,                                   (3.47)
for i E A,, and h E A,. This is a generating function for the response probabili-
ties, satisfying An H/C%, = f’(x, e), and can be interpreted as a measure of social
utility; see McFadden (1981). The parameters K,h and A, are measures of the
“independence” of alternatives within subclusters and clusters respectively.
   If K,~ = A, = 1, then the NMNL model reduces to a simple MNL model. When
0 < K,~, A, 11, the NMNL model is consistent with a latent variable model with
generalized extreme value distributed disturbances: JJ: = ui + ei and
       F( q,. . . ,qZ) = exp[ - H(epEl,. . . ,epglz; @)I,                         (3.48)
and is therefore consistent with an assumption of optimizing economic agents. It
should be obvious that this structure generalizes to any number of alternatives
and levels of clustering.
   To interpret the impact of the independence parameters K,~ and A, on cross-
alternative substitutability, consider the cross-elasticity of the response probabil-
ity for i E A,, and h E A, with respect to component k of the vector z, of
attributes of altemativej E A,,,, and h’ E A,,:



                                       = (YkZjk{  a,,- Krrh’Ar’f’(x, e)
                                        + Q&r        -l)s,,,Q(jlA,h,)Q<A,,,IA,>
                                        +(Krh-l)s,,,s,,,Q(ilA,h)}.                (3.49)

For O<K ,,,, A, < 1, one obtains the plausible property that cross-elasticities are
largest in magnitude for alternatives in the same r and h cluster, and smallest in
magnitude when both r and h clusters differ. Note that values of K,,, or A, outside
1426                                                                      D. L. McFadden

the unit interval imply that one of the expected magnitude rankings is violated.
Therefore, estimates of K,h or X, outside the unit interval may indicate a
n&specified hierarchical structure, and the fitted cross-elasticity magnitude may
identify a more appropriate structure.
    It is of interest to compare the complexity and flexibility of the NMNL model,
say in the form (3.40) corresponding to Figure 3.3, to a MNP model with a
factorial structure which has the same pattern of similarities. This is achieved in
the MNP model by introducing one factor for each node in the decision tree
between the stem and the final “ twigs”. Thus, the clustering in Figure 3.3 requires
four factors-own,        rent, rent/head, and rent/non-head.     An MNP model with
this structure can be specified with a number of parameters comparable to the
NMNL model by making the factor loadings uniform within each cluster, or can
be made more flexible by allowing intra-cluster heterogeneity in loadings. How-
ever, as noted in the discussion of (3.26) computation of a four-factor model will
be too costly in most applications. We conclude that the NMNL and factorial
 MNP are comparable in complexity, with some advantage to the latter in terms of
 flexibility and ease of interpretation. However, computational barriers currently
 limit use of the factorial MNP model to simple trees with one to three nodes.
    The NMNL model can be estimated by direct maximum likelihood methods.
 The likelihood is not concave in all parameters, and is highly non-linear in the
 inclusive value coefficients. A simpler procedure which is consistent, but often
 fairly inefficient, is to estimate the transition probabilities (3.31)-(3.33) sequen-
 tially, using the data on transitions implied by the observed choices and inclusive
 values calculated from preceding stages. Each stage involves a concave MNL
 maximum likelihood problem. Beyond the first stage, standard errors are affected
 by the use of estimated coefficients in the calculation of inclusive values. Amemiya
 (1978d) and McFadden (1981) provide formulae for correcting the standard
 errors.
    It is possible in principle to obtain asymptotically efficient estimates by
 carrying out one Newton-Raphson           iteration on the full likelihood function,
 starting from the consistent sequential estimates. In practice, the strong non-lin-
 earity of the likelihood in the inclusive value coefficients and sensitivity of the
 estimates to model specification sometimes lead to full maximum likelihood
 estimates which are rather far from the initially consistent estimates, and to
 erratic results from the one-step procedure. Consequently, multiple iterations may
 be required to approximate the maximum of the full likelihood function. These
 problems seem to be particularly common when by other indications the decision
 tree is misspecified.
     Under the null hypothesis that the NMNL model is correctly specified, the
sequential estimator   8, and full MLE 6, satisfy fi(&           - 6’) 4 N(0, fi) and
fi(e,   - e) 5 N(0, s2), and     asymptotic    efficiency   implies   \/?;(8,   - 6,) 4
Ch. 24: Qualitative Response             Models                                                                   1421


N(0, fi - Q). Thus the statistic T(8, - &.)‘(a - S2)+(6, - &), where (b - 42)’ is
a generalized inverse of rank p, is asymptotically xi under the null. This statistic
can then be used as an omnibus test of the NMNL specification.
   Since the NMNL model reduces to a MNL model when the inclusive value
coefficients are one, it can provide a basis for a classical Lagrange multiplier test
of the IIA property of the MNL model. Consider testing X = 1 in the model
(3.30)-(3.33), with K =l as a maintained hypothesis. Suppose A, is the set of
rental alternatives. Let u = (cyX,BX, y) and 19= (a, A), and let


      L=+        i          C y,,lnf’(x,,8)                                                                  (3.50)
                t=l      isC


be the normalized log-likelihood function. The Lagrange multiplier statistic has
the general form:

      LM= L;[ELAL;-(ELAL:)(ELaL;)-‘EL,L;]-’LA,                                                               (3.51)

where the derivatives are evaluated at X = 1 at which the model reduces to a MNL
model. For this problem, letting f,’ = f’(x,, 0):


                                                                                                             (3.52)


       LA=fi C (Yit-f,i)(zth-xi,a)*
                      t=l        i=A,
                                                                                                             (3.53)



      &=TEL,L;=+                                             f,‘(l,X-x,,o)‘-(       c
                                                                                  iSA,
                                                                                           f,‘(l,h-~~,.,)~
                                                                                                             1,

                                                                                                             (3.54)

      v,,= TEL,L; = +                             c #(xi,         - xc,)‘(xi, - xCr),                        (3.55)
                                          t=l     iEC



      V,,   = TEL&;                = f     i       c    f(     Z,A - xiru)(xi,   - xct),                     (3.56)
                                          (=I iEA,

      xCt   =   C      friXir9                                                                               (3.57)
                iCC

        Z, = In C e”tl”.                                                                                     (3.58)
                     icA,
1428                                                                  D. L. McFadden


Then the final form of the test statistic is:



              i
             r=1
                    c
                   iSA,
                          (yi,-fti)(z,-xi,e)
                                                1
                                                Z,T(Vhh-Yh~~;lVoh).          (3.59)



Under the null hypothesis, this statistic is asymptotically chi-square with one
degree of freedom. Further discussion of specification tests for the MNL model
and examples are given in Hausman and McFadden (1984).


3.11.   An empirical example

To illustrate application of the MNL and NMNL models, and associated tests, we
apply the housing decision tree given in Figure 3.3 and the associated NMNL
model in (3.40)-(3.43) to data on the housing status of single elderly men from
the 1977 U.S. Annual Housing Survey for the Albany-Schenectady-Troy,            N.Y.
SMSA. These results were prepared by Axe1 Boersch-Supan, and are a simplified
version of some models estimated by Boersch-Supan and Pitkin (1982); this
reference contains a detailed description of variables and analysis of other
socioeconomic groups.
   The sample contains 159 single elderly men, of whom 45.9% are owners, 30.2%
are renter-heads, and 23.9% are renter non-heads. Selection of dwelling unit is not
modeled, and units within a cluster are treated as homogeneous and sufficiently
similar to be adequately characterized as a single typical unit.
   Two price variables are considered for each person in the sample, out-of-pocket
costs (OPCOST)      and expected net return on equity in owned units (RETURN).
Out-of-pocket costs are the operating costs of the housing unit. For rental units,
this is gross rent including utilities as reported in the survey. For owner-occupied
units, OPCOST consists of mortgage and real-estate tax payments, utility costs,
insurance payments, and maintenance. These direct costs are reduced by esti-
mated savings on federal income taxes resulting from the deductability of
mortgage interest and property taxes. Consequently OPCOST is influenced in a
non-linear way by income. Costs in dwellings with more than one nuclear family
unit are assumed to be apportioned according to the total number of adults,
children counting as half an adult.
   The RETURN variable for owner-occupied dwellings is defined as expected
appreciation less equity cost, and is taken to be a proportion of dwelling value
determined by average annual appreciation in the area since 1970, equity as a
fraction of value estimated from date of purchase, and a discount factor reflecting
opportunity cost of equity.
Ch. 24: Qualttative   Response Models                                                                  1429

   The construction of OPCOST and RETURN           for chosen alternatives is based
on individual reported costs, while for non-chosen alternatives these variables are
based on the average experience of recent movers. Consequently, the estimated
models should be interpreted as “reduced form” state models which reflect the
relationship between status and costs, taking into account the inertia and non-
transferable discounts associated with tenure. These models may accurately
forecast future status-cost patterns provided there is no structural change in
turnover rates or tenure distributions. They should not be interpreted as transi-
tion probabilities from one dwelling state to another-the    latter probabilities are
likely to be strongly state dependent and display less sensitivity to costs.
   In addition to OPCOST and RETURN, income enters as an explanatory
variable in interaction with a dummy variable for owner (YO WN) and a dummy
variable for non-head (YNH). Table 3.1 illustrates the structure of the explana-
tory variables.
   First consider a MNL model fitted to these data. Table 3.2 gives the estimates,
asymptotic standard errors and t-statistics, Table 3.4 gives elasticities for each
response probability calculated at sample means (by alternative) of the explana-
tory variables. This model excludes alternative-specific dummy variables. Conse-
quently, the coefficients of the income variables reflect both a correlation of
response with income, and unobserved features specific to the associated alterna-
tive. The model suggests a strong positive association between ownership and
return, and strong negative association between choice and out-of-pocket cost and
between non-headship and income. The value of the log-likelihood at the maxi-

                                                 Table 3.1
                                  Structure of the explanatory variables.

   Person       Alternative=     OPCOSTb         RETURNC          YO WNd         YNHd        CHOICE
      1               1             1.24             2.79            6.1            0
      1               2             1.13                0              0          6.1
      1               3             2.33                0              0            0
      2               1             5.48             5.07            4.3            0
      2               2             1.13                0              0          4.3
      2               3             0.93                0              0            0

     A;.e             i             3.44             4.41            6.4            0           0.46
                      2             0.97                0              0          6.4           0.24
                      3             1.96                0              0            0           0.30


   Wtemative 1 = own (73 cases); alternative 2 = rent/non-head      (38 cases); alternative 3 = rent/head
 (48 cases).
   bin thousand 1977 dollars.
   ‘In thousand 1977 dollars.
   din thousand 1977 dollars.
   %mple average by alternative.
1430                                                                                          D. L. McFadden


                                                   Table 3.2
                                    Multinomial logit model of housing status
             Variable              Parameter estimate        Standard error     t-Statistic
             OPCOST                         -4.544               1.011               - 4.50
             RETURN                            2.506             0.141                 3.35
             YO WN                          - 0.055              0.074               - 0.73
             YNH                            - 0.838              0.202               -4.16

                              Auxiliary statistics
                                Sample sire = 159
                              Log-likelihood = - 15.91
                              Estimation method: maximum likelihood, model (3.14).


mum likelihood estimates is - 15.9, compared with a value of - 174.7 when all
coefficients are zero. Using the criterion of maximum probability, the model
predicts correctly 97.5% of the observed states.
   The MNL model specification can be tested using the procedure described in
(3.28). Let S,,, and Shea,, denote the test statistics obtained by deleting owner
and renter-head alternatives, respectively, and estimating the reduced MNL
model. Under the null hypothesis that the MNL specification is correct, S,,, and
S head are asymptotically cl-u-square with three degrees of freedom. For this
sample, S,,, = 22.4 and S,, =1.7. Then the first statistic rejects the MNL
specification at the 0.001 significance level, the second does not reject. We
conclude, with a significance level at most 0.002, that the MNL specification
should be rejected.’

  ‘The statistics &,    and Shea,, are not independent. However, the inequalities max( P( S,,, > c).
P(Shead’    c))   5 P(m~(&wn~Shead)’   c)s   p(so%rn’ c)+ P(Shead  > c) can be used to bound the sig-
nificance level and power curve of a criterion which rejects MNL if either of the statistics exceeds c.
Alternatively, one can extend the analysis of Hausman and McFadden to establish an exact
asymptotic joint test. Using the notation of subsection 3.7, let A and D be restricted subsets of the
choice set C, PO and & the restricted and full maximum likelihood estimates of the parameters
identifiable from D, and aA and ac the restricted and full estimates of the parameters identifiable
from A. There may be overlap between /$ and ac. Let V. and Va denote the estimated covariance
matrices of PO and a,,, respectively, and let I+,,, V,+ etc. denote submatrices of the estimated
covariance matrix of the full maximum likelihood estimator. Define:
                  T

       H=fr=lc c (~,,--~~r)(t,,-zD,)‘~r,
                      reAnD

where x and z are the variables corresponding to a and p; .xA and zo are the probability-weighted
averages of these variables within A and D; and P,, is the estimated response probability from the full
choice set. Then JT(( a ., - a,-)‘, ( BD - &)‘) is, under the null hypothesis, asymptotically normal with
mean zero and covariance matrix:


                                                        1
           VA- vc,,                VAHVD      -   Vcg
       T
           VD H’VA    -   vc,%     V8 -    vcsp


Then a quadratic form in these expressions is asymptotically &i-square under the null with degrees of
freedom equal to the rank of the matrix.
Ch. 24: Quulitatioe Response Models                                                        1431


                                            Table 3.3
                         Nested multinomial logit model of housing status.

            Variable        Parameter estimate        Standard error         t-Statistic
            OPCOST                    - 2.334             0.622                - 3.15
            RETURN                      0.922             0.479                  1.93
            YO WN                       0.034             0.064                  0.53
            YNH                       - 0.438             0.121                - 3.62
            h                           0.179             0.109                  1.64

            Auxiliary statistics:
              Sample size = 159
              Log-likelihood = - 10.79
            Estimation method:
              full maximum likelihood
              estimation, model (3.40) with lowest
              level of tree (unit choice) deleted



    The MNL specification can be tested against a NMNL decision tree using the
 Lagrange multiplier statistic given in (3.59). We have calculated this test for the
 tree in Figure 3.3, with the rental alternatives in a cluster, and obtain a value
 LM = 15.73. This statistic is asymptotically cm-square with one degree of freedom
 under the null, leading to a rejection of the MNL specification at the .OOl
 significance level.
    We next estimate a nested MNL model of the form (3.40) but continue the
simplifying assumption that dwelling units within a cluster are homogeneous.
Then there are three alternatives: own, rent/non-head,        and rent/head, and one
inclusive value coefficient X. Table 3.3 reports full maximum likelihood estimates
of this model. Asymptotic standard errors and t-statistics are given. Table 3.4
gives elasticities calculated at the sample mean using (3.49). The estimated
inclusive value coefficient h =I 0.179 is significantly less than one: the statistic
W = (1.0 - X)*/SE: = 56.77 is just the Wald statistic for the null hypothesis that
the MNL model in Table 3.2 is correct, which is &i-square with one degree of
freedom under the null. Hence, we again reject the MNL model at the 0.001
significance level. It is also possible to use a likelihood ratio test for the
hypothesis. In the example, the likelihood ratio test statistic is LR = 10.24, leading
to rejection at the 0.005 but not the 0.001 level. We note that for this example the
Lagrange multiplier (LM), likelihood ratio (LR), and Wald (W) statistics differ
substantially in value, with LR -CLM -CW. This suggests that for the sample size
in the example the accuracy of the first-order asymptotic approximation to the
tails of the exact distributions of these statistics may be low.
    The impact of clustering of alternatives can be seen clearly by comparing
elasticities between the MNL model and the NMNL model in Table 3.4. For
example, the MNL model has equal elasticities of owner and renter-head response
probabilities with respect to renter non-head OPCOST, as forced by the IIA
1432                                                                                 D. L. McFadden


                                                 Table 3.4
                             Elasticities in the MNL and NMNL models.”
                                     NML Model                          MNML model
                            Alt.1       Ah.2        Ah.3       Alt.1       Alt.2        Alt.3
                                        Rent        Rent                   Rent         Rent
       Variable             Own       non-head      head       Own       non-head       head

       Owner OPCOST         - 8.44      + 7.19      + 7.19     -4.33       + 3.69        + 3.69
       Rental non-head      + 1.06      - 3.35      +1.06      +0.54       - 7.48        + 5.15
         OPCOST
       Rent head            + 2.67      + 2.67      - 6.06     + 1.37     + 13.10      - 12.41
         OPCOST
       RETURN               + 5.97      - 5.08      - 5.08     + 2.20      - 1.87        - 1.87
       INCOME               + 1.10      - 3.92      + 1.45     + 0.79      - 9.37        + 6.29

          “Elasticities are calculated at sample means of the explanatory variables; see formula
       (3.49).

property, whereas in the NMNL model the first of these elasticities is substan-
tially decreased and the second is substantially increased.
   A final comment on the NMNL model concerns the efficiency of sequential
estimates and their suitability as starting values for iteration to full maximum
likelihood. Sequential estimation of the NMNL model starts by fitting a MNL
model to headship status among renters. Only OPCOST and YNH vary among
renters, so that only the coefficients of these variables are identified. Next an
inclusive value for renters is calculated. Finally, a MNL model is fitted to
own-rent status, with RETURN, YOWN, and the calculated inclusive value as
explanatory variables. The covariance matrix associated with sequential estimates
is complicated by the use of calculated inclusive values; Amemiya (1978d) and
McFadden (1981) give computational formulae. One Newton-Raphson iteration
from the sequential estimates yields estimates which are asymptotically equivalent
to full information maximum likelihood estimates.’ In general sequential estima-
tion may be quite inefficient, resulting in one-step estimators which are far from
the full maximum likelihood estimates. However, in this example, the sequential
estimates are quite good, agreeing with the full information estimates to the third
decimal place. The log-likelihood for the sequential estimates is - 10.7868,
compared with - 10.7862 at the full maximum.
   The clustering of alternatives described by the preceding NMNL model could
also be captured by a one-factor MNP model. With three alternatives, it is also
feasible to estimate a MNP model with varying taste coefficients on all variables.
We have not estimated these models. On the basis of previous studies [Hausman

   90ne must be careful to maintain consistent parameter definitions between the sequential procedure
and the NMNL model likelihood specification; namely the parameter a from the first sequential step
(3.41) is scaled to aKrhh, in the NMNL generating function (3.47).
Ch. 24: Qualitative Response Models                                           1433


and Wise (1978), Fischer-Nagin (1981)], we would expect the one-factor MNP
model to give fits comparable to the NMNL model, and the MNP model with full
taste variation to capture heterogeneities which the first two models miss.


4.      Further topics


4. I.    Extensions

Econometric analysis of qualitative response has developed in a number of
directions from the basic problem of multinomial choice. This section reviews
briefly developments in the areas of dynamic models, systems involving both
discrete and continuous variables, self-selection and sampling problems, and
statistical methods to improve the robustness of estimators or asymptotic ap-
proximations to finite-sample distributions.



4.2.     Dynamic models

Many important economic applications of qualitative response models involve
observations through time, often in a combined cross-section/time-series    frame-
work. The underlying latent variable model may then have a components of
variance structure, with individual effects (population heterogeneity), autocorre-
lation, and dependence on lagged values of latent or indicator variables (state
dependence). This topic has been developed in great depth by Heckman (1974,
1978b, 1981b, 1981~) Heckman and McCurdy (1982), Heckman and Willis
(1975) Flinn and Heckman (1980), and Lee (1980b).
   Dynamic discrete response models are special cases of systems of non-linear
simultaneous equations, and their econometric analysis can utilize the methods
developed for such systems, including generalized method of moments estimators;
see Hausman (1982) Hansen (1982), and Newey (1982).
   Most dynamic applications have used multivariate normal disturbances so that
the latent variable model has a linear structure. This leads to MNP choice
probabilities. As a consequence, computation limits problem size. Sometimes the
dimension of the required integrals can be reduced by use of moments estimators
[Hansen (1982) and Ruud (1982)]. Alternatively, one or two factor MNP models
offer computational convenience when the implied covariance structure is ap-
propriate. For example, consider the model:


        Y,*,= J&P + &,I -   v,                                               (4.1)
1434                                                                       D. L. McFadden


and  Y,, =lify;>O,y,,,=-lotherwise,wheret=l,...,          T, n=l,...,  N; v,isan
individual random effect which persists over time; and E,( are disturbances
independent of each other and of v. If E,, and vn are normal, then the probability
of a response sequence has the tractable form:


       P(yn,,...,ynr)   =         ;) *fJ@(
                             /_kafg(  Y
                                        ynf(xn;;
                                            + dv.             v,1                   (4.2)


   It is also possible to develop tractable dynamic models starting with extreme-
value disturbances. If (v,, e,i,. . . , E,,~) has the generalized extreme value distribu-
tion


       F(v,,,enl,...,E,T)                                                           (4.3)


with 0 < X ~1, then the probability           that y,, = 1 for all f in any subset A of
(l,...,T} is:




If A, is the set of times with y,, =l, and k(B) is the cardinality of a set B, then


       P(Y,l,...>   Y"T) =    c (-l)kO~A,“B.
                             BGA;
                                                                                    (4.5)


For a more general discussion of models and functional              forms for discrete
dynamic models, see Heckman (1981b).


4.3.    Discrete-continuous         systems

In some applications, discrete response is one aspect of a larger system which also
contains continuous variables. An example is a consumer decision on what model
of automobile to purchase and how many kilometers to drive (VKT). It is
important to account correctly for the joint determination of discrete and
continuous choices in such problems. For example, regression of VKT on
socioeconomic characteristics for owners of American cars is likely to be biased
by self-selection into this sub-population.
Ch. 24: Qualitatioe Response Models                                                  1435

  A typical discrete-continuous         model is generated by the latent variable model:


     Y:: = Xl,& - &it          (i =1,2,3),                                         (4.6)


and generalized indicator function:


              1,    ifyc20,
     Ylf =                                                                         (4.7)
              0,    otherwise,

     Y,, = Yl,Y2*,   +o-Yl,)Yk                                                     (4.8)

where (pi, e2, Ed) are multivariate          normal with a mean zero and covariance
matrix:



         1
      [ 021
        031   52
              ‘32
              022    013
                     033
                     ‘23   1
                           .




This model is sometimes termed a switching regression with observed regime.
    Discrete-continuous models such as (4.6)-(4.7) can be estimated by maximum
likelihood, or a computationally easier two-step procedure. The latter method first
estimates the reduced form (marginal) equation for the discrete choice. Then the
fitted probabilities are either used to construct instruments for the endogenous
discrete choice variables in (4.8), or else used to augment (4.8) with a “hazard
rate” whose coefficient absorbs the covariance of the disturbance and explanatory
variables. Developments of these methods can be found in Quandt (1972),
Heckman (1974), Amemiya (1974b), Lee (1980a), Maddala and Trost (1980), Hay
(1979), Duncan (1980a), Dubin and McFadden (1980), and Poirier and Ruud
(1980). A comprehensive treatment of models of this type can be found in Lee
(1981). Empirical experience is that estimates obtained using augmentation by the
hazard rate are quite sensitive to distributional assumptions; Lee (1981a) provides
results on this question and develops a specification test for the usual normality
assumption.
    If discrete-continuous  response is the result of economic optimization, then
cross-equation restrictions are implied between the discrete and continuous choice
equations. These conditions may be imposed to increase the efficiency of estima-
tion, or may be used to test the hypothesis of optimization. These conditions are
developed for the firm by Duncan (1980a) and for the consumer by Dubin and
McFadden (1980).
1436                                                                           D. L. McFadden

4.4.    Self-selection and biased samples

In the preceding section, we observed that joint discrete-continuous                  response
could introduce bias in the continuous response equation due to self-selection into
a target sub-population. This is one example of a general problem where ancillary
responses lead to self-selection or biased sampling.
    In general, it is possible to represent self-selection phenomena in a joint latent
variable model which also determines the primary response. Then models with a
mathematical structure similar to the discrete-continuous response models can be
used to correct self-selection biases [Heckman (1976b), Hausman and Wise
(1977), Maddala (1977a), Lee (198Oa)l.
    Self-selection is a special case of biased or stratified sampling. In general,
stratified sampling can be turned to the advantage of the econometrician by using
estimators that correct bias and extract maximum information from samples
[Manski and Lerman (1977), Manski and McFadden (1980), Cosslett (1980a),
McFadden (1979c)]. To illustrate these approaches, consider the problem of
analyzing multinomial response using self-selected or biased samples. Letf’( x, fi*)
denote the true response probability and p(x) the density of the explanatory
variables in the population of interest. Self-selection or stratification can be
interpreted as identifying an “exposed” sub-population from which the observa-
tions are drawn; let r(i, x) denote the conditional probability that an individual
with characteristics (i, x) is selected into the exposed sub-population. For exam-
ple, 7~may be the probability that an individual agrees to be interviewed or is able
to provide complete data on x, or the probability that the individual meets the
screening procedures established by the sampling protocol (e.g. “terminate the
interview on rental housing costs if respondent is an owner”). The selection
probability may be known, particularly in the case of deliberately biased samples
(e.g. housing surveys which over-sample rural households). Alternately, the selec-
tion process may be modeled as a function of a vector of unknown parameters y*.
An example of a latent variable model yielding this structure is the recursive
system _yi*= x,p - ei and yi = 1 if yi* 2 y;‘, y, = 0, otherwise, for i = 1,. . . ,m;
y,j+= xyo +cy_“,,y,y, - e. and y. =l if yz 2 0 and y. = 0 otherwise; where x =
(x i,...,&)r    Y = (Yo , . . . ,Y,,,), and y, is an indicator for selection into the exposed
sub-population.
    By Bayes’ law, the likelihood of an observation (i, x) in the exposed population
is:
       h(i,x)=n(i,x,y*)f’(x,B*)P(x)/g(D*,Y*)7                                           (4.9)
where

       q(p*,y*)    = C C~(i,x,v*)f’(x,~*)P(X)                                         (4.10)
Ch. 24: Qualitative Response Models                                                               1437

is the fraction of the target population which is exposed. Note that when y* is
unknown, it may be impossible to identify all components of (y*, p* ), or
identification may be predicated on arbitrary restrictions on functional form.
Then auxiliary information on the selection process (e.g. follow-up surveys of
non-respondents, or comparison of the distributions of selected variables between
the exposed population and censuses of the target population) is necessary to
provide satisfactory identification.
   Stratified sampling often identifies several exposed sub-populations, and draws
a sub-sample from each. The sub-populations need not be mutually exclusive; e.g.
a survey of housing status may draw one stratum from lists of property-owners, a
second stratum by drawing random addresses in specified census tracts. If the
originating strata of observations are known, then the likelihood (4.9) specific to
each stratum applies, with the stratum identifier s an additional argument of r
and q. However, if the observations from different strata are pooled without
identification, then (4.9) applies uniformly to all observations with v a mixture of
the stratum-specific selection probabilities: if ps is the share of the sample drawn
from stratum s, then except for an inessential constant:


      77(i,x) = Cr(i, x, s, y*)k/q,.                                                          (4.11)



   The likelihood (4.9) depends on the density of the explanatory variables p(x)
which is generally unknown and of high dimensionality, making direct maximum
likelihood estimation impractical. When the selection probability functions are
known, one alternative is to form a likelihood function for the observations as if
they were drawn from a random sample, and then weight the observations to
obtain a consistent maximum “pseudo-likelihood” estimator. Specifically, if the
selection probability a(i, x) is positive for all i, then, under standard regularity
conditions, consistent estimates of j3 are obtained when observation (i, x) is
assigned the log pseudo-likelihood (l/rr(i, x))lnf’(x, fi). This procedure can be
applied stratum by stratum when there are multiple strata, provided the positivity
of rr is met. However, in general it is more efficient to pool strata and use the
pooled selection rate (4.11).” Pooling is possible if the exposure shares of qs are
known or can be estimated from an auxiliary sample which grows in size at least
as rapidly as the main sample. Further discussion of this method and derivation
of the appropriate covariance matrices can be found in Manski and Lerman
(1977) and Manski and McFadden (1981).

  “Additionalweighting of observations with weights depending on x, but not on (i,s), will in
generalnot affect consistency, and may be used to improve efficiency. With appropriate redefinition of
a(i, x), it is also possible to reweight strata.
1438                                                                                D. L. McFadden


   A second approach to estimation is to form the pooled sample conditional
likelihood of response i and stratum s, given x,

                                  fl(x,rB)~(i,x,s,y)ll~/qs                                  (4.12)
       I(i,slx,8,Y)=         m


                             c /i(x,a)C~(i,x,t,Y)~~/q,’
                            j=l              I


When the stratum s is not, identified or there is a single stratum, this reduces to




With appropriate regularity conditions, plus the requirement that a(i, x, y) be
positive for all i, maximum conditional likelihood estimates of (p, Y) are con-
sistent. l1 Further discussion of this method and derivation of the appropriate
covariance matrix is given in McFadden (1979) and Manski and McFadden
(1981).
   When the response model has the multinomial logit functional form, condi-
tional maximum likelihood has a simple structure. For


       fi(x,   /3) = e”J/     fJe@,                                                         (4.14)
                             j=l


(4.12) becomes:

                                   exp[XiS+ln(n(i,x,s,v)EL,/q,)l                    (i,s)EA,
       ~(i,slx,P,y)     =
                                  C   eXP[xj8+ln(a(j,x,t,Y)lLl/qr)]
                            (j.OEA

                                                                                            (4.15)

where A is the set of pairs (i, s) with s(i, x, s, y) > 0. When r(i, x, s, y)p,/q, is
known or can be estimated consistently from auxiliary data, or In m(i, x, s, y) is
linear in unknown parameters, then the response and selection effects combine in
a single MNL form, permitting simple estimation of the identifiable parameters.

   “The exposure shares qS may be known, or estimated consistently from an auxiliary sample.
Alternatively, they can be estimated jointly with (8, y). Identification in the absence of auxiliary
information will usually depend on non-linearities of the functional form.
Ch. 24: Qualitative   Response Models                                          1439


   It is possible to obtain fully efficient variants of the conditional maximum
likelihood method by incorporating side constraints (when qs is known) and
auxiliary information (when sample data on qs is available); see Cosslett (1981a)
and McFadden (1979).


4.5.    Statistical methods

Econometric methods for qualitative response models have been characterized by
heavy reliance on tractable but restrictive functional forms and error specifica-
tions, and on first-order asymptotic approximations. There are four areas of
statistical investigation which have begun to relax these limits: development of a
variety of functional forms for specialized applications, creation of batteries of
specification tests, development of robust methods and identification of classes of
problems where they are useful, and development of higher-order asymptotic
approximations and selected finite-sample validations.
   This chapter has surveyed the major lines of development of functional forms
for general purpose multinomial response models. In a variety of applications
with special structure such as longitudinal discrete response or serially ordered
alternatives, it may be possible to develop specialized forms which are more
appropriate. Consider, for example, the problem of modeling serially ordered
data. One approach is to modify tractable multinomial response models to
capture the pattern of dependence of errors expected for serial alternatives. This
is the method adopted by Small (?982), who develops a generalized extreme value
model with proximate dependence. A second approach is to generalize standard
discrete densities to permit dependence of parameters on explanatory variables.
For example, the Poisson density

       P,=e-“Ak/k!             (k=O,...),                                   (4.16)

with A = eXfl, or the negative binomial density


                                                                            (4.17)


with r > 0 and p = l/(1 + eeXfl), provide relatively flexible forms. A good example
of this approach and analysis of the relationships between functional forms is
Griliches, Hall and Hausman (1982).
   Specification tests for discrete response models have been developed primarily
for multinomial response problems, using classical large-sample tests for nested
hypotheses. Lagrange Multiplier and Wu-Hausman tests of the sort discussed in
1440                                                                   D. L. McFadden

this chapter for testing the MNL specification clearly have much wider applicabil-
ity. An example is Lee’s (1981a) use of a Lagrange Multiplier test for a binomial
probit model against the Pearson family. It is also possible to develop rather
straightforward tests of non-nested models by applying Lagrange Multiplier tests
to their probability mixtures. There has been relatively little development of
non-parametric methods. McFadden (1973) and McFadden, Tye, and Train
(1976) propose some tests based on standardized residuals; to date these have not
proved useful. There is no finite sample theory, except for scattered Monte Carlo
results, for specification tests.
   The primary objective of the search for robust estimators for discrete response
models is to preserve consistency when the shape of the error distribution is
m&specified. This is a different, and more difficult, problem than is encountered
in most discussions of linear model robust procedures where consistency is readily
attained and efficiency is the issue. Consequently, results are sparse. Manski
(1975) and Cosslett (1980) have developed consistent procedures for binomial
response models of the form PI= f'(xp),where f ’ is known only to be monotone
(with standardized location and scale); more general techniques developed by
Manski (1981) may make it possible to extend these results.
   To evaluate this approach, it is useful to consider the common sources of model
misspecification: (1) incorrect assumptions on the error distribution, (2) reporting
or coding errors in the discrete response, (3) omitted variables, and (4) measure-
ment errors in explanatory variables. For concreteness, consider a simple bi-
nomial probit model with a latent variable representation y* = x*p - v, v
standard normal, y = 1 if y* 2 0 and y = 0 otherwise, so that in the absence of
m&specification problems the response probability is PI= @(x*/3).       Now suppose
all the sources of misspecification are present: x* = (XT, x;) has x; omitted and
x: measured with error, x1 =x: + ot. Then y* = x$r - (v - x2*& + 5) with
response error 5. Suppose for analysis that (x:, xz, qt, v, 5) is multivariate normal




       ! I
with mean (pt, p2,0,0,0) and covariance matrix:



        221
        41
         0  222
            42
             0  00a201
                i-20         0.
                                                                              (4.18)




Then observations conform to the conditional probability of y = 1, given x1:


       pl=@       xlsl+~+bl-Plh                                               (4.19)
              i          x          i
                                        7
Ch. 24: Qualitative Response Models                                                              1441

where




Estimating the probit model PI = @(x1&) without allowance for errors of mis-
specification will lead to asymptotically biased estimates of relative coefficients in
PI if x1 is measured with error (fir, # 0), or omitted variables are correlated with
x1(,X&32 # 0) or make a non-zero contribution to the intercept (p2P2 # 0). These
sources of error also change the scale A. Reporting and coding errors in the
response (a2 # 0) affect the scale A, but do not affect the asymptotic bias of
relative coefficients. Misspecification of the error distribution can always be
reinterpreted, in light of the discussion in Section 2 on approximating response
functions, as omission of the variables necessary to make the response a probit.
   Consider an estimator of the Cosslett or Manski type which effectively esti-
mates a model Pr = F(x,&) with F a monotone function which is free to conform
to the data. This approach can yield consistent estimates of relative coefficients in
/I1 in the presence of response coding errors or an unknown error distribution,
provided there are no omitted variables or measurement errors in x. However, the
Cosslett-Manski procedures are ineffective against the last two error s0urces.r’
Furthermore, the non-linearity of (4.19) renders inoperative the instrumental
variable methods which are effective for treatment of measurement error in linear
models. How to handle measurement error in qualitative response models is an
important unsolved problem. This topic is discussed further by Yatchew (1980).
   Most applications of qualitative response problems to date have used statistical
procedures based on first-order asymptotic approximations. Scattered Monte
Carlo studies and second-order asymptotic approximations suggest that in many
qualitative response models with sample sizes of a few hundred or more, first-order

  ‘*Ma&i and I have considered estimators obtained by maximizing a “pseudo-log-likelihood”          in
which observation (y,, x) makes the contribution:




with a 2 0 and b > - 1. In the absence of measurement errors, this method yields consistent
estimators. For positive a and b, this procedure bounds the influence of extreme observations, and
should reduce the impact of coding errors in y. [Note that this class defines a family of M-estimators
in the terminology of Huber (1965); the cases a = b = 0 and a = 0, b = 1 yield maximum likelihood
and non-linear least squares estimates respectively.] We find, however, that this approach does not
substantially reduce asymptotic bias due to coding errors.
1442                                                                   D. L. McFadden

approximations are moderately accurate. Nevertheless, it is often worthwhile to
make second-order corrections for bias of estimators and the size of tests for
samples in this range. As a rule of thumb, sample sizes which yield less than thirty
responses per alternative produce estimators which cannot be analyzed reliably by
asymptotic methods. These issues are discussed further in Domencich and
McFadden (1975) Amemiya (1980, 1981), Cavanaugh (1982), Hausman and
McFadden (1982), Rothenberg (1982), and Smith, Savin, and Robertson (1982).



5.     Conclusion

This chapter has surveyed the current state of econometric models and methods
for the analysis of qualitative dependent variables. Several features of this
discussion merit restatement. First, the models of economic optimization which
are presumed to govern conventional continuous decisions are equally ap-
propriate for the analysis of discrete response. While the intensive marginal
conditions associated with many continuous decisions are not applicable, the
characterization   of economic agents as optimizers implies conditions at
the extensive margin and substantive restrictions on functional form. Unless the
tenets of the behavioral theory are themselves under test, it is good econometric
practice to impose these restrictions as maintained hypotheses in the construction
of discrete response models.
   Second, as a formulation in terms of latent variable models makes clear,
qualitative response models share many of the features of conventional economet-
ric systems. Thus the problems and methods arising in the main stream of
econometric analysis mostly transfer directly to discrete response. Divergences
from the properties of the standard linear model arise from non-linearity rather
than from discreteness of the dependent variable. Thus, most developments in the
analysis of non-linear econometric systems apply to qualitative response models.
In summary, methods for the analysis of qualitative dependent variables are part
of the continuing development of econometric technique to match the real
characteristics of economic behavior and data.



Appendix: Proof outlines for Theorems l-3

Theorem I

This result specializes a general consistency theorem of Huber (1965, theorem 1)
which states that any sequence of estimators which almost surely approaches the
suprema of the likelihood functions as T + 00 must almost surely converge to the
true parameter vector 8*. Assumptions (l)-(3) imply Huber’s conditions A-l and
Ch. 24: Qualitative     Response Models                                          1443

A-2. The inequality -eel 1zlnz10        for O~z=f’(x,e)~l          implies Huber’s
A-3, and assumption (4) and this inequality imply Huber’s A-4 and A-5. It is
possible to weaken assumptions (l)-(4) further and still utilize Huber’s argument;
the formulation of Theorem 1 is chosen for simplicity and ease in verification.
Theorem 2
Note first that L,(8)          I 0 and


      E&(0*)            = jdp(x)          5 f’(x,8*)lnf’(x,8*)   2 -m/e
                                         i-l




from the bound above on zln z for 0 I z 11. Hence, &-(0*) > - cc almost
surely, and a sequence of estimators satisfying (3.9) exists almost surely. Let 0, be
a compact subset of 0, [assumption (5)] which contains a neighborhood 0, of 0*,
and let 8, be a maximand of Lr(0) on 0,. Choose 8, E O\O, such that
L&.)+1/T>        sup e,e,Lr(e).    Define 8, = 8, if L,(t!&-) 2 L,(&), and &- = fir
otherwise. Then I$ satisfies (3.9) and by Theorem 1 converges almost surely to 8*,
and therefore almost surely eventually stays in 0,. Hence, almost surely eventu-
ally 8, = 8, E O,r, implying Lr(8,) 2 L,(8) on an open neighborhood of Or, and
therefore JL,( Br)/&l = 0.
Theorem 3
This result extends a theorem of Rao (1973, 5e2) which establishes for a
multinomial distribution without explanatory variables that maximum likelihood
estimates are asymptotically normal. Assumptions (6) and (7) correspond to
assumptions made by Rao, with the addition of bounds which are integrable with
respect to the distribution of the explanatory variables. This proof avoids the
assumption of continuous second derivatives usually made in general theorems on
asymptotic normality [cf. Rao (1973, 5f.2(iii)), Huber (1965, theorem 3 corollary)].
   Let 0, be a neighborhood of 8* with compact closure_on which assumptions
(5) and (6) hold. By Theorem 2, almost surely eventually 8, E 0, and


      o= ;
            r=l
                  gv,,
                  i=l
                            &rf’(x
                                    set’ T .
                                               8 )
                                                                               (A-1)

Noting that


                           Jlnfi(x,,e)          =
       ,glfYx,, 0)                 ae           -Oy                            (A4
1444                                                                                          D. L. McFadden


one can rewrite (A.l) as 0 = A, + B, + C, - D, with:


       A,=       i      2 (y,,-fi(x,,e*))               dlnf’y*))
                r=l i=l

       B,=       i                      alnf;;fJT) - alnri;;,,e*)],
                        E (y,,_f.(Xt,e*))[
                r=1 i=l

       c,=       i       f     (rl(xl,e*)-ri(x,,e,))                alnfi!$~s~J
                                                                            +qe*)(&-e*)),
                f=l    i i=l

       DT=7qe*)(8T-e*).                                                                               (A-3)

The steps in the proof are (1) show B,/\l?;(l + \/?; 18, - 8* I) + 0 in probability
as T + co, (2) show C,/J7’(1+@            18, - e*() + 0 in probability, (3) show
J(B*)-‘(A,     - DT)/fi   + 0 in probability, and (4) show J(8*))‘A,/@         con-
verges in distribution to a normal random vector with mean zero and covariance
matrix J(fP-‘.     With the result of Step 3, this proves Theorem 3.
   Step 1. We use a fundamental lemma of Huber (1965, lemma 3). Define


             ~(y,x,e)=,~l(yi-/i(x,e*))aln~~~~e)                                 + e - e*,

                     h(e)=E+(y,x,e)=e-e*                                                              (A-4)
       4Ydw=                      sup I~(Y,x,e’)-J/(Y,x,e)i.
                               lo’- 81s d

Then assumption (6) (iii) implies:


       ~(hx,e,dkd                    1+ f        Iv,--f’(x,e*))-y’(x)           ,                     (A-5)
                                 i         i=l                              i


and hence using the bounds (6) (iv):


        Eu(y,x,8,d)jd
                                      (1            /dp(x)d(x)y’(x))
                                                              =A,d,
       Eu(y,x,e,d)*$d*                     2J4,+m      5     E(yi-f’(x,e*))Zy’(x)*                    64.6)
                                       i               i=l

                                                             ldp(x)a’(x)+(x)*           = A,d*.
Ch. 24: Qualitative Response Models                                                     1445

These conditions imply Huber’s assumptions (N - 1) to (N - 3). Define:


                      5 (J,(Y,,x,,e)-rt(Y*,x,,e*)-x(e))
      z,(e)=      I=l
                              fi(i+\/?;le       - e*I)

                Ii1~l(y,,-f;(x,,e*))[                      - a1ncf2i>e*)
                                                    alnf.JfTe)
               =                        JT(i+dTle-e*l)
                                                                                      (A.7)

Then Huber’s Lemma 3 states that:

      supz,(e) + 0                                                                    64.8)
       @cl

in probability as T -+co.But

                                                                                      (A-9)

and Step 1 is complete.
  Step 2. Since f i is differentiable on Or, the mean value theorem implies:


                                                                                     (A.10)


where 8, is some interior point on the line segment connecting 8* and 8,.
Substituting this expression in C, yields C, = (Fr + Gr)( 6, - e*), with




                                                                                     (A.ll)

and

                         WP(x,J*)           afi(x,,e*)   _ Jlnji(x,,&)   ajl(~,J,)
      G,=i        f
             r=l i=l           ae                aef              ae        aef        I ’
                                                                                     (A.12)
1446                                                                        D. L. McFadden

Then F,/T           0      probability by the law of large numbers and


       IG,/TI    5 lb,-     8*) E jdp(+-+)/3i(n)[2ui(~)2]
                                i=l


in probability by Theorem 2. Since


                                                                                   (A.14)


with the second term in the product stochastically bounded, this establishes
Step 2.
   Step 3. The first two steps establish that (AT - 0,)/\/7;(1+    fi 16, - 8* I) + 0
in probability and hence J(P)‘(A,        - Dr)/fi(l   + \/?; 16 - 8* I) + 0 in proba-
bility. Therefore given E> 0, there exists T, such that for T > T,, the inequality

       IJ(e*)-lAT/J?:-~(e,-e~)l<e(l+JT~~,-e*I)                                     (A.15)

holds with probability at least 1- ~/2. Chebyshev’s inequality applied to
J(fI*)-‘A,/@   implies [using assumptions (7) and (6) (iv)] that for some large
constant K:

       Ip(e*)-b&q              < K                                                 (A.16)

holds with probability at least 1 - c/2. Then (A.15) and (A.16) imply

       JT&-e*(            < (K+&)/(l-&),                                           (A.17)

and hence

       JJ(e*)-‘A,/~-~(8,-e~)II                   @+1)&/(1-&E)                      (A.18)

with probability at least 1 - E. Since E can be made small, this establishes Step 3.
   Step 4. The expression J(P)‘A,/@          has mean zero and covariance matrix
J(P)‘,    and satisfies the conditions of the Lindeberg-Levy central limit theo-
rem. Therefore it converges in distribution to an asymptotically normal vector.


References
Adler, T. and M. Ben-Akiva (1975) “A Joint Frequency, Destination and Mode Choice Model for
  Shopping Trips”, Transportation Research Record, 569, 136-150.
Aitchinson, J. and J. Bennett (1970) “Polychotomous Quantal Response by Maximum Indicant”,
  Biomerrika, 57, 253-262.
Ch. 24: Qualitative Response Models                                                            1447

Aitchinson, J. and S. Silvey (1957) “The Generalization of Probit Analysis to the Case of Multiple
  Responses”, Biometrika, 44, 131-140.
Amemiya, T. (1973) “Regression Analysis When the Dependent Variable is Truncated Normal”,
  Econometrica, 41, 997-1016.
Amemiya, T. (1974a) “Bivariate Probit Analysis: Minimum Chi-Square Methods”, Journal of the
  American Statistical Association, 69, 940-944.
Amemiya, T. (1974b) “Multivariate Regression of Simultaneous Equation Models When the Depen-
   dent Variables Are Truncated Normal”, Econometrica, 42, 999-1012.
Amemiya, T. (1974c) “A Note on the Fair and JatTee Model”, Econometrica, 42, 759-762.
Amemiya, T. (1975) “Qualitative Response Models”, Annals of Economic and Social Measurement, 4,
   363-372.
Amemiya, T. (1976) “The Maximum Likelihood, the Minimum Chi-Square, and the Non-Linear
   Weighted Least Squares Estimator in the General Qualitative Response Model”, Journal of the
   Ameyican Statistical Association, 71, 347-351.
Amemiva. T. (1978a) “The Estimation of a Simultaneous Equation Generalized Probit Model”,
   Econometrica, 46, i193-1205.
Amemiya, T. (1978b) “A Note on the Estimation of a Time Dependent Markov Chain Model”,
   Department of Economics, Stanford University.
Amemiya, T. (1978~) “On a Two-Step Estimation of a Multivariate Logit Model”, Journal of
   Econametrics; 8, 13121.
Amemiya, T. (1979) “The Estimation of a Simultaneous Equation Tobit Model”, International
   Economic Review, 20, 169-181.
Amemiya, T. (1980) “The n*-Order Mean Squared Errors of the Maximum Likelihood and the
   Minimum Loait Chi-Souare Estimates”. The Annals of Statistics. 8. 488-505.
Amemiya, T. (1581) “Qualitative Response Models: A’Survey”, Journal of Economic Literature, 19,
   1483-1536.
Amemiya, T. and F. Nold (1975) “A Modified Logit Model”, Review of Economics and Statistics, 57,
   255-257.
Amemiya, T. and J. Powell (1980) “A Comparison of the Logit Model and Normal Discriminant
   AnaIvsis When the Indenendent Variables are Binarv”. Tech. Renort 320. IMSSS. Stanford Univ.
Anas, A. (1981) “Discrete Choice Theory, Information Theory, and the MultinomiaI Logit and
   Gravity Models”, manuscript, Northwestern Univ.
Anderson, T. (1958) Introduction to Multivariate Statistical Analysis. New York: Wiley.
Anscombe, E. J. (1956) “On Estimating Binomial Response Relations”, Biometrika, 43,461-464.
Antle, C., L. Klimko, and W. Harkness (1970) “Confidence Intervals for the Parameters of the
   Logistic Distribution”, Biometrika, 57, 397-402.
Arabmazar, A. and P. Schmidt (1982) “An Investigation of the Robustness of the Tobit Estimator to
   Non-Normality”, Econometrica, 50, 1055-1064.
Ashford, J. R. and R. R. Sowden (1970) “Multivariate Probit Analysis”, Biometrics, 26, 535-546.
Ashton, W. (1972) 7’he Logit Transformation. New York: Hafner.
Atkinson, A. (1972) “A Test of the Linear Logistic and Bradley-Terry Models”, Biometrika, 59,
   37-42.
Barlett, M. S. (1935) “Contingency Table Interactions”, Journal of the Royal Statistical Society
   (Supplement) 2, 248-252.
Beggs, S., S. Cardell and J. Hausman (1981) “Assessing the Potential Demand for Electric Cars”,
   Journul of Econometrics, 16, 1-19.
Ben-Akiva, M. (1973) “Structure of Passenger Travel Demand Models”, Transportation Research
   Board Record, No. 526, Washington, D.C.
Ben-Akiva, M. (1974) “Multi-Dimensional Choice Models: Alternative Structures of Travel Demand
   Models”, Transportation Research Board Special Report 149, Washington, D.C.
Ben-Akiva, M. (1977) “Choice Models with Simple Choice Set Generating Processes”, Working Paper,
   MIT.
Ben-Akiva, M. and S. Lerman (1974) “Some Estimation Results of a Simultaneous Model of Auto
   Ownership and Mode Choice to Work”, Transportation, 3, 357-376.
Ben-Akiva, M. and S. Lerman (1979) “Disaggregate Travel and Mobility Choice Modes and Measures
   of Accessibility”. In Behavior Travel Modelling edited by D. Hensher and P. Stopher. pp. 654-679.
   London: Coom Helm.
1448                                                                                   D. L. McFadden

Berkovec, J. and J. Rust (1982) “A Nested Logit Model of Automobile Holdings for One-Vehicle
  Households”. Workina Paper, Department of Economics, MIT.
Berkson, J. (1949) “Application of the Logistic Function to Bioassay”, Journal of the American
  Statistical Association, 39, 357-365.
Berkson, J. (1951) “Why I Prefer Logits to Probits”, Biometrtka, 7, 327-339.
Berkson, J. (1953) “A Statistically Precise and Relatively Simple Method of Estimating the Bio-Assay
  with Quantal Response, Based on the Logistic Function”, Journal of the Americun Statisticul
  Associution, 48, X5-599.
Berkson, J. (1955a) “Estimation of the Integrated Normal Curve by Minimum Normit Chi-Square
  with Particular Reference to Bio-Assay”, Journal of the American Statistical Association, 50,
  529-549.
Berkson, J. (1955b) “Maximum Likelihood and Minimum Chi-Square Estimations of the Logistic
  Function”. Journal of the American Statistical Association, 50, 130-161.
Berndt, E., B. Hall, R. Hall, and J. Hausman (1974) “Estimation and Inference in Non-Linear
  Structural Models”, Annals of Economic and Social Measurement, 3, 653-666.
Bishop, T., S. Fienberg, and P. Holland (1975) Discrete Multiuariute Analysis. Cambridge: MIT Press.
Block, H. and J. Marschak (1960) “Random Orderings and Stochastic Theories of Response”. In
  Contributions to Probubility and Statistics, edited by I. Olkin, 97-132. Stanford University Press.
Bock, R. D. and L. Jones (1969) The Measurement and Prediction of Judgement and Choice. San
  Francisco: Holden-Day.
Boersch-Supan, A. and J. Pitkin (1982) “Multinomial Logit Models of Housing Choices”. Working
  Paper, No. 79, Joint Center for Urban Studies, MIT and Harvard.
Boskin, M. (1974) “A Conditional Logit Model of Occupational Choice”, Journal of Political
  Economy, 82, 389-398.
Boskin, M. (1975) “A Markov Model of Turnover in Aid to Families with Dependent Children”,
  Journul of Human Resources, 10,467-481.
Brownstone, D. (1978) “An Econometric Model of Consumer Durable Choice and Utilization Rate”.
  Paper IP-258, Center for Research in Management Science, University of California, Berkeley.
Cardell, S. (1977) “Multinomial Logit with Correlated Stochastic Terms”. Working Paper, Charles
  River Associates.
Carlton, D. (1979) “The Location and Employment Choices of New Firms: An Econometric Model
  with Discrete and Continuous Endogenous Variables”. Working Paper, Univ. of Chicago.
Cavanagh, C. (1982) Hypothesis Testing in Models with Discrete Dependent Variables. Ph.D. Thesis,
  Dept. of Economics, Univ. of California, Berkeley.
Chambers, E. A. and D. R. Cox (1967) “Discrimination Between Alternative Binary Response
  Models”, Biometriku, 54, 573-578.
Chung, C. and A. Goldberger (1982) “Proportional Projections in Limited Dependent Variable
  Models”. Working Paper, Univ. of Wisconsin.
Clark, C. (1961) “The Greatest of a Finite Set of Random Variables”, Operations Reseurch, 9,
  145-162.
Cook, P. (1975) “The Correctional Carrot: Better for Parolees”, Policy Analysis, 1, 11-54.
Cosslett, S. (1978) “Efficient Estimation of Discrete-Choice Models from Choice-Based Samples”.
  Ph.D. dissertation, Department of Economics, University of California, Berkeley.
Cosslett, S. (1980) “Estimation of Random Utility Models with Unknown Probability Distribution”.
  Working Paper, Univ. of Florida.
Cosslett, S. (1981) “Efficient Estimators of Discrete Choice Models”. In Structurul Analysis of Discrete
  Dutu, edited by C. Manski and D. McFadden, 51-111. Cambridge: MIT Press.
Cosslett, S. (1981a) “Maximum Likelihood Estimator for Choice-Based Samples”, Econometrica, 9,
  1289-1316.
Cox, D. R. (1958) “The Regression Analysis of Binary Sequences”, Journul of the Royul Statistical
  Society (Series B), 820,215-242.
Cox, D. R. (1966) “Some Procedures Connected with the Logistic Response Curve”. In Reseurch
  Papers in Statistics, edited by F. David, 55-71. New York: Wiley.
COX,D. R. (1970) Analysis of Binary Data. London: Methuen.
COX,D. R. (1972) “The Analysis of Multivariate Binary Data”, Applied Statistics, 21, 113-120.
COX,D. R. and E. Snell (1968) “A General Definition of Residuals”, Journal of the Royal Statistical
 Society (Series B), 30, 248-265.
Ch. 24: Qualitative     Response Models                                                        1449

Cox, D. R. and E. Snell (1971) “On Test Statistics Calculated from Residuals”, Biometrika,       58.
  589-594.
Craggr J. G. (1971) “Some Statistical Models for Limited Dependent Variables with Application to the
  Demand for Durable Goods”, Econometrica, 39, 829-844.
Cragg, J. G. and R. Uhler (1970) “The Demand for Automobiles”, Canadian Journal of Economics, 3,
  386-406.
Crawford, D. and R. Pollak (1982) “Order and Inference in Qualitative Response Models”. Discus-
  sion Paper 82-4, Rutgers Univ.
Cripps, T. F. and R. J. Tarling (1974) “An Analysis of the Duration of Male Unemployment in Great
  Britain 1932-1973”, Economic Journal, 84, 289-316.
Daganzo, C. (1980) Multinomial Probit. New York: Academic.
Daganzo, C., F. Bouthelier, and Y. Sheffi (1977) “Multinomial Probit and Qualitative Choice: A
  Computationally Efficient Algorithm”, Transportation Science, 11, 338-358.
Dagenais, M. G. (1975) “Application of a Threshold Regression Model to Household Purchases of
  Automobiles”, Review of Economics and Statistics, 57, 275-285.
Daly, A. and S. Zachary (1979) “Improved Multiple Choice Models”. In Identifyrng and Measuring the
  Determinants   of Mode/ Choice, edited by D. Hensher and 0. Dalvi, pp. 187-201.
Debreu, G. (1960) “Review of R. D. Lute Individual Choice Behavior”, American Economic Rertiew,
  50.186-188.
Diewert, E. (1978) “Duality Approaches to Microeconomic Theory”. Technical Report 281, Institute
  of Mathematical Studies in the Social Sciences, Stanford University.
Domencich, T. and D. McFadden (1975) Urban Travel Demand: A Behavioral Analysis. Amsterdam:
  North-Holland.
Dubin, J. (1982) Economic Theory and Estimation of the Demand for Consumer Durables and their
   Utilization. Ph.D. Dissertation, MIT.
Dubin, J. and D. McFadden (1980) “An Econometric Analysis of Residential Electrical Appliance
  Holdings and Usage”. Working Paper, Department of Economics, Massachusetts Institute of
  Technology.
Duncan, G. (1980a) “Formulation and Statistical Analysis of the Mixed Continuous/Discrete Model
  in Classical Production Theory”, Econometrica, 48, 839-852.
Duncan, G. (1980b) “Mixed Continuous Discrete Choice Models in the Presence of Hedonic or
  Exogenous Price Functions”. Working Paper, Department of Economics, Washington State Univer-
  sity.
Durling, F. (1969) “Bivariate Probit, Logit, and Burrit Analysis”. Tech. Report 41, Southern
   Methodist Univ.
Efron, B. (1975) “The Efficiency of Logistic Regression Compared to Normal Discrimination
  Analysis”, Journal of the American Statistical Association, 70, 892-898.
Fair, R. C. and D. M. Jaffee (1972) “Methods of Estimation for Markets in Disequilibrium”,
   Econometrica,      40, 497-514.
Farber, H. (1978) “Bargaining Theory, Wage Outcomes, and the Occurrence of Strikes”, American
   Economic Review, 68, 262-271.
Farber, H. and D. Saks, (1981) “Why Workers Want Unions”, Journal of Public Economtcs, to
   appear.
Fienberg, S. (1977) The Analysis of Cross-ClassiJed Data. Cambridge: MIT Press.
Finnev, D. (1964) Statistical Method in Bio-Assav. London: Griffin.
Finney, D. (1971) Probit Analysis. Cambridge University Press
Fischer, G. and D. Nagin (1981) “Random versus Fixed Coefficient Quanta1 Choice Models” in C.
   Manski and D. McFadden, ed., Structural Analvsis of Discrete Data. Cambridee: MIT.
Flinn, C. and J. Heckman (1982) “Models for the Analysis of Labor Force Dy&mics”, Advances rn
   Econometrics, 1, 35-95.
Flinn, C. and J. Heckman (1982) “New Methods for Analyzing Structural Models of Labor Force
   Dynamics”, Journal of Econometrics, 18, 115-168.
Friedman, P. (1973) “Suggestions for the Analysis of Qualitative Dependent Variables”, Public
   Finance Quarter&,  1, 345-355.
Fuller, W., Manski, C. and D. Wise (1980) “New Evidence on the Economic Determinants of
  Post-Secondary Schooling Choices”. J.F.K. School of Government Discussion Paper 9UD.
1450                                                                                                   D. L. McFadden

Gas?. J. and J. Zweifel (1967) “On               the Bias of Various Estimators of the Logit and its Variance”,
  Bfomefrika,  54. 181-187. ’
Gilbert, C. (1979) “Econometric Models for Discrete Economic Processes”, Working Paper, Oxford
  Univ.
Gillen, D. W. (1977) “Estimation and Specification of the EtTects of Parking Costs on Urban
  Transport Model Choice”, Journal of Urban Economics, 4, 186-199.
Goldberger, A. S. (1964) Econometric Theory. New York: Wiley.
Goldberger, A. S. (1971) “Econometrics and Psychometrics: A Survey of Communalities”, Psycho-
  metrika.     36. 83-107.
Goldberger, A. S. (1973) “Correlations                Between Binary Outcomes and Probabilistic Predictions”,
  Journal    of the American       Stattstical   Association, 68, 84.
Goldfeld. S. M. and R. E. Quandt                 (1972) Nonlinear Methods
                                                               in Econometrics. Amsterdam: North-
  Holland.
Goldfeld, S. and R. E. Quandt (1973) “The Estimation of Structural Shifts by Switching Regressions”,
  Annals     of Economic     and Social Measurement,            2,475-486.
Goldfeld, S. and R. E. Quandt (1976) “Techniques for Estimating Switching Regressions”. In Studtes
  in Non-Linear   Estimation, edited by S. Goldfeld and R. E. Quandt, 3-37. Cambridge: Ballinger.
Goodman, L. A. (1970) “The Multivariate Analysis of Qualitative Data: Interactions Among Multiple
  Classifications”, Journal of the American Statistical Association, 65, 226-256.
Goodman, L. A. (1971) “The Analysis of Multidimensional Contingency Tables: Stepwise Procedures
  and Direct Estimation Methods for Building Models for Multiple Classifications”, Technometrics,
  13, 33-61.
Goodman, L. A. (1972a) “A Modified Multiple Regression Approach to the Analysis of Dichotomous
  Variables”. American Sociological Review, 37, 28-46.
Goodman, L. A. (1972b) “A-General Model for the Analysis of Surveys”, American Journal of
  Sociology.     77, 1035-1086.
Goodman, L. A. (1973) “Causal Analysis of Panel Study Data and Other Kinds of Survey Data”,
  American Journal of Sociolog)i, 78, 1135-1191.
Goodman, L. A. and W. H. Kruskal (1954) “Measures of Association for Cross Classifications”,
  Journal    of the American       Statistical   Association,    49, 732-764.
Goodman, L. A. and W. H. Kmskal (1954a) “Measures of Association for Cross Classification II,
  Further Discussion and References”, Journal of the American Statistical Association, 54, 123-163.
Gourieroux, C. and A. Monfort (1981) “Asvmptotic Properties of the Maximum Likelihood Estimator
  in Dichotomous Logit Models”, Journalof Econometrics, 17, 83-97.
Gourieroux. C.. J. LatTont. and A. Monfort (1980) “Coherencv Conditions in Simultaneous Linear
  Equation’Models with Endogenous Switching Regimes”, Econometrica, 48, 675-695.
Gourieroux, C., A. Holly, and A. Monfort (1980) “Kuhn-Tucker, Likelihood Ratio, and Wald Tests
  for Non-Linear Models with Inequality Constraints on Parameters”. Discussion Paper 770, Harvard
  univ.
Greene, W. (1981) “Estimation of Some Limited Dependent Variable Models Using Least Squares
  and The Method of Moments”. Working Paper 245, Cornell Univ.
Griliches, Z., B. Hall, and J. Hausman (1978) “Missing Data and Self-Selection in Large Panels”,
  Annals     de I’lnsee   30-31,    137-176.
Griliches, Z., B. Hall, and J. Hausman (1981) “Econometric Models for Count Data with an
   Application to the Patents R&D Relationship”, Econometrica, forthcoming.
Grizzle, J. (1962) “Asymptotic Power of Tests of Linear Hypotheses Using the Probit and Logit
   Transformations”, Journal of the American Statistical Association, 57, 877-894.
Grizzle, J. (1971) “Multivariate Logit Analysis”, Biomefrics, 27, 1057-1062.
Gronau, R. (1973) “The Effect of Children on the Housewife’s Value of Time”, Journal of Political
   Econonn, 81, 168-199.
Gronau, R. (1974) “Wage Comparisons-A            Selectivity Bias”, Journal of Political Economy, 82,
  1119-1143.
Gurland, J., I. Lee, and P. Dahm (1960) “Polychotomous                          Quantal Response in Biological Assay”,
  Biometrics,     16, 382-398.
Haberman, S. (1974) The Analysis of Frequency Data. University of Chicago Press.
Haldane, J. (1955) “The Estimation and Significance of the Logarithm of a Ratio of Frequencies”,
Ch. 24: Qualitative       Response Models                                                         1451

  Annals     of Human     Genetics, 20, 309-311.
Hall, R. (1970) “Turnover in the Labor Force”, Brookings Papers on Economic Actiaitv, 3, 709-756.
Hansen, L. (1982) “Large Sample Properties of Generalized Method of Moments Estimators”,
  Econometrica,       50, 1029-1054.
Harter, J. and A. Moore (1967) “Maximum Likelihood Estimation, from Censored Samples, of the
  Parameters of a Logistic Distribution”, Journal of the American Statistical Association, 62. 675-683.
Hausman, J. A. (1978) “Specification Tests in Econometrics”, Econometrica, 46, 1251-1271.
Hausman, J. A. (1979) “Individual Discount Rates and the Purchase and Utilization of Energy Using
  Durables”, Bell Journal of Economics, 10, 33-54.
Hausman, J. A. (1983) “Specification and Estimation of Simultaneous Equations Models”, Handbook
  of Econometrics.
Hausman, J. A. and D. McFadden (1984) “A Specification Test for the Multinomial Logit Model”,
  Econometrica,  forthcoming.
Hausman, J. A. and D. A. Wise (1976) “The Evaluation of Results from Truncated Samples: The New
  Jersey Negative Income Tax Experiment”, Annals of Economic and Social Measurement, 5.421445.
Hausman, J. A. and D. A. Wise (1977) “Social Experimentation, Truncated Distribution and Efficient
  Estimation”, Econometrica, 45, 319-339.
Hausman, J. A. and D. A. Wise (1978) “A Conditional Probit Model for Qualitative Choice: Discrete
  Decisions Recognizing Interdependence and Heterogeneous Preferences”, Econometrica,          46,
  403-426.
Hausman, J. A. and D. Wise (1981) “Stratification on Endogenous Variables and Estimation: The
  Gary Experiment”. In Structural Analysis of Discrete Data, edited by C. Manski and D. McFadden,
  365-391. Cambridge: MIT Press.
Hay, J. (1979) “An Analysis of Occupational Choice and Income”. Ph.D. dissertation, Yale Univer-
  sity.
Heckman, J. (1974) “Shadow Prices, Market Wages, and Labor Supply”, Econometrica, 42, 679-694.
Heckman, J. (1976a) “Simultaneous Equations Model with Continuous and Discrete Endogenous
  Variables and Structural Shifts”. In Studies in Non-Linear Estimation, edited by S. Goldfeld and R.
  Quandt, 235-272. Cambridge: Ballinger.
Heckman, J. (1978a) “Dummy Exogenous Variables in a Simultaneous Equation System”,
  Econometrica,       46, 931-959.
Heckman, J. (1978b) “Simple Statistical Models for Discrete Panel Data Developed and Applied to
  Test the Hypothesis of the True State Dependence Against the Hypothesis of Spurious State
  Dependence”, Annals de I’lnsee, 30-31, 227-269.
Heckman, J. (1979) “Sample Selection Bias as a Specification Error”, Econometrica, 47, 153-161.
Heckman, J. (1981a) “Heterogeneity and State Dependence in Dynamic Models of Labor Supply”. In
  Conference on Low Income Labor Markets, edited by S. Rosen. University of Chicago Press.
Heckman, J. (1981b) “Statistical Models for the Analysis of Discrete Panel Data”. In Structural
  Ana!vsis of Discrete Data, edited by C. Manski and D. McFadden, pp. 114-178. Cambridge: MIT
  Press.
Heckman, J. (1981~) “The Incidental Parameters Problem and the Problem of Initial Conditions in
  Estimating a Discrete Stochastic Process and Some Monte Carlo Evidence on Their Practical
  Importance”. In Structural Analysis of Discrete Data, edited by C. Manski and D. McFadden, pp.
  179-185. Cambridge: MIT Press.
Heckman, J. and R. Willis (1975) “Estimation of a Stochastic Model of Reproduction: An Economet-
  ric Approach”. In Household Production and Consumption, edited by N. Terleckyj, pp. 99-138. New
  York: National Bureau of Economic Research.
Heckman, J. and R. Willis (1977) “A Beta Logistic Model for the Analysis of Sequential Labor Force
  Participation of Married Women”, Journal of Political Economy, 85, 27-58.
Heckman, J. and T. McCurdy (1980) “A Dynamic Model of Female Labor Supply”, Reuiew of
  Economtc     Studies,    47, 47-74.
Heckman, J. and B. Singer (1980) Longitudinal Labor Market Studies: Theory, Methods and Empirical
  Results. Social Science Research Council Monograph. New York: Academic.
Heckman, J. and T. McCurdy (1982) “New Methods for Estimating Labor Supply Functions: A
  Survey”, Research in Labor Economics, 4, 65-102.
Heckman, J. and B. Singer (1982) “The Identification Problem in Econometric Models for Duration
1452                                                                               D. L. McFadden

  Data”. Discussion Paper 82-6, N.O.R.C.
Henderson, J. and Y. Ioanmdes (1982) “Tenure Choice and the Demand for Housing”. Working
  Paper, Dept. of Economics, Boston Univ.
Hockerman. I., Prashker, J. and M. Ben-Akiva (1982) “Estimation and Use of Dynamic Transaction
  Models of Automobile Ownership”, Working Paper, Dept. of Civil Engineering, MIT.
Horowitz. J. (1979a) “Identification and Diagnosis of Snecilication Errors in the Multinomial Logit
  Model”. Mimeograph, Environmental Prot&tion Agency.
Horowitz, J. (1979b) “A Note on the Accuracy of the Clark Approximation for the Multinomial
  Probit Model”. Mimeograph, Department of Transportation, Massachusetts Institute of Technol-
  ogy.
Horowitz, J. (1980) “The Accuracy of the Multinomial Logit Model as an Approximation to the
  Multinomial Probit Model of Travel Demand”, Transportation Research (Part B).
Horowitz, J. (1981) “Sampling, Specification and Data Errors in Probabilistic Discrete Choice
  Models”. In Applied Discrete Choice Modeling, edited by D. Hensher and L. Johnson, 417-435.
  London: Croom Helm.
Horowitz, J. (1981a) “Statistical Comparison of Non-Nested, Discrete-Choice, Random-Utility Mod-
  els”. Working Paper, Environmental Protection Agency.
Horowitz, J. (1981b) “Testing the Multinomial Logit Model Against the Multinomial Probit Model
  Without Estimating the Probit Parameters”, Transportation Science, 15, 153-163.
Horowitz, J., J. Sparmonn, and C. Daganzo (1981) “An Investigation of the Accuracy of the Clark
  Approximation for the Multinomial Probit Model”. Working Paper, EPA.
Huber, P. (1965) “The Behavior of Maximum Likelihood Estimates Under Non-Standard Conditions”.
  Fifth Berkeley Symposium on Statistics and Probabili[v, 1, 221-233.
Hulett, J. R. (1973) “On the Use of Regression Analysis with a Qualitative Dependent Variable”.
  Public Finance Quarterly, 1, 339-344.
Ito, T. (1980) “Methods of Estimation for Multi-Market Disequilibrium Models”, Econometrica, 48,
  97-126.
Johnson, L. and D. Hensker (1981) “Application of Multinomial Probit to a Two-Period Panel Data
  Set”. Working Paper, Macquarie Univ.
Joreskog, K. and A. Goldberger (1975) “Estimation of a Model with Multiple Indicators and Multiple
  Causes of a Single Latent Variable Model”, Journal of the American Statistical Association, 70.
  631-639.
Judge, G., W. Griffiths, R. Hill, and T. Lee (1980) The Theory and Pracfice of Econometrics. New
  York: Wiley, p. 601ff.
Kiefer, N. (1978) “Discrete Parametre Variation: Efficient Estimation of a Switching Regression
  Model”, Econometrica, 46, 427-434.
Kiefer, N. (1980) “A Note on Switching Regressions and Discrimination”, Econometrica, 48.
  1065-1070.
Kiefer, N. M. (1979) “On the Value of Sample Separation Information”, Economerrica, 47, 997-1003.
Kiefer, N. and G. Neumann (1979) “An Empirical Job Search Model with a Test of the Constant
  Reservation Wage Hypothesis”, Journal of Political Economy, 87, 89-107.
King, M. (1980) “An Econometric Model of Tenure Choice and Demand for Housing as a Joint
  Decision”. Working Paper, Department of Economics, University of Birmingham.
Klecka, W. (1980;) Discriminant Analysis. Beverly Hills: Sage.
Knoke, D. and P. Burke (1980) Log-Linear Mode/s. Beverly Hills: Sage.
Kohn, M., C. Manski, and D. Mundel (1976) “An Empirical Investigation of Factors Influencing
  College Going Behavior”, Annals of Economic and Social Measurement, 5, 391-419.
Ladd, G. (1966) “Linear Probability Functions and Discriminant Functions”, Econometrica, 34.
  873-885.
Lave, C. (1970) “The Demand for Urban Mass Transit”, Review of Economics and Statistics, 52,
  320-323.
Lee, L. F. (1978) “Unionism and Wage Rates: A Simultaneous Equation Model with Qualitative and
  Limited Dependent Variables”, International Economic Review, 19,415-433.
Lee, L. F. (1979) “Identification and Estimation in Binary Choice Models with Limited (Censored)
  Dependent Variables”, Econometrica, 47, 977-996.
Lee, L. F. (1980) “Fully Recursive Probability Models and Multivariate Log-Linear Probability
  Models for the Analysis of Qualitative Data”, Discussion Paper 83-32, Univ. of Mass.
Ch. 24: Qualitative     Response Models                                                           1453

Lee, L. F. (1980a) “Specification Error in Multinomial Logit Models: Analysis of the Omitted
  Variable Bias”. Working Paper, Department of Economics, University of Minnesota.
Lee, L. F. (1980b) “Statistical Analysis of Econometric Models of Discrete Panel Data”. Working
  Paper, Department of Economics, University of Minnesota.
Lee. L. F. (1981a) “Estimation of Some Non-Normal Limited Dependent Variable Models”. Discus-
  sion Paper, No: 43, Center for Econometrics and Decision Sciences, Univ. of Florida.
Lee. L. F. (1981b) “Simultaneous Eauations Models with Discrete and Censored Variables”. In
  StructuralAnaIysis of Discrete Data, edited C. Manski and D. McFadden, 346-364. Cambridge MIT
  Press.
Lee, L. F. (1981~) “A Specification Test for Normality Assumption for the Truncated and Censored
  Tobit Models”. Discussion Paper No. 44, Center for Econometrics and Decision Sciences”, Univ. of
  Florida.
Lee, L. F., G. S. Maddala, and R. P. Trost (1979) “Testing for Structural Change by D-Methods in
  Switching Simultaneous Equation Models”. Proceedings of the American Statistical Association,
  forthcoming.
Lee, L. F. and R. P. Trost (1978) “Estimation of Some Limited Dependent Variable Models with
  Applications to Housing Demand”, Journal of Econometrics, 8, 357-382.
Lee, L. F., G. Maddala, and R. Trost (1980) “Asymptotic Covariance Matrices of Two-Stage Probit
  and Two-Stage Tobit Methods for Simultaneous Equations Models with Selectivity”, Econometrica,
  48,491-W.
Lerman, S. R. (1977) “Location, Housing, Automobile Ownership and Model to Work: A Joint
  Choice Model”. Transportation Research Board Record, No. 610, Washington, D.C.
Lerman, S. and C. Manski (1980) “Information Diffusion in Discrete Choice Contexts”. Presented to
  CEME Conference on Discrete Econometrics.
Lerman, S. and C. Manski (1981) “On the Use of Simulated Frequencies to Approximate Choice
  Probabilities”. In Structural Analysis of Discrete Data, edited by C. Manski and D. McFadden,
  305-319. Cambridge: MIT Press.
Li, M. (1917) “A Logit Model of Home Ownership”, Econometrica, 45, 1081-1097.
Little, R. E. (1968) “A Note on Estimation for Quantal Response Data”, Biometrika 55, 578-579.
Loikkanen, H. (1982) “A Logit Model of Intra-Urban Mobility”. Discussion Paper 22, Labour
   Institute for Economic Research, Helsinki.
Lute, R. D. (1959) Individual Choice Behavior: A Theoretical Analysis. New York: Wiley.
Lute, R. D. (1977) “The Choice Axiom After Twenty Years”, Journal of Mathematical Psychology, 15,
  215-233.
Lute, R. D. and P. Suppes (1965) “Preference, Utility, and Subjective Probability”. In Handbook of
  Psychology III, edited by R. Lute, R. Bush, and E. Galanter, 249-410. New York: Wiley.
Maddala, G. S. (1977a) “Self-Selectivity Problem in Econometric Models”. In Applications             of
  Statistics, edited by K. Krishniah. Amsterdam: North-Holland.
Maddala. G. S. (1977b) “Identification and Estimation Problems in Limited Denendent Variable
  Models”. In Natural Resources, Uncertainty and General Eauilibrium Svstems: Es&s in Memory of
  Rafael Lusky, edited by A. S. Blinder and-P. Friedman, 423-450. New York: Academic.                 .
Maddala. G. S. (1978) “Selectivitv Problems in Longitudinal Data”. Annals de I’lnsee. 30-I. 423-450.
Maddala, G. S.‘ (1982) Limited.Dependent     and Q”&itative  Variables in Econometrics.   New York:
  Cambridge Univ. Press.
Maddala, G. S. and L. F. Lee (1976) “Recursive Models with Qualitative Endogenous Variables”,
  Annals     of Economic    and Social Measurement,   5, 525-545.
Maddala, G. and F. Nelson (1974) “Maximum Likelihood Methods for Markets in Disequilibrium”,
  Econometrica,       42, 1013-1030.
Maddala, G. S. and F. D. Nelson (1975) “Switching Regression Models with Exogenous and
 Endogenous Switching”. Proceedings of the American Statistical Association (Business and Econom-
 ics Section), 423-426.
Maddala, G. S. and R. Trost (1978) “Estimation of Some Limited Denendent Variable Models with
 Application to Housing Demand;‘, Journal of Econometrics, 8, 357-382.
Maddala, G. S. and R. Trost (1980) “Asymptotic Covariance Matrices of Two-Stage Probit and
 Two-Stage Tobit Methods for Simultaneous Equations Models with Selectivity”, Econometrica, 48,
  491-503.
Malhotra, N. (1982) “A Comparison of the Predictive Validity of Procedures for Analyzing Binary
1454                                                                                  D. L. McFadden

   Data”. Working Paper, Georgia Institute of Technology.
Mar&, C. (1975) “Maximum Score Estimation of the Stochastic Utility Model of Choice”, Journal of
   Econometrics, 3, 205-228.
Manski, C. (1977) “The Structure of Random Utility Models”, Theory and Decision, 8, 229-254.
Ma~~ki,   C. (1981) “Closest Empirical Distribution Estimation”. Working Paper, Hebrew Univ.
Manski, C. (1981a) “Structural Models for Discrete Data“. Sociological Methodology, pp. 58-109.
Manski, C. (1982) “Analysis of Equilibrium Automobile Holdings in Israel with Aggregate Discrete
   Choice Models”. Discussion Paper 82.06, Falk Institute.
Manski, C. and S. Lerman (1977) “The Estimation c/f Choice Probabilities from Choice-Based
   Samples”, Econometrica, 45, 1977-1988.
Manski, C. and D. McFadden (1981) “Altemtative Estimates and Sample Designs for Discrete Choice
   Analysis”. In Structural Analysis of Discrete Data, edited by C. Manski and D. McFadden, pp.
   2-50. Cambridge: MIT Press.
Mardia, V. (1970) Families oj Biuariate Distributions. Cormecticut: Hafner.
Marschak, J. (1960) “Binary-Choice Constraints and Random Utility Indicators”. In Mathematical
   Methods in the Social Sciences, edited by K. Arrow, S. Karlin, and P. Suppes, pp. 312-329. Stanford
   University Press.
McFadden, D. (1973) “Conditional Logit Analysis of Qualitative Choice Behavior”. In Frontiers in
   Econometrics, edited by P. Zarembka, pp. 105-142. New York: Academic.
McFadden, D. (1974) “The Measurement of Urban Travel Demand”, Journal of Public Economics, 3,
   303-328.
McFadden, D. (1976a) “A Comment on Discriminant Analysis ‘Versus’ Logit Analysis”, Anna/s of
  Economics   and Social Measurement,   5, 511-523.
McFadden,     D. (1976b) “Quantal Choice Analysis: A Survey”, Annals        of Economic    and   Social
  Measurement,   5, 363-390.
McFadden, D. (1976~) “The Revealed Preferences of a Public Bureaucracy”, Bell Journal, 7, 55-72.
McFadden, D. (1978a) “Cost, Revenue, and Profit Functions, and the Generalized Linear Profit
  Function”. In Production of Economics, edited by M. Fuss and D. McFadden, 3-110. Amsterdam:
  North-Holland.
McFadden, D. (1978b) “Modelling the Choice of Residential Location”. In Spatial Interaction Theoty
  and Residential Location, edited by A. Karlquist et al., 75-96. Amsterdam: North-Holland.
McFadden, D. (1979a) “Econometric Net Supply Systems for Firms with Continuous and Discrete
  Commodities”. Working Paper, Department of Economics, Massachusetts Institute of Technology.
McFadden, D. (1979b) “Quantitative Methods for Analysing Travel Behavior of Individuals”.
  Behavioral Trace/ Modeling, edited by D. Hensher and P. Stopher, 279-318. London: Croom Helm.
McFadden, D. (1979~) “Econometric Analysis of Discrete Data”. Fisher-Schultz Lecture, Economet-
  ric Society, Athens.
McFadden, (1981) “Econometric Models of Probabilistic Choice”. In Structural Analysis of Discrete
  Data, edited by C. Manski and D. McFadden, pp. 198-272. Cambridge: MIT Press.
McFadden, D., C. Puig, and D. Kirschner (1977) “Determinants of the Long-Run Demand for
  Electricity”. Proceedings of the American Statistical Association, Business and Economics Section,
  Vol. 1.
McFadden, D. and F. Reid (1975) “Aggregate Travel Demand Forecasting from Disaggregated
  Behavioral Models”. Transportation Research Board Record, 534, 24-37, Washington, D.C.
McFadden, D., A. Talvitie et al. (1977) “Demand Model Estimation and Validation”. Final Report
  Series, Vol. 5. Urban Travel Demand Forecasting Project, Institute of Transportation Studies,
  University of California, Berkeley.
McFadden, C., W. Tye, and K. Train (1976) “An Application of Diagnostic Tests for the Indepen-
  dence from Irrelevant Alternatives Property of the Multinomial Logit Model”. Transportation
  Research Board Record No. 637, pp. 39-45, Washington, D.C.
McKelvcy, R. and W. Zovoina (1975) “A Statistical Model for the Analysis of Ordinal Level
 Dependent Variables”, Journal of Mathematical Sociology, 4, 103-120.
Miller, L. and R. Radner (1970) “Demand and Supply in U.S. Higher Education”, American Economic
  Reciew, 60, 326-334.
Mitchell. 0. and G. Fields (1982) “The Effects of Changing the Budget Constraint: Parametric and
 Non-Parametric Approaches to Retirement Decisions”. Working Paper, Cornell Univ.
Ch. 24: Qualitative      Response Models                                                            1455

Moore, D. H. (1973) “Evaluation of Five Discrimination Procedures for Binary Variables”, Journal       of
  the American      Statistical    Association,   68, 399-404.
Morimune. K. (1970) “Comoarisons of Normal and Logistic Models in the Bivariate Dichotomous
 Analysis”, Econometrica, 47, 957-975.
Moses, L., R. Beals, and M. Levy (1967) “Rationality and Migration in Ghana”, Review of Economics
  and Statistics,     49, 480-486.
Mosteller, F. (1968) “Association and Estimation in Contingency Tables”, Journal        of the American
  Statistical   Association,      63, l-28.
Nelson, F. (1977) “Censored Regression Models with Unobserved Stochastic Censoring Thresholds”,
  Econometrica,       6, 309-327.
Nelson, F. and L. Olsen (1978) “Specification and Estimation of a Simultaneous Equation Model with
  Limited Variables”. International   Economic Review, 19. 685-710.
Nerlove, M. (1978) “Econometric Analysis of Longitudinal Data: Approaches, Problems and Pros-
  pects, The Econometrics of Panel Data”, Annals de i’lnsee, 30:1, 7-22.
Nerlove, M. and J. Press (1973) “Univariable and Multivariable Log-Linear and Logistic Models”.
  RAND report No. R-1306-EDA/NIH.
Nerlove, M. and J. Press (1976) “Multivariate and Log Linear Probability Models for the Analysis of
  Qualitative Data”. Discussion Paper, Department of Economics, Northwestern University.
Newey, W. (1982) “Generalized Method of Moments Specification Testing”. Working Paper, Dept. of
  Economics, MIT.
Nickell, S. (1979) “Estimating the Probability of Leaving Employment”, Econometrica, 47,1249-1266.
Oliveira, J. T., de (1958) “External Distributions”. Revista de Faculdada du Ciencia, Lisboa (Serie A) 7,
  215-227.
Olsen, R. (1978a) “Comment on ‘The Effect of Unions of Earnings and Earnings on Unions: A
   Mixed Logit Approach”‘, International     Economic Review, 19, 259-261.
Olsen, R. (1978b) “Tests for the Presence of Selectivity Bias and Their Relation to Specifications of
   Functional Form and Error Distribution”. Working Paper No. 812, revised, Yale University.
Olsen, R. (1980a) “A Least Squares Correction for Selectivity Bias”, Econometrica, 48, 1815-1820.
Olsen, R. (1980b) “Distributional Tests for Selectivity Bias and a More Robust Likelihood Estimator”.
   Working Paper, Institute for Social and Policy Studies, Yale University.
Olsen, R. (198Oc) “Estimating the Effect of Child Mortality on the Number of Births”. Economic
   Growth Center, Yale University.
Palepu, (1982) A Stochastic Model of Acquisitions. Ph.D. thesis, Sloan School of Management, MIT.
Plackett, R. L. (1974) The Analysis of Categorical Data. London: Charles Griffin.
Poirier, D. J. (1977) “The Determinants of Home Buying” in The New Jersey Income-Maintenance
   Experiment”.   In Vol. II, Expenditures, Health and Social Behavior, and the Quality of the Evidence,
   edited by H. W. Watts and A. Rees, pp. 73-91. New York: Academic.
Poirier, D. J. (1978) “A Switching Simultaneous Equation Model of Physician Behavior in Ontario”.
   In Structural Analysis of Discrete Data: with Econometric Applications, edited by D. McFadden and
   W. Manski, pp. 392-421. Cambridge: MIT Press.
Poirier, D. J. and P. Ruud (1980) “On the Appropriateness of Endogenous Switching”, J. Economet-
   rics, forthcoming.
Poirier, D. J. and P. Ruud (1981) “Conditional Minimum Distance Estimation and Autocorrelation in
   Limited Dependent Variable Models”. Working paper, Univ. of Toronto.
Pollakowski, H. (1974) “The Effects of Local Public Service on Residential Location Decision: An
   Empirical Study of the San Francisco Bay Area”. Ph.D. Dissertation, Department of Economics,
   University of California, Berkeley.
Pollakowski, H. (1980) Residential Location and Urban Housing Markets. Lexington, Mass.: D.C.
   Heath.
Poterba, J. and L. Summers (1982) “Unemployment Benefits, Labor Market Transitions, and Spurious
   Flows: A Multinomial Logit Model with Errors in Classification”, Working Paper, MIT.
Powell, J. (1982) “Least Absolute Deviations Estimation for Censored and Truncated Regression
  Models”. Ph.D. thesis, Department of Economics, Stanford Univ.
Pratt, J. (1977) “Concavity of the Log Likelihood of a Model of Ordinal Categorical Regression”.
  Working Paner. Harvard Univ.
Press, J. and S. Wilson (1978) “Choosing Between Logistic Regression and Discriminant Analysis”,
  JASA,    73,699-705.
1456                                                                                   LI L. McFadden

Quandt, R. E. (1956) “Probabilistic Theory of Consumer Behavior”, Quarterly    Journal    of Economics,
  70,507-536.
Quandt, R. E. (1968) “Estimation of Model Splits”, Transportation Research, 2, 41-50.
Quandt, R. E. (1970) The Demand for Traoel. London: D.C. Heath.
Quandt, R. E. (1972) “A New Approach to Estimating Switching Regressions”, Journal                of the
  American      Statistical   Association,   67, 306-310.
Quandt, R. E. (1978) “Test of the Equilibrium vs Disequilibrium Hypothesis”,   International   Economic
  Reuiew, 19,435-452.
Quandt, R. E. (1981) “Econometric Disequilibrium Models”. Working Paper, Princeton Univ.
Quandt, R. E. (1982) “A Bibliography of Quantity Rationing and Disequilibrium Models”, Working
  Paper, Princeton Univ.
Quandt, R. E. and W. Baumol (1966) “The Demand for Abstract Travel Modes: Theory and
  Measurement”, Journal of Regional Science, 6, 13-26.
Quandt, R. E. and J. Ramsey (1978) “Estimating Mixtures of Normal Distributions and Switching
  Regressions”, Journal of the American Statistical Association, 71, 730-752.
Quigley, J. (1976) “Housing Demand in the Short-Run: An Analysis of Polytomous Choice”,
  Explorations      in Economic     Research,   3, 76-102.
Radner, R. and L. Miller (1975) Demand and Supply in U.S. Higher Education. New York:
  McGraw-Hill.
Rao, C. R. (1973) Linear Statistical Inference and Its Applications. New York: Wiley.
Richards. M. G. and M. Ben-Akiva (1974) “A Simultaneous Destination and Mode Choice Model for
  Shopping Trips”, Transportation,   3, 343-356.
Robinson, P. (1982) “On the Asymptotic Properties of Estimators of Models Containing Limited
  Dependent Variables”, Econometrica, 50, 27-41.
Rosen, H. and K. Small (1979) “Applied Welfare Economics with Discrete Choice Models”. Working
  Paper 319, National Bureau of Economic Research.
Rothenberg, T. (1982) “Approximating the Distributions of Econometric Estimators and Test
  Statistics”, manuscript, Univ. of California, Berkeley.
Ruud, P. (1982) “A Score Test of Consistency”. Working Paper, Dept. of Economics, Univ. of
  California, Berkeley.
Sattath, S. and A. Tversky (1977) “Additive Similarity Trees”, Psychometrika, 42, 319-345.
Schultz, T. P. (1975) “The Determinants of Internal Migration in Venezuela: An Application of the
  Polytomous Logistic Model”. Presented at the Thud World Congress of the Econometric Society,
  Toronto, Canada.
Sickles, R. C. and P. Schmidt (1978) “Simultaneous Equation Models with Truncated Dependent
  Variables: A Simultaneous Tobit Model”, Journal of Economics and Business, 31, 11-21.
Sjoberg, L. (1977) “Choice Frequency and Similarity”, Scandinavian Journal of Psychology, 18,
  103-115.
Small, K. (1981) “Ordered Logit: A Discrete Choice Model with Proximate Covariance Among
  Alternatives”. Working Paper, Department of Economics, Princeton Univ.
Smith, K., Savin, N. and J. Robertson (1982) “A Monte Carlo Study of Maximum Likelihood and
  Minimum Cm-Square Estimators in Logit Analysis”. Working Paper, USDA, Forest Service, Pacific
  Southwest Forest and Range Experiment Station.
Spilerman, S. (1972) “Extensions of the Mover-Stayer Model”, American Journal of Sociology, 78,
  599-626.
Stewman, S. (1976) “Markov Models of Occupational Mobility: Theoretical Development and
  Empirical Support”, Journal of Mathematical Sociology, 4, 201-245.
Swartz, C. (1976) “Screening in the Labor Market: A Case Study”. Ph.D. dissertation, University of
  Wisconsin, Madison.
Tachibanaki, T. (1981) Education, Occupation, Hierarchy, and Earnings: A Recursive Logit Approach
   for Japan”. Research paper, Stanford Univ.
Talvities, A. (1972) “Comparison of Probabilistic Modal-Choice Models; Estimation Methods and
  System Inputs”. Highway Research Board Record 392, pp. 111-120.
Theil, H. (1969) “A Multinomial Extension of the Linear Logit Model”, Internutional      Economic
  Review, 10, 251-259.
Ch. 24: Qualitative Response Models                                                              1457

The& H. (1970) “On the Estimation of Relationships         Involving Qualitative Variables”, American
  Journal of Sociology, 76, 103-154.
Thurstone, L. (1927) “A Law of Comparative Judgement”, Psychological Review. 34, 273-286.
Tobin, .I. (1958) “Estimation of Relationships for Limited Dependent Variables”, Econometrica. 26.
  24-36.
Train, K. (1978) “A Validation Test of a Disaggregate Mode Choice Model”, Transportation Research,
  12,167-174.
Train, K., and D. McFadden (1978) “The Goods/Leisure Tradeoff and Disaggregate Work Trip
  Mode Choice Models”, Transportation Research, 12, 349-353.
Train, K. and M. Lohrer (1982) “Vehicle Ownership and Usage: An Integrated System of Disaggre-
  gate Demand Models”. Final Report, Cambridge Systematics.
Trost, R. and L. Lee (1982) “Technical Training and Earnings: A Polychotomous Choice Model with
  Selectivity”. Working Paper, Dept. of Economics, Univ. of Florida.
Tversky, A. (1972a) “Choice by Elimination”, Journal of Mathematical Psychology, 9, 341-367.
Tversky, A. (1972b) “Elimination by Aspects: A Theory of Choice”, Psychological Review, 79.
  281-299.
Tversky, A. and S. Sattath (1979) “Preference Trees”, Psychology Review, 86, 542-573.
Vuong, Q, (1982) “Probability Feedback in a Recursive System of Logit Models: Estimation”.
  Working Paper, California Institute of Technology.
Walker, S.-and-D. Duncan (1967) “Estimation of the Probability of an Event as a Function of Several
  Indenendent Variables”, Biometrika. 54. 167-179.
Warner, S. (1962) Stochastic Choice of Mode in Urban Travel. Evanston: North-Western University
  Press.
Warner, S. L. (1963) “Multivariate Regression of Dummy Variates under Normality Assumptions”,
  Journal of the American Statistical Association, 58, 1054-1063.
Westin, R. B. (1974) “Predictions from Binary Choice Models”, Journal of Econometrics, 2, 1-16.
Westin, R. B. and D. W. Gillen (1978) “Parking Location and Transit Demand: A Case Study of
 Endogenous Attributes in Disaggregate Mode Choice Functions”, Journal of Econometrics, 8.
  75-101.
Williams, H. (1977) “On the Formation of Travel Demand Models and Economic Evaluation
 Measures of User Benefit”, Environment Planning, A9, 285-344.
Willis, R. and S. Rosen (1979) “Education and Self-Selection”, Journal of Polirical Economy, 87.
  507-536.
Winston, C. (1981) “A Disaggregate Model of the Demand for Intercity Freight Transport”,
  Economefrica, 49, 981-1006.
Yatchew, A. (1980) Design of Econometric Choice Mode/s. Ph.D. Thesis, Harvard Univ.
Yellot, J. (1977) “The Relationship Between Lute’s Choice Axiom, Thurstone’s Theory of Compara-
  tive Judgement, and the Double Exponential Distribution”, Journal of Mathematical Ps.vcholog-r,15,
  109-144.
Zellner, A. and T. Lee (1965) “Joint Estimation of Relationships Involving Discrete Random
  Variables”, Econometrica, 33, 382-394.



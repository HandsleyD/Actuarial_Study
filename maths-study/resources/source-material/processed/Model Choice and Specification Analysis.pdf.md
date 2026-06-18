---
normalized_id: shared-pdf-reference-model-choice-and-specification-analysis
exam_code: SHARED
material_scope: model choice and specification analysis.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Model Choice and Specification Analysis.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-model-choice-and-specification-analysis

Chapter 5


MODEL CHOICE AND SPECIFICATION                                                  ANALYSIS
EDWARD       E. LEAMER*

University of California, Los Angeles




Contents

1. Introduction                                                                                          286
2. Model selection with prior distributions                                                              288
     2. I.   Hypothesis       testing searches                                                           289
     2.2.    Interpretive      searches                                                                  296
3.   Model selection with loss functions                                                                 304
     3.1.    Model selection with quadratic         loss                                                 306
     3.2.    Simplification      searches:   Model selection with fixed costs                            311
     3.3.    Ridge regression                                                                            313
     3.4.    Inadmissibility                                                                             313
4.   Proxy searches: Model selection with measurement errors                                             314
5.   Model selection without a true model                                                                315
6.   Data-instigated models                                                                              317
7.   Miscellaneous topics                                                                                320
     7. I.   Stepwise regression                                                                         320
     7.2.    Cross-validation                                                                            320
     7.3.    Goodness-of-fit       tests                                                                 324
8.  Conclusion                                                                                           325
References                                                                                               325




   *Helpful comments from David Belsley, Zvi Griliches, Michael Intriligator,        and Peter Schmidt   are
gratefully acknowledged. Work was supported by NSF grant SOC78-09477.


Handbook of Econometrics, Volume I, Edited by Z. Griliches and M.D. Intriligator
0 North-Holland Publishing Company, I983
286                                                                    E. E. Learner




1.    Introduction

The data banks of the National Bureau of Economic Research contain time-series
data on 2000 macroeconomic variables. Even if observations were available since
the birth of Christ, the degrees of freedom in a model explaining gross national
product in terms of all these variables would not turn positive for another two
decades. If annual observations were restricted to the 30-year period from 1950 to
1979, the degrees of freedom deficit would be 1970. A researcher who sought to
sublimate the harsh reality of the degrees of freedom deficit and who restricted
himself to exactly five explanatory variables could select from a menu of

              = 2.65 x lOI

equations to be estimated, which, at the cost of ten cents per regression, would
consume a research budget of twenty-six trillion dollars.
   What is going on? Although it is safe to say that economists have not tried
anything like lOi regressions to explain GNP, I rather think a reasonably large
number like 1000 is likely an underestimate. Does this make any sense at all? Can
our profession use data to make progress? The answer is not necessarily “yes”.
But what does seem clear is that until the complex phenomenon of specification
searches is well understood, the answer to this question cannot unambiguously be
in the affirmative.
   This chapter contains a summary of the statistical theories of model selection.
Sections 2 and 3 include most of the traditional model selection problems. Section
2 deals with alternative models which spring from a priori judgment. It is
maintained that a constrained model might be either “true” or “approximately
true”. Classical hypotheses testing is discussed, as well as Bayesian treatments
with complete And incomplete prior distributions. Subsections deal also with
measuring the “multicollinearity problem” and with inference given zero degrees
of freedom. Models in Section 3 arise not from the judgment of the investigator as
in Section 2, but from his purpose, which is measured by a formal loss function.
Quadratic loss functions are considered, both with and without fixed costs. A
brief comment is made about “ridge regression”. The main conclusion of Section
3 is that quadratic loss does not imply a model selection problem.
   Sections 4, 5, and 6 discuss problems which are not as well known. The
problem of selecting the best proxy variable is treated in Section 4. Akaike’s
Information Criterion is discussed in Section 5, although it is pointed out that,
except for subtle conceptual differences, his problem reduces to estimation with
quadratic loss. Section 6 deals with methods for discounting evidence when
Ch. 5: Model Choice                                                             281

models are discovered after having previewed the data. Finally, Section 7 contains
material on “stepwise regression”, “cross-validation”, and “goodness-of-fit” tests.
  A uniform notation is used in this chapter. The T observations of the depen-
dent variable are collected in the T x 1 vector Y, and the T observations of a
potential set of k explanatory variables are collected in the T X k matrix X. The
hypothesis that the vector Y is normally distributed with mean X,8 and variance
matrix a21 will be indicated by H:

     H: Y-     N(X&a21).

A subset of explanatory variables will be denoted by the T X kJ matrix X,, where
J is a subset of the first k integers,
                                  each integer selecting an included variable. The
excluded variables will be indexed by the set 5, and the hypothesis that the
variables in 5 have no effect is

     H,: Y -    N( X,&, ~~1).

The least-squares estimate of /3 is a solution to the normal equations X’Xb = X’Y.
Except where indicated, X’X is assumed to be invertible:

     b = (xx)_‘X’Y.                                                          0.1)
The corresponding residual operator and residual sum-of-squares are


       M=I-X(xX)-‘X’,                                                        (l-2)
     ESS=(Y-Xb)'(Y-Xb)=YwY.                                                  (1.3)
The same three concepts for the restricted model are


         /$ = (x;xJ'XjY,                                                     0.4)
       M,=I-x,(x;xJ)-lx;,                                                    (1.5)
     ESS, = (Y - Xa,)‘( Y -      if/$) = y’M,y.                              (1.6)

The reduction in the error sum-of-squares which results when the variables 7 are
added to the model J is

     ESS, - ESS = b;X+M-JXjbj.
                                                                             E. E. Learner


2.   Model selection with prior distributions

One very important source of model selection problems is the existence of a priori
opinion that constraints are “likely”. Statistical testing is then designed either to
determine if a set of constraints is “ true” or to determine if a set of constraints is
“approximately true”. The solutions to these two problems, which might be
supposed to be essentially the same, in fact diverge in two important respects. (1)
The first problem leads clearly to a significance level which is a decreasing
function of sample size, whereas the second problem selects a relatively constant
significance level. (2) The first problem has a set of alternative models which is
determined entirely from a priori knowledge, whereas the second problem can
have a data-dependent set of hypotheses.
    The problem of testing to see if constraints are “true” is discussed in Section
2.1 under the heading “hypothesis testing searches”, and the problem of testing to
see if constraints are “approximately true” is discussed in Section 2.2 under the
heading “interpretive searches”.
    Before proceeding it may be useful to reveal my opinion that “hypothesis
 testing searches” are very rare, if they exist at all. An hypothesis testing search
occurs when the subjective prior probability distribution allocates positive proba-
bility to a restriction. For example, when estimating a simple consumption
 function which relates consumption linearly to income and an interest rate, many
economists would treat the interest rate variable as doubtful. The method by
which this opinion is injected into a data analysis is usually a formal test of the
hypothesis that the interest rate coefficient is zero. If the t-statistic on this
coefficient is sufficiently high, the interest rate variable is retained; otherwise it is
omitted. The opinion on which this procedure rests could be characterized by a
 subjective prior probability distribution which allocates positive probability to the
hypothesis that the interest-rate coefficient is exactly zero. A Bayesian analysis
would then determine if this atom of probability becomes larger or smaller when
the data evidence is conditioned upon. But the same statistical procedure could be
justified by a continuous prior distribution which, although concentrating mass in
 the neighborhood of zero, allocates zero probability to the origin. In that event,
 the posterior as well as the prior probability of the sharp hypothesis is zero.
    Although the subjective logic of Bayesian inference allows for any kind of prior
distribution, I can say that I know of no case in economics when I would assign
positive probability to a point (or, more accurately, to a zero volume subset in the
interior of the parameter space). Even cooked-up examples can be questioned.
What is your prior probability that the coin in my pocket produces when flipped
a binomial sequence with probability precisely equal to 0.5? Even if the binomial
assumption is accepted, I doubt that a physical event could lead to a probability
precisely equal to 0.5. In the case of the interest-rate coefficient described above,
ask yourself what chance a 95 percent confidence interval has of covering zero if
Ch. 5: Model Choice                                                              289


the sample size is enormous (and the confidence interval tiny). If you say
infinitesimal, then you have assigned at most an infinitesimal prior probability to
the sharp hypothesis, and you should be doing data-interpretation, not hypothesis
testing.


2.1.   Hypothesis testing searches

This subsection deals with the testing of a set of M alternative hypotheses of the
formRi/3=0,      i=l,..., M. It is assumed that the hypotheses have truth value in
the sense that the prior probability is non-zero, P(R,/I = 0) > 0. Familiarity with
the concepts of significance level and power is assumed and the discussion focuses
first on the issue of how to select the significance level when the hypotheses have
a simple structure. The clear conclusion is that the significance level should be a
decreasing function of sample size.
   Neyman and Pearson (1928) are credited with the notion of a power function
of a test and, by implication, the need to consider specific alternative models
when testing an hypothesis. The study of power functions is, unfortunately,
limited in value, since although it can rule in favor of uniformly most powerful
tests with given significance levels, it cannot select between two tests with
different significance levels. Neyman’s (1958) advice notwithstanding, in practice
most researchers set the significance level equal to 0.05 or to 0.01, or they use
these numbers to judge the size of a P-value. The step from goodness-of-fit
testing, which considers only significance levels, to classical hypothesis testing,
which includes in principle a study of power functions, is thereby rendered small.
   The Bayesian solution to the hypothesis testing problem is provided by Jeffreys
(1961). The posterior odds in favor of the “null” hypothesis HO versus an
“alternative” H, given the data Y is


       w%IY)
       P(fW’)
In words, the posterior odds ratio is the prior odds ratio times the “Bayes factor”,
B(Y) = P( YIH,)/P(YjH,).      This Bayes factor is the usual likelihood ratio for
testing if the data were more likely to come from the distribution P( Y 1H,,) than
from the distribution P( Y 1H,). If there were a loss function, a Bayesian would
select the hypothesis that yields lowest expected loss, but without a loss function
it is appropriate to ask only if the data favor H,, relative to H,. Since a Bayes
factor in excess of one favors the null hypothesis, the inequality B(Y) Q 1
implicitly defines the region of rejection of the null hypothesis and thereby selects
the significance level and the power. Equivalently, the loss function can be taken
290                                                                        E. E. Learner


to penalize an error by an amount independent of what the error is, and the prior
probabilities can be assumed to be equal.
   In order to contrast Jeffreys’ solution from Neyman and Pearson’s solution,
consider testing the null hypothesis that the mean of a sample of size n, r,, is
distributed normally with mean 0 and variance K’ versus the alternative that r,
is normal with mean pa and variance n-‘, where pL,> 0. Classical hypothesis
testing at the 0.05 level of significance rejects the null hypothesis if Y, > 1.6~ ‘12,
whereas the Bayes rejection region defined by B(Y) G 1 is y, z pa/2. The
classical rejection region does not depend on pa, and, somewhat surprisingly, the
treatment of the data does not depend on whether pa = 1 or pa = IO”. Also, as
sample size grows, the classical rejection region gets smaller and smaller, whereas
the Bayesian rejection region is constant. Thus, the classical significance level is
fixed at 0.05 and the power P(Yn < 1.6~“~ 1~ = pL,) goes to one as the sample
size grows. The Bayes rule, in contrast, has the probabilities of type one and type
two errors equal for all sample sizes P(Yn > p,/2(~ = O)/P(yn < ~,/21~ = pa) = 1.
The choice between these two treatments is ultimately a matter of personal
preference; as for myself, I much prefer Jeffreys’ solution. The only sensible
alternative is a minimax rule, which in this case is the same as the Bayes rule.
Minimax rules, such as those proposed by Arrow (1960), generally also have the
significance level a decreasing function of sample size.
   Jeffreys’ Bayesian logic is not so compelling for the testing of composite
hypotheses because a prior distribution is required to define the “predictive
distribution”, P(YIH,), because prior distributions are usually difficult to select,
and because the Bayesian answer in this case is very sensitive to the choice of a
prior. Suppose, for example, that the null hypothesis Ho is that the mean of a
sample of size n, yn, is distributed normally with mean 0 and variance n-‘. Take
the alternative H, to be that y, is normally distributed with unknown mean ~1and
variance n-‘. In order to form the predictive distribution P(YnlH,) it is necessary
to assume a prior distribution for p, say normal with mean m* and variance
(n*)-‘. Then the marginal distribution P(y,lH,) is also normal with mean m* and
variance (n*)-’ +(n)- ‘. The Bayes factor in favor of Ho relative to H, therefore
becomes

      MJ = p(Y,I~oPmf4)
         = [n*(n+n*)-‘]-“2          exp{--*<2n}/exp{-f(Y,-m*)2

               x (n-‘+n*-I)_‘}

            = [n*(n+n*)-1]-1’2exp{-&(n2~+2nn*%z*-nn*m*2)

               /(n + n*>>,                                                        (2.1)
Ch. 5: Model Choice                                                                 291

and the corresponding region of rejection defined by B G 1 is

     (n+n*)_‘(n*Y*+2nn*%*-nn*m**)+logn*(n+n*)-’>,O.                              (2.2)

   It should be observed that the region of rejection is not one-sided if m* * 0 and
n* < cc. Furthermore, both the Bayes factor and the region of rejection depend
importantly on the prior parameters n* and m*. If, for example, the prior is
located at the origin, m* = 0, then given the data r,, the Bayes factor B(y”; n*)
varies from infinity if n* = 0 to one as n* approaches infinity. The minimum
value, B(F,; n*) = (nr*)‘/‘exp{ -(nr* - 1)/2}, is attained at n* = n/(nr2 - 1) if
ny2 - 1 is positive. Otherwise B(Y,; n*) is strictly greater than one. The region of
rejection varies from the whole line to the region P* 2 n- ‘. This Bayesian logic
for selecting the significance level of a test is therefore hardly useful at all if you
have much trouble selecting your prior distribution.
   The Bayesian logic is very useful, however, in emphasizing the fact that the
significance level should be a decreasing function of sample size. As the sample
size grows, the Bayes factor becomes

      .lkrnWB(Y,) = (n/n*)“‘exp{     - ir*n},

with corresponding region of rejection nr2 > f log n/n*. This contrasts with the
usual classical region of rejection ny* > c, where c is a constant independent of
sample size chosen such that P( nu2 > c(p = 0) = 0.05. The important point which
needs to be made is that two researchers who study the same or similar problems
but who use samples with different sample sizes should use the same significance
level only if they have different prior distributions. In order to maintain compara-
bility, it is necessary for each to report results based on the same prior. Jeffreys,
for example, proposes a particular “diffuse” prior which leads to the critical
t-values reported in Table 2.1, together with some of my own built on a somewhat
different limiting argument. It seems to me better to use a table such as this built
on a somewhat arbitrary prior distribution than to use an arbitrarily selected
significance level, since in the former case at least you know what you are doing.
Incidentally, it is surprising to me that the t-values in this table increment so
slowly.
   Various Bayes factors for the linear regression model are reported in Zellner
(197 l), Lempers (1971), Gaver and Geisel (1974), and in Learner (1978). The
Bayes factor in favor of model J relative to model J* is P(YIH,)/P(YIH,.).         A
marginal likelihood of model J is given by the following result.
Theorem I (Marginal likelihood)
Suppose that the observable (T x 1) vector Y has mean vector X,& and variance
matrix hJ ‘ITT,where X, is a T x k, observable matrix of explanatory variables, &
Ch. 5: Model Choice                                                                                293


where cJ is a constant depending on the precise choice of prior distribution.’
Learner (1978) argues somewhat unconvincingly that the term c, can be treated as
if it were the same for all models. This leads to the model selection criterion
appropriate for one form of diffuse prior:

      max Tpk,12 (ESS’) - T’2,                                                                   (2.4)
        J


which is actually the formula used to produce my critical f-values in Table 2.1.
Schwarz (1978) also proposes criterion (2.4) and uses the same logic to produce it.

    This Bayesian treatment of hypothesis testing generalizes straightforwardly to
all other settings, at least conceptually. The ith composite hypothesis Y - fi( Yl6’,),
di E Oi, is mixed into the point hypothesis Y - fi(Y) = /fi(Yltii)fi(0i)d8i,      where
fj (8,) is the prior distribution. The Bayes factor in favor of hypothesis i relative to
hypothesis j is simply fi( Y )/fj( Y ). Numerical difficulties can arise if computa-
tion of the “marginal” likelihood /fi( Ylt9i)f(@i)d6i is unmanageable. Reporting
difficulties can arise if the choice of prior, fi( e,), is arguable.
    This relatively settled solution contrasts greatly with the classical treatment.
 The sample space 9 must be partitioned into a set of acceptance regions Ai,
 3 = U i Ai, Ai n Aj = 0 for i * j, such that if the data fall in Ai then hypothesis i
 is “accepted”. From the Bayesian perspective, these regions can be impljcitly
 defined by the process of maximizing the marginal likelihood, Ai = {Y IJ( Y) >
fj( Y),j * i}. But, classically, one is free to choose any partition. Once a partition
 1s chosen, one is obligated to study its error properties: the type I error
 P( Y G AilHi, Oi) and the type II error P( Y E Ai1Hi, d,), the first error being the
 probability that Hi is not accepted when in fact it is the true model, and the
 second being the probability that Hi is accepted when in fact it is not the true
 model. A partition, U,A, = ‘24, i s ruled inadmissible if there exists another
 partition, U i AT = $4 such that

      P(YcZAiIHi,8,)~P(Y6CA:IHi,Bi)                    foralli,8,,


   ‘It is assumed here that lim(X’X/T)   = Be 0 and lim( ESS,/T)        = uJ’. Using lim(QJ~ESSJ) = 1,

      lim[ y*.s** + T( ESS/T)]-T’2   f T( ESS/T)-T’2

            = lim[ y*s**/(TESS/T)    + l]-T’2 = exp( - v*s*‘/2(      ESS/T))
and



we may derive the exact expression
294                                                                       E. E. Learner


and

      P(YEA,IHj,8,)>,P(YEATIH~,Bj)           foralli,j,8,,

with at least one strict inequality. Otherwise, a partition is ruled admissible.
   The criterion of admissibility can rule out certain obviously silly procedures;
for example, when testing H,: x - N(0, 1) versus Hz: x - N&l), the partition
with A, = {xix z l} is inadmissible. (Let A; = (x1x Q l}.) But otherwise the crite-
rion is rarely useful. As a result, there is a never-ending sequence of proposals for
alternative ways of partitioning the sample space (just as there is a never-ending
sequence of alternative prior distributions!).
   The most commonly used test discriminates between hypothesis HJ and hy-
pothesis H and is based on the following result.
Theorem 2 (F distribution)

Conditional on hypothesis HJ the following random variable has an F-distribu-
tion with k - k, and T - k degrees of freedom:

           b-S,-ESS)/(k-4)
                                                                                (2.5)
      F=




                 ESS/(T-     k)      .

  The traditional region of acceptance of HJ is

                                                                                (2.6)
where F::p( a) is the upper &h percentile of the F distribution with k - k, and
T - k degrees of freedom. What is remarkable about Theorem 2 is that the
random variable F has a distribution independent of (& u*); in particular,
P(Y c AAH,> I% a*) = a. Nonetheless, the probability of a type II error, P( Y E
A,1 H, /3, a*), does depend on (8, a*). For that reason, the substantial interpretive
clarity associated with tests with uniquely defined error probabilities is not
achieved here. The usefulness of the uniquely defined type I error attained by the
F-test is limited to settings which emphasize type I error to the neglect of type II
error.
   When hypotheses are not nested, it is not sensible to set up the partition such
that P(Y @G   AJIHj, &, u,‘) is independent of (&, a*). For example, a test of model
J against model J’ could use the partition defined by (2.6), in which case
VYVC.,~~~8,,~,2)         would be independent of & uJ’. But this treats the two
hypotheses asymmetrically for no apparent reason. The most common procedure
instead is to select the model with the maximum i?*:

      @=I-cES$/(T-k,),                                                           (2.7)
Ch. 5: Model Choice                                                                                    295

where c = (T - I)&( Y, - r)2. Equivalently, the model is selected which mini-
mizes the estimated residual variance

     sJ’= ESS,/(T-         k,).                                                                      W)
Theil(197 1) gives this rule some support by showing that if model J is true then
E(s;) G E(sj,) for all J’. Error probabilities for this rule have been studied by
Schmidt (1973).
    Other ways to partition the sample space embed non-nested hypotheses into a
general model. Models J and J’ can each separately be tested against the
composite model. This partitions the sample space into four regions, the extra
pair of regions defined when both J and J’ are rejected and when both J and J’
are accepted.2 Although it is possible to attach meaning to these outcomes if a
more general viewpoint is taken, from the standpoint of the problem at hand
these are nonsensical outcomes.
    The specification error tests of Wu (1973) and Hausman (1978), interpreted by
Hausman and Taylor (1980), can also be discussed in this section. The con-
strained estimator (4) has bias (Xix,)- ‘XJXJ$~ = EJ3;and is therefore unbiased
(and consistent) if EJ$= 0.The hypothesis that misspecification is inconsequen-
tial, E,&= 0,differs from the more traditional hypothesis, &= 0, if EJ has rank
less than ky, in particular if k, < kf. A classical test of E,&= 0 can therefore
differ from a classical test of &= 0. But if your prior has the feature Pr( &=
OlE,&= 0)= 1, then Bayesian tests of the two hypotheses are identical. Because
E&-is not likely to be a set of special linear combinations of the coefficients, it is
quite likely that the only mass point of your prior in the subspace E&F= 0 is at
/I,-= 0. As a consequence, the special specification error hypothesis becomes
uninteresting.
    The hypotheses so far discussed all involve linear constraints on parameters in
univariate normal linear regression models. In more complex settings the most
common test statistic is the likelihood ratio



where 8 is a vector of parameters assumed to come from some set 9, and the null
hypothesis is that t9 E 0, c 9. Recently, two alternatives have become popular in
the econometric theory literature: the Wald test and the Lagrange multiplier test.
These amount to alternative partitions of the sample space and are fully discussed
in Chapter 13 of this Handbook by Engle.



  ‘See the discussion in Gaver and Geisel ( 1974) and references   including   the-methods   of Cox ( 196 I,
1962) and Quandt ( 1974).
296                                                                       E. E. Learner

2.2.     Interpretive searches

Although it is rare to have the prior probability of an exact constraint be
non-zero, it is fairly common to assign substantial prior probability to the
hypothesis that a constraint is “approximately true”. You may think that various
incidental variables have coefficients which, though certainly not zero, are quite
likely to be close to zero. You may realize that the functional form is certainly not
linear, but at the same time you may expect the departures from linearity to be
small. Similar variables are very unlikely to have exactly the same coefficients, but
nonetheless are quite likely to have coefficients roughly the same size.
   In all these cases it is desirable when interpreting a given data set to use all
prior information which may be available, especially so when the data are weak
where the prior is strong. In practice, most researchers test sequentially the set of
a priori likely constraints. If the data do not cast doubt on a constraint, it is
retained; otherwise, it is discarded. Section 2.2.1. comments on these ad hoc
methods by comparing them with formal Bayesian procedures. Section 2.2.2.
deals with sensitivity analyses appropriate when the prior is “ambiguous”.
Various measures of multi-collinearity are discussed in Section 2.2.3. Finally, the
dilemma of the degrees-of-freedom deficit is commented on in Section 2.2.4.

2.2.1.    Interpretive searches with complete prior distributions

A Bayesian with a complete prior distribution and a complete sampling distribu-
tion straightforwardly computes his posterior distribution. Although no model
selection issues seem to arise, the mean of his posterior distribution is a weighted
average of least-squares estimates from various constrained models. For that
reason, he can get an idea where his posterior distribution is located by looking at
particular constrained estimates and, conversely, the choice of which constrained
estimates he looks at can be used to infer his prior distribution. Suppose in
particular that. the prior for /3 is normal with mean zero and precision matrix
D* = diag{d,, d, ,..., dk}. Then, the posterior mean is


       b**=E(BIY,X,a*)=(H+D*)-‘X’Y,                                             (2.9)

where H = a-*XX. The following two theorems from Learner and Chamberlain
(1976) link b** to model selection strategies.
Theorem 3 (The 2k regressions)

The posterior mean (2.9) can be written as

       b**=   (H+D*)-‘Hb=&vJ~J,
Ch. 5: Model Choice                                                                  297

where J indexes the 2k subsets of the first k integers, & is the least-squares
estimate subject to the constraints & = 0 for i E J, and

      wJa
            ( n 1l~-~x;-x~I,
              iEJ
                      di                 C,=l.
                                          J


Theorem 4 (Principal Component           Regression)
If D* = dI, then the posterior mean (14) can be written as


     b** = (II+        dI)-‘Hb   = 6    y(d/a2)ci,
                                  j=O


where cj is thejth “principal component regression” estimate, formed by impos-
ing thej principal component constraints with the smallest eigenvalues, and

       k
      c wj(d/a2)           =l.
     j=O


   Theorem 3 establishes conditions under which a posterior mean is a weighted
 average of the 2k regressions. If the prior is located at the origin and if the
coefficients are a priori independent, then a Bayesian can determine the location
of his posterior by computation of the 2k regressions. Conversely, a researcher
who selects a particular coordinate system in which to omit variables (or equiva-
lently selects k linearly independent constraints) and then proceeds to compute
regressions on all subsets of variables (or equivalently uses all subsets of the k
constraints) thereby reveals a prior located at the origin with coefficients indepen-
dently distributed in the prior. It is, perhaps, worth emphasizing that this solves
the puzzle of how to choose a parameterization. For example, if a variable y
depends on x and lagged x, yt = &x, + fi2xI_ ,, it is not likely that /3, and p2 are
independent a priori since if I tell you something about /3,, it is likely to alter your
opinions about p,. But if the model is written as y, = (/3, + p,)(x, + x,_ ,)/2 + (p,
 - p,)(x, - x,_ ,)/2, it is likely that the long-run effect (& + /3,) is independent
of the difference in the effects (p, - b2). In that event, computation of the 2“
regressions should be done in the second parameterization, not the first.
   Theorem 4 makes use of the extra information that the prior variances are all
the same. If the prior distribution is completely specified, as is assumed in this
section, there is always a choice of parameterization such that the parameters are
independent and identically distributed. In practice, it may not be easy to select
such a parameterization. This is especially so when the explanatory variables are
measured in different units, although logarithmic transformations can be useful in
that event. When this difficulty is overcome Theorem 4 links principal component
298                                                                       E. E. Learner


regression selection strategies with a full Bayesian treatment. The usual arbitrari-
ness of the normalization in principal component regression is resolved by using a
parameterization such that the prior is spherical. Furthermore, the principal
component restrictions should be imposed as ordered by their eigenvalues, not by
their t-values as has been suggested by Massy (1965).


2.2.2.   Model selection and incomplete priors

The Bayesian logic is to my mind compellingly attractive, and it is something of a
paradox that economic data are not routinely analyzed with Bayesian methods. It
seems clear to me that the principal resistance to Bayesian methods is expressed
in the incredulous grin which greets Bayesians when they make statements like:
“We need to begin with a multivariate prior distribution for the parameter vector
8.” Because prior distributions are not precisely measurable, or because potential
readers may differ in their opinions, an analysis built on a particular distribution
is of little interest. Instead, a researcher should report as completely as possible
the mapping implied by the given data from priors into posteriors. In a slogan,
“ the mapping is the message”.
   In fact, many researchers attempt now to report this mapping. Often different
least-squares equations with different lists of variables are included to give the
reader a sense of the sensitivity of the inferences to choice of model. Sometimes a
researcher will report that the inferences are essentially the same for a certain
family of specifications.
   The reporting of sensitivity analyses should be greatly encouraged. As readers
we have a right to know if an inference “holds up” to minor and/or major
changes in the model. Actually, results are often ignored until a thorough
sensitivity analysis is completed, usually by other researchers. Sensitivity analyses
are not now routinely reported largely because we do not have particularly useful
tools for studying sensitivity, nor do we have economical ways of reporting. I
believe the Bayesian logic ultimately will have its greatest practical impact in its
solutions to this problem.
   A Bayesian sensitivity analysis supposes that there is a class II of prior
distributions. This may be a personal class of distributions, containing all possible
measurements of my uniquely maintained prior, or it may be a public class of
distributions, containing alternative priors which readers are likely to maintain. In
either case, it is necessary to characterize completely the family of posterior
distributions corresponding to the family of priors. For a finite universe of
elemental events e, with corresponding probabilities P(ei) = ri, the set II may be
generated by a set of inequalities:
 Ch. 5: Model Choice                                                                                 299

 which can involve constraints on the probabilities of sets, ci q Si, where ai is the
 indicator function, or constraints on the expectations of random variables
 xi q X( e,), where X is th e random variable. Given the data Y, a set A of interest
 with indicator function 6, the likelihood function P( Y lei) = fi, and a particular
 prior, 7~E II, then the prior and posterior probabilities are




       ‘vrCAIY)   =    Ch4’i    /CfiT*
                        i                i



    Prior, upper and lower, probabilities are then




with posterior bounds defined analogously. The interval P*(A)-P,(A)        is called
the “confusion” by Dempster (1967). If n is a public class of distribution P* - P,
might better be called the “disagreement”.3 Similarly, upper and lower prior
expectations of the random variable X are




with posterior bounds defined analogously.
   Although indeterminate probabilities have been used in many settings, re-
viewed by Shafer (1978) and DeRobertis (1979), as far as I know their use for


   31n Shafer’s view (1976, p. 23), which I share, the Bayesian theory is incapable of representing
ignorance: “It does not allow one to withhold belief from a proposition without according that belief
to the negation of the proposition.” Lower probabilities do not necessarily have this restriction,
P*(A) + P*( - A) * 1, and are accordingly called “non-additive”. Shafer’s review (1978) includes
references to Bernoulli, Good, Huber, Smith and Dempster but excludes Keynes (1921). Keynes
elevates indeterminate probabilities to the level of primitive concepts and, in some cases, takes only a
partial ordering of probabilities as given. Except for some fairly trivial calculations on some
relationships among bounded probabilities, Keynes’ Trearise is devoid of practical advice. Braithwaite,
in the editorial forward, reports accurately at the time (but greatly wrong as a prediction) that “this
leads to intolerable difficulties without any compensating advantages”. Jeffreys, in the preface to his
third edition, began the rumor that Keynes had recanted in his (1933) review of Ramsey and had
accepted the view that probabilities are both aleatory and additive. Hicks (1979), who clearly prefers
Keynes to Jeffreys, finds no recantation in Keynes (1933) and refers to Keynes’ 1937 Quarter.$ Journol
of Economics article as evidence that he had not changed his mind.
300                                                                        E. E. Learner


analyzing the regression model is confined to Learner and Chamberlain (1976),
Chamberlain and Learner (1976), and Learner (1978). In each of these papers the
prior location is taken as given and a study is made of the sensitivity of the
posterior mean (or modes) to changes in the prior covariance matrix. One
important sensitivity result is the following [Chamberlain and Learner (1976)J.
Theorem 5
The posterior mean b ** = (XX + N*) - ‘X’Y, regardless of the choice of the prior
precision matrix N*, lies in the ellipsoid

      (6** - 6/2)X%(    b** - b/2) Q b’X’Xb/4.                                  (2.10)

Conversely, any point in this ellipsoid is a posterior mean for some N*.
   The “skin” of this ellipsoid is the set of all constrained least-squares estimates
subject to constraints of the form R/3 = 0 [Learner (1978, p. 127)]. Learner (1977)
offers a computer program which computes extreme values of a@** for a given #
over the ellipsoid (2.10) and constrained also to a classical confidence ellipsoid of
a given confidence level. This amounts to finding upper and lower expectations
within a class of priors located at the origin with the further restriction that the
prior cannot imply an estimate greatly at odds with the data evidence. Learner
(1982) also generalizes Theorem 4 to the case A 6 N* -’ G B, where A and B are
lower and upper variance matrices and A G N* - ’ mean N* - ’- A is positive
definite.
   Other results of this form can be obtained by making other assumptions about
the class II of prior distributions. Theorems 3 and 4, which were used above to
link model selection methods with Bayesian procedures built on completely
specified priors, can also be used to define sets of posterior means for families of
prior distributions. Take the class l7 to be the family of distributions for /3 located
at the origin with pi independent of pi, i * j. Then, Theorem 3 implies that the
upper and lower posterior modes of Xl/3 occur at one of the 2k regressions. If the
class II includes all distributions uniform on the spheres @‘p = c and located at
the origin, the set of posterior modes is a curve called by Dickey (1975) the “curve
decolletage”, by Hoer1 and Kennard (1970a) the “ridge trace”, and by Learner
(1973) the “information contract curve”. This curve is connected to principal
component regression by Theorem 3.

2.2.3.   The multi -collinearity problem and model selection

There is no pair of words that is more misused both in econometrics texts and in
the applied literature than the pair “multi-collinearity problem”. That many of
our explanatory variables are highly collinear is a fact of life. And it is completely
clear that there are experimental designs X’X which would be much preferred to
Ch. 5: Model Choice                                                             301

the designs the natural experiment has provided us. But a complaint about the
apparent malevolence of nature is not at all constructive, and the ad hoc cures for
a bad design, such as stepwise regression or ridge regression, can be disastrously
inappropriate. Better that we should rightly accept the fact that our non-experi-
ments are sometimes not very informative about parameters of interest.
   Most proposed measures of the collinearity problem have the very serious
defect that they depend on the coordinate system of the parameter space. For
example, a researcher might use annual data and regress a variable y on the
current and lagged values of x. A month later, with a faded memory, he might
recompute the regression but use as explanatory variables current x and the
difference between current and lagged x. Initially he might report that his
estimates suffer from the collinearity problem because x and x_, are highly
correlated. Later, he finds x and x - x_ , uncorrelated and detects no collinearity
problem. Can whimsy alone cure the problem?
   To give a more precise example, consider the two-variable linear model
y = /3,x, + &x2 + u and suppose that the regression of x2 on x, yields the result
x2 = TX,+ e, where e by construction is orthogonal to x,. Substitute this auxiliary
relationship into the original one to obtain the model




where 8, = (8, + &r), (3,= &, z, = x,, and z2 = x2 - TX,. A researcher who used
the variables x, and x2 and the parameters /3, and j?, might report that & is
estimated inaccurately because of the collinearity problem. But a researcher who
happened to stumble on the model with variables z, and z2 and parameters 8, and
0, would report that there is no collinearity problem because z, and z2 are
orthogonal (x, and e are orthogonal by construction). This researcher would
nonetheless report that e,( = &) is estimated inaccurately, not because of col-
linearity, but because z2 does not vary adequately.
   What the foregoing example aptly illustrates is that collinearity as a cause of
weak evidence is indistinguishable from inadequate variability as a cause of weak
evidence. In light of that fact, it is surprising that all econometrics texts have
sections dealing with the “collinearity problem” but none has a section on the
“inadequate variability problem”. The reason for this is that there is something
special about collinearity. It not only causes large standard errors for the
coefficients but also causes very difficult interpretation problems when there is
prior information about one or more of the parameters. For example, collinear
data may imply weak evidence about /I, and & separately but strong evidence
about the linear combination /I, + /_3,.The interpretation problem is how to use
the sample information about p, + /3, to draw inferences about pi and & in a
context where there is prior information about j3, and/or &. Because classical
inference is not concerned with pooling samples with prior information, classical
302                                                                                         E.E.Learner

econometrics texts ought not to have special sections devoted to collinearity as
distinct from inadequate variability. Researchers do routinely pool prior informa-
tion with sample information and do confront the interpretation problem, usually
without the support of formal statistical theory. Because they do, most text
writers using a classical framework feel compelled to write a section on the
collinearity problem, which usually turns out confused and lame. An exception is
Kmenta (1971, p. 391) who accurately writes: “that a high degree of multicollin-
earity is simply a feature of the sample that contributes to the unreliability of the
estimated coefficients, but has no relevance for the conclusions drawn as a result
of this unreliability”.
    This view of collinearity, which seems to me to be entirely straightforward, is
nonetheless not widely held and I have one more communication device which I
trust will be decisive. Consider again the two-variable model y = /3,x1 + &x2 + u
and suppose that you have been commissioned to estimate /?r. Suppose, further,
that the computer program you are using prints out estimates and standard
errors, but neither the covariance between /?, and & nor the correlation between
x, and x2. Another program which does compute covariances is available for
$100. Are you willing to buy it? That is, given the estimate and standard error of
fi,, are you willing to bear a cost to find out if the standard error of /3, is big
because of the correlation between x, and x,? The correct answer is yes if there is
another source of information about p, or & which you wish to use to estimate
p,. Otherwise, the answer is no. The best you can do is to use the given estimate
of p, and the given standard error. Thus, the interesting aspects of the collinearity
problem arise in an information pooling problem. Otherwise, collinearity can be
ignored.
    Measurements of the collinearity problem generally fall into one of four
categories, each of which measures different aspects of the problem.4
(1)   Measures of the “quality of the design” X’X.
(2)   Measures.of the usefulness of other information.
(3)   Measures of the inappropriate use of multivariate priors.
(4)   Measures of the sensitivity of inferences to choice of prior distribution.
   The last three of these measures deal with information pooling problems. The
first makes no reference to pooling and has the defects just described.
   The first set of measures indicates the distance between some ideal design
matrix, say V, and the actual design, X’X. Apparently thinking that an ideal
design is proportional to the identity matrix V= ul, many theorists, including


   40ne other way of measuring collinearity, proposed by Farrar and Glauber (1967),is to test if the
explanatory   variables are drawn independently.      This proposal has not met with much enthusiasm
since, if the design is badly collinear, it is quite irrelevant to issues of inference from the given data
that another draw from the population of design matrices might not be so bad.
Ch. 5: Model Choice                                                                303

 Raduchel(l971) and Belsley, Kuh and Welch (1980), have proposed the condition
 number of X’X as a measure of the collinearity problem. The condition number is
 the square root of the ratio of the largest to the smallest eigenvalues. But there is
 always a parameterization in which the X’X matrix is the identity, and all
 eigenvalues are equal to one. In fact, the condition number can be made to take
 on any value greater than or equal to one by suitable choice of parameterization.
 Aside from the fact that the condition number depends on the parameterization,
 even if it did not it would be nothing more than a complaint and would not point
 clearly to any specific remedial action. And, if a complaint is absolutely required,
 it is much more direct merely to report the standard error of the parameter of
 interest, and to observe that the standard error would have been smaller if the
 design were different -in particular, if there were less collinearity or more
 variability, the two being indistinguishable.
    Category (2), in contrast, includes measures which do point to specific remedial
action because they identify the value of specific additional information. For
example, Learner (1978, p. 197) suggests the ratio of the conditional standard
error of p, given & divided by the unconditional standard error as a measure of
the incentive to gather information about & if interest centers on p,. If the data
are orthogonal, that is, X’X is diagonal, then this measure is equal to one.
Otherwise it is a number less than one. The usefulness of this kind of measure is
limited to settings in which it is possible to imagine that additional information
(data-based or subjective) can be gathered.
    Measures in category (3) have also been proposed by Learner (1973), who
contrasts Bayesian methods with ad hoc methods of pooling prior information
and sample information in multivariate settings. When the design is orthogonal,
and the prior precision matrix is diagonal, the informal use of prior information is
not altogether misleading, but when the design is collinear or the prior covari-
antes are not zero, the pooling of prior and sample information can result in
surprising estimates. In particular, the estimates of the issue #;S may not lie
between the prior mean and the least-squares estimate. Thus, collinearity creates
an incentive for careful pooling.
    A category measure of collinearity has been proposed by Learner (1973). If
there were a one-dimensional experiment to measure the issue #‘/3 with the family
of priors II located at the origin, then the posterior confusion, the difference
between the upper and lower expectations, is just b/%1, where b is the least-squares
estimate. Because the regression experiment in fact is k-dimensional, the confu-
sion is increased to lmax +‘b** -mm+%** I, where 6** is constrained to the
ellipsoid (4). The percentage increase in the confusion due to the dimensionality,
 Imax+%**- min #‘b** I/I +‘b I has been proposed as a collinearity measure and
is shown by Chamberlain and Learner (1976) to be equal to hz/,,,          where x2 is
the &i-squared statistic for testing /3 = 0 and z* is the square of the normal
statistic for testing $‘/3 = 0.
304                                                                                          E. E. Learner

2.2.4.    The degrees - of -freedom deficit

If it is admitted that the degree of a polynomial could be as high as k, then it
would usually be admitted that it could be k + 1 as well. A theory which allows k
lagged explanatory variables would ordinarily allow k + 1. In fact, I know of no
setting in economics in which the list of explanatory variables can be said to be
finite. Lists of variables in practice are finite, not because of theoretical belief, but
only because of the apparent inferential hazards of degrees-of-freedom deficits.
Actually, it is standard practice to increase the dimensionality of the parameter
space as the number of observations increases, thereby revealing that an analysis
at any given sample size is founded on a parameterization which is misleadingly
abbreviated.
   The method of abbreviation usually is based on prior information: variables
which are not likely to be very important are excluded, unless the researcher is
“wealthy” enough to be able to “afford” the luxury of “spending” some of the
data evidence on these incidental issues. Since prior information is at the
foundation of the method, it is unsurprising that a Bayesian has no special
problem in dealing with k in excess of T. In particular, the posterior mean given
by eq. (2.8) makes no reference to the invertibility of X’X. The usual practice of
restricting attention to subsets of variables with k, G T can be justified by
Theorem 1 which assigns zero weights to any subsets such that lXJX,( is zero.5


3.    Model selection with loss functions

The formal model selection theories presented in Section 2 assume a world in
which thinking, information gathering, and computer processing are all errorless
and costless. In such a world, exogeneity issues aside, you would explain GNP in
terms of all 2000 variables on the NBER data files and millions of other variables,
as well, including the size of the polar ice cap. Mortals would find the collection
of the data and the assessment of priors for such a study to be unacceptably
burdensome and would simplify the model before and after having collected the
data.
   Pre-simplification and post-simplification will refer to decisions made respec-
tively before and after data observation. A statistical decision-theoretic solution
to the pre-simplification problem would require us to identify the size of the polar
ice cap as a possible variable and to reflect upon its probable importance in the

   ‘The degrees-of-freedom    deficit does cause special problems for estimating the residual variance 0”.
It is necessary to make inferences about u2 to pick a point on the contract curve, as well as to describe
fully the posterior uncertainty.    But if c2 is assigned the Jeffrey? diffuse prior, and if /3 is a priori
independent    of a*, then the posterior distribution     for /I has a non-integrable  singularity  on the
subspace X’Y = Xx/3. Raiffa and Schlaifer’s (1961) conjugate prior does not have the same feature.
Ch. 5: Model Choice                                                                              305

 equation in terms of both its regression coefficient and its variability.               We might
 decide not to observe this variable, and thereby to save observation                 and process-
 ing costs, but we would have suffered in the process the intolerable                      costs of
 thinking consciously about the millions of variables which might influence GNP.
 I know of no solution to this dilemma. In practice, one selects “intuitively”                      a
 “horizon” within which to optimize. There is no formal way to assure that a given
 pre-simplification      is optimal, and a data analysis must therefore remain an art.
    Useful formal theories of post-simplification               can be constructed,       however.
 It is most convenient         to do so in the context of a model which has not been
 pre-simplified.     For that reason, in this section we continue to assume that the
 researcher faces no costs for complexity until after the model has been estimated.
 Statistical analysis of pre-simplified         models is further discussed in Section 6 which
 deals with data-instigated         hypotheses.
    In order to simplify a model it is necessary to identify the purposes for which
 the model is intended. An ideal model for forecasting will differ from an ideal
 model for policy evaluation             or for teaching purposes. For scientific purposes,
 simplicity is an important objective of a statistical analysis because simple models
 can be communicated,            understood,     and remembered      easily. Simplicity thereby
 greatly facilitates the accumulation           of knowledge, both publicly and personally.
 The word simplicity is properly defined by the benefits it conveys: A simple
 model is one that can be easily communicated,                  understood,   and remembered.
 Because these concepts do not lend themselves to general mathematical                     descrip-
 tions, statistical theory usually, and statistical practice often, have sought parsi-
monious models, with parsimony precisely measured by the number of uncertain
parameters       in the model. (An input-output           model is a simple model but not a
parsimonious       one.)
    Actually, most of the statistical theory which deals with parsimonious                  models
has not sought to identify simple models. Instead, the goal has been an “estima-
ble” model. A model is estimable                  if it leads to accurate      estimates    of the
parameters of interest. For example, variables may be excluded from a regression
equation if the constrained           estimators are more accurate than the unconstrained
estimators.      “Overfitting”      is the name of the disease which is thought to be
remedied by the omission of variables. In fact, statistical decision theory makes
clear that inference ought always to be based on the complete model, and the
search for “estimable”          models has the appeal but also the pointlessness             of the
search for the fountain of youth. I do not mean that “overfitting”                is not an error.
But “overfitting”       can be completely controlled by using a proper prior distribu-
tion. Actually, I would say that overfitting               occurs when your prior is more
accurately approximated           by setting parameters to zero than by assigning them the
improper uniform prior.
    The framework within which we will be operating in Section 3 is the following.
The problem is to estimate /3 given the data Y with estimator b(Y). The loss
306                                                                      E. E. Learner

incurred in selecting an inaccurate estimate is

       loss= L(j3,j).

The risk function is the expected loss conditional on /3:



The estimator B is said to be inadmissible if there exists another estimator b* with
uniformly smaller risk:



with strict inequality for at least one /I. Otherwise, b is admissible. A Bayes
estimator is found by minimizing expected posterior loss:

       mmE( L(BJQIY)
        i

or, equivalently, by minimizin g expected prior risk (&yes risk):

       enE[R(B,8)].
       f%Y)

When loss is quadratic, the Bayes estimator is the posterior mean (2.9) and is
admissible, e.g. Learner (1978, p. 141). Because this posterior mean will not have
any zero elements, a Bayesian treatment of estimation with quadratic loss creates
a prima facie case against model selection procedures for this problem.


3.1.   Model selection with quadratic loss

A huge literature has been built on the supposition that quadratic loss implies a
model selection problem. The expected squared difference between an estimator fi
and the true value 8, the mean-squared-error, can be written as the variance plus
the square of the bias:



                        = var 8 + bias28.
This seems to suggest that a constrained least-squares estimator might be better
than the unconstrained estimator, since although the constrained estimator is
biased it also has smaller variance. Of course, the constrained estimator will do
Ch. 5: Model Choice                                                                          307

better if the constraint is true but will do worse if the constraint is badly violated.
The choice between alternative estimators is therefore ultimately a choice between
alternative prior distributions, a subject discussed in Section 2. If the prior is
fairly diffuse, even if loss is quadratic, the estimator ought to be least-squares,
inadmissibility results notwithstanding (see Section 3.4).
   The generalization of the mean-squared-error         to the case of a vector of
parameters is the matrix

      P= E((e - e)(e - e)‘le)
        = var(8)+(biasfi)(biasd)‘,

where bias d = E( 010) - 8. The mean-squared-error of the linear combination #‘e
is q(+fe - qd)*1e) = qF+.        A n estimator & which has mean-squared-error
 matrix Fa will be said to dominate in the mean -squared -error sense an estimator 4,
with mean-squared-error Fb if I;;, - Fa is positive definite for all 8, that is, if
+‘F& > #‘F,# for all II, and all 8.
   Because the least-squares estimator b is unbiased, the mean-squared-error is
just the variance

     MSE(bJ)          = a*(X’X)-‘.

The mean-squared-error        of the constrained estimaror (1.4) with fi’ = 0 is




where E = (XJX,)-‘XJX,-.
   By appeal to the partitioned inverse rule, the differences in the mean-squared-
error matrices can be written as


  MSE@J)-MSE@J)                      =e*[““z-‘,;”              $I-[       _“l]&/%[   fl]

                                     =      E
                                         [ -I   I[
                                                 “2c’-Bjs&][          _EI]‘,               (3.1)

where a*C- ’= u*(xjMJx,-)-’     = var(b,-).
  By inspection of eq. (3.1), we obtain the basic dominance result:
Theorem 6 (Mean-squared-error            dominance)
If var( bJ)- && is positive definite, then MSE(6, /?-                 MSE(fi, /3) is positive
definite.
308                                                                        E. E. Learner


   In words, if & is small compared to the least-squares sampling variance I’( by),
it is better to estimate with & set to zero. When & is a scalar, the dominance
condition can be written in terms of the “true t ” as in Wallace (1964):

      MSE(b,P)-MSE(b,/3)pos.def.er2>1,
where
      7   2= #/var(   by ) .

More generally, if the “true squared t ” is larger than one for all linear combina-
tions of the omitted variables, then unconstrained least-squares estimates have a
smaller mean-squared-error than constrained least-squares estimates. The answer
to the question “Which is the better estimator?” is then only the answer to the
question “What is your prior distribution?“, or more particularly the question
“Do you think &- is small relative to KU(&)?” Thus, the problem of model
selection with quadratic loss is turned back into a problem of model selection
with prior information and the quadratic loss function actually becomes inciden-
tal or unnecessary except that it selects one feature of the posterior distribution,
namely the mean, for special attention.
   This dark cloud of subjectivity is pierced by the sunshine of ingenuity when it is
noted that the “true t “, r2, can be estimated. That suggests selecting B if the t
value for testing &= 0 is less than one and otherwise selecting 6, or, equivalently,
selecting the model with the higher x2 [Edwards (1969)]. The bootstraps turn out
to be a bit too loose for the researcher actually to get himself off the ground and
this “pre-test” estimator has smaller mean-squared-error than least-squares for
some values of /3 but not for others [Wallace and Ashar (1972) and Feldstein
(1973)].
   Since a priori information is clearly necessary to choose between I/J’~and t//b as
estimators of $‘/3, it is useful here to form the decision-theoretic estimator of JI’B.
Given the data Y and therefore the posterior distribution of /3, f(B]Y), a
Bayesian chooses to estimate #‘/3 by 8 so as to minimize E(( #‘/3 - 8)2]Y), which
quite simply produces the posterior mean

      e=E(\t’&Y)=$‘E(/?]Y).                                                      (3.2)

Because this posterior mean will, with probability one, contain no zero elements,
there is no model selection problem implied by quadratic loss. If, as is suggested
above, there is prior information that &is small, and there is a diffuse prior for
all the other parameters, then the Bayes estimator of $‘B will fall somewhere
between J/‘b and I//), but will never equal Ir/‘b.
   Non-Bayesians cannot afford to ignore these observations merely because they
resist the notion of a prior distribution. The class of Bayesian estimators forms an
Ch. 5: Model Choice                                                               309


essentially complete class of admissible decision rules, and estimators which are
“far from” Bayes’ estimators are consequently inadmissible. In particular the
“pre-test” estimator of $‘/3 is a discontinuous function of the data Y, since an
infinitesimal change in Y which shifts the hypothesis from acceptance to rejection
causes a discrete jump in the estimate from +‘fi to i//6. The Bayes decisions (3.2)
are in contrast necessarily continuous functions of Y, and this test-and-estimate
procedure has been shown by Cohen (1965) to be inadmissible when u 2 is known.
   The erroneous connection of model selection procedures and quadratic loss is
most enticing if the loss function is

     ql%iq= (s-s)fx’x(s-s)>                                                    (3.3)

with a dependence on the sample design which can be justified by supposing that
we wish to estimate the mean values of Y at the sampled points X, say Y = X,8,
with loss




If least-squares is used to estimate 8, then the expected loss is

      E((B-b)‘X’X(B-b)lB,a2)=E(tr(/3-6)(/3-_)’X’XW,a2)
                                         = a2tr( X’X)-‘X’X   = ku2,             (3.4)

which is an increasing function of the number of parameters k.
   Alternatively, partition /3’= (& rB;-),where & has kJ elements, and estimate /3
by constrained least-squares with &= 0. The expected loss is a function of /3 and
is (using the mean-squared-errors matrix above)




                 =u2k,+&[      “,1X’X[      -“I]&

                 =u2k,+/3;[X;-Xj-X;-XJ(X;XJ)-‘X;Xy]&.


The term u2kJ has been called a penalty for complexity and the second term a
penalty for misspecification.
   It is natural to select model J over the complete model if the expected loss (3.5)
is less than the expected loss (3.4). But since (3.5) depends on & this rule is
non-operational. One way of making it operational is to estimate &-in (3.5) and
to choose the model with the smallest estimated risk. A consistent estimate of &is
least-squares bJ = (X;-M,X;))-‘X;-M,Y. Substituting this into (3.5) yields the
310                                                                          E. E. Learner


estimated     risk:

      ~,=a2k,+Y’M,X,-(X;M~X,)-‘X;-M,Y

            = a=k, + ESS, - ESS.                                                    (3.6)

Model selection rules based on estimated risk similar to l?, have been proposed
by Allen (1971), Sawa (1978), and Amemiya (1980).
   Although this is a consistent estimate of the risk, it is also biased. An unbiased
estimator can be found by noting that

      E( ESS,) = E( Y’M,Y)            = trM,E(       YY’)

                      = trM,(   X/3fl’X’+   &I)

                      = ,S’X’M,Xj3 + a2trMJ

                      =/3;X;MJX,-8+a2(T-               k,).

Thus, an unbiased         estimator   of R( p, b) is

      li, = cJ2kJ+ ESS, - u=(T-             k,)

            = ESS,-o=(T-2k,).

Dividing     this by u2 yields Mallow’s           (1973) criterion   “CP”,


      c, = y           -(T-2k,),                                                    (3.7)
which surfaced in the published      literature in Gorman       and Toman (1966) and
Hocking and Leslie (1967). If u2 in the formula is replaced by the unbiased
estimator e2 = (ESS)/(T - k), then C, for the complete model (k, = k) is just k.
Models with CP less than k are therefore “revealed          to yield smaller prediction
error”.
   Wallace’s mean-squared-error      tests and Mallow’s CP statistics       are terribly
appealing but they suffer from one substantial     defect: neither can assure that the
model which is most estimable will be selected. Errors in the selection process
which are a necessary feature of any statistical         analysis may mean that the
mean-squared-errors     of the two-stage estimator     are larger than unconstrained
least-squares.  It depends on the value of /3. The only way really to solve the
problem is therefore to apply the Bayesian logic with a prior distribution        whose
location and dispersion determine where you especially want to do better than
least-squares  and where you do not care too much. But a full Bayesian treatment
of this problem quickly makes clear that there is no reason to set estimates to
Ch. 5: Model Choice                                                               311

zero, and quadratic loss implies an estimation problem, not a model selection
problem.


3.2.    Simplification   searches: Model selection with fixed costs

Although quadratic loss does not imply a model-selection problem, it is easy
enough to find a loss function which does. For example, merely add to the
quadratic loss a fixed cost dependent on the model but not on the true parame-
ters. If future prediction of Y at the T sampled values of X is the goal, and if loss
is quadratic with a fixed cost, then the expected loss can be written as

       L(/3,B)=(fi-B)‘X’X(/3-~)+To2+cdim(/?),                                   (3.8)

where c is a given constant and dim(b) is the number of non-zero elements of B,
and where Tu2 measures the expected contribution to the loss due to the residual
error. Loss (3.8) differs fr?m (3.3) in that it includes the term Tu2 and also the
complexity penalty cdim@). The posterior expected value of this loss function is

       E(~(8,~)ly,u2)=E((B-~)‘X’X(B-B)IY)
                              +(fl-fi)‘X’X(fi-/?)+Ta2+cdim(b)
                            = tr[X’X*var(/3JY)]+(/$-/9)‘XX(/J-/j)
                              + Tu2 + cdim(b),

where B= E( ply). If b is partitioned as above, and if &Pis set at zero, then the
second term in this equation is minimized by setting

       /$=&+(x;x,)-‘x;x,&,                                                     (3.9)
with the quadratic form becoming




Finally, in order to distinguish model selection with prior distributions from
model selection with loss functions, let the prior be diffuse, so that B is just the
least-squares estimate with & = bj and I’( /3lY, u2) = u2( XX)-‘.     Then the ex-
pected loss becomes

       EJ(L(/3,&Y,u2)        =ku2+Y’MJXj(X;MJXJ)-IX;-MJY+Tu2+ckJ

                             =(k+T)u2+ckJ+ESSJ-ESS.
312                                                                       E. E. L.eamer


Thus, the best model is the one that solves the problem

      m;m(CkJ + ESSJ),                                                         (3.10)

where kJ is the number of parameters and ESS, is the error-sum-of-squares
formed by regressing Y on these k, explanatory variables. This can be compared
with Mallows’ C’ statistic (3.7) which has c = 2u2, and the estimated risk (3.6)
with c= e2.
   The exact interpretation attaching to the complexity penalty ckJ is a matter of
considerable importance, but will likely remain elusive. Most of us simplify
models to facilitate communication and innovation. The features of a model
which impair communication and innovation are certain to vary with the subject-
matter and the number of parameters is at best an incomplete measure of
complexity. Moreover, the trade-off between complexity and prediction error (the
scale of c) is likewise elusive. Learner (1978) advocates avoiding these issues by
reporting the percentage increase in the expected loss due to the restriction,
exclusive of the complexity penalty,

      LJ - L    ESS, - ESS
      -=
         L       (k+T)a2      .

Lindley (1968), which is the source of these ideas, studies the conditional
prediction problem in which the complexity penalty is the cost of observing
“future” explanatory variables preliminary to forming the forecast. Lindley
(1968) also studies the choice of variables for control and contrasts the solution of
the prediction problem with the solution of the control problem, the latter
depending and the former not depending on the posterior variance of 8.
   It is important to notice that this solution (3.10) is applicable for prediction
only at the observed values of the explanatory variables X. Essentially the same
solution applies if the future explanatory variables are unknown and are treated
as a sample out of a multivariate normal distribution, as in Lindley (1968). It
should also be observed that this solution forces the included variables to play
partly the role of the excluded variables, as is evident from eq. (3.9). Learner
(1978) has argued that the model which results is not simple in the sense of being
easily communicated, and he recommends that fi’ should be set equal to $ rather
than the adjusted coefficients (3.9). Using this restriction and the logic which
produces (3.10), we obtain the expected loss EJ(L(j3,b*)IY,u2) = (k + T)a2 +
b;Xi_Xibi+ ck,, with the best model being the one that minimizes

                                                                               (3.11)

the second term being a multivariate      generalization   of a “beta   coefficient”,
Ch. 5: Model Choice                                                               313


bf var(x,)/var( Y). This contrasts with (3.10) which minimizes ck, + b;-x;-M,X,-6,;
where X:-X;- is the unconditional variance of the excluded variables and X;-M,X,-
is the variance conditional on the included variables.


3.3.    Ridge regression

Hoer1 and Kennard (1970) proposed to estimate /3 by the formula

       /P(c) = (x’x+       cl)_'X'Y,                                          (3.12)

which they called the ridge estimator. Although this procedure is thoroughly
discussed in Chapter 10 of this Handbook by Judge and Bock, it is useful here to
note first that the ridge estimator is connected to all-subsets regression by
Theorem 1 and to principal component regression by Theorem 2. In particular,
the ridge estimator is a weighted average of regressions on all subsets and is also a
weighted average of the principal component regressions. Secondly, the ridge
estimator is proposed as a solution to the problem discussed in Section 3.1,
estimation with quadratic loss, and it suffers from the same defect as the pre-
test estimator, namely the risk is lower than least-squares risk for some values of
/? but higher for others. Whether you want to use ridge regression therefore
depends on prior information. This is an aggravating example of the importance
of packaging for the marketing of professional ideas. Hoer1 and Kennard (1970)
themselves observed that (3.12) has a Bayesian interpretation as the posterior
mean with a spherical prior. What they proposed in effect is that you ought to act
as if you have a spherical prior located at the origin, even when you do not. For
reasons which escape me, some who resist Bayesian methods as being too
“subjective”, are nonetheless receptive to the use of spherical priors even when
the true prior is something altogether’different! Smith and Campbell (1980) may
signal the beginning of a backlash.


3.4.    Inadmissibility

The argument against model selection procedures when the loss function is
quadratic rests primarily on the fact that methods which select discretely from
points in the model space are inadmissible. But when there are three or more
coefficients the unconstrained least-squares estimator itself is inadmissible and
there exist known estimators which dominate least-squares. These are fully
discussed in Chapter 10 of this Handbook by Judge and Bock. What these
estimators have in common is an arbitrary location toward which the ordinary
least-squares estimate is shrunk. The only way I know to choose this location is
by appeal to prior information. Thus, in the context of a decision problem with
314                                                                       E. E. Learner


quadratic loss a convincing argument can be made against least-squares, but the
sensible choice of another estimator still rests on prior information. Moreover, I
cannot think of a setting in which an economist has a quadratic loss function.


4.    Proxy searches: Model selection with measurement errors

In practice, many model selection exercises are aimed at selecting one from a set
of alternative proxy variables which measure a common hypothetical construct.
However, the large and growing literature on errors-in-variables problems, re-
viewed in Chapter 23 of this Handbook by Aigner et al., rarely if ever touches on
model selection issues. In this section I point out a few model selection problems
which may arise when there are multiple proxy variables. The sources of these
problems are the same as discussed in Sections 2 and 3: prior information and
loss functions. The purpose of this section is not to provide solutions but only to
alert the reader to an important set of issues.
   The model which will serve as a basis for our comments is


       Y,=PXr+Yz,+u,,
      Xlj = 6,x, + Elf,
      X2t   =   62Xr   +   -52r9




where(Y,, z,, xlj, xZj), t = I,..., T, are observable variables, each with its sample
mean removed, and (x,, u,, elj, .szj), t = l,..., T, are random vectors drawn inde-
pendently from a normal distribution with mean vector (wz,, O,O,0) and diagonal
covariance matrix diag{ui, u,‘, a:, u,“}. In words, x, and x2 are alternative proxy
variables for the unobservable x. In settings like this, researchers look for proxy
variables which provide the “correct” estimates and high R2 ‘s. The purpose of the
following is to demonstrate the appropriateness of these informal techniques.
   We first consider likelihood ratio tests for the hypothesis that x, is a better
proxy than x2. To make it as simple as possible, consider the hypothesis uf = 0
versus cr2
         2
           = 0 * If u: = 0, the sampling distribution can be written as


      ueT12
       u    exp- C(~+-Px,~-Yz,)~/20,2                            .
                1            f                               )

      (6&r~)-T’2exp(               - ~x:,/26:o,z}.


      (cr2)-T’2(       exp- xix,,          - S2x,,)2/2u;}.
                                    I
Ch. 5: Model Choice                                                               315

Maximizing this with respect to the parameters produces the likelihood statistic:

     L, = [ESS,.x;x,.x;M,x,]-T’2,

where ESS, is the error sum-of-squares formed by regressing y on x, and z, and
M, = I - x,(x;x,)-‘xi.   With L, defined analogously, the likelihood ratio for
testing uf = 0 versus u: = 0 is

     L,/L,= (ESS2/ESS,)T'2,

and the better proxy is the one that produces the higher R2.
  If it is known that both 6, and 6, are equal to one, then the likelihood ratio
becomes




and the variable with the lower variance is thereby favored since high variance
suggests great measurement error. If, in addition, the values of @ and y are
known, the likelihood ratio becomes

     h/L,     =   (ESS2   +   Q,@,Y))(Gz)/(ESSI    + Q,(P,v))b;d,              (4.1)

where Qi measures the difference between (/3, y) and the least-squares estimates




Thus, eq. (4.1) reveals that a good proxy yields a high R2, generates estimates
which are close to a priori estimates, and has a low variance.


5.   Model selection without a true model

The preceding sections have taken as given the rather far-fetched assumption that
the “true” model is necessarily one of a given class of alternatives. The word
“true” can be given either an objectivist or a subjectivist definition. The data may
be thought actually to have been drawn independently from some unknown
316                                                                      E.E.Learner

 distribution, g(q), which happens not to be in the maintained class of distribu-
 tions f( q]O), 8 E H. Alternatively, my beliefs about the exchangeable sequence Y
can be described by saying that I act as if each observation q were drawn from a
 distribution g(yl]y), with uncertain parameter y having the prior distribution
g(y); thus, my true marginal density is g(Y) = j,[I’&g(Y]y)]g(y)dy.            For a
variety of reasons I choose to approximate g(Y) byf(Y) = ~e[Il,f(YJtQf(~)d6+.
That is, I act instead as if the observations were drawn from the distribution
f(Y]O), with uncertain parameter 8 having the prior distributionf(8).
    A well-known result in the objectivist tradition is that the method of maximum
likelihood asymptotically produces an estimated density closest to the true density
in the “information sense”. This follows from the fact that T-‘C,logf(~]O)
estimates E(logf(YlB)) = Jr logf(YJO)g(q)dY          and from the fact that the dif-
ference between f and g “in the information sense” is



Thus, maximizing the log-likelihood is equivalent asymptotically to maximizing
E[log f( ?]8)], which in turn is equivalent to minimizing the expected logarithmic
difference between the two densities.
   A more active role in searching for a model closely approximating the true
density has been suggested by Akaike (1973, 1974) and explored by Sawa (1978).
The considerable appeal of this framework is that none of the hypothesized linear
regression models need be considered to be the true model. Although this might
imply a model selection problem, Learner (1979) shows that maximizing informa-
tion is essentially the same as estimating with quadratic loss and consequently
there is no proper penalty for complexity inherent in the approach. In fact, when
a2 is known, the “Akaike Information Criterion” is the same as Mallows’ CP
statistic and suffers from exactly the same defects.
   In discussing the information criterion it is important to keep in mind the
distinction between parameters of the data distribution and the decision argu-
ments of the loss function. In the more familiar estimation problem the parame-
ters of the data distribution are the regression coefficient vector /3 and the
residual variance a2; the decision arguments of the loss function are the corre-
sponding estimators, b and d2. In the Akaike-Sawa information framework, there
are no data parameters corresponding to the decisions b and h2. Instead, the data
 Y are assumed to be distributed multivariate normal, for example, with mean
vector p and variance-covariance matrix 0. Inferences are drawn only about the
parameters p and 0; the choice of regression model is a decision problem which
logically occurs after the inference problem has been solved. The decision
problem is to approximate the uncertain mean vector ~1with a vector X,6, where X
is an observed matrix and b is a vector of free decision parameters. To make this
distinction as clear as possible we may pose the rhetorical question: “What is the
Ch. 5: Model Choice                                                               317


prior distribution for the coefficient vector /3?” The answer is that there is no
prior for /3. Subjective probability distributions apply only to the uncertain state
of nature (p, In), and not to the decisions (8, a2).
   Solutions are well known to the inference problem with Y multivariate normal
with uncertain mean vector p and uncertain covariance matrix $2 [Degroot (1970,
p. 183)]. The decision problem is then to select a matrix X, a vector /3, and a
scalar a2 such that the regression model, Y = Xfi + U, is a good approximation to
reality, in particular so that the difference between the true normal density
fN(Ylr, Sa) and the approximating density fN(Y]X,f3, a21) is minimized, where
difference is measured in terms of the Kullback-Leibler information criterion.
Expressed in terms of a loss function this becomes




In the event that s2 = ~~1, this function becomes

                                                      1 (cc-XP)‘(P-XB)
     qc(, u2;x, 8.02)=c(p,o’)+logu~+~+~                          u2           ’

where c(p, w2) is a loss which is independent of the decision (X, /3, u2). The loss
function is written to emphasize the fact that the first pair of arguments (~1,w2)
are parameters and the second triple of arguments are decision variables. Inspec-
tion of this loss function reveals that the problem reduces to estimating p with
quadratic loss with the further restriction that the estimate fi must be of the form
Xb. Akaike (1973, 1974) has suggested an estimate of the approximation loss
L( B, 0; X, /3, u2) equal to the maximum log-likelihood minus the number of
parameters, and suggests selecting the model with lowest estimated loss. This is
conceptually equivalent to selecting the, model with smallest estimated risk, i.e. eq.
(3.6) or (3.7). Just as in Section 3.1, an estimation problem is incorrectly
interpreted as a model selection problem and the resultant estimator is almost
certainly inadmissible.
   Finally, it should be observed that the fundamental reason why the information
criterion does not imply anything especially different from maximum likelihood
methods is that it uses the logarithmic “scoring rule” which is implicit in
maximum likelihood estimation. Alternative measures of the distance between
two densities could produce dramatically different results.


6.   Data-instigated models

In’response to a question from Dr. Watson concerning the likely perpetrators of
the crime, Sherlock Holmes replied “No data yet . . . It is a capital mistake to
318                                                                        E. E. Learner


theorize before you have all the evidence. It biases the judgments” [Doyle (ISSS)].
Were Doyle trained as a theoretical statistician, he might have had Watson poised
to reveal various facts about the crime, with Holmes admonishing: “No theories
yet... It is a capital mistake to view the facts before you have all the theories. It
biases the judgments.”
   Each of these quotations has a certain appeal. The first warns against placing
excessive confidence in the completeness of any set of theories and suggests that
over-confidence is a consequence of excessive theorizing before the facts are
examined. The second quotation, on the other hand, points to the problem which
data-instigated theories necessarily entail. Theories which are constructed to
explain the given facts, cannot at the same time be said to be supported by these
facts.
   To give an example reviewed by Keynes (1921, ch. 25), De Morgan argues that
a random choice of inclinations to the ecliptic of the orbits of the planets is highly
unlikely to produce a set of inclinations with sum as small or smaller than those
of our solar system. De Morgan derives from this an enormous presumption
that “there was a necessary cause in the formation of the solar system.. . “.
D’Alembert in 1768 observed that the same conclusion could be drawn regardless
of the set of inclinations, since any particular set of inclinations is highly unlikely
to have been drawn randomly.
   Keynes (1921, p. 338) points out that the solution to this dilemma is “simply”
to find the correct prior probability of the data-instigated model: “If a theory is
first proposed and is then confirmed by the examination of statistics, we are
inclined to attach more weight to it than to a theory which is constructed in order
to suit the statistics. But the fact that the theory which precedes the statistics is
more likely than the other to be supported by general considerations-for         it has
not, presumably, been adopted for no reason at all- constitutes the only valid
ground for this preference.”
   In order to make Keynes’ observation as clear as possible, consider the two
sequences of digits: A: 1,2, 3,4, 5; and B: 2, 8,9, 1,4. Ask yourself how probable
is it that the next digit in each sequence is a six. Does it affect your opinion if you
notice that the first and second pairs of digits of the B sequence add to ten? Does
it affect your opinion if A and B came from IQ tests which included questions of
the form: “Which digit is the sixth digit in the sequence?” What if A and B are
the first five digits of six-digit license plates?
   My own informal thinking would lead me initially to suppose that a six is
highly likely (probability 0.9?) for sequence A but not very likely for sequence B
(probability O.l?). My opinion is little affected by the observation that pairs of
digits add to ten, until I am told that these are sequences from IQ tests. Then I
think six is very likely under both A and B, with probabilities 0.99 and 0.9,
respectively. On the other hand, if these were license plates, I would expect a six
with probability 0.1 for both sequences.
Ch. 5: Model Choice                                                                 319


   Both these sequences instigate hypotheses which were not explicitly identified
before the data were observed. The preceding discussion is meant to suggest that
the inferences you make in such circumstances depend critically on the prior
probability you apply to the data-instigated hypothesis. In order to interpret the
given evidence it is therefore necessary only to have the correct prior probabili-
ties. The problem with data-instigated hypotheses is that prior probabilities have
to be computed after having seen the data. Most of us are subject to what a
psychologist [Fischoff (19731 has called “the silly certainty of hindsight”: Once
an event is known to occur (Napoleon lost the battle of Waterloo) we tend to
think it was an inevitable consequence of events which preceded it (Napoleon was
suffering from a head cold). Before the battle, it is fair to say the outcome was
very much in doubt, even given the fact that Napoleon had a cold. And before we
knew the orbits of the planets, it is fair to say that it is unlikely that a “necessary
cause” would select orbits in roughly the same plane.
   The solution to this problem then reduces to policing the assignment of
probabilities to data-instigated hypotheses. Learner (1974) has provided a frame-
work for doing this in the context of the linear regression model by mimicking the
following sequential decision problem. Suppose that the true model has two
explanatory variables yI = &, + p,x, + fizz, + u,, but suppose that it is costly to
observe z. If it is known also that z, obeys the auxiliary relationship zl = r, +
r,x, + Ed, then a regression of y on x alone will yield a useful estimate of /3, if
/3* is zero or if r, is zero, since, conditional on x, yt = (&, + &rO)+(p, + &T,)x,
 + (u, + &E(). Even if neither parameter is identically zero, it may be uneconomic
to suffer the costs of observing z. However, once Y and x are observed, you may
change your mind about observing z, possibly because the sample correlation
between Y and x is too low or of the wrong sign.
   This formal decision theory problem requires a supermind, capable of specify-
ing a complete model and the relevant prior distribution. But the principal reason
most of us use pre-simplified models is to avoid the unlimited cost of a full
assessment. Although a simplified model cannot therefore result from formal
decision theory, we nonetheless can act as if our models were so derived. The
reason for doing so is that it implies constraints on the probabilities of data-
instigated models, and consequently a very appealing system of discounting
evidence built on these models. In particular, for the model described above,
when y is regressed on x alone, the researcher is required to assess a prior for the
experimental bias parameter &r,. This he must be able to do if he thinks he is
getting evidence about &, even if z is not formally identified. If the regression
coefficient is thought to be “almost” unbiased, then &.r, is “almost” zero. Next,
when peculiarities in the data force a reconsideration of the model and z is added
to the list of explanatory variables, then the prior for /3, must be consistent with
the originally assumed prior for &r,. Given r,, this requirement will locate the
prior for p, at zero and will constrain the prior variance. Consequently, when y is
320                                                                       E. E. Learner


regressed on x and z the data will have to overcome the a priori prejudice that &
is small.
   Parenthetically the word “instigate” is used here advisedly to mean that the
data suggest a hypothesis already known to the researcher. This contrasts with
data-initiated models which I am comfortable assuming do not exist.


7.     Miscellaneous topics

7.1.    Stepwise regression

“Stepwise regression” refers to any of a large number of subject-free sequential
methods of selecting variables as originated by Ezekial and Fox (1930) and
discussed in Draper and Smith (1966), in Efroymson (1960), and in Beale (1970).
Variables are either added to or deleted from the regression equation depending
on how they affect the residual sum-of-squares, for example to increase Mallows’
C’ statistic. It is to the credit of economists that they rarely turn over the task of
selecting variables to the computer. Aside from lacking a clear logical foundation,
stepwise procedures almost always seek sets of variables which are relatively
uncorrelated. Economists have avoided stepwise methods because they do not
think nature is pleasant enough to guarantee orthogonal explanatory variables,
and they realize that, if the true model does not have such a favorable design,
then omitting correlated variables can have an obvious and disastrous effect on
the estimates of the parameters.


7.2.    Cross-validation

Cross-validation is a method for choosing models which is intended to respond to
the following argument: “It is not difficult for a statistician to find a model which
accurately explains a given data set. A polynomial of sufficiently high degree is
flexible enough to wander from observation to observation. And there are always
variables or other changes in a model which can be employed to improve the
apparent fit. Specification searches are routinely employed for precisely this
purpose. However, the usefulness of a model derives not from the fact that it is an
adequate description of the process that generated a given data set, but rather
because it works in other settings. A statistician can argue that model A will work
better than model B in some new setting only by making a sequence of
implausible assumptions. For all of these reasons, we should insist that a model
survives to a new relevant environment, and we should reserve judgment as to
which model is best until post-sample studies are performed.”
Ch. 5: Model Choice                                                                         321


   A possible remedy is cross-validation          in which part of the data is saved to
check the adequacy of the model selection. References include Herzberg (1969)
Stone (1974, 1977, 1978), Geisser (1975) and Geisser and Eddy (1979). Because
cross-validation   is explicitly designed to avoid assumptions,           it is not possible
legitimately to criticize the various proposals. Until the cross-validation           tools are
used and evaluated in a substantial       number of real prediction        situations, we are
limited to making aesthetic judgments           as we view the tools on display in the
museums of the statistics journals.        My own aesthetic senses have been rather
sharply honed by my many visits to the main, probabilistic             hall of the museum,
and I do not find the cross-validation          room very appealing.      Moreover, all the
lofty intentions   notwithstanding,     cross-validation      ends up choosing models in
essentially the same way as traditional       tools.
    The two most common cross-validatory            methods for selecting a model involve
splitting the data set and one-at-a-time           deletions. A “test” of the hypothesis
& = 0 can be built by splitting the data into a part used for estimating and a part
used for prediction,     say Y’= (Y;, Y;). The first subset of the data is used to
estimate both the restricted        and the unrestricted       models, and to predict the
 second subset. The model is selected which yields the better predictions, measured
 as the sum-of-squared    deviations between the actual Y2 and the predicted Y2. The
data may be treated symmetrically         by predicting      also Y, given Y2. Consider in
particular the full model with


     x=
           [
               x,
               x
                2   1
and with least squares        estimates   based on the first and second    parts of the data


     b, = (xix,)_‘x;y,,              b, = (Xix,)-‘X;Y,.


The penalty,        which we seek to minimize    by choice of model, is


      P, = (Y,- W,)‘(Y, - W,)+(Y, - X,b,)‘(Y, - X,b,),                                    (7-l)
where X,b, is the prediction of Y, based on Y2 and X,b, is the prediction         of Y2
based on Y,.
   Since the criterion (7.1) is meant to be a method of choosing models when there
is no theory of model selection, it is difficult to comment on it theoretically.     It
seems sensible. If it works, it works. But we can ask how it contrasts with the
methods already discussed, which are a consequence       of a certain list of assump-
tions. In fact, criterion (7.1) looks something like the usual error sum-of-squares.
322                                                                      E. E. Lamer


If X, = X,, then

      b=(X’X)_‘X’Y=(b,+6,)/2,
      (Y-     Xibi)‘X, =O,
      Y - X;b, = Y - X# + x;( b, - b,)/2,
      Y - x$J = Y - X,b; + xi ( bi - bj)/2,

and

      (Y,-X,b,)‘(Y,-X,b,)=(Y,-X,b)‘(Y,-XJJ)
                                      +(b, - 6,)‘x;x,(6,    - b,)j4
                                      +(Y,-X,b)‘X,(b,-6,)
                                   = (Y, - X,b)‘( Y, - X,b)
                                      +3@, -b,)‘X;X,@,        -Q/4.
Thus,

      P,=(Y-Xb)'(Y-Xb)+3(b,-b,)'X;X,(b,-b,)/2
            =ESS+3(b,     -b,)‘X;X,(b,        - b&2.

That is, the cross-validation index is the usual error sum-of-squares plus a
penality for coefficient instability. The complete neglect of coefficient instability
evidenced by the traditional least-squares methods is certainly a mistake, but
whether cross-validation is the proper treatment is very much in doubt. There are
many formal statistical models of parameter drift that could be used instead.
These methods yield estimates of the speed of parameter drift and pick the model
which most closely tracks the data, allowing for parameter drift. In contrast, the
cross-validation approach seeks a model with no drift at all, which seems
inappropriate in our unstable world.
   Cross-validation can also be done by deleting observations one at a time. Let Sj
be a T-dimensional vector with a one in location i and zeros everywhere else.
Then the prediction error of observation i is the same as the coefficient of the
dummy variable Si when Y is regressed on X and the dummy; this estimated
coefficient is (&M6,)- ‘S,MY = ei/Mii, where A4 = I - X( X’X)- ‘X’ and e = MY
is the vector of residuals when Y is regressed on X. The sum-of-squared prediction
errors is then the cross-validation penalty


      P2 =    5 q?/A!f;;= (~ep4;‘/~M;‘)cM;;‘,                                   (7.2)
              i=l              i               i       i
Ch. 5: Model Choice                                                                 323


which is called SSPE by Schmidt (1974) and PRESS by Allen (1974). It is
discussed by Hocking (1972, 1976) and studied by Stone (1974). The penalty P2 is
just a weighted error sum-of-squares times the sum-of-squares of the inverse
diagonal elements of the matrix M. It should be noted that in the nested case with
the subset X, tested against the full model X, S,‘Ms, is strictly less than 6,‘M,6,,
and ci(MJ)i2 < ciMi;‘. For this reason the cross-validation penalty (7.2) can
be interpreted as a weighted error sum-of-squares times a complexity penalty. The
complexity penalty ciMi;’ is very similar to the complexity penalty implicit in
the adjusted R2, which is a transformation of the unweighted error sum-of-squares,
ESS, times (trM)- ’= (ciMii)-’ = (T - k)- ‘. As will be shown below, the
cross-validation penalty (7.2) can be regarded to be inferior to the adjusted R2
rule because it does not consistently select the true model.
    The preceding paragraph has evaluated predictions in terms of their absolute
 errors and has ignored the fact that a prediction might have a large standard
 error. This is sensibly and easily corrected. The computed variance attaching to
 the dummy variable Si is a2( S,‘Ms,)- ’= a2Mi; ‘, and the squared prediction error
 scaled by its variance is (ef/Mi)/a2Mi;       ’= e,‘/a2Mii. The sum-of-squares of
 standardized prediction errors is then the cross-validation penalty proposed by
 Schmidt (1974):




Yet another possibility is offered by Stone (1974):

      P4 = ~e:/CM~.
             i          i


  What P2, P3, P4, and x2 all have in common is that they select the model which
minimizes

      rnineJD,e,,
       J

where DJis a diagonal matrix. As in Schmidt (1974), we can compare the mean of
eJD,e, for the model, J,, with the mean for an alternative model, J2. For any
model J,

     E(e;D,e,)        = trD,E(e,e;)

                      = tr D,M,Xl3/3XM, + u2tr DJMJ,                              (7.3)

where MJ = I - X,(XJX,)-‘XJ.          If model J, is the true model, then X/3 = XJ,flJ1,
324                                                                        E. E. Learner


M,,X,, = 0, and

       E( eJ,DJ,eJ,) = a2trDJ,MJ,.                                                (7.4)

Since the first term in expression (7.3) is positive, a sufficient condition for (7.4)
to be less than or equal to (7.3) is

       tr DJ,MJ, = tr DJ2MJ2.                                                     (7.5)

One choice of DJ with this property is DJ = I/trM,,       which generates Theil’s X2
criterion. Another choice is DJ = diag{&; ‘}, the basis for P3. Neither P2 with
DJ = diag{Miy2}, nor P4 with DJ = I/&i4~,        has the property (7.5) and it is not
the case that the average value is necessarily less for the true model than for the
alternative.
   In summary, cross-validation, though clearly well intentioned, seems on close
inspection not likely to fulfill its promises. In the case of criterion P,, it selects
stable models when models which allow parameter drift might be better. In the
case of P2, it reduces to the suggestion that the usual least-squares residuals
should be weighted. This is hardly a major departure from selecting the model
with maximum adjusted R2; nor is it a desirable departure, if one of the models is
the true model.


7.3.    Goodness -of -fit tests

Goodness-of-fit tests are intended to establish the adequacy of a given model
without reference to specific alternatives. The most common of these is the
&i-square test due to Karl Pearson in 1900. If e, is the probability of observing an
event in class i, and oi is the observed relative frequency, then


       x2= t      (ei-oi)‘/~ef
            i=2                  i

asymptotically has a &i-square distribution with k - 1 degrees of freedom. For
example, a test of the assumption that observations x,, r = 1,. . . , n, come from a
standard normal distribution begins with a partitioning of the line into a set of
intervals li={x(ci<xgci+,}       for i=l,...,k   with c,= -cc and ck+,=cc. The
probability of drawing an observation from interval i is ei = F(ci+ ,)- F(c,),
where F is the cumulative of the standard normal. The hypothesis that observa-
tions are drawn from a standard normal distribution is rejected if the expected
relative frequencies ei differ substantially from the observed relative frequencies
Oi.
Ch. 5: Model Choice                                                                                 325

   The problem with this kind of a test is that the null hypothesis is virtually
impossible and will surely be rejected if the sample size is large enough. The
procedure therefore degenerates into an elaborate exercise to measure the effec-
tive sample size. Approximate hypotheses studied by Hodges and Lehman (1954)
are not rejectable at the outset and do not suffer this logical defect. Perhaps more
importantly, once having rejected the null hypothesis, in the absence of a null
defined alternative, it is hard to know where to turn.
   Goodness-of-fit tests are rare in economics but seem to be increasing in
popularity with the increased interest in “diagnostics”. Ramsey’s (1969, 1974)
work especially bears mentioning for the wrinkle of discriminating among alterna-
tive hypotheses on the basis of goodness-of-fit tests, that is, selecting the model
which passes a battery of goodness-of-fit tests.


8.   Conclusion

There is little question that the absence of completely defined models impinges
seriously on the usefulness of data in economics. On pessimistic days I doubt that
economists have learned anything from the mountains of computer print-outs
that fill their offices. On especially pessimistic days, I doubt that they ever will.
But there are optimistic days as well. There have been great advances in the last
decades. A conceptual framework within which to discuss the model selection
issues is emerging, largely because econometricians are learning about statistical
decision theory. A large number of results have been obtained and many seem
likely to be useful in the long run.


References

Akaike, H. (1973) “Information     Theory and an Extension of the Maximum Likelihood Principle”, in:
   B. N. Petrov and F. Csaki (eds.), ProeeedinRs of the Second International Symposium on Information
   Theory. Budapest: Akadem&       I&do, pp. 267-281.
Akaike. H. ( 1974) “A New Look at Statistical Model Identification”.     IEEE Transactions on Automatic
   Control, kc-19, 716-723.
Akaike, H. (1978) “A Bayesian Analysis of the Minimum AIC Procedure”, Annals of the Institute of
   Mathematical Statistics, 30, 9-14.
Akaike, H. (1979) “A Bayesian &tension         of the Minimum AIC Procedure of Autogressive       Model
   Pitting”, Riometrika, 66; 237-242.
Allen. D. M. (1971) “Mean Sauare Error of Prediction           as a Criterion  for Selecting Variables”,
   Technometrics, 13,‘469-475.     *
Allen, D. M. (1974) “The Relationship       Between Variable Selection and Data Augmentation       and a
   Method of Prediction”,   Technometrics, 16, 125- 127.
Amemiya, T. (1980)“Selection of Regressors”, International Economic Review, 21, 331-354.
Ames, Edward and Stanley Reiter (1961) “Distributions          of Correlation  Coefficients in Economic
   Time Series”, Journal of the American Statistical Association, 56, 637-656.
Anderson, T. W. (1951) “Estimating      Linear Restrictions  on Regression Coefficients for Multivariate
   Normal Distributions”,   Annals of Mathematical Statistics, 22, 327-351.
326                                                                                               E. E. Learner

Anderson, T. W. (1958) An Introduction to Multivariate Statistical Analysis. New York: John Wiley &
   Sons.
Anderson, T. W. (1962) “The Choice of the Degree of a Polynomial Regression as a Multiple Decision
   Problem”, Annals of Mathematical Srarisrics, 33, 255-265.
Ando, A. and G. M. Kaufman (I 966) “Evaluation            of an Ad Hoc Procedure for Estimating Parameters
   of Some Linear Models”, Review of Economics and Statistics, 48, 334-340.
Anscombe, F. J. and J. W. Tukey (1963) “The Examination               and Analysis of Residuals”,      Technomet-
   rics, 5, 141-160.
Anscombe, F. J. (1963) “Tests of Goodness of Fit”, Journal of the Royal Statistical Society, Ser. B 25,
   81-94.
Arrow, K. J. (I 960) “ Decision Theory and the Choice of Significance for the t-Test”, in: I. Olkin et al.,
   Contributions to Probability and Statistics. Essays in Honor of Harold Hotelling. Stanford: Stanford
   University Press.
Atkinson,     A. C. (1970) “A Method for Discriminating             Between Models”, Journal of the Royal
   Statistical Society, Ser. B 32, 323-353.
Beale, E. M. L. (1970) “A Note on Procedures                for Variable Selection in Multiple Regression”,
   Technometrics, 12, 909-914.
Belsley, D., E. Kuh and R. Welsch (1980) Regression Diagnostics. New York: John Wiley & Sons.
Chamberlain,     G. and E. Learner (1976) “Matrix Weighted Averages and Posterior Bounds”, Journal of
   the Royal Statistical Society, Ser. B 38, 73-84.
Chipman, J. S. (1964) “On Least Squares with Insufficient             Observations”,    Journal of the American
   Statistical Association, 59, 1078- 1111.
Chow, G. C. (1960) “Tests of Equality Between Sets of Coefficients                in Two Linear Regressions”,
   Econometrica, 28, 591-605.
Chow, G. C. (1979) “A Comparison           of the Information   and Posterior Probability Criteria for Model
   Selection”, unpublished.
Cohen, A. (1965) “Estimates        of Linear Combinations       of the Parameters     in the Mean Vector of a
   Multivariate Distribution”,    Annals of Mathematical Statistics, 36, 78-87.
Cohen, A. (1965) “A Hybrid Problem on the Exponential Family”, Annals of Mathematical Statistics,
   36, 1185-1206.
Cover, T. M. (I 969) “Hypothesis      Testing with Finite Statistics”, Annals of Mathematical Statistics, 40,
   828-835.
Cox, D. R. (1958) “Some Problems Connected with Statistical Inference”, Annals of Mathematical
   Statistics, 29, 352-372.
Cox, D. R. ( 196 1) “Tests of Separate Families of Hypotheses”,         Proceedings of the Berkeley Symposium
  on Mathematical Statistical Probability, vol. 1. Berkeley: University of California Press, pp. 105- 123.
Cox, D. R. (1962) “Further Results on Tests of Separate Hypotheses”,             Journal of the Royal Statistical
  Society, Ser. B 24, 406-424.
Degroot, M. H. (1970) Optimal Statistical Decisions. New York: McGraw-Hill.
Dempster, A. P. (1967) “Upper and Lower Probabilities             Induced by Multivalued       Maps”, Annals of
   Mathematical S’tatisfics, 38, 325-339.
Dempster, A. P. (1968) “A Generalization           of Bayesian Inference”, Journal of the Royal Statistical
  Society, Ser. B 30, 205-248.
Dempster, A. P. (1971) “Model Searching and Estimation in the Logic of Inference” (with discussion),
  in: V. P. Godambe        and D. A. Sprott (eds.), Foundations of Statistical Inference. Toronto: Holt,
  Rinehart and Winston, pp. 56-81.
Dempster, A. (1973) “Alternatives      to Least Squares in Multiple Regression”, in: D. G. Kabe and R. P.
  Gupta (eds.), Multivariate Statistical Inference. Amsterdam:            North-Holland     Publishing   Co., pp.
  25-40.
De Robertis, Lorraine (1979) “The Use of Partial Prior Knowledge in Bayesian Inference”, unpub-
  lished Ph.D. dissertation,   Yale University.
Dhrymes, P., et al. (1972) “Criteria for Evaluation of Econometric           Models”, Annals of Economic and
  Social Measurement, 1, 259-290.
Dickey, J. M. (1973) “Scientific Reporting and Personal Probabilities:          Student’s Hypothesis”,    Journal
  of the Royal Statistical Society, Ser. B 35, 285-305.
Dickey, J. M. (1975) “Bayesian Alternatives to the F-test and Least-Squares            Estimates in the Normal
  Linear Model”, in: S. E. Fienberg and A. Zellner (eds.), Bayesian Studies in Econometrics and
  Statistics. Amsterdam:     North-Holland     Publishing Co.
Ch. 5: Model Choice

Doyle, A. C. (1888) “A Study in Scarlet”, Reprinted in W. S. Baring-Gould                      (1967) The Annotated
   Sherlock Holmes. New York: Clarkson N. Potter, Inc.
Draper, N. R. and H. Smith (1966) Applied Regression Analysis. New York: John Wiley & Sons.
Durbin, J. (1953) “A Note on Regression When There is Extraneous Information                        About One of the
   Coefficients”, Journal of the American Statistical Association, 48,799-808.
Edwards, J. B. (1969) “The Relationship             Between the F-test and R2 “, American Statistician, 23, 28.
Efroymson,       M. A. (1960) “Multiple        Regression     Analysis”, in: A. Ralston and H. S. Wilf, (eds.),
   Mathematical Methods for Digital Computers. New York: John Wiley & Sons.
Ezekial, Mordecai (1930) and K. A. Fox (1960), Methods of Correlation and Regression Analysis:
   Linear and Curuilinear. New York: John Wiley & Sons.
Farrar, D. E. and R. R. Glauber (1967) “Multicollinearity                    in Regression Analysis: The Problem
   Revisited”, Review of Economics and Statistics, 49, 92-107.
Feldstein, M. (1973) “Multicollinearity            and the Mean Square Error Criterion”.            Econometrica, 41,
   337-346.
Ferguson, T. (1967) Mathematical Statistics: A Decision Theoretic Approach. New York: Academic
   Press.
Fienberg, S. E. and A. Zellner (eds.) (1975) Studies in Bayesiun Econometrics and Statistics. Amster-
   dam: North-Holland        Publishing Co.
Fisher, R. A. (1925), Statistical Methods for Research Workers. New York: Hafner.
Fisher, W. D. (1962) “Estimation           in the Linear Decision Model”, International Economic Review, 3,
   l-29.
Fischoff, B. (1975) “The Silly Certainty of Hindsight”,             Psycho&r       Today, 32, 72-77.
Frisch, R. (1934) Statistical Confluence Analysis by Means of Complete Regression Systems. Oslo:
   University Institute of Economics.
Furnival, George M. (1971) “All Possible Regressions With Less Computation”,                        Technomefrics, 13,
   403-412.
Furnival, George M. and R. W. Wilson, Jr. (1974) “Regression                  by Leaps and Bounds”, Technometrics,
   16,499-511.
Garside, M. J. (1965) “The Best Subset in Multiple Regression Analysis”, Applied Statistics, 14,
   196-201.
Gaver, K. M. and M. S. Geisel (1974) “Discriminating                   Among Alternative      Models: Bayesian and
   Non-Bayesian      Methods”, in: P. Zarembka           (ed.), Frontiers in Econometrics. New York: Academic
   Press, pp. 49-77.
Geisser, S. (1975) “The Predictive Sample Reuse Method with Applications”,                   Journal of the American
   Statistical Association, 70, 320-328.
Geisser, S. and Eddy, W. F. (1979) “A Predictive Approach                       to Model Selection”, Journal of the
   American Statistical Association, 74, 153-160:
Gorman,       J. W. and R. J. Toman (1966) “Selection of Variables for Fitting Equations                    to Data”,
   Technometrics, 8, 27-51.
Haitovsky, Y. (1969) “A Note on the Maximization                of R*“, American Statistician, 23, 20-21.
Halpem, E. F. (1973) “Polynomial             Regression from a Bayesian Approach”,           Journal of the American
   Statistical Association, 68, 137-143.
Hausman, J. A. ( 1978) “Specification          Tests in Econometrics”,        Econometricu, 46, 125 1- 1272.
Hausman, J. and W. E. Taylor (1980) “Comparing                   Specification    Tests and Classical Tests”, M.I.T.
   Working Paper no. 266.
Hellman, M. E. and T. M. Cover (1970) “Learning                   With Finite Memory”, Annals of Murhematicul
   Statistics, 41, 765-782.
Herrberg, P. A. (1969) “The Parameters of Cross Validation”,                  Psychometrika, 34, no. 2, part 2.
Hillier. G. ( 1977) “ Constrained      Linear Regression: Comparing the ‘Best Linear’ Estimator with Other
   Techniques”,     unpublished    Monarch Umversity Working Paper no. 21.
Hockine.      R. R. and R. N. Leslie (1967) “Selection             of the Best Subset in Regression        Analysis”,
   Techr&metrics, 9, 531-540.                ’ ’
Hocking, R. R. (1972) “Criteria           for the Selection of a Subset Regression:           Which One Should Be
   Used?‘, Technometrics, 14, 967-970.
Hocking, R. R. (1976) “The Analysis and Selection of Variables in Linear Regression”, Biomerrics, 32,
   l-49.
Hodges, J. L., Jr. and E. L. Lehmann                 (1954) “Testing      the Approximate      Validity of Statistical
328                                                                                      E. E. Learner

   Hypotheses”, Journal of the Rayal Statistical Society, Ser. B 16, 261-268.
Hoerl, A. E. and R. W. Kennard (1970a) “Ridge Regression: Biased Estimation for Nonorthogonal
   Problems”, Technometrics, 12, 55-67.
Hoerl, A. E. and R. W. Kermard (1970b) “Ridge Regression: Applications to Nonorthogonal
   Problems”, Technomerrics, 12, 69-82.
Hotelling, H. (1940) “The Selection of Variates for Use in Prediction With Some Comments on the
   Problem of Nuisance Parameters”, Annals of Mathematical Statistics. 11. 271-283.
Huntsberger, D. V. (1955) “A Generalization-of a Preliminary Testing Procedure for Pooling Data”,
  Annals of Mathematical Statistics, 26, 734-743.
James, W. and C. Stem (1961) “Estimation with Quadratic Loss”, in: Proceedings of the Fourth
   Berkeley Symposium on Mathematical Statistics and Probability, vol. I, pp. 361-379.
Jeffreys, H. (1957) Scientific Inference (2nd edn.). Cambridge: Cambridge University Press.
Jeffreys, H. (1961) Theory of Probability (3rd edn.). London: Oxford University Press.
Kennard, Robert (1971) “A Note on the C, Statistic”, Technometrics, 13, 899-900.
Kennedy, W. J. and T. A. Bancroft (197 1) “Model Building for Predicting in Regression Based Upon
   Repeated Significance Tests”, Annals of Mathematical Statistics, 42, 1273-1284.
Keynes, J. M. (1921) A Treatise on Probability. New York: Harper and Row.
Keynes, J. M. (1933, 1951) in: Geoffrey Keynes (ed.), Essays in Biography. New York: Horizon Press
   (paperback by Norton, 1963).
Kiefer, J. and J. Wolfowitz (1956) “Consistency of Maximum Likelihood Estimator in the Presence of
   Infinitely Many Nuisance Parameters”, Annuls of Mathematical Statistics, 27, 887-906.
Klein, G. E. (1968) “Selection Regression Programs”, Review of Economics and Statistics, 50,288-290.
Kmenta, J. (1971) Elements of Econometrics. New York: John Wiley & Sons, Inc.
Kruskal, W. H. (1978) “Tests of Significance”, in: W. H. Kruskal and J. M. Tamtr (eds.), International
   Encyclopedia of Statistics, vol. 2. New York: The Free Press, pp. 944-958.
Lamotte, L. R. and R. R. Hocking (1970) “Computational Efficiency in the Selection of Regression
   Variables”, Technometrics, 12, 83-93.
Larson, H. J. and T. A. Bancroft (1963a) “Biases in Prediction by Regression for Certain Incompletely
   Specified Models”, Biometriku, 50, 391-402.
Larson, H. J. and T. A. Bancroft (1963b) “Sequential Model Building for Prediction in Regression
   Analysis”, Annals of Muthematical Statistics, 34, 462-479.
Learner, E. E. (1973) “Multicollinearity: A Bayesian Interpretation”, Review of Economics and
   Statistics, 55, 371-380.
Learner, E. E. (1974) “False Models and Post-Data Model Construction”, Journul of the American
   Statistical Association, 69, 122-131.
Learner, E. E. (1975) “A Result on the Sign of Restricted Least Squares Estimates”, Journal of
   Econometrics, 3, 387-390.
Learner, E. E. and G. Chamberlain (1976) “A Bayesian Interpretation of Pretesting”, Journal of the
   Royal Statistical Society, Ser. B 38, 85-94.
Learner, E. E. (1977) “SEARCH, A Linear Regression Computer Package”, mimeo.
Learner, E. E. (1978) “Regression-Selection Strategies and Revealed Priors”, Journul of the American
   Statistical Association, 73, 580-587.
Learner, E. E. (1979) “Information Criteria for Choice of Regression Models: A Comment”,
   Econometrica, 47, 507-510.
Learner, E. E. (1979) Specification Searches. New York: John Wiley & Sons.
Learner. E. E. (1982) “Sets of Posterior Means With Bounded Variance Priors”. Econometrica. 50.
   725-i36.       \     ’
Lempers, F. B. (1971) Posterior Probabilities of Alternative Linear Models. Rotterdam: Rotterdam
   University Press.
Lindley, D. V. (1968) “The Choice of Variables in Multiple Regression”, Journal of the Royal
   Statistical Society, Ser. B 31, 31-66.
Lindley, D. V. (1971a) Buyesiun Statistics, A Review. Regional Conference Series in Applied Mathe-
   matics, S.I.A.M.
Mallows, C. L. (1973) “Some Comments on C “, Technometrics, 15, 661-675.
Massy, W. F. (1965) “Principal Components ti egression in Exploratory Statistical Research”, Journal
   of the American Statistical Association, 60, 234-256.
Mayer, T. (1975) “Selecting Economic Hypotheses by Goodness of Fit”, Economics Journal, 85,
   877-882.
Ch. 5: Model Choice                                                                                  329

Neyman, Jerzy (1958) “The Use of the Concept of Power in Agricultural Experimentation”,    Journal    01
  Indian Society of Agricultural         Statistics,   2, 9- 17.
Neyman, Jerry and E. S. Pearson (1928) “On the Use and Interpretation of Certain Test Criteria for
  Purposes of Statistical Inference”, Biometrika, 20A, 175-240, 263-294.
Neyman, Jerzy, and E. S. Pearson (1933) “On the Problem of the Most Efficient Tests of Statistical
  Hypotheses”, Royal Society of London, Philosphical Transactions, Series A 23 1, 289-337.
Pearson, Karl (1900) “On the Criterion that a Given System of Deviations From the Probable in the
  Case of a Correlated System of Variables is Such that it Can Be Reasonably Supposed to Have
  Arisen From Random Sampling”, Philosophical Magazine, 5th Ser., 50, 157-175.
Pereira, B. de B. (1977) “Discriminating Among Several Models: A Bibliography”, International
  Statistical   Review, 45, 163-172.
Quandt, R. E. (1974) “A Comparison of Methods for Testing Nonnested Hypotheses”, Review of
  Economics and Statistics,        56, 92-99.
Raduchel, W. J. (1971) “Multicollinearity Once Again”, Harvard Institute of Economic Research
  Paper no. 205.
Raiffa, H. and R. Schlaifer (1961) Applied Statistical Decision Theory. Cambridge, Mass.: Harvard
  University Press.
Ramsey, J. B. (1969) “Tests for Specification Errors in Classical Linear Least-Squares Regression
  Analysis”, Journal of the Royal Statistical Society, Ser. B 3 1, 350-371.
Ramsey, J. B. (1974) “Classical Model Selection Through Specification Error Tests”, pp. 13-47 in: P.
  Zarembka (ed.), Frontiers in Econometrics, Academic Press.
Sawa, T. (1978) “Information Criteria for Discriminating Among Alternative Regression Models”,
  Econometrica,        46, 1273-1291.
Schatzoff, M., R. Tsao and S. Fienberg (1968) “Efficient Calculations of All Possible Regressions”,
  Technometrics, 10, 769-780.
Schmidt, P. (1973) “Calculating the Power of the Minimum Standard Error Choice Criterion”,
  International   Economic Review,           14, 253-255.
Schmidt, P. (1974) “Choosing Among Alternative Linear Regression Models”, Atlantic Economic
  Journal, 1, 7-13.
Schwarz, G. (1978), “Estimating the Dimension of a Model”, Annals of Statistics, 6, 46-464.
Sclove, S. L., C. Morris and R. Radhakrishnan (1972) “Non-optimality of Preliminary-Test Estima-
  tors for the Mean of a Multivariate Normal Distribution”, Annals of Mathematical Statistics, 43,
  1481-1490.
Sen, P. K. (1979) “Asymptotic Properties of Maximum Likelihood Estimators Based on Conditional
  Specifications”, Annals of Statistics, 7, 1019-1033.
Shafer, Glenn (1976) A Mathematical Theory of Euidence. Princeton: Princeton University Press.
Shafer, Glenn (1978) “Non-additive Probabilities in the Work of Bernoulli and Lambert”, Archioes for
  History of Exact Sciences,        19, 309-370.
Smith, Gary and Frank Campbell (1980) “A Critique of Some Ridge Regression Methods”, Journal of
   the American Statistical Association, 75, 74- 103.
Stein, C. (1956) “Inadmissibility of the Usual Estimator for the Mean of a Multivariate Normal
  Distribution”, in: Proceedings of the Third Berkeley Symposium on Mathematical Statistical Proha-
  hi&y, vol. 1, pp. 197-206.
Stone, M. (1974) “Cross-validatory Choice and Assessment of Statistical Predictions”, Journal of the
   Royal Statistical Sociely, Ser. B 36, 111-147.
Stone, M. (1977)“An Asymptotic Equivalence of Choice of Model by Cross-Validation and Akaike’s
  Criterion”, Journal of the Royal Statistical Society, Ser. B 39, 44-47.
Stone, M. (1978) “Cross-Validation: A Review”, Mathematische Operationsforschung und Statistik:
  Series Statistics,    9, 127-139.
Stone, Charles (1979) “Admissible Selection of an Accurate and Parsimonious Normal Linear
   Regression Model”, unpublished discussion paper.
Strawderman, W. E. and A. Cohen (1971) “Admissibility of Estimators of the Mean Vector of a
   Multivariate Normal Distribution With Quadratic Loss”, Annals of Mathematical Statistics, 42,
  270-296.
Theil, H. (1957) “Specification Errors and the Estimation of Economic Relationships”, Reuiew of the
  International   Statistical   Institute,   25, 41-5   1.
Theil, H. (197 1) Principles of Econometrics. New York: John Wiley & Sons.
330                                                                                         E. E. Learner


Theil, H. and A. S. Goldberger        (1961) “On Pure and Mixed Statistical Estimation      in Economics”,
  International Economic Review, 2, 65-78.
Thompson,     M. L. (1978) “Selection of Variables in Multiple Regression:          Part I. A Review and
  Evaluation”,    International Statistical Review, 46, I-19; “Part II. Chosen Procedures, Computations
  and Examples”, 46, 129- 146.
Toro-Vizcarrondo,      C. and T. D. Wallace (1968) “A Test of the Mean Square Error Criterion for
  Restrictions in Linear Regressions”, Journal of the American Statistical Association, 63, 558-572.
Wallace, T. D. (1964) “Efficiencies        for Stepwise Regressions”,  Journal of the American Statistical
  Association, 59, 1179-I 182.
Wallace, T. D. and V. G. Ashar (1972) “Sequential            Methods of Model Construction”,      Rwiew of
   Economics and Statistics, 54, 172-178.
Watson, S. R. (1974) “On Bayesian Inference With Incompletely              Specified Prior Distributions”,
  Biometrika, 61, 193-196.
Wu, D. (1973) “Alternative      Tests of Independence   Between Stochastic Regressors and Disturbances”,
  Econometrica, 41, 733-750.
Zellner, A. (I 97 I) An Introduction to Bayesian Inference in Econometrics. New York: John Wiley &
   Sons.



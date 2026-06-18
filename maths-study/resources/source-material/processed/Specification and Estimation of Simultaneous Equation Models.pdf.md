---
normalized_id: shared-pdf-reference-specification-and-estimation-of-simultaneous-equation-models
exam_code: SHARED
material_scope: specification and estimation of simultaneous equation models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Specification and Estimation of Simultaneous Equation Models.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-specification-and-estimation-of-simultaneous-equation-models

Chapter 7


SPECIFICATION AND ESTIMATION
OF SIMULTANEOUS EQUATION MODELS
JERRY       A. HAUSMAN*

Massachusetts    Institute of Technology




Contents

1.   Introduction                                                                                  392
2.   Model specification                                                                           396
3.   Identification                                                                                402
4.   Estimation                                                                                    408
     4.1.     Single equation    estimation                                                        408
     4.2.     System estimation                                                                    413
     4.3.     Reduced-form      estimation                                                         417
     4.4.     Maximum      likelihood   estimation                                                 418
     4.5.     Estimation   with covariance     restrictions                                        426
     4.6.     Other considerations                                                                 428
5. Specification tests                                                                             430
6. Non-linear specifications                                                                       436
References                                                                                         445




   *I would like to thank A. Deaton, F. Fisher, W. Newey, D. Pokier,    P. Ruud,   W. Taylor,   and the
editors for helpful comments. The NSF provided research support.


Handbook of Econometrics, Volume I, Edited by 2. Griliches and M.D. Intriligator
0 North-Holland Publishing Company, 1983
392                                                                    J. A. Hausman




1.    Introduction

The simultaneous equation model is perhaps the most remarkable development in
econometrics. Many of the models used in the statistical analysis of economic
data arose from previous work in statistics. Econometric research has, of course,
led to further developments and applications of these statistical models. But in
the case of the simultaneous equation problem, econometrics has provided unique
insight. And this insight arises from economic theory in terms of the operations of
markets and the simultaneous determination of economic variables through an
equilibrium model. Consider a linear regression specification which relates the
quantity purchased of a commodity to its price at time t:




 where Z, is a k x 1 vector of other variables thought to affect the relationship.
 What economic meaning can be given to the statistical specification of eq. (l.l)?
 More explicitly, is eq. (1.1) a demand curve or a supply curve or should we
 examine the least squares estimate a, to decide upon our answer?
    The econometricians’ answer is that both quantity and price are simultaneously
 determined by the actions of the market so that to understand the quantity and
 price relationship we need to treat the two variables as jointly endogenous. Thus,
 eq. (1.1) considered in isolation is not sufficient to determine the economic
 meaning of the statistical relationship. Instead, we must consider a more complete
 model in which both quantity and price are determined simultaneously by the
 operation of economic markets. With joint endogeneity, least squares becomes the
 wrong statistical technique to use in estimation of the unknown coefficients of eq.
 (1.1). The implications of joint endogeneity of variables give the simultaneous
 equation model its unique characteristics which distinguishes it from most other
 regression type models in statistics. Developments in both identification and
 estimation of simultaneous equation models arise from the jointly endogenous
 feature of economic variables when they are treated from either a theoretical or
 statistical viewpoint.
    The seminal papers from which the simultaneous equation model developed
 established the importance of joint endogeneity for statistical analysis of eco-
nomic relationships. Haavelmo (1943, 1944) realized that in the presence of
jointly endogenous variables that a joint probability distribution was necessary to
analyze the data. He also distinguished the essence of the identification problem
Ch. 7: Simulraneour Equation Models                                                                   393

which arises in the attempt to determine what meaning can be given to specifica-
tions like eq. (1.1):
     Clearly no more complete description of the interconnections between
     certain random variables can be given than that which is formulated in their
     joint probability law. If, therefore, two different formulations of an economic
     theory lead to identically the same joint probability law of the observed
     random variables involved, we can not distinguish between them on the basis of
     observations [Haavelmo (1944, p. 8X), his emphasis].’
We now return to our demand and supply example to see the importance of the
concepts of identification and joint endogeneity for our statistical model. Let us
specify eq. (1.1) to be the demand curve where we limit Z, to a single variable,
consumer income, for simplicity. We then specify the supply curve as

     P, = a0   +   (Y,qt + w,s + vt.                                                               (l-2)
Again to simplify we let W, consist of a single variable, say the wage rate. We
assume that both Z, and F are determined exogenously to our model in the sense
that both are (asymptotically) uncorrelated with the stochastic residuals at and q,.
But in general neither pt nor q, can be taken as exogenous even in the particular
equation in which they appear on the right-hand side because even if E( and vlt are
independent, pt is not uncorrelated with E, and likewise for qt and 9,. The
variables q, and p, are jointly endogeneous and require non-standard statistical
treatment.
   Before even considering questions of estimation, the problem of identification
must be settled first. We have agreed to call eq. (1.1) the demand curve and eq.
(1.2) the supply curve, but can we actually distinguish them statistically? Without
the presence of Z, and K our position is hopeless, because we would simply
observe a scatter of points near the, intersection (equilibrium position) of the
demand and supply curves. The scatter would arise only because of the stochastic
disturbance; and no statistical estimation procedure could establish the position
of the demand or supply curve in price-quantity space from the observation of a
single point perturbed by stochastic disturbances. But a change in Z, in eq. (1. I),
independent of E, and v~, causes the demand curve to shift and permits points on
the supply curve to be established. Likewise, shifts in W,, again independent of E,
and qr, shift the supply curve so that points on the demand curve can be
established. It is interesting to note that exogenous shifts in variables in the other

   ‘Of course, Haavelmo’s research had many antecedents.      Working (1927) gave an early account of
the identification problem. Joint endogeneity (although not caused by simultaneous      determination   of
economic variables) might be said to have arisen first in the errors in variables problem in regression.
Adcock (1878) is the first reference that I know to the errors in variables problem.
394                                                                                       J. A. Hausman

equation lead to identification of the equation in question. This finding is the
basis for the previous remark than an equation cannot be considered in isolation
but that a more complete model is required. Koopmans (1949) Koopmans and
Reiersol(1950), and Koopmans, Rubin and Leipnik (1950) established conditions
for identification in linear simultaneous models. We will further consider the
identification problem in Section 3.
   We now turn to statistical estimation. What are the properties of our estimates
if we use least squares on eq. (1. l)? Let us assume that we measure all variables in
deviations from their means so that & and (~a are eliminated. The least squares
estimate of p, will be biased because of the correlation of pr with Edand it has a
probability limit

      plim fi I,oLs = P, +plim [( TP
                                  ’ ’Q=P)-‘(+P’Qz$                                                 (1.3)

where Q, = Z - Z( Z’Z)- ‘Z’.2 The second term in eq. (1.3) is not zero because
solving eqs. (1.1) and (1.2) in terms of the exogenous variables and the residuals
yields


      pt=   l_;a (~,z*Y+w~+~l~t+%)~
                   I   1
                                                                                                   (1.4)
Since tt appears in the reduced-form equation for pr, its presence leads to both
bias and inconsistency in 8,. The direction of the bias depends on the magnitude
of (r, as well as the covariance between E, and qlr. Thus, least squares is an
inappropriate estimator, in general, for the simultaneous equation model specifi-
cation. But it turns out that an intimate relationship exists between identification
and estimation in simultaneous equation models: an identified model can always
be consistently estimated. We use W,, the identifying variable from the other
equation in our model, as an instrumental variable to find

      B 1.1~= CW’Qd’W’Q,q.                                                                         0.5)
We now have a consistent estimator because

      BI.N=P+p$(+ f              ~'Q,P)-'(          W'BrE)].                                       (1.6)
So long as the first term in brackets has a finite plim, consistent estimation occurs

   ‘Haavelmo (1944) was first to point out that least squares estimates of the coefficients of a
structural equation are inconsistent. For a simple example he derived the plim of the inconsistent
estimation. His argument against least squares is based on the correct point that the conditional
expectation of the residuals given the right-hand-side variables is not zero, i.e. some of the right-hand-
side variables are jointly endogenous.
Ch. 7: Simultaneous   Equation Models                                                              395

because the second term has a zero plim under the assumption that W and z are
exogenous. Thus, just the variable that led to identification of the demand curve
also provides us with the means to estimate consistently its parameters. This point
is the basis for Haavelmo’s discussion of the simultaneous equation problem.
   I shall use the concept of instrumental variables to organize this survey. The
most important set of identification conditions, namely coefficient restrictions,
involves determining whether a sufficient number of instruments are available [cf.
Fisher (1966)]. Furthermore, it has recently been proven that the other type of
identification restrictions used in linear simultaneous equation models, namely
covariance restrictions, are also most easily understood in terms of instrumental
variables [Hausman and Taylor (198Oa)l. In terms of estimation almost all
consistent estimators are either instrumental variables estimators or asymptotic
approximations to them. The original maximum likelihood estimator (FIML)
proposed for the simultaneous equation model is an instrumental variable estima-
tor [Hausman (1975)]; other estimators rely on asymptotic approximations to the
basic likelihood equations [Hendry ( 1976)].3 Estimation is considered in Section 4.
   Two other interrelated notions that we consider are the endogeneity-exogeneity
concept and tests of specification. We have emphasized joint endogeneity as the
principle behind simultaneous equations models. Yet both identification and
estimation rest on an exogeneity assumption, as our example indicates. We
attempt to explore this assumption from a statistical point of view. The question
naturally arises of whether the key exogeneity assumptions are testable, perhaps
using recently developed techniques on causality from time-series analysis. The
answer is no. If we have a surplus of exogenous variables, then a subset may be
tested for endogeneity. But these tests depend on the maintained assumption of
exogeneity in other variables. Specification tests look at questions of endogeneity
and also at coefficient restrictions. In empirical work they are not used as often as
they should be. In Section 5 we consider exogeneity tests and specification tests in
reference to the simultaneous equation model.
   Finally, in Section 6 we briefly consider the non-linear simultaneous equation
model. In the general case it appears that identification ceases to be a problem.
Consistent estimation by instrumental variables or by minimum distance estima-
tors is possible [Amemiya (1974b)]. Yet at the present time problems which arise


   3Another possible classification of estimators arises from a minimum distance (minimum chi square)
interpretation. Malinvaud (1970) and Rothenberg (1973) use this approach. We consider this approach
in Section 4. The reason that I prefer the instrumental variable approach is because it carries over to
the case of non-linear simultaneous equations. As results in Section 6 demonstrate, the attraction of
maximum likelihood estimation is reduced in the non-linear case because consistent estimation usually
requires correct specification of the unknown stochastic distributions. Instrumental variable estima-
tion does not require knowledge of the distributions. Furthermore, maximum likelihood is a particular
application of instrumental variables, but not vice versa. Minimum distance estimation is severely
limited in the non-linear case by the non-existence of a convenient reduced-form expression.
 396                                                                                         J. A. Hausman

with estimation by maximum likelihood estimation have not been completely
resolved.


2.     Model specification

Three basic specifications have been used in the interpretation of linear simulta-
neous equation models: the structural form, the reduced form, and the recursive
form. The structural form has stochastic equations and sometimes accounting
identities which correspond to the basic economic theory underlying the model. It
typically contains all the economic knowledge that we are able to include in the
model. The demand and supply example of the previous section is a simple
example of a structural model. The major difference between structural models
and more traditional linear models in statistics is the presence of jointly endog-
enous variables. The reduced-form model can be obtained from the structural
model by a non-singular linear transformation.4 The joint endogeneity is
eliminated from the model by the reduced-form transformation as each endog-
enous variable can be written as a linear function of only exogenous variables.
Thus, the reduced-form specification is similar to the well-known multivariate
least squares regression specification (although non-linear parameter constraints
are typically present). The question might well be asked: Why then do we need
the structural form?5 Estimation and prediction might well proceed with the
reduced form. The traditional answer is that the change in one structural equation
will change the entire (restricted) reduced form. I do not find the answer
particularly persuasive because we could re-estimate the reduced form after a
structural change occurs.
   Can a case be made for structural estimation? First, structural models provide a
crucial inductive method to increase our knowledge about economic relationships
and to test hypotheses about economic behavior. Almost all economic theory is
concerned with structural models so that the unresolved questions of economics
will usually be set within a structural framework. Also, when one considers a
reduced form it contains all the current and lagged exogenous and endogenous
(or predetermined) variables in the model on the right-hand side. We often will
not have enough observations to estimate such a model in unrestricted form.6


   41t is important to note that while the reduced form follows in a straightforward        manner from the
structural     model in the linear case, usually no simple reduced-form        specification   exists in the
non-linear case.
   5Transformation      from a structural form to a reduced form with regression properties         cannot in
general be accomplished       in the non-linear simultaneous equation model. Important differences arise in
identification    and estimation from the presence of non-linearities.
   %ince all restrictions arise from the structural model, specification and estimation of reduced-form
models would presumably be done on unrestricted            models.
Ch. 7: Simultuneour   Equation Models                                                               391

 Arguments have been put forth [Liu (1960) and Sims (1980)] that in reality
 structural models would also contain all endogenous and exogenous variables
without identification being possible. Thus, they do not escape the problems
 inherent in reduced-form estimation. Models are always at best approximations to
reality. It seems that whichever approach is taken, either structural specifications
 or reduced-form specifications, restrictions on either the structural form or
reduced form will be necessary for estimation to be possible.7 Economic theory
provides some guidance about restrictions on the structural form which in part
can be tested, while we have little theory to guide us about which variables to
omit from a reduced-form specification. Lastly, while we can always go from the
 structural form to the reduced form, the reverse transformation is impossible to
perform when the unrestricted reduced form is used. It is unclear how much we
can learn about economic behavior by specification and estimation of a reduced
form unless it is derived from a structural form.* This point may have important
implications for the analysis of economic policy. If a structural parameter were to
change, perhaps because policymakers change their behavior, analysis via the
 structural form may be useful. Possible analysis via the unrestricted reduced form
seem quite limited here.
    The last specification, the recursive form, can also be derived from the
structural form via a non-singular linear transformation. In unrestricted form the
recursive form can be estimated by least squares type techniques. However,
interpretation of the resulting parameter estimates is not straightforward. More-
over, severe restrictions have to be placed on the distribution of the stochastic
disturbances for least squares to yield consistent estimates and for the parameters
to be readily interpretable. Without the restrictions the recursive form has little to
add to the analysis beyond the structural form and the reduced form. Very little
research is currently done on recursive-form specifications of simultaneous equa-
tion models. In previous work Wold (1964) and others have argued that the
structural form is naturally recursive so that least square type techniques are
appropriate because the structural specification takes the recursive form. But the
necessary assumptions for the recursive specification are usually beyond accep-
tance. However, the use of a block recursive specification is sometimes made so
that analysis of a large econometric model may be simplified [Fisher (1966, ch. 4)
and Koopmans (1950)].



   7Fisher (1961) considers the effects on identification and estimation when the restrictions are very
close to true but not exactly met.
   *For forecasting purposes we have many unresolved questions about what type of model might be
more aunronriate. For further discussion, see Fair (Chanter 33 in this Handbook). To the extent the
unres&ted*reduced     form is used to test the structuri specification, it is an underutilized tool of
econometric methodology. We discuss such tests in Section 5. Use of the reduced form for tests of
dynamic specification may also be quite important.
398                                                                               3. A. Hawman

  The general specification of a linear structural model is
      YB+ ZT-U,                                                             (2.0
where Y is the T X A4 matrix of jointly endogenous variables, Z is the T x K
matrix of predetermined variables which contains both exogenous and lagged
endogenous variables, and U is a T X A4 matrix of the structural disturbances of
the system. The matrices B and r consist of unknown parameters to be estimated
as well as known values (usually zeros) which arise from a priori economic
knowledge. We assume that all identities have been substituted out of the system
which typically may lead to an arithmetic combination of some of the original
economic variables. We also assume that all variables are accurately measured
because a consideration of errors in variables in simultaneous equation models
would lead us too far afield.’
   We now consider some assumptions that permit statistical analysis of the
structural equation model of eq. (2.1).
Assumption 2. I
B is a non-singular matrix.
The non-singularity assumption allows us to solve for the endogenous variables in
terms of the predetermined variables, i.e. to solve for the reduced form. We can
write the reduced form after postmultiplication of eq. (2.1) by B-’ as

      Y= - ZTB-‘+UB-‘=ZH+V.                                                               (2 4
If contrary to assumption, B were singular, then the model does not provide a
complete theory of the determination-of the endogenous variables. Also, eq. (2.2)
demonstrates that a small structural disturbance could lead to an infinite change
in some of the dependent variables. Such an event is contrary to most economic
theory.
Assumption 2.2.
Z has full column rank equal to k.
 We rule out linear dependence so that the reduced form has a unique interpreta-
tion in terms of its unknown coefficients.
Assumption 2.3
The rows of U are independent and identically distributed. U has mean zero and
non-singular covariance matrix 263 IT. (Thus, the t th row of U, denoted U,, has
mean zero and covariance matrix X.)

  ‘Some recent work in this area is found in Goldberger (1970),Geraci (1977,1978), Hausman (1977),
and Hsiao (1976). Also, see Aigner, Hsiao, Kapteyn and Wansbeek (Chapter 23 in this Handbook).
Ch. 7: Simultaneous Equation Models                                              399

We assume independence of the structural disturbances across time and allow
only for contemporaneous covariance in the case of time-series model specifica-
tions. Non-independence across time is briefly treated in subsequent sections, but
is left mainly to other chapters in this Handbook which deal with time-series
problems. For cross-section model specifications we are assuming independence
of the structural disturbances across individuals who would be indexed by t. Note
that with these three assumptions, all information contained in the structural
model is also contained in the reduced-form model. In particular, the reduced-form
model determines the conditional distribution (on 2) of the endogenous variable
since V has mean zero and non-singular covariance matrix 0@1,, where D =
B-“_ZB-‘.      We now consider a more precise statistical definition of jointly
endogenous and predetermined variables. We separate the exogenous variables
into two sets, truly exogenous variables R and lagged endogenous variables Ya
which occur before the start of the sample period. The variables Y, are treated as
initial conditions for the analysis that follows which is done conditionally on Y,.
We consider the joint probability distribution of U, R, and Y0which by eq. (2.2)
determines the joint distribution of Y:

     G(U,R, y,) = G,(UIR,Y,)G,( R, I’,).                                       (2.3)

A decomposition of a joint distribution into conditional and marginal distribu-
tions is always possible, but the importance of the exogenous variable assumption
arises from
Assumption 2.4

     G,(UIR,Y,) = G(U).                                                        (2.4)
Thus, the conditioning information adds no knowledge to the joint distribution of
U which is assumed independent of all fiast, current, and future realizations of the
exogenous variables. As Assumption 2.4 makes clear, the distribution of exoge-
nous variables is independent of the structural population parameters. This
assumption corresponds to the Koopmans et al. (1950, p. 56) definition: “[exoge-
nous variables] are defined as variables that influence the endogenous variables
but are not themselves influenced by the endogenous variables.” In particular
note that an implication of eq. (2.4) is EU = E(UI R, Y,) = 0.
   We now turn to the other component of predetermined variables, namely
lagged endogenous variables. Clearly, the conditioning argument is nonsensical
here because knowledge of a realization of a lagged endogenous variable together
with the right-hand-side variables from the previous period certainly imparts
information about the distribution of the stochastic disturbances in the previous
period. But an implication of our assumptions is that if we consider the marginal
distribution of V,, which corresponds to a row of the U matrix, this marginal
400                                                                                J. A. Hamman

distribution equals the conditional distribution          given the knowledge of all past
realization of the endogenous variables

      G,(U,)=G,(U,IR,Y,,Y(-)),                                                             (2.5)

where Y( - ) denotes lagged endogenous variables. Lagged endogenous variables
can thus be treated along with R and Y, as predetermined at a particular point in
time because they are not affected by the realization U,. Thus, the assumption of
temporal independence allows an important simplification since Y( -) can be
solved for in terms of exogenous variables and lagged stochastic disturbances
assumed independent of current stochastic disturbances.
   We have attempted a definition of variables which corresponds to the frame-
work of Koopmans (1950). A time-series perspective on these issues is also
present in Zellner and Pahn (1975) and Wallis (1977). Further understanding may
be gained from the following considerations. Given our assumptions, suppose we
want to estimate the model by maximum likelihood. By Assumption 2.4 we need
to choose a parametric form for G. Suppose for the moment that all prede-
termined variables are exogenous with no lags. Let t9 denote all unknown
parameters. We have the joint density:


      fWW)=gW~z,~)
                                  1$ 1=g,(u,e,lz)[~]g,(z,e,).
The Jacobian of the transformation for the linear case is lBlT which is non-zero by
Assumption 2.1. So long as the unknown parameter vector 8 can be separated
into two parts so that 8, and 0, are separate from an estimation point of view,
then the exogenous variables can be taken as fixed numbers for purposes of
estimation of 8, by ML.” Thus, f( Y, Z, 8) can be understood as two consecutive
experiments (by nature). The first experiment chooses Z as a function of e,
through g,(Z, t9,). This first experiment does not give any information regarding
the parameters’ of interest, 8,. Given the realized values of Z, the second
experiment yields information on 8, only. The additional knowledge of g,(Z, 0,)
is irrelevant since all information about 8, arises from the second experiment.
This setup corresponds to R. A. Fisher’s (1935, 1956) definition of ancillurity.
Here, it is certainly the case that inference on 8, depends on the first experiment
since inference is typically done conditional upon its outcome. The first experi-
ment affects the precision of our inference about 8,, but not the direct inference
itself.” Furthermore, as I emphasized in Hausman (1975), it is the presence of the

  “Note that inference regarding the parameters may well depend on the distribution g2 given the
conditional form of equation (2.6).
  “Of course this statement does not imply that the precision about 8, can be improved by further
analysis of gz <2, 0,).
Ch. 7: Simultaneous    Equation Models                                                                      401

Jacobian term that distinguishes the jointly endogenous variables in simultaneous
equation estimation by ML and removes estimation from the least squares
framework.
   When lagged endogenous variables are included, we shall assume that Y, is
fixed in repeated samples. The Jacobian of the transformation then becomes

          -au, -au, ... -au,
          ah          ah                 JYl
           0          au, ... au,
                      dY2                ah
           0           0        *         .
                                                                                                         (2.7)
                       0



           0           0


Again, knowledge of previous realizations of endogenous variables do not alter
the distribution of the U,. But note that if the Ut’s are not assumed independent,
lagged endogenous variables are no longer predetermined in a statistical sense but
instead become jointly endogenous. The factorization present in eq. (2.6) thus
seems to be a useful way of characterizing statistical exogeneity in that the joint
distribution can be separated into a conditional and marginal distribution with
unknown parameters also separated into two subvectors, using the notion of
ancillarity. The further extension to predetermined variables then can be made
when the assumption of independence of stochastic disturbances is made.”
   The recursive form can be derived from the structural form of eq. (1.1) by
finding a matrix P which simultaneously diagonalizes Z and triangular&es B.
Since _S is symmetric positive definite and B non-singular, at least one such
matrix P exists.13 Postmultiplication yields

       YBP+ZrP=UP                   or   YC+ZD=W.                                                       w9

    “Engle et al. (1981) take a somewhat different approach         to the definition of exogeneity.      It is
important to note that a given variable may be jointly endogenous with respect to one equation in a
structural  system but predetermined     with respect to another equation. Examples of such “relative
recursivity” are presented in the next section. In these cases the factorization    of (2.5) need not be for
the entire structural system, but instead it is for a given equation being estimated which corresponds
to a subvector of B,.
    13P can be found by the following method. Take the reduced-form       system of eq. (2.2), Y - ZII = V.
Then take the Cholesky factorization        9-l = RR’, where R is a lower triangular           matrix. Thus,
YR - ZIlR = VR so that var(VR) = I,. Then rescale so that 5) = 1 for the conventional              normaliza-
tion. Therefore, P = B- ‘R A, where A is the diagonal resealing matrix.
 402                                                                                            J. A. Haurman


C is now lower triangular and var( W) = A2, a diagonal matrix upon choice of
renormalization. It was once claimed that the recursive form has special ad-
vantages in estimation. However, in fact it has no particular advantage over either
the structural form or reduced forms from which it can be derived. Furthermore,
the parameter matrices C and D are mixtures of structural slope coefficients and
covariance coefficients as can be seen by the construction of P. Given our usual
almost complete lack of knowledge regarding 2, the recursive-form coefficients
are even more difficult to interpret than are the reduced-form coefficients II. Of
course, if the structural specification took the special form of eq. (2.8) without any
needed transformation, i.e. P is the identity matrix, then special characteristics do
occur. Basically, the simultaneous equation problem disappears because no spe-
cial problems of identification or estimation beyond the usual least squares case
occur, as we demonstrate in the next section. However, the specification of B as
triangular and Z as diagonal seems unacceptable in most model specifications.
While the recursive form offers few advantages and is now not often used, it does
provide a useful reference point for special cases of the structural form. We will
see this distinction as we now turn to identification of simultaneous equation
models.


3.     Identification

 Identification in parametric statistical models has an extremely simple form.
 Suppose we intend to estimate the unknown parameter 0 from eq. (2.6). The
identification assumption, which is a regularity condition for the consistency of
maximum likelihood, states there cannot exist 8 * 8 such that f(Y, 2, 0’) =
f(Y, 2, 0) for all Y and Z. In the linear simultaneous equation model, where we
estimate the conditional form of eq. (2.6), the parameter vector of interest
8, = (B, r, A’). The identification assumption then determines whether the a priori
structural assumptions are sufficient to guarantee the uniqueness of (B, r, 2).
Often we may similarly be interested in a subset of the parameters, say B, and r,,
the first columns of B and r, which correspond to the parameters of the first
equation. We would then partition 8, and discuss identification of the subset of
parameters in terms of the non-existence of alternative subvectors which lead to
the same density function. A considerable body of literature has arisen on this
topic. Koopmans (1949) and Koopmans, Rubin and Leipnik (1950) solved the
identification problem for the case of linear restrictions on B and r. Fisher (1966)
reinterpreted the Koopmans’ conditions and also considered linear restrictions on
the elements of E. Wegge (1965) also considered covariance restrictions. Recently,
Hausman and Taylor (1980) have provided convenient sufficient conditions for
the case of restrictions on Xl4

  14Hsiao (Chapter      4 in this Handbook)      also discusses   identification   of simultaneous   equation
models. He discusses    the case of errors in variables also.
Ch. 7: Simultaneous   Equation Models                                                                          403

   We briefly repeat our assumptions of Section 2: B is non-singular, 2 has full
column rank, and the rows of U are ii-d. As we mentioned above, since the
reduced-form model determines the conditional distribution of the endogenous
variables, all the parameters (II, Q) are identified. Identification of the structural
parameters thus is equivalent to the question of whether any other structural
model can have the same reduced form model. Define A = [B IJ. Then a
structural model is not identified if there exists a non-singular linear transforma-
tion H such that A’= AH and U’= UH is i.i.d. with mean zero and covariance
matrix 2. The possible existence of such a matrix H is closely tied with Fisher’s
(1966) approach to identification via admissible transformations.
   We first consider the case of a priori restrictions on B and r while 2 is left
unrestricted. It is important to note that we use no information which might arise
from possible knowledge of the form of the probability distribution G(U). If we
required the matrix H to have the property that G(U) = G(UH), then in many
cases the necessary and sufficient conditions for identification would be very
much weaker, except in the case when G( .) is M-variate normal.‘5 We want to
interpret the identification conditions on B and r in instrumental variable form
since we emphasize this approach to estimation. For the case of restrictions on B
and r we limit attention to the case of linear restrictions. These restrictions arise
from a priori economic theory and usually correspond to omission of elements Y
and Z from a given equation. We impose the exclusion restrictions and a
normalization Bji=l (i=l,...,     M) and rewrite the equations in regression form
as

      yi = Eli    + Ziyi + Ui       =    XiSj + ui         (i=l   ,...,M),                                  (3.1)

where X, = [Y Z,], S! = [& $1 and eq. (3.1) contains ri jointly endogenous
variables on its right-hand side and si predetermined variables for a total of
ki = ri + si right-hand-side variables. In the current case, without loss of general-
ity, we are concerned with the identification of the unknown parameter vector
(/?, , y,, u, , ) in the first structural equation. Thus, the identification problem is to
derive necessary and sufficient conditions so that the equations II = - TB- ’and
D = (B’)-‘ZB-’ yield a unique solution for [B,, r,, a,,] given (II, 52) and prior
information on [B, r, 21, where B, is the first column of B and r, is the first
column of r.
   For the case of linear restrictions on (B,, r,) we write the prior information as


      @
         [
             B,
             r,
                  1
                  =+7                                                                                       (3.2)


    15This situation is analogous       to the classical bivariate errors in variables problem,   e.g. Kendall and
Stuart (1967), where Reiersol           (1950) demonstrated       that the model is identified    for all bivariate
distributions   except the normal       distribution.
404                                                                    J. A. Hausman


when @ is a g X (M + K) matrix of known constants and $I is a known g vector.
Since at present we take 2 as entirely unknown, the only restrictions which arise
from the reduced-form equations on (B,, r,) take the form IIIB, = - r, together
with eq. (3.2). Therefore (B,, F,) is identified if and only if




has a unique solution for (B,, T,). A necessary and sufficient condition is that


      rank II
          [     @1=hI+Ic.
                 ’                                                             (3.4)

  Equation (3.4) is the rank condition for identification and is proven in Hood
and Koopmans (1953), Fisher (1966), and most econometrics textbooks. The
necessary order condition is that g z M so that eq. (3.3) has at least M + K rows.
Then for our normalized equation (3.1), we see that (p,, y,) are identified if and
only if

      BLIP,= 0                                                                 (3.5)

has a unique solution for fi, = (- 1, /3,), where II,, is the submatrix of II which
relates the endogenous variables included in the first equation ( y,, Y,) with the
excluded predetermined variables. The order condition is then k, = r, + s, < K or
r, d K - s,. That is, the number of included jointly endogenous right-hand-side
variables must be no greater in number than the excluded predetermined varia-
bles. These excluded predetermined variables are used to form the instruments for
consistent estimation, as our example in Section 1 demonstrated. We discuss
instruments further in the next section on estimation. Letting W, be the matrix of
instruments, the rank condition takes the form that identification is present if and
only if (W;X,) is non-singular.
   How do conditions change if Z, is known? We then have the additional
equation to LlB, = -F, that QB, = (B’)-‘1,.          For identification of the first
equation the only useful restriction is u,, = 0, so that the first structural dis-
turbance is identically zero. We then have the result that (B,, T,) are identified,


              n
using only prior restrictions on (B,, r,) and [I,, = 0 if and only if



                     1
                 I
      rank       Qi =M+K.                                                      (3.6)
             [ 52 0

This result is equivalent to the generalized rank condition of Fisher (1966, ch. 3).
Ch. 7: Simultaneow   Equation Models                                                    405


Partition 52= [a, : f2,] as we did II and we find the necessary condition that
rank(S2,)>,(r,-l)‘(K-s,).             If the rank of 2 and thus D is M-l,      the order
condition is fulfilled even without coefficient restrictions. This rather peculiar
result for the non-stochastic situation arises because if u,, = 0, plim(l/T)Y,‘U, = 0
for i = 1, . . . , M, so that every jointly endogenous variable is predetermined in the
first equation and can be used as an instrument so long as the rank condition is
satisfied. The case of variance restrictions, uji = 0, is not of very much importance
in econometric applications.
   Lastly, we consider covariance restrictions. It turns out that covariance restric-
tions can yield identification in one of two ways: an otherwise jointly endogenous
variable can be made predetermined, somewhat like the last example, or an
estimated residual from an otherwise identified equation can serve as an instru-
ment. We report results from Hausman and Taylor (1980a) where proofs are
given. Besides linear restrictions on (B,, r,) and zero restrictions on 2, we also
use exclusion (zero) restrictions on certain other elements of B. We begin with two
definitions:

Definition
For a G x G matrix B, a chain product corresponding to the ith row and the jth
column is a product of no more than G - 1 elements of B of the form &PabflbC.. .
p,,, where all indices are distinct. The set of all such chain products is denoted
B[i, jl’


Equations (i, j) are relatively triangular if and only if Bfi, jl = {O}.Equations (i, j)
relatively triangular does not imply that equations (j, i) are relatively triangular.
It turns out to be the case that the relative triangularity of equations (i, j) is
equivalent to a zero in the (i, j)th position of (B’)- ‘. The relative triangularity of
equations (i, j) is a necessary condition for yj to be uncorrelated with ui and thus
to be predetermined in the ith equation. We now need to consider zero restric-
tions on (B, Z,) which are useful for identification.
   We have the result that ((B’)-‘2,)j = 0 if and only if equations (j, 1) are
relatively triangular and U, is uncorrelated with uk for equations (k, 1) which are
not relatively triangular. This condition is less restrictive than (I,~= 0 for i = 2,. . . ,
M. We now give our final definition:

Definition
Equations (1, j) are relatively recursive if and only if ((B’)-‘Z,)j      = 0.
Then yj is uncorrelated with u, (because vj is uncorrelated with ui) and can be
considered predetermined in the first equation along the lines of eq. (2.4).
406                                                                           J. A. Hausman

Relative recursion occurs if and only if yj is predetermined in the first equation.
Thus, we have demonstrated our first method by which zero restrictions on
(B,, 2,) are useful for identification. They cause the jointly endogenous variable
3 to be predetermined in the first equation so that it can be used to form the
mstrument matrix IV,. Writing the zero restrictions as !P( B’)- ‘2, = 0 we note
that this equation yields WIB, = 0. Then Hausman and Taylor (1980, p. 27)
prove that a necessary and sufficient condition for the identification of (B,, T,)
using linear restrictions on (B,, r,) and zero restrictions on (B, 2,) is


             I7     :   z
      rank         @            =M+K.                                                 (3.7)
             !m     :   0
                            i

The necessary order condition takes the form that (B,, T,, El) is identified given
@ and !P so long as the number of unconstrained coefficients k, does not exceed
the number of instrumental variables which can include all predetermined vari-


             HI2
ables for the first equation. The necessary condition for the instruments is


      rank 9D,
          [   1    =r,-1.


Thus, we see that identification via covariance restrictions is closely connected
with the existence of instruments for estimation.
   A particular example of the importance of covariance restrictions for identifica-
tion is the recursive system specification. For this specification B is assumed to be
lower triangular and 2 is specified to be diagonal [Wold (1964)]. Then all
equations (i, j) are relatively triangular for i greater than j, i, j = 1,. . . , M. Then yj
is uncorrelated.with ui because ((B’)-‘Xi)j      = 0 and vj is uncorrelated with ui.
Therefore 5 is predetermined in the ith equation. Two implications arise from
this result. The rank condition of eq. (3.7) is satisfied. Furthermore, since all
right-hand-side variables are predetermined, least squares on each equation is the
appropriate estimator. But, as we discussed above, the assumptions necessary for
a recursive system are unacceptable, especially that Z is diagonal. If B is specified
to be lower triangular, but no assumptions on _Z are made beyond the usual
conditions, the system is called triangular. Interesting differences in estimation
still arise from the non-triangular specification, but no special issues in identifica-
tion arise. We consider estimation of triangular systems in the next section [eq.
(4.20)].
   The previous discussion of (relative) recursiveness raises the important question
of when can a variable, say rj, be treated as predetermined in a particular
Ch. 7: Simultaneous   Equation Models                                                             407

equation? An analogous concern is whether yi can be used as an instrumental
variable for estimation. As the discussion demonstrated, in the presence of
covariance restrictions yi will not necessarily be predetermined with respect to all
equations as we assumed the z’s are. For r, to be predetermined with respect to
equation i, it is necessary that plim(l/T)$ui        = 0. Two important consequences
of this condition are as follow. (1) We cannot generally say that yr is pre-
determined (exogenous) with respect to another variable y, apart from the
 specification of the complete system of equations. Bivariate relations which
 attempt to test for “causality” cannot be used to decide whether yi can be used as
 an instrumental variable in equation i. We discuss this point further in Section 5.
(2) For any economic variable to be predetermined its reduced-form residual must
be uncorrelated with ui. This event may often seem unlikely in many models. But
 as a model approximation, it is sometimes assumed that a variable is relatively
 recursive with respect to an equation because there is no structural feedback from
 variable yi to the predetermined variable yj. But note that covariance restrictions
 are also necessary, as our definition of relative recursivity demonstrates.16 There-
 fore it is the relationship of uj and uj which is critical; conditions on both B and Z
 are required for a variable to be predetermined with respect to another equation.
    The second form of covariance identification occurs when u,~ = 0 but equation
j is otherwise identified. Consistent estimates of the residuals iij can then be used
 for identification. We thus need to consider the more general case of linear
 restrictions on all of (B,r,2).The proposition is that if u, j = 0 and Bjis either
 known or estimable, then Yij is predetermined in the first structural equation
 where ij = (1 - pj). Then either YBjor the residual lij can be used interchange-
 ably as an instrumental variable in the first equation. The rank condition arises
 from the proposition that if y, is predetermined in the jth equation, then iii
 cannot be used as an instrument for the first equation. Likewise, if y, is
 predetermined in thejth equation, then tij cannot be used as an instrument for yk
 in the first equation. Otherwise, estimated residuals can be used to form instru-
 ments. We give an example in the next section.
    To summarize: four forms of linear restrictions can lead to identification of
 (B,,r,,Z,),all of which have straightforward interpretations via instrumental
 variable interpretation. (1) Coefficient restrictions of the Koopmans type which
 state that the number of included right-hand-side jointly endogenous variables
 must be no greater in number than the excluded predetermined variables which
 can serve as instruments. (2) The Fisher condition u, , = 0 so that no simultaneous
 equation problem occurs. (3) The Hausman-Taylor               condition so that jointly


    16Fisher (1966, ch. 4) discusses “block recursive” systems where it is assumed that B is block
triangular and B is block diagonal. Then endogenous variables from a block of B are predetermined
with respect to the equations of a higher numbered block because the condition of relative recursive-
ness is met.
408                                                                                     J. A. Hausman

endogenous variables become predetermined in the first equation. (4) Estimated
residuals from another equation can serve as instruments in the first equation.17
This list exhausts all linear identification restrictions for the linear simultaneous
model which have been considered in the literature.


4.     Estimation

Estimation of simultaneous equation models is the central focus of this chapter.
We have considered questions of specification and identification. We now assume
that sufficient restrictions are present for identification and that all restrictions
are linear restrictions on the parameters of a given equation (Bi, c). Below, we
will consider covariance restrictions on the elements of 2. The early work by
Haavelmo (1944) and the Cowles Commission, i.e. Koopmans (1950) and Hood
and Koopmans (1953), emphasized maximum likelihood estimation of simulta-
neous equation models. The probability distribution of Assumption 2.4 was taken
to be multivariate normal, G(U) = N( 0,Z@Ir). At that time it was realized
[Koopmans et al. (1950, section 3)] that consistency of maximum likelihood was
maintained even if G(U) was not normal so long as Assumption 2.3 concerning
the moments of U was satisfied. Still, in the pre-computer age of estimation,
maximum likelihood estimation represented a laborious task. Not until the
two-stage least squares (2SLS) procedure of Basmann (1957) and Theil(1958) was
invented did consistent estimation of simultaneous equation models require only
the same order of magnitude of computation as least squares for regression
specifications. 2SLS is an example of instrumental variable (IV) estimation.
Sargan (1958) introduced instrumental variable estimation for simultaneous equa-
tion models. It is interesting to note that IV estimation for errors in variables
models was known at the time of the Cowles Commission studies, i.e. Gear-y
(1949) and Reiersol (1945). But application of IV estimation to simultaneous
equation models did not occur until after a further decade had passed.


4.1.     Single equation estimation

First we consider estimation of a single equation, say the demand equation from
our initial example, eq. (1.1). We denote it as the first equation and rewrite eq.
(3.1) as

       y,=X$,+u,          forX,=[Y,          Z,].                                                (4.1)

   “Learner (198 1) considers the use of covariance restrictions to estimate an interval which contains
the true parameter of the endogenous variables in a two-equation system. The technique is very similar
to that sometimes used in errors in variables problems.
Ch. 7: Simultaneow Equation Models                                                                                       409

Least squares is inconsistent because

      Plim@,,o,s - 8,) = plim[(X;X,)-‘x;u,]                                   f 0.                                     (4.2)

To evaluate eq. (4.2) we need two other assumptions:
Assumption       4.1

The matrix M = plim( l/T)Z’Z                             is non-singular as T goes to infinity.
Assumption       4.2

   If lagged endogenous variables are present as predetermined variables, all roots
of the characteristic equation l&B + a”- ‘H, + - - . + aH,_ , + H, I= 0 lie within
the unit circle where Z, are exogenous variables and yt B + gtG + cf=, y,_, H, = ut,
i.e. the system is stable.
We can now evaluate eq. (4.2): ‘*


                                                                         1
                                                     1




                              6       ) =   plim    pl,oLs-pl
       plim(&,o,s       -         I
                                                   [ Pl,OLS     -   Yl




                                        =                (4 -&c%-’
                                                                                                 [(B’)-‘E,],,          (4.3)
                                              -M,‘S;,(R,,-S,,M,‘S;,)-’                       1

where R,, = II;MII,    + L?,, for II, corresponding to Y,, M, , is the submatrix of
it4 associated with Z,, and S,, = II;M[I,,      01’. Thus, both subvectors of 6, are
inconsistently estimated because of the correlation of Y, with u,. Note that the
matrix [(B’)-‘Z,],  is the covariance of Y, and U, as expected given the covariance
restriction results on relatively recursive variables which were discussed in the
previous section.
    Instrumental variable estimation provides a consistent estimator for 6,. For
 consistent IV estimation we require a T X K, matrix W, of instruments to
 estimate

       d I,IV= (I+7XJ’IQ,.                                                                                             (4.4)

We see the first requirement of the instrument matrix: it must be correlated with
X,. The second requirement follows from

       plim(J,,,       -6,)           = plim[(W;X,)-‘W;u,].                                                            (4.5)

   “The    notation [(B’)- ‘ Xl, selects the endogenous                  variables from the equation     analogously   to our
notation   used in the definition of relatively recursive                in the previous section.
410                                                                                    J. A. Hausman

So long as plim T( W{X,)- ’exists and is finite, we require that plim(l/T)W;u,                      =
0. That is, the instruments          must not be contemporaneously            correlated with the
stochastic disturbances.       In general, finite sample bias will not be zero due to the
stochastic nature of Y,.
   Where do instruments          arise in the linear simultaneous        equation problem? The
reduced form of eq. (2.2) determines the conditional             distribution    of Y,. Therefore,
the predetermined       variables Z provide a source of instrumental            variables since Y,
is a stochastic     linear function        of Z,, while the predetermined             variables   are
uncorrelated    with U, by assumption.          Therefore, we consider linear combinations
of the predetermined       variables IV, = ZA,, where A, is a K X K, matrix of rank K,
to form the matrix of instruments.           (Note the distinction     between the instruments
 IV,, which have column rank K,, and the instrumental                  variables Z, which have
column rank > K, and are used to form IV,.) A, can either be known or estimated
as a,. To determine the first-order asymptotic approximation                   to the distribution
of 8, IV,  we  consider    only   the  case  of Z  to be  exogenous.     For  lagged    endogenous
variables,   the results are identical but the issue of appropriate                   central limit
theorems in the time-series case arises [see, for example, Mann and Wald (1943)
and Fuller (1976)]. Then,


             - 6,) = (+A;,‘,,)-‘(
       JT(h.1”                                  &A;Z’u,).                                       (4.6)


The first matrix on the right-hand       side of eq. (4.6) has plim equal to A;MD,,
which is non-singular       where D, = [II, : I,] with I, a selection matrix which
chooses Z,. The vector (l/@)A;Z’u,            ‘forms a sequence of independent       and
non-identically  distributed random variables. We can apply either the Liapounoff
version of the central limit theorem or the slightly weaker Lindberg-Feller
version to claim that the vector converges in distribution        to a normal random
vector with distribution     N(0, a,,A;MA,)    [Rao (1973, p. 128)].19 Then using the
rules on products of random variables where we have a finite plim and the other
converges in distribution    [Rao (1973, p. 122)], we find the asymptotic distribution


       JT(4,Iv- 6,) fi N(O,o,,[(A;MD,)-‘A;MA,(D;MA,)-‘I).                                       (4.7)

If A, is replaced by an estimate a, which has plim A,, we obtain identical
asymptotic   results again because of the product formulae for random variables
with limiting distributions.
   Given the formula for the asymptotic covariance matrix for 8,,Iv, we would like
to find the best choice of A, to form the matrix of instruments    W,. That is, we

   “Assumptions     need to be made either about third moments of the random      variable   or about
limiting behavior   of the sums to apply these central limit theorems.
Ch. 7: Simultaneous     Equation Models                                                                 411

want to choose A, to minimize, in a matrix sense, the asymptotic covariance.*’ It
turns out that the best 4, is not unique but any optimum choice must satisfy the
condition     that plim A, = D,. We can show an optimum              choice is a, =
(2’2))    ‘Z’X,. For this choice of a, we calculate the asymptotic covariance matrix
from eq. (4.7):

       V(i,,,v)       = o,,plim[(   X;Z(ZZ-’        MD,)_‘(      x;z(z~z)-‘A4(z~z)-‘z~x,)




                      =a,,[D;MD,]-‘,                                                                 (4.8)
since plim 2, = D,. We now compare the asymptotic             covariance     matrix for
another choice of A,, say E,, such that E, t D, (or plim J!?, f 0,). For I%‘,= ZE,
we need to compare the term within brackets in eq. (4.7) to that of eq. (4.8). We
use as our standard of comparison    all possible linear combinations    g’6,, where g’
is a k, vector and say a, is best if the quadratic form


                                                                                                     (4.9)

Equivalently, we can use the inverse covariance       matrices to show the reverse
inequality.
   Factor M = NN’ by the symmetric      factorization   and define h = N- ‘Z’X,g.
Thus, the plim h’h = g’[D;MD,]g,     the inner term of which comes from eq.
(4.8). For the comparison     estimator     g’[(E;MD,)(     E;ME,)- ‘( D;ME,)]g =
plim h’G(G’G)-‘G’h,    where G = NE,. Therefore the difference of the inverse
covariance matrices is

      plimh’[l-G(G’G)-‘G’]h>O,                                                                      (4.10)

since by the generalized          Pythagorean     theorem,   h’h a h’P,h,   where PC =
G(G’G)-‘G’,      the orthogonal projection. That is, PC is an orthogonal projection so
all its characteristic   roots are either one or zero [Rao (1973, p. 72)]. Somewhat
analogously     to the Gauss-Markov         theorem, we have shown that among all
instrument    matrices IV, formed by linear combinations           of the predetermined
variables, that the best choice is a matrix which has probability         limit equal to
D, =[Il,     I,]. For       a,
                           then, IV, = Za, = Z[fi,      I,].

   *OWhen the terminology     “asymptotic   covariance    matnx ” is used, we mean, more precisely, the
covariance matrix of the asymptotic distribution.      Minimization  of the asymptotic   covariance matrix
means that the matrix difference between it and the asymptotic          covariance  matrix of comparison
estimator is negative semi-definite.  Equivalently,   for any vector P, P’8,,tv has minimum variance in
the class of instrumental  variable estimators for the A, which minimizes the asymptotic         covariance.
412                                                                                        J. A. Hausman

   It is now straightforward to demonstrate that the two-stage least squares
estimator (2SLS) is numerically identical to the optimal IV estimator with
2, = (Z’Z))‘Z’X,.     2SLS “purges” all jointly endogenous variables in eq. (4.1)
and replaces them with their conditional expectations estimated from the unre-
stricted reduced form: Y, = ZI?, = Z( Z’Z)) ‘Z’Y, = P,Y,. The second stage con-
sists of replacing the jointly endogenous variables in eq. (4.1):
             1




      Yl = YlPl    +   ZlYl   + P,;p,   + 2.4, =   *,;s,   + Cl,                                  (4.11)

where v, = Y, - Y, and is orthogonal to Y, and Z,. Then least squares is done:

                                                                                                  (4.12)

2SLS is thus identical to the IV estimator using A^,because (&Xl) = (X;P,P,X,)
 = (RX,) = (a;Z’Xl).21 The two estimators remain identical only so long as all
predetermined variables are used to form 2,. In fact, in purging Y, to form Y,, Z,
must be included among the regressors. If not, v, is not necessarily orthogonal to
Z, and inconsistency may result. This mistake has been made by numerous
researchers. However, if the IV estimator of eq. (4.4) is used, this problem does
not occur since W, is a linear combination of predetermined variables. Thus, the
IV estimator will continue to be consistent for any matrix A,, but will have a
larger asymptotic covariance than the IV estimator with W, = ZD,. Also, con-
sistent IV estimation is computable for the case K > T > K,. As we previously
discussed in Section 2, in many cases the number of predetermined variables K
will exceed T, the number of observations. 2SLS is no longer computable because
the unrestricted reduced-form estimates are not computable. But IV estimation
can still be used in this case.22
   Another member of the IV estimator class for single equation models is the
limited information maximum likelihood (LIML) estimator which arises when a
normality assumption is made for the distribution G(U). We will defer considera-
tion of LIML until we discuss maximum likelihood estimation. However, a
related class of estimators to LIML, referred to as k-class estimators, deserve a
brief mention [Theil(1961)]. They can also be derived as IV estimators, and can
be considered analogous to the 2SLS estimators. Define the instrument W, =
[Y, Z,], where we now use Y, = Y, - ICY,for K, a scalar. Clearly 2SLS has K = 1

   *‘Another possible interpretation      of 2SLS is as a minimum distance estimator where min,,(y,      -
X,S,)‘Z(Z’Z)-‘Z’(y,        - X,6,). We thus project the model into the subspace           spanned   by the
columns of the predetermined       variables to obtain orthogonality.
   **An extensive literature exists on which IV estimator should be used when T > K. The problem is
difficult to resolve because it is small sample in nature, while our current optimality conditions depend
on asymptotic      approximations    as 7’ grows large. Swamy (1980) reviews the ‘I undersized     sample”
problem.
Ch. 7: Simultaneous   Equation Models                                                                       413

and OLS has K = 0. Consistency requires plim K = 1 which also is the condition
for them to be an IV estimator because plim(l/T)[((l  - K)I + KP,)Y,     Z,]‘u, = 0
requires that plim K = 1. However, to have the same asymptotic distribution as the
optimal IV estimators, K must satisfy the stricter condition plim fi(~    -   1) = 0.
Consider the difference in the estimators when plim K = 1:


       pbmfi( h., - &SLS> = Qi'ph ‘m(-+[Y;(I-~z)(l-K)                                       O]ui),       (4.13)


where Q,, = plim( l/T) $2,.              The term containing           K can    be written as

       plim(D(1       - K))( + f;Ut) = plim(\/T(l-               K))((B’)-‘Zt),,

which yields the requirement plim J~;(K - 1) = 0 for asymptotic equivalence.
Thus, to be an IV estimator we need plim(rc - 1) = 0; to be an optimal IV
estimator, we need plim \/?;(K - 1) = 0. Nagar (1959), Sawa (1973) and Fuller
(1977) have considered the choice of K with the Nagar K = 1 + (K - k,)/T
sometimes used because it eliminates bias in the first term of the asymptotic
expansion.


4.2.    System estimation

We now consider estimation of the entire system of equations rather than only a
single equation. Under correct specification of the other equations, estimates of
the coefficients of the first equation will then have a smaller asymptotic covari-
ante matrix so long as Z, has u,~ f 0 for some j * 1 and the jth equation is
overidentified. The term “overidentification” refers to the case where there are
more than enough restrictions so that the rank conditions of Section 2 are
satisfied even if one or more prior restrictions are disregarded.23 Again we will
only consider linear restrictions for a single equation so that a necessary condition
for equationj to be overidentified is that the number of right-hand-side variables
included (after the normalization) is strictly less than the number of prede-
termined variables, 5 + sj = kj < K. However, the gain of the reduction in the

   23Altemative notations of overidentification         exist. When only exclusion restrictions are present, in
terms of the order condition         overidentification    can be defined when K > k, = r, + s, [Hood and
Koopmans ( 1953, p. 139) and Theil(197 1, p. 449)]. The precise definition of over-identification         is that
at least two sets of exact identifying restrictions exist which are not identical and the deletion of any
restriction loses identification   if they are the only restrictions.   Overidentification   can also be defined
in terms of restrictions       on the reduced form [Malinvaud         (1970, p. 663)]. However, Mahnvaud’s
definition can lead to problems in that an equation defined to be overidentified            may not, in fact, be
identified.
414                                                                                              J. A. Huurmun


asymptotic covariance matrix brings with it an increased risk of inconsistent
estimation. We emphasized in single equation estimation that IV estimators
required only that the two properties of instruments W, be satisfied for consistent
estimation. With system estimation misspecification of any equation in the system
will generally lead to inconsistent estimation of all equations in the system.24
   In discussing- system
                    _      estimation, it is often easier to stack the system of
equations. Each equation has the form

       yi=XjSi+ui              (i=1,2     ,..., M).                                                       (4.14)

The stacked form of the complete system of equations is then

       y=xs+u,                                                                                           (4.15)

with

              Yl
       y=      :

            I*YM

The important point to notice is that V(U) = z@,I, so that a multivariate least
squares type approach to IV estimation is called for to account for the non-diago-
nal covariance matrix.
  The general system IV estimator may be defined as

       d,, = (W’X)_‘W’y.                                                                                 (4.16)

The particular form that W takes for system estimation is II” = -%‘(~‘e1,)-‘,
where 8= diag(X,, X2,..., X,,,) and L? is a consistent estimate of 1. Note that
each Xi = ZA, ‘must satisfy the two properties for instruments as well as the
additional property that plim(l/T)X~uj = 0 for all i and j, i.e. Xi must be
asymptotically uncorrelated with all the disturbance vectors in the system instead
of only ui as in single equation estimation. If 2 is replaced by another matrix with
plim not equal to Z, consistent estimation still follows, but a larger asymptotic
covariance matrix for the estimator results. Derivation of the asymptotic distribu-
tion is very similar to the single equation case:


       dT(d,,-s)=              (+x)-‘(+vu).                                                               (4.17)


  24This potential   problem   is mitigated   somewhat   by specification   tests proposed   in the next section.
Ch. 7: Simultaneous   Equation Models                                                             415

The first matrix on the right-hand side of eq. (4.17) has plim equal to A’Nfi,
where a = diag( A ,,..., A,), N=,Y’@M,     and fi=diag(D ,,..., D,). The second
term has an asymptotic normal distribution with mean zero and covariance A’NA.
Therefore, the asymptotic distribution for the IV estimator is

      JT(&v-6) “N(O,[(
                    ~~~)_‘(A’Nk)(B’~~)_‘]).                                                   (4.18)

Again, Ai can be replaced by ai which has plim Ai with no change in the limiting
distribution.
   Choice of the optimal matrix 2 follows exactly as in the single equation case
and is not repeated here. The best choice of A has each Ai satisfy the condition
that plim Ai = Di = [Iii Ii]. The asymptotic covariance matrix of the optimal
system IV estimator is then


                                                                                              (4.19)

We now consider IV estimators which have an optimal Ai:

(1) Three-Stage Least Squares (3SLS) [Zellner and Theil, (1962)]. The 3SLS
estimator takes ai = (Z’Z)-‘Z’Xi.      Its estimate of 2 is 3 derived from the
residuals of the structural equations estimated by 2SLS. For 3SLS W takes the
particularly simple form W’= X’( s- ’8 Z( Z’Z)- ‘Z’). Note that if 9 is replaced
by the identity matrix IM we have 2SLS done on each equation. The term 3SLS
again arises because in the Zellner-Theil formulation yI was replaced by R in
each equation and “seemingly unrelated regression” was done on the system.25
Iterated 3SLS has been considered [Dhrymes (1973)] where 3 is updated at each
iteration. The asymptotic distribution is. not changed by the iterative procedure.

(2) Iterated Instrumental Variables. The 3SLS estimator requires T > K just like
the 2SLS estimator. Brundy and Jorgenson (1971) and Dhrymes (1971) propose
an estimator which only requires that T > ri+ si for all i = 1,. . . , M. The procedure
first estimates bi for each equation by an IV estimator. These consistent, but
inefficient, estimates are used to form 3, a consistent estimate of Z. System
instruments are formed with p = _?‘($@Ir)-‘, where Xi = [ - Z(f’&); ’ Z,],

   2SAgain differences can arise between the “repeated     least squares” form and the IV form. The
optimal IV estimator requires only a consistent estimator of the 0,. However, the repeated least
squares form requires an estimate of II, at least as efficient as Iii = P,y. In particular,   if 2SLS
estimates are used to form an estimate of Iii for the “purged” variable y, then a 3SLS-like estimator
no longer has an asymptotic covariance matrix as small as that of the optimal IV estimator. Also, if
3SLS is done as a seemingly unrelated regression, the terms which arise from the first stage residuals
are ignored.
416                                                                                                   J. A. Hausman


where (f%l)i      is formed from the consistent estimates bi = [&fi]’ and the prior
(zero) restrictions. Then drv = (W’X)) ‘w’y. This estimator has the identical
asymptotic distribution to the optimal IV estimator since plin-(f&l)       = II (so
long as B is non-singular). However, since T < K is a “small sample” problem, it
is unclear how much the asymptotic argument can be relied on. Small sample
approximations will be required to evaluate the IV estimators better. Also,
knowledge about the effect of the initial consistent estimator on the small sample
properties of b,, remains to be established.
   Dhrymes (1971) proposed to iterate the process by replacing (pi-‘)       at each
iteration and 3 with the new estimates. Hausman (1975) demonstrated that if the
iterative process converged, then it would yield the maximum likelihood (FIML)
estimates as is demonstrated when FIML estimation is considered, so long as
T > K + M. Lyttkens (1970) considered iteration with S replaced by I,+, as did
Brundy and Jorgenson. While this estimator is properly regarded as a full
information system estimator, since all equations must be specified in structural
form, the asymptotic distribution is the same as the (system) 2SLS estimator.

(3) System k-class [Srivastava (1971) and Savin (1973)]. This estimatpr is a
straightforward generalization of the single equation case. Replace Y by Y’= [(I
 - IZ)Y’+ &I’Z’] for a matrix R. Then a system IV type estimator is used. Again
consistency requires plim R = I, while asymptotic efficiency requires plim @(I? -
I) = 0. The proof of these requirements is the same as in the single equation case.
   An interesting special case of system estimation arises when the system is
triangular [Lahiri and Schmidt (1978)]. This specification occurs when B is lower
triangular after the a priori restrictions have been applied.26 If 2 is also specified
to be diagonal, we then have the recursive specification [Wold (1964)]. All
right-hand-side variables are predetermined so least squares on each equation is
the optimal estimator. But if 2 is not diagonal, least squares is inconsistent. If 2
were known, the system could be transformed and generalized least squares
(GLS) used. With E unknown, it can be estimated and 3SLS provides an optimal
estimator in the sense of having an asymptotic distribution identical to the
optimal IV estimator so long as the system is identified (apart from restrictions on
2). But a relevant question is whether GLS with a consistently estimated
covariance matrix also has an identical asymptotic distribution. The answer is no,
although the estimator is consistent, because

      plimJT(       &v - 43~s)



                                                                                                             (4.20)
  26Thisspecification    arises   in the path   analysis   model   often   used   in other   social    sciences   [see
Goldberger   ( 1972)].
Ch. 7: Simultaneous   Equation Models                                                                      417

While plim(l/T)Z’u     =1 0, plim(l/T)X’u  f 0 so that eq. (4.20) would equal zero
only if plim@(T - S) = 0. Thus, to apply GLS to a triangular system an
efficient estimate of 2 is required or the estimator will have a larger asymptotic
covariance matrix than the optimal IV estimator.


4.3.    Reduced-form        estimation

So far we have directed our attention to estimation of the structural parameters
(B, r, 2). Estimation of the reduced-form parameters (II, a) can be important to
derive forecasts or for optimal control procedures. If the entire system is just
identified so that the appropriate rank conditions of eqs. (3.4) and (3.6) are
equalities, then II is unrestricted. This result follows from the first block of eq.
(3.3), IIB, + rl = 0, which can be uniquely solved for (B,, r,) for any Il.27 On
the other hand, when any structural equation is overidentified, then 27 is subject
to restrictions. In the case of linear equation restrictions, the total number of
restrictions on II, called the degree of system overidentification, is determined by
the expression &( K - /c~).~*
   Again let us stack the reduced-form equation (2.2) into a MT X 1 vector
system:

       y = (18Z)7r       + IJ,                                                                         (4.21)

where r’ = (r, ,, r2,, . . . ,rKM) and v’= (v, ,, v2,, . . . , vTM). Note that V(v) = OS I,
so that eq. (4.21) represents a multivariate least squares problem. If rr is unre-
stricted, then the GLS estimator and the OLS estimator are identical


       7?= [(Ic3z~)(a-‘sI)(Ic3Z)]-‘(h3Z’)(r’8I)y

         = [9-~0z’z]-‘(~-~@z’)y=                     [I@(z~z)-‘zqy.                                   (4.22)


In the case of over-identification with restrictions on r, then non-linear GLS is
used with an estimated b [Zellner (1962)]. This approach is very close to the
minimum distance methods of Malinvaud (1970) and Rothenberg (1973, ch. 4).
   Let +ij = - (I’B-‘)ii be subject to the a priori restrictions, while iiij represents
the unrestricted OLS estimates. Then put these elements into vectors and the


   27This result also leads to the structural estimation model of indirect least squares (ILS) for just
identified systems. Estimates of the reduced-form      parameters,    II, are used to solve for (B,, I’,). ILS
has been superseded by the IV estimators. The shortcoming          of ILS is its inapplicability to overidenti-
fied models. A generalization    of ILS to this case is proposed by Khazzom (1976).
   281f any equation is underidentified    so the rank is less than M + K, then this equation adds no
restrictions to II and is omitted from the sum.
418                                                                                             J. A. Hausman

minimum distance estimation is

       rnin(7?-    ii)‘(Z’Z@si-‘)(7?        - ii),                                                        (4.23)
         n

where b = (l/T)y’(l-        P,-))y for z= (1@Z). Solution of eq. (4.23) represents a
non-linear problem because of the restrictions on ii.29
   Other estimators of II are possible. An obvious suggestion would be to estimate
II from the structural parameter estimates, I?,, = - fr;,s,    = h(arv). Since h is
differentiable (totally) if pn, and Brv are optimal system IV estimators, e.g. 3SLS,
we might expect fir, to have good asymptotic properties [Rao (1973, ch. 6)]. The
asymptotic covariance matrix for an efficient system IV estimator, e.g. 3SLS, is30


       I+?) = ((~p+i(x~(2-‘eP,)x)-‘B((B)-‘sr).                                                          (4.23a)

In fact, the & from eq. (4.23) and fir, are asymptotically equivalent, plim fi( & -
fitv) = 0 [Rothenberg (1973, ch. 4)]. This result follows because both estimators
are asymptotically equivalent to FIML which we will examine momentarily.
However, if non-optimal system IV estimators are used to form I?, then no
optimal asymptotic results hold. Dhrymes (1973b) demonstrated that fi2sLs is not
necessarily better than unrestricted least squares estimation of II, even though the
overidentifying restrictions have been imposed.


4.4.    Maximum likelihood estimation

ML estimation formed the original approach to estimation of linear simultaneous
equation models by Haavelmo (1944) and Koopmans et al. (1950). The likelihood
function follows from an additional assumption:
Assumption 4.3
The structural disturbances follow a non-singular normal distribution                                U - N(0, Z
@‘IT).

  29Brown (1960) considered setting D = I which leads to a loss of asymptotic          efficiency.
  301f an efficient single equation estimator is used, e.g. 2SLS, the asymptotic      covariance      matrix   is




Note this covariance matrix is larger than that of eq. (4.23a) unless all equations     are just identified.        A
derivation of this V(II,,) is found in Goldberger et al. (1961).
Ch. 7: Simultaneous   Equarion Models                                            419

This happens after all identities have been substituted out. We can then write the
log-likelihood function:

      L(B,F,X)=C+zlogdet(8)-‘+Tlog]det(B)]

                          - f tr( +X-‘(YB   + Zr)‘( YB + ZT)),               (4.24)

where the constant C is disregarded in maximization. The presence of the
Jacobian term log ]det(B)] of the transformation from U to Y represents the
essential feature of the ML approach to simultaneous equation estimation [see
eqs. (2.5) and (2.6)]. In its absence the LF becomes identical to that of the
multivariate least squares specification. In fact, for the triangular specification
det( B) = 1, and we have already seen how this case represents a special situation
for estimation.
   Finding the maximum of eq. (4.23) involves non-linear optimization if the
system is overidentified. We impose the a priori restrictions and solve for the
first-order conditions only with respect to unknown elements of B and I?

        (i)   $$      :   [T(B~)-'--Y~(YB+~~)B-']~=~,

       (ii) -&:           [-Z'(YB+Zr)E-']"=O,                                (4.25)


      (3         aL         :   +[TE-(YB+Zr)'(YB+Zr)]"=O.
               a(P)"

Here the [ .I” notation stands for the equations corresponding to unknown
elements, i.e. u is a selection operator. which chooses unrestricted elements of a
matrix. If we postmultiply within the brackets of eq. (4.25,i) by B/7’, we find that
[(B')-'2  -(l/T)Y’U)]”     = 0. We know that the plim of this equation must be
zero for ML to be consistent. In fact, the plim is zero by our earlier calculation
that plim(l/T)Y’U=      (B')-'3. Therefore, it is the presence of the Jacobian term
det(B) in the likelihood function which “corrects” for the correlation of the
jointly endogenous variables and the structural disturbances which is the essential
feature of the simultaneous equation specification. Hausman (1975) combines eqs.
(4.25,i) and (B')-'VU= Y'U+(B')-'r'Z'U to obtain [(B')-'r'Z'(YB                   +
Zr)X']" = 0 to derive the first-order conditions with respect to the unknown
elements of B and r:


                                                                             (4.26)
420                                                                                           J. A. Hausman


We impose the usual normalization pii = 1 and now stack eq. (4.26) into the form
of eq. (4.15) where Si contains only unknown elements of pi and y;. Thus, for each
equation i and predetermined variable zj the top line of eq. (4.26) corresponds to

      ~~[(x-‘)~BZ~]~=Z~[(X-‘)~BZ~]XS                        fori=l,...,Mandj=l,...,K
                                                                                                        (4.27)

if yji is unknown. Likewise, the second block of eq. (4.26) for equation i when bji
is unknown leads to

      j;‘[(Z-‘)i~Z=]v=~~[(X-‘)ieZ~]XS                        fori=l,...,Mandj=l,...,K,
                                                                                                        (4.28)
where $j = (- Zf&l)j.        To stack the equations, we take the elements of eqs.
(4.27) and (4.28) and rearrange them so that they are in the order Xi = [q Zi] for
each equation i = 1,. . . , M to find the IV form of the first-order conditions for
FIML:

      dFIM’_   =   (Fx)_‘Ivy,                                                                           (4.29)

where the instrument matrix w = _%'($@I,)- ‘, with x = diag( xl,. . . , 2M), & =
[ - Z( f& l)i Z,], and 2 = T- ‘(Y& + Zf)‘( Yg + Zf). Eq. (4.29) is non-linear
because Xi contains unknown elements of 6. The equations can be solved by an
iterative process called Durbin’s method by Malinvaud (1970, p. 686), ‘where for
the k th iteration

      d,,, = (JqW’WLY,                                                                                  (4.30)

where xk and 2’ are formed from the k - 1 values of &3’ FIML is a member of
the class of optimal system IV estimators since plim ai = plim[( - i%l)i   Zi] =
(II; Ii) = Di and plim 2 = 2 using eqs. (4.18) and (4.19) we have its asymptotic
distribution:

 JT&IhE- 6) fi N[O,(ZYND)-‘1                     =N[O,plim(        f8.(n’er)X)-‘I.                     (4.31)


We can now calculate the Fisher information matrix to demonstrate that the
FIML estimator of eq. (4.31) attains the asymptotic Cramer-Rao bound. Two
asymptotically equivalent approaches are possible: the covariance matrix of the


  3’It is unlikely that eq. (4.30) provides a good iterative process because   it lacks desirable   properties.
See Hausman (1974) and Quandt (Chapter 12 in this Handbook).
Ch. 7: Simultaneous    Equation Models                                                           421

gradients (in stacked form) from eq. (4.25) can be calculated or the Hessian of the
likelihood  function can be calculated.    Here we take the latter approach.   The
information   matrix takes the form (corresponding  to unknown coefficients)




             I                                                                     1
              BRR’+plim+X’(8-‘@Z)X                       - +R(Z@B)(Z@Z+R)
         =                                                                                 (4.31a)
                                J 21                         ;(z@B)R(z@B)            ’




where     the non-zero     off-diagonal     block   arises   from     plim( l/T)Y’U       =
plim(l/T)V’U=     (B’))‘E,   with terms fi = diag(B,,...,R,)      for II, = [(Z3’-‘),    O,],
where the first matrix corresponds      to Y and the second matrix corresponds        to Zi.
The matrix R = ( Eji) or



                                                                                           (4.31b)



where Enk is an M x M matrix with a one in the nk th position        and zero
elsewhere. The first term in J,, and J,z both arise from the presence of the
Jacobian in the likelihood function. We invert J and look at J” which corre-
sponds to the lower bound for the slope parameters      8.32 Now J” = (J,, -
J,,J;,‘J,,)-‘, with

      J,,J;,‘J,,      =@(Zs2)(i+            R)(Zc32-‘)R(ZsZ-‘)(I+           R)(ZB2)@‘,


where I= (181). J,, = RR&+plim((l/T)X’(~-‘@Z)X).                            But since Xi = [ZZZi
+ y   Z,], we find

      plim+X(H-‘OZ)X=                    d(~-‘ex)~‘+plim~~‘i’(8-‘~Z)ii)

for z=       Z8Z using y = (ICM-‘)~ so that J” = (d’Nb)-’              = plim((l/T)X’(E@
I)-   ‘8))    ’ in eq. (4.3 1). This calculation provides an alternative demonstration            of

   32Whitney Newey has helped this derivation. In the derivation the following properties of R are
used: R-l= R, (Z@A)R(Z@A-‘)R=             A-‘@A   for symmetric A, and (A-‘BZ)R(ZBA)=        R. I did
not find that Jz2 has a Kronecker product form as claimed by Rothenberg (1973, p. 87) in his
derivation of the information matrix for the unrestricted reduced-form estimator. A permutation of
the columns of H for aj, and ok, is required to achieve the Kronecker form. Note that no use has been
made of the symmetry of X.
422                                                                                      J. A. Huusman

the optimality    of our class of IV estimators    since their asymptotic covariance
matrices equal J ” . Thus FIML is another IV estimator for the linear simulta-
neous equation model with properties which can be derived easily from the IV
formulae. It is asymptotically    efficient (BAN) among the class of CUAN estima-
tors.
   Another    approach   to FIML estimation      is via the reduced form. The ap-
propriate log-likelihood   function is


      L(II,ti)=C+Tlogdet(P))-i                     tr( +O-r(Y-       ZII)‘(Y-        ZII)).      (4.32)


By the invariance       theorem of ML we know Jhat the F!ML e:timates from eqs.
(4.24) and (4.32) are numerically          identical: II,,,,  = - rFIMLB&r     and likewise
for fir,,,   = (irg,,)-‘Q,r,,(B,,,,)             -I. However, FIML on the structural form
is easier to perform computationally            because of the way in which the constraints
affect only one coefficient at a time, while eq. (4.32) is subject to cross-equation
constraints.   But the invariance        theorem also allows us to claim that I?,,,,     and
b ssLs are also asymptotically       efficient.
   We now consider limited information               maximum likelihood (LIML) [Anderson
and Rubin (1949)]. LIML estimates the parameters of a single equation. Although
not originally derived in this manner, LIML can be usefully considered                  as a
special case of FIML where all but the first equation are just identified. Therefore
we write the system of equations as33

       Yl = x,s,    + Ul
        y, = ZIIi   + z)~ for i = 2,. . . , M.                                                   (4.33)

All IIj are unrestricted.  Note that the specification   of eq. (4.33) corresponds     to
our notion of limited information     estimation- the structural specification   of only
one equation is required along with a list of all predetermined        variables in the
system. Before proceeding      to derive the LIML estimator       from FIML on eq.
(4.33), we demonstrate    the 3SLS on the system is numerically      identical to 2SLS
on the first equation [Narayanan     (1969)]. We stack the system


                                                                                                 (4.34)


where the subscript        2 denotes   equations   i = 2,. . . , M. The covariance      matrix   of the


  33We only consider LIML estimation for a single equation. The approach can be easily extended to
LIML estimation on a subset of equations. This interpretation of LIML is given in words by Hood
and Koopmans but not mathematically    derived.
Ch. 7: Simultaneous   Equaiion Models                                                                              423

disturbances is




We apply 3SLS to eq. (4.34) to find after use of partitioned inversion and the fact
that PzZ = Z [Court (1973)]:




       Ill
          d                                          x;(qJ”c3z) -’
               = x;( #‘c3P,)X,
                          (J12’@Z’)     x,           $22@     (Z’Z)
        fi2
                                                                        I




                  X

                      1
                          x;(    V@Y,


                                ($2’@z’)Y,
                                                 +      x;(#‘2@G)Y2


                                                  + ($22@‘z’)Y2
                                                                              1
                                                                                                                         1
     (X;(!Y”@Pz)x,)-’                                   (x;(0”0P,)x,)-‘x;(0”IJ/,,@z(z’z)-’)
=



    xIWI
      I9
                m21
                                         Ln22@(z~z)-’                 -(~2,@Z)(G-GH'(HGZZt)-1HG)(~,2@Z)


                                                                                                               (4.36)
        w2




where m 2,equals the upper right-hand block transposed, G = u” 8 (Z’Z)- ‘  , and
H = X;Z and w, and y correspond to the vectors directly above. We multiply eq.
(4.36) using the fact that #‘1+,252~’+ #I2 = 0 and #’ + u”$,~+~’ = u” to find


      8 = (x;( &3Pz)x,)-‘x;(                      a”BPZ)yl             = ($x,)-‘&J,.                           (4.37)

   Thus, the 3SLS and 2SLS estimators for the first equation coincide.34 We
likewise now apply FIML to the system of eqs. (4.25) to derive the LIML
estimator.
   For the limited information specification of eq. (4.34) the basic first-order
equations of eq. (4.26) for FIML take the form


                                                                                                               (4.38)


   34While the estimator of 6 remains the same, the “3SLS’                  estimates   of II, would be more efficient
than the OLS estimates [Court (1973)].
424                                                                          J. A. Hausman

where the subscripts denote the separate sets of equations and where B and r
correspond to the LIML specification of eq. (4.33). Now we stack the equations
as we did in eq. (4.29) for FIML [see also eq. (4.36)]. To solve the system of
equations we also need to solve for I? as in eq. (4.36) using the FIML first-order
conditions:

       I?,=   [I*(z’z)-‘z’]y,-[~,,~~~o(z’z)-‘z’](Y,-x,8).                          (4.39)

We thus see that LIML adjusts its estimate of fi away from the OLS reduced-form
estimates on each iteration using the estimated structural parameters 6 as well as
estimates of the covariance matrix terms J,, and 6”. The iteration for d is just as
it was for FIML so that X, = [ZI?,         Z,] rather than 9, = PzY, as in the
3SLS-2SLS estimator of eq. (4.36). Also, the IV form is used as in eq. (4.37):
8 = ($X,))‘gy,.      Here, then, is the IV interpretation of LIML. At each itera-
tion, 6, is updated using estimates of I?,_,. Then, using b,, J2,,k, and 6:’ eq.
(4.39) is used for a new estimate II,. As usual with ML, at convergence the
estimates are all mutually consistent with each other. The asymptotic distribution
of the LIML estimator is then straightforward to find (without regard to a certain
characteristic root) because LIML is a member of our class of optimal IV
estimators for single equation estimation. The asymptotic distribution of LIML
follows directly from eq. (4.6) so that


      mL4L - S) ” N[O,cr,,(D;MD,)-‘1                =N[O,o,,plim(   fJQX,)-‘1,     (4.40)

since plim fi = II. Again the regularity conditions for ML are satisfied so the
                               -’ p lim((l/T)%X,).
Fisher information for 6, is (I,,                     I find this approach to LIML
a satisfactory way to understand the estimator.
   We now derive LIML as a k-class estimator where K is derived as a characteris-
tic root [Hendry (1976)]. First note in eq. (4.35) that

        I
              l
       u11= 7 (Y~,+zi;)'(Y~,+zi;)=~(xa,)~(x~,)

and that

       J,, = f (Y, - z&)‘(       Yh, + zf;)     = f (Y, - Zfi2)‘( A,>

from eq. (4.38). Then from eq. (4.39) we find after premultiplication            by a;X’Z
that
       a;x~zir,=A;X’p,Y*-(A;x~XA^,)-‘a;X’P,x~,A^;X’(Y,-Z~,)
                   = al, X’P,Y* - >;al, Xl( Y, - zfiz),                             (4.41)
Ch. 7: Simultaneous   Equation Models                                                               425

where >;= a;X’P,X~,/~;X’X~,.       From the derivation, fi satisfies the first-order
conditions for LIML (FIML). To choose the particular >; from the possible values
which satisfy (4.41) we choose the minimum fi since it leads to a maximum of the
likelihood function as demonstrated in Hood and Koopmans (1953, p. 170, eq.
(6.23)):

                                   A; X’XA,
      L(A,)     = -+log                                                                         (4.42)
                             A;X’(Z-     P,)XA,


Of course, the solution to eq. (4.41) requires a non-linear iterative process because
a, and I?, are functions of fi which depends on a,.
    From eq. (4.42) the likelihood function is a monotonic transformation of
1 - A = A; X’( Z - P,)XA,/A;     X’XA,,  so that A can be solved for as the smallest
characteristic root of IX;P,X, - XX;X, 1,35and A, is the corresponding character-
istic vector given a normalization p,, = 1. The characteristic equation for A and A,
is



which can be used to find

      dLIML                                                                                     (4.43)

wherei,=[?,       Z,]=[((l-rZ)Z+RPz)Y,                  Z,],withk=l/(l-);).Fq.(4.43)is
the k-class formula for LIML, since

      K=l/(l-x)=A;X’XA,/A;X’(Z-P,)XA,=A;X’XA,/B;Y’(Z-P,)YB,

is monotonic in A, and A, corresponds                to the minimum A. We thus have the
traditional LIML formula

                                                                                              (4.43a)

[Koopmans and Hood (1953, p. 167) and Theil(l971, p. 504)]. Eq. (4.43a) can be
derived by noting that the subvector of A, which corresponds to Z, appears only
in the numerator of the expression for l/(1 - A). Therefore, K in eq. (4.43a) is
minimized by “partialling out” the Z,‘s and solving for B, which gives the
minimum. Taking plims of eq. (4.41) yields plim R = plim l/( 1 - >;) = 1. However,

   35The result that X is the characteristic root which gives the minimum of the ratio of the quadratic
forms from the characteristic   equation is a standard result in matrix algebra, e.g. Gantmacher (1959,
pp. 310ff.).
426                                                                                      J. A. Hausman


the proof of plim @(I? - 1) = - plim fi( x/(1 - A)) = 0 is more difficult to
prove directly. 36 But we do not need to demonstrate     this proposition     since we
have already derived the properties of LIML as an optimal IV estimator (which in
fact does provide a proof).
   One last approach is to treat the limited information  specification   of eq. (4.34)
as a triangular    system [Pagan (1979)]. The Jacobian      term in the likelihood
function det(B) has the form


       det(B)=det[O          Bi        ,]=l,                                                     (4.44)


since B is upper triangular and its determinant     equals the product of the diagonal
elements, with the normalization     p,, = 1. Thus, our previous discussion regarding
triangular systems holds true for limited information       specifications. Thus, maxi-
mization of the “multivariate    least squares type” likelihood function


       L(B,,T,,II,*)=C+ilogdet(!I’-’


                                                                                                 (4.45)


yields LIML. It seems interesting      to note that limited information    specifications
can be put into triangular     form. However, some limited computational            experi-
ments seem to indicate that estimation of LIML in this form is an inferior method
of computation   compared to calculation of the characteristic     value and the use of
equation (4.43). 37 Nevertheless,   this approach does re-emphasize     the point made
by eqs. (4.38) and (4.39) of the role of the covariance matrix of the disturbances
in LIML estimation.


4.5.    Estimation with covariance restrictions

So far we have only considered           the case where 2 is unrestricted.   And this
situation is by far the most common. Yet we saw in Section 3 that identification
can occur via covariance      restrictions.   We now give a brief example of how
covariance   restrictions provide extra instruments     for estimation   and therefore
lead to more efficient estimates. Rothenberg      and Leenders (1964) first noted that

   36Malinvaud (1970, p. 702) proves this result by noting that the root T( K ~ 1) is distributed as a x2
random variable with K - r, degrees of freedom. Therefore plimfi(r        - 1) = 0. We prove this result
by a somewhat easier method in the next section.
   371 began the iteration from the 2SLS estimates of the first equation and OLS estimates of the other
equations.
Ch. 7: Simultaneous Equation Models                                                                     421

3SLS is not asymptotically equivalent to FIML when the covariance matrix ,X is
known. Rothenberg (1973) demonstrates that more efficient estimates can be
obtained by FIML in the case of Z restricted to a diagonal matrix. Our example
shows why this proposition holds true. A general treatment of the problem is left
to future work [Hausman and Taylor (1981)].
   For our example we use the system specification of eq. (2.1) together with the
assumptions we have previously made. In particular we assume that each equa-
tion is identified by linear coefficient restrictions and that U is distributed as
multivariate normal so that we can consider FIML estimation. We shall consider
covariance restrictions so that Z is assumed to be diagonal.38 When we consider
the first-order conditions for FIML in eq. (4.25), note that we know all the
elements of 1 a priori except the diagonal elements uji. Using the identity
X- ’= IM we transform equation (4.25, i) by postmultiplication:

     ([T(B’)-‘2-Y’(YB+Zr)]2-‘)U=0.                                                                  (4.46)

We consider the first term in eq. (4.46) and look at the ijth element of the matrix
product:


                                                                                                    (4.47)



where j3j’ is the ji th element of the inverse matrix B- ‘. We now insert eq. (4.47)
back into the bracket terms in eq. (4.46) to find

      [T(~~)-‘~-Y~(YB+Zr)]ij=(~:-k~jP*~U;-czni)~-,:)uj
                                                 t

                                            =-     zIIi   +     c /PiUk                             (4.48)
                                                               k t J’


We thus see the differences that covariance restrictions makes in the first-order
conditions. In the previous case of no restrictions on 2 in eq. (4.26), the
instruments used were IV’= &‘(%Bl,)-‘,       with Ti = [ - Z(f&‘)i     Zi] and 2 =
T- ‘(YA + Zf)‘(Yb + Zf). Two differences are present here. First, rather than
setting 8 = Z(p&l)i,     eq. (4.48) uses E = - Z(i%l)i     + ii, where each term in
gi contains all the terms in the reduced-form disturbance bi = (l?b-‘)i except the


  38Malinvaud   (1970, pp. 678-679) derives the concentrated      log-likelihood   function   for this case.
Rothenberg  (1973, p. 78) derives the Cramer-Rao bound.
428                                                                    J. A. Hausman

term p”ui which is, of course, correlated with the structural disturbance in the ith
equation. If q were not jointly endogenous, so that it was relatively recursive, we
know given the results in Section 3 that all the [(B’)-‘Elij = 0 so eq. (4.46) would
lead to q = q. FIML does the next best thing. Y = YII; + ui and FIML uses all
of that part of z)~which satisfies the condition of t being a valid instrument.
FIML uses the covariance restrictions to form a better prediction of Y. The
second diffefence is that to estimate 2, we use 2ii = [T- ‘( Yg + Zf)‘( YB + Zf)lii
and set all zij = 0. Thus, FIML both imposes the a priori restrictions on 2 and
forms better instruments, in the sense of being more highly correlated with Y
when covariance restrictions are present.
    Compared to FIML, how good are the system IV estimators when restrictions
on B are present? They can easily impose the restrictions on 2 but do not use the
reduced-form disturbances ui to form better instruments. For example, 3SLS
would continue to use q = Zfii, where fii is the unrestricted estimator of the
reduced-form coefficients. Thus, the IV estimators are inefficient relative to
FIML when covariance restrictions are present. Hausman and Taylor (1981)
define “augmented” IV estimators, AIV and A3SL.5 which are asymptotically
more efficient than regular IV or 3SLS estimators. These augmented estimators
take into account that part of I+ which is asymptotically uncorrelated with ui
when forming q. And the AIV estimator, if iterated until convergence, yields the
FIML estimator. However, the non-iterated AIV and A3SLS seem asymptotically
less efficient that FIML. I conjecture that an additional term will be found
through linearization of the likelihood function which will make an estimator
much like AIV asymptotically efficient. For now, we require an iterative proce-
dure if we want to achieve the asymptotic Cramer-Rao lower bound. Lastly,
Hausman and Taylor (198 1) extend FIML and the augmented estimators to the
case when only some uii = 0, rather than all. To answer partially Rothenberg’s
(1973, p. 73) question about the likely value of covariance restrictions, we use the
 IV setup of FIML in this case. In a time-series context with slowly trending
variables, q = ZIIi often does a good job of “predicting” Y, i.e. the R2’s are
high. Thus, covariance restrictions would usually lead to small gains in asymptotic
 efficiency. On the other hand, in cross-section simultaneous equation models on
 individual or firm data, the covariance restrictions might well lead to substantial
 gains in asymptotic efficiency. In cross-section models the R2’s are often low so
 that the residuals could play an important part in providing better instruments, if
 the restrictions are indeed true.


4.6.   Other considerations

We have looked at most of the simultaneous equation estimators. We now turn to
three other problems all involved with estimation.
Ch. 7: Simukneous    Equation Models                                                                   429

(1) Among the equivalent classes of IV estimators, might some be better than
others? We have proven first-order asymptotic equivalence but we might consider
higher orders of approximation. R. A. Fisher claimed that ML was best here; and
Rao (196 1, 1962) and Efron (1975) have defined and considered “second-order
efficiency” properties of ML. As we iterate from an efficient estimate to ML, we
know that contact with the likelihood function is increased at each iteration. The
unanswered question might be to ask what that means for estimation or hypothe-
sis testing. Pfanzagl (1975) gives a partial answer where he demonstrates that
(higher order) bias corrected ML estimates may lead to more powerful tests in
regular situations. In fact, Pfanzagl (1975) and Akahira and Takeuchi (1981)
define second-order efficiency on the basis of estimators which yield the most
powerful one-sided test. Pfanzagl and Wefelmeyer (1978) and Akahira and
Takeuchi (198 1) also go on to consider “ third-order efficiency” which is defined
in terms of the concentration of the distribution of the estimator in convex sets
which contain the true parameter. The latter authors prove that LIML and FIML,
when bias corrected, are superior to 3SLS and 2SLS on third-order efficiency
grounds. But the issues raised are far from settled, especially the acceptance of the
definition of third-order efficiency. We know that FIML and LIML both impose
the overidentifying restrictions in forming the instruments and thus differ from
3SLS and 2SLS. The consequence of these additional restrictions still remain to
be worked out fully. One suggestion which does arise from the second-order
literature is the improvement which follows from asymptotic bias corrections to
ML estimators. Investigation of these corrections in some simple cases might be
worthwhile.39

(2) Even when first-order approximations are used, we do not yet know the best
method to compute the asymptotic covariance matrices. For instance, the FIML
estimated inverse information matrix (p(Z@I)-‘_$C)-’      is typically larger than
the 3SLS estimated covariance matrix which does not impose restrictions in
forming 2. And the difference can be substantial, as simple examples demon-
strate [Hausman (1974)]. Furthermore, recently Efron and Hinckley (1978) and
Hinckley (1980) have given non-simultaneous equation ML estimator examples
which tend to show that the estimated inverse information matrix may not be that
accurate. Better approximations may be required; the question of second-order
approximations arises. It might be the case that the next order of approximation
to the Hessian, using the Newton-Raphson         matrix of second derivatives at
convergence, might be superior to use of the inverse information matrix.40


    39However, this issue is far from settled in the statistics literature, even for simple models. See the
article by Berkson (1980) together with the discussion which follows the paper.
   40This statement only pertains to estimation of the covariance matrix, nor to efficient methods of
calculation of ML estimates.
430                                                                                    J. A. Hausman


(3) Lastly, we have the related question of the accuracy of the asymptotic
approximations in finite samples. We know that finite sample moments of the
estimators, either structural estimators or reduced-form estimators, no matter how
large the sample is, need not exist [Basmann (1961) and Sargan (1978)].41
Existence of finite sample moments for the single equation instrumental variable
type estimators usually depends on the degree of overidentification        [Phillips
(1980)]. Whether non-existence of moments should be troublesome depends on
the use that we plan for the estimates. Certainly, for hypothesis testing the
problem may not seem too important.
   Next, we might want to assess the accuracy of the asymptotic normal ap-
proximations. Exact finite sample distributions are known for some cases
[Basmann (1975) and Phillips (1980)] but they are quite complicated to compute.
They have not received much use to date. Much current research is being done on
the quality of the asymptotic approximations [Phillips (1981a) and Phillips
(Chapter 8 in this Handbook)].42 From the current results we know that the first
order normal approximations are not generally thick enough in the tails. More-
over, the actual distributions are also usually asymmetric. Thus, we might well
expect more refined asymptotic approximations to be useful. I feel that their most
important use might be to let us choose among estimators. Some recent work of
Anderson et al. (1982) uses approximations to demonstrate the mean square error
superiority of LIML over 2SLS when the equation is overidentified to a sufficient
degree. We certainly want the best estimators possible. But I expect that in the
near future hypothesis testing will continue to be based on the asymptotic
approximations. However, the outstanding current unresolved problem seems to
be whether even better asymptotic approximations or, rather, direct approxima-
tions to the finite sample distributions, will be the more useful approach in the
long run for the development of convenient and useful approximations for
econometric estimators and tests.43


5.    Specification iests

Given a specification of a linear simultaneous equation system as in eq. (2.1), the
opportunity exists to test both coefficient restrictions and asymptotic orthogonal-
ity assumptions. The first type of test, which considers overidentifying restric-
tions, was developed in the early work at the Cowles Commission by


  4’Estimators   have recently been proposed which are guaranteed to have finite sample moments.   See
Zellner (1978) for structural form estimators and Maasoumi (1978) for reduced form estimators.
  42The small sigma approach of Kadane (1971) is also of relevance here.
  43Phillips ( 198 I a) discusses this issue.
Ch. 7: Simultaneous   Equation Models                                                                   431


Anderson-Rubin        (1949) and Koopmans-Hood        (1953). We shall refer to these
tests as classical specification tests. It is perhaps surprising that these classical
tests are not used more in applied work. One problem, already referred to, is that
for large macro models, sufficient observations may not be present to estimate the
unrestricted reduced form which is required to apply the tests.44 But perhaps
more importantly, a rejection of the overidentifying restrictions gives no clear
indication of what action to follow next. Since we saw in Section 3 that M
restrictions in each equation are required for just identification, multiple compari-
son procedures of the Scheffe (1958) form seem difficult to apply to help decide
which restrictions are not correct. 45 Lastly, the tests are inapplicable to non-linear
simultaneous equation systems, which we turn to in the next section, where a
closed-form reduced-form specification does not usually exist. The asymptotic
orthogonality tests, applied to simultaneous equation specifications by Wu (1973)
and Hausman (1978), deal with the structural form rather than the reduced form.
Thus, a maintained set of just identifying assumptions are required but specific
overidentifying assumptions may be tested. Neither sample size nor non-linearity
restrict use of the tests, to the extent that the asymptotic distribution theory
provides a reliable guide to the behavior of the test statistics.
    We first consider the complete systems test which takes all overidentifying
restrictions in the system into account. Define K - ri - si = K - ki to be the
 degree of overidentification in the i th equation, where each restriction is assumed
 to affect overidentification by our previous definition in Section 4. Then let
p=MK-CM        k= ,ki be the degree of overidentification in the entire system.46 A
joint test of all overidentifying restrictions then can be constructed by comparing
 the unrestricted estimates of the reduced-form coefficients 17, to be restricted
 estimates of the coefficients IIR. Since the latter estimates are subject to p
 overidentifying restrictions, we can perform a test of the restrictions. Various
 asymptotically equivalent tests can be defined. First, we might consider a likeli-
 hood ratio (LR) test based on the likelihood function of eq. (4.32). The restricted
 estimates can be based on any of the optimal system IV estimations, although the
 FIML estimates seem best given that we base the test on a comparison of



   MWegge (1978) offers a sequential test procedure of beginning with a just identified system and
adding restrictions to help alleviate this problem. He bases his procedure on the indirect least squares
estimator.
   45But conditional    on the just-identifying  restrictions,  multiple comparison     procedures  could be
applied to the overidentifying   restrictions of the reduced-form     coefficients. However, these tests may
be quite difficult to interpret.
   *As always when restrictions are tested, one must be careful not to count redundant restrictions in
determining    the appropriate   degrees of freedom. The precise criterion to use here is the number of
non-redundant      restrictions on the reduced-form   coefficients. Such a determination   may be quite
difficult in actual situations.
432                                                                                         J. A. Hausman


likelihood values. Regularity conditions for LR tests are satisfied given a normal-
ity assumption so that after simplification:47

      wp         $Z$) =Tlog(
              -210g(     2).                                                                          (5.1)
Under the null hypothesis of correct specification, Wp is distributed as central xz.
We could also directly compare fi, with fi, via Wald or Lagrange multiplier
(LM) which are asymptotically equivalent to LR tests [Silvey (1970, ch. 7)]. Let us
now consider the stacked form of reduced-form coefficients, rr, as they were
defined in eq. (4.21). If the overidentifying restrictions are put into the form
h(a) = 0, weAthen use a first-order expansion around ii,, h(a) = h(Q+ Z!Zu(r -
ii,), where H,, is evaluated at ?i,. Then a possible test of the overidentifying
restrictions is [Silvey (1970, p. 116) and Byron (1974)]

                                                                                                     (5.2)
where $,, = ??( 6; ’@Z)z, and where 2 = Z@Z. tip has the same asymptotic
distribution under the null hypothesis as does Wp. Another asymptotically
equivalent test, which is perhaps the computationally most convenient, is to note
that 7jR= ii, + ~~‘ri:[~~~,-‘ri:]-‘h(?i,) [Silvey (1970, p. 119), Malinvaud (1970,
p. 360), and Maasoumi (1978)] so that we find the LM-type test statistic:

      tip= (?& - 7j,)?&( 7jR- li,),                                                                  (5.3)
where again under the null hypothesis kP is distributed as central $.“” Besides
the problems previously mentioned, even the most convenient test Wp is difficult
to interpret since it is based on estimated n ‘s. Since almost all our economic
theory and most of our empirical knowledge centers about the structural parame-
ters (B, r), we usually find it difficult to determine what is wrong with the
structural equation specification when we base tests on the estimated reduced-form
coefficients.
   We now turn to single equation tests of overidentification.       Anderson and
Rubin (1949) based their version of this test on the asymptotic distribution of the

   47Viewed from a minimum distance perspective, this test continues to hold even if the stochastic
disturbances are not normal, asymptotically. See Bemdt, Hall, Hall and Hausman (1974).
  48Note we are not quite using a true LM statistic which would require bR rather       than i, in forming
4. Yet another asymptotically   equivalent test of the overidentifying restrictions     is to use the 3SLS
estimates to form GP = li’( S- ’0 Z( Z’Z)- ‘Z’) li. However, the test of eq. (5.3) may be preferred since
it allows comparison  of the restricted and unrestricted     coefficient estimates.
   49We do not discuss the test of just identification   proposed in the single equation context. It can be
found in Koopmans and Hood (1953, pp. 183-184). It is based on the two smallest characteristic         roots
of the LIML determinental    equation.
Ch. 7: Simultaneous        Equation Models                                                            433


smallest characteristic root derived from LIML [eq. (4.42)]. The test is based on
T(ri - 1) which under the null hypothesis is distributed as X2 with p, = K - k,
degrees of freedom. An asymptotically equivalent test for over-identification of,
say, the first equation, can be applied with any optimal single equation IV
estimator, e.g. 2SLS which is asymptotically equivalent to LIML. First estimate
d,, from an optimal IV estimator. Define the vector t, = [y, Y,] and estimate
M,, = Y{Q,Y, for Q, = I - Z(Z’Z)-‘Z’.       Then define p,,lv = [l /?,,,I. The test
statistic is then [Malinvaud (1970, p. 712)]

       Wp,=~[~,,/(P,,IV~1IS;,IV)-llr                                                                (5.4)

where wP,is distributed as X;,, and wherep, = K - k, under the null hypothesis.50
Eq. (5.4) is straightforward to derive from the LIML likelihood function for the
restricted and unrestricted reduced-form estimates as in eq. (5.1). Since u,, =
(B’fiB),,, while M,, is the submatrix of 0 containing jointly endogenous vari-
ables in the first equation, we see that the ratio in eq. (5.4) resembles the ratio of
the restricted to unrestricted reduced form covariance estimates of eq. (5.1).
   An asymptotically equivalent test for n&specification which is easier to com-
pute can be derived by using fi rather than ri- from eq. (4.43a) since they are
monoJonic transformations of each other. After a normalization we find >;= (y,
 - X,&)‘G(.Y, - Xi&)/&,,. We now derive the limiting distribution of >;. The
idea is to form 4, = Pzti,; under the null hypothesis of no misspecification 4
should be near zero given the orthogonality of the instruments. Suppose we
estimate 8, by 2SLS; LIML estimates will yield the same asymptotic distribution.
Notethatli,=u,-X,(~,-S,)sothat~,=P,ti,=P,u,-P,X,(X;P,X,)~’X;P,u,.
We then form the statistic:

                              =   Ti =   ii;P,zi, /6,,
       “P,  =   4;41/~11

                                    A
                  GAu,/~,,          -    x;,,                                                     (5.4a)

where A = [P, - P, Xl ( Xi P, Xl )- ‘_X;Pz], which is an orthogonal projection since it
equals P, - Pf,, where Xl = P,X, which lies in the subspace spanned by the
columns of Z. The degrees of freedom follow since the dimension of P, is K, while
the dimension of Px, is k,. Computationally this statistic is easily calculated.
Regress 2, on all the instruments and calculate GP,= TR2, where R2 is the
coefficient of multiple correlation. Of course, this result demonstrates the Lagrange
multiplier characteristic of the test. Both the derivation and computation of this

   “Note    that the expression in eq. (5.4) is just T(K - I) in our earlier notation except that the LIML
estimates   have been replaced by asymptotically       equivalent estimates and we have used K from eq.
(4.42).
434                                                                                             J. A. Hausman


test statistic based on x seem a good deal easier than the Anderson-Rubin (1949)
test for T(k - 1) which is the traditional overidentification       test statistic. A
problem of interpretation exists for these limited information tests as it did with
the system tests of overidentification since we cannot compare structural parame-
ter estimates under the null and alternative hypotheses.
   An alternative test of overidentification which does permit such a comparison
is given by Hausman and Taylor (1980b).51 This test is closely related to the
asymptotic orthogonality tests of Wu (1973) and Hausman (1978). We again
consider the first equation, y, = X,S, + u,. As the maintained hypothesis, we
assume that the Y, instruments which correspond to Z, plus an additional s,
instruments are valid, 2,. We then test the validity of the additional K - r, - s, =
p, instruments. Note that we then have a test of overidentification of these
instruments, Z:, because we are partly testing the exclusion restrictions on them
in the first equation. Our test is based on a comparison of the structural
coefficient estimates, 6, and 87, where the latter estimator is IV with both II’, and
 W: as instruments. Define Z = [2, : Z:]. Then we define


      Q=d,-&=            [(x;P;,x,)_‘xy,,-(X&X,)_‘X&]y,.
Then the statistic




is distributed as x2 with degrees of freedom min[p,, k,] under the null hypothesis
where [ -1’ denotes any generalized inverse. A subset of the overidentifying
restrictions can be tested in the same way. Note that we have explicitly stated a
sufficient number of instruments to just identify the equation under the maintained
hypothesis. But we can then compare differences in the structural estimates about
which our economic knowledge is typically much greater than the reduced-form
coefficients.
   A somewhat similar system test is given by Hausman (1978). He proposes
comparing full information and limited information estimators, e.g. 3SLS and
2SLS, to test the specification of the rest of the system if any equation is
overidentified.    The test is again based on the structural parameter estimates,

   “W. Taylor has pointed out that Anderson-Rubin                type tests of overidentification      are only
necessary but not sufficient as tests for the predeterminedness      of the overidentifying  instruments.    The
following type of test is appropriate  for a test of the legitimacy of the overidentifying      instruments.
   52We assume here that B is unrestricted.    If oiii = 0, then equationj   is dropped from the system for
this test.
Ch. 7: Simultaneous Equation Models                                                                 435

Q=6    I, FI -8   ,, LI.   The test statistic is

                                                                                                 (5 *7)

which, under the null hypothesis of correct specification, is distributed as x2 with
degrees of freedom min[k,, p - p,]. Again the interpretation of the structural
coefficients should be more fruitful in an applied problem.
   The last type of specification test considered are the so-called causality tests of
Granger (1969) and Sims (1972). We do not attempt a discussion of the somewhat
difficult notion of causality here; nor do we consider the possible usefulness of
causality tests as tests of proper dynamic specification. Instead, we consider the
tests within the context of a simultaneous equation estimation, in particular as
tests of whether variables can be tested as predetermined.53 Wu (1973) and
Hausman (1978) have proposed tests of whether right-hand-side variables can be
treated as predetermined. We know that this condition is one of the two
conditions which allow a variable to be used as a valid instrument. The test of eq.
(5.6) on the validity of instruments is an example of Wu-Hausman type tests.
Recently, Sims (1977) and Geweke (1978) have used the Granger-Sims causality
tests as “exogeneity tests.” We want to see what Granger-Sims tests can tell us
about the validity of instruments.
   The example often used in the causality literature is the case of a bivariate time
series:




where aii(L) = C~&zijkLk is a polynomial in the lag operator Lk~,,t= Xl,r-k.
We make the usual assumption that u is i.i.d. with mean zero and covariance
matrix 2. The system is assumed stable so we can write

      x2=b(       L)x,+v,                                                                        (5-9)

where b(L)= - a,,(L)/a,,(L)         and v = 24,/a,,(L).   What are the conditions
required for x, to be predetermined? From Section 3 we know that for x, to be
relatively recursive, we require that a,,(O) = 0 and u,~ = 0. The stronger condition
of exogeneity requires that all u,~( L) = 0 [Koopmans (1950) and Zellner and
Palm (1975)]. The Granger-Sims causal ordering requirement, sometimes referred
to as exogeneity, is that the projection of x2, on the entire x, process has zero


   53The following section is closely related to Wu (1979). A discussion of Granger causality for
dynamic rational expectation models and its relationship to the validity of instruments is contained in
Hansen and Sargent (1980).
436                                                                                     J. A. Huusmun


coefficients for future x,‘s covariance E(x,u;) = 0. Thus, the Granger-Sims
requirement is that a,2k/a22k = c~cr,,/u~~ for all k > 0 and a scalar LY,which is a
weaker requirement than simultaneous equation type exogeneity.
   The question at issue is whether under these three assumptions x, is a valid
instrument for eq. (5.9), i.e. does least squares provide consistent estimates for
b( L)?54 We know that the first two definitions provide consistent estimates. Since
under both assumptions plim( l/T) X;V = 0, eq. (4.5) guarantees consistent esti-
mation. But the causal ordering requirement is neither necessary nor sufficient for
consistent estimation of b(L). Granger-Sims’ causality may not hold, but x, can
still be predetermined: a,20 = 0 but some a,2k * 0 for k > 1. Remember that a
valid instrument need only be predetermined, not exogenous, which is a much
stronger requirement. Neither is Granger-Sims causality sufficient for consistent
estimation since in the case of a static model a,2k = azlk = 0 for all k > 1 but
a,20 * 0 so that x, is jointly endogenous. Thus, we conclude that a Granger-Sims
causality test cannot answer the question of validity of instruments. Furthermore,
the necessary assumption for its use, u,~ = 0, places it together with recursive type
specifications. In Sections 2 and 3 we argued that system recursive specifications
are of very limited usefulness compared with structural specifications. Relative
recursivity of a variable with respect to a given equation seems to be a more
useful notion since it determines whether a variable can be treated as prede-
termined in a given equation. But the specification of the equation is crucial to the
question of relative recursitivity since plim(l/T)v,&      is necessary for yj to be
predetermined with respect to equation i. Consideration of yi and _yjin isolation
cannot answer whether a variable can be treated as predetermined since ui has not
been properly specified. Other important uses of causality tests may exist, but
they cannot answer the crucial question that arises in the specification of
structural simultaneous equation models.55


6.    Non-linear specifications

Specification and estimation of non-linear simultaneous equation models has
many similarities to the linear case. But important differences arise also. In this
section we give an overview without the detailed investigation that we attempted
in the linear case. The subject is much less settled than in the linear case. First

   540f course, we can always estimate a recursive form of eq. (5.8). But as we argued in Section 2, we
then no longer have the coefficients which correspond to our structural specification.
   55Zellner (1979a) examines the usefulness of causality tests from a different perspective but he also
concludes that additional structure is needed for them to be useful. Engle, Hendry and Richard (198 1)
conclude that (Granger) causality is “irrelevant” given the assumptions which were made in Section 2.
They also give another example when Granger causality is neither necessary nor sufficient for
predeterminedness.
Ch. 7: Simultaneous   Equation Models                                                         437

consider the specification          of a single non-linear    simultaneous     equation     with
additive errors:

      fi(Y3z3a)=u,,             i=l ,**-, M,                                               (6.1)

where as before y and z are jointly endogenous and predetermined variables and
(Yis the vector of unknown coefficients. The stochastic disturbance ui has mean
zero and covariance V(u,) = u,J,. The contemporaneous covariance matrix is Z
so that E( UU’)= X81,. Non-linear simultaneous equation specifications can arise
in a number of ways.

(1) Non-linear functional forms, fi, can lead to jointly endogenous variables
entering the specification non-linearly. For instance, a factor demand equation
which arises from a two-factor production function might well have the specifica-
tion:

      4i* =Pi1Plr +P;2P2t +Pi3PItP2l+          Pi4Pft +PiSP22, + ‘ityi + ‘ip              (6.la)

for i = 1,2, where the factor prices, p,, and pzr, are jointly endogenous. Of course,
more complicated functions fi can arise which do not have a polynomial form.

(2) Non-linear identities can transform an otherwise linear specification into a
non-linear specification which is linear in parameters form like eq. (6.la) but is
non-linear in variables. An example arises when price and quantity are used to
determine expenditure.

(3)  Essentially linear specifications may become non-linear due to non-linear a
priorirestrictions among the parameters or by induced transformations to account
for serial correlation in the stochastic disturbances. These latter, “non-linear in
parameter” specifications are much closer to our previous linear case. We first
turn to this latter situation.

   Assume that the ith equation can be written in the form

      ~i=Y:.p(a;)+z;y(CXi)+Ui=xJ(ai)+ui,                     i = l,...,M.                  (6.2)

Eq. (6.2) the non-linear in parameters specification, is non-linear only because
the structural parameters depend on the 0~~in a non-linear manner. As before we
have a reduced-form specification which is now non-linear in parameters:

         Y= zIr(a)+l/,                                                                     (6.3)
where CY=(a;,...,        r&M).A sufficient additional assumption for identification of eq.
438                                                                                         J. A. Hausman


(6.2) arises due to the non-linearity          induced by the function a((~;):
Assumption       6. I

The inverse mapping of 6(a,) is one-to-one and continuous in the neighborhood
of the true value 6* = a($). Also, 6(a,) has bounded third derivatives in the
neighborhood of a: and the matrix as/&xi has full column rank.
   This assumption basically assures a unique solution locally; therefore, the
notion of identification holds only locally rather than globally as in linear
specifications.56
   The optimal single equation instrumental variable estimator can be trans-
formed for this non-linear in parameters specification. Consider the IV estimator
for the first equation:


      y@,-              %-4)‘6;z~Z~,)(a;Z~Z~,)-‘
                              [(                (~Z~Z~~)](~,                           - a((~,)),   (6.4)


where 8, has been estimated via the instruments W, = Za,. Note that the term in
brackets arises from the estimated covariance matrix from eq. (4.7). Here the
optimal instruments remain the same as before with the requirement that plim a,
= D,, so that a, = (Z’Z)-‘Z’X,   then yields

      mjn(b,-s(a,))‘[a;(z~z)a,](b,-8(LY,)).                                                         (6.5)

A linear approximation to the constraints around the true value, 8, = 6( a:)+
( as( (xT)/&x,)*( 6, - @) a 11ows straightforward proof that the estimator &,,,,
has an asymptotic normal distribution so that




An important special case of this estimator is the autoregressive specification
where in the original equation ulr = p,u,,,_, + vlr. The specification of eq. (4.1)
then becomes

      Yl=PlY,,+~x,-Pl~l,~~+~l~                                                                      (6.7)

where Xl, = Xl,_ ,_ The optimal instruments now depend on a consistent estimate
ofP,,~,=(Z~,-&~,,         Z, - fi,Z,,). Similarly autoregressive LIML and auto-


 56Fisher   (1966)and Rothenberg    (1970)discuss local identification   conditions.
Ch. 7: Simultuneous   Equation Models                                                                     439


regressive 2SLS have been considered. An important computational simplification
can often be made by using the fact that the instruments need only be based on
initial consistent estimates with no effect on the asymptotic distribution.57
   The non-linear in parameters specification (with across-equation constraints)
can also be made for the full system specification: 5R

      YB((Y)+zr(a)           = m(a)       =u.                                                          (6.8)
For the stacked specification y = B(cw)+ u, optimal IV estimates take the form

       mjn(b - S(a))‘(Bl(%w)-‘b)(b - W),                                                               (6.9)

where t=diag(k,,...,    kM) with ki = Zai and plim ai = Di = [Hi Ii]_ Hausman
(1975) demonstrates that this estimator is asymptotically equivalent to the FIML
estimator given a normality assumption on the U. Autoregressive specifications
can also be considered in this formulation; Hendry (1976) gives a review.
   We now turn to IV estimation of the general non-linear simultaneous equation
specification with additive disturbances. We forgo a discussion of regularity
conditions; Amemiya (1977, and Chapter 6 in this Handbook) outlines the
appropriate assumptions. The general method of application is quite straightfor-
ward. We linearize the equations around an initial parameter estimate, (Y’,and
apply an instrumental variable estimator. A new estimate a2 is obtained and
iteration continues via minimization of a sum of squares type objective function.
The approach is identical to the Gauss-Newton approach to non-linear least
squares problems, e.g. Seber (1966, ch. 10) or Malinvaud (1970, ch. 9).59 If we
expand the first equation from our specification of eq. (6.1) around some (Y’,we
find

                                                                                                     (6.10)

where g,’is the matrix of first derivatives gf = af, ( y, Z, a’)/da. The simultaneous
equation problem exists because plim(l/T)g;u,        * 0 since g, contains the jointly
   57However, iteration is still required to find the estimate of p, as a parameter in the equation. See
Sargan ( 1959, 196 1, 1964), and Fair (1970)for these estimators. Hendry ( 1976) provides a convenient
summary.     An asymptotically      optimal IV estimator      which does not require iteration is given by
Hatanaka    (1976).
   58This specification  has recently received considerable        attention in rational expectation    models
[Wallis (1980)].
   59Goldfeld and Quandt (1968) and Kelejian (197 I) first applied this methodology          to specifications
which were linear in the parameters,        but non-linear in the variables. Amemiya (1974b) proposed the
use of the Gauss-Newton       linearization   technique (although he took a minimum distance approach to
the problem). Hansen and Singleton (1982) apply the IV technique to non-linear rational expectations
models.
440                                                                                              J. A. Hausman


endogenous variables. Suppose we have a T X K, matrix of instruments, W,. We
use eq. (4.4) to apply the instruments to eq. (6.10) to find the new estimate of IY:

       a2- a’= (wig;)_‘W,‘f,(y,z,ff’).                                                                    (6.11)

We now expand around a2 and the iteration continues.60 An alternative, but
equivalent, approach is to use the matrix of instruments           W, to solve
W;f,( y, Z, a’) = 0. The Gauss-Newton method applied to this equation again
leads to eq. (6.11). At convergence, we apply eqs. (4.6) and (4.7) to derive the
asymptotic distribution of the non-linear IV estimator &iv: 6’




                                                                                                         (6.12)

   Where do we find the instruments? In the linear case they arose from the
reduced form. The crucial difference between the non-linear and linear simulta-
neous equation specification is the absence of a reduced-form specification which
allows the additive separation of jointly endogenous variables into a function of
the predetermined variables and stochastic disturbances, Y = ZII + v in the
linear case. In the non-linear case the reduced-form specification has the form
yt = h(z,, a, u,), where Y,, q, and u, are all M x 1 vectors for some function h.
Analogously to the linear specification we might set u, = 0 and use j$ = h ( zl, ai, 0)
for some ai and perhaps even iterate on the instruments. But the function h does
not usually exist in convenient closed form so the alternative [Kelejian (1971)]
suggestion is to form W, from linear and non-linear combinations of the
predetermined variables which serve as instrumental variables. No best choice of
instruments exists; but as in the linear case we want to come as close to Eg,( a) as
possible while still retaining the instrument property of II’,. Given the wide choice
of instrumental variables, what about the identification problem since in the
linear case we stressed the equivalence of identifiability with the existence of
sufficient instruments? Speaking somewhat loosely, the identification problem no
longer exists in its previous form. The reduced form is no longer linear so that
non-linear functions of predetermined variables can be used to form instruments,

   601t is important to do true instrumental      variable estimation here not “repeated least squares”. True
IV estimation      leads to consistent     estimates while the analogue      of 2SLS is often inconsistent.
Inconsistency    occurs when a non-linear function of a predicted endogenous            variable is used in the
second stage of the estimation        procedure.    At MIT this latter estimator     is called the “forbidden
regression”.   However, the IV procedure of eq. (6.1 I) is guaranteed         to be consistent so long as the
orthogonality    conditions are satisfied.
   6’We have no guarantee that this procedure converges. Nonlinear optimization             routines exist which
do guarantee convergence given regularity conditions;           see Quandt (Chapter 12 in this Handbook)       or
Bemdt, Hall, Hall and Hausman (1974).
Ch. 7: Simultaneous   Equation Models                                                                   441


 I#‘,. Therefore, a wide variety of non-linear functions might be used. Analogously,
the jointly endogenous variables y are no longer normally distributed even if u is
so we are no longer restricted to linear combinations of z in forming W,. We thus
usually have more instrumental variables than are needed.62
   Let us therefore consider formation of W, to allow for the presence of greater
than K, instrumental variables. The situation is analogous to the overidentified
linear case where the predetermined variables Z provide greater than K, instru-
mental variables. There we formed W, = Za, = Z( Z’Z)- ‘Z’X, which also had a
minimum distance interpretation. Here we use linear and non-linear combinations
of Z to form a T X t%, matrix of instrumental variables I@,. We now use the
minimum distance formulation for a T X L, matrix of instrumental variables m,,
rank( @, ) > k,, to find the k, linear combinations of p, most highly correlated
with g, by minimization of 63

                                                                                                    (6.13)

The solution of eq. (6.13), called the non-linear 2SLS (NL2SLS) estimator by
Amemiya (1974) has the asymptotic distribution




                                                                                                   (6.14)
which follows from an application of a Taylor expansion in (Yof the first-order
conditions of eq. (6.13):

      ~;(~)~,(~t;ci:)-‘~g,(cy)              =o                                                     (6.15)

Note also that the asymptotic covariance matrix in eq. (6.14) coincides with that
in eq. (6.12) when W, = J#‘,(F@%‘,)-‘J@{g,(&,,). Thus, the “minimum distance”
NL2SLS estimator is an IV estimator on the linearized equation (6.10). The
particular choice of instrumental W, corresponds to the optimal choice of
instruments in the linear case. Thus, the asymptotic distribution follows directly
from the IV theory applied to the linearized equation. Inclusion of additional
instruments in I&‘, will decrease the asymptotic covariance of ai,,,,,,   but the
finite sample properties are unknown.
   We now turn to estimation of the complete system of eq. (6.1) written in
stacked form as f(y, Z, CX)= U, where u has mean zero and covariance matrix

   621n certain special cases we may still be close to the linear situation. An example is given by Fisher
(1966, ch. 5).
   63This function follows directly from the proof of the optimal IV estimator in the linear case.
442                                                                                       J. A. Huusman


EsI,.    The systems IV estimator matrix in the linear case was based on F each
of which was a linear function of the predetermined    variables, FI$ = [ ZII;   Z,].
Here we might well want to allow for different combinations        of instrumental
variables in each equation. Therefore, we consider the NL3SLS estimator:

      ~J=tf’(y,r,a)(S-‘BI)H(H’(S-‘BI)H)-’H’(S-’~I)f(y,r,ly),
                                                                                                 (6.16)

where H=diag(H,,...,   HM), Hi = R from above, and S is a consistent estimator
of Z.64 The asymptotic  distribution  of the estimator is derived via a first-order
Taylor expansion of the first-order conditions to find

      fi(a;   NL3SLS-~)      fi N 0,plim ~g’(a)(sl~l)~(~/(~-l~~)H)-’
                                 i       [

                                     x H’(S-‘@l)g(a)]-‘).                                         (6.17)


In the case where we restrict the number of instrumental      variables in Hi to be ki
[as we did in eq. (6.1 l)] we can simplify the covariance matrix in eq. (6.17). But
again it seems best to include a large number of instrumental     variables to increase
the asymptotic efficiency of our estimator.65


Maximum likelihood estimation

As in the linear case, the likelihood function follows from Assumption     4.3 that the
structural disturbances    follow a non-singular   normal distribution. We rewrite the
specification  of eq. (6.1) in non-stacked    form

      F(.Y,Z,a)=U,                                                                               (6.18)

where U is a T X M matrix with distribution                U - N(0, 2~1~). The log-likelihood

   64This first estimator was first defined by Berndt et al. (1974). An alternative definition of NL3SLS
is given by Jorgenson and Laffont (1974) who take the case H, = Hj for all i and j. Their criterion
function is then

      G=ff’(S-‘8H,(Hi’Hi)m’H~)            sinceH=IOH,,

which is analogous to the linear 3SLS estimator.
   65Amemiya (1977) explores the best chcice of instruments        for eq. (6.16). However, for practical
usage we still need more guidance since he concentrates     on forming instruments   from the expectation
of g which would necessitate involved computations     given the non-linear structure of the problem and
the absence of an additive reduced-form specification.   Bowden and Turkington (1981) do a study for a
specific example. Their results emphasize the importance         of having the instrument    close to the
expectation of g.
444                                                                                          J. A. Hausman


   Lastly, we consider consistency issues. For consistency the large sample expec-
tation of the first-order condition must equal zero so that we require


                                                                                                     (6.23)


Amemiya (1977) demonstrates that this condition is satisfied for l-l distributed as
multivariate normal. However, it is not satisfied in the general case of EU = 0,
V(U)= ,?@I,.      Thus, FIML in the non-linear case may not be consistent if U is
not normal. In the linear case, since the IV form FIML did not depend on
normality, FIML was consistent even without normality. But in the non-linear
case, the instruments, Gi, contain the non-constant term, ag,,/&,,      which arises
from the Jacobian and maintains the distributional assumption in the first-order
conditions. As in the previous paragraph, because of the additive separability of
the reduced form we have EP = Zfi+ v= Y for the linear case when we form
instruments regardless of the distribution of U and F/. The reduced form in the
non-linear case y = h(z, (Y,u) does not have the separable property. Phillips
(1981b) has recently shown that consistency does not of necessity require nor-
mality.67 But for the general situation it appears that FIML is likely to be
inconsistent without normality. That is why the IV approach to estimation of
simultaneous equations seems more useful than the approximate ML approach of
Hendry (1976) since it need not be based on the assumption of normality.
    Since the preceding IV estimators, NL2SLS and NL3SLS, do not require
normality, a specification test seems in order. For instance, comparison of &,,ssLs
with air,,, using the result of Hausman (1978) permits a test of normality since
both estimators are consistent under the null hypothesis of normality, while
  ”
(yNLssLs   is asymptotically inefficient. Under the alternative hypothesis, B,,,,,,
remains consistent while ai,,,, usually loses consistency. Fair and Parke (1980)
employed such a test but lack of sufficient degrees of freedom seemed to cause
problems in the asymptotic approximations employed. Note that the specification
 tests discussed in Section 5 form the basis for testing the structural specification
due to the absence of a convenient reduced-form specification. Further develop-
ment of tests for the misspecification of non-linear simultaneous equation models
clearly seems an important next step in their use.68


   “A class of distributions    does exist for each non-linear model under which FIML will be consistent.
But the generality of the class depends on the particular model specification.       Phillips also points out
that Amemiya’s regularity conditions are not sufficient for consistency. Strengthened        assumptions  can
be made, however.
   68Tests of overidentification     are possible for non-linear systems. The non-linear analogues of eqs.
(54a) and ip of footnote 48 can be used. However,       these tests seem less interesting than in the linear
case due to the absence of a benchmark  unrestricted     reduced form to base the test on.
Ch. 7: Simultuneous     Equation Models                                                                               445


References

Adcock, R. (1878) “A Problem in Least Squares”, The Analyst, 5, 53-54.
Akahira      T. and K. Takeuchi         (1981) Asymptotic         Efficiency of Statistical Estimators.       New York:
    Springer-Verlag.
Amemiya, T. (1974a) “The Nonlinear Two-Stage Least Squares Estimator”, Journal of Econometrics,
    2, 105-I 10.
Amemiya, T. (1978) “The Maximum Likelihood and the NL3SLS Estimator in the General Nonlinear
    Simultaneous     Equation Model”, Econometrica, 45, 955-958.
Anderson,      T. W. and H. Rubin (1949) “Estimation                  of the parameters       of a Single Equation in a
    Complete System of Stochastic Equations”, Annals of Mathematical Statistics, 20, no. 1, 46-63.
Anderson, T. W., N. Kumtomo and T. Sawa (1982) “Evaluation                         of the Distribution    Function of the
    LIML Estimation”,        Econometrica, 50, 1009- 1027.
Basmann, R. L. (1957) “A Generalized                Classical Method of Linear Estimation of Coefficients in a
    Structural Equation”, Econometrica, 25, 77-83.
Basmann, R. L. (1961) “A Note on the Exact Finite Sample Frequency Functions of a Generalized
    Classical Linear Estimator in Two Leading Overidentified                  Cases”, Journal of the American Statisti-
    cal Association, 56, 6 19-636.
Basmann, R. L. (1974) “Exact Finite Sample Distributions                     and Test Statistics” in M. D. Intriligator
    and D. A. Kendrick (eds.), Frontiers of Quuntitatioe Economics, vol. II. Amsterdam:                    North-Holland
    Publishing Co.
Belsley, D. (1980) “On the Efficient Computation                   of the Non-linear       FIML Estimator”,     Journal of
    Econometrics, 14, 203-225.
Berkson, J. A. (1980) “Minimum              &-Square,        not Maximum Likelihood!“,            Annals of Statistics, 8,
    457-487.
Bemdt, E., B. Hall, R. Hall and J. Hausman (1974) “Estimation                    and Inference in Nonlinear Structural
    Models”, Annals of Economic and Social Measurement, 3, 653-666.
Bowden, R. and D. Turkingtron             (1981) “A Comparative Study of Instrumental Variable Estimators
    for Nonlinear Simultaneous        Models”, Journal of American Statistical Society, 76, 985-996.
Brown, T. M. (1960) “Simultaneous             Least Squares: A Distribution           Free Method of Equation System
    Structure Estimation”,      International Economic Reuiew, 1, 173- 191.
Brundy, J. M. and D. W. Jorgenson                (1971) “Efficient       Estimation      of Simultaneous    Equations    by
    Instrumental     Variables”, Review of Economics and Statistics, 53, 207-224.
Byron, R. P. (1974) “Testing             Structural     Specification     Using the Unrestricted        Reduced    Form”,
    Econometrica, 42, 869-884.
Court, R. H. (1973) “Efficient Estimation of the Reduced Form from Econometric                           Models”, Review
    of Economic Studies, 40, 411-418.
Dhrymes, P. (1971) “A Simplified Estimator for Large-Scale                      Econometric     Models”, The Ausrralian
   Journal of Statistics, 13, 168-175.
Dhrymes, P. J. (1973a) “Small Sample and Asymptotic                    Relations Between Maximum Likelihood and
    Three-Stage Least Squares”, Econometrica, 41, 357-364.
Dhrymes, P. ( 1973b) “Restricted          and Unrestricted       Reduced Forms”, Econometrica, 41, 119- 134.
Dhrymes, P. and J. Taylor (1976) “On an Efficient Two-Step Estimate for Dynamic                             Simultaneous
    Equation Systems with Autoregressive            Errors”, International Economic Review, 17, 362-376.
Dreze, Jacques H. (1976) “Bayesian             Limited Information          Analysis of the Simultaneous        Equations
   Model”, Econometrica, 44, 1045- 1075.
Efron, B. ( 1975) “ Defining the Curvature of a Statistical Problem”, Arrivals of Statistics, 3, 1189- 1242.
Efron, B. and D. Hinkley (1978) “Assessing the Accuracy of the Maximum Likelihood Estimator”,
   Biometrika, 65, 457-487.
Engle, R., D. Hendry and J. Richard (1981) “Exogeneity”,                   unpublished,     mimeo.
Fair, R. C. (1970) “The Estimation              of Simultaneous        Equation Models with Lagged Endogenous
   Variables and First Order Serially Correlated Errors”, Econometrica, 38, 507-516.
Fair, R. and W. Parke (1980) “Full Information               Estimates of a Nonlinear Macroeconometric            Model”,
   Journal of Econometrics, 269-29 1.
Fisher, F. M. (1961) “On the Cost of Approximate                   Specification    in Simultaneous    Equation Estima-
   tion”, Econometrica, 29, 349-38 1.
446                                                                                                        J. A. Hausman

Fisher, F. M. (1966) The Identification P:.oblem in Econometrics. New York: McGraw-Hill.
Fisher, R. A. (1935) “The Logic of Inductive Inference”, Journal of the Royal Statistical Society, 98,
   39-82.
Fisher, R. A. (I 956) Statistical Methods and Scientific Inference. Edinburgh:                 Oliver and Boyd.
Fuller, W. (1976) Introduction to Statistical Time Series, New York: John Wiley & Sons.
Fuller, W. (1977) “Some Properties              of a Modification         of the Limited Information           Estimator”,
   Econometrica, 45, 939-954.
Gallant, A. Ronald (1977) “Three-Stage               Least Squares Estimation           for a System of Simultaneous,
   Nonlinear, Implicit Equations”, Journal of Econometrics, 5, 71-88.
Gantmacher,       F. R. (1959) The Theory of Mutrices. New York: Chelsea Publishing Company.
Geary, R. C. (1949) “Determination            of Linear Relations between Systematic Parts of Variables with
   Errors of Observation,        the Variances of which are Unknown”,              Econometrica, 17, 30-59.
Geraci, V. (1976) “Identification        of Simultaneous Equation Models with Measurement                 Error”, Journul
   of Econometrics, 4, 263-283.
Geraci,     V. (1977) “Estimation          of Simultaneous        Equation       Models with Measurement             Error”,
   Econometrica, 45, 1243-1256.
Geweke, J. (1978) “Testing the Exogeneity                Specification     in the Complete Dynamic          Simultaneous
   Equation Model”, Journal of Econometrics, 7, 163- 186.
Goldberger,      A. S. (1972) “Structural       Equation Models in the Social Sciences”, Econometrica, 40,
   979- 1002.
Goldberger,      A., A. L. Nagar and H. S. Odeh (1961) “The Covariance                      Matrices of Reduced Form
   Coefficients and of Forecasts in a Structural Model”, Econometrica, 29, 556-573.
Goldfeld,     S. M. and R. E. Quandt (1968) “Nonlinear                    Simultaneous      Equations:   Estimation      and
   Prediction”,     International Economic Review, 9, 113-136.
Granger, C. W. J. (1969) “Investigating           Causal Relations by Econometric            Models and Cross-Spectral
   Methods”, Econometrica, 37, 424-438.
Haavelmo,       T. (1943) “The Statistical          Implications      of a System of Simultaneous             Equations”,
   Econometrica, 11, I - 12.
Haavelmo, T. (I 944) “The Probability Approach in Econometrics”,                       Econometrica, 12, Suppl., I- 118.
Hansen, L. P. and T. J. Sargent (1980) “Formulating                     and Estimating       Dynamic     Linear Rational
   Expectation      Model”, Journal of Economic Dynamic and Control, 2, 7-46.
Hansen. L. P. and K. Singleton (1982) “Generalized                Instrumental      Variables Estimation of Nonlinear
   Rational Expectations        Models”, Econometrica, 50, 1269- 1286.
Hatanaka.     M. (1976) “Several Efficient Two-Sten Estimators                  for the Dvmunic Simultaneous          Equa-
   tions Model with Autoregressive          Disturbances”,     Journal of Econometri&, 4, 189-204.
Hatanaka,       M. (1978) “On the Efficient Estimation                 Methods      for the Macro-Economic           Models
   Nonlinear in Parameters”,         Journal of Econometrics, 18, 323-356.
Hausman, J. A. (1974) “Full Information            Instrumental      Variable Estimation of Simultaneous          Equation
   Systems”, Annals of Economic and Social Measurement, 3, 641-652.
Ha&man,        J. A. (1975) “An Instrumental           Variable Approach          to Full Information      Estimators     for
   Linear and Certain Non-Linear           Econometric     Models”, Econometrica, 43, 727-738.
Hausman, J. A. (I 977) “Errors in Variables in Simultaneous                  Equation Models”, Journal of Economet-
   rics, 5, 389-401.
Hausman, J. A. (1978) “Specification           Tests in Econometrics”,         Econometrica, 46, 1251-1272.
Hausman,      J. A. and W. B. Taylor (1980a) “Identification                 in Simultaneous     Equation Systems with
   Covariance Restrictions”,         MIT, mimeo.
Hausman,       J. A. and W. B. Taylor (1980b) “The Relationship                       Between Specification      Tests and
   Classical Tests”, MIT, mimeo.
Hausman,       J. A. and W. B. Taylor (1981) “Efficient                Estimation      with Covariance     Restrictions     in
   Simultaneous       Equations Models”, mimeo.
Hendry, D. F. (1976) “The Structure of Simultaneous Equations Estimators”, Journal of Econometrics,
   4, 51-88.
Hinkley, D. V. (1980) “Fisher’s Development of Conditional Inference, in: D. V. Hinkley (ed.), Papers
   on the Work of R. A. Fisher, New York.
Hood, W. C. and T. C. Koopmans (eds.) (1953) Studies in Econometric Method, Cowles Commission
    Monograph       14. New York: John Wiley & Sons.
Hsiao, C. (1976) “Identification         and Estimation of Simultaneous            Equation Models with Measurement
   Error”, International Economic Review, 17, 3 19-339.
Ch. 7: Simultaneous     Equation Models                                                                                 447

Jorgenson, D. W. and J. Laffont (1974) “Efficient Estimation of Nonlinear Simultaneous                           Equations
   with Additive Disturbances”,        Annals of Economic and Social Measurement, 3, 615-640.
Kadane,      J. B. (1971) “Comparison           of K-class Estimators         when the Disturbances           are Small”,
   Econometrica, 39, 727-737.
Kelejian, H. H. (1971) “2SLS and Econometric                 Systems Linear in Parameters but Nonlinear in the
   Endogenous       Variables”, Journal of the American Statistical Association, 66, 373-378.
Kendall, M. and A. Stuart (1967) The Advanced Theory of Statistics, vol. II. London: Griffen.
Khazzom, J. Daniel (1976) “An Indirect Least Squares Estimator                         for Overidentified      Equations”,
   Econometrica, 44, 741-750.
Koopmans,       T. C. (1949). “Identification     Problems in Economic Model Construction”,                 Econometrica,
    17, 125-144.
Koopmans,       T. C. (ed.) (1950) Statistical Inference in Dynamic Economic Models, Cowles Commission
   Monograph       IO. New York: John Wiley & Sons.
Koopmans,        T. C. and W. C. Hood (1953) “The Estimation                     of Simultaneous       Linear Economic
   Relationships”,     in: W. C. Hood and T. C. Koopmans (eds.), Studies in Econometric Method, Cowles
   Commission Monograph           14. New York: John Wiley & Sons.
Koopmans,        T. C. and 0. Reiersol (1950) “The Identification                of Structural    Characteristics”,     The
   Annals of Mathematical Statistics.
Koopmans,       T. C., H. Rubin and R. B. Leipnik (1950) “Measuring                the Equation Systems of Dynamic
   Economics”,      in: Koopmans,     T. C. (ed.), Statistical Inference in Dynamic Economic Models, Cowles
   Commission Monograph           10. New York: John Wiley & Sons.
Lahiri, Kajal and Peter Schmidt (1978) “On the Estimation                       of Triangular      Structural    Systems”,
   Econometrica, 46, 12 17- 1222.
Learner, E. (1981) “Is It a Demand Curve, or Is It a Supply Curve?: Partial Identification                        Through
   Inequality Constraints”,      Review of Economics and Statistics, 63, 3 19-327.
Liu, T. C. (1960) “Underidentification,            Structural Estimation,      and Forecasting”,       Econometrica, 28,
   855-871.
Lyttkens, E. (1970) “Symmetric         and Asymmetric Estimation Methods”, in: E. Mosback and H. Wold
   (eds.), Interdependent Systems. Amsterdam:            North-Holland      Publishing Co.
Maasoumi,       E. (1978) “A Modified          Stein-like Estimator      for the Reduced Form Coefficients                of
   Simultaneous      Equations”,   Econometrica, 46, 695-704.
Malinvaud,      E. (1970) Statistical Methods of Econometrics (2nd edn.). Amsterdam:                      North-Holland
   Publishing Co.
Mann, H. B. and A. Wald (1943) “On the Statistical Treatment                         of Linear Stochastic Difference
   Equations”,     Econometrica, 11, 173-220.
Nagar, A. L. (1959) “The Bias and Moment Matrix of the General k-class Estimators                                    of the
   Parameters in Simultaneous        Equations”,      Econometrica, 27, 575-595.
Narayanan,       R. (1969) “Computation          of Zellner-Theil’s      Three Stage Least Squares Estimates”,
   Econometrica, 37, 298-306.
Pagan, A. (1979) “Some Consequences             of Viewing LIML as an Iterated Aitken Estimator”,               Economics
   Letters, 3, 369-372.
Pfanzagl, J. ( 1975) “ On Asymptotically             Complete Classes”, in: Proceedings Summer Institute of
   Statistical Inference for Stochastic Processes, vol. 2, pp. l-43.
Pfanzagl, J. and W. Wefelmeyer (1978) “A Third Order Optimum Property of Maximum Likelihood
   Estimators”, Journal of Multivariate Analysis, 8, I-29.
Phillips, P. C. B. (1980) “The Exact Distribution            of Instrumental     Variable Estimators in an Equation
   Containing n + 1 Endogenous          Variables”, Econometrica, 48, 861-878.
Phillips, P. C. B. (1981a) “A New Approach to Small Sample Theory”, Yale, mimeo.
Phillips, P. C. B. (1981b) “On the Consistency of Nonlinear FIML”, mimeo.
Rao, C. R. (1961) “Asymptotic           Efficiency and Limiting Information”,             in: Proceedings of the Fourth
   Berkeley Symposium, University of California Press, pp. 531-545.
Rao, C. R. (1962) “Efficient          Estimates and Optimum            Inference Procedures         in Large Samples”,
   Journal of the Royal Statistical Society, Ser. B, 24, 46-72.
Rao, C. R. (1973) Statistical Inference and Its Applications. New York: John Wiley & Sons.
Reiersol, 0. (1945) “Confluence          Analyses by Means of Instrumental               Sets of Variables”, Arkio for
   Mathematik, Astronomi och Fysik, 32, l-l 19.
Reiersol, 0. (1950) “Identifiability         of a Linear Relation Between Variables Which are Subject to
   Error”, Econometrica, 18, 375-389.
448                                                                                                         J. A. Hausman

Rothenberg,     T. J. (1971) “Identification        in Parametric Models”, Econometrica, 39, 577-595.
Rothenberg, T. J. (1973) Efficient Estimation with a priori Information, Cowles Foundation                       Monograph
                                                                                                                        - _
   23. New-Haven        Yale U-mversity Press.                   _        _
Rothenbere.      T. J. and C. T. Leenders (1964) “Efficient                   Estimation     of Simultaneous       Eouations
   Systems”,’ Econometrica, 32, 57-76.                _      ‘
Sargan, J. D. (1958) “On the Estimation                 of Economic        Relationships      by Means of Instrumental
   Variables”, Econometrica, 26, 393-415.
Sargan, J. D. (1959) “The Estimation of Relationships                  with Autocorrelated       Residuals by the Use of
   Instrumental    Variables”, Journal of the Royal Statistical Society, B21, 91-105.
Sargan, J. D. (1961) “The Maximum Likelihood Estimation of Economic Relationships                             with Autocor-
   related Residuals”, Econometrica, 29, 414-426.
Sargan, J. D. (1964) “Three-Stage                Least-Squares        and Full Maximum            Likelihood     Estimates”,
   Econometrica, 32, 77-81.
Saraan. J. D. (1978) “On the Existence of the Moments of the 3SLS Estimator”,                            Econometrica, 46,
    1?29-1350..         ’
Savin, N. E. ( 1973) “Systems k-class Estimators”,               Econometrica, 4 I, 1125-1136.
Sawa. T. (1973) “Almost Unbiased Estimators                    in Simultaneous       Equations    Systems”, International
   Economic R&iew, 14, 97- 106.
Scheffe, H. (1959) Analysis of Variance. New York: John Wiley & Sons.
Seber, G. A. F. (1966) The Linear Hypothesis. London.
Silvey, D. S. (1970) Statistical Inference. New York: John Wiley & Sons.
Sims, C. A. (1972) “Money, Income and Causality”, American Economic Review, 62, 540-532.
Sims, C. A. (1977) “Exogeneity         and Causal Ordering in Macroeconomic                Models”, in: C. A. Sims (ed.),
   New Methoa!s in Business Cycle Research. Minneapolis.
Sims, C. A. ( 1980) “Macroeconomics             and Reality”, Econometrica, 48, l-48.
Srivastava. V. K. (1971) “Three-Stage            Least-Souares       and Generalized      Double K-class Estimators:          A
   Mathematical      Relationship”,    Intekational      Eionomic Review, 12, 3 12-3 16.
Swamy, P. (I 980) “A Comparison             of Estimators       for Undersized Samples”, Journal of Econometrics,
    14, 161-181.
Theil, H. (1958) Economic Forecasts and Policy. Amsterdam:                    North-Holland      Publishing Co.
Theil, H. (1961) Economic Forecasts and Policy (2nd edn.). Amsterdam:                     North-Holland      Publishing Co.
Theil, H. (1971) Principles of Econometrics. New York: John Wiley & Sons.
Wallis, K. F. (1977) “Multiple Time Series Analysis and the Final Form of Econometric                               Models”,
   Econometrica, 45, 1481-1497.
Wallis, K. F. (1978) “Econometric                   Implications      of the Rational         Expectations     Hypothesis”,
   Econometrica, 48, 49-73.
Wallis, K. F. (1980) “Econometric                   Implications      of the Rational         Expectations     Hypothesis”,
    Econometrica, 48, 49-74.
Wegge, L. (1965) “Identifiability           Criteria for a System of Equations              as a Whole”, The Australian
   Journal of Statistics.
Wegge, L. (I 978) “Constrained          Indirect Least Squares Estimators”,            Econometrica, 46, 435-450.
Wold, H. (ed.) (1964)Econometric Model Building: Essays on the Causal Chain Approach. Amsterdam:
   North-Holland      Publishing Co.
Working, E. (I 927) “What do ‘Statistical Demand Curves’ Show”, Quarterly Journal of Economics.
Wu, De-Mm (1973) “Alternative               Tests of Independence           Between Stochastic Regressors           and Dis-
    turbances”,   Econometrica, 41, 733-750.
Zellner, A. (1962) “An Efficient Method of Estimating Seemingly Unrelated Regressions and Tests for
    Aggregation    Bias”, Journal of the American Statistical Association, 57, 348-368.
Zellner, A. (1978) “Estimation            of Functions        of Population       Means and Regression           Coefficients
    including   Structural    Coefficients:     A Minimum          Expected Loss (MELO) Approach”,                Journal of
    Econometrics, 8, 127- 158.
Zellner, A. (1979a) “Causality          and Econometrics”,          in: K. Brunner and A. H. Meltzer (eds.), Three
    Aspects of Policy and Policymaking. Amsterdam:                 North-Holland      Publishing Co.
Zellner, A. and F. Palm (1975) “Time Series Analysis and Simultaneous                              Equation     Econometric
    Models”, Journal of Econometrics, 2, 17-54.
Zellner, A. and H. Theil (1962) “Three-Stage                  Least-Squares:      Simultaneous     Estimation    of Simuha-
    neous Equations”,      Econometrica, 30, 54-78.



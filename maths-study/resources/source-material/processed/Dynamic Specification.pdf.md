---
normalized_id: shared-pdf-reference-dynamic-specification
exam_code: SHARED
material_scope: dynamic specification.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Dynamic Specification.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-dynamic-specification

Chapter      18



DYNAMIC SPECIFICATION
DAVID F. HENDRY
Nufield      College, Oxford


ADRIAN R. PAGAN
Australian        National   Uniuersity


J. DENIS SARGAN*
London       School of Economics




Contents

1.    Introduction                                                                                 1025
2.    Data generation processes                                                                    1028
      2.1. Conditional models                                                                      1028
      2.2.        Estimation, inference and diagnostic testing                                     1031
      2.3.        Interpreting conditional models                                                  1034
      2.4. The status of an equation                                                               1035
      2.5. Quasi-theoretical bases for dynamic models                                              1037
      2.6. A typology of single dynamic equations                                                  1040
3.        Finite distributed lags                                                                  1049
          3.1. A statement of the problem                                                          1049
          3.2. Exact restrictions on lag weights                                                   1050
          3.3. Choosing lag length and lag shape                                                   1054
          3.4. Weaker restrictions on lag weights                                                  1060
          3.5. Alternative estimators                                                              1062
          3.6.    Reformulations to facilitate model selection                                     1065
4.        Infinite distributed lags                                                                1066
          4.1.    Rational distributed lags                                                        1066
          4.2.    General error correction mechanisms                                              1069
          4.3.    Derived statistics                                                               1072



   *We are grateful to Jean-Francois Richard for his helpful advice, and to James Davidson, Rob
Engle, Clive Granger, Andrew Harvey, Svend Hylleberg and Timo Terbvirta for comments on an
earlier draft. Financial support from the Social Science Research Council to the Programme in
Methodology, Inference and Modelhng at the London School of Economics and from the Centre for
Operations Research and Econometrics at the Catholic University of Louvain-la-Neuve is gratefully
acknowledged.


Handbook          of Econometrics,  Volume II, Edited   by Z. Grihches   and M.D.   Intriligator
0 Elsevier        Science Publishers B V, 1984
1024                                                             D. F. Hendry et al.

5.     Stochastic specification                                              1073
6.     Dynamic specification in multi-equation models                        1080
       6.1.   Identification with autoregressive errors                      1080
       6.2.   Reduced form, final form and dynamic multipliers               1084
       6.3.   Unconstrained autoregressive modelling                         1087
       6.4.   Alternative forms of disequilibrium model                      1089
References                                                                   1092
Ch. 18: Dynamic   SpeciJicalion                                                 1025




1.   Introduction

Dynamic specification denotes the problem of appropriately matching the lag
reactions of a postulated theoretical model to the autocorrelation structure of the
associated observed time-series data. As such, the issue is inseparable from that of
stochastic specification if the finally chosen model is to have a purely random
error process as its basic “innovation”, and throughout this chapter, dynamic and
stochastic specification will be treated together. In many empirical studies, most
other econometric “difficulties” are present jointly with those of dynamic specifi-
cation but to make progress they will be assumed absent for much of the
discussion.
   A number of surveys of dynamic models and distributed lags already exist [see,
inter alia, Griliches (1967) Wallis (1969), Nerlove (1972), Sims (1974), Maddala
(1977) Thomas (1977) and Zellner (1979)], while Dhrymes (1971) treats the
probability theory underlying many of the proposed estimators. Nevertheless, the
subject-matter has advanced rapidly and offers an opportunity for critically
examining the main themes and integrating previously disparate developments.
However, we do not consider in detail: (a) Bayesian methods [see Dreze and
Richard in Chapter 9 of this Handbook for background and Guthrie (1975)
Mouchart and Orsi (1976) and Richard (1977) for recent studies]; (b) frequency
domain approaches [see, in particular, Granger and Watson in Chapter 17 of this
Handbook, Sims (1974), Espasa (1977) and Engle (1976)j; nor (c) theoretical work
on adjustment costs as discussed, for example, by Nerlove (1972). Although
theories of intertemporal optimising behaviour by economic agents are continuing
to develop, this aspect of the specification problem is not stressed below since,
following several of the earlier surveys, we consider that as yet economic theory
provides relatively little prior information about lag structures. As a slight
caricature, economic-theory bused models require strong ceteris paribus assump-
tions (which need not be applicable to the relevant data generation process) and
take the form of inclusion information such as y = f(z) where z is a vector on
which y is claimed to depend. While knowledge that z may be relevant is
obviously valuable, it is usually unclear whether z may in practice be treated as
“exogenous” and whether other variables are irrelevant or are simply assumed
constant for analytical convenience (yet these distinctions are important for
empirical modelling).
   By way of contrast, statistical-theory based models begin by considering the joint
density of the observables and seek to characterise the processes whereby the data
were generated. Thus, the focus is on means of simplifying the analysis to allow
valid inference from sub-models. Throughout the chapter we will maintain this
distinction between the (unknown) Data Generation Process, and the econometric
1026                                                                                 D. F. Hendry et al.

model    postulated to characterise it, viewing “modelling” as an attempt to match
the two. Consequently, both aspects of economic and statistical theory require
simultaneous development. All possible observables cannot be considered from
the outset, so that economic theory restrictions on the analysis are essential; and
while the data are the result of economic behaviour, the actual statistical proper-
ties of the observables corresponding to y and z are also obviously relevant to
correctly analysing their empirical relationship. In a nutshell, measurement without
theory is as valueless as the converse is non-operational.’ Given the paucity of
dynamic theory and the small sample sizes presently available for most time series
of interest, as against the manifest complexity of the data processes, all sources of
information have to be utilised.
    Any attempt to resolve the issue of dynamic specification first involves develop-
ing the relevant concepts, models and methods, i.e. the deductive aspect of
statistical analysis, prior to formulating inference techniques. In an effort to
reduce confusion we have deliberately restricted the analysis to a particular class
of stationary models, considered only likelihood based statistical methods and
have developed a typology for interpreting and interrelating dynamic equations.
 Many of our assumptions undoubtedly could be greatly weakened without
 altering, for example, asymptotic distributions, but the resulting generality does
 not seem worth the cost in complexity for present purposes. In a number of cases,
 however, we comment parenthetically on the problems arising when a sub-set of
parameters changes. Nevertheless, it is difficult to offer a framework which is at
once simple, unambiguous, and encompasses a comprehensive range of phenom-
ena yet allows “economic theory” to play a substantive role without begging
 questions as to the validity of that “theory”, the very testing of which may be a
 primary objective of the analysis.
    Prior to the formal analysis it seems useful to illustrate by means of a relatively
 simple example why dynamic specification raises such difficult practical problems.
 Consider a consumption-income (C-Y) relationship for quarterly data given by:
        A,lnC, = 6, + 6,A,ln yt” + &A,lnC,~,
                    + 6,ln(C/Y”),_,+         E,,                                                    (1)
where Aqx, = (x, - x~_~), In is logarithm to the base e, E, is assumed to be white
noise and ytn is “normal” income, such that:

        lnY,“=O.l     i (4-i)lnY,_,.                                                                (2)
                     r=O

  ‘This is a very old point, but bears repetition: “all induction is blind, so long as the deduction of
causal connections is left out of account; and all deduction is barren so long as it does not start from
observation” [taken from J. N. Keynes (1890, p. 164)]. Also, it has long been seen as essential to treat
economic theory as a “working ‘first approximation to reality’ in statistical investigations”, e.g. see
Persons (1925).
Ch. 18: Dynamic Specification                                                      1027

The unrestricted distributed lag relationship between lnC, and ln Y has the form:


     lnC,=6,+        5 (~,lnCt_l_1+/3,1nY~,)+e,.                                    (3)
                     i=l



When 6’= (0,0.5,0.25, -0.2) (but this is unknown) (3) has coefficients:

             jo123                                 4       5       6       7

          lnC,_j     - 1   0.25     0     0       0.80   -0.25     0           0    (4)
          lnq_j      0.2   0.15   0.10   0.05   -0.12    -0.09   -0.06    - 0.03

   Under appropriate conditions on K, estimation of the unknown value of 6 (or
of a,,, a,& is straightforward, so this aspect will not be emphasised below.
However, the formulation in (l)-(4) hides many difficulties experienced in prac-
tice and the various sections of this chapter tackle these as follows.
   Firstly, (1) is a single relationship between two series (C,, Y,), and is, at best,
only a part of the data generation process (denoted DGP). Furthermore, the
validity of the representation depends on the properties of Y,. Thus, Section 2.1
investigates conditional sub-models, their derivation from the DGP, the formula-
tion of the DGP itself, and the resulting behaviour of {Ed} (whose properties
cannot be arbitrarily chosen at convenience, since by construction, E, contains
everything not otherwise explicitly in the equation). To establish notation and
approach, estimation, inference and diagnostic testing are briefly discussed in
Section 2.2, followed in Section 2.3 by a more detailed analysis of the interpreta-
tion of equations like (1). However, dynamic models have many representations
which are equivalent when no tight specification of the properties of { E,} is
available (Section 2.4) and this compounds the difficulty of selecting equations
from data when important features [such as m in (3), say] are not known a priori.
Nevertheless, the class of models needing consideration sometimes can be de-
limited on the basis of theoretical arguments and Section 2.5 discusses this aspect.
For example, (1) describes a relatively simple situation in which agents make
annual decisions, marginally adjusting expenditure as a short distributed lag of
changes in “normal” income and a “disequilibrium” feedback to ensure a
constant static equilibrium ratio of C to Y (or Y”). This model constrains the
values in (3) to satisfy 1 -&       = c@, (inter alia) although appropriate converse
reformulations of (3) as in (1) are rarely provided by economic theory alone.
   Since (3) has a complicated pattern of lagged responses [with eleven non-zero
coefficients in (4)] unrestricted estimation is inefficient and may yield very
imprecise estimates of the underlying coefficients (especially if m is also estimated
from the data). Consequently, the properties of restricted dynamic models repre-
1028                                                                  D. F. Hendty et al.

senting economic data series are important in guiding parsimonious yet useful
characterisations of the DGP and Section 2.6 offers a typology of many com-
monly used choices. For example, (1) is an “error correction” model (see also
Section 4.2) and, as shown in (4), negative effects of lagged Y on C may be
correctly signed if interpreted as arising from “differences” in (1). Note, also, that
long lags in (3) (e.g. m = 7) need not entail slow reactions in (1) [e.g. from (4) the
median lag of Y’ on C, is one-quarter]. The typology attempts to bring coherence
to a disparate and voluminous literature.
   This is also used as a framework for structuring the more detailed analyses of
finite distributed lag models in Section 3 and other dynamic formulations in
Section 4 (which include partial adjustment models, rational distributed lags and
error correction mechanisms). Moreover, the typology encompasses an important
class of error autocorrelation processes (due to common factors in the lag
polynomials), clarifying the dynamic-stochastic link and leading naturally to an
investigation of stochastic specification in Section 5.
   While the bulk of the chapter relates to one equation sub-models to clarify the
issues involved, the results are viewed in the context of the general DGP and so
form an integral component of system dynamic specification. However, multi-
dimensionality also introduces new issues and these are considered in Section 6,
together with the generalised concepts and models pertinent to systems or
sub-models thereof.
   Since the chapter is already long, we do not focus explicitly on the role of
expectations in determining dynamic reactions. Thus, on one interpretation, our
analysis applies to derived equations which, if expectations are important, con-
found the various sources of lags [see Sargent (1981)]. An alternative interpreta-
tion is that by emphasising the econometric aspects of time-series modelling, the
analysis applies howsoever the model is obtained and seeks to be relatively
neutral as to the economic theory content [see, for example, Hendry and Richard
(1982)].


2.     Data generation processes


2.1.    Conditional models

Let x, denote a vector of n observable random variables, X0 the matrix of initial
conditions, where X,! = (x1,. . xt)’ and X, = (XgX:‘)‘. For a sample of size T, let
O(X+]X,,, 0) be the joint data density function where 8 E 0 is an identifiable
vector of unknown parameters in the interior of a finite dimensional parameter
space 0. Throughout, the analysis is conducted conditionally on tI and X0, and
the likelihood function is denoted by Z’(O; X;). The joint data density is
Ch. 18: Dynamic Specijkution                                                    1029


sequentially factorised into:




  It is assumed that the conditional density functions in (5) have the common
functional form:

      X,IX,~i - Nc(,lQ>?             with/+=E(x,]X,_,,B),                        (6)

where n, - p, = u, is an “innovation”,         and by construction:

      E( V,X:-j )=O,      V,;21,       sothatE(u,~i_~)=O,      V,21.

   Implicitly, we are ignoring important issues of aggregation (over agents, space,
time, goods, etc.) and marginalisation (with respect to all other variables than
those in xl) by assuming that (5) is an adequate statistical representation for a
DGP. Hopefully, this conflation of the concepts of DGP and Model, due to
deliberate exclusion of other difficulties, will not prove confusing. Concerning the
economic behaviour determining x,, we suppose economic agents to form contin-
gent plans based on limited information [see Bentzel and Hansen (1955) and
Richard (1980)]. Such plans define behauioural relationships which could corre-
spond to optimising behaviour given expectations about likely future events,
allow for adaptive responses and/or include mechanisms for correcting previous
mistakes. To express these in terms of x, will require marginalising with respect to
all unobservables. Thus, assuming linearity (after suitable data transformations)
and a fixed finite lag length (m) yields the model:




In (7) the value of m is usually unknown but in practice must be small relative to
T. The corresponding “structural” representation is given by:


      Bx, +   5 c,x,-, =       E,,                                               (8)
              1=1



with E, = Bv, and Bq + C, = 0, where B and {C, } are well defined functions of B
and B is of rank n V’BE 0 [strictly, the model need not be complete, in that (6)
need only comprise g I n equations to be well defined: see Richard (1979)].
   From (5)-(g), E, - 1Jr/-(O,Z) where 2 = BPB’, but as will be seen below, this
class of processes does not thereby exclude autocorrelated error representations.
1030                                                                        D. F. Hendry et al.

Also, while not considered below, the model could be generalised to include, for
example, Autoregressive-Conditional Heteroscedasticity [Engle (1982)].
   Direct estimation of {vi} is generally infeasible [see, however, Section 6.3 and
Sargent and Sims (1977)] and in any case still involves important assumptions
concerning parameter constancy, the choices of n and m and the constituent
components of x,. Generally, econometricians have been more interested in
conditional sub-models suggested by economic theory and hence we partition x;
into ( y$z:) and factorise the data densities D( x,]Xt_ i, 0) and likelihood function
correspondingly as:

       N4X,-lJ)       = 4( Y,lZr, X,-l~(Pl)~~(~,lX,-l~~,)~
where (et, +2) is an appropriate reparameterisation            of 8, and:




Certain parameters, denoted #, will be of interest in any given application either
because of their “invariance” to particular interventions or their relevance to
policy, or testing hypotheses suggested by the associated theory etc. If # is a
function of +t alone, and +i and (p, are variation free, then z, is weakly
exogenous for 4 and fully efficient inference is possible from the partial likelihood
5?i(.) [see Koopmans (1950), Richard (1980), Florens and Mouchart (1980),
Engle et al. (1983) and Geweke in Chapter 19 of this Handbook]. Thus, the model
for z, does not have to be specified, making the analysis more robust, more
comprehensible, and less costly, hence facilitating model selection when the precise
specification of (8) is not given a priori. Indeed, the practice whereby 5?i( -) is
specified in most econometric analyses generally involves many implicit weak
exogeneity assertions and often proceeds by specifying the conditional model
alone leaving 6p2( .) to be whatever is required to “complete” Z( .) in (9). That $
can be estimated efficiently from analysing only the conditional sub-model, does
not entail that z, is predetermined in:

       41 Yt+ g12z, + C ‘liXt-r     =   El1                                              (10)



(using an obvious notation for the partition of B and {C, }), merely that the
model for z, does not require joint estimation with (10).
   If in addition to being weakly exogenous for 4, the following holds for z,:

       4(w-,P#2)        = 4(Z,lL~             Y,Av,)    (t =l,...,T),                    (11)

so that lagged y’s are uninformative            about z, given Z,_l, and hence Y does not
Ch. 18: Dynamic Specification                                                                     1031

Granger cause z [see Granger (1969), Sims (1977) and Geweke in Chapter 19 of
this Handbook], then z, is said to be strongly exogenous for #. Note that the
initial choice of x, in effect required an assertion of strong exogeneity of X, for
the parameters of other potentially relevant (economic) variables. Also, as shown
in subsection 2.6, paragraph (g), if (11) does not hold, so that y does Granger
cause z, then care is required in analysing model formulations which have
autocorrelated errors since z will also Granger cause such errors.
   The remainder of this chapter focusses on dynamic specification in models like
(10) since these encompass many of the equation forms and systems (with a
“linearity in variables” caveat) occurring in empirical research. For example, the
system:

                m*                                    r*
       B*X, +   C Cj*X,_i = u,, where u, = c Rfu*_,+ E,,                                         @*)
                i=l                                  i=l


with m* + r* = m, can be re-expressed as (8) with non-linear relationships be-
tween the parameters. However, unique factorisation             of the {s} into
(B:{C,*){R:])    re q uires further restrictions on { Rt } such as block diagonality
and/or strong exogeneity information [see Sargan (1961) and Sections 5 and 6.11.


2.2.    Estimation, inference and diagnostic testing

Since specific techniques of estimation, inference and diagnostic testing will not be
emphasised below [for a discussion of many estimation methods, see Dhrymes
(1971), Zellner (1979) and Hendry and Richard (1983)] a brief overview seems
useful notwithstanding the general discussions provided in other chapters. At a
slight risk of confusion with the lag operator notation introduced below, we
denote log, of the relevant partial likelihood from (9) by: 2




In (12), $J is considered as an argument of L( .), when z, is weakly exogenous and
(8) is the data generation process. Let:


                                                                                                  (13)


   *Strictly, (12) relates to +1 but 4 is used for notational simplicity; L(-) can be considered a.s the
 reparameterised concentrated likelihood if desired.
1032                                                                 D. F. Hen&y et al.

The general high dimensionality of # forces summarisation in terms of maximum
likelihood estimators (denoted MLEs), or appropriate approximations thereto,
and under suitable regularity conditions [most of which are satisfied here granted
(6)]-see,   for example, Crowder (1976)-MLEs        will be “well behaved”. In
particular if the roots of



       I &,g’=O
       I-
            I
            I=1
                                                                                 (14)

(a polynomial in g of order no greater than nm) are all outside the unit circle,
then when 4 is the MLE of $:


       JT(4 - 44 ; J-p, q),       where I$= -plimT.Q($)-‘,

and is positive definite. Note that 4 is given by q(4) = 0 [with Q(4) negative
definite] and numerical techniques for computing 4 are discussed in Dent (1980)
and in Quandt in Chapter 12 of this Handbook. Phillips (1980) reviews much of
the literature on exact and approximate finite sample distributions of relevant
estimators. If (8) is not the DGP, a more complicated expression for I$, is
required although asymptotic normality still generally results [see, for example,
Domowitz and White (1982)].
   Note that q( 4) = 0 can be used as an estimator generating equation for most of
the models in the class defined by (10) when not all elements of J, are of equal
interest [see Hausman (1975) and Hendry (1976)].
   To test hypotheses of the general form H,: F(q) = 0, where F( 0) has continu-
ous first derivatives at IJJ and imposes r restrictions on + = (J/r. . . I/~)‘, three
principles can be used [see Engle in Chapter 13 of this Handbook] namely: (a) a
Wald-test, denoted W [see Wald (1943)]; (b) the Maximised Likelihood Ratio, LR
[see, for example, Cox and Hinkley (1974, ch. 9)]; and (c) Lagrange Multiplier,
LM [see Aitchison and Silvey (1960) Breusch and Pagan (1980) and Engle
(1982)]. Since (a) and (c) are respectively computable under the maintained and
null hypotheses alone, they are relatively more useful as their associated parame-
ter sets are more easily estimated. Also, whereas (b) requires estimation of both
restricted and unrestricted models, this is anyway often necessary given the
outcome of either W or LM tests. Because of their relationship to the unrestricted
and restricted versions of a model, W and LM tests frequently relate respectively
to tests of specification and m&-specification [see Mizon (1977b)], that is, within
and outside initial working hypotheses. Thus, [see Sargan (198Oc)] Wald forms
apply to common factor tests, whereas LM forms are useful as diagnostic checks
for residual autocorrelation. Nevertheless, both require specification of the
“maintained” model.
Ch. 18: D_vnnmic Specification                                                       1033


  Formally, when (8) is the DGP, Eq(#) = 0 and EQ($) = - I(#), with
T- 1’2q(1cI);; J’XO, &N), wh ere J(e) = plim T-‘f( .) = V;‘. Then we have:
  (a) From (15), on ZZ,: F(q) = 0:




where J= aF(.)/a+.               Let .Z and & denote evaluation at 4, then on ZZ,:




Furthermore if W, and W,, are two such Wald criteria based upon two sets of
constraints such that those for W, are obtained by adding constraints to those
characterising W,, then:

       0%-w/J ‘;; x&5                     independently of W, ;; x f,.               (18)


  Such an approach adapts well to commencing from a fairly unconstrained
model and testing a sequence of nested restrictions of the form e( 4) = 0,
i=1,2 ,..., where r, > r,_1 and rejecting q( .) entails rejecting F,( .), 1> j. This
occurs, for example, in a “contracting search” (see Learner in Chapter 5 of this
Handbook), and hence W is useful in testing dynamic specification [see Anderson
(1971, p. 42) Sargan (198Oc), Mizon (1977a) and Section 51.
  (b) Let $J denote the MLE of 1c,subject to F(q) = 0, then:

       LR, = 2[L(\j/)-           L(\t)]     ;; xf,   if H, is true.                  (19)

   (c) Since $ is obtained from the Lagrangian expression:

       L(+)+XF(J/),              usingq(rC,)+Jh=O,                                   (20)

then, when H, is true:


                                                                                     (21)

and hence the test is also known as the “efficient score” test [see Rao (1965)].
Note that q(q) = 0, whereas F(G) = 0, the converses not holding. Also (17), (19)
and (21) show the three tests to be asymptotically equivalent both under H, and
under the sequence of local alternatives H,: F( +) = Tp ‘I28 (for constant 6). All
three tests are non-central ~3 with non-centrality parameter S’V;-‘S and are,
1034                                                                            D. F. Hendty et al.

therefore, consistent against any jixed alternative (i.e. TP l/*6 constant).3 As yet,
little is known about their various finite sample properties [but see Berndt and
Savin (1977), Mizon and Hendry (1980) and Evans and Savin (1982)].
    It must be stressed that rejecting Ha by any of the tests provides evidence only
against the validity of the restrictions and does not necessarily “support” the
alternative against which the test might originally have been derived. Also, careful
consideration of significance levels is required when sequences of tests are used.
Finally, generalisations of some of the test forms are feasible to allow for (8) not
being the DGP [see Domowitz and White (1982)].


2.3.   Interpreting conditional models

For simplicity of exposition and to highlight some well-known but important
issues we consider a single equation variant of (10) with only one lag namely:

                                                                                             (22)
There are (at least) four distinct interpretations of (22) as follows [see for
example, Richard (1980) and Wold (1959)].
  (a) Equation (22) is a regression equation with parameters defined by:

       KY,l%    xt-1) =&z,      +&x,-1,                                                       (23)

where e, = y, - E(y,( .) so that E(z,e,) = 0, and E(x,_le,) = 0. When (23) holds,
/I = (&&) minimises the variance of e.
   Whether /3 is or is not of interest depends on its relationship to I/J and the
properties of z, (e.g. B is clearly of interest if J/ is a function of /3 and z, is weakly
exogenous for 8).
   (b) Equation (22) is a linear least-squares approximation to some dynamic
relationship linking y and z, chosen on the criterion that e, is purely random and
uncorrelated with (z,, x,-i). The usefulness of such approximations depends
partly on the objectives of the study (e.g. short-term forecasting) and partly on
the properties of the actual data generation process (e.g. the degree of non-linear-
ity in y = f(z), and the extent of joint dependence of y, and zl): see White
(1980).
   (c) Equation (22) is a structural relationship [see, for example, Marschak (1953)]
in that /3 is a constant with respect to changes in the data process of z, (at least
for the relevant sample period) and the equation is basic in the sense of Bentzel
and Hansen (1955). Then (22) directly characterises how agents form plans in

   3For boundary points of 8, the situation is more complicated and seems to favour the use of the
LM principle-see    Engle in Chapter 13 of this Handbook. Godfrey and Wickens (1982) discuss
locally equivalent models.
Ch. 18: Dynamic      Specification                                              1035


terms  of observables and consequently /3 is of interest. In economics such
equations would be conceived as deriving from autonomous behavioural relations
with structurally-invariant  parameters [see Frisch (1938), Haavelmo (194%
Hurwicz (1962) and Sims (1977)]. The last interpretation is:
  (d) Equation (22) is derived from the behauiourul relationship:

        GY,lX,-1)         = YI~WL)+7;+1*                                       (24
If
        E2f = z, -    J%lXt-,)~                                                (25)

then e, is the composite: e, = (&it - yieZr) so that E(e,e2,) # 0 in general and
depends on yl.
   More generally, if E(z,JX,_,) is a non-constant function of Xt-i, j3 need not
be structurally invariant, and if incorrect weak exogeneity assumptions are made
about z,, then estimates of y need not be constant when the data process of z,
alters.
   That the four “interpretations” are distinct is easily seen by considering a data
density with a non-linear regression function [(a) # (b)] which does not coincide
with a non-linear behavioural plan [(a) # (d),(b) # (d )] in which the presence of
E( z,]Xt_t) inextricably combines +i and +2, thereby losing structurality for all
changes in (p2 [i.e. (c) does not occur]. Nevertheless, in stationary linear models
with normally distributed errors, the four cases “look alike”.
   Of course, structural invariance is only interesting in a non-constant world and
entails that in practice, the four cases will behave differently if $2 changes.
Moreover, even if there exists some structural relationship linking y and z, failing
to specify the model thereof in such a way that its coefficients and & are variation
free can induce a loss of structurality in the estimated equation to interventions
affecting $B~.This point is important in dynamic specification as demonstrated in
the following sub-section.


2.4.     The status of an equation

Any given dynamic model can be written in a large number of equivalent forms
when no tight specijkation is provided for the error term. The following example
illustrates the issues involved:
   Suppose there existed a well-articulated, dynamic but non-stochastic economic
theory (of a supply/demand form) embodied in the model:

        Q, = alQt-l+  a14 + ad’, + ul,,                                        (26)
        f’, = qPrpl + @, + qjQ,-1 + u2t,                                       (27)
where QI, P,, I, and C, are quantity, price, income and cost, respectively, but the
1036                                                                  D. F. Hendry et al.

properties of u,! are not easily prespecified given the lack of a method for relating
decision time periods to observation intervals (see Bergstrom in Chapter 20 of this
Handbook for a discussion of continuous time estimation and discrete approxi-
mations). It is assumed below that (C,, Z,) is weakly, but not strongly, exogenous
for {a, }, and that (26) and (27) do in fact correspond “reasonably” to basic
structural behavioural relationships, in the sense just discussed.
   Firstly, consider (26); eliminating lagged Q’s yields an alternative dynamic
relation linking Q to Z and P in a distributed lag:


       Q,= 2 (aziZ,-,+a3r~-;)+uUlr,                                                (28)
           r=O
where a,, = a;a, (j = 2,3). Alternatively, eliminating P, from (26) using (27) yields
the reduced form:

                     + T& + Q-‘-1 + e,,,
       Q,= qQ,_,+ 7~~1,                                                            (29)

which in turn has a distributed lag representation like (28), but including
&Ii201       an d excluding P,. Further, (27) can be used to eliminate all values of
P,_, from equations determining Q, to yield:

                                                                                   (30)

transformable                to the distributed lag:




(where the expressions for b,, as functions of ak are complicated), which is similar
to (28) but with {C,_,} in place of {P,-,}.
   Manifestly, the error processes of the various transformations usually will have
quite different autocorrelation properties and we have:

       %r    =   qq,-l           +    q,,

       e1,   =   qt      +   a3u2,,

       Wl!   =   Cl,     -a4u1r-1r


       91,   =&911-l             +    Pzllr-2   +   Wlr.


Almost all of these errors are likely to be autocorrelated, with correlograms that
may not be easy to characterise simply and adequately, emphasising the link of
dynamic to stochastic specification.
  In the illustration, all of the “distributed lag” representations are soloed
versions of (26)+(27) and if estimated unrestrictedly (but after truncating the lag
Ch. 18: Dynumic   Specificdon                                                   1031

length!) would produce very inefficient estimates (and hence inefficient forecasts
etc.). Consequently, before estimating any postulated formulation, it seems im-
portant to have some cogent justifications for it, albeit informal ones in the
present state of the art: simply asserting a given equation and “treating symp-
toms of residual autocorrelation” need not produce a useful model.
   Indeed, the situation in practice is far worse than that sketched above because
of two additional factors: n-us-specification and approximation. By the former, is
meant the possibility (certainty?) that important influences on yI have been
excluded in defining the model and that such variables are not independent of the
included variables. By the latter, is meant the converse of the analysis from
(26)+(27) to (31) namely that theory postulates a general lag relationship between
Q, and its determinants Z,, C, as in (31) (say) and to reduce the number of
parameters in b,( and b4, various restrictions are imposed. Of course, a similar
analysis applies to all forms derived from (27) with P, as the regressand.
Moreover, “combinations” of any of the derived equations might be postulated
by an investigator. For an early discussion, see Haavelmo (1944).
   For example, consider the case where C, is omitted from the analysis of
(26)+(27) when a “good” time-series description of C, is given by:

                                                                                (32)

where d,(L) are polynomials in the lag operator L, Lkx, = xl_ k, and 5; is “white
noise”, independent of Q, P and I. Eliminating C, from the analysis now
generates a different succession of lag relationships corresponding to (28)-(31). In
turn, each of these can be “adequately” approximated by other lag models,
especially if full allowance is made for residual autocorrelation. Nevertheless,
should the stochastic properties of the data generation process of any “exogenous”
variable change [such as C, in (32)], equations based on eliminating that variable
will manifest a “structural change” even if the initial structural model (26)+(27)
is unaltered. For this reason, the issue of the validity of alternative approxima-
tions to lag forms assumes a central role in modelling dynamic processes. A
variety of possible approximations are discussed in Section 3, and in an attempt
to provide a framework, Section 2.6 outlines a typology of single equation
dynamic models. First, we note a few quasi-theoretical interpretations for distrib-
uted lag models.


2.5.   Quasi-theoretical bases for dynamic models

Firstly, equations with lagged dependent variables arise naturally in situations
where there are types of adjustment costs like transactions costs, search costs,
optimisation costs, etc. and/or where agents react only slowly to changes in their
1038                                                                D. F. Hendry et 01.

environment due to habit, inertia or lags in perceiving changes and SO on. Thus
economic agents may attach monetary or utility costs to instantaneous alteration
of instruments to fully achieve plans. Even when there are no adjustment costs,
slow reactions are likely because of the uncertainty engendered by the future and
the lack of perfect capital and futures markets. Although formal modelling of
such costs is still badly developed-Nerlove       (1972) and Sims (1974) provide
references and discussion-it    appears that what optimal rules there are prove to
be extraordinarily complex and, given the fact that only aggregates are observed,
such theory would seem to be only a weak source of prior information. In fact it
is not impossible that distributed lags between aggregate variables reflect the
distribution of agents through the population. For example, if agents react with
fixed time delays but the distribution of the length of time delays across agents is
geometric, the aggregate lag distribution observed would be of the Koyck form. In
the same way that Houthakker (1956) derived an aggregate Cobb-Douglas
production function from individual units with fixed capital/labour ratios, some
insight might be obtained for the format of aggregate distributed lags from
similar exercises [see, for example, Trivedi (1982)].
   However, it seems likely that many agents use simple adaptive decision rules
rather than optimal ones although, as Day (1967) and Ginsburgh and Waelbroeck
(1977) have shown, these have the capability of solving quite complex optimiza-
tion problems. A further example of the potential role of these adaptive “rules of
thumb” arises from the monetarists’ contention that disequilibria in money
balances provide signals to agents that their expenditure plans are out of
equilibrium [e.g. Jonson (1977)] and that simple rules based on these signals may
be adopted as the costs are low and information value high. Stock-flow links also
tend to generate models with lagged dependent variables.
   In any case, state-variable feedback solutions of optimization problems often
have alternative representations in terms of servo-mechanisms of a form familiar
to control engineers, and it has been argued that simple control rules of the type
discussed by Phillips (1954, 1957) may be more robust to mis-specification of the
objective function and/or the underlying economic process [see Salmon and
Young (1979) and Salmon (1979)]. For quadratic cost functions, linear decision
rules result and can be expressed in terms of proportional, derivative and integral
control mechanisms. This approach can be used for deriving dynamic economet-
ric equations [see, for example, Hendry and Anderson (1977)], an issue discussed
more extensively below. Since such adaptive rules seem likely solutions of many
decision problems [see, for example, Marschak (1953)] lagged dependent variables
will commonly occur in economic relationships. Thus, one should not automati-
cally interpret (say) “rational lag” models such as (26) as approximations to
“distributed lag” models like (28); often the latter will be the solved form, and it
makes a great deal of difference to the structurality of the relationship and the
properties of the error term whether an equation is a solved variant or a direct
representation.
Ch. 18: Dynumic   Specification                                                    1039


   Next,   finite  distributed  lags also arise naturally in some situations such as
order-delivery relationships, or from aggregation over agents, etc. and often some
knowledge is available about properties of the lag coefficients (such as their sum
being unity or about the “smoothness” of the distribution graph). An important
distinction in this context is between imposing restrictions on the model such that
(say) only steady-state behaviour is constrained, and imposing restrictions on the
data (i.e. constraints binding at all points in time). This issue is discussed at
greater length in Davidson et al. (1978), and noted again in Section 2.6, paragraph
(h).
   Thirdly, unobservable expectations about future outcomes are frequently mod-
elled as depending on past information about variables included in the model,
whose current values influence y,. Eliminating such expectations also generates
more or less complicated distributed lags which can be approximated in various
ways although as noted in Section 2.3, paragraph (d), changes in the processes
generating the expectations can involve a loss of structurality [see, for example,
Lucas (1976)]. Indeed, this problem occurs on omitting observables also, and
although the conventional interpretation is that estimates suffer from “omitted
variables bias” we prefer to consider omissions in terms of eliminating (the
orthogonalised component of) the corresponding variable with associated trans-
formations induced on the original parameters. If all the data processes are
stationary, elimination would seem to be of little consequence other than necessi-
tating a reinterpretation of coefficients, but this does not apply if the processes are
subject to intervention.
   Finally, observed variables often are treated as being composed of “systematic”
and “error” components in which case a lag polynomial of the form d(L) =
Cy&d,L         can be interpreted as a “filter” such that d(L)z, = z: represents a
systematic component of z,, and z, - z: = W, is the error component. If y,
responds to z: according to some theory, but the {d;} are unknown, then a finite
distributed lag would be a natural formulation to estimate [see, for example,
Godley and Nordhaus (1972) and Sargan (1980b) for an application to models of
full-cost pricing]. Conversely, other models assert that _ytonly responds to w, [see,
for example, Barro (1978)] and hence restrict the coefficients of z, and z,? to be
equal magnitude, opposite sign.
   As should be clear from the earlier discussion but merits emphasis, any
decomposition of an observable into (say) “systematic” and “white noise”
components depends on the choice of information set: white noise on one
information set can be predictable using another. For example:


                                                                                  (33)


is white noise if each of the independent     v,,_, is, but is predictable apart from
1040                                                                       D. F. Hendty et al.

yovo, using linear combinations of lagged variables corresponding to the { v,,-, }.
Thus, there is an inherent lack of uniqueness in using white noise residuals as a
criterion for data coherency, although non-random residuals do indicate data
“incoherency” [see Granger (1981) and Davidson and Hendry (1981) for a more
extensive discussion]. In practice, it is possible to estimate all of the relationships
derivable from the postulated data generation process and check for mutual
consistency through r&-specification analyses of parameter values, residual auto-
correlation, error variances and parameter constancy [see Davidson et al. (1978)].
This notion is similar in principle to that underlying “non-nested” tests [see
Pesaran and Deaton (1978)] whereby a correct model should be capable of
predicting the residual variance of an incorrect model and any failure to do so
demonstrates that the first model is not the data generation process [see, for
example, Bean (1981)]. Thus, ability to account for previous empirical jkdings is a
more demanding criterion of model selection than simply having “data coherency”:
that is, greater power is achieved by adopting a more general information set than
simply lagged values of variables already in the equation [for a more extensive
discussion, see Hendry and Richard (1982)].
   Moreover, as has been well known for many years,4 testing for predictive
failure when data correlations alter is a strong test of a model since in modern
terminology (excluding chance offsetting biases) it indirectly but jointly tests
structurality, weak exogeneity and appropriate marginalisation (which includes
thereby both dynamic and stochastic aspects of specification). A well-tested
model with white-noise residuals and constant parameters (over various sub-sam-
ples), which encompasses previous empirical results and is consonant with a
pre-specified economic theory seems to offer a useful approximation to the data
generation process.


2.6.   A typology of single dynamic equations

In single equation form, models like (22) from the class defined in (6) and (7) are
called Autoregressive-Distributed lag equations and have the general expression:



                                                                                        (34)


where d,(L)    is a polynomial     in L of degree m,. Thus, (34) can be denoted

  4See,for example,Marget’s(1929) review of Morgenstem’s book on the methodology of economic
forecasting.
Ch. 18: Dynamic Spec$cation                                                        1041


AD(m,,m,,...,     mk) although information on zero coefficients in the d,(L) is lost
thereby. The class has {Q} white noise by definition so not all possible data
processes can be described parsimoniously by a member of the AD( .) class; for
example, moving-average errors (which lead to a “more general” class called
ARMAX-see         Section 4) are formally excluded but as discussed below, this
raises no real issues of principle. In particular, AD(1, 1) is given by:




which for present purposes is assumed to be a structural behavioural relationship
wherein z, is weakly exogenous for the parameter of interest 8’ = (Pi&&), with
the error en - LN(0, ail). Since all models have an error variance, (35) is referred
to for convenience as a three-parameter model. Although it is a very restrictive
equation, rather surprisingly AD(1,l) actually encompasses schematic representa-
tives of nine distinct types of dynamic model as further special cases. This provides a
convenient pedagogical framework for analysing the properties of most of the
important dynamic equations used in empirical research, highlighting their re-
spective strengths and weaknesses, thereby, we hope, bringing some coherence to
a diverse and voluminous literature.
   Table 2.1 summarises the various kinds of model subsumed by AD(l,l). Each
model is only briefly discussed; cases (a)-(d) are accorded more space in this
subsection since Sections 3, 4 and 5, respectively, consider in greater detail case
(e), cases (f), (h) and (i), and case (g).
   The nine models describe very different lag shapes and long-run responses of y
to x, have different advantages and drawbacks as descriptions of economic time
series, are differentially affected by various mis-specifications and prompt gener-
alisations which induce different research avenues and strategies. Clearly (a)-(d)
are one-parameter whereas (e)-(i) are two-parameter models and on the assump-
tions stated above, all but (g) are estimable by ordinary least squares [whereas (g)
involves iterative least squares]. Each case can be interpreted as a model “in its
own right” or as derived from (or an approximation to) (35) and these approaches
will be developed in the discussion.
   The generalisations of each “type” in terms of increased numbers of lags
and/or distinct regressor variables naturally resemble each other more than do
the special cases chosen to highlight their specific properties, although major
differences from (34) persist in most cases. The exclusion restrictions necessary to
obtain various specialisations from (34) [in particular, (36)-(40) and (44)] seem
difficult to justify in general. Although there may sometimes exist relevant
theoretical arguments supporting a specific form, it is almost always worth testing
whatever model is selected against the general unrestricted equation to help gain
protection from major mis-specifications.
1042                                        D. F. Hendry et al.




                 3




       II   II   II   II II   II II    II
       9” @z     9”   @ci Qm &y 9”    cl
                                      W

                                      +”
Ch. 18: Dynamic SpeciJicntion                                                                      1043

   (a) Static regression models of the general form:

      Y,= CPJzjt     +   et9                                                                       (45)


rarely provide useful approximations to time-series data processes [but see
Hansen (1982)]. This occurs both because of the “spurious regressions” problem
induced by the observations being highly serially correlated [see Yule (1926) and
Granger and Newbold (1974)] with associated problems of residual autocorre-
lation and uninterpretable values of R*, and because the assertion that (45) is
structural with z, weakly exogenous for /I has not proved viable in practice. While
equilibrium economic theories correctly focus on interdependence and often
entail equations such as y = f(z) where linearity seems reasonable, imposing (45)
on data restricts short-run and long-run responses of y to z to be identical and
instantaneous. It seems preferable simply to require that the dynamic model
reproduces y = f(z) under equilibrium assumptions; this restricts the class of
model but not the range of dynamic responses [see (h)]. Finally, for forecasting
y,,, (45) requires a prior forecast of z,+, so lagged information is needed at some
stage and seems an unwarranted exclusion from behavioural equations.
    (b) In contrast, uniuariute time-series models focus only on dynamics but often
serve as useful data-descriptive tools especially if selected on the criterion of
white-noise residuals [see Box and Jenkins (1970)]. A general stationary form is
the autoregressive moving average (ARMA) process:

                                                                                                   (46)

 where y(L) and 6(L) are polynomials of order mO, m, (with no redundant
 factors), and (46) is denoted ARMA(m,, ml) with (37) being ARMA (l,O).
 Equations like (37) can be suggested by economic theory and, for example,
 efficient-market and rational expectations models often have & =l [see, for
 example, Hall (1978) and Frenkel (1981)], but for the most part ARMA models
 tend to be derived rather than autonomous. Indeed, every variable in (7) has an
 ARMA representation’ [see, for example, Zellner and Palm (1974) and Wallis
 (1977)] but such reformulations need not be structural and must have larger
 variances. Thus, econometric models which do not fit better than univariate
 time-series processes have at least mis-specified dynamics, and if they do not
forecast “ better”6 must be highly suspect for policy analysis [see, inter alia,
 Prothero and Wallis (1976)].

   51mplicitly, therefore, our formulation excludes deterministic factors, such as seasonal dummies, but
could be generalised to incorporate these without undue difficulty.
  61t is difficult to define “better” here since sample data may yield a large variance for an effect
which is believed important for policy, but produces inefficient forecasts. A minimal criterion is that
the econometric model should not experience predictive failure when the ARhfA model does not,
1044                                                                 D. F. Hendry et al.

   In principle, all members of our typology have generalisations with moving-
average errors, which anyway are likely to arise in practice from marginalising
with respect to autoregressive or Granger-causal variables, or from measurement
errors, continuous time approximations etc. However, detailed consideration of
the enormous literature on models with moving average errors is precluded by
space limitations (see, Section 4.1 for relevant references). In many cases, MA
errors can be quite well approximated by autoregressive processes [see, for
example, Sims (1977, p. 194)] which are considered under (g) below, and it seems
difficult to discriminate in practice between autoregressive and moving-average
approximations to autocorrelated residuals [see, for example, Hendry and Trivedi
(1972)].
   (c) Di’renced data models resemble (a) but after transformation of the
observationsy,, z, to (y, - y,_i) = Ay, and AZ,. The filter A = (1- L) is commonly
applied on the grounds of “achieving stationarity”, to circumvent awkward
inference problems in ARMA models [see Box and Jenkins (1970), Phillips
(1977) Fuller (1976), Evans and Savin (1981) and Harvey (1981)] or to avoid
“spurious regressions” criticisms. Although the equilibrium equation that y = &z
implies A y = &A z, differencing fundamentally alters the properties of the error
process. Thus, even if y is proportional to z in equilibrium, the solution of (38) is
indeterminate and the estimated magnitude of & from (38) is restricted by the
relative variances of Ay, to AZ,. A well-known example is the problem of
reconciling a low marginal with a high and constant average propensity to
consume [see Davidson et al. (1978) and compare Wall et al. (1975) and Pierce
(1977)]. In any case, there are other means of inducing stationarity, such as using
ratios, which may be more consonant with the economic formulation of the
problem.
   (d) Leading indicator equations like (39) attempt to exploit directly differing
latencies of response (usually relative to business cycles) wherein, for example,
variables like employment in capital goods industries may “reliably lead” GNP.
However, unless such equations have some “causal” or behavioural basis, & need
not be constant and unreliable forecasts will result so econometric models which
indirectly incorporate such effects have tended to supercede leading indicator
modelling [see, inter alia, Koopmans (1947) and Kendall (1973)].
   (e) AS discussed in Section 2.4, distributed lugs can arise either from
structural/behavioural   models or as implications of other dynamic relationships.
Empirically, equations of the form:

       Y, = a(L)4   + e,,                                                         (47)

where a(L) is a polynomial of order mi frequently manifest substantial residual
autocorrelation [see, inter alia, many of the AD(0, m,,. . .,mk) equations in
Hickman (1972) or, for example, new housing “starts-completions”  relationships
Ch. 18: Dynamic Specification                                                     1045

in Waelbroeck (1976)]. Thus, whether or not z, is strongly exogenous becomes
important for the detection and estimation of the residual autocorrelation.
“Eliminating” autocorrelation by fitting autoregressive errors imposes “common
factor restrictions” whose validity is often dubious and merits testing [see (g) and
Section 51, and even after removing a first order autoregressive error, the equation
may yet remain prey to the “spurious regressions” problem [see Granger and
Newbold (1977)]. Moreover, collinearity between successive lagged z’s has gener-
ated a large literature attempting to resolve the profligate parameterisations of
unrestricted estimation (and the associated large standard errors) by subjecting
the { CX,} to various “a priori constraints”. Since relatively short “distributed lags”
also occur regularly in other AD( 0) models, and there have been important recent
technical developments, the finite distributed lag literature is surveyed in Sec-
tion 3.
   (f) Partial adjustment models are one of the most common empirical species
and have their basis in optimization of quadratic cost functions where there are
adjustment costs [see Eisner and Strotz (1963) and Holt et al. (1960)]. Znualid
exclusion of z,_t can have important repercussions since the shape of the
distributed lag relationship derived from (41) is highly skewed with a large mean
lag when & is large even though that derived from (35) need not be for the same
numerical value of /Is: this may be part of the explanation for apparent “slow
speeds of adjustment” in estimated versions of (41) or generalisations thereof (see,
especially, studies of aggregate consumers’ expenditure and the demand for
money in the United Kingdom). Moreover, many derivations of “partial adjust-
ment” equations like (41) entail that e, is autocorrelated [see, for example,
Maddala (1977, ch. 9) Kennan (1979) and Muellbauer (1979)] so that OLS
estimates are inconsistent for the fi, [see Malinvaud (1966)], have inconsistently
estimated standard       errors, and residual autocorrelation          tests like the
Durbin-Watson       (DW) statistic are invalid [see Griliches (1961) and Durbin
(1970)]. However, appropriate Lagrange multiplier tests can be constructed [see
Godfrey (1978) and Breusch and Pagan (1980)]. Finally, generalised members of
this class such as:



                                                                                  (48)


have unfortunate parameterisations since “levels” variables in economics tend to
be highly intercorrelated.
   (g) Common factor representations correspond l-l to autoregressive error
models and most clearly demonstrate the dynamic-stochastic specification link in
terms of “equation dynamics” versus “error dynamics” [see Sargan (1964, 198Oc),
Hendry and Mizon (1978) and Mizon and Hendry (198O)J To illustrate the
1046                                                                   D. F. Hendry el al.

principles involved, reconsider (35) written in lag operator notation (with & # 0):

       (l_PsL)Y,=81(1+(a/P,)L)z,+e,,                                              (35*1

where both lag polynomials have been normalised. Under the condition:

       - P3 = &/PI         or       Ptt% + Pz = 0,                                  (49)

the lag polynomials coincide and constitute a common factor of (1 - P,L).
Dividing both sides of (35*) by (1 - &L) yields:

                 1+ WLW                        er
       Y, =&
                   l-&L
                                          z,+1_fi3L=P1z,+%~                         (50)
               i                      i
where

       u,=&U,_t+e,.                                                                 (51)




              ADtO,
               0)
Consequently, the equations:



       f4
        =&u,-
          1+e,AJW)
                1
       Yt= Plzl+ u,
                                [
                                                                                    (52)


uniquely imply and are uniquely implied by:

       Y, = Ptz, + &~,-r - P&,-t             + e,    [AD(L1)1.                      (53)

Usually, I& 1< 1 is required; note that (52) can also be written as:

       y,+ = P,$   + e,,                                                            (54)

where z,+ = (z, - j&z,_ t) is a “quasi-difference” and the operator (1 - &L)
“eliminates” the error autocorrelation.
   This example highlights two important features of the AD( -) class. Firstly,
despite formulating the class as one with white-noise error, it does not exclude
autoregressive error processes. Secondly, such errors produce a restricted case of
the class and hence the assumption of an autoregressive error form is testable
against a less restricted member of the AD( -) class. More general cases and the
implementation of appropriate tests of common factor restrictions are discussed
in Section 5.
   The equivalence of autoregressive errors and common factor dynamics has on
occasion been misinterpreted to mean that autocorrelated residuals imply com-
Ch. 18: Dynamic Specificntion                                                      1047

mOn factor    dynamics. There are many reasons for the existence of autocorrelated
residuals including: omitted variables, incorrect choice of functional form, mea-
surement    errors in lagged variables, and moving-average error processes as well as
autoregressive errors. Consequently, for example, a low value of a Durbin-
Watson statistic does nor uniquely imply that the errors are a first-order autore-
gression and automatically “eliminating” residual autocorrelation by assuming an
AD(l) process for the error can yield very misleading results.
    Indeed, the order of testing is incorrect in any procedure which tests for
autoregressive errors by assuming the existence of a common factor representation
of the model: the validity of (49) should be tested before assuming (52) and
attempting to test therein Hb: & = 0. In terms of commencing from (35), if and
only if H,: & + /3J$ = 0 is true will the equation have a representation like (52)
and so only if H, is not rejected can one proceed to test Hb: /3, = 0. If Hb is tested
alone, conditional on the belief that (49) holds, then failure to reject & = 0 does
not imply that yI = &z, + e, (a common mistake in applied work) nor does
rejection of Hb imply that the equations in (52) are valid. It is sensible to test H,
 first since only if a common factor exists is it meaningful to test the hypothesis
that its root is zero. While (52) is easily interpreted as an approximation to some
more complicated model with the error autocorrelation simply acting as a “catch
all” for omitted variables, unobservables, etc. a full behauioural interpretation is
more difficult. Formally, on the one hand, E( y, 1X, _ 1) = PI zl + &u, _ 1 and hence
agents adjust to this shifting “optimum” with a purely random error. However, if
 the { ut} process is viewed as being autonomous then the first equation of (52)
entails an immediate and complete adjustment of y to changes in z, but if agents
 are perturbed above (below) this “equilibrium” they will stay above (below) for
 some time and do not adjust to remove the discrepancy. Thus, (52) also char-
acter&es a “good/bad fortune” model with persistence of the chanced-upon state
in an equilibrium world. While these paradigms have some applications, they
 seem likely to be rarer than the present frequency of use of common factor
 models would suggest, supporting the need to test autoregressive error restrictions
 before imposition. The final interpretation of (53) noted in Section 5 serves to
 reinforce this statement.
    Despite these possible interpretations, unlessy does not Granger cause z, then z
 Granger causes u. If so, then regressing y, on z, when { uI} is autocorrelated will
yield an inconsistent estimate of &, and the residual autocorrelation coefficient
will be inconsistent for &. Any “two-step” estimator of (&, &) commencing
 from these initial values will be inconsistent, even though: (a) there are no explicit
lagged variables in (52) and (b) fullyiterated maximum likelihood estimators are
consistent and fully efficient when z, is weakly exogenous for fi [see Hendry
(1976) for a survey of estimators in common factor equations]. Finally, it is worth
emphasising that under the additional constraint that p3 = 1, model (c) is a
common factor formulation.
1048                                                                  D. F. Hcndty et al.

 (h) Error correction models such as (43) are a natural reparameterisation            of
AD( .) equations when:

       (C/3,-1)=6=0.                                                               (55)

If & # 1, the steady-state solution of (43) for AZ = g = Ay is:

       Y=(I-p,)g/(I-P,)+z=k(g)+z,                                                  (56)

and hence y = z in static equilibrium, or Y = K( g)Z (more generally) when y and
z are In Y and In Z, respectively [see Sargan (1964) and Hendry (1980)]. Thus, (55)
implements long-ran proportionality or homogeneity and ensures that the dynamic
equation reproduces in an equilibrium context the associated equilibrium theory.
Moreover, Ha: 6 = 0 is easily tested, since (35) can be rewritten as:

       Ay,=P,Az,+(I-_P3)(z-y),-l+6z1-1+e,,                                         (57)

which anyway offers the convenient interpretation that agents marginally adjust y,
from y, _ 1 in response to changes in z, (pi being the short-run effect), the previous
disequilibrium (z - Y),_~ ((1 - &) being the “feedback” coefficient) and the
previous level z,-~ (which is irrelevant under proportionality). Since many eco-
nomic theories have proportional forms in static equilibrium, error correction
models might be expected to occur frequently. Indeed, an important property of
(43) is that when 6 = 0, (57) coincides with (43) and all of the other models in this
typology become special cases of (43). Thus, given 6 = 0 a modelling exercise which
commenced from (43) even when one of the other types represented the actual
data generation process would involve no mis-specification and which other
special case was correct would be readily detectable from the values of the
parameters in (43) given in Table 2.2. The converse does not hold: fitting any of
(a)-(g) when (h) is true but Table 2.2 restrictions are invalid, induces mis-specifi-
cations, the precise form of which could be deduced by an investigator who used
(h). Thus, when 6 = 0, error correction is essentially a necessary and sufficient
model form and it is this property which explains the considerable practical
success of error correction formulations in encompassing and reconciling diverse
empirical estimates in many subject areas [see, inter alia, Henry et al. (1976), Bean
(1977), Hendry and Anderson (1977), Davidson et al. (1978), Cuthbertson (1980),


                                         Table 2.2
Ch. 18: D.vnamic Specification                                                   1049


Hendry (1980) and Davis (1982)]. In an interesting way, therefore, (43) nests
“levels” and “differences” formulations and, for example, offers one account of
why a small value of /?r in (c) is compatible with proportionality in the long run,
illustrating the interpretation difficulties deriving from imposing “differencing
filters”.
    (i) Equation (44) could constitute either the reduced form of (35) on eliminating
z, [assuming its process to be AD(l,l) also, or a special case thereof] or a
“deadstart” model in its own right. For example, if zI = Az,_r + ezt and (35) is the
behavioural equation, (44) is also “valid” with parameters:



but is no longer structural for changes in X, and A is required for estimating 8.
Indeed if 6 = 0 in (55), (58) will not exhibit proportionality unless &(l - h) = 0.
Also, & + &X < 0 does not excludey = z in equilibrium, although this interpreta-
tion will only be noticed if (y,, z,) are jointly modelled.
   Conversely, if (44) is structural because of an inherent lag before z affects y,
then it is a partial adjustment type of model, and other types have deadstart
variants in this sense.
   The discussions in Sections 3, 4 and 5, respectively, concern the general forms
of (e); (f), (h) and (i); and (g), plus certain models excluded above, with some
overlap since distributed lags often have autocorrelated errors, and other dynamic
models usually embody short distributed lags. Since generalisations can blur
important distinctions, the preceding typology is offered as a clarifying frame-
work.



3.     Finite distributed lags



3.1.    A statement of the problem

A finite distributed-lag relationship has the form:

       Yr’ k       W,(L)zit+ut7                                                  (59)
             i=l

where

       HqL) =          3 WijLj,                                                  (60)
                    j=mp

and is a member of the AD(0, m 1,. . . , m,) class. For ease of exposition       and
1050                                                                       D. F. Hendry et al.

notation, attention is centered on a bivariate case, namely AD(0, m) denoted by:

       y, =      5 wjz,_j + u, = w( L)z, + u,,                                          (61)
              j=m’




where { z, } is to be treated as “given” for estimating w = ( W,O, . . . , w,,,)‘, and ut is
a “disturbance term”. It is assumed that sufficient conditions are placed upon
{ ur} and {z,} so that OLS estimators of w are consistent and asymptotically
normal [e.g. that (8) is the data generation process and is a stable dynamic system
with w defined by E(y,lZ,_,o)].
   Several important and interdependent difficulties hamper progress. Firstly,
there is the issue of the status of (61), namely whether it is basic or derived and
whether or not it is structural, behavioural, etc. or just an assumed approximation
to some more complicated lag relationship between y and z (see Sections 2.3 and
2.4). Unless explicitly stated otherwise, the following discussion assumes that (61)
is structural, that u, - IN(0, u,‘) and that z, is weakly exogenous for W. These
assumptions are only justifiable on a pedagogic basis and are unrealistic for many
economics data series; however, most of the technical results discussed below
would apply to short distributed lags in a more general dynamic equation.
Secondly, W(L) is a polynomial of the same degree as the lag length and for
highly intercorrelated { zI_,}, unrestricted estimates of w generally will not be
well determined. Conversely, it might be anticipated that a lower order poly-
nomial, of degree k < m say, over the same lag length might suffice, and hence
one might seek to estimate the {“(J} subject to such restrictions. Section 3.2
considers some possible sets of restnctions whereas Section 3.4 discusses methods
for “weakening” lag weight restrictions (“variable lag weights” wherein the { 9 }
are dependent on economic variables which change over time, are considered in
Section 3.6).
   However, k, m” and m are usually unknown and have to be chosen jointly, and
this issue is investigated in Section 3.3 together with an evaluation of some of the
consequences of incorrect specifications. Further, given that formulations like (61)
are the correct specification, many alternative estimators of the parameters have
been proposed and the properties of certain of these are discussed in Section 3.5
and related to Sections 3.2 and 3.4.
   Frequently, equations like (61) are observed to manifest serious residual
autocorrelation and Section 3.6 briefly considers this issue as well as some
alternative specifications which might facilitate model selection.

3.2.    Exact restrictions on lag weights

If (61) is the correct specification and in its initial form W(1) = cw, = h (say) then
working with { h-‘wi} produces a lag weight distribution which sums to unity. It
is assumed below that such resealing has occurred so that W(1) = 1, although it is
Ch. 18: Dynamic Specification                                                    1051

not assumed that this is necessarily imposed as a restriction for purposes of
estimation. It should be noted at the outset that all non-stochastic static equi-
librium solutions of (61) take the simple form: y = hz and the importance of this
is evaluated in (3.6). Moreover, provided all of the w, are non-negative, they are
analogous to discrete probabilities and derived “moments” such as the mean
and/or median lag (denoted p and 17,respectively), variance of the lag distribu-
tion etc. are well defined [for example, see Griliches (1967) and Dhrymes (1971)]:
             m

     p=     C iw,                                                               (62)

and 11is an integer such that:


       c W;<$l c w,.
      I=0                i=o

   Nevertheless, even assuming (61) is structural, economic theory is not usually
specific about various important features of the W( .) polynomial, including its
“shape” (i.e. multimodality, degree, etc.), starting point m”, and lag length m. For
the present, we take m ’ = 0 and m to be known, and first consider the issue of the
“shape” of W( .) as a function of k -c m.
   If little information exists on what might constitute likely decision rules, or if
(say) the relationship is an order/delivery       one, so that (61) is a reasonable
specification but m is large, some restrictions may need to be placed on { wi} to
obtain “plausible” estimates. However, as Sims (1974) and Schmidt and Waud
(1973) argue, this should not be done without first estimating w unrestrictedly.
From such results, putative restrictions can be tested. Unrestricted estimates can
provide a surprising amount of information, notwithstanding prior beliefs that
“collinearity” would preclude sensible results from such a profligate parameterisa-
tion. Even so, some simplification is usually feasible and a wide range of possible
forms of restrictions has been proposed including arithmetic, inverted “u”,
geometric, Pascal, gamma, low order polynomial and rational [see, for example,
the discussion in Maddala (1977)]. Of these, the two most popular are the low
order polynomial distributed lag [denoted PDL; see Almon (1965)]:
             k
     w, =   C    v,j’,         j=O ,*.-, m,                                     (63)
            r=O

and the rational distributed lag [denoted RDL; see Jorgenson (1966)]:


     v’(L)=A(L)/B(L):A(L)=                    5 u,L’,B(L)=l-   i     b,Lj.      (64)
                                              j=O              j=l
1052                                                                                 D. F. Hendty et al.

These are denoted PDL(m, k) and RDL( p, q) respectively. If k = m then the
{ w, } are unrestricted and { y, } is simply a one-one reparameterisation. Also, if
A(L) and B(L) are defined to exclude redundant common factors, then RDLs
cannot be finite’ but:
   (a) as shown in Pagan (1978), PDL restrictions can be implemented via an
RDL model denoted the finite RDL, with B(L) = (1 - L)k+’ and p = k; and
   (b) RDLs can provide close approximations to PDLs as in:

       W(L) = (0.50+0.30L           +o.15L2 +o.05L3)         = gl-o.5L))’

                 = (0.50+0.25L     +0.13L2 +0.06L3 +0.03L4...).                                    (65)

   Indeed, early treatments of RDL and PDL methods regarded them as ways of
approximating unknown functions to any desired degree of accuracy, but as Sims
(1972) demonstrated, an approximation to a distribution which worked quite well
in one sense could be terrible in other respects. Thus, solved values from
A( L)/B( L) could be uniformly close to W(L) yet (say) the implied mean lag
could be “infinitely” wrong. In (65), for example, the actual mean lag is 0.75
while that of the illustrative approximating distribution is 1.0 (i.e. 33% larger).
Ltitkepohl(l980) presents conditions which ensure accurate estimation of both p
and the long-run response (also see Sections 4.3 and 5 below).
   Rather than follow the “approximations” idea, it seems more useful instead to
focus attention on the nature of the constraints being imposed upon the lag
coefficients by any parametric assumptions, especially since the consequences of
invalid restrictions are well understood and are capable of analytical treatment.
For the remainder of this section, only PDL(m, k) is considered, RDL models
being the subject of Section 4. Schmidt and Mann (1977) proposed combining
PDL and RDL in the LaGuerre distribution, but Burt (1980) argued that this just
yields a particular RDL form.
   The restrictions in (63) can be written in matrix form as:

       w=   Jy     or   (I-   J(J’J)-‘J’)w=Rw=O,                                                   (66)

where J is an (m+l)x(k+l)            Vandermonde matrix and rank (R)=m-k.
Perhaps the most useful parameterisation follows from Shiller’s (1973) observa-
tion that the (k + 1)th differences of a kth order polynomial are zero and hence
the linear restrictions in (66) for PDL(m, k) imply that:

       (l-L)k+ly=O,               j=k+l,...,       m.


   ‘For example, (l&(hL)“‘+’ )/(l - XL) = c~&(XL)       is finite since A(L) and B( I!.) have the factor
(I- h L) in common (and have unidentifiable coefficients unless specified to have a common factor),
Ch. 18: Qynamrc Specification                                                         1053

Thus,    R is a differencing      matrix such that RJ= 0. Expressing (61) in matrix form:

        y=Zw+u           or     y=(ZJ)y+u=Z*y+u,                                     (67)

shows that y can be estimated either directly or via the first expression in (67)
subject to Rw = 0.
   Indeed, (63) can be reparameterised as desired by replacing j’ by any other
polynomial q{(j) = c’,=,J/,,j’ and appropriate choices of q,(j) can facilitate the
testing of various restrictions, selecting parsimonious models and/or computa-
tional accuracy [see Robinson (1970) Pagan0 and Hartley (1981) Trivedi and
Pagan (1979) and Sargan (1980b)l. In particular, orthogonal polynomials could be
used if computational accuracy was likely to be a problem.
   A rather different reparameterisation is in terms of the moments of w [see
Hatanaka and Wallace (1980), Burdick and Wallace (1976) and Silver and
Wallace (1980) who argue that the precision of estimating lag moments from
economic data falls as the order of the moments rises]. As shown by Yeo (1978),
the converse of the Almon transformation is involved, since, when m = k:

        y=ZJ-‘Jw+u=(ZJ-‘)++u                                                         (68)

yields + as the moments of w (assuming w, 2 0, V,). Moreover, from analytical
expressions for Jp ‘, Yeo establishes that (ZJ-‘) involves linear combinations of
powers of differences of zI’s (i.e. CA,d’z,) and that the parameters I/, of the
equation:


        y,=   5     ~,AJz,+u,                                                        (69)
              j=O


 are the factorial moments (so that #a = &, and #i = cpi).
    When t is highly autoregressive, z, will not be highly correlated with &zI for
j 2 1 so that q0 will often be well determined. Finally, (67)-(69) allow intermatch-
 ing of prior information about w and + or $.
    The formulation in (66), and the stochastic equivalent Rw = E - i.d.(O, u,‘Z),
 both correspond to “smoothness” restrictions on how rapidly the lag weights
 change. Sims (1974) doubted the appropriateness of such constraints in many
 models, although this is potentially testable. Since the case k = m is unrestricted
 in terms of pd’nomial restrictions (but, for example, imposes an exact polynomial
 response of yI to lagged z’s with a constant mean lag, etc.), the larger k the less
 can be the conflict with sample information-but     the smaller the efficiency gain if
 k is chosen too large. Nevertheless, it must be stressed that in addition to all the
 other assumptions characterising (61), low order k in PDL(m, k) approximating
 large m entails strong smoothness restrictions.
1054                                                                           D. F. Hen&    et al.

3.3.     Choosing lag length and lag shape

Once m and k are specified, the PDL(m, k) model is easily estimated by
unrestricted least squares; consequently, most research in this area has been
devoted either to the determination of m and k or the analysis of the properties of
the PDL estimator when any choice is incorrect. Such research implicitly accepts
the proposition that there is a “ true” lag length and polynomial degree- to be
denoted by (m*, k*)-and       this stance is probably best thought of as one in
which the “true” model, if known and subtracted from the data, would yield only
a white noise error.
   In such an orientation it is not asserted that any model can fully capture
reality, but only that what is left is not capable of being predicted in any
systematic way, and this viewpoint (which is an important element in data
analysis) is adopted below. For the remainder of this section, m” is taken to be
known as zero; lack of this knowledge would further complicate both the analysis
and any applications thereof.
   The various combinations of (m, k) and their relationships to (m*, k*) are
summarized in Figure 3.1 using a six-fold partition of (m, k) space. Each element
of the partition is examined separately in what follows, as the performance of the
PDL estimator varies correspondingly.

A(m=m*,k>k*)
On this half line, m is fixed at m* and k varies above k*, which is to be
determined.
   It is well-known [see Dhrymes (1971), Frost (1975) and Godfrey and Poskitt
(1975)] that decreasing k results in an increasing number of linear restrictions
upon the model and this is easily seen by noting that the number of differencing
restrictions is (m - k), which increases as k decreases. Furthermore [since
(l- L)k~j = (l- L)k-kl(l - L)kl~, = 0 if (1 - L)“lw, = 01, when the coefficients
lie on a (k, - 1)th degree polynomial they also lie on a (k - 1)th order polynomial
for k, 5 k. Hence, the sequence of hypotheses that the polynomial is of degree
                                  k
                                  A(m = m’, k 2 k’)



       C(m < m*,    k 2 k”)                          F(m > m*, k > k”)




                              1
                   __-                                                   B(m > m’,   k = k”) m
                                      (m’, k”)

       D(m < m’,    k < k”)                         E(m 2 m*, k < k*)


                                                 Figure   3.1
Ch. 18: Dynamic Specification                                                    1055

k-l,k-2,k-3       ,..., 1, is ordered and nested [see Mizon (1977b)] and Godfrey
and Poskitt (1975) selected the optimal polynomial degree by applying Anderson’s
method for determining the order of polynomial in polynomial regression [see
Anderson (1971, p. 42)]. The main complication with this procedure is that the
significance level changes at each step (for any given nominal level) and the
formula for computing this is given in Mizon (1977b) [some observations on
efficient ways of computing this test are available in Pagan0 and Hartley (1981)
and Sargan (1980b)].
   When rn = k, J is non-singular in (66) so either w or y can be estimated directly,
with Wald tests used for the nested sequence; those based on y appear to have
better numerical properties than those using w [see Trivedi and Pagan (1979)].

B(m>m*,k=k*)
The next stage considers the converse of known k* and investigates the selection
of m. From (66), it might seem that increasing m simply increases the number of
restrictions but as noted in Thomas (1977) [by reference to an unpublished paper
of Yeo (1976)] the sum of squared residuals may either increase or decrease in
moving from PDL(m, k) to PDL(m + 1, k). This arises because diferent parame-
ter vectors are involved while the same order of polynomial is being imposed.
   This situation (k* known, m* unknown) has been analysed informally by
Schmidt and Waud (1973) and more formally by Terasvirta (1976), Frost (1975),
Carter, Nagar and Kirkham (1975) and Trivedi and Pagan (1979). Terbvirta
suggests that overstating m leads to biased estimates of the coefficients while
Frost says (p. 68): “Overstating the length of the lag, given the correct degree of
polynomial, causes a bias. This bias eventually disappears as k increases.”
Support for these propositions seems to come from Cargill and Meyer’s (1974)
Monte Carlo study, but they are only a statement of necessary conditions for the
existence of a bias. As proved in Trivedi and Pagan (1979), the sufficient
condition is that stated by Schmidt and Waud (1973); the su@cient condition for a
bias in the PDL estimator is that the lag length be overstated by more than the
degree of approximating polynomial. For example, if k = 1, and m is chosen as
m* + 1, it is possible to give an interpretation to the resulting restriction, namely
it is an endpoint restriction appropriate to a PDL( m*, 1) model. Although it has
been appreciated since the work of Trivedi (1970a) that the imposition of
endpoint restrictions should not be done lightly, there are no grounds for
excluding them from any analysis a priori, and if valid, no bias need result from
m*+k>m>m*.
   To reconcile this with Terasvirta’s theory it is clear from his equation (5)
(p. 1318) that the bias is zero if I?#, = 0 and no reasons are given there for
believing that this cannot be the case. Examples can be constructed in which
biases will and will not be found and the former occurred in Cargill and Meyer’s
work: these biases do not translate into a general principle, but reflect the design
1056                                                                       D. F. Hendw et al.

of the experiments. As an aside, for fixed { zt} there is no need to resort to
imprecise and specific direct simulation experiments to study mis-specifications in
PDLs. This is an area where controlled experiments could yield accurate and
fairly general answers from such techniques as control variables, antithetic
variates and response surfaces (see Hendry in Chapter 16 of this Handbook). For
example, using antithetic variates for U, yields exact simulation answers for
biases. In general, if:

       y=G(Z)B+u          and G( .) is any constant function of fixed Z,                (70)
with u distributed symmetrically according to f(u), and:
       (b-e)=      (GG-‘GNU,                                                           (71)
then f( u) = f( - u), whereas (6 - e) switches sign as u does. Consequently, if, for
example, E(u) = 0 and (70) is correctly specified, simulation estimates of (71)
always average to zero over (u, - u) proving unbiasedness in two replications [see
Hendry and Trivedi (1972)].
   Is it possible to design tests to select an optimal m if k* is known? Carter,
Nagar and Kirkham (1975) propose a method of estimating the “bias” caused by
overspecifying m and argue for a strategy of overspecifying m, computing the
“bias” and reducing m if a large “bias” is obtained. This is an interesting
suggestion but, as noted above, the bias may be zero even if m is incorrect. Sargan
(1980b) points out that the models PDL(m + 1, k) and PDL(m, k) are non-nested
and that two separate decisions need to be made, for which “t”-tests can be
constructed:
   (i) Is there a longer lag, i.e. does w,,,+i = O?
   (ii) Does the coefficient wm+i he on the k th order polynomial?
To test the first, form a regression with the PDL(m, k) variables and z,+i in the
regression. The second can be constructed from the covariance matrix ci that is a
by-product of the regression. If both (i) and (ii) are rejected, then a more general
specification is required.
   A possible difficulty with this proposal is that for a valid test of wm+i = 0, the
estimator under the alternative hypothesis must be unbiased, but a bias is certain
if the lag length is overstated by more than the polynomial degree. Accordingly,
to implement (i) and (ii) above, it is important to have good prior information on
the true lag length, at least within k* periods. Thus, the first step of the analysis
should be to select an optimal polynomial order for a sufficiently long lag length
in which case (ii) is accepted and a test is required for the validity of an endpoint
restriction8 if accepted, these two steps can be conducted sequentially till an
appropriate termination criterion is satisfied.
   While this procedure at least yields an ordered sequence of hypotheses, its
statistical properties remain to be investigated, and to be compared to alternative

   ‘We owe this point to George   Mailath.
Ch. 18: Dynamic   Specification                                                  1057


approaches. There are some further comments that need to be made. Firstly, what
happens if PDL(m, m - 1) is rejected at the first step? As this could be due either
to the true lag being m and unrestricted or to the need for a shorter lag, the
unrestricted estimates PDL(m, m) allow a test of this. Secondly, an ordered
sequence (even when nested) merely yields control of Type I errors and says
nothing about power (necessarily). Thus, gross overstatement of the lag length
causing a large number of tests in the sequence almost certainly results in low
power (e.g. for m* = 4, k* = 2 choosing m 2 8 initially could result in a lengthy
test sequence). However, Bewley (1979b), in a comparison of various methods to
select m and k, examined one approach similar to that described above, finding it
to have good power. Notice that the unrestricted estimation of the distributed lag
parameters is an important part of the strategy, because it is the comparison of a
restricted with an unrestricted model that enables a check on the validity of the
first set of restrictions imposed; once these are accepted it is possible to continue
with the restricted model as the new alternative.

C,D(m<m*,k$k*         )
PartitioningZasZ=[Z,Z,]withZ,-TX(m+l)andZ,-Tx(m*-m),was
(w{w;)’ and R as (R1R2)(the last two conformable with Z), the PDL estimator
of wi -the underspecified lag distribution-is  from (67):


                                                                                (72)

where G$’is the unrestricted OLS estimator of w, in the model y = Z,w, + u. From
standard regression theory 6: is biased whenever Z[Z, f 0, or whenever the
included and excluded regressors are correlated. The existence of this bias will
induce a bias in the PDL estimator, so that a sufficient condition for the PDL
estimator to be biased whenever the lag length is understated is that the regressors
be correlated. However, it is not a necessary condition as 6: is biased whenever
R,w, # 0 even if i;zl”is unbiased. For k < k*, Rw, never equals zero and under-
statement of the polynomial order therefore results in a bias. Furthermore, the
condition noted above in the analysis of the half-line B applies in reverse;
understating the lag length by more than the degree of approximating polynomial
leads to a bias.

E(m 2 m*, k <k*)
The restrictions are incorrect and the PDL estimator must be biased.

F(m > m*, k > k*)
In contrast to the cases above which have been extensively analysed in the
literature, little attention has been paid to the quadrant F despite its potential
relevance. With any PDL(m, k) combination there are (m - k) independent
1058                                                                  D. F. Hendry et al.

homogeneous restrictions upon the (m + 1) w, coefficients, with m* + 1 of these
coefficients, wO,.. . , wm8,lying upon a k * th order polynomial by assumption and
being linked by m* - k* homogenous differencing restrictions. Because of this
latter characteristic, w,, + t,. . . , wm* can be expressed as linear functions of
w,,,..-,wk*, thereby reducing the number of coefficients involved in the (m - k)
restrictions from (m + 1) to (m + l)-( m* - k*). Now two cases need to be
distinguished, according to whether the assumed polynomial order is less than or
equal to the true lag length, and the bias situation in each instance is recorded in
the following two propositions:
Proposition I

When k -c m*, the PDL(m, k) estimator is certainly biased if m - m* > k*.
Proposition 2

When k 2 m*, the PDL(m, k) estimator is certainly biased if m - k > k*.
 Proofs of these and other propositions presented below are provided in Hendry
and Pagan (1980).
    Propositions 1 and 2 indicate that the effects of an incorrect choice of
polynomial and lag order are complex. Frost’s conjecture cited in the analysis of
 B is borne out, but there may not be a monotonic decline in bias; until k 2 m*
 the possibility of bias is independent of the assumed polynomial order. Certainly
the analysis reveals that the choice of m and k cannot be done arbitrarily, and
that indifference to the selection of these parameters is likely to produce biased
estimators. Careful preliminary thought about the likely values of m* and k* is
therefore of some importance to any investigation.
    To complete this sub-section, we briefly review other proposals for selecting m*
and k*. Because PDL(m,, k,) and PDL(m,, k2) models are generally non-nested,
many of the methods advocated for the selection of one model as best out of a
range of models might be applied [these are surveyed in Amemiya (1980)]. The
only evidence of the utility of such an approach is to be found in Frost (1975),
where m and k are chosen in a simulation experiment by maximizing R2 [as
recommended by Schmidt and Waud (1973)J. There it is found that a substantial
upward bias in the lag length results, an outcome perhaps not unexpected given
the well-known propensity of x2 to augment a regression model according to
whether the t-statistic of the augmenting variable exceeds unity or not. Terbvirta
(1980a), noting that the expected residual variance of a model is the sum of two
terms-the      true variance and a quadratic form involving the bias induced by an
incorrect model-showed       that the bias in Frost’s experiments was very small once
a quadratic polynomial was selected, causing little difference between the ex-
pected residual variances of different models. Consequently, the design of the
experiments plays a large part in Frost’s conclusions. It may be that other criteria
Ch. 18: Dynamic Specification                                                 1059

which can be expressed in the form g(T) (1 - R2),where g( .) is a known function
[examples being Akaike (1972), Mallows (1973), Deaton (1972a) and Amemiya
(1980)] would be superior to R2 as a model selection device, and it would be of
interest to compute their theoretical performance for Frost’s study. Nevertheless,
both Sawa (1978) and Sawyer (1980) have produced analyses suggesting that none
of these criteria is likely to be entirely satisfactory [see also Geweke and Meese
(1981) for a related analysis].
   Harper (1977) proposed to choose m and k using the various model mis-specifi-
cation tests in Ramsey (1969). The rationale is that an incorrect specification
could lead to a disturbance with a non-zero mean. This contention is correct
whenever the lag length and polynomial degree is understated, but in other
circumstances need not be valid.
   A final technique for selecting m and k has been provided by Terasvirta (1980a,
1980b). This is based upon the risk of an estimator b of /I [where /3 would be w
for a PDL( *) like (61)]:


      r(8,rB)=E(8-B)‘Q(B-8),                                                 (73)

where Q is a positive definite matrix, frequently taken to be Q = Z or Q = Z ‘Z.
From Judge and Bock (Chapter 10 in this Handbook, eq. (3.7)) a PDL(m, k)
estimator of j3 exhibits lower risk than OLS when Q = Z if and only if:


                                                                            (744

or when Q = Z’Z if and only if [eq. (3.8)]:

      oi2j3’R’( R(Z’Z)-‘R’)-1R#3   5 m - k.                                 (74b)

   Replacing j3 and u,’ by their OLS estimators in (74), test statistics that the
conditions are satisfied can be constructed using a non-central F distribution. A
disadvantage of this rule is that it applies strictly to a comparison of any
particular PDL(m, k) estimator and OLS, but does not provide a way of
comparing different PDL estimators; ideally, a sequential approach analogous to
Anderson’s discussed above is needed. Another problem arises when the lag
length is overspecified. Terasvirta shows that the right-hand side of (74b) would
then be m - k - p2, where p2 is the degree of overspecification of the lag length.
As p2 is unknown, it is not entirely clear how to perform the test of even one
(m, k) combination against OLS. Terbvirta (1980b), utilizing Almon’s original
investment equation as a test example, discusses these difficulties, and more
details can be found therein.
1060                                                                  D. F. Hendry el al.

3.4.   Weaker restrictions on lag weights

The essence of PDL procedures is the imposition of linear deterministic con-
straints upon the parameters and there have been a number of suggestions for
widening the class or allowing some variation in the rigidity of the restrictions.
Thus, Hamlen and Hamlen (1978) assume that w = Ay, where A is a matrix of
cosine and sine terms, while a more general proposal was made by Corradi and
Gambetta (1974), Poirier (1975) and Corradi (1977) to allow the lag distribution
to be a spline function. Each of these methods is motivated by the “close
approximation” idea but are capable of being translated into a set of linear
restrictions upon w [see Poirier (1975) for an example from the spline lag]. The
spline lag proposal comes close to the PDL one as the idea is to have piecewise
polynomials and the restrictions are a combination of differencing ones and
others representing join points (or knots). In both cases, however, users should
present an F-statistic on the validity of the restrictions-arguments    from numeri-
cal analysis on the closeness of approximation of trigonometric functions and
“natural cubic splines” are scarcely convincing, however suggestive they might be.
Although the spline lag proposal does not yet seem to have had widespread
application, attention might be paid to the use of a variety of differencing
restrictions upon any one set of parameters. For example, if the location of the
mode was important and it was believed that this lay between four and eight lags,
low order differencing might be applied for lags up to four and after eight, and
very high order differencing restrictions between four and eight. Thus, one could
constrain the distribution in the regions where it matters least and to leave it
relatively free where it is likely to be changing shape most rapidly. There is no
compelling reason why an investigator must retain the same type of linear
restrictions throughout the entire region of the lag distribution.
   Shiller (1973, 1980) has made two proposals that involve stochastic differencing
restrictions-if    one wishes to view his approach in a classical rather than
Bayesian framework as was done by Taylor (1974)-and a good account of these
has been given by Maddala (1977). The first of Shiller’s methods has (1 - L)k~ =
E,, where E, - i.i.d.(O, u,‘). One might interpret this as implying that w, is random
across the lag distribution, where the mean i%,lies on a k th order polynomial and
the error w, - Ej is autocorrelated. Of course if one wanted to press this random
coefficients interpretation it would make more sense to have w, = W,+ E, as in
Maddala’s “Bayesian Almon” estimator (p. 385). In keeping with the randomness
idea it would be possible to allow the coefficients to be random across time as in
Ullah and Raj (1979), even though this latter assumption does not “break’
collinearity in the same way as Shiller’s estimator does, and seems of dubious
value unless one suspects some structural change. Shiller’s second suggestion is to
use (1 - L)k log w, = e,. Mouchart and Orsi (1976) also discuss alternative
parameterisations and associated prior distributions.
Ch. 18: Dynamic Specifculion                                                                        1061

   Shiller terms his estimators “smoothness priors” (SP) and a number of applica-
tions of the first estimator have appeared, including Gersovitz and Mackinnon
(1978) and Trivedi, Lee and Yeo (1979). Both of these exercises are related to
Pesando’s (1972) idea that distributed lag coefficients may vary seasonally and SP
estimators are suited to this context where there are a very large number of
parameters to be estimated. For a detailed analysis, see Hylleberg (1981).
   It is perhaps of interest to analyse the SP estimator in the same way as the PDL
estimator. Because of the differencing restrictions underlying the SP estimator, in
what follows it is convenient to refer to a correct choice of k as one involving a
“true” polynomial order. Furthermore, the assumption used previously of the
existence of a “true” model holds again; this time there being an added
dimension in the variance parameters .Z = diag{ a,* }. Under this set of conditions,
 the SP estimator of 8, &r is [Shiller (1973)]:9
     &r = (ZZ+          R’Z-‘R)-‘Z’y.                                                               (75)
From (75), & is a biased estimator of /3 but, with the standard assumption
lim ,,,T-‘Z’Z      > 0, ,hsp is a consistent estimator of /3 provided boLs is. Accord-
ingly, under-specification of the lag length will result in &. being inconsistent.
   To obtain some appreciation of the consequences of over-specification of the
lag length or mis-specification of the polynomial order, it is necessary to set up a
benchmark. Because fist, is biased, this can no longer be the true value 8, and for
the purpose of enabling a direct comparison with the PDL estimator it is
convenient to assess performance relative to the expected value of &, if R and 2
were known. This is only one way of effecting a comparison-for           example, the
impact upon risk used by Trivedi and Lee (1979) in their discussion of the ridge
estimator would be another-but        the present approach enables a sharper contrast
with the material in Section 3.3 above.
   So as to focus attention upon the parameters (m, k) only, 2 is taken to be
known in the propositions below, and it is only R that is mis-specified at 2. Then:
      E(&r)       = (Z’Z+      R/2-‘R)-‘E(Zj+                                                     (764
     E(&)         = (Z’Z-t     R’r’R)-‘E(Z~),                                                     (76b)
and E(&,)#    E(&,)   unless R’Z-‘R = RY’R.
  Propositions 3 and 4 then record the effects of particular incorrect choices of m
and k:
Proposition   3
Overstatement of the lag length with a correct polynomial degree need not induce
a difference in E(&)   and E(&).
   ‘Assuming that the covariance matrix of u in (67) is I. The more general assumption that it is u,‘I (to
bc used in a moment) would require B to be defined as the variance ratios 0, %I,’ in (78). Note that we
use B rather than w for results which are not specitic to PDLs, as with (75) for general R and X.
1062                                                                 D. F. Hendgj et al.

Proposition 4
Whenever the polynomial order is under or overstated with a correct lag length,
E(&)   is different from E(fisSP).
These propositions reveal that the SP estimator provides an interesting contrast to
the PDL estimator, being insensitive to over-specification of the lag length but not
to an over-specified polynomial order. This last result is a surprising one, and its
source seems to be that:




and the autocorrelation induced by an over-specified polynomial is ignored in the
construction of &,.
   As the analysis above demonstrates, the choice of 2 is an important one.
Shiller’s original treatment was a Bayesian one and X represented the variance of
a prior distribution. Because 2 depends upon the units of measurement of Z, his
second specification involving the logs of /3, has greater appeal as better prior
information is likely to be available concerning the percentage changes in p,. If a
Bayesian treatment of this model is desired, the choice of prior is clearly critical,
and the papers by Mouchart and Orsi (1976) and Trivedi and Lee (1981) contain
extensive examinations of this issue.
   A more classically oriented approach derives from the special case when
2 = $1. The SP estimator becomes:

       & = (Z’Z-t h-zrzq-‘Z’y,                                                    (77)

where h = u-‘IJ,~, and the formal similarity of (77) to the ridge regression
estimator hag prompted a number of authors-Hill   and Johnson (1975). Maddala
(1977) and Ullah and Raj (1979)-to utilize the principles from that literature to
select h (also see Section 3.5).
   Finally, mention should be made of Terbvirta (1980a, 1980b) who proposed to
select h and k by reference to .the risk for different combinations of these
parameters in a similar fashion to the methodology described in Section 3.3).
Fomby (1979) is another to select h according to the mean square error of
estimators.


3.5.   Alternative estimators

The treatment so far has effectively assumed that lack of bias was an appropriate
way to classify different estimators and that the unrestricted estimates would be
selected in preference to any restricted estimator if the restrictions were invalid.
Ch. 18: DynamicSpecification                                                     1063

Such a position is by no means universally accepted, and there have been
advocates for imposing restrictions, even if invalid, if this reduces a specified loss
function. For example, Amemiya and Morimune (1974) selected an optimal
polynomial order by minimizing a particular loss function and Trivedi and Pagan
(1979) used this loss function to compare various restricted estimators. Essentially
the argument for such procedures is that of “good forecasting” but there is
another tradition of biased estimation that aims at “breaking” the collinearity
between the lagged values of z, that may be the cause of badly determined
unrestricted estimates. As there have been a few applications of these ideas to the
estimation of distributed lag models, we propose to make some comments upon
the direction and utility of this research.
    We first focus on the question of whether restricted and other “improved”
estimators (e.g. Stein-James), do in fact yield substantial reductions in a loss
function relative to the unrestricted estimator (OLS). Yancey and Judge (1976,
p. 286) have ably summed up the importance of this question: “. . . there has been
no rush in econometrics to abandon maximum likelihood estimators.. . Possibly
one reason for the reluctance to change estimators may be uncertainty relative to
the magnitude of the risk gains from changing estimation rules.”
    Conventionally, the loss function has been taken as in (73) for an estimator B
of j? and Q positive definite. There has, however, been little agreement over Q.
Schmidt and Sickles (1976) set Q = Z ‘Z, while in Aigner and Judge (1977), Q = Z
and Z’Z were selected. Strawderman (1978) notes that: “The former case seems
appropriate when an error of any given magnitude is equally serious to all
coordinates, while the latter case corresponds to the usually fully invariant
situation” (p. 626) and shows that adaptive ridge estimators would be minimax if
 Q = (Z ‘Z )2. Probably Q = Z ‘Z is interesting if the goal is forecasting as Amemiya
and Morimune (1974) stress the relationship of this loss function to the condi-
 tional mean square prediction error. The relative risks of different estimators
when Q = Z or Z ‘Z feature inequalities involving the eigenvalues of
(Z/Z)-‘R’[R(Z’Z)-‘R’]-‘R(Z’Z)-‘.            It does not seem possible to say much
about these inequalities without specifying R and /3. When R = I,Aigner and
Judge have pointed out that it is the eigenvalues of (Z ‘Z ) which are required, and
Trivedi (1978) exploited this result to show that the risk reductions obtained with
the Stein-James estimator on the imposition of false restrictions decreased with
the degree of autocorrelation of {z, }. The poor performance of the Stein-James
estimator in the presence of collinear data has also been observed by Aigner and
Judge (1977).
    Ridge regression has already been mentioned in the context of the “smoothness
priors” estimator of Section 3.4 and at times has been put forth as a direct
estimator of (61). As the literature on ridge techniques is vast, our comments
pertain only to those features that have been of concern to investigators estimat-
ing distributed lag models.
1064                                                                    D. F. Hendy et al.


   Foremost amongst these has been the determination of the parameter h = (f/u:
in the estimator:

       iG= (Z’Z+   h.D)-‘Z’y,                                                       (78)
where D = R'R in the case of “smoothness priors”. In practice, h has frequently
been determined in an iterative way [see, for example, Maddala (1977) and
Spencer (1976)], based on sample information.
   The question that arises with such data-based priors is whether there are
implicit restrictions being placed upon the estimated coefficients. Some analysis of
these schemes seems necessary as Spencer found that his iterated Shiller estimator
converged to the Almon estimator, i.e. 6: = 0, and there have been other reports
that ridge estimators have a tendency to produce rectangular distributions. For
example, Maddala (1977) says: “... the Hoer1 and Kennard method and the
Lindley-Smith method are not too promising for distributed lag estimation”. As
shown in Hendry and Pagan (1980): the iterated Shiller estimator has a tendency to
converge to the Almon estimator. Whether it will terminate at the Almon estimator
or not depends upon the existence of a local minimum to the function of which
the iterative rules are the derivatives [denoted by S( w, u,‘)] since S( .) has a global
minimum at u,’ = 0. Although it is hard to decide on the likelihood of u,’ + 0 on
theoretical grounds, nevertheless, one might conjecture that as the data become
more collinear, the iterated Shiller estimator will converge to the Almon estima-
tor. This occurs because, with collinear data, large variations in iu result in only
small changes in the residual sum of squares and it is this term which must rise to
offset the reduction in S( .) caused by falling u,‘. It would also seem that, as the
lag length m increases, this tendency would be intensified. Some theoretical work
on this question is available in Trivedi, Lee and Yeo (1979).
   A similar situation exists if the Lindley-Smith         scheme which sets 13: =
(m + l)-‘2( iG,- %)2 is adopted, as the analysis can be repeated to show that the
global minimum occurs as 6: -+ 0, i.e. where Gj are equal y,. This indicates that
iterating with this scheme tends to produce rectangular lag distributions regardless
of the “true” lag distribution. Again, this is only a tendency, but it is disturbing
that the possibility exists that a lag distribution can be obtained that simply
reflects the way in which the “prior” was constructed and which may bear no
resemblance to whatever prior knowledge does exist. Thus care is needed in the
application of these estimators and more analytical work is necessary before they
become widely used.
   The above prob!ems apply only to those estimators that choose u,’ in some
data-based way and not when u,’ is selected on a priori grounds. Even then, one
must have some misgivings about shrinkage estimators that are supposed to be
“robust” and to produce “reasonable” answers in any situation, irrespective of
the true model and however badly specified the approximation. This is a major
Ch. 18: D_ynamic Specification                                                  1065


problem in distributed lags where m is unknown, as few diagnostic tests have yet
been developed for the detection of specification errors for “shrinkage” estima-
tors and, until tests are better developed, one must be sceptical of their general
application. There appear to have been a large number of estimators proposed
within the ridge class-see Vinod (1978)-but     the amount of work done on their
implications and range of applications seems quite small. The “classical” estima-
tors discussed in preceding sections have been subject to intensive analysis and we
would be loathe to discard them for fashionable estimators derivative from other
fields.


3.6.    Reformulations to facilitate model selection

The many difficulties noted above for choosing m* and k* even when it is known
that m” = 0 and m* is finite are in practice exacerbated by the failure of { fi, } to
be white noise and the dubiety of asserting that z, is strongly exogenous for w;
yet the joint failure of these entails that Fi, will be inconsistent and that, for
example, DW statistics have an incorrect significance level (although LM tests for
residual autocorrelation remain valid). Moreover, as shown in Section 2.6, para-
graph (g), “correcting” for residual autocorrelation by (say) Cochrane-Orcutt or
other autoregressive processes involves untested common factor assumptions, the
invalidity of which would throw into question the very assumption that m* is
finite (see Section 2.4).
   When y and z are inherently positive, and the static equilibrium postulate is
y = hz, then In y = In h +ln z is an admissible transform and suggests an error
correction rather than a distributed lag approach since the latter is a “special
case” of the former in a unit elasticity world [see Section 2.6, paragraph (h)].
Moreover, the error process need no longer be truncated to ensure y,, z, > 0 and
even for h = 1, additive “modifiers” (i.e. additional variables) do not produce
logical inconsistencies [which they would in (61) unless restricted to vanish in
equilibrium]. Such considerations become increasingly important in formulations
where the { w, } depend on economic variables [as in Tinsley (1967) and Trivedi
(1970b)]: these models pose no insurmountable estimation problems, but raise
awkward selection issues when so many features have to be jointly chosen from
the data.
   Finally, as noted in Section 3.2 above, even within the PDL class reformu-
lations of the polynomials can greatly economise on parameters; the suggestion in
Sargan (1980b) of using ‘k,(j) = (m + 1 - j)’ so that:
1066                                                                D. F. Hendry et al.

can reduce the required number of { y,* } well below { y, } (or conversely) depend-
ing on the lag shape. For example:

       wj = (1 -o.lj)*,       j=o ,..‘, 9,                                       (80)

only involves one y* (i.e. y;) but three y ‘s. Short distributed lags in general
dynamic equations often can be parameterised along these lines [see, for example,
Hendry and Ungern-Stemberg (1981)].


4.     Infinite distributed lags


4.1.    Rational distributed lags

Almost all individual estimated equations in macro-econometric systems have
been members of the general class of Autoregressive-Moving Average Models
with “Explanatory” variables, denoted by ARMAX( e) and written as:


                                                                                 (81)
                    J=l

where:




and there are no polynomial factors common to all the ‘y/(L). Then (81) is said to
be ARMAX (m,, m1 ,..., m,, m,,, ) [generalising the AD( .) notation with the last
argument showing the order of the moving average error process]. The {z,,} in
(81) are not restricted to be “exogenous” in the sense defined in Section 2, and
could be endogenous, weakly or strongly exogenous or lagged values of variables
endogenous elsewhere in the systems, and might be linear or nonlinear transfor-
mations of the original (raw) data series. However, it is assumed that the
parameters of (81) are identifiable and constant over any relevant time period.
   The formulation in (81) can be expressed equivalently as:


                                                                                 (83)


where all common factors have been cancelled in the ratios of polynomials. An
Ch. 18: Dynamic Specification                                                       1067

important special case of (83) is where $(L) = p(L) [i.e. (Y,,(L) = (Y,+i( L) in (81)
which we call the Rational Distributed Lag (RDL)]:

     yt=    f:   yAL)zi,+e,=    t     wi(L)zir+e,,                                  (84)
           ,=I   4(L)           1=1


and like the AD( .) class, RDL is deJned here to have white-noise disturbances
relative to its information set. As discussed in Section 3 above, (84) generalises
(59) to infinite lag responses. Thus, ARMAX( .) is RDL with ARMA( *) errors or
AD(e) with MA( .) errors, and if any denominator polynomial is of non-zero
order, some of the derived lag distributions are infinite. Relative to the class
defined by (81) the parameter spaces of AD( .) and RDL( .) models constitute a
set of measure zero in the general parameter space. In practical terms, however,
all of the models in this chapter constitute more or less crude first approximations
to complicated underlying economic processes, and for high order lag polynomi-
als, provide rather similar data descriptions. Indeed, if all of the roots of the
6,(L) (i=l,...,   n), p(L) and e(L) polynomials in (83) lie outside the unit circle,
by expanding the inverses of these polynomials as power series, a wide range of
alternative approximations can be generated (extending the analysis in Section 2.3
above). But selecting equations purely on the basis of “goodness of approxima-
tion” is of little comfort if the resulting model does not correspond to either a
behavioural or a structural relationship, and as stressed below derived parameters
(such as mean lags, long-run outcomes, etc.) can differ greatly between “similar”
approximations.
   Consequently, the choice of model class relevant to empirical research does not
seem to us to be an issue of principle, but a matter of whether: (a) the
formulation is coherent with available theory and/or prior information concern-
ing structural/behavioural    relationships; (b) the parameterisation is parsimonious
with easily understood properties; and (c) the equation is easily manipulated,
estimated (when its form is known) and selected (when the exact orders of all the
lag polynomials, relevant regressors, etc. are not known a priori). These criteria
may conflict since simple, easily estimated equations may not provide the most
parsimonious representations or may be non-structural, etc. Moreover, if the
unknown data generation process takes one form (e.g. an error correction
AD(l, 1)) but an encompassing model is investigated (say, ARMAX(1, 1,1)) then
parsimony cannot be claimed even if a “minimal representation” of the dynamics
is selected. For example, (43) becomes:

     y,=    @1+O-P3-P1)L)                    er      (Ylo+YIAz         +       e1
                                    zt+l_=                         (       ___
                                                                           l-&L     (85)
                    1-W                                l-   6,,L

which necessitates four rather than two parameters in the absence of knowledge
1068                                                                 D. F. Hendty et al.


that a,, = p1 and yla + yll = 1 - 6,,, the imposition of which restrictions depends
on the relevant behavioural theory. Conversely, an inadequate dynamic-stochas-
tic representation entails inconsistency of parameter estimates and a loss of
structural invariance, so both data coherency and theory validity are necessary,
and such considerations must take precedence over arguments concerning ap-
proximation accuracy, generality of class, etc.
   An important consequence for econometric analysis (as against data descrip-
tion) is that closely similar dynamic model specifications can entail rather
different behavioural implications. To isolate some of the differences, consider the
three simplest cases of partial adjustment (PA), error correction (ECM) and RDL,
with one strongly exogenous variable { zt}, each model defined to have white
noise disturbances relative to its information set:

       Ax = Y(&    - A-d+u, (PA),                                                 (86)
       Ay, = adz, + Y(Pz~_~
                          - _~,_l)+u, @CM),                                       (87)
       Y,=(~-(i-y)~)~*yp~,+e,         (RDL).                                      (88)

The three models have the same non-stochastic,         static equilibrium   solution,
namely:

       y=Pz=y            (say),                                                   (89)

and so could be interpreted as alternative implementations    of a common theory.
Expressed in ECM form, however, (86) and (88) are:




where yI = y,* + e,. Thus, both (86) and (88) constrain the response to changes in
y’ and to past disequilibria to be the same, a strong specification which may well
be at variance with observed behaviour [compare the arguments for the “optimal
partial adjustment” model in Friedman (1976)]. Also, the disequilibria in the
PA/ECM models are measured differently from those of the RDL in that the
latter are relative to yzl rather than y,_t. Accordingly, an RDL formulation is
appropriate to behaviour wherein agents ignore the impact of past disturbances
on the measured data, concentrating instead upon the “permanent” component
y,T, so that disturbances in any period are not transmitted into future behaviour
unlike in PA/ECM models.
   Which formulation of the impact on plans of past disturbances is most
appropriate to any particular situation must be an empirical matter, although in
general the truth probably lies at neither extreme since adjustments to pure
               SpeciJcution
Ch. 18: D_vnumrc                                                                  1069


shocks are likely to differ from responses to past plans; and equation disturbances
are anyway composites of measurement errors and all m&-specifications as well as
shocks. Since the RDL form in (88) generalises easily to:

       y,=(l-(l-y)L)-‘(~Az,+~~z,~~)+e,,                                          (92)

which still has (89) as its static solution but corresponds to:

       Ay,* = (YAz,+ y( pzI_r - y;*_,)   (with cr unrestricted),                 (93)

the real distinction between AD( .) and RDL lies in their respective stochastic
specifications. Yet investigators alter error assumptions for convenience without
always acknowledging the consequential changes entailed in behauioural assump-
tions.
   With the conventional practice of “allowing for autocorrelated residuals”,
distinctions between model types become hopelessly blurred since disturbances in
ARMAX( .) models are transmitted k periods into the future if +( L)/p( L) is of
degree k in L (and hence k is infinite if p(L) is not of degree zero).
   The literature on ARMAX models and all their special cases is vast and it is
quite beyond the scope of this chapter to even reference the main relevant papers,
let alone adequately survey the results [see, among many others, Anderson (1980)
Aigner (1971) Nicholls et al. (1975), Harvey and Phillips (1977) Osborn (1976)
Palm and Zellner (1980) Wallis (1977) Zellner (1979), Harvey (1981, Section 7.3)
and Davidson (1981) and the references therein]. When all z,~ are strongly
exogenous in (83) separate estimation of n( .)/a,( .) and $( .)/p( .) is possible [see
Pesaran (1981) who also derives several LM-based residual diagnostic tests].
However, this last result is not valid if any of the z, are Granger caused by y in the
model information set, nor will conventionally estimated standard errors provide
a useful basis for model selection until the residuals are white noise. The general
issue of stochastic specification is considered in Section 5 below.


4.2.    General error correction mechanisms

There is a close relationship between error correction formulations and
“servomechanism” control rules [see Phillips (1954, 1957)]. Hendry and Ungern-
Sternberg (1981) interpret (Y and y in (87) as parameters of “derivative” and
“proportional” feedback controls, introducing the additional interpretation of
stock variables in flow equations as “integral controls”. Also, Nickel1 (1980)
derives the ECM as the optimal decision rule for an infinite horizon quadratic
optimization problem when the “exogenous” variables are neither static nor
random walk processes and Salmon (1979) demonstrates that state-variable
1070                                                                   D. F. Hendty et ui.

feedback rules can be reparameterised in servomechanism (and hence, if ap-
propriate, in ECM) form. Thus, the ECM specification is compatible with
“forward looking” as well as “servomechanistic” behaviour, and since many
static-equilibrium economic theories yield proportionality or homogeneity results
(or are transformable thereto), this model form has a potentially large range of
applications.
   Suppose a given static theory to entail (in logs) that:

       y = A, + hlZ, + (1- h,)z,        + h*Z3,                                     (94)

and no theory-based dynamic speficiation is available. Then the following model
at least ensures consistency with (94) in static equilibrium:



                   r=O                   1=0                   i=O



             + CP,,Ay,-,+Yl(~-zl),-k,+Y2(Z1-Z?)r-k,+Y?Z3,-k,+e,.
               r=l
                                                                                    (95)

Such a formulation has a number of useful features. Firstly, the proportionality
restriction is easily tested by adding _Y_~~as a separate regressor, and non-rejec-
tion entails that (94) is the static solution of (95) for y1 # 0. Generally, low values
of the m, suffice to make e, white noise and the resulting short distributed lags
usually can be adequately represented by one or two Almon polynomial func-
tions, so that the final parameterisation is relatively parsimonious [see, for
example, Hendry (1980)]. Also, the ki are often unity (or four for quarterly-sea-
sonally unadjusted-data);       the parameterisation is frequently fairly orthogonal
(certainly more so than the levels of variables); and despite the “common” lagged
dependent variable coefficient [i.e. (1-t yl)] the formulation allows for very
different lag distributions of y with respect to each z,. Moreover, using Ay, as the
dependent variable helps circumvent the most basic “spurious” regressions prob-
lem without losing long-run information from using differenced data only [com-
pare, for example, Pierce (1977)]. Also, using AZ,,_, as regressors shows that
“levels representations” (of y, on z,,_,) will have negative coefficients at some lag
lengths but this does not preclude all the solved distributed lag weights from being
positiue. Furthermore, if (95) is a good data description when (94) is a useful
equilibrium assertion, then omitting the feedback variables (y - z~),-~, and
(z1- Z*)r+ need not produce detectable residual autocorrelation, so that a
model in differenced data alone might seem acceptable on a “white-noise residual”
criterion although it violates homogeneity [see, for example, Davidson et al.
Ch. 18: Dynamic Specification                                                     1071

(1978) and as a possible example, Silver and Wallace (1980)]. Finally, in practice,
 ECMs have successfully reconciled disparate empirical evidence in many areas, as
discussed in Section 2.6, paragraph (h).
    On a steady-state growth path, the solution of (95) entails that h,, in (94)
 depends on the growth rates of the zi, a feature which has been criticised by
 Currie (1981). This issue is closely related to the existence of short-run (apparent)
 trade-offs (since sequences of above or below average values of Ati’s will lower or
 raise the ratios of y to the zi’s in levels), and hence to the “Lucas critique” of
 (1976) concerning the non-invariance of certain econometric equations to changes
 in policy rules. Also, Salmon and Wallis (1982) discuss the need for the input
 variables over the estimation period to “stimulate” responses relevant to later
 behaviour if structurality is to be retained when policy alters the time profile of
 some z,,‘s as well as emphasising the need to correctly allocate dynamic responses
 to expectation formation and behavioural responses. On both issues, again see
 Haavelmo (1944).
    Constant-parameter linear models are only locally useful and adaptive processes
 in which the /3,; (say) depend on other functions (e.g. higher order differences) of
 the data merit consideration, so that “trade-offs” in effect disappear if they entail
 exploiting information which actually ceases to be neglected when it becomes
 relevant. Sometimes, such models can be reparameterised as linear in parameters
with non-linear variables acting as modifiers when they are non-constant. Also,
 note that the restriction of ECMs to cases in which y has a unit elasticity response
to one variable (or a combination of variables) is not essential since “logit”
feedbacks with variable elasticities which eventually converge to unity are easily
introduced [see, for example, Hendry and Richard (1983)]; other recent discus-
sions are Salmon (1982), Kloek (1982) and Patterson and Ryding (1982).
    We have not discussed partial adjustment models extensively since there are
already excellent textbook treatments, but it is interesting that ECM is equivalent
to partial adjustment of (y - z) to AZ in (87) (not of y to z unless (Y= y/3). Thus,
on the one hand, care is required in formulating to which variable the PA
principle is applied, and on the other hand the equivalence reveals that the ECM
in (87) is most heavily dampening of discrepancies from equilibrium due to
once-for-all impulses in z, (so AZ, goes . . . ,O, 6, - 6,0,. . .), than of permanent
changes in the level of z,, and least for changes in the growth rate of z1 (although
integral corrections and higher order derivative responses help mitigate the last
two). In the case /3 = 1, a Z y in (87) if the data generation process is ECM but
this is approximated by a PA model, the impact effect of z on y is generally
underestimated although the derived mean lag need not be overestimated since
the coefficient of y,_i can be downward biased. Specifically, rewriting (87) (for
/3 = 1) as:

     Y,=Y~,+(~-Y)Az,+(~-Y)Y,-,+u,,                                               (96)
1072                                                                      D. E Hendty et ul.

when z, is highly autoregressive, the impact effect will be estimated for PA at
around y (rather than a) and the feedback coefficient at around (1- y), whereas if
Az, is sufficiently negatively correlated with y,_ 1, the mean lag will be underesti-
mated. This issue conveniently leads to the general topic of derived statistics in
AD( .) models.


4.3.   Derived statistics

Given the general equation (81), there are many derived statistics of interest
including long-run responses, roots of the lag polynomials, summary statistics for
the solved lag distributions, etc. and approximate or asymptotic standard errors
of these can be calculated in many cases (subject to various regularity conditions).
The general problem is given 8 -p.N(8, V) for a sufficiently large sample size T,
to computef(e);l;rN(        f(0), Jz) where, to first order, Jz = JVJ’andJ=    af(*)/ae’
[which, if necessary, can be computed numerically as in Sargan (198Oc)J. Of
course, normality could be a poor approximation when f( 0) corresponds to (say),
a latent root or the mean lag [see, for example, Griliches (1967) who discusses
asymmetrical confidence intervals], but in the absence of better approximations it
seems more useful to quote the relevant values of f(e) and a than provide no
summaries at all. However, the mean lag can be a misleading statistic for lag
distributions that are highly asymmetrical and is meaningless if the derived lag
weights are not all of the same sign. For many distributions, it could be more
useful to quote some of the fractiles rather than the first two moments (e.g. the
median lag and the time taken for nine-tenths of the response to be completed):
as an illustration, when p = 1 in (87), (Y= 0.5 and y = 0.05 yields a mean lag of 10
periods yet has a median lag of one period and 70% of the adjustment has taken
place by the mean lag (but 90% adjustment takes 31 periods!). Changing y to 0.1
halves the mean lag but does not alter the median lag or the percentage response
at the mean lag, while reducing the number of periods at which 90% response is
reached to 15. For skew distributions there seems little substitute to presenting
several fractiles (or some measure of the skewness).
   At first sight it may seem surprising that derived estimates of long-run
responses might have large standard errors given that the typical spectral shape of
economic variables has much of the power near the origin (i.e. in low frequency
components)-see       Granger (1966). There is no paradox here, however, since
highly autoregressive series also have primarily low frequency components yet
may provide little long-run information about relations between variables. Alter-
natively expressed, the long-run of (81) for n = 1 is y = [a,(l)/a,(l)Jz  = Hz, and
if a,(L) has a root close to unity, estimates of H can fluctuate wildly for
seemingly small changes in { &, }. Thus, valid theoretical information about H
Ch. 18: D_vnumic Specifcatmn                                                     1073


can be of immense value in empirical analysis and, for example, if H = 1,
switching from unrestricted estimation of (84) to (87) can substantially reduce
parameter standard errors (and hence forecast error variances). Conversely, for
highly autoregressive series much of the sample variability may be due to the
dynamics and until this is partialled-out, a misleading picture of the economic
inter-relationships may emerge (not just from “spurious” regressions, but also the
converse of attenuating important dependencies). For econometric research, there
seems little alternative to careful specification of the dynamics-and hence of the
“error term” as discussed in Section 5. Note that reparameterisations of the
original formulation (81) can allow direct estimation of the long-run response
and/or mean lag, etc. as in Bewley (1979a).



5.    Stochastic specification

If hazardous inference is to be avoided, it is crucial that the stochastic error
generation processes are correctly specified. There is no a priori procedure
guaranteeing this: the correct specification can only be decided ex post by using
appropriate tests. As noted above, the simple rational lag model:


      Y,   =P(L)-‘4Lh                                                            (97)

where y, and z, are scalar endogenous/exogenous   variables [as in Dhrymes, Klein
and Steiglitz (1970) or Dhrymes (1971)] has the alternative AD(e) form:




If it is assumed in either case that there is an additive white-noise error, then (98)
can be estimated by OLS or using instrumental variables non-iteratively, whereas
(97) requires a non-linear iterative procedure. If the DGP is (98) then the
estimation of (97) will produce inconsistent estimates and/or standard errors and
vice versa.
   When the z,, in (81) include both endogenous and exogenous variables, it is
convenient to ignore the distinction between the two sets of variables and write x,~
for the i th variable, specifying the most general ARMA structure in the form of
(83) as:

       i    Y,(L)          G(L)
       ,=oF,oX”=p(L!e’.                                                          (99)
1074                                                                    D. F. Hendty et 01.


Alternatively, defining 6: = nj + ,a,, (81) can be expressed as:


       C&)Y,mNL)
        i
                               x,t =   (
                                       I18j(L))G(L)et.
                                           i
                                                                                   (100)

   There is considerable difficulty in testing for the maximal lags in the y,(L),
6,(L), G(L) and p(L). The simplest possibility is to set all the lags at the largest
feasible values, and then to use a sequence of Wald tests to consider whether the
maximal lags can be reduced. Even so, the tests required are not simply nested
and if maximum lags up to, say, four are specified, then eight parameters per
variable are to be estimated which can only be done if the sample size is large. A
particular problem with the formulation in (100) is that each xi! has applied to it a
set of lag polynomial operators which give a large total lag, so effectively reducing
the available sample size. On the other hand, if (99) is used, then the latent roots
of the 6, (L) must be kept away from the unit circle since truncation of the power
series corresponding to ( CSi( L )) - ’ will give very poor approximations if a root is
near the unit circle. This problem only arises in estimating some parameter sets so
that (99) may give sensible results in some cases, but it suggests that simpler
models with fewer adjustable parameters (and less likelihood of such difficulties)
may be preferred. One possibility is to assume 8, (L) = 6( L)V,:

       CP(L)Y,UJX,,          = WML)e,.                                             001)

   Note that the maximum lags on the x,, variables have been considerably
reduced when written in this form, and if the same degree y,(L) is considered as
before the number of parameters in the model has been roughly halved. Of
course, it is not possible to identify the parameters 6(L) and $(L) separately, so
a model of this form can be written:

       CY,v+,,     =   v,,                                                         tw
       ptL)v, = +*tL)e,,                                                           (103)

with the gloss that (102) is a structural equation (which may have the advantages
of simplifying the interpretation of the structural dynamics and easing the
imposition of restrictions implied by price homogeneity of the economic variables,
say, as well as any identifying restrictions) whereas (103) is the ARMA process
generating the errors on the structural equation.
   Further alternative simplifications are: (a) p(L) = 1; or (b) +*(L) = 1; (a) has
the advantage that the equation can be estimated by standard computer pro-
grams. If the maximum feasible lag is introduced in the y,(L) and c$*(L), then
Ch. 18: Dynamic Specificorion                                                     1075


Wald tests can be used to decide whether these lags can be reduced. Two
problems have been found to arise using this methodology. One is that if the
degrees of all the y,(L), +*(L) are over-stated, then the equation is badly
identified and iterative estimation procedures converge very slowly. Conversely,
by setting the maximal lags too low there is the problem that there is a tendency
for +*(L) to have latent roots biased toward the unit circle [and indeed a
non-zero probability in finite samples that a latent root will be found on the unit
circle see Kang (1973) and Sargan and Bhargava (1983)]. This may be avoided by
sequentially testing (starting with the smallest expected values of the maximum
lag) using Box-Pierce type portmanteau autocorrelation statistics or Lagrange
Multiplier tests, but such a strategy involves re-estimation if lags are set initially
at too low levels.
   Assumption (b), that G*(L) = 1, avoids some of these difficulties, since setting
the degree of p(L) too large does not lead to lack of identification, and although
it may lead to multicollinearity, the asymptotic t-ratios and asymptotic error
variance matrices of the resulting estimators still give valid tests. A suggested
technique (the COMFAC procedure) for setting provisional lags for the y,(L) is
to write (b) as [see Sargan (198Oc)J:




Then for this case or with the special form G*(L) = 1, the equation is estimated
with no restrictions on Gi(L), the maximum lags being determined by using the
usual t-ratio significance test, or are fixed by taking the maximum lags which are
feasible. Different lags on different variables are allowed, based upon significance
tests or upon a priori considerations. Then a set of Wald tests can be used to test
whether the #,(L) satisfy equations of the form:

     VW) = P(L)Y;(L),           i=O ,-.-, n.                                    ow
    We also write #(L) = p(L)y(L),        where without the suffixes 4(L) and y(L)
 denote vectors of lag polynomials (see Section 2.6, paragraph (g), for an exposi-
 tion).
    Equation (105) states that all the Jl;( L) contain a scalar factor polynomial p(L)
 of degree r, and a set of constraints on the coefficients qi, can be calculated which
 ensure that the common factor exists for each r. If the maximum lag on J/i(L) is
f,, then the q,(L), i=O ,..., n, have n +c:,,f,        unknown coefficients, assuming
 that one of the zero order coefficients is standardised as one, p(L) has r unknown
coefficients, and the y,(L) have c:,,,(h - r)+ n unknown coefficients. It follows
that there are implicitly nr constraints. For computing purposes, let m = n + 1 and
take summations over i = 1, . . . , m, renumbering {xi, } accordingly.
1076                                                                             D. F. Hendry et ul.

   The procedure used to define the constraints is an algorithm, which is equiva-
lent to the “single-division” algorithm used to compute the values of a set of
related determinants. The criterion which is a necessary and sufficient condition
(except in cases where pivots in the single division algorithm are zero, which occur
with probability zero in matrices derived from sample estimates) is that a certain
matrix has appropriate rank. The matrix is specified by first defining N = m(fr +
l)-c,“,t&,   where it is assumed that ft 2 fi 2,. . . , 2 f,. Then k is defined as the
smallest integer satisfying (m - 1)k r fr + m - r - N.
   The simplest case [case 1 of Sargan (198Oc)] is when N-C fi + m - r, or k > 0.
For a discussion of the case where k s 0, see Sargan (1980~).
   Wedefined,=f,-f,,i=l,...,        m, and then the matrix ‘k, of N rows, using the
notation I/J,to mean a row vector of the elements ( GIr,, #,t , . . , , G;,,), i = 1,. . . , m, is
given by:




                                                                                            (106)


   Here 0, is used to mean a row vector with s zeros. ‘k, can be divided vertically
into sub-matrices; each sub-matrix has (d, + 1) rows, and each row of the ith
sub-matrix contains a vector IJ, and d, zeros. The number of zeros on the left of
the row increases in each successive row by one. q0 has fi + 1 columns. Define
also:




               ......

which has m rows and fi + 1 columns, and then:

                                       I


                ..............
              \Omk     ‘k,             /


where 0P4 is a zero matrix of order p x q.
Ch. 18: Dynamic Specification                                                     1077

   The condition that is required is that !Pcikjshould be of rank ft + k + 1 - r. In
fact there are too many constraints here if we consider equating determinants of
degree (f, + k + 2 - r) to zero, but it can be shown that it is sufficient to consider
the matrix obtained from !Pckj by taking only its first (f, + k + m - r) rows, and
we then obtain (m - l)r constraints by taking a suitable set of (m - l)r determi-
nants which ensure that the reduced matrix is of rank ( fi + k + 1 - r). A suitable
sub-routine (COMFAC) has been written to compute the required determinants
given the vectors #,, i = 1,. . . , m. This can be attached to any single equation
estimation computer program to give the appropriate test statistics [see Sargan
(1980a) and Mizon and Hendry (1980)]. Let ? be the true value. If a value of r is
specified which is less than i-, then theoretically the asymptotic distribution of the
Wald test for the constraints for this value of r is no longer the usual x2
distribution, and in practice it has been found that in finite samples the statistic
takes much smaller values than would be expected if the regularity conditions
which lead to the usual x2 approximation were satisfied.
   Note that for different values of r we have a set of nested constraints on the
coefficients of the J/,(L). We need to choose the optimal r, and a sequence of
Wald test criteria have the advantage that they can be computed from a single set
of estimates of the unconstrained model. Following the pattern discussed towards
the end of Section 2.2, Wald test criteria can be computed for a set of increasing
values of r, and the corresponding differences w, - w(,_i) are used as a basis for
the choice of the appropriate r.
   Alternatively, asymptotically equivalent tests can be made by using likelihood
ratio tests, or tests of Durbin/Lagrange Multiplier type. Both methods have their
difficulties. The likelihood ratio test is upset by the existence of multiple maxima
of the likelihood function if r is specified to be lower than ? since then we can
write: p(L) = pt( L)p,(L), where pi(L) is a polynomial of rank r, containing any
r of the 7 roots of the polynomial p(L). Let:

       Y,(L) = P,WY(U
then
       rcI(L) = P,(L)Y,(L).
   This gives a valid factorisation of #(L) into a scalar factor of degree r, and a
set of function yi,( L) of degree f, + 7 - r. Note that there are as many ways of
specifying y,(L) and p,(L) as the number of ways of splitting p(L) up into two
real factors p,(L) and p,(L) of appropriate degrees. Thus if all these roots of
p(L) are real there are f!/((7 - r)!r!) different ways of stating an equation with
pt( L) and n(L) of the given form. From the discussion in Sargan (1975) it
follows that a maximum likelihood estimator of yl(L), pi(L) will find local
maxima corresponding to each of these alternative parameterisations with a high
probability for large T. If the estimated model is taken which corresponds to the
1078                                                                     D. 17 Hendty et al.

global    maximum, then minus the corresponding value of the log-likelihood
function is asymptotically distributed as half the maximum of a set of related x2
statistics. The differences of the log-likelihood functions which are used to
discriminate between alternative values of r then do not have the usual asymptotic
distributions. Although the directions of the biases can often be sorted out as in
Sargan and Mehta (1983), the magnitude of the bias is not easy to establish, and
this suggests that the Wald test is a better alternative. The use of the Durbin
three-part-division test discussed in Sargan and Mehta is also somewhat arbitrary
in the choice of the exact form of the test and as with the likelihood ratio test
involves a sequence of non-linear computer optimisations to decide between all
possible values of r.
   A similar type of test of the Lagrange multiplier form also can be used, but
suffers from the same disadvantages as the three-part-division test. It may be,
however, that there is an additional consideration when using the Wald test. If a
value of r is specified which is less than the true 7, it has been found in practice
that the Wald test for r against r = 0 will be biased downwards. Denote this
criterion by w, and the corresponding criterion for 7 against r = 0 by w,. This
latter criterion is asymptotically distributed as x2 of n? degrees of freedom. The
difference (w, - w,) is not distributed asymptotically as a x2 of degrees of
freedom n(F - r) (as would be expected if the conditions for the Wald criteria to
have the usual x2 asymptotic distribution were satisfied). Thus the use of a
sequence of Wald tests each obtained by taking differences of two successive
Wald criteria for r against r - 1 will lead to difference test criteria which are
biased. However, when the biases are allowed for, then if, for r < ? the Wald
criteria are below what would be expected for an asymptotic x2 of nr degrees of
freedom, and if for r = ? the Wald criterion is not significant considered as an
asymptotic x2, and for r = F + 1 it is significantly larger than its asymptotic x2
confidence limit, then this confirms F as the true value.
   The equation tested below was part of a three equation model for wage-price
inflation in the United Kingdom reported in Sargan (1980a). All the variables are
logarithms of the corresponding economic variables as follows: w, is the official
weekly wage rates index, p, is the consumption price deflator for the official
estimates of quarterly real consumption, a, is the corresponding official estimate
of average weekly earnings, S, is the moving average of the working days lost
through strikes in the three years up to and including the current quarter. The
equation also included a constant term, three quarterly seasonal dummies, and a
linear trend. The coefficients of these variables will not be reported in the
following tables. The sample ran from 1953 Ql to 1973 Q4. The basic form of
equation is illustrated by the OLS estimates:


         wt - WI-1 + Yl(W,-,   - Pt-1)+Y*(a,-,   - w,-l)+YJ,-*   = vt*              007)
Ch. 18: Dynumic Specijicatlon                                                        1079

   Money wage rates move in reaction to real wage rates, the ratio of earnings to
wage rates, and a “pushfulness” variable obtained from a strike variable.
   The Wald criteria are obtained by taking this as y’( L)x, = TJ,and considering
autoregressive equations of order up to r = 4. Thus, +‘( L)n, = E, was estimated by
OLS including up to fourth order lags in all the variables of (107). The Wald
criteria are of determinental type.
   In Table 5.1 the Wald criteria for r =1,2,3,4, are given in column 2 with the
appropriate degrees of freedom in column 3. In column 4 the successive dif-
ferences are given of the Wald criteria. Note that if it were not for the problems
raised above it would be appropriate to assume that all of these are asymptoti-
cally distributed as independent x2 of three degrees of freedom provided r 2 ?.
   The Wald criteria for r = 1, 2 and 3 are all biased downwards in the sense of
being smaller than would be expected if distributed as x2 of degrees of freedom 3,
6 and 9, respectively. On the other hand, the r = 4 Wald criterion is in line with
the assumption that it is distributed as x2 of degrees of freedom of 12. The
differences of the successive criteria given in column 4 of Table 5.1 have the
consequent pattern of biases that those for r =1,2,3, are all biased downwards
whereas that for r = 4 is above the 1% confidence limit for a x2 of 3 D.F.
However the pattern of the biases is clear, and confirms that the true value of r is
4. Some simulation evidence on the rejection frequencies of COMFAC tests in
simple models is presented in Mizon and Hendry (1980) together with a further
empirical application.
   Finally, while common factor models can closely approximate the fit of other
dynamic processes, derived moments can be very inaccurate. In the AD(l, 1) case,
for example, if the data generation process is as given in Section 2.6, paragraph
(h), but the postulated model is as given in Section 2.6, paragraph (g), the
common factor restriction is nearly satisfied if either pi = 1 or & is small
[specifically, if &(l - pi) = 01. Nevertheless, the long-run response and mean lag
in paragraph (g) are estimated as (&,O) rather than [l,(l - pi)/&], potentially
distorting both the magnitude and the timing of the impact of z on y. This arises
because paragraph (g) can be written in ECM form as:

      Ay,=P,Az,+(p,-I)(y,-,-plz,-,)+e,,                                             (108)


                                                 Table 5.1
                                                Wald criteria

                     r          Wald criteria      D.F.         Differences   D.F

                     1               0.00             3             0.00       3
                     2               0.84             6             0.84       3
                     3               2.14             9             1.30       3
                     4              14.53            12            12.39       3
1080                                                                D. F. Hendty et (II.


and hence the measure of disequilibrium is (y - /3i~)~_i rather than (y - z)~_~.
Correspondingly, (108) enforces a static solution equal to the impact effect, hence
the mean lag of zero. Since invalidly imposing common factor dynamics can
produce misleading results, it cannot be justified as an automatic “solution” to
residual autocorrelation even where the final residuals end up being “white
noise”.
   It is clear that theories which legitimately restricted the data analysis to one
model type would be of great value. Thus, even non-stochastic static equilibrium
results can be useful if they constrain the model and are not simply imposed on
the data.


6.     Dynamic specification in multi-equation models



6.1.    Identification with autoregressive errors

The problems that arise in multi-equation models are very similar to those
discussed in earlier sections: to introduce suitable lag structures which represent
correctly our a priori economic intuitions about the behaviour of the variables in
the long and the short period, but which are not limited by an over-simplistic
specification of the lags in the system nor made over-complex by the confusion of
the basic dynamics of the economy with the stochastic processes generating the
errors in the system.
   Consider this latter problem first. Suppose that in lag operator notation we
write the structural equations in the form:

       A(L)x,=B(L)y,+C(L)z,=u,,                     t =l,...,T,                 (10%

where A(L) = (B(L), C(L)) is a matrix of polynomials in the lag operator L,
with specified maximum lags on each variable, X, is a vector of observed variables,
made up of n endogenous variables yI, and m strongly exogenous variables z,, and
u, is the vector of errors on the structural equations, all in period t. B(L) is a
square matrix such that B0 (the zero lag coefficient matrix) is non-singular.
Suppose now that the u, are generated by an ARMA process of the form:



where R(L) and S(L) are square matrix lag polynomials of degree r and s
respectively, and R, = SO= Z,. Our general econometric methodology first re-
quires us to discuss identification for such models. We can find sufficient
conditions for identification by formulating the problem as follows. Eliminating
Ch. 18: Dynamrc   Specijication                                                  1081


u, between    equations (109) and (110) we obtain:

      R(L)A(L)x,=S(L)e,.                                                        (111)
Writing this in the form:



where



consider conditions which ensure that the factorisation is unique, for a given
‘k(L) with a given maximum lag on each variable. Clearly, if A(L) and R(L)
satisfy (113) then HA(L) and HR( L)H-’ satisfy:

      H!P(L)= (HR(L)H_‘)(HA(L)),

and if there are no prior restrictions on the covariance matrix of e,, then if we
write A*(L) = IZA( L), R*(L) = HR( L)H-‘,          S*(L) = HS( L)H- ‘, and e* =
He,, then the model consisting of equations (109) and (110) with stars on the lag
matrices is observationaly equivalent to (111). Conditions similar to those
discussed by Hsiao in Chapter 4 of this Handbook are necessary for identifica-
tion. Sufficient conditions for identification are: (a) that equation (112) is iden-
tified when Pa is of the form !P,, = (I: *a*), and the only constraints specify the
minimum lag on each variable. Sufficient conditions for this are those given by
Hannan (1970) discussed by Kohn (1979) and Hsiao in Chapter 4 of this
Handbook. (b) Conditions which ensure that there is a unique factorisation for
(113) subject to the same maximal lag conditions, and B, = I. (c) Standard
conditions for identification, which ensure that linear or non-linear constraints on
the coefficients of A(L) are only satisfied if H = I, discussed by Hsiao.
    However, he does not deal with conditions of type (b), and these will be
discussed briefly here. Necessary and sufficient conditions for identification are
given in Sargan (1978a), when only the maximum lags on the variables are
specified. The conditions depend on the presence or absence of latent roots of the
A(L) polynomial. A(L) has a latent root h, if for some non-zero vector h:

      /&4(A))       = 0’.                                                       (114)

   A necessary condition for there to be more than one solution is that (114) is
satisfied for some h and /I. (The article referred to above gives a slightly different
formulation which makes it easier to discuss cases where A(z) has an infinite
1082                                                                    D. E Hendty et al.

latent root.) This condition is also sufficient, provided a factorisation condition is
satisfied which can be taken to have a prior probability of unity.
   A necessary condition that the model is not locally identified is that A(t) and
R(z) have a latent root h in common, in the sense that for some non-zero vector
/I, (114) is satisfied, and for some non-zero vector k:

       R(h)k = 0.

   This is a sufficient condition that the Jacobian (first order derivative) conditions
for identification are not satisfied. But even if the Jacobian is not full rank, it does
not follow that the model is not locally identified. This is discussed in the above
article.
   The estimation of the model has two stages. The first is to decide on the various
lags on the different variables, and on the autoregressive and moving average
processes. For this suitable test procedures are required and will be discussed in
the next section.
   Given the specification of these maximum lags then parameter estimation can
proceed using maximum likelihood procedures, or procedures asymptotically
equivalent to these. For a complete model, if a numerical optimisation program
which does not require analytic derivatives of the likelihood function is used to
optimise the likelihood function, such as a conjugate gradient procedure or one
using numerical differentiation, it is no more difficult to fit a model of the form
(111) than a less restricted model of form (112), since all that is required as an
addition to a program for producing maximum likelihood estimates of (112) is a
sub-routine for computing the coefficients of S(L) as functions of the uncon-
strained elements of A(L) and R(L).
   It can be argued that since, in using ARMA models for the generation of the
errors in econometric models, we are merely making use of convenient approxi-
mations, there might be considerable advantages (at least in the stage of making
preliminary estimates of the model to provisionally settle its economic specifica-
tion) in using a model with a fairly high order autoregressive specification and a
zero order moving average specification. In practice the time to compute moving
average specifications can be large when the latent roots of the moving average
matrix polynomials tend to move towards the unit circle, and the convergence
properties of autoregressive specifications may be much better. Hendry (1976)
contains a discussion of estimators for S(L) = 0 which are asymptotically equiva-
lent to maximum likelihood estimators for models of this type but which may be
lower in computing requirements.
   For “incomplete” models it may be necessary to modify the model, before it is
feasible to estimate it. The simplest way of defining the modified model is to
retain both equations (109) and (llO), but now allow B(L) to be a rectangular
matrix. Thus, it is assumed that the errors on the incomplete model are generated
Ch. 18: Dynamic Specification                                                      1083

by an ARMA model, which involves only the errors on the set of equations to be
estimated. Note that starting from a complete set of equations whose errors are
generated by an ARMA model, by eliminating the errors of the equations whose
coefficients are not to be estimated, it is possible to obtain a higher order ARMA
process generating the errors on the equations to be estimated. Thus the current
formulation is of some generality. One method of estimating the incomplete
system is to use a set of instrumental variables. These can be chosen rather
arbitrarily initially, but as the specification is refined, a set can be chosen which is
efficient if the model is linear in the variables. Generalising to the case where the
A(L) coefficients depend in a general non-linear way on a set of p parameters
forming a vector 8, the estimators can be regarded as minimising a criterion
function of the form:

      det(&‘(EZ+)(Z+‘Z+)-‘(Z+‘E)),                                                (115)

where E is the matrix of white-noise errors or “innovations” in the ARMA
process, and &?is some preliminary consistent estimate of the variance matrix of
e,. Z+ is the matrix of instrumental variables, which may include lagged values of
the predetermined variables. If the A(L) coefficients considered as functions of 8
have continuous first order derivatives in some neighbourhood of the true value
s, the instrumental variables estimates will be as efficient as the corresponding
limited information maximum likelihood estimates if it is possible to express the
expectations of ( cYA(L)/hW,) x,, conditional on all lagged values of y,, as linear
functions of the z,: for all j, and for all i. This result follows from the discussion
of Hausman (1973, and in the case of a purely autoregressive specification is
most easily satisfied by using as instrumental variables the current values of z,,
and the lagged values of X, up to and including the r th order lag. When the
ARMA model contains a moving average process, it is difficult to produce
estimates of the conditional expectations from an incomplete model, but if the
latent roots of the moving average process are not too close to the unit circle there
may be a comparatively small loss of efficiency in using x,_~ up to some
maximum s*, which is such that the total number of instrumental variables is not
more than a fixed proportion (say 40%) of the sample size. With such a set of
instrumental variables an iterative minimisation of (115) is possible, by comput-
ing U, = A (L)x,:

      e,=S(L)_‘R(L)u,,                                                            (116)

recursively for given values of the parameters, starting from the values e, = e_ 1 =
ep2 =e_,...   =e_~,_,~ = 0. This procedure may not be optimal in a model with no
exogenous variables, where end corrections corresponding to u, being a stationary
time series might give better results, but in a model with an autoregressive side
1084                                                                 D. F. Hendy   et al.


there seems no simple alternative to the crude assumptions for e, listed above. The
recursive generation of e,, t 2 1, uses the equation (116) in the form:

       e,= [I-s(L)]e,+R(L)u,,                t=l   ‘...> T,

noting that Z - S(L) has a zero order coefficient matrix equal to zero. Recent
discussions of estimators for models with vector moving average error processes
include Osbom (1977), Anderson (1980), Reinsel (1979) and Palm and Zellner
(1980).


6.2.    Reduced form, jinal form and dynamic multipliers

From (109) it is of some interest to discuss the behaviour of y, in response to
changes in the z,, particularly when some of the z, may be regarded as govern-
ment controlled variables which can be changed independently so as to affect the
level of the y, variables. The standard reduced form of the model can be written:

       y, = - B,-‘B*(L)Ly,      - B,C( L)z, + l$+,,

where

       B(L)   = B0 + LB*(L),

and B*(L) has a degree one less than that of B(L). This equation is useful for
directly simulating the impact of a change in z,. Two types of dynamic multiplier
can be distinguished, (i) the impact multiplier, (ii) the cumulative multiplier. The
first considers the impact of a unit change in an element of z, in time period t on
all subsequent values of y,, the second considers the change in y,, s 2 t, if an
element of z, is changed by one unit for all r 2 t. Since the second multiplier is
obtained from the impact multiplier by summation for all r I s, only the impact
multiplier will be considered here. Suppose that we wish to consider the impact
multipliers for some subset of elements of z,, which we form into a vector z:, and
denote the corresponding rows of C(L) by C*(L). Then clearly if we denote the
change in z: by Dz:, the corresponding endogenous-variable changes Dy,, r 2 t,
will be obtained by solving the equation:

       B(L)Dy,=     -C*(L)Dz,*,          7=t,t+l,...,

where Dz: = 0, if r # t. If we write for the solution:

       Dy,=n(L)Dz:,
Ch. 18: D_vnamicSpecificutlon                                                      1085

then the coefficients II, give the impact multipliers in period r = t + s, of the
change in z: in period t.
   Formally, we may write:

     n(L)     = -(B(L))-‘C*(L),

but a more practical computing procedure is to solve sequentially the equations:

     B(L)II(L)=-C*(L),                          forIII,,s=O,l   ,....            (117)

In fact it is better to use the reduced form, and if we write:


     P,(L)=B,-‘B(L)=                  2
                                     i=O
                                           P,,L’,



     P,(L)    = B$*(L)              = ;j P,,L’,
                                      i=o

then the equations (117) are equivalent to:


       i 4(,-J&           = P2J 5
                                        j=O       ,...,   00,                    (118)
      r=l

where

     P,,=O,      ifi>k,              (j=l,2).

These can be solved for II, sequentially noting that in the jth equation the matrix
coefficient of II, is PI0= Z. Asymptotic standard errors for the II; can be
computed in the usual way, expressing them as functions of the B(L) and C(L),
and using implicit differentiation to obtain the first derivatives from (117) [see, for
example, Theil and Boot (1962), Goldberger et al. (1961), and Brissimis and Gill
(1978)].
  The final equations of Tinbergen [see Goldberger (1959)] are obtained by
multiplying equation (109) by adj B(L) where this is the adjoint matrix of B(L)
considered as a matrix polynomial. Since

     adjB( L).B(      L) = detB( L)-I,

we can then write:

     [detB(L)]      J:= -adjB(L).C(L)z,+adjB(L)u,.                               (119)
1086                                                                      D. F. Hen&v et al.

   A possible method of testing models which is particularly              appropriate for
comparison with ARIMA statistical time series models [used, for example, by
Zellner and Pa!m (1974) and Wallis (1977)] is to estimate a model of the form
(119) first neglecting the constraints that every endogenous variable has the same
scalar lag polynomial on the left-hand side of (119). Thus, unconstrained ARMA
explanations of each yit in terms of lagged z, are estimated by single equation
ARMA maximum likelihood estimation. Then tests are made to check that the
coefficients of the lag polynomials applied to the yjt, i = 1,. . . , n, are all the same.
There are severe difficulties in doing this successfully. First, if there are more than
two endogenous variables, and more than one lag on each endogenous variable in
(109) then det(B( L)) and adj B( L).C( L) are both of at least the fifth degree in
L, and in models which are at all realistically treated as complete econometric
models the degree must be much larger than this. This of course requires a large
sample before asymptotic theory can be a good approximation, since each
equation to be estimated will contain a large number of variables of various lags.
If the total number of lags on the variables in the final equation form (119) is
determined by significance tests then there is an obvious probability that the
subsequent tests will reject the constraints that all the yir are subject to the same
lag operator. Indeed, there is no reason why the unconstrained estimates of the
longer lagged coefficients should be significantly different from zero. The true
values of these coefficients can be expected to be s~nall if the model is stable since
the higher order coefficients contain the products of many latent roots all less
than one in modulus. Thus, it would be better to allow the maximum lag to be
determined by feasibility. Even then, the size of model may have to be small to
estimate unconstrainedly the set of equations of the final form. Finally, there are
many implicit restrictions on the coefficients of adj B( .) which it is difficult to put
in explicit form. Since unless the right-hand-side polynomials satisfy these im-
plicit constraints, the constraints that all the left-hand side polynomials are the
same is of little interest, it appears that starting from the unconstrained final
equation is not really an adequate way of testing the specification of realistic
econometric models. Moreover, parameter constancy in derived equations like
(119) relies on all the equations in (109) being structurally invariant.
   If the z, are regarded as generated by ARMA processes, so that:

       NL)z,    = F(L)e,,                                                           (120)
where e, is a white-noise series, then we can eliminate z, from (119) using (120) to
give:

       B(L)&=-C(L)D(L)_‘F(L)e,+u,
or
       (detD(L))B(L)y,=-C(L)(adjD(L))F(L)&,+(detD(L))u,.                            (121)
Ch. 18: Dynamic Spec@ation                                                       1087


   The error term on (121) contains a complicated moving average of the E,, and if
u, itself is generated by a general ARMA stochastic model then the stochastic
specification is even more complicated. Assuming for simplicity that u, = S( L)e,,
where e, is white noise, there is a corresponding final form:


       (detD(L))(detB(L))y,=           -(adjB(L))C(L)(adjD(L))F(L)e,

                                       + (adj B( L))(det D( L))S(      L)e,.   (122)


   Equation (122) gives separate ARMA-type representation for each element of
y,. Note that the autoregressive polynomial, (det D( L))(det B(L)), will generally
be the same for each yir (the exception occurs if a recursive structure can be set up
by paritioning y, into sub-sections). For a given y,,, the right-hand side of (122)
also can be represented as a single moving average process, the maximum lag of
which is the same as the maximum lag in the terms of the right-hand side of (122).
Note, however, that this new representation neglects the detailed correlation
structure of the different components of the right-hand side of (122) and so loses
a great deal of information which is contained in the specification (122). Thus,
using the individual ARMA equations to forecast y,, would give less accurate
forecasts than using the detailed model (122), and the use of original model (109)
to forecast should also give more accurate forecasts than (122). With a correctly
specified system, this should be true for an estimated model. And in estimating
the model it will be found that greater efficiency in the estimation of the
coefficients of (122) is obtained by first estimating (109) and (120) taking account
of any appropriate constraints and then substituting the resulting estimates of
A(L), S(L), D(L) and F(L) into equation (122) to give ARMA equations for the
individual y,,. For an example of some relevant applied work see Prothero and
Wallis (1976), and for a different emphasis, Zellner (1979). Also, Trivedi (1975)
compares ARMA with econometric models for inventories.
   The suggested alternative for testing the specification is that the original model
or its reduced from is estimated using the maximal feasible lags. Then constraints
reducing the order of the lags in each reduced form equation are tested using
asymptotic t- or F-ratio tests (Wald test) or by using likelihood ratio tests [see
Sargan (1978b), and for an example, Hendry and Anderson (1977)].



6.3.    Unconstrained autoregressive     modelling

Alternatively, one may consider, following Sargent and Sims (1977), the possibil-
ity of an autoregressive representation for the economy in which the distinction
between endogenous and exogenous variables is ignored. In an effort to estimate
1088                                                                  D. F. Hendty    et al.


the dynamics of the system with no a priori constraints, the equations are written
in the form:


       yr = MY,-,   + 5,                                                             (123)

where P(L) is an unconstrained matrix lag polynomial of maximum lag q and e,
is a white-noise vector. This can be regarded as a linear approximation to an
autoregressive representation of the stochastic model generating y, if the yr are
stationary time series [see Hannan (1970)] with the e, being approximations to the
innovations in they,. If they, are non-stationary but Ayt are stationary, then a set
of equations of the form (123) may still be a good approximation but unit latent
roots should occur in the latent roots equation for the system. However, there
may be problems if we consider (123) as an approximation to an ARMA system
of the form:


       S(L)-IB(L =e,,
if S(L) has roots close to the unit circle. In particular, if the true system is of
ARMA form in a set of endogenous variables y;“, and the equations are
misspecified by taking a sub-set of variables y, which includes the first differences
of the corresponding variables y:, then corresponding differences of white noise
will occur in the errors of the ARMA model for the y,. Thus, over-differencing the
variables will invalidate the Wold autoregressive representation and the corre-
sponding finite autoregressive representation will not hold and Sims has tended to
work with levels variables in consequence. With the length of sample available for
estimating the equations by multiple regression, it is necessary to work with a
relatively small model and to restrict q, rather drastically. Sargent and Sims
(1977) also considered models which contain index variables, which in effect
introduce non-linear restrictions in the coefficients P(L) by requiring each y,, to
depend upon past values of k index variables k < n, where n is the number of
variables y,. It is to be expected that when the number of regression equations is
allowed to increase to be of the same order as T, the estimated coefficients
become sensitive to changes in the variables. Sims interprets his results by
considering the effect of an innovation in a particular variable on later values of
the other variables, but the interpretation is complicated by the correlation
between the contemporaneous innovations on the different variables [see, for
example, Sims (1980)]. Additionally, marginalising with respect to other elements
of y,* than those retained in y, will produce an ARMA form as in (124) unless
none of the excluded variates Granger causes the yI, and as in all derived
representations, strong assumptions are necessary to ensure parameter constancy.
Ch. 18: Dynamrc      Specification                                              1089


 6.4.    Alternative forms of disequilibrium model

The simplest model of disequilibrium is that of Samuelson-Tobin in which the
tendency of economic variables to their equilibrium values is modelled by
introducing an equilibrium static equation for each endogenous variable:

        Y,* = Y,(d

where this is a vector of n endogenous variables’ equilibrium values expressed
as functions of a set of m exogenous variables. Writing A y, = y, - y,_, the
Samuelson-Tobin model is [see, for example, Samuelson (1947)]:

        AY,==(Y:-Y,-l)+uv                                                      (125)
where D is an arbitrary square matrix. The simplest special case is where D is a
positive diagonal matrix, with every diagonal element satisfying:

        0 cd;, ~1.

   This type of model can be regarded as derived from an optimal control
 problem where the function whose expected value is to be minimised is:


                                                                               (126)

   As S + cc, the optimal control solution when E( y;*,,] Y,*) = y;” is:

        AY, =D( Y;”- Y,-t)>

where if K = Z - D, then:

        K + K-l=         2Z+ WplM,
or if we write:

        K*    =   W1/2KW-1/2

        K*+       K*-’   EZ   2Z+    ;-‘/2&fW-‘/2.
   Now if Wand M are both positive definite the matrix on the right-hand side is
positive definite such that every latent root is real and greater than 2. K* can then
clearly be chosen to be symmetric, so that every root is real, and if h, is a root of
K* and X, a corresponding root of W- 1/2M W- ‘12, then:
1090                                                                D. F. Hendty et al.


We can pick K* such that A, satisfies:

       0 <A, cl,

provided M is non-singular, and K = W- ‘12K* W112, and has the same set of
latent roots.
   This choice of K is appropriate, since unstable solutions cannot be optimal.
Then for D = Z - K, we have that A, = 1 - A,, and so:

       O<h,<l.                                                                 027)
   Note that if W is a diagonal matrix then D is symmetric. Of course without
prior knowledge of Wand M it is difficult to specify D, and even the constraints
that D has real latent roots satisfying (127) are difficult to enforce.
   The generalisation of the model (125) to more complicated time lags is obvious,
but perhaps rather arbitrary. Using the lag operator notation a general formula-
tion would be:

       WJAY, = D(L)(YI* - Y,-I)+G                                              (128)
where C(L) and D(L) are matrix polynomials of any order. However, if y;” is
being written as an arbitrary linear function of current and lagged values of a set
of exogenous variables, then (128) may contain some redundancy and in any case
a useful simplification may be obtained by considering either of the following
special cases:



or

       C(L)Ay,=D(y:-y,-l)+u,.                                                  030)

   If no attempt is made to put constraints on the C(L) and D matrices in (130) a
further transformation can be considered by using this form with the restriction
that D is diagonal and C, [the zero order coefficient matrix in C(L)] has its
diagonal elements equal to one or perhaps better that D = Z and C, is unre-
stricted. In specifying y,* = y,(z,) when there are linear restrictions on these
equilibrium functions each of which affects only one element of y,(z,), such forms
(rather than the more usual assumption that C, = I) have the advantage that the
corresponding restriction affects only one equation of (130).
   If there are restrictions on C(L) and D, then an equivalent model with an
arbitrary lag on ( y,* - y,_i) may make a better formulation if the rather ad hoc
Ch. IS: Dynamic Specification                                                    1091

economic considerations to be considered below are applied. It is less easy to
formulate an optimal control approach which will give significant restrictions on
C(L) and D. Thus, for example, if we write:
                                                      \
                    \                 YI - Y,
             Yf
             Yf-1                     Y,-1-     YE1
     j-5=       .       9   Yt+ =

             xl,,
                                      VI-f - YEf
                                                      I




then a loss function of the form

       S                         S

       C ( Y:'M+Y:          )+ c (A#+‘+ (AR:)
      r=1                       t=1


leads to optimal control equations of the form (128) (with the property that if y,
is held constant the adjustment equations are stable) but further restrictions,
along the lines that the latent roots are all real, are not appropriate, since the
results for the first order case are dependent on the special separability assump-
tion for the loss function used in the first order case. [For a discussion of optimal
control closed loop paths see Chow (1975).]
   A possibility of some importance, which prevents the normalisation D = I,is
that D is in fact singular. This arises particularly where there are identities
corresponding to exact equations satisfied by the whole set of endogenous
variables, or where some variables react so quickly during the unit time period,
that the general equation of type (130) becomes inappropriate. If the partial
equilibrium for this variable is stable, and is attained within the unit time period,
then a static equation, or a dynamic equation obtained by differencing the static
equation, is introduced into the model.
   This possibility can be found in applied studies from various fields, for
example, in models of wage-price inflation, as in Sargan (1980a) or Laidler and
Cross (1976), models of entrepreneurial behaviour, as in Brechling (1973) or
Nadiri and Rosen (1969) or models of consumer behaviour, as in Phlips (1978) or
Deaton (1972b), or in models of portfolio choice, as in Tobin (1969).
   Somewhat similar specialisations in the form of the general adjustment equa-
tions occur where there are buffer variables, such as cash in portfolio choice
models, or inventories in some models of firm behaviour, or hours worked in
models of labour demand. Buffer variables in the short period are regarded as
absorbing the consequences of disequilibrium. Here if a sufficiently short time
period is employed it may be appropriate to assume that the change in the buffer
variable is determined by an appropriate overall identity.
1092                                                                                       D. F. Hendr?, et al.


   If it is known how agents formulate E( y;,] yt*), and a loss function of the
form (126) is appropriate, then a useful theory-based dynamic specification can
be derived. For example, if y: is generated by: A y‘* = AA y,? 1 + V, then the
solution linear decision rule is:

       AY,=D,AY:+D,(Y,*-Y,-I)+%                                                                        (131)

which is a system error correction form [see Section 2.6, Hendry and Anderson
(1977) and Nickel1 (1980)]. In (131), D, and D2 depend on A, Wand M such that
D, = 0 and D2 = D in (125) if A = 0, and an intercept in the y;” equation would
produce an intercept in (131) (so that the decision rules would depend on the
growth rate of y,* in a log-linear model). Similarly, a rational expectations
assumption in models with strongly exogenous variables provides parameter
restrictions [see Wallis (1980) noting that the vector of first derivatives of the
likelihood function provides an estimator generating equation for the model class,
in the sense of Section 2.2, suggesting fully efficient, computationally cheap
estimators and highlighting the drawbacks of “fixed point” methods.] Neverthe-
less, stringent diagnostic testing of models must remain an essential component of
any empirical approach to dynamic specification [see Hendry (1974) and Sargan
(1980a)l.
   Finally, where the economic model is set up in a form which makes it depend
on a discrete decision period, and the unit time period is inappropriate, the use of
continuous time period models, and the discrete time period approximations to
them discussed by Bergstrom in Chapter 20 of this Handbook may considerably
improve the dynamic specifications of the model whenever there are valid a priori
restrictions on the continuous time model.



References

Aigner, D. J. (1971) “A Compendium            on Estimation of the Autoregressive      Moving Average Model
   from Time Series Data”, Internattonal Economic Reoiew, 12. 348-369.
Aigner, D. J. and G. G. Judge (1977) “Application           of Pre-Test and Stein Estimators       to Economic
   Data”, Economemcu, 45, 1279-1288.
Aitchison, J. and S. D. Silvey (1960) “Maximum             Likelihood  Estimation     and Associated   Tests of
   Significance”, Journal of the Royal Statistical Socie[tl, Series B, 22, 154-171.
Akaike, H. (1972) “Information        Theory and an Extension of the Maximum Likelihood Principle”,
   Proceedings, 2nd International S?,mposium on Information Theoy, 267-281.
Almon,      S. (1965) “The Distributed         Lag between Capital     Appropriations     and Expenditures”,
   Economefnca, 33, 178-196.
Amemiya, T. (1980) “Selection of Regressors”,         Inrernuiional Economrc Reoiew, 21. 331-354.
Amemiya, T. and K. Morimune (1974) “Selecting the Optimal Order of Polynomial                    in the Almon
   Distributed   Lag”, Reorew of Economics and Statistics, 56, 378-386.
Anderson, T. W. (1971) The Statistical Analysis of Time Series. New York: John Wiley.
Anderson, T. W. (1980) “Maximum           Likelihood Estimation for Vector Autoregressive     Moving Average
   Models”, pp. 49-59 in D. R. Brillinger and G. C. Tiao (eds.): .VeM; Direcrrons rn Time Serreh,
   Institute of Mathematical   Statistics.
Ch. 18: Dynannc       SpecijicatMm                                                                                  1093

Barre,     R. J. (1978) “Unanticipated        Money,    Output   and the Price Level in United     States”,   Journal   of
  Pohrical     Economy.   86, 549-580.
Bean, C. R. (1977) “More Consumer                 Expenditure    Equations”,    Paper   AP (77) 35. H. M. Treasury,
  London.
Bean. C. R. (1981) “An Econometric                 Model    of Investment      in the United   Kingdom”,       Economit
  Journai,     91,~106-121.
Bentzel,     R. and B. Hansen,       (1955) “On     Recursiveness    and Interdependency       in Economic     Models”.
   Reoieua of Economic        Studies,   22, 153-168.
Bemdt, E. R. and N. E. Savin (1977) “Conflict                Among Criteria for Testing Hypotheses            in the
  Multivariate     Linear Regression Model”, Economerrica, 45, 1263-1278.
Bewley, R. (1979a) “The Direct Estimation               of the Equilibrium     Response in a Linear Dynamic
  Model”, Economic Letters, 3, 357-362.
Bewley, R. (1979b) “On Searching for the Lag Length and Polynomial                     Degree in the Almon Lag
   Method”, Discussion Paper No. 42, University of New South Wales.
Box, G. E. P. and G. M. Jenkins (1970). Time Series Ana!vsis, Forecast/q              and Control. San Francisco:
   Holden-Day.
Brechling, F. (1973) lnuestmenr and Employmenr Deasions, The University Press, Manchester.
Brissimis, S. N. and L. Gill (1978) “On the Asymptotic                   Distribution    of Impact and Interim
   Multipliers”,    Econometrica,  46, 463-469.
Breusch. T. S. and A. R. Pagan (1980) “The Lagrange Multiplier Test and its Applications                   to Model
   Specification in Econometrics”,      Review of Economic Studies, 47, 239-253.
Burdick, D. A. and D. Wallace (1976) “A Theorem on an Inequality of Two Quadratic Forms and an
   Application    to Distributed   Lags”, Inrernational    Economic Reoiew. 17, 769-772.
Burt, 0. R. (1980) “Schmidt’s        La Guerre Lag is a Pascal Rational Lag”, University of Kentucky,
   mimeo.
Cargill. T. F. and R. A. Meyer (1974) “Some Time and Frequency                          Domain    Distributed    Lag
   Estimators:    A Comparative     Monte Carlo Study”, Econometrica, 42, 1031L1044.
Carter, R. A. L., A. L. Nagar and P. G. Kirkham (1975) “The Estimation of Misspecitied Polynomial
   Distributed    Lag Models”, Report No. 7525, Dept. of Economics, University of Western Ontario.
Chow. G. C. (1975) Ana!vsis and Conrrol of Dynamrc Economic Svstems, New York: Wiley.
Corradi, C. (1977) “Smooth Distributed           Lag Estimators and Smoothing Spline Functions in Hilbert
   Spaces”, Journal of Uconometrrcs, 5, 211-220.
Corradi, C. and G. Gambetta (1974) “A Numerical Method for Estimating Distributed Lag Models”,
   Proc. I. F. I. P. Congress, (North-Holland,       Amsterdam),    638-641.
Cox. D. R. and D. V. Hinkley (1974) Theoretical Srutisrics, London: Chapman and Hall.
Crowder. M. J. (1976) “Maximum           Likelihood Estimation for Dependent Observations”,           Jourrlal of the
   Rqul Sratistlcul Sociey, B, 38, 45-53.
Currie, D. (1981) “Some Long Run Features of Dynamic Time Series Models”. Ewnon7rc                      Journal, 91,
   704-715.
Cuthbertson,  K. (1980) “The Determination      of Consumer    Durables Expenditure:   An Exercise in
  Applied Econometric    Analysis”, Unpublished    Paper, National Institute for Economic and Social
  Research, London.
Davidson, J. E. H. (1981) “Problems with the Estimation of Moving Average Processes”, Journal of
   Economearcs,       16, 295-310.
Davidson,   J. E. H., D. F. Hendry, F. Srba and S. Yeo (1978) “Econometric            Modelling of the
  Aggregate Time-Series Relationship    Between Consumers’    Expenditure    and Income in the United
  Kingdom”, Economic Journul, 88, 661-692.
Davidson.   J. E. H. and D. F. Hendry (1981) “Interpreting        Econometric    Evidence: Consumers’
  Expenditure   in the United Kingdom”; European Economic ieaiew, 16, 177-192.
Davis, E. P. (1982) “The Consumntion     Function in Macroeconomic    Models: A Comoarative     Stud?.2.
  Bank of England Discussion Paper No. 1, Technical Series.
Day, R. H. (1967) “Technological     Change and the Sharecropper”,     Americun Econonnc Rerlieu,, 57.
   427-449.
Deaton,      A. S. (1972a) “Letter to the Editor”, Americun Stutisticiun, 26, 63.
Deaton,      A. S. (1972b) “The Estimation     and Testing of Systems of Demand                Equations”,     Europeun
   Economic, Rn)rewJ. 3. 390-411.
1094                                                                                                 D. F. Hendty   et al.


Dent,   W. T. (ed.), (1980) “Computation in Econometric Models”, Journal                   of Econometrics, 12, NO. 1.
Dhrymes,P. (1971) Distributed          Lags: Problems       of Estimatron   and Formulution,   San Francisco: Holden
  Day.
Dhrymes, P. J., L. R. Klein, and K. Steiglitz (1970) “The Estimation of Distributed Lags”,
  International Economic Reorew, 11, 235-250.
Durbin. J. (1970) “Testing for Serial Correlation in Least-Squares Regression when Some of the
  Regressors are Lagged Dependent Variables”, Economerricu, 38, 410-421.
Eisner, R. and R. H. Strotz (1963) “Determinants of Business Investment”, pp. 60-138 in Commission
  on Money and Credit; fmpucts of Monetary Policy, Englewood Cliffs, N.J.: Prentice-Hall.
Engle, R. F. (1976) “Interpreting Spectral Analyses in Terms of Time-Domain Models” Annuls of
   Economic    und Social Measurement,         5. 89-109.
Engle, R. F. (1982) “A General Approach to Lagrange Multiplier Model Diagnostics”,                            Annuls   of
  Applied     Econometrics,    20, 83-104.
Engle, R. F. (1982) “Autoregressive Conditional Heteroscedasticity with Estimates of the Variances of
  United Kingdom Inflations”, Econometrica, 50, 987-1008.
Engle, R. F., D. F. Hendry, and J-F. Richard (1983) “Exogeneity”, Econometrico. 51, 277-304.
Espasa, A. (1977) The Spectrul Muximum Likelihood Estimution of Econometrrc Models with Stutionurl,
  Errors, Gottingen: Vanderhoeck und Ruprecht.
Evans, G. B. A. and N. E. Savin (1981) “Testing for Unit Roots”. Econometrtca, 49. 753-779.
Evans, G. B. A. and N. E. Savin (1982) “Conflict Among the Criteria Revisited: The W. LR and LM
  Tests”, Econometricu, 50, 737-748.
Florens, J-P. and M. Mouchart (1980) “Initial and Sequential Reduction of Bayesian Experiments”,
  CORE Discussion Paper 8015, Universite Catholique de Louvain, Louvain-la-Neuve. Belgium.
Fomby, T. B. (1979) “MSE Evaluation of Shiller’s Smoothness Priors”, Internutionul          Economic
   Review. 20, 203-215.
Frenkel, J. (1981) “Flexible Exchange Rates, Prices and the Role of “News”: Lessons from the
   1970’s”. Journul of Politico1 Economy, 89, 665-105.
Friedman, B. M. (1976) “Substitution and Expectation Effects on Long-Term Borrowing Behaviour
   and Long-Term Interest Rates”, Discussion Paper No. 495, Harvard University.
Frisch, R. (1938) “Statistical versus Theoretical Relations in Economic Macro-Dynamics”, Business
   Cycle Conference, Cambridge, England.
Frost, P. A. (1975) “Some Properties of the Almon Lag Technique when one Searches for Degree of
   Polynomial and Lag”, Journal of the Amerrcun Stutis?rcul Assoi,iution, 70. 606-612.
Fuller. W. A. (1976) Introduction to Stutisticul Time-Series. New York: John Wiley and Sons
Gersovitz, M. and J: G. Mackinnon (1978) “Seasonality in Regression: An Application of Smoothness
   Priors”, Journal of the American Statistical Association. 73, 264-273.
Geweke, J. F. and R. Meese (1981) “Estimating Regression Models of Finite But Unknown Order”,
   International    Economtc     Reoiew. 22. 55-70.
Ginsburgh, V. and J. Waelbroeck (1976) “Computational Experience with a Large General Equi-
  librium Model”, Computing Equilibria:   How and Why, ed. by J. Los and M. W. Los, (North
  Holland, Amsterdam), 257-269.
Godfrey, L. G. (1978) “Testing Against General Autoregressive and Moving Average Error Models
  when the Regressors Include Lagged Dependent Variables”, Econometricu, 46, 1293-1301.
Godfrey, L. G. and D. S. Poskitt (1975) “Testing the Restrictions of the Almon Technique”, Journal
   of the Americun     Statistical   Associution,   70, 105-108.
Godfrey, L. G. and M. R. Wickens (1982) “Tests of Misspecitication using Locally Equivalent
  Alternative Models”, Ch. 6 in G. C. Chow and P. Corsi (eds.). Ecalaatinp the Reliubilitv of,
  Mucro-Economic  Models. New York: John Wiley and Sons.    ’
Godley, W. A. H. and W. D. Nordhaus (1972) “Pricing in the Trade Cycle”, The Economic Journul,
   82, 853-882.
Goldberger, A. S. (1959) Impact Multipliers and D.vnumic Properties of the Klein - Goldberger Model,
  Amsterdam: North Holland.
Goldberger, A. S., A. L. Nagar, and H. S. Odeh (1961) “The Covariance Matrices of Reduced Form
  Coefficients and of Forecasts for a Structural Econometric Model”, Econometricu, 29, 556-573.
Granger, C. W. J. (1966) “The Typical Spectral Shape of an Economic Variable, Econometricu, 34,
   150-161.
Ch. 18: Dvnumic    Specification                                                              1095

Granger,  C. W. J. (1969) “Investigating Causal Relations by Econometric Models and Cross-Spectral
  Methods”, Econometrica. 37, 424-438.
Granger, C. W. J. (1981) “Forecasting White Noise”, Discussion Paper 80-31, University of Cah-
  fomia, San Diego.
Granger, C. W. J. and P. Newbold (1974) “Spurious Regressions in Econometrics”, Journul of
  Econometrics, 2, 111-120.
Granger, C. W. J. and P. Newbold (1977) “The Time Series Approach to Econometric Model
  Building”, Chapter 1, in C. A. Sims (ed.) op. cit.
Griliches, Z. (1961) “A Note on Serial Correlation Bias in Estimates of Distributed Lags”,
   Econometrica.   29, 65-13.
Griliches, Z. (1967) “Distributed Lags: A Survey”, Econometrica, 35, 16-49.
Guthrie. R. S. (1976) “A Note on the Bayesian Estimation of Solow’s Distributed Lag Model”,
  Journul   of Econometrics,    4, 295-300.
Haavelmo. T. (1944) “The Probability Approach in Econometrics” Supplement to Econometrica, 12.
Hall, R. E. (1978) “Stochastic Implications of the Life Cycle-Permanent Income Hypothesis: Theory
  and Evidence”, Journal of Political Economy, 86, 971-987.
Hamlen, S. S. and W. A. Hamlen (1978) “Harmonic Alternatives to the Almon Polynomial
  Technique”, Journul of Econometrics, I, 57-66.
Hannan. E. J. (1970) Mulrrole Time Series. New York: Wilev.
Hansen, L. P. ‘(1982) “La&e Sample Properties of Generalised Method of Moments Estimators”,
   Econometricu,   50. 1029-1054.
Harper, C. P. (1977) “Testing for the Existence of a Lagged Relationship within Almon’s Method”,
  Rec+eua of Economas und Statisrics, LIX, 204-210.
Harvey. A. C. (1981) Econometric Anulvsis of Time Series. London: Phillip Allan.
Harvey, A. C. and G. D. A. Phillips (1979) “The Estimation of Regression Models with Autoregres-
  sive-Moving Average Disturbances”, Biomelriku, 66, 49958.
Hatanaka, M. and T. D. Wallace (1980) “Multicollinearity and the Estimation of Low Order
  Moments in Stable Lag Distributions”. pp. 322-337 in J. Kmenta and J. B. Ramsay (eds.),
  Evuluurion of Econometric Models. New York: Academic Press.
Hausman, J. A. (1975) “An Instrumental Variable Approach to Full Information Estimators for
  Linear and Certain Non-Linear Econometric Models”, Economefricu, 43, 727-753.
Hendry, D. F. (1974) “Stochastic Specification in an Aggregate Demand Model of the United
  Kingdom”, Econometrica, 42, 559-578.
Hendry. D. F. (1976) “The Structure of Simultaneous Equations Estimators”, Journul of Economer-
  rrcs. 4. 51-88.
Hendry, D. F. (1979) “The Behaviour of Inconsistent Instrumental Variables Estimators in Dynamic
  Systems with Autocorrelated Errors”, Journal of Econometrics, 9, 295-314.
Hendry. D. F. (1980) “Predictive Failure and Econometric Modelling in Macro-Economics: The
  Transactions Demand for Money”, Chapter 9 in P. Ormerod (ed.) Economrc Modellrng. London:
  Heinemann Educational Books.
Hendry. D. F. and G. J. Anderson (1977) “Testing Dynamic Specification in Small Simultaneous
  Systems: An Application to a Model of Building Society Behaviour in the United Kingdom”,
  Fronbers rn Quanfirarine Economics. Vol. IIIA (ed. M. D. Intriligator). Amsterdam: North Holland.
Hendry, D. F. and G. F. Mizon (1978) “Serial Correlation as a Convenient Simplification, not a
  Nuisance: A Comment on a Study of the Demand for Money by the Bank of England”, The
   Economic   Journal   88, 549-563.
Hendry, D. F. and A. R. Pagan (1980) “A Survey of Recent Research in Distributed Lags”.
  unpublished paper, Australian National University.
Hendry, D. F. and J-F. Richard (1982) “On the Formulation of Empirical Models in Dynamic
  Econometrics”, Journal of Econometrics. 20, 3-34.
Hendry, D. F. and J-F. Richard (1983) “The Econometric Analysis of Economic Time Series”,
  Inlernuaonul Statistical Review, 51, 111-163.
Hendry. D. F. and P. K. Trivedi (1972) “Maximum Likelihood Estimation of Difference Equations
  with Moving Average Errors: A Simulation Study”, The Review, of Economic St&es, 39. 117-145.
Hendry, D. F. and T. von Ungem-Stemberg (1981) “Liquidity and Inflation Effects on Consumers’
  Behaviour”, Chapter 9, in A. S. Deaton (ed.), Essavs in the Theon, and Measuremenr of Consumers’
1096                                                                               D. F. Hendry   et al.


  Beharlour, Cambridge University Press.
Henry, S. G. B., M. C. Sawyer, and P. Smith (1976) “Models of Inflation in the United Kingdom”.
  ,Vutronal Instrtute Economic Review, 76/3, 60-71.
Hickman, B. G. (1972) Econometric Models of Qclical Behavlour, New York: Columbia University
  Press.
Hill, R. C. and S. R. Johnson (1975) “Distributed Lag Estimators Derived from Smoothness Priors: A
  Comment”, Unpublished paper, University of Missouri-Columbia.
Holt, C., F. Modigliani, J. Muth and H. Simon (1960). Planning Production, Invenforres and Work
  Force. Englewood Cliffs: Prentice-Hall.
Houthakker, H. S. (1956) “The Pareto Distribution and the Cobb-Douglas Production Function in
  Activity Analysis”, Review of Economic Studies, 23, 27-31.
Hurwicz, L. (1962) “On the Structural Form of Interdependent Systems”, In Logic, Methodology und
  the Philosophy of Saence, ed. by E. Nagel. et al. Palo Alto: Stanford University Press.
Hylleberg, S. (1981) “Seasonality in Regressions. The Time Varying Parameter Model”, NBER/NSF
  Conference Paper, San Diego, California.
Jonson, P. D. (1976) “Money, Prices and Output: An Integrative Essay”, Kredit und Kupitul, 84,
  979-1012.
Jorgenson, D. W. (1966) “Rational Distributed Lag Functions”, Econometricu, 34, 135-149.
Judge, G. G. and M. E. Bock (1978) The Statistical Implicutrons of Pre-Test und Stein-Rule Estimutors
   rn Econometrics. Amsterdam: North Holland.
Kang, K. M. (1973) “A Comparison of Estimators for Moving Average Processes”, Report of
   Australian National Bureau of Statistics, Canberra.
Kendall, M. G. (1973) T/me-Series. London: Charles Grillen and Co.
Kendall. M. G. and A. Stuart (1961) The Aduunced Theoy of Stutistrcs. Vol. 2, New York: Charles
   Griffen and Co.
Kennan, J. (1979) “The Estimation of Partial Adjustment Models with Rational Expectations”,
  Economerricu,   47, 144-1455.
Keynes, J. N. (1890) The Scope and Method of Politrcul Economy. London: MacMillan and Co.
Kloek. T. (1982) “Dynamic Adjustment when the Target is Nonstationary”, unpublished paper,
  Erasmus University, Rotterdam.
Kohn. R. (1979) “Identification Results for Armax Structures”, Econometrica, 47, 1295-1304.
Koopmans, T. C. (1947) “Measurement without Theory”, Review of Economics ur7d Stutrstrts, 29,
  161-179.
Koopmans, T. C. (1950) “When is an Equation System Complete for Statistical Purposes?” Stutistrcul
  Inference m &,numic   Economrc Models (T. C. Koopmans, ed.), Ch. 17. New York: John Wiley.
Laidler, D. and R. Cross (1976) “Inflation, Excess Demand in Fixed Exchange Rate Open Economies”,
  in Infution m the World Economlj, edited by M. Parkin and G. Zis, Manchester University Press.
Lucas. R. E. (1976) “Econometric Policy Evaluation: A Critique”, in The Phrllips Curve und Luhor
  Markets (K. Brunner and A. H. Meltzer, eds.), pp. 19-46. Amsterdam: North-Holland (Carnegie-
  Rochester Conference Series on Public Policy, vol. 1).
Liitkepohl, H. (1980) “Approximation of Arbitrary Distributed Lag Structures by a Modified
  Polynomial Lag: An Extension”, Journul of the Americun Stutistrcul Assocrution, 75, 428-430.
Maddala, G. S. (1977) Econometrics. New York: McGraw Hill.
Malinvaud, E. (1966) Stutistrcul Methods of Econometrics. Amsterdam: North-Holland.
Mallows. C. L. (1973) “Some Comments on C,“. Technometrics, 15, 661-675.
Marget. A. W. (1929) “Morgenstem on the Methodology of Economic Forecasting”, Journul of
  POIIIICUI Econom),,   37, 312-339.
Marschak, J. (1953) “Economic Measurements for Policy and Prediction” in W. C. Hood and T. C.
  Koopmans (eds.): Studies m Econometric Method. New Haven: Yale University Press.
Mizon, G. E. (1977a) “Model Selection Procedures”, Chapter 4 in Artis, M. J. and Nobay, A. R. (eds.)
 Srudtes In Modern Economic Analysis, Oxford: Basil Blackwell.
Mizon. G. E. (1977b) “Inferential Procedures in Nonlinear Models: An Application in a UK
  Industrial Cross Section Study of Factor Substitution and Returns to Scale”, Econometricu,     45,
  1221-1242.
Mizon, G. E. and D. F. Hendry, (1980) “An Empirical Application and Monte Carlo Analysis of Tests
 of Dynamic Specification, Review of Economic Studies, 47, 21-46.
Ch. 18: D_vnumic Specificution                                                                                      1097


Mouchart,     M. and R. Orsi (1976) “Polynomial        Approximation   of Distributed   Lags and Linear
  Restrictions:     A Bayesian Approach”,  Empirical  Economics, 1, 1299152.
Muellbauer,     .I. (1979) “Are Employment   Decisions Based on Rational Expectations?”      Unpublished
  paper, Birkbeck College, London.
Nadiri, M. I. and S. Rosen (1969) “Interrelated        Factor Demand Functions”.      Americun  Economic
   Review, 59, 457-471.
Nerlove, M. (1972) “On Lags in Economic Behaviour”, Econometrica, 40. 221-252.
Nicholls, D. F.. A. R. Pagan and R. D. Terre11 (1975) “The Estimation         and Use of Models with
   Moving Average Disturbance    Terms: A Survey”, Internationul    Economtc Reriew, 16. 113-134.
Nickell, S. (1980) “Error   Correction,    Partial Adjustment    and All That: An Expository     Note”,
   unpublished paper, London School of Economics.
Osbom, D. R. (1976) “Maximum         Likelihood Estimation    of Moving Average Processes”, Annals of
   Economic       and Social Measurement,          5, 75-87.
Osborn, D. R. (1977) “Exact and Approximate       Maximum Likelihood Estimators for Vector Moving
  Average Processes”, Journal of the Royal Statistical Society, B39, 114-11X.
Pagan, A. R. and D. F. Nicholls (1976) “Exact Maximum            Likelihood   Estimation   of Regression
  Models with Finite Order Moving Average Errors”, Review of Economic Studies, 43, 383-387.
Pagan, A. R. (1978) “Rational  and Polynomial Lags: The Finite Connection”,        Journul of Economet-
   rics, 8, 247-254.
Pagano, M. and M. J. Hartley (1981) “On Fitting Distributed           Lag Models SubJect to Polynomial
   Restrictions”,  Journul of Econometrics, 16, 171-198.
Patterson,    K. D. and J. Ryding (1982) “Deriving      and Testing Rate of Growth and Higher Order
  Growth Effects in Dynamic Economic Models”, Bank of England Discussion Paper 21.
Palm, F. and A. Zellner (1980) “Large Sample Estimation            and Testing Procedures for Dynamic
   Equation Systems”, Journal of Econometrics, 12, 251-284.
Persons, W. M. (1925) “Statistics and Economic Theory”, Reoiew of Economrc Stutistics. 7, 179-197.
Pesando, J. E. (1972) “Seasonal     Variability  in Distributed   Lag Models”, Journal of the Amertcun
   Statistical    Association,   71, 835-841.
Pesaran, M. H. (1981) “Diagnostic Testing and Exact Maximum Likelihood Estimation of Dynamic
   Models”, Chapter 3 in E. G. Charatsis   (ed.), Proceedings of the Econometric Societ), European
  Meetmg 1979: Selected Econometric Papers in Memory of Stefun Vulurunis, North-Holland,     63-87.
Pesaran, M. H. and A. S. Deaton (1978) “Testing       Non-nested   Non-linear  Regression Models”,
   Econometrica,       46, 677-694.
Phillips,    A. W. (1954)        “Stabilisation      Policy    in a Closed   Economy”,   The Economic    Journul.    64,
   290-323.
Phillips, A. W. (1957) “Stabilization             Policy and The Time Form of Lagged      Responses”,   The Economic
  Journal,       67, 265-277.
Phillips, P. C. B. (1977) “Approximations  to Some Finite Sample Distributions    Associated with a First
   Order Stochastic Difference Equation”,   Econometrica,  45, 463-485.
Phillios. P. C. B. (1980) “Finite !&mole Theorv and the Distributions   of Alternative Estimators of the
   M&inal     Propensitv to Consume”, Reoiew af Economic Studies, 47. 183-224
Phlips,L.   (1978) Applied Consumption Analysis, North Holland Publishing Co., Amsterdam.
Pierce. D. A. (1977) “Relationshios-and       the lack thereof-Between     Economic Time Series. with
   Special Reference’to Money and’Interest   Rates”, Journul of the Americun Stutistnal Assoctation, 72,
   11-22.
Poirier,    D. J. (1975) “Spline       Lags:
                                         Why the Almon Lag has Gone to Pieces” in D. J. Poirier, The
   Econometrics       of Structural        North Holland, Amsterdam.
                                      Change,
Prothero, D. L. and K. F. Wallis (1976) “Modelling         Macro-Economic    Time Series” (with Discussion),
   Journul of the Ro~ul Stuttsticul Society, Series A, 139, 486-500.
Ramsey, J. (1969) “Tests for Specification           Errors in Classical Linear Least Squares Regression
  Analysis”, Journal of the Royul Statistical Sociey, Series B, 350-371.
Rao. C. R. (1965) Linear Statistical Inference and Its Applications.      New York: John Wiley.
Reinsel, G. (1979) “Maximum        Likelihood Estimation of Stochastic Linear Difference Equations with
   Autoregressive   Moving Average Errors”, Econometricu, 47, 129-152.
Richard,    J.-F. (1977) “Bayesian     Analysis of the Regression       Model When the Disturbances       are
   Generated     by an Autoregressive      Process”,   New Developments in the Applications     of Ba.vesian
1098                                                                                D. F. Hendry   et al.


  Methods, ed. by A. Aykac, and C. Brumat, (North Holland, Amsterdam), 185-209.
Richard, J.-F. (1979) “Exogeneity, Inference and Prediction in So-Called Incomplete Dynamic
  Simultaneous Equation Models”, CORE Discussion Paper 7922, Universite Catholique de Louvain,
  Louvain-la-Neuve, Belgium.
Richard, J.-F. (1980) “Models with Several Regimes and Changes in Exogeneity”, The Review o/
  Economic       Studies,   47, l-20.
Robinson, S. (1970) “Polynomial Approximations of Distributed Lag Structures”, Discussion Paper
  No. 1, London School of Economics.
Salmon, M. (1979) “Notes on Modelling Optimising Behaviour in the Absence of an ‘Optimal’
  Theory”, unpublished paper, University of Warwick.
Salmon, M. (1982) “Error Correction Mechanisms”, Economic Journal, 92, 615-629.
Salmon, M. and K. F. Wallis (1982) “Model Validation and Forecast Comparisons: Theoretical and
  Practical Considerations”, Ch. 12 in G. C. Chow and P. Corsi (eds.), Evaluatrng the Reliability oj
  Macro-Economic    Models. New York: John Wiley and Sons.
Salmon, M. and P. C. Young (1978) “Control Methods for Quantitative Economic Policy”, in S.
  Holly, B. Rustem and M. Zarrop (eds.): Optimal Controlfor Econometric Models: An Approach to
  Economic Policy Formation.   London: Macmillan.
Samuelson, P. A. (1947) Foundations of Economic Analysis, Harvard University Press.
Sargan, J. D. (1961) “The Maximum Likelihood Estimation of Economic Relationships with Autore-
  gressive Residuals”, Econometrica, 29, 414-426.
Sargan, J. D. (1964) “Wages and Prices in the United Kingdom: A Study in Econometric Methodol-
  ogy”, in P. E. Hart, G. Mills and J. K. Whitaker (eds.) Econometric Analysis for Nutional Economic
  Planning (Colston Papers No. 16) London, Butterworths.
Sargan, J. D. (1975) “The Identification and Estimation of Sets of Simultaneous Stochastic Equations”,
  L.S.E. Econometrics Programme Discussion Paper Al.
Sargan, J. D. (1978a) “Identification in Models with Autoregressive Errors”, L.S.E. Econometrics
  Programme Discussion Paper A.17.
Sargan, J. D. (1978b) “Dynamic Specification for Models with Autoregressive Errors. Vector Autore-
  gressive Case”, L.S.E. Econometrics Programme Working Paper.
Sargan, J. D. (1980a) “A Model of Wage-Price Inflation”, Review of Economic Studies, 47, 97-112.
Sargan, J. D. (1980b) “The Consumer Price Equation in the Post War British Economy. An Exercise
  in Equation Specification Testing”, The Review of Economic Studies, 47, 113-135.
Sargan, J. D. (1980~) “Some Tests of Dynamic Specification for a Single Equation”, Econometrica, 48,
  879-897.
Sargan, J. D. and A. Bhargava (1983) “Maximum Likelihood Estimation of Regression Models with
  First Order Moving Average Errors when the Root Lies on the Unit Circle”, Econometrica, 51,
  153-174.
Sargan, J.  D. and F. Mehta (1983) “A Generalisation of the Durbin Significance Test and its
  Application to Dynamic Specification”, Econometrrca, 51, 1551-1567.
Sargent, T. J. (1981) “Interpreting Economic Time Series”, Journal of Politrcal EconomJj, 89, 213-248.
Sargent, T. J. and C. A. Sims (1977) “Business Cycle Modelling Without Pretending to Have Too
  Much a Priori Economic Theory”, in New Methoak of Business Cycle Research, edited by C. A. Sims,
  Federal Reserve Bank of Minneapolis.
Sawa, T. (1978) “Information Criteria for Discriminating Among Alternative Regression Models”,
  Econometrica,       46, 1273-1291.
Sawyer, K. R. (1980) The Theory of Econometric Model Selection, unpublished doctoral dissertation,
  Australian National University.
Schmidt, P. (1974) “A Modification of the Almon Distributed Lag”, Journal of the American Statistical
  Association,     69, 679-681.
Schmidt, P. and R. N. Waud (1973) “Almon Lag Technique and the Monetary Versus Fiscal Policy
  Debate”, Journal of the American Statistical Association, 68, 11-19.
Schmidt, P. and R. Sickles (1975) “On the Efficiency of the Almon Lag Technique”, International
  Economic       Review,    16, 792-795.
Schmidt, P. and W. R. Mann (1977) “A Note on the Approximation of Arbitrary Distributed Lag
  Structures by a Modified Almon Lag”, Journal of the American Statistical Association, 72, 442-443.
Ch. 18:   D~~narnfcSpeci$cutlon                                                                                    1099

Shiller, R. J. (1973) “A Distributed Lag Estimator Derived from Smoothness Priors”, Econometricu.
  41, 775-788.
Shiller, R. J. (1980) “Distributed Lag Estimators Based on Linear Coefficient Restrictions and
   Bayesian Generalisations of These Estimators”, I. H.S. Journal, 4, 163-180.
Silver, J. L. and T. D. Wallace (1980) “The Lag Relationship Between Wholesale and Consumer
   Prices: An Application of the Hatanaka-Wallace Procedure”, Journul of Econometrics, 12, 375-388.
Sims, C. A. (1972) “The Role of Approximate Prior Restrictions in Distributed Lag Estimation”,
  Journal    of the American          Statistical    Association,   67, 169-175.
Sims. C. A. (1974) “Distributed     Lags”, Ch. 5, in M. D. Intriligator and D. A. Kendrick (eds.)
   Frontiers of Quantitutice Economics. vol. 2, Amsterdam: North-Holland.
Sims, C. A. (ed.) (1977) New Methods in Business C,,c/e Reseurch, Federal Reserve Bank of
   Minneapolis.
Sims, C. A. (1980) “Macroeconomics and Reality”, Econometricu, 48, l-48.
Spencer, G. (1976) “A Comparison of Some Alternative Estimators for Distributed Lag Models”,
  unpublished M.Sc. thesis, London School of Economics.
Strawderman, W. E. (1978) “Minimax Adaptive Generalized Ridge Regression” Journul of the
  American         Statist&       Association,      73. 623-627.
Taylor, W. E. (1974) “Smoothness Priors and Stochastic Prior Restrictions in Distributed Lag
  Estimation”, International Economic Review, 15, 803-804.
Terhvirta. T. (1976) “A Note on Bias in the Almon Distributed Lag Estimator”, Econometricu, 44,
   1317-1321.
Terbvirta, T. (1980a) “The Polynomial Distributed Lag Revisited”, Empiricul Economics, 5, 69-81.
Ter’bvirta, T. (1980b) “Linear Restrictions in Misspecified Linear Models and Polynomial Distributed
  Lag Estimation”, Research Report No. 16, Dept. of Statistics, University of Helsinki.
The& H. and J. C. G. Boot (1962) “The Final Form of Econometric Equation Systems”, Review of
   International       Statistical    Institute,    30, 162-170.
Thomas, J. J. (1977) “Some Problems in the Use of AImon’s Technique in the Estimation of
  Distributed Lags”, Empirical Economics, 2, 175-193.
Tinsley, P. A. (1967) “An Application of Variable Weight Distributed Lags”, Journul of the American
   Statistical     Association,      62, 1277-1290.
Tobin, J. (1969) “A General Equilibrium Approach to Monetary Theory”, Journal of Money, Credit
  and Banking, 1, 15-29.
Trivedi, P. K. (1970a) “A Note on the Application of Almon’s Method of Calculating Distributed Lag
  Coefficients”, Metroeconomica, 22, 281-286.
Trivedi, P. K. (1970b) “The Relation Between the Order-Delivery Lag and the Rate of Capacity
  Utilisation in the Engineering Industry in the United Kingdom, 1958-1967”, Economica, 37,54-67.
Trivedi, P. K. (1975) “Time Series Analysis Versus Structural Models: A Case Study of Canadian
  Manufacturing Behavior”, International   Economic Review, 16. 587-608.
Trivedi, P. K. (1978) “Estimation of a Distributed Lag Model Under Quadratic Loss”, Econometrica,
   46, 1181-1192.
 Trivedi, P. K. and A. R. Pagan (1979) “Polynomial                            Distributed   Lags: A Unified Treatment”,
   Economic        Studies Quarterly,        XXX,     37-49.
 Trivedi, P. K., B. M. S. Lee and J. S. Yeo (1979) “On Using Ridge-Type Estimators for a Distributed
   Lag Model”, unpublished paper, Australian National University.
 Trivedi, P. K. and B. M. S. Lee (1979) “The Effects of Model Misspecification on the Properties of the
   Simple Ridge Estimator”, Discussion Paper 8009, University of Southampton.
 Trivedi, P. K. and B. M. S. Lee (1981) “Seasonal Variability in a Distributed Lag Model”, Review of
   Economic        Studies,   48, 497-505.
Trivedi, P. K. (1982) “Distributed Lags, Aggregation and Compounding: A Suggested Interpretation”,
  unpublished paper, Australian National University.
Ullah, A. and B. Raj (1979) “A Distributed Lag Estimator Derived from Shiller’s Smoothness Priors”,
   Economic        Lxtters,   2, 219-223.
Vinod, H. D. (1978) “A Survey of Ridge Regression and Related Techniques for Improvements Over
  Ordinary Least Squares”, Review of Economics and Statistics, 60, 121-131.
Waelbroeck, J. K. (1976) (ed.), The Mode/s of Project Link. Amsterdam: North-Holland.
1100                                                                                   D. F. Hendrv   et al.


Wald, A. (1943) “ Tests of Statistical Hypotheses Concerning Several Parameters When the Number of
  Observations is Large”, Transactions of the American Mathematical Society, 54, 426-482.
Wall, K. D. (1976) “FjML Estimation of Rational Distributed Lag Structural Form Models”, Annals
  of Economtc     and Social Measurement,   5, 53-63.
Wall, K. D., A. J. Preston, J. W. Bray and M. H. Peston (1975) “Estimates of a Simple Control Model
 of the U.K. Economy”, Chapter 14 in G. A. Renton (ed.), Modelling the Economy. London:
 Heinemann Educational Books.
Wallis, K. F. (1969) “Some Recent Developments in Applied Econometrics: Dynamic Models and
 Simultaneous Equation Systems”, Journal of Economic Literature, 7, 771-796.
Wallis, K. F. (1977) “Multiple Time Series Analysis and the Final Form of Econometric Models”.
  Econometrica,     45, 1481-1498.
Wallis, K. F. (1980) “Econometric           Implications   of the Rational   Expectations   Hypothesis”,
  Econometrica,     48, 49-73.
White, H. (1980) “Non-linear Regression on Cross-Section Data”, Econometnca. 48. 721-746.
Wold, H. (1959) “Ends and Means in Econometric Model Building”, pp. 355-434 in U. Grenander
  (ed.) Probability and Statistics. New York: John Wiley and Sons.
Yancey, T. A. and G. G. Judge (1976) “A Monte Carlo Comparison of Traditional and Stein-Rule
  Estimators Under Squared Error Loss”, Journal of Econometrics, 4, 285-294.
Yeo, J. S. (1976) “Testing the Length of the Almon Lag Using the Anderson Procedure”, London
  School of Economics, mimeo.
Yeo, J. S. (1978) “Multicollinearity and Distributed Lags”, unpublished paper, London School of
  Economics.
Yule, G. U. (1926) “Why do we Sometimes get Nonsense-Correlations Between Time-Series?-A
  Study in Sampling and the Nature of Time-Series”, Journal of the Royal Statistical Society, 89, l-64.
Zellner. A. and F. I. Palm (1974) “Time Series Analysis and Simultaneous Equation Econometric
  Models”, Journal of Econometrics, 2, 17-54.
Zellner. A. (1979) “Statistical Analysis of Econometric Models”, Journal of the American Statistical
  Association,    74. 628-643.



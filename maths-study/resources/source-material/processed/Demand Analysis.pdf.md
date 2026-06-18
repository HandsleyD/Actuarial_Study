---
normalized_id: shared-pdf-reference-demand-analysis
exam_code: SHARED
material_scope: demand analysis.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Demand Analysis.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-demand-analysis

1768                                                                      A. Deaton




0.     Introduction

The empirical analysis of consumer behavior has always held a central position in
econometrics and many of what are now standard techniques were developed in
response to practical problems in interpreting demand data. An equally central
position in economic analysis is held by the theory of consumer behavior which
has provided a structure and language for model formulation and data analysis.
Demand analysis is thus in the rare position in econometrics of possessing long
interrelated pedigrees on both theoretical and empirical sides. And although the
construction of models which are both theoretically and empirically satisfactory is
never straightforward, no one who reads the modem literature on labor supply,
on discrete choice, on asset demands, on transport, on housing, on the consump-
tion function, on taxation or on social choice, can doubt the current vigor and
power of utility analysis as a tool of applied economic reasoning. There have been
enormous advances towards integration since the days when utility theory was
taught as a central element in microeconomic courses but then left unused by
applied economists and econometricians.
   Narrowly defined, demand analysis is a small subset of the areas listed above,
referring largely to the study of commodity demands by consumers, most usually
based on aggregate data but occasionally, and more so recently, on cross-sections
or even panels of households. In this chapter, I shall attempt to take a somewhat
broader view and discuss, if only briefly, the links between conventional demand
analysis and such topics as labor supply, the consumption function, rationing,
index numbers, equivalence scales and consumer surplus. Some of the most
impressive recent econometric applications of utility theory are in the areas of
labor supply and discrete choice, and these are covered in other chapters. Even so,
a very considerable menu is left for the current meal. Inevitably, the choice of
material is my own, is partial (in both senses), and does not pretend to be a
complete survey of recent developments. Nor have I attempted to separate the
economic from the statistical aspects of the subject. The strength of consumer
demand analysis has been its close articulation of theory and evidence and the
theoretical advances which have been important (particularly those concerned
with duality) have been so precisely because they have permitted a more intimate
contact between the theory and the interpretation of the evidence. It is not
possible to study applied demand analysis without keeping statistics and ew-
nomic theory simultaneously in view.
   The layout of the chapter is as follows. Section 1 is concerned with utility and
the specification of demand functions and attempts to review the theory from the
Ch. 30: Demand Analysis                                                                     1169

point of view of applied econometrics.               Duality aspects are particularly         em-
phasized. Section 2 covers what I shall call ‘naive’ demand analysis, the estima-
tion and testing, largely on aggregate time series data, of ‘complete’ systems of
demand equations         linking quantities demanded        to total expenditure    and prices.
The label “naive” implies simplicity neither in theory nor in econometric                   tech-
nique. Instead, the adjective refers to the belief that, by itself, the simple, static,
neoclassical    model of the individual consumer could (or should) yield an adequate
description    of aggregate time-series data. Section 3 is concerned with microeco-
nomic or cross-section          analysis including     the estimation    of Engel curves, the
treatment     of demographic        variables, and the particular      econometric    problems
which arise in such contexts. There is also a brief discussion of the econometric
issues that arise when consumers face non-linear              budget constraints.    Sections 4
and 5 discuss two theoretical topics of considerable              empirical importance,      sep-
arability and aggregation. The former provides the analysis underpinning                 econo-
metric analysis of subsystems on the one hand and of aggregates, or supersystems,
on the other. The latter provides what justification              there is for grouping over
different consumers.        Econometric     analysis of demand under conditions of ration-
ing or quantity      constraints    is discussed in Section 6. Section 7 provides a brief
overview of three important topics which, for reasons of space, cannot be covered
in depth, namely, intertemporal            demand analysis, including      the analysis of the
consumption       function and of durable goods, the choice over qualities, and the
links between demand analysis and welfare economics, particularly                  as concerns
the measurement        of consumer surplus, cost-of-living index numbers and the costs
of children. Many other topics are inevitably omitted or dealt with less fully than
is desirable;    some of these are covered in earlier surveys by Goldberger              (1967),
Brown and Deaton (1972) and Barten (1977).



1.     Utility and the specification of demand



1.1.    Assumptions for empirical analysis

As is conventional,    I begin with the specification of preferences. The relationship
“is at least as good as”, written 2, is assumed to be reflexive, complete, transitive
and continuous.      If so, it may be represented         by a utility function, u(q) say,
defined over commodity        vector q with the property that the statement        qA > qB
for vectors qA and qE is equivalent to the statement v(qA) 2 u(qB). Clearly, for
most purposes, it is more convenient        to work with a utility function than with a
preference   ordering.   There seem few prior empirical grounds for objecting to
reflexivity, completeness,    transitivity or continuity,    nor indeed to the assumption
that u(q) is monotone       increasing in q. Again, for empirical work, there is little
1770                                                                                             A. Deaton

objection to the assumption that preferences are conuex, i.e. that for qA z qB, and
for 0 I X I 1, AqA + (1 - A)qB 2 qB. This translates immediately into quasi-con-
cavity of the utility function u(q), i.e. for qA, qB, 0 I A 5 1,


       u(qA)   2 u(q’)       implies     u(XqA+(l-A)qB)              2u(qB).                           (1)


Henceforth, I shall assume that the consumer acts so as to maximise the
monotone, continuous and quasi-concave utility function u(q).
   It is common, in preparation for empirical work, to assume, in addition to the
above properties, that the utility function is strictly quasi-concave (so that for
0 < X < 1 the second inequality in (1) is strict), dl&mtiable, and that all goods
are essential, i.e. that in all circumstances all goods are bought. All these
assumptions are convenient in particular situations. But they are all restrictive
and all rule out phenomena that are likely to be important in some empirical
situations. Figure 1 illustrates in two dimensions. All of the illustrated indiffer-
ence curves are associated with quasi-concave utility functions, but only A is
either differentiable or strictly quasi-concave. The flat segments on B and C
would be ruled out by strict quasi-concavity; hence, strictness ensures single-val-




                                                                               41
        Figure 1   Indifference curves illustrating quasi-concavity, differentiability and essential
                                                   goods.
Ch. 30: Demand Analysis                                                            1771

ued demand functions. Empirically, flats are important because they represent
perfect substitutes; for example, between S and T on B, the precise combination
of q1 and q2 makes no difference and this situation is likely to be relevant, say,
for two varieties of the same good. Non-differentiabilities occur at the kink points
on the curves B and C. With a linear budget constraint, kinks imply that for
relative prices within a certain range, two or more goods are bought in fixed
proportions. Once again, this may be practically important and fixed relationships
between complementary goods are often a convenient and sensible modelling
strategy. The n-dimensional analogue of the utility function corresponding to C is
the fixed coefficient or Leontief utility function

                                                                                    (2)

For positive parameters ai,. . . , a,. Finally curve A illustrates the situation where
q2 is essential but q1 is not. As q2 tends to zero, its marginal value relative to that
of q1 tends to infinity along any given inditIerence curve. Many commonly used
utility functions impose this condition which implies that q2 is always purchased
in positive amounts. But for many goods, the behavior with respect to q1 is a
better guide; if p1 > p&l, the consumer on indifference curve A buys none of ql.
Data on individual households always show that, even for quite broad commodity
groups, many households do not buy all goods. It is therefore necessary to have
models that can deal with this fact.          _



1.2.    Lugrangians and matrix methoa3

If u(q) is strictly quasi-concave and differentiable, the maximization of utility
subject to the budget constraint can be handled by Lagrangian techniques.
Writing the constraint pa q = x for price vector p and total expenditure x, the
first-order conditions are

       au@!_ = xp,
                   1)                                                              (3)
         8%

which, under the given assumptions, solve for the demand functions

       4i=giCx,   PI*                                                              (4)

For example, the linear expenditure system has utility function

       u = IT(q, - #,                                                               (5)
1772                                                                         A. Deaton

for parameters y and 8, the first-order conditions of which are readily solved to
give the demand functions

       Pi4i=PiYi+BiBi(x-P*Y)*                                                      (6)

In practice, the first-order conditions are rarely analytically soluble even for quite
simple formulations (e.g. Houthakker’s (1960) “direct addilog” u = &qp),          nor
is it at all straightforward to pass back from given demand functions to a closed
form expression for the utility function underlying them, should it indeed exist.
   The generic properties of demands are frequently derived from (3) by total
differentiation and matrix inversion to express dq as a function of dx and dp, the
so-called “fundamental matrix equation” of consumer demand analysis, see
Barten (1966) originally and its frequent later exposition by The& e.g. (1975b, pp.
14lI), also Phlips (1974, 1983, p. 47), Brown and Deaton (1972, pp. 1160-2).
However, such an analysis requires that u(q) be twice-differentiable, and it is
usually assumed in addition that utility has been monotonically transformed so
that the Hessian is non-singular and negative definite. Neither of these last
assumptions follows in any natural way from reasonable axioms; note in particu-
lar that is is not always possible to transform a quasi-concave function by means
of a monotone increasing function into a concave one, see Kannai (1977) Afriat
(1980). Hence, the methodology of working through first-order conditions in-
volves an expansive and complex web of restrictive and unnatural assumptions,
many of which preclude consideration of phenomena requiring analysis. Even in
the hands of experts, e.g. the survey by Barten and Bohm (1980) the analytical
apparatus becomes very complex. At the same time, the difficulty of solving the
conditions in general prevents a close connection between preferences and
demand, between the a priori and the empirical.



1.3.    Duality, cost functions and demands

There are many different ways of representing preferences and great convenience
can be obtained by picking that which is most appropriate for the problem at
hand. For the purposes of generating empirically useable models in which
quantities are a function of prices and total expenditure, dual representations are
typically most convenient. In this context, duality refers to a switch of variables,
from quantities to prices, and to the respecification of preferences in terms of the
latter. Define the cost function, sometimes expenditure function, by


       44 P> = (mpP%            +I)   2 u>.
Ch. 30: Demand Analysis                                                            1773

If x is the total budget to be allocated, then x will be the cheapest way of
reaching whatever u can be reached at p and x, so that

     c(u,p)    =x.

The function c(u, p) can be shown to be continuous in both its arguments,
monotone increasing in u and monotone non-decreasing in p. It is linearly
homogeneous and concuue in prices, and first and second differentiable almost
everywhere. It is strictly quasi-concave if u(q) is difirentiable    and everywhere
differentiable if u(q) is strictly quasi-concave. For proofs and further discussions
see McFadden (1978), Diewert (1974a), (1980b) or, less rigorously, Deaton and
Muellbauer (1980a, Chapter 2).
   The empirical importance of the cost function lies in two features. The first is
the ‘derivative property’, often known as Shephard’s Lemma, Shephard (1953). By
this, whenever the derivative exists


      WG P) =h,(u,p)=q,.
         aPi
                                                                                   (9)

The functions hi(tc, p) are known as Hicks&         demands, in contrast to the
Marshallian    demands gi(x, p). The second feature is the Shephard-Uzawa
duality theorem [again see McFadden (1978) or Diewert (1974a), (1980b)l which
given convex preferences, allows a constructive recovery of the utility function
from the cost function. Hence, all the information in u(q) which is relevent to
behavior and empirical analysis is encoded in the function c(u, p). Or put
another way, any function c(u, p) with the correct properties can serve as an
alternative to u(q) as a basis for empirical analysis. The direct utility function
need never be explicitly evaluated or derived; if the cost function is correctly
specified, corresponding preferences always exist. The following procedure is thus
suggested in empirical work. Starting from some linearly homogeneous concave
cost function c(u, p), derive the Hicksian demand functions hi(u, p) by differ-
entiation. These can be converted into Marshallian demands by substituting for u
from the inverted form of (8); this is written

     u=#(x9P),                                                                    00)
and is known as the indirect utility function. (The original function u(q) is the
direct utility function and the two are linked by the identity \I,(x, p) = u { g(x, p)}
for utility m aximizmg demands g(x, p)). Substituting (10) into (9) yields

     qi=hi(u,p)=hi{rC,(x,P),P}=gi(x,P),                                           01)
1774                                                                       A. Dearon

which can then be estimated. Of course, the demands corresponding to the
original cost function may not fit the data or may have other undesirable
properties for the purpose at hand. To build this back into preferences, we must
be able to go from gi(x, p) back to c(u, p). But, from Shephard’s Lemma,
qi = gi(x, p) may be rewritten as


       ac(aud.p)
            =gi{c(u,p),P)9                                                     (12)
             I




which may be solved for c(u, p) provided the mathematical integrability condi-
tions are satisfied. These turn out to be equivalent to Slutsky symmetry, so that
demand functions displaying symmetry always imply some cost function, see, for
example, Hurwicz and Uzawa (1971) for further details. If the Slutsky matrix is
also negative semi-definite (together with symmetry, the ‘economic’ integrability
condition), the cost function will be appropriately concave which it must be to
represent preferences. This possibility, of moving relatively easily between prefer-
ences and demands, is of vital importance if empirical knowledge is to be linked
to economic theory.
   An alternative and almost equally straightforward procedure is to start from
the indirect utility function J/(x, p). This must be zero degree homogeneous in x
and p and quasi-convex in p and Shephard’s Lemma takes the form

                           - a4(x?    P)/aPi
       4i=gi(x3P)=                                                             (13)
                            Wk        PVJX       ’

a formula known as Roy’s identity, Roy (1942). This is sometimes done in
“normalized” form. Clearly, Jl(x, p) = \cI(l, p/x) = q*(r) where r = p/x is the
vector of normalized prices. Hence, using $* instead of 4, Roy’s identity can be
written in the convenient form


            Pi4i         8$*/a10gri            alog+,  P)
       wi=X= C aG*/alogrk=                        aiogpi 9
                     k

where the last equality follows from rewriting (9).
   One of the earliest and best practical examples of the use of these techniques is
Samuelson’s (1947-8) derivation of the utility function (5) from the specification
of the linear expenditure system suggested earlier by Klein and Rubin (1947-8).
A more recent example is provided by the following. In 1943, Holbrook Working
suggested that a useful form of Engel curve was given by expressing the budget
share of good i, wi, as a linear function of the logarithm of total expenditure.
Ch. 30: Demand Analysis                                                          1115

Hence,

     wi = ai + &ln X,                                                           05)

for parameters (Y and /3, generally functions of prices, and this form was
supported in later comparative tests by Leser (1963). From (14) the budget shares
are the logarithmic derivatives of the cost function, so that (15) corresponds to
differential equations of the form

      alnc(u, P)
          alnp,        = ai( P>+ai(          P)lnctu,    P)9                    06)

which give a solution of the general form

     lnc(u,p)=ulnb(p)+(l-u)lna(p),                                              (17)

where (ui(p) = (ailn b - biln a)/@ b -In a) and pi(p) = bi/(ln b -In a) for ai
 = 8 In u/8 In pi and bi = d In b/a In pi. The form (17) gives the cost function as a
utility-weighted geometric mean of the linear homogeneous functions u(p) and
b(p) representing the cost functions of the very poor (U = 0) and the very rich
(U = 1) respectively. Such preferences have been called the PIGLOG class by
Muellbauer (1975b); (1976a), (1976b). A full system of demand equations within
the Working-Leser class can be generated by suitable choice of the functions
b(p) and u(p). For example, if

     lnu(p)=u,+C~klnPk+~CCYk*mlnpklnPm,
                                                 k   m
                                                                                08)
     lnb(p)       =ha(p)+&flpfi,

we reach the “almost ideal demand system” (AIDS) of Deaton and Muellbauer
(1980b) viz




and yij = +(yiT + y,:). A variation on the same theme is to replace the geometric
mean (17) by a mean of order E

     c(u,p)=        {ub(p)‘+(l-~)u(P)“}“~,                                      (20)
1776                                                                                 A. Deaton

with Engel curves


       w, = ai + pix-‘.                                                                  (21)
This is Muellbauer’s        PIGL class; equation (21) in an equivalent Box-Cox form,
has recently appeared in the literature as the “generalized             Working model”, see
Tran van Hoa, Ironmonger,            and Manning (1983) and Tran van Hoa (1983).
   I shall return to these and similar models below, but for the moment note how
the construction       of these models allows empirical knowledge of demands to be
built into the specification        of preferences. This works at a less formal level too.
For example, prior information          may relate to the shape of indifference curves, say
that two goods are poor substitutes or very good substitutes as the case may be.
This translates     directly into curvature properties of the cost function; ‘kinks’ in
quantity space turn into ‘flats’ in price space and vice versa so that the specifica-
tion can be set accordingly.           For further details, see the elegant diagrams in
McFadden      (1978).
   The duality approach          also provides a simple demonstration           of the generic
properties of demand functions which have played such a large part in the testing
of consumer       rationality,    see Section 2 below. The budget constraint           implies
immediately      that the demand          functions add-up (trivially)     and that they are
zero-degree     homogeneous        in prices and total expenditure        together (since the
budget constraint       is unaffected by proportional    changes in p and x). Shephard’s
Lemma (9) together with the mild regularity              conditions    required for Young’s
Theorem implies that


        ah,      d=c                 ah.
                              a=c __.A
        ap, .T J$&        = Jpi Jp,  ap, ’                                               (22)

so that, if sij, the Slutsky substitution   term is ah,/ap,,    the matrix of such terms,
S, is symmetric. Furthermore,     since c( u, p) is a concave function of p, S must be
negative semi-definite. (Note that the homogeneity       of c( u, p) implies that p lies in
the nullspace of S). Of course, S is not directly observed, but it can be evaluated
using (12); differentiating  with respect to pj gives the Slutsky equation.



       'ij=
              GTi
              G   +
                      agi
                      xqj.                                                               (23)


Hence to the extent that agi/apj    and ag,/ax  can be estimated econometrically,
symmetry and negative semi-definiteness   can be checked. I shall come to practical
attempts to do so in the next section.
Ch. 30. Demand Analysis                                                               1-m

1.4.    Inverse demand functions

In practical applications, it is occasionally necessary to estimate prices as a
function of quantities rather than the other way round. An approach to specifica-
tion exists for this case which is precisely analogous to that suggested above.
From the direct utility function and the first-order conditions (lo), apply the
budget constraint p. q = x to give

       Pi4i          i3u/alnq,
       -=                                                                             (24)
         x          Cau/alnq,’
                    k

which is the dual analogue of (14), though now determination goes from the
quantities q to the normalized prices p/x. Alternatively, define the distance
function d(u, q), dual to the cost function, by

       dhq)=~{p~q;                   #(Lpbu}.                                         (25)


The distance            function has properties   analogous to the cost function   and, in
particular,

                                                                                      (26)
are the inverse compensated demand functions relating an indifference curve u
and a quantity ray q to the price to income ratios at the intersection of q and u.
See McFadden (1978), Deaton (1979) or Deaton and Muellbauer (1980a, Chapter
2.7) for fuller discussions.
   Compensated and uncompensated inverse demand functions can be used in
exactly the same way as direct demand functions and are appropriate for the
analysis of situations when quantities are predetermined and prices adjust to clear
the market. Hybrid situations can also be analysed with some prices fixed and
some quantities fixed; again see McFadden (1978) for discussion of “restricted”
preference representation functions. Note one final point, however. The Hessian
matrix of the distance function d(u, q) is the Antonelli matrix A with elements

                    a*d             aai(u,   4)
       a..=-=a..=
                aqiaqj                                                                (27)
         1~                    ~1      aqj ’
which can be used to define q-substitutes and q-complements just as the Slutsky
matrix defines p-substitutes and p-complements, see Hicks (1956) for the original
discussion and derivations. Unsurprisingly the Antonelli and Slutsky matrices are
intimately related and given the close parallel been duality and matrix inversion,
1778                                                                                 A. Decrton

it is appropriate that they should be generalised  inverses of one another. For
example, using v to denote the vector of price or quantity partial derivatives, (9)
and (26) combine to yield


       q=vc{%v+,              vc(w)}}.                                                   (28)
Hence, differentiating      with respect to p/x   and repeatedly   applying   the chain rule,
we obtain at once

       S*=S*AS*.                                                                         (29)

Similarly,

       A= AS*A,                                                                          (30)

where S * = xS. Note that the homogeneity restrictions imply Aq = S *p = 0 which
together with (29) and (30) complete the characterization  as generalized inverses.
These relationships  also allow passage from one type of demand function          to
another so that the Slutsky matrix can be calculated from estimates of indirect
demand functions    while the Antonelli matrix may be calculated from the usual
demands. The explicit formula for the latter is easily shown to be


       A=    (xS+qq’)-‘-~-~pp’,                                                          (31)

with primes denoting transposition,         see Deaton (1981a). The Antonelli matrix has
important      applications   in measuring quantity index numbers,       see, e.g. Diewert
(1981, 1983) and in optimal tax theory, see Deaton (1981a). Formula (31) allows
its calculation     from an estimate of the Slutsky matrix.
   This brief review of the theory is sufficient to permit discussion of a good deal
of the empirical        work in the literature.  Logically, questions of aggregation   and
separability     ought to be treated first, but since they are not required for an
understanding        of what follows, I shall postpone their discussion to Section 4.



2.     Naive demand analysis

Following   Stone’s first empirical application  of the linear expenditure     system in
1954, a good deal of attention      was given in the subsequent      literature    to the
problems   involved in estimating    complete, and generally nonlinear,      systems of
demand equations. Although the issues are now reasonably well understood,            they
deserve brief review. I shall use the linear expenditure   system as representative     of
Ch. 30: Demand Analysis                                                          1779

the class


       Pit4it =_A( PI, xt; ‘)+       Uir7                                       (32)


for commodity i on observation t, parameter vector b, and error uil. For the
linear expenditure system the function takes the form


       fi(    Pty Xt; b)=YiPit+P;(x,-P,.Y).                                     (33)


2.1.         Simultaneity

The first problem of application is to give a sensible interpretation to the quantity
x,. In loose discussion of the theory x, is taken as “income” and is assumed to be
imposed on the consumer from outside. But, if q1 is the vector of commodity
purchases in period t, then (a) only exceptionally is any real consumer given a
predetermined and inflexible limit for total commodity expenditure and (b) the
only thing which expenditures add up to is total expenditure defined as the sum
of expenditures. Clearly then, x, is in general jointly endogenous with the
expenditures and ought to be treated as such, a point argued, for example, by
Summers (1959), Cramer (1969) and more recently by Lluch (1973), Lluch and
Williams (1974). The most straightforward solution is to instrument x, and there
are no shortages of theories of the consumption function to suggest exogenous
variables. However, in the spirit of demand analysis this can be formalized rather
neatly using any intertemporally separable utility function. For example, loosely
following Lluch, an intertemporal or extended linear expenditure system can be
proposed of the form



       Pit4it = PitYit + Pit w-        i C P2Y7k                                (34)
                                       ~=f k


where the yir and pi, parameters are now specific to periods (needs vary over the
life-cycle), W is the current present discounted value of present and future
income and current financial assets, and p:k is the current discounted price of
good k in future period r( p:k = ptk since t is the present). As with any such
system based on intertemporally separable preferences, see Section 4 below, (34)
can be solved for x, by summing the left-hand side over i and the result, i.e. the
consumption function, used to substitute for W. Hence (34) implies the familiar
1780                                                                                         A. Deaton

static linear   expenditure     system, i.e.




where u, = cuil, fit = cp,, and it is assumed, as is reasonable,      that p, # 0. This
not only relates the parameters     in the static version (33) to their intertemporal
counterparts,   but it also gives valuable information      about the structure of the
error term in (32). Given this, the bias introduced       by ignoring the simultaneity
between X, and pi,qir can be studied. For the usual reasons, it will be small if the
equations fit well, as Prais (1959) argued in his reply to Summers (1959). But there
is a rather more interesting possibility. It is easily shown, on the basis of (35), that



        cov(x   f,u )=Cu.k rk -p”
                  It
                                P
                                  c&,,,
                                      ’   k   m
                                                                                                 (36)


where     aii is the (assumed     constant)       covariance   between   uif and Ujt, i.e.


        Cov( Ui,) u,,) = s*pij.                                                                  (37)


where     urs is the    Kronecker     delta. Clearly, the covariance     in (36) is zero if
~k”ik/~ukrn      = pi,/&.    One   specialized   theory which   produces   exactly this rela-
tionship is Theil’s (1971b, 1974,1975a, 1975b, pp. 56-90,1979)            “rational random
behaviour”     under which the variance, covariance           matrix of the errors u,, is
rendered proportional       to the Slutsky matrix by consumers’ trading-off the costs of
exact maximization        against the utility losses of not doing so. If this model is
correct, there is no simultaneity         bias, see Deaton (1975a, pp. 161-8) and Theil
(1976, pp. 4-6, 80-82) for applications.           However, most econometricians       would
tend to view the error terms as reflecting, at least in part, those elements not
allowed for by the theory, i.e. misspecifications,         omitted variables and the like.
Even so, it is not implausible             that (36) should be close to zero since the
requirement     is that error covariances between each category and total expenditure
should be proportional       to the marginal propensity to spend for that good. This is
a type of “error separability”         whereby omitted variables influence demands in
much the same way as does total outlay.
    In general, simultaneity     will exist and the issue deserves to be taken seriously; it
is likely to be particularly     important in cross-section work, where occasional large
purchases affect both sides of the Engel curve. Ignoring it may also bias the other
tests discussed below, see Altfield (1985).
Ch. 30: Demand Analysis                                                            1781

2.2.    Singularity of the variance - covariance matrix


The second problem arises from the fact that with x, dejked as the sum of
expenditures, expenditures automatically add-up to total expenditure identically,
i.e. without error. Hence, provided fi in (32) is properly chosen, we must have

       CPitqit=Xt;          Ch(Pt,xt;   b)=xt;      CUit’O.                       (38)
        i                                            i

Writing D as the n x n contemporaneous        variance-covariance   matrix of the ui,‘s
with typical element wij, i.e.

       E ( Uit3ujs ) = GtsWij9                                                    (39)

then the last part of (38) clearly implies

       &ij=      ~oij=o,                                                          (40)
        i         i

so that the variance-covariance   matrix is singular. If (32) is stacked in the usual
way as an nT observation regression, its covariance matrix is Q@1 which cannot
have rank higher than (n - l)T. Hence, the usual generalized least squares
estimator or its non-linear analogue is not defined since it would require the
non-existent inverse Q-%1.
   This non-existence is, however, a superficial problem. For a set of equations
such as (32) satisfying (38), one equation is essentially redundant and all of its
parameters can be inferred from knowledge of those in the other equations.
Hence, attempting to estimate all the parameters in all equations is equivalent to
including some parameters more than once and leads to exactly the same
problems as would arise if, for example, some independent variables were
included more than once on the right hand side of an ordinary single-variable
regression. The solution is obviously to drop one of the equations and estimate
the resulting (n - 1) equations by GLS, Zelhrer’s (1962) seemingly unrelated
regressions estimator (SURE), or similar technique. Papers by McGuire, Farley,
Lucas and Winston (1968) and .by Powell (1969) show that the estimates are
invariant to the particular equation which is selected for omission. Barten (1969)
also considered the maximum-likelihood estimation of such systems ‘when the
errors follow the multivariate normal assumption. If 9, is the variance-covari-
ante matrix of the system (32) excluding the nth equation, a sample of T
observations has a log-likelihood conditional on normality of


                                                                                  (41)
1782                                                                            A. Dearon

where u(n) is the (n - 1)-vector of uit excluding element n. Barten defines a new
non-singular matrix V by

       V = S2+ tcii,                                                                (42)

where i is the normalized vector of units, i.e. ii =1/n,     and 0 < K < co. Then (41)
may be shown to be equal to


       ln~=${lnu+lnn-(n-I)ln2?r-lndetV}-+                     5 u;V-‘u,.            (43)
                                                              t=1


This formulation establishes that the likelihood is independent of the equation
deleted (and incidentally of K since (41) does not depend on it) and also returns
the original symmetry to the problem. However, in practice, the technique of
dropping one equation is usually to be preferred since it reduces the dimension of
the parameter vector to be estimated which tends to make computation easier.
   Note two further issues associated with singularity. First, if the system to be
estimated is a “subsystem” of commodities that does not exhaust the budget, the
variance covariance matrix of the residuals need not, and usually will not be
singular. In consequence, SURE or FIML (see below) can be carried out directly
on the subsystem. However, it is still necessary to assume a non-diagonal
variance-covariance    matrix; overall singularity precludes all goods from having
orthogonal errors and there is usually no good reason to implicitly confine all the
off-diagonal covariances to the omitted goods. Second, there are additional
complications if the residuals are assumed to be serially correlated. For example,
in (32), it might be tempting to write



for serially uncorrelated   errors Ed,.If R is the diagonal matrix of pi’s, (44) implies
that

       52=RS2R+I,                                                                   (45)

where 2 is the contemporaneous variance-covariance          matrix of the E’S. Since
Oi = Xi = 0, we must have s2p = 0, which, since i spans the null space of A&
implies that p a i, i.e. that all the pi’s are the same, a result first established by
Bemdt and Savin (1975). Note that this does not mean that (44) with p, = p for
all i is a sensible specification for autocorrelation in singular systems. It would
seem better to allow for autocorrelation at an earlier stage in the modeling, for
example by letting uir be autocorrelated in (34) and following through the
consequences for the compound errors in (35). In general, this will imply vector
Ch. 30: Demand Analysis                                                         1783

autoregressive structures, as, for example, in Guilkey and Schmidt (1973) and
Anderson and Blundell(1982). But provided autocorrelation is handled in a way
that respects the singularity (as it should be), so that the omitted equation is not
implicitly treated differently from the others, then it will always be correct to
estimate by dropping one equation since all the relevant information is contained
in the other (n - 1).


2.3.   Estimation

For estimation purposes, rewrite (32) in the form

                                                                               (46)

with t =l,..., T indexing observations and i=l , . . . ,(n - 1) indexing goods. I
shall discuss only the case where uti are independently and identically distributed
as multivariate normal with zero mean and nonsingular covariance matrix 0. [For
other specifications, see, e.g. Woodland (1979)]. Since s2 is not indexed on t,
homoskedasticity is being assumed; this is always more likely to hold if the y,,‘s
are the budget shares of the goods, not quantities or expenditures. Using budget
shares as dependent variables also ensures that the R2 statistics mean something.
Predicting better than wit = (Y~is an achievement (albeit a mild one), while with
quantities or expenditures, R2 tend to be extremely high no matter how poor the
model.
   Given the variance-covariance matrix s2, typical element wij, the MLE’s of p,
p say, satisfy the first-order conditions, for all i,




where tik’ is the (k, I)th element of 0-l. These equations also define the linear or
non-linear GLS estimator. Since D is usually unknown, it can be replaced by its
maximum likelihood estimator,




If ij,, replaces wij in (47) and (47) and (48) are solved simultaneously, fi and b
are the full-information maximum likelihood estimators (FIML). Alternatively,
some consistent estimator of /3 can be used in place of b in (48) and the resulting
b used in (47); the resulting estimates of /3 will be asymptotically equivalent to
FIML. Zellner’s (1962) seemingly unrelated regression technique falls in this class,
1784                                                                        A. Deaton

see also Gallant (1975) and the survey by Srivastava and Dwivedi (1979) for
variants. Consistency of estimation of 4 in (47) is unaffected by the choice of 0;
the MLE’s of /3 and 52 are asymptotically independent, as calculation of the
information matrix will show. All this is standard enough, except possibly for
computation, but the use of standard algorithms such as those of Marquardt
(1963), scoring, Berndt, Hall, Hall and Hausman (1974) Newton-Raphson,
Gauss-Newton all work well for these models, see Quandt (1984) in this Handbook
for a survey. Note also Byron’s (1982) technique for estimating very large
symmetric systems.
   Nevertheless, there are a number of problems, particularly concerned with the
estimation of the covariance matrix 9, and these may be severe enough to make
the foregoing estimators undesirable, or even infeasible. Taking feasibility first,
note that the estimated covariance matrix b given by (48) is the mean of T
matrices each of rank 1 so that its rank cannot be greater than T. In consequence,
systems for which (n - 1) > T cannot be estimated by FIML or SURE if the
inverse of the estimated b is required. Even this underestimates the problem. In
the linear case (e.g. the Rotterdam system considered below) the demand system
becomes the classical multivariate regression model
       Y=XB+U,                                                                  (49)
with Ya(TX(n’l))matrix,       Xa(TXK)matrix,     B(kX(n-l))andU(TX(n
- 1)). (The nth equation has been dropped). The estimated variance-covariance
matrix from (48) is then


       b= +YfI-        x(xtx)-'xt)y.


Now the idempotent matrix in backets has rank (T - k) so that the inverse will
not exist if n - 1 > T - k. Since X is likely to contain at least n + 2 variables
(prices, the budget and a constant), an eight commodity system would require at
least 19 observations. Non-linearities and cross-section restrictions can improve
matters, but they need not. Consider the following problem, first pointed out to
me by Teun Kloek. The AIDS system (19) illustrates most simply, though the
problem is clearly a general one. Combine the two parts of (19) into a single set of
equations,

       wj, = (aj - &a,) + &ln X, + C (Y;j - Biaj)ln   P/t




            -   iPiE CykhPktlnPmr+          Uir.                                (51)
                   k   m


Not counting      OLD,which is unidentified, the system (without restrictions) has a
Ch. 30: Demand Analysis                                                           1785

total of (2 + n)(n - 1) parameters -(n -1) (Y’Sand /3’s, and n(n-1)            y’s-or
(n + 2) per equation as in the previous example. But now, each equation has
2 + (n - 1)n parameters since all y’s always appear. In consequence, if the
constant, ln x, ln p, and the cross-terms are linearly independent in the sample,
and if T < 2 + (n - l)n, it is possible to choose parameters such that the calcu-
lated residuals for any one (arbitrarily chosen) equation will be exactly zero for all
sample points. For these parameters, one row and one column of the estimated b
will also be zero, its determinant will be zero and the log likelihood (41) or (43)
will be infinite. Hence full information MLE’s do not exist. In such a case, at least
56 observations would be necessary to estimate an 8 commodity disaggregation.
All these cases are variants of the familiar “ undersized sample” problem in FIML
estimation of simultaneous equation systems and they set upper limits to the
amount of commodity disaggregation that can be countenanced on any given
time-series data.
   Given a singular variance-covariance      matrix, for whatever reason, the log
likelihood (41) which contains the term - T/2 logdet 9, will be infinitely large
and FIML estimates do not exist. Nor, in general, can (47) be used to calculate
GLS or SURE estimators if a singular estimate of D is employed. However, there
are a number of important special cases in which (47) has solutions that can be
evaluated even when ti is singular (though it is less than clear what is the status of
these estimators). For example, in the classical multivariate regression model (49)
the solution to (47) is the OLS matrix estimator B = (X’X)-‘X’Y which does not
involve s2, see e.g. Goldberger (1964, pp. 207-12). Imposing identical within
equation restrictions on (49), e.g. homogeneity, produces another (restricted)
classical model with the same property. With cross-equation restrictions of the
form R/3 = r, e.g. symmetry, for stacked j3, fi, the solution to (47) is




which, though involving 52, can still be calculated with Q singular provided the
matrix in square brackets is non-singular. I have not been able to find the general
conditions on (47) that allow solutions of this form, nor is it clear that it is
important to do so. General non-linear systems will not be estimable on under-
sized samples, and except in the cases given where closed-form solutions exist,
attempts to solve (47) and (48) numerically will obviously fail.
   The important issue, of course, is the small sample performance of estimators
based on near-singular or singular estimates of Q. In most time series applications
with more than a very few commodities, fi is likely to be a poor estimator of s2
and the introduction of very poor estimates of 52 into the procedure for parame-
ter estimation is likely to give rise to extremely inefficient estimates of the latter.
Paradoxically, the search for (asymptotic) efficiency is likely to lead, in this case,
1786                                                                       A. Deaton

to much greater (small-sample) inefficiency than is actually obtainable. Indeed it
may well be that estimation techniques which do not depend on estimating s2 will
give better estimates in such situations. One possibility is the minimization of the
truce of the matrix on the right-hand side of (48) rather than its determinant as
required by FIML. This is equivalent to (non-linear) least squares applied to the
sum of the residual sums of squares over each equation and can be shown to be
ML if (the true) 52= a2(1- ii’) for some a*, see Deaton (1975a, p. 39). There is
some general evidence that such methods can dominate SURE and FIML in
small samples, see again Srivastava and Dwivedi (1979). Fiebig and Theil (1983)
and Theil and Rosalsky (1984) have carried out Monte Carlo simulations of
symmetry constrained linear systems, i.e. with estimators of the form (52). The
system used has 8 commodities, 15 observations and 9 explanatory variables so
that their estimate of fi from (50) based on the unconstrained regressions is
singular. Fiebig and Theil find that replacing ti by fi yielded “estimates with
greatly reduced efficiency and standard errors which considerably underestimate
the true variability of these estimates”. A number of alternative specifications for
were examined and Theil and Rosalsky found good performance in terms of MSE
for Deaton’s (1975a) specification 52= a*( a - uu’) where u is the sample mean of
the vector of budget shares and 0 is the diagonal matrix of u’s. Their results also
give useful information on procedures for evaluating standard errors. Define the
matrix A(Z), element aij by


                                                                               (53)


where uk’ is the (k, I)th element of X1, so that { A(@} -’ is the conventionally
used (asymptotic) variance-covariance matrix of the FIML estimates p from (47).
Define also B(& s2) by


                                                                               (54)


Hence, if p* is estimated from (47) using some assumed variance-covariance
matrix a say (as in the experiments reported above), then the variance-covari-
ante matrix V* is given by


                                                                               (55)

Fiebig and Theil’s experiments    suggest good performance     if s2 in B((2, a) is
replaced by 0 from (48).
Ch. 30: Demand Analysis                                                         1787

2.4.   Interpretation     of results

It is perhaps not surprising that authors who finally surmounted the obstacles in
the way of estimating systems of demand equations should have professed
themselves satisfied with their hard won results. Mountaineers are not known for
criticising the view from the summit. And certainly, models such as the linear
expenditure system, or which embody comparably strong assumptions, yield very
high R* statistics for expenditures or quantities with t-values that are usually
closer to 10 than to unity. Although there are an almost infinite number of studies
using the linear expenditure system from which to illustrate, almost certainly the
most comprehensive is that by Lluch, Powell and Williams (1977) who fit the
model (or a variant) to data from 17 developed and developing countries using an
eightfold disaggregation of commodities. Of the 134 R2 statistics reported (for 2
countries 2 of the groups were combined) 40 are greater than 0.99,104 are greater
than 0.95 and only 14 are below 0.90. (Table 3.9 p. 49). The parameter estimates
nearly ah “look sensible” and conform to theoretical restrictions, i.e. marginal
propensities to consume are positive yielding, in the case of the linear expenditure
system, a symmetric negative semi-definite Slutsky matrix. However, as is almost
invariably the case with the linear expenditure system, the estimated residuals
display substantial positive autocorrelation. Table 3.10 in Lluch, Powell and
Williams displays Durbin-Watson statistics for all countries and commodities: of
the 134 ratios, 60 are less than 1.0 and only 15 are greater than 2.0. Very similar
results were found in my own, Deaton (1975a), application of the linear expendi-
ture system to disaggregated expenditures in post-war Britain. Such results
suggest that the explanatory power of the model reflects merely the common
upward time trends in individual and total expenditures. The estimated j3
parameters in (33), the marginal propensities to consume, will nevertheless be
sensible, since the model can hardly fail to reflect the way in which individual
expenditures evolve relative to their sum over the sample as a whole. Obtaining
sensible estimates of marginal propensities to spend on time-series data is not an
onerous task. Nevertheless, the model singularly fails to account for variations
around trend, the high R* statistics could be similarly obtained by replacing total
expenditure by virtually any trending variable, and the t-values are likely to be
grossly overestimated in the presence of the very severe autocorrelation, see, e.g.
Malinvaud (1970, pp. 521-2) and Granger and Newbold (1974). In such cir-
cumstances, the model is almost certainly a very poor approximation to whatever
process actually generated the data and should be abandoned in favor of more
appropriate alternatives. It makes little sense to “treat” the autocorrelation by
transforming the residuals by a Cochrane-Orcutt type technique, either based on
(44) with a common parameter, or using a full vector autoregressive specification.
[See Hendry (1980) for some of the consequences of trying to do so in similar
situations.]
1788                                                                         A. Demon

   In spite of its clear misspecifications, there may nevertheless be cases where the
linear expenditure system or a similar model may be the best that can be done.
Because of its very few parameters, (2n - 1) for an n commodity system, it can be
estimated in situations (such as the LDC’s in Lluch, Powell and Williams book)
where data are scarce and less parsimonious models cannot be used. In such
situations, it will at the least give a theoretically consistent interpretation of the
data, albeit one that is probably wrong. But in the absence of alternatives, this
may be better than nothing. Even so, it is important that such applications be
seen for what they are, i.e. untested theory with “sensible” parameters, and not as
fully-tested data-consistent models.



2.5.   Flexible functional forms

The immediately obvious problem with the linear expenditure system is that it has
too few parameters to give it a reasonable chance of fitting the data. Referring
back to (33) and dividing through by pi, it can be seen that the y, parameters are
essentially intercepts and that, apart from them, there is only one free parameter
per equation. Essentially, the linear expenditure system does little more than fit
bivariate regressions between individual expenditures and their total. Of course,
the prices also enter the model but all own- and cross-price effects must also be
allowed for within the two parameters per equation, one of which is an intercept.
Clearly then, in interpreting the results from such a model, for example, total
expenditure elasticities, own and cross-price elasticities, substitution matrices, and
so on, there is no way to sort out which numbers are determined by measurement
and which by assumption. Certainly, econometric analysis requires the applica-
tion of prior reasoning and theorizing. But it is not helped if the separate
influences of measurement and assumption cannot be practically distinguished.
   Such difficulties can be avoided by the use of what are known as “flexible
functional forms,” Diewert (1971). The basic idea is that the choice of functional
form should be such as to allow at least one free parameter for the measurement
of each effect of interest. For example, the basic linear regression with intercept is
a flexible functional form. Even if the true data generation process is not linear,
the linear model without parameter restrictions can offer a first-order Taylor
approximation around at least one point. For a system of (n - 1) independent
demand functions, (n - 1) intercepts are required, (n - 1) parameters for the total
expenditure effects and n(n - 1) for the effects of the n prices. Bamett (1983b)
offers a useful discussion of how Diewert’s definition relates to the standard
mathematical notions of approximation.
   Flexible functional form techniques can be applied either to demand functions
or to preferences. For the former, take the differential of (9) around some
Ch. 30: Demand Analysis                                                                1789

convenient point, i.e.

     dq, = hi0 + h,,du     + xsijdpj.                                                 (56)


But from (10) and (14)

     dlnu=      dlnx-xw,dlnp,           -(alnc/alnu)-‘,                               (57)
                           k


so that writing dq, = qidlnq,      and multiplying (56) by pi/x,      the approximation
becomes


     widlnqi=ai+bi(dlnx-            w.dlnp)+~cijdlnpj,                                (58)
                                                 i

where

     ai = p,h,,/x




     cij = PiSijPj/X.


Eq. (58), with ai, bi and cij parametrized, is the Rotterdam system of Barten
(1966), (1967), (1969) and Theil (1965), (1975b), (1976). It clearly offers a lo-
cal first-order approximation to the underlying relationship between q, x
and p.
   There is, of course, no guarantee that a function hi( u, p) exists which has ai, bi
and cij constant. Indeed, if it did, Young’s theorem gives hiuj = hij, which, from
(59), is easily seen to hold only if cij = - ( ijijbi - bibi). If imposed, this restriction
would remove the system’s ability to act as a flexible functional form. (In fact, the
restriction implies unitary total expenditure and own-price elasticities). Contrary
to assertions by Phlips (1974,1983), Yoshihara (1969), Jorgenson and Lau (1976)
and others, this only implies that it is not sensible to impose the restriction; it
does not affect the usefulness of (58) for approximation and study of the true
demands via the approximation, see also Barten (1977) and Barnett (1979b).
   Flexible functional forms can also be constructed by approximating preferences
rather than demands. By Shephard’s Lemma, an order of approximation in prices
(or quantities) - but not in utility- is lost by passing from preferences to de-
mands, so that in order to guarantee a first-order linear approximation in the
latter, secondorder    approximation must be guaranteed in preferences. Beyond
1790                                                                            A. Deaton

that, one can freely choose to approximate the direct utility function, the indirect
utility function, the cost-function or the distance function provided only that the
appropriate quasi-concavity, quasi-convexity, concavity and homogeneity restric-
tions are observed. The best known of these approximations is the trunslog,
Sargan (1971) Christensen, Jorgenson and Lau (1975) and many subsequent
applications. See in particular Jorgenson, Lau and Stoker (1982) for a comprehen-
sive treatment. The indirect translog gives a quadratic approximation to the
indirect function J/*(r) for normalized prices, and then uses (14) to derive the
system of share equations. The forms are
       ~*(r)=~,+C~,1nr,+3CCp,*,lnr,lnrj                                             (60)
                                    k i


                                                                                    (61)


where pij = i( pi; + /?;T). In estimating (61) some normalization is required, e.g.
that Ca, = 1. The direct translog approximates the direct utility function as a
quadratic in the vector q and it yields an equation of the same form as (61) with
w, on the left-hand side but with qi replacing r, on the right. Hence, while (61)
views the budget share as being determined by quantity adjustment to exogenous
price to outlay ratios, the direct translog views the share as adapting by prices
adjusting to exogenous’ quantities. Each could be appropriate under its own
assumptions, although presumably not on the same set of data. Yet another
flexible functional form with close affinities to the translog is the second-order
approximation to the cost function offered by the AIDS, eqs. (17) (18) and (19)
above. Although the translog considerably predates the AIDS, the latter is a good
deal simpler to estimate, at least if the price index In P can be adequately
approximated by some fixed pre-selected index.
   The AIDS and translog models yield demand functions that are first-order
flexible subject to the theory, i.e. they automatically possess symmetric substitu-
tion matrices, are homogeneous, and add up. However, trivial cases apart, the
AIDS cost function will not be globally concave nor the translog indirect utility
function globally convex, though they can be so over a restricted range of r (see
below). The functional forms for both systems are such that, by relaxing certain
restrictions, they can be made first-order flexible without theoretical restrictions,
as is the Rotterdam system. For example, in the AIDS, eq. (19) the restrictions
yii = yji and +,,    = 0 can be relaxed while, in the indirect translog, eq. (61)
Pij = Pii can be relaxed and In x included as a separate variable without neces-
sarily assuming that its coefficient equals -cpij.      Now, if the theory is correct,
and the flexible functional form is an adequate representation of it over the data,
the restrictions should be satisfied, or at least not significantly violated. Similarly,
Ch. 30: Demand Analysis                                                          1791

for the Rotterdam system, if the underlying theory is correct, it might be expected
that its approximation by (58) would estimate derivatives conforming to the
theoretical restrictions. From (59), homogeneity requires ccij = 0 and symmetry
cij = cji. Negative semi-definiteness of the Slutsky matrix can also be imposed
(globally for the Rotterdam model and at a point for the other models) following
the work of Lau (1978) and Barten and Geyskens (1975).
   The AIDS, translog, and Rotterdam models far from exhaust the possibilities
and many other flexible functional forms have been proposed. Quadratic logarith-
mic approximations can be made to distance and cost functions as well as to
utility functions. The direct quadratic utility function u = (q - a)‘A(q - a) is
clearly flexible, though it suffers from other problems such as the existence of
“bliss” points, see Goldberger (1967). Diewert (1973b) suggested that G*(r) be
approximated by a “Generalized Leontief” model

                                                      -1

     +*W = (6, + 2 CQfi2       + C Cyijr:/2$‘2
                                                  I
                                                           .
                          i        i   j


This has the nice property that it is globally quasi-convex if Si 2 0 and yii 2 0 for
all i, j; it also generalizes Leontief since with 6, = Si = 0 and yij = 0 for i # j,
#*(r) is the indirect utility function corresponding to the Leontief preferences (2).
Bemdt and Khaled (1979) have, in the production context, proposed a further
generalization of (62) where the 3 is replaced by a parameter, the “generalized
BOX-COX” system.
   There is now a considerable body of literature on testing the symmetry and
homogeneity restrictions using the Rotterdam model, the translog, or these other
approximations, see, e.g. Barten (1967), (1969) Byron (1970a), (1970b), Lluch
(1971), Parks (1969) Deaton (1974a), (1978), Deaton and Muellbauer (1980b),
Theil (1971a), (1975b), Christensen, Jorgensen and Lau (1975) Christensen and
Manser (1977), Bemdt, Darrough and Diewert (1977) Jorgenson and Lau (1976),
and Conrad and Jorgenson (1979). Although there is some variation in results
through different data sets, different approximating functions, different estimation
and testing strategies, and different commodity disaggregations, there is a good
deal of accumulated evidence rejecting the restrictions. The evidence is strongest
for homogeneity, with less (or perhaps no) evidence against symmetry over and
above the restrictions embodied in homogeneity. Clearly, for any one model, it is
impossible to separate failure of the model from failure of the underlying theory,
but the results have now been replicated frequently using many different func-
tional forms, so that it seems implausible that an inappropriate specification is at
the root of the difficulty. There are many possible substantive reasons why the
theory as presented might fail, and I shall discuss several of them in subsequent
sections. However, there are a number of arguments questioning this sort of
1792                                                                         A. Deaton

procedure for testing. One is a statistical issue, and questions have been raised
about the appropriateness of standard statistical tests in this context; I deal with
these matters in the next subsection. The other arguments concern the nature of
flexible functional forms themselves.
   Empirical work by Wales (1977), Thursby and Lovell (1978) Griffin (1978),
Berndt and Khaled (1979), and Guilkey and Lovell (1980) cast doubt on the
ability of flexible functional forms both to mimic the properties of actual
preferences and technologies, and to behave “regularly” at points in price-outlay
space other than the point of local approximation (i.e. to generate non-negative,
downward sloping demands). Caves and Christensen (1980) investigated theoreti-
cally the global properties of the (indirect) translog and the generalized Leontief
forms. For a number of two and three commodity homothetic and non-homo-
thetic systems, they set the parameters of the two systems to give the same pattern
of budget shares and substitution elasticities at a point in price space, and then
mapped out the region for which the models remained regular. Note that
regularity is a mild requirement; it is a minimal condition and does not by itself
suggest that the system is a good approximation to true preferences or behavior.
It is not possible here to reproduce Caves and Christensen’s diagrams, nor do the
authors give any easily reproducible summary statistics. Nevertheless, although
both systems can do well (e.g. when substitutability is low so that preferences are
close to Leontief, the GL is close to globahy regular, and similarly for the translog
when preferences are close to Cobb-Douglas), there are also many cases where
the regular regions are worringly small. Of course, these results apply only to the
translog and the GL systems, but I see no reason to suppose that similar problems
would not occur for the other flexible functional forms discussed above.
   These results raise questions as to whether Taylor series approximations, upon
which most of these functional forms are based, are the best type of approxima-
tions to work with, and there has been a good deal of recent activity in exploring
alternatives. Barnett (1983a) has suggested that Laurent series expansions are a
useful avenue to explore. The Laurent expansion of a function f(x) around the
point x,, takes the form


       f(x)=
               “=
                    ‘c”+-XJ,
                    -00
                                                                                 (63)


and Barnett has suggested generalizing the GL form (62) to


       {4*(r))-‘=a, +2a’v      + v’Av -2b5-   U'BV,                              (64)

where v. = r!12 and 5. = r.w1/2. The resulting demand system has too many
parameters to be estimaied in most applications, and has more than it needs to be
Ch. 30: Demand Analysis                                                            1793

a second-order flexible functional form. To overcome this, Barnett suggests
setting b = 0, the diagonal elements of B to zero, and forcing the off-diagonal
elements of both A and B to be non-negative (the Laurent model (64) like the
GL model (62) is globally regular if all the parameters are non-negative). The
resulting budget equations are


       wi =   a;~, + aiiui +    c LZ~‘~U~CI~
                                       + c b,‘jfijfii /D,                         (65)
                               j+i         j#i


where D is the sum over i of the bracketed expression. Barnett calls this the
miniflex Laurent model. The squared terms guarantee non-negativity, but are
likely to cause problems with multiple optima in estimation. Bamett and Lee
(1983) present results comparable to those of Caves and Christensen’s which
suggest that the miniflex Laurent has a substantially larger regular region than
either translog or GL models.
    A more radical approach has been pioneered by Gallant, see Gallant (1981),
and Gallant and Golub (1983), who has shown how to approximate indirect
utility functions using Fourier series. Interestingly, Gallant replicates the
Christensen, Jorgenson and Lau (1975) rejection of the symmetry restriction,
suggesting that their rejection is not caused by the approximation problems of the
translog. Fourier approximations are superior to Taylor approximations in a
number of ways, not least in their ability to keep their approximating qualities in
the face of the separability restrictions discussed in Section 4 below. However,
they are also heavily parametrized and superior approximation may be being
purchased at the expense of low precision of estimation of key quantities. Finally,
many econometricians are likely to be troubled by the sinusoidal behavior of
fitted demands when projected outside the region of approximation. There is
something to be said for using approximating functions that are themselves
plausible for preferences and demands.
    The whole area of flexible functional forms is one that has seen enormous
expansion in the last five years and perhaps the best results are still to come. In
particular, other bases for spanning function space are likely to be actively
explored, see, e.g. Bamett and Jones (1983).


2.6.    Statistical testing procedures

The principles involved are most simply discussed within a single model and for
convenience I shall use the Rotterdam system written in the form, i = 1,. . . , (n - 1)


       w,dlnq,=~,+b~dlnx,+Cyiidlnpj+Uirr                                          (66)
1794                                                                                      A. Deaton

where dln X, is an abbreviated         form of the term in (58) and, in practice, the
differentials  would be replaced by finite approximations,        see Theil(1975b,      Chapter
2) for details. I shall omit the n th equation as a matter of course so that D stands
for the (n - 1) x (n - 1) variance-covariance        matrix of the u ‘s.
   The u, vectors are assumed to be identically and independently               distributed   as
N(O,52). I shall discuss the testing of two restrictions:       homogeneity ciyij = 0, and
symmetry,     y,j = yii.
    Equation   (66) is in the classical multivariate    regression:orm      (49) so equation
by equation OLS yield: SURE and FIML estimates. Let p be the stacked vector
of OLS estimates and D for the unrestricted          estimate of the variance-covariance
matrix (50). If the matrix of unrestricted      residuals Y - Xi is denoted by I?, (50)
takes the form




Testing homogeneity     is relatively straightforward            since the restrictions are within
equation  restrictions.  A simple way to proceed                is to substitute    y,,, = -cy-ly,,
into (66) to obtain the restricted model

                                      n-1

       w,dlnqj=a,+bjdlnx,+             c    yij(dlnpj-dlnp,),                                  (68)
                                      J=l




and re-estimate.       Once again OLS is SURE is FIML and the restriction                   can be
tested equation       by equation using standard text-book             F-tests. These are exact
tests and no problems            of asymptotic    approximation       arise. For examples, see
Deaton and Muellbauer’s            (1980b) rejections of homogeneity           using AIDS. If an
overall test is desired, a Hotelling T2 test can be constructed                for the system as a
whole, see Anderson            (1958 pp. 207-10)       and Laitinen       (1978). Laitinen     also
documents       the divergence between Hotelling’s T2 and its limiting x2 distribution
when the sample size is small relative to the number of goods, see also Evans and
Savin (1982). In consequence, homogeneity             should always be tested using exact F
or T2 statistics and neuer using asymptotic               test statistics such as uncorrected
Wald, likelihood ratio, or Lagrange multiplier tests. However, my reading of the
literature   is that the rejection of homogeneity          in practice tends to be confirmed
using exact tests and is not a statistical illusion based on the use of inappropriate
asymptotics.
    Testing symmetry poses much more severe problems since the presence of the
cross-equation      restrictions   makes estimation more difficult, separates SUR from
FIML estimators         and precludes exact tests. Almost certainly the simplest testing
procedure      is to use a Wald test based on the unrestricted                  (or homogeneous)
estimates.     Define R as the fn(n -1)X( n - l)( n + 2) matrix representing                    the
Ch. 30: Demand Analysis                                                                       1795

symmetry            (and homogeneity)       restrictions   on /3, so that

        (R/3)‘=        (I$*-?%     Y13-Y31,...,Y(n-l)n-Yn(n-l)).                              (69)


Then,      under      the null hypothesis      of homogeneity      and symmetry   combined,


        w,=P’R’[R(B~(xlx)-l}R’]-lR~,                                                          (70)

is the Wald test statistic which is asymptotically   distributed    as ~f,~~(~_i). Apart
from the calculation       of W, itself, computation    requires no more than OLS
estimation. Alternatively,    the symmetry constrained      estimator B given by (52)
with r = 0, can be calculated. From this, restricted residuals E can be derived,
and a new (restricted) estimate of 9, 0, i.e.

        ji=T-li’E
                                                                                              (71)

The new estimate of b can be substituted       into (52) and iterations continued  to
convergence   yielding the FIML estimators of /3 and Sz. Assume that this process
has been carried out and that (at the risk of some notational    confusion) fi and fi
are the final estimates. A likelihood ratio test can then be computed according to

        W,=Tln{detfi/detfi},                                                                  (72)

and W, is also asymptotically     distributed as ~:,~~(~_i).  Finally, there is the
Lagrange multiplier, or score test, which is derived by replacing h in (70) by 0,
so that


                                                                                              (73)

with again the same limiting distribution.
   From the general results of Berndt and Savin (1977) it is known that W, 2 W,
 2 W,; these are mechanical         inequalities    that always hold, no matter what the
configuration     of data, parameters,         and sample size. In finite samples, with
inaccurate     and inefficient estimates of s2, the asymptotic       theory may be a poor
approximation      and the difference between the three statistics may be very large.
In my own experience          I have encountered        a case with 8 commodities   and 23
observations     where W, was more than a hundred times greater than W,. Meisner
(1979) reports experiments with the Rotterdam system in which the null hypothe-
sis was correct. With a system,of 14 equations and 31 observations,             W, rejected
symmetry      at 5% 96 times out of 100 and at 1% 91 times out of 100. For 11
equations     the corresponding      figures were 50 and 37. Bera, Byron and Jarque
(1981) carried out similar experiments           for W, and W,. From the inequalities,   we
1796                                                                          A. Deaton

know that rejections will be less frequent, but it was still found that, with n large
 relative to (T - k) both W, and W, grossly over-rejected.
    These problems for testing symmetry are basically the same as those discussed
for estimation in (2.3) above; typical time series are not long enough to give
reliable estimates of the variance-covariance    matrix, particularly for large sys-
 tems. For estimation, and for the testing of within equation restrictions, the
difficulties can be circumvented. But for testing cross-equation restrictions, such
as symmetry, the problem remains. For the present, it is probably best to suspend
judgment on the -existing tests of symmetry (positive or negative) and to await
 theoretical or empirical developments in the relevant test statistics. [See Byron
 and Rosalsky (1984) for a suggested ad hoc size correction that appears to work
well in at least some situations.]


2.7.   Non-parametric tests

All the techniques of demand analysis so far discussed share a common approach
of attempting to fit demand functions to the observed data and then enquiring as
to the compatibility of these fitted functions with utility theory. If unlimited
experimentation were a real possibility in economics, demand functions could be
accurately determined. As it is, however, what is observed is a finite collection of
pairs of quantity and price vectors. It is thus natural to argue that the basic
question is whether or not these observed pairs are consistent with any preference
ordering whatever, bypassing the need to specify particular demands or prefer-
ences. It may well be true that a given set of data is perfectly consistent with
utility maximization and yet be very poorly approximated by AIDS, the translog,
the Rotterdam system or any other functional form which the limited imagination
of econometricians is capable of inventing.
    Non-parametric demand analysis takes a direct approach by searching over the
price-quantity vectors in the data for evidence of inconsistent choices. If these do
exist, a utility function exists and algorithms exist for constructing it (or at least
one out of the many possible). The origins of this type of analysis go back to
Samuelson’s (1938) introduction of revealed preference analysis. However, the
recent important work on developing test criteria is due to Hanoch and Rothschild
(1972) and especially to Afriat (1967), (1973), (1976), (1977) and (1981). Unfor-
tunately, some of Afriat’s best work has remained unpublished and the published
work has often been difficult for many economists to understand and assimilate.
 However, as the techniques involved have become more widespread in economics,
 other workers have taken up the topic, see the interpretative essays by Diewert
 (1973a) and Diewert and Parkan (1978) -the latter contains actual test results-and
 also the recent important work by Varian (1982, 1983).
    Afriat proposes that a finite set of data be described as cyclically consistent if,
 for any “cycle”, a, b, c,. . ., r, a of indices, pa. q” 2 pa. qb, ph. qb 2 pb* q’,
Ch. 30: Demand Analysis                                                              1191

. . ..p’q’>p’q”.thenitmustbetruethat          pa-q”=p”-qb,     pbqb=pbqc,...,prqr=
p’q”. He then shows that cyclical consistency is necessary and sufficient for the
finite set of points to be consistent with the existence of a continuous, non-sati-
ated, concave and monotonic utility function. Afriat also provides a constructive
method of evaluating such a utility function. Varian (1982) shows that cyclical
consistency is equivalent to a “generalized axiom of revealed preference” (GARP)
that is formulated as follows. Varian defines q’ as strictly directly revealed
preferred to q, written qiPoq if p’q’ > p’q, i.e. qi was bought at pi even though q
cost less. Secondly qi is revealed preferred to q, written q’Rq, if p’q’ 2 p’qj,
pjqj 2 Pjqk , . . ., p”‘q” 2 p”‘q, for some sequence of observations (q’, q-j,. . ., q”),
i.e. qi is indirectly or directly (weakly) revealed preferred to q. GARP then states
that q’Rqj implies not qjP”qi, and all the nice consequences follow. Varian has
also supplied an efficient and easily used algorithm for checking GARP, and his
methods have been widely applied. Perhaps not surprisingly, the results show few
conflicts with the theory, since on aggregate time series data, most quantities
consumed increase over time so that contradictions with revealed preference
theory are not possible; each new bundle was unobtainable at the prices and
incomes of all previous periods.
    Since these methods actually allow the construction of a well-behaved utility
function that accounts exactly for most aggregate time-series data, the rejections
of the theory based on parametric models (and on semi-parametric models like
Gallant’s Fourier system) must result from rejection of functional form and not
from rejection of the theory per se. Of course, one could regard the non-paramet-
ric utility function as being a very profligately parametrized parametric utility
function, so that if the object of research is to find a reasonably parsimonious
theory-consistent formulation, the non-parametric results are not very helpful.
    Afriat’s and Varian’s work, in particular see Afriat (1981) and Varian (1983),
also allows testing of restricted forms of preferences corresponding to the various
kinds of separability discussed in Section 4. Varian has also shown how to handle
goods that are rationed or not freely chosen, as in Section 6 below. Perhaps most
interesting are the tests for homotheticity, a condition that requires the utility
function to be a monotone increasing transform of a linearly homogeneous
function and which implies that all total expenditure elasticities are unity. Afriat
(1977) showed that for two periods, 0 and 1, the necessary and sufficient
condition for consistency with a homothetic utility function is that the Laspeyres
price index be no less than the Paasche price index, i.e. that

      P’YO    > PW
      po. qo - po. ql *                                                              (74)

For many periods simultaneously, Afriat (1981) shows that the Laspeyres index
between any two periods i and j, say, should be no less than the chain-linked
Paasche index obtained by moving from i to j in any number of steps. Given that
1798                                                                         A. Deaton

no one using any parametric form has ever suggested that all total expenditure
elasticities are unity, it comes as something of a surprise that the Afriat condition
appears to be acceptable for an 111 commodity disaggregation of post-war U.S.
data, see Manser and McDonald (1984).
   Clearly, more work needs to be done on reconciling parametric and non-para-
metric approaches. The non-parametric methodology has not yet been success-
fully applied to cross-section data because it provides no obvious way of dealing
with non-price determinants of demand. There are also difficulties in allowing for
“disturbance terms” so that failures of, e.g. GARP, can be deemed significant or
insignificant, but see the recent attempts by Varian (1984) and by Epstein and
Yatchew (1985).


3.     Cross-section   demand analysis

Although the estimation of complete sets of demand functions on time-series data
has certainly been the dominant concern in demand analysis in recent years, a
much older literature is concerned with the analysis of “family budgets” using
sample-survey data on cross-sections of households. Until after the Second World
War, such data were almost the only sources of information on consumer
behavior. In the last few years, interest in the topic has once again become intense
as more and more such data sets are being released in their individual microeco-
nomic form, and as computing power and econometric technique develop to deal
with them. In the United Kingdom, a regular Family Expenditure Survey with a
sample size of 7000 households has been carried out annually since 1954 and the
more recent tapes are now available to researchers. The United States has been
somewhat less forward in the area and until recently, has conducted a Consumer
Expenditure Survey only once every decade. However, a large rotating panel
survey has recently been begun by the B.L.S. which promises one of the richest
sets of data on consumer behavior ever available and it should help resolve many
of the long-standing puzzles over differences between cross-section and time-series
results. For example, most very long-run time-series data sets which are available
show a rough constancy of the food share, see Kuznets (1962) (1966), Deaton
(1975~). Conversion to farm-gate prices, so as to exclude the increasing compo-
nent of transport and distribution costs and built in services, gives a food share
which declines, but does so at a rate which is insignificant in comparison to its
rate of decline with income in cross-sections [for a survey of cross-section results,
see Houthakker (1957)]. Similar problems exist with other categories of expendi-
ture as well as with the relationship between total expenditure and income.
   There are also excellent cross-section data for many less developed countries, in
particular from the National Sample Survey in India, but also for many other
South-East Asian countries and for Latin America. These contain a great wealth
Ch. 30: Demand Analysis                                                           1799

of largely unexploited data, although the pace of work has recently been increas-
ing, see, for example, the survey paper on India by Bhattacharrya (1978), the
work on Latin America by Musgrove (1978), Howe and Musgrove (1977), on
Korea by Lluch, Powell and Williams (1977, Chapter 5) and on Sri Lanka by
Deaton (1981~).
   In this section, I deal with four issues. The first is the specification and choice
of functional form for Engel curves. The second is the specification of how
expenditures vary with household size and composition. Third, I discuss a group
of econometric issues arising particularly in the analysis of micro data with
particular reference to the treatment of zero expenditures, including a brief
assessment of the Tobit procedure. Finally, I give an example of demand analysis
with a non-linear budget constraint.


3.1.   Forms of Engel curves

This is very much a traditional topic to which relatively little has been added
recently. Perhaps the classic treatment is that of Prais and Houthakker (1955)
who provide a list of functional forms, the comparison of which has occupied
many manhours on many data sets throughout the world. The Prais-Houthakker
methodology is unashamedly pragmatic, choosing functional forms on grounds of
fit, with an attempt to classify particular forms as typically suitable for particular
types of goods, see also Tomqvist (1941), Aitchison and Brown (1954-5), and the
survey by Brown and Deaton (1972) for similar attempts. Much of this work is
not very edifying by modem standards. The functional forms are rarely chosen
with any theoretical model in mind, indeed all but one of Prais and Houthakker’s
Engel curves are incapable of satisfying the adding-up requirement, while, on the
econometric side, satisfactory methods for comparing different (non-nested) func-
tional forms are very much in their infancy. Even the apparently straightforward
comparison between a double-log and a linear specification leads to considerable
difficulties, see the simple statistic proposed by Sargan (1964) and the theoreti-
cally more satisfactory (but extremely complicated) solution in Aneuryn-Evans
and Deaton (1980).
    More recent work on Engel curves has reflected the concern in the rest of the
literature with the theoretical plausibility of the specification. Perhaps the most
general results are those obtained in a paper by Gorman (1981), see also Russell
(1983) for alternative proofs. Gorman considers Engel curves of the general form




where R is some finite set and (p,( ) are a series of functions. If such equations are
1800                                                                                    A. Deaton

to be theory     consistent,     there must exist a cost function   c(u, p) such that



           iilnp,          - ai~(p)@r{lnc(u~p)~~                                            (76)
                          rER

Gorman shows that for these partial differential equations to have a solution, (a)
the rank of the matrix formed from the coefficients arr( p) can be no larger than 3
and (b), the functions  c&( ) must take specific restricted forms. There are three
generic forms for (75), two of which are reproduced below



       Wi=aj(p)+b,(p)lnx+dj(p)                 5    Y~(P)O~~”                               (77)
                                              m=l


       wi=“i(P)+bi(P)              C   CL~~Z(P)~~~+~~(P) C    em(P)X(Tm~                    (78)
                                 U,ES-                  %I~~+

where S is a finite set of elements u,, S_ its negative elements and S, its positive
elements.     A third form allows combinations          of trigonometrical functions  of x
capable of approximating           a quite general function of x. However, note that the
y,, 1-1, and 9, functions in (77) and (78) are not indexed on the commodity
subscript    i, otherwise the rank condition on a,, could not hold.
    Equations    (77) and (78) provide a rich source of Engel curve specifications     and
contain as special cases anumber of important            forms. From (77), with m =l, the
form proposed by Working and Leser and discussed above, see (15), is obtained.
In econometric      specifications,    u,(p) adds to unity and b,(p) to zero, as will their
estimates if OLS is applied to each equation separately. The log quadratic form


                                                                                            (79)

was applied in Deaton (1981~) to Sri Lankan micro household data for the food
share where the quadratic term was highly significant and a very satisfactory fit
was obtained (an R2 of 0.502 on more than 3,000 observations.)                  Note that, while
for a single commodity,       higher powers of In x could be added, doing so in a
complete    system would require cross-equation          restrictions       since, according   to
(77), the ratios of coefficients on powers beyond unity should be the same for all
commodities.      Testing such restrictions  (and Wald tests offer a very simple
method-see      Section 4(a) below) provides yet another possible way of testing the
theory.
   Equation    (78) together with S = { - 1, 1, 2,. . . , r , . . . } gives general polynomial
Engel curves. Because of the rank condition, the quadratic with S = { - 1, l} is as
Ch. 30: Demand Analysis                                                          1801

general as any, i.e.


       Piqi=b:(P)+al(P)X+dr(P)X*,                                               (80)
where b:(p) = bi( p)p,(p)   and dT( p) = di( p)f3,( p). This is the “quadratic
expenditure system” independently derived by Howe, Pollak and Wales (1979)
Pollak and Wales (1978) and (1980). The cost function underlying (80) may be
shown to be


                            a(P)
       4%   P) = 4 P)-    u + y(p> Y                                            (81)

where the links between the ai, br and dr on the one hand and the (Y,j3 and y
on the other are left to the interested reader. (With lnc(u, p) on the left hand
side, (81) also generates the form (79)). This specification, like (79) is also of
considerable interest for time-series analysis since, in most such data, the range of
variation in x is much larger than that in relative prices and it is to be expected
that a higher order of approximation in x than in p would be appropriate.
Indeed, evidence of failure of linearity in time-series has been found in several
studies, e.g. Carlevaro (1976). Nevertheless, in Howe, Pollak and Wales’ (1979)
study using U.S. data from 1929-1975 for four categories of expenditure, tests
against the restricted version represented by the linear expenditure system yielded
largely insignificant results. On grouped British cross-section data pooled for two
separate years and employing a threefold categorization of expenditures, Pollak
and Wales (1978) obtain a x2 values of 8.2 (without demographics) and 17.7
(with demographics) in likelihood ratio tests against the linear expenditure
system. These tests have 3 degrees of freedom and are notionally significant at the
5% level (the 5% critical value of a x: variate is 7.8) but the study is based on
only 32 observations and involves estimation of a 3 X 3 unknown covariance
matrix. Hence, given the discussion in Section 2.6 above, a sceptic could reasona-
bly remain unconvinced of the importance of the quadratic terms for this
particular data set.
   Another source of functional forms for Engel curves is the study of conditions
under which it is possible to aggregate over consumers and I shall discuss the
topic in Section 5 below.



3.2.   Modelling demographic eflects

In cross-section studies, households typically vary in much more than total
expenditure; age and sex composition varies from household to household, as do
the numbers and ages of children. These demographic characteristics have been
1802                                                                         A. Deaton

the object of most attention and I shall concentrate the discussion around them,
but other household characteristics can often be dealt with in the same way, (e.g.
race, geographical region, religion, occupation, pattern of durable good owner-
ship, and so on). If the vector of these characteristics is a, and superscripts denote
individual households, the general model becomes

       q:=   gi(Xh2
                  P? ah)?                                                        (82)
with gi taken as common and, in many studies, with p assumed to be the same
across the sample and suppressed as an argument in the function.
   The simplest methodology is to estimate a suitable linearization of (82) and one
question which has been extensively investigated in this way is whether there are
economies of scale to household size in the consumption of some or all goods. A
typical approach is to estimate

       lnq,~=~i+Pilnxh+yjlnnh+~i,                                                (83)

where nh is the (unweighted) number of individuals in the household. Tests are
then conducted for whether (y, + pi - 1) is negative (economies of scale), zero (no
economies or diseconomies) or positive (diseconomies of scale), since this magni-
tude determines whether, at a given level of per capita outlay, quantity per head
decreases, remains constant, or increases. For example, Iyengar, Jain and
Srinivasan (1968), using (83) on data from the 17th round of the Indian N.S.S.
found economies of scale for cereals and for fuel and light, with roughly constant
returns for milk and milk products and for clothing.
   A more sophisticated approach attempts to relate the effects of characteristics
on demand to their role in preferences, so that the theory of consumer behavior
can be used to suggest functional forms for (82) just as it is used to specify
relationships in terms of prices and outlay alone. Such models can be used for
welfare analysis as well as for the interpretation of demand; I deal with the latter
here leaving the welfare applications to Section 7 below. A fairly full account of
the various models is contained in Deaton and Muellbauer (1980a, Chapter 8) so
that the following is intended to serve as only a brief summary.
   Fully satisfactory models of household behavior have to deal both with the
specification of needs or preferences at the individual level and with the question
of how the competing and complementary needs of different individuals are
reconciled within the overall budget constraint. The second question is akin to the
usual question of social choice, and Samuelson (1956) suggested that family utility
U, might be written as

       Uh= v( d(ql)   ).....,   U”h(q”h)],                                       (84
Ch. 30: Demand Analysis                                                         1803

for the n h individuals in household h. Such a form allows decentralized budgeting
over members subject to central (parental) control over members’ budgets.
Presumably the problems normally inherent in making interpersonal comparisons
of welfare are not severe within a family since, typically, such allocations seem to
be made in a satisfactory manner. Building on this idea, Muellbauer (1976~) has
suggested that utility is equalised within the family (e.g. for a maximin social
welfare function), so that if yr(u, p) is the cost function for individual r, the
family cost function is given by




which, if needs can be linked to, say, age through the y functions, would yield an
applicable specification with strong restrictions on behavior. However, such
models are somewhat artificial in that they ignore the ‘public’ or shared goods in
family consumption, though suitable modifications can be made. They also lack
empirical sharpness in that the consumption vectors of individual family members
are rarely observed. The exception is in the case of family labor supply, see
Chapter 32 of this volume.
   Rather more progress has been made in the specification of needs under the
assumption that the family acts as a homogeneous unit. The simplest possibility is
that, for a given welfare level, costs are affected multiplicatively by some index
depending on characteristics and welfare, i.e.

     Ch(Uh,p, u”) = m(uh, Uh)C(UhY
                                P>Y                                             (86)
where c(uh, p) is the cost function for some reference household type, e.g. one
with a single adult. The index m(ah, uh) can then be thought of as the number of
adult equivalences generated by ah at the welfare level uh. Taking logarithms and
differentiating (86) with respect to In p, gives


                                                                                (87)

which is independent of ah. Hence, if households face the same prices, those with
the same consumption patterns W, have the same uh, so that by comparing their
outlays the ratio of their costs is obtained. By (86), this ratio is the equivalence
scale m(uh, uh). This procedure derives directly from Engel’s (1895) pioneering
work, see Prais and Houthakker (1955). In practice, a single good, food, is usually
used although there is no reason why the model cannot be applied more generally
under suitable specification of the m and c functions in (86), see e.g. Muellbauer
1804                                                                        A. Deafon

(1977). For examples of the usual practice, see Jackson (1968) Orshansky (1965)
Seneca and Taussig (1971) and Deaton (1981~).
   Although the Engel model is simple to apply, it has the long recognised
disadvantage of neglecting any commodity specific dimension to needs. Common
observation suggests that changes in demographic composition cause substitution
of one good for another as well as the income effects modelled by (86) and (87).
In a paper of central importance to the area, Barten (1964) suggested that
household utility be written


       Uh= u(q*),                                                               (88)
       q: = qi/mi(uh).                                                          (89)

So that, using Pollak and Wales’ (1981) later terminology, the demographic
variables generate indices which “scale” commodity consumption levels. The
Barten model is clearly equivalent to writing the cost function in the form

       c”( Uh, p, a”) = c( Uhp*),                                               (90)

       Pi*=Pimi(ah),                                                            (91)

for a cost function C(U, p) for the reference household. Hence, if g;(x, p) are the
Marshallian demands for the household, household h’s demands are given by


                                                                                (92)

Differentiation      with respect to aj gives

       alnqi _      alnmi
                                                                                (93)
         aaj          aa,


where eik is the cross-price elasticity between i and k. Hence, a change in
demographic composition has a direct affect through the change in needs (on mi)
and an indirect effect through the induced change in the “effective” price
structure. It is this recognition of the quasi-price substitution effects of demo-
graphic change, that “a penny bun costs threepence when you have a wife and
child” that is the crucial contribution of the Barten model. The specification itself
may well neglect other important aspects of the problem, but this central insight
is of undeniable importance.
   The main competition to the Barten specification comes from the model
originally due to Sydenstricker and King (1921) but rediscovered and popularized
by Prais and Houthakker (1955). This begins from the empirical specification,
Ch. 30: Demand Analysis                                                           1805

apparently     akin to (89)

                                                                                 (94)

where m,(a h, is the specifc commodity scale, and mo(ah) is some general scale.
In contrast to (93), we now have the relationship

      alnq, = ahmi
         Jai       i?aj       ei       7                                         (95)


so that the substitution effects embodied in (93) are no longer present. Indeed, if
xh/mo(    ah) is interpreted as a welfare indicator (which is natural in the context)
(94) can only be made consistent with (88) and (89) if indifference curves are
Leontief, ruling out all substitution in response to relative price change, see
Muellbauer (1980) for details, and Pollak and Wales (1981) for a different
interpretation.
   On a single cross-section, neither the Barten model nor the Prais-Houthakker
model are likely to be identifiable. That there were difficulties with the
Prais-Houthakker       formulation has been recognized for some time, see Forsyth
(1960) and Cramer (1969) and a formal demonstration is given in Muellbauer
(1980). In the Barten model, (93) may be rewritten in matrix notation as

     F=(I+E)M,                                                                   (96)

and we seek to identify M from observable information on F. In the most
favorable case, E may be assumed to be known (and suitable assumptions may
make this practical even on a cross-section, see Section 4.2 below). The problem
lies in the budget constraint, p. q = x which implies w’[l+ E] = 0 so that the
matrix (I + E) has at most rank n -1. Hence, for any given F and E, both of
which are observable, there exist an infinite number of M matrices satisfying (96).
In practice, with a specific functional form, neither F nor E may be constant over
households so that the information matrix of the system could conceivably not be
singular. However, such identification, based on choice of functional form and the
existence of high nonlinearities, is inherently controversial. A much better solu-
tion is the use of several cross-sections between which there is price variation and,
in a such a case, several quite general functional forms are fully identified. For the
Prais-Houthakker     model, (95) may be written as

     F=M-em’,                                                                    (97)

where m = d ln m’/Ja.         From the budget constraint,   w’F = 0 so that m’ = w’M
1806                                                                                        A. Deaton

which yields


       F= (I-     ew’)M.                                                                         (98)

Once again (I - ew’) is singular, and the identification              problem recurs. Here price
information      is likely to be of less help since, with Leontief preferences,               prices
have only income effects. Even so, it is not difficult to construct Prais-Houthakker
models which identified given sufficient variation in prices.
    Since Prais and Houthakker,         the model has nevertheless been used on a number
of occasions,        e.g by Singh (1972), (1973), Singh and Nagar (1973)                         and
McClements        (1977) and it is unclear how identification              was obtained in these
studies. The use of a double logarithmic formulation              for f, helps; as is well-known,
such a function cannot add up even ZucaZly, see Willig (1976), Varian (1978), and
Deaton       and Muellbauer       (1980a, pp 19-20) so that the singularity              arguments
given above cannot be used. Nevertheless,              it seems unwise to rely upon a clear
misspecification       to identify the parameters        of the model. Coondoo (1975) has
proposed using an assumed independence                of m, on x as an identifying           restric-
 tion; this is ingenious         but, unfortunately,      turns out to be inconsistent           with
 the model. There are a number of other possible means of identification,                          see
Muellbauer      (1980), but essentially the only practical method is the obvious one of
 assuming a priori a value for one of the m,‘s. By this means, the model can be
estimated and its results compared with those of the Barten model. Some results
 for British data are given in Muellbauer            (1977) (1980) and are summarized               in
 Deaton      and Muellbauer       (1980a, pp 202-5). In brief, these suggest that each
 model is rather extreme, the Prais-Houthakker               with its complete lack of substitu-
 tion and the Barten with its synchronous            equivalence of demographic           and price
 substitution    effects. If both models are normalized            to have the same food scale,
 the Prais-Houthakker         model also tends to generate the higher scales for other
 goods since, unless the income effects are very large, virtually all variations with
composition       must be ascribed directly to the mi’s. The Barten scales are more
plausible but evidence suggests that price effects and demographic                  effects are not
linked as simply as is suggested by (93).
    Gorman (1976) has proposed an extension to (90) which appears appropriate in
 the light of this evidence. In addition to the Barten substitution            responses he adds
 fixed costs of children yj(ah) say; hence (90) becomes




with (94) retained      as before. Clearly,    (99) generates     demands     of the form
Ch. 30: Demand Analysis                                                           1807

Pollak and Wales (1981) call the addition of fixed costs “demographic translating”
as opposed to “demographic scaling” of the Barten model; the Gorman model
(99) thus combines translating and scaling. In their paper, Pollak and Wales test
various specifications of translating and scaling. Their results are not decisive but
tend to support scaling; with little additional explanatory power from translating
once scaling has been allowed for. Note, however, that the translating term in (99)
might itself form the starting point for the modelling, just as did the multiplicative
term in the Engel model. If the scaling terms in, (99) are dropped, so that p
replaces p*, and if it is recognized that the child cost term p. y(ah) is likely to be
zero for certain “adult” goods, then for i an adult good, we have

       q; = h,( Uh, P),                                                         tw
independent of a”. For all such goods, additional children exert only income
effects, a proposition that can be straightforwardly tested by comparing the ratios
of child to income derivatives across goods, while families with the same outlay
on adult goods can be identified as having the same welfare level. This is the
model first proposed by Rothbarth (1943) and later implemented by Henderson
(1949-50a) (1949-50b) and Nicholson (1949), see also Cramer (1969). Deaton
and Muellbauer (1983) have recently tried to reestablish it as a simply imple-
mented model that is superior to the Engel formulation for applications where
computational complexity is a problem.


3.3.    Zero expenditures and other problems

In microeconomic data on consumers expenditure, it is frequently the case that
some units do not purchase some of the commodities, alcohol and tobacco being
the standard examples. This is of course entirely consistent with the theory of
consumer behavior; for example, two goods (varieties) may be very close to being
perfect substitutes so that (sub) utility for the two might be




so that, if outlay is x, the demand functions are

       4j = xi/Pi         if pi/pj < ai/~j
         = 0          otherwise,                                                (103)

for i, j = 1,2 and for p1cx2 # p2cx1. It is not difficult to design more complex (and
more realistic) models along similar lines. For a single commodity, many of these
1808                                                                       A. Deaton

models can be made formally equivalent to the Tobit, Tobin (1958) model

       y,* -   xy + ui

       Yi = YF           if yj* 2 0
           = 0           otherwise,                                           (104)

and the estimation of this is well-understood.
   However, there are a number of extremely difficult problems in applying the
Tobit model to the analysis of consumer behavior. First, there is typically more
than one good and whenever the demand for one commodity switches regime (i.e.
becomes positive having been zero, or vice versa), there are, in general, regime
changes in all the other demands, if only to satisfy the budget constraint. In fact,
the situation is a good deal more complex since, as will be discussed in Section 6
below, non-purchase is formally equivalent to a zero ration and the imposition of
such rations changes the functional form for other commodities in such a way as
to generate both income and substitution effects. With a n goods in the budget,
and assuming at least one good purchased, there are 2”-’ possible regimes, each
with its own particular set of functional forms for the non-zero demands. Wales
and Woodland (1983) have shown how, in principle, such a problem can be
tackled and have estimated such a system for a three good system using a
quadratic (direct) utility function. Even with these simplifying assumptions, the
estimation is close to the limits of feasibility. Lee and Pitt (1983) have demon-
strated that a dual approach is as complicated. An alternative approach may be
possible if only a small number (one or two) commodities actually take on zero
values in the sample. This is to condition on non-zero values, omitting all
observations where a zero occurs, and to allow specifically for the resulting
sample selection bias in the manner suggested, for example, by Heckman (1979).
This technique has been used by Blundell and Walker (1982) to estimate a system
of commodity demands simultaneously with an hours worked equation for
secondary workers.
   The second problem is that it is by no means obvious that the Tobit specifica-
tion is correct, even for a single commodity. In sample surveys, zeros frequently
occur simply because the item was not bought over a relatively short enumeration
period (usually one or two weeks, and frequently less in developing countries).
Hence, an alternative to (104) might be

       y,* = x;p + ui,

       Yi = Yi*/Ti           with probability TV,
       yi = 0                with probability (1 - v,) .                      (109
Ch. 30: Demand Anajysis                                                            1809

Hence, if, p( ui) is the p.d.f. of ui the likelihood for the model is

                                                                                (106a)


This can be maximized directly to estimate j3 and V; given some low parameter
specification for TV.But note in particular that for ri = B for all i and ui taken as
i.i.d.N(O, u2) the likelihood is, for n, the number of zero yi’s,


                                                                               (106b)


Hence OLS on the positive yi’s alone is consistent and fully efficient for /3/r and
a/?z. The MLE of a is simply the ratio of the number of positive y,‘s to the
sample size, so that, in this case, all parameters are easily estimated. If this is the
true model, Tobit will not generally be consistent. However, note that (105) allows
yi to be negative (although this may be very improbable) and ideally the Tobit
and the binary model should be combined. A not very successful attempt to do
this is reported in Deaton and Irish (1984). See also Kay, Keen and Morris (1984)
for discussion of the related problem of measuring total expenditure when there
are many zeroes.
   In my view, the problem of dealing appropriately with zero expenditures is
currently one of the most pressing in applied demand analysis. We do not have a
theoretically satisfactory and empirically implementable method for modelling
zeroes for more than a few commodities at once. Yet all household surveys show
large fractions of households reporting zero purchases for some goods. Since
household surveys typically contain several thousands observations, it is im-
portant that procedures be developed that are also computationally inexpensive.
   There are also a number of other problems which are particularly acute in
cross-section analysis and are not specific to the Tobit specification. Heteroscedus-
ticity tends to be endemic in work with micro data and, in my own practical
experience, is extremely difficult to remove. The test statistics proposed by
Breusch and Pagan (1979) and by White (1980) are easily applied, and White has
proposed an estimator for the variance-covariance matrix which is consistent
under heteroscedasticity and does not require any specification of its exact form.
Since an adequate specification seems difficult in practice, and since in micro
studies efficiency is rarely a serious problem, White’s procedure is an extremely
valuable one and should be applied routinely in large cross-section regressions.
Note, however, that with Tobit-like models, untreated heteroscedasticity generates
inconsistency in the parameter estimates, see Chapter 27, thus presenting a much
more serious problem. The heteroscedasticity introduced by grouping has become
1810                                                                                     A. Deuion

less important as grouped data has given way to the analysis of the original micro
observations, but see Haitovsky (1973) for a full discussion.
   Finally, there are a number of largely unresolved questions about the way in
which survey design should be taken into account (if at all) in econometric
analysis. One topic is whether or not to use inverse probability weights in
regression analysis, see e.g. DuMouchel and Duncan (1983) for a recent discus-
sion. The other concerns the possible implications for regression analysis of
Godambe’s (1955) (1966) theorem on the non-existence of uniformly minimum
variance or maximum likelihood estimators for means in finite populations, see
Cassel, Sarndal and Wretman (1977) for a relatively cool discussion.


3.4.   Non-linear budget constraints

Consumer behavior with non-linear budget constraints has been extensively
discussed in the labor supply literature, where tax systems typically imply a
non-linear relationship between hours worked and income received, see Chapter
32 in this Handbook and especially Hausman (1985). I have little to add to
Hausman’s excellent treatment, but would nevertheless wish to emphasize the
potential for these techniques in demand analysis, particularly in “special”



                 Other
                 goods




                                                 Z                               sugar

                         Figure 2.   Budget constraint   for a fair price shop
Ch. 30: Demand Analysis                                                            1811

markets. Housing is the obvious example, but here I illustrate with a simple case
based on Deaton (1984). In many developing countries, the government operates
so-called “fair price” shops in which certain commodities, e.g. sugar or rice, are
made available in limited quantities at subsidized prices. Typically, consumers
can buy more than the fair price allocation in the free market at a price pl, with
p1 > p,, the fair price price. Figure 2 illustrates for “sugar” versus a numeraire
good with unit price. Z is the amount available in the fair price shop and the
budget constraint assumes that resale of surplus at free market prices is impossi-
ble.
   There are two interrelated issues here for empirical modelling. At the micro
level, using cross-section data, we need to know how to use utility theory to
generate Engel curves. At the macro-level, it is important to know how the two
prices p. and p1 and the quantity Z affect total demand. As usual, we begin with
the indirect utility function, though the form of this can be dictated by prior
beliefs about demands (e.g. there has been heavy use of the indirect utility
function associated with a linear demand function for a single good- for the
derivation, see Deaton and Muellbauer (1980a, p. 96) (1981) and Hausman
(1980)). Maximum utility along AD is u0 = #(x, p, po) with associated demand,
by Roy’s identity, of s0 = g(x, p, po). Now, by standard revealed preference, if
s0 < Z, s,, is optimal since BC is obtainable by a consumer restricted to being
within AD. Similar, maximum utility along EC is ui = J/(x +(pr - po)Z, p, pl)
with s = g(x +( p1 - p,,)Z, p, pl). Again, if s1 > Z, then si is optimal. The
remaining case is s,, > Z and si < Z (both of which are infeasible), so that sugar
demand is exactly Z (at the kink B). Hence, for individual h with expenditure xh
and quota Zh, the demand functions are given by

     sh= gh(xh,PY PO)               if gh(xh,p,   PO) <Zh                         (107)
     Sh=gh(xh+(P1-PO)Zh7P~P1)                       if gh(xh+(pl-pO)Zh,P,P1)>Zh

                                                                                  008)
     sh=z”          if gh(xh   +(    p1 - po)Zh, p, PI) I ZhS gh(xh,    P, PO)    (109)

Figure 3 gives the resulting Engel curve. Estimation on cross-section data is
straightforward by an extension of the Tobit method; the demand functions gh
are endowed with taste variation in the form of a normally distributed random
term, and a likelihood wifh three “branches” corresponding to sh < Zh, s h = Zh,
and sh > Zh is constructed. The middle branch corresponds to the zero censoring
for Tobit; the outer two are analogous to the non-censored observations in Tobit.
   The aggregate free-market demand for sugar can also be analysed using the
model. To simplify, assume that households differ only in outlay, xh. Define xr
by g{ xr + ( p1 - po)Z, p, pl} = Z, so that consumers with x > xr enter the free
1812                                                                                   A. Deaton

                            S




                                  -_----




                                                                           q


                      Figure 3.   Engel curve with a non-linear   budget constraint.




market.    Hence   per capita free market        demand     is




which,    from the definition     of xr is simply

        as
       -=
         CYZ
                   $(p,- d-1) dF(x).
               /,‘p{                                                                     012)

Since, at the entensive margin, consumers buy nothing in the free market, only the
intensive    margin     is of importance.    Note that all of these estimations          and
calculations    take a particularly   simple form if the Marshallian     demand functions
are assumed to be linear, so that, even in this non-standard       situation, linearity can
still greatly simplify.
    The foregoing is a very straightforward       example but is illustrates the flavor of
the analysis.     In practice, non-linear   budget constraints    may have several kink
points and the budget set may be non-convex.             While such things can be dealt
with, e.g. see Ring (1980) or Hausman and Wise (1980) for housing, and Reece
and Zieschang        (1984) for charitable   giving, the formulation      of the likelihood
becomes      increasingly    complex    and the computations      correspondingly       more
Ch. 30: Demand Analysis                                                              1813

burdensome. While virtually all likelihood functions can be maximized in princi-
ple, doing so for real applied examples with several thousand observations can be
prohibitively    expensive.


4.      Separability

In the conventional demand analysis discussed so far, a number of important
assumptions have not been justified. First, demand within each period is analysed
conditional on total expenditure and prices for that period alone, with no
mention of the broader determinants of behavior, wealth, income, other prices
and so on. Second, considerations of labor supply were completely ignored.
Third, no attention was given to questions of consumption and saving or to the
problems arising for goods which are sufficiently durable to last for more than
one period. Fourth, the practical analysis has used, not the elementary goods of
the theory, but rather aggregates such as food, clothing, etc., each with some
associated price index. Separability of one sort or another is behind each of these
assumptions and this section gives the basic results required for applied analysis.
No attempt is made to give proofs, for more detailed discussion the reader may
consult Blackorby, Primont and Russell (1978), Deaton and Muellbauer (1980a
Chapter 5) or the original creator of much of the material given here, Gorman
(1959) (1968) as well as many unpublished notes.


4. I.     Weak separability

Weak separability is the central concept for much of the analygs. Let qA be some
subvector of the commodity vector q so that q = (qA, qA) without loss of
generality. qA is then said to be (weakly) separable if the direct utility function
takes the form

                                                                                   013)

uA(qA) is the subutility (or felicity) function associated with qA. This equation is
equivalent to the existence of a preference ordering over qA alone; choices over
the qA bundles are consistent independent of the vector qA. More symmetrically,
preferences as a whole are said to be separable if q can be partitioned into
(qA, qB,....qN) such that

        u = u(uA(qA),UR(qB)~...,UN(qN)).                                           014)

Since u is increasing         in the subutility levels, it is immediately   obvious that
1814                                                                         A. De&on

maximization of overall u imp&s maximization of the subutilities subject to
whatever is optimally spent on the groups. Hence, (113) implies the existence of
subgroup demands

                                                                                (115)

where x A - pA. qA, while (115) has the same implication for all groups. Hence, if
preferences in a life-cycle model are weakly separable over time periods, commod-
ity demand functions conditional on x and p for each time period are guaranteed
to exist. Similarly, if goods are separable from leisure, commodity demand
functions of the usual type can be justified.
   Tests of these forms of separability can be based on the restrictions on the
substitution matrix implied by (115). If i and j are two goods in distinct groups,
i E G, j E H, G f H, then the condition


                                                                                (116)
for some quantity pCH (independent of i and j) is both necessary and sufficient
for (114) to hold. If a general enough model of substitution can be estimated,
(116) can be used to test ‘separability, and Byron (1968), Jorgenson and Lau
(1975) and Pudney (1981b), have used essentially this technique to find separabil-
ity patterns between goods within a single period. Bamett (1979a) has tested the
important separability restriction between goods and leisure using time series
American data and decisively rejects it. If widely repeated, this result would
suggest considerable misspecification in the traditional studies. It is also possible
to use a single cross-section to test separability between goods and leisure.
Consider the following cost function proposed by Muellbauer (1981b).

       c(wbp)    =d(p)+b(p)w+{a(p)}‘-“wsu,                                      (117)

where w is the wage d(p), b(p) and a(p) are functions of p, homogenous of
degrees, 1, 0 and 1 respectively. Shephard’s Lemma gives immediately


                                                                                018)




for transfer income p, hours worked h and parameters CY,/3, y all constant in a
single cross-section. It may be shown that (117) satisfies (114) for leisure vis-a-vi,
goods if and only if b(p) is a constant, which for (118) implies that pi/y; be
independent of i, i =l,..., n. This can be tested by first estimating (114) as a
system by OLS equation by equation and then computing the Wald test for the
Ch. 30: Demand Analysis                                                             1815

(n -   1) restrictions,     i = 1,. . . , (n - 1)

       P;Y,   - VA = 0.                                                            019)
This does not involve estimating the restricted nonlinear model. My own results
on British data, Deaton (1981b), suggest relatively little conflict with separability,
however, earlier work by Atkinson and Stern (1981) on the same data but using
an ingenious adaptation of Becker’s (1965) time allocation model, suggests the
opposite. Blundell and Walker (1982), using a variant of (117) reject the hypothe-
sis that wife’s leisure is separable from goods. Separability between different time
periods is much more difficult to test since it is virtually impossible to provide
general unrestricted estimates of the substitution responses between individual
commodities across different time periods.
   Subgroup demand functions are only a part of what the applied econometrician
needs from separability. Just as important is the question of whether it is possible
to justify demand functions for commodity composites in terms of total expendi-
ture and composite price indices. The Hicks (1936) composite commodity theo-
rem allows this, but only at the price of assuming that there are no relative price
changes within subgroups. Since there is no way of guaranteeing this, nor often
even of checking it, more general conditions are clearly desirable. In fact, the
separable structure (114) may be sufficient in many circumstances. Write uA, ug,
etc. for the values of the felicity functions and ca(uA, pA) etc. for the subgroup
cost functions corresponding to the uA(@‘) functions. Then the problem of
choosing the group expenditure levels xA, xr,, . . . can be written as

       max 24= u( uA, ug,. . ., uN),                                               (120)
       s.t. x = CCR( UR, p”).
                    R

Write

                                                  P”)
                                              CR(UR,
       CR(UR~pR)=CR(UR~~R)-C                           (uR        p”)’             (121)
                                                   R          9


for some fixed prices FR. For such a fixed vector, cR(uR, FR) is a welfare
indicator or quantity index, while the ratio cR( uR, pR)/cR( uR, PR) is a true (sub)
cost-of-living price index comparing pR and pR using uR as reference, see Pollak
(1975). Finally, since uR = qR(cR(uR, pR), pR), (120) may be written

       maxu=u{~~(c,(u,,PA),PA),~B(                                       1,   }.   022)
                                 cR(   ‘R,   P”)
       S.t.&R(“R,         pR)*
                                 cR(uR,      PR)         =”
1816                                                                                     A. Deaton

which is a standard       utility maximization     problem in which the constant price
utility levels cR( uR, jR) are the quantities and the indices cR( uR, pR)/cR( uR, PR)
are the prices. Of course, neither of these quantities is directly observable and the
foregoing    analysis is useful only to the extent that cR( uR, PR) is adequately
approximated      by the constant price composite qR.pR and the price index by the
implicit price deflator pR- q “/jiR. q R. The approximations     will be exact under the
conditions    of the composite commodity        theorem, but may be very good in many
practical situations    where prices are highly but not perfectly collinear. If so, the
technique has the additional advantage of justifying the price and quantity indices
typically available in the national accounts statistics. An ideal solution not relying
on approximations       requires quantity indices depending     only on quantities    and
price indices depending          only on prices. Given weak separability,    this is only
possible if either each subcost function is of the form cJ uG, pc) = 8,( u,)b,( pG)
so that the subgroup         demands (11) display unit elasticity for all goods with
respect to group outlay or each indirect felicity function           takes the “Gorman
generalized polar form ”


       ‘G=   FG[XG/bG(PG)]       +aGbG),                                                    (123)

for suitable functions FG, b, and a,, the first monotone increasing, the latter two
linearly homogeneous,           and the utility function (114) or (120) must be additive in
the individual     felicity functions. Additivity is restrictive even between groups, and
will be further discussed below, but (123j permits fairly general forms of Engel
curves, e.g. the Working form, AIDS, PIGL and the translog (61) if C,C,p,,                    = 0.
See Blackorby,         Boyce and Russell (1978) for an empirical                application,  and
Anderson     (1979) for an attempt to study the improvement               over standard practice
of actually computing the Gorman indices. In spite of this analysis, there seems to
be a widespread          belief in the profession      that homothetic      weak separability    is
necessary for the empirical implementation             of two-stage budgeting (which is itself
almost the only sensible way to deal with very large systems) - see the somewhat
bizarre exchanges         in the 1983 issue of the Journal of Business and Economic
Statistics. In my view, homothetic separability is likely to be the least attractive of
the alternatives      given here; it is rarely sensible to maintain without testing that
subgroup demands have unit group expenditure                elasticities. In many cases, prices
will be sufficiently collinear for the problem (122) to given an acceptably accurate
representation.     And if not, additivity between broad groups together with the very
flexible Gorman generalized polar form should provide an excellent alternative.
Even failing these possibilities,        there are other types of separability         with useful
empirical properties,        see Blackorby, Primont and Russell (1978) and Deaton and
Muellbauer      (1980, Chapter 5).
    One final issue related to separability           is worth noting. As pointed out by
Blackorby,      Primont       and Russell (1977), flexible functional          forms do not in
Ch. 30: Demand Analysis                                                                         1817

general remain flexible under the global imposition             of separability    restrictions.
Hence, a specific functional form which offers a local second-order             approximation
to an arbitrary utility function may not be able to similarly approximate,                say, an
arbitrary   additive utility function once its parameters         are restricted to render it
globally additive. For example, Blackorby et al. show that weak separability                     of
the translog implies either strong separability        or homothetic     separability     so that
the translog cannot model non-homothetic            weak separability.      The possibility of
imposing and testing restrictions       locally (say, at the sample mean) remains, but
this is less attractive since it is difficult to discriminate     between properties of the
data generation     process and the approximating       properties of the functional form.



4.2.    Strong separability   and additivity

Strong separability    restricts (114) to the case           where    the overall    function     is
additive, i.e. for some monotone increasing f


       24=   f(pJRblR))                                                                      024)

If each of the groups qR contains a single good, preferences       are said to be
additive, or that wants are independent. I deal with this case for simplicity since
all the additional  features over weak separability occur between groups rather
than within them. The central feature of additivity is that any combination       of
goods forms a separable set from any other, so that (116) must hold without the
G, H labels on pLGH, i.e. for some p and for all i, j in different groups (i # j
under additivity)

                   a4i aqj
       s *,=p,,p                                                                             (125)

 The budget constraint (or homogeneity)      can be used to complete this for all i and
j; in elasticity terms, the relationship is, Frisch (1959) Houthakker    (1960)

       eij = c#d,jei - eiwJ (1 + +ej),

for some scalar +, (uncompensated)       cross-price elasticity eij, and total expendi-
ture elasticity e,. This formula shows immediately the strengths and weaknesses of
additivity.    Apart from the data wi, knowledge of the (n - 1) independent           ei’s
together with the quantity (p (obtainable        from knowledge     of one single price
elasticity) is sufficient to determine the whole (n x n) array of price elasticities.
Additivity    can therefore be used to estimate price elasticities on data with little or
1818                                                                                     A. Deaton

no relative price variation,       e.g. on cross-sections,     on short-time       series, or in
centrally planned      economies where relative prices are only infrequently              altered.
This was first realised by Pigou (1910) and the idea has a distinguished               history in
the subject, see Frisch (1932) (1959) and the enormous literature on the (additive)
linear expenditure     system [for Eastern European experience, see Szakolczai (1980)
and Fedorenko        and Rimashevskaya        (1981)]. Conversely,    however, there is very
little reason to suppose that (126) is empirically valid. Note, in particular, that for
w, small relative to e, (as is usually the case), e,, = +ej (as Pigou pointed out) and
there seems no grounds for such a proportionality              relationship    to be generally
valid. Indeed such tests as have been carried out, Barten (1969) Deaton (1974b)
(1975a) (1975b), Theil (1975b), suggest that additivity is generally not true, even
for broad categories        of goods. Nevertheless,       the assumption      continues     to be
widely used, for example in the interesting cross-country           work of Theil and Suhm
(1982) no doubt because of its economy of parametrization                   ( = high level of
restrictiveness).   There is also a substantial     industry in collecting estimates of the
parameter      + under the (entirely baseless) supposition      that it measures the inverse
of the elasticity of the marginal utility of money.
     Few of the practical objections to additivity apply to its use in an intertemporal
context and it is standard practice to specify life-time preferences by (124) where
the R’s refer to time periods, an example being Lluch’s (1973) intertemporal
linear expenditure      system (ELES), although this is also additive within periods.
On elegant way of exploiting           additivity   is again due to Gorman           (1976) and
utilizes the concept of a “consumer profit function”. Define rr( p, r) by

       ~(p,r)=m~fx{-p-q+r-24;               u=u(q)},                                        027)


for concave u(q), so that the consumer sells utility (to him or herself) at a price r
( = the reciprocal of the marginal utility of money) using inputs q at prices p.
Now if u(q) has the explicitly additive form CuR(qR), so will rr( p, r), i.e.

                                                                                            (128)

Now m(p, r) also has the derivative             property    q = - vPr( p, r) so that for i
belonging to group R,

       q       =   _   aTRR(rdR)
           I
                                                                                            (129)
                            aPRi   ’



which depends only on within group prices and the single price of utility r which
is common to all groups and provides the link between them. In the intertemporal
context, r is the price of lifetime utility, which is constant under certainty or
follows (approximately)  a random walk under uncertainty,      while pR is within
Ch. 30: Demand Analysis                                                         1819

period prices. Hence, as realized by MaCurdy and .utilized in Heckman (1978),
Heckman and MaCurdy (1980), and MaCurdy (1981), eq. (129) can be imple-
mented on panel data by treating r as a fixed effect so that only data on current
magnitudes are required. Since these are typically the only data available, the
technique is of considerable importance. See Browning, Deaton and Irish (1984)
for further discussion of profit functions and additivity and for an application to
British data (in which the simple life-cycle model of the simultaneous determina-
tion of consumption and labor supply has some difficulty in dealing with the
evidence.)
   Another important use of separability in general and of additivity in particular
is as a vehicle for the structuring and interpretation of preference patterns. For
example, in the “characteristics” model of consumer behaviour pioneered by
Gorman (1956, 1980), Stone (1956) and Lancaster (1966), and recently estimated
by Pudney (1981a), it is a transformation of the goods which generates utility, and
it may be quite plausible to assume that preferences are separable or even additive
in the transformed characteristics (food, shelter, mate, etc.) rather than in the
market goods which have no direct role in satisfying wants. One possibility,
extensively explored by Theil and his co-workers, e.g. Theil(1976) and Theil and
Laitinen (1981) for a review, is that preferences are additive over characteristics
given by a linear transform of the market goods. Theil and Laitinen use the
Rotterdam model and, by a technique closely related to factor analysis, rotate the
axes in goods space to obtain the “preference independence transform”. Applied
to the demand for beef, pork and chicken in the U.S., the model yields the
transformed goods “inexpensive meat”, “ beef/pork contrast” and “antichicken”,
Theil (1976, p. 287). These characteristics may indeed reflect real aspects of
preference structures in the U.S., but as is often the case with factor analytical
techniques (see e.g. Armstrong (1967) for an amusing cautionary tale) there is
room for some (largely unresolvable) scepticism about the validity and value of
any specific interpretations.



5.   Aggregation over consumers

Clearly, on micro or pane! data, aggregation is not an issue, and as the use of such
data increases, the aggregation problem will recede in importance. However,
much demand analysis is carried out on macroeconomic aggregate or per capita
data, and it is an open question as to whether this makes sense or not. The topic
is a large one and I present only the briefest discussion here, see Deaton and
Muellbauer (1980a, Chapter 6) for further discussion and references. At the most
general level, average aggregate demand 4, is given by

     qi=Gi(x1,x2      ,...,   xh ,..., XH,P),                                 (130)
1820                                                                                 A. Deaton

for the H outlays xh of household h. The function Gi can be given virtually any
properties whatever depending on the configuration of individual preferences. If,
however, the outlay distribution were fixed in money terms, x h = khX for con-
stants kh, (130) obviously gives




although     without restrictions    on preferences,     see e.g. Eisenberg (1961) Pearce
(1964), Chipman (1974), and Jerison (1984) there is no reason to suppose that the
GF functions        possess any of the usual properties of Marshallian          demands. Of
course, if the utility (real outlay) distribution       is fixed, Hicksian demands aggre-
gate in the same way as (130) and (131) and there exist macro demand functions
with all the usual properties. There is very little relevant empirical evidence on the
movement        over time of either the outlay or the utility distribution,            but see
Simmons (1980) for some conjectures for the U.K.
    If the distribution    of outlay is not to be restricted in any way, formulae such as
(131) can only arise if mean preserving changes in the x-distribution                 have no
effect on aggregate demand, i.e. if all individuals have identical marginal propen-
sities to spend on each of the goods. This condition,               of parallel linear Engel
curves, dates back to Antonelli (1886), but is usually (justly) credited to Gorman
(1953) (1961). As he showed, utility maximizing              consumers have parallel linear
Engel curves if and only if the individual cost functions have the form


                                                                                        032)

a specification     known as the “Gorman         polar form”. Suitable choice of the ah(p)
and b(p) functions           permits (132) to be a flexible functional        form, Diewert
(1980a), but the uniformity         across households implied by the need for all Engel
curves to be parallel seems implausible.          However, it should be noted that a single
cross-section     is insufficient    to disprove the condition     since, in principle,   and
without the use of panel data, variation in the ah(p) functions due to non-outlay
factors cannot be distinguished           from the direct effects of variations     in xh. A
somewhat weaker form of the aggregation condition, emphasized by Theil (1954)
(1975 Chapter 4) is that the marginal propensities              to consume be distributed
independently       of the xh, see also Shapiro (1976) and Shapiro and Braithwait
(1979). Note finally that if aggregation is to be possible for all possible income
distributions,    including those for which some people have zero income, then the
parallel linear Engel curves must pass through the origin so that ah(p) in (132) is
zero and preferences        are identical and homothetic.
   If, however, the casual evidence against any form of linear Engel curves is
taken seriously exact aggregation requires the abandonment               of (131) at least in
principle.     One set of possibilities       has been pursued     by Muellbauer      (1975b)
(1976a) (1976b) who examines conditions under which the aggregate budget share
Ch. 30: Demand Analysis                                                                             1821

of each good can be expressed as a function of prices and a single indicator of x,
not necessarily  the mean. If, in addition, this indicator is made independent  of
prices, the cost functions must take the form


                                                                                                  033)

called by Muellbauer,            “price-independent       generalised    linearity”    (PIGL). With
(Y= 1, PIGL is essentially the Gorman polar form and the Engel curves are linear;
otherwise,     a controls the curvature of the Engel curves with, for example, the
AIDS and Working-Leser              forms as special cases when (Y= 0. The macro relation-
ships corresponding          to (133) render qi a function of both x and of the mean of
order (1 - a) of the outlay distribution.              Hence, if ar = - 1, the Engel curves are
quadratic     and the average aggregate demands                   depend     upon the mean and
variance     of x. This opens up two new possibilities.                   On the one hand, the
presumed (or estimated) curvature of the Engel curves can be used to formulate
the appropriate       index of dispersion for inclusion in the aggregate demands, see
e.g. the papers by Berndt, Darrough and Diewert (1977) and by Simmons (1980)
both of which use forms of (133). On the other hand, the income and hence outlay
distribution    changes very little over time, such models allow the dispersion terms
to be absorbed         into the function and justify the use of (131) interpreted                   as a
conventional       Marshallian       demand     function,    see e.g. Deaton and Muellbauer
(1980b). This position seems defensible in the light of the many studies which,
using one technique           or another, have failed to find any strong influence of the
income distribution         on consumer behaviour.
   Recent theoretical          work on aggregation         has suggested that the generalized
linearity and price independent             generalised linearity forms of preference have a
more fundamental          role to play in aggregation than solving the problem posed by
Muellbauer.      Jerison (1984) has shown that the generalized linearity conditions are
important      for aggregation         with fixed income distribution,           while Freixas and
Mas-Cole11 (1983) have proved the necessity of PIGL for the weak axiom of
revealed preference to hold in aggregate if the income distribution                   is unrestricted.
(Note that Hildenbrand’s              (1983) proof that WARP holds on aggregate data
requires that the density of the income distribution                 be monotone        declining and
have support (0, cc), so that modal income is zero!).
    In a more empirical vein, Lau (1982) has considered a more general form of
aggregation      than that required by (131). Lau considers individual                 demand func-
tions of the form gh(xh, p, a”) for budget xh, prices p and attributes                              (e.g.
demographics)        ah. His first requirement         is that Cgh(xh, p, ah) be symmetric in
the H xh ‘s and ah’s, i.e. be invariant to who has what x and what a. This alone
is sufficient to restrict demands to the form


      Rh(Xh,
          p,ah)=g(xh,p,ah)+kh(p),                                                                 (134)
1822                                                                        A. Deaton

i.e. to be identical up to the addition of a function of prices alone. Lau then
derives the conditions under which aggregate demands are a function of not the
H x’s and a’s, but of a smaller set of m indices, m < H. Lau shows that

                                                                               (135)
with fi(x, a) non-constant   symmetric functions of the H-vectors x and a, implies
that


                                                                              (136)
                      k=l


Gorman’s (1981) theorem, see 3(a) above, tells us what form the $k functions can
take, while Lau’s theorem makes Gorman’s results the more useful and important.
Lau’s theorem provides a useful compromise between conventional aggregation as
represented by (131) on the one hand and complete agnosticism on the other.
Distributional effects on demand are permitted, but in a limited way. Gorman’s
results tell us that to get these benefits, polynomial specifications are necessary
which either link quantities to outlays or shares to the logarithms of outlays. The
latter seem to work better in practice and are therefore recommended for use.
    Finally, mention must be made of the important recent work of Stoker who, in
a series of papers, particularly (1982) (1984), has forged new links between the
statistical and economic theories of aggregation. This work goes well beyond
demand analysis per se but has implications for the subject. Stoker (1982) shows
that the estimated parameters from cross-section regressions will estimate the
corresponding macro-effects not only under the Gorman perfect aggregation
conditions, but also if the independent variables are jointly distributed within the
exponential family of distributions. In the context of demand analysis, the
marginal propensity to consume from a cross-section regression would con-
sistently estimate the impact of a change in mean income on mean consumption
either with linear Engel curves or with non-linear Engel curves and income
distributed according to some exponential family distribution. Since one of the
reasons we are interested in aggregation is to be able to move from micro to
macro in this way, these results open up new possibilities. Stoker (1984) also
carries out the process in reverse and derives completeness (or identification)
conditions on the distribution of exogenous variables that allow recovery of micro
behavior from macro relationships.
    Much of the work reported in this section, by Muellbauer, Lau and Stoker, can
be regarded as developing the appropriate techniques of allowing for the impacts
of distribution on aggregate demand functions. That such effects could be
potentially important has been known for a long time, see de Wolff (1941) for an
early contribution. What still seems to be lacking so far is empirical evidence that
such effects are actually important.
Ch. 30: Demand Analysis                                                                              1823

6.   Behavior under quantity constraints

The existence and consequences              of quantity constraints on purchases has recently
been given much attention in the literature and the question of whether (or how)
the labor market clears remains of central importance                       for much of economic
analysis, see Ashenfelter           (1980) for a good discussion in which rationing is taken
seriously.     If empirical       studies of consumer        behavior are to contribute          to this
discussion,       they must be able to model the effects of quantity                     rationing      on
purchases in other markets and be able to test whether or not quantity constraints
exist. Perhaps the most famous work on the theory of quantity constraints                          traces
back to Samuelson’s           (1947) Foundations and the enunciation              of the Le Chatelier
principle     by which substitution          possibilities    in all markets are reduced by the
imposition      of quantity restrictions in any. These effects were further studied in the
later papers of Tobin and Houthakker                  (1951) and surveyed in Tobin (1952). All
the results obtained           are essentially      local, given the effects on deviations              or
elasticities     of imposition         or changes in quantity        restrictions.     Applied     work,
however, requires theory which generates functional                   forms and, for this, global
relationships        between rationed       and unrationed        demands      are required.     In the
presentation        here, I follow the work of Neary and Roberts (1980) and Deaton
(1981b).
   The commodity           vector q is partitioned       into (q", ql) where q" may or may not
be constrained        to take on values z. These may be outside impositions or they may
essentially     be “chosen” by the consumer. An example of the latter is when a
consumer       decides not to participate          in the labor force; since hours cannot be
negative, the commodity              demand functions conditional         on non-participation         are
those which arise from a quantity restriction of zero hours worked. The simplest
case arises if q1 forms a separable group, so that without quantity restrictions on
q", it is possible       to write

      q; = g!(x     -    p”qo, p’),                                                                (137)

see eq. (115) above. Clearly, rationing makes no difference to (137) except that z
replaces q O, so that testing for the existence of the quantity restrictions    can be
carried out by testing for the endogeneity    of q" using a Wu (1973) or Hausman
(1978) test with p” as the necessary         vector of exogenous   instruments     not
appearing    in (137). Without separability   matters are more complicated     and, in
addition   to the variables in (137), the demand for q1 depends on z so that
without quantity restrictions

      q; = gF(x,        PO,P’),                                                                    (138)

while, under      rationing,

      q; = g/yx         - pO.z, pl, z).                                                            (139)
1824                                                                                 A. Deuton

Efficient estimation   and testing requires that the relationship    between g F and g R
be fully understood.      Once again, the cost function        provides   the answer. If
c( u, p”,pl) is the unrestricted   cost function, i.e. that which generates (138) the
restricted cost function c*(u, p”, p’, z) is defined by

        c*( u, PO, Pl, z) = min{p”.qo+p’*q’;       u(q”,ql)=u,qo=z}

                         =p”‘z+Y(u,P’,z),                                               (140)

where y does not depend upon p”. Define the “virtual               prices”,   PO, Rothbarth
(1941) as a function {‘(u, pl, z) by the relation




so that    p” is the vector of prices which at u and p1 would cause z to be freely
chosen.    At these prices, restricted and unrestricted costs must be identical, i.e.

        c(~,~“,p)=80~z+Y(~,P1,z),                                                       (142)

is an identity    in u, p1 and z with j” = {‘(u, p’, z). Hence, combining          (140) and
(142)

        c*( 24, PO, pl, z) = (pO - p”)*z + c( u, PO, P).                                (143)

With p” determined         by (141) this equation is the bridge between restricted and
unrestricted    cost functions and, since (138) derives from differentiating      c( u, p”, p)
and (139) from differentiating       c*(u, p”, pl, z), it also gives full knowledge of the
relationship    between g F and g R. This can be put to good theoretical use, to prove
all the standard rationing results and a good deal more besides.
    For empirical purposes, the ability to derive g R from g F allows the construc-
tion of a “matched       pair” of demand functions, matched in the sense of deriving
from the same preferences, and representing             both free and constrained   behavior.
A first attempt,      applied to housing expenditure            in the U.K., and using the
Muellbauer      cost function (117) is given in Deaton (1981b). In that study I also
found that allowing for quantity           restrictions    using a restricted cost function
related to that for the AIDS, removed much of the conflict with homogeneity                 on
post-war     British data. Deaton and Muellbauer              (1981) have also derived the
matched functional       form g F and gR for commodity demands for the case where
there is quantity      rationing   in the labor market and where unrestricted            labor
supply equations take the linear functional forms frequently assumed in the labor
supply literature.
Ch. 30: Demand Analysis                                                                       1825

7.     Other topics

In a review of even this length, only a minute fraction of demand analysis can be
covered. However, rather than omit them altogether, I devote this last section to
an acknowledgement     of the existence of three areas closely linked to the preceed-
ing analysis (and which many would argue are central), intertemporal          demand
analysis,  the analysis of quality, and the use of demand         analysis in welfare
economics.



7.1.    In tertemporal      demand analysis

Commodity         choices     over a lifetime     can perhaps   be modelled   using   the utility
function


       u=v{q’,q’,...,          q’,...   qL,B@},                                             (144)

where the q’ represent vectors of commodity demands for period 7, B is bequests
at death which occurs with certainty at the end of period L, and rL is some
appropriate price index to be applied to B. Utility is maximized subject to the
appropriate constraint, i.e.


        fj’-q’+         ?;“( B,lrL)     = W,                                                (145)


where a       denotes discounting    and W is the discounted       present value at 0 of
present   and future financial assets and either full income, if labor supply is
included, or labor income, if labor supply is taken as fixed.
   Clearly (144) (145) are together formally identical to the usual model so that
the whole apparatus of cost functions, duality, functional forms and so on can be
brought into play. However, the problem is nearly always given more structure by
assuming     (144) to be additively     separable    between periods so that demand
analysis proper applies to the more disaggregated          stage of two stage budgeting,
while the allocation    to broad groups (i.e. of expenditure        between the periods)
becomes the province of the consumption         function, or more strictly, the life-cycle
model. The apparatus       of Section 4.2 can be brought into play to yield the new
standard   life-cycle results, see Browning, Deaton and Irish (1985) Hall (1981),
Bewley (1977). Even a very short review of this consumption             function literature
would double the length of this chapter.
   The presence of durable goods can also be allowed for by entering stocks at
various dates into the intertemporal     model (144). Under the assumption of perfect
1826                                                                                           A. Deaton

capital markets,      constant proportional  physical depreciation, and no divergence
between buying        and selling prices, these stocks can be priced at “user cost”
defined by


       P: = [PI - Pr+10 -        wo+ r,+1)13
 when pr is the price of the good at time t, 6 is the rate of physical depreciation
 and rt is the interest rate, see Diewert (1974b) or Deaton and Muellbauer (1980a
 Chapter 13) for full discussions of this model. If user cost pricing is followed,
 (although note the expectational           element in p,+J, durable goods can be treated
 like any other good with p,?S, (for stock S,) as a dependent variable in a demand
 system, and x, (including         p:S, not the purchase of durables) and all prices and
 user costs as independent        variables. The model is a very useful benchmark,                but its
 assumptions        are more than usually unrealistic           and it is not surprising          that it
 appears     to be rejected in favour of alternative              specifications,     See Muellbauer
 (1981a). However, no fully satisfactory              alternative    formulation       exists, and the
 literature contains a large number of quite distinct approaches. In many of these,
 commodity        demands      are modelled conditional          on the stocks which, in turn,
 evolve with purchases, so that dynamic formulations                are created in which long-run
 and short-run        responses are distinct. The stock-adjustment            models of Stone and
 Rowe (1957) (1958) and Chow (1957) (1960) are of this form, as is the very similar
 “state”    adjustment       model of Houthakker          and Taylor (1966) who extend the
 formulation      to all goods while extending the concept of stocks to include “stocks”
 of habits (since in these models, stocks are substituted                       out, it makes little
difference      what name is attached to them). There are also more sophisticated
models in which utility functions are defined over instantaneous                        purchases and
stocks, e.g. Phlips’ (1972) “dynamic”               linear expenditure         system, and further
refinements       in which intertemporal        functions     are used to model the effects of
current purchases on future welfare via their effects on future stocks, Phlips (1974,
1983 Part II). These models are extremely complicated                    to estimate and it is not
clear that they capture any essential features not contained                     in the stock-adjust-
ment model, on the one hand, and the user cost model on the other, see in
particular     the results of Spinnewyn (1979a) (1979b). It remains for future work to
tackle the very considerable            task of constructing        models which can deal, in
manageable         form, with the problems posed by the existence of informational
asymmetries        [lemons, Akerlof (1970)], borrowing constraints,             indivisibilities,   tech-
nological diffusion, and so on.



7.2.    Choice of qualities

The characteristics      model of consumer behavior is a natural way of analysing
choice of qualities     and, indeed, Gorman’s (1956, 1980) classic paper is concerned
Ch. 30: Demand Analysis                                                         1827

with quality differentials in the Iowa egg market. By specifying a technology
linking quality with market goods, the model naturally leads to the characteriza-
tion of shadow prices for qualities and these have played a central role in the
“new household economics”, see in particular, Becker (1976). A related but more
direct method of dealing with quality was pioneered in the work of Fisher and
Shell (1971), see also Muellbauer (1975a) and Gorman (1976) for reformulations
and extensions. The model is formally identical to the Barten model of household
composition discussed in Section 3 above with the m’s now interpreted as quality
parameters “augmenting” the quantities in consumption. Under either formula-
tion, competition between goods manufacturers will, under appropriate assump-
tions, induce a direct relationship between the price of each good (or variety) and
an index of its quality attributes. These relationships are estimated by means of
“hedonic” regressions in which (usually the logarithm of) price is regressed on
physical attributes across different market goods, see e.g. Burstein (1961) and
Dhrymes (1971) for studies of refrigerator prices, and Ohta and Griliches (1976) ,
Cowling and Cubbin (1971) (1972), Cubbin (1975) and Deaton and Muellbauer
(1980a p. 263-5) for results on car prices. These techniques date back to Griliches
(1961) and ultimately to Court (1939). Choice among discrete varieties involves
many closely related techniques, see Chapter 24 of this handbook.
   Empirical studies of consumer demand for housing are a major area where
quality differences are of great importance. However, until recently, much of the
housing literature has consisted of two types of study, one regressing quantities of
housing services against income and some index of housing prices, either individ-
ual or by locality, while the other follows the hedonic approach, regressing prices
on the quantities of various attributes, e.g. number of rooms, size, presence of and
type of heating, distance from transport, shops and so on. Serious attempts are
currently being made to integrate these two approaches and this is a lively field
with excellent data, immediate policy implications, and some first-rate work being
done. Lack of space prevents my discussing it in detail; for a survey and further
references see Mayo (1978).


7.3.   Demand     analysis and welfare economics

A large proportion of the results and formulae of welfare economics, from cost
benefit analysis to optimal tax theory, depend for their implementation on the
results of empirical demand analysis, particularly on estimates of substitution
responses. Since the coherence of welfare theory depends on the validity of the
standard model of behavior, the usefulness of applied demand work in this
context depends crucially on the eventual solution of the problems with homo-
geneity (possible symmetry) and global regularity discussed in Section 2 above.
But even without such difficulties, the relationship between the econometric
estimates and their welfare application is not always clearly appreciated. In
1828                                                                                         A. Deaion

consequence,    I review briefly here the estimation      of three welfare measures,
namely consumer surplus, cost-of-living    indices, and equivalence scales.
   I argued in Section 1 that it was convenient    to regard the cost function as the
centrepiece  of applied demand analysis. It is even more convenient        to do so in
welfare analysis. Taking consumer surplus first, the compensating      variation (CV)
and equivalent   variation (EV) are defined by, respectively,

       cv=c(zP,pl)-c(uO,pO),                                                                    (147)
       EV=c(u’,p’)-c(u’,p’),                                                                    048)

so that both measure the money costs of a welfare affecting price change from p”
to pl, CV using u” as reference (compensation          returns the consumer   to the
original welfare level) and EV using u1 (it is equivalent to the change to u’). Base
and current reference true cost-of-living index numbers are defined analogously
using ratios instead of differences, hence

       p( PI, PO; u”> = c( u”, P’>/C(        u”, PO>,                                           (149)
       p( Pl, PO; u’) = c( ul, P’)/C(       ul, PO),                                            W-N

are the base and current true indices. Note the CV, EV and the two price indices
depend in no way on how utility is measured; they depend only on the indiffer-
ence curve indexed by u, which could equally well be replaced by Cp(u) for any
monotone      increasing       +. Even so, the cost function is not observed directly and a
procedure      must be prescribed for constructing               it from the (in principle) observ-
able Marshallian        demand functions. If the functional forms for these are known,
and if homogeneity,           symmetry and negativity are satisfied, the cost function can
be obtained       by solving the partial differential equations (12) often analytically,
see e.g. Hausman           (1981). Unobserved          constants     of integration  affect only the
measurability       of u so that complete knowledge of the Marshallian                    demands is
equivalent     to complete knowledge of consumer surplus and the index numbers. If
analytical    integration       is impossible or difficult, numerical integration          is straight-
forward (provided homogeneity                and symmetry hold) and algorithms exist in the
literature, see e.g. Samuelson (1948) and in much more detail, Vartia (1983). If the
integrability     conditions fail, consumer behavior is not according to the theory and
it is not sensible to try to calculate the welfare indices in the first place, nor is it
possible to do so. Geometrically,               calculating    CV or EV is simply a matter of
integrating     the area under a Hicksian demand curve; there is no valid theoretical
or practical reason for ever integrating              under a Marshallian demand curve. The
very considerable         literature discussing the practical difficulties of doing so (the
path-dependence         of the integral, for example) provides a remarkable               example of
the elaboration        of secondary nonsense which can occur once a large primary
category error has been accepted; the emperor with no clothes, although quite
unaware of his total nakedness, is continuously                    distressed by his inability to tie
Ch. 30: Demand Analysis                                                                       1829

his  shoelaces. A much more real problem is the assumption that the functional
forms of the Marshallian demands are known, so that working with a specific
model inevitably understates the margin of ignorance about consumer surplus or
index numbers. The tools of non-parametric demand analysis, as discussed in
Section 2.7, can, however, be brought to bear to give bounding relationships on
the cost function and hence on the welfare measures themselves, see Varian
(1982b).
   The construction of empirical scales is similar to the construction of price
indices although there are a few special difficulties. For household characteristics
ah, the equivalence scale M( ah, a’; U, p) is defined by

      M( ah, uo, u,p)=c(u,p,ah)/c(u,p,aO),                                                  051)
for reference household characteristics u” and suitably chosen reference welfare
level u and price vector p. Models such as those discussed in Section 3.2 yield
estimates of the parameters of c(u, p, a) so that scales can be evaluated. How-
ever, the situation is not quite the same as for the price indices (149) and (150).
For these, c(u, p) only is required and this is identified by the functional forms
for its tangents hi( U, p) = gi { c( u, p), p }, But for c( U, p, a), we observe only the
p-tangents .together with their derivatives with respect to a, i.e. dqi/duj, the
demographic effects on demand, and this information is insufficient to identify
the function. In particular, as emphasized by Pollak and Wales (1979), the cost
functions c(+( U, a), p, a) and c( U, p, a) have identical behavioral consequences
if &$/au > 0 while giving quite different equivalence scales. Since c(u, p, a) is
formally identical to the restricted cost function discussed in Section 6 above, its
derivatives with respect to a can be interpreted as shadow prices [differentiate eq.
(143)]. These could conceivably be measured from “economic” studies of fertility,
in which case the equivalence scale would be fully identified just as are the price
indices from c( U, p). Failing such evidence, it is necessary to be very explicit
about exactly what prior information is being used to identify the scales. In
Deaton and Muellbauer (1981), the identification issue is discussed in detail and it
is shown that the same empirical evidence yields systematically different scales for
different models, e.g. those of Engel, Barten and Rothbarth discussed in 3.2. It is
also argued that plausible identification assumptions can be made, so that
demand analysis may, after all, have something to say about the economic costs
of children.


References

Afriat, S. N. (1967) “The Construction of Utility Functions From Expenditure Data”, International
  Economic Review, 8, 67-77.
Afriat, S. N. (1973) “On a System of Inequalities in Demand Analysis: An Extension of the Classical
 Method”, International Economic Review, 14, 460-472.
Afriat, S. N. (1976) 7’he Combinatorial Theory of Demand. London: Input-output Co.
Afriat, S. N. (1977) The Price Index. Cambridge University Press.
1830                                                                                                   A. Deaton

Afriat. S. N. (1980) Demand Functions and the Slutsky Mafrix. Princeton: Princeton University Press.
Afriat, S. N. (1981) “On the Constructability          of Consistent Price Indices Between Several Periods
  Simultaneously”,        in: A. S. Deaton, ed., Essays in the Theory and Measurement              of Consumer
  Behaviour in Honour of Sir Richard Stone. Cambridge:            Cambridge University Press.
Aitchison. J. and J. A. C. Brown (1954-5) “A Synthesis of Engel Curve Theory”, Revrew of Economic
  Studies, 22, 35-46.
Akerlof, G. (1970) “The Market for Lemons”, Quarter/y Journal of Economics, 84, 488-500.
Altfteld, C. L. F. (1985) “Homogeneity        and Endogeneity in Systems of Demand Equations”,            Journal
  of Econometrics, 27, 191-209.
Anderson,      G. J. and R. W. Blundell(l982)     “Estimation    and Hypothesis Testing in Dynamic Singular
  Equation Systems”, Econometrica, 50, 155991571.
Anderson,      R. W. (1979) “Perfect Price Aggregation      and Empirical Demand Analysis”, Econometrica,
  47, 1209-30.
Anderson,      T. W. (1958) An Introduction to Multivariate Statistical Analysts. New York: John Wiley.
Aneurvn-Evans,        G. B. and A. S. Deaton (1980) “Testing Linear versus Logarithmic             Regressions”,
  Rev&       of Economic Studies, 41, 215-91. ~         ’          -
Antonelli.     G. B. (1886) Sulla Teoria Matematica della Economia Politica, Pisa: nella Tipografia de1
  Folchetto. Republished       as “On the Mathematical      Theory of Political Economy”, in: J. S. Chipman,
  L. Hurwicz, M. K. Richter and H. F. Sonnenschein,             eds., Preferences, Uility, and Demand. New
  York: Harcourt        Brace Jovanovich, 1971.
Armstrong,      J. S. (1967) “Derivation   of Theory by Means of Factor Analysis or Tom Swift and his
  Electric Factor Analysis Machine”, American Statistician, 21(5), 17-21.
Ashenfelter,     0. (1980) “Unemployment       as Disequilibrium     in a Model of Aggregate Labor Supply”,
  Econometrica, 48, 541-564.
Atkinson,      A. B. and N. Stern (1981) “On Labour Supply and Commodity                  Demands”,    in: A. S.
  Deaton, ed., Esqys in the Theory and Measurement of Consumer Behaviour. New York: Cambridge
  University     Press.
Barnett, W. A. (1979a) “The Joint Allocation of Leisure and Goods Expenditure”,                Econometrica, 47,
  539-563.
Barnett. W. A. (1979b) “Theoretical         Foundations     for the Rotterdam      Model”, Review of Economic
  Studtes, 46, 109-130.
Barnett, W. A. (1983a) “New Indices of Money Supply and the Flexible Laurent Demand System”,
 Journal of Economic and Business Statistics, 1, l-23.
Barn&t, W. A. (1983b) “Definitions           of ‘Second Order Approximation’          and ‘Flexible Functional
  Form”‘,      Economics Letters, 12, 31-35.
Bamett W. A. and A. Jonas (1983) “The Mum-Szatz                Demand System: An Application of a Globally
  Well-Behaved       Series Expansion”,   Economics Letters, 11, 331-342.
Barnett W. A. and Y. W. Lee (1985) “The Regional Properties of the Miniflex Laurent, Generalized
  Leontief, and Translog Flexible Functional Forms”. Econometrica, forthcoming.
Barten, A. P. (1964) “Family Composition,         Prices and Expenditure Patterns”, in: P. E. Hart, G. Mills
  and J. K. Whitaker, eds., Economic Analysis for National Economic Planning. London: Butterworth.
Barten, A. P. (1966) Theorie en empirie van een volledig stelsel van vraagvergelijkrngen.               Doctoral
  dissertation,    Rotterdam.
Barten, A. P. (1967) “Evidence           on the Slutsky Conditions        for Demand Equations”,       Review of
   Economics and Statistics, 49, 77-84.
Barten, A. P. (1969) “Maximum Likelihood Estimation of a Complete System of Demand Equations”,
   European Economic Review, 1, I-13.
Barten,     A. P. (1977) “The Systems of Consumer               Demand      Functions   Approach:   A Review”,
   Economefrica, 45, 23-51.
Barten, A. P. and V. Bohm (1980) “Consumer             Theory”, in: K. J. Arrow and M. D. Intriligator,       eds..
   Handbook of Mathematical Economics. Amsterdam:              North-Holland.
Barten, A. P. and E. Geyskens (1975) “The Negativity Condition in Consumer Demand”,                     European
   Economic Review, 6, 221-260.
Becker, G. S. (1965) “A Theory of the Allocation of Time”, Economic Journal, 75, 493-517.
Becker, G. S. (1976) The Economic Approach to Human Behaviour. Chicago: University of Chicago
   Press.
Ch. 30: Demand Analysis                                                                                                 1831

Bera, A. K., R. P. Byron and C. M. Jarque (1981) “Further                       Evidence on Asymptotic           Tests for
   Homogeneity        and Symmetry in Large Demand Systems”, Economics Letters, 8, 101-105.
Bemdt.     E. R.. M. N. Darrouah            and W. E. Diewert (1977) “Flexible                 Functional      Forms and
   Expenditure’Distributions:        Ai Application      to Canadian- Consumer Demand Functions”,                   Interna-
   tionul Economic Review, 18,651-675.
Bemdt, E. R., B. H. Hall, R. E. Hall and J. A. Hausman                      (1974) “Estimation         and Inference in
   Non-Linear       Structural Models”, Annals of Economic and Social Measurement, 3, 653-665.
Bemdt, E. R. and M. S. Khaled (1979) “Parametric              Productivity    Measurement       and the Choice Among
   Flexible Functional        Forms”, Journal of Political Economy, 84, 1220-1246.
Bemdt, E. R. and N. E. Savin (1975) “Estimation                   and Hypothesis       Testing in Singular Equation
   Systems With Autoregressive         Disturbances”,      Econometrica, 43, 937-957.
Bemdt, E. R. and N. E. Savin (1977) “Conflict                  Among Criteria For Testing Hypotheses                  in the
   Multivariate      Linear Regression Model”, Econometrica, 45, 1263-1277.
Bewley, T. (1977) “The Permanent              Income Hypothesis:        A Theoretical       Formulation”,       Journal of
   Economic Theory, 16,252-292.
Bhattacharrya,       N. (1978) “Studies on Consumer Behaviour in India”, in: A Survey of Research in
   Economics, Vol. 7, Econometrics, Indian Council of Social Science Research: New Delhi, Allied
   Publishers.
Blackorby,     C., R. Boyce and R. R. Russell (1978) “Estimation            of Demand Systems Generated by the
   Gorman Polar Form; A Generalization              of the S-branch Utility Tree”, Econometrica, 46, 345-363.
Blackorby,      C., D. Primont and R. R. Russell (1977) “On Testing Separability                      Restrictions     With
  Flexible Functional        Forms”, Journal of Econometrics, 5, 195-209.
Blackorby,     C., D. Primont and R. R. Russell (1978) Duality, Separability and Functional Structure.
  New York: American Elsevier.
Blundell, R. W. and I. Walker (1982) “Modelling                 the Joint Determination         of Household         Labour
  Supplies and Commodity           Demands”,    Economic Journal, 92, 351-364.
Breusch, T. S. and A. R. Pagan (1979) “A Simple Test for Heteroscedasticity                   and Random Coefficient
  Variation”,      Econometrica, 47, 1287-1294.
Brown, J. A. C. and A. S. Deaton (1972) “Models of Consumer Behaviour: A Survey”, Economic
 Journal, 82, 1145-1236.
Browning,      M. J., A. Deaton and M. Irish (1985) “A Profitable Approach                      to Labor Supply and
  Commodity        Demands Over the Life-Cycle”,         Econometricu, forthcoming.
Burstein, M. L. (1961) “Measurement             of the Quality Change in Consumer Durables”,                   Manchester
  School, 29, 267-279.
Byron, R. P. (1968) “Methods for Estimating Demand Equations Using Prior Information:                              A Series
  of Experiments       With Australia Data”, Australian Economic Papers, 7, 227-248.
Byron, R. P. (1970a) “A Simple Method for Estimating Demand Systems Under Separable Utility
  Assumptions”,        Review of Economic Studies, 37, 261-274.
Byron, R. P. (1970b) “The Restricted Aitken Estimation of Sets of Demand Relations”,                       Econometrica,
  38, 816-830.
Byron, R. P. (1982) “A Note on the Estimation of Symmetric Systems”, Econometrica, 50, 1573-1575.
Byron, R. P. and M. Rosalsky (1984) “Symmetry and Homogeneity                     Tests in Demand Analysis: A Size
  Correction     Which Works”. University of Florida at Gainsville, mimeo.
Carlevaro, F. (1976) “A Generalization          of the Linear Expenditure        System”, in: L. Solari and J.-N. du
  Pasquier, eds., Private and Enlarged Consumption. North-Holland                  for ASEPELT, 73-92.
Cassell, C. M., C.-E. Samdal and J. H. Wretman (1977) Foundations of Inference in Survey Sampling.
  New York: Wiley.
Caves, D. W. and L. R. Christensen               (1980) “Global      Properties    of Flexible Functional          Forms”,
  Americun Economic Review, 70,422-432.
Chipman,      J. S. (1974) “Homothetic       Preferences and Aggregation”,           Journal of Economic Theory, 8,
  26-38.
Chow, G. (1957) Demand for Automobiles in the U.S.: A Study in Consumer Durables. Amsterdam:
  North-Holland.
Chow, G. (1960) “Statistical        Demand Functions for Automobiles            and Their Use for Forecasting”,            in:
  A. C. Harberger,       ed., The Demand for Durable Goods. Chicago: University of Chicago Press.
Christensen,     L. R., D. W. Jorgenson         and L. J. Lau (1975) “Transcendental               Logarithmic        Utility
  Functions”,      American Economic Review, 65, 367-283.
1832                                                                                                      A. Deaton

Christensen,     L. R. and M. E. Manser (1977) “Estimating          U.S. Consumer Preferences for Meat With a
   Flexible Utility Function”,       Journal of Econometrics, 5, 37-53.
Conrad, K. and D. W. Jorgenson (1979) “Testing the Integrability               of Consumer Demand Functions”,
   European Economic Review, 12, 149-169.
Coondoo,       D. (1975) “EfIects of Household Composition          on Consumption       Pattern: A Note”, Arthan-
   iti, 17.
Court, A. T. (1939) “Hedonic             Price Indexes with Automotive         Examples”,      in: The Dynamics of
  Automobile Demand. New York: General Motors.
Cowling, K. and J. Cubbin (1971) “Price, Quality, and Advertising                   Competition”,      Economica, 82,
   963-978.
Cowling, K. and J. Cubbin (1972) “Hedonic                Price Indexes for U.K. Cars”, Economic Journal, 82,
   963-978.
Cramer, J. S. (1969) Empirical Economics. Amsterdam:               North-Holland.
Cubbin, J. (1975) “Quality           Change and Pricing Behaviour in the U.K. Car Industry 1956-1968”,
    Economica, 42, 43-58.
Deaton, A. S. (1974a) “The Analysis of Consumer Demand in the United Kingdom, 1900-1970”,
    Econometrica, 42, 341-367.
Deaton, A. S. (1974b) “A Reconsideration              of the Empirical Implications       of Additive Preferences”,
    Economic Journal, 84, 338-348.
Deaton, A. S. (1975a) Models and Projections of Demand in Post- War Britain. London: Chapman &
    Hall.
Deaton, A. S. (1975b) “The Measurement                 of Income and Price Elasticities”,         European Economic
    Review, 6, 261-274.
Deaton, A. S. (1975~) The Structure of Demand 1920-1970,                The Fontana Economic History of Europe.
    Collins: Fontana, 6(2).
Deaton,      A. S. (1976) “A Simple Non-Additive              Model of Demand”,        in: L. Solari and J.-N. du
    Pasquier, eds., Private and Enlarged Consumption. North-Holland               for ASEPELT, 56-72.
Deaton, A. S. (1978) “Specification         and Testing in Applied Demand Analysis”, Economic Journal, 88,
    524-536.
Deaton, A. S. (1979) “The Distance Function and Consumer Behaviour with Applications                         to Index
    Number and Optimal Taxation”,            Review of Economic Studies, 46, 391-405.
Deaton, A. S. (1981a) “Optimal Taxes and the Structure of Preferences”,               Econometrica, 49,1245-1268.
Deaton, A. S. (1981b) “Theoretical           and Empirical Approaches      to Consumer Demand Under Ration-
    ing”, in: A. S. Deaton, ed., Essays in the Theory and Measurement of Consumer Behaviour. New
    York: Cambridge        University Press.
Deaton,      A. S. (1981~) “Three Essays on a Sri Lankan                 Household      Survey”. Living Standards
    Measurement       Study W.P. No. 11, Washington:         The World Bank.
Deaton, A. S. (1982)“Model            Selection Procedures, or Does the Consumption             Function Exist?“, in:
    G. Chow and P. Corsi, eds., Evaluating the Reliability of Macroeconomic Models. New York: Wiley.
Deaton,      A. S. (1984) “Household          Surveys as a Data Base for the Analysis of Optimality                and
    Disequilibrium”,      Sankhya: The Indian Journal of Statistics, 46, Series B, forthcoming.
Deaton, A. S. and M. Irish (1984) “A Statistical Model for Zero Exoenditures                 in Household Budeets”.
                                                                                                                 -
    Journal of Public Economics, 23, 59-80.
Deaton, A. S. and J. Muellbauer (1980a) Economics and Consumer Behavior. New York: Cambridge
    University    Press.
Deaton, A. S. and J. Muellbauer (1980b) “An Almost Ideal Demand System”, Amertcan Economic
    Review, 70, 312-326.
Deaton, A. S. and J. Muellbauer             (1981) “Functional     Forms for Labour Supply and Commodity
  Demands with and without Quantity Constraints”,               Econometrica, 49, 1521-1532.
Deaton, A. S. and J. Muellbauer             (1986) “Measuring      Child Costs in Poor Countries”,         Journal of
  Political Economy, forthcoming.
Dhrymes, P. J. (1971) “Price and Quality Changes in Consumer Capital Goods: An Empirical Study”,
  in: Z. Griliches, ed., Price Indexes and Quality Change: Studies in New Methods of Measurement.
  Cambridge:       Harvard University Press.
Diewert, W. E. (1971) “An Application             of the Shephard Duality Theorem: A Generalized             Leontief
  Production      Function”,   Journal of Political Economy, 79, 481-507.
Diewert, W. E. (1973a) “Afriat and Revealed Preference Theory”, Review of Economic Studies, 40,
 419-426.
Ch. 30: Demand Analysis                                                                                            1833

Diewert, W. E. (1973b) “Functional               Forms for Profit and Transformation           Functions”,    Journal of
   Economic Theory, 6, 284-316.
Diewert, W. E. (1974a) “Applications             of Duality Theory”, Chapt. 3 in: M. D. Intriligator           and D. A.
    Kendrick, eds., Frontiers of Quantitiue Economics, American Elsevier: North-Holland,                    Vol. II.
Diewert,       W. E. (1974b) “Intertemporal              Consumer     Theory    and the Demand          for Durables”,
    Econometrica, 42, 497-516.
Diewert, W. E. (1980a) “Symmetry               Conditions for Market Demand Functions”,            Review of Economic
    Studies, 47, 595-601.
Diewert, W. E. (1980b) “Duality Approaches                 to Microeconomic     Theory”, in: K. J. Arrow and M.~ J.
    Intriligator,    eds., Handbook of Mathematical Economics. North-Holland.
Diewert, W. E. (1981) “The Economic Theory of Index Numbers: A Survey”, in: A. S. Deaton, ed.,
    Essays in the Theory and Measurement of Consumer Behaviour in Honour of Sir Richard Stone.
    Cambridge:       Cambridge     University Press.
Diewert, W. E. (1983) “The Theory of the Cost of Living Index and the Measurement                             of Welfare
    Change”. University of British Columbia, mimeo.
Dicwert, W. E. and C. Parkan (1978) “Tests for Consistency of Consumer Data and Nonparametric
    Index Numbers”.         University of British Columbia: Working Paper 78-27, mimeo.
DuMouchel,          W. H. and G. J. Duncan (1983) “Using Sample Survey Weights in Multiple Regression
  Analyses of Statified Samples”, Journul of American Statistical Association, 78, 535-543.
Eisenberg, E. (1961) “Aggregation            of Utility Functions”,    Management Science, 7, 337-350.
Engel, E. (1895) “Die Lebenskosten                Belgischer Arbeiterfamilien      friiher und jetzt”, International
  Stutistical Institute Bulletin, 9, l-74.
Epstein, L. and A. Yatchew (1985). “Non-parametric                   Hypothesis   Testing Procedures and Applica-
  tions to Demand Analysis”, University of Toronto, mimeo.
Evans, G. B. A. and N. E. Savin (1982) “Conflict Among the Criteria Revisited; the W, LR and LM
  Tests”, Econometrica, 50, 737-748.
Federenko, N. P. and N. J. Rimashevskaya               (1981) “The Analysis of Consumption         and Demand in the
  USSR”, in: A. S. Deaton, ed., Essays in the Theory and Measurement of Consumer Behauiour. New
  York: Cambridge          University Press.
Fiebig, D. G. and H. Theil(1983)            “The Two Perils of Symmetry Constrained            Estimation of Demand
  Systems”, Economics Letters, 13, 105-111.
Fisher, F. M. and K. Shell (1971) “Taste and Quality Change in the Pure Theory of the True Cost of
  Living Index”, in: Z. Griliches, ed., Price Indexes and Quality Changes: Studies in New Methods of
  Meusurement.         Cambridge:    Harvard University Press.
Forsyth, F. G. (1960) “The Relationship               Between Family Size and Family Expenditure”,             Journal of
  the Royal Statistical Society, Series A, 123, 367-397.
Freixas, X. and A. Mas-Cole11 (1983) “Engel Curves Leading to the Weak Axiom in the Aggregate”.
  Harvard University,         mimeo.
Frisch, R. (1932) New Methods of Measuring Marginal Utility. Tubingen: J.C.B. Mohr.
Frisch, R. (1959) “A Complete Scheme for Computing All Direct and Cross Demand Elasticities in a
  Model with Many Sectors”, Econometrica, 27, 367-397.
Gallant,      R. A. (1975) “Seemingly Unrelated Non-Linear              Regressions”,     Journal of Econometrics, 3,
  35-50.
Gallant, R. A. (1981) “On the Bias in Flexible Functional Forms and an Essentially Unbiased Form:
  The Fourier Functional          Form”, Journal of Econometrics, 15,211-245.
Gallant,      R. A. and G. H. Golub (1983) “Imposing               Curvature Restrictions     on Flexible Functional
  Forms”. North Carolina State Umversity and Stanford University, mimeo.
Godambe,          V. P. (1955) “A Unified Theory of Sampling From Finite Populations”,                   Journal of the
  Royal Stutisticul Society, Series B, 17, 268-278.
Godambe,          V. P. (1966) “A New Approach            to Sampling from Finite Populations:          Sufficiency and
  Linear Estimation”,         Journal of the Royal Statistical Society, Series B, 28, 310-319.
Goldberger,        A. S. (1964) Econometric Theory. New York: Wiley.
Goldberger,        A. S. (1967) “Functional      Form and Utility: A Review of Consumer Demand Theory”.
  Social Systems Research Institute, University of Wisconsin, mimeo.
Gorman,        W. M. (1953) “Community          Preference Fields”, Econometrica 21, 63-80.
Gorman,        W. M. (1956, 1980) “A Possible Procedure for Analysing Quality Differentials in ihe Egg
  Market”,        Review of Economic Studies, 47, 843-856.
Gorman, W. M. (1959) “Separable Utility and Aggregation”,                    Econometrica, 27, 469-481.
1834                                                                                                       A. Deuton

Gorman, W. M. (1961) “On a Class of Preference Fields”, Metroeconomica, 13, 53-56.
Gorman, W. M. (1968) “The Structure of Utility Functions”,                 Review of Economic Studies, 5, 369-390.
Gorman, W. M. (1970) “Quasi Separable Preferences, Costs and Technologies”.                       University of North
  Carolina, Chapel Hill, mimeo.
Gorman,      W. M. (1976) “Tricks with Utility Functions”,             in: M. Artis and R. Nobay, eds., Essays in
   Economic Analysis. Cambridge:            Cambridge University Press.
Gorman,       W. M. (1981) “Some Engel Curves”, in: A. S. Deaton,                       ed., Essays in Theory and
   Measurement of Consumer Behaviour. New York: Cambridge University Press.
Granger,      C. W. .I. and P. Newbold (1974) “Supurious                Regressions   in Econometrics”,      Journal of
   Econometrics, 2, 111-120.
Griffin, J. M. (1978) “Joint Production Technology:              The Case of Petro-Chemicals”,       Econometricu 46,
   379-396.
Griliches, Z. (1961) “Hedonic           Price Indexes for Automobiles:        An Econometric      Analysis of Quality
   Change”,       in: Z. Griliches, ed., Price Indexes und Quality Change: Studies in New Methods of
   Measurement. Cambridge:           Harvard University Press, 1971.
G&key,       D. K. and C. A. Knox Love11 (1980) “On the Flexibility of the Translog Approximation”,
   International Economic Review, 21, 137-147.
Guilkey, D. K. and P. Schmidt (1973) “Estimation                 of Seemingly Unrelated Regressions with Vector
   Auto-Regressive        Errors”, Journal of the American Statistical Association, 68, 642-647.
Haitovsky,      Y. (1973) Regression Estimation from Grouped Observations. New York: Hafner.
Hall, R. E. (1978) “Stochastic         Implications    of the Life-Cycle Permanent Income Hypothesis:           Theory
   and Evidence”, Journal of Political Economy, 86, 971-987.
Hanoch, G. and M. R. Rothschild (1972) “Testing the Assumptions                      of Production    Theory: A Non
   Parainetric      Approach”,    Journal of Political Economy, 80, 256-275.
Hausman,       J. A. (1978) “Specification      Tests in Econometrics”,      Econometrica, 46, 1251-1271.
Hausman,       J. A. (1980) “The Effect of Wages, Taxes, and Fixed Costs on Women’s Labor Force
   Participation”,       Journal of Public Economics, 14, 161-194.
Hausman,        J. A. (1981) “Exact Consumer’s            Surplus and Deadweight        Loss”, American Economic
   Review, 71, 662-676.
Hausman,       J. A. (1985) “The Econometrics          of Non-Linear     Budget Sets”, Econometricu, forthcoming.
Hausman,       J. A. and D. A. Wise (1980) “Discontinuous                Budget Constraints     and Estimation:     The
  Demand for Housing”,            Review of Economic Studies, 47, 45-96.
Heckman,        J. J. (1978) “A Partial Survey of Recent Research on the Labor Supply of Women”,
  American Economic Review, pap & proc, 68, 200-207.
Heckman,       J. J. (1979) “Sample Selection Bias as a Specification Error”, Econometrica, 47, 153-161.
Heckman,       J. J. and T. MaCurdy (1980) “A Life-Cycle Model of Female Labor Supply”, Review of
  Economic Studies, 47, 47-74.
Henderson,       A. M. (1949-1950a)      “The Costs of Children”, Populution Studies, Parts I-III, 3,130-150,
  4, pp 267-298.
Henderson,       A. M. (1949-1950b)        “The Cost of a Family”, Review of Economic Studies, 17, 127-148.
Hendry, D. F. (1980) “Econometrics:              Alchemy or Science”, Economica, 47, 387-406.
Hicks, J. R. (1936) V&e and Capital. Oxford: Oxford Univeristy Press.
Hicks, J. R. (1956) A Revision of Demand Theory. Oxford: Oxford University Press.
Hildenbrand,        W. (1983) “On the Law of Demand”,             Econometrica, 51, 997-1019.
Hoa, Tran van (1983) “The Integrability               of Generalized     Working Models”, Economics Letters, 13,
  101-104.
Hoa, Tran van, D. S. Ironmonger                 and I. Manning       (1983) “Energy     Consumption       in Australia:
  Evidence from a Generalized Working Model”, Economics Letters, 12,383-389.
Houthakker,        H. S. (1957) “An International        Comparison      of Household Expenditure       Patterns Com-
  memorating         the Centenary of Engel’s Law”, Econometrica, 25, 532-551.
Houthakker,        H. S. (1960) “Additive Preferences”,        Econometrica, 28, 224-256.
Houthakker,        H. S. and L. D. Taylor (1966) Consumer Demand in the United Stutes, 1929-70, Analysis
  und Projections. Cambridge:          Harvard Univeristy Press, second edition 1970.
Howe, H. and P. Musgrove (1977) “An Analysis of ECIEL Household                            Budget Data for Bogota,
  Caracas,      Guayaquil      and Lima”, in: C. Lluch, A. A. Powell and R. Williams, eds., Putterns in
  Household Demund and Saving. Oxford: Oxford University Press for the World Bank.
Howe, H., R. A. Pollak and T. J. Wales (1979) “Theory and Time Series Estimation of the Quadratic
  Expenditure        System”, Econometrica, 47, 1231-1247.
Ch. 30: Demand Analysis                                                                                          1835

Hurwicz, L. and H. Uzawa (1971) “On the Integrability                of Demand Functions”,       in: J. S. Chipman,
  L. Hurwicz. M. K. Richter and H. F. Sonnenschein,                 eds., Preference, Utility and Demand. New
  York: Harcourt,        Brace, Jovanovich, 114-148.
Iyengar, N. S.. L. R. Jain and T. N. Srinivasar (1968) “Economies                of Scale in Household Consump-
  tion: A Case Study”, Indian Economic Journal, Econometric Annual, 15, 465-477.
Jackson, C. (196&) “Revised Equivalence Scales for Estimating Equivalent Incomes for Budget Costs
  by Family Type”, BLS Bulletin, U.S. Dept. of Labor, 1570-1572.
Jerison, M. (1984) “Aggregation           and Pairwise Aggregation       of Demand When the Distribution              of
  Income is Fixed”, Journal of Economic Theory, forthcoming.
Jorgenson,      D. W. and L. J. Lau (1975) “The Structure of Consumer Preferences”,              Annuls of Economic
  und Social Measurement, 4, 49-101.
Jorgenson,      D. W. and L. J. Lau (1976) “Statistical Tests of the Theory of Consumer Behaviour”, in:
  H. Albach. E. Helmstadter           and R. Henn, eds., Quantitative Wirtschuftsforschung.         Tubingen: J.C.B.
  Mohr.
Jorgenson,      D. W., L. J. Lau and T. Stoker (1982) “The Transcendental                   Logarithmic      Model of
  Aggregate Consumer Behavior”, Advances in Econometrics, 1, JAI Press.
Kannai,     Y. (1977) “Concavifiability       and Constructions      of Concave Utility Functions”,         Journal of
  Muthematicul Economics, 4, l-56.
Kay, J. A., M. J. Keen and C. N. Morris (1984) “Consumption,                   Income, and the Interpretation         of
  Household       Expenditure     Data”, Journul of Public Economics, 23, 169-181.
Kina, M. A. (1980) “An Econometric             Model of Tenure Choice and Demand for Housing as a Joint
  D&ision”,       Journul of Public Economics, 14, 137-159.
Klein, L. R. and H. Rubin (1947-48) “A Constant Utility Index of the Cost of Living”, Review of
  Economic Studies, 15, 84-87.
Kuznets, S. (1962) “Quantitative          Aspects of the Economic Growth of Nations: VII The Share and
  Structure of Consumption”,           Economic Development and Cultural Change, 10, l-92.
Kuznets, S. (1966) Modern Economic Growth. New Haven: Yale University Press.
Laitinen,      K. (1978) “Why is Demand Homogeneity               so Often Rejected?“,       Economics Letters, 1,
  187-191.
Lancaster,      K. J. (1966) “A New Approach to Consumer Theory”, Journal of Political Economy, 74,
    132-157.
Lau, L. J. (1978) “Testing and Imposing Monotonicity,            Convexity, and Quasi-Concavity”,         in: M. Fuss
    and D. McFadden,           eds., Production Economics: A Dual Approach to Theory and Applications.
    Amsterdam:       North-Holland.
Lau, L. J. (1982) “A Note on the Fundamental            Theorem of Exact Aggregation”,         Economics Letters, 9,
    119-126.
Lee, L. F. and M. M. Pitt (1983) “Specification             and Estimation of Demand Systems with Limited
    Dependent      Variables”. University of Minnesota, mimeo.
Leser, C. E. V. (1963) “Forms of Engel Functions”,             Econometricu, 31, 694-703.
Lluch, C. (1971) “Consumer             Demand Functions,     Spain, 1958-64”,       European Economic Review, 2,
    227-302.
Lluch, C. (1973) “The Extended Linear Expenditure               System”, European Economic Review, 4, 21-32.
Lluch, C., A. A. Powell and R. A. Williams (1977) Patterns in Household Demand and Saving. Oxford:
    Oxford University Press for the World Bank.
Lluch, C. and R. A. Williams (1974) “Consumer             Demand Systems and Aggregate Consumption               in the
    U.S.A.:     An Application       of the Extended     Linear Expenditure        System”,    Cunudian Journal of
    Economics, 8, 49-66.
 MaCurdy,       T. E. (1981) “An Empirical Model of Labor Supply in a Life-Cycle Setting”, Journal of
   Politicul Economy, 89, 1059-1085.
 Malinvaud,      E. (1970) ‘Statistical Methods of Econometrics. Amsterdam:          North-Holland.
 Manser, M. E. and R. J. McDonald               (1984) “An Analysis of the Substitution           Bias in Measuring
   Inflation”,    Bureau of Labor Statistics, mimeo.
 Marquardt,      D. W. (1963) “An Algorithm for Least-Squares            Estimation on Non-Linear        Parameters”,
  Journal of the Society of Industrial and Applied Mathematics, 11, 431-441.
 Mayo, S. K. (1978) “Theory and Estimation               in the Economics of Housing Demand”,               Journal of
   Urban Economics, 14,137-159.
 McClements,        L. D. (1977) “Equivalence        Scales for Children”,       Journal of Public Economics, 8,
   191-210.
1836                                                                                                        A. De&on

McFadden,       D. (1978) “Costs, Revenue, and Profit Functions”,           in: M. Fuss and D. McFadden,           eds.,
  Production Economics: A Dual Approach to Theory and Applications. Amsterdam:                     North-Holland.
McGuire, T. W., J. W. Farley, R. E. Lucas and R. L. Winston (1968) “Estimation                     and Inference for
  Linear Models in which Subsets of the Dependent                   Variable are Constrained”,         Journal of the
  American Statistical Association, 63, 1201-1213.
Meisner. J. F. (1979) “The Sad Fate of the Asymptotic               Slutsky Symmetry Test for Large Systems”,
  Economic Letters, 2, 231-233.
Muellbauer,      .I. (1974) “Household      Composition,     Engel Curves and Welfare Comparisons             Between
  Households:        A Duality Approach”,      European Economic Review, 103-122.
Muellbauer,      J. (1975a) “The Cost of Living and Taste and Quality Change”, Journul of Economic
  Theor?;, 10, 269-283.
Muellbauer,       .I. (1975b) “Aggregation,      Income Distribution       and Consumer       Demand”,      Review of
  Economic Studies, 62, 525-543.
Muellbauer,     J. (1976a) “Community        Preferences and the Representative        Consumer”,       Econometrica,
  44, 979-999.
Muellbauer,      J. (1976b) “Economics       and the Representative       Consumer”,    in: L. Solari and J-N. du
   Pasquier,    eds., Private and Enlarged Consumption. Amsterdam:                North-Holland       for ASEPELT,
   29-53.
Muellbauer,      J. (1976~) “Can We Base Welfare Comparisons                Across Households       on Behaviour?“.
   London: Birkbeck Coliege, mimeo.
Muellbauer,     J. (1977) “Testing the Barten Model of Household Composition                Effects and the Cost of
   Children”,      Economic Journal, 87, 460-487.
Muellbauer,      J. (1980) “The Estimation         of the Prais-Houthakker        Model of Equivalence         Scales”,
   Econometrica, 48, 153-176.
Muellbauer,      J. (1981a) “Testing Neoclassical        Models of the Demand for Consumer Durables”,                in:
   A. S. Deaton, ed., Essays in the Theory and Measurement of Consumer Behaviour. New York:
   Cambridge       University Press.
Muellbauer,      J. (1981b) “Linear Aggregation         in Neoclassical    Labour Supply”, Review of Economic
   Studies, 48, 21-36.
Musgrove, P. (1978) Consumer Behavior in Latin America: Income and Spending of Families in Ten
  Andean Cities. Washington:         Brookings.
Neary, J. P. and K. W. S. Roberts (1980) “The Theory of Household Behaviour Under Rationing”,
   European Economic Review, 13, 25-42.
Nicholson,     J. L. (1949) “Variations       in Working Class Family _ Expenditure”,
                                                                                _              Journal of the Royal
   Statistical Society, Skies A, 112, 359-411.             -
Ohta. M. and 2. Griliches (19761 “Automobile             Prices Revisited: Extensions of the Hedonic Hvuothe-
   sis”, in: N. Terleckyj, ed:, Ho’usehold Production and Consumption. New York: National B&au of
   Economic Research.
Orshansky,      M. (1965) “Counting       the Poor: Another Look at the Poverty Profile”, Social Security
   Bulletin, 28, 3-29.
Parks, R. W. (1969) “Systems of Demand Equations:                     An Empirical     Comparison       of Alternative
   Functional      Forms”, Econometrica, 37, 629-650.
Pearce, I. F. (1964) A Contribution lo Demand Analysis. Oxford University Press.
Phlips, L. (1972) “A Dynamic Version of the Linear Expenditure                  Model”, Review of Economics and
   Statistics, 54, 450-458.
Phlips, L. (1974) Applied Consumprion Analysis. Amsterdam                   and Oxford: North-Holland,          second
   edition 1983.
Pigou, A. C. (1910) “A Method of Determining                  the Numerical Value of Elasticities of Demand”,
   Economic Journal, 20,636-640.
Pollak, R. A. (1975) “Subindexes          in the Cost-of-Living      Index”, International Economic Review, 16,
   135-150.
Pollak, R. A. and T. J. Wales (1978) “Estimation                of Complete Demand Systems from Household
   Budget Data”, American Economic Review, 68, 348-359.
Pollak, R. A. and T. J. Wales (1979) “Welfare                Comparisons     and Equivalence      Scales”, American
   Economic Review, pap & proc 69, 216-221.
Pollak, R. A. and T. J. Wales (1980) “Comparison             of the Quadratic Expenditure System and Translog
   Demand       Systems with Alternative        Specifications    of Demographic      Effects”,    Economerrica, 48,
   595-612.
Ch. 30: Demand Analysis                                                                                      1837

Pollak, R. A. and T. .I. Wales (1981) “Demographic           Variables in Demand Analysis”,         Econometrica,
   49,1533-1551.
Powell, A. A. (1969) “Aitken Estimators as a Tool in Allocating Predetermined              Aggregates”,    Journal
   of the American Statistical Association, 64, 913-922.
Prais, S. J. (1959) “A Comment”,        Econometrica, 27, 127-129.
Prais, S. J. and H. S. Houthakker        (1955) The Analysis of Family Budgets. Cambridge:             Cambridge
   University Press, second edition 1971.
Pudney, S. E. (1980) “Disaggregated         Demand Analysis: The Estimation           of a Class of Non-Linear
   Demand Systems”, Review of Economic Studies, 47, 875-892.
Pudney, S. E. (1981a) “Instrumental         Variable Estimation     of a Characteristics   Model of Demand”,
   Review of Economic Studies, 48,417-433.
Pudney, S. E. (1981b) “An Empirical Method of Approximating               the Separable Structure of Consumer
   Preferences”,     Review of Economic Studies, 48, 561-577.
Quandt, R. E. (1983) “Computational          Problems and Methods”,        Handbook of Econometrics. Chapter
   12, Vol. 1.
Reece, W. S. and K. D. Zieschang (1985) “Consistent            Estimation of the Impact of Tax Deductibility
  on the Level of Charitable Contributions”,         Econometrica, forthcoming.
Rothbarth,    E. (1941) “The Measurement       of Change in Real Income Under Conditions of Rationing”,
  Review of Economic Studies, 8, 100-107.
Rothbarth,    E. (1943) “Note on a Method of Determining Equivalent Income for Families of Different
  Composition”,      Appendix 4 in: C. Madge, ed., War-Time Pattern of Saving and Spending. Occasional
  paper No. 4., London: National Institute of Economic and Social Research.
Roy, R. (1942) De I’Utilith, Contribution b la Theorie des Choix. Paris: Hermann.
Russell, T. (1983) “On a Theorem of German”,             Economics Letters, 11, 223-224.
Samuelson, P. A. (1938) “A Note on the Pure Theory of Consumer Behaviour”,                 Economica, 5, 61-71.
Samuelson, P. A. (1947) Foundations of Economic Analysis. Cambridge:               Harvard University Press.
Samuelson, P. A, (1947-48) “Some Implications of Linearity”,            Review of Economic Studies, 15, 88-90.
Samuelson,     P. A. (1948) “Consumption       Theory in Terms of Revealed Preference”,           Economica, 15,
  243-253.
Samuelson,     P. A. (1956) “Social Indifference Curves”, Quarterly Journal of Economics, 70, l-22.
Sargan, J. D. (1964) “Wages and Prices in the United Kingdom” in: P. E. Hart, C. Mills and J. K.
  Whitaker, eds., Econometric Analysis for National Economic Planning. London: Butterworths.
Sargan, J. D. (1971) “Production       Functions”,    Part V in: P. R. G. Layard, J. D. Sargan, M. E. Ager
  and D. J. Jones, eds., Qualified Manpower and Economic Performance. London: Penguin Press.
Seneca, J. J. and M. K. Taussig (1971) “Family               Equivalence     Scales and Personal Income Tax
  Exemptions      for Children”,  Review of Economics and Statistics, 53, 253-262.
Shapiro, P. (1977) “Aggregation      and the Existence of a Social Utility Functions”,       Review of Economic
  Studies, 46, 653-665.
Shapiro, P. and S. Braithwait (1979) “Empirical         Tests for the Existence of Group Utility Functions”,
  Review of Economic Studies, 46, 653-665.
Shephard,    R. (1953) Cost and Production Functions. Princeton: Princeton University Press.
Simmons, P. (1980) “Evidence on the Impact of Income Distribution                 on Consumer Demand in the
  U.K. 1955-68”,       Review of Economic Studies, 47, 893-906.
Singh, B. (1972) “On the Determination              of Economies      of Scale in Household       Consumption”,
  International Economic Review, 13, 257-270.
Singh, B. (1973) “The Effect of Household            Composition     on its Consumption     Pattern”,    Sankhya,
  Series B, 35, 207-226.      .
Singh B. and A. L. Nagar (1973) “Determination               of Consumer      Unit Scales”, Econometrica, 41,
  347-355.
Spinnewyn,     F. (1979a) “Rational    Habit Formation”,      European Economic Review, 15, 91-109.
Spinnewyn,     F. (1979b) “The Cost of Consumption          and Wealth in a Model with Habit Formation”,
  Economics Letters, 2, 145-148.
Srivastava,    V. K. and T. D. Dwivedi (1979) “Estimation                of Seemingly     Unrelated     Regression
  Equations:     A Brief Survey”, Journal of Econometrics, 10, 15-32.
Stoker, T. (1982) “The Use of Cross-Section          Data to Characterize     Macro Functions”,     Journal of the
  American Statistical Association, 77, 369-380.
1838                                                                                                              A. Deaion

Stoker, T. (1985) “Completeness,             Distribution    Restrictions    and the Form of Aggregate Functions”,
  Econometrico, forthcoming.
Stone, J. R. N. (1954) “Linear Expenditure                Systems and Demand Analysis: An Application                  to the
  Pattern of British Demand”,           Economic Journal, 64, 511-527.
Stone, J. R. N. (1956) Quantity and Price Indexes in National Accounts. Paris: OEEC.
Stone, R. and D. A. Rowe (1957) “The Market Demand for Durable Goods”,                                   Econometrica, 25,
  423-443.
Stone, R. and D. A. Rowe (1958) “Dynamic                       Demand Functions:          Some Econometric         Results”,
  Economic Journal, 27, 256-70.
Summers,       R. (1959) “A Note on Least Squares Bias in Household                              Expenditure      Analysis”,
  Econometrica, 27, 121-126.
Sydenstricker,      E. and W. I. King (1921) “The Measurement                     of the Relative Economic Status of
  Families”,     Quarterly Publication of the American Statistical Association. 17, 842-857.
Szakolnai,      G. (1980) “Limits to Redistribution:             The Hungarian         Experience”,    in: D. A. Collard,
  R. Lecomber         and M. Slater, eds., Income Distribution,                 the Limits to Redistribution.        Bristol:
  Scientechnica.
Theil. H. (1954) Lineur Aggregation of Economic Relations. Amsterdam:                      North-Holland.
Theil. H. (1965) “The Information             Approach to Demand Analysis”, Econometricu, 33. 67-87.
Theil, H. (1971a) Principles of Econometrics. Amsterdam:                  North-Holland.
Theil, H. (1971b) “An Economic Theory of the Second Moments of Disturbances                                 of Behavioural
  Equations”,      American Economic Review, 61, 190-194.
Theil. H. (1974) “A Theorv of Rational Random Behavior”.                           Journal of the American Statistical
  Assoctution, 69, 310-314. ’
Theil, H. (1975a) “The Theory of Rational                    Random       Behavior and its Application          to Demand
  Analysis”,     European Economic Review, 6, 217-226.
Theil, H. (1975b) Theory and Measurement of Consumer Demand. North-Holland,                             Vol. I.
Theil, H. (1976) Theory and Measurement of Consumer Demand. North-Holland,                            Vol. II.
Theil, H. (1979) The System- Wide Approach to Microeconomics. Chicago: University of Chicago Press.
Theil, H. and K. Laitinen (1981) “The Independence                     Transformation:     A Review and Some Further
   Explorations”,      in: A. S. Deaton, ed., Essays in the’Theory and Measurement of Consumer Behaoiour.
   New York: Cambridge            University Press.
Theil, H. and M. Rosalsky (1984) “More on Symmetry-Constrained                               Estimation”.     University     of
   Florida at Gainesville, mimeo.
Theil, H. and F. E. Suhm (1981) International Consumption Comparisons: A S,vstem- Wide Approuch.
   Amsterdam:       North-Holland.
Tbursby, J. and C. A. Knox Love11 (1978) “An Investigation                       of the Kmenta Approximation            to the
   CES Function”,         International Economic Review, 19, 363-377.
Tobin, J. (1952) “A Survey of the Theory of Rationing”,                   Econometrica, 20, 512-553.
Tobin, J. (1958) “Estimation           of Relationships     for Limited Dependent Variables”,             Econometrica, 26,
   24-36.
Tobin, J. and H. S. Houthakker            (1951) “The Effects of Rationing on Demand Elasticities”,                Review of
   Economic Studies, 18, 140-153.
Tomqvist,      L. (1941) “Review”, Ekonomisk Tidrkrtjt, 43, 216-225.
Varian, II. R. (1978) “A Note on Locally Constant Income Elasticities”,                        Economics Letfers, 1, 5-9.
Varian,    H. R. (1982) “The Nonparametric                  Approach      to Demand Analysis”,           Econometriccr, 50,
   945-973.
Varian, H. R. (1983) “Nonparametric               Tests of Consumer Behavior”, Review oj Economic Studies, 50,
   99-110.
Varian, H. R. (1984) “Nonparametric                 Analysis of Optimizing Behavior with Measurement                  Error”.
   University of Michigan, mimeo.
Vartia, Y. 0. (1983) “Efficient Methods of Measuring Welfare Change and Compensated                               Income in
   Terms of Market Demand Functions”,                  Econometrica, 51, 79-98.
Wales, T. J. (1977) “On the Flexibility of Flexible Functional                      Forms: An Empirical Approach”,
   Journal of Econometrics, 5, 183-193.
Wales. T. J. and A. D. Woodland (1983) “Estimation                      of Consumer Demand Systems with Binding
  Non-Negativity        Constraints”,    Journal of Econometrics, 21, 263-285.
Ch. 30: Demand Analysis                                                                                    1839

White, H. (1980) “A Heteroskedasticity-Consistent         Covariance Matrix Estimator and a Direct Test for
  Heteroskedasticity”,      Econometrica, 48, 817-838.
Willig, R. (1976) “Integrability     Implications    for Locally Constant Demand Elasticities”,      Journal of
  Economic Theory, 12, 391-401.
de Wolff, P. (1941) “Income          Elasticity of Demand,      a Micro-Economic       and a Macro-Economic
  Interpretation”,      Economic Journal, 51, 104-145.
Woodland,      A. (1979) “Stochastic    Specification and the Estimation of Share Equations”,        Journal of
  Econometrics, 10, 361-383.
Working,     H. (1943) “Statistical   Laws of Family Expenditure”,         Journal of the American Statistical
  Association, 38, 43-56.
Wu, D-M. (1973) “Alternative           Tests of Independence        Between Stochastic    Regressors  and Dis-
   turbances”,     Econometrica, 41, 733-750.
Yoshihara,     K. (1969) “Demand       Functions:    An Application    to the Japanese Expenditure     Pattern”,
   Econometrica, 37, 257-274.
Zellner, A. (1962) “An Efficient Method of Estimating Seemingly Unrelated Regressions and Tests for
  Aggregation      Bias”, Journal of the American Statistical Association, 57, 348-368.



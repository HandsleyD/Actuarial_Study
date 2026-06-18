---
normalized_id: shared-pdf-reference-estimation-and-specification-in-labor-supply-and-consumption-models
exam_code: SHARED
material_scope: estimation and specification in labor supply and consumption models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Estimation and Specification in Labor Supply and Consumption Models.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-estimation-and-specification-in-labor-supply-and-consumption-models

Estimation and Specification in Labor Supply
         and Consumption Models
     Richard Blundell∗, Thomas MaCurdy†and Costas Meghir‡
                                December 2003


                                     Abstract
        This chapter is concerned with the identification and estimation of mod-
    els of labor supply and consumption. The focus is on the key issues that
    arise from unobserved heterogeneity and nonparticipation. We examine
    the simple ‘static’ labor supply model with proportional taxes and high-
    light the problems surrounding nonparticipation and missing wages. We
    also consider diﬀerence in diﬀerences approach to estimation and identifi-
    cation. We consider the impact of incorporating nonlinear taxation and
    welfare programme participation and on family labor supply. Finally we
    consider intertemporal models focusing on the diﬃculties that arise with
    participation and heterogeneity.
        Keywords: Labour supply, consumption, taxation, microeconomet-
    rics.
        JEL: D1, D9, J2.

∗
  University College London and Institute for Fiscal Studies
†
  Department of Economics, Stanford University and Hoover Institute.
‡
  University College London and Institute for Fiscal Studies
                                 Contents

1. Introduction
2. Estimation and Identification with Participation with Proportional Taxes
      2.1 Static Specifications
      2.2 Estimation of the Static Labor Supply Model
      2.3 The Censored Regression Model
      2.4 Missing Wages
      2.5 Fixed Costs
3. Diﬀerence-in-Diﬀerences, Natural Experiments and Grouping Methods
      3.1 Diﬀerence-in-Diﬀerences and the Fixed Eﬀects Estimator
      3.2 Estimating a Structural Parameter
      3.3 Grouping Estimators
      3.4 The Diﬀerence-in-Diﬀerence Estimator and Behavioral Responses
4. Estimation with Nonlinear Budget Constraints
      4.1 Modeling Nonlinear Features of Budget Constraints
      4.2 Simple Characterizations of Labor Supply and Consumption with Dif-
ferentiable Constraints
      4.3 Convex Piecewise-Linear Constraints with Full Participation
      4.4 Accounting for Participation with Fixed Costs
      4.5 Maximum Likelihood: Convex Diﬀerentiable Constraints with Full Par-
ticipation
      4.6 Maximum Likelihood: Convex Piecewise-Linear Constraints with Full
Participation
       4.7 Maximum Likelihood Estimation Imposes Restrictions on Behavioral
Responses
      4.8 Maximum Likelihood: Accounting for Participation and Missing Wages
      4.9 Welfare Participation: Maximum Likelihood with NonConvex Constraints
      4.10 Computational Simplification by Making Hours Choices Discrete
5. Family Labor Supply
      5.1 The Standard ‘Unitary’ Family Labor Supply Model
      5.2 Discrete Hours of Work and Program Participation
      5.3 Collective Models of Family Labor Supply
6. Intertemporal Models of Labour Supply

                                      2
     6.1 Intertemporal Labor Supply with Saving
     6.2 Further Issues in the Specification and Estimation of Dynamic Models
of Labour Supply and Consumption
     6.3 Dynamic Discrete Models and Intertemporal Non-Separability
     6.4 Estimation with Savings, Participation and Unobserved Heterogeneity
7. Summary and Conclusions
 References
 Appendix




                                     3
1. Introduction
     This chapter is concerned with the identification and estimation of labor sup-
ply and consumption models. The specification and estimation of such models
has already been the subject of numerous studies and surveys. So why this one?
The overall objective of this chapter is to consider models that allow policy eval-
uation and simulation allowing for individual heterogeneity. Evaluation concerns
the assessment of reforms that have taken place. Policy simulation concerns the
assessment of proposed reforms. For the most part it is the latter that has been
the central concern of empirical researchers. That is to construct a model that
can reliably be used for the assessment of proposed reforms. Since most policy
proposals involve the reform of highly nonlinear budget constraints and impact
decisions that are discrete and cover the whole life-cycle, we argue that a fully
specified dynamic structural model is the ideal. In particular it is of central im-
portance to consider how labour supply and savings decisions interact and how
policy aﬀects both labour supply decisions within a period as well as intertempo-
rally. However, this ideal has a number of practical and theoretical diﬃculties. In
certain situations, the evaluation of existing reforms can be analyzed using much
simpler and potentially more robust techniques.
    To best convey the set of issues surrounding estimation of labour supply and
consumption models we start with the simplest static framework and build up to
the more complete dynamic models, adding important elements such as nonlinear
budget sets on the way. Thus, the layout of the chapter is as follows. Section
2 presents an assessment of the estimation issues underlying the simple ‘static’
labor supply model with proportional taxes and highlights the problems surround-
ing nonparticipation and missing wages. In section 3 we consider the natural
experiment and diﬀerence-in-diﬀerences approaches to estimation and evaluation
of reforms, laying out the identifying assumptions underlying interpretation of
the results. We consider estimation of a simple discrete policy response parame-
ter as well as the estimation of income and substitution eﬀects. In section 4 we
examine the impact of incorporating nonlinear taxation and welfare programme
participation. Section 5 considers some of the specific issues that relate to family
labor supply, including the development of the collective approach and welfare
programme participation as previously articulated. Section 6 discusses intertem-

                                         1
poral consumption and labor supply models. This section reviews the various
approaches taken to dynamic modeling and examines the diﬃculties that arise
with participation and heterogeneity. Section 7 concludes the chapter.

2. Estimation and Identification with Participation with Pro-
   portional Taxes
     We begin by considering the simple static model of hours and consumption
choices.

2.1. Static Specifications
2.1.1. The Allocation of Consumption and Hours
     Utility is defined over consumption c and hours of work h, both of which are
restricted to be non-negative and h is restricted to be below a maximal amount
of an available time endowment. Formally, this discussion is easily extended to
the case of family labor supply decisions where h is a vector of household labor
supplies. However, there are many specific issues relating to joint participation
decisions and to the allocation of resources within the family that are central to
any study of family labor supply; we leave our discussion of family labor supply
models to section 5. Equally, consumption decisions can be disaggregated. This
disaggregation is central to the analysis of nonseparability of goods and leisure.
We turn to this below.
    If we let µ represent the total unearned income available for consumption, and
w the real wage rate, then the optimal choices for c and h are given by the solution
to
                         max {U(c,h)|c−wh = µ; c≥0;h ≥ 0}                      (2.1)
                        c,h

where U (c,h) is a quasiconcave utility index defined increasing in c and −h. The
resulting labor supply has the form

                                   h = h(w, µ).                                (2.2)

In the static model µ is taken to be income from other sources. However it turns
out that the precise definition of µ is crucial: If µ is measured as the diﬀerence

                                         2
between total consumption expenditure and earnings, c−wh = µ, it is consistent
both with intertemporal two-stage budgeting both in the absence of liquidity
constraints and with the presence of liquidity constraints that are unrelated to
labour supply. This is discussed in a subsection below.
   The indirect utility representation of preferences is given by

                        V (w, µ) ≡ U(wh(w, µ) + µ, h(w, µ))                      (2.3)

which is linear homogeneous, quasi-concave in p, w and µ, decreasing in p and w
and increasing in µ. The various representations of preferences (direct or indirect
utility) detailed below are going to be particularly useful in specifying empirical
models and defining the likelihood function.

2.1.2. Two-Stage Budgeting Specifications and Within Period Alloca-
       tions
     Labor supply and consumption models are frequently analyzed in a two good
framework. Such modelling is less restrictive than it sounds because under Gor-
man’s (1959, 1968) two stage budgeting, this labor supply model can be seen as
the top stage where “full income” is shared between consumption and leisure and
then the consumption budget is split among goods. However, for such an inter-
pretation with all goods being represented by one or two price indices, we require
some conditions on preferences.
   Suppose utility is defined over hours of work h and a vector of goods q. Assume
the individual has a within period utility function of the form

                  υ t = v(ct , ht , pt ) = maxq,h {u (qt , ht ) |p0t qt =ct }    (2.4)

where pt is a vector of prices corresponding to the disaggregated commodity vector
qt . The function υ t is a conditional indirect utility function which is increasing in
total consumption expenditure ct , decreasing and concave in prices and decreasing
in hours of work ht .
     We say that qt is weakly separable from ht if the marginal rate of substitution
between goods qt does not depend on ht . In this case the utility function can
be written as u (u1 (qt ), ht ) where u1 is a sub-utility function. If in addition the
marginal utilities of qt and ht do not depend on each other then we say that the

                                              3
utility function is additively separable, in which case the utility function can be
written as u1 (qt ) + u2 (ht ). Blackorby, Primont and Russell (1978) have a detailed
analysis of the concepts of separability and Deaton (1978) analyses the empirical
implications of the additive separability assumption.
     Gorman has shown that if a set of goods x1 is separable from goods x2 then it
is possible to express the demands for goods x1 simply as a function of the total
expenditure allocated to this group ( x1 ) and the prices of these goods alone (say
p1 ). In addition, if preferences can be expressed in the generalized Gorman polar
form, then it is possible to express the overall expenditure allocations to each
group as a function of the price indices for each group. This theorem can justify
considering the allocation of total expenditure to overall consumption and leisure
separately from the problem of how expenditure is allocated to goods. However,
it has to be borne in mind that the justification which allows us to write labor
supply as a function of the real wage alone (rather than of all relative prices) does
imply restrictions on preferences.
     These results oﬀer a justification of the static model within an intertemporal
context since the concept of separability can extend both over goods and over
time.1 Typically we impose additive separability over time in which case the
marginal utility of consumption or hours of work in one period is unaﬀected by
consumption and hours in any other time period. Additive intertemporal sepa-
rability has the implication that we can use two stage budgeting to characterize
consumption choices: given the level of consumption and separability, the within
period demands for goods qt only depend on the prices of those goods and on
wages (if the goods are not separable from hours). The indirect utility function
defined by (2.4) then becomes the criterion function for allocating consumption
(and hours) over the life-cycle.2
     It is well known that taking a monotonic transformation of the utility function
does not change the observed within period allocations. In an intertemporal con-
text this issue acquires a special importance: taking a monotonic transformation
does not alter the way that consumption and hours are allocated within period,
   1
     See Gorman (1959), MaCurdy (1983), Blundell and Walker (1986) and Arellano and Meghir
(1992)
   2
     Utility (2.4) implicitly assumes separability over time thus ruling out habits and / or ad-
justments costs (see Hotz, Kydland and Sedlacek (1988) and Meghir and Weber (1996)).


                                               4
under intertemporal separability. However, it does potentially change the mar-
ginal rate of substitution between periods. Hence, as we will discuss further below,
estimating intertemporal preferences generally requires intertemporal data.
    Noting that modeling the monotonic transformation is modeling intertemporal
preferences, we use the slightly more elaborate notation
                              υ t = ψ [U(ct , ht |z1t ), z2t ]                  (2.5)
where ψ[·] is a monotonic function of its first argument u and where z1 and z2
are variables (observed or otherwise) that aﬀect preferences over consumption
and hours of work. In particular, z2t aﬀects intertemporal allocations but not
within period ones (unless it contains common elements with z1t ). Our focus in
this section is on within period allocations. The discussion here should make it
clear that one can work with the utility function (2.1) to represent within period
allocations of consumption and hours of work consistent with life-cycle choices.

2.1.3. Empirical Labor Supply Specifications
     Preferences can be represented by direct utility functions, indirect utility
functions or by the labor supply equation itself. In each case the function has
satisfy some basic properties to be consistent with theory. Here we briefly review of
some standard specifications of the static labor supply model (2.2) and relate them
to their indirect utility function. Such specifications are usually chosen for ease
of estimation and here we simply consider the specifications and their underlying
model of preferences. With unobserved heterogeneity and nonparticipation it is
useful, if not essential, to have some relatively simple parametric specification in
mind.
    The linear labor supply model

                                  h = α + βw + γµ                               (2.6)
has indirect utility
                                  β     β  α
            V (w, µ) = eγw (µ +     w − 2 + ) with γ ≤ 0 and β ≥ 0.             (2.7)
                                  γ    γ   γ
Although popular (see Hausman (1981,1985), for example), it is arguable that
this linear specification allows too little curvature with wages.

                                             5
  Alternative semilog specifications and their generalizations are also popular in
empirical work. For example, the semilog specification

                               h = α + β ln w + γµ                            (2.8)
with indirect utility
                                        Z
            eγw        β            β       eγµ
 V (w, µ) =     (γµ + α + β ln w) −             d(γµ) with γ ≤ 0 and β ≥ 0. (2.9)
             γ         γ            γ    γµ γµ

Moreover, the linearity of (2.8) in α and ln w makes it particularly amenable to an
empirical analysis with unobserved heterogeneity, endogenous wages and nonpar-
ticipation as discussed below. Consequently, this specification is used extensively
in our discussion of estimation that follows.
    Neither (2.6) nor (2.8) allow backward bending labor supply behavior although
it is easy to generalize (2.8) by including a quadratic term in ln w. Note that
imposing integrability conditions at zero hours for either (2.6) or (2.8) implies
positive wage and negative income parameters. A simple specification that does
allow backward bending behavior, while retaining a three parameter linear in
variables form, is that used in Blundell, Duncan and Meghir (1994)
                                                   µ
                              h = α + β ln w + γ                            (2.10)
                                                   w
with indirect utility
              wβ+1 µ                         β
 V (w, µ) =       ( (1 + γ)2 + β ln w + α −     ) with γ ≤ 0 and β ≥ 0. (2.11)
              β+1 w                         1+γ
This form has similar properties to the MRS specification of Heckman (1974).
    Generalizations of the Linear Expenditure System or Stone-Geary preferences
are also attractive from certain points of view. For example suppose the indirect
utility function for individual i in period t takes the form
                                     ·                ¸
                                       wH + µ − a(w)
                              Vit =                                        (2.12)
                                            b(w)
where H is the maximum amount of hours available to be allocated between hours
and leisure. This is the quasi-homothetic “Gorman polar form”. The linear expen-
diture system belongs to this class. However, there is no need to impose additive

                                        6
separability between consumption and hours of work as would be the case un-
der Stone-Geary/LES preferences. Indeed, such separability assumptions severely
constrain the time path of consumption and hours of work and can lead to the
impression that the life-cycle model is unable to explain a number of observed
phenomena, see Heckman (1974). In particular we may specify
                                                            1
                                a(w) = a0 + a1 w + 2a2 w 2                             (2.13)

and
                                        b(w) = wβ                                      (2.14)
which is a Generalized Leontief model. Preferences are additive and reduce to
LES if a2 = 0.
   The implied labor supply function using (2.12), (2.13) and (2.14) can be derived
using Roy’s identity and takes the form
                                          1   β                        1
               hit = (H − a1 ) − a2 w− 2 −      (M − a0 + a1 w + 2a2 w 2 )             (2.15)
                                              w
where M = wH + µ. Unobserved heterogeneity can also easily be allowed for,
as well as measurement error in hours of work (but not in hourly wages) and or
consumption. For example, we can allow a1 to be heterogeneous across individuals
and time, i.e. a1 = ā1 + ε. Under the simplifying assumption that a1 is the only
source of heterogeneity the error term in the earnings equation now becomes ν =
−ε(1 + β).

2.2. Estimation of the Static Labor Supply model
     The main estimation issue, ignoring problems related to participation and
nonlinear taxation (discussed below) is the endogeneity of wages w and unearned
income µ. Wages may well be endogenous because unobservables aﬀecting prefer-
ences for work may well be correlated with unobservables aﬀecting productivity
and hence wages. Unearned income may be endogenous for a number of reasons:
If µ represents asset income, then individuals who work harder (because of unob-
served preferences for work ) are also likely to have accumulated more assets.3
   3
    If µ also represents income from spouses, positive assortative mating will imply that hard
working individuals will tend to marry. Hence unobserved preferences for work will correlate
with spousal income reflected in µ.

                                              7
   Take as a simple example the semilog model of labor supply as above, i.e.

                            hi = α0 xi + β ln wi + γµi + ui                      (2.16)
The subscript i denotes an individual. The variables x denote observables which
determine preferences. We avoid using the log of µ because it is conceivable that it
is zero and, in some cases, even negative. We add to this system a wage equation

                               ln wi = δ01 xi + δ 02 zi + vi

and a reduce form equation for unearned income

                                µi = ζ 01 xi + ζ 02 zi + εi .

Identification requires that the dimension of the variables excluded from the labor
supply equation, zi , is at least two. It also requires that the matrix [δ 02 ζ 02 ] has
rank 2. In this linear framework estimation is straightforward - Two stage least
squares is the obvious choice. However, we will se below that it is convenient to
estimate the three reduce forms first and then impose the parametric restrictions
to recover the structural coeﬃcients using minimum distance. The reduced form
labor supply model is

                   hi = (α + βδ1 + γζ 1 )0 xi + (βδ 2 + γζ 2 )0 zi + ui

Given estimates of all the reduced form coeﬃcients the restrictions can then be
imposed using minimum distance. Thus let
                                α1 = (α + βδ 1 + γζ 1 )

                                     α2 = (βδ 2 + γζ 2 )

                                  α3 = [δ 01 δ 02 ζ 01 ζ 02 ]0
and let Ω represent the covariance matrix of the OLS estimator of the three equa-
tion reduced form system. Finally let α(θ) = [α1 α2 α3 ]0 where θ.represents the
set of parameters in the labor supply model, the wage equation and the unearned
income equation. Then the optimal minimum distance estimator is

                       θ̂ = arg min{(α̂ − α(θ))0 Ω−1 (α̂ − α(θ))
                                 θ


                                               8
The resulting estimator is eﬃcient, to the extent that the first step estimator is
eﬃcient.
    When the labor supply model is non linear this straightforward procedure is
no longer available. In this case an alternative approach is Maximum likelihood
or semi-parametric instrumental variables. Maximum likelihood will be discussed
below in the context of the labor supply model with corner solutions and nonlinear
taxation. Hence we avoid duplication by deferring discussion until then.
    In the absence of censoring one can use non-parametric Instrumental variables
as in Newey and Powell (2003) and Daroles, Florens and Renault (2000). Consider
the case where the labor supply is an unknown function of w and µ

                                  hi = h(wi , µi ) + ui

The object is to estimate the function h. Suppose we have a set of instruments z
(at least two if we are to treat both the wage and other income as endogenous). If
we assume that the error in the labor supply function satisfies the rank condition
E(ui |zi ) = 0. In addition one needs a strong identification assumption ensuring
that any function of w, µ can be explained by the instruments z. Under these
conditions solving the moment condition

                               E(hi − h(wi , µi )|zi ) = 0

for the function h(wi , µi ) provides a non-parametric estimator.
    In the context of censoring due to non-participation a control function ap-
proach turns out to be more useful. However, it is important to note that the
assumptions underlying the control function are diﬀerent than those underlying
the IV approach above, unless the instruments are independent of the unobserv-
ables.4 A form of the control function approach relies on the assumption that

                              E(ui |z, x, w, µ) = g(vi , εi )

where vi and εi are the error terms from the wage and unearned income equations
respectively.5 With unknown h identification also requires measurable separability
  4
    Florens, Heckman, Meghir and Vytlacil (2003).
  5
    For a more general case with unknown h see Newey, Powell and Vella (1999) or Heckman,
Florens, Meghir and Vytlacil (2003) who derive conditions for identification..

                                            9
which ensures that the functions g and h vary independently and is the equivalent
of the rank condition. In a parametric framework the requirements are less strin-
gent since we are restricting attention to specific functional forms. One approach
to estimation would be to take a series expansion of g. Alternatively we could use
some kernel estimator. The procedure works under a generalized rank condition;
however the important point to note is that even under non-linearity we do not
require explicit distributional assumptions, other than the restriction on the con-
ditional expectation of u.6 Nevertheless it should be noted that in practice it may
be diﬃcult to motivate the control function assumption, which contrasts with the
orthogonality conditions above that are often derived from economic theory.

2.3. The Censored Regression Model
     Labor market participation raises two key questions for modelling labor sup-
ply. First, what market wage distribution, should be used for nonparticipants?
Second, are there features of the labor market that make labor supply behavior
on the extensive margin (participation) fundamentally diﬀerent from behavior on
the intensive margin (hours of work)? These questions are not wholly unrelated
since, without further restrictions on the distribution of oﬀered wages among non-
participants, it is diﬃcult to separately identify a process for nonparticipation and
for hours of work.
    Among the most compelling reasons for separating these two margins is fixed
costs of work - either monetary or time. We take up the issue of fixed costs
in section 2.5, and begin by working through a model without fixed costs. We
consider first with semiparametric estimation in a model with missing wages.
    Suppose individual heterogeneity in tastes for work is represented by the ran-
dom variable v. Observed hours of work (2.2) in the censored regression case can
be represented by
                              h = max{f (w, y, x, v), 0}.                       (2.17)
where f (w, y, x, v) represents desired hours of work

                                  f (w, y, x, v) ≡ h∗ .                          (2.18)
  6
   Two functions g(e) and h(v) are measurably separable iﬀ whenever g(e) − h(v) = 0 a.s.
implies g(e) and h(v) are constant functions.


                                           10
and where y represents some measure of current period unearned income.
   The censored labor supply model implies the reservation wage condition

                                   h > 0 ⇔ w > w∗ (y, x, v)                              (2.19)

where w∗ is defined implicitly by

                                       0 = f (w∗ , y, x, v).                             (2.20)

The existence and uniqueness of the reservation wage in this simple world is
guaranteed by revealed preference arguments. Given the market wage w, (2.17)
also defines a threshold condition on the unobservable heterogeneity term v given
by
                             h > 0 ⇔ v ≥ v ∗ (w, y, x)
                                           Z
                           ⇒ Pr(h > 0) =        g(v)dv.
                                                     v≥v∗

where g(v) is the density function for v.
    To implement this censored regression specification we define the index Ii as
an indicator variable that is unity if individual i participates7 and zero otherwise.
Observable hours of work then follow the rule
                                    ½ ∗              ¾
                                        hi if Ii = 1
                               hi =                    .                       (2.21)
                                        0 otherwise

That is

                                     Ii = 1 ⇐⇒ h∗i > 0                                   (2.22)
                                         =   1{h∗i > 0}.                                 (2.23)

This implies that participation in work follows a simple corner-solution framework
and is equivalent to assuming there are no fixed costs.8
   7
       By participation we mean participation in paid work.
   8
       By contrast, the fixed costs framework retains

                                        Ii = 1 =⇒ h∗i > 0

but not the reverse. As Cogan (1980) shows, fixed costs are equivalent to a positive reservation
hours of work. We elaborate on this in section 3.2 below.

                                                11
   The log likelihood for an independently distributed random sample of n indi-
viduals in the censored model is given by
                       Xn µ                              Z           ¶
             ln L(θ) =      Ii ln g(ν; θ) + (1 − Ii ) ln   g(v; θ)dv     (2.24)
                        i=1                                v≥v∗


where θ are the unknown parameters of preferences and g is the distribution of v.
In a linear specification with a normal iid assumption on v, this is equivalent to
the Tobit censored regression specification.
    The likelihood specification (2.24) makes two implicit assumptions on the wage
distribution. First, that wages are observed for all individuals irrespective of their
labor market status. Second, that wages are exogenous for labor supply. Neither
of these are apriori reasonable.

2.4. Missing Wages
     Wages are not observed if h = 0. Suppose the model for wages can be written
as
                               ln w = γ 1 x + γ 2 q + η                        (2.25)
where q are a set of variables that are exclusive to the determination of real
wages and where η is an iid error term with distribution gw (η). The likelihood
contribution for h = 0 becomes
                       h>0                0 = g(v)gw (η)

                                        R ∞ R v∗                               (2.26)
                       h=0        0 =              g(v)gw (η)dvdη


    By writing the joint distribution of ν and η as a product of the two marginals
we have implicitly maintained that wages are exogenous for labor supply. This
implies that the density of wages can be estimated separately; In a labor supply
model linear in log wages this further implies that we can simply impute wages
for all non workers and estimate the model as if wages are observed (correcting
the standard errors of course for generated regressor bias) However, if we wish
relax this assumption and permit w to be endogenous in the hours equation, the


                                          12
sample likelihood becomes
               Xn µ                                 Z ∞ Z v∗                ¶
    ln L(φ) =       Ii ln ghw (v, η) + (1 − Ii ) ln          ghw (v, η)dvdη      (2.27)
                i=1

where ghw (v, η; φ)is the joint distribution of ν and η.
    The resulting estimator simplifies enormously if we assume a parametric speci-
fication that permits an explicit reduced form for desired hours of work. A popular
example of such a specification is the semi-log labor supply model to which we
now turn

2.4.1. A Semi-log Specification
     Suppose we write the optimal labor supply choice for individual i as

                            h∗i = β 1 ln wi + β 2 yi + β 3 xi + vi               (2.28)

where β 1 , β 2 and β 3 are unknown parameters of labor supply. labor supply and
wages are now completely described by the triangular system consisting of (2.25)
and the following reduced form for desired hours of work

                 h∗i = (β 1 γ 1 + β 3 )xi + β 1 γ 2 qi + β 2 yi + β 1 η i + vi   (2.29)
                      = π 1 xi + π 2 qi + π 3 yi + ω i                           (2.30)
                      = πzi + ω i                                                (2.31)

2.4.2. Semi-parametric Estimation
      If it can be assumed that vi and η i are distributed independently of the
explanatory variables x, q and y then semiparametric identification and estimation
can take the following simple step wise procedure.
    The π coeﬃcients in (2.31) can be estimated from a standard censored regres-
sion estimation procedure. If gω (ω) describes the density of ω then the sample
likelihood for a random sample of i = 1, ..., n individuals is given by
                       Yn                ½     Z                ¾1−Ii
                                      Ii
                L(π) =     {gω (ω|π))}    1−         gω (ω|π)dω              (2.32)
                         i=1                          −π 0 zi



                                              13
which is equivalent to the sample likelihood for the Tobit model when ω is ho-
moscedastic normal. Root-n consistent and asymptotically normal estimators of
π can be derived under much weaker assumptions on gω , see Powell(1984, 1986b),
Horowitz (1986).
   Given π, the conditional mean of (2.25) for participants can be used to esti-
mate the wage equation parameters. This is the Heckman (1976, 1979) selectivity
framework. Suppose we assume

                                        E(η i |Ii > 0) = λη (πzi )                    (2.33)

then the conditional mean of (2.25) given Ii > 0 is simply written

                          E(ln wi |z, Ii > 0) = γ 1 xi + γ 2 qi + λη (πzi )           (2.34)

If a joint normal distribution is assumed for vi and η i then estimation can follow
the two-step selectivity
              √           estimation approach developed by Heckman (1979). Al-
ternatively, a N consistent and asymptotically normal semiparametric estimator
can be constructed.
    To consider the semiparametric estimator notice that the conditional expecta-
tion of (2.34) for participants given πzi is

             E(ln wi |πzi , I > 0) = γ 1 E(xi |πzi ) + γ 2 E(qi |πzi ) + λη (πzi ).   (2.35)

Subtracting this from (2.34) eliminates the λη (πzi ) term yielding

                                 E(ln wi |z, Ii > 0) − E(ln wi |π 0 zi , I > 0)       (2.36)
                                   0                  0         0          0
                             = δ (xi − E(xi |π zi )) + φ (qi − E(qi |π zi )).

    The conditional expectation terms E(ln wi |πzi ), E(xi |πzi ) and E(qi |πzi ) in
(2.36) can then be replaced by their unrestricted Nadaraya-Watson kernel regres-
sion estimators.9
    The parameters of (2.34) can then be recovered by an instrumental variable
                                                             h
                                                        d
regression. Robinson (1988), suggests regressing ln w − ln  w (πz) on x − x bh (πz)
  9
      e.g.
                                         \                      rb(πz)
                                       E(q    0       bh (πz) =
                                          i |π zi ) = q
                                                                fb(πz)

                                                     14
and q − qbh (πz) using I[fb(πz) > bN ]x and I[fb(πz) > bN ]q as the respective in-
strumental variables, where I[fb(ln x) > bN ] is an indicator function that trims
out observations for which fb(ln x) < bN , for some sequence of trimming con-
stants bN which tend to zero with the sample size at some appropriate rate. An
alternative estimator, due to Powell (1987), is to use fb(πz).x and fb(πz).q as in-
struments. This eﬀectively removes the random denominators from the kernel
regression estimators.
    Finally, given the γ 1 , γ 2 , π 1 , π 2 and π 3 parameters, the structural labor sup-
ply parameters β 1 , β 2 and β 3 can be recovered by minimum distance. In general,
these steps can be combined to improve eﬃciency. Provided a suitable instrumen-
tal variable is available, this procedure can also be extended to control for the
endogeneity of other income yi . We consider this in more detail below.

2.5. Fixed Costs
2.5.1. A Structural Model of Fixed Costs
     Fixed costs imply that participation does not simply follow the corner solution
condition (2.22). Instead participation will depend on the determinants of fixed
costs as well as the determinants of h∗i . For example, suppose there is a fixed
monetary cost of working S, this implies that non-labor income in the budget
constraint becomes
                                y−S       if h > 0
                                   y      if h = 0
and the distribution of S is only partially observable. If we denote utility in work
at the optimal hours point by the indirect utility level: ν(w, y, v) and utility at
in which
                                          1X
                               rb(πz) =       Kh (πz − πzi ) qi ,
                                          n i
and                                          X
                                         1
                                fb(πz) =          Kh (πz − πzi ) ,
                                         n    i

where Kh (·) = h−1 k(·/h) for some symmetric kernel weight function k(.) which integrates to
one. The bandwidth h is assumed to satisfy h → 0 and nh → ∞ as n → ∞. Under standard
conditions the estimator is consistent and asymptotically normal, see Härdle (1990) and Härdle
and Linton (1994).


                                                  15
h = 0 by the direct utility at h = 0: U(Y, 0, v). The decision to work follows from

                                  ν(w, y, v) ≥ U (Y, 0, v).

Note that if S > S >> 0 then there will be a discontinuity in the hours distribution
at low wages which should reflect itself as a “hole” at the low end of the hours
distribution.10 This model is further developed in Section 4, here we analyse index
models empirical models that are motivated by the presence of fixed costs of work.
    Cogan (1981) defines reservation hours h0 such that

              U 1 (T − h0 , y − S + wh0 , x, v) = U 0 (T, y)                            (2.37)
                                               h0 = h0 (y − S, w, x, v) ≥ 0

and the participation decision becomes

                                Pr (work) = Pr(h > h0 ).                                (2.38)

For any v and η, nonparticipation will occur if fixed costs are suﬃciently high
S > S ∗ (v, η).
   Suppose we continue to assume wage equation (2.25) and also assume the
specification of fixed costs to be

                                    S = θ1 x + θ2 m + s                                 (2.39)

where m are a set of variables exclusive to the determination of fixed costs and s
represents unobserved heterogeneity in the distribution of fixed costs. In terms of
the likelihood contributions we have ‘no work’ regime:
                             Z ∞ Z v∗ Z ∞
                         0 =               g(v, η, s)dsdvdη                  (2.40)
                                  −∞      −∞   S∗

work regime:                        Z ∞ Z S∗
                              1 =              g(ε, v, η, s)dsdv.                       (2.41)
                                     v∗    0
  10
     This may not be visible since heterogeneity in fixed costs and in unobserved tastes may
imply a diﬀerent possition for the discontinuity for diﬀerent individuals, smoothinng out the
unconditional distribution. Hence looking for such “odd” features in the hours distributionn
may not be a very good empirical strategy for detecting fixed costs. However such features can
be seen in the distribution of relatively homogenous groups, e.g. Single women with no children
or single men.

                                               16
     Given some parametric specification of direct (and indirect) utility, all the
structural parameters of fixed costs, preferences and wage determination are iden-
tified from a likelihood based on the contributions (2.40) and (2.41).
     Finally note that if we specify a model on the basis of the indirect utility or cost
function we may not have an analytical expression for the direct utility function.
Consequently this has to be obtained numerically. One way of doing this is to
find the standard reservation wage when hours are zero and the fixed costs have
not been incurred. Evaluating the indirect utility function at that reservation
wage and non-labor income then provides us with the utility value of not working.
Another important diﬃculty is then to derive the probability of participation given
that the direct utility function at zero hours of work will depend on unobserved
heterogeneity both directly and via the reservation wage - hence it is likely to be
a highly non-linear function of the underlying error term. In practice, as we argue
later, it may be easier to work with a direct utility specification when we have to
deal with such non-convexities.

2.5.2. Semi-parametric Estimation in the Fixed Costs Model
     Although the (semiparametric) censored regression approach to estimation of
the hours equation described above is no longer valid in this fixed costs case, a
semiparametric procedure applied to hours of work among the participants can be
used as an approximation to the fixed costs model. The optimal choice of hours
of work among those individuals who decide to join the labor market will have
the form

                   h∗i = β 1 ln wi + β 2 (yi − Si ) + β 3 xi + vi                 (2.42)
                        = (β 1 γ 1 + β 2 θ1 + β 3 )xi + β 1 γ 2 qi + β 2 yi       (2.43)
                            +β 2 θ2 mi + β 1 η i + β 2 si + vi                    (2.44)
                          e1 xi + π
                        = π       e2 qi + π
                                          e3 yi + π
                                                  e4 mi + ui                      (2.45)
                          ezei + ui
                        = π                                                       (2.46)

where again the β 1 , β 2 and β 3 are unknown parameters of labor supply. labor
supply and wages are now completely described by the triangular system consisting
of (2.25) and (2.46).


                                             17
   Assume that the participation condition (2.38) can be well approximated by
the discrete index model

                               Ii = 1 ⇐⇒ φe
                                          zi + ei > 0                        (2.47)

where zei contain all the exogenous variables determining reservation hours, log
wages and desired hours of work. The term ei is a random unobservable whose
distribution Fe is normalized up to scale and assumed to be independent of zei .
Parameters φ will be convolution of parameters of fixed costs, the wage equation
and preferences. They can be identified through the condition
                                           Z
                           E(Ii = 1|e
                                    zi ) =     dFe (e).                   (2.48)
                                                   zi
                                                 −φe

    The φ coeﬃcients in (2.47) can be estimated up to scale from a standard binary
choice estimation procedure which replaces the censored regression rule (2.32) in
this fixed costs model. The sample likelihood for a random sample of i = 1, ..., n
individuals is given by
                        Yn ½Z            ¾Ii ½   Z            ¾1−Ii
                 =(φ) =           dF (e)      1−        dF (e)              (2.49)
                        i=1       zi
                                −φe                         zi
                                                          −φe


which is equivalent to the Probit likelihood when e is homoscedastic normal.
√
  N consistent and asymptotically normal estimators of φ up to scale can be
derived under much weaker index assumptions on f, see Klein and Spady(1993)
for example.
    Given φ, the conditional mean of (2.25) for participants can be used to estimate
the wage and hours equation parameters. This is the Heckman (1976, 1979)
selectivity framework. Suppose we assume the single index framework

                              E(η i |Ii > 0, zei ) = λη (φe
                                                          zi )               (2.50)

and
                              E(ui |Ii > 0, zei ) = λu (φe
                                                         zi ).               (2.51)
then the conditional mean of (2.25) and (2.31) given Ii > 0 is simply written

                     E(ln wi |Ii > 0) = γ 1 xi + γ 2 qi + λη (φe
                                                               zi )          (2.52)

                                            18
and

 E(hi |Ii > 0, zei ) = (β 1 γ 1 + β 2 θ1 + β 3 )xi + β 1 γ 2 qi + β 2 yi + β 2 θ2 mi + λu (φe
                                                                                            zi ). (2.53)

where zei is taken to include all exogenous variables. If a joint normal distribution
is assumed for vi , η i and si then estimation can follow the two-step selectivity
estimation approach developed by Heckman (1979).
    Notice that (2.52) and (2.53) together only identify γ 1 , γ 2 , β 1 and β 2 , the
parameters of √ fixed costs and β 3 are not identified without more information on
fixed costs. A N consistent and asymptotically normal semiparametric estimator
of these parameters can be constructed from a natural extension of the procedures
described above for the censored labor supply model.
    For participants we have


              E(hi |φe             e1 E(xi |φe
                     zi , I > 0) = π                       e2 E(qi |φe
                                             zi , I > 0) + π         zi , I > 0) (2.54)
         π 3 E(yi |φe
        +e                        e4 E(mi |φe
                    zi , I > 0) + π         zi , I > 0) + λu (φe
                                                               zi ).                            (2.55)

The nonparametric term describing the selection of participants can be eliminated
as in (2.36) and root-n estimation of the unknown index parameters can also follow
the same semiparametric techniques.
    Finally, we should note that endogeneity of yi can be handled in a similar
fashion. Suppose a reduced form for y is given by

                                           yi = ϑ0 di + ζ i                                     (2.56)

since yi is continuously observed for all individuals, ϑ can be estimated by least
squares. Now suppose we also assume that

                            E(ui |Ii > 0, µi , zei ) = δ µ ζ i + λu (φe
                                                                      zi ).                     (2.57)

Then adding the estimated residual from the regression (2.56) into the selection
model (2.53) appropriately corrects for the endogeneity of µi . This is an impor-
tant consideration given the consumption based definition of µi in the life-cycle
consistent specification.


                                                  19
3. Diﬀerence-in-Diﬀerences, Natural Experiments and Group-
   ing Methods
3.1. Diﬀerence-in-Diﬀerences and Fixed Eﬀects Models
     Suppose one is interested in estimating the influence of a policy instrument on
an outcome for a group, say outcome hit measuring hours of work or participation.
The group consists of individuals i = 1, ..., N , with these individuals observed over
a sample horizon t = 1, 2, ... Suppose further that a policy instrument of interest
changes in a particular period t for only a segment of the individuals. Let δ it
be a zero-one indicator that equals unity if the policy change was operative for
individual i in period t. Members of the group who experience the policy change
react according to a parameter γ. A framework for estimating expressed in terms
of a conventional fixed-eﬀect model takes the form

                              hit = γδ it + η i + mt + εit                         (3.1)

where i is a time-invariant eﬀect unique to individual i, mt is a time eﬀect common
to all individuals in period t, and εit is an individual time-varying error distributed
independently across individuals and independently of all η i and mt .
    The least squares estimator of γ in (3.1), which regresses hit on δ it and a set
of individual and time dummy variables, is precisely the diﬀerence in diﬀerences
estimator for the impact of the reform. It can be given the interpretation of a
causal impact of the reform if E(εit |η i , mt , δ it ) = 0. In a heterogeneous response
model
                               hit = γ i δ it + η i + mt + εit                      (3.2)
the least squares dummy variable estimator recovers the average of the response
parameters γ i for those aﬀected by the policy. Since the error term εit may be
correlated both over time and across individuals, this should be taken into account
when constructing standard errors.
        Now suppose that the policy does not aﬀect everyone in a treatment group,
but that the chance of being aﬀected is higher among them (g = T ), than it is
among a control group (g = C). The error structure can be more general than
above. Consider a specification in which

                                    hit = γδ it + uit .                            (3.3)

                                            20
where uit represents an individual level heterogeneity term which may be fixed for
that individual over time or may vary over time. Moreover it may be correlated
across individuals and may have a cross section mean that is non zero. The
implicit macro component and the average group characteristics to which the
individual belongs may be correlated with δit . Suppose that limited time series
data is available across individuals, either in terms of repeated cross-sections or
as a panel data source. Under the following assumption, and the presumption
that the policy is introduced only for one group, the impact of the policy may be
identified by using two time periods of data, one before the reform and one after.
The assumption we require is that

                             A1 : E[uit |g, t] = ag + mt                        (3.4)

which can be interpreted as saying that in the absence of the reform the changes
in group means are the same across the two groups. Then with two groups and
two time periods the slope coeﬃcient γ can be written as

                             ∆E(hit | T, t) − ∆E(hit | C, t)
                        γ=
                             ∆E(δ it | T, t) − ∆E(δ it | C, t)

the diﬀerence-in-diﬀerences estimator is the sample analog given by
                                          T       C
                                    ∆ht − ∆ht
                   b=
                   γ                                                            (3.5)
                      ∆ Pr(δit = 1 | T, t) − ∆E(δ it = 1 | C, t)

where the ‘bar’ denotes sample average, ∆ the first diﬀerence and the superscript
                                                b is consistent for γ. This estimator
the group for which first diﬀerences are taken. γ
is an instrumental variables estimator with excluded instruments the group time
interactions. If the eﬀect of the treatment is heterogeneous and if the policy does
not decrease the chance of obtaining the treatment δ for anyone (monotonicity)
then the diﬀerence in diﬀerences estimator above identifies the impact of the policy
for those obtaining treatment as a result of the policy (Imbens and Angrist, 1994)
    Assumption A1 is very strong indeed. Failure will result if there is a change
in group composition of unobservable individual eﬀects over time or if there is a
diﬀerential impact of macro shocks across groups. Again it will depend critically
on the choice of groups which is a key issue in this framework. A1 implies:

                                         21
   (i) time invariant composition for each group
and
   (ii) common time eﬀects across groups.

3.2. Estimating a Structural Parameter
    Here we consider the use of this method in the estimation of a simple labor
supply model (ignoring income eﬀects for notational simplicity, we return to this
below)
                            hit = α + β ln wit + uit                        (3.6)
Again uit represents an individual level heterogeneity term which may be fixed for
that individual over time or may vary over time. Moreover it may be correlated
across individuals and may have a cross section mean that is non zero. This
represents the impact of macro shocks to preferences on individual i’s labor supply.
Both the implicit macro component and the idiosyncratic heterogeneity may be
correlated with the log wage (ln wit ).
   Make the following assumptions

                               A1 : E[εit |g, t] = ag + mt                          (3.7)

A2 : [E[ln wit |g = T, t] − E[ln wit |g = C, t]]−[E[ln wit |g = T, t − 1] − E[ln wit |g = C, t − 1]] 6= 0
                                                                                     (3.8)
Then with two groups and two time periods the slope coeﬃcient β can be written
as
                              ∆E(hit | T, t) − ∆E(hit | C, t)
                      β=
                            ∆E(ln wit | T, t) − ∆E(ln wit | C, t)
The diﬀerence-in-diﬀerences estimator is the sample analog given by
                                            T       C
                                b=      ∆ht − ∆ht
                                β           T           C
                                                                                    (3.9)
                                     ∆ln wit − ∆ln wit

and is consistent for β.
    Assumption A2 is simply analogous to a rank condition and should hold if the
groups are chosen to reflect some systematic reason for a diﬀerential growth in
ln wit across groups. The choice of groups in this diﬀerence in diﬀerences approach


                                           22
usually reflects some policy change which aﬀects the real wage. A tax change, for
example, that can be argued to be incident on individuals in one group i ∈ [
g = T ] but not on individuals in another i ∈ [ g = C]. It is clear, however,
that the assumption A1 may be strong in some circumstances. However note the
big diﬀerence with the previous section. In the previous section the policy was
assumed to have no eﬀect on wages of the treatment group relative to the control
group; this is the assumption implicit in the fact that we only need to condition
on time and group eﬀects. Here we are conditioning on wages and we are adding
the assumption from economic theory, that log wages and taxes share the same
coeﬃcient. Hence if the policy implicitly aﬀecting incentives, changes pre-tax
wages as well, this is allowed for; this in itself makes the assumptions underlying
the diﬀerence in diﬀerences approach more credible. (see more on this below).
    This method has some attractive features. It allows for correlated heterogene-
ity and for general common time eﬀects. Although for many choices of grouping,
often precisely those associated with some policy reform, assumption A1 is likely
to be invalid, there are possible grouping procedures for estimating labor supply
models that are more convincing. This approach is also closely related to the
natural experiment or quasi-experimental estimators that typically employ before
and after comparisons relating directly to a policy reform.
    Before moving on to consider these developments, we first simply outline how
this approach can be extended to allow for many groups, for many time periods
(or many reforms), for participation and for the inclusion of income terms and
other regressors.

3.3. Grouping Estimators
     Suppose individuals can be categorized in one of a finite number of groups g
each sampled for at least two time periods. For any variable xit , define Dxgt as the
residual from the following regression

                                           X
                                           G                X
                                                            T
                    E(xit |Pit , g, t) =         ζ g dg +         ξ t dt + Dxgt ,   (3.10)
                                           g=1              t=1


where Pit indicates that the individual is observed working, that is Pit ≡ {Iit = 1}
and where dg and dt are time and group dummies respectively. Analogously with

                                                 23
A1 and A2 we make assumptions

                       A1.1 E(uit |Pit , g, t) = ag + kmt                    (3.11)
                              A2.1 E[Dwgt ]2 6= 0.                           (3.12)

Assumption A1.1 summarizes the exclusion restrictions for identification; it states
that the unobserved diﬀerences in average labor supply across groups can be sum-
marized by a permanent group eﬀect ag and an additive time eﬀect mt . In other
words diﬀerences in average labor supply across groups, given the observables,
remain unchanged over time. It also says that any self selection into employment
(the conditioning on Pit ) can be controlled for by group eﬀects and time eﬀects
additively. Assumption A2.1 is again equivalent to the rank condition for identi-
fication; it states that wages grow diﬀerentially across groups; this is because the
assumption requires that after we have taken away time and group eﬀects there
is still some variance of wages left. For example, if there is a tax reform between
two periods, aﬀecting the post tax wages of the two groups in diﬀerent ways, and
assuming that tax incidence does not fully counteract the eﬀects of the reforms,
identification of the wage elasticity will be guaranteed.
    With these assumptions we can implement a generalized Wald estimator (see,
Heckman and Robb, 1985). Defining the sample counterpart of Dxgt as x̃gt , i.e. the
residual from regressing the time-group cell mean on time and group dummies,
we can write the estimator as
                                 P P h ihg i
                                          h̃gt ln wgt ngt
                            b= g t ³
                            β                                                 (3.13)
                                   P P g ´2
                                      g   t ln w gt ngt

where ngt is the number of observations in cell (g, t). The implementation of this
estimator is simple; group the data for workers by g and by time and regress by
weighted least squares the group average of hours of work on the group average of
the log wage, including a set of time dummies and group dummies. An alternative
that gives numerically identical results is as follows: regress using OLS the log
after-tax wage rate on time dummies interacted with the group dummies, over the
sample of workers only and compute the residual from this regression. Then use
the original data to regress hours of work on the individual wage, a set of time

                                        24
dummies and group dummies and the wage residual. The t-value on the coeﬃcient
of the latter is a test of exogeneity, once the standard errors have been corrected
for generated regressor bias and intra group dependence. It is also important to
allow for the possibility of serial correlation and correlation of idiosyncratic shocks
across individuals when computing the standard errors.

3.3.1. Controlling for Participation
     A potential problem with the approach above is that it assumes that the
composition eﬀects from changes in participation can be fully accounted for by
the additive time and group eﬀects, ag + mt . First, changes in mt will cause
individuals to enter and leave the labor market. Second, with non-convexities, a
tax policy reform may lead to changes in participation. This will be particularly
true if fixed costs are large relative to the non-taxable allowance. The presence
of composition eﬀects is equivalent to saying that E(uit |Pit , g, t) is some general
function of time and group and does not have the additive structure assumed in
A1.1.
    To control for the possibility that E(uit |Pit , g, t) may vary over time requires
structural restrictions. A parsimonious specification is to make the assumption of
linear conditional expectation. For example, we may extend A1.1 and A2.1 by
assuming that
                        A1.2 E(uit |Pit , g, t) = ag + mt + δλgt                            (3.14)
                               A2.2 E[Dwgtλ ]2 6= 0.                                        (3.15)
where λgt is the inverse Mills’ ratio evaluated at Φ−1 (Lgt ), Φ−1 being the inverse
function of the normal distribution and Lgt being the proportion of group g work-
ing in period t.11 Finally Dwgtλ is defined by the population regression
                                        X
                                        G                X
                                                         T
                 E(wit |Pit , g, t) =         ζ g dg +         ξ t dt + δ w λgt + Dxgtλ ,   (3.16)
                                        g=1              t=1

Assumption A1.2 models the way that composition changes aﬀect diﬀerences in
the observed labor supplies across groups. It implies that
                  E(hit |Pit , g, t) = βE(ln wit |Pit , g, t) + ag + mt + δλgt              (3.17)
 11
      See Gronau (1974) and Heckman (1974, 1979).

                                                   25
where all expectations are over workers only. Assumption A2.2 states that wages
must vary diﬀerentially across groups over time over and above any observed
variation induced by changes in sample composition. We have also implicitly
assumed that E[Dλgt ]2 6= 0. If this is not the case, there is no selection bias on the
coeﬃcients of interest (here the wage eﬀect) because composition eﬀects can be
accounted for by the linear time and group eﬀects. In this case we can use (3.13).
    We can now estimate the wage eﬀect using a generalization of (3.13), i.e.
                                P P h           ih
                                                   g
                                                           i
                                   g    t h̃gtλ   ln  w gtλ ngt
                          b
                          β= P P ³                     ´2                        (3.18)
                                              g
                                              ln w gtλ    ngt
                                      g   t

As before this estimator can be implemented using a residual addition technique.
We can add an estimate of λgt as well as the residual of the wage equation esti-
mated on the sample of workers (with no correction for sample selection bias as
implied by (3.17) to an OLS regression of individual hours on individual wages,
time dummies and group dummies.
    To determine whether (3.18) or (3.13) should best be used we can test the
null hypothesis that E[Dλgt ]2 = 0 which implies that the group eﬀects ag and the
time eﬀects mt adequately control for any composition changes (given our choice
of groups). If we do not reject this we can use (3.13).
    The assumption in A1.2 is worth some discussion. First note that where all
regressors are discrete and a full set of interactions are included in the selection
equation, use of the normal distribution to compute λ̂gt imposes no restrictions.
However, the linear conditional expectation assumption implies that a term linear
in λ̂gt is suﬃcient to control for selection eﬀects and is potentially restrictive.
Using the results in Lee (1984) in general we have that
                                                         X
                                                         K
                                                                   (k)
                        E(uit |Pit , g, t) = ag + mt +         δ k λgt          (3.19)
                                                         k=1
        (k)
where λgt are generalized residuals of order k. The linearity reduces the number
of parameters to be estimated and hence the number of periods over which we
require exogenous variability in wages. If it is found that E[Dλgt ]2 6= 0 then one
can experiment by including higher order generalized residuals after checking that
they display suﬃcient independent variability.

                                          26
3.3.2. Income Eﬀects
      Income eﬀects are important for labor supply and we need to take them into
account for at least two reasons. First, the wage elasticity cannot in general
be interpreted as an uncompensated wage elasticity, unless we control for other
income. Second, income eﬀects are important if we wish to compute compensated
wage elasticities for the purpose of evaluating the welfare eﬀects of tax reforms. It
is straightforward to extend the estimator in (3.18) to allow for extra regressors,
such as other income. This involves regressing h̃gtλ on ln          gwgtλ and µ  egtλ where
µ is household other income. The rank condition for identification is now more
                                                                     0
stringent: It requires that the covariance matrix V = Ezgtλ zgtλ        is full rank, where
          gtλ    gtλ 0
zgt = [Dw , Dµ ] .
    This is equivalent to requiring that the matrix of coeﬃcients on the excluded
exogenous variables in the reduced forms of log wage and other income, after
taking into account of composition eﬀects, is rank 2. A necessary but not suﬃcient
condition for this to be true is that these coeﬃcients are non-zero in each of the
reduced forms - i.e. that E(Dwgtλ )2 and E(Dµgtλ )2 are non-zero. As before if we
accept the hypothesis that E(Dλgt )2 = 0 we need to consider whether the rank of
V ∗ = Ezgt ∗ ∗0                 ∗
             zgt is two, where zgt = [Dwgt , Dµgt ]0 . In this case we estimate the model
                                      ∗
using the sample counterparts of zgt    as regressors.

3.4. The Diﬀerence-in-Diﬀerence Estimator and Behavioral Responses
     As we have seen the simplest implementation of the diﬀerence-in-diﬀerences
approach simply includes a policy reform dummy. This avoids directly specifying
a structural model in the sense that the eﬀect of the policy is not tied to a wage
or income eﬀect. The idea is that the policy should be evaluated directly without
the intermediation of an economic model.
    Suppose again there are simply two periods and two groups. Suppose the
policy reform is a tax change in which τ is the change in the marginal tax rate
for the treatment group. The natural experiments approaches simply includes a
policy dummy δ gt = 1{g = T, t = A} in the hours regression

                                  hi = α + βδ gt + ζ it .                           (3.20)

The quasi-experimental estimator in this case is just the diﬀerence-in-diﬀerences

                                            27
estimator applied to (3.20).
    To interpret this estimator suppose the hours equation has the simple form
(3.6). Suppose that pre and post reform wages are defined by:
                  Before Reform          After Reform
    i ⊂ Treated          ln wiB        ln((1 − τ )wiA )
    i ⊂ Control          ln wiB          ln wiA
    Assuming A1 and A2, taking group means we find
                      g                              g
                    ht = α + β ln(1 − τ )δ gt + βln wt + ag + mt               (3.21)

If δ gt = 1{g = T, t = A} is all that is included in the regression then the diﬀerence
in diﬀerences estimator will only recover β if log wages have the group and common
time eﬀect form
                                         g
                                    ln wt = eag + m
                                                  e t.                          (3.22)
This seems a particularly strong assumption given empirical knowledge about the

diﬀerential trends in wage group across diﬀerent groups in the economy. Clearly,
the cost of including simply the policy reform dummy δ gt = 1{g = T, t = A} alone
is that the common time eﬀects and time invariant composition eﬀects assumptions
become even more diﬃcult to satisfy.

4. Estimation with Nonlinear Budget Constraints
     A problem encountered in many analyses of consumption and labor supply
involves the presence of intricate nonlinearities in budget sets arising from prices
that vary as a function of quantities. Tax and welfare programs constitute a
prominent source of such functional relationships in analyses of labor supply, for
these programs induce net wages to vary with the number of hours worked even
when the gross wages remain constant. Hedonic environments and price schedules
dependent upon quantities give rise to comparable sources of distortions in budget
sets in many consumption settings.
    To address the issues encountered with nonlinear budget sets, there has been
steady expansion in the use of sophisticated statistical models characterizing
distributions of discrete-continuous variables that jointly describe both interior


                                         28
choices and corner solutions in demand systems. Considered at the forefront of
research in this area, these models oﬀer a natural framework for capturing irregu-
larities in budget constraints, including those induced by the institutional features
of tax and welfare programs.
    This section briefly describes approaches for estimating models incorporating
such features, keeping the context general enough to illustrate how these models
can readily accommodate a wide variety of nonlinearities in price and wage struc-
tures. Subsection 4.1 begins the discussion with a brief overview of the methods
implemented to model budget constraints involving nonlinearities, and Subsection
4.2 goes on to survey instrumental-variable procedures applied in the literature to
estimate behavioral relationships in the presence of such constraints. Subsection
4.4 summarizes the general approach for using maximum likelihood procedures
to estimate the more sophisticated variants of these models with either convex
or nonconvex budget sets. Subsections 4.5 and 4.6 illustrate simple applications
of maximum likelihood methods to estimate familiar specifications of labor sup-
ply with convex constraints. Subsection 4.6 outlines why the implementation of
maximum likelihood procedures imposes interesting and important restrictions on
behavioral parameters in the presence of nonlinear budget constraints. Subsec-
tion 4.8 considers estimation when a segment of the population does not work
and wages are not observed for this group. Subsection 4.9 discusses estimation
when the availability of welfare programs aﬀect the shapes of budget sets, which
induces not only nonconvexities but also opportunities for participating in mul-
tiple programs. Finally, Subsection 4.10 outlines computational simplifications
adopted in the literature to render maximum likelihood estimation feasible.

4.1. Modeling Nonlinear Features of Budget Constraints
     A general formulation for the economic problem considered in the subsequent
discussion specifies an agent as solving the following optimization problem:

               Max U (c, h, z, ν)     subject to   b (c, h, W, Y ) = 0          (4.1)
where U() delineates the utility function, c and h measure consumption and hours
of work, the quantities z and ν represent respectively the observed and unobserved
factors influencing choices beyond those incorporated in budget sets, and the func-

                                         29
tion b() specifies the budget constraint with W and Y designating the real gross
wage per hour and nonlabor income (note that we use upper case to distinguish
from marginal wage and virtual nonlabor income). For the moment, we restrict
the economic framework to be static and the quantities c and h to be single goods
rather than multidimensional vectors. In many applications the budget function,
b, is not diﬀerentiable, and in some it is not even continuous.
    For the familiar linear specification of the budget constraint, b takes the form:

                           b (c, h, W, Y ) = W h + Y − c.                       (4.2)
Solving (4.1) for this form of b yields the following labor supply and consumption
functions:

                               h =      (W, Y, Z, ν)                            (4.3)
                               c = c (W, Y, Z, ν),

which correspond to the standard demand functions for nonmarket time (i.e.,
leisure) and consumption. (The subsequent analysis often suppresses the Z argu-
ment in the functions U (), () and c() to simplify notation.)
    Another popular specification of b() incorporates income or sales taxes in char-
acterizing choices, with the budget constraint written as some variant of

                   b (c, h, W, Y ) = W h + Y − c − τ (W h, Y ) ,                (4.4)
where the function τ () gives the amount paid in taxes. This formulation for b
admits diﬀerent tax rates on earnings (W h) and nonlabor income (Y ). If these
income sources are instead taxed the same, then (4.4) further simplifies to

                      b (c, h, W, Y ) = W h + Y − c − τ (I) ,                   (4.5)
where tax payments τ (I) = τ (I(h)) where I(h) = taxable income = W h + Y − D
with D designating allowable deductions. Diﬀerent marginal tax rates in the
various income brackets combined with the existence of nonlabor income creates
inherent nonlinearities in budget sets
    The literature relies on two approaches for modeling nonlinearities in budget
sets: piecewise-linear characterizations and smooth diﬀerentiable functions. To

                                         30
illustrate these approaches, the subsequent discussion principally focuses on the
income-tax formulation of b given by (4.4) and (4.5) to illustrate central concepts.

4.1.1. Piecewise Linear Constraints
      As a simple characterization of piecewise budget sets, Figure 4.1 shows a
hypothetical budget constraint for an individual faced with a typical progressive
income tax schedule defined by a series of income brackets. In this diagram, h
denotes hours of work, and C measures total after-tax income or the consump-
tion of market goods. The budget constraint is composed of several segments
corresponding to the diﬀerent marginal tax rates that an individual faces. In par-
ticular, he faces a tax rate of t1 between ho hours and h2 hours (segment 1 of
his constraint) and tax rates of t3 and t5 respectively in the intervals (h2 , h4 ) and
(h4 , h6 ) (segments 3 and 5 in the figure). Thus, with the variable W denoting
the individual’s gross wage rate, the net wages associated with each segment are:
w1 = (1 − t1 )W for segment 1; w3 = (1 − t3 )W for segment 3; and w5 = (1 − t5 )W
for segment 5. Also, each segment has associated with it a virtual income (i.e.,
income associated with a linear extrapolation of the budget constraint) calculated
as:

                  y1 = Y − τ (0, Y ) ;                                                      (4.6)
                  yj = yj−2 + W (tj−2 − tj )hj−1 for j = 3, 5, ... .

So, y3 = y1 + (w1 − w3 )h2 ;and y5 = y3 + (w3 − w5 )h4 . Changes in tax brackets
create the kink points which are designated 0, 2, 4, and 6.
   Figure 4.2 illustrates stylized features of a budget constraint modified to incor-
porate an earned income tax credit (EITC) in conjunction with an income tax12 ,
and Figure 4.3 shows a prototype budget set induced by a conventional welfare
program (or social security tax).13 In Figure 4.2, the EITC increases benefits
  12
     An earned income tax credit (EITC) constitutes a negative income tax scheme, which in-
duces two kinks in a person’s constraint in the simplest case: one where the proportional credit
reached its maximum (h2 in Figure 4.2), and one at the break even point where the credit was
fully taxed away (h4 in the figure). The tax rates associated with the first two segments are tA ,
which is negative, and tB , which is positive. Thereafter, the EITC imposed no further tax.
  13
     A welfare program pays a family some level of benefits at zero hours of work, and then
“taxes” this nonlabor income at some benefit reduction rate until all benefits are gone. Figure


                                               31
until an individual reaches h1 hours of work, and then benefits decline until hours
attain h2 when the regular income tax schedule applies. In Figure 4.3, welfare
benefits start at y1 − y2 when a family does not work, they steadily decline as the
family increases its hours of work until its earnings reach the value implied at h1
hours when the family becomes disqualified for welfare. Each of these low-income
support programs introduces regressive features in the overall tax schedule faced
by a family, which in turn induces nonconvex portions in the budget sets.
    In real world applications of piecewise budget constraints, the combination of
various tax and public assistance programs faced by families implies budget sets
have two noteworthy features. First, the constraint faced by a typical individual
includes a large number of diﬀerent rates. Translated into the hours-consumption
space, this implies a large number of kink points in the budget constraint. Second,
for most individuals the tax schedule contains nonconvex portions, arising from
four potential sources. The first arises from the EITC program, as illustrated
in Figure 4.2. A second source arises if a worker’s family participates in any
welfare program, within nonconvexities arise as benefits are withdrawn as earnings
increase as illustrated in Figure 4.3. Third, social security taxes phase out after
a fixed level of earnings, so they too induce a budget set similar in structure to
that given by Figure 4.3. Finally, the standard deduction present in most income
tax programs, wherein no taxes are paid on suﬃciently low levels of income,
creates yet another source of regressivity in the tax schedule and corresponding
nonconvexities in the budget constraint.

4.1.2. Constructing Diﬀerentiable Constraints
      Several approaches exist for approximating the piecewise-linear tax schedules
by a diﬀerentiable function. A convenient method for constructing this function is
to fit the marginal tax rate schedule—a step function—by a diﬀerentiable function.
This approximation must itself be easily integrable to obtain a simple closed form
4.3 assumes a proportional benefit reduction rate applies on earnings until benefits decline to
zero, after which the family pays normal income taxes whihc here too is assumed to be a
proportional rate. Thus, Figure 4.3 shows a constraint with a single interior kink (given by h1
in the figure) corresponding to the level of earning when welfare benefits first become zero. The
tax rate on the segment leading up to that kink is tA , switching to tB on the second segment.
The Social Security systems induces a similar eﬀect on the budget constraint.


                                               32
for the tax function.
    An elementary candidate for constructing a diﬀerentiable approximation that
can be made as close as one desires to the piecewise-linear tax schedule has been
applied in MaCurdy et al.(1990). To understand the nature of the approximation,
return to Figure 4.1. One can represent the underlying schedule as follows:

                    τ e (W h, Y ) = t1         from I(h0 ) to I(h2 )           (4.7)
                                  = t3         from I(h2 ) to I(h4 )
                                  = t5         above I(h4 ) ,


         where τ e (W h, Y ) = the marginal tax rate on earnings
                       I(h) = taxable income at h hours of work, and
                          ti = marginal tax rate, i = 1,3,5.

For expositional simplicity, suppose that t1 = 0. Consider the following approxi-
mation of this schedule:

              b
              τ e (W h, Y ) = t3 ((Φ1 (I(h)) − Φ3 (I(h)) + t5 Φ3 (I(h)) .      (4.8)
This formulation for the marginal tax rate switches among three flat lines at the
heights t1 (= 0), t3 and t5 . The weight functions Φi (I(h)) determine the rate at
which the shift occurs from one line to another, along with the points at which
the switches take place. Candidate weight functions are given by Φi (I(h)) =
the cumulative distribution function with mean µi and variance σ 2i , i = 1, 3. The
middle segment of the tax schedule has height t3 and runs from taxable income
I(h2 ) to I(h4 ). To capture this feature, parameterize Φ1 (·) and Φ3 (·) with means
µ1 = I(h2 ) and µ3 = I(h4 ), respectively, with both variances set small. The first
distribution function, Φ1 (·) takes a value close to zero for taxable income levels
below I(h2 ) and then switches quickly to take a value of one for higher values.
Similarly, Φ3 (·) takes a value of zero until near I(h4 ) and one thereafter. The
diﬀerence between the two equals zero until I(h2 ), one from I(h2 ) to I(h4 ) and
zero thereafter. Thus, the diﬀerence takes a value of one just over the range
where t3 is relevant. Notice that we can control when that value of one begins
and ends by adjusting the values µ1 and µ3 . Also, one can control how quickly

                                          33
this branch of the estimated schedule turns on and oﬀ by adjusting the variances
of the cumulative distribution functions, trading oﬀ a more gradual, smoother
transition against more precision. In general, adjusting the mean and variance
parameters allows one to fit each segment of a schedule virtually exactly, switch
quickly between segments, and still maintain diﬀerentiability at the switch points.
    A generalization of this approximation takes the form
                               X
               b
               τ e (W h, Y ) =      [Φi−2 (I(h)) − Φi (I(h))] ti (I(h))       (4.9)
                                 i=1,3,...


where the functions ti (I(h)) permit tax schedules to be nonconstant functions of
taxable income within brackets. With the Φi denoting many cdfs associated with
conventional continuously distributed distributions, function (4.9) yields closed
form solutions when it is either integrated or diﬀerentiated.14 Integrating (4.9)
yields a formulation for the budget constraint b(c, h, W, Y ). The resulting ap-
proximation can be made to look arbitrarily close to the budget set boundary
drawn in Figures 4.1, 4.2 or 4.3, except that the kink points are rounded.
    Formula (4.9) can be extended to approximate virtually any specification of
b (c, h, W, Y ). One can readily allow for distinct relationships describing the
derivatives for each of the arguments of this function, and nonconvexities in budget
sets cause no particular problems.

  14
                                       R
    Total taxes are given by: τ (I) = τ 0 (I)dI. The following relations enable one to calculate
an explicit form for τ (X):
                              Z
                                   ΦdI = IΦ + ϕ
                             Z
                                           1 2      1    1
                                IΦdI =       I Φ − Φ + Iϕ
                                           2        2    2
                            Z
                                           1 3      2    1
                               I 2 ΦdI =     I Φ + ϕ + I 2ϕ
                                           3        3    3
                            Z
                                           1        3    3      1
                               I 3 ΦdI =     I 4 Φ − Φ + IΦ + I 3 ϕ
                                           4        4    4      4
In this expression, Φ refers to any Φi ’s, and ϕ designates the density function associated with
Φi .




                                              34
4.2. Simple Characterizations of Labor Supply and Consumption with
     Diﬀerentiable Constraints
     A useful solution exists for the hours-of-work and consumption choices as-
sociated with utility maximization when budget constraints form a set with a
twice-diﬀerentiable boundary. Specify the marginal wage rate as:

                           ω = ω(h) = bh (c, h, W, Y ) = bh               (4.10)

and “virtual” income as:

       y = y(h) which solves the equation b(hbh + y, h, W, Y ) = 0.       (4.11)

This solution for y satisfies:

                                  y = y(h) = c − ωh .

For the familiar specification found in analyses taxes and labor supply given by
b(c, h, W, Y ) = W h + Y − c − τ (W h + Y ) with the function τ constituting the
amount paid in taxes at before-tax income W h + Y , the expressions for marginal
wage and virtual income y simplify to:

                ω = ω(h) = (1 − τ 0 )W                                    (4.12)
                y = y(h) = W h + Y − ωh − τ = Y + τ 0 W h − τ

where τ and τ 0 (the derivative of the tax function with respect to income) are
evaluated at income level I = I(h) = Y + W h which directly depends on the
value of h.
   Utility maximization implies solutions for hours of work and consumption that
obey the implicit equations:

                      h =        (ω, y, z, v) =   (ω(h), y(h), z, v)      (4.13)
                      c = c (ω, y, z, v) = c (ω(h), y(h), z, v)

where and c represent the same conventional forms for labor supply and con-
sumption demand functions given by (4.3). Figures 4.1 and 4.3 illustrate this
representation of the solution for optimal hours of work and consumption. The

                                            35
characterization portrays an individual as facing a linear budget constraint in the
presence of nonlinear tax programs. This linear constraint is constructed in a way
to make it tangent to the actual nonlinear opportunity set at the optimal solution
for hours of work. The implied slope of this linearized constraint is ω(h) and the
corresponding value of virtual income is y(h).
    Relationships (4.11) constitute structural equations that determine hours of
work and consumption. By applying the Implicit Function Theorem to spec-
ification (4.11), we can solve this implicit equation for h in terms of W, Y , and
other variables and parameters entering the functions b and U. This operation pro-
duces the labor supply and consumption functions applicable with general forms
of nonlinear budget sets.

4.3. Instrumental-Variable Estimation
    The inclusion of taxes provide an additional reason for allowing for the endo-
geneity of (after tax) wages and other income. Writing the labor supply function
as
                                           ∗
                  h = (ω(h), y(h), z, υ) = (ω(h), y(h), z) + v .            (4.14)
makes the point explicitly. The Instrumental variable approach described ear-
lier can be applied as well as the grouping methods (which of course is just an
application of IV). The implementation of IV procedures imposes no parametric
restrictions and it allows one to consider a wide variety of exogeneity assumptions.
The fact that the error term does not interact with the wage and other income is
critical for the interpretation of IV as identifying the structural parameters of the
model.

4.3.1. Including Measurement Error
     In many data sets there are serious suspicions that hours of work and wages
are reported with error. This issue acquires added importance when we are dealing
with non-linear tax schedules since this creates a problem of observability of the
correct tax rate, which is the reason we introduce the issue here.
    Suppose H denotes measured hours of work and that the function

                                   H = H(h, ε)                                (4.15)

                                         36
relates H to actual hours h and to a randomly distributed error ε Typically,
analyses presume that the state h = 0 is observed without error.
    Measurement errors in hours often induce errors in observed wage rates since
researchers construct wages by dividing total labor earnings, E, by hours worked
in the period. Whereas W = E/h defines the true hourly wage rate, W̃ = E/H
designates the data available on wages. Measured wages W̃ are contaminated by
reporting errors even when E provides accurate quantities for each individual’s
total labor earnings and wages are indeed constant for hours worked over the
period. This formulation presumes a reciprocal relation in the measurement error
linking data on hours and wages. More generally, suppose W̃ links to the true
wage rate according to the relationship

                                W̃ = W̃ (W, h, ε) .                           (4.16)

In the reciprocal measurement error example, W̃ = W h / H(h, ε) where H(h, ε)
comes from (4.15).
    The presence of measurement errors in hours typically invalidates use of non-
linear IV procedures to estimate the structural labor supply equation given by
(4.14). Expressing this equation in terms of H rather than h involves merely
substituting (4.15) into (4.14); and if measurement error also carries over to wages,
then substitutions must be made for wages as well. These replacements typically
result in a variant of structural equation (4.14) that cannot be transformed into a
form that is linear in disturbances. Measurement errors in hours invariably render
the marginal tax rate unobservable, which in turn makes both the marginal wage
(ω(h)) and virtual income (y(h)) also unobservable. Sophisticated adjustments
must be included to account for such factors. These complications motivate many
researchers to turn to maximum likelihood procedures to estimate hours-of-work
specifications as we do below. However with some additional assumptions IV
procedures are still possible, at least when the issue of censoring does not arise.
    Suppose measurement error is of the multiplicative kind

                      H = H(h, ε) = heε with W̃ = E/H,                        (4.17)

In the presence of such error, specifications can also be found that allow for use of
IV procedures to estimate substitution and income parameters. Incorporating the

                                         37
multiplicative measurement error model (4.17) into the semilog functional form
of labor supply given in relation yields the empirical specification:

                         H = u + Zγ + α ln ω m + βy + u                      (4.18)

where

      ln ω m = ln(E/H) + ln(1 − τ 0 )
          e = µ − ασ 2ε /2
          µ
          u = ν + α(ε − E(ε)) + (H − h) = ν + α(ε − E(ε)) + h(eε − 1).

The disturbance u possesses a zero mean since E(eε ) = 1. Virtual income y(h)
and the marginal tax rate τ 0 are not contaminated by measurement error because
they are only functions of Y and hW = H W̃ , quantities which are both perfectly
observed (by assumption). The variable ln ωm represents the natural logarithm of
the after-tax wage rate evaluated at observed hours, which diﬀers from the actual
marginal wage due to the presence of reporting error in hours. Assuming the
error ε is distributed independently of all endogenous components determining h,
including the heterogeneity disturbance v, the instrumental variables X applica-
ble for estimation of the original specification can also serve as the instrumental
variables in estimating the coeﬃcients of (4.18) by familiar IV methods.

4.3.2. Sources of Unobservables in Budget Sets
     An important class of models not widely recognized in the literature involves
budget constraints that vary across individuals in ways that depend on unobserved
factors. The modification required in the above analysis to account for such
factors replaces budget function b() appearing in (4.1) by:

                              b (c, h, W, Y, z, ξ) = 0 .                     (4.19)
The quantity z captures the influence of measured characteristics on budget sets.
Classic examples include family characteristics that alter the form of the tax func-
tion relevant for families. The error component ξ represents unobserved factors
shifting budget sets. Classic examples here include unmeasured components of
fixed costs, prices, and elements determining tax obligations.

                                         38
    The presence of ξ in b() typically renders IV methods inappropriate for esti-
mating parameters of the labor supply function . The usual problem comes about
since structural variants of cannot be found that are linear in disturbances, and
this is especially true when nonlinearities exist in tax schedules. When ξ appears
as a component of b(), researchers typically rely on the maximum likelihood meth-
ods summarized in the subsequent discussion to conduct estimation of behavioral
models of hour of work and consumption.

4.3.3. Complications of IV Estimation with Piecewise-Linear Constraints

     Naive application of instrumental-variable methods with piecewise-linear bud-
get constraints generally produces inconsistent estimates of behavioral parameters,
even ignoring the potential presence of measurement error. Section 4.6 below
presents the structural specification—see (4.69)—implied for hours of work when
Figure 4.1 designates the budget set and everyone works. As noted in Section
4.1, this budget set is convex and consists of three segments. Inspection of
                                                                  P
structural equation (4.69) reveals that the structural error is       dj v where dj
                                                                 j=1,2,3
represents an indicator variable signifying whether an individual selects segment
                                                         P
j = 1, 2,or 3. If the individual occupies any kink, then    dj v = 0. Suppose X
                                                       j=1,2,3
includes the set of instrumental variables presumed to satisfy E(ν|X) = 0. The
corresponding conditional expectation of the structural error implied by equation
           P
(4.69) is      Pr(dj | X)E(v | dj = 1, X). This expectation is typically not zero,
         j=1,2,3
a condition required to implement IV techniques. To use IV procedures in the
estimation of equation (4.69) necessitates the inclusion of sample selection terms
                                           P
adjusting for the nonzero expectation of        dj v.
                                         j=1,2,3


4.3.4. Non Participation and Missing Wages
      In the earlier sections we discussed how the estimation approach needs to
be generalized so as to allow for non-participation and for missing wages, which
present further complications for estimation. We argued that standard Instru-
mental Variables are not appropriate in this context. We now turn to Maximum
likelihood estimation which we set up to deal with the problems introduced above,

                                        39
namely non-linear taxes, measurement error, missing and/or endogenous wages
and other income and of course non-participation.

4.4. Maximum Likelihood Estimation: A General Representation
     The instrumental variable estimator, developed in the last section, required
exclusion restrictions to consistently estimate the parameters of the labor-supply
and consumption models involving nonlinear budget sets. In contrast, Maximum
Likelihood estimation exploits the precise structure of the budget constraint and
need not rely on exclusion restrictions to identify parameters. Even though mar-
ginal wages and virtual incomes are endogenous, nonlinearities introduced through
distributional assumptions provide a valuable source of identification. However,
exclusion restrictions are only avoided in this approach if gross wages and incomes
are assumed to be exogenous and in many applications of maximum likelihood re-
searchers also impose stringent distributional and independence assumptions on
sources of errors capturing heterogeneity and measurement error. Nonetheless, one
can entertain a wide array of nonlinearities in budget sets and decision processes,
along with rich specifications for heterogeneity and mismeasurement of variables.
    The following discussion begins with a general presentation describing the
application of maximum likelihood methods in hours of work and consumption
analyses allowing for flexible distributional assumptions and intricate forms of
nonlinearities in both preferences and budget constraints. This analysis draws
heavily upon Appendix A. Later subsections cover simple illustration of tech-
niques, many of which have been implemented in the empirical literature.

4.4.1. Dividing the Budget Constraint into Sets
      Irrespective of whether one considers diﬀerentiable or piecewise-linear for-
mulations for budget constraints, the essential idea underlying development of
likelihood functions in the presence of nonlinear constraints involves defining a set
of "states of the world". Each state designates a particular segment of the budget
set boundary, with states being mutually exclusive and states jointly covering all
parts of budget constraints. One interprets individuals as being endowed with
a set of attributes determining of their tastes, resources and constraints, with
these attributes viewed as random variables continuously distributed across the

                                         40
population. Based on the realizations of these variables, an individual selects
consumption and hours of work to optimize utility.
   Regarding the distribution of these variables in the previous discussion, sup-
pose unobserved heterogeneity influencing preferences, ν, the unmeasured factors
determining wages, η, and the unobservables incorporating budget sets, ξ, possess
the following joint density:

                 ϕ (v, η, ξ) ≡ ϕ (v, η, ξ | X)      for (v, η, ξ) ∈ Ω.            (4.20)

When errors, ε, contaminate the measurement of hours, the relevant joint distri-
bution becomes:

              ϕ (v, η, ξ, ε) ≡ ϕ (v, η, ξ, ε | X)   for    (v, η, ξ, ε) ∈ Ω       (4.21)

Both these expressions admit conditioning on a set of exogenous variables X,
but the subsequent analysis suppresses X to simplify the notation. The set Ω
designates the domain of these random variables.
     In this setting, n states of the world can occur. The discrete random variable
δ i signifies whether state i happens, with δ i = 1 indicating realization of state i and
δ i = 0 implying that some state other than i occurred. A state refers to locations
on boundaries of budget sets, to be explained further below. Consequently, the
value of δ i depends on where (v, η, ξ) falls in its domain determined by the rule:
                                    ½
                                      1 if (v, η, ξ) ∈ Ωi
                              δi =                                                 (4.22)
                                      0      otherwise

where the set Ωi constitutes that subset of the sample space Ω for which utility
maximization yields a solution for consumption and hours that lies within the
δ i = 1 portion of the budget. The mutually exclusive and exhaustive feature of
                                      S
                                      n
the sets Ωi for i = 1, ..., n implies   Ωi = Ω and Ωi ∩ Ωj = ∅ for i 6= j.
                                     i=1
    A central requirement invoked in dividing a budget constraint into its various
sections involves ensuring that unique solutions exist for c and h for any (v, η, ξ) ∈
Ωi . Consumption and hours of work may take on discrete values when (v, η, ξ) ∈
Ωi . Alternatively, there may be a continuous mapping relating C and h to (v, η, ξ)
within the set Ωi , but inverses must exist for the consumption and labor supply


                                           41
functions
                       h =       (ω, y, z, v) =    (ω(h), y(h), z, v)
                       c = c (ω, y, z, v) = c (ω(h), y(h), z, v)
expressed in terms of components of v. (These functions correspond directly
to those in (4.13) except that marginal wage ω and virtual income y now are
functions of ξ, the unobservable components b.) Considering the labor supply
function , this requirement implies existence of the inverse function

                 v = v h (h, ω (h) , y (h) , z) ≡ −1 (h, ω (h) , y (h) , z)          (4.23)
for values of v within the set Ωi . If v is in fact multi-dimensional (i.e., v 0 is a
vector), then an inverse must exist of the form
             v1 = vh (h, ω (h) , y (h) , z, v20 ) ≡ −1 (h, ω (h) , y (h) , z, v2 )   (4.24)
for some decomposition v0 = (v1 , v20 ).
    Division of the budget constraint into the events δ i = 1 for i = 1, ..., n gen-
erally creates two varieties of sets. First, diﬀerentiable segments of the budget
constraint over which consumption and hours vary continuously in response to
variation in preferences and constraint variables. Second, kink points at which
consumption and hours of work take fixed discrete values implied by the location
of the kink.

4.4.2. Maximum Utility Determines Placement on Budget Constraint
     The portion of a budget constraint selected by an individual depends on the
level of utility assigned to this state. The following discussion first character-
izes maximum utility attainable on diﬀerentiable segments, and then considers
evaluations at kink points.
    For the diﬀerentiable segments of the constraint, utility is determined by func-
tion
       V    = U (c (ω, y, z, ν), (ω, y, z, ν), z, ν)                                 (4.25)
            = U (c (ω(h, ξ), y(h, ξ), z, ν, ξ), (ω(h, ξ), y(h, ξ), z, ν, ξ), z, ν)
            ≡ V (ω (h, ξ) , y (h, ξ) , z, v)
            = V (ω, y, z, v)

                                              42
evaluated at optimal points in the specified set. The function V (W, Y, z, v) represents
the conventional indirect utility function associated with maximizing U (C, h, Z, ν)
in (4.1) subject to the linear form of the budget constraint given by (4.2). Roy’s
Identity specifies that the labor supply function can be written as
                                                Vω (ω, y, z, ν)
                               (ω, y, z, ν) ≡                                      (4.26)
                                                Vy (ω, y, z, ν)
with Vω and Vy denoting the partial derivatives of V . Suppose the interval
(h̄i−1 , h̄i+1 ) identifies the diﬀerential segment under consideration. The subse-
quent discussion refers to this segment as state i. Then the utility assigned to
state i corresponds to the maximum value of V achievable for hours falling in the
interval (h̄i−1 , h̄i+1 ).
     Diﬃculty in determining the achievable value of V depends on characteristics
of the budget function b(c, h, W, Y ). For the most general specifications of b,
inspection of relations (??) and (4.11) defining ω and y reveals that each depends
on both c and h through the derivative bh . If utility maximization occurs at
an interior point of (h̄i−1 , h̄i+1 ) given the realization of (v, η, ξ), then the implied
values of c and h solve the system
                              h=     (ω, y, z, υ) ∈ (h̄i−1 , h̄i+1 )               (4.27)
                              b (c, h, W, Y, ξ) = 0 .
Consequently, the maximum utility attainable on the interval (h̄i−1 , h̄i+1 ) is V
(or U ) evaluated at these solutions for c and h. Define this maximum utility
as V(i) , where the (i) subscript on V signifies utility assigned to state i. If one
extends state i to include either of the exterior points h̄i−1 or h̄i+1 , and uniqueness
and diﬀerentiability continue to hold at these points, then the above procedure
still applies in assigning a value for V(i) . The subsequent discussion ignores such
easily-handled extensions to simplify the exposition.
     Use of indicator functions provides an expression for V(i) . One can characterize
the set of values of C and h satisfying equations (4.27) as
 { (c, h) | I [ h = (ω, y, z, υ) ∈ (h̄i−1 , h̄i+1 ) ; b (c, h, W, Y ) = 0 ] = 1 } , (4.28)
where I denotes the indicator function defined by
                               ½
                                 1 if [ all conditions ] are true
           I [ conditions ] =
                                 0    if [ any condition ] is false .

                                            43
The indicator function I in (4.28) depends on satisfaction of 2 conditions. Using
I, a simple expression for the maximum utility attainable in state i is given by

V(i) = V (ω, y, z, v) ∗ I [ h =    (ω, y, z, υ) ∈ (hi−1 , hi+1 ) ; b (c, h, W, Y ) = 0 ] .
                                                                                     (4.29)
For values of v, η and ξ not yielding a solution in state i, V(i) = 0. It is possible
in this analysis for V(i) = 0 for all values of admissible values of (v, η, ξ) (i.e.,
Ωi = ∅). Throughout this discussion, we assume a utility function normalized so
that U (c, h, z, ν) > 0 for all admissible values of variables. So the event V(i) = 0
always means that some state other than i has a higher assigned utility.
    The most popular specifications of the budget function b(c, h, W, Y ) have deriv-
atives bh that depend on h but not on c. Examples include those specifications
incorporating income or sales taxes given by (4.4). Under these circumstances,
the first equation in (4.27) alone can be solved for h. Thus, V(i) simplifies to

         V(i) = V (ω, y, z, v) ∗ I [ h =       (ω, y, z, υ) ∈ (hi−1 , hi+1 ) ]      (4.30)

This expression serves as the principal formulation used in the subsequent discus-
sion.
    The portion of a budget constraint selected by an individual depend on the
level of utility assigned to this state. At kink points, utility takes the value

                                  V(i) = U (C̄i , h̄i , z, ν)                       (4.31)

where C̄i and h̄i designate the values of consumption and hours at the kink point
associated with state i.
    An individual occupies that portion of the budget constraint corresponding to
state i if the assigned utility is highest for this state. According to (4.22), the
subspace of (v, η, ξ) yielding this realization is the set Ωi . Correspondingly, one
can represent Ωi as

                  Ωi = { (v, η, ξ) | V(i) > V(j)        for all j 6= i } .          (4.32)

Relationships (4.29) (or (4.30)) and (4.31) define V(i) depending on characteristics
of the state. For expositional simplicity without loss of generality, the subsequent
discussion ignores equalities V(i) = V(j) in defining the sets Ωi since these events
are zero probability events.

                                             44
4.4.3. Density Functions for Hours and Wages
     The distribution of consumption and hours of work depends on where in-
dividuals locate on the budget constraints. The probability that an individual
makes selections falling within the state i portion of the budget equals:


                  P (δ i = 1) = P ((v, η, ξ) ∈ Ωi )                           (4.33)
                                Z     Z
                              =   ···      ϕ (v, η, ξ) dv dη dξ
                                       Ωi
                                Z
                              ≡    ϕ (v, η, ξ) dv dη dξ .
                                         Ωi
                  R      R
     The notation · · · Ωi denotes integration over the set Ωi , which the third line
                                                      R
of this equation expresses in the shorthand notation Ωi . The joint distribution
of the δ i ’s takes the form:
                                                  Y
                          P (δ 1 , ..., δ m ) =         [P (δ i = 1)]δi
                                                  i∈M

where the set M refers to the set of all possible states i that comprise the entire
budget constraint. As noted previously, the events δ i = 1 may refer to either
kinks or diﬀerentiable constraints.
   When an optimum occurs at a kink point, the distribution of hours conditional
on this event is
                               ¡               ¢
                            P h = h̄i | δi = 1 = 1 .                         (4.34)
This distribution is, of course, discrete.
    On diﬀerentiable segments of the constraint, the distribution for hours is con-
tinuous. Performing a conventional change of variables yields the density

                                     dv h ¡ h       ¢
                      f (h, η, ξ) =      ϕ v , η, ξ                           (4.35)
                                     dh
                                     dv h ¡ h                    ¢
                                   =     ϕ v (h, ω, y, z) , η, ξ
                                     dh
where
               v h = vh (h, ω (h) , y (h) , Z) = −1 (h, ω (h) , y (h) , z)    (4.36)

                                                  45
refers to the inverse of labor supply function (4.3), and the quantity

                              dv h    ∂ ∂ω ∂ ∂y ∂ −1
                                   =(      −     )( )                                      (4.37)
                              dh      ∂ω ∂h ∂y ∂h ∂v
                                                                    ∂      ∂
represents the Jacobian associated with this inverse.15 The terms ∂ω   and ∂y cor-
respond to the economic concepts of substitution and income eﬀects, and the
          ∂
quantity ∂v    determines how unobserved components of preferences influence la-
bor supply. (In applying the change-of-variables formula, Jacobians must be con-
structed to be uniquely signed for densities to be properly defined. This result
follows here because the selection of budget-set partitions ensures a unique solu-
tion exists for c and h for each partition combined with the innocuous assumption
                                                             ∂
that unobserved components enter preferences such that ∂v       > 0). For the re-
maining terms in (4.37), diﬀerentiation of the budget constraint implies:
                                           ∂w
                                              = bhh                                        (4.38)
                                           ∂h
and
                                   ∂y    bh
                                      = − − bh − bhh h                                     (4.39)
                                   ∂h    bc
where the subscripts on the budget function b signify partial derivatives.16 As-
suming the popular tax form for the budget function given by (4.5), expressions
(4.38) and (4.39) simplify to
                                       ∂ω
                                          = (1 − τ 0 ) W                                   (4.40)
                                       ∂h
and

                                        ∂y
                                           = τ 00 W 2 h                                    (4.41)
                                        ∂h
  15
     Derivation of this Jacobian follows from total diﬀerentiation of relation (4.4.x) with respect
                                                     ∂ν
to h—treating ν as a function of h—and solving for ∂h   .
  16                                   ∂y
     Derivation of the expression for ∂h follows from total diﬀerentiation of the relation (4.10)
defining y which yields              µ                ¶
                                                   ∂y
                                  bc bh + bhh h +         + bh = 0
                                                  ∂h
and solving this equation.

                                                46
where τ 0 and τ 00 denote the marginal tax rate and its derivative. Division of the
budget set into states ensures that inverse (4.36) and its Jacobian (4.37) exist in
the space defined by each state.
   The implied density of h conditional on δ i is
                        R
                         Φi|h
                              f (h, η, ξ) dη dξ
      f (h | δ i = 1) =                              for     h ∈ Θi· h       (4.42)
                               P (δ i = 1)

where the set Θi· h = (hi−1 , hi+1 ) designates the domain of h given occurrence of
                        R
δ i = 1 and the notation Φi|h denotes integration of (η, ξ) over the set

        Φi|h = { (η, ξ) : | I [ h =    (ω, y, z, v) ; (v, η, ξ) ∈ Ωi ] = 1 } .   (4.43)

The set Φi|h treats h as fixed and, therefore, is a function of h.
   Performing a further change of variables for wages yields the following joint
density for hours and wages
                                        dη w
                      f (h, W, ξ) =          f (h, η w , ξ)                      (4.44)
                                        dW
                                        dη w
                                      =      f (h, η w (W, Q) , ξ)
                                        dW
where

                            η w = η w (W, Q) = W −1 (W, Q)                       (4.45)
denotes the inverse of wage function, and the quantity
                                      dη w    ∂W −1
                                           =[    ]                               (4.46)
                                      dW      ∂η

represents the Jacobian associated with this inverse. (For expositional conve-
nience, and without loss of generality, this analysis assumes that a monotonically
increasing relationship links W to η; so, (4.46) positive.)
    The density of h and W conditional on δ i is
                      R
                       Φi|h,W
                               f (h, W, ξ) dξ
 f (h, W | δ i = 1) =                                for    (h, W ) ∈ Θi· h,W (4.47)
                              P (δ i = 1)

                                            47
                     R
where the notation    Φi|h,W
                               denotes integration of ξ over the set

 Φi|h,W = { (ξ) | I [ h =      (ω, y, z, υ) ; W = W (Q, η) ; (v, η, ξ) ∈ Ωi ] = 1 } .
                                                                                 (4.48)
The set Φi|h,W is a function of h and W . One can express the set Θi· h,W appearing
in (4.47) as
                       Θi· h,W = { (h, W ) : ξ ∈ Φi|h,W } ,
which specifies the domain of h and W assuming occupancy of the state i part of
the budget constraint.
    If v is multi-dimensional as specified in labor supply function (4.13), then
(4.47) becomes
                       R
                        Φi|h,W
                               f (h, v2 , W, ξ) dv2 dξ
  f (h, W | δ i = 1) =                                   for    (h, W ) ∈ Θi· h,W
                                 P (δ i = 1)
                                                                            (4.49)
          where f (h, v2 , W, ξ) has a form analogous to (4.44), and the notation
R
 Φi|h,W
        now denotes integration of (v2 , ξ) over the set

Φi|h = { (v2 , ξ) : I [ h =      (ω, y, Z, v) ; W = W (Q, η) ; (v, η, ξ) ∈ Ωi ] = 1 } .

The set Φi|h,W still remains a function of h and W .
    Finally, when an individual selects an optimum at a kink point and h = h̄ is
discrete, then the distribution of wages takes the form
                       R
    ¡             ¢     Φi|h̄,W
                                f (ν, W, ξ) dν dξ
 f h̄, W | δ i = 1 =                                for  W ∈ Θi· W       (4.50)
                                P (δ i = 1)

where the density f (ν, W, ξ) is specified analogous to (4.44), and the set Φi|h̄,W
is a function of h̄ and W defined by

       Φi|h̄,W = { (ν, ξ) : h = h̄i ; W = W (Q, η) (v, η, ξ) ∈ Ωi } .           (4.51)

The domain Θi· W of W in (4.50) corresponds to that part of the overall range
of W consistent with being at kink h̄i .



                                           48
4.4.4. Likelihood Functions for Hours and Wages
     Appendix A presents the results required to develop a complete specification
of the joint likelihood function for hours (h ) and wages (W ). Suppose the state
δ 0 = 1 refers to an individual choosing not to work; the states δi = 1 for i ∈ Mc
designate those circumstances when the person works and selects optimums on
diﬀerentiable segments of budget constraints; and the states δ i = 1 for i ∈ Md
denote those events when an individual chooses hours located at a kink point.
Hours (h) are continuously distributed for states in the set i ∈ Mc , and h is
discretely distributed in the no-work state and for states in the set i ∈ Md . Hours
possess a combined continuous/discrete distribution. Knowledge of the value of h
entirely determines the values of δ 0 , ..., δ n where n + 1 designates the total number
of states.
    Formula (A.26) of Appendix A implies that the following specification delimits
the joint likelihood function of (h, W ):

 L (h, W ) = L (h, W, δ 0 , ..., δ n ) =   [P ((v, η, ξ) ∈ Ω0 )]δ0 ∗              (4.52)
                                                "Z                                #δi
                                            Y
                                                           f (h, v2 , W, ξ) dv2 dξ ∗
                                           i ∈ Mc   Φi|h,W
                                              "                                   #δi
                                            Y Z
                                                              f (ν, W, ξ) dν dξ         .
                                           i ∈ Md   Φi|h̄,W


The first line of this expression delineates the probability of not working; the
second line—comprised of the numerators of (4.49)—designates the densities of
(h, W ) unconditional on δ i = 1; and the third line—encompassing the numera-
tors of (4.50)—demarcates the probability that h = h̄i combined with the density
of W unconditional on δ i = 1.

4.4.5. Density Functions Accounting for Measurement Error
     With measurement error contaminating hours of work, h is no longer ob-
served and one instead has data on measured hours H specified by relation (4.15).
Without loss of generality, suppose (4.15) constitutes a monotically increasing re-
lationship that links H to the measurement error component ε. The joint density


                                            49
function (4.21) relates the distribution of ε to the distributions of the structural
errors ν, η, and ξ.
    On diﬀerentiable segments of the budget constraint, the density function for
true hours and wages is f (h, W, ξ, ε) which has a form entirely analogous to (4.44).
Performing a conventional change of variables using relationship (??) yields the
density

                                           ∂εH   ¡           ¢
                  f (h, W, ξ, H) =             f h, W, ξ, εH                  (4.53)
                                           ∂H
                                           ∂εH   ¡                 ¢
                                         =     f h, W, ξ, εH (H, h)
                                           ∂H
where
                               εH = εH (H, h) = H −1 (H, h)                   (4.54)
refers to the inverse of measurement error function (4.15), and the quantity

                                         ∂εH    ∂H −1
                                             =[    ]                          (4.55)
                                         ∂H     ∂h
designates the Jacobian associated with this inverse. The corresponding density
of H and W conditional on δ i = 1 is

                       R       R
                       Θi· h   Φi|h,W̃
                                          f (h, W, ξ, H) dξ dh
f (H, W | δ i = 1) =                                             for   (H, W ) ∈ Θi· H,W
                                         P (δ i = 1)
                                                                             (4.56)
        R
where Θi· h denotes integration over the set Θi· h which corresponds to the domain
of h conditional on δ i = 1.
    When wages are also measured with error through mismeasurement of hours
as characterized by relation (4.16), then (4.53) is replaced by
                    ³           ´       ³                       ´
                  f h, W̃ , ξ, H = f h, W̃ −1 (W̃ , h, H), ξ, H              (4.57)

where                     ³                 ´       ³          ´
                 W = W̃ −1 W̃ , h, εH (H, h) ≡ W̃ −1 W̃ , h, H



                                                50
refers to the inverse of measurement error function (4.16). The corresponding
density of H and W̃ conditional on δ i = 1 becomes
                        R      R           ³              ´
   ³               ´      Θi· h Φi|h,W
                                        f    h, W̃ , ξ, H   dξ dh
 f H, W̃ | δ i = 1 =                                               for (H, W̃ ) ∈ Θi· H,W̃
                                        P (δ i = 1)
                                                                                   (4.58)
No change of variables occurs in deriving this expression since W̃ is fully known
given values for h, W and H.
    A similar situation applies to incorporating measurement error when an in-
dividual selects an optimum at a kink point of the budget set. Conditional on
realization of the state δ i = 1, the value of ε is known since one sees H and h = h̄i
with probability one. Defining the f (ν, W, ξ, ε) as the generalization of the joint
density function appearing in (4.50) incorporating measurement error, then sub-
                                                                ¡     ¢
stitution of the inverse functions W̃ −1 (W̃ , h̄i , H) and εH H, h̄i introduced above
into this joint density yields
               ³             ´        ³                           ¡     ¢´
             f ν, W̃ , ξ, H = f ν, W̃ −1 (W̃ , h̄i , H), ξ, εH H, h̄i       .      (4.59)

Following the steps above, one can readily verify that the density of (H, W̃ ) con-
ditional on δ i = 1 takes the form
                           R           ³              ´
      ³               ´     Φi|h̄,W̃
                                     f  ν, W̃  , ξ, H   dν dξ
   f H, W̃ | δ i = 1 =                                        for W̃ ∈ Θi· W̃ . (4.60)
                                       P (δ i = 1)

Clearly, both specifications (4.59) and (4.60) depend directly on h̄i , but as in
representation of other specifications the only arguments included in the function
are those variables which are random in the state; h̄i is fixed and known given
δ i = 1.

4.4.6. Likelihood Functions for Measured Hours and Wages
     Formulating the likelihood function for (H, W̃ ) is complicated by the fact that
a researcher does not observe precisely which portion of the budget constraint an
individual selects since this decision reveals h and this quantity is unknown. Thus,
when a person works, one cannot distinguish which individual state i occurs. On

                                           51
the other hand, a researcher does observe when a person does not work. Expressed
in terms of the endogenous dummy variables δ i , these circumstances imply that
the data reveal the event δ o = 1 but not the individual events δi = 1 for
                                                                   P
i ∈ M = Mc ∪ Md . Instead, one merely observes whether δ 1 ≡ i∈M δ i = 1 or
δ 1 = 0.
     Appealing to formula (??) of Appendix A, the following specification represents
the joint likelihood function of (h, W ):
   ³     ´
L H, W̃      = [P ((v, η, ξ) ∈ Ω0 )]δ0 ∗
                  "        "Z                                  #
                    XZ                  ³               ´               XZ            ³            ´
                                     f h, v2 , W̃ , ξ, H dv2 dξ dh +                f ν, W̃ , ξ, H
                  i∈Mt   Θi     Φi|h,W                                 i∈Mt   Φi|h̄,W

The first line of this expression delineates the probability of not working; and the
second line designates the density of (H, W̃ ) unconditional on δ1 . Accordingly,
both H and W̃ are continuously distributed throughout the range on H > 0.

4.5. Maximum Likelihood: Convex Diﬀerentiable Constraints with Full
     Participation
     Developing specifications for likelihood functions when budget sets are convex
and have diﬀerentiable boundaries is straightforward, especially assuming labor
force participation is not a factor for the population under investigation. The
following discussion presents two examples of such specifications to illustrate ele-
mentary versions of the general formulas presented above.

4.5.1. Specifications for Linear Parameterizations of Labor Supply
     Derivation of likelihood functions assuming a linear specification for hours of
work when (4.5) describes the budget constraint—wherein tax payments depend
only on a single taxable income quantity—follows directly from the previous results.
Assuming no measurement error (i.e., H = h), a change in variables from the
heterogeneity error ν to actual hours h using relation (??) yields the likelihood
function for h:

                                dν
                     fh (h) =      ϕ (h − µν − zγ − αω − βy)                   (4.62)
                                dh ν
                                         52
where ϕv (v) denotes the density of the heterogeneity component ν, and the Ja-
cobian term is
                            dν                       ∂τ 0
                                = 1 + (α − βh) W 2        .               (4.63)
                            dh                       ∂I
This Jacobian term is restricted to be non-negative over the admissible range.
Maximizing (4.62) yields maximum-likelihood estimates for the parameters of the
labor supply function, , which provide the information needed to infer the work
disincentive eﬀects of taxation.
    If hours are indeed contaminated by additive measurement error, then the
likelihood function for observed hours H = h + ε is given by:
                                 Z maxhours
                      fH (H) =              ϕε (H − h)ϕh (h)dh            (4.64)
                                   0

where ϕε (ε) denotes the density of the heterogeneity component ε. This expres-
sion resembles relation (4.62) except that integration occurs over hours to account
for the existence of reporting error, and H replaces actual hours h in the Jacobian
term in (4.63).

4.5.2. Specifications for Multiplicative Measurement Error
     Now consider maximum-likelihood estimation of the semilog specification of
labor supply. Suppose the heterogeneity-error-component ν in structural labor-
supply equation (??) and the disturbance ε in the measurement-error equation
(??) for hours of work possess the joint distribution ϕνε (ν, ε), where ϕνε designates
a density function. For the moment, suppose (ν, ε) are independently distributed
of the gross wage and other income. Using relations (4.35) and (4.44) to perform
a standard change in variables from the errors ν and ε to the variables h and
H produces the likelihood function needed to compute maximum-likelihood esti-
mates. The transformation from (ν, ε) to (h, H) is monotonic for a wide range of
functional forms for as long as the underlying preferences satisfy quasiconcavity
and budget sets are convex.
    Without measurement error, the likelihood function for hours of work, h, takes
the form
                        dν
             fh (h) =      ϕν (h − µ − zγ − α ln W − α ln(1 − τ 0 ) − βy)      (4.65)
                        dh
                                          53
where ϕν is the marginal density for ν, and the Jacobian term is
                             µµ                    ¶       0
                                                             ¶
                   dν                 α               2 ∂τ
                       =1+                     − βh W                         (4.66)
                   dh             W (1 − τ 0 )          ∂I

which is required to be non-negative. In these expressions, the derivative τ 0 is
evaluated at I = W h + Y − τ (W h + Y ).
    With multiplicative measurement error, the likelihood function for observed
hours H becomes
     Z maxwage Z maxhours
                          dν
L=                           fνεw (h − µ − zγ − α ln ω − βy, ln H − ln h, W ) dh dW
      0          0        dh
                                                                               (4.67)
where integration occurs over the hourly wage, which is unobserved, using the
joint density fνεw (ν, ε, W ). The non-negativity of the Jacobian term clearly
places restrictions on the behavioral parameters and we discuss these restrictions
further below.

4.6. Maximum Likelihood: Convex Piecewise-Linear Constraints with
     Full Participation
     The majority of empirical labor-supply studies incorporating taxes treat the
tax schedule as a series of brackets implying a piecewise-linear budget set. With
such a tax function, the familiar change-in-variables techniques implemented in
conventional maximum likelihood do not apply due to the nonexistence of the Ja-
cobian over measurable segments of the sample space arising from nondiﬀerentia-
bility of functional relationships characterizing hours-of-work choices. Moreover,
a piecewise-linear budget set creates endogenous variables (hours and after-tax
wages) that are both discrete and continuous in character. Section 4.4 covers
specifications for likelihood functions for such endogenous variables.

4.6.1. Characterization of Labor Supply with Piecewise-Linear Con-
       straints
     To illustrate the derivation of an estimable labor supply model using the
piecewise-linear approach assuming the linear structural specification for hours
of work given by (??), consider the simple case of a budget set with only three

                                         54
segments as presented in Figure 4.1. (To simplify the exposition here, we number
the kink points as 0,1,2, and 3 rather than as 0, 2, 4, and 6 .) The preceding
discussion defines the variables yj , ωj and hj appearing in this figure. To locate
the kinks and slopes of the budget constraint for an individual, a researcher must
know the individual’s level of non-labor income, gross wage rate, hours of work,
and the structure of the tax system. The hours of work at which kinks occur are
given by hj = (Ij − Y + D)/W , where Y and D, respectively, represent taxable
non-labor income and deductions, and Ij is the maximum taxable income for
segment j. The slope of each segment is given by the marginal wage rate for that
segment: ω j = W (1 − tj ), where j denotes the segment, tj signifies the marginal
tax rate for that segment, and W is the gross wage rate per hour. Finally, the
non-labor income at zero hours of work - the intercept of the budget line - is
y1 = Y − τ (Y − D), where τ (·) is the tax function evaluated at the individual’s
taxable income at zero earnings. Given this intercept value, virtual incomes or the
intercepts associated with successive budget segments are computed by repeated
application of the formula: yj = yj−1 + (ω j−1 − ωj )hj−1 .
    Given a convex budget constraint, an individual’s optimization problem amounts
to maximizing U(C, h) subject to

                        C = y1                 if h = 0
                          = ω1 h + y1          if h0 < h ≤ h1
                          = ω2 h + y2          if h1 < h ≤ h2              (4.68)
                          = ω3 h + y3          if h2 < h ≤ h3
                          = ω 3 h3 + y3        if h = h3

The solution of this maximization problem decomposes into two steps. First,
determine the choice of h conditional on locating on a particular segment or a
kink. This step yields the solution:

         h=0                 if h = 0          (lower limit)
          = (ω 1 , y1 , ν)   if 0 < h < h1     (segment 1)
          = h1               if h = h1         (kink 1)
          = (ω 2 , y2 , ν)   if h1 < h < h2    (segment 2)                 (4.69)
          = h2               if h = h2         (kink 2)
          = (ω 3 , y3 , ν)   if h2 < h < h3    (segment 3)
          = h3               if h = h3         (kink 3 = upper limit)

                                          55
Second, determine the segment or the kink on which the person locates. The
following relations characterize this solution: choose:

                    0                if (ω 1 , y1 , ν) ≤ 0
                    (Segment 1)      if h0 < (ω1 , y1 , ν) < h1
                    (Kink 1)         if (ω 2 , y2 , ν) ≤ h1 < (ω 1 , y1 , ν)
                    (Segment 2)      if h1 < (ω2 , y2 , ν) < h2                          (4.70)
                    (Kink 2)         if (ω 3 , y3 , ν) ≤ h2 < (ω 2 , y2 , ν)
                    (Segment 3)      if h2 < (ω3 , y3 , ν) < h3
                    (Kink 3)         if (ω 3 , y3 , ν) ≥ h3

Combined, these two steps imply the values of h and C that represent the utility-
maximizing solution for labor supply and consumption.
    All studies implementing the piecewise-linear approach assume the existence
of measurement error in hours of work. With the linear measurement error model
given by (4.16), observed hours H = h + ε. As long as the measurement error
component ε is continuously distributed, so is H. In contrast to information on h,
knowledge of H suﬃces neither to allocate individuals to the correct branch of the
budget constraint nor to identify the marginal tax rate faced by individuals, other
than at zero hours of work. The state of the world an individual occupies can no
longer be directly observed, and one confronts a discrete-data version of an errors-
in-variables problem. The interpretation of measurement error maintained in this
analysis is that ε represents reporting error that contaminates the observation on
h for persons who work.17
    With measurement error, the linear specification of given by (??) with b   hj ≡
  17
    Note that expected hours of work, in this convex piece-wise linear case, is additive in each
hours choice weighted by the probability of each segment or kink. Each term in this sum being
at most a function of two marginal wages and two virtual incomes. Blomquist and Newey (1997)
exploit this observation to develop a semi-parametric estimator for hours of work imposing the
additivity through a series estimator.




                                              56
µ + αωj + yj + Zγ implies the following stochastic specification for labor supply:
            b
            h1 + ν + ε            if 0 < b
                                         h1 + ν ≤ h1           (segment 1)
            h1 + ε                if h2 + ν < h1 < b
                                     b             h1 + ν      (kink 1)
            b
        H = h2 + ν + ε                    b
                                  if h1 < h2 + ν ≤ h2          (segment 2)
                                                                                (4.71)
            h2 + ε                if b
                                     h3 + ν < h2 < b
                                                   h2 + ν      (kink 2)
            b
            h3 + ν + ε                     b
                                  if h2 < h3 + ν ≤ h3          (segment 3)
            h3 + ε                if b
                                     h3 + ν ≥ h3               (upper limit)
This represents a sophisticated variant of an econometric model that combines
discrete and continuous choice elements.

4.6.2. Likelihood Function with Measurement Error When All Work
                                                            P
    The log-likelihood function for this model is given by i ln fH (H), where i
indexes observations. Defining ν j = hj−1 − b
                                            hj and v j = hj − b
                                                              hj , the components
fH (H) are given by
                               Zvj
                         P
                         3
             fH (H) =                ϕ2 (H − b
                                             hj , ν) dν    (segments 1, 2, 3)   (4.72)
                         j=1
                               νj
                                     ν j+1
                                     Z
                             P
                             2
                         +                ϕ1 (H − hj , ν) dν   (kinks 1, 2)
                             j=1
                                     vj
                             Z∞
                         +          ϕ1 (H − h3 , ν) dν    (upper limit)
                             v3

where ϕ1 (·, ·) and ϕ2 (·, ·) are the bivariate density functions of (ε, ν) and (ε +
ν, ν), respectively. Maximizing the log-likelihood function produces estimates of
the coeﬃcients of the labor supply function . These estimates provide the
information used to infer both substitution and income responses, which in turn
provide the basis for calculating the work disincentive eﬀects of income taxation.

4.6.3. Shortcomings of Conventional Piecewise-Linear Analyses
    The piecewise-linear approach for estimating the work disincentive eﬀects of
taxes oﬀers both advantages and disadvantages relative to other methods. Con-

                                               57
cerning the attractive features of this approach, piecewise-linear analyses recognize
that institutional features of tax systems induce budget sets with linear segments
and kinks. This is important if one believes that a smooth tax function does not
provide a reasonably accurate description of the tax schedule. The piecewise-linear
approach admits randomness in hours of work arising from both measurement
error and variation in individual preferences and it explicitly accounts for endo-
geneity of the marginal tax rate in estimation, but so do the instrumental-variable
and diﬀerentiable likelihood methods discussed above. As we will see below, the
piecewise-linear approach more readily incorporates fixed costs of holding a job,
regressive features of the tax code, and multiple program participation than other
procedures due to the discrete-continuous character of hours-of-work choices in-
duced in these environments. These features of the piecewise-linear method make
it a vital approach in empirical analyses of labor supply.
    On the other hand, the following shortcomings of the piecewise-linear proce-
dure raise serious doubts about the reliability of its estimates of work disincentive
eﬀects. First, the piecewise-linear methodology assumes that both the econometri-
cian and each individual in the sample have perfect knowledge of the entire budget
constraint that is relevant for the worker in question. Errors are permitted neither
in perceptions nor in measuring budget constraints. Taken literally, this means
that: all income and wage variables used to compute each sample member’s taxes
are observed perfectly by the econometrician; individuals making labor supply
choices know these variables exactly prior to deciding on hours of work; each in-
dividual and the econometrician know when the taxpayer will itemize deductions
and the amount of these itemizations; and each taxpayer’s understanding of the
tax system is equivalent to that of the econometrician (e.g., the operation of such
features as earned-income credits). Clearly, given virtual certainty that most of
these assumptions are violated in empirical analyses of labor supply, the estimates
produced by methods relying on these assumptions must be interpreted very cau-
tiously. The diﬀerentiable-likelihood methods rely on the same assumptions. The
instrumental-variable methods do not, so they are likely to be more robust.
    Second, measurement error plays an artificial role in econometric models based
on the piecewise-linear approach. Its presence is needed to avoid implausible pre-
dictions of the model. The statistical framework induced by the piecewise-linear
approach implies that bunching in hours of work should occur at kink points if

                                         58
hours precisely measure h. However, for the vast majority of data sources cur-
rently used in the literature, only a trivial number of individuals, if indeed any
at all, report hours of work at interior kink points. Unless one presumes that
the data on hours do not directly represent h, such evidence provides the basis
for immediately rejecting the distributional implications of the above specifica-
tions. Considering, for example, the labor-supply characterization proposed in
equation (4.69), almost any test of the distributional assumptions implied by this
specification would be readily rejected because observed hours would take the
values h0 , h1 , h2 and h3 with only a trivial or zero probability. Instead, observed
hours essentially look as if they are distributed according to a continuous distri-
bution. When a continuously-distributed measurement error ε is added to the
model, observed hours H are continuously distributed. This provides an essen-
tial reason for introducing measurement error in the data, for without it, the
piecewise-linear structure provides a framework that is grossly inconsistent with
the data. Of course, several sound reasons exist for admitting measurement er-
ror in a labor supply model, including the widespread suspicion that reporting
error contaminates data on hours of work. However, measurement error in hours
of work implies measurement error in wages, since they are typically computed
as average hourly earnings. Current applications of the piecewise-linear analy-
sis mistakenly ignore this by assuming perfectly measured budget constraints.18
The unnatural role played by measurement error raises questions about the cred-
ibility of findings derived from the piecewise-linear approach. In contrast to the
piecewise-linear approach, it is not essential to introduce measurement error in
either the diﬀerentiable-likelihood or the instrumental-variable approach because
hours in the distribution of h are continuous without measurement error.
    Third, existing research implementing the piecewise-linear methodology relies
on very strong exogeneity assumptions. Other than hours of work, all variables
involved in the calculation of taxes are presumed to be exogenous determinants of
labor supply behavior, both from a statistical and from an economic perspective.
These variables include gross wages, the various components of non-labor income,
and deductions. In light of the evidence supporting the view that wages and
income are endogenous variables in labor supply analyses, particularly in the case
  18
   It is possible to argue that this error does not result in measurement error in the hourly
wage, if the measurement error is interpreted as an “optimization” error.


                                             59
of wages, suspicions arise regarding the dependability of estimated substitution
and income eﬀects based on procedures that ignore such possibilities. Most of
the exogeneity assumptions are also maintained in the diﬀerentiable-likelihood
approach, but are easily relaxed when applying instrumental-variable procedures
(given the availability of a suﬃcient number of other instrumental variables).
    Fourth, some concerns about the reliability of estimates produced by the
piecewise-linear approach ensue due to the static behavioral framework maintained
in the formulation of empirical relations. Piecewise-linear studies invariably rely
on the textbook one-period model of labor supply as a description of hours-of-
work choices, and impose it to estimate parameters. Existing implementations
of the diﬀerentiable-likelihood approach suﬀer from the same problem. Everyone
acknowledges that individuals are not simply myopic optimizers; they transfer
income across periods to achieve consumption plans that are infeasible without
savings. A serious question arises concerning the relevance of such considerations
in estimating substitution and income eﬀects used to predict responses to tax
policy.

4.7. Maximum Likelihood Estimation Imposes Restrictions on Behav-
     ioral Responses
    The implementation of maximum likelihood procedures imposes interesting
and important restrictions on behavioral parameters in the presence of non-linear
budget constraints. These restrictions come about in defining the statistical model
to be coherent, requiring probabilities to fall in the [0,1] interval and densities to
be nonnegative.

4.7.1. Restrictions Imposed Under Piecewise-Linear Constraints
     The econometric model produced by the piece-wise linear formulation given
by (4.72) implicitly imposes parametric restrictions that constraint the signs of es-
timated substitution and income eﬀects. As developed in MaCurdy et al. (1990),
particular inequality restrictions must hold in the application of estimation pro-
cedures with piecewise-linear budget constraints for likelihood functions to be
defined (i.e., to ensure that the components of these functions are non-negative).
More specifically, in applications of such procedures, the Slutsky condition must

                                         60
be locally satisfied at all interior kink points of budget sets that represent feasible
options for any individual in the sample such that the compensated substitution
eﬀect must be positive. For the linear specification of the labor supply function
considered in the preceding discussion, the specific inequality constraints imposed
are
                                 α − βhjk ≥ 0, ∀ j, k                            (4.73)
where the quantities hjk represent the hours-of-work values that correspond to
interior kink points j on a sample member k’s budget set. Because many values
of hjk exist in most analyses of piecewise-linear constraints, fulfillment of relations
(4.73) essentially require global satisfaction of the Slutsky condition by the labor
supply function. Such a requirement, in essence, globally dictates that the uncom-
pensated substitution eﬀect of a wage change on hours of work must be positive
for the labor supply specification considered in the preceding discussion, and the
income eﬀect for hours of work must be negative. The imposition of these restric-
tions, especially for men, is highly suspect given the available evidence from other
studies. These restrictions carry over to more general labor supply functions.

4.7.2. Restrictions Imposed Under Diﬀerentiable Constraints
     Maximum likelihood estimation with diﬀerentiable constraints induces com-
parable restrictions. Consider, for example, likelihood function (4.62). For this
                                                                           dν
specification to be a properly-defined likelihood function, the Jacobian dh    must
be non-negative. Violation of this condition implies that the density function for
                                                                 dν
h is negative, which obviously cannot occur. Non-negativity of dh   translates into
the property                            µ          ¶−1
                        ∂     ∂           ∂τ     2
                           − h≥−              W        ≤ 0,                   (4.74)
                        ∂w ∂y             ∂I
where refers to the labor supply function. The left-hand side of this inequality is
the Slutsky term. This inequality result does not require compensated substitution
eﬀects to be positive as quasi-concave preferences mandate, only that these eﬀects
cannot become too negative.
   Maximum likelihood procedures yield nonsensical results unless equation (4.74)
holds. Without measurement error, estimated parameter values cannot imply
a violation of equation (4.74) at any of the data combinations (h, w(h), y(h))

                                          61
actually observed in the sample. If a violation occurs, then the evaluation of
(4.62) for the observation associated with this combination would result in a non-
positive value which causes the overall log likelihood function to approach minus
infinity which clearly cannot represent a maximum.
    With measurement error, maximum likelihood estimation applied to function
(4.64) ensures that a weighted average of density functions appearing in (4.64)
holds, with weighting occurring over all combinations of hours, marginal wages,
and virtual income lying in the feasible range of the budget constraint of any indi-
vidual included in the sample. Since maximum likelihood procedures assume the
validity of such restrictions when calculating estimates of the coeﬃcients of , the
resulting estimated labor supply function can be expected to exhibit compensated
substitution eﬀects that obey inequality (4.74.) over a very wide range of hours,
wages, and incomes.19

4.8. Maximum Likelihood: Accounting for Participation and Missing
     Wages
     As mentioned in previous sections, some applications of the piecewise-linear
approach incorporate fixed costs to working - costs such as transportation that
must be paid for any amount of work but which may vary across individuals.
This significantly complicates the analysis because the optimized level of work
under the budget constraint while working may not represent the optimal choice
overall; one must explicitly consider the option of not working and thus avoiding
the fixed cost. For any level of fixed costs, a minimum number of hours worked is
implied creating an attainable range in the observable hours of work distribution;
individuals will not work unless the gain is large enough to overcome the fixed
costs. In essence, these complications arise because the budget constraint is not
convex, invalidating simple maximization procedures.
  19
    It is, of course, computationally feasible to use (4.5.3) in estimation and not require fh
to be defined over the entire range of its support. Computationally one merely requires fh to
be non-negative over a suﬃciently large region to ensure (4.5.3) > 0. Of course, not requiring
fh ≥ 0 over its relevant range produces a nonsensical statistical model.




                                             62
4.8.1. Fixed Costs of Working
    If an individual must pay fixed monetary costs, F , to work, then non-labor
income, Y , in the above budget constraints is replaced by

                                Y − F,     if h > 0,                               (4.75)
                                 Y,        if h = 0.

F is partially unobservable and, thus, modelled as a stochastic element, varying
across individuals. Hence, we see that the budget constraint discontinuously jumps
down by F when the individual chooses to work.
    To solve for the optimum when faced with this budget constraint, two regimes
must explicitly be considered: working and not working. Estimation proceeds
by finding the maximum utility under each regime and then comparing these to
determine which option is chosen. In neither regime, the utility function U(C, h, ν)
- where we explicitly note the unobserved component, ν - is maximized subject to
optimization problem (4.1) with (4.4) modified by (4.75).
    In the no-work regime, the solution is simple. We know h is 0, so utility is
given by U (Y − τ (Y − D), 0, ν).
    The solution in the work regime closely follows the solution presented in Section
4.6. Again utilizing the labor supply function, (ω, y, ν) yields the solution for h
given in (4.69), where the virtual income y now subtracts fixed costs F . However,
to compute maximum utility in this regime requires associating a utility level with
each possible hours choice. Utility along any segment, j, is given by the indirect
utility function, V (ωj , yj , ν). At kinks, the direct utility function must be used,
so the utility at kink j is given by U(ω j hj + yj , hj , ν). Hence, utilizing exactly the
same solution procedure exploited in Section 4.6, we can define maximized utility
when working, V ∗ :

                                −∞                          1 ≤ 0
                                V (ω 1 , y1 , ν)           0 < 1 < h1
                                U(ω 1 h1 + y1 , h1 , ν)     2 < h1 ≤ 1
                V ∗ (w, y, v) = V (ω 2 , y2 , ν)           h1 < 2 < h2             (4.76)
                                U(ω 2 h2 + y2 , h2 , ν)     3 < h2 ≤ 2
                                V (ω 3 , y3 , ν)           h2 < 3 < h3
                                U(ω 3 hm + y3 , hm , ν)     3 ≥ hm


                                           63
where
                                                   Vω (ω j , yj , ν)
                           j ≡   (ωj , yj , ν) ≡                                (4.77)
                                                   Vy (ω j , yj , ν)
with Vω and Vy denoting the partial derivatives of V ; relation (4.77) is, of course,
Roy’s identity defining the labor supply function, , evaluated at wage and income
levels ω j and yj . The use of −∞ for h = 0 simply indicates that h = 0 is not
included in this regime and, thus, selecting it indicates that the no-work regime
is preferred. Given functional forms for V and U , finding V ∗ is straightforward.
    Given maximized utility under each regime, the final step in the solution is to
compare the two regimes. An individual chooses to work at the hours specified
by the solution in (4.69) if

                        V ∗ (ω, y, ν) ≥ U(Y − τ (Y − D), 0, ν)                  (4.78)

and chooses not to work otherwise. For any level of ν, treating equation (4.78) as
an equality implies a critical level of fixed costs, F ∗ (ν) above which the individual
will choose not to work; F enters this relation through the virtual income variable
y. Because desired hours of work increase with ν, this critical value will generally
be increasing in ν - greater propensity to work implies that higher fixed costs are
required to prefer the no-work option. If restrictions are placed on the support
of F , such as F > F , there will be values of ν low enough to rule out the work
regime, thus implying a hole at the low end of the h distribution.
    As a final step before deriving the likelihood function, note that in the no-work
regime, gross wage, W , is not observed and, thus, the budget constraint cannot
be derived. Hence, W must be endogenized. Such a step amounts to modeling
the oﬀered gross wage rate as being generated by a variant of equation (??) which
presumes that W is randomly distributed across the population depending on
measured characteristics Q and unobservable components η. To simplify the
discussion below, we assume that the linear variant of specification (??) (i.e.,
W = W ∗ (Q) + η) generates W .

4.8.2. Likelihood Function Incorporating Fixed Costs
    To derive the likelihood function, first consider the likelihood contribution
of an individual who does not work. We assume this no-work decision can be

                                           64
observed, so there is no measurement error. In the no-work case, one of two
situations applies: (i) fixed costs are suﬃciently high with F > F ∗ ≡ F ∗ (ν, η)
for any given ν and η, or (ii) if this fixed-cost threshold falls below the lowest
admissible value for F (i.e. F ∗ ≤ F ), then desired hours are suﬃciently low with
ν < ν ∗ ≡ ν ∗ (η) for any η.20 The probability of this event is

                                      Z∞ Zν ∗ Z∞
                        L0 =                       ϕνηF (ν, η, F ) dF dη dν             (4.79)
                                  −∞ −∞ F ∗

where ϕνηF is joint density of (ν, η, F ).
    For the work regime, the likelihood contribution looks very much like that
derived in specification (4.72), as we continue to assume the linear hours of work
function and the form of measurement error assumed there. The only changes are
the addition of terms for δ and F (accounting for the fact that F < F ∗ (ν)) and
the removal of the term for the lower limit which is no longer part of that regime
and is now perfectly observable. Using ϕ1 and ϕ2 to denote the distribution of
(ε, ν, η, F ) and (ε + ν, ν, η, F ) yields:

                             Zν j ZF ∗
                       P
                       3
              L1 =                         ϕ2 (H − b
                                                   hj , ν, W − W ∗ (Q), F ) dF dν       (4.80)
                       j=1
                             νj       0
                                  ν j+1 F ∗
                                  Z Z
                           P
                           2
                       +                      ϕ1 (H − hj , ν, W − W ∗ (Q), F ) dF dν
                           j=1
                                  νj      0

                           Z∞ ZF ∗
                       +                  ϕ1 (H − h3 , ν, W − W ∗ (Q), F ) dF dν
                           ν3     0

where

                     ν j solves the equation (ω j , yj , ν j ) = hj−1                   (4.81)
                     ν j solves the equation (ω j , yj , ν j ) = hj .
  20
     The critical value υ* solves relation (4.8.4) treated as an equality with virtual income y
evaluated at F .


                                                      65
All variables appearing in these expressions are defined as in Section 4.6.
    The likelihood function for an individual is given by

                               L = (L1 )δE (L0 )1−δE                          (4.82)

where δ E = 1 if the individual works and = 0 otherwise. Estimation proceeds
by maximizing the sum of log likelihoods across individuals, as always. This
is quite complex in this case, requiring knowledge of both the direct utility U
and the indirect utility, V , and also requiring comparisons across regimes for all
individuals and all parameter values.

4.9. Welfare Participation: Maximum Likelihood with NonConvex Con-
     straints
     A common source of non-linearity in budget constraints involves participation
in welfare programs. To illustrate this situation, consider the simplest case in
which the only taxes faced by an individual result from benefit reduction on a
single welfare program. Figure 4.3 presents this scenario. Under most welfare
programs, individuals face very high eﬀective tax rates when they initially work
due to large reductions in their benefits occurring when earnings increase. Once
benefits reach 0, the tax rate drops to a lower level, creating a non-convex kink
in the budget constraint. This non-convexity invalidates the simple procedures
exploited in Section 4.6 implemented to divide sample spaces into locations on
budget sets.

4.9.1. Simple Nonconvex Constraints with No Welfare Stigma
    Following the picture portrayed in Figure 4.3, an individual maximizes U(c, h, ν)
subject to the budget constraint

                             c = W h + Y + b(I(h)),                           (4.83)

where benefits are given by the simple benefit schedule:
                              ½
                                G − ρW h, if G − ρW h > 0,
                   B(I(h)) =                                                  (4.84)
                                0           otherwise.


                                        66
G gives the guarantee amount which is reduced at the benefit reduction rate ρ
as the earnings, W h, increase. This implies a kink point at h1 = G/ρW where
benefits reach 0 and, thus, the marginal wage rises to W . So, the individual faces
two segments: segment 1 has h < h1 with net wage ω 1 = (1 − ρ)W and virtual
income y1 = Y + G; and segment 2 has h > h1 with net wage ω 2 = W and virtual
income y2 = Y .21
      Because the budget constraint is non-convex, the solution cannot be character-
ized simply by finding a tangency with the budget constraint as it was in Section
4.6. Multiple tangencies are possible and these must be directly compared to de-
termine the optimum. Hence, one requires the regime shift approach summarized
in Section 4.4.
      Consider first the regime in which positive benefits are received; that is, h < h1 .
Maximization, given the eﬀective wage and income, on this linear segment follows
the approach of Section 4.4. We can characterize the optimal choice according to
the function (ω 1 , y1 , ν). Denotes the value of ν which implies (ω 1 , y1 , ν) = 0 as
ν 0 . Then the optimal hours choice along that segment is given by

                  h = 1 = (ω 1 , y1 , ν),    ν > ν 0,   h = 0,     ν ≤ ν 0.            (4.85)

   The optimized value on this segment (including the zero work option), ac-
counting for the fact that h > h1 is not allowed, is given by
                                     
                                      V (ω 1 , y1 , ν), 0 < 1 ≤ h1
                    ∗
                  V1 (ω1 , y1 , ν) =   U (y1 , 0, ν),     1 ≤ 0       (4.86)
                                     
                                       −∞,                1 > h 1 ,
where equation (4.85) defines 1 .
   Next, consider the regime without benefits, that is with h ≥ h1 . Again the
optimal choice, given the wage and income, on this segment is given by the labor
supply function 2 = (ω2 , y2 , ν). The optimized value, accounting for the fact
that h < h1 is not admissible, is given by22
                                        ½
                      ∗                   V (ω 2 , y2 , ν), 2 ≥ h1 ,
                    V2 (ω 2 , y2 , ν) =                                   (4.87)
                                          −∞,               2 < h1 .

  21
    We ignore any upper bound on hours worked for simplicity.
  22
    In the following formulation, we implicitly assume that the event   2 ≥ H occurs with zero
probability.

                                             67
    Hence, the individual selects regime 1, with welfare receipt, if V1∗ > V2∗ , and
regime 2 otherwise. Since work propensity increases with ν, this can be charac-
terized by a cutoﬀ value, ν ∗ , defined by

                          V1∗ (ω1 , y1 , ν ∗ ) = V2∗ (ω 2 , y2 , ν ∗ ).        (4.88)

For values of ν above ν ∗ , regime 2 is chosen; and for values below ν ∗ , regime 1 is
realized.
    We can define three sets, Ω0 , Ω1 , and Ω2 , such that for ν ∈ Ω0 the individual
chooses not to work, for ν ∈ Ω1 the individual locates on segment 1 receiving
benefits with positive hours of work, and for ν ∈ Ω2 the individual locates on
segment 2. We must consider two cases to define these sets exactly. First, suppose
ν ∗ > ν 0 . Then we have

                             Ω0 = {ν | ν ≤ ν 0 }                               (4.89)
                             Ω1 = {ν | ν 0 < ν ≤ ν ∗ }
                             Ω2 = {ν | ν > ν ∗ }

Alternatively, if ν ∗ ≤ ν 0 , then the switch to regime 2 occurs before positive hours
are worked in regime 1, that is

                               Ω0 = {ν | ν ≤ ν ∗ }                             (4.90)
                               Ω1 = ∅
                               Ω2 = {ν | ν > ν ∗ } .

Hence, for certain individuals and parameter values, no value of ν exists such that
they will locate on segment 1 with positive hours of work.
    To characterize the likelihood function we again need a functional form for the
gross wage of the form W = W (Z) + η. We ignore measurement error here for
simplicity, and because there is no problem with individuals failing to locate at the
kink in this non-convex case. Define δB = 1 if the individual receives benefits, and
δ E = 1 is the individual works, both 0 otherwise. The likelihood function is given




                                              68
as follows, incorporating ϕην (η, υ) and the general inverse function ν = ν(h):

                                         ∂ν
       δ B = 1,     δ E = 1,      L11 =     ϕ (ν(h), W − W (Z)) I(ν ∈ Ω1 ), (4.91)
                                         ∂h νη
                                         ∂ν
       δ B = 0,     δ E = 1,      L01 =     ϕνη (ν(h), W − W (Z)) I(ν ∈ Ω2 ),
                                        Z∂h
       δ B = 1,     δ E = 0,      L10 =          ϕνη (ν, η)dνdη.
                                            Ω0

where I(·) represents an indicator function equal to 1 if the condition in the
parentheses is true. Because the value of ν implied by the hours choice may
be inconsistent with the value implied by the regime choice, it is possible to
have “holes” in the hours distribution around the kink point. For example, an
individual on segment 1 must have ν ≤ ν ∗ . If his hours choice is too close to
the kink, this may imply a value of ν > ν ∗ and thus an observation with zero
likelihood.
    The overall likelihood function is given by

                  l = (L11 )(δB )(δE ) (L01 )(1−δB )(δE ) (L10 )(δB )(1−δE ) .   (4.92)

Estimation proceeds by maximizing the sum of log likelihoods across individuals,
as always. This is quite complex in this case, requiring knowledge of both the
direct utility U and the indirect utility, V , and also requiring comparisons across
regimes for all individuals and all parameter values.

4.9.2. Welfare Stigma Implies Selection of Budget Constraint
     The above analysis assumes that all individuals eligible for welfare are on wel-
fare. Individuals working less than h0 but failing to receive welfare are operating
below the implied budget constraint, a possibility not permitted in the analysis.
Yet, many individuals are in exactly this situation. This is generally explained by
assuming the existence of some utility loss or stigma associated with welfare.
    To capture welfare stigma the utility function is modified to take the form

                                 U = U (c, h, ν) − δ B ζ,                        (4.93)



                                              69
where ζ is the level of welfare stigma which is greater than 0 and varies across
individuals.23 Two unobserved components now enter preferences, ν and ζ. Such
cases were considered in the general analysis of Section 4.4.               In terms of the
notation of this preceding section, in relationship (4.49) ν corresponds to ν 1 and
ζ corresponds to ν 2 .
    With this modification we again consider the welfare and non-welfare regimes.
Since the welfare stigma term does not aﬀect the marginal decisions, given that
the individual is on welfare, the discussion of hours of work presented above for
regime 1 is still valid. The optimal utility is now given by
                                      
                                       V1 (ω 1 , y1 , ν) − ζ, 0 < 1 ≤ h1 ,
                 V ∗ (ω 1 , y1 , ν) =   U(y1 , 0, ν) − ζ,       1 ≤ 0,               (4.94)
                                      
                                        −∞,                     1 > h1 .

    The analysis for regime 2 is altered in this case, because an individual can be
observed not receiving welfare for any value of h - that is, given welfare stigma,
it is possible to observe an individual with h < h1 , but δ B = 0. So regime 2 is
now defined solely by δ B = 0. Optimal hours of work, given ω2 and y2 , are given
by (ω 2 , y2 , ν). Defining the value of ν for which (ω 2 , y2 , ν) = 0 as ν + , hours of
work under this regime are now given by

                           h =        2 =     (ω2 , y2 , ν),     ν > ν +,              (4.95)
                           h = 0,           ν ≤ ν +.

Optimized utility is now
                                              ½
                                                  V (ω 2 , y2 , ν),   2 > 0
                       V2∗ (ω 2 , y2 , ν) =                                            (4.96)
                                                  U (y2 , 0, ν),      2 ≤ 0.

    Choice of regime still proceeds by comparing V1∗ and V2∗ , as done in relationship
(4.88). For any ν in the sets Ω0 or Ω1 defined by expressions (4.89) or (4.90),
there is now some critical level of ζ ∗ = ζ ∗ (ν), which depends on ν, such that
regime 2 is chosen when ζ > ζ ∗ ; regime 1 is chosen otherwise.
  23
    This additive form is used for simplicity. More general forms can be used, but change none
of the substantive points presented here.



                                                   70
     Given this characterization, we can derive the likelihood function for each
combination of δ B and δ E , using the joint densities ϕνζη (ν, ζ, η) and ϕνη (ν, η):
                                      R ∗
                                   ∂ν ζ
     δ B = 1,   δ E = 1,    L11 = ∂h   0
                                           ϕνζη (ν(h), ζ, W − W (z)) I(ν ∈ Ω1 ) dζ
                                   ∂ν
     δ B = 0,   δ E = 1,    L01 = ∂h Rϕνη (ν(h), W − W ∗ (Z)) I(ν ∈ Ω1 )
                                  ∂ν ∞
                                + ∂h   ∗ ϕ     (ν(h), ζW − W ∗ (Z)) I(ν ∈ Ω1 ) dζ
                                  R ∞ ζ R νζη
                                            R ζ∗
     δ B = 1,   δ E = 0,    L10 = −∞ Ω0 0 ϕνζη (ν, ζ, η) dζ dν dη
                                  R ∞ R ν∗ R ζ∗
     δ B = 0,   δ E = 0,    L00 = −∞ −∞ 0 ϕνζη (ν, ζη) dζ dν dη .
                                                                               (4.97)
     Estimation proceeds as in the non-stigma case by selecting the appropriate
likelihood branch for each individual and then maximizing the sum of the log
likelihoods.
     As with the fixed cost case, the likelihood function is complex even in this
extremely simplified welfare case. For each possible set of parameter values, the
maximum must be computed for each regime and then compared to compute
ζ ∗ . Adding the tax codes, with their implied kinks, increases computational
complexity. As a result, the literature has adopted a simplifying methodology
which we present in Section 4.10 below.

4.9.3. Multiple Program Participation
     In principle, the extension to the case of multiple program participation is
straightforward. For simplicity, we consider a case in which the individual can
choose between participating in no welfare programs, participating in welfare pro-
gram 1, participating only in program 2, or participating in both welfare programs
1 and 2. We extend the utility function as follows:

                              U = U(c, h, ν) − δ 1 ζ − δ 2 χ                         (4.98)

where δ 1 = 1 if the individual participates in program 1, and δ 2 = 1 if the
individual participates in program 2.24 Benefits from program j, Bj (I(h)), are
given:                      ½
                              Gj − ρj W h,   if Gj − ρj W h > 0,
                Bj (I(h)) =                                              (4.99)
                              0,             otherwise.
  24
    The use of two additive errors is a simplifying assumption which ensures that the stigma
from both programs is higher than stigma from program 1 alone.

                                            71
Benefits from both together are given as
                      ½
                        G1 + G2 − ρ1 W h − ρ2 W h = G − ρW h,           if G − ρW h > 0,
B1 (I(h))+B2 (I(h)) =
                        0                                               otherwise,
                                                                              (4.100)
where G = G1 +G2 and ρ = ρ1 +ρ2 . In general, the benefit functions for programs
1 and 2 will have diﬀerent breakeven points, implying the values of hours defining
kinks (h1 in Figure 4.3) will not be the same.
    This formulation expands the model considered in Sections 4.6 and 4.9.2. To
adapt this earlier model, one must designate three distinct regimes in place of
regime 1 specified above: regime 1a indicating an individual participates only in
program 1, regime 1b signifying this person collects benefits only from welfare pro-
gram 2, and regime 1c designating participation in both programs. Optimal hours
and utility for participation in a regime are given by (4.85), (4.86), (4.94), (4.95),
and (4.96), with net wages and virtual income in these formulations specified as
ω j = W (1 − ρj ) and yj = Y + Gj , with j = 1a, 1b, or 1c. In particular, relations
analogous to (4.85) and (4.86) define the labor supply and utility functions for
each of the new regimes for the “on-welfare” segments associated with relevant
combination of welfare programs. Relations (4.95) and (4.96) still define the labor
supply and utility functions for the non-welfare regime. The set of relations define
thresholds for ν demarcating the regions of unobserved tastes determining when
a person works (ν 0 in (4.85) and ν + in (4.95)). Maximization again requires se-
lection of a regime. Relations analogous to (4.94) and (4.96) characterize utilities
corresponding to the various regimes. Conditional on values ν, these relations
in turn imply thresholds for the stigma errors ζ, χ, and ζ + χ that determine
individuals’ welfare participation. The likelihood function for this model takes
a form similar to equation (4.97), with more branches appearing in the function
reflecting the additional regimes analyzed in this formulation.
    Again, note the complexity of these extremely simplified welfare cases, even
these involve significantly financial burden. For each possible set of parameter
values, one must compute the maximum for each regime, account for the benefit
structure, and then compare these to compute the error ranges for the likelihood
function. When the individual is unemployed, one must perform these calcula-
tions for all possible wage values and all values of ν consistent with the no-work
decision. Adding the tax code, with its implied kinks, increases computational dif-

                                        72
ficulties. Introducing additional sources of unobserved heterogeneity enlarges the
number of dimensions over which one must calculate integrals, requiring sophisti-
cated numerical procedures and considerable computer resources. As a result, the
literature has adopted simplifying methodologies, a topic to which we now turn.

4.10. Computational Simplification by Making Hours Choices Discrete
      To make estimation problems manageable, a popular method is to presume
that consumers face only a limited set of hours choices. For example, a worker
may choose only full-time work, part-time work, or no work, with each of these
options implying a prescribed number of hours. Formally, this is done by assuming
that unobservable tastes components, ν, possess a discrete distribution, usually
characterized as a multinomial distribution conditional on covariates. Combined
with a 0/1 welfare decision, this finite set of hours choices yields a relatively small
set of discrete states, say a set of S states, over which the utility function must
be maximized.
    Given a specific form for the preference function, utility can be readily eval-
uated at each of the hours choices and the maximum can be determined. Given
an assumed joint distribution for unobservable taste components, ν, for the error
component determining wages, η, and for welfare stigma, ζ, one can compute a
probability that a family selects alternative j. This in turn defines a sample log
likelihood of the form
                                  P
                            L=          dj ln P (j | X, θ)                      (4.101)
                                 j ∈ S

where dj is an indicator for whether individual i chooses alternative j, X is a
vector of observable characteristics, and P (j| X, θ) is the probability of choos-
ing alternative j with θ the set of unknown parameters. Such formulations are
substantially less complicated than the specifications considered above because
one avoids the intricate process of calculating thresholds and dealing with com-
bined continuous-discrete endogenous variables; only discrete choices are allowed
for here.
    This formulation requires each individual to be placed into a limited set of
preassigned work states, even though observed hours worked take many more val-
ues, making hours look as if they were continuously distributed. To overcome this

                                          73
issue, analyses applying this approach necessarily introduce measurement error
in hours of work to admit hours to deviate from the discrete values assumed for
the choice set. Hence, conditional on ν, each alternative j contributes some posi-
tive probability P (j| X, θ, ν) which now depends on the value of the unobservable
measurement error variables.
    We illustrate this approach by considering the linear measurement error model
given by (4.16) where the reporting error ε ∼ ϕε , with ε and ν independent. Fur-
ther, as typically assumed, we specify that hours are not subject to measurement
error in no-work states. The likelihood function for hours now takes the form
        Ã                         !1−δE Ã                                     !δE
            P                             P
   L=            dj ln P (j| X, θ)            dj ln (ϕε (H − hj ) P (j| X, θ))
          j ∈ S0                        j ∈ S1
                                                                             (4.102)
where δ E denotes a 0/1 variable with 1 indicating that the individual works, S0
designates the set of all states associated with the individual not working, the set
S1 includes all states in which the individual works, and hj denotes the admissible
values of true hours. Earnings depend on the values of hj and wages. In (4.102),
observed hours (H) are continuously distributed among workers.

5. Family Labor Supply
     The study of family labor supply is motivated by a number of important
issues. First is the issue of how a couple responds to tax and welfare benefit
incentives when the benefit rules create links in the incentive structure, such that
the incentives facing one household member depends on the actions taken by the
other. Second, is the issue of distribution of welfare within the household, both
from the point of view of studying the income distribution and from the point
of view of targeting benefits to particular household members considered to be
vulnerable (such as children for example).
    The facts themselves make it important we understand family labor supply.
For example in the UK there has been a very large increase in the participation
rate of married women and a large decrease in the participation of men. These
changes have been accompanied by an increase in the number of families where
no one works. This is perhaps predictable given the structure of the benefit

                                        74
system. However the design of income maintenance programs that target the
right households and oﬀer the right incentive system is of course important and
crucially relies our knowing the way that family labor supply is determined.
    The basic family labor supply model for a married couple is the unitary model
where the household is seen as maximizing one (household) utility function whose
arguments are male and female labor supply and consumption. Applying demand
analysis one can derive the implications of changes in wages and unearned income
on behavior. Since taxes can be viewed as changes in wages and unearned income,
such models can be used to simulate the labor market eﬀects of changes in the
tax system or welfare benefits. However in this model intrahousehold distribution
has little meaning and of course the model has nothing to say about this. In
addition it is unclear how the household utility function can come about from the
interaction of two individuals with incentives that are not necessarily perfectly
aligned. This has led to the recognition that even when dealing with households
we need to account for individuals within households and we need to model the
way they share resources. This leads to potentially richer models of behavior that
are capable of explaining much more than the standard household model.
    In the sections that follow we outline the two models and some of their impli-
cations in greater detail.

5.1. The Standard ‘Unitary’ Family Labor Supply Model
    Consider writing the family joint labor supply and consumption problem as

                                max U (c, L1 , L2 , x)
              st                c = Y + w1 (T − L1 ) + w2 (T − L2 )

where U is a strictly quasiconcave function of consumption C and the two leisures
Li . The budget constraint equates household consumption to total income, con-
sisting of unearned income (Y ) and the two earning (wi (T − Li )), T being total
time available for market work and wi the two wages. In addition to the budget
constraint, leisure cannot exceed T and hence labor supply must be positive or
zero (T − Li ).
     This is a standard demand analysis problem with the complication that there
may be corner solutions and a number of empirical complications to do with the

                                        75
fact that wages are individual specific and possibly endogenous as well as not
observed when the individual is working.
    The first order conditions for an interior solution simply state that the marginal
rate of substitution between the two leisures will equal the ratio of wages

                                     UL1
                                     UL2
                                         =w1
                                          w2                                    (5.1)
Following standard demand analysis optimal choices satisfy homogeneity and sym-
metry, the latter being the property that
                        ∂Li      ∂L    ∂L        ∂L
                        ∂wj
                            + Lj ∂mj = ∂wji + Li ∂mj   for i 6= j

                               m = Y + w1 T1 + w2 T2

    An implication of this model is that behavior is neutral to within household
lump sum redistributions of income. Thus paying a benefit to the male or the
female will have exactly the same eﬀect, so long as it does not distort wages. This
is often termed the income pooling hypothesis and we revisit the issue when we
discuss the collective model. Here it suﬃces to note that the symmetry condition
and the income pooling hypothesis are properties of the unitary model and may
not be satisfied in the collective one.

5.1.1. Nonparticipation
     The key issue with labor supply and the source of most empirical diﬃculties
is dealing with nonparticipation by either or both partners. The diﬃculty arises
because participation is endogenous and will in general depend on unobserved
individual characteristics which jointly determine labor supply. A related diﬃculty
is the fact that we do not observe wages for the non-workers and non-workers will
tend to have lower wages than workers. In this subsection we show how this issue
can be dealt with empirically.
    The first issue to be addressed is allowing for unobserved heterogeneity in the
parameters of the utility function. Typically this can be addressed in a number
of ways. One way would be to assume that the marginal rate of substitution for
each of the two leisures with consumption included a multiplicative error term (see


                                         76
Heckman, 1974 for example). In this case we could write the first order conditions
as                           ³ ´
                               U
                          log ULC1 = log (w1 ) + ε1
                             ³ ´                                             (5.2)
                               UL1
                          log UC = log (w1 ) + ε2
We can also assume a (bivariate) density for the wage rates, say f (w1 , w2 |z) where
z are the observable characteristics that drive wages and ε1 and ε2 will be taken
to be independent of them. Typically one would assume a distribution function
for ε = [ε1, ε2 ]0 , for example N(0, Ω).
    The functions 5.2 together with the distributional assumption for the unob-
served heterogeneity define the distribution of hours of work. Hence the likelihood
contribution for a couple where both are participating is simply the joint density
of hours of work and wages for the two of them.

                                          H1 >0,H2 >0 =

            ³ ³ ´                      ³ ´                           ´
                 U                      U
     | J | g log ULC1 − log (w1 ) , log ULC1 − log (w1 ) |w1 , w2 , x × f (w1 , w2 |z)

                                       ∂ε
                                  J = ∂H  0        [Jacobian]

where x are observables aﬀecting individual preferences. When one or both part-
ners are not working hours of work are censored and the respective wage is unob-
served. Take as an example theµcase¶where one of the two is not working (say 1).
                                     T
                                    UL                          UT
In this case note that ε1 < log      T
                                    UC
                                      1
                                           − log (w1 ) , where ULT1 is the marginal rate
                                                                 C

of substitution evaluated at L1 = T. The likelihood contribution must be written
taking this censoring into account. For convenience we will write is in terms of the
joint density of hours and wages given above. Thus the likelihood contribution is
                                  R R
                     H1 =0,H2 >0 = w1 L1 >T ( H1 >0,H2 >0 ) dL1 dw1


The integration with respect to the wage takes place over the entire range of
wages. The contributions to the likelihood for the case of the other partner not
working or both not working can similarly be derived. The sample likelihood is
then the product of all contributions.

                                              77
   This is the prototypical likelihood function for the standard labor supply model
with no fixed costs, which allows explicitly for non-participation and missing wages

5.2. Discrete Hours of Work and Program Participation
     It is straightforward to allow for proportionate taxes, or even piece-wise linear
taxes, so long as these lead to a budget constraint that is convex and so long as the
endogeneity of the tax rate is taken into account. However, most welfare programs
are designed is such a way that they define a non-convex budget set: Implicit
marginal tax rates are higher at low hours of work, where increases in earnings lead
to a rapid withdrawal of benefits and low at higher hours where the individual pays
the usual taxes. Dealing with this issue is generally quite hard. Things become
particularly complicated when modelling family labor supply because the benefits
may be interdependent (and they usually are).To simplify he problem it has now
become almost standard to discretize hours of work. Then the problem of utility
maximization becomes one of choosing packages of consumption and earnings -
consumption is defined by the earnings of the individual, the tax system and the
benefit system. Within this context we can also account for fixed costs of work
(another non-convexity) and for the decision to participate (or not) in a welfare
program. (Hoynes (1996) and Keane and Moﬃtt (1998))
    We start with a utility function defined over hours of work H1 and H2 and we
discretize the distribution of hours. For example hours can take the discrete values
h ={0,20,40}.Suppose we write family utility at hours H1 = hi , H2 = hj where hi
and hj are the ith and jth point of the discrete hours distribution respectively.

                 Uhi hj = U(H1 = hi , H2 = hj , c, ε) − ηPB + uhi hj

where PB is a 0-1 program participation dummy. The term ηPB reflects the
utility costs of program participation such as “stigma”. This may be randomly
distributed over the population. The term ε reflects unobserved heterogeneity in
preferences and the term uhi hj hours specific unobserved heterogeneity. Given the
associated wage the discrete hours imply a corresponding set of earnings for each
individual.
    The budget constraint incorporates all relevant aspects of the tax and benefit



                                         78
system to define the resulting level of consumption.

        c = w1 H1 + w2 H2 + Y − T (Y, w1 H1 , w2 H2 ) + B(Y, w1 H1 , w2 H2 )PB

where
                          T    - tax function
                          B    - program benefit function

The likelihood is derived taking into account program participation. First note
that observation on whether an individual is participating in welfare programs or
not is informative about the range in which the participation cost η lies. Note also
that for any given η the utility function and the budget constraint define whether
the person will be a participant or not. At each observation we can derive the
probability that the chosen point pr(Uhi hj > Uhk hs , ∀ k 6= i and s 6= j|w1 , w2 , η, ε)
is optimal, conditional on η and the heterogeneity terms ε. If the person is eligible
for a welfare program at the observed point and he does actually participates (i.e.
receives benefits) then the range in which η lies is defined by the fact that the
utility gain from participating is higher than the cost η. For the non-participants
η lies in the complement of this set. This allows us to integrate out η over the
relevant range. When the person is ineligible at the observed point no information
is available for η and we integrate over its entire range. In this case as we move over
diﬀerent values of η the probabilities change not only because of the direct eﬀect
of η through the utility function but also because it induces diﬀerent potential
participation decisions at each discrete hours points, thus changing both optimal
hours and consumption. Thus consider the likelihood contribution for a couple
where both work and participate in a welfare program - (in work benefits). This
will take the form
     nR     R                                                            o
        η W ε
               pr(U h  h
                      i j > Uh h
                              k s
                                  , ∀k 6
                                       = i and s 6
                                                 = j|w1 , w2 , η, ε)dεdη   f (w1 , w2|z)

where W is the set of η such that program participation is optimal at the point of
observation. The form of the probability is defined by uhi hj . Imposing a logistic is
not restrictive if we allow for unobserved heterogeneity through the ε (McFadden).
The contribution to the likelihood for a non-worker must also take into account
the fact that the wage will not be observed in that case. This is done as before by

                                           79
integrating over all possible wages. Of course the practical diﬃculty is that the
probability of participation is a complicated function of the wage rate through the
formulae of the tax and welfare benefit system.
    The models estimated in this way have the great attraction that they allow us
to simulate policies allowing for possible changes in the take-up of means tested
benefits. To the extent that there is suﬃcient genuine exogenous variation in the
data allowing us to identify the factors that determine take up these can be very
useful for the ex ante evaluation of welfare policies.

5.3. Collective Models of Family Labor Supply
      As we have seen the family labor supply models have reached great levels
of sophistication in dealing with non-convexities in the budget constraint and
other important empirical and theoretical issues. However they suﬀer from a po-
tentially important flaw: They assume the existence of a well define household
utility function. However, if one take the view that households comprise of in-
dividualistic persons who have come together because this pleases them in one
way or another, then it is possible that the unitary framework cannot capture the
richness of observed behavior. This has led to the development of the Collective
model of labor supply. In this model a two adult household is characterized by
the preferences of each individual and a sharing rule defining the way that con-
sumption is split among the two members. Within this framework we can have
private goods (enjoyed by the members separately), public goods and household
production. The main empirical issue discussed within this framework is that of
identification: What can we learn about individual preferences and the sharing
rule when we observe aggregate household consumption. This has led to a num-
ber of important theoretical results by Chiappori (1988, 1992) recently extended
by Blundell, Chiappori, Magnac and Meghir (2001) to allow for corner solutions
and to discuss identification in the presence of unobserved heterogeneity. In what
follows we provide a discussion of collective models.
    The framework is the collective model with two household members and no
public goods or household production. Each member supplies labor hi (i = m, f )
and consumes a private good (Ci ). A critical assumption in the collective approach
as introduced by Chiappori is that the household only takes Pareto-eﬃcient de-


                                        80
cisions. That is, for any set of male and female wages and unearned income
(wf , wm , y), there exist some level of male utility ūm (wf , wm , y) such that labor
supply and consumption for each household member (hi , C i ) is a solution to the
program :

                                 max            U f [1 − hf , C f ]              (5.3)
                             hf ,hm ,C f ,C m

                         U m [1 − hm , C m ] ≥ ūm (wf , wm , y)
                              C = wf .hf + wm .hm + y
                               0 ≤ hi ≤ 1,            i = m, f
where the labor supply has been normalized to lie between 0 and 1. The function
ūm (wf , wm , y) defines the level of utility that member m can command when the
relevant exogenous variables take the values wf , wm , y. Underlying the determina-
tion of ūm is some allocation mechanism (such as a bargaining model) that leads
to Pareto eﬃcient allocations. The nice thing about the collective approach is that
there is no need to be explicit about such a mechanism; identification does not
rely on specific assumptions about the precise way that couples share resources.
     Suppose first that preferences are such that there are never any corner solu-
tions. It is assumed that we observe aggregate household consumption C = C m +
C f and that we know the locus of labor supplies as a function of (wf , wm , y).Then
Chiappori (1988) proves the following:

Proposition 5.1. (Chiappori 1988) Assume that hm and hf are twice diﬀeren-
tiable functions of wages and non labor income. Generically, the observation of
hm and hf allows to recover individual preferences and individual consumptions
of the private good up to an additive constant.

    There are two critical issues to be resolved following this proposition: One is
what happens with corner solutions and with discrete labor supply. The other is
what happens with unobserved heterogeneity in preferences, i.e. when we do not
know the exact loci hm and hf .
    Blundell, Chiappori, Magnac and Meghir (2001) (BCMM henceforth) set up
a framework where the male decision is discrete (work or not) and the female


                                                 81
is continuous - however she can choose not to work. The framework underlying
the proposition above exploits the fact that the marginal rates of substitution
between consumption and labor supply for each agent will be equalized within
the household, under eﬃciency. This result cannot help when one of the labor
supplies is discrete. So BCMM exploit the following implication of eﬃciency:
    Definition and Lemma DI (double indiﬀerence): The participation fron-
tier L is such that member m is indiﬀerent between participating or not. Pareto
eﬃciency then implies that f is indiﬀerent as well.
      Technically, this amounts to assuming that in the program above, ūm is a
continuous function of both wages and non labor income. This will imply that
the behavior of the female will depend on the male market wage even when he is
not working. This continuity assumption restricts the set of possible behavior and
plays a key role for identification. We will not go through the technical details, all
of which are available in the paper referenced above. However, identification of
preferences and the consumption sharing rule (up to an additive constant) follows
from the assumption that all goods are private (no public goods and no household
production) as well as from the assumption above. Blundell, Chiappori, Magnac
and Meghir (2000) discuss further identification results for the case where there
is household production, While Chiappori, Blundell, and Meghir (2001) discuss
results in the presence of public goods. The essence of the results there is that full
identification of preferences over private and public goods and the sharing rule
follows when preferences over private consumption and labor supply are weakly
separable from the public good. In any case it is shown that some aspects of the
public good must be observable.
    The next important obstacle for identification here is unobserved heterogene-
ity. The results outlined above relate to the case where we know the locus of the
observable endogenous variables (labor supplies, the public good etc.) as functions
of wages and unearned income. However for empirical purposes we need to estab-
lish identification in the presence of unobserved heterogeneity in preferences. This
is generally complicated by the fact that any unobserved components aﬀecting in-
dividual preferences are likely to aﬀect the sharing rule. Since this can take any
form (more or less) we may well end up with error terms that are non-separable,
which of course may lead to lack of identification in general. Identification prob-
lems are compounded by the specific context of labor supply where wages are only

                                         82
observed for workers. BCMM have established identification in the special case
where the labor supplies and the sharing rule are linear in log wages and all have
additive unobservables. Even in this case the proof is not trivial since they do not
rely on distributional assumptions. One conclusion of this study is that identifica-
tion in more complex preference structures will have to be established on a case by
case basis. Nevertheless, the dividends of such an exercise are probably very high.
The BCMM paper decisively rejects the unitary model, while the collective model
is not rejected and gives interesting insights into the way that resources are split
up within the household. Further empirical work will include public goods and
household production. This will allow an extension of this analysis to households
with children and will explicitly deal with the issues of taxation and means tested
benefits, which the previous analysis of BCMM and others have ignored in the
context of the collective model of labor supply.

6. Intertemporal Models of labor Supply
     The models discussed up to now focused on the work decision within a period.
The lifecycle and dynamic issues have not been addressed. However, studying
dynamics is of critical importance because of the numerous intertemporal depen-
dencies in labor supply. Such dependencies are important both for their economic
implications (micro and macro) and, as a result, for policy.
    The most obvious intertemporal dependence comes through borrowing and
saving. In this framework the credit market is used to move labor income across
periods of the life-cycle so that labor supply can be concentrated in periods when
the relative benefit of supplying labor is highest or costs are lowest. This allows a
reduction in labor supply during college, during childbirth and during retirement
while consumption is maintained. An additional reason for changes in labor supply
over the life-cycle is the precautionary motive, which implies more labor supply
when one is young and less when one is older and some of the uncertainty has
been resolved (Low 1999)
    However, intertemporal dependence may be more direct. Labor supply prefer-
ences may depend on past actions (habit formation); current work may improve
future wages through learning by doing; current work may increase a future pen-
sion entitlement. Since a rational individual will take into account the impact of

                                         83
current actions on future budgets or preferences, the standard static labor sup-
ply model does not tell the complete story and may in fact be misleading. With
intertemporal dependencies the individual may find it rational to work in circum-
stances where the static model would exclude such a possibility. For example, it
may still be worth working when welfare benefits are reduced one for one with
earnings, since work oﬀers future returns in the form of higher wages.
    The recent intertemporal labor supply literature has developed along two lines.
This is reflected in these two intertemporal aspects on labor supply - through credit
markets and saving, and through intertemporal non-separabilities. In the former
case applications exploit the continuity of consumption and saving to derive Euler
equation conditions for intertemporal labor supply. In the later case the focus is
more on participation and intertemporal nonseprabilities, largely ignoring savings
decisions.
    This categorization of approaches is necessarily too strict. There are intertem-
poral substitution applications that allow nonseparability over time, but these are
few and typically do not account for fixed costs and nonparticipation. Also there
are examples of dynamic programing models that account for savings decisions
but to date these have been quite rare and based on very specific assumptions
concerning preferences and markets. This section aims to understand the imple-
mentation of each of these strands of the literature and to assess the possible
directions for their generalization and reconciliation.

6.1. Intertemporal Labor Supply with Saving
     As we have mentioned in section 2, the ‘static’ labor supply model can be
made consistent with an additively separable life cycle model under uncertainty
using the two-stage budgeting framework. However, this does not recover all of
the parameters necessary for intertemporal analysis and for that we need to look
directly at the first order conditions for intertemporal optimization. Before moving
to consider the problems of unobserved heterogeneity in the context of uncertainty
and with the possibility of corner solutions we consider a simpler model.
    Using the framework of Heckman and MaCurdy (1980) and MaCurdy (1981)
we discuss estimation of lifecycle labor supply models in a complete markets set-
ting, i.e. with no uninsurable uncertainty and no aggregate shocks. We start by


                                         84
expositing the case of no corner solutions, where all individuals work. We then al-
low for non-participation. Next we introduce uncertainty, first by considering the
no corners case and later allowing for corners as well. Finally we discuss the issue
of unobserved heterogeneity in models with uncertainty and corner solutions and
present an estimation framework based on the complete dynamic programming
characterisation of the problem..

6.1.1. The Life-Cycle Model
     Before discussing the identification and estimation issues in the dynamic mod-
els of labor supply and consumption we present the standard life-cycle model.
    The individual maximizes expected life-time utility subject to an intertemporal
budget constraint. We assume that future wage rates, prices and interest rates are
uncertain and that labor market risk is uninsurable. Define At to be the assets,
denominated in the same units as consumption. Letting it denote the nominal
interest rate and pt the price level, we define the real rate of return on assets to
              pt
be 1 + rt = pt+1 (1 + it ). Thus rt is to be taken as uncertain in period t. The real
wage rate is denoted by wt .
    Denote by Et the expectations operator with respect to the distribution of
uncertain future variables conditional on information in period t. These include
interest rates, wages, the price level, possible preference shocks and other variables
which aﬀect choices through their impact on expectations or directly. Denote
the collection of such state variables by St . The state variables contain all the
information that is needed to summarize the individual’s position at any point in
time. Thus conditional on the state variables the past is irrelevant. We can also
think of the taste shifter variables z1t and z2t as being uncertain in future periods,
in which case expectations are taken with respect to their distribution as well.
We abstract from issues relating to uncertain date of death and the presence or
absence of perfect annuity markets. Hence we take the personal discount factor β
to be constant over time as a simplifying assumption.
    We can write the intertemporal optimization problem as

              (                                                                          )
                    X
                    T                             X
                                                  T
                                                               1
   V0 = max E0     β t ψ [U (ct , ht |z1t ), z2t ] |     Qt             (ct − wt ht ) ≥ 0
                                                          s=0 (1 + rs )
        ht ,ct
               t=0                                   t=0


                                             85
where the second part in the expression is the intertemporal budget constraint.
The way it is written implies that the individual can borrow and lend freely at a
market rate of interest rt .
    The additive structure of this problem is viewed from the perspective of period
0. However, since there exists uninsurable uncertainty the individual will replan
in each period as news arrives. In this context and since the problem is recursive
(trivially since it is additive over time) it is more convenient to use the Bellman
equation formulation

       Vt (At |St ) = maxht ,ct {ψ [U(ct , ht |z1t ), z2t ] + Et βVt+1 (At+1 |St+1 )}   (6.1)

where Vt (At |St ) is the optimum value function given information up to period t
and St are relevant state variables which help predict future uncertain income,
interest rates and characteristics.
    In the absence of credit market restrictions the intertemporal budget constraint
implies that
                            At+1 = (1 + rt )(At + wt ht − ct )
with the terminal value of assets fixed at some value (say zero).25 This implies
that the revenues and expenditures need to balance over the entire lifecycle but
not necessarily at any point in time.
   The first order conditions for labor supply and consumption can be written as

                                    −u0h ≥ λt wt      ht ≥ 0

                                       u0c ≥ λt     ct ≥ 0

Usually an Inada condition is imposed which ensures that optimal consumption
will always be strictly positive. However, optimal labor supply may be zero which
leads to a corner solution.
    For individuals with an interior solution the optimal allocation between con-
sumption and hours of work within a period, equates the marginal rate of substi-
tution to the real wage rate. The important point is that even in this dynamic
  25
    We abstract from issues relating to portfolio choices and rt is the return to the market
portfolio.



                                               86
context the marginal rate if substitution is the ratio of within period marginal
utilities. Thus consumption and labor supply satisfy
                                       u0h
                                           = wt                                  (6.2)
                                       u0c

where u0x is the marginal utility of x. The important point to note is that the within
period marginal rate of substitution between consumption and hours of work does
not depend directly on any expectations about the future, nor does it depend
on interest rates. Crucially, it does not depend on the monotonic transformation
of the utility function ψ. This is important because it implies that in general we
can not estimate the parameters governing intertemporal allocations just by using
within period ones. Condition 6.2 is the basis of the life-cycle consistent ‘static’
labor supply model of the earlier sections.
    The condition linking decisions over time can be derived using the envelope
condition for assets on (6.1). This gives
                                      ©               ª
                              Vt0 = Et β(1 + rt )Vt+1
                                                   0



Since the first order conditions also imply that
                                          ©               ª
                             ψ0t Uct0 = Et β(1 + rt )Vt+1
                                                       0



and
                                       ©                  ª
                          ψ0t Uht
                               0                       0
                                  = −Et β(1 + rt )wt Vt+1
we can characterize the intertemporal rates of substitution for consumption and
hours of work for interior solutions as
                                       ©                      ª
                          ψ0t Uct0 = Et β(1 + rt )ψ0t+1 Uct+1
                                                         0
                                                                                 (6.3)
                                     ½                          ¾
                       0 0                      wt 0        0
                      ψt Uht = Et β(1 + rt )         ψ U                         (6.4)
                                              wt+1 t+1 ht+1
   The object of the exercise is to estimate the parameters of ψ [U(ct , ht |z1 ), z2 ]
from observations of consumption and labor supply over time. It turns out that
we need to use two of the three conditions (6.2), (6.3) and (6.4). At this point note
that the variables in z1 aﬀect both the within period marginal rate of substitution

                                          87
and intertemporal allocations. The z2 variables only aﬀect directly intertemporal
allocations because they cancel out of the monotonic transformation. Of course
they do aﬀect within period allocations indirectly and in a full solution the con-
sumption and labor supply functions will depend on all variables aﬀecting tastes,
expectations and the budget.

6.1.2. A simplification: A model with full participation
    Before complicating the matters with non-participation we consider the esti-
mation problem in a simpler model presented by MaCurdy (1981) where every-
body works. The utility specification he used does not allow for corner solutions
and takes the form

                 Ut = Bt Ctγ − At H α           0 < γ < 1, α > 1              (6.5)

where Ht corresponds to hours of work (rather than leisure) and Ct to consump-
tion. The range of parameters ensures positive marginal utility of consumption,
negative marginal utility of hours of work and concavity in both arguments. Ap-
plying exactly the same analysis as above the implied intertemporal Frisch labor
supply becomes
                                             1          ρ−r
                   log Ht = A∗t + log λ +       ln wt +     t                 (6.6)
                                            α−1         α−1
where the use of log hours of work presumes that all individuals work and hence
H > 0.In (6.6) λ is the shadow value of the lifetime budget constraint and t
is the age of the individual. Finally A∗t reflects preferences and is defined by
          1
A∗t = − α−1  log At .
    This equation is the Frisch labor supply equation. The important insight
is that under certainty (complete markets - no aggregate shocks) all future ex-
pectations are summarized by the fixed eﬀect λ. So this equation has a simple
message: Hours of work are higher at the points of the lifecycle when wages are
        1
high ( α−1  > 0). Moreover if the personal discount rate is lower than the inter-
est rate, hours of work decline over the lifecycle. If wages are low enough and
assets high enough the woman no longer works. Finally, hours of work will vary
over the life-cycle with variations of A∗t which could be a function of demographic
composition or other taste shifter variables.

                                        88
    Specifying A∗t = γ 0 xt + η 1 + ut we obtain an econometric equation of the form
                                                          ·                 ¸
                       0       1               ρ−r           1
           log Ht = γ xt +          ln wt +          t+          log λ + η 1 + ut
                              α−1              α−1          α−1
       £ 1               ¤
where α−1     log λ + η 1 is a fixed unobservable individual eﬀect consisting of the
marginal utility of wealth and of a permanent unobserved preference component.
ut is an idiosyncratic shock to individual preference. For simplicity we take this
as serially uncorrelated.
    As it is, this equation presents a problem for estimation to the extent that
the fixed unobservable eﬀect (or the idiosyncratic shock ut ) is correlated with
the hourly wage rate wt . The simplest case here is to assume that wages satisfy
E(ut−1 | log wt , log wt−1 ) = E(ut | log wt , log wt−1 ) = 0 in which case we can trans-
form the model by first diﬀerencing to eliminate the fixed eﬀect and obtain the
hours growth equation
                              ρ−r               1
                 ∆ log Ht =       + γ 0 ∆x1t +     ∆ ln wt + ∆ut                   (6.7)
                              α−1              α−1
where ∆ represents the first diﬀerence operator (i.e. ∆zt = zt − zt−1 ). In the
above x1t is the subvector of variables included in xt which vary over time. This
model is estimable using panel data with repeated observations for each individual.
Whenever we talk about a consistent estimator we imply a situation where the
number of time periods, T is fixed and the number of cross section observations,
N tends to infinity.
    Consider the case where we have three observations over time for each in-
dividual. With the exogeneity assumption on wages made above and assuming
that ut is independently and identically distributed a Generalised Least Squares
procedure will provide fully eﬃcient estimates. The weight matrix has as a main
diagonal 2s, and the two adjacent diagonals contain -1, with all other elements be-
ing zero. Alternatively, with arbitrarily heteroskedastic (but serially uncorrelated)
preference shocks the first diﬀerence equation can be estimated using OLS and
then computing the Eicker-White robust standard errors. Of course this model is
estimable with just two observations for each individual, in which case Ordinary
Least Squares is consistent and fully eﬃcient.
    However, this empirical strategy is sensitive to measurement error. Suppose
that log wages are measured with additive and serially uncorrelated measurement

                                           89
error. In this case (6.7) should be estimated using instrumental variables. Under
the assumptions made valid instruments would be hours and wages lagged at least
two periods. However, these instruments will only satisfy the rank condition, i.e.
will be able to explain future growth in wages (∆ log wt ) under certain parameter
configurations; hence this rank condition needs to be tested (see Steiger and Stock
(1998), for example).

6.1.3. The Heckman and MaCurdy Study
     The MaCurdy (1981) paper set out the first clear analysis of issues to do with
estimating dynamic relationships. However the approach did not deal with corner
solutions, which is particularly relevant for women. The first attempt to do so in
the context of a life-cycle model of labor supply and consumption is the paper by
Heckman and MaCurdy (1980).
    In this model women are endowed with a within period utility function for
leisure L and consumption C, of the explicitly additive form:
                          Lαt − 1      Ctγ − 1
                  Ut = At         + Bt                       α, γ < 1         (6.8)
                             α            γ
Consumers are assumed to maximise life-cycle utility
                                          X
                                          T
                                   Vt =         β t Ut
                                          t=1

subject to the lifetime budget constraint
                           X
                           T
                                   1
                                       t
                                         [wt ht − ct ] ≥ 0
                            t=1
                                (1 + r)

where ht = L − Lt , L being maximal time available for work and where wt is the
hourly wage rate. Note that now utility depends on leisure and is well defined at
the point where hours are zero since there one obtains maximum leisure.
    Optimization is assumed to take place under perfect foresight. Solving for the
first order conditions we obtain the following equation for leisure
                               ρ−r
                     1
            = A∗t + α−1 lnwt + a−1 t + λ∗           when the woman works
     lnLt                                                                     (6.9)
            = lnL       otherwise

                                          90
where
                              1                   1
                      λ∗ =       lnλ and A∗t = −     lnAt                   (6.10)
                             α−1                 α−1
and where we have approximated ln 1+ρ 1+r
                                           ≈ ρ − r. As before in (6.10) λ is the
shadow value of the lifetime budget constraint and t is the age of the individual
which again is a fixed eﬀect because of the complete markets assumption.

Estimation with non-participation To estimate the model, Heckman and
MaCurdy specify Bt = γ 0 xt + η 1 + u1t where u1t is normally distributed and where
η 1 is a fixed eﬀect reflecting permanent unobserved diﬀerences in tastes across
individuals.
    Given λ∗ , η 1 and wages wt this gives rise to a Tobit model, with censoring
whenever the interior solution requires more hours of leisure than are available
(Lt > L̄). There are two main diﬃculties with this however. First, hourly wage
rates are not observed for non-workers. Second, λ∗ and η 1 are unobserved and
cannot be diﬀerenced out in a conventional manner since the Tobit model is es-
sentially nonlinear. Finally, a problem addressed only indirectly before (through
the treatment of measurement error) is that of the endogeneity of wages. To solve
these problems and to take into account that wages may be endogenous we may
specify a wage equation of the form

                              lnwt = zt0 β 2 + η 2 + u2t

with η 2 being an unobserved fixed eﬀect reflecting permanent productivity char-
acteristics of the individual and u2t being normally distributed. Endogeneity may
arise if either the fixed eﬀects in the wage and labor supply equations are corre-
lated or if the idiosyncratic components are correlated (or both). In the former
case (correlated fixed eﬀects) treating the problem of fixed eﬀects will also solve
the endogeneity problem. In this sense we can think of wages as being endogenous
in the case where we dealt with no corner solutions.
    To proceed we can use the approach described earlier in the context of the
static labor supply models. The wage equation is substituted into the structural
labor supply equation and the conditions for an interior solution or otherwise is
given in terms of the reduced form, i.e. not conditional on the wage rate. Hence


                                         91
we get
                                   1            ρ−r
                       = γ 0 xt + α−1 zt0 β 2 + a−1 t + f + υt     when

                                                  1            ρ−r
                lnLt       υ t < lnL − (γ 0 xt + α−1 zt0 β 2 + a−1 t + f)

                       = lnL        otherwise
            ∗
where f = λ + η 1 + η 2 , υ = u1t + u2t . This gives rise to a standard Tobit model
for the reduced form parameters with two important diﬃculties:
    First, to identify the parameters of the structural labor supply model we need
to also estimate the parameters of the wage equation; indeed some variables that
explain wages need to be excluded from the labor supply equation and this is
discussed below.
    Second to estimate the model allowing for the unobserved fixed eﬀects which
are combined in f . These may be estimated as individual specific parameters.
However, this procedure is consistent only if T tends to infinity and will work
well only when T is moderately large and the regressors are strictly exogenous. In
linear models without censoring, this procedure is equivalent to the within groups
estimator. This does not require large T so long as the regressors are strictly ex-
ogenous. Obviously the strict exogeneity assumption is likely to be helpful in this
context as well when T is not very large. Heckman and MaCurdy provide Monte
Carlo evidence showing that in their context the bias involved when using this ap-
proach is likely to be minimal. However, this is not a general result and it depends
very much on the model, the data and the number of time periods available. For
example with lagged endogenous variables the biases could be substantial. Such
lagged endogenous variables could appear in time non-separable models and in
models with incomplete insurance markets as we will see subsequently. Thus the
complete markets assumption turns out to be a particularly powerful assumption
as far as identification is concerned.

    Semiparametric estimation           To estimate the model it may be possible
to use a semiparametric approach (see Powell (1986) Honoré and Kyriazidou(1999)
and references therein). Here we describe the approach taken by Heckman and
MaCurdy, based on Maximum Likelihood. The first step is to specify the joint
distribution of hours of work and wages, conditional on the observables and the

                                           92
fixed unobserved eﬀects. This is denoted by

                    ghw (h, w|z, f, η) = gh (h|x, f, w)gw (w|z, η 1 )           (6.11)

where z are the observed variables in the wage equation, which include all those
in the labor supply equation (x) and more for identification purposes. Thus the
model likelihood is bivariate with the wage equation estimated at the same time.
    The likelihood has the general form
                       Y
              L =           gh (h|x, f, w)gw (w|z, η 1 ).
                     workers
                         Y         Z     Z
                                             gh (h|x, f, w)gw (w|z, η 1 )dwdh   (6.12)
                     non−workers   h<0   w

The first part of the likelihood relates to workers, where both wages and hours are
jointly observed. The second part of the likelihood refers to non-workers where
all we know is that desired hours are negative. Hence we integrate over h < 0 and
over the entire support of the wage distribution, since for any wage rate there is
a configuration of unobservables that would make the person a non-participant
- being a non-worker conveys no information about wages. This likelihood can
recover the parameters in the reduced form labor supply equation and in the wage
equation.
    As mentioned above, to identify the structural parameters of labor supply and
the wage equation it is necessary to impose exclusion restrictions or some other
form of parametric restrictions. Moreover, note that any variables that are fixed
cannot be used for identification since they will be absorbed by the fixed eﬀect.
Heckman and MaCurdy exclude education/age interactions and aggregate unem-
ployment from the labor supply equations and husband’s labor market behavior
from the wage equation. The former restriction eﬀectively implies that diﬀerences
in tastes across education groups vis a vis labor supply do not change with age.
Consequently any change in observed behavior across education groups at diﬀer-
ent ages is attributed to education specific returns to experience (or age more
accurately) and hence to wages. The business cycle indicator (the unemployment
rate) serves to identify wages for the non-workers through the aggregate price of
human capital. Note however, that given the functional form assumptions the
model is then overidentified.

                                             93
    The Heckman and MaCurdy model presented above oﬀers a way of handling
unobserved heterogeneity and corner solutions and even allows for persistent het-
erogeneity and endogenous wages. These properties have been delivered at a cost.
Preferences between consumption and female hours are explicitly additively sepa-
rable and no uncertainty is allowed for. The explicit additivity implies that, given
consumption data, all parameters could be identified in principle using just within
period allocations. This is worrying since it implies that intertemporal allocations
are tied to the way that resources are allocated within period - an implication
that does not come from economic theory. However, this assumption is testable
since we can compare the estimates obtained from data on within period and data
on intertemporal allocations. Finally, the perfect foresight assumption which is
equivalent to complete markets with no aggregate shocks is also strong given the
available evidence.
    However, easy as it may be to criticize such an approach, it turns out that it
is very hard to generalize. In what follows we discuss how the existing literature
has attempted to build on this and what are the successes and shortcomings of
these attempts. We start by describing an estimation strategy for a model of con-
sumption and labor supply with corner solutions but with no explicit treatment of
unobserved heterogeneity. As we argue below, an explicit treatment of unobserved
heterogeneity places extensive requirements on data and an approach based on the
complete solution of the life-cycle model, rather than on Euler equations.

6.1.4. Estimating the intertemporal substitution elasticity and other
       preference parameters under uncertainty
     We now consider explicitly estimation in the presence of uninsurable uncer-
tainty. Estimation will be based on two marginal conditions: One defines the
within period allocations and the other the intertemporal allocation. Combining
these two conditions in a suitable way can allow us to identify all parameters while
allowing for corner solutions.
    We start by characterizing within period preferences using the indirect utility
function and appealing to two-stage budgeting. The within period indirect utility
function is defined by

               ψ [vt (w, µ)|zt ] = max {ψ [Ut (h, c)|zt ] |ct = wt h + µt }   (6.13)
                                   h,c


                                           94
where the variables zt are shown explicitly to emphasize that intertemporal allo-
cations will typically depend on observable taste shifter variables. As explained
earlier in the chapter, the variable µt reflects net saving or dissaving. Since ct
is actual realized consumption and wt h are actual earnings this amount (µt ) will
only equal unearned income (e.g. from transfers or investments) if there is neither
borrowing nor saving by the individual. Based on Roy’s identity it is possible to
derive the implied within period (or Marshallian) labor supply function, i.e.

                                               ∂v/∂w
                                 h(w, µ) =                                    (6.14)
                                               ∂v/∂µ

This labor supply function is conditional on µt which reflects intertemporal deci-
sions.
    The labor supply function originating from (6.14) can be estimated using the
methods described in earlier sections. The estimation of the within period labor
supply function allows us to estimate all the parameters characterizing within
period preferences, i.e. the function vt (w, µ) in (6.13) but not the parameters of
the function ψ. The latter aﬀects intertemporal allocations only.
    Thus we now need data on intertemporal allocations to estimate the parame-
ters implicit in the monotonic transformation ψ and which characterizes savings
behavior and intertemporal substitution in labor supply, given preferences driving
within period allocations.
    Consider again the Euler equation in an environment with uninsurable risk.
This equates the marginal utility of consumption today with the expected mar-
ginal utility of consumption tomorrow
                                     ©                      ª
                         ψ0t vµt
                              0
                                 = Et β(1 + rt )ψ0t+1 vµt+1
                                                       0
                                                              .

The term vµt 0    ∂v
               = ∂µ  is the marginal utility of money, and ψ0t = ∂ψ[vt∂v
                                                                       (w,µ)|zt ]
                                                                         t
                                                                                  re-
flects the monotonic transformation of the utility function which determines the
                                                              0
intertemporal substitution. The marginal utility of money vµt   can be estimated
at a first step based on observations relating to within period allocations. We
                                    0
denote the estimated quantity by v̂µt . The next step is to parameterize the func-
tion ψ which can then be estimated using the Euler condition. To write the Euler
condition based on the indirect utility function we can use the envelope theorem


                                          95
to see that Uct0 = vµt
                    0
                       where Uct0 is the marginal utility of consumption which ap-
pears in the Euler condition 6.3.Based on this we can estimate the parameters
characterizing ψ0t using the following equation

                              ψ0t vbµt
                                    0
                                       = β(1 + rt )ψ0t+1 vbµt+1
                                                           0
                                                                + uit+1                   (6.15)

Under the hypothesis of rational expectations any variable dated t or earlier will
be orthogonal to uit+1 . This observation can serve as a basis for estimation using
GMM (see Hansen, 1982 and Hansen and Singleton, 1983). With uninsurable
uncertainty and in the presence of aggregate shocks it is imperative to estimate
6.15 using long enough time series. The innovation to the marginal utility of wealth
uit+1 reflects uninsurable idiosyncratic risk and aggregate uncertainty. As Altug
and Miller (1990 and 19??) have shown, the moment conditions do not hold in the
cross section. In fact, the conditional expectation E(uit+1 |t, zit ) = m(zit ) where zit
represents the vector of instruments. Consequently with idiosyncratic uninsurable
risk and aggregate uncertainty the model is not identifiable using methods that
rely on fixed T ; we require methods that rely on large T asymptotics and in
practice we need long enough time series of data that allows the aggregate shocks
to average out. The suitable time series dimension depends on the variance of
such shocks, with longer series required the higher the variance. However, we do
not require to observe the same individual for a large number of time periods; just
that the data covers long T.26 Moreover, aggregate shocks cannot be accounted
for using time dummies as emphasized by Altug and Miller (1990) unless there is
no idiosyncratic uncertainty.

Linearising the Euler equation                        A simpler way to go about estimation
is to loglinearise 6.15.
                              0
                      −∆ ln v̂iµt+1 + log(1 + rt ) = dit + ∆ ln ψ0t+1 + εit              (6.16)
                   £ ©                       ª¤           £                      ¤
where dit = log Et β(1 + rt )ψ0t+1 vbµt+10
                                                 − Et log β(1 + rt )ψ0t+1 vbµt+1
                                                                            0
                                                                                   .In the sim-
plest case where the discounted marginal utility of consumption muit+1 = β(1 +
rt )ψ0t+1 b0
          vµt+1 is a log-normal random variable dit will be proportional to its variance
conditional on information in period t, i.e. dit = V art {muit+1 }2 . It is precisely
  26
       Meghir and Weber (1996) discuss this point in relation to estimating Euler equations.

                                                 96
this point that gives rise to the identification issue since the conditional variance
will depend on variables relevant for predicting future income or wage realiza-
tions. However, if we are willing to restrict what the conditional variance depends
on (and hence the stochastic process governing wages), this linearization oﬀers a
great simplification and often makes it easier to deal with measurement error in
the underlying variables forming the marginal utility. Under non-normality dit
will also depend on higher order moments of the marginal utility of consumption
muit+1 .
    Log linearization has been widely used in the empirical analysis of consump-
tion. However, identification in this case, requires more restrictions than those
implied by the theory. Its usage has been controversial (see Carroll, Paxson) pre-
cisely because the basic exclusion restrictions used for identification in 6.15 may
no longer be valid in 6.16. Implicitly linearization imposes restrictions on expec-
tation formation and on the underlying process of uncertainty. Attanasio and
Low (2002) examine these issues using Monte Carlo analysis in a wide variety of
settings and conclude that in practice linearization is unlikely to bias the results
in a serious way.

Accounting for corner solutions with no fixed costs                   When hours of
work are at a corner solution the Euler condition 6.15does not hold when evaluated
at market prices. However, we can use the results of Heckman (1974) and Neary
and Roberts (1980) to keep the Euler equation representation evaluated at shadow
prices. Here we assume that there are no fixed costs of work and no search frictions
and consequently that participation decision is fully characterized by the standard
reservation wage condition (Heckman, 1974). In particular non-workers have a
negative desired labor supply at the market wage corresponding to their skills,
while workers have a positive desired labor supply, which is observed. It is easy to
show that the intertemporal first order conditions still hold, so long as we evaluate
the indirect utility function at the shadow (reservation) wage witR defined by

                                   h(witR , µit ) = 0                         (6.17)

Estimating the ‘static’ within period labor supply function as described in earlier
sections allows us to obtain a labor supply model that can then be solved for the
reservation wage as in 6.17. In the next step the consumption Euler equation

                                          97
can be estimated using observed market wages for workers and shadow wages for
non-workers.

An Example                  Consider the labor supply model
                                                            µ
                                hit = α(zit ) + β ln wit + γ it                                    (6.18)
                                                            wit
where zit are preference shifters such as household characteristics. This corre-
sponds to a particular form of the indirect utility function presented in an earlier
section. The term µ is defined by µ = c − wh, where w is the after tax wage and
c is total household (non-durable) consumption, and hence is endogenous. The
utility index can be computed by using the formula in 2.7. This gives the value
                          0
of ν̂ t ,from which b   vµt    can be calculated. For workers the relevant wage will be the
observed wage. For non-workers the relevant wage at which to evaluate within
period utility is the reservation wage which is given by the positive solution for w
in equation 6.18 when h = 0, for given µ. This has to be solved for numerically in
this example. Using the reservation wage, is equivalent to computing the direct
utility function when hours are zero. This calculation is only valid if there are no
fixed costs of work.
     In the next step we can specify the part of the utility function that is not re-
vealed by within period choices. This is the monotonic transformation. One simple
possibility would be to use a linear transformation; for example ψ [vt (wit , µit )|zit ] =
a(zit )v(cit , hit ), which would be interpretable as saying that characteristics zit
aﬀect the discount rate. A more general alternative would be to allow char-
acteristics to also aﬀect the intertemporal substitution elasticity; for example
                             a(zit )
ψ [vt (wit , µ)|zit ] = 1+ρ(z     it )
                                       vit (wit , µit )1+ρ(zit ) , for some negative valued function ρ(zit ).
The fact that all or some of the characteristics z aﬀect within period allocations
does not imply that they will not also aﬀect risk aversion or the way the future is
discounted.
     To obtain an example specification let a(zit ) = 1 and ρ(zit )= ρ0 + ρ1 f sit where
fsit is family size for household i in period t. Using the utility function 2.7 term
  0                  wβ̂
v̂µt = (1 + γ̂)2 β̂+1       which can be evaluated at the estimated parameters. In this
case the Euler equation for consumption over time will take the form
                                                       n                                  o
                            0    ρ0 +ρ1 f sit                           0    ρ0 +ρ1 f sit
                         v̂iµt v̂it            = Et β(1 + rt )v̂iµt+1 v̂it+1                .       (6.19)

                                                    98
This can be estimated using non-linear GMM treating the estimated marginal
                   0
utility of money v̂iµt and the within period utility index v̂t as known (see Hansen
(1982) and Hansen and Singleton (1983)). The fact that the expression depends
on estimated parameters does not aﬀect consistency because as the sample size
goes to infinity the parameters estimated on the first stage converge to the true
values. Inference however requires us to correct the standard errors for the fact
that we are relying on pre-estimated parameters.
    The linearized version of the Euler equation here takes the form
          0
 −∆ log v̂iµt+1 − log(1 + rt ) = dit + log β + ρo ∆ log v̂it+1 + ρ01 ∆ log f sit v̂it+1 + εit

which, given the assumptions implied by the log-linearisation can be estimated by
linear GMM.

Testing for liquidity Constraints              One key issue for the interpretation
of intertemporal behaviour is the extent to which individuals are liquidity con-
strained which is defined as being able to borrow and save freely at a constant
interest rate. It has been observed from very early on that consumption seems
to track income, which is a fact often cited as evidence for liquidity constraints.
However, this phenomenon can be explained within the model we have presented.
    First, Heckman (1974) has argued that such income tracking can be induced
by non-separabilty of consumption and labor supply: If consumption and leisure
are strong enough substitutes, higher amounts of consumption will be related to
higher levels of labor supply and hence higher income.
    Second, family size and demographics, which aﬀect consumption and labor
supply allocations, evolve very much alongside income over the life-cycle, with
family size growing when income grows most and declining when income declines
(probably endogenously see Blundell, Browning and Meghir, 1994). By allowing
for this in our model we have eﬀectively accounted for another reason for tracking.
    Finally, the evolution of the conditional variance of the marginal utility dit also
leads to consumption growth. This variance is likely to decline over the lifecycle as
uncertainty is revealed. This is particularly true if shocks to wages are permanent
or highly persistent. Thus a high dit when young and a lower dit when old will
imply rapid consumption growth early on declining later, much like the evolution
of income over the lifecycle (Carroll (), Attanasio, Banks, Meghir and Weber ())

                                             99
    The empirical challenge is to find sources of predictable income growth not
already included in the model to account for preferences (e.g. non-separability)
and to test the hypothesis that they do not aﬀect consumption growth. Browning
and Collado (200?) use the powerful idea of predictable changes in income due
to pre-announced and regular seasonal bonuses in Spain and establish that con-
sumption growth is not sensitive to these totally predictable changes in income.
However we are not always as fortunate as that and we need to use other perhaps
less compelling sources of predictable growth. One possibility is to include labor
income growth. This is a useful source of variation for two reasons: Conditional
on the wage rate labor income would have variability because hours of work may
change in a predictable way for other exogenous reasons. Second hours should
not enter the Euler equation once we also include wages. Nevertheless it is still
an issue of what the exogenous source of hours would be that has not to do with
preferences or changes in wages. Another possibility is to use predictable changes
in other income. The problem is that income from investments etc. are likely to
be positive only for the wealthier individuals who are unlikely to want to borrow
anyway.
    Tests of liquidity constraints find no evidence of their importance once non-
separabilities and demographics are allowed for. This should not be interpreted
as saying that anyone can borrow any amount they wish at a fixed rate; after all
the lack of complete markets is now generally accepted with moral hazard as its
most probable source. However it may well mean that the lack of perfect credit
markets is not important because individuals do not wish to borrow much against
future income growth anyway when they would most need it (i.e. when young)
because of uncertainty.

6.2. Further Issues in the Specification and Estimation of Dynamic
     Models of labor Supply and Consumption
     The model we have presented up to now in the context of intertemporal
optimisation lacks a number of potentially important features. These include un-
observed preference heterogeneity, fixed costs of work and non-separability over
time. We now discuss these issues in turn and we complete our chapter by pre-
senting the estimation of a model containing potentially all these features.


                                       100
6.2.1. Unobserved heterogeneity
     Allowing for unobserved preference heterogeneity seems like a natural step
in constructing realistic models. Thus for example, both MaCurdy (1981) and
Heckman and MaCurdy (1980) recognise this and include fixed eﬀects in their
models. They recognise that heterogeneity should be persistent and could well
be correlated with wages. The question is how to account for unobserved hetero-
geneity in a model without complete markets The key diﬃculty stems from the
fact that it is not possible to specify a model where both the Euler equation and
the within period condition have additive errors without restricting the structure
of intertemporal preferences. Inevitably a model with unrestricted intertempo-
ral preferences and unobserved heterogeneity will be non-separable in unobserved
heterogeneity. Standard orthogonality conditions do not suﬃce for identification
in this case. In the HM study the errors are eﬀectively non-separable because
of the corner solutions. However, the complete markets assumptions meant that
a fixed eﬀects Tobit estimator worked well even with moderate T. Dropping the
complete markets assumption would invalidate their estimation procedure.
    There is a developing literature on the identification and estimation of mod-
els with nonseparable errors and endogenous regressors (e.g. Florens, Heckman,
Meghir and Vytlacil, 2003, Imbens and Newey 2003, Blundell and Powell, 2003)
which provide alternative identifying conditions in this case. Even if one is to
impose these stronger assumptions there remains the problem of finding suitable
instruments, which are an ingredient of all such methods. The problem is particu-
larly acute if unobserved heterogeneity is serially correlated , since the instruments
are likely to be predetermined decisions. These diﬃculties will lead us to an esti-
mation method based on a complete solution of the dynamic programming model.

6.2.2. Estimating the intertemporal substitution model with fixed costs
       of work
     Fixed costs of work or other non-convexities in the budget constraint pose a
very serious challenge to the empirical analysis, even within a static framework. In
this context the labor supply function is discontinuous at low hourly wage rates.
Moreover as Cogan (1981) pointed out the standard reservation wage which sets
labor supply to zero does not generate a participation condition. Generally the

                                         101
participation and hours margins are explained by diﬀerent models, which could
be the result of the existence of fixed costs of work or of search frictions. The
separation between the intensive and extensive margins (hours of work) requires
extra identifying assumptions.
    Within an intertemporal context fixed costs pose additional diﬃculties for
modelling the participation decision: This involves a comparison between the
lifecycle utility of work and non-work, which requires solving the life-cycle model
conditional on the person working and conditional on the person not working.
Such a solution allows one to evaluate the current and future welfare consequences
of the two decisions.
    In the presence of fixed costs we can follow two empirical strategies. The first
is a partial one and seeks to estimate the subset of parameters that are identifiable
if one keeps labor supply behaviour fixed. As such it cannot be informative for
policy questions whose answer relies on the quantification of the complete labor
supply and consumption response. However, it oﬀers a way of testing some aspects
of the life-cycle model in a relatively general setting and may be a first step in a
stepwise approach for identifying the complete set of preferences.
    The second approach specifies a complete structural model of labor supply and
participation and uses methods from dynamic discrete choice to estimate labor
supply responses. Before moving to a discussion of the full solution approach we
briefly outline the conditional approach.

6.2.3. The Conditional Euler Equation for Consumption
    Consider the definition of the indirect utility function within period, based
on a vector of goods qt and prices pt conditional on labor supply behavior ht

            υ t = ψ [v(ct |pt , ht ), ht ] = maxq {ψ [u (qt |ht ) , ht ] |p0t qt = ct }   (6.20)

We can then base the analysis of the intertemporal allocations on the utility index
υ t = ψ [v(ct |pt , ht ), ht ]. As in the case of the joint labor supply and consumption
model presented earlier, all parameters implicit in v(ct |pt , ht ) can be estimated us-
ing a conditional (on ht ) within period demand system (see Browning and Meghir,
1991). This may not depend on ht depending on whether the goods q are (weakly)
separable from ht . However, the intertemporal allocations can still depend on ht

                                               102
without this having any implications for the structure of the within period mar-
ginal rate of substitution functions between goods. This point has been noted
now in several papers, all of which have demonstrated its empirical importance.27
    The estimation approach is broadly similar to the one described above so
we do not go over it again in detail. Once the within period demand system
characterizing the conditional choice of qt has been estimated, we can construct
the utility index v(ct |pt , ht ). The Euler equation for ct can then be used to estimate
the parameters of the function ψ. The Euler equation as well as the demand system
will be a function of h. The crucial point to recognize in doing this is that labor
supply is endogenous both for within period and for intertemporal allocations.
Thus estimation requires suitable instruments. One possibility is to use lags in
labor supply for this purpose. In the absence of unobserved heterogeneity the
approach is valid. However, if persistent preference shocks have been ignored this
approach could lead to inconsistent parameter estimates.
    The conditional Euler equation for consumption provides a very powerful ve-
hicle for testing the lifecycle model in relation to consumption behavior, without
modelling explicitly the labor market. However, from a policy perspective, the
conditional Euler equation for consumption is of limited interest since it is far from
providing the full set of parameters to answer even a simple partial equilibrium
question. Since in many cases there is reason to believe that budget sets are either
non-convex or discontinuous, a complete analysis of intertemporal labor supply
and consumption needs to address directly estimation of labor supply choices in
such complex environments.

6.2.4. Intertemporal non-separability
     A final issue is whether preferences should be taken as separable over time.
It is well documented that labor supply behaviour is very persistent which may
be interpreted as being due to non-separability, although the source of persistence
could well be unobserved heterogeneity. Another source of non-separability can
be the structure of the intertemporal budget constraint since current behaviour
  27
    Attanasio and Weber (1993, 1996) and Blundell, Browning and Meghir (1994), Meghir and
Weber (1996) all strongly reject the hypothesis that intertemporal allocations do not depend
directly on observed labour supply.



                                            103
may aﬀect eligibility for welfare programs. Finally, if wages depend on past work
experience current work aﬀects future earning prospects, which also leads to in-
tertemporal non-separability. This issue among others is considered in the next
section.

6.3. Dynamic Discrete Choice Models and Intertemporal Non-Separability
     To address many of the issues presented above in a coherent and unified way
we need to consider a complete model of lifecycle labor supply and consumption.
This can be very complex and demanding on data. Thus in our presentation we
start with a simplified model along these lines which ignores the savings decision
but oﬀers a way forward on the issue of fixed costs and non-separability. We
subsequently build on this to present a more complete model that includes savings.
    One of the first attempts to model the dynamics of participation decisions
when choices are discrete is given by Eckstein and Wolpin (1989). The model
they present is a learning by doing model and has a number of interesting features
on which subsequent research builds. Their model concerns the labor supply of
women. Husband’s income is taken as exogenous.
    The heart of the model is the within period utility function which is non-
separable in consumption ct and participation pt . The utility function takes the
form
         Ut = ct + a1 pt + a2 ct pt + a3 pt Kt−1 + ΣJj=1 a4j Ntj pt + a5 pt S   (6.21)
where Kt−1 is the number of periods worked in the past; depending on the sign of
a3 this may turn out to be habit persistence or on the contrary stock accumulation
discouraging further work. The law of motion of Kt is simply Kt = Kt−1 +
pt . Finally, S represents years of schooling and Ntj represents the number of
children in age group j. This utility function in itself gives rise to intertemporal
dependencies since current participation aﬀects future preferences and a forward
looking individual will take this into account when making participation decisions.
Notice, that male participation does not appear in the utility function. It is
treated as exogenous and as additively separable in the utility function and hence
it aﬀects decisions by the wife only through its impact on available resources for
consumption. The evolution of the husband’s income yth is thus taken to be an
exogenous stochastic process.

                                            104
   Further dynamics are induced by the budget constraint. This takes the form

                        ytw pt + yth = ct + ΣJj=1 κj Ntj pt + bpt            (6.22)

where κj are costs relating to children in the jth age group and b is a fixed cost
of work. This budget constraint depends on past work decisions since the female
wage is determined by the following stochastic relationship

                    lnytw = β 1 + β 2 Kt−1 + β 3 Kt−1
                                                  2
                                                      + β 4 S + εt           (6.23)

where εt is an independently and identically distributed normal shock to wages.
Hence the implied dynamics in this model are quite intricate: Past work deci-
sions produce human capital and enhance earnings potential. This should lead to
increases in participation. On the other hand, past work decisions change prefer-
ences, either dampening down or reinforcing the eﬀects due to enhanced human
capital.
    At this stage the only source of stochastic specification is the iid shock to
wages εt . Since wages for the unemployed are not observed this does not lead to a
deterministic participation rule (although the rule would be deterministic if wages
were observed for all). However, this formulation has the undesirable feature that
the minimum observed wage is a consistent estimator for the reservation wage;
this is because preferences are homogeneous in the population. To overcome this
problem Eckstein and Wolpin allow observed wages to be measured with error,
which turns out to be particularly important empirically. Thus observed wages
satisfy
                                 lnytw∗ = lnytw + ut                          (6.24)
Eckstein and Wolpin assume that ut is normally distributed.
    In such dynamic discrete choice models estimation is complicated by the fact
that participation in this period confers benefit/costs in future period. Thus
the future impact of current choices needs to be computed explicitly in order to
compute the probability of participation. Eckstein and Wolpin follow a maximum
likelihood approach where the parameters of the participation decision, of wages
and of the measurement error process are estimated simultaneously.
    Their estimation approach can be described as follows: An individual partic-
ipates if the utility from doing so is higher than the utility from not working.

                                          105
To illustrate the approach we simplify further their model by assuming additive
separability between consumption and participation. In this case the husband’s
income will not aﬀect female labor supply. For notational simplicity we also
drop the schooling (S) and household composition terms ( Ntj ). In this simplified
framework, utility when participating can be written as
             (1)
           Vt      = ytw + yth − b + a1 + a3 Kt−1 + δEVt+1 (Kt−1 + 1)
                        ¡                      2
                                                                ¢
                   = exp β 1 + β 2 Kt−1 + β 3 Kt−1 + β 4 S + εt                          (6.25)

                       +yth − b + a1 + a3 Kt−1 + δEVt+1 (Kt−1 + 1)
while the utility from nonparticipation is given by
                                   (0)
                                 Vt      = yth + δEVt+1 (Kt−1 )                          (6.26)

where δ is the personal discount factor. Note that when the woman participates in
this period, human capital increases by one and does not increase otherwise. This
is what gives rise to the diﬀerence in the future values associated with the current
actions. In the expressions above the expectation is taken over the uncertain
realizations of εt (and of the husband’s income). This expectation is conditional
on information known in period t. However, since the shock is iid conditional and
unconditional expectations coincide.
    A participation rule can be derived now from these two expressions written
in terms of thresholds for the unobserved shock εt . Workers are individuals with
wage shocks such that28
       εt > ln [b − a1 − a3 Kt−1 + δ (EVt+1 (Kt−1 ) − EVt+1 (Kt−1 + 1))]

                                        2
                −(β 1 + β 2 Kt−1 + β 3 Kt−1 + β 4 S)                                     (6.27)
          or
       εt > ε∗t (Kt−1 )
Given a distributional assumption on εt this leads to a probability of participation.
Note however, that the expression in 6.27 depends on the future expected gain
  28
    In our simplified model the husbands income plays no role in the wife’s decision. This is not
a feature of the Eckstein and Wolpin model but a result of our simplified exposition in which
we have assumed additive separability.

                                               106
from working. Hence to estimate the model this gain needs to be computed. This
is achieved by backwards induction.
    For a given set of parameters of the utility function and the distribution of the
unobservable εt the value of participation and non participation is constructed in a
terminal period, given all possible values hof the state variables
                                                               i (in this case K). For
                                                     (1)   (0)
each K we then compute EVT (K) = E max(VT , VT ) where the expectation
is over the realizations εT . Computing the value in period T is very simple since
the problem is essentially static then.
    The only way by which past decisions aﬀect the future is through the state
variable K. Hence the future gain from working this period when the current
experience stock is K is simply EVT (K + 1) − EVT (K). Whether this is positive
or negative will depend on the eﬀect of an extra unit of human capital on wages
and on preferences. Given the terminal value function we can now compute the
values in period T −1 for all possible K accumulated by period T −1 and so on until
we reach period t. This computation is a simple recursion. The procedure requires
one to specify a terminal period (age) T. It also require us to be specific about
what happens beyond that period. In models that require backwards induction
it is often necessary to parameterize separately a terminal value function. In
Eckstein and Wolpin the value beyond the last decision period T is assumed to
be zero.
    Given a way to compute EVt+1 (Kt−1 )−EVt+1 (Kt−1 +1) we can now easily con-
struct the likelihood function. For non-workers this is simply P r(εt < ε∗t (Kt−1 )) =
Φ(ε∗t (Kt−1 )) where Φ is the standard normal distribution function. For workers
the contribution to the likelihood function is the joint density of wages (driven
by the sum of the shock εt and the measurement error ut ) and the probability
that εt > ε∗t (Kt−1 ). Hence estimation proceeds as follows: For an initial set of
parameters the future gains from work are computed. Then the observed event
is computed and the likelihood function is constructed for each observation. A
Newton type algorithm can then be used to update the parameters. The value
functions need to be recomputed at each iteration when updated parameters are
available - this is what makes dynamic discrete choice computationally burden-
some.
    Estimation of this model requires observations on Kt−1 and the choice pt as


                                         107
well as wages. In general retrospective information on periods worked can be used,
although entire work histories would reduce the chance of measurement error.
    How is the model identified? Generally speaking dynamic intertemporal mod-
els require strong identifying assumptions. As Rust (1994) has shown it is not
possible to identify non-parametrically such models. Assumptions on the struc-
ture play an important role. The Eckstein and Wolpin model is fully parametric.
In addition it assumes the absence of any persistent form of heterogeneity. All
dependence on the past is in eﬀect assumed to be pure state dependence. Allowing
for persistent unobservables (such as fixed eﬀects as in Heckman and MaCurdy,
1980) would in itself lead to diﬃculties because these unobservables would be
correlated with the accumulated stock of human capital Kt . This is because past
work decisions would be driven by the unobserved fixed eﬀect. This initial con-
ditions problem can only be solved directly by observing the entire earnings and
work history of individuals so at to in eﬀect, model the dependence between the
lagged endogenous variables and the persistent heterogeneity. We return to this
issue as well as a “shortcut" solution to it in our last section. However, it is im-
portant to emphasize that whenever there are intertemporal dependencies either
due to preferences or budgets (e.g. assets) the presence of persistent unobserved
heterogeneity can pose fundamental identification issues.
    The basic issue with identification of wages is selection: Only those with good
enough wage shocks work, given the accumulated human capital. In the Eck-
stein and Wolpin model husbands income aﬀects female participation through the
resource constraint. It is also assumed exogenous. This implies that the partic-
ipation process depends on factors not aﬀecting preferences. This fact in itself
is suﬃcient to control for selection and estimate the wage equation identifying
the dependence of current wages on past accumulated human capital, particularly
given that husband’s income is continuous. Given we know the dependence of
wages on past participation choices, any further dependence is attributed by the
model to preference non-separability. The wage eﬀect in the participation equa-
tion is identified by the restriction that male and female income always enter in
the same way as contributors to consumption. Of course, as Eckstein and Wolpin
point out, it is impossible to distinguish separately the eﬀects of fixed costs of
work from the additive component of participation on preferences without data
on such fixed work costs. But generally speaking this is a tightly specified model

                                        108
with clear identification assumptions that deliver the estimates.
    The dynamic discrete choice model described above is a coherent and powerful
way of modelling the dynamics of participation and the evolution in wages. At
the same time though it can be computationally quite burdensome and we have
to recognize that the basic premise (intertemporal optimization) is in eﬀect a
non-testable assumption.
    The model by Eckstein and Wolpin is a prototype on which other researchers
have built, drawing also from the experience gained in the analysis of discrete
choice in other fields or in labor supply (Rust, 1987 Pakes 1986, Hotz and Miller
1988, Berkovec and Stern 1991).
    One of the most important subsequent contributions in the field of labor supply
is the paper by Rust and Phellan (1997). The crucial aspect of this paper is
that it models explicitly the relationship between work and future social security
entitlements, thus building a model that can be used to evaluate the impact of
policy reforms. An important feature, which complicates the model and makes
it much harder to implement is that the individual’s choice depends on a large
number of state variables that evolve stochastically. In the Eckstein and Wolpin
prototypical model there was basically only one state variable: the number of
periods worked in the past. Here the state space includes health status, own
earnings, spouse’s earnings and social security income. Some of these variables
are aﬀected by past decisions. Hence the intertemporal non-separabilities in this
model are primarily induced by the structure of the budget set: Current work
decisions aﬀect both future earnings and future social security receipts.
    The principle of estimating such a model does not diﬀer fundamentally from
that of estimating the Eckstein and Wolpin model: The stochastic process for
the exogenous state variables is estimated from the data. Then, following the
specification of a distribution for the unobservables, the probability of observed
choices is characterized which depends on the future and current utility gains from
this choice. As before, for each set of parameter values and at each value of the
state variables the model has to be solved. The probabilities at each data point
are combined in the usual way to form the sample likelihood function. However,
the problem is more complicated because of the many sources of uncertainty,
originating from the large number of stochastically evolving state variables. These
components are critical additions since they recognize explicitly that there are

                                       109
events such as the possibility of death or taste shifter variables such as health
that aﬀect behavior but are fundamentally uncertain. Such uncertainty is very
likely to aﬀect labor supply and retirement behavior of individuals.

6.4. Estimation with Savings, Participation and Unobserved Hetero-
     geneity
     We conclude our chapter by a discussion of estimation of dynamic models
with savings in the absence of complete markets, which bring together the entire
set of issues we have identified as challenges in estimating labor supply models.

6.4.1. Complete Markets
     Altug and Miller (1998) set up a model of labor supply, participation and
consumption, assuming complete markets. Preferences are non-separable over
time and past work decisions (both hours and participation) aﬀect future wages. In
a departure from the earlier literature, savings are explicitly be taken into account
as are aggregate shocks. Moreover, the estimation methods proposed are relatively
simple since they exploit a modified version of the conditional choice probability
estimator developed in Hotz and Miller (1993). The complete markets assumption
they make allows them to express consumption allocations as a function of a
fixed eﬀect and an aggregate time eﬀect. This solves at one go the problem of
dealing with aggregate shocks when the time period is short and the problem
of having to simulate alternative consumption paths explicitly when solving the
dynamic programming problem. In terms of heterogeneity, preferences are subject
to independently and identically distributed shocks. However, wages include an
unobserved fixed eﬀect and an iid shock.
    Altug and Miller view the complete markets assumption as an approximation
that allows them to estimate a more general economic model than the ones con-
sidered earlier in the literature. However, the complete markets assumption is
resoundingly rejected whenever it is tested (Cochrane (1991) and Attanasio and
Davis (1996)). It also stands in awkward contrast with the recent literature on
contract theory that stresses the problems that arise with moral hazard. Below
we consider a framework that does not require complete markets. This will make
explicit the diﬃculties that need to be addressed in future research and since such

                                        110
an approach is yet to be implemented our discussion is necessarily speculative.

6.4.2. Uninsurable idiosyncratic risk
    We consider an economy where some idiosyncratic risk remains uninsurable.
However perfect credit markets are available.29 Consider a utility function de-
pending on hours of work hit , on participation pit (to reflect fixed costs) and on
consumption cit .
                                                         (1)                  (2)
                    Uit = U(cit , hit , pit , fi ) + pit ν it + (1 − pit )ν it
                                                                        (1)         (2)
where fi reflects unobserved heterogeneity. The terms ν it and ν it are hetero-
geneity terms that aﬀect the participation decision.
   Assets accumulate according to the diﬀerence equation

                           Ait+1 = (1 + rt )(Ait + wit hit − cit )

The terminal condition for assets is

                                            AiT = 0

where T is the last period of the planning horizon. We do not discuss retirement
explicitly. However, early retirement can be induced by the availability of pensions
later in life, the accumulation of private assets, by aspects of the welfare system
such as easily available disability insurance and/or by a decline in wages at an
older age.
    Wages and interest rates are distributed according to a conditional joint dis-
tribution denoted g (wit , rt |κi , Sit ) where Sit is the entire collection of variables
that allow predictions of future wages and interest rates. They could of course in-
clude lagged wages and lagged interest rates, but we assume that they include no
choice variables. The form of the distribution is assumed to be known. However,
its parameters have to be estimated jointly with the behavioral model, since the
behavioral model is capable of explaining the selection eﬀects on the distribution
  29
    Some may view this as a contradiction. Allowing for borrowing restrictions is straightfor-
ward. However, given uncertainty individuals will typically not want to borrow much, making
the modelling of LCs probably redundant for all practical purposes.


                                               111
of wages. Moreover we need to specify the conditional distribution governing the
evolution of all other state variables, i.e. gs (Sit |Sit−1 ).
     In general heterogeneity in the wage rate κi is correlated with the heterogeneity
in preferences fi . This implies that wages are endogenous for both labor supply
and consumption and this reflects the idea that unobserved productivity and the
tastes for work are related. A simplifying assumption could be made reducing the
dimension of heterogeneity, i.e. fi ∝ κi .
     Given these assumptions it is possible to solve numerically for optimal con-
sumption and hours of work as a function of the state variables in each period,
conditional on fi and conditional on the participation decision. The consump-
tion function will depend on the wage rate. However, when the individual is not
working it will depend on the shadow wage, which can be obtained by inverting
the hours of work function implied by the solution. Denote the optimal solu-
                                  (1)   (1)                                                (0)
tions as follows; workers : cit = ct (wit , Ait |Sit , fi , pit = 1), non-workers cit =
 (0)                              (1)
ct (Ait |Sit , fi , pit = 0) and hit = ht (wit , Ait |Sit , fi , pit = 1). Since this is a finite
horizon problem both hours of work and consumption will depend on the age of
the individual. These policy functions for consumption and hours of work can be
substituted into the intertemporal utility function. This gives rise to conditional
                                                 (1)                            (0)
value functions conditional on working (Vit ) and not working (Vit ):
                    (1)           (1)   (1)                (1)          (1)
                  Vit     = U(cit , hit , pit = 1, fi ) + ν it + βEt Vit+1

                    (0)           (0)                            (0)          (0)
                  Vit     = U(cit , hit = 0, pit = 0, fi ) + ν it + βEt Vit+1
            (1)             (0)
where Et Vit+1 and Et Vit+1 represent the value functions as of the beginning of the
next period, given optimal decisions thereafter for each of the two participation
states respectively in period t. To construct these, the uncertain future variables
have to be integrated out, and these include wages and interest rates. Given a
distributional assumption we can construct the probability of participation as
                                                                 h                    i
                                        (1)    (0)   (0)   (1)         (0)        (1)
   P r(pit = 1|Ait , Sit , fi ) = P r(ν it − ν it > Uit − Uit + β Et Vit+1 − Et Vit+1




                                              112
Thus the likelihood conditional on the heterogeneity term is
             QN QTi                                                                   pit
     L =        i=1  t=1 {[g (wit , rt |κi , Sit ) P r(pit = 1|wit , Ait , Sit , fi )]

                 £R                                                                             ¤1−pit
                      [g (wit , rt |fi , Sit ) (1 − P r(pit = 1|wit , Ait , Sit , fi ))] dwit            }
                 QN QTi
                      i=1   t=1 Lit (fi )

where N is the number of individuals and Ti is the number of time periods over
which individual i is observed and Lit (fi ) is the likelihood contribution for indi-
vidual i.
     For nonworkers wages are integrated out. In the absence of heterogeneity
(fi ≡ 0) this likelihood is “straightforward” to maximise, although potentially
burdensome from a computational point of view.
     The computational burden here arises from having to solve the model at
each iteration and each individual type, defined by the observable characteris-
tics. Moreover, if utility depends on taste shifter variables such as demographic
composition, even if taken as exogenous, transition models for such variables have
to be added to the model.
     Allowing for persistent unobserved heterogeneity, introduces important iden-
tification issues. The problem with persistent unobserved heterogeneity such as
the fixed eﬀect fi arises because all decisions, including assets Ait , depend on the
unobservable fi . It is this last dependence which creates the main diﬃculty, since
we cannot condition on initial assets: The current level of assets is not exogenous.
It depends on past decisions, which in turn depend on taste parameters, including
fi . Thus, even when we have the luxury of observing assets, we cannot use them
directly. We need to control for their dependence on fi . The cleanest way of doing
this would be to have observations on individuals from a date when assets can be
assumed as exogenous. An alternative “shortcut" approach would be to specify a
reduced form for assets in the initial period of observation (Ai0 ), conditional on
a set of variables assumed to be strictly exogenous. Denote such a distribution
by gA (Ai0 |ζ i , zit ). The unobserved variables ζ i and fi may be dependent, which is
the source of endogeneity of initial assets. If these are exogenous fi and ζ i would
be independent of each other.
     Possible instruments determining Ai0 but not directly the work and savings

                                                    113
decisions that follow might include the financial market rate of return at young
ages which aﬀected the available level of initial assets. Given a model for initial
assets and using a discrete mixture as an approximation to the distribution of the
pair (fi , ζ i ) (see Heckman and Singer (1983)) the likelihood function now becomes
                                    (                           Ti
                                                                            )
                          YN XK XS                              Y
                      L=              prks gA (Ai0 |ζ s , zit )    Lit (fk )
                        i=1 k=1 s=1                       t=1

where K and S are the number of points of support for the distribution of fi
and ζ i respectively and prks is the probability mass at a point (fi , ζ i ) = (fk , ζ s ).
The dynamic program has to be solved now for every value of fk ( k = 1, ..., K)
in the discrete distribution at every iteration. Keane and Wolpin (1997) discuss
the problem of handling unobserved heterogeneity in such models.
    If we have a number of observations per individual we only need to model sep-
arately initial assets. The assets following the initial observation are endogenously
generated by the model.
    If there are enough observations over time per individual the fixed eﬀect may
be treated as an individual specific parameter. In general this procedure is only
consistent with T going to infinity for each individual, but the approximation may
not be very bad with moderate T. Nevertheless this is an issue that has not been
investigated in this context.
    Macro Shocks
    The way we have specified the model we have allowed for macroeconomic
shocks through interest rates and wages: The interest rate itself is an aggregate
price. Wages contain an aggregate component, the aggregate price of human cap-
ital. To implement the approach we need to model the changes in these aggregate
prices. One way of achieving this is to assume that aggregate wages are a function
of GDP growth or other macroeconomic variables. Then in solving the model, we
need to add a transition probability for these variables. However, even if concep-
tually it is straightforward to deal with aggregate shocks the problems associated
with a large state space and with constructing models able to predict sensibly
in the future the relevant macro variables must not be underestimated. This is
perhaps why, to our knowledge, aggregate shocks are ignored in dynamic program-
ming models of individual behavior. This issue brings us to another complicated


                                           114
matter, i.e. the treatment of taxes and benefits which in this context oﬀers further
challenges.

7. Summary and Conclusions
     This chapter has concerned the identification and estimation of labor supply
models. Our focus was on the key issues that arise from unobserved heterogene-
ity and nonparticipation. We began with an assessment of the estimation issues
underlying the simple ‘static’ labor supply model with proportional taxes and
highlight the problems surrounding nonparticipation and missing wages. We then
considered the natural experiment and diﬀerence in diﬀerences approach to es-
timation, laying out the identifying assumptions. As part of this discussion we
examined the estimation of a simple discrete policy response parameter as well as
the estimation of standard income and substitution eﬀects. Much of our eﬀorts
have been in analysing the impact of incorporating nonlinear taxation and welfare
programme participation. The aim has been to develop the full likelihood specifi-
cation for a model with fixed costs, welfare participation, nonlinear taxation and
individuals heterogeneity. Special attention has been paid to the issue of missing
wages and measurement errors.
    The study of the joint labor supply decisions in households is a growing area of
interest in applications and we have laid out a basic identification and estimation
strategy and for both the unitary and the collective models of joint decision mak-
ing. Finally we considered intertemporal models and in particular we examined
various approaches taken to dynamic modeling and examine the diﬃculties that
arise with participation and heterogeneity.
    Acknowledgements: We would like to thank Martin Browning, the editors
and participants at the London Handbook meeting for helpful comments. This
study is part of the research program of the ESRC Centre for the Microeconomic
Analysis of Fiscal Policy at the IFS.

References
  [1] Abbott, M. and Ashenfelter, O. (1976), “Labor Supply, Commodity Demand
      and the Allocation of Time”, Review of Economic Studies, 42, 389-411.

                                        115
 [2] Ackum-Agell, S. and Meghir, C. (1995), “Male labor Supply in Sweden:
     Are Incentive Eﬀects Important?”, Tax Reform Evaluation Report No.12,
     National Institute of Economic Research.

 [3] Altonji, J.G. (1982), “The intertemporal substitution model of labour mar-
     ket fluctuations: an empirical analysis”, Review of Economic Studies, 49,
     783-824.

 [4] Altonji, J.G. (1986), “Intertemporal substitution in Labor supply: Evidence
     from Micro data”, Journal of Political Economy, 94, June, Part II, S176-
     S215.

 [5] Altug, S. and R. Miller, (1990), “Household choices in Equilibrium”, Econo-
     metrica, 58, May 1990, 543-70.

 [6] Altug, S. and R. Miller, (1998), “.”, Review of Economic Studies.

 [7] Amemiya, T. (1973), “Regression Analysis When the Dependent Variable
     is Truncated Normal”, Econometrica, 41, 997-1017.

 [8] Angrist, J. (1991) “Grouped Data Estimation and Testing in Simple Labor
     Supply Models”, Journal of Econometrics, Vol 47, pp. 243-265.

 [9] Apps, Patricia, F. and Rees, Ray (1988), “Taxation and the Household”,
     Journal of Public Economics, 35, 355-369.

[10] Apps, Patricia, F. and Rees, Ray (1993), “Labor Supply, Household Produc-
     tion and Intra-Family Welfare distribution”, Australian National University
     discussion paper, January 1993.

[11] Apps, Patricia, F. and Rees, Ray (1997), “Collective Labor Supply and
     Household Production”, Journal of Political Economy, 105, 178-190.

[12] Arellano, M. and Meghir, C. (1992), “Female Labour Supply and On-the-
     Job Search: An Empirical Model Estimated using Complementary Data
     Sets”, Review of Economic Studies, 59(3),No. 200, 537-59.

                                     116
[13] Arrufat, J.L. and Zabalza, A.(1986), “Female Labour Supply with Taxation,
     Random Preferences, and Optimization Errors”, Econometrica, 54, 47-63.

[14] Ashenfelter, O. and J. Ham (1979), “Education, Unemployment and Earn-
     ings”, Journal of Political Economy, 87, S99-S166.

[15] Ashenfelter, O. (1983), “Determining participation in Income-Tested Social
     programs”, Journal of the American Statistical Society, 78, 517-525.

[16] Ashenfelter, O. and J. Ham (1979), “Education, Unemployment and Earn-
     ings”, Journal of Political Economy, 87, S99-S166.

[17] Ashenfelter, O. and Heckman, J.J. (1974),“The Estimation of Income and
     Substitution Eﬀects in a Model of Family Labor Supply”, Econometrica, 42,
     73-85.

[18] Attanasio, O, J. Banks, C. Meghir and G. Weber () Humps and Bumps
     Journal of Business and Economic Statistics

[19] Attanasio, O. and S. Davies (1996) Journal of Political Economy

[20] Attanasio, O. and H. Low (2002) “Estimating Euler Equations”, IFS work-
     ing paper WP02/06

[21] Attanasio, O.P. and MaCurdy, T. (1997), “Interactions in Family Labor
     Supply and their Implications for the Impact of EITC”, Mimeo, Stanford
     University, February.

[22] Attanasio and Weber (1993) Review of Economic Studies

[23] Attanasio and Weber (1996) Journal of Political Economy

[24] Becker, Gary S. (1965), “A theory of the Allocation of Time”, Economic
     Journal, 75, 493-517..

[25] Blau, D. and P. Robins, (1988), “Child-Care Costs and Family Labor Sup-
     ply“, Review of Economics and Statistics, 70, 374-381.

                                     117
[26] Blomquist, N.S. (1983), “The Eﬀect of Income Taxation on the Labour
     Supply of Married Men in Sweden”, Journal of Public Economics, 22, 169-
     97.

[27] Blomquist, S. and U. Hansson-Brusewitz (1990), “The Eﬀect of Taxes on
     Male and Female Labour Supply in Sweden”, Journal of Human Resources,
     25, 317-357.

[28] Blomquist, S. (1996) “Estimation Methods for Male Labour Supply Func-
     tions: How to take account of nonlinear taxes”, Journal of Econometrics,
     70, 383-405.

[29] Blomquist, S. and W. Newey (2000), “Nonparametric Estimation of Labor
     Supply Functions Generated by Piece Wise Linear Budget Constraints”,
     Working Paper 2000, Department of Economics, Uppsala University, Swe-
     den.

[30] Blundell, R.W. (1986), “Econometric Approaches to the Specification of
     Life-Cycle Labour Supply and Commodity Demand Behaviour”, Economet-
     ric Reviews, 6(1), 147-51.

[31] Blundell, R.W., Browning, M. and Meghir, C. (1994), “Consumer Demand
     and the Life-Cycle Allocation of Household Expenditure”, Review of Eco-
     nomic Studies, 161. 57-80.

[32] Blundell, Chiappori, Magnac and Meghir (2001),“Collective Labor Supply
     and Participation”, Working Paper Institute for Fiscal Studies.

[33] Blundell, R.W., Duncan, A. and Meghir, C. (1992), “Taxation and Empirical
     Labour Supply Models: Lone Parents in the UK”, Economic Journal, 102,
     265-78.

[34] Blundell, R.W., Duncan, A. and Meghir, C. (1998), “Estimating Labour
     Supply Responses using Tax Policy Reforms”, Econometrica, 66, 827-861.



                                    118
[35] Blundell, R.W. and MaCurdy, T. (1999), “Labor Supply: A Review of Al-
     ternative Approaches”, in Ashenfelter, O. and Card, D. (eds), Handbook of
     Labor Economics, North Holland.)

[36] Blundell, R.W. and Meghir, C. (1986), “Selection Criteria for a Microecono-
     metric Model of Labour Supply“, Journal of Applied Econometrics, 1, 55-81

[37] Blundell, R.W. and Meghir, C. (1987), “Bivariate Alternatives to the Tobit
     Model”, Journal of Econometrics, 34, 179-200.
    Blundell, R.W., Meghir, C., Symons, E. and Walker, I. (1988), “Labour
    Supply Specification and the evaluation of tax reforms”, Journal of Public
    Economics, 36, 23-52.

[38] Blundell, R., Meghir, C. and Neves, P. (1993), “Labour Supply: An In-
     tertemporal Substitution”, Journal of Econometrics, 59, 137-60.

[39] Blundell, R.W. and Walker, I. (1982), “Modelling the Joint Determination of
     Household Labour Supplies and Commodity Demands”, Economic Journal,
     92, 58- 74.

[40] Blundell, R.W. and Walker, I. (1986), “A Life Cycle Consistent Empirical
     Model of Labour Supply using Cross Section Data”, Review of Economic
     Studies, 53, 539-58.

[41] Bound, J. Jaeger, D. A. and Baker, R.M. (1995), “Problems with Instru-
     mental Variables Estimation when the Correlation between the Instrument
     and the Endogenous Explanatory Variable is Weak, Journal of the American
     Statistical Association, 90, 443-450.

[42] Browning, M. (1998),“M-Labour Supplies and Commodity Demands”,
     mimeo, University of Copenhagen.

[43] Browning, M., Deaton, A. and M. Irish (1985), “A Profitable Approach to
     Labor Supply and Commodity Demand over the Life Cycle”, Econometrica
     53, May 1985, 503-43.

                                     119
[44] Browning, M. and C. Meghir (1991), “Testing for Separability between
     Goods and Leisure using conditional Demand Systems”, Econometrica, 59,
     July, 925-52.

[45] Card, D. (1994), “Intertemporal Labour Supply: An Assessment”, in C.Sims
     (ed), Advances in Econometrics, Cambridge University Press.

[46] Card, D. and Robins, P.K. (1998), “Do Financial Incentives Encourage Wel-
     fare Participants to Work”, Research in Labor Economics

[47] Carroll [Linearising the Euler Equation]

[48] Chiappori, Pierre-Andre, (1988), “Rational Household Labor supply”,
     Econometrica, 56, 63-90.

[49] Chiappori, Pierre-Andre, (1992), “Collective Labor Supply”, Journal of
     Public Economics, 437-467.

[50] Chiappori, Pierre-Andre, (1997),“Introducing Household Production in Col-
     lective Models of Labor Supply” Journal of Political Economy, 105, 191-209.

[51] Cochrane, J. Journal of Political Economy

[52] Cogan, J. (1980), “Labor Supply with Costs of Labor Market Entry”, in
     Female Labor Supply: Theory and Estimation, ed. By James Smith. Prince-
     ton:Princeton University Press, 327-364.

[53] Cogan, J.F. (1981), “Fixed costs and labor supply”, Econometrica, 49, 945-
     64.

[54] Eckstein, Z. and Wolpin, K. (1989), “Dynamic Labour Force Participation
     of Married Women and Endogenous Work Experience”, Review of Economic
     Studies, 56, 375- 90.

[55] Eissa, N. and Liebman, J.(1995), “Labor Supply Responses to The Earned
     Income Tax Credit”, NBER working paper no. 5158.


                                     120
[56] Fortin, Bernard and Lacroix, Guy (1997), “A Test of Neoclassical and Col-
     lective Models of Household Labor Supply”, Economic Journal, 107, 933-
     955.

[57] Fraker, T. and R. Moﬃtt, (1988), “The Eﬀect of Food Stamps on Labor
     Supply: A Bivariate Selection Model”, Journal of Public Economics, 35,
     25-56.

[58] Gorman, W.M. (1959), “Separable Utility and Aggregation”, Econometrica,
     21, 63-80.

[59] Gorman, W.M. (1968), “The Structure of Utility Functions”, The Review
     of Economic Studies, 35, 369-390.

[60] Gosling, A. S. Machin and C. Meghir (2000) “The Changing Distribution
     of Male wages in the UK”, Review of Economic Studies,

[61] Gronau, R. (1974),“Wage Comparisons, A Selectivity Bias”, Journal of Po-
     litical Economy, 82(6), 1119-1144.

[62] Ham, J. (1986a), “Testing whether unemployment represents life-cycle labor
     supply behaviour”, Review of Economic Studies, LIII, 559-78.

[63] Hausman, J. (1980), “The eﬀect of Wages, Taxes and Fixed costs on
     Women”s Labor Force participation”, Journal of Pubic Economics, 14, 161-
     94.

[64] Hausman , J. (1981),“Labor Supply. How Taxes Aﬀect Economic Behavior”,
     in (eds) H. Aaron and J. Pechman, Washington, D.C. Brookings Institution.

[65] Hausman, J. (1985a), “The Econometrics of Noninear Budget Sets”, Econo-
     metrica, 53, 1255-82.

[66] Hausman, J. (1985b), “Taxes and Labor Supply”,In Handbook of Public
     Economics, vol 1., (eds) A. Auerbach and M. Feldstein, Amsterdam: North
     Holland.

                                     121
[67] Hausman, J. and Ruud, P. (1986), “Family Labor Supply with Taxes”,
     American Economic Review (Papers and Proceedings), 74, 242-248.

[68] Heckman, J.J. (1974a), “Shadow prices, market wages and labor supply”,
     Econometrica, 42, 679-94.

[69] Heckman, J.J., (1974b), “Life-Cycle Consumption and Labor Supply: An
     Explanation of the Relationship between Income and Consumption over the
     Life Cycle”, American Economic Review, 64, March, 188-94.

[70] Heckman, J.J., (1974c), “Eﬀects of Child-Care Programs on Women”s Work
     Eﬀort”, Journal of Political Economy, 82(2), S136-S163.

[71] Heckman, J.J., (1976), “Life-Cycle Model of Earnings, Learning and Con-
     sumption” Journal of Political Economy, 84, S11-S44.

[72] Heckman, J.J., (1978), “Dummy Endogenous Variables in a Simultaneous
     Equation System”, Econometrica, 46, 931-59.

[73] Heckman, J. J. (1978), “Dummy Endogenous Variables in a Simultaneous
     Equation System”, Econometrica, 46, 931-60.

[74] Heckman, J.J. (1979), “Sample Selection Bias as a Specification Error’,
     Econometrica, 47, 153-161.

[75] Heckman, J.J. and MaCurdy, T.E. (1980), “A Life-cycle Model of Female
     Labour Supply”, Review of Economic Studies, 47, 47-74.

[76] Heckman, J.J. (1993), “What Has Been Learned about Labor Supply in the
     Past Twenty Years”, A.E.R. Papers and Proceedings, 83, 116-21.

[77] Heckman, J.J. (1995) “Instrumental variables: A cautionary Tale”, mimeo

[78] Heckman, J.J. and Robb, R. (1985), “Alternative Methods for Evaluating
     the Impact of Interventions’, in Heckman and Singer (eds), Longitudinal
     Analysis of Labor Market Data, Econometric Society Monograph 10, Cam-
     bridge University Press.

                                    122
[79] Hotz, V.J., Kydland, F.E. and G.L. Sedlacek, (1988), “Intertemporal Sub-
     stitution and Labor Supply,”, Econometrica , 56, March 1988, 335-60

[80] Imbens, G. and J. Angrist (1994) Econometrica

[81] Johnson, T.R. and J.H. Pencavel (1984), “Dynamic Hours of Work Functions
     for Husbands, Wives and Single Females”, Econometrica , 52, 363-389.

[82] Keane, M.P. and Moﬃtt, R. (1998), “A Structural Model of Multiple Welfare
     Program Participation and Labor Supply”, International Economic Review,
     .

[83] Keane and Wolpin (1997) JPE

[84] Killingsworth, M. (1983), Labor Supply. Cambridge: Cambridge University
     Press.

[85] Killingsworth, M. and J. Heckman (1986), “Female Labor Supply: A Sur-
     vey” in Handbook of Labor Economics, Vol.1, ed. By O. Ashenfelter and R.
     Layard. Amsterdam: North-Holland, 103-204.

[86] Kooreman, P. and Kapteyn, A. (1990), “On the Empirical Implementation
     of Some Game Theoretic Models of Household Labour Supply”, Journal of
     Human Resources, 25, 584-98.

[87] Lee, L. F. (1984), “Tests for the Bivariate Normal Distribution in Econo-
     metric Models with Selectivity’, Econometrica, 52, 4, 843-864.

[88] Low, Hamish (1999) IFS Working Paper

[89] Lundberg, S. (1988), “Labor Supply of Husbands and Wives”, Review of
     Economics and Statistics, 70, 224-35.

[90] MaCurdy, T.E. (1981), “An Empirical Model of Labour Supply in a Life-
     Cycle Setting”, Journal of Political Economy, 89, 1059-85.



                                    123
[91] MaCurdy, T.E. (1983), “A simple scheme for estimating an intertemporal
     model of labor supply and consumption in the presence of taxes and uncer-
     tainty”, International Economic Review, 24, 265-89.

[92] MaCurdy, T.E. (1985), “Interpreting Empirical Models of Labour Supply
     in an Intertemporal Framework with Uncertainty”, in J.J. Heckman and
     B. Singer (eds.), Longitudinal Analysis of Labour Market Data, Cambridge
     University Press, ch. 3.

[93] MaCurdy, T.E. (1992), “Work Disincentive Eﬀects of Taxes: A Re-
     examination of Some Evidence”, American Economic Review, 82, 243-49.

[94] MaCurdy, T., Green, D. and Paarsch, H. (1990), “Assessing Empirical Ap-
     proaches for Analyzing Taxes and Labour Supply”, Journal of Human Re-
     sources, 25, 415-90.

[95] McElroy, M.B. (1981), “Empirical Results from Estimates of Joint Labor
     Supply functions of Husbands and Wives”, in Research in Labor Economics,
     Vol. 4. Ed. By R.G. Ehrenberg, Greenwich, Connecticut: JAI Press, 53-64.

[96] Meghir, C. and G. Weber (1996) “Intertemporal non-separability or liq-
     uidity constraints: An empirical analysis using as US consumption panel”,
     Econometrica

[97] McElroy, M. (1990), “The Empirical Content of Nash-Bargained Household
     Behavior”, Journal of Human Resources, 25, 559-583. Moﬃt, R. (1983),
     ”An Economic model of Welfare Stigma”, American Economic Review, 73,
     1023-1035.

[98] McFadden (1978)

[99] Moﬃt, R. (1986), “The Econometrics of Piecewise-Linear Budget Con-
     straints: Survey and Exposition of the Maximum Likelihood Method”, Jour-
     nal of Business and Economic Statistics, 4, 317-27.



                                    124
[100] Moﬃtt, R. (1992), “Estimating the Value of an In-Kind Transfer: The Case
      of Food Stamps”, Econometrica, 57 (March), 385-409.

[101] Moﬃtt, R. (1992b), “Incentive Eﬀects of the US Welfare System: A Re-
      view”, Journal of Economic Literature, 15, 1-161.

[102] Moﬃt, R. (1993), “Identification and Estimation of dynamic Models with
      a Time series of Repeated Cross Sections”, in Journal of Econometrics, 59,
      99-124.

[103] Mroz, T.A. (1987), “The sensitivity of an empirical model of married
      women’s hours of work to economic and statistical assumptions”, Econo-
      metrica, 55, 765-800.

[104] Neary, P. and K. Roberts (1980) European Economic Review

[105] Newey, W.K., Powell, J.L. and Walker, J.R. (1990), “Semiparametric Esti-
      mation of Selection Models: Some Empirical Results”, American Economic
      Review, 80(2), 324- 8.

[106] Paxson, C. [Linearising the Euler Equation]

[107] Pencavel, J. (1986), “Labor Supply of Men: A Survey”, in Handbook of
      Labor Economics, Vol. 1, ed. By O. Ashenfelter and R. Layard. Amsterdam:
      North-Holland, 3-102.

[108] Ransom, M.R. (1987), “An Empirical Model of Discrete and Continuous
      Choice in Family Labor Supply”, The Review of Economics and Statistics,
      59, 465-472.

[109] Rust, J and C. Phelan (1997) “How Social security and Medicare aﬀect
      retirement in a World of Incomplete Markets Econometrica 65(4) 781-831

[110] Shaw, K. (1989), “Life-cycle Labour Supply with Human Capital Accumu-
      lation”, International Economic Review, 30(2), 431-57.



                                      125
[111] Smith, R.J. and Blundell, R.W. (1986), ”An Exogeneity Test for the Simul-
      taneous Equation Tobit Model”, Econometrica, 54, 679-85.

[112] Stern, N. (1986), “On the specification of labor supply functions” in R.W.
      Blundell and I. Walker (eds.), Unemployment, Search and Labour Supply,
      Cambridge University Press, 121-42.

[113] Van Soest, A(1995), “Structural Models of Family Labor Supply: A Discrete
      Choice Approach”, Journal of Human Resources, 30, 63-88
     Wagner, Burkhuser and Behringer (1993),

[114] Wales, T.J. and A. Wodland, A. (1976), “Estimation of Household Utility
      Functions and Labor Supply Response”, International Economic Review,
      17, 69-80.

[115] Zabalza, A. (1983), “The CES Utility Function, Nonlinear Budget Con-
      straints and Labor Supply”, Economic Journal, 93, 312-330.

8. Appendix
This appendix reviews general formulations for likelihood functions applicable to
econometric models involving any combination of five types of endogenous vari-
ables: (1) discrete, (2) continuous, (3) censored, (4) truncated and (5) continu-
ous/discrete. The subsequent discussion opens with an overview of the statistical
framework considered here. It next considers increasingly complex variants of
this framework, starting with models incorporating just discrete variables, adding
in continuous variables, and then including endogenous variables of a combined
continuous-discrete character. The analysis proceeds to cover specifications ap-
propriate when one does not observe all states of the world but instead only knows
whether various combination of states has occurred. The concluding subsection
presents alternative representations of likelihood functions commonly found in the
literature comparable to the specifications presented here, as well as presenting
simple extensions of specifications that allow for dependence on exogenous vari-
ables.

                                       126
8.1. Overview of Statistical Framework

     The basic idea at the foundation of econometric models characterizing distri-
butions of discrete-continuous variables relies on the notion that all endogenous
quantities depend on the values of an underlying set of continuously-distributed
random variables. Specify these underlying variables by the vector U, assumed to
include r linearly-independent components. This rx1 vector possesses the joint
density function:

                                 ϕ(U ) for U ∈ Ω                             (A.1)
where the set Ω designates the sample space or domain of the random variables
U.
     In this model, m states of the world can occur. The discrete random variable
δ i signifies whether state i happens, with δ i = 1 indicating realization of state
i and δ i = 0 implying that some state other than i occurred. The value of δ i
depends on where U falls in its sample space; specifically,
                                    ½
                                       1 if U ∈ Ωi
                               δi =                                           (A.2)
                                       0 otherwise
where the set Ωi represents a nontrivial subset of the entire sample space Ω.
Without loss of generality, assume that the sets Ωi for i = 1, ..., m are mutually
                                   Sm
exclusive and exhaustive, meaning     Ωi = Ω and the sets Ωi ∩ Ωj = ∅ for i 6= j
                                     i=1
(i.e., the sets Ωi and Ωj are disjoint).
    In association with state i, there exists ni continuously distributed random
variables designated Yji , j = 1, ..., ni . The following equations determine the
values of these continuous variables:

                                   Yji = gji (U ) .                          (A.3)

Stacking these individual random variables into a vector yields
                                          
                               Y1i       g1i
                                          
                        Yi =  ...  =  ...  = gi .                        (A.4)
                                 Yni i           gni i

                                           127
To avoid introduction of redundant or ill-defined Yji ’s, assume there exists an
inverse of gi such that

                                       U(i) = gi−1 (Yi , Ui )                                 (A.5)
for some subvector U(i) comprised of any ni components of U.30 The subvector
Ui includes those elements of U not included in U(i) . Designate Φi as the domain
of (Yi , Ui ) and Θi as the domain of Yi .
    Another interesting class of random variables consists of quantities that take a
fixed single value in some states and a continuous set of values in others. Denote
these discrete/continuous variables as Zji , with the index i signalling the state
realized and j = 1, ..., ki signifying the particular Z realized in this state. The
value of Zji follows a rule of the form:
                                    ½
                                      Yji for j ∈ Kci
                              Zji =                                            (A.6)
                                      Zji∗ for j ∈ Kdi
where the set Kci indexes those Zji taking the form of a continuous variable in
state i, and the set Kdi identifies those Zji equaling a constant value Zji∗ in state
i. Define Zi as the vector containing the Zji j = 1, ..., ki as elements analogous
to Yi specified in (A.4).
     Finally, form all the unique variables appearing in any of the Yi ’s into the
vector Y , assumed to be of dimension nx1, and all the variables making up the
Zi ’s into the vector Z, assumed to be of dimension kx1. For any event δ i = 1, Y
consists of two sets of components: the vector Yi incorporating all the continuous
random variables registering in state i, and Y(i) made up of all other continuous
variables unobserved in this state but seen in some other state j 6= i. Similarly,
Z consists of the vector Zi and Z(i) defined analogously. In some states i, all of
the elements of Y and Z may be observed, and in others none may be.
     The subsequent discussion characterizes formulations of conditional and un-
conditional likelihood functions associated with Y , Z and combinations of the δ i ’s.
  30
     “Assuming existence of the inverse of gi in () is not as restrictive as one might first surmise.
If an inverse does not exist on set Φi , then one can replace Φi with a further segment of this
set inverses defined on each of these smaller sets. The subsequent analysis can then be carried
out for this expanded decomposition of Φ.”

                                                128
As briefly noted at the end of this appendix, one can readily introduce the pres-
ence of exogenous variables both in specifying the distribution of U and in defining
the regions of definition of δ i . An exogenous variable in this analysis must be
observed in all states; otherwise, this variable must be include as a component of
Y or Z.

8.2. Discrete Variables: All and Combinations of States

     Initially consider empirical frameworks in which one observes only discrete
variables whose outcomes register the realization of m distinct regimes determined
by the relative values of U .
    A common formulation specifies that a researcher sees exactly which state m
occurs, implying that one observes all individual δ i , i = 1, ..., m. From (A.2) we
see that the probability that δ i = 1 equals:


                       P (δ i = 1) = P (U ∈ Ωi )                               (A.7)
                                     Z      Z
                                   =    ···     ϕ (U) dU
                                             Ωi
                                     Z
                                   ≡     ϕ (U) dU .
                                                Ωi
                      R    R
     The notation · · · Ωi denotes integration over the set Ωi , which the third line
                                                      R
of this equation expresses in the shorthand notation Ωi . The joint distribution
of the δ i ’s takes the form:


                                                Y
                                                m
                        P (δ 1 , ..., δ m ) =          [P (δ i = 1)]δi         (A.8)
                                                i =1
                                                 Y
                                          =             [P (δi = 1)]δi
                                                i∈M

In the second line of this equation, the notation M = {i : i = 1, ..., m} refers to
the set of all possible states i.


                                            129
    In other formulations, a researcher does not observe or chooses to ignore each
state individually. Instead, one accounts for only whether some combination of
states has been realized. More specifically, suppose one knows that at least one
δ i = 1 when i ∈ Mt ⊂ M , but one does not account for which particular δ i in
this group actually occurred. So,
                                     X
              if i ∈ Mt , then δ t ≡     δ i = 1 ; otherwise, δ t = 0 .      (A.9)
                                      i∈Mt

                                                                             S
                                                                             τ
The sets Mt , t = 1, ..., τ , are mutually exclusive and exhaustive (i.e.,         Mi = M
                                                                             t=1
and Mt ∩ Mj = ∅ for t 6= j). The probability of the occurrence of group state t
equals

                            ¡      ¢ X
                           P δt = 1 =  P (δ i = 1) .                                (A.10)
                                          i∈Mt

The joint distribution of the δ t ’s takes the form:
                           ¡             ¢ Y £           ¤δt
                          P δ1 , ..., δ τ =   P (δ t = 1)                           (A.11)
                                             t∈T

where the notation T = {t : t = 1, ..., τ } refers to the set of all possible "group"
states t.

8.3. Continuous Variables: All States Observed

     Consider those models in which one observes each individual δ i along with
vectors Yi of continuously distributed random variables for states i ∈ My ⊆ M
. Conditional on occurrence of a state, the components of Yi may either be
truncated or censored. The truncated elements of Yi refer to those that lie in a
strict subset of their overall domain given realization of the selection mechanism
U ∈ Ωi (or, equivalently, (Yi , Ui ) ∈ Φi ). The censored elements consist of those
                                                           Sm
that instead range over their entire domain. The set Θ =      Θi defines the sample
                                                             i=1
space of Y . So, if Yi includes truncated components, then Θi ⊂ Θ.


                                         130
   The first step in formulating specifications for the distributions of the Yi ’s
involves recognizing that the density of underlying random variables U conditional
on the event δi = 1 takes the form:
                                                         ϕ (U )
                                   ϕ (U | δ i = 1) =                         (A.12)
                                                       P (δ i = 1)
where relationship (A.7) gives the formula for P (δ i = 1). An alternative expres-
sion (A.7) is given by:


                              P (δ i = 1) = P (U ∈ Ωi )                      (A.13)
                                           = P ((Yi , Ui ) ∈ Φi )
                                             Z
                                           =     hi (Yi , Ui ) dYi dUi
                                                Φi

                    S
                    n
where the set Φ =             Φi defines the domain of (Y, U1 , ...Un ).
                    i=1
   Application of a conventional change-in-variables formula exploiting relations
(A.3) and (A.5) yields the following specification for the density of Yi conditional
on δ i :
                            R
                                  h (Yi , Ui ) dUi
                             Φi|Yi i
         f (Yi | δ i = 1) =                             for     Yi ∈ Θi      (A.14)
                                 P (δ i = 1)
where
                                                                  ¯ −1 ¯+
                        ¡ −1                ¢                     ¯ ∂g ¯
    hi (Yi , Ui ) = Ji ϕ gi (Yi , Ui ) , Ui        with     Ji = ¯¯ i 0 ¯¯ , (A.15)
                                                                    ∂Yi
                     R
and the notation Φi|Y denotes integration of Ui over the set
                          i


                                  Φi|Yi = {Ui : (Yi , Ui ) ∈ Φi } .          (A.16)

The term Ji in (A.*) represents the Jacobian of the transformation associated with
(A.5) (i.e., Ji is the absolute value of the determinant of the matrix of partial
             ∂g −1
derivatives ∂Yi 0 ). One can express the domain of Yi as
              i
                                            ©               ª
                               Θi = Θi· Yi = Yi : Ui ∈ Φi|Yi ,               (A.17)

                                                131
where the notation Θi· Yi simply signifies that this set is a suspace of Yi .
   A compact expression for the conditional density of Y is
                                                         Y
                       f (Y | δ i , i ∈ My ) =                 [f (Yi | δi = 1)]δi                           (A.18)
                                                        i∈My

where as defined above My designates the set of states in which one observes at
least one element of Y . An alternative representation for this conditional density
takes the form:
                                              Y                                Y
                 f (Y | δ 1 , ..., δ m ) =            [f (Yi | δ i = 1)]δi            [1]δi ,                (A.19)
                                              i∈My                            i∈Myc

where the set Myc denotes the complement of My with respect to M. Realizations
of i ∈ Myc mean that all elements of Y are either undefined or unobserved.
    The joint density of Y and δ 1 , ..., δ m is the product of the conditional density
of Y given by (A.19) and the joint probability of δ 1 , ..., δ m given by (A.8) yielding:

                                Y                                                   Y
     f (Y, δ 1 , ..., δ m ) =          [f (Yi | δ i = 1) P (δ i = 1)]δi                     [P (δ i = 1)]δi(A.20)
                                i∈My                                                i∈Myc
                                 "                                    #δi
                                Y Z                                         Y ·Z                       ¸δi
                          =                       hi (Yi , Ui ) dUi                         ϕ (U) dU         .
                                i∈My      Φi|Yi                             i∈Myc     Ωi


The second line of this expression follows by substituting relationships from (A.7)
and (A.14).

8.4. Discrete/Continuous Variables: All States Observed

    Consider models in which one observes individual δ i along with the vectors
Zi comprised of discrete/continuous random variables for states i ∈ Mz ⊆ M.
The components included in Zi are either distributed continuously or equal to
constants according to the following rule:
                                µ         ¶       µ          ¶
                                    Zci                Yi
                        Zi =                  =         ∗          for i ∈ Mz .                              (A.21)
                                    Zdi                Zdi

                                                      132
Inspection of (A.6) reveals that those individual Zji for j ∈ Kci make up the
elements of the vector Zci ; and those Zji for j ∈ Kdi form the vector Zdi . The
set Mz comprises all states in which any component of Z is realized.
    For states i ∈ My , one can express the distribution of Zi conditional on δ i = 1
as:

              f (Zi | δi = 1) = f (Zci , Zdi | δ i = 1)                                            (A.22)
                                   = f (Zci | Zdi , δ i = 1) P (Zdi | δ i = 1)
                                              ∗
                                   = f (Yi | Zdi , δ i = 1)

where the third line follows from
                                            ∗
                                  P (Zdi = Zdi | δi = 1) = 1 .                                     (A.23)

                           ∗              ∗
Formally, the argument Zdi   in f (Yi | Zdi , δ i = 1) is redundant since the event
                                ∗
δ i = 1 already implies Zdi = Zdi ; the argument is included merely to remind the
                                                                                 ∗
reader that the density appearing the last row of (A.22) typically depends on Zdi  .
A compact expression for the conditional density of Z is

                                   Y                                     Y
      f (Z | δ i , i ∈ Mz ) =                        ∗
                                          [ f (Yi | Zdi , δ i = 1)]δi           [1]δi .            (A.24)
                                   i∈My                                 i∈Md


Realizations of i ∈ My mean that some of the elements of Zi are continuously dis-
tributed, whereas occurrence of i ∈ Md imply that all elements of Zi are discrete.
One can write an alternative representation for this conditional density as:

                                   Y                                    Y              Y
      f (Z | δ 1 , ..., δ m ) =                     ∗
                                          [f (Yi | Zdi , δ i = 1)]δi           [1]δi          [1]δi (A.25)
                                   i∈My                                 i∈Md           i∈Mu
                                   Y                                        Y
                            =                        ∗
                                           [f (Yi | Zdi , δ i = 1)]δi                   [1]δi .
                                   i∈My                                  i∈Md ∪Myu


Realizations of i ∈ Mu mean that all components of Z are either undefined or
unknown.

                                                 133
    The joint density of Z and δ 1 , ..., δ m is the product of the conditional density
of Z given by (A.25) and the joint probability of δ 1 , ..., δ m given by (A.8) yielding:

                           Y                                                         Y
f (Z, δ 1 , ..., δ m ) =                    ∗
                                  [f (Yi | Zdi , δ i = 1) P (δ i = 1)]δi                              1)]δi
                                                                                            [P (δ i = (A.26)
                           i∈My                                                 i∈Md ∪Mu
                            "                                       #δi              ·Z                ¸δi
                           Y Z                                              Y
                     =                          hi (Yi , Ui ) dUi                          ϕ (U ) dU         .
                           i∈My      Φi|Y  ∗
                                                                          i∈Md ∪Mu    Ωi
                                        i Zdi


The second line of this expression follows by substituting relationships from (A.7)
and (A.14), where the notation Φi|Yi Zdi∗ still refers to the set Φi|Yi defined by
                                                                           ∗
(A.16) with emphasis added to indicate that this set also depends on Zdi     .

8.5. Discrete/Continuous Variables: Combinations of States

     An important category of models involves characterizing the distribution of
continuous and discrete/continuous variables when one either observes or chooses
to distinguish the occurrence of groups rather than individual states. Define the
relevant groups of states by the δ t ’s specified in (A.9) for t ∈ T as outlined in
Section A.2.
    Consider the distribution of the continuous random variable
                                        X
                                  Yt =      δ i Yi .                         (A.27)
                                                  i∈Mt

Relation (A.27) implicitly assumes that each Yi is defined and of comparable
dimension for i ∈ Mt . Application of the law of iterated expectations yields the
following density for Yt conditional on δ t = 1:

            ¡            ¢  X ¡                     ¢ ¡                 ¢
        f    Yt | δ t = 1 =  f Yt | δ i = 1, δ t = 1 P δ i = 1 | δ t = 1 (A.28)
                                    i∈Mt
                                    X                         ¡                 ¢
                             =              f (Yt | δ i = 1) P δ i = 1 | δ t = 1
                                    i∈Mt
                                    X                          P (δ i = 1)
                             =              f (Yt | δ i = 1)     ¡       ¢
                                    i∈Mt
                                                               P δt = 1

                                                    134
The latter two lines of this relationship follow from the assumptions that the
individual states δ i = 1 for i ∈ Mt making up the event δ t = 1 are mutually
exhaustive and exclusive.
   Discrete/continuous variables are realized according to the following rule:
                               µ          ¶       µ         ¶
                                   Zct                Yt
                        Zt =                  =        ∗        for t ∈ Tz .             (A.28)
                                   Zdt                Zdt
The set Tz = Ty ∪ Td comprises all group states in which any component of Z
is realized. The set Ty includes those group states t in which Zt incorporates
the continuously-distributed vector Yt specified by (A.27); and the set Td includes
those group states wherein all the components of Zt equals constant values.31
    For group states t ∈ Tc , the distribution of Zt conditional on δ t = 1 takes the
form:

              f (Zt | δ t = 1) = f (Zct , Zdt | δ t = 1)                                 (A.29)
                                                              ¡             ¢
                                   = f (Zct | Zdt , δ t = 1) P Zdt | δ t = 1
                                              ∗
                                   = f (Yi | Zdt , δ t = 1) ,

where this latter expression exploits the relationship:
                        ¡       ∗
                                            ¢
                       P Zdt = Zdt | δ t = 1 = 1 for                t ∈ Td .             (A.30)

Analogous to (A.25), a compact expression for the conditional density of Z is

           ¡                  ¢ Y£ ¡                 ¢¤δt              Y
          f Z | δ 1 , ..., δ τ =          ∗
                                  f Yt | Zdt , δt = 1                           [1]δt    (A.31)
                                   t∈Ty                              t∈Td ∪Tu

where the set Tu includes those state groups in which no Zjt are either undefined
or unknown.
  31
     “For notational simplicity, the specification of the values of Zt when t ∈ Td presumes that
Zt∗ is common across the individual states i ∈ Mt making up group state t. One can instead
replace the common value Zt∗ by a set {Zt∗ } consisting of several discrete values at the expense
of introducing some complexity in specifying likelihood functions.”




                                                  135
      Multiplying the conditional density (A.25) by the joint probability of the events
δ 1 ,...,δ τ given by (A.8) generates the following joint density for Z and the δt ’s:
   ¡              ¢      Y£ ¡                    ¢           ¤δt Y £              ¤δt
                                      ∗
f Z, δ 1 , ..., δτ =          f Yt | Zdt , δt = 1 P (δ t = 1)          P (δ t = 1) (A.32)
                       t∈Ty                                                    t∈Td ∪Tu
                              "                                         #δt              "                       #δt
                       Y XZ                                                     Y            XZ
                  =                                 hi (Yt , Ui ) dUi                                 ϕ (U) dU
                       t∈Ty    i∈Mt     Φi|Yt Z ∗                             t∈Td ∪Tu    i∈Mt   Ωi
                                               dt

The second line of this expression follows from substitution of relationships from
(A.7), (A.10), (A.14), and (A.28).

8.6. Accounting for Unobserved and Exogenous Variables

      Specification (A.32) presents a general formulation for likelihood functions
incorporating discrete, continuous and discrete/continuous variables. One often
sees alternative representations of this specification in the literature that may at
first not appear as a special case of (A.32).
     One such representation defines a set of continuous or discrete/continuous
variables Z that are then presumed to be unobserved and, therefore, must be
eliminated as arguments of the f ’s in (A.32). In particular, suppose Z consists
                           0     0     0                               0
of two components Zt = (Z1t , Z2t ) where the variables Z1t are observed and
                         0                                                0      0    0
those included in Z2t are not. Correspondingly, decompose Yt = (Y1t , Y2t ) and
   0        0        0                                   0       0
Zdt = (Z1dt , Z2dt ), with the random variables Y2t and Z2dt unobserved.
                                                                                   0
     Integrating (or summing) the joint likelihood function (A.32) over Z2t produces
                       0
the marginal for Z1t . This exercise yields:
   ¡                 ¢     YZ                                                        Y £           ¤δt
                                                   ∗
f Z1 , δ 1 , ..., δ τ =            f (Y1t , Y2t | Zdt , δ t = 1)dY2t P (δ t = 1)δt      P (δ t =(A.33)
                                                                                                 1)
                        t∈Ty      Θt· Y2t                                                         t∈Td ∪Tu
                        Y                                                       Y £           ¤δt
                                         ∗
                   =           f (Y1t | Zd1t , δ t = 1) P (δ t = 1)δt              P (δ t = 1)               .
                        t∈Ty                                                  t∈Td ∪Tu

The second line of this expression exploits the relationship:
Z                                          Z
                       ∗                                         ∗                          ∗
       f (Y1t , Y2t | Zdt , δ t = 1)dZ2t =       f (Y2t | Y1t , Zdt , δt = 1)dY2t f (Y1t | Zdt , δ t = 1)
 Θt· Y2t                                              Θt· Y2t
                                                               ∗
                                              =      f (Y1t | Zdt , δ t = 1) ,

                                                    136
which follows since Θt· Y2t constitutes the domain of Y2t given the event δ t = 1.
Clearly, the second expression in (A.33) is a special case of (A.32). This merely
reflects the fact that an unobserved Y2t has been reinterpreted as a component of
the Ui ’s implicit in (A.32). The variables making up Ui in a state i (or t) may be
observed as a Yj in some other state.
    Finally, throughout the above discussion one can readily interpret the distri-
bution of U as being conditional on a set of exogenous variables X, as well as
define the regions of definition of δ i to depend on X ( so, Ωi = Ωi (X) ). To
be deemed exogenous, each component of X must be observed in all states; oth-
erwise, this variable must be treated as a component of Y or Z in the previous
analysis. Modifying the above formula to admit exogenous X merely involves
adding X as an argument of f (·) and interpreting the sample subspaces Ωi , Φi|Yi
, and Θi as functions of X.




                                       137



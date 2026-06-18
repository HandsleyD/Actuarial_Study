---
normalized_id: shared-pdf-reference-structural-estimation-of-markov-decision-processes
exam_code: SHARED
material_scope: structural estimation of markov decision processes.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Structural Estimation of Markov Decision Processes.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-structural-estimation-of-markov-decision-processes

Chapter 51


STRUCTURAL ESTIMATION                                              OF MARKOV
DECISION PROCESSES*

JOHN    RUST

University of Wisconsin




Contents

1.   Introduction                                                                                       3082
2.   Solving MDP’s via dynamic                           programming:         A brief review            3088
     2.1.    Finite-horizon        dynamic      programming      and the optimality      of Markovian
             decision    rules                                                                           3089
     2.2.    Infinite-horizon        dynamic     programming       and Bellman’s equation                3091
     2.3.    Bellman’s equation,           contraction    mappings    and optimality                     3091
     2.4.    A geometric         series representation     for MDP’s                                     3094
     2.5.    Overview      of solution      methods                                                      3095
3.   Econometric            methods          for discrete decision           processes                  3099
     3.1.    Alternative      models of the “error term”                                                3100
     3.2.    Maximum        likelihood      estimation     of DDP’s                                     3101
     3.3.    Alternative      estimation      methods:    Finite-horizon     DDP problems                3118
     3.4.    Alternative      estimation      methods:    Infinite-horizon    DDP’s                     3123
     3.5.    The identification        problem                                                           3125
4.   Empirical          applications                                                                    3130
     4.1.    Optimal     replacement        of bus engines                                              3130
     4.2.    Optimal     retirement      from a firm                                                    3134
References                                                                                              3139




   *This is an abridged version of a monograph,    Stochastic Decision Processes: Theory, Computation,
and Estimation written for the Leif Johansen lectures at the University of Oslo in the fall of 1991. I am
grateful for generous financial support from the Central Bank of Norway and the University of Oslo
and comments from John Dagsvik, Peter Frenger and Steinar Stram.



Handbook of Econometrics. Volume IV, Edited by R.F. Engle and D.L. McFadden
0 1994 Elsevier Science B. V. All rights reserved
3082                                                                                               John Rust




1.     Introduction

Markov decision processes (MDP) provide a broad framework                          for modelling
sequential decision making under uncertainty.              MDP’s have two sorts of variables:
state variables s, and control variables d,, both of which are indexed by time
t=0,1,2,3     ,..., T, where the horizon T may be infinity. A decision-maker             or agent
can be represented by a set of primitives (u, p, b) where u(s,, d,) is a utility function
representing      the agent’s preferences at time t, p(s,+ 1(s,, d,) is a Markov transition
probability     representing the agent’s subjective beliefs about uncertain future states,
and /3~(0,1) is the rate at which the agent discounts utility in future periods. Agents
are assumed to be rational: they behave according to an optimal decision rule
d, = 6(s,) that solves V,‘(s) = maxd E, { CT= o Fu(s,, d,)) s,, = s} where Ed denotes expec-
tation with respect to the controlled            stochastic process {st,d,) induced by the
decision rule 6. The method of dynamic programming provides a constructive proce-
dure for computing 6 using the valuefunction V,’ as a “shadow price” to decentralize
a complicated        stochastic/multiperiod      optimization     problem into a sequence of
simpler deterministic/static        optimization    problems.
    MDP’s have been extensively used in theoretical studies because the framework
is rich enough to model most economic problems involving choices made over time
and under uncertainty.’           A pplications   include the pioneering      work on optimal
inventory policy by Arrow et al. (1951), investment              under uncertainty    [Lucas and
Prescott (1971)] optimal intertemporal             consumption/savings      and portfolio selec-
tion under uncertainty         [Phelps (1962), Hakansson        (1970), Levhari and Srinivasan
(1969), Merton (1969) and Samuelson (1969)], optimal growth under uncertainty
[Brock and Mirman (1972), Leland (1974)], models of asset pricing [Lucas (1978),
Brock (1982)], and models of equilibrium              business cycles [Kydland      and Prescott
(1982), Long and Plosser (1983)]. By the early 1980’s the use of MDP’s had become
widespread in both micro- and macroeconomic                   theory as well as in finance and
operations research.
    In addition to providing a normative            theory of how rational agents “should”
behave, econometricians          soon realized that MDP’s might provide good empirical
models of how real-world decision-makers             actually behave. Most data sets take the
form {dT,sy) where d; is the decision and s; is the state of an agent a at time t.2
Reduced-form        estimation    methods can be viewed as uncovering            agents’ decision


   ‘Stochastic   control theory can also be used to model “learning” behavior in which agents update
beliefs about unobserved       stae variables and unknown      parameters    of the transition  probabilities
according to the Bayes rule.
   ‘In time-series data, a is fixed at 1 arid t ranges over 1,. , T. In cross-sectional  data sets, T is fixed
at 1 and a ranges over 1,. ., A. In panel data sets, t ranges over 1,. ., T.. where T, is the number of
periods agent a is observed (possibly different for each agent) and a ranges over 1,. , A where A is
the total number of agents in the sample.
Ch. 51: Structural   Estimation   ofMarkov   Decision Processes                                     3083


rules or, more generally, the stochastic process from which the realizations {df, $‘}
were “drawn”, but are generally independent of any particular behavioral theory.3
This chapter focuses on structural estimation of MDP’s under the maintained
hypothesis that {d;, ST}is a realization of a controlled stochastic process. In addition
to uncovering the form of this stochastic process (and the associated decision rule
6), structural methods attempt to uncover (estimate) the primitives (u,p,B) that
generated it.
    Before considering whether it is technically possible to estimate agents’ preferences
and beliefs, we need to consider whether this is even logically possible, i.e. whether
(u,p,fi) is identified. I discuss the identification problem in Section 3.5, and show
that the question of identification depends on what type of data we have access to
(i.e. experimental vs. no&experimental), and what kinds of a priori restrictions we
are willing to impose on (u, p, p). If we only have access to non-experimental data
(i.e. uncontrolled observations of agents “in the wild”), and if we are unwilling to
impose any prior restrictions on (u, p, j?) beyond basic measurability and regularity
conditions on u and p, then it is impossible to consistently estimate (u, p, b), i.e. the
class of all MDP’s is non-parametrically unidentified. On the other hand, if we are
willing to restrict u and p to a finite-dimensional parametric family, say {U= u,, p =
psi 13~0 c RK}, then the primitives (u,p, /?) are identified (generically). If we are
willing to impose an even stronger prior restriction, stationarity and rational expec-
tations (RE), then we only need parametric restrictions on u in order to identify
(u,p,fl) since stationarity and the RE hypothesis allow us to use non-parametric
methods to consistently estimate agents’ subjective beliefs from observations of their
past states and decisions. Given that we are already imposing strong prior assump-
tions by modelling agents’ behavior as an optimal decision rule to an MDP, it would
be somewhat schizophrenic to be unwilling to impose any additional prior restric-
tions on (u, p, /3). In the sequel, I assume that the econometrician is willing to bring
to bear prior knowledge in the form of a parametric representation for (u, p, /?).This
reduces the problem of structural estimation to the technical issue of estimating a
parameter vector BE0 where 0 is a compact subset of RK.
   The appropriate econometric method for estimating 8 depends critically on
whether the control variable d, is continuous or discrete. If d, can take on a
continuum of possible values we say that the MDP is a continuous decision process
(CDP), and if d, can take on a finite or countable number of values then the MDP
is a discrete decision process (DDP). The predominant estimation method for CDP’s
is generalized method of moments (GMM) using the first order conditions from the
MDP problem (stochastic Euler equations) as orthogonality conditions [Hansen
(1982), Hansen and Singleton (1982)]. Hansen’s chapter (this volume) and Pakes’s
(1994) survey provide excellent introductions to the literature on structural estima-
tion methods for CDP’s.

  ‘For an overview     of this literature,see Billingsley(1961), Chamberlain   (1984), Heckman   (1981a),
Lancaster   (1990) and Basawa and Prakasa Rao (1980).
3084                                                                                 John Rust


   Thus chapter focuses on structural estimation of DDP’s. DDP’s are appropriate
for decision problems such as whether not to quit a job [Gotz and McCall (1984)],
search for a new job [Miller (1984)], have a child [Wolpin (1984)-J, renew a patent
[Pakes (1986)], replace a bus or airplane engine [Rust (1987), Kennet (1994)] or
retire a cement kiln [Das (1992)]. Although most of the early empirical applications
of DDP’s have been for binary decision problems, this chapter shows that most of
the estimation    methods extend naturally       to DDP’s with any finite number of
possible decisions. Examples of multiple choice DDP’s include Rust’s (1989, 1993)
model of retirement behavior where workers decide each period whether to work
full-time, work part-time, or quit, and whether or not to apply for Social Security,
and Miller’s (1984) multi-armed-bandit      model of occupation choice.
    Since the control variable in a DDP model assumes at most a finite number of
possible values, the optimal decision rule is determined by the solution to a system
of inequalities rather than as a zero to a first order condition. As a result there is no
analog of stochastic Euler equations to serve as orthogonality       conditions for GMM
estimation of 8 as in the case of CDP’s. Instead, most structural estimation methods
for DDP’s require explicit calculation     of the optimal decision rule 6, typically via
numerical methods since analytic solutions for 6 are quite rare. Although we also
discuss simulation estimators that rely on Monte Carlo simulations of the controlled
stochastic process {st, d,} rather than on explicit numerical calculation         of 6, all of
these methods can be conceptualized       as forms of nonlinear regression that search
for an estimate 8 whose implied decision rule d, = 6(s,, 6) “best fits” the data {d:, s;}
according to some metric. Unfortunately       straightforward    application    of nonlinear
regression methods is not possible due to three complications:          (1) the “dependent
variable” d, is discrete rather than continuous;         (2) the functional    form of 6 is
generally not known a priori but rather must be derived from the solution to the
stochastic control problem; (3) the “error term” E, in the “regression function” 6 is
typically multi-dimensional     and enters in a non-additive,      non-separable     fashion:
d, = 6(x,, s,, 0).
   The basic motivation for including an error term in the DDP model is to obtain
a “statistically non-degenerate”    econometric model. The degeneracy of DDP models
without error terms is due to a basic result of MDP theory reviewed in Section 2:
the optimal decision rule 6 is a deterministic       function of the state s,. Section 3.1
offers several possible interpretations     for the error terms in a DDP model, but
argues that the most natural and internally consistent interpretation         is that E, is an
unobserved      state variable. Under this interpretation,     we partition    the full state
variable s, = (x,, E,) into a subvector x, that is observed by the econometrician,        and
a subvector E, that is observed only by the agent. If we are willing to impose two
additional restrictions on u and p, namely, that E, enters u in an additive separable
(AS) fashion and that p satisfies a conditional     independence    (CI) condition, we can
apply a number of powerful results from the literature            on estimation      of static
discrete choice models [McFadden          (1981, 1984)] to yield estimators        of 0 with
desirable asymptotic properties. In particular, the ASCI         assumption     allows us to
Ch. 51: Structural Estimation of Markou Decision Processes                           3085


“integrate out” E, from the decision rule 6, yielding a non-degenerate system of
conditional choice probabilities P(d,l x,, 0) for estimating 8 by the method of maxi-
mum likelihood. Under the further restriction that {E,} is an IID extreme value
process we obtain a dynamic generalization of the well-known multinomial logit
model,

                                                                                    (1.1)

As far as estimation is concerned, the main difference between the static and
dynamic logit models is the interpretation of the uOfunction: in the static logit model
it is a one period utility function that is typically specified as a linear-in-parameters
function of 13,whereas in the dynamic logit model it is the sum of a one period utility
function plus the expected discounted utility in all future periods. Since the func-
tional form of ugin DDP is generally not known a priori, its values must be computed
numerically for any particular value of 8. As a result, maximum likelihood estima-
tion of DDP models requires a “nested numerical solution algorithm” consisting of
an “outer” optimization algorithm that searches over the parameter space 0 to
maximize the likelihood function and an “inner” dynamic programming algorithm
that solves (or approximately solves) the stochastic control problem and computes
the choice probabilities P(dl x, 6) and derivatives aP(dI x, @/a0 for each trial value
of 8. There are a number of fast algorithms for solving finite- and infinite-horizon
stochastic control problems, but space constraints prevent more than a cursory
discussion of the main methods in this chapter.
    Section 3.3 presents other econometric specifications for the error term that allow
E,to enter u in a nonlinear, non-additive fashion, and, also, specifications with more
complicated patterns of serial dependence in {E,}than is allowed by the CI assump-
tion. Section 3.4 discusses the simulation estimator proposed by Hotz et al. (1993)
that avoids the computational burden of the nested numerical solution methods,
and the associated “curse of dimensionality”, i.e. the exponential rise in the amount
of computer time/space required to solve a DDP problem as its “size” (measured
in terms of number of possible values the state and control variables can assume)
increases. However, the curse of dimensionality also has implications for the “data”
and “estimation” complexity of a DDP model: as the size (i.e. the level of realism
or detail) of a DDP model increases, the amount of data needed to estimate the
model with an acceptable degree of precision increases more than proportionately.
The problems are most severe for estimating beliefs, p. Subjective beliefs can be very
slippery, high-dimensional objects to estimate. Since the optimal decision rule 6 is
generally quite sensitive to the specification of p, an innaccurate or inconsistent
estimate of p will contaminate the estimates of u and /I. Even under the assumption
of rational expectations (which allows us to estimate p non-parametrically), the
number of observations required to calculate estimates of p of specified accuracy
increases exponentially with the number of state and control variables included in
the model. The simulation estimator is particularly data-dependent in that it requires
3086                                                                                         John Rust


 accurate non-parametric        estimates of agents’ conditional       choice probabilities        P as
 well as their beliefs p.
    Given all the difficulties involved in structural            estimation,     the reader might
 wonder why not simply estimate agents’ conditional                choice probabilities       P using
 simpler flexible parametric        and non-parametric       estimation      methods. Of course,
 reduced-form methods can be used, and are quite useful for initial exploratory data
 analysis and judging whether more tightly parameterized                   structural    models are
 misspecified. Nevertheless       there is considerable     interest in structural        estimation
 methods for both intellectual and practical reasons. The intellectual reason is that
 structural estimation      is the most direct way to assess the empirical validity of a
 specific MDP model: in the process of solving, estimating, and testing a particular
 MDP model we learn not only about the data, but the detailed implications                       of the
 theory. The practical motivation          is that structural      models can generate more
 accurate predictions of the impacts of policy changes than reduced-form                      models.
 As Lucas (1976) noted, reduced-form          econometric techniques can be thought of as
 uncovering the form of an agent’s historical decision rule. The resulting estimate 8
 can then be used to predict the agent’s behavior in the future, provided that the
 environment    is stationary. Lucas showed that reduced-form estimates can produce
 very misleading forecasts of the effects of policy changes that alter the stochastic
environment     that agents will face in the future. 4 The reason is that a policy CI(such
 as government     rules for payment of Social Security or welfare benefits) can affect
an agent’s preferences, beliefs and discount factor. If we denote the dependence of
primitives on policy as (u,,~~,fiJ, then under a new decision rule ~1’the agent’s
behavior will be given by a new decision rule 6(u,., pa,, /?,,) rather than the historical
decision rule 6(u,,pa, fi,). Unless there has been a lot of historical variation                     in
policies a, reduced-form models won’t be able to estimate the independent                     effect of
CYon 6, and, therefore, we won’t be able to predict how agents will react to a
hypothetical    policy Co. However if we are able to parameterize               the way in which
policy affects the primitives, (ub, pb, fi,), then it is a typically straightforward         exercise
to compute the new decision rule a(~,,, p,,, b,,) for a hypothetical             policy a’.
    One can push this line of argument only so far, since its validity depends on. the
assumption     that agents really are rational expected-utility              maximizers      and the
structural model is correctly specified. If we admit that a tightly parameterized
structural model is at best an abstract and approximate               representation       of reality,
there is no reason why a structural model necessarily yields more accurate forecasts
than reduced-form models. Furthermore,            because of the identification        problem it is
possible that we could have a situation where two distinct sets of primitives fit an
historical data set equally well, but yield very different predictions about the impact
of a hypothetical     policy. Under such circumstances          there is no objective basis for
choosing one prediction over another, and we may have to go to the expense of

   “The limitations of reduced-form models have also been pointed out in an earlier paper by Marschak
(1953), although his exposition pertained more to the static econometric  model> of that period. These
general ideas can be traced back even further to the work of Haavelmli (1944) and others at the Cowles
Commission.
Ch. 51: Structural Estimation of Markov Decision Processes                                          3087


conducting a controlled experiment to help identify the primitives and predict the
impact of a new policy u’.~ In spite of these problems, the final section of this chapter
provides some empirical applications           that demonstrate the ability of simple struc-
tural models to make much more accurate predictions of the effects of various policy
changes than reduced-form         models.
    Readers who are familiar with the theory of stochastic control are free to skip the
brief review of theory and solution methods in Section 2 and move directly to the
econometric implementation         of the theory in Section 3. A general observation about
the current state of the art in this literature is that, while it is easy to formulate very
general and detailed MDP’s, Bellman’s “curse of dimensionality”              implies that our
ability to actually solve and estimate these problems is much more limited.6 How-
ever, recent research [Rust (1995b)] shows that use of random                   Monte Carlo
integration    methods does succeed in breaking the curse of dimensionality             for the
subclass of DDP’s. This result offers the promise that fairly realistic and detailed
DDP models will be estimable in the near future. The approach of this chapter is
to start with a presentation       of the general theory of MDP’s and then show how
various restrictions on the general theory lead to subclasses of econometric models
that are feasible to estimate.
    The first general restriction is to exclude MDP’s formulated in continuous             time.
 Although many of the results described in Section 3 can be generalized to continuous-
 time semi-Markov        processes [Ahn (1993b)], there has been little progress on
extending     the theory to cover other types of continuous-time              objects such as
 controlled diffusion processes. The rationale for using discrete-time models is that
 solutions to continuous-time       problems can be arbitrarily closely approximated          by
solutions to corresponding        discrete-time versions of the problem [cf. Gihman and
 Skorohod (1979, Chapter 2.3) van Dijk (1984)]. Indeed the standard approach to
 solving continuous-time     stochastic control problems involves solving an approximate
version of the problem in discrete time [Kushner (1990)].
    The second restriction is implicit in the theory of stochastic control, namely the
assumption      that agents conform to the von NeumannMorgenstern                   axioms for
choice under uncertainty so that their preferences can be represented by the expected
value of a cardinal utility function. A number of experiments have indicated that
human decision-making          under uncertainty     may not always be consistent with the
von Neumann-Morgenstern              axioms. ’ In addition, expected-utility    models imply
that agents are indifferent about the timing of the resolution of uncertain events,
whereas human decision-makers            seem to have definite preferences over the time at
which uncertainty is resolved [Kreps and Porteus (1978), Chew and Epstein (1989)].
The justification for focusing on expected utility is that it remains the most tractable

   5Experimental   data are subject to their own problems, and it would be a mistake to think of
controlled experiments as the only reliable way to predict the response to a new policy. See Heckmail
(1991, 1994) for an enlightening   discussion of some of these limitations.
   6See Rust (1994, Section 2) for a more detailed discussion of some of the problems faced in estimating
MDP’s.
   ‘Machina   (1982) identifies the “independence   axiom” as the source of many of the discrepancies.
                                                                                                       John Rust
3088


framework     for modelling  choice under uncertainty.8     Furthermore,    Section 3.5
shows that, from an econometric       standpoint,  the expected-utility  framework    is
sufficiently rich to model virtually any type of observed behavior. Our ability to
discriminate    between expected utility and the more subtle non-expected-utility
theories of choice under uncertainty    may require quasi-econometric    methods such
as controlled experiments.’



2.     Solving MDP’s via dynamic programming:                     A brief review

This section reviews the main results on dynamic programming      in finite-horizon
problems, and the functional  equations    that must be solved in infinite-horizon
problems. Due to space constraints     I only give a cursory outline of the main
numerical methods for solving these functional equations, referring the reader to
Puterman (1990) or Rust (1995a, 1996) for more in-depth surveys.

Dejnition     2.1

A (discrete-time)       Markovian       decision     process consists       of the following       objects:

l    A time index te{O, 1,2 ,..., T},      T < 00;
l    A state space S;
l    A decision space D;
l    A family of constraint sets (Dt(st) G D};
l    A family of transition probabilities      {pt+ l(.Is,, ~&):54?‘(S)=-[0, 11);”
l    A family of discount functions {bt(s,, d,) > 0} and single period utility functions
     {u,(s,, d,)} such that the utility functional U has the additively separable decom-
     position’ ’


                                                                                                              (2.1)


   ‘Recent     work by Epstein and Zin (1989) and Hansen and Sargent (1992) on models with
non-separable,     non-expected-utility    functions shows that certain specifications       are computationally
and analytically     tractable. Epstein and Zin have already used their specification         of preferences in an
empirical    investigation      of asset pricing.   Despite    these promising    beginnings,    the theory     and
computational      methods for these more general problems            are in their infancy, and due to space
constraints,   we are unable to cover these methods in this survey.
   9An example of the ability of laboratory          experiments    to uncover discrepancies      between human
behavior and the predictions of expected-utility        theory is the “Allias paradox” described in Machina
(1982, 1987).
   ‘“3’(S) is the Bore1 a-algebra of measurable subsets of s. For simplicity, the rest of this chapter avoids
measure-theoretic       details since they are superfluous    in the most commonly encountered           case where
both the state and control variables are discrete. See Rust (1996) for a statement                 of the required
regularity conditions for problems with continuous          state and control variables.
   t ’ The boldface notation denotes sequences: s = (sc,. , sT).Also, define fI,~~lO~j(sj, dj) = 1 in formula
(2.1).
Ch. 51: Structural Estimation   ofMar-kmDecision Processes                                     3089


The agent’s optimization     problem is to choose             an optimal       decision   rule 6* =
(6,,  ,6,) to solve the following problem:

          max      Ed{ U(s, d)}.                                                               (2.2)
       d=(du,....SZ-)


2.1.    Finite-horizon dynamic programming             and the optimality of
        Markovian decision rules

In finite-horizon  problems (T < co), the optimal decision rule S* = (S,‘, . . , iif) can
be computed by backward induction starting at the terminal period, T. In principle,
the optimal decision at each time t can depend not only on the current state s,, but
on the entire previous history of the process, d, = sT(.s,, H,_ 1) where H, = (so, d,, . . . ,
s,_ 1,A,_ 1). However in carrying out the process of backward induction it is easy to
see that the Markovian    structure of p and the additive separability of U imply that
it is unnecessary to keep track of the entire previous history: the optimal decision
rule depends only on the current time t and the current state s,: d, = ST(s,). For
example, starting in period T we have

       S,(H,-    1,   4 = argmaxWf,-          1,   Q-, 4-h                                     (2.3)


where U can be rewritten           as




From (2.4) it is clear that previous history H,_ 1 does not affect the optimal decision
of d, in (2.3) since d, appears only in the final term ur(sr, dT) on the right hand side
of (2.4). Since the final term is affected by H,_ 1 only by the multiplicative    discount
factor nT:,i Bj(sj, dj), it’s clear that 6, depends only on sr. Working backwards
recursively, it is straightforward    to verify that at each time t the optimal decision
rule 6, depends only on s,. A decision rule that depends on the past history of the
process only via the current state s, is called Markovian. Notice also that the optimal
decision rule will generally be a deterministic     function of s, because randomization
can only reduce expected utility if the optimal value of d, in (2.3) is unique. This is
a generic property, since if there are two distinct values of dED,(S,)      that attain the
maximum in (2.3) by a slight perturbation        of U, we obtain a similar model where
the maximizing value is unique.
   The valuefunction is the expected discounted value of utility over the remaining
3090                                                                              John Rust


horizon assuming an optimal policy is followed in the future. The method of
dynamic programming       calculates the value function and the optimal policy recur-
sively as follows. In the terminal period VF and SF are defined by

        6$)   = axmax u&-, 44,                                                        (2.5)
                  dTdk(sT)


       VF(s,) =     max t+(s,, dT).                                                   (2.6)
                  dTEDT(sT)

In periods    t = 0,. . . , T - 1, VT and ST are recursively   defined by




It’s straightforward    to verify that at time t = 0 the value function V:(Q) represents
the conditional     expectation   of utility over all future periods. Since dynamic pro-
gramming has recursively generated the optimal decision rule 6* = (S,‘, . . . , SF), it
follows that

       Vi(s) = maxE,{        U(&J)/s,   = s}.                                         (2.9)
                s

These results can be formalized          as follows.

Theorem 2.1

Given an MDP that satisfies certain weak regularity conditions           [see Gihman and
Skorohod (1979)],
   1. An optimal, non-randomized         decision rule 6* exists,
  2. An optimal decision rule can be found within the subclass of non-randomized
      Markovian     strategies,
  3. In the finite-horizon     case (T < co) an optimal decision rule 6* can be computed
      by backward induction according to the recursions (2.5), . . . , (2.8),
  4. In the infinite-horizon     case (T = co) an optimal decision rule 6* can be approxi-
      mated arbitrarily      closely by the optimal decision rule Sg to an N-period
      problem in the sense that

       lim Ed, { U,(S, a)} = 1’im sup Ed{ U,(S, a)} = sup Ed{ U(S, a)}.             (2.10)
       N-m    N                  N+m    6                  6
Ch. 51: Structural Estimation ofMarkov Decision Processes                              3091


2.2.    Infinite-horizon dynamic programming and Bellman’s equation

Further simplifications      are possible in the case of stationary    MDP’s In this case
the transition   probabilities    and utility functions are the same for all t, and the
discount functions &(s,, d,) are set equal to some constant /?E[O, 1). In the finite-
horizon case the time homogeneity            of u and p does not lead to any significant
simplifications  since there still is a fundamental   non-stationarity   induced by the fact
that remaining utility C~_/Iju(sj, dj) depends on t. However in the infinite-horizon
case, the stationary    Markovian      structure of the problem implies that the future
looks the same whether the agent is in state s, at time t or in state s,+~ at time t + k
provided that s, = s, + k. In other words, the only variable which affects the agent’s
view about the future is the value of his current state s. This suggests that the optimal
decision rule and corresponding        value function should be time invariant, i.e. for all
t 3 0 and all ES, 6?(s) = 6(s) and V:(s) = V(s). Analogous             to equation (2.7), 6
satisfies


       6(s) = argmax   u(s, d) + p V(s’)p(ds’l s, d)                                 (2.11)
                dsDW [            .f                 1’

where V is defined recursively       as the solution   to Bellman’s equation,


       V(s) = max U(S,d) + p V(s’)p(ds’ 1s, d)                                       (2.12)
              d..,G[        s                  1’

It is easy to see that if a solution to Bellman’s equation exists, then it must be unique.
Suppose that W(s) is another solution to (2.12). Then we have


       I V(s)- W(s)1< B max I V(s’) - W(s’)Ip(ds’I s, d)
                          s dsD(s)
                     <j?supIV(s)-       W(s)/.                                       (2.13)
                           SE.7



Since 0 < fi < 1, the only solution      to (2.13) is SUP,,~ I V(s) - W(s)/ = 0.



2.3.   Bellman’s equation, contraction mappings and optimality

To establish the existence of a solution to Bellman’s equation,          assume for the
moment the following regularity conditions:         (1) u&d) is jointly continuous  and
bounded in (s, d), (2) D(s) is a continuous correspondence.  Let C(S) denote the vector
space of all continuous,     bounded functions f: S -+ R under the supremum norm,
Ilf 1)= sup,,s If(s)/. Then C(S) is a Banach space, i.e. a complete normed linear
3092                                                                                                John Rust


space. l2 Define an operator          r: C(S) -+ C(S) by


                                               W(s’)p(ds’    Is,
                                                              d)                                           (2.14)


Bellman’s     equation    can then be rewritten            in operator   notation      as

        v = l-(V),                                                                                         (2.15)

i.e. V is a fixed point of the mapping r. Using an argument                         similar   to (2.13) it is
easy to show that given any I’, WEC(S) we have

        IIWY-mw              GBIIV-w.                                                                      (2.16)

An operator      that satisfies inequality       (2.16) for some /?E(O, 1) is said to be a contraction
mapping.

Theorem 2.2. (Contraction            mapping theorem)

If I- is a contraction     mapping        on a Banach space B, then I- has a unique              fixed point
V.

   The uniqueness of the fixed point can be established by an argument similar to
(2.13). The existence of a solution is a result of the completeness of the Banach space
B. Starting from any initial element of B (such as 0), the contraction    property (2.16)
implies that the following sequence of successive approximations        forms a Cauchy
sequence in B:

        (0, r(o), r2(o), P(o),    . . . , r”(o), . . .}.                                                   (2.17)

Since the Banach space B is complete, the Cauchy sequence converges to a point
VEB, so existence follows by showing that V is a fixed point of r. To see this, note
that a contraction r is (uniformly) continuous, so

        V = lim r"(o)
                    = lim r[rn-l(0)]
                                  = r(v),                                                                  (2.18)
            “+LZ      “‘ao

i.e. V is indeed the required fixed point of r.
    We now show that given the single period decision rule 6 defined in (2.11) the
stationary, infinite-horizon   policy 6* = (6,6,. . .) does in fact constitute an optimal
decision rule for the infinite-horizon    MDP. This result follows by showing that
the unique solution V(s) to Bellman’s equation coincides with the optimal value

   “A    space B is said to be complete    if every Cauchy    seuence in B converges    to a point in B.
Ch. 51: Structural Estimation of Markov Decision Processes                                      3093


function     Vz defined by


      V:(s) = my E,           f    ~u(s~, dt)lso = s .                                        (2.19)
                             t=o

Consider approximating   the infinite-horizon               problem   by the solution   to a finite-
horizon problem with value function


      V,‘(s)= maxE,
                   d
                         i
                             f
                             t=o
                                   ~u(s,, d,) 1so = s
                                                        I
                                                        .



Since u is bounded and continuous,       CT= o /Y&, d,) converges to C,“=, p’u(s,, d,) for
any sequences s = (so, sr, . .) and d = (do, d,, . . .). Theorem 2.1(4) implies that for each
SE& V:(s) converges to the infinite-horizon        value function V;(s):

      lim V,‘(s) = V;(s)              vses.                                                   (2.21)
      T-02


But the contraction mapping theorem also implies that this same sequence converges
to V (since V,‘= rT(0)), so V = I/F. Since V is the expected present discounted
value of utility under the policy 6* (a result we demonstrate      in Section 2.4), the fact
that V = Vz immediately implies the optimality of 6*.
    A similar result can be proved under weaker conditions         that allo)v u(s,d) to be
an unbounded      function of the state variable. As we will see in Section 3, unbounded
utility functions arise in DDP problems as a consequence of assumptions          about the
distribution   of unobserved state variables. Although the contraction      mapping theo-
rem is no longer directly applicable, one can prove the following result, a generaliza-
tion of Blackwell’s theorem, under a weaker set of regularity conditions that allows
for unbounded      utility.

Theorem 2.3 (Blackwell’s           theorem)

Given an infinite-horizon,   time homogeneous      MDP that satisfies certain regularity
conditions [see Bhattacharya     and Majumdar (1989)];
   1. A unique solution V to Bellman’s equation (2.12) exists, and it coincides with
      the optimal value function defined in (2.19),
  2. There exists a stationary,    non-randomized,    Markovian     optimal control 6*
      given by the solution to (2.1 l),
   3. There is an optimal non-randomized,      Markovian   decision rule 6* which can
      be approximated      by the solution 6 z to an N-period problem with utility
      function U,(s, d) = C;“_ o B’U(%do:

      lim Eg* { U,(F, (7)) = 1’rm sup E6{ U&,2))              = sup E,(U(Z, 2)) = Ed*{ U(s’, ai>.
     N-rm      N                    N-m       6                   6

                                                                                              (2.22)
3094                                                                                           John Rust


2.4.A geometric series representation for MDP's

 Presently, the most commonly used solution procedure for MDP problems involves
 discretizing continuous      state and control variables into a finite number of possible
 values. This resulting class of finite state DDP problems has a simple and beautiful
 algebraic structure that we now review. r3 Without loss of generality we can identify
 the state and decision spaces as finite sets of integers { 1,. . . , S} and { 1,. . . , D},and
 the constraint    set as { 1,. . . , D(s)}
                                          where for notational    simplicity we now let S, D
 and D(s)   denote positive integers rather than sets. It follows that a feasible stationary
 decision rule 6 is an S-dimensional        vector satisfying ME{ 1,. . . , D(s)},s= 1,. . . , S,
 and the value function V is an S-dimensional             vector in the Euclidean space RS.
 Given 6 we can define a vector u,ER~whose ith component is u[i, d(i)], and an S x S
 transition probability matrix E, whose (i, j) element is p[ilj, S(j)] = Pr { st+ 1 = iIs, =
j, d, = S(j)}. Bellman’s equation for a DDP reduces to


       T(V)(s) =     max
                   l<d<D(s)   [
                                  a(s, d) + P s:
                                             s’=   1
                                                       W’)P(S’l   s, 4
                                                                         1.                        (2.23)


Given a stationary,   Markovian    decision rule 6, we define I/,eRS  as the vector of
expected discounted utilities under policy 6. It is straightforward to show that V, is
the solution to a system of linear equations,




which can be solved by matrix inversion:



         = [Z - BEa] - lU6
         = U6 + BE@, + p2zgu, + p3E,3U,+ . . .                                                    (2.25)

The last equation in (2.25) is simply a geometric series expansion for V, in powers
of /3 and E,. As is well known, Ey = (EJNis simply the N-stage transition probability
matrix, whose (i,j) element equals Pr { s, +N = i (s, = j, S}, where the presence of 6 as
a conditioning        argument denotes the fact that all intervening    decisions satisfy
dt+j=6(st,.j),    j=O ,..., N. Since j?NEy~,  is the expected discounted utility received
in period N under policy 6, formula (2.25) can be thought of as a vector generaliza-
tion of a geometric series, showing explicitly how V, equals the sum of expected
discounted     utilities under 6 in all future periods.14 Since Ed"is a transition    pro-
bability matrix (i.e. all elements are between 0 and 1, and its rows sum to unity), it

   13The geometric representtion     also holds for continous state MDP’s, but in infinite-dimensional
space instead of R”.
   “‘As Lucas (1978) notes, “a little knowledge of geometric series goes a long way”.
Ch. 51: Structural   Estimation   of Markov   Decision Processes                                3095


follows that lim,,, BNEr = 0, guaranteeing the invertibility of [I-                  /?EJ for any
Markovian decision rule 6 and all BE[O, 1).i5


2.5.    Overview of solution methods

This section provides a brief review of solution methods for MDP’s. For a more
extensive review we refer the reader to Rust (1995a).
   The main solution method for finite-horizon MDP’s is backward recursion,
which has already been described in Section 2.1. The amount of computer time/
space required to solve a problem increases linearly in the length of the horizon T
and quadratically in the number of possible state variables S, the latter result being
due to the fact that the main work involved in dynamic programming is calculating
the conditional expectation of future utility, which requires multiplying an S x S
transition matrix by the S x 1 value function.
   In the infinite-horizon case there are a variety of solution methods, most of which
can be viewed as different strategies for solving the Bellman functional equation.
The method of successive approximations which we described in Section 2.2 is
probably the most well-known solution method for infinite-horizon problems: it
essentially amounts to using the solution to a finite-horizon problem with a large
horizon T to approximate the solution to the infinite-horizon problem. In certain
cases we can significantly accelerate successive approximations by employing the
McQueen-Porteus           error bounds,

       rk( v) + _bke< I/* < rk( v) + 6,e,                                                    (2.26)

where V* is the fixed point to T,e denotes an S x 1 vector of l’s, and

       bk=~/(l-~)min[rk(V)-rk-l(V)],
       5,‘= p/(1 - p) max[r         “(v) - r”-‘(v)].                                         (2.27)

The contraction property guarantees that bk and Ek approach each other geo-
metrically at rate /?. The fact that the fixed point V* is bracketed within these
bounds suggests that we can obtain an improved estimate of V* by terminating the
contraction iterations when 16, - _bkl< E and setting the final estimate of V* to be
the median bracketed value


                                       e.                                                    (2.28)

   151f there are continous state variables, the MDP problem still has the same representation as in
(2.23, except that E, is a Markov operator (a bounded, positive linear operator with norm equal to
1) instead of an S x S transition probability  matrix.
3096                                                                                     John Rust


Bertsekas (1987, p. 195) shows that the rate ofconvergence          of { pk;I>to V* is geometric
at rate p 1A, 1,where 1, is the subdominant      eigenvalue of E,.. In cases where II, I < 1,
the use of the error bounds can lead to significant speed-ups in the convergence of
successive approximations      at essentially no extra computational           cost. However in
problems where Ed* has multiple ergodic sets, I& I= 1, and the error bounds will
not lead to an appreciable       speed improvement         as illustrated     in computational
results in Table 5.2 of Bertsekas (1987).
   In relatively small scale problems (S < 10000) the method of policy iteration is
generally the fastest method for computing         V* and the associated optimal decision
rule S*, provided the discount factor is sufficiently large (fi > 0.95). The method
starts by choosing an arbitrary initial policy, &,.16 Next a policy valuation step is
carried out to compute the value function V,, implied by the stationary                  decision
rule 6,. This requires solving the linear system (2.25). Once the solution                  I’,, is
obtained, a policy improvement        step is used to generate an updated policy 6,,


       6,(s) = argmax [u(s, d) + p i            VdO(s’)p(s’Is, d)].                         (2.29)
              l<d<D(s)                s’=   1



Given 6,, one continues the cycle of policy valuation and policy improvement              steps
until the first iteration k such that 6, = 6, _ 1 (or alternatively  V,, = I’,,- ,). It is easy
to see from (2.25) and (2.29) that such a V,, satisfies Bellman’s equation (2.23), so
that by Theorem 2.3 the stationary       Markovian       decision rule 6* = 6, is optimal.
One can show that policy iteration always generates an improved policy:

       v,,3 v,,_    I’
                                                                                            (2.30)

Since there are only a finite number D(1) x ... x D(S) of feasible stationary Markov
policies, it follows that policy iteration always converges to the optimal decision
rule 6* in a finite number of iterations.
    Policy iteration is able to find the optimal decision rule after testing an amazingly
small number of trial policies 6,. However the amount of work per iteration is larger
than for successive approximations.          Since the number of algebraic operations
needed to solve the linear system (2.25) for I’,, is of order S3, the standard policy
iteration algorithm becomes impractical for S much larger than 10000.” To solve
very large scale MDP problems, it seems that the best strategy is to use policy
iteration, but to only attempt to approximately      solve for V, in each policy evaluation
step (2.25). There are a number of variants of policy iteration that avoid direct
numerical solution of the linear system in (2.25) including modified policy iteration


   160ne obvious choice is 6,(s) = argmax, < do .,,,[u(s, d)].
   “Supercomputers     using combinations  of vector processing and multitasking can now routinely
solve dense linear systems exceeding 1000 equations and unknowns in under 1 CPU second. See, for
example, Dongara and Hewitt (1986).
Ch. 51: Structural Estimation   of Markov Decision Processes                                   3097


[Puterman     and Shin (1978)], and adaptive state aggregation algorithms [Bertsekas
and Castafion (1989)].
   Puterman and Brumelle (1978, 1979) have shown that policy iteration is identical
to Newton’s method for computing a zero to a nonlinear function. This insight turns
out to be useful for computing       fixed points to contraction mappings   Y that are
closely related to, but distinct from, the contraction mapping I- defined by Bellman’s
equation (2.11). An example of such a mapping is Y: B + J3 defined by


       Y(u)(s, d) = u(s,d) + p                  1
                                             d’eD(s’)                  1
                                                        exp {v(s’, d’)} p(ds’( s, d).        (2.31)


In Section 3 we show that the fixed point to this mapping is identical to the value
function ug entering the dynamic logit model (1.1). Rewriting the fixed point condi-
tion as 0 = u - Y(U), we can apply Newton’s method, generating iterations of the
form

      a,‘+ 1 = uk - [I - ‘ul(O,)l - ‘(I - Y)(s),                                             (2.32)

where I denotes the identity matrix and Y’(u) is the gradient of Y evaluated at the
point UEB. An argument exactly analogous to the series expansion argument used
to proved the existence of [Z - /3Ed] - ’ can be used to establish that the matrix
[Z - Y’(u)] - 1 is invertible, so the Newton iterations are always well-defined. Given
a starting point u0 in a domain of attraction sufficiently close to the fixed point u*
of Y, the Newton iterations will converge to u* at a quadratic rate:

      IV,,,   - v*I<Klvk-            1/*i2                                                   (2.33)

for a positive constant K.
   Although Newton iterations yield rapid quadratic rates of convergence, it is only
guaranteed    to converge for initial estimates u,, in a domain of attraction     of u*
whereas the method of successive approximations       yields much slower linear rates
of convergence but are always guaranteed to converge to u* starting from any initial
point uO.l8 This suggests the following hybrid method or polyalgorithm:      start with
successive approximations,    and when the McQueen-Porteus       error bounds indicate
that one is sufficiently close to u*, switch to Newton iterations to rapidly converge
to the solution.
   There is another class of methods, which Judd (1994) has termed minimum
weighted residual (MWR) methods, that can be applied to solve general operator
equations of the form

      @(u*)= 0,                                                                              (2.34)

   “Newton’s    method does exhibit global convergence in finite state DDP problems due to the fadt
that Newton’s method and policy iteration are identical in this case, and policy iteration converges
from any starting point. Thus the domain of attraction in this case is all of R”.
3098                                                                                       John Rust


where @: B + B is a nonlinear operator on a potentially infinite-dimensional       Banach
space B. For example, Bellman’s equation is a special case of (2.34) for @(V) =
[I- r](V). Similar to policy iteration, Newton’s method becomes computationally
burdensome    in high-dimensional   problems. To avoid this, MWR methods attempt
to approximate the solution to (2.34) by restricting the search to a smaller-dimensional
subspace B, spanned by the basis elements {xi, x2,. . . , xN). It follows that we can
index any approximate     solution UEB, by a vector c = (c,, . . . , c,)ER~:

       u, = ClXl + ... + CNXN.                                                                (2.35)

Unless the true solution u* is an element of B,, @(u,) will generally be non-zero for
all vectors CERN. The MWR method computes an estimate uI of u* using a value of
e that solves

       e = argmin   1@(u,)\.                                                                  (2.36)
             CERN



 Variants of MWR methods can be obtained by using different subspaces B, (e.g.,
 Legendre or Chebyshev polynomials,            etc.) and different norms on Y(u,) (e.g., least
 squares or sup norm, etc.). In cases where B is an infinite-dimensional               space (which
 occurs when the DDP problem contains continuous                 state variables), one must also
 choose a finite grid of points over which the norm in (2.36) is evaluated.
    Although I have described MWR as parameterizing                   the value function in terms
 of a small number of unknown coefficients c, there are variants of this approach
 that are based on parameterizations            of other features of the stochastic control
 problem such as the decision rule 6 [Smith (1991)], or the conditional                 expectation
 operator E, [Marcet (1994)]. For simplicity, I refer to all these methods as MWR
even though there are important differences in their computational                implementation.
    The advantage of the MWR approach is that it converts the problem of finding
a zero of a high-dimensional        operator equation (2.34) into the problem of finding
a zero to a smaller-dimensional       minimization      problem (2.36). MWR methods may
be particularly    effective for solving DDP problems with several continuous                   state
variables, since straightforward       discretization    methods quickly run into the curse
of dimensionality.     However a disadvantage         of the procedure is the computational
burden of solving (2.36) given that I @(u,)I must be evaluated for each trial value of
c. Typically, one uses approximate         methods to evaluate 1@(u,)I, such as Gaussian
quadrature or Monte Carlo integration. Another disadvantage is that MWR methods
are non-iterative,   i.e. previous approximations       ui, ul,. . . , uN- 1 are not used to deter-
mine the next estimate uN. In practice, one must make do with a single approximation
UN,however there is no analog of the McQueen-Porteus                      error bounds to tell us
how far uN is from the true solution. Indeed, there are no general theorems proving
the convergence of MWR methods as the dimension N of the subspace increases.
There are also problems to be faced in cases where @ has multiple solutions V*, and
when the minimization         problem (2.36) has multiple local minima. Despite these
unresolved problems, versions of the MWR method have proved to be effective in a
Ch. 51: Structural Estimation of Markoo Decision Processes                                             3099


variety of applied problems. See, for example, Kortum (1993) (who has nested the
MWR solution of (2.35) in an estimation routine), and Bansal et al. (1993) who have
used Marcet’s method of parameterized expectations to generate stochastic simula-
tions of dynamic, stochastic models for use by their “non-parameteric simulation
estimator”.
   A final class of methods uses Monte Carlo integration to avoid the computational
burden of multivariate numerical integration that is the dominating factor that
limits our ability to solve DDP problems. Keane and Wolpin (1994) developed a
method that combines Monte Carlo integration and interpolation to dramatically
reduce the solution time for large scale DDP problems with continuous multi-
dimensional state variables. As we will see below, incorporation of unobservable
state variables Eimplies that DDP problems will always have these multidimensional
continuous state variables. Recently, Rust (1995b) has introduced a “random multi-
grid algorithm” using a random Bellman operator F that avoids the need for inter-
polation and repeated Monte Carlo simulations that is an inherent limiting future
of Keane and Wolpin’s method. Rust showed that his algorithm succeeds in breaking
the curse of dimensionality of solving the DDP problem -i.e. the amount of
computer time required to solve the DDP problem increases only polynomially
rather than exponentially with the dimension d of the state variables using Rust’s
algorithms. These new methods offer the promise that substantially more realistic
DDP models will be estimable in the near future.


3.   Econometric      methods for discrete decision processes

As we discussed in Section 1, structural estimation methods for DDP’s are funda-
mentally different from the Euler equation methods used to estimate CDP’s. Since
the control variable is discrete, we cannot differentiate to derive first order necessary
conditions characterizing the optimal decision rule 6* = (6,6,. . .). Instead each
component function 6(s) is defined by a finite number of inequality conditions: l9


      d&(s)-       I’d ED(S) u(s, d) + /Ii’ V*(s’)p(ds’ 1s, 6) 3 U(S,d’) + fi I’*(s’)p(ds’Is, d’) .
                 iTI                     s                                   s                   I
                                                                                                      (3.1)
Econometric methods for DDP’s borrow heavily from methods developed in the
literature on estimation of static discrete choice models.20 The primary difference
between estimation of static versus dynamic models of discrete choice is that agents’
choices are governed by the relative magnitude of the value function V rather than
the single period utility function u. Even if the functional form of the latter is

   “For notational simplicity, this section focuses on stationary   infinite-horizon    DDP problems and
ignores the distinction between the optimal policy 6* and its components         6* = (6,6,. .).
   “See McFadden       (1981, 1984) for excellent surveys of the huge literature on estimation    of static
discrete choice models.
3100                                                                                           John Rust


specified a priori, the value function is generally unknown,     although it can be
computed for any value of 8. To date, most empirical applications have used “nested
numerical solution algorithms” that compute the best fitting estimate I!?by repeated-
ly solving the dynamic programming     problem for each trial value of 9.


3.1.    Alternative     models of the “error term”

In addition to the numerical problems involved in computing the value function and
optimal decision rule, we face the problem of how to incorporate          “error terms” into
the structural model. Error terms are necessary in light of “Blackwell’s theorem”
(Theorem 2.3) that the optimal decision rule d = 6(s) is a deterministic          function of
the agent’s state s. Blackwell’s theorem implies that if we were able to observe all
components      of s, then a correctly specified DDP model would be able to perfectly
predict agents’ behavior. Since no theory is realistically capable of perfectly predict-
ing the behavior of human decision-makers,         there are basically four ways to recon-
cile discrepancies between the predictions of the DP model and observed behavior:
(1) optimization     errors, (2) measurement    errors, (3) approximation     errors, and (4)
unobserved state variables.‘l
   An optimization      error causes an agent who “intends” to behave according to the
optimal decision rule 6 to take an actual decision d given by

       d = 6(s) + r/,                                                                               (3.2)

where 9 is interpreted as an error that prevents the agent from correctly calculating
or implementing      the optimal action 6(s). This interpretation     of discrepancies   be-
tween d and 6(s) seems logically inconsistent:       if the agent knew that there were
random factors that lead to ex post discrepancies         between intended and realized
decisions, he would re-optimize taking these uncertainties into account. The resulting
decision rule will generally be different from the optimal decision rule 6 when
intended and realized decisions coincide. On the other hand, if q is simply a way
of accounting    for irrational or non-maximizing      behavior, it is not clear why this
behavior should take the peculiar form of random deviations                 from a rational
decision rule 6. Given these logical difficulties, we ignore optimization        errors as a
way of explaining discrepancies between d and 6(s).
   Measurement      errors, due to response or coding errors, must surely be acknowl-
edged in most empirical studies. Measurement        errors are usually much more likely
to occur in continuous       components  of s than in the discrete values of d, although
significant errors can occur in the latter as a result of classification          error (e.g.
defining workers as choosing to work full-time vs. part-time based on noisy measu-
rements of total hours of work). From an econometric            standpoint,    measurement

  ‘l Another method,     unobserved heterogeneity, can be regarded as a special case of unobserved  state
variables   in which certain components   of the state vector vary over individuals but not over time.
Ch. 51: Structural       Estimation   of Markoo   Decision Processes                        3101


errors in s create more serious difficulties since 6 is typically a nonlinear function
of s. Unfortunately,    the problem of nonlinear errors-in-variables          has not yet been
satisfactorily resolved in the econometrics       literature. In certain cases [Eckstein and
Wolpin (1989b) and Christensen and Kiefer (199 1b)], one can account for measure-
ment error in a statistically and computationally           tractable manner, although at the
present time this approach seems to be highly problem-specific.
   An approximation        error is .defined as the difference between the actual and
predicted decision, E = d - 6(s). This approach amounts to an up-front admission
that the DDP model is misspecified, and does not attempt to impose auxiliary
statistical assumptions      about the distribution      of E. The existence of such errors is
hard to deny since by their very nature DDP models are simplified, abstract
representations     of human behavior and we would never expect their predictions
to be 100% correct. Under this interpretation            the econometric    problem is to find
a specification (u, p, /I) that minimizes some metric of the approximation           error such
as mean squared prediction error. While this approach seems quite natural, it leads
to a “degenerate” econometric model and estimators with poor asymptotic proper-
ties. The approximation        error approach also suffers from ambiguity            about the
appropriate metric for determining whether a given model does or does not provide
a good approximation        to observed behavior.
   The final approach, unobserved state variables, is the subject of Section 3.2.


3.2.    Maximum likelihood estimation of DDP’s

The remainder       of this chapter focuses on structural          estimation  of DDP’s with
unobserved     state variables. In these models the state variable s is partitioned         into
two components        s = (x, E) where x is a state variable observed by both agent
and econometrician       and E is observed only by the agent. The existence of unobserved
state variables is quite plausible: it is unlikely that any survey could completely
record all information     that is relevant to the agent’s decision-making      process. It also
provides a natural way to “rationalize”           discrepancies   between observed behavior
and the predictions       of the DDP model: even though the optimal decision rule
d = 6(x, E)is a deterministic function, if the specification of unobservables is sufficiently
“rich” any observed (x, d) combination          can be explained as the result of an optimal
decision by an agent for an appropriate           value of E. Since E enters the decision rule
6 in a non-additive     fashion, it is infeasible to estimate 0 by nonlinear least squares.
The preferred method for estimating 0 is maximum likelihood using the conditional
choice probability,


       P(dlx) =          Z{d = b(x,.s)}q(dEjx),                                            (3.3)
                     s

where q(delx) is the conditional     distribution   of E given x (to be defined). Even
though 6 is a step function, integration    over E in (3.3) leads to a conditional choice
3102                                                                                                    John Rust


probabilty  that is a smooth function of 8 provided that the primitives (u, p, p) are
smooth functions of 0 and the DDP problem satisfies certain general properties
given in assumptions    AS and CI below. These assumptions      guarantee   that the
conditional  choice probability has “full support”:

       d@(x)-=P(d(x)         > 0,                                                                            (3.4)

which is equivalent    to saying that the set (&Id = 6(x, E)} has positive probability
under q(de) x). We say that a specification for unobservables       is saturated if (3.4) holds
for all possible values of 8. The problem with an unsaturated             specification is the
possibility that the DDP model may be contradicted              in a sufficiently large data
set: i.e. one may encounter observations        (x;,d;) which cannot be rationalized         by
any value of E or 8, i.e. P(d;)xf, 0) = 0 for all 0. This leads to practical difficulties
in maximum likelihood estimation,         causing the log-likelihood       function to “blow
up” when it encounters       a “zero probability”      observation.    Although one might
eliminate such observations     to achieve convergence, the impact on the asymptotic
properties of the estimator is unclear. In addition, an unsaturated         specification may
yield a likelihood function whose support depends on 0 or which may be a non-
smooth function of 8. Little is known about the general asymptotic properties of
these “non-standard”     maximum likelihood estimators.22
   Borrowing from the literature on static discrete choice models [McFadden (1981)]
we introduce two assumptions       that are sufficient to generate a saturated specifica-
tion for unobservables    in a DDP model.

Assumption AS

The choice sets depend only on the observed state variable x: D(s) = D(x). The
unobserved    state variable E is a vector with at least as many components as the
number of elements in D(x).~~ The utility function has the additively separable
decomposition

       u(s, d) = u(x, d) + c(d),                                                                             (3.5)

where c(d) is the dth component              of the vector E.

   22Result~ are available for certain special cases, such as Flinn and Heckman’s (1982) and Christensen
and Kiefer’s (1991) analysis of the job search model. If wages are measured without error, this model
generates the restriction that any accepted wage offer must be greater than the reservation wage (which
is an implicit function of 0). This imphes that the support of the likelihood function depends on 0,
resulting in a non-normal  limiting distribution    with certain parameters    converging faster than the fi
rate that is typical of standard    maximum      likelihood estimators.    The basic result is analogous        to
estimating the upper bound 0 of a uniform distribution       U[O, 01. The support of this distribution    clearly
depends f? and, as well known (Cox and Hinckley,              1974) the maximum        likelihood  estimator     is
B = max {x1,. , xAj, which converges at rate A to an exponential         limiting distribution.
   23For technical reasons E may have a number of superfluous components              so that we may formally
embed the E state vectors in a common state space e. For details, see Definition 3.1.
Ch. 51: Structural Estimation of Markov Decision Processes                                                       3103




   Figure   1. Pattern   of dependence   in controlled   stochastic   process   implied   by the CI assumption



Assumption       CZ

The transition        density for the controlled         Markov        process     {xt, Ed] factors as

      p(dx, + 1, ds, + 1 Ix,, E,,4 = G&t + 1Ix, + , Wx, + 1Ix,, 4,                                               (3.6)

where the marginal density of q(ds Ix) of the first 1D(x) ( components                         of E has support
equal to R tD(x)iand finite absolute first moments.
   CI is a conditional independence    assumption   which limits the pattern of depen-
dence in the {x,,E,} process in two ways. First, x,+ 1 is a sufficient statistic for E,+ 1
implying that any serial dependence       between E, and E,+ 1 is transmitted    entirely
through the observed state xt+ 1.24 Second, the probability density for x, + 1 depends
only on x, and not on E,. Intuitively,   CI implies that the (Ed} process is essentially
a noise process superimposed      on the main dynamics which are embodied by the
transition probability  n(dx’ lx, d).
   Under assumptions    AS and CI Bellman’s equation has the form

      V(x, E) = max [0(x, d) + c(d)],                                                                        (3.7)
                   deD(x)

where


                                 s
      $x,4 = 4x, 4 + B VY, &(d~l y)Wy Ix, 4.

Equation (3.8) is the key to subsequent results. It shows that the DDP problem has
                                                                                                             (3.8)



the same basic structure as a static discrete choice problem except that the value
function u replaces the single period utility function u as an argument               of the
conditional choice probability. In particular, AS-C1 yields a saturated specification
for unobservables:  (3.8) implies that the set {EJd = 6(x, E)} is a non-empty intersection
of half-spaces in RID@)‘, and since E is continuously       distributed    with unbounded
support, it follows that regardless of the values of (o(x,d)} the choice probability
P(dlx) is positive for each dED(x).
   In order to formally define the class of DDP’s, we need to embed the unobserved
state variables E in a common space E. Without loss of generality, we can identify
each choice set D(x) as the set of integers D(x) = { 1,. . . , ID(x)j}, and let the decision
space D be the set D = { 1,. . , supXGx (D(x)/}. Then we define E = RID’, and whenever

  241f q(dc)x) is dependent     of x then {E,} is an IID process      which is independent     of {xr}.
3104                                                                                    John Rust


1D(x)1 < 1D 1then q(ds 1x) assigns the remaining ID I- 1D(x) I “irrelevant”        components
of E equal to some arbitrary value, say 0, with probability     1.

Dejinition 3.1

A discrete decision process (DDP) is an MDP satisfying the following restrictions:
l The decision space D = { 1,. . . , su~,,~ ID(s) I ), where su~,,~ ID(s)I < 00.
l The state space S is the product       space S = X x E, where X is a Bore1 subset of
  RJ and E = RID’.
l For each SES and XEX we have D(s) = D(x) c D.

l The utility  function u(s, d) satisfies assumption        AS.
l The transition    probability   p(ds,+ 11s,, d,) satisfies assumption     CI.
l The component       q(dsl x) of the transition probability      p(ds1 s, d) is itself a product
  meaSure on R~-‘(x))x RlDl-IDfX)l whose first component              has support RIDCX)I     and
  whose second component is a unit mass on a vector of O’s of length 1D I - 1D(x) (.

 The conditional  choice probability  P(dl x) can be defined in terms of a function
McFadden (198 1) has called the social surplus,



       GC{4x,d),dWx)}Ixl=                 max [u(x, d) + .z(d)]q(de Ix).                    (3.9)
                                    s RIDI
                                         dsD(x)



If we think of a population  of consumers indexed by E, then G[ {u(x, d), deD(x)} Ix]
is simply the expected indirect utility of choosing alternatives    dED(x). G has an
important property, apparently first noted by Williams (1977) and Daly and Zachary
(1979), that can be thought of as a discrete analog of Roy’s identity.

Theorem 3.1

If q(dslx) has finite first moments, then the social surplus         function   (3.9) exists, and
has the following properties.
   1. G is a convex function of {u(x, d), deD(x)}.
   2. G satisfies the additivity property

       G[{u(x,d)   + a,dsD(x)}Ix]     = c( + G[{u(x,d),d~D(x)}Ix].                         (3.10)

    3. The partial derivative   of G with respect to u(x, d) equals the conditional       choice
       probability:

       aGC{u(x,d),d~D(x))Ixl =Ptd,xj.
                                                                                           (3.11)
             a 4x, 4
From the definition      of G in (3.9), it is evident that the proof of Theorem 3.1(3) is
simply an exercise      in interchanging     integration  and differentiation. Taking the
Ch. 51: Structural Estimation ofMarkov Decision Processes                                                   3105


partial   derivative      operator          inside the integral          sign we obtain25

      aGC{u(x,d),d~~(X)}IXl                            a{maxdeD(y)
                                                               Cub,4 + 441>                  q(dE,   x)




            autx,d)       =                                             a4x, 4
                                              =       Z{d = argmax [u(x,d’) + ~(dl)]}q(d~Ix)
                                                  s           d’sD(x)


                                              = P(dIx).                                                   (3.12)

Note that the additivity property (3.10) implies that the conditional      choice probabi-
lities sum to 1, so P(. (x) is a well-defined probability  distribution   over D(x).
    The fact that the unobserved     state variables E have unbounded      support implies
that the objective function in the DDP problem is unbounded.          We need to introduce
three extra assumptions      to guarantee the existence of a solution since the general
results for MDP’s given in Theorems 2.1 and 2.2 assumed that u is bounded above.

Assumption BU

For each dED(x), u(x,d) is an upper                       semicontinuous          function   of x with bounded
expectation:

      R(x) 3    F P’R,(x) < co,
               t=1



      4 +,(4 = max R,W(dy Ix, 4
                     dsD(x)   s



      R,(x) = max                 max I U(Y, 4         + 44   I NE       IMdy    Ix, 4.                   (3.13)
                 d&(x)            d’eD(y)



Assumption      WC

rr(dy 1x, d) is a weakly continuous   function of (x, d): for each bounded continuous
function h: X + R, s h(y)rc(dy)x, d) IS
                                     . a continuous   function of x for each dED(x).

Assumption BE

Let B be the Banach space of bounded, Bore1 measurable functions h: X x D --) R
under the essential supremum norm. Then UEB and for each DEB, E~EB, where Eh
is defined by


      Wx,d)=             GC(h(y,d),d~~(y))lyl~(dyIx,d).                                                   (3.14)
                     s
   Z5The interchange is justified by the Lebesgue dominated convergence theorem, since the derivative
ofmax ,,,,,[u(x,  d) + e(d)] with respect to u(x, d) is bounded (it equals either 0 or 1) for almost all E.
3106                                                                                            John Rust


Theorem        3.2

If {s,, d,} is a DDP satisfying AS, CI and regularity                 conditions   BU, WC and BE, then
the optimal decision rule 6 is given by

       6(x, E) = argmax [u(x, d) + c(d)],                                                          (3.15)
                         dfD(x)



where u is the unique             fixed point to the contraction         mapping    Y: B + B defined by



                                        s
       u’(u)(x,4 = 4x, 4 + P GC{u(y,d'), d’Wy)) lyl4dylx, 4.                                       (3.16)


Theorem        3.3

If {st, d,} is a DDP satisfying AS, CI and regularity conditions BU, WC and BE, then
the controlled process {x,, st} is Markovian     with transition probability

       Pr{dx r+i,d,+ilx,,dJ            =P(dt+llxt+l)n(dxt+llx,,d,),                                (3.17)

where the conditional              choice probability     P(dJx) is given by


       P(Qx)         =   aGC{u(x,d),d~D(x)}Ixl                                                     (3.18)
                                 ao(x,d)             ’

where G is the social surplus function defined in (3.9), and u is the unique                 fixed point
to the contraction  mapping Y defined in (3.16).

   The proofs of Theorems      3.2 and 3.3 are straightforward:     under assumption
ASCI the value function is the unique solution to Bellman’s equation given in (3.7)
and (3.8). Substituting the formula for I/ given in (3.7) into the formula for u given
in (3.8) we obtain


       u(x, d) = u(x, d) + /I           max CU(Y,d’) + M’)lq(d~Iyb(dy Ix, 4
                                       d’ED(y)

                 =Ukd)+B
                                    s GC(u(y,d’),d’~~(y)}Iyl~(dyIx,d).

The latter formula is the fixed point condition (3.16). It’s a simple exercise to verify
                                                                                                   (3.19)



that Y is a contraction       mapping, guaranteeing      the existence and uniqueness of the
function u. The fact that the observed components            {xf, d,} of the controlled process
{xt,et,d,} is Markovian        is a direct result of the CI assumption:      the observed state
x,+ 1 is a “sufficient statistic” for the agent’s choice d,, r. Without the CI assumption,
lagged state and control variables would be useful for predicting the agent’s choice
Ch. 51: Structural Estimation of Markoc Decision Processes                                                   3107


at time t + 1 and {xl, d,} will no longer be Markovian. As we will see, this observation
provides the basis for a specification test of CL
   For specific functional forms for q we obtain concrete formulas for the conditional
choice probability    P(dIx), the social surplus function G and the contraction      map-
ping Y. For example if q(ds(x) is a multivariate         extreme-value  distribution    we
havez6

      q(dsIx)=       fl      expC-&(d)+Y}expC-exp{-&(d)+y}l                               y G 0.577.       (3.20)
                   deD(x)



Then P(d(x) is given by the well-known                  multinomial logic formula


      P(d(x) = __~~
                          expf& 41                                                                         (3.21)
                C exp(+,d’)J
                  d’ED(x)



where u is the fixed point to the contraction                mapping       Y?


      Y(u)(x,    d) = U(X, d) + B                c
                                               d’4Ky)
                                                      exp {u(Y, 4     }
                                                                          1
                                                                          4dyl   x, 4                      (3.22)


The extreme-value        specification is especially attractive for empirical applications
since the closed-form expressions for P and G avoid the need for multi-dimensional
numerical integrations       required for other distributions.27  A simple consequence of
the extreme value specification is that the log-odds ratio for two alternatives equals
the utility differential:


      log                   =u(x, d) - u(x, 1).                                                            (3.23)


Suppose that the utility function depends only on the attributes                of the chosen
alternative: u(x, d) = u(x,), where x = (x,, . . . , xD) is a vector of attributes of all the
alternatives and xd is the attribute of the dth alternative. In this case the log-odds
ratio implies a property known as independence from irrelevant alternatives (HA):
the odds of choosing alternative d over alternative 1 depends only on the attributes
of those two alternatives. The IIA property has a number of undesirable implications
such as the “red bus/blue bus” problem noted by Debreu (1960). Note, however,
that in the dynamic logit model the IIA property does not hold: the log-odds of

   26The constant y in (3.18) is Euler’s constant, which shifts the extreme value distribution            so it has
unconditional     mean zero.
   “Closed-form      solutions for the conditional      choice probability  are available for the larger family of
multivariate    extreme-value   distributions       [McFadden      (1977)J This family is characterized     by the
property that it is mu-stable,       i.e. it is closed under the operation     of maximization.    Dagsvik (1991)
showed that this class is dense in the space of all distributions          for E in the sense that the conditinal
choice probabilities    for an arbitrary     density q can be approximated      arbitrarily closely by the choice
probability   for some multivariate      extreme-value    distribution.
3108                                                                                                 John Rust


choosing d over 1 equals the difference in the value functions u(x, d) - u(x, l), but
from the definition      of u(x,d) in (3.22) we see that it generally depends on the
attributes of all of the other alternatives even when the single period utility function
depends only on the attributes of the chosen alternative, u(x, d) = u(xJ. Thus, the
dynamic logit model benefits from the computational       simplifications    of the extreme-
value specification but avoids the IIA problem of static logit models.
    Although Theorems 3.2 and 3.3 appear to apply only to infinite-horizon         stationary
DDP problems, they actually include finite-horizon,     non-stationary      DDP problems
as a special case. To see this, let the time index t be an additional component           of x,,
and assume that the process enters an absorbing state with uJx,, d,) = u(x,, t, d,) = 0
for t > T. Then Theorems 3.2 and 3.3 continue to hold, with the exception that
6, P, G, 7t and u all depend on t. The value functions o,, t = 1,. . . , T are given by the
same backward recursion formulas as in the finite-horizon        MDP models described
in Section 2:

       4x, 4 = &,        4,

       u,(x,d)=~,(x,d)+~

Substituting
                               s t+
                                 G,C{u l(y, 4, d’@(y))I~l~t(d~lx, 4.

               these value functions into (3.18), we obtain choice probabilities  P, that
                                                                                                        (3.24)



depend on time. It is easy to see that the process {xt, d,} is still Markovian, but with
non-stationary    transition probabilities.
   Given panel data {xf,dp} on observed states and decisions of a collection of
individuals, the full information    maximum likelihood estimator I!? is defined by


                                                                                                        (3.25)


Maximum likelihood estimation is complicated by the fact that even in cases where
the conditional    choice probability   has a closed-form solution in terms of the value
functions uO, the latter function does not have an a priori known functional form
and is only implicitly defined by the fixed point condition (3.16). Rust (1987, 1988b)
developed a nested fixed point algorithm for estimating 6: an “inner” contraction
fixed point algorithm computes uO for each trial value of 0, and an “outer” hill-
climbing algorithm searches for the value of 0 that maximizes J!!.
   In practice, 0 can be estimated by a simpler 2-stage procedure that yields consistent,
asymptotically    normal but inefficient estimates of 8*, and a 3-stage procedure which
is asymptotically    equivalent to full information    maximum likelihood. Suppose we
partition 8 into two components       (O,, O,), where 8, is a subvector of parameters that
appear only in n and O2 is a subvector of parameters that appear only in (u, L_J,       ,Q
In the first stage we estimate 0, using the partial likelihood estimator &;,2s

   28Cox (1975) has shown that under standard    regularity conditions,   the partial   likelihood   estimator
will be consistent and asymptotically normally   distributed.
Ch. 51: Structural Estimation ofMarkou Decision Processes                                                        3109



     6: = argmax LT(8,) 3 fi                 fi rc(dxplxf_ ,,dp_ I, 0,).                                       (3.26)
             B,ERNl                  a=1    t=1


Note that the first stage does not require a nested fixed point algorithm to solve the
DDP problem. In the second stage we estimate the remaining parameters using the
partial likelihood estimator 85 defined by


                                                                                                               (3.27)


The second stage treats the consistent first stage estimates of n(dx, + 1Ix,, d,, 6;) as
the “truth”, reducing the problem to estimating the remaining parameters              8, of
(u, q, /?).It is well known that for any optimization    method the number of likelihood
function evaluations needed to find a maximum increases rapidly with the number
of parameters being estimated. Since the second stage estimation requires a nested
fixed point algorithm to solve the DDP problem at each likelihood function evalua-
tion, any reduction        in the number of parameters      being estimated can lead to
substantial     computational    savings.
   Note that, due to the presence of estimation error in the first stage estimate of
@, the covariance matrix formed by inverting the information         matrix for the partial
likelihood function (3.27) will be inconsistent.     Although there is a standard correc-
tion formula that yields a consistent estimate of the covariance matrix [Amemiya
(1976)], in practice it is just as simple to use the consistent estimates t?p = (&, I@
from stages 1 and 2 as starting values for one or more “Newton steps” on the full
likelihood function (3.25):

     & = @ - y$&),                                                                                             (3.28)

where the “search direction”               $gp) is given by

     $@) = -          [a2 i0gLf(@yaeatq           - ‘[a log _C@yae]                                            (3.29)

and y > 0 is a step-size parameter. Ordinarily the step size y is set equal to 1, but one
can also choose y to maximize Ls without changing the asymptotic properties of @.
Using the well-known “information       equality” we can obtain an alternative asymp-
totically equivalent    version of (3.29) by replacing the Hessian matrix with the
negative of the information     matrix I^((ep)defined by


     f@) = 5             5a    i0g   P(~;I~;, @~c(x;_ IX;_1      1,   dp_   1,   Pyae
              a=1     [ *=,1



                                                                                            .                  (3.30)
               x t=1  9 aiog~(d~~xp,BP)n(xg_l~x~_l,dp_l,BP)~ae~                         1

We call @ the Newton-step                   estimator.   It is straightforward                  to show that     this
3110                                                                                             John Rust


procedure results in parameter estimates that are asymptotically        equivalent to full
information    maximum likelihood and, as a by-product,       consistent estimates of the
asymptotic covariance matrix r^- 1(Qs).29
   The feasibility of the nested fixed point maximum likelihood procedure depends
on our ability to rapidly compute the fixed point o,, for any given value of 6, and
to find the maximum of Lf or Lp in as few likelihood function evaluations as possible.
At a minimum, the likelihood function should be a smooth function of 0 so that
more efficient gradient optimization    algorithms can be employed. The smoothness
of the likelihood is also crucial for establishing  the large sample properties of the
maximum likelihood estimator. Since the primitives (u, p, b) are specified a priori,
they can be chosen to be smooth functions of 0. The convexity of the social surplus
function implies that the conditional    choice probabilities   are smooth functions of
up Therefore the question of smoothness further reduces to finding sufficient condi-
tions under which tI-+u, is a smooth mapping from RN into B. This follows from
the implicit function theorem since the pair (0, ue) is a zero of the nonlinear operator
F: RN x B -+ B defined by

       0 = F(u, 0) = (I - ‘PO)(u).                                                                   (3.31)

 Theorem 3.4

Under regularity conditions (A 1) to (A 13) given in Rust (1988b), a v/36’ exists and is
a continuous   function of 9 given by

       c!$+          y&)]-l          !s$!                   .                                        (3.32)
                                 [          II   ” =   “”



The successive approximation/Newton          iteration polyalgorithm    described in Sec-
tion 2.5 can be used to compute uO.Since Newton’s algorithm involves inverting the
operator [I - Y$(u)], it follows that one can use it to compute au,,630 using formula
(3.32) at negligible marginal cost.
   Once we have the derivatives av,/ae, it is a straightforward      exercise to compute
the derivatives of the likelihood, aLf/ad. This allows us to employ more efficient
quasi-Newton      gradient optimization  algorithms to search for the maximum likeli-
hood estimate, i?. Some of these methods require second derivatives of the likeli-
hood function, which are significantly harder to compute. However, the information
equality implies that the information    matrix (3.30) is a good approximation      to the
negative of the Hessian of Lf in large samples. This idea forms the basis of the BHHH
optimization     algorithm  [Berndt, Hall, Hall and Hausman          (1974)] which only

   “In practice, the two-stage estimator & may be sufficiently far away from the maximum likelihood
estimates that several Newton steps (3.28) are necessary. In this case, the Newton-step      estimator is
simply a way generating values for computing      the full information maximum likelihood estimates in
(3.25). Also, we haven’t attempted to correct the estimated standard errors for possible misspecification
as in White (1982) due to the fact that such corrections                require  second   derivatives     of
the likelihood function which are difficult to compute in DDP models.
Ch. 51: Structural Estimation of Markov Decision Processes                                            3111


 requires first derivatives of the likelihood function. 3o The nested fixed point algorithm
combines the successive approximation/Newton                  iteration polyalgorithm         and the
 BHHH/Broyden          gradient optimization    algorithm in order to obtain an efficient and
 numerically     stable method for computing the maximum likelihood estimate 6.“’
    In order to derive the asymptotic properties of the maximum likelihood estima-
 tors e’, i = f, p, n, we need to make some additional assumption about the sampling
 process. First, we assume that the periods at which agents are observed coincide
 with the periods at which they make their decisions. In practice agents do not make
 decisions at exogenously spaced intervals of time, so it is unlikely that the particular
 points in time at which agents are interviewed coincide with the times they make
 their decisions. One way to deal with the problem is to use retrospective                    data on
 decisions made between survey dates. In order to minimize problems of time
 aggregation one should in principle formulate a sufficiently fine-grained model with
“null actions” that allow one to model decision-making                  processes with randomly
varying times between decisions. However if the DDP model has a significantly
shorter decision interval than the observation            interval, we may face the problem
that the data set may not contain observations           on the agent’s intervening states and
decisions. In principle, this problem can be solved by using a partial likelihood
function that omits the intervening            periods, or a full likelihood          function that
“integrates out” the unobserved states and decisions in the intervening periods. The
practical limitation of this approach is the “curse of dimensionality”               of solving very
fine-grained DP models.
    Next, we need to make some assumptions               about the dependence           between the
realizations    {xp, da} and {xp, dp} for agents a # b. The standard assumption                is that
these realizations are independent,         but this may not be plausible in models where
agents are affected by “macroeconomic            shocks” (examples of such shocks include
price, unemployment         rates and news announcements).‘We           assume that the observed
state variable can be partitioned        into two components,          x, = (m,,z,), where m, rep-
resents a macroeconomic           shock that is common to all agents and z, represents an
idiosyncratic component that is independently           distributed across agents conditional
on the realization of {m,}. Sufficient conditions for such independence                 are given in
the three assumptions         below.

Assumption CZ-X
The transition     probability    for the observed      state variable    x, = (m,, zr) is given by

      4dxt +1 Ix,, 4 = ~l(dzt+1 Iz,,m,,4h(dm, +1 14.                                               (3.33)

   30Convergence    of the BHHH method in small samples can be accelerated by Broyden and Davidon
Fletcher Powell updating procedures that adaptively improve the accuracy of the information        matrix
approximation    to the Hessian of Lr. The method also applies to maximization of the partial likelihood
function Lp.
   “A documented example of the algorithm written in the Gauss programming language is available
from the author upon request.
3112                                                                                                    John Rust


Assumption       SI-E
For each t 3 0 the distributions              of the unobserved          state variable   E: are conditionally
independent:

       Pr(dc: ,..., dcflx:       ,..., xf)=     ti   q(dcpIxp).                                            (3.34)


Assumption       SI-Z

For    each   t > 1 the transition         probabilities   for the idiosyncratic           components       zr of
the observed      state variable        xy are conditionally    independent:

       Pr(dz :+i,.      .,dz;lx:,.     . ., xf,d:,...,df)=         fi    ~l(dz~+lIz~,m,,~~)                (3.35)
                                                                   a=1


and,   when t = 0, the initial distributions                 of zt are independent,       conditional    on m,:

       Pr(dz&.    . , dztlm,)        = fi rc,(dz”,Im,).                                                    (3.36)
                                       0=1


    Assumption CIIX is an additional conditional           independence        assumption impos-
ed when the observed state variable x, includes macroeconomic                     shocks. It corre-
sponds to an asymmetry that seems reasonable when individual                      agents are small
relative to the economy: macroeconomic            shocks can affect the evolution of agents’
idiosyncratic     states {z;,E;}, but an individual’s      decision df has no effect on the
evolution of the {m,} process, modelled as an exogenous Markov process with
transition    probability    rc2.32 SI-E and SI-Z require that any correlation            between
agents’ idiosyncratic states {zf, E;} is a result of the common macroeconomic               shocks.
Together with assumption           CI-X, these conditions       imply that realizations      {zp, df}
and {zp, d,b} are independent        conditional  on {m,}.
   A final assumption is needed about relative sizes of time-series and cross-sectional
dimensions      of the data set. There are three cases to consider: (1) the number of
time-series observations         for each agent is fixed and A+ co, (2) the number of
cross-section observations        is fixed and T, + GO,or (3) both A and T, tend to infinity.
In most panel data sets the cross-sectional           dimension       is much larger relative to
the time-series dimension, so we will focus on case 1. If we further assume that the
observation      period T, is fixed at a common value T for all agents a, then it is
straightforward      to show that, conditional    on (m,, . . . , m,), the realizations of {x;, d;}
are IID. This allows us to use the simpler IID strong law of large numbers and
LindeberggLevy        central limit theorem to establish the consistency and asymptotic
normality     of 8’, i = p, f, n, requiring only continuous           second derivatives      of the
likelihood.33

   32Note that while {m,} is independent    of the decisions of individual agents, it will generally not be
independent   of their collective behavior.    Thus, CI-X is not inconsistent        with dynamic    general
equilibrium in large economies.
   331n cases where the observations   are INID or weakly dependent, somewhat stronger smoothness
and boundedness    conditions are required to establish the asymptotic     properties of the MLE.
                                                                                                             3113
Ch. 51: Structural       Estimation    ofMarkov   Decision Processes


Theorem 3.5
Under assumptions        AS, CI, BU, WC, BE, CI-X, SI-E and ST-Z and regularity
conditions (AlO) to (A35) of Rust (1988b), the full information and 3-stage maximum
likelihood estimators e’, i = f, n satisfy
    1. @ is a well-defined random variable,
   2. t? converges to t3* with probability  1 as A + co,
   3. the distribution    of fi(e’  - e*) converges                    weakly to N[O, 1(8*)-i]         where the
      information     matrix Z(e*) is given by


      Ice*)=-E                5 a2iogP@j”
                                       , z,,m,,e*)/aea~l(m,,...,m=)}
                           i t=1

                 -E            ~~a210g~l(i,~i,-l,m,-l,rZ,_l,e*~~aea~1(mo7. ..,md}
                           i t=1


                 -          5 a iog7c,(m,(m,_,,e*)/aeae
                         i t=1                         I

              =E        i aiogq&I”z,,m,, e*yae f: a log&it I-z,,m,.RyaB’l~m,,....mdj
                     i t=1                    t=1

                 + E i: a 10g711(ZtI~,_1,m,_l,e*)/ae
                    i f=l

                     x f ai0g711(2tp_1,m,-,,e*)/aefj~mo,....m,))
                       t=1

                                   ,f a 10gP(i7tj5t,m,,e*)/ae
                                  t=1
                          T
                     x   c alogn,(~,t~~-,,~~,-,,
                         1=1
                                                           e*)/a@~(mO~~~~~mT~}




                 +2E          f    alogP(~~I~~,m,,B*)/ae      i     a logn,(m,(m,_,,e*)/a8’(   1 mOy    ..jmT))
                              t=1                             f=l




                 x i a logiQt,Im,_,,0*)/asl                    /(m 0, ..2mT)}
                   t=1

                                  a   10g~,(m,~m,_,,e*~,aea8’~.                                            (3.37)
3114                                                                                      John Rust

Theorem      3.6

Under assumptions         AS, CI, BU, WC, BE, CI-X, SI-E and SI-Z and regularity
conditions (AlO) to (A35) of Rust (1988b), the 2-stage partial likelihood estimator
ijp = (&, e^;)’ satisfies
    1. BP is a well-defined random variable,
   2. I!?~converges to 8* with probability   1 as A + co,
  3. the distribution            of fi(@   - (3*) converges     weakly to N(0, z) where 2 is given
        by

       z=A-‘flA’-‘,                                                                          (3.38)

where    A and R are given by


                                                                                             (3.39)


where

       A,, = E          f     a210gn1(ZtlZt_l,mt_1    ,~~-1,eT)n2(m,Im,-l,8T)/
                    i t=1




       A,, = E i a2p(~~I~~,e:,e~)/ae2ad~
                                       2i(-o,--~-T~}~
              i 1=1

       nll = E f: a 10g7r1(Z,IZ,_i,m,_,                -
                                                     ,d,-,,8:)~2(m,Im,-,,eT)/ae,
                      i f=l

                   x i alOgz 1(-I--
                               zt Z, ,,m,,,ri,,,n:)n,lm,,m~-~,~:)/au;l(m,,...,m,)},
                     2=1

       q2=E           f: alog711(~tI~,-1,m,-,,d”,-,,~T)~2(m,lm,~,,~T)/ae,
                    i 1=1

                x i az@~z,,q,o;)/a0~ 21(m,,...,md},
                  t=1

                       i aP@Iz-,,q,8;)/a8,         f:
                       1=1                        t=1
                                                                                             (3.40)
Ch. 51: Structural Estimation of Markoa Decision Processes                                   3115


In addition to the distribution   of the parameter vector &, we are often interested in
the distribution  of utility and value functions ug and u0 treated as random elements
of B. This is useful, for example, in computing uniform confidence bands for these
functions. The following result is essentially a Banach space version of the “delta
theorem”.

Theorem    3.7

If &converges with probability   1 to 6* and &[i?            - Q*] converges   weakly to N(0, Z),
and v, is a smooth function of 8, then
   1. 06 is a B-valued random element,
   2. vi converges with probability    1 to u,,,,
   3. the distribution of ,,&[ui - v,.] converges weakly to a Gaussian        random
      element of B with mean 0 and covariance operator [au,,/a0]Z[au,,/aC3’].

   We conclude this section with some comments on specification and hypothesis
testing. Since structural models are often highly simplified and tightly parameterized,
one has an obligation to go beyond simply reporting parameter estimates and their
standard errors. If the structural model is to have any credibility, it needs to be
subjected to a battery of in-sample specification tests, and if possible, out-of-sample
predictive tests (a good example of the latter type of test is presented in Section 4.2).
The maximum likelihood framework allows formulation            of standard “holy trinity”
test statistics, the Wald, Likelihood Ratio, and Lagrange Multiplier (LM) tests [see
Engle (1984)]. Examples 1 and 2 below show how these statistics can be used to test
the validity of various functional-form   restrictions on the DDP model. Example 3
discusses the chi-square goodness-of-fit    statistic, which is perhaps the most useful
omnibus test of the correctness of the DDP specification.

Example    1

 The holy trinity can be used to conduct a “heterogeneity       test” of the null hypothesis
 that the parameter vector 8* is the same for two or more subgroups of agents. If
 there are K subgroups, we can formulate the null hypothesis as K - 1 linear restric-
 tions on a KN-dimensional         full parameter vector (d,, . . . , 0,) where 0, is the N-
dimensional     parameter vector for subgroup k. The likelihood ratio test involves
computing      - 2 times the difference in the restricted and unrestricted log-likelihood
functions, where we compute the restricted log-likelihood             by pooling all K sub-
groups and estimating a single N-dimensional           parameter vector 0. The Wald test
statistic is a quadratic form in the K - 1 differences in the group-specific coefficient
estimates, OK+ 1 - 8,, k = 1,. . . , K - 1. In this case the LM statistic is the easiest to
compute since it only requires computation          of a single N-dimensional     parameter
estimate 8for the pooled sample under the null hypothesis of no heterogeneity.           The
LM statistic tests whether the score of the likelihood function is approximately         zero
for all K subgroups. All three test statistics have an asymptotic chi-square distribu-
3116                                                                                                John Rust


tion under the null, with degrees of freedom equal to the number of restrictions
being tested. In the example, there are (K - l)N degrees of freedom. Computation
of the Wald and LM statistics requires an estimate of the information matrix, f(&)
for each of the subgroups k = 1,. . , K.

Example     2

The holy trinity can be used to test the validity of the conditional          independence
assumption     CI. Recall that CI implies that the unobserved          state variable E, is
independent    of a,_ 1 and is conditional on the value x, of the observed state variable.
This is a strong restriction although, as we will see in Section 4.6, it seems to be
necessary to obtain a computationally        tractable estimation   algorithm. A natural
way to test CI is to add some function f of the previous period control variables to
the current period value function: Q(x,, II,) + af(dt_ J. Under the null hypothesis
that CI is valid, the decision taken in period t - 1 will have no effect on the decision
made in period t once we condition on x, since {u&x,, d), dud}             constitutes a set
of “sufficient statistics” for the agent’s decision in period t. Thus, a = 0 under the
null hypothesis that CI holds. However under the alternative           hypothesis that Cl
doesn’t hold, E, and E,_ 1 will be serially correlated, even conditional,      on x,, so that
d,_ 1 will generally be useful for predicting the agent’s choice d,. Thus, c1# 0 under
the alternative hypothesis. The Wald, Likelihood Ratio or LM statistics can be used
to test the hypothesis that a = 0. For example, the Wald statistic is simply A&‘/8’(8),
where d2(6i) is the asymptotic variance of oi.

Example     3

 The chi-square goodness-of-fit statistic provides an overall test of the null hypothesis
that an econometric     model is correctly specified (i.e. that the parametric         model
coincides with the “true” data generating process). In the case of a DDP model, this
 amounts to a test of the joint hypotheses that (1) agents are rational, i.e. they act
“as if” their behavior is governed by an optimal decision rule from some DDP
model, and (2) the particular      parametric    specification    of this model is correct.
However, the analysis of the identification     problem in Section 3.5 reveals that the
hypothesis of rationality    per se imposes essentially no testable restrictions:          the
empirical content of the theory arises from additional restrictions on the primitives
(u, p, j?) of the DDP model. In this sense, testing the theory is tantamount       to testing
the econometrician’s   assumptions    about the parametric functional form of (u, p, fi).
Although there are other omnibus specification tests [such as White’s (1982) “infor-
mation matrix test”] the chi-square goodness-of-fit         test is far more useful in diag-
nosing the source of specification errors. There are two versions of this statistic, one
for models without covariates [Pollard (1979)], and one for models with covariates
[Andrews (1988,1989)]. 34 The former is useful for testing complete realizations            of

   ?Strictly speaking, Pollard’s results are only applicable if the full likelihood includes the probability
density of the initial state x,,. Otherwise the full likelihood (3.25) can be analyzed as a conditional
likelihood using Andrew& analysis of chi-square tests of parametric         models with covariates.
Ch. 51: Structural Estimation ofMarkou Decision Processes                                        3117


the controlled    process     {xt, d,} using the full Markov transition probability          P(d,+ l I
X t+l,MdX,+l       1xt, d,, 0) derived in Theorem 3.3, whereas the version with covariates
is useful for testing the conditional        choice probability   P(d, Ixt, 0) and the transition
probability     rc(dx,+ 1 Ix,, d,, f3). Both formulations    are based on a partition         of the
relevant space of realizations of x, and d,. In the case of the full likelihood function,
the relevant space is XT x DT, and in the case of P or n it is X x D or X x X x D,
respectively. We partition this space into a fixed number M of mutually exclusive
cells. The cells can be randomly chosen, or chosen based on some data-dependent
procedure provided (1) the total number of cells M is fixed for all sample sizes, (2)
the elements of the partition are members of a Vapnikkcervonenkis                 (VC) class, and
(3) the partition converges in probability         to a fixed, non-stochastic    partition whose
elements are also members of a VC class. 35 If we let 0 denote the M x 1 vector of
elements of this partition R = (a,, . . . , a,), we can define a vector n(L2,0) of differ-
ences between sample frequencies of fl and the predicted probabilities                 of the DDP
model with parameter 8. In a chi-square test of the specification of the conditional
choice probability      P, the ith element of A(f2, f3)is given by


                                                                                              (3.41)


The first term in (3.41) is the sample proportion         of (x,, d,) pairs falling into partition
element ~2~whereas the second term is the DDP model’s prediction of the probabil-
ity that (x,, ~,)ER~ Note that since the law of motion for x, is not specified, we simply
average over all sample points xp. An analogous                formula holds for the case of
chi-square tests of the full likelihood function: in that case ~(Ri, 0) is the difference
between the sample fraction of paths {xp, d;} falling in partition element LJi less the
probability    that these realizations fall in Q,, computed by integrating            with respect
to the probability      measure on XT x DT generated by the controlled                   transition
probabilityP(d,+     1I~,+~,&r(dx,+,   I x,, d,, t9).The chi-square test statistic is given by

      x2(0, e^,= A@, @J? + n(n, 6),                                                           (3.42)

 where 2’ is a generalized inverse of the asymptotic covariance matrix 2 (which
 is generally singular). Andrews (1989) showed that under the null hypothesis of
correct specification,      I1(R,8) converges in distribution       to N(O,Z), which implies
that x’(f2,6) converges in distribution           to a chi-square      random variable whose
degrees of freedom equal the rank of Z. Andrews provides formulas for ,!? that
take relatively simple forms when 6 is an asymptotically             efficient estimator such as
in the case of the full information         maximum likelihood estimator ef. A natural
strategy is to start with a chi-square test of the specification of the full likelihood
(3.25). If this is rejected, one can then do a chi-square test of rc to see if the rejection
is due to a misspecification      of agents’ beliefs. If this is not rejected, then we have an

  “See Pollard (1984) for a definition of a VC class.
3118                                                                                       John Rust


indication that the rejection of the model is due to a misspecification   of preferences
(p, u} or that the CI assumption     is not valid. A further test of the CI assumption
using one of the holy trinity specification tests described in Example 2 can be used
to determine if CI is the source of the problem. If not, an investigation    of the cells
which have the largest prediction errors (3.41) may provide valuable insights on
the source of specification  errors in u or /?.



3.3.    Alternative   estimation methods: Finite-horizon       DDP problems

Although the previous section showed that the AS-C1 assumption leads to a simple
and general estimation theory for DDP’s, it would be desirable to develop estima-
tion methods that can relax these assumptions.          This section considers estimation
methods for DDP models with unobservables            that are serially correlated and enter
the utility function in a non-separable      fashion. Unfortunately     there is no general
estimation theory for this class of models at present. Instead there are a variety of
problem-specific    specifications and estimation methods, most of which are designed
for finite-horizon    binary choice problems. As we will see, there are substantial
theoretical and computational       obstacles to developing an estimation        theory for a
more general class of DDP models that relaxes ASCI.              This section presents two
examples that illustrate the successful approaches.36

Example     1

Wolpin (1984) pioneered the nested numerical solution method for a class of binary
choice models where unobservables          enter the utility function u(x,~,d) in a non-
additive fashion. In a binary choice model, one does not need a 2-dimensional        vector
of unobservables      to yield a saturated choice model: in Wolpin’s specification E is
uni-dimensional      and interacts with the observed state variable x,, yet the choice
probability   satisfies P&l Ix) > 0 for all x and is continuously     differentiable   in 8.
Wolpin’s application      concerned a Malaysian family’s choice of whether or not to
conceive a child in period t: d, = 1 if a child is born in year t, d, = 0, otherwise.37
Wolpin used the following quadratic family utility function,

       u&x,, E,,d,) = (0, + e,)n, - 8,n: + e3c, - &:,                                         (3.43)

where x, = (n,, c,) and n, is the number of children in the family and c, is total family
consumption     (treated as an exogenous     state variable rather than as a control
variable). Assuming that {st} is an IID Gaussian process with mean 0 and variance
cr2 and that {x,} is a Markov process independent          of {et}, the family’s optimal

   36For additional examples, see the survey by Eckstein and Wolpin (1989a).
   “Wolpin’s model thus assumed that there is no uncertainty about fertility and that contraception
is 100% effective.
Ch. 51: Structural Estimation of Markov Decision Processes                                3119


decision rule d, = dt(xr, E,) can be computed by backward induction starting in the
final period T at which the family is fertile. It is not difficult to see that (3.43) implies
6, is given by the threshold rule

                    1 if      8, > v,(x,,0)                                             (3.44)
      4(x,, 8,)=
                   i 0   if   E, d yl,(x,, 0).

The cutoffs (Q(x, 0)) define the value of gr such that the family is indifferent as to
whether or not to have another child: for any given value of 8 and for each possible
t and x, the cutoffs can be computed by backward induction. The assumption          that
{E,} is IID N(0, a*) t h en implies that the conditional choice probability is given by

                         1 - @[Q(x,, 0)/a]       if   d= 1
      P,(d,Ix,9 4 =                                                                     (3.45)
                         @C?,(X, @/aI            if   d = 0,

where @ is the standard normal CDF. One can estimate 8 maximum likelihood
using the partial, full or Newton-step    maximum    likelihood estimators   given in
equations (3.25) to (3.27) of Section 3.2. Using the implicit function theorem one
can show that the cutoffs are smooth functions of 8. From (3.45) it is clear that this
implies that the likelihood function is a smooth function of 8, allowing Wolpin to
establish that his maximum likelihood estimator has standard asymptotic properties.

Example    2

Although Example 1 shows how one can incorporate                 measurement      errors and
unobservables     that enter the utility function non-separably,   it relies on the indepen-
dence of the {E,} process, a strong form of CI. Pakes (1986) developed a method for
estimating binary DDP’s with serially correlated observables that enter u additively.
 Pakes developed an optimal stopping model of whether or not to renew a patent.
He used Monte Carlo simulations            to “integrate out” the serially correlated     {Ed}
process in order to evaluate the likelihood function, avoiding a potentially intract-
able numerical integration     problem. Let t denote the number of years a patent has
been in force, and let E, denote the cash flow accruing to the patent in year t. In
Europe, patent holders must pay an annual renewal fee c,, an increasing function
oft. The patent holder must decide whether or not to pay the cost c, and renew the
patent, or let it lapse in which case the patent is permanently      cancelled and the idea
is assumed to have 0 net value thereafter. In Pakes’s data set one cannot observe
patent holders’ earnings E,, so the only observable state variable is x, = t, the number
of years the patent is kept in force. Assuming that {et} is a first order Markov process
with transition probability     qt(dE,IE,_ 1), Bellman’s equation is given by

      VT(&)= max (0, E - c,},


                                                                                        (3.46)
3120                                                                                 John Rust


where T is the statutory limit on patent life. Under fairly general conditions on the
transition  probabilities   {qt} (analogous to the weak continuity   conditions of Sec-
tion 2) one can establish that the optimal decision rule, d = S,(E), is given by a
threshold rule of the form (3.44), but in this case the cutoffs q,(0) only depend on t
and the parameter 0. Pakes used a particular family {ql} to simplify the recursive
calculation  of the cutoffs:

                                                            if   s,+i = 0
                                                            if   OGs,+i     ddZs,
                                                                                        (3.47)
                                                            if   E,+1>6         E
                                                                            2   2’




The interpretation    of (3.47) is that with probability exp{ -8is1} the patent is dis-
covered to be worthless (in which case E~+~= 0 for ail k 2 l), or alternatively,    the
patent is believed to have value next period given by E,, 1 = max{e2c,,z}, where z
is an IID exponential    random variable whose density is given by the third term in
(3.47). The likelihood function for this problem requires computation      of the pro-
bability A,(Q) that the patent lapses in year t:

       A,(t)= Pr{6,(e,)=0,6,_,(a,_,)=      1,...,6r(ai)=   1)




where q. is the initial distribution     of returns at the time the patent was applied for,
assumed to be log-normal with parameters (0,,0,). To establish the asymptotic pro-
perties of the maximum likelihood estimator 8 = (8,, . . . , &), we need to show that
&(t) is a smooth function of 8. It is straightforward         to show that the cutoffs q,(0)
are smooth functions of 8. Pakes showed that this fact, together with the smoothing
that occurs when integrating        over the indicator functions in (3.48), yields a likeli-
hood function which is continuously        differentiable in tJ and has standard asymptotic
properties. However, in practice the numerical integrations required in (3.48) become
intractable for t larger than 3 or 4, whereas many patents are held for 20 years or
more. To overcome the problem Pakes used Monte Carlo integration,                  calculating
a consistent estimate It(e) by simulating a large number of realizations of the process
{Et} and tabulating    the fraction of realizations that lead to drop-outs at year t, i.e.
$ < q,(d), Es 2 q,(d), s = 1,. . , t - 1. This requires a “nested simulation       algorithm”
consisting of an outer optimization          algorithm   that searches for a value of 8 to
maximize the likelihood function, and an inner simulation/DP              algorithm that
   1. solves the DDP problem for a given value of 8, using backward induction to
       calculate the cutoffs {s,(e)},
Ch. 51: Structural Estimation of Markov     Decision Processes                                      3121


   2. simulates NSIM draws of the process (EJ to calculate               a consistent    estimate     of
      &(O) and the full likelihood function J?(O)

Note that the realizations    {EJ change each time we update 8. The main burden of
Pakes’s, simulation estimator arose from having to repeatedly re-simulate NSIM
realizations of (8,): the recursive calculation of the cutoffs {r,(O)} took little time in
comparison. 38 An additional burden is imposed by the need to calculate numerical
derivatives of the likelihood function: each iteration requires 8 separate solutions
and simulations of the DDP problem, once to compute if(e) and 7 additional times
to compute its partial derivatives with respect to (O,, . . . ,O,).
   McFadden (1989) and Pakes and Pollard (1989) subsequently            developed a new
class of simulation estimators that dramatically     lowers the value of NSIM needed
to obtain consistent and asymptotically      normal parameter estimates. In fact, consis-
tent, asymptotically    normal estimates of I3 can be obtained with NSIM as small as
1, whereas consistency of Pakes’s original simulation estimators required NSIM to
tend to infinity with sample size. The new approach uses minimum distance rather
than maximum likelihood to estimate 8. In the case of the patent renewal problem,
the estimator is defined by

      ij = argmin   HA(ey w,H,(e),
      HA(e) = [fl,/A - l,(e), . . , +/A - &(e)-y,

      A=f:n,


     It(e) =                                                                                   (3.49)


where n, is the number of patent holders who dropped out (failed to renew) after t
years, A is the total number of agents (patent holders) in the sample, W,., is a T x T
positive definite weighting matrix, and {Ejl} denotes the jth simulation             of the
Markov process when the transition probabilities         qt in (3.47) are evaluated at 8. In
order to satisfy the uniformity        conditions  necessary to prove consistency       and
asymptotic normality of the estimator, it is crucial to note that one does not draw
independent    realizations  {Etj} for distinct values of 8. Instead, at the beginning of
estimation we simulate NSIM random vectors (f,, . . . , rNs,,) which are held fixed
throughout the entire estimation process, and thejth draw_tj is used to construct {Ejf}
for each trial value of 8. In the patent renewal problem tj is given by

     Tj=(f9Gl,.      . . 9 ~T~~lr~~~~7T)~                                                      (3.50)

    38Pakes varied NSIM depending on how close the outer algorithm was to converging, setting NSIM
equal to a few thousand in the initial stages of the optimization when one is far from convergence and
gradually   increasing NSIM to 20000 in the final stages of estimation    in order to get more precise
estimates of the likelihood function and its derivatives.
3122                                                                                                 John Rust


where z”is standard normal, and the 6, and 7, are IID draws from an exponential
distribution with unit mean. Using tj we can construct a realization of {Ejl} for any
value of 8 using the recursion

       Fjo= exp(0,     + ~9,zS},

       ej,=r{Q,Ej,-,     >,~‘1}max[8,~j,_,,8’,B,y”,-8,].                                                (3.51)

This simulation   process insures that no extraneous simulation error is introduced
in the process of minimizing over 0 in (3.49), insuring that the uniformity conditions
given in Theorems 3.1 and 3.2 of Pakes and Pollard hold. These conditions imply
the following asymptotic distribution   for 0:

       JA [S - e*] + N(0, Q),
       f2 = (1 + NSIM-      ‘)(A’WA)-‘A’WZ-W’A(A’WA)-‘,

       A = aa.(o*)/ae,

        r = diag[YB*)]     - n(e*)n(e*),,

       A(Q)= C&(@, ...,&(@I’.                                                                           (3.52)

By Aitken’s theorem [Theil (1971)], the most efficient choice for the weighting
matrix is W = diag[YB*)]. Notice that when one uses the optimal weighting matrix,
 W,, the relative efficiency of the simulation      estimator     increases rapidly to the
efficiency of maximum likelihood [which requires exact numerical integration                to
compute A(Q)]. The standard errors of the simulation          estimator are only twice as
large as maximum likelihood when NSIM equals one, and are only 10% greater
when NSIM equals 10.
   While the “frequency simulation estimator” (3.49) substantially          reduces the value
of NSIM required to estimate 8, it has the drawback that the objective function is
a step function in 0, so a non-differentiable   search algorithm must be used which
typically requires many more function evaluations to find 8 than gradient optimiza-
tion methods. Thus, the frequency simulator will be feasible for problems where we
can rapidly solve the DDP problem for the cutoffs {q,(0)}.“’ An important question
is whether simulation methods can be used to avoid solving the DDP problem itself.
Note that the main burden of DDP estimation methods involves calculation of the
value function V,(s), which is itself a conditional     expectation      with respect to the
controlled   stochastic process {s,}. Can we also use Monte Carlo integration               to
compute an approximate        value function i&s) rather than computing            exactly by
backward induction?       The next section discusses how this might be done in the
context of infinite-horizon   DDP models.

  39Recent progress in developing   “smooth   simulation   estimators”   [Stern   (1989). McFadden     (1990)]
may help overcome this problem.
Ch. 51: Structural Estimation of Markov Decision Processes                                    3123


3.4.    Alternative   estimation    methods: Injinite-horizon     DDP’s

Hotz et al. (1993) introduced a simulation estimator for DDP problems that avoids
the computational     burden of nested numerical solution of the Bellman equation.
Unlike the simulation estimators described in Section 3.3, the Hotz et al. estimator
is a smooth function of 0. The simulation estimator is based on the following result
of Hotz and Miller (1993).

Lemma 3.1

Suppose that q(delx) has a density with finite first moments and support equal to
RIDCX)I.
       Then for each XGX, the choice probabilities    given in equation (3.18) define a
1: 1 mapping between the space of normalized      value functions {UER’~(~)’Iu( 1) = 0}
and the 1D(x)(-dimensional simplex dlDCx)l.

   In the special case where q has an extreme-value distribution,         the inverse mapping
has a closed-form solution: it is simply the log-odds transformation.          The idea behind
the simulation estimator is to use non-parametric           estimation to obtain consistent
estimates of the conditional      choice probabilities    p(dlx) and then invert these esti-
mates to obtain consistent estimates of the normalized               value function, B&d) -
6(,x, 1). If we also have estimates of agents’ beliefs fi we can simulate (a consistent
estimate of) the controlled stochastic process {x,, E,,d,). For any given values of x
and 0 we can use the simulated realizations of {x,, E,,d,} to construct a simulation
estimate of the normalized value function, i&(x, d) - f&(x, 1). At the true parameter
9*, t&(x, d) - &(x, 1) is an (asymptotically)      unbiased estimate of u&x, d) - u&x, 1).
Since the latter quantity can be consistently estimated by inverting non-parametric
estimates of the choice probability, the simulation estimator can be roughly described
as the value of 0 that minimizes the distance between the simulated value function
CO(x,d) - 5(x, 1) and 0(x, d) - 0(x, l), averaged over the various (x, d) pairs in the
sample.
   More precisely, the simulated value (SV) function estimator consists of 5 steps.
For simplicity I assume that the observed state variable x has finite support and
that there are no unknown parameters in the transition probability              n, and that q is
an IID extreme-value     distribution.

Step I. Invert non-parametric  estimates of P(d (x) to compute consistent               estimates
        of the normalized value functions do(x, d) = u(x, d) - u(x, 1):


                                                                                            (3.53)


Step 2. Use the consistent         estimate   of dv* to uncover   a consistent   estimate   of the
        decision rule b:

       &x, E) = argmax [d 0(x, d) + c(d)].                                                  (3.54)
                  deD(r)
3124                                                                                                       John Rust


Step 3. Using & q and 7~simulate realizations        of the controlled stochastic process
        {xt, et}. Given an initial condition (x,, d,), this consists of the following steps:

              1. Given (x,_ r, d,_ 1) draw x, from the transition                   probability
                 ~(dxtlxt~r>dt-I),
              2. Given x, draw E, from the density q(EtIxt),
              3. Given (xc, EJ compute d, = 8(x,, E,),
              4. If t > S(A), stop, otherwise set t = t + 1 and return                       to step 1.40

           Repeat step 2 using each of the sample points (x;, d;), a = 1,. . . , A, t = 1,.                       , T,
           as initial conditions.

Step 4. Using        the simulations        {T,Li,} from step 2, compute                    the simulated value
          function    I&(X,,, d,):

                      S(A)
                                                                                                              (3.55)


           where (x,, d,) is the initial condition from step 2. Repeat step 3 using each
           of the sample points (x:, dp) as initial conditions.

Step 5. Using the normalized       simulated value function d &,(xp, d:) and correspond-
          ing non-parametric    estimates d 0(x;, df) as “data”, compute the parameter
          estimate 8 as the solution to

       8A = argmin HA(0)‘WAHA(@,

                                                                                                              (3.56)


          where WA is a K x K positive definite                         weighting    matrix       and    K is the
          dimension of the instrument vector, Z;.

The SV estimator has several attractive features: (1) it avoids the need for repeated
calculation of the fixed point (3.22), (2) the simulation error in d f&(xp,df) averages
out over sample observations,    so that one can estimate the underlying parameters
using as few as one simulated path of (_i$,Et} per (xr, d;) observation,   (3) since each
term di&(x,d) is a smooth function of 8, the objective function (3.56) is a smooth
function of 8 allowing use of gradient optimization     algorithms to estimate e^,. Note
that the simulation in step 2 needs to be done only once at the start of the estimation,
so the main computational     burden is the repeated evaluation of (3.55) each time 13
is updated.
   Although the SV estimator is consistent, its main drawback is its sensitivity to

   @-‘Here S(A) denotes   any stopping   rule (possibly   stochastic)   with the property     that with probability
1, S(A)-+m as A+co.
Ch. 51: Structural Estimation of Markov Decision Processes                                               3125


the non-parametric       estimates of P(d(x) in finite samples. One can see from the
log-odds transformation         (3.53) that if one of the estimated choice probabilities
entering the odds ratio is 0, the normalized value function will equal plus or minus
co. For states x with few observations,           the natural non-parametric   estimator for
P(dlx) ~ sample frequencies - can frequently            be 0 if the true value of P(dlx) is
non-zero but small. In general, the inversion process can amplify estimation errors
in the non-parametric        estimates of P(dIx), and these errors can result in biased
estimates of 0. A related problem is that the SV estimator requires estimates of the
normalized     value function d u(x, d) for all possible (x, d) pairs, but many data sets
will frequently have data concentrated           only in a small subset of (x,d) pairs. Such
cases may require parametric          specifications   of P(dJx) to be able to extrapolate
estimates of P(dl x) to the set of (x, d) pairs where there are no observations.      In their
Monte Carlo study of he SV estimator, Hotz et al. found that smoothed estimates
of P(d Ix) (such as produced by kernel estimators, for example) can reduce bias, but
in general the SV estimator depends on having lots of data to obtain accurate
non-parametric      estimates of P.41



3.5.    The identi$cation problem

 I conclude with a brief discussion of the identification         problem for MDP’s and
 DDP’s. Without strong restrictions on the primitives (u,p, /?) the structural model
is “non-parametrically       unidentified”:  there are infinitely many distinct primitives
 that are consistent      with any given decision rule 6. Indeed, we show that the
hypothesis that agents behave according to Bellman’s principle of optimality im-
poses no testable restrictions in the sense that we can always find primitives {/I, u, p}
that “rationalize”     an arbitrary decision rule 6. This result stands in contrast to the
case of static choice models where we know that the hypothesis of optimization           per
se does imply testable restrictions.42 The absence of restrictions in the dynamic case
may seem surprising given that the structure of the MDP problem already imposes
a number of strong restrictions          such as time additive preferences and constant
intertemporal     discount factors, as well as the expected utility hypothesis itself. While
Bellman’s principle does not place restrictions on historical choice behavior, it can
yield restrictions in choice experiments where we have at least partial control over
agents’ preferences or beliefs. 43 For example, by varying agents’ beliefs from p to p’,
an experiment implies a new optimal decision rule S@*, u*, p’), where /I* and u* are
the agent’s “true” discount factor and utility function. This experiment imposes the


   41See also Bansal et al. (1993) for another interesting non-parametric     simulation estimator that might
also be effective for estimating large scale DDP problems.
   42These restrictions    include the symmetry      and negative-semidefiniteness      of the Slutsky matrix
[Hurwicz and Uzawa (1971)], the generalized axiom of revealed preference [Varian (1984)], and in
the case ofdiscrete choice, restrictions on conditional choice probability [Block and Marschak (1960)].
   43An example’is the experiment which revealed the “Allais paradox” mentioned in Footnote 9.
3126                                                                                           John Rust


following restriction       on candidate       (p, u) combinations:       they must lie in the set R
defined by

       R = {CD,u)IW, u,P)= W*, u*,p,>
                                   f-7 ((P,4lW, U,P’)= w*, u*,P’)).                                (3.57)

Although     experimental    methods offer a valuable source of additional        testable
restrictions that can help narrow down the equivalence class of competing struc-
tural explanations     of observed behavior, it should be clear that even extensive
experimentation     will be unable to uniquely identify the “true” structure of agents’
decision-making     processes.
   As is standard in analyses of the identification   problem, we will assume that the
econometrician     has access to an unlimited number of observations.    This is justified
since our results in this section are primarily negative: if the primitives {/I, u,p}
cannot be identified with infinite amounts of data, then they certainly can’t be
identified in finite samples. We consider general MDP’s without unobservables,
since the existence of unobservables        can only make the identification     problem
worse. In order to formulate the identification     problem a la Cowles Commission,
we need to translate the concepts of reduced-form       and structure to the context of
a nonlinear MDP model.

Definition 3.2

The reduced-form         of an MDP is the agent’s optimal             decision   rule, 6.

Dejinition 3.3

The structure of an MDP is the mapping:                A: (/I, u, p} + 6 defined by

       6(s) = argmax [u(s, d)],                                                                   (3.58)
                deD(s)



where v is the unique       fixed point to


       u(s, d) = u(s, d) + j?      max [u(s’, d’)]p(ds’l s, d).                                   (3.59)
                                s d’sD(s’)

The rationale for identifying 6 as the reduced-form  of the MDP is that it embodies
all observable  implications   of the theory and can be consistently      estimated by
non-parametric   regression given sufficient number of observations  {s,, d,}.44 We can


   “%ince the econometrician    fully observes all components of (s,d), the non-parametric   regression is
degenerate in the sense that the model d = 6(s) has an “error term” that is identically 0. Nevertheless,
a variety of non-parametric   regression methods will be able to consistently     estimate 6 under weak
regularity conditions.
Ch. 51: Structural   Estimation   of Markov Decision Processes                                     3127


use the reduced-form          estimate       of 6 to define an equivalence   relation   over the space
of primitives.


Dejnition    3.4
                             _ - -
Primitives    (u, p, p) and (u, p, /?) are observationally       equivalent if

                                                                                                 (3.60)

Thus A ‘(6) is the equivalence class of primitives consistent with decision rule 6.
Expected-utility  theory implies that A(/?, U, p) = A(fl, au + b, p) for any constants a
and b satisfying a > 0, so at best we will only be able to identify an agent’s preferences
u modulo cardinal equivalence, i.e. up to a positive linear transformation        of u.


Definition 3.5

The stationary   MDP problem (3.58) and (3.59) is non-parametrically      ident$ed if
given any reduced-form 6 in the range of A, and any primitives (u, p, /I) and (U, p, p)
in A - ‘(6) we have

      B=ix
      p=P,
      u = aii + b,                                                                               (3.61)

for some constant        a and b satisfying        a > 0.


Lemma 3.2

The MDP problem             (3.58) and (3.59) is non-parametrically          unidentified.

The proof of this result is quite simple. Given any 6 in the range of A, let (p, u, p)~
A - ‘(6). Define a new set of primitives (U,p, /3) by



      dds’ Is,4 = Ads’1s, 4,

      $s, 4 = u(s,4 + f(s) - P f(s')p(ds' Is,d),                                                 (3.62)
                                         s

where f is an arbitrary measurable      function of s. Then U is clearly not cardinally
equivalent    to u unless f is a constant. To see that both (u,p,/?) and (U,p,p) are
observationally    equivalent, note that if t&d) is the value function corresponding
to primitives (u,p, fl) then we conjecture      that U(s,d) = u(s, d) + f(s) is the value
3128                                                                                                 John Rust


function   corresponding                 to (ti, p, p):


       U(S,d) = ii@, d) + p             max [z?(s’,d’)]p(ds’I s, d)
                                     s d’eD(s’)

             = u(s, d) + f(s) - j3 f(s’)p(ds’( s, d) + /I max [I@‘, d’) + f(s’)]p(ds’ Is, d)
                                  s                      s d’ED(s’)

             = u(s, d) + f(s) + /i’                max [u(s’, d’)]p(ds’I s, d)
                                                s d’eD(s’)
             =   u(s,   d)   +   f(s).                                                                  (3.63)


 Since v is the unique fixed point to (3.59) it follows that v + f is the unique fixed
 point to (3.63), so our conjecture         V = v + f is indeed the unique fixed point to
 Bellman’s equation with primitives (ii, p, fl). Clearly {U(S,d), dud}            and {I+, d) +
f(s),d~D(s)}     yield the same decision rule 6. It follows that (fi,u + f - BEf,p)is
 observationally     equivalent to (/I, U, P), but u + f - /lEfis not cardinally equivalent
 to ll.
    We now ask whether Bellman’s principle places any restrictions on the decision
 rule 6. In the case of MDP’s Blackwell’s theorem (Theorem 2.3) does provide two
 restrictions: (1) 6 is Markovian,      (2) 6 is deterministic.    In practice, it is extremely
 difficult to test these restrictions    empirically.     Presumably   we could test the first
 restriction   by seeing whether agents’ decisions depend on lagged states s,_~ for
 k= 1,2,.... However given that we have not placed any a priori bounds on the
 dimensionality     of S, the well-known trick of “expanding the state space” [Bertsekas
(1987, Chapter 4)] can be used to transform an Nth order Markov process into a
 1st order Markov process. The second restriction might be tested by looking for
agents who make different choices in the same state: 6(s,) # 6(s,+,), for some state
s, = St+k = s. However, this behavior can be rationalized by a model where the agent
is indifferent between several alternatives         available in state s and simply chooses
one at random. The following lemma shows that Bellman’s principle implies no
other restrictions beyond the two essentially untestable restrictions of Blackwell’s
theorem:


Lemma 3.3

Given an arbitrary measurable                      mapping   6: S + D there exist primitives   (u, p, 8) such
that 6 = A@, u,p).

The proof of this result is straightforward.     Given                     an arbitrary   discount     factor
/?E(O, 1) and transition probability p, define u by

       U(S,d)=I(d=6(s)}-p.                                                                              (3.64)
Ch. 51: Structural Estimation ofMarkov Decision Processes                                     3129


Then it is easy to see that u(,s,d) = I{d = 6(s)} is the unique solution to Bellman’s
equation (3.59), so that 6 is the optimal decision rule implied by (u, P, P).
    If we are unwilling to place any restrictions on (u, p, P), then Lemma 3.2 shows
that the resulting MDP model is non-parametrically               unidentified    and Lemma 3.3
shows that it has no testable implications,        in the sense that we can “rationalize”       any
decision rule 6. However, it is clear that from an economic standpoint,               many of the
utility functions u + f - b_Ef will generally be implausible, as is the utility function
 U(S,d) = I{d = 6(s)}. These results provide a simple illustration               of the need for
 auxiliary identifying restrictions to eliminate primitives that we deem “unreasonable”
 while at the same time pointing out the futility of direct non-parametric             estimation
 of (u, p, /I). The proofs of the lemmas also indicate that in order to obtain testable
 implications,     we will need to impose very strong identifying restrictions            on u. To
 see this, suppose that the agents’ discount factor /I is known a priori, and suppose
 that we invoke the hypothesis of rational expectations: i.e. agents’ subjective beliefs
about the evolution of the state variables coincide with the objectively measurable
 population      probability measure. This implies that we can use observed realizations
 of the controlled process {.s,,d,} to consistently        estimate the p(ds,+ 1Isf,dt), which
means that we can treat both /I and p as known a priori. Note, however, that
the proofs of Lemmas 3.2 and 3.3 are unchanged whether or not we know /3 and p,
 so it is clear that we must impose identifying restrictions directly on u itself. The
 usual way to impose restrictions is to assume that u is a smooth function of a vector
of unknown parameters 8. However, in the case where S and D are finite sets, this
is insufficient to uniquely identify the model: there is an equivalence class of 8 with
non-empty interior consistent with any decision rule 6,.
    This latter identification     problem is an artifact of the degeneracy of MDP models
without unobservables.          Rust (1996) provides a parallel identification        analysis for
the subclass of DDP models satisfying the AS-C1 assumptions                 presented in Section
4.3, and shows that while AS-C1 does impose testable restrictions, the primitives
(u, q, rc,/?) are still non-parametrically  unidentified in the absence of further identifying
restrictions. However, when identifying restrictions take the form of smooth para-
metric specifications (u,, qe, 7tg,Be), the presence of unobservables       succeeds in smooth-
ing out the problem, and the results of Section 4.3 imply that the likelihood is a
smooth function of 0. Results from differentiable topology can then be used to show
that the resulting parametric model is generically identified.
    While the results in this section suggest that, in principle, one can always “rig” a
DDP model to rationalize any given set of observations,             we should emphasize that
there is no guarantee that we can do it in a way that is theoretically plausible. Given
the increasing size and complexity of current data sets, it can be a considerable
challenge to find a plausible DDP model that is consistent with the available data,
let alone one that is capable of making accurate out-of-sample                forecasts of policy
changes. However, in the cases where we do succeed in specifying a plausible
structural model that fits the data well, we need to exercise a certain amount of
caution in using the model for policy forecasting and welfare analyses, etc. Keep in
3130                                                                            John Rust


mind that a model will be credible only until such time as it is rejected by new,
out-of-sample   observations,   or faces competition   from alternative models that are
also consistent with available data and are equally plausible. The identification
analysis suggests that we can’t rule out the existence of alternative plausible, obser-
vationally equivalent models that generate completely different policy forecasts or
welfare impacts. Put simply, since structural        models can be falsified but never
proven to be true, their predictions should always be treated as tentative and subject
to continual verification.


4.     Empirical applications

I conclude this chapter with brief reviews of two empirical applications of DDP
models: Rust’s (1987) model of optimal replacement of bus engines and the Lums-
daine et al. (1992) model of optimal retirement from a firm.


4.1.    Optimal replacement        of bus engines

One of the simplest applications       of the specific class of DDP models given in
Definition 3.1 is Rust’s (1987) application to bus engine replacement. In contrast to
the macroeconomic       studies that investigate   aggregate replacement   investment,
this model goes to the other extreme and examines the replacement           investment
decision at the level of an individual agent. In this case the agent, Harold Zurcher,
is the maintenance   manager of the Madison Metropolitan        Bus Company. One of
the problems he faces is to decide how long to operate a bus before replacing its
engine with a new or completely overhauled bus engine. We can represent Zurcher’s
problem as a DDP with state variable x, equal to the cumulative mileage on a bus
since last engine replacement,     and control variable d, which equals 1 if Zurcher
decides to replace the bus engine, and 0 otherwise. Rust assumed that Zurcher
behaves as a cost minimizer, so his utility function is given by

                              --or -c(O,Q,)-s,(l)           if   d,= 1
       u(x,, d,, d,,&)   =                                                          (4.1)
                              - c(x0 0,) - c,(O)            if   d, = 0,

where 0, represents the labor and parts cost of installing a replacement bus engine
and c(x, 0,) represents the expected monthly operating and maintenance        costs of a
bus with x accumulated     miles since last replacement.  Implicit in the specification
(4.1) is the assumption  that when a bus engine is replaced, it is “as good as new”,
so the state of the system regenerates      to x, = 0 when d, = 1. This regeneration
property is also captured in the transition probability   for x,:

                             g(x,+,-0)       if     d,= 1
       4x, +1 Ix,,4) =
                             g(x,+r-xx,)     if     d,=O,
Ch. 51: Structural Estimation of Markov Decision Processes                                       3131


where g is a probability    density function. The renewal property given in equations
(4.1) and (4.2) defines a regenerative optima/ stopping problem, and under an optimal
decision rule d, = 6*(x,, E,, 6) the mileage process (x,} is a regenerative random walk.
Using data on 8156 bus/month          observations  over the period 1975 to 1986, Rust
estimated 8 and g using the maximum likelihood estimator (3.25). Figures 2 and 3
present the estimated value and replacement         hazard functions assuming a linear
cost function, c(x, 0,) = 0,x and two different values of /?. Comparing the estimated
hazard function P(l Ix, 0) to the non-parametrically        estimated hazard, both the
dynamic (fi = 0.9999) and myopic (B = 0) models appear to fit the data equally well.
In particular, both models predict that the probability of a replacement is essentially
0 for x less than 100 000 miles. However likelihood ratio and chi-square tests both
strongly reject the myopic model in favor of the dynamic model: the data imply that
the concave value function for p = 0.9999 fits the data better than the linear value
function 8,x when B = 0. The precise value of B could not be identified: the likeli-
hood was virtually flat for B 2 0.98, although with a very slight upward slope as
/?- 1. The latter finding, together with theJinal oalue theorem [Bhattacharya       and
Majumdar (1989)] may indicate that Zurcher is minimizing long-run average costs
rather than discounted costs:

                      (1 - /I) f      /??J(x,, d,)   = lim max L E a{ zI         u(xA)}.         (4.3)
                              t=o                        T+m     d   T



          0




                              100                       200                300             400
                                                       (Thousands)
                                         Mileage     since   last replacement

                                   Figure 2. Estimated    value functions
3132                                                                                           John Rust




                                100                 200                          300     400
                                                    (Thousands)
                                         Mileage   since      lart    replacement

                                Figure   3. Estimated      hazard    functions




The estimated model implies that expected monthly maintenance          costs increase by
$1.87 for every additional     5000 miles. Thus, a bus with 300000 miles costs an
average of $112 per month more to maintain          than a bus with a newly replaced
engine. Rust found evidence of heterogeneity      across bus types, since the estimated
value of O2 for the newer 1979 model GMC buses is nearly twice as high as for the
 1974 models. This finding resolves a puzzling aspect of the raw data: engine replace-
ments for the 1979 model buses occur on average 57 000 earlier than the 1974 model
buses despite the fact that the engine replacement cost for the 1979 models is 25%
higher. One of the nice features of estimating the preferences at the level of a single
individual is that one can evaluate the accuracy of the structural model by simply
asking the individual whether the estimated utility function is reasonable.45 In this
case conversations with Zurcher revealed that implied cost estimates of the structural
model corresponded     closely with his perceptions of operating costs, including the
finding that monthly maintenance      expenditures    for the 1979 model GMC buses
were nearly twice as high as for the 1974 models.


   45Another nice feature is that we completely avoid the problem of unobserved heterogeneity that can
confound attempts to estimate dynamic models using panel data. Heckman (1981a. b) provides a good
discussion of this problem in the context of models for discrete panel data.
Ch. 51: Structural Estimation of Markoo Decision Processes                              3133


    Figure 4 illustrates the value of structural models for use in policy forecasting. In
this case, we are interested in forecasting Zurcher’s demand for replacement           bus
engines as their price varies. Figure 4 contains two “demand curves” computed for
models estimated with j? = 0.9999 and /I = 0, respectively. The maximum likelihood
procedure insures that both models generate the same predictions            at the actual
replacement     price of $4343. A reduced-form      approach to forecasting bus engine
demand would bypass the difficulties of structural estimation         and simply regress
the number of engine replacements        in a given period as a function of replacement
costs during the period. However, since the cost of replacement bus engines has not
varied much in the past, the reduced-form       approach will be incapable of generating
reliable predictions of replacement demand. In terms of Figure 4, all the data would
be clustered in a small ball about the intersection of the two curves: obviously many
different demand functions       will be able to fit the data equally well. By para-
meterizing our prior knowledge about the replacement problem Zurcher is facing,
and by efficiently using the additional information contained in the {xp, dp} sequences,
the structural model is able to generate very precise estimates of the replacement
demand function.




                          2              4               6
                                                   (Thouaanda)           8         10   12
                                Parta   coat    of rttplacemont       bum engine

                         Figure 4. Expected    replacement   demand   function
3134                                                                                             John Rust


4.2.   Optimal    retirement   from    a firm

Lumsdaine,    Stock and Wise (1992) (LSW) used a data set that provides a unique
“natural experiment”     that allows them to compare the policy forecasts of four
competing structural and reduced-form          models. The data consist of observations
of departure    rates of older office employees at a Fortune            500 company. These
workers were covered by a “defined benefit” pension plan that provided substantial
incentives to remain with the firm until age 55 and then substantial            incentives to
leave the firm before age 65. In 1982 non-managerial          employees who were over 55
and vested in the pension plan were offered a temporary               1 year “window plan”.
Under the window plan employees who retired in 1982 were offered a bonus
equivalent to 3 to 12 months’ salary, depending on the years of service with the firm.
Needless to say, the firm experienced a substantial          increase in departure rates in
 1982.
   Using data prior to 1982, LSW fit four alternative econometric models and used
the fitted models to make out-of-sample       forecasts of departure rates under the 1982
window plan. One of the models was a reduced-form                probit model with various
explanatory    variables and the remaining         three were different types of dynamic
structural models.46 Two of the structural models were finite-horizon           DDP models
with a binary decision variable: continue working (d = 1) or quit (d = 0). Since
quitting is treated as an absorbing state and workers were subject to mandatory
retirement at age 70, the DDP model reduces to a simple finite-horizon                 optimal
stopping problem. The observed state variable x, is the benefit (wage or pension)
obtained in year t and the unobserved          state variable E, is assumed to be an IID
extreme-value    process in the first specification and an IID Gaussian process in the
other specification. LSW used the following specification for workers’ utility func-
tions:

                          x:’ + Pl + Et(l)         if   d, = 1
       4% &r,44      =
                         i (~ZQ2x,)8’ + ~~(0) if        d, = 0.

The two components of p = (pl, pL2)represent time-invariant       worker-specific hetero-
geneity. In the extreme-value specification for {E,},p1 is assumed to be identically 0
and pL2is assumed to have a log-normal     population    distribution   with mean 1 and
scale parameter 8,. In the Gaussian specification for (E,}, p2 is identically 1 and pL1
is assumed to have Gaussian population      distribution    with mean 0 and standard
deviation 8,. Although the model does not directly include “leisure” in the utility

   46LSW used different sets of explanatory variables in the reduced-form        model including calculated
“option values” of continued work (the expected present value of benefits earned by retiring at the
“optimal” age, i.e. the age at which the total present value of benefits, wages plus pensions, is maximized).
Other specifications   used the levels and present values of Social Security and pension benefits as well
as changes in the present value of these benefits (“pension accruals”), predicted earnings in the next
year of employment,     and age.
Ch. 51: Structural Estimation of Markou Decision Processrs                                                               3135


function, it is implicitly included via the parameter 0,. Thus, we expect that 8, > 1
since the additional leisure time should imply that a dollar of pension income is
worth more than a dollar of wage income.
   The third structural model is the “option value model” developed in previous
work by Stock and Wise (1990). The option value model predicts that the worker
will leave the firm at the first year t in which the expected presented discounted value
of benefits from departing at t exceeds the maximum            of the expected values of
departing    at any future date. This rule differs from an optimal stopping rule
generated from the solution to a DP problem by interchanging            the “expectation”
and “maximization”        operators. This results in a temporally inconsistent    decision
rule in which the worker ignores the fact that as new information        arrives he will be
continually   revising his estimate of the optimal departure date t*.47
   The parameter estimates for the three structural models are presented in Table 1.
There are significant differences in the parameter estimates in the three models. The




                                                         Table 1
             Parameter     estimates   for the option    value and the dynamic        programing      models.

Parameter        Option    Value Models                           Dynamic     Programming       Models

                   (1)           (2)                    Extreme    Value                            Normal

                                              (1)           (2)             (3)         (4)           (5)          (6)

0,                1.00*         0.612         1.OQ*         1.018           1.187       1.oO*        1.187        1.109
                               (0.072)                     (0.045)         (0.215)                  (0.110)      (0.275)
0,                1.902         1.477        1.864          1.881           1.411      2.592         2.975        2.974
                 (0.192)       (0.445)      (0.144)        (0.185)         (0.307)    (0.100)       (0.039)      (0.374)
B                 0.855         0.895        0.618          0.620           0.583      0.899         0.916        0.920
                 (0.046)       (0.083)      (0.048)        (0.063)         (0.105)    (0.017)       (0.013)      (0.023)
0,                0.168         0.109        0.306          0.302           0.392      0.224         0.202        0.168
                 (0.016)       (0.046)      (0.037)        (0.036)         (0.090)    (0.021)       (0.022)      (0.023)
0,                                           0.00*          0.00*           0.407      0.OQ*         0.00*        0.183
                                                                           (0.138)                               (0.243)

Summary Statistics
-1n Y       294.59            280.32       279.60        279.57       277.25         277.24        276.49       276.17
x2 sample     36.5             53.5         38.9          38.2         36.2           45.0          40.7         41.5
x2 window     43.9             37.5         32.4          33.5         33.4           29.0          25.0         24.3

     Notes: Estimation is by maximum likelihood. All monetary                values are in %lOO,OOO(1980 dollars).
     *Parameter  value imposed.



   “‘Thus, it is somewhat of a misnomer to call it an “option value” model since it ignores the option
value of new information  that is explicitly accounted for in a dynamic programming     formulation.  Stern
(1995) shows that in many problems the computationally           simpler procedure   of interchanging    the
expectation and maximization    operators yields a very poor approximation    to the optimal decision rule
computed by DP methods.
3136                                                                                                                              John   Rust


Gaussian DP specification predicts a much higher implicit value for leisure (0,) than
the other two models, and the extreme-value          specification  yields a much lower
estimate of the discount factor /I. The estimated standard deviation CJof the E,‘Sis
also much higher in the extreme-value     specification     than the Gaussian. Allowing
for unobserved   heterogeneity did not significantly improve the fit of the Gaussian
DP model, although it did have a marginal impact on the extreme-value           mode1.48
   Figures 5 to 7 summarize the ability of the four models to fit the historical data.


                          1 ,
                                                                                                                           I
                                  -Actual           ---    PredIcted

                  0.8       -               .__~               -___--.




                  0.6 -~



                  0.4 -~




                           50               52        5L          56         58       60       62         64           66
                                                                            Age

Figure 5. Predicted versus actual 1980 departure                          rates and implicit cumulative        departures,     option value
                                                                         model


                      1

                            -        Actual
                            ---      Extreme       value
                 0.6                                                                                              A
                            -        Normal




                 0.6                                            ___

                                                                                                                       \


                 04




                          m,?
                                                                                                           I



                 0.2




Figure 6. Predicted
                   0c
                       W
                          _^
                           versus actual
                                            52       54          56



                                                    1980 departure
                                                                            58
                                                                           Age
                                                                                     60


                                                                    rates and implicit
                                                                                               62


                                                                                                cumulative
                                                                                                          64           66


                                                                                                                  departures,     dynamic
                                                         programming     model

  “*The log-likelihoods              in the Gaussian          and extreme-value       specifications   improved            to - 276.17 and
- 277.25, respectively.
Ch. 51: Structural          Estimation        ofMarkot> Decision Processes                                                            3137


                       1

                               -Actual            ---Predicted

                                                                                                                 A
                 0.8




                 0.6




                  0.L




                  0.2




                        n
                        -50              52         5L           56         56       60        62        6L           66

                                                                          Age


 Figure   7. Predicted         versus actual         departure        rates and implicit   cumulative    departures        probit   model




 Figure 5 compares the actual departure        rates (solid line) to the departure     rates
 predicted by the option value model (dashed line). Figure 6 presents a similar
 comparison     for the two DDP models, and Figure 7 presents the results for the
 best-fitting probit model. As one can see from the graphs all four models provide a
 relatively good fit of actual departure rates except that they all miss the pronounced
peak in departure rates at age 65. Table 1 presents the x2 goodness-of-fit       statistics
for each of the models. The four models are generally comparable,           although the
option model fits slightly worse and the probit model fits slightly better than the
two DDP models. The superior fit of the probit model is probably due to the
inclusion of age trends that are excluded from the other models.
    Figures 8 to 10 summarize the ability of the models to track the shift in departure
rates induced by the 1982 window plan. All forecasts were based on the estimated
utility function parameters      using data prior to 1982. Using these parameters,
predictions were generated from all four models after incorporating      the extra bonus
provisions    of the window plan. As is evident from Figures 8-10, the structural
models were generally able to accurately predict the large increase in departure rates
induced by the window plan, although once again none of the models was able to
capture the peak in departure rates at age 65. On the other hand, the reduced-form
probit model predicted that the window plan had essentially no effect on departure
rates. Other reduced-form specifications greatly overpredicted departure rates under
the window plan. The x2 goodness-of-fit       statistics presented in Table 1 show that
all of the structural models do a significantly better job of predicting the impact of
the window plan than any of the reduced-form           models.49 LSW concluded that:


   @The smallest x2 value for any of the reduced-form                            models    under    the window       plan was 57.3, the
largest was 623.3.
3138                                                                                                                        John Rust


                 1

                          -       Actual    1981
                          ---Actual         19.32                                                          IA\
               0.8 - -Predicted1982                                                                   I'          \
                                                                                                                   \
                                                                                                //.                 \
                                                                                            /
               0.6.




                     50               52       5L             56     58       60       62         6L                  66

                                                                     Age


Figure 8. Predicted versus actual departure                    rates and implicit cumulative departures                under the 1982
     window plan, based on 1980 parameter                      estimates, and 1981 actual rates: option               value model




                              -       Actual1981

                              ---Actual1982
                0.8
                              -Pred.Ext            Val.1982
                              -Pred         Normal1982


                 0.6




                       50              52          5L         56      58     60       62         6L              66

                                                                     Age


Figure 9. Predicted versus actual departure  rates and implicit cumulative departures  under                                 the 1982
 window plan, based on 1980 parameter estimates, and 1981 actual rates: dynamic programming                                   models



   The option value and the dynamic programming        models fit the data equally well,
   with a slight advantage to the normal dynamic programming        model. Both models
   correctly predicted the very large increase in retirement under the window plan,
   with some advantage in the fit to the option value model. In short, this evidence
   suggests that the option value and dynamic programming     models are considerably
   more successful than the less complex probit model in approximating         the rules
Ch. 51: Structural Estimation of Markov Decision Processes                                                      3139




                 0.8




                 06




                 0.L                                                    /
                                                                    /
                                                                   1’
                                                               /
                 0.2 -                                     I            /        /
                                                     / /
                      0    A-.-
                          50      52
                                       d..
                                       5L      56       58                  60       62    6L      66




Figure   10. Predicted versus actual departures rates and implicit cumulative              departures under the 1982
         window plan, based on 1980 parameter estimates, and 1981 actual                  rates: probit model




   individuals use to make retirement decisions, but that the more complex dynamic
   programming    rule approximates   behavior no better than the simpler option value
   rule. More definitive conclusions will have to await accumulated     evidence based
   on additional comparisons     using different data sets and with respect to different
   pension plan provisions. (p. 31).



References

Ahn, M.Y. (1993a) Duration Dependence,           Search Effort, and Labor Market Outcomes: A Structural
   Model of Labor Market History, manuscript,          Duke University.
Ahn, M.Y. (1993b) “Econometric       Analysis of Sequential Discrete Choice Behavior with Duration Depen-
   dence”, manuscript,    Duke University.
Ahn, H. and Manski, C. (1993) “Distribution      Theory for the Analysis of Binary Choice Under Uncertain-
   ty with Nonparametric     Estimation of Expectations”,     Journal ofEconometrics, 56(3), 270-291.
Amemiya, T. (1976) “On A Two-Step Estimation             of a Multivariate   Logit Model”, Journal of Econo-
   metrics, 8, 13-21.
Andrews, D.W.K. (1988a) “Chi-Square          Diagnostic Tests for Econometric      Models”, Journal of Econo-
   metrics, 37, 135-l 56.
Andrews, D.W.K. (1988b) “Chi-Square           Tests for Econometric       Models: Theory”, Econometrica,    56,
   1414-1453.
Arrow, K.J., T. Harris and J. Marschak (1951) “Optimal Inventory Policy”, Econometrica, 19(3), 250-272.
Bansal, R., A.R. Gallant, R. Hussey and G. Tauchen (1993) “Nonparametric             Estimation of Structural
   Models for High Frequency Currency Market Data”, Journal of Econometrics, forthcoming.
Basawa, I.V. and B.L.S. Prakasa Rao (1980) Statisrical Inference for Stochastic Processes. New York:
  Academic Press.
Bellman, R. (1957) Dynamic Programming. Princeton University Press: Princeton.
Berkovec,J.   and S. Stern (1991) “Job Exit Behavior of Older Men”, Econometrica, 59(l), 189-210.
3140                                                                                                      John Rust


Berndt, E., B. Hall, R. Hall and J. Hausman (1974) “Estimation           and Inference in Nonlinear Structural
   Models”, Annals ofEconomic         and Social Measurement, 3, 6533665.
Bertsekas, D. (1987) Dynamic Programming Deterministic and Stochastic Models, Prentice Hall: New
   York.
Bertsekas, D. and D. Castaiion (1989) “Adaptive Aggregation             Methods for Infinite Horizon Dynamic
   Programming”,       IEEE Transactions on Automatic Control, 34(6), 5899598.
Bhattacharya,      R.N. and M. Majumdar         (1989) “Controlled    Semi-Markov       Models ~ The Discounted
   Case”, Journal ofStatistical Planning and Inference, 21, 3655381.
Billingsley, P. (1961) Statistical Inferencefor Markou Processes. University of Chicago Press: Chicago.
Blackwell, D. (1962) “Discrete Dynamic Programming”,            Annals ofMathematical Statistics, 33, 719~726.
Blackwell, D. (1965) “Discounted        Dynamic Programming”,        Annals of Mathematical Statistics, 36, 2266
   235.
Blackwell, D. (1967) “Positive Dynamic Programming”,               Proceedings of the 5th BerkeCey Symposium
   on Mathematical Statistics and Probability, 1, 415-418.
Block, H. and J. Marschak        (1960) “Random Orderings and Stochastic Theories of Response”, in: I.
   Olkin, ed., Contributions to Probability and Statistics, Stanford University Press: Stanford.
Boldrin, M. and L. Montrucchio            (1986) “On the Indeterminacy        of Capital Accumulation        Paths”,
   Journal of Economic Theory, 40(l), 26-39.
Brock, W.A. (1982) “Asset Prices in a Production            Economy”, in: J.J. McCall, ed., The Economics of
   Information and Uncertainty, Chicago: University of Chicago Press.
Brock, W.A. and L.J. Mirman (1972) “Optimal Economic Growth Under Uncertainty:                      The Discounted
   Case”, Journal of Economic Theory, 4,4799513.
Chamberlain,      G. (1984) “Panel Data”, in: Z. Griliches and M.D. Intrilligator,        eds., Handbook of Econo-
   metrics Volume 2. North-Holland:         Amsterdam.    1247-1318.
Chew, S.H. and L.G. Epstein (1989) “The Structure of Preferences and Attitudes Towards the Timing
   and Resolution of Uncertainty”,       Znternational Economic Review, 30(l), 103-l 18.
Christensen,     B.J. and N.M. Kiefer (1991a) “The Exact Likelihood              Function     for an Empirical Job
   Search Model”, Econometric Theory.
Christensen, B.J. and N.M. Kiefer (1991b) Measurement             Error in the Prototypical      Job Search Model,
   manuscript,     Cornell University.
Cox, D.R. (1975) “Partial Likelihood”, Biometrika, 62(2), 2699276.
Cox, D.R. and D.V. Hinkley (1974) Theoretical Statistics. Chapman and Hall: London.
Dagsvik, J. (1983) “Discrete Dynamic Choice: An Extension of the Choice Models of Lute and Thurs-
   tone”, Journal of Mathematical Psychology, 27, l-43.
Dagsvik, J. (1991) A Note on the Theoretical Content of the GEU Model for Discrete Choice, manuscript,
   Central Bureau of Statistics, Oslo.
Daly, A.J. and S. Zachary, (1978) “Improved Multiple Choice Models”, in: D.A. Hensher and Q, Dalvi,
   eds., Determinants of Travel Choice, 3355357, Teakfield, Hampshire.
Das, M. (1992) “A Micro Econometric           Model of Capital Utilization and Retirement: The Case of the
   Cement Industry”, Review of Economic Studies, 59(2), 287-298.
Daula, T. and R. Moffitt (1991) “Estimating           a Dynamic Programming         Model of Army Reenlistment
   Behavior”, Military Compensation and Personnel Retention.
Debreu, G. (1960) “Review of R.D. Lute Individual Choice Behavior”, American Economic Review, 50,
    1866188.
Denardo, E.V. (1967) “Contraction        Mappings Underlying the Theory of Dynamic Programming”,              SIAM
   Review, 9, 1655177.
Dongarra,     J.J. and T. Hewitt (1986) “Implementing         Dense Linear Algebra Algorithms          Using Multi-
   tasking on the Cray X-MP-4”, SIAM Journal on Scientific and Statistical Computing, 7(l), 3477350.
Eckstein, Z. and K. Wolpin (1989a) “The Specification and Estimation of Dynamic Stochastic Discrete
   Choice Models”, Journal of Human Resources, 24(4),‘562-598.
Eckstein, Z. and K. Wolpin (1989b) “Dynamic Labour Force Participation                     of Married Women and
   Endogenous       Work Experience”, Review of Economic Studies, 56, 375-390.
Eckstein, Z. and K. Wolpin (1990) “Estimating           a Market Equilibrium      Search Model from Panel Data
   on Individuals”, Econometrica, 58(4), 783-808.
Engle, R. (1984) “Wald, Likelihood            Ratio and Lagrange       Multiplier    Tests in Econometrics”,       in:
   Z. Griliches      and M.D. Intrilligator,      eds., Handbook of Econometrics Vol 2. North-Holland:
   Amsterdam.
Ch. 51: Structural   Estimation   of Markov Decision Processes                                                    3141


Epstein, L.C. and SE. Zin (1989) “Substitution,        Risk Aversion, and the Temporal Behavior of Consump-
   tion and Asset Returns: A Theoretical Framework”,             Econometrica, 57(4), 937-970.
Flinn, C. and J.J. Heckman (1982) “New Methods for Analyzing Laborforce                      Dynamics”,    Journal qf
   Econometrics, 18, 115-168.
Gihman, 1.1. and A.V. Skorohod (1979) Controlled Stochastic Processes, Springer-Verlag                  New York.
Gotz. G.A. and J.J. McCall (1980) “Estimation in Sequential Decisionmaking                Models: A Methodological
   Note”, Economics Letters,6, 131-136.
Gotr, G.A. and J.J. McCall (1984) A Dynamic Retention Model for Air Force Officers, Report R-3028-
   AF, The RAND Corporation,           Santa Monica, California.
Haavelmii, T. (1944) “The Probability Approach in Econometrics”,              Econometrica Supplement, 12, 1-l 15.
Hakansson.       N. (1970) “Optimal Investment and Consumption               Strategies Under Risk for a Class of
   Utility Functibns”,‘Econometrica,       38, 587-607.
Hansen, L.P. (1982) “Large Sample Properties of Method of Moments Estimators”,                     Econometrica,     50,
    1029-1054.
Hansen, L.P. (1994) in: R. Engle and D. McFadden,                eds., Handbook of Econometrics Vol. 4. North-
    Holland: Amsterdam.
Hansen, L.P. and T.J. Sargent (1980a) “Formulating            and Estimating Dynamic Linear Rational Expec-
   tations Models”, Journal qf Economic Dynamics and Control, 2(l), 7-46.
Hansen, L.P. and T.J. Sargent (1980b) “Linear Rational Expectations                  Models for Dynamically      Inter-
   related Variables”, in: R.E. Lucas, Jr. and T.J. Sargent, eds., Rational Expectations and Econometric
    Practice, Minneapolis:    University of Minnesota Press.
Hansen, L.P. and T.J. Sargent (1993) Recursive Models of Dynamic Economies, manuscript,                       Hoover
    Institution.
Hansen, L.P. and K. Singleton (1982) “Generalized              Instrumental     Variables Estimation    of Nonlinear
    Rational Expectations     Models”, Econometrica, 50, 1269~1281.
Hansen, L.P. and K. Singleton (1983) “Stochastic              Consumption,       Risk Aversion, and the Temporal
    Behavior of Asset Returns”, Journal of Political Economy, 91(2), 249-265.
Heckman, J.J. (1981a) “Statistical Models of Discrete Panel Data”, in: CF. Manski and D. McFadden,
   eds., Srructural Analysis ofDiscrete Data, MIT Press: Cambridge, Massachusetts.
Heckman, J.J. (1981 b) “The Incidental Parameters            Problem and the Problem of Initial Conditions            in
    Estimating Discrete-Time,     Discrete-Data     Stochastic Processes”, in: C.F. Manski and D. McFadden,
   eds., Structural Analysis ofDiscrete Data, MIT Press: Cambridge, Massachusetts.
Heckman, J.J. (1991) Randomization           and Social Policy Evaluation,        NBER Technical Working paper
    107.
Heckman, J.J. (1994) “Alternative Approaches           to the Evaluation of Social Programs: Econometric           and
   Experimental      Methods”, in: J. Laffont and C. Sims, eds., Advances in Econometrics: Sixth World
    Congress, Econometric     Society Monographs,        Cambridge University Press.
Hotz, V.J. and R.A. Miller (1993) “Conditional           Choice Probabilities       and the Estimation   of Dynamic
   Models”, Review of Economic Studies, forthcoming.
Hotz, V.J., R.A. Miller, S. Sanders and J. Smith (1993) “A Simulation Estimator for Dynamic Models of
   Discrete Choice”, Review ofEconomic Studies, 60, 397-429.
Howard, R. (1960) Dynamic Programming and Markou Processes. J. Wiley: New York.
Howard, R. (1971) Dynamic Probabilistic Systems: Volume 2 ~ Semi-Markov and Decision Processes. J.
   Wiley: New York.
Hurwicz, L. and H. Uzawa (1971) “On the Integrability               of Demand Functions”, in: J. Chipman et al.,
   eds., Preferences, Utility, and Demand. New York: Harcourt, Brace and Jovanovich.
Judd, K. (1994) Numerical Methods in Economics, manuscript,                 Hoover Institution.
Keane, M. and K. Wolpin (1994) The Solution and Estimation of Discrete Choice Dynamic Programming
   Models by Simulation: Monte Carlo Evidence, manuscript,               University of Minnesota.
Kennet, M. (1994) “A Structural Model of Aircraft Engine Maintenance”, Journal of Applied Econometrics,
    forthcoming.
Kreps, D. and E. Porteus (1978) “Temporal Resolution of Uncertainty                   and Dynamic Choice Theory”,
   Econometrica, 46, 185-200.
Kushner, H.J. (1990) “Numerical Methods for Stochastic Control Problems in Continuous                  Time”, SIAM
   Journal on Control and Optimization, 28(5), 999-1048.
Kydland, F. and E.C. Prescott (1982) “Time to Build and Aggregate Fluctuations”,                   Econometrica, 50,
   1345-1370.
3142                                                                                                    John Rust



Lancaster, T. (1990) The Econometric Anulysis of Transition Data Cambridge                University Press.
Leland, H. (1974) “Optimal Growth in a Stochastic Environment”,             Review ofEconomic Studies, 41,75-86.
Levhari, D. and T. Srinivasan (1969) “Optimal Savings Under Uncertainty”,              Review ofEconomic Studies,
   36, 153-163.
Long, J.B. and C. Plosser (1983) “Real Business Cycles”, Journal of Political Economy, 91(I), 39-69.
Lucas, R.E. Jr. (1976) “Econometric        Policy Evaluation: A Critique”, in: K. Brunner and A.K. Meltzer,
   eds., The Phillips Curve and Lahour Markets. Carnegie-Rochester                 Conference    on Public Policy,
   North-Holland:      Amsterdam.
Lucas, R.E. Jr. (1978) “Asset Prices in an Exchange Economy”, Econometrica, 46, 1426-1446.
Lucas, R.E. Jr. and C.E. Prescott (1971)“Investment        Under Uncertainty”,     Econometrica, 39(5), 659-681.
Lumsdaine, R., J. Stock and D. Wise (1992) “Three Models of Retirement: Computational                    Complexity
   vs. Predictive Validity”, in: D. Wise, ed., Topics in the Economics of Aging. Chicago: University of
   Chicago Press.
Machina, M.J. (1982) “Expected Utility without the Independence Axiom”, Econometricu, 50-2,277-324.
Machina, M.J. (1987) “Choice Under Uncertainty:           Problems Solved and Unsolved”, Journul c>fEconomic
   Perspectives, l(l), 121-154.
Mantel, R. (1974) “On the Characterization        of Excess Demand”, Journal qf’Economic Theory, 7,348-353.
Marcet, A. (1994) “Simulation        Analysis of Stochastic Dynamic Models: Applications             to Theory and
   Estimation”,    in: C. Sims and J. Laffont, eds., Aduances in Econometrics: Proceedings of the 1990
   Meetings ofthe Econometric Society.
Marschak, T. (1953) “Economic          Measurements      for Policy and Prediction”,     in: W.C. Hood and T.J.
   Koopmans, eds., Studies in Econometric Method. Wiley: New York.
McFadden, D. (1973) “Conditional         Logit Analysis of Qualitative Choice Behavior”, in: P. Zarembka, ed.,
   Frontiers of Econometrics. Academic Press: New York.
McFadden, D. (1981) “Econometric          Models of Probabilistic Choice”, in: CF. Manski and D. McFadden,
   eds. Structural Analysis of Discrete Data. MIT Press: Cambridge, Massachusetts.
McFadden,      D. (1984) “Econometric       Analysis of Qualitative     Response Models”, in: 2. Griliches and
   M.D. Intriligator,   eds., Handbook of Econometrics Vol. 2. North-Holland:           Amsterdam.     1395-1457.
McFadden,      D. (1989) “A Method of Simulated Moments for Estimation of Discrete Response Models
   without Numerical Integration”,       Econometrica, 57(5), 995-1026.
Merton, R.C. (1969) “Lifetime Portfolio Selection Under Uncertaintv:                The Continuous-time       Case”.
   Review of E&on&         and Statistics, 51, 247-257.
Miller, R. (1984) “Job Matching and Occupational            Choice”, Journal of Political Economy, 92(6), 1086-
   1120.
Pakes, A. (1986) “Patents as Options: Some Estimates of the Value of Holding European Patent Stocks”,
   Econometrica, 54, 755-785.
Pakes, A. (1994) “Estimation      of Dynamic Structural       Models: Problems and Prospects Part II: Mixed
   Continuous+Discrete       Models and Market Interactions”,       in: C. Sims and J.J. Laffont, eds., Proceedings
   of the 6th World Congress of the Econometric Society, Barcelona, Spain. Cambridge University Press.
Pakes, A. and D. Pollard (1989) “Simulation and the Asvmptotics of Optimization                Estimators”. Econo-
   metrica, 57(5), 1027-1057.
Phelps, E. (1962) “Accumulation       of Risky Capital”, Econometrica, 30, 729-743.
Pollard, D. (1979) “General Chi-Square Goodness of Fit Tests with Data-Dependent                   Cells”, 2. Wahr-
  scheinlichkeitstheorie verw. Gebeite, 50, 317-331.
Polland, D. (1984) Convergence of Stochastic Processes. Springer Verlag.
Puterman, M.L. (1990) “Markov Decision Processes”, in: D.P. Heyman and M.J. Sobel, eds., Handbooks
  in Operations Research and Management Science Volume 2. North-HoIIand/Elsevier:                   Amsterdam.
Rust, J. (1987) “Optimal Replacement of GMC Bus Engines: An Empirical Model of Harold Zurcher”,
  Econometrica, 55(S), 999-1033.
Rust, J. (1988a) “Statistical   Models of Discrete Choice Processes”, Transportation Research, 22B(2),
   125-158.
Rust, J. (1988b) “Maximum       Likelihood Estimation of Discrete Control Processes”, SIAM Journal on
  Control and Optimization, 26(5), 1006-1023.
Rust, J. (1989) “A Dynamic         Programming       Model of Retirement       Behavior”, in: D. Wise, ed., The
  Economics of Aging. University of Chicago Press: Chicago. 359-398.
Rust, J. (1992) Do People Behave According to Bellman’s Principal of Optimality?,               Hoover Institution
  Working Paper, E-92-10.
Ch. 51: Structural Estimation of Markov Decision Processes                                                  3143


Rust, J. (1993) How Social Security and Medicare Affect Retirement Behavior in a World of Incomplete
  Markets, manuscript,     University of Wisconsin.
Rust, J. (1994) “Estimation     of Dynamic Structural      Models: Problems and Prospects Part I: Discrete
  Decision Processes”, in: C. Sims and J.J. Laflont, eds., Proceedings of the 6th World Congress of the
  Econometric Society, Barcelona, Spain. Cambridge University Press.
Rust, J. (1995a) “Numerical Dynamic Programming             in Economics”, in H. Amman, D. Kendrick and J.
  Rust, eds., Handbook of Computational Economics, North-Holland,            forthcoming.
Rust, J. (1995b) Using Randomization        to Break the Curse of Dimensionality,     manuscript,   University of
  Wisconsin.
Rust, J. (1996) Stochastic      Decision Processes: Theory, Computation,          and Estimation,     manuscript,
   University of Wisconsin.
Samuelson, P.A. (1969) “Lifetime Portfolio Selection by Dynamic Stochastic Programming”,                Review of
   Economics and Statistics, 51, 239-246.
Sargent, T.J. (1978) “Estimation     of Dynamic Labor Demand Schedules Under Rational Expectations”,
   Journal of Political Economy, 86(6), 1009-1044.
Sargent, T.J. (1981) “Interpreting    Economic Time Series”, Journal of Political Economy, 89(2), 213-248.
Smith, A.A. Jr. (1991) Solving Stochastic Dynamic Programming              Problems Using Rules of Thumb,
   Discussion Paper 818, Institute for Economic Research, Queen’s University, Ontario, Canada.
Sonnenschein,    H. (1973) “Do Walras Law and Continuity Characterize          the Class of Community       Excess
   Demand Functions?“, Journal of Economic Theory, 6,345-354.
Stern, S. (1992) “A Method for Smoothing Simulated Moments of Discrete Probabilities              in Multinomial
   Probit Models”, Econometrica, 60(4), 943-952.
Stern, S. (1995) “Approximate      Solutions to Stochastic Dynamic Programming          Problems”, Econometric
   Theory, forthcoming.
Stock, J. and D. Wise (1990) “Pensions, The Option Value of Work and Retirement”,                   Econometrica,
   58(5), 1151-1180.
Stokey, N.L., R.E. Lucas, Jr. and E.C. Prescott (1989) Recursioe Methods in Economic Dynamics. Harvard
   University Press: Cambridge, Massachusetts.
Theil, H. (1971) Principles of Econometrics. Wiley: New York.
van Diik. N.M. (1984) Controlled         Markov Processes: Time Discretization.       CWI Tract 11. Center for
   Mathematics    and domputer      Science, Amsterdam.
Verim, H. (1982) “The Nonparametric          Approach to Demand Analysis”, Econometrica, 52(3), 945-972.
White, H. (1982) “Maximum Likelihood Estimation of Misspecified Models”, Econometrica, 50, l-26.
Williams, H.C. (1977) “On the Formation          of Travel Demand Models and Economic Evaluation of User
   Benefit”, Environment and Planning, A-9,285-344.
Wolpin, K. (1984) “An Estimable Dynamic Stochastic Model of Fertility and Child Mortality”, Journal
   of Political Economy, 92(5), 852-874.
Wolpin, K. (1987) “Estimating       a Structural    Search Model: The Transition     from Schooling to Work”,
   Econometrica, 55, 801-818.



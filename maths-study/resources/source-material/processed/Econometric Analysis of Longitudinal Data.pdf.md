---
normalized_id: shared-pdf-reference-econometric-analysis-of-longitudinal-data
exam_code: SHARED
material_scope: econometric analysis of longitudinal data.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Econometric Analysis of Longitudinal Data.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-econometric-analysis-of-longitudinal-data

Chdpter 29


ECONOMETRIC ANALYSIS OF LONGITUDINAL DATA*
JAMES       J. HECKMAN

Uniuersiiy of Chicugo and NORC

BURTON        SINGER

Yule University und NORC




Contents

0.   Introduction                                                                                                        1690
1.   Single spell models                                                                                                 1691
     1.1.     Statistical     preliminaries                                                                              1691
     1.2.     Examples        of duration     models produced       by economic    theory                                1695
     1.3.     Conventional        reduced     form models                                                                1704
     1.4.     Identification      and estimation     strategies                                                          1710
     1.5.     Sampling       plans and initial conditions         problems                                               1727
     1.6.    New issues that arise in formulating             and estimating      choice theoretic   duration   models   1744
2.   Multiple spell models                                                                                               1748
     2.1.    A unified framework                                                                                         1748
     2.2.     General       duration   models for the analysis       of event history   data                             1753
3. Summary                                                                                                               1759
References                                                                                                               1761




   *This research was supported by NSF Grant SES-8107963 and NIH Grant NIH-l-ROl-HD16846-01
to the Economics Research Center, NORC, 6030 S. Ellis, Chicago, Illinois 60637. We thank Takeshi
Amemiya and Aaron Han for helpful comments.

Hundhook of Econometrics, Volume III, Edited by Z. Griliches and M.D. Intriligator
0 Elsevier Science Publishers BV, 1986
1690                                                         J. J. Heckman and B. Singer




0.     Introduction

In analyzing discrete choices made over time, two arguments favor the use of
continuous time models. (1) In most economic models there is no natural time
unit within which agents make their decisions and take their actions. Often it is
more natural and analytically convenient to characterize the agent’s decision and
action processes as operating in continuous time. (2) Even if there were natural
decision periods, there is no reason to suspect that they correspond to the annual
or quarterly data that are typically available to empirical analysts, or that the
discrete periods are synchronized across individuals. Inference about an underly-
ing stochastic process that is based on interval or point sampled data may be very
misleading especially if one falsely assumes that the process being investigated
operates in discrete time. Conventional discrete choice models such as logit and
probit when defined for one time interval are of a different functional form when
applied to another time unit, if they are defined at all. Continuous time models
are invariant to the time unit used to record the available data. A common set of
parameters can be used to generate probabilities of events occurring in intervals
of different length. For these reasons the use of continuous time duration models
is becoming widespread in economics.
   This paper considers the formulation and estimation of continuous time
econometric duration models. Research on this topic is relatively new and much
of the available literature has borrowed freely and often uncritically from
reliability theory and biostatistics. As a result, most papers in econometric
duration analysis present statistical models only loosely motivated by economic
theory and assume access to experimental data that are ideal in comparison to the
data actually available to social scientists.
   This paper is in two parts. Part I -which is by far the largest-considers   single
spell duration models which are the building blocks for the more elaborate
multiple spell models considered in Part II. Many issues that arise in multiple
spell models are more easily discussed in a single spell setting and in fact many of
the available duration data sets only record single spells.
   Our discussion of single spell duration models is in six sections. In Section 1.1
we present some useful definitions and statistical concepts. In Section 1.2 we
present a short catalogue of continuous time duration models that arise from
choice theoretic economic models. In Section 1.3 we consider conventional
methods for introducing observed and unobserved variables into reduced form
versions of duration models. We discuss the sensitivity of estimates obtained from
single spell duration models to inherently ad hoc methods for controlling for
observed and unobserved variables.
Ch. 29: Econometric     Analysis of Longitudinal    Data                                              1691

   The extreme   sensitivity to ad hoc parameterizations of duration models that is
exhibited in this section leads us to ask the question “what features of duration
models can be identified nonparametrically ?” Our answer is the topic of Section
1.4. There we present nonparametric procedures for assessing qualitative features
of conditional duration distributions in the presence of observed and unobserved
variables. We discuss nonparametric identification criteria for a class of duration
models (proportional hazard models) and discuss tradeoffs among criteria re-
quired to secure nonparametric identification. We also discuss these questions for
a more general class of duration models. The final topic considered in this section
is nonparametric estimation of duration models.
   In Section 1.5 we discuss the problem of initial conditions. There are few
duration data sets for which the beginning of the sample observation period
coincides with the start of a spell. More commonly, the available data for single
spell models consist of interrupted spells or portions of spells observed after the
sample observation period begins. The problem raised by this sort of sampling
frame and its solution are well known for duration models with no unobservables
in time homogeneous environments. We present these solutions and then discuss
this problem for the more difficult but empirically relevant case of models with
unobservable variables in time inhomogeneous environments. In Section 1.6 we
return to the structural duration models discussed in Section 1.2 and consider new
econometric issues that arise in attempting to recover explicit economic parame-
ters.
   Part II on multiple spells is divided into two sections. The first (Section 2.1)
presents a general framework which contains many interesting multiple spell
models as a special case. The second (Section 2.2) presents a multiple spell event
history model and considers conditions under which access to multiple spell data
aids in securing model identification. This paper concludes with a brief summary.


1.     Single spell models



1.1.    Statistical preliminaries

There are now a variety of excellent textbooks on duration analysis that discuss
the formulation of duration models so that a lengthy introduction to standard
survival models is unnecessary.’ In an effort to make this chapter self-contained,
however, this section sets out the essential ideas that we need from this literature
in the rest of the chapter.

  ‘See especially,   Kalbfleisch   and Prentice    (1980), Lawless (1982) and Cox and Oakes (1984).
1692                                                                                  J. J. Heckman   and B. Singer

  A nonnegative random variable T with absolutely continuous distribution
function G(t) and density g(t) may be uniquely characterized by its hazard
function. The hazard for T is the conditional density of T given T > t 2 0, i.e.


       h(t)=f(tlTx)=                     s(t)                                                              (1.1.1)
                                       l-G(t)        “*

Knowledge of G determines h.
  Conversely, knowledge of h determines G because by integration of (1.1.1)


          /*h(U)du=-ln(I-G(x))Irfc,
           0                                         0


          G(t) =I-exp(        -Jbh(u)du);                                                                  (1.1.2)


c = 0 since G(0) = 0. The density of T is


       g(t)=      h(t)exp(     -p(u)du).                                                                   (1.1.3)


   For the rest of this paper we assume that the distribution of T is absolutely
continuous, and we associate T with spell duration.2 In this case it is also natural
to interpret h(t) as an exit rate or escape rate from the state because it is the limit
(as A + 0) of the probability that a spell terminates in interval (t, t + A) given
that the spell has lasted t periods, i.e.




                           G(t +A)-G(t)
               = lim
                  A-0            A                       I (I-   &))

                    s(t)                                                                                   (1.1.4)
               = l-G(t)  ’

Equation (1.1.4) constitutes an alternative definition of the hazard that links the
models discussed in Part I to the more general multistate models discussed in Part
II.

   *For    a treatment   of duration     distributions     that are not absolutely   continuous   see, e.g. Lawless
(1982).
Ch. 29: Econometric   Analysis of Longitudinal   Data                                1693


  The survivor function is the probability that a duration exceeds 1. Thus


     S(t)=P(T>t)=l-G(t)=exp(-c(u)du).                                             (1.1.5)


In terms of the survivor function we may write the density g(t) as



Note that there is no requirement that

       lim Jfi(u)du-+cc,                                                          (1.1.6)
      f-+cc 0

or equivalently that

      s(o0) = 0.

If (1.1.6) is satisfied, the duration distribution is termed nondefective. Otherwise,
it is termed defective.
   The technical language here creates the possibility of confusion. There is
nothing wrong with defective distributions. In fact they emerge naturally from
many optimizing models. For example, Jovanovic (1979) derives an infinite
horizon worker-firm matching model with a defective job tenure distribution.
Condition (1.1.6) is violated in his model so S(oc) > 0 because some proportion of
workers find that their current match is so successful that they never wish to leave
their jobs.
   Duration dependence is said to exist if

       dh(t) _+.
         dt           ’

The only density with no duration dependence almost everywhere is the exponen-
 tial distribution. For in this case h(t) = h, a constant, and hence from (1.1.2), T is
 an exponential random variable. Obviously if G is exponential, h(t) = h.
    If dh(t)/dt    > 0, at t = t,, there is said to be positive duration dependence at t,.
 If d h( t)/dt < 0, at t = to, there is said to be negative duration dependence at t,. In
job search models of unemployment, positive duration dependence arises in the
case of a “declining reservation wage” (see, e.g. Lippman and McCall, 1976). In
 this case the exit rate from unemployment is monotonically increasing in t. In job
turnover models negative duration dependence (at least asymptotically) is associ-
ated with worker-firm matching models (see, e.g. Jovanovic, 1979).
1694                                                                  J. .I.Heckman and B. Singer


   For many econometric duration models it is natural to analyze conditional
duration distributions where the conditioning is with respect to observed (x(t))
and unobserved (O(t)) variables. Indeed, by analogy with conventional regression
analysis, much of the attention in many duration analyses focuses on the effect of
regressors (x( t )) on durations.
   We define the conditional hazard as

                                        Pr(t<T-ct+AlT>t,x(t),B(t))
       h(tlx(t),t3(t))    = lim                                                          (1.1.7)
                               A-0                       A

The dating on regressor vector x(t) is an innocuous convention. x(t) may include
functions of the entire past or future or the entire paths of some variables, e.g.




where the zi( U) are underlying time dated regressor variables.
  We make the following assumptions about these conditioning variables.
  (A.l) O(t) is distributed independently of x(t’) for all t, t’. The distribution of
        8 is p(e). The distribution of x is D(x).
  (A.2) There are no functional restrictions connecting the conditional distribu-
        tion of T given B and x and the marginal distributions of B and x.
Speaking very loosely, x is assumed to be “weakly exogenous” with respect to the
duration process. More precisely x is ancillary for T.3
   By analogy with the definitions presented for the raw duration models, we may
integrate (1.1.7) to produce the conditional duration distribution


       G(tlx,e) =I-exp(
                     -~(2+(u),e(24))d24),                                                (1.1.8)


the conditional     survivor function

       qtle,   X) = P(T>       tlx,e)
                  = exp (-j’h(ulx(u),e(u))du),                                          (1.1.9)
                                0

  ‘See. e.g. COY and Hinkley   (1974) fw a discussionof ancillzity.
Ch. 29: Econometric Anulysis of Longitudinal Dutu                               1695

and the conditional density



   One specification of conditional hazard (1.1.7) that has received much attention
in the literature is the proportional hazard specification [see Cox (1972)]



which postulates that the log of the conditional hazard is linear in functions of t,
x and 8 and that

         44)     2 o,de(t))   md-+))         20     for all t,

where 17is a monotonic continuous increasing function of e(t).


1.2.      Examples of duration models produced by economic theory

In this section of the paper, we present three examples of duration models
produced by economic choice models. These examples are (A) a continuous time
labor supply, (B) a continuous time search unemployment model, and (C) a
continuous time consumer purchase model that generalizes conventional discrete
choice models in a straightforward way.
   Examples A and B contain most of the essential ideas. We demonstrate how a
continuous time formulation avoids the need to specify arbitrary decision periods
as is required in conventional discrete time models (see, e.g. Heckman, 1981a).
We also discuss a certain identification problem that arises in single spell models
that is “solved” by assumption in conventional discrete time formulations.

1.2.1.         Example A: A dynamic model of labor force participation

The one period version of this model is the workhorse of labor economics.
Consumers at age a are assumed to possess a concave twice differentiable one
period utility function defined over goods (X(a)) and leisure (L(a)). Denote this
utility function by U( X(a), L(a)). Define leisure hours so that 0 I L(a) I 1. The
consumer is free to choose his hours of work at parametric wage W(a). There are
no .fixed costs of work, and for convenience taxes are ignored. At each age the
consumer receives unearned income Y(a). There is no saving or borrowing.
Decisions are assumed to be made under perfect certainty.
   The consumer works at age a if the marginal rate of substitution between
goods and leisure evaluated at the no work position (also known as the non-
1696                                                         J. J. Hecknun and B. Singer


market wage)

                    mw~l)                                                       (1.24
       M(Y(a))
           = U,(Y(a),l)         ’


is less than the market wage N’(a). For if this is so, his utility is higher in the
market than at home. The subscripts on U denote partial derivatives with respect
to the appropriate argument. It is convenient to define an index function Z(u)
written as

       z(u) =W(u)-M(Y(u)).

If Z(u) 2 0, the consumer works at age a, and we record this event by setting
d(u) =l. If Z(a) -C0, d(u) = 0.
   In a discrete time model, a spell of employment begins at a, and ends at u2 + 1
provided that Z(u, - 1) < 0, Z(u, + j) 2 0, j = 0,. . . , u2 - a,, I(u, + 1) < 0. Re-
versing the direction of the inequalities generates a characterization of a nonwork
spell that begins at a, and ends at u2.
   To complete the econometric specification, error term E(U) is introduced.
Under an assumption of perfect certainty, the error term arises from variables
observed by the consumer but not observed by the econometrician. In the current
context, E(U) can be interpreted as a shifter of household technology and tastes.
For each person successive values of E(U) may be correlated, but it is assumed
that E(U) is independent of Y(u) and IV(u). We define the index function
inclusive of E(U) as

       z*(u) = W(u)-M(Y(u))+E(u).                                               (1.2.2)

If Z*(u) 2 0, the consumer works at age a.
   The distribution of Z*(u) induces a distribution on employment spells. To
demonstrate this point in a simple way we assume that (i) the E(U) are serially
independent, (ii) the environment is time homogeneous so W(u) and Y(u) remain
constant over time for the individual, (iii) the probability that a new value of E is
received in an interval is P, and (iv) that the arrival times of new values of E(U)
are independent of W, Y, and other arrival times. We denote the c.d.f. of E by F.
By virtue of the perfect certainty assumption, the individual knows when new
values of E will arrive and what they will be. The econometrician, however, does
not have this information at his disposal. He never directly observes E(U) and
only knows that a new value of nonmarket time has arrived if the consumer
actually changes state.
Ch. 29: Econometric        Annlysis of Longitudinul   Dutu                                   1697


  The probability                that an employed person does not leave the employed state is

      I-   P(G)>                                                                         (1.2.3)

where 4 = M(Y) - W. The probability of receiving j new values of E in interval
t, is


      Pj =       >       Pi(l_      P)te-j,
             (       i

The probability that a spell is longer than t, is the sum over j of the products of
the probability of receiving j innovations in t,(Pi) and the probability that the
person does not leave the employed state on each of the i occasions (1 - F( #))j.
Thus


      p(q>t,)=
                                     (i
                                 2 ‘f pj(i-P)‘e-‘(i-F(q))’
                                       J

                          =
                             j=()



                             (l-      PF(J/))“.                                          (1.2.4)

Thus the probability                 that an employment spell starting at calendar time t, = 0
terminates at t, is

      P(T,=t,)=P(T,>t,-l)-P(T,x,)

                          = (l-PF(lj/))“-‘(PF(~)).                                       (1.2.5)

  By similar reasoning it can be shown that the probability                  that a nonemploy-
ment spell lasts t, periods is

      P(T,=t,)=                  [(l-P(l-F(rC/))]‘n-‘P(l-F(rC,)).                        (1.2.6)

   In conventional               models of discrete choice over time [see, e.g. Heckman (1981a)l
P is implicitly set to one. Thus in these models it is assumed that the consumer
receives a new draw of E each period. The model just presented generalizes these
models to allow for the possibility that E may remain constant over several
periods of time. Such a generalization creates an identification problem because

PF( 4) or P(l            -
from a single employment or nonemployment spell it is only possible to estimate
                 F( #)) respectively. This implies that any single spell model of the
duration of employment or nonemployment is consistent with the model of eq.
(1.2.2) with P =l or with another model in which (1.2.2) does not characterize
behavior but in which the economic variables determine the arrival time of new
values of E. However, access to both employment and nonemployment spells
1698                                                          J. J. Heckman and B. Singer

solves this problem because P = PF(#)+ P(l- F(q)), and hence F(#) and. P
are separately identified.
   The preceding model assumes that there are natural periods of time within
which innovations in E may occur. For certain organized markets there may be
well-defined trading intervals, but for the consumer’s problem considered here no
such natural time periods exist. This suggests the following continuous time
reformulation.
   In place of the Bernoulli assumption for the arrival of fresh values of E, suppose
instead that a Poisson process governs the arrival of shocks. As is well known [see,
e.g. Feller (1970)] the Poisson distribution is the limit of a Bernoulli trial process
in which the probability of success in each interval 17= A/n, P,, goes to zero in
such a way that lim, _,OnPq + X # 0. Thus in the reformulated continuous time
model it is assumed that an infinitely large number of very low probability
Bernoulli trials occur within a specified interval of time.
   For a time homogeneous environment the probability of receiving j offers in
time period t, is


       P(jlt   e ) = exp( - At e ) (Ye)
                                                                                (1.2.7)
                                          J!   ’



Thus for the continuous time model the probability that a person who begins
employment at a = a, will stay in the employed state at least t, periods is, by
reasoning analogous to that used to derive (1.2.6),


       Pr(T,>t,)=         2 exp(-hr,)$$(l-F($))i
                         J=o




                      = exp(- W#)t,),                                           (1.2.8)

so the density of spell lengths is

       dt,) = W~)exp(- WWJ-

A more direct way to derive (1.2.8) notes that from the definition of a Poisson
process, the probability of receiving a new value of E in interval (a, CI+ A) is

       p = XA + o(A),


where lim d ~ o( o(A)/A) + 0, and the probability of exiting the employment state
conditional on an arrival of E is E;(#). Hence the exit rate or hazard rate from the
Ch. 29: Econometric Analysis of Longitudinal Data                                                      1699


employment         state is

      h’=di_m         XAFtJI)
                          +o(A) 3
                               A




          = XF($).
Using (1.1.4) relating the hazard function and the survivor function we conclude
that

      Pr(T, > t,) = exp( - pe(u)du)                   = exp(-     XF(#)t,).

   By similar reasoning, the probability that a person starting in the nonemployed
state will stay on in that state for at least duration t, is

      Pr(T,>t,lh)=exp(-A(l-F($))t,).

Analogous to the identification result already presented for the discrete time
model, it is impossible using single spell employment or nonemployment data to
separate X from F( I/J) or 1 - F( J/) respectively. However, access to data on both
employment and nonemployment spells makes it possible to identify both X and
F(#).
   The assumption of time homogeneity of the environment is made only to
simplify the argument. Suppose that nonmarket time arrives via a nonhomoge-
neous Poisson process so that the probability of receiving one nonmarket draw in
interval (a, a + A) is

      p(u) = A(a)A + o(A).                                                                         (1.2.9)

Assuming that W and Y remain constant, the hazard rate for exit from employ-
ment at time period a for a spell that begins at a, is

      h&la,)        = +)F(ICI),                                                                  (1.2.10)

so that the survivor function for the spell is

      P(T,>t,lur)=exp                  -F(+)c”n(.)d.).’                                          (1.2.11)
                                   (

  4As first noted by Lundberg (1903), it is possible      to transform   this model to a time homogeneous
Poisson model if we redefine duration time to be

      ~*(r,,a,)=/““f’A(u)du.
                        01
Allowing for time inhomogeneity      in Y(a) and W(a) raises a messy, but not especially deep problem.
It is possible that the values of these variables would change at a point in time in between the arrival
of E values and that such changes would result in a reversal of the sign of I*(a) so that the consumer
would cease working at points in time when e did not change. Conditioning      on the paths of Y(a) and
W(a) formally eliminates the probiem.
1700                                                                        J. J. Heckman    and B. Singer

By similar reasoning


       ~(~,>t,(a,)=exp              -(I-F(#))f+%(u)du).
                                i



1.2.2.     Example B: A one state model of search unemployment

This model is well exposited in Lippman and McCall (1976). The environment is
assumed to be time homogeneous. Agents are assumed to be income maximizers.
If an instantaneous cost c is incurred, job offers arrive from a Poisson process
with parameter X independent of the level of c(c > 0). The probability of
receiving a wage offer in time interval At is X At + o(At).5 Thus the probability
of two or more job offers in interval At is negligible.6
   Successive wage offers are independent realizations from a known absolutely
continuous wage distribution F(W) with finite mean that is assumed to be
common to all agents. Once refused, wage offers are no longer available. Jobs last
forever, there is no on the job search, and workers live forever. The instantaneous
rate of interest is r( > 0).
   V is the value of search. Using Bellman’s optimality principle for dynamic
programming [see, e.g. Ross (1970)], V may be decomposed into three compo-
nents plus a negligible component [of order o(A t)].


         v=------- cAt
                              (l-    XAt) ~
                l+rAt     +     l+rAt

             + &Emax[w/r;                  V]+o(At),            for Y> 0,

           = 0 otherwise.                                                                       (1.2.12)

   The first term on the right of (1.2.12) is the discounted cost of search in interval
At. The second term is the probability of not receiving an offer (1 - X At) times
the discounted value of search at the end of interval At. The third term is the
probability of receiving a wage offer, (A At), times the discounted value of the
expectation [computed with respect to F(W)] of the maximum of the two options
confronting the agent who receives a wage offer: to take the offer (with present
value w/r) or to continue searching (with present value I’). Note that eq. (1.2.12)

   50( A t) is defined as a term such that lim,, _ Oo( A t)/A t + 0.
   ‘For one justification    of the Poisson wage arrival assumption,   see, e.g. Burdett   and Mortensen
(1978).
Ch. 29: Econometric Analysis of Longitudinal Data                                1701

is defined only for V> 0. If I/= 0, we may define the agent as out of the labor
force [see Lippman and McCall (1976)]. As a consequence of the time homogene-
ity of the environment, once out the agent is always out. Sufficient to ensure the
existence of an optimal reservation wage policy in this model is E( ]Wl) < cc
[Robbins (1970)].
   Collecting terms in (1.2.12) and passing to the limit, we reach the familiar
formula [Lippman and McCall (1976)]


      c+rV=      (h/r)i;(~-rV)dF(w)                       for V> 0,       (1.2.13)


where rV is the reservation wage, which is implicitly determined from (1.2.13).
For any offered wage w 2 rV, the agent accepts the offer. The probability that an
offer is unacceptable is F(F(~V).
   To calculate the probability that an unemployment spell T, exceeds t,, we may
proceed as in the preceding discussion of labor supply models and note that the
probability of receiving an offer in time interval (a, a + A) is

      p = hA + o(A),                                                      (1.2.14)

and further note that the probability that an offer is accepted is (1 - F(rV))    so

      h, = X(1 - F(rV)),                                                  (1.2.15)

and

      P(T, > t,) = exp( - h(l-           F(rV))t,).                       (1.2.16)

For discussion of the economic content of this model, see, e.g Lippman and
McCall (1976) or Flinn and Heckman (1982a).
   Accepted wages are truncated random variables with rV as the lower point of
truncation. The density of accepted wages is


      g( WIW> rv)      =        f(w)
                                                 W2l.V.                   (1.2.17)
                           l-    F(rV)    ’




Thus the one spell search model has the same statistical structure for accepted
wages .as other models of self selection in labor economics [Lewis (1974),
Heckman (1974), and the references in Amemiya (1984)].
1702                                                                         J. J. Heckmun and B. Singer

   From the assumption that wages are distributed independently of wage arrival
times, the joint density of duration times t, and accepted wages (w) is the
product of the density of each random variable,


       m(t,,w)=       {A(l-F(r~))exp-(X(l-F(rT/)t.)}                         I_f21;tv)
                  = (xexp-h(l-F(r~))t,)f(w),                         w2rv.                     (1.2.18)

   Time homogeneity of the environment is a strong assumption to invoke
especially for the analysis of data on unemployment spells. Even if the external
environment were time homogeneous, finiteness of life induces time inhomogene-
ity in the decision process of the agent. We present a model for a time
inhomogeneous environment.
   For simplicity we assume that a reservation wage property characterizes the
optimal policy noting that for general time inhomogeneous models it need not.7
We denote the reservation wage at time r as TV(~).
   The probability that an individual receives a wage offer in time period (7, r + A)
is

       &)=X(r)A+o(A).                                                                          (1.2.19)

The probability that it is accepted is (1 - F( rV( 7))). Thus the hazard rate at time
7 for exit from an unemployment spell is

       h(T) = q4(1-          w+))),                                                            (1.2.20)

so that the probability that a spell that began at r1 lasts at least t, is


                                            h(z)(l-F(rV(z)))dr).                               (1.2.21)


The associated density is



                    . exp ( -J’““+)(l-a(rV(z)))dr).8
                                71



   ‘For time inhomogeneity      induced solely by the finiteness of life, the reservation wage property
characterizes   an optimal policy (see, e.g. De Groot, 1970).
   ‘Note that in this model it is trivial to introduce       time varying forcing variables because by
assumption    the agent cannot accept a job in between arrival of job offers. Compare with the discussion
in footnote 4.
C/I. 29: Econometric     Analysis o/ Longitudinul   Datu                           1703

1.2.3.    Example C: A dynamic McFadden model

As in the marketing literature (see, e.g. Hauser and Wisniewski, 1982a, b, and its
nonstationary    extension in Singer, 1982), we imagine consumer choice as a
sequential affair. An individual goes to a grocery store at randomly selected times.
Let h(r) be the hazard function associated with the density generating the
probability of the event that the consumer goes to the store at time r. We assume
that the probability of two or more visits to the store in interval A is o(A).
Conditional on arrival at the store, he may purchase one of J items. Denote the
purchase probability by Pi<7). Choices made at different times are assumed to be
independent, and they are also independent of arrival times. Then the probability
that the consumer purchases good j at time r is




so that the probability that the next purchase is item j at a time t = r + ri or later
is


      ~(t, jl~~) =exp( -_l?+‘h(U)Pj(u)da).                                    (1.2.23)
                           71

   The Pj may be specified using one of the many discrete choice models discussed
in Amemiya’s survey (1981). For the McFadden random utility model with
Weibull errors (1974), the Pi are multinominal logit. For the Domencich-
McFadden (1975) random coefficients preference model with normal coefficients
the Pj are specified by multivariate probit.
   In the dynamic McFadden model few new issues of estimation and specifica-
tion arise that have not already been discussed above or in Amemiya’s survey
article (1984). For concreteness, we consider the most elementary version of this
model.
   Following McFadden (1974), the utility associated with each of J possible
choices at time r is written as

      ~(T)=v(~,xj(T))+E(~,xj(T)),                          j=l,.   . ., J


where s denotes vectors of measured attributes of individuals, X(T) represents
vectors of attributes of choices, V is a nonstochastic function and the E(S, xj( 7))
are i.i.d. Weibull, i.e.
1704                                                          J. J. Heckman   and B. Singer

Then as demonstrated                by McFadden (p. 110)




Adopting a linear specification for V we write

       I+? x,(r)>        = $(.GG),
so
                                    exp(+48(4)
       pj(sT   x,(T))=          J




                            c         exP(x;(+(4).
                            I=1


In a model without unobservable variables, the methods required to estimate this
model are conventional.
   The parameter /3(s) can be estimated by standard logit analysis using data on
purchases made at purchase times. The estimation of the times between visits to
stores can be conducted using the conventional duration models described in
Section 1.3. More general forms of Markovian dependence across successive
purchases can be incorporated (see Singer, 1982, for further details).


1.3.     Conventional reduced form models

 The most direct approach to estimating the economic duration models presented
 in Section 1.2 is to specify functional forms for the economic parameters and their
dependence on observed and unobserved variables. This approach is both costly
 and controversial. It is controversial because economic theory usually does not
produce these functional forms- at best it specifies potential lists of regressor
variables some portion of which may be unobserved in any data set. Moreover in
many areas of research such as in the study of unemployment durations, there is
no widespread agreement in the research community about the correct theory.
The approach is costly because it requires nonlinear optimization of criterion
functions that often can be determined only as implicit functions. We discuss this
point further in Section 1.6.
    Because of these considerations and because of a widespread belief that it is
useful to get a “feel for the data” before more elaborate statistical models are fit,
reduced form approaches are common in the duration analysis literature. Such an
approach to the data is inherently ad hoc because the true functional form of the
duration model is unknown. At issue is the robustness of the qualitative in-
ferences obtained from these models with regard to alternative ad hoc specifica-
tions. In this section of the paper we review conventional approaches and reveal
Ch. 29: Econometric   Analysis of Longitudinal   Data                          1705

their lack of robustness. Section 1.4 presents our response to this lack of
robustness.
   The problem of nonrobustness arises solely because regressors and unobserv-
ables are introduced into the duration model. If unobservables were ignored and
the available data were sufficiently rich, it would be possible to estimate a
duration model by a nonparametric KaplanMeier          procedure [see, e.g. Lawless
(1982) or Kalbfleisch and Prentice (1980)]. Such a general nonparametric ap-
proach is unlikely to prove successful in econometrics because (a) the available
samples are small especially after cross classification by regressor variables and
(b) empirical modesty leads most analysts to admit that some determinants of any
duration decision may be omitted from the data sets at their disposal.
   Failure to control for unobserved components leads to a well known bias
toward negative duration dependence. This is the content of the following
proposition:
Proposition 1
Uncontrolled unobservables bias estimated hazards towards negative duration
dependence.    0
   The proof is a straightforward application of the Cauchy-Schwartz theorem.
Let h( tlx, 6) be the hazard conditional on x, B and h(tln) is the hazard
conditional only on x. These hazards are associated respectively with conditional
distributions G(tlx,8) and G(tlx).
   From the definition,

                       j&lxJ)dd6’)
      h(tlx)    =


Thus’


      ah(M) =
                      j-(1-G(tlx,e))         ah(ra-Jye)
                                                  d/J(e)


                              Jo-ww))dd~)




  ‘We use the fact that


      ah(tlx,@) =           at
           at
1706                                                         J. J. Heckman and B. Singer

The second term on the right-hand side is always nonpositive as a consequence of
the Cauchy-Schwartz theorem. 0
   Intuitively, more mobility prone persons are the first to leave the population
leaving the less mobile behind and hence creating the illusion of stronger negative
duration dependence than actually exists.
   To ignore unobservables is to bias estimated hazard functions in a known
direction. Ignoring observables has the same effect. So in response to the limited
size of our samples and in recognition of the myriad of plausible explanatory
variables that often do not appear in the available data, it is unwise to ignore
observed or unobserved variables. The problem is how to control for these
variables.
   There are many possible conditional hazard functions [see, e.g. Lawless (1982)].
One class of proportional hazard models that nests many previous models as a
special case and therefore might be termed “flexible” is the Box-Cox conditional
hazard


       h(f]x,@)=exp   (x ‘(t)j9+ ($+i+(+++B(l)),                               (1.3.2)


where hi # X,, x(t) is a 1 x k vector of regressors and p is a k X 1 vector of
parameters, and 8 is assumed to be scalar. (See Flinn and Heckman, 1982b.)
Exponentiating     ensures that the hazard is nonnegative as is required for a
conditional density.
    Setting y2 = 0 and Xi = 0 produces a Weibull hazard; setting y2 = 0 and hi = 1
produces a Gompertz hazard. Setting yi = yZ = 0 produces an exponential model.
Conditions under which this model is identified for the case y2 = 0 are presented
in Section 1.4.
    The conventional approach to single spell econometric duration analysis as-
sumes a specific functional form known up to a finite set of parameters for the
conditional hazard and a specific functional form known up to a finite set of
parameters for the distribution of unobservables. e(t) is assumed to be a time
invariant scalar random variable 8. An implicit assumption in most of this
literature is that the origin date of the sample is also the start date of the spells
being analyzed so that initial conditions or left censoring problems are ignored.
We question this assumption in Section 1.5 below.
    The conventional approach does, however, allow for right censored spells
assuming independent censoring mechanisms. We consider two such schemes.

   Let V(t) be the probability that a spell is censored at duration t or later. If

       v(t) = 0        t-c L,
                                                                               (1.3.3)
       v(t)   =l       12 L,
Ch. 29: Econometric Analysis of Lmgitudinal Data                                                1101

there is censoring at fixed duration L. This type of censoring is common in many
economic data sets. More generally, for continuous censoring times let u(t) be the
density associated with V(t). In an independent censoring scheme, the censoring
time is assumed to be independent of the survival time, and the censoring
distribution is assumed to be functionally independent of the survival distribu-
tion, and does not depend on 13.
   Let d = 1 if a spell is not right censored and d = 0 if it is. Let t denote an
observed spell length. Then the joint frequency of (t, d) conditional on x for the
case of absolutely continuous distribution V(t) is




                  = {~(t)‘-dv(t)d}l[h(tlr(t),e)l”S(tlx(t),e)dp(B).                          (1.3.4)
                                          8

By the assumption of functional independence between V(t) and G(tlx), we may
ignore the V and u functions in estimating p(e) and h(tlx(t), 0) via maximum
likelihood.
   For the Dirac censoring distribution (1.3.3), the density of observed durations
is


                                                                                            (1.3.5)


   It is apparent from (1.3.4) or (1.3.5) that without further restrictions, a variety
of h( tlx, 0) and ~(0) pairs will be consistent with any f( t, d Ix).” Conditions
under which a unique pair is determined are presented in Section 1.4. It is also
apparent from (1.3.4) or (1.3.5) that given the functional form of either h(tlx, 0)
or p( 0) and the data (f(t, d Ix)) it is possible, at least in principle, to appeal to
the theory of integral equations and solve for either p(8) or h(tlx,8). Current
practice thus ouerparumeterizes the duration model by specifying the functional
form of both h (t Ix, d) and p( 6). In Section 1.4, we discuss methods for
estimating ~(0) nonparametrically given that the functional form of h(tlx, 8) is
specified up to a finite number of parameters. In the rest of this section we
demonstrate consequences of incorrectly specifying either h(tlx, 6) or ~(0).
   First consider the impact of incorrect treatment of time varying regressor
variables. Many conventional econometric duration analyses are cavalier about

   “Heckman    and Singer (1982) present some examples.   They are not hard to generate   for anyone
with access to tables of integral transforms.
1708                                                                      J. J. Heckman and B. Singer

such variables because introducing them into the analysis raises computational
problems. Except for special time paths of variables the term




which appears in survivor function (1.1.8) does not have a closed form expression.
To evaluate it requires numerical integration.
  To circumvent this difficulty, one of two expedients is often adopted (see, e.g.
Lundberg, 1981, Cox and Lewis, 1966):
   (i) Replacing time trended variables with their within spell average


       x(t) = f jg:(U)dU.            t > 0,


   (ii) Using beginning of spell values




Expedient (i) has the undesirable effect of building spurious dependence between
duration time t and the manufactured regressor variable. To see this most clearly,
suppose that x is a scalar and x(u) = a + bu. Then clearly


       x(t)   = a + it,


and t and x(t) are clearly linearly dependent. Expedient (ii) ignores the time
inhomogeneity in the environment.”
   To illustrate the potential danger from adopting these expedients consider the
numbers presented in Table 1. These record Weibull hazards ((1.3.2) with yz = 0
and A, = 0) estimated on data for employment to nonemployment transitions
using the CTM program described by Hotz (1983). In these calculations, unob-
servables are ignored. A job turnover model estimated using expedient (i) indi-
cates weak negative duration dependence (column one row two) and a strong
negative effect of high national unemployment rates on the rate of exiting jobs.
The same model estimated using expedient (ii) now indicates (see column two)
strong negative duration dependence and a strong positive effect of high national

   I1Moreover in the multistate models with heterogeneity that are presented in Part II of this paper,
treating x(0) ‘as exogenous is incorrect because the value of x(0) at the start of the current spell
depends on the lengths of outcomes of preceding spells. See the discussion in Section 2.2. This
problem is also discussed in Flinn and Heckman (1982b, p. 62).
Ch. 29: Econometric       Anulysis of Longitudinal       Dais                                                1709

                                                        Table 1
                             Weibull model - Employment     to nonemployment      transitions
                                 (absolute value of normal statistics in parentheses)a

                                           Regressors fixed at              Regressors fixed at   Regressors
                                           average value over                value as of start       vary
                                                 the spell                        of spell          freely
                                              (expedient i)                    (expedient ii)

      Intercept                                        0.971                     - 3.743           - 3.078
                                                      (1.535)                    (12.074)           (8.670)
      In duration   (n)                           -0.137                         - 0.230           - 0.341
                                                    (1.571)                       (2.888)           (3.941)
      Married with spouse                         - 1.093                        - 0.921           -0.610
        present? ( = 1 if yes;                     (2.679)                        (2.310)           (1.971)
        = 0 otherwise)
      National unemployment                       - 1.800                          0.569              0.209
        rate                                       (6.286)                        (3.951)            (1.194)

         “Source:   See Flinn and Heckman        (1982b, p. 69).




unemployment rates on the rate of exiting employment. Allowing regressors to
vary freely reveals that the strong negative duration dependence effect remains,
but now the effect of the national unemployment rate on exit rates from
employment is weak and statistically insignificant.
   These empirical results are typical. Introducing time varying variables into
single spell duration models is inherently dangerous, and ad hoc methods for
doing so can produce wildly misleading results. More basically, separating the
effect of time varying variables from duration dependence is only possible if there
is “sufficient” independent variation in x(t). To see this, consider hazard (1.3.2)
with yz = 0 and x(t) scalar. Taking logs, we reach

                                               PI-1
      ln(h(tlx,d))=x(t)P+                      7                -Y1+   w.
                                           i         1     i

If

                t”’ -1
      x(t)    = 7’
                      1



it is obviously impossible to separately estimate /3 and yl. There is a classical
multicollinearity problem. For a single spell model in a time inhomogeneous
environment with general specifications for duration dependence, the analyst is at
the mercy of the data to avoid such linear dependence problems. Failure to
1710                                                                                     J. J. Heckman and B. Singer

                                                                  Table 2
                            Sensitivity     to misspecification     of the mixing distribution   ~(0)“~~

                              Normal       heterogeneity          Log normal   heterogeneity       Gamma     heterogeneity

       Intercept                       - 3.92                             - 13.2                              5.90
                                        (2.8)b                              (4.7)                            (3.4)
       In duration   ( y)              - 0.066                             - 0.708                          - 0.576
                                        (0.15)                              (0.17)                           (0.17)
                                            0.0036                         - 0.106                          - 0.202
                                           (0.048)                          (0.03)                           (0.06)

       Education                            0.0679                         - 0.322                          - 0.981
                                           (0.233)                          (0.145)                          (0.301)
       Tenure on                          - 0.0512                            0.00419                       - 0.034
         previous job                      (0.0149)                          (0.023)                         (0.016)
       Unemployment                       - 0.0172                            0.0061                        - 0.003
         benefits                          (0.0036)                          (0.0051)                        (0.004)

       Married                              0.833                             0.159                         - 0.607
         (0.1)                             (0.362)                           (0.30)                          (0.496)
       Unemployment                  - 26.12                                25.8                           - 17.9
         rate                              (9.5)                           (10.3)                           (11.2)
       Ed. x age                       - 0.00272                              0.00621                         0.0152
                                           (0.0044)                          (0.034)                         (0.0053)

          “Sample size is 456.
          ‘Standard  errors in parentheses.
          Source: See Heckman and Singer (1982) for further                discussion   of these numbers


control for time varying regressor variables may mislead, but introducing such
variables may create an identification problem.
   Next we consider the consequence of misspecifying the distribution of unob-
servables. Table 2 records estimates of a Weibull duration model with three
different specifications for ~(6) as indicated in the column headings. The esti-
mates and inference vary greatly depending on the functional form selected for
the mixing distribution. Trussell and Richards (1983) report similar results and
exhibit similar sensitivity to the choice of the functional form of the conditional
hazard h(tlx, 8) for a fixed p(O).

1.4.    Identijication and estimation strategies

In our experience the rather vivid examples of the sensitivity of estimates of
duration models to changes in specification presented in the previous.section of
the paper are the rule rather than the exception. This experience leads us to
address the following three questions in this section of the paper:

(A) What features, if any, of h( tin, l3) and/or                           ~(0) can be identified from the
    “raw data”, i.e. G(tlx)?
Ch. 29: Econometric    Analysis of Longiiudinal     Data                                                        1711

(B) Under what conditions are h(tjx, tl) and ~(6) identified? i.e. how much
    a priori information has to be imposed on the model before these functions
    are identified?
(C) What empirical strategies exist for estimating h(tlx, 0) and/or ~(8) non-
    parametrically and what is their performance?

We assume a time homogeneous environment throughout. Little is known about
the procedure proposed below for general time inhomogeneous environments.

I .4.1.   Nonparametric         procedures to assess the structural hazard h(t 1x, 0)

This section presents criteria that can be used to test the null hypothesis of no
structural duration dependence and that can be used to assess the degree of model
complexity that is required to adequately model the duration data at hand. The
criteria to be set forth here can be viewed in two ways: As identification theorems
and as empirical procedures to use with data.
   We consider the following problem: G(tlx) is estimated. We would like to infer
properties of G(tlx, 0) without adopting any parametric specification for p(O) or
h (t Ix, 0). We ignore any initial conditions problems. We further assume that x(t)
is time invariant.‘*
   As a consequence of Proposition 1 proved in the preceding section, if G( tlx)
exhibits positive duration dependence for some intervals of t values, h( tlx, 0)
must exhibit positive duration dependence for some interval of @ values in those
intervals of t. As noted in Section 1.3, this is so because the effect of scalar
heterogeneity is to make the observed conditional duration distribution exhibit
more negative duration dependence (more precisely, never less negative duration
dependence) than does the structural hazard h( tlx, 0).
    In order to test whether or not an empirical G( tlx) exhibits positive duration
dependence, it is possible to use the total time on test statistic (Barlow et al. 1972,
p. 267). This statistic is briefly described here. For each set of x values,
constituting a sample of 1, durations, order the first k durations starting with the
smallest



Let   DiII,= [I, -(i       + l)](t; - ti_&        where t, = 0. Define




    l2 If x(t) is not time invariant, additional identification   problems   arise. In particular,   nonparametric
estimation of G( tlx( 1)) becomes much more difficult.
1712                                                              J. J. Heckman and B. Singer

V, is called the cumulative total time on test statistic. If the observations are from
a distribution with an increasing hazard rate, V, tends to be large. Intuitively, if
G(tlx)is a distribution that exhibits positive duration dependence, D,: 1, sto-
chastically dominates D,: I,, D,: ,, stochastically dominates D, : l,, and so forth.
Critical values for testing the null hypothesis of no duration dependence have
been presented by Barlow and associates (1972, p. 269). This test can be modified
to deal with censored data (Barlow et al. 1972, p. 302). The test is valuable
because it enables the econometrician to test for positive duration dependence
without imposing any arbitrary parametric structure on the data.
   Negative duration dependence is more frequently observed in economic data.
That this should be so is obvious from eq. (1.3.1) in the proof of Proposition 1.
Even when the structural hazard has a positive derivative dh(t]x, 0)/& > 0, it
often occurs that the second term on the right-hand side of (1.3.1) outweighs the
first term. It is widely believed that it is impossible to distinguish structural
negative duration dependence from a pure heterogeneity explanation of observed
negative duration dependence when the analyst has access only to single spell
data. To investigate duration distributions exhibiting negative duration depen-
dence, it is helpful to distinguish two families of distributions.
   Let 9,= {G: -ln[l-G(t]       x )] is concave in t holding x fixed}. Membership in
this class can be determined from the total time on test statistic. If G, is log
concave, the 0,: r, defined earlier are stochastically increasing in i for fixed 1,
and X. Ordering the observations from the largest to the smallest and changing
the subscripts appropriately, we can use V, to test for log concavity.
   Next let gz = {G: G(tlx) = /(l -exp( - t+(X)n(d)))dp (0) for some probabil-
ity measure p on [0, cc]}. It is often erroneously suggested that gt = gz2, i.e. that
negative duration dependence by a homogeneous population (G E 9,) cannot be
distinguished from a pure heterogeneity explanation (G E g*).
    In fact, by virtue of Bernstein’s theorem (see, e.g. Feller, 1971, p. 439-440) if
G E qz it is completely monotone, i.e.


         (-l)$(l-G(t,x))rO                for n rl       and all t 2 0               (1.4.1)


and if G(tlx) satisfies (1.4.1), G(tjx) E 9f2.
  Setting n = 3, (4.1) is violated if (- 1)3[ J3/at3](1 - G(tJx)) < 0, i.e. if for some
t = t,


             _   a’Wx> +3h(t,x)%+‘(t,x)                     >o,
         [         at2                               I ,= f”

[see Heckman and Singer (1982) and Lancaster and Nickel1 (1980)].
Ch. 19: Econometric   Annlysis of Longitudinal   Data                                         1713

   Formal   verification of (1.4.1) requires uncensored     data sufficiently   rich to
support numerical differentiation   twice. Note that if the data are right censored at
r = t *, we may apply (1.4.1) over the interval 0 < 1 I t* provided that -we define




and test whether


      (-l)“$l-G*(#))>O                                for n 21   and        O<t<t*.       (1.4.2)



Satisfaction   of (1.4.2) for all 0 < t < t* is only a necessary         condition.   It is
sufficient only if t * + 00.
   Chamberlain    (1980) has produced an alternative       test of the necessary condi-
tions that must be satisfied for a distribution      to belong to gZ that does not
require numerical differentiation   of empirical distribution    functions and that can
be applied to censored data.
   The key insight in his test is as follows. For G E gZ2, the probability      that T > k
is the survivor function


                                                                                          (1.4.3)



By a transformation         of variables    z = exp( - +(x)77(6)),     we may transform   (1.4.3)
for fixed x to


      S( klx) = /olz’da*(z),                                                              (1.4.4)



i.e. as the k th moment of a random variable defined on the unit interval.
    From the solution to the classical Hausdorff moment problem (see, e.g. Shohat
and Tamarkin,     1943, p. 9) it is known that there exists a n*(z) that satisfies
(1.4.4) if


     A’??([lx)   2    0      k,I=O.l,...,        oc                                       (1.4.5)
1714                                                           J. J. Heckmun and B. Singer


where

       A”S(rlx) = S(@),

       A’S(/lx)=S(llx)-S(l+llx),

       A%(l(x)     = S(llx)-(      ;)S(l[x)




Choosing equispaced intervals (O,l,     .. . , [t*]) where [t *] is the nearest whole
integer less than t*, form the S(ZJx) functions I = 0,. . . , [I*]. Compute the
survivor functions so defined and test a subset of the necessary conditions
(i=l,...,    k). The estimated survivor functions are asymptotically normally dis-
tributed as the number of independent observations becomes large, and thus the
asymptotic distribution of the subset of survivor functions is straightforward to
compute. Failure of these necessary conditions implies that (1.4.4) and hence
(1.4.3) cannot represent the underlying duration distribution. Thus it is possible
to reject G E gz if some subset of conditions (1.4.5) is not satisfied. Note that if x
are i.i.d., the same test procedure can be applied to the full sample based on the
unconditional survivor functions S(Z), I = 1,. . . , [t *]. In an important paper Robb
(1984) extends this analysis by presenting a larger set of necessary conditions and
by producing finite sample test statistics for the strengthened conditions.
   It is important to note that (1.4.5) or (1.4.1) are rejection criteria. There are
other models that may satisfy (1.4.1). For example

                                                                                  (1.4.6)


for OL< 1 is completely monotone. By Bernstein’s theorem this distribution has a
representation in gz.

1.4.2.     Nonparametric procedures to assess the mixing distribution

In this subsection we consider some procedures that enable us to assess the
modality of the mixing distribution. For expositional simplicity we suppress the
dependence of X. Let Yj= {G:G(t)=jdg(u)du,            g(t)=jg(tlO)m(8)dO     for
some probability density m(0) and g(t(8)= k(t(B)u(t),       where @t(d) is sign
regular of order 2 (SR,)}.
Ch. 29: Econometric          Analysis of Lmgitudinul     Data                      1715

   Sign regularity means that if t, < t, and 6i < t’,, then


     E     det       W,l4)           kW2)           >.
       2
                     w214)           w2v2)      i   -    ’
                 i




where a2 is either +l or -1. If &2= + 1, then &t](3) is called totally positive of
order 2, abbreviated TP,. From the point of view of inferring properties about the
density of a mixing measure from properties of g, models with SR, conditional
densities allow us to obtain lower bounds on the number of modes in m(0) from
knowledge of the number of modes in g(u). Models for which k(t]e) =
g(t]e)/u( t) satisfies SR, include all members of the exponential family. In fact,
for the exponential family, k(t]e) is TP,. Thus an assessment of modality of an
estimated density, using, for example, the procedure of Hartigan and Hartigan
(1985), is an important guide to specifying the characteristics of the density of 0.
   Sign regular (particularly totally positive) kernels include many examples that
are central to model specification in economics. In particular, if dv(t) is any
measure on [0, + co) such that jam[exp(tO)]dv(t) -C+ cc for B E 0 (an ordered
set), let




and, in what follows, set dv(t) = u(t)dr and g(t]e) = /3(B)[expte]v(t). Then the
density g(t) = /fl( B)exp(te) u( t)m( B)de governs the observable durations of
spells, g(t]e) is a member of the exponential family, and k(t]@) = P(B)exp(te) is
 TP, (Karlin, 1968). The essential point in isolating this class of duration densities
is that knowledge of the number and character of the modes of g/u implies that
the density, m, of the mixing measure must have at least as many modes. In
particular, if g/u is unimodal, m cannot be monotonic; it must have at least one
mode. More generally, if c is an arbitrary positive level and (g(t)/u(t))-            c
changes sign k times as t increases from 0 to + co, then m(O)- c must change
sign at least k times as 8 traverses the parameter set 8 from left to right (Karlin,
1968, p. 21).
   The importance of this variation-diminishing character of the transformation
jk( tl8)m( 8)dB for modeling purposes is that if we assess the modality of g
using, for example, the method of Hartigan and Hartigan (1985) then because u
is given a priori, we know the modality of g/u, which in turn, implies restrictions
on m in fitting mixing densities to data. In terms of a strategy of fitting finite
mixtures, a bimodal g/u suggests fitting a measure with support at, say, five
1716                                                            J. J. Heckman and B. Singer




                                        Figure   1




points to the data, but subject to the constraints that p1 < p2, p2 > p3, p3 < p4,
and p4 > ps, as shown in Figure 1.
   Subsequent specification of a mixing density m( r3) to describe the same data
could proceed by fitting spline polynomials with knots at 8,, . . ., 0, to the
estimated discrete mixing distribution.


1.4.3.    Identijiability

In the preceding section, nonparametric procedures were proposed to assess
qualitative features of conditional hazards and mixing distributions. These proce-
dures aid in model selection but provide only qualitative guidelines to aid in
model specification. In this section we consider conditions under which the
conditional hazards and mixing distributions are identified. Virtually all that is
known about this topic is for proportional hazard models (1.1.10) with scalar time
invariant heterogeneity (e(t) = d) and time invariant regressors (x(t) = x). Thus
identification conditions are presented for the model

       Wx,     0) = W+)e.                                                          (1.4.7)

  Before stating identifiability conditions, it is useful to define

       Z(t)   = [+!+)du.


Then for the proportional hazard model (1.4.7) we have the following proposition
due to Elbers and Bidder (1982).
Proposition    2

If (i) E(O) = 1, (ii) Z(t) defined on [0, co) can be written as the integral of a
nonnegative integrable function 4 (t) defined on [0, cc), Z( t ) = /d# (u) du, (iii) the
set S, x E S, is an open set in Rk and the function cp is defined on S and is
nonnegative, differentiable and nonconstant on S, then Z, (p, and p(e) are
identified. 0
Ch. 29: Econometric   Analysis of Longitudinal   Data                            111-l

   The important point to note about Proposition 2 is that the identification
analysis is completely nonparametric. No restrictions are imposed on 4, cp or
~(6’) except for those stated in the proposition. Condition (iii) requires the
existence of at least one continuous valued regressor variable defined on an
interval. In the Appendix to their paper, Elbers and Bidder modify their proof to
establish identifiability in models with only discrete valued regressor variables.
However, the existence of at least one regressor variable in the model is essential
in securing identification. Condition (i) requires the existence of a mean for the
distribution of 19. This assumption excludes many plausible fat tailed mixing
distributions. Defining 17by 13= es, condition (i) is not satisfied for distributions
of n which do not possess a moment generating function. For example Pareto 0
with finite mean, Cauchy distributed n and certain members of the Gamma
family fail condition (i).13
   The requirement that E(O) < cc is essential to the Elbers-Ridder proof. If this
condition is not satisfied, and if no further restrictions are placed on p(e), the
duration model is not identified.
   As an example of this point, suppose that the true model is Weibull with
Z,(t) = tao, cpa(x) = e X’80and p,, such that E( 0) < cc. The survivor function for
this model is

      &,(z(x) =1-G,(+)             =/nw[exp(-           ~aOexP(~%))]&,(@).

Define w = ta exp(x@). Then

      s&) = ~Twt- tie)1 dhte) = ~ot4,
is the Laplace transform (L) of random variable &I.
   We have already noted in the discussion surrounding (4.6) that by virtue of
Bernstein’s theorem, if 0 < c < 1,

      L,(d)    = /om[exp( - de*)]           dpr(B*),

is completely monotone and is the Laplace transform of some random variable
O* where E(O*) = cc. Thus

      l-G,(tjx)=L,(o’)=L,(w)=l-G&lx),

  I3 For



     f(q)=    [exp(-.X7)]% and                          Ail,   E(expq)=co.
1718                                                                      J. J. Heckman and B. Singer


so    a model with

        Zl(t)=ta~‘,cpl(x)=exp(cxj8,)                  and pi such that E(O*)          = cc

explains the data as well as the original model (a = LYE,/3 = & and p = p. with
E( 0) < 00).
   The requirement that E(O) < 00 is overly strong. Heckman and Singer (1984a)
establish identifiability when E(O) = cc by restricting the tail behavior of the
admissible mixing distribution. Their results are recorded in the following pro-
position.
Proposition.   3

If

     (i) The random variable 0 is nonnegative with a nondefective distribution                         p.
         For absolutely continuous p, the density m(e) is restricted so that


             m(e)- (lns)‘sf’ier~(q
                             ’
                                                                                                (1.4.8)


      ase~oowherec>O,O<~<landy2OwhereL(B)isslowlyvaryingin
      the sense of Karamata.14 E is assumed known.
 (ii) Z E 2 = { Z(t), t 2 0 : Z(t) is a nonnegative increasing function with Z(0) =
               0 and 3c > 0 and t, not depending on the function Z(t) such that
               Z( t + ) = c where c is a known constant}.
(iii) $JE @ = { +( x ), x E S: $J is nonconstant on S, 3 at least one coordinate xi
               defined on (- 00, 00) such that +(O,O,. . . , x;,O,. . .) traverses (0, cc)
               as xi traverses (- cc, cc), 0 ES, and +(O) = l}.

Then Z, 9, and p are identified. 0 For proof, see Heckman and Singer (1984a).
   Condition (i) is weaker than the Elbers and Kidder condition (i). 8 need not
possess moments of any order nor need the distribution function p have a
density. However, in order to satisfy (i) the tails of the true distribution are
assumed to die off at a fast enough rate and the rate is assumed known. The
condition that Z( t + ) = c for some c > 0 and t + > 0 for all admissible Z plays an
important role. This condition is satisfied, for example, by a Weibull integrated
hazard since for all (Y,Z(1) = 1. The strengthened condition (ii) substitutes for the
weakened (i) in our analysis. Condition (iii) has identical content in both analyses.
The essential idea in both is that + varies continuously over an interval. In the

   l4Heckman and Singer (1984a) also present conditions for p( 0) that are not absolutely    continuous.
For a discussion of slowly varying functions see Feller (1971, p. 275).
Ch. 29: Econometric   Analysis of Longitudinal   Data                                              1719

absence of a finiteness of first moment assumption, Proposition 3 gives a
conditional identification result. Given E, it is possible to estimate $.J, P, ‘p
provided cross over condition (ii) is met.
   A key assumption in the Heckman-Singer proof and in the main proof of
Elbers and Ridder is the presence in the model of at least one exogenous variable
that takes values in an interval of the real line. In duration models with no
regressors or with only categorical regressors both proofs of identifiability break
down. This is so because both proofs require exogenous variables that trace out
the Laplace transform of 0 over some interval in order to uniquely identify the
functions of interest.15
   The requirement that a model possess at least one regressor is troublesome. It
explicitly rules out an interaction detection strategy that cross-classifies the data
on the basis of exogenous variables and estimates separate Z(t) and ~(0)
functions for different demographic groups. It rules out interactions between x
and 8 and x and Z.
   In fact some widely used parametric hazard models can be identified together
with the mixing distribution ~(0) even when no regressors appear in the model.
Identification is secured under these conditions by specifying the functional form
of the hazard function up to a finite number of unknown parameters and placing
some restrictions on the moments of admissible ~1distributions.
   A general strategy of proof for this case is as follows [for details see Heckman
and Singer (1984a)]. Assume that Z&(t) is a member of a parametric family of
nonnegative functions and that the pair (a, CL)is not identified. Assuming that Z;
is differentiable to order j, nonidentifiability implies that the identities




for all t 2 0 must hold for at least two distinct pairs (cy,, po), ((~i, pr). We then
derive contradictions. We demonstrate under certain stated conditions that these
identities cannot hold unless a, = a,. Then ~1 is identified by the uniqueness
theorem for Laplace transforms.

   15As previously noted, in their Appendix Elbers and Ridder (1982) generalize their proofs to a case
in which all of the regressors are discrete valued. However, a regressor is required in order to secure
identification.
1720                                                           J. J. Heckman and B. Singer

  To illustrate this strategy consider identifiability     for the class of BOX-COX
hazards (see eq. 1.3.2 with yZ = 0):


     Z;=exp(y(y)).



   For this class of hazard models there is an interesting tradeoff between the
interval of admissible h and the number of bounded moments that is assumed to
restrict the admissible p( 0). More precisely, the following propositions are proved
in our joint work.
Proposition 4
For the true value of A, A,, defined so that A, I 0, if E(O) -c COfor all admissible
p, and for all bounded y, then the triple (ye, A,, pO) is uniquely identified. 0 [For
proof, see Heckman and Singer (1984a).]
Proposition 5
For the true value of A, A,, such that 0 < A, < 1, if all admissible p are restricted
to have a common finite mean that is assumed to be known a priori (E( 0) = m,)
and a bounded (but not necessarily common) second moment E(02) < 00, and
all admissible y are bounded, then the triple (yO, A,, pO) is uniquely identified. 0
(For proof see Heckman and Singer, 1984a.)
Proposition 6
For the true value of A, A,, restricted so that 0 < A, < j, j a positive integer, if all
admissible ~1are restricted to have a common finite mean that is assumed to be
known a priori (E(O) = m,) and E bounded (but not necessarily common)
(j + 1)” moment (E(@+‘) < CO), and all admissible y are bounded, then the
triple (y,,, A,, p,J is uniquely identified. 0 (For proof see Heckman and Singer,
1984a.)

   It is interesting that each integer increase in the value of A, > 0 requires an
integer increase in the highest moment that must be assumed finite for all
admissible p.
   The general strategy of specifying a flexible functional form for the hazard and
placing moment restrictions on the admissible p works in other models besides
the Box-Cox class of hazards. For example consider a nonmonotonic log logistic
model used by Trussell and Richards (1985).


       z,(t)   =   (ww”-’          CX3>h,        a> 0.                            (1.4.9)
                    l+(h)*    ’
Ch. 29: Econometric Anulysis of Longitudinal Data                                1721


Proposition   7

For hazard model (1.4.9), the triple (A,, (Ye,p,,) is identified provided that the
admissible p are restricted to have a common finite mean E(O) = m, < cc. 0 (For
proof, see Heckman and Singer, 1984a.)
   An interesting and more direct strategy of proof of identifiability which works
for some of the hazard model specifications given above is due to Arnold and
Brockett (1983). To illustrate their argument, consider the Weibull hazard

     h(tpq = d-9,

and mixing distributions restricted to those having a finite mean. Then a routine
calculation shows that (Y may be calculated directly in terms of the observed
survivor function via the recipe

     (y= lim 1n(Nt)/s(t))
         t-0        lnt               ’

The mixing distribution is then identified using the uniqueness theorem for
Laplace transforms. Their proof of identifiability is constructive in that it also
provides a direct procedure for estimation of ~(6) and (Ythat is distinct from the
procedure discussed below.
   Provided that one adopts a parametric position on h(tlt9) these propositions
show that it is possible to completely dispense with regressors. Another way to
interpret these results is to note that since for each value of x, we may estimate 2,
and p(8), it is not necessary to adopt proportional hazards specification (1.4.7) in
order to secure model identification. All that is required is a conditional (on x)
proportional hazards specification. Z and p may be arbitrary functions of X.
   Although we have no theorems yet to report, it is obvious that it should be
possible to reverse the roles of p(e) and h(tlr3): i.e. if p(O) is parameterized it
should be possible to specify conditions under which h( tie) is identified nonpara-
metrically.
   The identification results reported here are quite limited in scope. First, as
previously noted in Section 1.3, the restriction that the regressors are time
invariant is crucial. If the regressors contain a common (to all observations) time
trended variable, ‘p can be identified from +!Jonly if strong functional form
assumptions are maintained so that In Ic, and lncp are linearly independent. Since
one cannot control the external environment, it is always possible to produce a #
function that fails this linear independence test. Moreover, even when x(t)
follows a separate path for each person, so that there is independent variation
between In Jl(t) and lncp( t), at least for some observations, a different line of
proof is required than has been produced in the literature.
1122                                                         J. J. Heckman   and B. Singer

   Second, and more important, the proportional hazard model is not derived
from an economic model. It is a statistically convenient model. As is implicit from
the models presented in Section 1.2 and as will be made explicit in Section 1.6
duration models motivated by economic theory cannot in general be cast into a
proportional hazards mold. Accordingly, the identification criteria discussed in
this section are of limited use in estimating explicitly formulated economic
models. In general, the hazard functions produced by economic theory are not
separable as is assumed in (1.4.7).
   Research is underway on identifiability conditions for nonseparable hazards.
As a prototype we present the following identification theorem for a specific
nonseparable hazard.
Proposition 8
Nonseparable       model with (i) Z,(t) = t(ux)2+e, (ii) density ws(x]O) =
(8 +P)[exp-(0      +&xl     and (iii) jedp(B) < cc is identified. 0 For proof, see
Heckman and Singer (1983).
   Note that not only is the hazard nonseparable in x and 8 but the density of x
depends on 0 so that x is not weakly exogeneous with respect to 8.
   Before concluding this discussion of identification, it is important to note that
the concept of identifiability employed in this and other papers is the requirement
that the mapping from a space of (conditional hazards) X (a restricted class of
probability distributions) to (a class of joint frequency functions for durations
and covariates) be one to one and onto. This formulation of identifiability is
standard. In this literature there is no requirement of a metric on the spaces or of
completeness. Such requirements are essential if consistency of an estimator is
desired. In this connection, Kiefer and Wolfowitz (1956) propose a definition of
identifiability in a metric space whereby the above-mentioned mapping is 1: 1 on
the completion (with respect to a given metric) of the original spaces. Without
some care in defining the original space, undesirable distributions can appear in
the completions.
   As an example, consider a Weibull hazard model with conditional survivor
function given an observed k-dimensional covariate x defined as




where



/I E compact subset of k-dimensional Euclidean space, and F0 is restricted to be
a probability distribution on [0, + cc) with jomudF,( u) = 1. As a specialization of
Elbers and Ridder’s (1982) general proof, (Ye, & and F, are identified. Now
consider the completion with respect to the Kiefer-Wolfowitz (1956) metric of the
Ch. 29: Econometric       Analysis of Longitudinal   Data                       1723


Cartesian product of the parameter space of allowed OLand /3 values and the
probability distributions on [0, + cc) satisfying /$‘a dF,( V) = 1. The completion
contains distributions Fi on [0, + oe) satisfying jomudF,( u) = cc. Now observe
that if S(t(x) has a representation as defined above for some (YE (0,l) and F,
with mean 1, then it is also a completely monotone function of t. Thus we also
have the representation

      S(tlx) = jm[exp(
                    - t(w( -d%))u)]d&(u),
                      0

but now Fi must have an infinite mean. This implies that ((Ye,&,, F,) and
(1, &, Fi) generate the same survivor function. Hence the model is not identifi-
able on the completion of a space where probability distributions are restricted to
have a finite mean.
   This difficulty can be eliminated by further restricting F, to belong to a
uniformly integrable family of distribution functions. Then all elements in the
completion with respect to the Kiefer-Wolfowitz and a variety of other metrics
will also have a finite mean and identifiability is again ensured. The comparable
requirement for the case when E,,(V) = cc is that (1.4.8) converges uniformly to
its limit.
   The a priori restriction of identifiability considerations to complete metric
spaces is not only central to establishing consistency of estimation methods but
also provides a link between the concept of identifiability as it has developed in
econometrics and notions of identifiability which are directly linked to con-
sistency as in the engineering literature on control theory.

1.4.4.   Nonparametric estimation

Securing identifiability of a nonparametric model is only the first step toward
estimating the model. At the time of this writing, no nonparametric estimator has
been devised that consistently estimates the general proportional hazard model
(1.4.7).
   In Heckman and Singer (1984b) we consider consistent estimation of the
proportional hazard model when +(t) and cp(X) are specified up to a finite
number of parameters but p(e) is unrestricted except that it must have either a
finite mean and belong to a uniformly integrable family or satisfy tail condition
(1.4.8) with uniform convergence. We verify sufficiency conditions due to Kiefer
and Wolfowitz (1956) which, when satisfied, guarantee the existence of a con-
sistent nonparametric maximum likelihood estimator. We analyze a Weibull
model for censored and uncensored data and demonstrate how to verify the
sufficiency conditions for more general models. The analysis only ensures the
existence of a consistent estimator. The asymptotic distribution of the estimator is
unknown.
1724                                                                              J. J. Heckman   and B. Singer

   Drawing on results due to Laird (1978) and Lindsey (1983a,b), we characterize
the computational form of the nonparametric maximum likelihood estimator.16
To state these results most succinctly, we define

       t* =    q(x)[#(+-b= cp(x)z(t).
For any fixed value of the parameters determining v(x)                           and Z(t) in (1.4.7) t*
conditional on 8 is an exponential random variable i.e.

       f( t*lfSJ)= Bexp( - t*O)               820.                                                    (1.4.10)

For this model, the following propositions can be established for the Nonpara-
metric Maximum Likelihood Estimator (NPMLE).
Proposition 9

Let I* be the number of distinct t* values in the sample of I( 2 I*) observa-
tions. Then the NPMLE of ~(6) is a finite mixture with at most I* points of
increase, i.e. for censored and uncensored data (with d = 1 for uncensored
observations)


       f(t*)    = E B,dexp(- t*ei)Pi,
                  i=l

where Pi 2 0, c:z,Pi          =l. 0
   Thus the NPMLE is a finite mixture but in contrast to the usual finite mixture
model, I* is estimated along with the Pi and ei. Other properties of the NPMLE
are as follows.
Proposition 10

Assuming that no points of support { ei} come from the boundary                                     of 8 the
NPMLE is unique. 0 (See Heckman and Singer, 1984b.)
Proposition 11

For uncensored data, 1&,.,=1/t& and d,, =1/t,&       where “*” denotes the
NPMLE estimate, and t;, and t& are, respectively, the sample maximum and

   161ncomputing the estimator it is necessary to impose all of the identifiability conditions in order to
secure consistent     estimators.   For example, in a Weibull model with E( 8) < cc, it is important           to
impose this requirement       in securing estimates. As our example in the preceding subsection indicated,
there are other models with E(8) = cc that will explain the data equally well. In large samples, this
condition    is imposed, for example, by picking estimates of p(0) such that l/(1 - b(@)df?l< DC,or
equivalently    l/(1 - P(t?)df?-’    > 0. Similarly, if identification is secured by tail condition (1.4.8), this
must be imposed in selecting a unique estimator. See also the discussion at the end of Section 1.4.3.
CIT. 29: Econometric   Anu!ysis of Longitudinal   Data                           1725

minimum values for t*. For censored data, emi, = 0 and d,, = l/tz,-,. 0 (See
Heckman and Singer, 1984b.)
   These propositions show that the NPMLE for p( r3) in the proportional hazard
model is in general unique and the estimated points of support lie in a region with
known bounds (given t *). In computing estimates one can confine attention to
this region. Further characterization of the NPMLE is given in Heckman and
Singer (1984b).
   It is important to note that all of these results are for a given t* = Z( t)cp(x).
The computational strategy we use fixes the parameters determining Z(t) and
(p(x) and estimates ~(0). For each estimate of ~(6’) so achieved Z(t) and cp(x)
are estimated by traditional parametric maximum likelihood methods. Then fresh
t * are generated and a new p( 0) is estimated until convergence occurs. There is
no assurance that this procedure converges to a global optimum.
   In a series of Monte Carlo runs reported in Heckman and Singer (1984b) the
following results emerge.

  (i) The NPMLE recovers the parameters governing Z(t) and q(x) rather well.
 (ii) The NPMLE does not produce reliable estimates of the underlying mixing
      distribution.
(iii) The estimated c.d.f. for duration times G(tlx) produced via the NPMLE
      predicts the sample c.d.f. of durations quite well even in fresh samples of
      data with different distributions for the x variables.

A typical run is reported in Table 3. The structural parameters (a,, (Ye) are
estimated rather well. The mixing distribution is poorly estimated but the within
sample agreement between the estimated c.d.f. of T and the observed c.d.f. is
good. Table 4 records the results of perturbing a model by changing the mean of
the regressors from 0 to 10. There is still close agreement between the estimated
model (with parameters estimated on a sample where X - N(O,l)) and the
observed durations (where X - N(10, 1)).
   The NPMLE can be used to check the plausibility of any particular parametric
specification of the distribution of unobserved variables. If the estimated parame-
ters of a structural model achieved from a parametric specification of the
distribution of unobservables are not “too far” from the estimates of the same
parameters achieved from the NPMLE, the econometrician would have much
more confidence in adopting a particular specification of the mixing distribution.
Development of a formal test statistic to determine how far is “too far” is a topic
for the future. However, because of the consistency of the nonparametric maxi-
mum likelihood estimator a test based on the difference between the parameters
of Z(t) and cp(x) estimated via the NPMLE and the same parameters estimated
under a particular assumption about the functional form of the mixing distribu-
tion would be consistent.
1126                                                                                  J. J. Heckman      and B. Singer

                                                            Table 3
                                                Results from a typical estimation

                              dp(0)   = [exp(AB)exp-(ee//3)dB]/r(1/2)             with A =1/2    /3 =l
       True model                                                           a, =l                                   a,=1
       Estimated model                                                      0.9852                                  0.9846
                                                                          (0.0738)*                                 (0.1022)*
       where Z(t) = t”l and v(x)         = exp(azx)
       Sample size L = 500
       Log likelihood - 1886.47


                                                      Estimated mixing distribution
       Estimated     9,      Estimated    P,            Estimated c.d.f.            True c.d.f               Observed    c.d.f.

        - 12.9031              0.008109                            0.008109               0.001780                       0.0020
         - 7.0938              0.06524                             0.07335                0.03250                        0.0400
         - 4.0107              0.1887                              0.2621                 0.1510                         0.1620
         - 1.7898              0.3681                              0.6302                 0.4366                         0.4280
         - 0.0338              0.3698                              1.000                  0.8356                         0.8320


                           Estimated cumulative distribution of duration vs. actual (6(t)        vs. G(t))
       Value of t                                 Estimated t c.d.f.                                          Observed    c.d.f.

          0.25                                                       0.1237                                               0.102
          0.50                                                       0.2005                                               0.186
          1.00                                                       0.3005                                               0.296
          3.00                                                       0.4830                                               0.484
          5.00                                                       0.5661                                               0.556
         10.00                                                       0.6675                                               0.660
         20.00                                                       0.7512                                               0.754
         40.00                                                       0.8169                                               0.818
         99.00                                                       0.8800                                               0.880


         *The numbers reported below the estimates are standard errors from the estimated                        information
       matrix for (a, P, 0) given I*. As noted in the text these have no rigorous justification.


                                           Table 4
                        Predictions on a fresh sample, X - N(10, 1)
                   (The model used to fit the parameters is X - N(O,l)).

        Estimated cumulative distribution of duration vs. actual t?(t) vs. G(t)
       Value of t            Estimated t c.d.f.                Observed c.d.f.
        (X105)

            1.0                                 0.1118                           0.1000
            4.0                                 0.2799                           0.2800
            8.0                                 0.3924                           0.3920
           10.0                                 0.4300                           0.4360
           25.0                                 0.5802                           0.5740
          100.0                                 0.7607                           0.7640
          300.0                                 0.8543                           0.8620
         5000.0                                 0.9615                           0.9660
Ch. 29: Econometric   Analysis of Lmgitudinal   Data                             1121

   The fact that we produce a good estimator of the structural parameters while
producing a poor estimator for p suggests that it might be possible to protect
against the consequences of m&specification of the mixing distribution by fitting
duration models with mixing distributions from parametric families, such as
members of the Pearson system, with more than the usual two parameters. Thus
the failure of the NPMLE to estimate more than four or five points of increase for
p can be cast in a somewhat more positive light. A finite mixture model with five
points of increase is, after all, a nine (independent) parameter model for the
mixing distribution. Imposing a false, but very flexible, mixing distribution may
not cause much bias in estimates of the structural coefficients. Morever, for small
I*, computational costs are lower for the NPMLE than they are for traditional
parametric maximum likelihood estimators of ~(8). The computational costs of
precise evaluation of ~(0) over “small enough” intervals of 13 are avoided by
estimating a finite mixtures model.
   We conclude this section noting that the Arnold and Brockett (1983) estimator
for (Ydiscussed in Section 1.4.3 circumvents the need to estimate dp(B) and so in
this regard is more attractive than the estimator discussed in this subsection.
Exploiting the fact that t * is independent of X, it is possible to extend their
estimator to accommodate models with regressors. (The independence conditions
provide orthogonality restrictions from which it is possible to identify j3.) How-
ever, it is not obvious how to extend their estimator to deal with censored data.
Our estimator can be used without modification on censored data.


1.5.   Sampling plans and initial conditions problems

There are few duration data sets for which the start date of the sample coincides
with the origin date of all sampled spells. Quite commonly the available data are
random samples of interrupted spells or else are spells that begin after the start
date of the sample. For interrupted spells one of the following duration times may
be observed: (1) time in the state up to the sampling date (Tb), (2) time in the
state after the sampling date (T,), or (3) total time in a completed spell observed
at the origin of the sample (T, = T, + Tb). Durations of spells that begin after the
origin date of the sample are denoted Td.
   In this section we derive the density of each of these durations for time
homogeneous and time inhomogeneous environments and for models with and
without observed and unobserved explanatory variables. The main message of
this section is that in general the distributions of each of the random variables T,,
Tb, T, and Td differ from the population duration distribution G(t). Estimators
based on the wrong duration distribution in general produce invalid estimates of
the parameters of G(t) and will lead to incorrect inference about the population
duration distribution.
1728                                                                        J. J. Heckmanand B. Singer

1.5.1.  Time homogeneous      environments                 and    models   without     observed     and
unobserved explanatory variables’?

We first consider the analytically tractable case of a single spell duration model
without regressors and unobservables in a time homogeneous environment. To
simplify notation we assume that the sample at our disposal begins at calendar
time 0. Looking backward, a spell of length t, interrupted at 0 began t, periods
ago. Looking forward, the spell lasts t, periods after the sampling date. The
completed spell is t, = t, + t, in length. We ignore right censoring and assume
that the underlying distribution is nondefective. (These assumptions are relaxed in
Subsection 15.2 below.)
   Let k( - tb) be the intake rate; i.e. t, periods before the sample begins, k( - tb)
is the proportion of the population that enters the state of interest at time
r = - t,. The time homogeneity assumption implies that

          k(-t,)=k,              Vt,.                                                          (1.5.1)

Let g(t) = h( t)exp( - /dh( u)du) be the density of completed durations                           in the
population.The associated survivor function is


          s(t)=l-G(t)=exp(-c(u)du).


   The proportion of the population experiencing a spell at calendar time r = 0, P,,,
is obtained by integrating over the survivors from each cohort i.e.


       P,,lmk(_t~)(l-G(tb))dth=J”k(-tb)exp(-j~~h(u)du)dt,.
                   0                                  0                    0


Thus the density of an interrupted spell of length t, is the ratio of the proportion
surviving from those who entered tb periods ago to the total stock


                                                 k(-t,)exp(      -Joihh(u)du)
       f(t,>       =   k(-t&-G@,)) =                                                           (1.5.2)
                                PII                              PO


Assuming m = jo”xg(x)dx                 -Ccc (and so ruling out defective distributions)            and

   “See        Cox (1962), Cox and Lewis (1966), Sheps and Menken (1973), Salant   (1977) and Baker and
Trevedi        (1982) for useful presentations of time homogeneous models.
Ch. 29: Econometric        Am&is   of Longitudinal   Data                                                  1729

integrating  the denominator   of the preceding expression                      by parts,       we reach the
familiar expression [see, e.g. Cox and Lewis (1966)]


      f(t,)       =   (l-G(d)            s(b)          1
                                      =-=-exp(-Joihh(u)du)                      1.                    (1.5.3)
                            m               m         m

The density of sampled interrupted                      spells    is not the same      as the population
density of completed spells.
   The density of sampled completed                     spells is obtained by the following straight-
forward argument. In the population,                   the conditional density of t, given 0 < t, -c t,
is


                             dd
        g(tch)= (1 _ @lb))              =   h(t,)exp(       - /%(u)du),
                                                                 fb
                                                                                     t, > t,.         (1.5.4)


Using         (1.5.3), the marginal     density      of t, in the sample is


                                                                                                      (1.5.5)


SO




The density of the forward time t, can be derived from (1.5.4). Substitute                              for tc
using t, = t, + t, and integrate out t, using density (1.5.3). Thus


      f( t,) = /o”g( t, + t,lt,)_f( tb) dt, = lrn                g(to;
                                                                    “)dt,
                  =   !$,(z)dr=             (1-E(t”))

                  _ S(t,)     _    4jd”h(+q                                                           (1.5.6)
                       m                    m

So in a time homogeneous                environment         the functional   form of f(t,)       is identical
to 0th).
1730                                                                             J. J. Heckman and B. Singer

  The following results are well known about the distributions                            of the random
variables T,, Tb and T,.


 (0 If g(t) is exponential with parameter 0 (i.e. g(t) = 0exp( - 10) then so are
     f( t,) and f( th). The proof is immediate.
(ii) E(T,) = (m/2)(1 +(a2/m2))18
       where a2=E(T-m)2=                       w(r - m)2g(t)dt.
                                           J
(iii) E(T,) = (m/2)(1 +(u2,mz0))
      (since T, and T, have the same density)
(iv) E(TJ = rn(l+(~~/rn~))‘~
      so E(T,) = 2E(T,) = 2E(T,)
      and E (T,) > m unless u 2 = 0.
(v) If (-ln(l-G(t))/t)t         in t, u2/m2 >l.
      (This condition is implied if h(t) = g(t)/1 - G(t) is increasing in f i.e.
      h’(t) > 0). In this case, E(T,) = E(T,) > m. (See Barlow and Proschan, 1975
      for proof).
(vi) If (-ln(l-G(t))/t)lt,        u2/m2<1.
      (This condition is implied if h’(t) < 0.) In this case E(T,) = E(T,) < m. (See
      Barlow and Proschan, 1975 for proof).


   Result (i) restates the classical result (see Feller, 1970) that if the population
distribution of durations is exponential so are the sample distributions of T, and
Tb. Result (iii) coupled with result (v) indicates that if the population distribution
of durations exhibits positive duration dependence, the mean of interrupted spells
( Tb) exceeds the population mean duration. Result (iii) coupled with (vi) reverses
this ordering for duration distributions with negative duration dependence. Result




Integrating   by parts   assuming   that E(T2) = jFt2g(t)dr   -C co, we obtain
Ch. 29: Economefric Analysis of Longitudinal Data                              1731

(iv) indicates that sampled completed spells have a mean in excess of the
population mean unless a2 = 0 (hence the term “length biased sampling”) and
that completed spells have a mean twice that of interrupted (Tb) or partially
completed forward spells (T,).
   We next present the distribution of Td, the duration time for spells that begin
after the origin date of the sample. Let F denote the time a spell begins. The
density of Y is k(r). Assuming that F and Td are independent the joint
probability that a spell begins at .F = r and lasts less than t, periods is

      Pr{.F=randT,<t,}=k(r)G(t,).

Thus the density of Td in a time homogeneous environment is

     f(t,>    = g(CJ                                                        (1.57)

   The distributions of T,, Tb and T, are of a different functional form than the
distribution of T. The only exception is the case in which T is an exponential
random variable with parameter X; in this case T, and Tb are also exponential
with parameter X. The distribution of Td has the same functional form as the
distribution of T.
   Thus in a typical longitudinal sample in which data are available for the
completed portions of durations of spells in progress (T,) and on durations
initiated after the origin date of the sample (Td), two different distributions are
required to analyze the data.
   It is common to “solve” the left censoring problem by assuming that G(t) is
exponential. The bias that results from invoking this assumption when it is false
can be severe. As an example suppose that the population distribution of t is
Weibull so

      g(t) = acpta-kxp( - cpt*)            cp> 0,   a> 0.                   (1.5.8)

Suppose that the sample data are on the completed portions of interrupted spells
and that there is no right censoring so that using formula (1.56)

                     fw(        - t”cp)
     J-0,)=                ,I        \ 3
                     r ;+1
                       ( 1
                 f
                       V-J
                            l/a+1

                                     I
If it is falsely assumed that g*(t) = Xe- Ix, the maximum likelihood estimator of
1732                                                        J. J. Heckman and B. Singer

X   for a random sample of durations is




which has probability limit


                        r; 1
       plim 1 = q~(‘/~)-. i
                        r;i i
For (Y= 2,

       plim X = ((p)l’*I71/2).

  As another example, suppose the sample being analyzed consists of complete
spells sampled at time zero (i.e. T,) generated by an underlying population
exponential density

       g(t) = Aexp( - tx).

Then from (15.5)

       f( t,) = X2t,exp( - At,).

If it is falsely assumed that g(t) characterizes     the duration   data and X is
estimated by maximum likelihood

       plimj\=2A.

This is an immediate consequence of results (i) and (v) previously stated.
   Continuing this example, suppose instead that a Weibull model is falsely
assumed, i.e.

       g*(t) = cut”-lq exp( - t+)

and the parameters       (Yand cp are estimated by maximum likelihood. The maxi-
Ch. 29: Econometric         Analysis of Longitudina/              Data                               1733


mum likelihood estimator solves the following equations,


               i:    ti”
       1
      -=
              i=l

      +             I’


               C         In tj       @ f:         (lnt,)tf
      L+      i=l                =        i=l

      &              Z                             z              ’

so


               i         In ti        i          tFlnti
      I+      i=l                =   i=l
                                                                                                  (1.59)
      &              I
                                           it;            .
                                           i=l



Using the easily verified result that

                                                                         Wp)
           cctP-‘(lnt)exp(-th)dt=X-P                                     F-lnXr(P)           ,
      /0

and the fact that in large samples plim &= CY*is the value of (Y* that solves
(1.5.9), (Y*is the solution to

                                     E(t”*lnt)
      -$+E(lnt)=
                                          E(t”*)              ’


and we obtain the’equation


      -$+(          K$J~F_2-lnx)                              = ( Y&(P)          Ip_a*+2-hrh).   (1.5.10)


Using the fact that

      r’(P+l)                    1 + T’(P)
      r(P+l)               =F              z-(P)’
1734                                                              J. J. Heckman and B. Singer

and collecting terms, we may rewrite (1.5.10) as

            1       + 8QP)            _      1   8QP)                              (1.511)
       a*(a*+l)         ap      p=2       r(p)     ap   P=a*+l’

Since r(2) = 1, it is clear that (Y*= 1 is never a solution of this equation. In fact,
since the left hand side is monotone decreasing in ar* and the right hand side is
monotone increasing in (Y*, and since at OL*= 1, the left hand side exceeds the
right hand side, the value of (Y* that solves (1.5.11) exceeds unity. Thus if a
Weibull model is fit by maximum likelihood to length biased completed spells
generated by an exponential population model, in large samples positive duration
dependence will always be found, i.e. (Y*> 1.
   It can also be shown that

                    A"*-'
       plim + =
                  r(cu* +2) .

If the Weibull is fit to data on T, and Tb generated from an exponential
population, LX*= 1.
   These examples dramatically illustrate the importance of recognizing the im-
pact of the sampling plan on the distribution of observed durations. As a general
proposition only the distribution of Td -the length of spells initiated after the
origin date of the sample-is invariant to the sampling plan. As a short cut, one
can obtain inefficient but consistent estimates of G(t) by confining an empirical
analysis to such spells.
   However, in the presence of unobserved variables this strategy will in general
produce inconsistent parameter estimates. We turn next to consider initial condi-
tions problems in models with observed and unobserved explanatory variables.

1.5.2. The densities of T,, Tb, T, and Td in time inhomogeneous environments for
models with observed and unobserved explanatory variables

We define k( r1x( r), 0) to be the intake rate into a given state at calendar time r.
We assume that 0 is a scalar heterogeneity component and x(r) is a vector of
explanatory variables. It is convenient and correct to think of k( rlx( r), 6) as the
density associated with the random variable F for a person with characteristics
(x(r), 8). We continue the useful convention that spells are sampled at 7 = 0.
The densities of T,, Tb, T, and Td are derived for two cases: (a) conditional on a
sample path { x(u)}’ o. and (b) marginally on the sample path { x(u)}’ m, (i.e.
integrating it out). We denote the distribution of {x(u)}’ o. as D(x) with
associated density dD( x).
Ch. .?9: Econometric    Analysis of Longitudinal   Data                               1735

  The derivation of the density of Tb conditional on { X(U)}‘! co is as follows. The
proportion of the population in the state at time 7 = 0 is obtained by integrating
over the survivors of each cohort of entrants. Thus




Note that, unlike the case in the models analyzed in Section 1.5.1, this integral
may exist even if the underlying distribution is defective provided that the k( .)
factor damps the survivor function. We require

         lim        j711+Ek(r)S(7)     =0          for a> 0.
          S”P
       7+-cc


The proportion of people in the state with sample path {x(u)}? m whose spells
are exactly of length t, is the set of survivors from a spell that initiated at
7= -t, or




Thus the density of T, conditional on {x(u)}‘? o. is




                    &-f&+tJ.@)exp(                   -p(ulx(u-   th).e)du)dc(e)
                =
                                                      4l(4
                                                                                  (1.5.13)

The marginal density of Tb (integrating out X) is obtained by an analogous
argument: Divide the marginal flow rate as of time 7 = - t, (the integrated flow
rate) by the marginal (integrated) proportion of the population in the state at
7 = 0.
   Thus defining


      P,,= / $+~(x),
1736                                                            J. J. Heckmun and B. Singer


where X is the domain of integration for x, we write




                  X exp (-ld”h(ulx(u-t,),8)du)dp(e)dD(x)

       f(b)   =                                                                  (1.514)
                                           PO

Note that we use a function space integral to integrate out {x(u)}‘?,. [See Kac
(1959) for a discussion of such integrals.] Note further that one obtains an
incorrect expression for the marginal density of Tb if one integrates (5.13) against
the population density of x(dD(x)).     The error in this procedure is that the
appropriate density of x against which (1.5.13) should be integrated is a density
of x conditional on the event that an observation is in the sample at r = 0. By
Bayes’ theorem this density is




which is not in general the same as the density dD(x).        For proper distributions
for Th,


       f(xITh>O)=dD(x)F.
                                    0



   The derivation of the density of T,, the completed length of a spell sampled at
Y = 0 is equally straightforward. For simplicity we ignore right censoring prob-
lems so that we assume that the sampling frame is of sufficient length that all
spells are not censored and further assume that the underlying duration distribu-
tion is not defective. (But see the remarks at the conclusion of this section.)
Conditional on {x(u)}? o3 and 8 the probability that the spell began at r is




The conditional      density of a completed spell of length t that begins at r is


       h(tlX(7+t),8)exp(-j051(21lX(7+u),8)du).


For any fixed r I 0, t, by definition exceeds - 7. Conditional on x, the
probability that T, exceeds r is P,(x). Thus, integrating out 7, respecting the fact
Ch. 29: Econometric Analysis of Longiiudinal Data

that t,>   -r




                                 X exp (-jni’h(u,x(r+u)$)du)dC(B)d7

     f( fcl{44L)             =                                              .   (1.515)
                                                       POW

   The marginal density of T, is


                /“,
                 _  c


                X exp (-jb’h(ulx(7++9)du)dC(B)dD(x)dT
     f(G) =                                                                     (1.516)
                                              PO

   Ignoring right censoring, the derivation of the density of T, proceeds by
recognizing that T, conditional on 7 I 0 is the right tail portion of random
variable - Y + T,, the duration of a completed spell that begins at F = 7. The
probability that the spell is sampled is P,,(x). Thus the conditional density of
T, = t, given { x(u)}? o. is obtained by integrating out 7 and correctly condition-
ing on the event that the spell is sampled, i.e.


                                 /”  J+i+), v4t, - +a),e)
                                  _coo
                                 X exp (-f-‘h(Ulx(U+r),@)dU)dB(B)d7
     f(Llc+4            “J   =                                                  >
                                                        pow
                                                                                (1.517)

and the corresponding        marginal density is


                JomJXJ$(~14~P)h(L
                 _                                  - 44L)J)

                X exp (-r-‘h(~(X(u+r)$)du)dp(8)dD(x)dr

     f kJ =                                                             .       (1.5.18)
                                               PO


  Of special interest is the case k( r/x, t9) = k(x) in which the intake rate does not
depend on unobservables and is constant for all 7 given x, and in which x is time
1738                                                           J. J. Heckman and B. Singer

invariant. Then (1.5.13) specializes to


                                                                               (1.5.13’)


where


       m(x)=/X/exp(-Jk(ulx,8)du)dp(8)d~.
                0 e           0


This density is very similar to (1.5.3). Under the same restrictions on k and x,
(1.5.15) and (1.5.17) specialize respectively to



                                                                               (1.5.15’)


which is to be compared to (1.5.5), and


       f(t        Ix) =   j)q(- ~(UIXJP+-W
                                                    2                          (1.5.17’)
                                    m(x)
             (1




which is to be compared to (1.5.6). For this special case all of the results (i)-(vi)
stated in Section 1.5.1 go through with obvious redefinition of the densities to
account for observed and unobserved variables.

   It is only for the special case of k(rlx, 0) = k(r)x) with time invariant regressors
that the densities of T,, Tb and T, do mot depend on the parameters of k.

   In order to estimate the parameters of h( t Jx,0) from data on TO, Tb or T,
gathered in a time inhomogeneous environment for a model with unobservables,
knowledge of k is required. As long as 0 appears in the conditional hazard and k
depends on B or 7 or if x is not time invariant, k must be specified along with
p(8) and h(t(x, 8).
  The common expedient for “solving” the initial conditions problem for the
density of T, -assuming that G(t(x, 0) is exponential-does  not avoid the depen-
dence of the density of T, on k even if k does not depend on t9 as long as it
Ch. 29: Econometric    Analysis of Longitudinal   Data                                                 1739


depends on r or x( 7) where X(T) is not time invariant. Thus in the exponential
case in which h(ulx(u + T), 0) = h(x(u + r), e), we may write (1.5.17) for the
case k = k(Tlx(7)) as




Only if h(x( u + T), 6) = h(x( u + r)), so that unobservables do not enter the
model (or equivalently that the distribution of 0 is degenerate), does k cancel in
the expression. In that case the numerator factors into two components, one of
which is the denominator of the density. “k” also disappears if it is a time
invariant constant that is functionally independent of e.*O
   At issue is the plausibility of alternative specifications of k. Although nothing
can be said about this matter in a general way, for a variety of economic models,
it is plausible that k depends on 8, r and x( 7) and that the x are not time
invariant. For example, in a study of unemployment spells over the business
cycle, the onset of a spell of unemployment is the result of prior job termination
or entry into the workforce. So k is the density of the length of a spell resulting
from a prior economic decision. The same unobservables that determine unem-
ployment are likely to determine such spells as well. In addition, it is odd to
assume a time invariant general economic and person specific environment in an
analysis of unemployment spells: Aggregate economic conditions change, and
person specific variables like age, health, education and wage rates change over
time. Similar arguments can be made on behalf of a more general specification of
k for most economic models.

   20We note that     one “short cut” procedure   frequently used does not avoid     these problems.   The
argument correctly    notes that conditional on 0 and the start date of the sample




This expression     obviously does not depend on k. The argument         runs astray by integrating   this
expression against dp(B) to get a marginal (with respect to 0) density. The correct density of B is not
dp( 0) and depends on k by virtue of the fact that sample 0 are generated by the selection mechanism
that an observation    must be in the sample at r = 0. Precisely the same issue arises with regard to the
distribution of x in passing from (1.5.13) to (15.14). However, density (*) can be made the basis of a
simpler estimation procedure in a multiple spell setting as we note below in Section 2.2.
1740                                                              J. J. Heckman and B. Singer

  The initial conditions problem for the general model has two distinct compo-
nents.

 (i) The functional form of k( 71x( r), 8) is not in general known. This includes as
     a special case the possibility that for some unknown 7* < 0, k(T[x(T), 0) = 0
     for 7 -Cr*. In addition, the value of r* may vary among individuals so that if
     it is unknown it must be treated as another unobservable.
(ii) If x( 7) is not time invariant, its value may not be known for r < 0 so that
     even if the functional form of k is known, the correct conditional duration
     densities cannot be constructed.

   These problems exacerbate the problem of securing model identification. As-
sumptions made about the functional form of k and the presample values of x( 7)
inject a further source of arbitrariness into single spell model specification. Even
if x( 7) is known for r I 0, k, p and h cannot all be identified nonparametrically.
   The initial conditions problem stated in its most general form is intractable.
However, various special cases of it can be solved. For example, suppose that the
functional form of k is known up to some finite number of parameters, but
presample values of x(r) are not, If the distribution of these presample values is
known or can be estimated, one method of solution to the initial conditions
problem is to define duration distributions conditional on past sample values of
X(T) but marginal on presample values, i.e. to integrate out presample x( 7) from
the model using the distribution of their values._This suggests using (15.14) rather
than (15.13) for the density of Tb. In place of either (15.15) or (1.5.16) for the
density of T,, this approach suggests using

                            0
                         / -1,   /Ie   (x(7):7<0)
                                                    k(7lX(7),e)h(t,lX(t,+dJ>
                         Xexp ( - ~(z+(r+u)J)du)dD(x)d/@)d~
       f(~,lw4~r;>   =                                                               9
                                                         PO


                                                                                   (1.5.19)

with a similar modification in the density of T,.
   This procedure requires either that the distribution of presample x(r) be
known or else that it be estimated along with the other functions in the model.
The latter suggestion complicates the identification problem one further fold. The
former suggestion requires either access to another sample from which it is
possible to estimate the distribution of presample values of x or else that it be
possible to use within sample data on x to estimate the distribution of the
Ch. 29: Economeiric Anulysis of Longitudinul Data                                               1141


presample data, as would be possible, for example, if presample and within
sample data distributions differed only by a finite order polynomial time trend.
   Recall, however, that the distribution of x within the sample is not the
distribution of x in the population, D(x). This is a consequence of the impact of
the sample selection rule on the joint distribution of x and T.21 The distribution
of the x within sample depends on the distribution of 8, and the parameters of
h( tlx, 8) and the presample distribution of x. Thus, for example, the joint density
of T, and x for r > 0 is

                                                           k(7lx(7),e)h(t,-QIx(t,),B)
                               dD(x)j_ot      Ibx:   7 < 0)
                                Xexp ( - ~-‘h(ux(.+~),s)d.)do(x)dp(8)d*
     f(tu,x(r)lr20)=                                                                               7
                                                               PO

                                                                                           (1.5.20)

so, the density of within sample x(r) is




It is this density and not dD(x) that is estimated using within sample data on x.
   This insight suggests two further points. (1) By direct analogy with results
already rigorously established in the choice based sampling literature (see, e.g.
Manski and Lerman, 1977; Manski and McFadden, 1981, and Cosslett, 1981)
more efficient estimates of the parameters of h(tlx, e), and p(B) can be secured
using the joint densities of T, and x since the density of within sample data
depends on the structural parameters of the model as a consequence of the sample
selection rule. (2) Access to other sources of data on the x will be essential in
order to “integrate out” presample x via formulae like (1.5.19).
   A partial avenue of escape from the initial conditions problem exploits T,, i.e.
durations for spells initiated after the origin date of the sample. The density of Td

   ” Preciselythe same phenomenonappearsin the choice based sampling literature (see, e.g. Manski
and Lerman, 1977, Manski and McFadden, 1981 and Cosslett, 1981). In fact the suggestion of
integrating out the missing data is analogous to the suggestions offered in Section 1.7 of the Manski
and McFadden paper.
1142                                                            J. J. Heckman and B. Singer

conditional   on { x( u)}~ld+Q where rd > 0 is the start date of the spell is




                               Xexp ( - ld.‘h(ulX(*+U),B)dlI)dr(B)d7
       r(LlW41:‘“)         =
                                       IwJk(71X(7),s)dp(e)d7                    . (1*5*21)
                                        0   8

The denominator is the probability that Y 2 0. Only if k does not depend on 0
will the density of Td not depend on the parameters of k. More efficient inference
is based on the joint density of Y and t,




                                   Xexp ( - Jddh(ulx(7fu),B)du)dp(B)d7
       f(t,A{+G}:+“)           =


                                                                                  (1.5.22)

Inference based on (1.521) or (1.5.22) requires fewer a priori assumptions than
are required to use data on T,, Tb, or T,. Unless x is specified to depend on
lagged values of explanatory variables, presample values of x are not required.
Since the start dates of spells are known, it is now in principle possible to estimate
k nonparametrically. Thus in samples with spells that originate after the origin
date of the sample, inference is more robust.
   As previously noted, the densities of the durations of T,, Tb, T, and Td are in
general different. However they depend on a common set of parameters. In
samples with spells that originate after the start date of the sample, these cross
density restrictions aid in solving the initial conditions problem because the
parameters estimated from the relatively more informative density of Td can be
exploited to estimate parameters from the other types of duration densities.
   Before concluding this section, it is important to recall that we have abstracted
from the problems raised by a finite length sample frame and the problems of
right censoring. If the sampling frame is such that r* > Y > 0, for example, the
formulae for the durations of T,, T, and Td presented above must be modified to
account for this data generation process.
   For example, the density of measured completed spells that begin after the start
date of the sample incorporates the facts that 0 I 7 I r* and Td s T* - 7, i.e.
that the onset of the spell occurs after r = 0 and that all completed spells must be
of length r * - Y or less. Thus in place of (5.21) we write (recalling that rd is the
Ch. 29: Econometric Analysis of Longitudinal Data                                           1743


start date of the spell)

  &lM4):+“?                Tdsr*-F,          720)




                                         xexp ( - l~~~(ulx(7+u),B)du)dp(8)d~d~~
                                                    0


The denominator is the joint probability of the events 0 < Y < r* - Td and
0 < Td < T* which must occur if we are to observe a completed spell that begins
during the sampling frame 0 < Y < r *. As r* + cc, this expression is equivalent
to the density in (5.21).
   The density of right censored spells that begin after the start date of the sample
is simply the joint probability of the events 0 < Y < r* and Td > 7* - .7, i.e.


      P(0< 9- <~*AT~>~*--~{x(u)}~*)



   The modifications required in the other formulae presented in this subsection to
account for the finiteness of the sampling plan are equally straightforward. For
spells sampled at r = 0 for which we observe presample values of the duration
and post sample completed durations (T,), it must be the case that (a) 9 < 0 and
(b) r * - 7 >- Tc-> - 7 where r * > 0 is the length of the sampling plan. Thus in
place of (1.5.15) we write




                                         Xexp ( - p(uix(r+        u),B)du)d/@)dr

                                      = /”     J’*-‘~(rix(r),e)h(t,1x(7+           t,),e)          .
                                          -52 --7
                                         Xexp ( - /%(UIx(r      + u)J)du)d&i’)di,dr
                                                    0
1744                                                         J. J. Heekman and B. Singer

The denominator of this expression is the joint probability of the events that
- .7 < T, < T* - 7 and Y I 0. For spells sampled at r = 0 for which we observe
presample values of the duration and post-sample right censored durations, it must
be the case that (a) Y < 0 and (b) T, 2 7 * - F so the density for such spells is




   The derivation of the density for T, in the presence of a finite length sample
frame is straightforward and for the sake of brevity is deleted. It is noted in
Sheps-Menken      (1973) (for models without regressors) and Flinn-Heckman
(1982b) (for models with regressors) that failure to account for the sampling
frame produces the wrong densities and inference based on such densities may be
seriously misleading.


1.6. New issues that arise in formulating and estimating choice theoretic duration
models

In this section we briefly consider new issues that arise in the estimation of choice
theoretic duration models. For specificity, we focus on the model of search
unemployment in a time homogeneous environment that is presented in Section
1.2.2. Our analysis of this model serves as a prototype for a broad class of
microeconomic duration models produced from optimizing theory.
   We make the following points about this model assuming that the analyst has
access to longitudinal data on I independent spells of unemployment.

(4 Without data on accepted wages, the model of eqs. (1.2.10)-(1.2.21) is
   hopelessly underidentified even if there are no regressors or unobservables in
   the model.
(W Even   with data on accepted wages, the model is not identified unless the
   distribution of wage offers satisfies a recoverability condition to be defined
   below.
cc>For models without unobserved variables, the asymptotic theory required to
   analyze the properties of the maximum likelihood estimator of the model is
   nonstandard.
CD)Allowing for individuals to differ in observed and unobserved variables
   injects an element of arbitrariness into model specification, creates new
Ch. 29: Econometric Analysis of Longitudinal Data                                                  1745

    identification and computational problems, and virtually guarantees that the
    hazard is not of the proportional hazards functional form.
(E) A new feature of duration models with unobservables produced by optimiz-
    ing theory is that the support of 0 now depends on parameters of the model.

We consider each of the points in turn.

1.6.1.     Point A

From a random sample of durations of unemployment spells in a model without
observed or unobserved explanatory variables, it is possible to estimate h, (in eq.
(1.2.15)) via maximum likelihood or Kaplan-Meier             procedures (see, e.g.
Kalbfleisch and Prentice, 1980, pp. 10-16). It is obviously not possible using such
data alone to separate h from (1 - F(rV)) much less to estimate the reservation
wage rV.

1.6.2.     Point B

Given access to data on accepted wage offers it is possible to estimate the
reservation wage rV. A consistent estimator of rV is the minimum of the accepted
wages observed in the sample

      Z= min{ Wi}I=,.                                                                           (1.6.1)

For proof see Flinn and Heckman (1982a).
   Access to accepted wages does not secure identification                         of F. Only the
truncated wage offer distribution can be estimated:


         F(wlw>rV)=            “‘;I’i(‘I;“‘,            w>rV.
                                           r

To recover an untruncated distribution from a truncated distribution with a
known point of truncation requires further conditions. If F is normal, such
recovery is possible. If it is Pareto, it is not. 22A sufficient condition that ensures
recoverability is that F(w) be real analytic over the support of W so that by an
analytic continuation argument, F(w) can be continued outside of the region of
truncation.23 In the Pareto example, the support of W is unknown.

  “Thus      if   F(w)=cpwS,     c,~w~rn,      /IS-2,   where
                                                            cp=-(j3+1)/(~)p+~,           F(wlw>rV)=
- (/3 + 1) wP/( r V)B’ ’ so q (or c2) does not appear in the conditional  distribution.
  23For a good discussion of real analytic functions, see Rudin (1974). If a function is real analytic,
knowledge  of the function over an interval is sufficient to determine      the function over its entire
domain of definition.
1746                                                                       J. J. Heekman and B. Singer

   If the recoverability condition is not satisfied, it is not possible to determine F
even if rV can be consistently estimated. Hence it is not possible to decompose h u
in (1.2.15) into its constituent components.
   If the recoverability condition is satisfied, it is possible to consistently estimate
F, X and rV. From (1.2.13), it is possible to estimate a linear relationship between
r and c. The model is identified only by restricting r or c in some fashion. The
most commonly used assumption fixes r at a prespecified value.

1.6.3.   Point C

 Using density (1.2.18) in a maximum likelihood procedure creates a non-standard
statistical problem. The range of random variable W depends on a parameter of
the model (W 2 rV). For a model without observed or unobserved explanatory
variables, the maximum likelihood estimator of rV is in fact the order statistic
estimator (1.6.1). The likelihood based on (1.2.18) is monotonically increasing in
rV, so that imposing the restriction that W 2 rV is essential in securing maximum
likelihood estimates of the model. Assuming that the density of W is such that
f( r V) # 0, the consistent maximum likelihood estimator of the remaining parame-
ters of the model can be obtained by inserting rP in place of rV everywhere in
(1.2.18) and the sampling distribution of this estimator is the same whether or not rV
is known a priori or estimated. For a proof, see Flinn and Heckman (1982a). In a
model with observed explanatory variables but without unobserved explanatory
variables, a similar phenomenon occurs. However, at the time of this writing, a
rigorous asymptotic distribution theory is available only for models with discrete
valued regressor variables which assume a finite number of values.

1.6.4.   Point D

Introducing observed and unobserved explanatory variables into a structural
duration model raises the same sort of issues about ad hoc model specifications
already discussed in the analysis of reduced form models in Section 1.3. However,
there is the additional complication that structural restriction (1.2.13) produced
by economic theory must be satisfied. One is not free to arbitrarily specify the
parameters of the model.
   It is plausible that c, r, X and F in (1.2.13) all depend on observed and
unobserved explanatory variables. Introducing such variables into the economet-
ric search model raises three new problems.

 (i) Economic theory provides no guidance on the functional form of the c, r, h
     and F functions (other than the restriction given by (1.2.13)).24 Estimates

   “As discussed in Flinn and Heckman   (1982a). some equilibrium   search models place restrictions   on
the functional  form of F.
Ch. 29: Econometric   Analysis of Longitudinal   Data                                                1141

      secured from these models are very sensitive to the choice of these functional
      forms. Model identification is difficult to check and is very functional form
      dependent.
 (ii) In order to impose the restrictions produced by economic theory to secure
      estimates, it is necessary to solve nonlinear eq. (1.2.13). Of special impor-
      tance is the requirement that I’> 0. If this restriction is not satisfied, the
      model cannot explain the data. If V < 0, an unemployed individual will not
      search. Closed form solutions exist only for special cases and in general
      numerical algorithms must be developed to impose or test these restrictions.
      Such numerical analysis procedures are costly even for a simple one spell
      search model and for models with more economic content often become
      computationally intractable. (One exception is a dynamic McFadden model
      with no restrictions between the choice and interarrival time distributions.)
(iii) Because of restrictions like (1.2.13), proportional hazard specifications (1.1.10)
      are rarely produced by economic models.

1.65.     Point E

In the search model without unobserved variables, the restriction that W > rV is
an essential piece of identifying information. In a model with unobservable 0
introduced in c, r, X or F, rV= rV(19) as a consequence of functional restriction
(1.2.13). In this model, the restriction that W 2 rV is replaced with an implicit
equation restriction on the support of 0; i.e. for an observation with accepted
wage W and reservation wage rV(Q, the admissible support set for 0 is

        {e: Oa%-@)I w}.
This set is not necessarily connected.
   The left hand side of the inequality states the requirement that must be satisfied
if search is undertaken (rV> 0 for r > 0). The right hand side of the inequality
states the requirement that accepted wages must exceed reservation wages. Unless
this restriction is imposed on the support of 0,. the structural search model is not
identified. (See Flinn and Heckman, 1982a.)25
   Thus in a duration model produced from economic theory not only is the
conditional hazard h(t 1x( t), 8) unlikely to be of the proportional hazard func-
tional form, but the support of 0 will depend on parameters of the model. The
mixing distribution representations presented in Section 1.4.4 above are unlikely
to characterize structural duration models. Accordingly, the nonparametric iden-

  25 Kiefer and Neumann (1981) fail to impose this requirement in their discrete time structural   search
model so their proposed estimator is inconsistent. See Flinn and Heckman, 1982~.
1748                                                          J. J. Heckman   and B. Singer

tification and estimation strategies presented in Section 1.4 require modification
before they can be applied to explicit economic models.



2.      Multiple spell models

The single spell duration models discussed in Part I are the principal building
blocks for the richer, more behaviorally interesting models presented in this part
of the paper. Sequences of birth intervals, work histories involving movements
among employment states, the successive issuing of patents to firms and individ-
ual criminal victimization histories are examples of multiple spell processes which
require a more elaborate statistical framework than the one presented in Part I.
   In this part of the paper we confine our attention to new issues that arise in the
analysis of multiple spell data. Issues such as the sensitivity of empirical estimates
to ad hoc specifications of mixing distributions and initial conditions problems
which also arise in multiple spell models are not discussed except in cases where
access to multiple spell data aid in their resolution.
   This part of the paper is in two sections. In Section 2.1 we present a unified
statistical framework within which a rich variety of discrete state continuous time
processes can be formulated and analyzed. We indicate by example how special-
izations of this framework yield a variety of models, some of which already
appear in the literature. We do not present a complete analysis of multiple spell
processes including their estimation and testing on data generated by various
sampling processes because at the time of this writing too little is known about
this topic.
   Section 2.2 considers in somewhat greater detail a class of multiple spell
duration models that have been developed for the analysis of event history data.
In this Section we also consider some alternative approaches to initial conditions
problems and some alternative approaches to controlling for unobserved variables
that are possible if the analyst has access to multiple spell data.



2. I.    A unified framework


2.1.1.     A general construction

To focus on main issues, in this section we ignore models with unobserved
variables. We retain the convention that the sample at our disposal starts at
calendar time 7 = 0.
   Let {Y(r),r>O},   YEN       where I= {l,...,C},   C<cc, be a finite state
continuous time stochastic process. We define random variable R(j), j E
C/I. 29: Econometric   Anulysis   of Longitudinal Duta                                     1149

{ 1,. . . , CQ} as the value assumed by Y at the jth transition time. Y( 7) or R(j) is
generated by the following sequence.
    (i) An individual begins his evolution in a state Y(0) = R(0) = r(0) and waits
there for a random length of time Tr governed by a conditional survivor function


      P(7’I>t,~r(0))=exp(-/“h(u~~(u),r(0))du).
                                           0


As before h(ulx(u), r(0)) is a calendar time (or age) dependent function and we
now make explicit the origin state of the process.
  (ii) At time T(1) = r(l), the individual moves to a new state R(1) = r(1)
governed by a conditional probability law

      I           = 4)la,               40))~
which may also be age dependent.
  (iii) The individual waits in state R(1) for a random length of time T, governed
by

      P(T,    >t21~(1),r(l),r(0))              =exp(
                                                  -~(ulx(u+7o),r(l),r(O))d
Note that one coordinate of X(U) may be u + r(l), and that F(2)- F(1) = T2.
At the transition time y(2) = r(2) he switches to a new state R(2) = r(2) where
the transition probability

      ww          = 4m4),               7m 4L       40),

may be calendar time dependent.
   Continuing this sequence of waiting times and moves to new states gives rise to
a sequence of random variables

      R(0) = r(O), 9-(l) = r(l),               R(1) = r(l), 372) = r(2), R(2) = Y(2),...

and suggests the definitions

      Y(T) = R(k)                 for      T(k)seT(k+l),

where R(k), k = 0,1,2 ,... is a discrete time stochastic process governed by the
conditional probabilities

      J’@(k) = dk)lt,o q--l),
1750                                                                        J. J. Heckmun nnd B. Singer

where

       r,= (&,...dk)             and          rk_l=    (~(O),...,r(k-1)).

T, = F(k)-        .F( k - 1) is governed by the conditional survivor function,




2.1.2.     Specializations of interest

We now present a variety of special cases to emphasize the diversity of models
encompassed by the preceding construction.
2.1.2. I. Repeated events of the same kind. This is a one state process, e.g. births
in a fertility history. R( .) is a degenerate process and attention focuses on the
sequence of waiting times T,, T,, . . . .
   One example of such a process writes

       p(T, > t&,-J         = exp( -              dk-l)))du).
                                        /‘*hk(UIX(U+
                                         0

The hazard for the kth interval depends on the number of previous spells. This
special form of dependence is referred to as occurrence dependence. In a study of
fertility, k - 1 corresponds to birth parity for a woman at risk. Heckman and
Borjas (1980) consider such models for the analysis of unemployment.
   Another variant writes the hazard of a current spell as a function of the mean
duration of previous spells, i.e. for spell j > 1


       h(ulx(u+,T(j-1)),            t,_,)=h       u[


[See, e.g. Braun and Hoem (1979).]
  Yet another version of the general model writes for the jth spell




This is a model with both occurrence dependence and lagged duration depen-
dence, where the latter is defined as dependence on lengths of preceding spells.
  A final specification writes

       h(ujw(u+7(j-l)),til)=h(x(u+7(j-1))).
C/I. 29: Econometric   Anu!vsis of Longitudinal   Duta                                                    1751

For spell j this is a model for independent non-identically                    distributed durations;
and Y(r) is a nonstationary renewal process.
2.1.2.2.    Multistate processes.          Let




where

      lhjll = MY

is a finite stochastic matrix

      P(T, > t,lt,-,,        vl) = ev(- +k-l)tJr

where the elements of {Xi} are positive constants. Then Y( 7) is a time homoge-
neous Markov chain with constant intensity matrix

      Q=A(M-I)

where


              Xl              0
      A=


             I !
               0
                       -.

                            .A,
                                    ,




and C is the number of states in the chainz6
   In the dynamic McFadden model for a stationary environment presented in
Section 1.2.3, M has the special structure mij = m,j = P, for all i and 1; i.e. the
origin state is irrelevant in determining the destination state. This restricted model
can be tested against a more general specification.27
   A time inhomogeneous semi-Markov process emerges as a special case of the
general model if we let

      P(R(k)= r(k)lh,             rk-lydk -1)) = qk-l),r(k)(dk), tk),
  26Note that without further restrictions on the elements   of M, it is not possible   to separate   A, from
(m,, - 1) so that one might as well normalize mii = 0.
   “Note   that in the McFadden model it is not necessary    to normalize   rn,, = 0 to identify   A, because
of the cross row restrictions on M.
1752                                                             J. J. Heckmun und B. Singer


where




is a two parameter family of time (T) and duration (u) dependent                stochastic
matrices with each element a function 7 and u and

       m;, = 0.


We further define


       P(T, > t/J,-,,   f-k-1, T(k-L))=exp(   -l’~h(ulro_,,,.r(k-l))du).
                                                 0


With this restricted form of dependence, Y(r) is a time inhomogeneous semi-
Markov process. (Hoem, 1972, provides a nice expository discussion of such
processes.)
   Moore and Pyke (1968) consider the problem of estimating a time inhomoge-
neous semi-Markov model without observed or unobserved explanatory variables.
The natural estimator for a model without restrictions connecting the parameters
of P(R(k) = 4k)llk, r&l, r(k - 1)) and P(Fk > tkltk_l, rkpl, ~(k - 1)) breaks
the estimation into two components.

 (i) Estimate I7 by using data on transitions from i to j for observations with
     transitions having identical (calendar time 7, duration u) pairs. A special case
     of this procedure for a model with no duration dependence in a time
     homogeneous environment pools i to j transitions for all spells to estimate
     the components of M (see also Billingsley, 1961). Another special case for a
     model with duration dependence in a time homogeneous environment pools i
     to j transitions for all spells of a given duration.
(ii) Estimate P(T, > tkltk_l, rk_l, ~(k -1)) using standard survival methods (as
     described in Section 1.3 or in Lawless (1982)) on times between transitions.

   These two estimators are consistent, asymptotically normal, and efficient and
are independent   of each other as the number of persons sampled becomes large.
There is no efficiency gain from joint estimation. The same results carry over if 11
and P(T, > tkltk_l, rk_l, T(k -1)) are parameterized (e.g. elements of I7 as a
logit, P( Tk > t,J.) as a general duration model) provided, for example, the
regressors are bounded iid random variables. The two component procedure is
efficient. However, if there are parameter restrictions connecting I7 and the
conditional survivor functions, the two component estimation procedure produces
C/L 19: Econometric Anulysis of Longiiudinnl Datu                                  1153

inefficient estimators. If II and the conditional survivor functions depend on a
common unobservable, a joint estimation procedure is required to secure a
consistent random effect estimator.



2.2.    General duration models for the analysis of event history data

In this section we present a multistate duration model for event history data, i.e.
data that give information on times at which people change state and on their
transitions. We leave for another occasion the analysis of multistate models
designed for data collected by other sampling plans. This is a major area of
current research.
   An equivalent way to derive the densities of duration times and transitions for
the multistate processes described in Section 2.1 that facilitates the derivation of
the likelihoods presented below is based on the exit rate concept introduced in
Part 1. An individual event history is assumed to evolve according to the following
steps.
   (i) At time r = 0, an individual is in state rcO,= (i), i = 1,. . ., C. Given oc-
cupancy of state i, there are Ni I C - 1 possible destinations.28 The limit (as
At + 0) of the probability that a person who starts in i at calendar time r = 0
leaves the state in interval (tl, t, + At) given regressor path {x( ~)}a’“’ and
unobservable 8 is the conditional hazard or escape rate


               P( t, -c TI < t, + Atlr,, = (i), F(O) = 0, +I),      6, q ’ tJ
        lim
       At+0                                   At

              = h(t,lrc,j = (i), F(O) = 0, +I),               6).               (2.2.1)


This limit is assumed to exist.
   The limit (as At + 0) of the probability that a person starting in rco, = (i) at
time r(O) leaves to go to j # i, j E N, in interval (tl, t, + At) given regressor path
{ x(u)}~,+” and 0 is


        lim    P(t,<T,<t,+At,R(l)=jlr(,,=(i),~(O)=O,x(t,),8,T,2t,
       At40                                              At

              =h(t,,_ilr,,=       (i),y(0)=0,x(tI),8).                          (2.2.2)


  *‘If some transitions   are prohibited   then N, < C - 1.
1754                                                       J. J. Heckman und B. Singer

From    the laws of conditional probability


        z    h(t,,jlq,,=     (i>3-(O)=O,-WJ)
       /=1

              =h(t,lr(O,=     (i>,-qO)=o,-+,),e).


   (ii) The probability that a person starting in state i at calendar time r = 0
survives to 7’r = t, is (from the definition of the survivor function in (1.8) and
from hazard (2.2.1))

       P(TI ‘t,l~~,=(i),~(O)=O,{r(u)}~,e)

              = exp - *VI z41q0)
                               = (i), Y(O)=O,x(u)J)du).
                   ( J0 (

   Thus the density of Tl is

       f(fllrco,=     (i),~(O)=O,(r(u))~,e)




              =h(t,lr,,=i,~(O)=O,x(t,),e)

                 XP(Tl~~llr~o,=(i),~(0)=O,{x(u)}~,e)
The density of the joint event R(1) = j and T, = t, is

       f(t,,jlrco,=(i),~(0)=O,{~(~)}~,e)
              =h(t,(r,,=(i),~(O)=O,x(t,),e)

                 x P(TI >‘Ilr~,,=(i),~(0)=O,(x(~))~,e).

This density is sometimes called a subdensity. Note that


        ~f(r,,jlr~o~=(i),l(0)=O,(x(u)}~,e)
       j =1



   Proceeding in this fashion, one can define densities corresponding to each
duration in the individual’s event history. Thus, for an individual who starts in
state rem, after his mth transition, the subdensity for T,,, = tm+l and R(m +l)
Ch. 29: Economerric Analysis of Longitudinal Data                                 1755

= j, j=l,...,     N, is

     f(l m+l,   JP cm)’    ~(m)=7(m),{x(U)}gr(m+1),e),
where
                    m+l

     r(Yn+1)=         c    t,.                                                (2.2.3)
                     n=l



   As in Part I we assume an independent censoring mechanism. The most
commonly encountered form of such a mechanism is upper limit truncation on
the final spell. As noted in Part I, in forming the likelihood we can ignore the
censoring densities.
   The conditional density of completed spells T,, . . . , Tk and right censored spell
Tk+l given {~<u)>~7(k)+fk+l assuming that Y(O) = 0 is the exogenous start date of
the event history (and so corresponds to the origin date of the sample) is, allowing
for more general forms of dependence,




                                                                               (2.2.4)




  As noted in Section 1.5, it is unlikely that the origin date of the sample
coincides with the start date of the event history. Let




be the probability density for the random variables describing the events that a
person is in state R(0) = r(0) at time Y(O) = 0 with a spell of length I,,
(measured after the start of the sample) that ends with an exit to state R(1) = r(1)
given ( x(u)}$‘) and 8. The derivation of this density in terms of the intake
density k appears in Section 1.5 (see the derivation of the density of T,). The only
new point to notice is that the h in Section 1.5 should be replaced with the
appropriate h as defined in (2.2.2). The joint density of (r(O), flo r(1)) the
completed spell density sampled at Y(O) = 0 terminating in state r(1) is defined
analogously. For such spells we write the density as
1756                                                              J. J. Heckman and B. Singer

   In a multiple spell model setting in which it is plausible that the process has
been in operation prior to the origin data of the sample, intake rate k introduced
in Section 1.5 is the density of the random variable 7 describing the event
“entered the state r(0) at time Y = 7 I 0 and did not leave the state until
Y > 0.” The expression for k in terms of exit rate (2.2.2) depends on (i)
presample values of x and (ii) the date at which the process began. Thus in
principle given (i) and (ii) it is possible to determine the functional form of k. In
this context it is plausible that k depends on 8.
   The joint likelihood for r(O), t,,(l = a, c), r(l), t,, . . . , r(k), tk+l conditional on
8 and {x(u)}-m‘(k)+rk+l for a right censored k + 1st spell is




The marginal likelihood obtained by integrating out B is,



                                                                                     (2.2.6)

           = ig(@),      tl,, r(l), tz,..., t,, r(k), tL+11{X(U)}~~+t’+1,8)dy(e).

   Equation (2.2.6) makes explicit that the date of onset of spell m + 1 (Y( m + 1))
depends on the durations of the preceding spells. Accordingly, in a model in
which the exit rates (2.2.2) depend on 8, the distribution of time varying x
variables (including date of onset of the spell) sampled at the start of each spell
depends on 0. Such variables are not (weakly) exogenous or ancillary in duration
regression equations, and least squares estimators of models that include such
variables are, in general, inconsistent. (See Flinn and Heckman, 1982b.) Provided
that in the population X is distributed independently of 0, time varying variables
create no econometric problem for maximum likelihood estimators based on
density (2.2.6) which accounts for the entire history of the process. However, a
maximum likelihood estimator based on a density of the lust n < k + 1 spells that
conditions on T(k +l- n) or {x(u)}?!~,‘~-“) assuming they are independent of
0 is inconsistent.
Ch. 29: Econometric   Analysis of Longitudinal   Data                                               1151

  Using (2.2.5) and conditioning on T,, = t,, produces conditional likelihood




                                                                                                (2.2.7)




   For three reasons, inference based on conditional likelihood (2.2.7) appears to
be attractive (see Heckman, 1981b). (1) With this likelihood it is not necessary to
specify or estimate the distribution ~(8). It thus appears possible to avoid one
element of arbitrariness in model specification. (2) With this likelihood we avoid
the initial conditions problem because ‘p and { x( u)}7(‘; do not appear in density
(2.2.7). (3) Treating 8 as a parameter allows for arbitrary dependence between @
and x. These three reasons demonstrate the potential gains that arise from having
multiple spell data.29
   However for general duration distributions, inference based on (2.2.7) fit on
panel data produces inconsistent estimators. This is so because the conditional
likelihood function depends on person specific component 0. Estimating 8 as a
parameter for each person along with the other parameters of the model produces
inconsistent estimators of all parameters if k < 00 in the available panel data
because the likelihood equations are not in general separable (see Neyman and
Scott, 1948). In most panel data sets, k is likely to be small.
   No Monte Carlo study of the performance of the inconsistent estimator has
been performed. By analogy with the limited Monte Carlo evidence reported in
Heckman (1981b) for a fixed effect discrete choice model if x does not contain
lagged values of the dependent variable, the inconsistency is likely to be negligible
even if the likelihood is fit on short panels. The inconsistency issue may be a
matter of only theoretical concern.
   Chamberlain (1984) drawing on results due to Andersen (1973, 1980) presents a
class of multiple spell duration models for which it is possible to find sufficient or
ancillary statistics for 8. Estimation within this class of models avoids the
inconsistency problem that arises in likelihoods based on (2.2.7). The class of
exponential family distributions for which the Andersen-Chamberlain       procedures
are valid is very special and does not provide arbitrarily close approximations to a
general duration density. Most economically motivated duration models are not
likely to be members of the exponential family. With these procedures it is not

   *‘The conditional   likelihood cannot be used to analyze single spell data. Estimating  0 as a person
specific parameter   would expl&n each single spell observation perfectly and no structural parameters
of the model would be identified.
1758                                                                         J. J. Heckman and B. Singer

possible to estimate duration dependence parameters. These procedures avoid the
need to specify or estimate ~(8) and solve the problem of initial conditions by
making very strong and nonrobust assumptions about the functional form of the
conditional hazard h ( t )x, 8 ).
   The random effect maximum likelihood estimator based on density (2.2.6) is
the estimator that is likely to see the greatest use in multispell models that control
for unobservables. Flinn and Heckman (1982b) and Hotz (1983) have developed a
general computational algorithm called CTM for a likelihood based on (2.2.6)
that has the following features.

 0) It allows for a flexible Box-Cox hazard for (2.2.2) with scalar heterogeneity.

            h(tlx,f3)=exp       ( x(t)P+      (qA,+(               $++cB),


                                                                                   A, < A,.     (1.3.2)’

      where j3, yi, yZ, A,, A, and c are permitted to depend on the origin state, the
      destination state and the serial order of the spell. Lagged durations may be
      included among the X. Using maximum likelihood procedures it is possible to
      estimate all of these parameters except for one normalization of c.
 (ii) It allows for general time varying variables and right censoring. The regres-
      sors may include lagged durations.30
(iii) p( 6) can be specified as either normal, log normal or gamma or the NPMLE
      procedure discussed in Section 1.4.1 can be used.”
(iv) It solves the left censoring or initial conditions problem by assuming that the
      functional form of the initial duration distribution for each origin state is
      different from that of the other spells.32

The burden of computing likelihoods based on (2.2.6) is lessened by the following
recursive estimation strategy. (1) Integrate out T,, . . ., Tk+l from (2.2.6) and
estimate the parameters of the reduced likelihood. (2) Then integrate out
T,,..., Tk+l from (2.2.6) and estimate the parameters of the reduced likelihood
fixing the parameters estimated from stage one. (3) Proceed in this fashion until
all parameters are estimated. One Newton step from these parameter values
produces efficient maximum likelihood estimators.

   30The random effect maximum likelihood estimator based on (2.2.6) can be shown to be consistent
in the presence of 0 with lagged durations included on x.
   31The NPMLE procedure         of Heckman    and Singer (1984b) can be shown to be consistent for
multiple spell data.
   32 This procedure is identical to the procedure discussed in Section 1.5.2, using spells that originate
after the origin of the sample.
Ch. .?9: Econometric Analysis of Longitudinal Data                                                   1759

   For more details on the CTM program see Hotz (1983). For further details on
the CTM likelihood function and its derivatives, see Flinn and Heckman (1983).33
For examples of structural multispell duration models see Coleman (1983) and
Flinn and Heckman (1982a).



3.   Summary

This paper considers the formulation and estimation of continuous time social
science duration models. The focus is on new issues that arise in applying
statistical models developed in biostatistics to analyze economic data and for-
mulate economic models. Both single spell and multiple spell models are dis-
cussed. In addition, we present a general time inhomogeneous multiple spell
model which contains a variety of useful models as special cases.
   Four distinctive features of social science duration analysis are emphasized:

(1) Because of the limited size of samples available in economics and because of
    an abundance of candidate observed explanatory variables and plausible
    omitted explanatory variables, standard nonparametric procedures used in
    biostatistics are of limited value in econometric duration analysis. It is
    necessary to control for observed and unobserved explanatory variables to
    avoid biasing inference about underlying duration distributions. Controlling
    for such variables raises many new problems not discussed in the available
    literature.
(2) The environments in which economic agents operate are not the time homoge-
    neous laboratory environments assumed in biostatistics and reliability theory.
    Ad hoc methods for controlling for time inhomogeneity produce badly biased
    estimates.
(3) Because the data available to economists are not obtained from the controlled
    experimental settings available to biologists, doing econometric duration
    analysis requires accounting for the effect of sampling plans on the distri-
    butions of sampled spells.
(4) Econometric duration models that incorporate the restrictions produced by
    economic theory only rarely can be represented by the models used by
    biostatisticians. The estimation of structural econometric duration models
    raises new statistical and computational issues.

   s31n Flinn and Heckman (1983) the likelihood is derived using a “competing           risks” framework.
[See, e.g. Kalbfleisch and Prentice (1980) for a discussion of competing risits models.] This framework
is in fact inessential to their approach. A more direct approach starts with hazards (2.2.1) and (2.2.2)
that are not based on “latent failure times.” This direct approach, given hazard specification (1.3.2);
produces exactly the same estimating equations as are given in their paper.
1760                                                         J. J. Heckmun und B. Singer

   Because    of (1) it is necessary to parameterize econometric duration models to
control for both observed and unobserved explanatory variables. Economic
theory only provides qualitative guidance on the matter of selecting a functional
form for a conditional hazard, and it offers no guidance at all on the matter of
choosing a distribution of unobservables. This is unfortunate because empirical
estimates obtained from econometric duration models are very sensitive to
assumptions made about the functional forms of these model ingredients.
   In response to this sensitivity we present criteria for inferring qualitative
properties of conditional hazards and distributions of unobservables from raw
duration data sampled in time homogeneous environments; i.e. from uncondi-
tional duration distributions. No parametric structure need be assumed to imple-
ment these procedures.
   We also note that current econometric practice ouerparameterizes duration
models. Given a functional form for a conditional hazard determined up to a
finite number of parameters, it is possible to consistently estimate the distribution
of unobservables nonparametrically. We report on the performance of such an
estimator and show that it helps to solve the sensitivity problem.
   We demonstrate that in principle it is possible to identify both the conditional
hazard and the distribution of unobservables without assuming parametric func-
tional forms for either. Tradeoffs in assumptions required to secure such model
identification are discussed. Although under certain conditions a fully nonpara-
metric model can be identified, the development of a consistent fully nonparamet-
ric estimator remains to be done.
   We also discuss conditions under which access to multiple spell data aids in
solving the sensitivity problem. A superficially attractive conditional likelihood
approach produces inconsistent estimators, but the practical significance of this
inconsistency is not yet known. Conditional inference schemes for eliminating
unobservables from multiple spell duration models that are based on sufficient or
ancillary statistics require unacceptably strong assumptions about the functional
forms of conditional hazards and so are not robust. Contrary to recent claims,
they offer no general solution to the model sensitivity problem.
   The problem of controlling for time inhomogeneous environments (Point (2))
remains to be solved. Failure to control for time inhomogeneity produces serious
biases in estimated duration models. Controlling for time inhomogeneity creates a
potential identification problem.
   For a single spell data it is impossible to separate the effect of duration
dependence from the effect of time inhomogeneity by a fully nonparametric
procedure. Although it is intuitively obvious that access to multiple spell data aids
in the solution of this identification problem, the development of precise condi-
tions under which this is possible is a topic left for future research.
   We demonstrate how sampling schemes distort the functional forms of sample
duration distributions away from the population duration distributions that are
Ch. 29: Econometric     Analysis of Longitudinal   Data                                                      1761

the usual object of econometric interest (Point (3)). Inference based on mis-
specified duration distributions is in general biased. New formulae for the
densities of commonly used duration measures are produced for duration models
with unobservables in time inhomogeneous environments. We show how access to
spells that begin after the origin date of a sample aids in solving econometric
problems created by the sampling schemes that are used to generate economic
duration data.
    We also discuss new issues that arise in estimating duration models explicitly
derived from economic theory (Point (4)). For a prototypical search unemploy-
ment model we discuss and resolve new identification problems that arise in
attempting to recover structural economic parameters. We also consider non-
standard statistical problems that arise in estimating structural models that are
not treated in the literature. Imposing or testing the restrictions implied by
economic theory requires duration models that do not appear in the received
literature and often requires numerical solution of implicit equations derived from
optimizing theory.



References

Amemiya. T. (1981) “Qualitative        Response Models: A Survey”, Journal of Economic Literature, 19,
   1483-1536.
Amemiya, T. (1984) “Tobit Models: A Survey”, Journal of Econometrics, 24, l-63.
Andersen,     E. B. (1973) Conditional Inference and Models for Measuring. Copenhagen:             Mentalhygiej-
   nisk Forlag.
Andersen,      E. B. (1980) Discrete Statistical Models with Social Science Annlications.
                                                                                     ‘1             Amsterdam:
   North-Holland.
Arnold, Barry and P. Brockett (1983) “Identifiability        For Dependent Multiple Decrement/Competing
   Risks Models”, Scandanavian Actuarial Journal. 10. 117-127.
Baker, G. and P. Trevedi (1982) “Methods for Estimating the Duration of Periods of Unemployment”.
   Australian     National University Working Paper.
Barlow, R. E. and F. Proschan (1975) Statistical Theory of Reliability and Life Testing. New York:
   Holt, Rinehart and Winston.
Barlow, ,R. E., D. J. Bartholomew,      J. M. Bremner and H. D. Brunk (1972) Statistical Inference Under
   Order Restrictions. London: Wiley.
Billingsley, P. (1961) Statistical Inference for Markov Processes. Chicago: University of Chicago Press.
Braun, H. and J. Hoem (1979) “Modelling              Cohabitational  Birth Intervals in the Current Danish
   Population:     A Progress Report”. Copenhagen        University,  Laboratory   of Actuarial    Mathematics,
   working paper no. 24.
Burdett, K. and D. Mortensen (1978) “Labor Supply under Uncertainty”,                  in: R. Ehrenberg,      ed.,
   Research in Labor Economics. London: JAI Press, 2, 109-157.
Chamberlain,       G. (1985) “Heterogeneity,    Duration Dependence      and Omitted Variable Bias”, in: J.
   Heckman      and B. Singer, eds., Longitudinal Analysis of labor Market Data. New York: Cambridge
   University Press.
Chamberlain,      G. (1980) “Comment       on Lancaster and Nickell”, Journal of Royal Statistical Society,
   Series A. 160.
Coleman,      T. (1983) “A Dynamic        Model of Labor Supply under Uncertainty”.             U. of Chicago,
  prcscnted      at 1983 Summer Meetings of the Econometric             Society, Evanston,    Ill., unpublished
  manuscript.
1762                                                                                   J. J. Heckman and B. Singer

Cosslett,    8. (1981) “Efficient      Estimation    of Discrete Choice Models”, in: C. Mar&i                  and D.
   McFadden,        eds., Structurul Analysis of Discrete Data with Econometric Applications. Cambridge:
   MIT Press, 41-112.
Cox, D. R. (1962) Renewal Theory. London: Methuen.
Cox, D. R. (1972) “Regression         Models and Lifetables”, Journal of the Royal Statistical Society, Series
   B, 34, 187-220.
Cox, D. R. and D. Hinkley (1974) Theoretical Statistics. London: Chapman and Hall.
Cox, D. R. and P. A. W. Lewis (1966) The Statistical Analysis of u Series of Events. London: Chapman
   and Hall.
Cox, D. R. and D. 0. Oakes (1984) Analysis of Survival Data. London: Chapman and Hall.
DeGroot,     M. (1970) Optimal Statisticul Decisions. New York: McGraw-Hill.
Domencich,        T. and D. McFadden (1975) Urban Travel Demand. Amsterdam:                  North-Holland.
Elbers, C. and G. Ridder (1982) “True and Spurious Duration Dependence:                   The Identifiability     of the
   Proportional       Hazard Model”, Review of Economic Studies, 49, 403-410.
Feller, W. (1970) An Introduction to Probability Theory and Its Applications. New York: Wiley, Vol. I,
   third edition.
Feller, W. (1971) An Introduction to Probability Theory and Its Applications. New York: Wiley, Vol. II.
Flinn, C. and J. Heckman (1982a) “New Methods for Analyzing Structural Models of Labor Force
   Dynamics”,        Journul of Econometrics, 18, 115-168.
Flinn, C. and J. Heckman (1982b) “Models for the Analysis of Labor Force Dynamics”,                              in: R.
   Basmann and G. Rhodes, eds., Advances in Econometrics, 1, 35-95.
Flinn, C. and J. Heckman (1982~) “Comment               on ‘Individual Effects in a Nonlinear Model: Explicit
   Treatment       of Heterogeneity    in the Empirical Job Search Literature”‘,          unpublished    manuscript,
   University of Chicago.
Flinn, C. and J. Heckman (1983) “The Likelihood Function for the Multistate-Multiepisode                      Model in
   ‘Models for the Analysis of Labor Force Dynamics”‘,                  in: R. Basmann and G. Rhodes, eds.,
   Advances in Econometrics. Greenwich: JAI Press, 3.
Hartigan, J. and P. Hartigan (1985) “The Dip Test for Unimodalities”,                The Annals of Statistics, 13(l),
   70-84.
Hauser, J. R. and K. Wisniewski (1982a) “Dynamic                Analysis of Consumer Response to Marketing
   Strategies”,     Munagement Science, 28, 455-486.
Hauser, J. R. and K. Wisniewski (1982b) “Application,            Predictive Test and Strategy Implications for a
   Dynamic Model of Consumer Response”, Marketing Science, 1, 143-179.
Heckman, J. (1981a) “Statistical Models for Discrete Panel Data”, in: C. Manski and D. McFadden
   eds., The Structural Analysis of Discrete Data. Cambridge:            MIT Press.
Heckman,      J. (1981b) “The Incidental Parameters Problem and the Problem of Initial Conditions in
   Estimating      a Discrete Time-Discrete      Data Stochastic Process”, in: C. Manski and D. McFadden,
   eds., Structurul Analysis of Discrete Data with Economic Applications. Cambridge:                     MIT Press,
   179-197.
Heckman,        J. (1974) “Shadow       Prices, Market Wages and Labor Supply”,                Econometrica,      42(4),
   679-694.
Heckman, J. and G. Borjas (1980) “Does Unemployment                  Cause Future Unemployment?           Definitions,
   Questions and Answers from a Continuous Time Model of Heterogeneity                     and State Dependence”,
   Economica, 47, 247-283.
Heckman, J. and B. Singer (1982) “The Identification             Problem in Econometric        Models for Duration
   Data”, in: W. Hildenbrand,         ed., Advances in Econometrics. Proceedings of World Meetings of the
   Econometric        Society, 1980. Cambridge:    Cambridge University Press.
Heckman, J. and B. Singer (1983) “The Identifiability            of Nonproportional      Hazard Models”. Univer-
   sity of Chicago, unpublished manuscript.
Heckman, J. and B. Singer (1984a) “The Identifiability           of the Proportional    Hazard Model”, Review of
   Economic Studies, 51(2), 231-243.
Heckman,       J. and B. Singer (1984b) “A Method for Minimizing                   the Impact of Distributional
   Assumptions        in Econometric   Models for duration Data”, Econometrica, 52(2), 271-320.
Hoem. J. (1972) “Inhomogeneous               Semi-Markov   Processes, Select Actuarial        Tables and Duration
   Dependence        in Demography”,      in: T. Greville, ed., Population Dynamics. New York: Academic
   Press, 251-296.
Ch. 29: Econometric       Analysis of Longitudinal      Data                                                            1763

Hotz. J. (1983) “Continuous          Time Models (CTM): A Manual”. GSIA, Pittsburgh:                       Carnegie-Melon
   University.
Jovanovic,     B. (1979) “Job Matching and the Theory of Turnover”,                     Journal of Political Economy,
   October, 87, 972-990.
Kac, M. (1959) Probability        and Related Topics in the Physical Science. New York: Wiley.
Kalbfleisch, J. and R. Prentice (1980) The Siatistical Analysis of Failure Time Data. New York: Wiley.
Kieter. N. and G. Neumann (1981)    ~      I
                                             “Individual     Effects in a Nonlinear Model”, Econometrica. 49(4).          ,/
   965-980.
Lancaster.     T. and S. Nickel1 (1980) “The Analysis of Reemployment                      Probabilities    for the Unem-
   ployed”, Journal of the Royal Statistical Society, Series A, 143, 141-165.
Lawless, J. F. (1982) Statistical Models and Methods for Lifetime Data. New York: Wiley.
Lewis, H. G. (1974) “Comments              on Selectivity Biases in Wage Comparisons”,                  Journal of Political
   Economy, November,         82(6), 1145-1156.
Lindsey, B. (1983a) “The Geometry of Mixture Likelihoods, Part I”, Annals of Statistics, 11, 86-94.
Lindsey, B. (1983b) “The Geometry of Mixture Likelihoods,                      Part II”, Annals of Statistics, 11(3),
   783-792.
Lippman,      S. and J. McCall (1976) “The Economics of Job Search: A Survey”, Economic Inquiry,
   September, 14, 113-126.
Lundberg,      F. (1903) “I. Approximerad        Framstallmng       af Sannolikhetsfunktionen         II. Aterforsakring    af
   Kollektivrisker”.     Uppsala: Almquist und Wicksell.
Lundberg,      S. (1981) “The Added Worker: A Reappraisal”.                  NBER Working Paper no. 706, Cam-
   bridge, Mass.
Manski, C. and D. McFadden (1981) “Alternative                 Estimators and Sample Designs for Discrete Choice
   Analysis”, in: C. Manski and D. McFadden,                 Structural Analysis of Discrete Data with Econometric
   Applications. Cambridge:       MIT Press, 2-50.
Manski, C. and S. Lerman (1977) “The Estimation                       of Choice Probabilities          from Choice Based
   Samples”, Econometrica, 45, 1977-1988.
McFadden,       D. (1974) “Conditional       Logit Analysis of Qualitative Choice Behavior”, in: P. Zarembka,
   ed., Frontiers in Econometrics. New York: Academic Press.
Moore, E. and R. Pyke (1968) “Estimation                 of the Transition      Distributions    of a Markov Renewal
   Process”, Annals of the Institute of Statistical Mathematics. Tokyo, 20(3), 411-424.
Neyman, J. and E. Scott (1948) “Consistent               Estimates Based on Partially Consistent Observations”,
   Econometrica, 16, l-32.
Robb, R. (1984) “Two Essays on the Identification                   of Economic Models”. University of Chicago,
   May, unpublished       manuscript.
Robbins. H. (1970) “Optimal           Stopping”, American Mathematical Monthly, 77, 333-43.
Ross, S. M. (1970) Applied Probability Models with Optimization Applications. San Francisco: Holden-
   Day.
Rudin, W. (1974) Real and Complex Analysis. New York: McGraw Hill.
Salant, S. (1977) “Search Theory and Duration                   Data: A Theory of Sorts”, Quarterly Journal of
   Economics, February, 91, 39-57.
Sheps, M. and J. Menken (1973) Mathematical Models of Conception and Birth. Chicago: University of
   Chicago Press.
Shohat, J. and J. Tamarkin          (1943)/ The Problem of Moments. New York: American Mathematical
   Society.
Singer, B. (1982) “Aspects of Nonstationarity”,             Journal of Econometrics, 18(l), 169-190.
Trusseli, J. and T. Richards (1985) “Correcting            for Unobserved Heterogeneity           in Hazard Models: An
   Application      of the Heckman-Singer        Procedure, in N. Tuma, Sociological Methodology. San Fran-
   cisco: Jossey Bass.



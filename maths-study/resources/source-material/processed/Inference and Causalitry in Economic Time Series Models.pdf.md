---
normalized_id: shared-pdf-reference-inference-and-causalitry-in-economic-time-series-models
exam_code: SHARED
material_scope: inference and causalitry in economic time series models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Inference and Causalitry in Economic Time Series Models.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-inference-and-causalitry-in-economic-time-series-models

Chapter       19



INFERENCE                        AND CAUSALITY                       IN ECONOMIC                      TIME SERIES
MODELS
JOHN       GEWEKE

Duke      Unwersig~




Contents
1.     Introduction                                                                                           1102
2.     Causality                                                                                              1103
3.     Causal orderings and their implications                                                                1108
       3.1.        A canonical form for wide sense stationary multiple          time series                   1109
       3.2.        The implications of unidirectional causality                                               1113
       3.3.        Extensions                                                                                 1115
4.     Causality and exogeneity                                                                               1117
5.     Inference                                                                                              1122
       5.1.        Alternative   tests                                                                        1122
       5.2.        Comparison     of tests                                                                    1127
6.     Some practical problems for further research                                                           1133
       6.1.        The parameterization       problem   and asymptotic    distribution    theory              1133
       6.2.        Non-autoregressive      processes                                                          1135
       6.3.        Deterministic    processes                                                                 1138
       6.4.        Non-stationary     processes                                                               1139
       6.5.        Multivariate methods                                                                       1140
References                                                                                                    1142




Handbook       of Econometrics,  Volume II,         Edited   hv 2. Griliches   and M.D.    Intrrlrgator
0 Elsevier     Science Puhlishers B V, I984
1102                                                                                          J. Gmeke




1.     Introduction

Many econometricians are apt to be uncomfortable when thinking about the
concept “causality” (in part, because they usually do so under some duress). On
the one hand, the concept is a primitive notion which is indispensable when
thinking about economic phenomena, econometric models, and the relation
between the two. On the other, the idea is notoriously difficult to formalize, as
casual reading in the philosophy of science will attest. In this chapter we shall be
concerned with a particular formalization that has proved useful in empirical
work: hence the juxtaposition of “causality” and “inference”. It also bears close
relation to notions of strictly exogenous and predetermined variables, which have
considerable operational significance in statistical inference, and to the concepts
of causal orderings and realizability which are important in model construction in
econometrics and engineering, respectively.
   Our concept of causality was introduced to economists by C. W. J. Granger
[Granger (1963, 1969)], who built on earlier work by Wiener (1956). We shall
refer to the concept as Wiener-Granger causality. It applies to relations among
time series. Let X = {x,, t real} and Y = { y,, t real} be two time series, and let
X, and Y denote their entire histories up to and including time t: X, = {x,_,, s 2
0}, Y, = { yrp,, s 2 O}. Let U, denote all information accumulated as of time t,
and suppose that X, G U, if and only if s I t, and Y, 5 U, if and only if s I t. If
we are better able to predict x, using U,_, than we are using U,_ 1 - Y,_ 1, then Y
CUUS~S   X. If we are better able to “predict” x, using U,_ 1 U y, than we are using
 U,_ 1, then Y causes X instantaneously.’
   Since Wiener-Granger causality is defined in terms of predictability, it cannot
be an acceptable definition of causation for most philosophers of science [Bunge
(1959, ch. 12)]. We do not take up that argument in this chapter. Rather, we
concentrate on the operational usefulness of the definition in the construction,
estimation, and application of econometric models. In Section 2, for example, we
consider the logical relationships among Wiener-Granger           causality, Simon’s
(1952) definition of causal ordering, the engineer’s criterion of realizability [e.g.
Zemanian (1972)], and the concept of structure set forth by Hurwicz (1962).
   Although Wiener-Granger causality is an empirical rather than a logical or
ontological concept, it must be made much more specific before propositions like



   ‘Granger’s (1963, 1969) definitions assume that the time series are stationary, predictors are linear
least-squares projections, and mean-square error is the criterion for comparison of forecasts. While
these assumptions are convenient to make when conducting empirical tests of the proposition that
causality of a certain type is absent, they are not SUIgeneris and therefore have not been imposed here.
Ch. 19: Inference und Causali@                                                   1103


“Y  does not cause X” can be refuted, even in principle. One must always specify
the set of “all information” assumed in the definition since Y may cause X for
some sets but not others. One must also have a criterion for the comparison of
predictors, and the validity of propositions like “Y does not cause X” can be
assessed only for restricted classes of predictors and distribution functions. In
Section 3 we take up the case, frequently assumed in application, in which
U, = X, u q, predictors are linear, and the time series are jointly wide sense
stationary, purely nondeterministic, and have autoregressive representations.
   In Sections 4 and 5 we move on to issues of statistical inference. In Section 4 it
is shown that unidirectional causality from X to Y (i.e. Y does not cause X, and
X may or may not cause Y) is logically equivalent to the existence of simulta-
neous equation models with X exogenous. It is also shown that unidirectional
causality from X to Y is not equivalent to the assertion that X is predetermined
in a particular behavioral relationship whose parameters are to be estimated. In
Section 5 we take up the narrower problem of testing the proposition that Y does
not cause X under the assumptions made in Section 3.
   Section 6 is devoted to some of the problems which arise in testing the
proposition of unidirectional causality using actual economic time series, due to
the fact that these series need not satisfy the ideal assumptions made in Sections 3
and 5. We concentrate on parameterization problems, processes which are nonau-
toregressive or have deterministic components or are nonstationary, and inference
about many variables. The reader who is only interested .in the mechanics of
testing hypotheses about unidirectional causality can skip Sections 2 and 4, and
read Sections 3, 5, and 6 in order. The material in Sections 2 and 4, however, is
essential in the interpretation of the results of those tests.




2.   Causality

Whether or not Wiener-Granger causality is consistent with formal definitions of
causality offered by philosophers of science is an open question. In most defini-
tions, “cause” is similar in meaning to “force” or “produce” [e.g. Blalock (1961,
pp. 9-lo)], which are clearly not synonymous with “predict”. Perhaps the
definition closest to Wiener-Granger causality is Feigl’s in which “causation is
defined in terms of predictability according to a law” [Feigl (1953, p. 408)J. It has
been argued [Zellner (19?9)] that statistical “laws” of the type embodied in
Wiener-Granger causality are not admissible, as opposed to those of economic
theory. Wiener-Granger causality is therefore “devoid of subject matter consider-
ations, including subject matter theory, and thus is in conflict with others’
definitions, including Feigl’s, that do mention both predictability and laws”
[Zellner (1979, p. 51)]. Bunge (1959, p. 30) on the other hand, argues forcefully
1104                                                                                J. Geweke




                      S = outcomes




                                            Figure2.1

against a distinction between statistical and other kinds of laws: “The claim that
statistical laws, in contrast to other kinds of scientific law, are incomplete, hence
provisional, is largely a matter of metascientific inertia. . . . In contemporary
science and technology, and even in everyday life, we often ask questions that
simply cannot be answered on any individual or dynaniical laws, questions
requiring a statistical approach and analysis.”
   The usefulness of the concept of Wiener-Granger causality in the conceptual-
ization, construction, estimation and manipulation of econometric models is
independent of its consistency or inconsistency with formal definitions. To
evaluate its usefulness, we review and formalize some operational concepts
implicit in econometric modelling.*
   A definition of causal ordering in any econometric model (as opposed to the
real world) was proposed by Simon (1952). Suppose S is a space of possible
outcomes, and that the model imposes two sets of restrictions, A and B, on these
outcomes. The entire model imposes the restriction n n B on S. Suppose that S
is mapped into two spaces, X and Y, by Px and P,, respectively. Then the
ordered pair of restrictions (A, B) implies a causal ordering from X to Y if A
restricts X (if at all) but not Y, and B restricts Y (if at all) without further
restricting X. Formally we have the following:

Definition

The ordered pair (A, B) of restrictions on S determines a causal ordering from X
to Y if and only if Pr( A) = Y and Px( A f~ B) = Px( A).

 2Much(but not all) of what followsin this section   may be found in Sims (1977a)
Ch. 19:Inference   und Causuli~v                                                1105

   A geometric interpretation of this definition is provided in Figure 2.1. Some
examples may also be helpful. Perhaps the simplest one which can be constructed
is the following. Let S = {(x, y) E R2 }, and consider the restrictions:

           x=a         “A ”
      y + bx = c       “B ”

on S. Let P, map S into the x coordinate and let P, map S into the y
coordinate. Then (A, B) determines a causal ordering from X to Y because A
determines x without affecting y, while B together with A determines y without
further restricting x. The causal ordering is a property of the model, not a
property of the restrictions on S to which the model happens to give rise: clearly,
there are many pairs of restrictions (C, D) such that Px( C n D) = Px( A n B) = a
and P,(C f~ D) = P,(A n B) = c - ba, and in fact one of these establishes a
causal ordering from Y to X.
   As a second example, let S be the family of pairs of random variables (x, v)
with bivariate normal distribution. Consider the restrictions:

             x=ui-       N( pi, 0;)   “A”

      y+bx=u,-N(~2,a,2)               “B”

on S, where ui and u2 are independent. Suppose Px and P, map S into the
marginal distributions for x and y, respectively. Then (A, B) determines a causal
ordering from the marginal for x to the marginal for y. The model consisting of
A, B, and the stipulation that ui and u2 are independent is the simplest example
of a recursive model [Strotz and Wold (1960)]. As Basmann (1965) has pointed
out, any outcome in S can be described by such a model-again,             the causal
ordering is a property of the model, not of the outcome.
   Causal orderings, or recursive models, are intended to be more than just
descriptive devices. Inherent in such models is the notion that if A is changed, the
outcome will still be A n B, with B unchanged. Once the possibility of changing
the first restriction in the ordered pair is granted, it makes a great deal of
difference which causal ordering is inherent in the model: different models
describe different sets of restrictions on S arising from manipulation of the first
restriction. Hence attention is focused on B. We formalize the notion that B is
unchanged when A is manipulated as follows.
Definition

The set B c S accepts X as input if for any A c S which constraints only X (i.e.
P; ‘( Px( A)) = A), (A, B) determines a causal ordering from X to Y.

In econometric modelling, the notion that B should accept X as input is so
entrenched and natural that it is common to think of B as the model itself, with
1106                                                                         J. Geweke

little or no attention given to the set A which restricts the admissible inputs for
the model, although these restrictions may be very important. Conventional
manipulation of an econometric model for policy or predictive purposes assumes
that the manipulated variables are accepted as input by the model.
    In many applications X and Y are time series, as they were in the notation of
Section 1. Consider the simple case in which X and Y are univariate, normally
distributed, jointly stationary time series, and S is the family of bivariate,
normally distributed, jointly stationary time series. Suppose that the restriction A
is:

       A(L)x, = u,,
where A(L) is one-sided (i.e. involves only non-negative powers of the lag
operator L) and has all roots outside the unit circle; and V= {u,, t real} is a
serially uncorrelated, normally distributed, stationary time series. Let the restric-
tion B be:



where B(L) has no roots on the unit circle, both B(L) and C(L) may be
two-sided (i.e. involve negative powers of the lag operator L) and W = { w,, t
real} is a serially uncorrelated normally distributed, stationary time series inde-
pendent of U. Since A implies x, = A(L)-‘u,,      it establishes the first time series
without restricting the second, while “B ” implies

       Y,=-B(L)~‘C(L)x,+B(L)~‘u,;                                               (2.1)

which establishes the second without changing the first. Hence, the model
establishes a causal ordering from X to Y, and if for any normally distributed,
jointly stationary X the outcome of the model satisfies (2.1), then B accepts X as
input. Such a model might or might not be interesting for purposes of manipula-
 tion, however. In general, y, will be a function of past, current, and future X,
which is undesirable if B is supposed to describe the relation between actual
inputs and outputs; the restriction that B(L) and C(L) be one-sided and that
B(L) have no roots inside the unit circle would obviate this difficulty.
    The notion that future inputs should not be involved in the determination of
present outputs is known in the engineering literature as realizability [Zemanian
(1972)], and we can formalize it in our notation as follows.
Definition
The set B G S is realizable with time series X as input if B accepts X as input, and
Px (A,) = Px (A*) implies Pr( A, fl B) = Py,( A, n B) for all A, c S and A, c S
wl&h constrain only X, and all t 2 r.
Ch. 19: Inference and Cau.sali(v                                                 1107


If B accepts X as input but is not realizable, then a specification of inputs up to
time t will not restrict outputs, but once outputs up to time t are restricted by B,
then further restrictions on inputs-those     occurring after time t-are     implied.
This is clearly an undesirable characteristic of any model which purports to treat
time in a realistic fashion.
   The concepts of causal ordering, inputs, and realizability pertain to models.
One can establish whether models possess these properties without reference to
the phenomena which the models are supposed to describe. Of course, our interest
in these models stems from the possibility that they do indeed describe actual
phenomena. Hurwicz (1962) attributes the characteristic structural to models
which meet this criterion.


Dejinition
The set B c S is structural for inputs X if B accepts X as input, and when any
set C G X is implemented, then Pv( Pi’(C)n B) is true.

Notice that the use of the word “structural” here is not the same as its use in the
parlance of simultaneous equation models. The sets of “structural”, “reduced
form” and “final form” equations are either all structural or not structural in the
sense of the foregoing definition, depending on whether or not the model depicts
actual phenomena.
   This definition incorporates two terms which shall remain primitive: “imple-
mented” and “true”. Whether or not Py( P;‘(C)fl B) is true for a given C is a
question to which statistical inference can be addressed; at most, we can hope to
attach a posterior probability to the truth of this statement. We can never know
whether PY( Pi’(C)n B) is true for any C: one can never prove that a model is
structural, although by implementing one or more sets C serious doubts could be
cast on the assertion. Since the definition allows any set C G X to be imple-
mented, those implementing inputs in real time are permitted to change their
plans. It seems implausible that the current outputs of an actual system should
depend on future inputs as yet undetermined. We formalize this idea as follows.


Axiom of causality
B c S is structural for inputs X only if B is realizable with X as input.


  The axiom of causality is a formalization of the idea that the future cannot
cause the past, an idea which appears to be uniformly accepted in the philosophy
of science despite differences about the relations between antecedence and
causality. For example, Blalock (1964, p. 10) finds this condition indispensable:
1108                                                                                          J. Geweke

“Since the forcing or producing idea is not contained in the notion of temporal
sequences, as just noted, our conception of causality should not depend on
temporal sequences, except for the impossibility of an effect preceding its cause.”
Bunge argues that the condition is universally satisfied:
     Even relativity admits the reversal of time series of physically disconnected
     events but excludes the reversal of causal connections, that is, it denies that
     effects can arise before they have been produced.. .events whose order of
     succession is reversible cannot be causally connected with one another; at most
     they may have a common origin.. . To conclude, a condition for causality to
     hold is that C [the cause] be previous to or at most simultaneous with E [the
     event] (relative to a given reference system) [Bunge (1959, p. 67)].
   It is important to note that the converse of the axiom of causality is the post
hoc ergo propter hoc fallacy. The fallaciousness of the converse follows from the
fact that there are many B, G S which are realizable with X as input, but for
which P,(Pi’(C)n      B,) # P,(&‘(C)n     Bk) when j # k for some choices of C.
For C which have actually been implemented, B, and B, may of course produce
identical outputs in spite of their logical inconsistency: one cannot establish that a
restriction is structural through statistical inference, even to a specified level of a
posteriori probability.3 It may seem curious to provide the name “axiom of
causality” to a statement which nowhere mentions the word “cause”. The name is
chosen because of Sims’ (1972) result that (in our language, and with appropriate
restrictions on classes of time series and predictors) B is realizable with X as
input if and only if in B Wiener-Granger causality is unidirectional from X to Y.
To develop this result we shall be quite specific about the structure of the time
series X and Y.



3.     Causal orderings and their implications

In any empirical application the concept of Wiener-Granger causality must be
formulated more narrowly than it is in Granger’s definitions. The relevant
universe of information must be specified, and the class of predictors to be
considered must be limited. If formal, classical hypothesis testing is contemplated,
then the question of whether or not Y is causing X must be made to depend on
the values of parameters which are few in number relative to the number of
observations at hand. The determination of the relevant universe of information
rests primarily on a priori considerations from economic theory, in much the

   ‘An extended discussion of specific pitfalls encountered in using a finding that a restriction B which
is realizable with X as input is in agreement with the data, to buttress a claim that B is structural, is
provided by Sims (1977).
Ch. 19: Inference und Causahry                                                                1109

same way that the specification of which variables should enter a behavioral
equation or system of equations does. Empirical studies which examine questions
of Wiener-Granger causality differ greatly in the care with which the universe of
information is chosen; in many instances, it is suggested by earlier work on
substantively similar issues which did not address questions of causality. How-
ever, virtually all of these studies consider only predictors which are linear either
in levels or logarithms. This choice is due mainly to the analytical convenience of
the linearity specification, as it is elsewhere in econometric theory. In the present
case it is especially attractive because only linear predictors are necessarily time
invariant when time series are assumed to be wide sense stationary, the least
restrictive class of time series for which a rich and useful theory of prediction is
available. In this section we will discuss the portions of this theory essential for
developing the testable implications of Wiener-Granger causality. Considerations
of testing and inference are left to Section 5.


3.1.    A canonical form for wide sense stationary multiple time series

We focus our attention on a wide sense stationary, purely non-deterministic time
series z,: m x 1. By wide sense stationary, it is meant that the mean of z, exists
and does not depend on t, and for all t and s cov(z,, z(+,) exists and depends on
s but not t. By purely non-deterministic, it is meant that the correlation of z,+~
and z, vanishes as p increases so that in the limit the best linear forecast of z(+~
conditional on {z(_,, s > 0} is the unconditional mean of z(+~, which for conveni-
ence we take to be 0. It is presumed that the relevant universe of information at
time t consists of Z, = {zt_$, s > 0). These assumptions restrict the universe of
information which might be considered, but they are no more severe than those
usually made in standard linear or simultaneous equation models for the purposes
of developing an asymptotic theory of inference.
   We further suppose that there exists a moving average representation for z,:


       z,=   f     AEs t--s,   E(q) = 0,         var( E,) = Y.                               (3.1)
             s=o

In the moving average representation, all roots of the generating function
CT+ A,zS have modulus not less than unity, the coefficients satisfy the square
summability condition C~zollA,J(2 < 00,~ and the vector E, is serially uncorrelated
[Wold (1938)]. The existence of the moving average representation is important to

  4For any square complex matrix C, llC\l denotes the square root of the largest eigenvalue of C’C,
and 1Cl denotes the square root of the determinant of C’C.
1110                                                                                   J. Gmeke

us for two reasons. First, it is equivalent to the existence of the spectral density
matrix S,(X) of z, at almost all frequencies h E [- n,m] [Doob (1953, pp.
499-500)]. Second, it provides a lower bound on the mean square error of
one-step ahead minimum mean square error linear forecasts, which is:

       ]Z’]=exp     &/I        ln]S,(h)ldh)      >O.                                       (3.2)
                           *
The condition ]‘I’]> 0 is equivalent to our assumption that Z is strictly non-
deterministic [Rozanov (1967, p. 72)].
   Whether this lower bound can be realized depends on whether the relation in
(3.1) can be inverted so that L, becomes a linear function of Z,_, and a,,

       z, = :     Bsz,es + E,.                                                             (3.3)
           s=l

A sufficient condition for invertibility is that there exist a constant c 2 1 such that
for almost all h:

                                                                                           (3.4)

[Rozanov (1967, pp. 77-78)], which we henceforth assume.’ This assumption is
nontrivial, because processes like z, = E, + E,_ 1 are excluded. The requirement
(3.4) that the spectral density matrix be bounded uniformly away from zero
almost everywhere in [ - r, a] is more restrictive than (3.2). On the other hand
(3.4) is less restrictive than the assumption that Z is a moving average, autore-
gressive process of finite order with invertible moving average and autoregressive
parts, which is sometimes taken as the point of departure in the study of multiple
time series.
   Suppose now that z, has been partitioned into k x 1 and 1 x 1 subvectors x,
and y,, z; = (XI, y,‘), reflecting an interest in causal relationships between X and
 Y. Adopt a corresponding partition of S,(h):

                    5(h)         %,(V
       sz(x)=
           [
             S,,(A)              S,(A)
                                         1
                                             .

From (3.4) X and Y each possess autoregressive                  representations,     which we
denote:
         M
    1, = C &xl-, + ult, var(u,,) = Z,,                                                     (3.5)
           s=l



  5A@I? indicates that B - A is positive semidetinite;   A @B   indicates that B - .4 is positive
semidefinite and not null.
Ch. 19: Inference   and Causali@                                                 1111


and
              cc

      y, =    C Gls~t-s + q,,                var(q,) = T,,                     (3.6)
             s=l



respectively. The disturbance I+ is the one-step-ahead error when x, is forecast
from its own past alone, and similarly for uir and yt. These disturbance vectors
are each serially uncorrelated, but may be correlated with each other contempora-
neously and at various leads and lags. Since ui, is uncorrelated with all Xt_i,
(3.5) denotes the linear projection of x, on its own past, and likewise (3.6) denotes
the linear projection of yt on past Y-i.
   The linear projection of x, on X,-i and Y-i, and of yI on X,_, and Y_, is
given by (3.3) which we partition:


      x, =    F E2,.qs + EF,,Y,-, +
             s=l                 s=l
                                                    uZry     var(u,,)= z2,     (3.7)


      Y, = ?        G,,Y,-, + c* &xtPs             + u2,,    var(u,,) = T,.    (3.8)
             s=l                 x=1


The disturbance vectors u2, and uzt are each serially uncorrelated, but since each
is uncorrelated with X,_ 1 and Y,_i, they can be correlated with each other only
contemporaneously. We shall find the partition:




useful.
  If the system (3.7)-(3.8) is premultiplied by the matrix


             I,          - CT,-'
      i -C’2,               I,          1’

then in the first k equations of the new system x, is a linear function of Xt_i, Y,
and a disturbance u2, - CT*- ‘u2,. Since the disturbance is uncorrelated with u,, it
is uncorrelated with y, -as well as X,- 1 and Y,_i. Hence, the linear projection of
x, on X,_, and Y,,

              02                   ‘x


      x, =   c E3sxt-s+ 1 &,Y~-~+u~~~
             s=l                 s=O
                                                             var(u3t)=~3,      (3.9)
1112                                                                         J. Geweke

is provided by the first k equations of the new system. Similarly, the existence of
the linear projection of y, on I’_ 1 and X,,


       Y, = E G,,Y,-, + E kx,-,           + 4r9   var(   u,,   > =   T3,       (3.10)
              s=l              s=o


follows from the last I equations.
   We finally consider the linear projections of x, on X,_, and Y, and y, on Y,_t
and X. Let b(h) = S,,,(X)$,(X)-‘,      for all h E [ - T, r] for which the terms are
defined and (3.4) is true. Because of (3.4), the inverse Fourier transform,




of b(h) satisfies the condition ~~zoll D,ll’ < 00. From the spectral representation
of 2 it is evident that w, = x, --cF= _ 3.D, yps is uncorrelated with all y,, and
that

       x, =         f   D,Y,-,+w,                                              (3.11)
              _T=pX

therefore provides          the linear projection of x, on Y. Since S,(h) = S,(X)-
S,,.(h)$.(h))‘~,.,(X)          consists of the first k rows and columns of S3(h))l,
c-1Jk@&(h)@cz~         for almost all A. Hence, w, possesses an autoregressive
representation, which we write:


       w, =    c By-,       + U&.                                              (3.12)
              s=1

Consequently,


                                                                               (3.13)


where B. = - Zk. Grouping terms, (3.13) may be written:


                                                                               (3.14)
              s=l              .r=--co



where Eds = B, and Fbs = c~=“=,B,.D,_,. Since uql is a linear function of W,, it is
uncorrelated with Y; and since X,_, is a linear function of Y and Wrpl, udr is
 Ch. 19: Inference
                 und Cuusulity                                                                                                                         1113

                                                                          Table 3.1
                             A canonical        form for the wide sense stationary                  time series z; = (I;, Jj,‘).
        C.z
xl=     c &,xr-.,            + UI~                                (3.5)       Yr= 2             G,,Y,-,      +“I,                                   (3.6)
       ., = I                                                                        ., = 1


x, =   E      Ez,x,         .> + ,,=,
                                  c        F,,JL, + “21           (3.7)       J’,=    E         Gz,J:-,,+         f         Hz,x,-,+v2,             (3.8)
     .,= I                                                                           .,= I                       \ =I
       cc                        cc
1, = c &,x,-i                 + c F,,Y,-,          + ~3,          (3.9)       Ji=    E G3,J:-,               +    2         H~,x,-,       + ~3,     (3.10)
       \=I                      s=O                                                  5=1                         5= 0
        a,                        m
x, = c        E~,x,-\         +       c      &JL, + “4,           (3.14)      Y!=     ?         G,,Y,-,      +          E      H~,x,-,      + 04,   (3.15)
       3-l                        .,=-CC                                             ., =   I                    ,=-X

                                              var[ u,,] = 2,       cov(u2,.    uz,) = c                     Wv,,l=            T,

                                                                   T=




  uncorrelated with X,_ r. Hence, (3.14) provides the linear projection of x, on X,_ 1
  and all Y, ~~=rII&,I1* < cc and CT= _,llF’,11* < cc. The same argument may be
  used to demonstrate that the linear projection of y, on Y,_, and X,,

             Y, = E G,,Y,-.s +                        f        &xl-s        +t?4,,              var(u,,) = T4,                                       (3.15)
                      s=l                          S=-00


  exists and all coefficients are square summable.

  3.2.         The implications of unidirectional causality6

  If the universe of information at time t is Z,, all predictors are linear, and the
  criterion for the comparison of forecasts is mean square error, then the
  Wiener-Granger definition of causality may be stated in terms of the parameters
  of the canonical form displayed in Table 3.1, whose existence was just demon-
  strated. For example, Y causes X if, and only if, F,, l 0; equivalent statements
  are Z, @z2 and lzl I> 12, I. Since Er @&          in any case, Y does not cause X if
  and only if IZ1 I= )2’, I. Define the measure of linear feedback from Y to X:
             F Y-x-               wJwl~*l).
  The statement “Y does not cause X” is equivalent to F, _ x = 0. Symmetrically,
  X does not cause Y if, and only if, the measure of linear feedback from X to Y,
             F x+-ln(I~l/lT,I)~
  is zero.

       ‘Most     of the material             in this subsection     may be found in Geweke                       (1982a).
1114                                                                                        J. Geweke


  The existence of instantaneous causality between X and Y amounts to non-zero
partial correlation between x, and y, conditional on X,_, U q-1, or equivalently
a non-zero measure of instantaneous linear feedback:

       Fx+-      ln(l&I/I&I).
A concept closely related to the notion of linear feedback is that of linear
dependence. From (3.11), X and Y are linearly independent if and only if D, = 0,
which from (3.14) is equivalent to Fds = 0. Hence, X and Y are linearly indepen-
dent if and only if IZ, I = lZ4 1, which suggests the measure of linear dependence:

       F x.y=    WW/l&l).7
Since instantaneous linear feedback and linear dependence are notions in which
the roles of X and Y are symmetric (unlike linear feedback), F,. ,, and F,, y could
have been expressed in terms of the T,‘s rather than the 7,‘s. The following result
shows that the alternative definitions would be equivalent, and demonstrates
some other relationships among the parameters of the canonical form in Table
3.1.
Theorem

In the canonical form in Table 3.1,
    (i) F,, y =~~~l~~l/l~41~=~~~lT,I/IT,I~.
   (ii) F,_,=     ~~~I~~l/l~zl>=~~~lT31/IT41~.
  (iii) F, _ ,, = ~~~l~~l/i~~l~=~~~lT,I/IT,I~.
   (iv) F,., =~~~l~21/l~31~=~~~lT,I/IT,l~=~~~lT,I~I~~I/l~l~.
Proof

   (i) Since u4, is the disturbance in the autoregressive representation               (3.12) of w,,

       lnlZ,l=       $1: lnl&,,(~)ld~
                          71




                 =   $p n(lnl&(h)l -lnIf$,(h)l)dX.
                 = WWlT,l).                                                                    (3.16)

   ‘In the case k = I = 1, our measure of linear dependence is the same as the meclsure of informarron
per unit time contained in X about Y and vice versa, proposed by Gel’fand and Yaglom (1959). In the
case I=l,     Fx_v+Fx.v=-ln(l-R2*)            and F,,,=-ln(l-R’.(k)),        R2, and R,(k)       being
proposed by Pierce (1979). In the case in which there is no instantaneous   causality, Granger (1963)
proposed that 1 - 18,I / I&I be defined as the “strength of causality Y = X” and 1 - 1T, I/ 1T, 1 be
defined as the “strength of causality X = Y.”
Ch. 19: Inference   und Cuusali~~                                                   1115


Hence.



and by an argument symmetric in X and Y:



   (ii) By construction of (3.9) Z, = ,Z2 - CT*- ‘C’, so 1,X3I . I T2I = I Tl. Combining
this result with )E41 . ( Tl I = [‘I’[ from (3.16), (ii) is obtained.
   (iii) Follows by symmetry with (ii).
   (iv) Follows from IZj I . I T, I = 12’1 and the symmetry of the right-hand side of
that equation in X and Y.
   We have seen that the measures F,., and F,,, preserve the notions of
symmetry inherent in the concepts of instantaneous causality and dependence, in
the case where relations are constrained to be linear and the metric of comparison
is mean square error. Since



linear dependence can be decomposed additively into three kinds of linear
feedback. Absence of a particular causal ordering is equivalent to one of these
three types of feedback being zero. As we shall see in Section 5, the relations in
this theorem provide a basis for tests of null hypotheses which assert the absence
of one or more causal orderings.
   It is a short step from this theorem to Sims’ (1972) result that Y does not cause
X if, and only if, in the linear projection of Y on future, current and past X
coefficients on future X are zero. The statement “Y does not cause X” is
equivalent to Zi = xc, and T3 = T4, which is in turn equivalent to H,, = &. From
our derivation of (3.14) from (3.11), coefficients on X- X, in (3.15) are zero if
and only if the coefficients on X - X, in the projection of yr on X are zero. This
implication provides yet another basis for tests of the null hypothesis that Y does
not cause X.


3.3.    Extensions

The concept of Wiener-Granger causality has recently been discussed in contexts
less restrictive than the one presented here. The assumption that the multiple time
series of interest is stationary and purely non-deterministic can be relaxed,
attention need not be confined to linear relations, and characterizations of
bidirectional causality have been offered. We briefly review the most important
1116                                                                         J. Geweke


developments in each of these areas, providing citations but not proofs.
   The extension to the case in which 2 may be non-stationary and have
deterministic components is relatively straightforward, so long as only linear
relations are of interest. The definition of Wiener-Granger         causality given in
Section 1 remains pertinent with the understanding that only linear predictors are
considered. If Z is non-stationary, then the linear predictors are in general not
time invariant, as was the case in this section. Hosoya (1977) has shown that if Y
does not cause X, then the difference between y, and its projection on X, is
orthogonal to x,+~ ( p 2 1). The latter condition is the one offered by Sims (1972)
under the assumptions of stationary and pure non-determinism, and is the natural
analogue of the condition ln( ( T, I/ (T4() = 0. If Z contains deterministic compo-
nents, then the condition that Y does not cause X implies that these components
are linear functions of the deterministic part of X, plus a residual term which is
uncorrelated with X at all leads and lags [Hosoya (1977)].
   When we widen our attention to include possibly non-linear relations, more
subtle issues arise. Consider again the condition that Y does not cause X.
Corresponding natural extensions of the conditions we developed for the linear,
stationary, purely non-deterministic case are:
   (1) X,+1 is independent of Y, conditional on X, for all t, for the restriction
F,, = 0 in (3.7);
   (2) y, is independent of x,+ r, x,+~, . . . conditional on X, for all t, for the
restriction that the linear projections of y, on X and on X, be identical; and
   (3) y, is independent of x,,,, x,+~ ,... conditional on X, and Y,_, for all t, for
the restriction Hss = Hds in (3.10) and (3.15).
   Chamberlain (1982) has shown that under a weak regularity condition (analo-
gous to c~~“=ol14112   < cc introduced in Section 3.1) conditions (1) and (3) are
equivalent, just as their analogues were in the linear case. However, (1) or (3)
implies (2), but not conversely: the natural extension of Sims’ (1972) result is not
true. Further discussion of these points is provided in Chamberlain’s paper and in
the related work of Florens and Mouchart (1982).
   When causality is unidirectional it is natural to seek to quantify its importance
and provide summary characteristics of the effect of the uncaused on the caused
series. When causality is bidirectional - as is perhaps the rule - these goals become
even more pressing. The measures of linear feedback provide one practical answer
to this question, since they are easy to estimate. Two more elaborate suggestions
have been made, both motivated by problems in the interpretation of macroeco-
nomic aggregate time series.
   Sims (1980) renormalizes the moving average representation (3.1) in recursive
form

       z, = :    A*&*
                  s 1--s’                                                      (3.17)
           s=o
Ch. 19: Inference und Causality                                                  1117

with AZ lower triangular and 2* = var($) diagonal. [The renormalization      can be
computed from (3.1) by exploiting the Choleski decomposition 2 = MM’, with M
lower triangular. Denote L = diag(M). Then LM-‘z, = ~~~“=,LM-‘A,E,_,;
LIT’A,    = LM-’   is lower triangular with units on the main diagonal and
var( LM-‘e,) = LL’.] If we let a12= var(e;) and [A:],, = a:.,, it follows from the
diagonality of Z* that the m-step-ahead forecast error for z,[ is a*(j, m) =
C;=,U,%;:~U,:;.     Th e func t’ton ~,~C~~~,‘a,*,~/a*(j, m) provides a measure of
the relative contribution of the disturbance corresponding to z, in (3.17) to the
m-step-ahead forecast error in z,. This measure is somewhat similar to the
measures of feedback discussed previously; when m = 1 and ,E is diagonal, there
is a simple arithmetic relationship between them. An important advantage of this
decomposition is that for large m it isolates relative contributions to movements
in the variables which are, intuitively, “persistent”. An important disadvantage,
however, is that the measures depend on the ordering of the variables through the
renormalization of (3.1).
   Geweke (1982a) has shown that the measures of feedback F,, x and F,, ,,
may be decomposed by frequency. Subject to some side conditions which as a
practical matter are weak, there exist non-negative bonded functions f,,_ x(h)
and f,,,(h)        such that Fy_ x = (1/2r)/Tnfy+          x(h)dh    and F,, ,, =
(l/2a>~lr,fx+r(X)dX.       The measures of feedback are thus decomposed into
measures of feedback by frequency which correspond intuitively to the “long
run” (low frequencies, small h) and “short run” (high frequencies, large A). In
the case of low frequencies, this relationship has been formalized in terms of the
implications of comparative statics models for time series [Geweke (1982b)].


4.   Causality and exogeneity

The condition that Y not cause X, in the sense defined in Section 1, is very closely
related to the condition that X be strictly exogenous in a stochastic model. The
two are so closely related that tests of the hypothesis that Y does not cause X are
often termed “exogeneity tests” in the literature [Sims (1977), Geweke (1978)].
The strict exogeneity of X is in turn invoked in inference in a wide variety of
situations, for example the use of instrumental variables in the presence of serially
correlated disturbances. The advantage of the strict exogeneity assumption is that
there is often no loss in limiting one’s attention to distributions conditional on
strictly exogenous X, and this limitation usually results in considerable simplifica-
tion of problems of statistical inference. As we shall soon see, however, the
condition that Y not cause X is not equivalent to the strict exogeneity of X. All
that can be said is that if X is strictly exogenous in the complete dynamic
simultaneous equation model, then Y does not cause X, where Y is endogenous in
that model. This means that tests for the absence of a Wiener-Granger causal
1118                                                                                              J. Gew,eke

ordering can be used to refute the strict exogeneity specification in a certain class
of stochastic models, but never to establish it. In addition, there are many
circumstances in which nothing is lost by undertaking statistical inference condi-
tional on a subset of variables which are not strictly exogenous- the best known
being that in which there are predetermined variables in the complete dynamic
simultaneous equation model. Unidirectional causality is therefore neither a
necessary nor a sufficient condition for inference to proceed conditional on a
subset of variables.
   To establish these ideas, specific terminology is required. We begin by adopting
a definition due to Koopmans and Hood (1953, pp. 117-120), as set forth by
Christ (1966, p. 156).8
Dejinition
A strictly exogenous variable in a stochastic model is a variable whose value in
each period is statistically independent of the values of all the random dis-
turbances in the model in all periods.
Examples of strictly exogenous variables are provided in complete, dynamic
simultaneous equation models in which all variables are normally distributed: 9

       B(L)y,+ryL)x,=u,:
       A(L)u,=e,:
       co+,,Y,-,> = 0,             s > 0;

       COV(E,,
            x[_,) = 0.          all s;                                                                    (4.1)

Roots of (B( L)( and (A( L)( have modulus greater than 1.
   This model is similar to Koopmans’ (1950) and those discussed in most
econometrics texts, except that serially correlated disturbances and possibly
infinite lag lengths are allowed. The equation A( L)-‘B( L)y, + A( L)-‘I?( L)x, =
E, corresponds to (3.10) in the canonical form derived in Section 3, and since E, is
uncorrelated with X, it corresponds to (3.15) as well. Hence, Fy+ X = 0: Y does
not cause X. In view of our discussion in Section 2 and the fact that the complete
dynamic simultaneous equation model is usually perceived as a structure which
accepts X as input, this implication is not surprising.
   If Y does not cause X then there exists a complete dynamic simultaneous
equation model with Y endogenous and X strictly exogenous, in the sense that

   ‘We use the term “strictly exogenous” where Christ used “exogenous”        in order   to distinguish     this
concept from weak exogeneity, to be introduced shortly.
   ‘The strong assumption   of normality is made because of the strong condition of independence        in
our definition of strict exogeneity.   As a practical matter, quasi-maximum    likelihood methods are
usually used, and the independence    condition can then be modified to specify absence of correlation,
1122                                                                                             J. Geweke

tions about serial correlation in the latter case should therefore be tested just as
unidirectional causality should be tested when the weak exogeneity specification
rests on strict exogeneity. In both cases, weak exogeneity will still rely on a priori
assumptions; no set of econometric tests will substitute for careful formulation of
the economic model.



5.     Inference”

Since the appearance of Sims’ (1972) seminal paper, causal orderings among
many economic time series have been investigated. The empirical literature has
been surveyed by Pierce (1977) and Pierce and Haugh (1977). Virtually all
empirical studies have been conducted under the assumptions introduced in
Section 3: time series are wide sense stationary, purely non-deterministic with
autoregressive representation, the relevant universe of information at t is Y and
X,, predictors are linear, and the criterion for comparison of forecasts is mean
square error. A wide array of tests has been used. In this section we will describe
and compare those tests which conceivably allow inference in large samples-i.e.
those for which the probability of Type I error can, under suitable conditions, be
approximated arbitrarily well as sample size increases. The development of a
theory of inference is complicated in a non-trivial way by the fact that expression
of all possible relations between wide sense stationary time series requires an
infinite number of parameters, as illustrated in the canonical form derived in
Section 3. This problem is not insurmountable, but considerable progress on the
“parameterization problem” is required before a rigorous and useful theory of
inference for time series is available; as we proceed, we shall take note of the
major lacunae.


5.1.    Alternative tests

Suppose that Y and X are two vector time series which satisfy the assumptions of
Section 3. We find it necessary to make the additional assumption that Y and X
are linear processes [Hannan (1970, p. 209)], which is equivalent to the specifica-
tion that the disturbances u,, and 17/tin Table 3.1 are serially independent, and
not merely serially uncorrelated. Consider the problem of testing the null hy-
pothesis that Y does not cause X. From the Theorem of Section 3, this may be
done by testing (3.5) as a restriction on (3.7) or (3.10) as a restriction on (3.15).
We shall refer to tests based on the first restriction as “Granger tests”, since the
restriction emerges immediately from Granger’s (1969) definition, and to tests

  “Much,   but not all, of the material   in this section is drawn   from Geweke,   Meese and Dent (1983).
Ch. 19: Inference und CuusuliI_v                                                 1123


based on the second restriction as “Sims tests” since that restriction was first
noted, in a slightly different form, by Sims (1972). Suppose it were known a priori
that E,, = E,, =0 for s > p and F2, = 0 for s > q. One could then calculate
ordinary least squares estimates El,, Ezs, and Fzs of the parameters of the
equations:
               P

      x, =   c 4s~s + ~lr’                                                      (5.1)
               P                       4

      x, = c E2s-Gs+               c       F,,Y,-s   +   ~213                   (5 -2)
             s=l                   s=l


and form estimates 2, = C:=,ii,,ri;,/n,  where b/I denotes the vector of ordinary
least squares residuals corresponding to the disturbance vector u,! and n denotes
sample size. From the usual central limit theorems for autoregressions [e.g. Theil
(1970, pp. 411-413)] the asymptotic distribution of the test statistic:

      TGW=n(tr(&e;l)-k),
       n                                                                        (5.3)

under the null hypothesis is x*(k/q). The superscript “G” in (5.3) denotes the
Granger test, while W refers to the fact that this is the Wald (1943) variant of that
test. The Lagrange multiplier,

      T,C’L = n(k-tr(e&l)),
                                                                                (5.4)

and likelihood ratio,

         = ~ln<l%l/l~,l>,
       CGR                                                                      (5.5)

variants of this test statistic will have the same asymptotic distribution under the
null hypothesis. (See Chapter 13 of this Handbook.)
   There is in fact rarely any reason to suppose that lag lengths in autoregressions
are finite, or more generally to suppose that any particular parameterization (e.g.
the autoregressive-moving average) is completely adequate. Our problem cannot
be cast into the assumptions of the classical theory of inference which assume that
coefficients can be made to depend in a known way on a finite number of
unknown parameters. It is more similar to the one encountered in non-parametric
inference about spectra (Chapter 17 of this Handbook), which can be resolved by
estimating more autocovariances or using narrower spectral windows as sample
size increases. In this procedure the number of parameters implicitly estimated
increases, but decreases relative to sample size, as sample size increases. A similar
strategy may be used in estimating autoregressions like those in Table 3.1. For
1124                                                                        J. Geweke

example, p and q in (5.1) and (5.2) can be made functions of n such that
p(n) + 00 and q(n) -+ 00 as n + co, but p(n)/n --, 0 and q(n)/n - 0. Since the
coefficients in Table 3.1 are all square summable the equations there can all be
approximated arbitrarily well in mean square by autoregressions of finite order.
Therefore there exist rates of increase p(n) and q(n) such that consistent
estimates of all coefficients in (3.5) and (3.7) can be obtained by estimating (5.1)
and (5.2) by ordinary least squares. l1 Sufficient conditions on lag length for
consistency have yet to be derived, however. A more pressing, unresolved problem
is whether there exist rates of increase such that the limiting distributions of
(5.3)-(5.5) under the null are x*(klq). In what follows, we shall assume that such
rates of increase do exist, an assumption which is uncomfortable but which does
not appear to be contradicted by sampling experiments which have been con-
ducted. More bothersome is the practical problem of choosing the number of
parameters to estimate in a given circumstance, to which we shall return in the
next section.
   We may test (3.10) as a restriction on (3.15) by estimating the equations,


                                                                               (5.6)
          SE1               s=O

and


          S=l              s =



by ordinary least squares, p, q, and r being allowed to increase with n. For
suitable rates of increase:

                                                                               (5 4
                                                                               (5.9)
and
                                                                              (5.10)

are all distributed as x2(/&-) in large samples under the null hypothesis. In finite
sample, there is no numerical relation between the Granger test conducted using
(5.1) and (5.2) and the Sims test conducted using (5.6) and (5.7); the null may well
be rejected using one test but not the other.
   Other tests about Wiener-Granger causal orderings, instantaneous causality,
and combinations of the two may be undertaken in rather obvious fashion using
the canonical form of Section 3 and truncating lag lengths. For example, a test of

  “For an elaboration,see Section6.1 of this chapter.
Ch. 19: Inference and Causalily                                                      1125


the hypothesis of no instantaneous causality can be based on ordinary               least
squares residuals from (5.2) and those from:


      X,    =        i          E3s~r-s       +       5         %Y,-,   +   u3r.   (5.11)
                    s=l                           s=o

If p = q the Wald, likelihood ratio and Lagrange multiplier test statistics will be
identical to those which would have been obtained using the ordinary least
squares residuals from:


      Y, = 5                    G,Y,-s + :                      &XI-,   + i)zf,    (5.12)
                    s=l                           s=l

and those from (5.4). A test of the hypothesis that Y does not cause X and there is
no instantaneous causality could be based on a comparison of (5.1) and (5.11) or
(5.12) and (5.7). The measures of feedback F,, y, Fy_+ x, ,Fx.,,, and F,,,
introduced in Section 3 can be estimated consistently using the 2, and T,.
   Most of the empirical studies reported in the literature do not use any of these
tests. Instead, they follow Sims (1972) who based inference directly on the
projection of yI on X,,


      y,=            E &Gs+W                              IIT                      (5.13)
                    s=o
and yI on X,


      Y, =                c         Dzsxl-,           +    ~2,.                    (5.14)

As we saw in Section 3, under the null hypothesis that Y does not cause X the
two projections are the same. We also saw that the disturbance terms in (5.13)
and (5.14) will be serially correlated. In particular, the disturbance term in (5.14)
has autoregressive representation,
                          CC
      ~2,       =         c      G4,9-.s          +       v4r5
                         s =l


and under the null hypothesis the disturbance in (5.13) will of course have the
same autoregressive representation. These tests can cope with the infinite length
of lag distributions in the way just described, replacing (5.13) and (5.14) with:


      yr =          2 D,s~r-s+                    Wlr                              (5.15)
                    s=o
1126                                                                        J. Gmeke

and

                                                                              (5.16)
           S=--T

respectively, but they also have to deal with serial correlation in wir and w,,. In
earlier studies [e.g. Sims (1972) Barth and Benet (1974)], this was often done by
asserting a particular pattern of serial correlation in the disturbances, but in more
recent work [e.g. Sims (1974), Neftci (1978)] a consistent estimate of the unknown
pattern of serial correlation has been used in lieu of the actual pattern.
   In general, corrections for serial correlation proceed as follows. Let it be
assumed that 52: = var( wi) = $,(cr,) and 0, = var( w2) = ai(             where w, =
(w,\,..., w,‘,)‘. The functions    a:( .) and Q:(q)   are known,  but  a, and a1 are
unknown si x 1 and s2 X 1 vectors, respectively. [There is no presumption that
s2f,= Oi, 32:( .) = 52:( .), or al = a*.]Let (i>;, &;)‘denote the vector of maximum
likelihood estimates of the kl(q + l)+ s1 unknown parameters in (5.15) and let
(i>;, &;)’ denote the vector of maximum likelihood estimates of the kl( q + r + 1)
 + s2 unknown parameters in (5.16). Let tii be the vector of residuals correspond-
ing to i>,, and let $ be the vector of residuals corresponding to i>,. Define also
the estimator b:, of the Dls, which is the maximum likelihood estimator of the
D,, assuming a!, = fii(S,),       and the estimator & of the D,,s, which is the
maximum likelihood estimator of the D,, assuming J$ = a!,(&,). Let +; denote
the vector of residuals corresponding to the b;“, and let C$ denote the vector of
residuals corresponding to the b,*,. Then Wald and Lagrange multiplier test
statistics are
       T’sw’ = iy(Lq(ii2))pJ~ - ti;(L?,2(h2))-1i&                             (5.17)
        n
and
       7-‘s” = ;ll;(ag(&,))P’;Y,-   ;u:‘(a;(C%i))P*&&                         (5.18)
        n

respectively. Under the null hypothesis, the limiting distribution of each of these
statistics is XL(&). Since si and s2 are not known to be finite, their values must
be increased as n increases as is the case with q and r.
   There are several methods for parameterizing the variance matrix Q,,
of a wide sense stationary disturbance. The Hannan efficient method
[Hannan (1963)] exploits the approximation Q,, A F,S,,F,’ due to Grenander
and Szego (1954) where F, is the Fourier matrix with typical ((j, k)th) element
exp(2rij(k     - 1)/n)/&   and S, is a diagonal matrix whose jth diagonal element
is the spectral density of the disturbance evaluated at the frequency 27r( j - 1)/n.
In practice, a consistent estimate of the spectral density is constructed in the
conventional way from ordinary least squares residuals [those from (5.15) for the
Lagrange multiplier variant and those from (5.16) for the Wald variant]. In
Ch. 19: Inference and Causali(v                                                    1127

Amemiya’s procedure [Amemiya (1973)] the autoregressive representation of the
disturbance is approximated by an autoregressive process of finite order, say
H’ = C?:;/4,+s      + E,, which is estimated from ordinary least square residuals.
The equations (5.15) and (5.16) are then premultiplied by (1 -c?L,‘A;L’)       before
estimation by ordinary least squares. A conventional, Wald “F” Test statistic for
the restriction (5.15) on (5.16) is then asymptotically equivalent to (5.17). Strictly
speaking, Wald and Lagrange multiplier variants of neither procedure lead to
(5.17) or (5.18), because maximum likelihood estimates of the 52: are not
computed. However, the procedures amount to the first step of iterative maximum
likelihood procedures along the lines suggested by Oberhoffer and Kmenta
(1974), and asymptotically the first step is equivalent to the full, maximum
likelihood procedure.
   Although tests based on (5.13) and (5.14) have been the most popular in the
empirical literature, it is evident that they demand more computation than the
other tests. Other methods, requiring even more computation, have been sug-
gested and occasionally used. Pierce and I-Laugh (1977) propose that autoregres-
sive moving average models for X and the ordinary least squares residuals of
(5.15) be constructed, and the test of Haugh (1976) for their independence be
applied. Under the null hypothesis X and the disturbances of (5.13) are indepen-
dent, and Haugh’s test statistic has a limiting X2(/&) distribution. Pierce (1977)
has proposed a method involving the construction of autoregressive moving
average models for X and Y and a modification of Haugh’s statistic, but this
method does not lead to test statistics whose asymptotic distribution under the
null hypothesis is known [Sims (1977b)].


5.2.   Comparison of tests

All the test statistics just discussed have the same limiting distribution under the
null hypothesis. The adequacy of the limiting distribution in finite samples need
not be the same for all the statistics, however, and thus far nothing has been said
about their relative power. Sampling experiments can be used to address the first
question, but without some sort of paradigm these experiments cannot be used to
investigate the question of relative power. A convenient paradigm is the criterion
of approximate slope, introduced by Bahadur (1960) and discussed in its applica-
tion to time series by Geweke (1981).
   Suppose that test i rejects the null in favor of the alternative in a sample of size
n if the statistic T,i exceeds a critical value. Suppose further, as is the case here,
that the limiting distribution of T,’ under the null is chi-square. The approximate
slope of test i is then the almost sure limit of T,‘/n, which we shall denote T’(B).
The set B consists of all unknown parameters of the population distribution,
perhaps countably infinite in number, and the approximate slope in general
1128                                                                             J. Geweke

depends on the values of the elements of 8. For all 8 which satisfy the null
hypothesis T’(e) = 0, and for most test statistics (all of ours), r’(0) > 0 for all
other 8. The approximate slopes of different tests are related to their comparative
behavior under the alternative in the following way [Geweke (1981)]. Let
n’(t *, /3; e) denote the minimum number of observations required to insure that
the probability that the test statistic T,’ exceeds a specified critical point t* is at
least l- /3. Then lim,, _03 n’(t*, p; e)/n’(t*, p; 0) = T*(e)/T’(e):        the ratio of
the number of observations required to reject the alternative as t* is increased
without bound (or equivalently, the asymptotic significance level of the test is
reduced toward zero) is inversely proportional to the ratio of their approximate
slopes. Similarly, if t’( n, /3; B) indicates the largest non-rejection region (equiva-
lently, smallest significance level) possible in a sample of size n if power 1 - /3 is
to be maintained against alternative 8, then lim, _ m t’( n, p; e)/t*( n, p; a) =
T’(e)/T*(e).
   The criterion of approximate slope is a useful paradigm because it suggests that
when the null is false and the number of observations is large, we might observe
that tests with greater approximate slopes reject the null more often than tests
with smaller approximate slopes, and those with the same approximate slopes
reject the null with the same frequency. Differences in approximate slopes may be
a factor in test choice if the number of observations required is not so large that
the asymptotic significance levels involved are minute. Approximate slope is not a
normative concept. For example. the statistic for the test with the larger ap-
proximate slope might exhibit slower convergence to the limiting distribution
under the null than the statistic for the test with the smaller approximate slope.
Indeed, if exact distributions under the null became known, it might turn out that
if the critical points for the two tests were modified appropriately then the test
with larger approximate slope would require more observations to assure given
power against a given alternative than would the test with smaller approximate
slope.
   It is fairly straightforward to derive the approximate slopes of the alternative
tests of the hypothesis that Y does not cause X. From (5.3)-(5.5) the approximate
slopes of the tests based on the limiting distribution of TnGw,TnGL,and TnGRare:

       TGW= tr(Z,Z;‘)--k,              TGL = k - tr( Z22;i)

       and     TGR = ln(lZ,(/JZ,I),


respectively. Likewise the approximate slopes of the Sims tests not involving serial
correlation corrections are:

       Tsw = tr( T,Tdp’)- I,          TsL = I-   tr( T4Tq1)   and   TSR=ln(~T,~/~T,~).
1130                                                                                              J. Geweke

                                            Table 5.1”
                                 Design of a sampling experiment
            Model A:               .p, =l.o+         1.5_v,_*-0.5625.~_~ +0X5-~_,        + 04r
                                  x,   =1.0+0.8.x,         , + u2,
                                 04, - NO, I);     U2, - N(O,l)
            Model B:              y, =1.0+0.258.~,_~ +0.172.~,_~ -0.086.x,               3 + W,
                                  w,=L5w,_, -0.5625~,_~ + c4,
                                  ~,=l.O+O.Ex,_~+wp,
                                  L’4, -   N(O,      1);    U2,   -   N(O.1)
                                           Approximate slopes
                                             Model A                           Model B
            TGL = TsL                             0.0985                        0.0989
            TGR = TSR                             0.1037                        0.1041
            T”w = Tsw                             0.1093                        0.1098
            T’sw’                                 0.1240                        0.1125
            T’SL’                                 0.1103                        0.0954
            TcSL)(pretiltered)                    0.0711                        0.1016

              ‘Source: Geweke, Meese and Dent (1983. table 4.1).



but (5.7) and (5.16) are never exact. In all instances in which parameterizations
are inexact, however, the contributions of the omitted variables to variance in the
dependent variable is very small.
   The outcome of the sampling experiment is presented in Table 5.2, for tests
that Y does not cause X, and in Table 5.3, for tests that X does not cause Y. The
sampling distribution of the test statistics for Sims tests requiring a serial
correlation correction is very unsatisfactory when the null is true. If no prefilter is
applied, rejection frequencies range from 1.5 to 6.4 times their asymptotic values.
When the prefilter (l -0.75L)’      is used, the sampling distribution of these test
statistics is about as good as that of the others. In the present case this prefilter
removes all serial correlation in the disturbances of the regression equation (5.13).
With actual data one cannot be sure of doing this, and the sensitivity of these test
results to prefiltering, combined with the greater computational burden which
they impose, argues against their use. By contrast, the sampling distribution of the
Granger and Sims test which use lagged dependent variables appears much closer
to the limiting distribution. Overall, Wald variants reject somewhat too often and
Lagrange variants somewhat too infrequently, but departures from limiting
frequencies are not often significant (given that only 100 replications of data were
generated).
   The rejection frequencies when the null is false, presented in Table 5.3, accord
very well with what one would expect given the approximate slopes in Table 5.1
and the rejection frequencies anticipated in the design of the experiment. Rejec-
tion frequencies for TGW and Tsw are about the same; those for TGL and TsL
are each lower but similar to each other. Rejection frequencies are greatest for the
Sims tests requiring a serial correlation correction, but their distribution under the
Ch. 19: Inference    and Causali!v                                                                                 1131

                                                          Table 5.2”
                                           Outcome      of sampling experiment

                                Number         of rejectionsb    in 100 replications   when null is true
                        Parameterization                        Model A                        Model   B
             Test’       p       q         r         5% level         10% level        5% level        10% level
       pw
                         4       4                       7                14               7               16
                         8       4                       5                19              11               19
                        12       4                       9                16              11               22
                        12      12                       8                11              22               36
       T”L
                         4       4                       4                11               4                7
                         8       4                       3                11               5               10
                        12       4                       5                13               4                9
                        12      12                       0                 2               1                2
       p’
                         4       4          4            6                10               3                7
                         4       8          4            7                13               4                6
                         4      12          4            9                13               3                8
                         4      12         12            6                 8               3                5
       TSL               4       4          4            4                 9               1                3
                         4       8          4            3                11               1                4
                         4      12          4            4                12               3                4
                         4      12         12            0                 6               1                3
       Ttsw'( F)                 4          4            6                15              12               14
                                 8          4            7                12              12               21
                                12          4            8                17              15               24
                                12         12            9                15              26               35
       T’sw’(U)                  4          4           26                33              32               38
                                 8          4           24                32              32               41
                                12          4           21                28              31               38
                                12         12           26                31              30               34
       TcsL’( F)                 4          4            2                 8               4                6
                                 8          4            5                 I               3                9
                                12          4            4                 9               4               12
                                12         12            2                 4               2                5
       TcsL’( L’)                4          4           23                30              18               26
                                 8          4           20                26               9               21
                                12          4           18                27               8               13
                                12         12            9                17               8               15

         ?Source: Geweke, Meese and Dent (1983, table 5.2).
         ‘The appropriate     F, rather than cm-square, distribution    was used.
         ‘For tests requiring correction    for serial correlation,  the Hannan efficient method of
      estimation   was used. The spectral density of the disturbances        was estimated using an
      inverted “V” spectral window with a base of 19 ordinates, applied to the 100 residual
      periodogram    ordinates. For those tests with the suffix (F), data were initially prefiltered
      by (1-0.75i)*,     which Raitens the spectral density of the disturbance    We,. For those with
      (U), no prefilter was applied.
1132                                                                                           J. Geweke

                                             Table 5.3”
                                   Outcome of sampling experiment
                            Number of rejections in 100 rephcationsb when null is false
                     Parameterization              Model A                      Model B
             Test’   p       q      r      5% level      10% level      5% level      10% level

                      4      4                59             76            69             19
                      8      4                63             71            64             13
                     12      4                61             70            64             76
                     12     12                36             50            39             59
       T”L                                                                                14
                      4      4                55             67            59
                      8      4                54             68            58             70
                     12      4                55             69            58             70
                     12     12                15             24             8             24
       TSW            4      4       4        60             70            71             19
                      4      8       4        64             16            73             71
                      4     12       4        58             68            71             16
                      4     12      12        41             56            49             61
       TSL            4      4       4        51             65            63             14
                      4      8       4        49             64            65             75
                      4     12       4        50             64            65             72
                      4     12      12        32             37            25             44
       Tcsw'(F)              4       4        90             96            87             93
                             8       4        88             94            87             91
                            12       4        85             94            85             90
                            12      12        81             86            62             79
       TtsL’( F)             4       4        82             92            78             88
                             8       4        78             89            78             89
                            12       4        71             86            14             84
                            12      12        32             52            17             33

          “Source: Geweke, Meese and Dent (1983, table 5.4).
          hThe appropriate F, rather than &-square, distribution was used.
          ‘For tests requiring correction for serial correlation, the Hannan ei?icient method of
       estimation was used. The spectral density of the disturbances was estimated using an
       inverted “V”    spectral window with a base of 19 ordinates, applied to the 100 residual
       periodogram ordinates. For those tests with the suffix (F), data were initially prefiltered
       by (I -O.l5L)“, which flattens the spectral density of the disturbance y,.



null is less reliable; in view of the results in Table 5.2, rejection frequencies for
those tests which use unfiltered data have not been presented in Table 5.3.
   These results are corroborated in the rest of the Geweke, Meese and Dent
study, as well as in Guilkey and Salemi, and Nelson and Schwert. Guilkey and
Salemi have, in addition, studied the case in which the chosen parameterization
omits important contributions of the explanatory variables; as one would expect,
this biases tests of the null toward rejection and diminishes power under the
alternative. The consensus is that inference can be undertaken with greatest
reliability and computational ease employing either (5.1) as a restriction on (5.2)
or (5.15) as a restriction on (5.16) and using either the Lagrange or Wald variant
1134                                                                                         .I. Geh,eke

must exist an upper bound on the rate of expansion of p and q with n such that if
p and q increase without limit as n grows but satisfy the upper bound constraint
on rate, estimatesof v%(x,x,_i ,..., x,_p) and var(x,]x,_i ,..., x,_p; y,_i ,..., y,_,)
will be strongly consistent for 2, and z2, respectively.14 The problem of prescrib-
ing which values of p and q should be used in a particular situation is, of course,
more difficult.
   In our discussion of test performance under the null, it was necessary to make
the much stronger assumption that the dimension of the parameter space can be
expanded with n in such a way that the distributions of the test statistics
approach those which would obtain were the true parameterization finite and
known. In the context of our example of the Wald variant of the Granger test of
the hypothesis that Y does not cause X, this is equivalent to saying that p and q
grow with n slowly enough that strongly consistent estimates of 2, and z2 are
achieved, but rapidly enough that their squared bias becomes negligible relative to
their variance. It is not intuitively clear that such rates of expansion must exist,
and there has been little work on this problem. Sampling study results suggest
that as a practical matter this problem need not be overwhelming; witness the
behavior of the Granger tests and the Sims tests incorporating lagged dependent
variables, under the null hypothesis. On the other hand, the poor performance of
the Sims tests involving a correction for serial correlation, under the null
hypothesis, may be due in large measure to this difficulty.
   A variety of operational solutions of the problem, “how to choose lag length”,
has appeared in the literature. Most of these solutions [Akaike (1974) Amemiya
(1980) Mallows (1973) Parzen (1977)] emerge from the objective of choosing lag
length to minimize the mean square error of prediction. For example, Parzen
suggests that in a multivariate autoregression for Z, that lag length which
minimizes the values of



       trace                                                                                     (6.1)

be chosen, where m is the number of variables in Z, p is lag length, and
1, = c:=, .G,.$/(n - jm), where 2, is the vector of ordinary least squares residuals
in the linear regression of z, on z,_ i, . . . , z,_,. Choice of p in the other solutions is
based on the minimization of different functions, but the value of p chosen will

   t4Upper bounds of this type have been derived by Robinson (1978) for a problem which is formally
similar, that of estimating the coefficients in the population linear projection of Y on X consistently
by ordinary least squares. The bounds require that lag lengths be O(~I(“~~)/“). where v is a constant
between 0 and - l/2 which depends on higher moments of A’. and that the rates of increase in the
number of past and number of future X not be too disparate.
Ch. I!?: Inferenceand Causalr[,                                                            1135

usually be the same [Geweke and Meese (1981)]. On the other hand, Schwarz
(1978) has shown that for a wide variety of priors which place positive prior
probability on all finite lag lengths (but none on infinite lag length), the posterior
estimate of lag length in large samples will be that which minimizes the value of

       1n]3P] + m2pln(n)/n,                                                               (6.2)

when Z is Gaussian. Lag lengths chosen using (6.2) will generally be shorter than
those chosen using (6.1). These solutions to the problem of choosing lag length
are in many respects convenient, but it must be emphasized that they were not
designed as the first step in a regression strategy for estimating coefficients in an
autoregression whose length may be infinite. Neither analytic work nor sampling
studies have addressed the properties of inference conditional on lag length
chosen by either method, although the first one has been used in empirical work
[Hsiao (1979a, 1979b)].


6.2.     Non - autoregressive processes

A time series may be wide sense stationary and purely non-deterministic, and fail
to have autoregressive representation because one or more of the roots of the
Laurent expansion of its moving average representation lie on the unit circle. A
non-autoregressive process does not possess an optimal linear, one step ahead
predictor with coefficients which converge in mean square. The representations
derived in Section 3 fail to exist for such a series, and if one attempts inference
about Wiener-Granger causality using non-autoregressive processes, then mis-
leading results are likely to emerge. A simple example provides some indication of
what can go wrong.
   Consider first two time series with joint moving average representation

       x, = E, + PPi,             Y, = E,-1   +   71,,                                    (6.3)
where (E,, 77,)’ is the bivariate innovation for the (x,, y,)’ process, Jp] < 1,
E( et) = E( nr) = cov( E,, nl) = 0 and var( et) = var( n,) = 1. In the population,
var(x,lx,_, ,..., x,_k)=l+pp2-m;M;‘m,,         where

                                         1+ p2                   P
                P’
                                              P                1+p2   *           -o-
                0
                                                                          . .
       mk =      .   3      Mk =
       kxl
                0          kxh                                            1+p2   *p
                0,
                                                         -o-               P     1 + p=
1136                                                                                                      J. Geweke

Using a result of Nerlove, Grether and Carvalho (1979, p. 419) for the exact
inverse of a tridiagonal matrix, the entry in the first row and column of A4~t is
(1 - IJ~~)/(~ - p2ck+‘)), from which

       var(X,Ix,P1,...,~,_k)=(1-p2(k+2)                     )/(l-   p2(k+t)).15

Suppose that k lagged values of y, are also used to predict x,. In the population,




where

                             0                   -o-

                              P

                              .         -.             ‘0     .
                                    .        *
                                                 P
                      -o-
                                                 1     P_


The element in the first row and column of

                      -’
       I 1
        Mk      B,
         Bl    21,

is the same as that in the first row and column of the inverse of:16

                             1 + .5p2                asp                                             -o-
                                  asp            0.5(1+p’)          .
       Mk - OSB,     B;. =
                                  -o-                                       0.5(1+      p2)         0.5p
                                                                                 0.5p          0.5(1+       p’)




  15For an alternative derivation see Whittle (1983, p. 75)
  lhWe use the standard result [e.g. Theil (1971, pp. 17-19)]           on the inverse of a partitioned     matrix.
Ch. 19: Inference und Cuusuliry                                                            1137

Partitioning out the first row and column of this matrix, the desired element is
(l+OSp* -O.Sm;_,M;~,m,_,)-‘.        Hence:

      var(x,Jx,_i            ,..., x,_,+; ytpl,...,   Y,Fk)
                 =1+p2-~*(1+0.5p~-O.5m~_,~~~,m,_,)~’
                 =1+p*-(p~(1-p*~))/(l-0.5p2~-0.5p2(k+1))
                 = (1-0.5p2k         -o.5p*(k+*))/(1       -o.5p*k -o.5p*‘k+“).           (6.4)

   Clearly k must grow with n, or else the hypothesis that Y does not cause
X-which is true-will be rejected in large samples. If k grows at a rate such that
the asymptotic results of Wald (1943) on the distribution of test statistics under
the alternative are valid, then in large samples the Wald variant of the Granger
test will have a limiting non-central chi square distribution with non-centrality
parameter:



                                                                          1
           (I-     p*(k+*)) . (1 -o.5p*k -o.5p*‘k+“)
           (l-     P2(k+l)) (1-o.5p*k-0.5p*(k+*))                    -l       n

                             o.5p*(k+‘)(1- p2)(1-         p*+
                 = (I-        P*‘k+1))(1_o.5p2k       _o.5p*(k+*))        ’


So long as k/in(n)     increases without bound, the non-centrality parameter will
vanish asymptotically-a      necessary and sufficient condition for the test statistic
to have a valid asymptotic distribution under the null, given our assumptions. In
particular, this will occur if k = [na], 0 < (Y< 0.5.
   Suppose now that p =l in (6.3): the process (x,, y,) is then stationary but has
no autoregressive representation. Nerlove, Grether and Carvalho’s result does not
apply when p = 1; let ck denote the element in the first row and column of ML ‘.
Partitioning out the first row and column of Mk:

      Ck    =    (2-m;_,M,‘,m,_,)-1 = (2- ck-l)-1.
By mathematical induction ck = k/( k + 1). Hence:

      var(x,lx,_i,...,             x,_,)=2-m~M~‘m,=2-c~~,=(k+2)/(k+1).

Substituting in (6.4):

      v?Lr(x,lx,_l ,..., x,-k, Y,-I,...,              y,_k) = (2k +2)/(X          + 1).
1138                                                                                J. Geweke


The non-centrality parameter of the limiting distribution of the Wald variant of
the Granger test in this case is:


        (k+2)
        ___.
       [ (k+l)
                  (2k+l)
                  2@+1)
                             -1



                                  1
                                  n=       kn
                                       2(k t-1)“.

The non-centrality parameter will increase without bound unless lim, j ~ (n /k )
= 0, a condition which cannot be met.
   It therefore appears plausible that when ]p] < 1, Granger tests may be asymp-
totically unbiased if the number of parameters estimated increases suitably with
sample size; in particular, k = n”, 0 < (Y-C0.5 may be a suitable rule. It appears
equally implausible that such rules are likely to exist when 1p 1= 1; in particular,
Granger tests are likely to be biased against the null. This result is not peculiar to
the Granger test: S,(m) = 0 causes equally troublesome problems in Sims tests of
the hypothesis of absence of Wiener-Granger causality from Y to X.


6.3.    Deterministic processes

 From Weld’s decomposition theorem [Wold (1938)] we know that a stationary
 time series may contain deterministic components. Although the definition of
 Wiener-Granger causality can be extended to encompass processes which are not
 purely non-deterministic, inference about directions of causality for such series is
 apt to be treacherous unless the deterministic process is known up to a finite
 number of unknown parameters. The difficulty is that to the extent the two series
 in question are mutually influenced by the same deterministic components, the
 influence may be perceived as causal. A simple example will illustrate this point.
    Let x, = xl, + x2,, y, = _J+!+ yzr, xrr = y,, = cos(mt/2), and suppose xzr and
yz, are independent white noises with zero means and unit variances. The
 bivariate process (x,, v,)’ may be interpreted as quarterly white noise con-
 taminated by deterministic seasonal influence. Following Hosoya (1977) X does
 not cause Y and Y does not cause X because xl, = yrr is in the Hilbert space
 generated by either X,_, or U,_,. It is clear from the symmetry of the situation,
 however, that given only finite subsets of X,_, and Y-t, the subsets taken
 together will permit a better separation of the deterministic and non-deterministic
 components of the series than either alone, and hence a better prediction of x,
 and y,, For instance, the linear projection of x, on (x,-t,...,         x,_~~) is ~.~=t(~~_~,
 - ~,+~-~,)/(2(k +I)), vWx,l.qI,...,          x,_~) = (2k + 3)/(2k + 2). The lmear pro-
jection of x, on 4k lagged values of x, and y, is C~=,(X,_~, + JJ_~, - x,+~_~, -
j;+2-#J(k       + 1) var(x,]&,,     . . . >X,-z,k; y,-,, . . . , Y(-z$k) = (4k + W(4k + 2).
 Following the argument used in the example for non-autoregressive processes, if
Ch. 19: Inference und Causuliiy                                                                             1139

the limiting distribution of the Wald variant of the Granger tests is (possibly
non-central) chi square, the non-centrality parameter is 2kn/(2k + 2)(4k + 3).
This parameter could vanish only if the number of parameters estimated in-
creased faster than the number of observations, which is impossible.
   This result is consistent with the intuition that tests for the absence of
Wiener-Granger causality are apt to be biased against the null when determinis-
tic components are involved. It is equally clear from the example that if the
determinism can be reduced to dependence on a few unknown parameters-here,
the coefficients on perhaps four seasonal dummies-then    the results of Sections 3
and 5 apply to the processes conditional on deterministic influences.




6.4.    Non-stationary processes

Although in principle non-stationarity can take on many forms, most non-
stationarity which we suspect” in economic time series is of certain specific types.
If the non-stationarity arises from deterministic influences on mean or variance
and their functional forms are known, the methods of Section 5 can be modified
directly to accommodate these influences. For example, trend terms may be
incorporated in estimated equations to allow for conditional means which change
with time, and means and variances which increase with time may in some cases
be eliminated by the logarithmic transformation and incorporation of a linear
trend.
   Non-stationarity need not be deterministic, and in fact many economic time
series appear to be well described as processes with autoregressive representations
which have Laurent expansions with one or more roots on the unit circle.lx The
asymptotic distribution theory for the estimates of autoregressions of stationary
series does not apply directly in such cases. For example, in the case of the
first-order autoregression x, = px,_i + E,, ]p] 11, the least squares estimator of p
has a limiting distribution that is non-normal if E, is non-normal [Rao (1961)] and
a variance that is 0(1/n). If ]p] =l, the limiting distribution of the least squares
estimator is not symmetric about p even when the distribution of E, is normal
[Anderson (1959)] and the variance of the limiting distribution is again 0(1/n).
The limiting distributions in these cases reflect the fact that information about the


   “One can never demonstrate      non-stationarity       with a finite sample: e.g. apparent       trends can be
ascribed to powerful, low frequency components          in a purely non-deterministic,    stationary series. As a
practical matter, however, inference with only asymptotic justification         is apt to be misleading in such
cases.
   ‘“Witness the popularity of the autoregressive       integrated moving average models proposed by Box
and Jenkins (1970) in which autoregressive          representations    often incorporate     factors of the form
(1 - L), or (1 - L’) when there are s observations        per year,
1140                                                                         J. Geweke

unstable or explosive roots of these processes is accumulated at a more rapid rate
than is information about the roots of stationary processes, since the variance of
the regressors grows in the former case but remains constant in the latter. This
intuition is reinforced by a useful result of Fuller (1976) who considers an
autoregression of finite order, Y, = c,“=,c,Y1_, + E, with one root of csP_tc,L’
equal to unity and all others outside the unit circle. In the transformed equation
YI= etY,-r +CP=*ei( YI+i_; - v,_~)+ E, the ordinary least squares estimates of
0,). . . , $, have the same limiting distribution as they would if all roots of the
expansion were outside the unit circle, and the ordinary least squares estimate of
8, has the same limiting distribution as in the first order autoregressive equation
with unit root. Hence, in the original equation inference about c2,. . . , cp (but not
cr) may proceed in the usual way.
   Whether or not Fuller’s result can be extended to multiple roots and vector
processes is an important problem for future research. If this extension is
possible, then the methods of Section 5 involving the estimation of vector
autoregressions can be applied directly to processes which are non-stationary
because of roots on the unit circle in the expansions of their autoregressive
representations. For example, if the process Z has autoregressive representation
[(l- L)@Z,,,]A(L)z, = E, with all roots of IA(L)] outside the unit circle, tests of
unidirectional causality between subsets of Z can proceed as in the stationary
case. An attraction of this procedure is its conservatism: it allows non-stationar-
ity, rather than requires it as is the case if one works with first differences.


6.5.   Multivariate methods

While our discussion has been cast in terms of Wiener-Granger causal orderings
between vector time series, in most empirical work causal relations between
univariate time series are considered. In many instances relations between vector
series would be more realistic and interesting than those between univariate series.
The chief impediment to the study of such relations is undoubtedly the number of
parameters required to describe them, which in the case of the vector autoregres-
sive parameterization increases as the square of the number of series, whereas
available degrees of freedom increases linearly. The orders of magnitude are
similar for other parameterizations. Practical methods for the study of vector time
series are only beginning to be developed, and the outstanding questions are
numerous. All that will be done here is to mention those which seem most
important for inference about causal orderings.
   The first question is whether or not inference about causal orderings is
adversely affected by the size of the system, in the sense that for vector time series
the power of tests is substantially less than for univariate series. Any answer to
Ch. 19: Inference and Causality                                                     1141

this question is a generalization about relationships among observed economic
time series; confidence intervals for measures of feedback constructed by Geweke
(1982a) suggest that for samples consisting of 60-80 quarterly observations and
lags of length six feedback must be roughly twice as great for a pair of bivariate
series as for a pair of univariate series if unidirectional causality is to be rejected.
The large number of parameters required for pairs of vector time series thus
appears potentially important in the assessment of feedback and tests of unidirec-
tional causal orderings.
    Two kinds of approaches to the large parameter problem are being taken. The
first is to reduce the number of parameters, appealing to “principles of parsimony”
 and using exact restrictions. For example, the autoregressive representation may
be parameterized as a mixed moving average autoregression of finite order, with
 the form of the moving average and autoregressive components specified by
 inspection of various diagnostic statistics [e.g. Wallis, (1978)]. This is the exten-
 sion to vector time series of the methods of Box and Jenkins (1970). There are two
 serious complications which emerge when going from univariate to multivariate
 series: estimation, in particular by exact maximum likelihood methods, is difficult
 [Osborn (1977)]; and the restrictions specified subjectively are quite large in
 number and not suggested in nearly so clear a fashion from the diagnostic
 statistics as in the univariate case. At least one alternative set of exact restrictions
 has been suggested for vector autoregressions: Sargent and Sims (1977) experi-
 ment with the restriction that in the finite order autoregressive model A( L)z, = E,
 the matrix A(L) be less than full rank. Computations are again burdensome. The
 forecasting accuracy of neither method has been assessed carefully.
    A second approach is to use prior information in a probabilistic way. This
 information might reflect economic theory, or might be based on purely statistical
 considerations. In the former case Bayes estimates of parameters and posterior
 odds ratios for the hypothesis of unidirectional causality will result, whereas in
 the latter case final estimates are more naturally interpreted as Stein estimates. In
 both cases, computation is simple if priors on parameters in a finite order
 autoregression are linear and one is content to use Theil-Goldberger              mixed
 estimates. Litterman (1980) has constructed mixed estimates of a seven-variable
 autoregression, using six lags and 87 observations: 301 parameters are estimated,
 beginning with 609 degrees of freedom. The mean of the mixed prior is 1.0 for the
 seven coefficients on own lags and zero for all others, and variances decline as lag
 increases. His out-of-sample forecasts are better than those of the system esti-
 mated by classical methods and those issued by the proprietors of two large
 econometric models. This second approach is attractive relative to the first
 because of its computational simplicity, and because Bayesian or Stein estimators
 are methodologically better suited to the investigator’s predicament in the estima-
 tion of large vector autoregressions than are exact restrictions.
1142                                                                                                          J. Geweke


References
Akaike,     H. (1974)      “A New Look         at the Statistical   Model     Identitication”,   IEEE   Transacttons   017

  Automatic     Control,    AC-19,   716-723.
Amameiya,      T. (1980) “Selection of Regressors”, International Economic Revtew. forthcoming.
Amemiya,       T. (1973) “Generalized    Least Squares with an Estimated      Autocovariance    Matrix”.
  Econometrica,      41, 723-732.
Anderson, T. W. (1958) An Introduction     to Multivariate      Statrstical AnafWs.    New York: Wiley.
Anderson,     T. W. (1959) “On Asymptotic       Distributions      of Estimates of Parameters        of Stochastic
  Difference Equations”,    Annals of Mathematrcal     Statistics, 30, 676-687.
Bahadur, (1960) “Stochastic    Comparisons    of Tests”, Annals of Mathematical          Statistics, 38, 303-324.
Barth, J. R. and J. T. Bennett (1974) “The Role of Money in the Canadian Economy: An Empirical
  Test”, Cunadian Journal of Economics, 7, 306311.
Basmann, R. L. (1965) “A Note on the Statistical Testability of ‘Explicit Causal Chains’ Against the
  Class of ‘Interdependent    Models”‘, Journal of the Amerrcun Statisttcul Associatton. 60. 1080-1093.
Bemdt, E. R. and N. E. Savin (1977) “Conflict             Among Criteria for Testing Hypotheses             in the
   Multivariate  Linear Regression Model”, Econometrica, 45, 1263-1278.
Blalock, H. M., Jr. (1961) Causal Inferences in Non-e.xperimentul          Research. Chapel Hill: University of
   North Carolina Press.
Bunge, M. (1959) Cuusality: The Place of the Causal Principle rn Modern Science. Cambridge:               Harvard
   University Press.
Christ, C. F. (1966) Econometric Models and Methods. Wiley: New York.
Doob, J. (1953) Stochastic Processes. New York: Wiley.
Engle, R., D. Hendry, and J.-F. Richard (1983) “Exogeneity”              Econometrrcu.  51, 277-304.
Feigel, H. (1953) “Notes on Causality”,     in Feigl and Brodbeck, eds., Readtngs in the Phrlosophy. of
   Science.
Fuller, W. A. (1976) Introduction to Statistical Time Series. New York: Wiley.
Gel’fand, I. M. and A. M. Yaglom (1959) “Calculation          of the Amount of Information    about a
  Random Function Contained in Another Such Function”,          American Mathematical Society Translu-
   tions Series 2, 12, 199-264.
Geweke, J. (1978) “Testing  the Exogeneity  Specification  in the Complete Dynamic Simultaneous
  Equation Model”, Journal of Econometrics, 7, 163-185.
Geweke, J. (1981) “The Approximate   Slopes of Econometric   Tests”, Econometrica, 49. 1427-1442.
Geweke, J. (1982a) “Measurement    of Linear Dependence      and Feedback    Between Time Series”.
  Journul     of the Americun    Statistical    Association,   77, 304-324.
Geweke, J. (1982b) “The Neutrality of Money in the United States, 1867-1981: An Interpretation                    of
  the Evidence”, Carnegie-Mellon        University Working Paper.
Geweke, J. and R. Meese (1981) “Estimating             Regression   Models of Finite But Unknown            Order”,
  Internationul    Economtc Reutew, forthcoming.
Geweke, J., R. Meese and W. Dent (1983) “Comparing                Alternative  Tests of Causality in Temporal
  Systems: Analytic Results and Experimental           Evidence”, Journal of Econometrics,        21. 161-194.
Granger, C. W. J. (1963) “Economic            Processes Involving Feedback”,        Informotron    und Control. 6,
  28-48; also Chapter 7 of Granger, C. W. J. and M. Hatanaka,               Spectral Ana!ysrs of Economic Time
  Series. Princeton:    University Press.
Granger, C. W. J. (1969) “Investigating        Causal Relations by Econometric        Models and Cross-Spectral
  Methods”,      Econometrica,   37, 424-438.
Grenander,      U. and G. Szego (1958) Toeplitz Forms and Their Applicattons.,            Berkeley: University of
  California Press.
Guilkey, D. K. and M. K. Salemi (1982) “Small Sample Properties of Three Tests for Granger-Causal
  Ordering in a Bivariate Stochastic System”, Review of Economrcs and Statistics, 64. 68-80.
Hannan,     E. J. (1963) “Regression       for Time Series”, in: M. Rosenblatt,            ed.. Proceedings of a
  Symposium on Time Series Analysis. New York: Wiley.
Hannan, E. J. (1970) Multiple Time Series. New York: Wiley.
Haugh, L. D. (1976) “Checking          the Independence      of Two Covariance-Stationary          Time Series: A
  Univariate Residual Cross Correlation         Approach”.
                                                  II          Journal of the Amencan Stutistical Assorration.
  71. 378-385.
Ch. 19: Inference and Causalig                                                                                 1143

&soya, Y. (1977) “On the Granger Condition for Non-causality”,               Economerrica. 45, 1735-1736.
Hsiao, C. (1979a) “Autoregressive        Modeling of Canadian Money and Income Data”, Journal of the
   American Sraristical Association. 74. 553-560.
Hsiao. C. (1979b) “Causality       Tests in Econometrics”.    Journal of Economic Dynamics and Control, 1,
   321-346.
Hunvia, L. (1962) “On the Structural Form of Interdependent             Systems”, in: Nagel. E., et al., Logic,
   Merhodolog~ and the Phrlosophy of Science. Palo Alto: Stanford University Press.
Koopmans,      T. C. (1950) “When is an Equation           System Complete       for Statistical   Purposes?’     in:
   Koopmans,      T. C., ed., Sraristical Inference in Dynamic Economrc Models. New York: Wiley.
Koopmans, T. C. and W. C. Hood (1953) “The Estimation of Simultaneous                 Economic Relationships”,
    in: Hood, W. C. and T. C. Koopmans,            eds., Studies m Economerric Method. New Haven: Yale
    University Press.
Litterman, R., “A Bayesian Procedure for Forecasting with Vector Autoregressions”              (MIT manuscript).
Mallows, C. L. (1973) “Some Comments on C,“. Technomerrics, 15. 661-675.
Neftci, S. N. (1978) “A Time-Series Analysis of the Real Wages-Employment                Relationship”,     Journal
   of Polirical Economy,, 86, 281-292.
Nelson. C. R. and G. W. Schwert (1982) “Tests for Predictive Relationships                  between Time Series
    Variables: A Monte Carlo Investigation”,       Journal of the American Statisrical Association, 77. 11- 18.
Nerlove, M., D. M. Grether, and J. K. Carvalho (1979) Ana!)vis of Economic Time Serves: A Svnrhesrs.
    New York: Academic Press.
Oberhofer.     W. and J. Kmenta (1974) “A General Procedure             for Obtaining     Maximum Likelihood
    Estimates in Generalized Regression Models”, Econometrica, 42. 579-590.
Osbom. D. R. (1977) “Exact and Approximate              Maximum Likelihood Estimators for Vector Moving
    Average Processes”, Journal of the RoJjal Starisrical Socie!)) , Series B, 39, 114-118.
Parzen, E. (1977) “Multiple       Time Series: Determining      the Order of Approximating          Autoregressive
    Schemes”, in: P. Krishnaiah,     ed., Multroariare Ana&is IV, Amsterdam:         North-Holland.
Pierce, D. A. (1977) “Relationships-and           the Lack Thereof&Between         Economic Time Series. with
    Special Reference to Money and Interest Rates”, Journal of the Amerrcan Sratistrcal Associarion, 72.
    11-22.
Pierce, D. A. (1979) “R2 Measures for Time Series”, Journal oj the American Statrsrical Association.
    74, 90-910.
Pierce, D. A. and L. D. Haugh (1977) “Causality             in Temporal Systems: Characterizations            and a
    Survey”, Journal of Economen-its, 5. 265-293.
Rao, M. M. (1961) “Consistency          and Limit Distributions    of Estimators of Parameters        in Explosive
    Stochastic Difference Equations”,      Annals of Mathematical Statlsfrcs, 32, 195-218.
Robinson, P. (1978) “Distributed        Lag Approximations     to Linear Time-Invariant       Systems,” Annals of
    Statistics 6. 507-515.
Rozanov. Y. A. (1967) Srarionar?, Random Processes. San Francisco: Holden-Day.
Sargent, T. J. and C. A. Sims (1977) “Business Cycle Modeling with Pretending to Have Too Much a
    priori Economic Theory”, in: C. A. Sims, ed., New Methods in Business Cycle Research: Proceedrngs
   from a Conference. Minneapolis:        Federal Reserve Bank of Minneapolis.
Schwatz, G. (1978) “Estimating        the Dimension of a Model”, Annals of Srarisrics, 6. 461-464.
Simon, H. A. (1952) “On the Definition of the Causal Relation”, Journal of Philosoph!,, 49, 517-527;
    reprinted in H. A. Simon, ed.. 1957, Models of Man. New York: Wiley.
Sims, C. A. (1972) “Money, Income and Causality”,            American Economrc Reeien~, 62, 540-552.
Sims, C. A. (1974) “Output         and Labor Input in Manufacturing”,          Brooking Papers on Economic
   Acriciry 1974, 695-736.
Sims, C. A. (1977a) “Exogeneity       and Causal Ordering in Macroeconomic         Models”, in: C. A. Sims, ed.,
    New Methods in Business Cvcle Research: Proceedmgs from a Conference, Minneapolis:                      Federal
    Reserve Bank of Minneapolis.
Sims, C. A. (1977b) “Comment”,          Journal of the American Statrstical Association, 72, 23-24.
Strotz. R. H. and H. 0. A. Wold (1960) “Recursive               vs. Non-recursive     Systems: An Attempt at
   Synthesis”,    Econometrica, 28, 417-427.
Theil, H. (1971) Principles of Economefrics. New York: John Wiley.
Wald, A. (1943) “Tests of Statistical Hypotheses Concerning Several Parameters When the Number of
   Observations     is Large”, Transactions of the American Mathematical Socie!,,, 54, 426-485.
1144                                                                                      J. Geweke

Wallis, K. F. (1977) “Multiple Time Series Analysis and the Final Form of Econometric      Models”,
   Econometrica, 45, 1481-1498.
Whittle, P. (1983) Predrclion und Regulullon ly Lineur Least-Squure Methods.
Wiener, N. (1956) “The Theory of Prediction”,      in: E. F. Beckenback, ed., Modern Muthemutics for
   Engineers.
Weld, H. (1938) The An&m        of Stationmy Time Series Uppsala: Almquist and Wicksell
Zellner, A. (1979) “Causality   and Econometrics”.
Zemanian,     A. H. (1972) Reulizuhili~v Theon? for Continuous Lineur Slatems. New York: Academic
   Press.



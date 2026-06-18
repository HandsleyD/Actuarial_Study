---
normalized_id: shared-pdf-reference-continuous-time-stochastic-models-and-issues-of-aggregation-over-time
exam_code: SHARED
material_scope: continuous time stochastic models and issues of aggregation over time.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Continuous Time Stochastic Models and Issues of Aggregation Over Time.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-continuous-time-stochastic-models-and-issues-of-aggregation-over-time

Chuppter 10



CONTINUOUS TIME STOCHASTIC MODELS
AND ISSUES OF AGGREGATION OVER TIME
A. R. BERGSTROM
Uniuersir_v of Essex




Contents

1.   Introduction                                                                             1146
2.   Closed first-order systems of differential and integral equations                        1150
     2.1.     Stochastic limit operations and stochastic differential equations               1150
     2.2.     Random measures and systems with white noise disturbances                       1157
     2.3.     Estimation                                                                      1171
3. Higher order systems                                                                       1193
4. The treatment of exogenous variables and more general models                               1202
5. Conclusion                                                                                 1209
References                                                                                    1210




Handbook of Econometrics,    Volume II, Edited    by Z. Griliches   und M.D.   Inmriligutor
0 Elseuier Science Publishers B V, 1984
1146                                                                    A. R. Bergstrom




1.     Introduction

Since the publication of the influential articles of Haavelmo (1943) and Mann and
Wald (1943) and the subsequent work of the Cowles Commission [see, especially,
Koopmans (1950a)], most econometric models of complete economies have been
formulated as systems of simultaneous stochastic difference equations and fitted
to either quarterly or annual data. Models of this sort, which are discussed in
Chapter 7 of this Handbook, can be written in either the structural form:

                             k

       TY,+ Box, +         c KY,-, = u,,
                           r=l
                                                                                   (1)

or the reduced form:


       y,=&x,+         i         nry,-r+u,,                                        (2)
                      i-=1



where yr is an n x 1 vector of observable random variables (endogenous variables),
x, is an m x 1 vector of observable non-random variables (exogenous variables), U,
is a vector of unobservable random variables (disturbances), r is an n X n matrix
of parameters, B, is an n X m matrix of parameters, B,, . . . , B, are n X n matrices
of parameters, II, = - T- ‘B,, r = 0,. . . , k, and u, = rP ‘u,. It is usually assumed
that E(u,) = 0, E(u,u;) = 0, s # t, and E(uju;) = 2, implying that E(u,) = 0,
E( u,u;) = 0, s f t, and I!(+$) = Sz= T-‘XT’- .
   The variables xi ,,..., x,,, y,, ,...,y”, will usually include aggregations over a
quarter (or year) of flow variables such as output, consumption, exports, imports
and investment as well as levels at the beginning or end of the quarter (or year) of
stock variables representing inventories, fixed capital and financial assets. They
will also include indices of prices, wages and interest rates. These may relate to
particular points of time, as will usually be the case with an index of the yield on
bonds, or to time intervals as will be the case with implicit price deflators of the
components of the gross national product.
   Although the reduced form (2) is all that is required for the purpose of
prediction under unchanged structure, the structural form (1) is the means
through which a priori information derived from economic theory is incorporated
in the model. This information is introduced by placing certain a priori restric-
tions on the matrices B,,..., B, and r. The number of these restrictions is,
normally, such as to imply severe restrictions on the matrices II,, . . . ,IIk of
reduced form coefficients. Because of the smallness of the samples available to the
Ch. 10: Conlinuous   Time Stochastic   Models                                       1147

econometrician, these restrictions play a very important role in reducing the
variances of the estimates of these coefficients and the resulting variances of the
predictions obtained from the reduced form. The most common form of restric-
tion on the matrices B,, . . . , B, and r is that certain elements of these matrices are
zero, representing the assumption that each endogenous variable is directly
dependent (in a causal sense) on only a few of the other variables in the model.
But r is not assumed to be a diagonal matrix.
   The simultaneity in the unlagged endogenous variables implied by the fact that
r is not a diagonal matrix is the distinguishing feature of this set of models as
compared with models used in the natural sciences. It is necessary in order to
avoid the unrealistic assumption that the minimum lag in any causal dependency
is not less than the observation period. But there are obvious difficulties in
interpreting the general simultaneous equations model as a system of unilateral
causal relations in which each equation describes the response of one variable to
the stimulus provided by other variables. For this reason Wold (1952,1954, 1956)
advocated the use of recursive models, these being models in which r is a
triangular matrix and Z is a diagonal matrix.
   One way of interpreting the more general simultaneous equations model, which
is not recursive, is to assume that the economy moves in discrete jumps between
successive positions of temporary equilibrium at intervals whose length coincides
with the observation period. We might imagine, for example, that on the first day
of each quarter the values of both the exogenous variables .and the disturbances
affecting decisions relating to that quarter become known and that a new
temporary equilibrium is established, instantaneously, for the duration of the
quarter. But this is clearly a very unrealistic interpretation. For, if it were
practicable to make accurate daily measurements of such variables as aggregate
consumption, investment, exports, imports, inventories, the money supply and the
implicit price deflators of the various components of the gross national product,
these variables would undoubtedly be observed to change from day to day and be
approximated more closely by a continuous function of time than by a quarterly
step function.
   A more realistic interpretation of the general simultaneous equations model is
that it is derived from an underlying continuous time model. This is a more basic
system of structural equations in which each of the variables is a function of a
continuous time parameter t. The variables in this model will, therefore, be
J+(t),..., Y,(t),+(t),..., x,(t) where t assumes all real values. The relation be-
tween each of these variables and the corresponding variable in the simultaneous
equations model will depend on the type of variable. If the variable is a flow
variable like consumption, in which case y,(t) is the instantaneous rate of
consumption at time t, then the corresponding variable in the simultaneous
equations model is the integral of y,(t) over an interval whose length equals the
observation period, so that, if we identify the unit of time with the observation
1148                                                                       A. R. Bergstrom


period, we can write y,, = l,L,y,(r)dr.       If y,(t) is a stock variable like the money
supply then the corresponding variable in the simultaneous equations model will
be the value of y,(t) at an integer value of t so that we have ylr = y,(t),
 t=1,2 ,..., T.
    It is intuitively obvious that, if the simultaneous equations system (1) is derived
from an underlying continuous time model it will, generally, be no more than an
approximation, even when the continuous time model holds exactly. One of the
main considerations of this chapter will be the consequences, for estimation, of
 this sort of approximation and what is the best sort of approximation to use. This
involves a precise specification of the continuous time model and a rigorous study
 of the properties of the discrete vector process generated by such a model.
    If the underlying continuous time model is a system of linear stochastic
differential equations with constant coefficients, and the exogenous variables and
disturbances satisfy certain conditions, then, as we shall see, the discrete observa-
 tions will satisfy, exactly, a system of stochastic difference equations in which
each equation includes the lagged values of all variables in the system, and not
just those which occur in the corresponding equation of the continuous time
model. The disturbance vector in this exact discrete model is generated by a
vector moving average process with coefficient matrices depending on the struct-
ural parameters of the continuous time model. A system such as this will be
 satisfied by the discrete observations whether they are point observations, integral
 observations or a mixture of the two, as they will be if the continuous time model
contains a mixture of stock and flow variables. If there are no exogenous
variables, so that the continuous time model is a closed system of stochastic
differential equations, then the exact discrete model can be written in the form


       yr = i      F,WY,-r + 17r,
             r=l
                                                                                       (3)
       9r=     i   W)h.~
             r=O


       E(q) = 0,        E(&) = K(e),        E( E,E;) = 0,     s z t,

wheretheelementsofthematricesF,(8),...,F,(8),C,(B),...,C,(B)andK(B)are
functions of a vector 8 of structural parameters of the continuous time model.
   It is a remarkable fact that the discrete observations satisfy the system (3) even
though neither the integral /,\,y(r)dr     nor the pair of point observationsy(t) and
y(t - 1) conveys any information about the way in which y(t) varies over the
interval (t - 1, t) and the pattern of variation of y(t) over a unit interval varies
both as between different realizations (corresponding to different elementary
events in the space on which the probability measure is defined), for a given
Ch. 20: Continuous   Time Stochastic   Models                                      1149


interval,   and as between different intervals for a given realization. Moreover, the
form of the system (3) does not depend on the observation period, but only
on the form of the underlying continuous time model. That is to say the integers
k and 1 do not depend on the observation period, and the matrices
F,(e),...,F,(tQC,(Q,...,     C,( r3) and K( 0) depend on the observation period only
to the extent that they will involve a parameter 6 to represent this period, if it is
not identified with the unit of time. The observation period is, therefore, of no
importance except for the fact that the shorter the observation period the more
observations there will be and the more efficient will be the estimates of the
structural parameters.
   The exact discrete model (3) plays a central role in the statistical treatment of
continuous time stochastic models, for two reasons. First, a comparison of the
exact discrete model with the reduced form of an approximating simultaneous
model provides the basis for the study of the sampling properties of parameter
estimates obtained by using the latter model and may suggest more appropriate
approximate models. Secondly, the exact discrete model provides the means of
obtaining consistent and asymptotically efficient estimates of the parameters of
the continuous time model.
   For the purpose of predicting future observations, when the structure of the
continuous time model is unchanged, all that we require is the system (3). But,
even for this purpose, the continuous time model plays a very important role. For
it is the means through which we introduce the a priori restrictions derived from
economic theory. Provided that the economy is adjusting continuously, there is no
simple way of inferring the appropriate restrictions on (3) to represent even such
a simple implication of our theory as the implication that certain variables have
no direct causal influence on certain other variables. For, in spite of this causal
independence, all of the elements in the matrices F,, . . . , Fk in the system (3) will
generally be non-zero. In this respect forecasting based on a continuous time
model derived from economic theory has an important advantage over the
methods developed by Box and Jenkins (1970) while retaining the richer dynamic
structure assumed by their methods as compared with that incorporated in most
discrete time econometric models.
   For a fuller discussion of some of the methodological issues introduced above
and an outline of the historical antecedents [among which we should mention
Koopmans (1950b), Phillips (1959) and Durbin (1961)] and development of the
theory of continuous time stochastic models in relation to econometrics, the
reader is referred to Bergstrom (1976, ch. 1). Here we remark that the study of
these models has close links with several other branches of econometrics and
statistics. First, as we have indicated, it provides a new way of interpreting
simultaneous equations models and suggests a more careful specification of such
models. Secondly, it provides a further contribution to the theory of causal chain
models as developed by Wold and others. Finally, as we shall see, it provides a
1150                                                                          A. R. Bergstrom

potentially important application of recent developments in the theory of vector
time series models. To some extent these developments have been motivated by
the needs of control engineering. But it seems likely that their most important
application in econometrics will be to continuous time models.
   In the following section we shall deal fairly throughly with closed first order
systems of linear stochastic differential or integral equations, proving a number of
basic theorems and discussing various methods of estimation. We shall deal with
methods of estimation based on both approximate and exact discrete models and
their application to both stock and flow data. The results and methods discussed
in this section will be extended to higher order systems in Section 3. In Section 4
we shall discuss the treatment of exogenous variables and more general forms of
continuous time stochastic models.


2.      Closed first-order systems of differential   and integral equations



2. I.    Stochastic limit operations and stochastic d@erential equations

Before getting involved with the problems associated with stochastic limit opera-
tions, it will be useful to consider the non-stochastic differential equation:


        Dy(t)=ay(t)+b++(t),                                                             (4)

where D is the ordinary differential operator d/dt, a and b are constants and G(t)
is a continuous function of t (time). It is easy to see that the solution to (4) subject
to the condition that y(O) is a given constant is:


                                                                                        (5)


For, by differentiating (5) we obtain:




                =ay(t)+b+$(t).
Ch. .?O: Contmuous        Time Stochastic      Models                               1151


From (5) we obtain:

      y(f)=[-le “‘“)~(~)dr+(~(0)+~)e”‘-~+~~le”‘“’~(r)d~
                          r-l
            _         0          e”(r~l~r)~(r)dr+eu(~(0)+~)eu(f~l)-eu~
            -e/           0


                  +(e’-1):              $1’         e’(“)+(r)dr
                                              r-l

            =e”_y(t-I)+(&‘-I)$+/’
                               e”(‘P”$(r)dr.
                                                           f-1


We have shown, therefore, that the solution to the differential          equation    (4)
satisfies the difference equation:



where

      f = e”,                 g= (e”-l)b
                                               a

and

      $,=I’ e”(r-r)$( r) dr.
                r-l


   In order to apply the above argument to an equation in which +(t) is replaced
by a random disturbance function it is necessary to define stochastic differentia-
tion and integration. We can do this by making use of the concept of convergence
in mean square. The sequence [,,, n = 1,2,. . . , of random variables is said to
converge in mean square to a random variable TJif:

        lim E(&,-n)*=O.
       ,14 (23

In this case n is said to be the limit in mean square of 5, and we write:




Suppose now that { t(t)} is a family of random variables, there being one member
of the family for each value of t (time). We shall call {E(t)} a continuous time
random process if t takes on all real values and a discrete time random process if t
1152                                                                      4. R. Bergstrom

takes on all integer values, the words “continuous time” or “discrete time” being
omitted when it is clear from the context which case is being considered. A
random process {t(t)} is said to be mean square continuous on an interval [c, d]
if:

       E[t(+t(t    - A)]*-+0
uniformly in t, on [c, d], as h -+ 0. And it is said to be mean square differentiable if
there is a random process {n(t)} such that:




In the latter case we shall write:




and call D = d/d t the mean square differential operator.
   In order to define integration we can follow a procedure similar to that used in
defining the Lebesgue integral of a measurable function [see Kolmogorov and
Fomin (1961, ch. 7)]. We start by considering a simple random process which can
be integrated by summing over a sequence of measurable sets. The random
process {E(t)} is said to be simple on an interval [c, d] if there is a finite or
countable disjoint family of measurable sets A,, k = 1,2,. . . , whose union is the
interval [c, d] and corresponding random variables .&, k = 1,2,. . . , such that:

       E(t)=&,           tgA,,   k=1,2,...    .

Let ]Ak] be the Lebesgue measure of A,. Then the simple random process (t(t)}
is said to be integrable in the wide sense on [c, d] if the series CT= itk ]A, (
converges in mean square. The integral of {t(t)} over [c, d] is then defined by:


       /‘[(t)dr=    F &lAk(= 1.i.m. i        EklAxl.
        c          k=l           n4m   k=l


   We turn now to the integration of an arbitrary random process. We say that a
random process { t(t)} IS
                       . integrable in the wide sense on the interval [c, d] if there
exists a sequence {5,(t)}, n = 1,2,. . . , of simple integrable processes which
converges uniformly to {t(t)} on [c, d], i.e.

       E[5(t)-5,(t)12-‘O,
Ch. JO: Continuous   Time Stochastic   Models                                         1153

as n -+ co, uniformly in t, on [c, d]. It can be shown [see Rozanov (1967, p. ll)]
that, in this case, the sequence /,“tn (t ) d t, n = 1,2,. . . , of random variables has a
limit in mean square which we call the integral of {t(t)} over [c, d]. We can then
write:

      l’[(t)dt       = l.i.m./‘&(t)dt.
       C                       C

   If the random process {E(t)} is mean square continuous over a finite interval
[c, d], then it is integrable over that interval. For we can then define the simple
random process {t,(t)} by dividing [c, d] into n equal subintervals A,i,. . .,A,,,,,
letting [,i,. . . , [,,,, be the random variables defining t(t) at, say, the midpoints of
A “i,. . . ,A,,, respectively, and putting:

      E,(t) = 5”k,          tEA,,k,         k =l,...,n.

The simple random process {t,(t)} IS ob vtously integrable, its integral being
Ci,,&,k]Ank]. Moreover, it follows directly from the definition of mean square
continuity and the fact that the length of the intervals A,, tends to zero as t + 00
that the sequence {t,,(t)}, n = 1,2,. . ., of simple random processes converges,
uniformly on [c, d], to {t(t)}. We have shown, by this argument, that if a
random process is mean square continuous, then it is integrable over an interval,
not only in the wide sense defined above, but also in a stricter sense correspond-
ing to the Riemann integral. A much weaker sufficient condition for a random
process to be integrable in the wide sense is given by Rozanov (1967, theorem
2.3).
   It is easy to show that the integral defined above has all the usual properties. In
particular, if {[i(t)} and {t*(t)} are two integrable random processes and a, and
a2 are constants, then:




And if {t(t)} is mean square continuous in a neighbourhood           of t, then:




where d/dt is the mean square differential operator.
   In addition to the various limit operations defined above we shall use the
assumption of stationarity. A random process { .$(t )} is said to be stationary in the
wide sense if it has an expected value E[,$‘(t)] not depending on t and a correlation
1154                                                                        A. R. Bergstrom

function B(t, s) defined by:

       B(t, s) = E[E(+%)]      >

depending only on the difference t - S, so that we can write:

       B(t,s)=y(t-s).

A wide sense stationary process is said to be ergodic if the time average
(l/T)ll[(t)dt         converges in mean square to the expected value E[t(t)] as
T + 00. A random process {t(t)} is said to be strictly stationary if, for any
numbers t,, . . . , t,, the joint distribution of [(tr + r), . . . , <(tk + r) does not de-
pend on r.
   A necessary and sufficient condition for a wide sense stationary process to be
mean square continuous is that its correlation function is a continuous function of
(t - s) at the origin (i.e. when t = s). For we have:

       Ek(+5(t - h)]‘= E[5(t)12+E[5(l
                                  - h)12--E[t(Mf - h)]
                     = 2E[5(#-2E[5(@(~- h)]
                            =2[B(t,t)-B(t,t-h)]
                            = 2[Y(O)-Y(h)].

  We shall now consider the stochastic diferential equation:

       Du(t)=&)-b+W,                                                                    (7)
where D is the mean square differential operator and {t(t)} is a mean square
continuous wide sense stationary process. Our ultimate aim is to consider the
estimation of the parameters a and b from a sequence y(l), y(2),.. ., of observa-
tions when E(t) is an unobservable disturbance. For this purpose it will be
necessary to place further restrictions on {t(t)}. But we shall not concern
ourselves with these at this stage. Our immediate aim is to find a solution to (7)
and show that this solution satisfies a difference equation whose relation to (7) is
similar to that of the non-stochastic difference equation (6) to the differential
equation (4).
Theorem I
If {E(t)} is a mean square continuous wide sense stationary process, then, for any
given y(O), (7) has a solution:
Ch. 10: Continuous      Time Stochosric   Models                                            1155


and this solution satisfies the stochastic difference equation:

      y(t)=fy(t-1)+g+q,                                                                     (9)

where


      f =e”,             g= (e”-l)!
                                          a

and

      &,=         f   eU(‘-‘)[( r) dr.
              / l-l



Proof

The random process {e?$‘(t)} is mean square continuous on any finite interval.
For:

      E[e”‘[(t)-e          o(‘Ph)<(t - A)]‘= E{e”‘[[(t)-t(t              - h)]

                                                     +e”‘(l-e-“h)~(t      - h)}’

                                                   =e2”‘E[[(t)-[(t-h)]2+e2ut(l-e-““)2y(0)
                                                     +2e2”(1-ePuh)[y(h)-y(O)].

And, since eZar 1s . bounded on any finite interval while E[[(t)-((t - h)12 -+ 0,
uniformly in t, as h + 0, the right-hand side of the last equation converges to
zero, uniformly in t, as h + 0.
   It follows that the integral /de-Or[(r)dr exists. Moreover:

            ‘eH-r)[( r) dr = ealbpar[( r) dr
      /0

and

      $[k-ur.$(r)dr]                =e-O’<(t).


All the operations that were performed in showing that (5) is a solution to (4) and
that this solution satisfies (6) are valid in the mean square sense, therefore, when
+(t) is replaced by E(t). It follows that (8) is a solution to (7) and that this
solution satisfies (9). n
1156                                                                     A. R. Bergstrom


   We turn now to a preliminary consideration        of the problem of estimation. It
would be very convenient if, in addition to being wide sense stationary and mean
square continuous the random process {t(t)} had the property that its integrals
over any pair of disjoint intervals were uncorrelated. For then the disturbances E[,
t=l2 , ,..., in (9) would be uncorrelated and, provided that they satisfied certain
additional conditions (e.g. that they are distributed independently and identically),
the least squares estimatesf* and g* of the constants in this equation would be
consistent. We could then obtain consistent estimates of a and b from

       a* = logf* and    b* =   a*g*
                                f*-l.

But it is easy to see that, if {t(t)} is mean square continuous, it cannot have the
property that its integrals over any pair of disjoint intervals are uncorrelated. For
the integrals /,t,[(r)dr     and /,“h[(r)d r will obviously be correlated if h is
sufficiently small. The position is worse than this, however. We shall now show
that there is no wide sense stationary process (whether mean square continuous or
otherwise) which is integrable in the wide sense and whose integrals over every
pair of disjoint intervals are uncorrelated.
   Suppose that the wide sense stationary process {E(t)} is integrable in the wide
sense and that its integrals over every pair of disjoint intervals are uncorrelated.
We may assume, without loss of generality, that E[[( t)] = 0. Let E[ /,‘_ 1[( r) dr] *
 = c and let h = l/n, where n is an integer greater than 1. We shall consider the set
of n integrals:




By hypothesis these integrals are uncorrelated, and by the assumption                  of
stationarity their variances are equal. It follows that:




and hence:




i.e. the variance of the mean value, over an interval, of a realization of t(t) tends
to infinity as the length of the intervals tends to zero. But this is impossible since,
for any random process which is integrable in the wide sense, the integrals must
Ch. 20:   Continuous   Time Stochastrc Models

satisfy [see Rozanov (1967, p. lo)] the inequality:




And, if the process is stationary in the wide sense, the right-hand side of (10)
equals y(0)h2. It follows that:




This contradiction shows that the integrals over sufficiently small adjacent inter-
vals must be correlated.
   Although it is not possible for the integrals over every pair of disjoint intervals,
of a wide sense stationary process, to be uncorrelated, their correlations can, for
intervals of given length, be arbitrarily close to zero. They will be approximately
zero if, for example, the correlation function is given by:

       -y(t - 3) = ~2e-f?-sI,


where a2 and p are positive numbers and p is large. A stationary process with this
correlation function does (as we shall see) exist and, because the correlation
function is continuous at the origin, it is mean square continuous and hence
integrable over a finite interval. If /3 is sufficiently large the disturbances E,,
t=l2 ? ,**., in (9) can, for all practical purposes, be treated as uncorrelated, and
we may expect the least squares estimates f* and g* to be approximately
consistent.
   Heuristically we may think of an improper random process {S(t)} called
“white noise” which is obtained by letting /I -+ cc in a wide sense stationary
process with the above correlation function. For practical purposes we may
regard white noise as indistinguishable from a process in which p is finite but
large. But this is not a very satisfactory basis for the rigorous development of the
theory of estimation. For this purpose we shall need to define white noise more
precisely.


2.2.      Random measures and systems with white noise disturbances

A precise definition of white noise can be given by defining a random set function
which has the properties that we should expect the integral of l(t) to have under
our heuristic interpretation. That is to say we define a random set function l
which associates with each semi-interval A = [s, t) (or A = (s, t]) on the real line a
1158                                                                  A. R. Bergsrrom

random variable [(A) and has the properties:

       s-CA,U A,) = S(A,)+l(A,),

when A, and A, are disjoint, i.e. it is additive,

       E[{(A)12   = a2[t -.s],

where n2 is a positive constant,

       E[S(A,)1(A,)]    =O,

when A, and A, are disjoint.
   A set function with these properties is a special case of a type of set function
called a random measure. The concept of a random measure is of fundamental
importance, not only in the treatment of white noise, but also (in the more general
form) in the spectral representation of a stationary process, which will be used in
Section 4. We shall now digress, briefly, to discuss the concept more generally and
define integration with respect to a random measure and properties of the integral
which we shall use in the sequel.
   Let R be some semiring of subsets of the real line (e.g. the left closed
semi-intervals, or the Bore1 sets, or the sets with finite Lebesgue measure [see
Kolmogorov and Fomin (1961, ch. 5)]. And let @ be a random set function which
associates with any subset A E R a random variable @(A) (generally complex
valued) and has the properties:

       @(A,U A,) = @(A,>+@(A,>,
if A, and A, are disjoint, i.e. it is additive:

       EI@(A)12 = F(A) <co,

       E[ @(A,)q(A,)]     = 0,

when A, and A, are disjoint. Then @ is said to be a random measure. If, in
addition.

       @(A>
          = ~@(A,>
                  k

for every A E R which is the union of disjoint subsets A, and the series on the
right-hand side converges in mean square, then the random measure @ is said to
be o-additive.
Ch. .?O: Conrimrous   Time Stochastic   Models                                      1159


   It can be shown [Rozanov (1967, theorem 2.1)] that a u-additive random
.measure defined on some semiring on the real line can be extended to the ring of
all measurable sets in the u-ring generated by that semiring. This implies that if
we give the random measure {, defined above, the additional property of
a-additivity so that:

      S(A)= CS’@,),

whenever the semi-interval A is the union of disjoint semi-intervals A, then it can
be extended to the ring of all Bore1 sets on the real line with finite Lebesque
measure. We shall define white noise by the random measure 5 extended in this
way to the measurable sets on the real line representing the time domain.
   We turn now to the definition of the integral of a (non-random but, generally,
complex valued) measurable function f(x) with respect to a random measure @
which is defined on the Bore1 sets of some interval [c, d] (where c and d may have
the values - co and cc, respectively). We start by defining the integral of a simple
function. The measurable function f(x) is said to be simple on the interval [c, d]
if it assumes a finite or countable set of values!, on disjoint sets A, whose union
is [c, d]. And a simple function is said to be integrable with respect to the random
measure @ on the interval [c, d] if the series c,fk@( A,) converges in mean
square. The integral of f(x) with respect @ over [c, d] is then defined as the limit
in mean square to which this sum converges and we write:




  An arbitrary measurable function f(x) is said to be integrable with respect to Cp
on the interval [c, d] if there is a sequence f,( x), n = 1,2,. . . , of simple integrable
measurable functions which converges in mean square to f(x) on [c, d], i.e.




as n + co, where the integral is defined in the Lebesgue-Stieltjes sense [see
Cramer (1951, ch. 7)]. It can be shown [Rozanov (1967, p. 7)], that, in this case,
the sequence /pr;(x)@(dx),     n =1,2,..., has a limit in mean square which we call
the integral of f(x) over [c, d]. We can then write:
1160                                                                  A. R. Bergstrom


If @(A) is undefined on [ - co, 001 we can define /Tmf(x)@(dx)      by:

       Ia f(x)@(dx)   = ;;.m.; /df(x)@(dx),
         -m                -t   C

provided that the limit on the right-hand side of the equation exists.
   A necessary and sufficient condition for the existence of the integral
/,df(x)@(dx), where f( x ) IS an arbitrary measurable function (and c and d may
assume the values - co and 00, respectively), is:




If this condition is satisfied, then [Rozanov (1967, p. 7)]:




And, if the measurable functions!(x)     and g(x) each satisfy condition (ll), then
[Rozanov (1967, p. 7)]:




  When @ is the random measure, {, by which we have defined white noise, F(A)
has the simple form a2]A (, where




and ]A] is the Lebesgue measure of A. A necessary and sufficient condition for
the existence of the integral /,df(r)l(dr), where f(r) is a measurable function
(and c and d may assume the values - cc and co, respectively), is:

                                                                                 (14)

the integral in (14) being the ordinary Lebesgue integral [which will be equal to
the Riemann integral if f(r) is a continuous function]. If this condition is
satisfied, then [as a special case of (12)]:
Ch. 20: Continuous        Time Stochastic        Models                                                 1161


And, if the measurable functions f(x)                              and g(x) each satisfy condition (14) then
[as a special case of (13)]:

                                                                                                        06)
We note incidentally that jif(r){(d r ) IS a random process whose increments are
uncorrelated, i.e. a random process with orthogonal increments [see Doob (1953,
ch. 9) for a full discussion of such processes].
  Before applying the above results in the treatment of stochastic differential
equations with white noise disturbances, we shall illustrate their application by
proving the existence of a wide sense stationary process with the correlation
function u2e-~11-Sl, as assumed in the heuristic introduction to the concept of
white noise given at the end of the last subsection. The function f(r), defined by

     f(r)           = a(2P)1’2e-B(‘-‘),

is integrable, with respect to 5, over the interval [ - co, t], since

      /’ [fJw
          -00
                            ‘/2e-fi(f-r)
                                                1 2dr   = a2
                                                               9




i.e. condition (14) is satisfied. Using (15):

      E         f     42P) 1~2e-/+“S(dr)]2                     = a2.
          [J -00
And, if s < t:

      E       s a(2P) 1’2e~~(s~‘)j(dr)~,_a(2~)1’2e-~(f~’)~(dr)]
          [J -00
                = 2pu2E /’ e-P(“){(dr)J‘
                        [ -co
                                                                       e-B(‘P”){(dr)
                                                                                       1
                      +2pu2E               ’   e-~(--r~i(dr~~e-B(r-rijjdr)]
                                    [I
                              -m[,;me-/3q~
                = 2@2e-/3(‘-s)E

                = u2e-B(f-3)

It follows that {t(t)}, where

     t(r) = /’ u(2P)“2eea(‘P’){(dr)
              -00
is a wide sense stationary process with the correlation function u~~-~I’-~I.
   A stochastic differential equation with a white noise disturbance is sometimes
written like (7) with Dv(t) (or dy(t)/dt)   on the left-hand side and S(t) in place
1162                                                                    A. R. Bergstrom


of t(t) on the right-hand side. It is then understood that {(t) is defined only by
the properties of its integral and that y(l) is not mean square differentiable. We
shall not use that notation in this chapter since we wish to reserve the use of the
operator D for random processes which are mean square differentiable, as is y(t)
in (7). A first-order, linear stochastic differential equation with constant coeffi-
cients and a white noise disturbance will be written:

       dy(t)   = (&)+b)dt          +S(dt),                                         07)
which will be interpreted as meaning that the random process y(t) satisfies the
stochastic integral equation:

       v(t)-   y(O) =[[oy(r)+hl         dr + [Wr).                                 08)

for all t.
   Equation (17) is a special case of the equation

       dy(t)   = m(t, _v(t))dt + e(t, y(t))l(dl),                                  (19)
in which the functions m( t, y) and a( t, y) can be non-linear in t and y, and which
is interpreted [see Doob (1953, ch. 6)J as meaning that r(t) satisfies the stochastic
integral equation:




for all t on some interval [0, T]. It has been shown [see Doob (1953, ch. 6), which
modifies the work of Ito (1946) and (1950)] that, under certain conditions, there
exists a random process y(l) satisfying (20), for all t on an interval [0, T], and
that, for any given y(O), this solution is unique in the sense that, if j(t) is any
other solution:

       P[y(t)-p(t)=01        =l,        O<t<T.                                     (21)
The conditions, assumed in Doob (1953), are that the process { /,‘S(dr)} is
Gaussian and that the functions m and u satisfy a Lipschitz condition and certain
other conditions on [0, T]. A random process {t(t)) is said to be Gaussian if the
random variables t(t) are normally distributed. The assumption that { /,,‘{(dr)} is
Gaussian implies, therefore, that l(A,) and l(A,) are independent if A, and A,
are disjoint and identically distributed if JA, ( = (A,(.
   In discussing the solution to (18) we shall not need to assume that { (,‘{(dd)} is
Gaussian. We shall now show that this equation has a solution, which will be
given explicitly, that this solution is unique, in the sense of (21), in the class of
mean square continuous processes, and that it satisfies a difference equation with
serially uncorrelated disturbances.
Ch. 10: Contrnuour Time Stochastic   Models                                                  1163


Theorem 2
If { is a random measure, defined on all subsets of the line - co < t < 00 with
finite Lebesgue measure, such that:

      E[C(dt)]= 0,           E[{(dt)12 = a2dt,

then
   (a) for any given y(O) (18) has a solution:


                                                                                             (22)

   (b) the solution (22) is unique in the class of mean square continuous processes,
i.e. if J(t) is any other mean square continuous process satisfying (18) and
j,(O) = y(O), then (21) holds for any interval [0, T];
   (c) the solution (22) satisfies the stochastic difference equation:

      At)=fy(t-I)+g+s,,                                                                      (23)

where

      f = e”,       g = (e”-l)e               E(E~ = 0,
                                     a’

      E(ef)=<(e2a-l),                     Eb,) = 0,       sf t.

Proof

   (a) We first note that the integral /de ““-‘){(dr) exists, since condition (14) is
satisfied. Now let v( t) be defined by (22) and let h be any positive number. Then

      y(t)-     y( t - h) = jde”(“)[(dr)-        jde”(‘PhM”b(dr)

                             +[y(0)+~](e”‘-e”(f-h))+~~~u(~~“~”~(dr)


                          = (I-e~““)y(t)+(l-e-““)$                +e-U’~‘h(eU(‘-r)-l)S(dr)

                             + (e-Oh - l)l;hS(dr)+jl;hUdr)

                          =ahy(t)+bh+[Lhl(dr)+u(t,h),                                        (24)
1164                                                                                              A. R. Bergstrom


where

                           a2h2
       u(t,h)=          -2+          q-            . ..)[&)+.I
                    i
                    +e~oh        f                                           a2h2
                                     (e”(‘-‘)-l)[(dr)+               - ah + 2       -   . . .
                             / t-h

But


       E         (e0Ct-r) _l){(dr)                        (e”(‘-“)-l)*dr


                                             =-e    1 (    2oh
                                                                 -I)-i(eUh-l)+h
                                                   2a
                                             =O(h3).

Therefore



Now let h = t/n,          where n is a positive integer. Then

       At)-y(O)=           [~(t)-y(t-h)l+[y(t-h)-y(t-2h)l+                                  ...
                           +b(t-(n-l)h)-y(O)]




Now it is clear from (24) that y(t) is mean square continuous, and hence:




Moreover. since




Since (25) holds for all positive integers n, it must hold when each term is
Ch. 20: Continuous    Time Stochastic   Models                                   1165


replaced by its limit in mean square as n + m, i.e.




   (b) Let P(t) be any other mean square continuous process satisfying (18), on
[0,7’1, and j(0)= y(O). Define:



Then

       t-(t) = ajolE(W.                 OstsT                                   (26)

Since y(t) and j(t) are mean square continuous, t(t) is mean square continuous.
Therefore E[[( t)12 is a continuous function of t, since

       IEk(t)l’-Ek(r - h)12(r E(k(t)12-[t(t - h)121
          = E[lt(t)+t(t- h)l I<(+@ - h)l]
                I   {@i(t)+@ - h)12E[t(+t(t - h)]2}1’2
                --,0, ash-+O.
Let n be a positive integer such that r = T/n < l/u. Since E[[( t)]’ is continuous it
has a maximum E[t(~r)]~ on the closed interval [0, r], and 0 $ rr 2 T I l/a.
Therefore, using (10) and (26):




but u2r21 < 1. Therefore:

       E[5h)12=o-
Therefore:

       P([(t)       =o) =l,         OItIr.
1166                                                                                                 A. R. Bergstrom


Since a similar relation holds for each of the n intervals, of length 7, whose union
is [0, T] we have:

       P@(Z) = 0) =l,                          OstsT.

  (c) Let y( t) be the random process defined by (22). Then

       y(t) = ea/orele “(‘L’){(dr)+e”[                               y(O)+ i]e”(‘-i)


                  -ee” i$)+(eO-1)$+/l                                ea(‘-r){(dr)
                                                              l-l

              =fY(t-l)+g+&,,

where

       Et=
             Jt-1’ ea(lpr)((dr).                                                                                 (27)


It is clear from the definition of the integral that:

       E( E,) = E lliea(‘-‘){(dr)]                          = 0.
                 ]

And, using (15) and (16):




                         2           l
                  =(T                    eZo’dr = 2     (e2’ - l),
                             /
                                 0


       E( E,E~)   =     E l:              reO(‘-‘)[(dr)il           ie”(‘-‘){(dr    )]= 0,   sz t,
                         ]

where s and t are integers.                        n

   In order to prove, in the simplest form, certain results which will be used
throughout this chapter, we have dealt very fully with a single stochastic differen-
tial equation with a white noise disturbance. But, from the point of view of
econometrics, our main interest is with systems of equations. These introduce new
problems. For the coefficients of a system of stochastic differential equations,
representing a system of causal adjustment relations, will be subject to certain
a priori restrictions derived from economic theory, and these will imply certain
Ch. 20: Conrinuow    Time Stochastic   Models                                          1167

restrictions on the coefficients of the derived system of difference equations used
for estimation purposes. Because of the complexity of the latter restrictions and
the fact that they cannot be inferred directly from economic theory, the continu-
ous time formulation of the model is important, even if our ultimate aim is only
to predict the future discrete observations of the variables.
   We shall consider the system:

      dy(t)    = [@)~(t)+b@>l               dr +3(d+                                  (28)
wherey(t)=[y,(t),...,    y,(t)]’ is a vector whose elements are random processes,
A( ~9)is an n x n matrix whose elements are functions of a vector 13= [fl,, . . . , S,,] of
structural parameters and b(8) is a vector whose elements are functions of 0. We
assume that p -Cn2, so that the matrix A is restricted. In the simplest case, where
the only a priori restrictions are that certain variables have no direct causal
influence on certain other variables, the only restrictions on A are that certain
specified elements of this matrix are zero, and 8 is then the vector of unrestricted
elements of A. With regard to the disturbance vector {(dt) we introduce the
following assumption.
Assumption I

      l=     [L...,Ll
is a vector of random measures defined on all subsets of the line - co < t < 00
with finite Lebesgue measure, such that

      E[l(dt)]      = 0,         E[J.(dt)Y(dt)]   = (dt)Z
where 2 is a positive definite matrix.
   Equation (28) will be interpreted as meaning that the vector random process
y(t) satisfies the system:

      .Y@>- ~(0) = jdM+(r)+b(8)1                    dr + /,(Z(dr),                    (29)

for all t. With respect to this system, we shall now prove a theorem which
generalizes Theorem 2.
Theorem 3

If ,Csatisfies Assumption 1, then:
   (a) for any given n X 1 vector y(O), the system (29) has a solution:

      r(t)    =~(f-~)n(e)~(dr)+efA(B'[y(0)+A-l(e)b(e)]

                 - A-l(e)b(e),                                                        (30)
1168                                                                 A. R. Bergstrom


where, for any matrix A, eA is defined by


       eA=Z+      c $A’;
                 r=l     .



   (b) the solution (30) is unique in the class of mean square continuous vector
processes, i.e. if j(t) is any other vector of mean square continuous processes
satisfying (29) and j(O) = y(O), then (21) holds on any interval [0, T];
   (c) the solution (30) satisfies the system

       I+)   = NG(t          -l)+g@)+Er                                        (31)

of stochastic difference equations, where

       F=eA,           g= (eA - Z)A-‘6,        E( E,) = 0,

       E(E,E;)=Jole’A~e’A’dr=n,               E(&)=O,        sft.


Proof

   (a) For the purpose of the proof we shall assume that A has distinct eigenval-
ues, Ar,...,h,, although this is not essential for the validity of the theorem. We
then have:

       A = H-‘AH,

where




and H is a matrix whose columns are eigenvectors of A. Now define:

       z(t) = Hy(t).

Then, from (29):

       z(t)-z(O)=Jol[Az(r)+Hb]dr+JorH[(dr).                                   (32)
Ch. 20: Continuous       Time Stochastic Models                                               1169

Clearly, H{ is a vector of random measures, such that:

       E[ (H{(dt)(        H[(dt))‘]       = (dt)HZH’.

Each equation in the system (32) satisfies the conditions of Theorem 2, therefore,
and, by a direct application of that theorem to each equation in the system, we
obtain the solution:

       z(t) =/‘e (‘-‘)*H{(dr)+e’*[z(~)+A-‘Hb]-K’Hb.                                           (33)
                0


Then, premultiplying (33) by HP ‘, we obtain:


       y(t) = j,lH- ‘e(‘-‘)*H{(dr)+                     Hp’e’*H[y(0)+             HplAp’Hb]

               - H-‘K’Hb.
                                                                                              (34)

But:


       H-‘e”*H=HP’
                                 [
                                     I+fA+cA2+
                                                                1
                                                            ... H


                     =I+tHAH+;HplAHHplAH+                                   ...


                     =IfrA+$P+                    ...

                     _     IA




Equation (34) can, therefore, be written as (30).
  (b) It follows from Theorem (2) that (33) is a unique solution to (32) and,
hence, (34) or (30) is a unique solution to (29) in the class of mean square
continuous vector processes.
  (c) Let z(t) be the vector random process defined by (33). Then

       z(t) = en/‘-l            e~‘~‘~‘~*H~(dr)+e”e~‘~‘~“[z(0)+A~’Hb]
                     0

               -e*A-‘Hb               + (e* - I)A-‘Hb          + /’       e(‘-‘)*H{(dr)
                                                                    f-l

            =e*z(t-l)+(e*-                  l)A-lb+/’               e(‘-‘)*H{(dr).            (35)
                                                              t-1
1170                                                                                       A. R. Bergstrom


Premultiplying (35) by H-‘, we obtain:



where

       Et=        t    e(t-')A{(dr).                                                                  (36)
             /
                 t-1


It is clear from the definition of the integral that:


       E(Et) = E                         e(rer)A{(dr)]          =0.
And, using the generalizations of (15) and (16) for a vector random measure, we
obtain:

       E( E,E;) = E 1: le(‘~‘)AS(dr)~~                                ie’“‘“~(dr      )]
                   ]
                                t
                       =                 e(t-‘)AZ’e(t-‘)Af]&.
                           / t-l     [

                                1
                       =            erAZerA’dr = s2,
                           /0


       E( E,E:) = E [~te(“~“)A[(dr)~~                                 le”-r)A~(dr)]
                                [
                       = 0,               s#t.         n

   We shall refer to the system (31) as the exact discrete model corresponding to
the continuous time model (29). It should be emphasized that, unlike the
continuous time model from which it is derived, the exact discrete model is not a
system of structural relations. It cannot be interpreted as a system of causal
relations in which each equation describes the direct response of one variable to
the stimulus provided by other variables in the system. For each coefficient in the
matrix F will reflect the interaction between all variables in the system during the
observation period. Even if the only a priori restrictions on the matrix A are that
certain elements of this matrix are zero, in which case B is a vector whose elements
are the unrestricted elements of A, the elements of F will be complicated
transcendental functions of the elements of B and will, generally, be all non-zero.
And, even if 2 is a diagonal matrix, the elements of D will, generally, be all
non-zero.
   The relation of the exact discrete model (31) to the continuous time model (29)
is rather similar, therefore, to that of the reduced form of a simultaneous
Ch. JO: Continuous Time Stochastic Models                                         1171

equations model to the structural form of the model. And, as we shall see, the
relation between the exact discrete model of a continuous time model and
the reduced form of a simultaneous equations model, used to approximate the
continuous time model, plays an important role in the analysis of the properties
of various estimators.


2.3.   Estimation

It is easy to see that a necessary and sufficient condition for the identifiability of
the parameter vector B in the model (29) is that the correspondence between 8 and
[F(B), g(B)] is one to one. But this condition is more restrictive than it might, at
first sight, appear to be. It is more restrictive than the condition that the
correspondence between 0 and [A(B), b(O)] is one to one. For the equation


                                                                                 (37)

 will, generally, not have a unique solution unless A is restricted. This is because,
if A is a matrix satisfying (37) and some of its eigenvalues are complex, then by
adding to each pair of conjugate complex eigenvalues the imaginary numbers
2in17 and - 2inII, respectively, where n is an integer, we obtain another matrix
satisfying (37). For identifiability the restrictions on A must be sufficient to
exclude any other matrix obtained in this way.
   The real problem here is that, unless our model incorporates sufficient a priori
restrictions we cannot distinguish between structures generating oscillations whose
frequencies differ by integer multiples of the observation period. This phenome-
non is known as aliasing. The identification problem is more complicated for
continuous time models, therefore, than it is for discrete time models. For a fuller
discussion of the identification problem the reader is referred to Phillips (1973)
who derives a rank condition for identifiability in the case in which each a priori
restriction on A is a linear homogeneous relation between the elements of a row of
A.’ We shall assume throughout the rest of this section that 0 is identifiable.
   In the discussion of estimation methods we shall assume, initially, that the
sample is of the form y(l),. . . J(T) as it would be if all variables were stock
variables or prices at points of time. The complications arising when some or all
of the variables are observable only as integrals will be discussed later.
   The problem of estimating 8 is equivalent to the problem of estimating [F, g]
subject to the restriction that this matrix can be written as [F(d), g( t?)] for some
vector 8 in p-dimensional space (or the subset of this space to which B is required
to belong). As we have seen this restriction is very complicated, even in the
  ‘See also the recentcontributions of Hansen and Sargent (1981, 1983).
1172                                                                        A. R. Bergstrom


simplest cases, and the computational problem of obtaining a consistent estimate
of 6 in a large model is such that it is worth considering methods based on an
approximate discrete model. Such methods are likely to be useful in any research
programme, at least for the preliminary screening of hypotheses.
   An obvious approximation can be obtained from (29) by using f [ y( I)+ y( t - l)]
as an approximation for /,L,y(r)d r. This gives the approximate simultaneous
equations model:

       Y(t)-y(t-l)=rA(e)[y(t)+y(t-l)l+b(e)+u,,                                        (38)
       E(u,)=O,         E( a,~;) = 2,          E( u,u;) = 0,   s # t,   s, t =1,2 )... .

The model is approximate because, if U, is defined in such a way that (38) holds
exactly, then the condition E( u,u,) = 0, s # t, will be only approximately satisfied.
  We can write the model (38) in the reduced form:

       r(t) = 4(a+           -1)+&W+%                                                 (39)
where

       II,=     [z-&4]-‘[z++A],
       II,=     [I-&l-‘b,
         cl,=   [r-&4-‘u,,
so that

       E(q) = 0,        E(u,u;)=    [Z-+A]-‘z[Z-$A’]-‘,
       E( u,u;) = 0,        sz t,    s,t=1,2     )....

   The use of the approximate simultaneous equations model (38) is particularly
convenient when the elements of A(B) are linear functions of 0. For then we can
estimate 6’by applying a non-iterative procedure, such as two-stage least squares
or three-stage least squares, to this model, as if it were the true model. But even
the application of the full information quasi-maximum likelihood procedure to
(38) is computationally simpler than the application of the same procedure to the
exact discrete model (31). Estimates obtained by any of these methods will, of
course, be asymptotically biased because of the error of specification in the model
(38). It is important, therefore, that we should investigate the sampling properties
of these estimators when the data have been generated by the continuous time
model (29) or, equivalently, by the exact discrete model (31).
Ch. 20: Continuous Twne Stochastic Models                                         1173

   Such an investigation was undertaken by Bergstrom (1966). The central idea
which was put forward in this article, and further discussed in Bergstrom (1967,
ch. 9), is that the restrictions on the matrix [II,, II,] of reduced form coefficients
of the approximate simultaneous equations model can be regarded as convenient
approximations to the restrictions on the matrix [F, g] of coefficients of the exact
discrete model. In particular, if the elements of [A, b] are linear functions of 0,
then the elements of [II,, II,,] will be rational functions of 19whereas the elements
of [F, g] will be complicated transcendental functions of 8. Some idea of the
goodness of the approximation can be obtained by comparing the power series
expansions:

      II,=    [z++A+$A2+$A3+ ._.][z+fA]
             =z+A+‘A2+1A3+
                     2   4            . . .



and

      F=Z+A+lA2+lA3+
                2    6              . . . .



It should be noted, however, that whereas the power series expansion of F is
convergent for any matrix A that of II, is convergent only if the eigenvalues of A
lie within the unit circle [see Halmos (1958, ch. 4)].
   We shall now introduce two more assumptions.
Assumption 2
The vector process /,$(dr)       is Gaussian.
Assumption 3
The eigenvalues of A(e’) (where 8’ is the true parameter vector) have negative
real parts.
   Assumption 2 is introduced in order to ensure that the disturbance vectors E[,
t =1,2 ,..., in the system (31) are independently and identically distributed. The
fact that it implies that they are normally distributed is incidental. Once we have
assumed that the orthogonal increments (corresponding to a sequence of intervals
of equal length) in the process &{(dr) are independently and identically distrib-
uted we are committed to assuming that they are normal. This can be seen by
dividing the interval [0, t] into n equal subintervals and applying the Lindberg-Levy
central limit theorem [see Cramer (1951, p. 215)] to the sum C:=,/(:1/;,,,,{(dr),
when n + cc.
   Assumption 3 implies that the eigenvalues of F(d’) lie within the unit circle. It
follows, by applying the results of Mann and Wald (1943) to the system (31), that,
under Assumptions 2 and 3, the sample mean vector (l/T)Cr=,y(           t) and sample
1174                                                                     A. R. Bergstrom


moment matrices (l/T)C~=,y(t)y’(t)         and <l/~>CT=,y(t>y’(t      -1) converge in
probability, as T-+ 00, to limits which do not depend on y(0) and that
(I/fi)C;=i~(t)e:     h as a limiting normal distribution. In establishing these results
Mann and Wald assumed that E,, Q, . . . have finite fourth moments. Although
Assumption 2 ensures that this condition is satisfied it is now known to be
unnecessary [see Anderson (1959) and Hannan (1970, ch. 6)].
   Since the probability limits of the sample moments of r(t) can be expressed as
functions of F, g and Sz, and hence as functions of @and 2, we can, in principle,
find a formula for the asymptotic bias of any estimator of 8 which can be
expressed as a vector of rational functions of the sample moments. This is the
case with the estimator obtained by applying two-stage least squares or three-stage
least squares to the approximate simultaneous equations model (38). The formula
would express the asymptotic bias of such an estimator in terms of the parameters
of the continuous time model, i.e. the elements of 0 and .X It would, of course, be
very cumbersome if written out explicitly. But it is implicit in the calculations of
Bergstrom (1966) who derives the asymptotic bias and approximate sampling
variances of the estimates obtained by applying three-stage least squares to the
approximate simultaneous equations model when the data are generated by a
three equation continuous time model of the form (29).
    In this example it is assumed that b = 0,2 = I and that the only restrictions on
A are that three of its elements are zero so that 8 is a vector of the unrestricted
elements of A. The assumed matrix A and derived matrix F are:



                                          1
              -1.0        0.8       0.0
                                            ,
       A= i     0.1
                0.0       0.0
                       -0.5       -0.2
                                    0.2



            [
              0.369    0.382      0.046
                                            .
       F=     0.056
              0.006    0.023
                       0.608      0.820 1
                                  0.142

The interpretation of A, assuming that the time unit is 3 months, is that y, is
causally dependent on y,, y, on ys and ys on y, with mean time lags of 3 months, 6
months and 15 months, respectively. The probability limits of the estimators a
and fii obtained by applying three-stage least squares to the approximate
simultaneous equations model of the form (38) are:


       plim a = [
                      - 0.922
                        0.000
                        0.098
                                    0.710
                                  - 0.488
                                    0.000
                                                  0.000
                                                       1
                                                  0.193 )
                                                -0.199
                                          0.034
                                0.609     0.141 1 .
                                0.017     0.821
Ch. 10: Continuous Time Stochastic Models                                       1175


   It is interesting to note that the estimated reduced form matrix h, provides a
remarkably good estimator of the matrix F of coefficients in the exact discrete
model, whereas a is a somewhat less satisfactory estimator of A. A heuristic
explanation of this is that, even if there were no a priori restrictions on A, A^
would be an astymptotically biased estimator of this matrix whereas h, would, in
this case, be identical with the least squares estimator F* and, therefore, a
consistent estimator of F. [See Bergstrom (1966, 1967) for a further discussion of
this point and a proposed two stage estimator of A based on fir.]
   Since it is the matrix F which is of interest for the purpose of predicting future
discrete observations, it is important to consider the question of whether or not it
would be better, for this purpose, to use the least squares estimator F* when A is
restricted. Since F* is a consistent estimator of F while fir is not, it would always
be better to use F* rather than fir if the sample size were sufficiently large. But
with smaller samples the bias in any element of fir (as an estimator of the
corresponding element of F) will be more than outweighed by its lower variance
as compared with the variance of the corresponding element of F*. Calculations
presented in Bergstrom (1966) show that for the above example with a sample of
100 observations the reduction in the variance obtained by using II, rather than
F* heavily outweighs the squared asymptotic bias in any element of fir.
    The results of the above study suggest that the simultaneous equations model
(38) is likely to be a useful approximation for the purpose of estimating the
parameters of the underlying continuous time model from quarterly observations,
and that the predictions obtained from the reduced form of this model, when the
structural parameters are estimated by three-stage least squares, are likely to be
better than those obtained from the ordinary least squares estimates of the
coefficient of the exact discrete model ignoring the a priori restrictions. But there
is, clearly, a need for a more general study, comparing the sampling properties of
various estimators, applied to various approximate discrete models. An important
step in this direction was taken by Sargan (1974, 1976). He generalizes the model
(29) by including exogenous variables and considers the asymptotic bias of
estimators obtained by applying the methods of two-stage least squares, three-stage
least squares and full information maximum likelihood to the approximate
simultaneous equations model (38), extended to include exogenous variables. He
shows, in particular, that the proportional asymptotic bias of all of these
estimators is of the same order of smallness as the square of the observation
period as this tends to zero.
    The econometrician cannot, of course, obtain observations of macroeconomic
variables at arbitrary small intervals of time. He must, generally, do the best that
he can with quarterly observations of such variables as the gross national product
and its components. But the results of the study by Bergstrom (1966), which
assumes a realistic pattern of time lags and quarterly observations, suggest that
Sargan’s criterion may, nevertheless, be useful for the ranking of various estima-
1176                                                                                      A. R. Bergstrom


tors and various approximate discrete models. Since Sargan uses only one
approximate discrete model, and the asymptotic bias of each of the three
estimators considered by him is of the same order of smallness, the significance of
his results could, easily, be overlooked. Before proving his basic result, therefore,
we shall apply his method to an even simpler approximate discrete model, which
has been more widely used than (38). This is the model:

       ~(t)-J+-l)=A(e)y(r-l)+b(e)+u,,                                                                (40)
       E(q)=09           E( u,u;) = 2,        E( u,u;) = 0,               s # 1,      s, t =1,2 )... .

We shall show that estimates obtained from the model (40) will be inferior to
those obtained from (38) if the observation period is sufficiently short and the
data are generated by (29).
   We assume, for this purpose, that b = 0 and that the only other a priori
restrictions are that certain elements of A are zero so that 0 is the vector of
unrestricted elements of A. The continuous time model (28) can then be written:

       dy,(t)   = V’y”‘(t)dt      +[,(dt),          i=l   ,.-.,   n,                                (41)

where y,(t) is the ith element of y(t), 0 (‘) is the vector of unrestricted elements
of the i th row of A and y(“( t) is a vector of the corresponding elements of y(t).
The system (29) by which we give a precise interpretation of (28) can be written:

       X(+v,(O)        =Jo(B”‘Y”‘(‘)d’+l,ti;(dr),                      i=l ,.-., n.                 (42)

   Following Sargan we shall keep the time unit constant and denote the observa-
tion period by 6 so that we can consider the behaviour of our estimators as 6 -+ 0
while keeping the elements of 8 constant. Then, defining y, = y(r6), the exact
discrete model is:

       Y, = esAyr-,
                 + q,                                                                               (43)
       E(eJ = 0,         E( E&) = &‘erAZerA’dr,

       E( E,E;) = 0,       s#t,     s,t=1,2    )....

The approximate discrete model (40) can be written:




We can now show that the asymptotic                    bias of the estimator 8* obtained by
Ch. 20: Continuous       Time Stochustic Models                                  1111

applying ordinary least squares to each equation of the system (44) is O(6) as
6 -+ 0.
Theorem 4

If 8* is the estimator obtained from a sample yi, y,,. . . ,y, [i.e. y(6),
y(26), . . . ,y( TS)] of vectors generated by (42) by applying ordinary least squares
to each equation of (44), then, under Assumptions 1, 2 and 3:

        plim@*--6=0(a),                   as6-+0.
        T-00


Proof
From (43) we obtain:


                [A+$4’+$13+
        $(Y,-v,J=         ..


                             = Ay,_, + Hy,_, +      f&t,
where

     H= O(6).

  The system (45) can be written:

      Y,, - Yi,r-1                        h;y,_ 1 + %,
                         =   Wy,?l    +                    i=l,...,n,            (46)
               6


where h; is the ith row of H and E,, is the ith element of E,. Then the estimator
e*(I) obtained by applying ordinary least squares to the i th equation of (44) is:




But, from the Mann and Wald results:
                     T

      plim + C r/?ieit = 0
      T-00         f=l
                                                                                    A. R. Bergstrom
1178

and

                      T
       plim f      C y,_,y,‘_, exists.
       T+CC        I=1



Therefore:

       plim8*(“-8(‘)=O(h,)=0(6),                           asS-+O.      n
       T-00


  We shall consider, next, estimates obtained by using the approximate simulta-
neous equations model (38). When the continuous time model is (42), the system
(38) can be written:

       Y,, - Y*,,-1          =e(‘)[f(y,“‘+   y/?,)]+ujt,             i=l ,.-., n.              (47)
               8


We shall prove a theorem which includes, as a special case, Sargan’s basic
theorem (when there are no exogenous variables).
Theorem 5

Let 8”’ be the instrumental variables estimator, defined by:




where yr,. . . ,yT [i.e. y( 6), . . . ,y(T6)] are vectors generated by (42) and zj”, . . . ,z$’
are random row vectors such that:

                      T
        plim f        C ei,zji)= 0,
        T-00        r=1


while

                         T                                  T
        plim + C yt(‘)zl(‘) and               plim f        c y/?rz,“’ exist.
        T+CC        r=l                       T-a,         t=1


Then, under Assumptions 1, 2 and 3:

        plim8(‘)-6(‘)=0(62),                 asa+O.
        T-+W
Ch. 20: Conirnuow Time Srochastic Models                                                            1179


Proof
Using (43), we obtain:

        ;(Y,-Y,)=[~+$4’+$4’+                           . ..]Y._*+&




                            = +Ay,_, +.fAesAy,_l + Ly,_, +      It

where
        L = O(62).

Therefore
        Y,, - Y,,,-I = $fW(
              6
                                        y/l’+
                                          y/L’,)+
                                             /,!y,_,
                                                +fqc
                                                   -gw,,
where 1,’is the ith row of L. And, hence:

        e(l)=
                [
                    f   i
                        r=l       (
                                  +e(~)(~y)+ y,ol)+l;y,_,+
                                                       -1
                                                               +,,-le(%,
                                                                                1+)
                                                                                      1



             I$ ;
                x
                            t=1
                                  +(y,“‘+ yp,)zI(I)
                                                      I
            =I (e(l)+         f   i
                                  r=1
                                        qy,_l+   & - ie(ibr
                                                              ) I[+ili(
                                                              zJi)              yp + y,(i),) zji)
                                                                                                    1
                                                                                                        -1
                                                                                                             .


Therefore



   The two-stage least squares estimator is obtained                       as a special case of the
estimator 8”) by putting:

     $) = +( YF(‘)+ y/:)J’,

where
1180                                                                       A. R. Bergstrom


   It is fairly obvious that the above argument can be extended to show that the
asymptotic bias of the three-stage least squares estimator of 0 is 0(S2). Sargan
(1976) shows that the asymptotic bias of the full information maximum likelihood
estimator [applied to (47)] is also O(S2) and that the difference between the limits
in probability of the three-stage least squares and full information maximum
likelihood estimators is 0( 8’). He also finds sufficient conditions for these results
to hold when the model contains exogenous variables. These conditions will be
given in Section 4.
   We turn now to the problem of finding consistent and asymptotically efficient
estimators of fl from discrete data generated by (29). For this purpose the
following additional assumptions are introduced.
Assumption 4
It is known that 8 belongs to a compact subset 0 of p-dimensional         space.
Assumption 5
Let ‘P be the subset of n X (n + 1) matrices which can be written in the form
[F(d), g(O)] for some B E 0, where


       zqe) = eA('),     g(e) = [eA(e)-z]A-l(e)b(e).

Then the mapping from 9 to 0 defined by the inverse of [F(O), g(O)] is one to
one and continuous in a neighbourhood of the true parameter vector 8’; i.e. every
sequenceP,n=1,2,...,     ofvectorsinOsuchthat[F(8”),g(8”)]+[F(8°),g(Bo)]
converges to 8’ as T -+ CO.
Assumption 6
The set 0 contains a neighbourhood of 8’ in which the derivatives up to the third
order of the elements of [F(8), g(O)] are bounded. The vector 8’ is not a
singularity point of [F(e), g(d)]; i.e. there is no set of numbers A,, . . . ,hp, not all
zero, such that:


       k@k$
          [fvO)9deo)l = 0.

  We shall consider, first, the minimum distance estimator 8** which is defined
as the vector 8 E 0 that minimises:
Ch. 20: Continuous Time Stochastic Models                                        1181

where


     M:,=+      i     [y(t)-F*y(t-l)-g*][y(t)-F*y(t-1)-g*]’,
                t=1


and F* and g* are the ordinary least squares estimators of F and g respectively.
The properties of this estimator have been studied by Malinvaud (1970, ch. 9)
when applied to the model:

     Yt=A(fl)x,+E,,                                                             (48)

where A is a matrix of non-linear functions of the parameter vector and x,,
t = 1,2,. . . , is a sequence of non-random vectors. Since the model (48) contains no
lagged dependent variables we cannot rely on Malinvaud’s results for inferring
the properties of the minimum distance estimator when applied to the model (31).
But, by using the Mann and Wald results and modifying Malinvaud’s proofs, we
can prove Theorems 6 and 7 which, together, correspond to theorem 5 of
Malinvaud (1970, ch. 9).
Theorem 6
Under Assumptions 1-5:

        plim 13**= 8’
        T-or,


Theorem 7
Under Assumptions 1-6, @( 6 ** - 6’) has a limiting normal distribution whose
covariance matrix is the limit is probability, as T -+ CO, of the inverse of the
matrix whose (kl)th element is:




                                                                                (49)
1182                                                                                A. R. Bergstrom

  Since the logarithm of the likelihood function is:


       L(e,L?)=-~log2~-~log,L-~                    2     [r(t)-F(B)y(t-l)-g(B)]‘W
                                                   r=l

                      x LA+     W>.Y(t      -wda          9                                    (50)
it follows from (49) that the covariance matrix of the limiting distribution                     of
JT(f3** - e”) is:


       -      T&J-‘.
             [E(
The estimator 8** is asymptotically efficient, therefore, in the sense defined by
Cramer (1946, ch. 32).
   For the purpose of predicting the future discrete observations of y(t), we are
interested in the estimator

       [P*,     g++] = [ F( e**>, g(e**)]

of the matrix of coefficients of the exact discrete model (31). By using (49) and the
argument of Malinvaud (1970, p. 357) we can show that the concentration
ellipsoid E** [in n(n +l) d’imensional space] of the limiting distribution of
[fi(F**-    P),fi(g**-       go)] is the set of n x (n + 1) matrices [F, g] that can be
written in the form:


       IF.Pl=~~~e~~[~(eo),g(eo)l,                                                              (51)
for some vector [e,, . . . , d,] and satisfy the inequality




       tr




Since the concentration ellipsoid E* of the limiting distribution of ]fi( F* -
F’),fl(g*  - go)] is the set of all matrices [F, g] satisfying (52) we have:
       E**    c E*.


In geometrical terms, E** is the intersection of E* with the hyperplane of
matrices defined by (51) i.e. it is the intersection of E* with the hyperplane of
Ch. 20: Conrinuous Time Stochastic   Models                                      1183

matrices satisfying the restrictions implied by the continuous time model in the
neighbourhood of [F”, go]= [F(@‘), g(e’)].
   This result implies that the asymptotic standard error of any element of
[F**, g**] (or any linear combination of such elements) is at least as small as the
asymptotic standard error of the corresponding element of [F*, g*] (or linear
combination of such elements). For it follows from the invariance property of the
concentration ellipsoid under a linear transformation [see Malinvaud (1970, ch. 5,
Lemma l)] that the asymptotic standard errors of identical linear combinations of
elements of [F**, g**] and [El, g*] can be compared by comparing the images of
E * * and E *, respectively, under a linear transformation which transforms n (n + 1)
dimensional space into the appropriate one dimensional subspace. Provided,
therefore, that the sample size is sufficiently large we can obtain better predictions
of the future discrete observations by using the continuous time model than by
using the unrestricted least squares estimates of the coefficients of the exact
discrete model.
   Finally we shall consider, very briefly, the maximum likelihood estimator. This
is obtained by maximising L( 8, a), as defined by (50), with respect to 13and 52.
We can do this in two stages. We first maximise L(8, s2) with respect to D to
obtain b(e) and then substitute into L(8, s2) to obtain the concentrated likeli-
hood function:

      L(e) = qe,si(e))         =c-iOgpf(e)l,
where c is a constant, ]M] is the determinant of M and


     we)=+t=li [Y(~)-F(e)Ytt-1)-gte)i[y(t)-Fte)Y(t-1)-g(e)i’.
Then the maximum likelihood estimator 6 is the 8 E 0 that maximises L(8). The
estimation equations, obtained by equating to zero the partial derivatives of L( 0)
with respect to 8,). . . , $, are:

      trM-1(e)$-h4(B)           = 0,       k =l,...,p.                          (53)
                        k
The estimation equations for the minimum distance estimator 0** are:

      trM~-l$M(e)            = 0,       k =l,...,p.                             (54)
                    k

The system (54) is easier to solve than (53) since the matrix M-‘(8)      in (53)
involves the unknown elements of 8, for which we are solving, whereas the matrix
ME:,’ in (54) can be computed as an initial step without iteration. Under
Assumptions 1-6 J?;(fi - 0’) has the same limiting distribution as fi(e** - 0’).
1184                                                                   A. R. Bergstrom


This follows from the results of Dunsmuir and Hannan (1976) who consider a
very general model which includes the exact discrete model (31) as a special case.
We shall consider their results in more detail at a later stage.
   It is of interest to compare the estimator 8** (or 4) obtained by using the exact
discrete model with an estimator obtained by applying either the three-stage least
squares or full information maximum likelihood method to an approximate
simultaneous equations model. We know that if the sample size is sufficiently
large the estimator obtained by using the exact discrete model will be better, since
it is consistent, whereas the estimator obtained by using the approximate simulta-
neous equations model has an asymptotic bias of the order 6*, as we have seen.
But, as the study of Bergstrom (1966) showed, for samples of the size available in
practice the squared asymptotic bias in an estimator obtained by using the
approximate simultaneous equations model can be small compared with the
sampling variance.
   A comparison of estimates obtained, from finite samples, by using the exact
discrete model and an approximate simultaneous equations model was under-
taken by Phillips (1972) who, for this purpose, wrote the first computer program
for obtaining consistent and asymptotically efficient estimates of the parameters
of a continuous time model, of the form (29), from discrete data. This program
was for the computation of the minimum distance estimator 8**, using the exact
discrete model. The first program for the computation of the more complicated
maximum likelihood estimator 4, using the exact discrete model, was written by
Wymer (1974) and applied to the model of Bergstrom and Wymer (1976) which
will be discussed later. The main difficulty in computing either O** or f? as
compared with estimators obtained from an approximate simultaneous equations
model is that F(B) must be expressed as a series of matrices and summed to a
sufficient number of terms to give the desired degree of accuracy.
   Phillips (1972) applied his program, in a Monte Carlo study, to a three
equation trade cycle model based on the model of Phillips (1954) [see Bergstrom
(1967, ch. 3)]. The model, in its deterministic form, is:
       DC(t)=a[(l-s)Y(t)+a-C(t)],                                                (55)
       DY(t)=X[C(t)+DK(t)-Y(t)],                                                 (56)
       DK(t)=y[uY(t)-K(t)].                                                      (57)
where C = consumption, Y = income and K = capital. By adding white noise
disturbances and substituting for DK from (57) into (56) the model can be
written:
       dy(t)   = A(Qo)dt       + b(@)+l(dt),                                     (58)
where
Ch. 20: Continuous        Time Stochastic   Models                                        1185

   A hundred     synthetic samples each of 25 observations were generated by the
exact discrete model derived from (58) and used in the estimation of 9, both by
applying the minimum distance estimation procedure to the exact discrete model
and applying three-stage least squares to an approximate simultaneous equations
model. The results are shown in Table 2.1. As can be seen, the estimates obtained
by using the exact discrete model are, generally, superior to those obtained by
using the approximate simultaneous equations model. Moreover, considering the
smallness of the sample, the number of times that the 5% confidence interval,
computed from the estimated asymptotic standard errors, does not include the
true value of the parameter is, for the estimates obtained by applying the
minimum distance procedure to the exact discrete model, remarkably close to 5
(i.e. 7 for the parameters (Y,y, h and S, and 9 for u).
    In the above example Phillips assumed the existence of point observations of all
three variables. But the variables C(f) and Y(t) are flow variables and, in
practice, could be observed only as the integrals /,‘,C( r)dr and /,I iY(r)dr,
t=l2 ) )... . This does not, of course detract from the value of his study for the
general purpose of comparing estimates derived from point observations using the
exact discrete model and approximate simultaneous equations model. Moreover,
at the time when the study was undertaken, the theoretical problems of obtaining
consistent and asymptotically efficient estimates of the parameters of a continu-
ous time stochastic model, of the form (29), from flow data had not been seriously
studied. This is the problem to which we now turn. The essential difficulty is that,
 even when the continuous time model is a first-order system with white noise
 disturbances, the disturbances in the exact discrete model satisfied by the integral
 observations will be autocorrelated. The precise form of the autocorrelation is
given in the following theorem.

                                                       Table 2.1

 Parameter:                                                             x
 True value:                                   OY6            0:4      4.0      055       l0

 Minimum       distance
   Mean of the estimates                      0.5734        0.4016    4.0709   0.2537    2.0021
   Standard deviation of the
     estimates                                0.1410        0.0153    0.7077   0.0259    0.0149
   Root mean square error                     0.1435        0.0154    0.7112   0.0262    0.0150
   Number of wrong intervalsa                 I             I         7        I         9

 Three-stuge     least squares
   Mean of the estimates                      0.6652        0.4182    2.7444   0.2161    1.995
   Standard deviation of the
     estimates                                0.1800        0.0241    0.8015    0.0937   0.0311
   Root mean square error                     0.1914        0.0302    1.4896    0.0974   0.0311
   Number of wrong interval?                 10             3        62        17        3

   ‘Intervals not containing the true parameter value.
1186                                                                  A. R. Bergstrom


Theorem 8

If l(dt) satisfies Assumption 1, y(t) is the solution to (29) and yr is defined by:

       y,   =[(lAr)dr,
then y, satisfies the system:

       ,Y,= wbL,+          SW+%,                                                (59)
       Jh)      = 0,     E( w;)   = 41,        E(w/L)          = 4,
       E( WI;) = 0,        IS-ti>l,          s, t =1,2 )...)

where
        F=eA,          g = (eA - I)K’b,

       JZ,=pyz-            e’A)LY(Z-e’A’)A’-‘dr

              +~~-leA(Z_e(r-l)“)H(Z_e(~-l)~‘)eA~’-ldr,                          (60)

                                                                                (61)


Proof
From (29) we obtain:

                                                                                (62)
and hence:

       ~lly(‘)dr=A-‘[y(t)-y(r-l)]-A-‘b-A-’JI1lS(dr).                            (63)

Then, substituting from (31) into (63) and using (36), we obtain:


       /
            ~‘ly(r)dr=A-‘F[y(r-1)-y((-2)]
                                      e(‘-‘)“Z(dr)-l’-le”~l~r)A
                                                          1-2

                         -A-‘b-A-‘[Ij(dr),                                      (64)
Ch. 20: Continuous       Time Stochastic Models                                                                 1187

and then, from (62) and (64):




                                   -A-lb-/.-’                   f
                                                             / f-l
                                                                     S(dr),

which, since

      A-‘FA=‘K1[z+A+~A2+                                       -]A=F

and

      K’[F-Z]b=[F-Z]APb=g,

reduces to (59) with qt defined by:


      71t= / t A-l(e(‘-r)A                      - Z){(dr)
             f-1

                    ti_;lA-l(eA            _e(r-l-r)A
            +
                /                                               )S(W.                                           (65)

Finally, using the generalizations of (15) and (16) for a vector random measure we
obtain:

      E(q,q:) =[~lA-l(e(t-‘)A                            - Z)z(e(r-r)A’-           Z)A’-‘dr

                                   r-1
                                         p(eA           _e(t-l-‘)A                      (t-1-r)A’),yl&.
                         +                                              )X(eA’-     e
                              J t-2

                     =       olA~l(Z-e’A)Z’(Z-erA’)A”dr
                         /

                         +         1A-‘eA(Z-e”-‘)A)r(Z-e(‘-‘)A’)eA;4’~’dr
                                                                                                            3
                              /0

      E( q,qIpl)         = J,zlA-‘(eA                   -e(t-‘~‘)A)~(e(t~l~r)A’_                Z)A’-‘d,.
1188                                                                                A. R. Bergstrom


   It is clear from these results that {n,} is a vector moving average process of the
form:

       9,   =   E, +   C&I-*,                                                                   (66)
where

       Et&,)= 0,                E( EWE;)
                                      = K,           E( es&;) = 0,   s # t,   s, t =1,2 )...)


and C and K satisfy the equations:

       K+CKC’=il,                                                                               (67)

and

       CK=&.                                                                                    (68)

Equations (67) and (68) imply that the elements of C and K are functions of the
elements of L&,and 52, and, hence, of the elements of A and 2. The expressions
(60) and (61) can be written as infinite series in ascending powers of A and A’ by
expressing the matrix exponential functions, in the integrals, in series form and
integrating, term by term, with respect to r. Evaluating the terms up to the first
power of A in A’ we obtain:

       52,=)2++(A2+2~f)+                     ..-,                                               (69)
       L$=@++A~+@A’+                         ... .                                              (70)

  Phillips (1978) shows that, if the observation period is 6, then:


                                                                                                (71)

                                                                                                (72)

these equations being identical with (69) and (70) when 6 = 1. He also shows that:


       C=aZ+$(A-BA’X1)+0(62),                                                                   (73)


                                                                                                (74)
01. 20: Continuous Time Stochastic   Models                                                 1189

where (Y( = 0.268) is a root of the equation:



The first term on the right-hand side of (73) and (74) is easily obtained by
substituting the first term on the right hand side of (69) and (70) into (67) and
(68) respectively and solving for C and K.
   It is convenient, at this stage, to write Z as Z(p) where h is a vector of
parameters. If, as we have assumed so far, 2 is unrestricted then p will have
n( n + 1)/2 elements. But we could, for example, require 2 to be a diagonal
matrix in which case p would have n elements. We can now obtain the exact
discrete model corresponding to the continuous time model (29) for the case in
which the observations are in integral form. Combining (59) and (66) we obtain:

     Y,- F@)Y,-,        - g(B) = 8, + C(R f&-1,                                             (75)
      E(e,)=O,         E(e,e;)=K(Q),           E(&)=O,           s+t,      s,t=1,2     ... .

An important point to notice is that, even though the covariance matrix 2 of the
disturbance vector in the continuous time model does not depend on 8, the
covariance matrix K of the random vector E, in the exact discrete model depends
on 8 as well as p, as is clear from (67) and (68).
   If g is a zero vector (i.e. if b, in the continuous time model, is a zero vector),
then (75) is a special case of the model:


                                                                                            (76)
           /=I                           J=l




     E(q)=%           E(d) = WQ-4,             E(E,E;)
                                                    =O,          s z t,    s, t =1,2,...,

which was studied by Dunsmuir and Hannan (1976). They show, under certain
assumptions, that the maximum likelihood estimator of 0, in the model (76) is
strongly consistent (i.e. converges almost surely to 8). And, for the case in which
the matrices F,, . . . , Fq, C,, . . . , C, do not depend on p and K does not depend on 8,
so that these matrices can be written Fl( e), . . . , Fq( t?), C,(e), . . . , C,( 0) and K(p),
they prove a central limit theorem. But, as we have shown, the matrices C and K
in the model (75) depend on both 0 and p, The case in which the matrices
F,, . . . ,F,, C,, . . ., C, and K, in the model (76), all depend on both 0 and p was
further considered by Dunsmuir (1979). Here he proves a central limit theorem
for an estimator obtained by maximising an approximate likelihood function
expressed in terms of the discrete Fourier transform of the data. [This estimator
was proved to be strongly consistent by Dunsmuir and Hannan (1976).] His
results imply that when {E, } is Gaussian this estimator is asymptotically efficient
Ch. 20: Conrinuous Time Stochastic Models                                                  1191

  Since   E!.(~J;)   = 0,1s- t1> 1, we obtain,                    from (SO):



                                                       J=o




                                                       +     ,co
                                                               [zv)IJ+lww[      wq]f-S+J
                                                   = v,,(k d,           t 2s.              (81)
By using (60), (61) and the series expansion of F(B) = eACe),the matrix V,,(e, P)
can be expressed as a power series in A(B) and-A’(e) with each term involving
2( p-I>.Then the maximum likelihood estimator (8, p) is obtained by maximising:

     L(e.tL)=l0glV(e,II)I+[(Y1-m(e))‘,...,(y,-m(e))’][V(e,~)1-’
                          YlPe)
                     x        :                    )                                       (84
                         I 1)T-h               I
where V(0, cl) is the nT x nT matrix whose (st)th n x n block is V,,(r3,p).
   Because of the computational difficulty of maximising L(r9, p) it is useful to
consider estimates based on approximate models, even if these are not consistent.
A simple approximate model is obtained by replacing C by aZ, which is the limit,
as 6 + 0, of the right-hand side of (73). In place of (75) we then have:

     y, - F(e)y,_,        -g(e)             = &, + azEt_l.                                 (83)

Then we can define the vectors y,“’ , . . . ,yp) by the transformation:

                              Z                        0          ...

                          - al                         Z
                                                                                           (84)
                                  T-1                        -2
                          4             1      (- Cl)‘- I         ...

and, assuming that e(0) = 0, we obtain:
1192                                                                               A. R. Bergstrom


which can be treated like (31). A procedure which is approximately equivalent to
this was used by Bergstrom and Wymer (1976) who applied the transformation:




We could also use the transformation (84) or (86) and then the approximate
simultaneous equations model (38) which would be even simpler.
   A method which can be expected to yield better estimates was studied by
Phillips (1974b, 1978). His method is to obtain a preliminary estimate of A,
ignoring the a priori restrictions on this matrix, from data transformed by (84)
and then apply a second transformation:

                         I              0          . ..

                       -C                I         . . .
                                                                                             (87)

                   (-C)”           (_C)‘_’         ...


where C is computed from the first two terms on the right-hand side of (73), using
the preliminary estimates of A. He shows that the proportional asymptotic bias in
the estimates obtained in this way tends to zero as the observation period tends to
zero.
   Having dealt with the cases in which the data are all point observations or all
integrals we can easily deal with the case in which the data are mixed, with some
variables being observed at points of time and others as integrals. Suppose, for
example, that the first m variables are stock variables and the remaining
n - m variables            are flow variables,            so that the observations             are:
Yr(t), . ..,y,(t), /,l_rY,+,(r)dr,.       ..,l,\,Y;(r)dr,           t =l,..  .,T.   Then   we   can
solve the first m equations of the system (62) to express /,‘, y,(r)dr,. . . ,
j; r~,,(r) dr in terms                of yl(t)-         yl(t - 1). . . ,y,(t)-         y,(t - l),
  r g,,,+l(r)dr,.    . .j /,‘_,y,,(r) dr, /,‘,{,(dr),.     . . ,/,‘,S;,(dr).     Then substituting
into (59) we obtain a system in which all variables are in the form in which they
are observed and the disturbance vector is a vector moving average process whose
autocorrelation properties can easily be obtained as in the proof of Theorem 8.
The exact likelihood function can then be obtained in the same way as (82).
   The feasibility of the methods discussed in this section has been demonstrated
by Bergstrom and Wymer (1976) who applied them in the construction of a
continuous time model of the United Kingdom. This model is a closed first order
system of 13 non-linear differential equations with 35 parameters including three
trend parameters to represent technical progress, the growth of the labour supply
and growth in the demand for exports. For the purpose of estimation the model
Ch. 20: Continuous   Time Stochastic Models                                                  1193

was represented by a system similar to (28) with the addition of trend terms, by
taking a linear approximation about the sample means and adding white noise
disturbances. The resulting matrix [ A( 19),b(O)] implies quite complicated non-lin-
ear cross equation restrictions, derived from economic theory. The estimate of 8
was obtained from quarterly data, for the years 1955-1966, by applying the
method of full information maximum likelihood to a system similar to (85)
(including derived trend terms) with the vector y/” defined by (86).
   An intensive mathematical study of the steady state and asymptotic stability
properties of the original model (i.e. not the linear approximation used for
estimation) shows that it generates plausible long-run behaviour for the estimated
values of the parameters. Moreover, post sample predictions for the period
1969-1970 are remarkably accurate in view of the fact that the model contains no
exogenous variables and the predictions are for a period up to eight quarters
ahead of the latest data used in making them. But it should be possible to
improve on this predictive performance by using a second or higher order system
of differential equations. Such a system could represent more accurately the
dynamics of the partial adjustment relations and allow a more satisfactory
treatment of expectations.


3.    Higher order systems*

We shall consider the system:

       d[Dk-‘y(t)]      = Ar(fl)Dk-‘y(t)+       ... + A,_,(B)Dy(t)

                           + A,(e)y(t)+bte)+S(dt),                                          (88)

where {y(t)} is a vector random process, A,(e), . . . ,Ak(fl) are n x n matrices
whose elements are functions of the parameter vector 8, b(B) is an n x 1 vector
whose elements are functions of 8 and [(dt) is a vector of white noise dis-
turbances, i.e. a vector satisfying Assumption 1. The system (88) will be interpre-
ted as meaning that r(t) satisfies:

       o~-l~(t)-D”-‘y(o)=~[~~(e)~~-l~(~)+                      ...   +A,_l(e)or(r)

                                     + 4mw+w]                  dr + /dStdr),                (89)
for all t.

     ‘For a more general and comprehensive treatment of higher order systems, see Bergstrom (1982)
1194                                                                  A. R. Bergstrom

   The assumption that the disturbances are white noise is more easily justified in
a higher order system than in a first order system. An econometric model
comprising a system of stochastic differential equations is usually obtained by,
heuristically, adding disturbance functions to a non-stochastic system of differen-
tial equations which may be derived from certain optimisation assumptions and
would hold exactly under certain ideal conditions. These conditions might in-
clude, for example, the conditions that each agent’s objective function remains
constant and contains no variables other than those in the model, that his
assumptions about the random processes generating these variables are constant
and that the physical constraints on his behaviour are constant. The disturbances
are added to take account of the fact that none of these things is really constant.
Although it is difficult to justify the assumption that they are white noise
disturbances, it is not unrealistic to assume that they are random processes
generated by an unknown system of stochastic differential equations with white
noise disturbances. Indeed the physical processes generating many of the non-
economic variables that affect economic behaviour will be approximately of this
form. We can, in this case, transform our original model into a higher order
system of stochastic differential equations with white noise disturbances.
   Suppose, for example, that the original model is a proper first order stochastic
differential equation system:


       Dr(d = @b(t)+t(th                                                       (90)

with a mean square continuous disturbance vector E(t) generated by this system:


       dt(t) = Qt(d+l(dt),                                                     (91)

where Q is a n x n matrix of unknown constants and {(dt) satisfies Assumption 1.
The system (91) can be interpreted as meaning that


                                                                               (92)


holds for all t. From (90) and (92) we obtain:


       DA+W(O)-QpA’)dr               = A(~b(+W%@)
Ch. 10: Continuous Time Stochastic Models                                         1195

and   hence

      DY(~)-Dy(O)       = [Q + Nd)lldDy(r)dr           - PA@)J:y(r)dr

                           + /ofW).                                               (93)

The system (93) is of the same form as (89) with k = 2. It can be written as:

      d[Dy(t)l=      iQ+@)l        Dy(t)-QA(e)y(t)+S(dt),                        (94
which is of the same form as (88) and is interpreted as meaning that (93) holds for
all t. Obviously Q and A will not be identifiable if A is unrestricted since, in this
case, interchanging Q and A will not affect (93) and (94). But, in practice, A will
be severely restricted by the requirement that its elements be known functions
0f e.
   Systems of stochastic differential equations of order k > 1 are discussed by
Wymer (1972) who, following Sargan (1974, 1976) (the main results of which were
available in a preliminary mimeographed paper in 1970), considers the properties
of an approximate simultaneous equations model when the observation period
tends to zero. Here, for simplicity, we shall start by considering the second order
system, which is likely to be of considerable practical importance. We shall
consider estimates based on both the exact discrete model and the approximate
simultaneous equations model and then indicate, briefly, how the results can be
extended to systems of order greater than two.
   The second-order system to be considered is:

      d[DAt)l     = A,(e)Dy(l)+A,(e)y(t)+b(e)+S(dt),                              (95)
which is interpreted as meaning that y(t) satisfies:

      DY(+D.Y(O)        =Ju’[At(fl)Dy(r)+      A,(‘%+)+     b(e)] dr +&d+

                                                                                 (96)
for all t. We know, from Theorem 3, that the first-order system (29) has a solution
which is unique (with probability 1) in the class of mean square continuous vector
processes. It is natural, therefore, to seek a solution to (96) which is unique in the
class of vector processes whose first derivatives {Dy( t )} are mean square continu-
ous. It is easy to see (from the definition of differentiation, integration and mean
square continuity given in Section 2.1) that if {Dy( r)} is mean square continuous,
then

      y(+y(O)       =[DA’)dr.                                                    (97)
1196                                                                     A. R. Bergstrom

Combining (96) and (97) we have:




                                                                                   (98)

which is a first-order system of the form (29) in the 2n   x 1 vector:


        DYW
       [ YW   1.
   By Theorem 3 the system (98) has a solution which, for any given pair of n X 1
vectors y(0) and Dy(O), is unique in the class of random processes {y(t)} such
that {Dy( t)} is mean square continuous (since if the process {Dy( t)} exists the
process {y(t)} is, obviously, mean square continuous). And this solution satisfies
the stochastic difference equation system:




                                                                                   (99)


where




and




  The exact discrete model (99) cannot be used as a basis for estimation since
Dy(t) is not observable, even at discrete intervals. This is the reason why the
Ch. 20: Continuous   Time Stochastic Models                                      1197

second order system (or any higher order system) cannot be treated as a trivial
extension of the first order system as in the theory of ordinary linear differential
equations. An exact discrete model which can be used for estimation purposes can
be obtained by eliminating DY(t) from the system (99) to obtain a second order
difference equation system in Y(t). The precise form and properties of this system
are given in the following theorem.
Theorem 9

If {(dt) satisfies Assumption 1, then for any given pair of n x 1 vectors Y(0) and
DY(0) the system (96) has a solution which is unique in the class of random
vector processes { Y( t )} such that the process {Dy( t )} is mean square continuous,
i.e. if j(t) is any other such solution then (21) holds for any interval [0, T]. This
solution satisfies the stochastic difference equation:

      YW = &WY0              -I)+    W)r(t      -2)+    sW+     V,?            000)
      E(q,) = 0,          E( v:)    = a,,      E( st~;L,> = Q2,,
      E( w:)    = 0,        Is- tl >l,        s, t =1,2 )...)
where

        & = [eA121[eAlll[eA1211+[eA122,
      F2= ~~Al~l~~Al~~-~~A~~l~~A~~l~~A1211~~~l~~~
      ~=~~Al~~~~+{~-~~Al~~~~Al~~~~Al~‘}~~~


             x~{~eAl~~~er~l~~-~eAl~~~eAl~~~eAl~’~e~A
             +[[er”12J:[erA
                         Ihdr,                 ow
      52,=/,‘{ bA12JerAl~~-
                         ~~Al~l~~Al~l~~A1211~~‘A121}
             x ,Z[erA];, dr.                                                    (102)
Proof

The system (99) can be written:
1198                                                                 A. R. Bergstrom


From (103) we obtain:

       Du(~-1>=[e”111D~(~-2)+[eAl12~(~-2)+gl
               + / ‘-l [e(‘-l-‘)A]ll{(dr),                                   (105)
                         r-2


and from (104):


       W(t -1) = b%i’r(d- [eA1211k%_d~
                                   -lb [e’%i’g2
                      - ~e~l~1~~l~e~~~‘)A121~(d~),                           (106)

       D~(~-2)=~eAl~1~(~-1)-~eAl~1~eA122~(~-2)-~eAl~1
              - [eAliil~~l[e (‘-l-‘)“J2J(dr).  007)


Substituting from (106) and (107), for Dy(t - 1) and Dy(t - 2), respectively, into
(105) and premultiplying by (eAIZ1,we obtain the system (100) with:


       v,   =lL’{ [eA121[ecf-1-r)Alll
                                 -~eA121~eAlll~eAl~1~e(f~1~‘)A12
             + / t [e(‘-‘)A]21[(dr).                                         (108)
                r-l


Then, by using the generalizations of (15) and (16) for a vector random process,
we obtain:
Ch. 10: Continuous   Time Stochastic Models                                                  1199


      E(rl,G) = Is’{ b%[e (‘-l-r)A]ll - [eA]21[eA]ll[eA]~1[e(‘-1-r)A]21)
                       X X[e    (‘-l--rVdr
                     =~1{~~~121[~rA111-~~Al~l~~Al~~~~A1211~~r~l~~}
                       x    Z[e’“]&dr,

      E( WI;) = 0,            Is-11’1,        s,t=1,2   ,....   n


  The expressions (101) and (102) can be written as infinite series by expressing
the matrix exponential functions in the integrals in series form and integrating,
with respect to r, term by term. Evaluating the terms not involving A, and A, we
obtain:

      i&=+2+         ... ,                                                              (109)
      9,=;z+         ... .                                                              (110)


It is interesting to note that the first terms on the right-hand sides of (109) and
(110) are identical with the first terms on the right hand sides of (69) and (70),
respectively, which were obtained for the first order system with flow data.
   It is clear from Theorem 9 that, if 2 = Z(p), the exact discrete model
corresponding to (96) is:

      yw- W)r(t               -l)-   W)r(t     -2)-d@ = E, + wd+~-1~                    (111)
      EC&,)
         = 0,              E(e,E;)=K(Q),          E&&:)=0,          s#t,   s,t=1,2   ,...,

where C(0, ~1)and K(B, CL)satisfy (67) and (68) with s2,(8, cl) and 52,(8, EL)given
by (101) and (102), respectively. The exact likelihood function can be obtained in
the same way as it was for the model (75). And, in view of the results of
Dunsmuir and Hannan (1976) and Dunsmuir (1979), we can expect the maximum
likelihood estimates to be strongly consistent, asymptotically normal and asymp-
totically efficient under fairly general assumptions.
   The model (111) can, of course, be used only if we have point observations. An
exact discrete model satisfied by the integral observations y, = /,t,y(r)dr,       t=
129 v-.*9 can be obtained by combining the arguments used in the proofs of
Theorems 8 and 9. Since the derivation is straight forward, but somewhat tedious,
we shall not set it out in detail. The first step is to derive the system which is
related to (98) in the same way as (59) is related to (29) with q, in (59) replaced by
1200                                                                                     A. R. Bergstrom

the expression on the right hand side of (65). This system is:




                             x       lcdr)       dr

                                 [    0      1        .
The exact discrete model, satisfied by the observations, is then obtained from
(112) in the same way as (100) was obtained from (99).
   Clearly, the disturbances in the exact discrete model, satisfied by the observa-
tions, will involve integrals with respect to {(dr) over the intervals (t - 3, t - 2),
(t - 2, t - 1) and (t - 1, t), so that, in place of (loo), we have:

       .Y,= W).YP,     + W)Y,-*           + gW+%
       E(v,) = 0,     E( ~1.11;)= a,,,            E( VPL)        = 4,   E( w-2)      =   92,     013)
       E( WI;) = 0,     IS - t1 > 2,             s,t=1,2      ,...)

where F,(8), F2(f3) and g(e) are defined in the same way as for (100) and s2,, 52,
and 9, are derived, from the rather complicated expression which we obtain for
q,, in the same way as Sz, and 52, were derived for (100). In place of (111) we have
an exact discrete model of the form:

       Y, - ue)y,-,    - F,(e)y,-,        - 0)            = 5 + c1(654EI-1     + C,044E,-Z5
                                                                                                 014)
       E(q)=O,        E(qE;)=K(B,/&                       E(E,~E;)=~,   s#t,       s,t=1,2     ... .

Again the exact likelihood function can be derived in the same way as it was for
(75).
Ch. JO: Continuous Time Stochastic Models                                          1201

  An approximate discrete model can be obtained by first approximating                 the
system (98) by the system:




where

     AY([) = Y(l)-         Y(l -l),          My(t)=~[y(t)+y(t-l)l.
This is of the same form as (38), but cannot be used as a basis for estimation since
DY(t) is not observable. Eliminating DY(t) we obtain the approximate simulta-
neous equations model:

     A2Y(t)=AIMAY(t)+A$f2Y(t)+b+~,.                                               (116)

Wymer (1972) shows that the disturbance vector u, is approximately a moving
average process with coefficient matrix cwlwhere a is a root of z* - 42 + 1 = 0. We
could, therefore, obtain a simultaneous equations model with an approximately
serially uncorrelated disturbance by applying the transformation (84).
   All of the above results can be extended to systems of order greater than two.
We start by considering the system:




          A,       A,          ...    A,_,     A,   Dk-‘y(r)

 =
                               ...      0      0    DkP2y(r)


                                                      y(r)



which is obtained from (89). From (117) we obtain, for point observations, the
exact discrete model:

     y(t)-F,y(t         -l)-    *** -F,y(t-k)-g=E,+CIEIPr+           ... +C+tErPk+r,
                                                                                  (118)
1202                                                                           A. R. Bergsrrom

which is a generalization of (111) and, for integral observations, the exact discrete
model:

       Yt-Fly,-,-   . . . - Fkyt_k -g = E( + C1~,-1 +     . . . +   Ck~,-/,r            (119)

which is a generalization of (114). It is understood that the elements of the
matrices F,, . . . , Fk in (118) and (119) are functions of the parameter vector 8 while
the elements of C, ,..., C,_, in (118) and C,,. ..,C, in (119) are functions of the
extended parameter vector (e, p). The corresponding matrices F;, i = l,..., k,
in (118) and (119) are identical, whereas the corresponding matrices Ci, i = 1,. . . , k
 - 1, in (118) and (119) are different.
   We can also obtain the approximate simultaneous equations model:

       Aky(t)=A,MAk~‘y(t)+A,M2Ak-*y(t)+...                +A,Mky(t)+b+u,,               (120)

in which U, is approximately a vector moving average process of order k - 1 [see
Wymer (1972)], and a similar model for integral observations, with a disturbance
vector which is approximately a vector moving average process of order k.


4.     The treatment of exogenous variables and more general models

We shall now extend the model (28) by including a vector x( t) = [x1(t), . . .,x,,,(t)]’
of exogenous variables. The x,(t), i =l,...,m,        can be either integrable non-
random functions or integrable random processes satisfying the condition that
E[x,(t){(dr)] = 0 for all real I and all intervals dr on the real line. In place of (28)
we have:

       G(t) = bf('J)~(r)+     W%(r)] dt +I-@+                                           (121)
which is interpreted as meaning that:




holds for all t. The elements of the n x m matrix B(e) are functions of the basic
parameter vector 8. There is no need to include a vector of constants since this
can be allowed for by letting x,(t) = 1.
   We are interested in the problem of estimating t9 from a sample of discrete
observations of the n + m variables yt(t), . . . ,y,(t), x,(t), . . . ,xm( t) when, in gen-
eral, the observations of some of these variables are point observations while the
remainder are integral observations. The simplest case, in principle, is where the
Ch. JO: Continuous   Time Stochastic   Models                                    1203


vector x(t) is itself generated by a stochastic differential equation system:

      dx(t)=Rx(t)dt+lX(dt),                                                     (123)

where S;(dt) is a white noise disturbance vector. We can then treat the system:




as a case of (29) by replacing 8 by an extended parameter vector comprising 8 and
the m2 elements of R. The exact likelihood function for the parameters of this
extended system can be obtained as in Section 2.3, the simplest case being where
the observations of all the variables are point observations and the most com-
plicated where the observations of some variables are point observations while the
remainder are integral observations. The assumption that x(t) is generated by a
system such as (123) will often be a good approximation even if x(t) is not, in
fact, generated by such a system. An even better approximation might be
obtained by assuming that x(t) is generated by a higher order system, which can
then be combined with (121) and treated by the methods of Section 3. But,
clearly, this would involve heavy computational costs.
   We turn now to less costly approximate methods. An obvious approximation is
the simultaneous equations model:

      ~(t)-~(t-l)=~A(e)[y(t)+y(t-l)]+~B(e)[x(t)+x(t-1)]+u,,

                                                                                (125)
      E(u,) = 0,           E( u,u;) = 2,        E( usu;) = 0,   s#t,

      E( x,u;) = 0,           s, t =1,2 )...)

which is a natural extension of (38). This model is approximate in the sense that,
if U, is defined in such a way that (125) holds exactly, then the conditions
E(U&) = 0, s # t, E(x&) = 0, s, 2 = 1,2,. ..) will be only approximately satisfied.
The use of the model (125) is particularly convenient when the only restrictions
on A and B are that certain elements of these matrices are zero (or some other
specified numbers) so that 8 is a vector of the unknown elements of A and B. For
this case, Sargan (1976) has made a thorough study of the behaviour of the
two-stage least squares, three-stage least squares and full information maximum
likelihood estimators as the observation period 6 tends to zero [for which purpose
the model can be reformulated like (47)]. He introduces three alternative assump-
1204                                                                      A. R. Bergstrom


tionS       the exogenous variables. Assumption 7 is the simpler of his two
          &out
          assumptions for the case of non-stochastic exogenous variables while
alternative
Assumption 8 is his assumption for the case of stochastic exogenous variables.

Assumption 7
   (i) d2x/dt2 exists and is bounded and continuous for all t, except a countable
set of points S. There exists a time period p such that the number of points of S
lying in the time interval (s, s + p) is less than or equal to d for any s.
   (ii) dx/dt exists and is bounded for all t except points of S.
   (iii) x(t) is bounded for all t. The size of the discontinuity of x(t) (which can
occur only at points of S) is bounded for all points of S.
Assumption 8
   (i) x(t) is generated by a strictly stationary ergodic process with E[x(t)x’(t +
r)] = L?,(r), all t.
   (ii) Q,(r) has one-sided derivatives at the origin up to the fourth order, so that
a one-sided Taylor series expansion of Q,(r) at the origin, up to the fourth power
of r, exists.
   (iii) L?,,(r) = E[x(t)y(t + r)‘] has positive one-sided first and second deriva-
tives at the origin, so that a one-sided Taylor series expansion of L?,,(r) at the
origin, up to the second power of r, exists.
   Sargan’s results imply that, under Assumptions 1,2,3 and either 7 or 8, the
asymptotic bias of the two-stage least squares, three-stage least squares and full
information maximum likelihood estimates are O(S2) as 6 + 0. Moreover, under
these assumptions, the difference between the limits in probability of the three-
stage least squares and full information maximum likelihood estimates are 0( S5)
as6-+0.
   Assumption 8 will be satisfied if x(t) is generated by the system (123). But it is
easy to prove directly, by an extension of the argument used in the proof of
Theorem 5, that, in this case, the asymptotic bias of the two-stage least squares
estimator is 0(S2) as 6 -+ 0. We can show that if A and E,, as used in Theorem 5,
are redefined for the extended model (124), then the elements of the first n rows of
the matrix:




are 0(S2) as 6 + 0, where x, = x( t6). It is obvious from this that Theorem 5
holds for the n equations of the model (125) when zj’), i = 1,. . . , n, are the vectors
of instruments that yield two-stage least squares estimates for these equations.
Moreover it would not be difficult to extend this argument to three-stage least
squares estimators.
Ch. 20: Continuous Time Stochastic   Models                                                        1205

  The discussion of the closed model, in Section 2, suggests that we should next
consider estimators based on the exact discrete model:

     ~(4    = eA(e)y(t -l)+[_ie           (‘-r)A(e)~(t - r)dr   + /’      e(fpr)A(e){(dr),    (126)
                                                                    f-l


which can be obtained by a fairly obvious revision of Theorems 2 and 3 to include
exogenous variables. Since we do not have a continuous record of x( t ), the model
(126) cannot be used directly as a basis for estimation. But it was used by Phillips
(1974a, 1976) in order to obtain a more complicated approximate discrete model
than that studied by Sargan. This is obtained by replacing x(t - r) in the first
integral on the right hand side of (126) by:

      n(r-r)=x(t)+i[3x(t)-4x(t-l)+x(t-2)]


                    +;[x(,)-Zx(r-1)+x(r-2)],

which is the quadratic function of r chosen so that a( t ) = x( t ), a( t - 1) = x( t - 1)
and .?( t - 2) = x( t - 2). Evaluating the integral we obtain the approximate dis-
crete model:

     y(t) = F(e)y(t        -1)+G,(B)x(t)+G,(8)x(t               -l)+G,(e)x(t         -2)+    u,,
                                                                                              (127)
      E(u,) = 0,        E( u,u;) = s2,          E( u,u;) = 0,    s # t,
      E( x,u;) = 0,        s,t=1,2      )...)

where




   In the above derivation we have identified the time unit with the observation
period as we would in practical applications. But, for the purpose of considering
the behaviour of the estimators as the observation period tends to zero, Phillips
follows Sargan’s procedure of introducing a parameter S to represent the observa-
tion period. If 6 Z 1, we must replace A and B by 6A and 6B,respectively, in the
expressions for F,G,,G, and G,.
1206                                                                      A. R. Bergstrom


   Phillips considers, first, the estimator of 19obtained by applying full informa-
tion maximum likelihood to the model (127) as if this were the true model, i.e. the
vector 0 that minimises:


       det f      i    {y(t)-F(@)y(t        -l)-G,(B)x(t)
                 f-l

               - G#)x(t       -l)-G,(e)x(l-2)}

               {Y(t>-F(e)Y(t-l>-G,(e)x(t)
                                                            1
               -G,(B)x(t-l)-G,(e)x(t-2))’                       .
                                                            J

He shows, under certain assumptions, that this estimator has a limiting normal
distribution as T + m and that the asymptotic bias is O(S2) as S + 0. But the
assumptions made for this purpose are stronger than Assumptions 7 or 8 and
require the exogenous variables to follow a smoother time path, whether random
or non-random, than the latter assumptions. In particular, they rule out the case
of exogenous variables generated by the first order stochastic differential equation
system (123), with white noise disturbances.
   Phillips then considers the properties of an instrumental variables estimator in
which the vector [y’(t - 2), x’(l), x’(t - 2), x’(t - 3)] is used as a vector of instru-
ments. He shows that the asymptotic bias of this estimator is 0(S3) under much
weaker assumptions which do not exclude exogenous variables generated by the
system (123). This method can be expected to give better estimates, therefore,
than the use of the approximate simultaneous equations model (125).
   We turn, finally, to a powerful method due to Robinson (1976a). This makes
use of a discrete Fourier transformation of the data and is applicable to a very
general model which includes, as special cases, systems of stochastic differential
equations and mixed systems of stochastic differential and difference equations.
Moreover, it does not assume that the disturbances are white noise. They are
assumed to be strictly stationary ergodic processes with unknown correlation of
functions. But the method is not applicable to a closed model.
   The model considered by Robinson can be written:

       y(t)=     Blmr(r,e)x(t          -r)dr+((t),                                (128)
                       -0Z
where y(t) is an n X 1 vector of endogenous variables, x(t) is an m X 1 vector of
exogenous variables, 5(t) is a disturbance vector, B is an n x 1 matrix of
parameters which are subject to specified linear restrictions (e.g. certain elements
of B could be specified as zero), Qr, e) is an I X m matrix of generalized
functions and 8 is a 1 X p vector of parameters. An even more general model in
Ch. 20: Continuous Time Srochasdc M&k                                            1207

which r is not required to belong to a finite dimensional space was considered by
Sims (1971). (His investigation is confined to the single equation case, but the
results could be extended to a system of equations.) In this case r is not
identifiable from discrete data. Moreover, the results obtained by Sims show that
it can be very misleading to approximate T(r, 6) by smoothing the lag distribu-
tion in the equivalent discrete model.
   At this stage we shall give a few results, relating to the spectral representation
of a stationary process, which are essential for an understanding of Robinson’s
method. It should be remarked, however, that Robinson (1976) is concerned with
the use of Fourier methods in the estimation of the parameters of a particular
model formulated in the time domain and not with the more general spectral
analysis of time series. The latter is discussed in Chapter 17 of this Handbook.
   A wide sense stationary random vector process {x(t)} has [Rozanov (1967,
Theorem 4.21 the Cramer representation:


                                                                               029)

where aX is a complex valued random measure of the general type discussed in
Section 2.2 and integration with respect to a random measure is defined as in
Section 2.2. The random measure QXis called the random spectral measure of the
process {x(r)}, and if F,,(dh) is defined by:

     F,,@A)= E[@x,(dh)@,*(dA)],
where @,*(dX) denotes the complex conjugate of the transpose of eX(dh), we call
F,,(dh) the spectral meuwre of (x(t)}. If F’,(dh) is a matrix of absolutely
continuous set functions with the derivative matrix:


    f,,(h) = dpO $.A@~),

then f,,(X) is called the spectral density of {x(t)}. The random spectral measure
aX(dh) can be obtained from (x(t)} by [Rozanov (1967, p. 27)] the inverse
Fourier transformation:


                                                                               (130)

which holds for any interval A = (Xi, h2) such that:

    @Jh,)=@$(X,)=O.
1208                                                                                           A. R. Bergsrrom


  Returning now to Robinson’s model, let F( A, 8) be defined by:

       p(h,8)         =/_Le’“‘T(t,B)dt.


Then it can be shown [Rozanov (1967, p. 38)] that the random spectral measure of
/““,J(r, @)x(t - r)d r is F( - X, 8)QJdh).   By replacing each of the terms in
(128) by its Cramer representation and applying the inverse Fourier transforma-
tion (130), we obtain, therefore:

                              e-ihz’    _,-iA,r

                                       -it         y(t) dt
                                                          iXzf         -iA,r

                                                                 _ir           )x(t)dt+$(A).            (131)

The equation system (131) holds exactly. Moreover, if A,,. .., A, are disjoint
intervals the disturbance terms $(A,), . . . , $(A,,) are uncorrelated, although
they are not homoscedastic when the intervals A,, . . . , A,, are of equal length. But
we cannot estimate (131) directly since we cannot observe the integrals.
   In order to derive an approximate model we first note that:

       e -iA     -e -ih,f
                             =e +hlf( A, -        A,)+ o( A, - A,)*.                                    (132)
                -it

If we now divide the interval (- 7r, n) into N subintervals A,, . . . , A,, each of
length 27r/N, and use (132), we obtain from (131) the approximate system:

        lim ‘lTe-ihr’y(t)dt=sr(-h,B)~ltmm~~_TTe-iA~’x(t)dt+~~(A~),
       T-CON            -T


       A, = 2as/N,                 -+NCYI$N.                                                            (133)

If we normalize (133) by dividing by (27r/N)‘12 we obtain a system with a
disturbance vector ( N/2n)‘/2@E(A,) whose covariance matrix is approximately
the spectral density of t(t) at the frequency h,. If we then conjugate and replace
the integrals by discrete Fourier transforms of the observations we obtain:

           = sWw)w,y(s)+ wg(s),
       W,,(S)                                                                                           (134)
where

       w,(s) = (2aNP”2
Ch. 20: Continuous Time Stochastic Models                                       1209

   The model (134) is the approximation used by Robinson for estimation
purposes. Estimation is carried out in two stages. We first minimise the sums of
squares of the errors which are then used to compute estimates of the spectral
density of [(t ) in the frequency bands corresponding to various values of s. These
estimates are then used in the construction of a Hermitian form in the errors in
(134) which is minimised with respect to B and 8, subject to the restrictions, in
order to obtain estimates of the parameters. In another article Robinson (1976b)
considers the application of this general method specifically to a system of
stochastic differential equations. The differential equations model is also treated
by an instrumental variables method in Robinson (1976~). These two articles
contain interesting Monte Carlo studies of the results of the application of the
two methods.
   Robinson (1976a) shows, under certain assumptions, that the estimation proce-
dure described above, for the model (128) using the approximate discrete model
(134), yields estimates which are strongly consistent, asymptotically normal and
asymptotically efficient. The most restrictive of his assumptions is that the
spectral density of x(t) is zero outside the frequency range (- P, r). This
assumption is necessary when estimating the parameters of such a general model
from equispaced discrete observations because of aliasing, to which we have
already referred in Section 2.3. The assumption would not be satisfied if, for
example, x(t) were generated by the stochastic differential equation system (123),
with white noise disturbances. But in this case, we can always extend the system,
as we have seen, so that it can be treated as a closed model. And, if necessary, we
can transform the model into a higher order system so that the assumption that
the disturbances are white noise is approximately satisfied.


5.   Conclusion

In this chapter we have described statistical methods which are applicable to a
class of continuous time stochastic models and discussed the theoretical founda-
tions of these methods. An important feature of the class of models considered is
that such models allow for the incorporation of a priori restrictions, such as those
derived from economic theory, through the structural parameters of the continu-
ous time system. They can be used, therefore, to represent a dynamic system of
causal relations in which each variable is adjusting continuously in response to
the stimulus provided by other variables and the adjustment relations involve the
basic structural parameters in some optimization theory. These structural parame-
ters can be estimated from a sample comprising a sequence of discrete observa-
tions of the variables which will, generally, be a mixture of stock variables
(observable at points of time) and flow variables (observable as integrals). In this
way it is possible to take advantage of the a priori restrictions derived from
1210                                                                              A. R. Bergstrom

economic    theory (which are very important in econometric work, because of the
smallness of the samples) without making the unrealistic assumption that the
economy moves in discrete jumps between successive positions of temporary
equilibrium.
    The feasibility of constructing a continuous adjustment model of an economy,
using the methods described in this chapter, was demonstrated by Bergstrom and
Wymer (1976) to whose work we have referred in Section 2.3. The methods are
now being widely used, and the Bergstrom-Wymer model has been used as a
prototype for a larger econometric model of the United Kingdom [see Knight and
Wymer (1978)] as well as for models of various other countries [see, for example,
Jonson, Moses and Wymer (1977)]. There have also been some applications of the
models, not only for forecasting, but also for the investigation of the effects of
various types of policy feed-back [see, for example, Bergstrom (1978, 1984)]. And,
in addition to these macroeconomic applications there have been applications to
commodity and financial markets [see, for example, Richard (1978) and Wymer
(1973)]. The results of these various studies, which are concerned with models
formulated, mainly, as first order systems of stochastic differential equations, are
very encouraging. They suggest that further empirical work with higher order
systems of differential equations or more general continuous time models is a
promising field of econometric research.
    On the theoretical side an important and relatively unexplored field of research
is in the development of methods of estimation for systems of non-linear
stochastic differential equations. So far these have been treated by replacing the
original model by an approximate system of linear stochastic differential equa-
tions, which is treated as if it were the true model for the purpose of deriving the
“exact discrete model” or, alternatively, making a direct approximation to the
non-linear system of differential equations with a non-linear simultaneous equa-
 tions model. In some cases it may be possible to derive the exact likelihood
function in terms of the discrete observations generated by a system of non-linear
stochastic differential equations. But, more generally, we shall have to rely on
approximate methods, possibly involving the use of numerical solutions to the
non-linear differential equations system.


References
Anderson, T. W. (1959) “On Asymptotic Distributions of Estimates of Parameters of Stochastic
  Difference Equations”, Annals of Mathematical Statistics, 30, 616-681.
Bergstrom, A. R. (1966) “Non-recursive Models as Discrete Approximations to Systems of Stochastic
  Differential Equations”, Econometrica, 34, 173-182.
Bergstrom, A. R. (1967) The Construction and Use of Economic Models. London: English Universities
  Press; also published as: Selected Economic Models and Their Analysis. New York: American
  Elsevier.
Bergstrom, A. R. (1976) ed., Statistical Inference in Continuous Time Economic Models. Amsterdam:
  North-Holland.
Ch. 10: Continuous      Time Stochask   Models                                                    1211

Bergstrom, A. R. (1978) “Monetary Policy in a Model of the United Kingdom” in: Bergstrom. A. R..
  A. J. L. Catt, M. H. Peston, and B. D. J. Silverstone, eds., Stabilify and Injurion. New York: Wiley,
  89-102.
Bergstrom, A. R. (1983) “Gaussian Estimation of Structural Parameters in Higher Order Continuous
  Time Dynamic Models”, Economerrica, 51, 117-152.
Bergstrom, A.R. (1984) “Monetary, Fiscal and Exchange Rate Policy in a Continuous Time Econo-
  metric     Model
                 of the United Kingdom”,       in: Malgrange,    P. and P. Muet. eds.. Contemporcrr~
  Macroeconomic   Modelling. Oxford: Blackwell.
Bergstrom, A. R. and C. R. Wymer, (1976) “A Mode1 of Disequilibrium        Neoclassical Growth and Its
  Application to the United Kingdom”, in: A. R. Bergstrom, ed., Stutisticul Inference rn Contrnuous
   Time Economic Models. Amsterdam:    North-Holland,    267-327.
Box, G. E. P. and G. M. Jenkins, (1971) Time Series Anulysis:       Forecustrng and Control. Oakland:
  Holden-Day.
Cramer, H. (1946) Mathematical Methods of Statistics. Princeton University Press.
Doob, J. L. (1953) Stochasric Processes. New York: Wiley.
Dunsmuir. W. (1979) “A Central Limit Theorem for Parameter Estimation in Stationary Vector Time
  Series and its Application to Models for a Signal Observed with Noise”, Annuls of Sfufistics 7.
  490-506.
Dunsmuir, W. and E. J. Hannan (1976) “Vector Linear Time Series Models”, Adounces in Applied
  Probabili[y.    339-364.
Durbin, J. (1961) Efficient Fitting of Linear Models for Continuous Stationary Time Series from
   Discrete Data, Bulletin of the International Statistical Institute 38, 273-282.
Haavelmo. T. (1943) “The Statistical Implications of a System of Simultaneous Equations”,
   Econometrica     11, 1-12.
Halmos, Paul R. (1958) Finite-Dimensional     Vector Spaces. Princeton: Van Nostrand.
Hannan, E. J. (1970) Multiple Time Series. New York: Wiley.
Hansen, L. P. and T. J. Sargent (1981) “Identification of Continuous Time Rational Expectations
   Models from Discrete Data”, unpublished manuscript.
Hansen, L. P. and T. J. Sargent (1983) “The Dimensi&lity of the Aliasing Problem in Models with
   Rational Snectral Densities”. Econometrica 51. 377-388.
Ito, Kiyosi (i946) “On a Stochastic Integral Equation”, Proceedings of the Japanese Acudem_v 1,
   32-35.
Ito. Kivosi (1951) “On Stochastic Differential Equations”. Memoir of the Americun Murhemuricul
   Sociejv 4.51~~:
Jonson, P. D.. E. R. Moses, and C. R. Wymer (1977) “The RBA76 Model of the Australian
   Economy”, in: Conference in Applied Economic Research (Reserve Bank of Australia).
Knight. Malcolm D. and Cliffor% R. Wymer (1978) “A Macroeconomic Mode1 of’ the United
   Kingdom”, IMF Staff Papers 25, 742-778.
Kohn, R. (1979) “Asymptotic Estimation and Hypothesis Testing Results for Vector Linear Time
   Series Models”, Econometrica 47, 1005-1030.
Kolmogorov, A. N. and S. V. Fomin (1961) Elements of the Theory of Functions and Functionul
   Analysis. Albany, New York: Graylock Press.
Koopmans, T. C. (1950a) ed., Stafisticul Inference in Dynamic Economic Models. New York: Wiley.
Koopmans, T. C. (1950b) “Models Involving a Continuous Time Variable”, in: Koopmans, T. C., ed.,
   Sraristical Inference in Dynamic Economic Models, New York: Wiley, 384-392.
Malinvaud, E. (1970) Statistical Methods of Econometrics. Amsterdam: North-Holland.
Mann, H. B. and A. Wald (1943) “On the Statistical Treatment of Linear Stochastic Difference
   Equations”, Economefrica 11, 173-220.
Phillips, A. W. (1954) “Stabilization Policy in a Closed Economy”, Economic Journal 64, 283-299.
Phillips, A. W. (1959) “The Estimation of Parameters in Systems of Stochastic Differential Equations”,
  Biomemrihz      46, 67-76.
Phillips, P. C. B. (1972) “The Structural Estimation of a Stochastic Differential Equation System”,
  Econometrica,      40, 1021-1041.
Phillips, P. C. B. (1973) “The Problem of Identification in Finite Parameter Continuous Time
  Models”, Journal of Econometrics 1, 351-362.
Phillips, P. C. B. (1974a) “The Estimation of Some Continuous Time Models”, Econometncu 42,
  803-824.
1212                                                                                     A. R. Bergstrom


Phillips,   p. C. B. (1974b) “The Treatment of Flow Data in the Estimation of Continuous Time
  Systems”, presented at Econometric Society Meeting Grenoble and available as Discussion Paper,
  University of Essex.
Phillips, P. C. B. (1976) “The Estimation of Linear Stochastic Differential Equations with Exogenous
  Variables”, in: Bergstrom, A. R., ed., Stattstical Inference in Continuous Time Economic Models
  (North-Holland, Amsterdam) 135-173.
Phillips, P. C. B. (1978) “The Treatment of Flow Data in the Estimation of Continuous Time
  Systems”, in: Bergstrom, A. R., A. J. L., Catt. M. H. Peston, and B. D. J. Silverstone, eds., Stability
  and Inflation.   New York: Wiley.
Richard, D. M. (1978) “A Dynamic Model of the World Copper Industry”, IMF Staff Papers 25,
  779-833.
Robinson, P. M. (1976a) “Fourier Estimation of Continuous Time Models”, in: Bergstrom, A. R., ed.,
  Statistical inference in Continuous Time Economic Models. Amsterdam: North-Holland, 215-266.
Robinson, P. M. (1976b) “The Estimation of Linear Differential Equations with Constant Coeffi-
  cients”, Econometrica 44, 751-764.
Robinson, P. M. (1976~) “Instrumental Variables Estimation of Differential Equations”, Econometrica
   44, 765-776.
Rozanov, Y. A. (1967) Stationary Random Processes. San Francisco: Holden-Day.
Sargan, J. D. (1974) “Some Discrete Approximations to Continuous Time Stochastic Models”, Journul
  of the Royal Statistical Society, Series B, 36, 74-90.
Sargan, J. D. (1976) “Some Discrete Approximations to Continuous Time Stochastic Models”, in:
  Bergstrom, A. R., ed., Statistical Inference in Continuous Time Economic Models. Amsterdam:
  North-Holland, 27-80.
Sims, C. A. (1971) “Discrete Approximations to Continuous Time Distributed Lag Models in
  Econometrics”, Econometrica 39, 545-563.
Weld, H. 0. A. (1952) Demand Anulysis. Stockholm: Almqvist and Wicksell.
Wold, H. 0. A. (1954) “Causality and Econometrics”, Econometrica 22, 162-177.
Wold. H. 0. A. (1956) “Causal Inference from Observational Data. A Review of Ends and Means”.
  Journal of the Roya; Statistical Society, Series A, 119, 28-50.
Wymer, C. R. (1972) “Econometric Estimation of Stochastic Differential Equation Systems”,
   Econometrtca   40, 565-577.
Wymer, C. R. (1973) “A Continuous Disequilibrium AdJustment Model of the United Kingdom
 Financial Market”, in: Powell, A. A. and R. A. Williams, eds., Econometric Studies of Macro and
 Monetary Relations Amsterdam: North-Holland, 301-334.
Wymer, C. R. (1974) “Computer Programs: Discon Manual, and: Continuous Systems Manual”,
 mimeo.



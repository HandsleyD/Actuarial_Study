---
normalized_id: shared-pdf-reference-convergence-of-probability-measures-by-patrick-billingsley-1968-262-pages
exam_code: SHARED
material_scope: convergence of probability measures by patrick billingsley 1968 (262 pages).pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Convergence of probability measures by Patrick Billingsley 1968 (262 pages).pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-convergence-of-probability-measures-by-patrick-billingsley-1968-262-pages

Convergence                 of



Probability              Measures




Patrick Billingsley

Departments of Statistics and Mathematics
The University of Chicago




JOHN WILEY & SONS, New York • Chichester • Brisbane • Toronto
Copyright © 1968 by John Wiley & Sons, Inc.

All rights reserved .

Reproduction or translation of any part of this work beyond
that permitted by Sections 107 or 108 of the 1976 United States
Copyright Act without the permission of the copyright owner
is unlawful . Requests for permission or further information .
should be addressed to the Permissions Department, John
Wiley & Sons, Inc .


Library of Congress Catalog Card Number : 68-23922
S BN 471 07242 7
Printed in the United States of America

20 19 18 17 16 15 14 13
TO MY MOTHER
Preface




Asymptotic distribution theorems in probability and statistics have from the
beginning depended on the classical theory of weak convergence of distribu-
tion functions in Euclidean space-convergence, that is, at continuity points
of the limit function . The past several decades have seen the creation and
extensive application of a more inclusive theory of weak convergence of
probability measures on metric spaces. There are many asymptotic results
that can be formulated within the classical theory but require for their proofs
this more general theory, which thus does not merely study itself . This book
is about weak-convergence methods in metric spaces, with applications
sufficient to show their power and utility.
   The Introduction motivates the definitions and indicates how the theory
will yield solutions to problems arising outside it . Chapter 1 sets out the basic
general theorems, which are then specialized in Chapter 2 to the space of
continuous functions on the unit interval and in Chapter 3 to the space of
functions with discontinuities of the first kind . The results of the first three
chapters are used in Chapter 4 to derive a variety of limit theorems for
dependent sequences of random variables .
   Although standard measure-theoretic probability and metric-space topol-
ogy are assumed, no general (nonmetric) topology is used, and the few results
required from functional analysis are proved in the text or in an appendix .
   Mastering the impulse to hoard the examples and applications till the last,
thereby obliging the reader to persevere to the end, I have instead spread
them evenly through the book to illustrate the theory as it emerges in stages .

Chicago, March 1968-                                        Patrick Billingsley
                                                                                  vii
Acknowledgements




  My thanks go to Soren Johansen, Samuel Karlin, David Kendall, Ronald
Pyke, and Flemming Topsoe, who read large parts of the manuscript ; the
book owes much to their detailed suggestions, and I am very grateful . I
should also like to thank Mary Woolridge for her typing, cheerful, swift,
and error-free .
  The writing of this book was supported in part by the Statistics Branch,
Office of Naval Research, and in part by Research Grant No . 8026 from the
Division of Mathematical, Physical, and Engineering Sciences of the National
Science Foundation.




vm
Contents




 IN    D C I N                                                     1
 CHA   E 1.  EAK C N E GENCE IN ME               IC        ACE     7
             1.   Measures in Metric paces, 7
                  Measures and Integrals, 7, ightness, 9
             2.    roperties of eak Convergence, 11
                   ortmanteau heorem, 11, ther Criteria, 14
             3.    ome pecial Cases, 17
                  Euclidean pace, 17, he Circle, 18, he
                   pace `°, 19, he pace C, 19, roduct
                   paces, 20
             4.   Convergence in Distribution, 22
                   andom Elements, 22, Convergence in Distri-
                  bution, 23, Convergence in robability, 24,
                   roduct paces, 26
             5.    eak Convergence and Mappings, 29
                  Continuous Mappings, 29, Main heorem,
                  30, Integration to the Limit, 31, An Extension
                  of heorem 5 .1, 33
             6.    rohorov's heorem, 35
                   elative Compactness, 35, he Direct heorem,
                  .37, he Converse, 40
                                                                   ix
x   Contents

                     7.    First Applications, 41
                            mooth Functions, 41, he Central Limit
                            heorem, 42, Characteristic Functions, 45, he
                           Cramer- old Device, 48, Local and Integral
                           Limit heorems, 49, eak Convergence on the
                           Circle and orus, 50

    CHA    E   2.    HE        ACE C                                        54

                     8.     eak Convergence and ightness in C, 54
                            eak Convergence, 54, ightness, 54, andom
                           Functions, 57, Coordinate ariables, 60
                     9.     he Existence of iener Measure, 61
                            iener Measure, 61, he Brownian Bridge, 64,
                            eparable tochastic rocesses, 65
                    10.    Donsker's heorem, 68
                            he heorem, 68, An Application, 70, A
                           Necessary Condition for ightness, 73, Another
                            roof of Donsker's heorem, 73
                    11 .   Functions of Brownian Motion aths, 77
                           Maximum and Minimum, 77, he Arc ine Law,
                           80, he Brownian Bridge, 83
                    12 .   Fluctuations of artial ums, 87
                           Maxima, 87, roduct Moments, 88, Applica-
                           tions, 89, roof of heorem 12.1, 91, Moments,
                           94, A ightness Criterion, 95, Further In-
                           equalities, 98
                    13.    Empirical Distribution Functions, 103

    CHA    E   3.     HE       ACE D                                        109

                    14 .    he Geometry of D, 109
                            he pace D, 109, he korohod opology,
                           111, Completeness of D, 115, Compactness in D,
                           116, A econd Characterization of Compactness,
                           118, Finite-Dimensional ets, 120
                    15.     eak Convergence and ightness in D, 123
                           Finite- Dimensional Distributions, 123, ight-
                           ness, 125, andom Elements of D, 128, A
                           Criterion for Convergence, 128, Criteria for
                                                                    Contents     xi

                       Existence, 130,    ther Criteria, 133,    eparable
                        tochastic    rocesses, 134

                16 . Applications, 137
                       Donsker's      heorem, 137, Dominated Measures,
                       139, Empirical Distribution Functions, 141

                17.     andom Change of ime, 143
                        andomly elected artial ums, 143, andom
                       Change of ime, 144, Applications, 145,
                        enewal      heory, 148

                18 .    he niform opology, 150

CHA    E   4.   DE ENDEN              A IABLE                                   154

                19.    Diffusion, 154
                       A Characterization of Brownian Motion, 154,
                        ther Diffusion rocesses, 158

                20.    Mixing rocesses, 166
                       q)-Mixing, 166, Inequalities for Moments, 170,
                       Functional Central Limit        heorem, 174, Inte-
                       grals in     lace of   ums, 178, Nonstationarity,
                       179

                21 .   Functions of Mixing rocesses, 182
                        reliminaries, 182, Functional Central Limit
                        heorem, 184, Applications, 191, Diophantine
                       Approximation, 193, Nonstationarity, 194

                22.    Empirical Distribution Functions, 195
                       99-Mixing      rocesses, 195, Functions of 9 9-
                       Mixing     rocesses, 199

                23 .   Martingales, 205
                24.    Exchangeable andom ariables, 208
                        ampling, 208, Exchangeable        ariables, 212

A   ENDIX I . ME        IC        ACE                                           215

                         eparability, 215, Compactness, 217,             pper
                        emicontinuity, 218,       he   pace   °°, 218,    he
                        pace C, 220
xii   Contents

 A    ENDIX II. MI CELLANY                                                  222

                            Measurability, 222, Change of ariable, 222,
                             ail robabilities, 223, cheffe's heorem, 223,
                             ubspaces, 224, roduct paces, 224, Measur-
                            ability of Dh, 225, Helly's heorem, 226,
                            Kolmogorov's heorem, 228, Measurability of
                             ome Mappings, 230, More Measurability, 232

A     ENDIX III .      HE     E ICAL C M LEMEN                              233
                             he roblem of Measure, 233, eparable
                            Measures, 234, he opology of eak Con-
                            vergence, 236, rohorov's heorem, 239

BIBLI G A HY                                                                243

      MMA Y      F N    A I N                                               248

INDEX                                                                       251
C N E GENCE   F   BABILI Y MEA   E
Introduction




  The De Moivre-Laplace limit theorem states that, if

(1)                        Fn(x) = p{Sn- rip < x}
                                        Jnpq
is the distribution function of the normalized number of successes in n
Bernoulli trials, and if
                                              eJut du
                                        X

(2)                        F(x) = 1
                                    .J27r -°°
is the unit normal distribution function, then
(3)                               FF(x) -* F(x)
for all x (n -+ oc, the probability p of success fixed) .
   We say of arbitrary distribution functions Fn and F on the line that F„
converges weakly to F, which we indicate by writing Fn = F, if (3) holds for
all continuity points x of F. Thus the De Moivre-Laplace theorem asserts
that (1) converges weakly to (2) ; since (2) is everywhere continuous, the
proviso about continuity points is vacuous in this case . If Fn and F are
defined by


(4)                     Fn(x) =


and
                                   0        if x<0
(5)                       F(x) =

                                                                           1
2     Introduction

then again Fn => F, and this time the proviso does come into play : (3)
fails at x = 0 .
  For a better understanding of this notion of weak convergence, which
underlies a large class of limit theorems in probability theory, consider the
probability measures Pn and P generated by arbitrary distribution functions
Fn and F. These probability measures, defined on the class of Borel subsets
of the line, are uniquely determined by the requirements

                     P.(- oo, x] = F F (x),       P(- oo, x] = F(x) .

Since F is continuous at x if and only if the set {x} consisting of x alone has
P-measure 0, F,, => F means that the implication

(6)                  Pn(- 00, x] --* P(- 00,x]           if P{x} = 0

holds for each x .
  Let aA denote the boundary of a subset A of the line ; aA consists of those
points that are limits of sequences of points in A and are also limits of
sequences of points outside A. Since the boundary of (- oo, x] consists of the
single point x, (6) is equivalent to

(7)                       P,z (A) -- P(A)       if P(aA) = 0,

where we have written A for (- oo, x] . The fact of the matter is that F,, = F
holds if and only if the implication (7) is true for every Borel set A-a result
proved in Chapter 1 .
   Let us distinguish by the term P-continuity set those Borel sets A for which
P(aA) = 0, and let us say that P,, converges weakly to P, and write P,z => P,
if P,(A) - P(A) for each P-continuity set-that is, if (7) holds . As just
asserted, Ps = P if and only if the corresponding distribution functions
satisfy F„ = F.
   This reformulation of the concept of weak convergence clarifies the reason
why we allow (3) to fail if F has a jump at x. Without this exemption, (4)
would not converge weakly to (5), but this example may appear artificial .
If we turn our attention to probability measures P,, and P, however, we see
that Pn(A) -* P(A) may fail if P(aA) > 0 even in the De Moivre-Laplace
theorem . The measures Pn and P generated by (1) and (2) satisfy

                                       = Pl Sn -np
(8)                            P,(A)                    E A)
                                            l . I npq
and
                                                        u2
(9)                             P(A) =     1     e 2         du
                                         J2~r _A
                                                                    Introduction   3

for Borel sets A. Now if A consists of the countably many points
             .k-np~
                              n=1,2, . . .,       k=0,1, . . .,n,
               .Jnpq
then Pn (A) = 1 for all n and P(A) = 0, so that P,,(A) -> P(A) is impossible .
Since aA is the entire real line, this does not violate (7).
  Although the concept of weak convergence of distribution functions is tied
to the real line (or to Euclidean space, at any rate), the concept of weak
convergence of probability measures can be formulated for the general
metric space, which is the real reason for preferring the latter concept . Let S
be an arbitrary metric space, let / be the class of Borel subsets of S (v° is
the a-field generated by the open sets), and consider probability measures Pn
and P defined on Y . Exactly as before, we define weak convergence P,, =>- P
by requiring the implication (7) to hold for all Borel sets A . In Chapter 1 we
investigate the general theory of this concept of convergence and see what it
reduces to in various particular metric spaces . We prove there, for example,
that Pn converges weakly to P if and only if

(10)                   ,I S f dPn    f dP       if f c C(S),
                               -*.)S
where C(S) denotes the class of bounded, continuous real-valued functions
on S. (In order to conform with general mathematical usage, we take (10)
as the definition of weak convergence, so that (7) becomes a necessary and
sufficient condition instead of a definition .)
   Chapter 2 concerns weak convergence in the space C = C[0, 1] with the
uniform topology ; C is the space of all continuous real functions on the
closed unit interval [0, 1], metrized by taking the distance between two
functions x = x(t) and y = y(t) to be

(11)                       P(x, y) = sup I x(t) - y(t)1 .
                                     O<t<1
An example of the sort of application made in Chapter 2 will show the
utility of a general treatment of weak convergence-one that goes beyond the
classical Euclidean case . Let ~ 1, ~2, . . . be a sequence of independent,
identically distributed random variables defined on some probability space
(S2, -4, P) . If the ~n have mean 0 and variance a 2, then, according to the
Lindeberg-Levy central limit theorem, the distribution of the normalized sum

(12)                      1 _ Sn = 1- (~1 a . . . + in)
                         aJn      aVn
converges weakly, as n tends to infinity, to the normal distribution defined
by (9).
4    Introduction

   We can formulate a refinement of the central limit theorem by proving
weak convergence of the distributions of certain random functions constructed
                            from the partial sums S n . For each integer n and
                            each sample point w, construct on the unit interval
                            the polygonal function that is linear on each of the
                            subintervals [(i - 1)/n, i/n], i = 1, 2, . . . , n, and
                            has the value S1 (w)/cr-n at the point i/n (S 0 (w) =
                            0) . In other words, construct the function Xn (w)
 whose value at a point t of [0, 1] is
(13)
                                   t - (i -    1)/n
            (0 _ ~ n
                   SZ-&O) +             1           ~z (w) if t E ~ n ,       .
    Xn(t,
                                   /n          ~n
                                           or-..,In
                                                                           n]
  For each co, Xn (w) is an element of the space C. Let Pn be the distribution
of Xn (w) in C, defined for Borel subsets A of C-Borel sets relative to the
metric (11)-by
                              P n (A) = P{w : XX (w) E A}
(the definition is possible because the mapping w -- Xn (w) turns out to be
measurable in the right way) . In Chapter 2 we prove
(14)                                    Pn => W,
where W is Wiener measure. We also prove the existence in C of Wiener
measure, which describes the probability distribution of the path traced out
by a particle under Brownian motion .
   If A = {x :x(l) < a}, then, since the value of the function Xn (w) at t = 1
is Xn (l, w) = Sn (w)/6-Jn,
                            Pn (A) = P{ (0 :    1 - S.(w) < (X .
                                               al-n
It turns out that W(aA) = 0, so that (14) implies

                    P{w :     1 _ S"'( 0)) < (X) -* W{x : x(1) < a} .
                            v\ n
It also turns out that
                                                       a
                                                 1
                     W{x :x(1) < a} =                        e-' '2 du,
                                                J27r   -~o

so that (14) does contain the Lindeberg-Levy theorem .
  The sum ~ j + • . . + $n may be interpreted as the position at time n in a
random walk . The central limit theorem asserts that this position (properly
normalized) is, for n large, distributed approximately as the position at time
t    1 of a particle in Brownian motion . The relation (14) asserts that the
                                                                      Introduction   5

entire path of the random walk during the first n steps is, for n large,
distributed approximately as the path up to time t = 1 of a particle under
Brownian motion .
  To see in a concrete way that (14) contains information going beyond the
central limit theorem, consider the set

                             A = {x : sup x(t) < c .
                                     o_<t<1
Again it turns out that W(2A) = 0, so that (14) implies


(15)        lim P{w : 1 _ max Sk(w) < (X = lim Pn(A)
           n-+oo     .,In1 :5 kSn
                     6_                    n->ao

                                               = W~x : sup x(t) < Oc
                                                      05t51
If we evaluate the right-most member of (15) (which we can do in a number
of ways, for example, le, by computing the limit on the left for some specially
selected sequence {~n} that makes the computation easy), then we have
a limit theorem for the distribution of maxk < n Sk under the hypotheses of
the Lindeberg-Levy theorem .
  As a final example involving Xn(w), take A to be the set of x in C for
which the set {t : x(t) > 0} has Lebesgue measure at most a (we assume
0 < a < 1) . As before, Pn(A) -3- W(A) . Since the Lebesgue measure of
{t : Xn(t, (o) > 0} is essentially the fraction of the partial sums S1, S2, . . . , Sn
that exceed 0, this argument leads to an arc sine law under the hypotheses of
the Lindeberg-Levy theorem . Chapter 2 contains the details of all these
derivations .
  We can in this way use the theory of weak convergence in C to obtain a
whole class of limit theorems for functions of the partial sums S,, S2, . . . , Sn .
The fact that Wiener measure W is the weak limit of the distribution in C
of the random function Xn(w) can also be used to prove theorems about W,
and W is interesting in its own right .
  Chapter 3 specializes the theory of weak convergence to another space of
functions on [0, 1]-the space D = D[0, 1] of functions having discontinu-
ities of at most the first kind . This is the natural space in which to analyze the
behavior of empirical distribution functions, for example . Let j1, 2, . . . be
independent random variables on (0, -4, P),
each uniformly distributed on [0, 1] . Let Fn(t, w)
be the empirical distribution function of ~1(co), p                                      1
. . . , ~n(w) ; for 0 < t < 1, Fn(t, w) is the frac-
tion of integers k, 1 < k < n, for which ~k(w) <
t. Now let Yjco) be the element of D whose
value at t is
                           Yn(t, co) = ,Jn(Fn(t, co) - t) .
6   Introduction

If D is metrized in the right way, it becomes possible to speak of the distribu-
tion in D of the random function Yn (w) and to prove that this distribution
converges weakly as n tends to infinity . Just as in the case of the random
element of C defined by (13), we can then go on to derive the limiting
distributions of
                     sup Jn(F,,,(t, (o) - t) = sup Yn (t, w)
                     o<_t51                        o<_t<1

and related quantities that arise in statistics.
   Chapter 4 concerns weak convergence of the distributions of random
functions derived from various dependent sequences of random variables .
Many of the conclusions in Chapters 2, 3, and 4, although not requiring
function-space concepts for their statement, could hardly have been derived
without function-space methods .
   Standard measure-theoretic probability and metric-space topology are
used from the beginning. Although the point of view throughout is that of
functional analysis (a function is a point in a space), nothing of functional
analysis is assumed (beyond an initial willingness to view a function as a
point in a space) ; all function-analytic results needed are proved in the text
or else in Appendix I (which also gathers together for easy reference some
results in metric-space topology) .
Remarks. The main papers that lead to the development of this theory were Kolmogorov
(1931), Erdos and Kac (1946 and 1947), Doob (1949), and Donsker (1951 and 1952) .
Prohorov (1953 and 1956) and Skorohod (1956) gave the theory its present form . Le Cam
(1957) and Varadarajan (1958a and 1961a) have extended it to general topological spaces .
CHAPTER 1

Weak Convergence in Metric Spaces




1.   MEASURES IN METRIC SPACES

Let S be a metric space . We shall study probability measures on the class °
of Borel sets in S . Here ? is the a-field generated by the open sets-the
smallest a-field containing all the open sets-and a probability measure on
9 is a nonnegative, countably additive set function P with P(S) = 1 .
  If such probability measures P,, and P satisfy f s f dP,, --* f s f dP for
every bounded, continuous real function f on S, we say that Pn converges
weakly to P and write P,, = P. Our aim in this chapter is to study this
concept in detail ; we begin with some properties of individual probability
measures on (S, O) .
  Although we must sometimes assume separability or completeness, most
of the theorems in this chapter hold for an arbitrary metric space S . The
spaces in our applications are usually separable and complete ; since they
rarely have further regularity properties, such as local compactness, we
never impose further restrictions .


Measures and Integrals

THEOREM 1 .1 Every probability measure on (S, s") is regular ; that is,
if A E 9 and 8 > 0, then there exist a closed set F and an open set G such that
F c A c G and P(G - F) < e .

Proof. Denote the metric on S by - p(x, y) and the distance from x to A by
p(x, A).t If A is closed, then we may take F = A and G = {x : p(x, A) < 6}

t For terminology and some theorems about metric spaces, see Appendix I .
                                                                              7
8    Weak Convergence in Metric Spaces

for some b, since the latter sets decrease to A as 6 1 0. Hence we need only
show that the class 9 of Borel sets with the asserted property is a Q-field .t
Given sets A n in 9, choose closed sets F,, and open sets G n such that
F,, C An c G n and P(G n - Fn) < e/2n+1 . If G = U,Gn, and if F -
Un<noFn, with n o so chosen that P(UnFn - F) < E/2, then F (-- U,An (-- G
and P(G - F) < E . Thus 9 is closed under the formation of countable
unions ; since 9 is obviously closed under complementation, the proof is
complete .
   Theorem 1 .1 implies that P is determined by the values of P(F) for closed
sets F. Theorem 1 .3 shows that P is determined by the values of f f dP$
for bounded, continuous real functions f defined on S . Denote by C(S) the
class of such functions f. It is shown on p . 222§ that each f in C(S) is
measurable Y . Everything depends on the following result, which shows
how to approximate the indicator (or characteristic function) IF of a closed
set F by elements of C(S) .
THEOREM 1 .2 If F is closed and e positive, there is a function f in C(S)
such that f(x) = 1 if x E F, f(x) = 0 if p(x, F) > e, and 0 < f(x) < 1 for all
x. The function f may be taken to be uniformly continuous .
Proof.    Define a continuous function 99 of a real variable by
                                        1               if t<0,

                          9'(t) =           -t         if 0<t<1,
                                    '
                                     ~O'               if 1 < t.
If

(1 .2)                           AX) = 9'              p(x, F')~
                                                 (1e




t We have defined the class 9' of Borel sets as the a-field generated by the open sets, which
is the same thing as the a-field generated by the closed sets and is the one appropriate for
the present theory . For related (mostly inappropriate) a-fields, see Problem 6 .
$ When it is the entire space, we omit the region of integration .
§ Of Appendix II, a miscellany to which most measurability questions are relegated .
                                                           Measures in Metric Spaces 9

then f has the required properties-it is even uniformly continuous . The
drawing graphs this f for F -- [a, b] on the line.
THEOREM 1 .3 Probability measures P and Q - on (S, 9) coincide if

(1 .3)                             JfdP__JfdQ

for each f in C(S).
Proof. Suppose F is closed. Start with (1 .1) and define, for each positive
integer u,
(1 .4)                               9qu(t) = p(ut)
and
(1 .5)                      fu(x) = pu(p(x, F)) .
Then {fu } is a nonincreasing sequence of elements of C(S) converging point-
wise to IF . By the bounded convergence theorem, P(F) = lim u f fu dP and
Q(F) = lim u f fu dQ, so that, if (1 .3) holds for all f in C(S), P(F) = Q(F) .
Since P and Q agree for all closed sets, it follows by Theorem 1 .1 that P and
Q are identical .
   Thus the values of f f dP for f in C(S) completely determine the values of
P(A) for A in Y. This fact underlies the circle of ideas centering on the notion
of weak convergence ; although we have defined weak convergence by requir-
ing the convergence of the integrals of functions in C(S), in the next section
we shall characterize it in terms of the convergence of the measures of certain
sets .

Tightness
The following notion of tightness proves important both in the theory of weak
convergence and in its applications . A probability measure P on (S, 9) is
tight if for each positive s there exists a compact (p . 217) set K such that
P(K) > 1 - e. Clearly, P is tight if and only if it has a a-compact support .]'
By Theorem 1 .1, P is tight if and only if P(A) is, for each A in p, the
supremum of P(K) over the compact subsets K of A .
   In a space that is a-compact, every probability measure is tight-which
covers k-dimensional Euclidean space . The following result, which also
covers the Euclidean case, is more useful .

t A support of a probability measure is a set A in So with P(A) = 1 ; a set is a-compact
if it can be represented as a countable union of compact sets . The characterization of a
tight P as having a a-compact support is inappropriate as a definition because it does not
generalize in the right way to families of probability measures (see Section 6) .
10   Weak Convergence in Metric Spaces

THEOREM 1 .4        If S is separable and complete, then each probability
measure on (S, p ') is tight.

Proof.    Since S is separable, there is, for each n, a sequence A,n1 , A nt , . . . of
open 1/n-spheres covering S. Choose n so that P( U i<i nAni) > 1 - e/2n . By
                                                i


the completeness hypothesis, the totally bounded set In>1Ui<i,nAni has  I

compact closure K (see p. 217). Since clearly P(K) > 1 -             the theorem
                                                                              E,


follows .
  Theorem 1 .4 is false without the hypothesis of completeness ; whether the
hypothesis of separability can be suppressed is equivalent to the problem of
measure. These matters are discussed in Appendix III .j'
Remarks . Theorem 1 .4 is due to Ulam (see Oxtoby and Ulam (1939)) ; LeCam (1957)
introduced the term "tight ."

PROBLEMS .;

   1. Say that a function f separates sets A and B if f (x) = 0 for x in A, f (x) = 1 for x
in B, and 0 < f (x) < 1 for all x. If A and B are at positive distance, they can be separated
by a uniformly continuous f [Theorem 1 .2]. If A and B have disjoint closures but are
at distance 0, they can be separated by a continuous f [f(x) = p(x, A)/(p(x, A) + p(x, B))]
but not by a uniformly continuous f. There is no continuous f separating A and B if their
closures meet ; there is no f separating A and B if they meet .
   2. Give examples of distinct topologies that give rise to the same class of Borel sets .
   3. If S can be embedded as an open set in some complete metric space, then [Kelley
(1955, p . 207)] it is topologically complete. Since a locally compact S is open in its
completion, it is topologically complete . Hence Theorem 1 .4 applies if S is separable and
locally compact . Since such an S is a-compact [being a union of open sets with compact
closures and hence (p . 216) a countable such union], it also follows directly that each proba-
bility measure on it is tight ; Euclidean space is an example .
   4. Let S be a Hilbert space with a countably infinite orthonormal basis x1 , x 2 , . . . .
Since S is separable and complete, Theorem 1 .4 applies . However, - no set with nonempty
interior is compact [a nonempty interior must, for some x and e, contain all the points
x + 6x], so that S is neither locally compact nor [Baire's category theorem ; Kelley (1955,
p . 200)] a-compact. If P assigns positive mass to each element of a countable, dense set,
then P has no support locally compact in the relative topology .
   5. Adapt Problem 4 to the general Banach space of countably infinite dimension [there
exist points x 1 , x 2 , . . . with supra ~Ixn J < oo and infra#n II xm - xnll > 0 ; see Banach
(1932, p . 83)] ; C[0, 1], important in probability, is such a space, which explains why a
theory based on local compactness is of small utility in this subject . (See also Problem 5 in
Section 3 .)

t Although Theorem 1 .4 as given suffices for all the applications in this book, it is natural
to inquire after extensions . It is to questions of just this sort that Appendix III is devoted .
I Some problems involve concepts not required for an understanding of the text itself ;
there are no problems whose solutions are used later in the text . A simple assertion is
understood to be prefaced by "show that ." Square brackets contain hints or indications of
solutions.
                                                          Properties of Weak Convergence       11

  6 . We have defined <5 0 as the a-field generated by the open sets, which we can indicate by
writing .9' = a(open sets) . In the same way, define .50 1 = a(closed G5 sets) (a set is a G a
if it is a countable intersection of open sets), define ° ° 2 = a(C(S)) (the smallest a-field with
respect to which each function in C(S) is measurable), and define .9' 3 = cr(open spheres),
b4 = a(compact sets), and `9'5
                                    = a(compact Gb sets) . In a metric space each closed set is
a G 5. Use this fact and Theorem 1 .2 to prove

                              .5_Y1= °2 D 53 :D Y4 =50 5 .
Show that 9 = 93 if S is separable . Show that So = 505 if S is a-compact (which will be
true if S is separable and locally compact) . We may have ° "2 5` .9 3 (even if S is locally
compact) : Take S uncountable and discrete . We may have Y3 54 .54 (even if S is separable
and complete) : Take S to be the Hilbert space in Problem 4 . (The situation differs in the
general topological space, where one must consider two classes of sets : The Borel sets are
taken as the elements sometimes of 50 and sometimes of 5°4 , and the Baire sets are taken as
the elements sometimes of .S° 2 and sometimes of Y 5the terminology varies .)
   7. In connection with tightness, this fact is interesting : Suppose P is defined on (S, .50),
but suppose at the outset only that it is finitely additive . If, for each A in .50, P(A) = sup
P(K) with K ranging over the compact subsets of A, then P is countably additive after all .




2 . PROPERTIES OF WEAK CONVERGENCE

We have defined Pn => P to mean that f f dPn -- f f dP for each f in the class
C(S) of bounded, continuous real functions on S . Note that, since the
integrals f f dP completely determine P (Theorem 1 .3), the sequence {Pn}
cannot converge weakly to two different limits at the same time . Note also
that weak convergence depends only on the topology of S, not on the specific
metric that generates it : Two metrics generating the same topology give rise
to the same classes Y and C(S) and hence to the same notion of weak
convergence.'

Portmanteau Theorem
The following theorem provides useful conditions equivalent to weak
convergence ; any one of these conditions could serve as the definition . A set
A in Y whose boundary aA satisfies P(aA) = 0 is called a P-continuity set
(note that aA is closed and hence lies in 5).
THEOREM 2 .1 Let P n, P be probability measures on (S, .) . These five
conditions are equivalent :

t If we topologize the space Z(S) of all probability measures on (S, .90) by taking as the
general basic neighborhood of P the set of Q such that I f fZ dP - $ fz dQI < E for i =
1, . . . , k, where E is positive and the fZ lie in C(S), then weak convergence is convergence
in this topology. The topological structure of Z(S), which will be of no direct concern to
us, is discussed in Appendix III .
12    Weak Convergence in Metric Spaces

      (i) Pn   P.
      (ii) limn f f dPn = f f dPfor all bounded, uniformly continuous real f.
     (iii) lim supra Pn (F) < P(F) for all closed F.
     (iv) lim infra Pn (G) > P(G) for all open G .
      (v) limn Pn(A) = P(A) for all P-continuity sets A .

   A couple of examples will show the significance of these conditions. Let
P be a unit mass at the point x (P(A) is 1 or 0, according as x lies in A or
note'), and let Pn be a unit mass at xn. If xn --> x, then f f dPn = f(xn) -* f(x) =
f f dP for all f in C(S), so that P,, => P . If xn does not converge to x, then,
for some positive e, we have p(x n , x) > e for infinitely many n. If f(y)
qJ(s lp(x, y)) with 99 defined by (1 .1), then f c- C(S)j(x) = 1, and f(x,,) = 0
for infinitely many n ; hence Pn cannot converge weakly to P. Thus Pn => P
if and only if x,,, -> x, which provides an example we shall often use . (Many
putative weak-convergence theorems that are in fact not theorems can be
disproved by specializing this example .) Since A is a P-continuity set if and
only if x 0 aA, it is easy to check the equivalence of (i) and (v) in this case .
If xn -+ x but the xn all differ from x, then there is strict inequality in (iii) for
F     {x} and strict inequality in (iv) for the complementary set G = Fc ;
moreover, if the xn are all distinct and A = {x2, X4. . . . }, then P,(A) does
not converge to P(A) or to anything else .
   On the line with the ordinary metric, the DeMoivre-Laplace theorem also
illustrates the conditions in the theorem . For a simpler example equally
relevant, consider the measure Pn corresponding to a mass of 1/n at each of
the points i/n, i = 1,2, . . . , n . Now Pn converges weakly to Lebesgue
measure P confined to the unit interval, as follows from the fact that f f dPn
is an approximating sum to f f dP viewed as a Riemann integral . If A consists
of the rationals, then P,(A) = 1 does not converge to P(A) 7--- 0 ; if G is an
open set containing the rationals and having Legesgue measure near 0,
then there is strict inequality in (iv) .
   We prove Theorem 2.1 by establishing the implications in the following
diagram .
                                 I
                                 (i) -> (ii) --> (iii) H (iv)
                                                  I
                                                  (v)
Of course, (i)      (ii) is trivial .
Proof of (ii) --> (iii) . Suppose (ii) holds and that F is closed . Suppose
6 > 0. For small enough e, G = {x : p(x, F) < e} satisfies P(G) < P(F) + S,

t Each subset of S mentioned is assumed to lie in Y .
                                                Properties of Weak Convergence 13

since the sets of this form decrease to F as s ,[. 0 . If f(x) is the function
defined by (1 .2), then f is uniformly continuous on S, f(x) = 1 on F, f(x) - 0
on the complement Ge of G, and 0 < f(x) < 1 for all x . Since (ii) holds, we
have lim,, f f dPn = f f dP, which, together with the relations

                          P,, (F) = JF f dPn < J f f dPn

and


                    J f dP =J Gf dP < P(G) < P(F) + 6,
implies

            lim sup,, P,,(F) < limn J f dPn =J f dP < P(F) + b .

Since 6 was arbitrary, (iii) follows .

Proof of (iii) -* (i) . Suppose that (iii) holds and that f c- C(S) . We shall
first show that

(2 .1)                     lim supra f f dPn < f f dP .

By transforming f linearly (with Ja positive coefficient for the first-degree
term), we may reduce the problem to the case in which U < f(x) < 1 for all
x . For an integer k, temporarily fixed, let Fi be the closed set Fi
{x : ilk < f(x)}, i = 0, 1, . . . , k . Since 0 < f(x) < 1, we have
  k l- 1                                k i
                t- 1         l                  i- 1
               :- k <f(x) < k} < f fdP <~ kPCx : k <f(x) < k} .
i=1 k P{x
The sum on the right is


                                                               .
                     71 k [P(Fi-1) - P(Fi)] = k + k i P(Fi)
                    Z~
This and a similar transformation of the sum on the left yield

                      1 1 P(Fi) < f dP < 1 + 1 P(Fi) .
(2 .2)
                      k i=1     f       k k i=1
If (iii) holds, then lim sup,, P,,(FF) < P(FF) for each i and hence (apply the
right-hand inequality in (2 .2) to P,, and the left-hand one to P)

                                  ('
                         lim SUP . f dPn I < + rf dP .

Letting k - co, we obtain (2.1) .
  Applying (2 .1) to -f yields lim infra f f dPn > f f dP, which, together
with (2 .1) itself, proves weak convergence .

   The equivalence of (iii) and (iv) follows easily by complementation .
 14   Weak Convergence in Metric Spaces

Proof of (iii) --k (v). Let A° denote the interior of A, and let A- denote its
closure . If (iii) holds, then so does (iv), and hence, for each A,
 (2.3)         P(A-) > lim sup,,, P,,(A-) > lim sup,, P,,(A)
                       > lim inf z P,,,(A) > lim inf, Pn(A°) > P(A°).

If P(aA) = 0, then the extreme terms equal P(A) and limn P JA) = P(A)
follows .
Proof of (v) -->- (iii) . Since a{x : p(x, F) <_ 8} is containedt in {x : p(x, F) = 8},
these boundaries are disjoint for distinct a, and hence at most countably
many of them can have positive P-measure . Therefore, for some sequence
of positive 67, going to 0, the sets Fk = {x : p(x, F) < ok} are P-continuity sets .
If (v) holds, then lim sup ra P,,(F) < lim,, Pf(Fk) = P(Fk) for each k ; if F
is closed, then Fk J, F, so that (iii) follows . This completes the proof of
Theorem 2 .1 .

Other Criteria

It is sometimes convenient to prove weak convergence by showing that
P,JA) --* P(A) for some special class of sets A.
 THEOREM 2.2 Let GI be a subclass of 9P such that (i) °l' is closed under the
formation offinite intersections and (ii) each open set in S is a finite or countable
 union of elements of QI. If P,a (A) --> P(A) for every A in G', then P,a =:> P.
Proof. If A1, . . . , A,,, lie in °ll, then so do their intersections ; hence, by
the inclusion-exclusion formula,
            m
         Pn U A) = F'iP,(Ai) - Y_i7 P n(Ai Aj) + Y-iikPn(AiA ;Ak) - . .
             i=1

                        IiP(Ai) - Ei,P(AiA,) + EiykP(AiA,Ak)
                                       l.
                           0U=1
                     = P          Ai

If G is open, then G = U iAi for some sequence {Ail of elements of 1& . Given
s, choose m so that P(Ui < mAi) > P(G) - E . By the relation just proved,
P(G) - e < P(U i <<,nAi) - limn Pn (U i < mAi) < lim inf,n P,JG) . Since 8 was
arbitrary, condition (iv) of the preceding theorem holds .
  Let S(x, e) denote the (open) e-sphere about x.
 COROLLARY 1 Let °l( be a class of sets such that (i) W is closed under the
formation of finite intersections and (ii) for every x in S and every positive e

t The inclusion may be strict-in a discrete space, for example .
                                                       Properties of Weak Convergence 15

there is an A in ( with x E A ° ~= A ~-- S(x, e) . If S is separable and if P,"(A)
P(A) for every A in ill, then P,,, = P .

Proof. Condition (ii)t implies that, for each point x of an open set G,
x E A° c A c G for some A in V . Since S is separable, there exists (see p .
216) in V a finite or infinite sequence {A i } such that G (= UiA° and A i (-- G,
which implies G = U i A i . Thus Gll satisfies the hypotheses of Theorem 2 .2.

COROLLARY 2 Suppose that, for each finite intersection A of open spheres,
we have P,JA) --* P(A), provided A is a P-continuity set . If S is separable,
then Pn => P.
Proof. The boundaries aS(x, e), being contained in the sets {y : p(x, y) = e},
are disjoint (for fixed x) and hence have P-measure 0, with at most countably
many exceptions . Since
                               a(A r) B) (aA) v (aB),

it follows that the hypotheses of Corollary 1 are satisfied by the class G& of
those P-continuity sets that are finite intersections of spheres, and the result
follows.

  Let us agree to call a subclass Y,' of ° a convergence-determining class if
convergence P n (A) -> P(A) for all P-continuity sets A in YV' invariably entails
the weak convergence of P n to P. Corollary 2 becomes : In a separable space,
the finite intersections of spheres constitute a convergence-determining class .
  Let us further agree to call 'Y' a determining class if P and Q are identical
whenever they agree on 'V . The class of closed sets is a determining class and
so is any field that generates Y . Although each convergence-determining
class is clearly also a determining class, the following example shows that
the converse fails . Let S be the half-open interval [0, 1) with the ordinary
metric ; let 'l'- be the class of sets [a, b) with 0 < a < b < 1 . Then 'K is a
determining class but not (as may be seen by taking P,, [P] a unit mass at
1 - 1 /n [0]) a convergence-determining class . Although this one is artificial,
we shall see that the applications abound with real examples of determining
classes that are not convergence-determining classes .
   We close this section with another condition for weak convergence . A
sequence {x,z} of real numbers converges to a limit x if and only if each
subsequence {x   . } contains a further subsequence {x, z .} that converges to x.
(It is convenient to denote a sequence of integers by {n'} rather than {nk}
and a subsequence of {n'} by {n"} rather than {nk,} .) From this fact it is easy
to deduce a weak-convergence analogue .

 f This condition is slightly stronger than the requirement that the interiors of the elements
 of I& form a base for the topology of S .
16   Weak Convergence in Metric Spaces

THEOREM 2 .3           We have Pn => P if and only if each subsequence {Pn •}
                               .} such that P n .- =>- P.
contains a further subsequence {P,,,,

  We shall deal occasionally with weak convergence of P t to P when t goes
to infinity in a continuous manner . Of course, this is defined to mean that

(2.4)                        lim ff dP t        = rf
                                               dP
                                 J
                                 t-•        J~
for each f in C(S). For f fixed, (2.4) holds if and only if

(2.5)                             lim jfdPt„
                                 n-, a0
                                                 =   ffdP


for each sequence {tn } going to infinity . Thus P t = P as t -* 00 if and only if
P t,. => P for each sequence {t n} going to infinity, and nothing really new is
involved . We can also let t approach in .a continuous manner some finite
value to .
Remarks.      Theorem 2 .1 dates back at least to Alexandrov (1940-43) . Theorem 2.2 is
due to Kolmogorov and Prohorov (1954) . For other accounts of the theory, see the books
of Gikhman and Skorohod (1965), Hennequin and Tortrat (1965), and Parthasarathy
(1967) .
    The Banach space C(S) has for its adjoint C* (S) the space of finite signed measures on
S I ; the weak* topology, or the C(S) topology of C* (S), relativized to the space Z(S) of
probability measures on .50, is the topology described in the first footnote in this section
(hence the "weak" in our "weak convergence") ; see Dunford and Schwartz (1958, pp . 262
and 419) . Varadarajan (1958a and 1961a) investigates the topological structure of Z(S) ;
see also Appendix III .
    For extensions of the theory to general topological spaces, see LeCam (1957), Vara-
darajan (1958a and 1961a), and Kallianpur (1961) .
    If the metric space S is not separable, the a-field .9o generated by the spheres may be
smaller than .5°. Dudley (1966 and 1967) has a theory of weak convergence involving only
sets in .9o and functions measurable .5°0.
    If Pn => P, one can ask whether P,,,(A) -+ P(A) holds uniformly on a given-class of P-
continuity sets ; see Ranga Rao (1962) and Billingsley and Topsoe (1967) .


PROBLEMS

   1. If S is countable and discrete, then Pn => P if and only if Pn {x} , P{x} for each one-
point set {x} .
   2. Let Pn and P be given by densities p and pn with respect to a measure A on (S, .5°) .
If pn (x) -. p(x) except for x in a set of A-measure 0, then Pn => P [see Scheffe's theorem on
p . 224] . Show by example . that pn (x) -> p(x) may fail on a set of positive measure even
though Pn => P .
   3. Even though Pn => P, f f dPn       f f dP may fail if f is bounded but not continuous or
if f is continuous but not bounded (even if the integrals exist) . Give examples . If S is
compact, the second possibility does not exist . What if S is not compact but P has compact
support ?
   4. The class of P-continuity sets (P fixed) form a field .
                                                                        Some Special Cases 17

   5. If 0& is a determining class, if P,,(A) --> Q(A) for A C- ,,&, and if P,,      P, it does not
follow that P = Q . [Define probability measures on the line by P,,{n 1} = Pn{1 + n-1} =
P{0} = P{1} _ I and Q{0} = 1 . Let B consist of the points 0, 1, n -1, and 1 + n1 (n =
 1, 2, . . .) . Define I& as the field of Borel sets A such that either (i) A n B is finite and
0 0 A or else (ii) Ac n B is finite and 0 0 Ac. (This example is due to O . Bjornsson .)]
   6 . Define what one should mean by determining classes and convergence-determining
classes of elements of C(S). Give an example of a determining class that is not a converg-
ence-determining class . Show that a class uniformly dense in C(S) is a convergence-
determining class .
    7. If f is bounded and upper semicontinuous (p . 218), then P,z             P implies lim sup .
 J f dP. <- J f dP.
    8. Let {fe} be a family of real functions on S, equicontinuous at each x (for each x and
 e, there exists a 6 for which p(x, y) < 6 implies, for all 8, 1 fe (x) - fe (y)l < e). If {f0} is
uniformly bounded and S is separable, then P,, => P implies that J fe dP,, -* J fe dP uniformly
in 8 . [First show that, for each s, there exists a countable partition D E = { D Ek} of S into
P-continuity sets such that lfg (x) - fe (y) < e for all 8 if x and y lie in the same DEk. Approxi-
mate J fe dP by Ek fg (xk)P(D Ek ) with xk in DEk, and similarly for J fe dP,,, and apply Scheffe's
 theorem (p . 224).] (This result is due to Ranga Rao (1962) ; for extensions, see Billingsley
 and Topsoe (1967) and Topsoe (1967a and . 1967b) .)



3 . SOME SPECIAL CASES

Euclidean Space

Let R k denote k-dimensional Euclidean space, which we shall always take
with the ordinary metric p(x, y) = I x - yj = [Ek 1(x, - yi) 2]1. We denote
by .?k the class of Borel sets ; the elements of 9' we shall call k-dimensional
Borel sets, linear Borel sets in case k = 1 . By the notation y < x [y < x],
we mean yi < xi [yi < xi] for all i = 1, 2, . . . , k. (Note that y < x is
stronger than y < x together with y-54 x.) An interval is a set
(3.1)                             (a, b] _ {x :a < x < b} .
Finally, let us denote by e = (1, . . . , 1) the vector whose coordinates are
all 1 .
   The general probability measure P on (Rk, 9k) has a distribution function
F, defined by
(3 .2)                       F(x) = P{y : y< x},             x E Rk.
Let us relate weak convergence P,,, = P to the usual notion of convergence
for the corresponding distribution functions F, F.
   The function F is continuous at x if and only if for each positive E there
exists a positive b such that x - be < y < x + be implies I F (x) - F(y) I < E .
To say that F is continuous from above at x means that for each positive E
there exists a positive 6 such that x < y < x + be implies I F (x) - F(y) I < e .
18       Weak Convergence in Metric Spaces

From the definition (3 .2) it follows that F is nondecreasing in each variable .
Hence F is continuous from above at x if and only if F(x) coincides with
info, o F(x + be) = info, o P{y : y < x + be} . This infimum is just the P-
measure of the intersection n i > o {y : y < x + be} = {y : y < x}. Therefore F
is continuous from above at each x .
   Since F is nondecreasing in each variable and is everywhere continuous
from above, it is continuous at x if and only if it is continuous from below at
that point, that is, if and only if for each positive E there exists a positive b
such that x - be < y < x implies I F(x) - F(y) I < E . Using the monotonicity
once more, we see that this condition is in turn equivalent to F(x) -
sups>o F(x - be). The supremum being the P-measure of the union
U a> o {y : y < x - (5e} = {y : y < x}, we see that F is continuous at x if and
only if F(x) = P{y : y < x}. Since {y : y < x} - {y : y < x} is exactly the
boundary of {y : y < x}, F is continuous at x if and only if {y : y < x} is a
P-continuity set .
   For distribution functions Fn and F, let us define Fn => F~ to mean that
there is convergence Fn (x) -* F(x) at continuity points x of F. By what has
just been proved, if P n =>P, then the corresponding distribution functions
satisfy Fn = F. Now an interval (a, b] is determined by the 2k (k - 1)-
dimensional hyperplanes containing its faces ; let i& be the class of intervals
for which all these hyperplanes have P-measure 0 . Each vertex of an element
of Ql is a continuity point of F, and °1l is closed under the formation of finite
intersections . Since only countably many parallel hyperplanes can have
positive P-measure, it follows by Corollary 1 to Theorem 2.2 that, if
Pn (A) -- P(A) for each A in QI, then Pn = P. Since P(a, b] is a sum E ± F(x)
with x ranging over the 21 vertices of (a, b] and similarly for P n (a, b], Fn = F
implies that Pn (A) -~- P(A) holds for each A in W. Therefore Pn => P and
Fn => F are equivalent .
   Thus the notion of weak convergence reduces in Rk to the ordinary notion
of the convergence of distribution functions . In other words, the sets
{y : y < x} form a convergence-determining class . The proof above also
shows that the rectangles (a, b] form a convergence-determining class .

The Circle

The same sort of result obviously holds if S is the unit circle in the complex
plane : Pn => P if and only if P n (A) -+ P(A) for every arc A whose endpoints
have P-measure 0. A sequence {x 1 , x2i . . . } of points of S (complex numbers
of modulus 1) is said to be uniformly distributed if the allotment of points to
each arc is proportional to its length, in the sense that
                                          n
(3 .3)                           lim 1 IIA(x;) = P(A),
                                 n-+ oo n i=1
                                                                   Some Special Cases    19

where IA is the indicator, or characteristic function, of A, and P is circular
Lebesgue measure so normalized that P(S) - 1 . If P,n denotes the nth
empirical distribution of the sequence-the measure corresponding to a mass
of 1/n at each of the points x 1 , x2 , . . . , xri this condition reduces to
Pn (A) --* P(A) for arcs A, so that the sequence is uniformly distributed if
and only if P,, =>- P. Therefore, if every arc contains its proper quota of
points, in the sense of (3 .3), then so does every other Borel set whose
boundary has Lebesgue measure 0 . We prove in Section 7 a famous theorem
of Weyl, according to which {x 1, x2 , . . . } is uniformly distributed if and only
if n-1 17' 1 (x ;) u --> 0 holds for every nonzero integer u.

The Space R °°


The results for Rk carry over in all essential respects to the topological
product of a countable sequence of copies of the line, that is, to the space
R°° of sequences x    (x1 , x 2i . . .) of real numbers (seep . 218) . The topology
has as the basic neighborhoods of a point x the sets of the form
(3 .4)            Nk,E(x) = {y : (xi - yiJ   < E,       i =   1, . . . , k}


with E > 0 and k = 1, 2, . . . . With this topology, R°° is a complete,
separable metric space . (We shall always mean by R°° this topological
product of a countable set of copies of the real line .)
   Let Trk denote the natural projection from R`° to Rk, defined by lrk (x) _
(x1 , . . . , x k). A finite-dimensional set, or cylinder, is by definition a set of the
form Irk 1H with k > 1 and H E £k . Since each 'rk is continuous and hence
measurable (see p . 222), the finite-dimensional sets lie in the o-field .°° of
Borel sets in R°° . Let 3~' denote the class of finite-dimensional sets . Since
each set (3.4) lies in 3~' and since R°° is separable, 3~" generates 9°° . Since
.F is a (finitely additive) field, it follows that F is a determining class .
   For fixed k and x, the sets (3 .4) for different values of E have disjoint
boundaries (E < S implies Nk E ~ Nk a) . Applying Corollary 1 of Theorem 2 .2
to the class G& of P-continuity sets in F, we see therefore that F is even a
convergence-determining class . Thus P,z => P if and only if Pn (A) --* P(A)
holds for all finite-dimensional P-continuity sets A .

The Space C


In C = C[0, 1], the space of continuous functions on [0, 1] with the uniform
metric p(x, y) = sups (x(t) - y(t)l (see p . 220), the situation differs markedly
from that in R°° . For points t1 , . . . , t k in [0, 1], let Tr t,...tk be the mapping that
carries the point x of C to the point (x(t1), . . . , x(tk )) of Rk . The finite-
dimensional sets are now defined as sets of the form 7T-1 akH with H E 'I k.
20   Weak Convergence in Metric Spaces

Since 7rtl . . .tk is continuous, these sets lie in the class ' of Borel sets in C .
On the other hand, the closed sphere {y : p(x, y) < E} is the limit of the
finite-dimensional sets {y : x(i/n) - y(i/n) l < E, i = 1, . . . , n} ; since C is
                                I


separable, each open set is a countable union of open spheres and hence of
closed spheres, so that the finite-dimensional sets generate ' . Since they
form a field, the finite-dimensional sets are thus a determining class .
  An example shows that the finite-dimensional sets do not form a conver-
gence-determining class . Let P be a unit mass at 0 (the function that vanishes
identically), and let P,, be a unit mass at the function x, where

                                             if 0<t< 1 ,
                                                     n

(3.5)                 xn(t) _       -        if 1 < t < 2 ,
                                                n       n

                                             if 2 <t<1 .
                                                n - -
Since xn does not converge to 0 uniformly (that is, in the topology of C), Pn
cannot converge weakly to P. (For example, if A = S(0, 2), then P(aA) - 0,
while Pn (A) = 0 does not converge to P(A) = 1 .) But Pn(A) --* P(A) does
hold for finite-dimensional P-continuity sets-in fact, if A = 1rt1~ . tk H and
if 2/n is smaller than the least of the nonzero ti , then Pn(A) = P(A) .
   The finite-dimensional sets are thus a determining class in C but not a
convergence-determining class . The difficulty, interest, and usefulness of
weak convergence in C all spring from the fact that it involves considerations
going beyond those of finite-dimensional sets .

Product Spaces

Let S = S' x S" be the product of metric spaces S' and S" . If S is separable
(which requires that S' and S" be separable), then the a-fields s", u", and
9" of Borel sets in these spaces are related by ° _ 9' x /" (see p . 225) .
  The two marginal distributions of a probability measure P on (S, 9) are
defined by P'(A') = P(A' x S"), A' E 9', and P"(A") = P(S' x A"),
A" E Y".
THEOREM 3 .1 If S is separable, then a necessary and sufficient condition
for Pn = P is that Pn (A' x A") -+ P(A' x A") for each P'-continuity set A'
and each P"-continuity set A", where P' and P" are the marginal distributions
of P.
Proof.    Let a, a', and a" denote the boundary operators in S, S', and S",
                                                                   Some Special Cases     21

respectively. Since
(3 .6)           a(A' x A") (-- ((a'A') x S") U (S' x (a"A")),
the condition is necessary .
  To prove sufficiency, we apply Corollary 1 of Theorem 2.2 to the class I&
of sets A' x A" with A' a P'-continuity set and A" a P"-continuity set . The
class Ill is closed under the formation of finite intersections and, by
hypothesis, P,,(A) -> P(A) for A in W .
   Given (x', x") in S and s > 0, consider the sets
                 A b == {Y' : P'(x', y') < 6} x {y" : P„"," y") < 6}.
For distinct 6, the sets a'{y' : p'(x', y') < 6} are disjoint and the sets
a"{y" : p"(x", y") < 6} are disjoint ; therefore A, lies in Ill for some 6 with
0 < 6 < E . If S is metrized by
                 p((x', x"), (y', y")) = max {p'(x', y'), p"(x" , y")},
then A a is just the sphere with center (x', x") and radius 6 . Hence I& satisfies
the hypotheses of Corollary 1 of Theorem 2.2, as required.
   The sufficiency of the condition in Theorem 3 .1 implies that the
measurable rectangles form a convergence-determining class (but says more
P(a(A' x A")) = 0 does not imply P'(a'A') = P"(a"A") = 0) .
   For given probability measures P' and P" on (S', Y') and (S", 9"), the
product measure P' x P" is a probability measure on 9' x °" and hence, if
S is separable, on Y. The following theorem, in which Pn and P are
probability measures on (S', 9') and Pn and P" are probability measures on
 (S", 9"), is an immediate consequence of Theorem 3 .1 .
 THEOREM 3 .2 If S is separable, then Pn x P" =>P' x P" if and only if
 P' => P' and P" =>- P" .

 PROBLEMS

    1 . Show directly that F,, F if and only if F„(x) -+ F(x) for all x in a dense set and that
 F,, => F if and only if lim sup,,, Fn(x) < F(x) and lim infra Fn(x - 0) > F(x - 0) for all
 x (here F(x - 0) = sups <x F(y)) .
    2. If k > 1, the set of discontinuities of F, although having dense complement, need not
 be countable . A (k - 1)-dimensional hyperplane can contain at most countably many
 discontinuities if it is normal to none of the axes . [To see the problem, consider first the
 hyperplane {(x1, x2) : x1 = -x2} in R2.]
    3. If F,, => F and if F is continuous at each point of a closed set A, then
                                 supxEA I Fn (x) - F(x)l - 0.
    4. The Levy distance ).(F, G) between two one-dimensional distribution functions is the
  infimum of those positive s such that F(x - e) - s < G(x) < F(x + e) + e for all x.
22 Weak Convergence in Metric Spaces

Interpret 2(F, G) geometrically in terms of the graphs of F and G. Show that F,, => F if and
only if 2(F, F) -> 0 ; prove that the collection of one-dimensional distribution functions is
a separable, complete metric space under 2 .
  5. Problem 5 in Section 1 adapts the problem preceding it to the general Banach space
of countably infinite dimension . In C a simple direct analysis is possible : Work with the
functions x,,, defined by (3 .5).
  6. The uniform distribution on the unit square and the uniform distribution on its
diagonal have identical marginal distributions . Relate to Theorem 3 .2 .
  7 . Extend the product-space theory at the end of the section by showing that, for a
countable product of separable spaces, the finite-dimensional sets (appropriately defined)
form a convergence-determining class (R oO is a special case) .



4 . CONVERGENCE IN DISTRIBUTION

The theory of weak convergence can be paraphrased as the theory of
convergence in distribution' . When stated in the terminology of the latter
theory, which involves no new ideas, many results assume a compact and
perspicuous form.

Random Elements
Let X be a mapping from a probability space (S, -4, P) into a metric space
S. If X is measurable (in the sense that Y-1 Y c: -4 ; see p . 222), we call it a
random element . We shall say X is defined on its domain S2 (or (I2, a° , P))
and in its range S and call it a random element of S. If S = R', we call X a
random variable ; if S - Rk, we call X a random vector ; if S = C, we call
X a random function.
   Random variables and random vectors are familiar objects, and the
Introduction contains (see formula (13) there) an example of a useful random
function (although its measurability was not proved) . A variety of random
functions arise in a natural way in probability theory .
   The distribution' of X is the probability measure P = PX-1 on (S, 9)
(4 .1)    P(A) = P(X-'A) = P{w : X(c)) E A} = P{X E A},                    A E Y.
(We generally suppress the argument w in this way .) In case S = Rk, we
have also the associated distribution function of X, defined by
                    F(x) = P{y : y < x} = P{X < x},              x E Rk.
  Note that P is a probability measure on a space of an arbitrary nature,
whereas P is always defined on a metric space . For many questions, the
distribution P contains all relevant information about the random element

t This has nothing to do with the distributions of Schwartz .
                                                    Convergence in Distribution 23

X. If h is a measurable function on S (h-1 ,q1     -1w), then, by the change-of-
variable formula (see p. 223),

(4 .2)                       fh(X) dP   = rh dP,
in the sense that the two integrals exist or fail to exist together and have the
same value if they do exist . In the usual expected-value notation, (4 .2)
becomes

(4 .3)                        E{h(X)} = f h dP .

  Each probability measure on each metric space is the distribution of some
random element on some probability space : Given P on (S, 9), if we take
(S2, R, P) _ (S, ', P), and if we take X to be the identity,
(4 .4)                    X(w) = w,       (0 E 0   = S,
then X is a random element on S2 with values in S and has P as its distribu-
tion . Although the class of distributions thus coincides with the class of
probability measures on metric spaces, we generally call a measure on a
metric space a distribution only when it is indeed the distribution of some
random element already under discussion .


Convergence in Distribution

We say a sequence {X,,} of random elements converges in distribution to the
random element X, and we write
(4.5)                              Xn -9) X,

if the distributions Pn of the Xn converge weakly to the distribution P of X:
(4.6)                               P n => P.

Although this definition of course makes no sense unless the image space S
(the range) and the topology on it are the same for all the random elements
X, X1 , X2 , . . . , the underlying probability spaces (the domains) may be all
distinct . We ordinarily make no mention of these underlying spaces because
their structures enter into the argument only by way of the distributions on S
they induce . Thus we write P{Xn E A} where we should write Pn{Xn E A},
and we write E{ f (Xn)} where we should write f f(Xn) d P,, or perhaps
E n {f (Xn)}. Since f s f(x)P(dx) = fo f(X) dP by the change-of-variable
formula (4.3) and similarly for f f dPn , we have Xn 4     . X if and only if
E{f (XX)} -> E{f(X)} for every f c C(S).
    Theorem 2 .1 asserts the equivalence of the following five statements . Call
a set A in' an X-continuity set if P{X E aA} = 0.
24    Weak Convergence in Metric Spaces

       (i) Xn ~ X.
      (ii) limn E{f (Xn)} = E{f (X)} for all bounded, uniformly continuous real f.
     (iii) lim sup,, P{Xn E F} G P{X E F} for all closed F.
     (iv) lim infra P{X,n E G} > P{X E G} for all open G .
      (v) lim n P{X,n E A} = P{X E A} for all X-continuity sets A .
Each theorem about weak convergence can be similarly recast .
  The following hybrid terminology is useful . If X,, are random elements of
S, if Pn are the corresponding distributions, and if P is a probability measure
on (S, .), we say the Xn converge in distribution to P, and write
(4 .7)                                     Xn
                                                  -9
                                                       * P,
in case P n = P. There is the obvious corresponding version of Theorem 2 .1 .
  It is a great convenience to be able to pass from one to another of the
three equivalent concepts (4 .5), (4.6), and (4.7), and we shall do so freely .
This is largely a matter of expedient phraseology . For example, if random
variables Xn have asymptotically a normal distribution with mean ,u and
variance a 2 , we shall express this fact by writing
(4.8)                               Xn . N(µ, a'2 ) .

It makes no difference whether we interpret N(,u, a 2) as the measure on
(R', R 1) with density (27ra2) -l e -( u- µ )2 /2 a 2 and understand (4 .8) in the sense
of (4.7) or whether we interpret N(u, a2) as a random variable with

                                       I
(4.9)        P{N(u, a2 ) E A}   =                      e   (u-µ)2/2a2
                                                                        du,   A E a 1,
                                    .J27r a       A

and understand (4 .8) in the sense of (4 .5) . (There exist many such random
variables N(,u, a2) on many probability spaces ; the construction (4.4) gives
one of them .) We shall restrict N(,u, a2) to this (dual) meaning, and we shall
write N for N(0, 1)

(4 .10)             P{N E A}    =     1
                                    .J 27r A
                                              f   e u2/2 du,             A E Q1.


Convergence in Probability

Many of the standard concepts and results for convergence in distribution of
ordinary random variables generalize to random elements . If, for an element
a of S,
(4 .11)                         P{p(XX , a) > e} -
                                                 . 0
for each positive s, we say Xn converges in probability to a and write
(4 .12)                                       . a.
                                           Xn 4
                                                            Convergence in Distribution 25

If a is conceived as a constant-valued random element, then, as is easily
                                                           . a if and only if
proved, X. 4- a if and only if X. .4 a . Alternatively, X. 4
the distribution of X,, converges weakly to the probability measure corre-
sponding to a mass of 1 at the point a. The random elements Xn in (4.12)
may, as usual, be defined on distinct probability spaces-only the range S
need be common to them all .
   If X, and Y, have a common domain, it makes sense to speak of the
distance p(X,,, Y n )-the function with value p(X.(w), Yn(w)) at w. If S is
separable, p(X., Y,,) is a random variable (see p . 225) . In the following
theorem, we assume that, for each n, X, and Y, do have a common domain
 and that S is separable .
THEOREM 4 .1 If Xn .4 X and p(X., Y,,) 4- 0, then Y. .4 X.
Proof.    If FE = {x : p(x, F) < E}, then
                  P{ Y. E F} < P{P(X,, Y.) > E} + P{Xn E FE }.
Since FE is closed, the hypotheses imply
           lim sup,, P{ Y. E F} < lim sup . P{Xn E FE } < P{X E FE}.
If F is closed, then FE J, F as E 1 0 and the result follows by Theorem 2 .1 (the
version corresponding to convergence in distribution) .
   In the next theorem' we assume that, for each n, Y., Xin , X2 n , . . . have a
common domain and that S is separable .
THEOREM 4.2 Suppose that, for each u, X. n -7 X, as n --> oo and that
X,,, -4 X as u --> oo . Suppose further that
(4.13)                    lim lim sup P{ p(X,,n, Y,,) > E} = 0
                            u~ oo n-' ao

for each positive s . Then Yn -4 X as n - oo.
 Proof.    Defining FE as before by FE = {x : p(x, F) < E}, we have
                 P{ Y. E F} <_ P{Xun C     + P{P(Xun, Y.) > E} .
                                           _FE}




 By the hypothesis Xu,, -9) Xu (n -) oo),
          lim sup P{Y,, E F} < P{X u E F E } + lim sup P{p(X un, Y,,) > e} .
           n~oo                                        n-+ oo

 By (4.13) and the hypothesis Xu -* X (u ) oo),
                       lim sup P{Y,, E F} < P{X E FE} .
                              n-+ ao
 The result follows as before.

 t The remainder of this section is not central to the theory ; after a cursory reading, it can
 be consulted as the need arises .
26    Weak Convergence in Metric Spaces

  Suppose now that X, X1 , X2. . . . all have a common domain and that S is
separable . If
                          P{P(XX, X) > El-* 0
for every positive e, we say that Xn converges in probability to X and write
(4.14)                                    Xn 4- X.
Because of the assumptions here of separability and (more important) of a
common domain for the Xn , this concept does not generalize (4 .12).
THEOREM 4 .3 If Xn E* X, thent
(4 .15)                        P({Xn E A} + {X c- A}) -->- 0
for every X-continuity set A .
Proof.         For each positive s,
          P{Xn E A, X 0 A} < P{p(X., X) > E} + P{P(X, A) < E, X 0 A}.
From this, the same inequality with Ac in place of A, and the assumption
X,a f* X, we obtain

     lim sup P({Xn E A} + {X E A})
      n-. 00
                            < P{p(X, A) < E, X 0 A} + P{p(X, Ac) < E, X E A}.
As s -> 0, the right-hand member of this inequality tends to P{X E aA} = 0.
   Since (4 .15) implies P{Xn E A} -> P{X E A}, it follows from Theorem 4 .3
that Xn -P-* X implies Xn -4 X.

Product Spaces$

Let X' and X,;, be random elements of S', and let X" and X, be random
elements of S" . In the rest of this section we assume that X' and X" have the
same domain, that X,, and X, have the same domain for each n, and that S'
and S" are separable, so that (X', X") and (Xn, Xn) are random elements of
S' x S" (see p . 225) . We seek conditions under which
(4 .16)                               (Xn, Xn) .4 (X', X") .
  The random elements X' and X" are by definition independent if
P{X' E A', X" E A"} = P{X' E A') P{X" E A"} . If X' and X" are independent
and Xn and Xn are independent for each n, then, by Theorem 3 .2, (4 .16) is

t Some notation : EC is the complement of E, El - E2 = El n E2 ° is the difference of El
and E2 , and El + E2 = (El - E2 ) U (E2 - E1 ) is the symmetric difference of E 1 and E2 .
I The next-to-last footnote still applies .
                                                      Convergence in Distribution   27

equivalent to
(4.17)                      X,, -'-- X',    X,, -2* X " .

Although (4 .16) implies (4 .17) even without independence, the converse
fails-take (X', X") distributed uniformly on the unit square and (Xn, Xn)
distributed uniformly on its diagonal . We shall be concerned with cases in
which X' and X" are independent but Xn and Xn satisfy some condition
weaker than independence . If they satisfy (4 .16) with independent X' and
X", then it is natural to regard Xn and Xn as asymptotically independent .
  By Theorem 3 .1, (4 .16) holds if and only if
(4.18)             P{X , E A', X" E A"} - P{X' E A', X" E A"}

for all X'-continuity sets A' and all X"-continuity sets A" .
THEOREM 4 .4        If Xn Z- X' and Xn 4
                                       . a", then       (Xn, Xn) -2* (X', a") .

Proof._ We must verify (4 .18) with X" identically equal to a". Suppose that
A' is an X'-continuity set and that A" is an X"-continuity set (that is, a" 0 aA").
If a" E A", then P{X'' 0 A"} -* 0, and (4 .18) follows from Xn -2). X' and
         P{X' E A'} - P{ X" 0 A"} < P{X' E A', X" E A"} < P{X' E A'} .

If a" 0 A", then (4 .18) follows from
                    P{X' E A', Xn E A"} < P{X" E A"} -->- 0.
   In the next theorem we assume that Xn converges in probability to a
 random element Y" that is not necessarily constant, which requires that Y"
 and all the (Xn, Xn) have the same domain (S, -4, P) . Let -40 be a (finitely
 additive) field contained in -4, and denote by a(M 0) the or-field generated
 by -40 .
 THEOREM 4 .5        Suppose that X' and X" are independent and that X" has
 the same distribution as Y". If Xn -3 Y", if

 (4.19)               P({X , E A'} n E)    ) P{X' E A'} P(E)

for each X'-continuity set A' and each set E in the field -40 , and if each X;'
 is measurable a(.40), then (X,,, Xn) ? . (X', X") .

   Note that (4 .19) implies Xn -4 X' (take E - Q) . Note also that the
 domain of (X', X") need not be that common to Y" and the (X, X"') . We may
 replace (X', X") in the conclusion by (Y', Y") if the domain of Y" supports
 some random element Y' that is independent of Y" and has the proper
 distribution ; but it would be an unnecessary restriction to assume in general
 the existence of such a Y' .
    28      Weak Convergence in Metric Spaces

    Proof.  Fix an X'-continuity set A' and an X"-continuity set A". We are to
    prove (4 .18), which, since X' and X" are independent and X" has the distribu-
    tion of Y", is the same thing as
    (4 .20)                P{Xn E A', Xn E A"} -->. P{X' E A'} P{Y" E A"} .

    Since Xn           Y", it follows by Theorem 4 .3 that (4 .20) is in turn the same as
    (4 .21)                P{Xn E A', Y" E A"} ---> P{X' E A'} P{Y" E A"} .

    Write En = {X, E A'} and a = P{X' E A'}, and let g denote the indicator
    of the set {Y" E A"} . Then (4 .21) takes the form

    (4 .22)                                        d P -* a   fg d P.
                                  fE.
                                    E„           J
    Since each Xn is measurable a'(_4 0 ), each En lies in a(,4 0 ) .
      We shall prove that (4 .22) holds if g is an arbitrary integrable function
    (measurable -4). If g is the indicator of a set in -`0 , then (4 .22) holds because
    it is the same thing as (4.19). Clearly (4 .22) then also holds if g is a simple
    function measurable R o . If g is integrable and measurable Q(_`0), then, for
    each positive E, there is a simple function gE, measurable -4 0 , with
    E{Ig - g.1} < E ; but then
                     lim sup             g dP - a fg dP < (1 + 1aj) E{lg - gEJ},
                       n-• oo      fEn
    so that (4 .22) follows for all such g.
      Finally, suppose that g is measurable -4 and integrable but not necessarily
    measurable a(_4 0 ). By the properties of conditional expected values-' we
    still have, since En c- a(A),

                    g dP           E{g 11 r(_40)} dP -k a fE{g II a(-40)} dP = a rg dP .
              JE„          =J En                              J                     J
    Thus (4 .22) does hold for all integrable g, as required .
    Remarks .       The ideas in the proof of Theorem 4.5 come from Renyi (1958).

.   PROBLEMS

          1. Prove for random variables that, if Xn .2. X and Yn        0, then Xn + Y,, -9>- X and
    X. Yn ! 0 .
      2. Prove for random vectors X, Y,,, X and random variables Zn that (a) if X"' -:9-* X,
     Xn - Yn l S Zn I Xn l , and Zn > 0, then Yn
                                          _P__ .   X and that (b) if Xn      X, I Xn - Y„!
                                                                                 ~.

    < Z,, I Y,J, and Zn Ey 0, then Y,, 4 X. [Reduce (b) to (a) via the fact that Ix - yj S
    e yj with s < I implies Ix - yI < 2e lxl .l
      j




    t See Doob (1953) or Billingsley (1965). The central results in this book do not require
    conditional probabilities and expected values .
                                                              Weak Convergence and Mappings 29

  3. Three fair coins are tossed independently . Let Eij be the event that coins i and j show
the- same face, let X' = Xn = X;z = Y" be the indicator of E 13 , let X" be the indicator of
E12, and let -4o = {E, 2 , E23} . The conclusion of Theorem 4.5 fails, although its hypotheses
are satisfied except for the requirement that -'o be a field .
   4. Let X1 , X2 . . . . be independent and have a common distribution P on S. Let P,, , , be
the empirical measure for X,(w), . . . , Xn(co) ; P,,, W (A) is the fraction of k, 1 < k < n, for
which Xk (w) E A :
                                                    1   n
                                 P   n. .(A) = - I IjXk(w)n
                                                    n k=1
Show that, if S is separable, then P,, . . P with probability 1 . (Use the strong law of large
numbers for Bernoulli trials and Corollary 1 to Theorem 2 .2.] (This result is due to Vara-
darajan (1958b) ; see Ranga Rao (1962) for extensions .)
  5. Show that random variables Xn and X satisfy Xn .. X if and only if
(4.22)                                          n
                                       E{F(X )} -*- E{F(X)}

for every continuous distribution function F [turn (1 .1) around] . If Y has the distribution
function F and is independent of X and all the Xn (take them all to have the same domain),
then (4 .22) is the same as P{ Y < Xn} , P{ Y < X} .
   6. For a probability measure P on (S, .9'), (4 .4) shows how to construct on a probability
space (S2, -f7, P) a random element X with distribution P. If S is separable and complete,
we can take P as Lebesgue measure on the Borel sets .4 of the unit interval Q. [Let
-01k = {Aku} be a decomposition of S into P-continuity sets of diameter less than 1/k and
let 1k = {Iku} be a decomposition of 0 into subintervals with lengths P(Iku) = P(A ku ) ;
arrange that dk+l refines dk and 5k+1 refines 5k . For w E Iku, give Xk(co) some value in
Aku, show that {Xk (w)} is fundamental for each w, and use Theorem 4.1 to show that
X(w) = lim k Xk (w) has distribution P.] (Skorohod (1956) has the stronger result that, if
Pn = P, random elements Xn and X with these distributions can be constructed on the unit
interval in such a way that Xn (w) -* X(w) for each w .)
   7. Show that (Xn , XZ)       (X', X") if X' and X" are independent, Xn -P->. Y", where
 Y" has the distribution of X", and (4 .19) holds for each E in the a-field generated by Y" .



5 . WEAK CONVERGENCE AND MAPPINGS

Continuous Mappings

 If h is a measurable mapping of S into another metric space S' (with metric
 p' and o-field b' of Borel sets), then each probability measure P on(S, 9')
 induces on (S', 9') a unique probability measure Ph-1 , defined by Ph -1 (A) =
 P(h-1 A) for A E 9'. We need conditions under which Pn => P implies
  n
 P h -1 = Ph - '. One such condition is that h be continuous, since then
f(h(x)) is bounded and continuous on S whenever f(y) is bounded and
                                                                      n
 continuous on S', so that Pn => P implies ff(h(x))P (dx) -* f f(h(x))P(dx), a
 relation which, upon transformation of the integrals (see p . 223), becomes


                                 n, 1 (dy) -
                           ff(y)Ph_                     * f (y)Ph-1(dy) .
                                                         J
30   Weak Convergence in Metric Spaces

   For example, the natural projection Ir7, from R°° to R k is continuous, so
that Pn => P implies Pn 7rk 1 => P7rk 1 for each k. Let us show that, conversely,
if Pn7rk 1 => P7Tk 1 for each k, then P n => P. From the continuity of 7Tk it
follows easily that a7rk 1 H (-- irk1 aH for H (-- Rk . Using special properties of
TTk we shall prove that there is inclusion in the other direction . If x E irk1 aH,
so that 7Tkx E aH, then there are points a ( u ) in H and points R( u ) in He such
that a(u) ) 7Tk x and 13(u) - 7Tkx (u -+ oo). Since the points (c4u ) , . . . , akin,
xk+1, . . . ) lie in 7rk iH and converge to x, and since the points (9 u) , . . , # (u) ,
                                                                                     i
xk+1, . . .) lie in (7rkiH)c and also converge to x, x E a(7rk'H) . Thus a7Tk H =
7rk 1 aH. If Pn 7rk 1 =>P7Tk 1 , then Pn(A) -3' P(A) for sets A = 7Tk1H with
H E Rk and P(7Tk1 aH) = 0. Since P(7rk1 aH) = 0 is equivalent to P(a7Tk 1H) _
0, Pn(A) -+ P(A) holds for all finite-dimensional P-continuity sets, and
hence, since the finite-dimensional sets form a convergence-determining
class, Pn = P.
   We call the P7rk 1 the finite-dimensional distributions or measures corre-
sponding to P. We have shown that probability measures on (R', R')
converge weakly if and only if all the corresponding finite-dimensional
distributions converge weakly .
   The finite-dimensional distributions of a probability measure P on (C, ')
we define as the various measures P7Ttli.. tk , where the 7r tl .. . tk are the projec-
tions defined in Section 3 . Since these projections are continuous, the weak
convergence of probability measures on (C, ') implies the weak convergence
of the corresponding finite-dimensional distributions. But the converse fails
because, as was shown by counterexample, the class of finite-dimensional
sets is not convergence determining . Indeed, if P [Pn] is a unit mass at 0
 [the function (3 .5)], then Pn does not converge weakly to P, even though
Pn7rtll.. .tk = P7TTl _ tk holds for all sets (ti , . . . , tk) . On the other hand, since
the finite-dimensional sets form a determining class, a probability measure
on (C, ') is uniquely determined by its finite-dimensional distributions .

Main Theorem

• We have seen that Pn => P implies Pnh-1 = Ph-1 if h is a continuous mapping
of S into S', but we can weaken the continuity assumption . Assume only
that h is measurable and let Dh be the set of discontinuities of h . Then
Dh E 6" (even if h is not measurable ; see p . 225) .
THEOREM 5 .1         If Pn => P and P(D h) = 0, then Pnh -1 = Ph-1.
Proof.    We shall show that, if F is a closed subset of S', then

                            lim sup Pnh-1(F) < Ph -1(F) .
                              n-+ 00
                                                Weak Convergence and Mappings 31

Since Pn => P, we have
          lim sup ra Pn(h-1F) G lim sup,, P,,((h-1F)-) < P((h-1F)-).
Hence it suffices to prove P((h-1F)-) = P(h-1F), which follows from the
assumption P(Dh) = 0 and the fact that (h-1F)- (-- Dh v (h-1F) .
  There are two immediate corollaries . For a random element X of S, h(X)
is a random element of S' (we still assume h measurable) .
COROLLARY 1          If Xn . X and P{X E Dh} = 0, then h(X,,) -~- h(X).
COROLLARY 2 If Xn 4- a and if h is continuous at a, then h(X,,). 4h(a).
  For example, for ordinary random variables, (X,,, Y,,) 2_> (X, Y) implies
Xn + Y,, 2* X + Y. Facts of this sort, used constantly in probability and
statistics, all depend ultimately on Theorem 5 .1 .
  Particular interest attaches to Theorem 5 .1 when S' is the line, in which
case h is an ordinary real, measurable function .
THEOREM 5 .2 (i) If P,, => P, then P,,h-1 =>- Ph-' for every real, measurable
function h for which P(D h) = 0.
    (ii) If Pnh-1 =>- Ph -1 for all bounded, continuous real h, then P,, = :> P.
   (iii) If P n => P and h is a real, bounded, measurable function with P(D h) = 0,
 then f h dP,, --- f h dP.
Proof. Part (i) follows from Theorem 5 .1 . If P,,h-1 - Ph-', then, by change
of variable, f f(h(x))P,,(dx) -- f f(h(x))P(dx) for each f in C(R1) . If h is
bounded by M, then, taking
                              -M       if t < -M,
                    f(t)=       t      if -M<t<<      - M,
                                M      if M < t,
we see that f h dPn -* f h dP. Thus part (iii) is a consequence of part (i) and
part (ii) follows by the definition of weak convergence . (We can strengthen
(ii) by requiring h in the hypothesis to be uniformly continuous .)
  In applications we are generally interested in establishing weak conver-
gence in various metric spaces in order to be able, by applying part (i) of this
theorem, to prove the weak convergence of measures induced on the line by
various real functions h .

Integration to the Limit
In part (iii) of Theorem 5 .2, the restriction that h be bounded can be relaxed .
It is simplest to discuss this problem in terms of random variables Xn and X
having distributions P,,h -1 and Ph-'.
32    Weak Convergence in Metric Spaces

THEOREM 5 .3             If X,, -- X, then E{IXI} < lim infn E{lX.l} .

Proof.     Take
                                                 IxI    for            IxI < a
                               h (x)
                                                 0      for            IxI > a
in part (iii) of Theorem 5.2 ; if P{IXI = a} = 0, then

                         IXI dP = lim                        IX n I dP < lim inf E{IXnI} •
            f1jXj :5a}             n-oo          {IXnI<a}                        n-+oo
The result follows if we let a tend to infinity through values satisfying
P{IXI = a} 0.
     The variables X. are said to be uniformly integrable if

                               lim sup
                               a-~oo    n
                                             J               IXn I dP = 0 .
                                                 {IXnP!a}
If the X. are uniformly integrable, then
(5.1)                        sup . E{IXnI} < oo .
On the other hand, if
                                       sup,, E{IXnI +E} < cc
for some positive e, then the X,, are uniformly integrable because in this case
                                                                 lE
                                            IXnI dP <                 E{lXnl l+ 'I .
                             f(IXnI>_a}                          a
The X,, are also uniformly integrable if there is a random variable Y such
that E{I Yl} < oo and
(5.2)         P{IX,,I > a} < P{I YI > a},    n > 1,     a > 0,
because in this case (see (3) on p . 223)


                             {IXnI?«}
                                            IX,,l dP   < J {IYI?a} IYI dP.
THEOREM 5 .4             Suppose X,, --9-* X. If the X,, are uniformly integrable, then
(5.3)                                  E{X,,} -* E{X} ;
if X and the X, are nonnegative and integrable, then (5 .3) implies that the X,,
are uniformly integrable .
Proof. If the X,, are uniformly integrable, the integrability of X follows
from (5.1) and Theorem 5 .3 . Take
                                  x    if I x I < a,
                                ha (x)
                                                  0         if        IxI > a,
                                                          Weak Convergence and Mappings 33

in part (iii) of Theorem 5 .2 . Since Xn -:?* X,
(5 .4)                              E{ha (XX)} -~ E{ha(X)}

if P{IXI = a} = 0 . But

(5 .5)                  E{Xn} - E{ha(Xn)}                           X n dP
                                                    =J {i X nl?a}
and
(5 .6)                E{X} - E{h a(X)}            X dP .
                                       =J {IXI?a}
Since these three relations imply
         lim sup IE{X n } - E{X}I < sup
          n-+ao                               n
                                                  r{IXnI?a}   IXJ dP +       f
                                                                             {IxI~:a}
                                                                                        IXI dP,

(5 .3) does follow from uniform integrability .
  On the other hand, if X and the Xn are integrable and (5.3) holds, it follows
by (5.4), (5.5), and (5.6) that

(5.7)                        fI   XnI ?a}
                                            X n dP -
                                                       j{IXI?a}
                                                                  X dP


if P{IXI = a} = 0 . Since X is integrable, we can, given E, choose a so the
right side of (5 .7) is less than E . But then the left side is less than E for all n
exceeding some n o . Since the Xn are nonnegative and individually integrable,
uniform integrability follows .
  Since Xn 2* X implies Xn ' ~ X'', Theorems 5 .3 and 5 .4 immediately
extend to moments higher than the first .
  In none of this need X and the Xn (and the Y in (5.2)) have a common
domain. If they do, and if Xn (w) ~ X(co) for almost all w, or if Xn -'>. X,
then Xn -:?* X. Thus Theorem 5 .3 contains Fatou's lemma and Theorem 5 .4
contains the standard theorems about integration to the limit (the case
involving (5.2) contains Lebesgue's dominated convergence theorem) .

 An Extension of Theorem 5 .1 t

Let h n and h be measurable mappings from S to S'. We may ask whether
Pn =- P implies Pnh-1 z:> Ph-' when h n converges to h in some sense . Let
E be the set of x such that h nx n -~ hx fails to hold for some sequence {xn }
approaching x. (If h n is identically equal to h, then E - Dh .) It is not hard to
show that x E Ec if and only if for every E there exist a k and a 6 such that
i > k and p(x, y) < 8 together imply p'(hx, h zy) < E . Assume that E lies
in 5 (which is shown on p . 226 to hold automatically if S' is separable) .

 t This result is not used in the sequel .
34   Weak Convergence in Metric Spaces

THEOREM 5 .5 If P,, = P and P(E) = 0, then P,,hnl = Ph-1 .

Proof. We shall show that P(h-1 G) < lim infra P,z(hn1 G) for open subsets
G of S'. From the above characterization of the points of Ec, it follows that,
if x E Et' and if hx lies in the open set G, then there exist k and S such that
hi y E G if i > k and p(x, y) < 6, so that x is interior to T7,= ni,kh, 1 G.
Thus h_1G (-- E U UkTk . Since P(E) = 0, we have P(h-1 G) < P(U,Tk ) ;
since Tk ~= Tk+1, we have, for given e > 0, P(h -1 G) < P(Tk) + e for
sufficiently large k. From P,, => P it follows that P(Tk) < lim inf,, P,n(Tk) ;
since Tk h-1G for large n, we have P(Tk) < lim infra P,,,(hn1G) . Therefore
P(h -1 G) < lim info Pn (hn 1 G) + e, which, since e was arbitrary, completes
the proof.

  If h,, = h, this result reduces to Theorem 5 .1 . If h is everywhere continuous
and h n converges to h uniformly on compact sets, then E is empty, so that
the hypothesis of the theorem is satisfied . More generally, P(E) = 0 if
P(D h) = 0 and if there is uniform convergence on compact sets . On the
other hand, if Dh - E = 0, then hn converges to h uniformly on compact
sets .
Remarks. In the Euclidean case, Theorem 5 .1 is sometimes called the Mann-Wald
theorem (see Mann and Wald (1943) and Chernoff (1956)) ; Corollary 2 for rational
functions h is Slutsky's theorem (see Slutsky (1925)) . Theorem 5 .5, which generalizes a
result of Prohorov (1956), is due to H . Rubin ; see Anderson (1963) . For extensions of
Theorems 5 .1 and 5 .5 and converses to them, see Topsoe (1967a and 1967b) .


PROBLEMS

  1 . If a Borel function f has a derivative at a (this being the only assumption on f) and
X„ 4. a, then f (X,,,) = f (a) + f' (a)(X,, - a) + (X. - a)Z,n with Z,, 4 0. Extend to
higher derivatives .
  2. Suppose f has a derivative at 0 . If X,,, Y,, -?4 Y and Y,, -P-->. 0, then

                              X& (Y.) - f(0)) --9->-f' (0) I

  3. Suppose f, and f have continuous derivatives with f, (x) -> f' (x) uniformly in x. If
Xn Y,z . Y and Yn.      4 0, then X1,(fn(Yn,) - f, (0)) 4 f' (0) Y.
  4. Suppose X,,,      X. Give examples in which the X,, are integrable but X is not, and
conversely . Show that E {X,,} -+ E{X} does not in general imply uniform integrability of
the X,, .
   5. Show that X, are uniformly integrable if and only if sup ra E{jX,,I} < co and for each
e there exists a 6 such that, for all n, P(E) < 6 implies SE IX,,I dP < e.
   6 . Let P be Lebesgue measure on the unit interval and P,n correspond to a mass of 1/n
at some point chosen from ((i - 1)/n, i/n), i = 1, . . . , n. Show that P,, = P and deduce
from Theorem 5 .2 that a bounded function continuous almost everywhere is Riemann
integrable .
                                                                     Prohorov's Theorem      35



6. PROHOROV'S THEOREM

Relative Compactness

Let II be a family of probability measures on (S, °) . We call II relatively
compact if every sequence of elements of II contains a weakly convergent
subsequence ; that is, if for every sequence {P, m} in II there exist a subsequence
{P,,,
•} and a probability measure Q (defined on (S, s"), but not necessarily
an element of II) such that P n ' = Q .t Even though P n • => Q makes no sense
if Q (S) < 1, it is to be emphasized that we do require that Q (S) = 1-we
disallow any escape of mass, as discussed below .
  We need to be able to decide whether or not a given family II is relatively
compact . For example, suppose we know of probability measures P n and P
on (C, ') that the finite-dimensional distributions of Pn converge weakly to
those of P. We have seen in Section 5 that P n need not converge weakly to
P. Suppose, however, that we also know that {Pn} is relatively compact . Then
each subsequence {P,,,
                   •} contains a further subsequence {Pn „} converging
weakly to some limit Q . The finite-dimensional distributions of Q must be
the weak limits of those of {Pn„} and hence must coincide with the finite-
dimensional distributions of P (for each (t 1 , . . . , tk), P,,,-Trtli. .t k =:> Q 7rtl'. . tk
and Pn7rtl~. .tk P7rtll .tk, So Q7r . tk = P7rtl i.. tk ) . But then, since a probability
measure on C is completely determined by its finite-dimensional distributions
(the finite-dimensional sets form a determining class), Q and P must them-
selves coincide . Thus each subsequence {Pn •} contains a further subsequence
converging weakly to P, and it follows by Theorem 2 .3 that the entire
sequence {P n} converges weakly to P. Note that, if {Pn } does converge
weakly to P, then it is relatively compact, so that relative compactness is not
an excessive requirement .
   Suppose we know that {P n} is relatively compact and that, for each
(t1 ,                    1.
        tk), P n 7r- tk converges weakly to some probability measure
/2 t1 . . . tk on (Rk, Rk)-the point being that we do not assume at the outset
that the ,u tl . . . tk are the finite-dimensional distributions of a probability
measure on (C, `'). It still follows that each subsequence {Pn } contains a
further subsequence {P,,    .} converging weakly to some limit . Since this limit
 must have the ,u t,. . . tk as its finite-dimensional distributions, it is unique .
 Therefore {P n} converges weakly to some P .
   These ideas provide a powerful technique for proving weak convergence
 in C and in other function spaces . One proves first that the finite-dimensional


 t We take this as a definition ; it is really a sequential compactness notion in Z(S) as defined
 in the footnote on p . 11 . See Appendix III for further topological information .
36   Weak Convergence in Metric Spaces

distributions converge weakly and then that the sequence in question is
relatively compact . To use this method we need an effective criterion for
relative compactness .
   Consider RI first. Let 11 be a family of probability measures on (R', a 1)
Given a sequence {Pn} from II, we can apply to the sequence {Fn} of corre-
sponding distribution functions the classical Helly selection theorem (see
p . 227). There exist a subsequence {Fn,} and some function F such that
(6.1)                              Fn,(x) -~ F(x)
holds for all its continuity points x. The function F may be taken to be right-
continuous, in which case there exists on (R1, .11) a finite measure ,u such
that
(6.2)                          ,u(a, b] = F(b) - F(a).
Now it may happen that g(RI) < 1 . For instance, if Pn corresponds to a
unit mass at the point n, then F is identically 0, no matter what subsequence
{F,,,,} is selected, so that ,u(R1) = 0. If Pn is the uniform distribution over
[-n, n], then F(x) - 2 is the only possibility-again ,u(Rl) = 0. In these
examples, mass is "escaping to infinity" in an obvious and intuitive sense .
   Suppose, however, that the measure ,u determined by F via (6.2) satisfies
g(RI) = 1 . Then ,u is a probability measure and, since (6.1) holds at
continuity points of F, we have (see Section 3) P,,, =>,u . Thus H will be
relatively compact if we somehow ensure that each of these measures ,u we
encounter satisfies ,u(Rl) = 1 . Now ,u(R1) = 1 if for every positive e there
exist a and b such that µ(a, b] > 1 - e. Suppose that for every positive e
there exist a and b such that
(6.3)                   Pn(a, b] > 1 - s,       n = 1,2
Since (6.3) persists if a is decreased and b increased, we may take a and b to
be continuity points of F, in which case (6.3) and (6.1) together imply
µ(a, b] > 1 - s.
  It follows that a family 11 of probability measures on (R1 , .11) is relatively
compact if for each positive s there exist a and b such that P(a, b] > 1 - e
for all P in fl, a condition which has the effect of preventing the escape of
mass alluded to above . On the other hand, if this condition fails, then there
exists some positive e such that, no matter what a and b are, P(a, b] < 1 - e
for some P in 11 . Choose in 11 a Pn with Pn(-n, n] < 1 - e. If some
subsequence {Pn,} were to converge weakly to a probability measure Q, we
would have, for each x,
        Q(-x, x) < lim inf ra . Pn ,(-x, x) < lim infra . Pn,(- n' , n] < 1 - e,
which is impossible . Thus the condition is both necessary and sufficient .
                                                           Prohorov's Theorem   37

  Since an interval (a, b] has compact closure, and since each compact set
can be enclosed in such an interval, the condition can be recast : a family n
of probability measures on (R 1 , 11) is relatively compact if and only if for
each positive e there exists a compact set K such that P(K) > 1 - e for all
P in HI . Now the condition has meaning in an arbitrary metric space .
  A family 11 of probability measures on the general metric space S is said
to be tight if for every positive e there exists a compact set K such that
P(K) > 1 - e for all P in II . If II consists of a single measure alone, this
definition reduces to the one introduced in Section 1 . We have just seen in
the case R1 that tightness is necessary and sufficient for relative compactness .
The following theorems, due to Prohorov, extend the sufficiency to
arbitrary metric spaces and the necessity to separable, complete spaces .
THEOREM 6.1 If II is tight, then it is relatively compact.
THEOREM 6.2 Suppose S is separable and complete . If II is relatively
compact, then it is tight .
  We shall refer to these two theorems conjointly as Prohorov's theorem,
calling Theorem 6 .1 the direct half and Theorem 6.2 the converse half.

The Direct Theorem
We turn first to the proof of the direct half, which is the more useful in the
applications . We shall prove the result successively for Rk, for R°°, for S
a-compact (a countable union of compact sets), and, finally, for the general
S. Each of the last three cases is handled by reducing it to the one preceding .
The case Rk . Here the proof is practically the same as the one already given
for R1. If {Pn} is a sequence in fl, Helly's theorem (p. 227) implies that the
sequence {Fn} of corresponding distribution functions contains a subsequence
.} such that
{F,,
(6 .4)                           Fn.(x) -~ F(x)
at continuity points of F, where F is a function continuous from above .
There exists on (Rk, . k) a measure ,u such that ,u(a, b] is F differenced around
the vertices of the k-dimensional rectangle (a, b]. Now P,n ' - will follow
if we prove y(Rk) = 1 .
   Given e, choose a compact set K in Rk such that P.., (K) > 1 - e for all n',
which is possible because R is tight . Now choose a and b such that K ~-- (a, b]
and such that all 2k vertices of (a, b] are continuity points of F (this is possible
because only countably many parallel (k - 1)-dimensional hyperplanes can
have positive µ-measure) . Since P,n.(a, b] is F,,,, differenced around the
 vertices of (a, b], (6.4) implies P,n ,(a, b] - ) ,u(a, b] . From P,1 .(a, b] >
38    Weak Convergence in Metric Spaces

P,,,(K) > 1 - e, it follows that µ(a, b] > 1 - s. Since s was arbitrary,
p(RI) - 1 . Thus II is relatively compact .
     For the case R °° we shall need the following lemma .
 LEMMA 1 If II is a tight family on (S, _,W) and if h is a continuous mapping
from S to S', then {Ph -' : P E II } is a tight family on (S', 9') .
Proof. Given e, choose in S a compact set K such that P(K) > 1 - e for
all P in II . If K' - hK, then K' is compact (see p . 218) and h -'K' K, so
that Ph-1 (K') > 1 - e for all P in II .
The case R°° . If II is a tight family on (R°°, R°°), then, by Lemma 1,
{Pik 1 : P E 1-11 is, for each k, a tight family on (R a k). By the direct half of
                                                        k,


Prohorov's theorem for R k , just proved via Helly's theorem, we can select
from a given sequence {Pn} in II a subsequence {P,,      .} such that P,•irk1
converges weakly to a probability measure ,uk on (RI,        ak) .By the diagonal
method (as on p . 219), we can choose the sequence {P,,,-} so that P,z .irk i ='
holds for all k simultaneously.
   Since the measures ,uk obviously satisfy the consistency conditions of
Kolmogorov's existence theorem (see p . 228), there is a probability measure
Q on (R', R') such that Q7rk 1 = µk for all k. (It was shown in Section 3
that the or-field q °° of Borel sets in R °° coincides with the a-field generated
by the finite-dimensional sets, which is the a-field that intervenes in
Kolmogorov's existence theorem .) But then P,,.irk l => QTTk 1 for each k, so
that the finite-dimensional distributions of P W converge to those of Q, which,
as noted at the beginning of Section 5, implies P,n - => Q. Tightness implies
relative compactness in R' .
   For the a-compact and the general cases, we shall need two further
 lemmas. Suppose that So is a Borel subset of S:
 (6.5)                                    So E Y.
 Now So is a metric space in its own right in the relative topology ; let 9     °


 denote the class of Borel sets for So. From (6 .5) it follows (see p . 224) that
 (6.6)                       9a = {A : A r- So , A E Y} ;
 in particular,
 (6.7)                                    Yo   C-   2
   If P is a probability measure on (S, r') with P(S0) = 1, let P' (r for restric-
 tion) be the probability measure on (S0, 9 o) got by restriction from 9 to
 9o (see (6.7)). If P is a probability measure on (So, YO), let Pe (e for exten-
 sion) be the probability measure on (S, Y) with P(A) = P(A r) So) for
 A E . (see (6.6)) . Note that P(SO) = 1 .
                                                                 Prohorov's Theorem 39

  If P is a probability measure on (S, Y) with P(S0) = 1, then
                                 (pr)e = p ;
(6.8)
if P is a probability measure on (S o , Yo), then
(6.9)                                 (Pe)r --- P.

  If, in Lemma 1 and in Theorem 5 .1, we take h to be the identity mapping
from So into S, we obtain the following lemma .
LEMMA 2 If II is a tight family on (S o , 9 o), then 11e           {Pe :P E 11} is a
tight family on (S, Y) . If Pn = P in (So , moo), then P n e = Pe in (S, Y) .
LEMMA 3 If P n = P in (S, 9) and P n (S0) = P(S0) - 1, then Pnr => P r
in (S o , YO).
Proof. The general open set in S o is G o = G r) So with. G open in . S. Since
P nr(G0) -- Pn(G) and P r (G0) = P(G), lim infra Pn(G) > P(G) implies
                             lim infra P(G0) 1 P r (Go).
The or-compact case. If S is a-compact, then it is separable and hence can be
embedded homeomorphically into R °° (see p . 219). Since S is a-compact, so
is its image under the homeomorphism ; in particular, this image is a Borel
subset of R`° . Thus S is homeomorphic to a Borel subset of R°° . By Theorem
5.1, weak convergence persists under homeomorphism, and hence so does
relative compactness of II . Since compactness of sets persists under homeo-
morphism, so does tightness of n . Therefore we can replace S by its
homeomorphic image.
  We may thus assume that S is a Borel subset of R°° . If II is tight in (S, 9),
then, by Lemma 2 applied to R `° and its subset S, H e is tight in (R °° , R °°).
Since, as already proved, Theorem 6 .1 holds- in this larger space, He is
relatively compact, so that, for each sequence {P,,,} in 11, the corresponding
sequence {Pne} contains a subsequence {Pn.} converging weakly in the sense
of (R', R') to some Q . By the tightness of II itself, there is for each c a
compact subset K of S such that Pn,(K) = Pn.(K) > 1 - e for all n', so that
Q(S) > Q(K) > lim supra . Pn,(K) > 1 - s. Thus S supports Q as well as
all the PnP",, and henc e, byLemma 3a nd (6.),P,,, converges weakly in t
sense of (S, ?) to Qr. Tightness implies relative compactness if S is
a-compact.'
The general case . Whatever S is, if So = U ZKZ , where KZ is a compact set in
S such that P(KK) > 1 - 1 /i for all P in fl, then So supports each element of

1' A separable S is homeomorphic to a subset of R11 0 . The stronger assumption that S is
a-compact ensures that its image lies in .A O0, which is convenient because Lemmas 2 and 3
become awkward without the assumption S o E Y .
40   Weak Convergence in Metric Spaces

II and n I = { P1 : P E II} is a tight family in (So, 9 o) . By the case just treated,
II' is relatively compact. For each sequence {P n} in II, therefore, the
corresponding sequence {P,,r} contains a subsequence {Pn.} converging
weakly in the sense of (So , Yo) to some Q . By Lemma 2 and (6 .8), Pn '
converges weakly in the sense of (S, ,) to Qe . Thus II is relatively compact,
which proves Theorem 6 .1 in full generality .

The Converse
We turn now to Theorem 6 .2, the converse half of Prohorov's theorem .
Note that it reduces to Theorem 1 .4 in case 11 consists of a single measure ;
the proof is a refinement of the earlier one .
    Suppose that for each positive E and 6 there exists a finite collection
A 1 , . . . , A,a of 6-spheres such that P(Ui<nAi) > 1 - E for all P in II . The
following argument shows that II is then tight . Given E, choose, for each
integer k, finitely many 1 /k-spheres Akl, . . . , Aknk such that P(U i < n kAki) >
1 - E/2k for all P in H . -If K is the closure of the totally bounded set
I I k > lU i < nkAki , then P(K) > 1 - E and, since
                                                       S is assumed complete, K is
compact (see p. 217).
    We prove Theorem 6 .2 by showing that, if the condition stated in the
preceding paragraph fails, then II is not relatively compact . Suppose then
there exist positive E and S such that every finite collection A 1 , . . . , A n of
6-spheres satisfies P(U i < nA) < 1 - E for some P in fl . Since S is assumed
separable, it is the union of a sequence A 1 , A 2 , . . . of open spheres of radius
6. Let B n = Ui<nAi and choose Pn in 11 so that Pn(B,,) < 1 - E . Suppose
some subsequence {Pn .} converged weakly to some limit Q . Since Bm is open,
we would have P(B m) < lim infra. P,,,(B m) for each fixed m. But then, since
Bin c B n - for large n', P(B,m,) < lim infra. P,,,-(Bra,) < 1 - E would follow ;
 since B m increases to S, this is impossible, which completes the proof .
     For strengthened forms of Theorem 6 .2, see Appendix III .
     If Xn are random elements of S, we say {Xn} is tight when {Pn} is tight,
 where Pn is the distribution of Xn. If S is R °° or C, we identify the finite-
 dimensional distributions of X,, with those of Pn. The argument at the
 beginning of this section may be interpreted as asserting of random elements
 Xn and X of C that, if the finite-dimensional distributions of Xn converge
 weakly to those of X and {Xn} is tight, then Xn --9-* X.
 Remarks. In his original proof of Theorem 6 .1, Prohorov (1956) assumed S to be
 separable and complete ; the present extension and its proof are due to Varadarajan (1958a
 and 1961a) . See also LeCam (1957) .

 PROBLEMS

   1 . If II is tight, then its elements have a common a-compact support . The converse fails
 (unless, for example, II consists of a single measure) .
                                                                             First Applications 41

   2. Let II consist of the unit masses for points in A . Show directly from the definition that
I .is relatively compact if and only if A - is compact in S .
   3 . A sequence of probability measures on the line is tight if and only if the corresponding
distribution functions satisfy lim,, _, ,,) F,,(x) = 1 and             F,,(x) = 0 uniformly in n.
A class of normal distributions is tight if and only if the means and variances are bounded .
   4. Show that, if F is a right-continuous, nondecreasing real function with 0 < F(x) < 1,
then there exist distribution functions F,, such that F,, (x) -> F(x) for each continuity
point x .
   5 . If {IX, i 1 b} is uniformly integrable (see p . 32) for some 6 > 0, then {X,,} is tight.
   6 . Probability measures on a product S' X S" are tight if and only if the two sets of
marginal distributions are tight in S' and S" .
   7. Suppose S is separable and locally compact . Since S can be given a metric under which
it is complete [Problem 3 of Section 1], Theorem 6 .2 applies . From the fact that each
compact set in S can be enclosed in the interior of a larger compact set, it follows further that
P,, => P if and only if f f dP,,, -> f f dP for every (bounded) continuous f with compact
support (a result which cannot hold in C, for example, since there a continuous function
with compact support vanishes identically ; see Problem 5 in Section 3) .
   8. In connection with Lemma 3, note that, if II is a tight family on (S, .0) and P(S0) = 1
for all P E H, then it does not follow that II' = {Pr : P E II} is a tight family on (So, 50) .
 [Take S = [0, 1] and S o = (0, 1) and consider point masses .] This can happen even if II
consists of a single measure . [See Remark 2 following Theorem 1 in Appendix III .]


7 . FIRST APPLICATIONS

In this section we examine from the point of view of the preceding theory
some standard probability results, results used frequently in the chapters
that follow.

Smooth Functions

In proving Theorems 1 .2 and 1 .3 and in proving the implication (ii) -0 (iii)
in Theorem 2 .1, we used arguments involving the function (1 .1) . These
arguments still go through if, in place of (1 .1), we use any uniformly
continuous qq such that p(t) = 1 for t < 0, 0 < T (t) < 1 for 0 < t < 1,
and q.(t) - 0 for t > 1 . It is possible to construct such functions 99 with
smoothness properties stronger than uniform continuity . Outside [0, 1],
define q3 as before ; for 0 < t < 1, define

                                 (P (t) = 'X-1     r   1
                                                           e 11s"-s)
                                                                       ds,
                                                  ft
(7 .1)

where
                                          (` 1
                                    a=           e11s(1-s) ds .
                                           0

Then, for each integer v, q, has, over the whole line, a bounded, continuous
derivative of order v .
  Let P. and P be probability measures on (R1, Mil
42     Weak Convergence in Metric Spaces

THEOREM 7 .1       If f fdPn ) f f dP for every bounded, continuous function
f having bounded, continuous derivatives of each order, then P n :::>- P.
Proof. Consider the distribution functions Fn and F corresponding to Pn
and P. If gq u (t) = p(ut), with T defined by (7 .1), then, for each u,

 lim sup Fn (x) < lim             99.(y - x)Pn (dy)               ~q,.,~(y - x)P(dy) < FLx + 1)
     n-• ao             n-•oo f                                                        \\\   u
Using 9).(y - x + 1/u) in place of gw.u (y - x), we see that lim infn Fn (x)
F(x - 1 /u) for each u. Hence Fn (x) - F(x) if F is continuous at x, and
Pn - P follows .

The Central Limit Theorem

Theorem 7.1 can be used to derive the classical central limit theorems for
triangular arrays . For each n, let
(7.2)                                       ~n1' • • . ~ $nkn

be independent random variables with mean 0 and finite variance ornk'
(The probability space on which the variables (7.2) are defined may vary
with n.) Let Sn = $111+ --- + ~nkn and suppose its variance sn2 =
              + 0r2 k is positive . Recall that N is a random variable normally
or 21 + • . •        .
distributed with mean 0 and variance 1 . We first prove Lindeberg's theorem :
THEOREM 7.2 If
(7 .3)
                                  12

                                  Sn k=1
                                           f   I ~nkl ~ ESn}
                                                                nk dP -~ 0


 (n -+ co) for each positive e, then S n /sn ---+- N.
Proof         It suffices to show that

(7 .4)                                 E{ f('-                 E{f (N)}
                                               Sn ) }

 for every bounded, continuous f having bounded, continuous derivatives of
 each order . Fix such a function f and define
 (7.5)             g(h) = sup . I f (x + h) - f(x) - f' (x)h - 2 f"(x)h2 1
 (g is Borel measurable) . By the mean value theorems of the second and third
 orders, there is a constant K, depending on f alone, such that
 (7.6)                                 g(h) < K min {h2 , Ih1 3}
 We have g(h) < Kh 2 and g(h) < K Ih1 3 ; the first inequality is good for h
 large, the second for h near 0 . Since f is fixed throughout the rest of the
                                                                                      First Applications   43


argument, so is K. From the definition (7.5) it follows that

(7.7)   1   [f(x + hl) - f (x + h2)J - [f(x)(hl - h2) + 2 f"(x)(h12 - h22)]I
                                                                                      < g(hl) + g(h2)-

   If the ~nk were all normally distributed, E{ f (Snlsn)} would coincide with
E{ f (N)} . If we successively replace the ~nk by normal variables 77,, k with
mean 0 and variances 6n k, we get a sequence

                         E{f(snl(ynl +                +        nkn))}~

                          E {f (sn l(~n1 +            + $nk„--1 + linkn))},
                          . . . . . . . . . . . . . . . . . . . . . .

                          E {f (snl(~n1 + ?7n2 +                     + -qnk n))},
                                                 . . . + link,))}-
                          E{f (sn 1(ln1 +
The first member of the sequence is E{ f (S n /s n)} and the last one is E{ f(N)} .
The idea now is to show that each member is so close to the next (for n
large) that even the first and last members are close .
   Since (7 .4) involves the joint distribution of the variables (7.2) but not any
properties of the probability space they are defined on, we may, by passing
to a new space (say (R2k n, g2kn)), introduce random variables ~I nl, • • • , 7l nkn
such that 'q nk is normally distributed with mean 0 and variance o' and such
that the 2kn random variables

(7.8)                             ~nl,          , ~nkn , lint,            , ?7nkn

are independent . If

                        Snk =           ~ni +     ,L, nni,                1 < k < kW
                                1<i<k           k<i5kn
then, since ~nkn + ~nkn = Sn and since ~ nl + lint has the distribution of s nN,

                                                               ~nk         nk)      f(5nk        link)
                          E{f(N)}
        E{f(Sn)}                                     E{f             Sn                     Sn
Because of the independence of the sequence (7.8), the three variables Snk ,
~nk, and ink are independent for each value of k and therefore

                E{ f                                            Snk)
                                                                (2                   2
                          k (~nk         link)} = E{f n              ( nk           ink) ( = 0 .
                       / S
                         n                                       n
From (7 .7) it follows that
                                                          kn
                   E{f           - E{f(N)}           < I E{g( Snk) + g                  nk
                         (Sn)                                             n          ( S") }
44 Weak Convergence in Metric Spaces

     The proof will therefore be complete if we show that
                                  kn
(7 .9)
                                  1            g    _nk)} ~ 0

                                 k=1 E{            ( Sn
and
                                 k   n
(7 .10)
                                 1
                                         E ~   g
                                               0.
                                 k=1   n           ( S

Given e > 0, split the expected value in (7 .9) into an integral over
{I~nkl < es n} and an integral over the complementary set
                                                                   . Use (7.6) to
bound the integrand by K I $nk/Sn13 on the first set and by K ~nkl SnI2 on the                I


second
                 E g nk < Ke 6n2 + K 1 2 r
                                   2

                                                            ink d P .
                    ( S n )~     Sn        S n {I~nkI~ES .}
Thus
                                                               12
(7 .11)            E   g ?xk
                          S_     < Ke + K                                                     dP,
                                                                                  n
                                                                                        ink
                k=1 ( { S ) }                                   1 J { I ink I >_ eS }
                                                           S n k=1

and (7.9) follows from (7 .3).
   Since (7 .11) also holds with 'qnk in place of ~nk, to prove (7 .10) we need
only show that
                               1 kn
(7 .12)                      2                nnk dP
                                Sn k=1         {I~1nkI~ESn}

tends to 0 for each positive s . But (7 .12) is at most
                    12 k-              1     1 3 kn 3
                        1 1 E{1 27nk1 3 -        1 0' nkE{INI 3} •
                   S n k=1 eS n             eS n k=1
Since
                           2                              /`
                          6n
                               2 < e2 +                                  ~2    d P,
                           Sn                      1 J {IsnkI?ESn}
                                                   Sn

 (7 .3) implies max k <kn6nk/sn -> 0, which in turn implies Ekn 1 6nk/Sn3 --->- 0. Thus
 (7 .12) does tend to 0, which completes the proof .

   If the ink have moments of order 2 + 6, then the sum in (7 .3) is at most
 8-6 Sn2-a Ekn1 E{I$nkl2+a}, which proves Lyapounov's theorem :


 THEOREM 7 .3 If, for some positive 6,
                          1 kn
                                             } ___>_
                         2+6 ,G, E{ $nk 12+b         0,
                        Sn
                                                    I
                             k=1
 then S nlsn -
             -9* N.
     Finally, from Theorem 7 .2 we can deduce the Lindeberg-Levy theorem
                                                                          First Applications 45

THEOREM 7 .4 If ~1, 2 , . . . are independent and identically distributed
with mean 0 and finite variance Q2 > 0, then
                                      1      n
                                                   ~k --9* N.
                                  Q       n k= 1
  To prove this last result, take kn = n and ~ni = ~i ; the sum in (7 .3) is at
most ~12/a2 integrated over {i 11 > Ea'Jn} .

Characteristic Functions

If P is a probability measure on (Rk, ak), its characteristic function p is
defined as

                          P(t)   = Jett xP(dx),                 t E Rk,

where t • x = Eu =1 tuxu denotes inner product . Let Q be a second probability
measure on (Rk, -4k), and let q be its characteristic function . We shall
prove the uniqueness theorem
THEOREM 7 .5 If p(t) = q(t) for all t, then P = Q.
For each t, eit- is, as a function of x, an element of C(Rk) (or its real and
imaginary parts are) . Thus in the case Rk the uniqueness theorem refines
Theorem 1 .3, which asserts that P is determined by the values of f f dP for
f c- C(S) . We shall prove uniqueness not by deriving an explicit inversion
formula but by using the Weierstrass approximation theorem .
    We know from Section 3 that the rectangles (a, b] form a determining
class ; since such a rectangle is an increasing union of closed rectangles, it
suffices to check that P and Q agree for sets
                         A = [a1, b 1] x . . . X [ak, b k] .
 By the argument for Theorem 1 .3, this will follow if, for each integral u,

 (7 .13)                              JfdP__ffdQ

 holds when f has the form f(x 1 , . . . , xk) = f1 (x1) . . . fk(xk) with f;(s) _
   u         ;, b ;])), where p denotes linear distance and 99u is defined by
 99 (p(s, [a
 (1 .4).
     Fix u. Given E, choose r so large that each f; vanishes outside the interval
 [-r, r] and, at the same time, so large that, if I,, denotes the
 cube {x : I x m! < r, m = 1, . . . , k}, then P(Ir c) < E and Q(Ir c) < E .
 Since f;(-r) = f;(r), f;(s) can, by Weierstrass's theorem,' be uniformly

 t For example, see Titchmarsh (1939) or, for Stone's generalization, Simmons (1963) .
46   Weak Convergence in Metric Spaces
                                                               i rslr
approximated in [-r, r] by a finite trigonometric sum E tzC i e " of period
2r . Multiplying together these sums for the different values of j, we see
that f can be uniformly approximated in I, by a finite trigonometric sum
(7 .14)                         g(x) x = E tY i e it(l"
of period 2r in each variable . Choose (7.14) so that I f(x) - g(x)l < e for
x in I, Since f is everywhere bounded by 1, g is bounded by 1 + E in I, and
hence, by periodicity, in all of Rk. Thus I f - gI is bounded by E in I, and by
2 + 8 everywhere . Assuming 0 < E < 1, we have

                        f - gI dP < E + (2 + e)P(Ir c) < 4E.

Similarly, f I f - gI dQ < 4E, so that

                   JfdP_JfdQ             < JgdP-JgdQ + 8E .
But f g dP - f g dQ is an immediate consequence of p = q and (7.14) ;
since E was arbitrary, (7 .13) follows .
    Suppose now that P, n and P are probability measures on (Rk, Wk) with
characteristic functions p,, and p . We shall prove the continuity theorem
THEOREM 7 .6 A necessary and sufficient condition for P, n = P is that
p n (t) -p(t) for each t .
    The necessity follows from the fact that ei"x is bounded and continuous
in x for each t. We shall prove the sufficiency via two intermediate
propositions .
    If the pn (t) converge pointwise to some limit and if {P n } is tight, then
P n = P for some P. Let g(t) = lim n p n (t) ; we make no assumptions whatever
about g. If {Pn} is tight, then, by Prohorov's theorem, it is relatively compact,
so that each subsequence {P,,,,} contains some further subsequence {P,,,4
converging weakly to some limit whose characteristic function must then be
limn P n „(t) = g(t) . By the uniqueness theorem, there is thus only one possible
such limit, which is the P we seek (see Theorem 2 .3) .
    Notice that this proposition fails without the assumption of tightness
 [example : k = 1 and P n uniform over (-n, n)] . Notice also that the proof
just given exactly parallels the argument at the beginning of Section 6
involving tightness and finite-dimensional distributions for probability
measures on (C, V) .
    Now let us show that, if the limit function g(t) = lim n p n (t) is continuous at
 t = 0, then {Pn } is tight '(and hence weakly convergent to some limit) .
 Clearly, {Pn} is tight if each of the k corresponding sequences of one-
 dimensional marginal distributions is tight . The characteristic functions
p n (s, 0, . . . , 0) of the marginal distributions for the first coordinate
 converge pointwise to a limit g(s, 0, . . . , 0) continuous at s = 0, and
                                                                                             First Applications          47

similarly for the other coordinates . Thus each sequence of marginal distribu-
tions satisfies the hypotheses and it suffices to treat the case k = 1 . In this
case, by Fubini's theorem,


          1UJ u
              24
                   ( 1   -
                             p(t))   dt   = ,~C1U f uu (1 - eitx) dt P (dx)           n



(7 .15)                                   = 2   f (1 - sinux
                                                        ux
                                                             )P(dx)
                                                               n


                                                               ( 1pn(dx)>P                             j x :Ixl>
                                          > 2 J                   -        1
                                                      j _2/u             JuxJ)                                           2U1fx
(in particular, the first integral is real) . Since g is continuous at the origin,
there is, for each positive e, a u such that u-1- f u U 11 - g(t) J dt < e . By the
bounded convergence theorem, for n beyond some n o we have


                                          f
                                                u
                                     u1             J 1 - p n (t)J dt < 2e
                                            u
and hence, by (7.15), P n {x : JxJ > a} < 2e with a = 2/u. By increasing a if
necessary, we can ensure that this inequality holds for the finitely many n
preceding n o : {Pn} is indeed tight .
  If g is the characteristic function of a probability measure, it is auto-
matically continuous ; the continuity theorem follows .
  It is instructive to compare the following pairs of statements, of which all
are true except 6 0 . Here P,, and P are probability measures on (Rk, Mk) or
on (C, W), as appropriate ; in the former case, pn and p are their characteristic
functions and g is a function on Rk ; in the latter case, P,,7T-'. .,, and PiT-1 .t i
are their finite-dimensional distributions and ,utll. .ti are probability measures
on (Ri, qi)_
                  Space Rk                                                       Space C
  1 . The function p(t) determines P.                          1 0.  The measures  Pi,' t, determine P.
  2 . If pn (t) converges to some g(t) for                                   1
                                                               2°. If Pnirt1 t, converges weakly to some
      each t and if {Pn} is tight, then Pn                          ,utl ti for each (t 1 • • . ti ) and if {Pn}
      converges weakly to some P.                                   is tight, then Pn converges weakly to
                                                                     some P.
  3 . Statement 2 fails without tightness .                    3° Statement 2° fails without tightness .
  4. Ifpn (t)converges to someg(t) for each
      t and if g is continuous at 0, then {Pn}
      is tight (and hence, by 2, weakly
      convergent) .
  5 . If pn (t) ---),-p(t) for each t and if {Pn}              5° . If Pnrrtll ., ta => P7rti1 . .t2 for each (t 1 . . . ti)
      is tight, then Pn => P.                                        and if {P,,} is tight, then Pn => P.

  6 . Ifpn (t) --- p(t) for each t, then Pn => P.              6° . [If P u,7rtll.. t2 Pirt ,'. . t , for each (t1 . . . ti),
                                                                    then Pn => P.]
48   Weak Convergence in Metric Spaces

   Statement 1 is the uniqueness theorem for characteristic functions ; 1 °
restates the fact that the finite-dimensional sets in C form a determining class .
The proofs of 1 and 1 0 have nothing particular in common .
   Statements 2 and 2° follow, respectively, from 1 and 1° by exactly parallel
arguments.
   Counterexamples substantiate 3 and 3° .
   Statement 4 has no analogue 4° .
   Now 5 and 5 0 follow, respectively, from 2 and 20, again by exactly parallel
arguments ; but the assumption of tightness in 5 is superfluous because of 4
and the fact that p must be continuous . Suppressing the tightness assumption
leads from 5 to 6 and from 5° to 6° ; although 6 is true (because of 4 and the
continuity of p), 6° is false (because there is no 4 0).
   Not only is 6° false as it stands (as an implication applying to all P and all
{P,n }), but there is no single P for which it is true (as an implication applying
to all {Pn}) : Define h,, : C -~ C by h,Z (x) x + x,, with x,, defined by .(3 .5)
and, given P, put P,, = Phn' . For some sufficiently small 6, the open set
A = {x : x(t) < x(O) + 2 , t < 6} satisfies P(A) > 0. If A,, = A - x, then
lim sup,, A,, is empty and hence
            lim inf,, P,n (A) < lim sup,, P,n(A) = lim, sup,, P(A,,) = 0.
By Theorem 2.1, P n cannot converge weakly to P-but the finite-dimensional
distributions do converge .
   The argument just given also shows that there can be no 4°. In this connec-
tion, notice that 3° follows from the fact that 6° is false ; since 6 is true, 3
requires a special counterexample (the limit function g must be discontinuous
at 0) .
   If there were a 4°, most of Chapter 2 would be superfluous (and if there
were a 4° for the space D, most of Chapter 3 would be superfluous) . About
60 : Since all the finite-dimensional distributions of P and all the P, n determine
P and all the P. themselves, conditions for P,,, => P can in principle be given
in terms of finite-dimensional distributions alone .' But we must in effect
deal with all sets (t1, . . . , ti) simultaneously as n -- oo-it will not do to fix
an arbitrary (t1i . . . , t i) and consider what happens as n -* oo. And this is
where tightness comes in .

The Cramer-Wold Device
By means of the following simple device due to Cramer and Wold, problems
involving random vectors in Rk can often be reduced to problems involving
only ordinary random variables in R' . Suppose that k-dimensional random

t See Bartozynski (1961) .
                                                                      First Applications   49

vectors X,n = (Xn1, . . . , X,1, k) and X = (X,, . . . , Xk) satisfy
                                  k                  k
                                       t j X nj          tjXj
                                 j=1              j=1

for each point t = (tl, . . . , tk) of Rk . Then the characteristic functions
p n (s) = E{exp (is Ek 1 t j Xnj)} of these one-dimensional random variables
converge to p(s) = E{exp (is E~l tj Xj)} for each real s. Taking s = 1, we
see that
                                 E{e't-x„} ) E { eit-x}

Since t was arbitrary, Xn -X follows by the continuity theorem for
characteristic functions .
THEOREM 7.7         In Rk, Xn converges in distribution to X if and only if each
linear combination of the components of X n converges in distribution to the
corresponding linear combination of the components of X .

  In the terminology of Section 2, the half-spaces in Rk form a convergence-
determining class, a fact which apparently cannot be proved without ideas
from Fourier analysis .

Local and Integral Limit Theorems

If Pn and P are probability measures on Rk with densities pn and p with
respect to Lebesgue measure and if
(7.16)                                 P,(x) ) P(x)
for all x outside some set of Lebesgue measure 0, then, by Scheffe's theorem
(p . 224),
(7.17)                                    Pn => P.
The relation (7 .16), called a local limit theorem, implies the relation (7 .17),
called an integral limit theorem .
  There is an analogous result in case P has a density but the mass for Pn
is confined to a lattice in Rk . Let b(n) - (b1 (n), . . . , bk(n)) be a point of Rk
with positive coordinates, let a(n) = (oc 1 (n), . . . , a&)) be an arbitrary
point in Rk, and denote by Ln the lattice consisting of all those points of Rk
having the form
                                                                - a&)),
                     (ulbl(n) - a1(n), . . . , uk6k(n)
where ul , . . . , uk range independently over 0, ± 1, ±2, . . . . If x is a point
in L n , then the interval (x - b(n), x] (see (3.1) for the notation) is a cell of
volume an =6 1 (n) . . b k(n), and Rk is the disjoint union of these countably
many cells .
50   Weak Convergence in Metric Spaces

  Suppose now that Pn is a probability measure in R" with P,,(L,,) = 1, and,
for x E Ln , let p,, (x) be the mass (possibly 0) at that point . Let P have density
p with respect to Lebesgue measure .
THEOREM 7 .8        Suppose that
(7.18)                    max {61(n), . . . , 8k(n)} -* 0.
Suppose further that, if {x n} is any sequence and x any point in Rk , and if
xn lies in L n and varies with n in such a way that
(7.19)                               xn --> x,
then
                                   Pn(xn)   -
(7 .20)                                         P(x)
                                     vn
Then Pn = P.
Proof. Define a probability density qn on Rk by setting q,, (y) = p n (x)lvn if
y lies in the cell (x - o(n), x] determined by the point x of the lattice Ln.
Since (7 .19) implies (7 .20), we have
(7 .21)                            q . (y) -p (y)
for each y. Let Xn have density qn , and define Y,, on the same probability
space by setting Yn = x if Xn E (x - 8(n), x] with x E Ln. What we are to
prove is Yn -4P . Since IX,, - Yn l < I6(n)I, this will follow by (7 .18) and
Theorem 4 .1 if we prove X,, -:4 P. But, in view of (7.21), this is a consequence
of Scheffe's theorem .

 Weak Convergence on the Circle and Torus

Let S be the unit circle in the complex plane and let eu (x) = xu be the circular
functions, u ='O, ± 1, 4-2, . . . . The Fourier series of a measure P on S is
defined by p(u) = f eu(x) P(dx) for integral u. Since P is determined by the
values of f f dP for f in C(S) and since each f in C(S) can, by Weierstrass's
theorem, be uniformly approximated by linear combinations of the circular
functions, p determines P. By the same reasoning as for the line, this unique-
ness theorem implies a continuity theorem : Pn = P if and only if the corre-
sponding Fourier series satisfy p n (u) ) p(u) for each integer u. Since the
circle is compact, there is this time no question that {P,,,} is tight ; hence
{Pn} converges weakly to some limit if lim n p n (u) exists for each u. If P is
normalized circular Lebesgue measure, then p(u) vanishes for u 0 0 (and,
of course, is 1 for u = 0) . Weyl's criterion follows immediately : (x1, x2, . . .)
is uniformly distributed on the circle if and only if n-1 E i(x )u -->- 0 for each
nonzero u. In particular the powers x1 are uniformly distributed if x is not
a root of unity.
                                                                     First Applications   51

  The circle can be rolled out onto the interval [0, 1) by means of the
correspondence e2nix <_ + x . The Fourier series of a probability measure P on
[0, 1) is defined by p(u) = f e2aiux P(dx) for integral u ; of course, the unique-
ness and continuity theorems for the circle can be restated for the interval
[0, 1). Although weak convergence here must refer to the topology that
[0, 1) inherits from the circle and not to the relative topology of the line (for
example, 1 - 1/n -- 0), we can clearly ignore this distinction if the limit
measure assigns measure 0 to the point 0 . Thus, if P n , P are probability
measures on R 1 with support [0, 1) and if P{0} = 0, then Pn => P if and
only if
                           e2TiuXPn(dx) -> e2aauxP( dx)
                           f
for each integer u . A sequence (x 1 , x2i . . .) of real numbers is said to be
uniformly distributed modulo 1 if the empirical distributions of the sequence
({x1 }, {x2}, . . . ) of fractional parts converge weakly to the uniform distribu-
tion on the unit interval . Weyl's criterion becomes : (x 1 , x2 , . . . ) is uniformly
distributed modulo 1 if and only if n-1 I', e 21riuxj -_> 0 for each nonzero
integer u. This criterion is satisfied if x; = j~, where ~ is irrational .
   By the k-dimensional Weierstrass theorem, similar results hold for the
k-dimensional torus-the product of k circles . (They even carry over to the
general compact group, with the characters in the role of the circular func-
tions .) Taking the case k = 2 and laying the torus out into a square, we see
that, if P n and P are probability measures in R 2 supported by the square
{(x, y) :0 < x, y < 11, and if the lower and left-hand edges of the square
have P-measure 0, then Pn = P if and only if

                         fe2rri(ux+vv)
                                         dP n --+   e2ii(ux+vv) dP


for all pairs of integers u and v.
  We say a sequence ((x1, yl), (x2, y2), . . . ) in the plane is uniformly
distributed modulo 1 if the empirical distributions, obtained by reducing all
coordinates modulo 1, converge weakly to the uniform distribution on the
square ; this holds if and only if n-1 En 1 e2ai(ux;+vYi)-, 0 whenever u and v
do not both vanish . This condition is satisfied if (x,, y)        jq), where ,
71, and 1 are linearly independent (there do not exist integers u and v, not
both 0, such that u~ + vq is integral) . To take another case, suppose ~ and 77
satisfy exactly one constraint : u~ + vi is integral if and only if u = 2w and
v = 3w for some integer w . Then
                                                         u   D
                     n                       1       if    = is integral,
              lim 1 I e2~z(u'~+ti'") =                   2 3
             n--* ao n 7=1
                                             0       otherwise.
52   Weak Convergence in Metric Spaces

                     By checking the Fourier coefficients, one sees that the
                     empirical distributions converge weakly to a distribu-
                     tion uniform on the four slanting lines in the
                     diagram .
                        The Cramer-Wold result has an obvious analogue
                     here . For example, the planar sequence ((xl , yr),
                     (x2, y2), . . .) is uniformly distributed modulo 1 if
                     and only if for all integral u and v, not both 0,
the linear sequence (ux1 + vy1 , ux2 + vy2, . . .) is uniformly distributed
modulo 1 .
Remarks . Theorem 7 .2 is here proved by Levy's version of Lindeberg's method ; see
Levy (1925, pp . 246-249). See Feller (1966) for other approaches to the central limit
theorem and for characteristic functions . There exists for linear spaces a theory of
characteristic functions which ties in closely with weak convergence ; see Prohorov (1960)
and Gross (1963) and the references there .
   See Cramer and Wold (1936) for their device . See Hardy and Wright (1960) for uniform
distribution modulo 1, in particular for the last example here .


PROBLEMS

  1 . Replace the integrand in (7 .1) by a (2k)th-degree polynomial so chosen that p has
bounded, continuous derivatives up to order k (k = 3 suffices for the proof of Lindeberg's
theorem).
  2 . Use the Cramer-Wold device to derive a k-dimensional version of the Lindeberg-
Levy theorem.
  3. A measurable function h(x) on the line has a mean value if the limit
                                                        T
                                 M{h} = lim 1     h(x) dx
                                            27 -T

exists ; it has a distribution if the probability measures (here A is Lebesgue measure)
                              _ 1
                      PT(A)     2T A{x : jxj < T, h(x) E A},        A E P1 ,


converge weakly as T -- . oo . If h is almost periodic, then it is bounded and, for each t, e ztx is
almost periodic (see Bohr (1932)) ; from the first proposition used in deriving the continuity
theorem for characteristic functions, show that h has a distribution .
   4. Consider on the line probability measures having moments of all orders . The measure
P is said to be determined by its moments if fx u P(dx) = fxu Q(dx), u = 1, 2, . . . implies
P = Q . (See Feller (1966, pp . 224 and 487) for an example of a P not determined by its
moments and for a criterion for P to be determined by its moments .) If sup, l fxu P,,(dx)I <
 co for each u, and if P,,, P, then the moments of P, converge to those of P [Theorem 5.4].
If the moments of P,,, converge to those of P and if P is determined by its moments, then
P,, =>. P . [First show {P,,,} is tight (Problem 5 in Section 6) and then imitate the proof given
above for the continuity theorem for characteristic functions .] Use the Cramer-Wold
technique to extend this result to RI [consider product moments of all orders] .
                                                                         First Applications    53

  5 . If k varies with n in such a way that (k - np)/ .npq -* x, then

                                       pkgn_ knpq         e-1x2
                                  `k
(see Feller (1957, p . 169)). Use Theorem 7 .8 to deduce the De Moivre-Laplace theorem .
Apply the same technique to the hypergeometric distribution (see Problem 2 on p . 17 and
Problem 10 on p . 180 of Feller (1957)) and to the frequency count for a set of multinomial
trials (leave out the count for one cell, so that the limiting distribution will have a density) .
   6. Use Problem 8 in Section 2 to prove that, if probability measures in Rk converge
weakly, then the corresponding characteristic functions converge uniformly on bounded
sets .
   7. Generalize Theorem 7 .8 : Replace Lebesgue measure on Rk by a general measure on a
separable S and consider decompositions {Cni } of S with lim n max i diam Cni = 0.
CHAPTER 2

The Space C



8 . WEAK CONVERGENCE AND TIGHTNESS IN C

The Introduction explains some of the merits of proving weak convergence
in the space C = C [0, 1 ] of continuous functions on [0, 11, where we give
C the uniform topology by defining the distance between two points x and y
(two functions x and y of t c- [0, 1 ]) as
                         P(x, y) = sups I x(t) - Y(01-
Weak Convergence

Although weak convergence in C does not in general follow from weak
convergence of the finite-dimensional distributions, we saw at the beginning
of Section 6 that it does in the presence of relative compactness . Since C is
separable and complete (see p . 220) it follows by Prohorov's theorem
(Theorems 6 .1 and 6 .2) that relative compactness of a family of probability
measures on (C, e) is equivalent to tightness of the family . Thus we have
the following result.
THEOREM 8 .1 Let P n , P be probability measures on (C, ') . If the finite-
dimensional distributions of P,z converge weakly to those of P, and if {P','} is
tight, then Pn = P.
  If we are to use this theorem to prove weak convergence in C, we must
see just what tightness here means .

Tightness
.The modulus of continuity of an element x of C is defined by
(8.1)           w.(8) = w(x, 6) = sup IX(S) - x(t)j,        0 < 6 < 1.
                                    Is-tJ <a
54
                                             Weak Convergence and Tightness in C 55

Let {Pn} be a sequence of probability measures on (C, ').
THEOREM 8 .2        The sequence {P n} is tight if and only if these two conditions
hold:
    (i) For each positive 77, there exists an a such that
(8 .2)                 P,n{x : Ix(0)I   > a} < n,     n > 1.
   (ii) For each positive e and n, there exist a 6, with 0<6<1, and an
integer no such that
(8.3)                  Pn{x : wx (S) > e} < 27,      n > no .
   Condition (i) stipulates that {P,ziro1 } be tight . In connection with (8 .3),
note that wx(b) is continuous in x and hence measurable .
Proof. Suppose {P,z} is tight . Given e and ?7, choose a compact set K such
that P.(K) > 1 - 77 for all n . By the Arzela-Ascoli theorem (p . 221), we
have K cz {x :Ix(0)I < a} for large enough a and K r- {x :wx (o) < e} for
small enough 6, so that (i) and (ii) follow (with no - 1 in (ii)). This proves
the necessity of (i) and (ii).
   Since a single probability measure P on (C, W) is tight (Theorem 1 .4), it
follows by the necessity of (ii) that for each e and 77 there is a 6 such that
P{x : wx(6) > e} < q . If {P,,,} satisfies condition (ii), therefore, we may ensure
that the inequality in (8 .3) holds for the finitely many n preceding no by
decreasing 6 if necessary . Thus we may assume in proving sufficiency that
the no in (8 .3) is always 1 .
   Assume that {Pn} satisfies (i) and (ii), with no always 1 in (8 .3) . Given ?7,
choose a so that, if
                                A = {x : Ix(0)I < a},

then P,,,(A) > 1 - z 77 for all n, and choose 6k so that, if

                               Ak = {x :wX (~k) <
                                                    k}'
then Pf(Ak) > 1 - ?7/2k+1 for all n. If K is the closure of A rl I ,klAk,
then Pn(K) > 1 - 77 for all n and, by the Arzela-Ascoli theorem, K is
compact . Hence {P,,,} is tight.
  As the proof shows, we may demand that (8.3) hold for all P, With this
change, the theorem is true if {Pn} is replaced by an arbitrary family II . In
applications, we shall often prove (8.3) with 6, e, and i replaced by (say)
26, 3e, and 9~, which is just as good .
   Theorem 8 .2 transforms the concept of tightness in C simply by substituting
for compactness its Arzela-Ascoli characterization . Our next theorem goes
only a small step beyond this, but, even so, fills our present needs .
56    The Space C

THEOREM 8 .3           The sequence {P n } is tight if these two conditions are
satisfied :
     (i) For each positive n, there exists an a such that
(8 .4)                     Pn {x :      Ix(0)I > a} < n,                      n > 1.
   (ii) For each positive 8 and ij, there exist a 6, with 0 < b < 1, and an
integer n o such that

(8 .5)           1 P n {x : sup         Ix(s) - x(t)I > 8} < 7),                            n > no,
                 6         t<s<t+a
for all t.
  Of course, we restrict the t in (8 .5) to 0 < t < 1 ; if t > 1 - 6, we restrict
s in the supremum to t < s < 1 . Note that (8.5) is formally satisfied if
6 > 1/71 ; but we require 6 < 1 .
Proof. Fix band let

                           At   =   ~   x:     sup IX(s) - x(t)I > 8~
                                                                   8
                                             t<s<t+a

Now s and t each lie in intervals of the form [ib, (i + 1)6] . If Is - t I < 6,
then these intervals either coincide or abut ; it follows that

(8 .6)                     P,,,{x : w x (6) > 38} < P,,, (                   U       A ig ) .
                                                                         Z   < a-~
Since

(8 .7)                                              A za ) <    I
                                                               i<a -iPnAia),
                                P .( U
                                             <a 1

(8 .5)implies Pn {x :wx (b) > 3e} < (1 + [ 1/6])6i < 277(recall that 6 < 1) .t
Therefore condition (ii) here implies the corresponding condition in Theorem
8.2. Since condition (i) is unchanged, the result follows .

     The following corollary contains the essential point of the proof.
COROLLARY             If   0 = t o < t1 < . . . < t r = 1, and if
(8 .8)                      ti -t i_ 1 >6,                   2<i<r-1,
then
                                              r
(8 .9)        P{x :w x (b) > 38} <                 { :
                                                  Px        sup Ix(s) - x(t z _ 1)              I   > 8} .
                                             i=1         ti _ 1 <_s_ti

     Note that the inequality in (8 .8) need not hold for i = 1 and i = r.

t We use [a] to denote the integer part of a-the largest integer not larger than a .
                                            Weak Convergence and Tightness in C   57


  Although the inequality (8 .6) entails no real loss, (8.7) does, and condition
(ii) is not necessary .' Suppose, however, that the sets A lb (6 fixed, i varying)
are independent under P,, and all have the same measure p, which will be at
least approximately true for many of the measures P,, encountered in this
chapter. Then
                      P    U A lb = 1 - (1 - p)~1+[1/bl)
                          i<a1
If this quantity is bounded above by 77, then (if q < 2)

(8 .10)              < (1 + [        -log (1 - n) < 277,
                              1 p <
which is a restriction of the same order as (8.5). Therefore any effective
tightness criterion that goes beyond Theorem 8 .3 must make some sort of
positive use of dependence among the A ib .

Random Functions

Let X be a mapping from (S2, -4, P) into C . For the moment we do not
assume X to be measurable (X -1le (-- -4). For each co in S2, X (co) is an
element of C-a continuous function on [0, 1 ] whose value at t we denote by
X (t, w) . For fixed t, let X (t) denote the real function on S2 with value
X (t, w) at w ; X (t) is the composition Tr t X. Similarly, let (X01), . . . , X (tk))
denote the mapping from S2 into RI with value (X (t 1 , w), . . . , X (tk , w))
at w.
   If A - {x E C : x(t) < a}, then A E W and {co : X (t, (o) < a} - X-'A . It
follows that if X is a random element of C-that is, if X -1 6 cz s-then each
X (t) is a random variable (X(t) -1 91 (-- M) and hence each (X (t1), . . . , X (tk))
is a random vector . Suppose, on the other hand, that each X (t) is a random
 variable. If B is the closed sphere in C with center x and radius 6, then
           : X(w) E B} = nT {co
 X-1 B = {co                     : x(r) - 6 < X (r, w) < x(r) -I- 6}, where the
 intersection extends over the rationals, so that X -1B E -4. Since C is
 separable, X-1' c-- -4 follows : X is a random element of C. Thus X is a
 random function (a random element of C) if and only if each X (t) is a
 random variable . (We have merely proved once more that the finite-dimen-
 sional sets generate V .)
    Suppose now that {Xn} is a sequence of random functions . The sequence is
 by definition tight when the sequence of corresponding distributions is tight .
 According to Theorem 8 .2, {X, j is tight if and only if the sequence {X,,(0)}
 is tight (on the line) and for each positive E and 71 there exist a 6, 0 < 6 < 1,

 t See Problem 1 .
58   The Space C

and an integer n o such that
(8 .11)                       P{w(XX , 6) > s} < ~,                    n >

(We use w(x, 6) as an alternate notation for w.,(6) .) This condition stipulates
that the random functions Xn do not oscillate too violently .
  Theorem 8 .3 can be recast in the same way : {Xn} is tight if {,,'(0)} is
tight and if for each positive s and ?I there exist a 6, 0 < 6 < 1, and an
integer n o such that
                          1
(8 .12)                           P sup          I   Xn(s) - Xn (t)I > e <
                          d        t<s_t+b                                   }
for n > no and 0 < t < 1 (with s in the supremum restricted to t < s < 1
in case 1 - 6 < t < 1) .
   As explained in the Introduction, our first interest will be in random
functions constructed in the following way . Let $1, $2, . . ., be random
variables on some probability space (Q, -4, P) . For the present, the ~,z need
not have any special properties such as stationarity and independence . We
define Sn = ~1 + • • • + ~,z , with So = 0, and construct X,n from the partial
sums So , S1 , . . . , Sn. For points i/n in [0, 1], we set

(8 .13)                                X-            , w)       _
                                                                1 n Si(c))
                                                                    .
                                            (n
(We confine our attention to norming factors of the form 6-,/n-others are
possible .) For the remaining points t of [0, 11, we define Xn (t, co) by linear
interpolation : If t c [(i 1)/n, i/n], then


                              (i/n) - t     i - 1 + t - (i - 1)/n     (i
(8 .14)   X .n (t co) =          1/n    Xn(               1/n     X n' n)
                                              n)
                                                                   i - 1         1_
                                  1 - Si-1(w) + n t -                                  z(w)
                              O    n                        (        n) 6          n
  Since i - 1 = [nt] if t E [(i - 1)/n, i/n), we may define the function
more concisely by

(8 .15)     Xn(t, w) _             1      S[nt](co) + ( nt - [nt])                 ~[nt1+1(w) •
                                  Orv
                                      n                                      6V
                                                                              1n
Since the ~z , and hence the Si , are random variables, it follows by (8 .15)
that Xn(t) is a random variable for each t . Therefore the Xn are random
functions .
   When do these random functions form a tight sequence? Since Xn(0) = 0,
certainly {Xn (0)} is tight . By using the definition (8 .15) we can translate
(8 .12) into a restriction on the fluctuations of the partial sums S .. If t = k/n
                                                       Weak Convergence and Tightness in C   59

and t + 6 = j/n, with k and j integers, then (8 .12) reduces to
                                          1
(8.16)                  1 P max               - I Sk+i - Ski > E} < y] .
                               i< .,I UJn

  Although (8.12) and (8 .16) in general differ if t and 6 are not integral
multiples of l 1n, the discrepancy is, as we shall show, irrelevant to our
purposes. Consider the integers j and k defined by the inequalities
                    k<t<k-f-1                        j-1
                                                               <t+-<~ .
                    n                 n                n          2 n
Because of the polygonal character of Xn, we have

               sup      I   X.(s) - X.(t) < 2 maxI               1 - I Sk+i - S ki'
             t<s<t+1b                                 0<i< j-k 6.Jn

If n > 4/6, then j - k < no, so that the maximum on the right does not
decrease if the restriction i < j - k is relaxed to i < nS. Therefore, if (8 .16)
holds for all k and all n > n o , then (8 .12) holds for all t and all n >
max {no, 4/8}, provided the E, 77, and b in (8 .12) are replaced by 2E, 277, and 28,
respectively, which amounts only to a renaming of these quantities .
   Thus {Xn} is tight if, for each positive E and 77, there exist a b, with
0 < 6 < 1, and an integer no, such that (8 .16) holds for all k and for all
n > n o . The maximum in (8 .16), which extends over i < nO, becomes easier
to work with if n6 is replaced by an integer . If n8 is an integer m-it need not
be-then the inequality (8.16) becomes

                        P{max I Sk+i - Ski >_ E= Or,/ _
                                                      M                ?1 d.
                             i<m                           J

Put A = E/Ja (if 6 is small, A is large) ; the inequality then further reduces to
                                                                       E2
                            PI max I Sk+i - Sk i > AQ.~/m} <                .
                              xGm                                     ~2
Since 7782 is positive if ri and E are, we are led to formulate the following
theorem .
THEOREM 8 .4 Suppose {Xn} is defined by (8 .15) . The sequence {X,,,} is
tight iffor each positive E there exist a 2, with A > 1, and an integer n o such
that, if n > n o, then

(8.17)                       P max iSk+i - Ski > A6.Jn
                                i<n                                < 22
holds for all k .
60   The Space C


   We require . > 1 ((8 .17) is trivial if 2 < \/ e), which corresponds to the
requirement 6 < 1 in . Theorem 8 .3 . In concrete cases, proving (8 .17) forces
large 2's on us .
Proof. Given E and i , we shall produce a 6 (0 < 6 < 1) and an n o for which
(8 .16) holds for all k if n > no. Since (8 .16) becomes more stringent as E
and 17 decrease, we may assume 0 < E, 77 < 1 .
   By the hypothesis, with net in place of e, there exist 1 (A > 1) and n1
such that
                                                                          2

(8 .18)               P max iSk+i - S k i >       2'gvn <
                        i<   n                                        2


for n > n 1 and k >1 . Put 6 = E 2 /22 ; since 2 > 1 > E, we have 0 < 6 < 1 .
Let n o be an integer exceeding n1/6.
   If n > no , then [nb] > n 1 , and it follows by (8 .18) that
                                                                      nE2
                   P{ Zmaal I Sk+i -. Ski > 2a-,I[n6]} < 6
                                                                              2



Since 2J [n8] < es/n and y7E 2/12 = 716, (8 .16) holds for all k if n > n o . This
proves Theorem 8 .4 .
  It is not hard to see that it is enough that (8 .17) hold for k < n12/E, but
we shall not need this . If {fin} is stationary, then (8 .17) reduces to

(8 .19)                   P{max iSi I > 1oJn) <                   .
                                 i<n                         -2
We can absorb a into A and require
                                                 AV-n)
(8 .20)                          P{max (Si l >           <
                                   a<n                        2


with 2 > a.
   We shall see later that in some circumstances the hypothesis of Theorem 8 .4
is necessary as well as sufficient .

Coordinate Variables
The projection ir t , with value Tr t(x) = x(t) at x c- C, is a random variable on
(C, i') . We shall often denote this random variable by xt : For fixed t, x t is
the function on C with value x(t) at x. If there is a probability measure P on
(C, `), {x t : 0 < t < 1 } is a stochastic process . We think of t as a time
parameter, and the xt are commonly called the coordinate variables or
functions . The distribution of xt depends on the measure P, and we shall
speak of the distribution of xt under P ; we shall often write P{x t E H} in
                                                       The Existence of Wiener Measure         61

place of P{x :x t E H} and f x t dP in place of f x t P(dx) . Finally, when t is a
complicated expression, we shall often revert back to x(t), still intended as a
coordinate function.
Remarks.   The general theory of weak convergence in C (Theorem 8 .2, for example) is
due to Prohorov (1956) . Theorem 8 .4, a convenient reformulation of Theorem 8 .3,
resulted from discussions with F . Topsoe .
  Stone (1963) treats weak convergence in a space of continuous functions on [0, oo) .
Lamperti (1962b) discusses spaces of functions satisfying a Holder condition .

PROBLEMS
   1. Let X(t) = t~, where ~ is a random variable with P{j cI > a} - (x- 1 as a - oo, and,
for every n, let P,, be the distribution of X. Then {P,z} is tight but does not satisfy condition
(ii) of Theorem 8 .3 .


9 . THE EXISTENCE OF WIENER MEASURE

Wiener Measure

Wiener measure, denoted here by W, is a probability measure on (C, W)
having the following two properties . First, for each t, the random variable
x, is normally distributed under W with mean 0 and variance t :

(9 .1)                     W{xt < a} =                     e u2/2t du .
                                             J 27rt   --

If t = 0, this is interpreted to mean W{xo = 0} = 1 . Second, the stochastic
process {x t :0 < t < 1} has independent increments under W: If
(9.2)                   0<to<t1< . . .<tk<1,
then the random variables
(9 .3)                  - x tO, xt2 - x tl , . . . , xtk   x tk-1
                    xtl                                  -
are independent under W . In this section, we prove there does exist such a
measure W.
   If W has these two properties and if s < t, then x t (normal with mean 0
and variance t) is the sum of the independent variables x., (normal with mean
0 and variance s) and x t - x, so that x t - x., must be normal with mean 0
and variance t - s, as may be seen- by dividing the characteristic functions.
Thus, when (9.3) holds,
(9 .4)     W { - x t,-1 < ai, i = 1, . . .,k}
                                                              1                    2
                                                                          f
                                                 k
                                                                              e -u I2(tz t=_1 ) du .
                                             -~ N/27r(ti - ti-1) J
62   The Space C

In particular, the increments are stationary (the distribution of x t - xs
under W depends only on the difference t - s) as well as independent .
   If we regard x(t) as (one coordinate of) the position at time t of a moving
particle, then x itself gives the history of the particle's motion (relative to
this specific coordinate) from time t = 0 to time t = 1 . Wiener measure
gives to these paths x a distribution appropriate for the description of
Brownian motion-the motion of a pollen grain suspended in water .
   In proving the existence of W, we face the problem of proving the existence
on (C, `') of a probability measure with specified finite-dimensional distribu-
tions . There can for an arbitrary specification be at most one such measure,
and for some specifications there is none at all (there is, for example, no P
under which the distribution of xt is a unit mass at 0 for t < 2 and at 1 for
t > 2) .
THEOREM 9 .1 There exists on (C, ') a probability measure W such that
 (9.1) holds and such that the random variables (9 .3) are independent under W
 whenever (9 .2) holds.
Proof. Let ~ 1 , ~ 2 , . . . be independent and normally distributed (on some
 (SZ, -4, P)) with mean 0 and variance 1 . Let X,, be the random function defined
 by (8 .15) with 6 = 1 :

(9 .5)       X,.b (t, w) = 1- S[nt](o)) + (nt - [nt]) 1 ~[nt]+1(w) •
                           Jn                            Jn
Let Pn of the distribution of Xn on C. This measure is well defined because,
as we showed in the preceding section, Xn is measurable (X,-,IV (-- R) .
  We shall first show that the finite-dimensional distributions of the Pn
converge weakly to what we want the finite-dimensional distributions of W
to be . After that, we shall prove that the sequence {Pn} is tight. It is clear
that the limit of any weakly convergent subsequence {Pn .} will satisfy the
requirements placed on W. The idea is that the Pn approximate the putative
measure W.
  The finite-dimensional distribution Pn 1rtl l . tk is just the distribution of the
random vector (Xn (t l), . . . , Xn (tk)) . Consider a single time point t. By (9.5)
and the assumed normality of the fin , Xn (t) is normal with mean 0 and
variance
                               [nt] + (nt - [nt])2
                                 n             n
this variance differs from t. by at most 2/n . Thus Xn (t) -   . N(0, t) (see (4.9)
for this notation) .
   Clearly, we can treat two or more time points in the same way ; the finite-
dimensional distributions therefore converge weakly to those prescribed
 for W.
                                                     The Existence of Wiener Measure    63

   To prove that {Pn } is tight, we apply Theorem 8.4 . To prove (8.20), write

(9.6)                   E i = {max IS ;I < 2AJn < ISiIJ .
                                  9<i

                                                      n
By the stationarity and independence of the ~ , we have

(9.7)    P{max I Si) > 2A,/n} < P{ISnI > AJn}
           i<n
                              n-1
                                       n {IS. - Si l > AV-
                                                       AJn})
                                                           J)
                                  i=1
                                                     n-1
                              = P{IS n I > 2-,/n}_} + I P(Ei )P{IS n-iI > AV-n},
                                                           i=1

                                                V_   + n-1
                             < P{ISnI > 2 n}                     P(E)P{1'Sn-il > A Jn - l}
                                                          i=1

Since S;/Vj is normally distributed with mean 0 and variance 1 and hence has
a finite third absolute moment a independent of j (a - 2V 2/17), it follows
by (9.7) and Chebyshev's inequality that
                                             + n-1
                  P{max IS,I > 2AVn} < -
                     i<n
                                          a

                                          2'
                                                         a
                                                ,I P(E ) - '
                                               i=1       A3
                                                                    i
             i
Since the E are disjoint, we can conclude

(9 .8)           P{max ISz I > 2A. ./n}
                   z<n
                                            < a,          n = 1, 2, . . . .

Given 8, choose A so that 2a/2 < e and 2 > 1 . Then (9.8) implies

                           P{max ISiI > 2A.Jn}
                                 a<n
                                                      < A2 ,
which is (8 .20), except for the irrelevant factor 2 on the left . By Theorem 8.4,
therefore, the {P n } are tight, which completes the proof .
  Thus Wiener measure exists . In the sections following, we shall derive
some facts about W. For the present, let us only show that the elements of
C are of unbounded variation, except for a set of Wiener measure 0. This is
interesting because it exhibits a sense in which Wiener paths (elements of C
chosen according to the probability measure W) are highly irregular-they
are continuous, but only just .
  An element x of C is of bounded variation if and only if there exists a
number Mx such that
                             k

                                  x    (t) - x(ti-1)I < M x
                            i=1
64   The Space C

for all to, t1 , . . . , tk with 0 < to < t l < - < tk < 1 . Therefore it will
suffice to show that, if
                                  2"
                                        l         i - 1
                          MX) Z=ix -2n - x 2 n
                               _                          ,

then fn (x) -* oo except for x in a set of W-measure 0 . Now INS (see (4.10))
has positive mean b and variance c (b ='2/7r and c = 1 - 2/ir) . Since the
     _n
Ix(i2 ) - x((i - 1)2 -n)I are, under W, independent with mean 2- n' 2 b and
variance 2- nc, the mean and variance of fn (x) are 2n' 2b and c. It follows by
Chebyshev's inequality that W{x :fn (x) > a} - 1 for each a. Since
                                                    oo except on a set of Wiener
f.+,(x) > fn (x), it follows further that fn(x) --k
measure 0 .
   We shall also use the symbol W to denote a random element with values
in C and with Wiener measure as its distribution ; that is, W is a measurable
mapping from some (SZ, R, P) to C with the property that
                     P{w : W(co) E A} = W(A),       A c e,
where the W on the right is Wiener measure as already defined . That there
exists such a random element follows by the argument centering on (4.4).
This dual use of W should cause no confusion .
   We shall denote by Wt(w) or W(t, w) the value at t of the random function
 W(co) . Thus { Wt : 0 < t < 1 } is a stochastic process whose paths are
continuous for all w . This process we shall call the Wiener process or the
Brownian motion process. The relation Xn -* W can be interpreted in
accordance with (4.5) or in accordance with (4.7), depending on whether W
is construed as a random function or as a measure-the meaning is the same
for the two interpretations .

 The Brownian Bridge

 A random element X of C is Gaussian if all its finite-dimensional distributions
 are normal . The distribution in C of a Gaussian random element is com-
 pletely specified by the means E{X(t)} and product moments E{X(s)X(t)}
 0 < s, t < 1, because these determine the finite-dimensional distributions .
 For W, the moments are
 (9 .9)                            E{Wt } = 0

 and
 (9 .10)                  E{WS Wt } = s      if s < t .
   In studying the behavior of empirical distribution functions, we shall need
 a Gaussian random element W° of C whose distribution is specified by the
                                                   The Existence of Wiener Measure   65

requirements
(9 .11)                               E{Wt } = 0
and
(9 .12)                 E{Wt Wt} = s(1 - t)          if s < t.
Although we could prove the existence of such a W ° by the methods of
Theorem 9 .1, it is simpler to construct W° from W by setting

(9 .13)                   Wt =Wt -tW1 ,            0<t<1 .
Certainly W ° , thus defined, is a Gaussian random element of C, and (9 .11)
and (9 .12) follow from (9 .9) and (9.10) .
  The random element W° is called the Brownian bridge (or tied-down
Brownian motion) . Note that WO' = Wl' = 0 with probability 1 . From (9 .11)
and (9 .12) it follows that

(9 .14)        E{(Wt - Ws)2} = (t - s)(1 - (t - s))              if s < t
and that
(9 .15)   E{(Wo - WS1)(Wtz - Wtl)}
                              - (S2 - S1)(t2 - t1)  if S1 :!~ S2 < tl ~ t2 .
   We shall also use W ° to denote the distribution on C of the random
element W° . If h : C --- C takes the function x to the function with value
x(t) - tx(1) at t, then the measures W° and W are related by W° = Wh -l.

Separable Stochastic Processes'

Let us connect our construction of Wiener measure with the notion of a
separable stochastic process. According to Kolmogorov's existence theorem
(p . 230), there exists a stochastic process { ~ t : 0 < t < 1}, on some probability
space (S2, 9, P), for which the distribution of each finite collection of the ~t
coincides with the corresponding finite-dimensional distribution prescribed
for W. In the standard construction, (0, -4) is the product of a collection of
copies of (Rl, a1), one copy for each t in [0, 1], and the ~t are the coordinate
functions .
   The set Q o of w for which E t(co) is continuous in t, 0 < t < 1, need not
satisfy P(Q0) = 1 ; indeed, in the standard construction 0 0 does not even lie
in -4. It is possible, however, by another procedure, to find a separable
process with the prescribed finite-dimensional distributions . The process
{~ t : 0 < t < 1 } on (S2, 4, P) is separable T if -4 is complete relative to P and

t The rest of this section may be omitted .
$ See Doob (1953, p . 51) .
66    The Space C

if there exists in M a set E of measure 0 and in [0, 1 ] a countable set To such
that, for each a and fi and for each open interval I, we have
(9 .16)
     {w :a< ~ t (w)tEInTo }- {w :a< ~t(w)tEln-T}(-- E,
where we have written Tin place of [0, 1] . The left-hand set in the difference
here lies in R because T o is countable ; since P(E) = 0 and R is complete, the
right-hand set in the difference must lie in -4 also and have the same
probability.
    If {fit} is separable and has the finite-dimensional distributions appropriate
to Brownian motion, then' the set Q 0 of w for which the sample path ($ t (w)
as a function of t) is continuous lies in -4 and satisfies P(Q 0 ) - 1 . If we map
Q 0 into C by carrying w into its sample path, and if we carry P (restricted to
SZ o) over to (C, V) via this mapping, we arrive at W, which gives another
method of constructing Wiener measure .
    The problem of proving the continuity of the sample paths of separable
processes and the problem of constructing measures on (C, V) are effectively
the same . If each separable process having certain specified finite-dimensional
distributions also has continuous sample paths with probability 1, then, as
the above construction shows, there exists on (C, 'e) a probability measure
with these finite-dimensional distributions . Let us prove the converse .
THEOREM 9 .2 If {~ t :0 ~, t < 1} is a separable stochastic process, and if
there exists on (C, ') a probability measure with the same finite-dimensional
distributions as {sit}, then the sample paths of the process are continuous with
probability 1 .
Proof. In proving this result it is no restriction to assume that T o contains
all the rationals in the unit interval, in which case (9 .16) holds if I is a closed
interval with rational endpoints . We shall use the relations
(9 .17)                 (U o E9) + (U o Ee) (-- U e (E9 + EB)
and
(9 .18)                (n o E,)+ (n o Ee) (-- U (E0 + EB),
                                                    B

each of which is valid whatever the range of the index 0 . $
  Let V denote the general system
(9.19)                  V : k ; r o , . . . , rk ; al , . . . , ak,
where k is an arbitrary integer, the ri and the ai are rational, and 0 =
ro < . . . < r k =1 . There are countably many such systems V. For V given

t See Doob (1953, p . 393) .
$ Recall that + stands for symmetric difference .
                                                     The Existence of Wiener Measure      67

by (9 .19) and e positive, define
                          k
(9.20)                      :a2 < ~ t(w) < ai + E, t E [ri-1 , ri] n To}
          Q T ,,(V, e) = fl {(,)
                         i=1

and

(9.21)                         QTo = fl U Q T o (V, e),
                                         e V

where the intersection extends over positive, rational e . Let SZT (V, E) and
OT be the same sets but with To replaced by T = [0, 1 ] in (9 .20) and (9.21) .
   Since Q T ( V, e) + QT o ( V, e) = E, (9 .17) and (9 .18) imply

(9 .22)                             QT + S2 T0 c E.
Now S2T o( V, E) is a countable intersection of sets in 64 and hence itself lies
in -4 . Therefore QT, E R. It follows by (9 .22) that O T lies in -4 and P(QT) =
P(QT0). Since Q T is exactly the set of w with continuous paths, we need only
prove --
(9.23)                                 P(QT0) = 1 .
  Let (t 1 , t2 , . . .) be an enumeration of the points in To . For V given by
(9.19) and e positive, let HTO (V, e) denote the set of points z -(Z1, z2, . . .)
in R `° such that, for each i = 1, . . . , k, the inequality OCi < z u. < ai + e
holds for every coordinate index u for which t.u E [ri_ 1 , r i] . Then HTO (V, s) E
Iq°° . If the mapping 9 : S -- R°° is defined by q) (w) _ (~ t ,(w), ~ t2(w), . . .),
then qr1 HTo (V, e) = SZ T0 (V, e) . If HTo = f E U vHT0 (V, e), then HT . E R°°
and

(9 .24)                             gr -1 H To = SZTo.

  Now define Y :C--> R°° by V (x) _ (x(t1), x(t2 ), . . .) . Let P be the
probability measure on (C, 'e) whose finite-dimensional distributions coincide
with those of {$t} . If H is a finite-dimensional set in R°°, then

(9.25)                           P(99 -1H) = P(yr 1H) ;
since the finite-dimensional sets form a field generating R°°, (9 .25) holds also
for every H in 9°° . By (9 .24), therefore, P(Q To) = P(y -1 HTo). But p1 HTo =
C, from which (9 .23) follows .
  Thus proving continuity for separable processes and constructing measures
on C are the same activity .
Remarks. See Ito and McKean (1965) for other constructions of Wiener measure and for
some history . For an interesting account of Wiener's early work, seethe articles in "Norbert
Wiener, 1894-1964," Bull. Amer . Math . Soc. 72 (1966), number 1, part II.
68   The Space C


PROBLEMS

  1. Let c,„ with r ranging over the rationals in [0, 1], be random variables with the
finite-dimensional distributions appropriate to Brownian motion . By adapting the argu-
ments in the proof of Theorem 9 .1 but avoiding the tightness concept (and indeed all
mention of the space C), show that {~ r} is, with probability 1, uniformly continuous in r .
For t irrational, define ~t = lim,r_., t a,., and, by the argument preceding Theorem 9 .2,
construct Wiener measure on C anew .
  2 . Show that Wiener measure has no locally compact support .
  3. For 0 S t < cc, define Vt = ( 1 + t)Wo (j+t) , where W° is the Brownian bridge. The
process { Vt : t > 0} has sample paths that are continuous for all w, the finite-dimensional
distributions are Gaussian, and the moments are E{Vt} = 0 and E{Vs VV } = min (s, t) . The
process thus represents a Brownian motion over the time interval [0, co) .


10 . DONSKER'S THEOREM

The Theorem
Given random variables ~1, ~2, . . . defined on (S2, -4, P), let Sn =
~1 + . . . + ~n be the partial sums and define a random element X,,, of C by
(8 .15) :
(10.1)       Xn (t, w) = 1 _ S [ntl (ul) + (nt - [nt]) 1 - ~[ ntl+1((0) •
                       QJn                            avn
The following theorem on the convergence in distribution of the Xn is due to
Donsker. The Introduction has examples of its use .
THEOREM 10 .1 Suppose the random variables ~n are independent and
identically distributed with mean 0 and finite, positive variance a2 :
(10.2)                            n = 0,
                              E{~ }               E{~n2} =     a2.
Then the random functions Xn defined by (10 .1) satisfy
(10.3)                                    Xn -- W.
Proof. We first show that the finite-dimensional distributions of the Xn
converge to those of W. Consider first a single time point s ; we must prove
(10.4)                                   X. (s)       Ws.
Since
                                   1-
(10 .5)               X .(S) -           S[ns]    <     1 - ~[ ns]+1   0
                                 or.Jn                a ,n
by Chebyshev's inequality, (10 .4) will follow by Theorem 4 .1 if we prove

                                        1 S[ns] - Ws .
                                      av n
                                                                      Donsker's Theorem     69

lut this is a direct consequence of the Lindeberg-Levy central limit theorem
Theorem 7.4) and the fact that [ns]/n --> s.
  Consider now two time points s and t with s < t . We are to prove
                       (XX(S), XX(t))    (Ws, Wt),
vhich will follow by Corollary 1 to Theorem 5 .1 if we prove
                    (Xn(s), XX(t) - Xn(s)) --~~ (Ws , Wt - WS ).
3ecause of (10 .5) and the same relation with t in place of s, it is enough to
)rove

10 .6)           ( 1     S En* 6 1 ,- (S[nt] - `SCns])      -~ (Ws , Wt - Ws) .
                   6~n

Since the components on the left are independent, by the independence of the
In, (10 .6) follows by the central limit theorem and Theorem 3 .2. A set of
three or, more : time points can be -treated in the same way, and hence the
finite-dimensional distributions converge properly .
  We- prove tightness via the following lemma, which is slightly more
general than presently required .
LEMMA Let ~1, . . . , ~ m be independent random variables with mean 0
znd finite variances 6 i 2 ; put Si = ~1 + . . . + ~ i and si t = 6 1 2 + . . . + 6i2
Then

;10 .7)            PCmax ISiI > As m } < 2P{ISmI > (A - .J2)s m) •
                       i<m
  To prove (10 .7)-note that it is trivial if 2 <'12-consider the sets

                             E i = { max IS;I < As m < ISiI} .
                                      7<i
Clearly,

;10.8)     P{max ISiI        Asmt < P{ISmI > (A - V 2 )Sm}
             i<m
                                                      M-1                               _
                                                  +         P(Ei () {ISmI < (A - 1/ 2 )sm}) .
                                                      i=1
Since ISi I > As m and IS m I < (A - 12-)s n together imply IS m - SiI > V 2s .,
it follows by Chebyshev's inequality and the assumed independence of the
$i that the sum in (10 .8) is at most
                                                                 12
(10.9)     ~ 1P(Ei)P{ISm - Si I > J2Sm} < ~1P(Ei)                     1 6k 2
           i=1                                     i=1          2S m k=i+1
                                                         M-1
                                                  < 2 J P(Ei )        <   2 P max I Si I > Asm .
                                                         i=1                  i<m
And now (10 .8) and (10 .9) combine to give (10.7).
70   The Space C

  Applying the lemma to the random variables involved in Theorem 10 .1,
we have, for . > 2J2,

                    P max I SiJ > ),Q Jn <_ 2P{ISnI >_ 22U Jn} .
                       i<n

By the central limit theorem,

                   P{ISnI ~! 2Aor V n} -+ P{INI > 2'1 } <         E{IN1 3 } .
                                                              3
Therefore, if s is positive, we have

(10.10)                lim sup P{max ISi I > 2orJn <
                         n-~co    i< n            }   e
for A sufficiently large . Tightness now follows by Theorem 8 .4.

An Application
As pointed out in the Introduction, Donsker's theorem has this qualitative
interpretation : Xn -4. W says that, if T is small, then a particle subject to
independent displacements 1 , 2, . . . at successive times 'r, 2-r, . . . will,
viewed from afar, appear to perform approximately a Brownian motion .
  More important than this qualitative interpretation is the use of Donsker's
theorem to prove limit theorems for various functions of the partial sums
Sn . The Introduction indicates how to use the relation Xn       W to derive the
limiting distribution of maxi <n Si ; let us now carry this through in detail .
   Since h(x) = sup s x(t) is a continuous function on C, Xn -* W implies, by
Corollary 1 to Theorem 5 .1, that
                                 suet X JO      sup s Wt .
The obvious relation
                               sup X n(t) = max      1 _ Si
                               0<t<1          i<n 6Jri
 now implies
(10.11)                          1 _ max S i - sups Wt .
                                QJn i< n
 Thus we would have the limiting distribution of max i < n Si (properly
 normalized) if we knew the distribution of sup s Wt . (We still assume the
 hypotheses of Theorem 10 .1, of course .) The technique we shall use to find
 this latter distribution is to compute the limiting distribution of max i , Si
 in an easy special case .
   Suppose that So, S, . . . . are the random variables for a symmetric random
 walk starting from the origin . Suppose, that is, that the n are independent
                                                            Donsker's Theorem   71

ind satisfy
;10.12)                    P{~n = 1} = P{si n = - 1} = 2.
Let us show that, if a is a nonnegative integer, then

    10 .13)      P max Si > a = 2P{S n > a} + P{S,, = a} .
                   0<i< n
1



The case a = 0 is easy. Assume a > 0 and put Mi = max o< ; <i S;. Since
      P{Mn >a}-P{Sn =a}=P{Mn >a,SS <a}+P{Mn >a, S.>a}
and
                          P{Mn >a,Sn >a}=P{Sn >a},
(10 .13) will follow if we prove
(10.14)           P{M n > a, Sn < a} = P{Mn > a, Sn > a}.
  Because of (10 .12), all 2n possible paths (S1, S2,       n) have the same
probability 2- n. Therefore (10.14) will follow if we show that the number of
paths contributing to the left-hand event is the same as the number of paths




contributing to the right-hand event, and to show this it suffices to match the
paths in a one-to-one manner .' Given a path (S 1 , S2 , . . . , S,,) contributing
to the left-hand event in (10.14), match it with the path obtained by reflecting
through a all the partial sums after the first one that achieves the height a.
Since the correspondence is one-to-one, (10.14) follows . This argument is an
example of the reflection principle.
   Let a be an arbitrary nonnegative number, and let an = - [-an'] . By
(10.14), we have

(10 .15)      P max 1_ S i > -a = 2P{S n > a n} + P{S n = a n } .
                i Gn J n
By the central limit theorem,
                          P{Sn > an } -- P{N > a}
t The new mathematics .
72    The Space C
(a2 = 1 in this case, in view of (10.12)). Since the largest term in the symmetric

binomial distribution goes to 0, the term P{Sn = a n } in (10 .15) is negligible.
Thus
(10.16)              Pmax 1-Si > a ->2P{N>a},                  a>0.
                      { i<n V n   } -

     Combining (10 .16) with (10 .11) (still assuming (10.12)), we conclude

(10.17)             P{sups Wt < a}   _ J2   f -e 1,2 du,
                                               0
                                                               a > 0.
                                        27r

Of course, the left side of (10 .17) vanishes if a < 0. We have derived a fact
about Brownian motion by combining Donsker's theorem with a computa-
tion involving random walk, a computation that was simple partly because it
reduced to enumeration and partly because a random walk cannot pass
above a positive integer a without passing through it .
  Let us now drop the assumption (10 .12). If the $n are independent and
identically distributed and satisfy (10.2), then (10 .11) holds, and from
(10.17) we can now conclude

(10.18)        P     1 - max S i < a -~       2 r«e ~'u2 du,     a > 0.
                   { V n i<n         }       / 2Tr 0

Thus we have derived the limiting distribution of max i , . Si under the
hypotheses of the Lindeberg-Levy theorem .
  This argument follows a general pattern . If h is continuous on C-or
continuous except at points forming a set of Wiener measure 0-then
Xn -2- * W implies

(10.19)                              h(XX)      h(W) .

(In the case just analyzed, h(x) = sue t x(t).) We can find the limiting
distribution of h(X,,) if we know the distribution of h(W), and we can often
find the distribution of h(W) by finding the limiting distribution of h(Xn)
in some special case and then using (10 .19) in the other direction . The next
section contains further examples in this pattern.
   Therefore, if the n are independent and identically distributed with
E{fin} = 0 and E{~ n 2} = a2, then the limiting distribution of h(X,,) does not
depend on any further properties of the fin. For this reason, Donsker's
theorem is often called the (or an) invariance principle . Here we shall call it
instead the (or a) functional central limit theorem . This term will be used for a
variety of similar theorems in what follows, just as the term central limit
theorem itself is used for a whole class of theorems .
                                                                   Donsker's Theorem    73


A Necessary Condition for Tightness

Let us drop the assumption that the ~n are independent and directly assume
that X,,    W (with Xn still defined by (10.1)) . We shall show that, in this
circumstance, for each positive e there exists a A exceeding 1 such that

(10.20)                       P{max JSZJ > 2a
                                 a<n
                                           .,,/-n}     <~   2


holds for all n exceeding some no. In case {fin} is stationary, this is just the
hypothesis in Theorem 8 .4, which we verified in proving Donsker's theorem .
   Let Y - sups I Wt 1 . Because of (10 .17) and the symmetry of W under
reflection through 0, Y has a finite second moment . From (10 .19) with
h(x) - sup s Ix(t)J,it follows that, for each positive 2,

(10.21)       P{max I Si I > Acr.Jn} -- P{Y > A} <               Y2 dP.
                z <n                               A ' - ft Y?x}
                                                   -
Given e, choose A so large that the integral here is less than e ; it follows
from (10 .21) that (10 .20) holds for all sufficiently large n .
  Thus we see, after the fact, that (10 .20) is "the" condition to verify in
proving tightness in Donsker's theorem . In Chapter 4 we shall use the same
condition in proving functional central limit theorems for sequences of
dependent random variables .
  The preceding argument really shows this : Suppose that {fin} is stationary
and that the finite-dimensional distributions of the Xn defined by (10 .1)
converge to those of a random function X, where sue t JX(t)I has a finite
second moment. Under these conditions, if {Xn} is tight, then the hypothesis
of Theorem 8 .4 is satisfied . To this extent, this hypothesis is necessary ;
compare the remarks centering on (8.10).

Another Proof of Donsker's Theorem f

The rest of this section is devoted to a second proof of Theorem 10 .1 . The
proof is interesting because it makes little use of the preceding theory . In
fact, granted the existence of Wiener measure, J we need only Theorem 2 .2
and the central limit theorem .
  We are to prove Pn =:> W, where Pn is the distribution of X,,. According to
Corollary 2 of Theorem 2 .2, it is enough to prove that Pn (A) --* W (A)
whenever A is a finite intersection of open spheres and satisfies W (aA) ^ 0 .

t The rest of this section may be omitted .
I Which can itself be established by a direct argument ; see Problem 1 of Section 9 .
74    The Space C

Now if A is the intersection of spheres with centers x 1 ,                      xk and radii
E l , . . . , Ek , and if

                           y(t) = max (xi(t) - E i )
                                         1<i<k
and
                                  z(t) = min (xi(t) + E),
                                         1<i<k
then A has the form
(10.22)                  A = {x :y(t) < x(t) < z(t), 0 < t < 1} .
We are to prove
(10.23)                               Pn(A) -- W(A)
under the assumptions that A is defined by (10 .22) with y, z E C and that
W (aA) = 0 . We may also assume that y(t) < z(t) for all t, since A is other-
wise empty . (If y(O) 0 0 and z(0) 0 0, then W(aA) = 0 holds automatically,
but this need not concern us .) From here on, y and z are fixed .
  In our first proof of Donsker's theorem, we showed that the finite-dimen-
sional distributions of the P,, converge weakly to those of W. This fact,
which does not really involve the space C at all, we shall assume here . Thus

(10.24)     lim P,,{x : (x(tl), . . . , x(tk)) E H} = W{x : (x(tl), . . . , x(tk)) E H}
            n-* w

holds for each k-dimensional Borel set H satisfying
                           W{x : (x(tl), . . . , x(tk)) E aH} = 0 .
     If, for integral v,
                                  i    i           i
                    A V = x :y      <x        <z             0,1 1 . . .,v },
                                  v
                                 (i    v           v
then, as u increases to infinity, A2u decreases to the set of x for which
y(t) < x(t) < z(t) holds for all dyadic rationale t. But if W (aA) = 0, then
this last set differs from A by a set of W-measure 0 . Therefore for each
positive ij there exists a v such that W(A) < W(A v) < W(A) + 77 . Since
P,,(A) < P,,(Av), and, since lim n P,,(Av) = W(A V) by (10.24), we have
lira sup,, P,,(A) < W(A) + ij . Since was arbitrary,
 (10.25)                          lim sup,, P,,(A) < W(A).
     We complete the proof by showing that
 (10.26)                          lim inf,, P,,(A) > W(A),
which is the harder part . Given i, choose E so that, if
 (10.27)        D(s) = {x :y(t) + 3E < x(t) < z(t) - 3s, 0 < t < 1},
                                                                                  Donsker's Theorem 75

then W(D(E)) > W(A) - 71. (Clearly, the set (10 .27) increases to A as e
decreases to 0 .) Now define
                     (k)                           k)
      D v(e)= x :y               +3s<x(               < z k) -3e,k=0,1, . . .,v} .
                        V                          v(v
For each v, we have D(E) c D„(E) and hence
(10 .28)                           W(D,(e)) > W (A) - ~.
Choose and fix a v so large that

(10 .29)             9U < 77,                            < E,         w z (v) < e,
                                                   (U)
                                              WY



where w denotes the modulus of continuity (8 .1) . Then n > v implies

(10 .30)                          w11         < e,         wz         < E.
                                        (n)                     (n)
   Let Ln denote the set of elements of C that are linear on each interval
[(i - 1)/n, i/n], i = 1, . . . , n, and let G n be the set of x in C for which


(10 .31)                        Y n      + E< x (n) < z (n)-E
                                 ( )
is violated for some i = 0, 1, . . . , n . If x c- Ln, if x e G,,,° (so that (10 .31)
holds for all i = 0, 1, . . . , n), and if n > v, then, by (10 .30), y(t) < x(t) <
z(t) for all t E [0, 11, so that x c- A . Thus Ln n G nc c- A. Let Gn,r be the
set of x for which the double inequality (10 .31) holds for i < r but not for
i = r . Since Pn (L n) = 1, and since the G n,r are disjoint and add to G, we
have
                                               n
(10.32)                         P n(Ac) <           Pn(Gn,r),          n > v.
                                              r=0
   For 1 < r < n, let kn,r denote that integer k (1 < k < v) such that
 (k - 1)/v < r/n < k/v and let k
                               .,0 = 0. By (10 .32),
                            n                                    _x (kV
(10.33)    P n (Ac) <           Pn (G n,r n {x:
                        r=1                              x (n)               r)
                        n                     X (r
                    + ~ Pn (Gn,r                    - x (---V.")
                       r=1
 If x E G n, r and Ix(r/n) - x(k n , r/V)l < e, then, by (10 .30),
                                              (k
                     x (k., r) 0                   . 'r) + 3e, z kV-,r) - 3e1,
                                         Cy        V            (
76 The Space C

so that x 0 Dv(s) . Thus the first sum on the right in (10 .33) is at most
Pn(Dv(s)c) :

                                                                     x(r)
(10 .34)   Pn(AC) < Pn(Dv(s)c) + n P n Gn,r n { x :                         - x (kvn,r)         e))
                                r=1   (                                 n                 -2:
for n > v .
  We shall now show that the sum in (10 .34) is small. Observe first that


(10 .35)                       J(x t - x3)2 dP n < 9't - si

for all s, t, and n. In fact, if s and t are of the form i/n and j/n, then the
left side of (10 .35) is E{(Si - S;)2/no 2 } = I t - sf ; if s and t lie in the same

subinterval [(i - 1)/n, i/n], then the left side of (10 .35) is n(t - s) 2 , which is
at most i t - sl ; and the general result follows by Minkowski's inequality .
By the independence of the ~n, therefore,


(10 .36)   Pn (Gn,r n ~x :
                                x                v
                                    n) - x (k ,'')
                                             P                  j
                                                 n(Gn,r)Pn, x : x (
                                                           l        n
                                                                      r) - x (kn .r)
                                                                                  v

                                          < Pn(Gn,r)     (E92   (n - v ) .
                                                                 r      kn,r


Since r/n - kn,r/V < 1/v, it follows by (10 .29) that the last member of
(10 .36) is at most iiPn (G n r). Using (10 .34) and the fact that the P(G n , r) sum
to at most 1, we arrive at

                        Pn(Ac) G Pn(D,,(e)c) ± 77,               n > v.
But lim n P,(D v(e)c) = W(D„(e)c) by (10 .24), and so, by (10 .28),

                           lim sup,,, P n(A 0) < W (A c) + 277 .

Since r was arbitrary, this establishes (10 .26), which combines with (10 .25)
to yield (10 .23), proving Donsker's theorem once more .
Remarks. Erdos and Kac (1946) first conceived the invariance principle itself-the
idea of computing the limiting distribution of a quantity such as max k <,, Sk first in a special
case and then passing to the general case by connecting the result with Brownian motion
(which is how it all started) . An early paper in this direction was Kolmogorov (1931).
   The original assertion of Donsker (1951) was not that Xn ~4 W or that Pn => W, but,
what is by Theorem 5.2 the same thing, that h(Xn) .:?+ h(W) for all real, continuous func-
tions h on C . The arguments leading to (10 .23) are his. Kolmogorov and Prohorov (1954)
first pointed out that weak convergence is relevant and that Pn - W follows from (10 .23)
and Theorem 2.2. Prohorov (1953 and 1956) brought the tightness concept to bear . For a
                                                    Functions of Brownian Motion Paths 77

very different approach to these problems, see Knight (1962), and for a very different kind
of application, see Strassen (1964) . Lamperti (1962a) has a result differing from Theorem
10 .1 in that the limiting process is not Brownian motion .

PROBLEMS
  1. Let ~n1' •     , ~nk,+ be independent with mean 0 and variances ani ; put Sni =
                     2      2            2 and sn,2 =
~nl +      + ~ni , Sn i = 6n1 -I-    + .i,6              Snkn • Let Xn be the random function
that is linear on each interval [sn i-1/sn2 , sni/sn2] and has values Xn(s ni/Sn2 ) = Sni/sn at
the points of division . Assume Lindeberg's condition (7 .3) holds and generalize Donsker's
theorem by using Lindeberg's theorem, the inequality (10.7), and the corollary to Theorem
8 .3 to prove Xn .* W. (This result is due to Prohorov (1956).)


11 .   FUNCTIONS OF BROWNIAN MOTION PATHS

In the preceding section we used Donsker's theorem and properties of random
walk to find the distribution of sup s Wt. Having found this distribution, we
used Donsker's theorem -once more to find the limiting distribution of
maxi , n Si in general. Here we shall apply the same technique to other
functions of Brownian motion paths and of partial sums . We also compute
some distributions associated with the Brownian bridge .f
  We shall say we are in the Lindeberg-Levy case when dealing with
partial sums S,, of independent, identically distributed random variables n
with mean 0 and finite, positive variance a 2. In this case Xn will always
denote the random function (10.1). We shall say we are in the random walk
case if each ~ n assumes the values + 1 and -1 with probability 2 each.
In this case U2 = 1 .

Maximum and Minimum
Let m = inft Wt and M = sup t Wt, and let
(11 .1)                    m n =min Si ,         Mm = max Si
                                   0<i<n                  0<i< n
be the corresponding quantities for partial sums . The mapping carrying the
point x of C to the point (inf t x(t), sup t x(t), x(1)) of R3 is everywhere
continuous, so that, by Theorems 10 .1 and 5 .1,

                              - (mn, Mn, SO --*- (m, M, W1)
                           orV n

in the Lindeberg-Levy case .

t Although weak-convergence results in C would have little point if it were not possible
to perform computations of the sort carried through in this section, the computations are
not themselves essential to an understanding of the general theory.
78    The Space C

     We shall first find an explicit formula for
(11 .3)             p n (a, b, v) = P{a < m n <     M,n < b, Sn = v}
in the random walk case. We shall show that, if
(11 .4)                           Pn(j) = P{Sn.    =D,
then
                            00                             00

(11 .5)   p n(a, b, v)   = I p,,,(v + 2k(b - a)) - I p,,(2b - v + 2k(b - a))
                          k=-oo                          k=-oo
for integers a, b, and v satisfying
(11 .6)                  a < 0 < b        a<b,          a<v<b.
If a < b, then the series in (11 .5) are really finite sums . Notice that both
sides of (11 .5) vanish if n and v have opposite parity .
   For particular values of n, a, b, and v, let us denote the equation (11 .5) by
[n, a, b, v] . We shall prove by induction on n that [n, a, b, v] is valid if (11 .6)
holds. For n = 0, this follows by a straightforward examination of cases .
Assume as induction hypothesis that [n - 1, a, b, v] holds for a, b, v
satisfying (11 .6) . If a = 0, then (11 .3) vanishes (note that i starts at 0 in the
minimum in (11 .1)), and the sums on the right in (11 .5) cancel because
.(1) = p .(-j) . Thus [n, a, b, v] is valid if (11 .6) holds and a = 0 ; we may
P
dispose of the case b = 0 in the same way . To complete the induction step
we must verify [n, a, b, v] under the assumption that a < 0 < b and
a < v < b. But in this case a + 1 < 0 and b - 1 > 0, so that [n - 1, a - 1,
b-1, v-1] and [n-1, a+1, b+1, v+1] both come under the
induction hypothesis and hence are valid . And now [n, a, b, v] follows by
the probabilistically obvious recursions
                        Pn(j) = 2Pn-1 (j - 1 ) + lip,-1(J + 1)
and
 Pn(a, b, v) = -lffp n-1(a - 1, b - 1, v - 1) + Jpn-1(a + 1, b + 1, v + 1) .t
  From (11 .5) it follows by summation over v that, if
(11 .7)              a<<-0<b,         a<u<v<b,
then
(11 .8) P{a < m n < M n < b, u < S n < v}
            CO
         _ I P{u + 2k(b - a) < Sn < v + 2k(b - a)}
              k=-oo
                   CO
              -     I P{2b-v+2k(b-a)<S n <2b-u+2k(b-a)} .
                k=-oo

t Problem 2 outlines how (11 .5) can be derived (as opposed to verified) .
                                                         Functions of Brownian Motion Paths 79

Taking a = -n - 1 in this formula leads to
(11 .9) P{M,,<b,u<S,,<v}
                                      =P{u<S,, <v}-P{2b-v<S,,<2b-u},

valid for -n - 1 < u < v < b, b > 0.]' From (11 .9) it is possible to
retrieve (10 .13) .
   Now (11 .8) holds in the random walk case and, because of (11 .2), we can
find the distribution of (m, M, W1 ) by passing to the limit . If a, b, u, and v
are real numbers satisfying (11 .7), replace them in (11 .8) by the integers
[an!], - [-bn4], [u0], and - [- vni], respectively. Because of the central
limit theorem and the continuity of the normal distribution, a termwise
passage to the limit in (11 .8) yields

(11 .10) P{a<m<M<b,u<Wl <v}
                 00

            =   ~;7   P{u + 2k(b - a) < N < v + 2k(b a)}
                k=-oo
                     w
                -     I  P{2b-v±2k(b-a)<N<2b-u+2k(b-a)} .
                   k=-oo

The interchange of limit with summation over k can be justified by the
series form of Scheffe's theorem (p . 224) .
  The joint distribution of M and W1 alone could be obtained by letting
a tend to - oc in (11 .10), but it is simpler to return to the random walk case
and pass to the limit in (11 .9), which yields

(11 .11)
   P{M<b,u<W1<v}=P{u<N<v} P{2b-v<N<2b-u}, .
valid for u < v < b, b > 0 . Taking v = b and letting u -> - oo leads back
to (10.17).
  From (11 .10) with u = a and v = b we have
(11 .12) P{a < m < M < b}
                               00

                          _           (-1)k P{a + k(b - a) < N < b + k(b - a)},
                              k=-ao

valid for a < 0 < b. And this result with a = -b gives
                                          CO

(11 .13)   P{sup s I Wt I < b} _                  (_1)kP{(2k - 1)b < N < (2k + 1)b}
                                         k=- oo

t See Problem 1 for another proof.
80   The Space C

for b > 0 . By continuity, the strict inequalities in all these formulas can be
relaxed to allow equality . And the right sides can all be written out as sums
of normal integrals . It is possible' to transform the series in (11 .13) to
                             1 _ 4 ~ (- 1)k a rr 2 (2k+1 ) 2 /$b 2 .
                                 7T k=1 2 k + 1


  Although we derived (11 .10) through (11 .13) by passing to the limit in the
random walk case, we have the limiting distributions for (in n , Mn, Sn),
(Mn, Sn), (mn , Mn), and maxi , . J Si J (properly normalized) in the more
general Lindeberg-Levy case because (11 .2) holds there.

The Arc Sine Law
For x in C, let hl(x) be the supremum of those t in [0, 1] for which x(t) = 0 ;
let h2 (x) be the Lebesgue measure of those t in [0, 1] for which x(t) > 0 ; and
let h3 (x) be the Lebesgue measure of those t in [0, h l (x)] for which x(t) > 0.
Then T = hl(W) is the time at which'the Wiener path W last passes through
0, U = h 2 (W) is the total amount of time W spends above 0, and V = h 3(W)
is the amount of time W spends above 0 in the interval [0, T] . We shall find
the joint distribution of (T, U, V, W1 ).
   In Appendix II (pp . 230 ff.) it is shown that each of the mappings hl,
h2, and h3 is measurable and is continuous except on a set of Wiener measure
0. Therefore
(11 .14)         (h1(Xn), h2 (Xn), h3 (Xn), Xn(1)) -a. (T, U, V, W1)
in the Lindeberg-Levy case . In the random walk case, the vector on the left
has a simple interpretation : Tn = nh1(Xn) is the maximum i, 1 < i < n, for
which Si = 0 ; Un = nh2 (Xn) is the number of i, 1 < i < n, for which Si-1
and Si are both nonnegative ; Vn = nh3 (Xn) is the number of i, 1 < i < Tn ,
for which Sz_ 1 and Si are both nonnegative ; and, of course, Xn(1) = S n/Jn .
  With these definitions we therefore have

(11 .15)           1 T,,,, 1 U n , 1 Vn , 1- Sn) --} (T, U, V, W1)
                    n      n       n      .Jn
in the random walk case ; we shall find the distribution of (T, U, V, W1) by
passing to the limit . In the general Lindeberg-Levy case, the left side of
(11 .14) is a somewhat more complicated function of the partial sums S l , . . . ,
Sn . After we have found the distribution of (T, U, V, W1), we shall show how
(11 .14) leads even in the general case to limit theorems for quantities
associated in a natural way with the partial sums .

t See Feller (1966, pp . 330 and 594) .
                                                 Functions of Brownian Motion Paths 81

     Since the random vector (T, U, V, W1) is constrained by
                                1-T+V               if   Wl >0,
(11 .16)                 U =
                                V                   if   Wl < 0,
it suffices to consider (T, V, W1) and the related vector (T., V, Sj . The
 distribution of the latter quantity in the random walk case we shall derive
from three facts which admit of elementary proofs we shall not carry through
here.
   First, we shall use the local limit theorem for random walk : If m tends to
infinity andj varies with m in such a way that j and m have the same parity and
j/srn -* y, then'
                              m            1      ~, Y 2
(11.17)                      2 P.0) -
                                            2~r e
Second, we shall use the fact that

(11.18)           P{Sl > 0, . . . , Sm_i > 0, Sm = J} _ 1 .(1)
                                                            P
                                                        m
for j positive .$ If S2 m = 0, then U2m = V2m assumes one of the values 0,
2, . . . , 2m ; the third fact§ we shall use is that these m + 1 values all have
the same conditional probability

(11 .19)    P{V2m =2iIS2m =0}=                      ,      i=0,1, . . .,m .
                                           m 1+ 1
   To compute the probability that Tn = 2k, Vn = 2i, and Sn = j, condition
on the event S2k = 0. Conditionally on this event, (So , . . . , S2k) and
('S2k+1, . . . , Sn) are independent, Vn depends only on the first sequence, and
Tn = 2k and Sn = j if and only if the elements of the second sequence are
nonzero and the last one is j. By (11 .18) and (11 .19) we conclude that

(11 .20)   P{Tn = 2k, Vn = 2i, Sn = j} = P2k(o)                    j
                                                                            Pn-2k(i)
                                                          k 1 1n       2k
if
(11 .21)                    0<2i<2k<n,                   j>0.
Both sides of (11 .20) vanish if n and j have opposite parity . For j negative, the
same formula holds with I j I in place of j on the right .

t Feller (1957, p . 170) has the local theorem for the binomial distribution, and (11 .17)
follows because i (Sm + m) is binomially distributed .
I See Feller (1957, p . 70) . This also follows from (11 .9) .
§ See Feller (1957, p . 72) .
 82 The Space C


   We shall apply Theorem 7 .8 to the lattice of points (2k/n, 2i/n, jl-n),
 where j and n have the same parity . Suppose k, i, and j tend to infinity with
 n in such a way that
                         2 k --*                2i     v,     i_ --~ x,
                                 t,
                          n                     n            .Jn
where 0 < v < t < 1 and x > 0 . Then (11 .21) holds for large n, and it
follows by (11 .20) and (11 .17) that
               2 .2'. 2 -1
                           P{T,,~ = 2k, Vn = 2i, Sn = j} -~ At, x),
               n      Jn
where
                                          lxI
                                           IX 2
(11 .22)       g(t, x) = 1             3 e                          0 < t < 1.
                        27T [t(l - t)] 2
The same result holds for negative x by symmetry . Therefore

(11 .23)                          1 Tn, 1 Vn ,
                                 (n     n      Jn
                                                  Sn)   1
has (in the random walk case) the limiting distribution in R 3 specified by the
density
                                      g(t, x)          if 0 < v < t < 1,
(11 .24)          f (t, v, x)
                                      0                otherwise.
By (11 .15), (T, V, W1) has this density . Because of (11 .16), the distribution of
(T, U, V, W1) can be written out explicitly also .
   From (11 .24) it follows that the conditional distribution of V given T and
W1 is uniform on [0, T] ; this corresponds to (11 .19) . By (11 .16), if T = t
and W1 = x, then U is uniformly distributed over [1 - t, 1 ] for x > 0 and
over [0, t] for x < 0. Using (11 .24) to account for the possible values of t
and x, we find for the density of U alone

(11 .25)               JJ' g(t, x) dt dx             + r fg(t, x) dt dx .
                       x>o                             x<o
                      1-u<t                            u<t

Now the integral of g(t, x) over the range x > 0 is 1/[2irt2(1 - t) ], which
is the derivative of -((1 - t)/t) /Tr, and hence (11 .25) reduces to
1/[Tru (1 - u) l] . Therefore

                                          ds         = ? arc sin VU,
(11 .26)   P{U < u } = 1                                                    0 < u < 1.
                         7T   J
                              o JS(1 - S                ?T
                                               Functions of Brownian Motion Paths 83

This is Levy's arc sine distribution . A similar computation shows that T also
follows the arc sine law

(11 .27)           P{T < t} = 2 arc sin Vt,          0 < t < 1.
                                   V

   Let us now combine (11 .14) with the facts just derived to obtain a limit
theorem for the general Lindeberg-Levy case . Let us agree to say that a
0-crossing takes place at i if the event
(11 .28)   Ei={Si=0}v{Si-1>0>Si}v{Si-1< 0 <Si}
occurs (which in the random walk case is to say that Si = 0). Let Tn be the
maximum i, 1 < i < n, for which a 0-crossing takes place at i ; let Un be
the number of i, 1 < i < n, for which Si > 0 ; and let Vn be the number of i,
1 < i < T., for which Si > 0 . We shall prove that

(11 .29)                       1
                     Tn, 1 Un, Vn, 1 - Sn l -~-~ ( 7 U, V, Wi)
                         n            aJ
                 (1n           n                In
by showing that the quantity on the left here approximates the left side of
(11 .14).
   Clearly, Tn/n is within 1/n of h 1 (X,n) . If y n is the number of i, 1 < i < n,
for which Ei occurs-the number of 0-crossings-then U;,/n and V,n/n are
within yJn of h 2 (X,,) and h3 M), respectively . Therefore (11 .29) will follow
from (11 .14) and Theorem 4 .1 if we prove that y n /n -4 0, and for this it is
enough to show that
                            E{`}
(11 .30)                          = ' 7~. P(Ei ) --* 0.
                               n       n i=1
But
                   P(Ei) < P{I~il >_ eJi} + P{ISi-1I < E\1i}

for each positive s, and hence, by the central limit theorem, P(Ei) --* 0.
And now (11 .30) is a consequence of the theorem on arithmetic means of
convergent sequences .
   From (11 .29) we may conclude for example that Un/n and Tn/n have arc
sine distributions in the limit .

The Brownian Bridge

The Brownian bridge W° behaves like a Wiener path W conditioned by the
requirement W1 = 0. With an appropriate passage to the limit to take
account of the fact that { W1 = 0} is an event of probability 0, this observation
can be used to derive distributions associated with W °.
84    The Space C

     Let PE be the probability measure on C defined by
                    Pr;(A) = P{W E A 1 0 < Wl < e},             A e le.
We shall prove that
(11 .31)                                PE => W°
as s tends to 0 .t Take the random function W as defined on some probability
space and take the random function W ° to be defined on the same space by
Wt = Wt - tW1 (see the construction in Section 9) . If we prove that

(11 .32)            lim sup P{W E F 1 0 < W1 < E} < P{ W° E F}
                      e-0
for each closed Fin C, then (11 .31) will follow by Theorem 2 .1 .
  For arbitrary t1 , . . . , tk, W1 is independent of (Wt' , . . . , Wt ) because it
is uncorrelated with each component. Therefore
(11 .33)             P{W° e A, W1 E B} = P{ W ° E A}P{ W1 E B}

if A is a finite-dimensional set in C and B lies in MI . But for B fixed the set of
A in le that satisfy (11 .33) is a monotone class and hence $ coincides with V .
Thus (11 .33) holds for A E W and B E R1 . In particular,
                      P{W° E A 1 0 < W1 < s} = P{ W° E A}.

 Since p(W, W°) = 1 W1 1, where p is the metric on C, I W11 < S and
W E F imply W° E Fa = {x : p(x, F) < 6}. Therefore, ifs < 6,
       P{W E F 1 0 < Wl <_ e} < P{W ° E F8 10< Wl < e} = P{W ° E Fa}.

The limit superior in (11 .32) is thus at most P{W ° E F6}, which decreases to
P{ W' E F} as 8 . 0 if F is closed . This proves (11 .32) and hence (11 .31) . §
  Suppose now that h is a measurable mapping from C to Rk and that W°
has probability 0 of lying in the set D. of discontinuities of h . It follows by
(11 .31) and Theorem 5 .1 that
(11 .34)        P{h(W° ) < «} = lim P{h(W) < a I 0 < W1 < E}
                                      E-0

holds for each a at which the left side is continuous (as a function of a
ranging over Rk). From (11 .34) we can find explicit forms for some distribu-
tions connected with W ° . Sometimes an alternative form of (11 .34) is more

t We can let a tend continuously to 0 and use the definition involving (2.4) . Alternatively,
we can let a tend to 0 through some sequence (say the reciprocals of integers) fixed
throughout the discussion .
I See Halmos (1950, p. 26) .
§ This part of the argument merely repeats the proof of Theorem 4.1 .
                                                    Functions of Brownian Motion Paths 85

convenient :

(11 .35)        P{h(W°) < a} = lim P{h(W) < a -s < W1 < 0} .
                                                          1

                                     E-0

This is established in the same way (in place of [0, s] we could use any subset
of [- e, s] with positive measure) .
  Let
                     m° = inf t Wt ,     M ° = sup t W' .

Suppose that a < 0 < b and that 0 < s < b ; by (11 .10) we have, if
c = b - a,

(11 .36)      P{a < m < M < b, 0 < W1 < s}
        00
  _ I P{2kc < N < 2kc + s} - I P{2kc + 2b - s < N < 2kc + 2b}
     k=-ooo                                k=-oo

Since

(11 .37)                hm i P{x < N < x + e} =                l e - 4x 2
                        E-0   8                               V27r
if we take the limit inside the sums in (11 .36), then (11 :34) yields

(11 .38)       P{a < m° < M° < b} =           I e-'(
                                            k=-ao
                                                         ,)2 -
                                                                  I e
                                                                 k=-oo
                                                                            2cb+ke) 2



Since the series converge uniformly in s, the interchange is all right . Thus we
have the distribution of (m°, M°) . Taking -a = b here gives

(11 .39)        P{ sups IWt I < b} = 1 + 2          (-1)ke-2k 2b2,          b > 0.
                                              k=1

By an entirely similar analysis applied to (11 .11),
(11 .40)                  P{M ° < b} = 1 - e-2b 2 ,             b > 0.
  Let U° be the Lebesgue measure of those t in [0, 1 ] for which Wt > 0.
We shall show that U° is uniformly distributed over [0, 1 ] by showing that
(11 .41)          limP{U<ac1-s<W1<0}=a,                              0<a<1 .
                  e-0

Because of (11 .16), the conditional probability here is
                                  P{V<a1-s< W1 S0}.
From the form of the density (11 .24) we saw that the distribution of V given
T and W1 is uniform on (0, T) . In other words, if L = V/T, then L is
uniformly distributed on (0, 1) and is independent of (T, W1). Therefore the
86     The Space C

conditional probability in (11 .41) is

           P{TL<aI-8<Wi <0}= P{T<a -8< Wi <0)ds,
                             o    s                      f
and (11 .41) will follow by the bounded convergence theorem if we prove the
intuitively obvious relation
                           P{T<-0I-8<-Wl-<O}--0, 0<1 .

But this follows by (11 .37) and the form of the density (11 .24) . Therefore
(11 .42)                            P{U° <a}=a,                     0<oc<1 .

Remarks . For further evaluation of distributions of functions of Brownian motion paths,
see Ito and McKean (1965), Karlin (1966, Chapter 10), Erdos and Kac (1946 and 1947),
Mark (1949), Darling and Erdos (1956), and Section 16 below.


PROBLEMS

     1. Show by reflection in the random walk case that
                                                             .(v)
                                                                W             if v > b,
(11 .43)                    P{Mn > b, Sn = v} = P
                                                                    - v)      if v < b

for b >_ 0 . Derive (11 .9) from this .
  2. For nonnegative integers c,, let ar(c l , . . . , c k ; v) be the probability that an n-step
random walk (n fixed) meets c l (one or more times), then meets -c2, then meets C 3 . . . . ,
then meets (-1)kt 1 c k , and ends at v . Use (11 .43) and induction on k to show that
                             pn(2c1 + . . . + 2ck_ 1 + (-1)k+lv)         if (-1)k+ i v > ck,
        Tr(cl , . . . , Ck ; U) _
                                    pn(2c1 + . . . + 2Ck - (- 1) k+lv)             if (-1)k+l v < Ck .
[Reflect through (-1)kck_1 the part of the path to the right of the first passage through that
point following successive passages through c 1 , - c2 , . . . , (-1)k--2ck_2.] Derive (11 .5) by
showing that pn (a, b, v) is
                          pn (v) - ir(b ; v) + Tr(b, a ; v) - Tr(b, a, b ; v) +
                                    - 7r(a ; v) + 1r(a, b ; v) - vr(a, b, a ; v) + . . .~

  3. For x in c let h(x) be the smallest t for which x(t) = sup s x(s) . Show that h is measur-
able and is continuous on a set of W-measure 1 . Let Tn be the smallest k for which Sk =
     <n Sii and prove
maxi .                                                                                          '
                               < a        arc sin 1/a,    0 < a < 1,
                                    n
                               PC

in the Lindeberg-Levy case . [See Feller (1957, p . 86) for the random walk case .]
  4. Derive the joint limiting distribution of the maximum and minimum of S2 - in-'S,,,
0 < i < n, in the Lindeberg-Levy case . [Consider Yn (t) = Xn (t) - tXn (1) with Xn defined
by (10.1).]
                                                           Fluctuations of Partial Sums   87



12 . FLUCTUATIONS OF PARTIAL SUMS
In Sections 9 and 10 we established tightness for sequences of random
functions by finding bounds for the distribution of the maximum of certain
partial sums . Here we shall derive such bounds under fairly general condi-
tions ; the results lead to practical tightness criteria which will be used
throughout the rest of the book .

Maxima

Let    ~1, . . . ,
               ~m be random variables ; they need not be independent or
identically distributed . Let Sk = ~1 + • • • + ~k (So =0), and put
(12 .1)                          M m = max ISkI .
                                          05k<m
We shall obtain upper.. bounds for P{Mm > .} by an indirect approach .
  If
(12 .2)                 Mm = max min {IS k I, ISm - SkI},
                              05kSm
then
(12 .3)                            M ,,1 < M m .

If ~1, • • ~k-1, ~k+1,        are identically 0, then Mm = 0 and M m = J kJ
Thus there can be no inequality opposite to (12.3) .
   On the other hand, we do have
ISkI < min {ISmI + ISkI, I SmI + ISm - SkJ} = JSmI + min {ISkI, IS. - SkI },
so that
(12 .4)                        M m <_ M ;  M   + I   SmI
(There is equality here if S m = 0.) Therefore

(12 .5)              P{M m > a.} < P(M,    1 2} + P{JSm) > 2} .
If we can find separate bounds for the terms on the right in (12.5), we shall
have a bound for the term on the left.
  If we bound P{Mm > A} via (12 .5) instead of by a direct analysis of some
kind, there may be some loss of accuracy . On the other hand, since the right
side of (12 .5) is at most 2P{M m > 22}, the loss need not be great : an extra
factor of 2 will not matter for our purposes, and the bounds we derive will
decrease with increasing A slowly enough that passing from 2 to 2/2 will have
no important effect .
88   The Space C

  There is a second way of deriving bounds on the distribution of Mm from
bounds on the distribution of M ;M . We shall show that
(12 .6)                                 M m < 3M M + max
                                                    1<i<m
from which it will follow that

(12 .7)                  P{Mm > A} < P Mm                 > 4 + P 1 max~I it > 4} .
Again, bounding the terms on the right will yield a bound for the term on
the left . And the right side of (12 .7) is at most 2P{Mm > 82}, so that using
(12.7) can result in no substantial loss of accuracy.
   To prove (12 .6), consider the set I consisting of those k, 0 < k < m, for
which Sk   I     Sm - Ski ; certainly, 0 E I. If Sm = 0, then Mm = M ,,,, so
                 i   <   I

that (12 .6) holds . If S m 0 0, then m 0 I and hence there is a k, 0 < k < m,
for which k - 1 E I and k O I : ISk-1I               Sm - Sk-1I, ISk-1I < Mm,
                                                                        <   I


Ism - Ski < ISkI, and S m - Ski < Mm . For this k we have
                                    I




(12 .8)                                 S m - Ski < 2M ;,t + I l,
                         I S .1 <- ISk-1I   +   141   +   I                                     4
from which (12 .6) follows via (12 .4) . (There is equality in (12 .6) if m = 5
and e 1 = ~2 = ~3 = ~4 = - ~5 . )

Product Moments

In view of (12 .5) and (12 .7), there is profit in bounding P{M;,a > 2} . Let us
suppose that there exist nonnegative numbers u l, . . . , u m such that

(12.9)         E{IS ; - SiIY - ISk - S1 } < (                         ui)a ( _~ u
                                                              i<l<i              <l<k

                                                                                        0<i<i<k<m,
where y and a are positive . For example, this will hold with y = 2 and
a = 1 if the ~i are independent, if E{$i} = 0, and if ui is taken to be the
variance of ~i.
  Since xy < (x + y) 2 for nonnegative x and y, (12 .9) implies
                                                                            2a
(12 .10)        E{Is ;-SiiY •i Sk-Sill                                 u l) ,           0<-i<j<k<-m .
                                     <                     ( z<l<k
Moreover, if IS ; - Sil > 2 and ISk - S;i > A, where 2 is positive, then
IS; - Sil l' - Sk - S;I'' > AV' so that (12 .10) implies
                     I


                                                                                          2a
(12.11)         P{IS; - Si i > 2, ISk - S,I > 2} < 1 (                                  ua) ,
                                                                        A2y i<L<k

                                                                                        0<i<j<k<m .
                                                                     Fluctuations of Partial Sums         89

(The inequality is trivial if i = j or if j = k.) Note that (12 .9) implies (12 .10)
and (12.10) implies (12 .11) also in the case y = 0, provided we take Ixl° as 1
if x 0 0 and as 0 if x = 0.
THEOREM 12 .1         Ify > 0 and a > 2, and if (12.11) holdsfor allpositive A,
then, for all positive A,
                                           K
                                           22Y-                          + U m) 2a ,
(12.12)             P{M, > 2} <                       (u1 -}-

where KY ,,, is a constant depending only on y and a .
  Although its specific value will have no importance for us, the constant
   a
K, may be taken as
                              1             1      2a -(2Y+1)
(12 .13)           K Y'a =      [21/(2Y+1)
                                       (21/(2y+1)
                                                  )                   I
                                                                    2,1,
Theorem 12 .1 is of purely theoretical value : K for example, is 55,021 to
the nearest integer.

Applications
Before proving the theorem, let us examine several of its consequences . If the
                                   i
~i are independent with E{~ } = 0 and E{~i2} = Ui 2 , then (12 .9) holds with
                                                                                                O
                                       i
y = 2 and a = 1, provided u is taken to be o l . Now cr 2 +         +    i2 =          1            r .



Sm2 is the variance of S m , and (12 .12) implies

                                                                     4
(12 .14)                          P{Mm > 2} < KS-                   4 ,

with K = K     2,1. Replacing A by 2s and using (12 .5) and (12 .7), we obtain
                                           m


                      P{M > 2S } <
                                                  4
(12.15)                     m          m
                                      2K +                      P{ISml >_ 2ASm}

 and

(12 .16)          P{M m > AS m} <
                                           44 K
                                             A4
                                                      + P max IEil > 42S
                                                         {1<i<m
                                                                                           m.
   According to (10.7),
 (12 .17)                              m                    m
                    P{M m > 2s } < 2P{IS I -:2! (A - V2)S m }.
 The factor 2 on the right here is of no importance and, if A is large, 22 and
 A - V2 are about the same . Thus (12 .15) represents no advance over (12 .17)
 in the independent case . But (12.16) does, because

 (12 .18)        P{ max I iI > 4ASm j <_
                   1<i< m
                                                 1 P{I$ii > Vs .}
                                                      i=1

                                               < 4 1 If           i 2 d P,
                                                       2        m

                                                 22         Sm i=1 {~ i~ ~ Zsm}
90   The Space C

so that (12.16) implies
                                                  4                     2           m
                                           4 K + 4 1 Y
(12 .19)             P{Mm          /~Sm} <                              i2 dP .
                                            14
                                                 A 2 Sm i=1 {lgil~4~sm}
The sum on the right is the one involved in Lindeberg's condition (7 .3) .
  It is possible to deduce further results . For example, from (12.14) it
follows (see (3) on p. 223) that

                                    ~              Ml2 dP<2K .
                                   J{(Mm')2>_as,n2} Sm)    a
Since the 4i are independent, we have (the indices in the sums are constrained
by 1 <i,k<m)
                                    i2                         ~                         i2
     f   maXkgk g >asm2 }
                            maxi
                                   Sm
                                    2
                                         d P <
                                                      k,i Jtgk 2 >asm} S 2m
                                                                                              dP

                                                                          2
                                                                       ~i
                                              _                                               dP +            P{ k    > as2z}
                                                      i { i 2 ?aS,2n}                Sm                k*i                      SM

                                              <           1+ 1                       1                        VdP .
                                                      (      a)                 i   S2t       {gig>_as,2n }

For nonnegative U and V, we have


That
                 I   U+V > a}
                                (U+V)dP<2r
                                                                       { U > a}
                                                                                    UdP+2f
                                                                                                          {V > Ea}
                                                                                                                     VdP.


                                   Mm2
(12 .20) ~                                    d P< K'[ 1 + 1 J                ~i2 d P
                J{Mmg >as,n 2}       S 2m )          [oc i=1 s 2m {Igil?4asm}
for some universal constant K' now follows by (12 .6) and the fact that the
sum on the right here is at most 1 . The inequality persists if M2m is replaced
by S.2 . This proves in particular the uniform integrability of the squares of
the normalized row sums for a triangular array satisfying Lindeberg's
condition.
  Suppose now that the $i are independent and identically distributed with
E{~i}. = 0 and E{~i2} = CF 2 Then (12.15) implies

                                                       < AK
                                                                   4                                            _
(12 .21)                P{Mm > AOrJm}                                       +       P{IS,I > 2A6v m}
 (12.16) implies
                                                          44 K                                                       _
(12.22)              P{M m >       A6.Jm} <               A4
                                                                       + P max I~iI > 4A~.Jm ;
                                                                                    1< i<m
 and (12 .19) implies
                                         _                 4
                                                                                4                             _ X12 dP.
(12.23)              P{Mm > AQ J m} < 4A4K +                                122
                                                                                         J {Ig1I>_4 .la~m}
                                                      Fluctuations of Partial Sums 91

Since the integral here goes to 0 as 2 -~ oc, for sufficiently large A we have


                  P{M,n > 2ci, / } < 2 ,          m = 1, 2, . . . .


Thus we have another proof of the tightness of the random functions
involved in Donsker's theorem (see (10 .10)), a proof which does not depend
on the central limit theorem .
  Although the random variables are independent in the applications just
given, Theorem 12 .1 does not require independence . This is a great advantage
Most later applications will involve dependent sequences .


Proof of Theorem 12 .1

The assumption in Theorem 12 .1 is that
                                                         2a
                                             1        ull ,
(12 .24) P{IS ; - Sil > 2, ISk - S ;I > 2} < ~2y <lSk
                                             /l (i
                                                            0<i<j<k<m,

for all positive 2 ; we are to find a constant K, depending only on y and a,
for which

                                                   . . . + um)2a
(12 .25)              P{M,n > 2} <        (ul +

   Write
                                            1
(12 .26)
                                         2y +1'

so that 0 < 6 < 1 . For large K we have


(12 .27)                       2b122 as + Ka1 < 1,


 because the left-hand member approaches 1/2(2«-1)a as K--* oo and (2a > 1,
 6 > 0) this limit is less than 1 . We shall prove that (12 .25) holds if K satisfies
 (12 .27) and if

 (12 .28)                              K > 1.

                                                                              .27)
 (In point of fact, (12 .27) implies (12 .28) . The smallest K satisfying (12
 is given by (12 .13) .)
    The proof goes by induction on m . The result being trivial for m = 1,
 consider the case m = 2 . Since M2 = min {IS, I, I S2 - S1I }, (12 .24) and
 (12 .28) imply

                  P{M2 > 2} < ~ly (ul + u2)2a < K (ul + U2 )2,, .
92   The Space C

  Assume now as induction hypothesis that the result holds for each integer
less than m. We shall prove it for m itself. Write u = ul + • • • + um ; we
may assume u > 0 . There exists an integer h, 1 < h < m, such that
                      U1+ . . .+U h- 1<1<U1+ . . . +uh
(12.29)
                             u             2                u
where the sum on the left is 0 if h = 1 .
  Consider the four quantities
             U1 = max min { I
                  0<i<h-1
                                 SiI, I Sh_1 - Sill,
             U2= max min {ISj - Shl,I(S m - Sh) - (Sj - Sh)I}
                  h<j<m
                = max min { I Sj - Sh l, IS m - sill ,
                  h<j<m
             D 1 = min {ISh-1l, IS. - Sh-1) },
             D 2 = min {IShl, ISm - ShI} •
Since (12.24) holds if m is replaced by h - 1, and since h - 1 < m, we may
apply the induction hypothesis to the random variables 1, . . . , ~h_1 and
the quantities ul, . . . , uh_ 1 and conclude that
                                               +             u2a K
(12 .30)           P{U1 > 2 } < 2y (u1 +           Uh_1)2a < 22y 22a ,

the last inequality following by (12 .29) . (If h = 1, (12.30) is trivial .)
  If the indices in (12.24) are restricted to h < i < j < k < m, then only the
random variables $h+1, . . . , $ m are involved . Since m - h < m, the induc-
tion hypothesis applies to $h+1, . . . , gym, and uh+1, . . . , u m ; hence

(12.31)        P{U2 > a}     <4 u ( h++
                                       i
                                                 + Um)2a < u2a K '
                                                               P 2a2
the last inequality following by (12 .29) again . (If h = m, (12 .31) is trivial .)
  Now (12 .24) implies
                                  1                         u2"
(12 .32)          P{ D 1 >_ A} < 1 (141 + . . . + Um)2a = 2y
and
                                               U2-
(12.33)                           P{D 2 > A} < A2y .

(If h = 1, then (12.32) is trivial ; if h = m, then (12 .33) is trivial.)
  We shall show that
(12 .34)   min {ISil,ISm-SZI}< U1 +D1                  if       0<i<h-1 .
                                                       Fluctuations of Partial Sums 93

Let 1ui be the minimum on the left . If I Si I < U1, then

                             µi < I SiI < Ul < Ul + D1 .

Suppose I Sh_i - S i I < U1 ; if ISh_11 = D 1 , then

                fui <- I Sij < ISh_1 - SiI + ISh-11 < Ui + Di .

Suppose I Sh_1 - SiJ <- U1 and IS. - Sh_11 = D1 ; then

           lui<ISm   - SiI<ISh-1 - SiI +ISm - Sh-11<Ul+Dl .

This proves (12 .34) . The same sort of argument shows that
(12.35)      min {IS1 1, IS ,. - S;I} < U2 + D2         if   h < j < m.

  By (12 .34) and (12 .35),

(12.36)                   Mm < max {U 1 + D1, U2 + D2

and hence

(12 .37)     P{Mm > A} < P{U1 + D1 > A} + P{U 2 + D2 > A} .

If AO and Al are positive and A O + Al = A, then, by (12 .30) and (12 .32),
                                                                    u2a 2        u2a
(12.38) P{U 1 + D1 > A} < P{U 1 > A 0} + P{D 1 > A1} <                       +
                                                                    AaY 2a       A1Y

Calculus shows that, if C o, C1, and A are positive numbers, then


                     z
(12 .39)
                         m in o[2°0   + Al = 1 [Cos + Cla]116,
with 6 defined by (12 .26) . Minimizing the right-most member of (12 .38), we
arrive at
                                        u2a   K a       1/5
(12 .40)          P{U1 +- D1 >_ A} < A2Y[(22a) + 11
                                                      .
  The same inequality holds for U2 + D2 use (12 .31) and (12.33). By
(12 .37), therefore
                                u 2-     K a        lea
(12 .41)            P{Mm > A} < A2Y  2           11     .
                                       1(22ac) +
By the choice (12 .27) of K, the right member here is at most Ku2"/A2Y . This
completes the induction step and the proof of Theorem 12 .1 .
94    The Space C




Moments'

Let us now replace (12 .9) by the assumption that

(12 .42)            E{IS ; - Si lt} <   u i),
                                            a'    0 < i < j < m.
                                   i<l<i ,
It follows from this that, if A is positive, then

(12 .43)      P{IS;-Si l >A}<-1
                             A i<Z<ju l)a ,                 0<i<j<m .
In place of a > 2 we make the stronger requirement that a > 1 .
THEOREM 12 .2 If y > 0 and a > 1, and if (12.43) holds for all positive A,
then, for all positive A,
                                                                    .,
                                                                    Um)
(12 .44)                P{Mm, > A}               (u 1 + . . . +

where K,,,« depends only on y and a.
     We may define K,,,,,, by
(12.45)                            K;,,, = 2Y(1 + Kj7 j,) .
Proof. By Schwarz's inequality, P(E 1 r) E2) < Pi(E1)Pi(E2) . Therefore
(12.43) implies (recall xy < (x + y) 2 )
            -      > 2,      -     >     < 19            a/2 1           a/2
      P{IS,    SiI       ISk   S,I   2}               ul              ul
                                           /~Yl~(i<Z<j ) .2.   (j<1-<k )

                                                 < AY
                                                   1(           1.11)a .
                                                        i<Z<k

Thus (12 .11) holds with y and a replaced by 2y and 2a, and Theorem 12 .1
implies
(12 .46)                  P{Mm>'Z}<K (ul+ . . .+um)"

with K = K1v,j". By (12 .43) we have

(12 .47)                 P{ISmI _> ~} <          (u1 + . . . + U .)"
                                             Y

and (12 .44) follows by (12 .5) . (Note that, since the right-hand members of
the last two inequalities are of the same order, (12 .44) cannot be essentially
improved by using extra information about the distribution of ISmI .)

t The remaining results in this section are needed in Chapters 3 and 4 but not in Section 13,
the last in this chapter .
                                                          Fluctuations of Partial Sums   95

  As an application of Theorem 12.2, consider again independent, identically
distributed variables ~i with mean 0 and variance a2 ; this time assume there
exists a finite fourth moment T4 = E{~i4} . Now
                              E{ST4} _   I E{$i$j$k$l},
where the indices range independently from 1 to r. Since the $i are independ-
ent and their means vanish, if the value of some index in the summand
differs from those of the other three, the term vanishes . Since a4 < T 4 ,
                    E{S,.4} = rT4 + 3r(r - 1)a4 < 4r 2_r4 '

and hence (12.42) holds with y = 4, a = 2, and ul                        u m = 2T2.
  Theorem 12 .2 now implies
                                                          2
(12 .48)                      P{Mm > A} < 4T4K                ,
                                                         A4
where K = K4,2. Replacing 2 by 2a'm yields
(12.49)                    P{M m > 2a Jm} < 4T4K                    .
                                                              AQ4
From this and Theorem 8 .4, the tightness of the random functions (10 .1)
involved in Donsker's theorem follows easily . The argument involving
(12 .23) is more powerful than this one because it requires only second
moments.

A Tightness Criterion

Theorem 12.2 leads to a condition for tightness of a sequence {X"} of random
elements of C.
THEOREM 12.3           The sequence {Xn} is tight if it satisfies these two conditions :

    (i) The sequence {Xn(0)} is tight .
   (ii) There exist constants y > 0 and a > 1 and a nondecreasing, continuous
function F on [0, 1] such that

(12.50)             P{I Xn(t2) - Xn(t1)I > A} < ~ I F( t2) - F(t1)I
                                                     y


holds for all t1, t2, and n and all positive 2.
   The moment condition
(12 .51)              E{I Xn(t2) - Xn(tl)I Y} <- IF(t2) _F(t1)I~
implies (12.50) .
96   The Space C

Proof.  By Theorem 8 .2 it suffices to produce, given s and 71, a 6 (0 < 6 < 1)
for which
(12.52)                                       P{w(XX , 6) > 3E} < yJ

for all n, and, by the corollary to Theorem 8 .3, this will hold if 6 -1 is an
integer and
(12 .53)                      P{        sup             XX (s) - XX (jb)I ~ E} < yJ .
                     ;<s -1
                                                    I
                                    i5<s<_( ;+1)b

Fix n, 6, and j for the moment and, for a positive integer m, consider the
random variables
                                                                      - 1 6
(12 .54)   $i = X n (jb + i b) - X n (j6 + i                                        J         i = 1, 2, . . . , m .
                                      m                                m

By (12 .50), these random variables satisfy (12 .43) with ui = F(j6 + ibm1) -
F(jb + (i - 1),6m-1) . By Theorem 12 .2, therefore,

(12 .55)   P{ max          Xn (jb + i b) - X n(J8) > Ej
                0Gi<m                          m
                                                                                K
                                                                        <               [F((j + 1)6) - F(jb)]a ,
                                                                                E

where K =           K,,a. Since Xn lies in C, letting m - oo leads to
                                                                            K
(12.56)    P         sup        I   Xn(s) - X.00 > E                  <             [F((j + 1)6) - F(jb)] °`.
               { ;a_s<( ;+1)a                                     )         E

Therefore


(12 .57)       . 1 P{      sup            I   Xn(s) - Xn(jb)I > E)
               <a       ;a<s<( ;+1)a

                                     < K [F(1) - F(0)]Cmax IF((j + 1)6) - F(jb)I
                                                                                                               , a-1


                                          E                           ;<a
                                                                       J
if b-1 is integral . Since F is continuous and a > 1, we may make this last
quantity small by taking 6 the reciprocal of a large integer, which completes
the proof.
   The ideas in this proof lead to a condition for the existence in C of a
random element with specified finite-dimensional distributions . For each
k-tuple of points of [0, 11, let pt, . . .tk be a probability measure on (Rk, Mk)
Assume these measures satisfy the consistency conditions of Kolmogorov's
existence theorem (in its general form ; see p. 230) .
THEOREM 12 .4              There exists in C a random element with finite-dimensional
distributions               provided these distributions are consistent and provided
                                                                     Fluctuations of Partial Sums   97

 there exist constants y > 0 and a > 1 and a nondecreasing, continuous
function F on [0, 1] such that

                   pt'. . t 2 {(#11 fl2) : I#1 - # 21 >_ 2} <
                                                                                      a
(12.58)                                                          , IF(t2) - F(t1) I

holds for all t 1 and t 2 and all positive 2 .
   If the p t , . .. tk satisfy

(12 .59)             SR2'           #21 r dµt1,t2(,81i F'2) < IF(t2) - F(t1) Ia,

then (12.58) follows .
Proof.  For each n, construct a polygonal random function X„ that is linear
                            _1 ,
over each interval [(i - 1)2 i2 -n ] and for which the joint distribution of
                                                               n _
                          X n(0), X              . . . , X n (2 2n     ) , XJO
                                      ., (2),
is 1uto, . . .,t2„ with ti = i/2n . If t1 and t2 are integral multiples of 2- n, then, by
 (12.58),

(12.60)               P{IXn(t2) - Xn(t1)l > A} <                 IF(t2) - F(t1)~a.
                                                            ~y
   As in the preceding proof, consider fixed n, 6, and j, where 6-1 is assumed
integral . If the points
 (12 .61)                         jS + i6m 1 ,       i = 0, 1, . . . , m
involved in (12.54) are all integral multiples if 2-n, then (12.55) follows as
before . Suppose now that 62n is an integer . If we take m = 62 n , then the
points (12.61) are indeed integral multiples of
                                                            2-n,
                                                                  so that (12 .55) holds .
Moreover the points (12.61) are in this case exactly the integral multiples of
2- n in the interval [ ja, (j + 1)S], so that, because of the polygonal character
of X, (12.56) and (12.57) again hold .
   Thus (12.57) holds if b-1 and 62n are both integers . If we take 6 = 2-",
where v is an integer large enough that the right side of (12.57) is less than i,
then (12.52) holds for all n > v, which, since the Xn(0) all have the same
distribution, is enough for tightness .
    By Prohorov's theorem, therefore, there is a random element X of C
and a subsequence {Xn.} such that Xn, -:?* X. If t 1, . . . , tk are dyadic
rationals, then, by the consistency assumption, the distribution of (Xn(t1),
. . . , Xf(tk)) is exactly p t, ... tk for all sufficiently large n, and it follows that
(X(t 1), . . . , X (tk)) has distribution ,utl"'tk. For general points t1 , . . . , tk of
 [0, 1], there are dyadic rationals s1("), . . . , sk( U ) with lim„ sr = t i ; since
98    The Space C

(X(s;"'), . . . , X (sk ))) converges in distribution to (X(ti), . . . , X (tk)), and
since, by (12 .58) and the continuity of F, ,u31", ...s , converges weakly to
,utl...tk , (X (tl), . . . , X (tk)) has ,utl.. .tk as its distribution . Thus X is the
random function required .
     The existence of W and W° follow anew from Theorem 12 .4 .t

Further Inequalities

For Chapter 3, we shall need a strengthening of Theorem 12 .1 . If

(12.62)             Mm =      max          min {IS, -Sill I Sk - Sill ,
                           0<i< j<k<   m
then

(12.63)                                M;, < M'm .
(If m = 3 and ~1 = - ~2 = ~31 then M,, = 0, and -Mm = ~ X1 1 .) Therefore
bounds on the tail of the distribution of Mm" are stronger than bounds on the
tail of the distribution of Mm, and the following result sharpens Theorem
12 .1 .
THEOREM 12 .5          If y > 0 and a > 2, and if
                                                                          2a

(12.64)    P{lSj - Si d > A, IS k - Sj j > A} < 1 (       u l) ,
                                                A2 y i<l<k
                                                                   0<i<-j<k<m,
holds for all positive A, then, for all positive A,

                                                                         2a,
(12.65)               P{M';n > A} < ~               (ui + . . . + u m)
                                              2ya


where K3;, a is a constant depending only on y and a.
Proof. , Put

(12 .66)           N M = min max max Si t, max IS,n - Si I~.
                                                    I

                          1<l<m      t 0<i<l  l5i<m

If 1 is the index that achieves the minimum here and i < j < k, then either
i, j < 1, or else 1 < j, k, from which it follows that

(12 .67)                               M';n < 2Nm.
Hence it will suffice to find a K, depending only on y and a, such that (12.64)

t Theorem 12 .4 combines with Theorem 9 .2 to give a condition for the continuity of sample
paths of separable processes . For extensions and variations of Theorems 12 .3 and 12 .4,
see Problems 7 and 8 in this section and Problem 4 in Section 15 .
                                                             Fluctuations of Partial Sums   99

implies
                                                                   2a.
(12 .68)            P{Nm > A}
                                  <4       (u +          + u m)

(Since N,m < 2M„z, (12.68) and (12 .65) have the same strength .)
  For sufficiently large K, K > 1 and
                                  a
(12 .69)                              + ( 4. 22'')b < K8,
                           2a)
where 6 = 1/(2y + 1), as before . We shall prove by induction on m that
such a K works . The cases m = 1 and m = 2 are easy .
  Assume as induction hypothesis that the result holds for integers smaller
than m. As in the proof of Theorem 12 .1, choose h, 1 < h < m, so that

                   u1+ . . . + uh_1 < 1 < u1 +                   + Uh
                             u          -2 -
where u = u 1 + • • • +
  Write A 1 for Nh _1 :
(12 .70)         A1 = min max { max I Sit, max ISh_1 - Si l~.
                      1<l<h       0<i<li   l l <i<h
Write A 2 for the value of Nm_ h based on the quantities ~h+1 , . .

(12 .71)     A2 = min max max I Si - Shl , max IS,,, - Sil .
                  h<l 2 <m    h<i<l2            l2<i<m
By the induction hypothesis applied to ~1, . . . , ~h_1, we have
                                                           2a

                                                                         2
(12.72)         P{A1 >_ ~} < ~ (u 1 + . . . + uh_1) 2a <_ 2a

By the induction hypothesis applied to ~h+1, . . . , ~m ,we have
                                                                     u2a K
 (12 .73)       P{A 2     A} < K2y (uh+1 +         + u m) 2 a <      2a 22a
   Write
                        u(i,j,k)=min{IS ; - Sil,ISk-S;I}
 and define
 (12.74)
    B = max {,u(0, h - 1, m) ; µ(0, h - 1, h) ;,u(h - 1, h, m) ; ,u(0, h, m)}.
 By (12 .64),
                                                    2a
 (12.75)                         P{B > A} < 4 u          .
                                                   2Y
100 The Space C

  We next show that
(12 .76)                      Nm < max {A 1 , A 2} + 2B .
Let 1 1 and 12 be the specific values of the indices that achieve the minima in
(12.70) and (12 .71) . To prove (12.76), we must produce an 1, 1 < 1 < .m,
for which
(12.77)                      max I Si I < max {Al , A2} + 2B
                             o<i<l
and
(12.78)                 max I S. - SiI < max {A1, A2} + 2B .
                       l<i<m
  Suppose first that
(12.79)                                   I Sh_1 I < B
and
(12.80)                                I S m - ShI < B.
We shall show that the choice 1 = h satisfies (12.77) and (12 .78) . Indeed,
0 < i < ll implies I Si I < A1, and 11 < i < 1 = h implies

                       SiI      I   Si - Sh-1 I + I Sh-1 I< A 1+ B
because of (12.79), so that (12 .77) holds ; and (12 .78) is established in the
same way .
    Suppose now that one or the other of (12 .79) and (12 .80) fails . For
definiteness, suppose (12.79) fails . We shall show that the choice I = Il
satisfies (12 .77) and (12 .78) . Since (12.79) fails, it follows by the definition
(12 .74) of B that I Sm - Sh-lI < B and I ~hI < B . If 0 < i<1=1,, then
I Si I < A 1 . Hence (12.77) holds . If 1 = 11 < i < h, then
                 Ism - 'SiI < I Sh-1 - 'SiI + I Sm - Sh-1I < A1 + B ;
if h < i < 12, then
           I   sm - SiI < ISi - ShI + % I + I sm - Sh-1I < A 2 + 2B,
if 12 < i < m, then I Sm - Si I <A 2 . Hence (12 .78) holds. If (12.80) fails
instead of (12.79), then (12.77) and (12 .78) hold with 1 = 12. This proves
(12.76).
  For positive numbers A O and A1 adding to 2, (12.76) implies
(12.81)        P{Nm > A} < P{A 1 > 2o} + P{A2 > 2o} + P{B > 2Al} .
Applying the inequalities (12.72), (12 .73), and (12.75), we get
                                              u 2 a 2K      u2«
                          P{Nm - A} < A o y 22z + 4 22y           .
                                                            Aly
                                                      Fluctuations of Partial Sums   101

       now (12 .39) implies
                                u2a         a          ,1/a
                    P{Nm > A} < A2y[( 2K )2a + (4.22Y)a]

       which (12 .68) follows by (12.69), which completes the proof .
  The hypotheses of Theorem 12.5 are satisfied if the ~i are independent,
E{~i} = 0, E{~i2} = ui, y = 2, and a = 1 . In this case, the ~i and the ui
also satisfy the stronger hypotheses of the following theorem and hence its
stronger conclusion . If all but one of the variances ui vanish, then
P{Mm > A} = 0 for 2 > 0 ; although the right side of (12 .65) is positive, the
right side of (12 .83) vanishes.
THEOREM 12 .6 If y > 0 and a > 2 i and if
                                                      u j)a(      ul)a
(12.82)    P{IS j - Sil > 2, I Sk - Sil > 2} < 2y (
                                               A i<l<~       i<1<k
for all positive A, then, for all positive 2,

(12.83)    P{M';,~ > 2} < K Y,a (u1 + . . . + u m)2a min 1 -        Uh
                          A2Y                       1<h<m    ui + . . + U m ]
                                                                  .
where KỲ,',, depends only on y and a.
  The moment form of (12 .82), which implies it, is the inequality (12 .9)
with which the whole discussion began .
Proof. Choose h to minimize the final factor in (12.83) ; write
u = ui + . . . + um, p = (ul + . . . + uh-1)/u, p h = uh/u, and q =
(uh+1 + . . . + u m)/u. As in the preceding proof, define Ai by (12 .70), A 2 by
(12.71), and B by (12 .74) . By (12 .82),

            P{µ(0, h - 1, m) > A} <            P"(Ph + q)" <   2y (1 - Ph)",
                                         A2Y

and there is a similar inequality for each of the other It's in (12 .74). Therefore
                                            2a
                           P{B>A}<4A2-(1-Ph)" .

   Write K = KY a . Since (12 .82) implies (12 .64), it follows by Theorem 12 .5
 (in the stronger form (12 .68)) that
                                   Ku 2"       Ku 2a
                    P{A 1 > A} < A2y P ea < A2Y (1 - Ph)a
 and
                                               Ku 2a ( _
                       {A22 > /~} < 227 q 2" < 22y ( 1
                     P {A                                Ph)a.
102   The Space C

Now (12 .76) holds just as before, and hence
             P{Nm. > A) < P{A 1 > 2A} + P{A 2 > 2A} + P{B > 4A} .

Combining this inequality with the three preceding ones, we arrive at
                                                                  2a
                         P{N m > A} G 42Y(2K + 4)                       (1 - ph)a.
                                                                ~ZY
And now (12.83), for an appropriate KY,
                                    ., follows easily by (12 .67) .
Remarks . The results of this section, new as such, stem from the work of Kolmogorov
(see Slutsky (1937)) and Chentsov (1956) .

PROBLEMS

  1 . Do Problem 1 of Section 10 once more, using (12 .19) in place of (10 .7) .
  2. If we weaken (12 .42) by assuming only that the inequality holds for the special pair of
indices i = 0, j = m, but compensate by assuming that S 1 , . . . , Sm forms a martingale
and that y > 1, then [Doob (1953, p . 314)] P{Mm > A} < (u1 + + um)a/AY, an in-
equality of essentially the same strength as (12 .44) .
  3. Assume ~1, . . . , ~ m independent with mean 0 and finite moments of order 2k . Use
the multinomial theorem to find a constant Ck, depending on k alone, such that
                                                                        k.
                                   E{S,2k} < Ck         El /k{ ~2Lk}]
                                                   =1
Generalize (12 .48) .
  4. From (12 .12) deduce that for positive s

                        E{(MM)2y-E} < 2y KY,a (u l + . . . + um )2a(1-E/2y) .
                                          E

  5 . Adapt the proof of Menshov's inequality [Doob (1953, p . 156)] to show that, if (12 .10)
holds with a > f and y > f , then
                             E{(M,,,,)2Y} S (loge 2m)2Y(u1 + . . . + um)2a

Now deduce that, if (12.42) holds with a > 1 and y > 1, then

                              E{Mm Y} < (log2 4m)y (u1 + . . . + um)a.
(If y = 2 and a = 1, this gives Menshov's inequality again .)
  6 . Use Theorem 12 .2 to show that, if ~1, ~2 ' . . . satisfies

                        Ei                                                        0,
                                                                0<i< f <
with y > 0, a > 1, and Eu i < oo, then El l converges with probability 1 . Find a result
connected in an analogous way, with Theorem 12 .6.
  7. Theorem 12 .3 is still true if we replace (12 .50) by the assumption that

(12 .84)   P{I Xn(t) - X-001 > A, IX-02) - X.(01 >                           I F(t2) - F(t l) I 2a
                                                                A} < A2Y
holds for tl < t < t2 and for all n, where now a > 1.
                                                           Empirical Distribution Functions    103

  8. Theorem 12.4 is false if (12 .58) is weakened to the analogue of (12 .84) ; it is also false
if the assumption a > 1 is weakened to a > 1 . [Suppose p t is a unit mass at 0 or at 1 accord-
ing as t < I or t > 1 .] See, however, Problem 4 in Section 15 .
  9. Let
                                                          kn
                                                   for          l<-t<-k
                                                                             n l+ 2n

              xnk(t) =         k                          k-1    1      k
                               --t                 for             <t<-
                                                           nn + 2       n
                                                   elsewhere,
and let Xn take the value xnk with probability 1 /n, k = 1, . . . , n. Then

                               E{I Xn (t 2 ) - Xn(t1)I} <_ 4 It2 - t 1 i

for all n, t 1 , and t2 . Since {Xn} is not tight, we cannot take a = 1 in Theorem 12 .3. Similarly,
we cannot take a = in Problem 7 .


13 . EMPIRICAL DISTRIBUTION FUNCTIONS

Let 1 , 2, . . . be random variables, on some (S2,                         , P) . We shall assume
that
 (13 .1)                                  0 <      (co) < 1,
which can always be arranged by a transformation .
  The             (or sample) distribution function Fn (t, co) corresponding to
           empirical


the points 1(w), . . . , n( is defined, for 0 < t < 1, as 1/n times the
                                     w)


number of      in for which i(w) < t.
                   <


  If the n are independent and have a common distribution function F(t)
(by (13 .1), only values of t in [0, 1] matter), then, for large n, Fjt, (0)
should approximate F(t)-the difference
 (13.2)                                   Fn(t, w) - F(t)
 should be small . According to the Glivenko-Cantelli theorem,
 (13 .3)                      sup Fn(t, w) - F(t)I
                                            l

                             0<_t51
 converges to 0 with probability 1 .t If F is continuous, it is possible to find
 the limiting distribution of (13 .3), properly normalized ; this limit theorem,
 due to Kolmogorov, stands to the Glivenko-Cantelli theorem as the central
 limit theorem does to the law of large numbers .
    We shall consider in this section only the case F(t) - t, so that the
 assumed independent, have a common uniform distribution over [0, 11 .

 t Loeve (1960, p . 20).
104    The Space C

Kolmogorov's result is that
                                                                       e-2k2«,
(13 .4)    P{co :sup t I .Jn(F f(t, (o) - t) < a} ) 1 - 21(-1)                   a > 0.
                                                                 k+1

                                                        k=1

We shall derive (13 .4) by using the theory of weak convergence in C .
  Consider the function Yn(co) with value
(13.5)                      YY (t, w) = /n(F F (t, w) - t)

at t. Although Y,,,(w) is a function on [0, 1 ] produced at random, it is not an
element of C, being obviously discontinuous . If we could, establish the
                                         convergence in distribution of Y,,, as a
                                         random element of an appropriate
                                         space of discontinuous functions with
                                         an appropriate metric, we would be
                                         in a position to derive (13 .4) by the tech-
                                         niques of Sections 10 and 11, because
                                            sup s /n(F,,(t, w) - t)j = h(Yn (c)))
                                           with h (x) = sup, Ix(t)j
                                                                 . Although in
                                           the next chapter we shall analyze Y, a
                                           as a random element of a metric space
                                           of discontinuous functions, here we
                                           shall circumvent the discontinuity
                                           problems by adopting a different defi-
nition of empirical distribution function . (We shall still be able to derive
(13 .4) itself-not some perturbation of it .)
   Let Gn (t, w) be, as a function of t ranging over [0, 1], the distribution
function corresponding to a uniform distribution of mass (n + 1) -1 over
each of the (n + 1) intervals [~ (j_ 1) (a)), b(j) (co)], where $(o) = 0, ~(n+1) = l,
and ~( 1 ), . . . ,    are the values ~1, . . . , ce,, ranged in increasing order .
(Note that Fjt, w) corresponds to a distribution of mass n -1 to each of the
n points $1(w), . . . , ~ n (w) .) The functions F,,,(t, w) and Gn (t, w) are close :

(13.6)               ~F.(t, w) - G„ (t, w) I < 1 ,    0 < t < 1.
                                               n
      Now let Z,,(w) be the element of C with value
 (13 .7)                   Z.(t, w) ='Jn(G,z(t, w) - t)
at t. Since each Zn (t) is a random variable, Z,,, is a random element of C
(Z;'' C 4) . By (13 .6), we have

 (13 .8)                  sue t I Yn(t, w) - Z.(t, w)I < 1_ .
                                                         Jn
                                                    Empirical Distribution Functions 105

THEOREM 13 .1 If the $,z are independent and uniformly distributed on
[0, -1], and if Z,n is defined by (13 .7), then
(13 .9)                              Zn 4- W° ,
where W° is the Brownian bridge .
  Before proving the theorem, let us see how it implies (13 .4). If h(x) _
sue t Jx(t)j, then h is continuous on C and hence (13 .9) implies h(Z,,).4
h(W °) . By (11 .39),

            P{sup s I Zn(t)I < a} ) 1 - 2 j (-1)k+le2k2 ,                a > 0,
                                           k=1

so that (13.4) follows from (13 .8) and Theorem 4.1 .
  Using (11 .40), we can in the same way derive the relation
(13.10)     P{ ,/-n sup t (Fn (t, co).- t) < a}       1 - e2~ 2,         a > 0.
   If h(x) is the Lebesgue measure of the set of t for which x(t) > 0, then, by
(11 .42),
(13 .11)               P{h(Z,n) < a}         ,       0 < a < 1;

h(Z,n) is approximately n-1 times the number of i, 1 < i < n, for which
S (i) > i/n .

Proof. To prove (13 .9), we first show that the finite-dimensional distributions
of Zn converge to those of W°. Let Un (t, co) = nF,n(t, (o) be the number of
points among ~1(co), . . . , ~n(co) that satisfy ~i (co) < t . If
                           0=to<t1< . . .<tk=1,

then the random variables
 (13 .12)            UU(t i) - Un(ti_1),          i = 1, 2, . . . , k,

are multinomially distributed with parameters n and pi = ti - ti_1, i =
1, 2, . . . , k. It follows by the central limit theorem for multinomial trials
that the random vector with components

( 13.13)    Y(ti) - Yn(ti-1) = 1 n ((U,(ti) - Un(ti-1)) - npi),
                                 V
                                                                         i=1,2, . . .,k,
 converges in distribution to the random vector with components W t° - Wt=-1
 (by (9 .14) and (9 .15), these normally distributed random variables have the
 right variances pi (l - pi) and covariances -pip;). Because of (13 .8), the
 same is true if we replace (13.13) by
                      Zn(ti) - Zn(ti-1),          i = 1, 2, . . . , k.
1 06    The Space C

  The finite-dimensional distributions of the Z n thus converge properly. If
we prove {Zn } tight, (13 .9) will follow . By Theorem 8 .3, it suffices to show
that, for each positive E and ri, there exists a 6, 0 < 6 < 1, and an n o such
that, if n > n o , then

(13.14)                   P    sup IZ n(s) - Zn(t)I > E < 8i
                              t<_s<_t+a
holds for all t .
   Because of (13.8), we may replace (13 .14) by

(13 .15)                  P{ SUP      I Yn(s) - YY(t)I > E}    < 8n .
                              t+b

The event whose probability appears in (13 .15) is easily shown to lie in the
6-field generated by ~1, . . . , $n ; (13 .15) is simply an inequality involving
~1, . . . , ~,,j-we have not embarked on an analysis of Yn as a random
element of a space of discontinuous functions . For notational convenience,
we shall take t 0 in (13 .15)

(13.16)                           P{sup I YY(s)I > E} < 677.
                                     s<a

Since the distributions of the increments of Yn (t) are stationary, this is
really no restriction anyway .
  We shall bound the probability in (13 .16) by using Theorem 12 .1 . Let us
show that
(13 .17)

        E{I Yn(s + pl) - Yn(s)I 2 • I US +P1 +P2) - Yn(s + Pl)1 2 } < 6PiP2•
For 1 < i < n, let «i be 1 - Pl or -p l according as z lies in (s, s + p l] or
not, and let Ni be 1 - P2 or -P 2 according as ~i lies in (s + p l , s + p1 + P21
or not . Then (13 .17) is equivalent to
                                           n 12
(13.18)                         E{ (j;)2 ~~ A f < 6n 2p1P2 .
                                          i=1
  Since the $i are independent, so are the random vectors (oct, j3 ). Since $i
is uniformly distributed, (ai, Ni) takes on the values (1 - P1, -P2),
(-p1, 1 - p2), and (-p l , -P2) with respective probabilities p l , P 2 , and
P3 = 1 - P1 - P2. Now E{a i } = E{j i} = 0, and considerations of symmetry
lead to
                      n    2
       E{ ( fl az)2 ( n Na ( = nE{OC12#12 } + n(n - 1)E{OC1 2}E{922 }
           a-1       i=1
                                                       + 2n(n - 1 )E{a1j1}E{a2j92} •
                                                                 Empirical Distribution Functions 107

vow (13 .18) follows from
           E {a12N12} = Pl(1 - P1)2P22 + P2P1 2 ( 1 - P2) 2 + P3P1 2P22 < 3P1P2,
           E{GC1 }2 E {922} = P1(1         P1)P2( 1      P2) < P1P2,
ind
           E{a1N1} E{a2N2} = P1 2P22 < P1P2 •
 For fixed 6, consider the variables

                            i        -Yn(i-1~~~
13.19)                Yn(       61                                   i= 1, . . .,m .
                     m l          m
[f y = 2 and a = 1, and if ui = 616/m, then, by (13 .17), the hypotheses of
Theorem 12 .1 are satisfied, with the variables (13 .19) in the role of the ~ z
in that theorem . If

                  Mm   = max min                         ,       Y.(8) -           Y.
                          1<i<m              Yn (m 6)                                   (m 6) 11
it follows that

(13.20)                                   P{Mm > e} < 6      K 62,
                                                                 E

with K = K2,1 .
  If
                                         M m = max       Y. (                  ,
                                               1<i<m             m 6)
then, by (12.4),
                                          M m < Mm       +   I   Yn(b)   I .



From this and (13 .20) we have

(13 .21)
                                                4
                        P{Mm > E 1 < 2 - 6K 62 + P[1 Y.(b)i > 21
                                                     8
                                                                                            •
Now, for each w, Y,,,(s, w) is right-continuous in s. As m - oo, therefore,
Mm converges to sup., <,, Y,n     I for each w . Hence (13 .21) implies
                                     I     (s, co)




                                <   2 4 £ 6K 62 +
(13 .22)    P(sup jYn (s)I > E1          4        P(~IYn(b)I > 8 -
              s<a                                              21
  Because of the asymptotic normality of (13 .13), Yn (b) --9-* x/6(1 - 6) N as
n - oo (6 fixed), and hence
                                                N/6(1                      .4
           P Y. (6) 1 > E -~ P N>
              1                                     e/2   < 2462 E{N4 } = 3 4 62.
                        2)                            -b~
                                                        )    8             s
108   The Space C

For n exceeding some na , therefore,

                                P~I Yn(6)1   1 2~ < 6 . 2 62 ;
                                                         E4

hence, by (13 .22),
                                                      6 24(K         1)
(13.23)                 P sup Yn (s)~ >
                                I                 <           E4
                                                                 +        62.
                         ~s<S                 ,


Given s and q, choose 6 so that 6 • 24 (K + 1)62/£4 <671. For n > n a , (13 .16)
follows by (13 .23).
   This completes the proof of Theorem 13 .1 . The treatment is evasive in that
we really analyze Y, replacing Y,, by Z,, only in order to stay in C . In
Section 16 we treat Y,, in the space natural to it and prove Y," -* W°, and
generalizations, in that space . Although the proofs in Section 16 depend on
a considerable body of theory, they are much more transparent than the one
just given .
Remarks . Doob (1949) conceived the idea of proving (13 .4) by passing from the random
function (13 .5) to the Brownian bridge ; Donsker (1952) justified the passage . The proof
here derives from Chentsov (1956) . Kac (1949) originally proved (13 .11) . See Darling (1957)
for an account of limit theorems connected with (13 .5) and for a large bibliography . See also
the more recent papers : Bickel (1968a and 1968b), Birnbaum and Pyke (1958), Pyke (1965
and 1968), and Pyke and Shorack (1968) .
CHAPTER 3

The Space D




14 . THE GEOMETRY OF D

The space C is unsuitable for the description of processes that, like the
Poisson process and unlike Brownian motion, must contain jumps . In this
chapter we study weak convergence in a space that includes certain
discontinuous functions .

The Space D
Let D = D [0, 1 ] be the space of functions x on [0, 1 ] that are right-
continuous and have left-hand limits
   (i) For 0 < t < 1, x(t+) = limn l t x(s) exists and x(t+) = x(t).
  (ii) For 0 < t < 1, x(t-) = lim., t t x(s) exists.
  A function x is said to have a discontinuity of the first kind at t if x(t-)
and x(t+) exist but differ and x(t) lies between them . Any discontinuities of an
element of D are of the first kind ; the requirement x(t) = x(t+) is a con-
venient normalization . Of course, C is a subset of D.
  For x E D and To -- [0, 1], put
(14.1)              w.(T0) = sup {Ix(s) - x(t)l :s, t E To } .
The modulus of continuity of x, defined by (8 .1), may be expressed as
(14 .2)                  wx(S) = sup wx [t, t + S] .
                                  o5t<1-a

A continuous function on [0, 1 ] is uniformly continuous . The following
lemma gives the corresponding uniformity idea for elements of D .
                                                                              109
110   The Space D

LEMMA 1          For each x in D and each positive                E,   there exist points to,
tl, . . . , tr such that
(14 .3)                         0=to<t1< . . .<tr=

and
(14.4)                     wx [ti_ 1 , ti) < E,    i = 1, 2, . . . , r.

Proof.  Let T be the supremum of those t in [0, 1 ] for which [0, t) can be
decomposed into finitely many subintervals [ti_1 , ti) satisfying (14.4) . Since
x(0) = x(0+), we have T > 0 ; since x(T-) exists, [0, T) can itself be so
decomposed ; T < 1 is impossible because x(T) = x(T+) in this case .
  From this lemma it follows that there can be at most finitely many points
t at which the jump (saltus) Ix(t) -
                                   x(t-)( exceeds a given positive number ;
in particular, x has at most countably many discontinuities . It follows also
that x is bounded
(14 .5)                                 sups Ix(t)I < co .

Finally, it follows that x can be uniformly approximated by simple functions
constant over intervals, so that x is Borel measurable .
  We shall need a modulus that plays in D the role the modulus of
continuity plays in C. For 0 < 6 < 1, put
(14.6)                          w'(8) = inf max wx[t2_1, ti),
                                        {t 1 } O<i<r


where the infimum extends over the finite sets {ti} of points satisfying
                            0=to<tl< . . .<tr=1,
(14 .7)
                            ti -ti- 1 >6,         i=1,2, . . .,F.
Lemma 1 is equivalent to the assertion that
(14 .8)                                  lim wx(6) = 0
                                         b-+0
holds for every x in D.
  Even if x does not lie in D, the definition of w'(8) makes sense . Just as
lima-0 wx(8) = 0 is necessary and sufficient for an arbitrary function x on
[0, 1] to lie in C, (14.8) is necessary and sufficient for x to lie in D.
  Since [0, 1) can, for each 6 < 2, be split into subintervals [ti_1, ti) with
6 < ti - ti_1 < 26, we have

(14 .9)                       w ,(8) < wx(26),        if 6 < 2.
There can be no general inequality in the opposite direction because of (14 .8)
and the fact that wx(8) does not go to 0 with 6 if x has discontinuities .
                                                             The Geometry of D 111

  Suppose, however, that x c C . Given s, choose points {t i } satisfying (14 .7)
and
(14.10)               max wx [ti _ 1, t i) < wx(b) + e .
                         O<i<r
If is - tl < b, then s and t lie in the same subinterval [ti_ 1 , ti) or in abutting
ones, and it follows by (14 .10) and the assumed continuity of x that
wx (b) < 2w X (b) + 2e. Since e was arbitrary,
(14.11)                   wx(b) < 2wx(6)       if x c C .
  By (14 .9) and (14 .11), the moduli wx(b) and w X (b) are essentially the same
for continuous functions x .

The Skorohod Topology
Two functions x and y are near one another in the uniform topology used
for C if the graph of x(t) can be carried onto the graph of y(t) by a uniformly
small perturbation of the ordinates, with the abscissas kept fixed . In D, we
shall allow also a uniformly small deformation of the time scale . Physically,
this amounts to the admission that we cannot measure time with perfect
accuracy any more than we can position . The following topology, devised
by Skorohod, embodies this idea .
   Let A denote the class of strictly increasing, continuous mappings of
 [0, 1] onto itself. If A E A, then A(0) = 0 and A(1) = 1 . For x and y in D,
define d(x, y) to be the infimum of those positive e for which there exists in
A a 2 such that
(14.12)                          sup, IAt - tl < s
and
(14 .13)                     sups lx(t) - y (At)i < s .
   By (14 .5), d(x, y) is finite (take At -_ t). Clearly, d(x, y) > 0 ; and d(x, y) _
0 implies that for each t either x(t) = y(t) or x(t) = y(t-), which in turn
implies x = y . If A lies in A, so does A-1 ; d(x, y) = d(y, x) follows from
                            sue t IA-It - tj = sups jAt - tl
and
                    sups WA-10 - y(t)I = sup s Ix(t) - y(At)l .
If Al and 2, lie in D, so does their composition A2A1 i the triangle inequality
follows from
                 sue t IA2A1t - tl < sue t l2 1 t - tl + SUP t IA2t - tl
and
      suet lx(t) - z(22A1 t)I < Sup t lx(t) - y(21 t)I + sue t 1Y(t) - z(A2t)l-
Thus d is a metric .
112    The Space D

  This metric defines the Skorohod topology . The uniform distance between
x and y may be defined as the infimum of those positive s for which
sue t Ix(t) - y(t)I < e . The A in (14 .12) and (14 .13) represents the uniformly
small deformation of the time scale mentioned above .
  Elements xn of D converge to a limit x in the Skorohod topology if and only
if there exist functions An in A such that
                                  lim n x n (A n t) = x(t)
uniformly in t and
                                       lim n A n t = t
uniformly in t. If x n goes uniformly to x, then there is convergence in the
Skorohod topology (take A n t - t) . On the other hand, there is convergence
                              xn = I[o,j+1/n) ' X
                                            = I[o,1)
in the Skorohod topology, whereas x n (t) -- x(t) fails in this case at t = 2.
Since
              I x n(t) - x (t)I < IX-(t) - x (An l t)I + I x(An 1t)   X   (01,


Skorohod convergence does imply x n (t) -- x(t) for continuity points t of x,
and if x is (uniformly) continuous on all of [0, 1], then Skorohod con-
vergence implies uniform convergence . In particular, the Skorohod topology
relativized to C coincides with the uniform topology there .
  The space D is separable ; one countable, dense set consists of those x
that have a rational value at t = 1 and have, for some integer k, a constant,
rational value over each subinterval [(i - 1)/k, i/k), 0 < i < k (use Lemma
1 and the definition of d) . But D is not complete under the metric d: If
(14 .14)                             xn = IC_1,j+1/n),
then
                                               1
(14 .15)                    d(x n , x m) = 1
                                           n m
and hence {x n } is fundamental in the metric d, even though it is not con-
vergent . We shall introduce in D another metric d o-a metric which is
equivalent to d (gives the Skorohod topology) but under which D is complete .
Completeness facilitates characterizing compact sets .
  The idea in defining do is to require that the time-deformation A that
intervenes in the definition of d be near the identity function in a sense
which at first appears more stringent than (14 .12) ; namely, we require that
the slope (At - As)/(t - s) of each chord be nearly 1 or, what is the same
thing and analytically more convenient, that its logarithm be nearly 0 .
  If A is a nondecreasing function on [0, 1 ] with A = 0 and Al = 1, put

                                                  At - As
(14 .16)                       IIAII = sup log
                                        sit         t-s
                                                                                                The Geometry of D   113

If II A 11 is finite, then the slopes of the chords of A are bounded away from 0
and infinity ; therefore it is both continuous and strictly increasing and hence is
a member of A . Although 11 All may be infinite even if 2 does lie in A, such
elements of A do not enter into the following definition .
   Let do (x, y) be the infimum of those positive s for which A contains some
I with
(14.17)                                              11 4 JI
                                                               < s
and
(14.18)                                sup s l x(t) - yQLt)1 < s .
By (14.5), do(x, y) is finite (take At - t). That do is a metric follows from the
relations
(14 .19)                                        I1   -1 11=II          I1



and
(14.20)                                 II12 1 1ll   <   11    a1Il   + 11     2 211 .
  We shall show presently that d and do are equivalent metrics . We shall
also show that D is complete under d o ; for the present, note that, if xn is
defined by (14 .14), then
                                                                      Yn
(14.21)                   do (x n , X,,,) = min{1, log n },                              m, n > 3,
                                                          1
so that at least the (nonconvergent) sequence {xn} is not do-fundamental .
  If do (x, y) < s, then (14.17) and (14.18) hold for some A E A. If s < 4,
then, since 20 = 0,

                     log (1 - 2E ) < -s < log                              <   s   <     log   (1 +2s),t
                                                                 Zt

so that l   At   -   tI    < 2s . Therefore
 (14.22)                     d(x, y) < 2do (x, y)                     if do(x, y) < 4.
  A comparison of (14 .15) and (14 .21) shows that there can be no general
inequality in the direction opposite to (14 .22). The following lemma shows,
however, that do (x, y) is small if d(x, y) and wx(8) (or w,,(6)) are both small.
LEMMA 2              If d(x, y) < 62, where 0 < d < 4, then do (x, y) < 46 + wx(8) .


                                                                                   i=
Proof.      Choose points t i satisfying (14 .7) and

 (14 .23)                 w x [ti _1 , ti ) < wx(8) + 8,                                  1, 2, . . . , r.
t If Is! < 1, then s - s 2 < log (1 + s), whereas log (1 + s) < s for all s > -1 .
114   The Space D

Now choose from A a u such that
(14.24)        sue t IX(t) - y(µ0 = sups
                                     I       I x(,u   1 t) - y(t)1 < 62
and
(14 .25)                        sups I µt - t I < 62.

  We want to define in A a A that will be near ,u but will not, as u may,
have chords with slopes far removed from 1 . Take A to agree with ,u at the
points ti and to be linear in between . Since the composition /Z-1 2 fixes the t i
                             ,z-'At
and is increasing, t and            always lie in the same subinterval [ti_ 1, t i).
By (14.23) and (14 .24), therefore,
                                                1At)
   I x(t) - y(At)1 <- IX(t) - x(h 'At)I + Ix(u       - y(At)I
                                              < wx(6) + 6 + 6 2 < 46 + w X (6).

  It is now enough to prove 11211 < 46 . Since A agrees with lz at the t i, it
follows by (14 .25) and the inequality t i - ti-1 > 6 that

              I (Ati - .ti-1) - (ti - ti-1) I < 262 < 26(ti - t i-1) •
From the polygonal character of A, it now follows that
                        I(At-As)-(t-s)I <26It-sl

holds for all s and t. Therefore
                                         At   As
                    log (1 - 26) < log      -    < log (1 + 26) ;
                                          t-s
since 6 < 4, 11211 < 46 follows .

THEOREM 14 .1          The metrics d and do are equivalent .

Proof. Let us denote an open d-sphere by Sd (x, s) and an open do -sphere by
Sdo (x, s). It follows by (14 .22) that inside an arbitrary Sd (x, s) we can find an
Sdo (x, 6). (The choice of the new radius does not depend on the center x.)
   Lemma 2 implies that, if

 (14.26)                    6 < 4,       46 + w,(S) < s,
 then Sd (x, 62) C Sdo (x, s) . Given x and s, we can, by (14.8), find a 6 satisfying
 (14.26). Inside an arbitrary do-sphere we can thus find a d-sphere with the
 same center . (This time the choice of the new radius does depend on the
 center x, as must be true if D is to be complete under do if d and do are to
 give different classes of fundamental sequences .) Therefore d and do are
 equivalent metrics .
                                                                            The Geometry of D 115


Completeness of D

THEOREM 14.2                The space D is complete in the metric do.

Proof. It is enough to show that each d ofundamental sequence contains a
doconvergent subsequence . If {xk } is a do -fundamental sequence, it contains
a subsequence {yn } = {x kn } such that
(14.27)                                  do(yn, yn+1)      < Zn
We shall prove that {y n } is doconvergent to some limit .
  By (14 .27), A contains a ,u n such that
(14 .28)                            Sup t I yn(t) -.01
                                                   .+1(µ
                                                      y              < 2n
and
(14.29)                                      11µ .1l    < 2n .
This implies, for m > 1,
   SUPt I µn+m+1µn+m
                            . . .
                                    µn+lµnt - µn+m . . µn+11un tl
                                                                 = SUP., 1µn+m+is - sI < 2 + m .

(Here µn+m               µn+1µn denotes iterated composition .) For fixed n the func-
tions
(14.30)                                           . . .
                                          µn+m            µn+lµn t
are thus uniformly fundamental as m --> oo . Therefore (14.30) converges
uniformly to a limit
(14 .31)             li n t = limn µn+m  µn+lµnt •
   The function 2 n must be continuous and nondecreasing and must satisfy
A n0 = 0, 2 n l = 1 . If we prove that IIU is finite, it will follow that A . is
strictly increasing and hence is a member of A . By (14 .20),
                 . . .                        . . .
                         µn+11tnt - µn+m               µn+lµns
      log'an+m
                                 t-s

            < 11µn+m . . . µn+1µn11 ~ 11µn11 + Ilµn+1ll + . . . .+. 11µn+mll ~ 2 11 •
 Letting m -* oo in the first member of this inequality, we find that II1nII <
 1/2n-1 ; in particular, IIA n ii is finite and A n E A.
   By (14.31), A n = An+1µn . Therefore, by (14.28),

           Supt I yn(a'nl t) - yn+1(An+1t)I = SUP., Iyn(S) - yn+1(µns)I              < n•
                                                                                      2
116   The Space D

In consequence, the functions y n (2nit), which are elements of D, are
uniformly fundamental and hence converge uniformly to a limit function
x(t). It is easy to show that x must also be an element of D . Since
sup s ly n (A .1t) - x(t)I - 0 and 1IA,.ll 0, we have do (y,z , x) -->- 0, which
completes the proof.

Compactness in D
We turn now to the problem of characterizing the compact subsets of D .
With the modulus w'(6) defined by (14 .6), we have an analogue of the
Arzela-Ascoli theorem (p. 221) .
THEOREM 14 .3 A set A has compact closure in the Skorohod topology if
and only if
(14.32)               sup sup Ix(t)I < 00
                               xeA     t
and

(14.33)                        lim sup wx(6) = 0.
                                S-+0 xEA

  Note that, because of (14.9), (14.33) is weaker than
(14.34)                        lim sup wx(6) = 0.
                                6-*0 XEA

Proof. To prove the sufficiency of these conditions, it is enough, since D is
do -complete, to show they imply that A is totally bounded with respect to
do. Let us first show that (14 .32) and (14 .33) imply that A is totally bounded
with respect to the metric d.
   Given a positive s, choose an integer k such that 1/k < e and wx(1/k) < s
for all x in A . Take H to be a finite s-net in the linear interval [-a, a],
where
                                a = sup sup I x(t)l)
                                       xeA      t

Let B be the finite set of y in D that assume on each of the intervals [(u - 1)lk,
u/k) a constant value from H and satisfy y(l) E H. We shall show that B is a
2e-net with respect to d.
   Given x in A, use the inequality wx(1/k) < e to choose points t2, 0 =
to < ti <       < t,. = 1, such that
(14.35)                              t2 - t 2 _ 1   > k
and
(14 .36)                wx[t 2 _ 1 , t2) < e,        0 < i < r.
Choose integers u2 such that u2 /k < t2 < (u2 + 1)/k, i = 0, 1, . . . , r. Since
                                                                  The Geometry of D 117

he ui must be distinct by (14 .35), there is in A a A that carries ui/k to t i
,nd is linear in between these points . Choose in B a point y such that


                    y(k) - x(" k) <E,
14.37)                                                       0<u<k .

since an interval
                                                U       1)
                               ~~k~~                k

nust be inside one of the intervals
                              ui         ui+1
                                    A           ) _ [ti,
                             k,           k

:he function x(At) cannot, by (14 .36), vary by more than E as t varies over an
nterval [u/k, (u + 1)/k) . Since y is constant over intervals of this form,
;14 .37) implies jy(t) - x(At)I < 2E for all t . By construction,

                                                             <k<E ;
                           k k
by linearity, sup s 12t - tI < E. Thus d(x, y) < 2E . Therefore B is a 2E-net
in the sense of d.
  Given a positive 77, choose 6 so that 0 < 6 < 4 and so that 46 + w'(8) < 71
holds for all x in A . Then choose s so that 0 < 2E < 6 2 . If B is the set just
constructed-a finite 2E-net for A in the sense of the metric d-then, by
Lemma 2, B is an 71-net for A in the sense of the metric d o . Thus A is do
totally bounded and hence, since D is do complete, the closure A- of A is
compact.
  This proves the sufficiency of (14 .32) and (14 .33). If A- is compact, then
it is bounded, and (14 .32) follows immediately (note that sue t Jx(t)I is the
distance, in the sense either of d or of do, from x to the function that is
identically 0) . The present theorem differs from the Arzela-Ascoli theorem
in that for no single t do
(14.38)                            sup Ix(t)I < oo
                                   xEA

and (14 .33) together imply (14 .32). It is not hard, however, to prove that
(14.32) follows if (14.33) holds and if (14 .38) holds for each individual value of
t (or even just for values of t including 1 and dense in [0, 1]).
   It remains to prove the necessity of (14 .33). By (14.8), w,(8) goes to 0 with
6 for each x. If we prove that wx(8) is upper semicontinuous in x for each 6,
then (see p . 218) the convergence will be uniform on compact sets and (14 .33)
will follow .
118   The Space D

  Let x, 6, and s be given . To prove upper semicontinuity, we must find an
  such that d(x, y) < q implies

(14.39)                         wy(S) < wx(6) + 6 .
First choose points t i satisfying (14 .7) and

(14 .40)         wx[tti-1, ti) < W XP)   +2,             i=1,2 . . . . ,

Now choose ri so small that
                    ti -ti_1>6+2 ?7 ,                  i= 1,2, . . .,r,
and
(14.41)                                  17
                                              < 4E .

If d(x, y) < 71, then, for some 2 in A, we have

                       sup t jAt-tI=sup t IA-1 t-ti< i
and
(14.42)                      suet Iy(t) - x(At) 1 < q .
  Let si = 2-'ti . Then
(14 .43)               si - si_1 > ti - ti _ 1 - 271 > 6 .
Moreover, if s and t both lie in [si _1 , si), then 2s and At both lie in [ t i-1, ti)
and therefore, by (14 .40), (14.41), and (14 .42), ly(s) - y(t)) < w,(8) + E .
Thus
                        w"[si_1, si) < wx(6) +8,
which, in view of (14.43), implies (14 .39). This completes the proof of
Theorem 14 .3 .

A Second Characterization of Compactness
Although the modulus w' (8) is natural in that it leads to a complete charac-
terization of compact sets, a different one is sometimes more convenient to
work with, namely
(14.44)          w"(6) = sup min{lx(t) - x(t1)I, lx(t2) - x(t)I},
where the supremum extends over t 1, t, and t2 satisfying
(14.45)                    ti<t<t2i               t2 -t1 <6 .
   Given 6 and E, decompose [0, 1) into subintervals [s i_ 1 , si) such that
si - si_1 > 6 and wx [si_1, si) < w'(6) + E . If (14.45) holds, then either t 1
and t2 lie in the same subinterval [si_ 1 , si), in which case Ix(t) - x(t1)j <
wx(6) + E and Ix(t2) - X(t)l< wX (6) + E, or else they lie in abutting intervals
                                                                       The Geometry of D   119

 li-1, SOand [s i , s 2+1), in which case jx(t) - x(t1 )l < w X (b) + s for
  < t < si and 1X(t2) - x(t)j < wx(b) + 8 for si < t <t2 . Therefore
 [4.46)                                wX"(b) < wX,(b) .
  There can be no inequality in the other direction . If, for example,
                                       1        for     0<t<n-1 ,
 14.47)                   xn (t) =
                                       0        for     n-1 < t < 1,
 r if
                                  0         for       0<t<1-n -1 ,
 14 .48)               xn(t) =
                                   1        for       1 - n-1 < t < 1,
 hen wx n (6) = 0, whereas
                                     0    if b < n-1,
                            w'X .(6)
                                 (b) =
                                   t 1 if b > n-1 .
,ince . {xn} has compact closure in neither case, there can be no compactness
ondition involving (in addition to (14 .32)) a restriction on wx(b) alone. It is
)ossible, however, to formulate a compactness condition in terms of wx(b)
.nd the behavior of x near 0 and 1 .
CHEOREM 14.4 A set A has compact closure in the Skorohod topology
f and only if
14 .49)                           sup sup Ix(t)J < 00
                                   x€A      t
rnd
                               lim sup wx(b) = 0,
                                 6-0 xeA
14.50)                         lim sup w x [0, b) = 0,
                               6---0 xEA
                               lim sup w x[1 - b, 1) = 0 .
                               6- 0 xeA
Proof.      It suffices, in view of Theorem 14 .3, to show that (14.50) is equivalent
:o
;14.51)                            lim sup w'(b) = 0.
                                     6-0 xEA

That (14.51) implies (14.50) follows by (14.46) and the definition of w'(b).
We prove the reverse implication .
  Given a positive c, choose a positive b such that, for all x in A,
(14.52)          wx(b) < e,        wx[0, b) < s,           wx [1 - b, 1) < s.
Assume that x lies in A ; we shall show that
(14 .53)                                   wx(2b) < 6s,
which will suffice to prove the theorem .
120 The Space D

  Let us first show that
(14.54)                 t 1 <s<t<t2i            t2 -t1 <b
implies
(14.55)              min {Ix(s) - x(t1)l, Ix(t 2) - X(t)l)< 2s .
Indeed, if 1x(s) - x(t i ) I   > s, then, by (14 .52), 1x(t) - x(s) l < e and
Ix(t2) - x(S)I < s, so that Ix(t 2) - x(t)I < 2e .
    Suppose x has a jump exceeding 2s at each of two points Ti and r, . If
0 < T2 - T1 < 6, then there exist points t 1 , s, t, t 2 satisfying (14 .54),
t1 < T,= s, and t < T2 = t2 ; if t 1 is close enough to T 1 , and if t is close
enough to T 2 , then (14 .55) is violated, which we have seen is impossible .
Thus [0, 1 ] cannot contain two points, within 6 of each other, at each of
which x jumps by more than 2s . And, by (14 .52), neither [0, 6) nor [1 - 6, 1)
can contain a point at which x jumps by more than 2s .
    Thus there exist points s i , with 0 = so < s1 < . . . < s,. = 1, such that
s i - s 1 _ 1 > 6 and such that any point at which x jumps by more than 2s
is one of the si . If s; - sj _1 > 6 for a pair of adjacent points, enlarge the
system {s i } by including their midpoint . Continuing in this way leads to a
new, enlarged system s o , . . . , s,. (with a new r) that satisfies
                   2a<si-si-1<6,                i=1,2, . . .,r.
  Now (14 .53) will follow if we show that
(14.56)                         w.[si_1, si) < 6s
for each i. Suppose sti_1 < t 1 < t2< s i . Then t 2 - ti < 6. Let o be the
supremum of those a in [t 1 , t 2 ] for which sup tl<u . a Ix(u) - x(t1)I < 2s ; let
a 2 be the infimum of those a in [t 1 , t 2] for which SUP.,, . < t2 x(t2 ) -
                                                                    I         x(u)   I   <


2s. If a <a2, there exist points s just to the right of a, . with 1x(s) - x(t1) I >
2s and there exist points t just to the left of a2 with Ix(t 2) - x(t)j > 2s ; since
we may ensure s < t, this contradicts the fact that (14 .54) implies (14 .55).
Therefore aa 2 < a1, and it follows that 1 x(61 -) - x(t 1 ) I < 2s and
Ix(t2) - x(a 1 )I < 2s. Since t1 < a1 < t 2 , or, is interior to (si_ 1, si), so the
jump at or, is at most 2s . Thus Ix(t2) - x(t1)I < 6s. This establishes (14 .56),
which proves (14 .53) and the theorem .f

Finite- Dimensional Sets

Finite-dimensional sets play in D the same role they do in C . For points
t 1 , . . . , tk in [0, 1], define the natural projection Trt, . . .tk from D to Rk as

t The points 0 and 1 play a special role in the theory of the space D because each 2 in
A fixes them . Judicious enlargement of A might simplify the theory .
                                                            The Geometry of D   121

usual
(14 .57)                  7Ttl . . . t k (x) = (x(t1), . . . , x(tk)) .
Now 7r o and 7r 1 are everywhere continuous . Suppose 0 < t < 1 . If points
x n converge to x in the Skorohod topology and x is continuous at t, then
(p. 112) xn(t) -- x(t) . Suppose, on the other hand, that x is discontinuous at
t . If An is the element of A that is linear on [0, t] and on [t, 1 ] and satisfies
2nt = t - 1/n, and if xn (s) - x(),n s), then x,,, converges to x in the Skorohod
topology but x n (t) does not converge to x(t). Thus : If 0 < t < 1, then Trt
is continuous at x if and only if x is continuous at t .
    We must prove that 7r tl. .. tk is measurable with respect to the o-field -9
of Borel sets for the Skorohod topology . We need consider only a single time
point t (since a mapping into Rk is measurable if each component mapping is),
and we may assume t < 1 (since Tr i is continuous) . If x,n converges to x
in the Skorohod topology, then xn(s) --)- x(s) for continuity points s of x and
hence for points s outside a set of Lebesgue measure 0 . Since the x n are
uniformly bounded,
                  1 rt+Exn(s)          rt+Ex(s)
(14 .58)                           ds -~ 1         ds      (n --) oo)
                     E t                 E t
for each positive E. Thus h6 (x) = 8 -1 f t+E x(s) ds is continuous in the Skorohod
topology. By right-continuity, h .(x) - 7r t(x) for each x as s -->- 0. Thus
7r t (x) is measurable.
     Having proved lr tl. . .tk measurable, we may, as in C, define the finite-
dimensional sets as sets of the form ic1 .tk H with k > 1 and H E .k . Each
finite-dimensional set lies in -9 by the definition of measurability .
     If To is a subset of [0, 1], let To be the class of sets Trii .tkH, where k is
arbitrary, the to are arbitrary points of To , and H E q k . Then 3~To is a
(finitely additive) field . Of course, ~F[01] is the class of finite-dimensional
sets .
THEOREM 14 .5 If To contains 1 and is dense in [0, 1], then ~FT0 generates
-9.
  These conditions are also necessary in order that 9TO generate -9,
although we shall not need this fact . Taking To = [0, 1] makes the theorem
no easier to prove .
Proof Since D is separable, it suffices to show that each open do-sphere
Sdo (x, r) lies in the o-field generated by 97T.. Fix the center x and radius r.
  Choose in To a sequence t1 , t2 , . . . that is dense in [0, 11, with ti = 1 . For
0 < E < r and k > 1, let Ak(e) consist of those y for which there exists in A
a A satisfying
                                    11211<r-E
1 22   The Space D

and
                                max I y(t) - x(2ti)I < r - s.
                                1<iGk

It is enough to prove that
                                                    00
(14.59)                              Sda (x, r) = U f Ak(s),
                                                      e k=1

where the union extends over the rational s in (0, r) and to prove that each
Ak (s) lies in ~FT o .
   We prove the second fact first . For fixed s and k, let H1 be the set of
points (x(Atl), . . . , x(Atk )) in Rk, where A ranges over those functions in A
satisfying II A < r - s . Let H2 be the set of points (a 1 , . . . , oc k) in Rk such
               II

that loc i   ,8i
               I    <  r - s, i = 1, . . . , k, for some (fi r, . . . , Nk) in H1 . Then H2
is open and hence lies in ~k, and Ak (s) = '7rtJ...tk"2. Thus Ak (s) E ~FTa .
   It is easy to see that the left . member of (14.59) is. contained in the right
member. We complete the proof by showing that
                                    00
(14.60)                              l Ak(s) '- Sdo(x, r) .
                                         f

                                        k=1
If y lies in the intersection on the left, choose for each k a A k in A with
(14.61)                                       IIAkII < r - s
and

(14.62)                          max I y(ti) -X(401 < r - s .
                                 1<i<k
By Helly's selection theorem (p . 227), there is a subsequence {A k•} and a
nondecreasing function 2 such that

(14.63)                                       limk, A k ,t = At
holds for continuity points t of A. We shall show that A E A, that All <           II

r - s, and that sup s Iy(t) - x(At)l < r - s. This will imply do (x, y) < r and
prove (14 .60) .
  If s and t are distinct continuity points of A, then, by (14 .61),

                              At - As                     k ,t - A k ,S
(14.64)                 log              = limk , log A                   <r-s .
                               t-s                            t-s
This relation makes a jump in 2 impossible (in particular, (14 .63) holds for
all t) and it implies that A is strictly increasing ; thus A E A . The inequality
(14.64) also implies IIAII < r - s. By (14.62), Iy(tl) - x(t l )I < r - s (recall
that t l = 1) . If i > 1, then, by (14 .62), I y(ti) - x(A k 'ti)I < r - s for k' > i.
Since 2k .t -+ At, we have either I y(t i ) - x(At i ) I < r - e or I y(t i ) - x((2 ti)-)I
r - s and, since {t i } is dense, sup s I y(t) - x(At)I < r - s follows. This
proves Theorem 14 .5.
                                                    Weak Convergence and Tightness in D 123

  Since 3~7To is always a field, this theorem implies that, if T o contains 1
and is dense in [0, 1], then 3~'To is a determining class . Not even ~F co ll is a
convergence-determining class-the counterexamples for C apply equally well
here.
  If P is a probability measure on (D, -9), its finite-dimensional distributions
are the measures P-rrtll. .tk . If To contains 1 and is dense in [0, 1], then P is
completely determined by its finite-dimensional distributions for time
points in To .
   We shall use in D the same conventions about coordinate variables we
used in C-the conventions set out at the end of Section 8 .
Remarks . The topology studied here is the Jl topology of Skorohod (1956) ; see also
Kolmogorov (1956), Prohorov (1956), and Skorohod (1961) .

PROBLEMS
   1. Let D+ be the class of functions on [0, 1 ] that have only discontinuities of the first kind
in (0, 1) and have right-hand limits at 0 and left-hand limits at 1 . Convert D+ into a pseudo-
metric space in such a way that (i) x and y are at distance 0 if and only if they agree at their
common continuity points and (ii) D is isometric with the standard quotient space [Kelley
(1955, p . 123)] .
   2. The Skorohod topology is finer than that given by the metric f Ix(t) - y(t)I dt.
   3 . Under the Skorohod topology and pointwise addition of functions, D is not a topo-
logical group.
   4 . The set C is nowhere dense in D.
   5. Put
                       w'x(6) = sup       sup min {wx(t l , t), wx(t, t2)} .
                               t2-tl <b tl <t <t2
Show that
                      wx (6) = sup        inf max {wx (t l, t), wx (t, t 2)}
                             t2-tl < b tl < t <t2
and
                                   w"(o) < ww'(6) < 2w"(3) .



15 .   WEAK CONVERGENCE AND TIGHTNESS IN D

Prove weak convergence in function space by proving weak convergence of
the finite-dimensional distributions and then proving tightness-this was the
technique so useful in C, and we want to adapt it to D. Since D is separable
and complete under the metric d o , a family of probability measures on (D, -9)
is relatively compact if and only if it is tight, so there is no difficulty on that
point . On the other hand, the fact that the natural projections are not
continuous complicates matters somewhat .

 Finite- Dimensional Distributions
 For a probability measure P on (D, -9), let Tp consist of those t in [0, 1] for
 which the projection Tr t is continuous except at points forming a set of
124 The Space D

P-measure 0 . The points 0 and 1 always lie in Tp. If 0 < t < 1, then t c- Tp
if and only if P(J) = 0, where
(15.1)                           Jt = {x :x(t) 0 x(t-)}
is the set of x that are discontinuous at t-recall (p . 121) that, for
0 < t < 1, in is continuous at x if and only if x is continuous at t.
    An element of D has at most countably many jumps . Let us prove the
corresponding fact that P(Jt) > 0 is possible for at most countably many t .
Let Jt (8) be the set of x having at t a jump fx(t) - x(t-)f exceeding s . For
fixed positive s and 6 there can be at most finitely many points t for which
P(Jt (s)) > 6, since if this inequality held for a sequence of distinct points
t1 , t2i . . . , then the set lim sup,,, J tn (s) would have measure at least 6 and
hence would be nonempty, contradicting the fact that for each x the saltus
can exceed s at only finitely many places . For a fixed positive s, therefore,
P(Jt(s)) can exceed 0 for at most countably many t. Since P(Jt (s)) T P(J,) as
s 1 0, the . result follows .
    Thus : Tp contains 0 and 1 and its complement in [0, 1] is at most countable .
If t1 , . . . , tk all lie in Tp, then Tr t1 . ..tk is continuous except on a set of
P-measure 0.
    Suppose
(15 .2)                                       P n => P,
where Pn and P are probability measures on (D, -9) ; by Theorem 5 .1,
(15.3)                              Pn7Tt11.tk       P~tll"tk
holds if all the ti lie in Tp. In general, (15 .3) will not follow from (15 .2) if
some ti lies outside Tp : If P is a unit mass at the function I [o,J) and Pn a
unit mass at I1o,l+n 1) , then Pn = P holds while Pn7T1 = P7rJ 1 fails.
   Let us now prove the analogue of Theorem 8 .1 .
THEOREM 15 .1 If {Pn } is tight and if Pnrr-1 ,tk =- P'r-1,tk holds whenever
t1 i , tk all lie in Tp, then P n = P.
Proof. By tightness, each subsequence {P,,,-} contains a further subsequence
.} converging weakly to some limit Q. It is enough (Theorem 2 .3) to
{P,,
show that Q always coincides with P.
  If t1, . . . , tk all lie in Tp n TQ , we have P11--7T-1 .tk ~ PiT . .tk by the
hypothesis and Pn .rrtl1,.tk => Qirt11..tk because P,,. => Q . Thus
(15 .4)        PTrtl . .. tk = QTrt 11• tk'       t 1 , . . . , t k E Tp n TQ .

Since Tp and TQ each contain all but countably many points of [0, 11, the
same is true of Tp n TQ ; in particular, this intersection is dense . Since
Tp n TQ contains 1, it follows by Theorem 14 .5 that -9 is generated by the
                                           Weak Ccnvergence and Tightness in D   1 25

finite-dimensional sets based on time points in Tp (1 TQ . Thus P = Q
follows from (15 .4), which completes the proof .

Tightness
The analysis of tightness in C began with a result (Theorem 8 .2) which
substituted for compactness its Arzela-Ascoli characterization . Theorem
14.3, which characterizes compactness in D, leads in exactly the same way to
the following result . Let {P,,,} be a sequence of probability measures on
(D, -9) .
THEOREM 15 .2       The sequence {Pn} is tight if and only if these two conditions
hold :
   (i) For each positive ?1, there exists an a such that
(15 .5)             Pn{x :supt jx(t)I > a} < 71,         n > 1.
   (ii) For each positive s and q, there exist a 6, 0 < 6 < 1, and an integer n o
such that
(15 .6)               Pn {x : wx(8) > E} < 77,        n > no .

  Using Theorem 14 .4 in place of Theorem 14 .3 gives a second set of
conditions for tightness .
THEOREM 15 .3        The sequence {P,,,} is tight if and only if these two
conditions hold:
   (i) For each positive 77, there exists an a such that
                    P,z {x :sup t Jx(t)I > a} < 27,      n > 1.
   (ii) For each positive e and 71, there exist a 6, 0 < 6 < 1, and an integer
no such that
(15 .7)               Pn{x :wx(6) > E} < 77,          n > no ,
such tha t
(15.8)                Pn{x :wx [0, 6) > e} < 77,         n > no,
and such that
(15 .9)           Pn{x : wx [1 - 6, 1) > e} < 77,         n > no.

  In the most interesting cases, (15 .8) and (15.9) are automatically satisfied,
as the next theorem shows . Let P,, and P be probability measures on (D,
by the definition (15.1), Jl = {x :x(1) 34 x(1-)} .
126 The Space D



THEOREM 15 .4 Suppose that
(15 .10)                       PnTftll. .tk   P ~tl . . . tk
holds whenever t 1 , . . . , tk all lie in Tp. Suppose further that P(J 1) = 0.
Suppose finally that, for each positive E and q, there exist a 6, 0 < 6 < 1,
and an integer n o such that

(15 .11)               Pn{x :wx(6) > E} < 77,                  n > no .

Then Pn = P .
Proof.  It will suffice, by Theorem 15 .1, to show that {Pn} is tight. We
first verify condition (i) of the preceding theorem . Given a positive 77,
choose 6 and no satisfying (15.11) with E = 1 (say) . Since Tp is dense, it
contains points t1 , . . . , tk, with 0 = t1 < . . . < tk =1, such that ti - t i_ 1 <
6 . From (15 .10) it follows that {Pn 7ttl,. tk } is a tight sequence in Rk and
hence that
(15.12)             Pn{x : max I x(ti) I > ao)                      n > 1,
                           1<i<k

for an appropriately chosen ao. If Ix(ti) I < a o , i = 1, . . . , k, and if wx(6) < l ,
then Ix(t)l < ao + 1 for all t. If a = ao + 1, then by (15 .12) and (15.11)
(with s = 1) we have Pn{x :sup s Ix(t)I > a} < 271 for n > n o. For the
finitely many n preceding no , we can ensure that this inequality holds by
increasing a, each individual Pn being tight. This establishes condition (i) .
   As for condition (ii) of the preceding theorem, we must find, given E and
71, a 6 and no satisfying (15 .8) and (15 .9) . Consider (15 .8). Since each x in

D is right-continuous, we have
(15.13)                    P{x : jx(6) - x(0)j > e} < 27

for all sufficiently small 6 . Choose in the dense set TP a 6 small enough that
(15 .13) holds and small enough that (15.11) holds for an appropriate no.
Since 0 and 6 both lie in TP , we have P,,-,T-1 =P7'     0,6 as a special case of
(15.10), and it follows by (15 .13) that

 (15 .14)                  Pn{x : Ix(S) - x(0)I > E} < "

for all sufficiently large n . If wx(6) < s and Ix(6) - x(0)I < e, then
Ix(s) - x(0)j < 2e for all s in [0, S], and hence wx [0, 8] < 4e . Thus (15 .11)
and (15 .14) together imply Pn{x :wx [0, 6) > 4E} < 271 . This takes care of
(15.8).
   With one change, the symmetric argument works for (15.9). In place of
(15.13), we need
 (15 .15)                P{x : (x(1) - x(1 - S)! > e} <
                                           Weak Convergence and Tightness in D   127


for small 8 . Since an element of D need not be left-continuous, (15 .15) will
not-in general hold ; since we have assumed P(J1) = 0, x is left-continuous at
t = 1 except for x in a set of P-measure 0, and (15 .15) does hold for all
sufficiently small 6 .
  This completes the proof of Theorem 15 .4. The condition P(J1) = 0 is
essential : If P is a unit mass at the function I {1} and P,z is a unit mass at
           then all the finite-dimensional distributions converge and the
condition involving (15 .11) holds, but P,, does not converge weakly to P.
   Since
                 lim P{x :Ix(1-) - x(t)I > E} = 0,        E > 0,
                 t-1

we have P(J1 ) = 0 if and only if
(15.16)          lim P{x :Ix(1) - x(t)I > e} = 0,         E > 0.
                 t-1

It is usually easy to check the condition P(J1 ) = 0 via (15 .16).
  Our next result shows what happens if in place of wx(a) or wx(6) we use
the modulus wx (b) appropriate to C .
THEOREM 15 .5 Suppose that, for each positive iq, there exists an a such
tha t
(15.17)                R. {x : Ix(0)I > a} < 77,     n > 1.
Suppose further that, for each positive E and 77, there exist a 6, 0 < 6 < 1,
and an integer no, such that
(15.18)                P. {X : wx (8) > e} < 77,    n > n o.
                                                                  , then
Then {P,,} is tight, and, if P is the weak limit of a subsequence {P,,,
                                                                  •}
P(C) = 1 .
Proof. Since w'(6) < wx (26) for 6 < 2 (see (14.9)), condition (ii) of Theorem
15 .2 is satisfied . That condition (i) of that theorem is satisfied follows easily
from the hypotheses here and the inequality
                                     k
                  Ix(t)I < Ix(0)1 + Y Ix(it/k) - x((i - 1)t/k)I .
                                    i=1

 Hence {P,,} is tight .
   If wy (2S) > 2e, then y is interior to {x : wx (S) > E} ; P,, ~ P therefore
 implies
 (15 .19)       P{y :wy(28) > 2e} < lim inf,, . P,,, .{x :wx(8) > e} .
 Given e and ?7, choose 6 and no so that (15 .18) holds ; it follows by (15 .19)
 that P{y :w y (26) > 2E} < 77 . For each k, therefore, there exists a positive 6k
128 The Space D

such that, if A k = {y : w,(8k ) > 1/k}, then P(Ak) < 1/k . Put A = lim infk Ak ;
then P(A) = 0, and x 0 A implies lima-0 w x(6) = 0, so that P(C) = 1,
which proves the theorem .
   In applications, the hypothesis (15 .18) is generally verified by using the
corollary to Theorem 8 .3, which carries over to D with no change. Note that,
if the no in (15 .18) is 1 for every e and 27, then P,,,(C) = 1 for all n .

Random Elements of D

A random element of D we shall often call a random function . It will always
be clear from the context whether a random function under consideration
is a random element of C or of D .
  If X is a mapping from (E2, -4, P) into D, then, for each w, X(co) is an
element of D whose value at t we denote by X(t, w). For each t, X(t) denotes
the real function 7r tX on u-its value at (o is X(t, w) . Just as in the space C,
X is a random element of D (X-1-9 (= I) if and only if, for each t, X(t)
is a random variable (use Theorem 14 .5) .
  A sequence {X,,} of random elements of D is by definition tight when the
sequence of corresponding distributions is tight . Each of Theorems 15 .1
through 15 .5 can be routinely reformulated in terms of random functions .

A Criterion for Convergence

Let us now combine the results of this section with those of Section 12 to
obtain concrete criteria for convergence in distribution .
   Let X,, and X be random elements of D. Write TX for Tp, where P is the
distribution of X. Thus TX contains 0 and 1, and, if 0 < t < 1, t E TX if
and only if P{X(t) 0 X(t-)} = 0. We shall write- w"(X, 8) in place of
wX(S) .
THEOREM 15 .6         Suppose that

(15.20)                                      . (X(tl), . . . , X(tk))
                   (Xn(t1) , . . . , Xn(tk)) -
holds whenever t 1 , . . . , tk all lie in TX ; that P{X(1) 0 X(1-)} = 0 ; and that

(15.21)   P{IX,,(t) - Xn.(t1)l > A, IXn.(t2) - Xn.(t)l >_ A} < 1 [F(t2) - F(tl )] 2,,

for t1 < t < t2 and n > 1, where y > 0, a > z , and F is a nondecreasing,
 continuous function on [0, 1] . Then X,, - X.
   There is a more restrictive version of (15 .21) involving moments, namely
                                                                               2".
           E{ I X n(t) - X„ (tl)I Y I Xn(t2) - X n(t)1 Y } < [F(t2) - F(t1)]
                                              Weak Convergence and Tightness in D        129

Proof. By Theorem 15 .4, it suffices to show that for each positive s and if
:here exists a positive S such that
(15.22)                     P{w"(XX, 6) > E } < rj
holds for all n. For fixed T, 6, and n, and for m a positive integer, consider
the random variables

                             8) -Xn(T+ i-1 8),
;15 .23)   ~ Z =X n (T+ i                                       i=1,2, . . .,m .
                         m            r\         m
Let
  M"
   M =                Xn (T + J 6) - Xn (T + l d)
                              m              m

                                              Xn (T         8) - X           Jn 8)
                                                                         +
                                                      + k            +               i

where the maximum extends over 0 < i < j < k < m . By (15.21) and
Theorem 12 .5,
                                     K
(15.24)             P{M'„ > E} < E          [F(T + 8) - F(T)] ,


where K = KY,« depends only on y and a.
  Put
(15.25) w"(Xn , [T, T + 6]) = sup min {I Xn (t) - Xn (t1)I, I Xn (t 2) - Xn (t))},
where the supremum extends over t1, t, t 2 satisfying T < t1 < t < t2 < T + 6.
Since Xn is a right-continuous function on [0, 1], letting m -- oo in (15 .24)
yields
(15 .26)     P{w"(X n , Fr' -r + 6]) > E}    < EK [F(T + 6) - F(r)] 2a
  Suppose now that 6 = 1/(2u) is the reciprocal of an even integer, and
suppose that
(15 .27)       w"(Xn, [2i6, (2i + 2)6]) < E,          0 < i < u - 1,

and
(15.28)     w"(X,,, [(2i + 1)6, (2i + 3)6]) < E,            0 < i < u - 2.

If t1 < t < t2 and t2 - t1 < 6, then t1 and t 2 both lie in some one of the
2u - 1 intervals involved in (15 .27) and (15 .28), so that
                 min {I XX( t) - Xn(t1)I, I Xn(t2) - X (t)I } < E .
Thus (15.27) and (15 .28) together imply w"(Xn, 6) < E . It now follows by
130 The Space D

(15.26) that
                                                      (i t +
(15.29)                  P{w"(X n) S) > e} < K
                                                  E

where each of E' and E" is a sum of the form
                                   r
                                  L, [F(tk) -   F(tk-1)]2"
                                 k=1
with 0 < tl < • • • <t,< 1 and tk - tk_1 < 26. But then
                                                                         2a-1
(15.30)         P{w"(X n, 6) > E}             [F( 1) - F(0)][w F(26)]
                                       < EK
Since 2a > 1 and F is continuous, the right member of this inequality goes
to 0 with 6, which proves (15.22).

Criteria for Existencet
These ideas lead also to a condition for the existence in D of a random
element with specified finite-dimensional distributions . As in Theorem 12.4,
for each k-tuple t1 , . . . , tk of points of [0, 1], let /itI.. .tk be a probability
measure on (Rk, ak), and assume these measures satisfy the consistency
conditions of Kolmogorov's existence theorem .
THEOREM 15 .7             There exists in D a random element with finite-dimensional
distributions pt, .. .tk, provided these distributions are consistent ; provided

(15 .31) lutltt2{(F'1, fl, fi2) . l# - # 11 1 2, l#2 - # l          A Y [F(t2) - F(tl)]2"
                                                               A} < 2

for t 1 < t < t2, where y > 0, a > 1, and F is a nondecreasing, continuous
function on [0, 1] ; and provided

(15 .32)           µt,t+h{(N1, N2) : 1#1 - #2I > E} = 0,          0 < t < 1.
             lio
  There is a more restrictive version of condition (15.31)

                   - NY l#2 - /9lY ddtl tt2(fl1, N , N2) < [F(t2) - F(tl)]2a.
          JR3l'
Proof. It is easy to construct for each n a random function Xn which is
constant over each interval [(i - 1)2- n, i2- n) and for which the joint
distribution of
                     (x(o)
                       n , X n (~n) 1 . . . , X n (2n2n 1) , X n( 1 ))

t This topic may be omitted .
                                              Weak Convergence and Tightness in D       131

is ,ut0...tk with k = 2n and t i = i2-n . We shall prove that {Xn } is tight . We
first show that, for given e and q, there exists a 6 such that
(15 .33)                       P{w"(XX , 6) > e} < 77

holds for sufficiently large n.
  If t1, t, and t 2 are integral multiples of 2-n and t1 < t <-t2, then, by
(15.31),

    P{IXn(t) - Xn(t1)l >- 2, IXn(t2) - Xn(t)I >- 2} <_
                                                              4   [F(t2) - F(t1)] Ia.

Consider again the variables (15 .23) . If the points T + jolm, j = 0, 1, . . . , m,
are all integral multiples of 2- n, then (15.24) follows as before . If T and 0 are
integral multiples of 2- n, then the same is true of the points T + jOlm,
provided m = 62n . But, since Xn is constant over each interval
[(i - 1)2- n, i2-n), M" for m = 62' is just the quantity defined by (15 .25) .
Thus (15 .26) holds if T and 6 are both integral multiples of 2 -n.
   Suppose now that 6 = 1/2v for an integer v > 1 . If n > v, then 6 is an inte-
gral multiple of 2- n and so are the endpoints of all the intervals involved in
(15.27) and (15 .28) . It follows as before that (15 .30) holds for n > v. Thus
there does exist a 6 such that (15.33) holds for all large n .
   The Xn will be tight if their distributions P n satisfy the hypotheses of
Theorem 15 .3 . Now (15.7) is satisfied because of (15 .33). If 2-k < 6, then

                   sup I X n(t) I < m ax X,,      (2
                                                   k)
                                                        + w'(Xn, 6)

Since the distributions of the first term on the right all coincide for n > k, it
follows by (15 .33) that condition (i) of Theorem 15 .3 is satisfied .
  To take care of (15.8) and (15 .9) we make the temporary assumption that,
for some positive 6 0 , h < 60 implies
(15 .34)   Yo,h{(N1,
                       :P1
                       #2)
                             = ~ 2} = 1 ,                    N2) . f1 = 8 2} = 1 .

With this assumption, (15 .8) and (15 .9) certainly hold, so that {X,,,} is
tight. If X is the limit in distribution of some subsequence, then (X(t1), . . . ,
X(t k)) has distribution ,z,1 .. .t, for dyadic rational t i , and the general case
follows via (15.32) by approximation from above .
   It remains to remove the restriction (15 .34) . Take 60 < 2, put
                                            for    0<t<60,

                  At) =                     for    60 <t<1-6 0i

                                            for    1-6 0 <t<1,
132 The Space D

and define v tl. ..tk as ,u sl...Ilk with si = f(t) . Then the vtl.. .tk satisfy the
conditions of the theorem (with a new F), as well as the special condition
(15 .34), so that there is a random element Y of D with these finite-
dimensional distributions . We now need only define X by X(t) -
Y(60 + t(1 - 260)), 0 < t < 1 .
   As an illustration of Theorem 15 .7, let us use it to prove the existence in D
 of a random element describing a Markov chain in continuous time . Let
pij(t), i, j = 1, 2, . . . be nonnegative numbers defined for t > 0 and satisfying
Ejpij(t) = 1 and EjPij(s)Pjk(t) = pik(s + t) . Let pi , i = 1, 2, . . . , be non-
negative numbers satisfying Eipi = 1 . Define pj (0) = pj and pj(t) _
Eipipij (t) for t > 0 .
   Under the regularity assumption that
(15 .35)                             lim pii(t) = 1
                                     t-o
holds uniformly in i, we shall prove the existence in D of a random element
X with finite-dimensional distributions specified by
                                                              m
(15.36)    P{X(tu) = i u , u = 0, 1, . . . , m} = Pi o (to)   II
                                                              u=1
                                                                  Pi„_li„ (t u - t .u-1)

for 0 < to < t1 < . . . < t„, < 1 . The consistency of the finite-dimensional
distributions implied by (15 .36) is easy to establish .
  We first prove the existence of a positive K such that
(15 .37)                         0 < 1 - pii (t) < Kt
for all i and all positive t. Because of the uniformity in (15 .35), whatever E,
there is a 6 such that pii(s) > 1 - e for all i if s < 26 . If t < 6, then
6 < mt < 26 for some positive integer m, and we have
                                    m-2
      1 - e < Pii(mt) < [Pii(t)) m +'I [Pii( t)] ' pij(t)pji((m
                                     1=0          j#i
                          m-2
            < [Pii(t)]m + I [Pii(t)l'I Pij(t)e
                           1=0      j*i
                                                  .
              < [Pii(t)] m + E{ 1 - [ Pii(t)]m}
Take e = s ; it follows (since log u < u - 1) that m(1 - pii (t)) < log 2 < 1 .
Take K = 6-1 . Since mt > 6, it follows that (15 .37) holds for t < 6 . But the
inequality is trivial for t > 6.
  If (15 .36) holds, then
(15.38)     P{X(t) i X(t1), X(t2) : X(t)} = YPi(t1)pij( 61)pjk(82),
where 6 1 = t - tl and 6 2 = t 2 - t and where the summation extends over
                                              Weak Convergence and Tightness in D 133

  i and over those j and k for which i 0 j and j 0 k . By (15.37), the sum in
5 .38) is at most K2 6162 < K2 (61 + 62)2. Thus the finite-dimensional
stributions implied by (15.36) satisfy (15 .31) with y = 0, oc = 1, and
t) = Kt . Since (15 .36) and (15 .37) also imply P{X(t + h) 0 X(t)} < Kh,
5.32) is also satisfied. Thus some random element X of D satisfies (15 .36) .
ince the possible values of X(t) are at mutual distance at least 1 on the line,
is, with probability 1, a step function constant over intervals .)

ther Criteria]'
ae function Fin Theorem 15 .6 was assumed nondecreasing and continuous .
'e can replace the assumption of continuity by that of continuity from the
o,ht, provided we strengthen (15.21) to

5 .39) P{IX,i( t) - X n (t1)i > 2, I Xn(t2) - Xn(t)I > 2}

                                              A y [F(t) - F(t1)]a[F(t2)-- F(t)] a-
                                             <2

ideed, (15.39) and Theorem 12 .6 yield, in place of (15 .24), the stronger
equality
                           K
.5.40) P{M'm > E} <              [F(T ~- 6) - F(T)] 2a
                           E
                                                                                    a
                                                                       i
                                             F(T+m6) -F(T-                 m l b)
                               x min     1
                                 1<i<m                   F(T +6) - F(T)

,et J(r, T + 6] denote the maximum jump of F in the interval (T, T + 6] ;
15 .40) implies
                                                            J(T ' T + 6]        a
15 .41) P{M" > E} <         K82y [F(T + 6) - F(T)1 21 C1 -
                           E2y                           F(T     + 6) - F(T)]
The right member of this inequality is to be interpreted as 0 if F(T) _
'(T
      + 6) .)
 Exactly as before, we obtain (15 .29), where now each of E' and E" is a
um of the form
                                               -         (tk-13J
15 .42)
                  1
                  k
                      [F(tk) - F(tk_1)]2a[1
                                                   F
pith 0 < t1 < . . . < t,. < 1 and tk _t, 1 < 26. To prove (15.22) it therefore
uffices to show that, for small enough 6, all sums (15.42) are less than
     q82 7/2K. Write O k for F(tk) - F(tk_1) and Jk for J(tk_l, tk]. Since a >
10 =                                                                           2

 This topic may be omitted.
134   The Space D

and the Ok add to at most F(1) - F(O),

            I Ok"(Ok - Jk) " < [F(1)           - F(0)] "+imax k .(O k - Jk)"- k
             k
But the left member of this inequality is the sum (15.42), and hence it is
enough to show that, for small enough 6, 0 < t - s < 26 implies
                                                                      c"-2)
(15 .43)         F(t)- F(s) - J(s, t] < 711 =                    ~o
                                                                              )/c"- )
                                             [F(1) - F(0)]c"+
   Since F is an element of D, there exist (see (14 .8)) points s i , with 0 =
so < sl < . . . < s a = 1, such that w F [si_1, s2) < 12 % . Take 26 smaller than
the minimum. of the si - si _1. If t - s < 26, then either s and t lie in a
common interval [si_ 1, si), in which case the left member of (15 .43) is less
than 2771, or else they lie in adjacent intervals [si _ 1 , s i) and [si , si+1), in which
case it is at most F(t) - F(s) + F(s i -) - F(s) < i1 .
   Thus (15 .39) for a right-continuous F implies (15 .22) . The rest of the
proof goes through as before, and we can conclude that X, --9-* X. In the same
way, we can in Theorem 15 .7 take F to be continuous from the right if we
replace (15 .31) by
(15.44) ht l tt 2 {(N1, j3, N2) . ~~ - #1I         1#2 - ,81 > A}

                                                   <         [F(t) - F(t1)]"[F(t2) - F(t)]".
                                                       A2Y

Separable Stochastic Processes'

According to Theorem 9 .2, if the finite-dimensional distributions of a
separable stochastic process can be realized as the finite-dimensional
distributions of a probability measure on (C, '), then the sample paths of
the process are continuous with probability 1 . We shall prove a similar
result for the space D.
   Let {$t
       : 0 < t < 1 } be a stochastic process and let P be a probability
measure on (D, -9) . Assume that the process and the measure have the same
finite-dimensional distributions . Assume further that the process is separable,
so that (9 .16) holds for every a and 8 and every open interval I . It is no
restriction to assume 0 E To, in which case (9 .16) holds also if I has the
form [0, s) .
   We now construct sets serving the same function as the sets (9 .20) did in
the arguments in Section 9 . This time let V denote the general system
(15.45)               V: k ; rl , . . . , rk ; sl, . . . , Sk, al, . . . , OCk,

t This topic may be omitted .
                                                 Weak Convergence and Tightness in D 135

were k is an arbitrary integer, where the r i , si , and OCi are rational, and
serer
              0=r1<sl<r2<s2< . . . <rk<sk=1 .
efine

                         = n {(o : ai < ~ t (w) < ai + £, t E (ri , s i) n To}
                            k
5 .46)    S2 To (V, E)
                           i=1


n n {w : min {OC2_1, oc i } ~ ~ t (w) < max {ai_1, ai} + E, t E (si_1, ri) n To) ;
    k

   i=2
 the first intersection, we replace (r 1 , s 1 ) by [r1 , s1) ( for i = 1) . Let ,k,5
;note the class of systems (15.45) that have a fixed value of k and satisfy
 - s i_ 1 < 6, i = 2, . . . , k. And now define
5 .47)                      QT0   =nun u Q To(V, E),
                                     e k S VEf'kS

here E and 6 are restricted to positive rationals . Finally, define Q T (V, E)
id Q T by substituting T = [0, 1] for To in (15.46) and (15 .47).
  It is not hard to show that, if w E QT, then the sample path corresponding
   (0 is right-continuous at t = 0, has a left-hand limit at t = 1, and is
)ntinuous in (0, 1) except possibly for discontinuities of the first kind . And
 the sample path has this property, then w E QT, as follows by Lemma 1 of
-.ction 14 (applied to the sample path normalized to be right-continuous) .
  We shall prove that S2 T E R and PP T) = 1 . The relations (9 .22) and
 T o E a follow by the same arguments as in Section 9 ; hence I2 T E g and
(U T) = P(S2 T0 ), and it suffices to prove

 5 .48)                                   P(QT 0) = 1 .

 With (t 1 , t2 i . . .) an enumeration of the points in T o , define 92 : 0 -+ R`°
ad yp : D - R°° by g9 (w) _ (~ tl (c )), ~ tz(co), . . . ) and ip (x) = (x(t 1), x(t2), . . . ).
ist as before, (9 .25) holds for every H in R°°, where now P denotes the
ieasure on D (not C) having the finite-dimensional distributions of {fit} .
 For the system (15 .45) and E > 0, let HTO (V, E) consist of those points
_ (z1 , z 2, . . .) in R °° such that, first, for each i = 1, . . . , k, the inequality
                                    OCi<zu <ai+£

olds for every u for which t o E (r i , si) (or t o E [r1, s l ) in the case i = 1) and,
1,cond, for each i = 2, . . . k, the inequality
                    min {OCi_1, cCi} < zu < max {ati_1 , ai} + £
olds for every u for which t o E (s i_ 1 , ri) . Now define

                            HT,   = n u n u HTO(V,
                                      8    k 6   VE'V
                                                                E) .
136    The Space D

Then H TO (V, e) and HT,, lie in M', cp 1 H To (V, E) = Q Ta (V, e), and
q1 H T0 = S2 To . By (9 .25) we have P(Q T0) = P(yr 1 H Ta), and, since
  'HT,, = D, (15 .48) follows .
  We have proved this result

THEOREM 15 .8 If {fit : 0 < t < 1 } is a separable stochastic process, and if
there exists on (D, -9) a probability measure having the same finite-dimensional
distributions as {fit}, then the sample paths, with probability 1, are right-
continuous at t = 0, have left-hand limits at t = 1, and are continuous on
(0, 1) except possibly for discontinuities of the first kind .

  An example shows that it is not possible to go on and prove that the paths
are right-continuous and hence lie in D (with probability 1) : Define
                                            0      if   0<t<co
                                             I     if w<t<1,

where co is drawn uniformly from ) = (0, 1) . This points up the fact that in
taking the elements of D to be right-continuous we were simply adopting a
convention.


PROBLEMS

  1 . Show that Theorem 15 .4 remains true if we only require that (15 .10) hold for all
                         To is dense in [0, 1 ] and contains 0 and 1 . Show that it fails if
t 1 , . . . , t k in To , where
00 To or if10TO .
  2. The condition (15 .32) in Theorem 15 .7 is necessary .
  3. If a random element X of D has the property that


                            lim      sup    1 P{ I X(t + 6) - X(t)j > e} = 0
                            o->o o -s t51-6 6

for every positive e, then P{X E C} = 1 .
  4 . Use Theorem 15 .7 and Problem 3 to show that distributions It tl . . . tk can be realized
as the finite-dimensional distributions of a random element of C if (15 .31) holds (where
y > 0, a > ~, and F is nondecreasing and continuous) and if


                         lim      sup     jut,t+a{(w N2) : ~#2 - f1l >- e} = 0
                         3--0 0st<1-6 6

for every positive e . There is the analogous result with (15 .44) in place of (15 .31) . Use
Theorem 9 .2 to derive conditions for the continuity of sample paths for a separable process .
(Compare Problem 8 in Section 12 .)
  5 . Use Theorem 15 .7 to construct a Poisson process in D . Now make a direct construc-
tion, starting with independent, exponentially distributed random variables .
                                                                        Applications   1 37


16 .' APPLICATIONS

Donsker's Theorem

In some ways, the space D is more convenient than C for the formulation
of Donsker's theorem . Given random variables ~1 , ~2, . . . on (SZ, -4, P),
with partial sums S,n = 1 + + ,, let Xn (w) be the function in D with
value

(16 .1)                       X n(t, (10) =        1_   S[nt](co)
                                              6v n


at t. Since each Xn (t) is a random variable, X,, is a random function-a
random element of D.
  We want to prove, under suitable conditions, that the distribution of Xn
converges weakly to Wiener measure W. Now W is defined on (C, le),
but it is easily extended to (D, -9) : Since C E -9, and since the relative
Skorohod topology in C coincides with the uniform topology there, A E -9
implies A n C E ' . We may therefore extend W to (D, -9) by giving it the
value W(A n C) for A in -9. Of course, C supports W. From now on we
shall interpret W as this probability measure on (D, -9) or as a random
element of D with this probability measure as its distribution .
THEOREM 16 .1 Suppose the random variables ~n are independent and
identically distributed with mean 0 and finite, positive variance U 2 :

(16 .2)                   E{ n} = 0,                E{ n} = Q 2 .
Then the random functions Xn defined by (16 .1) satisfy
                                              -9
(16.3)                                 Xn          * W.

Proof. The proof in Section 10 that the finite-dimensional distributions
converge carries over with no difficulty . Thus we need only prove tightness .
  There are several ways to prove tightness . One way is to verify the
hypotheses of Theorem 15 .5 . Now condition (ii) of Theorem 8.3, formulated
for random elements of D, requires that, for positive s and ri, there exist a
6, 0 < 6 < 1, and an integer n o such that, for 0 < t < 1,


             i P    sup       J Xe(s) - X.(t) 11 s} G 77,           n> n o
             S     t<_s<t+a


(we replace t + a by 1 if it exceeds 1) . Furthermore, this condition reduces,
by the arguments used in the proof of Theorem 8 .4, to the following one
138   The Space D

For each positive s there exist a 2 > 1 and an integer n o such that

                        P{max ISZ I > 2crJn} <              ,       n > no .
                            z<n                         2
  It suffices therefore to verify this last condition, which can be done by
using the central limit theorem as in Section 10 (see (10.7)) or by using the
bounds in Section 12 (see (12.23)). Thus the methods of the preceding
chapter carry over without essential change .
   Given the results in Section 15, we can construct a very simple proof . By
Theorem 15 .6, it is enough to establish the inequality
(16 .4)   E{IXn (t) - Xn (tl)I 2 . IXn( t2) - Xn(t)I 2 }
                                                                4 ( t 2 - t1)2,      t1 < t < t 2 .

By (16.1), (16 .2), and the independence of the ~n, the left side of (16 .4) is

           1                             2                   2
(16.5)            E{IS [nt l - S[nt l ] 1 }E{IS[nt2] - S[nt]1 }
          64 n2
                                                                                          _[n t1]
                               = 2 ([nt] - [ntr])([nt2] - [nt]) <                 [nt2]             2.
                                 n                                                        n

If t 2 - t 1 > 1/n, (16 .4) follows from this . If t2 - t1 <11n, then either t 1
and t lie in the same subinterval [(i - 1)/n, i/n) or else t and t 2 do ; in either
of these cases the left side of (16 .4) vanishes . This establishes (16.4) in
general and proves the theorem.
  Since the value of sup s Xn (t) is the same for the random element of D
defined by (16 .1) as for the random element of C defined by (10.1), namely
max i < n Si /a/n, we can obviously use Theorem 16 .1 to rederive (10 .18).
(We must prove . that the mapping h : D --~ R1 defined by h(x) = sup s x(t) is
continuous, but this presents no problem .) We may rederive the results in
Section 11 in the same way .
   Some functions of the partial sums S i have a simple expression in terms of
the Xn in Theorem 16 .1 but have no simple expression in terms of the Xn in
Theorem 10 .1 . Such functions are better analyzed in D than in C . For
example, for x e D, let h(x) be the Lebesgue measure of the set of t for which
x(t) > 0. Then (p. 232) h is measurable (h -1 ,41 ~= .9) and is continuous
except on a set of Wiener measure 0 . If Xn is defined by (16 .1), then h(Xn) is
exactly n -1 times the number of positive sums among S 1 , . . . , S,,-,, whereas
this is generally untrue if Xn is defined instead by (10.1). Combining Theorem
5.1, Theorem 16 .1, and (11 .26) leads to the arc sine law under the assump-
tions of the Lindeberg-Levy theorem .]'

t See the problems for some further applications .
                                                                 Applications   1 39


ominated Measures

he random variables in Theorem 16 .1 are defined on a probability space
L, M, P) . We shall show that the result remains true if P is replaced by an
b itrary probability measure P 0 on (S2, I) dominated by (absolutely
)ntinuous with respect to) P . For example, suppose that S2 = [0, 1], that
l consists of the linear Borel subsets of [0, 1], and that ~n(w) = 2w n - 1,
here con is the nth digit in the binary expansion of w. Then Theorem 16 .1
)plies to { ~n} if w is drawn from [0, 1 ] according to the uniform distribu-
on . According to the theorem we are going to prove, this is true also if w
 drawn from [0, 1 ] according to an arbitrary distribution having a density
ith respect to Lebesgue measure .
 We shall need the following preliminary result (in which a(R 0) denotes
to a-field generated by g 0).

HEOREM 16 .2 Let El, E2 , . . . be measurable sets in a probability space
2, c/U, P). Suppose there exist a constant a and a subfield -40 of a such that

.6.6)                        P (En n E) --* a P (E)

or every E in -40. Suppose further that all the En lie in a( .Q0) . If P dominates
o , a second probability measure on      then
[6.7)                            P0(En) -- a.
roof.    From the hypotheses it follows just as in the proof of Theorem 4 .5
iat

16.8)                         fgdP->afgdP
                               E.
)r every integrable g . But (16 .8) and (16 .7) are the same thing if g is the
radon-Nikodym derivative of P 0 with respect to P .
'HEOREM 16 .3       Theorem 16.1 remains valid if P is replaced by an
rbitrary probability measure P0 dominated by it .
'roof.   Define XX by

16 .9)                  Xn(t, w) =      1               ~ilw),
                                      a•J n P .<i<nt

here {pn} is a sequence of integers going to infinity slowly enough that
n/Vn --)- 0 (XX(t, w) = 0 if t < pn/n). If

                          an = SUPt I Xn(t) - Xn(t)I ,
hen
                                        1    Pn

                               Sn <          I I~iI •
                                      or J n i=i
140   The Space D


By Minkowski's inequality and the fact that p,z/ Jn          ,

                        Ef{6 } <      1_'E'{~i}-*0,
                                   ci Jn i=1
so that, by Chebyshev's inequality,
(16 .10)                            6n -P->. 0,

where (16 .10) is interpreted in the sense of P (that is, P governs the distribu-
tion of the ~ n) . By Theorem 16 .1,
(16.11)                             Xn       W,
where again the relation is interpreted in the sense of P . Since d(Xn , X,) < 6"
where d is the metric in D (either one), it follows by Theorem 4 .1 that
(16.12)                             X;. ~ W
in the sense of P .
  Let A be a W-continuity set (in D), temporarily fixed ; (16 .12) implies

(16 .13)                      P{Xn E A} - W(A) .

Let g o be the field of cylinders ; -4o consists of sets of the form
                          {co : (Ma)), . . . , $k(w)) E H}
with k > 1 and H E _qk . If E E -4o, then, since pn -+ cc, P({Xn E A} r) E) _
P{X,, E A}P(E) for large n and it follows by (16 .13) that
                         P({Xn E A} n E) -* W(A)P(E) .

Since the sets {Xn E A} all lie in the a-field generated by °mo o , it follows by _
Theorem 16 .2 with a = W(A) that

 (16 .14)                      Po{Xn E A} -~ W(A)

 if PO is absolutely continuous with respect to P .
     Since (16 .14) holds for every W-continuity set A, (16 .12) holds when
 interpreted in the sense of P o . Now (16 .10) asserts that P{O n > s} -- 0 for
 each positive 8 ; if P o is absolutely continuous with respect to P, then
 P o {8 n > e} -- 0 as well, and (16 .10) persists when interpreted in the sense of
 Po . Applying Theorem 4 .1 once more, we see that (16 .11) holds in the sense
 of P a, which completes the proof.
   Theorem 16 .3 concerns convergence in distribution . Notice that passing
 from P to a dominated measure P o trivially preserves such properties of {Sn}
 as the law of the iterated logarithm, which hold with probability 1 .
                                                                        Applications   141


Empirical Distribution Functions

Let ~1, ~2, . . . be random variables with
                                  0 < ~ n (w) < 1,

and let F,n (t, (o) be the proportion of the points e1(w), . . . , ~ ,Jco) not
exceeding t, so that Fn ( • , co) is the empirical distribution function . Let
 Yn (co) be the element of D with value

(16.15)                   YY (t, w)   = Vn(FF (t, w) - F(t))
at the point t E [0, 11, where F is the distribution function common to the
$n. Since each Yn (t) is a random variable, Yn is a random element of D.
In Section 13 we studied the related random element (13 .7) of C; here we
shall investigate Yn directly, and we shall remove the restriction that the ~n
be uniformly distributed . The stochastic process { Yn (t) : 0 < t < 1 } is
sometimes called the empirical process .
THEOREM 16 .4 Suppose the ~ n are independent and have a common
distribution function F(t) . If Yn is defined by (16 .15), then

(16 .16)                                Yn ±4. Y,

where Y is the Gaussian random element of D specified by

                     E{Y(t)} = 0
(16 .17)
                     E{Y(s)Y(t)} = F(s)(1 - F(t)),             s < t.

Proof. Just as Wiener measure does, the measure W ° extends from (C, le)
to (D, -9) . Denote by W° a random element of D with this extended measure
as its distribution . We first show, under the assumption that the ~n are
uniformly distributed over [0, 1], that Yn --9 W °.
   Let Un (t, w) be the number of points among ~1 (w), . . . , ~ n ((o) not
exceeding t. For 0              t o < t 1 < . . . < t k = 1, the random variables
 UU (t i) - Un (tti_1 ), i = 1, . . . , k, are multinomially distributed with param-
eters n and pi = ti - ti _ 1 , and it follows as in Section 13 by the central
limit theorem for multinomial trials that the finite-dimensional distributions
of the Yn converge weakly to those of W ° . By Theorem 15.6, it suffices to
prove that
           E{I YY(t) - Yn(tl)I 2 . i Yn (t 2 ) - Yn(t)I2} < 6(t - t1) (t2 - t)

for t1 < t<- t 2 . But this is just the inequality (13 .17) already established in
Section 13 . Hence Yn -9> W°.
142     The Space D

   Suppose now that the ~n have an arbitrary distribution function F over
 [0, 1]. Define an "inverse" to F by
                               p(s) = inf {t :s < F(t)} .
Then s < F(t) if and only if T (s) < t, so that, if 77 n is uniformly distributed
over [0, 1], then P{pp( 77 n ) < t} = F(t) . Since the theorem involves only the
joint distribution of the ~n, we may represent them as                       with the
17n independent and uniformly distributed .
   If G n ( - , w) is the empirical distribution function for n 1 (co), . . . , ~ n (w)
and Zn(t, (0) = Vn(G n (t, w) - t), then, by the case of the theorem already
established, Zn -- W ° . But the empirical distribution of ~ 1 (w), . . . , $ n (w) is
FF (t, w) = G n (F(t), w), so that, if Yn is defined by (16 .15), Yn (t, W) =
Z n(F(t), co) . Define p : D --+ D by (px)(t) = x(F(t)) . If x n converges to x
in the Skorohod topology and x c- C, then the convergence is uniform, so
that px n converges to Vx uniformly and hence in the Skorohod topology.
Hence Zn -'->- W' and Theorem 5 .1 imply Yn = p(Z n)                  -4
                                                                      y)(W°) ; since
 Y = V(W°) is Gaussian and satisfies (16 .17), the proof is complete .

  If we knew the distribution of
(16.18)                  suet Y(t) = sup s W° (F(t)),
we could find the limiting distribution of
(16.19)                    Vn suet (FF (t, w) - F(t)) .
Now (16 .18) has the same distribution as sup s Wt (namely that given by
(11 .40)) if F is continuous, but not otherwise . The same remarks apply to
(16.20)                  suet Y(t)I = sup s I W°(F(t))I .
                                 I


Remarks. The random function (16 .1) has independent increments and so has W; for
general results on weak convergence in this circumstance, see Kimme (1957 and 1960) and
Skorohod (1957) . For convergence of diffusions, see Stone (1963) . Theorem 16 .2 is due
to Renyi (1958) .
  Concerning Theorem 16 .4, see the remarks and references at the end of Section 13 . See
Schmid (1958) for the distributions of (16 .18) and (16 .20) for the general F.


PROBLEMS

  1 . Under the hypotheses of the Lindeberg-Levy theorem, there are limiting distributions
for
                 n
   (a)       3      I SkI
             n2 k=1

   (b)       2  In
             n k=1 Sk2
                          ,

  (c)        1 min Sk,          0 < P < 1.
             "fin fn<kSn
                                                               Random Change of Time 143

Construct the three relevant mappings from D to RI and prove they are measurable and
continuous on a set of W-measure 1 . For the forms of the limiting distributions, see
Donsker (1951) for (a) and (b) and Mark (1949) for (c) .
   2. Theorem 16.1 (makes sense and) is true if n goes to infinity in a continuous manner .
[See (2.4) .]
   3. For each n, let ~nl,         ~n ,, be independent random variables with P{$ nk = 1} = pn
and P{ink = 0} = 1 - pn , and define Yn by Yn (t) = E k < n t $nk • Assume npn - A and prove
         . Y, where Y is the appropriate Poisson process (with paths in D) .
that Y,, 4
   4 . Show   that Theorem 16 .4 still holds if the measure governing the $n is replaced by a
probability measure absolutely continuous with respect to it .
   5. Prove Theorem 16.4 by an application of Theorem 15.6 with (15.39) in place of
(15.21), thus avoiding the representation $n =
   6. Let P be Lebesgue measure on the unit interval SZ, and define ~n (w) = 2w," - 1,
where con is the nth digit in the dyadic expansion of w. Show that the requirement in
Theorem 16 .3 that P0 be dominated by P is essential : The result fails if Po is a point mass .
It also fails if P 0 is Cantor measure (as defined in Billingsley (1965, p . 36)) .
   7. Carry Problem 1 of Section 10 over to D. (See also Problem 1 of Section 12 .) Gener-
alize the results in Problem 1 of this section .


17 .   RANDOM CHANGE OF TIME

Sometimes one requires an approximate distribution for a partial sum
Sv = ~ 1 + • • • + ~,, where the index v is itself a random variable . Here we
shall prove several functional central limit theorems for such randomly
selected partial sums .

Randomly Selected Partial Sums

Suppose the partial sums Sn = ~ 1 +        + ~ n for a nonrandom index n
obey the central limit theorem, say with norming factors avn, so that
                                                    -9
(17.1)                                     1 _ Sn        >-N
                                       o\ J n

as n --i- co. If v is a random integer such that v is large with high probability,
there is some hope that Sv/alv will be approximately normally distributed .
   To formulate a limit theorem, consider a sequence {v n} of random
integers . We seek conditions under which
                                           1
(17.2)                                          S,, n - N
                                      or   v
as n -->- oc . It is not enough simply to assume that v„ goes to infinity in
probability, in the sense that
(17.3)                                P{v n < a} -+ 0
144 The Space D

for each a . For suppose the ~n are independent and take the values + 1 and
-l, with probability z for each, so that (17 .1) holds with a = 1 . If v,, is the
time of the nth zero crossing (the nth value of k for which Sk = 0), then
(17 .3) holds (because v,, > vn_1 + 1) but (17 .2) does not (because S,. = 0) .
  To derive (17 .2) we must assume more than (17 .3) . Our principal result
will be that (17 .2) holds if v nln converges in probability to a positive, finite
random variable, and if the ~,, are independent and identically distributed
with mean 0 and variance 62 . We shall derive this result from a functional
central limit theorem which gives much more information .
  Define a random element X,n of D by
                                           1-
                           X.(t, w) =         S[nt7(w),
                                          QJn
and define Y,, by

                                               n Sv[.t l ( w)(w)
                            YY(t, (0) =
                                          61

(certainly Yn is a random element of D). Since Yn (1) = Svn/QV n, we shall be
in a position to approximate the distribution of S, and derive results like
(17.2) if we show that Yn itself converges in distribution .
  The distribution of a random function such as Yn is most easily
investigated by using the fact that Yn results from subjecting Xn to a random
change of time scale . Let (D n (t, (o) = v [ntl (w)/n . Since
(17.4)                    YY (t, w) = XX (' n (t, w), w)
(we assume for the moment that v n < n, so that (D n (t, w) < 1), Yn is Xn
with the time scale subjected to a change represented by the random function
O n . To clarify the reasoning involved in this section, we first consider such
random time changes in a general context . We assume Xn and (D,, each
converge in distribution and look for conditions under which Y n , as defined
by (17.4), converges in distribution.

Random Change of Time

Let Do consist of those elements cv of D that are nondecreasing and satisfy
0 < T (t) <_ 1 for all t . Such a T represents a transformation of the time
interval [0, 1] . We topologize Do by relativizing the Skorohod topology of D.
Since Do E -9, as is easily shown, the or-field -9o of Borel sets in Do consists of
the subsets of Do that lie in -9 (see p . 224) .
   For x E D and 99 E Do, let x o cp denote the composition of x and 99-the
function on [0, 1 ] whose value at t is
(17.5)                        (x o qv)(t) = x(g7(t)).
                                                        Random Change of Time 145

Jow x o (P lies in D and, if p : D x Do -* D is defined by

17 .6)                          V(x, (P) = x ° 9',
hen, as is proved on p . 232, ' is measurable (V -1-9 r- -9 x -9(,).
 Let X be a random element of D and let (D be a random element of D o .
Ve assume X and (D have the same domain, so that (X, (D) is a random
lenient of D x D o with the product topology (see p . 225) . If X o 4) has
clue X (c)) o I (co) at co-that is, if X o (D = z, (X, (D)-then X o (D is a
andom element of D ; X ° (D results from subjecting X to the time change
epresented by (D .
  Suppose that, in addition to X and t, we have, for each n, random
lements Xn and (D,n of D and D o , respectively, where X,, and t,a have the
ame domain (which may vary with n) . We ask for conditions under which
X., (D ,,,) - (X, (D) (convergence in distribution relative to the product
opology) implies Xn o (D,, -?4 X o (D.
  Suppose that
17 .7)                         (Xn, (Dn) -9) (X, (D)
ind that
;17.8)                     P{X E C} = P{t E C} = 1 .

3y Corollary 1 to Theorem 5 .1,
:17 .9)                         Xn -(D 71 ~X-4)
will follow if we show that V (defined by (17 .6)) is continuous at (x, q,) for
c E C and 92 E C n Do. If x,n converges to x and T,, converges to q2 in the
3korohod topology, and if x and 99 lie in C, then the convergence in each
;ase is uniform . But
  sups 1x n (q) n (t)) - x(99(t))I
                              < sup t Ixn(t) - x(t)j + sup s Ix(9'n(t)) - x(q, ( t))I ;
since x is uniformly continuous, x n o q ,, converges to x o q' uniformly and
hence in the Skorohod topology, which proves (17 .9).
   There remains, of course, the question of when (Xn, I) converges in
distribution, and here Theorems 4 .4 and 4.5 can be used .

Applications
We return now to a consideration of sums Sn = 1 + . . . + $n. For each
n, let v n be a positive-integer-valued random variable defined on the same
probability space as the $n. Define Xn by

(17.10)                      Xn(t, (o) =    1 - S[nt](co)
                                           UJn
146   The Space D

and Y,, by
(17.11)          YY(t, c))      _/ 1     S[Vn(W)t]((v) = Xvn(W) t, w) .
                               6v vn(cv)
THEOREM 17 .1         If

(17.12)                                         >
                                            an-
                                             n    8,
where 0 is a positive constant and the a n are constants going to infinity, then

(17.13)                                 Xn -4 W
implies
(17.14)                                 Yn -4 W.
Proof.     There is no loss of generality in assuming that
(17 .15)                               0 < 0 < 1,
since this can be arranged by passing to new constants an if necessary .
Furthermore, there is no loss of generality in assuming that the a n are
integers. Define
                                       t vn(w)          if     vn(c )) < 1,
(17.16)               'n(t,, co) =        an                     an
                                            t0          otherwise .
Since
                               q) (t) - t0            vn
(17.17)                 suet     n                <        - 0         0,
                                                      an
On converges in probability in the sense of the Skorohod topology to the
element T (t) = Ot of D0. Because of (17 .13) and the assumption an ) oo,
it follows from Theorem 4 .4 that (Xdn , (D n ) -4 ( W, qq) and hence, since
(17.7) and (17 .8) imply (17.9), that Xdn o q)n -> W ° 9q .
  If
                                               1-
                             YY(t, (0 ) =          S[vn(W)t]((v),
                                             orVan
then XQn o (n and Y,.have the same value at co if vn(cv)/a n < 1, the probability
of which goes to 1 by (17 .12) and (17 .15) . Therefore Yn .4 W o p. Now

      sups 18 Yn(t, ( v) - YY(t, (v)
                                                 le -
                                                                     supt I Y.(t, cv)~   0,
                                                             vacv)
                                                               (
and hence Yn converges in distribution to 0-I(W o (p) . Since 0- 1(W ° 99)
has the same distribution as W, (17 .14) follows.
                                                                    Random Change of Time 147


  Of course, (17 .14) implies Svn/a. v n --9--->-N, as well as an arc sine law and
limit laws for the maxima and so on . Note that we have assumed of the ~n
nothing beyond (17 .13), which holds for example in the Lindeberg-Levy
situation . In Chapter 4 we prove (17 .13) for various dependent sequences
{~n}, to each of which Theorem 17 .1 then applies .
   If the limit in (17 .12) is not constant, we must make more specific
assumptions about the ~ n .
THEOREM 17.2 Suppose            $1, ~2, . . . are independent and identically
distributed with E{~ n } = 0 and E{~n2} = Gr2 If

                                          vn
(17.18)                                            -f>- 0,
                                          an
where 0 is a positive random variable and the a n are constants going to infinity,
then Yn      W.
Proof. We assume at first that 0 is bounded, so that there exists a constant
K such that
                                0<0<K

with probability 1 . We may adjust the an so that they are integers and so that
K < 1.
  If we define (Dn by (17 .16), then, as before, 'n - (
                                                      D, where 4) is the random
element of Do defined by
                                         t(t) = 0t .

Let -4o be the field of cylinders and define XX by (16.9), where pn -- oo and
p n/vn ->- 0 . Then, as in Section 16, we have

(17.19)                    sup s Xn
                                  I      (t)       -   Xn(t)14-    0
and
                         P({Xn E A} n E) -> W(A)P(E)

for every W-continuity set A and every E in 4 0. Now by Theorem 4 .4,
((Dn, v,,/an) -I->- ((D, 0) in the sense of the product topology on Do X R1 ;
since every Xn is measurable Q(,40), it follows by Theorem 4 .5 that

                            Xil       ~ nIavn_ --9- ( W, (D0, 00)
                                               n
 relative to the product topology in D x Do x R1 , where 0 0 is independent
 of Wand 1 0(t) = 00 t. By (17 .19),
                                          vn           9
                           (Xa,,, On,                  -a (W, 0o, 0 0) .
                                          an
148   The Space D

   Now the mapping that carries the point (x, T, a) to ai(x ° 9,) is continuous
at that point if x E C, (p E C n D o , and a > 0 . By Corollary 1 to Theorem
5 .1, therefore

                              (Xa„ ° ~n)    00 i ( W ° 4)0).
                        a
                       \vn)
Since 8 0 and W are independent, 80i(W o (Do) has the same distribution as
W. Moreover (v n /a n)- I (Xa, o (Dn) coincides with Yn if v n/an < 1, the
probability of which goes to 1 since K < 1 . Thus Yn 4> W if 0 is bounded.
    Suppose 0 is not bounded . For u > 0, define B u = 0 and vun = v n if
0 < u and define 0 u = u and vun = a nu if 0 > u. Then, for each u,
V U ./a . - 0 u as n --> oo, and, by the case already treated, if


                                      1
                        Yun(t) =             S[vun(W) t](0)),
                                  av vun(w)
then Yu,, -4 W as n -- oo.       Since P{ Yun 0 Y,,} < P{0 > u}, Y n -4. W
follows by Theorem 4 .2.
  This proves Theorem 17 .2. The proof goes through for many dependent
sequences {$j also ; see Chapter 4 .

Renewal Theory

These ideas can be used to derive a functional central limit theorem
connected with renewal theory . Let ?11, 772, . . . be a sequence of positive
random variables and define
                                  k ?I
(17 .20)            Vt = max ~k :      i < t~,       t > 0,
                                     i=1

with v t = 0 if ?]1 > t. If ?7k is the time lapse between the occurrences of the
(k - 1)st and kth events in a series, then v t is the number of occurrences up
to time t .
   We shall assume the existence of positive constants ,u and or such that, if
                                        1 [nt]
                        X.( t, (0 =
                                  )      - I (?Ii((O) - h) ,
                                      a Jn i=1
then Xn -4 W. This will be true if, as in the usual renewal theory situation,
the 77n are independent and identically distributed with mean ,u and variance
a2 . Define Zn by
                                              - nt//i .
                          Z n(t, (U) = vnt(w)
                                         a,~ ~. J n
THEOREM 17 .3 If Xn -9-4 W, then Z n --9-> W.
                                                                  Random Change of Time 149


'roof. We shall assume in the proof that to > 1 ; this is only a matter of
cale . We first show that
                           sup
                                  vv - 1 V -- 0
17.21)
                           -v < u U /u u
                          0<

is u -- oc . The hypothesis X,, --~~ W implies that
                                   1 It]
 17 .22)                      sup  - I ni - ,ut - 0
                             0<t<s S i=1

is s -- oo (because replacing s-1 by s-4 would give convergence in distribu-
 ion) . By the definition (17 .20), v v > t implies EZtll 77i < v . Therefore
                                        vv    1v
                                sup \ - - -~ > s
                               0<-v<u u      to u
implies
                                      It]
;17 .23)                     Sup,     I ni -jut              > µus.
                         0<t<u(µ 1+E) i=1
Similarly,
                               inf              - 1 v1 < -s
                                        u
                              o<-v<-u \yv        u uu
implies (if s < It')
                                                It]
(17.24)                        sup 1            I ni - jut > /lug.
                         0<t<u(t       -E) i=1

By (17 .22), the probabilities of (17 .23) and (17 .24) go to 0 as u -} oo, which
proves (17 .21).
  Put
                                             if vn(w) < 1,
                                                              n
                    (Dn(t,   w) =
                                                        otherwise .
                                           It
By (17 .21), (Dn -4. 99, where T(t) = tl,u, so that, by the usual argument,
Xn 0 (D n 4. W o 99 . Let
                                  1 vt„(CO)
                          Yn(t) =     I Oli(w) - ,u) ;
                                       O   J n i=1
 Yn = Xn 0 (D,a if v nln < 1, the probability of which goes to 1 by (17 .21) and
 the assumption u > 1 . Therefore Yn -  . W o 99.
   By the definition (17 .20),
                         Yn(t) < nt - luvnt < Yn(t) rlvnt+l .
                                                      + d,/-n
                                     QJn
 From maxi „ i ?7 i (/,l n -P-* 0 it follows that sup t X1 1 ?7vnt1 /crVn, which in tum
150    The Space D

implies that, if
                                             nt -µvnt
                                 Zn(t) =
                                                6Jn
t hen Zn  W o q,. Therefore µ2Zn    W (recall that qq(t) = t/µ), from which
Zn -. W follows because of the symmetry of W.
  It is possible in Theorem 17 .3 to let n tend to infinity in a continuous
manner.
Remarks .  The results of this section, which are new, extend those in Billingsley (1962) .
For the central limit theorem for a random number of random variables, see Renyi (1960)
and Blum, Hanson, and Rosenblatt (1963) . See Lamperti (1962) for another weak-con-
vergence theorem in renewal theory .


18 .   THE UNIFORM TOPOLOGY

Let us consider briefly the uniform topology on D-the topology given by
the uniform metric
(18 .1)                p(x, y) = sue t Ix(t) - y(t)I .
With this metric, D is a complete metric space . It is, however, not separable :
The uncountably many points x e defined for 0 < 0 < 1 by
                                       0        if 0<t<0,
(18.2)                      xe (t)
                                     = 1        if 0 < t < 1,
are at mutual distance 1 (see p . 216) .
   A concept prefixed with U will refer to the uniform topology : U-open,
U-continuous, etc . In the same way, a prefix S will refer to the Skorohod
topology of D. If d is either of the two metrics that give the Skorohod
topology (see Section 14), and if p is the uniform metric (18 .1) then
d(x, y) < p(x, y) . Therefore the uniform topology is finer than the Skorohod
topology : U-convergence implies S-convergence . On the other hand, as
observed in Section 14, if xn S-converges to x and x E C, then xn U-converges
to x. In particular, the uniform and Skorohod topologies coincide when
relativized to C .
   Let -9 denote the class of S-Borel sets as usual, and let I& denote the class
of U-Borel sets . Since an S-open set is also U-open,
(18 .3)                                    -9 ~= Ill .
  Let us suppose that Pn and P are probability measures defined on Ill,
the larger of Ill and -9. Let us write Pn = P [ U] to indicate weak convergence
in the sense of the uniform topology and Pn = P[S] to indicate weak
                                                             The Uniform Topology 151

;onvergence in the sense of the Skorohod topology . Now Pn - P [ U] requires

18 .4)                            JfdP n - *JfdP

'or all bounded, U-continuous f, whereas P,, => P [S] requires (18.4) only
'or all bounded, S-continuous f. Hence P,, = P [ U] implies P,, => P [S] .
Che converse is false because S-convergence does not imply U-convergence
consider point masses) .
   Suppose now that Pn and P are defined on Q/, that P,, ~ P[S], and that
°(C) = 1 . We shall prove that Pn ::--. P[U] . For A in Ql, let A U denote its
J-closure and let AS denote its S-closure . Note that A u cz- As. Since
Dn = P [S] and P(C) = 1, lim sup,, Pn (A) < lim sup ra P,,(A S) < P(A s) =
p(A 8 n C). Since a sequence S-converging to a limit in C also U-converges
:o the limit, As n C c A u . Therefore lim sup,, P,,(A) < P(A U), which
 mplies Pn => P[U] by Theorem 2.1 .
   We have proved this : Suppose P n and P are defined on V . (i) If P n => P[U],
'hen P,, => P [S] . (ii) If P,, => P [S] and P(C) = 1, then P n = P [ U] .t Because
Df (i), it is better if possible to prove P,, = P[U] than to prove Pn = P[S]-
"or example, one has then the asymptotic distributions for more functions
:)n D. Because of (ii) on the other hand, if P(C) = 1, then a proof of
Pn = P [S] is automatically a proof of the better result Pn => P [ U] .
   Consider the distributions Pn of the random functions Xn involved in
Donsker's theorem as formulated for D (see (16 .1)). According to Theorem
16.1, P n = W [S], where W is Wiener measure. Since W (C) = 1, we can
draw the stronger conclusion P,, = W[U] .
   There is a gap in this argument : the measures P,, and W are defined only
on -9. The question is whether they can be extended to the larger o'-field Ql .
Certainly, W can be extended-the argument used in Section 16 to extend
W from (C, V) to (D, -9) enables us also to extend it from (C, ') to
(D, QI) . Now P,, is defined as PX,,-, 1 (the domain of Xn is a probability space
(S, M, P)), a definition which is possible because
(18.5)                               Xn1-9 C g3.
If we are to define P,, on I& instead, we must strengthen (18 .5) to
( 18 .6)                              Xn 1 Qi c ~.

  If A is a finite-dimensional set in D, then Xn1A E 4, and it follows that
the same is true if A is a U-sphere . Since the uniform topology is not
separable, (18 .6) does not follow without further argument .

t These statements are true because U-convergence always implies S-convergence and
S-convergence to a limit in C implies U-convergence ; they involve no further properties of
C, D, and the two topologies .
152   The Space D

  The definition (16 .1) of X,, shows that the range X,,Q is separable in the
uniform topology . If A is U-open, therefore, there exist countably many
U-spheres A i such that A r1 X ,.,Q = Ui(Ai n X,,S2). But then X,-,,'A -
U i X,,1A i , and, since each Xn1Ai lies in -4, so does X,-'A, which proves
(18 .6) .
  Thus the distribution P n is (or can be) defined on Gll in the natural way by
                    P n (A) = P{w :Xn ((o) E A},         A E °ll,
and we can strengthen Theorem 16 .1 by interpreting X,,., -- Win the uniform
topology : Pn =>- W[U] .
  Consider next the random functions Y,n defined by
                         YY (w, t) = Jn(Fn (t, w) - t),
where Fn (t, co) is the empirical distribution function for $1 (w), . . . , $ n (w),
assumed independent and uniformly distributed over the unit interval .
Now Yn Z . W° by Theorem 16 .4. Since W° can be extended to Gl( just as
W was, we can interpret Yn - W° in the uniform topology rather than the
Skorohod topology if we can extend the distribution of Yn from -9 to
Q/-that is, if we can strengthen
(18 .7)                                Yn1 -9 C R
to
(18 .8)                                Y"-10& C -q .
But here the program collapses : We shall show that (18 .8) is false .
   To see that (18 .8) fails, consider the case n = 1 . Let h be the mapping
from S2 to D that carries w to the distribution function with a unit jump at
~1 (w) ; h(w) = x,,(w) with x e defined by (18 .2). Clearly, (18 .8) is equivalent

to
(18 .9)                            h-1GW c M,
and we shall show that (18 .9) is false if ~1 (w) is uniformly distributed .
  Let A B be the U-sphere with center x e and radius 2. Since the x a are at
mutual distance 1 in the uniform topology, we have

(18.10)                  h'1          A Ol - {w : ~1(w) E H}
                               `OcU     JH

for every subset H of the unit interval . If (18 .9) were true, then, since
U0 HAa is U-open, the set (18 .10) would lie in . , so that we would have
{w : ~1 (w) E H} E -4 for every subset H of the unit interval . Thus ,u = P~1'
would be a measure defined for every subset of the unit interval and having
the property that ,u(a, b) = b - a for every subinterval (a, b). But no such
,u exists.
                                                                The Uniform Topology      153

  A small elaboration of these ideas shows that (18 .8) fails for every n
unless the distribution common to the $ i is purely atomic . In treating
empirical distribution functions as random elements of D, therefore, we
must stay with the Skorohod topology-and this is solely for reasons of
measurability. j' As a rule, we may interpret X,,, X in the uniform topology
only if (i) X lies in C with probability 1 and (ii) the jumps in X,, occur at
fixed time points rather than at time points with random positions .
Remarks . Chibisov (1965) has pointed out that (18 .8) is false . Another way around the
problems created by the nonseparability of D in the uniform topology is to work within the
a-field 0&o generated by the U-spheres . This requires a different theory of weak convergence;
see Dudley (1966 and 1967) .

t 0, wiste a man how manye maladyes
  Folwen of excesse and of glotonyes,
  He wolde been the moore mesurable . . .
                              The Pardoner's Tale
CHAPTER 4


Dependent Variables




19 . DIFFUSION
This section contains a theorem characterizing Brownian motion, a theorem
characterizing more general diffusion processes, and asymptotic forms of
these two theorems . In Section 20 we use these results to prove a version of
Donsker's theorem for the variables of a stationary sequence satisfying a
uniform mixing condition ; in Section 21 we extend the result to functions
of such sequences ; and in Section 22 we prove functional central limit
theorems for empirical distribution functions in these two cases . In Sections
23 and 24 the results of the present section are used to derive limit theorems
for martingales and for exchangeable random variables .'
  Although many of the results of this chapter could be formulated and
proved in the space C, we shall consistently use D with the Skorohod
topology.

A Characterization of Brownian Motion
The random function W lies in C with probability 1 and has independent
increments ; moreover, E { Wt} = 0 and E { W'21 =t. These properties
characterize W:
THEOREM 19 .1 Let X be a random element of D that has independent
increments and satisfies P{X E C} = 1, E{X(t)} = 0, and E{X2(t)} = t.
Then X is distributed as W .

t The succeeding sections all depend upon this one . Sections 20, 21, and 22 require to be
read in order, but this sequence and Sections 23 and 24 form three independent units .
154
                                                                                 Diffusion   155

Proof.    The independence and the moment conditions imply
                             E{(X(t) - X(s)) 2} = I t - sI
and P{X(O) = 0} = 1 . We are to show that X(t) - X(s) has distribution
N(0, t - s) for s < t. Because of the independence, it is enough to prove
this for s = 0, and by continuity we may assume t < 1 .
   Let q2(t, • ) be the characteristic function of X(t)
                                  cp(t u) = E{e i ux(t) } .
Since P{X E C} = 1, T(t, u) is continuous in t as well as in u. We shall
show that it satisfies the differential equation

(19.1)          at qq(t, u) - - 2 u 2 g2(t, u),     0 < t < 1,      u c- R 1 .

It will then followt that
                                 pp(t, u) = 99(0, u)e t,2
                                                      ;

since X(O) vanishes with probability 1, this will entail normality . In proving
(19 .1), we may take the partial derivative to be a derivative from the right .$
We are thus to prove

(19.2) lim 1 [99(t + h, u) - 92(t, u)] _ -2u 2 g,(t, u),             0 < t < 1.
       hl o h
   By a standard estimate, §
(19.3)                         e iv = 1 + iv - 2v2 + C ( V) ,
with
(19 .4)                                 Ic(v)I < Ivl 3

for v real . Write
(19.5)                      Os,t = 0(s, t) = X(t) - X(s).
From the independence of these increments and the relations E{z s ,t} =0

t If f satisfies f'(t) = A(t)f(t) with A continuous, then its ratio with the nonvanishing
function fo (t) = exp f o A(T) dT has derivative 0, so that f(t)/fo (t) = f(0)/fo (0) = f(0) .
 1 To prove that a continuous f with continuous right-hand derivative f+ on [0, 1) necessarily
has a two-sided derivative on (0, 1), it suffices to assume f real and prove that F(t) =
f(t) - f(0) - f o f+(T) dT vanishes identically . If (say) F(t o) < 0, then G(t) = F(t) -
tF(to)/t o satisfies G(0) = G(to) = 0 and (since F+ vanishes) G+(t) > 0, so that, over
 [0, t o ], G must have a positive maximum at some interior point s ; but then G+(s) < 0, a
contradiction.
 § Feller (1966, p . 485) .
156     Dependent Variables

and E {0S t } = t - s, we have
     q(t + h, u) - gq(t, u) = E{eiux(t)Leiue( t,t+h) - 1]}
                                   = E{e i u x(t) [iu0      2 u2At,t+h + C(uLt,t+h)}
                                                        t, t+h
                                      = -2u2hgp(u, t) + E{e iux(t)
                                                                  c(ulXt,t+h)} .
Because of (19 .4), (19 .2) will follow if we prove that

(19 .6)                       lim 1 E{lLt,t+h1 3} = 0 .
                              hlo h
     Using again the independence of the increments, we obtain
(19 .7)       E{Ot1,tOt,t2} = (t - t1)(t2 - t) < (t 2 - t1)2,           t1 G t < t 2 .
Fix t and t + h, with h > 0. If
                                              a                  i
(19 .8)       Mm = max min O (t, t +              h) , O (t +         h, t + h) ~,
                      o<i<Tn                  m                   m
then, by (19 .7) and Theorem 12.1,
                                                     2
(19 .9)                           P{Mm > 21 .< K2,1 h .
                                                    h4
And, by (12.6),

(   19 .10)       lot,t+h) < 3M ;,d + max J 0(t +
                                      1<i<m
                                                       i - 1
                                                        m
                                                                 h, t +
                                                                          i
                                                                          m
                                                                            h) .

Since X lies in C with probability 1, the maximum here goes to 0 with
probability 1 as m -* co, and it follows by (19 .9) that
                                                   2
(19 .11)                    P{lot,t+hl > Al < K A4
with K = 44K2 ;1.
  From (19 .11) we obtain (see (3) on p. 223)
                                                Kh2
                     E{lot,t+hl 3} < a +            da = a + 3Kh 2   ,
                                           faO0 a                  a
valid for a > 0. Taking a = K10 (this minimizes the function on the right),
we obtain
                           E{1ot,t+h1 3} < 4KIO,
which implies (19 .6) and completes the proof.
  The condition that X lie in C with probability 1 is essential here, since the
other hypotheses of the theorem are satisfied if
(19 .12)                       X (t) = Y(t) - t
and Y is distributed as a Poisson process with parameter 1 .
                                                                          Diffusion   157

  We now derive a limit theorem from Theorem 19 .1 . Let X,, be random
;lements of D. We say X7, has asymptotically independent increments if
;19 .13)         0<sl <ti <s2 <t2 <<sr <tr <1
.mplies, for all linear Borel sets H 1 , . . . , H, that the difference
                                                          T

;19 .14) P{X .(ti) - Xn(si) E Hi , i = 1, . . . , r} -         P{X,,(ti) - X.(si) E Hi}
                                                         i=1

:onverges to 0 as n -- co . Note that we require (19.14) to hold only when the
.ntervals [s i , ti] are strictly separated-when ti_1 < si.
  Recall that the modulus of continuity w,,(8) = w(x, 6), defined by (8 .1),
.s well defined if x lies in D . It enters into the next theorem because the
.imiting distribution on D is actually supported by C.
THEOREM 19 .2 Suppose that X,, has asymptotically independent incre-
nents, that {X,,2 (t) : n > 1 } is uniformly integrable for each t, and that
E{X.(t)} -~ 0 and E{X n2 (t)} ) t as n ---* oo. Suppose finally that, for each
positive e and ri, there exists a positive 6 such that
(19.15)                       P{w(XX, 6) > e} < ?7
For all sufficiently large n . Then X,,, -- W.
Proof. Since E{Xn2(0)} --> 0, {X,,(0)} is tight. It follows from (19 .15) and
Theorem 15 .5 that {X,n } is tight and that, if X is the limit in distribution of a
subsequence, then P{X E C} = 1 . It is enough to show that any such X
must be distributed as W. But E{X,,(t)} -- 0, E{X,,2 (t)} - - t, and the uniform
integrability of {X",2(t) :n > 1} imply E{X(t)} = 0 and E{X 2 (t)} = t
(Theorem 5 .4) . Now the increments X(ti) - X (s i), i = 1, . . . , r, are
independent when (19.13) holds, and from P{X E C} = 1 it follows that the
same is true if we allow ti = si ,1 in (19 .13) . Thus the result follows by
Theorem 19.1 .
  It is not possible to replace the w in (19 .15) by w' as defined by (14 .6)
(define X,, - X by (19 .12)).
  The condition that {X,'2 (t) : n > 1 } is uniformly integrable for each t
cannot be dispensed with in this theorem ; indeed the condition follows via
Theorem 5.4 from E{X,n2(t)} --* t and X,, --9-* W. For a specific example in
which the condition fails, take X,(t) = Jt s,,,, where ~,, assumes the values
  n, -Jn, and 0 with respective probabilities 1/2n, 1/2n, and 1 - 1/n ;
N/-
although X,, does not converge in distribution to W, the hypotheses of the
theorem are satisfied except for the requirement of uniform integrability .
  Theorem 19 .2, together with the results of Section 12, leads to another
proof of Donsker's theorem . If X„ is the random function (10 .1) involved in
158   Dependent Variables

that theorem, then, by (12 .23) and Theorem 8 .4 (carried over to D), the
condition involving (19 .15) is satisfied . Further, by (12 .20),


                {S,~2/na2?a}
                               Sn/n dP < K'[1a + a1 f
                                                    2
                                                             > 4laa
                                                        {j~Ij-        n}
                                                                           ~12 dP]


for a universal constant K', which implies {X"2(t) : n > 1 } uniformly
integrable . The remaining conditions in Theorem 19 .2 are easily checked, and
Xn -- W follows . Notice that this proof does not presuppose the central
limit theorem ; in particular, we have an independent proof of the
Lindeberg-Levy theorem .t As we shall see in Section 20, this method applies
also to certain sequences of dependent random variables .

Other Diffusion Processes$

If X satisfies the hypotheses of Theorem 19 .1, then, for 0_< t1 < . . . < tk < 1
and h positive,

                E{X (tk + h) - X (tk) II X (ti), . . . , X(tk)} = 0,
(19.16)
                E{(X (tk -+- h) - X(tk))2 II X (t1), . . . , X (tk)} = h .

If X E C and X (O) = 0 with probability 1, that X is Brownian motion
follows, as we shall see, from (19 .16), and we can dispense with the assump-
tion of independent increments . The same is true if, in addition to certain
regularity assumptions, we require only that, for small h, the equations in
(19 .16) hold approximately, in a sense presently to be made precise .
  We can in a similar way characterize diffusion processes other than
Brownian motion by replacing the right sides of the equations in (19 .16) by
functions of h, tk, and X (tk). We shall assume that
(19.17)     E{X(tk + h) - X(tk) II X (t1), . . . , X (tk)} ti hp(tk)X(tk)

and
(19.18)      E{(X(tk + h) - X(tk))2 II X(tl), . . . , X(tk)}               h62 (tk)

for small h (the meaning to be made exact), where p(t) and a2(t) are given
functions, and prove (Theorem 19 .3 below) that X is a Gaussian random
function satisfying
(19.19)                        E{X(t)} = 0,     0 < t < 1,

t The argument is easily adapted to the Lindeberg case ; see Problem 1 of Section 10 and
Problem 1 of Section 12 .
1 The remainder of this section is required only for Sections 23 and 24 .
                                                                                     Diffusion   159

and
                              s               S             t
(19.20)     E{X(s) X(t)}        a2 (r) exp[2 f p(T) dT + I p(-r) dT] dr,
                           =J O             JT           JrS
                                                                    0<S<t<1 .
The choice p(t) = 0 and o 2 (t) = 1 leads back to Brownian motion, and the
choice p(t) = -1/(1 - t) and a2 (t) = 1 leads to the Brownian bridge .
  Of the functions o2(t) and p(t) we shall assume that o2(t) is nonnegative,
that both are continuous on [0, 1), and that, if
                                         t
                          g(t) = exp       p(T) dT]

and
                                              [5     o


                                                     g-2
                             G(t) =        t62 (r)         (r) dr,
                                      J0
then the limit
(19 .21)                              lim g(t)G(t)
                                      t-1
exists and is finite . As t --->- 1, the nondecreasing function G(t) has a limit
(finite or infinite), and hence g(t) has a finite limit (which vanishes if G --* oo).
Thus the right side of (19 .20), which is well defined for 0 < s < t < 1, has
as t -- 1 a limit which we shall take as its value for t = 1 .
   If we define
                   X(t) = g(t)(1 + G(t))W°(G(t)/(1 + G(t)))
for 0 < t < 1, where W ° is the Brownian bridge, then (19 .20) holds for
0 < s < t < 1 . Since g(t), g(t)G(t), and G(t)/(1 + G(t)) all have limits as
t -* 1, we can define X(1) by passing to the limit . Thus, there does exist a
continuous, Gaussian random function satisfying (19 .19) and (19 .20) .
Clearly X(0) = 0 with probability 1 . We shall regard X as a random element
of D lying with probability 1 in C .
   We' shall give three conditions on X which characterize it as this random
function . Each condition will be given in two versions, first in a form
convenient for most applications and second in a distinctly weaker form that
suffices for the characterization . The first condition defines the sense in
which the approximations (19 .17) and (19 .18) are to hold.
 Condition 1 . If 0 < t l < • • < t k < 1, then
(19 .22) lim 1 E{IE{X(tk + h) - X(tk) II X(t1)1 . . . . X(tk)}
            hi oh
                                                                             - hp(tk)X(tk)I } = 0
and
 (19 .23)   lim 1 E{IE{(X(t k + h) - X(t k )) 2             X(t1), . . . , X(t k)} - h 72 (tk)l } = 0.
            nioh
160   Dependent Variables

Condition la .       If 0 < t 1                     tk < 1, then for all real u 1 , . . . , uk ,
                              k
(19.24) urn          E{ [exp J iu ;X(t ;)] [X(tk + h) - X(t k) - h p(tk)X(t k)] = 0
                 h                  J71                                                     I
and
                                     k
(19.25) lim          E        exp         iu;X(tj)1 [(X(tk + h) - X(tk))2 - ha2 (tk)] = 0 .
           hl0   h       ~~         11
Condition 2.         We have

(19.26)                                      sup s E{X 2 (t)} < co .

Condition 2a. The variables X(t), 0 < t < 1, are uniformly integrable .
Condition 3 . There is a constant K such that
(19 .27) E{(X(t) - X(t1))2(X (t 2) - X (t))21 < K(t2 - t1)2 , t1 ~ t -< t2.

Condition 3a.        Fort < 1,

(19 .28)   lim lim sup 1                                   (X(t + h) - X(t)) 2 dP = 0 .
           a-+00       h {(X(t+h)-X(
                         h ~ 0



  Clearly, Condition 1 implies la and 2 implies 2a . To see that 3 implies 3a
(which is essentially a uniform integrability condition), observe that, with
the notation (19 .5), the inequality (19 .27) is just (19 .7) with an extra factor
of K on the right, and, if X lies in C with probability 1, we may deduce
(19 .11) just as before (with a new K-the value is irrelevant) . An application
of (3) on p . 223 shows that the integral in (19 .28) cannot exceed 2Kh/a, so
that 3a does follow from 3 . (For conditions intermediate between 2 and 2a
and between 3 and 3a, replace the exponent 2 on the left in (19 .26) and
(19 .27) by 1 + e .)
THEOREM 19 .3 Let X be a random element of D with P{X E C} = 1 and
P{X(0) = 0} = 1 . Suppose that U2(t) and p(t) are continuous on [0,1) and there
exists the finite limit (19 .21) . If X satisfies Conditions 1 (or la), 2 (or 2a), and
3 (or 3a), then X is the continuous, Gaussian random function specked by
(19.19) and (19.20) .
  Before proving the theorem, let us connect it with our two familiar
examples . If
(19.29)                                    p(t) = 0,       o 2(t) = 1,

then (19 .20) becomes E{X(s) X(t)} = s, s < t, so that X is Brownian
motion . If
(19 .30)                 E{X(t + h) - X(tk) II X(t1)1 . . . , X(t k)} = 0
                                                                        Diffusion 161

and_

(19 .31)       E{(X(tk + h) - X(tk))2 11 X(t1), . . . , X(tk)} = h

with probability 1, then (19 .22) and (19 .23) are certainly satisfied, (19 .26)
holds, and (19 .27) holds (even with (t - t1)(t2 - t) on the right) . Hence
(if X E C and X (O) = 0 with probability 1) X must be Brownian motion .
Since the hypotheses of Theorem 19 .1 imply (19 .30) and (19 .31), that theorem
is a corollary of the present one .
  If

(19 .32)                    p(t) = - 1 1 - t ,    62(t)    1,

then (19 .20) becomes E{X(s)X(t)} = s(1 - t), s < t, and X must be
distributed as the Brownian bridge W° .

Proof of the theorem . Fix points ti with 0-< t1                    tk < 1, fix real
numbers ul, . . . , uk, and let t and u vary over the strip
                         tk<t<1,            -co<u<oo .
(19 .33)
Put

(19 .34) V (t, u) = E{exp i(ul X(tl) +           + uk X(tk) + u X(O)J ;
we shall derive a differential equation for ip(t, u) .
   For notational convenience, write Z = u1 X(t) +                   + uk X (tk), so
that (19 .34) becomes

(19 .35)                       V(t, U) = E{eizeiuX(t)}
Since X E C with probability 1, ' is continuous (jointly in t and u) in the
strip (19 .33) . Since E{X(t)} exists, we have

                            a yv(t, u) = E{iX(t)ei eiuX(t)},
(19 .36)
                            au
and Condition 2a implies that this function also is continuous in the strip
(19 .33) .
  With the notations (19 .3) and (19 .5), we have

    y'(t + h, u) - V(t, u) = E{eieiux(t)[eiuA(t,t+h) - 1]}
                              = E{eiZeiuX(t)[iu0t,t+h - 2u2At,t+h + c(uLt,t+h)]} •
By (19 .35) and (19 .36),


(19 .37)
           h [~V(t + h, u) - zV(t, u)] - up(t) au (t, u) + 2u262(t) (t, u)

                < IhI IE{ei eiux(t)[Ot,t+h - hp(t)X(t)III

                            2
                                 rZ iuX(t) 2          2         1
                        + 2h IE{e e      [Ot,t+h - hQ (t)]}I + h E{Ic(udt,t+h)I} •
162   Dependent Variables

Since lei" - 1 - ivI < 2v2 , we have, in addition to (19 .4), the inequality
I c(v) l < v2 . Therefore

                                                                       2
                                                        3 1    U
                                                   a -!'h R -F                         Ot t+h d P,
                h E{I c(u 0 t,t+h)I }
                                        <_ Iul 3
                                                                      h    {et2 .t+h>«h}


and it follows by Condition 3a that the third term on the right in (19 .37)
tends to 0 with h . And by Condition la (with (t1 , . . . , tk, t) replacing
(t1, . . . , tk ) and (u 1 , . . . , uk , u) replacing (u 1 , . . . , uk)), the other two terms
also tend to 0 . Therefore

(19.38)             a T(t, u) = up(t) au yv(t, u)                           2u 2 o (t)Y(t, u),


since the right side of this equation is continuous in the strip (19 .33), so is
the left .t
   We now solve the differential equation (19 .38) . For v arbitrary, define
                                                s
(19.39)             2,,(s) = v exp[-                p(T) dTl ,                 tk < S < 1,
                                               tk
and put
(19 .40)                    g„(s) = i(s, 2y (s)),                          tk < S < 1 .

By the chain rule (' and p2 denote the partial derivatives with respect to the
first and second arguments of V),
                        9v(s) = 'tV1(s, 40)) + V2(S , Av(s))2v(s),
which, together with (19 .38) and the definitions (19 .39) and (19 .40), gives

                                gv(s) =             12 2(s) 62 (s)gv(s ) .
Therefore $
                                                                  S

(19.41)    ~V(s, ~,„(s)) = y'(tk , v) exp[-1                          62(r)Av2 (r) dr      ,     tk <   < 1
                                                          2   t   k
  Given an arbitrary (t, u) in the strip (19 .33), take v = u exp f ik p(T) dr.
Then A„ (t) = u and
                                                    t

                     AV2(r) = u2 exp12f, p(T) dT],                              tk <r<t,

so that, by (19 .41) with s = t,
(19.42)                          IP(t, U) = V(t k , ua)eZu 2 b 2 ,

t The derivative with respect to t here is two-sided, even though h tends to 0 through
positive values ; see the second footnote on p . 155 .
$ See the first footnote on p . 155 .
                                                                                        Diffusion   163

where
                                                 rt
                                      a = exp          p(T)   dT
                                                J tg
ind
                         b2 = '/ tU2(r) exp 2J t p(T) dT               dr .
                               J tk             [      T           ]

 Going back to the definition of p, we see by (19 .42) that
  E{exp i (u l X (tl) + • • • + uk X (t k) + u X(t))}
                                                                      1_2 b 2 .
                     = E{exp i (u1 X(t1) + + uk X (t k) + uaX (tk))}e
We have proved this for 0 < ti < . . . < tk < t < 1 ; by continuity, it is
true for t = 1 as well. It implies that, for arbitrary v,
  E{exp i(u i X(ti) +          + u k X (tk) + v(X (t) - a X (tk)))}
                                  = E{exp i( u1 X( t1 ) + . . . + uk X (tk))}e zv2b2.
Thus the random vector (X (t 1), . . . , X (tk)) and the random variable
X (t) - a X (tk) are independent of each other, and the latter has distribution
N(0, b2 ).t
  Taking k = 1 and ti = 0 and using the fact that P{X(0) = 0} = 1, we
see that X(t) is normally distributed with mean 0 . Taking k = 1 and ti
general, we see that (19 .20) holds and that X(t1) and X (t) - a X(t1) are
jointly normal (for an appropriate a) and hence that the same is true of
X(t1) and X (t) . Taking k = 2, we see that X (t i), X (t2), and X (t) - a X (t2)
are jointly normal and hence that the same is true of X (t1), X(t2), and X (t) .
Continuing in this way, we conclude that all the finite-dimensional distribu-
tions are, normal, which completes the proof.
  For the asymptotic form of Theorem 19 .3, we shall need three conditions
which parallel the Conditions 1, 2, and 3 . As before, each condition will
be given two forms . Let X,n be random elements of D.
Condition 1° . If 0 < t1 < . . . < tk < 1, then


(19 .43)   him lim sup       E{I E{X f(tk + h) - Xf(tk) 11Xn(t1), . . . , X,(tk)}
                         h
                                                                              - hp(tk)Xn( t k)I } = 0
and

(19 .44)   limlim sup        E{I E{(X,,(tk + h) - Xn(tk)) 2 11 Xn(t1), . . . , X (tk)}
                 n- oo   h
                                                                                  - h U2(tk)I} = 0 .

t This implies that {X(t)} is a Markov process .
164    Dependent Variables


Condition 1 °a.            If 0 < t1 <             < tk < 1, then, for all real u l , . . . , ul.,
                                               k
(19.45) lim lim sup 1 E j [exp± i ;X,,(t,)]
              12.10 h z     o




                                           x [Xn(tk + 11) - X,,(tk) - 1 1 P(tk)Xn(tk)]J = 0

and
                                               k
(19 .46)      lim lim sup 1               expY iuJ X„(t ;)1
              1110        h
                          n-m                 j=1
                                                                                 2
                                                x [(X,,(tk + h) - Xn(tk)) - g2 (tk)]} = 0.

Condition 2° .            We have

(19.47)                  sup lim sup E{X n2 (t)} < oo .
                          t   n- -
Condition 2 ° a . We have

(19 .48)                        lim sup lim sup
                                a- a° t
                                                      r
                                          n-+c J{~X n (t)I >a)
                                                               I X n (t) I d P = 0.




Condition 3°.             There is a constant K such that

(19 .49)      E{(Xn(t) - Xn(t1))2(Xn(t2) - Xn(t))2} < K(t2 - t1)2 ,
                                                                                       t1 < t ( t2,

for all n .
 Condition 3°a .           For t < 1,
 (19.50)
                                     l-
      lim lim sup lim sup                                        (Xn(t + h)- - Xn(t))2 dP = 0 .
                                     h    {(X (t+h)-Xn(t)2-ah)

   It is easy to show that Condition 1° implies 1°a and that 2° implies 2°a .
 Although 3° does not imply 3 ° a, each of them does suffice, as we shall see,
 for the theorem .

 THEOREM 19.4 Suppose that {X,2(t) : n > 1 } is uniformly integrable for
 each t, that Xn(0) -- 0, and that for each positive s and n there exists a 6
 such that

 (19 .51)                                   P{w(X,,, 6) > s} < r
for all sufficiently large n . Suppose o 2 (t) and p(t) are continuous on [0, 1),
 and there exists the finite limit (19 .21) . If {Xn } satisfies Conditions 1 ° (or
 1 °a), 2° (or 2 °a), and 3 ° (or 3 ° a), then X,, 2
                                                   . X, ii'here X is the continuous,
 Gaussian random function spectfied by (19 .19) and (19 .20) .
                                                                                 Diffusion   165

Proof.    By Theorem 15 .5, each subsequence of {Xn } contains a further
subsequence converging in distribution to some random element X of D
with P{X(O) = 0} = 1 and P{X E C} = 1 . It is enough to show that any
such X must satisfy the remaining hypotheses of Theorem 19 .3 . By Theorem
5 .4 and the assumed uniform integrability of {X"2(t) : n > 11, Condition
1 ° a implies Condition la ; moreover, by Theorem 5 .3, 2°a implies 2a, 3 °a
implies 3a, and 3° implies 3 (which, as we saw before, implies 3a). Thus X
satisfies Conditions la, 2a, and 3a, which completes the proof .

Remark .    Suppose that Condition 3 ° holds, that

(19 .52)                                 X.(0) = 0
holds with probability 1, and that the maximum jump in X,, satisfies

(19.53)                      max i I Xn(t) - Xn(t - )        I   <   E   n

with probability 1, where
(19 .54)                                      e n -->- 0 .

By Theorem 12 .1 and the inequality (12 .6) we then have
                                                                             2

(19 .55)             P    sup       1X .(s) - Xn(t)I > A < K' 8
                         ~t<s<t+a                      }      /1.4

with K' =_4 4KK2 , 1 , provided E n < 4A, from which (19 .51) follows by the
corollary to Theorem 8 .3 . Now (19 .52) and (19 .55) imply


                                    P 11X .(01     > A} <

if E,, < ' A ; therefore (by (3) on p . 223)

                                                                     K
(19.56)                                        X,, (t) dP < 2
                                {x.2(t)>_«}                          a

 if E n2 < 1sa, which implies that {Xn (t) : n > 1 } is uniformly integrable .
 Finally, (19 .56) implies (19 .48) . Therefore, if (19 .52), (19 .53), and (19 .54)
 hold, the conclusion of Theorem 19 .4 will follow if we verify only Condition
 1° (or 1°a) and Condition 3°.
 Remarks . The results here are those of Rosen (1967a), with the conditions altered so as to
 bring Theorem 12 .1 to bear . The idea of deducing the central limit theorem from a differ-
 ential equation goes back to Khinchine (1933) ; Theorem 19.3 under the special conditions
 (19 .30) and (19 .31) is due to Levy (1948) and Doob (1953) .
1 66   Dependent Variables



20 . MIXING PROCESSES

(p-Mixing

Let
(20 .1)                                , L1, ~O' ~1' . . .

be a strictly stationary sequence of random variables defined on a probability
space (S2, -4, P) . For a < b, define        ab as the v-field generated by the
random variables a, . . . , ~b ; define .a ,, as the or-field generated by
. . . , ~a_l, ~a ; and define A °° as the 6-field generated by ~a , $a+l, . . . .
    Consider a nonnegative function 99 of positive integers. We shall say that
the sequence {fi n } is 99-mixing if, for each k (- oo < k < oo) and for each n
(n > 1), El E "Illk ,) and E2 E -,llk+n together imply

(20 .2)               IP(E1 n E2) - P(E1)P(E2 )I       < gp(n)P(E1) .
This is a joint property of {fi n } and q, . We consider only functions q, satisfying
(20 .3)                                lim 2(n) = 0,
                                      n~ 00
and usually we require that 92(n) go to 0 at some specified minimum rate .
If we say that {fi n } is 99-mixing without specifying cp, we mean that (20 .2)
holds for some 99 satisfying (20.3) .
  If P(E) > 0, then (20 .2) is equivalent to
 (20 .4)                      IP(E2 I El) - P(E2) I < 92(n),
whereas (20 .2) holds trivially if P(E1) = 0 . We shall regard the left side of
(20 .4) as vanishing if P(E1) = 0, so that the condition for q,-mixing is

(20 .5)      sup { I P(E 2 I El) - P(E2)I : E 1 E          E2 E ` J k+n} < 92(n) .

   If 92(n) is small, (20 .2) and (20 .4) say that E2 is virtually independent of
 El . In a q,-mixing process, the distant future is virtually independent of the
 past and present .t This property enables us to prove various central limit
 theorems and functional central limit theorems .
    We shall often write 0. in place of 2(n). If each 99n has the minimal value
 consistent with (20 .5), then
 (20 .6)                           1 > 921 > 972 > . . .


 j' Since (20 .2) and (20 .4) are not symmetric in E 1 and E2, past and future cannot be inter-
 changed ; for a q'-mixing process that ceases to be q-mixing when time is reversed, take
 ~n = Ek 1 771-k/2 k' where r)k are independent and assume the values ± 1 with probability
 J each.
                                                                       Mixing Processes   167

If we replace q;n by
(20.7)                           min {1, Tj,
then {fi n} is still T-mixing and (20 .6) holds. Thus there is no loss of generality
in assuming (20.6). It will be convenient to define qua = 1, so that (20 .5)
holds trivially if n = 0 .
   For fixed E2 ,
(20.8)                       {E1 :IP(E2 I E1) - P(E2)1 < e}
is a monotone classt (is closed under the formation of countable increasing
unions and countable decreasing intersections) ; for fixed El, the same is true
of the class
(20.9)                      {E2 :IP(E2 JED - P(E2)1 < s} .
It follows that, if (20 .4) holds for El in      d
                                              and E2 in -4, where W and -4 are
fields generating    .'Wk    and .~llk+n , respectively, then (20 .5) holds, an
observation useful in checking whether a given process is q,-mixing .
Example 1 .      The sequence (20 .1) is said to be m-dependent if the random
vectors (~ i , . . . , ~k) and ($k+n, . . . , $,) are independent whenever n > m.
(In this terminology, an independent process is 0-dependent .) Such a process
is q,-mixing with qq n = 0 for n > m . For a specific example, take
                        ~n = a0~ n + a1`
                                                      . . .
(20.10)                                      _1 +             ++ am~n-m,

where the a 2 are constants and the ~n are independent and identically
distributed.
Example 2.      Let {fi n } be a stationary Markov process with finite state space,
and let ~ n = f (fi n ), where f is some real function on the state space . If
-ga b is defined as before and if ./Va b is the a-field generated by ~a,         fib,
then ., ab   C  Xa  b
    Let p,a be the stationary probabilities for the Markov process, and let
p ug, be the transition probabilities, so that

                  Pm = u0, . . . , ~i+l = u1} = Pu0Puoul . . . Put-lul
for each finite sequence u 0, u1 , . . . , u l of states. Assume that the p u are all
positive, so that
                                                  (n)
                                                 Puv
 (20.11)                          92n = max             -1
                                           U,V
                                                 PV

 is finite, where puv) are the nth order transition probabilities . Let H1 be a set

 t See Halmos (1950, p . 26) .
168    Dependent Variables

of (i + 1)-tuples of states, and let H 2 be a set of (j + 1)-tuples of states .
For the special element
(20 .12)                         El =Wk-z) . . . , ~ k) E Hl}
of .N k 00 and the special element
(20 .13)                     E2 = { Gk+n, .       . , Sk+n+i) E H 2}
of .N'k+,n , we have

      P(E1 n E2) - P(E1)P(E2)

                             <     Pu 0Pu o u l . . . Put _ l u ; I Puvo - Pvol Pv ovl . . . Pvj_lv,,
where the sum extends over (u0, . . . , uz) in Hl and over (v o , . . . , v;) in H2 .
From the relation F'vpuv = 1 and the definition (20 .11), we obtain (20 .2).
And now from the fact that (20.8) and (20 .9) are monotone classes, it follows
that (20 .2) holds for all El in Xk ,, and E2 in X ',n and hence for all El in
      . and E2 in _'
_Iffk
      0
   If the transition matrix (puv) is irreducible and aperiodic, then'
                                             (n )
(20 .14)                                    Puv --- PV

for all u and v. Since the state space is assumed finite, the convergence must
be uniform in u and v, so that qqn , defined by (20 .11), converges to 0 : {fi n } is
q,-mixing . In these circumstances more is known, namely that the rate of
convergence in (20 .14) is exponential : There exist positive constants a and
p, p < 1, such that, if
(20 .15)                                    99 n = ap ,
then {fin} is 92-mixing. This is also true of certain process ~n =f(fin) for
which {fin} is a Markov process with infinite state space-it is true, for
example, if {fin} satisfies Doeblin's condition, has one' ergodic class, and is
aperiodic. $
  In some applications, we are presented only with a one-sided (strictly
stationary) sequence
 (20.16)                                  ~1, ~2, . . . .

In such cases we shall say the sequence is q,-mixing if

(20.17)        sup {I P(E2 I Ej) - P(E 2) I : El E _,elk, E2 E -fk+n } < Ran
for positive integers k and n . Given a one-sided sequence (20 .16), we can

t Doob (1953, pp . 172 ff.).
I Doob (1953, pp . 190 ff.).
                                                            Mixing Processes 169

always construct a two-sided sequence (20 .1) with the same finite-dimensional
distributions-the new sequence will in general be defined on a new sample
space (which we can always take to be the product of a doubly infinite
sequence of copies of the real line) . We shall then call (20 .1) the doubly
infinite extension of (20 .16) .
   If (20 .16) is 99-mixing, then, by stationarity, the doubly infinite extension
satisfies (20.4) for E1 E _W k-i and E2 E ~k+n . Since (20.8) is a monotone
class, it follows that the doubly infinite extension is 99-mixing, with the same
99 as before . It is easy to verify the converse : If the extension (20 .1) is
9,-mixing, then the original sequence (20 .16) is T-mixing with the same
function 9, .
   If we prove, for example, that
                                1 n
                               .Jn i=1
where the ~i are interpreted as elements of (20.1), then the result is also true
if they are interpreted as elements of (20 .16), since only finite-dimensional
distributions are involved . All our theorems will be of this kind, and it is
indifferent to the results whether we work with (20 .16) or with (20.1). In
proofs we shall consistently work with (20 .1), which is more convenient
because then the past is an infinite sequence instead of a finite sequence of
changing length .
Example 3.   Let 92 be the unit interval, let 9 consist of the linear Borel
subsets of S2, and let P be Lebesgue measure on R . Suppose
(20.18)       $n((0) = g(wn, wn+ t,    (,O n+m),    n = 1, 2, . . . ,
where w has dyadic expansion w = • w1 w2 . . . and g is some function of
(m + 1)-long sequences of 0's and l's . The sequence {~n} is stationary and
m-dependent . This sequence is of the form (20 .16) and comes under the theory
as developed here because it is possible to construct, as outlined above, a
doubly infinite extension (on some new space) .
Example 4 .  For another example in which the sequence {~n} is one-sided,
take S2 and .4 as in Example 3, let P be Gauss's measure

(20.19)             P(A) = - 1 ' d x ,             A E 9,
                            log 2JAl+x
and take ~,,(w) to be an (w), the nth coefficient in the continued-fraction
expansion of w. The sequence {a1(w), a2(w), . . . } is stationary and 99-mixing
with 99 of the form
(20.20)               99n = a pn,     a > 0,    0 < p < 1tj'

t Levy (1937, Chapter 9) .
170     Dependent Variables


Inequalities for Moments

Suppose is measurable ilk and is measurable .-Wk+n . If                           and are
the indicators of sets, then, by (20.2),
(20.21)                            IE{~?7} - E{~}E{?7}1

is at most (p, n E{~} . We shall require bounds on (20 .21) for random variables
~ and 77 more general than indicators . In all that follows, {~,n} is assumed
stationary and p-mixing unless the contrary is explicitly stated .
LEMMA 1           If ~ is measurable .k . and n is measurable .4llk+ ,m (n > 0),
then

(20 .22) E{1~I r} < oo,           E{1771 3 } < G0,        r, s > 1,      1 + 1 = 1,
                                                                         r    s
implies
(20.23)         IE{~ ,q} - E{~}E{'7}I < 2 e,,,/T E1/r{j~j r} E1/s {111 5} .
Proof. For an understanding of the lemma, consider first two extreme cases .
If q7 n =0, so . that ~ and i are independent, then the inequality (20 .23)
holds because each of its members vanishes . If q9 , = 1, which imposes no
restriction at all, then, by the inequalities of Holder and Minkowski,

      IE{ 77} - E{ }E{~}I = IE{x(77 - E{77})}I
                          < El/r{I ~I r }E {I i7 - E{ 77}Is} < 2E1/r{I ~Ir}E {I77Is} .
                                          i/s                               i/s

  Since we can approximate to ~ and 77 by simple random variables, in
treating the general case we may suppose that
(20 .24)                                   = E i ui 7A=
and
(20.25)                                 77 = Y-;v;IB ;,
where {A i }[{B;}] is a finite decomposition of the sample space S1 into
elements of k [ k+n]' For such random variables, we have, by Holder's
inequality,

       I E{~ i} - E{~} E{'7} I=       uiP(Ai)1/ r P(A ) 1/s       v ;(P(B ; I Ai) - P(B))]
                                                                                      s 1/s

                        <- Ei/r{I~Ir}(I P(Ai) I v,(P(B5 I Ai) - P(B1)) }
                                      i       i
 and hence it suffices to prove
                                                              S
 (20.26)              P(A)     v2(P(B2 I Ai) - P(B3)) < 2sgpsnrE
                  i
                                                                                                 Mixing Processes 171

For each i, Holder's inequality gives

   I v,( ( , I A) - P(B,))
          P   B



                                                                           1/s


                                                                                      IP(B, I A) - P(B,)I
                                    s
                      <     I v,l       I   P(B, I A) - P(B,)I                                                  1/r



Since
                          P(A) I            Iv,l s   IP(B, i A) - P(B,)I < 2E{I ?j is},

(20 .26) will follow if we show that

;20.27)                                     I P(B, I Ai) - P(B,) < 2 ,p n
                                                                       I
                                    ,
colds for each i . If Cz [C,.] is the union of those B; for which P(Bj I A) -
                                            -


P(B;) is positive [nonpositive], then CZ and C2 lie in Jfk+n , and hence

        P(Bj I A) - P(B,)I = [P(Ct I Ai) -                           P(CZ
                                                                            )]



                                                                      + [P(Ci )                 P(Ci I Ai)] < 2 9 n-
                                                                                                                 9




Thus (20 .27) holds, which completes the proof .
  Taking r = 1 and s = oc in Lemma 1 leads formally to this result : If
E{1$1} < oo and P { I > C} = 0 ($ measurable .
                            ri I                    and ?]measurable                   ,Wk



~lf k+n ), then
(20.28)                     IE{~?1} - E{~}E{?7}I < 2cpnE{I $I }C .
The inequality is easily proved directly : It suffices to consider simple random
variables given by (20.24) and (20 .25), where Iv;I < C. Since

           IE{$ l} - E{~}E{'i}I < C I                       I uiI   P(A) I       I
                                                                                     P(Bj
                                                                                            I   A) - P(B,)1
                                    i                                    ,
                  7




(20 .28) follows by (20 .27).
  We shall only need the special case of (20 .28) in which both random
variables are bounded .
LEMMA 2 If ~ is measurable -,Wk ,,, and I I < C1 , and if 27 is measurable
  k+n (n > 0) and 1171 < C 2i
                              then

(20.29)                        I E{~1J} - E{~}E{17}I < 2C1C2(pn •
   Let
(20.30)                                         Sn =       ~ + . . . ++          n

and So = 0 . Let us temporarily abandon the hypothesis that {$ n } is 99-mixing
(retaining the hypothesis of stationarity, however) .
172    Dependent Variables

LEMMA 3          Suppose that E{~0 } = 0 and
                                    00

(20.31)                             J I E{~o$k} I < co .
                                    k=0
Then
                                                   00
(20.32)                         1 E{Sn2 } < 2 1 I E{~o~k} I
                                n              k=o
for all n, and
                                     1 E{Sn2}
(20.33)                                                  a2,
                                     n
where

(20.34)                        a2 = E{~02} + 21 E{4~k} .
                                                        k=1
Proof.      If pk = E { ~ o~k}, then, by stationarity,
                                                    n-1
                             E{S n2 } = npo + 21(n - k)pk ;
                                                    k=1
(20.32) follows immediately and (20.33) follows from
                       1                      2 n-1
                                             1                 I I
                                              00                 00

                 o2 - - E{S.21 < 2 I Pkl + -            I Pkl .
                       n            k=n       n i=1 k=i
  Suppose once more that {fi n } is g)-mixing . If ~o has mean 0 and finite
variance, then, by Lemma 1 with r = s = 2,
(20.35)                         IE{~o4}I < 2ggklE{ 2 }.
If E p nI < oo, then (20 .31) holds, so that the variance of S,, is asymptotically
nag with a2 defined by (20.34) . The quantity a2 may vanish even though ~o
has positive variance . This is true, for example, if ~n = Sn - ' n_l, where the
~ n are independent and identically distributed see (20.10)). The case a = 0
is a degenerate one, to be excluded in most of our theorems .
LEMMA 4           If $0 is bounded by C and E { $ o} = 0, and if E 9'n < co, then
                                    E{Sn 4 } < K4,C 4n 2 ,

 where K4, depends on 99 alone .
Proof.      We shall show that
                                                       2
                               E{S n4 1 < 768C4CI 92i ] n 2 .
                                                aD

 (20 .36)
                                                         Z-o



 If we replace 9'i by (20.7), the series in (20 .36) does not increase ; hence we
 may assume
 (20.37)                       1 = 990 > 99 1 > 99 2 > . . .
                                                                                                  Mixing Processes 173

  By stationarity,

(20 .38)                    E{S n 4} < 4! n           I          IE{$O~j$i+j$i+j+k}I~
where the indices in the sum are constrained by

(20 .39)                       i,j,k>0,                           i+j+k<_n .

By Lemma 2,

(20 .40)                          IE{$O($j$j+j$i+j+k)}I < 2C 4q,
and

(20 .41)                          I E {(SO~i'i+j)'i+j+k}I < 2C 4 9)k-

By Lemma 2 again (and stationarity),

              I   E{($O$i)(~i+j$j+j+k)}j < IE{$O$i}E{$O~k}I + 2C 4 j.
Two further applications of Lemma 2 yield

                         IE{$O$i}I    < 2C2 g7i,                    IE{eO$k}I < 2C 2 gp k ,
inserting these two inequalities into the preceding one, we obtain

(20 .42)             I   E{($O$i)($i+j~i+j+k)}I < 4C49?i9pk + 2C4 TJ.
  By (20 .40), (20 .41), and (20 .42), the summand in (20 .38) does not exceed
4C4 times the minimum of the three quantities

                                     99i,           9'k,            99i 9'k + T j
and hence the sum itself does not exceed 4C4 times

(20 .43)    1 Ti + I qqk + I (99
                             j
                                 i9p k + 9'j) _                                     ggi9qk + 3 1 99i,
           j,kSi          i,j5k             i,k<                             i,x < j          j,kSi
where in each sum the indices obey (20 .39) as well as the restrictions indicated .
  Since qp i < 1,
                                                n      ao                          Go             2
                                  99iTk <                        99iTk < 2nI
                                                                          [  q2i
                          i,kSj                 j=O i,k=O                         i=O         J
Furthermore, by (20 .37),
              n      i                      n
        (pi<I I (pi <2nI(i+1)9'i
  j,k<i    i=O j,k=O    i=O

                                     = 2n       11
                                                u=O v=u
                                                                 9'v < 2n .1
                                                                          00 99, ,1
                                                                            u=O         v=u
                                                                                              9'v < 2n 19Ti
                                                                                                          Ci=0
                                                                                                                  2.



From these two inequalities it follows that (20.43) is at most


                                                      C
                                                            00          2
(20 .44)                                            8n 1 99 i ]
                                                            =0
174   Dependent Variables

                                                                   4
and hence that the sum in (20 .38) is at most 4C times this quantity .
                                       4
Multiplying (20 .44) by 4 ! n • 4C , we arrive at (20 .36).

Functional Central Limit Theorem

Define a random element X1 of D by

(20 .45)             Xn(t, (o) =       1 _ S [nt] (cw),       0 < t < 1.
                                    or J   n

THEOREM 20.1        Suppose that { n} is p-mixing with En 9 9 ni < oo and that
~o has mean 0 and finite variance . Then the series
                                                       00
(20.46)                       a2 = E{$'0 2 } + 2,1. E{~o$k}
                                                      k=1

converges absolutely ; if a2 > 0 and Xn is defined by (20.45), then

(20 .47)                                   Xn - W.

Proof.  That the series (20 .46) converges absolutely follows from (20 .35) .
Suppose .2 > 0. We shall prove (20.47) by an application of Theorem 19 .2,
thus avoiding a separate argument for the central limit theorem .
  We shall prove that {Sn2 /n} is uniformly integrable . If we write E a {U}
as shorthand for the integral of U over the set {U > a}, the condition for
uniform integrability becomes

(20.48)                        lim sup E a{        1n S n2} = 0.
                               «-goo   n


Assuming this condition for the moment, let us see how the rest of the proof
goes through . We must first show that Xn has asymptotically independent
increments, in the sense that (19 .13) implies that the difference (19 .14)
converges to 0 as n --k 0.
   Suppose ui and v; are integers with ul < v 1 < u2 < v2 < . . . < u,. < v,,
and ui - vi-1 > b, i = 2, . . . , r, and suppose that, for i = 1, . . . , r, Ei
lies in emu . It follows from the definition of T -mixing by induction on r that

(20.49)                                        I
                            P((' E) - ' P(Ei ) < r(p(b) .
                              i=1              i=1

Suppose that (19 .13) holds and let Ei be the event {Xn(ti) - Xn (s i) E Hi },
where Hi c- 91. Then Ei lies in _W[nsij+1 and, if 6 is the smallest difference
si - ti-1 , then [nsi] + 1 - [nti_1 ] > [nb], so that, by (20.49), the difference
(19 .14) has modulus at most rgv([n8]) . Since 6 is positive, Xn does have
asymptotically independent increments .
                                                             Mixing Processes 175

  Since X"2(t) < S~nt)/a2[nt], (20 .48) implies that {Xn2(t)} is uniformly
integrable for each t . Certainly, E{Xn(t)} = 0, and Lemma 3 implies that
E{Xn2(t)} --*t . By Theorem 8 .4 (adapted to D) the tightness condition
involving (19 .15) will follow if we prove that, for each positive E, there exist
a A, A > o, and an integer no such that n > no implies


(20 .50)                   P{max I Si I> A,1-n} < 2 .
                              a<n
  Let us set
                                       n
                                Sn = I Ikil .
                                      J=1
Since $0 has a finite second moment, there exists an increasing sequence of
integers mi such that n > mi implies P{I$ol > /-n/i2} < 1/nit . If we define
Pn = i for mi < n < mi+1 (and pn = 1 for n < m1), then pn goes to infinity,
but so slowly that

(20 .51)                    lim nP{Sp ;~ > AV-n} = 0
                            n- 00
for each positive A . We may at the same time choose pn in such a way that
pn<n .
  Given E, choose A so that A > 6 and so that


(20 .52)                       P{ISiI > 201 < 2

for all i, which is possible because of (20 .48) . If


                        Ei = {max IS ;I < 3A, . / < ISiI},
                               7<i
then

                                   _    n-1
  P{max ISiI > 3AJn} < P{ISnj > 2V-n} +iI P(Ei n {ISn - SiI > 2A .Jn}) .


With p = pn, the sum here is at most
   n-p-1                           n-p-1
    I P{IS1 - Si+pl > AV-n} + I P(Ei n {IS . - Si+pl > AV-n})
                                            n-1
                                         + I P{ISn - SiI > AV-n}
                                                              .
                                           i=n-p
Each term in the first and third of these sums is at most P{SP > AJn}, and
we can estimate the second sum by using the fact that Ei E -Wi

   P{max ISiI > 3A,1-n} < P{ISnl > ~. .Jn} + (n + p)P{SP > AV-n}
     i<n
                                 n-p-1
                               + :S P(Ei)[P{ISn - Si+pl >- AV-n} + qqp] .
                                  i=1
176 Dependent Variables

And now (20 .52) and the fact that the E i are disjoint yields

              P{max J Si J   > 32J-n} < 22
From (20 .51) and the fact that p n -~ oo, we conclude that




 obtain
                2<n




 and it follows by (20 .32) that

 (20.56)
                                  if
                                       P{man JS2 > 32j n} <

for large n, and this is (20 .50) except for the two irrelevant factors of 3 .
   It now remains to prove (20 .48) . If I ~o I is bounded by C, then, by Lemma 4,

(20 .53)




   J E{. U(   o)gu(   k)}I
                              E«{ 1 S n2 } < 1 E 1 Sn4} <
                                  n          a { n2
where K. depends on 92 alone . Thus (20.48) holds if ~o is bounded . If ~o is
not bounded, define, for real x and positive u,




and put




(20.54)



(20.55)

By Lemma 1,
              f2L(x) = 0
                         X        if




                               2 99 k
                                         IxI < u,
                                         lxI > u,
                                                                  > 2 / } + 22 + q'P .




                /u(x) = fu(x) - E{fu(~o)}, gu(xW = gu(x) - E{gu( O )}




                                E{n Dnu} < 4C
                                                    + 2nP{SV




                                                       g~`(x)



Then x = fu(x) + gu (x) = fu(x) + gu(x), so that, if Snu = z~ i fu( ;) and
Dnu = X 1 gu ($;), then Sn = Snu + Dnu and hence

                                         Sn2 <2S 2 u + 2Dnu .
   Since fu (~0) is bounded by 2u, it follows by (20.53) that

                                            1
                                         E « - S2nu
                                             n } <
                                                        K,,(2u)'




                                        E{(gu( 0))2} < 2g2 J E{(gu(



                                                        q,k
                                                              a




                                                              J
                                                                  E u 2{ o2 } .

 From (20.54) and the relation Ea{U + V} < 2E j«{U} + 2E{V}, we now


                             E «{n S n2} < 4E4«{ n Snu} + 4E{ n Dnul
                                                                        2




                                                                      KQ,C 4




                                                                        0
                                                                        x
                                                                         a
                                                                                  ,




                                                                                      if
                                                                                      if




                                                                                           ,
                                                                                           lxi < u,
                                                                                           (xI > u,




                                                                                  0)) 2 } = 2cpk~Eu2{   o2},
                                                                                           Mixing Processes     177

and (20.55) and (20.56) lead to

                              EQ{   1 Sn2} < K~[ u'  Eu 2 {~o2 }1
                                    n            a +
for an appropriate K' depending only on 97 . We can achieve (20 .48) by
choosing u so that K(Eu2 {~o } < 28 and then choosing a so that K,',u 4 /a < 28.
This completes the proof of Theorem 20 .1 .
  Under the hypotheses of the theorem we of course have
                                          1_
(20.57)                                      Sn -- N(0, a2)
                                         Jn
if a2 > 0. And if a2 = 0 (50 .57) is equivalent to S,,//n -   . 0 and follows
easily by Chebyshev's inequality and Lemma 3 .t
  It is easy to make up a multivariate version of (20 .57) . If ~n is the random
vector
(20.58)                                 'n   =   (     ;~  1), . . . , n ) ),
                                                                       ~



we can define the notion of 99-mixing just as before . If        oo and if the        Eggn4
                                                                                                <


~(i) have mean 0 and finite variances, it follows by an application of the
Cramer-Wold technique (Theorem 7 .7) to (20 .57) that n               1 k has                       4   En


asymptotically a normal distribution, centered at the origin, with covariances
                                                      00                        00
                          E{poi) o'>} +
(20.59)           aij =                           I E{$(')$(')} + I E{fix )~o')} ,

where the series converge absolutely. The matrix (ai ) may be singular or
nonsingular .
  These results apply to each of the four examples given above . Note that in
Example 1 (p . 167) and in Example 3 (p . 169) the series (20 .46) are finite.
In Example 2, with ~n          n where the transition matrix for {
                                    =   f(%      ),                         is                                fin }


irreducible and aperiodic, the asymptotic variance a2 can be written

                                         a2 = L y, f (u)f (v),
                                                      uv

 where
                                                                                      00


            Yuv   =   buvPu   -     PuPv          Pu       J (PIkI - Pv) + PV I (Pvul - Pu).
                                                           k=1                       k=1



 If the matrix (yuv) annihilates the vector (f (u)), then a 2 = 0.

 f If a2 = 0, it is even possible, by adapting the proof of (20 .50), to show that
                                             max ISi I/V'n IV'-n4
                                                           .0 .
                                             i<n
178   Dependent Variables




Integrals in Place of Sums

Theorem 20.1 has a natural formulation with { n } replaced by a process
in continuous time . Let
(20 .60)                       {vt (co) : - oo < t < oo }

be a stationary stochastic process satisfying
(20.61)                     E{vo } = 0,                   E{vo } < oo .
Suppose that the process (20 .60) is measurable,f so that the integrals
                                               t
(20.62)                               vu(co) du
                                    s     f

are well defined and finite with probability 1 . Let Yn be the random element
of D defined by
                                                                nt
                             Yn(t, w) =             1-               v3(w) ds,
                                                   U.Jn J0

where or will be determined later (Yn , of course, lies in C) . We should like to
prove
(20.63)                                       Yn
                                                    -9
                                                         > W.
  We define {vt} to be q,-mixing if
(20 .64)              1P(Ei r) E2) _ P(El) P(E2 )I < cp(t) P(E1)

holds whenever El lies in the o-field generated by {v. : u < s} and E2 lies in
the a-field generated by {v.u : u > s + t}, where now T(t) is defined for all
positive t. We shall suppose that {v t} is 99-mixing with
                                         00
(20.65)                                       gg 1 (t) dt < oo .
                                     o
Under this assumption and the assumption (20 .61), we shall prove (20.63)
with o (assumed positive) defined by

(20.66)                         a2 = 2 f ~E{vovt} dt.
                                               Jo
  Although we could imitate the arguments used before for discrete time, it
is simpler to reduce the present case to the previous one . If
                                                     i
                                                          Vs(co)
                                 ~z( (O )                             ds,
                                              =J 2-Y
t Doob (1953, p . 62) .
                                                                               Mixing Processes 179


then, by two applications of Fubini's theorem, E { ~o } = 0 and
                                    2
(20.67)       2} < E ~  f 1 IvsI ds   <       ds = E{v 02 } < oo .
                         I
          E{
                                                 E ~J   1vs2
It is not hard to check that (20 .66) and (20 .46) define the same a . Since
(20 .64) implies that {~ n } satisfies (20 .2), and since (20 .65) implies ETl(n) <
 oo (provided 99 has the minimal value consistent with (20 .64)), it follows by
Theorem 20 .1 that, if Xn is defined by (20 .45), then
(20.68)                                  Xn 0 W.

  Now
                                                                           i
                 6n = supt Yn(t) - Xn(t)I
                             I                      <    1 - max                 IvtI dt,
                                                        QJn 1<i<n          i-1
so that
                        P{8n > E} E 1
                                           E2 or2   f jet>ea Vn}_ ~2 dP,
where = f o vsI ds. Since E{~2 } < oo by (20.67), 6, -- 0, and (20.63)
                  I

follows by (20 .68) and Theorem 4 .1 .
   The relation (20.63) persists if n goes to infinity in a continuous manner .
If v t is interpreted as the velocity of a particle at time t, the integral (20 .62)
is the displacement it undergoes during the time interval (s, t) ; (20.63) asserts
that the particle is approximately in Brownian motion .

 Nonstationarity
 Returning to the case of discrete time, let us generalize Theorem 16 .3 by
 showing that in Theorem 20 .1 we may replace P, the probability measure
 governing the k n , by an arbitrary probability measure P 0 absolutely con-
 tinuous with respect to it . Under P 0 the process need not be stationary .
 THEOREM 20 .2      Theorem 20.1 remains valid if P is replaced by an arbitrary
 probability measure P 0 dominated by it .
 Proof.   Define Xn by (20 .45) and X,,' , by
                                                1-
                                 X, (t, w) =
                                               QJ n ,n<i<nt

 where p n -* oo but pn/Jn -* 0 . As in Section 16 (see (16 .10)), we have

                                  Supt I Xn(t) - Xn(t)I --0.
 If E lies in ,Wk ., then, for each A in -9,
            I   P({Xn E A} n E) - P{Xn E A}P(E)I < gq(p n - k) , 0.
180   Dependent Variables

Since this is true for every k, the proof now goes through precisely as the
proof of Theorem 16 .3 .
  In Example 4 (p . 169) we may thus substitute Lebesgue measure for
Gauss's measure .
  The proof of Theorem 17 .2 carries over in exactly the same way
THEOREM 20 .3 If the hypotheses of Theorem 20 .1 are satisfied, if v,,, are
positive-integer-valued random variables such that vn/an -'>. 0, where 0 is a
positive random variable and a n   oo, then (if or > 0) Y„ Z- W, where

                             YY(t, (o) =      1      S[V ())t](co) .
                                           a vn(c)
  If P{~ o E H} > 0, then, by Theorem 20 .2, all our limit theorems persist if
we compute the probabilities conditionally on the event {~o E H}. It is
possible to go further and work with probabilities conditional on an event
{~o = a} . To carry this through, we need another lemma . As usual, we
assume {~j to be 92-mixing .
LEMMA 5 If E2 E _4ff k+n, then
(20.69)                          P{E2 II ilk } - P(E2)1 < cpn

with probability 1 .
Proof. Suppose P{E2 11 _Wk ~} - P(E2) > qqn holds on some set El that
has positive measure and lies in ilk ~ . Integrating over El produces a
contradiction to (20 .2). Thus P{E2 11 .% k ~} - P(E2) < Tn with probability 1 .
The opposite inequality is treated in the same way .
  Let us now suppose that {~ n} is regular in the following sense . In the
first place, we suppose that the ~n generate the a-field -4 (this is really no
restriction) . In the second place, we assume that there exist conditional
probability measures on -4 relative to .4'° ,, . We assume, that is, that there
exists a function P,,(M) such that, for each co in n, P0,( . ) is a probability
measure on -4, and such that, for each E in 9, P.(E) is a version of the
conditional probability P{E II mil° ,,j (and hence is measurable ,W 0 (,j .
This regularity condition holds, for example, if (SZ, -4) is the product of a
doubly infinite sequence of copies of (R', R1) and the ~n are the coordinate
variables .t
 THEOREM 20 .4 Suppose {~n } is regular in the sense described. Under the
 hypotheses of Theorem 20 .1, there exists in -4 a set E*, with P(E*) = 0, such

 t See Loeve (1960, p . 361) .
                                                                        Mixing Processes   181

hat, if co o 0 E*, then the conclusion of this theorem remains valid when P
s replaced by P.O .
'roof. Let S,, = ~1 + - - - + ~,, and define Xn by (20.45). For positive
ategers u and n let Z, 1,, be the random element of D defined by

                                              1-
                          Zun(t) w) =                    1    $i(w)-
                                             OJ n u<i<nt
f
                     bun(CO) =
                                    sup t I Xn(t, ('0) - Zun(t, (0)I,
hen
                                                     U

                            ~un(w)       <      1 - I I ~i(w)
                                             o JYL i=1

.et E0 be the set of co for which ~ i(co) is ± oo for some i; then P(E0) = 0 and,
or each u,
20.70)                     dim 6
                               .n(v) = 0,                    co 0 Eo.
                            n- ao

Vow Xn Z- W by Theorem 20.1, and it follows by (20 .70) and Theorem 4 .1
hat, for each u,
;20.71)                                 Zun * W

is n -* oo . In (20.71) P is the measure governing the ~ n.
   Since P(E0) = 0, we have P,, o(Eo) = 0 for co o outside some exceptional
,et El of P-measure 0 . If F is a closed set in D and Fe = {x : d(x, F) < E}
with d either of the metrics for the Skorohod topology, it follows by (20 .70)
that

;20.72)    lim sup P. o {w : X n(c0) E F} < lim sup P(,o {w : Zun(co) E Fe)
            n- oo                                   n-+ oo

for wo outside El .
  According to Lemma 5, if E E                     then

 20 .73)                       P.O (E) - P(E)I <_ T(u)

for co o outside an exceptional set (of P-measure 0) depending on E. Since
,llu is generated by {~u , u+1 , . . . }, it is generated by a countable subfield .
Since P .O( •) is actually a measure, it follows that (20 .73) holds for all
u > 1 and all E E .,!!u , provided coo lies outside some grand exceptional set
E2. Now {co : Zun (co) E Fe} lies in ,W' ; hence

(20.74)          Pwo{co : Zun(co) E FE} G P{w : Zun(co) E FE} + (p(u)
for coo 0 E2 .
182 Dependent Variables

   If co o 0 E* = E l U E2 , then (20 .72) and (20 .74) both apply, so that

          lim sup Pu,o{w : X n (w) E F} < lim sup P{w : Z.un (w) E FE } + g)(u)
           n-
            * oo                                n-+ co

for each F and each E . Since (20 .71) holds in the sense of P and F E is closed,
the limit superior on the right here is at most P{W E FE }. Letting E - - 0 and
u --> oo, we conclude that

                       lim sup P wo {w : X n(w) E F} < P{ W E F}
                         n~ co

for all closed F if co o 0 E*, which, by Theorem 2 .1, proves the theorem .
  If we have a one-sided sequence ~1 , ~2, . . . , then Theorem 20 .4 still holds
if we compute probabilities conditionally on {$ 1 = a} .


21 .   FUNCTIONS OF MIXING PROCESSES

In this section we shall generalize the results of the preceding one by analyzing
stationary processes {7 n } for which each nn is a function of the entire process
{~n}, which we assume to be stationary and qq-mixing, as before .

Preliminaries

Let f be a measurable mapping from the space of doubly infinite sequences
( . . . , G c-,, oco , a l , . . .) of real numbers into the real line
                             f( . . .,a-1,ao,a1, . . .)ER1 .
Define random variables
(21 .1)    77n = f ( . . . , ~n-1, ~nq ~n+1, - - - ),       n = 0, ± 1, ±2, . . . ,
where ~n occupies the 0th place in the argument off. We shall derive limit
theorems for the process {27 n } . Although the qn must be real valued, the n
may now take values in Rx or even in a general measurable space .
      If the value off depends on only finitely many of the coordinates of its
argument, then {?In} is again T-mixing (with a new function qq), and hence
the theorems of Section 20 apply . (Note that {fi n } is in any case stationary .)
If f effectively involves all the coordinates of its argument, {77 n } need not be
,T-mixing . We shall obtain limit theorems for {fi n } under the assumption
that ?7 n can be closely approximated by functions depending only on finitely
many of the Let
                f, be a measurable mapping from Red+ into R1 . We write the general
                                                           1

point of R21+1 as (oc_ l , . . . , a o , . . . , a,), so that the value off, is in the form
                                 Pa-a, . . . , ao, . . . , a l) .
                                                             Functions of Mixing Processes 183

3ut

21 .2)                   m = fl ( n-l'          ~ n, •          , n+l)

the subscript 1n is a pair, not a product) . The process {Tln} is stationary for
;ach 1 . We shall assume of the function f and the process {cn} that

                            E{no} = 0,          E{no } < oo .

We shall assume further that there exist functions fl such that 27ln (defined
)y (21 .2)) has a finite second moment and such that, if

21 .3)                        vl = v(l) = E{Ino - ,110j2},
:hen
                                         00 1 IV, < oo
                                                         .
                                        l=1
This is the sense in which 77,, is assumed well approximable by functions of
only finitely many of the ~n .
  If, in place of the doubly infinite sequence (20 .1), we are presented with a
one-sided sequence (20 .16), then we must assume in place of (21 .1) that 'r
is given by

(21 .4)                            vln = f( n, n+1, . . . ),

where now f is a real, measurable function of one-sided sequences (a1,
M2 . . . . )'In this case, we take fl to be a measurable mapping from RI into
R1, we define

(21 .5)                           ~ln =fi( n, . .            n+1-1),

and we assume that, if

(21 .6)                              vl = E{In11112},

then Evll converges as before . Let us replace {~n} by its doubly infinite
extension (see the discussion following (20 .16)) . If we rewrite f (al, a2, . . . )
as a function f ( . . . , a_1, ao, al, . . .) effectively involving only the co-
ordinates with positive indices, and similarly for fl, then (21 .1) and (21 .2)
have the same finite-dimensional distributions as (21 .4) and (21 .5) . It follows
that the square root of (21 .3) is summable in 1 and hence that to each limit
theorem for functions of (20 .1) there corresponds a limit theorem for
functions of (20 .16) . As before, therefore, we may confine our attention to
the doubly infinite case .
      Since 7710, as defined by (21 .2), is measurable ,,Wl1, it follows by Jensen's
inequality for conditional expected values' that

              E{Inlo - E{ilo II      l1}12} < E{E{17110 - 71012 II .l l}} = vl .

t Doob (1953) or Billingsley (1965) . In all that follows, we take E{~ 11 "} to be measurable
.F (rather than equal almost everywhere to a function that is measurable F) .
184   Dependent Variables

Therefore, by Minkowski's inequality,
                                                 X1
                            E'{hlo - E{'7o 11            1}I 2 } <- 2v 14 .

Since E2v 1 i converges if Ev ll does, there is no loss of generality in assuming
that

(21 .7)                           771n   = E{rIn 11        n±i} . t
  The following lemma implies that, if 77In is given by (21 .7), then V 1 is
nonincreasing .
LEMMA 1         Let F and 9 be a-fields with .F <-- 9 . If E{~2 } < oc, then
(21 .8)             E{I$ - E{$ II g)121< E{I$ - E{~ II JV}121 .
Proof. The following equalities and inequalities all hold with probability 1 .
If q = ~ - E{~ II 3 }, then $ - E{~ 1191 _ 77 - E{Tj II G', } . Hence it suffices
to prove E{I'j - E{77 II g}I2} < E{j2 }. But

      E {1 77 - E{'7 11911 1 11 91 = E{i12 II ~} - E2{,7 11 9 } < E{q2 II } .
Take expected values .


Functional Central Limit Theorem

Write
(21 .9)                           S n = ~ 1 + . . . + 7/n

and define X n by
(21 .10)                       X n (t, w) =       1 -    S[nt1(to).
                                                Q . /n

THEOREM 21 .1 Suppose that {~ n } is q-mixing with E g?ni < oo and that
the 'q n defined by (21 .1) have mean 0 and finite variance . Suppose further that
there exist random variables of the form (21 .2) such that Ev 1 < oo, where
v 1 is defined by (21 .3). Then the series
                                              00
(21 .11)                      o 2 = E{'7o} + 21  E{r7oi7k}
                                                      k=1

converges absolutely ; if a 2 > 0 and Xn is defined by (21 .10), then
(21 .12)                                   Xn -9* W.


t According to Doob (1953, p. 603), E{1jn 1 lln±i} can be represented in the form (21 .2)
because it is measurable Wn±i . This does not really matter, however : In the proofs we use
only the fact that {T11n} is stationary for each I and the fact that ?)ln is measurable -Wn+i .
                                                                     Functions of Mixing Processes          185


'roof.     We first show that (21 .11) converges absolutely . For each k and i,

E{ '7o77k}I < IE{E{770 II 41tii}E{'7k II           k±2   }}I
                                            + 2E I {IE{77o II_ffz i}I 2 }E1 {I77o - E{770 II                1 2}

                                            + E{I77o - E{770 II gi i}1 2} •
f i = [3k], then, by Lemma 1 of the preceding section,

                                #k±i}}I < 2q. i # E{E2 {770 II
     IE{E{'7o 11 ~lZ i}E{'7k Il ,                                                ? i}} < 2 9'if E{7702 },

and therefore

21 .13)     I E{1]o~ k } I < 2q,,            E{io2 } + 2E_S{1)02}v                      + v `[
                                      3                                          [3])            3]~
3ecause of the assumed convergence of Z 99 n j and Ev li, (21 .11) does converge
absolutely .
  Although it is possible to derive (21 .12) from Theorem 19 .2, it is more
.onvenient to use the results of the preceding section . We first prove

                                          1- S
21 .14)                                          n --9
                                                     -* N(0, 62) .
                                       .Jn


We shall assume, as we may, that 771n is given by (21 .7). Put
;21 .15)                                  bIn = 77n - 771n,
;o that v(1) = E{bin } and E{o ln }               E{ 771n} = 0 . We have
                                                  n              n
                              1_
21 .16)                          Sn =                     +
                                                 ;=1 771 ; 1- 6lig
                                               1
                             .Jn      Vn                             n j n j=1
mnd the idea in proving (21 .14) is to show, by using Theorem 20 .1, that the
first sum on the right in (21 .16) is approximately normal for large n and then
to show that the second sum is small for large 1 .
  First of all
                          E{17710 - E{7710 II dzi}i2} < vi ,
since i > I implies that the left side vanishes, whereas i < 1 implies that it
coincides with E{E2{71 0 - E{770 II          i
                                               i} II .4" 1 }}, which by Jensen's theorem
does not exceed v i . In the argument leading to (21 .13) we may therefore re-
place 770 by 7710 and ?7k by 771k and, using the inequality E {?7 } < E {?70
                                                                                 2 }, con-

clude that I E { 771o 771k} I does not exceed the right side of (21 .13). Therefore the
                                                           00
                                    Q12 =    E {77 2 } + 21 E{ 771o171k}
                                                               k=1
186   Dependent Variables

series converges absolutely and uniformly in 1 ; since it converges termwise to
(21 .11), we have

(21 .17)                                    lim 612 = or e.
                                            I-00

  It is easy to check that, for each 1, {~ 1n } is 99(i)-mixing, where
                                        1                        if   n<21,
                       T(1)(n) =
                                        T(n - 21)                if n > 21 .
The convergence of E (q9(n))l implies that of E (gq( l ) (n))', and it follows by
Theorem 20 .1 that, for each fixed 1,
                                          n     !]
                                   1                       2)
(21 .18)                                 177 1 ;.- N(0, Ql
                                 V     n ,=1
as n -+ oo .
                            .2 ) by (21 .17) ; because of (21 .16) and (21 .18),
  Now N(0, or 12) -:?* N(0, v
the relation (21 .14) will follow by Theorem 4 .2 if we show that
                                                    1      n
(21 .19)                lim lim sup P                             > e} = 0
                        I-00    n~ oo               J   -' o1,
                                                        n ,=1
for each positive e . To this end, we estimate the variance of En 1 S 1j .
    If m denotes the maximum of 1 and i, then, by the definition (21 .15),
6 10 - E{610             6 . 0 . Since v(m) < v(i), we obtain

                            E{1 8 10 - E{bl0 II .%i}I2} < vi .
In the argument leading to (21 .13) we may therefore replace qo by 610 and
1k by S lk ; since E{8 0}
                          < E{n0} by Lemma 1, 1E{a 10 o 1k }1 cannot exceed the
right side of (21 .13) . Therefore the series
                                                           00
                               Tl2 = E{ 6lo} + 21 E 010 6 10
                                                k=1
converges absolutely and uniformly in 1 . Since each term goes to 0 as 1 --* oo,

(21 .20)                                     lim T 12 = 0 .
                                             1-ao
By Lemma 3 of the preceding section applied to {8 ln } (the sequence {b l „}
is not 99-mixing, but the lemma does not require this),
                                                           21
(21 .21)                          lim 1 E{ i 8 1 ;              = Tl2 .
                                 n-o oo n  ,=1

Chebyshev's inequality and (21 .20) now yield (21 .19), which completes the
proof of (21 .14) .
                                                              Functions of Mixing Processes 187

  From the absolute convergence of the series (21 .11), it follows via Lemma
3 of the preceding section (recall once again that this lemma requires only
stationarity-99-mixing is not needed) that

(21 .22)                           1 E{S n2} --~
                                                        a2.
                                   n
  If d.2 = 0, (21 .14) is the same as Sn/Jn -* 0. From now on we assume
that a2 > 0. To prove (21 .12), we establish the convergence of the finite-
dimensional distributions and then tightness. Let pn be positive integers
going to infinity at a rate to be specified later and define

(21 .23)                      Uni = E{Si_2v,~ II Eli 00"1,

and
(21.24)                  Vni = E{Sn - Si+2vn II .
                                                +"j
In these definitions we adopt the conventions that Si_2p„ = 0 if i < 2pn and
Sn - Si+2pn = 0 if i + 2pn > n. We shall often write p in place of p,,.
  By Minkowski's inequality and Lemma 1,
                                              k

           E~{ISk - E{Sk II       k+~}I2} <'I       E              E{271 11 ~6f'_+~}l2}
                                              j=1
                                              k 1
                                           < I v`(k + p - j) .
                                             j=1
If

(21 .25)                           µ(P) _ 1 v2(i),
                                             i=p
then
(21 .26)               E{ISk - E{Sk I          k+m}I 2 } <- 1 2 (p),
and it follows that
                                  Si121
(21 .27)              E{I Uni -           < 2 E{S2pn} + 2 ,u2(pn)
for all i. In the same way we obtain

(21 .28)       E{I Vni - (Sn - Si)I 2} < 2 E{S2pn} + 2,U 2(Pn) .
Since Uni and Vni are measurable Ei~ and          +p , respectively,

(21 .29)  I P{ Uni E H1, Vni E H2} - P{ Uni E Hi} P{ Vni E H2} I < 4p( 2pn)
for all linear Borel sets H1 and H2.
  Consider now the finite-dimensional distributions . From (21 .14) it follows
that
(21 .30)                  Xn(t) - X. (S) -4 Wt - W.,
188    Dependent Variables

We shall prove that
(21 .31)           (XX(t), Xn( 1 ) - Xn(t)) 2 (Wt, W1 - Wt) ;
the argument is easily adapted to cases of dimension exceeding 2. Let p n
go to infinity slowly enough that pjn , 0. Since E{Sk2 } " kc2 by (21 .22),
it follows by the inequality (21 .27) and Chebyshev's inequality that we have
the convergence relation
(21 .32)                        1 - Un,[nt] - X JO -7 0.
                               6Jn
Similarly,

(21 .33)                     1 V            (X n (1) - X n(t)) -4 0,
                           orV n
and (21 .31) will follow if
                       1
                    ( crV -n Un,[nt]'     - Vn,[nt]) .4 (Wt, W1 - Wt) .
                                        QJn
Because of (21 .29), it is enough (Theorem 3.1) to show that there is conver-
gence in distribution in each of the two coordinates here ; but this follows
from (21 .30) by (21 .32) and (21 .33) .
  We turn now to the question of tightness and prove that, for each positive
e, there exists a A . > a such that

(21 .34)                        P{max I Si' > ~ Jn~ <
                                   i<n                       2
for all sufficiently large n. Put
                                                n
                                          Sn
                                                j=1
By the argument leading to (20.51), there is a sequence p n going to infinity
so slowly that, if
(21 .35)                        #n (A) = P{Spn > AJn},
then
(21 .36)                                lim n9n(A) = 0
                                        n~oo
for each positive A.
   Consider the variables (21 .23) and (21 .24) for this choice of pn. With the
definition (21 .35), we have
P{ISi - Unz ) > 2Jn} < P{1S2-2y„ - E{Si-2p . II # > 2a~n} .(2A),
                                                           + #
so that, by (21 .26),
                                                      4f~2(Pn)   ,Q
(21 .37)             P{IU ni - Si d >_ AJn} <                  + NA)n(2~
                                                        ~2n
                                                                 Functions of Mixing Processes 189

for all i. Similarly,
                                                                 4fz2(Pn)
(21 .38)           P{ I Vni - (Sn - Si)   I>          n}-<
                                                                   A2n
                                                                          + flnGA) .

  By (21 .14) and (21 .22) it follows via Theorem 5.4 that the variables Sn2/n
are uniformly integrable . Therefore there exists a A > a such that

(21 .39)                          P{ISkI > AJk} < X12
                                                                 /l

for all k . Fix such a 2 . By (21 .37) ,

                                                                 > 5A'/n}
(21 .40)    P{max I Si I > 6AJn} < P{max I Uni l
              i<n                           :<n
                                                                              ~
                                                                        + 4       12 (Pn) +
                                                                                              ni9n(2A).
                                                                                   A
  Consider the sets
                          Ei = {max IUn,I < 5~.Jn < IU,ail} •
                                  j <i
We have

                                         < P{ISn I > A,/n}
                              5A1/n}
(21 .41)    P{max I Uni l >
                  i<n
                                                        n-1
                                                      + i=1
                                                        :E P(E j n {ISn - U ni l >- 4A Jn}) .
Since
              I   Sn - Unil < ISn - Si - Vnil + I Vnil + ISi - Unil,
the ith summand in (21 .41) is at most

(21 .42)    P{IS n - Si - Vnil > AJn}

                           + P(Ej n {I Vni l > 2A-,/n}) + P{ISi - Unil > AJn} .
Since Ei lies in -g i - 11 and Vni is measurable -llz+p ,

        P(Ej n {I Vnil >_ 2AJn}) < P(Ei)P{I Vnil >_ 2AJn} + P(E2) 99(2pn) .

By (21 .38), P{I Vnil >_ 2AJn} < P{I Sn-il >_ AJn - i} + 4 u2(pn)/A2n +#n(-211),
so that

   P(Ej n { I Vni I >- 2A,/ n}) < 4/ZA2nn) + ~n(2A)

                                   + P(E)P{       I
                                                      Sn_i
                                                             I   > AJn - i} + P(E) 9q(2Pn) .
Using this estimate for the middle term in (21 .42) and the estimates (21 .37)
and (21 .38) for the other two, we see that the ith summand in (21 .41) is at
190    Dependent Variables

most
                                                                                  2
                                                                            12y 2(pn) +
           P(Ei)P{IS n_z I > AV n - i} + P(Ei)99(2pn) +                                      3Nn(2 A).


Therefore, by (21 .39) and the disjointness of the Ei ,
                                                                            2
                                                                         122(p
                                                                           .)  +
           P max I U ni ) > 5AV n < 2i + T(2pn) +                                         3 n$n(2A) .
            ~i<n

The last three terms on the right here go to 0 (see (21 .25) and (21 .36)), and
it follows by (21 .40) that

                                   P j max I Si 1 > 61~n)
                                     l i<n
                                                                    < 32
for all sufficiently large n, which proves (21 .34) .
  This completes the proof of Theorem 21 .1 . In particular, we have the
central limit theorem (21 .14), valid even if 62 vanishes, and this result has a
multivariate version . Suppose
(21 .43)                              ~n = (~ nl), . . . , li lt )),
where each 77ni ) is a function
                               (i) (i)/
                             ?7n - fl . . . , ~ n-1i ~n, ~n+1i . . .)

with mean 0 and finite variance . Suppose these random variables have
approximations
                             cn _ Aci)(                                           .
                         171n         l           n-l~      ~n,          ~n+d)

If E l vAi) < oo for each i, where

                                    vt(i) = E{~~I0          - 7lio i 2 }"
then, since
                              T                    T                T
                       E+{         ai~o - ~ oci~ io            <         «i I   vaI(i),
                             i=1                  i=1


any linear combination of the components of 77n satisfies the hypotheses of
Theorem 21 .1, so that the Cramer-Wold method applies . It follows that
n-1 En 1 ?Ik is asymptotically normal ; the covariances for the limit are

                                             00                     W
(21 .44)              E{n0 ) lo' ) } ~-            E{~Iok )} + E{'7(')k )7 lo' )},
                                          k=1                      k=1

where the series converge absolutely .
                                                                        Functions of Mixing Processes 191


Applications

Example 1 .  Let the ~n be independent and identically distributed with
mean 0 and variance 1 and define
                                  00
                                         u n -               ai5 n+i'
                                                 i=-oo
where we assume E i a i 2 < oo . The random variable (21 .7) is
                                                       i
                                         ?)in = L ai~n+i
                                    i=-i
in this case, and the requirement Ev i l < oc becomes
                                                             i
                                                      a i2       < 00 .
                                   l=1        ~iI>l

Example 2 .     Let (SZ, -4, P) be the unit interval with Lebesgue measure, as
in Example 3 of the preceding section (p . 169), and let ~ n (w) be the nth
digit in the dyadic expansion of w (n > 1) . Then {~1 , ~2, . . .} is stationary
and independent. A random variable ?7 n of the form (21 .4) can be regarded as
a function ?7 n (w) = f(Tn -1 w), where f is a function on the unit interval and
T is the transformation Tw = 2w (mod 1) . Suppose that f o f(CO)2 dw is
finite and that Ev i i converges, where
                                          1
                           Vi =Jo !f( (O) -fi( (O)l 2 do)

and each f, depends on w only through the first l digits ~ 1(w), . . . , ~ i ((O) of
its dyadic expansion . It then follows by Theorem 21 .1 that, if µ = fo f (co) dw,
                               n
(21 .45)                1 _ I f (V(o) - µn                          -9) N(0, a2 )
                          n ( i=1          )

for an appropriate asymptotic variance U2 . And there is the corresponding
functional central limit theorem . If there exist such functions f, at all, they
may be taken to be

                             f
                                 i/2 1
(21 .46)        fl(w) = 2'                    f (s) ds, w E
                                 i-1)/2 1                                  \ - 2i   2 l~
(see (21 .7)) .
  If f(w) = I(o t) (w) and fi is defined by (21 .46), then v i < 2 -1 , so that
(21 .45) holds (,u = t) . In this case E 1 f (Tiw) is the number of i, 1 < i < n,
for which TZ -1w < t . It t is a dyadic rational, f coincides with fi for some 1,
and (21 .45) follows by the central limit theorem for (1 - 1)-dependent
variables. If t is not a dyadic rational, f(w) involves the entire expansion
of w.
192   Dependent Variables

  If f is continuous and fi is defined by (21 .46), then v i < 4wf 2 (2- l), where
wf (8) is the modulus of continuity off. Therefore (21 .45) is true if E l wf (2 - l)
converges, a condition which holds, for example, if f satisfies a uniform
Holder condition of some positive order :
(21 .47)        I f(w) - f((o')I < K I w - w'I B,       K, 0 > 0 .
For example, we may take f(w) = w, in which case 77 n (w) = Tn(w) . (It can
be verified that this last sequence {%, 772 , . . . } is not p-mixing for any q,
going to 0-to know Tnw is to know Tn+i(o, Tn+ 2w . . . . exactly .)

Example 3 . Consider the (S1, -4, P) and {a 1 (cw), a 2 (w), . . . } of Example 4
of the preceding section . If T1 denotes the continued-fraction transformation

(21 .48)                                   T, 0-) = 1 - 1
                                                    w w
and if a(w) = [1/w], then a n (w) = a(T1 - la)), n > 1 .t As in the preceding
example, (21 .4) can be regarded as a function ' n (w) f(T1-1 w) with f
defined over the unit interval . And
                             n
                         1
                            I f (Tl i w) - un                    ~ N(0, a2)
                        .Jn i=1
will hold if
                                           =      1 f'f(w) dw
                                                log 2 1 + w
if

(21 .49)
                               log 2
                                       1        f       f(w)2 dco < oo,
                                                        1 + w
and if Ev 1 converges, where

(21 .50)                    V, =
                            v        1      1 (f(w) -fa(w))2 dw
                                   log 2 fo        1 + w
and where each fi depends on w only through its first 1 partial quotients
a 1 (w), . . . , a l (w). Since 1 < 1 + w < 2 (21 .49) is equivalent to
                                                1
                                           jf(w) 2 dw < oo

and the requirement Ev i l < oo is unaffected if we define v l by

                               v=  l
                                                    1

                                               fo I f(w) -f(w)1 2 do-)
instead of by (21 .50) .

t See Section 4 of Billingsley (1965) for this and the other facts about T 1 used here .
                                                            Functions of Mixing Processes   193

  Since a set {oj : ai(co) = a i , 1 < i < 1} is an interval of length at most
2-1+1, we may, for the same reasons as in Example 2 preceding, take f(w) to
be I(a t) (w) or to be any function satisfying a Holder condition (21 .47).
For another example, note that, since'
                                                           < 1 ,
                                  log w - log pi(u')
                                                             21-2
                                                  ql(w)
where p 1((o)/q 1(w) is the Ith convergent, we may also take f((O) _ -log w ;
for this f, ,u = 7r2/(12 log 2). Moreover,
                                        n-1
(21 .51)            log q .((o) _ -           log T1k w +40,        101<1,
                                        k=0
and it follows that

(21 .52)
                        V
                         1  n
                                (log qn(w) -
                                                   n7r
                                                       2 ) ~ N(0, a2)
                                                 12 log 2
for an appropriate positive a2.
  The functional versions of these limit theorems are easily written out .


Diophantine Approximation

These results lead to limit theorems connected with Diophantine approxi-
mation. A fraction p/q is a best approximation to w if it minimizes the form
(21 .53)                                  Iq' •w -p'I
over fractions p'/q' with denominators q' not exceeding q. The successive
best approximations to w are $ just the convergents p .(w)/qn(w), n = 1, 2, . . . ,
and so the value of the form (21 .53) for the nth in the series of best approxi-
mations is
(21 .54)                         dn.(w) = I q .(w) - (o - pn(w)1
Since §
(21 .55)                    1-log dn(w) - log q,n+1 (w)I < log 2,
(21 .52) implies
                                                       2
(21 .56)                1_(-log d,,(w) -
                       ~n
                                                    n7r      -~-~ N(0,   v ).
                                                  12 log 2 I

t Billingsley (1965, p . 42) .
1 See Khinchine (1961) .
§ See (4 .6) on p . 42 of Billingsley (1965) .
194 Dependent Variables


  This limit theorem has a functional form . From (21 .51) and Theorem 4 .1
it follows that, if Yn is the random element of D defined by
                                                                             2
                    Yn (t, (0) =             log q[nt](w) -
                                   61-                                  1210
                                                                          log 2)
(with the same or as in (20.52)), then Y,,                      W. Let

                                   1                                     [ntl7r2
                  Z n(t, w) = a                  log d[nt](w) -
                            n -                 12 log 2)
Now (21 .55) implies a functional central limit theorem corresponding to
(21 .56)
(21 .57)                                    Z n ~ W.

  From (21 .57) we can derive an arc sine law for best approximations . By
(21 .56), k -1 log dk       V2/ (12 log 2) (it can be shown that there is convergence
with probability 1), so that the measure of discrepancy dk (w) has normal
order e-kn 2 /(12 log 2)_ Let us say that the kth best approximation p k (w)/q k (w)
is "superior" if
                                                         2
                                d k (w) < e -k r /(12 log 2)

and "inferior" otherwise . If 6 n (w) is the fraction of superior ones among the
convergents
                                                             Pn(w)
(21 .58)                           P1(w)
                                                 .
                                                     '
                                             '
                                   q1((o)                    qn(w) ,

then, by (21 .57) and (11 .26),
                                       2
                   Pte" < a} -~             arc sin Ja,                0 < a < 1.
                                       IT

For example, if n is large and if p n (w)/q n (w) is superior, then the odds are
approximately even that more than 85 per cent of the convergents (21 .58)
are also superior.

Nonstationarity

If X,, is defined by
                          X (t, w) =
                           I                   1 - E{S[nt] II 4 P 1,
                                             Q.Jn

 where pn -* oo but p n /s/n -* 0, if Xn is defined by (21 .10), and if
                               S n = Sup t I Xn(t) - Xn(t)!,
                                                       Empirical Distribution Functions       195

then
                                       n
                                  1
                        an <                1 ?]j - E{ ,1 ; 1 -W'11
                                                                p   .
                                 .J n j=1                             no
By Minkowski's inequality and stationarity,
                     Dn 1
  E-T{6 .21 < 6J1 n IE 2
                            {l'7' -E {'7'jj -l P}I 2 }


                                                +     1-   I Ei{1?70 - E{
                                                            00



                                                    6 J n l=1
                                                                            770 ll
                                                                                     _,W l}I 2 .
                                                                                        °°    }


If Evl1 < co, then by Lemma 1 and the choice of p n , E{8 n 2} --~ 0. By the
same arguments as before, therefore, Theorems 20.2 and 20 .3 carry over to
processes {,7n} . It follows, for example, that we may replace Gauss's measure
by Lebesgue measure in the applications to Diophantine approximations .
  Theorem 20 .4, however, does not carry over . To see this, consider the
process {$ n } of Example 2 of this section (p . 191) and put 77n(w) _
Ek n ~k(w)/21-n+1 . Although E 1 27 j (w) is asymptotically normal (when
properly normalized), this cannot be true if the probabilities are computed
conditionally on ?7 i(co) : Since 77 i (w) = co it follows that, if ?7 i (w) =
a (0 < a < 1), then the conditional distribution of E 1 q j(w) is a unit mass
at Eni_1
Remarks . The results of this and the preceding section, which are new, extend those in
Billingsley (1956 and 1962) . Central limit theorems under the hypotheses of Theorems
20.1 and 21 .1 have been proved by Ibragimov (1962) ; see his paper for references to the
earlier literature (see also Doeblin (1940), Fortet (1940), and Kac (1946)) .



22 . EMPIRICAL DISTRIBUTION FUNCTIONS


We shall analyze the empirical distribution functions for sequences {fin } and
{yin} of the kind discussed in the preceding two sections .


ep-Mixing Processes

Throughout the section, {~ n } is stationary and g)-mixing . We shall need the
following estimate, related to Lemma 4 of Section 20 .

LEMMA 1         Suppose that Ie0i < 1 with probability 1, that E{~0} = 0, and
that Ek 2 g7k' < co . Then
                                                                 00

(22.1)       E{Sn4 } :5:,288[n 2 E2{~02} + - nE{$02}]        ~(k + 1)2q,k       2.
                                                           [ k=0
196    Dependent Variables

Proof.    We have
(22.2)                     E {Sn4 } G 4 ! n I. I E { ~o ~i ~i+i ~i+i+k } I

with the indices constrained by
(22 .3)                          i,j,k>0,           i+j+k<n .
Write p in place of E{%2 }. We first prove these three inequalities
(22 .4)              I   E{~o(~i~i+jai+i+k)}I < 299 JP,
(22 .5)                  E {($0 i$i+7)$i+j+k}I         2 9gk 1P,
(22 .6)            I E MO$iMi+i$i+i+k)}I <_ 4 9~i'~k p2 + 2 999-21P .

  By Lemma 1 of Section 20, the left member of (22 .4) is at most

                                  2 99 i~E~{cot } E1 { i 2S2+7SZ+7+k}
since I~nI < 1, (22 .4) follows. A similar argument leads to (22 .5) .
   By another application of Lemma 1 of Section 20, the left member of
(22 .6) is at most
                                                               02 i
(22.7)              IE{$O$i}E{$O~k}I + 299,'E-ff{                     2 }E~{   2 k }.

Two further applications of the same lemma give

                          IE{~Oyi}I < 29'i lp, IE{$oak}I <_ 29'k-1p
                                                            ;

from ISnI < 1 it follows that (22 .7) is at most 4 9' J 9pk~p2 + 292 5 p, which
proves (22.6).
  Now (22 .2) and the three inequalities just proved imply

                   E{Sn4 1 < 4! 4n (p 2 1 9'i~9'k I + 3P
                                       i,k<i             i,k<i
                                                               99 i~)      I
where the indices also obey (22 .3) . Since
                                      n ao              00                           2
                            99i 99k < I 19~i 9 9k S 2n [ 92k
                    i,k<i                3=Oi,k=O                        k=O     ]
and

                         7,k<i
                                        1192i <_
                                        i=0 9,k=0
                                                         I (k + 1) 2 92k+,
                                                         k=0
(22 .1) isproved.
           proved
      Suppose now that
                                         0 < ~ n ( (O) < 1 ;

let Fn (t, w) be the empirical distribution function for ~4 (w), . . . ,                 n (w), and
                                                            Empirical Distribution Functions 197

define Y,, by
(22 .8)                Y„(t, cc)) _ I n(Fn (t, w) - F(t)),

where F is the distribution function for ~ o, Let
(22 .9)                         gt(a) = I,,) t,(«) - F(t).

THEOREM 22.1         Suppose {~,} is q-mixing with En 247n~ < oo, and suppose
~o has a continuous distribution function F on [0, 1] . Then

(22 .10)                                Yn
                                             -9
                                                  >-   Y,

where Yn is defined by (22.8) and Y is the Gaussian random function specified
by
(22 .11)                              E{Y(t)} = 0

and

(22 .12)   E{Y(s)Y(t)} = E{g3(%o)gt(~o)}
                                              Go                            Go


                                          + k=1
                                             I E{gs(~o)gt(~k)} + I E{g.,(~k)gt($o)} .
                                                                            k=1

These series converge absolutely and P{Y E C} = 1 .

Proof.  We first show that we may confine our attention to the case in
which ~o is uniformly distributed over [0, 1] . Now {F(e n)} is 99-mixing,
and, since F is continuous, F(~ o) is uniformly distributed . If F, (t, w) is the
empirical distribution function for F(~1 (w)), . . . , F(~n(cw)), and if
                                Yn(t) = Jn(Fn(t, w) - t),
then, with probability 1,
                                     Yn(F(t)) = Yn(t)
for all t. If the theorem is true in the uniform case, then Y, Y', where
 Y' is a Gaussian random function with E{Y'(t)} = 0 and (write gt(a) _
I[o t](a) - t)

    E{Y'(s)Y'(t)} = E{gs(F(%o))gt(F(~o))}
                          00                                       00


                      +         E{gs(F( o))gt(F( k))} +                 E{gs(F(k))gt (F(o))},
                          k=1                                     k=1
 and where P{ Y' E C} = 1 . Define h : D -~ D by (hx)(t) = x(F(t)) and let
 Y = h(Y') . Since C (-- h-1C, P{YE C} = 1 ; furthermore, Y is Gaussian
 and satisfies (22 .11) and (22.12) . Since h is continuous on C, it follows by
 Corollary 1 to Theorem 5.1 that Y,, ?-* Y' implies Yn --24 Y. Thus we need
 only treat the uniform case .
198   Dependent Variables

  Assume then that ~o is uniformly distributed, and take F(t) = t in (22.9).
Since {g t (~,Jj is 99-mixing and
                                                n
                                   YY(t) = 1 - G gt(~i)'
                                           .Jn i=1

it follows by Theorem 20 .1 that Y,,,(t) is asymptotically normal . From the
multivariate version of this result, it follows that, for each k-tuple t 1 , . . . , tk,
the distribution of (Yn (t 1), . . . , YY (tk)) approaches a normal distribution
centered at the origin ; by (20 .59), the covariances of these limit distributions
are those specified by (22 .12) for Y. It follows also from Theorem 20 .1 that
the series in (22 .12) are absolutely convergent .
   We shall show that for each positive s and q there exists a 6, 0 < 6 < 1,
such that
(22.13)                            P{w(YY , S) > s} < 77
for all sufficiently large n. It will follow by Theorem 15 .5 that {Yn} is tight
and that, if Y is taken as the limit in distribution of some subsequence
{ Y,.,-}, then P { Y E C} = 1, Y n -2* Y, and Y is Gaussian and satisfies (22 .11)
and (22.12) . This will complete the proof .
   Fix s and ?] . Since ~ o is uniformly distributed,
                              Ef lgt(~o) - gs(~0)I 2 } <- I t - sI .
By Lemma 1 applied to {gt (~) - gs(~n)},
                 n                         4)
                      (gt(~i) - gs(~i))         <K1(n 2 It-s1 2 +nIt-sl),
             E~ i-1
 where K1 depends on 99 alone . Therefore, if
                                          s
 (22 .14)                                       < t - s,
                                          n
 we have (assume e < 1)
                                                       2K1 (t
 (22 .15)                 E{IYY(t) - y(S)1 4 } <              - s)2.
                                                        s
   Assume now that p is a number satisfying s/n < p, and consider the
 random variables
              Yn(s + ip) - Yn (s + (i - 1)p),                 i = 1, 2, . . . , m,
 where m is a positive integer . By (22.15) and Theorem 12 .2,

 (22.16)             P{max Yn (s + ip) - y(S) I > ~} < K
                              I                         '4 m2P2 ,
                        i<m                                        sh

 where K2 = 2K4 2 K1 depends on 99 alone.
                                                          Empirical Distribution Functions 199

  We next show that
;22 .17)                                                           _
        Yn(t) - YY(s)I < I Yn(s + p) - Yn(s)I + p\'n,                           s < t < S + p.

Faking s = 0 for notational simplicity, we see that (22 .17) is equivalent to

                  UU(t) - ntI < I Un(p) - npl + np,                    0 < t <P,

xhere Un (t) is the number among                  ~i, . . . , ~n   that satisfy ~i < t . But
    Un (t)-nt< Un (p)-nt= Un(p)-np+n(p-t)< IUn(p) - npi+np
ind nt - Un (t) < nt < I Un (p) - npl + np .
  Now (22 .17) implies
1
 22.18)   sup I YY(t) - YY(s) I < 3 max I Yn(s + ip) - Yn(s) I + p Jn .
              S<t<S+mD                          ti<m
[f
                                         s
;22 .19)                                     < p < E
                                         n          .Jn
.hen (22 .16) applies, and it follows by (22 .18) that

;22.20)              P      sup      I YY(t) - YY(s)I > 4s} < K2 m 2 p 2 .
                         {s<t<s+mv                                     E

Choose 8 so that K2610< ri . From (22.20) it will follow that

;22.21)                    P j sup I YY(t) - YY(s) I > 4e) < 7S,
                            lS<t<S+a

provided there exist a p and an integer m such that (22.19) holds and mp = 6 .
But this is equivalent to the existence of an integer m with (8le)Jn < m <
(ale)n, which is true for all sufficiently large n.
  For given e and q, therefore, there exists a 6 such that (22 .21) holds (for
ill s < 1 and with s + 6 replaced by 1 if it exceeds 1) when n is large enough.
But this implies (see the corollary to Theorem 8 .3) that
                                  P{w(Y n , 6) > 12e} < ?7
    For large n, which is (22 .13) except for the factor 12 .
      Thus Yn -~4 Y. The assumption that F is continuous serves only to simplify
    the proof. It can be avoided by using Theorem 12 .5 where we have used
    Theorem 12 .2. Of course, Y will not lie in C with probability 1 if F has
    liscontinuities .

    Functions of 99-Mixing Processes
    Consider now a function
    (22.22)                  7fn = f ( . . . , ~ n-i, ~n, ~n+i,            .)
200     Dependent Variables


of a q7-mixing process, as in the preceding section . We shall assume as before
that ?7,,, has close approximations
(22 .23)                      ?71n = fl( n -1, . . . , fin          ~ n+1)

depending on only finitely many of the ~i . Again we may work with one-
sided sequences just as well .
  Suppose that
                               0 < 77 n (w) < 1,
and define Y, n by (22 .8), where now F denotes the distribution function of
no and F,,(t, w) denotes the empirical distribution of r7 i ( w), . . . , % (Co) . In
addition to a restriction on the magnitude of q9,,,, we shall need, in analyzing
the asymptotic distribution of Y, an assumption the effect of which is to
ensure that the empirical distribution F1n(t, w) of ?1,,((o), . . . , i71,(w) agrees
with F,,(t, w) for points t in a set H1 which rapidly becomes dense in [0, 1]
as 1-> co .
  We shall suppose in the first place that
                                        0 < y71
                                            .((0) < 1 .
We shall suppose in the second place that there exist sets H1 in [0, 1 ] with
these three properties
   (i) If t c- H1 , then
(22.24)                               I[o,t ]('1o) = I[o,t](?71o)
with probability 1 .
      (ii) If
(22.25)                                J 1 = {F(t) : t c- H 1},
then J1 is a p 1 -net in [0, 1], where pi goes to 0 exponentially : There exist
positive A and p, p < 1, such that

(22.26)                      pl < Ap l,       l = 1, 2
    (iii) We have H1 C H1+1 .
    From (i) it follows that, if t c H1 , then F1n(t, w) = F,n (t, w) with probability
 1 . Define gt by (22 .9), as before.
 THEOREM 22 .2        Suppose that { n} is T-mixing with In 299", < oo, that
 ?lo has a continuous distribution function F on [0, 1], and that there exist sets
 H, with the three properties just described . Then
                                              Yn ~ Y,

 where Y is the Gaussian random function specified by

 (22.27)                                    E { Y(t)} = 0
                                                            Empirical Distribution Functions 201

znd
22 .28)   E{Y(s)Y(t)} = E{gs(rlo)gt(rlo)}
                                                    CO                        00


                                                I E{gs(?7o)gt(r1k)} + k=1
                                             + k=1                     I E{gs(?7k)gt( 70)}'  1



The series converge absolutely and P{Y E C} = 1 .
  Before proving the theorem, we give two examples of its application .
Example 1 .    Let (S1, 4, P) be the unit interval with Lebesgue measure and
et ~ n (co) be the nth digit in the dyadic expansion of w, as in Example 2 of the
preceding section (p . 191) . If To) = 2w (mod 1) and ?j n (w) = T' 'w, then
Y7 n has the form (22 .22) (one-sided version) . The 77 . are uniformly distributed :


  Define ?7l n by
                     i
          n1n(w) =            1   if   1        1   < 77 n((0) <          ,   1 < i < 2 t.
                         21                21                        2l

Then m 0 (w) is a function of the first 1 digits of w and hence q ln has the
form (22 .23) (one-sided version) . If t has the form i/2l, then (22 .24) holds.
Since F is the identity, we may take
                                     1        2l - 1 l
                          HL=JI={0,21, . . .,
                                                                21

which is a 2-1 -net in [0, 1] . Thus {n n } satisfies the hypotheses of the theorem .
Example 2 .     Let (Q, .4, P) be the unit interval with Gauss's measure
(20 .19), as in Example 3 of the preceding section (p . 192) . Let ~ n (w) = a n ((O)
be the nth partial quotient in the continued-fraction expansion of w, and
let q n (w) = Tl- lw, where Tl is the continued-fraction transformation
(21 .48) . Then 77 n has the form (22 .22) (one-sided version), and the distribution
function of the n,, is
                                 1        dx = log (1 + t)
                        F(t) =
                               log 2 J 01
                                        t  + x        log 2
   Define 'ql n (w) as the Ith convergent of T171 -1 -a) :
                                                    Pa( Ti-l wl'
                                  ~ln( w )      =        n-1 U~1
                                                    ql(T       l1

Then m71n has the form (22 .23) (one-sided version). Let H, be the set of all
Ith order convergents (for all w) . Now the unit interval splits into countably
many subintervals' having the elements of H, as endpoints ; r7 i (w) = w

t The fundamental intervals of rank 1-see Billingsley (1965, p. 42) .
202    Dependent Variables


and ?I11((o) = p 1 (w)/q 1(w) lie in the same subinterval, so that (22 .24) holds
for t in H 1. Now the subintervals have length at most 2 -1 +1. Since the
derivative of F is everywhere less than or equal to 1 /log 2, the set (22 .25)
is a p 1-net in [0, 1] with
                                           2 1
                                    P1
                                         log 2 2 1
Thus {71 n } satisfies the hypotheses of the theorem .
Proof of Theorem 22 .2. As in the proof of Theorem 22 .1, we first show that
it suffices to consider the case in which qo is uniformly distributed on [0, 1] .
Let 17' = F(71,,,) and ?1',, = F(,q 1 ,n). Then qo is uniformly distributed and,
if t lies in the set J1 defined by (22 .25), then
                                I[o,t](7]o) = I[o,t7(7Iho)
with probability 1 . If Hi = Ji = J1 , then { n n} and {~ 1n} satisfy the hypotheses
of the theorem relative to Hi and Ji . If the result is true in the uniform case,
then, by the opening arguments of the preceding proof, it is true in general .
    Assume then that n o is uniformly distributed ; take F(t) = t in (22.9) ;
assume that, if t E H1 , then (22 .24) holds with probability 1 ; assume
H 1 (-- H1+ 1i and, finally, assume that H 1 is a p 1 -net in [0, 1], where p1
satisfies (22 .26) . To include 0 and 1 in H 1 involves no loss of generality . '
    From these assumptions, it follows that 1770 - ?7 10        2p, with probability
                                                                  1   <


 1 . Therefore, whatever t may be,
      P{ 7l0<t<T10}+P{2710<t< 7l0}
                        < P{t - 2p 1 < ?1 0 < t} + P{t < 210 < t + 2pt},
so that, since 270 is uniformly distributed,
                                             7
                             E{Igt(?l0) - gt( 11o)I 2} < 4 p1 .
Since gt(i11o) is a function of               alone, and since (22 .26) implies
Ep1l < oo, it follows by Theorem 21 .1 that
                                           n
                              Yn(t) = 1- I gt(,Ii)
                                      .Jn i=1
is asymptotically normal . The multivariate version of this result (see (21 .43)
and (21 .44)) shows, just as the multivariate version of Theorem 20 .1 did in
the preceding proof, that the finite-dimensional distributions of Y,n converge
to those specified for Y and that the series in (22 .28) converge absolutely .
  Again as in the preceding proof, it now suffices to produce, given positive
e and ?7, a 6, 0 < 6 < 1, such that
(22 .29)                    ; P{w( Y., 6) > s} < ?7
for all large n.
                                                                  Empirical Distribution Functions 203

  If s and t both lie in Hl, then the process

           gt(nn) - g.'(mn) = gAtn) - g3(n1 ),                          n = 0, ±1, ±2, . . .

s TM-mixing with
                                            1                     if n < 21,
                           9,(ti)(n)
                                            T(n - 21)             if n > 21 .

since q0 is uniformly distributed, and since

                                   00
                                         (k + 1)2[g~k )J = O(l3),
                                  k=0
_,emma 1 implies

                 n                              4)
                       (gt(7li) - gs(m))              <K316(n2It-SI2+nIt-SI),
            Et
                 i=1
vhere K3 depends on (p' alone . Therefore

                                                           £ < t - s
:22 .30)                               S, t c- Hz,
                                                           n
mply (assume E < 1)

:22 .31)                P{I            Yn(t)
                                         (S) I > -
                                                 2} < Ins
                                                      2K3 4 (t - s)2 .

  Choose and fix an integer m such that

                                        1
;22 .32)                       Pmv S 22v+2 '                v = 1, 2, . . . ,


which is possible because of (22 .26) . We shall inductively define sets

                                               (v) (v)           (v)
                                         Lv : t0 , t1 , . . . , t2v

for v > 0 . The sets LV will be such that

                             0 = t0(v) < t1(V) < . . . < t2v) = 1 ;
such that
                                                 t
                                                     i(v) E Hmv
and
                                        (v) -- ti
                                                (V-1)
                                       t2i            ,
and such that
                                                                    1           1
(22 .33)
                        2"+1 1+21)) <a„<w<2v+1 (3-2v)
where
                  oc„ = min (t?v)                      < max (t(v) - t(V) ) = w
                       1<i<2v                            1<i<2v
204    Dependent Variables

  If to ) = 0 and t'0) = 1, then L 0 has these properties . Suppose Lo , . . . , Lv
already constructed so as to have these properties . Define tea+1) = ti°' ) , and
take as tea+1) any point of H,,,, (v+ 1) satisfying
                                  (v+1) - 1 (v)   t(v)
                                It 2i+1   2( ti T
                                              < Pm(v+1) ;
such a point exists because Hm(v+1 ) is a pm(v+1)-net in [0, 1] . From (22 .32) it
follows that (22 .33) holds also with v replaced by v + 1 . Thus L„+1 satisfies
the requirements .
  Fix a number 0 such that
(22 .34)                                       2 <         00 = 04 < 1 .
Suppose E, n, and v satisfy
                                          E <          1      < 1           < E
(22 .35)                              n - 2 v+1 - 2v-1 - /                         n
which, by (22 .33) implies

(22 .36)
                                            E
                                                 < MV         <w< E
                                           n                                 .Jn
Suppose further that 0 < u < v and 0 < h < 2v - u . We shall show that

(22 .37)      P{ max u l Y,,(th2"+i) - Yn(t(,2u) I > E < & 0o u [t(h+1)2 u - th2 ]
                 0<i52                                                             E

for a K5 depending only on (p and the fixed numbers m and 0 involved in
(22.32) and (22 .34) . For notational convenience, we carry through the proof
with h = 0 .
  If 0 < i < 2'", then
                                           u
                          Y1 (tiv))                    max_k Yn (tj2k) - Yf( t (j)1)2k)
                                                                  I

                                          k=0 1< j - 2

 (consider the base-2 representation of the integer i), and therefore
                                                 u k
                                           u 2
                      (v)                                             (v)                (v)                  u k
      P max     I Yn(ti) I ~ E        <                    P{ I Yn(tj2k) - 1'x.(t(j-1)2k) I          E(1 - B)B - }.
       0<i<2'                             k=0 j=1

 Now tj2k = t"              E H.(,-k) .          Since (22 .30) implies (22 .31), it follows by
 (22 .36) that

                                                 I I 2K3
                                                            -k
                                      l          u 2u
                            (v)                                             (m(v - k))'              (v k)  (v k) 2
        P{ max        I Y.(ti ) I > E j <                                                 u-k) 4 ( t i - -
                                                                                                           ti-1 )
           0<i< 2 u                             k=0 j=1          E     (E(1 - 0)0

                                                 K4 u (v - k)sw-k (v)
                                           <                                           t2u,
                                                  E 5 k=0             00 -k
                                                                                     Martingales 205



where K4 = 2K3ms/(1 - 0)4. Since                      w-k <1/2v-k-1 , (22.37) follows with
                                             K5 = 2K4Z     I
                                                           -     is
                                                               (20 0) .

(recall that 20 0 > 1 and that the K3 in (22 .31) depends on 99 alone).
  The purely geometric inequality (22 .17) applies as before and yields

        sup          I   Yn(t) - Yn (th2u) I < 3 max I Yn(th2 u +i) - Yn(th2") I + Jn         w.
   (v)
  th2u~t<t(h)+1)2u                              0<i<2 u

It now follows by (22 .36) and (22 .37) that
              2v-u-,
                          P           sup          I Y,(t) - Yn(th2 u) I > 4s~   < K5s 00u.
               h=O            {th2uCt :5t(h+1)2u

Since t ( v ) = t~-u) E L„_ u and av_ u > 1/2v- u+ 1 , we have, by the corollary to
Theorem 8 .3,
                                   1                   K5
(22.38)                 Pw (Yn, -U+1) > 12s) < 5 00 u.
                                              2v

This inequality holds under the assumption of (22 .35) and 0 < u < v .
   If s and i are given, choose an integer r such that K500''/s5 < 71 (recall that
00 < 1) and define 6 = 1/2'+ 1 For all n exceeding some n0, there exists a v
satisfying (22 .35) . If we take u = v - r, then (22 .38) holds, which implies
(22 .29) (with 126 in place of s) . This proves Theorem 22 .2 .
  It is not hard to show that the theorem persists if the probability measure
P governing the ~,, and ?7,,, is replaced by a probability measure it dominates .
Thus we can replace Gauss's measure by Lebesgue measure in Example 2 .
Remarks . Theorems 22 .1 and 22 .2 are new ; the case presented here as Example 1 is due
to Ciesielski and Kesten (1962) .



23 .   MARTINGALES

In Section 20 we proved a functional central limit theorem for stationary
processes {fi n} satisfying a uniform mixing condition . This mixing condition
can be weakened to the assumption of ergodicity if we assume that the
partial sums
                                            Sn=$1+ . . .+$n
 form a martingale .t

 t See Doob (1953) for the ergodic theory and martingale theory required here .
206   Dependent Variables

THEOREM 23 .1          Let { 1,        2 , . . . } be a stationary, ergodic process for
which
(23 .1)                          E{ nII 1, . . ., n-1}= 0
with probability 1 and for which E{~n2} = a2 is positive andfinite . If X, (t, a)) _
S[,nt](w)/amn, then X, n    2W.

Proof   There is no loss of generality in working with a doubly infinite
sequence . . . ,    ~°, ~ 1, . . . , stationary and ergodict If ~Fk denotes the
a-field generated by . . . , ~k-1, ~k, then, by (23 .1) and stationarity,
(23 .2)                          E { ~ k II 'k-l} = 0
with probability 1 .
  We shall verify the hypotheses of Theorem 19 .4 with the functions p(t) = 0
and a2 (t) = 1 appropriate to Brownian motion (see (19.29)) ; X,, -!- W will
follow . For Condition 1° of that theorem, it is enough to show that, for
t < 1,

(23.3)        l m lim sup        E{I E{X,,(t + h) - Xn(t) II F [nt} I} = 0
                             h
and
(23 .4)   him lim scup h    E{I E{(Xn(t + h) - Xn(t)) 2 II ~Ent3} - hj} = 0.

Now (23 .3) is an immediate consequence of (23 .2). As for (23 .4), the relation
(23 .2) implies
                                          l
                 E{(Sk+l - Sk)2 II gk} =    E { kf ti II k},
                                                           i=1

so that, by stationarity, the expected value in (23 .4) is


                            a {
                             2
                                 E
                                       h
                                           I   E { Z2 II     °} -
                                                                    a2
                                                                         11

where kn = [n(t + h)] - [nt]. Since, by Jensen's inequality, the above
expression does not exceed


                                     a2
                                           1 kn   I
                                     h E{ - Lr a 2 - a2
                                          n h i=1
 (23 .4) follows by the mean ergodic theorem .

t Take the $n as the coordinate variables on the product of a doubly infinite sequence of
copies of the real line, with the finite-dimensional distributions prescribed by the original
process ; ergodicity is preserved because it depends only on the finite-dimensional distribu-
tions .
                                                                        Martingales   207

  By (23.2), the variables ~k are orthogonal, and hence
(23 .5)                          E{Sn2 } = n62 ,
which implies Condition 2° .
  Suppose we succeed in proving that {max k<n Sk2 In} is uniformly integrable,
which, if we define E,,,{U} as the integral of U over {U > a}, means that

(23.6)                       lim sup E,,, 1 max S k2 = 0.
                             a-00   n       n k<n
It will certainly follow that {Xn2 (t) : n > 1 } is uniformly integrable for each
t, which is one of the hypotheses of Theorem 19 .4, and Condition 3°a will
follow easily by stationarity . Finally, since

                      P{max i S k i > A.Jn} < 1
                                              A2 E~,2{ 1 max S k2},
                        k<n                            n k<n
it will follow by Theorem 8 .4 that the tightness condition (19 .51) is satisfied .
It suffices therefore to prove (23.6).
   If ~O has a fourth moment, then E{Sn} = EE{~i~ ;$k~l}, with the indices
running independently from 1 to n . If the largest index is not matched by any
other, then, by (23 .2), the term vanishes ; hence

              E{S n4} = I E{S k4 } + 4 1 E{~i~k3 } + 6 1 E{~i$j$k2} .
                        k              i<k            ilj<k
If I ~°I < C with probability 1, then the first two sums on the right contribute
at most 3n2 C 4 in all, and the last sum is 6 Ek 2 E{Sk-1$k2}, which cannot, by
(23 .5), exceed 3n2C4. Thus
(23 .7)                                 E{Sn4} < 6n 2C4

if I COI < C with probability 1 .
   By a martingale inequality'
                                                          Y
                                                    y
(23 .8)                    E{max I Skl Y} < (           1) E{ISnj Y }
                             k<n                y
for y > 1 . Therefore (23.5) implies

(23 .9)                        E{max Sk2} < 4nE{ 02 },
                                    k<n
and, if J$.1 is bounded by C, (23 .7) implies

(23 .10)                       E{max Sk4} < ( 3) 4 . 6n2C4.
                                    k<n

 t Doob (1953, p . 317).
208    Dependent Variables


  For u > 0, define
                                                 i         if     k ki I < u
                                             0             if     J   ~i j > u,
and put
                               ?7 iu = $iu - E{$iac 11 34 i-1
and
               Siu = $i - 2liu = ~i - $iu - E{~i - $iu (1 J~r i-1} •
If Sku = Ek 1 ~ iu and Dku = Ek 1 6iu, then

                                             2
(23 .11)               1 max Sk2 <   max Sk u -+- ?max DkU ,
                       n k<n       n k<n          n k<n



        :n > 1 } has the martingale property (23.1) and J g nu ) < 2u ; it
  Now {?7,,
        .
follows by (23 .10) that

                E a { 1 max Sk i
                   n   k<n
                                   n   < 1 E{ 1 max
                                         M           n   2 k<n
                                                                 Sk     n
                                                                       i < 1
                                                                               GC
                                                                                    ~4)
                                                                                     3
                                                                                          4
                                                                                              6(2u)4 .



And {8,,,u : n > 1 } also has the martingale property, so that, by (23 .9) and
Lemma 1 of Section 21 (see p . 184),

                    E{ 1 max Dk u } < 4E{Sou } < 4E{(~o - ~ou) 2 }
                       n k<n
                                          < 4E u 2 {~o2 } .
From the relation E « {U + V} < 2E a {U} + 2E a {V}, together with (23 .11),
it now follows that
                         E a{ 1 max Sk 2 } < K[u4 + Eu 2 {~o2 } ]
                             n k<n                               OC

for a universal constant K . Since ~o has a finite second moment, (23 .6)
follows.
Remarks.    The central limit theorem under the hypotheses of Theorem 23 .1 was proved
independently by Billingsley (1961) and Ibragimov (1963) ; the proof of Theorem 23 .1 itself
(for bounded fin) is due to Rosen (1967a) .


24 .   EXCHANGEABLE RANDOM VARIABLES

Sampling
For each n, let
(24.1)                                  xn1, xn2, • • • , xnk n
                                                                 Exchangeable Random Variables 209

be a sequence of real numbers (not necessarily distinct), and let ~„ 1 (w), . . . ,
~nkn(w) be a random permutation of these numbers, each of the kn ! permuta-
tions having probability 1/k,,! Define a random element X,,, of D by
                                                        [knt]
"24.2)                                   Xn(t, (0 ) _           nil(0,
                                                         i=1

with Xn(t, co) = 0 for 0 < t < 1/kn. If we sample until the finite population
(24 .1) is exhausted, Xn describes the course the sampling takes .



THEOREM 24.1                  If
                                    k„                     kn
(24.3)                                   xni = 0,          1 xni = 1,
                                   i=1                    j=1
and
(24.4)                                      max I xni --~ 0,
                                           1<i<k n

and if Xn is defined by (24.2), then
(24.5)                                         Xn         W° .
Proof   It will be enough to verify the hypotheses of Theorem 19 .4 with the
functions p(t) = - 1/(1 - t) and a2 (t) = 1 that characterize the Brownian
bridge W ° (see (19.32)).
  We shall need a preliminary computation . Let y 1, . . . , y. be real numbers,
suppose 1 < m < u, and let 77 1 , . . . , ri,,n be an ordered sample of size m
made without replacement (there are                                possible samples, all equally
                                                             mI
                                                            (u
likely). By symmetry, the sum 17n, 27 i has mean mE{271}, and hence
                                                     = - u
(24.6)                                    E{i=1
                                             171           ., yi
                                                       U i=1

The second moment of this sum is, again by symmetry,
                                   mE{j12} + m(m - 1)E{'q1?72},
which computation reduces to
                        ~m ?7i]2) _ m(u                                              12
                    C
                                             - m)      2           m(m-1)
(24.7)      E                                     i yi                            yi
                {       i=1              u(u - 1) i=1              u(u - 1 ) C i-1 J
  Applying these results to Y,', ~ni and using (24.3), we see that
                                                                  [knt](kn-[knt])
                    E{Xn(t)} = 0,             E{Xn2(t)} =
                                                                     k n(k n - 1)
The second moment here converges to t(1 - t) (note that (24 .3) and (24 .4)
imply kn --* oo).
210 Dependent Variables
  Suppose now that 1 < m1 < m1 + M2< k n and that we know the values
of ' nl, . . . , ~nml . Then ~n ml + l, . . . , ~n, m1+m2 is conditionally distributed as a
sample of size m 2 from the population (24 .1) with the values ~nl, . . . ~nml
removed from it. Applying (24 .6) and (24 .7) with m = m 2 and u = kn - m1
and using (24.3), we obtain
                      ml+m2                                           _          m2        ~
(24 .8)           E                ni        nl,                                                 'ni
                      i=m1+1                                      }           kn - m1 i=1
and
                ml+m2          2
(24 .9)                                 ~ni ~ . . .   5   "nml}
             E{[i=m1+1 ni J
                                                                                    ml
                                    m2(kn - -1 - m2)
                                                                              1 -         nZ]
                           (kn - m1)(kn - m1 - 1                                    i=1
                                                                                                           m1       2
                                                                          m2(m2 - 1)
                                                            + ( k n - m1)(kn - m1 - 1)                 C   2=1
                                                                                                                 niI .


  Fix t < 1 ; taking m 1 = [ k nt] and m 2 = [k n (t + h)] - [k nt] in                                            (24 .8)
gives
               E{XX(t + h) - Xn(t)1) Xn(t)} = - An(h)Xn(t)
with
                                    An(h) = [kn(t + h)]-[knt]
                                                             kn - [knt]
Therefore

     h   E~ E{Xn(t + h) - Xn(t)
                                                1~   Xn(t)} + 1 h     -   t
                                                                              Xn(t)


                                                                      h An(h)              1    h t E{I Xn(t)I } .
Since E{IXn(t)I} < EI{Xn2 (t)} is bounded and lim n A n(h) = h/(1 - t),
(19 .43) follows . (Although we have for notational convenience conditioned
with respect to but one X (t), (24 .8) easily yields the general case as well .
The same remark applies to the next argument .)
  It follows from (24 .9) that
                                                                                 [knt]
         E{(Xn(t -+- h) - Xn(t)) 2 !I Xn(t)} = Bn(h)C1 -                                  ni~ + Cn(h)Xn2(t)
                                                                                 i=1
 with with
                         ([k n(t + h)]-[knt])(kn-[kn(t + h)])
               Bn(h) =
                                        (kn - [knt])(kn - [knt] - 1)
 and
                         ([kn(t + h)]-[knt])([kn(t + h)] - [k n t] - 1)
               Cn(h) =
                                             (kn - [knt])(kn - [knt] - 1)
                                                       Exchangeable Random Variables             21 1

Therefore

(24.10)                    + h) - Xn(t))2 +1 Xn(t)} - hI }
           h E{I E{(Xn(t
                               IBn(h) I E~ [knt] ~2 _ [knt]
                           <                      ni
                                   h        i=1             kn

                                       B h)(1-[kt])                    I C hh)1
                               +                              -1   +              E{Xn 2 ( t)}
                                                       n

Now Eiki ] ~ 22ai has mean [k nt]/k n and second moment (use (24.7))
                                  k„
                  Lknt](kn-[k n        4    Lknt](Lknt]-1)    2.
                                      xni+                 -)t ,
                     kn(kn - 1)   i=1         kn(kn - 1)

hence the variance of this sum tends to 0 . Since
                        lim n Bn(h) = h(1 - t - h)/(1 - t)2 ,
the first term on the right in (24 .10) tends to 0 as n -- oo. Since E{Xn2 (t)} is
bounded and lim n C n(h) = h2/(1 - t) 2 , ( 19.44) follows .
   We have verified Condition 1° of Theorem 19.4 . Since the maximum jump
max i I x nil in Xn tends to 0, it follows by the remark following the proof of
Theorem 19.4 that we need only verify Xn (0) = 0 (which is obvious) and
Condition 3° . Hence it remains only to show that
(24 .11)

    E{IXn(t) - Xn(t1)1 2 IXn(t2) - Xn(t)I 2 } < K(t 2 - tl)2,               t1 < t < t 2 ,

for some K independent of n, t1 , t, and t2. Now the left member of (24 .11) is
(24.12)                                JE{yMi W~nk~nl}
where i and j range over [kntl] < i, j < [k nt] and k and 1 range over
[kn t] < k, 1 < [k n t2] . Put [kn t] - [kntl ] = m l and [knt2] - [knt] = m2 , by
symmetry, (24 .12) reduces to

   m1m 2 E { n1 n2} + m1 m 2( m 1 + M 2 - 2) E { n,l~n2~n3}
                                    + m 1( m 1 - 1 )m2( m 2 - 1 ) E {~nl~n2~n3~n4} •
Wrlte Tn = Ek-`1 xni. Calculations (routine if tedious) further reduce (24 .12)
to
             1 - T,1                                   2T n - 1
   ml m2              + m1m2(m1 + M2- 2)
           kn(kn - 1)                                  kn(kn - 1)(kn -2)
                                                                   3(1 - 2Tn)
                     + ml(ml - 1)m2(m2 - 1)
                                                           kn(kn - 1)(kn - 2)(k n - 3)
212 Dependent Variables

  Since 0 < Tn < 1 by (24 .3), kn > 6 implies that this last expression is at
most
           2m1m2 + 8m1m2(m1 + m2) + 24m12m22 < 34
                                                                                kn      1'
                kn2               kn3                    kn4

If t2 - tl > Ilk,, then (ml + m2)/kn < 3(t2 _t1), so that (24 .11) holds with
K = 306 . If t2 - t1 < Ilk,,, then (24 .11) holds because one or the other of
the two factors inside the expected value vanishes . This proves Theorem 24 .1 .

  We shall need the following consequence of Theorem 24 .1 . For each
W°-continuity set A and for each positive e, there exists a positive 8(E, A)
such that, if xn1, . . . , xnkn satisfy (24 .3) and

(24 .13)                               max I xni < 8(e, A),
                                      1<i<kn
then

(24 .14)                         j P {Xn E A} - W° (A) I < e

(Xn being defined by (24 .2)) . Indeed, if for some e and A there were no such
b(e, A), we could construct a sequence of sets {xni} satisfying (24 .3) and
(24 .4) but violating (24 .5) .


Exchangeable Variables

We turn now to a more general problem . For each n, let

(24.15)                                  S nl, ~n2, - • • , $nkn

be random variables that are exchangeable in the sense that each permutation
of the set (24 .15) has the same joint distribution as the set itself . Define Xn,
as before, by (24 .2) . We shall assume the ~ni satisfy the three conditions,

                      k„                   kn
(24.16)                     ni   0,              S ni   1,          max I s nil -3 0,
                      i=1                  i=1                     1 < i < kn
as n --- oc .
  If (24 .15) is a random permutation of (24 .1), then it is exchangeable and
(24 .3) and (24 .4) together imply (24 .16) . The following result thus generalizes
Theorem 24 .1 .

THEOREM 24 .2 If the variables (24 .15) are exchangeable and satisfy
(24 .16), then Xn -4 W° .

Proof If an = knl Ei nl xni and 3 2 = F'i n1 (~ni - «n)2, then, by (24 .16),

(24 .17)                              known P>- 0,       Nn -3 1 .

If ?lni = (Sni - an)I Nn, then the variables ~nl, 11n2, • . • , 9lnkn are exchangeable
                                                              Exchangeable Random Variables          21 3

and
                   kn                     k„
;24.18)                          0,            77ni = 1,            max 1?1ni I _P.--)' 0-
                   i=1                   i=1                        <- 1i<kn
Define a random element Yn of D by
                                                    [kn t]
                                      YY(t, co)   = i=1I yl ni(w)-
Since
                                  X JO = NnYn(t) + [knt]an,
Xn - W° and Yn - W° are equivalent by (24 .17) and Theorem 4 .1 . We
shall prove Yn -
               . W'.
  Let ~nl, - - - , ~nk n be a random permutation of 9]nl, . . . , 71nkn • ( The 77ni
are subjected to a random permutation that is independent of them . This is
a probative device ; to support the random permutation, the probability
space on which the 77ni are defined may require to be enlarged .) The ~ni have
the same joint distribution as the q ni, since the latter are exchangeable, and
hence Y,, has the same distribution as the random function defined by
                                         [kn t]
                                      Zn(t, co ) = L, ~ni(O#
                                                   i=1
            . W° it therefore suffices to show that
To prove Yn -
(24.19)                                P {Zn E A } --> W ° (A)
for each W °-continuity set A .
   Given a W °-continuity set A and a positive E, choose 6(E, A) in such a way
that (24 .13) implies (24 .14) (where, in (24 .14), Xn is defined via (24 .2) from a
random permutation of numbers (24 .1) satisfying (24 .3)) . If En is the event

                                  E n = { max (ylni I <6(A, E) j,
                                           1<i<kn
 then P(En) - 1 by (24 .18) . By the definition of conditional probability,

      P{Z n E A}                   E A ll ?]n1, . . . , ?7nkn} dP
                   =JEnP{Zn
                                                      -F-         ~P{Zn E A II ,n1, . . . , ylnkn} dP .
                                                             En
 Because of (24.18),
                         1P{Zn E A 11 ?7n1,          , ?Inks } - W°(A) I < E

 holds on the set En , and therefore
                           I   P{Zn E A} - WO(A)! < 2E + 2P(En').
 Since P(En) -- 1, (24.19) follows, which completes the proof of the theorem .
214   Dependent Variables

  Combining Theorem 24 .2 with the computations in Section 11 (see (11 .39),
(11 .40), and (11 .42)) gives the limiting distributions for max k<kn Ek 1 si n=,
for maxk<k„ IEk 1 ~ ni j, and for the fraction of k, 1 < k < k, for which
E k 1 ~ni > 0 .

Remarks.      For Theorem 24 .1 and extensions to other sampling procedures, see Rosen
 (1964, 1967a, and 1967c) . Theorem 24 .2 is new . Chernoff and Teicher (1958) proved
XX(t) --9>- N(0, t(1 - t)) (t fixed) under the hypotheses of this theorem ; see their paper for
examples of variables satisfying these hypotheses . Related limit theorems concern proba-
bilities computed conditionally on X,,(1) = 0, where Xn is some random function ; see
Dwass and Karlin (1963)-and the references there-and Trumbo (1965), as well as forth-
coming papers by T. Liggett and M . Wichura .
APPENDIX I

Metric Spaces




  We review here a few facts about metric spaces, taking as known the first
definitions (open, closed, dense, limit point, continuity, etc .) and properties .'
  We denote the metric space by S and the metric itself by p(x, y). We
denote the closure of a subset A of S by A-, its interior by A° , and its
boundary by aA (= A - - A°) . We define the distance from x to A as
                        p (x, A) = inf { p (x, y) : y c- A} ;

it is easy to check that p(x, A) is uniformly continuous in x. Denote by
S(x, E) the open sphere with center x and radius E : S(x, E) = {y : p(x, y) < E} .
By "sphere" we shall mean "open sphere" ; we shall call S(x, 8) the 6-sphere
about x . (Topologists use "ball" in place of "sphere .")
   Two metrics pl and p2 on S are said to be equivalent if (write Si (x, E) _
{y : pi (x, y) < E}) for each x and E there is a 6 with S1 (x, 6) c S2(x, E) and
S2 (x, 6) ~= S1 (x, E), so that S with pl is homeomorphic to S with p2.


Separability

The space S is by definition separable if it contains a countable, dense subset .
A base for S is a class of open sets such that each open subset of S is the
union of some of the members of the class . An open cover of A is a class of
open sets whose union contains A . A set A is discrete if about each point of

t For full accounts, see Dieudonne (1960), Royden (1963), or Simmons (1963), for
example .
                                                                               215
216   Appendix I

A there is a sphere containing no other points of A-in other words, if each
point of A is isolated in the relative topology . If S itself is discrete, then
taking the distance between distinct points to be 1 defines a metric equivalent
to the original one .
  These three conditions are equivalent :
    (i) S is separable .
   (ii) S has a countable base .
  (iii) Each open cover of each subset of S has a countable subcover .
  Moreover, separability implies
   (iv) S contains no uncountable discrete set,
and this in turn implies
    (v) S contains no uncountable set A with

(1)                   inf {p (x, y) : x, y c- A, x 54 y } > 0.

Proof of (i) -~ (ii) . Assuming D is a countable set dense in S, let 7' be the
countable class of spheres with rational radii and with centers in D. Let
G be open ; to prove that -/,"- is a base, we must show that, if G 1 is the union
of those elements of K that are contained in G, then G = G1. Clearly,
G1 c G, and to prove G ~= G1 , it suffices to find, for a given x in G, a d in D
and a rational r such that x E S(d, r) c G. But if x E G, then S(x, s) (-- G
for some positive e. Since D is dense, there is a d in D with p(x, d) < Zs.
Take a rational r with p(x, d) < r < 2e.

Proof of (ii) -* (iii) . Let {V1, V2 , . . . } be a countable base, and suppose
{Ga} is an open cover of A (a ranges over an arbitrary index set) . For each
Vk for which there exists a G« with Vk c Ga , let Gak be some one of these G a
containing it. Then A c U kG«k.

Proof of (iii) --* (i). For each n, {S(x, n -1) : x c S} is an open cover of S.
If (iii) holds, there is a countable subcover {S(x n k, n-1) : k = 1, 2, . . . }.
The countable set {x,, k : n, k = 1, 2, . . . } is dense in S.

Proof of (iii) - (iv) . If A is discrete, then for each x in A there is a positive
EX such that S(x, s.) contains no other point of A. Since {S(x, 8,,) : x c- A} is

an open cover ofA without any subcover, (iii) cannot hold if A is uncountable .

  Since a set satisfying (1) is discrete, certainly (iv) implies (v) . Although we
shall not need the fact, (v) implies separability, so that (i) through (v) are
all equivalent . (For each positive s, use Zorn's lemma to find a maximal set
AE of points distant at least s from one another ; the union of the A E for
rational 8 is dense and, if (v) holds, countable .)
                                                                Metric Spaces 217

Compactness

A set A in S is by definition compact if each open cover of A contains a finite
subcover. An E-net for A is a set of points {x k} with the property that for
each x in A there is an x k such that p(x, x k) < e (the xk are not required to lie
in A) . A set is totally bounded if, for every positive s, it has a finite E-net .
A set A is complete if each fundamental sequence in A converges to some
point of A .

  For an arbitrary set A in S, these four conditions are equivalent :
     (i) A- is compact.
    (ii) Each countable open cover of A- has a finite subcover .
   (iii) Each sequence in A has a limit point (has a subsequence converging to a
limit, which necessarily lies in A-).
   (iv) A is totally bounded and A- is complete .
  It is easy to show that (iii) holds if and only if each sequence in A- has a
limit point (necessarily in A-) and that A is totally bounded if and only if
A- is totally bounded . Therefore we may assume in the proof that A = A -
is closed . The implication (i) -* (ii) is trivial .
Proof of (ii) -* (iii) . Given a sequence {x,,} in A, define F,, to be the closure
of the set {xk : k > n} . If n ,,F,,,
                                    = 0, then the open sets Fn s cover A, and
hence, if (ii) holds, A (-- Fl c U . . . uFn c for some n, which implies the
impossible relation Fn r) A = 0. Thus fl nFn contains some x, which must
be a limit point of {xn }.
Proof of (iii) -3- (iv) . If A is not totally bounded, there exist some positive
e and some sequence {x,,,} such that p(x,,n, x n) > e for m 0 n ; {xn } can have
no limit point . Hence (iii) implies total boundedness . And (iii) implies
completeness because, if {x n } is fundamental and has a limit point x, then
{xn} converges to x.
Proof' of (iv) --k (i) . Assume (iv) and suppose {G 1, where a ranges over an
arbitrary index set, is an open cover of A having no finite subcover . We
shall derive a contradiction .
   Since A is totally bounded, it can, for each n, be covered by finitely many
open spheres Bnl, . . . , Bnkn of radius 2-n. At least one of the Bni must have
the property that no finite subfamily of {G a} covers A rl B ni (which must
therefore be nonempty) ; let Cn be one such Bni. Since the Bni r) Cn_1 r) A
cover Cn_ 1 rl A (if n > 1), we may also insist that no finite subfamily of
{Ga } cover Cn rl Cn_ 1 rl A, so that, in particular, Cn rl Cn- 1 0 0.
   Let xn be one of the points that Cn shares with A. Since Cn ( Cn-1 0 0
and C,, has radius 2- n, we have p(xn, xn-1) < 6 .2- n, which implies
218   Appendix I

                            .,,} is fundamental and has, by the completeness
p(x,n , x„+k) < 6.2- . Thus {x
assumption, a limit x, which must lie in A .
  Now x E Ga for some a,, and S(x, E) C Ga for some positive s. But then
p(x, xn) < E/3 for some n satisfying 2-n < E/3, which implies Cn (= G« , a
contradiction.'
  A subset of k-dimensional Euclidean space R k (with the usual metric) has
compact closure if and only if it is bounded .
  If h is a continuous mapping of S into another metric space S', and if K is a
compact subset of S, then hK is a compact subset of S' .
Proof. If {Ga} is an open cover of hK, then {h-1 Ga} is an open cover of K
and hence has a finite subcover {h-' G«~ : i = 1, . . . , n} . Clearly, {Gai : i =
1, . . . , n } covers hK.

Upper Semicontinuity
A function f is upper semicontinuous at x if for every positive E there exists a
positive 6 such that p(x, y) < 6 implies f(y) < f(x) + E . It is easy to see
that f is everywhere upper semicontinuous if and only if, for each real a,
the set {x -f(x) < a } is open.
  Letfn be realfunctions on S such that, for each x, fn(x) is nonincreasing and
(2)                                      lim fn(x) = 0 .
                                         n - co

If the f, are upper semicontinuous, then the convergence in (2) is uniform on
each compact set.
Proof. For each positive E, the open sets Gn = {x :fn(x) < E} cover S.
If K is compact, then K C Gn for some n and uniformity follows .

The Space R
Let R°° be the space of sequences x = (xj , x2i . . .) of real numbers . If
po(a, j3)= Ja    fil/(1 + loc -    then p o is a metric on the line R' equivalent
                                        PI),


to the ordinary metric a - f The line is complete under p o. It follows that,
                         I        I .


if p(x, y) = E'1 po(xk, yk)2_k, then p is a metric on R°°. If

(3)                Nk, (x) = {y :lyi - xil < E, i = 1, . . . , k},
then Nk E (x) is open in the sense of the metric p. Moreover, since p(x, y) <
E2- k/(1 + E) implies y E Nk &(x), which in turn implies p(x, y) < E + 2- k,
the sets (3) form a base for the topology given by P-

t Proof from Dieudonne (1960) .
                                                                    Metric Spaces 219

  We shall always take R°° with this topology . It is the product topology,
or the topology of coordinatewise convergence : limn x(n) = x if and only if
lim n xk(n) = xk for each k. The space R°° is separable ; one countable, dense
set consists of those points with coordinates that are all rational and that,
with only finitely many exceptions, vanish .
   Suppose {x(n)} is a fundamental sequence in R°° . Since
                        Po(xk(m), xk(n)) < 2k p(x(m), x(n)),
it follows easily that, for each k, {xk (l), xk(2), . . . } is a fundamental sequence
on the line with the usual metric, so that the limit x k = lim n xk(n) exists . If
x = (x1 , x2i . . . ),then x(n) converges to x in the sense of R`°. Thus R O
is complete .
   A subset A of R°° has compact closure if and only if the set {xk :x E A} is,
for each k, a bounded set on the line .
Proof. It is easy to show that the stated condition is necessary for compact-
ness. We may prove sufficiency by the classical diagonal method . Given a
sequence {x(n)} in A, we may choose a sequence of subsequences

                           x(n11),   x(n12),   x(n13),

(4)                        x(n21), x(n22), x(n23),
                           .. . ... ........... ......
                           . .. ... .............. ...

in the following way . The first row of (4) is a subsequence of {x(n)}, so
chosen that x 1 = limi x1(n1i) exists ; there is such a subsequence because
{x1 : x c A} is a bounded set of real numbers . The second row of (4) is a
subsequence of the first row, so chosen that x 2 = limi x2(n2i) exists ; there is
such a subsequence because {x2 : X c- A} is bounded .
   We continue in this way ; row k is a subsequence of row k - 1, and
xk = lima xk(nki) exists. Let x be the point of R`° with coordinates xk. If
ni = nii, then {x(ni)} is a subsequence of {x(n)} . For each k, moreover,
x(nk), x(nk+1), . . . all lie in the kth row of (4), so that lime xk(ni) = xk. Thus
limi x(ni) = x, and it follows that A- is compact.
  Our final result about R °° is a special case of Urysohn's embedding theorem .
  Every separable metric space S is homeomorphic to a subset of R`° .

Proof. Let {d1 , d2. . . . } be a sequence of points dense in S, and define a
mapping h from S into R `° by

                   h(x) = (p(x, d1), p(x, d2), . . . ),    x c S,
220 Appendix I

where p denotes the metric on S. If points x,n of S converge to a limit x, then
limn p(x n, dk) = p(x, dk) for each k, so that, since the topology of R°° is
that of coordinatewise convergence, h(x,,) converges to h(x) . Thus h is
continuous .
   Suppose xn does not converge to x. Then p(xn,, x) > E for some positive
s and for each element of some subsequence {x,,,} . If p(x, dk) < 2E, which
must be true for some element of the dense sequence {dk }, then p(xn,, dk) > 2E
for all n' ; thus p(xn, dk) cannot converge to p(x, dk) for this value of k and
hence h(xn ) cannot converge to h(x).
   Thus h(x n) -* h(x) implies x,, -+ x. The same argument shows that h(x) -
h(y) implies x = y (take xn = y). Therefore h is a one-to-one, bicontinuous
mapping of S onto the subset hS of R°° .


The Space C

Let C = C[0, 1] be the space of continuous, real-valued functions on the
unit interval [0, 1] with the uniform metric . The distance between two
elements x = x(t) and y = y(t) of C is

                          P(x, y) = sue t jx(t) - Y(01 ;

it is easy to check that p is a metric . Convergence in the topology is uniform
pointwise convergence of (continuous) functions .
  The space C is separable ; one countable, dense set consists of the (polyg-
onal) functions that are linear on each subinterval [(i - 1)/k, ilk], i = 1, . . . ,
k, for some integer k, and assume rational values at the points i/k, i =
0,1, . . .,k.
  If {xn} is a fundamental sequence in C, then, for each value of t, {x n (t)}
is a fundamental sequence on the line and hence has a limit x(t). It is easy to
show that the convergence xn(t) --* x(t) is uniform in t, so that x lies in C
and is the limit in C of {xn }. Thus C is complete.
  We define the modulus of continuity of an element x of C by

(5)          wx (8) = w(x, 6) = sup I x(s) - x(t)1,        0 < 6 < 1.
                               I s-t I <a
Since
(6)                        Jwx(6) - w,,(8)( < 2p(x, y),

wx (S) is, for fixed positive 6, continuous in x . Note also that, since an element
of C is uniformly continuous, we have

(7)                         lim wx(8) = 0,      x E C.
                            a-0
                                                                       Metric Spaces 221

   (The Arzela-Ascoli Theorem .) A subset A of C has compact closure if and
only if

(8)                                 sup I X(O) I < 00
                                    XEAA
and

(9)                                lim sup wx(8) = 0 .
                                   a- 0 xA

Proof. If A- is compact, (8) follows easily . Since w,,(1/n) is continuous in x
and nonincreasing in n, (7) holds uniformly on A if A- is compact (see p . 218)
and (9) follows .
   Suppose now that (8) and (9) hold . Choose k large enough that
supIA w,,(1/k) is finite . Since
                                 k          i-1
                    IX(t) I <_ Ix(0)1 +~ x(i k t) - x(
                                                             k t)
it follows that

(10)                              sup sup I X(t) I < 00 .
                                   t xEA

  We shall deduce from (9) and (10) that A is totally bounded ; since S is
complete, this will imply that A- is compact . Given s, we must construct a
finite s-net for A . Let a denote the finite quantity in (10), and let H denote
the finite set of points

                           u
                           - a,       u=0, f1, . . .,±v,
                           V

where v is an integer such that a/v < s (H is an s-net for the linear interval
[-a, a]) . Now choose k large enough that %(1/k) < s for all x in A, and
take B to consist of those elements of C that are linear on each subinterval
[(i - 1)/k, i/k], i = 1, . . . , k, and assume values in H at the points ilk,
i = 0, 1, . . . , k. The set B is finite (it contains (2v + 1)'+1 points) ; we shall
show that it is a 2s-net for A .
  If x c A, then Ix(i/k)I < a . Therefore there exists a point y of B such that


(11)                  xl-yl<e,                      i=0,1, . . .,k .
                       (k) (k)
Since w,(1/k) < s, and since y is linear on each subinterval [(i - 1)/k,
ilk], it follows from (11) that p(x, y) < 2s . This proves the theorem .

      We have seen that (8) and (10) are equivalent in the presence of (9) . When
(9) holds, A is said to be uniformly equicontinuous . Thus the Arzela-Ascoli
theorem asserts that A- is compact if and only if A is uniformly bounded
and uniformly equicontinuous .
APPENDIX II

Miscellany




Measurability
Let (SZ, P1) and (S1', P1') be measurable spaces ; 1[P1'] is a a-field of subsets
of I [S2']. A mapping h : k2 ). SZ' from SZ into S2' is said to be measurable
(a, P1') if the inverse image h-1M' lies in °a for each M' in P1' . If h-1 .1'
denotes the class {h-'M' : M' E a'}, this condition may be succinctly stated as
h-1 -4' (-- a. Since {M' : h-1M' E P1 } is a a-field, if Po is contained in P1'
and generates it, then h-1 a' cz- a1 implies h-1 a' c a.
   Let (Q", a") be a third measurable space, let j : S2' -* S1" map ST' into a",
and denote by jh the composition of h and j : (jh)(co) = j(h(w)) . It is easy to
show that, if h-1_4'     -4 and' -' P" c -', then (jh)-'P1" c -4 .
   If Q = S and SZ' = S' are metric spaces, h is continuous when h-1 G' is
open in S for each open G' in S' . Let 9' and 9" be the a-fields of Borel sets
in S and S'. If h is continuous, then, since h-1 G' E 9 for G' open in S', and
since the open sets in S' generate 9", h-19" (-- 9', so that h is measurable .
   If 1' is k-dimensional Euclidean space Rk, we always take a' to be the
class qk of k-dimensional Borel sets (the a-field generated by the open
subsets of RI with the Euclidean metric), and we say h is measurable -4 if
h-1 P1k c R ; h is measurable -4 if h-1 {a c Rk : ai < a} E a for each
i = 1, . . . , k and each real a. In particular, if S2 = S is a metric space, if
k = 1, and if h is upper semicontinuous (see p . 218), then h is measurable Y .

Change of Variable
If P is a probability measure on (S2, -4), and if h-1P1' c: -4, Ph-' denotes the
probability measure on (O',a) defined by (Ph-1)(M') = P(h-1M') for
222
                                                                                  Miscellany 223

M' E a' . If f is a real function on S2', measurable R', then the real function
fh on 0 is measurable -4 .

   Under these circumstances,' f is integrable with respect to Ph -1 if and only if
fh is integrable with respect to P, in which case we have


(1)                  f        f (h(w)) P(dcv) =              f (o)') Ph-1(dco')
                 Jh 1 M'                                M'
for each M' in R' .
   If X takes a into a metric space S and X-1 Y (-- 4, so that X is a random
element of S (see Section 4), we generally write E { f (X)} in place of
f f(X (w))P(dw) . If P = PX1 is the distribution of X in S, (1) implies


(2)                             E{f (X)}
                                           =fs
                                                     f (x) P(dx) .
Tail Probabilities

Let X be a random variable on a probability space (S2, -4, P) . If X is non-
negative and integrable, and if a > 0, then

(3)
                   { x? X dP = a P{X > a} +- f-00 P{X > t} dt .
                         a,

This will follow if we prove
                                               00
(4)                             E{X} =              P{X > t} dt,
                                           0

since we may replace X by its product with the indicator of {X > x}. If X
has finite range, (4) follows by summation by parts . The general result
follows from the fact that any nonnegative X can be represented as the limit
of a nondecreasing sequence of random variables X,, with finite range . (The
equation also holds in the extended sense that if one side of (4) is infinite so
is the other.)
   Still assuming X nonnegative and integrable, and assuming a > 0, we
have
(5)                      P{X > a} < 1                 X dP <_ l E{X} .
                                    x      {x>a}

Scheffe's Theorem

Let I be a measure (not necessarily finite) on a space                and let p(w)
and pn (w) be probability densities with respect to A ; p and p,,, are nonnegative
functions on 0, measurable -4, such that fp dA = fp,, dA = 1 .

t For a proof, see Halmos (1950, p . 163), for example.
224   Appendix II



0, then
                                         n
   (Schefe's Theorem .)t If p, (co) --> p(w) except for w in a set of 2-measure


(6)                   sup f p dA - f p,, dA = 2                  IP - PnI dA --, 0
                                                             f
                                              n
                      EEM

Proof. If 8,n = p - p, then f b dA = 0 . For E in R, therefore,

                2 SEbn dA                SEbn dA     + 6n   f
                                                             E
                                                                   dA   < f 16,,j d2 ;

and, if E = {b,, > 0}, there is equality here . This proves the equality in (6) .
  If bn is the positive part of bn , then b+ -> 0 except on a set of A-measure 0 .
Since 0 < bn < p, f I8n 1 dA = 2 f bn dA --~ 0 follows by Lebesgue's dominated
convergence theorem.
   A special case : If E    ipn(i) =                i Ip(i) - n
                                   E i p(i) = 1, the terms being nonnegative, and
if limn P,,,(')
                             n
                p(i) for each i, then E
it follows that E i a(i)p (i) --* Ei a(i)p(i) .
                                                   p (i)I -+ 0. If a(i) is bounded,


Subspaces

Let S be a metric space, and let 5 be its a-field of Borel sets . A subset S
(not necessarily in 5) is a metric space in its own right in the relative
                                                                                         o
topology . Let 5o be the a-field of Borel sets in So. We shall prove

(7)                              Y0 = {So n A : A E Y} .


                        O, o,             o
If h(x) = x for x e S then h is a continuous mapping from S o to S and
                                                                                   o
                                                       o
hence h-15 ~= Y so that S n A E S°o if A E Y . Since {S n A : A E 55°}
is a a-field in So and contains all sets S n G with G open in S, that is, all

       o
open sets in So, ( 7) follows .
   If S lies in 5, (7) becomes
(8)                             50   0   =    {A : A c So, A E 5°}.


Product Spaces

Let S' and S" be metric spaces with metrics p' and p" and a-fields 5°' and
5" of Borel sets . The rectangles
(9)                                               A' x A"
with A' open in S' and A" open in S" are a basis for the product topology in
S = S' x S" . This topology may also be described as the one under which

t Schefl   (1947) .
                                                                       Miscellany   225


(x ,, x'n) (x', x") if and only if ' ---)- x' and xn -- x". Finally, the topology
may be specified by various metrics, for example,

(10)          p((x', x" ), (y', y")) = V [P'(x, y'A2 + [P"(x" , y")]2
and
(11)          POX% X"), (y', y")) = max {p'(x', y'), p"(x", y")} .
  Let 9' x 5" be the a-field generated by the measurable rectangles (sets
(9) with A' E 9' and A" E 9"), and let 9 be the o-field of Borel sets in S
for the product topology . We first show that
(12)                              9' x ~"        9.
If ir' (x' , x") = x' and ir" (x' , x") = x", then 7r' : S -+ S' and 1T' : S --~ S" are
continuous and hence measurable 07r')-1-91 ' c 5 and                            (-- 0) .
It follows that, if A' E 9' and A" E b", then A' X A" = 7r' -'A' n 1T' - ' A'
lies in Y . Since 9 contains all the measurable rectangles, (12) follows .
   Now S is separable if and only if S' and S" are both separable . Let us show
that, if S is separable, then
(13)                              9' x $" = Y.
In view of (12), it suffices to show that, if G is open in S, then G E 9°' x 9" .
But G is a union of rectangles (9) with A' open in S' and A" open in S"
(so that A' x A" E Y' x 9"), and, if S is separable, G is a countable such
union . This proves (13) .t
   Suppose that X' and X" are random elements of S' and S", respectively, and
have a common domain (n, -4). Now (X'(co), X"(co)) defines a mapping
(X', X") from n to S = S' x S", and clearly (X', X")-1(.' x 9") c -4.
If S is separable, then, by (13), (X', X") is a random element of S.
   If S' = S", then p'(x', y') defines a continuous mapping from S' x S' to
R1 ; if S' is separable, then the composition p(X', X") is measurable and hence
is a random variable .$

Measurability of D h
 Let Dh be the set of discontinuities of a mapping h from a metric space S to
 another metric space S' . Denote the metrics in S and S' by p and p'. Let
 AE,a be the set of x in S for which there exist points y and z in S satisfying

t Without separability, (13) may fail : If S' = S" is a discrete space whose cardinality
exceeds that of the continuum, then the diagonal {(x, y) : x = y} lies in b° but not in
Y ' x .So" (see Problem 2 on p . 261 of Halmos (1950)) .
$ The counterexample in the preceding footnote shows that this may be false if S' is not
separable .
226     Appendix II

p(x, y) < S, p(x, z) < b, and p'(hy, hz) > s . Then AE,B is an open set . Since

                                  Dh = U fl AE,a ,
                                             e a
where s and b are restricted to positive rationale, Dh is a Borel set in S. This
is true even if h is not measurable (for example, if h is the indicator of a set
A, then Dh = aA is closed no matter what A may be).
   Consider now the set E involved in Theorem 5 .5 . We shall assume that the
mapping h is measurable and that S' is separable and prove E E Y. If
BE a i ts the set of x such that p'(hx, h i y) > s for some y with p(x, y) < S, then

                               E = U fl      nU
                                       e a k>li>k
where s and 6 range over the positive rationals, and it suffices to find sets
Ce a i that lie in S and satisfy

                               $ e,a,i C CE, a , i C BIE,a,i .
If the sequence u,n is dense in S' and if H, . = { x : p'(hx, u m) < 4s}, then
Hem E Y and S = U ,.H,,,,,,,. The requirements on C, ,,3,i are satisfied by

                            Ce,a,i =   U (HE,m (1
                                       m

where Je,a,i,m is the set of x such that p'(h iy, hz) > s for some pair of points
y and z with p(x, y) < 6, p(x, z) < 8, and z E He,,n (Je,a,i,m is open) . This
proves]' E E Y. (The proof of Theorem 5 .5 goes through even if E lies
outside so, provided it has outer P-measure 0 .)

Helly's Theorem

A distribution function is a function F(x) = F(xl , . . . , xk) on RI with these
three properties (we use the terminology and notation of Section 3)
       (i) F is everywhere continuous from above ;
      (ii) 0 < F(x) < 1 for all x, F is nondecreasing in each variable, and, for
           each k-dimensional rectangle (a, b],
 (14)                 I ± F(a l + O l d,, . . . , a k + Okdk) > 0,
           where di = bi - ai, where the sum ranges over all 2k sequences
           (01, . . . , Ok) of 0's and l's, and where the sign is + or - according
           as the number of 0's in the sequence is even or odd ;
      (iii) F(x) -k 0 as any one coordinate of x goes to - oc, and F(x) --->- I as
           all coordinates of x go to oo .

 f This proof is due to F . Topsoe.
                                                                          Miscellany   227

  If P is a probability measure on (R k, qk) and
(15)                    F(x) = P{y : y< x},          x E Rk,
then F is a distribution function. It is a standard fact of real variable theory
that, if F is a distribution function, then there is exactly one P satisfying
(15) . If F has properties (i) and (ii) above (but perhaps not (iii)), then
there is a finite measure u on (Rk , _qk) such that
(16)                    F(x) = ,u{y :y < x},         x E Rk ;
u will satisfy ,u(Rk) < 1 but need not be a probability measure .
  (Helly's Selection Theorem .) If {Fn} is a sequence of distribution functions
on Rk , then there exist a subsequence {F, n ,} and a function F satisfying condi-
tions (i) and (ii) above (but perhaps not (iii)) such that

 (17)                           lim n . Fn,(x) = F(x)
for all continuity points x of F .
Proof. Let Rk denote the set of rational points in RI-the set of points
whose coordinates are rational-and let {r(1), r(2), . . . } be an enumeration
of the points of Rok. For each Fn in the given sequence of distribution
functions,
(18)                        (Fn(r(1)), Fn (r(2)), . . . )
is a point of R°°. Since 0 < Fn(x) < 1, it follows by the compactness
criterion for R°° (see p . 219) that some subsequence of the points (18)
converges in the sense of R' to some point (z 1 , z 2 , . . . ) of R°°. Define FO
on Rok by F0 (r(k)) = zk . We see in this way that there exists a function FO
on Rok and a subsequence {Fn ,} of {Fn} such that
(19)                   lim n , Fn.(r) = F0(r),    r c- Ro .
  Since each Fn is a distribution function, it follows from (19) that FO
satisfies condition (ii) on R o k :O < FO (r) < 1, FO is nondecreasing as each
coordinate varies over the rationals, and (14) holds if a and b lie in R o k .
If we define F on Rk by
                 F(x) = inf {F0(r) : x < r, r c Rok},           x c Rk,
then F has properties (i) and (ii) (but perhaps not (iii)) .
  If F is continuous at x, then, given s > 0, we can find points r' and r" of
Rok such that r' < x < r" and
                    F(x) - s < F0(r') < F0(r") < F(x) + s.
For each n',
                            Fn,(r') < F
                                      x)
                                      •
                                      . ( < Fn.(r").
228     Appendix II

From these relations and (19) it follows that

         F(x) - s < lim inf,,, F,,,(x) < lim sup,,, F,,,(x) < F(x) + s .
Since s was arbitrary, (17) follows . This proves Helly's theorem .

Kolmogorov's Theorem
We shall prove the Kolmogorov (or Daniell-Kolmogorov) existence theorem .
Let 7Tk be the projection from R°° to Rk defined by irk (x) = (xl , . . . , x k), as
described in Section 3 . For k > 1, let Vk be the projection from Rk to Rk -1
defined by pk (xl , . . . , xk) = (x1 , . . . , x k_1) . Since Vk and 1Vk are continuous,
they are measurable (irk1 ~k          R and y k 1 qk-1 (- qk)
  If P is a probability measure on (R', 9'), define probability measures
hk on (Rk , Rk) by
(20)                                   12k = Prrk 1.
Since
(21)                           '7Tk-1 = ZVk 7Tk'        k > 1,
the measures luk satisfy
                                      ~~ -1
(22)                          luk-1 = 1kVk , k > 1.
The problem is to go the other way and construct, from given luk satisfying
the consistency conditions (22), a P satisfying (20).
   (Kolmogorov's Existence Theorem .) If probability measures luk on
(Rk, 'Wk) , k > 1, satisfy (22), then there exists on (R°°, 9°°) a unique
probability measure P satisfying (20).
Proof. For k > i > 1, define a continuous mapping 1Vk i from Rk to Ri by
Vk i(xl, . . . , xk) = (xl, . . . , xi) . Note that Vk,k-1 = Vk and that
(23)                  Vk,i = Vi-f-1 * * * 1Vk+11Vkl       7I• = YVk,i'k
 From this and (22) it follows that
                                       -1             k > i > 1.
 (24)                        Yi = 12kVk,i'
      Let ~ be the collection of finite-dimensional sets, as defined in Section 3 ;
       which consists of the sets of the form
 (25)                          A = 7Ti1H,             H E M~,
 is a field generating the 6-field q°° . A set of the form (25) can also be cast
 in the form
 (26)                              Tk1 H',
                               A = 7      H' E 'qk,
 if k > i ; we need only take H' = ipkiH and use (23) .
                                                                  Miscellany 229

  Suppose now that A is given both by (25) and by (26), where i < k .
Then- a = (al, . . . , ak) lies in H' if and only if (al, . . . , oc,, 0, 0, lies
.n Tk 1H' = 7ti 1H, which is true if and only if (al, . . . , ai) lies in H. Thus
H' = Vk,iH, and (24) implies

(27)                             ,uiH = µkH' •

  Since (25) and (26) together imply (27), we may consistently define a
function P on F by setting P(A) = ,ui(H) if A is given by (25) . Clearly,
P(O) = 0, P(R°°) = 1, and 0 < P(A) < 1 . Suppose A is given by (25) and
B by
                            B = 7Tk 1J,     J E _qk,

where we assume k > i . Then A also has the form (26), and if A n B = 0,
we must have H' n J = 0, so that

        P(A U B) _ Pk(H' U J) = ,uk(H') + ,uk(J) = P(A) + P(B) .

Thus P is a finitely additive probability measure on F .
  Let us prove that P is completely additive on F by showing that, if
Ak E ~F,

(28)                           A1 J A2 D . . . ,

and f A . = 0, then limi P(A) = 0 . Since Ai lies in , it has the form

(29)                       Ai = 7T-'Hi,      Hi c- Rni .

Since a set of the form (25) can be cast in the form (26) for each k exceeding
i, there is no loss of generality in assuming that

(30)                            nl<n2<n3< . . ._

We shall show that, if sets (29) satisfy (28) and (30), and if there exists a
positive E such that

(31)                     P(A) > E,        i = 1, 2, . . . ,

then n i Ai 0 0 .
  From (31) and (29), it follows by the definition of P that ,uni(Hi) > s .
By Theorems 1 .1 and 1 .4, there exists in Rni a compact subset Ki of Hi with
,un,(Hi - Ki) < E/2i+1 . If Bi = irn1Ki, then Bi c-, F, Bi c A,, and
                                             E
                               P(Ai - B) < 2i+1 .


From this and (28) it follows that Ci = Bl n . . . n Bi is a subset of A,
satisfying P(A, - C) < 1'=, P(A, - B ;) < e/2 . By (31), therefore, P(C) >
e/2, so that Ci is nonempty .
230   Appendix II

  We have constructed nonempty sets C i (-- 7rn1Ki with Ki compact and
(32)                       Cl    C2 D . . .
                                     Z)
Since Ci c Ai, I l i A i 0 0 will follow if we find a point common to all the
Ci. Let x(j) be an arbitrary element of C ; . If j > i, then x(j) E Ci by (32), and
hence 7r, ix(j) E Ki . Since Ki is compact, we have sup ;, i Ixi (j)I < oo and
hence sup; Ixi (j)I < oo . For each i, therefore, {xi(1), xi(2), . . . } is a bounded
set of real numbers . Therefore (see p . 219) some subsequence {x(j')} of
{x(j)} converges in the sense of R°° to some limit x c R°° . Since x(j') E C;,
and each Ci is closed, (32) implies that x lies in (l i C i .
   We have shown that P is a completely additive probability measure on
the finitely additive field F . Since ~ generates R`°, P can be extended'' to a
probability measure on R°° . Clearly, P satisfies (20). Since F is a determining
class, there can be at most one P satisfying (20), which proves Kolmogorov's
theorem.
   It is not difficult to go on from here and prove a more general version of
the theorem . Let RT be the space of all real functions x = x(t) on an arbitrary
set T, which we may as well take to be infinite . (If T consists of the integers,
then RT = R°° .) For a finite ordered set a = (sl , . . . , sk) of distinct elements
of T, define Ir a : RT -) Rka by ii (x) = (x(si), . . . , x(ska)) ; let G~T be the
a-field generated by the sets 7r;'H with H E qka (for all a and H). Then
(RT, 'qT) is a measurable space ; no topology is involved (or need be
involved).
   A collection of probability measures µa on (Rka, gka) (one measure for
each a) is consistent if ,u a9 = ,ualy~1 whenever a 2 = (sil, . . . , sii) is a permuta-
tion ofj of the elements of a, = (sl , . . . , sk) (here j < k) and ip : Rk --* R' is
defined by ip(x,, . . . , xk) = (xil , . . . , xi j) .
   If the 1u,, are consistent, there exists a unique probability measure P on
 (RT, RT) such that P7r;' = ,u,, for all a .
  To prove this, define, for a sequence T = (t,, t2 , . . .) of elements of T,
a mapping 7r, : RT -* R by 7r,r(x) = (x(t,), x(t2), . . . ). From the existence
theorem for R`°, it follows that there exists a probability measure PT on
(R°°, -q°°) such that P, -iTi 1 = ,u tl,. .tk for every k.
  Now the class of sets i 'H with H E R °° (for all -r and H) is exactly
3T (and does not merely generate it), and it follows easily that P(7rT 1 H) _
PT(H) consistently defines the desired P.

 Measurability of Some Mappings
 Let T denote the unit interval [0, 1] ; let J denote the class of linear
 Borel subsets of T. For each t, the projection 7r t from C to Rl is measurable

 t Halmos (1950, Chapter 3) .
                                                                  Miscellany 231

if. Since the mapping
(33)                              (x, t) -- - x(t)
from C X T to R1 is continuous in the product topology, and since ' x 37-
is the a-field of Borel sets for this topology (see p . 225), (33) is measurable
~XJ .
   For x E C, let h(x) be the Lebesgue measure of the set of t in T for which
x(t) > 0. We want to prove that h is measurable ', and we shall derive this
from a more general result . If we define a real function v of a real variable by
                                           1     if a>0
(34)                         v(cx) =
                                           0     if a < 0,
then
                                           1
(35)                         h(x)     v(x(t)) dt.
                                 =J 0
Now v is (i) Borel measurable, (ii) bounded, and (iii) continuous except on a
set of Lebesgue measure 0 . Using these three properties of v, we shall show
that the function h defined by (35) is measurable `' and is continuous except
on a set of Wiener measure 0 .
   Since, for each x in C, v(x(t)) is a bounded, measurable function of t,
the integral in (35) is well defined . Since the mapping (33) is measurable
'' x .T and since v is measurable, the mapping p : C x T - RI defined by
ip(x, t) = v(x(t)) is also measurable . Since V is bounded, h(x) = fo V (x, t) dt
is measurable in x.t Hence h is measurable V .
   If Dv is the set of discontinuities of v, then by (iii), 2(D„) = 0, where 2
denotes Lebesgue measure on the line . Let E denote the set of (x, t) for
which x(t) E D,. For each positive t,

                    W{x :(x, t) E E} =1          -1_2 du = 0.
                                     ,/ 27rtJn„e
It follows by Fubini's theorem applied to the measure W x 2 on' x 9-
that
                          2{t : (x, t) E E} = 0
if x 0 A, where A is an element of ' with W (A) = 0 . Now if x,, converges to
x pointwise, then v(xn(t)) -*- v(x(t)) for each t such that x(t) 0 D,, . If x 0 A,
this is true for almost all t, and hence
                                1                  1

                            f       v(x,n(t)) dt - rv(x(t))
                                                    o       dt

by the bounded convergence theorem . This proves that h is continuous
except at points forming a set of W-measure 0 .

t See Halmos (1950, Chapter 7) .
232      Appendix II

  The argument goes through if W is replaced by an arbitrary P with the
property that P7rt1 is absolutely continuous with respect to Lebesgue measure
for almost all t. This is true of W° , for example .
  Except for the proof that (33) is measurable, this argument goes through
word for word if C is replaced by D . And the measurability of (33) can be
proved by adapting the proof in Section 14 of the measurability of 7rt .
   One more function on C remains to be analyzed, namely the supremum
h(x) of those t in [0, 1] for which x(t) = 0 . Since {x :h(x) < a} is open,
certainly h is measurable. If h is discontinuous at x, then x(t) must keep to
one side of 0 in (h(x), 1) and keep to the same side of 0 in (h(x) - e, h(x))
for some 8 . That h is continuous except on a set of Wiener measure 0 will
therefore follow if we show that, for each t o , the supremum and infimum of
W over [t o , 1 ] have continuous distributions . Since Wt - Wt ,, with t ranging
over [t o , 1] is distributed as a Wiener path with a linearly transformed time
scale, - Wto + sup s , to Wt has a continuous distribution (see (10.17)). This
last random variable and Wt. are independent, and hence their sum also has a
continuous distribution . The infimum is treated the same way. (This function
h extended to have domain D is not continuous except on a set of Wiener
measure 0.)

More Measurability
In Section 17 we defined the mapping V : D x D o -> D by y,(x, 99) = x °
(see (17 .5) and (17 .6)), and we are to prove it measurable (y -1 -9 (-- -9 x -9o).
Since the finite-dimensional sets in D generate _12, it is enough to prove that,
for each t, the mapping
(36)                               (x, 99) --~ 7rt(x ° 99 ) = x(99 (t))
is measurable -9 x -9o. If 99 k (t) is the smallest ratio ilk not smaller than
q4(t), then (Fk(t) . q,(t) for each t. Hence the mapping
(37)                                        (x, 99) _ -_ x(g3k(t))
converges pointwise to (36), and it suffices to prove this latter mapping
measurable -9 x -9o. Now {(x, q,) : x(92 k (t)) < a} is the union of
(38)                          {(x, 99) : 99(t) = 0} n {(x, T) : x(0) < a}
with the sets
                       t
( 3 9)    {(x, 92) :       k 1 < 92(t) <_        n {(x, 92) : x        < a},   i = 1, . . . , k .
                                            k}                    \k
If H E JL 1 , then { ,T E D o : T(t) E H} is the intersection with Do of the subset
7rt1H of D and hence lies in -9o . Therefore {(x, qq) : 92(t) E H} c- -9 x -90.
Similarly, {(x, (p) : x(t) E H} E -9 x -9o. Thus the sets (38) and (39) all lie in
-9 x _9o, which proves the measurability of (37) .
APPENDIX III

Theoretical Complements




This appendix, most of which requires general (nonmetric) topology, treats
questions that arise naturally out of the theory of weak convergence but are
irrelevant to its application .

The Problem of Measure

Does there exist on the class of all subsets of a given set U a probability
measure that has no atoms (that assigns measure 0 to each individual point)?
The answer certainly depends only on the cardinality of U. It is clear that no
such measure can exist if U is countable, and it can be shown - under the
assumption of the continuum hypothesis that no such measure can exist if
U has the power of the continuum .
  If there does exist an atomless probability measure on the class of all
subsets of U, then the cardinal of U is called measurable ; otherwise this
cardinal is called nonmeasurable . Thus Xo is nonmeasurable, and the
continuum hypothesis implies that the power of the continuum is also non-
measurable . (Among sets on the line, it is the nonmeasurable ones that are
aberrant . Here the terminology is reversed : Among cardinals, it is the
measurable ones that are aberrant .)
  Whether there exist measurable cardinals is a famous unsolved problem
of set theory-the so-called problem of measure . $ If measurable cardinals

tSee Birkhoff (1961, p . 187) . .
$ See Keisler and Tarski (1964) for an account of the problem of measure and a large
bibliography .
                                                                                233
234    Appendix III

exist at all, they must be so large as never to arise in a natural way in
mathematics . We shall see that certain irregular phenomena in weak con-
vergence are equally remote from ordinary mathematical activity because
they can arise only if there exist measuable cardinals .

Separable Measures
Consider now a probability measure P on the class ° of Borel sets in a
metric space S. According to Theorem 1 .4, P is tight if S is separable and
complete . Certainly, completeness can be weakened to topological complete-
ness (the condition that there exists for S an equivalent metric under which
it is complete), and an examination of the proof shows that the assumption
of separability can be weakened to the assumption that P has separable
support . Let us define P itself to be separable if it has a separable support .'
We then have the following result .
THEOREM 1             If P is separable and if S is topologically complete, then P
is tight.
Remark 1 . The hypothesis here that P is separable cannot be suppressed
If P is tight, then it has a or-compact support, and hence is separable . But, of
course, S itself need not be separable .
Remark 2. The hypothesis of topological completeness cannot be
suppressed either : Let S be a thick subset of [0, l ]-a set whose inner
Lebesgue measure A * (S) is 0 and whose outer Lebesgue measure 2*(S) is
1-with the relative topology of the line . Here 9 consists of the sets S n A
with A an ordinary linear Borel set (see (7) on p . 224) . If P is the restriction
of A,* to 7, then P is completely additive ; it is a probability measure
because A* (S) = 1 . If K is compact in S, it is an ordinary Borel set and hence
P(K) = 0 because A* (S) = 0 . Hence P is not tight . Since P is separable
(S itself being separable), Theorem 1 becomes false without the completeness
hypothesis .
Remark 3 . If S consists of the rationals with the relative topology of the
line, then, since S is or-compact, each P on S is tight . On the other hand, by
Baire's category theorem,$ S is not topologically complete . It is an open
problem to characterize topologically those metric spaces that support tight
probability measures only .
      The question now arises, do nonseparable probability measures exist?

t This is the specialization to the metric case of the more general notion of a T-smooth
measure ; see Varadarajan (1958a and 1961a) .
1 See Kelley (1955, p . 200) .
                                                       Theoretical Complements 235

THEOREM 2 A necessary and sufficient condition that each probability
measure on SP be separable is that each discretet subset of S have nonmeasurable
cardinal.
Proof. We first prove the necessity . Suppose S contains a discrete subset
A 0 with measurable cardinal . We shall construct a nonseparable P on Y . Let
Q be an atomless probability measure on the class of all subsets of A 0 , and
define an atomless probability measure P on 9 by P(A) = Q (A r) A0) .
If A is separable, then A f A0 is both discrete and separable and hence
(p . 216) countable, so that Q(A n A 0) = 0. Thus P can have no separable
support .
   The proof of sufficiency is much deeper. Suppose that each discrete subset
of S has nonmeasurable cardinal and consider an arbitrary probability
measure P on Y. We are to show that P is separable . Note first that it suffices
to show that each open cover 9 of S contains a countable subclass
{G 1 , G2, . . . } with

(1)                             P(UnGn) = 1 .

Indeed, for each k there is then a sequence Akl , Ak2 , . . . of open l /k-spheres
with P(U nAkn) = 1, and f1 kUnAkn is a separable support for P.
   Consider then an open cover 9 of S . By the paracompactness theorem,$
there is a class .01' with these properties : (i) ' is an open cover of S. (ii)
Each element of        is contained in some element of W . (iii) 'Y1' can be
represented as a countable union

( 2)                                   = U n 6' ,
where, for each n,
(3)                     inf {p(A, B) : A, B E fin, A 0 B} > 0,
p being the metric on S.
   Fix n for the moment . From each element of `'n choose a single point,
forming in this way a set Sn. Because of (3), Sn is discrete . For A C: Sn , let
An (A) be the P-measure of the union of all those elements of dy n that meet A
(this union is open) . Since the elements of *Pn are disjoint, An is a finite
measure on the class of all subsets of S,n. Since Sn has nonmeasurable
cardinal by hypothesis, A n has a countable support . (Otherwise we could
subtract away the atomic part of An to obtain on the class of all subsets of Sn
an atomless measure vn with 0 < vn (Sn) < oo, and vn could be normalized
to a probability measure .) Let A n be a countable subset of Sn with
(4)                               2 n(S, - A n) = 0,

f See p . 215 .
1 See Kelley (1955, p . 129) .
236   Appendix III

let /, be the class of elements of -V' n that meet A n , and define f = U nJ,~ .
Since each class f,, is countable, so is / .
   If Hn is the union of the sets in -ye n and Jn is the union of the sets in f n ,
then, by (4) and the definition of A n , P(Hn - Jn) = 0 . Since i covers S, it
follows by (2) that U H,, = S and hence, if J = U nJn , that P(J) = 1 .
Now J is just the union of the sets in     f,   which we can enumerate as Gi,
G 2,      Each Gn lies in -V' and hence is contained in some element Gn of
9. Since P(J) = 1, it follows that the Gn satisfy (1), as required .
  That each P on a separable S is itself separable, an obvious fact, follows
because each discrete subset must have the nonmeasurable cardinal N o .
Theorem 2 also implies that each P on S is separable if S itself has non-
measurable cardinal, which is true if the power of S does not exceed that
of the continuum and the continuum hypothesis is true . In any case, the
search for a nonseparable probability measure belongs properly not to
probability but to set theory .

The Topology of Weak Convergence
Consider now the space Z = Z(S) of probability measures on (S, °) . Make
Z into a Hausdorff space by taking as the basic neighborhoods of P the sets
of the form

(5)                  {Q : JfdQ_J'fdP < e, i = 1, . . . , k},

where c is positive and fl , . . . , fk are elements of C(S). The resulting topology
we shall call the topology of weak convergence and denote by ')V. We have
Pn = P if and only if the sequence {P,,,} *-converges to P.
   We shall show that there are three other bases for 0, namely, the sets
(6)                 {Q : Q(Fi) < P(Fi) + E, i = 1, . . . , k}
with Fi closed, the sets
(7)                    {Q : Q(Gz) > P(Gi) - E, i =
with Gi open, and the sets
(8)                {Q : I Q(Ai) - P(Ai)l < E, i = 1, . . . , k}
with Ai a P-continuity set . Certainly, each of these three classes of sets is a
basis (for some topology) . Theorem 2 .1 is the sequential version of the
following result .
THEOREM 3 The three bases just described all generate* .
Proof. Since (6) and (7) coincide if Gi = Fi°, the two corresponding bases
are identical . We shall show that the basis (6) generates the same topology as
does (8) and then that it generates the same topology as (5), that is, #'.
                                                        Theoretical Complements   237

  Fix P. If A is a P-continuity set, then for Q in a set of the form (6) we have
Q(A) < Q(A-) < P(A-) + E = P(A) + E, and for Q in a set of the form (6)
(or (7)) we have Q(A) > Q(A 0 ) > P(A °) - .s = P(A) - s. Since the sets
(6) do have the properties of a basis, each set (8) contains a set (6) (with the
same P) . On the other hand, if F is closed, then there is some 6 for which
(9)                          F S = { x : p(x, F) < b}
is a P-continuity set and
(10)                          P(P) < P(F) + 1 s .
If IQ (Fa) - P(P) I < 1 s, then Q(F) < P(F) + e. Thus each set (6) contains
a set (8) .
   We now compare (6) with (5). Given a closed F, choose b so that (9)
satisfies (10), and then choose in C(S) an f with value 1 on F, value 0 outside
Fa, and value everywhere contained between 0 and 1 (Theorem 1 .2). If
 f f dQ - f f dPI < 2e, then Q(F) < P(F) + E . Thus each (6) contains a (5) .
   It remains only to find within (5) a set of the form (6) . We need consider
only a single f in C(S) and we may assume that 0 < f(x) < 1 for all x.
Choose k so that Ilk < e and let Fi = {x : ilk < f (x)} . By (2 .2) we have
f f dQ < e + k-1 Ei Q(Fi ) and k-1 E i P(F2 ) < f       f
                                                     dP. For Q in (6) we thus
have f f dQ < f dP + 2e. The same argument applied to 1 - f completes
the proof.
   By N(P) we shall mean a '#'-neighborhood of P having any of the forms
(5) through (8) . We are free to work with whatever base is most convenient .
THEOREM 4          The probability measures with finite support are )Y-dense
in Z.
Proof. Consider a neighborhood N(P) of the form (6) . From each nonempty
set B in the finite partition generated by F 1 , . . . , Fk choose a single point and
place there a mass P(B) . The resulting measure has finite support and lies in
N(P) because it agrees with P for each Fi .
  Theorem 4 applies even to the approximation of a nonseparable P (if
there are any).. Therefore, if a subset II of Z consists exclusively of separable
measures, one cannot conclude that each element of the *'-closure of II
is separable . If, however, the elements of II have a common separable
support and P lies in the 'V-closure of fl, then P is separable (because, if
A is the closure of a common separable support, then A is separable and it
follows by Theorem 3 that P(A) = 1) . Since a countable collection of
separable measures has a common separable support, P is separable if
Pn => P and each Pn is separable .
   It is natural to ask when )Y is metrizable . For P and Q in Z, let p(P, Q)
be the infinum of those positive 8 for which the inequalities Q(A) < P(AE) + s
238    Appendix III

and P(A) < Q(AE) + E hold for all A in 5P, where Ae = {x : p(x, A) < E} .
From p(P, Q) = 0 it follows that P and Q agree on closed sets and hence
(Theorem 1 .1) are identical . The remaining postulates being easy to check,
p is a metric on Z-the Prohorov metric. We shall see that, if YV can be
metrized at all, then p does it .
   Fix P. If for each N(P) there is about P a p-sphere contained in N(P), we
say p is at least as fine as Wl- at P. If, in addition, for each p-sphere about P
there is an N(P) contained in it, we say p and 0' are equivalent at P.
THEOREM 5 For arbitrary P, p is at least as fine as Wl' at P . Moreover,
p and #" are equivalent at P if and only if 'Y' has a countable basis at P,
which in turn holds if and only if P is separable.
Proof Given P, F, and E, choose 6 so that b < e and (9) satisfies (10). If
p(P, Q) < 1 6, then Q(F) < P(F6) + 6 < P(F) + E . Thus each N(P) of the
form (6) contains a p-sphere about P, which proves the first part of the
theorem.
   If p and #' are equivalent at P, then certainly IV has a countable basis at
P. It remains then to prove that this last condition implies the separability of
P and that the separability of P implies the equivalence of p and IV at P.
   Suppose 1K has at P a countable basis Nn (P), n = 1, 2, . . . . By Theorem
4, each nk 1 Nk (P) contains a P,, with separable (even finite) support . But
then P,, => P, which, as remarked after the proof of Theorem 4, implies that
P is separable .
   Finally, suppose that P is separable . We are to prove that p and ')V are
equivalent at P, for which, in view of the first part of the theorem, it suffices
to show that a p-sphere with radius s and center P must contain some N(P) .
   Choose 6 so that 36 < E . Cover the separable support of P by P-continuity
spheres of diameter less than 6, pass to a countable subcover (p . 216), and
by the usual procedure construct disjoint P-continuity sets A 1 , A2 , . . . that
cover the support . Now choose k so that

(11)                          P ( k A 2 ) > 1 - 6.
                                  i=1
Each of A,, . . . , Ak has diameter less than b and, if / is the (finite) class of
unions of these sets, each element of Q/ is a P-continuity set .
  By Theorem 3, there is an N(P) such that Q E N(P) implies
(12)                    IQ(A) - P(A)I < 6,        A E d.
This inequality and (11)' imply
                                   k
(13)                          Q (U A) > 1 - 26 .
                                  a-1

We shall show that AP, Q) < E if Q E N(P) .
                                                     Theoretical Complements   239

   Given the general B in 9, consider the union of those sets among A 1 , . . . ,
Ak -that meet B. If A denotes this union, then it satisfies (12). The relation
B (-- A U (Uk1 Ai)°, the relation A ~ Ba (true because diam A i < 6), and
the inequalities (11), (12), and (13) combine to yield P(B) < Q(BS) + 26
and Q(B) < P(B S) + 36. Since 36 < E, p(P, Q) < E follows .
  It follows by Theorems 2 and 5 that 0' is metrizable if and only if each
separable subset of S has nonmeasurable cardinal, in which case it is
metrizable by p .
   One can ask after the separability of Z . If S is separable, then the p and Z
topologies coincide on Z, and it follows by Theorem 4 that the probability
measures with finite support are dense . It is not difficult to go on to show
that, if A 0 is a countable, dense set in S and Z° consists of those P having
finite support contained in A 0 and rational masses, then Z ° is countable and
dense relative to p. Thus Z is metrizable and separable if S is separable .
   On the other hand, if ) satisfies the second axiom of countability, it can
be metrized by p and is separable . Since S with its metric is homeomorphic
with the set of unit masses in Z, it follows that S is separable .

Prohorov's Theorem
Let us reexamine Prohorov's theorem in the light of the preceding results .
If lI is a subset of Z, let II ., and H .,x, denote its closures with respect to
p and' . Theorem 5 implies that II ,, (zz ILK (with strict inclusion for some
II if IV is not metrizable) .
   A set in a topological space is compact if each open cover of it has a finite
subcover ; it is sequentially compact if each sequence in it contains a sub-
sequence converging to a limit that is also in the set . Consider these three
statements
   10. Each sequence in II contains a *--convergent subsequence .
   2 0 . II,,, is sequentially compact .
   3°. ILK is compact .
    The limit of the convergent subsequence in 1 0 is not required to lie in H,
 but, of course, it will lie in IL K. Clearly, 2° implies 1° . From the three
 statements, one can make up five other implications ; whether any of them
 are true is unknown .' If each separable subspace of S has nonmeasurable
 cardinal, however, the ) topology is metrizable, so that all three concepts
 coincide, and we shall see that this is also true if II is tight . In this book
 (see the beginning of Section 6), we have defined H to be relatively compact if
 it satisfies 1 0.

 t To me .
240    Appendix III

  Consider the direct half of Prohorov's theorem (Theorem 6 .1) .
THEOREM 6 If II is tight, then II p = H,,, H, is tight, the p and *'
topologies coincide on rl o,, and ILr is both compact and sequentially
compact (in either topology) .
Proof. Since 11 is tight, there is to each e a compact K such that
Q(K) > 1 - 2e for all Q in II . Suppose P E II,~. By Theorem 3, there is
an N(P) such that Q E N(P) implies Q(K) < P(K) + 2e . Choosing Q in
N(P) n 11 leads to P(K) > 1 - e. Thus n, is tight.
   In particular, each element of n ., is separable . Therefore (Theorem 5)
the p and WY topologies coincide on IL,r ; since r l,, ~-- II,, in any case,
IIp = II.- follows . From the tightness of 11 .,, it follows by Theorem
6 .1 that II ., is sequentially compact in the sense of IV . Since compactness
and sequential compactness are the same in the metric case, the proof is
complete .
  The direct Prohorov theorem can also be used to investigate the complete-
ness of Z. Suppose that S is complete and that each element of Z is separable
(and hence tight) . Then p and IV coincide on Z, and we shall show that Z
is p-complete . For this it is enough to show that a p-fundamental sequence
{Pn} necessarily contains a weakly convergent subsequence, which will
follow by the direct Prohorov theorem if we prove that {Pn} is tight. Finally,
as we saw in the proof of Theorem 6 .2 (see p. 40), since S is complete {Pn}
is tight if, for each positive e and 6, there exists a finite collection A,, . . . , Ak
of 6-spheres such that
(14)                      Pn (A l v - - - v Ak) > 1 - e
for all n.
   Choose 77 so that 2?1 < min {e, 6}, and then choose n o so that n > n o
implies p(P, P,Z) < 77 . Since P,,,0 is separable, there exist finitely many
n-spheres B 1 , . . . , Bk such that P,,O (U i=1 B .) > 1 - ?7. Let A1, . . . , Ak be
the 2~-spheres with the same centers . Since (Uk 1 B3)'' ~ Uk             i=,. Ai and
p(Pn , Pno) < ri for n > n o , it follows that (14) holds for n > n o . Since each
Pn is separable, we can ensure that (14) holds for the finitely many n preceding
no by enlarging the system {A i }.
   Thus Z is p-complete if S is complete and each probability measure on it
is separable . Suppose, on the other hand, that Z is p-complete. It is not
difficult to show that the set Z o of unit masses is p-closed and hence also
p-complete and then to show that S is complete .
   We turn now to the converse half of Prohorov's theorem .
THEOREM 7 If II is IV-compact and each measure in it is separable, and
if S is topologically complete, then 11 is tight .
                                                       Theoretical Complements 241

Proof. By Theorem 1, the elements of II are individually tight. To prove H
itself tight, it suffices as usual to produce, given E and 6, finitely many
b-spheres A 1, . . . , Ak such that P(A1 U . . . U Ak) > 1 - E for all P in H .
  If P lies in H, then, since P is tight, there is a compact set K such that
P(K) > 1 - 2 E, and K can be covered by finitely many open 6-spheres
BP i, i = 1, . . . , k p. By Theorem 3, there is a *'-neighborhood N(P) of P
such that Q E N(P) implies that the union Gp of the Bp, i satisfies Q(Gp) >
P(G p) - 3 E and hence Q (G p) > 1 - e. Since H is #'-compact, it can be
covered by a finite selection of these N(P) . Take A 1, . . . , Ak to consist of
the Bp,i corresponding to the neighborhoods N(P) selected.
  In view of Theorem 1, Theorem 7 is the same as the assertion that, if H
is 'WY-compact and each of its elements is tight, and if S is topologically
complete, then H is tight . The hypothesis that each P in II is tight cannot be
suppressed, because a single nontight P forms a compact set . On the other
hand, it seems reasonable to conjecture that the completeness hypothesis
can be suppressed-to conjecture that H is tight if it is 'Yom-compact and if
each of its elements is tight . t Although the problem is open, there is an
interesting result in this direction .
THEOREM 8 Suppose that P,, => P, where P and each of the P n are tight.
Then {P, P1 i P2, . . . } is tight .
Proof. Since the measures involved are individually tight, it is enough to
show that for each E there is a compact K such that
(15)                             P,, (K)>1-E
for all sufficiently large n .
   Given e, use the tightness of P to choose a compact K' with P(K') > 1 - 3E,
and put Gk ={x : p(x, K') < 1/k}. Since P„ => P, there is an increasing
sequence {nk} such that n > nk implies
( 16)                 P„ (G k) > P(Gk) - 3E > 1 - ~ E .
For nk < n < nk+1 , use the tightness of P,, to choose a compact K' satisfying
K. <-- Gk and P,,,(Gk - Kn) < 3E . If Kk = K' U U nk+nk K, , then Kk is
compact, K' c Kk (-- Gk , and nk < n < nk+1 implies Pf(Gk - Kk) < 3E .
From (16) it now follows that nk < n < nk+1 implies
(17)                            Pf(Kk) > 1 - E .
   Put K = U kKk. Suppose {xu} is a sequence in K; if there is some one Kk
containing all the x., then {x.u } contains a convergent subsequence ; otherwise

t Varadarajan (1958a and 1961a) has the result in this form, but his proof contains a
lacuna .
242 Appendix III



there is a subsequence {xum} and a sequence {v,,,} of integers such that
xuM E KT,,. c- G„,. and v,n, > m, so that p(x u. , K') < 1/m ; {x u.} must
contain a further subsequence that 'converges . Thus K is compact . If n > nl,
then nk < n < nk+1 for some k, and (15) follows from (17) and the relation
K D Kk.
  It is essential in this theorem to assume that P is tight : Take a nontight P
on a separable S, as in the second remark following Theorem 1, and apply
Theorem 4 .
Remarks.   Theorem 8 and the example in Remark 2 following Theorem 1 are due to
LeCam (1957) ; the remaining results are for the most part due to Varadarajan (1958a and
1961a) .
Bibliography




  Articles in the Soviet journal Teoriya Veroyatnosti i ee Primeneniya are listed as they
appear in the English translation Theory of Probability and its Applications, published by
the Society for Industrial and Applied Mathematics .


A. D . Alexandroff (1940-43), "Additive set functions in abstract spaces," Mat. Sb . 8,
      307-348 ; 9, 563-628 ; 13, 169-238 .
T. W . Anderson (1963), "Asymptotic theory for principal component analysis," Ann .
     Math . Statist . 34, 122-148 .
r. W. Anderson and D . A . Darling (1952), "Asymptotic theory of certain `goodness of fit'
      criteria based on stochastic processes," Ann . Math . Statist . 23, 193-212 .
Stefan Banach (1932), Theorie des Operations Lineaires . Warsaw : Monografje Mate-
      matyczne.
Robert Bartoszynski (1961), "A characterization of the weak convergence of measures,"
      Ann . Math . Statist . 32, 561-576 .
P. J . Bickel (1968a), "Some contributions to the theory of order statistics," to appear .
      (1968b), "A distribution free version of the Smirnov two sample test in the p-variate
      case," to appear .
Patrick Billingsley (1956), "The invariance principle for dependent random variables,"
      Trans . Amer. Math . Soc. 83, 250-268 .
      (1961), "The Lindeberg-Levy theorem for martingales," Proc . Amer. Math . Soc . 12,
      788-792 .
      (1962), "Limit theorems for randomly selected partial sums," Ann. Math . Statist . 33,
      85-92.
      (1964), "An application of Prohorov's theorem to probabilistic number theory,"
      Ill. J. Math . 8, 697-704.
      (1965), Ergodic Theory and Information . New York : John Wiley and Sons .
Patrick Billingsley and Flemming Topsoe (1967), "Uniformity in weak convergence,"
      Z. Wahrscheinlichkeitstheorie and Verw . Gebiete 7, 1-16.
Garret Birkhoff (1961), Lattice Theory. Providence : The American Mathematical Society .
                                                                                        243
244   Bibliography

Z. W . Birnbaum and Ronald Pyke (1958), "On some distributions related to the statistic
     D1," Ann . Math . Statist . 29, 179-187 .
J. R. Blum, D . L . Hanson, and J . I. Rosenblatt (1963), "On the central limit theorem for
     the sum of a random number of independent random variables," Z . Wahrschein-
     lichkeitstheorie and Verw . Gebiete 1, 389-393 .
H. Bohr (1932), Fastperiodische Funktionen, Erg. Math . 1, no . 5. Berlin-Gottingen-
     Heidelberg : Springer-Verlag . (English translation 1947 . New York : Chelsea.)
N. N. Chentsov (1956), "Weak convergence of stochastic processes whose trajectories
     have no discontinuities of the second kind and the `heuristic' approach to the
     Kolmogorov-Smirnov tests," Theor . Probability Appl . 1, 140-144.
H. Chernoff (1956), "Large sample theory : parametric case," Ann . Math . Statist . 27,1-22.
H. Chernoff and H . Teicher (1958), "A central limit theorem for sequences of exchangeable
     random variables," Ann . Math . Statist . 29, 118-130 .
D. M. Chibisov (1965), "An investigation of the asymptotic power of the tests of fit,"
     Theor. Probability Appl. 10, 421-437.
Z . Ciesielski and H . Kesten (1962), "A limit theorem for the fractional parts of the sequence
     2kt," Proc . Amer . Math . Soc . 13, 596-600 .
Harald Cramer (1946), Mathematical Methods of Statistics . Princeton : Princeton University
     Press.
H. Cramer and H . Wold (1936), "Some theorems on distribution functions," J . London
     Math . Soc . 11, 290-295.
D. A. Darling (1957), "The Kolmogorov-Smirnov, Cramer-von Mises tests," Ann . Math .
     Statist . 28, 823-838 .
D. A. Darling and P . E . Erdos (1956), "A limit theorem for the maximum of normalized
     sums of independent random variables," Duke Math . J. 23, 143-155.
Jean Dieudonne (1960), Foundations of Modern Analysis . New York : Academic Press .
W. Doeblin (1940), "Remarques sur la theorie metrique des fractions continues," Com-
     positio Math. 7, 353-371 .
M. Donsker (1951), "An invariance principle for certain probability limit theorems,"
     Mem. Amer . Math. Soc. 6.
     (1952), "Justification and extension of Doob's hueristic approach to the Kolmogorov-
     Smirnov theorems," Ann . Math . Statist . 23, 277-281 .
J. L. Doob (1949), "Heuristic approach to the Kolmogorov-Smirnov theorems," Ann .
     Math . Statist . 20, 393-403 .
     (1953), Stochastic Processes . New York : John Wiley and Sons .
R. M. Dudley (1966), "Weak convergence of probabilities on nonseparable metric spaces
     and empirical measures on Euclidean spaces," Ill. J. Math . 10, 109-126 .
     (1967), "Measures on non-separable metric spaces," Ill. J. Math . 11, 449-453.
Nelson Dunford and Jacob T . Schwartz (1958), Linear Operators . Part I: General Theory .
     New York : Interscience Publishers .
Meyer Dwass and Samuel Karlin (1963), `Conditional limit theorems," Ann . Math .
     Statist. 34, 1147-1167.
P. Erdos and M. Kac (1946), "On certain limit theorems in the theory of probability,"
     Bull. Amer . Math . Soc. 52,292-302.
      (1947), "On the number of positive sums of independent random variables," Bull.
     Amer . Math. Soc . 53, 1011-1020 .
William Feller (1957), An Introduction to Probability Theory and Its Applications, Volume I,
     second edition . New York : John Wiley and Sons .
      (1966), An Introduction to Probability Theory and Its Applications, Volume II . New
     York : John Wiley and Sons .
                                                                           Bibliography   245

R. Fortet (1940), "Sur une suite egalement repartie," Studia Math . 9, 54-69 .
I. I. Qikhman and A. V . Skorohod (1965), Introduction to the Theory of Random Processes .
   Moscow .
Leonard Gross (1963), "Harmonic analysis on Hilbert space," Mem . Amer . Math . Soc . 46 .
Paul R. Halmos (1950), Measure Theory . New York : D . Van Nostrand .
G. H . Hardy and E. M. Wright (1960), An Introduction to the Theory of Numbers, fourth
      edition. Oxford : Clarendon Press .
P. L . Hennequin and A. Tortrat (1965), Theorie des Probabilities et Quelques Applications .
      Paris : Masson et Cie .
I. A . Ibragimov (1962), "Some limit theorems for stationary processes, " Theor. Proba-
      bility Appl . 7, 349-382 .
      (1963), "A central limit theorem for a class of dependent random variables," Theor .
      Probability Appl. 8, 83-89 .
Kiyosi Ito and Henry P. McKean, Jr . (1965), Diffusion Processes and Their Sample Paths .
      Berlin-Heidelberg-New York : Springer-Verlag .
M . Kac (1946), "On the distributions of values of sums of type E f(2kt)," Ann . of Math .
      47, 33-49.
      (1949), "On deviations between theoretical and empirical distributions," Proc . Nat .
      Acad . Sci . U.S.A. 35, 252-257.
Gopinath Kallianpur (1961), "The topology of weak convergence of probability measures,"
      J. Math . Mech . 10, 947-969.
Samuel Karlin (1966), A First Course in Stochastic Processes . New York : Academic
      Press .
 John L. Kelley (1955), General Topology . New York : D . Van Nostrand .
 A. Ya . Khinchine (1961), Continued Fractions, third edition . Moscow : State Publishing
      House of Physical-Mathematical Literature. (English translation 1964 . Chicago
       University of Chicago Press )
       (1933), Asymptotische Gesetze der Wahrscheinlichkeitsrechnung . Erg . Math . 2, no . 4.
       Berlin-Gottingen-Heidelberg : Springer-Verlag .
 H. J . Keisler and A . Tarski (1964), "From accessible to inaccessible cardinals," Fund.
       Math. 53, 225-308 .
 Ernest G. Kimme (1957), "On the convergence of sequences of stochastic processes,"
       Trans . Amer . Math . Soc . 84, 208-229.
       (1960), "Some equivalence conditions for the convergence in distribution of sequences
       of stochastic processes," Trans. Amer . Math . Soc . 95, 495-515.
 Frank B . Knight (1962), "On the random walk and Brownian motion," Trans . Amer.
       Math . Soc . 103, 218-228.
 A. N . Kolmogorov (1931), "Eine Verallgemeinierung des Laplace-Liapounoffschen Satzes,"
       Izv . Akad. Nauk SSSR Ser . Fiz-Mat., 959-962 .
       (1933), Grundbegriffe der Wahrscheinlichkeitsrechnung . Erg . Math . 2, no . 3 . Berlin-
       Gottingen-Heidelberg : Springer-Verlag.
       (1956), "On Skorohod convergence," Theor . Probability Appl. 1, 213-222 .
 A. N. Kolmogorov and Yu. V. Prohorov (1954), "Zufallige Funktionen and Grenzverteil-
       ungssatze," Berich fiber die Tagung Wahrscheinlichkeitsrechnung and Mathematische
       Statistik, 113-126 . Berlin : Deutscher Verlag der Wissenschaften .
 John Lamperti (1962), "An invariance principle in renewal theory," Ann . Math . Statist .
       33, 685-696 .
       (1962a), "A new class of probability limit theorems," J. Math . Mech . 11, 749-772 .
       (1962b), "On convergence of stochastic processes," Trans . Amer. Math . Soc . 104,
       430-435 .
246   Bibliography

L . LeCam (1957), "Convergence in distribution of stochastic processes," Univ . California
     Publ . Statist . 2, no . 11, 207-236 .
Paul Levy (1925), Calcul des Probabilites . Paris : Gauthier-Villars .
     (1937), Theorie de l'Addition des Variables Aleatoires . Paris : Gauthier-Villars .
     (1948), Processus Stochastiques et Mouvement Brownien Paris : Gauthier-Villars .
Michel Loeve (1960), Probability Theory, second edition . Princeton : D. Van Nostrand .
H. B . Mann and A . Wald (1943), "On stochastic limit and order relations," Ann . Math.
     Statist . 14, 217-226 .
A . M . Mark (1949), "Some probability theorems," Bull. Amer . Math . Soc . 55, 885-900 .
J. C . Oxtoby and S . Ulam (1939), "On the existence of a measure invariant under a trans-
     formation," Ann . of Math . (2) 40, 560-566 .
K. R . Parthasarathy (1967), Probability Measures on Metric Spaces . New York : Academic
     Press .
Yu. V . Prohorov (1953), "Probability distributions in functional spaces, " Uspehi Matem .
      Nauk (N .S .) 55, 167.
      (1956), "Convergence of random processes and limit theorems in probability theory,"
      Theor . Probability App! . 1, 157-214 .
      (1960), "The method of characteristic functionals," Proceedings of the Fourth Berkeley
      Symposium on Mathematical Statistics and Probability, Volume 2, 403-419 .
 Ronald Pyke (1965), "Spacings," J . Roy . Stat. Soc . Ser. B 27, 395-449 .
      (1968), "The weak convergence of the empirical process of random sample size," to
      appear .
 Ronald Pyke and Galen Shorack (1968), "Weak convergence of the two-sample empirical
      process and the Chernoff-Savage theorem," to appear .
 R . Ranga Rao (1962), "Relations between weak and uniform convergence of measures
      with applications," Ann . Math . Statist . 33, 659-680 .
 R . Ranga Rao and V. S. .Varadarajan (1958), "On a theorem in metric spaces," Ann .
      Math . Statist . 29, 612-613 .
 A. Renyi (1958), "On mixing sequences of sets," Acta Math . Acad. Sci. Hung . 9, 215-228 .
       (1960), "On the central limit theorem for the sum of a random number of independent
      random variables," Acta . Math . Acad . Sci. Hung. 11, 97-102.
 Bengt Rosen (1964), "Limit theorems for sampling from a finite population," Arkiv for
      Matematik, 5, 383-424 .
       (1967a), "On the central limit theorem for sums of dependent random variables," Z .
       Wahrscheinlichkeitstheorie and Verw . Gebiete 7, 48-82 .
       (1967b), "On asymptotic normality of sums of dependent random variables," Z .
       Wahrscheinlichkeitstheorie and Verw . Gebiete 7, 95-102.
       (1967c), "On the central limit theorem for a class of sampling procedures," Z . Wahr-
       scheinlichkeitstheorie and Verw . Gebiete 7, 103-115 .
  H. Royden (1963), Real Analysis . New York : Macmillan .
  H . Scheffe (1947), "A useful convergence theorem for probability distributions," Ann .
       Math . Statist . 18, 434-438 .
  Paul Schmid (1958), "On the Kolmogorov and Smirnov limit theorems for discontinuous
       distribution functions," Ann . Math . Statist . 29, 1011-1027.
  J. Sethuraman (1964), "On the probability of large deviations of families of sample means,"
       Ann . Math. Statist . 35, 1304-1316.
       (1965), "On the probability of large deviations of the mean for random variables in
       D[0, 1]," Ann . Math . Statist . 36, 280-285 .
  George F . Simmons (1963), Introduction to Topology and Modern Analysis . New York :
       McGraw-Hill .
                                                                         Bibliography   247

A. V . Skorohod (1956), "Limit theorems for stochastic processes," Theor . Probability
      -Appl . 1, 261-290 .
      (1957), "Limit theorems for stochastic processes with independent increments," Theor .
      Probability Appl. 2, 138-171 .
      (1961), Studies in the Theory of Random Processes . Kiev : Kiev University Press .
      (English translation 1965 . Reading : Addison-Wesley .)
E . E . Slutsky (1925), "Ober Stochastische Asymptoten and Grenzwerte," Metron 5, 1-90 .
      (1937), "Qualche proposizione relativa alla teoria delle funzioni aleatorie," Giorn .
      Ist . Ital. Attuari 8, 183-199 .
Charles Stone (1963), "Weak convergence of stochastic processes defined on semi-infinite
      time intervals," Proc . Amer . Math . Soc. 14, 694-696 .
      (1963), "Limit theorems for random walks, birth and death processes, and diffusion
      processes," Ill. J. Math . 7, 638-660 .
V . Strassen (1964), "An invariance principle for the law of the iterated logarithm," Z .
       Wahrscheinlichkeitstheorie and Verw. Gebiete 3, 211-226 .
E . C . Titchmarsh (1939), The Theory of Functions, second edition . Oxford : Oxford
      University Press .
Flemming Topsoe (1967a), "On the connection between P-continuity and P-uniformity
      in weak convergence," Theor. Probability Appl. 12, 281-290.
      (1967b), "Preservation of weak convergence under mappings," Ann . Math . Statist . 38,
       1661-1665 .
Bruce E . Trumbo (1965), "Sufficient conditions for the weak convergence of conditional
      probability distributions in a metric space ." Thesis, University of Chicago .

V. S . Varadarajan (1958a), "Convergence in distribution of stochastic processes ." Thesis,
     Calcutta University .
     (1958b), "Weak convergence of measures on separable metric spaces," Sankyi 19,
     15-22 .
     (1958c), "On the convergence of probability distributions,"Sankya, 19, 23-26 .
     (1961a), "Measures on topological spaces," Mat . Sb . 55 (97), 35-100. (English trans-
     lation 1965 . Providence : American Mathematical Society Translations, series 2, 48,
     161-228 .)
     (1961b), "Convergence of stochastic processes," Bull. Amer. Math . Soc . 67, 276-280 .
Summary of Notation




This list includes only symbols used systematically throughout the book in some special
way . Although the generic element of S is asserted to be x, it can actually be any letter in
that general region of the lower case roman alphabet, possibly with subscripts and so on ;
similar remarks apply to other generic elements .


Set Theory

Ec is the complement of E ; El - E2 = E 1 n E 2c is the difference of E l and E2 ; E l + E2 =
(El - E2) U (E2 - E1 ) is their symmetric difference ; l,,, is the indicator or characteristic
function of E .


Probability Spaces

(U, .4) is a measurable space ; co and E are the generic elements of U and q ; P is a probability
measure on             E denotes expected value ; ~ is a random variable, and {5 n } and {$ t} are
stochastic processes .
  If h maps (U, .1) into (U',
                                            h-1-4' c .4

means that h -1 E' E -I for each E' c Wit' -that is, that his measurable -and Ph -1 has value
P(h - 'E') at E' (p . 222) .


 The General Metric Space

S is a metric space with generic point x, metric p(x, y) (and p(x, A) - see p . 215), and
or-field 9' of Bore] sets ; A ° , A - , and aA are the interior, closure, and boundary of the generic
subset A (which lies in So unless the contrary is stated) ; S(x, e) is the open e-sphere (ball)
about x ; the general closed set is F (but this can also be a distribution function), the general
open set is G, and the general compact set is K (but this can also be a constant or bound) .
 248
                                                                        Summary of Notation 249

  C(S), with generic element f, is the class of bounded, continuous functions on C ; if h
maps S into another metric space, Dh is the set of its discontinuities .
  P and Q are probability measures on (S, 9) ; P,, = P denotes weak convergence ; II is a
family of P's .


Special Metric Spaces

The a-field of Borel sets in a space is denoted by the script version (with any attendant
superscripts) of the upper case roman letter denoting the space itself .
    R''' is Euclidean k-space ; H is the generic element of 9 k ; F is a distribution function ;
F , = F denotes weak convergence (p . 18) ; for the notations x < y, x < y, Ix - y1, and
  1
(a, b], see p . 17 .
    RIO is the topological product of a countable sequence of copies of the real line (pp . 19
and 218), with generic point x = (x 1 , x 2 , . . .) ; Tr k (x) = (x 1 , . . . , x k ) is the natural pro-
jection into Rk .
     C is C[0, 1] (pp . 19, 54, and 220), with metric p and generic point x = x(t) ; Tr tl . . tk (x) _
(x(t 1),       x(t k )) is the natural projection into Rk ; for x t as a coordinate variable and for
the phrase "the distribution of x t under P", see p . 60 .
     D is D[0, 1] (p . 109), with two equivalent metrics d (p . 111) and d o (p . 113), and generic
point x = x(t) ; projections Trtl . . . tk and coordinate variables x t are as for C ; special symbols :
 . and A (p . 111), II) II (p . 112), Th (p . 123), J t (p . 124), and T Y (p . 128) .


Random Elements

X is a random element (p . 22) with value X(w) at w ; if its range is a function space,
X(t) = Tr t X and X(t, w) = Tr t (X(w)) (p . 57 for C ; p . 128 for D) ; X,, -9 . X and Xn L, ) P
denote convergence in distribution (pp . 23 and 24) ; X,,, J a and X,n -P-->. X denote
convergence in probability (pp . 24 and 26) ; for (X, Y) and p(X, Y), see pp . 25 and 225 .
   N and N(µ, a2 ) are normal distributions or variables (p . 24) ; W is Wiener measure on C
(p . 61), a random function in C with that distribution (p . 64), or the corresponding
measure or random function in D (p . 137) ; W ° is the Brownian bridge, as a measure or a
random function in C or in D (pp . 64, 65, and 141) .


 Moduli

 The modulus of continuity for C and related moduli for D :

                                                        pp . 54 and 220,
                                                        p . 58,
                                                        p . 109,
                                                        p . 110,
                                                        p . 118,
                                                        p . 128 .
Index


Alexandrov, 16                              Coordinate variables, in C, 60
Anderson, 34                                 in D, 123
Arc sine law, 80, 138, 194                  Cramer-Wold theorem, 49
Arzela-Ascoli theorem, 55, 221
Asymptotically independent increments,      Darling, 86, 108
   157                                      De Moivre-Laplace theorem, 1, 12
                                            Determining class, 15
Bartozynski, 48                             Diagonal method, 219
Base for a topology, 215                    Diffusion, 158
Bickel, 108                                 Diophantine approximation, 193
Billingsley, 16, 17, 150, 195, 208          Discontinuity of the first kind, 109
Birkhoff, 233                               Discrete set, 215
Birnbaum, 108                               Distribution function, 17, 22
Bjornsson, 17                               Distribution of a random element, 22
Blum, 160                                   Doeblin, 195
Borel set, 3, 7                             Domain of a random element, 22
Boundary, 215                               Donsker, 6, 76, 108, 143
Brownian bridge, 64                         Donsker's theorem, 68, 137
Brownian motion, 4, 62, 154                 Doob, 6, 108, 165
Brownian motion process, 64                 Dudley, 16, 153
                                            Dunford, 16
Central limit theorem, 42, 72               Dwass, 214
Change of variable, 222
Characteristic function, of a probability   Empirical distribution function, 5, 103,141
   measure, 45                              E-net,. 217
  of a set, 8                               Equivalent metrics, 215
Chentsov, 102, 108                          Erd6s, 6, 76, 86
Chernoff, 34, 214                           Exchangeable random variables, 212
Chibisov, 153
Ciesielski, 205                             Feller, 52, 81
Compactness, 217                            Finite-dimensional distributions, in C, 30
Complete set, 217                            in D, 123
Continued fractions, 169, 192, 201           of random elements, 40 1
Continuity of sample paths, 66                in R OC) , 3 0
Continuity set, of a measure, 2, 11         Finite-dimensional sets, in C, 19
  of a random element, 23                    in D, 121
Convergence, in distribution, 23, 24          in R OO, 19
  in probability, 24, 26                    Fortet, 195
Convergence-determining class, 15           Functional central limit theorem, 72
                                                                                     251
252    Index

Function of a 0-mixing process, 182    Marginal distribution, 20
                                       Mark, 86, 143
Gaussian random function, 64           Martingale, 205
Gauss's measure, 169                   Measurability, 222
Gikhman, 16                            Measurable cardinal, 233
Glivenko-Cantelli theorem, 103         Modulus of continuity, 54, 220
Gross, 52
                                       Nonmeasurable cardinal, 233
Halmos, a.e .                          Normal distribution, 24
Hanson, 150
Hardy, 52                              One-sided process, 168, 183
Helley's selection theorem, 227        Open cover, 215
Hennequin, 16                          Oxtoby, 10

Ibragimov, 195, 208                    Pardoner, 15 3
Independence of random elements, 26    Parthasarathy, 16
Independent increments, 61, 154        0-mixing, 166
Indicator function of a set, 8         Problem of measure, 10, 233
Interval in Rk, 17                     Products of metric spaces, 224
Invariance principle, 72               Prohorov, 6, 16, 34, 40, 52, 61, 76, 77, 123
Ito, 67, 86                            Prohorov metric, 238
                                       Prohorov's theorem, 37, 240
Kac, 6, 76, 86, 108, 195               Projection, from C, 19
Kallianpur, 16                          from D, 120
Karlin, 86, 214                         from ROO, 19
k-dimensional Borel set, 17            Pyke, 108
Keisler, 2 3 3
Kesten, 205                            Random element, 22
Khinchine, 165                         Random function, 4, 22, 57, 128
Kimme, 142                             Random variable, 22
Knight, 77                             Randum vector, 22
Kolmogorov, 6, 16, 76, 102, 103, 123   Rarviom walk case, 77
Kolmogorov"s existence theorem, the    Ranga Rao, 16, 17, 29
   general case, 230                   Re action principle, 71
  for ROO, 228                         Regular measure, 7
                                       Relative compactness of measures, 35, 239
Lamperti, 61, 77, 150                  R6hyi, 28, 142, 150
LeCam, 6, 16, 40, 242                  Rosen, 165, 208, 214
Levy, 52, 165                          Rosenblatt, 150
Liggett, 214                           Rubin, 34
Lindeberg-Levy case, 77
Lindeberg-Levy theorem, 3, 45          Sampling, 208
Lindeberg's theorem, 42                Scheffe's theorem, 224
Linear Borel set, 17                   Schmid, 142
Local compactness, 7                   Schwartz, 16
Local limit theorems, 49               Separability, 215
Lyapounov's theorem, 44                Separable measure, 234
                                       Separable stochastic process, 65, 134
McKean, 67, 86                         Sequential compactness, 35, 239
Mann, 34                               Shorack, 108
                                                                     Index     253

u-compact, 9                            Ulam, 10
Skofohod, 6, 16, 22, 123, 142           Under, 60
Skorohod topology, 111                  Uniform integrability, 32
Slutsky, 34, 102                        Uniform topology, on C, 54, 220
Sphere, 215                              onD, 150
Stone, 61, 142                          Upper semicontinuity, 218
Strassen, 77
Subspaces, 224                          Varadarajan, 6, 16, 29, 40, 234, 241, 242
Support, 9
                                        Wald, 34
Tarski, 233                             Weak convergence, of distribution func-
Teicher, 214                               tions, 1, 18
Tight family of measures, 37, 239        of measures, 2, 7, 16
Tight measure, 9                        Weyl's theorem, 19, 50
Tight sequence of random elements, 40   Wichura, 214
Topological completeness, 234           Wiener, 67
Topology of weak convergence, 236       Wiener measure, 4, 61
Topsee, 16, 17, 34, 61, 226             Wiener path, 63
Tortrat, 16                             Wiener process, 64
Totally bounded set, 217                Wold, 52
Trumbo, 214                             Wright, 5 2
Two-sided process, 166, 182



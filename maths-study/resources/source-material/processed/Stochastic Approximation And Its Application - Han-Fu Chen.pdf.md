---
normalized_id: shared-pdf-reference-stochastic-approximation-and-its-application-han-fu-chen
exam_code: SHARED
material_scope: stochastic approximation and its application - han-fu chen.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Stochastic Approximation And Its Application - Han-Fu Chen.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-stochastic-approximation-and-its-application-han-fu-chen

Stochastic Approximation and Its Applications
Nonconvex Optimization and Its Applications
Volume 64


Managing Editor:
Panos Pardalos


Advisory Board:
J.R. Birge
Northwestern University, U.S.A.

Ding-Zhu Du
University of Minnesota, U.S.A.

C. A. Floudas
Princeton University, U.S.A.

J. Mockus
Lithuanian Academy of Sciences, Lithuania

H. D. Sherali
Virginia Polytechnic Institute and State University, U.S.A.

G. Stavroulakis
Technical University Braunschweig, Germany




The titles published in this series are listed at the end of this volume.
Stochastic Approximation
and Its Applications

by

Han-Fu Chen
Institute of Systems Science,
Academy of Mathematics and System Science,
Chinese Academy of Sciences,
Beijing, P.R. China




KLUWER ACADEMIC PUBLISHERS
NEW YORK, BOSTON, DORDRECHT, LONDON, MOSCOW
eBook ISBN:       0-306-48166-9
Print ISBN:       1-4020-0806-6



©2003 Kluwer Academic Publishers
New York, Boston, Dordrecht, London, Moscow

Print ©2002 Kluwer Academic Publishers
Dordrecht

All rights reserved


No part of this eBook may be reproduced or transmitted in any form or by any means, electronic,
mechanical, recording, or otherwise, without written consent from the Publisher


Created in the United States of America


Visit Kluwer Online at:            http://kluweronline.com
and Kluwer's eBookstore at:        http://ebooks.kluweronline.com
Contents




Preface                                                          ix
Acknowledgments                                                 xv
1. ROBBINS-MONRO ALGORITHM                                       1
   1.1 Finding Zeros of a Function.                              2
   1.2 Probabilistic Method                                      4
   1.3 ODE Method                                               10
   1.4 Truncated RM Algorithm and TS Method                     16
   1.5 Weak Convergence Method                                  21
   1.6 Notes and References                                     23
2. STOCHASTIC APPROXIMATION ALGORITHMS WITH
   EXPANDING TRUNCATIONS                                        25
   2.1 Motivation                                               26
   2.2 General Convergence Theorems by TS Method                28
   2.3 Convergence Under State-Independent Conditions           41
   2.4 Necessity of Noise Condition                             45
   2.5 Non-Additive Noise                                       49
   2.6 Connection Between Trajectory Convergence and Property
       of Limit Points                                          57
   2.7 Robustness of Stochastic Approximation Algorithms        67
   2.8 Dynamic Stochastic Approximation                         82
   2.9 Notes and References                                     93
3. ASYMPTOTIC PROPERTIES OF STOCHASTIC
   APPROXIMATION ALGORITHMS                                      95
   3.1 Convergence Rate: Nondegenerate Case                      96
   3.2 Convergence Rate: Degenerate Case                        103
   3.3 Asymptotic Normality                                     113

                                v
vi            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     3.4 Asymptotic Efficiency                                   130
     3.5 Notes and References                                    149
4. OPTIMIZATION BY STOCHASTIC APPROXIMATION                      151
   4.1 Kiefer-Wolfowitz Algorithm with Randomized Differences    153
   4.2 Asymptotic Properties of KW Algorithm                     166
   4.3 Global Optimization                                       172
   4.4 Asymptotic Behavior of Global Optimization Algorithm      194
   4.5 Application to Model Reduction                            210
   4.6 Notes and References                                      218
5. APPLICATION TO SIGNAL PROCESSING                              219
   5.1 Recursive Blind Identification                            220
   5.2 Principal Component Analysis                              238
   5.3 Recursive Blind Identification by PCA                     246
   5.4 Constrained Adaptive Filtering                            265
   5.5 Adaptive Filtering by Sign Algorithms                     273
   5.6 Asynchronous Stochastic Approximation                     278
   5.7 Notes and References                                      288
6. APPLICATION TO SYSTEMS AND CONTROL                            289
   6.1 Application to Identification and Adaptive Control        290
   6.2 Application to Adaptive Stabilization                     305
   6.3 Application to Pole Assignment for Systems with Unknown
       Coefficients                                              316
   6.4 Application to Adaptive Regulation                        321
   6.5 Notes and References                                      327
Appendices                                                       329
                                                                 329
     A.1   Probability Space                                     329
     A.2   Random Variable and Distribution Function             330
     A.3   Expectation                                           330
     A.4   Convergence Theorems and Inequalities                 331
     A.5   Conditional Expectation                               332
     A.6   Independence                                          333
     A.7   Ergodicity                                            333
                                                                 335
     B.1 Convergence Theorems for Martingale                     335
     B.2 Convergence Theorems for MDS I                          339
     B.3 Borel-Cantelli-Lévy Lemma                               340
Contents                                           vii

  B.4 Convergence Criteria for Adapted Sequences   341
  B.5 Convergence Theorems for MDS II              343
  B.6 Weighted Sum of MDS                          344
References                                         347
Index                                              355
Preface




   Estimating unknown parameters based on observation data contain-
ing information about the parameters is ubiquitous in diverse areas of
both theory and application. For example, in system identification the
unknown system coefficients are estimated on the basis of input-output
data of the control system; in adaptive control systems the adaptive
control gain should be defined based on observation data in such a way
that the gain asymptotically tends to the optimal one; in blind chan-
nel identification the channel coefficients are estimated using the output
data obtained at the receiver; in signal processing the optimal weighting
matrix is estimated on the basis of observations; in pattern classifica-
tion the parameters specifying the partition hyperplane are searched by
learning, and more examples may be added to this list.
   All these parameter estimation problems can be transformed to a
root-seeking problem for an unknown function. To see this, let            de-
note the observation at time i.e., the information available about the
unknown parameters at time           It can be assumed that the parameter
under estimation denoted by         is a root of some unknown function
            This is not a restriction, because, for example,             may
serve as such a function. Let        be the estimate for     at time    Then
the available information          at time         can formally be written as


where

Therefore, by considering           as an observation on          at   with
observation error           the problem has been reduced to seeking the
root      of      based on
  It is clear that for each problem to specify     is of crucial importance.
The parameter estimation problem is possible to be solved only if

                                     ix
x           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

is appropriately selected so that the observation error          meets the
requirements figured in convergence theorems.
    If    and its gradient can be observed without error at any desired
values, then numerical methods such as Newton-Raphson method among
others can be applied to solving the problem. However, this kind of
methods cannot be used here, because in addition to the obvious problem
concerning the existence and availability of the gradient, the observations
are corrupted by errors which may contain not only the purely random
component but also the structural error caused by inadequacy of the
 selected
   Aiming at solving the stated problem, Robbins and Monro proposed
the following recursive algorithm


to approximate the sought-for root        where     is the step size. This
algorithm is now called the Robbins-Monro (RM) algorithm. Follow-
ing this pioneer work of stochastic approximation, there have been a
large amount of applications to practical problems and research works
on theoretical issues.
   At beginning, the probabilistic method was the main tool in con-
vergence analysis for stochastic approximation algorithms, and rather
restrictive conditions were imposed on both        and       For example,
it is required that the growth rate of        is not faster than linear as
     tends to infinity and       is a martingale difference sequence [78].
Though the linear growth rate condition is restrictive, as shown by sim-
ulation it can hardly be simply removed without violating convergence
for RM algorithms.
   To weaken the noise conditions guaranteeing convergence of the algo-
rithm, the ODE (ordinary differential equation) method was introduced
in [72, 73] and further developed in [65]. Since the conditions on noise
required by the ODE method may be satisfied by a large class of
including both random and structural errors, the ODE method has been
widely applied for convergence analysis in different areas. However, in
this approach one has to a priori assume that the sequence of estimates
       is bounded. It is hard to say that the boundedness assumption is
more desirable than a growth rate restriction on
   The stochastic approximation algorithm with expanding truncations
was introduced in [27], and the analysis method has then been improved
in [14]. In fact, this is an RM algorithm truncated at expanding bounds,
and for its convergence the growth rate restriction on          is not re-
quired. The convergence analysis method for the proposed algorithm
is called the trajectory-subsequence (TS) method, because the analysis
PREFACE                                                                 xi

is carried out at trajectories where the noise condition is satisfied and
in contrast to the ODE method the noise condition need not be veri-
fied on the whole sequence         but is verified only along convergent
subsequences            This makes a great difference when dealing with
the state-dependent noise               because a convergent subsequence
        is always bounded while the boundedness of the whole sequence
      is not guaranteed before establishing its convergence. As shown in
Chapters 4, 5, and 6 for most of parameter estimation problems after
transforming them to a root-seeking problem, the structural errors are
unavoidable, and they are state-dependent.
   The expanding truncation technique equipped with TS method ap-
pears a powerful tool in dealing with various parameter estimation prob-
lems: it not only has succeeded in essentially weakening conditions for
convergence of the general stochastic approximation algorithm but also
has made stochastic approximation possible to be successfully applied in
diverse areas. However, there is a lack of a reference that systematically
describes the theoretical part of the method and concretely shows the
way how to apply the method to problems coming from different areas.
To fill in the gap is the purpose of the book.
   The book summarizes results on the topic mostly distributed over
journal papers and partly contained in unpublished material. The book
is written in a systematical way: it starts with a general introduction
to stochastic approximation and then describes the basic method used
in the book, proves the general convergence theorems and demonstrates
various applications of the general theory.
   In Chapter 1 the problem of stochastic approximation is stated and
the basic methods for convergence analysis such as probabilistic method,
ODE method, TS method, and the weak convergence method are intro-
duced.
   Chapter 2 presents the theoretical foundation of the algorithm with
expanding truncations: the basic convergence theorems are proved by
TS method; various types of noises are discussed; the necessity of the
imposed noise condition is shown; the connection between stability of
the equilibrium and convergence of the algorithm is discussed; the ro-
bustness of stochastic approximation algorithms is considered when the
commonly used conditions deviate from the exact satisfaction, and the
moving root tracking is also investigated. The basic convergence the-
orems are presented in Section 2.2, and their proof is elementary and
purely deterministic.
   Chapter 3 describes asymptotic properties of the algorithms: conver-
gence rates for both cases whether or not the gradient of      is degener-
xii         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

ate; asymptotic normality of       and asymptotic efficiency by averaging
method.
    Starting from Chapter 4 the general theory developed so far is ap-
plied to different fields. Chapter 4 deals with optimization by using
stochastic approximation methods. Convergence and convergence rates
of the Kiefer-Wolfowitz (KW) algorithm with expanding truncations and
randomized differences are established. A global optimization method
consisting in combination of the KW algorithms with search methods is
defined, and its a.s. convergence as well as asymptotic behaviors are es-
tablished. Finally, the global optimization method is applied to solving
the model reduction problem.
   In Chapter 5 the general theory is applied to the problems arising
from signal processing. Applying the stochastic approximation method
to blind channel identification leads to a recursive algorithm estimating
the channel coefficients and continuously improving the estimates while
receiving new signal in contrast to the existing “block” algorithms. Ap-
plying TS method to principal component analysis results in improving
conditions for convergence. Stochastic approximation algorithms with
expanding truncations with TS method are also applied to adaptive fil-
ters with and without constraints. As a result, conditions required for
convergence have been considerably improved in comparison with the
existing results. Finally, the expanding truncation technique and TS
method are applied to the asynchronous stochastic approximation.
   In the last chapter, the general theory is applied to problems arising
from systems and control. The ideal parameter for operation is identified
for stochastic systems by using the methods developed in this book.
Then the obtained results are applied to the adaptive quadratic control
problem. Adaptive regulation for a nonlinear nonparametric system and
learning pole assignment are also solved by the stochastic approximation
method.
   The book is self-contained in the sense that there are only a few points
using knowledge for which we refer to other sources, and these points can
be ignored when reading the main body of the book. The basic mathe-
matical tools used in the book are calculus and linear algebra based on
which one will have no difficulty to read the fundamental convergence
Theorems 2.2.1 and 2.2.2 and their applications described in the sub-
sequent chapters. To understand other material, probability concept,
especially the convergence theorems for martingale difference sequences
are needed. Necessary concept of probability theory is given in Appendix
A. Some facts from probability that are used at a few specific points are
listed in Appendix A but without proof, because omitting the corre-
sponding parts still makes the rest of the book readable. However, the
PREFACE                                                              xiii

proof of convergence theorems for martingales and martingale difference
sequences is provided in detail in Appendix B.
   The book is written for students, engineers and researchers working in
the areas of systems and control, communication and signal processing,
optimization and operation research, and mathematical statistics.

                                                            HAN-FU CHEN
Acknowledgments




   The support of the National Key Project of China and the National
Natural Science Foundation of China is gratefully acknowledged. The
author would like to express his gratitude to Dr. Haitao Fang for his
helpful suggestions and useful discussions. The author would also like
to thank Ms. Jinling Chang for her skilled typing and to thank my wife
Shujun Wang for her constant support.




                                 xv
Chapter 1

ROBBINS-MONRO ALGORITHM




   Optimization is ubiquitous in various research and application fields.
It is quite often that an optimization problem can be reduced to finding
zeros (roots) of an unknown function           which can be observed but
the observation may be corrupted by errors. This is the topic of stochas-
tic approximation (SA). The error source may be observation noise, but
may also come from structural inaccuracy of the observed function. For
example, one wants to find zeros of         but he actually observes func-
tions        which are different from          Let us denote by         the
observation at time           the observation noise:


Here,                 is the additional error caused by the structural in-
accuracy. It is worth noting that the structural error normally depends
on and it is hard to require it to have a certain probabilistic property
such as independence, stationarity or martingale property. We call this
kind of noises as state-dependent noise.
   The basic recursive algorithm for finding roots of an unknown function
on the basis of noisy observations is the Robbins-Monro (RM) algorithm,
which is characterized by its simplicity in computation. This chapter
serves as an introduction to SA, describing various methods for analyzing
convergence of the RM algorithm.
   In Section 1.1 the motivation of RM algorithm is explained, and its
limitation is pointed out by an example. In Section 1.2 the classical
approach to analyzing convergence of RM algorithm is presented, which
is based on probabilistic assumptions on the observation noise. To relax
restrictions made on the noise, a convergence analysis method connecting
convergence of the RM algorithm with stability of an ordinary differential

                                    1
2             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

equation (ODE) was introduced in nineteen seventies. The ODE method
is demonstrated in Section 1.3. In Section 1.4 the convergence analysis
is carried out at a sample path by considering convergent subsequences.
So, we call this method as Trajectory-Subsequence (TS) method, which
is the basic tool used in the subsequent chapters.
   In this book our main concern is the path-wise convergence of the
algorithm. However, there is another approach to convergence analy-
sis called the weak convergence method, which is briefly introduced in
Section 1.5. Notes and references are given in the last section.
   This chapter introduces main methods used in literature for conver-
gence analysis, but restricted to the single root case. Extension to more
general cases in various aspects is given in later chapters.

1.1.       Finding Zeros of a Function.
   Many theoretical and practical problems in diverse areas can be re-
duced to finding zeros of a function. To see this it suffices to notice that
solving many problems finally consists in optimizing some function
i.e., finding its minimum (or maximum). If            is differentiable, then
the optimization problem reduces to finding the roots of               where
                the derivative of
   In the case where the function        or its derivatives can be observed
without errors, there are many numerical methods for solving the prob-
lem. For example, the gradient method, by which the estimate              for
the root     of      is recursively generated by the following algorithm



where       denotes the derivative of      This kind of problems belongs
to the topics of optimization theory, which considers general cases where
     may be nonconvex, nonsmooth, and with constraints.
   In contrast to the optimization theory, SA is devoted to finding zeros
of an unknown function         which can be observed, but the observations
are corrupted by errors.
   Since        is not exactly known and      even may not exist, (1.1.1)-
like algorithms are no longer applicable. Consider the following simple
example. Let         be a linear function


    If the derivative of     is available, i.e., if we know           and if
         can precisely be observed, then according to (1.1.1)
ROBBINS-MONRO ALGORITHM                                                    3

  This means that the gradient algorithm leads to the zero     of
by one step.
  Assume the derivative of      is unavailable but      can exactly be
observed.
  Let us replace           by      in (1.1.1). Then we derive




or


  This is a linear difference equation, which can inductively be solved,
and the solution of (1.1.3) can be expressed as follows




   Clearly,       tends to the root of         as            for any initial
value      This is an attractive property: although the gradient of       is
unavailable, we can still approach the sought-for root if the inverse of the
gradient is replaced by a sequence of positive real numbers decreasingly
tending to zero.
   Let us consider the case where       is observed with errors:



where        denotes the observation at time             the corresponding
observation error and       the estimate for the root of      at time
   It is natural to ask, how will        behave if the exact value of
in (1.1.2) is replaced by its error-corrupted observation        i.e., if
is recursively derived according to the following algorithm:




     In our example,               and (1.1.5) turns to be
4              STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     Similar to (1.1.3), the solution of this difference equation is




     Therefore,       converges to     the root of       if            tends
to zero as                This means that replacement of gradient by a
sequence of                       numbers still works even in the case of
error-corrupted observations, if the observation errors can be averaged
out. It is worth noting that in lieu of (1.1.5) we have to take the positive
sign before       i.e., to consider




if                  rather than        or more general, if      is decreasing
as   increases.
   This simple example demonstrates the basic features of the algorithm
(1.1.5) or (1.1.7): 1) The algorithm may converge to a root of        2) The
limit of the algorithm, if exists, should not depend on the initial value; 3)
The convergence rate is defined by that how fast the observation errors
are averaged out.
     From (1.1.6) it is seen that the convergence rate is defined by
for linear functions. In the case where      is a sequence of indepen-
dent and identically distributed random variables with zero mean and
bounded variance, then




by the iterated logarithm law.
   This means that convergence rate for algorithms (1.1.5) or (1.1.7) with
error-corrupted observations should not be faster than

1.2.         Probabilistic Method
  We have just shown how to find the root of an unknown linear function
based on noisy observations. We now formulate the general problem.
ROBBINS-MONRO ALGORITHM                                                   5

  Let       be an unknown            function with unknown root
            Assume     can be observed at each point     with noise


where        isthe observation at time            is the observation noise,
and     is the estimate for     at time
   Stochastic approximation algorithms recursively generate          to ap-
proximate      based on the past observations. In the pioneer work of this
area Robbins and Monro proposed the following algorithm


to estimate      where step size       is decreasing and satisfies the fol-
lowing conditions                          and                  They proved


  We explain the meaning of conditions required for step size
Condition               aims at reducing the effect of observation noises.
To see this, consider the case where       is close to   and       is close
to zero, say,                            with small.
   Throughout the book,          always means the Euclidean norm of a
vector     and       denotes the square root of the maximum eigenvalue
of the matrix         where     means the transpose of the matrix A.
   By (1.2.2)                                           and
               Even in the Gaussian noise case,             may be large if
    has a positive lower bound. Therefore, in order to have the desired
consistency, i.e.,                 it is necessary to use decreasing gains
such that                 On the other hand, consistency can neither be
achieved, if   decreases too fast as             To see this, let
Then even for the noise-free case, i.e.,         from (1.2.2) we have
                                           if       is a bounded function.
Therefore, in this case




if the initial value  is far from the true root and hence  will never
converge to
    The algorithm (1.2.2) is now called Robbins-Monro (RM) algorithm.
6                      STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

   The classical approach to convergence analysis of SA algorithms is
based on the probabilistic analysis for trajectories. We now present a
typical convergence theorem by this approach. Related concept and
results from probability theory are given in Appendices A and B.
   In fact, we will use the martingale convergence theorem to prove the
path-wise convergence of      i.e., to show                For this, the
following set of conditions will be used.
A 1.2.1 The step size is such that




A1.2.2 There exists a continuously twice differentiable Lyapunov func-
tion                 satisfying the following conditions.
   i) Its second derivative is bounded;
   ii)                                 and             as
   iii) For any       there is a          such that



where         denotes the gradient of
A1.2.3 The observation noise                  is a martingale difference se-
quence with

where         is a family of nondecreasing
A1.2.4 The function         and the conditional second moment of the
observation noise have the following upper bound


where     is a positive constant.
    Prior to formulating the theorem we need some auxiliary results.
    Let          be an adapted sequence, i.e.,  is
    Define the first exist time of       from a Borel set

    It is clear that                i.e.,   is a Markov time.
Lemma 1.2.1 Assume                   and        is a nonnegative supermartin-
gale, i.e.,
ROBBINS-MONRO ALGORITHM                                                      7

Then                    is also a nonnegative supermartingale, where

  The proof is given in Appendix B, Lemma B-2-1.
  The following lemma concerning convergence of an adapted sequence
will be used in the proof for convergence of the RM algorithm, but the
lemma is of interest by itself.
Lemma 1.2.2 Let                             be two nonnegative adapted se-
quences.
     i) If                         and                then      converges a.s.
to a finite limit.
     ii) If                         then

     Proof. For proving i) set




Then we have




By the convergence theorem for nonnegative supermartingales,             con-
verges a.s. as
     Since                  by the convergence theorem for martingales it

follows that                  converges a.s. as               Since     is

measurable and          is nondecreasing, we have

                     Noticing that both              and         converge a.s.

as              we conclude that                   is also convergent a.s. as
              Consequently, from (1.2.5) it follows that     converges a.s. as

     For proving ii) set
8              STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

    Taking conditional expectation leads to




    Again, by the convergence theorem for nonnegative supermartingales,
     converges a.s. as             Since by the same theorem       also
converges a.s. as           it directly follows that            a.s.


Theorem 1.2.1 Assume Conditions A1.2.1–A1.2.4 hold. Then for any
initial value,     given by the RM algorithm (1.2.2) converges to the root
    of      a.s. as

    Proof. Let    be the Lyapunov function given in A1.2.2. Expanding
         to the Taylor series, we obtain




where         and       denote the gradient and Hessian of     respec-
tively,    is a vector with components located in-between the corre-
sponding components of        and        and denotes the constant such
that               (by A1.2.2).
   Noticing that     is                  and               taking con-
ditional expectation for (1.2.6), by (1.2.4) we derive




    Since            by (A1.2.1), we have
    Denoting
ROBBINS-MONRO ALGORITHM                                                    9

and noticing                     by A1.2.2, iii) from (1.2.7) and (1.2.8) it
follows that




  Therefore,                 and    converges a.s. by the convergence
theorem for nonnegative supermartingales.
  Since                                   also converges a.s.

  For any         denote


  Let     be the first exit time of      from      and let



where     denotes the complement to       This means that       is the first
exit time from     after
   Since              is nonpositive, from (1.2.9) it follows that



for any
   Then by (1.2.2), this implies that



  By Lemma 1.2.2, ii), the above inequality implies




which means that        must be finite a.s. Otherwise, we would have
               a contradiction to A1.2.1. Therefore, after              with
10            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

possible exception of a set with probability zero the trajectory of
must enter
  Consequently, there is a subsequence         such that
where            as
  By the arbitrariness of we then conclude that there is a subsequence,
denoted still by       such that                 Hence
     However, we have shown that         converges a.s. Therefore,
          a.s. By A1.2.2, ii) we then conclude that                a.s.

Remark 1.2.1 If Condition A1.2.2 iii) changes to



then the algorithm (1.2.2) should accordingly change to



     We now explain conditions required in Theorem 1.2.1. As noted in
Section 1.1, the step size should satisfy               but the condition

              may be weakened to
   Condition A1.2.2 requires existence of a Lyapunov function         This
kind of conditions is normally necessary to be imposed for convergence
of the algorithms, but the analytic properties of       may be weakened.
The noise condition A1.2.3 is rather restrictive. As to be shown in the
subsequent chapters,       may be composed of not only the random noise
but also structural errors which hardly have nice probabilistic properties
such as martingale difference, stationarity or with bounded variances etc.
   As in many cases, one can take             to serve as       Then from
(1.2.4) it follows that the growth rate of    as             should not be
faster than linear. This is a major restriction to apply Theorem 1.2.1.
However, if we a priori assume that           generated by the algorithm
(1.2.2) is bounded, then              is bounded provided        is locally
bounded, and then the linear growth is not a restriction for
1,2,...}.

1.3.        ODE Method
  As mentioned in Section 1.2, the classical probabilistic approach to
analyzing SA algorithms requires rather restrictive conditions on the
observation noise. In nineteen seventies a so-called ordinary differential
equation (ODE) method was proposed for analyzing convergence of SA
ROBBINS-MONRO ALGORITHM                                                   11

algorithms. We explain the idea of the method. The estimate
generated by the RM algorithm is interpolated to a continuous function
with interpolating length equal to         the step size used in the algo-
rithm. The tail part     of the interpolating function is shown to satisfy
an ordinary differential equation            The sought-for root is the
equilibrium of the ODE. By stability of this equation, or by assuming
existence of a Lyapunov function, it is proved that                  From
this, it can be deduced that
   For demonstrating the ODE method we need two facts from analysis,
which are formulated below as propositions.
Proposition 1.3.1 (Arzelà-Ascoli) Let                           be a set of
equi-continuous and uniformly bounded functions,             where by equi-
continuity we mean that for any           and any              there exists
      such that
                                          whenever

Then there are a continuous function      and a subsequence          of
functions which converge to      uniformly in any finite interval of
i.e.,

uniformly with respect to    belonging to any finite interval.
Proposition 1.3.2 For the following ODE
                                         with
if there exists a continuously differentiable function such that
                                   as             and


then the solution      to (1.3.1), starting from any initial value, tends to
   as             i.e.,     is the global asymptotically stable solution to
(1.3.1).
  Let us introduce the following conditions.

A1.3.1

A1.3.2 There exists a twice continuously differentiable Lyapunov func-
tion     such that                                                  as
            and
12             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  In order to describe conditions on noise, we introduce an integer-
valued function        for any       and any integer
   For        define




Noticing that    tends to zero, for any fixed                diverges to
infinity as           In fact,          counts the number of iterations
starting from time as long as the sum of step sizes does not exceed
The integer-valued function           will be used throughout the book.
   The following conditions will be used:

A1.3.3            satisfies the following conditions




A1.3.4            is continuous.

Theorem 1.3.1 Assume that A1.3.1, A1.3.2, and A1.3.4 hold. If for a
fixed sample     A1.3.3 holds and    generated by the RM algorithm
(1.2.2) is bounded, then for this tends to    as

     Proof. Set



Define the linear interpolating function




     It is clear that     is continuous and
     Further, define                   and the corresponding linear interpo-
lating function    which is defined by (1.3.4) with    replaced by
   Since we will deal with the tail part of  we define       by shifting
time in



     Thus, we derive a family of continuous functions
ROBBINS-MONRO ALGORITHM                                             13

  Let us define the constant interpolating function



Then summing up both sides of (1.2.2) yields




and hence




  By the boundedness assumption on         the family           is uni-
formly bounded. We now prove it is equi-continuous.
   By definition,




Hence, we have




where                since
  From this it follows that




which tends to zero as          and then          by A1.3.3.
  For any        we have




  By boundedness of           and (1.3.11) we see that         is equi-
continuous.
14            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  By Proposition 1.3.1, we can select from          a convergent subse-
quence           which tends to a continuous function
   Consider the following difference with




which is derived by using (1.3.11).
  By (1.3.9) it is clear that for




     Then from (1.3.12) we obtain




Tending     to zero in (1.3.13), by continuity of    and uniform con-
vergence of         to      we conclude that the last term in (1.3.13)
converges to zero, and
ROBBINS-MONRO ALGORITHM                                                15

By A1.3.2 and Proposition 1.3.2 we see           as
  We now prove that                 Assume the converse: there is a
subsequence
  Then for                                      There is a     such that

  By (1.3.4) we have



where               and           denotesthe integer part of          so

   It is clear that the family of functions       indexed by
     is uniformly bounded and equi-continuous. Hence, we can select a
convergent subsequence, denoted still by              The limit satisfies
the ODE (1.3.14) and coincides with         being the limit of        by
the uniqueness of the solution to (1.3.14).
   By the uniform convergence we have


which implies that
From here by (1.3.15) it follows that


Then we obtain a contradictory inequality:




for large enough such that          and               This completes
the proof of
   We now compare conditions used in Theorem 1.3.1 with those in The-
orem 1.2.1.
   Conditions A1.3.1 and A1.3.2 are slightly weaker than A1.2.1 and
A1.2.2, but they are almost the same. The noise condition A1.3.3 is
significantly weaker than those used in Theorem 1.2.1, because under
the conditions of Theorem 1.2.1 we have




which certainly implies A1.3.3.
16            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

 As a matter of fact, Condition A1.3.3 may be satisfied by sequences
much more general than martingale difference sequences.
Example 1.3.1 Assume                  but may be any random or deter-
ministic sequence. Then         satisfies A1.3.3.
This is because




Example 1.3.2 Let         be an MA process, i.e.,


where            is a martingale difference sequence with


Then under condition A1.2.1,                    a.s., and hence
     a.s. Consequently, A1.3.3 is satisfied for almost all sample paths
   Condition A1.3.4 requires continuity of        which is not required in
A1.2.4. At first glance, unlike A1.2.4, Condition A1.3.4 does not impose
any growth rate condition on         but Theorem 1.3.1 a priori requires
the boundedness of         which is an implicit requirement for the growth
rate of       as
   The ODE method is widely used in convergence analysis for algo-
rithms arising from various application areas, because from the noise
it requires no probabilistic property which would be difficult to verify.
Concerning the weakness of the ODE method, we have mentioned that
it a priori assumes that        is bounded. This condition is difficult to
be verified in general case. The other point should be mentioned that
Condition A1.3.3 is also difficult to be verified in the case where
depends on the past                which often occurs when        contains
structural errors of      This is because A1.3.3 may be verifiable if is
convergent, but       may badly behave depending upon the behavior of
             So we are somehow in a cyclic situation: with A1.3.3 we can
prove convergence of         on the other hand, with convergent         we
can verify A1.3.3. This difficulty will be overcome by using Trajectory-
Subsequence (TS) method to be introduced in the next section and used
in subsequent chapters.

1.4.        Truncated RM Algorithm and TS Method
  In Section 1.2 we considered the root-seeking problem where the
sought-for root   may be any point in       If the region belongs
ROBBINS-MONRO ALGORITHM                                                 17

to is known, then we may use the truncated algorithm and the growth
rate restriction on    can be removed.
   Let us assume that            and   is known. In lieu of (1.2.2) we
now consider the following truncated RM algorithm:




where the observation        is given by (1.2.1),         is a given point,
and
  The constant used in (1.4.1) will be specified later on.
  The algorithm (1.4.1) means that it coincides with the RM algorithm
when it evolves in the sphere               but if               exits the
sphere               then the algorithm is pulled back to the fixed point

  We will use the following set of conditions:

A1.4.1 The step size         satisfies the following conditions




A1.4.2 There exists a continuously differentiable Lyapunov function
(not necessarily being nonnegative) such that
                                   and for           (which is used in

(1.4.1)) there is        such that

A1.4.3 For any convergent subsequence               of




where          is given by (1.3.2);

 A1.4.4       is measurable and locally bounded.

  We first compare these conditions with A1.3.1–A1.3.4. We note that
A1.4.1 is the same as A1.3.1, while A1.4.2 is weaker than A1.2.2.
  The difference between A1.3.3 and A1.4.3 consists in that Condition
(1.4.2) is required to be verified only along convergent subsequences,
while (1.3.3) in A1.3.3 has to be verified along the whole sequence
18           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

It will be seen that A1.4.3 in many problems can be verified while A1.3.3
is difficult to verify.
   Comparing A1.4.4 with A1.3.4 we find that the conditions on      have
now been weakened. The growth rate restriction used in Theorem 1.2.1
and the boundedness assumption on             imposed in Theorem 1.3.1
have been removed in the following theorem.
Theorem 1.4.1 Assume Conditions A1.4.1, A1.4.2, and A1.4.4 hold
and the constant   in A1.4.2 is available. Set             for (1.4.1). If
for some sample path   A1.4.3 holds, then      given by (1.4.1) converges
to    for this
     Proof. We say that                               crosses an interval
          if                                   and


We first prove that the number of truncations in (1.4.1) may happen
at most for a finite number of steps. Assume the converse: there are
infinitely many truncations occurring in (1.4.1). Since
by A1.4.2, there is an interval       such that



and there are infinitely many                                   that
 cross
   Since      is bounded, we may extract a convergent subsequence
from         Let us denote the extracted convergent subsequence still
by                                     It is clear that



Since the limit of       is located in the open sphere
there is an      such that


for all sufficiently large
  Since             is bounded by Al.4.4 and the boundedness of
using (1.4.2) we have
ROBBINS-MONRO ALGORITHM                                                   19

if     is small enough and is large enough.
     This incorporating with (1.4.5) implies that




     Therefore, the norm of


cannot reach the truncation bound       In other words, the algorithm
(1.4.1) turns to be an untruncated RM algorithm (1.4.7) for
                 for small and large
   By the mean theorem there exists a vector with components located
in-between the corresponding components of        and            such
that




  Notice that by (1.4.2) the left-hand side of (1.4.6) is of      for all
sufficiently large since         is bounded. From this it follows that i)
for small enough         and large enough


and hence                          and ii) the last term in (1.4.8) is of
since                         as            From (1.4.7) and (1.4.8) it then
follows that




Since          the interval       does not contain the origin. Noticing
that                                                we find
and that there is       such that
20            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

for sufficientlysmall        and all large enough     Then by A1.4.2 there
is        such that



for all large     and small enough         As mentioned above
                   from (1.4.9) we have




for sufficiently large and small enough      where       denotes a mag-
nitude tending to zero as
   Taking (1.4.4) into account, from (1.4.10) we find that



for large     However, we have shown that


   The obtained contradiction shows that the number of truncations in
(1.4.1) can only be finite.
   We have proved that starting from some large the algorithm (1.4.1)
develops as an RM algorithm



and     is bounded.
  We are now in a position to show that     converges.
  Assume it were not true. Then we would have



  Then there would exist an interval           not containing the origin
and                       would cross         for infinitely many
  Again, without loss of generality, assuming                 by the same
argument as that used above, we will arrive at (1.4.9) and (1.4.10) for
large    and obtain a contradiction. Thus,       tends to a finite limit
as
   It remains to show that
     Assume the converse that there is a subsequence
Then there is a       such that                    for all sufficiently large
  We still have (1.4.8), (1.4.9), and (1.4.10) for some
ROBBINS-MONRO ALGORITHM                                                21

  Tending           in (1.4.10), by convergence of          we arrive at a
contradictory inequality:


This means

   In this section we have demonstrated an analysis method which is
different from those used in Sections 1.2 and 1.3. This method is based
on analyzing the sample-path behavior, and conclusions on the whole
sequence         are deducted from the local behaviors of estimates
that are obtained immediately after         which denotes a convergent
subsequence of          We call this method as Trajectory-Subsequence
(TS) Method. The TS method is the main tool to be used in subsequent
chapters for analyzing more general cases. It will be seen that the TS
method is powerful in dealing with complicated errors including both
random noise and structural inaccuracy of the function.
   The obvious weakness of Theorem 1.4.1 is the assumption on the avail-
ability of the upper bound for          This limitation will be removed
later on.

1.5.     Weak Convergence Method
  Up-to now we have worked with decreasing gains which are necessary
for path-wise convergence when observations are corrupted by noise.
However, in some applications people prefer to using constant gain:




where in contrast to (1.2.2) a constant        stands for     which tends
to zero as
   Define the piece-wise constant interpolating function        as



Then                   which is the space of real functions on       that
are right continuous and have left-hand limits, endowed with the Skoro-
hod topology. Convergence of                     to a continuous function
     in the Skorohod topology is equivalent to the uniform convergence
on any bounded interval.
   Let     and be probability measures determined by stochastic pro-
cesses       and      respectively on             with            induced
by the Skorohod topology.
22            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     If for any bounded continuous function       defined on



then we say that        weakly converges to
  If for any          there is a compact measurable set        in
such that


then        is called tight.
   Further,           is called relatively compact if each subsequence of
        contains a weakly convergent subsequence.
   In the weak convergence analysis an important role is played by the
Prohorov’s Theorem, which says that on a complete and separable met-
ric space, tightness is equivalent to relative compactness. The weak
convergence method establishes the weak limit of           as         and
convergence of               to   in probability as        where
as

Theorem 1.5.1 Assume the following conditions:

A1.5.1          is a.s. bounded;
A1.5.2         is continuous;
A1.5.3             is adapted,     is uniformly integrable in the sense that



and



   Then           is tight in          and        weakly converges to
that is a solution to



  Further, if    is asymptotically stable for (1.5.3), then for any
   as         the distance between             and
converges to zero in probability as
  In stead of proof, we only outline its basic idea. First, it is shown
that we can extract a subsequence of         weakly converging to
ROBBINS-MONRO ALGORITHM                                                  23

For notational simplicity, denote the subsequence still by               By
the Skorohod representation, we may assume                              For
this we need only, if necessary, to change the probabilistic space and take
      and     on this new space such that                         and
     have the same distributions as those of        and        respectively.
Then, it is proved that




is a martingale. Since              and as can be shown,       is Lipschitz
continuous, it follows that
   Since         is relatively compact and the limit does not depend on
the extracted subsequence, the whole family             weakly converges
to      as          and       satisfies (1.5.3). By asymptotic stability of


Remark 1.5.1 The boundedness assumption on              may be removed.
For this a smooth function          is introduced such that




and the following truncated algorithm



is considered in lieu of (1.5.1). Then      is interpolated to a piece-wise
constant function                   for the                     It is shown
that             is tight, and weakly convergent as                The limit
       satisfies

  Finally, by showing lim sup lim sup                         for some
        for each     it is proved that          itself is tight and weakly
converges to     satisfying (1.5.3).

1.6.      Notes and References
   The stochastic approximation algorithm was first proposed by Rob-
bins and Monro in [82], where the mean square convergence of the algo-
rithm was established under the independence assumption on the obser-
vation noise. Later, the noise was extended from independent sequence
to martingale difference sequences (e.g. [7, 40, 53]).
24          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

   The probabilistic approach to convergence analysis is well summarized
in [78].
   The ODE approach was proposed in [65, 72], and then it was widely
used [4, 85]. For detailed presentation of the ODE method we refer to
[65, 68].
   The proof of Arzelá-Ascoli Theorem can be found in ([37], p.266).
   Section 1.4 is an introduction to the method described in detail in
coming chapters. For stability and Lyapunov functions we refer to [69].
   The weak convergence method was developed by Kushner [64, 68].
The Skorohod topology and Prohorov’s theorem can be found in [6, 41].
   For probability concepts briefly presented in Appendix A, we refer
to [30, 32, 70, 76, 84]. But the proof of the convergence theorem for
martingale difference sequences, which are frequently used throughout
the book, is given in Appendix B.
Chapter 2

STOCHASTIC APPROXIMATION ALGORI-
THMS WITH EXPANDING TRUNCATIONS




   In Chapter 1 the RM algorithm, the basic algorithm used in stochas-
tic approximation(SA), was introduced, and four different methods for
analyzing its convergence were presented. However, conditions imposed
for convergence are rather strong.
   Comparing theorems derived by various methods in Chapter 1, we
find that the TS method introduced in Section 1.4 requires the weakest
condition on noise. The trouble is that the sought-for root has to be in-
side the truncation region. This motivates us to consider SA algorithms
with expanding truncations with the purpose that the truncation region
will finally cover the sought-for root whose location is unknown. This is
described in Section 2.1.
   General convergence theorems of the SA algorithm with expanding
truncations are given in Section 2.2. The key point of the proof is to
show that the number of truncations is finite. If this is done, then the
estimate sequence is bounded and the algorithm turns to be the conven-
tional RM algorithm in a finite number of steps. This is realized by using
the TS method. It is worth noting that the fundamental convergence
theorems given in this section are analyzed by a completely elementary
method, which is deterministic and is limited to the knowledge of calcu-
lus. In Section 2.3 the state-independent conditions on noise are given
to guarantee convergence of the algorithm when the noise itself is state-
dependent. In Section 2.4 conditions on noise are discussed. It appears
that the noise condition in the general convergence theorems in a certain
sense is necessary. In Section 2.5 the convergence theorem is given for
the case where the observation noise is non-additive.
   In the multi-root (of       case, up-to Section 2.6 we have only estab-
lished that the distance between the estimate and the root set tends to

                                   25
26          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

zero. But, by no means this implies convergence of the estimate itself.
This is briefly discussed in Section 2.4, and is considered in Section 2.6
in connection with properties of the equilibrium of             Conditions
are given to guarantee the trajectory convergence. It is also considered
whether the limit of the estimate is a stable or unstable equilibrium of
       In Section 2.7 it is shown that a small distortion of conditions
may cause only a small estimation error in limit, while Section 2.8 of
this chapter considers the case where the sought-for root is moving dur-
ing the estimation process. Convergence theorems are derived with the
help of the general convergence theorem given in Section 2.2. Notes and
references are given in the last section.

2.1.     Motivation
   In Chapter 1 we have presented four types of convergence theorems
using different analysis methods for SA algorithms. However, none of
these theorems is completely satisfactory in applications. Theorem 1.2.1
is proved by using the classical probabilistic method, which requires
restrictive conditions on the noise and         As mentioned before, the
noise may contain component caused by the structural inaccuracy of
the function, and it is hard to assume this kind of noise to be mutually
independent or to be a martingale difference sequence etc. The growth
rate restriction imposed on the function not only is sever, but also is
unavoidable in a certain sense. To see this, let us consider the following
example:




  It is clear that conditions A1.2.1, A1.2.2, and A1.2.3 are satisfied,
where for A1.2.2 one may take                        The only condition
that is not satisfied is (1.2.4), since                  while the right-
hand side of (1.2.4) is a second order polynomial. Simple calculation
shows that       given by RM algorithm rapidly diverges:




   From this one might conclude that the growth rate restriction would
be necessary.
   However, if we take the initial value       with                 then
given by the RM algorithm converges to           To reduce initial value
in a certain sense, it is equivalent to use step size not from     but from
    for some      The difficulty consists in that from which      we should
Stochastic Approximation Algorithms withExpanding Truncations             27

start the algorithm. This is one of the motivations to use expanding
truncations to be introduced later.
   Theorem 1.3.1 proved in Section 1.3 demonstrates the ODE method.
By this approach, the condition imposed on the noise has significantly
been weakened and it covers a class of noises much larger than that
treated by the probabilistic method. However, it a priori requires
be bounded. This is the case if        converges, but before establishing its
convergence, this is an artificial condition, which is not satisfied even for
the simple example given above. Further, although the noise condition
(1.3.3) is much more general than that used in Theorem 1.2.1, it is
still difficult to be verified for the state-dependent noise. For example,
                  where            is a martingale difference sequence with
                                If         is bounded and
then                        a.s. and (1.3.3) holds. However, in general,
it is difficult to directly verify (1.3.3) because the behavior of         is
unknown. This is why we use Condition (1.4.2) which should be verified
only along convergent subsequences. With convergent                 the noise
                     is easier to be dealt with.
   Considering convergent subsequences, the path-wise convergence is
proved for a truncated RM algorithm by using the TS method in Theo-
rem 1.4.1. The weakness of algorithms with fixed truncation bounds is
that the sought-for root of       has to be located in the truncation region.
But, in general, this cannot be ensured. This is another motivation to
consider algorithms with expanding truncations.
   The weak convergence method explained in Section 1.5 can avoid
boundedness assumption on              but it can ensure convergence in dis-
tribution only, while in practical computation one always deals with a
sample path. Hence, people in applications are mainly interested in
path-wise convergence.
   The SA algorithm with expanding truncations was introduced in or-
der to remove the growth rate restriction on           It has been developed
in two directions: weakening conditions imposed on noise and improv-
ing the analysis method. By the TS method we can show that the
SA algorithm with expanding truncations converges under a truly weak
condition on noise, which, in fact, is also necessary for a wide class of

  In Chapter 1, the root   of                 is a singleton. From
now on we will consider the general case. Let J be the root set of

  We now define the algorithm. Let             be a sequence of positive
numbers increasingly diverging to infinity, and let   be a fixed point in
28           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

    Fix an arbitrary initial value   and denote by           the estimate at
time serving as the      approximation to J. Define         by the following
recursion:




where                 is an indicator function meaning that it equals 1 if
the inequality indicated in the bracket is fulfilled, and 0 if the inequality
does not hold.
   We explain the algorithm.        is the number of truncations up-to time
          serves as the truncation bound when the                  estimate is
generated. From (2.1.1) it is seen that if the estimate at time
calculated by the RM algorithm remains in the truncation region, i.e., if
                          then the algorithm evolves as the RM algorithm.
If                  exits from the sphere with radius           i.e., if
                    then the estimate at time          is pulled back to the
pre-specified point        and the truncation bound is enlarged from
to
   Consequently, if it can be shown that the number of truncations is
finite, or equivalently,       generated by (2.1.1) and (2.1.2) is bounded,
then the algorithm (2.1.1) and (2.1.2) turns to be the one without trun-
cations, i.e., to be the RM algorithm after a finite number of steps. This
actually is the key step when we prove convergence of (2.1.1) and (2.1.2).
   The convergence analysis of (2.1.1) and (2.1.2) will be given in the
next section, and the analysis is carried out in a deterministic way at a
fixed sample without involving any interpolating function.

2.2.      General Convergence Theorems by TS
          Method
   In This section by TS method we establish convergence of the RM
algorithm with expanding truncations defined by (2.1.1)–(2.1.3) under
general conditions. Let us first list conditions to be used.
Stochastic Approximation Algorithms withExpanding Truncations            29

A2.2.2 There is a continuously differentiable function (not necessarily
being nonnegative)               such that




for any              and                       is nowhere dense, where
J is the zero set of      i.e.,
        and       denotes the gradient of    Further,   used in (2.1.1)
is such that                        for some       and

   For introducing condition on noise let us denote by            the prob-
ability space. Let                                               be a mea-
surable function defined on the product space. Fixing an             means
that a sample path is under consideration. Let the noise           be given
by


Thus, the state-dependent noise is considered, and for fixed
  may be random.

A2.2.3 For the sample path       under consideration for any sufficiently
large integer




for any        such that           converges, where            is given by
(1.3.2) and         denotes    given by (2.1.1)–(2.1.3) and valued at the
sample path
   In the sequel, the algorithm (2.1.1)–(2.1.3) is considered for the fixed
  for which A2.2.3 holds, and in            will often be suppressed if no
confusion is caused.

A2.2.4        is measurable and locally bounded.

Remark 2.2.1 Comparing A2.2.1–A2.2.4 with A1.4.1–A1.4.4, we find
that if the root set J degenerates to a singleton    then the only essential
difference is that an indicator function              is included in (2.2.2)
while (1.4.2) stands without it. It is clear that if       is bounded, then
this makes no difference. However, before establishing the boundedness
of         condition (2.2.2) is easier to be verified. The key point here
30             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

is that in contrast to Section 1.4 we do not assume availability of the
upper bound for the roots of

Remark 2.2.2 It is worth noting that                                  con-
verges. To see this it suffices to take         in (2.2.2).

Theorem 2.2.1 Let       be given by (2.1.1)–(2.1.3) for a given initial
value    Assume A2.2.1–A2.2.4 hold. Then,                      for the
sample path for which A2.2.3 holds.

   Proof. The proof is completed by six steps by considering conver-
gent subsequences at the sample path. This is why we call the analysis
method used here as TS method.
   Step 1. We show that there are constants                 such that
for any          there exists      such that for any




if        is a convergent subsequence of                       where M is
independent of     and
   Since                                           we need only to prove
(2.2.3) for
   If the number of truncations in (2.1.1)–(2.1.3) is finite, then there is
an N such that                       i.e., there is no more truncation for
          Hence,                                                 whenever
           In this case, we may take               in (2.2.3).
   We now prove (2.2.3) for the case where                as
   Assume the converse that (2.2.3) is not true. Take             There is
   such that



     Take a sequence of positive real numbers           and             as
             Since (2.2.3) is not true, for       there are            and
                              such that
Stochastic Approximation Algorithms withExpanding Truncations            31

and for any         there are             and
such that




  Without loss of generality we may assume




  Then for any                          from (2.2.4) and (2.2.6) it follows
that




  Since              there is   such that                         Then from
(2.2.7) it follows that


and by (2.2.4), (2.2.7), and (2.2.8)
              and hence
by A2.2.4, where     is a constant.
  Let                where      is specified in A2.2.3. Thenfrom A2.2.3
for any




  For any fixed         if is large enough, then                and
           and by (2.2.10)




Since                                              from (2.2.11) it follows
that
32             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  Taking                 and                      respectively in (2.2.10)
and noticing from(2.2.9)                                          we then
have




and hence



     From (2.2.8), it follows that




where the second term on the right-hand of the inequality tends to zero
by (2.2.12) and (2.2.13), while the first term tends to zero because




     Noticing that                                                     by
(2.2.9) and (2.2.13), we then by (2.2.14) have



On the other hand, by (2.2.6) we have




The obtained contradiction proves (2.2.3).
  Step 2. We now show that for all     large enough



if T is small enough, where is a constant.
   If the number of truncations in (2.1.1)–(2.1.3) is finite, then      is
bounded and hence            is also bounded.
Stochastic Approximation Algorithms withExpanding Truncations          33

     Then for large enough      there is no truncation, and by (2.2.2) for




if T is small enough. In (2.2.16), for the last inequality the boundedness
of       is invoked, and is a constant.
   Thus, it suffices to prove (2.2.15) for the case where
     From (2.2.3) it follows that for any




if    is large enough.
     This implies that for




where       is a constant. The last inequality of (2.2.18) yields




With                                in A2.2.3, from (2.2.2) we have




for large enough and small enough T.
   Combining (2.2.18), (2.2.19), and (2.2.20) leads to


for all large enough   This together with (2.2.16) verifies (2.2.15).
   Step 3. We now show the following assertion:
   For any interval         with           and                        the
sequence          cannot cross       infinitely many times with
34                STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

bounded, where by “crossing        by                     we mean that
                         and
  Assume the converse: there are infinitely many crossings
                    and          is bounded.
  By boundedness of          without loss of generality, we may assume

     By setting         in (2.2.15), we have



But by definition                              so we have



     From (2.2.15) we see that if take   sufficiently small, then



for sufficiently large
   By (2.2.18) and (2.2.15), for large     we then have




where         denotes the gradient of     and             as
  For                             condition (2.2.2) implies that




By (2.2.15) and (2.2.18) it follows that
Stochastic Approximation Algorithms withExpanding Truncations          35

Then, by (2.2.23) and (2.2.1) from (2.2.24)–(2.2.26) it follows that there
are       and        such that


for all sufficiently large
   Noticing (2.2.22), from (2.2.27) we derive



However, by (2.2.15) we have



which implies that                    for small enough
  This means that                          which contradicts (2.2.28).
  Step 4. We now show that the number of truncations is bounded.
  By A2.2.2,         is nowhere dense, and hence a nonempty interval
       exists such that                             and
      If                  then     starting from    will cross the sphere
                  infinitely many times. Consequently,         will cross
       infinitely often with      bounded. In Step 3, we have shown this
process is impossible. Therefore, starting from some       the algorithm
(2.1.1)–(2.1.3) will have no truncations and      is bounded.
   This means that the algorithm defined by (2.1.1)–(2.2.3) turns to be
the conventional RM algorithm for            and a stronger than (2.2.2)
condition is satisfied:




for any     such that   converges.
   Step 5. We now show that      converges. Let



   We have to show
   If        and one of      and   does not belong to       then
       exists such that                      and           By Step 3 this
is impossible. So, both     and    belong to      and
36              STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

   If we can show that            is dense in           then from (2.2.30)
it will follow that       is dense in           which contradicts to the
assumption that      is nowhere dense. This will prove              i.e., the
convergence of
   To show that         is dense in         it suffices to show that
              Assume the converse: there is a subsequence



  Without loss of generality, we may assume     converges. Otherwise,
a convergent subsequence can be extracted, which is possible because
     is bounded. However, if we take        in (2.2.15), we have



which contradicts (2.2.31). Thus            and        converges.
  Step 6. For proving                         it suffices to show that all
limit points of    belong to J.
   Assume the converse:                                      By (2.2.15) we
have


for all large   if is small enough. By (2.2.1) it follows that


and from (2.2.24)



for small enough This leads to a contradiction because            converges
and the left-hand side of (2.2.32) tends to zero as                Thus, we
conclude

Remark 2.2.3 In (2.1.1)–(2.1.3) the spheres with expanding radiuses
       are used for truncations. Obviously, the spheres can be replaced
by other expanding sets. At first glance the point     in (2.1.1) may be
arbitrarily chosen, but actually the restriction is imposed on the exis-
tence of such that                             The condition is obviously
satisfied if            as            because the availability of is not
required.
Stochastic Approximation Algorithms withExpanding Truncations          37

Remark 2.2.4 In the proof of Theorem 2.2.1 it can be seen that the
conclusion                  remains valid if in A2.2.2 “ J is the zero
set of       is removed. As a matter of fact, J may be bigger than the
zero set of         Of course, it should at least contain the zero set of
       in order (2.2.1) to be satisfied. It should also be noted that for
                          we need not require       to be nowhere dense.

  Let us modify A2.2.2 as follows.

A2.2.2’ There is a continuously differentiable function
such that


for any                 and        is nowhere dense. Further,     used in
(2.1.1) is such that                     for some        and

A2.2.2” There is a continuously differentiable function
such that


for any                and J is closed. Further,   used in (2.1.1) is such
that                       for some        and

  Notice that, in A2.2.2’ and A2.2.2” the set J is not specified, but it
certainly contains the root sets of both   and         We may modify
Theorem 2.2.1 as follows.

Theorem 2.2.1’ Let        be given by (2.1.1)–(2.1.3) for a given ini-
tial value   Assume A2.2.1, A2.2.2’,A2.2.3, and A2.2.4 hold. Then
                for the sample path for which A2.2.3 holds.

  Proof. The Proof of Theorem 2.2.1 applies without any change.

Theorem 2.2.1” Let         be given by (2.1.1)–(2.1.3) for a given initial
value. If A2.2.1, A2.2.2”,A2.2.3, and A2.2.4 hold, then
         for the sample path for which A2.2.3 holds.

  Proof. We still have Step 1– Step 3 in the proof of Theorem 2.2.1. Let
38               STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

If or or both do not belong to J, then                       exists such
that                     since J is closed. Then      would cross
infinitely many times. But, by Step 3 of the Proof for Theorem 2.2.1,
this is impossible. Therefore both      and   belong to
   Theorems 2.2.1 and 2.2.1’ only guarantee that the distance between
      and the set J tends to zero. As a matter of fact, we have more
precise result.
Theorem 2.2.2 Assume conditions of Theorem 2.2.1 or Theorem 2.2.1’
hold. Then for fixed and             for which A2.2.3 holds, a connected subset
        exists such that



where        denotes the closure of        and        is generated by (2.1.1)–
(2.1.3).
  Proof. Denote by      the set of limit points of         Assume the
converse: i.e., is disconnected. In other words, closed sets   and
exist such that             and
  Define


  Since                          a     exists such that


where             denotes the                     of set A.
  Define




     It is clear that                       and


Since by                   we have


  By boundedness of                   we may assume that            converges.
Then, by taking                 in (2.2.15), we derive
Stochastic Approximation Algorithms withExpanding Truncations           39

which contradicts (2.2.33) and proves the theorem.
Corollary 2.2.1 If J is not dense in any connected set, then under
conditions of Theorem 2.2.1,        given by (2.1.1)–(2.1.3) converges to
a point in     This is because in the present case any connected set in
consists of a single point.

Example 2.2.1 Reconsider the example given in Section 2.1:




It was shown that the RM algorithm rapidly diverges to          even in the
noise-free case.
  We now assume the observations are noise-corrupted:


where        is an ARMA process driven by the independent identically
distributed normal random variables


where
  We use the algorithm (2.1.1)–(2.1.3) with                            The
computation shows




which tend to the sought-for root 10.

Example 2.2.2 Let                                             Then



  Clearly, A2.2.1 and A2.2.4 hold. Concerning A2.2.2, we may take
     to serve as      Since


(2.2.1) is satisfied. The existence of   required in A2.2.2 is obvious, for
example,
40             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Finally,             is nowhere dense. So A2.2.2 also holds.
Now assume the noise is such that




Then A2.2.3 is satisfied too.
  By Corollary 2.2.1,       given by (2.1.1)–(2.1.3) converges to a point

     If for the conventional (untruncated) RM algorithm



it is a priori known that        is bounded, then we have the following
theorem.

Theorem 2.2.3 Assume A2.2.1–A2.2.4 hold but in A2.2.2 the require-
ment: “Further, used in (2.1.1) is such that                       for
some        and            is removed. If       produced by (2.2.34) is
bounded, then                   for the sample path for which A2.2.3
holds, where      is a connected subset of

   Proof. As a matter of fact, by boundedness of     (2.2.3) and (2.2.15)
become obvious. Steps 3, 5, and 6 in the proof of Theorem 2.2.1 remain
unchanged, while Step 4 is no longer needed. Then the conclusion follows
from Theorems 2.2.1 and 2.2.2.

Remark 2.2.5 All theorems concerning SA algorithms with expanding
truncations remain valid for     produced by (2.2.34), if given by
(2.2.34) is known to be bounded.

   Theorems 2.2.1 and 2.2.2 concern with time-invariant function
but the results can easily be extended to time-varying functions, i.e., to
the case where the measurements are carried out for



where       depends on time
   Conditions A2.2.2 and A2.2.4 are respectively replaced by the follow-
ing conditions:
A2.2.2o There is a continuously differentiable function
such that
Stochastic Approximation Algorithms withExpanding Truncations          41

for any                  and                           is nowhere dense,
where                     and                          and       denotes

the gradient of     Further,   used in (2.1.1) is such that
              for some       and

A2.2.4           are measurable and uniformly locally bounded, i.e., for
any constant



Theorem 2.2.4 Let        be given by (2.1.1)–(2.1.3) for a given initial
value    Assume A2.2.1, A2.2.2°, and A2.2-4’ hold. Then
        for the sample path for which A2.2.3 holds, where          is a
connected subset of

   Proof. It suffices to replace      by        everywhere in the proof
for Theorems 2.2.1 and 2.2.2.

Remark 2.2.6 If it is known that              given by an SA algorithm
evolves in a subspace S of     then it suffices to verify A2.2.2, A2.2.2’,
A2.2.2”, and A2.2.2° in the subspace S in order the corresponding con-
clusions about convergence of        to hold. For example, in this case
A2.2.2 changes to
A2.2.2 (S): There is a continuously differentiable function
R such that                             for any             and

is nowhere dense.
Further,     used in (2.1.1) is such that                      for some
        and              According to Remark 2.2.4, here J is not spec-
ified. Then, with A2.2.2 and        replaced by A2.2.2(S) and
respectively, Theorem 2.2.1 incorporating with Theorem 2.2.2 asserts
that


2.3.       Convergence Under State-Independent
           Conditions
  In the last section we have established convergence theorems under
general conditions. These theorems take a sample-path-based form: un-
der A2.2.1, A2.2.2, andA2.2.4       converges at those sample paths for
which A2.2.3 holds. Condition A2.2.3 looks rather complicated, but it
42            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

is so weak that it is necessary as to be shown later. However, condition
A2.2.3 is state-dependent in the sense that the condition itself depends
on the behavior of           This makes it not always possible to verify
the condition beforehand. We are planning to give convergence theo-
rems under conditions with no state         involved. For this we have to
reformulate Theorems 2.2.1 and 2.2.2.
   As defined in Section 2.2                     where          is a mea-
surable function. In lieu of A2.2.3 we introduce the following condition.

A2.3.1 For any sufficiently large integer                 there is an
   with          such that for any




for any           such that      converges.

Theorem 2.3.1 Assume A2.2.1, A2.2.2, A2.2.4, and A2.3.1 hold. Then
                 a.s. for      generated by (2.1.1)–(2.1.3) with a
given initial value      where    is a connected subset contained in      the
closure of J.

     Proof. Let                    It is clear that


                                              i.e.,           Then for any

         A2.2.3 is fulfilled with    possibly depending on    and the
conclusion of the theorem follows from Theorems 2.2.1 and 2.2.2.
  We now introduce a state-independent condition on noise.

A2.3.2 For any                                is a martingale difference se-
quence and for some




where         is a family of nondecreasing             independent of

  We first give an example satisfying A2.3.2. Let                 be an
dimensional         martingale difference sequence with
Stochastic Approximation Algorithms withExpanding Truncations          43

         for some             and let
be a measurable and locally bounded function.         Then
            satisfies A2.3.2, because


and



by assumption.
Theorem 2.3.2 Let        be given by (2.1.1)–(2.1.3) for a given initial
value. Assume A2.2.1, A2.2.2, A2.2.4, and A2.3.2 hold and
    for given in A2.3.2. Then                       a.s., where     is a
connected subset contained in
  Proof. Since             is measurable and    is                  it fol-
lows that                          is adapted. Approximating
by simple functions, it is seen that


Hence,                          is a martingale difference sequence, and
                                                                      a.s.
By the convergence theorem for martingale difference sequences, the
series


converges a.s., which implies that      with             exists such that
for each




converges to zero as          uniformly in
   This means that A2.3.1 holds, and the conclusion of the theorem
follows from Theorem 2.3.1.
   In applications it may happen that      is not directly observed. In-
stead, the time-varying functions      are observed, and the observa-
tions       may be done not at     but at           i.e., at   with bias
44           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Theorem 2.3.3 Let           be given by (2.1.1)–(2.1.3) for a given ini-
tial value. Assume that A2.2.1, A2.2.2, A2.2.4, and A2.3.2 hold and
               for p given in A2.3.2. Further, assume              is an
adapted sequence,      is bounded by a constant, and for any sufficiently
large integer          there exists    with            such that for any




for any        such that         converges. Then,                       a.s.,
where      is a connected subset contained in
     Proof. By assumption               where     is a constant. Then



and again by the convergence theorem for martingale difference sequences,
the series



convergence a.s. Consequently, there exists    with          such that
for any         the convergence indicated in (2.3.5) holds and for any
integer



tends to zero as            uniformly in
   Therefore, A2.3.1 is fulfilled and the conclusion of the theorem follows
from Theorem 2.3.1.
Remark 2.3.1 The obvious sufficient condition for (2.3.5) is


which in turn is satisfied, if                  is continuous and


Remark 2.3.2 Theorems 2.3.2 and 2.3.3 with A2.2.2 and A2.2.4 re-
placed by A2.2.2° and A2.2.4’, respectively, remain valid, if is
replaced by time-varying
Stochastic Approximation Algorithms withExpanding Truncations              45

2.4.      Necessity of Noise Condition
   Under Conditions A2.2.1–A2.2.4 we have established convergence The-
orems for       recursively given by (2.1.1)–(2.1.3). Condition A2.2.1 is a
commonly accepted requirement for decreasing step size, while A2.2.2 is
a stability condition. This kind of conditions are unavoidable for conver-
gence of SA type algorithms, although it may appear in different forms.
Concerning A2.2.4 on          it is the weakest possible: neither continuity
nor growth rate of        is required. So, it is natural to ask is it possi-
ble to further weaken Condition A2.2.3 on noise? We now answer this
question.
Theorem 2.4.1 Assume            only has one root , i.e.,           and
     is continuous at     Further, assume A2.2.1 and A2.2.2 hold. Then
      given by (2.1.1)–(2.1.3) converges to    at those sample paths for
which one of the following conditions holds:
  i)




  ii)    can be decomposed into two parts                           such that
                  and
   Conversely, if             then both i) and ii) are satisfied.
   Proof. Sufficiency. It is clear that ii) implies i), which in turn implies
A2.2.3. Consequently, sufficiency follows from Theorem 2.2.1.
   Necessity. Assume                   Then         is bounded and (2.1.1)–
(2.1.3) turns to be the RM algorithm after a finite number of steps (for
        . Therefore,




where
  Since           and      is continuous, Condition ii) is satisfied. And,
Condition i) being a consequence of ii) also holds.
Remark 2.4.1 In the case where              and       is continuous at
   , under conditions A2.2.1, A2.2.2, and A2.2.3 by Theorem 2.2.1 we
arrive at             Then by Theorem 2.4.1 we derive (2.4.1) which is
stronger than A2.2.3. One may ask why a weaker condition A2.2.3 can
imply a stronger condition (2.4.1)? Are they equivalent ? The answer
46             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

is “yes” or “no”: Yes, these conditions are equivalent but only under
additional conditions A2.2.1, A2.2.2, and continuity of     at     being
the unique root of      However, these conditions by themselves are not
equivalent because condition A2.2.3 is weaker than (2.4.1) indeed.

  We now consider the multi-root case. Instead of the singleton      we
now have a root set J. Accordingly, continuity of      at    is replaced
by the following condition



   In order to derive the necessary condition on noise, we consider the
linear interpolating function




where               From       form a family                    of func-
tions, where


where      is a constant.
  For any subsequence            define



where       appearing on the right-hand side of (2.4.3) denotes the de-
pendence of the limit function on the subsequence, and the limsup of a
vector sequence is taken component-wise. In general,            may be
discontinuous.
   However, if            then



which is not only continuous but also differentiable.
  Thus, (2.4.2) for the multi-root case corresponds to the continuity of
    at    for the single root case, while                  and a certain
analytic property of           correspond to

Theorem 2.4.2 Assume (2.4.2), A2.2.1, A2.2.2, and A2.2.4 hold. Then
     given by (2.1.1)–(2.1.3) is bounded,                   and the
right derivative                  for any convergent subsequence
Stochastic Approximation Algorithms withExpanding Truncations           47

if and only if condition A2.2.3 is satisfied, where   is a connected subset
of

  Proof. Sufficiency. By Theorem 2.2.1 it follows that          is bounded
and                      We only need to show
  Let                be a convergent subsequence. Since         is bounded,
the algorithm (2.1.1)–(2.1.3) becomes the one without truncations for
large enough    Therefore,




Notice that               and hence




where           as
  Then from (2.4.5) we have




   In (2.4.5) the last term tends to zero by A2.2.3 because            is
bounded and hence the indicator in (2.2.2) can be removed for suf-
ficiently large    By (2.4.2) the first term on the right-hand side of
(2.4.7) also tends to zero as            The left-hand side of (2.4.7) is
                               Consequently,
48            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  Necessity. We now assume        is bounded,                    and
                  for any convergent subsequence         and want to
show A2.2.3. Let            For any           from (2.4.5) we have




for sufficiently large
   The first term on the right-hand side of (2.4.8) tends to zero as
    by (2.4.2) and                      So, to verify A2.2.3 it suffices to
show that


     From (2.4.6) it is seen that


where          as
  The assumption                             means that


where       and
  Noticing the continuity of              from (2.4.10) and (2.4.11) it follows
that


which incorporating with                      yields (2.4.9). Thus, we have




for any      such that              converges.
  By the boundedness of               (2.4.12) is equivalent to (2.2.2), and the
proof is completed.
Corollary 2.4.1 Assume (2.4.2), A2.2.1, A2.2.2, and A2.2.4 hold, and
assume J is not dense in any connected set. Then       given by (2.1.1)–
(2.1.3) converges to some point in J if and only if A2.2.3 holds.
   This corollary is a direct generalization of Theorem 2.4.1. The suffi-
ciency part follows from Corollary 2.2.1, while the necessity part fol-
lows from Theorem 2.4.2 if notice that convergence of            implies
Stochastic Approximation Algorithms withExpanding Truncations          49

2.5.      Non-Additive Noise
   In the algorithm (2.1.1)–(2.1.3) the noise      in observation     is
additive. In this section we continue considering (2.1.1)–(2.1.2) but in
lieu of (2.1.3) we now have the non-additive noise



where       is the observation noise at time
    The problem is that under which conditions does the algorithm defined
by (2.1.1), (2.1.2), and (2.5.1) converge to J, the root set of  whichis
the average of        with respect to its second argument? To be precise,
let        be an                   measurable function and let       be a
distribution function in        The function       is defined by




   It is clear that the observation given by (2.5.1) can formally be ex-
pressed by the one with additive noise:



and Theorems 2.2.1 and 2.2.2 can still be applied. The basic problem is
how to verify A2.2.3. In other words, under which conditions on
and       does          given by (2.5.3) satisfy A2.2.3?
   Before describing conditions to be used we first introduce some no-
tations. We always take the regular version of conditional probability.
This makes conditional distributions introduced later are well-defined.
   Let       be the distribution function of       and           be the
conditional distribution of      given              where

  Further, let us introduce the following coefficients,




where      denotes the Borel           in     and for a random variable
                                            where     runs over all sets
with probability zero.
        is known as the mixing coefficient of        and it measures the
dependence between               and                      It is clear that
   measures the closeness of the distribution of     to
50            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     The following conditions will be needed.

A2.5.1

A2.5.2 (=A2.2.2);

A2.5.3          is a measurable function and is locally Lipschitz-continuous
in the first argument, i.e., for any fixed


where      is a constant depending on

A2.5.4 (Noise Condition)

  i)       is a            process with mixing coefficient              as
           uniformly in
     ii)




where        is defined in (2.5.6);
  iii)            as
Theorem 2.5.1 Assume A2.5.1–A2.5.4.             Then for     generated by
(2.1.1), (2.1.2), and (2.5.1)



where       is a connected subset of

   The proof consists in verifying Condition A2.2.3 satisfied a.s. by
given in (2.5.3). Then the theorem follows from Theorems 2.2.1 and
2.2.2.
   We first prove lemmas.

Lemma 2.5.1 Assume A2.5.1, A2.5.3, and A2.5.4 hold. Then there
is an     with       such that for any         and any bounded
subsequence     of      say,                       as
Stochastic Approximation Algorithms withExpanding Truncations               51

(without loss of generality assume                there exists an integer
such that for all


if T is small enough, where         is given by (2.1.1), (2.1.2), and (2.5.1),
                     and           is given by (1.3.2).
  Proof. For any           set



By setting         in (2.5.6), it is clear that


  From (2.5.7), it follows that




and



where (and hereafter) L is taken large enough so that
  Since           is a convergent martingale, there is a                 a.s.
such that



  From (2.5.13) and                   it is clear that for any integer L the
series of martingale differences




converges a.s.
  Denote by        the        where the above series converges, and set
52               STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     It is clear that
     Let     be fixed and                                        with            and
                   Then for any integer                by (2.5.13) we have




where the first term on the right-hand side tends to zero as                     by
(2.5.15).
  Assume is sufficiently large such that
     i)              for           if             as           or
     ii)                      if
     We note that in case ii) there will be no truncation in (2.1.1) for

   Assume           and fix a small enough T such that                  Let
         be arbitrarily fixed.
   We prove (2.5.9) by induction. It is clear (2.5.9) is true for
   Assume (2.5.9) is true for                                     and there
is no truncation for                    if                         Noticing
                                                we have, by (2.5.16)




 if        is large enough.
This means that at time                 there is no truncation in (2.1.1), and




Lemma 2.5.2 Assume A2.5.1, A2.5.3, and A2.5.4 hold. There is an
              with                 such that if          and if                   as
Stochastic Approximation Algorithms withExpanding Truncations          53

          is a bounded subsequence of        produced by (2.1.1), (2.1.2),
and (2.5.1), then




  Proof. Write




where




  By (2.5.13), for       we have




which converges to a finite limit as           by the martingale conver-
gence theorem.
  Therefore, for any integers L and




converges a.s.
54            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  Therefore, there is           with          such that (2.5.23) holds for
any integers L and
  Let be fixed,               By Lemma 2.5.1,
         for small
  Then




for any by (2.5.23).
   We now estimate (II). By Lemma 2.5.1 we have the following,




     Noticing (2.5.7) and (2.5.14), we then have


     Similarly, by Lemma 2.5.1 and (2.5.7)




Combining (2.5.18), (2.5.24), and (2.5.26) leads to




Therefore, to prove the lemma it suffices to show that the right-hand
side of (2.5.27) is zero.
Stochastic Approximation Algorithms withExpanding Truncations     55

  Applying the Jordan-Hahn decomposition to the signed measure,



and noticing that       is a          process with mixing coefficient
       we know that there is a Borel set D in      such that for any
Borel set A in




and




Then, we have the following,




where
56              STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




      For any given        there is a j such that



      For any fixed   by (2.5.13), (2.5.14), and           it follows that




Therefore,



   Since         may be arbitrarily small, this combining with (2.5.27)
proves the lemma.
   Proof of Theorem 2.5.1.
   For proving the theorem it suffices to show that A2.2.3 is satisfied by
                          a.s. By Lemma 2.5.2, we need only to prove
that




for                  is a bounded subsequence, and         as
      Assume
      Applying the Jordan-Hahn decomposition to the signed measure,
Stochastic Approximation Algorithms withExpanding Truncations          57

we conclude that




where for the last inequality (2.5.8) and (2.5.12) are invoked. Since
          as           the right-hand side of (2.5.32) tends to zero as
         for any           This proves (2.5.31) and completes the proof
of Theorem 2.5.1.

Remark 2.5.1 From the expression (2.5.3) for observation it is seen
that the observation with non-additive noise can be reduced to the ad-
ditive but state-dependent noise which was considered in Section 2.3.
However, Theorem 2.5.1 is not covered by Theorems in Section 2.3 and
vice versa.

2.6.       Connection Between Trajectory Convergence
           and Property of Limit Points
   In the multi-root case, what we have established so far is that the dis-
tance between         given by (2.1.1)–(2.1.3) and     a connected subset
of converges to zero under various sets of conditions.
   As pointed out in Corollary 2.2.1, if J is not dense in any connected
set, then     converges to a point belonging to        However, it is still
not clear how does        behave when J is dense in some connected set?
The following example shows that          still may not converge, although


Example 2.6.1 Let
58                STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and let



Take step sizes as follows



  We apply the RM algorithm (2.2.34) with
  As     we may take




     Then, all conditions A2.2.1–A2.2.4 are satisfied.
     Notice that




and




where k is such that
  By (2.6.1), it is clear that in (2.6.2)




and



     Therefore,       is bounded and                     by Theorem 2.2.4.
As a matter of fact,       changes from one to zero and then from zero
to one, and this process repeats forever with decreasing step sizes.
Stochastic Approximation Algorithms withExpanding Truncations              59

   Thus,       is dense in [0,1]. This phenomenon hints that for tra-
jectory convergence of         the stability-like condition A2.2.2 is not
enough; a stronger stability is needed.
Definition 2.6.1 A point             i.e., a root of      is called dominantly
stable for        if there exist a         and a positive measurable function
                                 which is bounded in the interval         and
satisfies the following condition


for all               the ball centered at    with radius
Remark 2.6.1 The dominant stability implies stability. To see this, it
suffices to take            as the Lyapunov function. Then



The dominant stability of          however, is not necessary for asymptotic
stability.
Remark 2.6.2 Equality (2.6.3) holds for any                   whatever     is.
Therefore, all interior points of J are dominantly stable for       Further,
for a boundary point of J to be dominantly stable for              it suffices
to verify (2.6.3) for                     with small     i.e., all that are
close to and outside J.
Example 2.6.2 Let



In fact,      is the gradient of



    In this example                      We now show that all points of J
are dominantly stable for          For this, by Remark 2.6.2, it suffices to
show that all with              are dominantly stable for      and for this,
it in turn suffices to show (2.6.3) for any with           and
for small enough           Denoting by           the angle between vectors
   and we have for
60              STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     It is clear that


for all small enough             Therefore, all points in J are dominantly
stable for
Theorem 2.6.1 Assume A2.2.1, A2.2.2, and A2.2.4 hold. If for a
given                   is convergent and a limit point   of     generated
by (2.1.1)–(2.1.3) is deminantly stable for         then for this trajectory


     Proof. For any                define




where is the one indicated in Definition 2.6.1.
   It is clear that   is well-defined, because there is a convergent subse-
quence:             and                 for any greater than some         If
for any                  for some then                   by arbitrariness of
    Therefore, for proving the theorem, it suffices to show that, for any
small           an    exists such that              implies               if

  Since                     implies A2.2.3, all conditions of Theorem 2.2.1
are satisfied. By the boundedness of        we may assume that is
large enough so that the truncations no longer exist in (2.1.1)–(2.1.3)
for             It then follows that




Notice that for any                                             and
is bounded, and hence by (2.6.3)
Stochastic Approximation Algorithms withExpanding Truncations    61

            for some   because              is convergent and
     Further,




An argument similar to that used for (2.6.5) leads to



if      is large enough.
     Then from (2.6.6) we have



From (2.6.4) and (2.6.7) we see that we can inductively obtain




Then, noticing                   by definitions of   we have




where the elementary inequality
62              STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

is used with         for the first inequality in (2.6.8), and with
  for the third inequality in (2.6.8). Because              is bounded,
                            and                         an      exists such
that


This means that          and completes the proof.
  For convergence of SA algorithms we have imposed the stability-like
condition A2.2.2 for                 and the dominant stability con-
dition (2.6.3) for trajectory convergence. It is natural to ask does a limit
point of trajectory possess a certain stability property? The following
example gives the negative answer.

Example 2.6.3 Let




     It is straightforward to check that




satisfies A2.2.2. Take
            where      is a sequence of mutually independent random
variables such that                        a.s. Then          with 1 being
a stable attractor for         and all A2.2.1–A2.2.4 are satisfied. Take
                 Then by Theorem 2.2.1 it follows that
a.s. Since                     must converge to 0 a.s. Zero, however, is
unstable for
   In this example       converges to a limit, which is independent of ini-
tial values and unstable, although conditions A2.2.1–A2.2.4 hold. This
strange phenomenon happens because



as a function of is singular for some                  in the sense that it
restricts the algorithm to evolve only in a certain set of      Therefore,
Stochastic Approximation Algorithms withExpanding Truncations           63

in order the limit of       to be stable, imposing a certain regularity
condition on          and some restrictions on noises is unavoidable.
   As in Section 2.3, assume that observation noise is
with            being a measurable function defined on            Set


  Let us introduce the following conditions:

A2.6.1 For a given             is a surjection for any
A2.6.2 For any      and             is continuous in     and for any
and




where         denotes the ball centered at    with radius
  It is clear, that A2.6.2 is equivalent to A2.6.2’:
A2.6.2’ For any      and any compact set




   Before formulating Theorem 2.6.2 we first give some remarks on Con-
ditions A2.6.1 and A2.6.2.
Remark 2.6.3 If        does not depend on           then in (2.6.9)
         can be removed when taking supremum. In Condition A2.2.3
        is a convergent subsequence, and hence           is automatically
located in a compact set. In Theorems in Sections 2.2, 2.3, 2.4, and
2.5, the initial value   is fixed, and hence for fixed           is a fixed
sequence. In contrast to this, in Theorem 2.6.2 we will consider the case
where the initial value arbitrarily varies, and hence      for any fixed
may be any point in       If in (2.6.9) were not restricted to a compact
set (i.e., with                   removed in (2.6.9)), then the resulting
condition would be too strong. Therefore, to put                         in
(2.6.9) is to make the condition reasonable.

Remark 2.6.4 If        is continuous and if
  then      is a surjection.
64            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

   By this property,        is a surjection for a large class of         For
example, let     be free of    and let the growth rate of            be not
faster than linear as               Then with         satisfying A2.2.1 we
have                        as              for all          Hence, A2.6.1
holds. In the case where the growth rate of            is faster than linear
as              and                              for some           we also
have that                        as              for all         and A2.6.1
holds.
   In what follows by stability of a set for              we mean it in the
Lyapunov sense, i.e., a nonnegative continuously differentiable function
     exists such that                                                    and
                                     for some         where


Theorem 2.6.2 Assume A2.2.1, A2.2.2, and A2.6.2 hold, and that
is continuous and for a given A2.6.1 holds. If      defined by (2.1.1)–
(2.1.3) with any initial value  converges to a limit independent of
    then belongs to the unique stable set of
     Proof. Since by A2.2.2                       and              by conti-
nuity of          exists with            such that
Hence,             By continuity of       J is closed, and hence by A2.2.2,


Since                  we must have          Denote by      the connected
subset of containing        The minimizer set of       that contains is
closed and is contained in      Since                  is a connected set
and by A2.2.2       is nowhere dense,        is a constant.
   By continuity of      all connected root-sets are closed and they are
separated. Thus, there exists a         such that
i.e.,        contains no root of      other than those located in
   Set

Then             and
    Therefore, by definition,   is stable for
   We have to show that           and      is the unique stable root-set.
    Let    be the connected set of                                      such
that     contains      By continuity of        for an arbitrary small
               exist such that                             and the distance
between the interval                           and the set       is positive;
i.e.,
Stochastic Approximation Algorithms withExpanding Truncations           65

  We first show that, for any              and         there exist
       and     such that, for any          if                  then




  By Theorem 2.2.1, for            with    sufficiently large there will be
no truncation for (2.1.1)–(2.1.3), and




For any           let                       By A2.6.2, sufficiently small

            and large enough      exist such that for any




   If                 for                      then (2.6.10) immediately
follows by setting           Assume                      for some
       Let         be the first such one. Then


  By (2.6.11), however,




which contradicts (2.6.12). Thus                            and (2.6.10)
is verified.
   For a given we now prove the existence of such that
     for any         if                where the dependence of
on and on the initial value     is emphasized. For simplicity of writing,
           is written as      in the sequel.
   Assume the assertion is not true; i.e., for any      exists such that
                 and                for some
   Suppose                         and
66            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  If there exists an         with          then               with
exists because     is connected and       with
  This yields a contradictory inequality:



where the first inequality follows from A2.2.2 while the second inequality
is because is the minimizer of
   Consequently,             for any       and



and a subsequence of                 exists, also denoted by            for
notational simplicity, such that                          By the continuity
of


Hence,                by the fact
  By (2.6.10) and the fact                         we can choose sufficiently
small T and large enough N such that




and                     i.e.,



for any                                        By (2.6.10),   exists with the
property                           such that




     Because                  as           for sufficiently large N,
        by (2.6.10) the last term of (2.6.15) is        Then
Stochastic Approximation Algorithms withExpanding Truncations              67




By (2.6.10) and the continuity of            the third term on the right hand
side of (2.6.16) is        and by A2.6.2 (Since
         with         for all sufficiently large N.), the norm of the second
term on the right-hand side of (2.6.16) is also           as             Hence
by A2.2.2 and (2.6.13), some                exists such that the right-hand
side of (2.6.16) is less than        for all sufficiently large N if T is small
enough. By noticing                           and                   mentioned
above, from (2.6.14) it follows that the left-hand side of (2.6.16) tends
to a nonnegative limit as             The obtained contradiction shows
that    exists such that               for any         if
With fixed for any       by A2.6.1    exists such that
By                  and the arbitrary smallness of           from this it
follows that                    Since           by assumption, we have
        which means that is stable. If another stable set      existed
such that            then by the same argument would belong to
The contradiction shows that the uniqueness of the stable set.

2.7.      Robustness of Stochastic Approximation
          Algorithms
   In this section for the single root case, i.e, the case            we
consider the behavior of SA algorithms when conditions for convergence
of algorithms to      are not exactly satisfied. It will be shown that a
“small” violation of conditions will cause no big effect on the behavior
of the algorithm.
   The following result known as Kronecker lemma will be used several
times in the sequel. We state it separately for convenience of reference.
  Kronecker Lemma.            If                  where         is a sequence
of positive numbers nondecreasingly diverging to infinity and             is a
sequence of matrices, then

  Proof. Set                                      Since
for any         there is     such that                    if          Then it
68             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

follows that




as           and then
   We still consider the algorithm given by (2.1.1)–(2.1.3), where     de-
notes the estimate for     at time but       may not be the exact root of
      As a matter of fact, the following set of conditions will be used to
replace A2.2.1–A2.2.4:

A2.7.1                nonincreasingly tends to zero,               and
exists such that



A2.7.2 There exists a nonnegative twice continuously differentiable func-
tion    such that                               and



A2.7.3 For sample path       the observation noise       satisfies the fol-
lowing condition




A2.7.4                    is continuous, but           is not necessary to
be the root of
  Comparing A2.7.1–A2.7.4 with A2.2.1–A2.2.4, we see the following
conditions required here are not assumed in Section 2.2: nonincreasing
Stochastic Approximation Algorithms withExpanding Truncations               69

property of       condition (2.7.1), nonnegativity of            divergence of
    to infinity and continuity of      but in (2.7.2),          in (2.7.3), and
        are allowed to be greater than zero.

  Concerning              we note that from the convergence of

      it follows that i) A2.2.3 holds and ii) by the Kronecker lemma

                    because        is nonincreasing. We will demonstrate

how does the deviation from     of the estimate given by (2.1.1)–(2.1.3)
depend on and
  For   used in (2.1.1) define             Since            as
         can be taken sufficiently large such that



   Let the initial truncation bound          used in (2.1.1) and (2.1.2) be
large enough such that



Take real numbers                such that

                                    and

  Since      is continuous, an               exists such that



  Denote




and



where        denotes the matrix consisting of the second partial deriva-
tives of
   Since        we have             for any          and hence
70          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     Set



We will only consider those in (2.7.2) for which         where is given
in (2.7.7). From (2.7.7) and (2.7.8) it is seen that
          Consequently, by (2.7.2), a given by (2.7.12) is positive.
   By continuity of     and                                  and     exist
such that the following inequalities hold:




  By A2.7.3 for                      can be taken sufficiently large such
that




Lemma 2.7.1 Assume A2.7.1, A2.7.2, A2.7.4 hold with given in (2.7.3)
being less than or equal to           If for      given by (2.1.1)–
(2.1.3) with (2.7.5) fulfilled,     for some           where K is
given in (2.7.18), then for any




  Proof. Because         is nondecreasing as T increases, it suffices to
prove the lemma for
  Assume the converse: there exists an    such that
Stochastic Approximation Algorithms withExpanding Truncations           71

  Then for any                    we have




and hence


which incorporating with the definition of      leads to




On the other hand, from (2.7.20) and (2.7.21) it follows that


  From (2.7.9) we have


  By a partial summation we have




Applying (2.7.3) to the first two terms on the right-hand side of (2.7.25),
and (2.7.1) and (2.7.3) to the last term we find




  From (2.7.24) and (2.7.26) it then follows that
72            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

which contradicts (2.7.22). This proves the lemma.
Lemma 2.7.2 Under the conditions of Lemma 2.7.1, for any
    the following estimate holds:



     Proof. Since              by Lemma 2.7.1 we have




and hence




Consequently, we have




Lemma 2.7.3 Assume A2.7.1–A2.7.4 hold and satisfies (2.7.7). Then
for the sample path for which A 2.7.3 holds, a that is independent of
          and           exists such that



in other words,          given by (2.1.1)–(2.1.3) is bounded.
     Proof. Let     be a sufficiently large integer such that


where K is given by (2.7.18).
Stochastic Approximation Algorithms withExpanding Truncations           73

  Assume the lemma is not true. Then there exist          and such
that                   Let     be the maximal integer satisfying the
following equality:




Then by definition we have



and by (2.7.28) and (2.7.29),



  We first show that under the converse assumption there must be an
            such that



   Otherwise,             for any             and from (2.7.24) it follows
that




  This together with (2.7.30) implies



which contradicts with the converse assumption.
  Hence (2.7.31) must be held.
  By the definition of            (2.7.6), and (2.7.30) we have



  Since              by (2.7.31), from (2.7.4) and (2.7.6) it follows that
74             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  We now show                    For this it suffices to prove
by noticing (2.7.34).
  Since                          similar to (2.7.32) we have


and hence


     From (2.7.32) and (2.7.36) it is seen that




where for the second inequality, (2.7.9) and                  are used, while
for the last inequality (2.7.18) is invoked.
   Paying attention to (2.7.10), we have                and              and
by (2.7.16)

     Then by (2.7.32) we see                 and (2.7.34) becomes


     Thus, we can define



and have



Taking                 in Lemmas 2.7.1 and 2.7.2, and paying attention
to (2.7.4) and                  we know              By Lemmas 2.7.1
and 2.7.2, from (2.7.28) we see              From (2.7.28)–(2.7.30) we
have obtained                 which together with the definition of
implies                   and hence             Therefore,           is
well defined, and by the Taylor’s expansion we have
Stochastic Approximation Algorithms withExpanding Truncations            75

where          with components located in-between     and
  We now show that                      which, as to be shown, implies
a contradiction.
  By Lemma 2.7.2 we have




and hence




  By (2.7.10) it follows that         and                       by (2.7.11).
Using Lemma 2.7.1, we continue (2.7.41) as follows:




   Noticing                        we see
   It is clear that (2.7.35) and (2.7.37) remain valid with        replaced
by           Hence, similar to (2.7.37) we have

                            and

  By (2.7.11) and the Taylor’s expansion we have




and consequently,
76           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  By (2.7.40),               Substituting (2.7.44) into (2.7.43) and using
(2.7.12) lead to




     Estimating                 by the treatment similar to that used for
(2.7.26) yields




  Noticing                by Lemma 2.7.2 we find that


and



Hence,             and by (2.7.15) from (2.7.45) it follows that




Using (2.7.14), from the above estimate we have
Stochastic Approximation Algorithms withExpanding Truncations        77

   From (2.7.18) it follows that            Taking notice of (2.7.13) by
(2.7.17) we derive


On the other hand, by Lemma 2.7.2 and (2.7.11), (2.7.17), and (2.7.44)
it follows that




where
  From (2.7.39), (2.7.40), and (2.7.48) we see that


and hence                      which contradicts with (2.7.47). This
means that the converse assumption of the lemma cannot be held.
Corollary 2.7.1 From Lemma 2.7.3 it follows that there exist
          and  which is independent of and arbitrarily varying in
intervals         and          such that


and for         with   sufficiently large the algorithm (2.1.1)–(2.1.3)
turns to an ordinary RM algorithm:


  Set




Take            and denote




By A2.7.2,            Set
78            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

If       in (2.7.2), then           In the general case               may
be positive.

Theorem 2.7.1 Assume A2.7.1–A2.7.4 hold and                is given by
(2.1.1)–(2.1.3) with (2.7.5) held. Then there exist
and a nondecreasing, left-continuous function       defined on         such
that for the sample path for which A2.7.3 holds,




whenever           and           where and are the ones appearing in
(2.7.2) and (2.7.3), respectively. As a matter of fact, can be taken as
the inverse function of

     Proof. Given    recursively define



     We now show that             exists such that




     Set             and assume

     From the recursion of      we have




Assume        is large enough such that by A2.7.3
Stochastic Approximation Algorithms withExpanding Truncations        79

  By a partial summation, from (2.7.57) we find that




where (2.7.58) is invoked.
  By (2.7.1) we see




Without loss of generality, we may assume                       Then by
(2.7.1) we have




Applying (2.7.60) and (2.7.61) to (2.7.59) leads to
80             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and hence



which implies (2.7.56).
  For                                  and by (2.7.53)




  Taking this into account for               by (2.7.51)–(2.7.54) and the
Taylor’s expansion we have




     For                we have



     Therefore, in the following Taylor’s expansion



we have                                          and hence
and



     Denote
Stochastic Approximation Algorithms withExpanding Truncations   81

From (2.7.63) and (2.7.64) it then follows that




Similar to (2.7.62), we see that




Consequently, we arrive at




  Define



  It is clear that      is nondecreasing as   increases and

  Take     such that               Then we have
82             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     Define function



     It is clear that    is left-continuous, nondecreasing and

     From (2.7.66) and (2.7.67) it follows that



which implies, by (2.7.57) and the definition of




Corollary 2.7.2 If           in (2.7.2)         may not be zero), then
         and the right-hand side of (2.7.55) will be




     Since        may be arbitrarily small and hence the estimation error
             may be arbitrarily small. If, in addition,       in A2.7.3, then
tending           and then            in both sides of (2.7.55) we derive



   In the case where            by tending           the right-hand side of
(2.7.55) converges to




Consequently, as            the estimation error depends on how big is
                         If         in (2.7.2), then can also be taken
arbitrarily small and the estimation error depends on the magnitude of


2.8.         Dynamic Stochastic Approximation
  So far we have discussed the root-searching problem for an unknown
function, which is unchanged during the process of estimation. We now
consider the case where the unknown functions together with their roots
change with time. To be precise, Let         be a sequence of unknown
Stochastic Approximation Algorithms withExpanding Truncations          83

functions                    with roots   i.e.,
Let    be the estimate for   at time based on the observations

  Assume the evolution of the roots      satisfies the following equation



where                    areknown functions, while          is a sequence
of dynamic noises.
   The observations are given by



where       is the observation noise and        is allowed to depend on

   In what follows the discussion is for a fixed sample, and the analysis
is purely deterministic. Let us arbitrarily take   as the estimate for
and define



  From equation (2.8.1), we see that        may serve as a rough esti-
mate for      In the sequel, we will impose some conditions on
and      sothat



where is an unknown constant. Therefore,                should not
diverge to infinity. But is unknown, so we will use the expanding
truncation technique.
   Take a sequence of increasing numbers  satisfying



  Let       be recursively defined by the following algorithm:




where     denotes the number of truncations in (2.8.5) occurred until
time
84             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     We list conditions to be used.

A2.8.1                            and


A2.8.2                                             is measurable and for any
           constant      possibly depending on         exists so that
             for    with

A2.8.3                        is known such that
for                 where
and


A2.8.4                      and

A2.8.5 There is a continuously differentiable function
such that         for                   and for any



where      is a positive constant possibly depending on      and      A con-
stant          exists such that



where      is an unknown constant that is an upper bound for


A2.8.6 For any convergent subsequence                   the observation noise
satisfies




where

Remark 2.8.1 Condition A2.8.2 implies the local boundedness, but the
upper bound should be uniform with respect to        In A2.8.3,
measures the difference between the estimation error          and the
Stochastic Approximation Algorithms withExpanding Truncations             85

prediction error                In general,                  is greater
than             For example,                        then A2.8.3 holds
with                       A2.8.4 means that in the root dynamics, the
noise should be vanishing.
   As A2.2.3, Condition A2.8.6 is about existence of a Lyapunov func-
tion. To impose such kind a condition is unavoidable in convergence
analysis of SA algorithms. Inequality (2.8.7) is an easy condition. For
example, if               as             then this condition is automati-
cally satisfied. The noise condition A2.8.6 is similar to A2.2.3.
   Before analyzing convergence property of the algorithm (2.8.5), (2.8.6),
and (2.8.2) we give an example of application of dynamic stochastic ap-
proximation.
Example 2.8.1 Assume that the chemical product is produced in a
batch mode, and the product quality or quantity of the         batch de-
pends on the temperature in batch. When the temperature equals the
ideal one, then the product is optimized. Let       denote the deviation
of the temperature from its optimal value for the        batch, where
denotes the control parameter, which may be, for example, the pressure
in batch, the quantity of catalytic promoter, the raw material propor-
tion and others. The deviation reduces to zero if the control equals its
optimal value      i.e.,            Because of the environment change,
the optimal parameter     may change from batch to batch. Assume


where       is known and       is the noise.
   Let     be the estimate for      Then            may serve as a prediction
for        Apply        as the control parameter for the               batch.
Assume that the temperature deviation of                     for the       th
batch can be observed, but the observation             may be corrupted by
noise, i.e.,                                where         is the observation
noise.
   Then we can apply algorithm (2.8.5), (2.8.6), and (2.8.2) to estimate
     Under conditions A2.8.1–A2.8.6, by Theorem 2.8.1 to be proved in
this section, the estimate     is consistent, i.e.,

Theorem 2.8.1 Under Conditions A2.8.1–A2.8.6 the estimation error
              tends to zero as     where       is given by (2.8.5),
(2.8.6), and (2.8.2).
  To prove the theorem we start with lemmas.
86           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Lemma 2.8.1 Under A2.8.3 and 2.8.4, the sequence
is bounded for any
     Proof. By A2.8.3 and A2.8.4 from (2.8.1) it follows that




where                     is implied by

Lemma 2.8.2 Assume A2.8.1–A2.8.4 and A2.8.6 hold. Let              bea
convergent subsequence such that              as            Then, there
are a sufficiently small    and a sufficiently large integer such that
for



for                                       where is a constant independent
of
   Proof. In the case                as
         is bounded, and hence                 is bounded. By Lemma
2.8.1,                  is bounded. Therefore,       is bounded. For
large           and


The following expression (2.8.11) and estimate (2.8.12) will frequently
be used. By (2.8.1) and A2.8.3 we have
Stochastic Approximation Algorithms withExpanding Truncations            87




and




Substitution of (2.8.12) into (2.8.10) leads to




  By boundedness of               and A2.8.3,


for some            By A2.8.4,                  while the last term is also

less than    by A2.8.6.
   Without loss of generality, we may assume
Therefore,                         and the lemma is true for the case
               as
   We now consider the case              as         Let    be so large
that for




with    being a constant, and




where      is given by (2.8.8).
88             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     Without loss of generality we may assume



Define                            and take T so small that          We
prove the lemma by induction.
   By (2.8.8) and (2.8.12), we have




Therefore, at time           there is no truncation. Then by (2.8.11) and
(2.8.12) we have




where (2.8.14) and (2.8.15) have been used.
  Let the conclusions of the lemma hold for
We prove that it also holds for            Again by (2.8.12), we have




   Hence there is no truncation at time         By the inductive assump-
tion, (2.8.11) and (2.8.12), it follows that




where (2.8.13) and (2.8.14) are invoked.
  Therefore, the conclusions of the lemma are also true for         This
completes the proof.

Lemma 2.8.3 Assume A2.8.1–A2.8.6 hold. Then the number of trun-
cations in (2.8.5) is finite and is bounded.
Stochastic Approximation Algorithms withExpanding Truncations            89

   Proof. Using the argument in the proof of Lemma 2.8.2, the bounded-
ness of       follows from the boundedness of the number of truncations.
Hence, it suffices to show that               as
  Assume the converse:               as            This means that the
sequence                              is unbounded. Let           be the
sequence of truncation times. We prove that         is also unbounded if

   Assume         is bounded. Then            is also bounded. From
we select a convergent subsequence, denoted by the same               for no-
tational simplicity, such that                   By assumption, truncation
happens at the next time              The obtained contradiction shows the
unboundedness of            in the case
   Since              algorithm (2.8.5) returns back to         for infinitely
many times. Let                                     Then
     By Lemma 2.8.1,             is bounded and by (2.8.8),
    Because         is unbounded, starting from             will exit the ball
with radius where is given by (2.8.7). Therefore, there is an interval
                                     and for any there is a sequence,

                 such that                                             for
                  and                In other words, the values of      at
the sequence                           cross the interval         from the
left. It is clear that                               Select from         a
convergent subsequence denoted still by           such that             as
           It is clear that
   From now on, assume is large enough and T is small enough so that
Lemma 2.8.2 is applicable and it is valid with replaced by
   Since        converges, by A2.8.5 and (2.8.12) it follows that
             as            Hence we have




  By Lemma 2.8.2,                     for
Noticing        for small T we then have




  In the following Taylor’s expansion            is located in-between
and             and by Lemma 2.8.2,                               By (2.8.9)
90             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and (2.8.11) we have




Notice that by Lemma 2.8.2 and (2.8.13)




for sufficiently large   From (2.8.21) and (2.8.23), it follows that




On the other hand, by Lemma 2.8.2




Identifying    and in A2.8.5 to     and             respectively, we can
find        such that




by A2.8.5.
Stochastic Approximation Algorithms withExpanding Truncations          91

     Let us consider the right-hand side of (2.8.22). Noticing
                                by A2.8.3 and A2.8.4 we have




By A2.8.6,




Noticing that




as            and            by continuity of       we find that
                   tends to zero as           and
   Since                                  the sum of the first and second
terms on the right-hand side of (2.8.22) is       as         and
This combining with (2.8.26) yields the following conclusion that for
       with sufficiently large and for small enough T from (2.8.22) it
follows that



     By (2.8.20), tending to infinity, from (2.8.30) we derive



     By Lemma 2.8.2 we have



   However, by definition,
        and            Hence from (2.8.32), we must have
if T is small enough. Therefore,                      This contradicts
(2.8.31). The obtained contradiction shows that
92               STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Theorem 2.8.2 Assume A2.8.1–A2.8.6 hold. Then the estimation er-
ror                 tends to zero as

     Proof. We first show that         converges. Assume the converse:



where                        because       is bounded by Lemma 2.8.3.
It is clear that there exists an interval         that does not contain
zero such that                       Without loss of generality, assume
                 From A2.8.6, it follows that there are infinitely many
sequences such that                            and that
for
   Without loss of generality we may assume          converges:
     Since                           exists such that             and by
Lemma 2.8.2,                                              Completely the
same argument as that used for (2.8.22)–(2.8.32) leads to a contradiction.
Hence         is convergent.
   We now show that             as           Assume the converse: there
is a subsequence                   By the same argument we again arrive
at (2.8.30). Tending            by convergence of             we obtain a
contradictory inequality                This implies that               as

     The following theorem is similar to Theorem 2.4.1.

Theorem 2.8.3 Assume A2.8.1–A2.8.5 hold and            is continuous at
   uniformly in     Then              as          if and only if A2.8.6
holds. Furthermore, under conditions A2.8.1–A2.8.5, the following three
conditions are equivalent.
  1) Condition A2.8.6;

     2)

     3)     can be decomposed into two parts:                      so that
                  and            as


   Proof. Assume               as          Then         is bounded. We
have shown in the proof of Lemma 2.8.3 that the number of truncations
must be finite if     is bounded. Therefore, starting from some     the
algorithm (2.8.5) becomes
Stochastic Approximation Algorithms withExpanding Truncations       93

  From (2.8.11) we have




  Set




   By A2.8.3 and A2.8.4 and                                            as
          while                                tends to zero because
is uniformly continuous at    and                           Consequently,
3) holds.
   On the other hand, it is clear that 3) implies 2), which in turn im-
plies A2.8.6. By Theorem 2.8.1, under A2.8.1–A2.8.5, Condition A2.8.6
implies                as
   Thus, the equivalence of l)–3) has been justified under A2.8.1–A2.8.5.


2.9.      Notes and References
   The initial version of SA algorithms with expanding truncations and
its associated analysis method were introduced in [27], where the algo-
rithm was called SA with randomly varying truncations. Convergence
results of this kind of algorithms can also be found in [14, 28]. The-
orems given in Section 2.2 are the improved versions of those given in
[14, 27, 28]. Theorems in Section 2.3 can be found in [18]. Necessity of
the noise condition is proved in [24, 94] for the single-root case, and in
[17] for the multi-root case.
   Convergence results of SA algorithms with additive noise can be found
in [16]. Concerning the measure theory, we refer to [31, 76, 84]. Results
given in Section 2.6 can be found in [48], and some related problems are
discussed in [3]. For the proof of Remark 2.6.4 we refer to Theorem 3.3
in [34]. Example 2.6.1 can be found in [93]. Robustness of SA algorithms
is presented in [24]. The dynamic SA was considered in [38, 39, 91], but
the results presented in Section 2.8 are given in [25].
Chapter 3

ASYMPTOTIC PROPERTIES OF STOCHA-
STIC APPROXIMATION ALGORITHMS




   In Chapter 2 we were mainly concerned with the path-wise conver-
gence analysis for SA algorithms with expanding truncations. Condi-
tions were given to guarantee                       where J denotes the
root set of the unknown function, and      the estimate for unknown root
given by the algorithm.
   In this chapter, for the case where J consists of a singleton     we
consider the convergence rate of    to    asymptotic normality of
and asymptotic efficiency of the estimate.
   Assume                   is differentiable at    Then as




where             and
   It turns out that the convergence rate heavily depends on whether
or not F is degenerate. Roughly speaking, in the case where the step
size in (2.1.1)          the convergence rate of               is         for
some positive         when F is nondegenerate, and                  for some
        when F vanishes.
   It will be shown that          is asymptotically normal and the covari-
ance matrix of the limit distribution depends on the matrix D if in
(2.1.1) the step size     is replaced by        If F in (3.0.1) is available,
then D can be defined to make the limiting covariance matrix minimal,
i.e., to make the estimate efficient. However, this is not the case in SA.
To overcome the difficulty one way is to derive the approximate value
of F by estimating it, but for this one has to impose rather heavy con-
ditions on        Efficiency here is derived by using a sequence of slowly

                                     95
96            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

decreasing step sizes, and the averaged estimate appears asymptotically
efficient.

3.1.       Convergence Rate: Nondegenerate Case
   In this section, we give the rate of convergence of               to zero
in the case F in (3.0.1) is nondegenerate, where       is given by (2.1.1)–
(2.1.3). It is worth noting that F is the coefficient for the first order in
the Taylor’s expansion for
   The following conditions are to be used.

                                             and




A3.1.2 A continuously differentiable function                         exists
such that



for any                 and                        for some            with
           where      is used in (2.1.1).
A3.1.3 For the sample path under consideration the observation noise
     in (2.1.3) can be decomposed into two parts          such that




for some
A3.1.4      is measurable and locally bounded, and is differentiable at
  such that as


   The matrix F is stable (This implies nondegeneracy of F.), in ad-
dition,           is also stable, where and are given by (3.1.1) and
(3.1.3), respectively.
  By stability of a matrix we mean that all its eigenvalues are with
negative real parts.
Asymptotic Properties of Stochastic Approximation Algorithms               97

Remark 3.1.1 We now compare A3.1.1–A3.1.4 with A2.2.1–A2.2.4. Be-
cause of additional requirement (3.1.1), A3.1.1 is stronger than A2.2.1,
but it is automatically satisfied if           with     In this case a in
(3.1.1) equals   Also, (3.1.1) is satisfied if         with
In this case           Take        sufficiently small such that
Then                        and                                      Assume
           is a martingale difference sequence with
       Then by the convergence theorem for martingale difference se-
quences,                             Therefore (3.1.3) is satisfied a.s. with
         Condition A3.1.4 assumes differentiability of          at     which
is not required in A2.2.4.

Lemma 3.1.1      Let          and H be      -matrices. Assume H is stable
and                    If       satisfies A3.1.1 and l-dimensional vectors
             satisfy the following conditions




then       defined by the following recursion with arbitrary initial value
   tends to zero:



  Proof. Set



We now show that there exist constants              and        such that




  Let S be any         negative definite matrix. Consider
98              STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Since H is stable, the positive definite matrix P is well-defined. Inte-
grating by parts, we have




which implies


This means that if H is stable, then for any negative definite matrix S
we can find a positive definite matrix P to satisfy equation (3.1.9). This
fact is called the Lyapunov theorem and (3.1.9) called the Lyapunov
equation. Consequently, we can find P > 0 such that


where I denotes the identity matrix of compatible dimension.
 Since            as          there exists   such that for


Consequently,




Without loss of generality we may assume that         is sufficiently large
such that for



for some constant       where the first inequality is because
as          and             while the second inequality is elementary.
Combining (3.1.11) and (3.1.12) leads to
Asymptotic Properties of Stochastic Approximation Algorithms              99

and hence




where          denotes the minimum eigenvalue of P.
  Paying attention to that




from (3.1.13) we derive




which verifies (3.1.8).
  From (3.1.6) it follows that




  We have to show that the right-hand side of (3.1.14) tends to zero as

   For any fixed                    as              because of (3.1.1) and
(3.1.8). This implies that               as           for any initial value

  Since          as          for any            exists such that
          Then by (3.1.8) we have




The first term at the right-hand side of (3.1.15) tends to zero by A3.1.1,
while the second term can be estimated as follows:
100              STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




where the first inequality is valid for sufficiently large since
as          and the second inequality is valid when
   Therefore, the right-hand side of (3.1.15) tends to zero as
and then
  Let us now estimate
  Set



  By assumption of the lemma                      Hence, for any
there exists        such that                              By a partial
summation, we have




where except the last term, the sum of remaining terms tends to zero as
        by (3.1.8) and
Asymptotic Properties of StochasticApproximation Algorithms          101

  Since                 for         and            as          by (3.1.8)
we have




which tends to zero as         and          by (3.1.16) and the fact
that                   Thus, the right-hand side of (3.1.17) tends to
zero as            and the proof of the lemma is completed.
Theorem 3.1.1 Assume A3.1.1-A3.1.4 hold. Then          given by (2.1.1)–
(2.1.3) for those sample paths for which (3.1.3) holds converges to
with the following convergence rate:


where     is the one given in (3.1.3).
Proof. We first note that by Theorem 2.4.1               and there is no
truncation after a finite number of steps. Without loss of generality, we
may assume
   By (3.1.1),                     Hence, by the Taylor’s expansion we
have




Write        given by (3.1.4) as follows




where



  By (3.1.4) and (3.1.19), for sufficiently large k we have
102          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




where




By (3.1.1), (3.1.3) we have




  Denote




Then (3.1.22) can be rewritten as


   Noticing that                      which is stable by A3.1.4, we see
that all conditions of Lemma 3.1.1 are satisfied. Hence, by the lemma
             which proves the theorem.

Remark 3.1.2 Consider the dependence of convergence rate on the step
size       Take                      and let           in (3.1.3). In order to
have                    a.s., it suffices to require
Asymptotic Properties of StochasticApproximation Algorithms                103

if           is a martingale difference sequence with
      So, for (3.1.25) it is sufficient to require             or
     Since         the best convergence rate                 is achieved
at          For            the convergence rate is          Since
                  the convergence rate is slowing down as approaches
to     When         (3.1.25) cannot be guaranteed. From this it is seen
that the convergence rate depends on how big            is.

3.2.         Convergence Rate: Degenerate Case
   In the previous section, for obtaining the convergence rate of
stability and hence nondegeneracy of F is an essential requirement. We
now consider what will happen if the linear term vanishes in the Taylor’s
expansion of       For this we introduce the following set of conditions:

A3.2.1                            and

A3.2.2 A continuously differentiable function                             exists
such that



for any                   and                         for some            with
              where      is used in (2.1.1);
A3.2.3 For the observation noise        on the sample path           under con-
sideration the following series converges:




where

A3.2.4      is measurable and locally bounded, and is differentiable at
   such that as


where F is a stable matrix, and         is the one used in A3.2.3.
   We first note that in comparison with A3.1.1–A3.1.4, here we do not
require (3.1.1), but A3.2.2 is the same as A3.1.2. From (3.2.3) we see that
104             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

the Taylor’s expansion for      does not contain the linear term. Here
F is the coefficient for a term higher than second order in the Taylor’s
expansion of        The noise condition A3.2.3 is different from A3.1.3,
but, as to be shown by the following lemma, it also implies A2.2.3.

Lemma 3.2.1 If (3.2.2) holds, then                    and hence A2.2.3
is satisfied.

  Proof. We need only to show
   Setting



by a partial summation we have




Since          as           and     converges as           the first two
terms on the right-hand side of (3.2.4) tend to zero as              and
          The last term in (3.2.4) is dominated by




where             as
  By the following elementary calculation we conclude that the right-
hand side of (3.2.5) tends to zero as      and
Asymptotic Properties of StochasticApproximation Algorithms             105




which tends to zero as             and             because             as
           This combining with (3.2.4) and (3.2.5) shows that

  By the Lyapunov equation (3.1.9), there is a positive definite matrix
P > 0 such that



  Denote by         and     the maximum and minimum eigenvalues of
P, respectively, and by K the condition number
Theorem 3.2.1 Assume A3.2.1–A3.2.4 hold and         is given by (2.1.1)
–(2.1.3). Then for the sample paths where A3.2.3 holds the following
convergence rate takes place:




where       is the maximum eigenvalue of P given by (3.2.6).
  We start with lemmas. Note that by Theorems 2.2.1 or 2.4.1
   Therefore, starting from some   the algorithm has no truncation.
  Define



Assuming     is large enough so that there is no truncation, by (3.2.3) we
have
106                    STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

where



Define


Lemma 3.2.2 Assume A3.2.1– A3.2.4 hold. Then                is bounded.
  Proof. Since                 exists such that                 and



where and hereafter,      means the smaller one between a and b.
   By the definition of   we have              for         By
there exists    such that




   Assuming       is large enough such that for           we also have




and

  Define

                                         and


where and hereafter

  Since                          we have
  Let

If         then                                   i.e.,       is bounded.
Otherwise, let                                            We need only to
Asymptotic Properties of StochasticApproximation Algorithms             107

consider the case           since if it is not true then          is clearly
bounded.
  Let P be given by (3.2.6). We have




  where




  In what follows we will prove that



By (3.2.10) and (3.2.6) it is clear that




where the last inequality follows by the following consideration:
  By (3.2.11)                       so for (3.2.16) it suffices to show that




  By definition of     we have              and hence

                               or
108             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Consequently,



and by the agreement                  for




which verifies the last inequality in (3.2.16).
  We now estimate            By (3.2.10) (3.2.11) and the agreement
            we have




   Noticing that, as agreed,                         and
from (3.2.17) we have




and by (3.2.13),



  Again, from (3.2.10) and noticing            we have




Consequently, by (3.2.12)




  Combining (3.2.14), (3.2.16), (3.2.18), and (3.2.20) yields
Asymptotic Properties of StochasticApproximation Algorithms             109

   Similar to (3.2.14) we treat the right-hand side of the above inequality
as follows.




By the same argument as that used above, we can show that




and inductively we derive




     Thus, by (3.2.12) and the definition of


or

  This contradicts with the definition of      and hence   must be infinite.
Consequently,       is bounded.
110           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  Proof of Theorem 3.2.1.
  By Lemma 3.2.2 and the fact                                    as
we have


where


     By setting

from (3.2.9) it follows that



This is nothing else but an RM algorithm. Since by Lemma 3.2.2
is bounded, no truncation is needed and one may apply Theorem 2.2.1”.
   First note that




     Hence, A2.2.1 is satisfied.
     Notice                                       by         and

as            So A2.2.3 holds with      replaced by
   A2.2.4 is clearly satisfied, since    is continuous. The key issue is to
find a     satisfying A2.2.2”.
   Take


and define                                    which is closed.
  Notice
Asymptotic Properties of StochasticApproximation Algorithms         111

  For                                and
  Then we have




  This means that

                                           for

and the condition A2.2.2” holds.
  By Theorem 2.2.1”,                                This implies




which in turn implies (3.2.7) by (3.2.8).
   Imposing some additional conditions on F, we may have more precise
than (3.2.7) results by using different Lyapunov functions.

Theorem 3.2.2 Assume A3.2.1–A3.2.4 hold, in addition, assume F is
normal, i.e.,               Let       be given by (2.1.1)–(2.1.3). Then
for those sample paths for which A3.2.3 holds,                converges
to either zero or one of           where       denotes an eigenvalue of
             More precisely,




where    is an unit eigenvector of H corresponding to

  Proof. Since F is stable, the integral




is well defined. Noticing that                   we have



and
112          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

This means that H is also stable. Therefore, all eigenvalues          are
negative. Further, by             we find



and hence

                                      and
  We consider (3.2.23) and take




By (3.2.26) we have




  Define


Obviously,



for any
   Clearly,
          where is the dimension of
   Thus, J is a discrete set, and     is nowhere dense because         is
continuous. This together with (3.2.28) shows that A2.2.2’ is satisfied.
Asymptotic Properties of StochasticApproximation Algorithms            113

  By Theorem 2.2.1’,                       and (3.2.25) is verified.


Corollary 3.2.1 Let              Then


                           In this case,


                                                  as

and hence (3.2.7) and (3.2.25) are respectively equivalent to




and




Remark 3.2.1 For               the convergence rate given by (3.1.18)
for the nondegenerate case is         while for the degenerate case is
            by (3.2.29), which is much slower than

3.3.      Asymptotic Normality
   In Theorem 3.1.1 we have shown that                     for     given
by (2.1.1)–(2.1.3). As shown in Remark 3.1.2,           if
       This is a path-wise result. Assuming the observation noise      is
a random sequence, we show that                is asymptotically normal,
i.e., the distribution of              converges to a normal distribution
as              This convergence implies that in the convergence rate
                     cannot be improved to
   We first consider the linear regression case, i.e.,   is a linear func-
tion, but may be time-varying.
   Let us introduce a central limit theorem on double-indexed random
variables. We formulate it as a lemma.

Lemma 3.3.1 Let                     be an array of l-dimensional random
vectors. Denote
114         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and



Assume




and




Then




where and hereafter           denotes the normal distribution with mean
 and covariance S.
   Let us first consider the linear recursion (3.1.6) and derive its asymp-
totic normality. We keep the notation          introduced by (3.1.7).
   We have obtained estimate (3.1.8) for              and now derive more
properties for it.

Lemma 3.3.2 Assume                                          and
H where H is stable. Then for any




  Proof. By (3.1.8) it follows that
Asymptotic Properties of StochasticApproximation Algorithms            115

We will use the following elementary inequality




which follows from the fact that the function                       equals
zero at x = 0 and its derivative                    By (3.3.8), we derive




which implies




  Assume        is sufficiently large such that                 Then




where for the last inequality (3.3.9) is invoked.
  Combining (3.3.7) and (3.3.10) gives (3.3.6).

Lemma 3.3.3 Set
116         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Under conditions of Lemma 3.3.2,                                 as
   uniformly with respect to               and              as
uniformly with respect to
  Proof. Expanding         to the series


with                  we have




where by definition
  By stability of H, there exist constants        and p > 0 such that




  Putting (3.3.13) into (3.3.12) yields that for any




where for the last inequality    is assumed to be sufficiently large such
that                                and (3.1.8) is used too.
Asymptotic Properties of StochasticApproximation Algorithms            117

     Since            and         may be arbitrarily small the conclusions
of the lemma follow from (3.3.14) by Lemma 3.3.2.

Lemma 3.3.4 Assume                          as           and

Let A, B, and Q be          matrices and let A and B be stable. Then




Proof. For any T > 0 define




     Since                               for fixed T. Denoting


by     we then have                         Consequently,




serves as an integral sum for                          or equivalently, for
               and hence




Therefore, for (3.3.15) it suffices to show that




Similar to (3.3.10), by stability of A we can show that there is a constant
         such that
118          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  By stability of A and B, constants                    and         exist
such that




Consequently, we have




which verifies (3.3.18) and completes the proof of the lemma.

Theorem 3.3.1 Let           be given by (3.1.6) with an arbitrarily given
initial value. Assume the following conditions holds:
                       as                        and




                 and         is stable;
      Il




where      are     constant matrices with               and            is
a martingale difference sequence of dimension satisfying the following
conditions:
Asymptotic Properties of StochasticApproximation Algorithms   119

and




Then         is asymptotically normal:




where




  Proof. Define       by the following recursion



By (3.1.6) it follows that



Using (3.3.19) we have




Consequently,




where
120            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and



by (3.3.20).
  Define


By (3.3.30) and stability of A, from (3.1.8) it follows that constants
      and       exist such that




Consequently, from (3.3.29) we have




The first term on the right-hand side of (3.3.34) tends to zero as
by (3.3.33), while the second term is estimated as follows. By (3.3.31)




where for the last equality, Lemma 3.3.2 and (3.3.33) are used. This
means that r      and        have the same limit distribution if exists.
Consequently, for the theorem it suffices to show



  Similar to (3.3.29) and (3.3.31), by (3.3.28) we have
Asymptotic Properties of StochasticApproximation Algorithms           121

By (3.3.21) and                 we see that
  Noticing




by Lemma 3.3.2 and (3.1.8), we find that the last term of (3.3.36) tends
to zero in probability. Therefore, for (3.3.24) it suffices to show




  We now show that for (3.3.37) it is sufficient to prove




  For any fixed         we have




By (3.3.21) we have




where convergence to zero follows from                 and Lemma 3.3.2.
It is worth noting that the convergence is uniform with respect to   This
122          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

implies that the second term on the right-hand side of (3.3.39) tends to
zero in probability. The first term on the right-hand side of (3.3.39) can
be rewritten as




By (3.3.33) for any fixed we estimate the first term of (3.3.40) as follows




while for the second term we have




since          and                  as

  We now show that the last term of (3.3.40) also converges to zero in
probability as
  Notice that by (3.3.28),                 for any fixed          and

                         Therefore, for a fixed     there exist constants
      and   such that
Asymptotic Properties of StochasticApproximation Algorithms          123

Then the last term of (3.3.40) is estimated as follows:




  For the first term on the right-hand side of (3.3.44) we have




where the last inequality is obtained because                 is bounded
by some constant               by (3.3.30). Since is fixed, in order to
prove that the right-hand side of (3.3.45) tends to zero as           it
suffices to show
124          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

By (3.3.33), for any fixed




while for any given        we may take       sufficiently large such that
                Therefore,




by Lemma 3.3.2.
   Incorporating (3.3.47) with (3.3.48) proves (3.3.46). Therefore, the
right-hand side of (3.3.45) tends to zero as               This implies
that the first term on the right-hand side of (3.3.44) tends to zero in
probability.
   By (3.3.43), for the last term of (3.3.44) we have




which tends to zero as             as can be shown by an argument similar
to that used for (3.3.45).
   In summary we conclude that the right-hand side of (3.3.44) tends
to zero in probability, and hence all terms in (3.3.40) tend to zero in
probability. This implies that the right-hand side of (3.3.39) tends to
zero in probability as            and then           Thus, we have shown
that for (3.3.37) it suffices to show (3.3.38).
   We now intend to apply Lemma 3.3.1, identifying

       to    in that lemma. We have to check conditions of the lemma.
   Since       is a martingale difference sequence, (3.3.1) is obviously
satisfied.
Asymptotic Properties of StochasticApproximation Algorithms        125

  By (3.3.22) and Lemma 3.3.2,




  This verifies (3.3.3). We now verify (3.3.2). We have




where the last term tends to zero by (3.3.22) and Lemma 3.3.2.
   We show that the first term on the right-hand side of (3.3.49) tends
to (3.3.25).
   With A and      respectively identified to H and    in Lemma 3.3.3,
by Lemmas 3.3.2 and 3.3.3 we have




This incorporating with (3.3.49) leads to




  By Lemma 3.3.4 we conclude



  Finally, we have to verify (3.3.4).
126        STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  By (3.3.33) we have




  Noticing that                               uniformly with respect to


         since             or equivalently,

          uniformly with respect to           by (3.3.23) we have




Consequently, for any       by Lemma 3.3.2




Thus, all conditions of Lemma 3.3.1 hold, and by this lemma we conclude
(3.3.38). The proof is completed.

Remark 3.3.1 Under the conditions of Theorem 3.3.1, if integers
                        are such that                    then it can be
shown that                            converges in distribution to
           where      is a stationary Gaussian Markov process satisfying
the following stochastic differential equation




where    is the              standard Wiener process.
Asymptotic Properties of StochasticApproximation Algorithms            127

Corollary 3.3.1 From (3.1.7) and (3.3.28), similar to (3.3.29)–(3.3.31)
we have




and




   By (3.3.33), the first term on the right-hand side of (3.3.50) tends
to zero as               Note that the last term in (3.3.34) has been
proved to vanish as               and it is just a different writing of
                      Therefore, from (3.3.50) by Theorem 3.3.1, it fol-
lows that for any fixed




  We have discussed the asymptotic normality of                for the case
where      is linear. We now consider the general              Let us first
introduce conditions to be used.




and

                                   for some

A3.3.2 A continuously differentiable function       exists such that



for any                and                          for some           with
           where      is used in (2.1.1).
128          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

A3.3.3




where            is a martingale difference sequence satisfying (3.3.21)–
(3.3.23).

A3.3.4       is measurable and locally bounded. As



where                 with a specified in (3.3.52) is stable and
satisfying           which is specified in (3.3.53).

Theorem 3.3.2 Let           be given by (2.1.1)–(2.1.3) and let A3.3.1–
A3.3.4 be held. Then




where




  Proof. Since               there exists   such that




which implies                  From (3.3.53) it follows that




  This together with the convergence theorem for martingale difference
sequences yields
Asymptotic Properties of StochasticApproximation Algorithms           129

which implies




Since                from                  it follows that
Stability of      is implied by stability of           which is a part of
A3.3.4. Then by Theorem 3.1.1



  By (3.3.55) and (3.3.58) we have




  From Theorem 3.1.1 we also know that there is an integer-valued
        (possibly depending on sample paths) such that
       and there is no truncation in (2.1.1) for    Consequently,
for      we have




  Denoting

by (3.3.59) and (3.3.54) we see                 a.s.
  Then (3.3.60) is written as


  By (3.3.28) it follows that




where
130         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  Using      introduced by (3.3.32), we find




By the argument similar to that used in Corollary 3.3.1, we have
                  a       n       d        a        s
  Then by (3.3.51) from (3.3.63) we conclude (3.3.56).
Corollary 3.3.2 Let D be an      matrix and let     in (2.1.1)–(2.1.2)
be replaced by      In other words, in stead of (2.1.1) and (2.1.2) if
we consider




then this is equivalent to replacing      and        by        and
respectively.
   In this case the only modification should be made in conditions of
Theorem 3.3.2 consists in that stability of        in A3.3.4 should be
replaced by stability of           The conclusion of Theorem 3.3.2 re-
mains valid with only modification that                   and F in (3.3.57)

should be replaced by                          and DF, respectively.

3.4.      Asymptotic Efficiency
   In Corollary 3.3.2 we have mentioned that the limiting covariance
matrix S(D) for        depends on D, if   in (2.1.l)–(2.1.3) is replaced
by          By efficiency we mean that S(D) reaches its minimum with
respect to D.
   Denote
Asymptotic Properties of StochasticApproximation Algorithms            131

   By Corollary 3.3.2, the limiting covariance matrix for       with
given by (3.3.64)–(3.3.66) is expressed by



Theorem 3.4.1 Assume                    is stable. i) If       then S(D)
reaches its minimum at                    and
where               ii) If            then
as
     Proof. i) Integrating by parts, we have




This means that S(D) satisfies the following algebraic Riccati equation



   By stability of             and             DF is nondegenerate. Thus,
(3.4.3) is equivalent to



or



or




From (3.4.4) it follows that


and the equality is achieved at
  ii) If       then
132         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

When                       then




   For the commonly used step size                            i.e.,   spec-
ified in (3.3.52) equals By Theorem 3.4.1 the optimal
       and the optimal step size is              For
the limiting covariance matrix is               Therefore, the optimal
limiting covariance matrix for             is           no matter what
  is taken in
   Let us take         Then         and the optimal             In this
case                                         and             is the mini-
mum of the limiting covariance matrix. However,          is unknown and
      is unknown too. Hence,         cannot be directly used in the algo-
rithm. To achieve asymptotic efficiency, one way is to estimate F, and
replace the optimal step size         by its estimate          This is the
so-called adaptive SA. But, to guarantee its convergence and optimality,
rather restrictive conditions are needed.
   Let       be estimates for    being the root of     satisfying


where F is stable and         The estimates are obtained on the basis of
observations


with

  If                                                     then we call
asymptotically efficient for
   To achieve asymptotic efficiency we apply the averaging technique
that is different from adaptive SA.
   For        satisfying A3.3.1, if   in (3.3.52) equals zero, then
is called slowly decreasing step size. As a typical example of slowly
decreasing step sizes, one may take
   Let       be generated by (2.1.1)–(2.1.3) with slowly decreasing
Define
Asymptotic Properties of StochasticApproximation Algorithms                 133

  In what follows we will show that                 is asymptotically normal
and    is asymptotically efficient.
  We list the conditions to be used.

A3.4.1                nonincreasingly converges to zero,




and for some




A3.4.2 A continuously differentiable function           exists such that



for any                  and                           for some            with
             where      is used in (2.1.1).
A3.4.3 The observation noise            is such that




with      being a constant independent of     and


where      is specified in (3.4.7).
A3.4.4         is measurable and locally bounded. There exist a stable ma-
trix F,          and          such that
134         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

where           is a constant.
Remark 3.4.1 It is clear that                             satisfies A3.4.1.
From (3.4.7) it follows that




where    denotes the integer part of
Since    is nonincreasing, from (3.4.12) we have




which implies

or



Remark 3.4.2 If                        with           being a martingale
difference sequence satisfying (3.3.21)–(3.3.23), then identifying       to
    in Lemma 3.3.1, by this lemma we have




where     is given by (3.4.1). Thus, in this case the second condition in
(3.4.8) holds.
  We now show that the first condition in (3.4.8) holds too.
  By the estimate for the weighted sum of martingale difference se-
quences (See Appendix B) we have




which incorporating with (3.4.13) yields
Asymptotic Properties of StochasticApproximation Algorithms               135

   It is clear that (3.4.9) is implied by (3.3.21). Therefore, in the present
case all requirements in A3.4.3 are satisfied.

Theorem 3.4.2 Assume A3.4.1–A3.4.4 hold. Let        be given by
(2.1.1)–(2.1.3) and be given by (3.4.5). Then is asymptotically
efficient:



  Prior to proving the theorem we establish some properties of slowly
decreasing step size.
  Set




  By (3.1.8) we have




where         and        are constants.
  Set




Lemma 3.4.1 i) The following estimate takes place




where o(1) denotes a magnitude that tends to zero as
  ii)     is uniformly bounded with respect to both         and
and




  Proof. i) By (3.4.6) we know that
136          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and




which implies (3.4.17) since           as
  ii) By (3.4.6)            as              and hence for any       we have




where    denotes the integer part of
  Using (3.4.15) we have




for any        where the first term at the right-hand side tends to zero
as            by (3.4.20), and the last term tends to zero as
Therefore, for (3.4.18) it suffices to show




  Noticing that (3.4.13) implies                for any         we have
Asymptotic Properties of StochasticApproximation Algorithms            137

and hence




  By (3.4.6)                             where             as
Taking this into account, by (3.4.15) and (3.4.17) we have




where            as
  Thus, by (3.4.23) we have




This implies (3.4.21), and together with (3.4.15) shows that        is uni-
formly bounded with respect to both and
   We now express         given by (2.1.1)–(2.1.3) in a different form by
introducing a sequence of stopping times and a sequence of processes
                   To be precise, define
138         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

where by definition




Remind that         is the sequence used in (2.1.1)–(2.1.3).
  It is clear that
  Similarly, define




where




  Recursively define




where




As a matter of fact,    is the first exit time of   from the sphere with
radius        after time          and during the time period
    evolves as same as      and is recursively defined as an RM process.
Therefore,       given by (2.1.1)–(2.1.3) can be expressed as
Asymptotic Properties of StochasticApproximation Algorithms             139

Lemma 3.4.2 Under Conditions A3.4.1–A3.4.4, there exists an integer-
valued such that               a.s.,       a.s., and       given by
(2.1.1)–(2.1.3) has no truncation for    i.e.,



and             a.s.
   Proof. If we can show that A2.2.3 is implied by A3.4.3, then all condi-
tions of Theorem 2.2.1 are fulfilled a.s., and the conclusions of the lemma
follow from Theorem 2.2.1.
   Since              we have




which means that (2.2.2) is satisfied for
  We now check (2.2.2) for         By a partial summation we have




where (3.4.6) is used and             as
  By (3.4.8) the first two terms on the right-hand side of (3.4.34) tend

to zero as             by the same reason and by the fact

the last term of (3.4.34) also tends to zero as             This means that
     satisfies (2.2.2), and the lemma follows.
   By Lemma 3.4.2 we have
140         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and by (3.4.14)




For    specified in (3.4.11) and a deterministic integer   define the
stopping time as follows




From (3.4.35) we have




and




Lemma 3.4.3 If A 3.4.1-A3.4.4 hold, then



is uniformly bounded with respect to
Asymptotic Properties of StochasticApproximation Algorithms              141

  Proof. By (3.4.11) and (3.4.15) from (3.4.39) we have




where                    respectively denote the terms on the right-hand
side of the inequality in (3.4.40).
   By (3.4.19) we see




where            as             From this we find that        is bounded in
 if   is large enough so that
  By (3.4.19) we estimate     as follows:




where     is assumed to be large enough such that




Thus, by (3.4.9)
142            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




We now pay attention to (3.3.10) in the proof of Lemma 3.3.2 and find
that the right-hand side of (3.4.42) is bounded with respect to
   For by (3.4.19) and (3.4.10) we have




where        is a constant. Again, by (3.3.10), is bounded in
  It remains to estimate     By Schwarz inequality we have




By (3.4.19), for large enough




which, as shown by (3.3.11), is bounded in   we then by (3.4.37) have




where is a constant.
  Combing (3.4.40)-(3.4.44) we find that there exists a constant
such that
Asymptotic Properties of StochasticApproximation Algorithms   143

  Setting




and




from (3.4.45) we have




where is a constant.
  Denoting




from (3.4.48) we find




where                      is set to equal to 1.

  From (3.4.48) and (3.4.50) it then follows that




which combining (3.4.46) leads to
144             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




where for the last equality we have used (3.4.47).
  Choosing sufficiently small so that



from (3.4.51) we then have




which is bounded with respect to    as shown by (3.3.10).

Lemma 3.4.4 If A3.4.1-A3.4.4 hold, then




  Proof. It suffices to prove




Then the lemma follows from (3.4.53) by using the Kronecker lemma.
  By (3.4.11) and (3.4.37) we have




where the last inequality follows by using the Lyapunov inequality.
Asymptotic Properties of StochasticApproximation Algorithms            145

     Applying Lemma 3.4.3, from the above estimate we derive




where     is a constant and the convergence of the series follows from
(3.4.13).
   From (3.4.54) it follows that




which means that




By Lemma 3.4.2, for any given



if     is sufficiently large. This together with (3.4.55) shows that




or equivalently,




This verifies (3.4.53) because         can be arbitrarily small. The proof
of the lemma is completed.

     Proof of Theorem 3.4.2.
146          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  By Lemma 3.4.2,                 a.s. and


Consequently,




where             as
  Noticing                             we have




and hence



By (3.4.16) and (3.4.57), from here we derive




By Lemma 3.4.1,        is bounded. Then with the help of (3.4.58) we
have
Asymptotic Properties of StochasticApproximation Algorithms            147

From (3.4.58) and the boundedness of         there exists a constant
  such that




Then, we have




where the convergence to zero a.s. follows from Lemma 3.4.4.
  Putting (3.4.59), (3.4.61) into (3.4.56) leads to




By (3.4.58) we then have




Notice that




Let us denote by     the upper bound for       where the existence of
    is guaranteed by Lemma 3.4.1. Then using (3.4.9) and (3.4.18) we
have
148         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

which implies that




and hence




because        is bounded.
  By (3.4.10) we see that




where the convergence follows from (3.4.13).
  From this by the Kronecker lemma it follows that




Therefore, we have




and hence




Combining (3.4.62)–(3.4.64) we arrive at




or
Asymptotic Properties of StochasticApproximation Algorithms           149

This incorporating with (3.4.8) implies the conclusion of the
theorem.
  This theorem tells us that if in (2.1.1)-(2.1.3) we apply the slowly
decreasing step size, then the averaged estimate   leads to the minimal
covariance matrix of the limit distribution.

3.5.     Notes and References
   Convergence rates and asymptotic normality can be found in [28, 68,
78] for the nondegenerate case. The rate of convergence for the degen-
erate case was first considered by Pflug in [74]. The results presented in
Section 3.2 are given in [15, 47].
   For the proof of central limit theorem (Lemma 3.3.1) we refer to [6,
56, 78], while for Remark 3.3.1 refer to [78]. The proof of Theorem 3.3.1
and 3.3.2 can be found in [28].
   Asymptotic normality of stochastic approximation algorithm was first
considered in [44].
   For asymptotic efficiency the averaging technique was introduced in
[80, 83], and further considered in [35, 59, 66, 67, 74, 98]. Theorems
given in Section 3.4 can be found in [13]. For adaptive stochastic ap-
proximation refer to [92, 95].
Chapter 4

OPTIMIZATION BY STOCHASTIC
APPROXIMATION




    Up-to now we have been concerned with finding roots of an unknown
function        observed with noise. In applications, however, one often
faces to the optimization problem, i.e., to finding the minimizer or max-
inizer of an unknown function             It is well know that        achieves
its maximum or minimum values at the root set of its gradient, i.e., at
                                although it may be only in the local sense.
The gradient           is also written as
    If the gradient       can be observed with or without noise, then the
optimization problem is reduced to the SA problem we have discussed in
previous chapters. Here, we are considering the optimization problem for
the case where the function        itself rather than its gradient is observed
and the observations are corrupted by noise. This problem was solved
by the classical Kiefer-Wolfowitz (KW) algorithm which took the finite
differences to serve as estimates for the partial derivatives. To be precise,
let      be the estimate at time for the minimizer (maximizer) of
and let


be two observations on          at time         with noises        and
respectively, where




are two vectors perturbed from the estimate by      and      respec-
tively, on the    component of      The KW algorithm suggests taking

                                     151
152          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

the finite difference



as the observation of         the     component of the gradient
       It is clear that



where the      component of         equals




The RM algorithm

with        defined above is called the KW algorithm.
   It is understandable that in the classical theory for convergence of
the KW algorithm rather restrictive conditions are imposed not only on
      but also on       and       Besides, at each iteration to form finite
differences, observations are needed, where is the dimension of
In some problems may be very large, for example, in the problem of
optimizing weights in a neuro-network corresponds to the number of
nodes, which may be large. Therefore, it is of interest not only to weaken
conditions required for convergence of the optimizing algorithm but also
to reduce the number of observations per iteration.
   In Section 4.1 the KW algorithm with expanding truncations using
randomized differences is considered. As to be shown, because of replac-
ing finite differences by randomized differences, the number of observa-
tions is reduced from to 2 for each iteration, and because of involving
expanding truncations in the algorithm and applying TS method for
convergence analysis, the conditions needed for           have been weak-
ened significantly and the conditions imposed on the noise have been
improved to the weakest possible. The convergence rate and asymp-
totic normality for the KW algorithm with randomized differences and
expanding truncations are given in Section 4.2.
   The KW algorithm as other gradient-based optimization algorithms
may be stuck at a local minimizer (or maximizer). How to approach
to the global optimizer is one of the important issues in optimization
theory. Especially, how to pathwisely reach the global optimizer is a
difficult and challenging problem. In Section 4.3 the KW algorithm is
combined with searching initial values, and it is shown that the resulting
algorithm a.s. converges to the global optimizer of the unknown function
Optimization by Stochastic Approximation                               153

      The obtained results are then applied to some practical problems
in Section 4.4.

4.1.        Kiefer-Wolfowitz Algorithm with
            Randomized Differences
   There is a fairly long history of random search or approximation ideas
in SA. Different random versions of KW algorithm were introduced: for
example, in one version a sequence of random unit vectors that are inde-
pendent and uniformly distributed on the unit sphere or unit cube was
used; and in another version the KW algorithm with random directions
was introduced and was called a simultaneous perturbation stochastic
approximation algorithm.
   Here, we consider the expandingly truncated KW algorithm with ran-
domized differences. Conditions needed for convergence of the proposed
algorithm are considerably weaker than existing ones.
   Conditions on
  Let                                   be a sequence of independent and
identically distributed (iid) random variables such that




Furthermore, let                         be independent of
                    the algebra generated by
              is the observation noise to be explained later.
     For convenience of writing let us denote




It should be emphasized that      is a vector and is irrelevant to inverse.
   At each time two observations are taken: either




or
154         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

where     is the estimate for the sought-for minimizer (maximizer) of
                      denote the observation noises, and     is a real
number.
  The randomized differences are defined as




and



may serve as observations of randomized differences.
  To be fixed, let us consider observations defined by (4.1.3) and (4.1.4).
The convergence analysis, however, can analogously be done for obser-
vations (4.1.5) and (4.1.6).
  Thus, the observations considered in the sequel are




where



   We now define the KW algorithm with expanding truncations and
randomized differences. Let          be a sequence of positive numbers
increasingly diverging to infinity, and let     be a fixed point in
Given any initial value    the algorithm is defined by:




where        is given by (4.1.9) and (4.1.10).
   It is worth noting that the algorithm (4.1.9)-(4.1.12) differs from
(2.1.1)- (2.1.3) only by observations         As a matter of fact, (4.1.11)
and (4.1.12) are exactly the same as (2.1.1) and (2.1.2), but (4.1.9) and
Optimization by Stochastic Approximation                              155

(4.1.10) are different from (2.1.3). As before,     is the number of trun-
cations that have occurred before time       Clearly the random vector
is measurable with respect to                       the minimal
containing both        and        where                              Thus
the random vector        is independent of
   Let
   The observation (4.1.9) can be written in the standard form of RM
algorithm. In fact, we can rewrite        as follows:


where




Thus, the KW algorithm (4.1.9)-(4.1.12) turns to be a standard RM algo-
rithm with expanding truncations (4.1.11)-(4.1.14) considered in Chap-
ter 2. Of course, the observation noise    expressed by (4.1.14) is quite
complicated: it is composed of the structural error




and the random noise                  caused by inaccuracy of observa-
tions.
   We now list conditions to be used.

A4.1.1                                                   and


exists such that

            and           as

A4.1.2                 is locally Lipschitz continuous. There is an unique
maximum of        at    that is the only root for                     and
          for        Further,     used in (4.1.11) is such that
sup L(x) for some c and

Remark 4.1.1 If         is twice continuously differentiable, then      is
locally Lipschitz continuous.
156          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Remark 4.1.2 If    is the unique minimizer of           then in (4.1.11)
and (4.1.12) should be replaced by
Theorem 4.1.1 Assume A4.1.1, A4.1.2, and Conditions on              hold.
Let         be given by (4.1.9)-(4.1.12) (or (4.1.11)-(4.1.14)) with any
initial value. Then


if and only if for each the random noise   given by (4.1.10) can be
decomposed into the sum of two terms in ways such that


with




and




where      is given in Conditions on
   Proof. We will apply Theorem 2.2.1 for sufficiency and Theorem 2.4.1
for necessity.
   Let us first check Conditions A2.2.1–A2.2.4. Condition A2.2.1 is a
part of A4.1.1. Condition A2.2.2 is automatically satisfied if we take
                noticing that           in the presented case. Condition
A2.2.4 is contained in A4.1.2. So, the key issue is to verify that
given by (4.1.14) satisfies the requirements.
   Let         and       be               vector functions obtained from
    with some of its components replaced by zero:




It is clear that


and
Optimization by Stochastic Approximation                               157

  For notational convenience, let          denote a generic
random vector such that




where              is specified in (4.1.1), and   may vary for different
applications.
   We express      given by (4.1.14) in an appropriate form to be dealt
with. We mainly use the local Lipschitz-continuity to treat the structural
error (4.1.15) in
   Rewrite the    component of the structural error as follows




and for any            express




where on the right-hand side of the equality all terms are cancelled except
the first and the last terms, and in each difference of L, the arguments
of L differ from each other only by one
   We write (4.1.25) in the compact from:
158         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




Applying the Taylor’s expansion to (4.1.26) we derive




where




Similarly, we have




and




where
Optimization by Stochastic Approximation                               159




  Define the following vectors:




Finally, putting (4.1.27)-(4.1.35) into (4.1.14) we obtain the following
expression for




It is worth noting that each component of          and      is a martingale

difference sequence, because both          and           are independent of

   and
  For the sufficiency part we have to show that (2.2.2) is satisfied a.s.
Let us show that (2.2.2) is satisfied by all components of          and
    For components       of     we have for any




since              by (4.1.1),                   and           as
Therefore, for any integer N




for any       such that     converges.
   Thus, all sample paths of components of        satisfy (2.2.2). Com-
pletely the same situation takes place for the components of
160          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

   By the convergence theorem for martingale difference sequences, we
find that for any integer N




This is because                                                     is inde-

pendent of        and is bounded by a constant uniformly with respect
to    by Lipschitz-continuity of         Then the martingale convergence
theorem applies since                 for some         by A4.1.1.

   Similar argument can be applied to components of         Since for any
integer N (4.1.38) holds outside an exceptional set with probability zero,
there is an          with          such that for any




and




for all             and N = 1,2, ….
   Therefore, for all       and any integer N




where          is given by (1.3.2).
Optimization by Stochastic Approximation                              161

  From (4.1.17) and (4.1.18) it follows that there exists            such
that         and for each




and hence




Combining (4.1.41) and (4.1.42), we find for each




This means that for the algorithm (4.1.11)-(4.1.14), Condition A2.2.3 is
satisfied on     Thus by Theorem 2.2.1,                on      This proves
the sufficiency part of the theorem.
   Under the assumption              a.s. it is clear that both     and
converge to zero a.s. and (4.1.39) and (4.1.40) turn to be




and




Then the necessity part of the theorem follows from Theorem 2.4.1. We
show this. By Theorem 2.4.1,         can be decomposed into two parts
      and      such that                   and                     Let us

denote by       the     component of a vector     Define




Then for
162           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and




From (4.1.43) and (4.1.36) it follows that




This together with (4.1.44) and (4.1.45) proves the necessity of the the-
orem.
   Theorem 2.4.1 gives necessary and sufficient condition on the obser-
vation noise in order the KW algorithm with expanding truncations and
randomized differences converges to the unique maximizer of a function
L. We now give some simple sufficient conditions on
Theorem 4.1.2 Assume A4.1.1 and A4.1.2 hold. Further, assume that
                        is independent of

        and       satisfies one of the following two conditions:
  i)                  where is a random variable;
  ii)                Then




whre       is given by (4.1.9)-(4.1.12).

  Proof. It suffices to prove (4.1.16)-(4.1.18). Assume i) holds. Let
be given by



By definition,    is independent of        and      so




and
Optimization by Stochastic Approximation                               163

where    is an upper bound for
   By the convergence theorem for martingale difference sequences, it
follows that



Thus in (4.1.16) it can be assumed that
        and                                   and the conclusion of the
theorem follows from Theorem 4.1.1.
   Assume now ii) holds.
   By the independence assumption it follows that for           is inde-
pendent of                so that




Then, we have




It directly follows that




Again, it suffices to takes
   We now extend the results to the case of multi-extremes. For this A
4.1.2 is replaced by A4.1.2’.

A4.1.2’                  is locally Lipschitz continuous, L(J) is nowhere
dense, where                        the set where L takes extremes, and
used in (4.1.11) is such that                     for some and

Theorem 4.1.3 Let     be given by (4.1.9)-(4.1.12) with a given ini-
tial value Assume A 4.1.1 and A 4.1.2’ hold. Then
  on an             with             if    satisfies (4.1.16)- (4.1.18), or
     satisfies conditions given in Theorem 4.1.2, where      is a connected
set contained in      the closure of .
  Proof. Condition A2.2.2 is implied by A4.1.2’ with               and
A2.2.1 and A2.2.4 are implied by A4.1.1 and A4.1.2, respectively, while
164         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

A2.2.3 is satisfied as shown in Theorems 4.1.1 and 4.1.2. Then the
conclusion of the theorem follows from Theorem 2.2.2.

Remark 4.1.3 In the multi-extreme case, the necessary conditions on
    for convergence                    can also be obtained on the
analogy of Theorem 2.4.2.

Remark 4.1.4 Conditions i) or ii) used in Theorem 4.1.2 are simple
indeed. However,     in Theorem 4.1.2 is required to be independent
of                This may not be satisfied if the observation noise
is state-dependent. Taking into account that                     is the
observation noise when observing        at          and             we
see that       depends on             and            if the observation
noise is state-dependent. In this case,      does depend on        This
violates the assumption about independence made in Theorem 4.1.2.

   Consider the case where the observation noise may depend on loca-
tions of measurement, i.e., in lieu of (4.1.3) and (4.1.4) consider




  Introduce the following condition.

A4.1.3 Both            and         are measurable functions
                                 and                are martingale dif-
ference sequences for any         and




for p specified in A4.1.1 with




where       is a family of nondecreasing           independent of both
  and
Optimization by Stochastic Approximation                                165

Theorem 4.1.4 Let         be given by (4.1.9)–(4.1.12) with a given ini-
tial value     Assume A4.1.1, A4.1.2’, and A4.1.3 hold. Then
               where   is a connected subset of

  Proof. Introduce the              generated by                 and
             i.e.,
  It is clear that   is measurable with respect to
                      and hence           are                  Both
                   and                   are                    Ap-
proximating            and           by simple functions, it is seen
that




Therefore,                           and                                are
martingale difference sequences, and




where

Hence,                            is a martingale difference sequence with




   Noticing         is bounded and         as             by (4.1.50) and
(4.1.51) and the convergence theorem for martingale difference sequences
we have, for any integer N > 0




This together with (4.1.37) with     replaced by      (4.1.39), and (4.1.40)
verifies that        expressed by (4.1.36) satisfies A2.2.3. Then the con-
clusion of the theorem follows from Theorem 2.2.2.
Remark 4.1.5 If J consists of a singleton      then Theorems 4.1.3 and
4.1.4 ensure              a.s. If J is composed of isolated points, then
166             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

theorems ensure that       converges to some point in J. However, the
limit is not guaranteed to be a global minimizer of     Depending on
initial value,   may converge to a local minimizer. We will return back
to this issue in Section 4.3.

4.2.        Asymptotic Properties of KW Algorithm
   We now present results on convergence rate and asymptotic normality
of the KW algorithm with randomized differences.

Theorem 4.2.1 Assume hypotheses of Theorem 4.1.2 or Theorem 4.1.4
with         and that




for some              and as



where             is stable and   and   are specified in (4.2.1) and (4.2.2),
respectively.
   Then          given by (4.1.9)–(4.1.12) satisfies


   Proof. First of all, under conditions of Theorems 4.1.2 or 4.1.4,
             By Theorem 3.1.1 it suffices to show that        given by
(4.1.36) can be represented as


where




   From (4.1.28) and (4.1.31) by the local Lipschitz continuity of         it
follows that
Optimization by Stochastic Approximation                                   167

by (4.2.2). Since               it follows that

                                    and

   Since                        and    given by (4.1.27) and (4.1.32)
are uniformly bounded for                                    for each
   where       converges. By the convergence theorem for martingale
difference sequences it follows that




where     and       are are given by (4.1.35).
  In the proof of Theorem 4.1.2, replacing          by        and using (4.2.2),
the same argument leads to




Then by defining



we have shown (4.2.4) under the hypotheses of Theorem 4.1.2.
   Under the hypotheses of Theorem 4.1.4 we have the same conclusions
about             and      as before. We need only to show (4.2.5). But
this follows from (4.1.52) with     replaced by     and the convergence


Remark 4.2.1 Let             be given by (4.1.9)–(4.1.12). If             and
        with               then conditions (4.2.1) and (4.2.2) are satisfied.
Theorem 4.2.2 Assume A4.1.1 and A4.1.2 hold and that
  i)                                and             for some
  ii)                                            for some c > 0 and
 iii)           is stable and                            for some
  iv)      given by (4.1.10) is an MA process:

                                                   for
168         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

where                   are real numbers and              is a martingale
difference sequence which is independent of         and satisfies




Then



where             and




  Proof. Since          it follows that                 and




  By assumption         is independent of       and hence      is inde-
pendent of          Then by (4.2.11) and the convergence theorem for
martingale difference sequences we obtain (4.2.5). By Theorem 4.2.1 we
have as


and after a finite number of iterations of (4.1.11), say, for       there
are no more truncations.
   Since                                          and           is stable,
it follows that




  Let    be given by
Optimization by Stochastic Approximation                                 169

By (4.1.11), (4.1.13), (4.1.36), and condition ii) it follows that for




  Let      be given by




where
 Since              is stable, by (3.1.8) it follows that there are constants
         and        such that




Noticing                                              where          because
               by condition iii), we have
170            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

where                     respectively denote the five terms on the right-
hand side of the first equality of (4.2.19).
  By (4.2.18),
    By Lemma 3.3.2,                    because       and
  By (4.1.28) and (4.1.3) it follows that                      and hence
by i) and (4.2.18)




where is a constant.
  By Lemma 3.3.2 and         the right-hand side of (4.2.20) tends to
zero a.s. as
  To estimate let us consider the following linear recursion




   By (4.2.17) it follows that




By (4.2.11),                      Since                               and

                  Then by the convergence theorem for martingale differ-
ence sequences it follows that




i.e.,
Optimization by Stochastic Approximation                                171

  Similarly,




  Applying Lemma 3.1.1, we find that                         From (4.2.22),
it follows that
  Since     is an MA process driven by a martingale difference sequence
satisfying (4.2.6),

  By the argument similar to that used for (4.2.21) and (4.2.22), from
Lemma 3.1.1 it follows that




  Therefore, putting all these convergence results into (4.2.19) yields




By (3.3.37),




where     is given by (4.2.10). By (4.2.18), from (4.2.23) and (4.2.24)
it follows that                         which together with the definition
(4.2.14) for      proves the theorem.

Example 4.2.1 The following example of             and        satisfies Con-
ditions i) and iii) of Theorem 4.2.2:




In this example,                                       and
172          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Remark 4.2.2 Results in Sections 4.1 and 4.2 are proved for the case,
where the two-sided randomized differences                             are
used where        and       are given by (4.1.3) and (4.1.4), respectively.
But, all results presented in Sections 4.1 and 4.2 are also valid for the
case where the one-sided randomized differences



are used, where        and       are given by (4.1.3) and (4.1.6), respec-
tively.
  In this case, in (4.1.27), (4.1.28) and in the expression of   should
be replaced by 1, and (4.1.29)–(4.1.32) disappear. Accordingly, (4.1.36)
changes to



Theorems 4.1.1-4.1.4 and 4.2.1 remain unchanged. The conclusion of
Theorem 4.2.2 remains valid too, if in Condition iv)

changes to

4.3.      Global Optimization
   As pointed out at the beginning of the chapter, the KW algorithm may
lead to a local minimizer of        Before the 1980s, the random search
or its combination with a local search method was the main stochastic
approach to achieve the global minimum when the values of L can exactly
be observed without noise. When the structural property of L is used
for local search, a rather rapid convergence rate can be derived, but it
is hard to escape a local attraction domain. The random search has
a chance to fall into any attraction domain, but its convergence rate
decreases exponentially as the dimension of the problem increases.
   Simulating annealing is an attractive method for global optimization,
but it provides only convergence in probability rather than path-wise
convergence. Moreover, simulation shows that for functions with a few
local minima, simulated annealing is not efficient. This motivates one
to combine KW-type method with random search. However, a simple
combination of SA and random search does not work: in order to reach
the global minimum one has to reduce the noise effect as time goes on.
   A hybrid algorithm composed of a search method and the KW algo-
rithm is presented in the sequel with main effort devoted to design eas-
Optimization by Stochastic Approximation                                173

ily realizable switching rules and to provide an effective noise-reducing
method.
   We define a global optimization algorithm, which consists of three
parts: search, selection, and optimization. To be fixed, let us discuss
the global minimization problem. In the search part, we choose an ini-
tial value and make the local search by use of the KW algorithm with
randomized differences and expanding truncations described in Section
4.1 to approach the bottom of the local attraction domain. At the same
time, the average of the observations for L is used to serve as an estimate
of the local minimum of L in this attraction domain. In the selection
part, the estimates obtained for the local minima of L are compared with
each other, and the smallest one among them together with the corre-
sponding minimizer given by the KW algorithm are selected. Then, the
optimization part takes place, where again the local search is carried out,
i.e., the KW algorithm without any truncations is applied to improve
the estimate for the minimizer. At the same time, the corresponding
minimum of L is reestimated by averaging the noisy observations. After
this, the algorithm goes back to the search part again.
   For the local search, we use observations (4.1.3) and (4.1.4), or (4.1.5)
and (4.1.6). To be fixed, let us use (4.1.5) and (4.1.6).
   In the sequel, by KW algorithm with expanding truncations we mean
the algorithm defined by (4.1.11) and (4.1.12) with




where         and      are given by (4.1.5) and (4.1.6), respectively. Sim-
ilar to (4.1.9) and (4.1.10) we have



where


By KW algorithm we mean


with       defined by (4.3.2).
   It is worth noting that unlike (4.1.8),            is used in (4.3.1).
Roughly speaking, this is because in the neighborhood of a miminizer
of                      is increasing, and    in (4.1.11) should be an
observation on
174          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  In order to define switching rules, we have to introduce integer-valued
and increasing functions      and     such that
and                        as
  Define


   In the sequel, by the       search period we mean the part of algorithm
starting from the       test of selecting the initial value     up to the next
selection of initial value. At the end of the               search period, we
are given         and        being the estimates for the global minimizer
and the minimum of L, respectively. Variables such as
     and       etc. in the       search period are equipped by superscript
     e.g.,           etc.
   The global optimization algorithm is defined by the following five
steps.
 (GO1) Starting from          at the    search period, the initial value
       is chosen according to a given rule (deterministic or random),
  and then         is calculated by the KW algorithm with expanding
  truncations (4.1.11) and (4.1.12) with        defined by (4.3.1), for
  which , step sizes        and       and       used for truncation are
  defined as follows:




   where c > 0 and              are fixed constants,         and
   are two sequences of positive real numbers increasingly diverging to
   infinity.

 (GO2) Set the initial estimate                for          and update the
  estimate for       by




   where        is the noise when observing
   After       steps,         is obtained.

 (GO3) Let              be a given sequence of real numbers such that
    and                    as             Set                  For          if
Optimization by Stochastic Approximation                                 175

                                then set                     Otherwise, keep
        unchanged.
 (GO4) Improve        to        by the KW algorithm with expanding
  truncations (4.1.11) and (4.1.12) with     defined by (4.3.1), for
   which



   where in (4.1.11) and (4.1.12)      may be an arbitrary sequence of
   numbers increasingly diverging to infinity, and



   At the same time, update the estimate         for         by




   where       is the noise when observing               At the end of this
   step,        and         are derived.
 (GO5) Go back to (GO1) for the               search period.
   We note that for the     search period      is added to    and    (see
   (4.3.7) and (4.3.8)). The purpose of this is to diminish the effect of
   the observation noise as increases. Therefore,       and    both tend
   to zero, not only as            but also as             The following
   example shows that adding an increasing        to the denominators of
       and    is necessary.

Example 4.3.1 Let




It is clear that the global minimizer is               and           are two
local minima. Furthermore,                 and                 are attraction
domains for –1 and +1, respectively.
176             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  Since      is linear, for local search we apply the ordinary KW al-
gorithm without truncation




Here, no randomized differences are introduced, because this is a one-
dimentional problem.
  Assume



where




and       and      are mutually independent and both are sequences of
iid random variables with



Let us start from (GO1) and take

                     (not tending to infinity),

        i.e.,

  If               then, by noticing               one of         and
         must belong to         Elementary calculation shows that




Paying attention to (4.3.13), we see



and
Optimization by Stochastic Approximation                                177

This means that       is located in one of the attraction domains
        and                Furthermore, by (4.3.12) and (4.3.13), the ob-
servations carried out at these domains are free of noise. Let us consider
the further development of the algorithm, once       has fallen into the in-
terval            or           To be fixed, let us assume
        For                                       we have




or                                 which implies
   If               say,            then                  since
It suffices to consider the case where                              i.e.,
                    because for the case                  we again have
(4.3.14) and
   Simple computation shows that starting from                       the
observations are free of noise, and the algorithm becomes



     As a result of computation, we have


Then, starting from           the algorithm will be iterated according to
(4.3.14), and hence
   For the case         it can similarly be shown that
   Therefore, whatever the initial value is chosen,   will never converge
to the global minimizer       if    in (GO1) does not diverge to infinity.
  Let us introduce conditions to be used.
  Since we are seeking for global minima of                Condition A4.1.2’
should be modified.
A4.3.1                  is locally Lipschitz continuous,

and L(J) is nowhere dense, where                                  the set of
extremes of L.

  Note that for seeking minima of      the corresponding part in A4.1.2’,
should be modified as follows:    used in (4.1.11) is such that
          for some and                But this is implied by assuming
178        STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

A4.3.2




A4.3.3 For any convergent subsequence          of




where      denotes      given by (4.3.3) with replaced by
denotes     used for the ¢ search period, and




A4.3.4 For any convergent subsequence




where         is given by (1.3.2).
   It is worth emphasizing that each     in the sequence
              is used only once when we form        and
   We now give sufficient conditions for A4.1.2, A4.3.3, and A4.4.4. For
this, we first need to define            generated by estimates      and
    derived up-to current time. Precisely, for running in the     search
period of Step (GO1) define




and for   running in Step (GO4) define
Optimization by Stochastic Approximation                                179

Remark 4.3.1 If both sequences




and         are martingale difference sequences with



and if



for some          then A4.3.2 holds.

  This is because



is a maringale difference sequence with bounded second conditional mo-
ment, and hence



which implies (4.3.15).
  By using the second parts of conditions (4.3.22) and (4.3.23), (4.3.16)
can be verified in a similar way.

Remark 4.3.2 If                        and        is independent of

                                                       and if         exists
such that                                  then by the uncorrelatedness of
         with          for      or
180          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

where M is a constant. From this, it follows that




and hence A4.3.3 holds.
Remark 4.3.3 If                     and       is independent of
      then by the martingale convergence theorem, A4.3.4 holds.

   We now formulate the convergence theorem for the global optimiza-
tion algorithm (GO1)–(GO5).

Theorem 4.3.1 Assume A4.1.1, A4.3.2, A4.3.3, and A4.3.4 hold. Fur-
ther, assume that                selected in (GO1) is dense in an
open set U,                          for some         and
           If     then




where         is derived at Step (GO4) and     is the set of global mini-
mizers of



The proof of theorem is separated into lemmas.
   We recall that the essence of the proof for the basic convergence The-
orem 2.2.1 consists in showing the following property that         cannot
cross a nonempty interval          infinitely often if
We need to extend this property to a family of algorithms.
   Assume for each fixed the observation is



and the algorithm develops as follows
Optimization by Stochastic Approximation                              181

where

                                               and

  Assume, further, for fixed
                                 and

Lemma 4.3.1 Assume L(J) is nowhere dense, where
    Let       be a nonempty interval such                     If there are
two sequences         and        such that




and         is bounded, then it is impossible to have




where



   Proof. Without loss of generality we may assume           converges as
          otherwise, it suffices to select a subsequence.
   Assume the converse: i.e., (4.3.28) holds. Along the lines of the proof
for Theorem 2.2.1 we can show that




for some constant M if is sufficiently large. As a matter of fact, this is
an analogue of (2.2.3). From (4.3.29) the following analogue of (2.2.15)
takes place:


and the algorithm for         has no truncation for
           if is large enough, where        is a constant. Similar to
(2.2.27), we then have
182          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

for some small T > 0 and all sufficiently large
   From this, by (4.3.27) and convergence of            it follows that



  By continuity of            and (4.3.30) we have



which implies that                          for small enough T.
  Then by definition,



which contradicts (4.3.32). The obtained contradiction shows the im-
possibility of (4.3.28).

  Introduce



                        and
                       such that

Lemma 4.3.2 Let                                 be given by (GO1). Assume
A4.3.1 and A4.3.3 hold and                            for some       Then
for any                                 may occur infinitely many often with
probability 0, i.e.,




  Proof. Since L(J) is nowhere dense, for any        belonging to infinitely
many of         there are subsequences                      such that



and

where
                                      and
Optimization by Stochastic Approximation                                 183

   By assumption               as                  must be bounded.
  Hence,          is bounded. Without loss of generality we may assume
that        is convergent.
   Notice that at Step (GO1),         is calculated according to (4.1.11)
and (4.1.12) with       given by (4.3.2) and (4.3.3), i.e.,




which differ from (4.1.11) (4.1.12), (4.3.2), and (4.3.3) by superscript (i),
which means the calculation is carried out in the         search period.
  By (4.1.27) with notations (4.1.33) and (4.1.34), equipped by super-
script    we have




where



  If we can show that                        and
184         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

where



then by Lemma 4.3.1, (4.3.42) contradicts with that all sequences
                        cross the interval           which is disjoint with
L (J).
   This then proves (4.3.36).
   We now show                     for all sufficiently large if T is small
enough.
   Since                    and    are finite, where




  We now show that on the
                              if is sufficiently large and T is small
enough.
  Suppose the converse: for any fixed T > 0, there always exists
whatever large   is taken such that
  Since                        by continuity of     there is a constant
q > 0 such that
  For any                            let us estimate                       By

            and the local Lipschitz continuity of        it is seen that




is uniformly bounded with respect to                        and all
Then by A4.3.3, it follows that there is a constant      such that




  From this it follows that there is no truncation for
and

  Let T be so small that
Optimization by Stochastic Approximation                               185

   On the other hand, however, we have              and
   The obtained contradiction shows                    for all sufficiently
large if T is small enough.
   We now prove (4.3.42). Let us order      in the following way


   From (4.1.34) and by the fact that         is an iid sequence and is
independent of sums appearing in (4.1.34), it is easy to be convinced
that       is a martingale difference sequence.
   By the condition                             for some      it is clear
that              for       with being a constant. Then we have




and by the convergence theorem for martingale difference sequences




  By (4.1.28) and (4.3.8), we have



where is a constant. Noticing that                      for large and
small T, by (4.3.44),(4.3.45), and A4.3.3 we may assume      sufficiently
large and T small enough such that




  This will imply (4.3.42) if we can show



We prove (4.3.47) by induction.
 We have               by definition of      Assume that
186          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and                 Then there is no truncation at time
since by (4.3.46) (with chosen such that




if T in (4.3.46) is sufficiently small.
   Then by (4.3.40), we have




and by (4.3.43) and (4.3.46)



for small T. This completes induction, and (4.3.42) is proved, which, in
turn, concludes the lemma.
Lemma 4.3.3 Assume A4.3.1–A4.3.3 hold. Further, assume that
                        for some           and                      If there
exists a subsequence        such that              then



  Proof. For any            by Lemma 4.3.2 there exists        such that for
any                                            if                 By (GO2),
we have




Then by A4.3.2, there exists              such that, for any

  This implies the conclusion of the lemma by the arbitrariness of
Optimization by Stochastic Approximation                              187

Lemma 4.3.4 Assume A4.3.1–A4.3.3 hold,                                    for
some        and                      If subsequence        is such that




then



where      denotes the closure of L(J), and          and             are
given by (GO1) and (GO2) for the        search period.

   Proof. Since              as             by A4.3.1, for (4.3.50) it is
seen that         contains a bounded infinite subsequence, and hence, a
convergent subsequence (for simplicity of notation, assume
   such that



  Since           there exists a       such that
and hence
  Define



It is worth noting that for any T > 0,             is well defined for all
sufficiently large because                 and hence
  We now show that



   By the same argument as that just used before, without loss of gen-
erality, we may assume         is convergent (otherwise, a convergent
subsequence should be extracted) and thus



We have to show
188          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

   By the same argument as that used for deriving (2.2.27), it follows
that there is     such that



which implies the correctness of (4.3.53).
  From (4.3.53) it follows that




because, otherwise, we would have a subsequence            with
            such that                           and by (4.3.54)




for large  However, by (2.2.15),                              so for small
enough T > 0, (4.3.56) is impossible. This verifies (4.3.55).
   We now show



  Assume the converse, i.e.,




From (4.3.54) and (4.3.58) it is seen that for all sufficiently large   the
sequence


contains at least a crossing the interval          with
In other words, we are dealing with a sample path      on which both
(4.3.54) and (4.3.58) are satisfied. Thus, belongs to            By
Lemma 4.3.2, the set composed of such is with zero probability. This
verifies (4.3.57).
   From (4.3.57) it follows that




for all sufficiently large
Optimization by Stochastic Approximation                            189

  Notice that from the following elementary inequalities




by (4.3.5) it follows that



By definition of         we write




By (4.3.59) and (4.3.61), noticing                   we have




because
  By (4.3.55) and (4.3.61) we have




Since                           by (4.3.15), combining (4.3.62)–(4.3.64)

leads to
190         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

which completes the proof of the lemma.

Lemma 4.3.5 Let           be given by (GO1)–(GO5). Assume that A4.3.1–
A4.3.4 hold, initial values        selected in (GO1) are dense in an open
set U containing the set       of global minima of
              for some           and                        Then for any




   Proof. Among the first search periods denote by           the number of
those search periods for which   are reset to be             i.e.,




  Since L(J) is not dense in any interval, there exists an interval
         such that                        So, for lemma it suffices to prove
that           cannot cross           infinitely many times a.s.
  If                then after a finite number of steps,        is generated
by (GO4). By Lemma 4.3.1 the assertion of the lemma follows immedi-
ately. Therefore, we need only to consider the case where
  Denote by       the search period for which a resetting happens, i.e.,
                It is clear that            by
  In the case                by (GO4) the algorithm generates a family
of consecutive sequences:



  Let us denote the sequence by



and the corresponding sequence of the values of         by




Let       be sufficiently small such that
Optimization by Stochastic Approximation                                191

and                                        which is possible because L(J) is
nowhere dense.
  Since    is dense in U,         visits           infinitely often. Assume

     By Lemma 4.3.2



if     is large enough.
     Define

This means that the first resetting in or after the           search period
occurs in the       search period.
   We now show that there is a large enough                   such that the
following requirements are simultaneously satisfied:
   i)                  implies



where             is fixed;
  ii)           does not cross intervals

                           and

     iii)




     vi)




     v)


  We first show ii)-v).
  Since all three intervals indicated in ii) have an empty intersection
with L(J), by Lemma 4.3.1 ii) is true if S is large enough. It is clear
192          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

that iii) and vi) are correct for fixed      and      if is large enough,
while v) is true because
   For i) we first show that there are infinitely many for which


  By (4.3.68) and (4.3.71) we have


  Consider two cases.
  1) There is no resetting in the        search period. Then


and by (4.3.72) and (4.3.74) it follows that


  By (4.3.70) and the definition of          there exists at least an integer
 among                                               such that



because, otherwise, we would have                        which contradicts
(4.3.74).
   By ii) we conclude that



and, in particular,
  2) If there is a resetting in the      search period, then


and by (4.3.68) we also have (4.3.76).
  From (4.3.76), by ii)          does not cross                          for
        Consequently,


  This together with (4.3.70) implies that
Optimization by Stochastic Approximation                               193

  By (GO3) we then have



Noticing           as          we conclude that there are infinitely
many for which (4.3.73) holds.
  We now show that there is a    such that



where lim sup is taken along those for which (4.3.73) holds.
  Assume the converse: there is a subsequence of such that



Then by Lemma 4.3.4,



which contradicts (4.3.73). This proves (4.3.78), and also i). As a matter
of fact, we have proved more than i): Precisely, we have shown that there
are infinitely many for which (4.3.73) holds, and for              (4.3.73)
implies the following inequality:



  Let us denote by    the totality of those          for which (4.3.73)
holds and        What we have just proved is that contains infinitely
many          if
  Consider a sequence                By ii) it cannot cross the interval
                              This means that



Then by (4.3.70)




and by (GO3)
194         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

since     is a search period with resetting.
   Thus, we have shown that if                   then            also be-
longs to    Therefore,                            and



  From here and (4.3.67) it follows that



    Since                        may cross the interval          only for
finite number of times by Lemma 4.3.1. This completes the proof of the
lemma.
   Proof of Theorem 4.3.1.
   By Lemma 4.3.5 the limit                  exists. By arbitrariness of
   from (4.3.69) it follows that



  By continuity of       we conclude that




4.4.      Asymptotic Behavior of Global Optimization
          Algorithm
   In last section a global optimization algorithm combining the KW al-
gorithm with search method was proposed, and it was proved that the
algorithm converges to the set       of global minimizers, i.e.,
           a.s. However, in the algorithm defined by (GO1)–(GO5), reset-
tings are involved. The convergence                      a.s. by no means
excludes the algorithm from resettings asymptotically. In other words,
although                      a.s., it may still happen that
where is defined in Lemma 4.3.5, i.e., it may still be possible to have
infinitely many resettings.
   In what follows we will give conditions under which                a.s.
In this case, the global optimization algorithm (GO1)–(GO5) asymp-
totically behaves like a KW algorithm with expanding truncations and
randomized differences, because for large        is purely generated by
(GO4) without resetting.
Optimization by Stochastic Approximation                                     195

A4.4.1             is a singleton,       is twice continuously differentiable
in          the ball centered at      with radius for some               and
              of        is positive definite.

A4.4.2          and                ordered as in (4.3.20) (4.3.21) and
Remark 4.3.1 are martingale difference sequences with




A4.4.3       is independent of

                              for          and           for

and


  We recall that        is the observation noise                           in the
   search period.

A4.4.4       is independent of                   and                       where
     denotes the observation noise                     when       is calculated
in (Go4).

Lemma 4.4.1 Assume A4.4.2 holds and, in addition,

                                     and

Then, there exists an    (maybe depending on           such that for any




and
196          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS


  Proof. Notice that by A4.4.2                            is a martingale
difference sequence with bounded conditional variance. By the conver-
gence theorem for martingale difference sequences




which implies (4.4.2).
  Estimate (4.4.3) can be proved by a similar way.

Lemma 4.4.2 Assume A4.4.3 and A4.4.4 hold.           If
            for some              then




and




for            where       and    are given in (4.1.34), where super-
script   denotes the corresponding values in the ith search period.
  Proof. Let us prove




Note that


is a martingale difference sequence with bounded conditional second
moment. So, by the convergence theorem for martingale difference se-
quences for (4.4.6) it suffices to show
Optimization by Stochastic Approximation                                 197

By assumption of the lemma                 or                and
                    for large   The last inequality yields

                                   and hence

Therefore,




Thus, (4.4.6) is correct. As noted in the proof of Lemma 4.3.2,         is
a martingale difference sequence. So, (4.4.4) is true.
  Similarly, (4.4.5) is also verified by using the convergence theorem for
martingale difference sequences.
Lemma 4.4.3 In addition to the conditions of Theorem 4.3.1, suppose
that A4.4.1 and A4.4.3 hold,       is positive definite, and



for some                     Then there exists a sufficiently large   such
that, for        if the inequality



holds for some         with        then the following inequality holds



   Proof. . By A4.4.1 and the Taylor’s expansion, we have



i.e.,
198         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

where



Therefore, for any                 there is a       such that for any




and



where        and       denote the minimum and maximum eigenvalue of
H, respectively, and o(1) is the one given in (4.4.10).
  Since     is the unique minimizer of      and      is continuous, there
is such that                    if                    We always assume
that is large enough such that

                                    and


where     is used in (GO1). From (4.4.8) it then follows that
        and there is no truncation at time
  Denote




For     satisfying (4.4.8) and            we have




where      is given by (4.3.41).
Optimization by Stochastic Approximation                           199

  By (4.4.11) it then follows that




where       is given by (4.1.33) with superscript   denoting the
search period and



By (4.4.14) it is clear that




Let



For (4.4.9) it suffices to show that
  Assume the converse:
  Let



By (4.4.20), for all




and hence,


Thus, (4.4.12)-(4.4.14) are applicable.
200          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  By (4.4.17) and the second inequality of (4.4.13), we have for




which incorporating with (4.4.21) yields



Applying the first inequality of (4.4.13) and then (4.4.20) leads to




Since for                                   there is no truncation for
Using (4.4.18) we have




where




We now show that           is negative for all sufficiently large
   Let us consider terms in                    By assumption,
from (4.4.19) and (4.4.22) it follows that
Optimization by Stochastic Approximation                            201

where
   We now estimate the second term on the right-hand side of (4.4.25)
after multiplying it by
   From (4.4.4) and (4.4.16) it follows that




uniformly with respect to     and     with
  Noticing that                       with   being a constant,
and that              which implies          we find




Then, noticing that                 is bounded by some constant
we have




For the third term on the right-hand side of (4.4.25), multiplying it by
           we have




where         is a constant.
  Finally, for the last term of (4.4.25) we have the following estimate




Combining (4.4.26)–(4.4.30) we find that

                              and                for large
202         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Consequently, from (4.4.25) it follows that




We now show that




by induction.
  Assume it holds for         i.e.,




which has been verified for              We have to show it is true for

  By (4.4.18) we have




and
Optimization by Stochastic Approximation                               203




where




Comparing (4.4.35) with (4.4.25), we find that in lieu of   and

                    we now have    and                              respec-

tively. But, for both cases we use the same estimate (4.4.27). Therefore,
completely by the same argument as (4.4.26)–(4.4.30), we can prove that


                             and                        for large


Thus, we have proved (4.4.32).
  By the elementary inequality
              for        which is derived from
           for any matrices A and B of compatible dimensions, we derive
204         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

from (4.4.32)




As mentioned before, for                                    and there is no
truncation. Then by (4.4.18)



where




Then from (4.4.36) and (4.4.27) it follows that




where




which tends to zero as          by (4.4.27) and (4.4.38).
  Then




where for the last equality (4.4.10) is used.
  Finally, by (4.4.21), for large from (4.4.39) it follows that
Optimization by Stochastic Approximation                              205

which incorporating with (4.4.10) yields



This contradicts (4.4.20), the definition of            The contradiction
shows

Theorem 4.4.1 Assume that A4.3.1, A4.4.1–A4.4.4 hold, and
is positive definite for some
   Further, assume that




and for some constants




Then the number of resettings is finite, i.e.,



where    is the number of resettings among the first       search periods
(GO1), and      is given in (GO3).
   Proof. If (4.4.44) were not true, then there would be an S with positive
probability such that, for any            there exists a subsequence
such that at the       search period a resetting occurs, i.e.,



Notice that




by(4.4.41) and                             and
206              STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

by (4.4.41) and (4.4.42). Hence, conditions of Lemma 4.4.1 are satisfied.
Without loss of generality, we may assume that (4.4.2)–(4.4.5) and the
conclusion of Theorem 4.3.1 hold             From now on assume that
       is fixed.
  It is clear that, for any constant




if         is large enough, since     for
     Let



Rewrite (4.4.46) as



     Define



and



Noticing that there is no resetting between      and      and (4.4.47)
corresponds to (4.4.8), by the same argument as that used in the proof
of Lemma 4.4.3, we find that, for any



Since                      we have
Optimization by Stochastic Approximation                              207

By (4.4.3) (4.4.42) and (4.4.43) it follows that




where for the last inequality (4.4.41) is used.
  Thus, by (4.4.40)




By (4.4.33) it follows that




provided        is large enough, where for the last inequality, (4.4.2) is
used.
  Since by (4.4.43)



and since

                                           and
208         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

we find




where the last inequality follows from (4.4.40).
  Using (4.4.51) and (4.4.53), from (4.4.52) for sufficiently large   we
have




Using the second inequality of (4.4.43) and then observing that

                                        with

and




by (4.4.40) and (4.4.41) and              we find




  We now show that there is                such that




Assume the converse:
Optimization by Stochastic Approximation                             209

Then, we have




for large enough      because




Inequality (4.4.57) contradicts (4.4.55). Consequently, (4.4.56) is true.
In particular, for             we have



Completely by the same argument as that used for (4.4.47)–(4.4.50), by
noticing that there is no resetting from      to          we conclude
that



By the same treatment as that used for deriving (4.4.54) from (4.4.50),
we obtain




Comparing (4.4.58) with (4.4.54), we find that  has been changed to
     and this procedure can be continued if the number of resettings
210         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

is infinite. Therefore, for any          we have




From (4.4.40) we see



Since                  we have                     and hence by




Consequently, by (4.4.41) the right-hand side of (4.4.59) can be esti-
mated as follows:




by (4.4.61) if is large enough.
   However, the left-hand side of (4.4.59) is nonnegative. The obtained
contradiction shows that must be finite, and (4.4.44) is correct.
   By Theorem 4.4.1, our global optimization algorithm coincides with
KW algorithm with randomized differences and expanding truncations
for sufficiently large    Therefore, theorems proved in Section 4.2 are
applicable to the global optimization algorithm. By Theorems 4.2.1 and
4.2.2 we can derive convergence rate and asymptotic normality of the
algorithm described by (GO1)–(GO5).

4.5.      Application to Model Reduction
   In this section we apply the global optimization algorithm to system
modeling. A real system may be modeled by a high order system which,
however, may be too complicated for control design. In control engineer-
ing the order reduction for a model is of great importance. In the linear
system case, this means that a high order transfer function        is to be
approximated by a lower order transfer function. For this one may use
methods like the balanced truncation and the Hankel norm approxima-
tion. These methods are based on concept of the balanced realization.
We are interested in recursively estimating the optimal coefficients of the
Optimization by Stochastic Approximation                              211

reduced model by using the stochastic optimization algorithm presented
in Section 4.3.
   Let the high order transfer function    be




and let it be approximated by a lower order transfer function
       If     is of order                then      is taken to be of order
   (or       ). To be fixed, let us take      to be a polynomial of order
        and       of order




where coefficients                 should not be confused with step
sizes used in Steps (GO1)-(GO5). Write        as           where
and stand for coefficients of    and


It is natural to take




as the performance index of approximation. The parameters and          are
to be selected to minimize        under the constraint that
is stable. For simplicity of notations we denote                and write
           as
  Let us describe the         where            has the required property.
  Stability requires that


This implies that

because      is the sum of two complex-conjugate roots of
  If             then                      which yields                 If
          then                 and hence
212             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     Set



Identify                  and    appeared in Section 4.3 to
      and     respectively for the present case.
   We now apply the optimization algorithm (GO1)–(GO5) to minimiz-
ing        under constraint that the parameter in            belongs to
D. For this we first concretize Steps (GO1)–(GO5) described in Section
4.3.
   Since         is convex in for fixed we take the fixed initial value
                 for any search period and randomly select initial values
only for    according to a distribution density    which is defined as
follows:

where                        with        and         being the uniform dis-
tributions over [–2,2] and      – 1,1], respectively.
   After     having been selected in the       search period, the algorithm
(4.1.11) and (4.1.12) is calculated with                          and
             As to observations, in stead of (4.3.1) we will use information
about gradient because in the present case the gradient
of         can explicitly be expressed:




     In the     search period the observation is denoted by       and is given
by




where         is independently selected from       according to the uniform
distribution, and         stands for the estimate for         at time   in the

      search period. It is clear that     is an approximation to the integral
Optimization by Stochastic Approximation                            213


(4.5.8) with               Therefore, we have observations in the form




   The expanding truncation method used in (4.1.11) and (4.1.12) re-
quires projecting the estimated value to a fixed point, if the estimated
value appears outside an expanding region. Let us denote it by         In
(4.1.11) and (4.1.12) the spheres with expanding radiuses        serve as
the expanding regions       which are now modified as follows.

  Let us write                   where          Define




where




  The expanding truncations in (4.1.11) and (4.5.11) are also modified:




where                   means the projection of
   Take                    Then after
steps,     will be obtained.
   Concerning (GO2)–(GO4), the only change consists in observations.
We replace       in (GO2)–(GO4) by         which is defined by
214         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

where     are independently selected from         according to the uni-
form distribution for each Clearly,       is an approximation to
                 Finally, take     equal to
   In control theory there are several well-known model reduction meth-
ods such as model reduction by balanced truncation, Hankel norm ap-
proximation among others. These methods depend on the balanced re-
alization which is a state space realization method for a transfer matrix
       keeping the Gramians for controllability and observability of the
realized system balanced. In order to compare the proposed global op-
timization (GO) method, we take the commonly used model reduction
methods by balanced truncation (BT) and Hankel norm approximation
(HNA), which, are realized by using Matlab. For this, the discrete-time
transfer functions       are transformed to the continuous time ones by
using d2c provided in Matlab. Then the reduced systems are discretized
to compute           for comparison.
  As         we take a 10th order transfer function                respec-
tively for the following examples:

Example 4.5.1




Example 4.5.2




Example 4.5.3




  Using the algorithm described in Section 4.3, for Examples 4.5.1-4.5.3
we obtain the approximate transfer functions of order 4, respectively,
Optimization by Stochastic Approximation                          215

denoted by                   and           with




   Using Matlab we also derive the 4th order approximations for Exam-
ples 4.5.1–4.5.3 by balanced truncation and Hankel norm approximation,
which are as follows:




where the subscripts and H denote the results obtained by balanced
truncation and Hankel norm approximation, respectively.
   The approximation errors      are given in the following table:




   From this table we see that the algorithm presented in Section 4.3
gives less approximation errors in          in comparison with other
methods.
   We now compare approximation errors in      norm and compare step
responses between the approximate models and the true one by figures.
   In the figures of step response
   the solid lines       denote the true high order systems;
   the dashed lines (- - -) denote the system reduced by Hankel norm
   approximation;
216        STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  the dotted lines       denote the system reduced by balanced trun-
  cation;
  The dotted-dashed lines         denote the systems reduced by the
  stochastic optimization method given in Section 3.

 In the figures of the approximation error


  the solid lines      denote the systems reduced by the stochastic
  optimization method;
  the dashed lines (- - -) denote the system reduced by Hankel norm
  approximation;
  the dotted lines       denote the system reduced by balanced trun-
  cation.
Optimization by Stochastic Approximation                            217

  Example 4.5.1




  Example 4.5.2




  Example 4.5.3




   These figures show that the algorithm given in Section 4.3 gives less
approximation error in              in comparison with other methods
for Example 4.5.1 and the intermediate error in              for Exam-
ples 4.5.2 and 4.5.3. Concerning step responses, the algorithm given
in Section 4.3 provides better approximation in comparison with other
methods for all three examples.
218         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

4.6.     Notes and References
   The well-known paper [61] by Kiefer and Wolfowitz is the pioneer
work using stochastic approximation method for optimization. The ran-
dom version of KW algorithm was introduced in [63], and the random
direction version of KW algorithm was dealt with in [85] by the ODE
method. Theorems 2.4.1, 2.4.2 given in Section 4.1 are presented in [21],
while Theorem 2.4.4 in [18]. The results on convergence rate and symp-
totic normality of KW algorithm presented in Section 4.2 can be found
in [21].
   Global optimization based on noisy observations by discrete-time sim-
ulated annealing is considered in [45, 52, 100]. Combination of the KW
algorithm with a search method for global optimization is dealt with in
[97]. A better combination given in [49] is presented in Section 4.3 and
4.4.
   For model reduction we refer to [51, 102]. The global optimization
method presented in Section 4.3 is applied to model reduction in Sec-
tion 4.5, which is written based on [22].
Chapter 5

APPLICATION TO SIGNAL PROCESSING




   The general convergence theorems developed in Chapter 2 can deal
with noises containing not only random components but also structural
errors. This property allows us to apply SA algorithms to parameter
estimation problems arising from various fields. The general approach,
roughly speaking, is as follows. First, the parameter estimation problem
coming from practice is transformed to a root-seeking problem for a rea-
sonable but unknown function         which may not be directly observed.
Then, the real observation        is artificially written in the standard
form

with                         Normally, it is quite straightforward to arrive
at this point. The main difficulty is to verify that the complicated noise
                      satisfies one of the noise conditions required in the
convergence theorems. It is common that there is no standard method to
complete the verification procedure, because          for different problems
are completely different from each other.
   In Section 5.1, SA algorithms are applied to solve the blind channel
identification problem, an active topic in communication. In Section 5.2,
the principle component analysis used in pattern classification is dealt
with by SA methods. Section 5.3 continues the problem discussed in
Section 5.1, but in more general setting. Namely, unlike Section 5.1,
the covariance matrix of the observation noise is no longer assumed to
be known. In Section 5.4, adaptive filtering is considered: Very simple
conditions for convergence of sign-algorithms are given. Section 5.5 dis-
cusses the asymptotic behavior of asynchronous SA algorithms, which
take the possible communication delays between parallel processors into
consideration.

                                    219
220          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

5.1.      Recursive Blind Identification
   In system and control area, the unknown parameters are estimated on
the basis of observed input and output data of the system. This is the
subject of system identification. In contrast to this, for communication
channels only the channel output is observed and the channel input is un-
available. The topic of blind channel identification is to estimate channel
parameters by using the output data only. Blind channel identification
has drawn much attention from researchers because of its potential ap-
plications in wireless communication. However, most existing estimation
methods are “block” algorithms in nature, i.e., parameters are estimated
after the entire block of data have been received.
   By using the SA method, here a recursive approach is presented: Es-
timates are continuously improved while receiving new signals.
   Consider a system consisting of channels with L being the maximum
order of the channels. Let                         be the one-dimensional
input signal, and                       be the                 channel out-
put at time                           where N is the number of samples
and may not be fixed:




where



are the unknown channel coefficients.
   Let us denote by



the coefficients of the   channel, and by



the coefficients of the whole system which compose a
vector.
   The observations      may be corrupted by noise



where     is a                vector. The problem is to estimate       on
the basis of observations.
Application to Signal Processing                                    221

  Let us introduce polynomials in backward-shift operator



where
 Write           and    in the component forms



respectively, and express the component      via



  From this it is clear that




Define



where     is a




It is clear that      is a      x
   Similar to       and    let us define   and    and     and     which
have the same structure as        and    but with   replaced by     and
      respectively.
222          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  By (5.1.5) we have



  From (5.1.8), (5.1.4), and (5.1.10) it is seen that



This means that the channel coefficient        satisfies the set of linear
equations (5.1.12) with coefficients being the system outputs.
  From the input sequence                                    we form the
(N – 2L + 1) × (2L + 1)-Hankel matrix




It is clear that the maximal rank of               is 2L + 1 as
If               is of full rank for some            then             will
also be of full rank for any

Lemma 5.1.1 Assume the following conditions hold:
A5.1.1                         have no common root.

A5.1.2 The Hankel matrix                   composed of input signal is of
full rank (rank=2L + 1).
    Then     is the unique up to a scalar multiple nonzero vector simulta-
neously satisfying



   Proof. Assume there is another solution                              to
(5.1.14), which is different from



where                         is
  Denote
Application to Signal Processing                                     223

  From (5.1.15) it follows that




  By (5.1.7), we then have




which implies


where by           we denote the (2L + 1)-dimensional vector composed
of coefficients of the polynomial                            written in
the form of increasing orders of
   Since                is of full rank,       In other words,


   For a fixed (5.1.17) is valid for all                 Therefore, all
roots of         should be roots of              for all     By A5.1.1,
all roots of         must be roots of           Consequently, there is a
constant      such that                                     Substituting
this into (5.1.17) leads to



and hence                                  Thus, we conclude that



   We first establish a convergence theorem for blind channel identifica-
tion based on stochastic approximation methods for the case where a
noise-free data sequence                     is observed.
   Then, we extend the results to the case where N is not fixed and
observation is noise-corrupted.
  Assume                       is observed. In this case
are available, and we have                            We will repeatedly
use the data by setting
224         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  Define estimate for      recursively by


with an initial value
  We need the following condition.




Theorem 5.1.1 Assume A5.1.1–A5.1.3 hold. Let               be given by
(5.1.19) with any initial value     with                             Then



where                   is a constant.

  Proof. Decompose                  and      respectively into orthogonal
vectors:




where
  If    serves as the initial value for (5.1.19), then by (5.1.14),
     Again, by (5.1.14) we have


and we conclude that


and


Therefore, for proving the theorem it suffices to show that
as
   Denote
Application to Signal Processing                                        225

and
  Then by (5.1.21) we have


     Noticing that          and       is uniformly bounded with respect to
     for large           we have




and
  By (5.1.18)




and by Lemma 5.1.1,        is its unique up to a constant multiple eigenvec-

tor corresponding to the zero eigenvalue, and the rank of

is

     Denote by       the minimal nonzero eigenvalue of

 Let       be an arbitrary                           vector orthogonal to
Then       can be expressed by




where                            – 1, are the unit eigenvectors of
         corresponding to its nonzero eigenvalues.
     It is clear that




By this, from (5.1.23) and (5.1.24), it follows that for
226           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and



  Noticing that




we conclude




and hence
  From (5.1.21) it is seen that            is nonincreasing for
Hence, the convergence               implies that
  The proof is completed.
Remark 5.1.1 If the initial value               is orthogonal to      then
      and (5.1.20) is also true. But this is a non-interesting case giving
no information about
Remark 5.1.2 Algorithm (5.1.19) is an SA algorithm with linear time-
varying regression function            The root set J for          is
time-invariant:                 As mentioned above,        evolves in
one of the subspaces                            depending on the initial
value:                                    In the proof of Theorem 5.5.1
we have actually verified that      may serve as the Lyapunov function
    satisfying A2.2.20 for     Then applying Remark 2.2.6 also leads to
the desired conclusion.
  We now assume the input signal       is a sequence of infinitely many
mutually independent random variables and that the observations do
not contain noise, i.e.,   in (5.1.5).
Lemma 5.1.2 Assume A5.1.1 holds and            is a sequence of mutually
independent random variables with                 Then                 is
the unique unit eigenvector corresponding to the zero eigenvalue for the
matrices
Application to Signal Processing                                     227

and the rank of       is
   Proof. Since      is a sequence of mutually independent random vari-
ables and              it follows that



where




Proceeding along the lines of the proof of Lemma 5.1.1., we arrive at the
analogue of (5.1.16):



which implies




From (5.1.28) and (5.1.29) it follows that                Then following
the proof of Lemma 5.1.1, we conclude that      is the unique unit vector
satisfying



This shows that       is of rank                               and       is
its unique unit eigenvector corresponding to the zero eigenvalue.
   Let          denote the minimal nonzero eigenvalue of        On
we need the following condition.
A5.1.4          is a sequence of mutually independent random variables
with                                 for some       and such that




Condition A5.1.3 is strengthened to the following A5.1.5.

A5.1.5 A5.1.3 holds and                   where    is given in A5.1.4.
228         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

It is obvious that if     is an iid sequence, then             is a positive
constant, and (5.1.30) is automatically satisfied.

Theorem 5.1.2 Assume A5.1.1, A5.1.4, and A5.1.5 hold, and                  is
given by (5.1.19) with initial value     Then

                                             a.s.,

where

   Proof. In the present situation we still have (5.1.21) and (5.1.22). So,
it suffices to show
   With N replaced by 4L in the definitions of       and    we again arrive
at (5.1.23).
  Since                                is bounded, and

               converges a.s. by A5.1.4 and A5.1.5, there is a large     such
that




Let be an arbitrary                            vector such that
Then by Lemma 5.1.2,



and hence




  Therefore,                                                            which

tends to zero since                                      This implies
Application to Signal Processing                                   229

   We now consider the noisy observation (5.1.5). By the definition
(5.1.11), similar to (5.1.9) we have


where     and    have the same structure as     given by (5.1.10) with
    replaced by     and     , respectively.
  The following truncated algorithm is used to estimate




with initial value                                   and
  Introduce the following conditions.
A5.1.6       and       are mutually independent and each of them is a
sequence of mutually independent random variables (vectors) such that
                            and



for some

A5.1.6

and                  where     is given in A5.1.4.

  Set




Then


Denote by                     the resetting times, i.e.,
Then, we have
230        STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and



  Let        be an orthogonal matrix, where



Denote


Then


Noticing            and                               we find that




Lemma 5.1.3 Assume A5.1.6 and A5.1.7 hold. Then for        given by
(5.1.32),




  Proof. Setting


we have
Application to Signal Processing                                      231

  By A5.1.6,              is a martingale difference sequence with
                        Noticing                 and              we find
that




by the convergence theorem for martingale difference sequences.
  Since                 is independent of
          and                                   we also have




which together with (5.1.42) implies (5.1.41).

Lemma 5.1.4 Under the condition A5.1.6, if
        then there is a constant           possibly depending on sample
path, such that



where



  Proof. By A5.1.6 there is a constant            possibly depending on
sample path, such that


  Then the lemma follows from (5.1.36) by noticing

Lemma 5.1.5 Assume A5.1.1 and A5.1.6 hold.             Then for any   and
any     the matrix




has rank                 and     serves as its unique unit eigenvector
corresponding to the zero eigenvalue.
232            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  Proof. Since    is a sequence of mutually independent nondegenerate
random variables,                                        where




Notice that              coincides with             given by (5.1.13) if
setting N = 4L and         in (5.1.13).
   Proceeding as the proof of Lemma 5.1.1, we again arrive at (5.1.16).
Then, we have                                                     Since
                                    we find that              Then by
the same argument as that used in the proof of Lemma 5.1.1, we con-
clude that for any     is the unique unit nonzero vector simultaneously
satisfying




  Since          is a                       matrix, the above assertion
proves that the rank of                         is                 and also

proves that    is its unique unit eigenvector corresponding to the zero
eigenvalue.
   Denote by                 the minimal nonzero eigenvalue of
                          We need the following condition.

A5.1.8 There is a          such that


It is clear that if is an iid sequence, then                 is independent
of and and A5.1.8 is automatically satisfied.
Lemma 5.1.6 Assume A5.1.1 and A5.1.6–A5.1.8 hold.             Then for any
Application to Signal Processing                                       233

if N is large enough, where                       with c and       given in
A 5.1.7 and A 5.1.8, respectively.

  Proof. Let                           be the orthogonal matrix com-

posed of eigenvectors of                              By Lemma 5.1.4,

   is the only eigenvector corresponding to the zero eigenvalue.
  Since               can be expressed as




Then




By A5.1.4                 is bounded with respect to  and hence by
(5.1.48) and the nonincreasing property of    we have




where   denotes the integer part of
  Since                    we have
234               STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




which incorporating with (5.1.44) leads to




                                 for large enough
where                     and             as
Theorem 5.1.3 Assume A5.1.1 and A5.1.6–A5.1.8 hold.           Then for
        given by (5.1.32) with initial value
and


where      is a random variable expressed by (5.1.60).
  Proof. We first prove that the number of truncations is finite, i.e.,
                     a.s.
  Assume the converse:
  By Lemma 5.1.3, for any given




and
Application to Signal Processing                                     235

if    is large enough, say,
     By the definition of      we have




which incorporating with (5.1.52) implies




and




Define




     Since                                                is well-defined
by (5.1.54). Notice that from      to       there is no truncation. Con-
sequently,




and
236         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

   To be fixed, let us take
   From (5.1.52) and (5.1.54) it follows that sequences
                     starting from                      cross the interval
      for each          This means that
crosses interval        for each
   Here, we call that the sequence
crosses an interval         with                     if
                                                                      and
there is no truncation in the algorithm (5.1.32) for
   Without loss of generality, we may assume                   converges:

  It is clear that          and
  By Lemma 5.1.4, there is no truncation for
                         if T is small enough.
  Then, similar to (2.2.24), for large    by Lemmas 5.1.3 and 5.1.4 we
have




where                and
  By Lemma 5.1.6, for large     and small T we have




  By Lemma 5.1.4                                            Noticing that
                    and                       by definition of crossing we
see that for small enough T,
Application to Signal Processing                                           237

   This implies that



   Letting             in (5.1.57), we find that




which contradicts (5.1.58). The contradiction shows that

                                                   a.s.

Thus, starting from the algorithm (5.1.32) suffers from no truncation.
  If                did not converge as           then
                       and             would cross a nonempty interval
 infinitely often. But this leads to a contradiction as shown above. There-
fore,          converges as
    If               were not zero, then there would exist a convergent
subsequence                           Replacing           in (5.1.56) by   from
(5.1.57) it follows that



Since         converges, the left-hand side of (5.1.59) tends to zero,
which makes (5.1.59) a contradictory inequality. Thus, we have proved
              a.s.
  Since                      from (5.1.40) it follows that




   By (5.1.38) and the fact that                      we finally conclude that




   The difficulty of applying the algorithm (5.1.32) consists in that the
second moment           of the noise may not be available. Identification
of channel coefficients without using          will be discussed in Sec-
tion 5.3, by using the principal component analysis to be described in
the next section.
238             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

5.2.          Principal Component Analysis
  The principal component analysis (PCA) is one of the basic methods
used in feature extraction, signal processing and other areas. Roughly
speaking, PCA gives recursive algorithms for finding eigenvectors of a
symmetric matrix A based on the noisy observations on A.
  Let       be a sequence of observed         symmetric matrices, and
                The problem is to find eigenvectors of A, in particular,
the one corresponding to the maximal eigenvalue.
   Define




with initial value      being a nonzero unit vector.          serves as an
estimate for unit eigenvector of A.
   If              then     is reset to a different vector with norm equal
to 1.
  Assume                       have been defined as estimates for unit
eigenvectors of A. Denote                                        which is
an               where



where          denotes the pseudo-inverse of      Since for large
is a full-rank       matrix,



     Define




if               with
     If                 we redefine an     with                such that


  Define the estimate      for the eigenvalue      corresponding to the
eigenvector whose estimate at time is        by the following recursion.
Application to Signal Processing                                       239

  Take an increasingly diverging to infinity sequence
and define     by the SA algorithm with expanding truncations:




where



  We will use the following conditions:

A5.2.1                             and

A5.2.2                     are symmetric, and

A5.2.3                        and




where           is given by (1.3.2).
 Examples for which (5.2.8) is satisfied are given in Chapters 1 and 2.
We now give one more example.
Example 5.2.1 Assume                is stationary and ergodic,

       If         then       satisfies (5.2.8). Set                    By

ergodicity, we have                 a.s. By a partial summation it follows

that



which implies (5.2.8).
  Let       be the unit eigenvector of A corresponding to eigenvalue
              where      may not be different.
240         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Theorem 5.2.1 Assume A5.2.1 and A5.2.2 hold.        Then     given by
(5.2.1)–(5.2.6) converges at those samples     for which A5.2.3 holds,
                  and the limits of     coincide with
Let     denote the limit of    as           Then
   Proof. Consider those for which A5.2.3 holds. We first prove con-
vergence of       Note that             may happen only for a finite
number of steps because           as           and               By
boundedness of        we expand    into the power series of




where




  Further, we rewrite (5.2.9) as




where
Application to Signal Processing                                       241

  Denote


  From (5.2.10) and the boundedness of           and       it is seen that
           as              Therefore, in order to show that       satisfies
A2.2.3 it suffices to show




for any convergent subsequence
   By boundedness of       and            it is clear that



where c is a constant for a fixed sample. For any            there is a
such that

Consequently, we have




  Expressing the first part of       as




we find that




This is because (5.2.8) is applied for the first term on the right-hand
side of (5.2.16), while for the other two terms we have used (5.2.15),
                   and the boundedness of                 and
   Similar treatment can also be applied to the second part of    Thus,
we have verified (5.2.13), and A2.2.3 too.
242            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  Denote by S the unit sphere in              Then     defined by (5.2.2)
evolves on S.
  Define


  The root set of      on S is



  Defining                      we find for




   Thus, Condition A2.2.2(S) introduced in Remark 2.2.6 is satisfied.
Since        is bounded, no truncation is needed. Then, by Remark
2.2.6 we conclude that    converges to one of     say
   Denote


Inductively, we now assume



  We then have



Since                and                      from (5.2.21) and (5.2.5) it
follows that               and by (5.2.6)



  We now proceed to show that       converges to one of unit eigenvectors
contained in
  From (5.2.5) we see that the last term in the recursion
Application to Signal Processing                                          243

tends to zero as               So, by (5.2.22) we need to reset       with
             and                   at most for a finite number of times.
   Replacing         by             in (5.2.9)–(5.2.11), we again arrive at
(5.2.11) for     Precisely,




where




and


  By noticing

and using (5.2.22), (5.2.23) can be rewritten as




where             as
  Since       tends to an eigenvector of A, from (5.2.11) it follows that




where

Since      converges, from (5.2.13) and                 it follows that
244            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Inductively, assume that


with           satisfying (5.2.27), i.e.,




Noticing that                         for any matrix V, we have




by (5.2.28).
  Since                                       by (5.2.24), denoting by
the term                                    we have




for any convergent subsequence
   Denoting

from (5.2.26) we see




By (5.2.8) and (5.2.30), similar to (5.2.18)–(5.2.20), by Remark 2.2.6
      converges to an unit eigenvector of                From (5.2.5) it
is seen that     converges since          and                Then from
(5.2.6) it follows that    itself converges as
Thus, we have
Application to Signal Processing                                          245

  From (5.2.5) it follows that



which implies that                            and consequently,


  Since the limit of                     is an unit eigenvector of
               we have


  By (5.2.33) it is clear that     can be expressed as a linear combi-
nation of eigenvectors             Consequently,
which incorporating with (5.2.34) implies that


   This means that       is an eigenvector of A, and     is different from
             by (5.2.33).
   Thus, we have shown (5.2.21) for          To complete the induction it
remains to show (5.2.28) for
   As have just shown,
tends to zero as            from (5.2.31) we have



where          satisfies (5.2.29) with         replaced by           by taking
notice of that (5.2.30) is fulfilled for whole sequence      because which
has been shown to be convergent.
  Elementary manipulation leads to
246          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

This expression incorporating with (5.2.35) proves (5.2.28) for
  Thus, we have proved that                       given by (5.2.1)–(5.2.6)
converge to different unit eigenvectors of A, respectively.
  To complete the proof of the theorem it remains to show
  Rewrite the untruncated version of (5.2.7) as follows




We have just proved that                             Then by (5.2.8) and
noticing the fact that      converges and                  we see that



satisfies A2.2.3.
   The regression function in (5.2.36) is linear:



  Applying Theorem 2.2.1 leads to

Remark 5.2.1 If in (5.2.1) and (5.2.3)       is replaced by       Theo-
rem 5.2.1 remains valid. In this case   given by (5.2.18) should change
to                   and correspondingly       changes to          As a
result, the limit of                  changes to the opposite sign, from
   to

5.3.     Recursive Blind Identification by PCA
   As mentioned in Section 5.1, the algorithm (5.1.32) for identifying
channel coefficients uses the second moment                 of the obser-
vation noise. This causes difficulty in possible applications, because
             may not be available.
   We continue to consider the problem stated in Section 5.1 with nota-
tions introduced there. In particular, (5.1.1)–(5.1.12), and (5.1.31) will
be used without explanation.
   In stead of (5.1.32) we now consider the following normalized SA
algorithm:
Application to Signal Processing                                          247

Comparing (5.3.1) and (5.3.2) with (5.2.1) and (5.2.2), we find that
the channel parameter identification algorithm coincides with the PCA
algorithm with                        By Remark 5.2.1, Theorem 5.2.1 can
be applied to (5.3.1) and (5.3.2) if conditions A5.2.1, A5.2.2, and A5.2.3
hold.
   The following conditions will be used.

A5.3.1 The input      is a              sequence, i.e., there exist a con-
stant      and a function                    such that for any




where
A5.3.2 There exists a distribution function         over           such that




where        denotes the Borel             in           and


A5.3.3 The (2L + 1) × (2L + 1)-matrix                    is nondegenerate,
where
A5.3.4 The signal      is independent of          and
a.s., where    is a random variable with

A5.3.5 All components of                                      of        are
mutually independent with                                              and
                          and        is bounded                       where
 is a constant.

A5.3.6                       have no common root.

A5.3.7                                                              and




  For Theorem 5.1.1,        is assumed to be a sequence of mutually
independent random variables (Condition A5.1.6), while in A5.3.1 the
independence is weakened to a         property, but the distribution of
248         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

                is additionally required to be convergent. Although there
is no requirement on distribution of          in Theorem 5.1.1, we notice
that (5.1.30) is satisfied if                are identically distributed.
   In the sequel,        denotes the                identity matrix.
   Define                       with




and

  In what follows     denotes the Kronecker product.
Theorem 5.3.1 Assume A5.3.1–A5.3.7 hold. Then



where C is a                    -matrix and Q is given in A5.3.3, and
for     given by (5.3.1) and (5.3.2),


where J denotes the set of unit eigenvectors of C.
Proof.    By the definition of    we have



  Since
Application to Signal Processing                                     249

and                                               by A5.3.2, (5.3.3) im-
mediately follows.
   From the definition (5.1.31) for   by A5.3.5 it is clear that
is a                      -identity matrix multiplied by             with
               Then by A5.3.4 and A5.3.5




Identifying       inTheorem 5.2.1 to             we find that Theorem
5.2.1 can be applied to the present algorithm, if we can show (5.2.8),
which, in the present case, is expressed as




where         is given by (1.3.2), and B is given by (5.3.6).
  Notice, by the notation introduced by (5.1.33),


  Since




                                                                     and
                  by the convergence theorem for martingale difference
sequences, for (5.3.7) it suffices to show




    Identifying      and             in Lemma 2.5.2 to
and             respectively, we find that conditions required there are
satisfied. Then (5.3.8) follows from Lemma 2.5.2, and hence (5.3.7) is
fulfilled.
250          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  By Theorem 5.2.1         given by (5.3.1) and (5.3.2) converges to an
unit eigenvector of B, which clearly is an eigenvector of C.
Lemma 5.3.1          is the unique up to a scalar multiple nonzero vector
simultaneously satisfying


Proof. Since it is known that    satisfies (5.3.9), it suffices to prove the
uniqueness.
   As in the proof of Lemma 5.1.1, assume                                  is
also a solution to (5.3.9). Then, along the lines of the proof of Lemma
5.1.1, we obtain the analogue of (5.1.16), which implies (5.1.29):


where                is given by (5.1.28) while        by (5.1.16).
  By A5.3.3                                           which is nondegener-
ate. Then we have                The rest of proof for uniqueness coincides
with that given in Lemma 5.1.1.
   By Lemma 5.3.1 zero is an eigenvalue of C with multiplicity one and
the corresponding eigenvector is                       Theorem 5.3.1 guar-
antees that the estimate        approaches to J, but it is not clear if
tends to the direction of
   Let                                          be all different eigenvalues
of C. J is composed of disconnected sets                                 and
                            where                                  Note that
the limit points of       are in a connected set, so         converges to a
   for some Let                                     We want to prove that
                    a.s. or              This is the conclusion of Theorem
5.3.2, which is essentially based on the following lemma, proved in [9].
Lemma 5.3.2 Let          be a family of nondecreasing                   and
         be a martingale difference sequence with


Let           be an adapted random sequence and      be a real sequence
such that                       and            Suppose that on
the following conditions 1, 2 and 3 hold.
Application to Signal Processing                                        251

  2)       can be decomposed into two adapted sequences                and
                         such that




  3)                       coincides with an               random variable
for some
   Then
Theorem 5.3.2 Assume A5.3.1–A5.3.7 hold. Then                    defined by
(5.3.1) and (5.3.2) converges to        up-to a constant multiple:



where      equals either
   Proof. Assume the contrary:                  for some
Since C is a symmetric matrix,                    for           where and
hereafter a possible set with zero probability in    is ignored. The proof
is completed by four steps.
   Step 1. We first explicitly express
    Expanding        defined by (5.3.2) to the power series of    we derive




where




Noting              and                 we derive




and
252          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




where                     is defined by (5.1.4),       is given by (5.1.10)
with      replaced by       the observation noise, and          denotes the
estimate for    at time
   By (5.3.4) and (5.3.5), there exists             a.s. such that
                                                a.s.
   For any integers    and define                                 and




Note that for



and by the convergence of      from (5.3.12) it follows that
                              where is a constant for all       in      By
(5.3.7) we then have




as           where and hereafter T should not be confused with the
superscript T for transpose.
   Choose large enough     and sufficiently small T such that
               Let
                         and                             It then follows
that for
  In
Application to Signal Processing                                        253




for sufficiently large.
   Consequently, for            with fixed



and hence



Define



From (5.3.15) it follows that




Tending           in (5.3.21) and replacing   by   in the resulting equal-
ity, by (5.3.19) we have




Thus, we have expressed      in two ways: (5.3.21) shows that      is
measurable, while (5.3.22) is in the form required in 5.3.2, where
254         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  Step 2. In order to show that the summand in (5.3.22) can be
expressed as that required in Lemma 5.3.2 we first show that the series




is convergent on    By (5.3.14) and (5.3.7) it suffices to show
is convergent on
   Define




and



Clearly,  is measurable with respect to    and                  Then
by the convergence theorem for martingale difference sequences,




  By (5.3.16) it follows that
Application to Signal Processing                                      255




The first term on the right-hand side of the last equality of (5.3.29) can
be expressed in the following form:




where the last term equals




Combining (5.3.30) and (5.3.31) we derive that the first term on the
right-hand side of the last equality of (5.3.29) is
256         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

By A5.3.4, A5.3.5, and A5.3.7 it is clear that
                 Hence replacing           by    in (5.3.29) results in
producing an additional term of magnitude          Thus, by (5.3.24)–
(5.3.26) we can rewrite (5.3.29) as




where                   and is               By (5.3.28) and A5.3.7
the series (5.3.33) is convergent, and hence  given by (5.3.23) is a
convergent series.
   Step 3. We now define sequences corresponding to        and    in
Lemma 5.3.2.
   Let             We have




where




  Denote
Application to Signal Processing                                   257

   Then            and          are adapted sequences,        is a mar-
tingale difference sequence, and is written in the form of Lemma 5.3.2:

  It remains to verify (5.3.10) and (5.3.11).
  From (5.3.23) and (5.3.33) it follows that there is a constant
such that                          Then for       noticing




and




we have




  By A5.3.4 and A5.3.5 it follows that




As in Step 4 it will be shown that
258         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

From this it follows that




Then from the following inequality


by (5.3.34) and (5.3.36) it follows that


Therefore all conditions required in Lemma 5.3.2 are met, and we con-
clude                  Since                 it follows that
and      must converge to        a.s.
  Step 4. To complete the proof we have to show (5.3.35).
  Proof. If (5.3.35) were not true, then there would exist a subsequence
     such that



For notational simplicity, let us denote the subsequence    still by
  Since by A5.3.5                        for        if      and for any
        but       if        we then have




which incorporating with (5.3.37) implies that


and

  Noticing that              and                           from (5.3.38)
and (5.3.24) it follows that
Application to Signal Processing                             259

On the other hand, we have




and hence,




where         denotes the estimate provided by   for   at time
  Since for any


we have




Hence (5.3.40) implies that
260         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and




By A5.3.4 the left-hand side of (5.3.41) equals




Since         it follows that for any




The left side of (5.3.42) equals




Thus (5.3.42) implies that for any
Application to Signal Processing                                  261

   Noticing                                     from (5.3.25) we have




Then by A5.3.5, (5.3.39) implies that for any




Notice that




and
262          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Then by A5.3.5, from (5.3.45)–(5.3.47) it follows that




and hence for any




and




Notice that (5.3.49) means that




However, the above expression equals




Therefore,
Application to Signal Processing                                        263

   In the sequel, it will be shown that (5.3.43), (5.3.44), (5.3.48), and
(5.3.50)) imply that                 which contradicts with
This means that the converse assumption (5.3.37) is not true.
   For any           since                are coprime, where              is
given in (5.1.6), there exist polynomials           such that



Let     and   be the degrees of       and       respectively. Set
                     Introduce the q-dimensional vector      and q × q
square matrices W and A as follows:




Note that                          where                      and
                                         Then (5.3.43), (5.3.44), (5.3.48),
and (5.3.50) can be written in the following compact form:



To see this, note that for any fixed and on the left hand sides of
(5.3.48) and (5.3.50) there are 2L different sums when varies from 0 to
L – 1 and      replace roles each other. These together with (5.3.43) and
(5.3.44) give us 2L + 1 sums, and each of them tends to zero. Explicitly
expressing (5.3.52), we find that there are 2L +1 nonzero rows and each
row corresponds to one of the relationships in (5.3.43), (5.3.44), (5.3.48),
and (5.3.50).
   Since we have put enough zeros in the definition of      after multiply-
ing the left hand side of (5.3.52) by
                has only shifted nonzero elements in

  From (5.3.52) it follows that for any                       and        in
(5.3.51)
264           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




From (5.3.53) it follows that




Note that for any polynomial     of degree                                  if
the last elements of are zeros. From (5.3.54) it follows that




Denoting


from (5.3.55) we find that



By the definition of    the first             elements of are zeros, i.e.,
                                     This means that the last
elements of       are zeros, i.e.,




On the other hand,




By (5.3.56), from (5.3.57) and (5.3.58) it is seen that             i.e.,
Application to Signal Processing                                        265

From (5.3.53) it then follows that



i.e.,                                 But this is impossible, because
are unit vectors. Consequently, (5.3.37) is impossible and this completes
the proof of Theorem 5.3.2.

5.4.      Constrained Adaptive Filtering
   We now apply SA methods to adaptive filtering, which is an important
topic in signal processing. We consider the constrained problem, while
the unconstrained problem is only a special case of the constrained one
as to be explained.
  Let        and       be two observed sequences, where      and    are
                           respectively. Assume          is stationary and
ergodic with



which, however, is unknown.
  It is required to design the optimal weighting                 X, which
minimizes


under constraint


where C and are                             matrices, respectively. In the
case where C = 0, the problem is reduced to the unconstrained one.
  It is clear that (5.4.3) is solvable with respect to X if and only if
             and in this case the solution to (5.4.3) is


where Z is any
  For notational simplicity, denote


Let L(C) denote the vector space spanned by the columns of matrix C,
and let the columns of matrix     be an orthogonally normalized basis
266          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

of L(C). Then there is a full-rank decomposition
Noticing                         we have                    Let          be
an orthogonal matrix. Then


and hence


From this it follows that




and hence                        a.s. This implies that



   Let us express the optimal X minimizing (5.4.2) via                  By
(5.4.8) substituting (5.4.4) into (5.4.2) leads to




  On the right-hand side of (5.4.9) only the first term, which is quadratic,
depends on Z. Therefore, the optimal          should be the solution of


i.e.,


where       is any               satisfying
Application to Signal Processing                                        267

     Combining (5.4.4) with (5.4.11), we find that


Using the ergodic property of           we may replace       and     by
their sample averages to obtain the estimate for          And, the esti-
mate can be updated by using new observations. However, to update
the estimate, it involves taking the pseudo-inverse of the updated esti-
mate for      which may be of high dimension. This will slow down the
computation speed. Instead, we now use an SA algorithm to approach

     By (5.4.8), we can rewrite (5.4.10) as


or


     We now face to the standard root-seeking problem for a linear function


As before, let                                 and                     The
following algorithm is used to estimate     given by (5.4.12), which in
the notations used in previous chapters is the root set J for the linear
function       given by (5.4.14):




with initial value      such that             and

Theorem 5.4.1 Assume that                is stationary and ergodic with sec-
ond moment given by (5.4.1) and that
Then, after a finite number of steps, say            (5.4.16) has no more
truncations, i.e.,
268             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

and



i.e.,



where          given by (5.4.12) solves the stated constrained optimization
problem.

   Proof. We first note that (5.4.16) is a matrix recursion. However,
if in lieu of   we consider        with being an arbitrary constant
vector, then we have a conventional vector recursion, and by (5.4.9)
                              may serve as a Lyapunov function for the
corresponding regression function obtained from (5.4.14):


   Therefore, in order to apply Theorem 2.2.1, we need only to verify
the noise condition.
   Denoting




then from (5.4.16) we have




     We now show that for a fixed sample if                  then




and there is a constant             such that



if      is sufficiently large and T is small enough, where


  We need the following fact, which is an extension of Example 5.2.1.
Assume the process       is stationary and ergodic with
Application to Signal Processing                                    269

and       is a convergent sequence of random matrices
a.s. Then




  Let                       Then by ergodicity of both      and

we have




because the second term on the right-hand side of the equality can be
estimated as follows




which tends to zero as           and then                  By a partial
summation and by using (5.4.25) we have




which implies (5.4.24) by (5.4.25).
   Let us consider the following algorithm starting from   without trun-
cation:




Set
                                              and
270         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




Then from (5.4.26) it follows that




  Denote


and



  Since        is stationary and ergodic,                   a.s., and

                           Then by a partial summation, we have
Application to Signal Processing                                          271

Notice that                            a.s. by ergodicity. Then for large
                           and from (5.4.29) it follows that




where (5.4.24) is used incorporating with the fact that
        and          is stationary with E
   From (5.4.27)–(5.4.30) by convergence of          it follows that



for large and small T, where           and   are constants independent of
and
   Consequently, in the case                       i.e.,                    in
(5.4.16),             will never reach the truncation bound          for
                                if is large enough and T is small enough.
Then       coincides with                                        This verifies
(5.4.22), while (5.4.23) follows from (5.4.16) because for a fixed
and          are bounded, and
are also bounded by (5.4.31) and the convergence                            In
the case                       i.e.,          ‚            for some         is
bounded, and hence (5.4.22) and (5.4.23) are also satisfied.
   We are now in a position to verify the noise condition required in
Theorem 2.2.1 for        given by (5.4.20), i.e., we want to show that
for any convergent subsequence
272          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  By (5.4.24)




so for (5.4.32) it suffices to show




  Again, by (5.4.24) and also by (5.4.23)




which implies (5.4.33).
   By Theorem 2.2.1, there is     such that for       is defined by
(5.4.17) and    converges to the root set J for   given by (5.4.14).
This completes the proof for the theorem.
Remark 5.4.1 For the unconstrained problem         and C = 0, the
algorithm (5.4.16) becomes
Application to Signal Processing                                         273

Further, if           then                   and Theorem 5.4.1 asserts

                                              a.s.,

provided            is stationary, ergodic, and bounded.

5.5.       Adaptive Filtering by Sign Algorithms
  We now consider the unconstrained problem mentioned in Section 5.4,
but we restrict ourselves to discuss the vector case, i.e., instead of matrix
signal           we now consider          where       is              and
is one-dimensional. However, instead of quadratic criterion (5.4.2) we
now minimize the     cost


where is an                 vector.
  Note that the gradient of      is given by



where




  The problem is to find           which minimizes         or to approach the
root set J of



As before, let         be an increasing sequence of positive real numbers
such that               as           Define the algorithm as follows
274         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS


Theorem 5.5.1     Assume          is stationary and ergodic with




Then
                                             a.s.,

where       is defined by (5.5.4) and (5.5.5) with an arbitrary initial
value. In addition, in a finite number of steps truncations cease to exist
in (5.5.4).
Proof. Define




and


   Let   be a countable set that is dense in     let         and       be
two sequences of positive real numbers such that            and
as          and denote




and




where         and is an integer.
   The summands of (5.5.9)–(5.5.11) are stationary with finite expecta-
tions for any         any integer any       and any      and then the
ergodic theorem yields that
Application to Signal Processing                                        275




and



Therefore, there is an           such that        and for each
the convergence for (5.5.12)–(5.5.14) takes place for any               any
integer any       and any
   Let us fix an
   We first show that for any fixed


if    is large enough (say, for      ), and in addition,


where c is a constant which may depend on but is independent of
  In what follows                 always denote constants that may
depend on     but are independent of    By (5.4.24) we have for any




There are two cases to be considered. If                   then for large
enough,                    and (5.5.15) holds. If     is bounded, then the
truncations cease to exist after a finite number of steps. So, (5.5.15) also
holds if is sufficiently large. Then (5.5.16) follows immediately from
(5.5.15) and (5.5.17).
   Let us define


where        is given by (5.5.2). Then (5.5.15) can be represented as


     Let    be a convergent subsequence of                          and let
           be such that                        We now show that
276         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




   Let                    By (5.5.16)                  or           for
some integer
   We examine that the terms on the right-hand side of (5.5.20) satisfy
(5.5.19) .
   For the first term on the right-hand side of (5.5.20) we have




where             and are deterministic for a fixed and the expecta-
tion is taken with respect to  and
   Since (5.5.6),              a.s., applying the dominated convergence
theorem yields




  Then from (5.5.21) it follows that
Application to Signal Processing                                       277

  Similarly, for the second term on the right-hand side of (5.5.20) we
have




since                  a.s.
   For the third term on the right-hand side of (5.5.20) by (5.4.24),
(5.5.10), and (5.5.13) we have




since
   Finally, for the last term in (5.5.20), by (5.5.14) and (5.4.24) we have




where the last convergence follows from the fact that
     a.s. as           since          and
a.s.
   Combining (5.5.23)–(5.5.26) yields that
278          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Since the left-hand side of (5.5.27) is free of  tending to infinity in
(5.5.27) leads to (5.5.19). Then the conclusion of the theorem follows
from Theorem 2.2.1 by noticing that as          in A2.2.2 one may take


5.6.      Asynchronous Stochastic Approximation
   When dealing with large interconnected systems, it is natural to con-
sider the distributed, asynchronous SA algorithms. For example, in a
communication network with servers, each server has to allocate audio
and video bandwidths in an appropriate portion in order to minimize
the average time         of queueing delay. Denote by    the bandwidth
ratio for the     server, and                 Assume the average delay
time        depends on only and            is differentiable,
Then, to minimize          is equivalent to find the root of        Assume
the time, denoted by        spent on transmitting data from the      server
to the     server is not negligible. Then at the     server for the
iteration we can observe       or      only at                       where
   denotes the total time spent until completion of iterations for the
    server. This is a typical problem solved by asynchronous SA. Simi-
lar problem arises also from job-scheduling for computers in a computer
network.
   We now precisely define the problem and the algorithm.
   At time denote by                       the estimate for the unknown
root     of                           Components     of are observed
by different processors, and the communication delays   from the
processor to the     processor at time are taken into account. The
observation of the      processor is carried only at
i.e.,


where       is the observation noise.
   In contrast to the synchronous case, the update steps now are different
for different processors, so it is unreasonable to use the same step size
for all processors in an asynchronous environment. At time the step
size used in the      processor is known and is denoted by
   We will still use the expanding truncation technique, but we are un-
able to simultaneously change estimates in different processors when the
estimate exceeds the truncation bound because of the communication
delay.
   Assume all processors start at the same given initial value
               and           for all                The observation       at
Application to Signal Processing                                         279

the    processor is           and   is updated to    by the rule given
below. Because of the communication delay the estimate produced by
the     processor cannot reach the     processor for the initial steps:
          By agreement we will take      to serve as        whenever

   At the     processor,            there are two sequences         and
      are recursively generated, where      is the estimate for the
component of       at time and      is connected with the number of
truncations up-to and including time at the          processor. For the
    processor at time the newest information about other processors
is                                    In all algorithms discussed until
now all components of           are observed at the same point         at time
    and this makes updating        to       meaningful. In the present case,
although we are unable to make all processors to observe                at the
same points at each time, it is still desirable to require all processors
observe          at points located as close as possible. Presumably, this
would make estimate updating reasonable. For this, by noticing that
the estimate        gradually changes after a truncation, the ideal is to keep
all                       are equal, but for this the best we can do is to
equalize       with other
    Keeping this idea in mind, we now define the algorithm and the ob-
servations for the        processor,
    Let                        be a fixed point from where the algorithm
restarts after a truncation.
    i) If there exists with                then reset    to equal the biggest
one among           and pull       back to the fixed point       although
may not exceed the truncation bound. Precisely, in this case define




and observe


  ii) If              for any      then observe      at
280          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




i.e.,


For both cases i) and ii),         and    are updated as follows:




where          is the step size at time and may be random, and
          is a sequence of positive numbers increasingly diverging to in-
finity.
   Let us list conditions to be used.
 A5.6.1       is locally Lipschitz continuous.

A5.6.2                                                                 and
there exist two positive constants           such that



A5.6.3 There is a twice continuously differentiable function (not neces-
sarily being nonnegative)                such that



and                           is nowhere dense, where



                             and         denotes the gradient of
A5.6.4 For any convergent subsequence                any            and any
Application to Signal Processing                                         281


where
    and
A5.6.5




Note that (5.6.10) holds if        is bounded, since                    Note
also that A5.6.3 holds if                                  and

Theorem 5.6.1      Let                 be given by (5.6.1)–(5.6.6) with
initial value                    Assume A5.6.1–A5.6.5 hold, and there
is a constant   such that                             and
   where      is given in A5.6.3. Then



where

   The proof of the theorem is separated into lemmas. From now on we
always assume that A5.6.1–A5.6.5 hold.
   We first introduce an auxiliary sequence         and its associated ob-
servation noise          It will be shown that      differs from        only
by a finite number of steps. Therefore, for convergence of       it suffices
to prove convergence of
   Let                                                        be a sample
path generated by the algorithm (5.6.1)–(5.6.6), where is the one after
resetting according to (5.6.2). Let                       where           is
defined in A5.6.4. Assume                      By the resetting rule given
in i), for any after resetting we have                 For               we
have                                 and by the definition of




In the      processor we take        and            to replace    and
respectively, and define                    for those
Further, define                            and              for
282         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

                Then we obtain new sequences associated with
By (5.6.1)–(5.6.6), if            then there exists a with
                    so        and


since          and                                  for
Because during the period                                 there is no truncation
for                   the sequences                              are recursively
updated as follows:




where
  Define delays        for         as follows


                    is available to the         processor at time
Lemma 5.6.1 For any                         any convergent subsequence
and any                      satisfies the following condition




where
   Proof. Since    equals either      or        which is available at time    it
is seen that


For                           by definition of      we have
which is certainly available to the     processor. Therefore,



We rewrite              as                        By the definition of       and
paying attention to (5.6.17) we see
Application to Signal Processing                                       283

  We now show that (5.6.18) is true for all                           For
                          there is no truncation for the        processor,
and hence                 by the resetting rule i). If
for some        then by (5.6.16) and the definition of      it follows that


which implies (5.6.18).
   If           for some then as explained above for the    processor
at time the latest information about the estimate produced by the
processor is    In other words,



However, by definition of                                    which yields
                            This again implies (5.6.18).
  In summary, we have


This means that for      there is no truncation at any time equal to
       and the observation      is carried out at
i.e.,



For any     any convergent subsequence            and any               we
have




By (5.6.11),                                      Then from A5.6.2 and

A5.6.5 it follows that                         and hence the second term
284         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

on the right-hand side of (5.6.21) tends to zero as              Further,
from the definition of    there is such that               Hence the first
term on the right-hand side of (5.6.21) is of order o(T) by A5.6.4. Con-
sequently, from A5.6.2, A5.6.4 and A5.6.5 it follows that        satisfies
(5.6.15).

Lemma 5.6.2 Let            be generated by (5.6.12)–(5.6.14). For any con-
vergent subsequence          of       if                       is bounded,
then there are                  and      such that



where     is given in (5.6.14).

  Proof. Let                             and                where




where is given in A5.6.2.
  By (5.6.15) for convergent subsequence          there exists           such
that for any         and




Choose            such that            For any               let



Then for any



If                        then                   if      is sufficiently large,
i.e., no truncation occurs after      and hence for



If                     then there exists     such that                     for
any            From (5.6.24) it follows that



Therefore, in both cases
Application to Signal Processing                                         285

   If                 then for sufficiently large




i.e.,

This contradicts the definition of       Therefore,

Lemma 5.6.3 Let            be given by (5.6.12)–(5.6.14). For any
          with                      the following assertions take place:
   i) In the case,                   cannot cross          infinitely many
times keeping                         bounded, where       are the starting
points of crossing;
   ii) In the case                 cannot converge to    keeping
           bounded.

   Proof. i) Since        is bounded, there exists a convergent subse-
quence, which is still denoted by         for notational simplicity,
                By the boundedness of                        and (5.6.22)
for sufficiently large there is no truncation between      and
and hence




where                                               By (5.6.20), (5.6.22) and
               it follows that
286           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

By A5.6.2 and A5.6.3 we have




Then by A5.6.1



where      is the Lipschitz coefficient of in                        and
                             By the boundedness of
and the fact that there is no truncation between       and      it follows
that




Without loss of generality, we may assume             is a convergent se-
quence. Then by A5.6.3 and A5.6.5



Therefore,




where


Since                is continuous for fixed   by A5.6.4 there exists a
        for   such that
Application to Signal Processing                                            287

Thus, for sufficiently small T and sufficiently large       we have


  On the other hand, by Lemma 5.6.2



Thus,                               for sufficiently small T, and



This contradicts (5.6.31), and i) is proved.
  ii) If     is bounded, then there is a convergent subsequence
   Then the assertion can be deduced by a similar way as that for i).
Lemma 5.6.4 Under the conditions of Theorem 5.6.1



where       is given by (5.6.14).
Proof. If                   then there exists a sequence              such that
                  From (5.6.12)–(5.6.14) we have
   Choose a small positive constant such that
           and                                      Let    be a connected
set containing    and included in the set
and let     be a connected set containing         and included in the set
                                  Clearly,            and      and    are
bounded.
   Since       diverges to infinity, there exists    such that
for         Noting that there exists i such that



and                   we can define                                  and
                                 for
   Since            there is a convergent subsequence in        also de-
noted by         Let be a limit point of
   By the definition of                        is bounded. But
             crosses                        infinitely many times, and it
is impossible by Lemma 5.6.3. Thus,

  Proof of Theorem 5.6.1
288           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     By Lemma 5.6.4       is bounded. Let



If          then by Lemma 5.6.3, we have                  i.e.,
               If         then there are       and   such that
      and                       since         is nowhere dense. But by
Lemma 5.6.3 this is impossible. Therefore,
  We now show                      If there is a convergent subsequence
                and             then (5.6.26)–(5.6.30) still hold. Hence,
                               This is a contradiction to
      Consequently,            i.e.,
  Since                and                    the truncations occur only
for finitely many times. Therefore,    and    differ from each other only
for a finite number of So,

5.7.       Notes and References
   For blind identification with “block” algorithms we refer to [71, 96].
Recursive blind channel identification algorithms appear to be new. Sec-
tion 5.1 is written on the basis of the joint work “H. F. Chen, X. R. Cao,
and J. Zhu, Convergence of stochastic approximation based algorithms
for blind channel identification”. Principal component analysis is ap-
plied in different areas (see, e.g., [36, 79]). The results presented in
Section 5.2 are the improved version of those given in [101]. The princi-
pal component analysis is applied to solve the blind identification prob-
lem in Section 5.3, which is based on the recent work “H. T. Fang and
H. F. Chen, Blind channel identification based on noisy observation by
stochastic approximation method”. The proof of Lemma 5.3.2 is given
in [9].
   For adaptive filter we refer to [57]. The results presented in Sec-
tion 5.4 are stronger than those given in [11, 28]. The sign algorithms
are dealt with in [42], but conditions used in Section 5.5 are consider-
ably weaker than those in [42]. Section 5.5 is based on the recent work
“H. F. Chen and G. Yin, Asymptotic properties of sign algorithms for
adaptive filtering”.
   Asynchronous stochastic approximation was considered in [9, 88, 89,
99]. Section 5.6 is written on the basis of [50].
Chapter 6

APPLICATION TO SYSTEMS
AND CONTROL




   Assume a control system depends on a parameter and the system
operation reaches its ideal status when the parameter equals some
Since is unknown, we have to estimate it during the operation of the
system, which, therefore, can work only on the estimate          of      In
other words, the real system is not under the ideal parameter          and
the problem is to on-line estimate     and to make the system asymptot-
ically operating in the ideal status. It is clear that this kind of system
parameter identification can be dealt with by SA methods.

   Adaptive control for linear stochastic systems is a typical example
for the situation described above. If the system coefficients are known,
then the optimal stochastic control may be a feedback control of the
system state. The corresponding feedback gain can be viewed as the
ideal parameter which depends on the system coefficients. In the setup
of adaptive control, system coefficients are unknown, and hence        is
unknown. The problem is to estimate and to prove that the resulting
adaptive control system by using the estimate     as the feedback gain is
asymptotically optimal as tends to infinity.

   In Section 6.1 the ideal parameter is identified by SA methods for
systems in a general setting, and the results are applied to solving the
adaptive quadratic control problem. The adaptive stabilization problem
is solved for stochastic systems in Section 6.2, while the adaptive exact
pole assignment is discussed in Section 6.3. An adaptive regulation
problem for nonlinear and nonparametric systems is considered is Section
6.4.

                                   289
290           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

6.1.      Application to Identification and Adaptive
          Control
   Consider the following linear stochastic system depending on param-
eter


where                                                and
     are unknown.
  The ideal parameter       for System (6.1.1) is a root of an unknown
function



The system actually operates with      equal to some estimate     for   ,
i.e., the real system is as follows:


For the notational simplicity, we suppress the dependence         on the
state      and rewrite (6.1.3) as


The observation at time         is


where       is a noise process.
  From (6.1.5) it is seen that the function     is not directly observed,
but it is connected with          as follows:



where        is generated by (6.1.1).
   Let       be a sequence of positive numbers increasingly diverging to
infinity and let         be a fixed point. Fixing an initial value we
recursively estimate by the SA algorithm with expanding truncations:




  We list conditions that will be used.
Application to Systems and Control                                            291

A6.1.1                            and

A6.1.2 There is a continuously differentiable function
such that




for any               and                                     is nowhere dense,
where J is given by (6.1.2).        Further,     used in     (6.1.8) is such that
          inf     for some          and

A6.1.3 The random sequence               in (6.1.1) satisfies a mixing condition
characterized by




uniformly in        where                           Further,         is such that
sup                   where



A6.1.4 For sufficiently large integer




for any           such that     converges, where            is given by (1.3.2).

     Let                  is stable}, and let    be an open, connected subset
of         with
A6.1.5     and f are connected by (6.1.6) and (6.1.1) for each
  satisfies a local Lipschitz condition on




with                                    for any constants      and    where     is
given in A6.1.3.
292         STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

A6.1.6       and         in (6.1.1) are globally Lipschitz continuous:


where L is a constant.
A6.1.7       given by (6.1.7) is               If      converges for some
  then            where may depend on
Theorem 6.1.1 Assume A6.1.1–A6.1.7 hold. Then


where    is a connected subset of
  Proof. By (6.1.5) we rewrite the observation       in the standard from


where


By Theorem 2.2.2 and Condition A6.1.4, the assertion of the theorem
will immediately follow if we can show that for almost all condition
(2.2.2) is satisfied with            replaced by
  Let                      be expressed as a sum of seven terms:




where
Application to Systems and Control                                      293

where




and                   and                     denote the distribution and
conditional distribution of                given      respectively.
   To prove the theorem it suffices to show that there exists          with
           such that for each             all                        satisfy
(2.2.2) with                respectively identified to
   By definition, for any               there is               such that


where       is independent of
  Let us first show that                       satisfy (2.2.2).
  Solving (6.1.1) yields




By A6.1.3        is bounded. Hence, by (6.1.18)             is bounded and
by A6.1.5                   is also bounded:


where



where      is given in A6.1.5.
  Since            we have
  We now show that          and                  are continuous in     uni-
formly with respect to
  By (6.1.18) and (6.1.20), from (6.1.19) it follows that
294           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

which implies the uniform continuity of       This together with (6.1.13)
yield that                is also uniformly continuous.
   Let     be a countable dense subset of
   Noticing that                 is                  and expressing
as a sum of martingale difference sequences




by (6.1.20) and                  we find that there is     with
such that for each



for any integer     and any           From here by uniform continuity of
                  it follows that for       and for any integer




  Note that




and




  By (6.1.18) (6.1.20) and the Lipschitz condition A6.1.5 for     it follows
that
Application to Systems and Control                                    295




since                         is bounded by the martingale convergence
theorem. It is worth noting that (6.1.23) holds a.s. for any
but without loss of generality (6.1.23) may be assumed to hold for all
        on           with            To see this, we first select
with           such that (6.1.23) holds for any           This is possible
because      is a countable set. Then, we notice that                   is
continuous in uniformly with respect to Thus, we have



  Similarly, we can find             with          such that for
and



  This is because by (6.1.18) and (6.1.20) we have the following estimate:




We now estimate       by the treatment used in Lemma 2.5.2. By ap-
plying the Jordan-Hahn decomposition to the signed measure
296          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

it is seen that there is a Borel set D in the sampling space
such that for any A in the sampling space




and




where               is the mixing coefficient given in A6.1.3. Thus, by
(6.1.27)–(6.1.29) we have
Application to Systems and Control                                   297




By A6.1.5, (6.1.18), (6.1.20), and noticing           we find




whose expectation is finite as explained for (6.1.20). Therefore, on the
right-hand side of (6.1.30) the conditional expectation is bounded with
respect to by the martingale convergence theorem, and the last term is
also bounded with respect to Thus, by (6.1.10) from (6.1.30) it follows
that there is          with           such that




  Let              be fixed.   Assume         is a convergent subsequence

  Define




Write (6.1.4) as
298          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Since             by A6.1.7, by A6.1.5 and A6.1.6 it follows that for




Consequently, we have




where and hereafter         always denotes a constant for fixed   and,
without loss of generality, we assume
  Define                         so that




  Applying the Gronwall inequality to (6.1.33) we obtain the inequality




and hence




Now choose               sufficiently small so that
Application to Systems and Control                                   299

where
  By induction we now show that


for all suitable large   .
  For any fixed                       if   is large enough, since

   Therefore (6.1.36) holds for         since
   Assume (6.1.36) holds for some                              By notic-
ing        from (6.1.34) and (6.1.35) it follows that




   By using (6.1.20) (6.1.37) and the inductive assumption and applying
(6.1.19) to     it follows that




for                where                           and      satisfies the
following equation


By A6.1.7 and (6.1.20) we have


and using (6.1.18), (6.1.37), and the inductive assumption we derive
300             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

This combining with (6.1.38) leads to that there are real numbers
and      such that



for                  From here it follows that




      From the inductive assumption it follows that for



for some large enough integer N. Then by (6.1.12)




Setting




we derive




where (6.1.22), (6.1.24), (6.1.25), (6.1.31), (6.1.39), and (6.1.40) are
used.
   Choose       sufficiently small so that           (6.1.35) holds, and
Application to Systems and Control                                        301

   Since              by A6.1.5 there is     such that

                                   and

for all            From (6.1.41) it then follows that




It can be assumed that         is sufficiently large so that




   Since                                    by (6.1.42) it follows that




                                         and hence there is no truncation at
times                        and



Thus, we have




or equivalently,


which proves (6.1.36).
  Consequently, (6.1.39) is valid for                                     and
hence
302          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  From (6.1.21) and (6.1.13) it is seen that                   is contin-
uous in uniformly with respect to         Therefore, its limit       is a
continuous function. Then by (6.1.36) it follows that




Finally, noticing that A6.1.5 assumes (6.1.6), we conclude that for each
               all                      satisfy (2.2.2) with
respectively replaced by                      The proof of the theorem is
completed.
   We now apply the obtained result to an adaptive control problem.
   Assume that             is the ideal parameter for the system, being
the unique zero of an unknown function            The system in the ideal
condition is described by the equation



where    is the feedback control which is required to minimize




where     and     are symmetric such that          and
   Let                              given by A6.1.3). The control
should be selected in the family U of admissible controls:




where       and    are related by (6.1.44).
  However, since the ideal    is unknown, the real system satisfies the
equation



where    is the estimate of
  Let    be given by (6.1.7) and (6.1.8) with      given by (6.1.5).
Application to Systems and Control                                    303

  In order to give adaptive control we need the expression of the optimal
control when     is known.
Lemma 6.1.1 Suppose that
           is a martingale difference sequence with




    ii)                   where              is controllable and observ-
able, i.e.,                    ··· ,                and
··· ,                 are of full rank.Then in the class of nonnegative
definite matrices there is an unique           satisfying




and



is stable. The optimal control minimizing (6.1.45) is


where


and


  Proof. The existence of an unique solution to (6.1.50) and stability of
F given by (6.1.51) are well-known facts in control theory. We show the
optimality of control given by (6.1.52).
  For notational simplicity , we temporarily suppress the dependence of
                      and        on      and write them as    A, B, and
D, respectively.
  Noticing
304          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




we then have




Since             by the estimate for the weighted sum of martingale
difference sequence from (6.1.55) it follows that




Notice that the last term of (6.1.56) is nonnegative. The conclusions of
the lemma follow from (6.1.56).
   According to (6.1.52), by the certainty-equivalence-principle, we form
the adaptive control


where    is the state in (6.1.47).
  Thus the closed system becomes
Application to Systems and Control                                  305

which has the same structure as (6.1.4). Therefore, under the assump-
tions A6.1.1–A6.1.7 with       replaced by        and with J being a
singleton    by Theorem 6.1.1 it is concluded that


  By continuity and stability of       it is seen that there are   and
        possibly depending on        such that


This yields the boundedness of        and



because


By (6.1.60) it follows that
                                              a.s.

Therefore, the closed system (6.1.58) asymptotically operates under the
ideal parameter and makes the performance index (6.1.45) minimized.

6.2.      Application to Adaptive Stabilization
  Consider the single-input single-output system


where         and      are the system input, output, and noise, respec-
tively, and




where is the backward shift operator,
  The system coefficient


is unknown. The purpose of adaptive stabilization is to design control
so that
306          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

If is known and if        and          are coprime, then for an arbitrary
stable polynomial       of degree           there are unique polynomials
      and      both of order           with            such that



Then the feedback control generated by



leads the system (6.2.1) to



Then, by stability of         (6.2.4) holds if assume




Considering coefficients of      and       as unknowns, and identifying
coefficients of                       for both sides of (6.2.5), we derive
a system of linear algebraic equations with matrix         for unknowns:




The fact that       and       a can be solved from (6.2.5) for any
means that



is nonzero. In other words, the coprimeness of        and       is equiva-
lent to
   In the case is unknown the certainly-equivalency-principle suggests
replacing by its estimate       to derive the adaptive control law. How-
ever, for          may be zero and (6.2.5) may not be solvable with
and        replaced by their estimates.
   Let us estimate by the following algorithm called the weighted least
squares (WLS) estimate, which is convergent for any feedback control
Application to Systems and Control                                        307




where



          and                   for some
   Though       converges a.s., its limit may not be the true If a bounded
sequence         can be found such that the modified estimate




is convergent and




then the control obtained from (6.2.6) with replaced by             solves the
adaptive stabilization problem, i.e., makes (6.2.4) to hold.
   Therefore, the central issue in adaptive stabilization is to find a bound
-ed sequence          such that         given by (6.2.12) is convergent and
(6.2.13) is fulfilled. This gives rise to the following definition.
   Definition. System (6.2.1) is called adaptively stabilizable by the use
of parameter estimate        if there is a bounded sequence          such that
(6.2.13) holds and         given by (6.2.12) is convergent.
   It can be shown that if system (6.2.1) is controllable, i.e.,          and
      are coprime, then it is adaptively stabilizable by the use of the WLS
estimate. It can also be shown that the system is adaptively stabilizable
by use of         if and only if                     where     and F denote
the limits of    and      respectively, which are generated by (6.2.9)–
(6.2.11).
   We now use an SA algorithm to recursively produce          such that
      is convergent and the resulting estimate      by (6.2.12) satisfies
(6.2.13).
308           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

   Let        and    be –dimensional, and let




  As a matter of fact,



where



The root set of      is denoted by                                  where




From algebraic geometry it is known that                               is a
finite set.
  However,      is not directly observed; the real observation is




which can be written as


where



   is generated by (6.2.9)–(6.2.11),     is defined by (6.2.11), and     is
recursively defined by an SA given below.
   Let us take a few real sequences defined as follows:
Application to Systems and Control                                       309

  Let       be l-dimensional with only one nonzero element equal to
either +1 or –1,               Similarly, let      be -dimensional
with only nonzero elements, each of which equals either 1 or – 1,


  The total number of such vectors is




Normalize these vectors and denote the resulting vectors by
in the nondecreasing order of the number of nonzero elements in
  Define                       and              for       Introduce



  Define the recursive algorithm for         as follows:




and      is a fixed vector.
   The algorithm (6.2.23)–(6.2.27) is the RM algorithm with expanding
truncations, but it differs from the algorithm given by (2.1.1)–(2.1.3)
as follows. The algorithm (2.1.1)–(2.1.3) is truncated at the upper side
only, but the present algorithm is truncated not only at the upper side
but also at the lower side:     is allowed neither to diverge to infinity nor
to tend to zero; whenever it reaches the truncation bounds the estimate
    is pulled back to     and       is enlarged to        at the upper side,
while at the lower side     is pulled back to      which will change to the
310           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

next        whenever                    is satisfied. If for successive
resettings of    we have to change to the next one, then we reduce
to

Lemma 6.2.1 Assume the following conditions hold:

A6.2.1                      and

A6.2.2 System (6.2.1) is adaptively stabilizable by use of        generated
by (6.2.9)–(6.2.11), i.e.,

   If          then after a finite number of steps the algorithm (6.2.23)–
(6.2.27) becomes the RM algorithm



        converges and

   Proof. The basic steps of the proof are essentially the same as those for
proving Theorem 2.2.1, but some modifications should be made because
of truncations at the lower side.
   Step 1. Let       be a convergent subsequence of
For any      define the RM algorithm




with               or for some                                     for some

  We show that there are M > 0, T > 0 such that
                 when              and
when                     if  is large enough, where                is given
by (1.3.2).
  Let     > 1 be a constant such that


It is clear that
Application to Systems and Control                                        311

Since      and     are convergent, there is          such that




Let                 By (6.2.29) and (6.2.30), we have



for        if            and for       if                  where
   Let (6.2.31) hold for                                        or
                      It then follows that




where         or
   Thus, (6.2.31) has been inductively proved for
or
   Step 2. Let        be a convergent subsequence. We show that there
are M > 0 and T > 0 such that


if      is large enough.
     If     defined by (6.2.25) is bounded, then (6.2.32) directly follows.
     Again take         such that                    and set
     Assume               Then there is a     such that



   By the result proved in Step 1, starting from                 the algo-
rithm for    cannot directly hit the sphere with radius         without a
truncation for                                   So it may first hit some
lower bound at time                          and switch to some
from which again by Step 1        cannot directly reach        without a
truncation. The only possibility is to be truncated again at a lower
bound. Therefore, (6.2.32) takes place.
312           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

   Step 3. Since   and     are convergent, by (6.2.32) it follows that
from any convergent subsequence       there are constants         and
       such that


if     is large enough.
     Consequently, there is       such that


By (6.2.32) and the convergence of       and     it also follows that


as
     Therefore,




Using (6.2.33) and (6.2.34) by the same argument as that given in Step 3
of the proof for Theorem 2.2.1, we arrive at the following conclusion.
If starting from                        the algorithm (6.2.24) is calculated
as an RM algorithm and                                is bounded, then for
any            with                         and                 cannot cross
         infinitely often.
   Step 4. We now show that             is bounded.
   If       is unbounded, then               as          Therefore,
is unbounded and comes back to the fixed point              infinitely many
times.
   Notice that        is a finite set and



We see that there is an interval        with          and
0 such that        crosses         infinitely often, and during each cross-
ing the algorithm (6.2.24) behaves like an RM algorithm with staring
point        It is clear that        is bounded because                  as
              But by Step 3, this is impossible. Thus, we conclude that
      is bounded, and after a finite number of steps (6.2.24) becomes
Application to Systems and Control                                         313

   Step 5. We now show (6.2.28), i.e., after a finite number of steps the
algorithm (6.2.35) ceases to truncate at the lower side.
   Since            and                    by A6.2.2, it follows that there
is at least one nonzero coefficient in the polynomial             for some
   with                    Therefore, for some     and a small


From (6.2.16) it is seen that for sufficiently small           we have



This combining with convergence of         and      leads to



for sufficiently large
   From (6.2.26) and (6.2.36) it follows that     must be bounded, and
hence        is bounded. This means that there is a    such that



  We now show that           is bounded.
  Since                     for all sufficiently large   it follows that



          were unbounded, then by (6.2.37) the algorithm, starting from
          would infinitely many times enter the sphere with radius
              where is small enough such that



Then         would cross infinitely often an interval
Since      is a finite set, we may assume                  It is clear
that during the crossing the algorithm behaves like an RM algorithm.
By Step 4, this is impossible.
   Therefore, there is a     such that



   Noticing (6.2.20), (6.2.34), and that  serves as the Lyapunov func-
tion for       from Theorem 2.2.1 we conclude the remaining assertions
of the lemma.
314            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  Using       we now define         in (6.2.12) satisfying (6.2.13) and thus
solving the adaptive stabilization problem.
   Let
   1) If              then set                         Using we produce
the adaptive control      from (6.2.6) with         and        defined from
(6.2.5) with replaced by       and go back to 1) for
   2) If               then define
    a)           for the case where
    b)         defined by (6.2.24) for the case where
     but
    c)                       for the case, where
                       but


     Define


and use       to produce the adaptive control     as in 1), and go back to
1) for
   3) If               and none of a)-c) of 2) is the case, then set
and            go back to 1) for      and at the same time change       to
        i.e.,




Theorem 6.2.1 Assume conditions A6.2.1 and A6.2.2 hold. Then there
is     such that                    and      converges and



where          and      are defined by 1)-3) described above.
     Proof. The key step is to show that
     Assume the converse:
     Case i)                The assumption                      implies that
                and               occurs infinitely many times. However,
this is impossible, since            and                The contradiction
shows
Application to Systems and Control                                         315

   Case ii)               The assumption                 implies that there
is a sequence of integers       such that            and
i.e., for all             the following indicator equals one




Take a convergent subsequence of           For notational simplicity de-
note by       itself its convergent subsequence. Thus
     By Lemma 6.2.1,
     1) If       then


for all sufficiently large Thus, (6.2.41) may take place at most a finite
number of times. The contradiction shows that
     2) If              then as           we have




   Since                            and               for sufficiently large
from (6.2.42) it follows that




If                                then from (6.2.43) it follows that



for all sufficiently large Again, this means that (6.2.41) may take place
at most a finite number of times, and we conclude that
   Thus, there is       such that


and the algorithm defining      will run over the following cases: 1) and
2a)-2c). Since   and     are convergent, the inequality
                            implies
316            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

for sufficiently large   This means that the algorithm can be at 2b)
only for finitely many times. By the same reason it cannot be at 2c)
for infinitely many times. Therefore, the algorithm will stick on 1) if
                and on 2a) if             and in both cases there is a
   such that                   and



The convergence of      follows from the convergence of         and
Remark 6.2.1 For the case                     the origin       is not a stable
equilibrium for the equation



Consequently, the truncation at the lower bound in (6.2.24) should be
very rare. The computation will be simplified if there is no lower bound
truncation.

6.3.     Application to Pole Assignment for Systems
         with Unknown Coefficients
  Consider the linear stochastic system


where    is the -dimensional state,      is the one-dimensional control,
and       is the -dimensional system noise.
  The task of pole assignment is to define the feedback control


in order that the characteristic polynomial



of the closed-loop system coincides with a given polynomial


  The pair             is called similar to           if there exists a nonsin-
gular matrix                    such that



where    denotes the        column of T.
Application to Systems and Control                                    317

  Define




where                   are coefficients of


The pair            is called the controller form associated to the pair

   If        is controllable, i.e.,                        is of full rank,
then         is similar to its controller form. To see this, we note that
(6.3.4) implies           and from                               it follows
that




which imply


where




So, is nonsingular if and only if is nonsingular.
   Assume that           is controllable and         is already in its con-
troller form (6.3.5). For notational simplicity, we will write       rather
than
318             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

   With feedback control                   the closed-loop system takes the
form



  Since           is in controller form,




where                    are elements of the row vector F:



Therefore, if          is known, then comparing (6.3.10) with (6.3.3) gives
the solution                     to the pole assignment problem, where



   We now solve the pole assignment problem by learning for the case
where        is unknown.
   Let us combine the vector equation (6.3.9) for initial values to form
the matrix equation



  Let            In learning control,       can be observed at any fixed



  For any             the observation of      is denoted by



where        is the system noise at time “1” for the system with feedback
gain     applied.
   Having observed       we compute its characteristic polynomial det
     which is a noise-corrupted characteristic polynomial of
   Let     be the       estimate for      By observing det              we
actually learn the difference det                  which in a certain sense
reflects how far det                    differs from the ideal polynomial

  For any                         let
Application to Systems and Control                                   319

be the row vector composed of coefficients of




By (6.3.10)


  Similarly, define row vectors



composed of coefficients of


and       respectively.
  Take a sequence of positive real numbers
and
  Calculate the estimate      for    by the following RM algorithm with
expanding truncations:




with fixed
Theorem 6.3.1 Assume that              is controllable and is in the con-
troller form. Further, assume the following conditions A6.3.1 and A6.3.2
hold:
A6.3.1 The components of
of     in (6.3.13) are mutually independent with

                                           for some


A6.3.2
where is the same as that in A6.3.1.
Then there is  with          such that for each                       as
320          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

         where       is the desired feedback gain realizing the exact pole
assignment.
  Proof. Define


where       and       are given by (6.3.14) and (6.3.17), respectively.
  By (6.3.11) and (6.3.16) it follows that




Thus, (6.3.19) and (6.3.20) become




  It is clear that the recursive algorithm for  has the same structure
as (2.1.1)–(2.1.3). For the present case, as function      required in
A2.2.2 we may take


Therefore, the conclusion of the theorem will follow from Theorem 2.2.1,
if we can show that for any integer N




  From (6.3.21) by (6.3.18), (6.3.15), and (6.3.13) it follows that




From here it is seen that                        is a sum of products of
  elements from                                      with +1 and –1 as
multiple for each product, where      and      denote elements of A and
     respectively. It is important to note that each product in
includes at least one of          as its factor. Thus, the product is of
the form
Application to Systems and Control                                   321

where



  By A6.3.1 we have




where
  By A6.3.2 and the convergence theorem for martingale difference se-
quences it follows that




for any integer     which implies (6.3.24).

6.4.     Application to Adaptive Regulation
   We now apply the SA method to solve the adaptive regulation problem
for a nonlinear nonparametric system.
   Consider the following system



where         is the system state,           is the control, and
                  is an unknown nonlinear function with          being
the unknown equilibrium for the system (6.4.1).
   Assume the state    is observed, but the observations are corrupted
by noise:



where          is the observation noise, which may depend on
  The purpose of adaptive regulation is to define adaptive control based
on measurements in order the system state to reach the desired value,
which, without loss of generality, may be assumed to be equal to zero.
  We need the following conditions.

A6.4.1                     and
322            STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

A6.4.2 The upper bound for          is known, i.e.,            and    is
robust stabilizing control in the sense that for any             the state
   tends to zero for the following system


A6.4.3 The system (6.4.1) is BIBS stable, i.e., for any bounded input,
the system state is also bounded;
A6.4.4           is continuous for bounded     i.e., for any



A6.4.5 The system (6.4.1) is strictly input passive, i.e., there are   and
      such that for any input




A6.4.6 For any convergent subsequence




where           is defined by (1.3.2).
     It is worth noting that A6.4.6 becomes




if      is independent of
   The adaptive control       is given according to the following recursive
algorithm:


where b is specified in A6.4.2.
Theorem 6.4.1 Assume A6.4.1–A6.4.6. Then the system (6.4.1), (6.4.2),
and (6.4.4) has the desired properties:
Application to Systems and Control                                      323

at sample paths where A6.4.6 holds.
Proof. Let     be a convergent subsequence of        such that
  and
  We have




for sufficiently large and small enough T, where is a constant to be
specified later on. The relationships (6.4.5) and (6.4.6) can be proved
along the lines of the proof for Theorem 2.2.1, but here is known to be
bounded, and (6.4.5) and (6.4.6) can be proved more straightforwardly.
We show this.
   Since the system (6.4.1) is BIBS, from             it follows that there
is        such that
   By A6.4.6 for large and small T > 0,




This implies that




  Let   be large enough such that



and let T be small enough such that



  Then we have


and hence there is no truncation in (6.4.4) for          i.e., (6.4.5) holds
for         Therefore,
324          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

Thus, (6.4.5) and (6.4.6) hold for          Assume they are true for all
                                     We now show that they are true for
           too.
  Since




from (6.4.4) it follows that (6.4.5) holds for             Hence,
                                       and (6.4.6) is true for
indeed.
   By induction, the assertions (6.4.5) and (6.4.6) have been proved.
   We now show that for any convergent subsequence
        there is a      such that




for small enough T > 0.
   By A6.4.5, we have




  Let us restrict    in (6.4.8) to                                  Then for
small T and large     from (6.4.6) and (6.4.8) it follows that
Application to Systems and Control                              325




for
   This implies that there exist a and a sufficiently large   which
may depend on but is independent of such that




for all sufficiently large   and small enough T > 0.
   Set




  Using a partial summation, by (6.4.9) we have




  Since              and             it is seen that
326          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  Then (6.4.10) implies that




  This proves (6.4.7).
  Define

  From (6.4.7) it follows that




for convergent subsequence
   Using A6.4.6 and (6.4.11), by completely the same argument as that
used in the proof (Steps 3– 6) of Theorem 2.2.1, we conclude that

  Finally, write (6.4.1) as



By A6.4.4 and the boundedness of        we have
                 and by A6.4.2 we conclude

Remark 6.4.1 It is easy to see that A6.4.6 is also necessary if A6.4.1–
A6.4.5 hold and             and             This is because for large
the observation noise can be expressed as



and hence
Application to Systems and Control                                        327

which tends to zero as               since           and
Remark 6.4.2 In the formulation of Theorem 6.4.1 the condition A6.4.5
can be replaced either by (6.4.7) or by (6.4.11), which are the conse-
quences of A6.4.5. Further, the quadratic        can be replaced by a
continuously differentiable function                such that
and                          In this case,         in (6.4.7) should be
correspondingly replaced by

Example 6.4.1 Let the nonlinear system be affine:



where the scalar nonlinear function          is bounded from above and from
below by positive constants:




Note that                                                         and hence
(6.4.7) holds, if                     Assume is known:
Then A6.4.2, A6.4.3, and A6.4.4 are satisfied. Therefore, if         satisfies
A6.4.6, then      given by (6.4.4) leads to           and
  In the area of system and control, the SA methods also are successfully
applied in discrete event dynamic systems, especially, to the perturbation
analysis based parameter optimization.

6.5.     Notes and References
   For system identification and adaptive control we refer to [10, 23, 54,
62, 75, 90]. The identification problem stated in Section 6.1 was solved in
[72] by ODE method. In comparison with [72], conditions used here have
considerably been weakened, and the convergence is proved by the TS
method rather than the ODE method. Section 6.1 is based on the joint
work by H. F. Chen, T. Duncan and B. Pasik-Duncan. The existence
and uniqueness of the solution to (6.1.50) can be found, e.g., in [23]. For
stochastic quadratic control refer to [2, 10, 12, 33].
   Adaptive stabilization for stochastic systems is dealt with in [5, 55, 77].
The convergence of WLS and adaptive stabilization using WLS are given
in [55]. The problem is solved by the SA method in [19]. This approach
is presented in Section 6.2.
   The pole assignment problem for stochastic system with unknown
coefficients is solved by SA with the help of learning in Section 6.3,
which is based on [20]. For concept of linear control systems we refer to
328          STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

[1, 46, 60]. The connection between the feedback gain and coefficients of
the desired characteristic polynomial is called the Ackermann’s formula,
which can be found in [46].
   Application of SA to adaptive regulation is based on [26].
   For perturbation analysis of discrete event dynamic systems we refer
to [58]. The perturbation analysis based parameter optimization is dealt
with in [29, 86, 87].
Appendix A




   In Appendix A we introduce the basic concept of probability theory. Results are
presented without proof. For details we refer to [31, 32, 70, 76, 84].

A.1.         Probability Space
   The basic space is denoted by     The point          is called elementary event or
sample. The point set in is denoted by A,
  Let be a family of sets in satisfying the following conditions:
   1.
   2. If        then      the complement of A, also belongs to
   3. If                      then
   Then,     is called the           or          The element A of       is called the
measurable set, or random event, or event.
   As a consequence of Properties 2 and 3,                if
   A set function   defined on       is called -additive if                        for any
sequence of disjoint events          By definition, one of the values         or        is
not allowed to be taken by
   A nonnegative            set function is called a measure.
   Define



The set functions           and                   are called the upper, lower, and total
variation of on      respectively.
   Jordan-Hahn Decomposition Theorem If                 is            on     then there
exists a set D such that, for any




    and    are measures and
   Let P be a set function defined on       with the following properties.
   1.
   2.

                                            329
330               STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

  3.                           if                     are disjoint. Then, P is called a
probability measure on       The triple           is called a probability space.
   PA is called the probability of random event A.
   It is assumed that any subset of a measurable set of probability zero is measurable
and its probability is zero. After such a completion of measurable sets the resulting
probability space is called completed.
   If a relationship between random variables holds for any with possible exception
of a set with probability zero, then we say this relationship holds a.s. (almost surely)
or with probability one.

A.2.         Random Variable and Distribution Function
   In R, the real line, the smallest             containing all intervals is called the Borel
           and is denoted by      The “smallest” means that if there is a
containing all intervals, then there must be              in the sense that           for any
          The Borel                  can also be defined in          Any set in or          is
called the Borel set.
    Any interval can be endowed with a measure equal to its length. This measure
can be extended to each               i.e., to each Borel set. Any subset of a set with
measure zero is also assumed to be a measurable set with measure zero. After such a
completion, the measurable set is called Lebesgue measurable, and the measure the
Lebesgue measure. In what follows always means the completed Borel
    A real function           defined on              is called measurable, if


If is a real measurable function defined on           and
then is called a random variable. Therefore, if    is a measurable function, then
    is also a random variable if
   Let be a random variable. The distribution function of is defined as


By a random vector                   we mean that each component
of is a random variable.
  The distribution function of a random vector is defined as


   If      is differentiable, then its derivative             is called the density
of    The density of a random vector is defined by a similar way. The density of
l-dimensional normal distribution           is defined by




A.3.         Expectation
   Let be a random variable and let
   Define
APPENDIX A                                                                               331

where
         is called the expectation of
     For an arbitrary random variable define



     The expectation of     is defined as


if at least one of      and    is finite .
    If                        then is called integrable.
    The expectation of can be expressed by a Lebesgue-Stieltjes integral with respect
to its distribution function



If         is a measurable function, then



     In the density of l-dimensional random vector         with normal distribution,



A.4.            Convergence Theorems and Inequalities
     Let        be a sequence of random variables and be a random variable.
     If                      then we say that    converges to   and write

     If for any                                     then we say that      converges to    in
 probability and write
    If the distribution functions       of    converge to        at any where
is continuous, then we say        weakly (or in distribution) converges to and write

   If                           then we say   converges to    in the mean square sense and
write l.i.m.
                      implies which in turn implies
   Monotone Convergence Theorem If random variables          nondecreasingly
(nonincreasingly) converge to                     and
then
   Dominated Convergence Theorem If                 and there exists an inte-
grable random variable           such that          then                                 and

     Fatou Lemma If                                        for some random variable    with
                            then
332              STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

      Chebyshev Inequality



      Lyapunov Inequality



      Hölder Inequality
      Let                     and              Then



In the special case where               the Hölder inequality is called the Schwarz
inequality.

A.5.           Conditional Expectation
      Let       be a probability space.     is called a                of   if   is a
          and         by which it is meant that any            implies
   Radon-Nikodym Theorem Let             be a                 of     For any random
variable with at least one of        and        being finite, there is an unique
measurable random variable denoted by            such that for any




    The                 random variable satisfying the above equality is called condi-
tional expectation of given
   Let     be the smallest (see A.2)             containing all sets
            is called the          generated by
   The conditional expectation         of given is defined as



Let A be an event. Conditional probability            of A given    is defined by



  Properties of the conditional expectation are listed below.
 1)                                         for constants and
  2)
  3)                        if is                  and
  4)                             if
  5)                 if
  Convergence theorems and inequalities stated in A.4 remain true with expectation
     replaced by the conditional expectation            For example, the conditional
Hölder inequality



for
   For a sequence       of random variables and a                      the consistent
conditional distribution functions                            of               given
APPENDIX A                                                                               333

    can be defined such that i) they are                   for any                  and any
fixed              ii) they are distribution functions for any fixed        and iii) for any
measurable function




A.6.          Independence
     Let                  be a sequence of events.
     If for any set of indices




then          is called mutually independent.
   Let                    be a sequence of            If events            are mutually
independent whenever                                        then the family       of
           is called mutually independent.
   Let         be a sequence of random variables and let     be the           generated
by      If         is mutually independent, then the sequence       of random variables
is called mutually independent.
    Law of iterated logarithm Let           be a sequence of independent and identically
distributed (iid) random variables,                              Then




Proposition A.6.1 Let           be a measurable function defined on
     If the l-dimensional random vector is independent of the m-dimensional ran-
dom vector     then

where

provided             exists for all           in the range of
     From this proposition it follows that


if    is independent of

A. 7.        Ergodicity
   Let        be a sequence of random variables and let                              be the
distribution function of
   If                                                           for any integer   then
is called stationary, or     is a stationary process.

Proposition A.7.1         Let         be stationary.
334             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

   If     exists, then



where   is a               of   and is called invariant

   If                 then the stationary process         is called ergodic. Thus, for
stationary and ergodic process      we have




If      is a sequence of mutually independent and identically distributed (and hence
stationary) random variables, then            and the sequence is ergodic.
Appendix B




   In Appendix B we present the detailed proof of convergence theorems for martin-
gales and martingale difference sequences.
   Let      be a sequence of random variables, and let       be a family of nonde-
creasing            i.e.,

   If    is             for any    then we write           and call it as an adapted
process.
   An adapted process        with                is called a martingale if
              a supermartingale if                            and a submartingale if

   An adapted process           is called a martingale difference sequence (MDS) if

   A sequence of mutually independent random vectors     with              is an
obvious example of MDS.
   An integer-valued measurable function is called a Markov time with respect to
     if

If, in addition,               then   is called a stopping time.

B.1.       Convergence Theorems for Martingale
   Lemma B.1.1 Let              be adapted,   a Markov time, and B a Borel set. Let
   be the first time at which the process      hits the set B after time i.e.,




Then     is a Markov time.
  Proof. The conclusion follows from the following expression:




                                        335
336             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

   For defining the number of up-crossing of an interval          by a submartingale
                       we first define




    The largest for which           is called the number of up-crossing of the interval
      by the process         and is denoted by
    By Lemma B.1.1
So,    is a Markov time.
    Assume     is a Markov time. Again, by Lemma B.1.1,
and
    Therefore, all                   are Markov times.
    Theorem B.1.1 (Doob) For submartingales                 the following inequalities
hold




where
   Proof. Note that       equals the number              of up-crossing of the interval
          by the submartingale            or by
   Since for




              is a submartingale.
  Thus, without loss of generality, it suffices to prove that for a nonnegative sub-
martingale




   Define
APPENDIX B                                                                        337

  Define also             Then for even          crosses (0, b) from time    to
Therefore,




and




  Further, the set           is                  since   is a Markov time,
and

  Taking expectation of both sides of (B-l-2) yields




where the last inequality holds because           is a submartingale and hence the
integrand is nonnegative.
    Thus (B.1.1) and hence the theorem is proved.
    Theorem B.1.2 (Doob) Let               be a submartingale with
a.s.
    Then there is a random variable with             such that



  Proof. Set


  Assume the converse:
  Then

where   and     run over all rational numbers.
338              STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     By the converse assumption there exist rational numbers         such that



  Let        be the number of up-crossing of the interval          by
By Theorem B.1.1




     By the monotone convergence theorem from (B-1-4) it follows that




     However, (B.1.3) implies                        which contradicts (B.1.5). Hence,




or     converges to a limit which is finite a.s.
     By Fatou lemma it follows that




and




where                       is invoked. Hence,
     Corollary B.1.1 If            is a nonnegative supermartingale or nonpositive sub-
martingale, then


Because for nonpositive submartingales            the corollary follows from the the-
orem; while for a nonnegative supermartingale                         is a nonpositive
submartingale.
   Corollary B.1.2 If          is a martingale with                  then
      and
   This is because for a martingale                       and
                             and hence
APPENDIX B                                                                          339

B.2.         Convergence Theorems for MDS I
  Let           be an adapted process,                and let G be a Borel set in
Then the first exit time from G defined by




is a Markov time. This is because


   Lemma B.2.1. Let               be a martingale (supermartingale, submartingale)
and a Markov time. Then the process               stopped at is again a martingale
(supermartingale, submartingale), where
   Proof. Note that


is
     If         is a martingale, then




   This shows that              is a martingale. For supermartingales and submartin-
gales the proof is similar.
   Theorem B.2.1. Let                   be a one-dimensional MDS. Then as
             converges on




     Proof. Since                is                  the first exit time




is a Markov time and by Lemma B.2.1                      is a martingale, where M is a
positive constant.
     Noticing that                        and that
is                    we find
340                STOCHASTIC APPROXIMATION AND ITS APPLICATIONS




By Corollary B.1.2        converges as            It is clear that                  on
           Therefore, as            pathwisely converges on                  Since M is
arbitrary,   converges on               which equals A.
   Theorem B.2.2. Let              be an MDS and                  If

then        converges on                                If                     then
converges on
   Proof. It suffices to prove the first assertion, because the second one is reduced to
the first one if   is replaced by
   Define



   By Lemma B.2.1                  is a martingale. It is clear that




   Consequently,



   By Theorem B.1.2           converges as
   Since            on                 as                converges on                and
consequently on                  which equals

B.3. Borel-Cantelli-Lévy Lemma
   Theorem B.3.1. (Borel-Cantelli-Lévy Lemma) Let                      be a sequence of
events,            Then             if and only if                       or equivalently,




   Proof. Define




Clearly,           is a martingale and                         is an MDS.
   Since                            by Theorem B.2.2,      converges on
APPENDIX B                                                                                341

If                then from (B.3.2) it follows that                     which implies that

converges. Then, this combining with                     by (B.3.2) yields

     Conversely, if                          then from (B.3.2) it follows that
Noticing that                            is contained in the set where           converges by
Theorem B.2.2, from the convergence of            by (B.3.2) it follows that

     Theorem B.3.2 (Borel-Cantelli Lemma) Let                   be a sequence of events. If
                then the probability that         occur infinitely often is zero, i.e.,




     If   are mutually independent and                       then
     Proof. Denote by        the             generated by
     If               then




and hence                               which, by (B.3.1), implies (B.3.3).
     When      are mutually independent, then




     Consequently,                 implies                           and
follows from (B.3.1).

B.4.          Convergence Criteria for Adapted
              Sequences
     Let       be an adapted process.
     Theorem B.4.1 Let      be a sequence of positive numbers. Then




where
342               STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

     Proof. Set

By Theorem B.3.1




or
     This means that A is the set where events    may occur only finitely many times.
Therefore, on A the series        converges if and only if              converges.
   Theorem B.4.2 (Three Series Criterion) Denote by S the                   where the
following three series converge:




and


where c is a positive constant.
     Then             converges on S as
     Proof. Taking       in (B.4.1), we have        and




by Theorem B.4.1.
   Define


Since                        converges on S, from (B.4.2) it follows that




Noticing that           is an MDS and


we see




     By Theorem B.2.1        converges on S, or
APPENDIX B                                                                          343

     Then from (B.4.3) it follows that




or                  converges ).


B.5.          Convergence Theorems for MDS II
     Let         be an MDS.
     Theorem B.5.1 (Y. S. Chow)                      converges on




   Proof. By Theorem B.4.2 it suffices to prove            where S is defined in Theo-
rem B.4.2 with    replaced by considered in the present theorem.
   We now verify that three series defined in Theorem B.4.2 are convergent on A if
  is replaced by
   For convergence of the first series it suffices to note




For convergence of the second series, taking into account                 we find




     Finally, for convergence of the last series it suffices to note




and

by the conditional Schwarz inequality.
   Theorem B.5.2. The conclusion of Theorem B.5.1 is valid also for
   Proof. Define

Then we have
344             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

on A where A is still defined by (B-5-1) but with
   Applying Theorem B.5.1 with             to the MDS          leads to that
converges on A, i.e.,




This is equivalent to




   Notice that convergence of         implies convergence of      since         for
sufficiently large
   Consequently, from (B.5.2) it follows that




B.6.       Weighted Sum of MDS
   Theorem B.6.1 Let               be an l-dimensional MDS and let             be a
matrix adapted process. If




for some            then as




where




   Proof. Without loss of generality, assume
APPENDIX B                                                                         345

   We have the following estimate:




   By Theorems B.5.1 and B.5.2 it follows that




where

   Notice that is nondecreasing as             If      is bounded, then the conclusion
of the theorem follows from (B.6.1). If                 then by the Kronecker lemma
(see Section 3.4) the conclusion of the theorem also follows from (B.6.1).
References




[1] B. D. O. Anderson and T. B. Moore, Optimal Control: Linear Quadratic Methods,
    Prentice-Hall, N. J., 1990.

[2] K. J. Åström, Introduction to Stochastic Control, Academic Press, New York,
    1970.

[3] M. Benaim, A dynamical systems approach to stochastic approximation, SIAM
    J. Control & Optimization, 34:437–472, 1996.

[4] A. Benveniste, M. Metivier and P. Priouret, Adaptive Algorithms and Stochastic
    Approximation, Springer-Verlag, New York, 1990.

[5] B. Bercu, Weighted estimation and tracking for ARMAX models, SIAM J. Con-
    trol & Optimization, 33:89–106, 1995.

[6] P. Billingsley, Convergence of Probability Measures, Wiley, New York, 1968.

[7] J. R. Blum, Multidimensional stochastic approximation, Ann. Math. Statist.,
    9:737–744, 1954.

[8] V. S. Borkar, Asynchronous stochastic approximations, SIAM J. Control and
    Optimization, 36:840–851, 1998.

[9] O. Brandière and M. Duflo, Les algorithmes stochastiques contournents-ils les
    pièges? Ann. Inst. Henri Poincaré, 32:395–427, 1996.

[10] P. E. Caines, Linear Stochastic Systems, Wiley, New York, 1988.

[11] H. F. Chen, Recursive algorithms for adaptive beam-formers, Kexue Tongbao
     (Science Bulletin), 26:490–493, 1981.

[12] H. F. Chen, Recursive Estimation and Control for Stochastic Systems, Wiley,
    New York, 1985.

[13] H. F. Chen, Asymptotic efficient stochastic approximation, Stochastics and
    Stochastics Reports, 45:1–16, 1993.


                                       347
348           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

[14] H. F. Chen, Stochastic approximation and its new applications, Proceedings
     of 1994 Hong Kong International Workshop on New Directions of Control and
     Manufacturing, 1994, 2–12.
[15] H. F. Chen, Convergence rate of stochastic approximation algorithms in the
     degenerate case, SIAM J. Control & Optimization, 36:100–114, 1998.

[16] H. F. Chen, Stochastic approximation with non-additive measurement noise, J.
     of Applied Probability, 35:407–417, 1998.

[17] H. F. Chen, Convergence of SA algorithms in multi-root or multi-extreme cases,
     Stochastics and Stochastics Reports, 64: 255–266, 1998.

[18] H. F. Chen, Stochastic approximation with state-dependent noise, Science in
     China (Series E), 43:531–541, 2000.

[19] H. F. Chen and X. R. Cao, Controllability is not necassry for adaptive pole
     placement control, IEEE Trans. Autom. Control, AC-42:1222–1229, 1997.

[20] H. F. Chen and X. R. Cao, Pole assignment for stochastic systems with unknown
     coefficients, Science in China (Series E), 43:313–323, 2000.

[21] H. F. Chen, T. Duncan, and B. Pasik-Duncan, A Kiefer-Wolfowitz algorithm
     with randomized differences, IEEE Trans. Autom. Control, AC-44:442–453, 1999.

[22] H. F. Chen and H. T. Fang, Nonconvex stochastic optimization for model reduc-
     tion, Global Optimization, 2002.
[23] H. F. Chen and L. Guo, Identification and Stochastic Adaptive Control,
     Birkhäuser, Boston, 1991.
[24] H. F. Chen, L. Guo, and A. J. Gao, Convergence and robustness of the Robbins-
     Monro algorithm truncated at randomly varying bounds, Stochastic Processes
     and Their Applications, 27:217–231, 1988.

[25] H. F. Chen and R. Uosaki, Convergence analysis of dynamic stochastic approx-
     imation, Systems and Control Letters, 35:309–315, 1998.

[26] H. F. Chen and Q. Wang, Adaptive regulator for discrete-time nonlinear non-
     parametric systems, IEEE Trans. Autom. Control, AC-46:    , 2001.

[27] H. F. Chen and Y. M. Zhu, Stochastic approximation procedures with randomly
     varying truncations, Scientia Sinica (Series A), 29:914–926, 1986.

[28] H. F. Chen and Y. M. Zhu, Stochastic Approximation (in Chinese), Shanghai
     Scientific and Technological Publishers, Shanghai, 1996.

[29] E. K. P. Chong and P. J. Ramadge, Optimization of queues using an infinitesi-
     mal perturbation analysis-based stochastic algorithm with general update times,
     SIAM J. Control & Optimization, 31:698–732, 1993.

[30] Y. S. Chow, Local convergence of martingales and the law of large numbers,
    Ann. Math. Statst. 36:552–558, 1965.
REFERENCES                                                                         349

[31] Y. S. Chow and H. Teicher, Probablility Theory: Independence, Interchangeabil
     ity, Martingales, Springer Verlag, New York, 1978.
[32] K. L. Chung, A Course in Probability Theory, (second edition), Academic Press,
     New York, 1974.

[33] M. H. A. Davis, Linear Estimation and Stochastic Control, Chapman and Hall,
     New York, 1977.

[34] K. Deimling, Nonlinear Functional Analysis, Springer, Berlin, 1985.

[35] B. Delyon and A. Juditsky, Stochastic optimization with averaging of trajecto
    ries, Stochastics and Stochastics Reports, 39:107–118, 1992.

[36] E. F. Deprettere (eds.), SVD and Signal Processing, Elsevier, HorthHolland,
     1988.

[37] N. Dunford and J. T. Schwartz, Linear Operators, Part 1: General Theory, Wiley
     Interscience, New York, 1966.

[38] V. Dupač, A dynamic stochastic methods, Ann. Math. Statist. 36:1695–1702.

[39] V. Dupač, Stochastic approximation in the presense of trend, Czeshoslovak Math.
     J., 16:454–461, 1966.

[40] A. Dvoretzky, On stochastic approximation, Proceedings of the Third Berkeley
    Symposium on Mathematical Statistics and Probability, pp. 39–55, 1956.
[41] S. N. Ethier and T. G. Kurtz, Markov Processes: Characterization and Conver
     gence, Wiley, New York, 1986.

[42] E. Eweda, Convergence of the sign algorithm for adaptive filtering with corre
     lated data, IEEE Trans. Information Theory, IT37:14501457, 1991.

[43] V. Fabian, On asymptotic normality in stochastic approximation, Ann. of Math.
     Statis., 39: 1327–1332, 1968.

[44] V. Fabian, On asymptotically efficient recursive estimation, Ann. Statist., 6:
     854–856, 1978.
[45] V. Fabian, Simulated annealing simulated, Computers Math. Applic., 33:81–94,
     1997.

[46] F. W. Fairman, Linear Control Theory, The State Space Approach, Wiley, Chich
     ester, 1998.

[47] H. T. Fang and H. F. Chen, Sharp convergence rates of stochastic approximation
     for degenerate roots, Science in China (Series E), 41:383–392, 1998.

[48] H. T. Fang and H. F. Chen, Stability and instability of limit points of stochastic
     approximation algorithms, IEEE Trans. Autom. Control, AC45:413–420, 2000.

[49] H. T. Fang and H. F. Chen, An a.s. convergent algorithm for global optimization
     with noise corrupted observations, J. Optimization and Its Applications, 104:343–
     376, 2000.
350             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

[50] H. T. Fang and H. F. Chen, Asymptotic behavior of asynchronous stochastic
      approximation, Science in China (Series F), 44:249–258, 2001.

[51] B. A. Francis, A Course in         Control Theory, Lecture Notes in Control and
      Information Sciences, Vol. 18, 1987.

[52] S. B. Gelfand and S. K. Mitter, Recursive stochastic algorithms for global opti-
      mization in      SIAM J. Control & Optimization, 29:999–1018, 1991.

[53] E. G. Gladyshev, On stochastic approximation (in Russian), Theory Probab.
      Appl, 10:275–278, 1965.

[54] G. C. Goodwin and K. S. Sin, Adaptive Filtering, Prediction and Control,
      Prentice-Hall, N.J., 1984.

[55] L. Guo, Self-convergence of weighted least squares with applications to stochastic
      adaptive control, IEEE Trans. Autom. Control, AC-41:79–89, 1996.

[56] P. Hall and C. C. Heyde, Martingale Limit Theory and Its Applications, Aca-
      demic Press, New York, 1980.

[57] S. Haykin, Adaptive Filter Theory, Prentice-Hall, Englewood Cliffs, NJ, 1990.

[58] Y. C. Ho and X. R. Cao, Perturbation Analysis of Discrete Event Dynamical
      Systems, Kluwer, Boston, 1991.

[59] A. Juditsky, A Stochastic estimation algorithm with observation averaging, IEEE
      Trans. Autom. Control, 38:794–798, 1993.

[60] T. Kailath, Linear Systems, Prentice-Hall, N. J., 1980.

[61] J. Kiefer and J. Wolfowitz, Stochastic estimation of the maximum of a regression
      function, Ann. Math. Statist., 23:462–466, 1952.

[62] P. V. Kokotovic (Ed.), Foundations of Adaptive Control, Springer, Berlin, 1991.

[63] J. Koronaski, Random-seeking methods for the stochastic unconstrained opti-
      mization, Int. J. Control, 21:517–527, 1975.

[64] H. J. Kushner, Approximation and Weak Convergence Methods for Random Pro-
      cesses with Applications to Stochastic Systems Theory, MIT Press, Cambridge,
      MA, 1984.

[65] H. J. Kushner and D. S. Clark, Stochastic Approximation for Constrained and
      Unconstained Systems, Springer-Verlag, New York, 1978.

[66] H. J. Kushner and J. Yang, Stochastic approximation with averaging of the
      iterates: Optimal asymptotic rates of convergence for general processes, SIAM J.
      Control & Optimization, 31:1045–1062, 1993.

[67] H. J. Kushner and J. Yang, Stochastic approximation with averaging and feed-
      back: Rapidly convergent “on line” algorithms, IEEE Trans. Autom. Control,
      AC-40:24–34, 1995.
REFERENCES                                                                       351

[68] H. J. Kushner and G. Yin, Stochastic Approximation Algorithms and Applica-
     tions, Springer-Verlag, New York, 1997.

[69] J. P. LaSaller and Lefchetz, Stability by Lyapunov’s Direct Methods with Ap-
     plications, Academic Press, New York, 1961.

[70] R. Liptser and A. N. Shiryaev, Statistics of Random Processes, Springer-Verlag,
     New York, 1977.

[71] R. Liu, Blind signal processing: An introduction, Proceedings 1996 Intl. Symp.
     Circuits and Systems, Vol. 2, 81–83, 1996.

[72] L. Ljung, Analysis of recursive stochastic algorithms, IEEE Trans. Autom. Con-
     trol, AC-22:551-575, 1977.

[73] L. Ljung, On positive real transfer functions and the convergence of some recur-
     sive schemes, IEEE Trans. Autom. Control, AC-22:539–551, 1977.
[74] L. Ljung, G. Pflug, and H. Walk, Stochastic Approximation and Optimization
     of Random Systems, Birkhäuser, Basel, 1992.

[75] L. Ljung and T. Söderström, Theory and Practice of Recursive Identification,
     MIT Press, Cambridge, MA, 1983.

[76] M. Loéve, Probability Theory, Springer, New York, 1977–1978.

[77] R. Lozano and X. H. Zhao, Adaptive pole placement without excitation probing
    signals, IEEE Trans. Autom. Control, AC-39:47–58, 1994.

[78] M. B. Nevelson and R. Z. Khasminskii, Stochastic Approximation and Recur-
    sive Estimation, Amer. Math. Soc., Providence, RI, 1976, Translation of Math.
    Monographs, Vol. 47.

[79] E. Oja, Subspace Methods of Pattern Recognition, 1st ed., Letchworth, Research
     Studies Press Ltd., Hertfordshire, 1983.

[80] B. T. Polyak, New stochastic approximation type procedures, (in Russian) Au-
     tom. i Telemekh., 7:98–107, 1990.

[81] B. T. Polyak and A. B. Juditsky, Acceleration of stochastic approximation by
     averaging, SIAM J. Control & Optimization, 30:838–855, 1992.

[82] H. Robbins and S. Monro, A stochastic approximation method, Ann. Math.
     Statist., 22:400–407, 1951.

[83] D. Ruppert, Stochastic approximation, In B. K. Ghosh and P. K. Sen, Editors,
     Handbook in Sequential Analysis, 503–529, Marcel Dekker, New York, 1991.

[84] A. N. Shiryaev, Probability, Springer, New York, 1984.

[85] J. C. Spall, Multivariate stochastic approximation using a simultaneous pertur-
    bation gradient approximation, IEEE Trans. Autom. Control, AC-37:331–341,
     1992.
352           STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

[86] Q. Y. Tang and H. F. Chen, Convergence of perterbation analysis based optimiza-
     tion algorithm with fixed-number of customers period, Discrete Event Dynamic
     Systems, 4:359–373, 1994.
[87] Q. Y. Tang, H. F. Chen, and Z. J. Han, Convergence rates of perturbation-
     analysis-Robbins-Monro-Single-run algorithms, IEEE Trans. Autom. Control,
     AC-42:1442–1447, 1997.
[88] J. N. Tsitsiklis, Asynchronous stochastic approximation and Q-learning Machine
    Learning, 16:185–202, 1994.

[89] N. J. Tsitsiklis, D. P. Bertsekas, and M. Athans, Distributed asynchronous de-
     terministic and stochastic gradient optimization algorithms, IEEE Trans. Autom.
     Control, 31:803–812, 1986.
[90] Ya. Z. Tsypkin, Adaptation and Learning in Automatic Systems, Academic
     Press, New York, 1971.

[91] K. Uosaki, Some generalizations of dynamic stochastic approximation processes,
     Ann. Statist., 2:1042–1048, 1974.

[92] J. Venter, An extension of the Robbins-Monro procedure, Ann. Math. Stat.,
     38:181–190, 1967.
[93] G. J. Wang and H. F. Chen, Behavior of stochastic approximation algorithm
     in root set of regression function, Systems Science and Mathematical Sciences,
     12:92–96, 1999.
[94] I. J. Wang, E. K. P. Chong and S. R. Kulkarni, Equivalent necessary and suffi-
    cient conditions on noise sequences for stochastic approximation algorithms, Adv.
    Appl. Probab., 28:784–801, 1996.

[95] C. Z. Wei, Multivariate adaptive stochastic approximation, Ann. Stat., 15:1115–
     1130, 1987.
[96] G. Xu, L. Tong, and T. Kailath, A least squares approach to blind identification,
     IEEE Trans. Signal Processing, SP-43:2982–2993, 1995.

[97] S. Yakowitz, A globally convergent stochastic approximation, SIAM J. Control
     & Optimization, 31:30–40, 1993.
[98] G. Yin, On extensions of Polyak’s averaging approach to stochastic approxima-
     tion, Stochastics and Stochastics Reports, 36:245–264, 1991.
[99] G. Yin and Y. M. Zhu, On w.p.l. convergence of a parallel stochastic approxi-
     mation algorithm, Probability in the Eng. and Infor. Sciences, 3:55–75, 1989.
[100] R. Zeilinski, Global stochastic approximation: A review of results and some
    open problems. In F. Archetti and M. Cugiani (eds.), Numerical Techniques for
    Stochastic Systems, 379–386, Northholland Publ. Co., 1980.

[101] J. H. Zhang and H. F. Chen, Convergence of algorithms used for principal
     component analysis, Science in China (Series E), 40:597–604, 1997.
REFERENCES                                                                  353

[102] K. Zhou, J. C. Doyle, and K. Glover, Robust Optimal Control, Prentice-Hall,
    New Jersey, 1996.
Index




          50, 55, 247                               Chebyshev inequality, 332
            329                                     closure, 38
           329                                      conditional distribution function, 332
        329                                         conditional expectation, 332
                                                    conditional probability, 332
Ackermann’s formula, 328                            conditional Schwarz inequality, 343
adapted process, 335                                constant interpolating function, 13
adapted sequence, 341                               constrained optimization problem, 268
adaptive control, 290, 303, 327                     controllable, 307, 317, 319
adaptive filter, 288                                controller form, 317–319
adaptive filtering, 265, 273                        convergence, 28, 36, 41, 153, 223, 331, 341
adaptive regulation, 321                            convergence analysis, 6, 28, 95, 154
adaptive stabilization, 305, 307, 314, 327          convergence rate, 95, 96, 101–103, 105,
adaptive stochastic approximation, 132,                         149
            149                                     convergence theorem for martingale dif-
adaptively stabilizable, 310                                    ference sequences, 97, 128, 160,
admissible controls, 302                                        170, 185, 196, 231, 249, 321,
algebraic Riccati equation, 131                                 339, 343
ARMA process, 39                                    convergence theorem for nonnegative su-
Arzelá-Ascoli theorem, 11, 24                                   permartingales, 7–9
asymptotic behavior, 194                            convergence theorems for martingale, 335
asymptotic efficiency, 95, 130, 132, 149            convergent subsequence, 17, 18, 30, 36,
asymptotic normality, 95, 113, 119, 127,                        84, 86, 89, 178, 187, 237, 241,
            149, 210                                            244, 271, 275, 280, 282, 283,
asymptotic properties, 95, 166                                  285, 287, 288, 297, 312, 315,
asymptotically efficient, 135                                   322, 323
asynchronous stochastic approximation,              coprimeness, 306
           219, 278, 288                            covariance matrix, 130, 132
averaging technique, 132, 149                       crossing, 18, 34, 188, 236, 312

balanced realization, 210, 214                      degenerate case, 103, 149
balanced truncation, 214, 215                       density, 330
blind channel identification, 219, 220, 223         distribution function, 330
blind identification, 220                           dominant stability, 59, 62
Borel             330                               dominated convergence theorem, 331
Borel set, 330                                      dynamic stochastic approximation, 82, 93
Borel-Cantelli Lemma, 341
Borel-Cantelli-Lévy Lemma, 340                      equi-continuous, 15
                                                    ergodic, 265, 268, 270, 273, 274, 334
certainly-equivalency-principle, 304, 306           ergodicity, 333



                                              355
356             STOCHASTIC APPROXIMATION AND ITS APPLICATIONS

event, 329                                    martingale difference sequence, 6, 16, 42,
expectation, 330                                         97, 128, 134, 159, 164, 168,
                                                         179, 185, 195–197, 231, 250,
Fatou lemma, 331                                         257, 294, 335
first exit time, 9, 339                       maxinizer, 151
                                              measurable, 17, 29, 96, 103, 133
general convergence theorems, 28              measurable function, 330
global minimum, 177                           measurable set, 329
global minimizer, 174, 177, 180               measure, 329
global optimization, 172–174, 218             minimizer, 151
global optimization algorithm, 180, 194       mixing condition, 291
global optimizer, 152                         model reduction, 210
globally Lipschitz continuous, 292            monotone convergence theorem, 331
Gronwall inequality, 298                      multi-extreme, 163, 164
                                              multi-root, 46, 57
Hölder Inequality, 332                        mutually independent, 333, 341
Hankel matrix, 222
Hankel norm approximation, 210, 214,
           215                                necessity of noise condition, 45
Hessian, 8, 195                               non-additive noise, 49
                                              nondegenerate case, 96, 149
identification, 290                           nonnegative adapted sequence, 7
integrable, 331                               nonnegative supermartingale, 6, 7, 338
interpolating function, 11                    nonpositive submartingale, 338
invariant            334                      normal distribution, 113, 114, 330
                                              nowhere dense, 29, 35, 37, 41, 177, 181,
Jordan-Hahn decomposition, 55, 56, 295,                  182, 280, 291
         329
                                              observation, 5, 17, 132, 321
Kiefer-Wolfowitz (KW) algorithm, 151–         observation noise, 5, 103, 133, 175, 195,
          153, 166, 173, 218                             321
Kronecker lemma, 67, 144, 148, 345            ODE method, 2, 10, 24, 327
Kronecker product, 248                        one-sided randomized difference, 172
KW algorithm with expanding trunca-           optimal control, 303
          tions, 152, 154, 173–175            optimization, 151
                                              optimization algorithm, 212
Law of iterated logarithm, 333                ordinary differential equation (ODE), 10
Lebesgue measurable, 330
Lebesgue measure, 330
                                              pattern classification, 219
Lebesgue-Stieltjes integral, 331
                                              perturbation analysis, 328
linear interpolating function, 12
                                              pole assignment, 316, 318, 327
Lipschitz continuous, 23
                                              principal component analysis, 238, 288
Lipschitz-continuity, 160
                                              probabilistic method, 4
local search, 172, 173
locally bounded, 17, 29, 96, 103, 133         probability measure, 330
locally Lipschitz continuous, 50, 155, 163,   probability of random event, 330
            177, 280                          probability space, 329, 330
Lyapunov equation, 105                        Prohorov’s theorem, 22, 24
Lyapunov function, 6, 8, 10, 11, 17, 111,
            226, 268, 313                     Radon-Nikodym Theorem, 332
Lyapunov inequality, 144, 332                 random noise, 10, 21
Lyapunov theorem, 98                          random search, 172
                                              random variable, 330
MA process, 171                               randomized difference, 152–154
Markov time, 6, 335, 336, 339                 recursive blind identification, 246
martingale, 335, 339, 340                     relatively compact, 22
martingale convergence theorem, 6, 180,       RM algorithm with expanding trunca-
           297                                            tions, 28, 155, 309, 319
INDEX                                                                                  357

Robbins-Monro (RM) algorithm, 1, 5, 8,         stochastic differential equation, 126
           11, 12, 17, 20, 45, 110, 310, 313   stochastic optimization, 211
robustness, 67, 93                             stopping time, 335
                                               strictly input passive, 322
SA algorithm, 67                               structural error, 10, 157
SA algorithm with expanding trunca-            structural inaccuracy, 21
            tions, 25, 40, 95, 290             submartingale, 335–337, 339
SA with randomly varying truncations, 93       subspace, 41, 226
Schwarz inequality, 142, 332                   supermartingale, 335, 339
sign algorithms, 273, 288                      surjection, 63
signal processing, 219, 265                    system identification, 327
signed measure, 56, 295
Skorohod representation, 23                    three series criterion, 342
Skorohod topology, 21, 24                      time-varying, 44
slowly decreasing step sizes, 132              trajectory-subsequence (TS) method, 2,
spheres with expanding radiuses, 36                        16, 21
stability, 131                                 truncated RM algorithm, 16, 17
stable, 96, 97, 102, 131, 133
                                               TS method, 28, 327
state-dependent, 42, 164
state-dependent noise, 29, 57
state-independent condition, 41, 42            uniformly bounded, 15
stationary, 265, 268, 270, 273, 274, 333       uniformly locally bounded, 41
step size, 5, 6, 17, 102, 132, 174             up-crossing, 336, 338
stochastic approximation (SA), 1, 223,
            226, 246                           weak convergence method, 21, 24
stochastic approximation algorithm, 5,         weighted least squares, 306
            307, 308                           weighted sum of MDS, 344
stochastic approximation method, 321           Wiener process, 126
Nonconvex Optimization and Its Applications

22.   H. Tuy: Convex Analysis and Global Optimization. 1998            ISBN 0792348184
23.   D. Cieslik: Steiner Minimal Trees. 1998                          ISBN 0792349830
24.   N.Z. Shor: Nondifferentiable Optimization and Polynomial Problems. 1998
                                                                      ISBN 0792349970
25.   R. Reemtsen and J.J. Rückmann (eds.): SemiInfinite Programming. 1998
                                                                      ISBN 0792350545
26.   B. Ricceri and S. Simons (eds.): Minimax Theory and Applications. 1998
                                                                      ISBN 0792350642
27.   J.P. Crouzeix, J.E. MartinezLegaz and M. Volle (eds.): Generalized Convexitiy,
      Generalized Monotonicity: Recent Results. 1998                   ISBN 079235088X
28.   J. Outrata, M. Kočvara and J. Zowe: Nonsmooth Approach to Optimization Problems
      with Equilibrium Constraints. 1998                               ISBN 0792351703
29.   D. Motreanu and P.D. Panagiotopoulos: Minimax Theorems and Qualitative Proper
      ties of the Solutions of Hemivariational Inequalities. 1999      ISBN 0792354567
30.   J.F. Bard: Practical Bilevel Optimization. Algorithms and Applications. 1999
                                                                      ISBN 0792354583
31.   H.D. Sherali and W.P. Adams: A ReformulationLinearization Technique for Solving
      Discrete and Continuous Nonconvex Problems. 1999                 ISBN 0792354877
32.   F. Forgó, J. Szép and F. Szidarovszky: Introduction to the Theory of Games. Concepts,
      Methods, Applications. 1999                                      ISBN 0792357752
33.   C.A. Floudas and P.M. Pardalos (eds.): Handbook of Test Problems in Local and
      Global Optimization. 1999                                       ISBN 0792358015
34.   T. Stoilov and K. Stoilova: Noniterative Coordination in Multilevel Systems. 1999
                                                                      ISBN 0792358791
35.   J. Haslinger, M. Miettinen and P.D. Panagiotopoulos: Finite Element Method for
      Hemivariational Inequalities. Theory, Methods and Applications. 1999
                                                                      ISBN 0792359518
36.   V. Korotkich: A Mathematical Structure of Emergent Computation. 1999
                                                                      ISBN 0792360109
37.   C.A. Floudas: Deterministic Global Optimization: Theory, Methods and Applications.
      2000                                                            ISBN 0792360141
38.   F. Giannessi (ed.): Vector Variational Inequalities and Vector Equilibria. Mathemat
      ical Theories. 1999                                             ISBN 0792360265
39.   D. Y. Gao: Duality Principles in Nonconvex Systems. Theory, Methods and Applica
      tions. 2000                                                     ISBN 0792361453
40.   C.A. Floudas and P.M. Pardalos (eds.): Optimization in Computational Chemistry
      and Molecular Biology. Local and Global Approaches. 2000 ISBN 0792361555
41.   G. Isac: Topological Methods in Complementarity Theory. 2000 ISBN 0792362748
42.   P.M. Pardalos (ed.): Approximation and Complexity in Numerical Optimization: Con
      crete and Discrete Problems. 2000                               ISBN 0792362756
43.   V. Demyanov and A. Rubinov (eds.): Quasidifferentiability and Related Topics. 2000
                                                                      ISBN 0792362845
Nonconvex Optimization and Its Applications

44.   A. Rubinov: Abstract Convexity and Global Optimization. 2000
                                                                     ISBN 0-7923-6323-X
45.   R.G. Strongin and Y.D. Sergeyev: Global Optimization with Non-Convex Constraints.
      2000                                                             ISBN 0-7923-6490-2
46.   X.-S. Zhang: Neural Networks in Optimization. 2000                ISBN 0-7923-6515-1
47.   H. Jongen, P. Jonker and F. Twilt: Nonlinear Optimization in Finite Dimen-
      sions. Morse Theory, Chebyshev Approximation, Transversability, Flows, Parametric
      Aspects. 2000                                                   ISBN 0-7923-6561-5
48.   R. Horst, P.M. Pardalos and N.V. Thoai: Introduction to Global Optimization. 2nd
      Edition. 2000                                                   ISBN 0-7923-6574-7
49.   S.P. Uryasev (ed.): Probabilistic Constrained Optimization. Methodology and
      Applications. 2000                                               ISBN 0-7923-6644-1
50.   D.Y. Gao, R.W. Ogden and G.E. Stavroulakis (eds.): Nonsmooth/Nonconvex Mech-
      anics. Modeling, Analysis and Numerical Methods. 2001             ISBN 0-7923-6786-3
51.   A. Atkinson, B. Bogacka and A. Zhigljavsky (eds.): Optimum Design 2000. 2001
                                                                      ISBN 0-7923-6798-7
52.   M. do Rosário Grossinho and S.A. Tersian: An Introduction to Minimax Theorems
      and Their Applications to Differential Equations. 2001            ISBN 0-7923-6832-0
53.   A. Migdalas, P.M. Pardalos and P. Värbrand (eds.): From Local to Global Optimiza-
      tion. 2001                                                       ISBN 0-7923-6883-5
54.   N. Hadjisavvas and P.M. Pardalos (eds.): Advances in Convex Analysis and Global
      Optimization. Honoring the Memory of C. Caratheodory (1873-1950). 2001
                                                                      ISBN 0-7923-6942-4
55.   R.P. Gilbert, P.D. Panagiotopoulos† and P.M. Pardalos (eds.): From Convexity to
      Nonconvexity. 2001                                               ISBN 0-7923-7144-5
56.   D.-Z. Du, P.M. Pardalos and W. Wu: Mathematical Theory of Optimization. 2001
                                                                      ISBN 1-4020-0015-4
57.   M.A. Goberna and M.A. López (eds.): Semi-Infinite Programming. Recent Advances.
      2001                                                              ISBN 1-4020-0032-4
58.   F. Giannessi, A. Maugeri and P.M. Pardalos (eds.): Equilibrium Problems: Nonsmooth
      Optimization and Variational Inequality Models. 2001             ISBN 1-4020-0161-4
59.   G. Dzemyda, V. Šaltenis and A. Žilinskas (eds.): Stochastic and Global Optimization.
      2002                                                             ISBN 1-4020-0484-2
60.   D. Klatte and B. Kummer: Nonsmooth Equations in Optimization. Regularity, Cal-
      culus, Methods and Applications. 2002                            ISBN 1-4020-0550-4
61.   S. Dempe: Foundations of Bilevel Programming. 2002               ISBN 1-4020-0631-4
62.   P.M. Pardalos and H.E. Romeijn (eds.): Handbook of Global Optimization, Volume
      2. 2002                                                          ISBN 1-4020-0632-2
63.   G. Isac, V.A. Bulavsky and V.V. Kalashnikov: Complementarity, Equilibrium, Effi-
      ciency and Economics. 2002                                       ISBN 1-4020-0688-8

KLUWER ACADEMIC PUBLISHERS – DORDRECHT / BOSTON / LONDON



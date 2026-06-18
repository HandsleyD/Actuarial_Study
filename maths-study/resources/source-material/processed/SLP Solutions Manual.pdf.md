---
normalized_id: shared-solutions-slp-solutions-manual
exam_code: SHARED
material_scope: slp solutions manual.pdf
material_group: shared
document_type: solutions
source_repo_path: resources/source-material/shared/SLP Solutions Manual.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-solutions-slp-solutions-manual

Solutions Manual for
Recursive Methods
in Economic Dynamics
Solutions Manual for
Recursive Methods
in Economic Dynamics



Claudio Irigoyen
Esteban Rossi-Hansberg
Mark L. J. Wright




Harvard University Press
Cambridge, Massachusetts, and London, England
2002
Copyright ° c 2002 by the President and Fellows of Harvard College
All rights reserved
Printed in the United States of America

Library of Congress Cataloging-in-Publication Data
To Marta, Santiago, and Federico
                           — CI

                  To Maria Jose
                        — ERH

                    To Christine
                       — MLJW
Contents


1 Introduction                                                  1

2 An Overview                                                   3

3 Mathematical Preliminaries                                   20

4 Dynamic Programming under Certainty                          43

5 Applications of Dynamic Programming under Certainty         56

6 Deterministic Dynamics                                       85

7 Measure Theory and Integration                              102

8 Markov Processes                                            137

9 Stochastic Dynamic Programming                              154

10 Applications of Stochastic Dynamic Programming             179

11 Strong Convergence of Markov Processes                     199

12 Weak Convergence of Markov Processes                       208

13 Applications of Convergence Results for Markov Processes   223

14 Laws of Large Numbers                                      246

15 Pareto Optima and Competitive Equilibria                   252

vi
                                            vii

16 Applications of Equilibrium Theory       266

17 Fixed-Point Arguments                    284

18 Equilibria in Systems with Distortions   298
Foreword

Over the years we have received many requests for an answer book
for the exercises in Recursive Methods in Economic Dynamics. These
requests have come not from inept teachers or lazy students, but from
serious readers who have wanted to make sure their time was being
well spent.
    For a student trying to master the material in Recursive Methods,
the exercises are critical, and some of them are quite hard. Thus it is
useful for the reader to be reassured along the way that he or she is on
the right track, and to have misconceptions corrected quickly when
they occur. In addition, some of the problems need more specific
guidelines or sharper formulations, and a few (not too many, we like
to think) contain errors — commands to prove assertions that, under
the stated assumptions, are just not true.
    Consequently, when three of our best graduate students proposed
to write a Solutions Manual, we were delighted. While we firmly
believe in the value of working out problems for oneself, in learning
by doing, it is clear that the present book will be an invaluable aid
for students engaged in this enterprise.
    The exercises in Recursive Methods are of two types, reflecting
the organization of the book. Some chapters in the book are self-
contained expositions of theoretical tools that are essential to mod-
ern practitioners of dynamic stochastic economics. These “core”
chapters contain dozens of problems that are basically mathemat-
ical: exercises to help a reader make sure that an abstract definition
or theorem has been grasped, or to provide a proof (some of them
quite important) that was omitted from the text. This Solutions
Manual contains solutions for most of the exercises of this sort. In

viii
                                                                   ix

particular, proofs are provided for results that are fundamental in
the subsequent development of the theory.
    Other chapters of Recursive Methods contain applications of those
theoretical tools, organized by the kind of mathematics they require.
The exercises in these chapters are quite diﬀerent in character. Many
of them guide the reader through classic papers drawn from various
substantive areas of economics: growth, macroeconomics, monetary
theory, labor, information economics, and so on. These papers, which
appeared in leading journals over the last couple of decades, repre-
sented the cutting edge, both technically and substantively. Turning
a paper of this sort into an exercise meant providing enough struc-
ture to keep the reader on course, while leaving enough undone to
challenge even the best students. The present book provides answers
for only a modest proportion of these problems. (Of course, for many
of the rest the journal article on which the problem is based provides
a solution!)
    We hope that readers will think of this Solutions Manual as a
trio of especially helpful classmates. Claudio, Esteban, and Mark
are people you might look for in the library when you are stuck on
a problem and need some help, or with whom you want to compare
notes when you have hit on an especially clever argument. This is
the way a generation of University of Chicago students have thought
of them, and we hope that this book will let many more students, in
a wide variety of places, benefit from their company as well.



                                                    Nancy L. Stokey
                                                     Robert E. Lucas
Solutions Manual for
Recursive Methods
in Economic Dynamics
1 Introduction

In the preface to Recursive Methods in Economic Dynamics, the au-
thors stated that their aim was to make recursive methods accessible
to the wider economics profession. They succeeded. In the decade
since RMED appeared, the use of recursive methods in economics
has boomed. And what was once as much a research monograph
as a textbook has now been adopted in first-year graduate courses
around the world.
    The best way for students to learn these techniques is to work
problems. And towards this end, RMED contains over two hundred
problems, many with multiple parts. The present book aims to assist
students in this process by providing answers and hints to a large
subset of these questions.
    At an early stage, we were urged to leave some of the questions
in the book unanswered, so as to be available as a “test bank” for
instructors. This raises the question of which answers to include
and which to leave out. As a guiding principle, we have tried to
include answers to those questions that are the most instructive, in
the sense that the techniques involved in their solution are the most
useful later on in the book. We have also tried to answer all of the
questions whose results are integral to the presentation of the core
methods of the book. Exercises that involve particularly diﬃcult
reasoning or mathematics have also been solved, although no doubt
our specific choices in this regard are subject to criticism.
    As a result, the reader will find that we have provided an answer
to almost every question in the core “method” chapters (that is,
Chapters 4, 6, 9, 15, 17, and 18), as well as to most of the questions
in the chapters on mathematical background (Chapters 3, 7, 8, 11,

                                                                    1
2                         1 / Introduction

12, and 14). However, only a subset of the questions in “application”
chapters (2, 5, 10, 13, and 16) have been answered.
     It is our hope that this selection will make the assimilation of the
material easier for students. At the same time, instructors should be
comforted to find that they still have a relatively rich set of questions
to assign from the applications chapters. Instructors should also find
that, because much of the material in the method and mathematical
background chapters appears repeatedly, there are many opportuni-
ties to assign this material to their students.
     Despite our best eﬀorts, errors no doubt remain. Furthermore,
it is to be expected (and hoped) that readers will uncover more el-
egant, and perhaps more instructive, approaches to answering the
questions than those provided here. The authors would appreciate
being notified of any errors and, as an aid to readers, commit to
maintaining a website where readers can post corrections, comments
and alternative answers. This website is currently hosted at:

     http://home.uchicago.edu/~mwright2/SLPSolutions.html

    In the process of completing this project we have incurred vari-
ous debts. A number of people provided us with their own solutions
to problems in the text, including Xavier Gine and Rui Zhao. Oth-
ers, including Vadym Lepetyuk, Joon Hyuk Song and Ivan Wern-
ing, pointed out sins of commission and omission in earlier drafts.
Christine Groeger provided extensive comments, and lent her LATEX
expertise to the production of the manuscript. We thank all of these
people, and reserve a special thanks for Nancy Stokey, whose insight
and enthusiasm were invaluable in seeing the project through to its
conclusion.
2 An Overview

Exercise 2.1

    The fact that f : R+ → R+ is continuously diﬀerentiable, strictly
increasing and strictly concave comes directly from the definition of
f as
                      f (k) = F (k, 1) + (1 − δ)k,
with 0 < δ < 1, and F satisfying the properties mentioned above.
In particular, the sum of two strictly increasing functions is strictly
increasing, and continuous diﬀerentiability is preserved under sum-
mation. Finally, the sum of a strictly concave and a linear function
is strictly concave.
     Also,

              f (0) = F (0, 1) = 0,
              f 0 (k) = Fk (k, 1) + (1 − δ) > 0,
        lim f 0 (k) = lim Fk (k, 1) + lim (1 − δ) = ∞,
        k→0              k→0            k→0
        lim f 0 (k) =    lim Fk (k, 1) + lim (1 − δ) = (1 − δ).
       k→∞               k→∞             k→∞




Exercise 2.2

    a.      With the given functional forms for the production and
utility function we can write (5) as

                         αβktα−1       1
                         α        = α        ,
                        kt − kt+1  kt−1 − kt

                                                                     3
4                        2 / An Overview

which can be rearranged as

                 αβktα−1 (kt−1
                           α
                               − kt ) = (ktα − kt+1 ).

Dividing both sides by ktα and using the change of variable zt =
     α
kt /kt−1 we obtain
                          1
                     αβ( − 1) = 1 − zt+1 ,
                          zt
or
                                      αβ
                      zt+1 = 1 + αβ −     ,
                                       zt
which is the equation represented in Figure 2.1.


                   Insert Figure 2.1 About Here


    As can be seen in the figure, the first-order diﬀerence equation
has two steady states (that is, z’s such that zt+1 = zt = z), which
are the two solutions to the characteristic equation

                     z 2 − (1 + αβ)z + αβ = 0.

    These are given by z = 1 and αβ.

   b.      Using the boundary condition zT +1 = 0 we can solve for
zT as
                                     αβ
                            zT =          .
                                   1 + αβ
Substituting recursively into (??) we can solve for zT −1 as

                                    αβ
                     zT −1 =
                                1 + αβ − zT
                                     αβ
                            =             αβ
                                1 + αβ − 1+αβ
                                  αβ(1 + αβ)
                            =                  ,
                                1 + αβ + (αβ)2
                             2 / An Overview                          5

and in general,

                             αβ[1 + αβ + ... + (αβ)j ]
                   zT −j =                             .
                              1 + αβ + ... + (αβ)j+1
Hence for t = T − j,

                             αβ[1 + αβ + ... + (αβ)T −t ]
                  zt =
                              1 + αβ + ... + (αβ)T −t+1
                             αβsT −t
                       =
                             sT −t+1

where si = 1 + αβ + ... + (αβ)i . In order to solve for the series, take
for instance the one in the numerator,

                    sT −t = 1 + αβ + ... + (αβ)T −t ,

multiply both sides by αβ to get

                   αβsT −t = αβ + ... + (αβ)T −t+1 ,

and substract this new expression from the previous one to obtain

                    (1 − αβ)sT −t = 1 − (αβ)T −t+1 .

Hence
                                       1 − (αβ)T −t+1
                        sT −t =                       ,
                                           1 − αβ
                                       1 − (αβ)T −t+2
                     sT −t+1 =                        ,
                                           1 − αβ
and therefore
                                     1 − (αβ)T −t+1
                           zt = αβ                  ,
                                     1 − (αβ)T −t+2
for t = 1, 2, ..., T + 1, as in the text. Notice also that

                                      1 − (αβ)T −(T +1)+1
                   zT +1 = αβ
                                      1 − (αβ)T −(T +1)+2
                            = 0.
6                           2 / An Overview

    c.    Plugging (7) into the right hand side of (5) we get
               h                i      −1 h                i
                 1 − (αβ)T −t+1               1 − (αβ)T −t+2
     kt−1
       α
           − αβ h                   α 
                                 i kt−1    =
                          T −t+2                α (1 − αβ) .
                                               kt−1
                 1 − (αβ)

Similarly, by plugging (7) into the left hand side of (5) we obtain
                           ·                         ¸α−1
                                 [1−(αβ)T −t+1 ] α
                       αβ αβ                    k
                                 [1−(αβ)T −t+2 ] t−1
             ·                         ¸α µ                         ¶
                  [1−(αβ)T −t+1 ] α                  [1−(αβ)T −t ]
               αβ                k          1 −  αβ
                  [1−(αβ)T −t+2 ] t−1               [1−(αβ)T −t+1 ]
                   h                    i       h              i −1
                                  T −t+1                   T −t
               1     1 −  (αβ)            − αβ   1 −  (αβ)
         =                        h                 i              
               α
             kt−1                   1 − (αβ)T −t+2
             h                 i
              1 − (αβ)T −t+2
         =       α (1 − αβ) .
               kt−1

Hence, the law of motion for capital given by (7) satisfies (5).
   Evaluating (7) for t = T yields

                                       1 − (αβ)T −T
                    kT +1 = αβ                            kTα
                                      1 − (αβ)T −T +1
                            = 0,

so (7) satisfies (6) too.


Exercise 2.3

    a.      We can write the value function using the optimal path
for capital given by (8) as
                            ∞
                            X
              υ(k0 ) =            β t log(ktα − αβktα )
                            t=0
                                           X∞
                            log(1 − αβ)
                      =                 +α     β t log(kt ).
                              (1 − β)      t=0
                              2 / An Overview                                  7

The optimal policy function, written (by recursive substitution) as a
function of the initial capital stock is (in logs)
                              Ã t−1     !
                               X
                   log kt =           αi log(αβ) + αt log k0 .
                               i=0

Using the optimal policy function we can break up the last summa-
tion to get
        ∞
        X                                           X  ∞     µt−1          ¶
               t                 log(k0 )                     P
              β log(kt ) =                + log(αβ)   βt               i
                                                                       α
                                (1 − αβ)                         i=0
        t=0                                            t=1
                                 log(k0 )         log(αβ)
                         =                +β                   ,
                                (1 − αβ)     [(1 − β)(1 − αβ)]

where we Phave used¡the fact ¢that the solution to a series of the
form st = ti=0 λi is 1 − λt+1 / (1 − λ) , as shown in Exercise 2.2b.
Hence, we obtain a log linear expression for the value function

                          υ(k0 ) = A + B log(k0 ),

where             ·                         ¸
                                 αβ log(αβ)
               A = log(1 − αβ) +              (1 − β)−1 ,
                                  (1 − αβ)
and
                                            α
                                 B=             .
                                         1 − αβ


   b.         We want to verify that

                              υ(k) = A + B log(k)

satisfies (11). For this functional form, the first-order condition of
the maximization problem in the right-hand side of (11) is given by

                                           βB
                               g(k) =           kα .
                                         1 + βB
8                           2 / An Overview

Plugging this policy function into the right hand side of (11) we
obtain
               µ                  ¶    ·          µ            ¶¸
                  α     βB      α                     βB     α
  υ(k) = log k −              k     + β A + B log          k
                      1 + βB                        1 + βB
        = α log (k) − log (1 + βB) + βA
              +βB [log (βB) + α log (k) − log (1 + βB)]
          = (1 + βB) α log (k) − (1 + βB) log(1 + βB)
              +βA + βB log(βB).

Using the expressions for A and B obtained in part a., we get that
(1 + βB) α = B and

            βB log(βB) − (1 + βB) log(1 + βB) + βA = A,

and hence υ(k) = A + B log (k) satisfies (11) .


Exercise 2.4

   a.       The graph of g(k) = sf (k), with 0 < s < 1, is found in
Figure 2.2.


                      Insert Figure 2.2 About Here.


    Since f is strictly concave and continuously diﬀerentiable, g will
inherit those properties. Also, g(0) = sf (0) = 0. In addition,

           lim g 0 (k) =    lim sf 0 (k)
           k→0              k→0
                       =    lim sFk (k, 1) + lim s(1 − δ) = ∞,
                            k→0              k→0

and

      lim g 0 (k) =   lim sf 0 (k)
    k→∞               k→∞
                 =    lim sFk (k, 1) + lim s(1 − δ) = s(1 − δ) < 1.
                      k→∞                  k→∞
                           2 / An Overview                               9

    First, we will prove existence of a non-zero stationary point.
    Combining the first limit condition (the one for k → 0) and
g(0) = 0, we have that for an arbitrary small positive perturbation,

                               g(0 + h) − g(0)
                          0<                   .
                                      h
This term tends to +∞ as h → 0, and hence g(h)/h → ∞. Therefore,
there exist an h such that g(h)/h > 1, and hence g(k) > k for some
k small enough. Similarly, the fact that g(k) < k for k large enough
is a direct implication of the second limit condition. Next, define
q(k) = g(k) − k. By the arguments outlined above, q(k) > 0 for k
small enough and q(k) < 0 for k large enough. By continuity of f,
q is also continuous and hence by the Intermediate Value Theorem
there exist a k∗ such that g(k∗ ) = k∗ .
      That the stationary point is unique follows from the strict con-
cavity of g. Note that a continuum of stationary points implies that
g 0 (k) = 1 contradicting the strict concavity of g. A discrete set of sta-
tionary points will imply that one of the stationary points is reached
from below, violating again the strict concavity of g. To see this, de-
fine k ∗ = min {k ∈ R+ : q(k) = 0}. The limit conditions above, and
the fact that g is nondecreasing implies that g(k∗ −ε) > k ∗ , for ε > 0.
Define

k m = min {k ∈ R+ : q(k) = 0, k > k∗ and g(k − ε) − k > 0 for ε > 0} .

    Then, by continuity of g, there exist k ∈ (k∗ , km ) such that g(k) <
k. Let α ∈ (0, 1) be such that k = αk ∗ + (1 − α)k m . Then,

          αg(k∗ ) + (1 − α)g(k m ) = αk∗ + (1 − α)km
                                     = k
                                     > g(k)
                                     = g(αk∗ + (1 − α)km ),

a contradiction.

   b.      In Figure 2.3, we can see how for any k0 > 0, the se-
quence {kt }∞                 ∗
            t=0 converges to k as t → ∞. As can be seen too, this
10                            2 / An Overview

convergence is monotonic, and it does not occur in a finite number
of periods if k0 6= k∗ .


                       Insert Figure 2.3 About Here



Exercise 2.5

    Some notation is needed. Let z t denote the history of shocks
up to time t. Equivalently, z t = (z t−1 , zt ), where zt is the shock in
period t.
    Consumption and capital are indexed by the history of shocks.
They are chosen given the information available at the time the de-
cision is taken, so we represent them by finite sequences of random
                 ©       ªT              ©        ªT
variables c = ct (z t ) t=0 and k = kt (z t ) t=0 .
    The pair (kt , z t ) determines the set of feasible pairs (ct , kt+1 ) of
current consumption and beginning of next period capital stock. We
can define this set as
                  ©                                                               ª
   B(kt , z t ) = (ct , kt+1 ) ∈ R+
                                  2
                                    : ct (z t ) + kt+1 (z t ) ≤ zt f [kt (z t−1 )]

    Because the budget constraint should be satisfied for each t and
for every possible state, Lagrange multipliers are also random vari-
ables at the time the decisions are taken, and they should also be
indexed by the history of shocks, so λt (z t−1 , zt ) is a random variable
representing the Lagrange multiplier for the time t constraint.
    The objective function
                                       (∞                 )
                                        X
                 U (c0 , c1 , ...) = E    β t u[ct (z t )]
                                           t=0

can be written as a nested sequence,
                                                                     
               n
               X                    n
                                     X                                
    u(c0 ) + β   π i u[c1 (ai )] + β   π j [u(c2 (ai , aj ) + β [...]] ,
                                                                     
                i=1                       j=1

where π i stands for the probability that state ai occurs.
                               2 / An Overview                                      11

   The objects of choice are then the contingent sequences c and k.
For instance
                  ©                                                     ª
               c = c0 , c1 (z 1 ), c2 (z 2 ), .., ct (z t ), ..cT (z T ) .

 We can see that c0 ∈ R+ , c1 ∈ Rn+ , c2 ∈ R2n  + , and so on, so the
sequence c belongs to the obvious cross product of the commodity
spaces for each time period t. Similar analysis can be carried out for
the capital sequence
                 ©                                                     ª
              k = k0 , k1 (z 1 ), k2 (z 2 ), .., kt (z t ), ..kT (z T ) .

Define this cross product as S. Hence we can define the consumption
set as
                            ©       £                      ¤
        C(k0 , z0 ) =        c ∈ S : ct (z t ), kt+1 (z t ) ∈ B(kt , z t ),
                            t = 0, 1, ... for some k ∈ S, k0 given.}

(Notice that the consumption set, i.e. the set of feasible sequences,
is a subset of the Euclidean space defined above.)
    The first order conditions for consumption and capital are, re-
spectively, (after cancelling out probabilities on both sides):

                        u0 [ct (zt , z t−1 )] = λt (zt , z t−1 )
       ¡          ¢
for all z t−1 , zt and all t, and
                                   n
                                   X
              λt (zt , z t−1 ) =         π i λt (ai , zjt )f 0 [kt (ai , z t−1 )]
                                   i=1
       ¡          ¢
for all z t−1 , zt and all t.


Exercise 2.6

   As we did before in the deterministic case, we can use the budget
constraint to solve for consumption along the optimal path and then
12                                   2 / An Overview

write the value function as
                                       "∞                                         #
                                        X
                                                  t
            υ(k0 , z0 ) = E0                  β       log(zt ktα − αβzt ktα )
                                        t=0
                                                 "∞                 #
                               log(1 − αβ)         X
                             =             + E0         β t log(zt )
                                 (1 − β)           t=0
                                     "∞              #
                                      X
                               +αE0      β t log(kt ) .
                                              t=0

To obtain an expression in terms of the initial capital stock and the
initial shock we need to solve for the second and third term above.
Denoting E0 (log zt ) = µ, the second term can be written as
              "∞             #              ∞
               X                           X
                     t
           E0     β log(zt ) = log z0 +        β t E0 (log zt )
                   t=0                                            t=0
                                                                   βµ
                                         = log z0 +                   .
                                                                  1−β

In order to solve for the third term, we use the fact that the optimal
path for the log of the capital stock can be written as
                Ã t−1        !                Ã t−1                !
                 X                             X
                         i                                 t−1−i
     log kt =           α        log(αβ) +               α               log(zi ) + αt log k0 .
                  i=0                             i=0

Hence
           "∞                    #             "∞              Ã t−1        !           #
            X                                   X               X
     αE0         β t log(kt )        = αE0                βt             αi log(αβ)
           t=0                                        t=1          i=0
                                                      "∞           µt−1                     ¶#
                                                        X
                                                                  t P       t−1−i
                                        +αE0                  β           α         log(zi )
                                                        t=1         i=0
                                             "∞               #
                                              X
                                        +αE0    (αβ)t log(k0 ) + α log k0 .
                                                        t=1

Therefore, the next step is to solve for each of the terms above. The
                                 2 / An Overview                                                13

first term can be written as
      "∞                     #
       X µt−1       ¶                      X∞     µ    t
                                                         ¶
             t P i                               t 1−α
αE0        β       α log(αβ) = α log(αβ)       β
       t=1     i=0                         t=1
                                                    1−α
                                           ·                ¸
                                 α log(αβ)      β        αβ
                               =                     −
                                  (1 − α) (1 − β) (1 − αβ)
                                    αβ log(αβ)
                               =                  ,
                                 (1 − β)(1 − αβ)
the second term as
           "∞      Ã t−1                !#
            X       X
                 t        t−1−i
       αE0     β         α      log(zi )
                 t=1       i=0
             "                   ∞
                                               Ã t−1                     !#
                                 X              X
   = αE0 β log(z0 ) +                  βt                αt−1−i log(zi )
                                 t=2               i=0
             "                    ∞
                                               Ã                       t−1
                                                                                            !#
                                 X                                     X
                                           t        t−1                      t−1−i
   = αE0 β log(z0 ) +                  β        α         log(z0 ) +         α       log(zi )
                             t=2                                       i=1
                            ∞
                                  Ã t−1                        !
         αβ log(z0 )        X      X
                                t
   =                 +α     β                       αt−1−i µ
         (1 − αβ)       t=2             i=1
                                       ∞
                                       X
         αβ log(z0 )     αµ
   =                 +             β t (1 − αt−1 )
         (1 − αβ)      (1 − α) t=2
         αβ log(z0 )        αβ 2 µ
   =                 +                 ,
         (1 − αβ)      (1 − β)(1 − αβ)
and finally, the last two terms as
                 "∞                #
                  X                               α log k0
                          t
            αE0       (αβ) log(k0 ) + α log k0 =           .
                  t=1
                                                 (1 −  αβ)

Hence,
             "∞                  #
              X                                    αβ log(αβ)     αβ log(z0 )
                       t
       αE0          β log(kt )         =                        +
              t=0
                                                (1 − β)(1 − αβ)   (1 − αβ)
                                                         αβ 2 µ      α log k0
                                                +                  +          ,
                                                    (1 − β)(1 − αβ) (1 − αβ)
14                        2 / An Overview

and
                υ(k0 , z0 ) = A + B log(k0 ) + C log(z0 )
where
          ·                                    ¸
                         αβ log(αβ)      βµ
      A = log(1 − αβ) +             +            (1 − β)−1 ,
                          (1 − αβ)    (1 − αβ)
              α
      B =          , and
          (1 − αβ)
              1
      C =          .
          (1 − αβ)
Following the same procedure outlined in Exercise 2.3, it can be
checked that υ satisfies (3) .


Exercise 2.7

    a.      The sequence of means and variances of the sequence of
logs of the capital stocks have a recursive structure. Define µt as the
mean at time zero of the log of the capital stock in period t. Then
         µt = E0 [log kt ]
             = E0 [log(αβ) + α log(kt−1 ) + log(zt−1 )]
             = log(αβ) + µ + αµt−1
             = log(αβ) + µ + α [log(αβ) + µ] + α2 µt−2
                              £                  ¤
             = [log(αβ) + µ] + 1 + α + ... + αt−1 + αt µ0
               ·                  ¸
                     log(αβ) + µ t log(αβ) + µ
             = µ0 −                 α +              .
                         1−α                1−α
Since 0 < α < 1,
                                      log(αβ) + µ
                    µ∞ ≡ lim µt =                 .
                           t→∞           1−α
   Similarly, define σ t as the variance at time zero of the log of the
capital stock in period t. Then
           σ t = V ar0 [log kt ]
               = V ar0 [log(αβ) + α log(kt−1 ) + log(zt−1 )]
               = α2 σ t−1 + σ,
                            2 / An Overview                                  15

which is also an ordinary diﬀerential equation with solution given by
                       ·             ¸
                                σ              σ
                  σt = σ0 −        2
                                       α2t +        .
                             1−α             1 − α2
Hence, since 0 < α < 1,
                                               σ
                          σ ∞ ≡ lim σ t =           .
                                 t→∞         1 − α2


Exercise 2.8
                                ©           ªT
    First, we will show that c∗t , kt+1 ∗
                                             t=0
                                                 , kT∗ +1 = 0 satisfies the con-
sumer’s intertemporal budget constraint. By (19) and the definition
of f ,
                     f (kt∗ ) = F (kt∗ , 1) + (1 − δ)kt∗ .
Since F is homogeneous of degree one, using (20) − (22) we have that

                f (kt∗ ) = (rt∗ + 1 − δ)kt∗ + wt∗ = c∗t + kt+1
                                                           ∗
                                                               ,

and hence the present value budget constraint (12) is satisfied for the
proposed allocation when prices are given by (20) − (22).
    The feasibility constraint (16) is satisfied by construction. Hence,
in equilibrium, the first order conditions for the representative house-
               e
hold are (for kt+1  > 0)

                          β t U 0 [f (kte ) − kt+1
                                               e
                                                   ] = λpt ,
                    λ[(rt+1 + 1 − δ)pt − pt ] = 0,
                           f (kte ) − cet − kt+1
                                             e
                                                 = 0,

for t = 0, 1, ..., T. Combining them and using (20) − (22) we obtain
            £               ¤        £ ¡ e ¢         ¤ 0 e
        U 0 f (kte ) − kt+1
                        e
                              = βU 0 f kt+1       e
                                              − kt+2  f (kt ),
         f (kte ) − cet − kt+1
                           e
                               = 0,

for t = 0, 1, ..., T , which by construction is satisfied by the proposed
sequence {kt+1∗ }T . Hence {(c∗ , k ∗ )}T , with k ∗                  ∗
                    t=0            t  t+1 t=0           T +1 = 0 and k0 =
x0 solves the consumer’s problem.
16                                   2 / An Overview

    Finally, we need to show that {kt∗ , n∗t = 1}Tt=0 is a maximizing
allocation for the firm. Replacing (21) and (22) in (9) and (10)
together with the definition of f (k) and the assumed homogeneity
of degree 1 of F, we verify that the proposed sequence of prices and
allocations satisfy indeed the first-order conditions of the firm, and
that π = 0.


Exercise 2.9

     Under the new setup, the household’s decision problem is
                                                T
                                                X
                                      max             β t U (ct )
                                 {(ct ,nt )}T
                                            t=0 t=0


subject to
                              T
                              X                T
                                               X
                                     pt ct ≤         pt wt nt + π;
                               t=0             t=0

and
                     0 ≤ nt ≤ 1, ct ≥ 0, t = 0, 1, ..., T.
Similarly, the firm’s problem is
                                                         T
                                                         X
              max             π = p0 (x0 − k0 ) +              pt [yt − wt nt − it ]
         {(kt ,it ,nt )}T
                        t=0                              t=0

subject to

                  it = kt+1 − (1 − δ)kt , t = 0, 1, ..., T ;
                 yt ≤ F (kt , nt ), t = 0, 1, ..., T ;
                 kt ≥ 0, t = 0, 1, ..., T ;
                 k0 ≤ x0 , x0 given.

Hence, x0 can be interpreted as the initial stock of capital and k0 the
stock of capital that is eﬀectively put into production, while kt for
t ≥ 1 is the capital stock that is chosen one period in advance to be
the eﬀective capital allocated into production in period t.
                            2 / An Overview                            17

    As stated in the text, labor is inelastically supplied by house-
holds, prices are strictly positive, and the nonnegativity constraints
for consumption are never binding, so equation (14) in the text is
the first-order condition for the household.
    The first-order conditions for the firm’s problem are (after sub-
stituting both constraints into the objective function)

                                     wt − Fn (kt , nt ) = 0,
               −pt + pt+1 [Fk (kt , nt ) + (1 − δ)] ≤ 0,

for t = 0, 1, ..., T, where the latter holds with equality if kt+1 > 0.
    Evaluating the objective function of the firm’s problem using the
optimal path for capital and labor, we find that first order conditions
are satisfied, and π = p0 x0 so the profits of the firm are given by the
value of the initial capital stock.
    Next, it rest to verify that the quantities given by (17) − (19)
and the prices defined by (20) − (22) constitute a competitive equi-
librium. The procedure is exactly as in Exercise 2.8. In equilibrium,
combining the first-order conditions for periods t and t + 1 in the
household’s problem we obtain

        U 0 [f (kt ) − kt+1 ] = βU 0 [f (kt+1 ) − kt+2 ]f 0 (kt+1 ),
       f (kt ) − ct − kt+1 = 0,

for t = 1, 2, ...T , as before. Hence the proposed sequences constitutes
a competitive equilibrium.


Exercise 2.10

    The firm’s decision problem remains as stated in (8) (that is, as a
series of one-period maximization problems). Let st be the quantity
of one period bonds held by the representative household. Its decision
problem now is
                                              T
                                              X
                              max                     β t U (ct )
                     {(ct ,kt+1 ,st+1 ,nt )}T
                                            t=0 t=0
18                        2 / An Overview

subject to
  ct + qt st+1 + kt+1 ≤ rt kk + (1 − δ)kt + wt nt , t = 0, 1, ..., T ;
                   0 ≤ nt ≤ 1, ct ≥ 0,                      t = 0, 1, ..., T ;
and k0 given.
    We assume, as in the text, that the whole stock of capital is
supplied to the market. Now, instead of having one present value
budget constraint, we have a sequence of budget constraint, one for
each period, and we will denote by β t λt the corresponding Lagrange
multipliers.
    In addition, we need to add an additional market clearing con-
dition for the bond market that must be satisfied in the competitive
equilibrium. This says that bonds are in zero net supply at the stated
prices.
    Hence, the first-order conditions that characterize the house-
hold’s problem are
                                  U 0 (ct ) − λt = 0,
                              −λt qt + βλt+1 = 0,
                 −λt + βλt+1 [rt+1 + 1 − δ] ≤ 0,
                     with equality for kt+1 ≥ 0,
and the budget constraints, for t = 0, 1, ..., T.
    We show next that the proposed allocations {(c∗t , kt+1
                                                        ∗ )}T
                                                              t=0 to-
gether with the sequence of prices given by (21) − (22) and the
pricing equation for the bond, constitute a competitive equilibrium.
Combining the first and second equations evaluated at the proposed
allocation, we obtain the pricing equation
                                    U 0 (c∗t+1 )
                           qt = β                .
                                     U 0 (c∗t )
>From the first-order conditions of the firm’s problem, and after
imposing the equilibrium conditions, rt = Fk (kt∗ , 1)., Combining the
first-order conditions for consumption and capital for the household’s
problem, we obtain
                                           U 0 (c∗t+1 )
                       f 0 (kt+1
                             ∗
                                 )−1 = β                .
                                            U 0 (c∗t )
                        2 / An Overview                           19

The rest is analogous to the procedure followed in Exercise 2.9.
Hence, the sequence of quantities defined by (17) − (19), and the
prices defined by (21) − (22) plus the bond price defined in the text
indeed define a competitive equilibrium.
3 Mathematical Preliminaries

Exercise 3.1

    Given k0 = k, the lifetime utility given by the sequence {kt }∞
                                                                  t=1
in which kt+1 = g0 (kt ) is
                          ∞
                          X
      w0 (k) =                  β t u[f (kt ) − g0 (kt )]
                          t=0
                                                     ∞
                                                     X
                      = u[f (k) − g0 (k)] + β               β t−1 u[f (kt ) − g0 (kt )].
                                                     t=1

But
      ∞
      X                                            ∞
                                                   X
                t−1
            β         u[f (kt ) − g0 (kt )] =             β t u[f (kt+1 ) − g0 (kt+1 )]
      t=1                                           t=0
                                              = w0 (k1 )
                                              = w0 [g0 (k)].

Hence
                        w0 (k) = u[f (k) − g0 (k)] + βw0 [g0 (k)]
for all k ≥ 0.


Exercise 3.2

    a.     The idea of the proof is to show that any finite dimensional
Euclidean space Rl satisfies the definition of a real vector space, using
the fact that the real numbers form a field.

20
                  3 / Mathematical Preliminaries                           21

    Take any three arbitrary vectors x = (x1 , ..., xl ) , y = (y1 , ..., yl )
and z = (z1 , ..., zl ) in Rl . and any two real numbers α and β ∈ R.
Define a zero vector θ = (0, ..., 0) ∈ Rl .
    Define the addition of two vectors as the element by element sum,
and a scalar multiplication by the multiplication of each element
of the vector by a scalar. That any finite Rl space satisfies those
properties is trivial.


a:

        x + y = (x1 + y1 , x2 + y2 , ..., xl + yl )
                = (y1 + x1 , y2 + x2 , ..., yl + xl ) = y + x ∈ Rl .

b:

           (x + y) + z = (x1 + y1 , ..., xl + yl ) + (z1 , ..., zl )
                          = (x1 + y1 + z1 , ..., xl + yl + zl )
                          = (x1 , ..., xl ) + (y1 + z1 , ..., yl + zl )
                          = x + (y + z) ∈ Rl .

c:

     α(x + y) = α(x1 + y1 , ..., xl + yl )
                = (αx1 + αy1 , ..., αxl + αyl )
                = (αx1 , ..., αxl ) + (αy1 , ..., αyl ) = αx + αy ∈ Rl .

d:

               (α + β)x = ((α + β)x1 , ...(α + β)xl )
                            = (αx1 + βx1 , ..., αxl + βxl )
                            = αx + βx ∈ Rl .

e:

               (αβ)x = (αβx1 , ..., αβxl )
                        = α(βx1 , ..., βxl ) = α(βx) ∈ Rl .
22                3 / Mathematical Preliminaries

f:

                    x + θ = (x1 + 0, ..., xl + 0)
                            = (x1 , ..., xl ) = x ∈ Rl .

g:

                       0x = (0x1 , ..., 0xl )
                            = (0, ..., 0) = θ ∈ Rl .

h:

                      1x = (1x1 , ..., 1xl )
                           = (x1 , ..., xl ) = x ∈ Rl .


     b.      Straightforward extension of the result in part a.

    c.     Define the addition of two sequences as the element by
element addition, and scalar multiplication as the multiplication of
each element of the sequence by a real number. Then proceed as
in part a. with the element by element operations. For example,
take property c. Consider a pair of sequences x = (x0 , x1 , x2 , ...) ∈
X = R × R × R... and y = (y0 , y1 , y2 , ...) ∈ X = R × R × R... and
α ∈ R, we just add and multiply element by element, so


          α(x + y) = (α(x0 + y0 ), α(x1 + y1 ), α(x2 + y2 ), ...)
                     = (αx0 + αy0 , αx1 + αy1 , αx2 + αy2 , ...)
                     = αx + αy ∈ X.

The proof of the remaining properties is analogous.

    d.     Take f, g : [a, b] → R and α ∈ R. Let θ(x) = 0. Define
the addition of functions by (f + g) (x) = f (x) + g(x), and scalar
multiplication by (αf ) (x) = αf (x) . A function f is continuous if
                  3 / Mathematical Preliminaries                     23

xn → x implies that f (xn ) → f (x). To see that f + g is continuous,
take a sequence xn → x in [a, b]. Then

           lim (f + g) (xn ) =      lim [f (xx ) + g(xn )]
          xn →x                    xx →x
                               =    lim f (xn ) + lim g(xn )
                                   xn →x          xn →x
                               = f (x) + g(x)
                               = (f + g) (x).

Note that a function defines an infinite sequence of real numbers, so
we can proceed as in part c. to check that each of the properties are
satisfied.

     e.    Take the vectors (0, 1) and (1, 0). Then (1, 0) + (0, 1) =
(1, 1) which is not an element of the unit circle.

    f.     Choose α ∈ (0, 1). Then 1 ∈ I but α1 ∈
                                                / I, which violates
the definition of a real vector space.

   g.      Let f : [a, b] → R+ , and α < 0, then αf ≤ 0, which does
not belong to the set of nonnegative functions on [a, b] .


Exercise 3.3

   a.      Clearly, the absolute value is real valued and well defined
on S × S. Take three diﬀerent arbitrary integers x, y, z. The non-
negativity property holds trivially by the definition of absolute value.
Also,
                ρ(x, y) = |x − y| = |y − x| = ρ(y, x)
by the properties of the absolute value, so the commutative property
holds.
    Finally,

                    ρ(x, z) = |x − z|
                             = |x − y + y − z|
                             ≤ |x − y| + |y − z|
                             = ρ(x, y) + ρ(y, z),
24               3 / Mathematical Preliminaries

so the triangle inequality holds.

     c.    Take three arbitrary functions x, y, z ∈ S. As before, the
first two properties are immediate from the definition of absolute
value. Note also that as x and y are continuous on [a, b] , they are
bounded, and the proposed metric is real valued (and not extended
real valued). To prove that the triangle inequality holds, notice that

         ρ(x, z) =     max |x(t) − z(t)|
                      a≤t≤b
                  =    max |x(t) − y(t) + y(t) − z(t)|
                      a≤t≤b
                  ≤    max (|x(t) − y(t)| + |y(t) − z(t)|)
                      a≤t≤b
                  ≤    max |x(t) − y(t)| + max |y(t) − z(t)|
                      a≤t≤b                  a≤t≤b
                  = ρ(x, y) + ρ(y, z).


    f.     The first two properties follow by definition of absolute
value as before, plus the fact that f (0) = 0, so x = y implies ρ(x, y) =
0. In order to prove the last property, notice that

             ρ(x, y) = f (|x − y|) = f (|x − z + z − y|)
                      ≤ f (|x − z| + |z − y|)
                      ≤ f (|x − z|) + f (|z − y|)
                      = ρ(x, z) + ρ(z, y),

where the first inequality comes from the fact that f is strictly in-
creasing and the second one from the concavity of f. To see the last
point, without loss of generality, define |x − z| = a and |z − y| = b,
with a < b and let µ = a/b. By the strict concavity of f,

                   f (b) > µf (a) + (1 − µ)f (a + b),

and hence
                               b               a
               f (a + b) <          f (b) −         f (a)
                            (b − a)         (b − a)
                          < f(b) + f (a).
                  3 / Mathematical Preliminaries                                                        25

Exercise 3.4

    a.      The first property in the definition of a normed vector
space is evidently satisfied for the standard Euclidean norm, given
that it is just the sum of squared numbers, where each component
of the sum is an element of an arbitrary vector x ∈ Rl . It is zero if
and only if each component is zero. To prove the second property,
notice that
                       l
                       X              l
                                      X
            kαxk2 =      (αxi )2 = α2   xi 2 = α2 kxk2 ,
                       i=1                          i=1

which implies that
                                kαxk = |α| kxk ,
by property a. To prove the triangle inequality, we make use of
the Cauchy-Schwarz inequality, which says that given two arbitrary
vectors x and y,
                      Ã l               !2       l             l
                       X                         X             X
                                xi yi        ≤           x2i         yi2 .
                       i=1                       i=1           i=1

Hence,
                    l
                    X
              2
      kx + yk     =   (xi + yi )2
                      i=1
                      Xl                 l
                                         X                     l
                                                               X
                  ≤         x2i + 2              xi yi +             yi2
                      i=1                i=1                   i=1
                      l
                                         Ã l             ! 12 Ã l                ! 12       l
                      X                   X                    X                            X
                  ≤         x2i + 2                x2i                     yi2          +         yi2
                      i=1                    i=1                    i=1                     i=1
                            2                                   2
                  = kxk + 2 kxk kyk + kyk
                  = (kxk + kyk)2 .


    d.      As we consider only bounded sequences, the propsed norm
is real valued (and not extended real valued). To see that the first
26               3 / Mathematical Preliminaries

property holds, note that since |xk | ≥ 0, all k, kxk = supk |xk | ≥ 0,
and if xk = 0, all k, kxk = supk |xk | = 0. The second property holds
because

                         kαxk = sup |αxk |
                                        k
                                 = sup |α| |xk |
                                        k
                                 = |α| sup |xk |
                                            k
                                 = |α| kxk .

To see that the triangle inequality holds notice that

                    kx + yk = sup |xk + yk |
                                    k
                              ≤ sup(|xk | + |yk |)
                                    k
                              ≤ sup |xk | + sup |yk |
                                    k           k
                              = kxk + kyk .

    e.      We prove already that C [a, b] is a vector space (see Ex-
ercise 3.2 d.). To see that property a. is satisfied, let x ∈ C [a, b].
Then |x (t)| ≥ 0 for all t ∈ [a, b] . Hence supa≤t≤b |x (t)| ≥ 0, and if
x (t) = 0 for all t ∈ [a, b] , then supa≤t≤b |x (t)| = 0. To check that the
remaining properties are satisfied, we proceed as in part d.


Exercise 3.5

    a.      If xn → x, for each εx > 0, there exist Nεx such that
ρ(xn , x) < εx , for all n ≥ Nεx . Similarly, if xn → y, for each εy > 0,
there exist Nεy such that ρ(xn , y) < εy , for all n ≥ Nεy . Choose
εx = εy = ε/2. Then, by the triangle inequality,

                   ρ(x, y) ≤ ρ(xn , x) + ρ(xn , y) < ε
               ©          ª
for all n ≥ max Nεx , Nεy . As ε was arbitrary, this implies ρ (x, y) =
0 which implies, since ρ is a metric, that x = y.
                 3 / Mathematical Preliminaries                     27

    b.      Suppose {xn } converges to a limit x. Then, given any ε >
0, there exist an integer Nε such that ρ(xn , x) < ε/2 for all n > Nε .
But then ρ(xn , xm ) ≤ ρ(xn , x) + ρ(xm , x) < ε for all n, m > Nε .

   c.      Let {xn } be a Cauchy sequence and let ε = 1. Then, ∃ N
such that for all n, m ≥ N,

                            ρ(xm , xn ) < 1.

Hence, by the triangle inequality,

                 ρ (xn , 0) ≤ ρ (xm , xn ) + ρ (xm , 0)
                           < 1 + ρ (xm , 0) ,

and therefore ρ (xn , 0) ≤ 1 + ρ (xN , 0) for n ≥ N. Let

           M = 1 + max {ρ (xm , 0) , m = 1, 2, ..., N } + 1,

then ρ (xm , 0) ≤ M for all n, so the Cauchy sequence {xn } is bounded.

    d.     Suppose that every subsequence of {xn } converges to x.
We will prove the contrapositive. That is, if xn does not converge
to x, there exist a subsequence that does not converge. If xn does
not converge to x, there exist ε > 0 such that for all N , there exist
n > N with |xn − x| > ε. Using this repeatedly, we can construct a
sequence {xnk } such that |xnk − x| > ε for all nk .
    Conversely, suppose xn → x. Let {xni } be a subsequence of {xn }
with n1 < n2 < n3 < .... Then, since ρ(xn , x) < ε for all n ≥ Nε , it
holds that ρ(xni , x) < ε for all ni ≥ Nε .


Exercise 3.6

    a.      The metric space in 3.3a. is complete. Let {xn } be a
Cauchy sequence, with xn ∈ S for all n. Choose 0 < ε < 1, then
there exist Nε such that |xm − xn | < ε < 1 for all n, m ≥ Nε . Hence,
xm = xn ≡ x ∈ S for all n, m ≥ Nε .

   The metric space in 3.3b. is complete. Let {xn } be a Cauchy
sequence, with xn ∈ S for all n. Choose 0 < ε < 1, then there exist
28               3 / Mathematical Preliminaries

Nε such that ρ(xm , xn ) < ε < 1 for all n, m ≥ Nε . By the functional
form of the metric used ρ(xm , xn ) < 1 implies that xm = xn ≡ x ∈ S
for all n, m ≥ Nε .

    The normed vector space in 3.4a. is complete. Let {xn } be a
Cauchy sequence, with xn ∈ S for all n, and let xkn be the kth entry
of the nth element of the sequence. Then
                             Ã l               ! 12
                              X
                kxm − xn k =     (xkm − xkn )2
                                    k=1
                                µ                    ¶1
                                                      2
                                          k      k 2
                              ≤   l max(xm − xn )
                                     k
                                       ¯         ¯
                                       ¯         ¯
                              ≤ l max ¯xkm − xkn ¯
                                     k
                               © ª
for k = 1, ..., l, and hence ©xkn ª is a Cauchy sequence for all k. As
shown in Exercise 3.5 b., xkn is bounded for all k, and by the
Bolzano-Weierstrass Theorem, every bounded sequence in R has a
convergent subsequence. Hence, using the result proved in Exercise
3.5 d., we can conclude that a sequence in R converges if and only if it
is a Cauchy sequence. Define xk = limn→∞ xkn , for all k. Since R is a
closed set, clearly x = (x1 , ..., xl ) ∈ S. ¯To show¯ that kxn − xk → 0 as
n → ∞, note that kxm − xk ≤ l maxk ¯xkn − xk ¯ → 0 which completes
the proof.

   The normed vector spaces in 3.4b. and 3.4c. are complete. The
proof is the same as that outlined in the paragraph above, with the
obvious modifications to the norm.

    The normed vector space in 3.4d. is complete. Let {xn } be a
Cauchy sequence, with xn ∈ S for all n. Note that xn is a bounded
sequence and hence {xn } is a sequence of bounded sequences. Denote
by xkn¯ the kth element
                 ¯    ¯ of the bounded
                                 ¯        sequence xn . Then kxm − xn k =
supk ¯¯xkm − xkn ¯¯ ≥ ¯xkm − xkn ¯ for all k. Hence kxm − xn k → 0 im-
plies ©¯xkmª− xkn ¯ → 0 for all k and so the sequences of real num-
bers xkn are Cauchy sequences. Then, by the completeness of the
real numbers, for each k there exist a real number xk such that
                   3 / Mathematical Preliminaries                            29

                                                     © ª
xkn → xk . Since {xn } is bounded, so is xkn for all k. Hence
¯x =  (x1 , ¯x2 , ...)
                   ¯ ∈ S. To¯ show ¯ that x¯n → x, by the triangle inequality,
¯xn − xk ¯ ≤ ¯xkn − xkm ¯ + ¯xkm − xk ¯ for all k. Pick Nε such that for
   k
                      ¯ k       ¯
all  n, m    ≥  N,    ¯xn − xkm ¯ < ε/2 for all k. Hence for m large enough
 ¯ k         ¯                   ¯       ¯                  ¯        ¯
 ¯xm − xk ¯ < ε/2 and so ¯xkn − xk ¯ < ε implies supk ¯xkn − xk ¯ < ε.

   The normed vector space in 3.4e. is complete. Let {xn } be a
Cauchy sequence of continuous functions in C [a, b] and fix t ∈ [a, b].
Then

               |xn (t) − xm (t)| ≤       sup |xn (t) − xm (t)|
                                        a≤t≤b
                                   = kxn − xm k

and therefore the sequence of real numbers {xn (t)} satisfies the Cauchy
criterion. By the completeness of the real numbers x (t) → x(t) ∈ R.
The limiting values define a function x : [a, b] → R, which is taken
as our candidate function.
    To show that xn → x, pick an arbitrary t, then

          |xn (t) − x(t)| ≤ |xn (t) − xm (t)| + |xm (t) − x(t)|
                            ≤ kxn − xm k + |xm (t) − x(t)| .

Since {xn } is a Cauchy sequence, there exist N such that for all
n, m ≥ N, kxn − xm k < ε/2 and |xm (t) − x(t)| < ε/2. Therefore,
|xn (t) − x(t)| < ε. Because t was arbitrary, it holds for all t ∈ [a, b] .
Hence supa≤t≤b |xn (t) − x(t)| < ε and so xn → x.
     It remains to be shown that x is a continuous function. A func-
tion x(t) is continuous in t if for all ε, there exist a δ such that
|t − t0 | < δ implies |x(t) − x(t0 )| < ε. By the triangle inequality,
   ¯             ¯                     ¯                 ¯ ¯                   ¯
   ¯x(t) − x(t0 )¯ ≤ |x(t) − xn (t)| + ¯xn (t) − xn (t0 )¯ + ¯xn (t0 ) − x(t0 )¯

for any t, t0 ∈ [a, b] . Fix ε > 0, since xn → x there exist N such that

                            |x(t) − xn (t)| < ε/3

for all n ≥ N, and N 0 such that
                        ¯ 0              ¯
                        ¯x(t ) − xn (t0 )¯ < ε/3
30               3 / Mathematical Preliminaries

for all n ≥ N 0 . Since xn is continuous, there exist δ such that for all
t, t0 , |t − t0 | < δ,   ¯                 ¯
                         ¯xn (t) − xn (t0 )¯ < ε/3.
Hence |x(t) − x(t0 )| < ε.

    The metric space in 3.3c. is not complete. To prove this, it is
enough to find a sequence of continuous, strictly increasing functions
that converges to a function that is not in S. Consider the sequence
of functions
                                              t
                               xn (t) = 1 + ,
                                              n
for t ∈ [a, b] . Pick any arbitrary m. Then
                                             ¯          ¯
                                             ¯t      t ¯¯
                     ρ(xn , xm ) = max ¯ − ¯ ¯
                                       a≤t≤b n      m
                                             ¯            ¯
                                             ¯ t(m − n) ¯
                                  = max ¯    ¯            ¯
                                       a≤t≤b     nm ¯
                                       ¯          ¯
                                       ¯ b(n − m) ¯
                                  = ¯¯            ¯
                                            nm ¯
                                             1
                                  ≤                 .
                                       min {n, m}
Notice that ρ(xn , xm ) → 0 as n, m → ∞. But clearly xn (t) → x(t) =
1, a constant function.
    From the proof it is obvious that this counterexample does not
work for the weaker requirement of nondecreasing functions.

    The metric space in 3.3d. is not complete. The proof similar to
3.3c. and the same counter-example works in this case, with obvious
modifications for the distance function.

   The metric space in 3.3e. is not complete. The set of rational
number is defined as
                           np                    o
                      Q=       : p, r ∈ Z, r 6= 0
                             r
where Z is the set of integers. Let
                                        n
                                        X 1
                             xn = 1 +              .
                                              i!
                                        i=1
                   3 / Mathematical Preliminaries                             31

Clearly xn is a rational number, however xn → e ∈
                                                / Q.

    The metric space in 3.4f. is not complete. Take the function
                                  µ     ¶
                                    t−a n
                        xn (t) =           .
                                    b−a
First, assume a = 0, b = 1, and m > n. Hence
                                  Z 1
             kxn (t) − xm (t)k =      (tn − tm ) dt
                                   0
                                  Z 1
                                         ¡          ¢
                               =      tn 1 − tn−m dt
                                   0
                                  Z 1
                               ≤      tn dt → 0
                                           0

But the sequence of functions xn (t) → 0 for 0 ≤ t < 1, and 1 for
t = 1, a discontinuous function at 1.

     In order to show that the space in 3.3c. is complete if “strictly
increasing” is replaced by “nondecreasing”, we can prove the exis-
tence of a limit sequence as we did before. It is left to prove that
the limit sequence is nondecreasing. The proof is by contradiction.
Take a Cauchy sequence fn of nondecreasing functions converging to
f , and contrary to the statement, suppose f (t) − f (t0 ) > ε for t0 > t.
Hence,

0 < ε < f(t) − f (t0 ) = f (t) − fn (t) + fn (t) − fn (t0 ) + fn (t0 ) − f (t0 ).

Using the fact that for every t, {fn (t)} converges to f (t),

                   0 < ε < 2 kfn − f k + fn (t) − fn (t0 ).

Choosing Nε such that for all n ≥ Nε , kfn − f k ≤ ε/2, we get

                           0 < ε < fn (t) − fn (t0 ),

a contradiction.

   b.      Since S 0 ⊆ S is closed, any convergent sequence in S 0
converges to a point in S 0 . Take the set of Cauchy sequences in S.
32                 3 / Mathematical Preliminaries

They all converge to points in S since S is complete. Take the subset
of those sequences that belong to S 0 , then by the argument above
they converge to a point in S 0 , so S 0 is complete.


Exercise 3.7

     a.     First we have to prove that C 1 [a, b] is a normed vector
space. By definition of absolute value, the non-negativity property
is clearly satisfied,
                              ©          ¯       ¯ª
                    kf k = sup |f (x)| + ¯f 0 (x)¯ ≥ 0.
                            x∈X

To see that the second property is satisfied, note that
                             ©             ¯      ¯ª
               kαf k = sup |αf (x)| + ¯αf 0 (x)¯
                         x∈X
                             © £               ¯    ¯¤ª
                      = sup |α| |f (x)| + ¯f 0 (x)¯
                         x∈X
                                 ©           ¯    ¯ª
                      = |α| sup |f (x)| + ¯f 0 (x)¯
                                  x∈X
                          = |α| kf k .

The triangle inequality is satisfied, since
                      ©                  ¯              ¯ª
   kf + gk = sup |f (x) + g(x)| + ¯f 0 (x) + g 0 (x)¯
                 x∈X
                      ©                    ¯   ¯ ¯         ¯ª
              ≤ sup |f (x)| + |g(x)| + ¯f 0 (x)¯ + ¯g 0 (x)¯
                 x∈X
                      ©           ¯     ¯ª      ©            ¯ ¯ª
              ≤ sup |f (x)| + ¯f 0 (x)¯ + sup |g(x)| + ¯g 0 (x)¯
                    x∈X                        x∈X
                 = kf k + kgk .

Hence, C 1 [a, b] is a normed vector space.
   Let {fn } be a Cauchy sequence of functions in C 1 [a, b] . Fix x,
then                          ¯                ¯
          |fn (x) − fm (x)| + ¯fn0 (x) − fm
                                          0
                                            (x)¯ ≤ kfn − fm k ,
and
         ½                                                ¾
                                     ¯                ¯
     max sup |fn (x) − fm (x)| , sup ¯fn0 (x) − fm
                                                 0
                                                   (x)¯       ≤ kfn − fm k ,
           x∈X                    x∈X
                 3 / Mathematical Preliminaries                          33

therefore the sequences of numbers {fn (x)} and {fm      0 (x)} converge

and the limit values define the functions f : X → R and f 0 : X →
R. The proof is similar to the one outlined in Theorem 3.1, and
repeatedly used in Exercise 3.6. It follows that f 0 is continuous. Our
candidate for the limit is the function f defined by

                            f (a) = lim fn (a),
                                   n→∞

and                                     Z x
                      f (x) = f (a) +         f 0 (z)dz.
                                         0
It is clear that f is continuously diﬀerentiable, so that f ∈ C 1 .
     To see that kfn − f k → 0 note that
                                              ¯              ¯
    kfn − f k ≤ sup |fn (x) − f (x)| + sup ¯fn0 (x) − f 0 (x)¯
                    x∈X                   x∈X
                         ¯       Z x                   Z x           ¯
                         ¯                                           ¯
                         ¯
                ≤ sup ¯fn (a) +        0
                                     f (z)dz − f (a) −      f (z)dz ¯¯
                                                             0
                    x∈X           0                     0
                           ¯ 0           ¯
                           ¯         0
                    + sup fn (x) − f (x) ¯
                      x∈X
                                      Z b
                                        ¯ 0              ¯
               ≤ |fn (a) − f (a)| +     ¯fn (z) − f 0 (z)¯ dz
                         ¯ 0          0
                                        ¯
                         ¯
                 + sup fn (x) − f (x)¯
                                    0
                   x∈X
                                                 ¯                ¯
               ≤ |fn (a) − f (a)| + (b + 1) sup ¯fn0 (x) − f 0 (x)¯ .
                                                 x∈X

Since {fn (a)} → f (a), and {fn0 } → f 0 uniformly, both terms go to
zero as n → ∞.

    b.      See part c.

    c.     Consider C k [a, b], the space of k times continuously diﬀer-
entiable functions on [a, b], with the norm given in the text. Clearly
αi ≥ 0 is needed for the norm to be well defined.
    If αi > 0, all i, then the space is complete. The proof is a
trivial adaptation of the one presented in a. However, if αj = 0,
for any j, then the space is not complete. To see this choose a
function h : [a, b] → [a, b] that is continuous, satisfies h(a) = a
34              3 / Mathematical Preliminaries

and h(b) = b,and is (k − j) times continuously diﬀerentiable, with
hi (a) = hi (b) = 0, i = 1, 2, ..., k − j.
     Then consider the following sequence of functions
                             
                              a           if x < na
                   fnj (x) =      h(nx) if na ≤ x ≤ nb
                             
                                  b        if x > nb
and                           Z x
                fni−1 (x) =         fni (z)dz,   i = 1, ..., j
                               0
Each function fn is k times continuously diﬀerentiable. However,
the limiting function f has a discontinuous j-th derivative.
    So an example to be applied to part b. would be, for instance,
X = [−1, 1] and
                          
                           −1 if x < − n1
                   0
                 fn (x) =    nx if − n1 ≤ x ≤ n1
                          
                             1    if x > n1 .
Hence                 
                       −x                 if x < − n1
                         1
             fn (x) =      + n x2          if − n1 ≤ x ≤ n1
                       2n 2
                        x                  if x > n1 .
This sequence is clearly not Cauchy in the norm of part a.


Exercise 3.8

    The function T : S → S is uniformly continuous if for every ε > 0
there exist a δ > 0 such that for all x and y in S with |x − y| < δ we
have that |T x − T y| < ε.
    If T is a contraction, then for some β ∈ (0, 1)
         |T x − T y|
                     ≤β<1                all x, y ∈ S with x 6= y.
           |x − y|
Hence to prove that T is uniformly continuous in S, let δ ≡ ε/β, then
for any arbitrary ε > 0, if |x − y| < δ then

                  |T x − T y| ≤ β |x − y| < βδ = ε.
                 3 / Mathematical Preliminaries                          35

Hence T is uniformly continuous.


Exercise 3.9

    Observe that

         ρ(T n υ 0 , υ) ≤ ρ(T n υ 0 , T n+1 υ 0 ) + ρ(T n+1 υ 0 , υ)
                        = ρ(T n υ 0 , T n+1 υ 0 ) + ρ(T n+1 υ 0 , T υ)
                        ≤ ρ(T n υ 0 , T n+1 υ 0 ) + βρ(T n υ 0 , υ),

where the first line uses the triangle inequality, the second the fact
that υ is the fixed point of T , and the third line follows from the
Contraction Mapping Theorem. Rearranging terms this implies that
                                     1
                 ρ(T n υ 0 , υ) ≤       ρ(T n υ 0 , T n+1 υ 0 ).
                                    1−β


Exercise 3.10

    a.     Since υ is bounded, the continuous function f is bounded,
say by M , on [− kυk , + kυk]. Hence

                          |(T υ)(s)| ≤ |c| + sM,

so T υ is bounded on [0, t]. Since
                             Z s
                                 f [υ (z)] dz
                                0

is continuous for all f , T υ is continuous.

   b.      Let w, v ∈ C (0, t) ,and let B be their common bound.
Note that
                                 Z s
          |T υ(s) − T w(s)| ≤         |f (υ(z)) − f (w(z))| dz
                                 Z0 s
                            ≤         B |υ(z) − w(z)| dz
                                        0
                                ≤ Bs kυ − wk .
36               3 / Mathematical Preliminaries

Choose τ = β/B, where 0 < β < 1, then 0 ≤ s ≤ τ implies that
Bs kυ − wk ≤ β kυ − wk .

     c.     The fixed point is x ∈ C[0, τ ], such that
                                  Z s
                      x(s) = c +      f [x(z)]dz.
                                    0

Hence, for 0 ≤ s, s0 ≤ τ ,
                          Z s
      x(s) − x(s´) =          f [x(z)]dz
                           s0
                     = f [x (ẑ)](s − s´),   for some ẑ ∈ [s, s0 ].

Therefore
                        x(s) − x(s0 )
                                      = f [x(ẑ)].
                           s − s0
Let s0 → s, then ẑ → s, and so x0 (s) = f [x(s)].


Exercise 3.11

    a.      We have to prove that Γ is lower hemi-continuous (l.h.c.)
and then the result follows by the definition of a continuous corre-
spondence. Towards a contradiction, assume Γ is not lower hemi-
continuous. Then, for all ε > 0, and any N , ∃ n > N such that
|yn − y| > ε. Construct a subsequence {ynk } from these and con-
sider the corresponding subsequence{xnk } where ynk ∈ Γ (xnk ). As
xn → x, {xnk } → x. But as Γ is upper hemi-continuous (u.h.c.),
there exist ynkj → y, a contradiction.

    c.     That Γ is compact comes from the fact that a finite union
of compact sets is compact. To show that Γ is u.h.c., fix x and
pick any arbitrary xn → x and {yn } such that yn ∈ Γ(xn ). Hence
yn ∈ φ(xn ) or yn ∈ ψ(xn ), and therefore there is a subsequence
of {yn } whose elements belong to φ(xn ) and/or na subsequence
                                                      o             of
                                                                    o
                                                    φ             ψ
{yn } whose elements belong to ψ(xn ). Call them ynk     and    ynk
respectively. By φ and ψ u.h.c., those sequences have a convergent
                 3 / Mathematical Preliminaries                        37

subsequence that converges to y ∈nφ(x)o or ψ(x)n respectively.
                                                    o            By
                                       φ          ψ
construction, those subsequences of ynk and ynk are convergent
subsequences of {yn } that converge to y ∈ Γ(x), which completes the
proof.

    e.      For each x, the set of feasible y’s is compact. Similarly,
for each y, the set of feasible z’s is compact. Hence, for each x, Γ is
a finite union of compact sets, which is compact.
    To see that Γ is u.h.c., pick any arbitrary xn → x and ({zn } , {yn })
such that zn ∈ ψ(yn ) for yn ∈ φ(xn ). By φ u.h.c. there is a convergent
subsequence of {yn } whose limit point is in φ(x).
    Take this convergent subsequence of {yn } . Call it {ynk } . By ψ
u.h.c. any sequence {znk } with znk ∈ ψ(ynk ) has a convergent sub-
sequence that converges to z ∈ ψ(y).
    Hence, {znk } is a convergent subsequence of {zn } that converges
to z ∈ Γ(x).


Exercise 3.12

    a.     If Γ is l.h.c. and single valued, then Γ is nonempty and
for every y ∈ Γ(x) and every sequence xn → x, the sequence {yn }
with yn = Γ(xn ) converges to y. Hence Γ is a continuous function.

    c.     Fix x. Clearly Γ(x) is nonempty if φ or ψ are l.h.c. To
show that Γ is l.h.c., pick any arbitrary y ∈ Γ(x) and a sequence
xn → x. By definition, either y ∈ φ(x), or y ∈ ψ(x) or both. Hence,
by φ and ψ l.h.c., there exist N ≥ 1 and a sequence {yn } such that
yn ∈ φ(xn ) or yn ∈ ψ(xn ) for all n ≥ N, so {yn } is a sequence such
that yn ∈ Γ(xn ) and yn → y for all n ≥ N. Hence, Γ(x) is l.h.c. at
x. Because x was arbitrary chosen, the proof is complete.

   e.      It is clear that Γ is nonempty if φ and ψ are nonempty.
Pick any z ∈ Γ(x) and a sequence xn → x. The objective is to find
N ≥ 1 and a sequence {zn }∞    n=N → z such that zn ∈ Γ(xn ). To
construct such a sequence, note that if z ∈ Γ(x), then z ∈ ψ(y) for
some y ∈ φ(x). So pick any y ∈ φ(x) such that z ∈ ψ(y).
38              3 / Mathematical Preliminaries

   By φ l.h.c. there exist N1 ≥ 1 and {yn } n  suchothat yn → y and
yn ∈ φ(xn ) for all n ≥ N1 . Call this sequence ynφ .
                     n o
   By ψ l.h.c., for ynφ → y, there exist N2 ≥ 1 and {zn } such that
zn → z and zn ∈ φ(ynφ ) for all n ≥ N2 . Take N = max {N1 , N2 }.
Hence, Γ(x) is l.h.c. at x. Because x was arbitrary chosen, the proof
is complete.


Exercise 3.13

     a.    Same as part b. with f (x) = x.

   b.     Choose any x. Since 0 ∈ Γ(x), Γ(x) is nonempty. Choose
any y ∈ Γ(x) and consider the sequence xn → x. Let γ ≡ y/f (x) ≤
1 and yn = γf (xn ). Then yn ∈ Γ(xn ), all n ≥ 1, and using the
continuity of f

                 lim yn = γ lim f (xn ) = γf (x) = y.

Hence Γ is l.h.c. at x.
    Given x, [0, f (x)] is compact and hence Γ(x) is compact-valued.
Take arbitrary sequences xn → x and yn ∈ Γ(xn ). Define ² =
supxn kxn − xk and let N (x, ²) denote the closed ²−neighborhood
of x. Since the set
                           £   ¤              ¡ ¢
                  {z : z ∈ 0, f , f = max f x0 },
                                    x0 ∈N(x,²)

is compact, there exists a convergent subsequence of yn call it ynk
with lim ynk ≡ y. Since ynk ≤ f (xnk ) all k, we know that y ≤ f (x)
by the continuity of f and standard properties of the limit. Hence
y ∈ Γ(x) and Γ is u.h.c. at x.
    Since x was chosen arbitrarily, Γ is a continuous correspondence.

     c.    Since the set
                    (                       )
                      ³             ´ X
                                      l
                         1        l      i
                        x , ..., x :    x ≤x ,
                                    i=1
                 3 / Mathematical Preliminaries                         39

is compact, fix (x1 , ..., xl ) and proceed coordinate by coordinate using
the proof in b. with f (x) = fi (xi , z).


Exercise 3.14

    a.      Same as part b., with the following exceptions. Suppose
x 6= 0; let 0 play the role of ŷ (since H(x, 0) > H(0, 0) = 0), and
use monotonicity rather than concavity to establish all the necessary
inequalities. For x = 0, use monotonicity and the fact that the
sequence {xn } must converge to x = 0 from above.

    b.       We prove first that Γ is l.h.c. Fix x. Choose y ∈ Γ(x) and
{xn } → x. We must find a sequence {yn } → y such that yn ∈ Γ(xn ),
all n.
    Suppose that H(x, y) > 0. Since H is continuous, it follows that
for some N , H(xn , y) > 0, all n ≥ N. Then the sequence {yn }∞    n=N
with yn = y, n ≥ N , has the desired property.
    Suppose that H(x, y) = 0. By hypothesis there exists some ŷ
such that H(x, ŷ) > 0. Since H is continuous, there exists some
N such that H(xn , ŷ) > 0, all n ≥ N. Define y λ = (1 − λ)y + λŷ,
λ ∈ [0, 1]. Then for each n ≥ N, define
                           n                          o
                λn = min λ ∈ [0, 1] : H(xn , y λ ) ≥ 0 .

Since H(xn , y1 ) = H(xn , ŷ) > 0, the set on the right is nonempty;
clearly it is compact. Hence the minimum is attained.
    Next note that {λn } → 0. To see this, notice that by the concavity
of H,

     H(x, yζ ) ≥ (1 − ζ)H(x, y) + ζH(x, ŷ) > 0,      all ζ ∈ (0, 1].

Hence, for any ζ, there exist Nζ such that H(x, yζ ) ≥ 0, all n ≥ Nζ .
Therefore λn ≤ ζ, for all n ≥ Nζ . Hence {λn } → 0. Therefore,
the sequence yn = y λn , n ≥ N , has the desired properties. By
construction, H(xn , yn ) ≥ 0, all n, so yn ∈ Γ(xn ), all n, and since
{λn } → 0, it follows that {yn } → y.
    Next, we prove that Γ is u.h.c. Choose {xn } → x and {yn } such
that yn ∈ Γ(xn ), all n. We must show that there exist a convergent
40                3 / Mathematical Preliminaries

subsequence of {yn } whose limit point y is in Γ(x). It suﬃces to
show that the sequence {yn } is bounded. For if it is, then it has
a convergent subsequence, call it {ynk } , with limit y. Then, since
H(xnk , ynk ) ≥ 0, all k, {(xnk , ynk )} → (x, y), and H is continuous, it
follows that H(x, y) ≥ 0.
     Let k·k denote the Euclidean norm in Rm .Choose M < ∞ such
that kyk < M, all y ∈ Γ(x). Since Γ(x) is compact, this is possi-
ble. Suppose {yn } is not bounded. Then, there exist a subsequence
{ynk } such that N < n1 < n2 ... and kyk > M + k, all k. Define
S = {y ∈ Rm : kyk = M + 1} , which is clearly a compact set. Since
kŷk < M , and kynk k > M + k, all k, for any element in the sequence
{ynk } , there exists a unique value λ ∈ (0, 1) such that

                 kỹnk k = kλynk + (1 − λ)ŷk + M + 1.
    Moreover, since H(xnk , ŷ) > 0 and H(xnk , ynk ) ≥ 0, it follows
from the concavity of H that H(xnk , ỹnk ) > 0, all k. Since by con-
struction the sequence {ỹnk } lies in the compact set S, it has a con-
vergent subsequence; call this subsequence {ỹj } and call its limit
point ỹ. Note that since ỹ ∈ S, kỹk = M + 1. Along the chosen
subsequence, H(xj , ỹj ) > 0, all j; and {(xj , ỹj )} → (x, ỹ). Since H is
continuous, this implies that H(x, ỹ) ≥ 0. But then kỹk = M + 1, a
contradiction.

     c.     The correspondence can be written in this case as

              Γ(x) = {y ∈ R : H(x, y) ≥ 0}
                     = {y ∈ R : 1 − max {|x| , |y|} ≥ 0} .

It can be checked that, at x = 1, Γ(x) is not lower hemi-continuous.
Notice that Γ(1) = [−1, +1], which is compact and has a nonempty
interior, but Γ(1 + 1/n) = 0, for all n > 0.


Exercise 3.15

   Let {xn , yn } be a sequence in A. We need to show that this se-
quence has a convergent subsequence. Because X is compact, the
sequence {xn } has a convergent subsequence, say {xnk } converging
                3 / Mathematical Preliminaries                     41

to x ∈ X. Because Γ is u.h.c., every sequence xn → x ∈ X, has an
associated sequence {yn } such that yn ∈ Γ(xn ), all n, with a con-
vergent subsequence, say {ynk } whose limit point y ∈ Γ(x). Then,
{(xn , yn )} ∈ A, has a convergent subsequence with limit (x, y) .


Exercise 3.16

   a.      The correspondence G is
                  ½                             ¾
                                   2          2
        G(x) =     y ∈ [−1, 1] : xy = max xỹ
                                        ỹ∈[−1,1]
               = {y ∈ [−1, 1] : y = 0 for x < 0,
                   y ∈ [−1, 1] for x = 0, y = ±1 for x > 0} .

   Thus, G(x) can be drawn as shown in Figure 3.1.


                   Insert Figure 3.1 About Here.


Then, G(x) is nonempty, and it is clearly compact valued. Further-
more, A, the graph of G, is closed in R2 since it is a finite union of
closed sets. Hence, by Theorem 3.4, G(x) is u.h.c.
    To see that G(x) is not l.h.c. at x = 0, choose an increasing
sequence {xn } → x = 0 and y = 1/2 ∈ G(0). In this case, any {yn }
such that yn ∈ G(xn ) implies that yn = 0, so {yn } → 0 6= 1/2.

   b.       Let be X = R.

   Then,
                     © ©                              ªª
   h(x) =     max max 2 − (y − 1)2 , x + 1 − (y − 2)2
             y∈[0,4]
                   ½                                       ¾
                                 2                       2
           = max max [2 − (y − 1) ], max [x + 1 − (y − 2) ]
                    y∈[0,4]              y∈[0,4]
           = max {2, x + 1}
42                  3 / Mathematical Preliminaries

Hence,                        ½
                                  2         if x ≤ 1
                     h(x) =
                                  x+1      if x > 1
Then,

          G(x) = {y ∈ [0, 4] : y = 1 for x < 1,
                       y ∈ {1, 2} for x = 1, y = 2 for x > 1} ,

which is represented in Figure 3.2.


                      Insert Figure 3.2 About Here


Evidently, G(x) is nonempty and compact valued. Further, its graph
is closed in R2 since the graph is given by the union of closed sets.
Thus, G(x) is u.h.c.
    However, G(x) is not l.h.c. at x = 1. To see this, let {xn } → 1
for xn > 1 and y = 1 ∈ G(1). It is clear that any sequence {yn } such
that yn ∈ G(xn ) converges to 2 6= 1.

     c.     Here,

                       h(x) = max {cos(y)} = 1
                                  −x≤y≤x

and hence
                    G(x) = {y ∈ [−x, x] : cos(y) = 1} .
    Then, since cos(y) = 1 for y = ±2nπ, where n = 0, 1, 2, ..., the
correspondence G(x) can be depicted as in Figure 3.3.


                      Insert Figure 3.3 About Here


The argument to show that G(x) is u.h.c. is the same outlined in
b. However, G(x) is not l.h.c. at x = ±2nπ, where n = 0, 1, 2, ...;
which can be proved using the same kind of construction of sequences
developed before.
4 Dynamic Programming
  under Certainty

Exercise 4.1

    a.       The original problem was
                                           ∞
                                           X
                              max ∞              β t u(ct )
                          {ct ,kt+1 }t+0
                                           t=0

subject to

                          ct + kt+1 ≤ f (kt ),
                            ct , kt+1 ≥ 0,

for all t = 0, 1, ... with k0 given. This can be equivalently written,
after substituting the budget constraint into the objective function,
as
                               X∞
                         max∞      β t u[f (kt ) − kt+1 ]
                     {kt+1 }t+0
                                  t=0
subject to
                            0 ≤ kt+1 ≤ f (kt ),
for all t = 0, 1, ... with k0 given. Hence, defining

                     F (kt , kt+1 ) = u[f (kt ) − kt+1 ],

and
               Γ(kt ) = {kt+1 ∈ R+ : 0 ≤ kt+1 ≤ f (kt )} ,
we obtain the (SP) formulation given in the text.

                                                                   43
44          4 / Dynamic Programming under Certainty

    b.       Note that in this case ct ∈ Rl+ for all t = 0, 1, ... and we
cannot simply substitute for consumption in the objective function.
Instead, define
              n                                                    o
     Γ(kt ) := kt+1 ∈ Rl+ : (kt+1 + ct , kt ) ∈ Y ⊆ R2l          l
                                                      + , ct ∈ R+ ,

and
                         n                                       o
        Φ (kt , kt+1 ) := ct ∈ Rl+ : (kt+1 + ct , kt ) ∈ Y ⊆ R2l
                                                              + .

Then, let
                          F (kt , kt+1 ) =        sup           u (ct ) ,
                                             ct ∈Φ(kt ,kt+1 )

and the problem is in the form of the (SP).

Exercise 4.2

     a.     Define xit as the ith component of the l dimensional vector
xt . Hence,
                           maxxit ≤ θt kx0 k .
                                     i
Let e = (1, ..., 1, ...1) be an l dimensional vector of ones. Hence, the
fact that F is increasing in its first l arguments and decreasing in its
last l arguments implies that for all θ

                        F (x1 , x2 ) ≤ F (x1 , 0) ≤ F (θ kx0 k e, 0)
Then, if θ ≤ 1, F (θt kx0 k e, 0) ≤ F (kx0 k e, 0) and
                   ∞
                   X                                       ∞
                                                           X
                           t
            lim           β F (xt , xt+1 ) ≤        lim           β t F (kx0 k e, 0)
         n→∞                                       n→∞
                   t=0                                     t=0
                                                   F (kx0 k e, 0)
                                             =                    ,
                                                      (1 − β)
as β < 1. Otherwise, if θ > 1, F (θt kx0 k e, 0) ≤ θt F (kx0 k e, 0) by the
concavity of F and
               ∞
               X                                        ∞
                                                        X
         lim            β t F (xt , xt+1 ) ≤      lim     (θβ)t F (kx0 k e, 0)
        n→∞                                      n→∞
                  t=0                                     t=0
                                                 F (kx0 k e, 0)
                                          =                     ,
                                                   (1 − θβ)
            4 / Dynamic Programming under Certainty                          45

as βθ < 1. Hence the limit exists.

   b.        By assumption, for all x0 ∈ X, F (x1 , 0) ≤ θF (x0 , 0).
Hence

        F (xt , xt+1 ) ≤ F (xt , 0) ≤ θF (xt−1 , 0) ≤ ... ≤ θt F (x0 , 0).

Then,
                  ∞
                  X                              ∞
                                                 X
                         t
            lim         β F (xt , xt+1 ) ≤   lim   (θβ)t F (x0 , 0)
            n→∞                              n→∞
                  t=0                               t=0
                                             F (x0 , 0)
                                        =               .
                                              1 − θβ
Therefore, the limit exists.


Exercise 4.3

    a.     Let υ (x0 ) be finite. Since υ satisfies (FE), as shown in
the proof of Theorem 4.3, for every x0 ∈ X and every ε > 0, there
exists x ∈ Π(x0 ) such that
        ˜

                                                       ε
                   υ (x0 ) ≤ un (x) + β n+1 υ (xn+1 ) + .
                                 ˜                     2
Taking the limit as n → ∞ gives
                                                                  ε
             υ (x0 ) ≤ u(x) + lim sup β n+1 υ (xn+1 ) +
                               ˜        n→∞                       2
                                 ε
                         ≤ u(x) + .
                             ˜   2
Since
                                u(x) ≤ υ∗ (x0 ) ,
                                   ˜

for all x ∈ Π(x0 ), this gives
        ˜

                                                  ε
                             υ (x0 ) ≤ υ ∗ (x0 ) + ,
                                                  2
46        4 / Dynamic Programming under Certainty

for all ε > 0. Hence,
                                  υ (x0 ) ≤ υ ∗ (x0 ) ,
for all x0 ∈ X.
    If υ(x0 ) = −∞, the result follows immediately. If υ(x0 ) = +∞,
the proof goes along the lines of the last part of Theorem 4.3. Hence
υ(x0 ) ≤ υ ∗ (x0 ), all x0 ∈ X.

    b.     Since υ satisfies FE, by the argument of Theorem 4.3, for
all x0 ∈ X and x ∈ Π(x0 )
                ˜

                        υ(x0 ) ≥ un (x) + β n+1 υ(xn+1 ).
                                        ˜

In particular, for x and x0 as described,
                    ˜         ˜

              υ(x0 ) ≥            lim un (x0 ) + lim β n υ(x0n+1 )
                              n→∞           ˜       n→∞
                          =   u(x0 )
                                ˜
                          ≥ u(x)
                                    ˜

all x ∈ Π(x0 ). Hence
     ˜

                        υ(x0 ) ≥ υ ∗ (x0 ) = sup u(x),
                                                x∈Π(x0 )   ˜
                                                ˜


and in combination with the result proved in part a., the desired
result follows.


Exercise 4.4

     a.    Let K be a bound on F and M be a bound on f. Then

              (T f ) (x) ≤ K + βM,                   for all x ∈ X.

Hence T : B(X) → B(X).
    In order to show that T has a unique fixed point υ ∈ B(X) we
will use the Contraction Mapping Theorem. Note that (B(X), ρ) is
          4 / Dynamic Programming under Certainty                47

a complete metric space, where ρ is the metric induced by the sup
norm.
    We will use Blackwell’s suﬃcient conditions to show that T is a
contraction. To prove monotonicity, let f, g ∈ B(X), with f (x) ≤
g(x) for all x ∈ X. Then

         (T f )(x) =    max {F (x, y) + βf (y)}
                       y∈Γ(x)
                   = F (x, y ∗ ) + βf (y ∗ )
                   ≤ F (x, y ∗ ) + βg(y ∗ )
                   ≤    max {F (x, y) + βg(y)} = (T g)(x),
                       y∈Γ(x)

where
                 y ∗ = arg max {F (x, y) + βf (y)} .
                            y∈Γ(x)

For discounting, let a ∈ R. Then

          T (f + a)(x) =      max {F (x, y) + β [f (y) + a]}
                              y∈Γ(x)
                        =     max {F (x, y) + βf (y)} + βa
                              y∈Γ(x)
                        = (T f )(x) + βa.

Hence by the Contraction Mapping Theorem, T has a unique fixed
point υ ∈ B(X), and for any υ 0 ∈ B(X),

                    kT n υ0 − υk ≤ β n kυ 0 − υk .

   That the optimal policy correspondence G : X → X, where

           G(x) = {y ∈ Γ(x) : υ(x) = F (x, y) + βυ(y)} ,

is nonempty is immediate from the fact that Γ is nonempty and finite
valued for all x. Hence, the maximum is always attained.

   b.      Note that as F and f are bounded, Th f is bounded.
Hence Th : B(X) → B(X). That Th satisfies Blackwell’s suﬃcient
conditions for a contraction can be proven following the same steps
48          4 / Dynamic Programming under Certainty

as in part a. with the corresponding adaptations. Hence, Th is a con-
traction and by the Contraction Mapping Theorem it has a unique
fixed point w ∈ B(X).

     c.     First, note that

               wn (x) = (Thn wn )(x)
                        = F [x, hn (x)] + βwn [hn (x)]
                        ≤      max {F (x, y) + βwn (y)}
                               y∈Γ(x)
                        = (T wn )(x)
                        = (Thn+1 wn )(x).

Hence for all n = 0, 1, ... wn ≤ T wn . Applying the operator Thn+1 to
both sides of this inequality and using monotonicity gives
                                 ¡      ¢
           T wn = Thn+1 wn ≤ Thn+1 (T wn ) = Th2n+1 wn .

Iterating on this operator gives

                            T wn ≤ ThNn+1 wn .

But wn+1 = limN→∞ ThNn+1 wn , for wn ∈ B(X). Hence T wn ≤ wn+1
and
       w0 ≤ T w0 ≤ w1 ≤ T w1 ≤ ... ≤ T wn−1 ≤ T wn ≤ υ.

     By the Contraction Mapping Theorem,
                   ° N       °
                   °T wn − υ° ≤ β N kwn − υk .

Then,

          kwn − υk ≤ kT wn−1 − υk ≤ β kwn−1 − υk
                    ≤ β kT wn−2 − υk ≤ β 2 kwn−2 − υk ≤ ...
                    ≤ β n kw0 − υk

and hence wn → υ as n → ∞.


Exercise 4.5
          4 / Dynamic Programming under Certainty                       49

    First, we prove that g(x) is strictly increasing. Towards a con-
tradiction, suppose that there exists x, x0 ∈ X with x < x0 such that
g(x) ≥ g (x0 ) . Then as f is increasing, using the first-order condition
(5)

             βυ 0 [g(x0 )] = U 0 [f (x0 ) − g(x0 )]
                          < U 0 [f (x) − g(x)] = βυ 0 [g(x)]

which contradicts υ strictly concave.
    We prove next that 0 < g(x0 )−g(x) < f (x0 )−f (x), if x0 > x. Let
x0 > x. As g(x) is strictly increasing, using the first-order condition
we have

         U 0 [f (x) − g(x)] = βυ 0 [g(x)]
                            > βυ 0 [g(x0 )] = U 0 [f (x0 ) − g(x0 )].

The result follows from U strictly concave.


Exercise 4.6

   a.      By Assumption 4.10 kxt kE ≤ α kxt−1 kE for all t. Hence

                        α kxt−1 kE ≤ α2 kxt−2 kE

and
                          kxt kE ≤ α2 kxt−2 kE
The desired result follows by induction.

   b.    By Assumption 4.10 Γ : X → X is nonempty.
   Combining Assumptions 4.10 and 4.11,

               |F (xt , xt+1 )| ≤ B (kxt kE + kxt+1 kE )
                                ≤ B(1 + α) kxt kE
                                ≤ B(1 + α)αt kx0 kE

for α ∈ (0, β −1 ) and 0 < β < 1. So, by Exercise 4.2, Assumption 4.2
is satisfied.
50            4 / Dynamic Programming under Certainty

     c.       By Assumption 4.11 F is homogeneous of degree one, so

                        F (λxt , λxt+1 ) = λF (xt , xt+1 ).

Then
                                   n
                                   X
               u(λx) =       lim         β t F (λxt , λxt+1 )
                   ˜         n→∞
                                   t=0
                                     Xn
                        = λ lim              β t F (xt , xt+1 ) = λu(x).
                                n→∞                                         ˜
                                       t=0

By Assumption 4.10 the correspondence Γ displays constant returns
to scale. Then clearly x ∈ Π(x0 ) if and only if λx ∈ Π(λx0 ). Hence
                            ˜                                        ˜

                        υ∗ (λx0 ) =                sup    u(λx)
                                             λx∈Π(λx0 )          ˜
                                              ˜

                                       = λ sup u(x)
                                              x∈Π(x0 )       ˜
                                               ˜

                                       = λυ ∗ (x0 ).

     By Assumption 4.11,

          |F (xt , xt+1 )| ≤ B (kxt kE + kxt+1 kE )
                         ≤ B (1 + α) kxt kE ≤ B(1 + α)αt kx0 kE .

Hence
                               ¯                                ¯
                               ¯           X∞                   ¯
                               ¯                                ¯
                  |υ (x0 )| = ¯¯ sup
                    ∗
                                               β F (xt , xt+1 )¯¯
                                                t
                               ¯x˜ ∈Π(x0 ) t=0                  ¯
                                              ∞
                                              X
                             ≤         sup           β t |F (xt , xt+1 )|
                                   x∈Π(x0 ) t=0
                                   ˜
                                   ∞
                                   X
                             ≤           B(1 + α) (αβ)t kx0 kE
                                   t=0
                                   B(1 + α)
                             =              kx0 kE .
                                    1 − αβ
           4 / Dynamic Programming under Certainty                   51

Therefore υ ∗ (x0 ) ≤ c kx0 kE , all x0 ∈ X, where
                                  B(1 + α)
                             c=            .
                                   1 − αβ


Exercise 4.7

    a.       Take f and g homogeneous of degree one, and α ∈ R,
then f + g and αf are homogeneous of degree one, and clearly k·k is
a norm, so H is a normed vector space. We hence turn to the proof
that H is complete. Let {fn } be a Cauchy sequence in H. Then
{fn } converges pointwise to a limit function f. We need to show
that fn → f ∈ H where the convergence is in the norm of H. The
proof of convergence, and that f is continuous, are analogous to the
proof of Theorem 3.1. To see that f is homogeneous of degree one,
note that for any x ∈ X and any λ ≥ 0
           f (λx) = lim fn (λx) = lim λfn (x) = λf (x) .
                     n→∞               n→∞


   b.   Take f ∈ H(X). T f is continuous by the Theorem of the
Maximum. To show that T f is homogeneous of degree one, notice
that
            (T f )(λx) =      sup      {F (λx, λy) + βf (λy)}
                            λy∈Γ(λx)
                        =    sup λ {F (x, y) + βf (y)}
                            y∈Γ(x)
                        = λ(T f )(x),
where the second line follows from Assumption 4.10.

Exercise 4.8

    In order to prove the results, we need to add the restriction that f
is non-negative, and strictly positive on Rl++ . As a counterexample
without this extra assumption, let X = R2+ and consider the function
                           (
                                1/2 1/2
                              x1 x2      if x2 ≥ x1
                   f (x) =
                              0          otherwise.
52         4 / Dynamic Programming under Certainty

This function is clearly not concave, but is homogeneous of degree
one and quasi-concave. To see homogeneity, let λ ∈ [0, ∞) and note
that
                           (
                                1/2 1/2
                              λx1 x2     if x2 ≥ x1
               f (λx) =
                              0          otherwise.
                        = λf (x).

To see quasi-concavity, let x, x0 ∈ X with f (x) ≥ f (x0 ). If f (x0 ) = 0
the result follows from f non-negative. If f (x0 ) > 0, then x2 ≥ x1
and x02 ≥ x01 , and as f (x) is Cobb-Douglas in this range, it is quasi-
concave.

    a.       Pick two arbitrary vectors x, x0 ∈ X, and assume that f
is non-negative, and strictly positive on Rl++ . We have to consider
four cases:
    i) x = x0
    ii) x = αx0 for any α ∈ R, and x 6= 0, x0 6= 0
    iii) x 6= αx0 for any α ∈ R, and x 6= 0, x0 6= 0
    iv) x 6= x0 and x = 0 or x0 = 0

   i) and ii) are trivial.
   iii) Suppose f (x) ≥ f (x0 ), then f being homogeneous of degree
one and non-negative implies that f (x)/f (x0 ) ≥ 1, so there exist a
number γ ∈ (0, 1) such that γf (x) = f (γx) = f (x0 ). Hence for any
λ ∈ (0, 1) we may write

               f (γx) = λf (γx) + (1 − λ)f (x0 ) = f (x0 ).

By the assumed quasi-concavity of f , for any ω ∈ (0, 1),

            f [ωγx + (1 − ω)x0 ] ≥ ωf (γx) + (1 − ω)f (x0 ).

     Then, for any t > 0,

         f [tωγx + t(1 − ω)x0 ] = tf [ωγx + (1 − ω)x0 ]
                                 ≥ tωf (γx) + t(1 − ω)f (x0 )
                                 = tωγf (x) + t(1 − ω)f (x0 ).
          4 / Dynamic Programming under Certainty                     53

For any γ ∈ (0, 1), [1 − ω(1 − γ)]−1 > 0, hence choosing

                          t = [1 − ω(1 − γ)]−1

we get
                     ·                               ¸
                        ωγ              (1 − ω)    0
                f                x+               x
                   1 − ω(1 − γ)      1 − ω(1 − γ)
                     ωγ                 (1 − ω)
              ≥              f (x) +              f (x0 ),
                1 − ω(1 − γ)         1 − ω(1 − γ)

so if we let θ = ωγ/ [1 − ω(1 − γ)] , we obtain

              f [θx + (1 − θ)x0 ] ≥ θf (x) + (1 − θ)f (x0 ).

In order to see that the above expression holds for any θ, define
gγ : (0, 1) → (0, 1) by
                                         ωγ
                         gγ (ω) =                 ,
                                    1 − ω (1 − γ)

which is continuous and strictly increasing. Hence the proof is com-
plete.
    iv) Suppose x0 = 0. Then, f (x0 ) > 0 or f (x0 ) = 0. In the for-
mer case the proof of iii) applies without change. In the latter case
f (x0 ) = 0, so for any x 6= 0 and θ ∈ (0, 1),

          f [θx + (1 − θ)x0 ] = f (θx) = θf (x) + (1 − θ)f (x0 ).


   b.      Same proof as in case iii) in part a. assuming f (x) ≥ f (x0 )
and replacing ≥ by > everywhere else.

      c.    In order to prove that the fixed point υ of the operator
T defined in (2) is strictly quasi-concave, we need X, Γ, F and β
to satisfy Assumptions 4.10 and 4.11. In addition, we need F to be
strictly quasi-concave (see part b.). To show this, let H 0 (X) ⊂ H(X)
be the set of functions on X that are continuous, homogeneous of
degree one, quasi-concave and bounded in the norm in (1), and let
H 00 (X) be the set of strictly quasi-concave functions. Since H 0 (X) is
54         4 / Dynamic Programming under Certainty

a closed subset of the complete metric space H(X), by Theorem 4.6
and Corollary 1 to the Contraction Mapping Theorem, it is suﬃcient
to show that T [H 0 (X)] ⊆ H 00 (X).
    To verify that this is so, let f ∈ H 0 (X) and let

        x0 6= x1 ,     θ ∈ (0, 1),     and xθ = θx0 + (1 − θ)x1 .

Let yi ∈ Γ(xi ) attain (T f )(xi ), for i = 0, 1, and let F (x0 , y0 ) >
F (x1 , y1 ). Then by Assumption 4.10, yθ = θy0 + (1 − θ)y1 ∈ Γ(xθ ).
It follows that

                     (T f )(xθ ) ≥ F (xθ , yθ ) + βf (yθ )
                                 > F (x1 , y1 ) + βf (y1 )
                                 = (T f )(x1 ),

where the first line uses (3) and the fact that yθ ∈ Γ(xθ ); the second
uses the hypothesis that f is quasi-concave and the quasi-concavity
restriction on F ; and the last follows from the way y0 and y1 were
selected. Since x0 and x1 were arbitrary, it follows that T f is strictly
quasi-concave, and since f was arbitrary, that T [H 0 (X)] ⊆ H 00 (X).
Hence the unique fixed point υ is strictly quasi-concave.

    d.     We need X, Γ, F , and β to satisfy Assumptions 4.9, 4.10
and 4.11, and in addition F to be strictly quasi-concave. Considering
x, x0 ∈ X with x 6= αx0 for any α ∈ R, Theorem 4.10 applies.


Exercise 4.9

     Construct the sequence {kt∗ }∞
                                  t=0 using

                           kt+1 = g (kt ) = αβktα ,

given some k0 ∈ X. If k0 = 0 we have that kt∗ = 0 for all t = 0, 1, ...
which is the only feasible policy and is hence optimal. If k0 > 0,
then for all t = 0, 1, ... we have that kt+1∗   ∈ intΓ (kt∗ ) as αβ ∈ (0, 1) .
    Let
             E (xt , xt+1 ) := Fy (xt , xt+1 ) + βFx (xt , xt+1 ) .
           4 / Dynamic Programming under Certainty                55

Then for all t = 0, 1, 2, ... we have that

         ¡           ¢      αk∗α−1      1
        E kt∗ , kt+1
                 ∗
                       = β ∗α t ∗ − ∗α
                          kt − kt+1 kt−1 − kt∗
                                  αkt∗α−1            1
                        = β     ∗α        ∗α − ∗α       ∗α
                              kt − αβkt       kt−1 − αβkt−1
                                  αβ             1
                        =     ∗           − ∗α
                             kt (1 − αβ) kt−1 (1 − αβ)
                                    1              1
                        =     ∗α (1 − αβ) − k ∗α (1 − αβ) = 0,
                             kt−1             t−1

from repeated substitution of the policy function. Hence the Euler
equation holds for all t = 0, 1, ...
   To see that the transversality condition holds, let

                T (xt , xt+1 ) = lim β t Fx (xt , xt+1 ) · xt .
                                 t→∞

Then,

                 ¡           ¢              αkt∗α−1
                T kt∗ , kt+1
                         ∗
                               =      lim β t      ∗ kt
                                  t→∞     kt∗α − kt+1
                                               αk ∗α
                                = lim β t ∗α t ∗α
                                  t→∞     kt − αβkt
                                              α
                                = lim β t            = 0,
                                  t→∞     (1 − αβ)

where the result comes from the fact that 0 < β < 1.
5 Applications of
  Dynamic Programming
  under Certainty

Exercise 5.1

   a.- c.      The answers to parts a. through c. of this question
require that Assumptions 4.1 through 4.8 be established. We verify
each in turn.

    A4.1:      Here Γ(x) = [0, f (x)], and since by T2 f (0) = 0, 0 ∈
Γ (x) for all x, and therefore Γ is nonempty for all x.

    A4.2:       Here F (xt , xt+1 ) = U [f (xt ) − xt+1 ]. By U3 and the
fact that U : R+ → R, U , and hence F , is bounded below and the
result follows from U1.

    A4.3:      X = [0, x] ∈ R+ which is a convex subset of R. Refer
to Exercise 3.13 b. for Γ non-empty and compact valued. By T1 and
Exercise 3.13, Γ is continuous.

    A4.4:     We showed above that F is bounded below. By T1-
T3 f (xt ) − xt+1 is bounded, and hence by assumption U2-U3 F
is bounded above. By U2 and T1, F is continuous. And by U1,
0 < β < 1.

     A4.5:    By U3 and T3, F (·, y) is a strictly increasing function.

   A4.6:       Let x ≤ x0 , then by T3, f (x) ≤ f (x0 ), which implies
that [0, f(x)] ⊆ [0, f(x0 )] .

56
             5 / Applications of Dynamic Programming                  57

    A4.7:     By T4 f (x) − y is a concave function in (x, y). By U4
this implies that F (x, y) is strictly concave in (x, y).

   A4.8:       Let x, x0 ∈ X, y ∈ Γ(x) and y0 ∈ Γ(x0 ). Then y ≤ f (x)
and y0 ≤ f (x0 ), which implies, by T4, that

                θy + (1 − θ)y 0 ≤ θf (x) + (1 − θ)f (x0 )
                                    ≤ f (θx + (1 − θ)x0 ).


   d.      υ(x) is diﬀerentiable at x: By Theorems 4.7 and 4.8 and
parts b. and c., υ is an increasing and strictly concave function. By
U5, T5 and g(x) ∈ (0, f(x)) , Assumption 4.9 is satisfied. Hence by
Theorem 4.11 υ is continuously diﬀerentiable and

            υ0 (x) = Fx [f (x) − g(x)] = U 0 [f (x) − g(x)]f 0 (x).

      0 < g(x) < f (x): A suﬃcient condition for an interior solution is

                              lim U 0 (c) = ∞.
                              c→0

To see that g(x) = f (x) is never optimal under this condition, notice
that υ is diﬀerentiable for x ∈ (0, x̄) when g(x) ∈ (0, f (x)). Hence,
in this case we have that g(x) satisfies

                      U 0 [f (x) − g(x)] = βυ 0 [g (x)] ,

but
                        lim       U 0 [f (x) − g(x)] = ∞,
                     g(x)→f (x)

while
                            lim       βυ0 [g(x)] < ∞,
                         g(x)→f (x)

by the strict concavity of υ.
    To show that g(x) = 0 is not optimal, assume g(x̂) = 0, for some
x̂ > 0. Hence, it must be that g(x) = 0 for x < x̂. But then, for
x < x̂
                                           U (0)
                      υ(x) ≡ U [f (x)] + β       .
                                           1−β
58         5 / Applications of Dynamic Programming

Therefore υ is diﬀerentiable and

                         υ 0 (x) = U 0 [f (x)] f 0 (x).

Hence, when x → 0, υ 0 (x) → ∞, and then g(x̂) = 0 for x̂ is not
possible.
    To see what happens when this condition fails, notice that at
the steady state, we have that g(x∗ ) < f(x∗ ), where x∗ stands for
the steady state level of capital. By continuity of g, there is an
interval (x∗ − ε, x∗ ), such that for any x belonging to that interval,
g(x) < f (x). Theorem 4.11 implies that υ is diﬀerentiable in this
range. For any other x, eventually this interval will be reached, or
another point interval that implies g(x) = 0 or g(x) < f (x). We
established above that υ is diﬀerentiable in those cases, so it must
be that υ is diﬀerentiable everywhere.

    e.       Let β 0 > β. Define T 0 as the operator T using β 0 as a
discount factor instead of β, and υ k as the kth application of this
operator.
    Applying T 0 to υ(x; β) once (that is, using υ as the inital condi-
tion of the iteration) we obtain υ 1 (x; β 0 ) and g1 (x; β 0 ), where using
the first-order condition (assuming an interior solution for simplic-
ity), g1 (x; β 0 ) is defined as the solution y to

                       U 0 [f (x) − y] = β 0 υ 0 (y, β).

It is clear that the savings function must increase since the right-
hand side increases from β to β 0 , that is g1 (x; β 0 ) > g1 (x; β), which
by Theorem 4.11 in turn implies

                           υ01 (x, β 0 ) > υ 0 (x, β).

By a similar argument, if

                         υ0k (x; β 0 ) > υ 0k−1 (x; β 0 ),

then
                         υ0k+1 (x; β 0 ) > υ0k (x; β 0 ),
and
                         gk+1 (x; β 0 ) > gk (x; β 0 ).
           5 / Applications of Dynamic Programming                     59

Hence, gk (x; β 0 ) increases with k. The
                                       © result0 ªthen follows from ap-
                                                   ∞
plying Theorem 4.9 to the sequence gk (x; β ) k=0 since gk (x; β 0 ) →
g(x; β 0 ).


Exercise 5.2

     a.     For f (x) = x, T1 and T3-T5 are easily proved as follows:

   T1:      To prove that the function f is continuous, we must show
that for every ε > 0 and every x ∈ R+ , there exist δ > 0 such that
                ¯               ¯        ¯       ¯
                ¯f (x) − f (x0 )¯ < ε if ¯x − x0 ¯ < δ.

Choosing δ = ε the definition of continuity is trivially satisfied.

     T3:    Pick x, x0 ∈ R+ , with x > x0 , then f (x) = x > x0 =
f (x0 ).

     T4:    Pick x 6= x0 ∈ R+ . Then, for any α ∈ (0, 1),

     αf (x) + (1 − α)f (x0 ) = αx + (1 − α)x0 = f [αx + (1 − α)x0 ],

so f is weakly concave.

     T5:    For every x ∈ R+ ,

                             f (x + ε) − f (x)
                       lim                     = 1,
                       ε→0           ε
so f is continuously diﬀerentiable.

    Also, notice that given this technology, there is no growth in
the economy. Hence the maximum level of capital is given by the
initial condition x0 ≥ 0. Therefore, for the nontrivial case where the
economy starts with a positive level of capital, we can always define
x̄ = x0 and restrict attention to the set X = [0, x0 ]. Given the linear
technology, it is always possible to mantain the pre-existing capital
stock, hence the desired result follows.
60           5 / Applications of Dynamic Programming

     b.      The problem can be stated as
                                      ∞
                                      X
                           max∞             β t ln(xt − xt+1 ),
                         {xt+1 }t=0
                                      t=0

subject to
                         0 ≤ xt+1 ≤ xt , t = 0, 1, ...,

given x0 ≥ 0.
    Since ln xt ≤ ln x0 for all t,

                    ln(xt − xt+1 ) ≤ ln(xt ) ≤ ln(x0 ).

Then, for any feasible sequence,
                   ∞
                   X                                 1
                         β t ln(xt − xt+1 ) ≤           ln(x0 ).
                   t=0
                                                    1−β

Hence,
                                             1
                             υ ∗ (x) ≤          ln(x0 ),
                                            1−β
where υ ∗ is the supremum function.
   Define
                                 1
                        υ̂(x) =     ln(x).
                                1−β
It is clear that υ̂ satisfies conditions (1) to (3) of Theorem 4.14.
     Define
                 T fn (x) = max {ln(x − y) + βfn (y)} .
                               0≤y≤x

Then
                                ½                     ¾
                                             β
             T υ̂(x) =       max ln(x − y) +     ln(y)
                       0≤y≤x               1−β
                         1                        β
                     =       ln x + ln(1 − β) +        ln β,
                       1−β                      1−β
             5 / Applications of Dynamic Programming                 61

where the second line uses the fact that the first-order condition of
the right hand side implies y = βx. Using the same procedure,
                         ½
       2                                 β
      T υ̂(x) = max ln(x − y) +               ln(y)
                  0≤y≤x                1−β
                       ·                        ¸¾
                                      β
                   +β ln(1 − β) +          ln β
                                    1−β
                                       ·                        ¸
                     1                                β
              =          ln x + (1 + β) ln(1 − β) +        ln β
                   1−β                               1−β
and more generally,
                            ·                     ¸X
                                                   n
         n         1                      β
        T υ̂(x) =     ln x + ln(1 − β) +     ln β    βj .
                  1−β                    1−β
                                                         j=0

   Define υ = limn→∞ T n υ̂. Taking the limit of the expression
above, we have
                               ·                       ¸
                1           1                 β
        υ(x) =     ln x +       ln(1 − β) +       ln β
               1−β        1−β               1−β
which is clearly a fixed point of T . Hence, by Theorem 4.14, υ = υ ∗ .
   Then, as

                 T υ(x) = max {ln(x − y) + βυ(y)} ,
                          0≤y≤x

the first-order condition of the right hand side implies that the policy
function g is given by the expression g(x) = βx.

    c.     Notice that the only change between the current formu-
lation and the one presented in Exercise 5.1 is the linearity of the
technology. Restricting the state space to X = [0, x0 ] all the results
obtained in Exercise 5.1 are still valid under this setup.


Exercise 5.6

   a.        Let X = R+ . Define

             Γ(Q) = {y : y ≥ Q, y ≤ Q + q̄} = [Q, Q + q̄] .
62            5 / Applications of Dynamic Programming

Since φ(q̄) =c and limQ→∞ γ(Q) = c it is never profitable to produce
more than q̄.
    To show the existence of a unique bounded continuous function
υ satisfying the functional equation

             υ(Q) = max {(y − Q) [φ(y − Q) − γ(Q)] + βυ(y)}
                       y≥Q

it is enough to show that the assumptions of Theorem 4.6 are satis-
fied. We establish each in turn.

    A4.3:    X = R+ is a convex subset of Rl . Also, Γ is nonempty
since Q ∈ Γ(Q) for all Q, compact valued since it is a closed interval
in R+ , and clearly continuous since it has a continuous lower and
upper bound.

     A4.4:       Let

                   F (Q, y) = (y − Q) [φ(y − Q) − γ(Q)] .

Then

             0 ≤ F (Q, y) ≤ q̄ [φ(0) − γ(Q)] < q̄ [φ(0) − c] < ∞.

Hence F (Q, y) is bounded. Since φ and γ are continuous functions,
F (Q, y) is also continuous. Finally, 0 < β < 1 since r > 0. Hence
Theorem 4.6 applies.

   To show that Assumption 4.6 does not hold, consider Q < Q0
with Q0 < Q + q̄. Then Γ(Q) = [Q, Q + q̄] and Γ(Q0 ) = [Q0 , Q0 + q̄] .
Hence,                    £         ¤ £              ¤
           Γ(Q) ∪ Γ(Q0 ) = Q, Q0 + q 6= Q0 , Q0 + q̄ ,
which implies that Γ(Q) is not a subset of Γ(Q0 ).

    To show that Assumption 4.7 does not hold, an extra assumption
about the curvatures of γ and φ is needed. Necessary and suﬃcient
conditions for F (x, y) to be jointly concave in (x, y) are F11 , F22 <
                   2 > 0. In this example
0, and F11 F22 − F12

                    F (x, y) = (y − x) [φ(y − x) − γ(x)] ,
             5 / Applications of Dynamic Programming                    63

so
                                              £                    ¤
     F1 (x, y) = − [φ(y − x) − γ(x)] − (y − x) φ0 (y − x) + γ 0 (x) ,
     F2 (x, y) = [φ(y − x) − γ(x)] + (y − x) φ0 (y − x),

and
                       £        ¤         £          ¤
                F11 = 2 φ0 + γ 0 + (y − x) φ00 − γ 00 ,
                F12 = −2φ0 − γ 0 − (y − x) φ00 ,
                F22 = 2φ0 + (y − x) φ00 .

Note that

                     F11 = F22 + 2γ 0 − (y − x) γ 00 ,
                     F12 = −F22 − γ 0 .

The assumption that φ + qφ0 is decreasing implies F22 < 0, and the
additional assumption that γ is decreasing and convex then implies
                                   2 > 0, we need
F11 < 0. To insure that F11 F22 − F12
                    £                      ¤ £         ¤2
         0 < F22 F22 + 2γ 0 − (y − x) γ 00 − F22 + γ 0
                                   ¡ ¢2
             = −F22 (y − x) γ 00 − γ 0 .

The first term is positive, but a joint restriction on γ and φ is needed
to insure that it oﬀsets the second term:
               [γ 0 (x)]2     £   0         2 00
                                                    ¤
                          < −  2qφ  (q) + q  φ   (q)  ,   all q, x.
                γ 00 (x)

    An alternative argument to show that υ is strictly increasing can
be constructed by examining the problem posed in terms of infinite
sequences then applying the Principle of Optimality. The Principle
holds because under Assumptions 4.3—4.4 we have that Assumptions
4.1—4.2 hold.
    Consider two initial stocks of cumulative experience Q0 and Q00
∈ X with Q0 < Q00 . Let {Q∗t } be the optimal sequence from Q0 and
define {qt∗ } as the optimal production levels from Q0 by

                               qt∗ = Q∗t+1 − Q∗t .
64         5 / Applications of Dynamic Programming

Then,
                          ∞
                          X            £           ¡               ¢¤
          υ(Q00 )   ≥           β t qt∗ φ(qt∗ ) − γ Q∗t + Q00 − Q0
                          t=0
                          ∞
                          X
                    >           β t qt∗ [φ(qt∗ ) − γ(Q∗t )] = υ(Q0 ),
                          t=0

where the strict inequality comes from the fact that γ is strictly
decreasing. Hence, υ is strictly increasing.
   Next, we will show that y ∗ ∈ G(Q) implies that
            y ∗ > arg max(y − Q) [φ(y − Q) − γ(Q)] ≡ ỹ.
                        y≥Q

Note that ỹ is implicitly determined by
              φ(ỹ − Q) − γ(Q) + (ỹ − Q)φ0 (ỹ − Q) = 0,
or
                φ(ỹ − Q) + (ỹ − Q)φ0 (ỹ − Q) = γ(Q),
where the left hand side is strictly decreasing in y by the assumption
of strictly decreasing marginal revenue.
    On the other hand, y∗ is determined by the first-order condi-
tion of the right hand side of the Bellman equation, assuming υ is
diﬀerentiable, (see Theorem 4.11), then
         φ(y∗ − Q) + (y ∗ − Q)φ0 (y∗ − Q) = γ(Q) − βυ 0 (y ∗ ).
Having shown that υ is increasing, we can conclude that
              φ(y∗ − Q) + (y ∗ − Q)φ0 (y∗ − Q) < γ(Q),
which implies that y ∗ > ỹ.

     b.     S is continuously diﬀerentiable since φ is continuously
diﬀerentiable and integrals are linear operators. Using Leibniz Rule,
S 0 (q) = φ(q) > 0, and S 00 (q) = φ0 (q) < 0.
     To show that there is a unique bounded and continuous function
w satisfying the functional equation
         w(Q) = max {S(y − Q) − (y − Q)γ(Q) + βw(y)} ,
                    y≥Q
           5 / Applications of Dynamic Programming                   65

let Γ(Q) = [Q, Q + q̄] by the same argument given in a.          Hence
Assumption 4.3 is satisfied.
    Let
               F (Q, y) = S(y − Q) − (y − Q)γ(Q),
then F (Q, y) ≤ S(q̄) < ∞, so F is bounded.
    Since S and γ are continuous functions, F is a continuous func-
tion, so Assumption 4.4 is also satisfied and the desired result follows
from Theorem 4.6.
    To show that w ≤ S(q)/(1 − β), define the operator T by

      (T w)(Q) = max {S(y − Q) − (y − Q)γ(Q) + βw(y)} .
                    y∈Γ(Q)

That T is monotone follows from the fact that if w(Q) > w0 (Q) for
all Q, then

     (T w)(Q) =       max {S(y − Q) − (y − Q)γ(Q) + βw(y)}
                     y∈Γ(Q)
                          ©                               ª
                >     max S(y − Q) − (y − Q)γ(Q) + βw0 (y)
                     y∈Γ(Q)
                         0
                = (T w )(Q).

We have shown already that

                        lim (T n w0 )(Q) = w(Q),
                       n→∞

where w(Q) satisfies the Bellman equation. Start with w0 (Q) = 0.
Then

           w1 (Q) =      max {S(y − Q) − (y − Q)γ(Q)}
                        y∈Γ(Q)
                     ≤ S(q̄),

and applying T to both sides of this inequality we get

     (T w1 )(Q) ≤ (T S)(q̄)
                 =     max {S(y − Q) − (y − Q)γ(Q) + βS(q̄)}
                      y∈Γ(Q)
                 ≤ (1 + β)S(q̄).
66           5 / Applications of Dynamic Programming

Therefore,

       lim (T w1 )(Q) ≤ lim (T S)(q̄) ≤ (1 + β + β 2 + ...)S(q̄),
      n→∞                 n→∞

and hence
                                            S(q̄)
                             w(Q) ≤                ,
                                           (1 − β)
for all Q ∈ X.

     As before, Assumption 4.6 is not satisfied, so in order to show
that w is strictly increasing, pick two arbitrary initial stocks Q0 , Q00
∈ X with Q0 < Q00 . Consider a strictly increasing function w0 and let
y ∗ be the optimal choice of next period cumulative experience when
Q0 is the current stock and w0 is the continuation value function.
Then
                     ©                                            ª
      (T w0 )(Q0 ) = S(y ∗ − Q0 ) − (y ∗ − Q0 )γ(Q0 ) + βw0 (y ∗ ) ,

and
                                                       £               ¤
(T w0 )(Q00 ) ≥ S(y ∗ − Q0 ) − (y ∗ − Q0 )γ(Q00 ) + βw0 y ∗ − Q0 + Q00
              > S (y∗ − Q0 ) − (y∗ − Q0 ) γ (Q0 ) + βw0 (y∗ )
              = (T w0 )(Q0 ),

since w0 is strictly increasing, and γ is strictly decreasing. Then
T maps strictly increasing into strictly increasing functions and by
Corollary 1 to the Contraction Mapping Theorem, w(Q) is a strictly
increasing function.

   The proof that any output level that is optimal exceeds the level
that maximizes current surplus is a straightforward adaptation of the
proof outlined in a.

    c.    Competitive firms take prices and aggregate production as
given. Normalize the total number of firms to one. The sequential
problem for an individual firm can be stated as
                                 ∞
                                 X
                       max
                        ∞
                                       β t qt [pt − γ(Qt )] .
                      {qt }t=0
                                 t=0
           5 / Applications of Dynamic Programming                    67

The equilibrium conditions are

                              pt = φ (qt )
                        X
                              qti = Qt+1 − Qt .
                          i

where we have exploited the fact that under our normalization, ag-
gregate production in the industry is qt . The first-order condition of
the firm’s problem implies zero production at time t if

                               pt < γ(Qt ),

infinite production at t if

                               pt > γ(Qt ),

and indeterminate production at t if

                               pt = γ(Qt ).

After substituting the equilibrium conditions we obtain

                     pt = φ (Qt+1 − Qt ) = γ(Qt ).

Since φ and γ are strictly decreasing functions, production is an
increasing function of Q.
    As a result, production will rise through time, but since γ is a con-
vex function the growth rate has to be declining, with limt→∞ qt = q̄.
Concurrently, the price will be declining through time at a decreasing
rate with an asymptote at c since φ(Qt+1 − Qt ) declines with Qt .
    The equation describing the eﬃcient path of production implies

                          φ(y E − Q) < γ(Q).

In the competitive equilibrium,

                          φ(y C − Q) = γ(Q).

Therefore y E > y C as φ is strictly decreasing. Hence the competitive
output level is lower.
68           5 / Applications of Dynamic Programming

   d.      Instead of building a stock of cumulative experience, we
have an initial stock of a nonrenewable resource that will be depleted
over time. The recursive formulation of the problem can be stated
as
         w(Q) = max {S(Q − y) − (Q − y)γ(Q) + βw(y)} .
                       y≤Q
    Assuming that the cost of extraction γ is strictly increasing and
strictly convex and defining Γ(Q) = [0, Q] which satisfies Assumption
4.3, the problem is well defined. All of the proof presented above ap-
plies with slight modifications. Posed in terms of infinite sequences,
the monopolist’s problem can be stated as
                       ∞
                       X
             max∞            β t (Qt − Qt+1 ) [φ(Qt − Qt+1 ) − γ(Qt )] ,
          {Qt+1 }t=0
                       t=0

subject to
                              Qt ≥ Qt+1 t = 0, 1, ...,
with Q0 given.

Exercise 5.7

     a.      Define
                  Γ(k) = {y : (1 − δ)k ≤ y ≤ (1 + λ)k} ,
and set υ0 (k) = 0 for all k. Then for n = 1,
              υ 1 (k) = (T υ 0 )(k)
                         =      max {kφ(y/k) + βυ 0 (y)} = a1 k
                               y∈Γ(k)

where
                       a1 = max φ(y/k) = φ(1 − δ) = 1.
                              y∈Γ(k)

    Now assume that υn (k) = (T n υ 0 )(k) = an k.             To see that the
result holds for n + 1, note that
                υn+1 (k) = (T n+1 υ 0 )(k)
                                =      max {kφ(y/k) + βυ n (y)}
                                    y∈Γ(k)
                                =      max {kφ(y/k) + βan y} .
                                    y∈Γ(k)
            5 / Applications of Dynamic Programming                69

There are three cases to consider, depending upon whether the opti-
mal choice of y is interior or at a corner.
   First, consider the case of an interior solution. The first-order
condition of the problem is

                         φ0 (y/k) + βan = 0,

and hence
                         y = kφ0−1 (−βan ).
Plugging this expression into the Bellman equation, we have that
                   £            ¤
     υ n+1 (k) = kφ φ0−1 (−βan ) + βkφ0−1 (−βan )an = an+1 k,

where                 £            ¤
              an+1 = φ φ0−1 (−βan ) + βφ0−1 (−βan )an .
   Second, consider the case of a corner solution with y = (1 − δ)k,
which occurs when
                       φ0 (1 − δ) + βan ≤ 0.
Plugging y = (1 − δ)k into the Bellman equation gives

            υn+1 (k) = kφ(1 − δ) + β(1 − δ)kan = an+1 k,

where
                       an+1 = 1 + β(1 − δ)an .
   Finally, consider the case of a corner solution with y = (1 + λ)k,
which occurs when
                        φ0 (1 + λ) + βan ≥ 0.
Although we have shown that it is never optimal to choose y =
(1+λ)k when there is just one period left in which to work, we cannot
rule out corner solutions in other periods without making further
assumptions about φ and some of the parameters of the problem.
Plugging y = (1 + λ)k into the Bellman equation we get

            υ n+1 (k) = kφ(1 + λ) + β(1 + λ)kan = an+1 k,

where
                         an+1 = β(1 + λ)an .
70         5 / Applications of Dynamic Programming

    Hence the result is true for n + 1 and the result follows by induc-
tion.

   The proof that an+1 > an for all n is by induction. Note that
we have shown above that a1 = 1. Next, assume an > an−1 . Let y n
denote the optimal choice of next period capital when the worker has
n periods left to work, that is

                  υ n (k) = kφ(y n /k) + βυn−1 (y n ).

Hence,

     an+1 k = υn+1 (k) =      max {kφ(y/k) + βυ n (y)}
                             y∈Γ(k)
                         ≥ kφ(y /k) + βυ n (y n )
                                  n

                         = kφ(yn /k) + βan y n
                         > kφ(yn /k) + βan−1 y n = υ n (k) = an k,

and the result follows.
    Next, we establish conditions under which the sequence {an }∞
                                                                n=0
is bounded. Notice that either

                     an+1 = 1 + β (1 − δ) an ,
                     an+1 = f (an ), or
                     an+1 = β (1 + λ) an ,

and φ0−1 : R− → [(1 − δ), (1 + λ)] . Therefore

                        ∂f (an )
          β (1 − δ) ≤            = βφ0−1 (−βan ) ≤ β (1 + λ) ,
                         ∂an

and hence the required condition is λ < r.

    b.      We can show, using the fact that an+1 > an for all n,
that if in the nth period it is optimal to invest at the minimum
feasible level (complete depletion), then it is optimal to continue
investing at the minimum level in future periods (n − 1, n − 2, ...),
hence y = (1 − δ)k from then on.
           5 / Applications of Dynamic Programming                  71

    >From the first-order conditions of the problem, if minimum fea-
sible accumulation is optimal

                          −φ0 (1 − δ) > βan

    But an > an−1 > an−2 ...implies that −φ0 (1−δ) > βan > βan−1 ...
    We can also show that if in the nth period it is optimal to invest
at the maximum feasible level y = (1 + λ)k, then it is optimal to
invest at that level for earlier periods also, namely n + 1, n + 2, ...
    In this case, from the first-order conditions of the problem

                          −φ0 (1 + λ) < βan

    But an+1 > an > ... implies that −φ0 (1 + λ) < βan < βan+1 ...
    A plausible path for capital (remember we cannot rule out some
weird path without making some further assumptions) would be in-
creasing at early stages of the individual’s life, reaching a peak, and
decreasing after that point.
    Notice that we can have an interior solution and kt+1 < kt so
capital may start decreasing before decreasing at the maximum al-
lowed rate. We cannot assure from the first-order conditions that
kt+1 = g(kt ) is strictly increasing for an interior solution.
    In order to characterize the path of kt corresponding to the region
of interior solutions, from the first-order conditions we have

                           −φ0 (y/k) = βan

   hence
                        kt+1 = φ0−1 (−βan )kt .
    Since {an }∞
               n=0 is an increasing sequence, higher a’s imply higher
values for φ0−1 , and because φ0−1 goes from ranges of φ0−1 > 1 (for
high values of a) to ranges of φ0−1 < 1 (for low values of a), when
an → a1 capital may increase at the beginning (φ0−1 > 1) and then
gradually decrease (φ0−1 < 1).
    The age earning profile will also be be hump-shaped, with a flat
segment at the level of zero earnings for the periods in which it is
optimal to accumulate capital at the rate λ.
72           5 / Applications of Dynamic Programming

Exercise 5.9


    a.      In order to find exact solutions for υ(k) and g(k) we can
use standard calculus, but this requires that υ satisfies certain prop-
erties.
    First, notice that f (k) is unbounded, so we cannot apply the
standard theorems for bounded returns. One way to get around this
problem is by judiciously restricting the state space. Define k m as

                          p
                      km = f (k m ) + (1 − δ)km .
                          q

That is, if k > km , the output in terms of capital that can be obtained
is less than km . Hence it is never optimal to £set k¤ t+1 higher than
k m . Set k = max {km , k0 } . Then, let k ∈ K = 0, k where K is the
restricted state space and let y ∈ Γ(k) = K be the restricted feasible
correspondence.
     Next, we need to check that υ is diﬀerentiable, for which it suﬃces
to check that the assumptions of Theorem 4.11 are satisfied.

                        £ ¤
   A4.3:      Since K = 0, k ⊆ R+ , K is a convex subset of R.
Since Γ(k) = K, Γ is nonempty, compact valued and continuous by
Exercise 3.13. Define

                  A = {(k, y) ∈ K × K : y ∈ Γ(k)} ,

and F : A → R as

                  F (k, y) = pf (k) − q [y − (1 − δ)k] .



   A4.4:      Since we have restricted the state space, F is bounded,
and clearly continuous. Finally 0 < β < 1 by r > 0.


     A4.7:     Take two arbitrary pairs (k, y) and (k0 , y 0 ) and let θ ∈
           5 / Applications of Dynamic Programming                     73

(0, 1). Define k θ = θk + (1 − θ)k 0 and y θ = θy + (1 − θ)y0 . Then
                                 h                i
     F (kθ , y θ ) = pf (kθ ) − q y θ − (1 − δ)kθ
                = pf (θk + (1 − θ)k0 )
                     −q{θy + (1 − θ)y 0 − (1 − δ)[θk + (1 − θ)k 0 ]}
                > θ{pf (k) − q [y − (1 − δ)k]}
                                        £              ¤
                  +(1 − θ){pf (k0 ) − q y0 − (1 − δ)k 0 }
                = θF (k, y) + (1 − θ)F (k0 , y0 ),

where the strict inequality is the result of the strict concavity of f.
                            ©              ª
   A4.8:      Since Γ(k) = y : 0 ≤ y ≤ k for all k it follows trivially
that if y ∈ Γ(k) and y 0 ∈ Γ(k0 ) then

                   y θ ∈ Γ(kθ ) = Γ(k) = Γ(k 0 ) = K.


   A4.9:    By assumption, f is continuously diﬀerentiable. Hence,
by Theorem 4.11, υ is diﬀerentiable. The Bellman equation for this
problem is

           υ(k) = max {pf (k) − q[y − (1 − δ)k] + βυ(y)}
                   y∈Γ(k)

so the Euler equation (Inada conditions rule out corner solutions) is

                       q = β[pf 0 (y∗ ) + (1 − δ)q]                (5.1)

where y ∗ is the value of y that satisfies this equation. Notice that
y ∗ does not depend on the current level of capital, so independently
of it, it is optimal to adjust to y ∗ and stay at that level of capital
forever.
     The interpretation of (5.1) is as follows. The left-hand side of the
Euler equation measures the marginal cost of increasing the stock of
capital by one more unit.
     The right-hand side measures the marginal benefit of an addi-
tional unit of capital when the capital stock is already at the y∗
level. Since it takes one period for the capital to be eﬀective the cur-
rent marginal benefit must be discounted. It is composed of a first
74         5 / Applications of Dynamic Programming

term which measures the value of its marginal product and a second
term which is its scrap value if it is sold next period. Hence,

            υ(y ∗ ) = pf (y∗ ) − q[y ∗ − (1 − δ)y ∗ ] + βυ(y ∗ ),

which implies that
                                 1
                     υ(y∗ ) =       [pf (y ∗ ) − qδy ∗ ].
                                1−β
So for any arbitrary k ∈ K,
                                                β
      υ(k) = pf (k) − q[y∗ − (1 − δ)k] +           [pf (y ∗ ) − qδy ∗ ].
                                               1−β
    Within one period, then, all firms end up with the same capital
stock irrespective of their initial capital endowment. The intuition
behind this result is that the marginal cost of adjusting capital is
constant, so there is no reason to adjust capital in a gradual fashion.
Hence y = g(k) = y ∗ , a constant function.
    The economic interpretation of the absence of a nonnegativity
constraint in gross investment is the existence of perfect capital mar-
kets, so investment is reversible.
    If we have some upper and lower bounds on investment, the fea-
sible correspondence is now

              Γ(k) = {y : (1 − δ)k ≤ y ≤ (1 − δ)k + a}

   To ensure diﬀerentiability of the value function, we need to check
Assumptions 4.3 and 4.8.

    A4.3:     We still maintain the assumption that K = [0, k̄]. It is
clear that Γ(k) is nonempty (y = (1 − δ)k ∈ Γ(k)), compact valued
and continuous.

   A4.8:     Take two arbitrary pairs (k, y) and (k0 , y0 ) where y ∈
Γ(k) and y ∈ Γ(k 0 ), and θ ∈ (0, 1), and define kθ and yθ as before.
          0

We need to show that y θ ∈ Γ(k θ ).
   By definition
                    n                                  o
           Γ(kθ ) = y : (1 − δ)kθ ≤ y ≤ (1 − δ)kθ + a .
           5 / Applications of Dynamic Programming                     75

Note that y ∈ Γ(k) implies that (1 − δ)k ≤ y, which implies in turn
that (1 − δ)θk ≤ θy, and θy < (1 − δ)θk + a. Hence θy ∈ Γ(θk).
Proceeding in the same fashion it can be shown that (1 − θ)y0 ∈
Γ[(1 − θ)k0 ]. Therefore, since (1 − δ)kθ ≤ y θ and yθ ≤ (1 − δ)kθ + a,
Γ is convex.
    At this point it would be convenient to show that indeed υ is in-
creasing and strictly concave. Unfortunately Γ(k) is not monotone,
so we cannot apply Theorem 4.7. To show that υ is strictly increas-
ing we will use Corollary 1 of the Contraction Mapping Theorem.
Let υ ∈ C 0 (k) where C 0 (k) is the space of continuous and (weakly)
increasing functions. Then,

       (T υ)(k) =      max {pf (k) − q[y − (1 − δ)k] + βυ(y)}
                      y∈Γ(k)
                  = {pf (k) − q[ŷ − (1 − δ)k] + βυ(ŷ)} ,

where ŷ ∈ arg maxy∈Γ(k) {pf (k) − q[y − (1 − δ)k] + βυ(y)} .
   Take k̃ > k. Then,

       (T υ)(k) < pf (k̃) + (1 − δ)k̃q − q[ŷ + (1 − δ)(k̃ − k)]
                      +βυ[ŷ + (1 − δ)(k̃ − k)]
                  = pf (k̃) − q[ỹ − (1 − δ)k̃] + βυ(ỹ)
                            n                             o
                  ≤ max pf (k̃) − q[y − (1 − δ)k̃] + βυ(y)
                      y∈Γ(k̃)

                  = (T υ)(k̃).

Note that ỹ ∈ Γ(k̃) since ỹ = ŷ + (1 − δ)(k̃ − k) implies that ỹ + (1 −
δ)k = ŷ + (1 − δ)k̃ and ŷ ∈ Γ(k). Hence T : C 0 (k) → C 00 (k) where
C 00 (k) is the space of continuous and strictly increasing functions.
Therefore υ ∈ C 00 (k) where υ is the fixed point of T.
      That υ is strictly concave follows immediately from f being strictly
concave and Γ convex, so Theorem 4.8 applies.
      Let λ and µ be the Lagrange multiplier for the lower and the
upper bounds respectively. Then, the first-order condition of the
problem is
                          q = βυ 0 (y) + λ − µ.
76            5 / Applications of Dynamic Programming

Hence, λ > 0 implies υ0 (y) < q/β and y = (1 − δ)k; µ > 0 implies
υ 0 (y) > q/β and y = (1 − δ)k + a; and finally λ = µ = 0 implies
υ 0 (y) = q/β.
      Let kλ and kµ be defined as
                               υ 0 [(1 − δ)kλ ]] = q/β,
and
                          υ 0 [(1 − δ)kµ + a] = q/β,
so if the level of capital is higher than kλ the firm has too much of
it, and the only way to of depleting it is by letting it depreciate. If
the current level of capital is lower than kµ then the firm wants to
accumulate as much capital as possible, but there is a bound on how
much capital can be accumulated in a single period.
     The policy function is then,
                      
                       (1 − δ)k + a if       k ≤ kµ
               g(k) =          y∗       if kµ ≤ k ≤ kλ
                      
                            (1 − δ)k    if    k ≥ kλ .

     b.        Under this new setup the functional equation is
              υ(k) = max {pf (k) − c[y − (1 − δ)k] + βυ(y)}
                      y∈Γ(k)

    The proofs that υ is diﬀerentiable, strictly increasing and strictly
concave are similar to the ones presented in part a. The optimal
level of next period’s capital is implicitly determined by the first-
order condition
                      c0 [y − (1 − δ)k] = βυ 0 (y).
     Since c is strictly convex and υ is strictly concave there is a unique
y ∗ that solves the above equation.
     The policy function g(k) is a single valued correspondence (see
Theorem 4.8) and it is nondecreasing. Pick any arbitrary k, k0 with
k 0 > k. The proof is by contradiction. Suppose g(k 0 ) < g(k). Then,
by υ strictly concave,
          c0 [g(k) − (1 − δ)k] = βυ 0 [g(k)]
                                 < βυ 0 [g(k 0 )] = c0 [g(k0 ) − (1 − δ)k0 ],
           5 / Applications of Dynamic Programming                    77

which implies, by c strictly convex, that

                  0 < (1 − δ)(k 0 − k) < g(k0 ) − g(k),

a contradiction.
    Also note that

               c0 [g(k) − (1 − δ)k] > c0 [g(k0 ) − (1 − δ)k0 ]

implies that
                                        g(k0 ) − g(k)
                         (1 − δ) >                    ,
                                          (k0 − k)
hence the policy function has a slope that is strictly less than one.
   The Envelope Condition is

               υ 0 (k) = pf 0 (k) + (1 − δ)c0 [y − (1 − δ)k].

Combining it with the first-order condition we get the Euler equation
                           ©                                    ª
     c0 [y − (1 − δ)k] = β pf 0 (y) + (1 − δ)c0 [y 0 − (1 − δ)y] .

Notice that, in contrast with the Euler equation obtained in a., now
the marginal cost of investing is no longer constant. Hence the steady
state capital level k ∗ satisfies
                                         β
                     c0 (δk ∗ ) =                pf 0 (k∗ ).
                                    1 − β(1 − δ)

Notice that in this case, capital will adjust slowly to this level.

     c.      Let φ(k) = arg maxl≥0 {pF (k, l) − wl} . For Π and φ to
be well defined functions, we need the maximum to exist and φ to
be single valued. If F (k, l) is a continuous function for all pairs
(k, l) ∈ K × L, then Π and φ will be continuous functions. If, in
addition, F (k, l) is strictly concave in l, then φ will be single valued.
     We consider each property of Π in turn. For Π(0) we need F (0, l) =
0 for all l. For then

                          Π(0) = max −wl = 0,
                                     l∈L(k)
78         5 / Applications of Dynamic Programming

and the optimal choice of l is zero. To show that limk→0 Π0 (k) = ∞
and limk→∞ Π0 (k) = 0, we need Inada conditions for k on F (k, l).
By the Envelope Condition Π0 (k) = pFk (k, l) so it is enough that
limk→0 Fk (k, l) = ∞ and limk→∞ Fk (k, l) = 0. To show that Π
strictly concave we need F (k, l) to be strictly concave.


Exercise 5.10

     a.     Define

  Π(k0 ) = {{kt+1 }∞
                   t=0 : (1 − δ)kt ≤ kt+1 ≤ (1 + α)kt , t = 0, 1, ...}.

     Let
                                     ∞
                                     X
{kt∗ }∞
      t=0 ∈ arg        max                 β t {pF (kt , kt+1 ) − q[kt+1 − (1 − δ)kt } ,
                  {kt }∞
                       t=0 ∈Π(k0 )   t=0

and λ > 0. Then,
                      ∞
                      X        ©                                           ª
     υ∗ (λk0 ) ≥            β t pF (λkt∗ , λkt+1
                                             ∗           ∗
                                                 ) − q[λkt+1 − (1 − δ)λkt∗
                      t=0
                        ∗
               = λυ (k0 ).
           © λ∗ ª∞                                     ©       ª∞
Now let kt t=0 be optimal from λk0 . Then, clearly, λ−1 ktλ∗ t=0
is feasible from k0 , and
                 X∞      ½                                     ¾
     ∗                 t   1 ∗ 1 ∗          1 ∗            1 ∗
    υ (k0 ) ≥        β pF ( kt , kt+1 ) − q[ kt+1 − (1 − δ) kt
                 t=0
                           λ    λ           λ              λ
                   1 ∗
            =        υ (λk0 ),
                   λ
which completes the proof.

   b.      We will prove that there is a function υ satisfiying the
functional equation that is homogeneous of degree one. For that, we
have to check that Assumptions 4.10 and 4.11 are satisfied.
   Let
            Γ(k) = {y ∈ R+ : (1 − δ)k ≤ y ≤ (1 + α)k} .
          5 / Applications of Dynamic Programming                       79

Clearly, the graph of Γ is a cone.
   Also,
                              y
                                − 1 ≤ α.
                              k
Hence, Assumption 4.10 is satisfied.
   To see that Asumption 4.11 is also satisfied, notice that

  pF (k, y) − q [y − (1 − δ)k] ≤ pF (k, (1 − δ)k) = pF (1, (1 − δ))k.

By Theorem 4.13 the desired result follows.

    c.     Since the return function and the correspondence describ-
ing the feasible set are constant returns to scale, Assumption 4.4 no
longer holds. Here, imposing a bound on the state space is not a
good idea. Instead, the strategy will be to prove that the structure
of the model satisfy Assumptions 4.10—4.11 and then to make use of
Theorem 4.13.
    Define
                 H(k, y) = pF (k, y) − q[y − (1 − δ)k].

   A 4.10:     K is a convex cone since K = R+ ⊆ Rl .
   If y ∈ Γ(k) then λy ∈ Γ(λk) since

              Γ(k) = {y : (1 − δ)k ≤ y ≤ (1 + α)k} .
                                           ¡      ¢
   Also, y ≤ γk for all k ∈ K for some γ ∈ 0, β −1 . Since

                            y ≤ (1 + α)k,

and
                       (1 + α)k ≤ γk ≤ β −1 k,
is needed, we need to assume that (1 + α)β ≤ 1. Notice that the
assumption about the marginal adjustment cost, as the rate of growth
of capital approaches α > 0, allows the use of the weak inequality.

   A 4.11:      β ∈ (0, 1).
   H : R+ × R+ → R+ is continuous and homogeneous of degree
one. It follows directly from the assumptions about F.
80           5 / Applications of Dynamic Programming

    Since F is nonnegative, decreasing in y and homogeneous of de-
gree one,

                      pF (k, y) ≤ pF [k, (1 − δ)k]
                                 = pkF [1, (1 − δ)].

This implies that

              |H(k, y)| ≤ pkF [1, (1 − δ)] + q(1 − δ)k + qy.

     Let
                 B = max {pF [1, (1 − δ)] + q(1 − δ), q} ,
then |H(k, y)| ≤ B(|k| + |y|).

     Hence, we can define the operator

                  (T υ)(k) = max {H(k, y) + βυ(y)} ,
                              y∈Γ(k)

and by Theorem 4.13, υ, the unique fixed point of the operator T, is
homogeneous of degree one and the optimal policy correspondence

     G = {y ∈ Γ(k) : υ ∗ (k) = pF (k, y) − q[y − (1 − δ)k] + βυ∗ (y)} ,

is compact valued, u.h.c. and homogeneous of degree one. The quasi-
concavity of F implies that G is single valued.
    Since G is homogeneous of degree one, it must be the case that
y ∈ G(k) implies that y = θk for some θ ∈ [(1 − δ), (1 + α)]. Also, υ
homogeneous of degree one implies that υ(k) = Ak, therefore

             Ak = max {pF (1, θ) − q[θ − (1 − δ)] + βAθ} k,
                     θ

so θ∗ = arg maxθ {pF (1, θ) − q[θ − (1 − δ)] + βAθ} is defined by

                         pFθ (1, θ∗ ) − q + βA = 0,

and
                          pF (1, θ∗ − q[θ∗ − (1 − δ)]
                     A=                               .
                                    1 − βθ∗
           5 / Applications of Dynamic Programming                                      81

   Now
                ∞
                X                                               ∞
                                                                X
      ∗
    υ (k0 ) =         β H(kt∗ , kt+1
                       t         ∗
                                     ) ≤ H[1, (1 − δ)]k0          [β(1 + α)]t
                t=0                                                t=0

so imposing β(1 + α) < 1 the hypothesis of Theorems 4.2 and 4.3 are
satisfied and the connection between the functional equation and the
sequential problem can then be established.
    Also, the strict quasi-concavity of F allows us to conclude that
υ is strictly quasi-concave (see Exercise 4.8) since the operator T
preserves quasi-concavity.
    Assumptions 4.9-4.11 are satisfied and F is strictly quasi-concave,
so by Exercise 4.8 d., υ is diﬀerentiable.

Exercise 5.11

   a.      To prove boundedness, let B ∈ R and take any c ∈ L.
Then, U (ct ) ≤ B for all t implies that
                                      ∞
                                      X
                           u(c) =            β t U (ct )
                                      t=0
                                      X∞
                                                         B
                                 ≤           βtB =          .
                                       t=0
                                                        1−β
   To prove continuity, let c ∈ L. We need to show that for every
c0 ∈ L and ε > 0 there is a δ 0 > 0 with |u(c0 ) − u(c)| < ε whenever
kc0 − ckL < δ 0 .
    Equivalently, we need to show that for some sequence {cn }∞  n=1 ,
where cn ∈ L for all n, and cn → c in k·kL norm, |u(cn ) − u(c)| → 0.
    Clearly,
                   ¯∞                           ¯
                   ¯X                ∞
                                     X          ¯
    n              ¯      t    n        t       ¯
|u(c ) − u(c)| = ¯       β U (ct ) −   β U (ct )¯
                   ¯                            ¯
                           t=0               t=0
                       ∞
                       X
                 ≤           β t |U (cnt ) − U (ct )|
                       t=0
                       XN                                   ∞
                                                            X
                 =           β t |U (cnt ) − U (ct )| +            β t |U (cnt ) − U (ct )| .
                       t=0                                 t=N+1
82         5 / Applications of Dynamic Programming

for any N.
    Fix ε. Because U (·) ≤ B,

                         |U (cnt ) − U (ct )| ≤ 2B.

Choose N such that for all N ≥ N ,
              ∞
              X          ¯                  ¯          2B  ε
                     β t ¯U (c0t ) − U (ct )¯ ≤ β N+1     < .
                                                      1−β  2
             t=N+1

   For the first part of the sequence, we know that c0t → ct . Hence,
choose n such that for all n ≥ n
                                               (1 − β) ε
                   |U (cnt ) − U (ct )| ≤                   ,
                                             (1 − β N+1 ) 2

as k·kL convergence implies pointwise convergence.
    Then, if n > n and N > N ,

                                P
                                N            (1 − β) ε ε
            |u(cn ) − u(c)| <         βt                 + = ε.
                                t=0        (1 − β N+1 ) 2 2

Since ε was arbitrarily chosen, this completes the proof.

    b.     S is complete. Straightforward adaptation of the proof
outlined in Exercise 3.6.
    To see that it is not true that limn→∞ |u (c) − u (cn )| = 0 for all
u ∈ S, consider
                             u (c) = inf ct .
                                            t

Let c ∈ L be a sequence with elements ct = 1 for all t. But then,
|u (c) − u (cn )| = 1 for all n, and hence limn→∞ |u (c) − u (cn )| 6= 0.

    c.      We first check that T satisfies the Blackwell’s suﬃcient
conditions for a contraction. To show that T satisfies monotonicity,
let u, υ ∈ S with u(c) > υ(c) for all c. Then

               (T u)(c) = U (c0 ) + βu(1 c)
                          > U (c0 ) + βυ(1 c) = (T υ)(c).
            5 / Applications of Dynamic Programming                           83

To show discounting, note that

                [T (u + a)](c) = U (c0 ) + β[u(1 c) + a]
                                   = U (c0 ) + βu(1 c) + βa
                                   = (T u)(c) + βa.

     Hence the operator T : S → S is a contraction and therefore
û(c) = U (c0 ) + β û(1 c) where û is the unique fixed point of T. Notice
that û(1 c) = U (c1 ) + β û(2 c). Hence

                 û(c) = U (c0 ) + βU (c1 ) + β 2 û(2 c).
                                                       P
Continuing the recursion in this fashion, û(c) = ∞             t
                                                           t=0 β U (ct ).

     d.    For any u, υ ∈ S, the fact that kTW u − TW υk ≤ β ku − υk
follows immediately from the definition of TW and W3. Hence, TW is
a contraction and the existence of a unique fixed point uW is implied
by the Contraction Mapping Theorem. It is also a consequence of
the Contraction Mapping theorem that

                           n                     B
                         kTW u0 − uk ≤ β n          ,                       (5.2)
                                                1−β
where B is an upper bound for W.
   To prove that |uW (c) − uW (cn )| ≤ β n kuW k , define unW (c) =
uW (cn ). Then, for any c ∈ L,

               unW (c) = u(c0 , c1 , ..., cn−1 , 0, 0, ...)
                         = W (c0 , uW (c1 , ..., cn−1 , 0, 0, ...))
                         = W (c0, un−1
                                   W (1 c)).

while uW (c) = W [c0 , uW (1 c)], hence, by the contraction property,
W3,
                                       °          °
               kuW − unW k < β °uW − un−1     W
                                                  °
                                        °
                                       2°
                                                   °
                                               n−2 °
                                 ≤ β uW − uW
                                    ..
                                     .
                                        °         °
                                 ≤ β n °uW − u0W °
84         5 / Applications of Dynamic Programming

To complete the proof, we need u0 (c) = u(0, 0, ...) = 0, which is true
by W1 and the definition of TW .
    By W4 observe that TW takes increasing functions into increas-
ing functions. Applying (5.2) to an increasing initial guess u0 the
argument is complete.
    To prove the concavity of uw we prove first that if u ∈ S is
concave, so is Tw u. Take c, c0 ∈ L, θ ∈ (0, 1) and define cθ = θc +
(1 − θ)c0 . Then,

                 θ(TW u)(c) + (1 − θ)(TW u)(c0 )
             = θW [c0 , u(1 c)] + (1 − θ)W [c00 , u(1 c0 )]
             ≤ W [θc0 + (1 − θ)c00 , θu(1 c) + (1 − θ)u(1 c0 )]
             ≤ W [cθ0 , u(1 cθ )]
             = (TW u)(cθ )

where the first inequality follows from the concavity of W and the
second from the assumed concavity of u and the assumption that W
is increasing in all arguments. To complete the proof, use Corollary
1 of the Contraction Mapping Theorem for an initial u0 concave and
apply (5.2).

     e.    The utility function can be written as

                        uW (c) = W (c0 , uW (1 c)).

Hence the marginal rate of substitution between ci,t and cj,t+k is
given by
             W2 [ct , uw (t+1 c)]W1j [ct+k , uw (t+k+1 c)]
                                                           ,
                          W1i [ct , uw (t+1 c)]
where W1i [ct , uw (t+1 c)] is the partial derivative of W1 with respect
to the i’th good in period t, and W2 is the partial derivative of W
with respect to the second argument.
6 Deterministic Dynamics

Exercise 6.1

   a.      Pick any k ∈ (0, k̄]. To see that g(k) ∈ (0, k̄), suppose
g(k) = 0. Then,

               U 0 [f (k)] ≥ βυ0 (0) = βU 0 [f (0) − g(0)]f 0 (0)

but the left-hand side is finite while the right-hand side is not. There-
fore, it cannot be optimal to set g(k) = 0.
    Similarly, suppose g(k) = k̄. Because k ∈ (0, k̄], and consumption
is nonnegative, it must be that k = k̄. Hence,

           U 0 [f (k̄) − k̄] ≤ βυ0 (k̄) = βU 0 [f (k̄) − g(k̄)]f 0 (k̄),

but the left-hand side of the inequality stated above is not finite.
On the other hand, feasibility requires that g(k̄) ≤ k̄. If g(k̄) = k̄,
this implies zero consumption ever after, which is suboptimal. Hence
g(k̄) < k̄. But

         ∞ = U 0 (0) = U 0 [f (k̄) − k̄] ≤ βU 0 [f (k̄) − g(k̄)]f 0 (k̄),

and the right-hand
                 ¡ side
                      ¢ is finite, a contradiction.
   Since g (k) ∈ 0, k̄ , we can use theorem 4.11 to prove that υ is
diﬀerentiable and derive (2) and (3) .

    b.      Pick k, k0 ∈ (0, k] with k < k 0 . The proof is by contra-
diction. Suppose g(k) ≥ g(k 0 ). Then, υ strictly concave implies

    U 0 [f (k) − g(k)] = βυ0 [g(k)] ≤ βυ 0 [g(k0 )] = U 0 [f (k0 ) − g(k 0 )].

                                                                                 85
86                  6 / Deterministic Dynamics

Hence, by U strictly concave,
                      f (k) − g(k) ≥ f (k 0 ) − g(k0 ).
Then, f strictly increasing implies
                    g(k 0 ) − g(k) ≥ f (k0 ) − f (k) > 0
and so g(k0 ) > g(k), a contradiction.


Exercise 6.2

   a.    Towards a contradiction, pick k, k0 ∈ [0, 1] with k < k0 .
Suppose g(k 0 ) ≥ g(k). For this specific case, (7) is given by
                  "           µ          ¶θ #α−1
                                   k
                α (1 − g (k))
                                1 − g(k)
                  "µ          ¶θ              µ           ¶θ−1 #
                         k             θk           k
                ×                −
                     1 − g(k)       1 − g(k) 1 − g(k)
           = βυ 0 [g(k)].
As υ is strictly concave, we have

                "            µ           ¶θ #α−1
                                  k 0
              α 1 − g(k 0 ))
                              1 − g(k0 )
                "µ            ¶θ                µ            ¶θ−1 #
                      k0                θk 0        k0
              ×                  −
                   1 − g(k0 )        1 − g(k 0 ) 1 − g(k 0 )
                "            µ           ¶θ #α−1
                                   k
       ≤      α (1 − g(k))
                               1 − g(k)
                "µ           ¶θ                µ        ¶θ−1 #
                      k                θk          k
              ×                  −                                ,
                   1 − g(k)         1 − g(k) 1 − g(k)

and after some straightforward algebra,
                               ·           ¸
                          k0     1 − g(k0 ) γ
                      1<     <                ,
                           k     1 − g(k)
                     6 / Deterministic Dynamics                            87

where                      ·               ¸
                        (1 − θ)(α − 1) − θ
                    γ=−                      > 0.
                                θα
Hence,
                               1 − g(k0 )
                                          > 1,
                               1 − g(k)
and so g(k0 ) < g(k), a contradiction.



Exercise 6.3

    a.     To see that g maps [0, 1] into itself, note that g(0) =
g(1) = 0 and that g(xt ) is a quadratic equation with a maximum at
xt+1 = 1 when xt = 1/2. Figure 6.1 shows xt+1 as a function of xt
on the interval [0, 1] . The stationary points are the values of x that
solve x = 4x − 4x2 , which are x = 0, and x = 3/4.



                      Insert Figure 6.1 About Here



   b.      The function g 2 (xt ) is obtained by simply plugging xt+1 =
g(xt ) = 4xt − 4x2t into g(xt+1 ) = 4xt+1 − 4x2t+1 .
   Hence,
                              £          ¤   £           ¤2
          xt+2 = g 2 (xt ) = 4 4xt − 4x2t − 4 4xt − 4x2t
                  = 16xt − 80x2t + 128x3t − 64x4t ,

and so g 2 (0) = 0, g 2 (1/4) = 3/4, g 2 (1/2) = 0, g 2 (3/4) = 3/4, g 2 (1) =
0. Figure 6.2 shows the presence of two-cycles. The four stationary
points are {0, 0.3455, 0.75, 0.9045} .



                      Insert Figure 6.2 About Here
88                     6 / Deterministic Dynamics

    When xt = 0 or xt = 3/4 we know from part a. that xt+1 = 0
or xt+1 = 3/4, respectively. Hence, those points cannot represent a
two-cycle. Similarly, when xt = 0.3455 or xt = 0.9045 we know from
part a. that xt+1 6= 0.3455 or xt+1 6= 0.9045 respectively, but we
also know from above that xt+2 = 0.3455 or xt+2 = 0.9045, therefore
those stationary points are our candidates for a two-cycle.
    Starting the system at x = 0.3455 or x = 0.9045 we can see
that the system oscillates between those two numbers, showing the
presence of a two-cycle.
    The function g 3 (x) can be obtained in a similar fashion.


Exercise 6.4

      The suﬃcient condition for (8) to hold is

                                    (1 + β)2 c2
                             bd −               ≥ 0.
                                        4β
In this setup, we can write the right-hand side of (8) as


       β(x − x̄)[b(x − x̄) + c(y − x̄)] + (y − x̄) [c(x − x̄) + d(y − x̄)]

or
             bβ(x − x̄)2 + (1 + β)c(x − x̄)(y − x̄) + d(y − x̄)2 .
Adding and substracting
                      ·             ¸
                        (1 + β)2 c2
                                      (y − x̄)2
                           4bβ
to the above expression to “complete the square” we obtain

                     (1 + β)c                       (1 + β)2 c2
         bβ[(x − x̄)2 +         (x − x̄) (y − x̄) +             (y − x̄)2 ]
                         bβ                            4bβ
             (1 + β)2 c2
       +[d −             ] (y − x̄)2
                4bβ
         ·                              ¸2
                     (1 + β)c                 1       (1 + β)2 c2
     = bβ (x − x̄) +            (y − x̄) + [bd −                  ] (y − x̄)2 ,
                        2bβ                   b           4β
                    6 / Deterministic Dynamics                       89

so a suﬃcient condition for this expression to be negative is that
                                (1 + β)2 c2
                         bd −               ≥ 0.
                                    4β


Exercise 6.5

    A matrix is nonsingular if and only if its determinant is not equal
to zero. We are going to show that this is the case for A and (I − A) .
    Recall that the determinant of a partitioned matrix
                               ·             ¸
                                 C11 C12
                         C=
                                 C21 C22

can be written (if C11 and C22 are invertible) as
                                   ¯                   ¯
              det(C) = |C22 | · ¯C11 − C12 C22  −1
                                                   C21 ¯
                                   ¯                   ¯
                        = |C11 | · ¯C22 − C21 C −1 C12 ¯ .
                                                   11

For the case of A, we can write its determinant as
                                     ¯       ¯
                   det (A) = |J| · ¯−J −1 K ¯
                                = c det (K)
                                    ¯           ¯
                                    ¯ −1 −1 0 ¯
                                = c ¯−β Fxy Fxy ¯
                                = cb
                                = β −l

where c = (−1)l , b = (−β)−l .
   Similarly, we can write the determinant of (I − A) as

 det(I − A) = |I − J − K|
              ¯                                                   ¯
            = ¯I − (−β −1 Fxy
                            −1
                               (Fyy + βFxx )) − (−β −1 Fxy −1 0 ¯
                                                             Fxy )
              ¯                                      ¯
            = ¯β −1 Fxy
                     −1
                        (βFxy + Fyy + βFxx + Fxy 0 ¯
                                                   )
              ¯         ¯ ¯                            ¯
            = ¯β −1 Fxy
                     −1 ¯ ¯
                         · βFxy + Fyy + βFxx + Fxy  0 ¯
                                                         .
                −1 and (βF +F +βF +F 0 ) nonsingular implies
   Therefore, Fxy         xy yy  xx xy
that (I − A) nonsingular.
90                     6 / Deterministic Dynamics

Exercise 6.6

     a.       The characteristic polynomial for A is

                  λ2 + λβ −1 Fxy
                              −1
                                 (Fyy + βFxx ) + β −1 = 0.

Hence,
                                        q
                                               −2
             −β −1 Fxy
                    −1 (F + βF ) ±
                         yy   xx         β −2 Fxy (Fyy + βFxx )2 − 4β −1
λ1 , λ2 =                                                                  ,
                                           2
and for (λ1 , λ2 ) to both be real it must be that

                          (Fyy + βFxx )2 ≥ 4βFxy
                                              2
                                                 .
                                                                2 .
   Also, F strictly concave implies that Fxx < 0 and Fyy Fxx > Fxy
Hence it is enough to show that

                        (Fyy + βFxx )2 ≥ 4βFyy Fxx .

But
                               2                 2
                              Fyy − 2βFxx Fyy + Fxx
                          = (Fyy − βFxx )2
                          = (βFxx − Fyy )2 ≥ 0.


    b.     The result comes from simple inspection of the equation
determining (λ1 , λ2 ). It is obvious from the result obtained in a. that
                                   q
                                            −2
      −β −1 Fxy
             −1 (F + βF ) +
                   yy         xx      β −2 Fxy (Fyy + βFxx )2 − 4β −1
λ1 =                                                                  >0
                                      2
     To see that λ2 > 0, it is straightforward that if λ2 < 0 then
                                  q
         −1 −1                            −2
      −β Fxy (Fyy + βFxx ) < β −2 Fxy        (Fyy + βFxx )2 − 4β −1 ,

which implies

          β −2 Fxy
                −2
                   (Fyy + βFxx )2 < β −2 Fxy
                                          −2
                                             (Fyy + βFxx )2 − 4β −1 ,
                   6 / Deterministic Dynamics                          91

a contradiction with β > 0.

   c.      The proof parallels the argument in b.


Exercise 6.7

    a.   Actually, Assumption 4.9 is not needed for uniqueness of
the optimal capital sequence.

   A4.3:      K = [0, 1] ⊆ Rl and the correspondence

                         Γ(k) = {y : y ∈ K}

is clearly compact-valued and continuous.

     A4.4:     F (k, y) = (1 − y)(1−θ)α kθα is clearly bounded in K, and
it is also continuous. Also, 0 ≤ β ≤ 1.

   A4.7:      Clearly F is continuously diﬀerentiable, then

        Fk = θα(1 − y)(1−θ)α kθα−1
        Fy = −(1 − θ)α(1 − y)(1−θ)α−1 k θα
        Fkk = θα(1 − y) (θα − 1)(1−θ)α kθα−2 < 0
        Fyy = (1 − θ)α[(1 − θ) α − 1](1 − y)(1−θ)α−2 k θα < 0
        Fxy = −θα (1 − θ) α(1 − y)(1−θ)α−1 k θα−1 < 0,
               2 > 0, hence F is strictly concave.
and Fkk Fyy − Fxy

    A4.8:     Take two arbitrary pairs (k, y) and (k0 , y0 ) and 0 < π <
1. Define k π = πk + (1 − π)k0 , yπ = πy + (1 − π)y 0 . Then, since
Γ(k) = {y : 0 ≤ y ≤ 1} for all k it follows trivially that if y ∈ Γ(k)
and y0 ∈ Γ(k0 ) then y π ∈ Γ(k π ) = Γ(k) = Γ(k0 ) = K.

   A4.9:     Define A = K ×K as the graph of Γ. Hence F is contin-
uously diﬀerentiable because U and f are continuously diﬀerentiable.
The Euler equation is

    α(1 − θ)(1 − kt+1 )(1−θ)α−1 ktθα = βαθ (1 − kt+2 )(1−θ)α kt+1
                                                              θα−1
                                                                   .
92                   6 / Deterministic Dynamics

     b.     Evaluating the Euler equation at kt+1 = kt = k∗ , we get

                         (1 − θ)k ∗ = βθ (1 − k∗ ) ,

or
                                         βθ
                              k∗ =              .
                                     1 − θ + βθ

     c.     From the Euler equation, define

                          W (kt , kt+1 , kt+2 )
                     ≡ α(1 − θ)(1 − kt+1 )(1−θ)α−1 ktθα
                          −βαθ (1 − kt+2 )(1−θ)α kt+1
                                                  θα−1

                     = 0.

     Hence, expanding W around the steady state

 W (kt , kt+1 , kt+2 ) = W (k ∗ , k ∗ , k ∗ ) + W1 (k∗ ) (kt − k∗ )
                            +W2 (k ∗ ) (kt+1 − k∗ ) + W3 (k ∗ ) (kt+2 − k∗ ) ,

where

     W1 (k∗ ) = α2 (1 − θ)θ(1 − k ∗ )(1−θ)α−1 (k ∗ )θα−1 ,
     W2 (k∗ ) = −α(1 − θ) [(1 − θ) α − 1] (1 − k ∗ )(1−θ)α−2 (k∗ )θα
                   −βθα(θα − 1) (1 − k∗ )(1−θ)α (k ∗ )θα−2 ,
     W3 (k∗ ) = βθα2 (1 − θ) (1 − k∗ )(1−θ)α−1 (k ∗ )θα−1 .

    Normalizing by W3 (k ∗ ) and using the expression obtained for the
steady state capital we finally get

            β −1 (kt − k∗ ) + B (kt+1 − k ∗ ) + (kt+2 − k∗ ) = 0,

where
                             1 − α(1 − θ) 1 − αθ
                       B=                +       .
                               α(1 − θ)    αθβ
     That both of the characteristic roots are real comes from the fact
that the return function satisfies Assumptions 4.3-4.4 and 4.7-4.9 and
it is twice diﬀerentiable, so the results obtained in Exercise 6.6 apply.
                  6 / Deterministic Dynamics                      93

   To see that λ1 = (βλ2 )−1 it is straightforward from the fact that
             Ã         p              !Ã          p             !
               (−B) + B 2 − 4β −1          (−B) − B 2 − 4β −1
   λ1 λ2 =
                         2                           2
            (−B)2 − (B 2 − 4β −1 )
          =
                     4
          = β −1 .

To see that λ1 + λ2 = −B, just notice that
                     p                     p
             (−B) + B 2 − 4β −1 (−B) − B 2 − 4β −1
  λ1 + λ2 =                      +                 = −B.
                      2                     2
Then, λ1 λ2 > 0 and λ1 +λ2 < 0 implies that both roots are negative.
    In order to have a locally stable steady state k∗ we need one of
the characteristic roots to be less than one in absolute value. Given
that both roots are negative, this implies that we need λ1 > −1, or
                             q
                      −B + B 2 − 4β −1 > −2,

which after some straightforward manipulation implies

                                 1+β
                            B>       .
                                  β

Substituting for B we get

                          1 − θ + θβ
                                        > α,
                       2θ(1 + β)(1 − θ)

or equivalently
                            (2θα − 1)(1 − θ)
                       β>                    .
                            [1 − 2α(1 − θ)]θ

    d.      To find that k∗ = 0.23, evaluate the equation for k ∗ ob-
tained in b. at the given parameter values. To see that k∗ is un-
stable, evaluate λ1 at the given parameter values. Notice also that
those parameter values do not satisfy the conditions derived in c.
94                    6 / Deterministic Dynamics

     e.      Note that since F is bounded, the two-cycle sequence sat-
isfies the transversality conditions

                       lim β t F1 (x, y) · x = 0       and
                      t→∞
                       lim β t F1 (x, y) · y = 0,
                      t→∞

for any two numbers x, y ∈ [0, 1], x 6= y. Hence, by Theorem 4.15, if
the two cycle (x, y) satisfies

                     Fy (x, y) + βFx (y, x) = 0         and
                     Fy (y, x) + βFx (x, y) = 0,

it is an optimal path.
     Conversely, if (x, y) is optimal and the solution is interior, then
it satisfies

              Fy (x, y) + βυ 0 (y) = 0     and   υ 0 (y) = Fx (y, x),
              Fy (y, x) + βυ 0 (x) = 0     and   υ 0 (x) = Fx (x, y),

and hence it satisfies the Euler equations stated in the text.
    Notice that the pair (x, y) defining the two-cycle should be re-
stricted to the open interval (0, 1).

     f.      We have that

          Fy (x, y) + βFx (y, x) = βαθy αθ−1 (1 − x)α(1−θ)
                                         −α(1 − θ)xαθ (1 − y)α(1−θ)−1 ,

and

          Fy (y, x) + βFx (x, y) = βαθxαθ−1 (1 − y)α(1−θ)
                                         −α(1 − θ)y αθ (1 − x)α(1−θ)−1

    The pair (0.29, 0.18) makes the above set of equations equal to
zero, and from the result proved in part e. we already know this is
a necessary and suﬃcient condition for the pair to be a two-cycle.
                     6 / Deterministic Dynamics                           95

   g.      Define
  E 1 (kt , kt+1 , kt+2 , kt+3 ) ≡ −α(1 − θ)kt+1 αθ (1 − kt+2 )α(1−θ)−1
                                       αθ−1
                                  +βαθkt+2  (1 − kt+3 )α(1−θ)
                              = −α(1 − θ)xαθ (1 − y)α(1−θ)−1
                                  +βαθy αθ−1 (1 − x)α(1−θ)
                              = 0
  E (kt , kt+1 , kt+2 , kt+3 ) ≡ −α(1 − θ)kt αθ (1 − kt+1 )α(1−θ)−1
    2

                                       αθ−1
                                  +βαθkt+1  (1 − kt+2 )α(1−θ)
                              = −α(1 − θ)y αθ (1 − x)α(1−θ)−1
                                  +βαθxαθ−1 (1 − y)α(1−θ)
                              = 0.
Let Eij be the derivative of E j with respect to the ith argument.
Then, the derivatives are
        E11 = 0,
        E21 = −α2 θ(1 − θ)xαθ−1 (1 − y)α(1−θ)−1 ,
        E31 = −α(1 − θ)xαθ [α(1 − θ) − 1](1 − y)α(1−θ)−2
                    +βαθ(αθ − 1)y αθ−2 (1 − x)α(1−θ) ,
        E41 = βαθy αθ−1 (1 − x)α(1−θ)−1 ,
        E12 = −α2 θ(1 − θ)yαθ−1 (1 − x)α(1−θ)−1 ,
        E22 = −α(1 − θ)y αθ [α(1 − θ) − 1](1 − x)α(1−θ)−2
                    +βαθ(αθ − 1)xαθ−2 (1 − y)α(1−θ) ,
        E32 = βαθxαθ−1 (1 − y)α(1−θ)−1 ,
        E42 = 0.
Using the fact that kt+2 = kt in E1 , expand this system around
(0.29,0.18). Denoting by K̂ deviations around the stationary point
K̄, we can express the linearized system as
                       ·       ¸      ·       ¸
                         k̂t+3          k̂t+1
             K̂t/2+1 =           = Ĥ           = Ĥ K̂t/2
                         k̂t+2            k̂t
where                    ·           ¸−1 ·             ¸
                             E41 0           E21 E11
                  Ĥ =                                     .
                             0 E32           E22 E12
96                   6 / Deterministic Dynamics

    By evaluating Ĥ for the given parameters, it can be verified that
the system is unstable around the stationary point K̄ = (0.29, 0.18).


Exercise 6.9

     a.       To show that the functional equation
                          n h ³ y ´i                           o
          υ(x) = max S xφ            − θ [y − (1 − δ)x] + βυ(y)
                 y∈[0,αx]        x

has a unique continuous bounded solution, it is suﬃcient to check
that the assumptions of Theorem 4.6 are satisfied.

     A4.3:       X = R+ ⊆ Rl . Define the correspondence

                      Γ(x) = {y ∈ X : 0 ≤ y ≤ αx} .

Hence Γ is nonempty because y = 0 ∈ Γ for all x ∈ X. It is also
clearly compact-valued and continuous (see Exercise 3.13a.).

     A4.4:       Define
                             h ³ y ´i
                 F (x, y) = S xφ      − θ [y − (1 − δ)x] .
                                 x
Hence F is a bounded and continuous function by S bounded and
continuous and x ∈ R+ . Also, β ∈ (0, 1) . Notice that S is homo-
thetic, but not necessarily homogeneous in (x, y). Hence Theorem
4.6 applies.

    Next, we prove that υ, the unique solution to the functional equa-
tion above, is strictly increasing and strictly concave.

    A4.5:      F (x, y) strictly increasing in x follows from S being
strictly increasing in q and q strictly increasing in x (the last fact
implied by φ being nonnegative and strictly decreasing).

     A4.6:       Γ is monotone. Pick two arbitrary x, x0 ∈ X with x ≤
x0 . Then, if 0 ≤ y ≤ αx, we have 0 ≤ y ≤ αx0 and hence Γ(x) ⊆ Γ(x0 ).
     Therefore, by Theorem 4.7, υ is strictly increasing.
                     6 / Deterministic Dynamics                     97

    A4.7:      By assumption S and φ are strictly concave functions.
As F is a composition of weakly concave and strictly concave func-
tions, F is strictly concave.

    A4.8:      Pick two arbitrary pairs (x, y) and (x0 , y0 ) where y ∈
Γ(x) and y ∈ Γ(x0 ), for 0 < π < 1. Define xπ and yπ as be-
             0

fore. We need to show that y π ∈ Γ(xπ ). By definition Γ(xπ ) =
{y π : 0 ≤ yπ ≤ αxπ } . Note that also by definition, if y ∈ Γ(x) then
y ≥ 0 and y ≤ αx, and therefore πy ≥ 0 and πy < παx. Hence
πy ∈ Γ(πx). Proceeding in the same fashion it can be shown that
(1 − π)y 0 ∈ Γ((1 − π)x0 ). Therefore, 0 ≤ y π ≤ αxπ . Hence Γ is
convex.

   So, by Theorem 4.8, υ is strictly concave and the optimal policy
function g is single valued and continuous. Define
                  A = {(x, y) ∈ X × X : y ∈ Γ(x)}
as the graph of Γ.

    A4.9:      The return function F is continuously diﬀerentiable in
the interior of A, by S and φ continuously diﬀerentiable.

   Hence, by Theorem 4.11 υ is diﬀerentiable, with
   υ 0 (x) = Fx (x, y)
                · µ          ¶¸ ½ µ       ¶          µ      ¶¾
              0        g (x)        g (x)     g (x) 0 g (x)
           = S xφ                φ          −      φ
                         x            x         x       x
             +θ(1 − δ).

     b.     The proof is by contradiction. Take x, x0 ∈ X. with x <
x0 . Suppose g(x) > g(x0 ). Then, using the first order condition,
                             · µ        ¶¸ µ        ¶
                           0      g (x)    0 g (x)
                    θ − S xφ              φ
                                    x            x
                       0
                = βυ [g(x)]
                < βυ 0 [g(x0 )]
                           ·    µ         ¶¸ µ        ¶
                         0    0   g (x0 )           0
                                             0 g (x )
                = θ−S xφ                    φ           ,
                                    x0           x0
98                     6 / Deterministic Dynamics

where the inequality comes from the strict concavity of υ. Hence,
      · µ         ¶¸ µ       ¶        ·    µ         ¶¸ µ      0 ¶
    0       g (x)    0 g (x)        0   0    g (x0 )    0 g (x )
 −S xφ              φ          < −S x φ                φ           ,
              x          x                     x0           x0

but                           µ           ¶           µ             ¶
                          0       g (x)           0       g (x0 )
                       −φ                     > −φ                      ,
                                    x                       x0
and therefore
                 · µ       ¶¸     ·   µ         ¶¸
                   0 g (x)      0   0   g (x0 )
                S xφ          <S xφ                ,
                       x                  x0

and S 0 < 0 implies that
                        µ       ¶     µ         ¶
                          g (x)     0   g (x0 )
                     xφ           >xφ             ,
                            x             x0
or                            µ           ¶      µ            ¶
                           g (x)                 g (x0 )
                         φ                    >φ                  .
                             x                     x0
Hence,
                                    g(x) < g(x0 ),
a contradiction.

      c.   Combining the first order condition
                   · µ       ¶¸ µ         ¶
                 0     g (x)      0 g (x)
            θ − S xφ            φ           = βυ 0 [g(x)],
                         x            x

and the envelope condition, the Euler equation is given by the ex-
pression
                    ·    µ      ¶¸ µ          ¶
                  0        xt+1       0 xt+1
             θ − S xt φ             φ
                            xt            xt
               ½ ·         µ      ¶¸
                             xt+2
         = β S 0 xt+1 φ
                             xt+1
               · µ        ¶            µ      ¶¸           ¾
                     xt+2      xt+2 0 xt+2
             × φ            −       φ            + θ(1 − δ) .
                     xt+1      xt+1      xt+1
                    6 / Deterministic Dynamics                         99

    At a stationary point, xt+1 = xt = x̄. Hence, a necessary condi-
tion for a stationary point is

                                      θ [1 − β(1 − δ)]
                  S 0 [x̄φ(1)] = £                      ¤.
                                   βφ(1) + φ0 (1)(1 − β)
Therefore, by the strict concavity of S there is a unique x̄ > 0 satis-
fying the condition above.
    Notice that
                                 β          φ0 (1)
                                       >−          .
                              (1 − β)       φ(1)
If this condition is not satisfied, the steady state does not exist.
    To decide if our candidate is indeed a stationary point, we can
use the fact that υ is strictly concave, then
             © 0                  ª
               υ (x) − υ 0 [g(x)] [x − g(x)] ≤ 0, all x ∈ X
with equality if and only if g(x) = x. Substituting for υ 0 (x) from the
envelope condition and for υ 0 [g(x)] from the first order condition,
      ½ · µ             ¶¸ ½ µ         ¶    µ       ¶·             ¸¾
         0        g (x)          g (x)     0 g (x)      1 g (x)
        S xφ                 φ           +φ               −
                    x              x            x       β      x
                       ¾
                     θ
      +θ(1 − δ) −        [x − g(x)] ≤ 0,
                     β
all x ∈ X, S 0 [x̄φ(1)]φ00 (1)with equality if and only if g(x) = x. Since
the left-hand side of the above inequality is zero when evaluated at
x̄, it follows that g(x̄) = x̄, so x̄ is a stationary point.
   d.      Expanding the Euler equation at the stationary point we
obtain that
        ½ 0                                                  ¾
          S [x̄φ(1)]φ00 (1)    00           0            0
                            − S [x̄φ(1)]φ (1)[φ(1) − φ (1)] (xt − x̄)
                 x̄
          ½ 0                                       ¾
            S [x̄φ(1)]φ00 (1)
        −                     + S 00 [x̄φ(1)]φ02 (1) (xt+1 − x̄),
                    x̄
equals
      ½ 0                                            ¾
       S [x̄φ(1)]φ00 (1)    00                0    2
    β                    + S [x̄φ(1)][φ(1) − φ (1)] (xt+1 − x̄)
               x̄
       ½ 0                                                ¾
         S [x̄φ(1)]φ00 (1)     00       0             0
    −β                     − S [x̄φ(1)]φ (1)[φ(1) − φ (1)] (xt+2 − x̄).
                  x̄
100                     6 / Deterministic Dynamics

Rearranging terms we obtain

                             Axt+2 = Bxt+1 + Cxt ,

where
             ½                                                           ¾
                   00        0              0        S 0 [x̄φ(1)]φ00 (1)
      A = β S [x̄φ(1)]φ (1)[φ(1) − φ (1)] −                                ,
                                                              x̄
                                 S 0 [x̄φ(1)]φ00 (1)
      B = S 00 [x̄φ(1)]φ02 (1) −
                                      x̄(1 + β)
          −βS [x̄φ(1)][φ(1) − φ0 (1)]2 ,
                  00



and
                  S 0 [x̄φ(1)]φ00 (1)
           C=                         − S 00 [x̄φ(1)]φ0 (1)[φ(1) − φ0 (1)].
                           x̄
                                                                     0
By inspection A > 0, B > 0 and C < 0. We can define Xt = (xt+1 , xt )
to write the second order diﬀerence equation as
       ·           ¸                       ·                    ¸·            ¸
           xt+2                                B/A     C/A           xt+1
                       = Xt+1 = DXt =
           xt+1                                1       0             xt

Note that
                        n h ³ y ´i h ³ y ´       ³y ´ y i ³y ´
           Fxy =         S 0 xφ       φ     − φ0         φ
                              h ³xy ´i ³xy ´ y o x x       x
                            0          00
                        −S xφ         φ          > 0,
                                  x       x x2

so both roots are positive.
    The characteristic function H(λ) is

                          H(λ) = λ2 − B/Aλ − C/A,

so H(0) = −C/A > 0, and H 0 (λ) = 2λ − B/A. In order to prove
local stability, we need to prove that one of the roots is less than
one. If there is a root that is less than one, it must be the case that
H(1) = 1 − B/A − C/A < 0, or equivalently that B > A − C. The
                     6 / Deterministic Dynamics                               101

proof is by contradiction. Suppose B < A − C, then
                                S 00 [x̄φ(1)]φ00 (1)
            S 00 [x̄φ(1)]φ02 (1) −
                                      x̄(1 + β)
          −βS [x̄φ(1)][φ(1) − φ0 (1)]2
                00
           ½                                                              ¾
                                                     S 00 [x̄φ(1)]φ00 (1)
        > β S 00 [x̄φ(1)]φ0 (1)[φ(1) − φ0 (1)] −
                                                               x̄
             00         00
            S x̄φ(1)]φ (1)
          −                   + S 00 [x̄φ(1)]φ0 (1)[φ(1) − φ0 (1)],
                    x̄
which after some manipulation can be written as

                       β[φ(1) − φ0 (1)] + φ0 (1) < 0.

But, as we mentioned before, a necessary condition for the steady
state to exist is β[φ(1) − φ0 (1)] + φ0 (1) > 0, a contradiction.

   e.     The local stability of the Euler equation and the fact that
Fxy > 0 implies, by Theorem 6.9 and Exercise 6.6, that in a neigh-
borhood U of the steady state x̄,
                       g(x0 ) − g(x̄)
                 0<                   < 1,        for x0 ∈ U.
                          x0 − x̄
Hence, for any x0 ∈ U, g(x0 ) is greater than, equal to, or less than x0
as x0 is greater than, equal to, or less than x̄. Next, pick any x0 ∈ ∂U
with x0 < x̄, and x00 = x0 − ε, for any arbitrary ε > 0. Therefore,
g(x00 ) > x00 , otherwise g(x0 − ε) < x0 − ε and g(x0 ) > x0 which
implies, by the continuity of g, that there exist x̂ ∈ (x0 − ε, x0 ) such
that g(x̂) = x̂, a contradiction to the uniqueness of the stationary
point x̄ > 0. A similar argument can be made for any x0 ∈ ∂U with
x0 > x̄.
     Hence g(x) is greater than, equal to, or less than x0 as x0 is greater
than, equal to, or less than x̄ for any x > 0, which coupled with g
being continuous and strictly increasing implies that for all x0 > 0,
the solution to xt+1 = g(xt ) will converge monotonically to x̄. An
argument constructing a Liapunov function L : X → X defined by
L = (x − x̄)[υ0 (x) − υ 0 (x̄)] for any compact set X ⊆ R++ including
x̄ completes the proof.
7 Measure Theory and Integration

Exercise 7.1

   Let
                    σ hAi = ∩{σ-algebras F: A⊂F} F
be the smallest σ-algebra containing A. We will refer to this as the
σ-algebra generated by A. This is non-empty because the power set
of S (that is, the set of all subsets of S) is a σ-algebra containing A.

   A ∈ σ hAi : Let A ∈ A. Then A ∈ F for all σ-algebra’s F
containing A. Hence A ∈ σ hAi.

   S, ∅ ∈ σ hAi : S, ∅ are elements of all σ-algebra’s of subsets of S.

    A ∈ σ hAi ⇒ Ac ∈ σ hAi : If A ∈ σ hAi then A is an element of
all σ-algebra’s F containing A. Hence Ac is an element of every F
and Ac ∈ σ hAi .

    An ∈ σ hAi , n ≥ 1 ⇒ ∪∞  n=1 An ∈ σ hAi : If An ∈ σ hAi , n ≥ 1,
then An is an element of all σ-algebra’s F containing A. Hence
∪∞                                      ∞
  n=1 An is an element of every F and ∪n=1 An ∈ σ hAi .



Exercise 7.2

    Note:      On page 169, the text defines B1 , the Borel algebra
for R1 , as the σ-algebra generated by the open sets. However, on
page 170, the text defines the Borel algebra for higher-dimension
Euclidean spaces as the σ-algebra generated by the open balls, or

102
               7 / Measure Theory and Integration                   103

equivalently, the open rectangles, which in R1 are the open intervals.
We will start by showing that these two definitions are equivalent,
before turning to Exercise 7.2 itself.
    Following the text denote by A the collection of open intervals in
R, and denote by A1 the collection of open sets in R. We will show
that σ hAi = σ hA1 i . Note that as A ⊂ A1 , σ hA1 i is a σ-algebra
containing A and hence σ hAi ⊂ σ hA1 i . To show the reverse, we
will establish that A1 ⊂ σ hAi, which follows from the result that
every open set can be written as a countable union of open intervals.
To see this, let C be an arbitrary open set, and let D = C ∩ Q where
Q is the set of rational numbers. As C is open, for all x ∈ D there
exists an ² > 0 such that


                       Ex ≡ (x − ², x + ²) ⊂ C


As D is countable,

                           ∪x∈D Ex ∈ σ hAi

Clearly ∪x∈D Ex ⊂ C. That ∪x∈D Ex ⊃ C follows from the fact that
C is open and the fact that the rationals are dense in Q.
     Let A2 be the collection of closed intervals in R. That is, the
collection of sets of the form (−∞, b] , [a, b] , [a, +∞) , (−∞, +∞) for
a, b ∈ R, a ≤ b. Let σ hA2 i be the σ-algebra generated by A2 . For
any a, b ∈ R, the sets

                                  µ           ¸
                                            1
                 (−∞, b) =      ∪∞
                                 n=1−∞, b −
                                            n
                                  ·             ¸
                               ∞      1       1
                     (a, b) = ∪n=1 a + , b −
                                      n       n
                                  ·           ¶
                               ∞      1
                 (a, +∞) = ∪n=1 a + , +∞
                                      n


Hence, the collection of open intervals A ⊂ σ hA2 i and as σ hA2 i is
104            7 / Measure Theory and Integration

a σ-algebra containing A, B1 ⊂ σ hA2 i . Similarly,
                                  µ              ¶
                                               1
                (−∞, b] = ∩∞  n=1   −∞,   b  +
                                               n
                                  µ                ¶
                              ∞          1       1
                    [a, b] = ∩n=1 a − , b +
                                         n       n
                                  µ              ¶
                                         1
                [a, +∞) = ∪∞  n=1   a  −   , +∞
                                         n
and hence σ hA2 i ⊂ B1 .
    Let A3 be the collection of intervals in R open from the left and
closed from the right (that is, of the form (a, b] for a, b ∈ R, a ≤ b),
and let σ hA3 i be the σ-algebra generated by A3 . The proof that
σ hA3 i = B1 proceeds analogously to that for A2 .
    Let A4 be the collection of half rays in R of the form (a, +∞)
for some a ∈ R, and let σ hA4 i be the σ-algebra generated by A4 .
We will show that σ hA4 i = σ hA3 i . Clearly, A4 ⊂ σ hA3 i and
hence σ hA4 i ⊂ σ hA3 i . To see that σ hA3 i ⊂ σ hA4 i , note that
A3 ⊂ σ hA4 i from the fact that
                    (a, b] = (a, +∞) ∩ (−∞, b)
                           = (a, +∞) ∩ (b, +∞)c


Exercise 7.3

   Clearly, ∅ and S are in BS .
   Let A ∈ BS . Then the complement of A relative to S, or
                         S\A = S ∩ Ac ∈ BS
as Bl is closed under complementation and finite intersections.
    Let An ∈ BS for n = 1, 2, ... Then ∪∞
                                        n=1 An is an element of B
                                                                  l

and a subset of S. Hence,
                            ∪∞
                             n=1 An ∈ BS



Exercise 7.4
               7 / Measure Theory and Integration                105

    We need to establish that the λ in a. and b. are extended real
valued functions satisfying the properties of measures. Typically,
these properties are obvious with the possible exception of countable
additivity.

    a.   Let {An }∞
                  n=1 be a countable sequence of disjoint subsets
in S. Then

           λ (∪∞               ∞               ∞
               n=1 An ) = µ1 (∪n=1 An ) + µ2 (∪n=1 An )
                          X∞             ∞
                                         X
                        =     µ1 (An ) +    µ2 (An )
                             n=1                n=1
                             X∞
                         =         λ (An ) .
                             n=1



    b.   Let {An }∞
                  n=1 be a countable sequence of disjoint subsets
in S. Then

                λ (∪∞                ∞
                    n=1 An ) = µ1 ((∪n=1 An ) ∩ B)
                             = µ1 (∪∞
                                    n=1 (An ∩ B))
                               X∞
                             =     µ1 (An ∩ B)
                                   n=1
                                   X∞
                             =           λ (An ) ,
                                   n=1

where the second inequality comes from the fact that the intersec-
tion distributes, and the third equality comes from the fact that the
{An ∩ B} are disjoint.


Exercise 7.5

   As A ⊆ B there exists a C = B\A = B ∩ Ac ∈ S such that
A ∪ C = B and A ∩ C = ∅. Hence,

                      µ (A) + µ (C) = µ (B) .
106            7 / Measure Theory and Integration

As µ (C) ≥ 0 we have µ (A) ≤ µ (B) . Further, if µ (A) is finite,
µ (B) − µ (A) is well defined and

                 µ (C) = µ (B\A) = µ (B) − µ (A) .



Exercise 7.6

     a.     Let A be the family of all complements and finite unions
of intervals of the form (a, b] , (−∞, b] , (a, +∞) , and (−∞, +∞) for
a, b ∈ R, a ≤ b. Let C be the collection of sets that can be written
as a finite disjoint union of such intervals. We follow the Hint and
show that A ⊂ C.
     Let A ∈ A. Then by the definition of A, there are three pos-
sibilities. If A is an interval of this form, then A ∈ C. If A is a
finite union of such intervals, A can always be written as a disjoint
finite union of such intervals, and hence A ∈ C. Finally, if A is a
complement of such an interval, note that

               (−∞, b]c = (b, +∞)
                  (a, b]c = (−∞, a] ∪ (b, +∞) ∈ C.

Hence A ⊂ C.
    To show that A is an algebra, note that it obviously contains ∅
and R, and is closed under finite unions. Closure under complemen-
tation follows from the fact that, for a, b, c, d ∈ R, a ≤ b ≤ c ≤ d

          ((a, b] ∪ (c, d])c = (−∞, a] ∪ (b, c] ∪ (d, +∞) ∈ A
       ((−∞, b] ∪ (c, d])c = (b, c] ∪ (d, +∞) ∈ A
       ((a, b] ∪ (c, +∞))c = (−∞, a] ∪ (b, c] ∈ A.


    b.    We showed in Exercise 7.2 that B1 is the smallest σ-algebra
containing the intervals in R open from the left and closed from the
right. Hence, B1 ⊂ σ hAi . To show that σ hAi ⊂ B1 , we need to
show that A ⊂ B1 . But B1 contains the half-open intervals and is
closed under complementation and finite unions.
               7 / Measure Theory and Integration                   107

Exercise 7.7

   Note: the definition of a measure µ on an algebra A should have
specified that µ is an extended real valued function.

    a.     Obviously, µ is extended real valued and µ (∅) = 0. Let
A ∈ A. Then by Exercise 7.6 a. there exists a finite number of
disjoint half-open intervals An for n = 1, ..., N such that ∪N
                                                             n=1 An =
A. By property 4,

                                     N
                          ¡ N     ¢ X
                 µ (A) = µ ∪n=1 An =   µ (An ) ,
                                             n=1

which is non-negative as for all n = 1, ..., N the µ (An ) are non-
negative from properties 2 and 3.
     To show countable additivity, let {Ai }∞i=1 be a countably infinite
sequence of disjoint sets in A with ∪∞   i=1 i ≡ A ∈ A. Since A is a
                                            A
finite disjoint union of intervals of the form

                 (a, b] , (−∞, b] , (a, +∞) , (−∞, +∞)

the sequence {Ai } can be partitioned into finitely many subsequences
such that the union of the interavls in each subsequence is a single
interval of this form. By using such subsequences separately, and
using the finite additivity of µ we may assume that A is of this form.
Then

               µ (A) = µ (∪ni=1 Ai ) + µ (A\ ∪ni=1 Ai )
                                       Xn
                     ≥ µ (∪ni=1 Ai ) =     µ (Ai ) ,
                                            i=1

where the equalities comes from finite additivity and the inequality
by non-negativity. Letting n → ∞ we get
                                   ∞
                                   X
                         µ (A) ≥         µ (Ai ) .
                                   i=1
108             7 / Measure Theory and Integration

    To see the converse, first assume that A = (a, b] for a, b ∈ R.
                    ∞
Let
P∞ ε > 0 and {εn }n=1 be a sequence of real numbers such that
  n=1 εn < ε. Renumber the collection of intervals Ai such that

        a = a1 < b1 ≤ a2 < ... < bn−1 ≤ an < bn ≤ an+1 < ...,

and construct the collection of open intervals Bn such that

                        B1 = (a1 − ε1 , b1 + ε1 ) ,

and for n ≥ 2
                          Bn = (an , bn + εn ) .
Clearly, these intervals form a open covering of the set [a, b] . But
this set is compact, and hence there exists a finite open subcover,
say {Bnk }Kk=1 . We may renumber these intervals such that

a = an1 ≤ an2 < b1 + ε1 < ... < ank < bnk−1 + εnk−1 ≤ b < bnk + εnk .

Hence

             µ ((a, b]) = b − a ≤ (bnK + εnK − an1 )
                                       K
                                       X
                                 ≤           [bnk + εnk − ank ]
                                       k=1
                                       K
                                       X
                                 <           [bnk − ank ] + ε
                                       k=1
                                       X∞
                                 ≤           [bn − an ] + ε.
                                       n=1

But as ε is arbitrary
                                        ∞
                                        X
                 µ ((a, b]) = b − a ≤         µ ((an , bn ]) .
                                        n=1

    To see the result for A of the form (−∞, b] , note that the inter-
vals Bn cover [−M, b] for some M finite and hence using the above
argument
                                X∞
                       b+M ≤        µ ((an , bn ]) .
                                 n=1
                7 / Measure Theory and Integration                           109

Similarly, for (a, +∞) these intervals cover [a, M ] and we get
                                   ∞
                                   X
                       M −a≤             µ ((an , bn ]) .
                                   n=1

The desired result follows in each case by letting M → ∞.

   b.       As ∅ = (a, a] , we have
                                Z a
                        µ (∅) =     π (s) ds = 0.
                                   a

Further, as π (s) is non-negative on S, µ (A) is non-negative for all
A ∈ A, while, by definition of π
                               Z b
                       µ (S) =     π (s) ds = 1.
                                   a

     To see countable additivity, let {Ai }∞ i=1 be a countably infinite
sequence of disjoint sets in A with ∪∞    i=1 i ≡ A ∈ A. Since A is a
                                             A
finite disjoint union of intervals of the form (c, d] for a ≤ c < d ≤ b,
by the same argument as for part a., we can assume A is of the form
(c, d] . Note that as π is continuous on [a, b] , it is bounded and hence
                         Z d            Z d
            µ ((c, d]) =     π (s) ds ≤     M ds = M (d − c) ,
                         c                 c
is bounded for some M < ∞.
    Note first that
      Z d
          π (s) ds = µ ((c, d]) = µ (∪∞
                                      i=1 Ai )
        c
                    = µ (∪∞
                          i=1 (ai , bi ])
                    = µ (∪ni=1 (ai , bi ]) + µ ((c, d] \ ∪ni=1 (ai , bi ])
                                             Xn Z bi
                    ≥ µ (∪ni=1 (ai , bi ]) =           π (s) ds.
                                                 i=1        ai

Letting n → ∞, and noting that the limit exists in R as this is a
montone increasing sequence bounded above, we get
                         Z d            ∞ Z bi
                                        X
            µ ((c, d]) =     π (s) ds ≥        π (s) ds.
                             c                 i=1     ai
110             7 / Measure Theory and Integration

   To see the converse, let ε > 0 and {εn }∞n=1 be a sequence of real
numbers such that
                    X∞ Z bn +εn
                             k   k
                                   π (s) ds < ε.
                       n=1 bnk

Renumber the collection of intervals Ai = (ai , bi ] such that

      c = a1 < b1 ≤ a2 < ... < bn−1 ≤ an < bn ≤ an+1 < ... ≤ d,

and construct the collection of open intervals Bn such that

                        B1 = (a1 − ε1 , b1 + ε1 ) ,

and for n ≥ 2
                             Bn = (an , bn + εn ) .
Clearly, these intervals form a open covering of the set [c, d] . But
this set is compact, and hence there exists a finite open subcover,
say {Bnk }Kk=1 . We may renumber these intervals such that

a = an1 ≤ an2 < b1 + ε1 < ... < ank < bnk−1 + εnk−1 ≤ b < bnk + εnk .

Hence
                       Z d
        µ ((c, d]) =         π (s) ds
                        c
                       Z bn +εn
                              K       K
                  ≤                       π (s) ds
                        an1
                       K Z bn +εn
                       X     k    k
                  ≤                         π (s) ds
                       k=1 ank
                       XK Z bn                       K Z bn +εn
                                                     X
                                  k                        k    k
                  =                   π (s) ds +                    π (s) ds
                       k=1 ank                       k=1 bnk
                       XK Z bn
                                  k
                  <                   π (s) ds + ε
                       k=1 ank
                       X∞ Z bn
                  ≤               π (s) ds + ε.
                       n=1 an
               7 / Measure Theory and Integration                     111

But as ε is arbitrary
                 Z d            ∞
                                X                  ∞ Z bn
                                                   X
    µ ((c, d]) =     π (s) ds ≤   µ ((an , bn ]) =        π (s) ds.
                  c               n=1                n=1 an




Exercise 7.8

    Clearly, S 0 contains ∅ and S. To see closure under complemen-
tation, let A0 ∈ S 0 . Then there exists A ∈ S, C1 , C2 ∈ C such that

                            A0 = (A ∪ C1 ) \C2 .

Hence

                      A0c = (Ac ∩ C1c ) ∪ C2
                            = (Ac ∪ C2 ) \ (C1 \C2 ) ,

which is in S 0 .
    To see closure under countable unions, for all n = 1, 2, ... let
An ∈ S 0 . Then for each n there exists an An ∈ S and C1n , C2n ∈ C
  0

such that
                       A0n = (An ∪ C1n ) \C2n .
Define A0 = ∪∞      0        ∞              ∞
               n=1 An , A = ∪n=1 An , C1 = ∪n=1 C1n , and C2 =
∪∞
 n=1 C2n . Then

                 (A ∪ C1 ) \C2 ⊆ A0 ⊆ A0 = A ∪ C1 ,

and
                      µ ((A ∪ C1 ) \C2 ) = µ (A ∪ C1 ) .
Hence, there exists a C20 ∈ C such that A0 = (A ∪ C1 ) \C20 . Hence,
A0 ∈ S 0 .


Exercise 7.9

   a.     The definitions diﬀer as to whether the “ ≤ ” in

                  {s ∈ S : f (s) ≤ a} ∈ S, all a ∈ R                  (1)
112            7 / Measure Theory and Integration

is replaced with ≥, < or > . Proof of equivalence requires establishing
that (1) is equivalent to the equivalent statement sets defined by ≥,
< or > .

   ≤⇔>: Follows from the fact that, for all a ∈ R

      {s ∈ S : f (s) ≤ a} ∈ S ⇐⇒ {s ∈ S : f (s) ≤ a}c ∈ S
                                 ⇐⇒ {s ∈ S : f (s) > a} ∈ S

as S is closed under complementation.

   ≥ ⇔ <: Follows analogously.

   ≤ ©⇒ <: for any a ∈ R, ªfor n ≥ 1 consider the sequence of sets
An = s ∈ S : f (s) ≤ a − n1 which are in S by (1). Then

                 A ≡ {s ∈ S : f (s) < a} = ∪∞
                                            n=1 An

is in S by closure under countable unions.

   ≤ ©⇐= <: for any a ∈ R,ª for n ≥ 1 consider the sequence of sets
An = s ∈ S : f (s) < a + n1 in S. Then

                 A ≡ {s ∈ S : f (s) ≤ a} = ∩∞
                                            n=1 An

is in S by closure under countable intersections.

    b.     Assume that {s ∈ S : f (s) ≤ a} ∈ S for all a ∈ R. Then
by the result of part a., for all a ∈ R {s ∈ S : f (s) ≥ a} ∈ S. Hence

 {s ∈ S : f (s) = a} = {s ∈ S : f (s) ≥ a} ∩ {s ∈ S : f (s) ≤ a} ∈ S

for all a ∈ R by closure under finite intersections.
     To show that the converse is false, as a counterexample let S =
(0, 1] and let S be the set of all countable and co-countable subsets of
S (where a co-countable set is a set with a countable complement).
It is easily verified that S is a σ-algebra. Consider the function
f (s) = s. Then the set
                                        ½
                                           ∅ a∈ / (0, 1]
                 {s ∈ S : f (s) = a} =
                                           a a ∈ (0, 1]
               7 / Measure Theory and Integration                 113

The empty set is finite and hence countable. Hence these sets are
in S. However, the set {s ∈ S : f (s) ≤ a} for any a ∈ (0, 1) is equal
to (0, a] which is neither countable or co-countable.

      c.   The sets

       A ≡ {s ∈ S : f (s) = −∞} = ∩∞
                                   n=1 {s ∈ S : f (s) < −n}
       B ≡ {s ∈ S : f (s) = +∞} = ∩∞
                                   n=1 {s ∈ S : f (s) > n}

are in S because S is closed under countable intersections.


Exercise 7.10

      a.   Let f be monotone increasing. Then for some a ∈ R the
set
                         {s ∈ R : f (s) ≤ a}
is either of the form {s ∈ R : s ≤ a} or {s ∈ R : s < a} . Both are in
B by Exercise 7.6. The proof for monotone decreasing f is analogous.
     Let f be continuous. By Exercise 7.9 a. it is suﬃcient to show
that for all a ∈ R the set {s ∈ R : f (s) < a} is in B. But as f is
continuous, this set is open and hence in B.

    b.     For any f : S → R the set {s ∈ S : f (s) ≤ a} is a subset
of S and is hence in S. Hence, all functions are measurable.


Exercise 7.11

    Let Ai ∈ S, i = 1, ..., n and without loss of generality, reorder
i = 1, ..., n such that a1 < a2 < ... < an which is possible as the ai
are distinct. Then for all a ∈ R, the set

                         {s ∈ S : φ (s) ≥ a}

is either ∅ ∈ S if a > an , S ∈ S if a ≤ a1 , or, for j = 2, ..., n
Bj = ∪nk=j Ak if aj−1 < a ≤ aj . As S is closed under finite unions,
Bj ∈ S for j = 2, ..., n and hence φ is measurable.
114            7 / Measure Theory and Integration

     Let φ be measurable. Without loss of generality, reorder i =
1, ..., n such that a1 < a2 < ... < an . Then for all a ∈ R

                       {s ∈ S : φ (s) ≥ a} ∈ S

and hence {s ∈ S : φ (s) < a} ∈ S as S is closed under complemen-
tation. For all i there exist bi , ci ∈ R such that ai−1 < bi < ai <
ci < ai+1 . Then

         Ai = {s ∈ S : φ (s) ≥ bi } ∩ {s ∈ S : φ (s) < ci } ∈ S

as S is closed under finite intersections.


Exercise 7.12

     a.   Let f and g be measurable functions and c ∈ R. By
Theorem 7.5 there exists sequences of measurable simple functions
{fn } and {gn } such that fn → f and gn → g pointwise. In each
case we will exhibit a sequence of measurable simple functions that
converges pointwise to the desired function. The result will then
follow by Theorem 7.4.

    f +g :     Let hn ≡ fn +gn which converges pointwise to h ≡ f +g
because for any sequences of real numbers {xn } and {yn } we know
xn +yn → x+y. To see that each hn is a measurable simple function,
note that it can take on at most a finite number of values on a finite
number of sets, all of which are measurable by the fact that S is
closed under finite intersections and set diﬀerences.

    fg :    Let hn ≡ fn gn which converges pointwise to h ≡ fg
because for any sequences of real numbers {xn } and {yn } we know
xn yn → xy. That the hn ’s are measurable simple functions follows
from the fact that each hn is non-zero only if both fn and gn are
non-zero. This can happen on only a finite number of sets, all of
which are measurable as S is closed under finite intersections.

    |f | :   Let hn ≡ |fn | = fn+ − fn− which converges pointwise
to h ≡ |f | because for any sequence of real numbers {xn } we know
               7 / Measure Theory and Integration                   115

                                                           P n
−xn → −x. The hn are measurable simple functions, for if N    i=1 ai χAn
                                           PNn
is the standard representation of fn , then i=1 |ai | χAn is the stan-
dard representation of hn .

    cf :     Let hn ≡ cfn which obviously converges pointwise to
h ≡ cf. The P   hn are measurable simple functions with standard
representation N   n
                 i=1 cai χAn (s) .


    b.      To show that supn fn is measurable, we need to show that
for all a ∈ R         ½                  ¾
                          s ∈ S : sup fn ≤ a   ∈S
                                  n

As for all n = 1, 2, ... the fn are measurable, {s ∈ S : fn ≤ a} ∈ S for
all n. But
            ½                      ¾
              s ∈ S : sup fn ≤ a = ∩∞   n=1 {s ∈ S : fn ≤ a}
                      n

which is measurable because S is closed under countable intersec-
tions.
    That inf n fn is measurable comes from

                          inf fn = − sup (−fn )
                           n          n

which is measurable by part a. and the fact that supn fn is measur-
able. Similarly, noting that
                                     µ        ¶
                    lim inf fn = sup inf fn
                                 m≥1 n≥m
                                     µ        ¶
                   lim sup fn = inf sup fn
                                      m≥1   n≥m

we can iterate on the above results to get that lim inf fn and lim sup fn
are measurable.


Exercise 7.13
116            7 / Measure Theory and Integration

   a.    By the result of Exercise 7.9 a. a continuous function f
on R will be Bl -measurable if, for all a ∈ R
    l

                    n                     o
                      x ∈ Rl : f (x) < a ∈ Bl

But the set (−∞, a) is open in R, and as f is continuous
                       n                   o
                         x ∈ Rl : f (x) < a

is open and is hence an element of Bl .

    Note:     In answering part b., we will follow Billingsley (1995,
pp. 183-186) in defining the Baire functions to be real valued func-
tions (as opposed to extended real valued).

    b.      Let X be the smallest class of real valued functions on
Rl containing the continuous functions and closed under pointwise
passages to the limit that do not give rise to ±∞. That is, if {fn } is a
sequence of real valued functions in X converging pointwise to f, and
if f is real valued, then f ∈ X . Let Y denote the Borel measurable
real valued functions on Rl .

    X ⊂Y:       Note that the argument of Exercise 7.10 a. extends
to continuous real valued functions on Rl . Hence, all continuous real
valued functions are in Y. Further, by Exercise 7.12 b., Y is closed
under pointwise passages to the limit that do not give rise to ±∞.
As X is the smallest such class of functions, X ⊂ Y.

    Y⊂X :        The argument proceeds in the following four steps.
First, note that if f, g ∈ X and a, b ∈ R, by the result of Exercise
7.12 (which applies because X ⊂ Y), max {f, g} ∈ X (where the
maximum is pointwise)© and af + bg ∈ ªX .
    Second, let A = A ⊂ Rl : χA ∈ X . We will use the first result
to show that this is a σ-algebra. Note that as χRl is continuous,
Rl ⊂ A. To show closure under complementation, let A ∈ A. Then

                           χAc = χRl − χA
               7 / Measure Theory and Integration                    117

which is in X by the first result. To show closure under comple-
mentation, for n ≥ 1, let An ∈ A. To show that ∪∈   n=1 An ∈ A,
let

                       f1 = χA1
                               n           o
                       fn = max fn , χAn−1

where the first is in X by assumption, and the second by the first
result. Therefore,
                           χA = lim fn
                                    n→∞
which is in X .
   Third, for x ∈ Rl note that
                  n                               o
              C = s ∈ Rl : sn ≤ xn , n = 1, ..., l ∈ A.

To see this, define for i = 1, ..., l
                        n                  o
                Ci =      s ∈ Rl : si ≤ xi
                        
                                 1            if s ∈ Ci
            gi (s) =        xi + 1 − si if si ∈ [xi , xi + 1]
                        
                                  0         if si > xi + 1

As the gi are continuous, and as

                    χC = − max {−g1 , −g2 , ..., −gl }

by the first result above, C ∈ A. Hence, as A is a σ-algebra contain-
ing the sets of the form C, which generate Bl , we have Bl ⊂ A.
    Finally, by Theorem 7.5 all Borel functions can be written as the
pointwise limit of a sequence of Borel simple functions that do not
give rise to ±∞. But as Bl ⊂ A, the indicator functions of Borel sets
are in X . Further, by the first result, finite combinations of indicator
functions are in X , and hence X includes all Borel simple functions.
Hence, as X is closed under pointwise passages to the limit that do
not give rise to ±∞, Y ⊂ X .


Exercise 7.14
118             7 / Measure Theory and Integration

    Denote f −1 (A) = {x ∈ S : f (x) ∈ A} and let
                          ©                    ª
                       G = A ⊂ R : f −1 (A) ∈ S .

We will show that G is a σ-algebra containing the open intervals in
R, and hence that B ⊂ G.
   G is a σ-algebra, from the fact that f −1 (R) = S, the fact that
                  ¡ −1  ¢c
                   f (A)   = {x ∈ S : f (x) ∈ A}c
                                 = {x ∈ S : f (x) ∈ Ac }
                                 = f −1 (Ac ) ,

and that

            f −1 (∪∞                            ∞
                   n=1 An ) = {x ∈ S : f (x) ∈ ∪n=1 An }
                                = ∪∞
                                   n=1 {x ∈ S : f (x) ∈ An }
                                = ∪∞
                                   n=1 f
                                         −1
                                            (An ) .

By definition of f measurable and Exercise 7.9, G contains the open
intervals.


Exercise 7.15

     Suppose fi for i = 1, ..., m is Bl -measurable. Then for all i =
1, ..., m, for all ai , bi ∈ R, ai ≤ bi
                            n                        o
                    Ai ≡ s ∈ Rl : fi (s) ∈ (ai , bi ) ∈ Bl

Let B = {s ∈ Rm : si ∈ (ai , bi ) , i = 1, ..., m} . Then
              n                        o
                s ∈ Rl : f (s) ∈ B = ∩m         i=1 Ai ∈ B
                                                           l



      Now suppose that f is measurable, and for all i = 1, ..., m, for all
ai , bi ∈ R, ai ≤ bi let

            Bi (ai , bi ) = {s ∈ Rm : si ∈ (ai , bi ) , i = 1, ..., m}
                7 / Measure Theory and Integration                      119

Then
  n                               o n                            o
    s ∈ Rl : f (s) ∈ Bi (ai , bi ) = s ∈ Rl : fi (s) ∈ (ai , bi ) ∈ Bl

and fi is Bl -measurable


Exercise 7.16

    Consider any finite partition of [0, 1] into intervals of the form
[ai−1 , ai ] for i = 1, ..., n. As each interval contains both rational and
irrational
     Pn numbers, if we choose the yi ≤ f (x) , all x ∈ [ai−1 , ai ] , the
sum i=1 yi (ai − ai−1 ) ≤ 0. Moreover, we can always choose the yi
so that this sum is equal to zero. Hence, the supremum over all such
partitions, which is the lower Reimann integral,P      is zero. Similarly, if
we choose yi ≥ f (x) , all x ∈ [ai−1 , ai ] the sum ni=1 yi (ai − ai−1 ) ≥
1, and the yi can be chosen so that this sum equals one. Hence,
the infimum over all such partitions, which is the upper Riemann
integral, is one. As they are not equal, the function is not Riemann
integrable.


Exercise 7.17

    Let φ and ψ have standard representations
                                     n1
                                     X
                         φ (s) =           ai χAi (s)
                                     i=1
                                     Xn2
                         ψ (s) =           bj χBj (s)
                                     j=1

Then φ + ψ has a representation
                               X  n2
                               n1 X
               (φ + ψ) (s) =             (ai + bj ) χAi ∩Bj (s)
                               i=1 j=1

where the sets Ai ∩ Bj are disjoint from the fact that the Ai and
Bj are separately disjoint. However, this need not be the standard
120            7 / Measure Theory and Integration

representation of φ + ψ as the ai + bj need not be distinct.                     Let
k = 1, ..., K index the distinct numbers ck in the set
                  {ai + bj : i = 1, ..., n1 , j = 1, ..., n2 }
and denote by {k} the collection of indices (i, j) that deliver this
number
       {k} = {(i, j) , i = 1, ..., n1 , j = 1, ..., n2 : ai + bj = ck } .
Define Ck as the union over all sets Ai ∩ Bj such that ai + bj = ck ,
so that                        X
                     µ (Ck ) =    µ (Ai ∩ Bj ) .
                                    {k}

Then the standard representation of φ + ψ is given by
                                             K
                                             X
                         (φ + ψ) (s) =             ck χCk .
                                             k=1

Then
  Z              K
                 X
    (φ + ψ) dµ =   ck µ (Ck )
                        k=1
                        K X
                        X
                   =              ck µ (Ai ∩ Bj )
                        k=1 {k}
                        K X
                        X
                   =              (ai + bj ) µ (Ai ∩ Bj )
                        k=1 {k}
                        X   n2
                         n1 X
                   =              (ai + bj ) µ (Ai ∩ Bj )
                        i=1 j=1
                        Xn1 Xn2                             n2
                                                         n1 X
                                                         X
                   =              ai µ (Ai ∩ Bj ) +                bj µ (Ai ∩ Bj )
                        i=1 j=1                          i=1 j=1
                        n1
                        X                    n2
                                             X
                   =          ai µ (Ai ) +         bj µ (Bj )
                        i=1                  j=1
                        Z           Z
                   =        φdµ +       ψdµ
                 7 / Measure Theory and Integration                                 121

where the second last equality follows from the fact that
                                          n2
                                          X
                         µ (Ai ) =              µ (Ai ∩ Bj )
                                          j=1
                                          Xn1
                      µ (Bj ) =                 µ (Ai ∩ Bj ) .
                                          i=1

   If c = 0, then cφ vanishes indentically and the equality holds. If
c > 0, then cφ has standard representation
                                    n1
                                    X
                                          cai χAi
                                    i=1

Therefore,
        Z             n1
                      X                         n1
                                                X                        Z
             cφdµ =         cai µ (Ai ) = c             ai µ (Ai ) = c       φdµ.
                      i=1                       i=1




Exercise 7.18

   a.        By definition
                              Z                     Z
                                  f dµ = sup            φdµ,

where the sup is over all simple functions φ in M + (S, S) with 0 ≤
φ ≤ f. As f ≤ g, the subset of simple functions φ in M + (S, S)
satisfying 0 ≤ φ ≤ g is at least as large as that for f. Hence,
                           Z          Z
                              fdµ ≤ gdµ.


   b.        Note that
                          Z                     Z
                                  fdµ =             f χA dµ,
                              A
                          Z                     Z
                                  fdµ =             f χB dµ.
                             B
122            7 / Measure Theory and Integration

As A ⊆ B we have that f χA ≤ f χB and hence by the result of part
a.                     Z        Z
                          fdµ ≤    f dµ.
                              A           B



Exercise 7.19

    Consider the constant function f : S → R+ defined by f (s) =
a ≥ 1 for all s ∈ S, and for all n = 1, 2, ..., let fn (s) = a − 1/n. Then
fn is a monotone increasing sequence of functions in M + (S, S) . Let
α = 1 and consider the simple function ϕ (s) = f (s) which satisfies
0 ≤ ϕ ≤ f. Then

                    An = {s ∈ S:fn (s) ≥ αϕ (s)}
                         = {s ∈ S:fn (s) ≥ f (s)} = ∅

for all n. Hence, ∪∞
                   n=1 An = ∅ 6= S.



Exercise 7.20

   a.     Let f, g ∈ M + (S, S) . By Theorem 7.5 there exists se-
quences of non-negative simple functions fn and gn such that
                   0 ≤ f1 ≤ ... ≤ fn ≤ ... ≤ f for all n,
                   0 ≤ g1 ≤ ... ≤ gn ≤ ... ≤ g for all n,
Then for all n = 1, 2, ..., the function sn ≡ fn + gn is a non-negative
simple function satisfying

            0 ≤ s1 ≤ ... ≤ sn ≤ ... ≤ s ≡ f + g     for all n.

Hence,
               Z                    Z
                    sdµ =     lim       sn dµ
                             n→∞
                                    Z             Z
                         =  lim   fn dµ + lim         gn dµ
                             n→∞         n→∞
                           Z        Z
                         =    fdµ + gdµ,
              7 / Measure Theory and Integration                     123

where the first and third equalities come from the Monotone Con-
vergence Theorem (Theorem 7.8) and the second comes from the
additivity of the integrals of simple functions (Exercise 7.17).
    Now let c ≥ 0, and define for all n = 1, 2, ... sn = cfn which
is a pointwise monotone increasing sequence of non-negative simple
functions bounded above by s = cf. Hence
         Z              Z                 Z           Z
            sdµ = lim      sn dµ = c lim     fn dµ = c fdµ,
                   n→∞                       n→∞

by Exercise 7.17 and the Monotone Convergence Theorem.

   b.     Following the text, for n = 1, 2, ..., let
                    ©                                ª
          Akn = s ∈ S : (k − 1) 2−n ≤ f (s) < k2−n ,
            Cn = {s ∈ S : f (s) ≥ n} ,
                        n2   n
                        X
         φn (s) =                (k − 1) 2−n χAkn (s) + nχCn (s) .
                        k=1

Then the φn are a montone increasing sequence of simple functions
converging pointwise to f. Hence, the sequence of functions φn χA is
a montone increasing sequence of simple functions converging point-
wise to f χA , and
  Z                Z ÃX n2n
                                                        !
                                     −n
     φn χA dµ =             (k − 1) 2 χAkn ∩A + nχCn ∩A dµ
                             k=1
                        n
                       n2
                       X
               =             (k − 1) 2−n µ (Akn ∩ A) + nµ (Cn ∩ A) = 0,
                       k=1

for all n. Then
                   Z                   Z
                       fdµ =             f χA dµ
                   A                        Z
                                  =    lim     φn χA dµ = 0,
                                       n→∞

where the second inequality comes from the Montone Convergence
Theorem.
124            7 / Measure Theory and Integration

   c.     Note that f ≥ f ∗ ≡ ∞χA . Hence, by Exercise 7.18a.
                      Z        Z
                ∞ > fdµ ≥ f ∗ dµ = ∞µ (A) ,

which implies µ (A) = 0.


Exercise 7.21

    Defined this way, λ is clearly non-negative and satisfies λ (∅) = 0.
To see countable additivity, let {Ai } i ≥ 1 be a sequence
                                                    Pn        of disjoint
sets in S with A = ∪∞ i=1 A i . For n ≥ 1, let fn =   i=1  f χAi . Then
by Exercise 7.20a. we have
                Z              n Z
                               X                      n
                                                      X
                     fn dµ =           f χAi dµ =            λ (Ai ) .
                               i=1                     i=1

As {fn } is a monotone increasing sequence of non-negative functions
converging pointwise to f χAi , the above result and the Monotone
Convergence Theorem (Theorem 7.8) imply that
                           Z                 Z
                λ (A) =       f χA. dµ = lim    fn dµ
                                                  n→∞
                                ∞
                                X
                          =           λ (Ai ) .
                                i=1




Exercise 7.22


Pn As the gi are non-negative, the sequence {fn } defined by fn =
    Pg∞
  i=1 i , n = 1, 2, ..., is non-decreasing and converges pointwise to
f = i=1 gi . By Exercise 7.20, we have
                 Z              Z X
                                  n                  n Z
                                                     X
                      fn dµ =              gi dµ =           gi dµ,
                                     i=1             i=1
              7 / Measure Theory and Integration                                    125

and taking limits gives
                          Z X
                            n                       n Z
                                                    X
                    lim             gi dµ = lim             gi dµ.
                 n→∞                        n→∞
                              i=1                   i=1

But, by the Monotone Convergence Theorem (Theorem 7.8)
             Z X
               n                      Z             Z             Z X
                                                                    ∞
       lim          gi dµ = lim           fn dµ =         fdµ =            gi dµ,
       n→∞                     n→∞
              i=1                                                    i=1

and the result follows.


Exercise 7.23

    Let S = (0, 1] , S = B(0,1] , µ the Lebesgue measure and consider
the sequence of functions for n = 1, 2, ...

                                   fn = nχ(0,1/n] .

As inf
    R n fn ≥ 0 Fatou’s Lemma applies. Noting that lim inf n fn = 0
and fn dµ = 1 for all n we have
                 Z                      Z
             0 = lim inf fn dµ < lim inf fn dµ = 1.
                               n                  n




Exercise 7.24
                                                 ©                 ª
   a.     For f ∈ M + the sequence of sets Bn ≡ s ∈ S : f (s) ≥ n1
and the sequences of functions fn ≡ f χBn satisfy

        B1 ⊆ B2 ⊆ ... ⊆ Bn ⊆ ... ⊆ B ≡ {s ∈ S : f (s) > 0} ,

and
                 f1 ≤ f2 ≤ ... ≤ fn ≤ ... ≤ f = f χB .
Then                      Z                 Z
                              f dµ = 0 ⇒        fn dµ = 0,
126           7 / Measure Theory and Integration

                        R                  R
for all n = 1, 2, ... as fn dµ converges to f dµ = 0 from below by
the Monotone Convergence Theorem (Theorem 7.8). This implies
that µ (Bn ) = 0 from the fact that
                                   1
                             0≤      χ ≤ fn ,
                                   n Bn
and so                                     Z
                             1
                        0≤     µ (Bn ) ≤       fn dµ.
                             n
But this implies that µ (B) = 0 by Theorem 7.1a.
   Now suppose that µ (B) = 0. Then for all n = 1, 2, ... we must
have µ (Bn ) = 0. Noting that

                                 fn ≤ ∞χBn .

Exercise 7.18a. gives
                             Z
                        0≤       fn dµ ≤ ∞µ (Bn ) ,
                      R
from which we get that fn dµ = 0.              The result follows from the
Monotone Convergence Theorem.

   b.      Let {fn } be a monotone increasing sequence of functions
in M + that converges to f µ-almost everywhere and let f ∗ be the
pointwise limit of this sequence. By Theorem 7.4 f ∗ is measurable,
and by the Monotone Convergence Theorem (Theorem 7.8) we have
                            Z        Z
                        lim   fn dµ = f ∗ dµ.
                        n→∞

We know that µ ({s ∈ S : f (s) 6= f ∗ (s)}) = 0. Therefore, by part a.
                       Z
                          (f − f ∗ ) dµ = 0,

and hence by Exercise 7.20 a. we get
                        Z         Z
                           fdµ = f ∗ dµ.
               7 / Measure Theory and Integration                     127

Exercise 7.25

   If f is bounded, there exists a B ∈ R such that for all s ∈ S we
have |f | (s) ≤ B. Hence
                      Z
                         f + dµ ≤ Bµ (S) < ∞,

and                     Z
                            f − dµ ≤ Bµ (S) < ∞.



Exercise 7.26

    a.     Note that |f | = f + + f − and hence that |f |+ = f + + f −
          −
while |f | = 0. If f is µ-integrable, then f + and f − have finite
integrals with respect to µ and hence so does |f |+ . Therefore, |f | is
integrable. If |f | is integrable, |f |+ has a finite integral with respect
to µ and hence so must f + and f − . Finally,
            ¯Z        ¯      ¯Z           Z        ¯
            ¯         ¯      ¯                     ¯
            ¯ fdµ¯ = ¯ f + dµ − f − dµ¯
            ¯         ¯      ¯                     ¯
                             Z           Z            Z
                                 +           −
                         ≤      f dµ + f dµ = |f | dµ.


    b.     Note that

                    f + + f − = |f | ≤ |g| = g + + g − .

Hence by Exercise 7.18 a.
                     Z       Z
                         +
                       f dµ ≤ |g| dµ < ∞,

and                    Z             Z
                             −
                            f dµ ≤       |g| dµ < ∞,

which implies that |f | is µ-integrable, and moreover
                      Z            Z
                          |f | dµ ≤ |g| dµ < ∞,
128           7 / Measure Theory and Integration

by Exercise 7.18a.

   c. R Let α ∈ [0, +∞)
                    R    . Then (αf )+R = αf + and (αf
                                                    R  )− = αf − .
Hence, αf + dµ = α f + dµ < ∞ and αf − dµ = α f − dµ < ∞
by Exercise 7.20. Hence, αf is integrable and
           Z         Z            Z            Z
                          +            −
              αfdµ = αf dµ − αf dµ = α f dµ.

Now let α ∈ (−∞, 0] . Then (αf )+ = −αf − and (αf )− = −αf + .
Integrability follows as above, and hence
             Z             Z             Z
                αf dµ =       −αf dµ − −αf + dµ
                                  −

                             Z               Z
                                ¡ +    −
                                         ¢
                       = α       f − f dµ = α f dµ.

    Note that (f + g)+ ≤ f + + g + and (f + g)− ≤ f − + g − . Then
as f and g are integrable, by Exercise 7.20 f + g is integrable. Then
as
                                      ¡         ¢ ¡            ¢
      (f + g)+ − (f + g)− = f + g = f + − f − + g + − g − ,

we get
            (f + g)+ + f − + g − = (f + g)− + f + + g + .
By Exercise 7.20
                     Z                  Z            Z
                               +             −
                         (f + g) dµ +       f dµ +       g − dµ
                     Z                  Z            Z
                               −             +
               =         (f + g) dµ +       f dµ +       g + dµ.
                               R        R          R
Subtracting the finite numbers f − dµ, g − dµ, and (f + g)− dµ
from both sides gives
    Z                  Z               Z
      (f + g) dµ =       (f + g)+ dµ − (f + g)− dµ
                       Z          Z       Z          Z
                   =     f dµ − f dµ + g dµ − g − dµ
                           +         −        +

                       Z        Z
                   =     f dµ + gdµ.
               7 / Measure Theory and Integration                   129

Exercise 7.27

    Let F be the set of all finite unions of disjoint measurable rectan-
gles, and let G be the algebra generated by the measurable rectangles.
We will show that E = F = G.
    Obviously, F ⊂ E ⊂ G. The proof will be complete if we can
establish that G ⊂ F. But F contains the measurable rectangles,
and so we only need to show that it is an algebra.

   ∅, X × Y ∈ F : ∅ and X × Y are measurable rectangles.

    To establish closure under complementation, we will first estab-
lish that F is closed under finite intersections. First, let B and C ∈
F. Therefore there exist {Bn }N                M
                                n=1 and {Cm }m=1 sequences of disjoint
measurable rectangles such that ∪n=1 Bn = B and ∪M
                                      N
                                                          m=1 Cm = C.
Then
                     ¡         ¢ ¡ M         ¢
         B ∩ C = ∪N     n=1 Bn ∩ ∪m=1 Cm
                     ¡                 ¢ ¡ M                 ¢
                  = ∪N  n=1 B1n × B2n ∩ ∪m=1 C1m × C2m
                 = ∪N    M
                    n=1 ∪m=1 (B1n × B2n ) ∩ (C1m × C2m )
                 = ∪N    M
                    n=1 ∪m=1 (B1n ∩ C1m ) × (B2n ∩ C2m ) ,

which is a finite unions of disjoint measurable rectangles. Iterating
on this gives us the result for arbitrary finite unions.

    A ∈ F ⇒ Ac ∈ F : Let A ∈ F. Then there exists {An }N            n=1
disjoint measurable rectangles such that ∪N   n=1 An = A and A =
                                                                   c

∩N     c
  n=1 An . For any measurable rectangle An = XA × YA , An can
                                                                 c
                                                              c
be written as the union of three measurable rectangles (XA × YA ) ,
(XA × YAc ), and (XA c × Y c ) . To see this note that if (x, y) ∈ Ac ,
                          A                                          n
              / XA , or y ∈
then either x ∈           / YA , or both. Hence, (x, y) is an element
of one of these rectangles. The reverse is obvious.
    But these rectangles are also disjoint. Hence, the result follows
by closure under finite intersections.

   To establish closure under finite unions, we first establish closure
under finite diﬀerences. If A, B ∈ F they can be written as A =
130           7 / Measure Theory and Integration

∪N                  M
 n=1 An and B = ∪m=1 Bm for finite disjoint collections of C sets
{An } and {Bm } . Then
                          ¡ N      ¢ ¡         ¢c
                A\B =      ∪n=1 An ∩ ∪Mm=1 Bm
                          ¡        ¢ ¡ M       ¢
                        = ∪N n=1 An ∩ ∩m=1 Bm
                                             c
                               ¡ M            ¢
                        = ∪Nn=1 ∩m=1 (An \Bm ) .

Writing An = Xn × Yn and Bm = Um × Vm , we have that for all n, m,
An \Bm is the union of the disjoint measurable rectangles (Xn \Um )×
Yn and (Xn ∩ Um ) × (Yn \Vm ) . But we saw above that F is closed
under finite intersections, and hence A\B is a finite union of disjoint
measurable rectangles.

     An ∈ F, n = 1, ..., N ⇒ ∪N
                              n=1 An ∈ F : We demonstrate the result
for N = 2. Iterating on the argument gives the result for arbitrary
finite N. Note that

             A1 ∪ A2 = (A1 \A2 ) ∪ (A2 \A1 ) ∪ (A1 ∩ A2 )

is a finite union of disjoint measurable rectangles using the facts
proven above that F is closed under finite set diﬀerences and finite
intersections.


Exercise 7.28

    It is suﬃcient to show that each σ-algebra contains the generators
of the other.

    Bk+l ⊂ Bk × Bl : Bk+l is generated by A, the collection of sets
of the form
               n                                             o
           A = x ∈ Rk+l : xi ∈ (ai , bi ) , i = 1, ..., k + l .

We will refer to these sets as the measurable pavings in Rk+l . But
such pavings are measurable rectangles and are in E. Hence Bk × Bl
is a σ-algebra containing A and Bk+l ⊂ Bk × Bl .
               7 / Measure Theory and Integration                    131

   Bk+l ⊃ Bk × Bl : The text defines Bk × Bl as the σ-algebra
generated by E; it is easily seen that it is also the σ-algebra generated
by C. It is suﬃcient to show that C ⊂ Bk+l . That is, if B ∈ Bk and
C ∈ Bl , B × C ∈ Bk+l .
   Let B be a measurable paving in Rk and consider the class
                     n                     o
                  M = C ⊂ Rl : B × C ∈ Bk+l .

It is easily verified that M is a σ-algebra, and as Bk+l contains the
measurable pavings in Rk+l , M must contain the measurable pavings
in Rl . Hence Bl ⊂ M.
     Now fix C ∈ Bl and consider the class of sets
                         n                       o
                    N = B ⊂ Rk : B × C ∈ Bk+l .

This is a σ-algebra, and by the result immediately above contains
the measurable pavings in Rk . Hence Bk ⊂ N .
    From this, if B ∈ Bk and C ∈ Bl , B × C ∈ Bk+l and Bk+l ⊃
Bk × Bl .



Exercise 7.29

     Let E ∈ E. If we can show that E can be written as a finite union
of disjoint measurable rectangles (that is, if we can adapt Exercise
7.27 to this set-up), we can use the argument in the proof of Theorem
7.13 to show that we can extend µ to E. The extension to Z will
then follow from the Hahn and Caratheodory Extension Theorems.
     Let F be the set of all finite unions of disjoint measurable rectan-
gles. Once again we only need to show that it is an algebra. That
it contains ∅ and Z is immediate. To show closure under comple-
mentation and finite unions, we first establish that F is closed under
finite intersections and finite diﬀerences.

   To establish closure under finite intersections, first let B and C ∈
F. Therefore there exist {Bk }K              M
                              k=1 and {Cm }m=1 sequences of disjoint
132            7 / Measure Theory and Integration

measurable rectangles such that ∪K               M
                                 k=1 Bk = B and ∪m=1 Cm = C.
Then B ∩ C equals
     ¡ K      ¢ ¡          ¢
      ∪k=1 Bk ∩ ∪M  m=1 Cm
     ¡                          ¢ ¡ M                         ¢
 = ∪K  k=1 B1k × B2k × ... × Bnk ∩ ∪m=1 C1m × C2m × ... × Cnm
  = ∪K    M
     k=1 ∪m=1 (B1k ∩ C1m ) × (B2k ∩ C2m ) × ... × (Bnk ∩ Cnm ) ,

which is a finite unions of disjoint measurable rectangles.
    To establish closure under finite diﬀerences, let A, B ∈ F. Hence
they can be written as A = ∪K                          M
                                  k=1 An and B = ∪m=1 Bm for finite
disjoint collections of C sets {An } and {Bm } . Then
                             ¡        ¢ ¡ M          ¢c
                  A\B = ∪K      k=1 Ak ∩ ∪m=1 Bm
                             ¡        ¢ ¡ M          ¢
                         = ∪K   k=1 Ak ∩ ∩m=1 Bm
                                                   c
                                   ¡ M              ¢
                         = ∪K  k=1 ∩m=1 (Ak \Bm ) .

But we saw above that F is closed under finite intersections. Hence
A\B will be a finite union of disjoint measurable rectangles if we can
prove that for all k, m, Ak \Bm is a finite union of disjoint measurable
rectangles. The proof of this is constructive. Writing Ak = X1Ak ×
X2Ak × ... × XnAk and Bm = X1Bm × X2Bm × ... × XnAm , we have
that

  Ak = X1Ak × X2Ak × ... × XnAk
       = ((X1Ak \X1Bm ) ∪ (X1Ak ∩ X1Bm )) × X2Ak × ... × XnAk
       = [(X1Ak \X1Bm ) × X2Ak × ... × XnAk ] ∪
                [(X1Ak ∩ X1Bm ) × X2Ak × ... × XnAk ]
       = [(X1Ak \X1Bm ) × X2Ak × ... × XnAk ] ∪
                [(X1Ak ∩ X1Bm ) × (X2Ak \X2Bm ) × ... × XnAk ] ∪
                [(X1Ak ∩ X1Bm ) × (X2Ak ∩ X2Bm ) × ... × XnAk ] .

Iterating on this process gives the result.
    We can now prove closure under complementation and finite
unions.

    A ∈ F ⇒ Ac ∈ F : Let A ∈ F. Then there exists {Ak }K  k=1 dis-
joint measurable rectangles such that ∪K  A
                                       k=1 k = A and Ac = ∩K Ac .
                                                           k=1 k
               7 / Measure Theory and Integration                   133

For any measurable rectangle Ak = X1Ak × X2Ak × ... × XnAk , Ack
can be written as the union of disjoint measurable rectangles con-
structed the following way.       For j = 0, ..., n − 1, let Aj repre-
sent the collection of measurable rectangles constructed from prod-
ucts of the XmAk ’s with exactly j of the XmA      c    ’s. Thus, A0 =
n                             o                       k
    c
  X1A       c
        × X2A             c
                 × ... × XnA    . Then taking the union of all the ele-
      k        k            k
ments of these collections for j = 0, ..., n− 1 gives us Ack ∈ F. Hence,
the result follows by closure under finite intersections.

     An ∈ F, n = 1, ..., N ⇒ ∪N
                              n=1 An ∈ F : We demonstrate the result
for N = 2. Iterating on the argument gives the result for arbitrary
finite N. Note that

             A1 ∪ A2 = (A1 \A2 ) ∪ (A2 \A1 ) ∪ (A1 ∩ A2 )

is a finite union of disjoint measurable rectangles using the facts
proven above that F is closed under finite set diﬀerences and finite
intersections.


Exercise 7.30

   Let E be a subset of R that is not Lebesgue measurable, and let
F ∈ L1 be such that λ (F ) = 0. Then the set E × F is a subset of
R × F and has Lebesgue measure zero. Hence, E × F ∈ L2 .


Exercise 7.31

   We need to show that for all A ∈ S,

            φ−1 (A) ≡ {(w, x) ∈ W × X : φ (w, x) ∈ A} ,

is an element of W × X . Define the function b : W × X → Y × Z
by b (w, x) = (f (x) , g (y)) . Then we can write φ = h ◦ b. The
proof will be complete if we can show that b is measurable between
W × X and Y × Z, and that compositions of measurable functions
are measurable.
134            7 / Measure Theory and Integration

    To see that compositions of measurable functions are measurable
in general, let (Ω, F) , (Ω0 , F 0 ) and (Ω00 , F 00 ) be measurable spaces,
and let T : Ω → Ω0 be measurable between F and F 0 , and T 0 : Ω0 →
Ω00 be measurable between F 0 and F 00 . Then T 0 ◦ T : Ω → Ω00 is
measurable between F and F 00 because, if A00 ∈ F 00 , then
             ¡ 0    ¢−1 ¡ 00 ¢          ³¡ ¢ ¡ ¢´
                                                −1
              T ◦T        A = T −1 T 0                A00 ∈ F,

because (T 0 )−1 (A00 ) ∈ F 0 as T 0 is measurable, and T is measurable.
    To see that b is measurable between W × X and Y × Z, we first
establish that if E is a measurable rectangle in Y × Z, then b−1 (E)
is a measurable rectangle in W × X . We then show that the set of
all subsets in Y × Z with inverse images in W × X , call it G, is a
σ-algebra. Then by construction, we will have Y × Z ⊂ G and the
result will be proven.
    Let E be a measurable rectangle in Y × Z. Then b−1 (E) is
a measurable rectangle in W × X because f and g are measurable.
Now define
                      ©                                 ª
                G = B ⊂ Y × Z : b−1 (B) ∈ W × X .

But G contains the measurable rectangles in W × X , and is a σ-
algebra. To see the latter, note first that

                         b−1 (Y × Z) = W × X.

Also, if B ∈ G, then as
                                     ¡       ¢c
                         b−1 (B c ) = b−1 (B) ,

we must have B c ∈ G. Finally, if {Bn }∞                  ∞
                                       n=1 is in G, then ∪n=1 Bn ∈ G
as

      b−1 (∪∞                                        ∞
            n=1 Bn ) = {(w, x) ∈ W × X : b (w, x) ∈ ∪n=1 Bn }
                      = ∪∞
                         n=1 {(w, x) ∈ W × X : b (w, x) ∈ Bn }
                      = ∪∞
                         n=1 b
                              −1
                                 (Bn ) .

Then as G is a σ-algebra on Y × Z containing the measurable rectan-
gles, we must have Y × Z ⊂ G. But then b is measurable between
W × X and Y × Z.
              7 / Measure Theory and Integration                   135

Exercise 7.32

    a.     There are two things to note. First, all functions in the
equivalence class are A measurable and are hence constant on sets
Ai in the countable partition {Ai }∞
                                   i=1 . Second, all of these functions
have the same integral over any A set. Hence, the equivalence class
is the class of discrete random variables on the {Ai }∞  i=1 that diﬀer
                            c
only on Ai such that i ∈ J . That is, we can write
                                 ∞
                                 X
                E (f |A) (b
                          ω) =         E (f |An ) χAn (b
                                                       ω) ,
                                 n=1

where E (f |An ) is the number defined in (1).

    b.    The equivalence class is given by the class of step functions
on the {Ai }∞
            i=1 . For all i ∈ J, if ω ∈ Ai we have

                                         µ (B ∩ Ai )
                     E (χB |A) (ω) =                 .
                                           µ (Ai )

Members of this class diﬀer only on Ai such that i ∈ J c .


Exercise 7.33

    a.     Defined in this way, all sets A ∈ A display no variation in
y, in the sense that for all y and A, the y-sections of A, call them
Ay , are identical. Consequently, each version of the conditional
expectation E (f |A) cannot display any variation in y, in the sense
that it’s y-sections are identical. That is, for all A ∈ A, and for all
y and y 0 we have
                        E (f |A)y = E (f |A)y0 .

Therefore, each function in this equivalence class is defined by its
y-section for y = 0. As members of this equivalence class have the
same integral over any A set, they can vary only on sets of µ measure
zero.
136           7 / Measure Theory and Integration

   b.      Given B ∈ F, the conditional probability E (χB |A) is any
member of the equivalence class of functions that are A measurable,
and satisfy
      Z                            Z
          E (χB |A) (ω) p (ω) dλ =   χB p (ω) dλ = µ (B ∩ A) ,
       A                           A

for all A ∈ A. As for part a., there is a sense in which A contains
no information about the dimension y. Consequently, if y, y 0 ∈ Bx
for some x, we have
                                              ¡ ¢
                 E (χB |A)x (y) = E (χB |A)x y 0 .
8 Markov Processes

Exercise 8.1


    As f and g ∈ B(Z, Z), and α, β ∈ R, then αf + βg ∈ B(Z, Z)
(see Exercise 7.12a.). Hence, T (αf + βg) is well defined and
                                 Z
            [T (αf + βg)](z) =       [αf + βg] (z 0 )Q(z, dz 0 ),


all z ∈ Z. As f, g ∈ B(Z, Z), they are integrable, so we can use the
fact that integrals are linear operators (see Exercise 7.26c.) to get
                          Z                         Z
   [T (αf + βg)](z) =     αf (z )Q(z, dz ) + βg(z 0 )Q(z, dz 0 )
                                     0         0

                         Z                   Z
                      = α f (z )Q(z, dz ) + β g(z 0 )Q(z, dz 0 )
                                0        0


                      = α(T f )(z) + β(T g)(z).




Exercise 8.2


    Define γ(A) = αλ(A) + (1 − α)µ(A), which is a well-defined mea-
sure by Exercise 7.4. Let φn be a sequence of simple functions con-
verging to Q. Because Q is a probability measure, by Theorem 7.5
such a sequence exists. Let the sequence of sets {Zi } form a partition

                                                                    137
138                    8 / Markov Processes

of Z. Then T ∗ γ is well defined, and
                     Z
     (T ∗ γ)(A) =       Q(z, A)γ(dz) all A ∈ Z
                          Z
                 = lim        φn (z, A)γ(dz) all A ∈ Z
                     n→∞
                          X
                 = lim         φn (Zi , A)γ(Zi )
                    n→∞
                               i
                           X
                =    lim            φn (Zi , A)[αλ(Zi ) + (1 − α)µ(Zi )]
                    n→∞
                               i
                           "                              #
                                    X
                =    lim    α            φn (Zi , A)λ(Zi )
                    n→∞
                                   " i                             #
                                              X
                    + lim           (1 − α)        φn (Zi , A)µ(Zi )
                       n→∞
                                               i
                               Z
                = α lim    φn (z, A)λ(dz)
                       n→∞
                                Z
                  +(1 − α) lim     φn (z, A)µ(dz)
                          n→∞
                   Z                          Z
                = α Q(z, A)λ(dz) + (1 − α) Q(z, A)µ(dz)
                = α(T ∗ λ)(A) + (1 − α)(T ∗ µ)(A)

where the second line uses Theorem 7.5 and the rest of the proof relies
on repeated applications of the definition of Lebesgue integration.


Exercise 8.3

   a.      Note that
                                   Z
          haf + bg, λi =    (af + bg)(z)λ(dz)
                           Z               Z
                        = a f (z)λ(dz) + b g(z)λ(dz)
                        = a hf, λi + b hg, λi ,

where the second line uses Exercise 7.26c.
                       8 / Markov Processes                        139

   b.      Note that
                             Z
   hf, αλ + (1 − α)µi =     f (z)[αλ + (1 − α)µ](dz)
                           Z                      Z
                        = α f (z)λ(dz) + (1 − α) f (z)µ(dz)
                        = α hf, λi + (1 − α) hf, µi ,

where the second line comes from applying an argument similar to
the one used in Exercise 8.2.



Exercise 8.4

   a.      The proof is by induction.      By assumption, Q(z, A) =
Q1 (z, A) is a transition function. Hence, by Theorem 8.2,

                Q2 (z, A) = (T ∗ Qz )(A)
                            Z
                          =    Q1 (z 0 , A)Q(z, dz 0 ),

all (z, A) ∈ (Z, Z), is a probability measure on (Z, Z) for each z ∈ Z.
     To prove that for each A ∈ Z, Q2 (·, A) is a measurable function,
notice that Q2 (·, A) ∈ M + (Z, Z) and Theorem 8.1 applies.
     Next, assume Qn−1 (z, A) is a transition function, hence

               Qn (z, A) = (T ∗ Qn−1
                                 z   )(A)
                           Z
                         =    Qn−1 (z 0 , A)Q(z, dz 0 ),

all (z, A) ∈ (Z, Z), is a probability measure on (Z, Z) for each z ∈
Z by the same argument as before. That Qn (·, A), all z ∈ Z, is
a measurable function, follows again from a direct application of
Theorem 8.1.

   b.      Using the properties of the transition functions estab-
140                     8 / Markov Processes

lished in part a.,
                         Z
   Q(n+m) (z0 , A) =     Q(n+m−1) (z1 , A)Q(z0 , dz1 )
                       Z Z
                     =      Q(n+m−2) (z2 , A)Q(z1 , dz2 )Q(z0 , dz1 )
                       Z                   Z
                           (n+m−2)
                     =   Q         (z2 , A) Q(z1 , dz2 )Q(z0 , dz1 )
                       Z
                     =   Q(n+m−2) (z2 , A)Q2 (z0 , dz2 ),

where zi is the state i periods ahead. Continuing the recursion in
this fashion we can write
                               Z
               (n+m)
              Q      (z0 , A) = Qm (zn , A)Qn (z0 , dzn ).

To show that T (n+m) f = (T n )(T m f ), notice that
                       Z
   [T (n+m) f ](z0 ) =   f (zn+m )Qn+m (z0 , dzn+m )
                       Z
                     =   f (zn+m )Qm (zn , zn+m )Qn (z0 , dzn )
                       Z ·Z                          ¸
                     =        f (zn+m )Q (zn , zn+m ) Qn (z0 , dzn )
                                          m

                       Z
                     =   (T m f )(zn )Qn (z0 , dzn )
                     = (T n )(T m f )(z0 ).
To show that T ∗(n+m) λ = (T ∗n )(T ∗m λ), all λ ∈ Λ(Z, Z), note that
by definition,
                         Z
         ∗(n+m)
       T        λ(A) =      Qn+m (z0 , A)λ(dz0 )
                         Z Z
                      =         Qn (zm , A)Qm (z0 , dzm )λ(dz0 )
                         Z               Z
                      =     Q (zm , A) Qm (z0 , dzm )λ(dz0 )
                              n

                         Z
                      =     Qn (zm , A)(T ∗m λ)(dzm )
                        = (T ∗n )(T ∗m λ)(A),
                               8 / Markov Processes                                     141

where both results rely on a repeated application of Theorem 8.3 and
the results obtained in part a.


Exercise 8.5

    Clearly µt (z0 , ∅) = 0, so that condition a. of Exercise 7.29 is
satisfied. In addition, µt (z0 , B) ≥ 0, as Q is a transition function.
    The proof that µt (z0 , ·) satisfies condition b. of Exercise 7.29 is
by induction. Take any arbitrary sequence
                © t ª∞
                 Ci i=1 = {(A1i × A2i × ... × Ati )}∞ i=1 ,

of disjoint sets in C, such that

                                  C t = ∪∞    t
                                         i=1 Ci ∈ C.

      For t = 1 is trivial. For t = 2,
                                            ∞
                  {Ci2 }∞
                        i=1 = {(A1i × A2i )}i=1
                           C 2 = A1 × A2 = ∪∞
                                            i=1 (A1i × A2i )

Fix a point z1 ∈ A1 . Then for each z2 ∈ A2 the point (z1 , z2 ) belongs
to exactly one rectangle (A1i × A2i ) . Thus A2 is the disjoint union
of those A2i such that z1 is in the corresponding A1i . Hence
                  ∞
                  X
                        Q(z1 , A2i )χA1i (z1 ) = Q(z1 , A2 )χA1 (z1 ),
                  i+1

since Q is countably additive. Therefore, by the corollary of the
Monotone Convergence Theorem (see Exercise 7.22), we have that
∞ Z
X                                                   Z
           Q(z1 , A2i )χA1i (z1 )Q(z0 , dz1 ) =             Q(z1 , A2 )χA1 (z1 )Q(z0 , dz1 ),
i=1    Z                                            Z

which implies that
           ∞ Z
           X                                        Z
                       Q(z1 , A2i )Q(z0 , dz1 ) =           Q(z1 , A2 )Q(z0 , dz1 ).
           i=1   A1i                                    A
142                                 8 / Markov Processes

Hence,
 X∞ Z            Z                                              Z     Z
                         Q(z1 , dz2 )Q(z0 , dz1 ) =                        Q(z1 , dz2 )Q(z0 , dz1 ),
     i=1   A1i   A2i                                             A1   A2

and so
                                  ∞
                                  X
                                          µ2 (z0 , Ci ) = µ2 (z0 , C).
                                    i=1

   Next, suppose µt−1 [z0 , (A1 × ... × At−1 )] satisfies condition b.
We will show that µt [z0 , (A1 × ... × At−1 × At )] satisfies the stated
hypothesis also. Fix a point

                       z t−1 = (z1 , ..., zt−1 ) ∈ (A1 × ... × At−1 ).

Then, for each zt ∈ At , the point (z t−1 , zt ) belongs to exactly one
rectangle (A1i × ... × Ati ). Thus At is the disjoint union of those Ati
such that z t−1 is in the corresponding (A1i × ... × At−1i ). Hence,
 ∞
 X
       Q(zt−1 , Ati )χA1i ×...×At−1i (z t−1 ) = Q(zt−1 , At )χA1 ×...×At (z t−1 ),
 i=1

since Q is countably additive. Then, as before, by the corollary of
the Monotone Convergence Theorem,
         X∞ Z
                  Q(zt−1 , Ati )χA1i ×...×At−1i (z t−1 )µt−1 (z0 , dz t−1 )
                       Z t−1
               Zi=1
           =             Q(z1 , A2 )χA1 (z1 )µt−1 (z0 , dz t−1 ),
                 Z t−1
so
                            ∞ Z
                            X                       Z
                                              ...         Q(zt−1 , dzt )...Q(z0 , dz1 )
                            i=1      A1i            Ati
                            Z             Z
                      =             ...         Q(zt−1 , dzt )...Q(z0 , dz1 ),
                               A1         At

which implies
                                    ∞
                                    X
                                          µt (z0 , Ci ) = µt (z0 , C),
                                    i=1
                          8 / Markov Processes                                143

where the second line makes use of the definition of µ. Hence condi-
tion b. of Exercise 7.29 also holds.
    To show that µt (z0 , Z t ) = 1, note that
                          Z       Z
             t       t
            µ (z0 , Z ) =      ... Q(zt−1 , dzt )...Q(z0, dz1 ).
                              Z       Z

But                          Z
                                   Q(zi−1 , dzi ) = 1
                               Z

as Q is a probability measure. Applying this recursively to µt (z0 , Z t )
we obtain the result.


Exercise 8.6

    a.     For B ∈ Z t , C ∈ Z, define C       b ≡ Z × ... × Z × C × Z × ...,
Bb ≡ Z ×...×Z ×B ×Z ×... ∈ Z , and for t = 1, 2, ..., the conditional
                                      ∞

probability Pt+1 (C | [z0 (ω), ...zt (ω)] ∈ B) can be written (generaliza-
tions to Pt+1,...,t+n (C |[z0 (ω), ...zt (ω)] ∈ B ) are straightforward) as

     Pt+1 (C |[z0 (ω), ...zt (ω)] ∈ B )
              b ∪ C)
   = µ∞ (z0 , B    b
     Z      Z
   =    ...    χC (zt+1 , ..., zt+n )χB (z0 , ...zt )Q(zt , dzt+1 )...Q(z0 , dz1 )
     ZZ ZZ
   =    ...    Q(zt , C)χB (z0 , ...zt )Q(zt−1 , dzt )...Q(z0 , dz1 ).
         Z      Z

Hence

   Pt+1 (C |[z0 (ω) = a0 , ...zt (ω) = at ] ) = Q(at , C) (almost surely).

Similarly, we can verify that

             Pt+1 (C |zt (ω) = at ) = Q(at , C) (almost surely).

Hence the desired result follows.

    b.       Follows from the proof outlined in part a.
144                        8 / Markov Processes

   c.                             b = Z × Z × ... × C × Z × ... ∈ Z ∞ .
             For C ∈ Z n , define C
Then

            Pt+1,...,t+n (C)
        = P ({ω ∈ Ω : [zt+1 (ω), ..., zt+n (ω)] ∈ C = C 1 × ... × C n })
        = P ({ω ∈ Ω : zt+1 (ω) ∈ C 1 , ..., zt+n (ω) ∈ C n }),

t = 1, 2, ...; all C ∈ Z n , as

                                  b
      Pt+1,...t+n (C) = µ∞ (z0 , C)
                        Z       Z
                      =     ...     Q(zt+n−1 , dzt+n )...Q(zt , dzt+1 )
                               C1        Cn
                               Q
                               n
                       =            λ(C j ).
                           j=1


Because t, n and C ∈ Z n were arbitrarily chosen, the proof is com-
plete.



Exercise 8.7

    a.      Define the canonical process through the sequence of func-
tions zt (ω) = ω t , ω t ∈ {H, T } , t = 1, 2, ..., and

          At = {B ∈ Ω : B = {ω : ωτ = aτ ∈ {H, T } , τ ≤ t}} .

Then we can define the sequence of sigma algebras as

                    F0 = {∅, Ω}
                           ©           ª
                    Ft = σ A1 , ..., At , t = 1, 2, ...

where σ{· } is the smallest sigma algebra containing the sets A1 , ..., At .
So the sigma field generated by ω 1 , ..., ω t correspond to the knowl-
edge of the outcomes of the first t trials. Clearly, Ft is an increasing
sequence of sigma algebras, and each function zt (ω) is Ft -measurable
by construction.
                         8 / Markov Processes                           145

   b.      We just need to show that the sequence of functions σ t :
Ω → {0, 1}, t = 1, 2, ..., are Ft -measurable. We can redefine σ t as

                σ t (ω) = χ[zt (ω)]
                                       ½
                                           1   if ω t = H
                         = χ(ωt ) =
                                           0   otherwise.

We need to show that if zt is Ft -measurable, then σ t is also Ft -
measurable.
   To see this, fix B ∈ Z, and C ∈ {0, 1} , then

          {ω : zt (ω) ∈ B} = {ω : χ[zt (ω)] ∈ C}
                             ©                   ª
                           = ω : zt (ω) ∈ χ−1 (C) ∈ Ft ,

t = 1, 2, ..., and therefore, since χ is Ft -measurable, so is σ t .

    c.     Same argument as in part b. but here σ t being Ft - measur-
able implies that gt is Ft -measurable too. This comes from Ft ⊂ Ft+1
and Exercise 7.12.


Exercise 8.8

     a.      To show that for t = 1, 2, ..., µt (·, ·) is a stochastic kernel
on {Z, Z t } we have to show that for each z0 ∈ Z, µt (z0 , ·) is a proba-
bility measure on {Z t , Z t }. By Exercise 8.5, Caratheodory and Hahn
Extension Theorems (Theorems 7.2 and 7.3), µt (z0 , ·) has a unique
extension to a probability measure on Z t .
     In addition, it has to be shown that for each B ∈ Z t , µt (·, B) is
an Z measurable function. The proof is by induction.
     Let Q be a transition function on (Z, Z). Clearly Q is a stochastic
kernel on (Z, Z). For t = 1
                                     Z
                       µ(z0 , A1 ) =     Q(z0 , dz1 )
                                      A1

is a measurable function. The result comes from a direct application
of Theorem 8.4, with F (z0 , z1 ) = χA1 (z1 ).
146                       8 / Markov Processes

     Suppose µt−1 (·, B) is a measurable function. Then, by construc-
tion (see part b. of this exercise)
                 Z Z          Z
  µt (z0 , B) =           ...      Q(zt−1 , dzt )Q(zt−2 .dzt−1 )...Q(z0 .dz1 )
                  A1 A2         At
                 Z
              =       µt−1 [z1 , (A2 × ... × At )]Q(z0 , dz1 )
                   A1

and therefore, by Theorem 8.4, µt (z0 , B) is a measurable function.
Because z0 and B are arbitrary, the proof is complete.

   b.     This is a consistency property. By definition, for any
measurable set B = (A1 × ... × At−1 ) ∈ Z t−1
                    Z       Z
        t−1
       µ (z0 , B) =     ...      Q(zt−2 , dzt−1 )...Q(z0 , dz1 )
                            A1      At−1

and                                      Z
                       Q(zt−1 , At ) =            Q(zt−1 , dzt ).
                                             At
   In part a. we proved that µt (·, ·) is a stochastic kernel. Hence,
by Theorem 8.5 and the definition of µt (·, ·),
              Z       Z
     t−1
Q×µ       =       ...       Q(zt−1 , At )µt−1 (z0 , dz t−1 )
               A1      At−1
              Z       Z     Z
          =       ...          Q(zt−1 , dzt )Q(zt−2 , dzt−1 )...Q(z0 , dz1 )
                  A1       At−1    At
                  t
            = µ (z0 , B × At )
    Equivalently, for any measurable set B̂ = (A2 × ... × At ) ∈ Z t−1
                          Z     Z
         µt−1 (z1 , B̂) =   ...   Q(zt−1 , dzt )...Q(z1 , dz2 ).
                              A2        At

Hence by Theorem 8.5,
             Z
µt−1 × Q =      µt−1 (z1 , B̂)Q(z0 , dz1 )
             ZA1 Z        Z
          =     ...           Q(zt−1 , dzt )Q(zt−2 , dzt−1 )...Q(z0 , dz1 )
                  A1       At−1    At
                  t
            = µ (z0 , A1 × B̂)
                       8 / Markov Processes                         147

and the desired result holds for B × At = A1 × B̂.

    c.     This should be read as a Corollary of Theorems 8.6 to 8.8.
For t = 2 the results come from a direct application of Theorems
8.6 to 8.8. For t > 2 results follow from the application of the
aforementioned theorems plus the properties of µt shown in part b.

Exercise 8.9

    a.        Let Ex be the x section of E ⊆ Z = X × Y. By Theorem
7.14, if E in Z is Z-measurable, then every section of E is measurable,
and ν(Ex ) is a well-defined function of x.
    Next, we must show that λ(A × B) = µ(A)ν(B) is a measure
on Z. Clearly λ is non-negative,
                             © j     and λ(∅)ª = 0. It remains to show
countable additivity. Let E ∈ Z, j ∈ N be a disjoint collection,
such that there exist sets Aj ∈ X and B j ∈ Y with E j = Aj × B j ;
and suppose E = ∪j E j ∈ Z, such that there exist sets A and B with
E = A × B. Any point (x, y) ∈ A × B belongs to one and only one of
            j     j
    ª A × B , so that
© jsets
the
                        j
                            for any x ∈ A, the sets of the subcollection
 B for which x ∈ A must constitute a partition of B. Hence,
                    £¡    ¢ ¤     £ ¡ ¢ ¤ X
       ν(Ex ) = ν ∪j E j x = ν ∪j E j x =           χAj (x)ν(B j ),
                                                      j

where we used the fact that B j are disjoint sets, so we can use the
additivity of ν. Since we can write

                          ν(Ex ) = ν(B)χA (x),

we get

               λ(E) = µ(A)ν(B)
                      Z
                    =   ν(Ex )µ(dx)
                                           
                      Z X
                    =        χAj (x)ν(B j ) µ(dx)
                                  j
                           X                      X
                      =         µ(Aj )ν(B j ) =       λ(E j ),
                            j                     j
148                       8 / Markov Processes

as required.                         © ª     © ª
    Finally, the products Aj ×B k for Aj and B k as above decom-
pose X × Y into measurable rectangles of finite measure. Hence, by
Theorem 7.13, Theorem 7.2 (Caratheodory Extension Theorem) and
Theorem 7.3 (Hahn Extension Theorem), there exist a unique prob-
ability measure λ on (X ×Y, X ×Y) such that λ(A×B) = µ(A)ν(B),
all A ∈ X , B ∈ Y.

    b.      Let E = (A × B) ∈ (X × Y). By Theorem 7.14, Fx (y) =
F (x, y) is Y-measurable with respect to y for each x ∈ X, and
Fy (x) = F (x, y) is X -measurable with respect to x for each y ∈ Y.
    Let F (x, y) ≥ 0. Then, since the function F (x, y) is Y-measurable
for each x, the integral
                            Z
                               F (x, y)ν(dy)
                               Y

is well defined. Next, we will show that this integral is an X -
measurable function and
       Z ·Z                ¸        Z
              F (x, y)ν(dy) µ(dx) =    F (x, y)λ(dx × dy).
        X   Y                             X×Y

Consider first F (x, y) = χA×B (x, y), A ∈ X , B ∈ Y. Then, since
χA×B (x, y) = χA (x)χB (y), we have
            Z                                   Z
                    χA×B (x, y)ν(dy) = χA (x)           χB (y)ν(dy)
                Y                                   Y

and consequently the integral on the left is an X -measurable function.
Clearly the same result holds if F is an indicator function for a finite
union of disjoint measurable rectangles.
   Let
           ½             Z                                    ¾
      E = E ∈X ×Y :          χE (x, y)ν(dy) is X -measurable ,
                              Y

we need to show that E is a monotone class. Then, it will follow from
the Monotone Class Lemma that E = X × Y.
                       8 / Markov Processes                         149

   Let {En } be    an increasing sequence of sets in E, with E =
 ∞
∪n=1 En . Then        ½Z                      ¾∞
                               χEn (x, y)ν(dy)
                           Y                        n=1
is an increasing sequence of X -measurable functions, converging point-
wise to                    Z
                              χE (x, y)ν(dy).
                               Y
Hence                      Z
                                   χE (x, y)ν(dy)
                               Y
is also X -measurable. A similar argument holds if {En } is a decreas-
ing sequence. Hence E is a monotone class.
     If F (x, y) is an arbitrary nonnegative X -measurable function, the
X -measurability of the integral
                               Z
                                  F (x, y)ν(dy)
                               Y

follows from the Monotone Convergence Theorem. A similar argu-
ment is valid for       Z
                           F (x, y)µ(dx).
                               X
   In part a. we showed that there is a unique probability measure
λ on (X × Y, X × Y) such that
              λ(A × B) = µ(A)ν(B), allA ∈ X , B ∈ Y.
   If F (x, y) = χA×B (x, y), A ∈ X , B ∈ Y, then
               Z
                    χA×B (x, y)λ(dx × dy) = λ(A × B),
               X×Y

and since χA×B (x, y) = χA (x)χB (y), we have
                     Z ·Z                    ¸
                            χA×B (x, y)ν(dy) µ(dx)
                      X   Y
                     Z ·        Z              ¸
                =        χA (x)    χB (y)ν(dy) µ(dx)
                       X               Y
                 = µ(A)ν(B).
150                        8 / Markov Processes

Hence, by definition of λ, it follows that the statement we need to
prove holds for F (x, y) = χA×B (x, y).
    Next, let F (x, y) = χE (x, y), E ∈ X × Y. Let

                  ½            Z
            F   =  E ∈X ×Y :          χE (x, y)λ(dx × dy)
                                 X×Y
                    Z ·Z                 ¸
                  =        χE (x, y)ν(dy) µ(dx)
                     X   Y
                    Z Z·                 ¸       ¾
                  =        χE (x, y)µ(dy) ν(dx) .
                           Y       X


We have shown that F contains the algebra generated by the mea-
surable rectangles, so it suﬃces to show that F is a monotone class,
and it will follow from the Monotone Class Lemma that F = X × Y.
Let {E©n } beª an increasing sequence of sets in F, with E = ∪∞
                                                              n=1 En .
Then χEn is an increasing sequence of (X × Y)-measurable func-
tions converging pointwise to χE . Then by Theorem 7.4, χE is also
measurable. Define the functions
                           Z
                gn (x) =           χEn (x, y)ν(dy),      n = 1, 2, ...
                               Y


                                       Z
                           g(x) =           χE (x, y)ν(dy).
                                        Y


We have shown that those functions are measurable, and so by the
Monotone Convergence Theorem, gn → g pointwise. Hence,

    Z                                       Z ·Z                     ¸
            χEn (x, y)λ(dx × dy) =                    χEn (x, y)ν(dy) µ(dx),
      X×Y                                     X   Y


n = 1, 2, ...
    Taking the limit as n → ∞ and applying the Monotone Conver-
                      8 / Markov Processes                        151

gence Theorem to both sides, we find that
 Z                                     Z
        χE (x, y)λ(dx × dy) =    lim          χEn (x, y)λ(dx × dy)
  X×Y                            n→∞ X×Y
                                       Z ·Z                   ¸
                             =    lim          χEn (x, y)ν(dy) µ(dx)
                                 n→∞ X       Y
                                       Z
                             =    lim     gn (x)µ(dx)
                                 n→∞ X
                                 Z
                             =       g(x)µ(dx)
                                   X
                                 Z ·Z                    ¸
                             =           χE (x, y)ν(dy) µ(dx),
                                  X    Y


hence E ∈ F. If {En } is a decreasing sequence in F, apply the
argument above to the increasing sequence {Enc }, and use the fact
that E c ∈ F. Hence F is a monotone class. An argument similar
to the one used in Theorem 8.3 can be used to extend the result
to all measurable simple functions, and then by Theorem 7.5 and
the Monotone Convergence Theorem the result is establish for all
measurable (λ-integrable) functions.


    For the case of nonnegative measurable functions F, the only
point in the proof above where the integrability of F was used was
to infer the existence of an increasing sequence of simple functions
converging to F. But if µ and v are σ-finite, then so is λ, and any
nonnegative measurable function on X × Y can be approximated in
this way.




Exercise 8.10


    First, we will prove that the stated condition holds for all indi-
cator functions of measurable sets, all measurable simple functions,
and all measurable functions.
152                    8 / Markov Processes

   Let A ∈ Z a measurable set, and let f (z) = χA (z) then
     Z
           ¡ ¢
        χA z 0 Q(z, dz 0 ) = Q(z, A)
       Z
                             = µ ([Γ(A)]z )
                               Z
                             =     χ{w∈W :g(z,w)∈A} (w) µ(dw),
                                  W

so the condition holds for indicator functions of a measurable set. By
the linearity of the integral (see Exercise 7.26 c.) the result can be
extended to all measurable simple functions and finally by Theorem
7.5 and the Monotone Convergence Theorem to all nonnegative Z-
measurable functions. The general case is covered by representing f
as f + − f − if f is integrable.
    Q has the Feller property, if for zn → z and a continuous function
h, (T h)(zn ) → (T h)(z).
    Fix w ∈ W. If f, g are continuous functions then h = f ◦ g is a
continuous function too. Hence, if zn → z, f [g(zn , w)] → f [g(z, w)].
Define hn = f [g(zn , w)], then h ∈ C(Z). Then, by the Lebesgue
Dominated Convergence Theorem,
                             Z              Z
           lim T hn = lim        hn µ(dw) =     hµ(dw) = T h
           n→∞        n→∞ W                  W

   Hence Q has the Feller property.


Exercise 8.11

    First, we must show that Q is well defined on (Z, Z), that is,
Q : Z × Z → [0, 1]. Clearly, Q takes values on [0, 1], and for any
((w, w0 ), A × B) it is well defined because P is well defined.
    Next, we need to show that for each (w, w0 ) ∈ W ×W , Q[(w, w0 ), ·]
is a probability measure on (Z × Z), and that for each (A × B) ∈ Z,
Q[·, (A × B)] is a Z-measurable function.
    Let C be the class of all measurable rectangles, and let E be the
algebra consisting of all finite unions of sets in C. Fix (w, w0 ); then
Q[(w, w0 ), ·] defined on C clearly satisfies the hypothesis of Theorem
7.13 and Q[(w, w0 ), W × W ] = 1. Hence it can be extended to
                       8 / Markov Processes                         153

a measure on all of E. Since Z is the σ-algebra generated by E, it
then follows immediately from the Caratheodory and Hahn Exten-
sion Theorems that Q[(w, w0 ), ·] has a unique extension to all of Z.
    Finally, we must show that for each C ∈ Z, the function Q(·, C) :
Z → [0, 1] is measurable. Let S ⊆ Z be the family of sets for which
Q(·, C) is a measurable function. By the Monotone Class Lemma, it
suﬃces to show that S contains C and that S is a monotone class.
    Fix C = (A × B) ∈ Z. Then we can write Q as

               Q[(w, w0 ), A × B] = P (w, w0 , B)χA (w0 ),

where χA is the indicator function for A. Since P (·, ·, B) and χA are
measurable functions, and since the products of measurable functions
are measurable, it follows that Q[·, A × B] is measurable.
    Hence S contains the measurable rectangles in Z. Using the fact
that every set in C can be written as the finite union of disjoint
measurable rectangles, we can conclude that C ⊆ Z.
    In order to show that S is a monotone class, let C1 ⊆ C2 ⊆ ...
be an increasing sequence of sets in S, with C = ∪∞    i=1 Ci . Thus, by
Theorem 7.1, for each (w, w0 ) ∈ Z,

                 Q[(w, w0 ), C] = lim Q[(w, w0 ), Cn ].
                                  n→∞

Hence Q[(w, w0 ), C] is the pointwise limit of a sequence of measur-
able functions, and therefore by Theorem 7.4 is measurable. There-
fore C ∈ S. A similar argument applies for decreasing sequences.
Therefore S is a monotone class.
9 Stochastic Dynamic Programming

Exercise 9.1

    By definition,

           u [C(π, z1 ), (π 0 , z1 )]
      =     lim un [C(π, z1 ), (π 0 , z1 )]
           n→∞
      =    lim {F [π 0 , C0 (π, z1 ), z1 ]
           n→∞
             Z
           +    F [C0 (π, z1 ), C1 (z2 ; π, z1 ), z2 ] µ1 (z1 , dz2 )
                Z1
               n Z
               X                    £                                               ¤
           +                 β t−1 F Ct−2 (z2t−1 ; π, z1 ), Ct−1 (z2t ; π, z1 ), z1
                       t−1
               t=3 Z
                t−1
                                 ª
           ×µ        (z1 , dz2t ) .

By¡Assumption  ¢ 9.2, F is measurable. By Theorem 7.14, C0 (π, ·) and
Ct z2t−1 ; π, · are measurable functions of z1 , and then F is a mea-
surable function of z1 by Exercise 7.31. Therefore, u is a measurable
function of z1 . That u is measurable follows from Exercise 7.12.


Exercise 9.2

   a.        First, notice that by assumption F is bounded and A-
measurable,
 £            and so it is ¤Z-measurable (see Exercise 7.31). Therefore,
F π t−1 (z t−1 ), π t (z t ), zt is µt (z0 , · )-integrable, t = 1, 2, ...
   If F is uniformly bounded above,
        £                             ¤
      F π t−1 (z t−1 ), π t (z t ), zt ≤ C,         all z t ∈ Z t , t = 1, 2, ...,

154
                9 / Stochastic Dynamic Programming                                       155

where C is the upper bound. Hence F + is bounded and coupled with
0 < β < 1,


              F + [x0 , π 0 , z0 ]
                        n R
                        P              £                              ¤
              + lim             β t F + π t−1 (z t−1 ), π t (z t ), zt µt (z0 , dz t )
                 n→∞ t=1
                            Zt
               C
         ≤        < ∞,
              1−β


and hence the limit exists (although it may be minus infinity).
   An analogous proof applies if F is uniformly bounded below.
Hence, u(π, s0 ) = limn→∞ un (π, s0 ) is well defined.
    If in addition, Assumption 9.1 holds, then by Lemma 9.1, Π(s0 )
is nonempty for all s0 , and therefore supπ∈Π(s) u(π, s) exists, so υ∗ is
well defined.



    b.       The proof of Theorem 9.2 remains the same, but now the
part a. of this exercise (instead of Assumption 9.2) provides the
justification needed to take the limit of un (π, s0 ) in the first part of
the proof.
   In order to show that Lemma 9.3 still holds, let (x0 , z0 ) = s0 ∈ S
and π ∈ Π(s0 ) be given and suppose F is uniformly bounded above.
Then u(π, s0 ) is well defined, and we can write (10) in the text as


 u(π, s0 ) = F (x0 , π 0 , z0 )
                      X n Z
                                     £                              ¤
             + lim              β t F π t−1 (z t−1 ), π t (z t ), zt µt (z0 , dz t ).
                     n→∞           Zt
                             t=1



We wish to make use of the Monotone Convergence Theorem to
justify exchanging the order of limit and integration. Towards this,
we split F into its positive and negative parts. The second term on
156              9 / Stochastic Dynamic Programming

the right can then be re-expressed as
          Z
     lim     βF + [π 0 , π 1 (z1 ), z1 ] Q(z0 , dz1 )
    n→∞ Z
            Z (X  n Z
                                                                                       )
                                         £                           ¤
    + lim                      β t F + π t−1 (z t−1 ), π t (z t ), zt µt−1 (z1 , dz2t )
        n→∞ Z                  Z t−1
                     t=2
                                  Z
      ×Q(z0 , dz1 ) − lim                  βF − [π 0 , π 1 (z1 ), z1 ] Q(z0 , dz1 )
                      n→∞              Z
             Z (X    n Z
                                                                                               )
                                              £                              ¤
      − lim                            β t F − π t−1 (z t−1 ), π t (z t ), zt µt−1 (z1 , dz2t )
        n→∞ Z                  Z t−1
                     t=2
      ×Q(z0 , dz1 ).

We then use the upper bound on F and the fact that 0 < β < 1 to
make sure the limits exist and u is well defined. By the Monotone
Convergence Theorem, the above expression then equals
   Z
       lim βF + [π 0 , π 1 (z1 ), z1 ] Q(z0 , dz1 )
    Z n→∞
     Z       ( n Z                                                                   )
                X                      £                           ¤
   +     lim                 β t F + π t−1 (z t−1 ), π t (z t ), zt µt−1 (z1 , dz2t )
         Z n→∞       t=2       Z t−1
                         Z
      ×Q(z0 , dz1 ) −    lim βF − [π 0 , π 1 (z1 ), z1 ] Q(z0 , dz1 )
                      Z n→∞
        Z       ( n Z                                                   )
                    X            £                              ¤ t−1
                             t −             t−1          t           t
      −   lim               β F π t−1 (z ), π t (z ), zt µ (z1 , dz2 )
         Z n→∞       t=2       z t−1

      ×Q(z0 , dz1 ),

which equals
                         Z
                     β         u [C(π, z1 ), (π 0 , z1 )] Q(z0 , dz1 ).
                           Z

by the definition of u. A similar argument applies if F is uniformly
bounded below. Substituting into (10) above gives the desired result.
   Finally, Theorem 9.4 remains intact, because the assumptions
made about F and β enter into the proof only through Theorem 9.2
and Lemma 9.3.
               9 / Stochastic Dynamic Programming                           157

Exercise 9.3

   Choose a measurable selection h from Γ. Fix s0 = (x0 , z0 ) ∈ S,
and define π by

                π 0 = h(s0 )
            π t (z t ) = h[xπt (z t ), zt ]
                       = h[φ(xπt−1 (z t−1 ), π t−1 (z t−1 ), zt ), zt ],

for all z t ∈ Z t ; t = 1, 2, ...
    Clearly π satisfies (1a0 ) and (1b0 ) and π 0 is measurable. That
each π t is measurable for all t then follows by induction from the
fact that φ is measurable and compositions of measurable functions
are measurable (see Exercise 7.31). Since s0 was arbitrarily chosen,
the proof is complete.


Exercise 9.4

   Notice that under Assumptions 9.10 and 9.20 , υ∗ is well defined.
Hence, in order to show that υ = υ ∗ we have to show that

    υ(s) ≥ u(π, s), all π ∈ Π(s) and
    υ(s) =      lim u(π k , s), for some sequence {π k }∞
                                                        k=1 in Π(s).
               k→∞

   Choose any s0 = (x0 , z0 ) ∈ S. Then for any π ∈ Π(s0 ),
                  ½                    Z                                   ¾
υ(s0 ) =      sup  F (x0 , y, z0 ) + β   υ[φ(x0 , y, z1 ), z1 ]Q(z0 , dz1 )
            y∈Γ(s0 )                          Z
                                    Z
        ≥ F (x0 , π 0 , z0 ) + β    υ[φ(x0 , π 0 , z1 ), z1 ]Q(z0 , dz1 )
                             Z    Z

        = u0 (π, s0 ) + β       υ[φ(x0 , π 0 , z1 ), z1 ]µ1 (z0 , dz 1 ),
                                Z

where the second line used the fact that π is feasible from s0 ,and
the third uses the definitions of u0 and µ1 . Iterating on this process,
158               9 / Stochastic Dynamic Programming

gives
                                Z
             u0 (π, s0 ) + β           υ[φ(x0 , π 0 , z1 ), z1 ]µ1 (z0 , dz 1 )
                                ZZ
                                                           £                 ¤
        = u0 (π, s0 ) + β                     sup         F xπ1 (z 1 ), y, z1 µ1 (z0 , dz 1 )
                                  Z y∈Γ[xπ   1
                                         1 (z ),z1 ]
                  Z
             +β   υ[φ(xπ1 (z 1 ), y, z2 ), z2 ]Q(z1 , dz2 )µ1 (z0 , dz 1 )
               Z
                          Z
                                  £                        ¤
        ≥ u0 (π, s0 ) + β     F xπ1 (z 1 ), π 1 (z 1 ), z1 µ1 (z0 , dz 1 )
                            Z
              Z
          +β      υ[φ(xπ1 (z 1 ), π 1 (z 1 ), z2 ), z2 ]Q(z1 , dz2 )µ1 (z0 , dz 1 )
               Z            Z
                          2
        = u1 (π, s0 ) + β        υ[φ(xπ1 (z 1 ), π 1 (z 1 ), z2 ), z2 ]µ2 (z0 , dz 2 ),
                                    Z2

where the last line uses the definition of u1 and that the two integrals
can be combined into one (see Exercise 8.8). Therefore, it follows by
induction that
                               Z
  υ(s0 ) ≥ un (π, s0 ) + β n+1        υ[φ(xπn (z n ), π n (z n ), zn+1 ), zn+1 ]
                                                  Z n+1
                      n+1              n+1
                 ×µ         (z0 , dz         ),

n = 1, 2, 3, ...
   Taking the limit as n → ∞ and using (70 ) we obtain that

                                       υ(s0 ) ≥ u(π, s0 ),

and since π ∈ Π(s0 ) was arbitrary, υ(s) ≥ u(π, s), for all π ∈ Π(s).
    To show that the second condition is also satisfied, let π ∗ be
any plan generated by G from s0 . If G is nonempty and permits
at least one measurable selection, there is at least one such plan.
Then repeating the argument above with equality at every step, we
can show that υ(s) = limk→∞ u(π k , s) for the sequence π k = π ∗ ,
k = 1, 2, ...
    Since s0 ∈ S was arbitrary, this establishes that υ = υ∗ .


Exercise 9.5
                   9 / Stochastic Dynamic Programming                                      159

   a.     Let (x0 , z0 ) = s0 ∈ S and π ∈ Π(s0 ) be given and suppose
that F ≥ 0. Under Assumption 9.20 , u(π, s0 ) is well defined, and
        u(π, s0 )
                                    n Z
                                    X               £                          ¤
   = F (x0 , π 0 , z0 ) + lim                  β t F xπt (z t ), π t (z t ), zt µt (z0 , dz t ).
                             n→∞          Zt
                                    t=1

For the second term on the right we have,
            Xn Z
                        £                          ¤
        lim        β t F xπt (z t ), π t (z t ), zt µt (z0 , dz t )
         n→∞           Zt
                 t=1
         Z
                    £                        ¤
    =        lim βF xπ1 (z 1 ), π 1 (z1 ), z1 Q(z0 , dz1 )
           Z n→∞
           Z       ( n Z                                                            )
                    X                    £                        ¤
         +     lim                β t F xπt (z t ), π t (z t ), zt µt−1 (z1 , dz2t )
              Z n→∞         t=2   Z t−1

      ×Q(z0 , dz1 )
      Z
                    £                       ¤
    =    β lim F xπ1 (z 1 ), C0 (π, z1 ), z1 Q(z0 , dz1 )
       ZZ n→∞
                      £                                                   ¤
      +     β lim F φ[xπ1 (z 1 ), C0 (π, z1 ), z1 ], C1 (z2 ; π, z1 ), z2
             Z1      n→∞
             1
         ×µ (z1 , dz2 )Q(z0 , dz1 )
           n Z
           X               £
         +            β t F φ[xπt−1 (z t−1 ), Ct−2 (z2t−1 ; π, z1 ), zt ],
             t=3    Z t−1
                             ¤
      Ct−1 (z2t ; π, z1 ), zt µt−1 (z1 , dz2t )Q(z0 , dz1 )
        Z
    = β    u [C(π, z1 ), (xπ1 (z1 ), z1 )] Q(z0 , dz1 ),
             Z
where the steps are justified as in Lemma 9.3 in the text. Hence,
substituting into the original equation the desired result follows.
     If F ≤ 0, a similar argument can be applied to the function −F.
     If F takes on both signs, then we can make use of Assumption
   0
9.3 , and define the sequence of functions Ĥn (z1 ) : Z → R by
                       £                        ¤
       Ĥn (z1 ) = βF xπ1 (z 1 ), π 1 (z1 ), z1
                      Xn Z
                                        £                        ¤
                    +            β t F xπt (z t ), π t (z t ), zt µt (z1 , dz2t ),
                            t=2   Z t−1
160             9 / Stochastic Dynamic Programming

n = 2, 3, ..., and Assumption 9.30
     P∞ t                     ¯ implies ¯ that there exist a constant
                              ¯         ¯
L̄ = t=0 β Lt (s0 ) such that ¯Ĥn (z1 )¯ ≤ L̄, all z1 ∈ Z, all n. Hence,
as in Lemma 9.3, we can use the Lebesgue Dominated Convergence
Theorem to justify the change in the order of limit and integration.

    b.     Let π ∗ be a plan that attains the supremum in (2). Since
G is defined by (60 ), it is suﬃcient to show that
                                        Z
         ∗                 ∗                     ∗
       υ (s0 ) = F (x0 , π 0 , z0 ) + β   υ∗ [xπ1 (z1 ), z1 ]Q(z0 , dz1 )
                                               Z

and

            ∗                   ∗
      υ∗ (xπt , zt ) = F [xπt (z t ), π ∗t (z t ), zt ]
                           Z
                                         ∗
                       +β      υ∗ [xπt+1 (z t+1 ), zt+1 ]Q(zt , dzt+1 ),
                                Z

                          µt (z0 , · )-a.e.,       t = 1, 2, ...
To show that the first equation holds, notice that by hypothesis π ∗
satisfies

             υ∗ (s0 ) = u(π ∗ , s0 ) ≥ u(π, s0 ),           all π ∈ Π(s0 ).

Therefore, using the result shown in part a., we can write the above
expression as
                                Z
                                                       ∗
        F (x0 , π ∗0 , z0 ) + β    u[C(π ∗ , z1 ), (xπ1 (z1 ), z1 )]Q(z0 , dz1 )
                                 Z
                                   Z
        ≥ F (x0 , π 0 , z0 ) + β     u[C(π, z1 ), (xπ1 (z1 ), z1 )]Q(z0 , dz1 ),
                                     Z

for all π ∈ Π(s0 ). In particular, the above inequality holds for any
plan π ∈ Π(s0 ), with π 0 = π ∗0 . Next, choose a measurable selection g
from G, and define the plan π g ∈ Π(s0 ) as follows:

                π g0 = π ∗0
                                g
           π gt (z t ) = g[xπt (z t ), zt ],       all z t ∈ Z t , t = 1, 2, ...
                  9 / Stochastic Dynamic Programming                                     161

For each z1 ∈ Z, the continuation C(π g , z1 ) is a plan generated by
G from (φ(x0 , π ∗0 , z1 ), z1 ). Hence, C(π g , z1 ) attains the supremum in
(2) for s = (φ(x0 , π ∗0 , z1 ), z1 ) (see Exercise 9.4). That is,
          ∗                                     ∗                           ∗
   υ ∗ [xπ1 (z1 ), z1 ] = u[C(π g , z1 ), (xπ1 (z1 ), z1 )] ≥ u[π, (xπ1 (z1 ), z1 )],
                  ∗
all π ∈ Π(xπ1 (z1 ), z1 ), all z1 ∈ Z. In particular, since C(π ∗ , z1 ) ∈
     ∗
Π(xπ1 (z1 ), z1 ), all z1 ∈ Z, the equation above implies that
                          ∗                                   ∗
  u[C(π g , z1 ), (xπ1 (z1 ), z1 )] ≥ u[C(π ∗ , z1 ), (xπ1 (z1 ), z1 )], all z1 ∈ Z;

and since π g ∈ Π(s0 ) and π g0 = π ∗0 ,
                  Z
                                          ∗
                      u[C(π ∗ , z1 ), (xπ1 (z1 ), z1 )]Q(z0 , dz1 )
                  ZZ
                                          ∗
               ≥      u[C(π g , z1 ), (xπ1 (z1 ), z1 )]Q(z0 , dz1 ).
                              Z

By Exercise 7.24, these two inequalities together imply that
                      ∗                                   ∗
u[C(π g , z1 ), (xπ1 (z1 ), z1 )] = u[C(π ∗ , z1 ), (xπ1 (z1 ), z1 )],       Q(z0 , · )-a.e.

It then follows that
              ∗                                     ∗
       υ ∗ [xπ1 (z1 ), z1 ] = u[C(π ∗ , z1 ), (xπ1 (z1 ), z1 )],       Q(z0 , · )-a.e.

Hence,

υ ∗ (s0 ) = u(π ∗ , s0 )
                                       Z
                                                                   ∗
           = F (x0 , π ∗0 , z0 ) + β         u[C(π ∗ , z1 ), (xπ1 (z1 ), z1 )]Q(z0 , dz1 )
                                       ZZ
                                                    ∗
           = F (x0 , π ∗0 , z0 ) + β         υ ∗ [xπ1 (z1 ), z1 ]Q(z0 , dz1 ),
                                         Z

where the second line uses the result obtained in part a. and the last
uses Exercise 7.24.
    Using an analogous argument, with
              ∗                                     ∗
       υ ∗ [xπ1 (z1 ), z1 ] = u[C(π ∗ , z1 ), (xπ1 (z1 ), z1 )],       Q(z0 , · )-a.e.
162                9 / Stochastic Dynamic Programming

as the starting point, we can show the second equation at the begin-
ning holds for t = 1, and continue by induction.


Exercise 9.6

    a.       To see that Assumption 9.1 is satisfied, notice that by
Assumption 9.6, Γ is non-empty valued. Assumptions 9.4, 9.5 and
9.6 imply that the graph of Γ is (X × X × Z)-measurable. To see
this, recall that, A, the graph of Γ, is defined by

                  A = {(x, y, z) ∈ X × X × Z : y ∈ Γ(x, z)} .

We need to show that A ∈ X × X × Z.
   Let Z be countable. Then A = A1 ∪ A2 ∪ A3 ∪ ..., where

                            Ai = Âi × {zi } , i = 1, 2, ...,

and Âi = {(x, y) ∈ X × X : y ∈ Γ(x, zi } .
    By Assumption 9.6, for z fixed, Γ is continuous. But Âi is (X ×
X )-measurable for i = 1, 2, ..., then Ai is (X × X × Z)-measurable,
and so is its countable union. The extension of this result for the
case when Z is a compact (Borel) set in Rk is similar to the second
part of the proof of Theorem 8.9.
    As Γ is continuous by Assumption 9.6, it is upper hemi-continuous.
As it is compact valued, Theorem 7.6 applies and it has a measurable
selection.
    To see that Assumption 9.2 holds, note that, because F is con-
tinuous, it is measurable with respect to the Borel sets, and so it
is A measurable (see Exercise 7.10). Assumption 9.7 assures that
F [π t−1 (z t−1 ), π t (z t ), zt ] is µt (z0 , ·)-integrable for t = 1, 2, ..., and that
the limit
                                 X  n Z
   F [x0 , π 0 , z0 ] + lim                 β t F [π t−1 (z t−1 ), π t (z t ), zt ]µt (z0 , dz t )
                        n→∞            Zt
                                t=1

exists (see Exercise 9.2). Therefore Assumption
                                        ¯          9.2 holds.        ¯
    Finally, Assumption 9.7 says that F [π t−1 (z ), π t (z t ), zt ]¯ ≤ B
                                        ¯         t−1

<∞ for all t. Hence defining Lt (s0 ) = B for all t, and using the fact
that 0 < β < 1 Assumption 9.3 is satisfied.
               9 / Stochastic Dynamic Programming                                  163

Exercise 9.7

     a.    The proof that Assumption 9.10 holds parallels the one
presented in Exercise 9.6, but in addition it must be proved that the
function φ : D × Z → X is measurable. With Assumptions 9.16
and 9.17 at hand the result obtained in Exercise 7.10 applies, which
completes the proof that Assumption 9.10 is satisfied.
     The proofs needed to show that Assumptions 9.20 and 9.30 hold
are a straightforward adaptation of the ones developed in Exercise
9.6.

    b.     Let u = (x, y) and define ψ(u, z 0 ) = f [φ(u, z 0 ), z 0 ] as in
the proof of Lemma 9.5’. Since f ∈ C(S) and φ is continuous, then
ψ ∈ C(S). The rest of the proof is similar to the proof of Theorem
9.6, with ψ playing the role of f.

    c.        Under the stated assumptions, an argument analogous to
the one used in Theorem 9.7 in the text applies. To see this, fix
z ∈ Z. Let f (·, z) ∈ C 0 (S) and take x1 , x2 ∈ X, with x1 > x2 . Also,
let yi ∈ Γ(xi , z) attain the supremum in
                         ½                  Z                              ¾
                                                           0    0        0
(T f )(xi , z) = sup       F (xi , y, z) + β f [φ(xi , y, z ), z ]Q(z, dz ) .
               y∈Γ(xi ,z)

Then
                                          Z
   (T f )(x1 , z) = F (x1 , y1 , z) + β       f [φ(x1 , y1 , z 0 ), z 0 ]Q(z, dz 0 )
                                          Z
                  ≥ F (x1 , y2 , z) + β       f [φ(x1 , y2 , z 0 ), z 0 ]Q(z, dz 0 )
                                          Z
                  > F (x2 , y2 , z) + β       f [φ(x2 , y2 , z 0 ), z 0 ]Q(z, dz 0 )
                  = (T f )(x2 , z),
where the second line uses Assumption 9.9 and the fact that y1 max-
imizes the right-hand side, and the third line uses Assumptions 9.8
and 9.9 and φ nondecreasing. Hence (T f )(·, z) is strictly increasing.

   d.      The first part of the proof is similar to the proof of Theo-
rem 9.8 in the text. The only diﬀerence is the proof that T [C 0 (S)] ⊆
164             9 / Stochastic Dynamic Programming

C 00 (S), where C 0 (S) and C 00 (S) are defined as in the proof of The-
orem 9.8. In order to show this, let f ∈ C 0 (S) and let x0 6= x1 ,
θ ∈ (0, 1), and xθ = θx0 +(1−θ)x1 . Let yi ∈ Γ(xi , z) attain (T f )(xi , z)
for i = 0, 1. Then by Assumption 9.10, yθ = θy0 +(1−θ)y1 ∈ Γ(xθ , z).
It follows that

          (T f )(xθ , z)
                             Z
      ≥ F (xθ , yθ , z) + β   f [φ(xθ , yθ , z 0 ), z 0 ]Q(z, dz 0 )
                            Z
         ·                    Z                                          ¸
                                                    0     0            0
      > θ F (x0 , y0 , z) + β     f [φ(x0 , y0 , z ), z ]Q(z, dz )
                               Z
                     ·                 Z                                     ¸
                                                              0      0     0
        +(1 − θ) F (x1 , y1 , z) + β        f [φ(x1 , y1 , z ), z ]Q(z, dz )
                                             Z
      = θ(T f )(x0 , z) + (1 − θ)(T f )(x1 , z),

where the first line uses (7) and the fact that yθ ∈ Γ(xθ , z); the
second line the hypothesis that f is concave, and the concavity re-
striction on F in Assumption 9.10 and the assumption that φ(· , ·
, z 0 ) is concave. Since x0 and x1 were arbitrary, it follows that T f is
strictly concave, and since f was arbitrary, that T [C 0 (S)] ⊆ C 00 (S).
Hence, the unique fixed point υ is strictly concave. Since F is strictly
concave (Assumption 9.10) and , for each s ∈ S, Γ(s) is convex (As-
sumption 9.11), it follows that the maximum in (7) is attained at a
unique y value. Hence G is a single valued function. The continuity
of G then follows from the fact that it is u.h.c. by the Theorem of
the Maximum (Theorem 3.6).

    e.       Let C 00 (S) ⊆ C 0 (S) be as defined in the proof of Theorem
9.8. As shown in part d. T [C 0 (S)] ⊆ C 00 (S) and υ ∈ C 00 (S). Let
υ 0 ∈ C 0 (S), and define the functions {fn } and f by
                                      Z
       fn (x, y, z) = F (x, y, z) + β     υ n [φ(x, y, z 0 ), z 0 ]Q(z, dz 0 ),
                                         Z

n = 1, 2, ..., and
                                        Z
        f (x, y, z) = F (x, y, z) + β        υ[φ(x, y, z 0 ), z 0 ]Q(z, dz 0 ).
                                         Z
                9 / Stochastic Dynamic Programming                                   165

Since υ 0 ∈ C 0 (S), each function υ n , n = 1, 2, ..., is in C 00 (S), as is υ.
Hence for any s ∈ S = X × Z, the functions {fn (s, · )} and f (s, · )
are all strictly concave in y, and so Theorem 3.8 applies.

   f.        Fix z0 . Let (x0 , z0 ) ∈ int X × Z and g(x0 , z0 ) ∈ int
Γ(x0 , z0 ). Then, there is some open neighborhood D of x0 such that
g(x0 , z0 ) ∈ int Γ(x, z0 ), all x ∈ D. Hence we can define W : D → R
by
                                      Z
   W (x) = F [x, g(x0 , z0 ), z0 ] + β υ[φ(g(x0 , z0 ), z 0 ), z 0 ]Q(z0 , dz 0 ).

    As F , υ and φ are concave, W is concave, continuously diﬀeren-
tiable on D and

                     W (x) ≤ υ(x, z0 ),           all x ∈ D,

with equality at x0 . Hence Theorem 4.10 applies and the desired
result follows.

     g.       In order to show that υ(x, z) is strictly increasing in z, we
need to make the additional assumption that φ is non-decreasing in
z.
     Paralleling Theorem 9.11, it is enough to show that T [C 0 (S)] ⊆
C (S), where C 0 (S) and C 00 (S) are defined as in Theorem 9.11.
  00

Fix x ∈ X. Assume f ∈ C 0 (S), and choose z1 < z2 . As before, let
yi ∈ Γ(x, zi ) attain the supremum in
                         ½                  Z                              ¾
                                                         0    0          0
(T f )(x, zi ) = sup       F (x, y, zi ) + β f [φ(x, y, z ), z ]Q(zi , dz ) .
                y∈Γ(x,zi )

Hence,
                                            Z
    (T f )(x, z1 ) = F (x, y1 , z1 ) + β        f [φ(x, y1 , z 0 ), z 0 ]Q(z1 , dz 0 )
                                            Z
                    < F (x, y1 , z2 ) + β       f [φ(x, y1 , z 0 ), z 0 ]Q(z2 , dz 0 )
                                            Z
                    ≤ F (x, y2 , z2 ) + β       f [φ(x, y2 , z 0 ), z 0 ]Q(z2 , dz 0 )
                    = (T f )(x, z2 ),
166             9 / Stochastic Dynamic Programming

where the second line uses Assumptions 9.13, 9.15 and the added
assumption about φ, and the third line uses Assumption 9.14. Hence,
(T f )(x, ·) is strictly increasing.


Exercise 9.8

    To see that Assumption 9.1 holds, note that Assumption 9.19
implies that Γ is nonempty, while Assumptions 9.5 and 9.18 imply
that A is (X × X × Z) measurable. In addition, Assumptions 9.5,
9.18 and 9.19 imply that the assumptions of Theorem 7.6 (Measur-
able Selection Theorem) are satisfied. Hence, Γ has a measurable
selection.
    To show that Assumption 9.2 holds, notice that under assumption
9.1 A = {C ∈ X × X × Z : C ⊆ A} is a σ-algebra, and by Assump-
tion 9.20 F : A → R is A-measurable (see Exercise 7.10).
    We showed already that kxt kl ≤ αt kx0 kl , t = 1, 2, ...(see Exercise
4.6). Hence for any π ∈ Π(s0 ), all s0 ∈ S, by Assumption 9.19 and
9.20 is it straightforward that
             ¯                                   ¯
             ¯F [π t−1 (z t−1 ), π t (z t ), zt ]¯ ≤ αt B(1 + α) kx0 k ,
                                                                      l

 all z t ∈ Z t , t = 1, 2, ...
     Therefore, for all t = 1, 2, ..., the positive and negative parts of F
are bounded and then F [π t−1 (z t−1 ), π t (z t ), zt ] is µt (z0 , ·)-integrable
(see Exercises 7.25 and 7.26). Finally, by the bound imposed on F
for each t, and the fact that α ∈ (0, β −1 ),
                                  n Z
                                  X
       F [x0 , π 0 , z0 ] + lim             β t F [π t−1 (z t−1 ), π t (z t ), zt ]µt (z0 , dz t )
                         n→∞            t
                                  t=1 Z
                                  Xn
  ≤ F [x0 , π 0 , z0 ] + lim            (βα)t B(1 + α) kx0 kl ≤ ∞.
                         n→∞
                                  t=1

Hence, the limit exists. Therefore Assumption 9.2 is satisfied. More-
over, the limit is finite.
   Define Lt (s0 ) = αt B(1 + α) kx0 kl . Then, using the results above,
Assumption 9.3 is clearly satisfied.
               9 / Stochastic Dynamic Programming                            167

Exercise 9.9

   To show that M : H(S) → H(S), first note that if f is homoge-
neous of degree one,
                               Z
               (M f )(λy, z) =    f (λy, z 0 )Q(z, dz 0 )
                               Z
                             =    λf (y, z 0 )Q(z, dz 0 )
                                 Z
                             = λ f (y, z 0 )Q(z, dz 0 )
                                 = λ(M f )(y, z),

hence M f is homogeneous of degree one.
     To prove that M f is a continuous function, notice that the proof
of Lemma 9.5 applies with the obvious change of norm for H(S).
     To show that the operator M preserves quasi-concavity, choose
y1 , y2 ∈ X, with y1 6= y2 and f (y1 , z) > f (y2 , z). If f is quasi-concave,
then for θ ∈ (0, 1), f [θy1 + (1 − θ)y2 , z] ≥ f (y2 , z). Then,
                                     Z
   (M f )[θy1 + (1 − θ)y2 , z] =         f [θy1 + (1 − θ)y2 , z 0 ]Q(z, dz 0 )
                                     Z
                                 ≥       f (y2 , z 0 )Q(z, dz 0 )
                                 = (M f )(y2 , z),

  all z ∈ Z, all θ ∈ (0, 1). If f is strictly quasi-concave, then the
inequality above is also strict.


Exercise 9.10

  a.    The proofs that H(S) is a complete metric space and T :
H(S) → H(S) parallel that of Exercise 4.7. Define T as
                           ½                Z                   ¾
                                                     0        0
      T f (x, z) =     sup  F (x, y, z) + β   f (y, z )Q(z, dz ) .
                     y∈Γ(x,z)                    Z
168           9 / Stochastic Dynamic Programming

Choose f, g ∈ H(S) and f ≤ g. Clearly T f ≤ T g, so T satisfies the
monotonicity property. Similarly, choose f ∈ H(S) and a > 0. Then

        T (f + a)(x, z)
                ½               Z                        ¾
                                         0             0
      =   sup    F (x, y, z) + β [f (y, z ) + a]Q(z, dz )
          y∈Γ(x,z)                 Z
                ½                Z                            ¾
                                          0        0
      =     sup  F (x, y, z) + β   f (y, z )Q(z, dz ) + βa kyk
          y∈Γ(x,z)                 Z
                ½                Z                       ¾
      ≤     sup  F (x, y, z) + β   f (y, z 0 )Q(z, dz 0 ) + βaα kxk
          y∈Γ(x,z)                 Z
      = (T f )(x, z) + βaα kxk ,

where the third line uses Assumption 9.19. Since s ∈ S was arbitrary,
it follows that T (f +a) ≤ T f +αβa. Hence T satisfies the discounting
condition, and by Theorem 4.12, T is a contraction of modulus αβ <
1. It then follows from the Contraction Mapping theorem that T has
a unique fixed point υ ∈ H(S).
     That G is non-empty, compact valued and u.h.c. then follows
from the Theorem of the Maximum (Theorem 3.6). Finally, suppose
that y ∈ G(x, z). Then y ∈ Γ(x, z) and
                                        Z
              υ(x, z) = F (x, y, z) + β   υ(y, z 0 )Q(z, dz 0 ).
                                       Z

It then follows from Assumption 9.19 that λy ∈ Γ(λx, z) and from
the homogeneity of F and υ that for each z ∈ Z,
                                       Z
          υ(λx, z) = F (λx, λy, z) + β   υ(λy, z 0 )Q(z, dz 0 ).
                                           Z

Hence λy ∈ G(λx).

    b.      For υ to be strictly quasi-concave, (X, X ), (Z, Z), Q, Γ,
F , and β have to satisfy Assumptions 9.5, 9.18-9.20 and in addition
for each z ∈ Z, F (· ,· , z) must be strictly quasi-concave. The proof
parallels the ones in Theorem 9.8 and Exercise 4.8c.

    c.    Adding Assumptions 9.8 and 9.9 we obtain monotonicity
of υ. The proof is similar to Theorem 9.7, with H(X), H 0 (X) and
                9 / Stochastic Dynamic Programming                              169

H 00 (X) as defined in Exercise 4.8c., instead of C(X), C 0 (X) and
C 00 (X).
      For diﬀerentiability of υ, we need the same assumptions as in
part b., plus Assumption 9.12. Then, for each z ∈ Z, x, x0 ∈ X with
x 6= αx0 , for any α ∈ R, Theorem 4.10 applies.

Exercise 9.11

   For this particular example,
          υ[π t−1 (z t−1 ), zt ]
                     α                             1
        = A0 +              ln π t−1 (z t−1 ) +        ln zt
                1 − αβ                          1 − αβ
                   ( t−1                                         )
             α        X
        =                   αt−1−n [ln(αβ) + ln(zn )] + αt ln x0
          1 − αβ n=0
                           1
             +A0 +             ln zt .
                        1 − αβ
Using the fact that 0 < β < 1, 0 < αβ < 1 and E(ln z) = m < ∞, it
is straightforward to show that
                       Z
                     t
               lim β     υ[π t−1 (z t−1 ), zt ]µt (z0 , dz t ) = 0,
             t→∞            Zt
and hence that condition a. of Theorem 9.12 is satisfied.

Exercise 9.12

   Denote by λ the probability measure on u. Then,
            Z
                   |zt | µt (z0 , dz t )
              Zt
            Z        ·Z                                  ¸
        =                    |ρzt−1 + ut | Q(zt−1 , dzt ) µt−1 (z0 , dz t−1 )
                  t−1
            ZZ          Z

        ≤       (|ρzt−1 | + |ut |) µt (z0 , dz t )
              Z t−1
          Z                 Z
        =   |ut | λ(dut ) +         |ρzt−1 | µt−1 (z0 , dz t−1 ).
              Z                    Z t−1
170                 9 / Stochastic Dynamic Programming

Hence, since 0 ≤ ρ ≤ 1, z0 ∈ R, and |u| has finite mean since Z = R,
there exist an A > 0, such that
     Z                                t
                                      X              Z
            |zt | µt (z0 , dz t ) =           ρt−i       |ui | λ(dui ) + ρt |z0 | ≤ A, all t.
       Zt                             i=1

     The second part is proved by induction. For t = 1, since u has
finite mean and variance, there exists a B > 0 such that
   Z                      Z
                             ¡ 2 2                 ¢
      z12 µ(z0 , dz 1 ) =      ρ z0 + 2ρz0 u1 + u21 Q(z0 , dz 1 )
                                       Z             Z
                        = ρ2 z02 + 2ρz0 u1 λ(du1 ) + u21 λ(du1 ) < B.
                          R          2    t−1 (z , dz t−1 ) < B, then
     Next, assume             Z t−1 zt−1 µ      0
R                                R £ 2 2           R            R           ¤
     zt2 µt (z0 , dz t ) =          ρ zt−1 + 2ρzt−1 ut λ(dut ) + u2t λ(dut )
Zt                              Z t−1
                                    t−1
                                ×µ          (z0 , dz t−1 )
                                       R
                          = ρ2                 2
                                              zt−1 µt−1 (z0 , dz t−1 )
                                      Z t−1
                                                         "                                       #
                                  R                           R           t−1              t−1
                                + ut λ(dut ) 2ρ                      zt−1 µ     (z0 , dz         )
                                                             Z t−1
                                 R
                                + u2t λ(dut )
                          < B,

where the inequality comes from the result obtained in the first part
of the exercise.


Exercise 9.13

     a.          The most general solution to (1) would be

               υ(x, z) = υ 0 + υ 1 z + υ 2 x + υ 3 zx − υ 4 x2 + υ 5 z 2 .

That is, it may be the case that υ 5 6= 0. In fact, the proposed solution
(with υ 5 = 0) does not satisfy (1) .
             9 / Stochastic Dynamic Programming                           171

   To show that the equation above constitutes a solution to (1),
substitute this guess in (1) to get
     υ0 + υ 1 z + υ 2 x + υ3 zx − υ 4 x2 + υ5 z 2
         ½
                  1        1
   = sup zx − bx2 − c (y − x)2
      y           2        2
         Z                                                           ¾
             ¡           0                        2      02
                                                            ¢ ¡   0
                                                                    ¢
     +β        υ0 + υ1 z + υ 2 y + υ 3 zy − υ 4 y + υ 5 z Q z, dz      .
            Z

The first-order condition of the maximization problem of the right
hand side is
                          Z
                                  ¡       ¢
        −c (y − x) + υ3 β    z 0 Q z, dz 0 − 2βυ 4 y + βυ 2 = 0.
                            Z

Let ū and σ 2 denote the mean and variance of u. Then,
                       1
             y=               [cx + β (υ 2 + υ 3 (ρz + ū))] .
                  (c + 2υ4 β)
    We can plug this into the functional equation above, group terms,
and solve for the coeﬃcients. The values of the coeﬃcients that
satisfy (1) are implicitly given by
                β 2 (υ 2 + υ 3 u)2            β £           ¡        ¢¤
    υ0 =                                +        υ 1 u + υ 5 u2 + σ 2 ;
             (1 − β) 2(c + 2βυ 4 ) 1 − β
                        β 2 ρυ 3 (υ2 + u)
    υ1 =     βρυ 1 +                        ;
                           (c + 2βυ 4 )
                  cβ
    υ2 =                     (υ2 + υ 3 ū) ;
             (c + 2βυ 4 )
                     cβρυ 3
    υ3 =     1+                   ;
                  (c + 2βυ 4 )
             b         cβυ4
    υ4 =        +                  ;
             2 (c + 2βυ 4 )
               (βρυ 3 )2
    υ5 =                    ;
             (c + 2βυ 4 )
To verify that one of the solutions to υ4 is strictly positive, notice
that
                                               cb
                2βυ 24 + [(1 − β) c − βb] υ4 −    = 0,
                                               2
172             9 / Stochastic Dynamic Programming

and therefore
                                   q
                 [(1 − β) c − βb] ± [(1 − β) c − βb]2 + 4βcb
         υ4 =                                                                     ,
                                               4β

which clearly implies the result.

    b.    From part a. we know that the first-order condition for
the problem above implies that

                               1
        y = g(x, z) =                  [cx + β (υ 2 + υ3 (ρz + ū))] ,
                          (c + 2υ 4 β)

which can be written as

                       y = g(x, z) = g0 + g1 x + g2 z,

where

                                          β (υ 2 + υ 3 ū)
                            g0 =                           ;
                                           (c + 2υ 4 β)
                                                c
                            g1 =                        ;
                                          (c + 2υ 4 β)
                                             βυ 3 ρ
                            g2 =                        ;
                                          (c + 2υ 4 β)

and clearly 0 < g1 < 1 since in part a. we showed that υ 4 > 0.



Exercise 9.14

    Using (10) we can write the measurable functions that conform
to the plan π ∗ (· ; s0 ) generated by g as

                                   t
                                   X                           t
                                                               X
           π ∗t (z t , s0 ) = g0         g1i + g1t+1 x0 + g2         g1t−i zi .
                                   i=0                         i=0
                   9 / Stochastic Dynamic Programming                                                       173

Hence, (11) becomes
                   Z                                     Ã    t−1                            t−1
                                                                                                                !
                                                              X                              X
       lim β   t
                           υ0 + υ1 zt + υ 2 g0                       g1i + g1t x0 + g2             g1t−1−i zi
      t→∞          Zt                                          i=0                           i=0
                       Ã       t−1                              t−1
                                                                                      !
                               X                                X
        +υ 3 zt g0                   g1i + g1t x0 + g2                   g1t−1−i zi
                               i=0                                 i=0
                   Ã       t−1                                t−1
                                                                                 !2
                           X                                  X
        −υ 4 g0                    g1i + g1t x0 + g2                g1t−1−i zi        µt (z0 , dz t ),
                           i=0                                i=0

or
                                               lim Mt + lim Nt ,
                                             t→∞               t→∞

where                                    (                Ã                             !)
                                                                   t−1
                                                                   X
                                     t
                       Mt = β              υ0 + υ 2 g0                   g1i + g1t x0        ,
                                                                   i=0

and

                       Z       "                    Ã        t−1
                                                                                !
                                                             X
     Nt = β t                   υ 1 zt + υ 2 g2                    g1t−1−i zi
                        Zt                                   i=0
                               Ã     t−1                                 t−1
                                                                                            !
                                     X                                   X
               +υ 3 zt g0                      g1i + g1t x0 + g2               g1t−1−i zi
                                         i=0                             i=0
                           Ã       t−1                               t−1
                                                                                      !2 
                                   X                                 X
               −υ 4 g0                    g1i + g1t x0 + g2                 g1t−1−i zi  µt (z0 , dz t )
                                   i=0                               i=0
                           Ã                       t−1                          t−1
                                                                                                     !
                                                   X                            X
        < β t A υ 1 + υ 2 g2                             g1t−1−i + υ 3 g0             g1i + g1t x0
                                                   i=0                          i=0
                               Ã           t−1
                                                              !
                                           X
               +β t B υ 3 g2                       g1t−1−i ,
                                             i=0

where A and B are the same constant used in Exercise 9.12, and the
last inequality comes from the fact that υ 4 > 0.
174             9 / Stochastic Dynamic Programming

      That limt→∞ Mt = 0 comes from the fact that 0 < g1 < 1, which
makes the sum converge.
      That limt→∞ Nt = 0 comes from β < 1, 0 < g1 < 1, and A, B,
υ 1 , υ 2 , and υ 3 are finite.


Exercise 9.15

    a.     We will prove that the stated condition holds for all indi-
cator functions of measurable sets, then all non-negative measurable
simple functions, and then all non-negative measurable functions.
    Let C = A × B ∈ S, and let f (x, z) = χA×B (x, z). Then
                   Z
                         χA×B (x0 , z 0 )P [(x, z), dx0 × dz 0 ]
                        X×Z
                  = P [(x, z), A × B]
                  = Q(z, B)χA [g(x, z)]
                    Z
                  =    χA [g(x, z)]χB (z 0 )Q(z, dz 0 )
                    ZZ
                  =    χA×B [g(x, z), z 0 ]Q(z, dz 0 ),
                        Z

hence the statement is true for indicator functions of measurable sets.
Clearly, the argument also holds if f is an indicator function for a
finite union of measurable rectangles. Let
                 ½          Z
          C =     C∈S:              f (x0 , z 0 )P [(x, z), dx0 × dz 0 ]
                             X×Z
                   Z                                              ¾
                                    0             0
                 =     f [g(x, z), z ]Q(z, dz ) for f = χC .
                        Z

We need to show that C is a monotone class; it will follow from the
Monotone Class Lemma that C = S.
    Let {Cn }∞
             n=1 be an increasing sequence in C, with C = ∪n=1 Cn .
                                                                          ∞

Then χCn is an increasing sequence of S-measurable functions con-
verging pointwise to χC ; hence by Theorem 7.4, χC is also S- mea-
surable. By hypothesis,
  Z                                              Z
        χCn (x0 , z 0 )P [(x, z), dx0 × dz 0 ] =   χCn [g(x, z), z 0 ]Q(z, dz 0 ),
   X×Z                                           Z
              9 / Stochastic Dynamic Programming                      175

for n = 1, 2, ...
    Hence, taking the limit as n → ∞ and applying the Monotone
Convergence Theorem to both sides, we find that
                  Z
                        χC (x0 , z 0 )P [(x, z), dx0 × dz 0 ]
                   X×Z
                       Z
                = lim        χ (x0 , z 0 )P [(x, z), dx0 × dz 0 ]
                  n→∞ X×Z Cn
                       Z
                = lim     χ [g(x, z), z 0 ]Q(z, dz 0 )
                  n→∞ Z Cn
                  Z
                =    χ[g(x, z), z 0 ]Q(z, dz 0 ),
                   Z

so C ∈ C. Similar argument applies if {Cn }∞ n=1 is a decreasing se-
quence.
    We can use the linearity of the integral to extend the result to
all measurable simple functions, and Theorem 7.5 and the Monotone
Convergence Theorem to establish the result for all measurable func-
tions.

   b.      The proof that a. holds also for f being P (s, ·)-integrable
comes from the fact that this requirement is suﬃcient for the integral
above to be well defined. Hence proceeding as in part a. for the
positive and negative parts of f we can complete the proof.


Exercise 9.16

    Define Pr(zt = i), i = 0, 1 as the unconditional probability of
zt = i. Conditioning on xt only, we don’t have any information about
past realizations of the zt process, so
                                   1
                                   X
            P (xt+1 ∈ A | xt ) =         χA [g(xt , i)] Pr(zt = i).
                                   i=0

Conditioning on xt and xt+1 , due to the specific functional form of
g(x, z), we can infer the value of zt−1 , and hence we can use that
176            9 / Stochastic Dynamic Programming

information to calculate the conditional probability, therefore
                                        1
                                        X
          P (xt+1 ∈ A | xt , xt−1 ) =         χA [g(xt , i)]Q(zt−1 , i).
                                        i=0

Hence, as long as Pr (zt = i) 6= Q (zt−1 , i) , we will have that

              P (xt+1 ∈ A | xt ) 6= P (xt+1 ∈ A | xt , xt−1 ) .

   As an example, let θ = 1/2 and A = [1/2, 1]. Also, assume xt =
1/2, xt−1 = 1. Therefore, zt−1 = 0, and

              Pr [xt+1 ∈ A | xt = 1/2] = Pr [zt ≥ 1/2]
                                              = Pr [zt = 1] .

On the other hand,

   Pr [xt+1 ∈ A | xt = 1/2, xt−1 = 1] = Pr [zt ≥ 1/2 | zt−1 = 0]
                                              = Q(0, 1)
                                              = 0.1.



Exercise 9.17

   a.       Define
                ©                                                 ª
        Ĥ(A) = (x, z, z 0 ) ∈ X × Z × Z : φ[x, g(x, z), z 0 ] ∈ A .

Then, H(x, z, A) is the (x, z)-section of Ĥ(A), and B ∩ H(x, z, A) is
the (x, z)-section of B ∩ Ĥ(A).
    First, we need to show that P is well defined. To do this, it
suﬃces to show that B ∩ H(x, z, A) ∈ Z, all (x, z) ∈ X × Z, all
B ∈ Z, and all A ∈ X . Since by hypothesis φ and g are measurable,
B ∩ Ĥ(A) ∈ X × Z × Z. As show in Theorem 7.14, any section of a
measurable set is measurable, so the desired result follows.
    Next, we must show that for each (x, z) = s ∈ S = X ×Z, P (s, ·)
is a probability measure on S = X × Z. Fix s. Clearly P (s, ∅) =
Q [z, ∅ ∩ H(x, z, ∅)] = 0, and P (s, S) = Q [z, Z ∩ H(x, z, X)] = 1.
                 9 / Stochastic Dynamic Programming                                177

Also, for any disjoint sequence {(B × A)i } in S, the sets Ci = Bi ∩
Ĥ (Ai ), i = 1, 2, ...in X × Z × Z are disjoint, and therefore their
(x, z)-sections are also disjoint. Then

          P [(x, z), ∪∞                       ∞
                      i=1 (B × A)i ] = Q[z, (∪i=1 Ci )(x,z) ]
                                         = Q[z, ∪∞
                                                 i=1 (Ci )(x,z) ]
                                           ∞
                                           X
                                         =    Q[z, Bi ∩ H(x, z, Ai )]
                                              i=1
                                              ∞
                                              X
                                         =           P [(x, z), (B × A)i ].
                                              i=1

Therefore P (s, ·) is countably additive.
    Finally, it must be shown that for each (B × A) ∈ S, P [·, (B × A)]
is a S-measurable function. Since for each (B × A) ∈ S, the set
C = B £∩ Ĥ(A) ¤is in X × Z × Z, it suﬃces to show that the func-
tion Q z, C(x,z) , as a function of s, is S-measurable for all C in
X × Z × Z. Let
        ©                                                       ª
     B= C ∈ X × Z × Z : Q[z, C(x,z) ] is (X × Z)-measurable .

By the Monotone Class Lemma (Lemma 7.15), it suﬃces to show
that B contains all finite unions of measurable rectangles and that B
is a monotone class.
    First, let C = A × B × D. Then
                            ½
                              Q(z, D) if (x, z) ∈ (A × B)
            Q[z, C(x,z) ] =
                              0        if (x, z) ∈
                                                 / (A × B).
                                       £         ¤
Since (A × B) is a measurable set, Q z, C(x,z) is a measurable (sim-
ple) function of (x, z) . Hence B contains all measurable rectangles.
The rest of the proof is a straightforward adaptation of the proof
of Theorem 8.9 to show that if E1 , ..., En are measurable rectangles,
then ∪ni=1 Ei ∈ B, and that B is a monotone class.

     b.       First, we need to show that
 Z                                               Z
          f (x0 , z 0 )P [(x, z), dx0 × dz 0 ] =   f [φ(x, g(x, z), z 0 )]Q(z, dz 0 ).
  X×Z                                            Z
178          9 / Stochastic Dynamic Programming

   We will prove that the stated condition holds for all indicator
functions of measurable sets, then all measurable simple functions,
and then all measurable functions.
   Let C = A×B ∈ S-measurable set, and let f (x, z) = χA×B (x, z).
Then
                  Z
                        χA×B (x0 , z 0 )P [(x, z), dx0 × dz 0 ]
                     X×Z
               = P [(x, z), A × B]
               = Q[z, B ∩ H(x, z, A)]
                 Z
               =    χH(x,z,A) (z 0 )χB (z 0 )Q(z, dz 0 )
                 ZZ
               =    χA [φ(x, g(x, z), z 0 )]χB (z 0 )Q(z, dz 0 )
                  Z
                 Z
               =    χA×B [φ(x, g(x, z), z 0 ), z 0 ]Q(z, dz 0 ),
                     Z

so the stated condition holds for indicator functions of S-measurable
sets. Clearly, it also holds if f is an indicator function for a finite
union of measurable rectangles. The proof parallels the one presented
in Exercise 9.15. Similarly, the linearity of the integral allows to
extend the result to all measurable simple functions. Theorem 7.5
and the Monotone Convergence Theorem then establish the result
for all measurable functions.
    Let MQ and MP be the Markov operators associated with Q
and P , respectively; and let f : S → R be any bounded continuous
functions. Then for any (x, z) = s ∈ S, it follows from the argument
above that
                            Z
            (MP f )(s) =            f (s0 )P (s, ds0 )
                            ZX×Z
                        =       f [φ(x, g(s), z 0 ), z 0 ]Q(z, dz 0 )
                               Z
                         = (MQ f )[φ(x, g(s)), z].

Hence, the desired result follows immediately from Lemma 9.50 (which
requires Assumptions 9.4, 9.5, 9.16 and 9.17) and the fact that g and
φ are continuous.
10 Applications of Stochastic
   Dynamic Programming

Exercise 10.1

   a.        Define
                             µt (z t ) = Πti=1 λ(zi ).


   Then, equation (1) can be rewritten as
                      ∞ Z
                      X
                sup              β t U [zt f (xt ) − xt+1 ] µ(dz t ),
                      t=0   Zt


subject to

                       0 ≤ xt+1 ≤ zt f (xt ), t = 0, 1, ...,
                      x0 ≥ 0 and z0 ≥ 0 given.

   The set of feasible plans is a sequence {xt }∞ t=0 of measurable
functions xt : Z t−1 → X such that 0 ≤ xt+1 ≤ zt f (xt ).

      b.     Assumption 9.4 is trivially satisfied since 0 ≤ xt+1 ≤
zt f (xt ) defines a convex Borel set in R given xt ∈ [0, x̄] and zt ∈ Z.
Assumptions Z1 and Z2 guarantee that Assumption 9.5 is satisfied
since Q(z, dz 0 ) = λ(dz 0 ) which does not depend on z. Define the
correspondence

              Γ(x, z) = {y : 0 ≤ y ≤ zf (x), y ∈ X, z ∈ Z},

                                                                        179
180 10 / Applications of Stochastic Dynamic Programming

then since f (x) ∈ Γ(x, z), Γ(x, z) is nonempty. Since

                   0 ≤ f (0) ≤ zf (x) ≤ z̄f (x̄) < ∞,

for x ∈ X and z ∈ Z, Γ(x, z) is compact-valued and since zf (x) is
continuous in x and z, Γ(x, z) is continuous. Hence assumption 9.6
is satisfied. Define

                       F (x, y, z) ≡ U [zf (x) − y] ,

then since f and U are continuous and X and Z are compact,
F (x, y, z) is bounded and continuous. This, together with U1, im-
plies that Assumption 9.7 is satisfied. Hence we can use Theorem
9.6 to show the first set of results.
    Theorem 9.2 establishes then that the optimum for the FE is the
optimum for the SP and that the plans generated by the FE attain
the supremum in the SP. Theorem 9.4 establishes that a solution
of the SP is also a solution for the FE. Notice that Exercise 9.6
establishes that Assumptions 9.4—9.7 imply Assumptions 9.1—9.3.

     c.    By U3 and T3, F (·, y, z) is strictly increasing and Γ(x, z)
is increasing in x. Hence Assumptions 9.8 and 9.9 are satisfied and
we can use Theorem 9.7 to show that υ(·, z) is strictly increasing.
     By U4 and T4 Assumptions 9.10 and 9.11 are satisfied (see Ex-
ercise 5.1) and so we can use Theorem 9.8 to prove the rest of the
results.

   d.       The FE for this problem can be written as

        υ̂(s) = υ(x, z)
                          ½                   Z                 ¾
                                                        0     0
             = max         U [zf (x) − y] + β     υ(y, z )λ(dz )
               0≤y≤zf (x)                       Z
                    ½                Z                      ¾
                                          £ 0      ¤      0
             = max U [s − y] + β        υ̂ z f (y) λ(dz ) ,
               0≤y≤s                    Z

where s = zf (y) and s0 = z 0 f (y).
    Hence the policy function g(x, z) only depends on the new state
variable s and so g(x, z) = h(s). Since g(x, z) is a continuous single
     10 / Applications of Stochastic Dynamic Programming 181

valued function so is h. To show that h is strictly increasing suppose
not. Then for x > x0 , s > s0 and h(s) < h(s0 ) and so by U4
                                       £           ¤
                   U 0 [s − h(s)] < U 0 s0 − h(s0 ) ,

which implies using the first-order condition that
           Z                          Z
                0        0     0
         β     υ (h(s), z )λ(dz ) < β   υ 0 (h(s0 ), z 0 )λ(dz 0 ).
               Z                            Z

A contradiction with υ concave in x. Hence h(s) is increasing in s
and by T4, g(x, z) is increasing in both arguments.
      Since υ(x, z) is strictly concave in x, for x > x0 , υ 0 (x, z) <
υ 0 (x0 , z), s > s0 and h(s) > h(s0 ), hence
                 Z                         Z
                      0       0     0
               β    υ (h(s), z )λ(dz ) < β    υ 0 (h(s0 ), z 0 )λ(dz 0 ).
               Z                            Z

which implies that
                                          £           ¤
                      U 0 [s − h(s)] < U 0 s0 − h(s0 ) ,

which implies by U4, that s−h(s) > s0 −h(s0 ), so c(x, z) is increasing
in s and so in x and z by T4.

    e.    Assumption 9.12 is satisfied by T5 and U5. Hence we can
use Theorem 9.10 to show that υ is diﬀerentiable at s with the given
derivatives since sx = zf 0 (x) and sz = f (x). Notice that we are using
Theorem 9.10 to prove diﬀerentiability with respect to s, and since
s is diﬀerentiable with respect to x and z, υ(x, z) is diﬀerentiable
with respect to both variables. Hence diﬀerentiability with respect
to z comes from the possibility of reducing the problem to one state
variable.

    f.     If we replace Z2 with Z3, Assumption 9.5 is still satisfied
so 10.1 a.—c. hold. The FE for this problem can be written as
                          ½                    Z                  ¾
                                                       0        0
    υ(x, z) =       max     U [zf (x) − y] + β   υ(y, z )Q(z, dz )
                   0≤y≤zf (x)                        Z
  with x, z ≥ 0 given.
182 10 / Applications of Stochastic Dynamic Programming

Notice that now the problem depends on z through the transition
function so that we cannot reduce the state variables to s only. Hence
g depends on both arguments independently. It is no longer guar-
anteed that g(x, z) is increasing in z since we are not assuming that
for z > z 0 ∈ Z, Q(z, A) > Q(z 0 , A) for all A ∈ Z. If Q does satisfy
this condition, we can prove that g(x, z) is increasing in z. Towards
a contradiction suppose that for z > ẑ, g(x, z) < g(x, ẑ). Then, by
U4,
              U 0 [zf (x) − g(x, z)] < U 0 [ẑf (x) − g(x, ẑ)] ,
which implies that
       Z                            Z
           0          0        0
         υ (g(x, z), z )Q(z, dz ) <   υ 0 (g(x, ẑ), z 0 )Q(ẑ, dz 0 ).
          Z                               Z

A contradiction with υ concave. Hence g(x, z) is increasing in z.
    Because of the new dependence of the FE on z in the transition
function we can only apply Theorem 9.10 to the diﬀerentiability with
respect to x.


Exercise 10.3

   a.     We need to prove that Γ is well defined and that it is
nonempty, compact-valued, and continuous.
   Define Γ as,

        Γ(x, z) = {y ∈ X : (c, y) ∈ Φ(x, z) for some c ∈ RM
                                                          + }.

The correspondence is well defined since for every pair (x, z) ∈ X ×Z,
it assigns feasible consumption vectors and capital values. Since by
assumption a. Φ is nonempty, compact-valued and continuous, Γ is
nonempty, compact-valued and continuous. Hence Assumption 9.6
is satisfied.
    The definition of A (the graph of Γ) is standard. In the definition
of F we are using the fact that the choice of the consumption basket
is a static problem. That is, we can maximize which basket of goods
to consume first and then attack the intertemporal problem. We
know β ∈ (0, 1) by assumption. Since U is a bounded and continuous
    10 / Applications of Stochastic Dynamic Programming 183

function and Φ(x, z) is compact-valued and continuous we can use the
Theorem of the Maximum (Theorem 3.6) to obtain that Assumption
9.7 is satisfied. To show that F is increasing in the first argument
notice that by Assumption b., for x ≤ x0 and z ∈ Z, Φ(x, z) ⊆
Φ(x0 , z). Hence since the possible choices are more restricted in the
first case and U is strictly increasing, for y ∈ X,

                           F (x, y, z) ≤ F (x0 , y, z),

hence Assumption 9.8 is satisfied.
    Assumption 9.9 is also satisfied because of Assumption b. Since
Φ(x, z) ⊆ Φ(x0 , z) for x ≤ x0 , and so for c ∈ RM                0
                                                 + , Γ(x, z) ⊆ Γ(x , z).
U strictly concave and Assumption c. imply Assumption 9.10, since
for x, x0 ∈ X and y, y 0 ∈ X

         F (θx + (1 − θ)x0 , θy + (1 − θ)y 0 , z)
         = maxc∈RM U (c)
                     +
              s.t. (c, θy + (1 − θ)y 0 ) ∈ Φ(θx + (1 − θ)x0 , z)
         ≥ maxc∈RM U (c)
                     +
              s.t. (c, y) ∈ Φ(x, z), (c, y0 ) ∈ Φ(x0 , z)
         > θF (x, y, z) + (1 − θ)F (x0 , y0 , z).

where the weak inequality comes from Assumption c. and the strict
inequality from U strictly concave. Assumption 9.11 is guaranteed
by Assumption c.

    b.     First notice that in this case we have shown that Γ(x, z)
is nonempty compact-valued and u.h.c. and this guarantees that it
has a measurable selection. Hence Assumption 9.1 is satisfied. Notice
also that F is bounded, and so Assumption 9.2 is also satisfied. Hence
we can use the Theorem 9.2 to show the result. The sketch of the
proof is as in the proof of this theorem.
    Let
         υ ∗ (x0 , z0 )          P∞ t R
         = max{ct ,xt+1 }∞                                 t        t
                             t=0   t=0 β Z t U (ct ) µ (z0 , dz )
               s.t. (ct , xPt+1 ) ∈ Φ(xR t , zt ) for all t, given    x0 , z0
                               ∞     t                         t (z , dz t )
         = max{xt }∞    t=1    t=0 β    Zt  F (x   , x
                                                  t t+1 t, z )µ    0
               s.t. xt+1 ∈ Γ(xt , zt ) for all t, given x0 , z0
184 10 / Applications of Stochastic Dynamic Programming

   Then
    £ ∗ for an arbitrary  ¤     £ plan π and the ¤    consumption plan γ ∗ such
that γ t (zt ), π t (z t ) ∈ Φ π t−1 (z t−1 ), zt and given x0 and z0 .
                                           Z
   υ(x0 , z0 ) ≥ F (x0 , π 0 , z0 ) + β         υ(π 0 , z1 )Q(z0 , dz1 )
                                             Z
                                           Z
                                                   £                 ¤
                 = F (x0 , π 0 , z0 ) + β       F x1 , π 1 (z 1 ), z1 Q(z0 , dz1 )
                              Z Z            Z
                            2
                                      £      1
                                                    ¤
                        +β          υ π 1 (z ), z2 Q(z0 , dz1 )Q(z1 , dz2 ),
                            Z   Z

and by Exercise 8.8 and using induction
                          ∞
                          X             Z
                                    t
        υ(x0 , z0 ) ≥           β               F (xt , π t (z t ), zt )µt (z0 , dz t )
                          t=0           Zt
                                                Z
                                            t
                          + lim β                    F (xt , π t (z t ), zt )µt (z0 , dz t ).
                             t→∞                Zt

Notice that the last term exists since Assumption 9.2 is satisfied and
it is positive. Hence υ(x0 , z0 ) ≥ υ ∗ (x0 , z0 ) which yields the result.


Exercise 10.4

    a.      Let µt (z0 , ·), z0 ∈ Z, t = 1, 2..., be as defined in section
8.2. Then a precise statement of (1) is given by
              P∞             −t
                                R                                      t        t
  sup{xt }∞
          t=1   t=0 (1 + r)      Z t [U (xt , zt ) − xt c(xt+1 /xt )] µ (z0 , dz ),
       s.t xt > 0 for all t = 1, 2, ...
       given (x0 , z0 ).

   We need to show that Assumptions 9.1 to 9.3 hold. Γ(x) =
R++ is trivially non empty, has a measurable graph, and let h(x)
= B ∈ R++ , then h(x) is a measurable selection. Let
                                                    y
                        F (x, y, z) = U (x, z) − xc( ).
                                                    x
Since U (·, z) is bounded and xc(y/x) is bounded from below, F (x, y, z)
is bounded from above. Hence Assumptions 9.2 and 9.3 are satis-
fied. This guarantees by Theorem 9.2 that the optimum for the FE
    10 / Applications of Stochastic Dynamic Programming 185

is an optimum for the SP, and that the value generated by the policy
function attains the supremum in the SP. By Theorem 9.4, we have
that a solution for (1) is also a solution for (2).

    b.     X = R++ satisfies Assumption 9.4. trivially. Assumption
9.6 is guaranteed since Q is assumed to have the Feller property.
Assumption 9.7 is guaranteed by the definition of Γ. Γ is nonempty
since (1 − δ)x ∈ Γ(x) all x, compact-valued since it is defined by
closed intervals and continuous since the functions that define the
boundaries of the intervals are continuous in x. Since U and c are
continuous functions, F is continuous, and by the reasoning above it
is bounded. Hence Assumption 9.6 is also satisfied and so existence
of a unique bounded and continuous function υ is guaranteed by
Theorem 9.6.
    To show that the function υ satisfying (2’) also satisfies (2) we
need to show that for any x ∈ X, the solution, y, to the maximization
problem in (2) is such that y ∈ Γ(x). Let M be such that for all
y ≥ M,
                                  y       A
                         A − M c( ) + < 0
                                 M        r
and for all x ≤ M ,
                                M       A
                         A − xc( ) + < 0.
                                 x       r
Let x > M , then y ≤ x, since otherwise the first part of the definition
of M implies that the value of the problem in (1) is negative given
x0 ≥ M which is clearly not the case. To see that the value in
problem (1) is not negative, choose for example a policy y = (1 − δ)x
and notice that this yields a positive value for the problem. Since
by part a. the optimal plans implied by the sequential and recursive
problems are the same, so y ≤ x. Let x ≤ M , then y < M by the
same argument but using the second part of the definition of M .
Hence, if the capital stock today is larger than M tomorrow’s capital
stock will be smaller than today’s capital stock, and if today’s capital
stock is smaller than M tomorrow’s capital stock will be smaller that
M as well.
    Since c(a) = 0 for all a ≤ (1 − δ), clearly y > (1 − δ)x. Hence
y ∈ Γ(x), which implies that the restriction added in (2’) is not
binding.
186 10 / Applications of Stochastic Dynamic Programming

    c.     υ strictly increasing in x. We need to show that Assump-
tions 9.8—9.9 hold. F strictly increasing in x comes from Ux (x, z) =
D(x, z) strictly increasing in x, and that
                    ∂xc( xy )     y    y y
                              = c( ) − c0 ( ) < 0,
                       ∂x         x    x x
by the strict convexity of c for y/x > 1 − δ and c(y/x) = 0 for
y/x ≤ 1 − δ. Hence Assumption 9.8 is satisfied.
    Since Γ(x) is defined by intervals with increasing functions of x
as boundaries, it is increasing in x in the sense of Assumption 9.9.
Hence we can use Theorem 9.7.
    To show that υ is strictly increasing in z we need to check that
Assumptions 9.13—9.15 hold. U is strictly increasing in z since D is,
and so F is strictly increasing in z. And the transition function Q is
monotone by assumption. Hence we can use Theorem 9.11 to prove
the result.
    To show that υ is strictly concave in x we need to show that
Assumptions 9.10 and 9.11 hold. The strict concavity of U together
with the strict convexity of c, imply that
                                   y 2 00 y
                    Fxx = Uxx −       c ( ) < 0,
                                   x3     x
                              1 00 y
                    Fyy   = − c ( ) < 0,
                              x x
                            y 00 y
                    Fyx   =    c ( ) > 0,
                            x2    x
and so
                               2      1    y
                  Fxx Fyy − Fxy  = − c00 ( )Uxx > 0,
                                     x x
(notice that for simplicity we are assuming that c is twice continu-
ously diﬀerentiable). Hence the characteristic roots are all negative
and so the Hessian is negative definite which yields Assumption 9.10.
     Assumption 9.11 is satisfied since Γ is defined by intervals with
boundaries that are linear functions of x. Hence we can use Theorem
9.8 to show that υ is strictly concave and also that the optimal policy
correspondence is single valued, call it g(x, z). Since c(1 − δ) = 0 and
c is continuously diﬀerentiable,
                             lim    c0 (h) = 0.
                          h→(1−δ)
    10 / Applications of Stochastic Dynamic Programming 187

And since υ(x, z) is increasing in x this implies that it is never optimal
to choose g(x, z) < (1 − δ)x. In part b) we showed that if x ∈ (0, M ],
g(x, y) < M, and if x ∈ (M, ∞], g(x, y) < x.
     To show that υ(·, z) is continuously diﬀerentiable we need to show
that Assumption 9.12 holds and use Theorem 9.10. The diﬀerentia-
bility of c and U, yield this result.

    d.      The first-order condition with respect to y is
                                  Z
                 0 y           −1
              −c ( ) + (1 + r)       υ0 (y, z 0 )Q(z, dz 0 ) = 0
                   x
     By contradiction, suppose g(x, z) is nonincreasing in x. Since υ
is strictly concave in x, for x < x0 ,
                         ·         ¸      ·           ¸
                           g(x, z)          g(x0 , z)
                      c0             < c0               ,
                             x                x0

and g(x, z) ≥ g(x0 , z), a contradiction since c is convex.
    We will prove that for x0 > x, g(x0 , z)/x0 < g(x, z)/x (notice that
g increasing and with slope less than one does not imply this). By
contradiction. Suppose that for x0 > x, g(x0 , z)/x0 ≥ g(x, z)/x. Then
convexity of c implies that
                         ·        ¸     ·    0    ¸
                        0 g(x, z)      0 g(x , z)
                      c             ≤c              ,
                             x              x0
but then
      Z                                     Z
              £            ¤                       £              ¤
           υ 0 g(x, z), z 0 Q(z, dz 0 ) ≤       υ 0 g(x0 , z), z 0 Q(z, dz 0 ).

Since g is increasing this contradicts that υ is concave in x.

    e.     The envelope condition of the problem is given by
                                            y   y y
                   υ x (x, z) = D(x, z) − c( ) + c0 ( ),
                                            x   x x

                                          R υx (x, z) is increasing in z
since D is increasing in z this implies that
and so by the monotonicity assumption υ 0 (y, z 0 )Q(z, dz 0 ) is nonde-
creasing in z. By contradiction. Assume g(x, z) is nonincreasing in
188 10 / Applications of Stochastic Dynamic Programming

z. Then by the first-order condition, for z ≤ z̄,
         ·        ¸                   Z
        0 g(x, z)                −1
                                             £             ¤
       c              = (1 + r)           υ 0 g(x, z), z 0 Q(z, dz 0 )
             x
                                      Z
                                 −1
                                             £             ¤
                      ≤ (1 + r)           υ 0 g(x, z̄), z 0 Q(z̄, dz 0 )
                            ·          ¸
                              g(x, z̄)
                      = c0               ,
                                x
a contradiction since c is convex. For y/x > 1 − δ, c is strictly convex
and so the proof holds with strict inequality.

    f.    In this case Q(z, ·) = µ(·), so the Bellman equation becomes
                    ·                              Z               ¸
                                   y            −1         0     0
  υ(x, z) = max U (x, z) − xc( ) + (1 + r)           υ(y, z )µ(dz ) .
             y∈Γ(x)                x
Since only the result in part e. was obtained using properties of
the transition function of z, everything holds except that the policy
function is a nondecreasing function of z. In this case, the first-order
condition of the Bellman equation above becomes,
             ·        ¸             Z
            0 g(x, z)            −1
                                         £            ¤
           c            = (1 + r)     υ x g(x, z), z 0 µ(dz 0 ).
                 x
And since neither side depends on z, ḡ(x) ≡ g(x, z) for all z ∈ Z.
   In part d. we showed that for x < x0 ,
                              ḡ(x0 )    ḡ(x)
                                  0
                                      <         .
                                x          x
Let x0 be such that ḡ(x0 ) ≤ x0 , then {xt }∞    t=0 is a monotone decreas-
ing sequence since ḡ(x) is strictly increasing. Hence by the result
of part d., {xt+1 /xt }∞
                       t=0 is a monotone increasing sequence with an
upper bound,
                                      ḡ(xt )
                                 1≥           .
                                        xt
So it converges. Conversely, if ḡ(x0 ) > x0 , then {xt }∞  t=0 is a monotone
increasing sequence and so {xt+1 /xt }∞      t=0   is a monotone    decreasing
sequence with a lower bound,
                                ḡ(xt )
                                        > 1 − δ.
                                  xt
    10 / Applications of Stochastic Dynamic Programming 189

Hence it converges. Notice that at both limits, say x̂,

                            ḡ [ḡ(x̂)]   ḡ(x̂)
                                        =        ,
                               ḡ(x̂)       x̂

and since ḡ(x)/x is a strictly decreasing function of x, this implies
that ḡ(x̂) = x̂. So both sequences converge to one and {xt }∞     t=0 con-
verges to a point x̂ independent of x0 .
    Combining the envelope and first-order conditions for this prob-
lem,
                                     ·      ¸          ·       ¸
                                       g(x)     g(x) 0 g(x)
            υx (x, z) = D(x, z) − c           +      c           ,
                                         x         x         x
            ·       ¸              Z
           0 g(x)               −1
                                          £        ¤
          c           = (1 + r)       υ x g(x), z 0 µ(dz 0 ),
                x

we obtain
                    ·         ¸
                        x
           (1 + r)c0 −1
                      g (x)
           Z ·              ·      ¸         ·     ¸¸
                      0       g(x)     g(x) 0 g(x)
         =     D(x, z ) − c          +     c          µ(dz 0 ).
                                x       x      x

Now suppose xt → 0, we know by the proof above that g(xt )/xt → 1,
and so since 0 is the lower bound for x,
                                   Z
                   c(1) + rc0 (1) ≥ D(0, z 0 )µ(dz 0 ).

Hence a suﬃcient condition to rule out x̄ = 0 is
                                Z
                c(1) + rc (1) < D(0, z 0 )µ(dz 0 ).
                         0




Exercise 10.7

    a.     By choice of yt the agent can, given a wage oﬀer, wt ,
decide to work for that wage or search. If he searches he will get
an oﬀer of zt+1 . If the agent works he either gets the current wage
190 10 / Applications of Stochastic Dynamic Programming

or loses his job (depending on the value of dt+1 ). Hence the law of
motion of the wage, wt+1 = φ(wt , yt , dt+1 , zt+1 ), is given by

                     wt+1 = dt+1 yt wt + (1 − yt )zt+1 .


    b.       The worker decision problem is

           υ ∗ (w0 ) =     sup {y0 U (w0 )
                         {yt }∞
                              t=0
                                    ∞
                                    X             Z
                                              t
                               +          β            yt U (wt ) µt (dz t × ddt )}
                                    t=1           Zt

         s.t. wt+1 = dt+1 yt wt + (1 − yt )zt+1, given w0 ,

where
                                          £                         ¤
          µt (dz t × ddt ) = Πtt=1 f (zt ) χ1∈ddt (1 − θ) + χ0∈ddt θ .

Notice that this problem depends only on w0. This is so, because
once the agent has an oﬀer at the beginning of the period, the pair
of shocks that generated that oﬀer is not important for the decision
making. That is, the wage oﬀer at the beginning of the period is the
only relevant state variable.

    c.       Define the operator T by

          T υ(w) = max {U (w) + β [(1 − θ) υ(w) + θυ(0)] ,
                         Z w̄                 ¾
                                 0     0    0
                       β      υ(w )f (w )dw .
                                    0

First notice that since w ∈ [0, w̄] , both parts of the right hand side are
bounded if υ is bounded so the operator maps the space of bounded
functions into itself. Since both parts are continuous, if υ is contin-
uous and since the maximum of continuous functions is continuous,
the operator maps continuous functions into continuous functions.
    We will use the Blackwell conditions to show first that υ(w) is
a contraction. For monotonicity just notice that for ψ(w) > υ(w),
    10 / Applications of Stochastic Dynamic Programming 191

T ψ(w) > T υ(w), since both choices increase. For discounting,

T [υ(w) + a] = max {U (w) + β [(1 − θ) (υ(w) + a) + θ(υ(0) + a)] ,
                     Z w̄                        ¾
                   β      (υ(w0 ) + a)f (w0 )dw0
                                        0
               = T υ(w) + βa.

Hence by the Contraction Mapping Theorem and Corollary 2, there
exist a unique, continuous and bounded function υ, that satisfies
T υ(w) = υ(w).
    We can rewrite the problem in part b. by noting that


        υ ∗ (w0 )
    =    sup {y0 U (w0 )
        {yt }∞
             t=0
                   ∞
                   X           Z
              +           βt            yt U (wt ) µt (dz t × ddt )}
                    t=1         Zt
              (
    = max U (w0 ) + sup [βy1 [(1 − θ)U (w0 ) + θU (0)]
                                    {yt }∞
                                         t=1
                          ∞
                          X                 Z
        +β(1 − θ)               β t−1             yt U (wt |w1 =w0 ) µt (dz t × ddt )
                          t=2                Zt
              ∞
              X                Z
                         t−1
        +βθ          β                  yt U (wt |w1 =0 ) µt (dz t × ddt )],
              t=2                  Zt
                     Z
         sup [β            y1 U (z1 ) f (dz1 )
        {yt }∞
             t=1      Z
             Z X
               ∞                    Z                                                   )
        +β                β t−1              yt U (wt |w1 =z1 ) µt (dz t × ddt )f (dz1 )] ,
               Z t=2                    Zt


which can be rearranged to get

                    max {U (w0 ) + β(1 − θ)υ ∗ (w0 ) + θυ ∗ (0),
                          Z                   ¾
                              ∗
                        β    υ (z1 )f (z1 )dz1 .
                                   Z
192 10 / Applications of Stochastic Dynamic Programming

Hence υ(w) = υ ∗ (w) for all w ∈ [0, w̄] . Alternatively, we could prove
that Assumptions 9.1—9.2 hold and use Theorem 9.2.
   Let w be such that

               υ(w) = U (w) + β [(1 − θ)υ (w) + θυ(0)] ,

then since U (w) is increasing in w,

                                U (w) + βθυ(0)
                       υ(w) =                  ,
                                 1 − β(1 − θ)

is also increasing in w. If
                                Z
                     υ(w) = β       υ(w0 )f (w0 )dw0 ,
                                Z

υ(w) is constant and hence υ(w) is weakly increasing.

    d.      First we will show that υ(0) = A.

                        υ(0) = max {βυ(0), A} ,

if υ(0) = βυ(0), then υ(0) = 0. If υ(0) = A, then υ(0) > 0. Hence
υ(0) = A.
    Since U (w) is strictly increasing and υ(w) is weakly increasing
by part c., U (w) + β(1 − θ)υ (w) + θυ(0) is strictly increasing in w.
Notice also that since υ(0) = A,

                              βυ(0) < A,

and that
                                             Z w̄
    U (w̄) + β [(1 − θ) υ(w̄) + θυ(0)] > β          υ(w0 )f (w0 )dw0 = A,
                                              0

since if not υ(w̄) = A a contradiction with β < 1. These conditions,
together with U and υ continuous, guarantee that there exists a
unique w∗ that satisfies

                 U (w∗ ) + β [(1 − θ) υ(w∗ ) + θA] = A.
    10 / Applications of Stochastic Dynamic Programming 193

    e.      If w < w∗ ,
                   U (w) + β [(1 − θ) υ(w) + θA] < A,
since the left-hand side is increasing in w and so υ(w) = A.
    If w ≥ w∗ ,
                   U (w) + β [(1 − θ) υ(w) + θA] ≥ A,
and so υ(w) = U (w) + β [(1 − θ) υ(w) + θA], hence the result.

    f.     From (2)
                               Z w̄
                        A=β           υ(w0 )f (w0 )dw0 ,
                                0

and substituting (4),
                                      Z w̄
                           ∗         U (w0 ) + βθA
          A = βAF (w ) + β                           f (w0 )dw0
                                 w ∗ 1 −  β (1 − θ)
                               2
                             β   θA(1  − F (w∗ ))
               = βAF (w∗ ) +
                                 1 − β (1 − θ)
                    Z w̄
                            U (w0 )
                 +β                     f (w0 )dw0 ,
                     w∗ 1 − β (1 − θ)

and rearranging terms we arrive to equation (5).

    g.     First notice that
                                             Z w̄
              0 = U (0) [1 + βθ] < β                U (w0 )f (w0 )dw0 .
                                              0

Also notice that
                                       Z w̄
           U (w̄) [1 + βθ − β] > β                U (w0 )f (w0 )dw0 = 0.
                                         w̄

Rewrite equation (6) as
                       Z w̄                               Z w∗
     ∗                           0     0    0          ∗
 U (w ) [1 + βθ] = β        U (w )f (w )dw + βU (w )           f (w0 )dw0
                        w∗                                 0
                       Z w̄
                 = β        (U (w0 ) − U (w∗ ))f (w0 )dw0 + βU (w∗ ),
                          w∗
194 10 / Applications of Stochastic Dynamic Programming

which implies that
                                    Z w̄
         U (w∗ ) [1 + βθ − β] = β          (U (w0 ) − U (w∗ ))f (w0 )dw0 .
                                     w∗

The left hand side is strictly increasing in w since U is strictly in-
creasing in w, and the right hand side is decreasing in w, since
         Z w̄                                       Z w̄
   ∂
     β          (U (w0 ) − U (w))f (w0 )dw0 = −β           U 0 (w)f (w0 )dw0 < 0.
  ∂w      w                                          w



   h.           Equation (5) can be rewritten as
                                    Z w̄
                ∗
         U (w ) [1 + βθ − β] = β           (U (w0 ) − U (w∗ ))f (w0 )dw0 ,
                                     w∗

as shown in part g), so
                     ·¸ Z w̄
                1∗
         U (w )   +θ−1 =     (U (w0 ) − U (w∗ ))f (w0 )dw0 .
                β        w∗

The left-hand side of the equation above decreases with β and the
right-hand side does not depend on β. Hence w∗ is increasing in β.
The intuition for this result is that if the agent is more patient, he is
ready to wait more for a good wage oﬀer. With an increase in θ, the
left hand-side increases, so w∗ , is decreasing in θ. Again the intuition
is that if it is more likely to lose one’s job, then the future expected
utility derived from a good oﬀer decreases.

    i.    If the change in the variance is given by a mean preserv-
ing spread in the wage distribution, the weight of the tail of the
distribution increases. Hence
                    Z w̄
                         (U (w0 ) − U (w∗ ))f (w0 )dw0
                         w∗

increases, and since this term is decreasing in w∗ , w∗ increases when
the variance increases. The result for expected utility is ambiguous.
    10 / Applications of Stochastic Dynamic Programming 195

Figure 10.4 shows that the function v is neither globally convex nor
concave, hence the term
                         Z w̄
                       β      υ(w0 )f (w0 )dw0
                             0

may increase or decrease with a mean preserving spread in the wage
distribution.


Exercise 10.8

    a.    To show that the diﬀerence equation is stable, use equation
(2) to obtain

     |λt+1 (Ac ) − λt (Ac )| = |θ + λt (Ac ) [µ(Ac ) − θ] − λt (Ac )|
                            = |µ(Ac ) − θ| |λt (Ac ) − λt−1 (Ac )| .

And since |µ(Ac ) − θ| < 1, the diﬀerence equation is stable.
   To find the limit, find the fixed point of (2). Denote the fixed
point λ̄(Ac ) = limt→∞ λt (Ac ). Then,

                  λ̄(Ac ) = θ + λ̄(Ac ) [1 − µ(A) − θ] ,

which implies that
                                          θ
                          λ̄(Ac ) =            .
                                      θ + µ(A)

   b.     If 0 ∈ C then P (w, C) = θ for all w ∈ A. Hence
                              Z
                λt+1 (C) =       P (w, C)λt (dw)
                                  W
                            = λt (Ac )µ(C) + λt (A)θ
                            = θ + λt (Ac ) [µ(C) − θ] .

   Taking limit of the equation above we obtain

                   λ̄(C) = θ + λ̄(Ac ) [µ(C) − θ]
                               θ [µ(C) − θ]
                         = θ+                ,
                                 θ + µ(A)
196 10 / Applications of Stochastic Dynamic Programming

which yields equation (4) after rearranging terms.
   If 0 ∈
        / C then P (w, C) = 0 for all w ∈ A, hence

                 λt+1 (C) = λt (Ac )µ(C) + λt (A)0
                              = λt (Ac )µ(C).

Again
                         λ̄(C) = λ̄(Ac )µ(C),
which implies that
                                        θµ(C)
                             λ̄(C) =            .
                                       θ + µ(A)

     c.     Take limits of

                λt+1 (C) = λt (Ac )µ(C) + λt (C)(1 − θ)

to obtain
                  λ̄(C) = λ̄(Ac )µ(C) + λ̄(C)(1 − θ),
so
                                         µ(C)
                             λ̄(C) =            .
                                       θ + µ(A)

    d.     The result in (3) gives the probability of obtaining an oﬀer
that is not accepted. Equation (4) gives the equilibrium probability
of staying unemployed searching or getting fired. Equation (5) gives
the probability of staying unemployed searching and equation (6) the
probability of staying employed. The average wage in this economy
is then                        Z
                                       µ(dw)
                         wa =     w           .
                                A    θ + µ(A)
Let h(n) be the probability of staying on average n periods unem-
ployed, then
                    Z      ·                     ¸
                              θµ(dw)      θµ(A) n
             h(n) =      n            +            .
                     Ac      θ + µ(A) θ + µ(A)


Exercise 10.10
     10 / Applications of Stochastic Dynamic Programming 197

   a.        Because of the specification of µ, we just need to check
that
                    Γ(n + 2)                  1
                                   = R1                  .
              Γ(k + 1)Γ(n + 1 − k)      uk (1 − u)n−k du
                                         0
     First notice that
                              Z ∞
                   Γ(n) =          tn−1 e−t dt
                               0
                                          Z ∞ n
                              tn −t ∞          t −t
                          =      e |0 +          e dt
                              n             0  n
                              Γ(n + 1)
                          =             .
                                  n
Hence, applying the result above repeatedly,

                        Γ(n + 2)           (n + 1)!
                                       =              .
                  Γ(k + 1)Γ(n + 1 − k)   (k)!(n − k)!
Using integration by parts repeatedly
       Z 1
                                    (1 − u)n−k+1 1
           uk (1 − u)n−k du = uk                  |
         0                             n+1−k 0
                                   Z 1
                                              (1 − u)n−k+1
                                +       kuk−1              du
                                     0          n+1−k
                                 k!(n − k)!
                             =              .
                                  (n + 1)!
So
                    Γ(n + 2)                 1
                                   = R1                 .
              Γ(k + 1)Γ(n + 1 − k)      u (1 − u)n−k du
                                         k
                                         0


     b.       We need to show that
              Γ(α + β + n)                    1
                               = R1                          .
          Γ(α + k)Γ(β + n − k)      uα+k−1 (1 − u)β+n−k−1 du
                                     0

Following the proof in a.,
              Γ(α + β + n)             (α + β + n − 1)!
                               =                              .
          Γ(α + k)Γ(β + n − k)   (α + k − 1)!(β + n − k − 1)!
198 10 / Applications of Stochastic Dynamic Programming

Also as in part a.,
   Z 1
                                  (α + k − 1)!(β + n − k − 1)!
       uα+k−1 (1 − u)β+n−k−1 du =                              ,
     0                                  (α + β + n − 1)!

using integration by parts.
11 Strong Convergence of
   Markov Processes

Exercise 11.1

    To show that the matrix Q takes the given form we will use the
fact that Q satisfies
                         Q = ΠQ = QΠ.
First notice that following the same block matrix notation as in the
text,
                                                                  
                  R00 w1 Q1    R00 w2 Q2               R00 wM QM
         0       +R01 Q1      +R02 Q2
                                                 ...
                                                       +R0M QM     
                                                                  
         0        R11 Q1          0         ...            0      
                                                                  
   ΠQ =  0           0         R22 Q2       ...            0      ,
                                                                  
         ..          ..           ..        ..             ..     
         .            .            .           .            .     
          0           0            0             ...    RMM QM

and
                                                        
             0 w1 Q1 R11 w2 Q2 R22         ... wM QM RMM
            0 Q1 R11        0             ...     0     
                                                        
            0     0      Q2 R22           ...     0     
      QΠ =                                              .
            ..    ..        ..            ..      .
                                                   .     
            .      .         .               .    .     
             0     0         0             ...         QM RMM

Since Ei is an ergodic set, Theorem 11.1 implies that there is only one
invariant distribution and hence all the rows of Qi are equal. Also,

                                                                       199
200      11 / Strong Convergence of Markov Processes

because each matrix Rii is a stochastic matrix and by the definition
of Qi , i = 1, ..., M , we know that Qi = Qi Rii . Hence QΠ = Q and
                                                                       
                  R00 w1 Q1          R00 w2 Q2              R00 wM QM
         0       +R01 Q1            +R02 Q2
                                                     ...
                                                            +R0M QM     
                                                                       
         0          Q1                  0           ...         0      
                                                                       
   ΠQ =  0           0                 Q2           ...         0      .
                                                                       
         ..          ..                 ..          ..          ..     
         .            .                  .             .         .     
          0            0                   0         ...          QM

We still need to show that there exists a set of matrices {wi }M
                                                               i=1 such
that
               R00 wi Qi + R0i Qi = wi Qi , i = 1, ..., M.
Notice that wi is a vector only if the transient set is a singleton. We
will use a guess and verify strategy to prove the existence of the set
of matrices {wi }M
                 i=1 . So guess that
                           Ã∞          !
                            X
                                  n
                 wi =            R00       R0i , i = 1, ..., M.
                           n=0

Substitute the guess in the equation above to get
      Ã∞        !          Ã∞                         !
        X                    X
              n                   n
            R00   R0i Qi =      R00 − Idim(F )×dim(F ) R0i Qi ,
        n=1                      n=0

but clearly
                 ∞
                 X             ∞
                               X
                        n             n
                       R00 =         R00 − Idim(F )×dim(F ) ,
                 n=1           n=0

which verifies the guess. One can obtain the same result for wi by
calculating Πn and then using induction.
    For the case when the transient set is a singleton, this implies
that
                                  1
                          wi =         R0i ,
                               1 + R00
since R00 < 1.
         11 / Strong Convergence of Markov Processes               201

   We will also show that
               M dim(E
               X   Xk )
                             wk,ji = 1, j = 1, ..., dim(F ).
               k=1    i=1

For this notice that since Q is a stochastic matrix,

                     M dim(E
                     X   Xk ) dim(E
                                Xk )
                                              wk,ji qk,i` = 1,
                     k=1    `=1         i=1

and that since all the columns of Qk are the same, qk,i` does not
depend on i. Hence, since Qk is a stochastic matrix,

                              dim(Ek )
                                  X
                                          qk,i` = 1,
                                  `=1

which yields the result.
    Notice that the elements of R00 n R give the probability of going
                                        0i
from one of the transient states in F to a state in Ei in n periods.
Hence each element in wi gives the probability of a transition, in any
period (summing the probability in all periods), from a specific state
in F to a specific state in Ei . Hence the sum of the rows in wi gives
the probability of an eventual transition from a specific state in F to
any set in Ei.


Exercise 11.2

   By Theorem 7.5 for any bounded and measurable function f :
S → R, there exists a sequence of simple functions fn such that

                     lim fn (x) = f (x) for all x ∈ S.
                  n→∞

Without loss of generally assume also that f ≥ 0 (f can be expressed
as the substraction of two positive valued functions), then fn can be
chosen such that 0 ≤ fn ≤ fn+1 ≤ f, all n. Also notice that for any
202      11 / Strong Convergence of Markov Processes

n, fn can be expressed as a sum of indicator functions. Let xni ∈ Ani ,
where {Ani } is a partition of S in n sets, be such that
                       n
                       X
           fn (x) ≡          f (xni )χAni , Ani ∈ S all i = 1, ..., n.
                       i=1

Hence,
                 Z                         Z
           lim        f dλn =        lim         lim fi dλn
          n→∞                       n→∞         i→∞
                                           Z           i
                                                       X
                               =     lim         lim         f (xij )χAi dλn
                                    n→∞         i→∞                   j
                                                       j=1
                                                  i
                                                  X
                               =     lim lim            f (xij )λn (Aij )
                                    n→∞ i→∞
                                                  j=1
                                           i
                                           X
                               =    lim          f (xij )λ(Aij )
                                    i→∞
                                           j=1
                                    Z
                               =        f dλ,

where the third line uses Theorem 7.10 (Lebesgue Dominated Con-
vergence Theorem) and the fourth line uses equation (1).


Exercise 11.3

    The definition of a vector space is given in Section 3.1. Since a
signed measure is a real valued function, properties a. through e.
are trivially satisfied for addition and scalar multiplication. To see
this, notice that if ν, ν̄ ∈ Φ(S, S), there exist a four-tuple of finite
measures such that

                     v(C) = λ1 (C) − λ2 (C), all C ∈ S,

and
                     v̄(C) = λ̄1 (C) − λ̄2 (C), all C ∈ S,
           11 / Strong Convergence of Markov Processes                   203

hence
                   £                ¤ £                ¤
     v(C) + v̄(C) = λ1 (C) + λ̄1 (C) − λ2 (C) + λ̄2 (C) , all C ∈ S,

and since λi + λ̄i , i = 1, 2, are finite measures, v + v̄ ∈ Φ(S, S). Also
notice that for any finite real number α, |α| λ1 and |α| λ2 are finite
measures. So for all α ∈ R,

           αv(C) = |α| λ1 (C) − |α| λ2 (C), all C ∈ S if α ≥ 0

or
           αv(C) = |α| λ2 (C) − |α| λ1 (C), all C ∈ S if α < 0.
Hence, αv(C) ∈ Φ(S, S) and so αv(C) is closed under scalar multi-
plication.
    For f. notice that v ∈ Φ(S, S) can be defined as

                  v(C) = λ(C) − λ(C) = 0, all C ∈ S.

where λ is a finite measure. Hence for any other signed measure
ν̄ ∈ Φ(S, S),
                      v(C) + ν̄(C) = ν̄(C),
all C ∈ S. For g. notice also that

                       0ν̄(C) = v(C), all C ∈ S.

      For part h. let λ1 and λ2 be two finite measures so

                  1λi (C) = λi (C), all C ∈ S, i = 1, 2

Then
             1v(C) = 1λ1 (C) − 1λ2 (C) = v(C), all C ∈ S.
   To show that (1) defines a norm, notice that kλk is trivially non-
negative for any λ ∈ Φ(S, S). Also notice that

                          k
                          X                           k
                                                      X
             kαλk = sup         |αλ(Ai )| = |α| sup         |λ(Ai )| ,
                          i=1                         i=1
204       11 / Strong Convergence of Markov Processes

since the absolute value is a norm in R. For the triangle inequality,
for λ, µ ∈ Φ(S, S),
                                k
                                X
            kλ + µk = sup             |λ(Ai ) + µ(Ai )|
                                i=1
                                Xk
                       ≤ sup          (|λ(Ai )| + |µ(Ai )|)
                                i=1
                                Xk                       k
                                                         X
                       ≤ sup          |λ(Ai )| + sup           |µ(Ai )|)
                                i=1                      i=1
                       = kλk + kµk ,
where we used the properties of the absolute value for the first in-
equality and the fact that the supremum of the sum is less or equal
than the sum of the supremums.

Exercise 11.4

    a.      Fix ε ∈ (0, 1) . Since S is a finite set, let ∞ > φ(si ) ≥ ε for
all si . Then
                               XN
                                  φ(si ) < ∞,
                               i=1
where N is the number of elements in the set. So in this case we can
assign enough mass to all states such that the restriction in Condition
D never applies.

    b.       Let M be such that
                                             
                                      M
                                      X
                         sup 1 −           pij  ≤ ε.
                           i          j=1

NoticePthat the number M exists for all ε ∈ (0, 1) since the partial
sums j pij converge uniformly in i. Let φ(si ) = 2ε for all i ≤ M
and φ(si ) = 0 for i > M. Then φ(S) = 2M ε. So if φ(A) ≤ ε,
                                       ∞
                                       X
                    P N (si , A) ≤            pij < 1 − ε,
                                     j=M+1
         11 / Strong Convergence of Markov Processes         205

for all N ≥ 1 and 0 < ε < 1/2.

   c.     Let φ(A) ≥ ε if s0 ∈ A and φ(A) = 0 if s0 ∈
                                                    / A. Then for
A such that s0 ∈
               / A,

                     P N (s, A) ≤ P N (s, S\{s0 })
                                = 1 − P N (s, {s0 })
                                < 1 − ε,

for some N and ε > 0.

    d.      If φ(A) ≤ ε, then

                           P N (s, A) ≤ φ(A)
                                        ≤ε
                                        < 1 − ε,

for 0 < ε < 1/2.

    e.     Let p(s, s0 ) > δ > 0 for all s, s0 ∈ S and
                                   Z
                             M≡       µ(ds).
                                    S

Then for all A such that µ(A) ≤ ε,
                             Z
                  P (s, A) =    p(s, s0 )µ(ds0 )
                              A
                                 Z
                           =1−        p(s, s0 )µ(ds0 )
                                  A c
                                   Z
                           ≤1−δ          µ(ds0 )
                                        Ac
                            ≤ 1 − δ(1 − ε)M
                            < 1 − ε,

for some ε such that
                                Mδ
                                     > ε.
                              1 + Mδ
206       11 / Strong Convergence of Markov Processes

   f.     Let p(s, s0 ) < δ for all s, s0 ∈ S. Then for all A such that
µ(A) ≤ ε,
                                       Z
                         P (s, A) ≤ δ      µ(ds0 )
                                         A
                                  ≤ δε
                                  < 1 − ε,
for some ε such that 1/ (1 + δ) > ε.

   g.     By assumption there exists an ε and a N such that for all
A with φ(A) ≤ ε, P1N (s, A) < 1 − ε. Define φ̂(A) = αφ(A). Then
φ(S) < ∞ and φ(A) ≤ ε implies that φ̂(A) ≤ αε ≡ ε̂. Hence for A
such that φ(A) ≤ ε,
                P (s, A) = αP1 (s, A) + (1 − α)P2 (s, A)
                         ≤ αP1 (s, A) + (1 − α)
                         ≤ 1 − ε̂ = 1 − αε.

    h.       The proof is by contradiction. Suppose there exists a
triplet (φ, N, ε), such that condition D is satisfied. Since
                                  ½
                       N             1 if si ∈ A
                     P (si , A) =                   ,
                                     0 otherwise
                                                          P
P N (si , A) > ε implies that φ(si ) > ² and so φ(S) = ∞     i=1 φ(si ) is
not finite.

    i.      By contradiction. Suppose P satisfies condition D, then
since                              ½
                                     1 if si+1 ∈ A
                    P N (si , A) =                  ,
                                     0 otherwise
                                                        P
P N (si , A) > ε implies that φ(si+1 ) > ε and so φ(S) = ∞i=1 φ(si ) is
not finite.

     j.    By contradiction. Let Ai = (1/2i , 1/2i−1 ], then P (si , Ai ) =
1 if si ∈ Ai−1 which implies that φ(Ai ) > ε all i. But then
                                             ∞
                                             X
                    φ(S) = φ(∪∞
                              i=1 Ai ) =           φ(Ai )
                                             i=1
          11 / Strong Convergence of Markov Processes              207

is not finite.


Exercise 11.5

    a.      Part c.: P N (s, {s0 }) > ε all s ∈ S. Since for all A ∈ S
either s0 ∈ A or s0 ∈ Ac , we have that P N (s, A) ≥ P N (s, {s0 }) ≥ ε
or P N (s, Ac ) ≥ P N (s, {s0 }) ≥ ε.
    Part e.: Let P (s, S) ≥ αµ(S). Notice that since either µ(A) ≥
(1/2)µ(S) or µ(Ac ) ≥ (1/2)µ(S), we have that either

                       P N (s, A) ≥ αµ(A) ≥ ε

or
                      P N (s, Ac ) ≥ αµ(Ac ) ≥ ε
for ε < (1/2)αµ(S).

   b.     Define φ(A) = sups P N (s, A), then φ(S) = 1 and φ(∅) = 0.
Then φ(A) ≤ ε implies that P N (s, A) ≤ ε and by Condition M we
have that P N (s, Ac ) ≥ ε, and so

                 P N (s, A) = 1 − P N (s, Ac ) ≤ 1 − ε.


    c.      P satisfies condition D as a corollary to Exercise 11.4 a.
To show that Condition M is not satisfied, let A = {s1 } . Then
P N (s2 , A) = 0 for all N , and P N (s1 , Ac ) = 0 for all N.
12 Weak Convergence of
   Markov Processes

Exercise 12.1
                   ©             ª
    a.      S, ∅ ∈ A ⊆ S : A ∈ Bl . If A ⊆ S and A ∈ Bl , this
implies                                    l         l
      © that S\A ⊆l ªS and sincec A, S ∈ B , S\A ∈ B . Hence
A ∈ A ⊆ S : A ∈ B implies A ∈ S, where the complement is
relative to S. Let An ⊆ S and An ∈ Bl for all n = 1, 2... then
  ∞ A ⊆ S and since A ∈ B l , U ∞ A ∈ B l . Hence U ∞ A ∈
Un=1
©      n         ª      n          n=1 n            n=1 n
  A ⊆ S : A ∈ Bl .

    b.       A is open relative to S if for all x ∈ A ∩ S there exists
an ε > 0 such that b(x, ε) ∩ S ⊆ A. Let A = A0 ∩ S for A0 ∈ Bl and
A0 open relative to Rl . Then A0 ∩ S ∈ Bl and since A0 is open, there
exist an ε > 0 such that b(x, ε) ⊆ A for all x ∈ A ⊂ A0 . But then
b(x, ε) ∩ S ⊆ A0 ∩ S. So A is open relative to S.

   c.       The interior of A relative to S is given by

        int(A) = {x ∈ A ∩ S : b(x, ε) ⊆ A ∩ S, for some ε > 0} .

We need to show that for all x ∈ int(A), there exists an ε such that
b(x, ε) ⊆ int(A) ∩ S. Notice that by definition int(A) ⊂ S and for
all x ∈ int(A) there exists an ε such that b(x, ε) ⊆ A ∩ S. Hence
b(x, ε/2) ⊆ int(A).

    d.    If A is open relative to x, for all x ∈ A ∩ S there exists an
ε such that b(x, ε) ⊆ A ∩ S. But this implies that for all x ∈ A ∩ S,
x ∈ int(A). Since int(A) ⊆ A, we know that int(A) ∩ S ⊆ A ∩ S and

208
         12 / Weak Convergence of Markov Processes                 209

so int(A) ∩ S = A ∩ S. Further notice that if A ⊆ S, this implies that
int(A) = A.


Exercise 12.2

   a.        First notice that

        ρ(x, A) = inf ρ(x, z) = ρ(x, x̄) for some x̄ ∈ A ⊆ S,
                     z∈A

and
         ρ(y, A) = inf ρ(y, z) = ρ(y, ȳ) for some ȳ ∈ A ⊆ S.
                     z∈A

Also notice that by definition

                             ρ(x, x̄) ≤ ρ(x, ȳ),

and
                             ρ(y, ȳ) ≤ ρ(y, x̄).
Hence since ρ is a metric we know that

                   ρ(x, x̄) ≤ ρ(x, ȳ) ≤ ρ(x, y) + ρ(y, ȳ)

and
                   ρ(y, ȳ) ≤ ρ(y, x̄) ≤ ρ(x, y) + ρ(x, x̄)
which yields the result.

   b.        Given any ε > 0 and any pair x, y ∈ S such that

                                 ρ(x, y) ≤ ε,

by part a.
                    |ρ(x, A) − ρ(y, A)| ≤ ρ(x, y) ≤ ε.
Hence ρ(·, A) is uniformly continuous.

   c.        Suppose x ∈ Ā, then there exists a sequence {xn }∞
                                                               n=1 such
that
                                 lim xn = x,
                                 n→∞
210       12 / Weak Convergence of Markov Processes

with xn ∈ A for all n. But this implies that

                               lim ρ(xn , x) = 0.
                              n→∞

Since ρ(·, A) is uniformly continuous by part b.,

                     lim ρ(xn , A) = ρ(x, A) = 0.
                    n→∞

    For the reverse, suppose x is such that ρ(x, A) = 0. Then, for
all ε > 0 there exists an xε ∈ A such that ρ(x, xε ) ≤ ε. Hence,
there exists a sequence {xn }∞
                             n=1 ∈ A such that ρ(x, xn ) ≤ 1/n all
n = 1, 2, ... and limn→∞ xn = x. So x ∈ Ā.


Exercise 12.3

     F is continuous at x if and only if for any sequence {xn }∞
                                                               n=1 such
that xn → x,
                           lim F (xn ) = F (x).
                          n→∞
     © ª∞           © ª∞
Let ε1n n=1 and ε2n n=1 be two sequences of real values such that
ε1n ↑ 0 and ε2n ↓ 0, and

                  x + ε1n 1 ≤ xn ≤ x + ε2n 1 for all n.
                          ˜                   ˜

Then, since F is nondecreasing,

            F (x + ε1n 1) ≤ F (xn ) ≤ F (x + ε2n 1) for all n.
                      ˜                              ˜

Taking limits this implies that

 F (x) = lim F (x + ε1n 1) ≤ lim F (xn ) ≤ lim F (x + ε2n 1) = F (x),
         n→∞              ˜      n→∞              n→∞            ˜

where the first and last equalities follow from F continuous from
above and below at x. Hence

                              lim F (xn ) = F (x),
                              n→∞

and so F is continuous.
          12 / Weak Convergence of Markov Processes              211

Exercise 12.4

   Take F closed, then λ̂n ⇒ λ̂ implies by Theorem 12.3 that

                       lim sup λ̂n (F ) ≤ λ̂(F ).
                            n→∞

Since F is closed, by Exercise 12.1 b. F ∩ S is closed relative to S.
By definition
                        λ̂n (F ) = λn (F ∩ S),
and
                           λ̂(F ) = λ(F ∩ S),
hence
                  lim sup λn (F ∩ S) ≤ λ(F ∩ S).
                      n→∞
So by Theorem 12.3 part b., λn ⇒ λ.
   If λn ⇒ λ this implies by Theorem 12.3 that

                       lim sup λn (F ) ≤ λ(F ),
                            n→∞

for some closed set F ∈ S. Since S ⊂ Rl , F ∈ Bl , which implies that
λ̂n (F ) = λn (F ) and λ̂(F ) = λ(F ). Hence

                       lim sup λ̂n (F ) ≤ λ̂(F ),
                            n→∞

which yields the result.


Exercise 12.5

   a.      For x ∈ S, [a, x] ∈ A so

                           Fn (x) = λn ([a, x]) .

Hence
                     Fn (x) → F (x) = λ ([a, x]) .
Define λ̂ as
                    λ̂(A) = λ(A ∩ S), all A ∈ Bl .
212      12 / Weak Convergence of Markov Processes

Then, since

                F̂n (x) ≡ λn ([a, min(x, b)]) = λ̂n ([a, x])

and
                 F̂ (x) ≡ λ([a, min(x, b)]) = λ̂([a, x]),
we know that
                             F̂n (x) → F̂ (x).
Theorem 12.8 then implies that λ̂n ⇒ λ̂ and by Exercise 12.4, λn ⇒
λ.

    b.       Construct a sequence of monotone and continuous func-
tions as follows. For any F = [a, c] , c ∈ [a, b] , let
                       ½
                         1 − nρ(s, F ) if ρ(s, F ) ≤ n1
              fn (s) =                                     ,
                              0           if ρ(s, F ) > n1

where ρ(s, F ) is defined in the proof of Lemma 12.1. Then
                          Z          Z
                λn (F ) ≡    fn dλ =    fn dµ ≡ µn (F ).
                            S           S

Notice also that since fn (s) → f (s) all s ∈ [a, b], by the Lebesgue
Dominated Convergence Theorem
                        Z           Z
                            fn dλ →    fdλ,
                            S            S

and so
                           lim λn (F ) = λ(F ),
                          n→∞
and
                           lim µn (F ) = µ(F ).
                          n→∞
Hence by part a., λn ⇒ λ and µn ⇒ µ, so λ = µ.


Exercise 12.6

    a.   In the proof of Theorem 12.9 the assumption of support
in a common compact set is used to prove that the function G and
          12 / Weak Convergence of Markov Processes               213

hence the function F satisfy condition D1 in Theorem 12.7. To see
that this is still the case under the weaker assumption proposed in
this exercise, first notice that
                            £    ¤
                    1 ≥ Fn b̄(ε) − Fn [a(ε)] > 1 − ε,

since Fn is a distribution function for all n. Hence
                            £    ¤
                     lim Fn b̄(ε) − Fn [a(ε)] = 1.
                    ε→0

Now if limε→0 b̄(ε) and limε→0 a(ε) are finite, then we are back into
the case proven in Theorem 12.9. Hence for this assumption to be
weaker either limε→0 b̄(ε) and or limε→0 a(ε) are not finite. Suppose
that limε→0 b̄(ε) is not finite but that limε→0 a(ε) is, then

                          lim Fn [a(ε)] = 0,
                          ε→0

and so                          £     ¤
                          lim Fn b̄(ε) = 1,
                          ε→0

all n. This implies that G satisfies condition D1. If limε→0 b̄(ε) is
finite but limε→0 a(ε) is not, the same type of reasoning applies. If
limε→0 b̄(ε) and or limε→0 a(ε) are not finite then limε→0 ai (ε) = −∞
for some i, and since Fn is a distribution function for every n,

                          lim Fn [a(ε)] = 0,
                          ε→0

all n. Hence                    £     ¤
                          lim Fn b̄(ε) = 1,
                          ε→0

and so G satisfies condition D1.

   b.     Fix ε, then since K is a compact set, there exists a pair of
points a(ε), b̄(ε) ∈ Rl such that
                                £         ¤
                           K ⊆ a(ε), b̄(ε) .

For all n define
                       Fn (x) ≡ λn ((−∞, x]).
214       12 / Weak Convergence of Markov Processes

Then                                £     ¤
                 1 − ε < λn (K) ≤ Fn b̄(ε) − Fn [a(ε)] .
So by part a. we know that there exists a subsequence {Fn } and
a distribution function F such that {Fn } converges weakly to F.
Corollary 1 of Theorem 12.9 then yields the desired result.

    c.     If S is a closed subset of R there exists a pair (s, s̄) ∈ S
such that S ⊆ [s, s̄] . Notice that s and or s̄ do not have to be finite.
If both s and s̄ are infinite then we are back to the case in part b).
If one of them is not finite, for example s then just let a(ε) = s for
all ε > 0. Since we did not restrict the function a(ε) in part b., this
implies that the proof in part b. applies.


Exercise 12.7

   b ⇒ a : Let sn → s. The continuity of f and P (sn , ·) ⇒ P (s, ·)
imply that
                                    Z
             lim (T f )(sn ) = lim      f (s0 )P (sn , ds0 )
            n→∞                n→∞ S
                               Z
                             =   f (s0 )P (s, ds0 )
                                           S
                                 = (T f )(s).


     a ⇒ c : By Theorem 8.3, hf, T ∗ λi = hT f, λi . Part a. implies that
T f (s) is continuous in s, and so
                   Z                   Z
                      T f (s)λn (ds) →   T f (s)λ(ds),
                    S                           S

if λn ⇒ λ. Hence T ∗ λn ⇒ T ∗ λ.

   c ⇒ b : Let                     ½
                                       1        if s ∈ A
                        λ(A) =                           ,
                                       0       otherwise
and                                ½
                                       1       if sn ∈ A
                        λn (A) =                         .
                                       0       otherwise
          12 / Weak Convergence of Markov Processes                         215

If sn → s, for any given continuous function f ,
                          Z
                             f dλn = f (sn ),
                                 S

and                              Z
                                         f dλ = f (s).
                                     S
Hence λn ⇒ λ . So by c., P (sn , A) = T ∗ λn (A) ⇒ T ∗ λ(A) = P (s, A).


Exercise 12.8

    a.     The transition function is given by
                             ½
                                1 if 1 − s ∈ A
                  P (s, A) =                    .
                                0     otherwise

To show that P has the Feller property notice that
                        Z 1
              T f (s) =     f (s0 )P (s, ds0 ) = f (1 − s),
                             0

hence if f is a continuous function T f is continuous.

    b.      Applying the operator T ∗ to δ s yields
                       Z 1
         T ∗ δ s (A) =     P (s0 , A)δ s (ds0 ) = P (s, A) = δ 1−s (A),
                        0

and applying the operator again yields

   T ∗2 δ s (A) = T ∗ (T ∗ δ s )(A) = T ∗ δ 1−s (A) = P (1 − s, A) = δ s (A).

Hence since the above holds for arbitrary A, T ∗2n−1 δ s = δ 1−s all n
and T ∗2n δ s = δ s all n, which implies that

                            lim T ∗2n−1 δ s = δ 1−s ,
                            n→∞

and
                              lim T ∗2n δ s = δ s .
                             n→∞
216       12 / Weak Convergence of Markov Processes

Since s 6= 1/2, and δ s 6= δ 1−s , none of the limits is an invariant
measure.

   c.     The invariant measures of the system are given by
                             Z 1
                      λa,f =     a(s)λf (s) ds,
                                 0

where
                                1     1
                          λs = δ s + δ 1−s ,
                                2     2
                            Z 1
                                a(s)ds = 1,
                             0
and f : [0, 1] → [0, 1]. To show this, notice that λa,f (S) = λs (S) = 1
and apply the operator T ∗ to λs to obtain,
                              1       1
                      T ∗ λs = δ 1−s + δ s = λs .
                              2       2
Hence               Z 1      ·               ¸
              ∗           1          1
            T λa =   a(s) δ 1−f (s) + δ f (s) ds = λa .
                   0      2          2
Notice that the invariant measures are symmetric, that is,

                     λa,f ({s}) = λa,f ({1 − s}) .



Exercise 12.9
                                                     R
    a.     Fµ (s) = µ((−− →
                          ∞, s]) = 1−µ([s, −
                                           →
                                           ∞)) = 1− S χ{[s,−∞)} (y)µ(dy).
                                                            →
And the result follows since the indicator function χ{[s,−∞)} (y) is an
                                                          →
increasing function so
             Z                      Z
                χ{[s,−
                     →
                     ∞)} (y)µ(dy) ≥    χ{[s,−
                                            ∞)} (y)λ(dy).
                                            →
              S                       S

Here the notation [s, −→
                       ∞) allows for s to be a vector and −
                                                          →
                                                          ∞ is a vector
with all its entries equal to ∞.
             12 / Weak Convergence of Markov Processes                    217

   b.        In R, Fµ (s) ≤ Fλ (s) all s ∈ S implies that

                       µ([s, ∞)) ≥ λ([s, ∞)) all s ∈ S.

Let f be an increasing and bounded function and let fn be a sequence
of increasing and bounded step functions such that

                          lim fn (s) = f (s) all s ∈ S.
                         n→∞

Then the inequality above implies that
           Z                Z
              fn (s)µ(ds) ≥   fn (s)λ(ds) all n = 1, 2....
                S                  S

So taking limits, by the Lebesgue Dominated Convergence Theorem,
                    Z               Z
                       f (s)µ(ds) ≥   f (s)λ(ds),
                         S                S

which yields the intended results since f is an arbitrary increasing
and bounded function.

   c.        Let s ∈ R2 , then Fµ (s) = Fλ (s) all s ∈ S implies that

                       µ([s, −
                             →
                             ∞)) = λ([s, −
                                         →
                                         ∞)) all s ∈ S.

          ∞)) = µx ([s1 , ∞)) and λ([s, −
Let µ([s, −
          →                               →
                                          ∞)) = λy ([s2 , ∞)) where si
denotes the ith coordinate of vector s. The the equality above implies
that
                     µx ([s1 , ∞)) = λy ([s2 , ∞)).
Let f (x, y) = 1 for x ≤ s̄1 and y ≤ s̄2 , s̄2 > 1, and f (x, y) = y
otherwise. Notice that f (x, y) is a weakly increasing function in
both arguments. Then since µx [(−∞, ∞)] = λy [(−∞, ∞)] = 1,
     Z s̄1 Z s̄2
                    f (x, y)µ(dx, dy) = µx [(−∞, s̄1 ]]
        −∞    −∞
                                       = λy [(−∞, s̄2 ]]
                                         Z s̄1 Z s̄2
                                       =             f (x, y)λ(dx, dy).
                                              −∞   −∞
218       12 / Weak Convergence of Markov Processes

Notice that
                   Z s̄1 Z s̄2
                                 yµ(dx, dy) = s̄2 µx ([s̄1 , ∞)),
                     −∞   −∞

and that
       Z s̄1 Z s̄2                     Z ∞
                      yλ(dx, dy) =             yλy [dy] > s̄2 λy ([s̄2 , ∞)).
          −∞   −∞                        s̄2

So             Z                               Z
                     f (x, y)µ(dx, dy) <            f (x, y)λ(dx, dy)
                S                               S
which violates µ ≥ λ.


Exercise 12.10

    Let {F1n }, {F2n }, F and {Gn } be the cdf’s of µ1n , µ1n , µ and λn .
If µin ⇒ µ, Fin ⇒ F pointwise at all continuity points of F (by
Theorem 12.8). If µ1n ≤ λn ≤ µ2n by Exercise 12.9 a.,

                          F1n (s) ≤ Gn (s) ≤ F2n (s).

Hence Gn → F at all continuity points of F , and so by Theorem 12.8
λn ⇒ µ.


Exercise 12.11

    a ⇒ b : µ ≥ λ implies, for all f increasing, that hT f, µi ≥
hT f, λi ,and so hf, T ∗ µi ≥ hf, T ∗ λi .

     b ⇒ c :.Let µ(A) = 1 if s ∈ A, and 0 otherwise, and let λ(A) = 1
if s0 ∈ A and 0 otherwise. If s > s0 , for all increasing function f ,
f (s) ≥ f (s0 ). So
                    Z                        Z
                                         0
                      f dµ = f (s) ≥ f (s ) = f dλ,

and T ∗ µ(A) ≥ T ∗ λ(A) and so P (s, A) ≥ P (s0 , A).
          12 / Weak Convergence of Markov Processes                   219

    c ⇐ a : Let s > s0 so that P (s, ·) > P (s0 , ·).Then for f increasing
                                Z
                      T f (s) = f (x)P (s, dx)
                                Z
                              ≥ f (x)P (s0 , dx)

                               = T f (s0 ).



Exercise 12.12

    In the solution of Exercise 12.8 we showed that

                           T ∗ δ a (A) = P (a, A)

for any Borel set A ⊆ [a, b] . First we will show by induction that
T ∗n δ a is a monotone increasing sequence. For n = 1, notice that for
any increasing function f , hf, δ a i = f (a) and since P is monotone
                       Z b                  Z b
              ∗
         hf, T δ a i =     f (s)P (a, ds) ≥     f (a)P (a, ds) = f (a),
                     a                        a

hence since f is an arbitrary increasing function δ a ≤ T ∗ δ a . For n + 1
assume that for any increasing function f ,
                                      ­             ®
                      hf, T ∗n δ a i ≥ f, T ∗n−1 δ a .

Notice that since P is monotone T f is also an increasing function.
Hence using Theorem 8.3,
    ­             ®                    ­               ®
     f, T ∗n+1 δ a = hT f, T ∗n δ a i ≥ T f, T ∗n−1 δ a = hf, T ∗n δ a i ,

and so T ∗n+1 δ a ≥ T ∗n δ a .
    The proof that T ∗n δ b is a decreasing sequence is analogous. Then
Corollary 1 and 2 of Theorem 12.9 (Helly’s Theorem) guarantee that
each sequence converges weakly. To show that each sequence con-
verges to an invariant measure notice that since T ∗n δ a converges,
                                                  N −1
                                       1 X ∗n
                   lim T ∗n δ a = lim        T δa.
                   n→∞             N→∞ N
                                         n=0
220       12 / Weak Convergence of Markov Processes

Hence since P has the Feller property, we can use the proof of The-
orem 12.10 to show that each sequence converges to an invariant
distribution.


Exercise 12.13

    a.      We first prove that P is monotone. For all s ≥ s0 and f
increasing, h(s) > h(s0 ) and H(s) > H(s0 ) implies that
                 Z                  Z
                    f (x)P (s, dx) ≥ f (x)P (s0 , dx),

and so P (s, ·) ≥ P (s0 , ·) by Exercise 12.11.
   To prove that P satisfies the Feller property, let f be a continuous
function. Then
                                             Z H(s)
                                     1
                  T f (s) =                         f dµ
                               µ(h(s), H(s)) h(s)
                                Z
                               1 H(s)
                            =          fdµ.
                               c h(s)

where
                           c = µ(h(s), H(s)).
Take a sequence sn ↑ s. Then
                                  ¯Z          ¯   ¯             ¯
                               1 ¯¯ h(s)      ¯ 1 ¯Z H(sn )     ¯
                                              ¯   ¯             ¯
        |T f (sn ) − T f (s)| ≤ ¯         f dµ¯ + ¯         f dµ¯ ,
                               c ¯ h(sn )     ¯ c ¯ H(s)        ¯

and the first and second term converge to 0 by the continuity of h
and H.

    b.     First we will show that E1 is an ergodic set. Let s1 be such
that for all s ∈ E1 , s1 ≤ s, and let s2 be such that for all s ∈ E1 ,
s2 ≥ s. Since h(s1 ) = s1 , H(s2 ) = s2 , H(s) > h(s) all s ∈ [a, b], and
from the figure s2 − s1 > H(s1 ) − h(s1 ) and s2 − s1 > H(s2 ) − h(s2 ).
We know that
                          [h(s1 ), H(s1 )] ⊂ E1
          12 / Weak Convergence of Markov Processes                        221

and
                           [h(s2 ), H(s2 )] ⊂ E1 .
So
               µ(E1 ∩ [h(s1 ), H(s1 )]) = µ([h(s1 ), H(s1 )])
and
              µ(E1 ∩ [h(s2 ), H(s2 )]) = µ([h(s2 ), H(s2 )]),
which implies that P (s1 , E1 ) = P (s2 , E1 ) = 1. In part a. we showed
that P was monotone and so by Exercise 12.11 for all s ∈ E1

                   P (s1 , E1 ) ≤ P (s, E1 ) ≤ P (s2 , E1 ).

   The proof that E2 is also an ergodic set is analogous. To show
that F is a transient set, notice that for all s such that

                      s2 < s < s2 + (H(s2 ) − h(s2 )),

P (s, F ) < 1 since

                 µ(F ∩ [h(s), H(s)]) < µ([h(s), H(s)]).

Let s3 be such that for all s ∈ E2 , s3 < s. Then, for all s such that

                      s3 − (H(s3 ) − h(s3 )) < s < s3 ,

P (s, F ) < 1. For all s such that

          s2 + (H(s2 ) − h(s2 )) < s < s3 − (H(s3 ) − h(s3 )),

notice that

  P n (s, [s2 , s2 + (H(s2 ) − h(s2 ))] ∪ [s3 − (H(s3 ) − h(s3 )), s3 ]) > 0,

for n suﬃciently large, since either H(s) 6= s or h(s) 6= s or both.
           0
Hence P n (s, F ) < 1 for s ∈ F and n0 > n, which implies that F is
transient.

   c.     It is not clear from the graph which points are a and b.
We will solve the question by letting a = s1 and b = s4 where s1 is
222       12 / Weak Convergence of Markov Processes

defined as in part b. and s4 is given by the number such that for all
s ∈ E2 , s4 ≥ s. Then a ∈ E1 which implies that for all n

                        T ∗n δ a (A) > 0 if A ∩ E1 6= ∅

and
                       T ∗n δ a (A) = 0 if A ∩ E1 = ∅.
Symmetrically b ∈ E2 implies that for all n

                        T ∗n δ b (A) > 0 if A ∩ E2 6= ∅

and
                       T ∗n δ b (A) = 0 if A ∩ E2 = ∅.
So the limit of {T ∗n δ a } assigns mass only to E1 and the limit of
{T ∗n δ a } assigns mass only to E2 . This implies that both limits are
diﬀerent since E1 ∩ E2 = ∅.


Exercise 12.14

    Since P is monotone and satisfies Assumption 12.1,

                      P N (s, [c, b]) ≥ P N (a, [c, b]) ≥ ε

for all s ∈ S, and

                     P N (s, [a, c]) = 1 − P N (s, [c, b])
                                     ≥ 1 − P N (b, [c, b])
                                     = P N (b, [a, c])
                                     ≥ ε,

for all s ∈ S.
13 Applications of Convergence
   Results for Markov Processes

Exercise 13.1

      a.       From equation (1), we obtain that

                  υ(x) = B1 [p + βυ(x − 1)] , x = 1, 2, ...,

where
                                       θ
                          B1 =                < 1.
                                 1 − (1 − θ)β
Hence
             £                                     ¤
  υ(x) = B1 p 1 + βB1 + β 2 B12 + ... + β x−1 B1x−1 + β x B1x υ(0)
                   ·                   ¸
           B1 p                 B1 p
       =          + υ(0) −               (βB1 )x .
         1 − βB1             1 − βB1

Let
                                     B1 p
                            B2 =           > 0,
                                   1 − βB1
then

           υ(0) = max {−c0 − c1 y + υ(y)}
                      y
                = max {−c0 − c1 y + B2 + (υ(0) − B2 ) (βB1 )y } .
                      y

Notice from the expression for υ(x) that we need υ(0) − B2 < 0 for
υ(x) to be a decreasing function of x.

                                                                    223
224     13 / Convergence Results for Markov Processes

   The gain from increasing the order size by one unit is given by

−c1 (y + 1) + (υ(0) − B2 ) (βB1 )y+1 − (−c1 y + (υ(0) − B2 ) (βB1 )y ),

which can be rearranged to give

                −c1 + (B2 − υ(0)) (1 − βB1 ) (βB1 )y .

Clearly 1 − βB1 > 0. We proceed under the guess that B2 − υ(0) > 0;
this will be verified below. Since βB1 < 1, the gain is decreasing in
y and the gain converges to −c1 as y goes to infinity. Hence, there
exists a finite optimal order size. It is given by the smallest S that
satisfies
                 (B2 − υ(0)) (1 − βB1 ) (βB1 )S+1 ≤ c1 .
   So υ(0) is implicitly defined by

           υ(0) = −c0 − c1 S + B2 + [υ(0) − B2 ] (βB1 )S ,

and we have found the value function and the optimal level of the
order S. We can rewrite this expression to get
                                     c0 + c1 S
                    B2 − υ(0) =                   > 0,
                                    1 − (βB1 )S

which verifies the guess that B2 − υ(0) > 0. Also notice that we
can substitute this expression in the condition that determines the
optimal order size, to get an expression that depends only on the
parameters of the model. The optimal order size is the smallest S
such that
                 (c0 + c1 S) (βB1 )S+1       c1
                                S
                                       ≤            .
                      1 − (βB1 )         1 − (βB1 )

    b.      The transition matrix is infinite, but the transition func-
tion is given by

                 P (i, i − 1)   =    θ,      for i ≥ 1,
                    P (i, i)    =    1 − θ, for i ≥ 1,
                 P (0, S − 1)   =    θ,
                   P (0, S)     =    1 − θ,
         13 / Convergence Results for Markov Processes                 225

and 0 otherwise. An ergodic set is {0, 1, 2, 3, ..., S} since once we are
in one of these states the probability of leaving the set is zero. All
other states are transient, and there are no cyclically moving subsets.

    c.       To guarantee that this process has a unique invariant dis-
tribution we will show that Condition M is satisfied. Define the state
space S as {0, 1, 2, 3, ..., S} . Since this is the ergodic set we know that
an invariant distribution will only assign positive probability to these
states. Since P N (s, S) > θs+1 > θS+1 > ε, for all s ∈ {0, 1, 2, 3, .., S}
and some ε > 0, the result in Exercise 11.5.a) holds and condition M
is satisfied. Theorem 11.12 then yields the results. To characterize
the invariant distribution use the transition matrix for the reduced
state space S.
                                                                 
         0  0   0   0                   .       .   .  0   θ  1−θ
        θ 1−θ  0   0                   .       .   .  0   0   0 
                                                                 
        0  θ  1−θ  0                   .       .   .  0   0   0 
                                                                 
        0  0   θ  1−θ                  .       .   .  0   0   0 
                                                                 
        .  .   .   .                   .       .   .  .   .   . 
PS×S = 
        .
                                                                  .
           .   .   .                   .       .   .  .   .   . 
        .  .   .   .                   .       .   .  .   .   . 
                                                                 
        0  0   0   0                   .       .   . 1−θ  0   0 
                                                                 
        0  0   0   0                   .       .   .  θ  1−θ  0 
         0  0   0   0                   .       .   .  0   θ  1−θ

Then the unique invariant distribution is given by the rows of
                                            0
                                P̄ = P P̄ ,
      P
where Si=0 p̄i = 1. Hence we need to solve a system of S linearly
independent equations in S unknowns. That is, we need to solve

               p̄0 = θp̄S−1 + (1 − θ)p̄S
               p̄i = θp̄i−1 + (1 − θ)p̄i for i = 1, ..., S.

Which implies that p̄0 = p̄i = p̄i−1 for i = 1...S. Hence p̄0 S = 1.
Therefore,
                            1
                      p̄i =   for i = 1, ..., S.
                            S
226     13 / Convergence Results for Markov Processes

Exercise 13.2

   a.      Let A = [a, a0 ] , where a ≥ s > 0, then the transition
function satisfies
              P (x, A)    =   µ ([x − a0 , x − a])   for x > s,
              P (x, A)    =   µ ([S − a0 , S − a])   for x ≤ s,
            P (x, {0})    =   µ([x, z̄])             for x > s,
            P (x, {0})    =   µ([S, z̄])             for x ≤ s.

    This defines a transition function, since P (x, X) = 1, and us-
ing the closed intervals, unions and complements we can calculate
P (x, A) for all A ∈ X .
    Define F (y; x) ≡ P (x, [y, max[0, x − z̄]), then
                 Z x            Z z̄         Z z̄
   F (y; x) =        µ(dz) +         µ(dz) =       µ(dz) = 1 − G(x − y)
                    x−y          x             x−y
     for x > s,
             Z z̄
  F (y; x) =      µ(dz) = 1 − G(S − y)
                    S−y
     for x ≤ s.
              Rx
where G(x) = 0 µ(dz). And notice that if {xn }∞n=1 is an increasing
sequence with xn ↑ s, and {x̄n }∞
                                n=1 is an decreasing sequence with
x̄n ↓ s,

F (y, xn ) = 1 − G(S − y) 6= 1 − G(s − y) ← 1 − G(x̄n − y) = F (y, x̄n ),

hence P does not have the Feller property by Exercise 12.7 b.

   b.       Since

             P (x, {0}) = µ([x, z̄]) for S ≥ x > s and
             P (x, {0}) = µ([S, z̄]) for x ≤ s,

if S < z̄, then µ([S, z̄]) > ε > 0 for some ε > 0. Hence P N (x, {0}) > ε
all x ∈ [0, S] and all N = 1, 2, .... If S ≥ z̄ there exists an x∗ such
that x∗ < z̄ and µ ([x∗ , z̄]) > 1 − α and µ ([0, S − x∗ ]) > α. Then

            P N (S, [0, S − x∗ ]) = (µ([x∗ , S]))N = (1 − α)N
         13 / Convergence Results for Markov Processes                  227

and so

         P N+1 (S, {0}) > αP N ((S, [0, S − x∗ ]) = α (1 − α)N .

For any N > 2, let ε < α (1 − α)N . Then P N+1 (S, {0}) > ε, which
yields the result.


Exercise 13.3

    a.-c.       The arguments to prove the first part of results in
this exercise are standard and very similar to the ones described in
Section 10.1, so we will not present them here. We will focus on
part d. and e. which guarantee the weak convergence to a unique
invariant distribution using Theorem 12.12.

    d.      Define P by

                    P (x, A) = µ (z : f [g(x)] z ∈ A) .

Let h(x) be an increasing function of x, then
             Z                     Z
                h(x0 )P (x, dx0 ) = h(f [g(x)] z 0 )µ(dz 0 )

and if x ≥ x̄ since g(x) is strictly increasing

                h(f [g(x)] z 0 ) > h(f [g(x̄)] z 0 ) all z 0 ∈ Z,

hence P is monotone.

    e.      We need to show that for some N ≥ 1 and δ > 0,

          P N (x̄, (0, x∗ )) ≥ P N (x̄, (φN (x, 1), φN (x̄, 1 + δ)]),

the result is then implied by equation 3b. Consider the sequence

               φ0 (x̄, 1) = x̄ > f (x̄) = f [g(x)] = φ1 (x̄, 1)

it follows by induction from the fact that f and g are nondecreasing
that this sequence is nonincreasing. Since it is bounded from below
228     13 / Convergence Results for Markov Processes

by 0, it converges to a value ϑ ∈ X. The continuity of f and g then
implies that ϑ = f [g(ϑ)] . Hence
                           Z
           U [c(ϑ)] = β U 0 [c(f [g(ϑ)]z)]f 0 [g(ϑ)]z 0 µ(dz 0 )
            0

                                  Z
                     = βf [g(ϑ)] U 0 [c(ϑz)]z 0 µ(dz 0 )
                            0

                                            Z
                     < βf 0 [g(ϑ)]U 0 [c(ϑ)] z 0 µ(dz 0 )

                    = βf 0 [g(ϑ)]U 0 [c(ϑ)]z ∗

where the inequality follows from the fact that z ∈ [1, z̄] and the
strict concavity of U. Hence 1 < βf 0 [g(ϑ)]z ∗ , which implies that
ϑ < x∗ . Choose N ≥ 1 such that φN (x̄, 1) < x∗ and δ > 0 such that
φN (x̄, 1 + δ) < x∗ . Then x∗ > φN (x̄, 1 + δ) > φN (x̄, 1) > 0, which
yields the result.


Exercise 13.5

   a.      Define

                    F (m, m0 ) = U (m + y − m0 ),

and
                         Γ(m) = [y, m + y] .
Assumptions 9.4 and Assumption 9.5 are trivially satisfied, since
X = R+ , and the shock to preferences is i.i.d. Assumption 9.6
and 9.7 are satisfied since y ∈ Γ(m) for all m ∈ X, Γ(m) is a closed
interval defined by continuous functions of m, and U is bounded and
continuous so F is too. Hence Theorem 9.6 yields the result.

    b.    Assumption 9.8 is satisfied since U is strictly increasing
and Assumption 9.9 too since the upper bound of Γ(m) is increasing
in m. Hence Theorem 9.7 implies that υ(·, z) is strictly increasing.
To show that υ(·, z) is strictly concave notice that we can not use
Theorem 9.8 since Assumption 9.10 is not satisfied. The linearity of
the resource constraint with respect to both today’s and tomorrow’s
        13 / Convergence Results for Markov Processes                            229

real balances creates this problem. We can, however, prove strict
concavity of υ(·, z) using the sequential problem and the principle of
optimality. Notice that since Assumptions 9.4—9.7 hold by part a.
the conditions of Theorems 9.2 and 9.4 are satisfied.
    The resource constraint in present value for the sequential prob-
lem is given by
                          X∞            ∞
                                        X
                             y + m0 ≥       ct ,
                              t=0              t=0

hence if m0 > m̄0 and {ct }∞                 ∞
                               t=0 and {c̄t }t=0 are the corresponding
optimal consumption sequences, it must be the       ª∞ that ct ≥ c̄t all
                                                 © case
t, with strict inequality for some t. Hence, if cθt t=0 is the optimal
consumption sequence associated with initial real money balances
θm0 + (1 − θ)m̄0 ,

           υ(θm0 + (1 − θ)m̄0 )
             "∞                #
              X
                  t    θ
         = E     β U (ct , zt )
                 t=0
               "∞                                    #
                X
         ≥ E           β t U (θct + (1 − θ)c̄t , zt )
                 t=0
               "∞                                               #
                X
         > E           β t [θU (ct , zt ) + (1 − θ)U (c̄t , zt )] ,
                 t=0
                "∞                    #                  "∞                  #
                 X                                        X
                          t                                      t
         = θE           β U (ct , zt ) + (1 − θ)E              β U (c̄t , zt )
                  t=0                                    t=0
         = θυ(m0 , z) + (1 − θ)υ(m̄0 , z),

where the weak inequality comes from the fact that θct +(1−θ)c̄t may
not be an optimal consumption sequence for θm0 + (1 − θ)m̄0 , the
strict inequality from the strict concavity of U and the fact that the
consumption sequences cannot be identical, and the second equality
from the linearity of the expectation.
    Assumption 9.12 holds because of the diﬀerentiability of U , hence
since we showed above that υ(·, z) is strictly concave, we can use
Theorem 9.10 to prove the diﬀerentiability of υ(·, z) in the interior
230       13 / Convergence Results for Markov Processes

of X. Hence for m ∈ intX and m0 ∈ intΓ(m),

                     υ 1 (m, z) = U1 (m + y − m0 ).

Now suppose m0 = y. Then
                                        Z
               υ(m, z) = U (m, z) + β       υ(y, z 0 )µ(dz 0 ),

so
                        υ 1 (m, z) = U1 (m, z).
Hence since both derivatives coincide, υ(·, z) is diﬀerentiable.

    c.      Since we have shown that υ(·, z) is strictly concave, and
since Γ(m) is convex, the Theorem of the Maximum implies that
g(m, z) is single-valued and continuous.

     d.   The first-order condition is given by
                          Z
U1 (m + y − g(m, z), z) ≥ υ1 (y, z 0 )µ(dz 0 ) with equality if m0 > y.

     Consider the problem without the cash-in-advance constraint,
                        ½                    Z               ¾
                                       0             0     0
     ῡ(m, z) = max0
                          U (m + y − m ) + β ῡ(y, z )µ(dz ) .
               0≤m ≤m+y

Using exactly the same arguments as in parts a.-c., there exists a
unique, continuous, increasing in x and diﬀerentiable function ῡ, that
solves the problem above. Furthermore, the corresponding policy
function ḡ(m, z) is single valued and continuous. We will show next
that ḡ(m, z) is strictly increasing in m. The first-order condition of
the unconstrained problem is given by
                                       Z
         U1 (m + y − ḡ(m, z), z) = β ῡ 1 (ḡ(m, z), z 0 )µ(dz 0 ).

Suppose that ḡ(m, z) is nonincreasing in m, then for m > m̂,

                          ḡ(m, z) ≤ ḡ(m̂, z),
         13 / Convergence Results for Markov Processes                231

and so by the concavity of ῡ,

                    ῡ 1 (ḡ(m, z), z 0 ) > ῡ 1 (ḡ(m̂, z), z 0 ).

Hence by the first-order condition and the concavity of U,

                  m + y − ḡ(m, z) < m̂ + y − ḡ(m̂, z),

which implies that ḡ(m, z) > ḡ(m̂, z). A contradiction. Hence is
strictly ḡ increasing in m.
    So
                       g(m, z) = max {ḡ(m, z), y} .
Let φ(z) be implicitly defined by

                                ḡ(φ(z), z) = y.

φ(z) is well defined since ḡ is a strictly increasing function in m, and
for some z H
                          £        ¤
  ḡ(0, z) < y for all z ∈ z H , z̄ and lim ḡ(m, z) > y for all z ∈ Z.
                                              m→∞

Notice that if we want z H =z, we need to assume that

                              lim U 0 (m, z) = ∞;
                             m→0

that is an Inada condition so that
                                Z
                   U (0, z) > β U 0 (y, z 0 )µ(dz 0 ).
                    0




   e.     By contradiction. Suppose m > m̂ and c(m, z) ≤ c(m̂, z).
Then by the strict concavity of U ,

               U1 (c(m, z), z) ≥ U1 (c(m̂, z), z) all z ∈ Z,

and so by the first-order condition ,
         Z                           Z
            υ 1 (g(m, z), z )µ(dz ) ≥ υ 1 (g(m̂, z), z 0 )µ(dz 0 ),
                           0     0
232      13 / Convergence Results for Markov Processes

a contradiction with g(m, z) increasing in m and υ concave.
    This implies that for m1 < m2 ,

               m1 + y − ḡ(m1 , z) < m2 + y − ḡ(m2 , z)

and so
                   ḡ(m2 , z) − ḡ(m2 , z) < m2 − m1 .


   f.     We need to show that there exists an m̄ such that
                              Z
                 U1 (y, z) = β υ 1 (m̄, z 0 )µ(dz 0 ).

Notice that by the concavity of υ the right-hand side is a decreasing
function of m̄, and that the left-hand side does not depend on m̄.
Also by concavity of υ and since υ ≤ B for all m ∈ X and z ∈ Z, for
some B big enough,

                   υ(0, z) ≤ υ(m, z) − υ1 (m, z)m.

Hence

          0 ≤ υ 1 (m, z)m ≤ υ(m, z) − υ(0, z) ≤ B − υ(0, z),

and so
                          lim υ 1 (m, z) → 0.
                          m↑∞

Notice also that
                                    Z
                    U1 (y, z) < β       υ 1 (y, z 0 )µ(dz 0 )

since if not g(m, z) = y all m ∈ X and z ∈ Z. Hence m̄ is well defined
and it exists.

    g.     By the first-order condition, since U is an increasing func-
tion of z we know that by the envelope condition
                       Z                     Z
         U1 (y, z̄) > β υ 1 (y, z )µ(dz ) = β U1 (y, z 0 )µ(dz 0 ),
                                 0     0
        13 / Convergence Results for Markov Processes                      233

hence for m ≤ y, g(m, z̄) = y.

    h.     By contradiction. Suppose c is decreasing in z. Then for
z > z̄, c(m, z) < c(m, z̄) ≤ m and so g(m, z) > g(m, z̄). Then since
U is concave,
            U1 (c(m, z), z) > U1 (c(m, z̄), z̄)
                               Z
                            ≥ β υ 1 (g(m, z̄), z 0 )µ(dz 0 )
                               Z
                            > β υ 1 (g(m, z), z 0 )µ(dz 0 )
                                = U1 (c(m, z)).
Hence c is weakly increasing in z and so g is weakly decreasing.

   i.    The transition function P is given by
                              Z
                P (m, A) =       1{g−1 (m,A)} µ(dz 0 )
                               = µ [{z : g(m, z) ∈ A}]
for all A ∈ X .
    First we will prove that P has the Feller property. Since g(m, z)
is continuous, for any bounded and continuous function f ,
                  Z                       Z
        T f (m) =    f (m0 )P (m, dm0 ) =   f (g(m, z 0 ))µ(dz 0 ),
                     X                             Z
which is continuous by the Lebesgue Dominated Convergence Theo-
rem (see the proof of Theorem 9.14 for an alternative proof).
    Take f to be increasing, then since g is increasing in m, for m >
m̂,         Z                       Z
                 f (g(m, z 0 ))µ(dz 0 ) >       f (g(m̂, z 0 ))µ(dz 0 ).
             Z                              Z
So the transition function P is monotone since T f (m) > T f (m̂).,
    Before showing that Assumption 12.1 holds, notice that for m <
φ(x) and ẑ = φ−1 (y) < z̄,
                   P (m, y) = µ [{z : g(m, z) = y}]
                               = µ [{z : φ(z) > m}]
                               ≥ α(z̄ − ẑ)
234      13 / Convergence Results for Markov Processes

for some α > 0. For m ≥ φ(z̄),
           P (m, [0, φ(z̄))) = µ [{z : g(m, z) ∈ [0, φ(z̄))}]
                             ≥ α(z̄ − ẑ).
Hence if we let ε > (α(z̄ − ẑ))2 we showed that Condition M is sat-
isfied by Exercise 11.5 a., so we can use Theorem 11.12 to guarantee
the strong convergence to a unique invariant distribution.
     Assumption 12.1 is satisfied, since for m < φ(z̄),


             P (m, [φ(z̄), m̄)) > P (φ(z̄), [φ(z̄), m̄))
                                 ≥ α(g −1 (φ(z̄), φ(z̄)), z),
where g −1 (φ(z̄), φ(z̄))) > z since g(m̄,z) = m̄. Hence let
                          £                                 ¤
               ε > max α(z̄ − ẑ), α(g −1 (φ(z̄), φ(z̄)), z)
which yields Assumption 12.1 with φ(z̄) as the middle point.

    j.  Define f by f (m) = m. Then
    Z Z                         Z Z
                     ∗
        g(m, z)µ(dz)λ (dm) =        f (m0 )P (m, dm0 )λ∗ (dm)
                                  = hT f, λ∗ i
                                  = hf, T ∗ λ∗ i
                                                   M
                                  = hf, λ∗ i =       .
                                                   p


Exercise 13.7

    a.     The first-order condition of the problem is given by
                        Z
              −qz + β υ 1 (w0 , z 0 )µ(dz 0 ) + θ − λ = 0,

where θ ≥ 0 is the Lagrange multiplier associated with the constraint
0 ≤ w0 so θw0 = 0 and λ ≥ 0 is the multiplier corresponding to the
constraint
                                     y
                          w0 ≤ (1 + )w,
                                     q
          13 / Convergence Results for Markov Processes              235

so
                             y
                       λ((1 + )w − w0 ) = 0.
                             q
The envelope condition (for an interior solution) is given by

                         υ1 (w, z) = (y + q).

Notice that θ > 0 and λ > 0 is not a possible case, hence we need to
take into consideration only the cases θ > 0, λ = 0 and θ = 0, λ > 0,
plus θ = λ = 0.
    Suppose the first case, θ > 0, λ = 0, then
                        Z
                      β υ 1 (w0 , z 0 )µ(dz 0 ) < qz,

                                                          R
and therefore substituting the envelope and letting A ≡       µ(dz 0 ), we
obtain that
                             βA(y + q)
                         ζ≡             < z.
                                 q
Hence, if z satisfies the condition above, w0 = 0.
   In the second case, θ = 0, λ > 0, we obtain that
                         Z
                       β υ 1 (w0 , z 0 )µ(dz 0 ) > qz,

then
                              βA(y + q)
                         ζ=             > z,
                                 q
and w0 = (1 + yq )w.
   If θ = λ = 0 we have that ζ = z, and w0 can take any value. For
example, we can let w0 = 0 to obtain the result in the book.

     b.    The transition function for this problem is given by
                          ¡©                ª¢
            P (w, w0 ) = µ z : g(w, z) = w0
                                        0
                          µ([ζ, 1]) if w = 0
                       =   µ([0, ζ]) if w0 = (1 + yq )w
                         
                           0         otherwise.
236     13 / Convergence Results for Markov Processes

We will first show that one of the assumptions in Theorem 12.12 is not
satisfied. This, of course, only proves that the suﬃcient conditions
in the theorem are not satisfied. However there could still exist an
invariant distribution.
    Let wn ↓ 0, and let w0 = 0, then

                 P (wn , w0 ) = µ([ζ, 1]) all n = 1, 2, ...

so
                       lim P ((wn , w0 ) = µ([ζ, 1]),
                       n→∞
but
                               P (0, 0) = 1.
Hence by Exercise 12.7 P does not have the Feller property.
   Define δ ≡ µ ([ζ, 1]). The evolution of the distribution is given
by
                                 £                                 ¤
   Ψt (0) = Ψ0 (0) + (1 − Ψ0 (0)) δ + (1 − δ) δ + ... + (1 − δ)t δ

and                                  µ                     ¶
                                     t             w
             Ψt ((0, w]) = (1 − δ) Ψ0 (0,                 ] .
                                                1 + yq −1
In particular, lim Ψt (0) = 1 and lim Ψt ((0, w]) = 0 all w. The
                t→∞                  t→∞
obvious candidate for the stationary distribution is a distribution
with all the mass concentrated at 0, Ψ∗ ({0}) = 1, zero for any set
not containing 0. To see this is a limiting distribution
                                                      R we areRgoing
to check condition a. in Theorem 12.3 (i.e., limn→∞ fdλn = fdλ,
all f ∈ C (S)).
      Z                                  Z
         f (w)Ψt (dw) = f (0) Ψt (0) +             f (w) Ψt (dw)
                                           w∈(0,∞)
                                               Z
                       ≤ f (0) Ψt (0) + kf k           Ψt (dw)
                                                    w∈(0,∞)
                         = f (0) Ψt (0) + kf k Ψt ((0, ∞))

So,              Z                             Z
           lim       f (w)Ψt (dw) ≤ f (0) =        f (w)Ψ∗ (dw)
           t→∞
        13 / Convergence Results for Markov Processes              237

We get the other inequality if we use − kf k instead of kf k.
     So the Markov process defined by the policy function
                                                       © g together
                                                              ª
with µ has an invariant measure (i.e., the sequence T ∗t Ψ0 con-
verge weakly to an invariant measure). But notice that the sequence
converges weakly to an invariant measure Ψ∗ that does not satisfy
(1).

   c.       By induction, (you can check it works for t = 1) if
                          Z
                            wΨt−1 (dw) = 1,

then
        Z                   Z
                 ¡   ¢          ¡     ¢
            w0 Ψt dw0 =      1 + yq −1 wµ ([0, ζ]) Ψt−1 (dw)
                                               Z
                          ¡        ¢
                        = 1 + yq −1 µ ([0, ζ]) wΨt−1 (dw)
                                               |    {z     }
                                                    =1
                          ¡        ¢
                        = 1 + yq −1 µ ([0, ζ]) .

So a necessary condition for an equilibrium is
                      ¡         ¢
                       1 + yq −1 µ ([0, ζ]) = 1.

In addition, we can use the constant returns to scale results developed
in Section 9.3 to write

                           υ(w, z) = wυ̂(z).

The two equations above, together with the equation that determines
ζ, imply that               Z
                                 ¡ ¢ ¡ ¢
                     qζ = β v̄1 z 0 µ dz 0 .

This expression characterizes the equilibrium price. The implicit
function theorem can be used to analyze how q depends on β, etc.


Exercise 13.8
238      13 / Convergence Results for Markov Processes

   a.     Let θ > 0 and define the operator T by
                  ½                 ½    Z                ¾¾
                                                 0      0
  T υ(x, z) = max θ, f (x, z) + min θ, β υ(x, z )Q(z, dz )   .

First we will prove that T : C(X × Z) → C(X × Z). For this notice
that f (x, z) ≤ f (0, z) for all x ∈ X and z ∈ Z. Hence for υ ∈
C(X × Z),

            T υ(x, z) ≤ max {θ, f (0, z̄) + min {θ, βB}} ,

where B satisfies υ(x, z) ≤ B for all x ∈ X and z ∈ Z. Hence T υ(x, z)
is bounded. And since Q has the Feller property if υ is continuous
so will be T υ by Theorem 12.14.
    Next we will show that T is a contraction, for this we will use
Blackwell suﬃcient conditions. For monotonicity notice that if

                          η(x, z) ≥ υ(x, z)

for all x ∈ X and z ∈ Z,
  Z                      Z
β η(x, z )Q(z, dz ) ≥ β υ(x, z 0 )Q(z, dz 0 ) for all x ∈ X and z ∈ Z,
           0       0



which implies that
                        T η(x, z) ≥ T υ(x, z).
For discounting notice that

        T (υ(x, z) + a)
             ½              ½    Z                       ¾¾
                                           0           0
      = max θ, f(x, z) + min θ, β (υ(x, z ) + a)Q(z, dz )
             ½              ½    Z                 ¾¾
                                         0       0
      ≤ max θ, f(x, z) + min θ, β υ(x, z )Q(z, dz )    + βa.

Hence by the Contraction Mapping theorem there exists a unique
continuous and bounded function υ such that
                ½                 ½    Z                 ¾¾
                                              0        0
   υ(x, z) = max θ, f (x, z) + min θ, β υ(x, z )Q(z, dz )   .
        13 / Convergence Results for Markov Processes               239

By the argument above, we know that
                 ½                    ½ Z                ¾¾
                                               0       0
  υ(x, z) ≤ max θ, f (0, z̄) + min θ, β υ(x, z )Q(z, dz )
                 ½                  Z              ¾
                                        0        0
          ≤ max θ, f (0, z̄) + β υ(x, z )Q(z, dz )
                 ½              ¾
                      f (0, z̄)
          ≤ max θ,                .
                       1−β
    Since f is decreasing in x, the operator T maps strictly decreasing
into nonincreasing functions of x, since only one of the two terms in
the maximum decreases if x increases. Hence, by Corollary 2 of the
Contraction Mapping Theorem υ(x, ·) is nonincreasing in x. Since f
is strictly increasing in z and since Q is monotone, by the same ar-
gument, T maps strictly increasing functions of z into nondecreasing
functions and so υ is nondecreasing in z.

    b.     First notice that if g(x, z) solves (5a), it does not depend
on x. So denote ḡ(z) ≡ g(x, z). Where ḡ(z) = 0 if there is no positive
number such that (5a) is satisfied with equality. Similarly, if g(x, z)
solves (5c), let g(z) ≡ g(x, z), where again we choose a notation that
emphasizes that g(x, z) does not depend on x in this case. Combining
(5a) and (5c) we obtain,
     Z                                        Z
   β υ(g(z), z )Q(z, dz ) ≥ f (ḡ(z), z) + β υ(ḡ(z), z 0 )Q(z, dz 0 ).
                  0       0


By part a, υ is nonincreasing in x as well as f . Hence the above in-
equality implies that g(z) ≥ g(z). Since the inequalities (2a-c) divide
all of X, for any x ∈ X, g(x, z) is either constant at ḡ(z) or g(z), or
g(x, z) = x. Hence g(x, z) is nondecreasing in x.
     To show that g(x, z) in nondecreasing in z first we will show that
ḡ(z) and g(z) are nondecreasing. Towards a contradiction suppose
that z > ẑ and ḡ(z) < ḡ(ẑ). Then by (5a) and part a together with
the monotonicity assumption on Q,
                                   Z
           θ ≥ f (ḡ(z), z) + β υ(ḡ(z), z 0 )Q(z, dz 0 )
                                   Z
               > f (ḡ(ẑ), ẑ) + β υ(ḡ(ẑ), z 0 )Q(ẑ, dz 0 ) = θ.
240      13 / Convergence Results for Markov Processes

     Again towards a contradiction assume that z > ẑ and g(z) <
g(ẑ). Then
                        Z
                θ = β υ(g(z), z 0 )Q(z, dz 0 )
                        Z
                   > β υ(g(ẑ), z 0 )Q(ẑ, dz 0 ) = θ.

    Since either g(x, z) is increasing in z as shown above or g(x, z) =
x, g(x, z) is nondecreasing in z.
    Let x > x0 , then for any z ∈ Z,
                          
                                    0        if x > x0 > ḡ(z) > g(z),
                          
                          
                                         0                    0
                          
                          
                            ¯ |ḡ(z) − x | ¯ if x > ḡ(z) > x > g(z),
  ¯                   ¯      ¯ḡ(z) − g(z)¯ if x > ḡ(z) > g(z) > x0 ,
  ¯g(x, z) − g(x0 , z)¯ =                                                ,
                                        0     if ḡ(z) > x > x0 > g(z),
                          
                              ¯ |x − x | ¯
                          
                              ¯x − g(z)¯
                          
                                             if ḡ(z) > x > g(z) > x0 ,
                          
                                     0        if ḡ(z) > g(z) > x > x0 .
which implies the result.

    c.     Since by part a, υ and f are continuous in X ×Z and Q has
the Feller property, both ḡ(z) and g(z) are continuous in z. Because
of the same conditions, the boundaries of the sets in which (2a) and
(2c) hold are continuous in X × Z. In addition, if (2b) holds, g(x, z)
is continuous. Therefore, g(x, z) is continuous in X × Z.

    d.     The transition function P is given by
                 P (x, z; A × B) = χ{g(x,z)∈A} Q(z, B).
We need to prove that P is monotone, has the Feller property and
satisfies Assumption 12.1. Then we can use Theorem 12.12 to prove
the result. Since g(x, z) is monotone in both arguments and Q is
monotone by assumption, P is monotone. Since assumptions 9.4
and 9.5 are satisfied, we can use Theorem 9.14 to prove that P has
the Feller property.
    Proving that P satisfies Assumption 12.1 requires (6). First no-
tice that if we define
                                  f (0, z̄)
                             θ̄ ≡           ,
                                   1−β
         13 / Convergence Results for Markov Processes                             241

θ ≥ θ̄ implies that υ(x, z; θ) = θ and g(x, z; θ) = 0. Where the first
result comes from part a, and the second from the fact that nobody
else arrives at the island since
                     Z
                   β υ(x, z 0 ; θ)Q(z, dz 0 ) = βθ < θ,

and everybody leaves since
                    Z
        f (x, z) + β υ(x, z 0 ; θ)Q(z, dz 0 ) < f (0, z̄) + βθ ≤ θ.

So if θ ≥ θ̄, P (x, z; A × B) = χ{0∈A}, which implies that λ(AxB) = 1
if 0 ∈ A and  ¡ 0 ¢otherwise.
     If θ ∈ 0, θ̄ , then (6) guarantees that Assumption 12.1 is satis-
fied. To show this we will first show that (6) implies that ḡ(z) < g(z̄).
Suppose not. Then there exist an x such that
                  Z                                Z
    f (x, z̄) + β υ(x, z 0 ; θ)Q(z̄, dz 0 ) ≥ θ ≥ β υ(x, z 0 ; θ)Q(z̄, dz 0 )

and
                  Z                                   Z
                            0           0
   f (x, z) + β       υ(x, z ; θ)Q(z, dz ) ≥ θ ≥ β        υ(x, z 0 ; θ)Q(z, dz 0 ).

and g(x, z̄) = g(x, z) = x. Hence by (3b)
                                 Z
      υ(x, z̄; θ) = f (x, z̄) + β υ(x, z 0 ; θ)Q(z̄, dz 0 ) = w(x, z̄)

and
                                    Z
       υ(x, z̄; θ) = f (x, z) + β       υ(x, z 0 ; θ)Q(z, dz 0 ) = w(x, z).

But then
                      Z                               Z
                                0            0
      w(x, z) ≥ β         υ(x, z ; θ)Q(z̄, dz ) = β       w(x, z 0 )Q(z̄, dz 0 )

which contradicts (6).                         £          ¤
   The ergodic set of the problem is given by ḡ(z), g(z̄) , notice
that g(x, z) monotone in x and z, and the assumption on Q used in
242       13 / Convergence Results for Markov Processes

Section 13.4 then guarantees that there exists a triple (ε, N, b) such
that                             £        ¤
                   P N [ḡ(z), z; b, g(z̄) × B] ≥ ε
and
                          P N [g(z̄), z; [ḡ(z), b] × B] ≥ ε
for any B = (b1 , b2 ] with b1 < b2 .

     e.   In the modified model
              ½                 ½   Z                        ¾¾
                                                  0        0
υ(x, z) = max θ, f (x, z) + min θ, β υ(x(1 − γ), z )Q(z, dz )   .

     So g(x, z) is defined by
                           Z
         f (g(x, z), z) + β υ(g(x, z)(1 − γ), z 0 )Q(z, dz 0 ) ≤ θ

with equality if g(x, z) > 0, if
                          Z
             f (x, z) + β υ(x(1 − γ), z 0 )Q(z, dz 0 ) < θ;

                                 g(x, z) = x(1 − γ)
if
                            Z
               f (x, z) + β υ(x(1 − γ), z 0 )Q(z, dz 0 ) ≤ θ
                          Z
                      ≤ β υ(x(1 − γ), z 0 )Q(z, dz 0 );

and                   Z
                  β       υ(g(x, z)(1 − γ), z 0 )Q(z, dz 0 ) = θ

if                        Z
                      β       υ(x(1 − γ), z 0 )Q(z, dz 0 ) > θ.

    All of£ the analysis
                    ¤ above holds except that the ergodic set is
given by g(z), g(z̄) . Notice that in this case we do not need the
assumption in (6) to guarantee that Assumption 12.1 is satisfied
        13 / Convergence Results for Markov Processes                                   243

since g(z) < g(z̄) follows from f and v nondecreasing in z, and Q
monotone. The monotonicity of g(x, z) in both x and z and the
assumption (2) in Section 13.4 then guarantee that Assumption 12.1
is satisfied.


   f.    By (F2) f (x̄, z) = 0 for all z ∈ Z. θ = 0 implies that (2c)
always holds and so

                                υ(x, z) = f (x, z).

Hence g(x, z) is given by

                        Z
                    β       f (g(x, z; θ), z 0 )Q(z, dz 0 ) = 0,


which implies that g(x, z; 0) = x̄. Hence λθ (A × B) = 1 if x̄ ∈ A
and 0 otherwise. So D(0) = x̄. We proved in part d that if θ ≥ θ̄,
g(x, z; θ) = 0. Hence λθ (A × B) = 1 if 0 ∈ A and 0 otherwise. Hence
D(θ) = 0.


    g.    Clearly [0, x̄] × [z, z̄] is compact. Given a continuous func-
tion h we need to show that
                                           Z
                        lim                    h(x, z)Pθn [(xn , zn ); dx × dz]
             (xn ,zn ,θn )→(x0 ,z0 ,θ0 )
             Z
         =       h(x, z)Pθ0 ((x0 , z0 ; dx × dz),


or (see Exercise 9.15a.)

                                           Z
                        lim                    h(g(xn , zn ; θn ), z 0 )Q(zn , dz 0 )
             (xn ,zn ,θn )→(x0 ,z0 ,θ0 )
             Z
         =       h(g(x0 , z0 ; θ0 ), z 0 )Q(z0 , dz 0 ).
244     13 / Convergence Results for Markov Processes

   The triangle inequality implies that
                 ¯Z
                 ¯
                 ¯ h(g(xn , zn ; θn ), z 0 )Q(zn ; dz 0 )
                 ¯
                          Z                                      ¯
                                                 0            0 ¯
                                                                 ¯
                       − h(g(x0 , z0 ; θ0 ), z )Q(z0 ; dz )¯
                 ¯Z
                 ¯
             < ¯¯ h(g(xn , zn ; θn ), z 0 )Q(zn ; dz 0 )
                          Z                                       ¯
                                                 0             0 ¯
                                                                  ¯
                       − h(g(x0 , z0 ; θn ), z )Q(zn ; dz )¯
                    ¯Z
                    ¯
                 + ¯¯ h(g(x0 , z0 ; θn ), z 0 )Q(zn ; dz 0 )
                          Z                                       ¯
                                                                  ¯
                       − h(g(x0 , z0 ; θ0 ), z 0 )Q(zn ; dz 0 )¯¯
                    ¯Z
                    ¯
                 + ¯¯ h(g(x0 , z0 ; θ0 ), z 0 )Q(zn ; dz 0 )
                          ¯Z
                          ¯
                       − ¯¯ h(g(x0 , z0 ; θ0 ), z 0 )Q(z0 ; dz 0 ) .

In the right-hand side, the first term can be made arbitrarily small
by choice of n since g(x, z; θ) is continuous in (x, z). The second
can be made arbitrarily small by choice of n since f is a continuous
function in x and so is υ by part a. Hence, g(x, z; θ) is continuous in
θ. The third term can be made arbitrarily small since Q satisfies the
Feller property.
    We also proved in part d that for every θ > 0 there is an invariant
distribution. Hence all the assumptions of Theorem 12.13 have been
verified, so λθn converges weakly to λθ0 . This implies that D(θn ) →
D(θ0 ) and so D is a continuous function. The result then follows by
the Mean Value Theorem.

   h.      First notice that
                                    Z
                 Tθ x(x, z) =           x0 Pθ (x, z; dx0 × dz 0 )
                                    Z
                               =        g(x, z; θ)Q(z, dz 0 )
                               = g(x, z; θ).
         13 / Convergence Results for Markov Processes                     245

Hence we need to show that g(x, z; θ) is a nonincreasing function of
θ. Towards a contradiction suppose θ > θ0 and g(x, z; θ) > g(x, z; θ0 ).
Then if the pair (x, z) is such that for both θ and θ0 (2a) holds,
g(x, z; θ) = ḡ(z; θ) and g(x, z; θ0 ) = ḡ(z; θ0 ). And so
                                   Z
         θ = f (ḡ(z; θ), z) + β υ(ḡ(z; θ), z 0 )Q(z, dz 0 )
                                    Z
            < f(ḡ(z; θ ), z) + β υ(ḡ(z; θ0 ), z 0 )Q(z, dz 0 ) ≤ θ0 ,
                         0



a contradiction. If (x, z) is such that (2c) holds for θ and θ0 , then
g(x, z; θ) = g(z; θ) and g(x, z; θ0 ) = g(z; θ0 ). Hence
                         Z
                θ = β υ(g(z; θ), z 0 )Q(z, dz 0 )
                         Z
                    < β υ(g(z; θ0 ), z 0 )Q(z, dz 0 ) = θ0 ,

a contradiction. If (x, z) satisfies (2b) for both θ and θ0 , then

                        g(x, z; θ) = g(x, z; θ0 ) = x,

a contradiction. We still have to consider the case in which (x, z)
satisfies (2a) for θ but (2b) for θ0 and the case in which (x, z) sat-
isfies (2b) for θ and (2c) for θ0 . In the first case notice that g(x, z; θ) =
ḡ(z; θ) and g(x, z; θ0 ) = x. But since ḡ(z; θ) ≤ x, g(x, z; θ) ≤ g(x, z; θ0 ),
a contradiction. The last case can be proven similarly. So Tθ x is a
decreasing function of θ given a pair (x, z) and so D is a nonincreas-
ing function. Notice that in order for the proof above to follow for
g(x, z; θ) decreasing in θ, we need the probability of (2c) holding to
be positive. Notice that this is guaranteed by the assumption in (6):
see part d.
14 Laws of Large Numbers

Exercise 14.1

   Let k ≥ 1 index the sequence {fk } = {f11 , f21 , f22 , f31 , ...} .

   a.     To see that the sequence does not converge at any ω ∈ Ω,
note that for all ω ∈ Ω and for any K > 0, there exists a k1 ≥ K
such that fk1 (ω) = 1 and a k2 ≥ K such that fk2 (ω) = 0.

   b.     For all k ≥ 1 and for all ε > 0,

                    µ (ω ∈ Ω : |fk (ω)| > ε) = 1/n,

where fk = fni . But as k → ∞, n → ∞ and so

                    lim µ (ω ∈ Ω : |fk (ω)| > ε) = 0.
                   k→∞


                               © ª
   c.     Consider the sequence fkj = {fjj } , so that for j ≥ 1 we
have                      ½
                            1 if ω ∈ [1 − 1/j, 1)
               fkj (ω) =                          .
                            0      otherwise
For all ω ∈ Ω = [0,©1) there
                           ª    exists J such that for all j ≥ J,
ω < 1 − 1/j. Hence, fkj converges to the random
                                              © ª variable that
is indentically zero everywhere in Ω. Hence, fkj also converges
µ−almost everywhere.


Exercise 14.2

246
                    14 / Laws of Large Numbers                          247

    a.     Let {fn } and f be random variables, and let {εn } be a
sequence of positive numbers converging to zero. For any ε > 0
define the set

               An (ε) = {ω ∈ Ω : |fn (ω) − f (ω)| > ε} ,

and for convenience denote by Bn the set An (εn ) .
   By the results of Lemmas 14.2 and 14.3, it suﬃces to show that
            ∞
            X                             ∞
                                          X
                  µ (Bn ) < ∞ implies           µ (An (ε)) < ∞,
            n=1                           n=1

for all ε > 0. Fix ε > 0 and note that as {εn } converges to zero there
exists an N such that εn < ε for all n ≥ N. But then for all n ≥ N ,
Bn ⊃ An (ε) and hence µ (Bn ) ≥ µ (An (ε)) . Therefore,
           ∞
           X                     ∞
                                 X                ∞
                                                  X
                µ (An (ε)) ≤          µ (Bn ) ≤         µ (Bn ) < ∞.
          n=N                   n=N               n=1
                                           P∞
Hence, as µ is a probability measure,           n=1 µ (An (ε)) < ∞.

   b.     The proof is constructive and follows the Hint.              As fn
converges to f in probability, for all ε > 0 we have

                           lim µ (|fn − f | > ε) = 0.
                          n→∞

Hence, for all ε > 0 and all δ > 0 there exists an N such that for all
n≥N
                        µ (|fn − f | > ε) < δ.
For example, if we set ε = 1 and δ = 1/2 there exists an n1 such that
for all n ≥ n1 , µ (|fn − f | > 1) ≤ 1/2. In general, for k ≥ 1, if we
set ε = 1/k and δ = 1/2k there exists an nk such that for all n ≥ nk ,
µ (|fn − f | > 1/k) ≤ 1/2k .
    Now consider the subsequence {fnk } generated by these nk . Then
                  ∞
                  X                             ∞
                                                X 1
                        µ (|fn − f | > 1/k) ≤              < ∞,
                                                      2k
                  k=1                           k=1
248                14 / Laws of Large Numbers

and by the result of part a. fnk converges to f µ−almost everywhere.


Exercise 14.3

    a.      Let x, y ∈ X and α, β ∈ R. The proof that for all k, T k is
linear, is by induction. Note that

             T 0 (αx + βy) = αx + βy = αT 0 x + βT 0 y,

and hence T 0 is linear. Assume that

                T k−1 (αx + βy) = αT k−1 x + βT k−1 y.

Then
                              ³                ´
             T k (αx + βy) = T T k−1 (αx + βy)
                              ³                    ´
                           = T αT k−1 x + βT k−1 y
                              = αT k x + βT k y,

since T is linear and by definition     k
                              ° k ° of T .
                              °   °
    The proof that for all k, T ≤ 1, is by induction.       Note that
                   ° 0°                   ° 0 °
                   °T ° =         sup     °T x°
                                               X
                              x∈X,kxkX ≤1
                          =       sup       kxkX ≤ 1.
                              x∈X,kxkX ≤1

            °      °
Assume that °T k−1 ° ≤ 1. Then
             ° °                        °   °
             ° k°                       ° k °
             °T ° =        sup          °T x°
                          x∈X,kxkX ≤1          X
                                        ° ³       ´°
                                        °          °
                      =        sup      °T T k−1 x °
                          x∈X,kxkX ≤1                   X
                                               °     °
                                               ° k−1 °
                      ≤ kT k ·       sup       °T   x°
                                 x∈X,kxkX ≤1            X
                        °      °
                        °      °
                      ≤ °T k−1 ° ≤ 1,
                   14 / Laws of Large Numbers                      249

where the third line follows from kT k ≤ 1.

     b.      Let x, y ∈ X and α, β ∈ R. The proof that for all n, Hn
is linear, is by induction. Note that

                   H1 (αx + βy) = T 0 (αx + βy) ,

and so is linear by part a. Assume that Hn−1 (αx + βy) = αHn−1 x+
βHn−1 y. Then
                           n
                      1 X k−1
  Hn (αx + βy) =         T    (αx + βy)
                      n
                           k=1
                      1 n−1             n−1
                  =     T   (αx + βy) +     Hn−1 (αx + βy)
                      n                   n
                      α n−1     β
                  =     T   x + T n−1 y +
                      n   "     n                           #
                                  n−1             n−1
                      n−1     α X k−1         β X k−1
                                      T   x+          T   y
                        n    n−1             n−1
                                       k=1                   k=1
                  = αHn x + βHn y,

where the third line follows by part a.
   To see that for all n, kHn k ≤ 1, note that for all n
                                       ° n          °
                                       °1 X         °
                                       °            °
              kHn k =         sup      °     T k−1 x°
                           x∈X,kxkX ≤1 ° n   k=1
                                                    °
                                                         X
                            1                X°
                                             n           °
                                                   ° k−1 °
                      ≤          sup               °T   x°
                            n x∈X,kxkX ≤1                X
                                             k=1
                            1X
                              n             °     °
                                            ° k−1 °
                      ≤            sup      °T   x°
                            n   x∈X,kxkX ≤1        X
                                 k=1
                            1 X°      °
                              n
                                ° k−1 °
                      =         °T    ° ≤ 1,
                            n
                                 k=1

by the result of part a.
250               14 / Laws of Large Numbers

Exercise 14.4

   Recall that if P is a transition function on (S, S) , and if f ∈
C (S) , under Assumption 14.2 we define the operator T : C (S) →
C (S) by                      Z
                                  ¡ ¢ ¡       ¢
                  (T f ) (s) = f s0 P s, ds0 ,

for all s ∈ S.
    To see that T is a linear operator, let f, g ∈ C (S) and α, β ∈ R.
Then for all s ∈ S
                             Z
                                              ¡      ¢
        T (αf + βg) (s) =       (αf + βg) P s, ds0
                               Z                   Z
                                     ¡      ¢           ¡     ¢
                          = α fP s, ds0 + β gP s, ds0
                         = α (T f ) (s) + β (T g) (s) ,

where the second equality comes from the linearity of the integral
(Exercise 7.26 c.). Hence,

                      T (αf + βg) = αT f + βT g.

   To see that kT kL = 1, let f ∈ C (S) with kf k = sups∈S |f (s)| ≤
1. Then for all s ∈ S
                                ¯Z                 ¯
                                ¯    ¡ 0¢ ¡      ¢¯
                                ¯
                 |(T f ) (s)| = ¯ f s P s, ds ¯ 0 ¯

                                Z
                                   ¯ ¡ 0 ¢¯ ¡      ¢
                              ≤    ¯f s ¯ P s, ds0

                              ≤ 1,

as kf k ≤ 1. Hence,

                      kT f k = sup |(T f ) (s)| ≤ 1,
                               s∈S

and
                   kT kL =       sup          kT f k ≤ 1.
                             f ∈C(S),kf k≤1
                   14 / Laws of Large Numbers                    251

   Next, consider the function g such that for all s ∈ S, g (s) = 1.
Clearly, g is a bounded and continuous function on S, and satisfies
kgk ≤ 1. But then

                    kT kL =           sup        kT f k
                                f ∈C(S),kf k≤1
                            ≥ kT gk
                            = sup |(T g) (s)| = 1.
                                s∈S

Hence, kT kL = 1.
    To see that every constant function is a fixed point of T, let
f : S → R be defined by f (s) = a for all s ∈ S. Then, for all s ∈ S,
                               Z
                                    ¡ ¢ ¡        ¢
                  (T f ) (s) =    f s0 P s, ds0
                                 Z
                                      ¡      ¢
                             = a P s, ds0
                             = a,

and hence (T f ) (s) = f (s) = a for all s ∈ S.
15 Pareto Optima and
   Competitive Equilibria

Exercise 15.1

    Let {φ∗n } be a Cauchy sequence in S ∗ . That is, for all ε > 0 there
exists a Nε such that kφ∗n − φ∗m k < ε for all m, n ≥ Nε . As φ∗n − φ∗m
is a bounded linear functional by Theorem 15.1, for any s ∈ S the
sequence of scalars {φ∗n (s)} satisfies
                 |φ∗n (s) − φ∗m (s)| ≤ kφ∗n − φ∗m k . ksk ,
and is hence a Cauchy sequence. Hence, as R is complete, for each
s ∈ S there exists a scalar φ∗ (s) such that φ∗n (s) → φ∗ (s) . The proof
will be complete if we can show that the function φ∗ (s) defined in
this way for all s ∈ S is an element of S ∗ , and that φ∗n → φ∗ in the
norm k.k .
    That φ∗ is linear follows from the fact that for s, t ∈ S and
α, β ∈ R we have
           φ∗ (αs + βt) =       lim φ∗n (αs + βt)
                                n→∞
                           = α lim φ∗n (s) + β lim φ∗n (t)
                                  n→∞               n→∞
                           = αφ∗ (s) + βφ∗ (t) ,
from the linearity of the φ∗n .
   To see that φ∗ is bounded, note that as {φ∗n } is Cauchy, for every
ε > 0 there exists an Nε such that |φ∗n (s) − φ∗m (s)| < ksk ε/2 for all
m, n ≥ Nε and all s ∈ S. But as R is complete, φ∗n (s) → φ∗ (s) , and
hence
                 |φ∗ (s) − φ∗m (s)| ≤ ksk ε/2 < ε ksk ,          (15.1)

252
        15 / Pareto Optima and Competitive Equilibria            253

for all m ≥ Nε . Hence

         |φ∗ (s)| = |φ∗ (s) − φ∗m (s) + φ∗m (s)|
                   ≤ |φ∗ (s) − φ∗m (s)| + |φ∗m (s)|
                   ≤ ε ksk + kφ∗m k ksk = (ε + kφ∗m k) ksk ,

and so φ∗ is bounded.
   Finally, by (15.1) we have that for all ε > 0 there exists an Nε
such that for all m ≥ Nε

              kφ∗ − φ∗m k = sup |φ∗ (s) − φ∗m (s)| < ε.
                               ksk≤1

Hence, φ∗m → φ∗ in the norm k.k .


Exercise 15.2

    a.    Let φ be a continuous linear functional on l2 , and for all
n let en denote the sequence that is zero everywhere except for the
n’th term which is one. If x ∈ l2 , then
                          °                °
                          °    XN          °
                          °                °
                      lim °x −       xn en ° = 0,
                     N→∞ °                 °
                                  n=1            2
                                               P∞
and by linearity we can write φ (x) = i=1 xi φ (ei ) . The sequence
defined by yi = φ (ei ) is our y; we need to show that y ∈ l2 .
    Note that for all N
              N              N
                                               ÃN       !
              X             X                   X
                   2
                 yn =           yn φ (en ) = φ    yn en
             n=1           n=1                        n=1
                                 ÃN            !1/2
                                  X
                      ≤ kφk .            yn2          ,
                                   n=1

where the second equality comes from linearity and the inequality
from continuity. Hence
                    ÃN       !1/2
                      X
                           2
                         yn       ≤ kφk < ∞,
                         n=1
254     15 / Pareto Optima and Competitive Equilibria

for all N. Taking limits as N → ∞ we get kyk2 ≤ kφk and hence
y ∈ l2 .
                                                      P∞
    Conversely, let y ∈ l2 . If x ∈ l2 , then φ (x) =    i=1 yi xi is a
continuous linear functional on l2 since by the Hölder inequality
                              ∞
                              X
                  |φ (x)| ≤         |yi xi | ≤ kyk2 . kxk2 ,
                              i=1

and thus kφk ≤ kyk2 .

   b.      Let φ be a continuous linear functional on l1 , and for all
n define en as for part a. Note that if x ∈ l1 , then
                           °             °
                           °   XN        °
                           °             °
                      lim °x −     xn en ° = 0,
                     N→∞   °             °
                                     n=1           1
                                         P
and by linearity we can write φ (x) = ∞    i=1 xi φ (ei ) . The sequence
defined by yi = φ (ei ) is our y; we need to show that y ∈ l∞ . But,

                         |yi | = |φ (ei )| ≤ kφk ,

and hence kyk∞ ≤ kφk < ∞.
                                                      P
   Conversely, let y ∈ l∞ . If x ∈ l1 , then φ (x) = ∞   i=1 yi xi is a
continuous linear functional on l1 since by the Hölder inequality
                              ∞
                              X
                  |φ (x)| ≤         |yi xi | ≤ kyk∞ . kxk1 ,
                              i=1

and thus kφk ≤ kyk∞ .


Exercise 15.3

   Let y ∈ l1 and for all x ∈ l∞ define
                                           N
                                           X
                        φ (x) = lim              yn xn ,
                                    N →∞
                                           n=1
        15 / Pareto Optima and Competitive Equilibria                              255

                                         P
which is well defined because limN→∞ N     n=1 yn is finite and the xn
are bounded. We need to show that this is a continuous linear
functional. To show linearity, let x, z ∈ l∞ and α, β ∈ R. Then
                                        n
                                        X
         φ (αx + βz) =            lim        yi (αxi + βzi )
                                 n→∞
                                         i=1
                                           Xn                        n
                                                                     X
                            = α lim                 yi xi + β lim          yi zi
                                   n→∞                         n→∞
                                            i=1                      i=1
                            = αφ (x) + βφ (z) .

By Theorem 15.1, φ is continuous if and only if it is bounded. But
for all x ∈ l∞
                  ∞
                  X                         ∞
                                            X
      |φ (x)| ≤         |yi xi | ≤ kxk∞ ·           |yi | = kyk1 . kxk∞ < ∞,
                  i=1                         i=1

and hence kφk ≤ kyk1 < ∞.


Exercise 15.4

   Let c0 be as defined in the text, and for all x ∈ c0 let

                  kxkc0 = kxk∞ = sup |xn | = max |xn | .
                                          n                n

That c0 is a vector space follows from the fact that if x, y ∈ c0 and
α ∈ R, we have

               lim (xn + yn ) = lim xn + lim yn = 0,
              n→∞                       n→∞             n→∞

and
                          lim αxn = α lim xn = 0.
                         n→∞                  n→∞
As c0 ⊂ l∞ , k.k∞ is obviously a norm on c0 .
    Let φ be a continuous linear functional on c0 and for all n define
en as for Exercise 15.2. If x ∈ c0 , then
                          °                °
                          °     XN         °
                          °                °
                      lim °x −       xn en ° = 0,
                     N→∞ °                 °
                                        n=1            ∞
256     15 / Pareto Optima and Competitive Equilibria

because limn→∞ xn = 0 (this would not be the case P   in general for
x ∈ l∞ ). Hence, by linearity we can write φ (x) = ∞    i=1 xi φ (ei ) .
The sequence defined by yi = φ (ei ) is our y; we need to show that
y ∈ l1 .
   Define               ½
                             1 if φ (en ) > 0
                   ζn =
                           −1 if φ (en ) ≤ 0,
and for all N ≥ 1, let
                       z N = (ζ 1 , ζ 2 , ..., ζ N , 0, 0, ...)
which is an element of c0 . Then
          ∞               N               N             N
    ¡ ¢ X                 X               X             X
   φ zN =   znN φ (en ) =   ζ n φ (en ) =   |φ (en )| =   |yn | ,
             n=1                   n=1                  n=1           n=1
                          ¯ ¡ ¢¯           ° °
which for all N satisfies ¯φ z N ¯ ≤ kφk . °z N °∞ = kφk < ∞. Taking
limits, we get
                          X∞
                             |yn | ≤ kφk < ∞,
                             n=1
and hence y ∈ l1 .                                  P
                                      , then φ (x) = ∞
    Conversely, let y ∈ l1 . If x ∈ c0P                n=1 yn xn is well
defined because x is bounded and ∞          y
                                        n=1 n  converges.  Then φ is a
continuous linear functional on c0 since
                     ∞
                     X                        ∞
                                              X
         |φ (x)| ≤         |yn xn | ≤ kxk∞          |yn | = kyk1 . kxk∞ ,
                     n=1                      n=1

and thus kφk ≤ kyk1 .

Exercise 15.5

   a.    To see that φ is linear, let x, y ∈ L∞ (Z, Z, µ) and α, β ∈
R. Then
                   Z
  φ (αx + βy) =       (αx (z) + βy (z)) f (z) dµ (z)
                     Z                        Z
               = α x (z) f (z) dµ (z) + β y (z) f (z) dµ (z)
                   = αφ (x) + βφ (y)
         15 / Pareto Optima and Competitive Equilibria                257

by the linearity of the Lebesgue integral.
    For all x ∈ L∞ (Z, Z, µ) , |φ (x)| ≤ kf k1 . kxk∞ and hence kφk ≤
kf k1 so that φ is bounded and hence continuous by Theorem 15.1.

   b.      Let f ∈ L1 (Z, Z, µ) . As f + and f − are in M + (Z, Z, µ) ,
by Exercise 7.21 both define finite measures, say ν + and ν − , on Z.
But, for any A ∈ Z we have
                       Z
            ν (A) =       f (z) dµ (z)
                        A
                       Z                   Z
                   =      f + (z) dµ (z) −   f − (z) dµ (z)
                          A                       A
                    = ν + (A) − ν − (A) ,

and by definition ν = ν + − ν − is a signed measure.
    To see that ν is absolutely continuous with respect to µ, let A ∈ Z
be such that µ (A) = 0. Then by Exercise 7.20 b., ν + (A) = ν − (A) =
0 and hence ν (A) = 0.


Exercise 15.6

    Towards a contradiction, assume that θ ∈ int (B) . Then there
exists an open neighborhood of θ, say N (θ, ε) , that is a subset of B.
As β ∈ (0, 1)                 T such¢ that ε > β T −1 , and consider the
            ¡ there exists Ta−1
point yT = 0, 0, ..., 0, ε/β    , 0, ... which is zero except at the T 0 th
position. Then
                               ∞
                               X
                     kyT k =         β t |yT t | = βε < ε,
                               t=0

and hence yT ∈ N (θ, ε) . But as |yT t | = ε/β T −1 > 1, we also have
yT ∈
   / B, a contradiction.


Exercise 15.7

   a.      Towards a contradiction, assume that x is an interior
point of the positive orthant of lp , which we denote as lp+ . Then
258      15 / Pareto Optima and Competitive Equilibria

for some ² > 0, the open ball B (x, ²) ⊂ lp+ . We produce a contra-
diction by exhibiting an element of B (x, ²) that is not in lp+ .
    As x ∈ lp , there exists an N such that, for all n ≥ N, |xn | < ²/2.
Define z ∈ lp such that zn = xn for all n 6= N and zN = xN − ²/2.
Then z ∈/ lp+ (as zN < 0) but z ∈ B (x, ²) as
                                   Ã∞                       !1/p
                                    X                   p
                  kx − zkp =                 |xn − zn |
                                     n=1
                              = ²/2.


    b.     Consider the point x = (1, 1, ...) and pick ε ∈ (0, 1) . Then
if y ∈ N (x, ε) , we have for all t ≥ 1 that yt ∈ (0, 1 + ε) and hence
is an element of the positive orthant of l∞ . Hence x is an interior
point of the positive orthant of l∞ .


Exercise 15.8

    A 15.1:                          + is convex is straightforward.
                 The proof that X = l∞

    A 15.2:      Let x, x0 ∈ X with
                                                ¡ ¢
                    u (x) = inf xt > inf x0t = u x0 ,
                              t          t

and let θ ∈ (0,©1) .ª Then θ inf t xt + (1 − θ) inf t x0t is a lower bound on
the sequence xθt ≡ {θxt + (1 − θ) x0t } and so
          ¡                  ¢
       inf θxt + (1 − θ) x0t ≥ θ inf xt + (1 − θ) inf x0t > inf x0t .
        t                            t                       t     t



   A 15.3:     Fix ε > 0 and choose x, x0 ∈ l∞ such that kx − x0 k∞ <
δ ≡ ε/2, where we have, without loss of generality, labelled these el-
ements of l∞ such that inf x0 ≤ inf x. Then, for all t ≥ 1,
               ¯          ¡ ¢¯       ¯               ¯
               ¯u (x) − u x0 ¯ = ¯¯inf xs − inf x0s ¯¯
                                     ¯ s        s
                                                  ¯
                                     ¯            ¯
                                 ≤ ¯xt − inf x0s ¯ .
                                                    s
         15 / Pareto Optima and Competitive Equilibria                 259

By definition of the infimum, there exists a T such that x0T < inf s x0s +
ε/2. Hence,
            ¯          ¡ ¢¯      ¯            ¯
            ¯u (x) − u x0 ¯ ≤ ¯¯xT − inf x0s ¯¯
                                         s
                                 ¯                       ¯
                                 ¯                       ¯
                            = ¯inf x0s − x0T + x0T − xT ¯
                                   s
                                 ¯            ¯ ¯          ¯
                                 ¯            ¯
                            ≤ ¯inf x0s − x0T ¯ + ¯x0T − xT ¯
                                   s
                                 ε ε
                            <      + = ε,
                                 2 2
and so u is continuous.

     A 15.4:     As Y is defined by a sequence of linear inequalities,
it is convex.

   A15.5:      To see that Y has an interior point, consider the point
y defined by yt = 1/2 for all t ≥ 1. Then for ε ∈ (0, 1/2) we have
that the ε-neighborhood N (y, ε) ⊂ Y because for all t, yt ∈ (0, 1) .


Exercise 15.9

    To show that u is not continuous if the norm
                                    ∞
                                    X
                            kxk =         β t |xt | ,
                                    t=1

is used, it is suﬃcient to establish that there exists an ε > 0 such
that for all δ > 0 there exists x, x0 ∈ Xi with kx − x0 k < δ and
|u (x) − u (x0 )| ≥ ε. Fix ε > 0 and note that for all δ > 0 we can
find a T such that β T ε < δ. Consider the sequences x = (1, 1, ...)
and x0 = (1, 1, ..., 1, 1 − ε, 1, ...), where the 1 − ε appears at the T ’th
position, which are both bounded in k.k . Then we have
                                 ∞
                                 X
                     °       °         ¯         ¯
                     °x − x0 ° =   β t ¯xt − x0t ¯
                                     t=1
                                 = β T ε < δ,
260        15 / Pareto Optima and Competitive Equilibria

but also         ¯         ¡ ¢¯ ¯                      ¯
                 ¯u (x) − u x0 ¯ = ¯¯inf xt − inf x0t ¯¯ = ε.
                                         t          t




Exercise 15.10

    a.     To see that A 15.1 holds, note that as C is convex, then
Xi is convex. To see that A 15.6 holds, let x ∈ Xi . Then for all
t ≥ 1, xt ∈ C. But by assumption, θ ∈ C and hence for all T,

                   xT = (x1 , x2 , ..., xT , θ, θ, ...) ∈ Xi .


    b.      First, note that the assumptions of the problem are not
suﬃcient to show that ui satisfies A 15.2. As a counterexample, let
X = R, C = [0, 1] and define Ui : C → R by Ui (x) = x2 . As C is
compact, and Ui is continuous, it is bounded on C. Further, as Ui is
monotone on C, then if x, x0 ∈ C we have x > x0 if and only if Ui (x) >
Ui (x0 ) . Hence, for θ ∈ (0, 1) , we have θx + (1 − θ) x0 > x0 and hence
Ui (θx + (1 − θ) x0 ) > Ui (x0 ) so that Ui satisfies A 15.2. To see that
ui need not satisfy A 15.2, consider the points y = (1, 0, 0, ...) ∈ Xi
and y 0 = (0, 1, 0, 0, ...) ∈ Xi . Then
                                              ¡ ¢
                           ui (y) = 1 > β = ui y0 .

But if θ ∈ (0, 1) , we have that ui (θy + (1 − θ) y 0 ) = θ2 + β (1 − θ)2
which is less than ui (y 0 ) = β for combinations of θ and β satisfying
θ2 (1 + β) − 2βθ < 0. Given β, this is true for
                                 µ        ¶
                                       2β
                             θ ∈ 0,         .
                                     1+β

For example, if β = 1/2, this holds for 0 < θ < 2/3.
   To recover the result, we place the following stronger restriction
on Ui .

assumption 15.20 : (Concavity) For each i, if x, x0 ∈ C, and θ ∈
(0, 1) , then Ui (θx + (1 − θ) x0 ) ≥ θUi (x) + (1 − θ) Ui (x0 ) .
            15 / Pareto Optima and Competitive Equilibria                              261

To see that ui satisfies A15.2, under A 15.20 on Ui , let x, x0 ∈ Xi with
ui (x) > ui (x0 ), and let θ ∈ (0, 1) . Then for all T
T
X                                        T
                                         X                               T
                                                                         X
            ¡                   ¢                                                    ¡ ¢
       β Ui θxt + (1 − θ) x0t
        t
                                    ≥θ          t
                                               β Ui (xt ) + (1 − θ)            β t Ui x0t .
 t=0                                     t=0                             t=0

Taking limits as T → ∞, which exist because Ui is bounded, gives
         ¡             ¢                      ¡ ¢     ¡ ¢
     ui θx + (1 − θ) x0 ≥ θui (x) + (1 − θ) ui x0 > ui x0 .
   To see that ui satisfies A 15.3, let ε > 0 be given. As Ui is
continuous, we can choose δ > 0 such that kxt − x0t kX < δ implies
that |Ui (xt ) − Ui (x0t )| < ε (1 − β) . Now if x, x0 ∈ Xi such that
kx − x0 kXi < δ, this implies that kxt − x0t kX < δ for all t ≥ 0. Hence
                                    ∞
                                    X
                ¯           ¡ ¢¯          ¯             ¡ ¢¯
                ¯ui (x) − ui x0 ¯ ≤   β t ¯Ui (xt ) − Ui x0t ¯
                                          t=0
                                                        ∞
                                                        X
                                     < ε (1 − β)              β t = ε,
                                                        t=0

and so ui is continuous in the norm topology.
    To see that ui satisfies A 15.7, let x, x0 ∈ Xi with ui (x) > ui (x0 ) .
As Ui is bounded, there exists an M ∈ R such that |Ui | ≤ M. Fix
ε ∈ (0, ui (x) − ui (x0 )) and choose T ∗ such that
                                          M   ε
                                β T +1       < ,
                                         1−β  2
for all T ≥ T ∗ . Then for all such T,
                       T
                       X               ∞
                                       X
                 ¡ ¢
                u xT =   β t U (xt ) +   β t U (0)
                             t=0                    t=T +1
                                          ∞
                                          X
                         = ui (x) −                 β t (U (xt ) − U (0))
                                         t=T +1
                                                     M
                         ≥ ui (x) − 2β T +1
                                                    1−β
                         > ui (x) − ε
                              ¡ ¢
                         > ui x0 .
262     15 / Pareto Optima and Competitive Equilibria

    c.    By Exercise 5.11d. uW is concave. But all concave func-
tions are quasi-concave. To see this, note that if x, x0 ∈ X with
uW (x) > uW (x0 ) and θ ∈ (0, 1) , then
       ¡              ¢                       ¡ ¢         ¡ ¢
    uW θx + (1 − θ) x0 ≥ θuW (x) + (1 − θ) uW x0 > uW x0 .

Hence uW satisfies A15.2. Similarly, by Exercise 5.11d., uW is con-
tinuous in the sup-norm. Hence it satisfies A15.3.
    To see that uW satisfies A15.7, let x, x0 ∈ X with uW (x) >
uW (x0 ) . By Exercise 5.11d., uW satisfies
                  ¯             ¡ ¢¯
                  ¯uW (x) − uW xT ¯ ≤ β T kuW k ,

for all T and some β ∈ (0, 1) . Fix ε ∈ (0, uW (x) − uW (x0 )) and
                        b
choose
¯       Tb such¡ that
                   ¢¯ β T kuW k < ε. Then             b
                                      ¡ ¢for all T ≥ T , we have
¯uW (x) − uW xT ¯ < ε and hence uW xT > uW (x0 ) .


Exercise 15.11

    a.      To see this, let X = {x ∈ l∞ : 0 ≤ xt ≤ 1} . Then the
points x defined by xt = 1 for all t ≥ 1, and x0 defined by x0t = 1/2
for all t ≥ 1 are in X and satisfy
                                      1              ¡ ¢
               u (x) = inf xt = 1 >     = inf x0t = u x0 .
                        t             2    t

But then for all T,
                        ¡ ¢      1   ¡ ¢
                       u xT = 0 < = u x0 .
                                 2

   b.      To simplify the notation, drop ¡ the
                                              ¢ index i. First, assume
                                            T
that for all x ∈ X, u (x) = limT →∞ u x . To show that A15.7
holds, let x, x0 ∈ X with u (x) > u (x0 ) . Fix ε ∈ (0, u (x) − u (x0 )) .
Then there exists a T ∗ such that for all T ≥ T ∗ ,
                          ¯         ¡ ¢¯
                          ¯u (x) − u xT ¯ < ε.
                           ¡ ¢
Hence, for all T ≥ T ∗ , u xT > u (x0 ) .
        15 / Pareto Optima and Competitive Equilibria               263

   One can prove a partial converse: A 15.7 implies that

                          lim u(xT ) ≥ u(x),
                         T →∞

all x ∈ X. To establish this, we must show that the limit on the LHS
exists and that the inequality holds. To show the former, note that
for any x ∈ X, the relevant limit exists if and only if

                   lim sup u(xT ) = lim inf u(xT ).
                  T →∞               T →∞

Suppose to the contrary that for some x the LHS is strictly bigger.
Choose x̂ such that

               lim sup u(xT ) > u(x̂) > lim inf u(xT ).
              T →∞                        T →∞

A 15.1−15.3 insure that this is possible. Choose some T̂ with

                            u(xT̂ ) > u(x̂).

Then A15.7 implies that

                            u(xT ) > u(x̂),

for all T > T̂ suﬃciently large, a contradiction. Hence limT →∞ u(xT )
is well defined for all x.
    To show that the inequality holds, suppose to the contrary that
for some x,
                           lim u(xT ) < u(x).
                         T →∞
Then A15.7 immediately gives a contradiction.
    Notice that this inequality is suﬃcient, in combination with As-
sumptions 15.1−15.6, to establish Theorem 15.6. It implies that
“tail” pieces cannot increase utility, although they can reduce it.
Thus, if the “tail” piece has a positive price, the consumer will choose
the (cheaper and better) truncated sequence instead. If the “tail”
piece had a negative price, the consumer might want to buy it, since
it would ease his budget constraint. But firms would not want to
produce it: if Assumption 15.6 holds, they will choose to produce
the (feasible and more valuable) truncated sequence instead.
264      15 / Pareto Optima and Competitive Equilibria

Exercise 15.12

    A 15.2:        As in Exercise 15.10 b., this need not be true. In-
stead, assume that Ui satisfies Assumption 15.20 . Let x, x0 ∈ Xi with
ui (x) > ui (x0 ), and let θ ∈ (0, 1) . Then
                 ¡               ¢
             ui θx + (1 − θ) x0
             Z
                    ¡                      ¢
        =        Ui θx (z) + (1 − θ) x0 (z) dµi (z)
               Z                             Z
                                                    ¡    ¢
        ≥ θ Ui (x (z)) dµi (z) + (1 − θ) Ui x0 (z) dµi (z)
                                   ¡ ¢
        = θui (x) + (1 − θ) ui x0
                 ¡ ¢
        > ui x0 .


    A 15.3:      To see that ui satisfies A15.3, let ε > 0 be given. As
Ui is continuous, we can choose δ > 0 such that |x (z) − x0 (z)| < δ
implies that |Ui (x (z)) − Ui (x0 (z))| < ε. Now if x, x0 ∈ Xi such that
kx − x0 k∞ < δ, this implies that |x (z) − x0 (z)| < δ for all z ∈ B for
some set B ∈ Z with µ (B c ) = 0. Hence
                               Z
       ¯           ¡ ¢¯           ¯               ¡      ¢¯
       ¯ui (x) − ui x0 ¯ ≤        ¯Ui (x (z)) − Ui x0 (z) ¯ dµi (z)
                           < ε,

and ui is continuous in the norm topology.

   A 15.9:       Let x, x0 ∈ Xi , such that ui (x) > ui (x0 ) , and An ↓ 0.
Then for all n,
                Z
  ¡ An ¢              ¡         ¢
ui x       =       Ui xAn (z) dµi (z)
                Z                            Z
           =            Ui (x (z)) dµi (z) +     Ui (0) dµi (z)
                 (An )c                       An
                Z                        Z
           =       Ui (x (z)) dµi (z) −      (Ui (x (z)) − Ui (0)) dµi (z) .
                                         An

As x ∈ L∞ (Z, Z, µ) , it is bounded except possibly on a set of mea-
sure zero. Hence, as Ui is continuous, there exists a B ∈ Z with
        15 / Pareto Optima and Competitive Equilibria                265

µ (B) = 0 such that supz∈B c |Ui (z)| ≤ M for some scalar M. Hence
for all n,
 Z                                    Z
     (Ui (x (z)) − Ui (0)) dµi (z) ≤     |Ui (x (z)) − Ui (0)| dµi (z)
  An                                     An
                                   ≤ 2M µi (An ) .

   As µi is absolutely continuous with respect to µ, we have

            lim µi (An ) = µi (∩∞              ∞
                                n=1 An ) = µ (∩n=1 An ) = 0.
           n→∞

Then for all ε > 0 there exists an Nε such that for all n ≥ Ne ,
µi (An ) < ε. Pick
                       µ                     ¶
                           ui (x) − ui (x0 )
                   ε ∈ 0,                      .
                                 2M

Then, for all n ≥ Nε we have
                Z                      Z
  ¡     ¢
ui xAn =          Ui (x (z)) dµi (z) −     (Ui (x (z)) − Ui (0)) dµi (z)
                                        An
                Z
           ≥      Ui (x (z)) dµi (z) − 2M µi (An )
           > ui (x) − 2M ε
                ¡ ¢
           > ui x0 .
16 Applications of
   Equilibrium Theory

Exercise 16.1

    a.     As the results of Exercise 5.1 apply, there exists a unique
symmetric Pareto eﬃcient allocation. By the First Welfare Theorem
(Theorem 15.3) (the non-satiation requirement follows from the defi-
nition of X and U strictly increasing), every competitive equilibrium
allocation is Pareto eﬃcient. But since there is only one symmet-
ric Pareto eﬃcient allocation, there can be at most one symmetric
competitive equilibrium.

    b.   We need to verify that assumptions A15.1 through A15.5
hold. A15.1 is obvious; we verify the rest in turn.

   A15.2:      Let x, x0 ∈ X such that u (x) > u (x0 ) . Let θ ∈ (0, 1)
and define x = {θxt + (1 − θ) x0t }∞
            θ
                                   t=0 . By the strict concavity of U,
we have for all t that
                    ³ ´                        ¡ ¢
                  U xθt ≥ θU (xt ) + (1 − θ) U x0t .

Hence,
       ³ ´              T
                        X        ³ ´
      u xθ =      lim       β t U xθt
                 T →∞
                        t=0
                         XT                               T
                                                          X
                                 t
                                                                     ¡ ¢
             ≥ θ lim            β U (xt ) + (1 − θ) lim         β t U x0t
                   T →∞                           T →∞
                          t=0                             t=0
                                 ¡ ¢    ¡ ¢
             = θu (x) + (1 − θ) u x0 > u x0 ,

266
             16 / Applications of Equilibrium Theory                   267

where the limits are well defined by β ∈ (0, 1) and U bounded.

    A15.3:        Let ε > 0 be given. Then as U is continuous there
exist a δ > 0 such that |xt − x0t | < δ implies |U (xt ) − U (x0t )| <
ε (1 − β) . Let x, x0 ∈ X such that kx − x0 k∞ < δ. Then for all t,
|xt − x0t | < δ, and hence
                                ¯∞                             ¯
            ¯         ¡ 0 ¢¯    ¯X                 ∞
                                                   X      ¡   ¢¯
            ¯u (x) − u x ¯ = ¯  ¯                              ¯
                                     β t U (xt ) −   β t U x0t ¯
                                ¯                              ¯
                                  t=0               t=0
                                 ∞
                                 X         ¯           ¡ ¢¯
                             ≤         β t ¯U (xt ) − U x0t ¯ < ε.
                                 t=0


    A15.4:      Let y, y 0 ∈ Y . Then there exists k, k0 ∈ l∞ such that
       0                               0
k0 = k0 = k̂, kt+1 + yt ≤ f (kt ) and kt+1 + yt0 ≤ f (kt0 ) , for all t. Let
θ ∈ (0, 1) and define
                              ©              ª∞
                    y θ = θyt + (1 − θ) yt0 t=0 ,
                              ©               ª∞
                    kθ = θkt + (1 − θ) kt0 t=0 .

Obviously, k0θ = k̂ and
           θ
                                                ¡ 0        ¢
          kt+1 + ytθ = θ (kt+1 + yt ) + (1 − θ) kt+1 + yt0
                                           ¡ ¢      ³ ´
                     ≤ θf (kt ) + (1 − θ) f kt0 ≤ f ktθ ,

for all t by the concavity of f. Hence, yθ ∈ Y for all θ ∈ (0, 1) .
                                                                 ¡ ¢
    A15.5:      We construct an interior point of Y. Let k̂ ∈ 0, k̄
and define the point y such that
                                  h ³ ´     i
                       yt = (1/2) f k̂ − k̂ ,

for all t. This ³  ´ Y as the sequence k defined by kt = k̂ for all t
                is in
satisfies yt < f k̂ − k̂ for all t. We need to show that there exists
an ε > 0 such that the ε-ball B (y, ε) ⊂ Y. Choose ε such that
                                    h ³ ´     i
                      0 < ε < (1/3) f k̂ − k̂ .
268         16 / Applications of Equilibrium Theory
                                            ³ ´
Then if y 0 ∈ B (y, ε) , we have 0 < yt0 < f k̂ − k̂ for all t and hence
B (y, ε) ⊂ Y.

    The definition of X and the assumption that U is strictly increas-
ing imply that the non-satiation requirement is satisfied. Hence
the Second Welfare Theorem (Theorem      ¡ 0 15.4)
                                                 ¢ applies and we have
                                               0
that the Pareto-eﬃcient allocation x , y is a symmetric quasi-
competitive equilibrium. To show that it is a competitive equi-
librium, we need to establish the existence of a “cheaper point” in
X.
                                        ¡ ¢
    By construction  ¡ of
                        ¢  X, either φ x0 is strictly positive, or it is
equal to zero. If φ x0 > 0, the existence of a cheaper point follows
from
  ¡ ¢the fact that θ = {0, 0, ...} ∈ X with φ (θ) = 0. Suppose
φ x0 = 0. Then either x0 = θ, or φ is identically zero. The
second is ruled out by the Second Welfare Theorem (Theorem 15.4).
To show that x0 cannot equal θ, note that by the result that A15.5
applies above, we have the existence of a point x ∈ X ∩ Y, with x 6= θ
satisfying u (x) >£ u (θ) ¤by the fact that U is strictly increasing. But
this contradicts x0 , y 0 being Pareto eﬃcient.
    By Exercise 5.1 we know that a symmetric Pareto eﬃcient alloca-
tion exists. Hence, we have the existence of a symmetric competitive
equilibrium.

   c.     We establish each of these in turn.

    A15.6:       This is obviously true for X. Let y ∈ Y. Then there
                +
exists a k ∈ l∞ such that kt+1 + yt ≤ f (kt ) for all t. But then, as
kt+1 ≤ f (kt ) , we have that y T ∈ Y.

    A15.7:       Let x, x0 ∈ X such that u (x) > u (x0 ) and let ε =
u (x) − u (x0 ). As U is bounded and β ∈ (0, 1) there exists a T ∗ such
that for all T ≥ T ∗ ,

                    ∞
                    X           ¯           ¡ ¢¯
                            β t ¯U (xt ) − U x0t ¯ < ε/2.
                   t=T +1
            16 / Applications of Equilibrium Theory                 269

Then, for all T ≥ T ∗
             ¡ ¢             ¡ ¢       ¡ ¢       ¡ ¢
   u (x) − u x0 = u (x) − u xT + u xT − u x0
                      ∞
                      X                          ¡ ¢    ¡ ¢
                   ≤    β t |U (xt ) − U (0)| + u xT − u x0
                        t=T +1
                          ¡ T¢      ¡ ¢
                   < u x         − u x0 + ε/2.
             ¡ ¢
and hence u xT > u (x0 ) .
    The non-satiation condition in Theorem 15.6 follows from the
definition of X and U strictly increasing. Hence the price system
has an inner product representation.

    d.    We assume an interior solution: Exercise 5.1d. gives suﬃ-
cient conditions for this to be true. Using standard Lagrange multi-
plier methods, the first-order conditions for an optimum in the profit
maximization problem include

                    Πt−1       1
                       s=0 1+rs = λt , for all t ≥ 1,
                   λt f 0 (kt ) = λt−1 , for all t ≥ 1,

where, for each t ≥ 1, λt is the Lagrange multiplier on yt + kt+1 ≤
f (kt ) and λ0 = 1. Hence we have

                          1 + rt = f 0 (kt+1 ) .

   Similarly, using standard Lagrange multiplier methods, the first
order conditions for an optimum in the consumers problem include
                                                 1
                       β t U 0 (xt ) = µΠt−1
                                         s=0
                                               1 + rs
where µ is the Lagrange multiplier on the consumers’ lifetime budget
constraint. Hence
                         U 0 (xt+1 )     1
                       β 0           =
                          U (xt )      1 + rt
As the capital stock sequence corresponding to this competitive equi-
librium is unique (from the uniqueness of the Pareto eﬃcient capi-
tal stock sequence), the set of equilibrium real interest rates {rt } is
unique, and hence so is the sequence of relative prices {pt+1 /pt } .
270          16 / Applications of Equilibrium Theory

    e.   Under our assumptions on f and U, the function q (k) de-
fined by
                               U 0 (c [g (k)])
                     q (k) = β                 ,
                                U 0 [c (k)]
is continuous. Further, under our assumptions the space of attain-
able capital stock choices is bounded; denote it by K. Let C (K × K)
be the space of continuous functions on K × K bounded in the sup
norm, and define the operator T on C (K × K) by
                               ©          0
                                                      £ 0 0 ¤ª
           (T ψ) (k, z) = max
                           0 0
                                f (z) − z   + q (k) ψ  k ,z ,
                         z ,k

subject to
                            0 ≤ z 0 ≤ f (z) ,
and k0 = g (k) . Given the restriction on the choice of k0 , this func-
tional equation corresponds to the one defined in (1) in the text.
     To see that T maps bounded functions into bounded functions,
note that f is bounded above, q is continuous on the bounded set
K, and ψ is bounded by assumption. That T preserves continuity
follows from the Theorem of the Maximum noting that the constraint
correspondence is continuous by the result of Exercise 3.13 b.
     The existence of a unique fixed point of T will then be established
if we can establish that T is a contraction mapping. The proof of
this result is complicated slightly by the fact there exist k ∈ K such
that q (k) > 1. To see this, note that substituting from the Euler
equation from the social planners problem, we get
                                         1
                           q (k) =                 .
                                     f 0 [g (k)]

Denoting k ∗ as in Exercise 6.1, for k ≤ k∗ , we have g (k) ≤ g (k∗ ) ,
and hence
               f 0 [g (k)] ≥ f 0 [g (k∗ )] = f 0 (k∗ ) = 1/β.
This implies that for k ≤ k∗ , we have q (k) ≤ β < 1. However, for
k > k ∗ it is possible that q (k) > 1.
   Define k̂ such that            ³ ´
                               f 0 k̂ = 1.
            16 / Applications of Equilibrium Theory                 271

Note that if k0 < k̂, by the properties of g (k) established in Exercise
6.1, we have q (kt ) < 1 for all kt = g (kt−1 ). The interesting case
is when k0 ≥ k̂. Starting with such a k0 , by the properties of g (k)
established in Exercise 6.1, we have g (kt ) < kt for all t, and further
there exists an N such that kt = g (kt−1 ) < b k for all t ≥ N. Hence,
there exists an M ≥ N such that

                    q (k) q (g (k)) ...q (g n (k)) < 1,

for all n ≥ M.
    Our strategy will be to show that the operator T M , defined by
iterating on T a total of M times, satisfies Blackwell’s suﬃcient con-
ditions for a contraction. Monotonicity of T M follows from the fact
that T itself is monotone. To see that T is monotone, note that if
ψ 1 ≥ ψ2 , then we have
                           ©                      £            ¤ª
         (T ψ 1 ) (k, z) = f (z) − z10 + q (k) ψ 1 g (k) , z10
                           ©                      £            ¤ª
                         ≥ f (z) − z20 + q (k) ψ 1 g (k) , z20
                           ©                      £            ¤ª
                         ≥ f (z) − z20 + q (k) ψ 2 g (k) , z20 ,

where z10 and z20 are the optimal choices corresponding to ψ 1 and ψ 2
respectively, the second line follows from the fact that z20 is feasible
and not chosen for the problem with ψ 1 , and the last line is by
assumption that ψ 1 ≥ ψ 2 pointwise.
    To see discounting, note that for any a > 0 we have

               T (ψ + a) (k, z) = (T ψ) (k, z) + q (k) a,

so that
                      ¡     ¢                             ¡       ¢
  T M (ψ + a) (k, z) = T M ψ (k, z) + q (k) q (g (k)) ...q g M (k) a,

with                                     ¡       ¢
                 Q ≡ q (k) q (g (k)) ...q g M (k) < 1.
Hence, T M is a contraction of modulus Q.
   The Theorem of the Maximum implies that h is upper hemi-
continuous. To show that it is continuous, it is suﬃcient to show
that it is single valued. This will be true if, for a given (k, z), the
272          16 / Applications of Equilibrium Theory

problem in z 0 is strictly concave, which in turn will be true if the
function ψ is strictly concave in z.
    The usual proof of strict concavity does not apply because the re-
turn function is only concave in z 0 for a given z. However, exploiting
the fact that ψ also solves the sequence problem, strict concavity can
be proven directly. Let z01 and z02 be two distint levels of initial cap-
ital with associated optimal sequences z 1 and z 2 , and let λ ∈ (0, 1) .
For all t define ztλ = λzt1 + (1 − λ) zt2 . Then
            ³      ´         ³ ´                h ³ ´
          ψ k, z0λ    ≥ f z0λ − z1λ + q (k) f z1λ − z2λ +
                                     h ³ ´
                           q (g (k)) f z2λ − z3λ +
                             ¡       ¢h ³ ´            iii
                            q g 2 (k) f z3λ − z4λ + ...
                               ¡      ¢            ¡    ¢
                      > λψ k0 , z01 + (1 − λ) ψ k0 , z02 ,

where the first inequality follows from the fact that for all t
                 ³ ´            ¡ ¢            ¡ ¢
              f ztλ    ≥ λf zt1 + (1 − λ) f zt2
                            1              2      λ
                        ≥ λzt+1 + (1 − λ) zt+1 = zt+1 ,

so that z λ is feasible from z0λ , and the second from the fact that f is
strictly concave and the sequences are distinct. Hence ψ is strictly
concave in z.
    To show that Ω is the unique continuous and bounded function
satisfying (2), define the operator T on C (K × K) by
                               © £             ¤      ¡     ¢ª
          (T Ω) (k, a) = max
                           0 0
                                 U a − q (k) a0 + βΩ k0 , a0 ,
                        a ,k

subject to
                                            a
                               0 ≤ a0 ≤         ,
                                          q (k)
and k0 = g (k) . The continuity of g and q on the bounded set K,
combined with U and Ω bounded ensures that T Ω is bounded. That
T preserves continuity comes from q continuous and the Theorem
of the Maximum. That T is a contraction mapping comes from
verifying that Blackwell’s suﬃcient conditions for a contraction hold.
               16 / Applications of Equilibrium Theory                         273

     The Theorem of the Maximum implies that ω is upper hemi-
continuous. To show that ω is single valued, it is suﬃcient to show
that, for each k fixed, Ω (k, a) is concave in a. Once again we exploit
the fact that Ω also solves the sequence problem. Let a10 and a20 be
two distinct levels of a and let a1 and a2 be the associated optimal
sequences. Let λ ∈ (0, 1) and define, for each t, aλt = λa1t +(1 − λ) a2t .
As the constraint on the choice of a0 is linear, aλt+1 is feasible from
aλt . Then
       ³      ´        h              i     h h                  i
     Ω k, aλ0   ≥ U aλ0 − q (k) aλ1 + β U aλ1 − q (g (k)) aλ2 +
                       h h          ¡     ¢ i       ii
                     β U aλ2 − q g 2 (k) aλ3 + ...
                         ¡     ¢             ¡    ¢
                ≥ λΩ k, a10 + (1 − λ) Ω k, a20 ,

where the first line follows from feasibility and the second from the
fact that U is concave (the inequality is not necessarily strict because,
although a10 and a20 are distinct, a10 − q (k) a11 and a20 − q (k) a21 need
not be distinct).

    f.       The first-order conditions of the firms problem gives

                             1 = q (k) f 0 [h (k, k)] ,

which, combined with the definition of q (k) , gives

         U 0 [f (k) − g (k)] = βf 0 [h (k, k)] U 0 (f [g (k)] − g [g (k)]) .

But by definition, g (k) solves

          U 0 [f (k) − g (k)] = βf 0 [g (k)] U 0 (f [g (k)] − g [g (k)]) .

Hence g (k) = h (k, k) .
   By definition of the firms problem we have

           ψ (k, k) = f (k) − h (k, k) + q (k) ψ (g (k) , h (k, k)) ,

which, using the result above, implies

              f (k) − g (k) = ψ (k, k) − q (k) ψ (g (k) , g (k)) .
274          16 / Applications of Equilibrium Theory

Substituting this into the Euler equation that defines g (k) and using
the definition of q (k) we get

           q (k) U 0 [ψ (k, k) − q (k) ψ (g (k) , g (k))]
                ¡                                £               ¤¢
         = βU 0 ψ [g (k) , g (k)] − q [g (k)] ψ g 2 (k) , g 2 (k) .

But the first-order conditions of the consumers problem imply

                  q (k) U 0 [a − q (k) ω (k, a)]
              = βU 0 (w (k, a) − q [g (k)] w [g (k) , w (k, a)]) ,

so that if ψ (g (k) , g (k)) = a we get

                     ω (k, ψ (k, k)) = ψ (g (k) , g (k)) .

    g.     Given the function g (k) defined in (3) and the price q (k)
defined in (4), part e. of this question exhibits the functions ψ (k, z)
and h (k, z) which satisfy (R1) and govern the behavior of the firm,
as well as the functions Ω (k, a) and ω (k, a) which satisfy (R2) and
govern the behavior of the consumer. Part f. then establishes that
individual and aggregate behavior are compatible (R3), and that
market clearing (R4) hold. Hence, all the elements of a recursive
competitive equilibrium are present, and all that remains is to estab-
lish that they deliver the allocation (x0 , y0 ) .
    Given a value for the firm’s initial capital stock z0 = k0 , we can
construct the sequence of firm capital stocks from

              zt+1 = h (kt , zt ) = h (kt , kt ) = g (kt ) = kt+1 .

Then we have from the firms problem that

                         yt = f (kt ) − h (kt , kt )
                              = f (kt ) − g (kt ) ,

where the second line comes from (R3), for all t, which delivers the
sequence y0 by the results of Exercise 5.1.
    Given an initial value of assets a = ψ (k0 , k0 ) , we can construct
the consumers asset sequence from

         at+1 = ω (kt , at ) = ω (kt , ψ (kt , kt )) = ψ (kt+1 , kt+1 ) .
             16 / Applications of Equilibrium Theory                    275

Then we have from the consumers problem that

                xt = at − q (kt ) ω (kt , at )
                     = ψ (kt , kt ) − q (kt ) ψ (kt+1 , kt+1 )
                     = f (kt ) − g (kt ) ,

for all t, where the third line comes from the definition of the firms
problem and the result above. But this delivers the sequence x0 by
the results of Exercise 5.1.


Exercise 16.3
                                                           t               t
   a.     Define θ̂ = γ 1/(1−α) and let k̂t+1 = kt+1 /θ̂ , and ŷt = yt /θ̂ .
We also require that yt ≥ 0. Then (1) can be rewritten as

                              k̂t+1 + ŷt ≤ k̂tα .

Written this way, familiar results imply that ŷt and k̂t are bounded
above by some number, say M, which implies |ŷt | ≤ M for all t.
Hence, we have
                                         t
                             |yt | ≤ M θ̂ ,
for all t. Then, for all θ ≥ θ̂, we have for all y ∈ Y and all t that
                                     Ã !t
                       ¯ −t ¯
                       ¯θ yt ¯ ≤ M θ̂       ≤ M.
                                       θ

That is, for all θ ≥ θ̂, we have Y ⊂ Sθ .

    b.       We will establish that, for θ ≤ θ̂ = γ 1/(1−α) , and only for
such θ, Y has an interior point when viewed as a subset of Sθ .
    First, let θ > θ̂, and towards a contradiction assume that y is an
interior point of Y. Then there exists an ² > 0 such that
                           ©         °       °     ª
                B (y, ²) = y0 ∈ Sθ : °y 0 − y°θ < ² ⊂ Y.

Consider the bundle y0 defined for all t as yt + δθt for some δ ∈ (0, ²) .
Then for all t,        ¯ −t ¡ 0     ¢¯
                       ¯θ    yt − yt ¯ = δ < ²,
276          16 / Applications of Equilibrium Theory

                                                                  t
and hence y0 ∈ B (y, ²) . However, as θ > θ̂ > 1, and |yt | ≤ M θ̂ ,
there exists a T such that
                                 µ ¶T
                         −T       θ
                       θ̂ yT + δ       > M,
                                  θ̂
for all t ≥ T, where M was defined in part a. above. Hence
                         Ã          µ ¶t !
                      0     −t        θ        t
                     yt = θ̂ yt + δ          θ̂ ,
                                      θ̂

is not in Y for all t ≥ T, a contradiction.
    Second, let θ ≤ θ̂. We must find a bundle y and an ² > 0 such
that B (y, ²) ⊂ Y. From any k0 , construct a sequence k according to
                                    1
                              kt+1 = γ t ktα ,
                                    2
and a sequence y by
                                   1
                               yt = γ t ktα .
                                   4
By construction
                                               −t
                             L ≡ inf θ̂ γ t ktα ,
                                           t
is finite and strictly positive so that we can pick ² such that
                                      1
                               0 < ² < L.
                                      4
Then for any y0 ∈ B (y, ²) , we have that
                        ¯         ¯
                        ¯yt − yt0 ¯ < ²θt ≤ ²θ̂t ,

as θ ≤ θ̂, and hence,
                                       t                  t
                         yt − ²θ̂ ≤ yt0 ≤ yt + ²θ̂ .

But
                                   t           1 t
                             ²θ̂           <     θ̂ L
                                               4
                                               1 t α
                                           ≤     γ kt .
                                               4
             16 / Applications of Equilibrium Theory                277

for all t, so that
                         0 ≤ yt0 ≤ γ t ktα − kt+1
and hence y0 ∈ Y (using the same sequence k as for y).

    c.    In what follows, let θ = θ̂. Let ε > 0 be given, let D be
the bound on U, and pick T such that
                                   2D  ε
                             βT       < .
                                  1−β  2

As U is continuous, we can find a δ 1 > 0 such that |xt − x0t | < δ 1
implies that
                  ¯           ¡ ¢¯
                  ¯U (xt ) − U x0t ¯ < ε 1 − β .
                                       2 1 − βT
Then, if x, x0 ∈ X such that
                      °       °
                      °x − x0 ° < δ 2 = θ−T δ 1 ,
                               θ

we have that         ¯         ¯
                     ¯xt − x0t ¯ < θt δ 2 = θt θ−T δ 1 ,

for all t ≥ 0. Hence, for such x, x0 , we have
                         ∞
                         X
       ¯         ¡ ¢¯          ¯           ¡ ¢¯
       ¯u (x) − u x0 ¯ ≤   β t ¯U (xt ) − U x0t ¯
                             t=0
                             T
                             X −1
                                     ¯           ¡ ¢¯          2D
                        ≤        β t ¯U (xt ) − U x0t ¯ + β T
                             t=0
                                                              1−β
                             T
                             X           ε 1−β     ε
                        ≤           βt            + = ε,
                                         2 1 − βT  2
                             t=0

where the third inequality comes from the fact that for t ≤ T, we
have |xt − x0t | < δ 1 . Hence, u is continuous in the norm topology.

   d.      To show boundedness, first note that, for all x ∈ X, where
X is defined as
                      n             ¯      ¯    o
                 X = x ∈ Sθ+ : inf ¯θ−t xt ¯ ≥ a ,
                                          t
278           16 / Applications of Equilibrium Theory

we have that there exists a b such that |xt | ≤ θt b for all t. Then
       ∞
       X                     ∞
                             X          ¡ ¢
             β t U (xt ) ≤         β t U θt b
       t=0                   t=0
                              ∞ ¡ t ¢1−σ
                             X   θb      −1
                                    t
                        =     β
                          t=0
                                    1−σ
                                    ∞
                             b1−σ X ¡ 1−σ ¢t          1
                        =              βθ    −
                             1 − σ t=0         (1 − β) (1 − σ)
                        ≡ M,

This is finite, by assumption that βθ1−σ < 1, and hence u is bounded
above on X.
   To see that u is bounded below, note that for all x ∈ X we have
       ∞
       X                     ∞
                             X          ¡ ¢
             β t U (xt ) ≥         β t U θt a
       t=0                   t=0
                                   ∞
                              a1−σ X ¡            ¢t              1
                        =                 βθ1−σ        −
                             1 − σ t=0                     (1 − β) (1 − σ)
                        ≡ M,

which is finite. Hence, u is bounded. Note that these assumptions
are suﬃcient, but overly strong. For example, for the case of σ ∈
(0, 1) , U is bounded below, and the extra restriction on consumption
bundles is not necessary.
     To see that u is also continuous, let ε > 0 be given and pick T
such that              ¡ 1−σ ¢T ¡         ¢ ε
                        βθ        M −M < ,
                                                 2
where M and M were defined immediately above. As U is continu-
ous, we can find a δ 1 > 0 such that |xt − x0t | < δ 1 implies that
                      ¯           ¡ ¢¯
                      ¯U (xt ) − U x0t ¯ < ε 1 − β .
                                           2 1 − βT
Then, if x, x0 ∈ X such that
                      °       °
                      °x − x0 ° < δ 2 = θ−T δ 1 ,
                               θ
             16 / Applications of Equilibrium Theory                   279

we have                   ¯         ¯
                          ¯xt − x0t ¯ < θt δ 2 = θt θ−T δ 1 .

for all t ≥ 0. Hence, for such x, x0 , we have
            ¯          ¡ ¢¯
            ¯u (x) − u x0 ¯
            ¯T −1                      ¯ ¯∞                       ¯
            ¯X £                 ¡   ¢¤¯ ¯X £               ¡   ¢¤¯
            ¯                          ¯  ¯                       ¯
        ≤ ¯       β t U (xt ) − U x0t ¯ + ¯  β t U (xt ) − U x0t ¯
            ¯                          ¯ ¯                        ¯
              t=0                                 t=T
            T
            X −1
                      ¯           ¡ ¢¯
        ≤         β t ¯U (xt ) − U x0t ¯
            t=0
                       ¯∞                                 ¯
             ¡ 1−σ ¢T ¯¯X    £ ¡         ¢   ¡          ¢¤¯
                                                          ¯
            + βθ       ¯  β s U θ−T xT +s − U θ−T x0T +s ¯
                       ¯                                  ¯
                             s=0
            T
            X          ε 1−β   ¡      ¢T ¡      ¢
        ≤         βt        T
                              + βθ1−σ      M −M
            t=0
                       21−β
        < ε,

where the third inequality comes from the fact that for t ≤ T, we
have |xt − x0t | < δ 1 , and the fact that for all t, we have

                                   aθt < xt < bθt ,

so that
                              aθs < θT xT +s < bθs ,
and we can use the same bounds constructed above.               Hence, u is
continuous in the norm topology.


Exercise 16.6

   a.       We establish each of the assumptions in turn.

   A15.1:                + is obviously convex.
                    X = l∞

   A15.2:           This follows from the fact that
                                       ¡      ¢
                               1 − exp −xt 2t ,
280         16 / Applications of Equilibrium Theory

is strictly concave.   For let x, x0 ∈ X with u (x) > u (x0 ) , and let
θ ∈ (0, 1) . Then
                     ∞
                     X
  £               ¤       £       ¡ £                 ¤ ¢¤
 u θx + (1 − θ) x0 =   2−t 1 − exp − θxt + (1 − θ) x0t 2t
                            t=1
                            ∞
                            X        © £       ¡       ¢¤
                       ≥          2−t θ 1 − exp −xt 2t
                            t=1
                                   £        ¡      ¢¤ª
                         + (1 − θ) 1 − exp −x0t 2t
                                           ¡ ¢
                       = θu (x) + (1 − θ) u x0
                          ¡ ¢
                       > u x0 .

                                                ¡      ¢
   A15.3:     Let ε > 0 be given. As 1 − exp −xt 2t is continuous,
we can choose δ > 0 such that |xt − x0t | < δ implies that
                ¯    ¡      ¢      ¡        ¢¯
                ¯exp −x0t 2t − exp −xt 2t ¯
                ¯        ¡     ¢              ¡     ¢¯
            = ¯1 − exp −xt 2t − 1 + exp −x0t 2t ¯ < ε.

Now if x, x0 ∈ X such that kx − x0 k∞ < δ, then |xt − x0t | < δ for all
t ≥ 1. Hence
                          ∞
                          X
      ¯           ¡ ¢¯          ¯   ¡       ¢     ¡      ¢¯
      ¯ui (x) − ui x0 ¯ ≤   2−t ¯exp −x0t 2t − exp −xt 2t ¯
                              t=1
                               X∞
                           < ε          2−t = ε,
                                  t=1

and so ui is continuous.

    A15.4:      Y is obviously convex, being defined by a sequence of
linear inequalities.

   A15.5:          − ⊂ Y, and as l− contains an interior point (see
               As l∞               ∞
Exercise 15.7), therefore Y contains an interior point.

   A15.6:     This is obviously true of X = l∞ + . That it is true of
                                          −t
Y follows from the fact that, for all t, 2 > 0.
            16 / Applications of Equilibrium Theory                  281

    A15.7:      Let x, x0 ∈ X with u (x) > u (x0 ) , and pick ε ∈
(0, u (x) − u (x0 )) . Choose Tb such that
                                 b
                             2−(T +1) < ε.

Then for all T ≥ Tb, we have
                          ¯ ∞                     ¯
         ¯         ¡ T ¢¯ ¯ X     £    ¡       ¢¤¯¯
                          ¯
         ¯u (x) − u x ¯ = ¯    −t            t
                              2 1 − exp −xt 2 ¯
                          ¯                       ¯
                                 t=T +1
                                  ∞
                                  X          ¯       ¡      ¢¯
                            ≤            2−t ¯1 − exp −xt 2t ¯
                                t=T +1
                                 X∞
                            ≤            2−t < ε,
                                t=T +1
           ¡ ¢
and hence u xT > u (x0 ) .

    b.     By Theorem 15.1, a linear functional on l∞ is continuous
if and only if it is bounded. But

                      kpk =       sup |p.x|
                                kxk∞ ≤1
                                       ¯∞       ¯
                                       ¯X       ¯
                                       ¯        ¯
                            =   sup ¯     pt xt ¯
                                       ¯
                              kxk∞ ≤1 t=1       ¯
                              ¯∞ ¯
                              ¯X ¯
                              ¯       ¯
                            ≥ ¯    pt ¯ ,
                              ¯       ¯
                                 t=1

which is not finite, and where the last line comes from the fact that
x0 = (1, 1, ...) ∈ l∞ , with kx0 k∞ = 1.

    c.     Let φ be a continuous linear functional on l∞ that satisfies
(1) and (2), and let ψ be the continuous linear functional that satisfies
(3). By Lemma 15.5, for all x ∈ l∞ we can write ψ as
                                     ∞
                                     X
                           ψ (x) =         pt xt ,
                                     t=1
282          16 / Applications of Equilibrium Theory

for pt ∈ R for all t. Note that if, for any t, pt < 0, then ψ (y ∗ )
cannot satisfy (2), for then we could set yt = −∞ and increase
profits. Hence we must have pt ≥ 0 for all t. If there exists at t such
that pt > p1 , then consider the allocation x0 constructed from x∗ by
reducing xt by some small amount, and increasing x1 by this amount.
This is aﬀordable, and increases utility, which contradicts (1). Now
suppose that p1 > pt for some t ≥ 2, and consider the allocation
x0 constructed from x∗ by increasing xt by some small amount and
decreasing x1 by a smaller amount such that ψ (x0 ) = ψ (x∗ ). This
is possible, and as
                         £      ¤        £      ¤
                     exp −21 x∗1 = exp −2t x∗t ,
for all t, this increases utility, a contradiction of (1). Hence, we
must have pt = p1 for all t. But then ψ is not a continuous linear
functional on l∞ unless pt = 0 for all t.

    d.     We first establish that, if the commodity space is l1 , then
Y has a non-empty interior. Towards a contradiction, assume that
there exists a y ∈ int (Y ) . Then there exists an open neighborhood
of y, say B (y, ε) , that is a subset of Y. We produce a contradiction
by exhibiting an element of B (x, ²) that is not in Y.
    As y ∈ l1 , there exists an N1 such that, for all n ≥ N1 , |yn | < ²/4.
Further, there exists an N2 such that, for all n ≥ N2 , 2−n < ²/4. Set
N = max {N1 , N2 } , and define z ∈ l1 such that zn = yn for all n 6= N
and zN = yN + ²/2. Then z ∈ B (x, ²) , as
                                            ∞
                                            X
                      kx − zk1 =                  |xn − zn |
                                            n=1
                                     = ²/2.
But, z ∈
       / Y , as
                                      ²   ²
                       zN = yN +        > > 2−N .
                                      2   4
    To show that (x∗ , y∗ , p) is a competitive equilibrium, note first
that (x∗ , y ∗ ) is obviously feasible. Second, note that if y ∈ Y, then
yt ≤ 2−t for all t = 1, 2, ..., and hence
                      ∞
                      X             ∞
                                    X              ∞
                                                   X
            φ (y) =         cyt ≤         c2−t =         cyt∗ = φ (y∗ ) ,
                      t=1           t=1            t=1
            16 / Applications of Equilibrium Theory              283

which establishes (1). Finally, let x ∈ X such that u (x) > u (x∗ ) .
That is,                  ¡      ¢
              X∞                     X∞
                  1 − exp −2t xt         1 − exp (−1)
                          t
                                   ≥                  .
              t=1
                         2           t=1
                                              2t

We will show that this implies that φ (x) > φ (x∗ ) . As an input to
this result, note that for all z ∈ R we have that the function

                    g (z) = z + exp (1 − z) − 2,

is non-negative. This follows from the fact that

                        g 0 (z) = 1 − exp (1 − z) ,

and
                          g 00 (z) = exp (1 − z) ,
so that g attains its global minimum at z = 1, where g (1) = 0. Then
                  ∞
                  X              ∞ t
                                 X 2 xt
       p.x = c          xt = c
                                       2t
                  t=1            t=1
                   ∞           ¡          ¢
                  X     2 − exp 1 − 2t xt
            ≥ c
                               2t
                  t=1
                   ∞                      ¡      ¡       ¢¢
                  X 2 − exp (1) + exp (1) 1 − exp −2t xt
            = c
                t=1
                                       2t
                  ∞
                  X 2 − exp (1) + exp (1) (1 − exp (−1))
            > c
                  t=1
                                            2t
                  X∞
                      1
            = c        t
                         = p.x∗ ,
                  t=1
                      2

where the second line follows the result proven immediately above,
and the fifth line from the fact that u (x) > u (x∗ ) by assumption.
17 Fixed-Point Arguments

Exercise 17.1

   For all x ∈ X the agent’s problem is to choose n ∈ [0, L) to
maximize               Z    ·          ¸
                              xnp (x)      ¡     0
                                                   ¢
              −H (n) + V                 π  x, dx    .
                               p (x0 )
As n → L this objective goes to −∞, while at n = 0 the objective
is finite valued and has a positive slope. Further, by the strict
convexity of H and the strict concavity of V this objective is strictly
concave in n. Hence this problem has a unique solution on [0, L) .
     The first-order condition for an optimum is
                                                   
              Z            ·         ¸
                 xp (x) 0 xnp (x)        ¡        ¢ > 0      if n = L
  −H 0 (n) +             V             π   x, dx0
                                                     = 0 if n  ∈ (0, L)
                 p (x0 )     p (x0 )               
                                                     <0      if n = 0.

As H 0 (L) = +∞ and as V 0 [xLp (x) /p (x0 )] is finite and positive for
all (x, x0 ), n = L cannot be a solution. As H 0 (0) = 0 and V 0 (0) > 0,
n = 0 cannot be a solution. Hence the choice of n satisfies the first
order condition with equality, and for all x ∈ X the optimum choice
n (x) is strictly positive.


Exercise 17.2

    a.    For f ∈ F, as G is continuous and π satisfies the Feller
property, T f is continuous. As G takes values in D and D is convex,
T f : X → D. Therefore, all we have to show is that T f is bounded.

284
                   17 / Fixed-Point Arguments                        285

But this follows from the fact that f is bounded, G is continuous and
X is bounded.

    b.    The proof of completeness follows that of Theorem 3.1
closely. The only extra step is involved in the construction of the
candidate limit function f. Fix x ∈ X and let {fn } by a Cauchy
sequence in F. The sequence of real numbers {fn (x)} satisfies

       |fn (x) − fm (x)| ≤ sup |fn (y) − fm (y)| = kfn − fm k .
                            y∈X

As the sequence of functions {fn } is Cauchy, the sequence of real
numbers {fn (x)} is also a Cauchy sequence in D. As D is a closed
subset of R by the result of Exercise 3.6b., this sequence converges to
a point, call it f (x) , in D. For all x ∈ X define f (x) in this fashion
as our candidate limit function. The rest of the proof follows that
of Theorem 3.1.


Exercise 17.3
                                                £           ¤
   Note that in this case with G (x, x0 , y) = φ x0 ζ −1 (y) we have
that                              £           ¤
                    ¡    0
                            ¢ φ0 x0 ζ −1 (y) x0
                 G3 x, x , y =                   .
                                     ζ 0 (y)
Now limy→0 ζ 0 (y) = 0 while limy→0 ζ −1 (y) = 0. But φ0 (0) > 0 and
so there exist (x, x0 , y) such that |G3 (x, x0 , y)| > 1.


Exercise 17.4

     a.     As the logarithmic and exponential functions are continu-
ous, π satisfies the Feller property, G is continuous and g ∈ F̂ , we
have that T̂ g is continuous. As G is continuous and X is bounded,
T̂ g is bounded. Finally, note that T̂ g : X → D̂ as G takes on values
in D which is convex. Hence, T̂ : F̂ → F̂ .

   b.      Note that as D is closed and convex, so is D̂. The proof
then follows part b. of Exercise 17.2 above.
286                17 / Fixed-Point Arguments

Exercise 17.5

    a.    We consider the following problem. Consider the diﬀer-
ential equation and boundary condition
                           dx (t)
                                  = f [x (t)] ,
                            dt
for t ≥ 0 with x (0) = c. Show that if f is continuous, then there
exists a t0 ∈ (0, 1] such that this equation has a solution on [0, t0 ] .
    For some t0 > 0, define the operator T : C ([0, t0 ]) → C ([0, t0 ])
by                               Z    t
                    (T x) (t) =           f (x (s)) ds + c.
                                  0
We will use Schauder’s Theorem to show that this operator has a
fixed point in C ([0, t0 ]) for some t0 ∈ (0, 1] .
    As f is continuous, for all ε > 0 there exists a δ > 0 such that
|z − c| ≤ δ implies |f (z)| ≤ |f (c)| + ε. Choose
                                  ½                ¾
                                           δ
                       t0 = min 1,                   ,
                                      |f (c)| + ε
so that t0 {|f (c)| + ε} ≤ δ. Let D be the closed δ−ball about zero
in C ([0, t0 ]). Then clearly D is closed, bounded, and convex, and
the result will be proven if we can establish that T (D) ⊂ D, that T
is continuous, and that T (D) is equicontinuous.
    To see that T (D) ⊂ D, let x ∈ D, so that |x (t) − c| ≤ δ for all
t ∈ [0, t0 ] . But then
                                     ¯Z t           ¯
                                     ¯              ¯
                   |(T x) (t) − c| = ¯ f (x (s)) ds¯¯
                                     ¯
                                             0
                                  ≤ t sup |f (x (s))|
                                            s∈[0,t0 ]
                                  ≤ t {|f (c)| + ε} .
Hence, we have that
                  kT x − ck =         sup |(T x) (t) − c|
                                   t∈[0,t0 ]
                              ≤ t0 {|f (c)| + ε}
                              ≤ δ,
                      17 / Fixed-Point Arguments                      287

so that T (D) ⊂ D.
    The continuity of T follows from the fact that f is continuous,
and that the integral preserves continuity. To see that T (D) is
equicontinuous, note that for any φ > 0, we can choose κ such that
                                       φ
                             κ<               ,
                                  |f (c)| + ε
where ε was defined above in the construction of D. Then, for any
t, t0 ∈ [0, t0 ] such that |t0 − t| < κ, and any T x ∈ T (D) , we have that
                                      ¯Z                 Z t0             ¯
      ¯                   ¡ 0 ¢¯      ¯ t                                 ¯
                                      ¯
      ¯(T x) (t) − (T x) t ¯ = ¯ f [x (s)] ds −                           ¯
                                                              f [x (s)] ds¯
                                      ¯ 0                 0               ¯
                                      ¯Z 0             ¯
                                      ¯ t              ¯
                                      ¯                ¯
                                  = ¯      f [x (s)] ds¯
                                      ¯ t              ¯
                                      ¯0    ¯
                                  ≤ ¯t − t¯ sup |f [x (s)]|
                                          s∈[t,t0 ]
                               ¯      ¯
                             ≤ ¯t0 − t¯ {|f (c)| + ε}
                             ≤ κ {|f (c)| + ε}
                             < φ,

where the second inequality follows from the construction of D.
Hence, T (D) is equicontinuous.

    b.     Obviously, x (t) = 0 is one solution.      To find another, if
x 6= 0 we can write rewrite this equation as
                                  1
                              x− 2 dx = dt.

Integrating both sides and using the initial condition we get that
                                  µ ¶2
                                    t
                          x (t) =        ,
                                    2
is also a solution.

   c.     Compared to Exercise 3.10 (not Exercise 3.8) we have that
our function does not satisfy the Lipschitz condition. For if x > 0
288                17 / Fixed-Point Arguments

we have that               ¯ 1   ¯
                           ¯ 2   ¯
                           ¯x − 0¯          1
                                      = x− 2 ,
                            |x − 0|
which is unbounded as x goes to zero.


Exercise 17.6

   Let {fn } be a sequence of functions in F converging to f and fix
ε > 0. Then

         kT fn − T f k
      = sup |T fn (x) − T f (x)|
        x∈X
            ¯Z                                               ¯
            ¯ © £             ¡ 0 ¢¤   £    ¡ 0 ¢¤ª ¡       ¢¯
            ¯
      = sup ¯           0                0
                  G x, x , fn x − G x, x , f x             0 ¯
                                                   π x, dx ¯
        x∈X
            Z
               ¯ £          ¡ ¢¤     £     ¡ ¢¤¯ ¡       ¢
      ≤ sup ¯G x, x0 , fn x0 − G x, x0 , f x0 ¯ π x, dx0 .
         x∈X

But as G is uniformly continuous in its third argument, there exists
a δ > 0 such that |fn (x0 ) − f (x0 )| < δ implies that
              ¯ £           ¡ ¢¤        £      ¡ ¢¤¯
              ¯G x, x0 , fn x0 − G x, x0 , f x0 ¯ < ε,

for all x, x0 ∈ X. Then we have that for all ε > 0 there exists a δ > 0
such that if kfn − f k < δ we have kT fn − T f k < ε and hence T is
continuous.


Exercise 17.7

   We will establish that Schauder’s Theorem applies to the operator
T defined by
                              ·Z                      ¸
                           −1
                                  ¡ 0 ¡ 0 ¢¢ ¡     0
                                                     ¢
             (T n) (x) = ζ       φ x n x π x, dx ,

for all x ∈ X, for an appropriately defined set of functions F.
                   17 / Fixed-Point Arguments                     289

    Note that the set of continuous and bounded functions on X
taking values in [0, L) is not a closed subset of C (X) . However,
for a given x the function φ (xn) is non-negative and is bounded for
n ∈ [0, L) . As X is bounded and ζ −1 is continuous, there exists a
closed set D ⊂ [0, L) such that we can restrict attention to the set
F of continuous and bounded functions on X that take values in D.
Let B be a bound on D. This set F is non-empty, closed, bounded
and convex. That T is continuous follows from the fact that both φ
and ζ −1 are continuous functions and π satisfies the Feller property.
    To show that T (F ) is equicontinuous, fix ε > 0. As ζ −1 is
continuous, for every ε > 0 there exists an ¯ −1φ > 0 such that ¯ for
all z, z ∈ R+ with |z − z | < φ we have ζ (z) − ζ (z )¯ < ε.
         0                  0               ¯            −1   0

Further, by the argument of Lemma 17.5, for ever φ > 0 there exists
a δ > 0 such that for any x, xe ∈ X with kx − xek < δ we have
       ¯Z                         Z                         ¯
       ¯    ¡ 0 ¡ 0 ¢¢ ¡        ¢     ¡ 0 ¡ 0 ¢¢ ¡         ¢¯
       ¯ φ x n x π x, dx − φ x n x π x
                              0
                                                    e, dx ¯¯ < φ,
                                                         0
       ¯

for all n ∈ F, where the φ and δ are independent of the function n.
Combining these results we get that T (F ) is equicontinuous.
    Combining all of the above and using Schauder’s Theorem gives
the desired result.


Exercise 17.8
           ³ ´       n             o
  a.     G e  z = Pr θ ≤ e
            θ|e            θ|z = ze . But
                                    n                  o
            n            o      Pr θ ≤ e   θ and z = ze
          Pr θ ≤ e
                 θ|z = ze =
                                       Pr {z = ze}
                                Z eθ
                                     g (s) ψ (se
                                               z)
                            =                     ds.
                                 θ       π (e
                                            z)
Hence,
                      ³ ´        ³ ´
                     g θ̃|z̃ = G0 θ̃|z̃
                                ³ ´ ³ ´
                               g θ̃ ψ θ̃z̃
                             =             .
                                   π (z̃)
290                17 / Fixed-Point Arguments

Since ψ and g are continuous, g (.|z) is continuous for each z ∈intZ.

   b.       By the result of Exercise 12.7b., it is suﬃcient to show
that if f is continuous and bounded on Θ, then
                              Z
                 (T f ) (z) =    f (θ) G (dθ|z)
                              Z
                            =    f (θ) g (θ|z) dθ
                              Z
                                       g (θ) ψ (θz)
                            =    f (θ)              dθ,
                                           π (z)
is continuous and bounded on Θ. But this follows from the fact that
ψ and π are continuous.


Exercise 17.9

    As noted in the text, the proof strategy follows that of Proposi-
tion 2 closely. As in that proof, for k = 1, 2, ... define
                            ©                       ª
                  εk = min ε > 0 : ζ −1 (ε) = kε ,

which is a strictly decreasing sequence. Note that
                                  ·      ¸
                             θ0     θ θ̄
                                ∈     ,     ,
                             θ̃     θ̄ θ
                                                   ³            ´
and that ζ −1 is bounded above by L so that for all θ0 , θ̃, z 0 we have
that                µ             ¶           µ ¶
               θ0 0 θ0 −1                θ 0 θ̄
                  V      ζ (f (z)) ≥ V           L ≡ C.
               θ̃     θ̃                 θ̄    θ
   Pick some K > 1/C and consider functions f : Z → [εK , +∞) .
We have that
       µ 0           ¶                      µ 0            ¶
         θ −1            θ0 −1            0 θ −1
     φ      ζ (f (z))  =      ζ (f (z)) V         ζ (f (z))
         θ̃               θ̃                   θ̃
                                         µ ¶
                         θ −1              θ̄
                       ≥     ζ (εK ) V 0      L ,
                         θ̄                θ
                       17 / Fixed-Point Arguments                          291

as ζ −1 is increasing. Hence
                   µ 0           ¶
                     θ −1
                 φ      ζ (f (z))  ≥ ζ −1 (εK ) C
                     θ̃
                                   = KεK C > εK .

    Define the closed, convex set D = [εK , +∞) ⊂ R++ and let
F be the set of bounded continuous functions f : Z → D. The
above argument establishes that T f : Z → D; the continuity and
boundedness of T f follows as before.
    Take ³logs and define
                      ´   T̂ and F̂ as above. Fix g and h in F̂ and
            0     0
define w θ , θ̃, z , z as
                                ³ 0                 ´
                                 θ −1
                            φ    θ̄
                                    ζ (exp h (z 0 ))
        R R R         ³ 0                 ´    ¡      ¢        ³      ´,
                       θ −1
        Θ Z      Θφ    θ̄
                          ζ (exp h (u))       G dθ0 |u π (du) G dθ̃|z

which is positive and satisfies
      Z Z Z        ³               ´ ¡        ¢ ¡ ¢ ³        ´
                 w θ0 , θ̃, z 0 , z G dθ0 |z 0 π dz 0 G dθ̃|z = 1,
         Θ   Z   Θ
                          ³ ´         ³ ´
for all z ∈ Z. Therefore, T̂ g (z) − T̂ h (z) equals the diﬀerence
between
     ½Z Z Z      µ 0                ¶                        ´¾
                  θ −1 ¡      ¡ 0 ¢¢   ¡ 0 0¢ ¡ 0¢ ³
  ln           φ     ζ   exp g z      G dθ |z π dz G dθ̃|z      ,
        Θ Z Θ     θ̃
and
       ½Z Z Z        µ 0                ¶                      ´¾
                      θ −1 ¡      ¡ 0 ¢¢   ¡ 0 0¢ ¡ 0¢ ³
− ln               φ     ζ   exp h z      G dθ |z π dz G dθ̃|z    ,
         Θ   Z   Θ    θ̃
which can be rearranged to give
             ½Z Z Z         ³               ´
          ln              w θ0 , θ̃, z 0 , z ×
             ³ 0Θ Z Θ               ´                        
           φ θθ̃ ζ −1 (exp g (z 0 ))      ¡ 0 0¢ ¡ 0¢ ³     ´
             ³ 0                     ´ G dθ |z π dz G dθ̃|z    ,
           φ θθ̃ ζ −1 (exp h (z 0 ))                         
292                   17 / Fixed-Point Arguments

which is no greater than
                                 ³ 0                          ´ 
                                 φ θ ζ −1 (exp g (z 0 )) 
                   sup          ln      ³ θ̃0                   ´
                 θ0 ,θ̃,z 0 ,z
                                     φ θθ̃ ζ −1 (exp h (z 0 )) 
                               ½ ½ µ 0                          ¶¾
                                         θ −1 ¡           ¡ 0 ¢¢
             = sup ln φ                       ζ    exp g z
                 θ0 ,θ̃,z 0 ,z           θ̃
                           ½ µ 0                         ¶¾¾
                                  θ −1 ¡           ¡ 0 ¢¢
                  − ln φ             ζ     exp h z              .
                                  θ̃
   Note that for all z 0 fixed, g (z 0 ) and h (z 0 ) are numbers. Hence,
by the Mean Value Theorem there exists a number λ ∈ (0, 1) such
that if yb = λg (z 0 ) + (1 − λ) h (z 0 )
            ½ µ 0                      ¶¾     ½ µ 0                   ¶¾
                θ −1 ¡           ¡ ¢¢                θ −1 ¡      ¡ ¢¢
        ln φ        ζ      exp g z 0      − ln φ         ζ  exp h z 0
                 θ̃                                   θ̃
                                   ³           ´
         θ0 −10                   0 θ0 −1
         θ̃
            ζ (exp yb) exp ybφ θ̃ ζ (exp yb) ¡ ¡ ¢            ¡ ¢¢
   =                   ³ 0              ´            g z0 − h z0 ,
                     φ θθ̃ ζ −1 (exp yb)
whihc can be rearranged to give
                  ³                ´
 θ0 −1           0 θ0 −1
 θ̃
    ζ  (exp b
            y ) φ    θ̃
                        ζ  (exp b
                                y )  exp ybζ −10 (exp yb) ¡ ¡ 0 ¢ ¡ ¢¢
          ³ 0              ´              −1               g z − h z0 .
        φ θθ̃ ζ −1 (exp yb)            ζ (exp yb)

But from Proposition 2 we know that for all y = exp yb ∈ D,
                                 yζ −10 (y)
                                            ≤ 1,
                                  ζ −1 (y)
while by Assumption 17.2 we have that
                      ¯ 0            ³           ´¯
                      ¯ θ ζ −1 (y) φ0 θ0 ζ −1 (y) ¯
                      ¯ θ̃              θ̃        ¯
                      ¯         ³           ´     ¯ ≤ β,
                      ¯           θ0 −1           ¯
                      ¯      φ θ̃ ζ (y)           ¯
        ³           ´
for any θ0 , θ̃, z 0 . Hence
          ³ ´             ³ ´                    © ¡ ¢   ¡ ¢ª
           Tbg (z) − Tbh (z) ≤ β sup g z 0 − h z 0
                                               z0
                                       ≤ kg − hk .
                   17 / Fixed-Point Arguments                      293

Repeating the analysis with the roles of g and h reversed gives
                      °         °
                      °b        °
                      °T g − Tbh° ≤ kg − hk .

Since g and h were arbitrary elements of Fb, it follows that Tb is a
contraction of modulus β on Fb. Hence by the contraction mapping
theorem Tb has a unique fixed point g ∗ in Fb.


Exercise 17.11

   For all θ0 , θ̃ ∈ Θ fixed, we saw in Exercise 17.7 above that
                             µ 0            ¶
                               θ −1 ¡ ¡ 0 ¢¢
                           φ      ζ   f z     ,
                               θ̃
was bounded. As Θ is compact, there ³       exists a ´compact interval
D ⊂ R+ such that for all f and for all θ0 , θ̃, z 0 , φ takes values
in D. Let F ⊂ C (Z) be the subset of continuous and bounded
functions f : Z → D.
    Let f ∈ F. Clearly, T f : Z → D and is bounded. That it is
continuous comes from the continuity of φ and ζ −1 and the fact that
the uniform distribution satisfies the Feller property.
    To see that the operator T is continuous, let {fn } be a sequence
of functions in F converging to f and fix ε > 0. Then

         kT fn − T f k
     = sup |T fn (x) − T f (x)|
       x∈X
           ¯Z                                               ¯
           ¯ © £             ¡ 0 ¢¤   £    ¡ 0 ¢¤ª ¡       ¢¯
           ¯
     = sup ¯            0               0
                 G x, x , fn x − G x, x , f x             0 ¯
                                                  π x, dx ¯
       x∈X
           Z
              ¯ £          ¡ ¢¤     £     ¡ ¢¤¯ ¡       ¢
     ≤ sup ¯G x, x0 , fn x0 − G x, x0 , f x0 ¯ π x, dx0 .
         x∈X

But as G is uniformly continuous in its third argument, there exists
a δ > 0 such that |fn (x0 ) − f (x0 )| < δ implies that
              ¯ £           ¡ ¢¤        £      ¡ ¢¤¯
              ¯G x, x0 , fn x0 − G x, x0 , f x0 ¯ < ε,
294                17 / Fixed-Point Arguments

for all x, x0 ∈ X. Then we have that for all ε > 0 there exists a δ > 0
such that if kfn − f k < δ we have kT fn − T f k < ε and hence T is
continuous.


Exercise 17.12

    There are four cases to consider. First, consider the case where
z ≥ x/θ, and z ≥ x/θ. Then we have that θ ≤ x/z ≡ b (z) ≤ θ, and
further that x ≥ zθ. In this case, we have
                                  n         x   o
                 G (θ∗ |z) = Pr θ ≤ θ∗ | = z
                                  nx        θ     o
                                          ∗
                           = Pr       ≤ θ |x ≥ zθ
                                    z
                               θ∗ z − θz
                           =
                                x − θz
                                θ∗ − θ
                           =
                               x/z − θ
                                θ∗ − a (z)
                           =                 .
                               b (z) − a (z)

   Next consider the case where z ≤ x/θ, and z ≤ x/θ. Then we
have that θ ≥ x/z ≡ a (z) ≥ θ, and further that x ≤ zθ. In this case,
we have
                                  n         x   o
                G (θ∗ |z) = Pr θ ≤ θ∗ | = z
                                  nx        θ     o
                                          ∗
                          = Pr        ≤ θ |x ≤ zθ
                                    z
                               θ∗ z − x
                          =
                               θz − x
                               θ∗ − x/z
                          =
                               θ − x/z
                                θ∗ − a (z)
                          =                  .
                               b (z) − a (z)

   The remaining cases, that x/θ ≤ z ≤ x/θ and that x/θ ≤ z ≤
x/θ, are proven analogously.
                     17 / Fixed-Point Arguments                        295

Exercise 17.13

   By Assumption 17.1, V is twice continuously diﬀerentiable, so
that φ0 is continuous. The function ζ −1 is bounded and by As-
sumption 17.5, Θ is compact. Hence, for all f ∈ F there exists a
Bθ < +∞ that is independent of f such that
       ¯ ³ ´¯
       ¯ 0     ¯
       ¯φf θ̃ ¯
       ¯Z Z       µ 0           ¶                                ¯
       ¯         0 θ −1
                        £ ¡ 0 ¢¤ θ0 −1 £ ¡ 0 ¢¤ ¡ 0 0 ¢ ¡ 0 ¢¯
   = ¯ ¯      φ       ζ  f z             f z G dθ |z π dz ¯¯
                                     2ζ
          Z Θ      θ̃             θ̃
   < Bθ .
       ³ ´
But φ0f θ̃ continuous in θ̃ and Θ compact, implies that there exists
a B < +∞ such that         ¯ ³ ´¯
                           ¯ 0    ¯
                           ¯φf θ̃ ¯ < B,

for all f ∈ F and all θ̃.


Exercise 17.14

    a.      As ρ (z) = z/η (z) , we have
                                     ·            ¸
                       0         1       zη 0 (z)
                      ρ (z) =         1−            .
                               η (z)      η (z)

Therefore, ρ0 (z) > 0 if and only if zη 0 (z) /η (z) < 1.

    b.      As η 0 [H 0 + ηH 00 ] = J 0 we have

            zJ 0 (z)   zη 0 (z) [H 0 (η (z)) + η (z) H 00 (η (z))]
                     =                                             .
             J (z)      η (z)              H 0 (η (z))

Note that
                    [H 0 (η (z)) + η (z) H 00 (η (z))]
                                                       > 1,
                               H 0 (η (z))
and so zη 0 (z) /η (z) < 1 if zJ 0 (z) /J (z) < 1.
296                     17 / Fixed-Point Arguments

   c.       As φ (y) = yV 0 (y) we have

                            yφ (0 y)     V 0 (y) + yV 00 (y)
                                       =
                             φ (y)             V 0 (y)
                                              yV 00 (y)
                                       = 1+ 0           .
                                               V (y)

By Assumptions 17.1 and 17.4, 0 ≥ yV 00 /V 0 ≥ −1, so

                                           yφ (0 y)
                                   0≤               ≤ 1.
                                            φ (y)
   Now                        · 0       µ        ¶¸
                    0          θ ¡ 0 ¢ 0 θ0 ¡ 0 ¢
                   ξ (θ) = −E     η z φ     η z     ,
                               θ          θ
so that                                 h 0              ³ 0          ´i
                                           θ     0   0     θ     0
                        0
                   θξ (θ)          −E      θ η (z ) φ      θ η (z )
                          =                 h ³ 0         ´i               ,
                    ξ (θ)                  E φ θθ η (z 0 )

and hence
                                            θξ 0 (θ)
                                   −1 ≤              ≤ 0.
                                             ξ (θ)

   d.         Note that
              − [b0 (z) − a0 (z)]         ξ (b (z)) b0 (z) − ξ (a (z)) a0 (z)
  J 0 (z) =                       J (z) +                                     ,
                b (z) − a (z)                        b (z) − a (z)

so that
 zJ 0 (z)   − [b0 (z) z − a0 (z) z] ξ (b (z)) b0 (z) z − ξ (a (z)) a0 (z) z
          =                        +             R b(z)                     .
  J (z)         b (z) − a (z)                           ξ (θ) dθ
                                                               a(z)

   There are four cases to consider. One, if a0 (z) = b0 (z) = 0 then
we have J 0 (z) = 0. Two, if a0 (z) z = −a (z) and b0 (z) z = −b (z) ,
then we need to show that
              zJ 0 (z)     ξ (b (z)) b (z) − ξ (a (z)) a (z)
                       =1−           R b(z)                  ≤ 1.
               J (z)                        ξ (θ) dθ
                                              a(z)
                   17 / Fixed-Point Arguments                         297

The result in part c. implies that
                                   ·             ¸
                d                       θξ 0 (θ)
                   (θξ (θ)) = ξ (θ) 1 +            ≥ 0,
                dθ                       ξ (θ)
and so θξ (θ) is an increasing function. Hence, the second term
above is positive and the desired result holds.
   Three, if a0 (z) z = −a (z) and b0 (z) = 0, we have to show that
             zJ 0 (z)      −a (z)       ξ (a (z)) a (z)
                      =               + R b(z)          ≤ 1,
              J (z)     b (z) − a (z)          ξ (θ) dθ
                                          a(z)

or
                    ξ (a (z)) a (z)       b (z)
                    R b(z)          ≤               .
                           ξ (θ) dθ   b (z) − a (z)
                      a(z)
But note that
                                                 Z b(z)
                                      1
           ξ (a (z)) a (z) ≤                              θξ (θ) dθ
                                b (z) − a (z)     a(z)
                                                 Z b(z)
                                    b (z)
                           ≤                              ξ (θ) dθ,
                                b (z) − a (z)     a(z)

which holds since θξ (θ) is an increasing function.
   Four, if a0 (z) = 0 and b0 (z) z = −b (z) , we have to show that
             zJ 0 (z)       b (z)       ξ (b (z)) b (z)
                      =               − R b(z)          ≤ 1,
              J (z)     b (z) − a (z)          ξ (θ) dθ
                                          a(z)

or
                    ξ (b (z)) b (z)       a (z)
                    R b(z)          ≥               .
                                      b (z) − a (z)
                     a(z) ξ (θ) dθ
But note that
                                                Z b(z)
                                      1
           ξ (b (z)) b (z) ≥                              θξ (θ) dθ
                                b (z) − a (z)    a(z)
                                                Z b(z)
                                    a (z)
                           ≥                              ξ (θ) dθ,
                                b (z) − a (z)     a(z)

which holds since θξ (θ) is an increasing function.
18 Equilibria in Systems
   with Distortions

Exercise 18.1

    We impose the assumptions of Exercise 6.1 on the production
and utility functions. These are suﬃcient to ensure interiority of
solutions.    Given a k0 , define the sequence {kt } recursively by
kt+1 = g (kt ) . Necessary and suﬃcient conditions for the optimal-
ity of solutions to the planning problem are then given by the Euler
equation
                                     £                  ¤
         U 0 [f (kt ) − kt+1 ] = βU 0 f 0 (kt+1 ) − kt+2 f 0 (kt+1 ) ,

and transversality condition

                 lim β t U 0 [f (kt ) − kt+1 ] f 0 (kt ) kt = 0.
                 t→∞

The result will be proven if we can establish that the solution to
the individual consumers problem, evaluated at the market clearing
conditions, xt = kt , imply these equations.
    Given x0 , define the sequence {xt } recursively by

                           xt+1 = G (xt , kt ; g) .

The Euler equation for a consumer is
       £                                             ¤
    U 0 f (kt ) − f 0 (kt ) kt + xt f 0 (kt ) − xt+1
         £                                                     ¤
  = βU 0 f (kt+1 ) − f 0 (kt+1 ) kt+1 + xt+1 f 0 (kt+1 ) − xt+2 f 0 (kt+1 ) ,

298
            18 / Equilibria in Systems with Distortions                          299

while the transversality condition is
               £                                            ¤
    lim β t U 0 f (kt ) − f 0 (kt ) kt + xt f 0 (kt ) − xt+1 f 0 (kt ) xt = 0.
     t→∞

Imposing that xt = kt for all t, it is easily seen that this reduces to
the Euler equation and transversality condition of the social planner.
This implies that G (k, k; g) = g (k) and V (k, k; g) = v (k) .


Exercise 18.2

    Note that transfer income is not taxed. Given aggregate capital
holdings k, the after tax (and transfer) income of an agent with
capital x is the sum of wages, rents and transfers, or
                  £              ¤
         (1 − α) f (k) − kf 0 (k) + (1 − α − θ) xf 0 (k) + θkf 0 (k)
      = (1 − α) f (k) + (1 − α − θ) (x − k) f 0 (k) .

Assume that the aggregate savings function h is continuous and de-
note by H (x, k; h) the optimal policy function of an individual. The
functional equation for the individuals problem is then

W (x, k; h) = max {U [(1 − α) f (k) +
                      y
                                                    ¤                   ª
                     (1 − α − θ) (x − k) f 0 (k) − y + βW (y, h (k) ; h) ,

which has first-order condition
          £                                                         ¤
       U 0 (1 − α) f (k) + (1 − α − θ) (x − k) f 0 (k) − H (x, k; h)
     = βW1 (H (x, k; h) , h (k) ; h) ,

and envelope condition

      W1 (x, k; h) = (1 − α − θ) f 0 (k) U 0 [(1 − α) f (k) +
                                                                     ¤
                            (1 − α − θ) (x − k) f 0 (k) − H (x, k; h) .

In equilibrium, x = k and H (x, k; h) = h (k) , and writing φ (k) =
W1 (k, k; h) we get

             U 0 [(1 − α) f (k) − h (k)] = βφ (h (k))
             φ (k) = (1 − α − θ) f 0 (k) U 0 [(1 − α) f (k) − h (k)] .
300        18 / Equilibria in Systems with Distortions

    To see the equivalence with equations (9) and (10), write φ (k) =
[(1 − α − θ) / (1 − α)] w0 (k) and substitute β̂ = (1 − α − θ) / (1 − α)
and we have exactly equations (9) and (10) for a production function
equal to (1 − α) f (k) .
    With the envelope and first-order conditions equivalent, the Euler
equations implied by the two problems are the same. It is easily
verified that transversality conditions are the same also. Hence the
solutions to both problems are the same.


Exercise 18.3

     Let hn be a sequence of functions in Dλ (Iε ) converging to h, and
fix γ > 0. By the argument of Proposition 2, for all k, z and z 0 in
Iε , there exists an m2 such that
                   ¯            ¡      ¢¯      ¯        ¯
                   ¯H (k, z) − H k, z 0 ¯ ≤ m2 ¯z − z 0 ¯ ,

so that
      ¯ ¡          ¢   ¡         ¢¯      ¯                ¯
      ¯H k, h2n (k) − H k, h2 (k) ¯ ≤ m2 ¯h2n (k) − h2 (k)¯
                                       ≤ m2 λ |hn (k) − h (k)| .

Then setting δ < γ/ (m2 λ) , we have that if khn − hk < δ, then
                              ¯ ¡          ¢     ¡        ¢¯
       kT hn − T hk = sup ¯H k, h2n (k) − H k, h2 (k) ¯
                           k∈Iε
                       ≤ m2 λ |hn (k) − h (k)|
                       ≤ m2 λδ
                       < γ,

and hence T is continuous.


Exercise 18.4

   a.      Denote by DλND (Iε ) the space of non-decreasing functions
that are also in Dλ (Iε ) . Let h and h0 be elements of DλND (Iε ) such
           18 / Equilibria in Systems with Distortions                301

that h0 ≥ h. We aim to show that T h0 ≥ T h. For any k ∈ Iε , we
have
               ¡ 0¢            ¡         ¢
                T h (k) = H k, h02 (k)
                               ³     ³ 0    ´´
                          ≥ H k, h h (k) ,

from the fact that H2 > 0 on Iε × Iε , and h02 (k) ≥ h (h0 (k)) . As h
is non-decreasing, we have h (h0 (k)) ≥ h2 (k) so that
                  ¡ 0¢              ³    ³ 0     ´´
                   T h (k) ≥ H k, h h (k)
                                    ¡        ¢
                             ≥ H k, h2 (k)
                                = (T h) (k) ,
or T is monotone on DλND (Iε ) .
     Note that in order to apply the above results, we also need to
show that T : DλND (Iε ) → DλND (Iε ) . Let h ∈ DλND (Iε ) and consider
k 0 ≥ k. Then we have
                         ¡ ¢           ¡      ¡ ¢¢
                    (T h) k0 = H k0 , h2 k 0
                                       ¡        ¢
                              ≥ H k, h2 (k)
                                  = (T h) (k) ,
where the inequality follows from the fact that h is non-decreasing,
and both H1 and H2 are strictly positive on Iε × Iε .

   b.       By construction, if h ∈ DλND (Iε ) , then h̄ ≥ h ≥ h. Hence,
as T : DλND (Iε ) → DλND (Iε ) , we have h̄ ≥ T h̄ and T h ≥ h.
Then Theorem 17.7 applies (note that DλND (Iε ) is a closed subset of
Dλ (Iε )), and hence lim T n h̄ and lim T n h are in Dλ (Iε ) and are fixed
points of T.


Exercise 18.5

    To see that T is well-defined, note that if h ∈ F, then by (6), there
exists a e
         k > 0 (possibly with e k ≥ k ∗ ), such that ψ (k) − h (k) > 0.
                        e
Hence, by (3), for y ≥ k,
                   β (1 − θ) f 0 (y) U 0 [ψ (y) − h (y)] ,
302          18 / Equilibria in Systems with Distortions

is finite and decreasing in y. For y approaching zero, we have

      β (1 − θ) f 0 (y) U 0 [ψ (y) − h (y)] ≥ β (1 − θ) AU 0 [ψ (0)]
                                             > U 0 [ψ (0)] ,

where the first inequality comes from Assumption 18.2 and the last
inequality comes from Assumption 18.1d.
    Note that, for any k

                              U 0 [ψ (k) − y] ,

is strictly increasing in y with limit, as y approaches ψ (k) , of +∞,
and limit, as y approaches zero, of U 0 [ψ (k)] . As ψ (k) is non-
decreasing in k, and U is strictly concave, we have

                            U 0 [ψ (k)] ≤ U 0 (0) .

Hence, for any k, (T h) (k) exists, and the operator T is well-defined.
    To see that T : F → F, we will verify that each of the properties
of F are inherited. If h ∈ F, then T h is continuous by the implicit
function theorem, using the continuity of U 0 , f 0 , and f (and hence
ψ). The rest are verified in turn.

   0 ≤ (T h) (k) ≤ ψ (k) for all k ∈ K : fix k ∈ K and note that for
h ∈ F, U 0 [ψ (k) − y] is continuous in y with

                          lim U 0 [ψ (k) − y] = ∞,
                         y→ψ(k)

and U 0 [ψ (k)] is finite. Similarly, β (1 − θ) f 0 (y) U 0 [ψ (y) − h (y)] is
continuous in y with

                  lim β (1 − θ) f 0 (y) U 0 [ψ (y) − h (y)] ,
                y→ψ(k)

finite and

               lim β (1 − θ) f 0 (y) U 0 [ψ (y) − h (y)] = ∞.
               y→0

Hence, (T h) (k) ∈ [0, ψ (k)] .
           18 / Equilibria in Systems with Distortions                   303

    T h and ψ − T h non-decreasing: Let k1 , k2 ∈ K with k2 > k1 and
h ∈ F. Note that for a given y, the right hand side of (7) is indepen-
dent of k while left hand side is decreasing. Using Figure 18.2, it is
clear that the y that solves these equations is non-decreasing. Also,
from Figure 18.2, the increase in y is no more than the increase in
ψ (k) so that ψ − T h is non-decreasing.

    (T h) (k) ≥ k, all k ≤ k∗ : Assume not. The for some h ∈ F
there exists a k ≤ k ∗ such that (T h) (k) < k ≤ h (k) ≤ k ∗ . Then
 U 0 [ψ (k) − h (k)] > U 0 [ψ (k) − (T h) (k)]
                       = β (1 − θ) f 0 ((T h) (k)) ×
                            U 0 [ψ ((T h) (k)) − h ((T h) (k))]
                       > β (1 − θ) f 0 (h (k)) U 0 [ψ (h (k)) − h (h (k))] ,
where the last inequality comes from the fact that f and U are strictly
concave, and that ψ − h is non-decreasing. But, as h (k) ≤ k∗ ,
β (1 − θ) f 0 (h (k)) ≥ 1 which is a contradiction.

    (T h) (k∗ ) = k∗ : Towards a contradiction, assume first that
(T h) (k∗ ) > k ∗ . Then
         U 0 [ψ (k∗ ) − k ∗ ]
     < U 0 [ψ (k∗ ) − (T h) (k∗ )]
     = β (1 − θ) f 0 ((T h) (k∗ )) U 0 [ψ ((T h) (k∗ )) − h ((T h) (k∗ ))]
     < β (1 − θ) f 0 (k∗ ) U 0 [ψ (k ∗ ) − h (k ∗ )]
     = U 0 [ψ (k∗ ) − h (k∗ )] ,
where the first and last inequalities come from the fact that f and U
are strictly concave, and that ψ − h is non-decreasing. A contradic-
tion for the case where (T h) (k ∗ ) < k∗ can be derived analogously.

    (T h) (k) ≤ k, all k ≥ k∗ : Assume not. Then for some h ∈ F
there exists a k ≥ k ∗ such that (T h) (k) > k ≥ h (k) ≥ k ∗ . Then
           U 0 [ψ (k) − h (k)]
       < U 0 [ψ (k) − (T h) (k)]
       = β (1 − θ) f 0 ((T h) (k)) U 0 [ψ ((T h) (k)) − h ((T h) (k))]
       < β (1 − θ) f 0 (h (k)) U 0 [ψ (h (k)) − h (h (k))] ,
304          18 / Equilibria in Systems with Distortions

where the last inequality comes from the fact that f and U are strictly
concave, and that ψ − h is non-decreasing. But, as h (k) ≥ k∗ ,
β (1 − θ) f 0 (h (k)) ≤ 1 which is a contradiction.


Exercise 18.6

    To see pointwise convergence, fix k ∈ K and let {gn } be a se-
quence of functions converging uniformly to g. For each n, let yn be
the solution (which by Exercise 18.5 is unique) to

        U 0 [ψ (k) − yn ] = β (1 − θ) f 0 (yn ) U 0 [ψ (yn ) − gn (yn )] ,

with y denoting the equivalent solution for the function g. If we can
show that for all ε > 0 there exists an N such that

                                 |yn − y| < ε,

all n ≥ N, the proof will be complete.
    Fix ε > 0. By the implicit function theorem, the equation

              U 0 [ψ (k) − y] = β (1 − θ) f 0 (y) U 0 [ψ (y) − x] ,

defines a continuous function, call it q, mapping values of x into
values for y. If we let x̂ = g (k) , we then have ŷ = q (x̂) . As q is
continuous, there exists a δ > 0 such that if x0 ∈ B (x̂, δ) we have
q (x0 ) ∈ B (ŷ, ε) . But as gn converges to g in the sup norm, there
exists an N such that kgn − gk < δ for all n ≥ N. Combining these,
we have our result.
    To show uniform convergence, fix ε > 0. Equicontinuity of F
implies that for each k ∈ K there exists an open set Vk ⊂ K such
that for all k0 ∈ Vk and for all n
                      ¯                     ¡ ¢¯
                      ¯(T gn ) (k) − (T gn ) k0 ¯ < ε/3.

As this is true for all n we have
                     ¯                 ¡ ¢¯
                     ¯(T g) (k) − (T g) k0 ¯ ≤ ε/3,

for all k 0 ∈ Vk .
           18 / Equilibria in Systems with Distortions              305

    The compactness of K implies that there exists a finite collection
{Vk1 , ..., VkN } of these sets that covers K. Exploiting pointwise con-
vergence, we can choose Mi for i = 1, ..., N such that for all n ≥ Mi ,

                    |(T gn ) (ki ) − (T g) (ki )| < ε/3,

and set M = max {Mi , ..., MN } . Then for any k0 ∈ K, there exists
an i ≤ N such that
           ¯       ¡ ¢            ¡ ¢¯
           ¯(T gn ) k 0 − (T g) k0 ¯
           ¯       ¡ ¢                  ¯
        ≤ ¯(T gn ) k 0 − (T gn ) (ki )¯
                                             ¯                   ¡ ¢¯
           + |(T gn ) (ki ) − (T g) (ki )| + ¯(T g) (ki ) − (T g) k 0 ¯
         < ε

for all n ≥ M. As this ε is independent of k0 , {T gn } converges
uniformly to T g on K.


Exercise 18.7

   Let h, ĥ ∈ F with ĥ ≥ h. Fix k ∈ K. Then for all y ∈ K,

                     ψ (y) − h (y) ≥ ψ (y) − ĥ (y)

and so                                  ³              ´
               U 0 (ψ (y) − h (y)) ≤ U 0 ψ (y) − ĥ (y) .

Using Figure 18.2 for k fixed, we have that
                       ³ ´
                         T ĥ (k) ≥ (T h) (k) .

As k was arbitrary, the result follows.



---
normalized_id: shared-pdf-reference-introduction-to-stochastic-differential-equations-1-2-evans-l-c
exam_code: SHARED
material_scope: introduction to stochastic differential equations 1.2 - evans l c.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Introduction To Stochastic Differential Equations 1.2 - Evans L C.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-introduction-to-stochastic-differential-equations-1-2-evans-l-c

                   AN INTRODUCTION TO STOCHASTIC
                          DIFFERENTIAL EQUATIONS
                                    VERSION 1.2


                                Lawrence C. Evans
                            Department of Mathematics
                                  UC Berkeley



Chapter 1: Introduction
Chapter 2: A crash course in basic probability theory
Chapter 3: Brownian motion and “white noise”
Chapter 4: Stochastic integrals, Itô’s formula
Chapter 5: Stochastic diﬀerential equations
Chapter 6: Applications
Exercises
Appendices
References




                                             1
                                        PREFACE

    These are an evolving set of notes for Mathematics 195 at UC Berkeley. This course
is for advanced undergraduate math majors and surveys without too many precise details
random diﬀerential equations and some applications.
   Stochastic diﬀerential equations is usually, and justly, regarded as a graduate level
subject. A really careful treatment assumes the students’ familiarity with probability
theory, measure theory, ordinary diﬀerential equations, and perhaps partial diﬀerential
equations as well. This is all too much to expect of undergrads.
  But white noise, Brownian motion and the random calculus are wonderful topics, too
good for undergraduates to miss out on.
   Therefore as an experiment I tried to design these lectures so that strong students
could follow most of the theory, at the cost of some omission of detail and precision. I for
instance downplayed most measure theoretic issues, but did emphasize the intuitive idea of
σ–algebras as “containing information”. Similarly, I “prove” many formulas by conﬁrming
them in easy cases (for simple random variables or for step functions), and then just stating
that by approximation these rules hold in general. I also did not reproduce in class some
of the more complicated proofs provided in these notes, although I did try to explain the
guiding ideas.
   My thanks especially to Lisa Goldberg, who several years ago presented the class with
several lectures on ﬁnancial applications, and to Fraydoun Rezakhanlou, who has taught
from these notes and added several improvements. I am also grateful to Jonathan Weare
for several computer simulations illustrating the text.




                                             2
  CHAPTER 1: INTRODUCTION

  A. MOTIVATION
  Fix a point x0 ∈ Rn and consider then the ordinary diﬀerential equation:
                             
                                ẋ(t) = b(x(t)) (t > 0)
(ODE)
                                x(0) = x0 ,
where b : Rn → Rn is a given, smooth vector ﬁeld and the solution is the trajectory
x(·) : [0, ∞) → Rn .




                                           x(t)

  x0


                    Trajectory of the differential equation

  Notation. x(t) is the state of the system at time t ≥ 0, ẋ(t) := dt
                                                                    d
                                                                       x(t).         
  In many applications, however, the experimentally measured trajectories of systems
modeled by (ODE) do not in fact behave as predicted:




                                           X(t)

 x0


             Sample path of the stochastic differential equation

Hence it seems reasonable to modify (ODE), somehow to include the possibility of random
eﬀects disturbing the system. A formal way to do so is to write:
                        
                          Ẋ(t) = b(X(t)) + B(X(t))ξ(t) (t > 0)
(1)
                          X(0) = x0 ,

where B : Rn → Mn×m (= space of n × m matrices) and

                          ξ(·) := m-dimensional “white noise”.

This approach presents us with these mathematical problems:
  • Deﬁne the “white noise” ξ(·) in a rigorous way.
                                            3
    • Deﬁne what it means for X(·) to solve (1).
    • Show (1) has a solution, discuss uniqueness, asymptotic behavior, dependence upon
x0 , b, B, etc.
   B. SOME HEURISTICS
   Let us ﬁrst study (1) in the case m = n, x0 = 0, b ≡ 0, and B ≡ I. The solution of
(1) in this setting turns out to be the n-dimensional Wiener process, or Brownian motion,
denoted W(·). Thus we may symbolically write

                                       Ẇ(·) = ξ(·),

thereby asserting that “white noise” is the time derivative of the Wiener process.
                                                              d
   Now return to the general case of the equation (1), write dt  instead of the dot:

                             dX(t)                     dW(t)
                                   = b(X(t)) + B(X(t))       ,
                              dt                        dt
and ﬁnally multiply by “dt”:
                        
                           dX(t) = b(X(t))dt + B(X(t))dW(t)
(SDE)
                           X(0) = x0 .
   This expression, properly interpreted, is a stochastic diﬀerential equation. We say that
X(·) solves (SDE) provided
                        t                t
(2)        X(t) = x0 +     b(X(s)) ds +      B(X(s)) dW for all times t > 0 .
                         0                 0

Now we must:
  • Construct W(·): See Chapter 3.
                                  t
  • Deﬁne the stochastic integral 0 · · · dW : See Chapter 4.
  • Show (2) has a solution, etc.: See Chapter 5.
And once all this is accomplished, there will still remain these modeling problems:
  • Does (SDE) truly model the physical situation?
  • Is the term ξ(·) in (1) “really” white noise, or is it rather some ensemble of smooth,
   but highly oscillatory functions? See Chapter 6.
   As we will see later these questions are subtle, and diﬀerent answers can yield completely
diﬀerent solutions of (SDE). Part of the trouble is the strange form of the chain rule in
the stochastic calculus:
  C. ITÔ’S FORMULA
  Assume n = 1 and X(·) solves the SDE

(3)                                 dX = b(X)dt + dW.
                                            4
Suppose next that u : R → R is a given smooth function. We ask: what stochastic
diﬀerential equation does
                           Y (t) := u(X(t)) (t ≥ 0)

solve? Oﬀhand, we would guess from (3) that

                                 dY = u dX = u bdt + u dW,

according to the usual chain rule, where  = dx
                                              d
                                                . This is wrong, however ! In fact, as we
will see,

(4)                                       dW ≈ (dt)1/2

                                                                                      1
in some sense. Consequently if we compute dY and keep all terms of order dt or (dt) 2 , we
obtain

                        1
          dY = u dX + u (dX)2 + . . .
                        2
                               1
             = u (bdt + dW ) + u (bdt + dW )2 + . . .
                           2
                      from (3)

                         1
              =    u b + u dt + u dW + {terms of order (dt)3/2 and higher}.
                         2

Here we used the “fact” that (dW )2 = dt, which follows from (4). Hence

                                               1
                                 dY =    u b + u dt + u dW,
                                               2

with the extra term “ 12 u dt” not present in ordinary calculus.

   A major goal of these notes is to provide a rigorous interpretation for calculations like
these, involving stochastic diﬀerentials.

Example 1. According to Itô’s formula, the solution of the stochastic diﬀerential equation
                                         
                                             dY = Y dW,
                                             Y (0) = 1

is
                                                         t
                                        Y (t) := eW (t)− 2 ,

and not what might seem the obvious guess, namely Ŷ (t) := eW (t) .                      

                                                 5
Example 2. Let P (t) denote the (random) price of a stock at time t ≥ 0. A standard
model assumes that dP
                   P , the relative change of price, evolves according to the SDE

                                     dP
                                        = µdt + σdW
                                      P
for certain constants µ > 0 and σ, called respectively the drift and the volatility of the
stock. In other words,         
                                 dP = µP dt + σP dW
                                     P (0) = p0 ,
where p0 is the starting price. Using once again Itô’s formula we can check that the solution
is                                                        2
                                             σW (t)+ µ− σ2 t
                                 P (t) = p0 e                .

                                                                                            




                           A sample path for stock prices




                                               6
CHAPTER 2: A CRASH COURSE IN BASIC PROBABILITY THEORY.


    A. Basic deﬁnitions
    B. Expected value, variance
    C. Distribution functions
    D. Independence
    E. Borel–Cantelli Lemma
    F. Characteristic functions
    G. Strong Law of Large Numbers, Central Limit Theorem
    H. Conditional expectation
     I. Martingales

   This chapter is a very rapid introduction to the measure theoretic foundations of prob-
ability theory. More details can be found in any good introductory text, for instance
Bremaud [Br], Chung [C] or Lamperti [L1].


A. BASIC DEFINITIONS.

  Let us begin with a puzzle:
   Bertrand’s paradox. Take a circle of radius 2 inches in the plane and choose a chord
of this circle at random. What is the probability this chord intersects the concentric circle
of radius 1 inch?
   Solution #1 Any such chord (provided it does not hit the center) is uniquely deter-
mined by the location of its midpoint.




  Thus
                                                      area of inner circle   1
              probability of hitting inner circle =                         = .
                                                      area of larger circle  4
   Solution #2 By symmetry under rotation we may assume the chord is vertical. The
diameter of the large circle is 4 inches and the chord will hit the small circle if it falls
within its 2-inch diameter.
                                            7
  Hence
                                                         2 inches   1
                    probability of hitting inner circle =         = .
                                                         4 inches   2
   Solution #3 By symmetry we may assume one end of the chord is at the far left point
of the larger circle. The angle θ the chord makes with the horizontal lies between ± π2 and
the chord hits the inner circle if θ lies between ± π6 .




                                       θ




  Therefore
                                                            2π
                                                             6     1
                      probability of hitting inner circle = 2π =     .
                                                            2
                                                                   3
                                                                                         

   PROBABILITY SPACES. This example shows that we must carefully deﬁne what
we mean by the term “random”. The correct way to do so is by introducing as follows the
precise mathematical structure of a probability space.
   We start with a set, denoted Ω, certain subsets of which we will in a moment interpret
as being “events”.
DEFINTION. A σ-algebra is a collection U of subsets of Ω with these properties:
(i) ∅, Ω ∈ U.
(ii) If A ∈ U, then Ac ∈ U.
(iii) If A1 , A2 , · · · ∈ U, then
                                   ∞      ∞
                                          
                                     Ak ,   Ak ∈ U.
                                    k=1    k=1

Here A := Ω − A is the complement of A.
       c


                                             8
DEFINTION. Let U be a σ-algebra of subsets of Ω. We call P : U → [0, 1] a probability
measure provided:
(i) P (∅) = 0, P (Ω) = 1.
(ii) If A1 , A2 , · · · ∈ U, then
                                     ∞        ∞
                                              
                                  P(   Ak ) ≤   P (Ak ).
                                          k=1             k=1

(iii) If A1 , A2 , . . . are disjoint sets in U, then
                                           ∞              ∞
                                                          
                                      P(        Ak ) =          P (Ak ).
                                          k=1             k=1


It follows that if A, B ∈ U, then

                                  A⊆B       implies P (A) ≤ P (B).


DEFINITION. A triple (Ω, U, P ) is called a probability space provided Ω is any set, U
is a σ-algebra of subsets of Ω, and P is a probability measure on U.

Terminology. (i) A set A ∈ U is called an event; points ω ∈ Ω are sample points.
   (ii) P (A) is the probability of the event A.
   (iii) A property which is true except for an event of probability zero is said to hold
almost surely (usually abbreviated “a.s.”).


   Example 1. Let Ω = {ω1 , ω2 , . . . , ωN } be a ﬁnite set, and suppose we are given numbers
                                              
0 ≤ pj ≤ 1 for j = 1, . . . , N , satisfying     pj = 1. We take U to comprise all subsets of
Ω. For each set A = {ωj1 , ωj2 , . . . , ωjm } ∈ U, with 1 ≤ j1 < j2 < . . . jm ≤ N , we deﬁne
P (A) := pj1 + pj2 + · · · + pjm .                                                          
   Example 2. The smallest σ-algebra containing all the open subsets of R is called the
                                                                                 n

Borel σ-algebra, denoted B. Assume that f is a nonnegative, integrable function, such
     
that Rn f dx = 1. We deﬁne
                                                  
                                        P (B) :=     f (x) dx
                                                        B

for each B ∈ B. Then (Rn , B, P ) is a probability space. We call f the density of the
probability measure P .                                                             
   Example 3. Suppose instead we ﬁx a point z ∈ Rn , and now deﬁne
                                                  
                                                      1     if z ∈ B
                                      P (B) :=
                                                      0     if z ∈
                                                                 /B
                                                      9
for sets B ∈ B. Then (Rn , B, P ) is a probability space. We call P the Dirac mass concen-
trated at the point z, and write P = δz .                                               

   A probability space is the proper setting for mathematical probability theory. This
means that we must ﬁrst of all carefully identify an appropriate (Ω, U, P ) when we try to
solve problems. The reader should convince himself or herself that the three “solutions” to
Bertrand’s paradox discussed above represent three distinct interpretations of the phrase
“at random”, that is, to three distinct models of (Ω, U, P ).

  Here is another example.

Example 4 (Buﬀon’s needle problem). The plane is ruled by parallel lines 2 inches
apart and a 1-inch long needle is dropped at random on the plane. What is the probability
that it hits one of the parallel lines?
   The ﬁrst issue is to ﬁnd some appropriate probability space (Ω, U, P ). For this, let
             
                 h = distance from the center of needle to nearest line,
                 θ = angle (≤ π2 ) that the needle makes with the horizontal.



                             θ
                                             h

                 needle


   These fully determine the position of the needle, up to translations and reﬂection. Let
us next take                   π
                   
                    Ω  =   [0,   ) × [0, 1], U = Borel subsets of Ω,
                               2           
                              
                                        values of h
                   
                         values of θ
                   
                     P (B) = 2·areaπ of B for each B ∈ U.
We denote by A the event that the needle hits a horizontal line. We can now check
that this happens provided sinh θ ≤ 12 . Consequently A = {(θ, h) ∈ Ω | h ≤ sin2 θ }, and so
                          π
P (A) = 2(areaπ of A) = π2 02 21 sin θ dθ = π1 .                                          


   RANDOM VARIABLES. We can think of the probability space as being an essential
mathematical construct, which is nevertheless not “directly observable”. We are therefore
interested in introducing mappings X from Ω to Rn , the values of which we can observe.
                                           10
   Remember from Example 2 above that

               B denotes the collection of Borel subsets of Rn , which is the
                smallest σ-algebra of subsets of Rn containing all open sets.

We may henceforth informally just think of B as containing all the “nice, well-behaved”
subsets of Rn .

DEFINTION. Let (Ω, U, P ) be a probability space. A mapping

                                           X : Ω → Rn

is called an n-dimensional random variable if for each B ∈ B, we have

                                           X−1 (B) ∈ U.

We equivalently say that X is U-measurable.

Notation, comments. We usually write “X” and not “X(ω)”. This follows the custom
within probability theory of mostly not displaying the dependence of random variables on
the sample point ω ∈ Ω. We also denote P (X−1 (B)) as “P (X ∈ B)”, the probability that
X is in B.
   In these notes we will usually use capital letters to denote random variables. Boldface
usually means a vector-valued mapping.
   We will also use without further comment various standard facts from measure theory,
for instance that sums and products of random variables are random variables.           

   Example 1. Let A ∈ U. Then the indicator function of A,
                                                
                                                    1   if ω ∈ A
                                    χA (ω) :=
                                                    0   if ω ∈
                                                             / A,

is a random variable.
   Example 2. More generally, if A1 , A2 , . . . , Am ∈ U, with Ω = ∪m
                                                                     i=1 Ai , and a1 , a2 , . . . , am
are real numbers, then
                                              m
                                      X=            ai χAi
                                                i=1

is a random variable, called a simple function.                                                    

                                                 11
LEMMA. Let X : Ω → Rn be a random variable. Then


                               U(X) := {X−1 (B) | B ∈ B}


is a σ-algebra, called the σ-algebra generated by X. This is the smallest sub-σ-algebra of
U with respect to which X is measurable.

Proof. Check that {X−1 (B) | B ∈ B} is a σ-algebra; clearly it is the smallest σ-algebra
with respect to which X is measurable.                                                

IMPORTANT REMARK. It is essential to understand that, in probabilistic terms,
the σ-algebra U(X) can be interpreted as “containing all relevant information” about the
random variable X.
  In particular, if a random variable Y is a function of X, that is, if


                                        Y = Φ(X)


for some reasonable function Φ, then Y is U(X)-measurable.
   Conversely, suppose Y : Ω → R is U(X)-measurable. Then there exists a function Φ
such that

                                       Y = Φ(X).

Hence if Y is U(X)-measurable, Y is in fact a function of X. Consequently if we know
the value X(ω), we in principle know also Y (ω) = Φ(X(ω)), although we may have no
practical way to construct Φ.                                                      


   STOCHASTIC PROCESSES. We introduce next random variables depending upon
time.

DEFINITIONS. (i) A collection {X(t) | t ≥ 0} of random variables is called a stochastic
process.
  (ii) For each point ω ∈ Ω, the mapping t → X(t, ω) is the corresponding sample path.

   The idea is that if we run an experiment and observe the random values of X(·) as time
evolves, we are in fact looking at a sample path {X(t, ω) | t ≥ 0} for some ﬁxed ω ∈ Ω. If
we rerun the experiment, we will in general observe a diﬀerent sample path.
                                            12
                                                                              X(t,ω1)




                                                                                               time




                                                                              X(t,ω2)




                    Two sample paths of a stochastic process

B. EXPECTED VALUE, VARIANCE.

Integration with respect to a measure. If (Ω, U, P ) is a probability space and X =
k
  i=1 ai χAi is a real-valued simple random variable, we deﬁne the integral of X by

                                                      
                                                       k
                                             X dP :=            ai P (Ai ).
                                     Ω                  i=1

If next X is a nonnegative random variable, we deﬁne
                                                  
                               X dP :=      sup      Y dP.
                                 Ω                Y ≤X,Y simple        Ω

Finally if X : Ω → R is a random variable, we write
                                                  
                              X dP :=     X dP −
                                            +
                                                      X − dP,
                             Ω                   Ω                     Ω

provided at least one of the integrals on the right is ﬁnite. Here X + = max(X, 0) and
X − = max(−X, 0); so that X = X + − X − .
  Next, suppose X : Ω → Rn is a vector-valued random variable, X = (X 1 , X 2 , . . . , X n ).
Then we write                                     
                         X dP =              X 1 dP,        X 2 dP, · · · ,       X n dP   .
                     Ω                   Ω             Ω                      Ω

  We will assume without further comment the usual rules for these integrals.                         
DEFINITION. We call                                     
                                             E(X) :=            X dP
                                                            Ω
the expected value (or mean value) of X.
                                                       13
DEFINITION. We call                              
                                      V (X) :=        |X − E(X)|2 dP
                                                 Ω
the variance of X.
Observe that
                        V (X) = E(|X − E(X)|2 ) = E(|X|2 ) − |E(X)|2 .

LEMMA (Chebyshev’s inequality). If X is a random variable and 1 ≤ p < ∞, then
                              1
                P (|X| ≥ λ) ≤ p E(|X|p ) for all λ > 0.
                             λ
Proof. We have
                                                
                         p
                 E(|X| ) =          |X| dP ≥
                                        p
                                                               |X|p dP ≥ λp P (|X| ≥ λ).
                                Ω                    {|X|≥λ}
                                                                                                              


C. DISTRIBUTION FUNCTIONS.

   Let (Ω, U, P ) be a probability space and suppose X : Ω → Rn is a random variable.
Notation. Let x = (x1 , . . . , xn ) ∈ Rn , y = (y1 , . . . , yn ) ∈ Rn . Then
                                                     x≤y
means xi ≤ yi for i = 1, . . . , n.                                                                           
DEFINITIONS. (i) The distribution function of X is the function FX : Rn → [0, 1]
deﬁned by
                   FX (x) := P (X ≤ x) for all x ∈ Rn
  (ii) If X1 , . . . , Xm : Ω → Rn are random variables, their joint distribution function is
FX1 ,...,Xm : (Rn )m → [0, 1],
  FX1 ,...,Xm (x1 , . . . , xm ) := P (X1 ≤ x1 , . . . , Xm ≤ xm )      for all xi ∈ Rn , i = 1, . . . , m.

DEFINITION. Suppose X : Ω → Rn is a random variable and F = FX its distribution
function. If there exists a nonnegative, integrable function f : Rn → R such that
                                               x1      xn
               F (x) = F (x1 , . . . , xn ) =      ···      f (y1 , . . . , yn ) dyn . . . dy1 ,
                                                 −∞        −∞
then f is called the density function for X.
   It follows then that                      
(1)                          P (X ∈ B) =             f (x) dx    for all B ∈ B
                                                 B
This formula is important as the expression on the right hand side is an ordinary integral,
and can often be explicitly calculated.
                                           14
                                                                                  x




                                     X

                                                                                      Rn




                                Ω


Example 1. If X : Ω → R has density

                                         1             |x−m|2
                             f (x) = √            e−     2σ 2   (x ∈ R),
                                         2πσ 2

we say X has a Gaussian (or normal) distribution, with mean m and variance σ 2 . In this
case let us write
                         X is an N (m, σ 2 ) random variable.

Example 2. If X : Ω → Rn has density

                                 1          − 12 (x−m)·C −1 (x−m)
                f (x) =                    e                               (x ∈ Rn )
                          ((2π)n det C)1/2

for some m ∈ Rn and some positive deﬁnite, symmetric matrix C, we say X has a Gaussian
(or normal) distribution, with mean m and covariance matrix C. We then write

                             X is an N (m, C) random variable.

                                                                                           

LEMMA. Let X : Ω → Rn be a random variable, and assume that its distribution func-
tion F = FX has the density f . Suppose g : Rn → R, and

                                             Y = g(X)

is integrable. Then                           
                                    E(Y ) =        g(x)f (x) dx.
                                              Rn
                                                  15
In particular,
                                                                          
                 E(X) =            xf (x) dx and           V (X) =               |x − E(X)|2 f (x) dx.
                          Rn                                                Rn




Remark. Hence we can compute E(X), V (X), etc. in terms of integrals over Rn . This
is an important observation, since as mentioned before the probability space (Ω, U, P ) is
“unobservable”: All that we “see” are the values X takes on in Rn . Indeed, all quantities
of interest in probability theory can be computed in Rn in terms of the density f .     

Proof. Suppose ﬁrst g is a simple function on Rn :

                                              
                                              m
                                       g=             bi χBi             (Bi ∈ B).
                                              i=1


Then
                                      
                                      m                                       
                                                                               m
                    E(g(X)) =                bi       χBi (X) dP =                   bi P (X ∈ Bi ).
                                       i=1        Ω                            i=1

But also

                                                         
                                                          m          
                                   g(x)f (x) dx =               bi         f (x) dx
                              Rn                          i=1        Bi

                                                          
                                                          m
                                                      =         bi P (X ∈ Bi ) by (1).
                                                          i=1


Consequently the formula holds for all simple functions g and, by approximation, it holds
therefore for general functions g.                                                     

Example. If X is N (m, σ 2 ), then

                                                           ∞
                                                  1                       (x−m)2
                               E(X) = √                          xe−        2σ 2     dx = m
                                              2πσ 2        −∞


and
                                                   ∞
                                         1                                     (x−m)2
                      V (X) = √                            (x − m)2 e−           2σ 2   dx = σ 2 .
                                        2πσ 2         −∞


Therefore m is indeed the mean, and σ 2 the variance.                                                    
                                          16
                                                       A
                                               ω
                                          B

                                                           Ω


D. INDEPENDENCE.

   MOTIVATION. Let (Ω, U, P ) be a probability space, and let A, B ∈ U be two events,
with P (B) > 0. We want to ﬁnd a reasonable deﬁnition of
                          P (A | B), the probability of A, given B.
Think this way. Suppose some point ω ∈ Ω is selected “at random” and we are told ω ∈ B.
What then is the probability that ω ∈ A also?
  Since we know ω ∈ B, we can regard B as being a new probability space. Therefore we
can deﬁne Ω̃ := B, Ũ := {C ∩ B | C ∈ U} and P̃ := P (B)
                                                     P
                                                         ; so that P̃ (Ω̃) = 1. Then the
probability that ω lies in A is P̃ (A ∩ B) = P P(A∩B)
                                                 (B) .

  This observation motivates the following
DEFINITION. We write
                                          P (A ∩ B)
                           P (A | B) :=               if P (B) > 0.
                                            P (B)

   Now what should it mean to say “A and B are independent”? This should mean
P (A | B) = P (A), since presumably any information that the event B has occurred is
irrelevant in determining the probability that A has occurred. Thus
                                                      P (A ∩ B)
                               P (A) = P (A | B) =
                                                        P (B)
and so
                                  P (A ∩ B) = P (A)P (B)
if P (B) > 0. We take this for the deﬁnition, even if P (B) = 0:
DEFINITION. Two events A and B are called independent if
                                  P (A ∩ B) = P (A)P (B).
This concept and its ramiﬁcations are the hallmarks of probability theory.
   To gain some insight, the reader may wish to check that if A and B are independent
events, then so are Ac and B. Likewise, Ac and B c are independent.
                                           17
DEFINITION. Let A1 , . . . , An , . . . be events. These events are independent if for all
choices 1 ≤ k1 < k2 < · · · < km , we have

                   P (Ak1 ∩ Ak2 ∩ · · · ∩ Akm ) = P (Ak1 )P (Ak1 ) · · · P (Akm ).

  It is important to extend this deﬁnition to σ-algebras:
DEFINITION. Let Ui ⊆ U be σ-algebras, for i = 1, . . . . We say that {Ui }∞           i=1 are
independent if for all choices of 1 ≤ k1 < k2 < · · · < km and of events Aki ∈ Uki , we have

                   P (Ak1 ∩ Ak2 ∩ · · · ∩ Akm ) = P (Ak1 )P (Ak2 ) . . . P (Akm ).

  Lastly, we transfer our deﬁnitions to random variables:
DEFINITION. Let Xi : Ω → Rn be random variables (i = 1, . . . ). We say the random
variables X1 , . . . are independent if for all integers k ≥ 2 and all choices of Borel sets
B1 , . . . Bk ⊆ Rn :

     P (X1 ∈ B1 , X2 ∈ B2 , . . . , Xk ∈ Bk ) = P (X1 ∈ B1 )P (X2 ∈ B2 ) · · · P (Xk ∈ Bk ).

This is equivalent to saying that the σ-algebras {U(Xi )}∞
                                                         i=1 are independent.

Example. Take Ω = [0, 1), U the Borel subsets of [0, 1), and P Lebesgue measure.
  Deﬁne for n = 1, 2, . . .
                            
                              1  if 2kn ≤ ω < k+1
                                               2n , k even
               Xn (ω) :=                                    (0 ≤ ω < 1).
                              −1 if 2n ≤ ω < 2n , k odd
                                     k        k+1


These are the Rademacher functions, which we assert are in fact independent random
variables. To prove this, it suﬃces to verify

      P (X1 = e1 , X2 = e2 , . . . , Xk = ek ) = P (X1 = e1 )P (X2 = e2 ) · · · P (Xk = ek ),

for all choices of e1 , . . . , ek ∈ {−1, 1}. This can be checked by showing that both sides are
equal to 2−k .                                                                                

LEMMA. Let X1 , . . . , Xm+n be independent Rk -valued random variables. Suppose f :
(Rk )n → R and g : (Rk )m → R. Then

                     Y := f (X1 , . . . , Xn ) and Z := g(Xn+1 , . . . , Xn+m )

are independent.
  We omit the proof, which may be found in Breiman [B].

                                                 18
THEOREM. The random variables X1 , · · · , Xm : Ω → Rn are independent if and only
if
(2)    FX1 ,··· ,Xm (x1 , . . . , xm ) = FX1 (x1 ) · · · FXm (xm )          for all xi ∈ Rn , i = 1, . . . , m.
If the random variables have densities, (2) is equivalent to
(3)   fX1 ,··· ,Xm (x1 , . . . , xm ) = fX1 (x1 ) · · · fXm (xm )         for all xi ∈ Rn , i = 1, . . . , m,
where the functions f are the appropriate densities.
Proof. 1. Assume ﬁrst that {Xk }m
                                k=1 are independent. Then

                      FX1 ···Xm (x1 , . . . , xm ) = P (X1 ≤ x1 , . . . , Xm ≤ xm )
                                                     = P (X1 ≤ x1 ) · · · P (Xm ≤ xm )
                                                     = FX1 (x1 ) · · · FXm (xm ).
  2. We prove the converse statement for the case that all the random variables have
densities. Select Ai ∈ U(Xi ), i = 1, . . . , m. Then Ai = X−1
                                                            i (Bi ) for some Bi ∈ B. Hence

          P (A1 ∩ · · · ∩ Am ) = P (X1 ∈ B1 , . . . , Xm ∈ Bm )
                                 
                               =            fX1 ···Xm (x1 , . . . , xm ) dx1 · · · dxm
                                         B1 ×...×Bm
                                                                     
                                 =              fX1 (x1 ) dx1 . . .            fXm (xm ) dxm      by (3)
                                           B1                             Bm
                                 = P (X1 ∈ B1 ) · · · P (Xm ∈ Bm )
                                 = P (A1 ) · · · P (Am ).
Therefore U(X1 ), · · · , U(Xm ) are independent σ-algebras.                                                      

   One of the most important properties of independent random variables is this:
THEOREM. If X1 , . . . , Xm are independent, real-valued random variables, with
                                         E(|Xi |) < ∞      (i = 1, . . . , m),
then E(|X1 · · · Xm |) < ∞ and
                                  E(X1 · · · Xm ) = E(X1 ) · · · E(Xm ).

Proof. Suppose that each Xi is bounded and has a density. Then
                          
        E(X1 · · · Xm ) =     x1 · · · xm fX1 ···Xm (x1 , . . . , xm ) dx1 . . . xm
                           Rm
                                                        
                        =     x1 fX1 (x1 ) dx1 · · ·           xm fXm (xm ) dxm                  by (3)
                                     R                                R
                            = E(X1 ) · · · E(Xm ).
                                                                                                                  
                                                         19
THEOREM. If X1 , . . . , Xm are independent, real-valued random variables, with
                                 V (Xi ) < ∞      (i = 1, . . . , m),
then
                         V (X1 + · · · + Xm ) = V (X1 ) + · · · + V (Xm ).

Proof. Use induction, the case m = 2 holding as follows. Let m1 := EX1 , m2 := E(X2 ).
Then E(X1 + X2 ) = m1 + m2 and
                             
              V (X1 + X2 ) = (X1 + X2 − (m1 + m2 ))2 dP
                             Ω                  
                           = (X1 − m1 ) dP + (X2 − m2 )2 dP
                                         2
                               Ω
                                                 Ω

                                   + 2 (X1 − m1 )(X2 − m2 ) dP
                                              Ω
                              = V (X1 ) + V (X2 ) + 2E(X1 − m1 )E(X2 − m2 ),
                                                                 
                                                              =0             =0

where we used independence in the next last step.                                                


E. BOREL–CANTELLI LEMMA.

   We introduce next a simple and very useful way to check if some sequence A1 , . . . , An , . . .
of events “occurs inﬁnitely often”.
DEFINITION. Let A1 , . . . , An , . . . be events in a probability space. Then the event
              ∞
                  ∞
                        Am = {ω ∈ Ω | ω belongs to inﬁnitely many of the An },
              n=1 m=n

is called “An inﬁnitely often”, abbreviated “An i.o.”.                                           
                                        ∞
BOREL–CANTELLI LEMMA. If n=1 P (An ) < ∞, then P (An i.o.) = 0.
                                ∞ ∞
Proof. By deﬁnition An i.o. = n=1 m=n Am , and so for each n
                                         ∞           ∞
                                                       
                        P (An i.o.) ≤ P       Am ≤       P (Am ).
                                             m=n              m=n
                                                                   
The limit of the left-hand side is zero as n → ∞ because                P (Am ) < ∞.             
APPLICATION. We illustrate a typical use of the Borel–Cantelli Lemma.
   A sequence of random variables {Xk }∞ k=1 deﬁned on some probability space converges
in probability to a random variable X, provided
                                    lim P (|Xk − X| > 1) = 0
                                   k→∞

for each 1 > 0.
                                                  20
THEOREM. If Xk → X in probability, then there exists a subsequence {Xkj }∞
                                                                         j=1 ⊂
{Xk }∞
     k=1 such that

                            Xkj (ω) → X(ω)       for almost every ω.


Proof. For each positive integer j we select kj so large that

                                                         1     1
                                      P (|Xkj − X| >       ) ≤ 2,
                                                         j    j
                                                                               1
and also . . . kj−1 < kj < . . . , kj → ∞. Let Aj := {|Xkj − X| > 1j }. Since   j 2 < ∞, the
Borel–Cantelli Lemma implies P (Aj i.o.) = 0. Therefore for almost all sample points ω,
|Xkj (ω) − X(ω)| ≤ 1j provided j ≥ J, for some index J depending on ω.                    



F. CHARACTERISTIC FUNCTIONS.


   It is convenient to introduce next a clever integral transform, which will later provide
us with a useful means to identify normal random variables.

DEFINITION. Let X be an Rn -valued random variable. Then

                              φX (λ) := E(eiλ·X )           (λ ∈ Rn )

is the characteristic function of X.                                                          

Example. If the real-valued random variable X is N (m, σ 2 ), then

                                                λ2 σ 2
                              φX (λ) = eimλ−      2         (λ ∈ R).

To see this, let us suppose that m = 0, σ = 1 and calculate

                             ∞                             −λ2    ∞
                                         1  x2      e 2                       (x−iλ)2
                 φX (λ) =         iλx
                                  e     √ e− 2 dx = √                    e−      2      dx.
                            −∞           2π           2π            −∞


We move the path of integration in the complex plane from the line {Im(z) = −λ} to the
                          ∞    x2      √
real axis, and recall that −∞ e− 2 dx = 2π. (Here Im(z) means the imaginary part of
                                                λ2
the complex number z.) Hence φX (λ) = e− 2 .                                                  


                                                21
LEMMA. (i) If X1 , . . . , Xm are independent random variables, then for each λ ∈ Rn

                             φX1 +···+Xm (λ) = φX1 (λ) . . . φXm (λ).

(ii) If X is a real-valued random variable,

                             φ(k) (0) = ik E(X k )   (k = 0, 1, . . . ).

(iii) If X and Y are random variables and

                                  φX (λ) = φY (λ)     for all λ,

then
                                  FX (x) = FY (x)     for all x.


  Assertion (iii) says the characteristic function of X determines the distribution of X.

Proof. 1. Let us calculate

               φX1 +···+Xm (λ) = E(eiλ·(X1 +···+Xm ) )
                                = E(eiλ·X1 eiλ·X2 · · · eiλ·Xm )
                                = E(eiλ·X1 ) · · · E(eiλ·Xm )         by independence
                                = φX1 (λ) . . . φXm (λ).

   2. We have φ (λ) = iE(XeiλX ), and so φ (0) = iE(X). The formulas in (ii) for k = 2, . . .
follow similarly.
   3. See Breiman [B] for the proof of (iii).                                               

Example. If X and Y are independent, real-valued random variables, and if X is N (m1 , σ12 ),
Y is N (m2 , σ22 ), then
                                X + Y is N (m1 + m2 , σ12 + σ22 ).

  To see this, just calculate

                                                             λ2 σ 2              λ2 σ 2
                   φX+Y (λ) = φX (λ)φY (λ) = e−im1 λ−                 e−im2 λ−
                                                                 1                   2
                                                               2                   2

                                                                       λ2
                                               = e−i(m1 +m2 )λ− 2 (σ1 +σ2 ) .
                                                                            2    2




                                                                                             
                                               22
G. STRONG LAW OF LARGE NUMBERS, CENTRAL LIMIT THEOREM.

   This section discusses a mathematical model for “repeated, independent experiments”.
   The idea is this. Suppose we are given a probability space and on it a real–valued
random variable X, which records the outcome of some sort of random experiment. We
can model repetitions of this experiment by introducing a sequence of random variables
X1 , . . . , Xn , . . . , each of which “has the same probabilistic information as X”:
DEFINITION. A sequence X1 , . . . , Xn , . . . of random variables is called identically dis-
tributed if
            FX1 (x) = FX2 (x) = · · · = FXn (x) = . . . for all x.

   If we additionally assume that the random variables X1 , . . . , Xn , . . . are independent, we
can regard this sequence as a model for repeated and independent runs of the experiment,
the outcomes of which we can measure. More precisely, imagine that a “random” sample
point ω ∈ Ω is given and we can observe the sequence of values X1 (ω), X2 (ω), . . . , Xn (ω), . . . .
What can we infer from these observations?

  STRONG LAW OF LARGE NUMBERS. First we show that with probability
one, we can deduce the common expected values of the random variables.
THEOREM (Strong Law of Large Numbers). Let X1 , . . . , Xn , . . . be a sequence
of independent, identically distributed, integrable random variables deﬁned on the same
probability space.
   Write m := E(Xi ) for i = 1, . . . . Then
                                       X1 + · · · + Xn
                              P     lim                =m               = 1.
                                   n→∞       n

Proof. 1. Supposing that the random variables are real–valued entails no loss of generality.
We will as well suppose for simplicity that

                                    E(Xi4 ) < ∞      (i = 1, . . . ).

We may also assume m = 0, as we could otherwise consider Xi − m in place of Xi .
  2. Then                     4 
                          n              n
                    E        Xi  =           E(Xi Xj Xk Xl ).
                                  i=1           i,j,k,l=1

If i = j, k, or l, independence implies

                             E(Xi Xj Xk Xl ) = E(Xi )E(Xj Xk Xl ).
                                                 
                                                     =0
                                                23
Consequently, since the Xi are identically distributed, we have
                              4 
                         n             n              n
                   E        Xi     =            4
                                            E(Xi ) + 3      E(Xi2 Xj2 )
                          i=1            i=1               i,j=1
                                                            i=j

                                      = nE(X14 ) + 3(n2 − n)(E(X12 ))2
                                      ≤ n2 C

for some constant C.
   Now ﬁx ε > 0. Then
                        n                 n             
                        1                    
                                                     
                      P       Xi  ≥ ε = P         Xi  ≥ εn
                        n                            
                           i=1                   i=1
                                                              4 
                                             1            n
                                         ≤        E          Xi 
                                           (εn)4          i=1

                                                C 1
                                            ≤          .
                                                ε 4 n2
We used here the Chebyshev inequality. By the Borel–Cantelli Lemma, therefore,
                               n                 
                               1  
                                         
                            P         Xi  ≥ ε i.o. = 0.
                               n         
                                      i=1

  3. Take ε = k1 . The foregoing says that
                                        n           
                                       1            1
                                                    
                               lim sup        Xi (ω) ≤ ,
                                 n→∞    n i=1        k

except possibly for ω lying in an event Bk , with P (Bk ) = 0. Write B := ∪∞
                                                                           k=1 Bk . Then
P (B) = 0 and
                                        1
                                          n
                                   lim        Xi (ω) = 0
                                  n→∞ n
                                         i=1

for each sample point ω ∈
                        / B.                                                          

  FLUCTUATIONS, LAPLACE–DEMOIVRE THEOREM. The Strong Law of
Large Numbers says that for almost every sample point ω ∈ Ω,
                         X1 (ω) + · · · + Xn (ω)
                                                 →m        as n → ∞.
                                   n
We turn next to the Laplace–DeMoivre Theorem, and its generalization the Central Limit
Theorem, which estimate the “ﬂuctuations” we can expect in this limit.
  Let us start with a simple calculation.
                                               24
LEMMA. Suppose the real–valued random variables X1 , . . . , Xn , . . . are independent and
identically distributed, with  
                                 P (Xi = 1) = p
                                                 P (Xi = 0) = q
for p, q ≥ 0, p + q = 1. Then

                                       E(X1 + · · · + Xn ) = np
                                      V (X1 + · · · + Xn ) = npq.

                  
Proof. E(X1 ) =      X1 dP = p and therefore E(X1 + · · · + Xn ) = np. Also,
                      Ω
                        
              V (X1 ) = (X1 − p)2 dP = (1 − p)2 P (X1 = 1) + p2 P (X1 = 0)
                              Ω
                          = q 2 p + p2 q = qp.

By independence, V (X1 + · · · + Xn ) = V (X1 ) + · · · + V (Xn ) = npq.                   
   We can imagine these random variables as modeling for example repeated tosses of a
biased coin, which has probability p of coming up heads, and probability q = 1 − p of
coming up tails.
THEOREM (Laplace–DeMoivre). Let X1 , . . . , Xn be the independent, identically dis-
tributed, real–valued random variables in the preceding Lemma. Deﬁne the sums

                                         Sn := X1 + · · · + Xn .

Then for all −∞ < a < b < +∞,
                                                                     b
                                      Sn − np                1              x2
                           lim P    a≤ √      ≤b           =√             e− 2 dx.
                          n→∞            npq                  2π     a


  A proof is in Appendix A.
  Interpretation of the Laplace–DeMoivre Theorem. In view of the Lemma,

                                       Sn − np   Sn − E(Sn )
                                        √      =             .
                                          npq     V (Sn )1/2

Hence the Laplace–DeMoivre Theorem says that the sums Sn , properly renormalized, have
a distribution which tends to the Gaussian N (0, 1) as n → ∞.
   Consider in particular the situation p = q = 12 . Suppose a > 0; then
                                  √             √                          a
                                 a n       n   a n                  1             x2
                  lim P        −     ≤ Sn − ≤                     =√            e− 2 dx.
                  n→∞             2        2    2                    2π    −a
                                             25
If we ﬁx b > 0 and write a = √2bn , then for large n
                                                             √2b
                                        n        1                n         x2
                             P −b ≤ Sn − ≤ b ≈ √                       e− 2 dx
                                        2        2π           −√
                                                               2b

                                                                               
                                                                 n

                                                           →0 as n→∞.

Thus for almost every ω, n1 Sn (ω) → 12 , in accord with the Strong Law of Large Numbers;
                
but Sn (ω) − n2  “ﬂuctuates” with probability 1 to exceed any ﬁnite bound b.         

  CENTRAL LIMIT THEOREM. We now generalize the Laplace–DeMoivre Theo-
rem:
THEOREM (Central Limit Theorem). Let X1 , . . . , Xn , . . . be independent, identi-
cally distributed, real-valued random variables with

                                    E(Xi ) = m, V (Xi ) = σ 2 > 0.

for i = 1, . . . . Set
                                        Sn := X1 + · · · + Xn .
Then for all −∞ < a < b < +∞
                                                                   b
                                      Sn − nm             1                  x2
(1)                         lim P   a≤ √      ≤b        =√                 e− 2 dx.
                           n→∞           nσ                2π          a


   Thus the conclusion of the Laplace–DeMoivre Theorem holds not only for the 0– or 1–
valued random variable considered before, but for any sequence of independent, identically
distributed random variables with ﬁnite variance. We will later invoke this assertion to
motivate our requirement that Brownian motion be normally distributed for each time
t ≥ 0.
Outline of Proof. For simplicity assume m = 0, σ = 1, since we can always rescale to this
case. Then                                                         n
                                                                λ
                      φ√Sn (λ) = φ X1 (λ) . . . φ Xn (λ) = φX
                                   √              √          1
                                                               √
                         n           n              n            n
for λ ∈ R, because the random variables are independent and identically distributed.
   Now φ = φX1 satisﬁes
                                                1
                         φ(µ) = φ(0) + φ (0)µ + φ (0)µ2 + o(µ2 ) as µ → 0,
                                                2
with φ(0) = 1, φ (0) = iE(X1 ) = 0, φ (0) = −E(X12 ) = −1. Consequently our setting
µ = √λn gives
                                  λ            λ2      λ2
                           φX1 √       =1−        +o       ,
                                   n           2n       n
                                            26
and so                                                      n
                                          λ2           λ2           λ2
                          Sn (λ) =
                         φ√          1−      +o                 → e− 2
                            n             2n           n
                            λ2
for all λ, as n → ∞. But e− 2 is the characteristic function of an N (0, 1) random variable.
It turns out that this convergence of the characteristic functions implies the limit (1): see
Breiman [B] for more.                                                                      


H. CONDITIONAL EXPECTATION.

MOTIVATION. We earlier decided to deﬁne P (A | B), the probability of A, given B,
to be P P(A∩B)
          (B) , provided P (B) > 0. How then should we deﬁne

                                          E(X | B),

the expected value of the random variable X, given the event B? Remember that we can
                                                     P
think of B as the new probability space, with P̃ = P (B) . Thus if P (B) > 0, we should set

                           E(X | B) = mean value of X over B
                                           
                                        1
                                    =         X dP.
                                      P (B) B

  Next we pose a more interesting question. What is a reasonable deﬁnition of

                                          E(X | Y ),

the expected value of the random variable X, given another random variable Y ? In other
words if “chance” selects a sample point ω ∈ Ω and all we know about ω is the value Y (ω),
what is our best guess as to the value X(ω)?
   This turns out to be a subtle, but extremely important issue, for which we provide two
introductory discussions.

FIRST APPROACH TO CONDITIONAL EXPECTATION. We start with an
example.
Example. Assume we are given a probability space (Ω, U, P ), on which is deﬁned a simple
                                 m
random variable Y . That is, Y = i=1 ai χAi , and so
                                    
                                    
                                     a1       on A1
                                    
                                    
                                     a2       on A2
                                Y =         ..
                                    
                                    
                                    
                                    
                                             .
                                    
                                      am       on Am ,
                                         27
for distinct real numbers a1 , a2 , . . . , am and disjoint events A1 , A2 , . . . , Am , each of positive
probability, whose union is Ω.
   Next, let X be any other real–valued random variable on Ω. What is our best guess of
X, given Y ? Think about the problem this way: if we know the value of Y (ω), we can tell
which event A1 , A2 , . . . , Am contains ω. This, and only this, known, our best estimate for
X should then be the average value of X over each appropriate event. That is, we should
take                                          1 
                                             
                                              P (A1 ) A1 X dP     on A1
                                             
                                                       
                                             
                                              P (A
                                                  1
                                                             X dP  on A2
                                                    2)    A2
                             E(X | Y ) :=
                                             
                                                    ..
                                             
                                                     .
                                             
                                                        
                                                  1
                                               P (Am ) Am X dP     on Am .
                                                                                                       

   We note for this example that
   • E(X | Y ) is a random variable, and not a constant.
   • E(X | Y ) is U(Y )-measurable.
                
   • A XdP = A E(X | Y ) dP for all A ∈ U(Y ).

Let us take these properties as the deﬁnition in the general case:

DEFINITION. Let Y be a random variable. Then E(X | Y ) is any U(Y )-measurable
random variable such that
                             
                       X dP =   E(X | Y ) dP for all A ∈ U(Y ).
                          A             A


   Finally, notice that it is not really the values of Y that are important, but rather just
the σ-algebra it generates. This motivates the next

DEFINITION. Let (Ω, U, P ) be a probability space and suppose V is a σ-algebra, V ⊆ U.
If X : Ω → Rn is an integrable random variable, we deﬁne

                                               E(X | V)

to be any random variable on Ω such that
    (i) E(X | V) is V-measurable, and
                   
   (ii) A X dP = A E(X | V) dP for all A ∈ V.

Interpretation. We can understand E(X | V) as follows. We are given the “information”
available in a σ-algebra V, from which we intend to build an estimate of the random
variable X. Condition (i) in the deﬁnition requires that E(X | V) be constructed from the
                                            28
information in V, and (ii) requires that our estimate be consistent with X, at least as
regards integration over events in V. We will later see that the conditional expectation
E(X | V), so deﬁned, has various additional nice properties.
Remark. We can check without diﬃculty that
(i) E(X | Y ) = E(X | U(Y )).
(ii) E(E(X | V)) = E(X).
(iii) E(X) = E(X | W), where W = {∅, Ω} is the trivial σ-algebra.                      
THEOREM. Let X be an integrable random variable. Then for each σ-algebra V ⊂
U, the conditional expectation E(X | V) exists and is unique up to V-measurable sets of
probability zero.
  We omit the proof, which uses a few advanced concepts from measure theory.

SECOND APPROACH TO CONDITIONAL EXPECTATION. An elegant al-
ternative approach to conditional expectations is based upon projections onto closed sub-
spaces, and is motivated by this example:
   Least squares method. Consider for the moment Rn and suppose that V is a proper
subspace.
   Suppose we are given a vector x ∈ Rn . The least squares problem asks us to ﬁnd a
vector z ∈ V so that
                                  |z − x| = min |y − x|.
                                           y∈V

It is not particularly diﬃcult to show that, given x, there exists a unique vector z ∈ V
solving this minimization problem. We call v the projection of x onto V ,

(7)                                  z = projV (x).


                                             x




                                                          z=projV(x)




                                       0

                                                      V




                                           29
  Now we want to ﬁnd formula characterizing z. For this take any other vector w ∈ V .
Deﬁne then
                              i(τ ) := |z + τ w − x|2 .

Since z + τ w ∈ V for all τ , we see that the function i(·) has a minimum at τ = 0. Hence
0 = i (0) = 2(z − x) · w; that is,

(8)                              x·w =z·w                for all w ∈ V.

The geometric interpretation is that the “error” x − z is perpendicular to the subspace
V.                                                                                   

   Projection of random variables. Motivated by the example above, we return now
to conditional expectation. Let us take the linear space L2 (Ω) = L2 (Ω, U), which consists
of all real-valued, U–measurable random variables Y , such that
                                                                1
                                                                 2
                                ||Y || :=                2
                                                        Y dP         < ∞.
                                                    Ω


We call ||Y || the norm of Y ; and if X, Y ∈ L2 (Ω), we deﬁne their inner product to be
                                            
                               (X, Y ) :=           XY dP = E(XY ).
                                                Ω

  Next, take as before V to be a σ-algebra contained in U. Consider then

                                        V := L2 (Ω, V),

the space of square–integrable random variables that are V–measurable. This is a closed
subspace of L2 (Ω). Consequently if X ∈ L2 (Ω), we can deﬁne its projection

(9)                                    Z = projV (X),

by analogy with (7) in the ﬁnite dimensional case. Almost exactly as we established (8)
above, we can likewise show

                            (X, W ) = (Z, W )                for all W ∈ V.

Take in particular W = χA for any set A ∈ V. In view of the deﬁnition of the inner
product, it follows that
                                           
                                X dP =              Z dP      for all A ∈ V.
                            A               A
                                                        30
Since Z ∈ V is V-measurable, we see that Z is in fact E(X | V), as deﬁned in the earlier
discussion. That is,
                               E(X | V) = projV (X).


   We could therefore alternatively take the last identity as a deﬁnition of conditional
expectation. This point of view also makes it clear that Z = E(X | V) solves the least
squares problem:
                              ||Z − X|| = min ||Y − X||;
                                                   Y ∈V

and so E(X | V) can be interpreted as that V-measurable random variable which is the best
least squares approximation of the random variable X.                                  

  The two introductory discussions now completed, we turn next to examining conditional
expectation more closely.

THEOREM (Properties of conditional expectation).
    (i) If X is V-measurable, then E(X | V) = X a.s.
   (ii) If a, b are constants, E(aX + bY | V) = aE(X | V) + bE(Y | V) a.s.
  (iii) If X is V-measurable and XY is integrable, then E(XY | V) = XE(Y | V) a.s.
  (iv) If X is independent of V, then E(X | V) = E(X) a.s.
   (v) If W ⊆ V, we have

                    E(X | W) = E(E(X | V) | W) = E(E(X | W) | V) a.s.

  (vi) The inequality X ≤ Y a.s. implies E(X | V) ≤ E(Y | V) a.s.

Proof.
  1. Statement (i) is obvious, and (ii) is easy to check
  2. By uniqueness a.s. of E(XY | V), it is enough in proving (iii) to show
                                             
(10)                        XE(Y | V) dP =             XY dP      for all A ∈ V.
                        A                         A

                    m
First suppose X =       i=1 bi χBi , where Bi ∈ V for i = 1, . . . , m. Then

                                     m    
                       XE(Y | V) dP =    bi        E(Y | V) dP
                     A                       A∩B
                                      i=1    i

                                                           ∈V
                                            
                                            m                           
                                        =         bi            Y dP =       XY dP.
                                            i=1         A∩Bi             A
                                                  31
This proves (10) if X is a simple function. The general case follows by approximation.
                                                        
  3. To show (iv), it suﬃces to prove A E(X) dP = A X dP for all A ∈ V. Let us
compute:
                                                                
               X dP =       χA X dP = E(χA X) = E(X)P (A) =         E(X) dP,
              A              Ω                                                      A

the third equality owing to independence.
   4. Assume W ⊆ V and let A ∈ W. Then
                                                         
                      E(E(X | V) | W) dP =   E(X | V) dP =   X dP,
                     A                                A                         A

since A ∈ W ⊆ V. Thus E(X | W) = E(E(X | V) | W) a.s.
   Furthermore, assertion (i) implies that E(E(X | W) | V) = E(X | W), since E(X | W) is
W-measurable and so also V-measurable. This establishes assertion (v).
   5. Finally, suppose X ≤ Y , and note that
                                                 
                         E(Y | V) − E(X | V) dP =    E(Y − X | V) dP
                       A
                                                  A

                                                =    Y − X dP ≥ 0
                                                             A

for all A ∈ V. Take A := {E(Y | V) − E(X | V) ≤ 0}. This event lies in V, and we deduce
from the previous inequality that P (A) = 0.                                         

LEMMA (Conditional Jensen’s Inequality). Suppose Φ : R → R is convex, with
E(|Φ(X)|) < ∞. Then
                      Φ(E(X | V)) ≤ E(Φ(X) | V).

  We leave the proof as an exercise.


I. MARTINGALES.

MOTIVATION. Suppose Y1 , Y2 , . . . are independent real-valued random variables, with

                                     E(Yi ) = 0     (i = 1, 2, . . . ).

Deﬁne the sum Sn := Y1 + · · · + Yn .
  What is our best guess of Sn+k , given the values of S1 , . . . , Sn ?? The answer is
           E(Sn+k | S1 , . . . , Sn ) = E(Y1 + · · · + Yn | S1 , . . . , Sn )
                                     + E(Yn+1 + · · · + Yn+k | S1 , . . . , Sn )
(11)
                                     = Y1 + · · · + Yn + E(Yn+1 + · · · + Yn+k ) = Sn .
                                                                           
                                                                          =0
                                                    32
Thus the best estimate of the “future value” of Sn+k , given the history up to time n, is
just Sn .
   If we interpret Yi as the payoﬀ of a “fair” gambling game at time i, and therefore Sn
as the total winnings at time n, the calculation above says that at any time one’s future
expected winnings, given the winnings to date, is just the current amount of money. So the
formula (11) characterizes a “fair” game.
  We incorporate these ideas into a formal deﬁnition:
DEFINITION. Let X1 , . . . , Xn , . . . be a sequence of real-valued random variables, with
E(|Xi |) < ∞ (i = 1, 2, . . . ). If

                       Xk = E(Xj | X1 , . . . , Xk )   a.s. for all j ≥ k,

we call {Xi }∞
             i=1 a (discrete) martingale.

DEFINITION. Let X(·) be a real–valued stochastic process. Then

                                 U(t) := U(X(s) | 0 ≤ s ≤ t),

the σ-algebra generated by the random variables X(s) for 0 ≤ s ≤ t, is called the history
of the process until (and including) time t ≥ 0.
DEFINITIONS. Let X(·) be a stochastic process, such that E(|X(t)|) < ∞ for all t ≥ 0.
 (i) If
               X(s) = E(X(t) | U(s)) a.s. for all t ≥ s ≥ 0,

then X(·) is called a martingale.
   (ii) If
                      X(s) ≤ E(X(t) | U(s)) a.s.       for all t ≥ s ≥ 0,

X(·) is a submartingale.                                                                 
Example. Let W (·) be a 1-dimensional Wiener process, as deﬁned later in Chapter 3.
Then
                              W (·) is a martingale.

  To see this, write W(t) := U(W (s)| 0 ≤ s ≤ t), and let t ≥ s. Then

               E(W (t) | W(s)) = E(W (t) − W (s) | W(s)) + E(W (s) | W(s))
                                = E(W (t) − W (s)) + W (s) = W (s)           a.s.

(The reader should refer back to this calculation after reading Chapter 3.)              

                                               33
LEMMA. Suppose X(·) is a real-valued martingale and Φ : R → R is convex. Then if
E(|Φ(X(t))|) < ∞ for all t ≥ 0,

                                         Φ(X(·)) is a submartingale.


  We omit the proof, which uses Jensen’s inequality.
  Martingales are important in probability theory mainly because they admit the following
powerful estimates:
THEOREM (Discrete martingale inequalities).
    (i) If {Xn }∞
                n=1 is a submartingale, then

                                                                  1
                                     P      max Xk ≥ λ        ≤     E(Xn+ )
                                            1≤k≤n                 λ

        for all n = 1, . . . and λ > 0.
   (ii) If {Xn }∞n=1 is a martingale and 1 < p < ∞, then

                                                                    p
                                                              p
                                E     max |Xk |     p
                                                        ≤               E(|Xn |p )
                                     1≤k≤n                   p−1

       for all n = 1, . . . .

   A proof is provided in Appendix B. Notice that (i) is a generalization of the Chebyshev
inequality. We can also extend these estimates to continuous–time martingales.
THEOREM (Martingale inequalities). Let X(·) be a stochastic process with contin-
uous sample paths a.s.
    (i) If X(·) is a submartingale, then

                                                    1
                 P    max X(s) ≥ λ             ≤      E(X(t)+ )     for all λ > 0, t ≥ 0.
                      0≤s≤t                         λ

   (ii) If X(·) is a martingale and 1 < p < ∞, then
                                                                    p
                                                              p
                          E         max |X(s)|p         ≤               E(|X(t)|p ).
                                    0≤s≤t                    p−1

Outline of Proof. Choose λ > 0, t > 0 and select 0 = t0 < t1 < · · · < tn = t. We check
that {X(ti )}ni=1 is a martingale and apply the discrete martingale inequality. Next choose
a ﬁner and ﬁner partition of [0, t] and pass to limits.
   The proof of assertion (ii) is similar.
                                                                                         
                                                        34
CHAPTER 3: BROWNIAN MOTION AND “WHITE NOISE”.


      A. Motivation and deﬁnitions
      B. Construction of Brownian motion
      C. Sample paths
      D. Markov property


      A. MOTIVATION AND DEFINITIONS.


SOME HISTORY. R. Brown in 1826–27 observed the irregular motion of pollen particles
suspended in water. He and others noted that
   • the path of a given particle is very irregular, having a tangent at no point, and
   • the motions of two distinct particles appear to be independent.
   In 1900 L. Bachelier attempted to describe ﬂuctuations in stock prices mathematically
and essentially discovered ﬁrst certain results later rederived and extended by A. Einstein
in 1905. Einstein studied the Brownian phenomena this way. Let us consider a long, thin
tube ﬁlled with clear water, into which we inject at time t = 0 a unit amount of ink, at
the location x = 0. Now let f (x, t) denote the density of ink particles at position x ∈ R
and time t ≥ 0. Initially we have

                               f (x, 0) = δ0 , the unit mass at 0.

Next, suppose that the probability density of the event that an ink particle moves from x
to x + y in (small) time τ is ρ(τ, y). Then
                                     ∞
                  f (x, t + τ ) =         f (x − y, t)ρ(τ, y) dy
                                     −∞
(1)                                  ∞
                                                     1
                              =            f − fx y + fxx y 2 + . . .   ρ(τ, y) dy.
                                    −∞               2
                                     ∞
But since ρ is a probability density, −∞ ρ dy = 1; whereas ρ(τ, −y) = ρ(τ, y) by symmetry.
                ∞                                       ∞
Consequently −∞ yρ dy = 0. We further assume that −∞ y 2 ρ dy, the variance of ρ, is
linear in τ :                     ∞
                                           y 2 ρ dy = Dτ, D > 0.
                                     −∞

We insert these identities into (1), thereby to obtain

                f (x, t + τ ) − f (x, t)   Dfxx (x, t)
                                         =             {+ lower order terms}.
                           τ                  2
                                               35
Sending now τ → 0, we discover
                                               D
                                          ft =   fxx
                                               2
  This is the diﬀusion equation, also known as the heat equation. This partial diﬀerential
equation, with the initial condition f (x, 0) = δ0 , has the solution
                                                  1         x2
                                 f (x, t) =         1/2
                                                        e− 2Dt .
                                              (2πDt)
This says the probability density at time t is N (0, Dt), for some constant D.
  In fact, Einstein computed:
                                          
                                          
                                          
                                             R = gas constant
                                          
                                          
                          RT                 T = absolute temperature
                   D=         , where
                         NA f             
                                            f = friction coeﬃcient
                                          
                                          
                                             NA = Avagodro’s number.
This equation and the observed properties of Brownian motion allowed J. Perrin to com-
pute NA (≈ 6 × 1023 = the number of molecules in a mole) and help to conﬁrm the atomic
theory of matter.
   N. Wiener in the 1920’s (and later) put the theory on a ﬁrm mathematical basis. His
ideas are at the heart of the mathematics in §B–D below.
    RANDOM WALKS. A variant of Einstein’s argument follows. We introduce a 2-
dimensional rectangular lattice, comprising the sites {(m∆x, n∆t) | m = 0, ±1, ±2, . . . ; n =
0, 1, 2, . . . }. Consider a particle starting at x = 0 and time t = 0, and at each time n∆t
moves to the left an amount ∆x with probability 1/2, to the right an amount ∆x with
probability 1/2. Let p(m, n) denote the probability that the particle is at position m∆x
at time n∆t. Then                                
                                                   0 m = 0
                                      p(m, 0) =
                                                   1 m = 0.
Also
                                        1              1
                        p(m, n + 1) =     p(m − 1, n) + p(m + 1, n),
                                        2              2
and hence
                                        1
             p(m, n + 1) − p(m, n) =      (p(m + 1, n) − 2p(m, n) + p(m − 1, n)).
                                        2
  Now assume
                        (∆x)2
                              =D        for some positive constant D.
                         ∆t
This implies
            p(m, n + 1) − p(m, n)   D      p(m + 1, n) − 2p(m, n) + p(m − 1, n)
                                  =                                                 .
                     ∆t             2                     (∆x)2
                                              36
                                                                            2
   Let ∆t → 0, ∆x → 0, m∆x → x, n∆t → t, with (∆x)          ∆t  ≡ D. Then presumably
p(m, n) → f (x, t), which we now interpret as the probability density that particle is at x
at time t. The above diﬀerence equation becomes formally in the limit
                                            D
                                       ft = fxx ,
                                            2
and so we arrive at the diﬀusion equation again.
  MATHEMATICAL JUSTIFICATION. A more careful study of this technique of
passing to limits with random walks on a lattice depends upon the Laplace–De Moivre
Theorem.
  As above we assume the particle moves to the left or right a distance ∆x with probability
1/2. Let X(t) denote the position of particle at time t = n∆t (n = 0, . . . ). Deﬁne
                                               
                                               n
                                       Sn :=         Xi ,
                                               i=1
where the Xi are independent random variables such that
                                 
                                   P (Xi = 0) = 1/2
                                      P (Xi = 1) = 1/2
for i = 1, . . . . Then V (Xi ) = 14 .
   Now Sn is the number of moves to the right by time t = n∆t. Consequently
                       X(t) = Sn ∆x + (n − Sn )(−∆x) = (2Sn − n)∆x.
Note also
                         V (X(t)) = (∆x)2 V (2Sn − n)
                                 = (∆x)2 4V (Sn ) = (∆x)2 4nV (X1 )
                                                   (∆x)2
                                 = (∆x)2 n =             t.
                                                    ∆t
                   2
Again assume (∆x)
              ∆t = D. Then
                                                                                 
                                          Sn − n2       √                 Sn − n2       √
              X(t) = (2Sn − n)∆x =         n               n∆x =          n               tD.
                                               4                                4

Then Laplace–De Moivre Theorem thus implies
                                                                                                 
                                                              a    Sn − n   b
                lim
                n→∞
                           P (a ≤ X(t) ≤ b) = lim            √    ≤ n 2 ≤ √
                                                   n→∞         tD            tD
                  (∆x)2                                                4
            t=n∆t, ∆t =D
                                                          √b
                                               1               tD      x2
                                             =√                     e− 2 dx
                                                2π          √a
                                                             tD
                                                               b
                                                 1                     x2
                                             =√                     e− 2Dt dx.
                                                2πDt           a
                                             37
Once again, and rigorously this time, we obtain the N (0, Dt) distribution.             


   Inspired by all these considerations, we now introduce Brownian motion, for which we
take D = 1:

DEFINITION. A real-valued stochastic process W (·) is called a Brownian motion or
Wiener process if
    (i) W (0) = 0 a.s.,
   (ii) W (t) − W (s) is N (0, t − s) for all t ≥ s ≥ 0,
  (iii) for all times 0 < t1 < t2 < · · · < tn , the random variables W (t1 ), W (t2 ) −
        W (t1 ), . . . , W (tn ) − W (tn−1 ) are independent (“independent increments”).

  Notice in particular that

                    E(W (t)) = 0, E(W 2 (t)) = t      for each time t ≥ 0.


   The Central Limit Theorem Further provides some further motivation for our deﬁnition
of Brownian motion, since we can expect that any suitably scaled sum of independent,
random disturbances aﬀecting the postion of a moving particle will result in a Gaussian
distribution.



    B. CONSTRUCTION OF BROWNIAN MOTION.


   COMPUTATION OF JOINT PROBABILITIES. From the deﬁnition we know
that if W (·) is a Brownian motion, then for all t > 0 and a ≤ b,

                                                         b
                                                1                x2
                          P (a ≤ W (t) ≤ b) = √               e− 2t dx,
                                                2πt       a


since W (t) is N (0, t).
    Suppose we now choose times 0 < t1 < · · · < tn and real numbers ai ≤ bi , for i =
1, . . . , n. What is the joint probability

                       P (a1 ≤ W (t1 ) ≤ b1 , · · · , an ≤ W (tn ) ≤ bn )?

In other words, what is the probability that a sample path of Brownian motion takes values
between ai and bi at time ti for each i = 1, . . . n?
                                             38
                                                     a3
                                                                                      a5


                                  a1       a2
                                                     b3
                                                                  a4



                                           b2                     b4                  b5
                                  b1
                                 t1       t2       t3            t4                  t5


      We can guess the answer as follows. We know
                                                                b1         x2
                                                                         − 2t1
                                                                       e     1
                                 P (a1 ≤ W (t1 ) ≤ b1 ) =              √          dx1 ;
                                                                 a1        2πt1
and given that W (t1 ) = x1 , a1 ≤ x1 ≤ b1 , then presumably the process is N (x1 , t2 − t1 )
on the interval [t1 , t2 ]. Thus the probability that a2 ≤ W (t2 ) ≤ b1 , given that W (t1 ) = x1 ,
should equal
                                  b2                  |x −x |2
                                           1          − 2 1
                                                    e 2(t2 −t1 ) dx2 .
                                  a2    2π(t2 − t1 )
Hence it should be that
                                                         b1  b2
   P (a1 ≤ W (t1 ) ≤ b1 , a2 ≤ W (t2 ) ≤ b2 ) =                       g(x1 , t1 | 0)g(x2 , t2 − t1 | x1 ) dx2 dx1
                                                          a1    a2

for
                                                           1 − (x−y)2
                                        g(x, t | y) := √       e 2t   .
                                                           2πt
      In general, we would therefore guess that


         P (a1 ≤ W (t1 ) ≤ b1 , . . . , an ≤ W (tn ) ≤ bn ) =
               b1  bn
(2)
                  ···      g(x1 , t1 | 0)g(x2 , t2 − t1 | x1 ) . . . g(xn , tn − tn−1 | xn−1 ) dxn . . . dx1 .
                a1       an


      The next assertion conﬁrms and extends this formula.
THEOREM. Let W (·) be a one-dimensional Wiener process. Then for all positive in-
tegers n, all choices of times 0 = t0 < t1 < · · · < tn and each function f : Rn → R, we
have
                                      ∞      ∞
     Ef (W (t1 ), . . . , W (tn )) =     ···     f (x1 , . . . , xn )g(x1 , t1 | 0)g(x2 , t2 − t1 | x1 )
                                         −∞       −∞
                                                               . . . g(xn , tn − tn−1 | xn−1 ) dxn . . . dx1 .
                                                          39
   Our taking
                            f (x1 , . . . , xn ) = χ[a1 ,b1 ] (x1 ) · · · χ[an ,bn ] (xn )
gives (2).
Proof. Let us write Xi := W (ti ), Yi := Xi − Xi−1 for i = 1, . . . , n. We also deﬁne

                     h(y1 , y2 , . . . , yn ) := f (y1 , y1 + y2 , . . . , y1 + · · · + yn ).

Then
             Ef (W (t1 ), . . . , W (tn )) = Eh(Y1 , . . . , Yn )
                     ∞            ∞
                  =         ···        h(y1 , . . . , yn )g(y1 , t1 | 0)g(y2 , t2 − t1 | 0)
                        −∞         −∞
                                                    . . . g(yn , tn − tn−1 | 0)dyn . . . dy1
                        ∞          ∞
                   =         ···         f (x1 , . . . , xn )g(x1 , t1 | 0)g(x2 , t2 − t1 | x1 )
                        −∞         −∞
                                                    . . . g(xn , tn − tn−1 | xn−1 ) dxn . . . dx1 .
For the second equality we recalled that the random variables Yi = W (ti ) − W (ti−1 ) are
independent for i = 1, . . . , n, and that each Yi is N (0, ti − ti−1 ). We also changed variables
using the identities yi = xi − xi−1 for i = 1, . . . , n and x0 = 0. The Jacobian for this
change of variables equals 1.                                                                   

   BUILDING A ONE-DIMENSIONAL WIENER PROCESS. The main issue
now is to demonstrate that a Brownian motion actually exists.
   Our method will be to develop a formal expansion of white noise ξ(·) in terms of a clev-
erly selected orthonormal basis of L2 (0, 1), the space of all real-valued, square–integrable
funtions deﬁned on (0, 1) . We will then integrate the resulting expression in time, show
that this series converges, and prove then that we have built a Wiener process. This
procedure is a form of “wavelet analysis”: see Pinsky [P].
   We start with an easy lemma.
LEMMA. Suppose W (·) is a one-dimensional Brownian motion. Then

                    E(W (t)W (s)) = t ∧ s = min{s, t}                     for t ≥ 0, s ≥ 0.

Proof. Assume t ≥ s ≥ 0. Then

                    E(W (t)W (s)) = E((W (s) + W (t) − W (s))W (s))
                                         = E(W 2 (s)) + E((W (t) − W (s))W (s))
                                         = s + E(W (t) − W (s))E(W (s))
                                                             
                                                            =0                  =0
                                         = s = t ∧ s,
                                                    40
since W (s) is N (0, s) and W (t) − W (s) is independent of W (s).                        
HEURISTICS. Remember from Chapter 1 that the formal time-derivative
                                              dW (t)
                                   Ẇ (t) =          = ξ(t)
                                               dt
is “1-dimensional white noise”. As we will see later however, for a.e. ω the sample path
t → W (t, ω) is in fact diﬀerentiable for no time t ≥ 0. Thus Ẇ (t) = ξ(t) does not really
exist.
    However, we do have the heuristic formula

(3)                             “E(ξ(t)ξ(s)) = δ0 (s − t)”,

where δ0 is the unit mass at 0. A formal “proof” is this. Suppose h > 0, ﬁx t > 0, and set
               W (t + h) − W (t)     W (s + h) − W (s)
φh (s) := E
                       h                     h
    1
  =   [E(W (t + h)W (s + h)) − E(W (t + h)W (s)) − E(W (t)W (s + h)) + E(W (t)W (s))]
   h2
    1
  = 2 [((t + h) ∧ (s + h)) − ((t + h) ∧ s) − (t ∧ (s + h)) + (t ∧ s)].
   h




                                                           graph of φh
                         height = 1/h




                                          t-h    t   t+h

                                              
    Then φh (s) → 0 as h → 0, t = s. But φh (s) ds = 1, and so presumably φh (s) →
δ0 (s − t) in some sense, as h → 0. In addition, we expect that φh (s) → E(ξ(t)ξ(s)). This
gives the formula (3) above.                                                            

Remark: Why Ẇ(·) = ξ(·) is called white noise. If X(·) is any real-valued stochastic
process with E(X 2 (t)) < ∞ for all t ≥ 0, we deﬁne

                            r(t, s) := E(X(t)X(s))     (t, s ≥ 0),

the autocorrelation function of X(·). If r(t, s) = c(t − s) for some function c : R → R and
if E(X(t)) = E(X(s)) for all t, s ≥ 0, X(·) is called stationary in the wide sense. A white
noise process ξ(·) is by deﬁnition Gaussian, wide sense stationary, with c(·) = δ0 .
                                              41
  In general we deﬁne
                                              ∞
                                        1
                              f (λ) :=                   e−iλt c(t) dt        (λ ∈ R)
                                       2π        −∞


to be the spectral density of a process X(·). For white noise, we have
                                        ∞
                                 1                                        1
                        f (λ) =                  e−iλt δ0 dt =                 for all λ.
                                2π         −∞                            2π

Thus the spectral density of ξ(·) is ﬂat; that is, all “frequencies” contribute equally in
the correlation function, just as—by analogy—all colors contribute equally to make white
light.                                                                                  

   RANDOM FOURIER SERIES. Suppose now {ψn }∞                 n=0 is a complete, orthonormal
basis of L (0, 1), where ψn = ψn (t) are functions of 0 ≤ t ≤ 1 only and so are not random
          2

variables. The orthonormality means that
                           1
                                  ψn (s)ψm (s) ds = δmn                   for all m, n.
                              0

We write formally
                                           ∞
                                           
(4)                               ξ(t) =         An ψn (t)            (0 ≤ t ≤ 1).
                                           n=0

It is easy to see that then                        1
                                       An =                  ξ(t)ψn (t) dt.
                                                     0

We expect that the An are independent and Gaussian, with E(An ) = 0. Therefore to be
consistent we must have for m = n
                                                      1 1
        0 = E(An )E(Am ) = E(An Am ) =                                E(ξ(t)ξ(s))ψn (t)ψm (s) dtds
                                                         0        0
                                                      1 1
                                                 =                    δ0 (s − t)ψn (t)ψm (s) dtds   by (3)
                                                         0        0
                                                      1
                                                 =            ψn (s)ψm (s) ds.
                                                         0

But this is already automatically true as the ψn are orthogonal. Similarly,
                                                      1
                                     E(A2n ) =                ψn2 (s) ds = 1.
                                                         0
                                                             42
Consequently if the An are independent and N (0, 1), it is reasonable to believe that formula
(4) makes sense. But then the Brownian motion W (·) should be given by

                                       t                   ∞
                                                                       t
(5)                        W (t) :=         ξ(s) ds =             An         ψn (s) ds.
                                       0                    n=0         0


This seems to be true for any orthonormal basis, and we will next make this rigorous by
choosing a particularly nice basis.


LÉVY–CIESIELSKI CONSTRUCTION OF BROWNIAN MOTION

DEFINITION. The family {hk (·)}∞
                               k=0 of Haar functions are deﬁned for 0 ≤ t ≤ 1 as
follows:
                                    h0 (t) := 1        for 0 ≤ t ≤ 1.
                                              
                                                  1    for 0 ≤ t ≤ 12
                                 h1 (t) :=
                                                  −1    for 12 < t ≤ 1.

If 2n ≤ k < 2n+1 , n = 1, 2, . . . , we set
                                  n/2          n     k−2n +1/2
                                 
                                 2          2n ≤ t ≤
                                        for k−2           2n
                                                  n
                        hk (t) := −2n/2 for k−2 n+1/2 < t ≤ k−2nn +1
                                 
                                                 2            2
                                   0 otherwise.




                                       n/2                             graph of hk
                           height = 2




                          width = 2 -(n+1)




                                 Graph of a Haar function

                                                       43
LEMMA 1. The functions {hk (·)}∞                                                         2
                                        k=0 form a complete, orthonormal basis of L (0, 1).
                     1              1        1
Proof. 1. We have 0 h2k dt = 2n 2n+1       + 2n+1   = 1.
   Note also that for all l > k, either hk hl = 0 for all t or else hk is constant on the support
of hl . In this second case
                                1                    1
                                   hl hk dt = ±2 n/2
                                                          hl dt = 0.
                                  0                         0
                              1
   2. Suppose f ∈ L2 (0, 1), 0 f hk dt = 0 for all k = 0, 1, . . . . We will prove f = 0 almost
everywhere.
                       1                                     1/2           1
   If n = 0, we have 0 f dt = 0. Let n = 1. Then 0 f dt = 1/2 f dt; and both
                               1/2       1           1
are equal to zero, since 0 = 0 f dt + 1/2 f dt = 0 f dt. Continuing in this way, we
         k+1                                           r
deduce 2n+1k  f dt = 0 for all 0 ≤ k < 2n+1 . Thus s f dt = 0 for all dyadic rationals
         2n+1
0 ≤ s ≤ r ≤ 1, and so for all 0 ≤ s ≤ r ≤ 1. But
                                        r
                                     d
                             f (r) =       f (t) dt = 0           a.e. r.
                                     dr 0
                                                                                               
DEFINITION. For k = 1, 2, . . . ,
                                           t
                              sk (t) :=         hk (s) ds   (0 ≤ t ≤ 1)
                                           0

is the k th –Schauder function.

                                        -(n+2)/2
                           height = 2
                                                                graph of sk




                                               -n
                                  width = 2


                            Graph of a Schauder function
                                                                                     n     n
  The graph of sk is a “tent” of height 2−n/2−1 , lying above the interval [ k−2
                                                                              2n ,
                                                                                   k−2 +1
                                                                                     2n   ].
Consequently if 2 ≤ k < 2
                 n        n+1
                              , then

                                      max |sk (t)| = 2−n/2−1 .
                                      0≤t≤1
                                                    44
   Our goal is to deﬁne
                                                   ∞
                                                   
                                       W (t) :=          Ak sk (t)
                                                   k=0

for times 0 ≤ t ≤ 1, where the coeﬃcients {Ak }∞    k=0 are independent, N (0, 1) random
variables deﬁned on some probability space.
   We must ﬁrst of all check whether this series converges.
LEMMA 2. Let {ak }∞
                  k=0 be a sequence of real numbers such that

                                   |ak | = O(k δ )          as k → ∞

for some 0 ≤ δ < 1/2. Then the series
                                             ∞
                                             
                                                   ak sk (t)
                                             k=0

converges uniformly for 0 ≤ t ≤ 1.
Proof. Fix ε > 0. Notice that for 2n ≤ k < 2n+1 , the functions sk (·) have disjoint supports.
Set
                            bn := n maxn+1 |ak | ≤ C(2n+1 )δ .
                                      2 ≤k<2

Then for 0 ≤ t ≤ 1,
                          ∞
                                                ∞
                                                 
                               |ak ||sk (t)| ≤         bn n maxn+1 |sk (t)|
                                                            2 ≤k<2
                        k=2m                     n=m
                                                              0≤t≤1
                                                   ∞
                                                   
                                           ≤C            (2n+1 )δ 2−n/2−1 < ε
                                                   n=m

for m large enough, since 0 ≤ δ < 1/2.                                                      

LEMMA 3. Suppose {Ak }∞
                      k=1 are independent, N (0, 1) random variables. Then for al-
most every ω,                     
                     |Ak (ω)| = O( log k) as k → ∞.

   In particular, the numbers {Ak (ω)}∞
                                      k=1 almost surely satisfy the hypothesis of Lemma
2 above.
Proof. For all x > 0, k = 2, . . . , we have
                                                  ∞
                                             2          s2
                            P (|Ak | > x) = √        e− 2 ds
                                              2π x
                                                     
                                             2 − x2 ∞ − s2
                                          ≤√ e     4       e 4 ds
                                              2π      x
                                                       x2
                                            ≤ Ce− 4 ,
                                                45
                               √
for some constant C. Set x := 4 log k; then

                                                                  1
                              P (|Ak | ≥ 4 log k) ≤ Ce−4 log k = C 4 .
                                                                  k
         1
Since     k4 < ∞, the Borel–Cantelli Lemma implies

                                                
                                    P (|Ak | ≥ 4 log k i.o.) = 0.

Therefore for almost every sample point ω, we have
                                                   
                               |Ak (ω)| ≤ 4            log k   provided k ≥ K,

where K depends on ω.                                                                                 

               ∞
LEMMA 4.         k=0 sk (s)sk (t) = t ∧ s for each 0 ≤ s, t ≤ 1.

Proof. Deﬁne for 0 ≤ s ≤ 1,
                                                       
                                                           1   0≤τ ≤s
                                        φs (τ ) :=
                                                           0   s < τ ≤ 1.

Then if s ≤ t, Lemma 1 implies
                                               1                ∞
                                                                 
                                    s=              φt φs dτ =         ak bk ,
                                               0                 k=0


where                 1                 t                                 1
              ak =         φt hk dτ =         hk dτ = sk (t), bk =               φs hk dτ = sk (s).
                      0                   0                                  0

                                                                                                      


THEOREM. Let {Ak }∞    k=0 be a sequence of independent, N (0, 1) random variables de-
ﬁned on the same probability space. Then the sum
                                              ∞
                                              
                             W (t, ω) :=            Ak (ω)sk (t)       ( 0 ≤ t ≤ 1)
                                              k=0


converges uniformly in t, for a.e. ω. Furthermore
    (i) W (·) is a Brownian motion for 0 ≤ t ≤ 1, and
   (ii) for a.e. ω, the sample path t → W (t, ω) is continuous.
                                             46
Proof. 1. The uniform convergence is a consequence of Lemmas 2 and 3; this implies (ii).
   2. To prove W (·) is a Brownian motion, we ﬁrst note that clearly W (0) = 0 a.s.
   We assert as well that W (t) − W (s) is N (0, t − s) for all 0 ≤ s ≤ t ≤ 1. To prove this,
let us compute

                                                   ∞
              E(eiλ(W (t)−W (s)) ) = E(eiλ            k=0 Ak (sk (t)−sk (s))       )
                                           ∞
                                           !
                                       =         E(eiλAk (sk (t)−sk (s)) )              by independence
                                           k=0
                                           !∞
                                                    λ2
                                                 e− 2 (sk (t)−sk (s))
                                                                        2
                                       =                                          since Ak is N (0, 1)
                                           k=0
                                              λ2
                                                   ∞
                                       = e− 2
                                                                             2
                                                     k=0 (sk (t)−sk (s))


                                              λ2
                                                   ∞
                                       = e− 2
                                                          2                    2
                                                     k=0 sk (t)−2sk (t)sk (s)+sk (s)


                                              λ2
                                       = e− 2 (t−2s+s)             by Lemma 4
                                                2
                                            − λ2 (t−s)
                                       =e                .


By uniqueness of characteristic functions, the increment W (t) − W (s) is N (0, t − s), as
asserted.
   3. Next we claim for all m = 1, 2, . . . and for all 0 = t0 < t1 < · · · < tm ≤ 1, that


                                  m                                   !
                                                                       m           λ2
                              i    j=1 λj (W (tj )−W (tj−1 ))                    − 2j (tj −tj−1 )
(6)                      E(e                                      )=         e                      .
                                                                       j=1



Once this is proved, we will know from uniqueness of characteristic functions that


        FW (t1 ),...,W (tm )−W (tm−1 ) (x1 , . . . , xm ) = FW (t1 ) (x1 ) · · · FW (tm )−W (tm−1 ) (xm )


for all x1 , . . . xm ∈ R. This proves that


                        W (t1 ), . . . , W (tm ) − W (tm−1 )            are independent.


Thus (6) will establish the Theorem.
                                                             47
  Now in the case m = 2, we have

   E(ei[λ1 W (t1 )+λ2 (W (t2 )−W (t1 ))] ) = E(ei[(λ1 −λ2 )W (t1 )+λ2 W (t2 )] )
                                                                ∞                        ∞
                                          = E(ei(λ1 −λ2 )          k=0 Ak sk (t1 )+iλ2          k=0 Ak sk (t2 )   )
                                              ∞
                                              !
                                          =          E(eiAk [(λ1 −λ2 )sk (t1 )+λ2 sk (t2 )] )
                                              k=0
                                              !∞
                                                     e− 2 ((λ1 −λ2 )sk (t1 )+λ2 sk (t2 ))
                                                        1                                   2
                                          =
                                              k=0
                                                     ∞
                                          = e− 2        k=0 (λ1 −λ2 )    sk (t1 )+2(λ1 −λ2 )λ2 sk (t1 )sk (t2 )+λ22 s2k (t2 )
                                                 1                      2 2




                                          = e− 2 [(λ1 −λ2 ) t1 +2(λ1 −λ2 )λ2 t1 +λ2 t2 ]
                                                 1             2                           2
                                                                                                     by Lemma 4
                                              − 12 [λ21 t1 +λ22 (t2 −t1 )]
                                          =e                                 .

This is (6) for m = 2, and the general case follows similarly.                                                                  


THEOREM (Existence of one-dimensional Brownian motion). Let (Ω, U, P ) be a
probability space on which countably many N (0, 1), independent random variables {An }∞
                                                                                      n=1
are deﬁned. Then there exists a 1-dimensional Brownian motion W (·) deﬁned for ω ∈ Ω,
t ≥ 0.

Outline of proof. The theorem above demonstrated how to build a Brownian motion on
0 ≤ t ≤ 1. As we can reindex the N (0, 1) random variables to obtain countably many
families of countably many random variables, we can therefore build countably many
independent Brownian motions W n (t) for 0 ≤ t ≤ 1.
   We assemble these inductively by setting

                   W (t) := W (n − 1) + W n (t − (n − 1))                        for n − 1 ≤ t ≤ n.

Then W (·) is a one-dimensional Brownian motion, deﬁned for all times t ≥ 0.                                                    

  This theorem shows we can construct a Brownian motion deﬁned on any probability
space on which there exist countably many independent N (0, 1) random variables.
  We mostly followed Lamperti [L1] for the foregoing theory.



         3. BROWNIAN MOTION IN Rn .

  It is straightforward to extend our deﬁnitions to Brownian motions taking values in Rn .
                                            48
DEFINITION. An Rn -valued stochastic process W(·) = (W 1 (·), . . . , W n (·)) is an n-
dimensional Wiener process (or Brownian motion) provided
  (i) for each k = 1, . . . , n, W k (·) is a 1-dimensional Wiener process,
and
  (ii) the σ-algebras W k := U(W k (t) | t ≥ 0) are independent, k = 1, . . . , n.
  By the arguments above we can build a probability space and on it n independent 1-
dimensional Wiener processes W k (·) (k = 1, . . . , n). Then W(·) := (W 1 (·), . . . , W n (·)) is
an n-dimensional Brownian motion.

LEMMA. If W(·) is an n-dimensional Wiener process, then

(i)                       E(W k (t)W l (s)) = (t ∧ s)δkl           (k, l = 1, . . . , n),

(ii)      E((W k (t) − W k (s))(W l (t) − W l (s))) = (t − s)δkl             (k, l = 1, . . . , n; t ≥ s ≥ 0.)

Proof. If k = l, E(W k (t)W l (s)) = E(W k (t))E(W l (s)) = 0, by independence. The proof
of (ii) is similar.                                                                     

THEOREM. (i) If W(·) is an n-dimensional Brownian motion, then W(t) is N (0, tI)
for each time t > 0. Therefore
                                                 
                                            1         |x|2
                                                     − 2t
                          P (W(t) ∈ A) =            e      dx
                                         (2πt)n/2 A
for each Borel subset A ⊆ Rn .
   (ii) More generally, for each m = 1, 2, . . . and each function f : Rn × Rn × · · · Rn → R,
we have
                                            
       Ef (W(t1 ), . . . , W(tm )) =     ···     f (x1 , . . . , xm )g(x1 , t1 | 0)g(x2 , t2 − t1 | x1 )
(7)                                   Rn      Rn
                                                        . . . g(xm , tm − tm−1 | xm−1 ) dxm . . . dx1 .
where
                                                         1       |x−y|2
                                                                − 2t
                                     g(x, t | y) :=            e        .
                                                      (2πt)n/2

Proof. For each time t > 0, the random variables W 1 (t), . . . , W n (t) are independent.
Consequently for each point x = (x1 , . . . , xn ) ∈ Rn , we have
                       fW(t) (x1 , . . . , xn ) = fW 1 (t) (x1 ) · · · fW n (t) (xn )
                                                    1        x2         1       x2
                                                           − 2t1               − 2t
                                                                                  n
                                               =      1/2
                                                          e      ···      1/2
                                                                              e
                                                 (2πt)               (2πt)
                                                    1        |x|2
                                               =      n/2
                                                          e− 2t = g(x, t | 0).
                                                 (2πt)
      We prove formula (7) as in the one-dimensional case.                                                       
                                             49
    C. SAMPLE PATH PROPERTIES.

   In this section we will demonstrate that for almost every ω, the sample path t → W(t, ω)
is uniformly Hölder continuous for each exponent γ < 12 , but is nowhere Hölder continuous
with any exponent γ > 12 . In particular t → W(t, ω) almost surely is nowhere diﬀerentiable
and is of inﬁnite variation for each time interval.
DEFINITIONS. (i) Let 0 < γ ≤ 1. A function f : [0, T ] → R is called uniformly Hölder
continuous with exponent γ > 0 if there exists a constant K such that

                      |f (t) − f (s)| ≤ K|t − s|γ    for all s, t ∈ [0, T ].

  (ii) We say f is Hölder continuous with exponent γ > 0 at the point s if there exists a
constant K such that

                       |f (t) − f (s)| ≤ K|t − s|γ    for all t ∈ [0, T ].


  1. CONTINUITY OF SAMPLE PATHS.
  A good general theorem to prove Hölder continuity is this important theorem of Kol-
mogorov:
THEOREM. Let X(·) be a stochastic process with continuous sample paths a.s., such
that
                     E(|X(t) − X(s)|β ) ≤ C|t − s|1+α

for constants β, α > 0, C ≥ 0 and for all 0 ≤ t, s.
   Then for each 0 < γ < α  β , T > 0, and almost every ω, there exists a constant K =
K(ω, γ, T ) such that

                  |X(t, ω) − X(s, ω)| ≤ K|t − s|γ       for all 0 ≤ s, t ≤ T.


    Hence the sample path t → X(t, ω) is uniformly Hölder continuous with exponent γ on
[0, T ].
APPLICATION TO BROWNIAN MOTION. Consider W(·), an n-dimensional
Brownian motion. We have for all integers m = 1, 2, . . .
                                            
                                    1              2m − 2r
                                                          |x|2
        E(|W(t) − W(s)| ) =
                        2m
                                                |x|   e        dx for r = t − s > 0
                                (2πr)n/2 Rn
                                              
                                    1                2m − 2
                                                            |y|2            x
                             =        n/2
                                          r m
                                                  |y|   e        dy   y=√
                                (2π)           Rn                            r
                             = Cr = C|t − s| .
                                   m              m

                                            50
Thus the hypotheses of Kolmogorov’s theorem hold for β = 2m, α = m − 1. The process
W(·) is thus Hölder continuous a.s. for exponents

                                               α  1  1
                                   0<γ<          = −            for all m.
                                               β  2 2m

Thus for almost all ω and any T > 0, the sample path t → W(t, ω) is uniformly Hölder
continuous on [0, T ] for each exponent 0 < γ < 1/2.                                
Proof. 1. For simplicity, take T = 1. Pick any
                                                          α
(8)                                             0<γ<        .
                                                          β

Now deﬁne for n = 1, . . . ,
                                                                "
                   i+1       i    1
                  
          An := X( n ) − X( n ) > nγ for some integer 0 ≤ i < 2 .
                                                                 n
                           2 2     2

Then
                n
               2 −1                     
                          i+1        i         1
      P (An ) ≤       P X( n ) − X( n ) > nγ
                 i=0
                             2       2         2
                 n
                2 −1
                                        β 
                                                                 −β
                          i+1        i            1
              ≤       E X( n ) − X( n )        nγ
                                                                      by Chebyshev’s inequality
                 i=0
                             2       2            2
                   n
                  2 −1            1+α          −β
                           1              1
             ≤C
                  i=0
                          2n             2nγ
                  n(−α+γβ)
             = C2              .
                                        ∞
Since (8) forces −α + γβ < 0, we deduce n=1 P (An ) < ∞; whence the Borel–Cantelli
Lemma implies
                                   P (An i.o.) = 0.

So for a.e. ω there exists m = m(ω) such that
                                            
                    i+1               i     
                   X(      , ω) − X(    , ω)≤ 1               for 0 ≤ i ≤ 2n − 1
                        2n           2n      2nγ

provided n ≥ m. But then we have
                  i+1                    
                    X( 2n , ω) − X( 2in , ω) ≤ K 2nγ
                                                   1
                                                                 for 0 ≤ i ≤ 2n − 1
(9)
                   for all n ≥ 0,

if we select K = K(ω) large enough.
                                                     51
  2.* We now claim (9) implies the stated Hölder continuity. To see this, ﬁx ω ∈ Ω for
which (9) holds. Let t1 , t2 ∈ [0, 1] be dyadic rationals, 0 < t2 − t1 < 1. Select n ≥ 1 so that

(10)                                  2−n ≤ t < 2−(n−1) for t := t2 − t1 .

We can write                
                                t1 = 2in − 2p11 − · · · − 2p1k     (n < p1 < · · · < pk )
                                t2 = 2jn + 21q1 + · · · + 21ql     (n < q1 < · · · < ql )
for
                                                         i   j
                                                 t1 ≤    n
                                                           ≤ n ≤ t2 .
                                                        2   2
Then
                                                  j−i         1
                                                     n
                                                       ≤ t < n−1
                                                   2        2
and so j = i or i + 1. In view of (9),
                                                                  
                                                            i − j γ
                                       n                   
                             |X(i/2 , ω) − X(j/2 , ω)| ≤ K  n  ≤ Ktγ .
                                                         n
                                                               2

Furthermore
                                                                                                                   
                                                                                                               1 γ
      |X(i/2 − 1/2
              n        p1
                            − · · · − 1/2 , ω) − X(i/2 − 1/2
                                            pr                n         p1
                                                                             − · · · − 1/2   pr−1             
                                                                                                    , ω)| ≤ K  pr 
                                                                                                                2

for r = 1, . . . , k; and consequently
                                                      k 
                                                      
                                                              
                                                         1 γ
                         |X(t1 , ω) − X(i/2 , ω)| ≤ K
                                                  n          
                                                         2pr 
                                                                  r=1
                                                                    ∞
                                                                    
                                                               K     1
                                                          ≤             since pr > n
                                                              2 r=1 2rγ
                                                               nγ

                                                               C
                                                          =       ≤ Ctγ by (10).
                                                              2nγ
In the same way we deduce

                                           |X(t2 , ω) − X(j/2n , ω)| ≤ Ctγ .

Add up the estimates above, to discover

                                      |X(t1 , ω) − X(t2 , ω)| ≤ C|t1 − t2 |γ

for all dynamic rationals t1 , t2 ∈ [0, 1] and some constant C = C(ω). Since t → X(t, ω) is
continuous for a.e. ω, the estimate above holds for all t1 , t2 ∈ [0, 1].                 

      *Omit the second step in this proof on ﬁrst reading.
                                                             52
Remark. The proof above can in fact be modiﬁed to show that if X(·) is a stochastic
process such that

                    E(|X(t) − X(s)|β ) ≤ C|t − s|1+α         (α, β > 0, C ≥ 0),

then X(·) has a version X̃(·) such that a.e. sample path is Hölder continuous for each
exponent 0 < γ < α/β. (We call X̃(·) a version of X(·) if P (X(t) = X̃(t)) = 1 for all
t ≥ 0.)
   So any Wiener process has a version with continuous sample paths a.s.             

  2. NOWHERE DIFFERENTIABILITY

   Next we prove that sample paths of Brownian motion are with probability one nowhere
Hölder continuous with exponent greater than 12 , and thus are nowhere diﬀerentiable.

THEOREM. (i) For each 12 < γ ≤ 1 and almost every ω, t → W(t, ω) is nowhere Hölder
continuous with exponent γ.
   (ii) In particular, for almost every ω, the sample path t → W(t, ω) is nowhere diﬀeren-
tiable and is of inﬁnite variation on each subinterval.

Proof. (Dvoretzky, Erdös, Kakutani) 1. It suﬃces to consider a one-dimensional Brownian
motion, and we may for simplicity consider only times 0 ≤ t ≤ 1.
  Fix an integer N so large that

                                                  1
                                       N     γ−       > 1.
                                                  2

Now if the function t → W (t, ω) is Hölder continuous with exponent γ at some point
0 ≤ s < 1, then

         |W (t, ω) − W (s, ω)| ≤ K|t − s|γ     for all t ∈ [0, 1] and some constant K.

For n  1, set i = [ns] + 1 and note that for j = i, i + 1, . . . , i + N − 1
                                                                
                    j           j + 1                      j    
                 W ( , ω) − W (       , ω) ≤ W (s, ω) − W ( , ω)
                    n             n                        n    
                                                                          
                                                                j+1       
                                                 
                                               + W (s, ω) − W (      , ω)
                                                                  n
                                                          γ             γ
                                                        j        j +  1 
                                             ≤ K s −  + s −          
                                                         n            n 
                                               M
                                             ≤ γ
                                               n
                                              53
for some constant M . Thus
                                                                          "
                           j        j + 1   M
           ω ∈ AM,n := W ( ) − W (
                 i
                                           ) ≤ for j = i, . . . , i + N − 1
                            n          n  nγ

for some 1 ≤ i ≤ n, some M ≥ 1, and all large n.
   Therefore the set of ω ∈ Ω such that W (ω, ·) is Hölder continuous with exponent γ at
some time 0 ≤ s < 1 is contained in
                                      ∞     ∞    ∞
                                                     n
                                                           AiM,n .
                                     M =1 k=1 n=k i=1

We will show this event has probability 0.
  2. For all k and M ,
                   ∞ n                       n       
                     
                 P          AiM,n ≤ lim inf P     AiM,n
                                            n→∞
                     n=k i=1                               i=1
                                                     
                                                     n
                                         ≤ lim inf         P (AiM,n )
                                            n→∞
                                                     i=1
                                                                               N
                                                                     1    M
                                         ≤ lim inf n P           |W ( )| ≤ γ       ,
                                            n→∞                      n    n
                                                    1
                                n ) − W ( n ) are N 0, n and independent. Now
since the random variables W ( j+1        j


                                                 √  M n−γ
                              1    M                n            nx2
                      P   |W ( )| ≤ γ           =√             e− 2 dx
                              n    n               2π −M n−γ
                                                       M n1/2−γ
                                                  1                 y2
                                                =√               e− 2 dy
                                                   2π −M n1/2−γ
                                                ≤ Cn1/2−γ .

We use this calculation to deduce:
                        ∞ n          
                          
                      P          AiM,n ≤ lim inf nC[n1/2−γ ]N = 0,
                                                  n→∞
                          n=k i=1

since N (γ − 1/2) > 1. This holds for all k, M . Thus
                                    ∞     ∞    ∞
                                                                   
                                                     n
                               P                           AiM,n       = 0,
                                    M =1 k=1 n=k i=1

and assertion (i) of the Theorem follows.
                                                 54
  3. If W (t, ω) is diﬀerentiable at s, then W (t, ω) would be Hölder continuous (with
exponent 1) at s. But this is almost surely not so. If W (t, ω) were of ﬁnite variation on
some subinterval, it would then be diﬀerentiable almost everywhere there.                
Interpretation. The idea underlying the proof is that if

                        |W (t, ω) − W (s, ω)| ≤ K|t − s|γ for all t,

then
                                j           j+1          M
                            |W ( , ω) − W (       , ω)| ≤ γ
                                n             n          n
for all n  1 and at least N values of j. But these are independent events of small
probability. The probability that the above inequality holds for all these j’s is a small
number to the large power N , and is therefore extremely small.                        




                        A sample path of Brownian motion


    D. MARKOV PROPERTY.

DEFINITION. If V is a σ-algebra, V ⊆ U, then

                            P (A | V) := E(χA | V)   for A ∈ U.

Therefore P (A | V) is a random variable, the conditional probability of A, given V.
                                            55
DEFINITION. If X(·) is a stochastic process, the σ-algebra

                                U(s) := U(X(r) | 0 ≤ r ≤ s)

is called the history of the process up to and including time s.
   We can informally interpret U(s) as recording the information available from our ob-
serving X(r) for all times 0 ≤ r ≤ s.
DEFINITION. An Rn -valued stochastic process X(·) is called a Markov process if

                       P (X(t) ∈ B | U(s)) = P (X(t) ∈ B | X(s)) a.s.

for all 0 ≤ s ≤ t and all Borel subset B of Rn .
   The idea of this deﬁnition is that, given the current value X(s), you can predict the
probabilities of future values of X(t) just as well as if you knew the entire history of the
process before time s. Loosely speaking, the process only “knows” its value at time s and
does not “remember” how it got there.
THEOREM. Let W(·) be an n-dimensional Wiener process. Then W(·) is a Markov
process, and
                                                 
                                         1            |x−W(s)|2
                                                     − 2(t−s)
(13)         P (W(t) ∈ B | W(s)) =                  e           dx a.s.
                                   (2π(t − s))n/2 B

for all 0 ≤ s < t, and Borel sets B .
  Note carefully that each side of this identity is a random variable.
Proof. We will only prove (13). Set
                                                     
                                         1                  |x−y|2
                           Φ(y) :=                       e− 2(t−s) dx.
                                   (2π(t − s))n/2    A

As Φ(W(s)) is U(W(s)) measurable, we must show
                              
(14)            χ{W(t)∈A} dP =    Φ(W(s)) dP for all C ∈ U(W(s)).
                 C                      C

Now if C ∈ U(W(s)), then C = {W(s) ∈ B} for some Borel set B ⊆ Rn . Hence
               
                   χ{W(t)∈A} dP = P (W(s) ∈ B, W (t) ∈ A)
                 C
                                   
                                =       g(y, s | 0)g(x, t − s | y) dxdy
                                  B A

                                =    g(y, s | 0)Φ(y) dy.
                                            B
                                                56
On the other hand,
                                         
                            Φ(W(s))dP =        χB (W(s))Φ(W(s)) dP
                        C                  Ω
                                                            |y|2
                                                          e− 2s
                                       =     χB (y)Φ(y)           dy
                                          Rn             (2πs)n/2
                                         
                                       =    g(y, s | 0)Φ(y) dy,
                                           B

and this last expression agrees with that above. This veriﬁes (14), and so establishes (13).
                                                                                          
Interpretation. The Markov property partially explains the nondiﬀerentiability of sam-
ple paths for Brownian motion, as discussed before in §C.
   If W(s, ω) = b, say, then the future behavior of W(t, ω) depends only upon this fact and
not on how W(t, ω) approached the point b as t → s− . Thus the path “cannot remember”
how to leave b in such a way that W(·, ω) will have a tangent there.                      




                                               57
CHAPTER 4: STOCHASTIC INTEGRALS, ITÔ’S FORMULA.


      A. Motivation
      B. Deﬁnition and properties of Itô integral
      C. Indeﬁnite Itô integrals
      D. Itô’s formula
      E. Itô integral in n-dimensions


A. MOTIVATION.

  Remember from Chapter 1 that we want to develop a theory of stochastic diﬀerential
equations of the form
                              
                                  dX = b(X, t)dt + B(X, t)dW
(SDE)
                                  X(0) = X0 ,

which we will in Chapter 5 interpret to mean
                                         t                     t
(1)                     X(t) = X0 +           b(X, s) ds +           B(X, s) dW
                                         0                       0

for all times t ≥ 0. But before we can study and solve such an integral equation, we must
ﬁrst deﬁne
                                         T
                                            G dW
                                               0

for some wide class of stochastic processes G, so that the right-hand side of (1) is at least
makes sense. Observe also that this is not at all obvious. For instance, since t → W(t, ω)
                                                T
is of inﬁnite variation for almost every ω, then 0 G dW simply cannot be understood as
an ordinary integral.
   A FIRST DEFINITION. Suppose now n = m = 1. One possible deﬁnition is due to
Paley, Wiener and Zygmund [P-W-Z]. Suppose g : [0, 1] → R is continuously diﬀerentiable,
with g(0) = g(1) = 0. Note carefully: g is an ordinary, deterministic function and not a
stochastic process. Then let us deﬁne
                                   1                    1
                                        g dW := −             g  W dt.
                                    0                    0

          1
Note that 0 g dW is therefore a random variable. Let us check out the properties following
from this deﬁnition:
                                                   58
LEMMA (Properties of the Paley–Wiener–Zygmund integral).
         1
  (i) E 0 g dW = 0.
           1      2   1 2
  (ii) E    0
              g dW   =  0
                          g dt.
              1              1
Proof. 1. E      g dW      = − 0 g  E(W (t)) dt.
               0                       
                                               =0
  2. To conﬁrm (ii), we calculate
                                2
                                                        1                                    1
                      1
                                                                
              E            g dW            =E                 g (t)W (t) dt                         g  (s)W (s) ds
                       0                                 0                                     0
                                                1 1
                                           =               g  (t)g  (s)E(W (t)W (s))dsdt
                                                0        0                        
                                                                                                  =t∧s
                                                1                   t                               1
                                                                                 
                                           =            g (t)             sg (s) ds +                        tg  (s) ds dt
                                                0                    0                                   t
                                                1                                     t
                                           =            g  (t) tg(t) −                        g ds − tg(t) dt
                                                0                                         0
                                                1                     t                                 1
                                                         
                                           =            g (t) −                   g ds dt =                      g 2 dt.
                                                0                         0                                  0

                                                                                                                              
  Discussion. Suppose now g ∈ L2 (0, 1). We can take a sequence of C 1 functions gn , as
                1
above, such that 0 (gn − g)2 dt → 0. In view of property (ii),
                                               1                       2
                                                                                          1
                           1
                   E            gm dW −                  gn dW                        =            (gm − gn )2 dt,
                            0                       0                                         0

               1
and therefore { 0 gn dW }∞                            2
                         n=1 is a Cauchy sequence in L (Ω). Consequently we can deﬁne

                                       1                                 1
                                            g dW := lim                               gn dW.
                                       0                      n→∞             0

The extended deﬁnition still satisﬁes properties (i) and (ii).
                                     1
   This is a reasonable deﬁnition of 0 g dW , except that this only makes sense for functions
g ∈ L2 (0, 1), and not for stochastic processes. If we wish to deﬁne the integral in (1),
                                                 t
                                                         B(X, s) dW,
                                                    0

then the integrand B(X, t) is a stochastic process and the deﬁnition above will not suﬃce.
                                             59
   We must devise a deﬁnition for a wider class of integrands (although the deﬁnition we
ﬁnally decide on will agree with that of Paley, Wiener, Zygmund if g happens to be a
deterministic C 1 function, with g(0) = g(1) = 0).
   RIEMANN SUMS. To continue our study of stochastic integrals with random inte-
grands, let us think about what might be an appropriate deﬁnition for
                                         T
                                               W dW = ?,
                                          0

where W (·) is a 1-dimensional Brownian motion. A reasonable procedure is to construct
a Riemann sum approximation, and then–if possible–to pass to limits.
DEFINITIONS. (i) If [0, T ] is an interval, a partition P of [0, T ] is a ﬁnite collection of
points in [0, T ]:
                      P := {0 = t0 < t1 < · · · < tm = T }.

(ii) Let the mesh size of P be |P | := max0≤k≤m−1 |tk+1 − tk |.
(iii) For ﬁxed 0 ≤ λ ≤ 1 and P a given partition of [0, T ], set

                       τk := (1 − λ)tk + λtk+1       (k = 0, . . . , m − 1).


  For such a partition P and 0 ≤ λ ≤ 1, we deﬁne

                                         
                                         m−1
                      R = R(P, λ) :=           W (τk )(W (tk+1 ) − W (tk )).
                                         k=0

                                                                 T
This is the corresponding Riemann sum approximation of             0
                                                                       W dW . The key question is
this: what happens if |P | → 0, with λ ﬁxed?
LEMMA (Quadratic variation). Let [a, b] be an interval in [0, ∞), and suppose

                           P n := {a = tn0 < tn1 < · · · < tnmn = b}

are partitions of [a, b], with |P n | → 0 as n → ∞. Then

                             n −1
                            m
                                    (W (tnk+1 ) − W (tnk ))2 → b − a
                             k=0

in L2 (Ω) as n → ∞.
  This assertion partly justiﬁes the heuristic idea, introduced in Chapter 1, that

                                         dW ≈ (dt)1/2 .
                                             60
                   mn −1
Proof. Set Qn :=     k=0       (W (tnk+1 ) − W (tnk ))2 . Then

                                         n −1
                                        m
                Qn − (b − a) =                   ((W (tnk+1 ) − W (tnk ))2 − (tnk+1 − tnk )).
                                           k=0

Hence
                                   n −1 m
                                  m     n −1
                                         
        E((Qn − (b − a)) ) =
                           2
                                                   E([(W (tnk+1 ) − W (tnk ))2 − (tnk+1 − tnk )]
                                     k=0    j=0

                                                              [(W (tnj+1 ) − W (tnj ))2 − (tnj+1 − tnj )]).

For k = j, the term in the double sum is

                       E((W (tnk+1 ) − W (tnk ))2 − (tnk+1 − tnk ))E(· · · ),

according to the independent increments, and thus equals 0, as W (t) − W (s) is N (0, t − s)
for all t ≥ s ≥ 0. Hence
                                                     n −1
                                                    m
                   E((Qn − (b − a))2 ) =                     E((Yk2 − 1)2 (tnk+1 − tnk )2 ),
                                                      k=0

where
                                   W (tnk+1 ) − W (tnk )
                               n
                        Yk = Yk :=    n                                   is N (0, 1).
                                         tk+1 − tnk
Therefore for some constant C
                                                       n −1
                                                      m
                   E((Qn − (a − b)) ) ≤ C   2
                                                              (tnk+1 − tnk )2
                                                       k=0
                                                 ≤ C | P | (b − a) → 0
                                                         n
                                                                                  as n → ∞.

                                                                                                              
  Remark. Passing if necessary to a subsequence,

                                n −1
                               m
                                       (W (tnk+1 ) − W (tnk ))2 → b − a a.s.
                               k=0

Pick an ω for which this holds and also for which the sample path is Hölder continuous
with some exponent 0 < γ < 12 . Then

                                                             n −1
                                                            m
                      b − a ≤ K lim sup |Pn |           γ
                                                                    |W (tnk+1 ) − W (tnk )|
                                         n→∞
                                                            k=0
                                                         61
for a constant K. Since |Pn | → 0, we see again that sample paths have inﬁnite variation
with probability one:
                              #m−1                       $
                                
                          sup       |W (tk+1 ) − W (tk )| = ∞.
                                     P
                                           k=0

                                                                                                              

  Let us now return to the question posed above, as to the limit of the Riemann sum
approximations.

LEMMA. If P n denotes a partition of [0, T ] and 0 ≤ λ ≤ 1 is ﬁxed, deﬁne

                                            n −1
                                           m
                                 Rn :=             W (τkn )(W (tnk+1 ) − W (tnk )).
                                            k=0


Then
                                                      W (T )2      1
                                         lim Rn =             + λ−              T,
                                     n→∞                2          2

the limit taken in L2 (Ω). That is,
                                                                           2
                                                                                
                                              W (T )2      1
                             E           Rn −         − λ−              T            → 0.
                                                2          2


   In particular the limit of the Riemann sum approximations depends upon the choice of
intermediate points tnk ≤ τkn ≤ tnk+1 , where τkn = (1 − λ)tnk + λtnk+1 .

Proof. We have

                n −1
               m
       Rn :=           W (τkn )(W (tnk+1 ) − W (tnk ))
               k=0
                              m −1
           W 2 (T ) 1  n

         =         −       (W (tnk+1 ) − W (tnk ))2
             2       2
                       k=0
                                               
                                             =:A
                 n −1
                m                                     n −1
                                                      m
            +           (W (τkn ) − W (tnk ))2 +              (W (tnk+1 ) − W (τkn ))(W (τkn ) − W (tnk )).
                 k=0                                   k=0
                                                                                                  
                              =:B                                               =:C


According to the foregoing Lemma, A → T2 in L2 (Ω) as n → ∞, and similarly B → λT as
                                         62
n → ∞. Next we study the term C:
        n −1
       m
   E([         (W (tnk+1 ) − W (τkn ))(W (τkn ) − W (tnk ))]2 )
         k=0
                                             n −1
                                            m
                                       =            E([W (tnk+1 ) − W (τkn )]2 )E([W (τkn ) − W (tnk )]2 )
                                            k=0
                                                                           (independent increments)
                                             n −1
                                            m
                                       =            (1 − λ)(tnk+1 − tnk )λ(tnk+1 − tnk )
                                            k=0
                                       ≤ λ(1 − λ)T |P n | → 0.

Hence C → 0 in L2 (Ω) as n → ∞.
  We combine the limiting expressions for the terms A, B, C, and thereby establish the
Lemma.                                                                              
                                                        T
  It turns out that Itô’s deﬁnition (later, in §B) of 0 W dW corresponds to the choice
λ = 0. That is,
                                 T
                                                W 2 (T ) T
                                    W dW =              −
                                  0               2        2
and, more generally,
               r
                         W 2 (r) − W 2 (s) (r − s)
                  W dW =                  −                              for all r ≥ s ≥ 0.
               s                 2            2

This is not what one would guess oﬀhand. An alternative deﬁnition, due to Stratonovich,
takes λ = 12 ; so that
                        T
                                            W 2 (T )
                             W ◦ dW =                         (Stratonovich integral).
                         0                    2

See Chapter 6 for more.
  More discussion. What are the advantages of taking λ = 0 and getting
                                       T
                                                          W 2 (T ) T
                                            W dW =                − ?
                                       0                    2      2

First and most importantly, building the Riemann sum approximation by evaluating the
integrand at the left-hand endpoint τkn = tnk on each subinterval [tnk , tnk=1 ] will ultimately
permit the deﬁnition of
                                         T
                                             G dW
                                                     0
                                                         63
for a wide class of so-called “nonanticipating” stochastic processes G(·). Exact deﬁnitions
are later, but the idea is that t represents time, and since we do not know what W (·) will
do on [tnk , tnk+1 ], it is best to use the known value of G(tnk ) in the approximation. Indeed,
G(·) will in general depend on Brownian motion W (·), and we do not know at time tnk its
future value at the future time τkn = (1 − λ)tnk + λtnk+1 , if λ > 0.                         


B. DEFINITION AND PROPERTIES OF ITÔ’S INTEGRAL.

  Let W (·) be a 1-dimensional Brownian motion deﬁned on some probability space (Ω, U, P ).

DEFINITIONS. (i) The σ-algebra W(t) := U(W (s) | 0 ≤ s ≤ t) is called the history of
the Brownian motion up to (and including) time t.
   (ii) The σ-algebra W + (t) := U(W (s)−W (t) | s ≥ t) is the future of the Brownian motion
beyond time t.                                                                             

DEFINITION. A family F(·) of σ-algebras ⊆ U is called nonanticipating (with respect
to W (·)) if
   (a) F(t) ⊇ F(s) for all t ≥ s ≥ 0
   (b) F(t) ⊇ W(t) for all t ≥ 0
   (c) F(t) is independent of W + (t) for all t ≥ 0.
We also refer to F(·) as a ﬁltration.

   We should informally think of F(t) as “containing all information available to us at time
t”. Our primary example will be F(t) := U(W (s) (0 ≤ s ≤ t), X0 ), where X0 is a random
variable independent of W + (0). This will be employed in Chapter 5, where X0 will be the
(possibly random) initial condition for a stochastic diﬀerential equation.

DEFINITION. A real-valued stochastic process G(·) is called nonanticipating (with re-
spect to F(·)) if for each time t ≥ 0, G(t) is F(t)–measurable.

   The idea is that for each time t ≥ 0, the random variable G(t) “depends upon only the
information available in the σ-algebra F(t)”.

   Discussion. We will actually need a slightly stronger notion, namely that G(·) be
progessively measurable. This is however a bit subtle to deﬁne, and we will not do so
here. The idea is that G(·) is nonanticipating and, in addition, is appropriately jointly
measurable in the variables t and ω together.
   These measure theoretic issues can be confusing to students, and so we pause here to
emphasize the basic point, to be developed below. For progessively measurable integrands
                                                                        T
G(·), we will be able to deﬁne, and understand, the stochastic integral 0 G dW in terms
of some simple, useful and elegant formulas. In other words, we will see that since at each
                                           64
moment of time “G depends only upon the past history of the Brownian motion”, some
nice identities hold, which would be false if G “depends upon the future behavior of the
Brownian motion”.

DEFINITIONS. (i) We denote by L2 (0, T ) the space of all real–valued, progressively
measurable stochastic processes G(·) such that
                                                          
                                               T
                                        E           G2 dt       < ∞.
                                              0


(ii) Likewise, L1 (0, T ) is the space of all real–valued, progressively measurable processes
F (·) such that                                    
                                            T
                                     E        |F | dt < ∞.
                                              0


DEFINITION. A process G ∈ L2 (0, T ) is called a step process if there exists a partition
P = {0 = t0 < t1 < · · · < tm = T } such that

                     G(t) ≡ Gk        f or tk ≤ t < tk+1          (k = 0, . . . , m − 1).

Then each Gk is an F(tk )-measurable random variable, since G is nonanticipating.

DEFINITION. Let G ∈ L2 (0, T ) be a step process, as above. Then

                               T             
                                              m−1
                                    G dW :=         Gk (W (tk+1 ) − W (tk ))
                               0              k=0


is the Itô stochastic integral of G on the interval (0, T ).

      Note carefully that this is a random variable.

LEMMA (Properties of stochastic integral for step processes). We have for all
constants a, b ∈ R and for all step processes G, H ∈ L2 (0, T ):

                          T                         T                 T
(i)                            aG + bH dW = a             G dW + b           H dW,
                          0                           0                  0



                                                          
                                               T
(ii)                                    E           G dW        = 0,
                                               0
                                                     65
                                       2           
                                  T               T
(iii)                         E     G dW  = E       2
                                                     G dt .
                                    0                          0



Proof. 1. The ﬁrst assertion is easy to check.
  Suppose next G(t) ≡ Gk for tk ≤ t < tk+1 . Then
                                  m−1
                          T             
                   E        G dW =          E(Gk (W (tk+1 ) − W (tk ))).
                              0               k=0

Now Gk is F(tk )-measurable and F(tk ) is independent of W + (tk ). On the other hand,
W (tk+1 ) − W (tk ) is W + (tk )-measurable, and so Gk is independent of W (tk+1 ) − W (tk ).
Hence
                 E(Gk (W (tk+1 ) − W (tk ))) = E(Gk )E(W (tk+1 ) − W (tk )).
                                                                       
                                                                      =0

   2. Furthermore,
                  2  m−1
             T          
       E       G dW  =     E (Gk Gj (W (tk+1 ) − W (tk ))(W (tj+1 ) − W (tj )) .
               0                  k,j=1


Now if j < k, then W (tk+1 ) − W (tk ) is independent of Gk Gj (W (tj+1 ) − W (tj )). Thus

                     E(Gk Gj (W (tk+1 ) − W (tk ))(W (tj+1 ) − W (tj )))
                      = E(Gk Gj (W (tj+1 ) − W (tj )))E(W (tk+1 ) − W (tk )).
                                                                    
                                        <∞                          =0

Consequently
                            2  m−1
                       T          
                   E     G dW  =     E(G2k (W (tk+1 ) − W (tk ))2 )
                          0                   k=0

                                              
                                              m−1
                                          =         E(G2k )E((W (tk+1 ) − W (tk ))2 )
                                                                                
                                              k=0
                                                                   =tk+1 −tk
                                                           
                                                   T
                                          =E             G2 dt .
                                                     0


                                                                                             
  APPROXIMATION BY STEP FUNCTIONS. The plan now is to approximate
an arbitrary process G ∈ L2 (0, T ) by step processes in L2 (0, T ), and then pass to limits to
deﬁne the Itô integral of G.
                                             66
LEMMA (Approximation by step processes). If G ∈ L2 (0, T ), there exists a se-
quence of bounded step processes Gn ∈ L2 (0, T ) such that
                                                                
                                        T
                                E             |G − Gn |2 dt           → 0.
                                          0



Outline of proof. We omit the proof, but the idea is this: if t → G(t, ω) is continuous for
almost every ω, we can set

                               k     k      k+1
                   Gn (t) := G( ) for ≤ t <     , k = 0, . . . , [nT ].
                               n     n       n

For a general G ∈ L2 (0, T ), deﬁne
                                               t
                                m
                               G (t) :=             mem(s−t) G(s) ds.
                                               0

Then Gm ∈ L2 (0, T ), t → Gm (t, ω) is continuous for a.e. ω, and
                                     T
                                          |Gm − G|2 dt → 0 a.s.
                                     0

Now approximate Gm by step processes, as above.                                                        

DEFINITION. If G ∈ L2 (0, T ), take step processes Gn as above. Then
                     2                     
          T                     T
      E     Gn − Gm dW  = E      (Gn − Gm )2 dt → 0                                    as n, m → ∞
              0                                     0


and so the limit                T                           T
                                     G dW := lim                  Gn dW
                                0                   n→∞       0
          2
exists in L (Ω).
   It is not hard to check this deﬁnition does not depend upon the particular sequence of
step process approximations in L2 (0, T ).

THEOREM (Properties of Itô Integral).                        For all constants a, b ∈ R and for all
G, H ∈ L2 (0, T ), we have

                       T                            T                   T
(i)                         aG + bH dW = a                  G dW + b             H dW,
                       0                                0                    0
                                                    67
                                                                   
                                                         T
(ii)                                              E           G dW       = 0,
                                                          0

                                     2            
                                T               T
(iii)                       E     G dW  = E      G2 dt ,
                                              0                            0

                                                 T                                
                              T                                               T
(iv)                   E                 G dW             H dW       =E             GH dt .
                             0                        0                         0


Proof. 1. Assertion (i) follows at once from the corresponding linearity property for step
processes.
    Statements (i) and (iii) are also easy consequences of the similar rules for step processes.
    2. Finally, assertion (iv) results from (iii) and the identity 2ab = (a + b)2 − a2 − b2 , and
is left as an exercise.                                                                         

   EXTENDING THE DEFINITION. For many applications, it is important to con-
sider a wider class of integrands, instead of just L2 (0, T ). To this end we deﬁne M2 (0, T )
to be the space of all real–valued, progressively measurable processes G(·) such that
                                     T
                                        G2 dt < ∞ a.s.
                                                  0
It is possible to extend the deﬁnition of the Itô integral to cover G ∈ M2 (0, T ), although we
will not do so in these notes. The idea is to ﬁnd a sequence of step processes Gn ∈ M2 (0, T )
such that                           T
                                         (G − Gn )2 dt → 0 a.s. as n → ∞.
                                 0
It turns out that we can then deﬁne
                              T              T
                                 G dW := lim     Gn dW,
                                          0                   n→∞    0
the expressions on the right converging in probability. See for instance Friedman [F] or
Gihman–Skorohod [G-S] for details.                                                    
More on Riemann sums. In particular, if G ∈ M2 (0, T ) and t → G(t, ω) is continuous
for a.e. ω, then
                  n −1
                 m                                   T
                       G(tk )(W (tk+1 ) − W (tk )) →
                          n       n           n
                                                         G dW
                           k=0                                                      0

in probability, where P = {0 = tn < · · · < tnmn = T } is any sequence of partitions,
                           n

with |P n | → 0. This conﬁrms the consistency of Itô’s integral with the earlier calculations
involving Riemann sums, evaluated at τkn = tnk .                                            
                                            68
C. INDEFINITE ITÔ INTEGRALS.

DEFINITION. For G ∈ L2 (0, T ), set
                                         t
                              I(t) :=         G dW   (0 ≤ t ≤ T ),
                                         0

the indeﬁnite integral of G(·). Note I(0) = 0.
   In this section we note some properties of the process I(·), namely that it is a martingale
and has continuous sample paths a.s. These facts will be quite useful for proving Itô’s
formula later in §D and in solving the stochastic diﬀerential equations in Chapter 5.
THEOREM. (i) If G ∈ L2 (0, T ), then the indeﬁnite integral I(·) is a martingale.
 (iI) Furthermore, I(·) has a version with continuous sample paths a.s.
   Henceforth when we refer to I(·), we will always mean this version. We will not prove
assertion (i); a proof of (ii) is in Appendix C.


D. ITÔ’S FORMULA.

DEFINITION. Suppose that X(·) is a real–valued stochastic process satisfying
                                     r         r
                   X(r) = X(s) +        F dt +     G dW
                                                s          s

for some F ∈ L1 (0, T ), G ∈ L2 (0, T ) and all times 0 ≤ s ≤ r ≤ T . We say that X(·) has
the stochastic diﬀerential

                                     dX = F dt + GdW

for 0 ≤ t ≤ T .                                                                              
  Note carefully that the diﬀerential symbols are simply an abbreviation for the integral
expressions above: strictly speaking “dX”, “dt”, and “dW ” have no meaning alone.

THEOREM (Itô’s Formula). Suppose that X(·) has a stochastic diﬀerential

                                     dX = F dt + GdW,

for F ∈ L1 (0, T ), G ∈ L2 (0, T ). Assume u : R × [0, T ] → R is continuous and that ∂u   ∂u
                                                                                      ∂t , ∂x ,
  2
∂ u
∂x2 exist and are continuous.
    Set
                                       Y (t) := u(X(t), t).
                                                69
Then Y has the stochastic diﬀerential

                                                     2
                                             1∂ u 2
                        dY = ∂u      ∂u
                             ∂t dt + ∂x dX + 2 ∂x2 G dt
(2)
                                  ∂u   ∂u     1 ∂2u 2
                            =     ∂t + ∂x F + 2 ∂x2 G    dt + ∂u
                                                              ∂x GdW.



  We call (2) Itô’s formula or Itô’s chain rule.

Remarks. (i) The argument of u, ∂u   ∂t , etc. above is (X(t), t).
  (ii) In view of our deﬁnitions, the expression (2) means for all 0 ≤ s ≤ r ≤ T ,


               Y (r) − Y (s) = u(X(r), r) − u(X(s), s)
                                r
                                   ∂u           ∂u           1 ∂2u
                             =        (X, t) +     (X, t)F +       (X, t)G2 dt
(3)                             s  ∂t           ∂x           2 ∂x2
                                    r
                                       ∂u
                                 +         (X, t)G dW almost surely.
                                    s ∂x

                            t         t
   (iii) Since X(t) = X(0) + 0 F ds + 0 G dW , X(·) has continuous sample paths almost
                                                                                 ∂2u
surely. Thus for amost every ω, the functions t → ∂u              ∂u
                                                     ∂t (X(t), t), ∂x (X(t), t), ∂x2 (X(t), t)
are continuous and so the integrals in (3) are deﬁned.                                      

   ILLUSTRATIONS OF ITÔ’S FORMULA. We will prove Itô’s formula below, but
ﬁrst here are some applications:

Example 1. Let X(·) = W (·), u(x) = xm . Then dX = dW and thus F ≡ 0, G ≡ 1.
Hence Itô’s formula gives

                                           1
                      d(W m ) = mW m−1 dW + m(m − 1)W m−2 dt.
                                           2
In particular the case m = 2 reads

                                    d(W 2 ) = 2W dW + dt.

This integrated is the identity
                           r
                                         W 2 (r) − W 2 (s) (r − s)
                                W dW =                    −        ,
                           s                     2            2

a formula we have established from ﬁrst principles before.                                  
                                              70
                                                                 λ2 t
Example 2. Again take X(·) = W (·), u(x, t) = eλx− 2 , F ≡ 0, G ≡ 1. Then

                     λ2 t             λ2 λW (t)− λ2 t  λ2       λ2 t                        λ2 t
           d eλW (t)− 2     =     −     e         2   + eλW (t)− 2         dt + λeλW (t)− 2 dW
                                      2                2

by Itô’s formula. Thus                        
                                                   dY = λY dW
                                                   Y (0) = 1.
This is a stochastic diﬀerential equation, about which more in Chapters 5 and 6.                   
                                                                   λ2 t
   In the Itô stochastic calculus the expression eλW (t)− 2 plays the role that eλt plays in
ordinary calculus. We build upon this observation:
Example 3. For n = 0, 1, . . . , deﬁne

                                               (−t)n x2 /2t dn
                                                                e−x /2t ,
                                                                   2
                                hn (x, t) :=        e         n
                                                 n!        dx
the n-th Hermite polynomial. Then

                                h0 (x, t) = 1, h1 (x, t) = x
                                            x2   t             x3   tx
                                h2 (x, t) =    − , h3 (x, t) =    −
                                             2   2             6     2
                                            x4   tx2   t2
                                h4 (x, t) =    −     + , etc.
                                            24     4   8

THEOREM (Stochastic calculus with Hermite polynomials). We have
                     t
                          hn (W, s) dW = hn+1 (W (t), t)        for n = 0, . . . , t ≥ 0;
                     0

that is,
                                       dhn+1 (W, t) = hn (W, t) dW.

   Consequently in the Itô stochastic calculus the expression hn (W (t), t) plays the role
       n
that tn! plays in ordinary calculus.
Proof. (from McKean [McK]) Since

                              dn − (x−λt)2             n d
                                                           n
                                                              (e−x /2t ),
                                                                  2

                                n
                                  (e  2t   )|λ=0 = (−t)     n
                             dλ                         dx
we have
                             dn λx− λ2 t           n x2 /2t d
                                                              n
                                                                 (e−x /2t )
                                                                     2

                               n
                                 (e  2 )|
                                         λ=0 = (−t)  e         n
                            dλ                              dx
                                             = n!hn (x, t).
                                                71
Hence
                                                              ∞
                                                              
                                                 2
                                         λx− λ2 t
                                        e             =             λn hn (x, t),
                                                              n=0

and so
                                                                    ∞
                                                                    
                                                          2
                                            λW (t)− λ2 t
                              Y (t) = e                        =            λn hn (W (t), t).
                                                                    n=0

But Y (·) solves                                
                                                     dY = λY dW
                                                     Y (0) = 1;
that is,                                              t
                                  Y (t) = 1 + λ               Y dW           for all t ≥ 0.
                                                      0

Plug in the expansion above for Y (t):
                   ∞
                                                               t
                                                                  ∞
                          n
                         λ hn (W (t), t) = 1 + λ                                 λn hn (W (s), s) dW
                   n=0                                             0 n=0
                                                              ∞
                                                                            t
                                                                        n
                                               =1+                  λ             hn−1 (W (s), s) dW.
                                                              n=1            0


This identity holds for all λ and so the coeﬃcients of λn on both sides are equal.                      


   PROOF OF ITÔ’S FORMULA. We now begin the proof of Itô’s formula, by veri-
fying directly two important special cases:
LEMMA (Two simple stochastic diﬀerentials). We have
  (i) d(W 2 ) = 2W dW + dt,
and
  (ii ) d(tW ) = W dt + tdW .
Proof. We have already established formula (i). To verify (ii), note that
                          r                          n −1
                                                     m
                                  t dW = lim                    tnk (W (tnk+1 ) − W (tnk )),
                          0                 n→∞
                                                      k=0

where P n = {0 = tn0 < tn1 < · · · < tnmn = r} is a sequence of partitions of [0, r], with
|P n | → 0. The limit above is taken in L2 (Ω).
   Similarly, since t → W (t) is continuous a.s.,
                           r                          n −1
                                                      m
                                   W dt = lim                      W (tnk+1 )(tnk+1 − tnk ),
                              0               n→∞
                                                          k=0
                                                              72
since for amost every ω the sum is an ordinary Riemann sum approximation and for this
we can take the right-hand endpoint tnk+1 at which to evaluate the continuous integrand.
   We add these formulas to obtain
                                  r             r
                                       t dW +         W dt = rW (r).
                                  0              0


These integral identities for all r ≥ 0 are abbreviated d(tW ) = tdW + W dt.                       


   These special cases in hand, we now prove:

THEOREM (Itô product rule). Suppose
                           #
                               dX1 = F1 dt + G1 dW
                                                                (0 ≤ t ≤ T ),
                               dX2 = F2 dt + G2 dW

for Fi ∈ L1 (0, T ), Gi ∈ L2 (0, T ) (i = 1, 2). Then

(4)                        d(X1 X2 ) = X2 dX1 + X1 dX2 + G1 G2 dt.


   Remarks. (i) The expression G1 G2 dt here is the Itô correction term. The integrated
version of the product rule is the Itô integration-by-parts formula:
            r                                                   r               r
(5)              X2 dX1 = X1 (r)X2 (r) − X1 (s)X2 (s) −               X1 dX2 −         G1 G2 dt.
            s                                                     s               s


  (ii) If either G1 or G2 is identically equal to 0, we get the ordinary calculus integration-
by-parts formula. This conﬁrms that the Paley–Wiener–Zygmund deﬁnition

                                       1               1
                                            g dW = −         g  W dt,
                                       0                0


for deterministic C 1 functions g, with g(0) = g(1) = 0, agrees with the Itô deﬁnition.           

Proof. 1. Choose 0 ≤ r ≤ T .
  First of all, assume for simplicity that X1 (0) = X2 (0) = 0, Fi (t) ≡ Fi , Gi (t) ≡ Gi ,
where Fi , Gi are time–independent, F(0)-measurable random variables (i = 1, 2). Then

                           Xi (t) = Fi t + Gi W (t)         (t ≥ 0, i = 1, 2).
                                                73
Thus
              r
                 X2 dX1 + X1 dX2 + G1 G2 dt
               0
                 r                       r
              =     X1 F2 + X2 F1 dt +       X1 G2 + X2 G1 dW
                 0                        0
                           r
                        +     G1 G2 dt
                            0
                 r
              =     (F1 t + G1 W )F2 + (F2 t + G2 W )F1 dt
                 0
                           r
                        +     (F1 t + G1 W )G2 + (F2 t + G2 W )G1 dW + G1 G2 r
                            0
                                            % r          r      &
                       2
              = F1 F2 r + (G1 F2 + G2 F1 )       W dt +      t dW
                                              0           0
                                    r
                        + 2G1 G2       W dW + G1 G2 r.
                                      0
                                          r                  r      r
We now use the Lemma above to compute 2 0 W dW = W 2 (r)−r and 0 W dt+ 0 t dW =
rW (r). Employing these identities, we deduce:
                r
                   X2 dX1 + X1 dX2 + G1 G2 dt
                   0
                             = F1 F2 r2 + (G1 F2 + G2 F1 )rW (r) + G1 G2 W 2 (r)
                             = X1 (r)X2 (r).

This is formula (5) for the special circumstance that s = 0, Xi (0) = 0, and Fi , Gi time–
independent random variables.
   The case that s ≥ 0, X1 (s), X2 (s) are arbitrary, and Fi , Gi are constant F(s)-measurable
random variables has a similar proof.
   2. If Fi , Gi are step processes, we apply Step 1 on each subinterval [tk , tk+1 ) on which
Fi and Gi are constant random variables, and add the resulting integral expressions.
  3. In the general situation, we select step processes Fin ∈ L1 (0, T ), Gni ∈ L2 (0, T ), with
                        T
                     E( 0 |Fin − Fi | dt) → 0
                        T n                       as n → ∞, i = 1, 2.
                     E( 0 (Gi − Gi ) dt) → 0
                                      2


Deﬁne                                         t               t
                       Xin (t) := Xi (0) +         Fin ds +         Gni dW (i = 1, 2).
                                      0           0
                      n
  We apply Step 2 to Xi (·) on (s, r) and pass to limits, to obtain the formula
                                                      r
              X1 (r)X2 (r) = X1 (s)X2 (s) +                X1 dX2 + X2 dX1 + G1 G2 dt.
                                                       s
                                                      74
                                                                                           
  Now we are ready for
CONCLUSION OF THE PROOF OF ITÔ’S FORMULA. Suppose dX = F dt +
GdW , with F ∈ L1 (0, T ), G ∈ L2 (0, T ).
1. We start with the case u(x) = xm , m = 0, 1, . . . , and ﬁrst of all claim that
                                              1
(6)                   d(X m ) = mX m−1 dX + m(m − 1)X m−2 G2 dt.
                                              2
This is clear for m = 0, 1, and the case m = 2 follows from the Itô product formula. Now
assume the stated formula for m − 1:
                                          1
          d(X m−1 ) = (m − 1)X m−2 dX + (m − 1)(m − 2)X m−3 G2 dt
                                          2
                                                     1
                    = (m − 1)X m−2 (F dt + GdW ) + (m − 1)(m − 2)X m−3 G2 dt,
                                                     2
and we prove it for m:
             d(X m ) = d(XX m−1 )
                     = Xd(X m−1 ) + X m−1 dX + (m − 1)X m−2 G2 dt
                                                      (by the product rule)
                                          1
                     = X (m − 1)X m−2 dX + (m − 1)(m − 2)X m−3 G2 dt
                                          2
                       + (m − 1)X m−2 G2 dt + X m−1 dX
                                    1
                     = mX m−2 dX + m(m − 1)X m−2 G2 dt,
                                    2
because m − 1 + 12 (m − 1)(m − 2) = 12 m(m − 1). This proves (6).
  Since Itô’s formula thus holds for the functions u(x) = xm , m = 0, 1, . . . and since the
operator “d” is linear, Itô’s formula is valid for all polynomials u in the variable x.
  2. Suppose now u(x, t) = f (x)g(t), where f and g are polynomials. Then

                   d(u(X, t)) = d(f (X)g)
                              = f (X)dg + gdf (X)
                                                              1
                               = f (X)g  dt + g[f  (X)dX + f  (X)G2 dt]
                                                              2
                                  ∂u       ∂u         1 ∂2u 2
                               =     dt +     dX +          G dt.
                                  ∂t       ∂x         2 ∂x2
This calculation conﬁrms Itô’s formula for u(x, t) = f (x)g(t), where f and g are polyno-
mials. Thus it is true as well for any function u having the form
                                               
                                               m
                                   u(x, t) =         f i (x)g i (t),
                                               i=1
                                                75
where f i and g i polynomials. That is, Itô’s formula is valid for all polynomial functions u
of the variables x, t.
   3. Given u as in Itô’s formula, there exists a sequence of polynomials un such that
                                                       n
                                       un → u, ∂u
                                                ∂t → ∂t
                                                     ∂u

                                    ∂un    ∂u ∂ 2 un  ∂2u
                                     ∂x → ∂x , ∂x2 → ∂x2 ,


uniformly on compact subsets of R×[0, T ]. Invoking Step 2, we know that for all 0 ≤ r ≤ T ,
                                             r
                                                  ∂un    ∂un      1 ∂ 2 un 2
            u (X(r), r) − u (X(0), 0) =
              n                 n
                                                       +     F+           G dt
                                              0    ∂t     ∂x      2 ∂x2
                                                        r
                                                           ∂un
                                                     +         G dW almost surely;
                                                        0 ∂x


the argument of the partial derivatives of un is (X(t), t).
   We may pass to limits as n → ∞ in this expression, thereby proving Itô’s formula in
general.                                                                             

   A similar proof gives this:

GENERALIZED ITÔ FORMULA. Suppose dX i = F i dt + Gi dW , with for F i ∈
L1 (0, T ), Gi ∈ L2 (0, T ), for i = 1, . . . , n.
                                                                                              2
    If u : Rn × [0, T ] → R is continuous, with continuous partial derivatives ∂u   ∂u     ∂ u
                                                                               ∂t , ∂xi , ∂xi ∂xj ,
(i, j = 1, . . . , n), then

                                      ∂u      n
                                                  ∂u       1  ∂2u
                                                               n
                   1        n                           i
            d(u(X , . . . , X , t)) =    dt +         dX +                 Gi Gj dt.
                                      ∂t      i=1
                                                  ∂xi      2 i,j=1
                                                                   ∂xi ∂xj


                                                                                                  



E. ITÔ’S INTEGRAL IN N-DIMENSIONS.

Notation. (i) Let W(·) = (W 1 (·), . . . , W m (·)) be an m-dimensional Brownian motion.
  (ii) We assume F(·) is a family of nonanticipating σ-algebras, meaning that
   (a) F(t) ⊇ F(s) for all t ≥ s ≥ 0
   (b) F(t) ⊇ W(t) = U(W(s) | 0 ≤ s ≤ t)
   (c) F(t) is independent of W + (t) := U(W(s) − W(t) | t ≤ s < ∞).

                                                  76
DEFINITIONS. (i) An Mn×m -valued stochastic process G = ((Gij )) belongs to L2n×m (0, T )
if
                Gij ∈ L2 (0, T )  (i = 1, . . . n; j = 1, . . . m).
(ii) An Rn -valued stochastic process F = (F 1 , F 2 , . . . , F n ) belongs to L1n (0, T ) if

                                     F i ∈ L1 (0, T )         (i = 1, . . . n).

DEFINITION. If G ∈ L2n×m (0, T ), then
                                    T
                                                         G dW
                                                     0

is an Rn –valued random variable, whose i-th component is
                            m  T
                                    Gij dW j (i = 1, . . . , n).
                                  j=1      0

                                                                                                 
   Approximating by step processes as before, we can establish this
LEMMA. If G ∈ L2n×m (0, T ), then
                                                              
                                                     T
                                           E             G dW       = 0,
                                                 0

and                                   2                
                                T                T
                                       
                            E     G dW  = E       |G|2 dt ,
                                0               0
                
where |G|2 :=      1≤i≤n |G      | .
                              ij 2
                   1≤j≤m

DEFINITION. If X(·) = (X 1 (·), . . . , X n (·)) is an Rn -valued stochastic process such that
                                            r           r
                     X(r) = X(s) +              F dt +      G dW
                                                         s             s

for some F ∈ L1n (0, T ), G ∈ L2n×m (0, T ) and all 0 ≤ s ≤ r ≤ T , we say X(·) has the
stochastic diﬀerential
                                  dX = Fdt + GdW.

   This means that
                                               
                                               m
                             i         i
                          dX = F dt +                Gij dW j       for i = 1, . . . , n.
                                               j=1


                                                         77
THEOREM (Itô’s formula in n-dimensions). Suppose that dX = Fdt + GdW, as
above. Let u : Rn × [0, T ] be continuous, with continuous partial derivations ∂u   ∂u
                                                                               ∂t , ∂xi ,
 ∂2u
∂xi ∂xj , (i, j = 1, . . . , n). Then

                                                        n
                         d(u(X(t), t))= ∂u
                                        ∂t dt +
                                                             ∂u
                                                         i=1 ∂xi dX
                                                                    i

(5)                                                n               m
                                                           ∂2u
                                            + 12    i,j=1 ∂xi ∂xj    l=1 G
                                                                             il
                                                                                  Gjl dt,

where the argument of the partial derivatives of u is (X(t), t).

   An outline of the proof follows some preliminary results:
LEMMA (Another simple stochastic diﬀerential). Let W (·) and W̄ (·) be indepen-
dent 1-dimensional Brownian motions. Then

                                        d(W W̄ ) = W dW̄ + W̄ dW.

   Compare this to the case W = W̄ . There is no correction term “dt” here, since W, W̄
are independent.
Proof. 1. To begin, set X(t) := W (t)+
                                     √
                                       W̄ (t)
                                       2
                                              .
   We claim that X(·) is a 1-dimensional Brownian motion. To see this, note ﬁrstly that
X(0) = 0 a.s. and X(·) has independent increments. Next observe that since X is the
sum of two independent, N (0, 2t ) random variables, X(t) is N (0, t). A similar observation
shows that X(t) − X(s) in N (0, t − s). This establishes the claim.
   2. From the 1-dimensional Itô calculus, we know
                               
                                       2
                                d(X ) = 2XdX + dt,
                                   d(W 2 ) = 2W dW + dt,
                               
                               
                                   d(W̄ 2 ) = 2W̄ dW̄ + dt.
Thus
                                            1     1
                        d(W W̄ ) = d X 2 − W 2 − W̄ 2
                                            2     2
                                                1
                                 = 2XdX + dt − (2W dW + dt)
                                                2
                                            1
                                         − (2W̄ dW̄ + dt)
                                            2
                                 = (W + W̄ )(dW + dW̄ ) − W dW − W̄ dW̄
                                  = W dW̄ + W̄ dW.

                                                                                            

   We will also need the following modiﬁcation of the product rule:
                                           78
LEMMA (Itô product rule with several Brownian motions). Suppose

                                                           
                                                           m
                                   dX1 = F1 dt +                 Gk1 dW k
                                                           k=1


and
                                                           
                                                           m
                                   dX2 = F2 dt +                 Gl2 dW l ,
                                                           l=1

where Fi ∈ L1 (0, T ) and Gki ∈ L2 (0, T ) for i = 1, 2; k = 1, . . . , m. Then

                                                                       
                                                                       m
                         d(X1 X2 ) = X1 dX2 + X2 dX1 +                        Gk1 Gk2 dt.
                                                                       k=1



   The proof is a modiﬁcation of that for the one–dimensional Itô product rule, as before,
with the new feature that

                            d(W i W j ) = W i dW j + W j dW i + δij dt,

according to the Lemma above.

    The Itô formula in n-dimensions can now be proved by a suitable modiﬁcation of the
one-dimensional proof. We ﬁrst establish the formula for a multinomials u = u(x) =
xk11 . . . xkmm , proving this by an induction on k1 , . . . , km , using the Lemma above. This done,
the formula follows easily for polynomials u = u(x, t) in the variables x = (x1 , . . . , xn ) and
t, and then, after an approximation, for all functions u as stated.

   CLOSING REMARKS.

   1. ALTERNATIVE NOTATION. When

                                       dX = Fdt + GdW,

we sometimes write
                                                     
                                                     m
                                           ij
                                       H        :=         Gik Gjk .
                                                     k=1

   Then Itô’s formula reads

                                 ∂u            1
                  du(X, t) =        + F · Du + H : D2 u dt + Du · GdW,
                                 ∂t            2
                                              79
              ∂u             ∂u                                                                  ∂2u
where Du = ∂x   1
                  , . . . , ∂xn
                                   is the gradient of u in the x-variables, D2 u =              ∂xi ∂xj   is
the Hessian matrix, and

                                                   
                                                   n
                                                               ∂u
                                        F · Du =        Fi         ,
                                                  i=1
                                                               ∂xi
                                                 
                                                 n
                                                    ∂2u
                                          2               ij
                                    H:D u=       H         ,
                                           i,j=1
                                                   ∂xi ∂xj
                                               
                                               n 
                                                 m
                                                   ∂u
                                  Du · GdW =                     Gik dW k .
                                                i=1 k=1
                                                          ∂xi


   2. HOW TO REMEMBER ITÔ’S FORMULA.
   We may symbolically compute

                               ∂u      n
                                           ∂u       1  ∂2u
                                                        n
                                                 i
                  d(u(X, t)) =    dt +         dX +                 dX i dX j ,
                               ∂t      i=1
                                           ∂xi      2 i,j=1
                                                            ∂xi ∂xj


and then simplify the term “dX i dX j ” by expanding it out and using the formal multipli-
cation rules

                 (dt)2 = 0, dtdW k = 0, dW k dW l = δkl dt             (k, l = 1, . . . , m).

The foregoing theory provides a rigorous meaning for all this.




                                                   80
CHAPTER 5: STOCHASTIC DIFFERENTIAL EQUATIONS.


    A. Deﬁnitions and examples
    B. Existence and uniqueness of solutions
    C. Properties of solutions
    D. Linear stochastic diﬀerential equations


    A. DEFINITIONS AND EXAMPLES.

  We are ﬁnally ready to study stochastic diﬀerential equations:
Notation. (i) Let W(·) be an m-dimensional Brownian motion and X0 an n-dimensional
random variable which is independent of W(·). We will henceforth take

                       F(t) := U(X0 , W(s) (0 ≤ s ≤ t))             (t ≥ 0),

the σ-algebra generated by X0 and the history of the Wiener process up to (and including)
time t.
   (ii) Assume T > 0 is given, and

                                   b : Rn × [0, T ] → Rn ,


                                  B : Rn × [0, T ] → Mn×m

are given functions. (Note carefully: these are not random variables.) We display the
components of these functions by writing
                                                    11                    
                                                    b        ...      b1 m
                                                      .      ..         .. 
                     b = (b , b , . . . , b ), B =  ..
                           1 2             n
                                                                .        .   .
                                                    bn 1     ...      bn m

DEFINITION. We say that an Rn -valued stochastic process X(·) is a solution of the
Itô stochastic diﬀerential equation
                             
                                 dX = b(X, t)dt + B(X, t)dW
(SDE)
                                 X(0) = X0

for 0 ≤ t ≤ T , provided
   (i) X(·) is progressively measurable with respect to F(·),
   (ii) F := b(X, t) ∈ L1n (0, T ),
                                            81
  (iii) G := B(X, t) ∈ L2n×m (0, T ),
and
                    t                t
  (iv) X(t) = X0 + 0 b(X(s), s) ds + 0 B(X(s), s) dW a.s.                    for all 0 ≤ t ≤ T .

Remarks. (i) A higher order SDE of the form
                     Y (n) = f (t, Y, . . . , Y (n−1) ) + g(t, Y, . . . , Y (n−1) )ξ,
where as usual ξ denotes “white noise”, can be rewritten into the form above by the device
of setting                                     1 
                                       Y (t)          X (t)
                                   Ẏ (t)   X 2 (t) 
                                              
                          X(t) =        ..    =  ..      .
                                         .             .
                                          Y (n−1) (t)           X n (t)
Then                                                              
                                  X2                           0
                                   .                           ..
                           dX =  ..  dt +                    .     dW.
                                    f (· · · )    g(· · · )
   (ii) In view of (iii), we can always assume X(·) has continuous sample paths almost
surely.                                                                             

EXAMPLES OF LINEAR STOCHASTIC DIFFERENTIAL EQUATIONS.
Example 1. Let m = n = 1 and suppose g is a continuous function (not a random
variable). Then the unique solution of
                                    
                                       dX = gXdW
(1)
                                       X(0) = 1
is                                         t 2   t
                               X(t) = e− 2 0 g ds+ 0 g dW
                                         1



for 0 ≤ t ≤ T . To verify this, note that
                                                t             t
                                           1
                                Y (t) := −            2
                                                     g ds +         g dW
                                           2     0              0
satisﬁes
                                         1
                                  dY = − g 2 dt + gdW.
                                         2
Thus Itô’s lemma for u(x) = ex gives
                                 ∂u      1 ∂2u 2
                          dX =      dY +       g dt
                                 ∂x      2 ∂x2
                                       1               1
                              = eY − g 2 dt + gdW + g 2 dt
                                       2               2
                              = gXdW, as claimed.
We will prove uniqueness later, in §B.                                                             

                                                     82
Example 2. Similarly, the unique solution of
                              
                                dX = f Xdt + gXdW
(2)
                                X(0) = 1
is                                         t                 t
                                 X(t) = e 0 f − 2 g ds+ 0 g dW
                                                  1    2




for 0 ≤ t ≤ T .                                                                          

Example 3 (Stock prices). Let P (t) denote the price of a stock at time t. We can
model the evolution of P (t) in time by supposing that dP P , the relative change of price,
evolves according to the SDE
                                    dP
                                         = µdt + σdW
                                     P
for certain constants µ > 0 and σ, called the drift and the volatility of the stock. Hence

(3)                                   dP = µP dt + σP dW ;

and so
                                  dP   1 σ 2 P 2 dt
                       d(log(P )) =  −              by Itô’s formula
                                   P   2 P2
                                       σ2
                                 = µ−        dt + σdW.
                                       2

Consequently
                                                                   2
                                                σW (t)+ µ− σ2          t
                                 P (t) = p0 e                              ,
similarly to Example 2. Observe that the price is always positive, assuming the initial
price p0 is positive.
   Since (3) implies
                                       t          t
                         P (t) = p0 +     µP ds +     σP dW
                                            0                  0
         t
and E    0
              σP dW   = 0, we see that
                                                   t
                              E(P (t)) = p0 +              µE(P (s)) ds.
                                                   0

Hence
                                E(P (t)) = p0 eµt           for t ≥ 0.
The expected value of the stock price consequently agrees with the deterministic solution
of (3) corresponding to σ = 0.                                                          
                                                 83
Example 4 (Brownian bridge). The solution of the SDE
                   
                     dB = − 1−t
                             B
                                dt + dW      (0 ≤ t < 1)
(4)
                     B(0) = 0
is                                       t
                                            1
                       B(t) = (1 − t)          dW        (0 ≤ t < 1),
                                         0 1−s

as we conﬁrm by a direct calculation. It turns out also that limt→1− B(t) = 0 almost
surely. We call B(·) a Brownian bridge, between the origin at time 0 and at time 1.




                      A sample path of the Brownian bridge

Example 5 (Langevin’s equation). A possible improvement of our mathematical model
of the motion of a Brownian particle models frictional forces as follows for the one-
dimensional case:
                                 Ẋ = −bX + σξ,
where ξ(·) is “white noise”, b > 0 is a coeﬃcient of friction, and σ is a diﬀusion coeﬃcient.
In this interpretation X(·) is the velocity of the Brownian particle: see Example 6 for the
position process Y (·). We interpret this to mean
                                  
                                     dX = −bXdt + σdW
(5)
                                     X(0) = X0 ,
                                              84
for some initial distribution X0 , independent of the Brownian motion. This is the Langevin
equation.
   The solution is
                                             t
                                   −bt
                         X(t) = e X0 + σ        e−b(t−s) dW (t ≥ 0),
                                                    0

as is straightforward to verify. Observe that

                                       E(X(t)) = e−bt E(X0 )

and
                                                                 t
                                   −2bt
                    2
              E(X (t)) = E e              X02 + 2σe−bt X0             e−b(t−s) dW
                                                                 0
                                           t                    2
                                                                   
                             +σ    2
                                                 e−b(t−s) dW
                                             0
                                                                          t
                            −2bt
                        =e         E(X02 ) + 2σe−bt E(X0 )E                    e−b(t−s) dW
                                                                          0
                                        t
                             + σ2            e−2b(t−s) ds
                                        0
                                                    2
                            −2bt             σ
                        =e         E(X02 ) +            (1 − e−2bt ).
                                                   2b

Thus the variance
                             V (X(t)) = E(X 2 (t)) − E(X(t))2

is given by
                                                               σ2
                         V (X(t)) = e−2bt V (X0 ) +               (1 − e−2bt ),
                                                               2b
assuming, of course, V (X0 ) < ∞. For any such initial condition X0 we therefore have
                             #
                                 E(X(t)) → 0
                                                        2      as t → ∞.
                                 V (X(t)) → σ2b

  From the explicit form of the solution we see that the distribution of X(t) approaches
       2
N 0, σ2b as t → ∞. We interpret this to mean that irrespective of the initial distribution,
the solution of the SDE for large time “settles down” into a Gaussian distribution whose
           2
variance σ2b represents a balance between the random disturbing force σξ(·) and the fric-
tional damping force −bX(·).                                                             
                                            85
                       A simulation of Langevin’s equation

Example 6 (Ornstein–Uhlenbeck process). A better model of Brownian movement
is provided by the Ornstein–Uhlenbeck equation
                               
                                   Ÿ = −bẎ + σξ
                                   Y (0) = Y0 , Ẏ (0) = Y1 ,

where Y (t) is the position of Brownian particle at time t, Y0 and Y1 are given Gaussian
random variables. As before b > 0 is the friction coeﬃcient, σ is the diﬀusion coeﬃcient,
and ξ(·) as usual is “white noise”.
   Then X := Ẏ , the velocity process, satisﬁes the Langevin equation
                                  
                                    dX = −bXdt + σdW
(6)
                                    X(0) = Y1 ,

studied in Example 5. We assume Y1 to be normal, whence explicit formula for the solution,
                                                      t
                                      −bt
                           X(t) = e         Y1 + σ         e−b(t−s) dW,
                                                      0

shows X(t) to be Gaussian for all times t ≥ 0. Now the position process is
                                                      t
                                   Y (t) = Y0 +            X ds.
                                                      0
                                               86
Therefore
                                                     t
                           E(Y (t)) = E(Y0 ) +               E(X(s)) ds
                                                     0
                                                     t
                                     = E(Y0 ) +              e−bs E(Y1 ) ds
                                                     0
                                                     1 − e−bt
                                     = E(Y0 ) +                       E(Y1 );
                                                        b

and a somewhat lengthly calculation shows

                                          σ2    σ2
                     V (Y (t)) = V (Y0 ) + 2 t + 3 (−3 + 4e−bt − e−2bt ).
                                           b    2b

     Nelson [N, p. 57] discusses this model as compared with Einstein’s .             

Example 7 (Random harmonic oscillator). This is the SDE
                                 
                                     Ẍ = −λ2 X − bẊ + σξ
                                     X(0) = X0 , Ẋ(0) = X1 ,

where −λ2 X represents a linear, restoring force and −bẊ is a frictional damping term.
  An explicit solution can be worked out using the general formulas presented below in
§D. For the special case X1 = 0, b = 0, σ = 1, we have
                                                      t
                                             1
                         X(t) = X0 cos(λt) +                  sin(λ(t − s)) dW.
                                             λ           0

                                                                                      


      B. EXISTENCE AND UNIQUENESS OF SOLUTIONS.

  In this section we address the problem of building solutions to stochastic diﬀerential
equations. We start with a simple case:
   1. AN EXAMPLE IN ONE DIMENSION. Let us ﬁrst suppose b : R → R is
C , with |b | ≤ L for some constant L, and try to solve the one–dimensional stochastic
 1

diﬀerential equation
                                     
                                         dX = b(X)dt + dW
(7)
                                         X(0) = x

where x ∈ R.
                                               87
   Now the SDE means                                     t
                                      X(t) = x +              b(X) ds + W (t),
                                                         0

for all times t ≥ 0, and this formulation suggests that we try a successive approximation
method to construct a solution. So deﬁne X 0 (t) ≡ x, and then
                                                   t
                        X   n+1
                                  (t) := x +            b(X n ) ds + W (t)       (t ≥ 0)
                                                   0

for n = 0, 1, . . . . Next write

                      Dn (t) := max | X n+1 (s) − X n (s)|                   (n = 0, . . . ),
                                      0≤s≤t


and notice that for a given continuous sample path of the Brownian motion, we have
                                         s                 
                                                            
                           0
                          D (t) = max      b(x) dr + W (s) ≤ C
                                              0≤s≤t      0

for all times 0 ≤ t ≤ T , where C depends on ω.
   We now claim that
                                                     Ln n
                                          Dn (t) ≤ C     t
                                                      n!
for n = 0, 1, . . . , 0 ≤ t ≤ T . To see this note that
                                   s                             
                                                                  
                     n
                  D (t) = max        b(X (r)) − b(X
                                           n           n−1
                                                           (r)) dr
                            0≤s≤t         0
                              t
                        ≤L            Dn−1 (s) ds
                                  0
                              t
                                          Ln−1 sn−1
                        ≤L            C             ds          by the induction assumption
                                  0        (n − 1)!
                                  n n
                              L t
                        =C        .
                               n!
   In view of the claim, for m ≥ n we have
                                                              ∞
                                                               Lk T k
                    max |X (t) − X (t)| ≤ C
                              m               n
                                                                         →0       as n → ∞.
                   0≤t≤T                                            k!
                                                              k=n

Thus for almost every ω, X n (·) converges uniformly for 0 ≤ t ≤ T to a limit process X(·)
which, as is easy to check, solves (7).                                                 

2. SOLVING SDE BY CHANGING VARIABLES. Next is a procedure for solving
SDE by means of a clever change of variables (McKean [McK, p. 60]).
                                          88
   Given a general one–dimensional SDE of the form
                             
                                dX = b(X)dt + σ(X)dW
(8)
                                X(0) = x,
let us ﬁrst solve
                                     
                                         dY = f (Y )dt + dW
(9)
                                         Y (0) = y,
where f will be selected later, and try to ﬁnd a function u such that

                                            X := u(Y )

solves our SDE (8). Note that we can in principle at least solve (9), according to the
previous example. Assuming for the moment u and f are known, we compute using Itô’s
formula that
                                                1
                               dX = u (Y )dY + u (Y )dt
                                    %          &2
                                             1
                                  = u f + u dt + u dW.
                                             2

Thus X(·) solves (8) provided
                        
                         u (Y ) = σ(X) = σ(u(Y )),
                          u (Y )f (Y ) + 12 u (Y ) = b(X) = b(u(Y )),
and
                                              u(y) = x.
So let us ﬁrst solve the ODE
                               
                                   u (z) = σ(u(z))
                                                          (z ∈ R),
                                   u(y) = x

where  = dz
          d
             , and then, once u is known, solve for
                                           %               &
                                      1              1 
                           f (z) =          b(u(z)) − u (z) .
                                   σ(u(z))           2

We will not discuss here conditions under which all of this is possible: see Lamperti [L2].
                                                                                         
  Notice that both of the methods described above avoid all use of martingale estimates.

3. A GENERAL EXISTENCE AND UNIQUENESS THEOREM
   We start with a useful calculus lemma:
                                          89
GRONWALL’S LEMMA. Let φ and f be nonnegative, continuous functions deﬁned
for 0 ≤ t ≤ T , and let C0 ≥ 0 denote a constant. If
                                      t
                         φ(t) ≤ C0 +     f φ ds for all 0 ≤ t ≤ T,
                                              0

then                                          t
                              φ(t) ≤ C0 e 0 f ds        for all 0 ≤ t ≤ T.
                       t
Proof. Set Φ(t) := C0 + 0 f φ ds. Then Φ = f φ ≤ f Φ, and so
                   t                             t                        t
                e− 0 f ds Φ        = (Φ − f Φ)e− 0 f ds ≤ (f φ − f φ)e− 0 f ds = 0.

Therefore                                t                 0
                               Φ(t)e− 0 f ds ≤ Φ(0)e− 0 f ds = C0 ,

and thus                                                     t
                                       φ(t) ≤ Φ(t) ≤ C0 e 0 f ds .

                                                                                           
EXISTENCE AND UNIQUENESS THEOREM. Suppose that b : Rn ×[0, T ] → Rn
and B : Rn × [0, T ] → Mm×n are continuous and satisfy the following conditions:

               |b(x, t) − b(x̂, t)| ≤ L|x − x̂|
(a)                                                      for all 0 ≤ t ≤ T, x, x̂ ∈ Rn
               |B(x, t) − B(x̂, t)| ≤ L|x − x̂|


                    |b(x, t)| ≤ L(1 + |x|)
(b)                                                 for all 0 ≤ t ≤ T, x ∈ Rn ,
                    |B(x, t)| ≤ L(1 + |x|)

for some constant L.
   Let X0 be any Rn -valued random variable such that

(c)                                           E(|X0 |2 ) < ∞

and

(d)                                 X0 is independent of W + (0),

where W(·) is a given m-dimensional Brownian motion.
  Then there exists a unique solution X ∈ L2n (0, T ) of the stochastic diﬀerential equation:

                        
                            dX = b(X, t)dt + B(X, t)dW            (0 ≤ t ≤ T )
(SDE)
                            X(0) = X0 .
                                                   90
Remarks. (i) “Unique” means that if X, X̂ ∈ L2n (0, T ), with continuous sample paths
almost surely, and both solve (SDE), then

                           P (X(t) = X̂(t) for all 0 ≤ t ≤ T ) = 1.

   (ii) Hypotheses (a) says that b and B are uniformly Lipschitz continuous in the variable
x. Notice also that hypothesis (b) actually follows from (a).
                                                                                         
Proof. 1. Uniqueness. Suppose X and X̂ are solutions, as above. Then for all 0 ≤ t ≤ T ,
                          t                          t
          X(t) − X̂(t) =     b(X, s) − b(X̂, s) ds +     B(X, s) − B(X̂, s) dW.
                            0                                    0

Since (a + b)2 ≤ 2a2 + 2b2 , we can estimate
                                                                   2 
                                             t                       
               E(|X(t) − X̂(t)|2 ) ≤ 2E       b(X, s) − b(X̂, s) ds
                                            0
                                                                        2 
                                             t                            
                                     + 2E       B(X, s) − B(X̂, s) dW .
                                                0


The Cauchy–Schwarz inequality implies that
                                    t     2     t
                                           
                                           
                                        f ds ≤ t     |f |2 ds
                                   
                                     0              0

for any t > 0 and f : [0, t] → Rn . We use this to estimate
                                     2            t
                t                                                          2
                                                                          
           E      b(X, s) − b(X̂, s) ds    ≤ TE         b(X, s) − b(X̂, s) ds
                 0                                     0
                                                      t
                                             ≤ L2 T      E(|X − X̂|2 ) ds.
                                                         0

Furthermore
                                  2      t
             t                                                   2
                                                                
        E      B(X, s) − B(X̂, s) dW    =E    B(X, s) − B(X̂, s) ds
                0                                            0
                                                         t
                                                ≤ L2             E(|X − X̂|2 ) ds.
                                                         0

  Therefore for some appropriate constant C we have
                                              t
                      E(|X(t) − X̂(t)| ) ≤ C
                                      2
                                                 E(|X − X̂|2 ) ds,
                                                    0
                                               91
provided 0 ≤ t ≤ T . If we now set φ(t) := E(|X(t) − X̂(t)|2 ), then the foregoing reads

                                          t
                          φ(t) ≤ C              φ(s) ds   for all 0 ≤ t ≤ T.
                                           0



Therefore Gronwall’s Lemma, with C0 = 0, implies φ ≡ 0. Thus X(t) = X̂(t) a.s. for
all 0 ≤ t ≤ T , and so X(r) = X̂(r) for all rational 0 ≤ r ≤ T , except for some set of
probability zero. As X and X̂ have continuous sample paths almost surely,


                                P      max |X(t) − X̂(t)| > 0         = 0.
                                       0≤t≤T



  2. Existence. We will utilize the iterative scheme introduced earlier. Deﬁne

               
                   X0 (t) := X0
                                   t                  t
                   Xn+1 (t) := X0 + 0 b(Xn (s), s) ds + 0 B(Xn (s), s) dW,

for n = 0, 1, . . . and 0 ≤ t ≤ T . Deﬁne also


                                    dn (t) := E(|Xn+1 (t) − Xn (t)|2 ).


  We claim that

                                    (M t)n+1
                      dn (t) ≤                     for all n = 0, . . . , 0 ≤ t ≤ T
                                     (n + 1)!

for some constant M , depending on L, T and X0 . Indeed for n = 0, we have


             d0 (t) = E(|X1 (t) − X0 (t)|2 )
                                           t              2 
                          t                                  
                    = E     b(X0 , s) ds +     B(X0 , s) dW
                            0                         0
                                        2     t
                         t                
                        
                   ≤ 2E                   
                            L(1 + |X0 |) ds + 2E     L2 (1 + |X0 |2 ) ds
                                0                                    0

                   ≤ tM


for some large enough constant M . This conﬁrms the claim for n = 0.
                                          92
  Next assume the claim is valid for some n − 1. Then

             dn (t) = E(|Xn+1 (t) − Xn (t)|2 )
                          t
                         
                    = E     b(Xn , s) − b(Xn−1 , s) ds
                           0
                           t                              2 
                                                           
                        +     B(X , s) − B(X
                                  n            n−1
                                                   , s) dW
                                 0
                                          t
                    ≤ 2T L E 2
                                               |Xn − Xn−1 |2 ds
                                          0
                                               t
                          + 2L E     2
                                                    |Xn − Xn−1 |2 ds
                                               0
                                               t
                                                 M n sn
                    ≤ 2L2 (1 + T )                      ds        by the induction hypothesis
                                               0  n!
                         M n+1 tn+1
                    ≤               ,
                          (n + 1)!

provided we choose M ≥ 2L2 (1 + T ). This proves the claim.
   3. Now note
                                            T
          max |X n+1
                     (t) − X (t)| ≤ 2T L
                            n    2       2
                                               |Xn − Xn−1 |2 ds
         0≤t≤T                                               0
                                                          t                            2
                                                                                        
                                                + 2 max     B(X , s) − B(X
                                                                 n           n−1
                                                                                 , s) dW .
                                                   0≤t≤T         0

Consequently the martingale inequality from Chapter 2 implies
                                                  T
          E max |X    n+1
                          (t) − X (t)| ≤ 2T L
                                 n    2        2
                                                     E(|Xn − Xn−1 |2 ) ds
                 0≤t≤T                                                  0
                                                                             T
                                                                 + 8L  2
                                                                                  E(|Xn − Xn−1 |2 ) ds
                                                                             0
                                                               (M T )n
                                                            ≤C                    by the claim above.
                                                                 n!
  4. The Borel–Cantelli Lemma thus applies, since
                                                       1
        P   max |Xn+1 (t) − Xn (t)| >                        ≤ 22n E         max |Xn+1 (t) − Xn (t)|2
            0≤t≤T                                     2n                    0≤t≤T
                                                                            n
                                                                  2n C(M T )
                                                             ≤2
                                                                            n!
and
                                               ∞
                                                          (M T )n
                                                     22n           < ∞.
                                               n=1
                                                             n!
                                                            93
Thus
                                                                      1
                           P        max |Xn+1 (t) − Xn (t)| >           i.o.   = 0.
                                   0≤t≤T                             2n
In light of this, for almost every ω

                                                        
                                                        n−1
                                           n
                                          X =X +  0
                                                              (Xj+1 − Xj )
                                                        j=0


converges uniformly on [0, T ] to a process X(·). We pass to limits in the deﬁnition of
Xn+1 (·), to prove
                                     t                   t
               X(t) = X0 +                b(X, s) ds +         B(X, s) dW      for 0 ≤ t ≤ T.
                                     0                    0

That is,
                                     
                                          dX = b(X, t)dt + B(X, t)dW
(SDE)
                                          X(0) = X0 ,

for times 0 ≤ t ≤ T .
   5. We must still show X(·) ∈ L2n (0, T ). We have
                                                                       2 
                                                          t              
                  E(|Xn+1 (t)|2 ) ≤ CE(|X0 |2 ) + CE       b(Xn , s) ds
                                                         0
                                                           2 
                                            t                
                                    + CE      B(X , s) dW
                                                     n
                                              0
                                                           t
                                  ≤ C(1 + E(|X0 | )) + C
                                                  2
                                                              E(|Xn |2 ) ds,
                                                                        0

where, as usual, “C” denotes various constants. By induction, therefore,
                                  %                        n+1
                                                                 &
                                                     n+2 t
             E(|X   n+1
                          (t)| ) ≤ C + C + · · · + C
                               2        2
                                                                   (1 + E(|X0 |2 )).
                                                        (n + 1)!

Consequently
                                   E(|Xn+1 (t)|2 ) ≤ C(1 + E(|X0 |2 ))eCt .

Let n → ∞:
                    E(|X(t)|2 ) ≤ C(1 + E(|X0 |2 ))eCt               for all 0 ≤ t ≤ T ;

and so X ∈ L2n (0, T ).                                                                         
                                                         94
       C. PROPERTIES OF SOLUTIONS.

  In this section we mention, without proofs, a few properties of the solution to various
SDE.
THEOREM (Estimate on higher moments of solutions). Suppose that b, B and
X0 satisfy the hypotheses of the Existence and Uniqueness Theorem. If, in addition,

                          E(|X0 |2p ) < ∞      for some integer p > 1,

then the solution X(·) of
                               
                                   dX = b(X, t)dt + B(X, t)dW
(SDE)
                                   X(0) = X0
satisﬁes the estimates

(i)                          E(|X(t)|2p ) ≤ C2 (1 + E(|X0 |2p ))eC1 t

and

(ii)                     E(|X(t) − X0 |2p ) ≤ C2 (1 + E(|X0 |2p ))tp eC2 t

for certain constants C1 and C2 , depending only on T, L, m, n.
  The estimates above on the moments of X(·) are fairly crude, but are nevertheless
sometimes useful:
APPLICATION: SAMPLE PATH PROPERTIES. The possibility that B ≡ 0 is
not excluded, and consequently it could happen that the solution of our SDE is really a
solution of the ODE
                                     Ẋ = b(X, t),
with possibly random initial data. In this case the mapping t → X(t) will be smooth if b
is. On the other hand, if for some 1 ≤ i ≤ n
                     
                            |bil (x, t)|2 > 0 for all x ∈ Rn , 0 ≤ t ≤ T,
                     1≤l≤m

then almost every sample path t → X i (t) is nowhere diﬀerentiable for a.e. ω. We can
however use estimates (i) and (ii) above to check the hypotheses of Kolmogorov’s Theorem
from §C in Chapter 3. It follows that for almost all sample paths,

        the mapping t → X(t) is Hölder continuous with each exponent less than 12 ,

provided E(|X0 |2p ) < ∞ for each 1 ≤ p < ∞.                                            

                                                95
THEOREM (Dependence on parameters). Suppose for k = 1, 2, . . . that bk , Bk
and Xk0 satisfy the hypotheses of the Existence and Uniqueness Theorem, with the same
constant L. Assume further that


(a)                                  lim E(|Xk0 − X0 |2 ) = 0,
                                   k→∞


and for each M > 0,


(b)              lim max (|bk (x, t) − b(x, t)| + |Bk (x, t) − B(x, t)|) = 0.
                k→∞ 0≤t≤T
                    |x|≤M



Finally suppose that Xk (·) solves

                          
                              dXk = bk (Xk , t)dt + Bk (Xk , t)dW
                              Xk (0) = Xk0 .


  Then

                            lim E      max |Xk (t) − X(t)|2      = 0,
                           k→∞         0≤t≤T


where X is the unique solution of

                              
                                  dX = b(X, t)dt + B(X, t)dW
                                  X(0) = X0 .




   Example (Small noise limits). In particular, for almost every ω the random trajec-
tories of the SDE
                           
                             dXε = b(Xε )dt + εdW
                                     Xε (0) = x0

converge uniformly on [0, T ] as ε → 0 to the deterministic trajectory of

                                          
                                              ẋ = b(x),
                                              x(0) = x0 .

                                                                                   
                                                 96
       D. LINEAR STOCHASTIC DIFFERENTIAL EQUATIONS.

     This section presents some fairly explicit formulas for solutions of linear SDE.
DEFINITION. The stochastic diﬀerential equation

                                  dX = b(X, t)dt + B(X, t)dW

is linear provided the coeﬃcients b and B have this form:

                                      b(x, t) := c(t) + D(t)x,

for c : [0, T ] → Rn , D : [0, T ] → Mn×n , and

                                      B(x, t) := E(t) + F(t)x

for E : [0, T ] → Mn×m , F : [0, T ] → L(Rn , Mn×m ), the space of bounded linear mappings
from Rn to Mn×m .
DEFINITION. A linear SDE is called homogeneous if c ≡ E ≡ 0 for 0 ≤ t ≤ T . It is
called linear in the narrow sense if F ≡ 0.
Remark. If
                          sup [|c(t)| + |D(t)| + |E(t)| + |F(t)|] < ∞,
                         0≤t≤T

then b and B satisfy the hypotheses of the Existence and Uniqueness Theorem. Thus the
linear SDE          
                       dX = (c(t) + D(t)X)dt + (E(t) + F(t)X)dW
                         X(0) = X0
has a unique solution, provided E(|X0 |2 ) < ∞, and X0 is independent of W + (0).       

FORMULAS FOR SOLUTIONS: linear equations in narrow sense
   Suppose ﬁrst D ≡ D is constant. Then the solution of
                          
                            dX = (c(t) + DX)dt + E(t)dW
(10)
                            X(0) = X0

is
                                              t
                                 Dt
(11)                   X(t) = e       X0 +         eD(t−s) (c(s)ds + E(s) dW),
                                              0

where
                                                       ∞
                                                       
                                             Dt          D k tk
                                         e        :=              .
                                                             k!
                                                       k=0
                                                       97
   More generally, the solution of
                          
                             dX = (c(t) + D(t)X)dt + E(t)dW
(12)
                             X(0) = X0

is
                                                t
(13)                X(t) = Φ(t) X0 +                 Φ(s)−1 (c(s)ds + E(s) dW) ,
                                                0

where Φ(·) is the fundamental matrix of the nonautonomous system of ODE

                                    dΦ
                                       = D(t)Φ, Φ(0) = I.
                                    dt
                                                                                  
   These assertions follow formally from standard formulas in ODE theory if we write
EdW = Eξdt, ξ as usual denoting white noise, and regard Eξ as an inhomogeneous term
driving the ODE
                               Ẋ = c(t) + D(t)X + E(t)ξ.

This will not be so if F(·) ≡ 0, owing to the extra term in Itô’s formula.
  Observe also that formula (13) shows X(t) to be Gaussian if X0 is.

FORMULAS FOR SOLUTIONS: general scalar linear equations
   Suppose now n = 1, but m ≥ 1 is arbitrary. Then the solution of
                                           m
                  dX = (c(t) + d(t)X)dt + l=1 (el (t) + f l (t)X)dW l
(14)
                  X(0) = X0

is
                                          t                                                     
                                                                     
                                                                     m
                 X(t) = Φ(t) X0 +               Φ(s)−1      c(s) −         el (s)f l (s)       ds
                                           0                         l=1
(15)                            t
                                  m
                           +             Φ(s)−1 el (s) dW l ,
                               0 l=1


where                                                               t                  
                                      t         
                                                m
                                                  (f l )2
                                                                        m
                    Φ(t) := exp           d−                 ds +              f l dW l        .
                                     0                  2            0 l=1
                                                l=1

     See Arnold [A, Chapter 8] for more formulas for solutions of general linear equations.
                                                                                          

3. SOME METHODS FOR SOLVING LINEAR SDE
                           98
   For practice with Itô’s formula, let us derive some of the formulas stated above.
   Example 1. Consider ﬁrst the linear stochastic diﬀerential equation
                                
                                  dX = d(t)Xdt + f (t)XdW
(16)
                                  X(0) = X0

for m = n = 1. We will try to ﬁnd a solution having the product form

                                       X(t) = X1 (t)X2 (t),

where
                                      
                                          dX1 = f (t)X1 dW
(17)
                                          X1 (0) = X0

and
                                 
                                      dX2 = A(t)dt + B(t)dW
(18)
                                      X2 (0) = 1,

where the functions A and B are to be selected. Then

                        dX = d(X1 X2 )
                            = X1 dX2 + X2 dX1 + f (t)X1 B(t)dt
                            = f (t)XdW + (X1 dX2 + f (t)X1 B(t)dt),

according to (17). Now we try to choose A, B so that

                                dX2 + f (t)B(t)dt = d(t)X2 dt.

For this, B ≡ 0 and A(t) = d(t)X2 (t) will work. Thus (18) reads
                                       
                                           dX2 = d(t)X2 dt
                                           X2 (0) = 1.
                                 t
This is non-random: X2 (t) = e 0 d(s) ds . Since the solution of (17) is
                                             t              t
                              X1 (t) = X0 e 0 f (s) dW − 2 0 f (s) ds ,
                                                         1        2




we conclude that
                                                    t            t      1   2
                    X(t) = X1 (t)X2 (t) = X0 e 0 f (s) dW + 0 d(s)− 2 f (s) ds ,

a formula noted earlier.                                                                
                                                  99
  Example 2. Consider next the general equation
                      
                          dX = (c(t) + d(t)X)dt + (e(t) + f (t)X)dW
(19)
                          X(0) = X0 ,

again for m = n = 1. As above, we try for a solution of the form

                                             X(t) = X1 (t)X2 (t),

where now
                                
                                     dX1 = d(t)X1 dt + f (t)X1 dW
(20)
                                     X1 (0) = 1

and
                                     
                                         dX2 = A(t)dt + B(t)dW
(21)
                                         X2 (0) = X0 ,

the functions A, B to be chosen. Then

                      dX = X2 dX1 + X1 dX2 + f (t)X1 B(t)dt
                          = d(t)Xdt + f (t)XdW
                             + X1 (A(t)dt + B(t)dW ) + f (t)X1 B(t)dt.

We now require

                 X1 (A(t)dt + B(t)dW ) + f (t)X1 B(t)dt = c(t)dt + e(t)dW ;

and this identity will hold if we take
                            
                                A(t) := [c(t) − f (t)e(t)](X1 (t))−1
                                B(t) := e(t)(X1 (t))−1 .
                                t             t   1   2
Observe that since X1 (t) = e 0 f dW + 0 d− 2 f ds , we have X1 (t) > 0 almost surely. Conse-
quently
                                              t
                      X2 (t) = X0 +     [c(s) − f (s)e(s)](X1 (s))−1 ds
                                      0
                                  t
                               +     e(s)(X1 (s))−1 dW.
                                         0
                                                        100
Employing this and the expression above for X1 , we arrive at the formula, a special case
of (15):

   X(t) = X1 (t)X2 (t)
                 t                      t
                           1 2
        = exp       d(s) − f (s) ds +       f (s) dW
                 0         2             0
                  t           r                       s
                                         1 2
        × X0 +        exp −       d(r) − f (r) dr −        f (r) dW (c(s) − e(s)f (s)) ds
                   0           0         2               0
           t          s                       s
                                  1 2
        +     exp −       d(r) − f (r) dr −        f (r) dW e(s) dW.
           0           0          2             0

                                                                                   
   Remark. There is great theoretical and practical interest in numerical methods for
simulation of solutions to random diﬀerential equations. The paper of Higham [H] is a
good introduction.




                                            101
CHAPTER 6: APPLICATIONS.


    A. Stopping times
    B. Applications to PDE, Feynman-Kac formula
    C. Optimal stopping
    D. Options pricing
    E. The Stratonovich integral

   This chapter is devoted to some applications and extensions of the theory developed
earlier.


    A. STOPPING TIMES.

   DEFINITIONS, BASIC PROPERTIES. Let (Ω, U, P ) be a probability space and
F(·) a ﬁltration of σ–algebras, as in Chapters 4 and 5. We introduce now some random
times that are well–behaved with respect to F(·):
DEFINITION. A random variable τ : Ω → [0, ∞] is called a stopping time with respect
to F(·) provided
                      {τ ≤ t} ∈ F(t) for all t ≥ 0.

   This says that the set of all ω ∈ Ω such that τ (ω) ≤ t is an F(t)-measurable set. Note
that τ is allowed to take on the value +∞, and also that any constant τ ≡ t0 is a stopping
time.
THEOREM (Properties of stopping times). Let τ1 and τ2 be stopping times with
respect to F(·). Then
    (i) {τ < t} ∈ F(t), and so {τ = t} ∈ F(t), for all times t ≥ 0.
   (ii) τ1 ∧ τ2 := min(τ1 , τ2 ), τ1 ∨ τ2 := max(τ1 , τ2 ) are stopping times.

Proof. Observe that
                                             ∞
                                {τ < t} =         {τ ≤ t − 1/k} .
                                                           
                                            k=1
                                                  ∈F (t−1/k)⊆F (t)

Also, we have {τ1 ∧ τ2 ≤ t} = {τ1 ≤ t} ∪ {τ2 ≤ t} ∈ F(t), and furthermore {τ1 ∨ τ2 ≤ t} =
{τ1 ≤ t} ∩ {τ2 ≤ t} ∈ F(t).                                                             

  The notion of stopping times comes up naturally in the study of stochastic diﬀerential
equations, as it allows us to investigate phenomena occuring over “random time intervals”.
An example will make this clearer:
                                             102
Example (Hitting a set). Consider the solution X(·) of the SDE
                       
                         dX(t) = b(t, X)dt + B(t, X)dW
                            X(0) = X0 ,
where b, B and X0 satisfy the hypotheses of the Existence and Uniqueness Theorem.
THEOREM. Let E be either a nonempty closed subset or a nonempty open subset of
Rn . Then
                        τ := inf{t ≥ 0 | X(t) ∈ E}
is a stopping time. (We put τ = +∞ for those sample paths of X(·) that never hit E.)




                                                         X(τ)


                                                                E




Proof. Fix t ≥ 0; we must show {τ ≤ t} ∈ F(t). Take {ti }∞  i=1 to be a countable dense
subset of [0, ∞). First we assume that E = U is an open set. Then the event

                              {τ ≤ t} =           {X(ti ) ∈ U }
                                                           
                                          ti ≤t
                                                   ∈F (ti )⊆F (t)

belongs to F(t).
   Next we assume that E = C is a closed set. Set d(x, C) := dist(x, C) and deﬁne the
open sets
                                                   1
                             Un = {x : d(x, C) < }.
                                                   n
The event
                                    ∞
                         {τ ≤ t} =          {X(ti ) ∈ Un )}
                                                       
                                    n=1    ti ≤t
                                                     ∈F (ti )⊆F (t)

also belongs to F(t).                                                                  

Discussion. The random variable

                              σ := sup{t ≥ 0 | X(t) ∈ E},
                                         103
the last time that X(t) hits E, is in general not a stopping time. The heuristic reason is
that the event {σ ≤ t} would depend upon the entire future history of process and thus
would not in general be F(t)-measurable. (In applications F(t) “contains the history of
X(·) up to and including time t, but does not contain information about the future”.)
   The name “stopping time” comes from the example, where we sometimes think of
halting the sample path X(·) at the ﬁrst time τ that it hits a set E. But there are many
examples where we do not really stop the process at time τ . Thus “stopping time” is not
a particularly good name and “Markov time” would be better.                             

   STOCHASTIC INTEGRALS AND STOPPING TIMES. Our next task is to
consider stochastic integrals with random limits of integration and to work out an Itô
formula for these.

DEFINITION. If G ∈ L2 (0, T ) and τ is a stopping time with 0 ≤ τ ≤ T , we deﬁne
                                 τ                     T
                                            G dW :=             χ{t≤τ } G dW.
                                    0                   0


LEMMA (Itô integrals with stopping times). If G ∈ L2 (0, T )and 0 ≤ τ ≤ T is a
stopping time, then
                                                  τ
(i)                                          E         G dW            =0
                                                  0


                               τ                                        τ
(ii)                       E (    G dW )2                  =E                 G2 dt .
                                        0                                 0


Proof. We have                                                                    
                           τ                               T
                                                                                
                     E          G dW             =E                χ{t≤τ } G dW  = 0,
                            0                               0         
                                                                     ∈L2 (0,T )

and                          τ                T
                                      2
                         E((    G dW ) ) = E((    χ{t≤τ } G dW )2 )
                                0                                0
                                                       T
                                                  = E(     (χ{t≤τ } G)2 dt)
                                                      0 τ
                                                  = E(     G2 dt).
                                                                0

                                                                                          
                                                       104
  Similar formulas hold for vector–valued processes.
  ITÔ’S FORMULA WITH STOPPING TIMES. As usual, let W(·) denote m-
dimensional Brownian motion. Recall next from Chapter 4 that if dX = b(X, t)dt +
B(X, t)dW, then for each C 2 function u,

                         ∂u      n
                                     ∂u       1  ∂ 2 u  ik jk
                                                  n           m
                                           i
(1)           du(X, t) =    dt +         dX +                   b b dt.
                         ∂t      i=1
                                     ∂xi      2 i,j=1
                                                      ∂xi ∂xj
                                                                              k=1

Written in integral form, this means:
                                          t                             t
                                                 ∂u
(2)          u(X(t), t) − u(X(0), 0) =              + Lu         ds +          Du · B dW,
                                          0      ∂t                       0

for the diﬀerential operator

                         1  ij                            
                             n               n              m
                                                 i       ij
                   Lu :=         a uxi xj +     b uxi , a =   bik bjk ,
                         2 i,j=1            i=1                         k=1

and
                                               
                                               m 
                                                 n
                               Du · B dW =               uxi bik dW k .
                                               k=1 i=1

The argument of u in these integrals is (X(s), s). We call L the generator.
   For a ﬁxed ω ∈ Ω, formula (2) holds for all 0 ≤ t ≤ T . Thus we may set t = τ , where τ
is a stopping time, 0 ≤ τ ≤ T :
                                          τ                   τ
                                             ∂u
             u(X(τ ), τ ) − u(X(0), 0) =         + Lu ds +        Du · B dW.
                                          0   ∂t               0


  Take expected value:
                                                             τ
                                                                   ∂u
(3)            E(u(X(τ ), τ )) − E(u(X(0), 0)) = E                    + Lu          ds .
                                                             0     ∂t

   We will see in the next section that this formula provides a very important link between
stochastic diﬀerential equations and (nonrandom) partial diﬀerential equations.
  BROWNIAN MOTION AND THE LAPLACIAN. The most important case is
X(·) = W(·), n-dimensional Brownian motion, the generator of which is

                                      1
                                          n
                                                     1
                                 Lu =       uxi xi =: ∆u.
                                      2 i=1          2

The expression ∆u is called the Laplacian of u and occurs throughout mathematics and
physics. We will demonstrate in the next section some important links with Brownian
motion.                                                                            
                                         105
      B. APPLICATIONS TO PDE, FEYNMAN–KAC FORMULA.

PROBABILISTIC FORMULAS FOR SOLUTIONS OF PDE.
   Example 1 (Expected hitting time to a boundary). Let U ⊂ Rn be a bounded
open set, with smooth boundary ∂U . According to standard PDE theory, there exists a
smooth solution u of the equation
                                  1
                                    − 2 ∆u = 1 in U
(4)
                                          u = 0 on ∂U .
   Our goal is to ﬁnd a probabilistic representation formula for u. For this, ﬁx any point
x ∈ U and consider then an n-dimensional Brownian motion W(·). Then X(·) := W(·) + x
represents a “Brownian motion starting at x”. Deﬁne
                              τx := ﬁrst time X(·) hits ∂U.
THEOREM. We have
(5)                           u(x) = E(τx )    for all x ∈ U.
In particular, u > 0 in U .
Proof. We employ formula (3), with Lu = 12 ∆u. We have for each n = 1, 2, . . .
                                                   τx ∧n
                                                          1
             E(u(X(τx ∧ n))) − E(u(X(0))) = E               ∆u(X) ds .
                                                   0      2
Since 12 ∆u = −1 and u is bounded,
                                   lim E(τx ∧ n) < ∞.
                                  n→∞
Thus τx is integrable. Thus if we let n → ∞ above, we get
                                                τx
                      u(x) − E(u(X(τx ))) = E       1 ds = E(τx ).
                                                  0
But u = 0 on ∂U , and so u(X(τx )) ≡ 0. Formula (5) follows.                             

  Again recall that u is bounded on U . Hence
                      E(τx ) < ∞, and so τx < ∞ a.s., for all x ∈ U.
This says that Brownian sample paths starting at any point x ∈ U will with probability 1
eventually hit ∂U .

Example 2 (Probabilistic representation of harmonic functions). Let U ⊂ Rn be
a smooth, bounded domain and g : ∂U → R a given continuous function. It is known
from classical PDE theory that there exists a function u ∈ C 2 (U ) ∩ C(Ū ) satisfying the
boundary value problem:
                                 
                                    ∆u = 0 in U
(6)
                                     u = g on ∂U .
We call u a harmonic function.
                                          106
THEOREM. We have for each point x ∈ U

(7)                                u(x) = E(g(X(τx ))),

for X(·) := W(·) + x, Brownian motion starting at x.
Proof. As shown above,
                                            τx
                                                  1
       E(u(X(τx ))) = E(u(X(0))) + E                ∆u(X) ds   = E(u(X(0))) = u(x),
                                            0     2

the second equality valid since ∆u = 0 in U . Since u = g on ∂U , formula (7) follows.     
   APPLICATION: In particular, if ∆u = 0 in some open set containing the ball B(x, r),
then
                            u(x) = E(u(X(τx ))),

where τx now denotes the hitting time of Brownian motion starting at x to ∂B(x, r). Since
Brownian motion is isotropic in space, we may reasonably guess that the term on the right
hand side is just the average of u over the sphere ∂B(x, r), with respect to surface measure.
That is, we have the identity
                                                    
                                            1
(8)                        u(x) =                            u dS.
                                    area of ∂B(x, r) ∂B(x,r)

This is the mean value formula for harmonic functions.                                     

Example 3 (Hitting one part of a boundary ﬁrst). Assume next that we can write
∂U as the union of two disjoint parts Γ1 , Γ2 . Let u solve the PDE
                                   
                                   
                                    ∆u = 0 in U
                                       u = 1 on Γ1
                                   
                                   
                                       u = 0 on Γ2 .

THEOREM. For each point x ∈ U , u(x) is the probability that a Brownian motion
starting at x hits Γ1 before hitting Γ2 .




                                                                   Γ1


                               x                      Γ2




                                            107
Proof. Apply (7) for
                                                
                                                    1   on Γ1
                                       g=
                                                    0   on Γ2 .
Then
                u(x) = E(g(X(τx ))) = probability of hitting Γ1 before Γ2 .

                                                                                              

FEYNMAN–KAC FORMULA. Now we extend Example #2 above to obtain a prob-
abilistic representation for the unique solution of the PDE
                                
                                    − 12 ∆u + cu = f          in U
                                                    u=0       on ∂U.

We assume c, f are smooth functions, with c ≥ 0 in U .

THEOREM (Feynman–Kac formula). For each x ∈ U ,
                                            τx                   t
                            u(x) = E              f (X(t))e− 0 c(X) ds dt
                                            0


where, as before, X(·) := W(·) + x is a Brownian motion starting at x, and τx denotes the
ﬁrst hitting time of ∂U .

Proof. We know E(τx ) < ∞. Since c ≥ 0, the integrals above all converge.
   First look at the process
                                    Y (t) := eZ(t) ,
              t
for Z(t) := − 0 c(X) ds. Then
                                   dZ = −c(X)dt,

and so Itô’s formula yields
                                       dY = −c(X)Y dt.

Hence the Itô product rule implies
                       t                               t
           d u(X)e− 0 c(X) ds = (du(X))e− 0 c(X) ds
                                                             t
                                           + u(X)d e− 0 c(X)ds
                                                                           
                                           1           n
                                                           ∂u(X)                  t
                                  =          ∆u(X)dt +           dW i           e− 0 c(X)ds
                                           2           i=1
                                                            ∂xi
                                                                       t
                                           + u(X)(−c(X)dt)e− 0 c(X) ds .
                                                108
We use formula (3) for τ = τx , and take the expected value, obtaining
                                     τx
                    E u(X(τx ))e− 0 c(X) ds − E(u(X(0)))
                          τx %                   & 
                                1                      t
                    =E            ∆u(X) − c(X)u(X) e− 0 c(X) ds dt .
                          0     2
Since u solves (8), this simpliﬁes to give
                                                 τx           t
                    u(x) = E(u(X(0))) = E              f (X)e− 0 c(X) ds dt ,
                                                 0

as claimed.                                                                                 
An interpretation. We can explain this formula as describing a Brownian motion with
“killing”, as follows.
   Suppose that the Brownian particles may disappear at a random killing time σ, for
example by being absorbed into the medium within which it is moving. Assume further
that the probability of its being killed in a short time interval [t, t + h] is

                                       c(X(t))h + o(h).

Then the probability of the particle surviving until time t is approximately equal to

                    (1 − c(X(t1 ))h)(1 − c(X(t2 ))h) . . . (1 − c(X(tn ))h),
                                                                                    t
where 0 = t0 < t1 < · · · < tn = t, h = tk+1 − tk . As h → 0, this converges to e− 0 c(X) ds .
  Hence it should be that

        u(x) = average of f (X(·)) over all sample paths which survive to hit ∂U
                   τx         t
             =E        f (X)e− 0 c(X) ds dt .
                      0

                                                                                            
Remark. If we consider in these examples the solution of the SDE
                           
                             dX = b(X)dt + B(X)dW
                                  X(0) = x,
we can obtain similar formulas, where now

                              τx = hitting time of ∂U for X(·)

and 12 ∆u is replaced by the generator

                                   1  ij             
                                       n               n
                             Lu :=         a uxi xj +     bi uxi .
                                   2 i,j=1            i=1

Note, however, we need to know that the various PDE have smooth solutions. This need
not always be the case for degenerate elliptic operators L.                       
                                            109
       C. OPTIMAL STOPPING.

    The general mathematical setting for many control theory problems is this. We are given
some “system” whose state evolves in time according to a diﬀerential equation (determin-
istic or stochastic). Given also are certain controls which aﬀect somehow the behavior of
the system: these controls typically either modify some parameters in the dynamics or else
stop the process, or both. Finally we are given a cost criterion, depending upon our choice
of control and the corresponding state of the system.
  The goal is to discover an optimal choice of controls, to minimize the cost criterion.
   The easiest stochastic control problem of the general type outlined above occurs when
we cannot directly aﬀect the SDE controlling the evolution of X(·) and can only decide at
each instance whether or not to stop. A typical such problem follows.

   STOPPING A STOCHASTIC DIFFERENTIAL EQUATION. Let U ⊂ Rm
be a bounded, smooth domain. Suppose b : Rn → Rn , B : Rn → M n×m satisfy the usual
assumptions.
   Then for each x ∈ U the stochastic diﬀerential equation
                             
                                dX = b(X)dt + B(X)dW
                                   X0 = x
has a unique solution. Let τ = τx denote the hitting time of ∂U . Let θ be any stopping
time with respect to F(·), and for each such θ deﬁne the expected cost of stopping X(·) at
time θ ∧ τ to be
                                    θ∧τ
(9)                   Jx (θ) := E(       f (X(s)) ds + g(X(θ ∧ τ ))).
                                      0

The idea is that if we stop at the possibly random time θ < τ , then the cost is a given
function g of the current state of X(θ). If instead we do not stop the process before it hits
∂U , that is, if θ ≥ τ , the cost is g(X(τ )). In addition there is a running cost per unit time
f of keeping the system in operation until time θ ∧ τ .

   OPTIMAL STOPPING. The main question is this: does there exist an optimal
stopping time θ∗ = θx∗ , for which

                                  Jx (θ∗ ) =     min        Jx (θ)?
                                               θ stopping
                                                  time

And if so, how can we ﬁnd θ∗ ? It turns out to be very diﬃcult to try to design θ∗ directly.
A much better idea is to turn attention to the value function

(10)                                  u(x) := inf Jx (θ),
                                                  θ
                                                110
and to try to ﬁgure out what u is as a function of x ∈ U . Note that u(x) is the minimum
expected cost, given we start the process at x. It turns out that once we know u, we will
be then be able to construct an optimal θ∗ . This approach is called dynamic programming.

   OPTIMALITY CONDITIONS. So assume u is deﬁned above and suppose u is
smooth enough to justify the following calculations. We wish to determine the properties
of this function.
   First of all, notice that we could just take θ ≡ 0 in the deﬁnition (10). That is, we could
just stop immediately and incur the cost g(X(0)) = g(x). Hence

(11)                           u(x) ≤ g(x) for each point x ∈ U.

Furthermore, τ ≡ 0 if x ∈ ∂U , and so

(12)                           u(x) = g(x) for each point x ∈ ∂U.

Next take any point x ∈ U and ﬁx some small number δ > 0. Now if we do not stop the
system for time δ, then according to (SDE) the new state of the system at time δ will be
X(δ). Then, given that we are at the point X(δ), the best we can achieve in minimizing
the cost thereafter must be
                                        u(X(δ)).

So if we choose not to stop the system for time δ, and assuming we do not hit ∂U , our
cost is at least                           δ
                                   E(           f (X) ds + u(X(δ))).
                                        0

Since u(x) is the inﬁmum of costs over all stopping times, we therefore have
                                          δ
                                u(x) ≤ E(    f (X) ds + u(X(δ))).
                                                    0

      Now by Itô’s formula
                                                     δ
                              E(u(X(δ))) = u(x) + E(    Lu(X) ds),
                                                              0

for
                           1  ij ∂ 2 u                                  
                               n                n                         m
                                                      ∂u
                    Lu =           a         +     bi     ,       aij =         bik bjk .
                           2 i,j=1   ∂xi ∂xj   i=1
                                                      ∂xi
                                                                          k=1

Hence                                    δ
                                  0 ≤ E(    f (X) + Lu(X) ds).
                                                0
                                                        111
Divide by δ > 0, and then let δ → 0:

                                     0 ≤ f (x) + Lu(x).

Equivalently, we have

(13)                                   Mu ≤ f     in U,

where M u := −Lu.
  Finally we observe that if in (11) a strict inequality held, that is, if

                             u(x) < g(x) at some point x ∈ U,

then it is optimal not to stop the process at once. Thus it is plausible to think that we
should leave the system going, for at least some very small time δ. In this circumstance
we then would have an equality in the formula above; and so

(14)                       Mu = f      at those points where u < g.


   In summary, we combine (11)–(14) to ﬁnd that if the formal reasoning above is valid,
then the value function u satisﬁes:
                           
                             max(M u − f, u − g) = 0 in U
(15)
                                               u = g on ∂U

These are the optimality conditions.

   SOLVING FOR THE VALUE FUNCTION. Our rigorous study of the stopping
time problem now begins by showing ﬁrst that there exists a unique solution u of (15)
and second that this u is in fact minθ Jx (θ). Then we will use u to design θ∗ , an optimal
stopping time.
THEOREM. Suppose f, g are given smooth functions. There exists a unique funtion u,
with bounded second derivatives, such that:
    (i) u ≤ g in U ,
   (ii) M u ≤ f almost everywhere in U ,
  (iii) max(M u − f, u − g) = 0 almost everywhere in U ,
  (iv) u = g on ∂U .
In general u ∈
             / C 2 (U ).
  The idea of the proof is to approximate (15) by a penalized problem of this form:
                            
                              M uε + βε (uε − g) = f in U
                                              uε = g on ∂U ,
                                            112
where βε : R → R is a smooth, convex function, βε ≥ 0, and βε ≡ 0 for x ≤ 0,
lim4→0 βε (x) = ∞ for x > 0. Then uε → u. It will in practice be diﬃcult to ﬁnd a
precise formula for u, but computers can provide accurate numerical approximations.

   DESIGNING AN OPTIMAL STOPPING POLICY. Now we show that our
solution of (15) is in fact the value function, and along the way we will learn how to design
an optimal stopping strategy θ∗ .
   First note that the stopping set

                                   S := {x ∈ U | u(x) = g(x)}

is closed. Deﬁne for each x ∈ Ū ,

                                   θ∗ = ﬁrst hitting time of S.

THEOREM. Let u be the solution of (15). Then

                                    u(x) = Jx (θ∗ ) = inf Jx (θ)
                                                       θ


for all x ∈ Ū .

  This says that we should ﬁrst compute the solution to (15) to ﬁnd S, deﬁne θ∗ as above,
and then we should run X(·) until it hits S (or else exits from U ).

Proof. 1. Deﬁne the continuation set

                            C := U − S = {x ∈ U | u(x) < g(x)}.

On this set Lu = f , and furthermore u = g on ∂C. Since τ ∧ θ∗ is the exit time from C,
we have for x ∈ C
                             τ ∧θ∗
                   u(x) = E(        f (X(s)) ds + g(X(θ∗ ∧ τ ))) = Jx (θ∗ ).
                               0

On the other hand, if x ∈ S, τ ∧ θ∗ = 0; and so

                                     u(x) = g(x) = Jx (θ∗ ).

Thus for all x ∈ Ū , we have u(x) = Jx (θ∗ ).
  2. Now let θ be any other stopping time. We need to show

                                     u(x) = Jx (θ∗ ) ≤ Jx (θ).
                                              113
Now by Itô’s formula
                                  τ ∧θ
                        u(x) = E(       M u(X) ds + u(X(τ ∧ θ)))
                                     0


But M u ≤ f and u ≤ g in Ū . Hence
                               τ ∧θ
                     u(x) ≤ E(       f (X) ds + g(X(τ ∧ θ))) = Jx (θ).
                                 0

  But since u(x) = Jx (θ∗ ), we consequently have

                                u(x) = Jx (θ∗ ) = min Jx (θ),
                                                    θ


as asserted.                                                                              




    D. OPTIONS PRICING.


  In this section we outline an application to mathematical ﬁnance, mostly following
Baxter–Rennie [B-R] and the class lectures of L. Goldberg. Another basic reference is Hull
[Hu].

   THE BASIC PROBLEM. Let us consider a given security, say a stock, whose price
at time t is S(t). We suppose that S evolves according to the SDE introduced in Chapter
5:
                                 
                                   dS = µSdt + σSdW
(16)
                                   S(0) = s0 ,

where µ > 0 is the drift and σ = 0 the volatility. The initial price s0 is known.

   A derivative is a ﬁnancial instrument whose payoﬀ depends upon (i.e., is derived from)
the behavior of S(·). We will investigate a European call option, which is the right to buy
one share of the stock S, at the price p at time T . The number p is called the strike price
and T > 0 the strike (or expiration) time. The basic question is this:

                 What is the “proper price” at time t = 0 of this option?

In other words, if you run a ﬁnancial ﬁrm and wish to sell your customers this call option,
how much should you charge? (We are looking for the “break–even” price, for which the
ﬁrm neither makes nor loses money.)
                                           114
   ARBITRAGE AND HEDGING. To simplify, we assume hereafter that the pre-
vailing, no-risk interest rate is the constant r > 0. This means that $1 put in a bank at
time t = 0 becomes $erT at time t = T . Equivalently, $1 at time t = T is worth only
$e−rT at time t = 0.
   As for the problem of pricing our call option, a ﬁrst guess might be that the proper
price should be

(17)                                e−rT E((S(T ) − p)+ ),

for x+ := max(x, 0). The reasoning behind this guess is that if S(T ) < p, then the option
is worthless. If S(T ) > p, we can buy a share for the price p, immediately sell at price
S(T ), and thereby make a proﬁt of (S(T ) − p)+ . We average this over all sample paths
and multiply by the discount factor e−rT , to arrive at (17).

   As reasonable as this may all seem, (17) is in fact not the proper price. Other forces
are at work in ﬁnancial markets. Indeed the fundamental factor in options pricings is
arbitrage, meaning the possibility of risk-free proﬁts.

       We must price our option so as to create no arbitrage opportunities for others.

  To convert this principle into mathematics, we introduce also the notion of hedging.
This means somehow eliminating our risk as the seller of the call option. The exact details
appear below, but the basic idea is that we can in eﬀect “duplicate” our option by a
portfolio consisting of (continually changing) holdings of a risk–free bond and of the stock
on which the call is written.

   A PARTIAL DIFFERENTIAL EQUATION. We demonstrate next how use these
principles to convert our pricing problem into a PDE. We introduce for s ≥ 0 and 0 ≤ t ≤ T ,
the unknown price function

(18)     u(s, t), denoting the proper price of the option at time t, given that S(t) = s.

Then u(s0 , 0) is the price we are seeking.

Boundary conditions. We need to calculate u. For this, notice ﬁrst that at the expiration
time T , we have

(19)                           u(s, T ) = (s − p)+      (s ≥ 0).

Furthermore, if s = 0, then S(t) = 0 for all 0 ≤ t ≤ T and so

(20)                             u(0, t) = 0      (0 ≤ t ≤ T ).
                                               115
We seek how a PDE u solves for s > 0, 0 ≤ t ≤ T .
Duplicating an option, self-ﬁnancing. To go further, deﬁne the process

(21)                        C(t) := u(S(t), t)    (0 ≤ t ≤ T ).

Thus C(t) is the current price of the option at time t, and is random since the stock price
S(t) is random. According to Itô’s formula and (16)

                                            1
                       dC = ut dt + us dS + uss (dS)2
                                            2
(22)
                                           σ2 2
                          = (ut + µSus +      S uss )dt + σSus dW.
                                           2
Now comes the key idea: we propose to “duplicate” C by a portfolio consisting of shares of
S and of a bond B. More precisely, assume that B is a risk-free investment, which therefore
grows at the prevailing interest rate r:
                                      
                                          dB = rBdt
(23)
                                          B(0) = 1.

This just means B(t) = ert , of course. We will try to ﬁnd processes φ and ψ so that

(24)                          C = φS + ψB        (0 ≤ t ≤ T ).

Discussion. The point is that if we can construct φ, ψ so that (24) holds, we can eliminate
all risk. To see this more clearly, imagine that your ﬁnancial ﬁrm sells a call option,
as above. The ﬁrm thereby incurs the risk that at time T , the stock price S(T ) will
exceed p, and so the buyer will exercise the option. But if in the meantime the ﬁrm has
constructed the portfolio (24), the proﬁts from it will exactly equal the funds needed to
pay the customer. Conversely, if the option is worthless at time T , the portfolio will have
no proﬁt.                                                                                 
   But to make this work, the ﬁnancial ﬁrm should not have to inject any new money into
the hedging scheme, beyond the initial investment to set it up. We ensure this by requiring
that the portfolio represented on the right-hand side of (24) be self-ﬁnancing. This means
that the changes in the value of the portfolio should depend only upon the changes in S, B.
We therefore require that

(25)                        dC = φdS + ψdB         (0 ≤ t ≤ T ).


Remark (discrete version of self-ﬁnancing). Roughly speaking, a portfolio is self-
ﬁnancing if it is ﬁnancially self contained. To understand this better, let us consider a
                                            116
diﬀerent model in which time is discrete, and the values of the stock and bond at a time
ti are given by Si and Bi respectively. Here {ti }Ni=0 is an increasing sequence of times and
we suppose that each time step ti+1 − ti is small. A portfolio can now be thought of as
a sequence {(φi , ψi )}N
                       i=0 , corresponding to our changing holdings of the stock S and the
bond B over each time interval.
   Now for a given time interval (ti , ti+1 ), Ci = φi Si + ψi Bi is the opening value of the
portfolio and Ci+1 = φi Si+1 + ψi Bi+1 represents the closing value. The self-ﬁnancing
condition means that the ﬁnancing gap Ci+1 − Ci of cash (that would otherwise have to
be injected to pay for our construction strategy) must be zero.This is equivalent to saying
that
                         Ci+1 − Ci = φi (Si+1 − Si ) + ψi (Bi+1 − Bi ),
the continuous version of which is condition (25).                                         

  Combining formulas (22), (23) and (25) provides the identity

                                        σ2 2
                          (ut + µSus +    S uss )dt + σSus dW
(26)                                    2
                                    = φ(µSdt + σSdW ) + ψrBdt.

So if (24) holds, (26) must be valid, and we are trying to select φ, ψ to make all this so.
We observe in particular that the terms multiplying dW on each side of (26) will match
provided we take

(27)                        φ(t) := us (S(t), t)     (0 ≤ t ≤ T ).

Then (26) simpliﬁes, to read

                                        σ2 2
                                (ut +     S uss )dt = rψBdt.
                                        2
But ψB = C − φS = u − us S, according to (24), (27). Consequently,

                                           σ2 2
(28)                        (ut + rSus +     S uss − ru)dt = 0.
                                           2
The argument of u and its partial derivatives is (S(t), t).
   Consequently, to make sure that (21) is valid, we ask that the function u = u(s, t) solve
the Black–Scholes–Merton PDE
                                    σ2 2
(29)                  ut + rsus +     s uss − ru = 0       (0 ≤ t ≤ T ).
                                    2
The main outcome of all our ﬁnancial reasoning is the derivation of this partial diﬀerential
equation. Observe that the parameter µ does not appear.
                                          117
More on self-ﬁnancing. Before going on, we return to the self-ﬁnancing condition (25).
The Itô product rule and (24) imply

                         dC = φdS + ψdB + Sdφ + Bdψ + dφ dS.

To ensure (25), we consequently must make sure that

(30)                             Sdφ + Bdψ + dφ dS = 0,

where we recall φ = us (S(t), t). Now dφ dS = σ 2 S 2 uss dt. Thus (30) is valid provided

(31)                          dψ = −B −1 (Sdφ + σ 2 S 2 uss dt).

We can conﬁrm this by noting that (24), (27) imply

                      ψ = B −1 (C − φS) = e−rt (u(S, t) − us (S, t)S).

A direct calculation using (28) veriﬁes (31).

   SUMMARY. To price our call option, we solve the boundary-value problem
                           2
             ut + rsus + σ2 s2 uss − ru = 0 (s > 0, 0 ≤ t ≤ T )
(32)          u = (s − p)+                     (s > 0, t = T )
            
              u=0                              (s = 0, 0 ≤ t ≤ T ).

   Remember that u(s0 , 0) is the price we are trying to ﬁnd. It turns out that this problem
can be solved explicitly, although we omit the details here: see for instance Baxter–Rennie
[B-R].


       E. THE STRATONOVICH INTEGRAL.

  We next discuss the Stratonovich stochastic calculus, which is an alternative to Itô’s
approach. Most of the following material is from Arnold [A, Chapter 10].
   1. Motivation. Let us consider ﬁrst of all the formal random diﬀerential equation
                              
                                 Ẋ = d(t)X + f (t)Xξ
(33)
                                 X(0) = X0 ,

where m = n = 1 and ξ(·) is 1-dimensional “white noise”. If we interpret this rigorously
as the stochastic diﬀerential equation:
                               
                                 dX = d(t)Xdt + f (t)XdW
(34)
                                 X(0) = X0 ,
                                          118
we then recall from Chapter 5 that the unique solution is
                                               t             1   2
                                                                            t
(35)                          X(t) = X0 e 0 d(s)− 2 f (s) ds+ 0 f (s) dW .

   On the other hand perhaps (33) is a proposed mathematical model of some physical
process and we are not really sure whether ξ(·) is “really” white noise. It could perhaps
be instead some process with smooth (but highly complicated) sample paths. How would
this possibility change the solution?

   APPROXIMATING WHITE NOISE. More precisely, suppose that {ξ k (·)}∞
                                                                    k=1 is
a sequence of stochastic processes satisfying:
   (a) E(ξ k (t)) = 0,
   (b) E(ξ k (t)ξ k (s)) := dk (t − s),
   (c) ξ k (t) is Gaussian for all t ≥ 0,
   (d) t → ξ k (t) is smooth for all ω,
where we suppose that the functions dk (·) converge as k → ∞ to δ0 , the Dirac measure at
0.
   In light of the formal deﬁnition of the white noise ξ(·) as a Gaussian process with
Eξ(t) = 0, E(ξ(t)ξ(s)) = δ0 (t − s), the ξ k (·) are thus presumably smooth approximations
of ξ(·).

   LIMITS OF SOLUTIONS. Now consider the problem
                      k
                      Ẋ = d(t)X k + f (t)X k ξ k
(36)
                      X k (0) = X0 .
For each ω this is just a regular ODE, whose solution is
                                                    t                t         k
                               X k (t) := X0 e 0 d(s) ds+ 0 f (s)ξ (s) ds .

Next look at                                         t
                                       k
                                      Z (t) :=                f (s)ξ k (s) ds.
                                                         0
For each time t ≥ 0, this is a Gaussian random variable, with

                                               E(Z k (t)) = 0.

Furthermore,
                                                t s
                          k       k
                     E(Z (t)Z (s)) =                           f (τ )f (σ)dk (τ − σ) dσdτ
                                                0        0
                                                t s
                                           →                   f (τ )f (σ)δ0 (τ − σ) dσdτ
                                                0    0
                                                t∧s
                                           =                 f 2 (τ ) dτ.
                                                0
                                                         119
Hence as k → ∞, Z k (t) converges in L2 to a process whose distributions agree with those
t
 0
   f (s) dW . And therefore X k (t) converges to a process whose distributions agree with
                                                   t         t
(37)                               X̂(t) := X0 e 0 d(s) ds+ 0 f (s) dW .

This does not agree with the solution (35)!
   Discussion. Thus if we regard (33) as an Itô SDE with ξ(·) a “true” white noise, (35) is
our solution. But if we approximate ξ(·) by smooth processes ξ k (·), solve the approximate
problems (36) and pass to limits with the approximate solutions X k (·), we get a diﬀerent
solution. This means that (33) is unstable with respect to changes in the random term
ξ(·). This conclusion has important consequences in questions of modeling, since it may
be unclear experimentally whether we really have ξ(·) or instead ξ k (·) in (33) and similar
problems.
   In view of all this, it is appropriate to ask if there is some way to redeﬁne the stochastic
integral so these diﬃculties do not come up. One answer is the Stratonovich integral.

  2. Deﬁnition of Stratonovich integral.
  A one-dimensional example. Recall that in Chapter 4 we deﬁned for 1-dimensional
Brownian motion
          T                  n −1
                             m
                                                                     W 2 (T ) − T
             W dW := lim           W (t n
                                        k )(W (t n
                                                 k+1 ) − W (t n
                                                              k )) =              ,
          0         |P n |→0                                               2
                                         k=0

where P n := {0 = tn0 < tn1 < · · · < tnmn = T } is a partition of [0, T ]. This corresponds
to a sequence of Riemann sum approximations, where the integrand is evaluated at the
left-hand endpoint of each subinterval [tnk , tnk+1 ].
  The corresponding Stratonovich integral is instead deﬁned this way:
        T                        n −1
                                 m
                                           W (tnk+1 ) + W (tnk )                                   W 2 (T )
             W ◦ dW := lim                                            (W (tnk+1 ) − W (tnk )) =             .
        0               |P |→0
                        n                            2                                               2
                                 k=0

(Observe the notational change: we hereafter write a small circle before the dW to signify
the Stratonovich integral.) According to calculations in Chapter 4, we also have
                 T                         n −1
                                           m
                                                        tnk+1 + tnk
                      W ◦ dW = lim                 W                    (W (tnk+1 ) − W (tnk )).
                 0
                                n |P |→0                     2
                                            k=0

Therefore for this case the Stratonovich integral corresponds to a Riemann sum approxi-
mation where we evaluate the integrand at the midpoint of each subinterval [tnk , tnk+1 ].
                                                                                           
  We generalize this example and so introduce the
                                         120
DEFINITION. Let W(·) be an n-dimensional Brownian motion and let B : Rn ×[0, T ] →
Mn×n be a C 1 function such that
                                               
                                  T
                             E      |B(W, t)|2 dt < ∞.
                                      0

Then we deﬁne
   T                               n −1
                                   m
                                                   W(tnk+1 ) + W(tnk ) n
      B(W, t) ◦ dW := lim                  B                          , tk (W(tnk+1 ) − W(tnk )).
    0
                       n  |P |→0                            2
                                    k=0

It can be shown that this limit exists in L2 (Ω).

  A CONVERSION FORMULA. Remember that Itô’s integral can be computed this
way:
        T                   n −1
                            m
           B(W, t) dW = lim       B(W(tnk ), tnk )(W(tnk+1 ) − W(tnk )).
             0
                         n       |P |→0
                                           k=0

This is in general not equal to the Stratonovich integral, but there is a conversion formula
          )                  * i )                 *i      
                                                           1 T  ∂bij
              T                         T                         n
(38)            B(W, t) ◦ dW =            B(W, t) dW +                     (W, t) dt,
            0                         0                    2 0 j=1 ∂xj

for i = 1, . . . , n. Here v i means the ith –component of the vector function v. This formula
is proved by noting
       T                        T
          B(W, t) ◦ dW −            B(W, t) dW
        0                   0
                                     n −1 %
                                    m                                                          &
                                                     W(tnk+1 ) + W(tnk ) n
                         = lim                 B                        , tk   − B(W(tnk ), tnk )
                           |P |→0
                            n                                 2
                                    k=0
                                                                      · (W(tnk+1 ) − W(tnk ))

and using the Mean Value Theorem plus some usual methods for evaluating the limit. We
omit details.                                                                       
Special case. If n = 1, then
                 T                 T               
                                                    1 T ∂b
                    b(W, t) ◦ dW =     b(W, t) dW +        (W, t) dt.
                 0                  0               2 0 ∂x
                                                                                                    

  Assume now B : Rn × [0, T ] → Mn×m and W(·) is an m-dimensional Brownian motion.
We make this informal
                                       121
DEFINITION. If X(·) is a stochastic process with values in Rn , we deﬁne

     T                               n −1
                                     m
                                                 X(tnk+1 ) + X(tnk ) n
           B(X, t) ◦ dW := lim               B                      , tk (W(tnk+1 ) − W(tnk )),
       0                    |P |→0
                            n                             2
                                      k=0


provided this limit exists in L2 (Ω) for all sequences of partitions P n , with |P n | → 0.


  3. Stratonovich chain rule.

DEFINITION. Suppose that the process X(·) solves the Stratonovich integral equation
                                t                   t
               X(t) = X(0) +         b(X, s) ds +         B(X, s) ◦ dW   (0 ≤ t ≤ T )
                                0                    0


for b : Rn × [0, T ] → Rn and B : Rn × [0, T ] → Mn×m . We then write

                               dX = b(X, t)dt + B(X, t) ◦ dW,

the second term on the right being the Stratonovich stochastic diﬀerential.


THEOREM (Stratonovich chain rule). Assume

                               dX = b(X, t)dt + B(X, t) ◦ dW

and suppose u : Rn × [0, T ] → R is smooth. Deﬁne

                                        Y (t) := u(X(t), t).

Then

                          ∂u      n
                                      ∂u
                    dY =     dt +          ◦ dXi
                          ∂t      i=1
                                      ∂xi
                                           
                            ∂u  ∂u i            
                                   n              n m
                                                       ∂u ik
                        =       +         b dt +           b ◦ dWk .
                            ∂t    i=1
                                      ∂xi        i=1
                                                       ∂xi
                                                             k=1



   Thus the ordinary chain rule holds for Stratonovich stochastic diﬀerentials, and there is
                                   2
no additional term involving ∂x∂i ∂x u
                                       j
                                         as there is for Itô’s formula. We omit the proof, which
is similar to that for the Itô rule. The main diﬀerence is that we make use of the formula
T
 0
    W ◦ dW = 12 W 2 (T ) in the approximations.
                                                122
  More discussion. Next let us return to the motivational example we began with. We
have seen that if the diﬀerential equation (33) is interpreted to mean
                       
                         dX = d(t)Xdt + f (t)XdW (Itô’s sense),
                         X(0) = X0 ,

then                                       t                      t
                                                      1   2
                           X(t) = X0 e 0 d(s)− 2 f (s) ds+ 0 f (s) dW .

However, if we interpret (33) to mean
                
                   dX = d(t)Xdt + f (t)X ◦ dW                 (Stratonovich’s sense)
                   X(0) = X0 ,

the solution is                                  t           t
                                 X̃(t) = X0 e 0 d(s) ds+ 0 f (s) dW ,

as is easily checked using the Stratonovich calculus described above.
   This solution X̃(·) is also the solution obtained by approximating the “white noise” ξ(·)
by smooth processes ξ k (·) and passing to limits. This suggests that interpreting (16) and
similar formal random diﬀerential equations in the Stratonovich sense will provide solutions
which are stable with respect to perturbations in the random terms. This is indeed the
case: See the articles [S1-2] by Sussmann.
   Note also that these considerations clarify a bit the problems of interpreting mathemat-
ically the formal random diﬀerential equation (33), but do not say which interpretation is
physically correct. This is a question of modeling and is not, strictly speaking, a mathe-
matical issue.

   CONVERSION RULES FOR SDE.
   Let W(·) be an m-dimensional Wiener process and suppose b : Rn × [0, T ] → Rn ,
B : Rn × [0, T ] → Mn×m satisfy the hypotheses of the basic existence and uniqueness
theorem. Then X(·) solves the Itô stochastic diﬀerential equation
                           
                             dX = b(X, t)dt + B(X, t)dW
                                  X(0) = X0

if and only if X(·) solves the Stratonovich stochastic diﬀerential equation
                              +                  ,
                         dX = b(X, t) − 12 c(X, t) dt + B(X, t) ◦ dW
                       X(0) = X0 ,

for
                                 
                                 m 
                                   n
                                     ∂bik
                   ci (x, t) =                   (x, t)bjk (x, t)       (1 ≤ i ≤ n).
                                       j=1
                                           ∂xj
                                 k=1
                                                   123
  A special case. For m = n = 1, this says

                                 dX = b(X)dt + σ(X)dW

if and only if
                                   1
                       dX = (b(X) − σ  (X)σ(X))dt + σ(X) ◦ dW.
                                   2

  4. Summary We conclude these lectures by summarizing the advantages of each
deﬁnition of the stochastic integral:
  Advantages of Itô integral
                         t                       t          2        t
   1. Simple formulas: E 0 G dW = 0, E             0
                                                       G dW       =E   0
                                                                            G2 dt .
            t
   2. I(t) = 0 G dW is a martingale.

  Advantages of Stratonovich integral
     1. Ordinary chain rule holds.
     2. Solutions of stochastic diﬀerential equations interpreted in Stratonovich sense are
        stable with respect to changes in random terms.




                                           124
                                      APPENDICES

  Appendix A: Proof of Laplace–DeMoivre Theorem (from §G in Chapter 2)
                           −np
Proof. 1. Set Sn∗ := S√nnpq    , this being a random variable taking on the value xk = k−np
                                                                                       √
                                             n k n−k                                    npq
(k = 0, . . . , n) with probability pn (k) = k p q     .
                           -            .
                             −np    nq
   Look at the interval √npq , √npq . The points xk divide this interval into n subintervals
of length
                                                   1
                                            h := √     .
                                                   npq

Now if n goes to ∞, and at the same time k changes so that |xk | is bounded, then

                                              √
                                   k = np + xk npq → ∞

and
                                              √
                               n − k = nq − xk npq → ∞.

  2. We recall next Stirling’s formula, which says says
                                    √
                         n! = e−n nn 2πn (1 + o(1))       as n → ∞,

where “o(1)” denotes a term which goes to 0 as n → ∞. (See Mermin [M] for a nice
discussion.) Hence as n → ∞

                         n                n!
              pn (k) =       pk q n−k =          pk q n−k
                         k            k!(n − k)!
                                         √
                                  e−n nn 2πnpk q n−k
(1)                 =        √                                      (1 + o(1))
                      e−k k k 2πke−(n−k) (n − k)(n−k) 2π(n − k)
                           /                              n−k
                       1        n       np k      nq
                    = √                                       (1 + o(1)).
                        2π k(n − k) k           n−k

  3. Observe next that if x = xk = k−np
                                   √
                                     npq , then

                              /               /
                                   q               q   k − np       k
                         1+          x=1+              √        =
                                  np              np     npq        np

and                                       /
                                              p     n−k
                                    1−           x=     .
                                              nq     nq
                                                125
                                       2
Note also log(1 ± y) = ±y − y2 + O(y 3 ) as y → 0. Hence

                         np   k                k
                   log            = −k log
                         k                     np
                                                    /
                                                 q
                                  = −k log 1 +     x
                                                np
                                                   /
                                            √         q     q 2
                                                                                     + O n− 2 .
                                                                                                1
                                  = −(np + x npq)       x−     x
                                                     np    2np

Similarly,
                              n−k                    /
                     nq                       √        p      p 2
                                                                                            + O n− 2 .
                                                                                                    1
             log                    = −(nq − x npq) −     x−     x
                    n−k                                nq    2nq

Add these expressions and simplify, to discover
                                                                           
                                                                      n−k
                                                   np   k     nq                     x2
                                   lim log                                      =−      .
                              k−np
                                  n→∞              k         n−k                     2
                                npq →x
                              √




Consequently

                                                    k              n−k
                                               np            nq                 x2
(2)                                   lim                                 = e− 2 .
                                     n→∞
                                    k−np       k            n−k
                                      npq →x
                                    √




  4. Finally, observe
                              /
                                     n        1
(3)                                        =√     (1 + o(1)) = h(1 + o(1)),
                                  k(n − k)    npq
                √                     √
since k = np + x npq, n − k = nq − x npq.
   Now                                                            
                            P (a ≤ Sn∗ ≤ b) =                             pn (k)
                                                              a≤xk ≤b
                                                             xk = k−np
                                                                  √
                                                                    npq


for a < b. In view of (1) − (3), the latter expression is a Riemann sum approximation as
n → ∞ of the integral
                                            b
                                       1         x2
                                      √        e− 2 dx.
                                        2π a
                                                                                                         

  Appendix B: Proof of discrete martingale inequalities (from §I in Chapter 2)
                                   126
Proof. 1. Deﬁne

                                      
                                      k−1
                            Ak :=           {Xj ≤ λ} ∩ {Xk > λ}                  (k = 1, . . . , n).
                                      j=1


Then
                                                                     "           n
                                     A :=        max Xk > λ               =           Ak       .
                                                 1≤k≤n
                                                                                k=1
                                                                                  
                                                                              disjoint union
                   
Since λP (Ak ) ≤       Ak
                            Xk dP , we have

                                                   
                                                   n                      
                                                                          n
(4)                               λP (A) = λ             P (Ak ) ≤              E(χAk Xk ).
                                                   k=1                    k=1


Therefore

                                     
                                     n
               E(Xn+ ) ≥                   E(Xn+ χAk )
                                     k=1
                                     n
                                 =         E(E(Xn+ χAk | X1 , . . . , Xk ))
                                     k=1
                                     n
                                 =         E(χAk E(Xn+ | X1 , . . . , Xk ))
                                     k=1
                                     n
                                 ≥         E(χAk E(Xn | X1 , . . . , Xk ))
                                     k=1
                                     n
                                 ≥         E(χAk Xk )       by the submartingale property
                                     k=1
                                 ≥ λP (A)         by (4).

  2. Notice next that the proof above in fact demonstrates
                                                              
                            λP       max Xk > λ           ≤                                Xn+ dP.
                                     1≤k≤n                    {max1≤k≤n Xk >λ}

Apply this to the submartingale |Xk |:
                                                                  
(5)                                         λP (X > λ) ≤                        Y dP,
                                                                  {X>λ}
                                                            127
for X := max1≤k≤n |Xk |, Y := |Xn |. Now take some 1 < p < ∞. Then
                               ∞
                E(|X| ) = −
                       p
                                    λp dP (λ) for P (λ) := P (X > λ)
                              0∞
                          =p       λp−1 P (λ) dλ
                               0
                              ∞                       
                                           1
                          ≤p       λp−1             Y dP dλ by (5)
                               0           λ {X>λ}
                                               
                                        X
                          =p     Y         λp−2 dλ dP
                                        Ω            0
                                            
                                      p
                                 =                   Y X p−1 dP
                                     p−1      Ω
                                                                 1/p                1−1/p
                                    p
                                 ≤                       p
                                                      Y dP                   X p dP           .
                                   p−1            Ω                      Ω

                                                                                                    
     Appendix C: Proof of continuity of indeﬁnite Itô integral (from §C in Chapter
4)
Proof. We will assume assertion (i) of the Theorem in §C of Chapter 4, which states that
the indeﬁnite integral I(·) is a martingale.
   There exist step processes Gn ∈ L2 (0, T ), such that
                                                   
                                                 T
                                       E             (Gn − G)2 dt       → 0.
                                             0

                   t
Write I n (t) :=   0
                        Gn dW , for 0 ≤ t ≤ T . If Gn (s) ≡ Gnk for tnk ≤ s < tnk+1 , then

                               
                               k−1
                        n
                    I (t) =          Gni (W (tni+1 ) − W (tni )) + Gnk (W (t) − W (tnk ))
                               i=0

for tnk ≤ t < tnk+1 . Therefore I n (·) has continuous sample paths a.s., since Brownian
motion does. Since I n (·) is a martingale, it follows that |I n − I m |2 is a submartingale.
The martingale inequality now implies

             P      sup |I n (t) − I m (t)| > ε              =P     sup |I n (t) − I m (t)|2 > ε2
                   0≤t≤T                                           0≤t≤T
                                                                1
                                                             ≤ 2 E(|I n (T ) − I m (T )|2 )
                                                               ε                          
                                                                         T
                                                                1
                                                             = 2E          |Gn − Gm |2 dt .
                                                               ε       0
                                                             128
Choose ε = 21k . Then there exists nk such that
                                                                                                  
                                                                        T
                                      1
           P    sup |I (t) − I (t)| > k
                        n           m
                                                        ≤2 E 2k
                                                                              |G (t) − G (t)| dt
                                                                                n           m   2
               0≤t≤T                 2                                    0
                                                             1
                                                        ≤            for m, n ≥ nk .
                                                             k2
We may assume nk+1 ≥ nk ≥ nk−1 ≥ . . . , and nk → ∞. Let
                                                                                   "
                                                                                1
                            Ak :=        sup |I   nk
                                                       (t) − I    nk+1
                                                                         (t)| > k       .
                                        0≤t≤T                                  2

Then
                                                              1
                                                P (Ak ) ≤        .
                                                              k2
Thus by the Borel–Cantelli Lemma, P (Ak i.o.) = 0; which is to say, for almost all ω

                                                              1
                 sup |I nk (t, ω) − I nk+1 (t, ω)| ≤                     provided k ≥ k0 (ω).
                0≤t≤T                                         2k

Hence I nk (·, ω) converges uniformly on [0, T ] for almost every ω, and therefore J(t, ω) :=
limk→∞ I nk (t, ω) is continuous for amost every ω. As I n (t) → I(t) in L2 (Ω) for all 0 ≤
t ≤ T , we deduce as well that J(t) = I(t) amost every for all 0 ≤ t ≤ T . In other words,
J(·) is a version of I(·). Since for almost every ω, J(·, ω) is the uniform limit of continuous
functions, J(·) has continuous sample paths a.s.                                             




                                                       129
                                               EXERCISES

(1) Show, using the formal manipulations for Itô’s formula discussed in Chapter 1, that
                                                                t
                                           Y (t) := eW (t)− 2

    solves the stochastic diﬀerential equation
                                            
                                                dY = Y dW,
                                                Y (0) = 1.

    (Hint: If X(t) := W (t) − 2t , then dX = − dt
                                               2 + dW .)

(2) Show that
                                                                    2
                                                     σW (t)+ µ− σ2      t
                                  P (t) = p0 e                              ,

    solves                            
                                          dP = µP dt + σP dW,
                                          P (0) = p0 .

(3) Let Ω be any set and A any collection of subsets of Ω. Show that there exists a
    unique smallest σ-algebra U of subsets of Ω containing A. We call U the σ-algebra
    generated by A.
    (Hint: Take the intersection of all the σ-algebras containing A.)
               k
(4) Let X = i=1 ai χAi be a simple random variable, where the real numbers ai are
    distinct, the events Ai are pairwise disjoint, and Ω = ∪ki=1 Ai . Let U(X) be the
    σ-algebra generated by X.
       (i) Describe precisely which sets are in U(X).
       (ii) Suppose the random variable Y is U(X)-measurable. Show that Y is constant
    on each set Ai .
       (iii) Show that therefore Y can be written as a function of X.

(5) Verify:
                 ∞                                           ∞
                                      √              1                    (x−m)2
                      −x2
                      e       dx =        π,     √                  xe−     2σ 2   dx = m,
                −∞                                   2πσ 2   −∞
                                       ∞
                              1                               (x−m)2
                          √                    (x − m)2 e−      2σ 2    dx = σ 2 .
                              2πσ 2       −∞


(6) (i) Suppose A and B are independent events in some probability space. Show that
    Ac and B are independent. Likewise, show that Ac and B c are independent.
                                     130
        (ii) Suppose that A1 , A2 , . . . , Am are disjoint events, each of positive probability,
     such that Ω = ∪m j=1 Aj . Prove Bayes’ formula:

                                P (B | Ak )P (Ak )
                 P (Ak | B) = m                           (k = 1, . . . , m),
                               j=1 P (B | Aj )P (Aj )

     provided P (B) > 0.
 (7) During the Fall, 1999 semester 105 women applied to UC Sunnydale, of whom 76
     were accepted, and 400 men applied, of whom 230 were accepted.
        During the Spring, 2000 semester, 300 women applied, of whom 100 were ac-
     cepted, and 112 men applied, of whom 21 were accepted.
        Calculate numerically
     a. the probability of a female applicant being accepted during the fall,
     b. the probability of a male applicant being accepted during the fall,
     c. the probability of a female applicant being accepted during the spring,
     d. the probability of a male applicant being accepted during the spring.
        Consider now the total applicant pool for both semesters together, and calculate
     e. the probability of a female applicant being accepted,
     f. the probability of a male applicant being accepted.
        Are the University’s admission policies biased towards females? or males?
 (8) Let X be a real–valued, N (0, 1) random variable, and set Y := X 2 . Calculate the
     density g of the distribution function for Y .
                                                        a
     (Hint: You must ﬁnd g so that P (−∞ < Y ≤ a) = −∞ g dy for all a.)

 (9) Take Ω = [0, 1] × [0, 1], with U the Borel sets and P Lebesgue measure. Let
     g : [0, 1] → R be a continuous function.
        Deﬁne the random variables

               X1 (ω) := g(x1 ), X2 (ω) := g(x2 )     for ω = (x1 , x2 ) ∈ Ω.

     Show that X1 and X2 are independent and identically distributed.
(10) (i) Let (Ω, U, P ) be a probability space and A1 ⊆ A2 ⊆ · · · ⊆ An ⊆ . . . be events.
     Show that                    ∞
                                         
                              P         An   = lim P (Am ).
                                                m→∞
                                  n=1

     (Hint: Look at the disjoint events Bn := An+1 − An .)
       (ii) Likewise, show that if A1 ⊇ A2 ⊇ · · · ⊇ An ⊇ . . . , then
                              ∞       
                                
                            P       An = lim P (Am ).
                                                m→∞
                                  n=1
                                             131
(11) Let f : [0, 1] → R be continuous and deﬁne the Bernstein polynomial

                                   
                                   n
                                                 k      n k
                       bn (x) :=         f                x (1 − x)n−k .
                                                 n      k
                                   k=0


     Prove that bn → f uniformly on [0, 1] as n → ∞, by providing the details for the
     following steps.
         (i) Since f is uniformly continuous, for each 1 > 0 there exists δ(1) > 0 such
     that |f (x) − f (y)| ≤ 1 if |x − y| ≤ δ(1).
         (ii) Given x ∈ [0, 1], take a sequence of independent random variables Xk such
     that P (Xk = 1) = x, P (Xk = 0) = 1 − x. Write Sn = X1 + · · · + Xn . Then
     bn (x) = E(f ( Snn )).
         (iii) Therefore

                                    Sn
          |bn (x) − f (x)| ≤ E(|f ( ) − f (x)|)
                                   n                
                                    Sn                       Sn
                           =    |f ( ) − f (x)| dP +     |f ( ) − f (x)| dP,
                              A      n                Ac     n

     for A = {ω ∈ Ω | | Snn − x| ≤ δ(1)}.
        (iv) Then show

                                          2M     Sn     2M
               |bn (x) − f (x)| ≤ 1 +        2
                                               V( )=1+        V (X1 ),
                                         δ(1)    n     nδ(1)2

     for M = max |f |. Conclude that bn → f uniformly.

(12) Let X and Y be independent random variables, and suppose that fX and fY are
     the density functions for X, Y . Show that the density function for X + Y is
                                          ∞
                         fX+Y (z) =                  fX (z − y)fY (y) dy.
                                             −∞


     (Hint: If g : R → R, we have
                                     ∞ ∞
                 E(g(X + Y )) =                        fX,Y (x, y)g(x + y) dxdy,
                                     −∞          −∞


     where fX,Y is the joint density function of X, Y .)

(13) Let X and Y be two independent positive random variables, each with density
                                             
                                                 e−x     if x ≥ 0
                               f (x) =
                                                 0    if x < 0.
                                                  132
       Find the density of X + Y .

  (14) Show that
                            1 1              1
                                                           x1 + . . . xn                          1
                    lim                 ···           f(                 ) dx1 dx2 . . . dxn = f ( )
                   n→∞      0       0             0            n                                  2

       for each continuous function f .
       (Hint: P (| x1 +...x
                       n
                            n
                              − 12 | > 1) ≤ 412 V ( x1 +...x
                                                        n
                                                             n
                                                               ) = 12412 n .)

  (15) Prove that
         (i) E(E(X | V)) = E(X).
         (ii) E(X) = E(X | W), where W = {∅, Ω} is the trivial σ-algebra.                              

  (16) Let X, Y be two real–valued random variables and suppose their joint distribution
       function has the density f (x, y) . Show that

                                                  E(X|Y ) = Φ(Y ) a.s.

       for                                                   ∞
                                                                   xf (x, y) dx
                                              Φ(y) = −∞
                                                       ∞                           .
                                                               −∞
                                                                    f (x, y) dx

       (Hints: Φ(Y ) is a function of Y and so is U(Y )–measurable. Therefore we must
       show that
                                 
(∗)                       X dP =      Φ(Y ) dP for all A ∈ U(Y ).
                                A                     A


             Now A = Y −1 (B) for some Borel subset of R. So the left hand side of (∗) is
                                                                       ∞
(∗∗)                       X dP =                 χB (Y )X dP =                    xf (x, y) dydx.
                       A                      Ω                           −∞   B


       The right hand side of (∗) is
                                                            ∞
                                    Φ(Y ) dP =                          Φ(y)f (x, y) dydx,
                                A                            −∞     B


       which equals the right hand side of (∗∗). Fill in the details.)
                                                                                       
  (17) A smooth function Φ : R → R is called convex if Φ (x) ≥ 0 for all x ∈ R.
         (i) Show that if Φ is convex, then

                           Φ(y) ≥ Φ(x) + Φ (x)(y − x) for all x, y ∈ R.
                                               133
     (ii) Show that

                           x+y    1      1
                      Φ(       ) ≤ Φ(x) + Φ(y)       for all x, y ∈ R.
                            2     2      2
     (iii) A smooth function Φ : Rn → R is called convex if the matrix ((Φxi xj )) is
                                                          n
     nonnegative deﬁnite for all x ∈ Rn . (This means that i,j=1 Φxi xj ξi ξj ≥ 0 for all
     ξ ∈ Rn .) Prove

                                                     x+y    1      1
           Φ(y) ≥ Φ(x) + DΦ(x) · (y − x) and Φ(          ) ≤ Φ(x) + Φ(y)
                                                      2     2      2
     for all x, y ∈ Rn . (Here “D” denotes the gradient.)
(18) (i) Prove Jensen’s inequality:

                                  Φ(E(X)) ≤ E(Φ(X))

     for a random variable X : Ω → R, where Φ is convex. (Hint: Use assertion (iii)
     from the previous problem.)
     (ii) Prove the conditional Jensen’s inequality:

                                Φ(E(X|V)) ≤ E(Φ(X)|V).


(19) Let W (·) be a one-dimensional Brownian motion. Show

                                                 (2k)!tk
                                 E(W 2k (t)) =           .
                                                  2k k!

(20) Show that if W(·) is an n-dimensional Brownian motion, then so are
       (i) W(t + s) − W(s) for all s ≥ 0,
       (ii) cW(t/c2 ) for all c > 0 (“Brownian scaling”).
(21) Let W (·) be a one-dimensional Brownian motion, and deﬁne
                                     
                                       tW ( 1t ) for t > 0
                           W̄ (t) :=
                                       0         for t = 0.

     Show that W̄ (t)−W̄ (s) is N (0, t−s) for times 0 ≤ s ≤ t. (W̄ (·) also has independent
     increments and so is a one-dimensional Brownian motion. You do not need to show
     this.)
                      t
(22) Deﬁne X(t) := 0 W (s) ds, where W (·) is a one-dimensional Brownian motion.
     Show that
                                         t3
                           E(X 2 (t)) =        for each t > 0.
                                         3
                                           134
  (23) Deﬁne X(t) as in the previous problem. Show that
                                                   λ2 t3
                            E(eλX(t) ) = e 6                 for each t > 0.

       (Hint: X(t) is a Gaussian random variable, the variance of which we know from
       the previous homework problem.)
  (24) Deﬁne U (t) := e−t W (e2t ), where W (·) is a one-dimensional Brownian motion.
       Show that

                    E(U (t)U (s)) = e−|t−s|                for all − ∞ < s, t < ∞.


  (25) Let W (·) be a one-dimensional Brownian motion. Show that

                                   W (m)
                                   lim   =0                 almost surely.
                               m→∞  m
                                                      (m)
       (Hint: Fix 1 > 0 and deﬁne the event Am := {| Wm   | ≥ 1}. Then Am = {|X| ≥
       √                                           W (m)
         m1} for the N (0, 1) random variable X = √m . Apply the Borel–Cantelli
       Lemma.)
  (26) (i) Let 0 < γ ≤ 1. Show that if f : [0, T ] → Rn is uniformly Hölder continuous with
       exponent γ, it is also is uniformly Hölder continuous with each exponent 0 < δ < γ.
       (ii) Show that f (t) = tγ is uniformly Hölder continuous with exponent γ on the
       interval [0, 1].
  (27) Let 0 < γ < 12 . These notes show that if W (·) is a one–dimensional Brownian
       motion, then for almost every ω there exists a constant K, depending on ω, such
       that

(∗)               |W (t, ω) − W (s, ω)| ≤ K|t − s|γ               for all 0 ≤ s, t ≤ 1.

       Show that there does not exist a constant K such that (∗) holds for almost all ω.

  (28) Prove that if G, H ∈ L2 (0, T ), then
                                                                          
                               T              T                        T
                     E             G dW           H dW         =E          GH dt .
                           0              0                           0


       (Hint: 2ab = (a + b)2 − a2 − b2 .)
  (29) Let (Ω, U, P ) be a probability space, and take F(·) to be a ﬁltration of σ–algebras.
       Assume X be an integrable random variable, and deﬁne X(t) := E(X|F(t)) for
       times t ≥ 0.
                                            135
        Show that X(·) is a martingale.
(30) Show directly that I(t) := W 2 (t) − t is a martingale.
     (Hint: W 2 (t) = (W (t) − W (s))2 − W 2 (s) + 2W (t)W (s). Take the conditional
     expectation with respect to W(s), the history of W (·), and then condition with
     respect to the history of I(·).)
(31) Suppose X(·) is a real-valued martingale and Φ : R → R is convex. Assume also
     E(|Φ(X(t))|) < ∞ for all t ≥ 0. Show that

                                   Φ(X(·)) is a submartingale.

     (Hint: Use the conditional Jensen’s inequality.)
                                                                  t
(32) Use the Itô chain rule to show that Y (t) := e 2 cos(W (t)) is a martingale.
(33) Let W(·) = (W 1 , . . . , W n ) be an n-dimensional Brownian motion, and write
     Y (t) := |W(t)|2 − nt for times t ≥ 0. Show that Y (·) is a martingale.
        (Hint: Compute dY .)
(34) Show that
                           T                                      T
                                         1
                                   W dW = W 3 (T ) −
                                        2
                                                                          W dt
                              0          3                            0

     and                  T                                       T
                                        1           3
                                  W dW = W 4 (T ) −
                                    3
                                                                          W 2 dt.
                          0             4           2                 0

(35) Recall from the notes that
                                                  t         t
                                        Y := e 0 g dW − 2 0 g ds
                                                         1        2




     satisﬁes
                                                 dY = gY dW.

     Use this to prove                      T               T
                                                         1        2
                                    E(e 0 g dW ) = e 2 0 g ds .

(36) Let u = u(x, t) be a smooth solution of the backwards diﬀusion equation

                                            ∂u 1 ∂ 2 u
                                               +       = 0,
                                            ∂t   2 ∂x2
     and suppose W (·) is a one-dimensional Brownian motion.
       Show that for each time t > 0:

                                        E(u(W (t), t)) = u(0, 0).
                                                 136
(37) Calculate E(B 2 (t)) for the Brownian bridge B(·), and show in particular that
     E(B 2 (t)) → 0 as t → 1− .
                                                                              2
(38) Let X solve the Langevin equation, and suppose that X0 is an N (0, σ2b ) random
     variable. Show that
                                                 σ 2 −b|t−s|
                             E(X(s)X(t)) =          e        .
                                                 2b

(39) (i) Consider the ODE        
                                     ẋ = x2     (t > 0)
                                     x(0) = x0 .
     Show that if x0 > 0, the solution “blows up to inﬁnity” in ﬁnite time.
     (ii) Next, look at the ODE
                                         1
                                   ẋ = x 2 (t > 0)
                                     x(0) = 0.
     Show that this problem has inﬁnitely many solutions.
     (Hint: x ≡ 0 is a solution. Find also a solution which is positive for times t > 0,
     and then combine these solutions to ﬁnd ones which are zero for some time and
     then become positive.)
(40) (i) Use the substituion X = u(W ) to solve the SDE
                           
                              dX = − 12 e−2X dt + e−X dW
                              X(0) = x0 .

     (ii) Show that the solution blows up at a ﬁnite, random time.
(41) Solve the SDE dX = −Xdt + e−t dW .
(42) Let W = (W 1 , W 2 , . . . , W n ) be an n-dimensional Brownian motion and write
                                              n                12
                                              
                             R := |W| =              (W i )2          .
                                               i=1

     Show that R solves the stochastic Bessel equation
                                   
                                   n
                                     Wi                 n−1
                            dR =             dW i +         dt.
                                   i=1
                                         R               2R

(43) (i) Show that X = (cos(W ), sin(W )) solves the SDE system
                           
                             dX 1 = − 12 X 1 dt − X 2 dW
                               dX 2 = − 12 X 2 dt + X 1 dW
                                          137
     (ii) Show also that if X = (X 1 , X 2 ) is any other solution, then |X| is constant in
     time.
(44) Solve the system               
                                        dX 1 = dt + dW 1
                                        dX 2 = X 1 dW 2 ,
     where W = (W 1 , W 2 ) is a Brownian motion.
(45) Solve                      
                                    dX 1 = X 2 dt + dW 1
                                    dX 2 = X 1 dt + dW 2 .

(46) Solve               
                             dX = 12 σ  (X)σ(X)dt + σ(X)dW
                             X(0) = 0
     where W is a one–dimensional Brownian motion and σ is a smooth, positive func-
     tion.
                         x dy
     (Hint: Let f (x) := 0 σ(y) and set g := f −1 , the inverse function of f . Show
     X := g(W ).)
(47) Let f be a positive, smooth function. Use the Feynman-Kac formula to show that
                                                        t
                          M (t) := f (W(t))e− 2 0 ∆f (W(s)) ds
                                                    1




     is a martingale.
(48) Let τ be the ﬁrst time a one–dimensional Brownian motion hits the half-open
     interval (a, b]. Show τ is a stopping time.
(49) Let W denote an n–dimensional Brownian motion, for n ≥ 3. Write X = W + x0 ,
     where the point x0 lies in the region U = {0 < R1 < |x| < R2 } Calculate explicitly
     the probability that X will hit the outer sphere {|x| = R2 } before hitting the inner
     sphere {|x| = R1 }.
        (Hint: Check that
                                               1
                                    Φ(x) =
                                            |x|n−2
     satisﬁes ∆Φ = 0 for x = 0. Modify Φ to build a function u which equals 0 on the
     inner sphere and 1 on the outer sphere.)




                                              138
                                            References
[A]     L. Arnold, Stochastic Diﬀerential Equations: Theory and Applications, Wiley, 1974.
[B-R]   M. Baxter and A. Rennie, Financial Calculus: An Introduction to Derivative Pricing, Cambridge
        U. Press, 1996.
[B]     L. Breiman, Probability, Addison–Wesley, 1968.
[Br]    P. Bremaud, An Introduction to Probabilistic Modeling, Springer, 1988.
[C]     K. L. Chung, Elementary Probability Theory with Stochastic Processes, Springer, 1975.
[D]     M. H. A. Davis, Linear Estimation and Stochastic Control, Chapman and Hall.
[F]     A. Friedman, Stochastic Diﬀerential Equations and Applications, Vol. 1 and 2, Academic Press.
[Fr]    M. Freidlin, Functional Integration and Partial Diﬀerential Equations, Princeton U. Press, 1985.
[G]     C. W. Gardiner, Handbook of Stochastic Methods for Physics, Chemistry, and the Natural Sci-
        ences, Springer, 1983.
[G-S]   I. I. Gihman and A. V. Skorohod, Stochastic Diﬀerential Equations, Springer, 1972.
[G]     D. Gillespie, The mathematics of Brownian motion and Johnson noise, American J. Physics 64
        (1996), 225–240.
[H]     D. J. Higham, An algorithmic introduction to numerical simulation of stochastic diﬀerential
        equations, SIAM Review 43 (2001), 525–546.
[Hu]    J. C. Hull, Options, Futures and Other Derivatives (4th ed), Prentice Hall, 1999.
[K]     N. V. Krylov, Introduction to the Theory of Diﬀusion Processes, American Math Society, 1995.
[L1]    J. Lamperti, Probability, Benjamin.
[L2]    J. Lamperti, A simple construction of certain diﬀusion processes, J. Math. Kyôto (1964), 161–
        170.
[Ml]    A. G. Malliaris, Itô’s calculus in ﬁnancial decision making, SIAM Review 25 (1983), 481–496.
[M]     D. Mermin, Stirling’s formula!, American J. Physics 52 (1984), 362–365.
[McK] H. McKean, Stochastic Integrals, Academic Press, 1969.
[N]     E. Nelson, Dynamical Theories of Brownian Motion, Princeton University Press, 1967.
[O]     B. K. Oksendal, Stochastic Diﬀerential Equations: An Introduction with Applications, 4th ed.,
        Springer, 1995.
[P-W-Z] R. Paley, N. Wiener, and A. Zygmund, Notes on random functions, Math. Z. 37 (1959), 647–668.
[P]     M. Pinsky, Introduction to Fourier Analysis and Wavelets, Brooks/Cole, 2002.
[S]     D. Stroock, Probability Theory: An Analytic View, Cambridge U. Press, 1993.
[S1]    H. Sussmann, An interpretation of stochastic diﬀerential equations as ordinary diﬀerential equa-
        tions which depend on the sample point., Bulletin AMS 83 (1977), 296–298.
[S2]    H. Sussmann, On the gap between deterministic and stochastic ordinary diﬀerential equations,
        Ann. Probability 6 (1978), 19–41.




                                                 139



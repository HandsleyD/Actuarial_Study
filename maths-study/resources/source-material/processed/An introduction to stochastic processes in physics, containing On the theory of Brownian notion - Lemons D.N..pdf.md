---
normalized_id: shared-pdf-reference-an-introduction-to-stochastic-processes-in-physics-containing-on-the-theory-of-brownian-notion-lemons-d-n
exam_code: SHARED
material_scope: an introduction to stochastic processes in physics, containing on the theory of brownian notion - lemons d.n..pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/An introduction to stochastic processes in physics, containing On the theory of Brownian notion - Lemons D.N..pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-an-introduction-to-stochastic-processes-in-physics-containing-on-the-theory-of-brownian-notion-lemons-d-n

An Introduction to Stochastic
Processes in Physics
An Introduction to
Stochastic Processes
in Physics
Containing “On the Theory of Brownian
Motion” by Paul Langevin, translated by
Anthony Gythiel


D O N S. L E M O N S




THE JOHNS HOPKINS UNIVERSITY PRESS

BALTIMORE AND LONDON
Copyright  c 2002 The Johns Hopkins University Press
All rights reserved. Published 2002
Printed in the United States of America on acid-free paper
987654321

The Johns Hopkins University Press
2715 North Charles Street
Baltimore, Maryland 21218-4363
www.press.jhu.edu
Library of Congress Cataloging-in-Publication Data
Lemons, Don S. (Don Stephen), 1949–
  An introduction to stochastic processes in physics / by Don S. Lemons
  p. cm.
  Includes bibliographical references and index.
  ISBN 0-8018-6866-1 (alk. paper) – ISBN 0-8018-6867-X (pbk. : alk. paper)
  1. Stochastic processes. 2. Mathematical physics. I. Langevin, Paul, 1872–1946. II. Title.
QC20.7.S8 L45 2001
530.15 923–dc21        2001046459

A catalog record for this book is available from the British Library
For Allison, Nathan, and Micah
    Contents

Preface and Acknowledgments                                             xi

Chapter 1 – Random Variables                                            1
  1.1 Random and Sure Variables                                         1
  1.2 Assigning Probabilities                                           2
  1.3 The Meaning of Independence                                       4
  Problems: 1.1. Coin Flipping, 1.2. Independent Failure Modes          5

Chapter 2 – Expected Values                                              7
  2.1 Moments                                                            7
  2.2 Mean Sum Theorem                                                   9
  2.3 Variance Sum Theorem                                              10
  2.4 Combining Measurements                                            12
  Problems: 2.1. Dice Parameters, 2.2. Perfect Linear Correlation,
       2.3. Resistors in Series, 2.4. Density Fluctuations              14

Chapter 3 – Random Steps                                                17
  3.1 Brownian Motion Described                                         17
  3.2 Brownian Motion Modeled                                           18
  3.3 Critique and Prospect                                             19
  Problems: 3.1. Two-Dimensional Random Walk, 3.2. Random Walk
       with Hesitation, 3.3. Multistep Walk, 3.4. Autocorrelation,
       3.5. Frequency of Heads                                          20

Chapter 4 – Continuous Random Variables                                 23
  4.1 Probability Densities                                             23
  4.2 Uniform, Normal, and Cauchy Densities                             24
  4.3 Moment-Generating Functions                                       27
  Problems: 4.1. Single-Slit Diffraction, 4.2. Moments of a Normal,
       4.3. Exponential Random Variable, 4.4. Poisson Random Variable   29

Chapter 5 – Normal Variable Theorems                                    33
  5.1 Normal Linear Transform Theorem                                   33
  5.2 Normal Sum Theorem                                                34
  5.3 Jointly Normal Variables                                          35
viii   CONTENTS

  5.4 Central Limit Theorem                                                  36
  Problems: 5.1. Uniform Linear Transform, 5.2. Adding Uniform
       Variables, 5.3. Dependent Normals                                     39

Chapter 6 – Einstein’s Brownian Motion                                       41
  6.1 Sure Processes                                                         41
  6.2 Wiener Process                                                         43
  6.3 Brownian Motion Revisited                                              45
  6.4 Monte Carlo Simulation                                                 46
  6.5 Diffusion Equation                                                     48
  Problems: 6.1. Autocorrelated Process, 6.2. Concentration Pulse,
       6.3. Brownian Motion with Drift, 6.4. Brownian Motion in a
       Plane                                                                 49

Chapter 7 – Ornstein-Uhlenbeck Processes                                     53
  7.1 Langevin Equation                                                      53
  7.2 Solving the Langevin Equation                                          54
  7.3 Simulating the O-U Process                                             57
  7.4 Fluctuation-Dissipation Theorem                                        59
  7.5 Johnson Noise                                                          60
  Problems: 7.1. Terminal Speed, 7.2. RL Circuit                             62

Chapter 8 – Langevin’s Brownian Motion                                       63
  8.1 Integrating the O-U Process                                            63
  8.2 Simulating Langevin’s Brownian Motion                                  66
  8.3 Smoluchowski Approximation                                             68
  8.4 Example: Brownian Projectile                                           69
  Problems: 8.1. Derivation, 8.2. X-V Correlation, 8.3. Range Variation      72

Chapter 9 – Other Physical Processes                                         75
  9.1 Stochastic Damped Harmonic Oscillator                                  75
  9.2 Stochastic Cyclotron Motion                                            80
  Problems: 9.1. Smoluchowski Oscillator, 9.2. Critical Damping,
       9.3. Oscillator Energy, 9.4. O-U Process Limit, 9.5. Statistical
       Independence                                                          83

Chapter 10 – Fluctuations without Dissipation                                85
  10.1 Effusion                                                              85
  10.2 Elastic Scattering                                                    88
  Problems: 10.1. Two-Level Atoms, 10.2. Cross-Field Diffusion, 10.3. Mean
       Square Displacement                                                   94
                                                   CONTENTS    ix

Appendix A: “On the Theory of Brownian Motion,” by Paul
  Langevin, translated by Anthony Gythiel                     97
Appendix B: Kinetic Equations                                 101
Answers to Problems                                           103
References                                                    107
Index                                                         109
    Preface and Acknowledgments

Physicists have abandoned determinism as a fundamental description of real-
ity. The most precise physical laws we have are quantum mechanical, and the
principle of quantum uncertainty limits our ability to predict, with arbitrary
precision, the future state of even the simplest imaginable system. However,
scientists began developing probabilistic, that is, stochastic, models of natu-
ral phenomena long before quantum mechanics was discovered in the 1920s.
Classical uncertainty preceded quantum uncertainty because, unlike the latter,
the former is rooted in easily recognized human conditions. We are too small
and the universe too large and too interrelated for thoroughly deterministic
thinking.
   For whatever reason—fundamental physical indeterminism, human finitude,
or both—there is much we don’t know. And what we do know is tinged with
uncertainty. Baseballs and hydrogen atoms behave, to a greater or lesser degree,
unpredictably. Uncertainties attend their initial conditions and their dynamical
evolution. This also is true of every artificial device, natural system, and physics
experiment.
   Nevertheless, physics and engineering curriculums routinely invoke precise
initial conditions and the existence of deterministic physical laws that turn these
conditions into equally precise predictions. Students spend many hours in in-
troductory courses solving Newton’s laws of motion for the time evolution of
projectiles, oscillators, circuits, and charged particles before they encounter
probabilistic concepts in their study of quantum phenomena. Of course, deter-
ministic models are useful, and, possibly, the double presumption of physical
determinism and superhuman knowledge simplifies the learning process. But
uncertainties are always there. Too often these uncertainties are ignored and
their study delayed or omitted altogether.
   An Introduction to Stochastic Processes in Physics revisits elementary and
foundational problems in classical physics and reformulates them in the lan-
guage of random variables. Well-characterized random variables quantify un-
certainty and tell us what can be known of the unknown. A random variable
is defined by the variety of numbers it can assume and the probability with
which each number is assumed. The number of dots showing face up on a
die is a random variable. A die can assume an integer value 1 through 6, and,
if unbiased and honestly rolled, it is reasonable to suppose that any particular
side will come up one time out of six in the long run, that is, with a probability
of 1/6.
xii PREFACE AND ACKNOWLEDGMENTS

   This work builds directly upon early twentieth-century explanations of the
“peculiar character in the motions of the particles of pollen in water,” as de-
scribed in the early nineteenth century by the British cleric and biologist Robert
Brown. Paul Langevin, in 1908, was the first to apply Newton’s second law to
a “Brownian particle,” on which the total force included a random component.
Albert Einstein had, three years earlier than Langevin, quantified Brownian mo-
tion with different methods, but we adopt Langevin’s approach because it builds
most directly on Newtonian dynamics and on concepts familiar from elementary
physics. Indeed, Langevin claimed his method was “infinitely more simple”
than Einstein’s. In 1943 Subrahmanyan Chandrasekhar was able to solve a
number of important dynamical problems in terms of probabilistically defined
random variables that evolved according to Langevin’s version of F = ma.
However, his famous review article, “Stochastic Problems in Physics and As-
tronomy” (Chandrasekhar 1943) is too advanced for students approaching the
subject for the first time.
   This book is designed for those students. The theory is developed in steps,
new methods are tried on old problems, and the range of applications extends
only to the dynamics of those systems that, in the deterministic limit, are de-
scribed by linear differential equations. A minimal set of required mathe-
matical concepts is developed: statistical independence, expected values, the
algebra of normal variables, the central limit theorem, and Wiener and Ornstein-
Uhlenbeck processes. Problems append each chapter. I wanted the book to be
one I could give my own students and say, “Here, study this book. Then we
will do some interesting research.”
   Writing a book is a lonely enterprise. For this reason I am especially grate-
ful to those who aided and supported me throughout the process. Ten years
ago Rick Shanahan introduced me to both the concept of and literature on
stochastic processes and so saved me from foolishly trying to reinvent the field.
Subsequently, I learned much of what I know about stochastic processes from
Daniel Gillespie’s excellent book (Gillespie 1992). Until his recent, untimely
death, Michael Jones of Los Alamos National Laboratory was a valued part-
ner in exploring new applications of stochastic processes. Memory eternal,
Mike! A sabbatical leave from Bethel College allowed me to concentrate on
writing during the 1999–2000 academic year. Brian Albright, Bill Daughton,
Chris Graber, Bob Harrington, Ed Staneck, and Don Quiring made valuable
comments on various parts of the typescript. Willis Overholt helped with the
figures. More general encouragement came from Reuben Hersh, Arnold Wedel,
and Anthony Gythiel. I am grateful for all of these friends.
An Introduction to Stochastic
Processes in Physics
     1
     Random Variables


1.1 Random and Sure Variables
   A quantity that, under given conditions, can assume different values is a
random variable. It matters not whether the random variation is intrinsic and
unavoidable or an artifact of our ignorance. Physicists can sometimes ignore
the randomness of variables. Social scientists seldom have this luxury.
   The total number of “heads” in ten coin flips is a random variable. So also
is the range of a projectile. Fire a rubber ball through a hard plastic tube with a
small quantity of hair spray for propellant. Even when you are careful to keep the
tube at a constant elevation, to inject the same quantity of propellant, and to keep
all conditions constant, the projectile lands at noticeably different places in sev-
eral trials. One can imagine a number of causes of this variation: different initial
orientations of a not-exactly-spherical ball, slightly variable amounts of propel-
lant, and breeziness at the top of the trajectory. In this as well as in similar cases
we distinguish between systematic error and random variation. The former can,
in principle, be understood and quantified and thereby controlled or eliminated.
Truly random sources of variation cannot be associated with determinate phys-
ical causes and are often too small to be directly observed. Yet, unnoticeably
small and unknown random influences can have noticeably large effects.
   A random variable is conceptually distinct from a certain or sure variable. A
sure variable is, by definition, exactly determined by given conditions. Newton
expressed his second law of motion in terms of sure variables. Discussions of
sure variables are necessarily cast in terms of concepts from the ivory tower of
physics: perfect vacuums, frictionless pulleys, point charges, and exact initial
conditions. The distance an object falls from rest, in a perfect vacuum, when
constantly accelerating for a definite period of time is a sure variable.
   Just as it is helpful to distinguish notationally between scalars and vectors, it is
also helpful to distinguish notationally between random and sure variables. As
is customary, we denote random variables by uppercase letters near the end of
the alphabet, for example, V ,W , X ,Y , and Z , while we denote sure variables by
lowercase letters, for example, a, b, c, x, andy. The time evolution of a random
variable is called a random or stochastic process. Thus X (t) denotes a stochastic
process. The time evolution of a sure variable is called a deterministic process
and could be denoted by x(t). Sure variables and deterministic processes are
2   RANDOM VARIABLES

familiar mathematical objects. Yet, in a sense, they are idealizations of random
variables and processes.
   Modeling a physical process with sure instead of random variables involves
an assumption—sometimes an unexamined assumption. How do we know,
for instance, that the time evolution of a moon of Jupiter is a deterministic
process while the time evolution of a small grain of pollen suspended in water
is a random process? What about the phase of a harmonic oscillator or the
charge on a capacitor? Are these sure or random variables? How do we choose
between these two modeling assumptions?
   That all physical variables and processes are essentially random is the more
general of the two viewpoints. After all, a sure variable can be considered
a special kind of random variable—one whose range of random variation is
zero. Thus, we adopt as a working hypothesis that all physical variables and
processes are random ones. The details of a theory of random variables and
processes will tell us under what special conditions sure variables and deter-
ministic processes are good approximations. We develop such a theory in the
chapters that follow.



1.2 Assigning Probabilities
    A random variable X is completely specified by the range of values x it can
assume and the probability P(x) with which each is assumed. That is to say,
the probabilities P(x) that X = x for all possible values of x tell us everything
there is to know about the random variable X . But how do we assign a number
to “the probability that X = x”? There are at least two distinct answers to
this question—two interpretations of the word probability and, consequently,
two interpretations of the phrase random variable. Both interpretations have
been with us since around 1660, when the fundamental laws of mathematical
probability were first discovered (Hacking 1975).
    Consider a coin toss and associate a random variable X with each possible
outcome. For instance, when the coin lands heads up, assign X = 1, and when
the coin lands tails up, X = 0. To determine the probability P(1) of a heads-up
outcome, one could flip the coin many times under identical conditions and form
the ratio of the number of heads to the total number of coin flips. Call that ratio
 f (1). According to the statistical or frequency interpretation of probability,
the ratio f (1) approaches the probability P(1) in the limit of an indefinitely
large number of flips. One virtue of the frequency interpretation is that it
suggests a direct way of measuring or, at least, estimating the probability of a
random outcome. The English statistician J. E. Kerrich so estimated P(1) while
interned in Denmark during World War II (Kerrich 1946). He flipped a coin
10,000 times and found that heads landed uppermost in 5067 “spins.” Therefore,
P(1) ≈ f (1) = 0.5067—at least for Kerrich’s coin and method of flipping.
                                             ASSIGNING PROBABILITIES               3




Figure 1.1. Frequency of heads, f (1), versus number of flips, n. Replotted, from
Kerrich 1946.


    Kerrich’s was not the first heroic frequency measurement. In 1850 the Swiss
astronomer Wolf rolled one white and one red die 20,000 times, kept track
of the results, and determined the frequency of each outcome (Bulmer 1967).
Also, a certain nineteenth-century English biologist Weldon also rolled twelve
dice 26,306 times and recorded the number of 5s and 6s (Fry 1928).
    That actual events can’t be repeated ad infinitum doesn’t invalidate the fre-
quency interpretation of probability any more than the impossibility of a perfect
vacuum invalidates the law of free fall. Both are idealizations that make a claim
about what happens in a series of experiments as an unattainable condition is
more and more closely approached. In particular, the frequency interpretation
claims that fluctuations in f (1) around P(1) become smaller and smaller as the
number of coin flips becomes larger and larger. Because Kerrich’s data, in fact,
has this feature (see figure 1.1), his coin flip can be considered a random event
with its defining probabilities, P(1) and P(0), equal to the limiting values of
 f (1) and f (0).
    An alternative method of determining P(1) is to inspect the coin and, if
you can find no reason why one side should be favored over the other, simply
assert that P(1) = P(0) = 1/2. This method of assigning probabilities is
typical of the so-called degree of belief or inductive interpretation of probability.
According to this view, a probability quantifies the truth-value of a proposition.
In physics we are primarily concerned with propositions of the form X =
x. In assigning an inductive probability P(X = x), or simply P(x), to the
proposition X = x, we make a statement about the degree to which X = x is
believable. Of course, if they are to be useful, inductive probabilities should
not be assigned haphazardly but rather should reflect the available evidence
and change when that evidence changes. In this account probability theory
4   RANDOM VARIABLES

extends deductive logic to cases involving partial implication—thus the name
inductive probability. Observe that inductive probabilities can be assigned to
any outcome, whether repeatable or not.
   The principle of indifference, devised by Pierre Simon Laplace (1749–1827),
is one procedure for assigning inductive probabilities. According to this prin-
ciple, which was invoked above in asserting that P(1) = P(0) = 1/2, one
should assign equal probabilities to different outcomes if there is no reason to
favor one outcome over any other. Thus, given a seemingly unbiased six-sided
die, the inductive probability of any one side coming up is 1/6. The principle
of equal a priori probability, that a dynamical system in equilibrium has an
equal probability of occupying each of its allowed states, is simply Laplace’s
principle of indifference in the context of statistical mechanics. The principle
of maximum entropy is another procedure for assigning inductive probabilities.
While a good method for assigning inductive probabilities isn’t always obvious,
this is more a technical problem to be overcome than a limitation of the concept.
   That the laws of probability are the same under both of these interpretations
explains, in part, why the practice of probabilistic physics is much less contro-
versial than its interpretation, just as the practice of quantum physics is much
less controversial than its interpretation. For this reason one might be tempted
to embrace a mathematical agnosticism and be concerned only with the rules
that probabilities obey and not at all with their meaning. But a scientist or
engineer needs some interpretation of probability, if only to know when and to
what the theory applies.
   The best interpretation of probability is still an open question. But probability
as quantifying a degree of belief seems the most inclusive of the possibilities.
After all, one’s degree of belief could reflect an in-principle indeterminism or
an ignorance born of human finitude or both. Frequency data is not required
for assigning probabilities, but when available it could and should inform one’s
degree of belief. Nevertheless, the particular random variables we study also
make sense when their associated probabilities are interpreted strictly as limits
of frequencies.



1.3 The Meaning of Independence
   Suppose two unbiased dice are rolled. If the fact that one shows a “5” doesn’t
change the probability that the other also shows a “5,” the two outcomes are said
to be statistically independent, or simply independent. When the two outcomes
are independent and the dice unbiased, the probability that both dice will show
a “5” is the product (1/6)(1/6) = 1/36. While statistical independence is the
rule among dicing outcomes, the random variables natural to classical physics
are often statistically dependent. For instance, one usually expects the location
X of a particle to depend in some way upon its velocity V .
                                                               PROBLEMS         5

  Let’s formalize the concept of statistical independence. If realization of
the outcome X = x does not change the probability P(y) that outcome Y =
y obtains and vice-versa, the outcomes X = x and Y = y are statistically
independent and the probability that they occur jointly P(x&y) is the product
P(x)P(y), that is,
                           P(x&y) = P(x)P(y).                          (1.3.1)
   When condition (1.3.1) obtains for all possible realizations x and y, the
random variables X and Y are said to be statistically independent. If, on the
other hand, the realization X = x does change the probability P(y) that Y = y
or vice-versa, then
                             P(x&y) = P(x)P(y)                        (1.3.2)
and the random variables X and Y are statistically dependent.
   The distinction between independent and dependent random variables is cru-
cial. In the next chapter we construct a numerical measure of statistical depen-
dence. And in subsequent chapters we will, on several occasions, exploit special
sets of explicitly independent and dependent random variables.

Problems
  1.1. Coin Flipping. Produce a graph of the frequency of heads f (1) versus
the number of coin flips n. Use data obtained from
  a. flipping a coin 100 times,
  b. pooling your coin flip data with that of others, or
  c. numerically accessing an appropriate random number generator 10,000
     times.
   Do fluctuations in f (1) obtained via method a, b, and c diminish, as do those
in figure 1.1, as more data is obtained?
  1.2 Independent Failure Modes. A system consists of n separate com-
ponents, each one of which fails independently of the others with probability
Pi where i = 1 . . . n. Since each component must either fail or not fail, the
probability that the ith component does not fail is 1 − Pi .
  a. Suppose the components are connected in parallel so that the failure
     of all the components is necessary to cause the system to fail. What
     is the probability the system fails? What is the probability the system
     functions?
  b. Suppose the components are connected in series so that the failure of
     any one component causes the system to fail. What is the probability
     the system fails? (Hint: First, find the probability that all components
     function.)
    2
    Expected Values

2.1 Moments
  The expected value of a random variable X is a function that turns the prob-
abilities P(x) into a sure variable called the mean of X . The mean is the one
number that best characterizes the possible values of a random variable. We
denote the mean of X variously by mean{X } and X  and define it by
                                      
                               X  =     xi P(xi )                     (2.1.1)
                                            i

where the sum is over all possible realizations xi of X . Thus, the mean number
of dots showing on an unbiased die is (1+2+3+4+5+6)/6 = 3.5. The square
of a random variable is also a random variable. If the possible realizations of
X are the numbers 1, 2, 3, 4, 5, and 6, then their squares, 1, 4, 9, 16, 25, and
36, are the possible realizations of X 2 . In fact, any algebraic function f (x)
of a random variable X is also a random variable. The expected value of the
random variable f (X ) is denoted by  f (x) and defined by
                                      
                            f (x) =      f (xi )P(xi ).                 (2.1.2)
                                        i


   The mean X  parameterizes the random variable X , but so also do all the
moments X n  (n = 0, 1, 2, . . .) and moments about the mean (X − X )n .
The operation by which a random variable X is turned into one of its moments
is one way of asking X to reveal its properties, or parameters. Among the
moments about the mean,

                          (x − X )0  = 1
                                           
                                         =     P(x)
                                                      i

                                                = 1                       (2.1.3)

simply recovers the fact that probabilities are normalized. And
                                  
               (X − X )1  =       (x1 − X )P(xi )
                                    i
8   EXPECTED VALUES
                                                           
                               =         xi P(xi ) − X        P(xi )
                                     i                      i

                               = X  − X 1

                               = 0                                        (2.1.4)

follows from normalization (2.1.3) and the definition of the mean (2.1.1).
Higher order moments (with n ≥ 2 ) describe other properties of X . For
instance, the second moment about the mean or the variance of X , denoted by
var{X } and defined by

                           var{X } = (X − X )2 ,                     (2.1.5)

quantifies the variability, or mean squared deviation, of X from its mean X .
The linearity of the expected value operator  (see section 2.2) ensures that
(2.1.5) reduces to

                      var{X } = X 2 − 2X X  + X 2 

                               = X 2  − 2X 2 + X 2

                               = X 2  − X 2 .                         (2.1.6)

The mean and variance
                 √    are sometimes denoted by the Greek letters µ and σ 2 ,
respectively, and σ = σ is called the standard deviation of X . The third
                   2

moment about the mean enters into the definition of skewness,

                                            (X − µ)3 
                         skewness{X } =                 ,                (2.1.7)
                                                σ3

and the fourth moment into the kurtosis,

                                            (X − µ)4 
                          kurtosis{X } =                .                (2.1.8)
                                                σ4

The skewness and kurtosis are dimensionless shape parameters. The former
quantifies the asymmetry of X around its mean, while the latter is a measure of
the degree to which a given variance σ 2 is accompanied by realizations of X
close to (relatively small kurtosis) and far from (large kurtosis) µ ± σ . Highly
peaked and long-tailed probability functions have large kurtosis; broad, squat
ones have small kurtosis. See Problem 2.1, Dice Parameters, for practice in
calculating parameters.
                                                                     MEAN SUM THEOREM             9

2.2 Mean Sum Theorem
  The sum of two random variables is also a random variable. As one might
expect, the probabilities and parameters describing X + Y are combinations of
the probabilities and parameters describing X and Y separately. The expected
value of a sum is defined in terms of the joint probability P(xi &yi ) that both
X = xi and Y = yi , that is, by
                                
                    X + Y  =         (xi + yi )P(xi & y j ).           (2.2.1)
                                       i        j


That
                                                                        
          X + Y  =          xi           P(xi & yi ) +              yj       P(xi & yi )
                          i        j                             j         i
                                                   
                    =         xi P(xi ) +               y j P(y j )
                          i                         j

                    = X  + Y                                                             (2.2.2)

follows from (2.2.1) and the laws of probability. For this reason, the expected
value brackets   can be distributed through each term of a sum. In purely ver-
bal terms: the mean of a sum is the sum of the means. An obvious generalization
of (2.2.2) expressing the complete linearity of the operator   is

                           a X + bY  = aX  + bY ,                                      (2.2.3)

where a and b are arbitrary sure values.
  We will have occasions to consider multiple-term sums of random variables
such as
                          X = X1 + X2 + · · · + Xn                  (2.2.4)
where n is very large or even indefinitely large. For instance, a particle’s
total displacement X in a time interval is the sum of the particle’s successive
displacements X i (with i = 1, 2, . . . n) in successive subintervals. Because the
mean of a sum is the sum of the means,

                        X  = X 1  + X 2  + · · · + X n ,                             (2.2.5)

or, equivalently,
                                               
                                   
                                   n                    
                                                        n
                        mean               Xi       =         mean{X i }.                    (2.2.6)
                                   i=1                  i=1

We call (2.2.5) and (2.2.6) the mean sum theorem.
10   EXPECTED VALUES

2.3 Variance Sum Theorem
   The moments of the product X Y are not so easily expressed in terms of
the separate moments of X and Y . Only in the special case that X and Y are
statistically independent can we make statements similar in form to the mean
sum theorem. In general,
                                    
                         X Y  =                 xi y j P(xi & y j ).      (2.3.1)
                                        i     j


But when X and Y are statistically independent, P(xi & y j ) = P(xi )P(y j ) and
equation (2.3.1) reduces to
                                                       
                       X Y  =             xi P(xi )       y j P(y y ),    (2.3.2)
                                    i                   j


which is equivalent to
                                  X Y  = X Y ,                        (2.3.3)

that is, the mean of a product is the product of the means. Statistical indepen-
dence also ensures that
                              X n Y m  = X n Y m                      (2.3.4)

for any n and m. If it happens that X n Y m  = X n Y m  for some but not all n
and m, then X and Y are not statistically independent.
   When the random variables X and Y are dependent, we can’t count on X Y 
factoring into X Y . The covariance

               cov{X, Y } = (X − X )(Y − Y )
                            = [X Y − X Y − X Y  + X Y ]
                            = X Y  − X Y                              (2.3.5)

and the correlation coefficient

                                         cov{X, Y }
                          cor{X, Y } = √                                    (2.3.6)
                                        var{X } var{Y }

are measures of the statistical dependence of X and Y . The correlation coeffi-
cient establishes a dimensionless scale of dependence and independence such
that −1 ≤ cor{X, Y } ≤ 1. When X and Y are completely correlated, so that
X and Y realize the same values on the same occasions, we say that X = Y .
In this case cov{X, Y } = var{X } = var{Y } and cor{X, Y } = 1. When X and
                                                      VARIANCE SUM THEOREM    11

Y are completely anticorrelated, so that X = −Y , cor{X, Y } = −1. When X
and Y are statistically independent, so that X Y  = X Y , cov{X, Y } = 0
and cor{X, Y } = 0. See Problem 2.2, Perfect Linear Correlation.
  We exploit the concept of covariance in simplifying the expression for the
variance of a sum of two random variables. We call

      var{X +Y } = (X +Y −X +Y )2 

                  = (X −X )2 +(Y −Y )2 +2(X −X )(Y −Y )

                  = (X −X )2 +(Y −Y )2 +2(X Y −X Y )

                  = var{X }+var{Y }+2 cov{X, Y }                          (2.3.7)

the variance sum theorem. It reduces to the variance sum theorem for indepen-
dent addends
                        var{X + Y } = var{X } + var{Y }                  (2.3.8)

only when X and Y are statistically independent. Repeated application of
(2.3.8) to a sum of n statistically independent random variables leads to
                                             
                                   
                                   N                  
                                                      N
                         var             Xi       =         var{X i }.   (2.3.9)
                                   i=1                i=1


Thus, the variance of a sum of independent variables is the sum of their vari-
ances.
  For instance, suppose we wish to express the mean and variance of the area
A of a rectangular plot of land in terms of the mean and variance of its length L
and width W . If L and W are statistically independent, L W  = LW  and
L 2 W 2  = L 2 W 2 . Then

                               mean{A} = L W 

                                                  = LW               (2.3.10)

and

                      var{A} = A2  − A2

                                = L 2 W 2  − L W 2

                                = L 2 W 2  − L2 W 2 .            (2.3.11)

Given that L 2  = var{L} + L2 and W 2  = var{W } + W 2 , equations
12   EXPECTED VALUES

(2.3.10) and (2.3.11) achieve the desired result. For other applications of the
mean and variance sum theorems, see Problem 2.3, Resistors in Series, and
Problem 2.4, Density Fluctuations.


2.4 Combining Measurements
    How do we combine different measurements of the same random quantity?
Suppose, for instance, I use a meter stick to measure the width of the table on
which I write. My procedure produces a realization x1 of a random variable X 1 .
The variable X 1 is random because the table sides are not perfectly parallel,
its ends are not well defined, I must visually interpolate between the smallest
marks on the rule to get the last digit, my eyesight is not so good, nor is my
hand perfectly steady, and the meter stick is not really rigid. Now, suppose I
tilt the table surface and measure its angle of incline to the horizontal, time a
marble rolling across the table width, measure the marble’s radius, and from this
data and the local acceleration of gravity compute the table width. For similar
reasons, this number x2 is also the realization of a random variable X 2 . Finally, I
use a laser interferometer and electronically count fringes as the interferometer
mirror is moved across the table. This procedure results in a number x3 that is
the realization of a third random variable X 3 . Among the three numbers x1 , x2 ,
and x 3 , which is the best measurement of the table width? Assuming I avoid
systematic errors (for example, I don’t use a meter stick whose end has been
cut off), then
                               X 1  = X 2  = X 3                       (2.4.1)
because each procedure measures the same quantity—the table width. How-
ever, the different procedures accumulate random error in different amounts,
and these will be reflected in their different variances. If the interferometer
measurement x3 is the least prone to random error, then var{X 3 } < var{X 1 } and
var{X 3 } < var{X 2 }. In this sense, x3 is the best measurement.
  But is x3 any better than the arithmetical average

                                     1
                              x̄ =     (x1 + x2 + x3 )?                      (2.4.2)
                                     3
Before the mid-eighteenth century, scientists were reluctant to average mea-
surements that were produced in substantially different ways. They feared the
most precise measurement, in this case x3 , would be “contaminated” by those
of lesser precision, in this case x2 and x3 —that “errors would multiply, not
compensate” (Stigler 1986). The issue is easily resolved given the insight that
the average x̄ is a particular realization of the random variable

                                     1
                             X̄ =      (X 1 + X 2 + X 3 ).                   (2.4.3)
                                     3
                                              COMBINING MEASUREMENTS                 13

Now X̄ has a mean,
                             X̄  = X 1  = X 2  = X 3 ,                  (2.4.4)
and a variance,
                  var{ X̄ } = ( X̄ )2  −  X̄ 2
                               1
                            =     [var{X 1 } + var{X 2 } + var{X 3 }].           (2.4.5)
                               9
In deriving the latter we have assumed that X 1 , X 2 , and X 3 are statistically
independent and employed the variance sum theorem for independent addends
(2.3.9). If var{X 3 } < var{ X̄ }, then x3 is a better measurement than x̄, and x3
would be contaminated if averaged together with x1 and x2 . If, on the other
hand, var{ X̄ } < var{X 1 }, var{ X̄ } < var{X 2 }, and var{ X̄ } < var{X 3 }, then the
average x̄ is better than any one of the values from which it is composed. In
this case the errors in x1 , x2 , and x3 compensate for each other in the average
x̄. Either ordering is possible.
    In general, although not always, the more terms included in the average,
the better statistic, or estimator, it becomes. Suppose we devise n different,
independent ways of making the same measurement. The random variable
representing the average measurement is
                              (X 1 + X 2 + · · · + X n )
                            X̄ =                         ,                      (2.4.6)
                                         n
and the variance of the average is
                                              
                                              n
                                                     var{X i }
                                              i=1
                                var{ X̄ } =          .                   (2.4.7)
                                              n2
Because the numerator of the right-hand side of (2.4.7) increases (roughly)
with n and the denominator increases with n 2 , the variance of the average X̄
decreases with increasing n as 1/n. Thus, averaging is generally a good idea.
   Averaging is, in fact, always helpful if all the measurements are made in the
same way. Jacob Bernoulli put it this way in 1731: “For even the most stupid of
men, by some instinct of nature, by himself and without any instruction (which
is a remarkable thing), is convinced that the more observations have been made,
the less danger there is of wandering from one’s goal” (Stigler 1986). Hence,
if all the measurements are made in the same way,
                         var{X 1 } = var{X 2 } = . . . var{X n }                (2.4.8)
and given (2.4.7), the variance of the average is
                                                 var{X 1 }
                                   var{ X̄ } =             .                    (2.4.9)
                                                    n
14   EXPECTED VALUES




                          Figure 2.1. Resistors in series.

Furthermore, the standard deviation of the average is
                                        
                            std{ X̄ } = var{ X̄ }

                                           std{X 1 }
                                       =     √       .                   (2.4.10)
                                               n
Thus, the more terms included in the average, the smaller the standard deviation
of the average. As n becomes indefinitely large, X̄ approaches a random variable
whose variance vanishes, that is, X̄ approaches the sure value  X̄ .
   The standard deviation divided by the mean,
                            std{ X̄ }   1 std{X 1 }
                                      =√            ,                    (2.4.11)
                               X̄      n X 1 
measures the precision of a particular measurement and is called the coefficient
of variation. The smaller the coefficient of variation, the more likely is each
realization of X̄ close to  X̄ . Problem 2.4, Density Fluctuations, applies this
mathematics in another context.

Problems
   2.1. Dice Parameters. An unbiased die realizes each of its values, 1, 2,
3, 4, 5, and 6, with equal probability 1/6. Find the mean, variance, standard
deviation, skewness, and kurtosis of the random variable X so defined.
   2.2. Perfect Linear Correlation. Two random variables X and Y are re-
lated by Y = m X + b. This means that every realization xi of X is related to
                      √ yi = mxi + b where m and b are sure variables. Prove
a realization yi of Y by
that cor{X, Y } = m/ m 2 = sgn{m} where sgn{m} is the sign of m.
   2.3. Resistors in Series. You are given a box of n carbon resistors (see
figure 2.1). On each the manufacturer has color-coded a nominal resistance,
which we understand to be a mean{Ri }, and a dimensionless “tolerance” or
“precision” ti whose definition we take to be
                                √
                                  var{Ri }
                           ti =            × 100%
                                mean{Ri }
where i = 1 . . . n. Assume the resistances Ri are statistically independent
random variables.
                                                                   PROBLEMS         15

  a. Write expressions for the mean, variance, and tolerance of the total
     resistance R of a series combination of n identically defined resistors
     in terms of the mean{Ri } and tolerance ti of one resistor.
  b. Suppose the box contains 10 nominally 5-Ohm resistors, each with a
     20% tolerance. Calculate the mean, variance, and tolerance of the resis-
     tance of their series combination. Is the tolerance of this combination
     less than the tolerance of the separate resistors? It should be.
   2.4. Density Fluctuations. The molecular number density ρ = N /V of
a gas contained in a small open region of volume V within a larger closed
volume V0 fluctuates as the number of molecules N in V changes. To quan-
tify fluctuations in the density ρ, let the larger volume V0 contain exactly N0
molecules (figure 2.2). The number N can be considered a sum of statistically
independent auxiliary “indicator” random variables X i , defined so that X i = 1
when molecule i is within volume V and X i = 0 when it is not. Then,
                                          
                                          No
                                    N=          Xi .
                                          i=1

Assume, as is reasonable, that when the gas is in equilibrium,
                                                   V
                                 P(X i = 1) =
                                                   Vo




Figure 2.2. The number of molecules N within a small open volume V is a random
variable. The total number of molecules N0 within the larger closed volume V0 is a sure
variable.
16    EXPECTED VALUES

and
                                              Vo − V
                               P(X i = 0) =
                                                Vo
for all i.
  a. Compute mean{X i } and var{X i } in terms of the constants Vo , and V .
  b. Determine mean{N }, var{N }, and the coefficient of variation
                             
                               var{N }/ mean{N }

      in terms of No , Vo , and V .
    3
    Random Steps




3.1 Brownian Motion Described
   We are ready to use our knowledge of how random variables add and multiply
to model the simplest of all physical processes—a single particle at rest. If at
one instant a particle occupies a definite position and has zero velocity, it will,
according to Newton’s first law of motion, continue to occupy the same position
as long as no forces act on it. Consider, though, whether this deterministic (and
boring) picture can ever be a precise description of any real object. Even when
great care is taken to isolate the particle, there are always air molecules around
to nudge it one way or the other.
   If the particle is very small (≤ 50 × 10−6 m), the net effect of these nudges
can be observed in an optical microscope. These Brownian motions are so
called after the Scottish naturalist and cleric Robert Brown (1773–1858), who
investigated the phenomenon in 1827. (That Jan IngenHousz [1730–1799)], a
Dutch-born biologist, observed and described Brownian motion even earlier,
in 1785, is just one of many illustrations of Stigler’s Law of Eponymy—which
states that no discovery is named after its original discoverer.) When looking
through a microscope at grains of pollen suspended in water, Brown noticed
that a group of grains always disperses and that individual grains move around
continuously and irregularly. Brown originally thought that he had discovered
the irreducible elements of a vitality common to all life forms. However, upon
systematically observing these irregular motions in pollen from live and dead
plants, in pieces of other parts of plants, in pieces of animal tissue, in fossilized
wood, in ground window glass, various metals, granite, volcanic ash, siliceous
crystals, and even in a fragment of the Sphinx, he gave up that hypothesis.
   We now know that Brownian motion is a consequence of the atomic theory of
matter. When a particle is suspended in any fluid media (air as well as water), the
atoms or molecules composing the fluid hit the particle from different directions
in unequal numbers during any given interval. While the human eye cannot
distinguish the effect of individual molecular impacts, it can observe the net
motion caused by many impacts over a period of time.
18      RANDOM STEPS

3.2 Brownian Motion Modeled
   Let’s model Brownian motion as a sum of independent random displace-
ments. Imagine the Brownian particle starts at the origin x = 0 and is free to
move in either direction along the x-axis. The net effect of many individual
molecular impacts is to displace the particle a random amount X i in each interval
of duration t. Assume each displacement X i realizes one of two possibilities,
X i = +x or X i = −x, with equal probabilities ( 12 ) and that the various X i
are statistically independent. After n such intervals the net displacement X is

                           X = X1 + X2 + · · · + Xn.                      (3.2.1)

This is the random step or random walk model of Brownian motion. According
to the model,
                         X 1  = X 2  = . . . X n  = 0         (3.2.2)
since X i  = (1/2)(+x) + (1/2)(−x) = 0 for each i = 1, 2, . . . n. There-
fore, the mean sum theorem yields

                      X  = X 1  + X 2  + · · · + X n 
                            = 0,                                          (3.2.3)

that is, while any single Brownian particle may drift from its starting point, the
mean of the displacement X  maintains its initial (zero) value. Now,

                   var{X 1 } = var{X 2 } = . . . var{X n } = x 2         (3.2.4)

since

                  var{X i } = X i2  − X i 2
                            = X i2 
                                              
                                1               1
                            =         (+x)2 +     (−x)2
                                2               2
                            = x 2                                        (3.2.5)

for each i = 1, 2, . . . n. For this reason, and because the X i are statistically
independent, the variance sum theorem yields

                                         
                                         n
                              X 2  =         var{X i }
                                         i=1

                                     = nx 2 .                            (3.2.6)
                                               CRITIQUE AND PROSPECT                19




Figure 3.1. Random walk in two dimensions realized by taking alternate steps along the
vertical and horizontal axes and determining the step polarity (left/right and up/down)
with a coin flip.


Since the total duration of the walk is t = nt, equation (3.2.6) is equivalent
to                                       2
                                          x
                               X 2  =       t.                        (3.2.7)
                                          t
This equation expresses the signature property of Brownian motion: the vari-
ance X 2  of the net displacement X is proportional to the time t during which
that displacement is made.
   It is easy to generalize the one-dimensional random walk in several ways.
For instance, figure 3.1 shows the effect of taking alternate displacements in
different perpendicular directions and so creating Brownian motion in a plane.
See also Problem 3.1 Two-Dimensional Random Walk. One can also suppose
that either the probabilities or the step sizes are different in different direc-
tions. See, for instance, Problems 3.2, Random Walk with Hesitation, and 3.3,
Multistep Walk.


3.3 Critique and Prospect
   In spite of its attractions, the random step process is deficient as a physical
model of Brownian motion. One deficiency is that the variance of the total dis-
placement, as described in equation (3.2.7), seems to depend separately upon the
arbitrary magnitudes x and t through the ratio (x 2 /t). Unless (x 2 /t)
is itself a physically meaningful constant, the properties of the total displace-
ment X will depend on the fineness with which it is analyzed into subincrements.
That (x 2 /t) is, indeed, a characteristic constant—equal to twice the diffusion
20     RANDOM STEPS

constant—will, in chapter 6, be shown to follow from the requirement of conti-
nuity, but in the present oversimplified account this claim remains unmotivated.
   Another difficulty with the random step model of Brownian motion is that
it lacks an obvious connection to Newton’s second law. Why shouldn’t the
integrated second law,
                                                 t
                                          1
                       V (t) = V (0) +                   F(t  ) dt ,    (3.3.1)
                                          M      0

                                                 t +t
apply even when the individual impulses ti i       F(t  ) dt composing the total
                     
impulse 0 F(t  ) dt are delivered randomly? In such case we might attempt
           t

to express the right-hand side of (3.3.1) as a sum of N independent, random
impulses per unit mass, each with vanishing mean and a finite variance equal
to, say, v 2 , having units of speed squared. This strategy leads to
                                                    
                                              v 2
                               V 2  =                  t,               (3.3.2)
                                              t

an absurd result because a kinetic energy MV 2 /2 cannot grow without bound.
We shall see that Brownian motion can, in fact, be made consistent with New-
ton’s second law, but first some new concepts are required.


Problems
     3.1. Two-Dimensional Random Walk.
  a. Produce a realization of a two-dimensional random walk with the algo-
     rithm described in the caption of figure 3.1. Use either 30 coin flips or,
     a numerical random number generator with a large (n ≥ 100) number
     of steps n.
  b. Plot X 2 + Y 2 versus n for the realization chosen above.
   3.2. Random Walk with Hesitation. Suppose that in each interval t there
are three equally probable outcomes: particle displaces to the left a distance
x, particle displaces to the right a distance x, or particle hesitates and stays
where it is. Show that the standard deviation
                                              of the net
                                                      √ displacement X after n
time intervals, each of duration t, is X 2  = x 2n/3.
    3.3. Multistep Walk. Let the independent displacements X i of an n-step
random walk be identically distributed so that mean{X 1 } = mean{X 2 } =
. . . mean{X n } = µ and var{X 1 } = var{X 2 } = . . . var{X n } = σ 2 . The net
displacement is given by X = X 1 + X 2 + · · · + X n .
  a. Find mean{X }, var{X }, and X 2  as a function of n.
                                                                PROBLEMS            21

  b. A steady wind blows the Brownian particle, causing its steps to the right
     to be larger than those to the left. That is, the two possible outcomes
     of each step are X 1 = xr and X 2 = −xl where xr > xl > 0.
     Assume the probability of a step to the right is the same as the probability
     of a step to the left. Find mean{X }, var{X }, and X 2  after n steps.
 3.4. Autocorrelation. According to the random step model of Brownian
motion, the particle position is, after n random steps, given by
                                           
                                           n
                                 X (n) =         Xi
                                           i=1

where the X i are independent displacements with X i  = 0 and X i2  = x 2
for all i. Of course, after m random steps (with m ≤ n), the particle position is
X (m). In general, X (n) and X (m) are different random variables.
  a. Find cov{X (n), X (m)}.
  b. Find cor{X (n), X (m)}.
  c. Show that X (n) and X (m) become completely uncorrelated as m/n → 0
     and completely correlated as m/n → 1. The quantity cov{X (n), X (m)}
     is sometimes referred to as an autocovariance and cor{X (n), X (m)} as
     an autocorrelation because they compare the same process variable at
     different times.
   3.5. Frequency of Heads.      Suppose the number of heads N in n coin flips
is given by
                                        
                                        n
                                  N=          Xi ,
                                        i=1

where X i = 1 means that the ith flip has turned up heads and X i = 0 that it
has turned up tails. Assume these two outcomes are equally probable.
  a. Find mean{X i } and var{X i }.
  b. Find mean{N } and var{N }.
  c. Find mean{N /n} and var{N /n}.
  d. Is the answer to part c consistent with the behavior of the frequency of
     heads f (1) = N /n in figure 1.1 (on page 3)?
    4
    Continuous Random Variables


4.1 Probability Densities
   In order to describe the position of a Brownian particle more realistically
we require a language that allows its net displacement X to realize values
lying within a continuous range. The classical physical variables whose time
evolution we wish to model (positions, velocities, currents, charges, etc.) are of
this kind. Therefore, in place of the probability P(x) that X = x we require a
probability p(x) d x that X falls within the interval (x, x + d x). The function
p(x) is a probability density. Because probabilities are dimensionless, the
probability density p(x) has the same units as 1/x. A continuous random
variable X is completely defined by its probability density p(x).
   The probability p(x) d x obeys the same rules as does P(x), even if these
must be formulated somewhat differently. For instance, probability densities
are normalized,
                                ∞
                                     p(x) d x = 1,                        (4.1.1)
                                −∞


because some value X = x must be realized. The probability density p(x)
must be non-negative. Also, two random variables X and Y are statistically
independent if and only if their joint, p(x & y), and individual, p(x) and p(y),
probability densities are related by

                             p(x & y) = p(x) p(y).                        (4.1.2)

The expected value X  of a continuous random variable X is given by
                                       ∞
                             X  =         x p(x) d x.                   (4.1.3)
                                      −∞


We will have occasions to adopt specific probability densities p(x) as modeling
assumptions. Among them are those defining the uniform, normal, and Cauchy
random variables. Also see Problems 4.3, Exponential Random Variable, and
4.4, Poisson Random Variable.
24     CONTINUOUS RANDOM VARIABLES

4.2 Uniform, Normal, and Cauchy Densities
     The uniform random variable U (m, a) is defined by the probability density

                          1
                  p(x) =          when (m − a) ≤ x ≤ (m + a);
                         2a
                  p(x) = 0        otherwise.                                   (4.2.1)

See figure 4.1. We say that U (m, a) is a uniform random variable with center
m and half-width a. Note that this density is normalized, so that

                       mean{U (m, a)} = U (m, a)
                                         ∞
                                      =      x p(x) d x
                                               −∞
                                                     m+a
                                                1
                                          =                 x dx
                                               2a    m−a

                                          = m                                  (4.2.2)

and that

                     var{U (m, a)} = (U (m, a) − m)2 
                                      ∞
                                   =      (x − m)2 p(x) d x
                                          −∞




Figure 4.1. Probability density defining a uniform random variable U (0, 1) with center
0 and half-width 1.
                     UNIFORM, NORMAL, AND CAUCHY DENSITIES                             25
                                                m+a
                                          1
                                       =                 (x − m)2 d x
                                         2a        m−a

                                           a2
                                       =      .                                   (4.2.3)
                                           3
  Other moments about the mean are given by
                                      m+a
                                   1
                (X − X )n  =           (x − m)n d x
                                  2a m−a
                                           a n+1 − (−a)n+1
                                       =                   .                      (4.2.4)
                                               2a(n + 1)
Thus, (X − X )n  = 0 when n is odd.
   U (m, a) represents a quantity about which we know nothing except that it
falls within a certain range (m − a, m + a). Numbers taken from analog and
digital measuring devices are of this kind. For instance, the “reading” 3.2 is
actually the random number U (3.2, 0.05) because its last significant digit, 2, is
the result of taking a number originally found with uniform probability density
somewhere within the interval (3.15, 3.25) and rounding it up or down. Digital
computers also employ particular realizations of uniform random numbers.
   The normal random variable N (m, a 2 ), defined by the probability density

                   exp[−(x − m)2 /2a 2 ]
          p(x) =         √                               −∞≤ x ≤∞                 (4.2.5)
                           2πa 2
and illustrated in Figure 4.2, is especially useful in random process theory. The
parameters m and a 2 are, by design, the mean and variance of N (m, a 2 ). The
moments of N (m, a 2 ) about its mean are given by
                                            ∞
                                   1                               −(x − m)2
    (N (m, a ) − m)  = √
              2        n
                                                  (x − m)n exp                    dx
                          2πa 2             −∞                        2a 2
                            = 1 · 3 · 5 . . . (n − 1) · a n     for even n, and
                            = 0                                 for odd n.        (4.2.6)

From (4.2.6) we find that

                                                   (N (m, a 2 ) − m)4 
                  kurtosis{N (m, a 2 )} =
                                                  (N (m, a 2 ) − m)2 2
                                             3a 4
                                           =
                                              a4
                                           = 3.                                   (4.2.7)
26   CONTINUOUS RANDOM VARIABLES




Figure 4.2. Probability density defining a normal random variable N (0, 1) with mean
0 and variance 1.


The kurtosis of a normal variable is taken as a standard of comparison. When
the kurtosis of a random variable is greater than 3, its probability density is said
to leptokurtic (after the Greek word λεπ τ oς, for “thin”), and when it is less
than 3, the probability density is platykurtic (after π λατ υξ meaning “broad”).
For instance, the uniform density, which has a kurtosis of 1.8, is platykurtic.
The normal probability density function is also known as a Gaussian curve
or a bell curve, and, when molecular speeds are the independent variable, a
Maxwellian.
   All random variables must obey the normalization law X 0  = 1, but the
other moments don’t even have to exist. In fact, the Cauchy random variable
C(m, a), with center m and half-width a, defined by

                               (a/π )
                  p(x) =                         −∞≤ x ≤∞                   (4.2.8)
                           (x − m)2 + a 2

appears to have infinite even moments. Actually, neither the odd nor the even
moments of C(m, a) exist in the usual sense of an improper integral with lim-
its tending to ±∞. Thus C(m, a) is maximally leptokurtic, with a thin peak
and long tails (see figure 4.3). Still, C(m, a) can represent physically moti-
vated probability densities (see Problem 4.1, Single-Slit Diffraction). Spec-
tral line shapes, called Lorentzians, also assume this form. The Cauchy den-
sity takes its name from the French mathematician Augustin Cauchy (1789–
1857).
                                MOMENT-GENERATING FUNCTIONS                   27




Figure 4.3. Probability density defining the Cauchy random variable C(0, 1), with
center 0 and half-width 1.


  Figure 4.4 compares the uniform, normal, and Cauchy densities. In the limit
a → 0 of vanishing variance or half-width, each of the three random variables
U (m, a), N (m, a 2 ), and C(m, a) collapses to its mean or center m. So we can
write

                                m = U (m, 0)

                                   = N (m, 0)

                                   = C(m, 0).                             (4.2.9)



4.3 Moment-Generating Functions
   Moment-generating functions are a convenient way to calculate the moments
of a random variable. By definition, the moment-generating function Mx (t) of
the random variable X is the expected value of the function et x where t is an
auxiliary variable. Thus
                                M X (t) = et X .                       (4.3.1)

When X is a continuous variable with probability density p(x),
                                       ∞
                          M X (t) =         et x p(x) d x.               (4.3.2)
                                      −∞
28   CONTINUOUS RANDOM VARIABLES




Figure 4.4. Probability densities of the uniform U (0, 1), normal N (0, 1), and Cauchy
C(0, 1) random variables.


Now, we can write the moments
                                          ∞
                             X  =
                                 n
                                                   d x p(x)x n                    (4.3.3)
                                          −∞

as
                                      ∞                          n
                                                              d
                     X n  = lim             d x p(x)                  (et x )
                               t→0 −∞                         dt
                                             n  ∞
                                         d
                            = lim                        d x p(x)et x
                               t→0       dt         −∞
                                             n
                                         d
                            = lim                  M X (t).                       (4.3.4)
                               t→0       dt

Thus, the moment X n  is the limit as t → 0 of the nth derivative of M X (t)
with respect to the auxiliary variable t. Taking derivatives is easier than doing
integrations—hence the convenience.
   For example, the moment-generating function of the uniform variable U (m, a)
is
                                          m+a
                                      1
                          MU (t) =             et x d x
                                     2a m−a
                                         et (m+a) − et (m−a)
                                     =                       ,                    (4.3.5)
                                                 2at
                                                                          PROBLEMS   29

and that of a normal variable N (m, a 2 ) is
                              ∞
                        1                       (x − m)2
           M N (t) = √            d x exp t x −          .                       (4.3.6)
                       2πa 2 −∞                    2a 2
By completing the square in the argument of the exponential, the latter reduces
to

               exp mt + t 2a
                             2 2
                                     ∞
                                                          −(x − m − ta 2 )2
     M N (t) =    √                         d x exp                         .    (4.3.7)
                    2πa 2             −∞                       2a 2

Given the substitution u = x − m − ta 2 (4.3.7) becomes

                            exp mt + t 2a
                                                    2 2
                                                           ∞
                                                                du e−u /2a
                                                                      2      2
                  M N (t) =    √
                                 2πa 2                    −∞
                                mt+a 2 t 2 /2
                          = e                   ,                                (4.3.8)

from which we can easily deduce expressions for the moments of a normal (see
Problem 4.2, Moments of a Normal). Since only random variables with finite
moments have a moment-generating function, the Cauchy variable C(m, a)
does not have one except in the special case when a = 0, in which case it
collapses to the sure variable m. The moment-generating function of any sure
variable m is Mm (t) = emt  = emt 1 = emt .
   When they exist, moment-generating functions completely define a random
variable, or, alternatively, completely define its probability density. Showing
that two random variables have the same moment-generating function is equiv-
alent to showing that the two have identical probability densities, or that they,
are identically distributed. Herein lies the moment-generating function’s great-
est theoretical utility. For instance, if two variables, X 1 and X 2 , have the same
moment-generating function, namely eµt+σ t /2 , both are normal variables with
                                               2 2


mean µ and variance σ 2 . We exploit this property of moment-generating func-
tions in chapter 5. Recall, though, that two random variables can be identically
distributed without being correlated.

Problems
   4.1. Single-Slit Diffraction. According to the probability interpretation of
light, formulated by Max Born in 1926, light intensity at a point is proportional
to the probability that a photon exists at that point.
  a. What is the probability density p(x) that a single photon passes through
     a narrow slit and arrives at position x on a screen parallel to and at a
     distance d beyond the barrier? Each angle of forward propagation θ is
30      CONTINUOUS RANDOM VARIABLES

        the uniform random variable U (0, π/2). See Figure 4.5. [Hint: Each
        differential range of realizations (θ + dθ, θ ) maps into a differential
        range of realizations (x + d x, x) in such a way that p(θ )dθ = p(x) d x,
        where the relationship between θ and x is clear from the geometry.]
     b. The light intensity produced by diffraction through a single, narrow slit,
        as found in almost any introductory physics text, is proportional to

                                 1 sin2 [(πa/λ) sin θ )]
                                 r2        sin2 θ
       where r is the distance from the center of the slit to an arbitrary place on
       the screen, a is the slit width, and λ the light wavelength. Show that for
       slits so narrow that πa/λ       1, the above light intensity is proportional
       to the photon probability density derived in part a.
   4.2. Moments of a Normal. Starting from the moment-generating function
for N (0, a 2 ), as provided in equation (4.3.8), show that N (0, σ 2 )n  = 1 · 3 ·
5 . . . (n − 1) · σ n for even n.
   4.3. Exponential Random Variable. Also according to Born’s interpreta-
tion of light, the intensity of light exiting a slab of uniformly absorbing media
is proportional to the probability that a photon will survive passage through the
slab. If, as is reasonable to assume, the light absorbed d I (x) in a differentially
thin slab is proportional to its local intensity I (x) and to the slab thickness d x,
then d I (x) = −λI (x)d x and I (x) ∝ e−λx . When normalized (on the semi-
infinite line x ≥ 0), the intensity of surviving photons becomes the photon
probability density

                             p(x) = λe−λx           x ≥0
                                    = 0              x < 0.




                           Figure 4.5. Single-slit diffraction.
                                                                  PROBLEMS       31

The random variable so defined is called the exponential random variable E(λ).
  a. Show that mean{E(λ)} = 1/λ.
  b. Find the moment-generating function M E (t) of E(λ) for t < λ.
  c. Use the moment-generating function to find var{E(λ)}.
  d. Also, find E(λ)n  for arbitrary integer n.
   4.4. Poisson Random Variable. The probability that n identical outcomes
are realized in a very large set of statistically independent and identically dis-
tributed random variables when a each outcome is extremely improbable is
described by the Poisson probability distribution

                                          e−µ µn
                                  Pn =           ,
                                            n!
where n = 0, 1, 2, 3, . . . is the number of outcomes. For instance, the number
                                                          238
of decays per second of a sample of the radioisotope U92      is a Poisson random
variable, because the probability that any one nuclei will decay in a given second
is very small and the number  of nuclei within a macroscopic sample is very
large. By definition, µ = n=∞   n=0 n Pn , which one can demonstrate as

                
                ∞                 
                                  ∞
                                    µn+1
                      nPn = e−µ
                n=0               n=0
                                          n!
                                   
                                   ∞
                                     µn
                          = µe−µ
                                    n=0
                                            n!

                                                      µ2   µ3
                          = µe−µ 1 + µ +                 +    + ···
                                                      2!   3!
                          = µ.

The last step follows from the Taylor series expansion,

                                          µ2   µ3
                        eµ = 1 + µ +         +    + ···.
                                          2!   3!
  a. Given that the average number of decays per second registered by a
     Geiger counter is 2, what is the probability that within a series of one-
     second rate measurements the number of decays per second will be 5?
  b. Show that Pn is normalized—that is, show that

                                      
                                      ∞
                                        e−µ µn
                                 1=                    .
                                      n=0
                                                 n!
    5
    Normal Variable Theorems

5.1 Normal Linear Transform Theorem
   Normal random variables have several properties that are especially valuable
in applied statistics and random process theory. Here we formulate the nor-
mal linear transform theorem, the normal sum theorem, and the central limit
theorem. In proving these theorems, we will exploit the properties of moment-
generating functions.
   According to the normal linear transform theorem, a linear function of a
normal variable is another normal variable with appropriately modified mean
and variance. Thus

                    α + β N (m, a 2 ) = N (α + βm, β 2 a 2 ).          (5.1.1)

If in (5.1.1) we set m = 0 and a 2 = 1, we have

                          α + β N (0, 1) = N (α, β 2 ).                (5.1.2)

Therefore, an arbitrary normal variable N (α, β 2 ) is a linear transform of a
so-called unit normal N (0, 1) with a mean of zero and a variance of one.
  The proof of the normal linear transform theorem follows from identifying
the moment-generating function of α +β N (m, a 2 ) with the moment-generating
function of N (α + βm, β 2 a 2 ). For the former we have, by definition,

                     Mα+β N (m,a 2 ) (t) = et (α+β N [m,a ]) 
                                                                   2




                                        = etα etβ N (m,a ) 
                                                                   2



                                        = etα M N (m,a 2 ) (tβ).        (5.1.3)

From (4.3.8) we know that
                                                    a2 t 2
                            M N (m,a 2 ) (t) = emt+ 2 ,                (5.1.4)

and so
                                                      a2 t 2 β 2
                          M N (m,a 2 ) (tβ) = emtβ+       2        ,   (5.1.5)
34    NORMAL VARIABLE THEOREMS

which when substituted into the right-hand side of (5.1.3) yields
                                                                     β 2 a2 t 2
                             Mα+β N (m,a 2 ) (t) = et (α+βm)+            2         .            (5.1.6)

The right-hand side of (5.1.6) is, by definition, the moment-generating function
of N (α + βm, β 2 a 2 ). That is, (5.1.6) is equivalent to

                            Mα+β N (m,a 2 ) (t) = M N (α+βm,β 2 a 2 ) (t).                      (5.1.7)

Because the random variables α + β N (m, a 2 ) and N (α + βm, β 2 a 2 ) have
the same moment-generating function, they are identically distributed, and,
consequently, the normal linear transform theorem (5.1.1) is proved. See also
Problem 5.1, Uniform Linear Transform.

5.2 Normal Sum Theorem
  According to the normal sum theorem, two statistically independent normal
variables sum to another normal variable. In particular,

               N (m 1 + m 2 , a12 + a22 ) = N1 (m 1 , a12 ) + N2 (m 2 , a22 )                   (5.2.1)

when N1 (m 1 , a12 ) and N2 (m 2 , a22 ) are statistically independent. The normal sum
theorem is, of course, consistent with the already established fact (in sections 2.2
and 2.3) that the mean and variance of a sum of statistically independent random
variables is the sum of the individual means and variances.
   The proof of the normal sum theorem also follows from the properties of
moment-generating functions. Suppose that X 1 = N1 (m 1 , a12 ) and X 2 =
                                                                                       a2 t 2
N2 (m 2 , a22 ). Then, according to (4.3.8), M X 1 (t) = em 1 t+ 2 and M X 2 (t) =
                                                                                        1


      a2 t 2
       2
em 2 t+ 2 .

                              M X 1 +X 2 (t) = et (X 1 +X 2 ) 
                                             = et X 1 et X 2 
                                             = M X 1 (t)M X 2 (t)
                                                                 t 2 (a 2 +a 2 )
                                             = et (m 1 +m 2 )+
                                                                       1 2
                                                                         2                      (5.2.2)

where, in the second line, we have assumed that X 1 and X 2 are statistically
independent. The right-hand side of (5.2.2) is now in the form of the moment-
generating function of N (m 1 + m 2 , a12 + a22 ). Thus, the moment-generating
function of N (m 1 , a12 ) + N2 (m 2 , a22 ) is identical to the moment-generating
function of N (m 1 + m 2 , a12 + a22 ), and the normal sum theorem for statistically
independent addends has been proved.
                                          JOINTLY NORMAL VARIABLES                   35

  Together, the normal linear transform and normal sum theorems establish that
any linear function of statistically independent normal variables is another nor-
mal variable. Although uniform variables U (m, a) and most random variables
do not sum to their own kind, Cauchy variables C(m, a) do so. See Problem 5.2,
Adding Uniform Variables. The analog theorems for Cauchy variables are
                        α + βC(m, a) = C(α + βm, βa)                            (5.2.3)
and
           C1 (m 1 , a1 ) + C2 (m 2 , a2 ) = C(m 1 + m 2 , a1 + a2 ).           (5.2.4)
The latter requires that C1 (m 1 , a1 ) and C2 (m 2 , a2 ) be statistically independent.
Because C(m, a) has infinite moments, we cannot prove (5.2.3) and (5.2.4)
with moment-generating functions. The most direct proof of (5.2.3) and (5.2.4)
exploits the so-called random variable transform theorem (Gillespie 1992).

5.3 Jointly Normal Variables
  We can make an even more powerful statement: statistically dependent nor-
mals, if jointly normal, also sum to a normal. Two variables are jointly normal
when they are each linear combinations of a single set of independent normals.
To illustrate, consider the variables defined by
                                   X 1 = a N1 (0, 1)                            (5.3.1)
and
                           X 2 = bN1 (0, 1) + cN2 (0, 1).                       (5.3.2)
Here a, b, and c are constants and N1 (0, 1) and N2 (0, 1) are, by specification,
statistically independent unit normals. Here, as before, the different subscripts
attached to N (0, 1) denote statistical independence; identical subscripts would
denote complete correlation. Thus, the variables X 1 and X 2 are, by definition,
jointly normal. The property of joint normality covers a number of possible
relationships. When b = 0 and a = 0, X 1 and X 2 are statistically dependent
normal variables. When c = 0 and a = b, X 1 and X 2 are completely correlated,
and, when b = 0, they are statistically independent. Yet, according to the
normal sum (5.2.1) and linear transform (5.1.1) theorems,
                X 1 + X 2 = a N1 (0, 1) + bN1 (0, 1) + cN2 (0, 1)
                           = (a + b)N1 (0, 1) + cN2 (0, 1)
                           = N1 (0, (a + b)2 ) + N2 (0, c2 )
                           = N (0, (a + b)2 + c2 ).                             (5.3.3)
Therefore, dependent but jointly distributed normals sum to a normal. See
Problem 5.3, Dependent Normals.
36      NORMAL VARIABLE THEOREMS

   Jointly normal variables arise naturally in the multivariate systems we discuss
in chapters 8 and 9. There we exploit another of their special properties: two
jointly normal variables,
                                           
                                           m
                              Y1 = a0 +           ai Ni (0, 1)                           (5.3.4)
                                            i=1

and
                                           
                                           m
                              Y2 = b0 +           bi Ni (0, 1),                          (5.3.5)
                                           i=1
are completely determined by only five
                                       moments:    mean{Y1 } = a0 , 
                                                                      var{Y1 } =
   m                                     m                              m
   i=1 ai , mean{Y2 } = b0 , var{Y2 } =  i=1 bi , and cov{Y1 , Y2 } =
        2                                     2
                                                                        i=1 ai bi ,
even when the number m of independent unit normals Ni (0, 1) out of which Y1
and Y2 are composed is larger than five. Thus, variations among the ai and bi
which preserve these five quantities do not change Y1 and Y2 .
   The proof of this statement is beyond the scope of this book, but may be
found in Springer (1979). Here we simply note that the probability density of
two jointly normal variables Y1 and Y2 is
                                        −1       (y1 −µ1 )2  (y −µ )2 (y −µ )(y −µ )
                           1               2                + 2 22 −ρ 1 σ1 σ 2 2
                                                    2σ 2
     p(y1 & y2 ) =                 e (1−ρ )          1
                                                                2σ
                                                                  2
                                                                            1 2
                                                                                       . (5.3.6)
                   2π σ1 σ2 1 − ρ 2

For convenience, we have adopted the notation µ1 = mean{Y1 }, µ2 = mean{Y2 },
σ12 = var{Y1 }, σ22 = var{Y2 }, and ρ = cor{Y1 , Y2 }. Note that in (5.3.6)
p(y1 & y2 ) has the expected property that when Y1 and Y2 are statistically in-
dependent, ρ = 0 and the joint probability density p(y1 & y2 ) factors into a
product of two normal densities.

5.4 Central Limit Theorem
   Can anything be said about the sum of random variables when the nature
of the individual addends is not known? Amazingly, under certain conditions,
the answer is yes. If the random variables X 1 , X 2 , . . . X m are statistically
independent, their means and variances finite, and their number m large, the
sum
                         Sm = X 1 + X 2 + · · · + X m                     (5.4.1)
is approximately normal with mean
                                          
                                          m
                                 µm =           mean{X i }                               (5.4.2)
                                          i=1

and variance
                                          
                                          m
                                  σm2 =         var{X i }.                               (5.4.3)
                                          i=1
                                               CENTRAL LIMIT THEOREM            37

Approximating the sum Sm with N (µm , σm2 ) works well because the approxi-
mation is based on the central limit theorem, according to which
                                   Sm − µm
                            lim            = N (0, 1)                      (5.4.4)
                           m→∞        σm
when the X i composing the sum Sm are statistically independent and have finite
means and variances. The central limit theorem is so called because it plays a
central role in the statistical sciences.
   Repeated addition turns statistically independent non-normal variables with
finite means and variances into normal variables. Note, however, that the central
limit theorem makes no claim about how quickly normality is approached as
more terms are added to the sum Sm . One suspects that the closer to normal
the addends X i are, the more quickly Sm approaches normality. After all,
normality is achieved with only two addends if the two are individually normal.
Alternatively, if the addends are sufficiently non-normal—for example, if the
addends are Cauchy variables C(m, a)—the central limit theorem doesn’t apply
and normality is never achieved.
   We will prove the central limit theorem for the special case of identically dis-
tributed random addends X i (i = 1, 2, . . . , m) for which moment-generating
functions exist and so for which all moments X in  (n = 1, 2, . . .) are finite.
Then it will follow that µ0 = X i  and σ02 = X i2  − X i 2 for all i. Con-
sequently, µm = mµ0 and σm2 = mσ02 . As a first step, we form the random
variable
                                         (Sm − µm )
                              Zm =
                                             σm
                                         (Sm − mµ0 )
                                   =                .                     (5.4.5)
                                             mσ02

Given (5.4.1), we find that Z m can be expressed as
                                         m
                                             (X i − µ0 )
                             Zm =             
                                         i=1      mσ02

                                      1  m
                                   = √       Yi                            (5.4.6)
                                       m i=1

where the auxiliary variables
                                         (X i − µ0 )
                                  Yi =               ,                     (5.4.7)
                                              σ0
by design, have mean{Yi } = 0 and var{Yi } = 1.
38    NORMAL VARIABLE THEOREMS

  The central limit theorem claims that Z m approaches the unit normal N (0, 1)
as m becomes indefinitely large. Our strategy is to prove that the moment-
generating function of Z m approaches the moment-generating function of the
unit normal N (0, 1) as m becomes indefinitely large. From (5.4.6) and the
definition of a moment-generating function (4.3.1), we find that
                          M (t) = M 1  (t)
                              Zm           √       Yi
                                               m
                                          t m 
                                           √    Y
                                       = e m i=1 i .                      (5.4.8)
Because the X i and, consequently, the Yi are statistically independent,
                                   tY1   tY2   tYm 
                                    √       √        √
                       M Z m (t) = e m e m · · · e m .                   (5.4.9)
Because the Yi are identically distributed,
                                          tY1  m
                                            √
                             M Z m (t) = e m       .                     (5.4.10)
                                   √
Expanding the exponential etY1 / m inside (5.4.10) in a Taylor series, we find
that
                                                               m
                                tY1    t 2 Y12    t 3 Y13
            M Z m (t) = 1 + √ +                +          + ···
                                  m    2!m       3!m 3/2
                                                        m
                               t2   t 3 Y13 
                      =    1+     +            + ···                     (5.4.11)
                              2!m   3!m 3/2
                                                                 p
since Y1  = 0 and Y12  = 1. Because all the moments Y1  are assumed
finite, only the first two terms of the “multinomial” expansion (5.4.11) survive
the m → ∞ limit. Thus,
                                                            m
                                                       t2
                        lim M Z m (t) = lim        1+                    (5.4.12)
                       m→∞               m→∞          2m
or, finally,
                              lim M Z m (t) = et /2 .
                                                    2
                                                                         (5.4.13)
                             m→∞
The last step follows from the basic properties of the exponential function
(Courant and Robbins 1941). Since et /2 is the moment-generating function
                                          2


of N (0, 1), (5.4.13) proves the central limit theorem for identically distributed
independent addends.
   Many variables found in nature and conceived in physical models are sums
of a large number of statistically independent variables, and thus are normal-
like random variables. In chapter 6, we appeal to the central limit theorem
in formulating the fundamental dynamical equations that govern random pro-
cesses. The normal linear transform and normal sum theorems help us solve
these dynamical equations.
                                                                PROBLEMS        39

Problems
  5.1. Uniform Linear Transform. Prove U (α, β) = α+βU (0, 1) by show-
ing that MU (α,β) (t) = Mα+βU (0,1) (t).
   5.2. Adding Uniform Variables. Prove that the sum U1 (m 1 , a1 )+U2 (m 2 , a2 )
of two statistically independent uniform variables U1 (m 1 , a1 ) and U2 (m 2 , a2 )
is not itself a uniform random variable by showing that the moment-generating
function of U1 (m 1 , a1 ) + U2 (m 2 , a2 ) is not in the form of a moment-generating
function of a uniform random variable.
   5.3. Dependent Normals. Given that X 1 = a N1 (0, 1) and X 2 = bN1 (0, 1)+
cN2 (0, 1) where a, b, and c are constants and N1 (0, 1) and N2 (0, 1) are statis-
tically independent unit normal variables, find
  a. cov{X 1 , X 2 },
  b. var{X 1 + X 2 }, and
  c. var{X 1 } + var{X 2 }.
  d. Show that var{X 1 + X 2 } = var{X 1 } + var{X 2 }.
    6
    Einstein’s Brownian Motion

6.1 Sure Processes
   In large part, the goal of physics is to discover the time evolution of variables
that describe important parts of the universe. By hypothesis, these variables
are random variables. For instance, chapter 3 describes a model of the random
position of a Brownian particle, but that model employs neither continuous
random variables nor their continuous evolution in time. Chapters 4 and 5 have
prepared us to work with continuously distributed random variables. Here we
also investigate the consequences of assuming continuity in time. In preparation
for that task, we first review important properties of continuous sure processes.
Some of these properties carry over into random processes and some do not.
   Consider the charge q(t) on a capacitor of capacitance C shorted through a
resistor of resistance R as illustrated in Figure 6.1.
   Kirchoff’s law,
                                           q(t)
                                i(t)R +          = 0,                        (6.1.1)
                                            C
governs the process. Given that the current in the circuit i(t) and the charge on
the capacitor q(t) are related by i(t) = dq(t)dt
                                                 , (6.1.1) becomes

                                         q(t)
                               dq(t) +        dt = 0,                         (6.1.2)
                                         RC




Figure 6.1. Charge q(t) on a capacitor shorted through a resistor. The current i(t) is
dq(t)/dt.
42   EINSTEIN’S BROWNIAN MOTION

which can also be written as

                                                   q(t)
                          q(t + dt) − q(t) = −          dt,                   (6.1.3)
                                                   RC

where we have replaced the differential dq(t) with its equivalent q(t +dt)−q(t).
  The very form of (6.1.3) expresses continuity, smoothness, memorylessness,
and determinism. Actually, two kinds of continuity are built into this dynamical
equation. On the one hand, since time t is arbitrary and the increment dt can
be made arbitrarily small, the process is time-domain continuous. On the other
hand, since
                               lim q(t + dt) = q(t),                          (6.1.4)
                              dt→0

the process is process-variable continuous. The process is also smooth because
the limit
                                  q(t + dt) − q(t)
                             lim                                        (6.1.5)
                             dt→0        dt
exists. Here we deliberately treat the differential dt as if it is a small but
finite quantity. Smoothness requires process-variable continuity, and process-
variable continuity, in turn, requires time-domain continuity. However, a con-
tinuous process need not be smooth.
   The process q(t) is also a memoryless one, or, more commonly, a Markov
process, because the value of q(t) at any one instant, say at t = t1 + dt, is
determined by its value at t = t1 through a dynamical equation, in this case
(6.1.3) with t1 replacing t. Alternatively stated, q(t1 ) alone predicts q(t1 + dt);
no previous values q(t0 ) where t0 < t1 are needed. Most well-known processes
in physics are Markov processes. Magnetic systems and others having long-
term memory or hysteresis are exceptions. The Russian mathematician A. A.
Markov (1856–1922) even used memoryless processes to model the occurrence
of short words in the prose of the great Russian poet Pushkin.
   Finally, the process q(t) is sure, or deterministic, because equation (6.1.3)
returns a unique value of q(t + dt) for each q(t).
   Many of the familiar processes of classical physics belong to the class of time-
domain and process-variable continuous, smooth, and Markov sure processes.
In the next section we investigate a particular random process that is continuous
(in both senses) and Markov but neither smooth nor sure. Such continuous,
Markov, random processes incrementally, but powerfully, generalize the well-
behaved, sure processes of classical physics they most closely resemble.
   Although we don’t explore them here, other kinds of random processes are
both possible and useful (Gillespie 1992). In so-called discrete time processes,
the time-domain on which the random variable is defined is a countable set of
discrete times {t0 , t1 , . . .} such as might characterize different rounds of a game
                                                         WIENER PROCESS           43

of chance or generations of a population. Numerical simulations of continuous
processes are, necessarily, discrete time processes. In jump processes, the range
of values the process variable can assume is countably discrete. For instance,
the number of molecules N (t) within a given permeable volume is defined on
a continuous time interval, but N (t) must equal some integer.


6.2 Wiener Process
  A process variable X (t) is defined by its associated probability density
p(x, t). Its two arguments, x and t, refer to the two different ways X (t)
can vary: in time t and in value x at each time. More specifically, X (t) and
X (t + dt) are different random variables which, when representing different
parts of a Markov process, are related by a dynamical equation of form

                        X (t + dt) − X (t) = F[X (t), dt].                   (6.2.1)

The Markov propagator function F[X (t), dt] is itself a random variable and
a function of a random variable. The propagator probabilistically determines
X (t + dt) from X (t) via (6.2.1)—that is, in so far as one random variable can
determine another. We assume time-domain and process variable continuity,
so that F[X (t), dt] → 0 as dt → 0, but we do not require smoothness. The
form (6.2.1) generalizes the sure processes of classical physics.
   The Wiener process, defined by the Markov propagator
                                         √
                        F[X (t), dt] =    δ 2 dtNtt+dt (0, 1),               (6.2.2)

where δ 2 is a process-characterizing parameter, is the simplest of all continuous
Markov processes. Its corresponding dynamical equation,
                                            √
                    X (t + dt) − X (t) =     δ 2 dtNtt+dt (0, 1),            (6.2.3)

is the basic unit out of which more complicated random processes are composed.
Here Ntt+dt (0, 1) denotes a unit normal (with mean 0 and variance 1) associated
explicitly with the time interval (t, t + dt). Operationally, equation (6.2.3)
means that when the Wiener process variable X (t) realizes the sure value x(t)
at time t, X (t + dt) is a normally distributed random variable with mean x(t)
and variance δ 2 dt, or X (t + dt) = N (x(t), δ t dt). Alternatively, the
                                                                        √ realization
x(t + dt) is the sum of the sure variable x(t) and the product of δ 2 dt and a
realization of √the unit normal N (0, 1).                                   √
    The factor dt in the dynamical equation (6.2.3) seems odd. Are dt and
dt allowed in the same differential equation? If one’s standard is the   √ ordinary
calculus of sure processes, certainly not. Terms proportional to dt are in-
44    EINSTEIN’S BROWNIAN MOTION
                                                                           √
definitely larger than terms proportional to dt as dt → 0. However, here dt
is multiplied by the unit normal Ntt+dt (0, 1), which in different subintervals
assumes different positive and negative√ values. The net effect of adding them
together is to reduce the magnitude of dtNtt+dt (0, 1) to that of dt. But note
that as dt → 0,
                                 X (t + dt) → X (t)                                          (6.2.4)

and
                                  
                           dx           δ2
                              =                  (0, 1) → ∞.                                 (6.2.5)
                           dt         dtNtt+dt

Thus, the Wiener process is, on its domain, everywhere continuous but nowhere
smooth. This special property makes the Wiener process dynamical equa-
tion (6.2.3) a different kind of mathematical object—a stochastic differential
equation.
   Time-domain continuity restricts possible interpretations of the Wiener pro-
cess dynamical equation (6.2.3) and, as we shall see, encourages us to adopt the
sub- and superscripts placed on the unit normal symbol Ntt+dt (0, 1). Because
of time-domain continuity, X (t + dt/2) exists and we can formally divide the
process-variable increment X (t +dt)− X (t) into the sum of two subincrements
so that

 X (t +dt)− X (t) = [X (t +dt)− X (t +dt/2)]+[X (t +dt/2)− X (t)].                           (6.2.6)

While condition (6.2.6) seems trivial, it has a surprising consequence. Substi-
tuting the Wiener process propagator into both sides of (6.2.6) yields
               √                           
                   δ 2 dtNtt+dt (0, 1) =       δ 2 (dt/2)N t+dt
                                                             dt (0, 1)
                                                             t+ 2
                                                               t+ dt2
                                             +       δ 2 (dt/2)Nt        (0, 1),             (6.2.7)

a condition that has been called self-consistency (Gillespie 1996). Self-consis-
                                                                             t+ dt2
                                             dt (0, 1) and Nt
tency obtains only when the unit normals N t+dt
                                                      t+ 2
                                                                                      (0, 1) are sta-
tistically independent. As a rule, normals associated with temporally disjunct
time intervals must be statistically independent in order that self-consistency
and, ultimately, time-domain continuity be observed. In a phrase, Ntt+dt (0, 1)
is temporally uncorrelated. If the time intervals are identical, the associated
normals are completely correlated; if overlapping, statistically dependent; and
if disjunct, statistically independent. For this reason—to remind us of their de-
gree of mutual independence or dependence—we place sub- and superscripts
on the unit normal symbol Ntt+dt (0, 1).
                                     BROWNIAN MOTION REVISITED                45
                                                                       √
   The Cauchy variable Ctt+dt (0, 1) also reduces terms of magnitude dt down
to dt and satisfies self-consistency. In fact, the Cauchy process defined by
                                           √
                    X (t + dt) − X (t) =       δ 2 dtCtt+dt (0, 1)       (6.2.8)

in many ways mimics the Wiener process (6.2.3). The relatively long tails on
the probability density associated with C(0, 1) make longer excursions in X (t)
possible at the expense of many shorter ones. Normal and Cauchy variables
are only two members of a class of Lévy variables, named after the French
mathematician Paul Lévy (1886–1971), who studied their properties. Each
Lévy variable preserves its nature under linear transformation and addition. For
this reason, each can also be made the basis of a Lévy process with properties
similar to the Wiener and Cauchy processes. Applications range from the
seemingly random flight of the albatross to particle motion in turbulent media
(Klafter et al., 1996 and 1999).
   Yet normal processes are the only continuous Markov processes that produce
random variables with finite variances, and finite variances are often required
for physical interpretation. For instance, the variance of a random velocity
V (t) is related to the mean kinetic energy, and the latter must be finite. The
central limit theorem also favors normal processes. One can imagine a process
that, on the smallest time scales, is composed of non-normal but statistically
independent increments with finite means and variances. A large number of
these subscale increments sum, via the central limit theorem, to a propagator
that is approximately continuous and normal on time scales of interest.


6.3 Brownian Motion Revisited
   The Wiener process is the perfect mathematical vehicle for describing con-
tinuous Brownian motion. Suppose, as in chapter 3, the Brownian particle
moves in one dimension along the x-axis. The net effect of many molecular
impacts is to displace the particle an amount
                                           √
                    X (t + dt) − X (t) =    δ 2 dtNtt+dt (0, 1)          (6.3.1)

in the interval (t, t + dt). These displacements are indifferently positive and
negative, with size regulated by the parameter δ 2 .
   How does the net displacement of the Brownian particle evolve with time?
We now have the tools to integrate the stochastic differential equation (6.3.1)
and answer this question. When t = 0, (6.3.1) becomes
                                         √
                      X (dt) = X (0) +       δ 2 dtN0dt (0, 1),          (6.3.2)
46     EINSTEIN’S BROWNIAN MOTION

and when t = dt,
                                               √
                        X (2dt) = X (dt) +      δ 2 dtNdt2dt (0, 1).            (6.3.3)

Dropping the former into the right-hand side of the latter produces

                              √                         √
          X (2dt) = X (0) +       δ 2 dtN0dt (0, 1) +    δ 2 dtNdt2dt (0, 1).   (6.3.4)

Because N0dt (0, 1) and Ndt2dt (0, 1) apply to disjunct time intervals, they are
statistically independent, and the two terms on the far right of (6.3.4) sum, via
the normal sum and linear transform theorems, to

                         X (2dt) = X (0) + N02dt (0, δ 2 2dt).                  (6.3.5)

Repeating this substitution and addition indefinitely produces

                            X (t) = X (0) + N0t (0, δ 2 t).                     (6.3.6)

Thus X (t) − X (0) is normally distributed with a vanishing mean and, as in
chapter 3, a variance that grows linearly in time t. But note that here a single
parameter δ 2 has replaced the quotient x 2 /t of two independently specified
parameters x 2 and t.



6.4 Monte Carlo Simulation
     A Brownian particle, initially at the origin, occupies the position

                                                 √
                               X (t) = N0t (0, 1) δ 2 t                         (6.4.1)

at time t. But how does X evolve in time between 0 and t? One could evaluate
(6.4.1) at a series of intermediate times 0, t/n, 2t/n, 3t/n, . . . t where n > 1
and so produce a sequence of position variables

                            X (0) = 0,
                                           
                              t        t/n       t
                          X       = N0 (0, 1) δ 2 ,
                             n                   n
                                                 MONTE CARLO SIMULATION            47




Figure 6.2. The dots represent a realization of the Wiener process X (t) = N0t (0, t),
determined every time steop of size t = 1 for 100 steps by solving the update
                                                                          √ equation
(6.4.3) recursively. The solid line is a one-standard deviation envelope ± t.


                                                         
                                2t              2t/n                2t
                        X                =     N0 (0, 1)       δ2      ,
                                n                                   n
                                         ···
                                              √
                            X (t) = N0t (0, 1) δ 2 t.                         (6.4.2)

But a special problem arises if one wants to produce realizations of these vari-
                           t/n         2t/n
ables: the unit normals N0 (0, 1), N0 (0, 1), . . . N0t (0, 1) are mutually de-
pendent, and the process X (t) is autocorrelated. See Problem 6.1, Autocorre-
lated Process. Self-consistency can be used to link the correlated variables in
(6.4.2), but usually one accounts for autocorrelation with a different method:
by numerically advancing the particle position with an update equation,
                                                     √
                    X (t + t) = x(t) + Ntt+t (0, 1) δ 2 t,                 (6.4.3)

derived by replacing t in the exact solution (6.3.6) with t + t and applying the
initial condition X (t) = x(t). A Monte Carlo simulation is simply a sequence
of such updates with the realization of the updated position x(t + t) at the
end of each time step used as the initial position x(t) at the beginning of the
next. Figure 6.2 was produced in this way. The 100 plotted points mark sample
positions along the particle’s trajectory. Equally valid, if finer-scaled, sample
paths could be obtained with smaller time steps t. But recall that X (t) is not
a smooth process and its time derivative does not exist. For this reason it would
be misleading to connect the points in figure 6.2 with a smooth curve.
48     EINSTEIN’S BROWNIAN MOTION

6.5 Diffusion Equation
     The probability density
                                           1           x2
                               p(x, t) = √         e− 2δ2 t                    (6.5.1)
                                          2π δ 2 t
defines the random variable N0t [0, δ 2 t]. Figure 6.3, displaying p(x, t) versus
x at times t = 1/4, 1, and 4, illustrates the possibilities inherent in the time
evolution of a Wiener process more completely, if more abstractly, than the
sample path of figure 6.2. Inspecting the partial derivatives
                       ∂              p(x, t)    x2
                          p(x, t) = −         1− 2 ,                           (6.5.2)
                       ∂t               2t      δ t

                       ∂              x
                          p(x, t) = − 2 p(x, t),                               (6.5.3)
                       ∂x            δ t
and
                       ∂2              p(x, t)     x2
                           p(x, t) = −         1 −     ,                       (6.5.4)
                       ∂x2              δ2t        δ2t




Figure 6.3. The probability density p(x, t) = (2π δ 2 t)−1/2 exp{−x 2 /2δ 2 t} at times
t = 1/4, 1, and 4.
                                                                  PROBLEMS        49

we find that p(x, t) solves the classical diffusion equation
                             ∂ p(x, t)   δ 2 ∂ 2 p(x, t)
                                       =                 .                    (6.5.5)
                                ∂t       2       ∂x2
Equation (6.5.5) is mathematically equivalent to the stochastic dynamical equa-
tion (6.3.1). The latter equation governs the random variable X (t), while the
former governs its probability density p(x, t).
   Deducing the diffusion equation (6.5.5) from its solution (6.5.1) reverses the
usual order in modeling and problem solving. A more physically motivated
derivation of (6.5.5) often starts with the observation, called Fick’s law, that a
gradient in the probability density ∂ p/∂ x drives a probability density flux J
so that
                                             ∂p
                                    J = −D .                              (6.5.6)
                                             ∂x
where the proportionality constant D is called the diffusion constant. Fick’s
law, like F = ma and V = IR, both defines a quantity (diffusion constant, mass,
or resistance) and states a relation between variables. The diffusion constant is
positive definite, that is, D ≥ 0, because a gradient always drives an oppositely
directed flux in an effort to diminish the gradient. Combining Fick’s law and
the one-dimensional conservation or continuity equation
                                   ∂p ∂ J
                                      +    =0                                 (6.5.7)
                                   ∂t   ∂x
yields the diffusion equation (6.5.5) with D replacing δ 2 /2.
   In his famous 1905 paper on Brownian motion, Albert Einstein (1879–1955)
constructed the diffusion equation in yet another way—directly from the conti-
nuity and Markov properties of Brownian motion. Our approach, in section 6.3,
to the mathematically equivalent result X (t) − X (0) = N0t (0, 2Dt) has been
via the algebra of random variables. We use the phrase Einstein’s Brownian
motion to denote both these configuration-space descriptions (involving only
position x or X ) of Brownian motion. In chapters 7 and 8, we will explore their
relationship to Newton’s Second Law and possible velocity-space descriptions
(involving velocity v or V as well as position).

Problems
  6.1. Autocorrelated Process. Let X (t) and X (t  ) be the instantaneous
random position of a Brownian particle at times for which t  ≤ t.
  a. Find cov{X (t), X (t  )}.
  b. Find cor{X (t), X (t  )}.
  c. Evaluate cor{X (t), X (t  )} in the limits t  /t → 0 and t  /t → 1.
(Hint: Refer to the solution [6.3.6] and to self-consistency [6.2.7]. Also com-
pare with Problem 3.4, Autocorrelation.)
50   EINSTEIN’S BROWNIAN MOTION




Figure 6.4. Local particle density N0 p(x, t) versus time at x = x1 > 0, given that all
the particles are initialized at x = 0. Here δ 2 = 1, x1 = 10, and N0 = 100.



   6.2. Concentration Pulse. Suppose that N0 particles of dye are released
at time t = 0 in the center (at x = 0) of a fluid contained within an essentially
one-dimensional pipe, and the dye is allowed to diffuse in both directions along
the pipe. The diffusion constant D = δ 2 /2. At position X (t) and time t the
density of dye particles is the product N0 p(x, t), where p(x, t) is the probability
density of a single dye particle with initialization X (0) = 0. An observer at
position x = x1 = 0 sees the concentration of dye increase to a maximum value
and then decay away. See figure 6.4. At what time does the concentration peak
pass the observer?

                    √ with Drift. Consider the dynamical equation X (t +
   6.3. Brownian Motion
dt) − X (t) = αdt + δ 2 dtNtt+dt (0, 1), describing Brownian motion superim-
posed on a steady drift of rate α.

  a. Given the initial condition X (0) = 0, solve this equation using the
     method in section 6.3.
  b. Find the associated probability density p(x, t).
  c. Show that the
                 √ full width of p(x, t) at half its maximum value increases
     in time as 2 2δ 2 t ln 2.

                        √t) evolves as αt and its full width at half maximum
Because the center of p(x,
evolves more slowly as 2 2δ 2 t ln 2, it is possible to separate different species
                                                                 PROBLEMS         51




Figure 6.5. Sedimentation: layers of Brownian particles drifting downward and diffus-
ing in a viscous fluid. Time increases to the right.


of Brownian particles with different drift rates α. Figure 6.5 illustrates this
separation in the context of sedimentation. In similar fashion, electrophoresis
uses an electric field to separate charged Brownian particles (Berg 1993).
                                                                            √
   6.4. Brownian Motion in a Plane. Use solutions X (t) = N0,x     t
                                                                      (0, 1) δ 2 t
                        √
and Y (t) = N0,yt
                  (0, 1) δ 2 t and the method in section 6.4 to generate and plot
a Brownian particle sample path in the x-y plane. Assume the unit normals
  t
N0,x (0, 1) and N0,y
                   t
                      (0, 1) (and thus displacements in the two directions) are
statistically independent.
      7
      Ornstein-Uhlenbeck Processes

7.1 Langevin Equation
   Newton’s second law identifies the net force F(t) per unit particle mass M
with the rate at which the particle changes its velocity V (t). This velocity, in
turn, describes the rate at which the particle changes its position X (t). These
familiar relations,
                                 dV(t)     F(t)
                                        =                                 (7.1.1)
                                   dt        M
and
                                dX(t)
                                      = V (t),                           (7.1.2)
                                 dt
are no less true when V (t) and X (t) are random variables than otherwise. In
differential form, we have

                                                F(t)
                        V (t + dt) − V (t) =         dt                  (7.1.3)
                                                 M

and
                         X (t + dt) − X (t) = V (t) dt.                  (7.1.4)

Albert Einstein and his French contemporary Paul Langevin (1872–1946) in-
troduced randomness into these equations in different ways.
   Einstein’s actual analysis resulted in the diffusion equation (6.5.5), but we
now know that in his procedure he essentially ignored Newton’s second     √ law
(7.1.3) and replaced V (t) dt on the right-hand side of (7.1.4) with δ 2 dt
Ntt+dt (0, 1) (Einstein, 1905). This replacement turns (7.1.4) into
                                          √
                   X (t + dt) − X (t) =    δ 2 dtNtt+dt (0, 1),          (7.1.5)

and thus turns X (t) into a Wiener process with parameter δ 2 .
  Attacking the same problem a few years later, Paul Langevin modeled the
specific impulse [F(t)/M] dt in Newton’s second law (7.1.3) as a viscous drag
54   ORNSTEIN-UHLENBECK PROCESSES
                                         
−γ V (t) dt plus random fluctuations β 2 dtZ t . According to Langevin, the
random variable Z t had mean zero, variance one, was “indifferently positive
and negative,” and was uncorrelated with position X (t). If one specifies that
Z t = Ntt+dt (0, 1), equation (7.1.3) becomes the Langevin equation,
                                                 
         V (t + dt) − V (t) = −γ V (t) dt +       β 2 dtNtt+dt (0, 1).          (7.1.6)

The Langevin equation is said to govern an Ornstein-Uhlenbeck or O-U process,
after L. S. Ornstein and G. E. Uhlenbeck, who formalized the properties of this
continuous Markov process (Uhlenbeck and Ornstein 1930). The O-U process
V (t) and its time integral X (t) together describe Langevin’s Brownian motion.
   Langevin’s main insight was that viscous drag and velocity fluctuations are
complementary effects of a single, subscale phenomenon: numerous, frequent
collisions between fluid molecules and the Brownian particle.   The same colli-
sions in the same interval contribute to the fluctuation term β 2 dtNtt+dt (0, 1)
and to the viscous drag term −γ V (t) dt. The former, no less than the latter,
represents the effect of many collisions. It may be for this reason that Langevin
referred to the fluctuating term in (7.1.6) as the “complementary force.” An
English translation of Langevin’s landmark paper appears in Appendix A. In
this chapter we solve the Langevin equation, quantify the link between drag
(or dissipation) γ and fluctuation β 2 constants, and model electrical noise with
an O-U process before returning, in chapter 8, to complete the description of
Langevin’s Brownian motion.


7.2 Solving the Langevin Equation
   We could directly integrate the Langevin equation (7.1.6) to find an expres-
sion for V (t) just as we integrated, in section 6.3, the stochastic differential
equation describing Einstein’s Brownian motion to find X (t). We would do
this by recursively evaluating the stochastic differential equation (7.1.6) at dif-
ferent times and summing the parts. However, the sums are difficult—in part
because the addends are correlated. Instead, we adopt a simpler and more pow-
erful method for solving stochastic differential equations. This new method is
based on the following logic. Since each variable in the sequence of random
variables V (dt), V (2 dt), . . . , V (t) is a linear combination of the independent
normal variables N0dt (0, 1), Ndt2dt (0, 1), . . . , Nt−dt
                                                      t
                                                           (0, 1) and linear combinations
of statistically independent normals are themselves normal, then V (t) is itself
normal, that is,
                       V (t) = N0t (mean{V (t)}, var{V (t)}).                   (7.2.1)

So our problem reduces to finding expressions for the sure functions mean{V (t)}
and var{V (t)} and substituting these into the form (7.2.1).
                                    SOLVING THE LANGEVIN EQUATION                    55

  Taking the expected value of both sides of the Langevin equation (7.1.6)
produces an ordinary differential equation whose solution is mean{V (t)}. Thus
                                                  
       V (t + dt) − V (t) = −γ V (t) dt +       β 2 dtNtt+dt (0, 1),         (7.2.2)

and
                                                     
      V (t + dt) − V (t) = −γ V (t) dt +           β 2 dtNtt+dt (0, 1)
                                 = −γ V (t) dt,                                (7.2.3)

or, equivalently,
                                 dV (t)
                                          = −γ V (t),                          (7.2.4)
                                   dt

where we have exploited the linearity of the expected value operator  and the
fact that Ntt+dt (0, 1) = 0. Solving the ordinary differential equation (7.2.4),
we find that

                                 mean{V (t)} = ν0 e−γ t                          (7.2.5)

given the initial condition V (0) = ν0 .
   The time evolution of var{V (t)}, or, equivalently, of V (t)2  − V (t)2 , also
follows from the Langevin equation but less directly so. Since, from (7.2.5), we
already know that V (t)2 = v02 e−2γ t , we only need find V (t)2 . By definition,

                         d[V (t)2 ] = [V (t + dt)]2 − [V (t)]2 .                 (7.2.6)

The Langevin equation (7.1.6) provides an expression for V (t + dt) that, when
substituted into (7.2.6), yields
                                   
  d[V (t)2 ] = [V (t)(1 − γ dt] +    β 2 dtNtt+dt (0, 1)]2 − [V (t)]2
                                                       
              = V (t)2 (1 − γ dt)2 + 2V (t)(1 − γ dt) β 2 dtNtt+dt (0, 1)
                + β 2 dt[Ntt+dt (0, 1)]2 − V (t)2
                                        
              = −2V (t)2 γ dt + 2V (t) β 2 dtNtt+dt (0, 1)
                    + β 2 dt[Ntt+dt (0, 1)]2 ,                                   (7.2.7)

where we have dropped terms of order dt2 and dt3/2 because they are ignorably
56    ORNSTEIN-UHLENBECK PROCESSES

small compared to dt. Taking the expected value of (7.2.7) produces
                                                                
            dV (t)2  = −2V (t)2 γ dt + 2V (t)Ntt+dt (0, 1) β 2 dt
                            + [Ntt+dt (0, 1)]2 β 2 dt
                                                                 
                        = −2V (t)2 γ dt + 2V (t)Ntt+dt (0, 1) β 2 dt
                            + β 2 dt.                                                  (7.2.8)

Recall that V (t) is a linear combination of Nodt (0, 1), Ndt2dt (0, 1), . . . and Nt−dt
                                                                                    t
                                                                                         (t)
but not of Nt (t). Thus, V (t) and Nt (t) are statistically independent, and
             t+dt                         t+dt



                     V (t)Ntt+dt (0, 1) = V (t)Ntt+dt (0, 1)
                                                = 0.                                   (7.2.9)

Then (7.2.8) becomes

                         dV (t)2  = −2V (t)2 γ dt + β 2 dt                        (7.2.10)

or
                           d
                              V (t)2  = −2γ V (t)2  + β 2 .                       (7.2.11)
                           dt
Solving (7.2.11) subject to the initial condition V (0) = ν0 yields
                                                             
                                                         β2
                     V (t)2  = ν02 e−2γ t +                     (1 − e−2γ t ).      (7.2.12)
                                                         2γ

With practice one learns to streamline these manipulations. Combining V (t)2
and V (t)2  from (7.2.5) and (7.2.12), we find

                          var{V (t)} = V (t)2  − V (t)2
                                        2
                                         β
                                     =          (1 − e−2γ t ),                        (7.2.13)
                                         2γ

as is consistent with the expected initial condition var{V (0)} = 0. Substituting
expressions for mean{V (t)} from (7.2.5) and var{V (t)} from (7.2.13) into the
normal variable form (7.2.1) yields the desired O-U process solution
                                                                             
                                             −γ t     β2                −2γ t
                    V (t) = N0t       ν0 e          ,          (1 − e           ) .   (7.2.14)
                                                      2γ
                                        SIMULATING THE O-U PROCESS                      57

The corresponding probability density is

                                    −(ν − ν0 e−γ t )2
                             exp
                                  2(β 2 /2γ )(1 − e−2γ t )
                    p(ν, t) =                           .                       (7.2.15)
                                      β2
                                 2π         (1 − e−2γ t )
                                      2γ

These describe not only the velocity of a Brownian particle but also any process
governed by a competition between linear damping and constant magnitude
random fluctuations. See, for instance, the discussion in section 7.5 on thermally
generated electrical noise and that in section 10.1 on molecular effusion.
  Here we note two useful generalizations. First, suppose the initial condition
was left an unspecified random variable. Then,
                                                                            
                                        −γ t         β2                −γ t
     V (t) = V (0) + N0t    V (0)(e          − 1),          (1 − e          )    (7.2.16)
                                                     2γ

solves the Langevin equation. Second, suppose the Langevin equation included
a drift νd to which V (t), apart from fluctuations, relaxed in the long time limit,
so that (7.1.6) is replaced by
                                                    
    V (t + dt) − V (t) = −γ [V (t) − νd ] dt +       β 2 dtNtt+dt (0, 1).          (7.2.17)

Such drift νd might be the terminal velocity caused by gravity, by an electric
field, or by any other constant force in the presence of dissipation. The solution
of (7.2.17) is
                                          2              
                                           β
       V (t) = N0t νd + e−γ t (ν0 − νd ),      (1 − e−2γ t ) ,                     (7.2.18)
                                           2γ

given V (0) = ν0 . See Problem 7.1, Terminal Speed for an application of the
O-U process with drift.



7.3 Simulating the O-U Process
   Because the random variable V (t) is autocorrelated, numerically simulating
the O-U process is not simply a matter of substituting a time t into the desired
form of the solution, choosing a realization of the unit normal, and calculating
the result. The best way to account numerically for potentially strong autocor-
58   ORNSTEIN-UHLENBECK PROCESSES




Figure 7.1. Points on a sample path of the normalized O-U process defined by (7.3.2)
                ν̃o = 4 and drift ν̃d = 0. Solid curves show mean{Ṽ (t˜)} and
with initial value
mean{Ṽ (t˜)} ± var{Ṽ (t˜)}.



relation is, as in section 6.4, to write the general solution (7.2.18) in updated
form


           V (t + t) = ν(t)e−γ t + νd (1 − e−γ t )
                            
                               β2
                        +           (1 − e−2γ t )Ntt+t (0, 1),                       (7.3.1)
                               2γ


in which the initial condition ν(t) is a particular realization of the process
variable V (t) determined in the previous interval.
   Before proceeding, we recast (7.3.1) in terms of the followingdimensionless
variables
         and parameters: t˜ =γ t, t˜ = γ t, Ṽ (t) = V (t)/ β 2 /2γ , ν̃d =
νd / β /2γ , and ν̃(t) = ν(t)/ β 2 /2γ . Then (7.3.1) becomes
       2


                                                    
 Ṽ (t˜ + t˜) = ν̃(t˜)e−t˜ + ν̃d̃ (1 − e−t˜) +       (1 − e−2t˜)Nt˜t˜+t˜(0, 1),   (7.3.2)


from which we have formally eliminated γ and β 2 . Thus one sample path
generated by recursively solving (7.3.2) works for all values of γ and β 2 . One
simply reinterprets the meaning of t˜, t˜, Ṽ (t˜), ν̃d , and ν̃(t˜). Figure 7.1 (with
ν̃0 = 4 and ν̃d = 0) and figure 7.2 (with ν̃0 = 0 and ν̃d = 3) display such
sample paths.
                             FLUCTUATION-DISSIPATION THEOREM                     59




Figure 7.2. Points on a sample path of the normalized O-U process defined by (7.3.2)
                ν̃0 = 0 and drift ν̃d = 3. Solid curves show mean{Ṽ (t˜)} and
with initial value
mean{Ṽ (t˜)} ± var{ṽ(t˜)}



7.4 Fluctuation-Dissipation Theorem
  Competition between linear damping and random fluctuations defines the
O-U process. In the long time limit γ t → ∞, a balance is achieved between
the two, and the average kinetic energy of a Brownian particle of mass M in
the frame in which the drift vanishes becomes, according to (7.2.13),

                             M var{V (∞)}   Mβ 2
                                          =      .                          (7.4.1)
                                  2         4γ

But in the same limit (γ t → ∞), the Brownian particle also approaches thermal
equilibrium with the surrounding fluid. According to the equipartition theorem,
the equilibrium energy associated with fluctuations in each degree of freedom
is kT/2, where T is the fluid temperature. Thus, it must be that

                              M var{V (∞)}   kT
                                           =    .                           (7.4.2)
                                   2          2

Therefore, the O-U process is consistent with thermal equilibrium only if

                                   Mβ 2   kT
                                        =    ,                              (7.4.3)
                                   4γ      2
60   ORNSTEIN-UHLENBECK PROCESSES

that is, only if β 2 /2γ = kT/M. Equation (7.4.3) is one version of the
fluctuation-dissipation theorem, so named because it relates fluctuation β 2 and
dissipation γ parameters.
   Fluctuation-dissipation applies to any O-U process when fluctuations are
caused by interaction with an environment that is itself in thermal equilibrium.
In practice, fluctuation-dissipation helps fix the parameters β 2 and γ . When
modeling a Brownian particle, one usually choses a dissipation rate γ and then
solves (7.4.3) for β 2 . For instance, when the Brownian particle is immersed in
a viscous liquid, as assumed by Einstein and Langevin, Stokes’s law

                                           6π ηr
                                     γ =                                     (7.4.4)
                                            M

applies. Here η is the liquid viscosity and r the particle radius. Consequently,
β 2 = 12π ηrkT/M 2 . On the other hand, if the fluid is composed of gas
molecules with mass m 0 and density n 0 colliding with the Brownian parti-
cle at a rate n 0 σ νth , determined
                                   √ by the molecule-particle cross section σ and
the gas thermal velocity νth = kT/m 0 , then

                                        m 0 n 0 σ νth
                                  γ =                 .                      (7.4.5)
                                             M

In this case, fluctuation-dissipation yields β 2 = 2m 0 n 0 σ νth kT/M 2 .


7.5 Johnson Noise
   Consider how the electrostatic energy stored on a charged capacitor dissi-
pates when the capacitor is shorted through a resistor, as illustrated in figure 7.3.
As charge carriers flow through the circuit, they collide with, and transfer en-
ergy to, the atoms of the resisting material. Eventually, the resistor shares this
dissipated energy with the environment. However, since the resistor is not at ab-
solute zero, its atoms contain thermal energy, which makes them vibrate around
their equilibrium positions and randomly transfer energy to the charge carriers.
Where there is dissipation, there is fluctuation. In the language of macro-scale
physics: the resistor simultaneously Joule heats and delivers random voltage
pulses to the circuit. The random pulses, first observed by J. B. Johnson in
1928, are called Johnson noise.
   Johnson noise is easily modeled with an O-U process. Applying Kirchoff’s
law to an RC circuit with a fluctuating voltage source yields

                               Q
                        IR +     + (Johnson · noise) = 0                     (7.5.1)
                               C
                                                           JOHNSON NOISE            61




Figure 7.3. Capacitance C shorted through a resistance R at temperature T . The current
I (t) is d Q(t)/dt.



or, given that I = dQ/dt,

                               Q       (Johnson · noise)
                     dQ = −       dt −                   dt.                   (7.5.2)
                               RC             R

If the Johnson noise voltage fluctuations are described by a Wiener process with
parameter β 2 , (7.5.2) becomes

                                Q      
                      dQ = −       dt + β 2 dtNtt+dt (0, 1).                   (7.5.3)
                                RC

This a Langevin equation with relaxation rate γ = 1/RC and fluctuation pa-
rameter β 2 , so we may take its solution,

                                         2              
                                          β
                   Q(t) = N0t q0 e−γ t ,      (1 − e−2γ t ) ,                  (7.5.4)
                                          2γ

directly from (7.2.14). The longtime, steady-state variance of the charge fluc-
tuations, β 2 /2γ , must be consistent with thermal equilibrium at temperature T .
According to the equipartition theorem, the mean fluctuating electrostatic en-
ergy stored at equilibrium in the capacitor is given by var{Q(∞)}/2C = kT/2.
Combining these requirements, we have, as before, the fluctuation-dissipation
theorem, B 2 /4γ C = kT/2, which, on using γ = 1/RC, yields β 2 = 2kT/R.
62   ORNSTEIN-UHLENBECK PROCESSES

Therefore, in terms of circuit parameters R and C, the charge on the capacitor
is given by
                  Q(t) = N0t (q0 e−t/RC , kTC(1 − e−2t/RC )).          (7.5.5)
For an application of Johnson noise in a slightly different context, see Prob-
lem 7.2 RL Circuit.

Problems
   7.1. Terminal Speed. One way to determine the viscous drag parameter
γ is to apply a steady force F to a particle of mass M and measure its mean
terminal speed νd .
  a. Express γ in terms of F, M, and νd .
  b. Use the fluctuation-dissipation theorem to express the fluctuation param-
     eter β 2 in terms of kT, F, M, and νd where T is the fluid temperature.

   7.2. RL Circuit. Use energy equipartition to show that, in a circuit com-
posed of an inductance L shorted through a resistance R at equilibrium temper-
ature T , equilibrium current fluctuations have a mean I (∞) = 0 and variance
I (∞)2 = kT/L.
       8
       Langevin’s Brownian Motion


8.1 Integrating the O-U Process
   The O-U process V (t) and its integral X (t) together describe Langevin’s
Brownian motion. Given the velocity V (t) of a Brownian particle, how do we
find its position X (t)? We might try substituting

                                                                                   
                             −γ t                 −γ t      β2                −2γ t
       V (t) = N0t    v0 e          + vd (1 − e          ),          (1 − e           ) ,   (8.1.1)
                                                            2γ


into

                                X (t + dt) − X (t) = V (t)dt                                (8.1.2)


and solving iteratively. Such procedure generates a series of expressions for
X (dt), X (2dt), . . . , X (t), each one of which is a linear combination of corre-
lated unit normals N0dt (0, 1), N02dt (0, 1), . . . , N0t−dt (0, 1). Each of these is, in
turn, a linear combination of statistically independent unit normals N0dt (0, 1),
Ndt2dt (0, 1), . . . , Nt−2dt
                        t−dt
                              (0, 1). While, in principle, it might be possible to un-
pack these linear combinations, it is, as before, easier to exploit the general
result based on the normal sum theorem that


                         X (t) = N0t (mean{X (t)}, var{X (t)}).                             (8.1.3)


Recall from section 5.3 that any pair of correlated normals, say X (t) and V (t),
is completely determined by their means, variances, and a covariance. The
O-U process (8.1.1) provides us with expressions for mean{V (t)} and var{V (t)}.
Thus, our task reduces to finding and solving the ordinary differential equations
governing mean{X (t)}, var{X (t)}, and cov{X (t), V (t)}.
   For convenience, in the following we replace X (t + dt) − X (t) with dX and
X (t + dt) with X + dX, and we, likewise, replace V (t + dt) − V (t) with dV
64   LANGEVIN’S BROWNIAN MOTION

and V (t + dt) with V + dV. With these substitutions the Langevin equation
with drift Vd becomes
                                            
                    dV = −γ (V − vd )dt +    β 2 dt Ntt+dt (0, 1)        (8.1.4)

and (8.1.2) becomes
                                   dX = Vdt.                             (8.1.5)

Combining the expected value of dX = Vdt and of V (from [8.1.1]) generates
the differential equation

                        dX 
                              = V 
                         dt
                              = v0 e−γ t + vd (1 − e−γ t ),               (8.1.6)

whose solution is
                              v0               vd
       mean{X (t)} = x0 +        (1 − e−γ t ) + (γ t + e−γ t − 1)        (8.1.7)
                              γ                γ

assuming initial conditions V (0) = v0 and X (0) = x0 . We already see a differ-
ence between Einstein’s simple result, mean{X (t)} = x0 + vd t, and Langevin’s
more complicated one (8.1.7).
  The equation governing var{X (t)} also follows from dX = Vdt and the
expression (8.1.1) for V (t). By definition, dX(t)2 = X (t + dt)2 − X (t)2 ,
which, in our streamlined notation, becomes

                            dX 2 = (X + dX)2 − X 2
                                 = 2X dX + (dX)2
                                 = 2X Vdt + (Vdt)2 .                      (8.1.8)

Taking the expected value of (8.1.8), dividing by dt, and taking the limit dt → 0
produces
                                dX 2 
                                        = 2XV.                         (8.1.9)
                                 dt

Consequently,

                       d var{X }   d
                                 =    [X 2  − X 2 ]
                          dt       dt
                                      INTEGRATING THE O-U PROCESS               65

                                    dX 2          dX 
                                  =         − 2X 
                                      dt             dt
                                  = 2XV − 2X V 
                                  = 2 cov{X, V }.                         (8.1.10)


Thus, var{X } couples to the as yet unknown function cov{X, V }. In deriving the
equation governing cov{X, V }, we retain terms through order dX, dV, (dV)2 ,
and dt and drop terms of order (dX)2 , dXdV, (dt)3/2 , and smaller because these
vanish after dividing by dt and taking the limit dt → 0. Consequently,


       d cov{X, V } = d[XV − X V ]
                      = X dV + V dX − X dV  − V dX 
                                                     
                      = −γ XVdt + X Ntt+dt (0, 1) β 2 dt + V 2 dt
                          + γ X V dt − V 2 dt,                      (8.1.11)


where we have used dX = Vdt, dX  = V dt, dV  = −γ V dt, and
Langevin’s equation (8.1.4) for dV. Equation (8.1.11) simplifies to


                d cov{X, V } = −γ cov{X, V }dt + var{V }dt
                                                  
                               + XN tt+dt (0, 1) β 2 dt.                (8.1.12)

                                                   
If not identically zero, the term√XN tt+dt (0, 1) β 2 dt in (8.1.12) would dom-
inate over the others because dt is very much larger than dt. However,
because X (t) and Ntt+dt (0, 1) are statistically independent, XN tt+dt (0, 1) =
X Ntt+dt (0, 1) = 0, and (8.1.12) reduces to the ordinary differential equation

                   d
                      cov{X, V } = −γ cov{X, V } + var{V }.               (8.1.13)
                   dt

Multiplying through by an integrating factor eγ t turns (8.1.13) into

                        d γt
                           [e cov{X, V }] = eγ t var{V },                 (8.1.14)
                        dt

which, given that var{V } = (β 2 /2γ )(1 − e−2γ t ) from (8.1.1) and initial condi-
66    LANGEVIN’S BROWNIAN MOTION

tions V (0) = v0 and X (0) = x0 , integrates to

                                        β2
                     cov{X, V } =           (1 − 2e−γ t + e−2γ t ).        (8.1.15)
                                       2γ 2

Substituting this result into the differential equation (8.1.10) for var{X } pro-
duces
                     d           β2
                        var{X } = 2 (1 − 2e−γ t + e−2γ t ),                (8.1.16)
                     dt          γ

which is immediately integrated to yield

                     β2     2                1
         var{X } =       t − (1 − e−γ t ) +    (1 − e−2γ t ) .             (8.1.17)
                     γ 2    γ               2γ

Collecting the results (8.1.7) and (8.1.17), we have
                         
                                  v0                 vd
           X (t) = N0t       x0 +    (1 − e−γ t ) + (γ t + e−γ t − 1),
                                  γ                    γ
                                                                      
                              β 2
                                                  −γ t   1     −2γ t
                                  tγ − 2(1 − e ) + (1 − e            ) . (8.1.18)
                              γ3                         2

This expression, together with (8.1.1) for V (t) and (8.1.15) for cov{X (t), V (t)},
completely describes Langevin’s Brownian motion with drift vd . Note that only
after many relaxation times (that is, when γ t  1) does var{X (t)} have the
linear time dependence β 2 t/γ 2 characteristic of Einstein’s Brownian motion.


8.2 Simulating Langevin’s Brownian Motion
   Our purpose in this section is to derive a simulation algorithm for an O-U
process. This is equivalent to deriving an expression for the updated quantities
V (t + t) and X (t + t) in terms of the initial values V (t) and X (t) and the
O-U process parameters β 2 and γ . Since V (t + t) and X (t + t) are jointly
distributed normals, they are correlated and, therefore, can be cast into the form

                  X (t + t) = a0 + a1 N1 (0, 1) + a2 N2 (0, 1)             (8.2.1)

and
                             V (t + t) = b0 + b1 N1 (0, 1).                (8.2.2)
                   SIMULATING LANGEVIN’S BROWNIAN MOTION                        67

The unit normals N1 (0, 1) and N2 (0, 1) are, by design, statistically independent.
Furthermore, the parameters a0 , a1 , a2 , b0 , and b1 must be chosen in order to
give X (t +t) and V (t +t) the right values of mean{X (t +t)}, mean{V (t +
t)}, var{X (t + t)}, var{V (t + t)}, and cov{X (t + t), V (t + t)}. Taking
moments of (8.2.1) and (8.2.2), we find that

                      a0 = mean{X (t + t)},                               (8.2.3)

                      b0 = mean{V (t + t)},                               (8.2.4)

                      b12 = var{V (t + t)},                               (8.2.5)

                             cov{X (t + t), V (t + t)}
                      a1 =       √                       ,                 (8.2.6)
                                    var{V (t + t)}

and

                                 (cov{X (t + t), V (t + t)})2
       a22 = var{X (t + t)} −                                  .          (8.2.7)
                                        var{V (t + t)}

See Problem 8.1 Derivation. The time dependences of mean{X (t + t)},
mean{V (t + t)}, var{X (t + t)}, var{V (t + t)}, and cov{X (t + t), V (t +
t)} follow directly from expressions (8.1.1), (8.1.15), and (8.1.18), already de-
rived for mean{X (t)}, mean{V (t)}, var{X (t)}, var{V (t)}, and cov{X (t), V (t)}.
In particular, we find that

              mean{V (t + t)} = v(t)e−γ t + vd (1 − e−γ t ),            (8.2.8)

                                      β2
                var{V (t + t)} =        (1 − e−2γ t ),                   (8.2.9)
                                      2γ
                                              v(t)
             mean{X (t + t)} = x(t) +             (1 − e−γ t )
                                               γ
                                          vd
                                      +      (γ t + e−γ t − 1)          (8.2.10)
                                          γ

                                      β2          2β 2
                var{X (t + t)} =        (γ t) −      (1 − e−γ t )
                                      γ3          γ3

                                           β2
                                      +        (1 − e−2γ t ),            (8.2.11)
                                          2γ 3
68    LANGEVIN’S BROWNIAN MOTION




                                                            
Figure 8.1. Points represent normalized sample velocities v/ β 2 /2γ versus normal-
ized time γ t of a Brownian particle from (8.2.2)with drift vd = 0 andinitial con-
dition v0 = 0. Solid curves represent mean{v/ β 2 /2γ } and mean{v/ β 2 /2γ } ±
       
std{v/ β 2 /2γ }.


and

                                        β2
      cov{X (t + t), V (t + t)} =         (1 − 2e−γ t + e−2γ t ),      (8.2.12)
                                       2γ 2

which, when substituted into (8.2.3) through (8.2.7), provide the sought-for
simulation algorithm for Langevin’s Brownian motion in time steps of dura-
tion t.
   Figures 8.1 and 8.2 display sample time evolutions x(t) and v(t) generated
by solving (8.2.1) and (8.2.2) iteratively with vd = 0 and initial conditions
x0 = 0 and v0 = 0. As expected, when v(t) > 0, x(t) increases in time, when
v(t) < 0, x(t) decreases in time. Also, as expected, x(t) appears to evolve
smoothly in time while v(t) does not.



8.3 Smoluchowski Approximation
  Langevin’s Brownian motion reduces to Einstein’s in the so-called Smolu-
chowski limit, that is, on time scales for which the independent variable V (t)
changes little and its integral X (t) changes much. The Smoluchowski ap-
proximation effectively minimizes inertial effects and maximizes randomness.
Formally, we access this regime by setting dV = 0 in the Langevin equation
                                        
                       dV = −γ Vdt +     β 2 dt Ntt+dt (0, 1)               (8.3.1)
                                   EXAMPLE: BROWNIAN PROJECTILE                    69




                                                                
Figure 8.2. Points represent normalized sample positions x/[γ −1 β 2 /2γ ] versus nor-
malized time γ t of a Brownian particle from (8.2.1) and (8.2.2) withdrift vd = 0
and initial condition x0 = 0. Solid curves represent mean{x/γ −1 β 2 /2γ } and
                                  
mean{x/γ −1 β 2 /2γ } ± std{x/γ −1 β 2 /2γ }.


and using dX = Vdt to eliminate the variable V altogether. In this way (8.3.1)
reduces to the Wiener process equation
                                   
                                       β2
                            dX =          dt Ntt+dt (0, 1).                   (8.3.2)
                                       γ2

Its solution
                                                          
                                                    β 2t
                              X (t) = N0t       x0 , 2                        (8.3.3)
                                                    γ

reproduces Einstein’s Brownian motion, with β 2 /γ 2 playing the role of the
diffusion parameter δ 2 . Apart from a constant offset in the mean position,
solution (8.3.3) realizes the late-time, high-dissipation regime (γ t  1) of
Langevin’s Brownian motion as described by (8.1.18) with vd = 0.


8.4 Example: Brownian Projectile
   A neutral molecule and a droplet of uncombusted gas thrust from a car tail
pipe both obey the same stochastic dynamics—both are, in principle, Brownian
particles evolving as an O-U process. Their vastly different masses account for
quantitative rather than qualitative differences. In both cases the fluctuation-
                  √ fixes β /2γ at kT /M. Then the dissipation rate γ and the
                           2
dissipation theorem
thermal velocity kT /M alone adjust the degree to which, at any time t, the
Brownian particle manifests either random or deterministic behavior.
70     LANGEVIN’S BROWNIAN MOTION

   Suppose, for instance, the Brownian particle is initialized as a projectile (with
x0 = y0 = z 0 = 0, vx0 = v y0 = 0, and vz0 = 0) and moves under the influence
of gravity (g = −g ŷ) in the x − y plane. The equations of motion are

                                     
                    dV x = −γ Vx dt +   β 2 dt Nt,x
                                                t+dt
                                                     (0, 1),                     (8.4.1)
                                               
                    dV y = −γ (Vy − vd )dt + β 2 dt Nt,y t+dt
                                                              (0, 1),            (8.4.2)

dX = Vx dt, and dY = Vy dt. Here vd = −g/γ and the unit normals,
  t+dt
Nt,x   (0, 1) and Nt,y
                    t+dt
                         (0, 1), associated with fluctuations in different directions,
are statistically independent. The solutions
                                                                        
                        vx,0       −γ t β2           −γ t 1      −2γ t
     X (t) = N0,x
              t
                             (1 − e ), 3 tγ − 2(1 − e ) + (1 − e       )
                         γ              γ                 2
                                                                      (8.4.3)
and
                             
                                 v y,0                g
            Y (t) = N0,y
                     t
                                       (1 − e−γ t ) − 2 (γ t + e−γ t − 1),
                                  γ                  γ
                                                                             
                                 β2                     1
                                    tγ − 2(1 − e−γ t ) + (1 − e−2γ t )           (8.4.4)
                                 γ3                     2

are taken from (8.1.18).
   These configuration space coordinates reveal deterministic behavior at early
times, that is, at times for which γ t 1. In particular, through leading order
in the assumed small quantity γ t,

                                     mean{X (t)} = vx,0 t                        (8.4.5)

and
                                                           gt 2
                                 mean{Y (t)} = v y,0 t −        ,                (8.4.6)
                                                            2

which are familiar from introductory physics, and

                                                            β 2t 3
                             var{X (t)} = var{Y (t)} =             .             (8.4.7)
                                                              3

Thus, the early-time regime preserves the effect of initial conditions and repro-
duces familiar projectile motion, and the variance grows relatively slowly with
                                   EXAMPLE: BROWNIAN PROJECTILE                      71




Figure 8.3. Early-time (0 ≤ γ t ≤ 0.01) sample trajectories (points) and mean trajectory
(solid) for
         a Brownian particle under the influence of a normalized gravity of magnitude
                                                                             
(gγ −1 / β 2 /2γ = 220. Initial conditions are x0 = y0 = 0 and vx0 = v y0 = β 2 /2γ .


time t. In contrast, at late times (when γ t  1), the coordinates change more
randomly. Through leading order terms in 1/γ t,

                                  mean{X (t)} = 0,                              (8.4.8)


                                                    gt
                                mean{Y (t)} = −        ,                        (8.4.9)
                                                    γ

and
                                                           β 2t
                          var{X (t)} = var{Y (t)} =             .             (8.4.10)
                                                           γ2

Thus, at late times Brownian motion is superimposed on a downward constant
drift.
   Simulations of the processes (8.4.3) and (8.4.4) are displayed in figures 8.3
and 8.4 as trajectories in the x-y plane. Figure 8.3 shows a pair of largely
deterministic and projectilelike trajectories. The trajectory of figure 8.4 passes
through deterministic to random Brownian motion. In spite of the resemblance
of figure 8.3 to familiar ballistic trajectories, the model producing them applies
only at low speeds in viscous media—that is, only to Brownian projectiles.
Typically, the drag force on baseballs and other macroscopic objects in air is
not linear but quadratic in the speed.
72     LANGEVIN’S BROWNIAN MOTION




Figure 8.4. Early- through late-time (0 ≤ γ t ≤ 1.0) sample trajectory (points) and
mean trajectory (solid) for a 
                              Brownian particle under the influence of a normalized
                          −1
gravity of magnitude (gγ / β 2 /2γ = 3. Initial conditions are x0 = y0 = 0 and
            
vx0 = v y0 = β 2 /2γ .



  The Langevin equation and its direct extensions are well suited for weaving
deterministic and random effects together. In chapter 9 we investigate stochastic
models of two other multivariate systems with familiar deterministic limits: the
harmonic oscillator and the magnetized charged particle.



Problems
     8.1. Derivation.   Derive (8.2.3) through (8.2.7) from (8.2.1) through (8.2.2).


   8.2. X-V Correlation. Find cor{X (t), V (t)} for Langevin’s Brownian mo-
tion in the late time, high-dissipation regime, that is, through leading order in
the assumed large quantity γ t.
  8.3. Range Variation. A Brownian particle starts at the origin and com-
pletes projectilelike motion in the X -Y plane under the influence of gravity
while in its deterministic phase (γ t   1). Its time of flight t f is the nonzero
solution of mean{Y (t f )} = 0.

  a. Express var{X (t f )} in terms of fluctuation parameter β 2 , relaxation rate
     γ , acceleration of gravity g, and initial vertical velocity v y0 .
                                                            PROBLEMS            73
                                
b. Given that vx0 = v y0 = β 2 /2γ     , find an expression for the ratio of
                                   −1
   std{X (t f )} to the distance γ     β 2 /2γ in terms of Vyo , γ , and
                                                                        g.
c. Numerically evaluate the dimensionless ratio std{X (t f )}/[γ −1 β 2 /2γ ]
   with parameters used in producing figure 8.3. Is your result consistent
   with that of figure 8.3?  Note: the sample paths of figure 8.3 suggest
   that std{X (t f )}/[γ −1 β 2 /2γ ] ≈ 10−3 .
      9
      Other Physical Processes

9.1 Stochastic Damped Harmonic Oscillator
   Imagine a massive object attached to a spring and submerged in a viscous
fluid, as illustrated in figure 9.1. If set in motion, the object moves back and
forth with an amplitude that slowly decays in time. The deterministic equations
of motion governing this system,

                              dv = −ω2 xdt − γ vdt                           (9.1.1)

and
                                     dx = vdt                                (9.1.2)

are those of a damped harmonic oscillator with oscillation frequency ω and
decay rate γ . Yet the collisions causing the oscillations to decay also cause
the oscillator to fluctuate randomly. The simplest self-consistent equations of
motion describing a stochastically damped harmonic oscillator are
                                                
                   dV = −ω2 X dt − γ Vdt +       β 2 dt Nt (0, 1)            (9.1.3)

and
                                    dX = Vdt.                                (9.1.4)

The symbol Nt (0, 1) in (9.1.3) slightly abbreviates previous notation Ntt+dt (0, 1)
for the temporally uncorrelated unit normal associated with the time interval
(t, t + dt). The β → 0 limit of (9.1.3) formally recovers the deterministic
equation of motion (9.1.1), but, as before, the fluctuation-dissipation theorem
requires that β and γ be related through β 2 /2γ = kT /M, where M is the
object mass and T the fluid temperature. Thus, only when the thermal speed
√
  kT /M is ignorably small compared to the oscillator speed is a deterministic
description appropriate.
   Solving (9.1.3) and (9.1.4) is a demanding but worthwhile task, first accom-
plished by Subrahmanyan Chandrasekhar (1910–95) in 1943. The harmonic
oscillator, much more than the stationary particle or the free-falling projectile, is
76    OTHER PHYSICAL PROCESSES




                Figure 9.1. Viscously damped harmonic oscillator.


the ideal multipurpose tool of theoretical physics. When displaced a little from
stable equilibrium, almost any object vibrates as a damped harmonic oscillator,
and models of complex objects are often constructed out of weakly interacting
oscillators. Furthermore, the harmonic oscillator has been a means of exploring
the physics of new phenomena—nonlinearity, quantum mechanics, and, here,
stochasticity.
   The methods of chapter 8 suffice. Because equations (9.1.3) and (9.1.4) are
linear stochastic differential equations, X (t) and V (t) are linear combinations
of a set of uncorrelated normals Nt (0, 1). Thus

                      X (t) = N (mean{X (t)}, var{X (t)})                (9.1.5)

and
                      V (t) = N (mean{V (t)}, var{V (t)})                (9.1.6)

where cov{X (t), V (t)} = 0. As before, our task reduces to finding and solving
ordinary differential equations governing the time dependence of the means,
mean{X } and mean{V }, the variances, var{X } and var{V }, and the covariance
cov{X, V }. The equations for X  and V ,

                           dV 
                                 = −ω2 X  − γ V                      (9.1.7)
                            dt

and
                                 dX 
                                       = V ,                           (9.1.8)
                                  dt
are solved in many classical mechanics texts. These texts usually distinguish
among lightly damped (γ < 2ω), critically damped (γ = 2ω), and strongly
                 STOCHASTIC DAMPED HARMONIC OSCILLATOR                    77

damped (γ > 2ω) behaviors. The solutions

                                            γ x0  sin(ω t)
       X (t) = e−γ t/2 x0 cos(ω t) + v0 +                          (9.1.9)
                                              2        ω

and

                                              γ v0  sin(ω t)
      V (t) = e−γ t/2 v0 cos(ω t) − x0 ω2 +                      (9.1.10)
                                                2        ω

apply in all three regimes but are written
                                        here to emphasize the lightly damped
case. The reduced frequency ω = ω2 − γ 2 /4 is, of course, only real and
positive definite when the oscillator is lightly damped.
  The ordinary differential equation governing var{V (t)} follows from the
equation of motion (9.1.3) by way of

                  dV 2 = (V + dV)2 − V 2

                       = 2V dV + (dV)2 ,                             (9.1.11)

                dV 2  = −2γ V 2 dt − 2ω2 VXdt + β 2 dt,        (9.1.12)

and
                    dV 2 
                            = −2γ V 2  − 2ω2 VX + β 2 .         (9.1.13)
                      dt

Combining (9.1.13) and (9.1.7), we find the desired equation

          d var{V }
                    = −2γ var{V } − 2ω2 cov{X, V } + β 2 .          (9.1.14)
             dt

The equation governing the time dependence of var{X (t)} follows, in like
manner, from dX = Vdt via dX 2 = 2X dX + (dX)2 , dX 2 = 2X Vdt, dX 2  =
2XVdt, and dX /dt = V . From these we find

                          d var{X }
                                    = 2 cov{X, V }.                 (9.1.15)
                             dt

Also, from d(XV) = (X + dX)(V + dV) − XV we have d(XV) = X dV + V dX
and, consequently, dXV = −ω2 X 2 dt − γ XVdt + V 2 dt, which, given
78   OTHER PHYSICAL PROCESSES

(9.1.7) and (9.1.8), becomes

       d cov{X, V }
                    = −γ cov{X, V } − ω2 var{X } + var{V }.           (9.1.16)
            dt

The three ordinary differential equations (9.1.14) through (9.1.16) are readily
decoupled and solved. In particular, we use (9.1.15) to eliminate cov{X, V }
and, subsequently, (9.1.16) to eliminate var{V }. This procedure generates the
equation

             d 3 var{X }      d 2 var{X }                 d var{X }
                    3
                         + 3γ        2
                                          + (4ω2 + 2γ 2 )
                 dt               dt                         dt
                                                2 
                                               β
                         + 4γ ω2 var{X } −           = 0,             (9.1.17)
                                              2γ ω2

which can be expressed in terms of the auxiliary variable

                                                β2
                               y = var{X } −                          (9.1.18)
                                               2γ ω2

in the convenient form

          d3 y      d2 y                 dy
               + 3γ      + (4ω2 + 2γ 2 )    + 4γ ω2 y = 0.            (9.1.19)
          dt 3      dt 2                 dt

Equation (9.1.19) has solutions of form e pt , where the constant p solves the
indicial equation

                  p 3 + 3γ p 2 + (4ω2 + 2γ 2 ) p + 4γ ω2 = 0.         (9.1.20)

In general, cubic equations have complicated solutions. Fortunately, this cubic
has relatively simple ones,

                               p = −γ , −γ ± 2iω ,                   (9.1.21)
                               
for which we recall that ω = ω2 − γ 2 /4. Therefore, the general solution of
(9.1.17) is the linear combination

                        β2                               
           var{X } =         + e−γ t [a + be2iω t + ce−2iω t ].       (9.1.22)
                       2γ ω2

The constants a, b, and c in (9.1.22) are determined by imposing the ini-
                   STOCHASTIC DAMPED HARMONIC OSCILLATOR                           79

tial conditions X (0) = x0 and V (0) = v0 or their equivalents on (9.1.22),
(9.1.16), and (9.1.15). In particular, recall that the variances and covariances
of sure variables always vanish. Thus, var{X (0)} = 0, var{V (0)} = 0, and
cov{X (0), V (0)} = 0. The results are
                                                 
                        β2       −γ t      β2
          var{X } =         +e
                      2γ ω2             8γ ω2 ω2

                    × [−4ω2 + γ 2 cos(2ω t) − 2γ ω sin(2ω t)],             (9.1.23)
                           2 
                     −γ t   β
      cov{X, V } = e            [1 − cos(2ω t)],                             (9.1.24)
                           4ω2
and
                                                
                      β2                 β2
            var{V } =    + e−γ t                     [−4ω2 + γ 2 cos(2ω t)
                      2γ                8γ ω2
                        + 2γ ω sin(2ω t)].                                  (9.1.25)
As one might expect, in the long time limit γ t → ∞, var{V } → β 2 /2γ , and,
if the oscillator approaches thermal equilibrium with its environment so that




Figure 9.2. Dots represent the sample time evolution, while the solid lines represent
                                                                                 the
mean, and mean ± standard deviation of the normalized velocity coordinate v/ β 2 /2γ
of a lightly damped (γ = ω/3) stochastic harmonic oscillator.
80   OTHER PHYSICAL PROCESSES




Figure 9.3. Dots represent the sample time evolution, while the solid lines repre-
sent themean, and mean ± standard deviation of the normalized position coordinate
x/(γ −1 β 2 /2γ ) of a lightly damped (γ = ω/3) stochastic harmonic oscillator.

var{V } → kT /M, then, the fluctuation dissipation theorem, β 2 /2γ = kT /M,
also obtains. These expressions, (9.1.23) through (9.1.25), and those for
mean{X (t)} and mean{V (t)}, (9.1.9) and (9.1.10) respectively, completely
describe the stochastic damped harmonic oscillator. See also Problem 9.3,
Oscillator Energy.
   Expressions (9.1.9), (9.1.10), and (9.1.23) through (9.1.25), pass the test of
reducing to known results in appropriate limits. Of course, t = 0 recovers
stipulated initial conditions, and β 2 = 0 reduces the random process to the
familiar deterministic one. Less obvious is the ω2 → 0 limit, which takes
the oscillator process defined by (9.1.3) and (9.1.4) into Langevin’s Brownian
motion, defined by (8.1.4) and (8.1.5). See Problem 9.4, O-U Process Limit.
   Figures 9.2 and 9.3 display sample speeds V (t) and positions X (t) of a
lightly damped (γ = ω/3) stochastic harmonic oscillator, as generated from
equations (9.1.9) and (9.1.10) and (9.1.23) through (9.1.25) with the simulation
method of section 8.2.


9.2 Stochastic Cyclotron Motion
  One can add fluctuation and dissipation terms to any ordinary differential
equation having time as an independent variable. Whether the resulting stochas-
                                   STOCHASTIC CYCLOTRON MOTION                  81

tic differential equation describes a physically meaningful process or not is, of
course, another question. Adding dissipation and fluctuation to a charged par-
ticle in a magnetic field, in fact, makes perfect sense when the aim is to model
simultaneous cyclotron motion and random scattering, as might occur, say, in
the earth’s magnetosphere, in a mass spectrometer, or in a particle accelerator.
   A particle with charge Q and mass M in a stationary uniform magnetic field
B = B ẑ obeys Newton’s second law
                                   dv
                               M      = Qv × B,                            (9.2.1)
                                   dt
or, equivalently,
                                dv = (v × )dt,                            (9.2.2)
where  = ẑ and (= QB/M) is the cyclotron frequency. Components of
(9.2.2) in the x − y plane, that is, in the plane normal to the magnetic field, are
dvx = v y dt and dv y = −vx dt. Adding dissipation and fluctuation to these
produces the stochastic differential equations
                                                
                  dV x = Vy dt − γ Vx dt + β 2 dt Nt,x (0, 1)             (9.2.3)

and                                             
                dV y = −Vx dt − γ Vy dt +       β 2 dt Nt,y (0, 1).       (9.2.4)
Here Nt,x (0, 1) and Nt,y (0, 1) are mutually independent and individually tem-
porally uncorrelated unit normals. These, as well as

                                   dX = Vx dt                              (9.2.5)

and
                                   dY = Vy dt,                             (9.2.6)
govern the multivariate stochastic cyclotron process. A complete   description of
the particle dynamics also requires solving dV z = −γ Vz dt + β 2 dt Nt,z (0, 1)
and dZ = Vz dt for motion parallel to the magnetic field. Since Vz (t) is an O-U
process and Z (t) is its integral, we can refer to chapter 8 for their description.
   The four coupled stochastic differential equations, (9.2.3) through (9.2.6),
describing motion in the plane normal to the magnetic field, are linear in
the dependent variables X (t), Y (t), Vx (t), and Vy (t). For this reason, these
variables are different linear combinations of a single set of mutually inde-
pendent unit normals and, therefore, via the normal sum theorem, are them-
selves correlated normals. Their complete description requires finding and
solving the fourteen independent coupled ordinary differential equations gov-
erning the time dependence of their fourteen defining moments: mean{X },
mean{Y }, mean{Vx }, mean{Vy }, var{X }, var{Y }, var{Vx }, var{Vy }, cov{X, Y },
cov{X, Vx }, cov{X, Vy }, cov{Y, Vx }, cov{Y, Vy }, and cov{Vx , Vy }. This task is
82    OTHER PHYSICAL PROCESSES




Figure 9.4. Trajectory of a stochastic magnetized charged particle described by the
model of (9.2.3) through (9.2.6). See Lemons and Kaufman (1999).

too lengthy to outline here but requires only the methods already employed in
chapter 8 and in section 9.1. Figure 9.4 shows a sample trajectory.
   Here, instead of deriving the exact solutions necessary to generate particle
trajectories like the one shown in figure 9.4, we use the Smoluchowski approx-
imation to extract the physics of collision-limited charged particle diffusion
across magnetic field lines. In particular, setting dV x = 0 and dV y = 0 in
(9.2.3) and (9.2.4) and using (9.2.5) and (9.2.6) to eliminate velocity variables
Vx and Vy , we have
                                           
                       0 = dY − γ dX + β 2 dt Nt,x (0, 1)                (9.2.7)
and                                        
                    0 = −dX − γ dY +          β 2 dt Nt,y (0, 1).         (9.2.8)
Multiplying each term in (9.2.7) by γ and each in (9.2.8) by  and adding the
                                                                       PROBLEMS     83

resulting equations produces
                                               
   0 = −(γ 2 + 2 )dX + γ β 2 dt Nt,x (0, 1) +  β 2 dt Nt,y (0, 1),            (9.2.9)

that is,
                                              
                    γ 2 β 2 dt                       2 β 2 dt
       dX =                    Nt,x (0, 1) +                    Nt,y (0, 1).   (9.2.10)
                  (γ 2 + 2 )2                     (γ 2 + 2 )2

Similar manipulations eliminating X in favor of Y yield
                                        
               γ 2 β 2 dt                    2 β 2 dt
     dY =                 N t,y (0, 1) −                Nt,x (0, 1).           (9.2.11)
             (γ 2 + 2 )2                  (γ 2 + 2 )2

Summing the two terms on the right-hand sides of (9.2.10) and (9.2.11) reveals
that X (t) and Y (t) are Wiener processes with solutions

                         mean{X } = mean{Y } = a constant                      (9.2.12)

and
                                                        β 2t
                            var{X } = var{Y } =                .               (9.2.13)
                                                      2 + γ 2
Thus the Smoluchowski approximation reduces stochastic cyclotron motion
to cross-field diffusion with a diffusion constant (β2 +γ
                                                         /2)
                                                       2
                                                           2 reduced by a factor of

γ /( + γ ) from its field free ( → 0) limit. Although not immediately
  2     2      2                       2

obvious, the equations of motion (9.2.10) and (9.2.11) imply that X and Y are
statistically independent. See Problem 9.5 Statistical Independence.


Problems
  9.1. Smoluchowski Oscillator. Find the Smoluchowski approximation to
the equations of motion (9.1.3) and (9.1.4) of a stochastic damped harmonic
oscillator and solve for X (t).
   9.2. Critical Damping. Find mean{X } and var{X } for the critically damped
(γ = 2ω) stochastic oscillator by taking the appropriate limits of (9.1.9) and
(9.1.23).
   9.3. Oscillator Energy. The total energy of a simple harmonic oscillator
is the sum of its kinetic MV 2 /2 and potential ω2 MX 2 /2 energies. Show that, in
equilibrium when γ t → ∞, solutions (9.1.23) and (9.1.25) and the fluctuation-
dissipation theorem imply that the mean kinetic and potential energy are each
equal to kT /2.
84     OTHER PHYSICAL PROCESSES

   9.4. O-U Process Limit. Show that the ω2 → 0 limit reduces expressions
(9.1.9) and (9.1.23) to those describing the mean and variance of the integral
X (t) of an O-U process as found in (8.1.18).
     9.5. Statistical Independence.   Show that (9.2.10) and (9.2.11) imply that
d
dt
   cov{X, Y } = 0, and, thus, given sure value initial conditions, that cov{X,
Y } = 0 at all times.
    10
    Fluctuations without Dissipation


10.1 Effusion
   Every physicist who maintains a vacuum system struggles to defeat effusion—
the process whereby gas molecules flow through a small opening from one
region (the environment) into another (the vacuum). Effusion can be quanti-
fied deterministically with a simple rate equation or stochastically as an O-U
process. The latter, of course, includes the effect of fluctuations.
   Figure 10.1 shows the situation we consider—a closed region divided into
two compartments of volumes V A and VB containing, respectively, N A and
N B molecules. An opening of area σ allows the molecules to move between
compartments. We assume that the molecules are identical, that the gases are
uniformly distributed within each compartment, that the gases are in thermal
equilibrium with each other, and that the integers N A and N B are large enough
to be treated as continuous variables. The rate at which molecules leave volume
V A must be proportional to their density N A /V A in compartment A. Likewise,
the rate at which molecules enter volume V A (from volume VB ) is proportional
to N B /VB . Thus
                                                     
                          dN A              NA   NB
                               = −r            −          ,           (10.1.1)
                           dt               VA   VB

r is the effusion rate. The larger the area of the opening σ and the higher
the gas temperature T , the more rapidly the molecules effuse; the larger the
particle
       √mass M, the more slowly the effusion. According to a simple model,
r = σ kT /(2π M). By hypothesis, the total number of molecules is a constant
N0 = N A + N B . Using this relation to eliminate N B from (10.1.1) transforms
it into an equation for N A alone,

                                                             
                                   
          dN A            1    1                      
               = −r          +           N A −  N0   .            (10.1.2)
           dt             VA   VB               VB    
                                                    +1
                                                 VA
86    FLUCTUATIONS WITHOUT DISSIPATION




                             Figure 10.1. Effusion parameters.


Solving yields
                                               1                                             
                           VA               −r    V A + VB
                                                         1
                                                             t                              VA
     N A (t) = N0                      +e                        N A (0) − N0                        .
                        V A + VB                                                         V A + VB
                                                                                                 (10.1.3)
As t → ∞
                                                                       
                                                             VA
                               N A (t) → N0                                 ,                    (10.1.4)
                                                          V A + VB

and likewise
                                                                       
                                                             VB
                               N B (t) → N0                                 .                    (10.1.5)
                                                          V A + VB

Thus, as t → ∞ the densities in each compartment equalize.
   More generally, N A and N B are random variables. In place of the determin-
istic rate equation (10.1.2) we propose the stochastic differential equation
                                                                 
                    dN A = −γ (N A − N A∞ )dt +                   β 2 dt Nt (0, 1)               (10.1.6)

for N A , where, for convenience we have adopted the notation γ = r ( V1A + V1B )
and N A∞ = N0 ( VAV+V
                    A
                      B
                        ). Since (10.1.6) describes an O-U process, its solution is

                                                                                        
                                                        β           2
      N A (t) = N       N A∞ + e−γ t (N A (0) − N A∞ ),                 (1 − e   −2γ t
                                                                                         ) .     (10.1.7)
                                                                  2γ

However, var{N A } is not an energy, and therefore β 2 cannot be expressed in
terms of a rate γ and a temperature T by requiring the equipartition of energy
                                                                     EFFUSION         87

at equilibrium. The fluctuation-dissipation theorem does not apply; N A and N B
fluctuate without dissipation.
   Nonetheless, long-time, steady-state, or equilibrium values of mean{N A } and
var{N A } provide a means of choosing the process parameters. From (10.1.7)
we see that
                               mean{N A (∞)} = N A∞                            (10.1.8)

and
                                                     β2
                                 var{N A (∞)} =         .                      (10.1.9)
                                                     2γ

Consider the following line of reasoning (also used in Problem 2.4, Density
Fluctuations). A molecule must occupy a position in V A or in VB . Suppose
these two mutually exclusive and exhaustive possibilities are realized with prob-
abilities PA and PB = 1− PA . At equilibrium PA and PB are constant numbers.
Thus mean{N A (∞)} and var{N A (∞)} must be functions of the equilibrium
probabilities PA and PB . But what functions? To find out, let the random
variables X i with i = 1, 2, . . . N0 be a set of statistically independent indicator
variables defined so that X i = 1 when molecule i is within volume V A and
X i = 0 when molecule i is within volume VB . By          Ndesign,     the variables X i
characterize the gas in equilibrium. Clearly, N A = i=1      0
                                                                X i , and, consequently,

                           mean{X i } = 1 · PA + 0 · PB
                                        = PA                                  (10.1.10)

for all i. Likewise,

          var{X i } = (1 − mean{X i })2 · PA + (0 − mean{X i })2 · PB
                    = (1 − PA )2 · PA + (0 − PA )2 · PB
                    = (1 − PA )PA
                    = PA PB                                                   (10.1.11)

for all i. Because the variables X i are statistically independent,

                                               
                                               N0
                         mean{N A (∞)} =             mean{X i }
                                                 i

                                           = N0 mean{X 1 }
                                           = N 0 PA ,                         (10.1.12)
88    FLUCTUATIONS WITHOUT DISSIPATION

and, likewise,
                           var{N A (∞)} = N0 PA PB .                   (10.1.13)

Combining these results with (10.1.8) and (10.1.9), we find that

                               N A∞ (∞) = N0 PA                        (10.1.14)

and
                                β2
                                   = N0 PA PB .                        (10.1.15)
                                2γ
In terms of probabilities PA and PB , the O-U process (10.1.7) becomes

 N A (t) = N (N0 PA +e−γ t (N A (0)− N0 PA ), N0 PA PB (1−e−2γ t )).   (10.1.16)

We can reasonably assume that the equilibrium probability of being within a
certain volume is proportional to that volume, or

                             PA = V A /(V A + VB )                     (10.1.17)

and
                             PB = VB /(V A + VB ).                     (10.1.18)

Using (10.1.17) to eliminate PA in (10.1.14) recovers (10.1.4), while using
(10.1.17) and (10.1.18) to eliminate both PA and PB in (10.1.15) produces an
expression for the characteristic fluctuation magnitude β 2 .
   This stochastic model of effusion extends the deterministic model, but both
models have the same built-in artificiality: they ignore location within the
compartments. For this reason, when either or both of the compartments are
large, the assumption that equilibrium probabilities PA and PB are the same
for each molecule becomes unrealistic. However, this problem doesn’t arise
when we apply the same mathematics to collections of quantum systems, as in
Problem 10.1, Two-Level Atoms.


10.2 Elastic Scattering
   A particle of mass M and speed V0 moves among objects from which it
scatters elastically, that is, without losing or gaining kinetic energy. Think,
for instance, of electrons colliding with Helium ions in a hot plasma, neutrons
diffusing through a matrix of cold material, elastically scattering photons, or
even self-propelled flagellated bacteria swimming along at roughly constant
speeds while randomly changing their heading (Berg 1993). Suppose that in
                                                        ELASTIC SCATTERING                89




Figure 10.2. Direct numerical solutions of (10.2.2), (10.2.3), and (10.2.4), describing
the trajectory of an elastically scattering particle. Axes are numbered in units of V0 γ −1 ,
and the total path length is 10 V0 γ −1 .


each small time interval dt the particle shifts its direction of propagation (in
the x-y plane) only slightly by d in such a way that
                                        
                                d =     2γ dt Nt (0, 1).                          (10.2.1)

Thus (t) is a Wiener process. Of course,

                                  (t) = N (0 , 2γ t)                             (10.2.2)

solves the stochastic differential equation (10.2.1). Here γ is a (positive definite)
scattering rate having units of inverse time and so denoted, as we shall see, in
order to emphasize the formal similarity with Brownian motion. Configuration-
space coordinates X and Y are determined by a presumed constant speed V0
and  through
                                    dX = V0 cos dt                                (10.2.3)

and
                                    dY = V0 sin dt.                               (10.2.4)


  In principle, the time evolution of these three process variables , X , and
Y completely defines the time evolution of the elastically scattering particle.
90    FLUCTUATIONS WITHOUT DISSIPATION

Yet, when we attempt to solve (10.2.3) and (10.2.4) a difficulty arises. The
trigonometric functions cos  and sin  are nonlinear in the random variable
 and, for this reason, can’t be integrated via the normal sum theorem. But
we can eliminate the nonlinearity by replacing the random angle  with the
random velocities
                                Vx = V0 cos                            (10.2.5)

and
                                Vy = V0 sin .                          (10.2.6)

The equation governing Vx comes from

              dV x = d[V0 cos ]

                   = V0 [cos( + d) − cos ]

                   = V0 [cos  cos d − sin  sin d − cos ]

                   = Vx [cos d − 1] − Vy sin d,                       (10.2.7)
                                √
which for small d and d =         2γ dt Nt (0, 1) becomes

                            (d)2
              dV x = −Vx          − Vy d
                              2
                                                
                    = −Vx γ [Nt (0, 1)]2 dt − Vy 2γ dt Nt (0, 1).       (10.2.8)

The factor [Nt (0, 1)]2 dt requires special attention. Although in the form of
a random variable, [Nt (0, 1)]2 dt can, without approximation, be replaced in
(10.2.8) with the sure variable dt. The proof is simple. The moments of
[Nt (0, 1)]2 dt and of dt are effectively identical through terms of order dt. In
particular, [Nt (0, 1)]2 dt = dt = dt and ([Nt (0, 1)]2 dt)n  ≈ dt n  =
dt n = 0 for n > 1. Thus, the role played by [Nt (0, 1)]2 dt in the stochas-
tic differential equation (10.2.8) is no different from the role played by dt.
Consequently, equation (10.2.8) reduces to
                                        
                    dV x = −γ Vx dt − Vy 2γ dt Nt (0, 1).               (10.2.9)

A similar derivation produces
                                        
                    dV y = −γ Vy dt + Vx 2γ dt Nt (0, 1).              (10.2.10)

Note that the unit normals Nt (0, 1) in the two equations (10.2.9) and (10.2.10)
                                                    ELASTIC SCATTERING           91

are completely correlated—in other words, they produce the same realizations.
These equations of motion, along with

                                   dX = Vx dt                            (10.2.11)

and
                                   dY = Vy dt,                           (10.2.12)

govern the time evolution of this multivariate, but now linear, system.
   The stochastic differential equations of motion (10.2.9) and (10.2.10) govern-
ing Vx and Vy have several noteworthy and useful properties. First, as expected,
they exactly conserve kinetic energy M(Vx2 + Vy2 )/2. To see this, use (10.2.9)
to replace dV x on the right-hand side of dV 2x = 2Vx dV x +(dV x )2 , discard terms
smaller than dt, and replace [Nt (0, 1)]2 dt with dt. The result is
                                  
       dV 2x = −2γ Vx2 dt − 2Vx Vy 2γ dt Nt (0, 1) + 2γ Vy2 dt           (10.2.13)

and similarly
                                  
       dV 2y = −2γ Vy2 dt + 2Vy Vx 2γ dt Nt (0, 1) + 2γ Vx2 dt.          (10.2.14)

Adding these produces the expected statement of conservation

                                d(Vx2 + Vy2 ) = 0,                       (10.2.15)

whose solution is Vx2 + Vy2 = V02 . Second, the equations of motion (10.2.9)
and (10.2.10) can be expressed compactly in vector form as
                                       
                d V = −γ V dt − [V ×    2γ dt Nt (0, 1)ẑ],              (10.2.16)

where V = Vx x̂ + Vy ŷ. Thus, the effect of elastic scattering is identical to the
effect of a linear drag force −γ M V plus a fluctuating magnetic field
                                       
                                M          2γ
                            B=−               Nt (0, 1)ẑ                (10.2.17)
                                Q          dt

on a particle of charge Q and mass M. As dt → 0, this fluctuating field becomes
indefinitely large while its net effect over the interval dt becomes indefinitely
small. Random variables with this behavior are said to exhibit white noise.
Third, the structure of the fundamental equations of motion (10.2.9) through
92    FLUCTUATIONS WITHOUT DISSIPATION

(10.2.12) allows us to turn any valid expression derived from them into another
valid expression by applying the transformation

                                     Vx → Vy ,                            (10.2.18)

                                     Vy → −Vx ,                           (10.2.19)

                                      X → Y,                              (10.2.20)

and
                                    Y → −X.                               (10.2.21)

Fourth, while the dynamical equations (10.2.9) and (10.2.10) are linear in the
process variables Vx and Vy , they still contain Vx Nt (0, 1) and Vy Nt (0, 1), prod-
ucts of two random variables, one of which is a normal. Because such products
are not normal variables, we still cannot use the normal sum theorem to solve
(10.2.9) and (10.2.10). Neither can we exploit the central limit theorem—
conservation of kinetic energy keeps the terms in (10.2.9) and (10.2.10) from
being statistically independent. We can, however, derive ordinary differential
equations that determine the time evolution of the moments of X , Y , Vx , and
Vy . See Problem 10.3, Mean Square Displacement.
   Taking the mean of equations (10.2.9) and (10.2.11) for Vx and X produces

                                 dVx 
                                        = −γ Vx                         (10.2.22)
                                  dt

and
                                  dX 
                                        = Vx ,                          (10.2.23)
                                   dt

which, given the sure initial conditions X (0) = x0 and Vx (0) = vx0 , are solved
by
                                  Vx  = vx0 e−γ t                       (10.2.24)

and
                                         vx0
                           X  = x0 +       (1 − e−γ t ).                (10.2.25)
                                          γ

Applying the transformation (10.2.18) through (10.2.21) to these solutions
yields Vy  = v y0 e−γ t and Y  = y0 + (v y0 /γ )(1 − e−γ t ). Furthermore,
from dX 2 = 2X dX and (10.2.11) we find that dX 2  = 2XV x dt, which,
                                                ELASTIC SCATTERING            93

with (10.2.23), produces

                           d
                              var{X } = 2 cov{X, Vx }.                 (10.2.26)
                           dt

Likewise, from d(XV x ) = XdV x + Vx dX we find

              d
                 cov{X, Vx } = var{Vx } − γ cov{X, Vx }                (10.2.27)
              dt

and, from dV 2x = 2Vx dV x + (dV x )2 ,

                     d
                        var{Vx } = −2γ var{Vx } + 2γ Vy2 .           (10.2.28)
                     dt

We can use conservation of energy (10.2.15) and the solution for Vx  (10.2.24)
to express the quantity Vy2  in (10.2.28) in terms of var{X }, cov{X, Vx }, and
var{Vx } so that

                      Vy2  = V02 − Vx2 

                             = V02 − var{Vx } − Vx 2
                                      2 −2γ t
                             = V02 − Vx0 e    − var{Vx }.              (10.2.29)

In this way, (10.2.28) becomes

         d                                       2 −2γ t
            var{Vx } = −4γ var{Vx } + 2γ (V02 − Vx0 e    ).            (10.2.30)
         dt

Equations (10.2.26), (10.2.27), and (10.2.30), are coupled, linear, ordinary
differential equations. Solving these for var{X }, we find
                         
                       V0 2       4e−γ t   e−4γ t   5
         var{X } =           γt +        −        −
                       γ            3       12      4
                            
                          Vx0 2 e−4γ t   4e−γ t            1
                      +                +        − e−2γ t −   .         (10.2.31)
                           γ      6        3               2

Applying the transformation (10.2.18) through (10.2.21) to this solution gen-
erates a similar equation for var{Y }.
   Apart from a drift velocity vd , which can also be included in this calcula-
tion, the main difference between these results and those describing Langevin’s
94   FLUCTUATIONS WITHOUT DISSIPATION

Brownian motion is the way in which the initial velocities Vx0 and Vy0 contribute
(or do not contribute) to the time evolution of the spatial variances var{X } and
var{Y }. In the very long time regime (γ t  1), elastic scattering reproduces,
through leading order in (γ t)−1 , the linear time dependence characteristic of
Brownian motion. That is,

                                                     V02 t
                            var{X } ≈ var{Y } ≈            .              (10.2.32)
                                                      γ

However, an expansion of (10.2.31) through leading order in γ t yields

                                            2γ Vy0 t 3
                                var{X } ≈                                 (10.2.33)
                                               3

and, in like manner,
                                            2γ Vx0 t 3
                               var{Y } ≈               .                  (10.2.34)
                                               3
Apparently, at first, elastic scattering contributes more to the spatial variance
in the plane normal to the initial velocity than in the direction of the initial
velocity. In contrast, as shown in (8.1.17) the initial velocities do not appear at
all in the expression for the spatial variance of a Brownian particle.


Problems
   10.1. Two-Level Atoms. A gas is composed of N0 molecules, each one of
which can occupy one of two states denoted A and B. In thermal equilibrium,
the probability that a molecule occupies a state A is proportional to the Boltz-
mann factor, e−E A /kT , and the probability that it occupies state B is proportional
to e−E B /kT , where E A and E B are allowed energy levels.
  a. Find expressions for the equilibrium probabilities PA and PB in terms
     of E A , E B , and temperature T .
  b. Given that the stochastic differential equation
                                                         
                    dN A = −γ A (N A − N A∞ )dt +         β 2 dt(0, 1)

     governs the number of molecules in state A, evaluate the parameters
     N A∞ and β 2 in terms of γ A , E A , E B , and T .

  10.2. Cross-Field Diffusion. Consider the ability of elastic scattering to
cause the diffusion of a particle with charge Q and mass M across a stationary,
                                                                PROBLEMS         95

uniform, magnetic field B = B0 ẑ. In particular, add a Lorentz force to the
equations of motion for elastic scattering (10.2.9) and (10.2.10), turning the
latter into                                    
              dV x = −γ Vx dt + Vy dt − Vy 2γ dt Nt (0, 1)
and                                          
                dV y = −γ Vy dt − Vx dt + Vx 2γ dt Nt (0, 1)
where 0 = Q B/M.
  a. Show that these equations conserve kinetic energy, that is, show that
     d(Vx2 + Vy2 ) = 0.
  b. Apply the Smoluchowski approximation—that is, set dV x = dV y = 0
     and replace Vx dt with dX and Vy dt with dY. The Smoluchowski ap-
     proximation extracts the physics of the limit in which configuration
     space diffusion is relatively large and velocity space diffusion is rela-
     tively small.
  c. Separate dX and dY into two equations. Recall that the unit normal sym-
     bols Nt (0, 1) appearing in the two equations denote the same variable.
  d. Show that X  = Y  = 0.
  e. Show that
                                             2γ V02 t
                            X 2 + Y 2  =             .
                                           [2 + γ 2 ]

   10.3. Mean Square Displacement. Show that the mean square displace-
ment of the elastically scattering particle with initial position x0 = 0, y0 = 0 is
given by
                                      2v 2
                       X 2 + Y 2  = 20 (γ t + e−γ t − 1).
                                      γ
     Appendix A

     “On the Theory of Brownian
     Motion” by Paul Langevin


I. The very great theoretical importance presented by the phenomena of Brow-
nian motion has been brought to our attention by Gouy.1 We are indebted to
this physicist for having clearly formulated the hypothesis that sees in the con-
tinual movement of particles suspended in a fluid an echo of molecular-thermal
agitation and for having demonstrated this experimentally, at least in a quali-
tative manner, by showing the perfect permanence of Brownian motion and its
indifference to external forces when the latter do not modify the temperature of
the environment.
   A quantitative verification of this theory has been made possible by Einstein,2
who has recently given a formula that allows one to predict, at the end of a given
time τ , the mean square 2x displacement x of a spherical particle in a given
direction x as the result of Brownian motion in a liquid as a function of the
radius a of the particle, of the viscosity µ of the liquid, and of the absolute
temperature T . This formula is

                                           RT 1
                                   2x =           τ,                                  (A.1)
                                           N 3π µa

where R is the ideal gas constant relative to one gram-molecule and N the
number of molecules in one gram-molecule, a number well known today and
around 8 × 1023 .
   Smoluchowski3 has attempted to approach the same problem with a method
that is more direct than that used by Einstein in the two successive demonstra-
tions he has given of his formula, and he has obtained for 2x an expression of
the same form as (1) but which differs from it by the coefficient 64/27.
   II. I have been able to determine, first of all, that a correct application of the
method of Smoluchowski leads one to recover the formula of Einstein precisely,

  “Sur la théorie du mouvement brownien” Comptes rendus Académie des Sciences (Paris) 146,
(1908) 530–533. Translation by Anthony Gythiel, first published in American Journal of Physics
65 (1997): 1079–1081. Reprinted with permission.    c 1997, American Association of Physics
Teachers.
98     APPENDIX A

and, furthermore, that it is easy to give a demonstration that is infinitely more
simple by means of a method that is entirely different.
   The point of departure is the same: the theorem of the equipartition of the
kinetic energy between the various degrees of freedom of a system in thermal
equilibrium requires that a particle suspended in a liquid possesses, in the
direction x, an average kinetic energy RT /2N equal to that of a gas molecule
of any sort, in a given direction, at the same temperature. If ξ = d x/dt is the
speed, at a given instant, of the particle in the direction that is considered, one
therefore has, for the average extended to a large number of identical particles
of mass m,
                                            RT
                                   mξ 2 =       .                            (A.2)
                                             N
   A particle such as the one we are considering, large relative to the average
distance between the molecules of the liquid and moving with respect to the
latter at the speed ξ , experiences (according to Stokes’s formula), a viscous
resistance equal to −6π µaξ . In actual fact, this value is only a mean, and
by reason of the irregularity of the impacts of the surrounding molecules, the
action of the fluid on the particle oscillates around the preceding value, to the
effect that the equation of the motion in the direction x is
                                d2x           dx
                            m        = −6π µa    + X.                        (A.3)
                                dt 2          dt
We know that the complementary force X is indifferently positive and negative
and that its magnitude is such as to maintain the agitation of the particle, which,
given the viscous resistance, would stop without it.
   Equation (3), multiplied by x, may be written as:
                      m d2x2                 dx2
                             − mξ 2
                                    = −3π µa     + X x.                      (A.4)
                      2 dt 2                 dt
   If we consider a large number of identical particles and take the mean of the
equations (4) written for each one of them, the average value of the term X x is
evidently null by reason of the irregularity of the complementary forces X . It
turns out that, by setting z = d x 2 /dt,
                             m dz            RT
                                  + 3π µaz =    .
                             2 dt            N
     The general solution
                                 RT 1         6π µa
                            z=           + Ce− m t
                                 N 3π µa
enters a constant regime in which it assumes the constant value of the first term
at the end of a time of order m/6π µa or of approximately 10−8 seconds for the
particles for which Brownian motion is observable.
                         “O N T H E T H E O R Y O F B R O W N I A N M O T I O N ”   99

    One therefore has, at a constant rate of agitation,

                                 dx2   RT 1
                                     =         ;
                                 dt    N 3π µa
hence, for a time interval τ ,
                                           RT 1
                             x 2 − x02 =           τ.
                                           N 3π µa
    The displacement x of a particle is given by

                                   x = x 0 + x ,

and, since these displacements are indifferently positive and negative,
                                              RT 1
                          2x = x 2 − x02 =           τ;
                                              N 3π µa
thence the formula (1).
   III. A first attempt at experimental verification has just been made by T. Sved-
berg,4 the results of which differ from those given by formula (1) only by about
the ratio 1 to 4 and are closer to the ones calculated with Smoluchowski’s
formula.
   The two new demonstrations of Einstein’s formula, one of which I obtained
by following the direction begun by Smoluchowski, definitely rule out, it seems
to me, the modification suggested by the latter.
   Furthermore, the fact that Svedberg does not actually measure the quantity
2x that appears in the formula and the uncertainty in the real diameter of
the ultramicroscopic granules he observed call for new measurements. These,
preferably, should be made on microscopic granules whose dimensions are
easier to measure precisely and for which the application of the Stokes formula,
which neglects the effects of the inertia of the liquid, is certainly more legitimate.

Notes
1
  Gouy, Journ. de Phys., 2d ser., 7 (1888): 561; Comptes rendus 109 (1889):
   102.
2
  A. Einstein, Ann. d. Physik, 4th ser., 17 (1905): 549; Ann. d. Physik, 4th ser.,
   19 (1906): 371.
3
  M. von Smoluchowski, Ann. d. Physik, 4th ser., 21 (1906): 756.
4
  T. Svedberg, Studien zer Lehre von den kolloı̈den Lösungen (Upsala, 1907).
      Appendix B

      Kinetic Equations

Chapter 6 presents two alternative but equivalent mathematical descriptions of
a Wiener process: one in terms of the √   random variable X (t) and its defining
stochastic differential equation d X = δ 2 dt Nt (0, 1), and the other in terms
of the probability density p(x, t) and its defining partial differential equation
                                      2 2
                               ∂p       δ    ∂ p
                                   =              .
                               ∂t       2 ∂x2
All continuous, Markov, stochastic, normal processes have a similar dual de-
scription. Each two-variable process is governed by two stochastic differential
equations of the general form
                                       
                  d V = a(X, V ) dt + b2 (X, V ) dt Nt (0, 1)            (B.1)

and
                                  d X = V dt,                              (B.2)
where the functions a(X, V ) and b(X, V ) are general enough to accommodate
many cases. What is the partial differential equation governing the equivalent
two-variable probability density p(x, v, t)?
  The key to converting between one description and the other is the identity
                                                         
                                  ∂p            d f (X, V )
                         f (x, v)    d x dv =                 ,         (B.3)
                                  ∂t                 dt
where f (X, V ) is any smooth function of X and V . Now

             ∂f        ∂f         ∂ 2 f (d V )2
       df =     dX +       dV +
             ∂X       ∂V         ∂V 2 2
             ∂f         ∂f            √               ∂ 2 f b2 dt
           =    V dt +       a dt + b2 dt Nt (0, 1) +             , (B.4)
             ∂X        ∂V                             ∂V 2 2
where we have dropped terms smaller than dt. Substituting this result into
(B.3) yields
                                                      
                    ∂p             ∂f     ∂f    b2 ∂ 2 f
                  f    d x dv = V      +a     +                     (B.5)
                    ∂t            ∂X      ∂V    2 ∂V 2
102   APPENDIX B
                                
since  b2 (X, V )Nt (0, 1) =  b2 (X (t), V (t))Ntt+dt (0, 1) = 0. Express-
ing the right-hand side of (B.5) as an integration over phase space, we have
                          
               ∂p                  ∂f      ∂f     b2 ∂ 2 f
             f    d x dv =       v     +a      +            p d x dv,     (B.6)
               ∂t                  ∂v      ∂x      2 ∂v 2

which, upon integrating the right-hand side by parts and dropping surface terms
(at infinity), produces
         
                        ∂p
               f (x, v)     d x dv
                        ∂t
                   
                                     ∂p   ∂         1 ∂2 2
              =          f (x, v) −v    −    (ap) +        (b p) d x dv. (B.7)
                                     ∂x   ∂v        2 ∂v 2

This equation holds for arbitrary function f (x, v) if and only if

                    ∂p    ∂p    ∂       1 ∂2 2
                       +v    = − (ap) +        (b p),                     (B.8)
                    ∂t    ∂x    ∂v      2 ∂v 2
which is the kinetic equation for arbitrary characterizing functions a(x, v) and
b2 (x, v).
 The O-U process stochastic differential equations are d V = −γ V dt +
  β 2 dt Nt (0, 1) and d X = V dt. Thus a = −γ V , b2 = β 2 , and the equivalent
kinetic equation is the Fokker-Planck equation

                      ∂p    ∂p    ∂       β2 ∂2 p
                         +v    = γ (vp) +         .                       (B.9)
                      ∂t    ∂x    ∂v      2 ∂v 2
The simple harmonicoscillator stochastic differential equations are d V =
−ω2 X dt − γ V dt + β 2 dt Nt (0, 1) and d X = V dt. The equivalent kinetic
equation,
                ∂p      ∂p     ∂                    β2 ∂2 p
                    +v     =     [(ω2 x + γ v) p] +         ,        (B.10)
                 ∂t     ∂x    ∂v                    2 ∂v 2
is one example of the Kramers kinetic equation
                                            
         ∂p     ∂p     ∂     −F(x, v)                β2 ∂2 p
            +v      =                   + γv p +              ,      (B.11)
         ∂t     ∂x     ∂v        m                    2 ∂v 2

describing the effect of an arbitrary smooth force F(x, v) and a constant fluc-
tuation parameter β 2 (Gardiner 1994).
   Answers to Problems

Chapter 1
            
            n                  
                               n
 1.2   a.         Pi and 1 −         Pi
            i=1                i=1
                  
                  n
       b. 1 −       (1 − Pi )
                  i=1


Chapter 2
 2.1 mean{X } = 3.50, var{X } = 2.92, std{X } = 1.71, skewness{X } = 0,
     and kurtosis{X } = 1.73
                                            ti Ri  2      ti
 2.3   a. mean{R} = nRi , var{R} = n                 ,t = √
                                              100             n
       b. mean{R} = 50, var{R} = 102 , tolerance{R} = 6.3%
 2.4   a. mean{X i } = V /Vo , var{X i } = (V /Vo )(1 − V /Vo )
       b. mean{N } = No (V /Vo ), var{N } = No (V /Vo )(1 − V /Vo ), and
                                         
                   var{N }/ mean{N } = (1 − V /Vo )/(No V /Vo )

Chapter 3
 3.3   a. mean{X } = nµ, var{X } = nσ 2 , and X 2  = nσ 2 + n 2 µ2
                                                       n
       b. mean{X } = (n/2)(xr − xl ), var{X } = (xr + xl ) and
                                                       4
                 n                     n2
          X  = (xr + xl ) + (xr − xl )
            2                   2                     2
                  4                    4
 3.4   a. mx 2
          √
       b. m/n
 3.5   a. mean{X i } = 1/2, var{X i } = 1/8
       b. mean{N } = n/2, var{N } = n/8
       c. mean{N /n} = 1/2, var{N /n} = 1/(8n)

Chapter 4
 4.1   a. p(x) = d/[π(x 2 + d 2 )] for −∞ < x < ∞. Note that this
          probability distribution is that of a Cauchy variable C(0, d).
104     ANSWERS TO PROBLEMS

  4.3    b. λ/(λ − t) for t < λ
         c. 1/λ2
         d. n!/λn .
  4.4    a. 0.0361.

Chapter 5
  5.3     a. ab
          b. (a + b)2 + c2
          c. a 2 + b2 + c2 .

Chapter 6
  6.1        δ2t 
          a. 
                t
          b.    t
  6.2 t = x12 /δ 2 .
  6.3   a. X (t) = N0t (αt, δ 2 t).
                         e−(x−αt) /2δ t
                                    2   2

          b. p(x1 t) =     √
                             2π δ 2 t

Chapter 7
  7.1     a. γ = F/(Mvd )
          b. β 2 = 2FkT /(M 2 vd ).

Chapter 8
        √
  8.2 1/ 2γ t.
  8.3   a. (8β 2 v y0 3 )/(3g 3 )
           
             16γ 3 v 3y0
        b.
                 3g 3
        c. 0.0007

Chapter 9
                                                
  9.1 X (t) = N x0 e−ω t/γ , β 2 /2ω2 γ 1 − e−2ω t/γ .
                      2                         2



  9.2 mean{X (t)} = e−ωt (x0 + v0 t + ωx0 t),
                    β2
      var{X (t)} =     [1 − e−2ωt (1 + 2ωt + 2ω2 t 2 )]
                   4ω3
                                           ANSWERS TO PROBLEMS        105

Chapter 10
                                                    
 10.1   a. PA = e−E A /kT / e−E A /kT + e−E B /kT ,
                                                    
           PB = e−E B /kT / e−E A /kT + e−E B /kT .
                                                        
        b. N A∞ = N0 e−E A /kT / e−E A /kT + e−E B /kT ,
                                                                2
           β 2 = 2γ A N0 e−(E A +E B )/kT / e−E A /kT + e−E B /kT .
     References

Berg, Howard C. Random Walks in Biology. Princeton, N.J.: Princeton University Press,
  1993. A brief introduction to the uses of random processes in biology that emphasizes
  the diffusion equation.
Brown, Robert. Philosophical Magazine 4 (1828): 161. Also in W. F. Magie, ed., Source
  Book in Physics. New York: McGraw-Hill, 1965. Pp. 251–55.
Bulmer, M. G. Principles of Statistics. New York: Dover, 1967. An excellent, compact
  introduction to probability and statistics.
Chandrasekhar, Subrahmanyan. “Stochastic Problems in Physics and Astronomy,” Re-
  views of Modern Physics, January 1943. Reprinted in Nelson Wax, ed., Selected
  Papers on Noise and Stochastic Processes, New York: Dover, 1954. Many physicists
  have learned about stochastic processes from this quite demanding review article.
Coulston, C. C. Dictonary of Scientific Biography. New York: Scribner’s, 1973. A
  standard multivolume biographical reference.
Courant, R., and H. Robbins. What Is Mathematics? New York: Oxford University
  Press, 1941. This book attempts to answer the question in its title by reproducing
  much important mathematical analysis. The result is an elegant and solid introduction
  to mathematics that has won the approval of two generations of readers and has
  remained in print for over sixty years.
Einstein, Albert. “Investigations on the Theory of Brownian Movement,” Annalen der
  Physik (Leipzig) 17 (1905): 549–60. English translations appear in Collected Papers
  of Albert Einstein, 2:123–34, Anna Beck, trans. (Princeton: Princeton University
  Press, 1989), in Albert Einstein, Investigations on the Theory of the Brownian Move-
  ment (New York: Dover, 1956), 1–18, and in Einstein’s Miraculous Year (Princeton:
  Princeton University Press, 1998). This is Einstein’s most cited paper.
Fry, T. C. Probability and Its Engineering Uses. New York: Van Nostrand, 1928.
Gardiner, C. W. Handbook of Stochastic Methods. New York: Springer-Verlag, 1994.
  This book is a compendium of useful results, more an encyclopedia than a textbook.
Gillespie, Daniel. Markov Processes: An Introduction for Physical Scientists. New York:
  Academic Press, 1992. At a slightly more advanced level than the present book and
  substantially more comprehensive, Gillespie’s book is my primary recommendation
  for further study.
        . “Mathematics of Brownian Motion and Johnson Noise,” American Journal of
  Physics 64 (1996): 225–40.
Hacking, Ian. The Emergence of Probability. Cambridge: Cambridge University Press,
  1975. A philosophical and historical analysis of various interpretations of the concept
  of probability.
Johnson, J. B. “Thermal Agitation of Electricity in Conductors,” Physical Review 32
  (1928): 97.
Kerrich, J. E. An Experimental Introduction to the Theory of Probability. Copenhagen:
  Munksgaard, 1946.
108    REFERENCES

Klafter, J., M. F. Shlesinger, and G. Zumofen. “Beyond Brownian Motion,” Physics
   Today, February 1996, 33. Describes the concept of a Levy process and its applications
   to “nonlinear, fractal chaotic, and turbulent systems.”
         . “Above, below, and beyond Brownian Motion,” American Journal of Physics
   67 (1999): 1253–59.
Langevin, Paul. “On the Theory of Brownian Motion,” Comptes Rendues 146 (1908):
   530–533. An English translation of this paper, taken from D. S. Lemons and A.
   Gythiel, “Paul Langevin’s 1908 Paper ‘On the Theory of Brownian Motion”’ Amer-
   ican Journal of Physics 65 (1997): 1079–81, is reproduced, with permission, in
   Appendix A.
Laplace, Peirre Simon. A Philosophical Essay on Probabilies. New York: Dover, 1951.
   Originally published in 1820, this is an early, semipopular account of probability
   theory by the man who initiated the modern phase of its development.
Lemons, D. S., and D. L. Kaufman. “Brownian Motion of a Charged Particle in a
   Magnetic Field,” IEEE Transactions on Plasma Science 27 (1999): 1288–96.
Springer, M. D. The Algebra of Random Variables. New York: Wiley, 1979. This is a
   specialist’s monograph at a considerably higher level of difficulty than the present
   book.
Stigler, S. M. The History of Statistics. Cambridge, Mass.: Harvard University Press,
   1986.
Uhlenbeck, G. E., and L. S. Ornstein. “On the Theory of Brownian Motion,” Physical
   Review 36 (1930): 823–41. This paper also appears in Nelson Wax, ed., Selected
   Papers on Noise and Stochastic Processes. New York: Dover, 1954.
     Index

A p following a page number indicates the         Einstein, Albert, 49, 53, 60
reference is to a problem.                        elastic scattering process, 88–95
                                                  electrophoresis, 51
arithmetical average, 12–13                       equal a priori probabilities, 4
autocorrelation, 14 p, 21 p, 49–50 p              expected value, 7, 23
autocovariance, 21 p                              expected value operator, 9
                                                  exponential random variable, 30–31 p
Bernoulli, Jacob, 13
Brown, Robert, 17                                 failure modes, 5 p
Brownian motion, 17; as a continuous process,     Fick’s law, 49
  45–46; with drift 50–51 p; and Einstein,        fluctuations: in coin flip data, 2–3, 5 p; in
  45–46, 49, 53, 66, 68-69; and                      density, 15–16 p, 87
  fluctuation-dissipation theorem, 59–60; and     fluctuation-dissipation theorem: and Brownian
  Langevin, 63–66, 97–99; as limit of elastic        motion, 59–60; and harmonic oscillator, 75,
  scattering, 94; modeled with random walk,          79–80, 83 p; and Johnson noise, 61–62
  18–19, 20 p; in a plane, 20–21 p, 51; related   Fokker-Planck equation, 102
  to “complementary force,” 54; signature
  property of, 19, 66                             harmonic oscillator process, 75–80; critical
Brownian projectile, 69–72, 72–73 p                 damping limit of, 84 p; energy of, 83 p;
                                                    Ornstein-Uhlenbeck process limit of, 84 p;
Cauchy, Augustin, 26
                                                    Smoluchowski limit of, 83 p
Cauchy process, 45
Cauchy random variable, 26–27, 35, 37
                                                  indicator random variable, 15 p, 87
central limit theorem, 36–38, 45, 92
                                                  inductive probability, 3–4
Chandrasekhar, Subrahmanyan, 75
                                                  IngenHousz, Jan, 17
coefficient of variation, 14
coin-flip experiment, 2–3, 5 p, 21 p
                                                  Johnson, J. B., 60
“complementary force,” 54, 98
                                                  Johnson noise, 60–62, 62 p
concentration pulse, 50 p
                                                  jointly normal random variables, 35–36, 39 p
continuity, 42
continuity equation, 49
correlation, 10–11, 14 p; temporal, 44            Kerrich, J. E., 2–3
covariance, 10, 21 p                              kinetic equations, 48–49, 101–2
cubic equation, 78                                Kirchoff’s law, 41, 60–61
cyclotron motion process, 80–83                   Kramer’s equation, 102
                                                  kurtosis, 8, 25–26
density fluctuations, 15–16 p, 85–88
deterministic process, 1–2                        Langevin equation, 54–57, 64, 98
dice parameters, 14 p                             Langevin, Paul, 53, 60, 97
diffraction, single-slit, 29–30 p                 Laplace, Pierre Simon, 4
diffusion constant, 19–20, 49, 69                 leptokurtosis, 26
diffusion equation, 48–49                         Levy, Paul, 45
dimensionless variables, 58                       Levy process, 45

effusion process, 85–88                           Markov, A. A., 42
110     INDEX

Markov process, 42                                random process (cont.), projectile, 69–71;
mathematical agnosticism, 4                          random walk, 18–19, 20–21 p; RC circuit,
mean sum theorem, 9                                  60–62; RL circuit, 62 p; Wiener, 43–45, 53,
moments, 7–8, 28; moments of a normal, 30.           61, 89. See also Brownian motion
 See also expected value                          random variable, 1–4, 23; Cauchy, 26–27, 35,
moment-generating function, 27–29; of                37; combining measurements of, 12–14;
 exponential random variable 30 p; of                exponential, 30–31 p; indicator, 15, 87;
 identically distributed random variable, 29,        Levy, 45; normal, 25–26, 28, 29, 30 p,
 38; of normal 29, 30 p; of Poisson, 31 p; of        33–36, 39 p; Poisson, 31 p; uniform, 24–25,
 uniform, 28                                         28, 39 p
Monte-Carlo simulation: of Einstein’s             random walk, 18–19, 20–21 p
 Brownian motion, 46–47; of                       resistors in series, 14 p
 Ornstein-Uhlenbeck process, 57–59; of
 Langevin’s Brownian motion, 66–68                sedimentation, 51
multinomial expansion, 38                         shape parameters of a random variable, 8
                                                  single-slit diffraction, 29–30 p
normal process, 45                                skewness, 8
normal random variable, 25–26, 28, 30 p,          Smoluchowski approximation, 68–69; of
  33–36, 39 p; moment-generating function            cyclotron motion, 82–83, 94–95 p; of
  of, 29                                             harmonic oscillator, 83 p; of
normal sum theorem, 34–35                            Ornstein-Uhlenbeck process, 68–69
                                                  standard deviation, 8
Ornstein-Uhlenbeck process, 54–59, 63–66; in      statistic, 13
  effusion, 86; as limit of harmonic oscillator   statistical independence, 4–5; of cyclotron
  process, 83 p; relation of, to Brownian            variables, 83, 84 p; of failure modes, 5 p; of
  motion, 66, 69; in two-level atom process,         jointly occurring events, 10
  94 p                                            Stigler’s law of eponymy, 17
                                                  stochastic differential equation, 44
platykurtosis, 26                                 stochastic process. See random process
Poisson random variable, 31 p                     Stokes’s law, 60, 98, 99
precision of measurements, 14                     sure process, 41–42
probability: interpretations of, 2–4; and light   sure variable, 1–2
  29–30 p; of jointly occurring events, 5         Svedberg, T., 99
probability density: of continuous random
   variables, 23; of correlated normal            two-level atom, 94 p
   variables, 36; of Ornstein-Uhlenbeck
   process, 57; of Wiener process, 48             uniform random variable, 24–25, 28, 39 p
projectile motion, 1, 69–71, 72                   update equation, 47, 58

random process, 1, 42–45, 48; autocorrelated      variance, 8
  49–50 p; continuous, 42; cyclotron motion,      variance sum theorem, 10–11
  80–83; effusion, 85–88; elastic scattering,
  88–94; harmonic oscillator, 75–80;              white noise, 91
  Ornstein-Uhlenbeck, 54–59, 63–66;               Wiener process, 43–45, 53, 61, 89



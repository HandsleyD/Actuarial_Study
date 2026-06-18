---
normalized_id: shared-solutions-ljundquist-and-sargent-solutions
exam_code: SHARED
material_scope: ljundquist and sargent solutions.pdf
material_group: shared
document_type: solutions
source_repo_path: resources/source-material/shared/Ljundquist and Sargent Solutions.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-solutions-ljundquist-and-sargent-solutions

           Exercises
              in
Recursive Macroeconomic Theory
        preliminary and incomplete


           Stijn Van Nieuwerburgh
             Pierre-Olivier Weill
              Lars Ljungqvist
             Thomas J. Sargent
                                  Introduction
    This is a first version of the solutions to the exercises in Recursive Macroeco-
nomic Therory, First Edition, 2000, MIT press, by Lars Ljungqvist and Thomas J.
Sargent. This solution manuscript is currently only available on the web. We in-
vite the reader to bring typos and other corrections to our attention. Please email
sargent@stanford.edu, poweill@stanford.edu or svnieuwe@stanford.edu.
We will regularly update this manuscript during the following months. Some
questions ask for computations in matlab. The program files can be downloaded
from the ftp site zia.stanford.edu/pub/sargent/rmtex.
The authors, Stanford University, March 15, 2003.
                                 Contents

  Introduction                                               2
List of Figures                                              5
Chapter 1. Time series                                       7
Chapter 2. Dynamic programming                              33
Chapter 3. Practical dynamic programming                    37
Chapter 4. Linear quadratic dynamic programming             43
Chapter 5. Search, matching, and unemployment               55
Chapter 6. Recursive (partial) equilibrium                  83
Chapter 7. Competitive equilibrium with complete markets    95
Chapter 8. Overlapping generation models                   109
Chapter 9. Ricardian equivalence                           161
Chapter 10. Asset pricing                                  163
Chapter 11. Economic growth                                175
Chapter 12. Optimal taxation with commitment               187
Chapter 13. Self-insurance                                 201
Chapter 14. Incomplete markets models                      211
Chapter 15. Optimal social insurance                       223
Chapter 16. Credible government policies                   257
Chapter 17. Fiscal-monetary theories of inflation          267
Chapter 18. Credit and currency                            283
Chapter 19. Equilibrium search and matching                307
Index                                                      343



                                       3
                     List of Figures

1   Exercise 1.7 a                                                21
2   Exercise 1.7 b                                                22
3   Exercise 1.7 c                                                22
4   Exercise 1.7 d                                                23
5   Exercise 1.7 e                                                23
6   Exercise 1.7 f                                                24
7   Exercise 1.7 g                                                24
1   Exercise 3.1 : Value Function Iteration VS Policy Improvement 41

1   Exercise 4.5                                                  52

1   Exercise 8.1                                                 113
1   Exercise 10.1 : Hansen-Jagannathan bounds                    165

1   Exercise 13.2                                                205

1   Exercise 14.2 a                                              214
2   Exercise 14.2 b                                              214
3   Exercise 14.2 c                                              215
4   Exercise 14.5 : Cross-sectional Mean and Dispersion of
    Consumption and Assets                                       221

1   Exercise 15.2                                                 226
2   Exercise 15.10 a : Consumption Distribution                   238
3   Exercise 15.10 b : Consumption, Promised Utility, Profits and
    Bank Balance in Contract that Maximizes the Money Lender’s
    Profits                                                       239
4   Exercise 15.10 c : Consumption, Promised Utility, Profits and
    Bank Balance in Contract that Gives Zero Profits to Money
    Lender                                                        240
5   Exercise 15.11 a : Pareto Frontier, β = 0.95                  241
6   Exercise 15.11 b : Pareto Frontier, β = 0.85                  242
7   Exercise 15.11 c : Pareto Frontier, β = 0.99                  243
                             5
6                     LIST OF FIGURES

8    Exercise 15.12 a : Consumption, Promised Utility, Profits and
     Bank Balance in Contract that Maximizes the Money Lender’s
     Profits                                                       245
9    Exercise 15.12 b : Consumption Distribution                   246
10   Exercise 15.12 c : Wage-Tenure Profile                        247
11   Exercise 15.14 a : Profits of Money Lender in Thomas-Worral
     Model                                                         250
12   Exercise 15.14 b Evolution of Consumption Distribution over
     Time                                                          251
1    Exercise 19.4 a: implicit equation for θi                      319
2    Exercise 19.4 b : Solving for unemployment level in each skill
     market                                                         320
3    Exercise 19.4 b : Solving for the aggregate unemployment level 321
4    Exercise 19.5 : Solving for equilibrium unemployment           323
5    Execise 19.6 : Solving for equilibrium unemployment            326
CHAPTER 1

Time series




     7
8                                      1. TIME SERIES

    Exercise 1.1.
                                                 µ·           ¸ ·    ¸¶
                                                      .9 .1       .5
Consider the Markov Chain (P, π0 ) =                           ,        , where the state
                                                      .3 .7       .5
                 · ¸
                   1
space is x =         . Compute the likelihood of the following three histories for
                   5
t = 0, 1, 2, 3, 4:

a. 1,5,1,5,1.
b. 1,1,1,1,1.
c. 5,5,5,5,5.

    Solution
The probability of observing a given history up to t = 4, say (xi5 , xi4 , xi3 , xi2 , xi1 , xi0 ),
is given by
                 P (xi4 , xi3 , xi2 , xi1 , xi0 ) = Pi4 ,i3 Pi3 ,i2 Pi2 ,i1 Pi1 ,i0 π0i0
where Pij = Prob (xt+1 = xj |xt = xi ) and π0i = Prob (x0 = xi ).

By applying this formula one obtains the following results:

a. P (1, 5, 1, 5, 1) = P21 P12 P21 P21 π01 = (.3) (.1) (.3) (.1) (.5) = .00045.
b. P (1, 1, 1, 1, 1) = P11 P11 P11 P11 π01 = (.9)4 (.5) = .3281.
c. P (5, 5, 5, 5, 5) = P22 P22 P22 P22 π02 = (.7)4 (.5) = .12.

    Exercise 1.2.
                                            ¸·
                                         1
A Markov chain has state space x =            . It is known that E (xt+1 |xt = x) =
                                         5
·      ¸                            ·        ¸
   1.8             ¡             ¢     5.8
         and that E x2t+1 |xt = x =            . Find a transition matrix consistent
   3.4                                 15.4
with these conditional expectations. Is this transition matrix unique (i.e., can you
find another one that is consistent with these conditional expectations)?

    Solution
From the formulas for forecasting functions of a Markov chain, we know that

                                 E (h(xt+1 )|xt = x) = P h,
where h(x) is a function of the state represented by an n × 1 vector h. Applying
this formula yields:
                                              ¡             ¢
                  E (xt+1 |xt = x) = P x and E x2t+1 |xt = x = P x2 .
This yields a set of 4 linear equations:
                                  1. TIME SERIES                                   9

                  ·      ¸     · ¸          ·       ¸       ·    ¸
                     1.8          1           5.8             1
                           =P          and            =P           ,
                     3.4          5           15.4            25
which can be solved for the 4 unknowns. Alternatively, using matrix notation,
we¡ can rewrite¢ this as e = P h, where e = [e1 , e2 ], e1 = E (xt+1 |xt = x) , e2 =
E x2t+1 |xt = x and h = [h1 , h2 ], where h1 = x and h2 = x2 :
                           ·            ¸     ·         ¸
                             1.8 5.8             1 1
                                          =P              .
                             3.4 15.4            5 25
Then P is uniquely determined as P = eh−1 . Uniqueness follows from the fact
that h1 and h2 are linearly independent. After some algebra we obtain a well-
defined stochastic matrix:
                                       ·        ¸
                                          .8 .2
                                   P =            .
                                          .4 .6



   Exercise 1.3.
Consumption is governed by an n state Markov chain P, π0 where P is a stochastic
matrix and π0 is an initial probability distribution. Consumption takes one of the
values in the n×1 vector c̄. A consumer ranks stochastic processes of consumption
t = 0, 1 . . . according to
                                      X∞
                                   E      β t u(ct ),
                                     t=0
                                                           1−γ
where E is the mathematical expectation and u(c) = c1−γ for some parameter
                                    P
γ ≥ 1. Let ui = u(c̄i ). Let vi = E[ ∞     t
                                      t=0 β u(ct )|c0 = c̄i ] and V = Ev, where
β ∈ (0, 1) is a discount factor.
a. Let u and v be the n × 1 vectors whose ith components are ui and vi , re-
spectively.
     P      Verify the following formulas for v and V : v = (I − βP )−1 u, and
V = i π0,i vi .
b. Consider the ·following
                     ¸      two
                             · Markov
                                   ¸       processes:
                  .5           1 0
Process 1: π0 =        ,P =          .
                  .5           0 1
                · ¸          ·       ¸
                  .5           .5 .5
Process 2: π0 =        ,P =            .
                  .5           .5 .5
                                    · ¸
                                       1
For both Markov processes, c̄ =          . Assume that γ = 2.5, β = .95. Compute
                                       5
unconditional discounted expected utility V for each of these processes. Which
of the two processes does the consumer prefer? Redo the calculations for γ = 4.
Now which process does the consumer prefer?
c. An econometrician observes a sample of 10 observations of consumption rates
10                                     1. TIME SERIES

for our consumer. He knows that one of the two preceding Markov processes
generates the data, but not which one. He assigns equal “prior probability” to
the two chains. Suppose that the 10 successive observations on consumption are as
follows: 1, 1, 1, 1, 1, 1, 1, 1, 1, 1. Compute the likehood of this sample under process
1 and under process 2. Denote the likelihood function Prob(data|Modeli ), i = 1, 2.
d. Suppose that the econometrician uses Bayes’ law to revise his initial proba-
bility estimates for the two models, where in this context Bayes’ law states:
                                Prob(data|Modeli ) · Prob(Modeli )
          Prob(Modeli |data) = P                                      .
                                 j Prob(data|Modelj ) · Prob(Modelj )

The denominator of this expression is the unconditional probability of the data.
After observing the data sample, what probabilities does the econometrician place
on the two possible models?
e. Repeat the calculation in part d, but now assume that the data sample is
1, 5, 5, 1, 5, 5, 1, 5, 1, 5.

     Solution
                         P∞     t
a. Given that vi = E [     t=0 β u(ct )|c0 = ci ] , we can apply the usual vector nota-
tion (by stacking ):
                                       "∞                       #
                                        X
                                v=E           β t u(ct )|c0 = c .
                                        t=0
To apply the forecasting function formula in the notes:
                         ∞
                         X
                     E         β k (h(xt+k )|xt = x) = (I − βP )−1 h.
                         k=0
Let h(x) = u(c). Then it follows immediately that:
                        "∞                     #
                          X
                  v=E         β t u(ct )|c0 = c = (I − βP )−1 u.
                                t=0
Second, to compute V = Ev, simply note that in general the unconditional
                                                                    P      expec-
tation at time 0 of a foreasting function h is given by: E(h(x0 )) = ni=1 hi π0,i =
 0
π0 h, or, in particular:
                                              n
                                              X
                                       V =          vi π0,i .
                                              i=1
                                               P
Also, you should be able to verify that V = E [ ∞     t
                                                 t=0 β u(ct )] by applying the law
of iterated expectations.
b. the matlab program exer0103.m computes the solutions.
Process1 and Process 2: V = −7.2630 for γ = 2.5
Process1 and Process 2: V = −3.36 for γ = 4
                                   1. TIME SERIES                              11

Note that the consumer is indifferent between both of the consumption processes
regardless of γ.
c. Applying the same logic as in exercise in, construct the likelihood function
as the probability of having observed this partical history of consumption rates,
conditional on the model.

                       Prob(data|Model1 ) = (P1,1 )9 (.5) = .5,

              Prob(data|Model2 ) = (P1,1 )9 (.5) = .510 = .0009765.
d. Applying Bayes’ law:
                                 Prob(data|Model1 )Prob(Model1 )
       Prob (Model1 |data) = P
                                  i Prob(data|Modeli )Prob(Modeli )
                                              .5Prob(Model1 )
                           =                                          ,
                               .5Prob(Model1 ) + .000976Prob(Model2 )
and by the same logic:

                                             .000976Prob(Model2 )
          Prob (Model2 |data) =                                         .
                                 .5Prob(Model1 ) + .000976Prob(Model2 )
e. Consider the sample (1, 5, 5, 1, 5, 5, 1, 5, 1, 5)

           Prob(data|Model1 ) = P21 P22 P12 P21 P22 P12 P21 P12 P21 (.5) =
                              = 0,


            Prob(data|Model2 ) = P21 P22 P12 P21 P22 P12 P21 P12 P21 (.5)
                               = .510 = .0009765.
Applying Bayes’ law:
                                   Prob(data|Model1 )Prob(Model1 )
           Prob (Model1 |data) = P
                                    i Prob(data|Modeli )Prob(Modeli )
                               = 0,
which implies:

                              Prob (Model2 |data) = 1.



      Exercise 1.4.
Consider the univariate stochastic process
                                       4
                                       X
(1)                       yt+1 = α +         ρj yt+1−j + cwt+1 ,
                                       j=1
12                                   1. TIME SERIES

where wt+1 is a scalar martingale difference sequence    P       adapted to
Jt = [wt , . . . , w1 , y0 , y−1 , y−2 , y−3 ], α = µ(1 − j ρj ) and the ρj ’s are such that
the matrix
                                                            
                                              ρ1 ρ2 ρ3 ρ4 α
                                            1 0 0 0 0
                                                            
                                     A=    0 1 0 0 0 ,
                                                             
                                            0 0 1 0 0
                                               0 0 0 0 1
has all of its eigenvalues in modulus bounded below unity.

a. Show how to map this process into a first-order linear stochastic difference
equation.

b. For each of the following examples, if possible, assume that the initial con-
ditions are such that yt is covariance stationary. For each case, state the ap-
propriate initial conditions. Then compute the covariance stationary mean and
variance of yt assuming the following parameter sets of parameter values: i.
     £               ¤                         £              ¤
ρ = 1.2 −.3 0 0 , µ = 10, c = 1. ii. ρ = 1.2 −.3 0 0 , µ = 10, c = 2.
          £            ¤                          £           ¤
iii. ρ = .9 0 0 0 , µ = 5, c = 1. iv. ρ = .2 0 0 .5 , µ = 5, c = 1.

      £         ¤
v. ρ = .8 .3 0 0 , µ = 5, c = 1. Hint 1: The Matlab program doublej.m

, in particular, the command X=doublej(A,C*C’) computes the solution of the
matrix equation A0 XA + C 0 C = X. This program can be downloaded from
ftp://zia.stanford.edu/pub/sargent/webdocs/matlab.

Hint 2: The mean vector is the eigenvector of A associated with a unit eigenvalue,
scaled so that the mean of unity in the state vector is unity.
                                                               P
c. For each case in part b, compute the hj ’s in Et yt+5 = γ0 + 3j=0 hj yt−j .
                                                          P∞       k
                                                                             P3
d. For each case in part b, compute the h̃j ’s in Et        k=0 .95 yt+k =      j=0 h̃j yt−j .

e. For each case in part b, compute the autocovariance E(yt − µy )(yt−k − µy ) for
the three values k = 1, 5, 10.

     Solution

a. To compute the solutions this problem , you can use the program ex0104.m .

Mapping the univariate stochastic process into a first-order linear stochastic dif-
ference equation:
                                     1. TIME SERIES                             13

The first-order linear difference equation corresponding to (1) is :
                                                         
             yt+1       ρ1      ρ2    ρ3    ρ4   α     yt         c
            yt   1           0     0     0    0   yt−1   0 
                                                         
(2)         yt−1  =  0       1     0     0    0   yt−2  +  0  wt+1 ,
                                                         
            yt−2   0         0     1     0    0   yt−3   0 
             1          0       0     0     0    1     1          0
or, equivalently:

                              xt+1 = Axt + Cwt+1 ,
                                £                        ¤
                          x0t
for t = 0, 1, 2 . . .,where  = yt+1 yt yt−1 yt−2 1 , x0 is a given initial
condition, A is a 5 × 5 matrix and C is an 5 × 1 matrix.
b. Assume that the initial conditions are such that yt is covariance stationary.
Consider the initial vector x0 as being drawn from a distibution with mean µ0
and covariance matrix Σ0 .
Given stationarity, we can derive the unconditional mean of the process by taking
unconditional expectations of eq.(1) :
                                                 4
                                                 X
                                     µ=α+µ             ρj ,
                                                 j=1
or, equivalently:
                                           Ã     4
                                                            !
                                                 X
                                µ=α 1−                 ρj       .
                                                 j=1
This implies that we can write:
                                     4
                                     X
                     yt+1 − µ =            ρj (yt+1−j − µ) + cwt+1 ,
                                     j=1
or

                             x
                             et+1 = Ae
                                     xt + Cwt+1 ,
                              0
                                 £                ¤
      et+1 = xt+1 − µ where µ = µ µ µ µ 1 .
where x
As you know, the second moments can be derived by calculating Cx (0) = Ee    e0t+1 ,
                                                                        xt+1 x
which produces a discrete Lyapunov equation:

                            Cx (0) = ACx (0)A0 + CC 0 .
Stationarity requires two conditions:
       • All of the eigenvalues of A are less than unity in modulus, except pos-
         sibly for the one associated with the constant term
       • the initial condition x0 needs to be drawn from the stationary distribu-
         tion, described by its first two moments µ and Cx (0)
14                                  1. TIME SERIES
      £          ¤
i. ρ = 1.2 −3 0 0 , µ = 10,c = 1
This implies:
                                                   
             yt+1       1.2     −.3   0   0
                                          1      yt          1
            yt   1           0     0      
                                          0   yt−1   0 
                                          0               
                                                             
(3)         yt−1  =  0       1     0   0 
                                          0    yt−2  +  0  w1,t+1 .
                                                   
            yt−2   0         0     1   0   yt−3   0 
                                          0
             1          0       0     0   0
                                          1      1           0
                                  £                    ¤
The eigenvalues are given by λ = 0 0 .35 .84 1 . The relevant eigenvalues
are smaller than unity. The first condition for stationarity is satisfied. Now, we
can solve the discrete Lyupanov equation for Cx (0).
Recall from the previous handout that:
                                                               j−1
                                                        0
                                                               X                0
            Et (xt+j − E(xt+j |Jt )) (xt+j − E(xt+j |Jt )) =         Al CC 0 Al .
                                                               l=0
The matlab program doublej.m calculates the limj→∞ of the above expression
(type help doublej.m to verify). As one would expect, if the system is stationary,
this limit converges to the unconditional second moment:

                                                                        ∞
                                                                        X               0
     Cx (0) = lim Et (xt+j − E(xt+j |Jt )) (xt+j − E(xt+j |Jt ))0 =           Al CC 0 Al .
               j→∞
                                                                        l=0
                0
Note that CC is a matrix of zeros in this case except for the (1,1)st element
which is 1.
To calculate Cx (0), simply type V = doublej(A, CC 0 ):
                                                         
                                7.42 6.85 6.00 5.14 0
                               6.85 7.42 6.85 6.00 0 
                                                         
                     Cx (0) = 
                               6.00 6.85  7.42  6.85   0 .
                                                          
                               5.14 6.00 6.85 7.42 0 
                                0    0     0     0      0
Obviously, the diagonal elements (except for the zero element associated with the
constant)
       £ contain the variance
                         ¤       of yt .
ii. ρ = 1.2 −3 0 0 , µ = 10,c = 2
The 1st part of the answer to i. is still valid, as A has not changed. Its eigenvalues
are bounded below untiy in modulus. There is a covariance stationary distribution
associated with this system.
                                                                
                              29.71 27.42 24.00 20.57 0
                            27.42 29.71 27.42 24.00 0 
                                                                
                  Cx (0) = 
                            24.00 27.42 29.71 27.42 0  .
                                                                 
                            20.57 24.00 27.42 29.71 0 
                              0          0       0      0      0
                                    1. TIME SERIES                            15
       £             ¤
iii.ρ = .9 0 0 0 , µ = 5,c = 1
Consider the associated first-order difference equation:
                                                     
              yt+1       .9     0   0   0  .5      yt           1
             yt   1          0   0   0  0     yt−1   0 
                                                     
(4)          yt−1  =  0      1   0   0  0     yt−2  +  0  wt+1 .
                                                     
             yt−2   0        0   1   0  0   yt−3   0 
              1          0      0   0   0  1       1            0
                                      £                   ¤
The eigenvalues are given by λ0 = 0 0 0 0.9 1 . Note that all the eigen-
values are bounded below unity except for the one associated with the constant
term.
                                                              
                                 5.26 4.73 4.26 3.83 0
                                4.73 5.26 4.73 4.26 0 
                                                              
                      Cx (0) = 
                                4.26 4.73 5.26 4.73 0  ,
                                                               
                                3.83 4.26 4.73 5.26 0 
                                 0      0      0      0     0
          £                 ¤
and µ0 = 5 5 5 5 1 .
In order for the sequence {xt } to satisfy stationarity, the intitial value x0 needs to
be drawn from the stationary distribution with µ and Cx (0) as the unconditional
moments.£               ¤
iv. ρ = .2 0 0 .5 , µ = 5, c = 1,
                                                       
                                    .2 0 0 .5 1.5
                                  1 0 0 0 0 
                                                       
                             A=   0   1   0  0   0    .
                                                        
                                  0 0 1 0 0 
                                    0 0 0 0 1
                                            £                                           ¤
As before, calculate the eigenvalues: λ0 = .8957 .0496 + .8365i .0496 − .8365i −.7950 1 .
Note that there are 2 complex eigenavlues. These invariably appear as complex
conjugates:

                             λ1 = a + bi; λ2 = a − bi.
Rewrite it in polar coordinate form:

                              λ1 = R [cos θ + i sin θ] ,
where R and θ are defined as:
                           √                 a          b
                      R=       a2 + b2 ; cos θ =
                                               ; sin θ = ,
                                             R          R
R is the modulus of a complex √
                              numer. All of the relevant eigenvalues are bounded
below unity in modulus (R = a2 + b2 = .83). Next, compute Cx (0) :
16                                  1. TIME SERIES

                                                            
                                   1.47 .41 .16 .24 0
                                 .41 1.47 .41 .16 0 
                                                            
                      Cx (0) =  .16 .41 1.47 .41 0  ,
                                                             
                                 .24 .16 .41 1.47 0 
                                   0      0     0     0    0
          £                  ¤
and µ0 =£ 5 5 5 5¤ 1 .
v. ρ = .8 .3 0 0 , µ = 5, c = 1,
                                                       
                                      .8 .3 0 0 1.5
                                    1 0 0 0 0 
                                                       
                              A=    0   1   0  0 0    ,
                                                        
                                    0 0 1 0 0 
                                      0 0 0 0 1
                                        £                      ¤
and compute the eigenvalues: λ0 = 0 .0 −.27 1.07 1 . The 1st condition
for stationarity is violated.
c. Note that in a linear model the conditonal expectation and the best linear pre-
dictor coincide. Recall the set of K orthogonality conditions£ defining the best lin- ¤
ear predictor, i.e. the linear projection of Y = yt+5 on X = yt yt−1 yt−2 yt−3 1 :

                          E (X (Y − X 0 β)) = 0,
where K = 5 (# of parameters). Solving for β yields the following expression:
                                                −1
                           β = (E(XX 0 )) E (XY ) .
Importantly, no stationarity assumptions have been imposed. Two observations
are worth mentioning here. First, note that X = xt , as defined in part b. Keep
in mind that E(xt − µ)(xt − µ)0 = Cx (0) = Ext x0t − µµ0 .

                         Cx,t (0) = E(XX 0 ) − E(X)E(X 0 ),
which implies that:

                             E(XX 0 ) = Cx,t (0) + µt µ0t .
Second, note that:

                                      ¡         ¢
                    E (Xyt+5 ) = E xt x0t+5 G0
                                    ¡                 ¢
                                = Cx,t (−5) + µt µ0t+5 G0 ,
          £                ¤
where G = 1 0 0 0 0 and Cx,t (−5) = Cx,t (5)0 = Cx,t (0)0 A50 .
Assuming stationarity, we obtain the following formula:

                                           −1
                     β = (Cx (0) + µµ0 )     (Cx (−5) + µµ0 ) G0
                                          −1 ¡                ¢
                        = (Cx (0) + µµ0 )      Cx (0)A50 + µµ0 G0 .
                                        1. TIME SERIES                                         17
          £                          ¤
i. β 0 = £ .7387 −.26 0.0 0.0 5.21 . ¤
ii. β 0 = £ .7387 −.26 0.0 0.0 5.21 .¤
iii. β 0 = £ .5905 0.0 0.0 0.0 2.0476 .¤
iv. β 0 = .2003 .02 .004 .25 2.6244 .
d. Assume the eigenvalues of .95A are bounded below untiy in modulus:
                         ∞
                         X                X∞
                              k
                      Et   .95 yt+k = Et     .95k Gxt+k
                          k=0                         k=0
                                                     ∞
                                                     X
                                              = G          .95k Ak xt
                                                     k=0

                                              = G (I − .95A)−1 xt .
                                                                                       £                         ¤
By the same reasoning as before, let Y = G (I − .95A)−1 xt and let X 0 =                   yt yt−1 yt−2 yt−3 1       ..
Solving for β yields the following expression:

                                   −1
              β = (E(XX 0 ))            E (XY )
                                         −1
                  = (Cx (0) + µµ0 )           E(xt x0t ) (I − .95A)−10 G0
                                         −1
                  = (Cx (0) + µµ0 )           (Cx (0) + µµ0 ) (I − .95A)−10 G0
                 = (I − .95A)−10 G0 ,
             £             ¤
where G£ = 1 0 0 0 0 .                  ¤
i. β 0 = £ 7.64 −2.17 0.0 0 145.3155 ¤.
ii. β 0 = £ 7.64 −2.17 0.0 0 145.3155
                                  ¤       .
       0
iii. β = £ 6.89 0.0 0.0 0 65.51 .                 ¤
iv. β 0 = 2.4829 1.0644 1.1204
                             £    1.1794    70.76   .    ¤     P
                          0
v. .95A has eigenvalues: λ =   0   0  −..26    1.02   .95 ; Et ∞        k
                                                                 k=0 .95 yt+k ex-
plodes.
e.To compute the autocovariances, recall that Cx (j) = Aj Cx (0)

i. Cx (1)(1, 1) = 6.85, Cx (5)(1, 1) = 3.70, Cx (10)(1, 1) = 1.59.

ii. Cx (1)(1, 1) = 27.41 , Cx (5)(1, 1) = 14.81 , Cx (10)(1, 1) = 6.39.

iii. Cx (1)(1, 1) = 4.73 , Cx (5)(1, 1) = 3.10 , Cx (10)(1, 1) = 1.83.

iv. Cx (1)(1, 1) = .41 , Cx (5)(1, 1) = .36 , Cx (10)(1, 1) = .13.

      Exercise 1.5.
A consumer’s rate of consumption follows the stochastic process
                          2
                          X                            2
                                                       X
(5)         ct+1 = αc +         ρj ct−j+1 + wt+1 +           δj zt+1−j + ψ1 w1,t+1 ,
                          j=1                          j=1
18                                     1. TIME SERIES



                            2
                            X                   2
                                                X
(6)                zt+j =         γj ct−j+1 +         φj zt−j+1 , +ψ2 w2,t+1
                            j=1                 j=1

where £wt+1 is a 2 × 1 martingale difference
                                      ¤         sequence, adapted to
Jt = wt . . . w1 c0 c−1 z0 z−1 , with contemporaneous covariance matrix
        0
Ewt+1 wt+1 |Jt = I, and the coefficients ρj , δj , γj , φj are such that the matrix
                                                           
                                  ρ1 ρ2 δ 1 δ 2 α c
                                1 0 0 0 0
                                                           
                           A=   γ 1   γ 2 φ 1    φ 2    0 ,
                                                            
                                0 0 1 0 0
                                   0 0 0 0 1
has eigenvalues bounded strictly below unity in modulus.
The consumer evaluates consumption streams according to
                                             ∞
                                             X
(2)                               V 0 = E0         .95t u(ct ),
                                             t=0

where the one-period utility function is
(3)                               u(ct ) = −.5(ct − 60)2 .

a. Find a formula for V0 in terms of the parameters of the one-period utility
function (3) and the stochastic process for consumption.
                                                                   £      ¤
b. Compute V for the following two sets of parameter values: i. ρ = .8 −.3 , αc =
      £     ¤     £    ¤      £       ¤
1, δ = .2 0 γ = 0 0 , φ = .7 −.2 , ψ1 = ψ2 = 1.
ii. Same as for part i except now ψ1 = 2, ψ2 = 1.
Hint: Remember doublej.m .

      Solution
a. Consider the first-order linear difference equation:
                                                                      
          ct+1       ρ1     ρ2    δ1   δ2   αc     ct       ψ1            0
         ct   1          0     0    0               
                                            0   ct−1   0              0   ·        ¸
                                                                           w1,t+1
         zt+1  =  γ1     γ2    φ1   φ2   0                            
(7)                                           zt  +  0             ψ2 
                                                                                 w2,t+1
                                                                                          .
         zt   0          0     1    0    0   zt−2   0              0  
          1          0      0     0    0    1      1        0             0
Guess that V0 is quadratic in x, the state vector:

                                       V0 = x0 Bx + d,
where d is an arbitrary state vector.
                                      1. TIME SERIES                          19

Then we know, from the definition of V0 , that:

(8)                              V0 = (x00 Gx0 ) + βE0 V1 ,
where                                                      
                              −.5         0   0   0   30
                             0           0   0   0   0     
                                                           
                          G=
                             0           0   0   0   0     .
                                                            
                             0           0   0   0   0     
                              30          0   0   0   −1800
Note that:

                  E 0 V1 =   d + E0 (Ax0 + Cw1 )0 B (Ax0 + Cw1 )
                         =   x0 A0 BA0 x0 + E0 (w10 C 0 BCw1 )
                         =   x0 A0 BA0 x0 + tr (BCE0 w1 w10 C 0 )
                         =   d + x0 A0 BA0 x0 + tr (BCC 0 ) .
Substitute this result back into eq.(21):
             x00 Bx0 + d = x00 Gx0 + β [x00 A0 BA0 x0 + tr (BCC 0 )] + βd
                         = x00 Gx0 + β [x00 A0 BA0 x0 + tr (BCC 0 ) + d] .
Collecting terms, this yields two equations:

(9)                                B = G + β [A0 BA] ,
and

(10)                             d(1 − β) = βtr (C 0 BC) .
i.Use ex0105.m to compare your solutions. Make sure not√to forget the discount
factor β = .95. The command to compute B is doublej ( .95A, G), which pro-
duces:
                                                                         
                           −1.3284            −1.2803   0     0   −0.6690
                          −1.2803            −1.2620   0     0   −0.6356 
                                                                         
               B = 104 ∗ 
                          0                  0         0     0   0       
                                                                          
                          0                  0         0     0   0       
                           −0.6690            −0.6356   0     0   −0.3600
               d = −2.5240e + 006.
ii. Note that only d changes (the risk premium):


                                  d = −1.0096e + 007.
20                                         1. TIME SERIES

     Exercise 1.6.
Consider the stochastic process {ct , zt } defined by equations (1) in exercise 1.5.
Assume the parameter values described in part b, item i. If possible, assume the
initial conditions are such that {ct , zt } is covariance stationary.
a. Compute the initial mean and covariance matrix that make the process co-
variance stationary.
b. For the initial conditions in part a, compute numerical values of the following
population linear regression:
                              ct+2 = α0 + α1 zt + α2 zt−4 + ²t
           £             ¤     £       ¤
where E²t 1 zt zt−4          = 0 0 0 .

     Solution
a. Use ex0105.m to compare your solutions
                                                         
                               1.97 1.24 0.24 0.48 0
                             1.24 1.97 .07 .24 0 
                                                         
                   Cx (0) = 
                              0.24   0.07 1.57  .92   0  ,
                                                          
                             0.48 0.24 .92 1.57 0 
                               0      0    0     0     0
         £                          ¤      £                 ¤
and µ0 = .666 .666 0 0 .3333 × 3 = 2 2 0 0 1 .
b. Following the same line of reasoning as before, derive the orthogonality con-
ditions:


                                     EX 0 (Y − XB) = 0,
               £               ¤
where X 0 =        1 zt zt−4       and Y = ct+2 .Solving for β :
                                                    −1
                                   β = (E(XX 0 ))        E (XY ) ,
where
                                                                       
                  1               1               1       1      1      1
     E(XX 0 ) =  Ezt2            cov(zt , zt−4 ) 1  =  1.57   −.0336 1  .
                                     2
                  cov(zt , zt−4 ) Ezt−4           1       −.0336 1.57   1
Note that cov(zt , zt−4 ) is the (3,3) element of Cx (4) = A4 Cx (0). Similarly,
                                                               
                                  E(ct+2 )               2
                   E(XY ) =  cov(ct+2 , zt )  =  0.1155  .
                                  cov(ct+2 , zt−4 )      −.0497
This implies
                                       £                        ¤
                               β0 =        4.29 4.19 −6.48           .
                                               1. TIME SERIES                                       21

                            Simulation                                 Impulse Response
         3                                                1

         2
                                                         0.8
         1

         0                                               0.6

        −1                                               0.4
        −2
                                                         0.2
        −3

        −4                                                0
              0   20           40         60        80         0   5     10     15        20   25


                           Log Spectrum
         1

        0.8

        0.6

        0.4

        0.2

         0
              0        1             2          3


                                         Figure 1. Exercise 1.7 a

   Exercise 1.7.
Get the Matlab programs bigshow.m and freq.m .

Use bigshow to compute and display a simulation of length 80, an impulse re-
sponse function, and a spectrum for each of the following scalar stochastic pro-
cesses yt . In each of the following, wt is a scalar martingale difference sequence
adapted to its own history and the initial values of lagged y’s. a. yt = wt . b.

yt = (1 + .5L)wt . c. yt = (1 + .5L + .4L2 )wt . d. (1 − .999L)yt = (1 − .4L)wt . e.

(1 − .8L)yt = (1 + .5L + .4L2 )wt . f. (1 + .8L)yt = wt . g. yt = (1 − .6L)wt .

Study the output and look for patterns. When you are done, you will be well on
your way to knowing how to read spectral densities.

   Solution
a. yt = wt see Figure 1.
b. yt = (1 + 0.5L)wt see Figure 2.
c. yt = (1 + 0.5L + 0.4L2 )wt see Figure 3.
d. (1 − 0.999L)yt = (1 − 0.4L)wt see Figure 4.
e. (1 − 0.8L) yt = (1 + 0.5L + 0.4L2 )wt see Figure 5.
f. (1 + 0.8L)yt = wt see Figure 6.
22                                            1. TIME SERIES

                          Simulation                                   Impulse Response
       3                                                  1

       2                                                 0.8
       1
                                                         0.6
       0
                                                         0.4
      −1

      −2                                                 0.2

      −3                                                  0
            0   20           40          60         80         0   5     10     15        20   25


                         Log Spectrum


      0.5


       0


     −0.5


      −1


            0        1             2            3


                                       Figure 2. Exercise 1.7 b
                          Simulation                                   Impulse Response
       6                                                  1

       4                                                 0.8

       2                                                 0.6

       0                                                 0.4

      −2                                                 0.2

      −4                                                  0
            0   20           40          60         80         0   5     10     15        20   25


                         Log Spectrum

       1

      0.5

       0


     −0.5

      −1
            0        1             2            3


                                       Figure 3. Exercise 1.7 c
                                      1. TIME SERIES                                       23

                   Simulation                                 Impulse Response
15                                               1


10                                              0.9


 5                                              0.8


 0                                              0.7


                                                0.6
−5
     0   20           40         60        80         0   5     10     15        20   25


                  Log Spectrum

12

10

 8

 6

 4

 2

 0
     0        1             2          3


                                Figure 4. Exercise 1.7 d
                   Simulation                                 Impulse Response
 6                                              1.4

 4                                              1.2

 2                                               1

                                                0.8
 0
                                                0.6
−2
                                                0.4
−4                                              0.2
−6
     0   20           40         60        80         0   5     10     15        20   25


                  Log Spectrum

 4

 3

 2

 1

 0

−1

−2
     0        1             2          3


                                Figure 5. Exercise 1.7 e
24                                                    1. TIME SERIES

                               Simulation                                       Impulse Response
      4                                                            1

      3

      2                                                           0.5

      1

      0                                                            0

     −1

     −2                                                          −0.5

     −3
          0       20              40             60        80           0   5     10     15        20   25


                           Log Spectrum
      3


      2


      1


      0


     −1
          0            1                 2             3


                                             Figure 6. Exercise 1.7 f
                                Simulation                                      Impulse Response
          3                                                         1

          2

          1                                                       0.5
          0

      −1
                                                                    0
      −2

      −3
                                                                 −0.5
      −4
              0    20               40           60         80          0   5      10    15        20   25


                               Log Spectrum


      0.5

          0

     −0.5

      −1

     −1.5

              0            1                 2          3


                                             Figure 7. Exercise 1.7 g
                                 1. TIME SERIES   25

g. yt = (1 − 0.4L)wt see Figure 7.
26                                  1. TIME SERIES

      Exercise 1.8.
This exercise deals with Cagan’s money demand under rational expectations. A
version of Cagan’s (1956) demand function for money is
(1)                   mt − pt = −α(pt+1 − pt ), α > 0, t ≥ 0,
where mt is the log of the nominal money supply and pt is the price level at t.
Equation (1) states that the demand for real balances varies inversely with the
expected rate of inflation, (pt+1 − pt ). There is no uncertainty, so the expected
inflation rate equals the actual one. The money supply obeys the difference
equation
(2)                            (1 − L)(1 − ρL)mst = 0
subject to initial condition for ms−1 , ms−2 . In equilibrium,
(3)                               mt ≡ mst ∀t ≥ 0
(i.e., the demand for money equals the supply). For now assume that
(4)                               |ρα/(1 + α)| < 1.
An equilibrium is a {pt }∞
                         t=0 that satisfies equations (1), (2), and (3) for all t.

a. Find an expression an equilibrium pt of the form
                                       n
                                       X
(5)                             pt =         wj mt−j + ft .
                                       j=0

Please tell how to get formulas for the wj for all j and the ft for all t.
b. How many equilibria are there?
c. Is there an equilibrium with ft = 0 for all t? d. Briefly tell where, if anywhere,
condition (4) plays a role in your answer to part a.
e. For the parameter values α = 1, ρ = 1, compute and display all the equilibria.

      Solution
a. First, consider the money demand equation and rewrite the demand for money
as a function of the future time path of prices:

                               ¡              ¢
                        mt =    (1 + α) − αL−1 pt
                                      µ              ¶
                                             α    −1
(11)                         = (1 + α) 1 −      L      pt .
                                            1+α
We know that in equilibrium: mst = mt for all t ≥ 0. This last observation
together with equation (11) implies that the current price can be expressed as a
function of the entire sequence of future money supplies:
                                      1. TIME SERIES                           27



                               ∞ µ      ¶j          µ      ¶t
                          1 X       α       −j s      1+α
(12)            pt    =                    L mt +               c
                        1 + α j=0 1 + α                 α
                               ∞ µ      ¶j        µ       ¶t
                          1 X       α       s       1+α
                      =                    mt+j +            c.
                        1 + α j=0 1 + α               α

where c is some arbitrary nonnegative constant (naturally, we want to keep the
price level positive for all t).
Next, let us turn to the money supply equation. Note that the money supply
difference equation has a unit root which means we cannot simply apply the usual
approach. In stead, working forward, starting at time 0, we get:

                             ms0 − ms−1 = ρ(ms−1 − ms−2 ),
and, similarly, we find that at time 1 :

                              ms1 − ms0 = ρ(ms0 − ms−1 ).
By substituting backwards repeatedly, we find that the money supply, in levels,
is given by:

                            ¡                       ¢¡          ¢
(13)                 mst = ρ 1 + ρ + ρ2 + . . . + ρt ms−1 − ms−2 ,
which, for |ρ| < 1, becomes:
                                      1 − ρt+1 ¡ s        ¢
                            mst = ρ             m−1 − ms−2 .
                                        1−ρ
The money supply at t can be written in terms of its two inital values. This
money supply equation can be plugged back into the price level equation in (64),
which produces:

                   ∞ µ        ¶j                               µ      ¶t
               1 X        α        1 − ρt+j+1 ¡ s      s
                                                           ¢     1+α
(14) pt   =                      ρ              m−1 − m−2 +              c
            1 + α j=0 1 + α          1−ρ                          α
            ·         µ t+2 ¶                 ¸                 µ      ¶t
                ρ       ρ             1         ¡ s      s
                                                             ¢    1+α
(15)      =         −                            m−1 − m−2 +               c
              1−ρ      1 − ρ 1 + α (1 − ρ)                         α
                  ·                       ¸                  µ     ¶t
              ρ         t+1       1         ¡ s      s
                                                       ¢       1+α
(16)      =         1−ρ                      m−1 − m−2 +              c.
            1−ρ             1 + α (1 − ρ)                       α
Hence
                                        n
                                        X
                                pt =          wj mt−j + ft ,
                                        j=0

we know that, for |ρ| < 1
28                                  1. TIME SERIES



                            ·                      ¸
                       ρ           j        1
             wj    =          1−ρ                     f or j = t + 1
                     1−ρ             1 + α (1 − ρ)
                              ·                         ¸
                         ρ            j−1        1
                   = −          1−ρ                        f or j = t + 2
                       1−ρ                1 + α (1 − ρ)
                   = 0 for j ∈/ {t + 1, t + 2} ,

and as for the second part:

                                         µ         ¶t
                                             1+α
                                  ft =                  c,
                                              α

where c is an arbitrary non-negative constant
b. Since we can pick any constant c ≥ 0 in ft , we can construct infinitely many
sequences {pt }∞
               t=0 that satisfy the equilibrium condition at all t ≥ 0.
c. There is an equilibrium with ft = 0 for all t, which is obtained by setting
c = 0. This immediately fixes the initial price level p0 in terms of the initial
money supplies:

                                 ·                   ¸
                            ρ                ρ         ¡ s         ¢
                  p0   =           1−                   m−1 − ms−2
                         1−ρ           1 + α (1 − ρ)
                                 ·                ¸
                            ρ      (1 + α) (1 − ρ) ¡ s          ¢
                       =                             m−1 − ms−2
                         1 − ρ 1 + α (1 − ρ)
                         ·                ¸
                              ρ (1 + α)     ¡ s          ¢
                       =                     m−1 − ms−2 .
                           1 + α (1 − ρ)

d. This condition guarantees that


                                X∞ µ       ¶j t+j+2
                                       α     ρ
                                                    ,
                                j=0
                                     1 + α    1 − ρ

in (14) is bounded.
e. Set ρ = 1 in equation (13) and you obtain:

                                          ¡           ¢
                             mst = (t + 1) ms−1 − ms−2 .

Now, recall that, for α = 1,
                                    1. TIME SERIES                                  29


                    ∞ µ       ¶j
                1 X        α
      pt =                        mst+j + (2)t c.
             1 + α j=0 1 + α
                    ∞ µ       ¶j
                1 X        α                  ¡          ¢
        =                         (t + 1 + j) ms−1 − ms−2 + (2)t c.
             1 + α j=0 1 + α
                                            ∞ µ       ¶j
                    ¡ s         ¢       1 X        α       ¡          ¢
        =                    s
             (t + 1) m−1 − m−2 +                         j ms−1 − ms−2 + (2)t c
                                     1 + α j=0 1 + α
                    ¡ s         ¢      ¡           ¢
        =    (t + 1) m−1 − ms−2 + α ms−1 − ms−2 + (2)t c
                    ¡           ¢
        =    (t + 2) ms−1 − ms−2 + (2)t c,
for c ≥ 0, where we have used :
                   X          d X j        d 1           x
                       jxj = x     x =x            =           .
                             dx           dx 1 − x    (1 − x)2
Hence, we have constructed an infinite number of equilibria, each of which corre-
sponds to a different c ≥ 0.

      Exercise 1.9.
The n×1 state vector of an economy is governed by the linear stochastic difference
equation
(1)                              xt+1 = Axt + Ct wt+1
where Ct is a possibly time varying matrix (known at t) and wt+1 is an m × 1
                                                                     0
martingale difference
           £          sequence
                            ¤ adapted to its own history with Ewt+1 wt+1 |Jt = I,
where Jt = wt . . . w1 x0 . A scalar one-period payoff pt+1 is given by
(2)                                  pt+1 = P xt+1
The stochastic discount factor for this economy is a scalar mt+1 that obeys
                                           M xt+1
(3)                                mt+1 =         .
                                            M xt
Finally, the price at time t of the one-period payoff is given by qt = ft (xt ), where
ft is some possibly time-varying function of the state. That mt+1 is a stochastic
discount factor means that
(4)                              E(mt+1 pt+1 |Jt ) = qt .
a. Compute ft (xt ), describing in detail how it depends on A and Ct .

b. Suppose
       £    that an econometrician
                           ¤       has a time series data set
Xt = zt mt+1 pt+1 qt , for t = 1, . . . , T , where zt is a strict subset of the
variables in the state xt . Assume that investors in the economy see xt even
though the econometrician only sees a subset zt of xt . Briefly describe a way
30                                 1. TIME SERIES

to use these data to test implication (4). (Possibly but perhaps not useful hint:
recall the law of iterated expectations.)

     Solution
a.
          ft (xt ) = qt = Et [mt+1 pt+1 ]
                         ·                 ¸
                           M xt+1 P xt+1
                   = Et
                                 M xt
                        1
                   =         Et [M (Axt + Ct wt+1 )P (Axt + Ct wt+1 )]
                      M xt
                        1
                   =         Et [(M Axt + M Ct wt+1 )(P Axt + P Ct wt+1 )]
                      M xt
                        1
                   =         Et [M Axt P Axt + M Ct wt+1 P Ct wt+1 ]
                      M xt
                        1       £                                             ¤
                   =         Et M Axt x0t A0 P 0 + M Ct wt+1 wt+1 0
                                                                      Ct0 P 0
                      M xt
                        1 ©                               £             ¤ 0 0ª
                   =           M Axt x0t A0 P 0 + M Ct Et wt+1 wt+1 0
                                                                           Ct P
                      M xt
                        1
                   =         {M Axt x0t A0 P 0 + M Ct Ct0 P 0 } .
                      M xt
b. Because Xt ⊂ Jt , and by the law of iterated expectations, rewrite the Euler
equation qt = Et [mt+1 pt+1 ] as follows:
                          E [mt+1 pt+1 − ft (xt )|Xt ] = 0.
This condition states that mt+1 pt+1 − qt is orthogonal to the information set Xt
and hence to every subset of Xt such as zt . Therefore:
                          E [(mt+1 pt+1 − ft (xt )) zt ] = 0.
We can test the Euler equation qt = Et [mt+1 pt+1 ] by testing the condition
E [(mt+1 pt+1 − qt ) zt ] = 0. This can be tested by the econometrician by regress-
ing mt+1 pt+1 − qt on zt and checking whether the hypothesis that the coefficient
on zt , βz = 0, cannot be rejected. Exercise 1.10 Let P be a transition matrix
for a Markov chain that has two distinct eigenvectors π1 , π2 corresponding to
unit eigenvalues of P . Prove for any α ∈ [0, 1] that απ1 + απ2 is an invariant
distribution of P .

     Exercise 1.10.
Consider a Markov chain with transition matix
                                         
                                  1 0 0
                           P = .2 .5 .3 ,
                                  0 0 1
                                    1. TIME SERIES                                    31
                               £                ¤0       £          ¤0
with initial distribution π0 = π1,0 π2,0 π3,0 . Let πt = π1t π2t π3t be the
distribution over states at time t. Prove that for t > 0
                                           ³       ´
                                             1−.5t
                           π1t = π1,0 + .2 1−.5 π2,0
                           π2t          = .5t π2,0
                                            ³       ´
                                              1−.5t
                           π3t   = π3,0 + .3 1−.5 π2,0 .

   Solution
The transition can be written as
                                                
                       π1,t+1       1 0.2 0     π1,t
                      π2,t+1  =  0 0.5 0   π2.t  .
                       π3,t+1       0 0.3 1     π3,t
Looking at subsequent transitions, the first and third colums are left unchanged.
We find that the second column changes as follows: the second row is simply
0.5t because the other two elements on the second row are zero. The³first row,        ´
                                                                                1−pt
second column element is given by: p21 (1 + p22 + p222 + p322 + ...pt22 ) = p21 1−p 22 =
    ³        ´                                                                     22
      1−0.5t
0.2 1−0.5 . The same logic holds true for the third row second column element:
    ³      t
             ´
0.3 1−0.5
      1−0.5
              .
Therefore, the stationary distribution becomes
                                       ³        ´    
                                        1−0.5t                 
                     π1,t        1  0.2   1−0.5
                                                   0        π1,0
                                                     
                   π2,t  =  0            t                   
                                       ³0.5 t ´ 0  π2.t .
                     π3,t        0 0.3 1−0.5       1        π3,t
                                          1−0.5



   Exercise 1.11.
Let P be a transition matrix for a Markov chain. For t = 1, 2, . . ., prove that the
jth column of P t is the distribution across states at t when the initial distribution
is πj,0 = 1, πi,0 = 0∀i 6= j.
   Solution
Without loss of generality we assume a 3-state Markov chain. The inital distri-
bution is degenerate in that π2,0 = 1. We have
                                               
                         π1,1        p11 p21 p31    0
                       π2,1  =  p12 p22 p32   1  .
                         π3,1        p13 p23 p33    0
It is clear that The distribution over states in period 1 is given by the second
column of the transition matrix. This is true for every following transition. The
initial probability distribution selects off the second column of the transition
matrix, which is P j after j transitions.
     CHAPTER 2

Dynamic programming




        33
34                            2. DYNAMIC PROGRAMMING

     Exercise 2.1. Howard’s policy iteration algorithm

Consider the Brock-Mirman problem: to maximize
                                            ∞
                                            X
                                      E0          β t ln ct ,
                                            t=0

subject to ct + kt+1 ≤ Aktα θt , k0 given, A > 0, 1 > α > 0, where {θt } is an i.i.d.
sequence with ln θt distributed according to a normal distribution with mean zero
and variance σ 2 .
Consider the following algorithm. Guess at a policy of the form kt+1 = h0 (Aktα θt )
for any constant h0 ∈ (0, 1). Then form
                                          ∞
                                          X
                     J0 (k0 , θ0 ) = E0         β t ln(Aktα θt − h0 Aktα θt ).
                                          t=0

Next choose a new policy h1 by maximizing
                             ln(Ak α θ − k 0 ) + βEJ0 (k 0 , θ0 ),
where k 0 = h1 Ak α θ. Then form
                                          ∞
                                          X
                     J1 (k0 , θ0 ) = E0         β t ln(Aktα θt − h1 Aktα θt ).
                                          t=0

Continue iterating on this scheme until successive hj have converged.
Show that, for the present example, this algorithm converges to the optimal policy
function in one step.

     Solution
Under the policy kt+1 = h0 Aktα θt , we get:

                 k1 = h0 Ak0α θ0 and ln k1 = ln Ah0 + ln θ0 + α ln k0 .
Similarly, derive ln k2 , ln k3 ...which yields the following recursive equation for
ln kt :

                          1 − αt
       ln kt = ln (Ah0 )         + ln θt + α ln θt−1 + · · · + αt−1 ln θ0 + αt ln k0 .
                          1−α
                                                                         P
Plug this recursive formula for ln kt into the objective function E ∞            t     α           α
                                                                           t=0 β ln (Akt θt − h0 Akt θt )
to derive J0 (k0 , θ0 ) :

J0 (k0 , θ0 ) = ln(1 − h0 )A + ln θ0 + α ln k0 + β [ln(1 − h0 )A + E ln θ1 + α ln k1 ]
                + . . . β t [ln(1 − h0 )A + E ln θt + α ln kt ] + . . .
                                        α
              = H0 + H1 ln θ0 +              ln k0 ,
                                     1 − αβ
                             2. DYNAMIC PROGRAMMING                                    35

where H0 and H1 are constants. Next, choose a policy h1 to maximize
                 ln(Ak α θ − k 0 ) + βEJ0 (k1 , θ1 )
                                       ·                                  ¸
                                                                α
               = ln(Ak θ − k ) + βE H0 + H1 ln θ0 +
                       α       0                                        0
                                                                    ln k .
                                                             1 − αβ
The first-order condition for this problem is:
                                     1        αβ 1
                            −                  +          = 0,
                                Ak α θ − k 01 − αβ k 0
which
 P∞ yields:  h1 = αβ. Now, plug the new policy function k 0 = h1 Ak α θ into
E t=0 β ln (Aktα θt − h1 Aktα θt ) to derive J1 (k0 , θ0 ). Firts, note that:
       t



                   1 − αt
 ln kt = ln (Ah1 )        + ln θt + α ln θt−1 + · · · + αt−1 ln θ0 + αt ln k0 for t ≥ 1.
                   1−α
Using this recursive formula, calculate J1 (k0 , θ0 ) :
                                                 α
                     J1 (k0 , θ0 ) = K0 + K1 ln θ0 +  ln k0 ,
                                              1 − αβ
where K0 and K1 are constants. Next, choose a policy h2 to maximize
                 ln(Ak α θ − k 0 ) + βEJ1 (k1 , θ1 )
                                       ·                                  ¸
                                                                α
               = ln(Ak θ − k ) + βE K0 + K1 ln θ0 +
                       α       0                                        0
                                                                    ln k .
                                                             1 − αβ
The first-order condition for this problem is:
                                     1    αβ 1
                            −                  +   = 0,
                                Ak α θ − k 0
                                        1 − αβ k 0
which yields: h2 = αβ. That’s exactly what he had obtained for h1 ! We have veri-
fied that our improvement algoritm has in fact converged after just one iteration.
          CHAPTER 3

Practical dynamic programming




             37
38                      3. PRACTICAL DYNAMIC PROGRAMMING

     Exercise 3.1. Value Function Iteration and Policy Improvement Algorithm

The goal of this exercise is to study, in the context of a specific problem, two
methods for solving dynamic programs : value function iteration and Howard’s
policy improvement. Consider McCall’s model of intertemporal job search. An
unemployed worker draws one offer from a c.d.f. F , with F (0) = 0 and F (B) = 1,
B < ∞. If the worker rejects the offer, she receives unemployment compensation
c and can draw a new wage offer next period. If she accepts the offer, she works
forever at wage w. The objective of the worker is to maximize the expected dis-
counted value of her earnings. Her discount factor is 0 < β < 1.

a. Write the Bellman equation. Show that the optimal policy is of the reservation
wage form. Write an equation for the reservation wage w ∗ .

b. Consider the value function iteration method. Show that at each iteration, the
optimal policy is of the reservation wage form. Let wn be the reservation wage
at iteration n. Derive a recursion for wn . Show that wn converges to w ∗ at rate β.

c. Consider Howard’s policy improvement algorithm. Show that at each itera-
tion, the optimal policy is of the reservation wage form. Let wn be the reser-
vation wage at iteration n. Derive a recursion for wn . Show that the rate of
convergence of wn towards w ∗ is (locally) quadratic. Specifically use a Taylor
expansion to show that, for wn close enough to w ∗ , there is a constant K such
that wn+1 − w∗ ∼
               = K(wn − w∗ )2 .


     Solution
a. Let V (w) be the value of an unemployed worker with offer w in hand and who
behaves optimally. The Bellman equation is:
                                     ½            Z              ¾
                                        w              0       0
               V (w) = max                 , c + β V (w )dF (w ) .
                       accept,reject   1−β
The right hand side takes the max of an increasing function and of a constant.
Thus, the optimal policy is of the reservation wage form. There is a reservation
wage w∗ such that, for w ≤ w ∗ , the increasing function is less than the constant
and the worker rejects the offer. For w ≥ w ∗ , the increasing function is greater
than the constant and the worker accepts the offer. The reservation wage w ∗
solves :

       w∗
                      R
      1−β
            =   c + β V (w0 )dF (w 0 )
                      R w∗ w∗               R B w0
            =   c + β 0 1−β   dF (w0 ) + β w∗ 1−β    dF (w0 )
                     β                 β                       β
                                                                  RB
            =   c + 1−β w∗ F (w∗ ) + 1−β  w∗ (1 − F (w ∗ )) + 1−β  w
                                                                                0
                                                                     ∗ (1 − F (w ))dw
                                                                                      0

                     β         β
                                   RB
            =   c + 1−β w∗ + 1−β    w∗
                                       (1 − F (w 0 ))dw0 ,
                             3. PRACTICAL DYNAMIC PROGRAMMING                                39


Rwhere
  B
        the last two equalities are obtained by doing an integration by part on
  w∗
     w dF (w0 ). Thus, the reservation wage is a solution (actually, the unique one)
      0

of the equation:

                                                          Z B
                         ∗                          ∗
(17)                 w = c(1 − β) + βw + β                       (1 − F (w 0 ))dw0 .
                                                           w∗

b. The value function iteration algorithm iterates on the Bellman equation:
                                              ½                 Z                        ¾
                   n+1                             w                    n   0        0
               V         =       max                  ,c + β          V (w )dF (w ) .
                              accept,reject       1−β
As in the previous question, it is apparent that the optimal policy at order n + 1
is of the reservation wage form. The reservation wage at order n + 1 solves
                                         Z
                          wn+1
                                = c + β V n (w0 )dF (w 0 ).
                         1−β
Manipulating this equation exactly as in question a, one shows that the sequence
of reservation wage satisfies the recursion:

                                                           Z B
(18)                wn+1 = c(1 − β) + βwn + β                        (1 − F (w 0 ))dw0 .
                                                                wn

To show convergence, we substract the equation (17) to equation (18). We obtain
:
                                                               Z w∗
                                 ∗                   ∗
                   wn+1 − w = β(wn − w ) + β                          (1 − F (w 0 ))dw0 .
                                                                wn
                                     R w∗
Observe that wn − w∗ = − wn dw0 to get:
                                                         Z w∗
                                              ∗
                                wn+1 − w = −β                   F (w0 )dw0 .
                                                          wn
               0
Since 0 ≤ F (w ) ≤ 1, this last equality implies :

                                     |wn+1 − w∗ | ≤ β|wn − w∗ |.
This shows that the sequence wn converges to w ∗ at linear rate β. Note that this
linear rate is the one predicted by the contraction mapping theorem.

c. Assume that the optimal policy at iteration n of the policy improvement
algorithm is of the reservation wage form. Let wn be this reservation wage. Let
V n be the value of a worker who uses forever the reservation wage policy wn . For
                                                      w
w ≥ wn , the worker accepts the offer and V n (w) = 1−β . For w ≤ w n , the worker
rejects the offer and V n (w) = constant ≡ Qn . The constant Qn solves:
40                   3. PRACTICAL DYNAMIC PROGRAMMING


                           Rw                  R B w0
                Qn = c + β 0 n Qn dF (w0 ) + β wn 1−β dF (w0 )
                                     ³          RB 0            ´
                Qn = (1 − βF (wn ))−1 c + 1−ββ
                                                 wn
                                                    w dF (w 0
                                                              )   .
Observe that the value function at iteration n is not continuous. There is a
“jump” at w = wn . The jump expresses that the reservation wage policy wn is
suboptimal. Namely, at w = wn , the worker is not indifferent between accepting
or rejecting the offer. Let’s do iteration n + 1. We need to solve:
                                         n           R n 0          o
                                           w                      0
              Ṽ (w) = maxaccept,reject 1−β , c + β V (w )dF (w )
                                         n        o
                                           w
                      = maxaccept,reject 1−β  , Qn .
It is apparent that the optimal policy is of the reservation wage form. The
reservation wage at iteration n + 1 solves:
                                     µ                  Z B               ¶
                                −1                             0     0
(19)    wn+1 = (1 − βF (wn ))            c(1 − β) + β         w dF (w )       ≡ G(wn ).
                                                         wn
Easy algebra shows that the optimal reservation wage w ∗ is a fixed point of this
recursion. We won’t show convergence here. To obtain the desired result on the
speed of convergence we use a Taylor expansion. For wn close enough to w ∗ , we
have:

             wn+1 − w∗ ∼ = G0 (w∗ )(wn − w∗ ) + 1/2G00 (w∗ )(wn − w∗ )2 .
Using the fact that w ∗ = G(w∗ ) to evaluate G0 (w∗ ) shows that G0 (w∗ ) = 0. Thus,
for wn close enough to w ∗ , we have :

                     wn+1 − w∗ ∼= 1/2G00 (w∗ )(wn − w∗ )2 .
The convergence rate is locally quadratic. This illustrates the “higher speed”
of the policy improvement algorithm. The quadratic rate is characteristic of
Newton’s method. The speed of convegence of both methods is illustrated in
figure 15.
                        3. PRACTICAL DYNAMIC PROGRAMMING                      41


                0.54

               0.535

                0.53

               0.525                          Value function iteration
           w                                  Policy Improvement
                0.52

               0.515

                0.51

               0.505

                 0.5
                    0         2       4          6            8          10
                                          n


Figure 1. Exercise 3.1 : Value Function Iteration VS Policy Improvement
             CHAPTER 4

Linear quadratic dynamic programming




                 43
44                  4. LINEAR QUADRATIC DYNAMIC PROGRAMMING

     Exercise 4.1.
Consider the modified version of the optimal linear regulator problem where the
objective is to maximize
                       X ∞
                           β t {x0t Rxt + u0t Qut + 2u0t Hxt }
                             t=0

subject to the law of motion:
                                     xt+1 = Axt + But .
Here xt is an n × 1 state vector, ut is a k × 1 vector of controls, and x0 is a given
initial condition. The matrices R, Q are negative definite and symmetric. The
maximization is with respect to sequences {ut , xt }∞t=0 .

a. Show that the optimal policy has the form
                        ut = −(Q + βB 0 P B)−1 (βB 0 P A + H)xt ,
where P solves the algebraic matrix Riccati equation
          P = R + βA0 P A − (βA0 P B + H 0 )(Q + βB 0 P B)−1 (βB 0 P A + H).
b. Write a Matlab program to solve equation 4 by iterating on P starting from
P being a matrix of zeros.

     Solution
a. Let xt denote the n-dimensional state vector and let ut denote the k−dimensional
control vector. The stochastic discounted linear regulator problem is to choose a
sequence {ut }∞
              t=0 to maximize:

                                     ∞
                                     X
                      M ax{ut }∞
                               t=0
                                           {x0t Rxt + u0t Qut + 2u0t Hxt } ,
                                     t=0
subject to x0 being given and the law of motion:

                              xt+1 = Axt + But .
R is an n × n negative semidefinite symmetric matrix, Q is an k × k negative
semidefinite symmetrix matrix. A is n × n while B is n × k.
Conjecture that the value function is quadratic in the state vector:


                                           V (x) = x0 P x,
where P is an n × n matrix1.
Taking our guess seriously, we plug it in the Bellman equation and mechanically
write out the terms, to obtain:
     1Note that we can drop the scalar d in the non-stochastic case.
                          4. LINEAR QUADRATIC DYNAMIC PROGRAMMING                                   45


                                              £                      ¤
        V (x) = max x0 Rx + u0 Qu + 2u0 Hx + β (Ax + Bu)0 P (Ax + Bu) .
                          u

Some basic algebra manipulations show the following :

       V (x) = max x0 Rx + u0 Qu + 2u0 Hx +
                              u
                     β [x0 A0 P Ax + x0 A0 P Bu + u0 B 0 P Ax + u0 B 0 P Bu]
                                                          · 0 0                    ¸
                            0       0          0            x A P Ax + 2x0 A0 P Bu
                   = max x Rx + u Qu + 2u Hx + β                                     ,
                       u                                         +u0 B 0 P Bu
where the second equality follows from the fact that u0 B 0 P Ax is a scalar and
can be transposed (also, recall that Q, P and R are symmetric). We obtain the
following version of the Bellman equation:

(20) V (x) = max x0 Rx + u0 Qu + 2u0 Hx + β [x0 A0 P Ax + 2x0 A0 P Bu + u0 B 0 P Bu] .
                     u

Note that the max operator still appears on the r.h.s. Next, we derive the first
order necessary conditions:

                                  2Qu + 2Hx + 2β [B 0 P Bu + B 0 P Ax] = 0,
                                       0                     0
where I have used ∂(x∂xAx) = (A + A0 )x; ∂(y∂yBz) = Bz (where y and z are colunmn
                      0
vectors) and ∂(y∂zBz) = B 0 y.
Now we have a feedback rule for u :
                                                            −1
                      u = − (Q + βB 0 P B) (βB 0 P A + H) x,
or u = −F x. The next part involves some tedious but straightforward algebra.
First, substitute this back into eq.(20):
                                               µ                                         ¶
                                   0       0       (βA0 P B + H 0 ) (Q + βB 0 P B)−1 Q
         V (x) = x Rx + x                                                                     x
                                                    (Q + βB 0 P B)−1 (βB 0 P A + H)
                                                                           −1
                                  −2x0 (βA0 P B + H 0 ) (Q + βB 0 P B) Hx + βx0 A0 P Ax
                                        µ                                   ¶
                                      0   (βA0 P B + H 0 ) (Q + βB 0 P B)−1
                                  +βx                                         x
                                              (B 0 P B) (Q + βB 0 P B)−1
                                                                   −1
(21)                              −2βx0 (A0 P B) (Q + βB 0 P B)         (βB 0 P A + H) x.
Second, collect the second and fifth term in the above equation:
                              µ                                                             ¶
               0                   (βA0 P B + H 0 ) (Q + βB 0 P B)−1 (Q + βB 0 P B)
           x                                                                                    x
                                           (Q + βB 0 P B)−1 (βB 0 P A + H)
                                                                     −1
                    = x0 (βA0 P B + H 0 ) (Q + βB 0 P B)                  (βB 0 P A + H) x.
Plug this back into eq.(21) and you obtain:
46                4. LINEAR QUADRATIC DYNAMIC PROGRAMMING



                                                                      −1
        V (x) = x0 Rx + x0 (βA0 P B + H 0 ) (Q + βB 0 P B)                 (B 0 P A + H) x
                                                                −1
                   −2x0 (βA0 P B + H 0 ) (Q + βB 0 P B)              Hx
                   +βx0 A0 P Ax
                                                      −1
(22)               −2βx0 (A0 P B) (Q + βB 0 P B)           (βB 0 P A + H) x.
Next, take the transpose of the third term on the r.h.s. of eq.(22) and collect the
third and fifth term :

                                                       −1
                    −2βx0 (A0 P B) (Q + βB 0 P B)           (βB 0 P A + H) x
                                              −1
                    −2x0 H 0 (Q + βB 0 P B)        (βB 0 P A + H) x,
which equals:
                                                           −1
                −2x0 (βA0 P B + H 0 ) (Q + βB 0 P B) (B 0 P A + H) x.
     Substitute this back into (22) and rearrange, which produces:
                                                       −1
V (x) = x0 Rx − x0 (βA0 P B + H 0 ) (Q + βB 0 P B)           (βB 0 P A + H) x + βx0 A0 P Ax.
     Collecting terms in x and the constants, we obtain the Ricatti equation:

                                                     −1
        P = R − (βA0 P B + H 0 ) (Q + βB 0 P B)           (βB 0 P A + H) + βA0 P A.
b. See matlab program olrp.m

     Exercise 4.2.
Verify that equations (4.10) and (4.11) implement the policy improvement algo-
rithm for the discounted linear regulator problem.
     Solution
Step 1. Start with a given policy u0 = −F0 x0 and assume this policy is used
forever. That is start from a matrix F0 , check whether the eigenvalues of (A−BF0 )
are less than β −0.5 in modulus. Denote the value of working forever with this
policy by x0 P0 x. The matrix P0 is implicitly determined by
            x0 P0 x = x0 Rx + x0 F0 QF0 x + βx0 (A + BF0 )0 P0 (A + BF0 )x,
or simplified
                   P0 = R + F0 QF0 + β(A + BF0 )0 P0 (A + BF0 ).
Step2. Using the value function from he previous step, x0 P0 x, perform a one-step
Bellman iteration to find a new policy funtion F1 . The first order conditions of
this maximization is
                          (Q + B 0 P0 B) u = −B 0 P0 Ax,
or u = −F1 x, where F1 is given by
                                                     −1
                             F1 = (Q + B 0 P0 B)          B 0 P0 .
                        4. LINEAR QUADRATIC DYNAMIC PROGRAMMING                             47

    Iterating on step 1 and step 2 until convergence implements the policy improve-
    ment algorithm. it is equivalent to iterating on
                        Pj = R + Fj QFj + β(A + BFj )0 Pj (A + BFj )
                                               −1
                       Fj+1 = (Q + B 0 Pj B)        B 0 Pj .


       Exercise 4.3.
    A household seeks to maximize
                                ∞
                                X    ©                 ª
                             −    β t (ct − b)2 + γi2t
                                      t=1

    subject to
                                            llct + it = rat + yt
                                     at+1 = at + it
                              yt+1 = ρ1 yt + ρ2 yt−1 .
)
    Here ct , it , at , yt are the household’s consumption, investment, asset holdings, and
    exogenous labor income at t; while b > 0, γ > 0, r > 0, β ∈ (0, 1), and ρ1 , ρ2 are
    parameters, and y0 , y−1 are initial conditions. Assume that ρ1 , ρ2 are such that
    (1 − ρ1 z − ρ2 z 2 ) = 0 implies |z| > 1.
    a. Map this problem into an optimal linear regulator problem.
    b. For parameter values [β, (1 + r), b, γ, ρ1 , ρ2 ] = (.95, .95−1 , 30, 1, 1.2, −.3), com-
    pute the household’s optimal policy function using your Matlab program from
    exercise 4.1.

       Solution
    Note that if the roots z that satisfy (1 − ρ1 z − ρ2 z 2 ) = 0 are outside the unit
    circle (i.e. |z| > 1), this implies the λ0i s that satisfy:

                            1 − ρ1 L − ρ2 L2 = (1 − λ1 L)(1 − λ2 L),
    are inside the unit circle and the system does not explode.
    a. Map this into an optimal linear regulator problem:
       There is not a unique way to set up the state-space representation. Here is
    the easiest way to proceed.
    Let ut = it = at+1 − at be our control. Then the 3-dimensional state vector xt
    evolves according to:

                                       xt+1 = Axt + But ,
    or equivalently:
48                  4. LINEAR QUADRATIC DYNAMIC PROGRAMMING

                                                   
                  at+1        1 0 0 0            at         1
                 yt+1   0 ρ1 ρ2 0   yt   0 
                                                   
                 yt  =  0 1 0 0   yt−1  +  0  it ,
                  1           0 0 0 1            1          0
where A and B are defined accordingly. Our choice for the state vector and the
control yields the following matrices in the quadratic one-period return function:
                                 
            r2       r    0   −br
           r        1    0   −b                      £            ¤
     R = −                        ; Q = −1 − γ; H = − −2r −2 0 2b 0 .
           0        0    0   0   
            −br      −b   0   1
Verify that, given these choices for R, Q and H, the one period return function
−(ct − b)2 − γi2t can be written as:

                 −(ct − b)2 − γi2t = x0t Rxt + u0t Qut + 2u0t Hxt ,
where I have used the fact that ct = rat + yt − it .
To compute the solution, type [f, p] = olrp(β, A, B, R, Q, H).
b. For the parameter values (β, (1 + r), b, γ, ρ1 , ρ2 ) = (.95, .95−1 , 30, 1, 1.2., −.3),
we get a policy function u = −F x, where F is given by:
                       £                               ¤
                   F = −.0095 −.8127 −.0488 5.4423 ,
and a value function v(x) = x0 P x with
                                                           
                           0        0       0       0.0051
                          0        0.0003  −0.0001 0.0204 
            P = 1.0e + 4 
                          0
                                                            .
                                    −0.0001 0       −0.0061 
                           0.0051 0.0204    −0.0061 −2.9191


     Exercise 4.4.
Modify exercise 4.3 by assuming that the household seeks to maximize
                             ∞
                             X     ©                 ª
                           −    β t (st − b)2 + γi2t
                                  t=1
Here st measures consumption services that are produced by durables or habits
according to
                            llst = λht + πct
                                        ht+1 = δht + θct

where ht is the stock of the durable good or habit, (λ, π, δ, θ) are parameters, and
h0 is an initial condition.
a. Map this problem into a linear regulator problem.
                  4. LINEAR QUADRATIC DYNAMIC PROGRAMMING                             49

b. For the same parameter values as in exercise 4.3 and (λ, π, δ, θ) = (1, .05, .95, 1),
compute the optimal policy for the household.
c. For the same parameter values as in exercise 4.3 and (λ, π, δ, θ) = (−1, 1, .95, 1),
compute the optimal policy.
d. Interpret the parameter settings in part b as capturing a model of durable
consumption goods, and the settings in part c as giving a model of habit persis-
tence.

   Solution
a. The key to thing to notice is that we have to include ht in the state space to
keep track of the stock of durables, while st itself does not have to be included.
To see why, note that st can simply be written as a function of the current state
vector. Hence, st does not contain any additional  £ information not in¤the state
                                               0
vector when xt is appropriately defined as xt = at yt yt−1 ht 1 . Having
defined the state space vector, the rest of the derivation is purely mechanical.
Consider the first-order difference equation:
                                                           
                at+1      1 0 0 0 0              at           1
               yt+1   0 ρ1 ρ2 0 0   yt   0 
                                                           
               yt   0 1 0 0 0   yt−1  +  0  it ,
                                                           
               ht+1   θr θ 0 δ 0   ht   −θ 
                1         0 0 0 0 1              1            0
where I have used ct = rat + yt − it , which implies that:

                           ht+1 = δht + θ (rat + yt − it ) .
Next, we recast the one-period return function in the generic linear quadratic
setup by choosing matrices R, Q and H such that:

                   − (st − b)2 − γi2t = x0t Rxt + u0t Qut + 2u0t Hxt
                                                             
                             π 2 r2     π 2 r 0 λπr      −bπr
                            π2r        π2    0 λπ       −bπ 
                                                             
                      R = −
                            0          0     0 0        0    
                                                              
                            λπr        λπ 0 λ2          −bλ 
                             −bπr       −bπ 0 −bλ        b2
                                            ¡    ¢
                                    Q = − π2 + γ
                            £                                   ¤0
                    H=−         −2π 2 r −2π 2 0 −2λπ 2bπ             .
b. For the parameter values (β, (1 + r), b, γ, ρ1 , ρ2 ) = (.95, .95−1 , 30, 1, 2., −.3)
and (λ, π, δ, θ) = (1, .05, .95, 1), we get a policy function u = −F x, where F is
given by:
50                4. LINEAR QUADRATIC DYNAMIC PROGRAMMING


                       £                                            ¤
                 F =       .3038 1.5710 −.6232 −.2917 .0928             ,
                                0
and a value function v(x) = x P x with
                                                                        
                        −.0006 .0041            .0012    −.0005   .0310
                       −.0041 −.0299           .0086    −.0036   .2244 
                                                                        
         P = 1.0e + 4 
                       .0012    .0086          −.0025   .0010    −.0640 
                                                                         .
                       −.0005 −.0036           .0010    −.0006   .0307 
                        .0310    .2244          −.0640   .0307    −1.799

c. For the parameter values (β, (1 + r), b, γ, ρ1 , ρ2 ) = (.95, .95−1 , 30, 1, 2., −.3)
and (λ, π, δ, θ) = (−1, 1, .95, 1), we get a policy function u = −F x, where F is
given by:
                  £                                                         ¤
            F =       .1541 .2258 −.3550 −.1055 −1055 1.2887                    ,
                                0
and a value function v(x) = x P x with
                                                                         
                        −.0005 −.0037          .0011     −.0004   −.0261
                      −.0037 −.0282           .0081     −.003    −.2073 
                                                                         
        P = 1.0e + 4 
                      .0011     .0081         −.0023    .0008    .0588   .
                                                                          
                      −.0004 −.0030           .0008     −.0007   −.0316 
                        −.0261 −.2073          .0588     −.0316   −1.7803

d. First, consider the calibration in part b: (λ, π, δ, θ) = (1, .05, .95, 1). This
implies that the stock of durables ht depreciates at a rate of (1-δ) = .05 and,
since θ = 1, ct can be interpreted as investment in durable goods at time t. The
stock of durables evelolves according to:

                               ht = .95ht−1 + ct .
The process st simply measures the stream of consumption services produced by
the stock of durables ht and by newly acquired durables:

                                 st = ht + .05ct .
Durables produce a lower service stream during the period of purchase. This
could capture adjustment costs.
Second, consider the calibration in part c: (λ, π, δ, θ) = (−1, 1, .95, 1). Here it
is natural to interpret the model as capturing habit peristence where ht is the
habit, which evolves according to a law of motion:

                               ht+1 = .95ht + ct ,
where ct is today’s consumption. The utility of consumption is determined by
today’s consumption relative to today’s ’habit’:

                                     st = c t − h t .
                   4. LINEAR QUADRATIC DYNAMIC PROGRAMMING                         51

The utility flow is determined by the surplus of consumption relative to the state
of today’s habit.

   Exercise 4.5.
A household’s labor income follows the stochastic process
                         yt+1 = ρ1 yt + ρ2 yt−1 + wt+1 + γwt ,
where wt+1 is a Gaussian martingale difference sequence with unit variance. Cal-
culate
                               X∞
                             E     β j [yt+j |y t , wt ],
                                    j=0
        t    t
where y , w denotes the history of y, w up to t.
a. Write a Matlab program to compute expression 1.
b. Use your program to evaluate expression 1 for the parameter values (β, ρ1 , ρ2 , γ) =
(.95, 1.2, −.4, .5).

   Solution
Rewrite the ARMA(2,1) labor income process in lag-notation:
                                    1 + γL
                         yt =                      wt = c(L)wt .
                                1 − ρ 1 L − ρ 2 L2
To predict the geometrically distributed lag, we use a formula from Sargent (1987,
Chapter 11, p.303-304)
                      "∞           # ·                    ¸
                        X               c(L) − βc(β)L−1
                             j
                   Et       β yt+j =                −1
                                                            wt .
                        j=0
                                             1 − βL
Manipulation of the term in brackets yields
            c(L) − βc(β)L−1     1 + γL − β(1 + γβ)L−1
                            =
               1 − βL−1       (1 − ρ1 L − ρ2 L2 )(1 − βL−1 )
                                L + γL2 − β(1 + γβ)
                            =
                              (1 − ρ1 L − ρ2 L2 )(L − β)
                                       β(1 + γβ) − L − γL2
                            =                                         .
                              β − (1 + ρ1 β)L + (ρ1 − ρ2 β)L2 + ρ2 L3
a. Using the matlab program show.m we compute the impulse-response function,
the covariance
            hP generating i function, the spectral density and a simulated time
               ∞    j
path for Et    j=0 β yt+j

b. For parameters (.95, 1.2, −.4, .5), see figure 1.

   Exercise 4.6. Dynamic Laffer curves
52                          4. LINEAR QUADRATIC DYNAMIC PROGRAMMING

                                     impulse response                                                        spectrum
                2.5

                   2

                                                                                        1
                1.5                                                                   10




                                                                           log S(ω)
        h(j)       1

                0.5                                                                   10
                                                                                        0


                   0

               −0.5
                       0         5            10            15        20                       0        1               2         3
                                               j                                                                   ω

                                          covariogram                                                       sample path

                  15

                                                                                           5

                  10
           C(j)




                                                                                 y(t)
                                                                                           0

                   5
                                                                                        −5

                  0
                  −15      −10       −5       0         5        10   15                           20         40        60   80
                                              j                                                                    t



                                                   Figure 1. Exercise 4.5

The demand for currency in a small country is described by
(25)                                                Mt /pt = γ1 − γ2 pt+1 /pt ,
where γ1 > γ2 > 0, Mt is the stock of currency held by the public at the end of
period t, and pt is the price level at time t. There is no randomness in the country,
so that there is perfect foresight. Equation (25) is a Cagan-like demand function
for currency, expressing real balances as an inverse function of the expected gross
rate of inflation.
Speaking of Cagan, the government is running a permanent real deficit of g per
period, measured in goods, all of which it finances by currency creation. The
government’s budget constraint at t is
(26)                                                        (Mt − Mt−1 )/pt = g,
where the left side is the real value of the new currency printed at time t. The
economy starts at time t = 0, with the initial level of nominal currency stock
M−1 = 100 being given.
    For this model, define an equilibrium as a pair of positive sequences {pt >
0, Mt > 0}∞ t=0 that satisfy equations (25) and (26) (portfolio balance and the
government budget constraint, respectively) for t ≥ 0, and the initial condition
assigned for M−1 .
a. Let γ1 = 100, γ2 = 50, g = .05. Write a computer program to compute
equilibria for this economy. Describe your approach and display the program.
                 4. LINEAR QUADRATIC DYNAMIC PROGRAMMING                         53

b. Argue that there exists a continuum of equilibria. Find the lowest value of
the initial price level p0 for which there exists an equilibrium. (Hint Number
1: Notice the positivity condition that is part of the definition of equilibrium.
Hint Number 2: Try using the general approach to solving difference equations
described in the section “A Lagrangian formulation.”
c. Show that for all of these equilibria except the one that is associated with the
minimal p0 that you calculated in part b, the gross inflation rate and the gross
money creation rate both eventually converge to the same value. Compute this
value.
d. Show that there is a unique equilibrium with a lower inflation rate than the
one that you computed in part c. Compute this inflation rate.
e. Increase the level of g to .075. Compare the (eventual or asymptotic) inflation
rate that you computed in part b and the inflation rate that you computed in
part c. Are your results consistent with the view that “larger permanent deficits
cause larger inflation rates”?
f. Discuss your results from the standpoint of the “Laffer curve.”
Hint: A Matlab program dlqrmon.m performs the calculations. It is available
from the web site for the book.

   Solution
a. See explanation in part b and matlab program ex0406b.m and dlqrmon.m
b. Write the supply and demand equations as the following system
                  ·       ¸·      ¸ ·         ¸·        ¸
                     1 0     Mt        1 g        Mt−1
                                   =                      .
                     1 γ2    pt+1      0 γ1         pt
Upon inversion of the matrix on the left-hand side
                         ·      ¸         ·        ¸
                            Mt               Mt−1
                                   = A
                           pt+1               pt
                                        ·            ¸
                                           1     g
                                A =       −1   γ1 −g   .
                                            γ2   γ2

For the parameters in question, the matrix A is
                                 ·              ¸
                                     1     0.05
                            A=                    .
                                   −0.02 1.999
The eigenvalues of the matrix A are λ1 = 1.0010 and λ2 = 1.998, both greater
than one and thus unstable roots. The associated eigenvectors are V1 = [0.9998, 0.0200]0
and V2 = [0.0500, 0.9987]0 . Since the eigenvectors are linearly independent, we
know that              ·        ¸    ·      ¸    ·      ¸
                         M−1            V11         V21
                                  =α          +β          .
                           p0           V21         V22
54               4. LINEAR QUADRATIC DYNAMIC PROGRAMMING

The solution is then
                   ·          ¸            ·         ¸
                       Mt−1            t       M−1
                                  =A                     = αλt1 V1 + βλt2 V2 .
                        pt                      p0
Solving for α in M−1 = αV11 + βV    h 12 and isubstituting in the other equation,
we obtain an expression for p0 = M−1V−βV 11
                                            12
                                               V21 + βV22 which is indexed by β.
We obtain a continuum of equilibria indexed by β. The lowest feasible β is 0.
For negative β prices are negative along the solution path, thereby violating the
definition of an equilibrium. the corresponding initial price level is p 0 = 2.0040.
Alternatively, we can use a Schur decomposition of the matrix A = V W V −1 . To
attain stability of the system, we impose that p0 = V21 V11−1 M−1 . Using the result
from the schur decomposition (using schur.m ) and M−1 = 100, we compute that
p0 = 2.0040. The general solution to the problem is
                                   pt+1 = V21 V11−1 Mt .
c. No matter what the exact value of β is, λ2 > λ1 , which implies that for large
t, the dynamics of M and p are dominated by the second eigenvalue λ2 . As a
consequence, the gross money growth rate MMt−1
                                             t
                                               and the gross inflation rate pt+1
                                                                               pt
are converging to λ2 = 1.998.
d. The equilibrium that is associate with β = 0 is unique and features MMt−1
                                                                          t
                                                                             =
pt+1
 pt
     = λ1 = 1.001.
e. Increasing government spending to g = 0.075 changes the eigenvalues of matrix
A: λ1 = 1.0015 and λ2 = 1.997. The analysis is unchanged, so that the stable
equilibrium features a lower inflation rate than before MMt−1
                                                           t
                                                              = pt+1
                                                                  pt
                                                                     = 1.997 and the
unstable equilibrium has a higher inflation rate than before Mt−1 = pt+1
                                                                Mt
                                                                       pt
                                                                           = 1.0015.
An increase of government expenditures shifts the graph of the characteristic
polynomial inwards. The high-inflation equilibrium is now at a lower level than
before. The low-inflation equilibrium is at a higher level the higher government
spending, in line with neoclassical theories of the effects of government spending.
However, this is the unstable equilibrium because an epsilon departure from it
will lead us to the other high-inflation equilibrium.
f. Just as in the Laffer curve analysis in figure 8.5 in Chapter 8, we can plot
the inverse of the inflation rate against the seigniorage earnings. With increasing
inflation the revenue from the inflation tax first rises and later falls as the high
inflation level discourages households to hold money. For a given level of g there
are two equilibria, associated with λ1 and λ2 . Raising the (constant) level of
government expenditures identifies two new equilibria associated with a higher
λ1 and a lower λ2 , just as in figure 8.5.
            CHAPTER 5

Search, matching, and unemployment




                55
56                 5. SEARCH, MATCHING, AND UNEMPLOYMENT

     Exercise 5.1. Being unemployed with only a chance of an offer
An unemployed worker samples wage offers on the following terms. Each period,
with probability φ, 1 > φ > 0, she receives no offer (we may regard this as a
wage offer of zero forever). With probability (1 − φ) she receives an offer to work
for w forever, where w is drawn from a cumulative distribution function F (w).
Successive drawings across periods are independently and identically distributed.
The worker chooses a strategy to maximize
                            X∞
                         E     β t yt , where 0 < β < 1,
                           t=0

yt = w is the worker is employed, and yt = c is the worker is unemployed. Here c is
unemployment compensation, and w is the wage at which the worker is employed.
Assume that, having once accepted a job offer at wage w, the worker stays in the
job forever.                        P
Let v(w) be the expected value of ∞        t
                                      t=0 β yt for an unemployed worker who has
offer w in hand and who behaves optimally. Write Bellman’s functional equation
for the worker’s problem.

     Solution
                                    P
Let v(w) be the expected value of ∞        t
                                      t=0 β yt for an unemployed worker who has
offer w in hand and who behaves optimally.
                      ½                                Z            ¾
                          w                                 0     0
(27)      v(w) = max          , c + φβv(0) + (1 − φ)β v(w )dF (w ) .
                  A,R   1−β
Here the maximization is over the two actions: accept the offer to work forever
at wage w, or reject the current offer and take a chance on drawing a new offer
next period.

     Exercise 5.2. Two offers per period
Consider an unemployed worker who each period can draw two independently and
identically distributed wage offers from the cumulative probability distribution
function F (w). The worker will work forever at the same wage after having once
accepted an offer. In the event of unemployment during a period, the worker
receives unemployment
             P                compensation c. The worker derives a decision rule to
maximize E ∞    t=0 β t
                        y t , where yt = w or yt = c, depending
                                                          P∞ on     whether she is
                                                                 t
employed or unemployed. Let v(w) be the value of E t=0 β yt for a currently
unemployed worker who has best offer w in hand.
a. Formulate Bellman’s equation for the worker’s problem.
b. Prove that the worker’s reservation wage is higher than it would be had
the worker faced the same c and been drawing only one offer from the same
distribution F (w) each period.

     Solution
                     5. SEARCH, MATCHING, AND UNEMPLOYMENT                         57

a. Note that the event max{w1 , w2 } < w is the event (w1 < w) ∩ (w2 < w).
Therefore prob{max(w1 , w2 ) < w} = F (w)2 . The worker will evidently limit his
choice to the larger of the two offers each period. Bellman’s equation is therefore
                              ½               Z                ¾
                                   w                0    2   0
                  v(w) = max           , c + β v(w )d(F )(w ) ,
                                1−β
where w is the best offer in hand.
b. The reservation wage obeys the following equation:
                                    Z ∞
                                 β
                   (w̄2 − c) =           (w0 − w̄2 )d(F 2 )(w0 ).
                               1 − β w̄2
Using the usual integration by part argument, one obtains the equation:
                                                Z B
                  h2 (w̄2 ) ≡ (1 − β)w̄2 − β           (1 − F (w 0 )2 )dw0 = 0.
                                                 w̄2
Observe that h2 is an increasing function. When the worker is given only one
offer, the reservation wage solves :
                                                Z B
                   h1 (w̄1 ) ≡ (1 − β)w̄1 − β          (1 − F (w 0 ))dw0 = 0.
                                                 w̄1
Since F (w)2 ≤ F (w), we have h2 (w) ≤ h1 (w). Therefore:

                           0 = h1 (w̄1 ) = h2 (w̄2 ) ≤ h1 (w̄2 ).
Since h2 is increasing if follows that

                                      w̄1 ≤ w̄2 .
The intuition underlying this result is as follows: the worker could choose always
to ignore the second offer. This policy, possibly suboptimal, would leave the
worker with a decision problem that is formally identical to the standard one-
offer problem. The value of the objective function of the true problem is at least
as high as the value of the objective function under the artificially restricted
problem. Because the reservation wage has the property of equating the value
of accepting a job, w/(1 − β), with the value of rejecting, c + βEv(w 0 ), a higher
value of Ev(w 0 ), which results in the two-offer case, requires a higher reservation
wage.

    Exercise 5.3. A random number of offers per period
An unemployed worker is confronted with a random number, n, of job offers
each period. With probability π Pn ,∞the worker receives n offers in a given period,
where πn ≥ 0 for n ≥ 1, and n=1 πn = 1 for N < +∞. Each offer is drawn
independently from the same distribution F (w). Assume that the number of
offers n is independently distributed across time. The worker works forever at
wage w after having accepted a job and receives unemployment compensation
58                 5. SEARCH, MATCHING, AND UNEMPLOYMENT

of P
   c during each period of unemployment. He chooses a strategy to maximize
E ∞       t
     t=0 β yt where yt = c if he is unemployed, yt = w if he is employed.
Let v(w) be the value of the objective function of an unemployed worker who has
best offer w in hand and who proceeds optimally. Formulate Bellman’s equation
for this worker.

     Solution
                             (            N        Z                   )
                                  w       X
                v(w) = max           ,c +     πn       v(w0 )d(F n )(w0 ) .
                                 1−β      n=1
In effect, the worker is confronted with a lottery with probabilities π n over dis-
tributions F n (w), from which he will sample next period. As in Exercise 2.1, w
is the highest offer in hand.

     Exercise 5.4. Cyclical fluctuations in number of job offers
Modify Exercise 5.3 as follows. Let the number of job offers n follow a Markov
process, with

             prob {number of offers next period = m|number of offers this
(28)           period = n} = πmn ,     m = 1, . . . , N, n = 1, . . . , N
             PN
               m=1 πmn = 1     for n = 1, . . . , N.
Here [πmn ] is a “stochastic matrix” generating a Markov chain. Keep all other
features of the problem as in Exercise 2.3. The worker gets n offers per period,
where n is now generated by a Markov chain so that thenumber of offers is possibly
correlated over time.
                                     P
a. Let v(w, n) be the value of E ∞           t
                                        t=0 β yt for an unemployed worker who has
received n offers this period, the best of which is w. Formulate Bellman’s equation
for the worker’s problem.
b. Show that the optimal policy is to set a reservation wage w̄(n) that depends
on the number of offers received this period.

     Solution
a. The Bellman equation for the worker’s problem is
                                (           N      Z                     )
                                   w       X
(29)    v(w, n) = max                 ,c +     πm,n v(w0 , m)d(F m )(w0 ) .
                  accept,reject   1−β      m=1

b. From equation (29), we see that the right branch of the right side of the
functional equation is evidently a function only of n. The argument in the text
applies for each n and implies a reservation wage that is a function of n.

     Exercise 5.5. Choosing the number of offers
                   5. SEARCH, MATCHING, AND UNEMPLOYMENT                             59

An unemployed worker must choose the number of offers n to solicit. At a cost of
k(n) the worker receives n offers this period. Here k(n + 1) > k(n) for n ≥ 1. The
number of offers n must be chosen in advance at the beginning of the period
                                                                         P      and
cannot be revised during the period. The worker wants to maximize E ∞      t=0 β t
                                                                                   yt .
Here yt consists of w each period she is employed but not searching, [w − k(n)]
the first period she is employed but searches for n offers, and [c − k(n)] each
period she is unemployed but solicits and rejects n offers. The offers are each
independently drawn from F (w). The worker who accepts an offer works forever
at wage w.
Let Q be the value of the problem for an unemployed worker who has not yet
chosen the number of offers to solicit. Formulate Bellman’s equation for this
worker.
   Solution
                       Z            ½                         ¾
                                         w
            Q = max        max              − k(n), −k(n) + βQ d(F n )(w).
                   n       accept
                           reject
                                        1−b
The worker proceeds sequentially each period, first choosing n, then deciding
whether to accept or reject the best offer.

   Exercise 5.6. Mortensen externality
Two parties to a match (say, worker and firm) jointly draw a match parameter θ
from a c.d.f. F (θ). Once matched, they stay matched forever, each one deriving
a benefit of θ per period from the match. Each unmatched pair of agents can
influence the number of offers received in a period in the following way. The
worker receives n offers per period, with n = f (c1 + c2 ), where c1 is the resources
the worker devotes to searching and c2 is the resources the typical firm devotes
to searching. Symmetrically, the representative firm receives n offers per period
where n = f (c1 + c2 ). (We shall define the situation so that firms and workers
have the same reservation θ so that there is never unrequited love.) Both c1 and
c2 must be chosen at the beginning of the period, prior to searching during the
period. Firms and workers have the same preferences, given by the expected
present value of the match parameter θ, net of search costs. The discount factor
β is the same for worker and firm.
a. Consider a Nash equilibrium in which party i chooses ci , taking cj , j 6= i, as
given. Let Qi be the value for an unmatched agent of type i before the level of ci
has been chosen. Formulate Bellman’s equation for agents of type 1 and 2.
b. Consider the social planning problem of choosing c1 and c2 sequentially so
as to maximize the criterion of λ times the utility of agent 1 plus (1 − λ) times
the utility of agent 2, 0 < λ < 1. Let Q(λ) be the value for this problem for
two unmatched agents before c1 and c2 have been chosen. Formulate Bellman’s
equation for this problem.
c. Comparing the results in (a) and (b), argue that, in the Nash equilibrium, the
optimal amount of resources has not been devoted to search.
60                  5. SEARCH, MATCHING, AND UNEMPLOYMENT

     Solution
a.                       Z                   ½                                ¾
                                                  θ                      n
            Q1 = max               max               − c1 , −c1 + βQ1 d(F )(θ) ,
                   c1        accept,reject       1−β
subject to n = f (c1 + c2 ), c2 given
                      Z              ½                               ¾
                                                  θ
           Q2 = max           max                    − c2 , −c2 + βQ2 d(F n )(θ)
                    c2       accept,reject       1−β
subject to n = f (c1 + c2 ), c1 given.
b.
                         nR                n                     ³        ´
                                               θ                   θ
      Q(λ) = maxc1 ,c2     maxaccept,reject λ 1−β − λc1 + (1 − λ) 1−β − c2 ,
                                                     )
                                            o
                −λc1 − (1 − λ)c2 + βQ(λ) d(F n )(θ)

subject to n = f (c1 + c2 ).
c. The Nash equilibrium is a (c1 , c2 ) pair that solves the two functional equations
in (a). In general, this (c1 , c2 ) pair will not solve the functional equation in (b)
because each agent in (a) neglects the effects of his choice of cj on the welfare of
the other agent. In general, there will be too little search in the Nash equilibrium
if f (c1 + c2 ) is increasing in (c1 + c2 ).

     Exercise 5.7. Variable labor supply
An unemployed worker receives each period a wage offer w drawn from the distri-
bution F (w). The worker has to choose whether to accept the job – and therefore
to work forever – or to search for another offer and collect c in unemployment
compensation. The worker who decides to accept the job must choose the number
of hours to work in each period. The worker chooses a strategy to maximize
                       X∞
                     E     β t u(yt , lt ), where 0 < β < 1,
                             t=0

and yt = c if the worker is unemployed, and yt = w(1 − lt ) if the worker is
employed and works (1 − lt ) hours; lt is leisure with 0 ≤ lt ≤ 1.
Analyze the worker’s problem. Argue that the optimal strategy has the reserva-
tion wage property. Show that the number of hours worked is the same in every
period.

     Solution
Let s be the state variable. We choose s = (w, 0), where w is the wage offer and
0 = E if the worker is employed, and 0 = U if she is unemployed. Consider first
the situation of an employed worker. Bellman’s equation is
                    v(w, E) = max {u[w(1 − l), l] + βv(w, E)}.
                                         l
                   5. SEARCH, MATCHING, AND UNEMPLOYMENT                           61

Then it follows that
                                 u (w(1 − l(w)), l(w))
                             v(w, E) =                 ,
                                        1−β
where l(w) ≡ argmax u(w(1 − l), l).
                   l
Let’s show that v(w, E) is increasing in w. Consider w1 < w2 . We have :

               u (w1 (1 − l(w1 )), l(w1 )) ≤ u (w2 (1 − l(w1 )), l(w1 ))
                                           ≤ maxl u (w2 (1 − l), l)
                                           ≡ u (w2 (1 − l(w2 )), l(w2 )) .
Intuitively, a worker receiving w2 > w1 has the option work 1 − l(w1 ) hours paid
w2 , that yields a higher utility than working 1 − l(w1 ) hours paid w1 . Its optimal
choice 1 − l(w2 ) necessarily yields an even higher utility.

Now consider an unemployed worker. Bellman’s equation is
                          ½                      Z                ¾
                                                     0          0
       v(w, U ) = max       V (w, E), u(c, 1) + β v(w , U )dF (w ) .
                       accept,reject

The outside maximization is over two actions: accept the offer (in which case the
worker chooses l optimally) or reject the offer, collect unemployment compensa-
tion, and wait for a new offer next period. The first term is incresing in w and
the second is independent of w. Therefore the optimal policy is to accept offers
offers that are at least equal to some w̄. Once an offer has been accepted, hours
worked are constant and equal to l(w).

   Exercise 5.8. Wage growth rate and the reservation wage
An unemployed worker receives each period an offer to work for wage wt forever,
where wt = w in the first period and wt = φt w after t periods in the job. Assume
φ > 1, that is, wages increase with tenure. The initial wage offer is drawn from
a distribution F (w) that is constant over time (entry-level wages are stationary);
successive drawings across periods are independently and identically distributed.
The worker’s objective function is to maximize
                           X∞
                        E      β t yt ,  where 0 < β < 1,
                                t=0

and yt = wt if the worker is employed and yt = c if the worker is unemployed,
where c is unemployment compensation. Let v(w) be the optimal value of the
objective function for an unemployed worker who has offer w in hand. Write
Bellman’s equation for this problem. Argue that, if two economies differ only in
the growth rate of wages of employed workers, say φ1 > φ2 , the economy with
the higher growth rate has the smaller reservation wage.
Note. Assume that φi β < 1, i = 1, 2.

   Solution
62                 5. SEARCH, MATCHING, AND UNEMPLOYMENT

If the worker accepts employment at wage w, the sequence {yt } is given by yt =
w, yt+1 = φw . . . , yt+j =Pφj w . . .. Therefore the value of the objective function
if the worker accepts is ∞          j
                             j=0 β yt+j = w/(1 − βφ). Bellman’s equation for the
worker’s problem is
                                ½                 Z               ¾
                                        w                0      0
                   v(w) = max              , c + β v(w )dF (w ) .
                                    1 − βφ
Using the same argument as when studying McCall’s model, one shows that that
the optimal policy is to accept all offers to work with an initial wage higher than
a reservation wage w̄.
                                  ½ w̄
                                      1−φβ
                                                 w ≤ w̄
                          v(w) =        w
                                      1−φβ
                                                 w ≥ w̄.
Because, at w = w̄, we have
                                          Z B
                           w̄
                                =c+β            v(w0 )dF (w 0 ),
                         1 − φβ             0

we get, after substituting for v(w) its expression,
                                   Z w̄                 Z B
                w̄        c+β                0       β
                      =         w̄      dF (w ) +           w0 dF (w0 ).
            (1 − φβ)     1 − φβ     0             1 − φβ w̄
This equation can be rearranged to give
                              Z B
                (1 − β)w̄ − β     (w0 − w̄)dF (w 0 ) = (1 − βφ)c.
                                  w̄

It is easy to see (using the Leibniz rule) that the left-hand side is increasing in w̄.
Therefore, if φ1 > φ2 , that is, (1 − βφ1 )c < (1 − βφ2 )c, it must be that w̄1 < w̄2 .
The intuition behind this result is simple: for any given offer w, the value of
accepting the offer is higher, the higher the growth rate of wages φ. Therefore,
the sooner an offer is accepted, the sooner the benefits of the growth in wages
are realized. This pattern makes some job offers more attractive even though the
initial wage is not very high.

     Exercise 5.9. Search with a finite horizon
Consider a worker who lives two periods. In each period the worker, if unem-
ployed, receives an offer of lifetime work at wage w, where w is drawn from a
distribution F . Wage offers are identically and independently distributed over
time. The worker’s objective is to maximize E{y1 + βy2 }, where yt = w if the
worker is employed and is equal to c – unemployment compensation – if the
worker is not employed.
Analyze the worker’s optimal decision rule. In particular, establish that the
optimal strategy is to choose a reservation wage in each period and to accept
any offer with a wage at least as high as the reservation wage and to reject offers
below that level. Show that the reservation wage decreases over time.
                    5. SEARCH, MATCHING, AND UNEMPLOYMENT                            63

   Solution
We first analyze the worker’s problem in the second period of life. We consider
an unemployed worker; an employed worker does not have to solve any decision
problem. Let v2 (w) be the optimal value of the problem for an unemployed
worker with offer w in hand. Then v2 (w) = max{w, c}. It follows that the
optimal strategy is to accept offers that are at least c and to reject all others.
The second-period reservation wage, w̄2 , is equal to c. In the first period if the
worker is faced with a wage w and accepts the offer, the value of the objective
function is w(1 + β). If the worker rejects he gets c in the first period and v 2 (w0 ),
a random variable,R in the following period. The expected value of rejecting the
                      ∞
offer is thus c + β 0 v2 (w0 )dF (w 0 ).
Therefore the optimal value of the objective function for a worker with offer w in
hand is given by
                              ½                 Z B                 ¾
                                                          0       0
                 v1 (w) = max w(1 + β), c + β       v2 (w )dF (w ) .
                                                      0

Notice that the second term in brackets is constant, whereas the first is increasing
in w. It follows that the optimal policy is of the reservation wage form. There
exists a w̄1 such that, for w ≤ w̄1 , the second term is higher, and therefore the
optimal strategy is to reject the job offer and to remain unemployed. Similarly,
when w > w̄1 , the first term is higher and the optimal strategy is to accept the
job. As usual w̄1 satisfies :
                                             Z B
                        w1 (1 + β) = c + β         v2 (w0 )dF (w 0 ).
                                               0

Observe that v2 (w) = max{w, c} ≥ c. In words, a worker who is unemployed
in
R B the second  period get at least c, the unemployement compensation. Thus
 0
    v2 (w )dF (w 0 ) = E(v2 (w0 )) ≥ c, with a strict inequality if Pr(w 0 ≥ c) > 0.
         0

This inequality implies :
                                      Z B
                 w1 (1 + β) = c + β         v2 (w0 )dF (w 0 ) ≥ (1 + β)c.
                                       0
The reservation wage decreases as the retirement date approaches. The intuition
underlying this result is that, the shorter the horizon, the smaller the benefits
of “waiting to see if next period the wage offer is really high” (the option value
of waiting) because those benefits cannot be enjoyed for a long period. The
implication is hence that the alternative to waiting – that is, accepting a job –
becomes more attractive. This aspect is reflected in the model by a decrease in
the reservation wage, which in fact corresponds to an increase in the percentage
of job offers that are accepted.


   Exercise 5.10. Finite horizon and mean-preserving spread
64                  5. SEARCH, MATCHING, AND UNEMPLOYMENT

Consider a worker who draws every period a job offer to work forever at wage
w. Successive offers are independently and identically distributed drawings from
a distribution Fi (w), i = 1, 2. Assume that F1 has been obtained from F2 by a
mean-preserving spread (see Section 2.4). The worker’s objective is to maximize
                                    T
                                    X
                                E         β t yt ,   0 < β < 1,
                                    t=0

where yt = w is the worker has accepted employment at wage w and is zero
otherwise. Assume that both distributions, F1 and F2 , share a common upper
bound, B.
a. Show that the reservation wages of workers drawing from F1 and F2 coincide
at t = T and t = T − 1.
b. Argue that for t ≤ T − 2 the reservation wage of the workers that sample
wage offers from the distribution F1 is higher than the reservation wage of the
workers that sample from F2 . c. Now introduce unemployment compensation:
the worker who is unemployed collects c dollars. Prove that the result in (a) no
longer holds, that is, the reservation wage of the workers that sample from F 1 is
higher than the one corresponding to workers that sample from F2 for t = T − 1.

     Solution
a. Let vti (w) be the optimal value of the objective function of an unemployed
worker at time t who has offer w in hand and draws wage offers from the distri-
bution Fi , i = 1, 2. Then it is clear that vTi (w) = max{0, w} = w. Therefore
RB i                 RB
 0
   vT (w)dFi (w) = 0 wdFi (w) = Ew, i = 1, 2. Clearly the reservation wage
at time T is zero: the worker accepts every offer. At time (T − 1), Bellmans’
equation for the worker’s problem is
                                 n              RB i 0          o
                 i                                            0
                vT −1 (w) = max w(1 + β), β 0 vT (w )Fi (dw )
                          max {w(1 + β), βEw}.
It is then clear that the worker will accept the offer if w(1 + β) ≥ βEw and will
reject it otherwise. Therefore the reservation wage w̄T −1 is βEw/(1+β). Because
the expectation of w is the same no matter whether w is drawn from F1 or F2 , it
follows that both types of workers have the same reservation wage.
b. We prove this point by induction. Assume that at t+1 the optimal policy under
both distribution is of the reservation wage form. Also, assume that wt+1 (1), the
reservation wage under c.d.f. F1 , is greater than wt+1 (2), the reservation wage
under c.d.f. F2 . Observe that those two assumptions are true at time T . The
Bellman equation at time t is:
                                ½                  Z B                  ¾
                                   1 − β T −t+1
                vti (w) = max    w              ,β      i     0       0
                                                       vt+1 (w )dFi (w ) ,
                                      1−β           0
                            5. SEARCH, MATCHING, AND UNEMPLOYMENT                                                    65

                 T −t+1
where w 1−β1−β is the value of working at wage w in periods t, t + 1, . . . T . The
first term is increasing in w while the second one is constant. It follows that, at
time t, the optimal policy is also of the reservation wage form. Furthermore, the
time t reservation wage wt (i) solves the usual indifference condition:

             T −t+1           RB i
  wt (i) 1−β1−β           = β 0 vt+1    (w0 )dFi (w0 )
             T −t+1           R wt+1 (i) 1−β T −t                               RB          1−β T −t 0
  wt (i) 1−β1−β           = β 0                    w t+1 (i)dF  i (w 0
                                                                       )  + β                       w dFi (w0 )
             T −t+1               T −t
                                       ³ R
                                           1−β                                   w t+1  (i)
                                                                                            R
                                                                                               1−β             ´
                                            wt+1 (i)                                           B 0
  wt (i) 1−β1−β           = β 1−β
                               1−β         0
                                                     (w t+1 (i) −   w  0
                                                                         ) dF i (w  0
                                                                                      ) +     0
                                                                                                 w dF i (w 0
                                                                                                             )   .
Integrating the first term by part and rearanging yields :
                                      ÃZ                              !
                                           wt+1 (i)
                         β − β T −t+1                    0   0
               wt (i) =                             Fi (w )dw + Ei (w) .
                         1 − β T −t+1    0

Observe that E1 (w) = E2 (w) by assumption. Also, by definition of a mean
preserving spread and since wt+1 (1) ≥ wt+1 (2), we have:
            R wt+1 (1)                            R wt+1 (2)              R wt+1 (1)
             0
                          F1 (w0 )dw0 ≥            0
                                                             F1 (w0 )dw0 + wt+1 (2)
                                                                                     F2 (w0 )dw0
                                                  R wt+1 (2)              R wt+1 (1)
                                          ≥        0
                                                             F2 (w0 )dw0 + wt+1 (2)
                                                                                     F2 (w0 )dw0 .
Therefore wt (1) ≥ wt (2).
c. The value of the problem at t = T is vTi (w) = max{w, c}, i = 1, 2. Then
w̄T1 = w̄T2 = c. If we use the same argument as in (b), however, it follows directly
       RB                       RB
that 0 max{w, c}dF1 (w) ≥ 0 max{w, c}dF2 (w), or EvT1 ≥ EvT2 . On the other
hand, the reservation wage at (T − 1) satisfies w̄Ti −1 = β/(1 + β)EvTi . Therefore
w̄T1 −1 ≥ w̄T2 −1 .

       Exercise 5.11. Pissarides’ Analysis of Taxation and Variable Search Inten-
sity
An unemployed worker receives each period a zero offer (or no offer) with prob-
ability [1 − π(e)]. With probability π(e) the worker draws an offer w from the
distribution F . Here e stands for effort – a measure of search intensity – and π(e)
is increasing in e. A worker who accepts a job offer can be fired with probability
α, 0 < α < 1. The worker chooses a strategy, that is, whether to accept an offer
or not and how much effort to put into search when unemployed, to maximize
                              X ∞
                            E      β t yt ,   0 < β < 1,
                                            t=0

where yt = w if the worker is employed with wage w and yt = 1 − e + z if the
worker spends e units of leisure searching and does not accept a job. Here z is
unemployment compensation. For the worker who searched and accepted a job,
yt = w − e − T (w); that is, in the first period the wage is net of search costs.
Throughout, T (w) is the amount paid in taxes when the worker is employed. We
66                  5. SEARCH, MATCHING, AND UNEMPLOYMENT

assume that w − T (w) is increasing in w. Assume that w − T (w) = 0 for w = 0,
that, if e = 0, π(e) = 0 – that is, the worker gets no offers – and that π 0 (e) > 0,
π 00 (e) < 0.
a. Analyze the worker’s problem. Establish that the optimal strategy is to choose
a reservation wage. Display the condition that describes the optimal choice of e,
and show that the reservation wage is independent of e.
b. Assume that T (w) = t(w − a) where 0 < t < 1 and a > 0. Show that
an increase in a decreases the reservation wage and increases the level of effort,
increasing the probability of accepting employment.
c. Show under what conditions a change in t has the opposite effect.

     Solution
a. Let the state variable that completely summarizes current and future oppor-
tunities be x = (w, e, s), where w is the wage, e is the effort, and s = E if the
worker is employed and s = U if he is unemployed. Recall that, if the worker is
employed, then e = 0. Let Q be the expected value of the objective function for
an unemployed worker who behaves optimally before getting an offer. Then if
the worker is employed, the value of the objective function is given by
                v(w, 0, E) = w − T (w) + β(1 − α)v(w, 0, E) + βαQ,
or
                                   w − T (w)          βαQ
                    v(w, 0, E) =                +              .
                                 1 − β(1 − α) 1 − β(1 − α)
If the worker is unemployed, has an offer w in hand, and spent e > 0 units of
leisure searching this period, the value of the objective function is
             v(w, e, U ) = max {w − T (w) − e + β(1 − α)v(w, 0, E)
                           +βαQ, 1 − e + z + βQ} ,
where the first term reflects the value of accepting employment and the second
the value of rejecting the offer. Using the expression we found for v(w, 0, E), we
get                                    n
                                          w−T (w)
                    v(w, e, U ) = max 1−β(1−α)     −e
                                                              o
                                       βαQ
                                   + 1−β(1−α) , 1 − e + z + βQ .
Then, using a standard argument, we see from the above equation that the opti-
mal strategy is to accept offers greater than or equal to w̄ and to reject all others;
w̄ is such that it makes the worker indifferent between accepting or rejecting the
job offer; that is, w̄ solves
                  w̄ − T (w̄)            βαQ
                              −e+                 = 1 − e + z + βQ,
                1 − β(1 − α)        1 − β(1 − α)
or

(30)             w̄ − T (w̄) = [1 − β(1 − α)](1 + z + βQ) − βαQ.
                    5. SEARCH, MATCHING, AND UNEMPLOYMENT                        67

Notice that we cannot use this expression for w̄ to compute the reservation wage,
because Q must be determined endogenously. It is clear, however, that, if Q is
independent of e (as we will show that it is), then w̄ does not depend on e.
Because we established that the optimal policy is of the reservation wage variety,
we can compute v(w, e, U ). This function is given by
                           ½ w−T (w)            βαQ
                              1−β(1−α)
                                       − e + 1−β(1−α)       w ≥ w̄
             v(w, e, U ) =
                             1 − e + z + βQ                 w ≤ w̄.
                           R∞
Let Φ(e) = Ev(w, e, U ) = 0 v(w, e, U )F (dw),
                    Φ(e) = (1 + z + βQ)F
                                      R ∞ (w̄)
                                 1
                           + 1−β(1−α)  w̄
                                          [w − T (w)]F (dw) − e
                                           βαQ
                           +[1 − F (w̄)] 1−β(1−α) .
Because we have shown that
                    βαQ                         w̄ − T (w̄)
                             = (1 + z + βQ) −               ,
                1 − β(1 − α)                  1 − β(1 − α)
we have, after some substitution, that
                     1
       Φ(e) =
                  R∞
                 1−β(1−α)
                 · w̄ ([w − T (w)] − [w̄ − T (w̄)])F (dw) + 1 + z + βQ − e.
Now consider Φ(0). Recall that, if e = 0, the worker gets no offers, and hence
v(w, 0, U ) = 1 + z + βQ. This expression is independent of w, and so Φ(0) =
1 + z + βQ. Therefore
                         1
           Φ(e) =
                      R∞
                     1−β(1−α)
                     · w̄ ([w − T (w)] − [w̄ − T (w̄)])F (dw) + Φ(0) − e.
To simplify notation let (w − T (w)) − (w̄ − T (w̄)) ≡ ∆Y (w). Then the above
expression becomes
                                   Z ∞
                            1
              Φ(e) =                   ∆Y (w)F (dw) + Φ(0) − e.
                      1 − β(1 − α) w̄
If the worker chooses to spend e units of effort, he gets an offer with probability
π(e) and expected value Φ(e). With probability [1 − π(e)] he gets no offers. This
alternative has value Φ(0) − e.
Then the value of the problem for an unemployed worker who behaves optimally
is given by Q, where Q satisfies
           Q ≡ max0≤e≤1 {π(e)Φ(e) + [1 − π(e)][Φ(0) − e]}
(31)       Q ≡ max0≤e≤1 n
                        {π(e)[Φ(e) − Φ(0) + e] + Φ(0) − e}           o
                            π(e) R∞
           Q = max0≤e≤1 1−β(1−α)   w̄
                                      ∆Y (w)F  (dw) + 1 − e + z + βQ
The right-hand side defines a mapping from Q into the reals. To guarantee that
the problem is well behaved, we want to show that one such Q exists. This is
not a trivial problem: Q affects w̄ and ∆Y (w), so that the mapping is highly
nonlinear. In any case, it is clear that Q, and therefore w̄, are independent of e.
68                5. SEARCH, MATCHING, AND UNEMPLOYMENT

Let H be the mapping defined by the right-hand side of (31). Because π(e) is
increasing in e, we have that
                       1
                            R∞
           HQ ≤ 1−β(1−α)         ∆Y (w)F (dw) + 1 + z + βQ
                             w̄
                               1
                                   R∞
                 ≤ H̄Q ≡ 1−β(1−α) 0 [w − T (w)]F (dw) + 1 + z + βQ.
Therefore, if Q1 is such that Q1 = H̄Q1 (such a Q1 is easy to compute directly),
it follows that, for all Q ≥ Q1 , Q ≥ H̄Q. Thus ∀Q ≥ Q1 , HQ ≤ Q. On the other
hand,                      n                                              o
                                 π(0)    R∞
                 HQ ≥ 1−β(1−α)             w̄
                                              ∆Y (w)F (dw)  +  1 + z + βQ
                       = 1 + z + βQ ≡ HQ.
Then we have that, for all Q ≥ 0, HQ ≤ HQ ≤ H̄Q and H0 > 0. Hence we have
established that H0 > 0 and that there exists Q1 < ∞ such that HQ ≤ Q for
Q ≥ Q1 .
Inasmuch as H is a continuous function of Q [this follows because w̄ is continuous
in Q, as is ∆Y (w)], we establish that there exists a Q̄ such that H Q̄ = Q̄.
We next prove that Q̄ is unique. To do so it suffices to show that the mapping
H is monotone in Q. A sufficient condition is that
                                  ·Z ∞                 ¸
                              ∂                          ∂ w̄
                      0≤                 ∆Y (w)F (dw)         + β < 1.
                             ∂ w̄ w̄                     ∂Q
               R∞
Still, (∂/∂ w̄) w̄ ∆Y (w)F (dw) is (using the Leibniz rule) equal to −[1−(∂T /∂w)(w̄)]
[1−F (w̄)]. From the equation determining w̄, we get that [1−(∂T /∂w)(w̄)](∂ w̄/∂Q) =
β(1 − β)(1 − α). Because −[1 − F (w̄)]β(1 − β)(1 − α) + β ∈ (0, 1), however, H
is increasing. Next we use (31) to characterize the optimal choice of e. It is clear
that it satisfies
                                               Z ∞
                        0             1
(32)                  π (e)                        ∆Y (w)F (dw) = 1,
                             1 − β(1 − α) w̄
if the solution is interior. We assume that the distribution of w has sufficient
mass in the tail to make search attractive – that is, we assume that the solution
is interior. It is being claimed that it is possible to make assumptions about the
deep parameters of the model, F (w), α, β, z, π(e), that will guarantee that the
optimal choice of e is e > 0. We focus on this case only because the other is
trivial.
From (31) it is clear that the optimal Q satisfies
                             ·                  Z ∞                          ¸
                          −1         π(ē)
           Q̄ = (1 − β)                             ∆Y (w)F (dw) + 1 − ē + z .
                               1 − β(1 − α) w̄
Using this equation in equation (30), we obtain another, more familiar character-
ization of the optimal reservation wage,
                                                           R∞
          w̄ − T (w̄) = (1 + z) − β(1 − α)ē + β(1−α)π(ē)
                                                 1−β(1−α)   w̄
                                                               {[w − T (w)]
(33)
                        − [w̄ − T (w̄)]} F (dw).
Then equations (33) and (32) summarize the determination of the endogenous
variables, e and w̄.
                    5. SEARCH, MATCHING, AND UNEMPLOYMENT                             69

b. Assume that T (w) = t(w − a). To explore the effect of a change in a, we
differentiate completely (33) and (32) with respect to a. We start with (33).
                                                               β(1−α)
                 (1 − t) ∂∂aw̄ + t = −β(1 − α) ∂a       ∂ē
                                                            + 1−β(1−α)
                                           R∞                          ∂e
                                          · w̄ ∆Y (w)F (dw)π 0 (ē) ∂a
                                          − β(1−α)π(ē)
                                             1−β(1−α)
                                                        (1 − t)[1 − F (w̄)] ∂∂aw̄ .
                                                               R∞
Using equation (32) to eliminate 1/[1 − β(1 − α)] w̄ ∆Y (w)F (dw)π 0 (ē) = 1, we
get                       ·                                       ¸
                                     β(1 − α)π(ē)[1 − F (w̄)] ∂ w̄
                  (1 − t) 1 +                                           = −t.
                                           1 − β(1 − α)             ∂a
Then (∂ w̄/∂a) < 0.
The intuition underlying this result is that an increase in a makes the income tax
more progressive, as it increases the subsidy to low-income workers. Because taxes
are paid (and the subsidy is received) only if the worker is employed, the increased
attractiveness of low-income jobs is reflected by a reduction in the minimum wage
at which an unemployed worker is willing to accept an offer. Notice that the term
(∂e/∂a) disappears in the above equation. This is just another consequence of
the property that e does not affect the choice of the reservation wage.
We next explore the effect on e. From (32) we get
                                π 00 (ē) R∞                    ∂e
                              1−β(1−α) w̄
                                              ∆Y (w)F (dw) ∂a
                                        0
                                    π (ē)
                                = 1−β(1−α) (1 − t) ∂∂aw̄ [1 − F (w̄)]
                        or
                             π 00 (ē) ∂e
                             π 0 (ē)2 ∂a
                                          = (1−t)[1−F (w̄)] ∂ w̄
                                              1−β(1−α) ∂a
                                                                 .
Because π 00 (e) < 0, we have that (∂e/∂a) > 0, that is, effort is increased. Notice
that the increase in e increases π(ē), and hence the probability of getting an
acceptable offer π(ē)[1 − F (w̄)] rises. To fix the notation, let p = π(e)[1 − F (w̄)].
Then
                      ∂p                        ∂e                ∂ w̄
                         = [1 − F (w̄)]π 0 (ē)    − F 0 (w̄)π(e)      ,
                      ∂a                        ∂a                ∂a
and our results show that(∂p/∂a) > 0.
c. Next we analyze the effects of changing the marginal tax rate t. We follow
exactly the same method of totally differentiating (33) and (32) to get, from (33),
                                n                         o
                           ∂ w̄     β(1−α)π(ē)[1−F (w̄)]
                    (1 − t) ∂t 1 +      1−β(1−α)
                                  β(1−α)π(ē) R ∞
                      = w̄ − a − 1−β(1−α) w̄ (w − w̄)F (dw).
From (33), however, we got that
                                        R∞
                       w̄ − β(1−α)π(ē)
                             1−β(1−α) w̄
                                           (w − w̄)F (dw)
                                   −1
                          = (1 − t) [(1 + z) − a − β(1 − α)ē].
Then
                             ∂ w̄
                     sign         = sign [(1 + z) − a − β(1 − α)ē].
                             ∂t
70                 5. SEARCH, MATCHING, AND UNEMPLOYMENT

From (32), after we substitute into the expression for (∂ w̄/∂t), we get
                      π 00 (ē) ∂e                  π 0 (ē)
                      π 0 (ē) ∂t
                                   =
                                          ©     R∞
                                         [1−β(1−α)+β(1−α)π(ē)[1−F (w̄)]ª
                                         · w̄ + w̄ (w − w̄)F (dw) .

Therefore (∂e/∂t) < 0 unambiguously.
Notice that, in this case, an increase in t reduces the returns of being employed
and therefore makes working less attractive. Consequently, it is optimal for the
unemployed worker to reduce the level of effort, decreasing the probability of
finding a job. On the other hand, it is possible for the reservation wage to
decrease, that is, for some wage offers to be acceptable to the worker after the
increase in the tax rate. Such a decrease becomes more likely as a grows larger.
In this case, the increase in the marginal rate can actually increase payments to
the worker when w − a < 0. This higher subsidy makes working more attractive,
consequently reducing the reservation wage.



     Exercise 5.12. Search and nonhuman wealth

An unemployed worker receives every period an offer to work forever at wage
w, where w is drawn from the distribution F (w). Offers are independently and
identically distributed. Every agent has another source of income, which we
denote ²t , and that may be regarded as nonhuman wealth. In every period all
agents get a realization of ²t , which is independently and identically distributed
over time, with distribution function G(²). We also assume that wt and ²t are
independent. The objective of a worker is to maximize
                                   ∞
                                   X
                               E         β t yt ,    0 < β < 1,
                                   t=0

where yt = w + φ²t if the worker has accepted a job that pays w, and yt = c + ²t
if the worker remains unemployed. We assume that 0 < φ < 1 to reflect the fact
that an employed worker has less time to engage in the collection of nonhuman
wealth. Assume 1 > prob{w ≥ c + (1 − φ)²} > 0.
Analyze the worker’s problem. Write down Bellman’s equation and show that
the reservation wage increases with the level of nonhuman wealth.


     Solution

If the worker accepts a job that pays w, her total utility is given by
                         ∞
                         X                                         β
           w + θ²t + E         β j (w + φ²t+j ) = w + φ² +            (w + φE²).
                         j=1
                                                                  1−β
                   5. SEARCH, MATCHING, AND UNEMPLOYMENT                              71

Then let v(w, ²) be the optimal value of the objective function for an unemployed
worker who has an offer w in hand and nonhuman wealth equal to ². Then
                              (
                                              β
              v(w, ²) = max         w + φ² + 1−β (w + φE²)
                                                                               )
                                                RR
                                   c+²+β              v(w0 , ²0 )dF (w 0 )dG(²0 ) .

The second term in the bracketed expression does not depend on w. Therefore,
for each ², the optimal strategy is to choose a reservation wage. To see how the
reservation wage w̄(²) varies with ², write the indifference condition :

                               β
              w̄(²) + φ² +           (w̄(²) + φE(²)) = c + ² + βQ,
                              1−β
            RR
where Q ≡ β    v(w0 , ²0 )dF (dw 0 )dG(²0 ). Rearanging gives :

                   w̄(²)                          β
                         = c + (1 − φ)² + βQ −        φE(²).
                   1−β                         1−β
Since 0 < φ < 1, the above equation implies that w̄(²) is an increasing function
of ².



   Exercise 5.13. Search and asset accumulation
A worker receives, when unemployed, an offer to work forever at wage w, where
w is drawn from the distribution F (w). Wage offers are identically and indepen-
dently distributed over time. The worker maximizes
                             ∞
                             X
                         E         β t u(ct , lt ),     0 < β < 1,
                             t=0

where ct is consumption and lt is leisure. Assume Rt is i.i.d. with distribution
H(R). The budget constraint is given by
                             at+1 ≤ Rt (at + wt nt − ct )
and lt + nt ≤ 1 if the worker has a job that pays wt . If the worker is unemployed,
the budget constraint is at+1 ≤ Rt (at +z −ct ) and lt = 1. Here z is unemployment
compensation. It is assumed that u(·) is bounded and that at , the worker’s asset
position, cannot be negative. This corresponds to a no borrowing assumption.
Write down Bellman’s equation for this problem.

   Solution
A natural choice for the state variable in this problem is the vector (w, a, R, s),
where s = E if the worker is employed and s = U if the worker is unemployed.
72                 5. SEARCH, MATCHING, AND UNEMPLOYMENT

We first analyze the problem faced by an employed worker. This problem is
                               ½          Z                      ¾
                                                  0  0         0
          v(w, a, R, E) = max0 u(c, l) + β v(w, a , R , E)dH(R ) ,
                           c,l,n,a

subject to a0 ≤ R(a + wn − c), l + n ≤ 1.
If the worker is unemployed, the value function is given by
                        n
   v(w, a, R, U ) = max   v(w, a, R, E),
                              h           RR                                      io
                          max u(c, 1) + β     v(w0 , a0 , R0 , U )F (dw 0 )dH(R0 ) ,

subject to a0 ≤ R(a + z − c), where the first term in brackets reflects the value
of accepting the job, whereas the second represents the value of remaining unem-
ployed. In each case the asset position is chosen optimally. It is possible to argue
that the optimal strategy is to set a reservation wage w̄(a, R) that depends on
both the asset position and the rate of interest R.


     Exercise 5.14. Temporary unemployment compensation
Each period an unemployed worker draws one, and only one, offer to work forever
at wage w. Wages are i.i.d. draws from theP c.d.f.        F , where F (0) = 0 and
F (B) = 1. The worker seeks to maximize E ∞ t=0 β t
                                                    y t , where yt is the sum of the
worker’s wage and unemployment compensation, if any. The worker is entitled
to unemployment compensation in the amount γ > 0 only during the first period
that she is unemployed. After one period on unemployment compensation, the
worker receives none.
a. Write the Bellman equations for this problem. Prove that the worker’s optimal
policy is a time-varying reservation wage strategy.
b. Show how the worker’s reservation wage varies with the duration of unem-
ployment.
c. Show how the worker’s “hazard of leaving unemployment” (i.e., the probability
of accepting a job offer) varies with the duration of unemployment.
Now assume that the worker is also entitled to unemployment compensation if
she quits a job. As before, the worker receives unemployment compensation in
the amount of γ during the first period of an unemployment spell, and zero during
the remaining part of an unemployment spell. (To requalify for unemployment
compensation, the worker must find a job and work for at least one period.)
The timing of events is as follows. At the very beginning of a period, a worker
who was employed in the previous period must decide whether or not to quit.
The decision is irreversible; that is, a quitter cannot return to an old job. If
the worker quits, she draws a new wage offer as described previously, and if she
accepts the offer she immediately starts earning that wage without suffering any
period of unemployment.
                   5. SEARCH, MATCHING, AND UNEMPLOYMENT                          73

d. Write the Bellman equations for this problem. [Hint: At the very beginning
of a period, let v e (w) denote the value of a worker who was employed in the
previous period with wage w (before any wage draw in the current period). Let
v1u (w0 ) be the value of an unemployed worker who has drawn wage offer w 0 and
who is entitled to unemployment compensation, if she rejects the offer. Similarly,
      u
let v+   (w0 ) be the value of an unemployed worker who has drawn wage offer w 0
but who is not eligible for unemployment compensation.]
e. Characterize the three reservation wages, w̄ e , w̄1u , and w̄+
                                                                 u
                                                                   , associated with
the value functions in part d. How are they related to γ? (Hint: Two of the
reservation wages are straightforward to characterize, while the remaining one
depends on the actual parameterization of the model.)

   Solution
a. Let vu1 (w) (v+
                 u
                   (w)) be the value function of an unemployed worker with wage
w in hand in the first (after the first) period of unemployment and who behaves
optimally. The Bellman equation are :
                                  ½              Z B               ¾
                 u                    w               +  0      0
                v1 (w) = max              ,γ + β     v (w )dF (w )
                            {A,R}   1−β           0
                                  ½          Z B              ¾
                 u                    w           +   0     0
                v+ (w) = max              ,β     v (w )dF (w ) .
                            {A,R}   1−β       0
In each of the two periods the problem is a standard one, leading to a reservation
wage policy. If the unemployed is in her fist period of unemployment then the
optimal policy is accept for w ≥ w 1 and reject otherwise. The Rassociated value
                       w                             w1           B
function is v1u (w) = 1−β for w ≥ w 1 and v1u (w) = 1−β = γ + β 0 v1u (w0 )dF (w 0 )
for w < w 1 . After one (or more) period(s) of unemployment the optimal policy
is to accept when w ≥ w + and to reject otherwise.
b. To show that w 1 > w+ , just write the two indifference conditions satisfied by
the two reservation wages :
                        w1
                                        RB u 0
                       1−β
                             =  γ+    β   0
                                            v+ (w )dF (w 0 )
                       w +              R  B u
                       1−β
                             =        β 0 v+   (w0 )dF (w 0 ).
Clearly, w 1 > w+ . Note that w 1 − w+ = (1 − β)γ. This equality has the
following interpretation. Suppose that an unemployed worker in the first period
of unemployment receive an offer w. If he accepts it, her payoff is :
                                         w
                                            .
                                       1−β
If, on the other hand, she rejects it, then her payoff is made of two terms. The
first term is the unemployment compensation, γ. The second term is the option
                                     w+
value of waiting, which is equal to 1−β . Thus, the worker accepts whenever :

                               w ≥ γ(1 − β) + w + .
74                 5. SEARCH, MATCHING, AND UNEMPLOYMENT

in term of “average payoff” per period, the worker accepts whenever the wage
exceed the reservation wage w + plus the annuity value of receiving unemployment
compensation today.
c. The workers probability of finding a job is determined by P [w > w i ], i = +, 1.
Since w1 > w+ , the probability of accepting a job is higher after one period of
unemployment: P [w > w + ] ≥ P [w > w 1 ].
d. v1u (w) and v+u
                   are defined as in question a. Let v e (w) be the value of an
employed worker with wage w in hand and who behaves optimally. The three
value functions are solution of the following system of Bellman equations :

                                  ½               Z B                        ¾
           e                              e
(34)      v (w) =      max     w + βv (w),              v1u (w0 )dF (w 0 )
                      stay,quit             0
                                 ½                  Z B                ¾
           u                            e                 u  0      0
(35)      v1 (w) =    max         w + βv (w), γ + β     v+ (w )dF (w )
                   accept,reject                     0
                                 ½              Z B               ¾
           u                            e            u   0      0
(36)      v+ (w) =    max         w + βv (w), β     v+ (w )dF (w ) .
                      accept,reject                       0
                                                  RB                             RB
e. To simplify notations, define first Q1 ≡ 0 v1u (w0 )dF (w 0 ) and Q+ ≡        0
                                                                                       u
                                                                                      v+ (w0 )dF (w 0 ).
The characterization goes in several steps.

Step 1 : Characterizing v e (w)

From equation (34) it is clear that if an employed worker decides to stay in a
given period, he will decide to stay in all the subsequent periods. Thus we can
rewrite equation (34) as :
                                                  ½           ¾
                             e                         w
                           v (w) = max                    , Q1 .
                                      stay,quit       1−β
Furthermore, the above expression shows that the optimal policy of an employed
worker is of the reservation wage form. Specificaly, there exists we such that for
all w ≤ we the worker quits her job and v e (w) = Q1 . For all w > we the worker
                                w
stays at her job and v e (w) = 1−β . Lastly, we solves the following indifference
condition :
                                 we
                                      = Q1 .
                                1−β
Step 2 : Unemployed workers have reservation wage policies

Since v e (w) is increasing, it follows from the Bellman equations (35) and (36)
that unemployed workers have reservation wage policies. Let w 1 and w+ be the
corresponding reservation wages.
                   5. SEARCH, MATCHING, AND UNEMPLOYMENT                            75

Step 3 : Q1 ≥ Q+

Equations (35) and (36) imply that v1u (w) ≥ v+  u
                                                   (w) for all w. In word, unem-
ployed workers are better off in the first period of unemployment because they
receive the benefit γ. Integrating with respect to dF (w 0 ) implies that Q1 ≥ Q+ .

Step 4 : w + = 0

This is an intuitive fact. After the first period of unemployment a worker does not
receive any benefit. Accepting an offer and quitting is as least as good as rejecting
an offer and drawing again next period. Let’s prove it formally. Assume w + > 0.
Then w+ + βv+  u
                 (w+ ) = βQ+ < Q1 = we + βv e (we ). Since w + v e (w) is weakly in-
creasing this implies that w + < we . Thus v e (w+ ) = Q1 . Thus w+ + βQ1 = βQ+ ,
implying that w + = β(Q+ − Q1 ) < 0. A contradiction.

Step 5 : γ > 0 ⇒ w 1 > 0

This is also an intuitive result. Since an unemployed workers receives benefits in
its first period of unemployment and, she surely refuses to work when the wage
offer is small enough. Formally, assume that w1 = 0. Then v1u (w) = v+u
                                                                        (w) for all
w. This implies that Q1 = Q+ . Also, since w1 = 0, accepting wage offer 0 is at
least as good as rejecting it. Thus :

                  0 + βv e (0) = βQ1 ≥ γ + βQ+ = γ + βQ1 .
When we use the fact that v e (0) = Q1 . The above implies γ < 0. A contradiction.

Step 6 : w1 ≤ we and w1 = γ − β(Q1 − Q+ )

The Bellman equation (35) implies that v1u (w) ≥ γ + βQ+ for all w. Integrating
with respect to dF (w 0 ) gives Q1 ≥ γ + βQ+ . From the indifference conditions
defining w e and w1 , this is equivalent to :

                          we + βv e (we ) ≥ w1 + βv e (w1 ).
Since v e is weakly increasing, it implies that w e ≥ w1 . Thus v e (w1 ) = Q1 . Using
this equality to rewrite the indifference condition defining w 1 gives :

               w1 + βQ1 = γ + βQ+ ⇒ w1 = γ + β(Q+ − Q1 ).
The above manipulations show that 0 = w + ≤ w1 ≤ we and w1 = γ +β(Q+ −Q1 ).

Note that w1 is strictly less than γ. This reflect the fact that, when an agent
reject, she receives unemployment compensation this period but also loose the
right to receive it next period. On the other hand,if she accepts, she keeps the
right to receive unemployment compensation next period.
Lastly, we cannot tell whether or not w e is smaller or greater than gamma.
76                 5. SEARCH, MATCHING, AND UNEMPLOYMENT

Step 6 : Dependence on γ

First note that the value functions are weakly increasing in γ. To see why
this is the case consider the optimization problem when the compensation is
γ 0 = γ + ∆γ > γ. A posible decision rule for the agents is to use the same reser-
vation wage policy as when the compensation is γ. Payoffs are the same as before
except for an additional ∆γ in the first period of unemployment. Therefore, the
value of using this decision rule has increased. Now, under the optimal decision
rule, the value is necessarily even larger.
                                                RB
Since v1u (w, γ) is weakly increasing in γ, Q1 = 0 v1u (w0 , γ)dF (w 0 ) is also weakly
increasing in γ. Thus we = (1 − β)Q1 is weakly increasing in γ.



     Exercise 5.15. Seasons, I
                                             P
An unemployed worker seeks to maximize E ∞            t
                                                t=0 β yt , where β ∈ (0, 1), yt is her
income at time t, and E is the mathematical expectation operator. The person’s
income consists of one of two parts: unemployment compensation of c that she
receives each period she remains unemployed, or a fixed wage w that the worker
receives if employed. Once employed, the worker is employed forever with no
chance of being fired. Every odd period (i.e., t = 1, 3, 5, . . .) the worker receives
one offer to work forever at a wage drawn from the c.d.f. F (W ) = prob(w ≤ W ).
Assume that F (0) = 0 and F (B) = 1 for some B > 0. Successive draws from F
are independent. Every even period (i.e., t = 0, 2, 4, . . .), the unemployed worker
receives two offers to work forever at a wage drawn from F . Each of the two
offers is drawn independently from F .
a. Formulate the Bellman equations for the unemployed person’s problem.
b. Describe the form of the worker’s optimal policy.

     Solution
a. The Bellman equations for the even periods V e (w) and for the odd periods
V o (w) are:
                             ½             Z B                  ¾
              o                 w                e  0   2    0
             V (w) = max            ,c + β     V (w )dF (w )
                       {A,R}   1−β          0
                             ½             Z B                 ¾
              e                 w                o  0      0
             V (w) = max            ,c + β     V (w )dF (w ) .
                       {A,R}   1−β          0


b. The workers optimal policy will be a reservation wage in each period below
which the worker refuses the best offer outstanding and above which she accepts.
For the odd periods, this reservation wage obeys the equation
                      5. SEARCH, MATCHING, AND UNEMPLOYMENT                                    77


                        Z w̄e                          Z B
          w̄o                   w̄e       2   0                w0
                = c+β                 dF (w ) + β                   dF 2 (w0 )
         1−β             0    1 −   β                   w̄ e 1 −  β
                  Z w̄e o         e               Z B o
                       w̄ − β w̄        2   0           (w̄ − βw0 ) 2 0
              c =                   dF (w ) +                         dF (w )
                   0     1−β                       w̄e       1−β
                                                                        Z B
                     o      e     2   e        o
                                                 ¡        2    e
                                                                 ¢
      c(1 − β) = (w̄ − β w̄ ) F (w̄ ) + w̄ 1 − F (w̄ ) − β                    w0 dF 2 (w0 ),
                                                                           w̄e
and
                         Z w̄o                         Z B
           w̄e                   w̄o         0                w0
                 = c+β                 dF (w ) + β                  dF (w0 )
          1−β             0    1 −   β                  w̄o 1 −   β
                   Z w̄o e         o             Z B e
                        w̄ − β w̄                       w̄ − βw0
               c =                   dF (w0 ) +                     dF (w0 )
                    0     1 −  β                  w̄ o    1 −   β
                                                                       Z B
                      e      o        o       e
                                                ¡         2   o
                                                                 ¢
       c(1 − β) = (w̄ − β w̄ ) F (w̄ ) + w̄ 1 − F (w̄ ) − β                  w0 dF (w0 ).
                                                                           w̄o
Equating the two expressions for c(1 − β):
                       Z B                                    Z B
   o      e 2   e             0  2   0     e     o     o
 w̄ − β w̄ F (w̄ ) − β      w dF (w ) = w̄ − β w̄ F (w̄ ) − β      w0 dF (w0 )
                        w̄e                                    w̄o
         ·             Z B           ¸         ·              Z B                ¸
     o      o     o          0     0       e       e 2    e           0   2    0
  w̄ + β w̄ F (w̄ ) +       w dF (w ) = w̄ + β w̄ F (w̄ ) +        w dF (w ) .
                            w̄o                                                  w̄e
                                                 RB                    RB
For a given w̄, we know that w̄F 2 (w̄) + w̄ w0 dF 2 (w0 ) ≥ w̄F (w̄) + w̄ w0 dF (w0 ).
                                                           RB
Furthermore, using Leibnitz rule, we know that w̄F (w̄)+ w̄ w0 dF (w0 ) and w̄F 2 (w̄)+
RB 0 2 0
 w̄
    w dF (w ) are increasing in w̄. Using these two facts, the above equality can-
not hold for w̄ o < w̄e , because both terms on the left hand side would be less
than the corresponding terms on the right hand side. We conclude that w̄ o ≥ w̄e .
The intuition is that in odd periods, the unemployed worker’s outside option (re-
ject and two draws next period) is better than his outside option in even periods
(reject and sample once next period). That makes him want a higher reservation
wage in odd periods.

   Exercise 5.16. Seasons, II
Consider the following problem confronting an unemployed worker. The worker
wants to maximize              ∞
                              X
                           E0    β t yt , β ∈ (0, 1),
                                       0
where yt = wt in periods in which the worker is employed and yt = c in periods
in which the worker is unemployed, where wt is a wage rate and c is a constant
level of unemployment compensation. At the start of each period, an unemployed
worker receives one and only one offer to work at a wage w drawn from a c.d.f.
F (W ), where F (0) = 0, F (B) = 1 for some B > 0. Successive draws from F
78                    5. SEARCH, MATCHING, AND UNEMPLOYMENT

are identically and independently distributed. There is no recall of past offers.
Only unemployed workers receive wage offers. The wage is fixed as long as the
worker remains in the job. The only way a worker can leave a job is if she is
fired. At the beginning of each odd period (t = 1, 3, . . .), a previously employed
worker faces the probability of π ∈ (0, 1) of being fired. If a worker is fired, she
immediately receives a new draw of an offer to work at wage w. At each even
period (t = 0, 2, . . .), there is no chance of being fired.
a. Formulate a Bellman equation for the worker’s problem.
b. Describe the form of the worker’s optimal policy.

     Solution
a. Let vUe (w), (vUo (w)) be the value an uemployed worker who has just received
an offer w at the start of an even (odd) period and proceeds optimally. Similarly,
let vEe (w), (vEo (w)) be the value an employed with wage w the beginning of an
even (odd) period. The Bellman equation for vUe is :

(37)            ½      · Z B                               ¸                          ¾
                                                                    Z B
vUe (w) = max       w+β π     o   0      0            o
                             vU (w )dF (w ) + (1 − π)vE (w) , c + β      o   0      0
                                                                        vU (w )dF (w ) .
                              0                                              0
Similarly, the Bellman equation for vUo is :
                                  ½                  Z B               ¾
(38)            vUo (w) = max           e
                                   w + vE (w), c + β      e   0      0
                                                         vU (w )dF (w ) .
                                                      0
Bellman equations for employed workers are :

(39)            vEo (w) = w + βvEe (w)
                                  Z B
                  e
(40)            vE (w) = w + βπ       vUo (w0 )dF (w 0 ) + (1 − π)vEo (w).
                                        0
There is no “max” in the two Bellman equations because it was assumed that the
only way an employed worker can leave a job is by being fired. These 4 Bellman
equations fully describe the worker’s dynamic choice problem.
b. First, solve for vEo (w) and vEe (w) in terms of the optimum value functions.
This produces:
                                                   R
                   e        w (1 + (1 − π)β) + βπ vUo (w0 )dF (w 0 )
                 vE (w) =
                                        1 − (1 − π)β 2
                                                R
                      o        w (1 + β) + β 2 π v o (w0 )dF (w 0 )
                     vE (w) =                                       .
                                        1 − (1 − π)β 2
Replacing those expressions in (37) and (38) shows that a reservation wage policy
is optimal in this setting. Let the w e (wo ) be the reservation wage in even (odd)
periods. The indifference conditions are :
                     5. SEARCH, MATCHING, AND UNEMPLOYMENT                        79


       · Z B                                ¸        Z B
       e      o   0      0            o   e
   w +β π    vU (w )dF (w ) + (1 − π)vE (w ) = c + β     vUo (w0 )dF (w 0 ),
               0                                                   0
which implies that:

                         1 + β(1 − π)        β 2π
                    we                 +               Qo = c + βQo ,
                         1 − (1 − π)β 2 1 − (1 − π)β 2
              RB
where Qo =≡     0
                     vUo (w0 )dF (w 0 ). Some simple algebra yields:

                      1 − (1 − π)β 2    β [1 − (1 − π)β 2 ] Qo − β 2 πQo
(41)         we =                    c+
                      1 + β(1 − π)               1 + β(1 − π)
                                   2
                      1 − (1 − π)β      β [1 − (π + β(1 − π))β 2 ] o
(42)                =                c+                            Q.
                      1 + β(1 − π)            1 + β(1 − π)
Similarly, we know from (38) that, at the reservation wage w o :

(43)                            wo + β [vEe (wo )] = c + βQe ,
which in turn implies that:

                     (1 − β)          β 2π
                    wo          +               Qo = c + βQe .
                  1 − (1 − π)β 2 1 − (1 − π)β 2
Some simple algebra yields:

               o     1 − (1 − π)β 2    β [1 − (1 − π)β 2 ] Qe − β 2 πQo
(44)          w =                   c+                                  .
                         1−β                       1−β
Now, we can compare the reservation wages in even and odd periods by comparing
eqs. (41) and (44). It is easy to verify that w o ≥ we whenever Qe ≥ Qo ,
since β ∈ (0, 1) and π ∈ (0, 1) . This means that, if the optimum value of the
unemployed (or, equivalently, just fired) worker is higher at the start of an even
period than at the start of an odd period, then the worker sets a higher reservation
wage in the odd period, because he is quite willing to wait another period while
being unemployed (in order to receive Qe ). Also note that the reverse statement
is not necessarily true.

   Exercise 5.17. Gittins indices for beginners
At the end of each period, a worker can switch between two jobs, A and B, to
begin the following period at a wage that will be drawn at the beginning of next
period from a wage distribution specific to job A or B, and to the worker’s history
of past wage draws from jobs of either type A or type B. The worker must decide
to stay or leave a job at the end of a period after his wage for this period on
his current job has been received, but before knowing what his wage would be
next period in either job. The wage at either job is described by a job-specific
80                  5. SEARCH, MATCHING, AND UNEMPLOYMENT

n-state Markov chain. Each period the worker works at either job A or job B.
At the end of the period, before observing next period’s wage on either job, he
chooses which job to go to next period. We use lowercase letters (i, j = 1, . . . , n)
to denote states for job A, and uppercase letters (I, J = 1, . . . n) for job B. There
is no option of being unemployed.
Let wa (i) be the wage on job A when state i occurs and wb (I) be the wage on
job B when state I occurs. Let A = [Aij ] be the matrix of one-step transition
probabilities between the states on job A, and let B = [Bij ] be the matrix for job
B. If the worker leaves a job and later decides to returns to it, he draws the wage
for his first new period on the job from the conditional distribution determined
by his last wage working at that job.
The worker’s objective
                  P∞ ist to maximize the expected discounted value of his life-
time earnings, E0 t=0 β yt , where β ∈ (0, 1) is the discount factor, and where yt
is his wage from whichever job he is working at in period t.
a. Consider a worker who has worked at both jobs before. Suppose that wa (i)
was the last wage the worker receives on job A and wb (I) the last wage on job B.
Write the Bellman equation for the worker.
b. Suppose that the worker is just entering the labor force. The first time
he works at job A, the probability distribution for his initial wage is π a =
(πa1 , . . . , πan ). Similarly, the probability distribution for his initial wage on job B
is πb = (πb1 , . . . , πbn ) Formulate the decision problem for a new worker, who must
decide which job to take initially. [Hint: Let va (i) be the expected discounted
present value of lifetime earnings for a worker who was last in state i on job A
and has never worked on job B; define vb (I) symmetrically.]

     Solution
    a. First we consider a worker who has worked at both jobs before. Suppose
that wa (i) was the last wage the worker receives at job A and wb (I) was the last
wage he received at job B.
Let v(i, I) be the optimum value, starting from next period, of a worker currently
active in job A at wage wa (i) who has also worked at job B (at some point in
the past) at a wage wB (I). Again, this worker is at the end of the current period
and has to decide where to go in the next period before having observed next
period’s wage on either job. Similarly, let v(I, i) be the optimum value, starting
from next period, of a worker currently active in job B at wage wb (I) who has
also worked at job A (at some point in the past) at a wage wA (i).
The Bellman equation for the first worker is given by:

                        ( n                                n
                                                                                       )
                         X                                 X
(45)   v(i, I) = max           Aij [wA (j) + βv(j, I)] ,         BIJ [wB (J) + βv(J, i)] ,
                  A,B
                         j=1                               J=1
                      5. SEARCH, MATCHING, AND UNEMPLOYMENT                                          81

while the Bellman equation of the second worker is given by:
                          ( n                                    n
                                                                                                 )
                           X                                     X
(46)    v(I, i) = max              Aij [wA (j) + βv(j, I)] ,           BIJ [wB (J) + βv(J, i)] .
                    A,B
                            j=1                                  J=1

Notice how v(i, I) = v(I, i) by comparing the r.h.s of eq. (45) and eq. (46).
This implies we can let v(i, I) denote the optimum value of a worker whose last
wage at job A was wa (i) and at job B was wb (I). (Let’s agree on making the first
argument of the value function the last wage at A).
                          ( n                                    n
                                                                                                 )
                           X                                     X
(47)    v(i, I) = max              Aij [wA (j) + βv(j, I)] ,           BIJ [wB (J) + βv(i, J)] .
                    A,B
                            j=1                                  J=1

b. Next, we turn to consider the problem facing a worker who is just about to
enter the labor force. Working backwards, we first examine the case of a worker
who has only worked on one job. Let va (i) denote the optimum value of a worker
at job A, making a wage wa (i), who has never worked on job B before and let
vb (I) denote the same value for a worker earning a wage wb (I) at B, who has
never worked job A before. Then we know that the Bellman equation of a worker
who has only worked at A is:
                      ( n                                  n
                                                                                           )
                       X                                   X
       va (i) = max             Aij [wa (j) + βva (j)] ,         πb (J) [wb (J) + βv(i, J)] ,
               A,B
                          j=1                              J=1

while the Bellman equationof a worker who has only worked at B is given by:
                      ( n                                        n
                                                                                             )
                       X                                         X
       vb (I) = max             πa (j) [wa (j) + βv(j, J)] ,           BIJ [wb (J) + βvb (J)] ,
               A,B
                          j=1                                    J=1

Finally, consider the problem facing a worker who is about to enter the labor
force; naturally, she starts at the job that yields the highest expected lifetime
utility:
                     ( n                                   n
                                                                                         )
                      X                                    X
         Q = max            πa (i) [wa (i) + βva (i)] ,          πa (I) [wb (I) + βvb (I)] .
              A,B
                      i=1                                  I=1
Now we have exhaustively described the worker’s problem, proceeding back-
wards, which is the only way to solve this type of problem.

   Exercise 5.18. Jovanovic (1979b)
An employed worker in the tth period of tenure on the current job receives a
wage wt = xt (1 − φt − st ) where xt is job-specific human capital, φt ∈ (0, 1) is the
fraction of time that the worker spends investing in job-specific human capital,
82                  5. SEARCH, MATCHING, AND UNEMPLOYMENT

and st ∈ (0, 1) is the fraction of time that the worker spends searching for a
new job offer. If the worker devotes st to searching at t, then with probability
π(st ) ∈ (0, 1) at the beginning of t + 1 the worker receives a new job offer to
begin working at new job-specific capital level µ0 drawn from the c. d. f. F (·).
That is, searching for a new job offer promises the prospect of instantaneously
reinitializing job-specific human capital at µ0 . Assume that π 0 (s) > 0, π 00 (s) < 0.
While on a given job, job-specific human capital evolves according to
                          xt+1 = G(xt , φt ) = g(xt φt ) − δxt ,
        0          00
where g (·) > 0, g (·) < 0, δ ∈ (0, 1) is a depreciation rate, and x0 = µ where
t is tenure on the job, and µ is the value of the “match” parameter drawn at
theP start of the current job. The worker is risk neutral and seeks to maximize
E0 ∞         τ
       τ =0 β yτ , where yτ is his wage in period τ .
a. Formulate the worker’s Bellman equation.
b. Describe the worker’s decision rule for deciding whether to accept an offer µ0
at the beginning of next period.
c. Assume that g(xφ) = A(xφ)α for A > 0, α ∈ (0, 1). Assume that π(s) =
s.5 . Assume that F is a discrete n-valued distribution with probabilities f i ; for
example, let fi = n−1 . Write a Matlab program to solve the Bellman equation.
Compute the optimal policies for φ, s and display them.
     Solution
a. Let v(x) be the optimum value at the start of the current period of an employed
worker who has accumulated a total amount x of job-specific capital and who
proceeds optimally. We know the worker will accept the new draw µ0 at the start
of next period whenever µ0 exceeds next period’s capital on the old job x0 . This
means her Bellman equation is given by:
                                ·                          Z                                    ¸
                                                  0                         0       0       0
v(x) = max x(1 − φ − s) + β ((1 − π(s))v(x )) + π(s)               max(v(µ ), v(x ))dF (µ )
         φ,s

                            ·                            ·Z                                         ¸¸
                                              0                       0         0       0       0
v(x) = max x(1−φ−s)+β ((1 − π(s))v(x )) + π(s)                     v(µ )dF (µ ) + F (x )v(x )
         φ,s                                                  x0
,
where x0 = G(x, φ) = g(xφ) − δx
b. The question is answered in part a.
c. The matlab code is in zia.stanford.edu/public/sarg/webdocs/teaching/econ210/
in files jova.m and readjova.txt
          CHAPTER 6

Recursive (partial) equilibrium




              83
84                      6. RECURSIVE (PARTIAL) EQUILIBRIUM

     Exercise 6.1. A competitive firm
A competitive firm seeks to maximize
                                  X∞
(48)                                 β t Rt ,
                                         t=0

where β ∈ (0, 1), and time-t revenue Rt is
(49)                    Rt = pt yt − .5d(yt+1 − yt )2 ,   d > 0,
where pt is the price of output, and yt is the time-t output of the firm. Here
.5d(yt+1 − yt )2 measures the firm’s cost of adjusting its rate of output. The firm
starts with a given initial level of output y0 . The price lies on the market demand
curve
(50)                           pt = A0 − A1 Yt , A0 , A1 > 0,
where Yt is the market level of output, which the firm takes as exogenous, and
which the firm believes follows the law of motion
(51)                               Yt+1 = H0 + H1 Yt ,
with Y0 as a fixed initial condition.
a. Formulate the Bellman equation for the firm’s problem.
b. Formulate the firm’s problem as a discounted optimal linear regulator problem,
being careful to describe all of the objects needed. What is the state for the firm’s
problem?
c. Use the Matlab program olrp.m to solve the firm’s problem for the following
parameter values: A0 = 100, A1 = .05, β = .95, d = 10, H0 = 95.5, and H1 = .95.
Express the solution of the firm’s problem in the form
(52)                            yt+1 = h0 + h1 yt + h2 Yt ,
giving values for the hj ’s.
d. If there were n identical competitive firms all behaving according to equation
(52), what would equation (52) imply for the actual law of motion (51) for the
market supply Y ?
e. Formulate the Euler equation for the firm’s problem.

     Solution
a. The Bellman equation corresponding to the firm’s problem is given by:

                                                                2
(53)         v (y, Y ) = max
                          0
                             (A0 − A1 Y ) y − .5d (y 0 − y) + βv(y 0 , Y 0 ),
                          y

where Y evolves according to the farmer’s beliefs about the aggregate law of
motion:

                                     Y 0 = H0 + H1 Y.
                       6. RECURSIVE (PARTIAL) EQUILIBRIUM                        85

b. The discounted optimal linear regulator:
Consider the first order difference equation fot the state vector:
                                                 
                   yt+1         1 0     0        yt       1
                 Yt+1  =  0 H1 H0   Yt  +  0  (ut ) ,
                   1            0 0     1        1        0
where the control
               £ ut is given
                           ¤ by (yt+1 − yt ) . The state for the firm’s problem is
           0
given by xt = yt Yt 1 . Having defined A and B, we only need to define Q
and R (note that the interaction between u and x can be left out here: no H
matrix is needed!).
                                                             
                                      0        −A1 /2 A0 /2
                   Q = −.5d; R =  −A1 /2 0             0     .
                                      A0 /2    0        0
c. olrp To compute the solution, type [f, p] = olrp[β, A, B, R, Q] or A0 =
100, A1 = .05, β = .95, d = 10, H0 = 95.5 and H1 = .95, this yields:

                          yt+1 − yt = 96.9487 − 0.0463Yt ,
or

                       yt+1 = 96.9487 + yt − 0.0463Yt ,
which means h0 = 96.94, h1 = 1 and h2 = −.0463 in Yt+1 = h0 + h1 yt + h2 Yt .
d. In equilibrium the actual law of motion for the market supply Yt would be :

                     Yt+1 = nyt+1
                          = nh0 + (h1 + nh2 ) Yt
                          = n (96.9487) + (1 − n0.0463) Yt .

e. First derive the r.h.s of (53) w.r.t. y 0 to get the first order condition:

                          −d (y 0 − y) + βv1 (y 0 , Y 0 ) = 0,
where vi denotes the partial derivative w.r.t. i-th argument.
In the infinite horizon case, there is an additional transversality condition that
needs to be satisfied:

                                 lim β t v(yt , Yt ) = 0.
                                 t→∞
Applying the Benveniste-Scheinkman formula yields:

                         v1 (y, Y ) = A0 − A1 Y + d(y 0 − y).
Substitution in the first order condition yields the Euler equation:

                  −d (y 0 − y) + β (A0 − A1 Y 0 + d(y 00 − y 0 ))) = 0.
86                    6. RECURSIVE (PARTIAL) EQUILIBRIUM

     Exercise 6.2. Rational Expectations
Now assume that the firm in exercise 6.1 is “representative.” We implement this
idea by setting n = 1. In equilibrium, we will require that yt = Yt , but we don’t
want to impose this condition at the stage that the firm is optimizing (because we
want to retain competitive behavior). Define a rational expectations equilibrium
to be a pair of numbers H0 , H1 such that if the representative firm solves the
problem ascribed to it in exercise 6.1, then the firm’s optimal behavior given by
equation (52) implies that yt = Yt ∀ t ≥ 0.
a. Use the program that you wrote for exercise 6.1 to determine which if any of
the following pairs (H0 , H1 ) is a rational expectations equilibrium: (i) (94.0888,
.9211); (ii) (93.22, .9433), and (iii) (95.08187459215024, .95245906270392)?
b. Describe an iterative algorithm by which the program that you wrote for
exercise 6.1 might be used to compute a rational expectations equilibrium. You
are not being asked actually to use the algorithm you are suggesting.

     Solution
a. Recall that a rational expectations equilibrium is defined to be a pair H0 , H1
such that the representative firm’s optimal decision rule, given these beliefs, im-
plies that yt = Yt for all t
(i).
                            £                       ¤
                        F = 0 0.0350 −118.4668 .
Check that this does not produce an RE equilibrium.
(ii).
                            £                       ¤
                        F = 0 0.0431 −104.7364 .
Check that this does not produce an RE equilibrium.
(iii).
                             £               ¤
                        F = 0 0.0475 −95.0819 .
The third feedback function implies that:

                     yt+1 − yt = −F xt = .950819 − .0475Yt ,
which implies in equilibrium (yt = Yt for all t) that:

                           Yt+1 = .950819 + .95245Yt .
The beliefs are such that the law of motion for aggregate output M(H) implied
by the optimal policy -given these beliefs H- equals these beliefs. This is an RE
equilibrium.
b. Recall that the farmer’s optimization maps his beliefs into a law of motion.
Let H denote his beliefs. Then we can define H 0 = M(H) where M is the
operator mapping beliefs into a law of motion. Since a RE equilibrium is a fixed
                       6. RECURSIVE (PARTIAL) EQUILIBRIUM                         87

point of the M operator, it seems natural to try an iterative approach where,
starting with initial beliefs H0 , we iterate on the M operator until convergence
is achieved: H = M(H).

   Exercise 6.3. Maximizing Welfare
A planner seeks to maximize the welfare criterion
                                       ∞
                                       X
                                               β t St ,
                                         t=0

where St is “consumer surplus plus producer surplus” defined to be
                                  Z Yt
             St = S(Yt , Yt+1 ) =      (A0 − A1 x)d x − .5d(Yt+1 − Yt )2 .
                                   0

a. Formulate the planner’s Bellman equation.
b. Formulate the planner’s problem as an optimal linear regulator, and solve it
using the Matlab program olrp.m . Represent the solution in the form Yt+1 =
s0 + s 1 Yt .
c. Compare your answer in part b with your answer to part a of exercise 6.2.

   Solution
a. We look for an optimal policy function and an optimal value function by
solving the Bellman equation:

                                   A1 2                2
               v(Y ) = max A0 Y −    Y − .5d (Y 0 − Y ) + βv(Y 0 ).
                        Y0         2
                                   0
Derive the r.h.s. with respect to Y to derive the Euler equation:

                             −d (Y 0 − Y ) + βv(Y 0 ) = 0.
In the infinite horizon case, there is an additional transversality condition that
needs to be satisfied:

                                   lim β t v(Yt ) = 0.
                                   t→∞
Applying the Benveniste-Scheinkman formula yields:

                          v 0 (Y ) = A0 − A1 Y + d(Y 0 − Y ).
To understand this last result, note that the law of motion for Y is such that
the next period’s value of Y, i.e. Y 0 , is independent of Y. Or, using the notation
in Chapter 2, ∂g(u,x)
                 x
                      = 0 when xt+1 = g(ut ) = ut . In this case, the Benveniste
Sheinkman condition becomes:
88                     6. RECURSIVE (PARTIAL) EQUILIBRIUM



                          ∂                 ∂
              V 0 (x) =      r(x, h(x)) + β g(x, h(x))V 0 (g(x, h(x))
                          ∂x               ∂x
                          ∂
                      =      r(x, h(x)).
                          ∂x
b. The discounted optimal linear regulator for the planner.
Consider the first order difference equation for the state vector:
                     ·       ¸ ·         ¸·    ¸ · ¸
                       Yt+1         1 0     Yt        1
                               =                 +        (ut ) ,
                       1            0 1     1         0
where the control£ ut is given
                           ¤ by (Yt+1 − Yt ) . The state for the planner’s problem
is given by x0t = Yt 1 . Having defined A and B, we only need to define Q
and R (note that the interaction between u and x can be left out here: no H
matrix is needed!).
                                      ·                  ¸
                                        −A1 /2 A0 /2
                        Q = −.5d; R =                      .
                                        A0 /2     0
The feedback rule that results for A0 = 100, A1 = .05, β = .95, d = 10 :

                             F = 0.0475 −95.0819 ,
which implies:

(54)                         Yt+1 = .950819 + .95245Yt .

c. This confirms that the planner’s problem yields a law of motion for aggre-
gate output that corresponds to a rational expectations competitive equilibrium
(identical to 6 .2 .a.(iii )). To see why, recall from the previous ex. that if we take
eq. (54) to be the farmer’s initial beliefs, the law of motion that is implied by
these beliefs is given by the same equation.

     Exercise 6.4. Monopoly
A monopolist faces the industry demand curve (50) and chooses Yt to maximize
                                       ∞
                                       X
(55)                                         β t Rt
                                       t=0
                                   2
where Rt = pt Yt − .5d(Yt+1 − Yt ) and where Y0 is given.
a. Formulate the firm’s Bellman equation.
b. For the parameter values listed in exercise 6.1, formulate and solve the firm’s
problem using olrp.m .
c. Compare your answer in part b with the answer you obtained to part b of
exercise 6.3.
                        6. RECURSIVE (PARTIAL) EQUILIBRIUM                        89

     Solution
a. We look for an optimal policy function and an optimal value function by
solving the Bellman equation:
                                                          2
                v(Y ) = max
                          0
                            A0 Y − A1 Y 2 − .5d (Y 0 − Y ) + βv(Y 0 )
                          Y
.
b. Consider the first order difference equation for the state vector:
                    ·        ¸ ·         ¸·      ¸ · ¸
                       Yt+1        1 0       Yt        1
                              =                     +       (ut ) ,
                       1           0 1       1         0
where the control ut is given
                            £     by¤ (Yt+1 − Yt ) . The state for the monopolist’s
                       0
problem is given by xt = Yt 1 . Having defined A and B, we only need to
define Q and R (note that the interaction between u and x can be left out here:
no H matrix is needed!).
                                          ·               ¸
                                            −A1 A0 /2
                         Q = −.5d; R =                      .
                                            A0 /2 0
The feedback rule that results for A0 = 100, A1 = .05, β = .95, d = 10 :

                            F = 0.0735 −73.4729 ,
which implies that Yt follows the following law of motion:

                           Yt+1 − Yt = −.0735Yt + 73.4729,
or

                              Yt+1 = .9265Yt + 73.4729,
which clearly shows that the monopolist restricts total output to increase profits.
In fact, you can easily verify that the unconditional mean of Yt in the monopolist’s
case is exactly half of that in the competitive equilibrium.

     Exercise 6.5. Duopoly
An industry consists of two firms that jointly face the industry-wide demand
curve (50), where now Yt = y1t + y2t . Firm i = 1, 2 maximizes
                                   X ∞
(56)                                    β t Rit ,
                                           t=0
                                       2
where Rit = pt yit − .5d(yi,t+1 − yit ) .
a. Define a Markov perfect equilibrium for this industry.
b. Formulate the Bellman equation for each firm.
c. Use the Matlab program nash.m to compute an equilibrium, assuming the
parameter values listed in exercise 6.1.
90                       6. RECURSIVE (PARTIAL) EQUILIBRIUM

     Solution
a. Consider firm i0 s Bellman equation:

(57)               vi (yit , y−i,t ) = max {Rit + βvi (yit+1 , y−i,t+1 )} ,
                                     yi,t+1

where the maximization is subject to:

                                 y−i,t+1 = f−i (y−i,t , yi,t ),
and Ri,t = pt yit − .5d (yit+1 − yit )2 where pt = A0 − A1 (y1t + y2t ).

   Definition 1. A Markov perfect equilibrium is a pair of value functions v i
and a pair of policy functions fi for i = 1, 2 such that
a. Given f−i , vi satisfies the Bellman equation.
b. The policy function fi attains the r.h.s. of the Bellman equation.

The crucial thing to note is that firm i optimizes taking the other firm’s policy
function as given.
b. Consider firm 10 s Bellman equation:
(58)                v1 (y1t , y2,t ) = max {R1t + βv1 (y1t+1 , y2,t+1 )} ,
                                    y1,t+1

where the maximization is subject to:

                              y2,t+1 = f2 (y2,t , y1,t ).
Similarly, firm 2’s Bellman equation:

(59)                v2 (y2t , y1,t ) = max {R2t + βv2 (y2t+1 , y1,t+1 )} ,
                                    y1,t+1

where the maximization is subject to:

                                  y1,t+1 = f1 (y1,t , y2,t ).
c. For computational reasons, we’ll assume β = 1. Consider the state vector
dynamics, represented in the usual way:
                             xt+1 = At xt + B1 u1t + B2 u2t ,
where:
                                                       
              y1t+1        1 0 0        y1t         1         0
              y2t+1 =  0 1 0   y2t  +  0  u1,t  1  u2,t ,
              1            0 0 1        1           0         0
where u1t = y1,t+1 − y1,t and u2,t = y2,t+1 − y2,t are the control variables of firms
1 and 2 resp.
Now, let the return function Ri,t be given by:
                        6. RECURSIVE (PARTIAL) EQUILIBRIUM                           91



                Ri,t = x0t Ri xt + u0i,t Qi ui,t + u0−i,t Si u−i,t for i = 1, 2.
Then it is easy to verify that:
                                                                           
                                        −A1                    −A1 /2 A0 /2
              Q1 = −.5d; S1 = 0; R1 =  −A1 /2                 0      0     ,
                                        A0 /2                  0      0
                                                                           
                                        0                      −A1 /2 0
                                      
              Q2 = −.5d; S2 = 0; R1 = −A1 /2                   −A1    A0 /2  .
                                        0                      A0 /2  0
The equilibrium feedback rule for firm 1 is given by:
                                £                      ¤
               y1,t+1 − y1,t = − .0878 0.02520 −83.3556 xt .
The equilibrium feedback rule for firm 2 is given by:
                                     £                                    ¤
                y2,t+1 − y2,t = −        0.02520 .0878 −83.3556               xt .
This implies that in equilibrium:

                 yi,t+1 = 83.3556 + (1 − .0878)yi,t + 0.02520y−i,t .


   Exercise 6.6. Self-Control
This is a model of a human who has time-inconsistent preferences, of a type
proposed by Phelps and Pollak (1968) and used by Laibson (1994). The human
lives from t = 0, . . . , T . Think of the human as actually consisting of T + 1
personalities, one for each period. Each personality is a distinct agent (i.e., a
distinct utility function and constraint set). Personality T has preferences ordered
by u(cT ) and personality t < T has preferences that are ordered by
                                              T −t
                                              X
                                 u(ct ) + δ          β j u(ct+j ),
                                              j=1

where u(·) is a twice continuously differentiable, increasing and strictly concave
function of consumption of a single good; β ∈ (0, 1), and δ ∈ (0, 1]. When δ < 1,
preferences of the sequence of personalities are time-inconsistent (that is, not
recursive). At each t, let there be a savings technology described by
                                    kt+1 + ct ≤ f (kt ),
where f is a production function with f 0 > 0, f 00 ≤ 0.
a. Define a Markov perfect equilibrium for the T + 1 personalities.
92                       6. RECURSIVE (PARTIAL) EQUILIBRIUM

b. Argue that the Nash-Markov equilibrium can be computed by iterating on
the following functional equations:

                     Vj+1 (k) = maxc {u(c) + βδWj (k 0 )} ,
(60)
                     Wj+1 (k) = u[cj+1 (k)] + βWj [f (k) − cj+1 (k)].
where cj+1 (k) is the maximizer of the right side of the first equation for j + 1,
starting from W0 (k) = u[f (k)] . Here Wj (k) is the value of u(cT −j )+βu(cT −j+1 )+
. . . + β T −j u(cT ), taking the decision rules ch (k) as given for h = 0, 1, . . . , j.
c. State the optimization problem of the time-0 person who is given the power
to dictate the choices of all subsequent persons. Write the Bellman equations for
this problem. The time zero person is said to have a commitment technology for
“self-control” in this problem.

     Solution
a.
    Definition 2. A Markov perfect equilibrium is a set of T + 1 value functions
{Vt }Tt=0 and policy functions {ct , kt+1 }Tt=0 such that:
a. ∀t ∈ Υ = {0, 1, ..., T }, the value function for agent t, Vt , satisfies the Bellman
equation given the policy functions for all other agents s in Υ, s 6= t.
b. ∀t ∈ Υ = {0, 1, ..., T }, the policy functions {ct , kt+1 } attains the right hand
side of the Bellman equation.

b. The person living at time t values current consumption and the consumption
of future selves living after period t, summarized in the value function WT −t . This
’equilibrium’ value function WT −t consists of the utility derived from consump-
tion derived in period t and in the future. It imposes market clearing (hence
’equilibrium’ value function). The original problem formulation is not recursive
because of the different time horizon of each of the agents. The introduction of
the value function W makes the problem recursive again.
c. Working backwards from period T with W0 (k 0 ) = u(f (k 0 )) we have
                     V1 (k) = max {u(c) + βδu(f (k 0 ))} =⇒ c∗1 (k)
                                  {c}

                  W1 (k) = u (c∗1 (k)) + δW0 (k 0 )
                         = u (c∗1 (k)) + δu(f (f (k) − c∗1 (k))).
The person who lives 2 periods before time T has the follwoing value function
        V2 (k)   =     max {u(c) + βδW1 (k 0 )}
                       {c}
                           ©                                                           ª
                 =     max u(c) + βδu (c∗1 (k 0 )) + βδ 2 u(f (f (k 0 ) − c∗1 (k 0 )))
                        {c}

                 =⇒    c∗2 (k).
                          6. RECURSIVE (PARTIAL) EQUILIBRIUM                                 93

This person takes into account the optimal consumption decisions that the people
after him will make. Each person takes into account that future persons will face
a shorter decision horizon. Updating the equilibrium value function:

W2 (k) = u (c∗2 (k)) + δW1 (f (k) − c∗2 (k))
       = u (c∗2 (k)) + δu (c∗1 (f (k) − c∗2 (k))) + δ 2 u(f (f (f (k) − c∗2 (k)) − c∗1 (f (k) − c∗2 (k)))).
Working backwards until time zero, we find
               VT (k) = max {u(c) + βδWT −1 (k 0 )} =⇒ c∗T (k)
                              {c}

              WT (k) = u (c∗T (k)) + δWT −1 (f (k) − c∗T (k)), k is given.
Person zero has the ability to commit to self control by choosing c∗T (k) descibed
in the manner above. By doing so he will leave the right amount of resources
for future persons to make the consumption decisions in the same ’controlled’
fashion.
                 CHAPTER 7

Competitive equilibrium with complete markets




                     95
96           7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS

     Exercise 7.1. Existence of a representative consumer
Suppose households 1 and 2 have one-period utility functions u(c1 ) and w(c2 ), re-
spectively, where u and w are both increasing, strictly concave, twice-differentiable
functions of a scalar consumption rate. Consider the Pareto problem:
                                £                         ¤
                           max
                            1 2
                                  θu(c1 ) + (1 − θ)w(c2 )
                             {c ,c }

subject to the constraint c1 + c2 = c. Show that the solution of this problem has
the form of a concave utility function vθ (c), which depends on the Pareto weight
θ.
    The function vθ (c) is the utility function of the representative consumer. Such
a representative consumer always lurks within a complete markets competitive
equilibrium even with heterogeneous preferences.

     Solution
Let x = (c1 , c2 ). Define the set
                        ©                                             ª
                 B(c) ≡ x = (c1 , c2 ) :, c1 ≥ 0, c2 ≥ 0, c1 + c2 ≤ c
Also define the continuous, strictly concave and increasing function ṽ(x) = θu(c 1 )+
(1 − θ)w(c2 ). We are interested in the program :

                                       v(c) = max ṽ(x).
                                             x∈B(c)

B(c) is compact and ṽ(x) is continuous. Thus ṽ(x) achieves its maximum on B.
Since furthermore ṽ is strictly concave, this maximum is unique. Call it x∗ (c).
We now have for (c, c0 ) ≥ 0 and λ ∈ [0, 1]:

(61)            λv(c) + (1 − λ)v(c0 ) = λṽ(x∗ (c)) + (1 − λ)ṽ(x∗ (c0 ))
(62)                                  ≤ ṽ (λx∗ (c) + (1 − λ)x∗ (c0 ))
(63)                                  ≤ v(λc + (1 − λ)c0 ),
where the first equality is definitional, the second line holds because of concavity
of ṽ(x) and the third line holds because λx∗ (c)+(1−λ)x∗ (c0 ) is B (λc + (1 − λ)c0 )
and less than the maximum attainable value.

     Exercise 7.2. Term structure of interest rates
Consider an economy with a single consumer. There is one good in the economy,
which arrives in the form of an exogenous endowment obeying
                                        yt+1 = λt+1 yt ,
where yt is the endowment at time t and {λt+1 } is governed by a two-state Markov
chain with transition matrix
                                ·                   ¸
                                     p11   1 − p11
                            P =                       ,
                                  1 − p22     p22
            7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS                       97
                             £         ¤
and initial distribution πλ = π0 1 − π0 . The value of λt is given by λ̄1 = .98
in state 1 and λ̄2 = 1.03 in state 2. Assume that the history of ys , λs up to
t is observed at time t. The consumer has endowment process {yt } and has
preferences over consumption streams that are ordered by
                                            ∞
                                            X
                                       E0         β t u(ct )
                                            t=0

                                c1−γ
where β ∈ (0, 1) and u(c) = 1−γ , where γ ≥ 1.
a. Define a competitive equilibrium, being careful to name all of the objects of
which it consists.
b. Tell how to compute a competitive equilibrium. For the remainder of this
problem, suppose that p11 = .8, p22 = .85, π0 = .5, β = .96, and γ = 2. Suppose
that the economy begins with λ0 = .98 and y0 = 1.
c. Compute the (unconditional) average growth rate of consumption, computed
before having observed λ0 .
d. Compute the time-0 prices of three risk-free discount bonds, in particular,
those promising to pay one unit of time-j consumption for j = 0, 1, 2, respectively.
e. Compute the time-0 prices of three bonds, in particular, ones promising to pay
one unit of time-j consumption contingent on λj = λ̄1 for j = 0, 1, 2, respectively.
f. Compute the time-0 prices of three bonds, in particular, ones promising to pay
one unit of time-j consumption contingent on λj = λ̄2 for j = 0, 1, 2, respectively.
g. Compare the prices that you computed in parts d, e, and f.

   Solution
The program associated with the exercise is ex0702.m .
a. The household’s problem is to maximize
                                        ∞
                                        X
                                   E0         β t u(ct (λt )),
                                        t=0

subject to the time zero budget constraint
                        ∞
                        X                           ∞
                                                    X
                              qt0 (λt )ct (λt ) ≤         qt0 (λt )yt (λt ).
                        t=0                         t=0
                                                                               ∞
    Definition 3. A competitive equilibrium is an allocation {ct (λt )}t=0 and a
price system {qt0 (λt )}∞
                        t=0 such that the allocation solves the household problem and
markets clear.
Observe that, in a representative agent economy, market clearing imposes that
ct (λt ) = yt (λt ).
98            7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS

b. After normalization (q00 = 1) this leads to the familiar first order condition
                                                ·          ¸−γ
                       0 t           t    t       ct (λt )
                      qt (λ |λ0 ) = β π(λ |λ0 )                .
                                                  c0 (λ0 )
Imposing market clearing (ct (λt ) = yt (λt ), ∀t, λt ), this leads to
                                                  ·          ¸−γ
                          0 t          t   t        yt (λt )
                        qt (λ |λ0 ) = β π(λ |λ0 )                .
                                                    y0 (λ0 )
Using yt+1 = λt+1 yt , we obtain

(64)            qt0 (λt |λ0 ) = β t π(λt |λ0 ) [λt λt−1 ...λ1 ]−γ
(65)                         = β t π(λt |λt−1 )...π(λ1 |λ0 ) [λt λt−1 ...λ1 ]−γ .

c. Think of an econometrician computing time average of the growth rate :
                                      T            T
                                   1 X yt       1X
                                              =       λt
                                   T t=1 yt−1   T t=1
The above time average will converge almost surely towards the expectation of λ
under the stationary probability 1 , that is towards
                           1 − p22                 1 − p11
                                        λ̄1 +                   λ̄2 .
                      1 − p11 + 1 − p22       1 − p11 + 1 − p22
e. f. and g. Assume as in the text that the economy starts at λ0 = .98. We use
the formula (64).

A bond promising to pay 1 unit of consumption at time 0 has a time zero price
of Q0 = 1.

A bond promising to pay 1 unit of consumption at time 1 in state λ̄1 has a time
zero price of Q11 = q10 (λ̄1 ) = .7997. A bond promising to pay 1 unit of con-
sumption at time 1 in state λ̄2 has a time zero price of Q11 = q10 (λ̄2 ) = .1810.
Lastly, a “risk free” bond promising one unit for sure at time 1 has time zero
price Q1 = Q11 + Q12 = .9806.

A bond promising to pay 1 unit of consumption at time 2 in state λ̄1 has a time
zero price of

                    Q21 = q20 (λ̄1 , λ¯1 ) + q20 (λ̄1 , λ¯2 ) = .666.
A bond promising to pay 1 unit of consumption at time 2 in state λ̄2 has a time
zero price of

                         Q22 = q20 (λ̄2 , λ¯1 ) + q20 (λ̄2 , λ¯2 ) = .2839.
     1We know that the Markov chain λ
                                        t is ergodic (all coefficients of P are positive is sufficient).
             7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS                         99

Lastly, a bond promising to pay 1 unit for sure at time 2 has time zero price

                            Q2 = Q21 + Q22 = .9505.
The prices of risk free bonds decrease as the pay-out period is further into the
future (i.e. with their maturity). Furthermore, consumption continent on the
bad state is more expansive than consumption continent on the good state.

     Exercise 7.3.
An economy consists of two infinitely lived consumers named i = 1, 2. There is
one nonstorable consumption good. Consumer i consumes cit at time t. Consumer
i ranks consumption streams by
                                  X∞
                                      β t u(cit ),
                                      t=0

where β ∈ (0, 1) and u(c) is increasing, strictly concave, and twice continuously
differentiable. Consumer 1 is endowed with a stream of the consumption good
yti = 1, 0, 0, 1, 0, 0, 1, . . .. Consumer 2 is endowed with a stream of the consumption
good 0, 1, 1, 0, 1, 1, 0, . . .. Assume that there are complete markets with time-0
trading.
a. Define a competitive equilibrium.
b. Compute a competitive equilibrium.
c. Suppose that one of the consumers markets a derivative asset that promises
to pay .05 units of consumption each period. What would the price of that asset
be?

     Solution
a.
    Definition 4. A competitive equilibrium is a feasible allocation {c it }∞
                                                                            t=0 for
                                             0 ∞
each agent i = 1, 2 and a price sequence {qt }t=0 such that
(i) Given price, the allocation
                            P solves Pthei household’s problem, ∀i
                                 i
The allocation is feasible:   i ct =  i yt .

b. The first order conditions for optimality of the household problem imply for
                            β t u0 (ci )
each agent i = 1, 2: qt0 = u0 (ci )t .
                                    0
Guess and verify a competitive equilibrium in which the consumption of each
agent is constant across time. The first order condition implies then that qt0 = β t .
To find ci , use agent i’s budget constraint :
                                          ∞
                                          X
                                (1 − β)           β t yti = ci .
                                            t=0
For agent 1 this gives :
100          7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS



(66)                   c1 = (1 − β)(1 + β 3 + β 6 + ...)
                               1−β
(67)                       =
                               1 − β3
                                    1
(68)                       =              .
                               1 + β + β2
For agent 2 market clearing implies that c2 = 1 − c1 .
c. Since markets are complete markets, the derivative security is redundant: it
can be priced off the Arrow-Debreu priced determined in part b. The time zero
price of the derivative is
                                X∞
                                              0.05
                           P0 =     0.05Qt =       .
                                t=0
                                             1 − β


      Exercise 7.4.
Consider a pure endowment economy with a single representative consumer;
{ct , dt }∞
          t=0 are the consumption and endowment processes, respectively. Feasi-
ble allocations satisfy
                                     ct ≤ d t .
The endowment process is described by
                                dt+1 = λt+1 dt .
The growth rate λt+1 is described by a two-state Markov process with transition
probabilities
                         Pij = Prob(λt+1 = λ̄j |λt = λ̄i ).
Assume that                             ·        ¸
                                          .8 .2
                                 P =                ,
                                          .1 .9
and that                                 ·      ¸
                                            .97
                                  λ̄ =            .
                                           1.03
In addition, λ0 = .97 and d0 = 1 are both known at date 0. The consumer has
preferences over consumption ordered by
                                    X ∞
                                              c1−γ
                                E0        βt t ,
                                     t=0
                                              1−γ
where E0 is the mathematical expectation operator, conditioned on information
known at time 0, γ = 2, β = .95.
Part I
At time 0, after d0 and λ0 are known, there are complete markets in date- and
state-contingent claims. The market prices are denominated in units of time-0
consumption goods.
              7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS                           101

a. Define a competitive equilibrium, being careful to specify all the objects
composing an equilibrium.
b. Compute the equilibrium price of a claim to one unit of consumption at
date 5, denominated in units of time-0 consumption, contingent on the following
history of growth rates: (λ1 , λ2 , . . . , λ5 ) = (.97, .97, 1.03, .97, 1.03). Please give a
numerical answer.
c. Compute the equilibrium price of a claim to one unit of consumption at date 5,
denominated in units of time-0 consumption, contingent on the following history
of growth rates: (λ1 , λ2 , . . . , λ5 ) = (1.03, 1.03, 1.03, 1.03, .97).
d. Give a formula for the price at time 0 of a claim on the entire endowment
sequence.
e. Give a formula for the price at time 0 of a claim on consumption in period 5,
contingent on the growth rate λ5 being .97 (regardless of the intervening growth
rates).
Part II
Now assume a different market structure. Assume that at each date t ≥ 0 there
is a complete set of one-period forward Arrow securities.
f. Define a (recursive) competitive equilibrium with Arrow securities, being care-
ful to define all of the objects that compose such an equilibrium.
g. For the representative consumer in this economy, for each state compute the
“natural debt limits” that constrain state-contingent borrowing.
h. Compute a competitive equilibrium with Arrow securities. In particular,
compute both the pricing kernel and the allocation.
i. An entrepreneur enters this economy and proposes to issue a new security
each period, namely, a risk-free two-period bond. Such a bond issued in period t
promises to pay one unit of consumption at time t + 1 for sure. Find the price of
this new security in period t, contingent on λt .

    Solution
Part I
a. First, the household’s problem is to maximize
                                            ∞
                                            X
                                       E0         β t u(ct (λt ))
                                            t=0

subject to the time zero budget constraint
                          ∞
                          X                            ∞
                                                       X
                                 qt0 (λt )ct (λt ) ≤         qt0 (λt )dt (λt ).
                           t=0                         t=0

We now define an equilibrium:
102            7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS

    Definition 5. A competitive equilibrium is an allocation {ct (λt )}∞    t=0 and a
price system {qt0 (λt )}∞
                        t=0 such that the allocation solves the household problem and
markets clear.
      After normalizing qt0 = 1, the first order condition gives:
                                                          ·              ¸−γ
                                                              ct (λt )
                             qt0 (λt ) = β t π(λt |λ0 )                        .
                                                              c0 (λ0 )
Imposing market clearing ct (λt ) = dt (λt ), ∀t, λt , this leads to
                                                          ·  ¸−γ
                                                    dt (λt )
                             qt0 (λt ) = β t π(λt |λ0 )          .
                                                    d0 (λ0 )
When d0 = 1 and using dt+1 = λt+1 dt , we obtain
                     qt0 (λt ) = β t π(λt |λ0 ) [λt λt−1 ...λ1 ]−γ .
b. A claim to one unit of consumption at date 5 contingent on the history
λ51 = (0.97, 0.97, 1.03, 0.97, 1.03) has a time zero price q of

(69)                      q50 (λ51 ) = β 5 π(λ51 |λ0 ) [λ5 λ4 ...λ1 ]−γ .
(70)                                 = 0.0025
c. A claim to one unit of consumption at date 5 contingent on the history
λ51 = (1.03, 1.03, 1.03, 1.03, 0.97) has a time zero price q of

                          q50 (λ51 ) = β 5 π(λ51 |λ0 ) [λ5 λ4 ...λ1 ]−γ
                                     = 0.0111.
d. The (cum-dividend) price at time zero of a claim on the entire endowment is

                                  ∞ X
                                  X                            µ            ¶−γ
                                              t       t            d(λt )
(71)                 P (0) =                 β π(λ |λ0 )                           d(λt )
                                  t=0
                                                                   d(0)
                                        λt
                                             ∞
                                             X
(72)                         = d(0)E0              β t (λ1 λ2 . . . λt )1−γ .
                                             t=0
(73)
Note that the price is proportional to the initial dividend. We are going to derive
a recursive formula to compute P (0)/d(0), the price dividend ratio. Let p( λ̄i ))
be the time zero price-dividend ratio of a claim on the entire endowment when
the initial state is λ̄i . The above formula can be written recursively as :

                              ¡                                                 ¢
(74)           p(λ̄i ) = 1 + β π(λ̄1 |λ̄i )λ̄1−γ                       1−γ
                                             1 p(λ̄1 ) + π(λ̄2 |λ̄i )λ̄2 p(λ̄2 ) .

Define
              7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS                        103


                                      µ                       ¶
                                          π11 λ̄1−γ
                                                1   π12 λ̄1−γ
                                                          2
                              R≡                                .
                                          π21 λ̄1−γ
                                                1   π22 λ̄1−γ
                                                          2

Formula (74) is, in matrix form :

                                      p = I + βRp.
Which gives
                                                          µ ¶
                                                     −1    1
                                p = (I − βR)                  .
                                                           1
Thus P (0) =.
e. A claim to one unit of consumption at date 5 contingent on the period 5
growth rate λ5 = 0.97 has a time zero price q of

                                           £ ¤
                                  q = 0.955 Q5 11
                                    = 0.4402,
where Q is
                                      µ                           ¶
                                           π11 λ̄−γ
                                                 1  π12 λ̄−γ2
                               Q=
                                           π21 λ̄−γ
                                                 1  π 22 λ̄ −γ
                                                            2 .

Part II
f.
   Definition 6. A recursive competitive equilibrium is a pricing kernel Q(λ0 |λ),
a pair of decision rules {c(θ, λ), θ 0 (θ, λ, λ0 )} and a value function v(θ, λ) such that
        • the decision rules solve the households problem
                        v(θ, λ) = max
                                    0
                                      {u(c) + βE [v(θ 0 , λ0 )]} ,
                                   {c,θ }

          subject to the budget constraint
                               X
                           c+     θ0 (λ0 )Q(λ0 |λ) ≤ d + θ,
                                 λ0

          a non negativity constraint on consumption c ≥ 0 and the natural debt
          limits (see part g) −θ 0 (λ0 ) ≤ Ā(λ0 ).
        • For each realization {λt }∞  t=0 , the allocation induced by the decision rule
          clears the markets:c = d and θ = 0

g. The natural debt limit can be recursively computed as
                                      X
                        Ā(λ) = d + β     Q(λ0 |λ)Ā(λ0 ).
                                                λ0
104           7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS

It states that the borrowing limit is the present discounted value of future income.
Anticipating the results of the next part we can rewrite Ā(λ) as
                                    ∞
                                    X
                  Ā(λt = λ̄1 ) =         β j π(λj |λ̄1 ) [λt+j λt+j−1 ...λt ]−γ dj .
                                    j=0


h. Using the first order condition from the household’s problem
                       ( Ã                              !                   )
                                     X
       v(θ, λ) = max 0
                         u d+θ−         θ0 (λ0 )Q(λ0 |λ) + βE [v(θ 0 , λ0 )] .
                     {θ }
                                               λ0

The first order condition w.r.t. θ 0 is:
             Ã                             !
                        X
           uc d + θ −      θ0 (λ0 )Q(λ0 |λ) Q(λ0 |λ) = βπ(λ0 |λ)vθ (θ0 , λ0 ),
                             λ0

and the envelope theorem
                                         Ã                                  !
                                                     X
                        vθ (θ, λ) = uc       d+θ−           θ0 (λ0 )Q(λ0 |λ) .
                                                       λ0

This gives the familiar expression for the pricing kernel
                                                         · 0 ¸−γ
                  0            0  uc (c(λ0 ))        0    c(λ )
               Q(λ |λ) = βπ(λ |λ)             = βπ(λ |λ)         .
                                   uc (c(λ))              c(λ)
In this representative agent economy aggregate endowments equal aggregate con-
sumption (c = d), so that
                                                                −γ
                                  Q(λ0 |λ) = βπ(λ0 |λ) [λ0 ]         ,
and θ0 (λ0 ) = 0, ∀λ0
i. The price of the security promising to pay 1 unit of consumption at time t + 2,
when the state of the economy at time t is λt = λ̄1 is given by
        Q(λ00 = λ̄1 |λ = λ̄1 ) + Q(λ00 = λ̄2 |λ = λ̄1 ) = 0.5615 + 0.3166 = 0.8781,
and if the state of the economy at time t is λt = λ̄2 it is
        Q(λ00 = λ̄1 |λ = λ̄2 ) + Q(λ00 = λ̄2 |λ = λ̄2 ) = 0.1533 + 0.7936 = 0.9469.


      Exercise 7.5. A periodic economy
An economy consists of two consumers, named i = 1, 2. The economy exists
in discrete time for periods t ≥ 0. There is one good in the economy, which
is not storable and arrives in the form of an endowment stream owned by each
consumer. The endowments to consumers i = 1, 2 are

                                              yt1 = st ,
(75)
                                              yt2 = 1.
              7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS                     105

    where st is a random variable governed by a two-state Markov chain with
values st = s̄1 = 0 or st = s̄2 = 1. The Markov chain has time-invariant
transition probabilities denoted by π(st+1 = s0 |st = s) = π(s0 |s), and the proba-
bility distribution over the initial state is π0 (s). The aggregate endowment at t is
Y (st ) = yt1 + yt2 .
    Let ci denote the stochastic process of consumption for agent i. Household i
orders consumption streams according to
                                          ∞ X
                                          X
                                 i
(2)                         U (c ) =                 β t ln[cit (st )]π(st ),
                                          t=0   st

where π(st ) is the probability of the history st = (s0 , s1 , . . . , st ).
a. Give a formula for π(st ).
Let θ ∈ (0, 1) be a Pareto weight on household 1. Consider the planning problem
                               ©        1                  2
                                                               ª
(3)                       max
                           1 2
                                 θ ln(c   ) + (1 − θ) ln(c   )
                              c ,c

where the maximization is subject to
(4)                                  c1t (st ) + c2t (st ) ≤ Y (st ).
Solve the Pareto problem, taking θ as a parameter.

b. Define a competitive equilibrium with history-dependent Arrow-Debreu secu-
rities traded once and for all at time 0. Be careful to define all of the objects that
compose a competitive equilibrium.
c. Compute the competitive equilibrium price system (i.e., find the prices of all
of the Arrow-Debreu securities).
d. Tell the relationship between the solutions (indexed by θ) of the Pareto prob-
lem and the competitive equilibrium allocation. If you wish, refer to the two
welfare theorems.
e. Briefly tell how you can compute the competitive equilibrium price system
before you have figured out the competitive equilibrium allocation.
f. Now define a recursive competitive equilibrium with trading every period in
one-period Arrow securities only. Describe all of the objects of which such an
equilibrium is composed. (Please denominate the prices of one-period time–t + 1
state-contingent Arrow securities in units of time-t consumption.) Define the
“natural borrowing limits” for each consumer in each state. Tell how to compute
these natural borrowing limits.
g. Tell how to compute the prices of one-period Arrow securities. How many
prices are there (i.e., how many numbers do you have to compute)? Compute
all of· these ¸prices in the special case that β = .95 and π(sj |si ) = Pij where
       .8 .2
P =            .
       .3 .7
106           7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS

h. Within the one-period Arrow securities economy, a new asset is introduced.
One of the households decides to market a one-period-ahead riskless claim to one
unit of consumption (a one-period real bill). Compute the equilibrium prices of
this security when st = 0 and when st = 1. Justify your formula for these prices
in terms of first principles.
i. Within the one-period Arrow securities equilibrium, a new asset is introduced.
One of the households decides to market a two-period-ahead riskless claim to one
unit consumption (a two-period real bill). Compute the equilibrium prices of this
security when st = 0 and when st = 1.
j. Within the one-period Arrow securities equilibrium, a new asset is introduced.
One of the households decides at time t to market five-period-ahead claims to
consumption at t + 5 contingent on the value of st+5 . Compute the equilibrium
prices of these securities when st = 0 and st = 1 and st+5 = 0 and st+5 = 1.
      Solution
a. The chain st = (s0 , s1 , ..., st−1 , st ) has probability π(st ) = π(st |st−1 )π(st−1 |st−2 )...π(s1 |s0 )π0 (s0 ).
b. The first order condition for the planner problem is:
                                 θ        1−θ
                                   1
                                     =              .
                                 c     Y (st ) − c1
This implies the following optimal allocation among agents 1 and 2: c1 (st ) =
θY (st ) and c2 (st ) = (1 − θ)Y (st ). For later reference, this rule implies
                                        c2 (st )   1−θ
                                                 =     .
                                        c1 (st )    θ
c.
    Definition 7. A competitive equilibrium is a feasible allocation {c it , θt+1
                                                                              i
                                                                                  }∞
                                                                                   t=0
                                                  ∞
for each agent i = 1, 2 and a pricing kernel {Qt }t=0 such that
       • Given the pricing kernel, the allocation solves the household’s problem,
          ∀i                                                      P i           P i
       • The Pdecision rules satisfy market clearing conditions:     i ct =        i yt
                   i
          and i θt+1   = 0, ∀t

d. The first order conditions for optimality of the household problem imply for
agent 1 and 2:
                                β t π(st |s0 )c10 (s0 )      β t π(st |s0 )c20 (s0 )
                 Q(st |s0 ) =                            =                           .
                                      c1t (st |s0 )               c2t (st |s0 )
This leads to
                                     c2t (st |s0 )    c20 (s0 )
                                                    =           .
                                     c1t (st |s0 )    c10 (s0 )
Imposing the market clearing condition at time zero, we find
                             c2t (st |s0 )       Y0 (s0 ) − c10 (s0 )
                                             =                         .
                             c1t (st |s0 )            c10 (s0 )
              7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS                             107

Furthermore c10 (s0 ) will be some fraction ξ of Y0 (s0 ). Therefore, the competitive
equilibrium is characterized by
                                     c2t (st |s0 )   1−ξ
                                      1 t
                                                   =     ,
                                     ct (s |s0 )      ξ
imposing market clearing at time t we obtain the optimal consumption rules
c2t (st |s0 ) = (1 − ξ)Y (st ) and c1t (st |s0 ) = ξY (st ). It follows that the Arrow-Debreu
prices are given by
                                                 β t π(st |s0 )Y (s0 )
                                 Q(st |s0 ) =                          .
                                                        Y (st )
e. In part b we computed the Pareto optimal allocation and in part c the com-
petitive equilibrium. The two welfare theorems state conditions under which the
Pareto optimal allocation can be implemented as a competitive equilibrium (sup-
ported by prices Q(st |s0 )) and vice versa. The planner’s weight θ on agent 1 has
its counterpart in ξ, the inverse of agent 1’s marginal utility of consumption at
time zero as a fraction of aggregate income.
f. Competitive equilibrium prices can be priced off the IMRS for a representative
agent whose consumption equals the aggregate endowment Y (st ). This is possible
because there is no ex-ante heterogeneity between the agents so that there exists
a representative consumer.
g.
    Definition 8. A recursive competitive equilibrium is an initial wealth distri-
bution Θ0 , decision rules {ci (θ, s), θ 0i (θ, s, s0 )}2i=1 a pricing kernel Q(s0 |s) a pair
of value functions {v i (θ, s)}2i=1 such that
       • Given the pricing kernel and the initial wealth distribution, the decision
          rules solve each household’s problem
       • For all realizations {st }∞ t=0 , the
                                            P allocations
                                                        P      implied P
                                                                       decision rules satisfy
          market clearing conditions: i cit = i y i (st ) and i θt+1        i
                                                                              (s0 ) = 0, ∀t, s0
The natural borrowing limit rules out Ponzi schemes by restricting short positions
in Arrow securities to be less than the present discounted value of all future income
in each state tomorrow.
                                      i
                                    −θt+1 (s0 ) ≤ Āi (s0 ),
where                                XX
                         Āi (st ) =           Q(sτ |st )y i (sτ |st ).
                                      τ ≥t sτ |st

As noted in the text, this natural debt limit can be recursively computed using
                                                          Y (s) i 0
                          Āi (s) = y i (s) + βπ(s0 |s)           Ā (s ).
                                                          Y (s0 )

h. There are 2 Arrow securities for each state today: one pays off 1 unit of
consumption in the bad state s̄1 , the other pays off one unit of consumption in
108           7. COMPETITIVE EQUILIBRIUM WITH COMPLETE MARKETS

the good state s̄2 . Their price p can be determined from the Arrow-Debreu price;
                     Q(st+1 |s0 )       t+1 t     βπ(st+1 |st )Y (st )
                                  = p(s    |s ) =                      .
                      Q(st |s0 )                      Y (st+1 )
We find: p11 = 0.76, p12 = 0.095, p21 = 0.57, p22 = 0.665.
i. Since markets are complete, they span the payoff of this new asset. The price
of this redundant security is the sum of the Arrow securities in each of the states
tomorrow. In state s̄1 the price of this asset is p11 + p12 = 0.885 and in state s̄2
it is p21 + p22 = 1.235.
j. First compute the price of two-period Arrow securities:
                                  X β 2 π(st+2 |s0 )π(s0 |st )Y (st )
                   p(st+2 |st ) =                   t+2 )
                                                                      .
                                  s 0
                                              Y  (s
These Arrow prices are p̃11 = 0.63175, p̃12 = 0.135375, p̃21 = 0.81225, p̃22 =
0.496375. In state s̄1 the price of this new asset is p̃11 + p̃12 = 0.767125 and in
state s̄2 it is p̃21 + p̃22 = 1.308625.
k. The method is the same. The transition matrix is P 5 . The answer is p̂11 =
0.4739, p̂12 = 0.1499, p̂21 = 0.8995, p̂22 = 0.3240.
         CHAPTER 8

Overlapping generation models




             109
110                   8. OVERLAPPING GENERATION MODELS

      Exercise 8.1.
At each date t ≥ 1, an economy consists of overlapping generations of a constant
number N of two-period-lived agents. Young agents born in t have preferences
over consumption streams of a single good that are ordered by u(ctt ) + u(ctt+1 ),
where u(c) = c1−γ /(1 − γ), and where cit is the consumption of an agent born
at i in time t. It is understood that γ > 0, and that when γ = 1, u(c) = ln c.
Each young agent born at t ≥ 1 has identical preferences and endowment pattern
(w1 , w2 ), where w1 is the endowment when young and w2 is the endowment when
old. Assume 0 < w2 < w1 . In addition, there are some initial old agents at
time 1 who are endowed with w2 of the time-1 consumption good, and who order
consumption streams by c01 . The initial old (i.e., the old at t = 1) are also endowed
with M units of unbacked fiat currency. The stock of currency is constant over
time.
a. Find the saving function of a young agent.
b. Define an equilibrium with valued fiat currency.
c. Define a stationary equilibrium with valued fiat currency.
d. Compute a stationary equilibrium with valued fiat currency.
e. Describe how many equilibria with valued fiat currency there are. (You are
not being asked to compute them.)
f. Compute the limiting value as t → +∞ of the rate of return on currency
in each of the non stationary equilibria with valued fiat currency. Justify your
calculations.

      Solution
We focus on the case 0 < γ ≤ 1. The case γ > 1 exhibits more complicated
dynamics due to a non monotonic saving function.
a. The saving function of a young agent is:
                                     (w1 − s)1−γ (w2 + Rs)1−γ
                   s(R) = argmax                +             .
                              s         1−γ          1−γ
The first order necessary and sufficient condition of this program is:
                           (w1 − s)−γ = R(w2 + Rs)−γ .
Which gives:
                                                          1
                                           w1 − w 2 R − γ
                                  s(R) =              1
                                        1 + R1− γ
Note that the derivative of this function with respect to R is:
                         1    ·                               ¸
                     R− γ         1               − γ1 w2 −1
                           1    ( − 1)w1 + w2 R +         R .
                 (1 + R1− γ )2 γ                        γ
                        8. OVERLAPPING GENERATION MODELS                                 111

Which is strictly positive for all 0 < γ ≤ 1. This proves that the saving function
is increasing, a fact that is going to be crucial to characterize unambiguously the
dynamic of the system.
b. The problem faced by the young of generation t is
                                      maxctt ,ctt+1 ,Mt u(ctt ) + u(ctt+1 )
                       subject to     ctt + M pt
                                                t
                                                  ≤ w1
                                      ct+1 ≤ w2 (t + 1) + pM
                                        t                           t
                                                                  t+1
                                                                      ,
                                          t t
                                      [ct , ct+1 , Mt ] ≥ 0.
The problem of the initial old is simply
                                         maxc01 c01
                              subject to    0 ≤ c01 ≤ M
                                                      p1

We can now define an equilibrium:
      Definition 9. An equilibrium with valued fiat currency is a consumption plan
for the initial old c01 , consumption decisions for the young born at time t ≥ 1,
{ctt , ctt+1 }+∞                               +∞                                  +∞
              t=1 , money demand {Mt }t=1 , and a positive price sequence {pt }t=1 , such
that the two following conditions are satisfied:
           (i) Optimality: given p1 , c01 solves the initial old problem. Given {pt , pt+1 },
               {ctt , ctt+1 } solves agent of generation t problem, for all t ≥ 1.
          (ii) Feasibility: the market for good and the market for money clear for all
               t ≥ 1:
                                      ctt + ct−1
                                             t   = w1 + w2
                                      M1 = M and Mt+1 = Mt .

c. In a stationary equilibrium the rate of return on currency is constant. More
formally a stationary equilibrium with valued fiat currency is an equilibrium with
valued fiat currency for which there is R > 0 such that
                                     pt
                                         = R.
                                    pt+1

d. We simplify the list of conditions describing an equilibrium. First, Walras law
allows to eliminate one market clearing condition at each t ≥ 1. We eliminate the
market clearing condition for good and keep the one for money. Second, going
back to the agent problem, we note that it can be reduced to a saving problem,
                                                 pt
as described in question (a), with Rt = pt+1        . The optimal money holding are
Mt
 pt
    = s(Rt ) if s(Rt ) > 0 and 0 otherwise. The optimal consumption stream is
ct = w 1 − M
 t
           pt
             t
               and ctt+1 = w2 + pM t
                                 t+1
                                     . These remarks allow us to define an equilibrium
as a positive price sequence {pt }+∞  t=1 such that, for all t:
                                             µ      ¶
                                     M          pt
                                         =s           .
                                      pt       pt+1
                                                       pt
Looking for a stationary equilibrium, we write pt+1       = R so that
112                    8. OVERLAPPING GENERATION MODELS


                               M
                                  = s(R) = constant.
                               pt
Therefore the price level is constant and p1 solves

                  M            w1 − w 2                2M
                      = s(1) =           ⇒ p1 = pt =          .
                   p1              2                 w1 − w 2
Note here how the condition w2 < w1 is necessary to ensure existence of a sta-
tionary equilibrium with valued fiat currency.
e. In order to describe the set of equilibria, we rewrite the equilibrium condition
                                    pt
using the auxiliary variable Rt = pt+1 :
                             M
                             p1
                                      = s(R1 )
                             s(Rt+1 ) = Rt s(Rt ),    t≥1
                                         pt
                             Rt       = pt+1 .
The first equation says that the saving of the initial young must equal the supply
of real money balance. The second equation is found by expressing that nomi-
nal money balances stay constant over time. An equilibrium is constructed the
following way:
        (i) Choose a positive sequence {Rt }+∞
                                             t=1 solving the difference equation s(Rt+1 ) =
            Rt s(Rt ). We will see that there are infinitely many.
       (ii) Once R1 is chosen, find a solution p1 < +∞ to the first equation.
      (iii) Construct the sequence of price using pt+1 = Rptt .
The assumptions made on the utility function put some structure on the set of
positive sequence solving s(Rt+1 ) = Rt s(Rt ). We are going to show in particular
that all non-stationary equilibria are associated with
                                                  h idecreasing  sequences of rate
                                                       γ
                                               ∗    w2
of return on currency, converging towards R = w1 .

Let’s first gain some intuition from a simple graphical analysis. On figure 1 we
plot the function Rt s(Rt ) and the function s(Rt+1 ). A candidate interest rate se-
quence is constructed as follows. Choose R0 on the x-axis. Go on the first curve
to “compute” R0 s(R0 ). Then go on the second curve to “solve” s(R1 ) = R0 s(R0 ).
Go back on the x-axis. Iterate. It is clear from this exercise that R = 1 is an
unstable stationary point.
                       h iγAlso, all sequences starting on the left of R = 1 and
on the right of R = w
                   ∗
                         w1
                           2
                               converges to R∗ . It is not possible to construct a
sequence starting far on the right of R = 1. Lastly, sequence starting on the left
of R∗ are not admissible as they are associated with negative savings.

Let’s make the previous arguments more formal. We go in several steps.
                                          h iγ
(1) There is no equilibrium such that R1 ≤ w
                                           w1
                                             2
                                               .
                      8. OVERLAPPING GENERATION MODELS                                           113

        2.5                                                                     s(R )
                                                                                    t+1
                                                                                Rt s(Rt)



         2




        1.5




         1




        0.5




         0
                            R(2)             R(1)         R(0)     R=1



          0.3   0.4   0.5          0.6      0.7     0.8      0.9   1     1.1   1.2         1.3
                                                     R



                                   Figure 1. Exercise 8.1


This follows from the fact that for all such R1 , s(R1 ) is non-positive and that
equilibrium imposes that s(R1 ) = M
                                  p1
                                     > 0.

(2) There is no equilibrium such that R1 > 1.

Assume that there is one. First note that s(Rt+1 ) − s(Rt ) = (Rt − 1)s(Rt ).
Therefore, if Rt > 1, then s(Rt+1 ) > s(Rt ). And since s(.) is increasing, this
implies that Rt+1 > Rt . Thus, if R0 > 1, the sequence {Rt }+∞ t=1 is increasing. As
any increasing sequence, it has a limit, finite or infinite. If it has a finite limit
R∗ , it must satisfy, by continuity of s(.):

                                         s(R∗ ) = R∗ s(R∗ ).
                                                                               h iγ
It is easy to see that this equation has only two solutions R ∗ = 1 and R∗ = w   2
                                                                                w1
                                                                                    ,
both less than 1. Since Rt > R0 > 1, the sequence Rt cannot have such a finite
limit. Therefore Rt goes to infinity. This also implies that Rt s(Rt ) > Rt s(1) goes
to infinity. But s(Rt+1 ) is bounded above by w1 since an agent cannot save more
than her young period endowment. This means that, for t large enough, this
sequence violates the equality

                                         s(Rt+1 ) = Rt s(Rt ).
114                   8. OVERLAPPING GENERATION MODELS
                                   h        iγ
                                       w2
(3) All equilibria are such that       w1
                                                 < R1 ≤ 1

We already
    h iγ know that R1 = 1 is associated with the stationary equilibrium.
      w2
For w  1
          < R1 < 1, write as before that s(Rt+1 ) − s(Rt ) = (Rt − 1)s(Rt ).
If Rt < 1, then s(Rt+1 ) < s(R
                             h t ).i Since s(.), is increasing, this implies that
                                            γ
                                 w2
Rt+1 < Rt . Furthermore, Rt > w        implies that s(Rt ) > 0 so that s(Rt+1 ) > 0
            h iγ                   1

and Rt+1 > w w1
               2
                  . Thus the sequence {Rt }+∞
                                            t=1 is decreasing and bounded below.
                                          ∗
It thus converges towards a finite limit R such that
                                             · ¸γ
                       ∗      ∗    ∗           w2
                    s(R ) = R s(R ) and              ≤ R∗ < 1.
                                               w1
We already know the solutions of this equation. It must be that
                                         · ¸γ
                                     ∗    w2
                                   R =          .
                                          w1
f. All the non stationary equilibria are inflationary path with limiting rate of
return R∗ . See question (e) for the proof.

      Exercise 8.2.
Consider an economy with overlapping generations of a constant population of
an even number N of two-period-lived agents. New young agents are born at
each date t ≥ 1. Half of the young agents are endowed with w1 when young and
0 when old. The other half are endowed with 0 when young and w2 when old.
Assume 0 < w2 < w1 . Preferences of all young agents are as in problem 1, with
γ = 1. Half of the N initial old are endowed with w2 units of the consumption
good and half are endowed with nothing. Each old person orders consumption
streams by c01 . Each old person at t = 1 is endowed with M units of unbacked
fiat currency. No other generation is endowed with fiat currency. The stock of
fiat currency is fixed over time.
a. Find the saving function of each of the two types of young person for t ≥ 1.
b. Define an equilibrium without valued fiat currency. Compute all such equilib-
ria.
c. Define an equilibrium with valued fiat currency.
d. Compute all the (nonstochastic) equilibria with valued fiat currency.
e. Argue that there is a unique stationary equilibrium with valued fiat currency.

f. How are the various equilibria with valued fiat currency ranked by the Pareto
criterion?

      Solution
                         8. OVERLAPPING GENERATION MODELS                                 115

a. Let (w y , wo ) be the endowment of the agent. The saving function of a young
agent is:
                     s(R) = argmax log(wy − s) + log(w o + Rs).
                                  s

                                        1            R
                                               =             .
                                      wy − s       wo + Rs
Which gives:
                                      wo    wy
                              s(R) =     −     .
                                       2    2R
Thus, a consumer of type 1 has saving function
                                         w1
                                         s1 (R) =
                                            .
                                          2
And a consumer of type 2 has saving function
                                         w2
                                        s2 (R) = −
                                            .
                                         2R
b. The problem faced by a young of generation t of type h = 1, 2 is
                                       maxcht     ht
                                              t ,ct+1 ,bt
                                                          u(cht       ht
                                                             t ) + u(ct+1 )
                       subject to      cht      h
                                        t + b t ≤ wt
                                                          h

                                       cht         h
                                        t+1 ≤ wt+1 + Rt bt
                                                                h

                                       [cht    ht
                                         t , ct+1 ] ≥ 0.

The problem of the initial old is simply
                                        maxch0
                                            1
                                               ch0
                                                1
                             subject to    0 ≤ ch0     h
                                                  1 ≤ w0 .

We can now define an equilibrium:
    Definition 10. An equilibrium without valued fiat currency is a consumption
decision for the initial old ch0   1 , h = 1, 2, consumption decisions for the young born
                                 +∞                                               h +∞
at time t ≥ 1, {cht  t  , c ht
                            t+1 t=1 , h = 1, 2, lending/borrowing decisions {bt }t=1 , and
                               }
a positive return sequence {Rt }+∞       t=1 , such that the two following conditions are
satisfied:
       (i) Optimality: Given p1 , ch0     1 solves the initial old problem. h = 1, 2. Given
           Rt , {cht
                  t  , c ht
                         t+1 } solves  agent  of generation t problem for all t ≥ 1, h = 1, 2.
      (ii) Feasibility: the market for good, the market for private lending clear for
           all t clear for all t ≥ 1:
                             P                 P
                         N
                          2 Ph=1,2 t
                                     cht + N2 h=1,2 cht−1
                                                       t    = N2 w1 + N2 w2
                         N            h
                          2    h=1,2 bt = 0

To characterize such an equilibrium we first notice that Walras Law allows to
restrict attention to the market for private lending. Using the saving function
derived above, market clearing can be written:

                                    s1 (Rt ) + s2 (Rt ) = 0.
116                     8. OVERLAPPING GENERATION MODELS

And the only solution of this equation is Rt = w       2
                                                      w1
                                                         . Thus there is only one
equilibrium without valued fiat currency, it is stationary and the interest rate is
lower than the inverse of the discount factor Rt = w  2
                                                     w1
                                                         < 1.
c. The problem faced by a young of generation t of type h = 1, 2 is
                                                          ht       ht
                                   maxcht  ht        h u(ct ) + u(ct+1 )
                                       t ,ct+1 ,bt ,Mt
                                               Mh
                    subject to     cht    h          h
                                    t + b t + pt ≤ w t
                                               t

                                                             Mh
                                   cht         h        h
                                    t+1 ≤ wt+1 + Rt bt + pt+1
                                                           t


                                   [cht   ht     h
                                     t , ct+1 , Mt ] ≥ 0.
The problem of the initial old is simply
                                    maxch0
                                        1
                                           ch0
                                            1
                                                        M
                         subject to    0 ≤ ch0      h
                                              1 ≤ w 0 + p1 .

    Definition 11. An equilibrium with valued fiat currency is a consumption
plan for the initial old ch0 1 , h = 1, 2, consumption plans for the young born at
                          +∞                                                 h +∞
time t ≥ 1, {cht
               t , c ht
                     t+1 t=1 , h = 1, 2, lending/borrowing decisions {bt }t=1 , money
                        }
holding decisions {Mth }+∞                                      +∞
                           t=1 , a positive price sequence {pt }t=1 , and a positive return
               +∞
sequence {Rt }t=1 such that the two following conditions are satisfied:
      (i) Optimality: Given p1 , ch0   1 solves the initial old problem. h = 1, 2. Given
                                   ht ht
          Rt and {pt , pt+1 }, {ct , ct+1 } solves agent of generation t problem for all
          t ≥ 1, h = 1, 2.

      (ii) Feasibility: the market for good and the market for private lending and
           the market for money clear for all t ≥ 1: clear for all t ≥ 1:
                        P                P
                      N
                      2 Ph=1,2 t
                                 cht + N2 h=1,2 cht−1
                                                 t    = N2 w1 + N2 w2
                      N
                      2 Ph=1,2 t
                                 bh = 0
                      N             h
                      2    h=1,2 Mt = N M.

d. Walras law allows to restrict attention to the last two market clearing condi-
tions. Note also that, since agents can borrow ar rate Rt , no arbitrage imposes
                              pt
that the return on money, pt+1   , is lower than Rt . Furthermore, in an equilib-
rium with valued fiat currency, agents are holding positive money balance. Thus
 pt
pt+1
     = Rt . Given this equality, savers (agents of type 1) are indifferent between
holding money and lending:

                                    Mt1
                                   b1t + = s1 (Rt ).
                                     pt
This implies that the last two market clearing conditions can be replaced by their
sum:
                          N           N           NM
                            s1 (Rt ) + s2 (Rt ) =     .
                          2           2            pt
This equation says that all the money demand must equal the aggregate saving
of type 1 agents minus the borrowing of the type 2 agents. Using the expressions
                        8. OVERLAPPING GENERATION MODELS                            117

                                pt
derived in part (a) and Rt = pt+1  , this equations can be reduced to the following
linear difference equation in pt :
                                           4M   w1
                                pt+1 = −      +    pt .
                                           w2   w2
We first solve for a stationary point
                                    4M     w1 ∗
                                p∗ = −  +     p.
                                    w2     w2
   We find p∗ = w14M
                   −w2
                       . We subtract the equation defining p∗ to the difference
equation for pt :
                                              w1
                             (pt+1 − p∗ ) =      (pt − p∗ ).
                                              w2
We then iterate on this equation to find:
                                       · ¸t
                                   ∗    w1
                           pt+1 = p +         (p1 − p∗ ).
                                        w2
Note that w 1
           w2
              > 1 and pt > 0 imposes that p1 ≥ p∗ – otherwise the price level
would be negative for t large enough. It is apparent from this formula that there
are a continuum of equilibria with valued fiat currency indexed by p1 ≥ p∗ .
e. Stationary equilibria are such that the rate of return on currency is constant.
We can compute this rate of return explicitly using the solution we derived in
part (d):
                        pt     w2          w2             p∗
                 Rt =       =      + (1 −     )      h it            .
                       pt+1    w1          w1 ∗        w1         ∗
                                                p + w2 (p1 − p )
                                      h it
                                        w1
This is a constant if and only if p∗ + w 2
                                            (p1 − p∗ ) is constant, that is if and only
if p1 = p∗ .
There is an unique stationary equilibria, associated with the lowest price level p 1
and a rate of return on currency equal to the discount factor, R = 1.
f. Along an equilibrium path, the utility of an agent of type 1 is:
                                  hw i         ·        ¸
                                      1          R t w1
                              log        + log            .
                                     2             2
And is increasing in Rt . Similarly the utility of an agent of type 2 is:
                                   ·     ¸       hw i
                                      w2              2
                               log         + log        .
                                     2Rt             2
And is decreasing in Rt . Now, from the formula that we derived in part (e), it
is clear that Rt is a decreasing function of p1 . Note that this property is quite
strong: higher p1 will correspond to uniformly lower rate of return on currency,
formally:
118                      8. OVERLAPPING GENERATION MODELS



                              p01 > p1 ⇒ ∀t, Rt (p01 ) < Rt (p1 ).
Therefore, type 1 agents will be worse off in a higher p1 economy – their saving
will earn lower interest. Conversely type 2 agents will be better off – they’ll
borrow at a lower rate.
    Lastly, the initial old are worse off for higher p1 because their real money
balance M/p1 is lower.

      Exercise 8.3.
Take the economy of Exercise 8.1, but make one change. Endow the initial old
with a tree that yields a constant dividend of d > 0 units of the consumption
good for each t ≥ 1.
a. Compute all the equilibria with valued fiat currency.
b. Compute all the equilibria without valued fiat currency.
c. If you want, you can answer both parts of this question in the context of the
following particular numerical example: w1 = 10, w2 = 5, d = .000001.

      Solution
We first define an equilibrium. The problem faced by the young of generation t
is
                             maxctt ,ctt+1 ,Mt ,αt u(ctt ) + u(ctt+1 )
               subject to ctt + M    pt
                                       t
                                         + α t qt ≤ w 1
                             ct+1 ≤ w2 (t + 1) + pM
                              t                              t
                                                           t+1
                                                               + αt (qt+1 + d),
                                t t
                             [ct , ct+1 , Mt , αt ] ≥ 0.
The problem of the initial old is simply
                                maxc01 c01
                     subject to    0 ≤ c01 ≤ w2 (1) + M
                                                      p1
                                                         + q + d.
      Definition 12. An equilibrium with valued fiat currency is a consumption
plan for the initial old c01 , consumption plans for the young born at time t ≥ 1,
{ctt , ctt+1 }+∞                               +∞
              t=1 , money demand {Mt }t=1 , demand for shares of the tree {αt }t=1 ,
                                                                                         +∞

a positive price sequence {pt , qt }+∞      t=1 , such that the two following conditions are
satisfied:
           (i) Optimality: given p1 , c01 solves the initial old problem. Given {pt , pt+1 , qt },
               {ctt , ctt+1 } solves agent of generation t problem, for all t ≥ 1.
          (ii) Feasibility: the market for good, the market for money and the market
               for shares of the tree clear for all t ≥ 1:
                                ctt + ct−1
                                       t   = w1 + w2 + d
                                M1 = M and Mt+1 = Mt
                                αt = 1.
                      8. OVERLAPPING GENERATION MODELS                            119

a. We now solve for equilibria. Walras Law allows to restrict attention to the
market for money and the market for shares of the tree. Also, since both money
and tree are held in equilibrium, they must earn the same return, therefore:

                                        pt    d + qt+1
                                Rt ≡        =          .
                                       pt+1      qt
Writing this equation qt = d+qRt+1
                               t
                                   and iterating forward, we obtain:

                                +∞ Y
                                    " k        #
                                X         1
                           qt =                 d < +∞.
                                k=0  i=0
                                         R t+i

This last equation imposes a strong restriction on equilibrium Rt : Rt cannot be
uniformly less than 1, otherwise the sum would diverge.
Equilibrium on the market for shares of the tree and on the market for money
can be written using the agent saving function as in Exercise 1: s(Rt ) = M
                                                                          pt
                                                                             + qt .
Expressing that nominal money balances stay constant over time, we can rewrite
the equilibrium conditions imply

                      M
                      p1
                         + q1  = s(R1 )
                      s(Rt+1 ) = Rt s(Rt ) − d, t ≥ 1
                                  pt
                      Rt       = pt+1
                                 P+∞ hQk         1
                                                    i
                      qt       =    k=0     i=0 Rt+i d < +∞.

Conversely, suppose that we have solved for an initial price p1 < +∞ and for
sequences {Rt , qt }+∞
                    t=1 solving the above three equations. Then, one can show
that an equilibrium is pt+1 = pt /Rt , c01 = w2 + M/p1 + q1 , ctt = w1 − s(Rt ),
ctt+1 = w2 + Rt s(Rt ), Mt = M , αt = 1.
     We construct equilibria in three steps. First we choose a positive sequences
{Rt }+∞
      t=1 solving the difference equation s(Rt+1 ) = Rt s(Rt ) − d. Second, we check
if the qt it implies are finite. Third, given R1 and q1 , we solve the first equation
for p1 < +∞.
Towards a characterization of equilibria, we now prove the following results:

(1) There is a unique R∗ such that s(R∗ ) = R∗ s(R∗ ) − d and R∗ > 1.

This follows from the following facts. The function (R − 1)s(R) − d is continuous
and increasing for R ≥ 1, its value is −d < 0 at R = 1 and (R − 1)s(R) − d >
(R − 1)s(1) − d → +∞ when R → +∞.

(2) There is no equilibrium such that R1 > R∗ .

The reasoning is the same as in exercise 8.1, we only sketch it here. For any
Rt > R∗ , we show that Rt+1 > Rt . So Rt has a limit, which must be +∞ since
Rt > R∗ . But this means that, for t large enough, Rt necessarily violates the
120                   8. OVERLAPPING GENERATION MODELS

difference equation s(Rt+1 ) = Rt s(Rt ) − d.
                                         h iγ
                                          w2
(3) There is no equilibrium with R1 ≤ w     1
                                              .

As in question 8.1, this follows from the fact that, for such R1 , s(R1 ) < 0, and
that saving must be positive in an equilibrium with valued fiat currency.

(4) There is no equilibrium such that R1 < 1.

Assume Rt < 1. We want  h itoγ show that it implies that Rt+1 < 1.h There
                                                                        iγ are
                         w2                                          w2
two cases. (i) If Rt ≤ w1 , then s(Rt+1 ) < 0 so that Rt+1 ≤ w1           < 1.
       h iγ
(ii) If ww1
           2
             < Rt < 1, then s(Rt+1 ) − s(Rt ) = (Rt − 1)s(Rt ) − d < 0, so that
Rt+1 < Rt < 1. This shows that R1 < 1 ⇒ Rt < R1 < 1 ∀t. But then qt cannot
be finite.

(5) There is no equilibrium such that 1 ≤ R1 < R∗ .

Consider 1 ≤ Rt < R∗ . Then s(Rt+1 ) − s(Rt ) = (Rt − 1)s(Rt ) − d < 0. This
follows from the fact that the function (R − 1)s(R) − d is negative at R = 1, is
zero at R = R∗ , and is continuous and increasing for R ≥ 1. Hence, Rt+1 < Rt .
Therefore the first terms of the sequence are decreasing. The sequence cannot
stay bounded below by 1, however, since otherwise it would have a limit greater
than 1 and smaller than R∗ , which is impossible from point (1). Therefore there
must be a T such that RT < 1. And, from point (3), we know that for all t ≥ T ,
Rt ≤ RT < 1. But then, as before, qt cannot be finite.

(6) There is no equilibrium with valued fiat money.

The only candidate remaining is the stationary one Rt = R∗ > 1, for all t. In
this candidate equilibrium, we have (R∗ − 1)s(R∗ ) = d and:
                                   +∞
                                   X     d          d
                            q∗ =          ∗   t
                                                = ∗     .
                                   t=1
                                       (R   )    R  − 1
so that q ∗ = s(R∗ ). Replacing it in the first of our four equations defining an
equilibrium we find:
                             M
                                 = s(R∗ ) − q ∗ = 0,
                             p1
which imply that p1 cannot be finite. Thus, there are no equilibrium with valued
fiat currency.
b. All the previous analysis can be made in the context of equilibria without
valued fiat currency. One can show that there exists a unique equilibrium, that
it is stationary and that the tree has value:
                      8. OVERLAPPING GENERATION MODELS                             121


                                             d
                                    q∗ =            .
                                           R∗ − 1

   Exercise 8.4.
Take the economy of exercise 8.1 and make the following changes. First, as-
sume that γ = 1. Second, assume that the number of agents born at t is
N (t) = nN (t − 1), where N (0) > 0 and is given and n ≥ 1. Everything else
about the economy remains the same.

a. Compute an equilibrium without valued fiat money.

b. Compute a stationary equilibrium with valued fiat money.


   Solution
See exercise 8.5.

   Exercise 8.5.
Consider an economy consisting of overlapping generations if two period-lived
consumers. At each date t ≥ 1, there are born N (t) identical young people each
of whom is endowed with w1 > 0 units of a single consumption good when young
and w2 > 0 units of the consumption good when old. Assume that w2 < w1 . The
consumption good is non storable. The population of young people is described
by N (t) = nN (t − 1) where n > 0. Young people born at t rank utility streams
according to ln(ctt ) + ln(ctt+1 ), where cit is the consumption of the time t good of
the agents born at time i. In addition, there are N (0) old people at time 1, each
of whom is endowed with w2 units of the time-1 consumption good. The old at
t = 1 are also endowed with one unit of unbacked pieces of infinitely durable but
intrisically worthless pieces of paper called fiat money.

a. Define an equilibrium without valued fiat currency. Compute such an equilib-
rium.
b. Define an equilibrium with valued fiat currency.
c. Compute all equilibra with valued fiat currency.
d. Find the limiting rates of return on currency as t → +∞ in each of the
equilibria found in part c. Compare them with the one period interes rate in the
equilibrium in part a.
e. Are the equilibria in part c ranked according to the Pareto criterion ?

   Solution
122                     8. OVERLAPPING GENERATION MODELS

a. The problem faced by a young of generation t is to choose consumption ctt , ctt+1
and IOU holdings bt so as to maximize

                                           ln(ctt ) + ln(ctt+1 )
                            subject to              ctt + bt ≤ w1
                                            t
                                           ct+1 ≤ w2 + Rt bt
                                           [ctt , ctt+1 ] ≥ 0.
The problem of the initial old is simply to choose consumption c01 so as to maxi-
mize c01 subject to 0 ≤ c01 ≤ w2 . We define
      Definition 13. An equilibrium without valued fiat currency is a consumption
plan for the initial old c01 , consumption plan for the young born at time t ≥ 1,
{ctt , ctt+1 }+∞                          +∞                                        +∞
              t=1 , IOU holding plan {bt }t=1 , and a positive return sequence {Rt }t=1
such that the two following conditions are satisfied:
      (i) Optimality: ch0                                                t t
                        1 solves the initial old problem. Given Rt and {ct , ct+1 }
          solves agent of generation t problem for all t ≥ 1.

      (ii) Feasibility: the market for good and the market for private IOU clear
           for all t ≥ 1:
                    N (t)ctt + N (t − 1)ct−1
                                         t   = N (t)w1 + N (t − 1)w2
                    bt = 0.
We know that the saving function of a young agents is s(R) = w1 /2 − w2 /(2R).
In an equilibrium without valued fiat currency, young agents can only write IOU
between themselves. Since all young are identical it must be that bt = s(Rt ) = 0,
for all t. Therefore Rt = w
                          w1
                            2
                              < 1. Furthermore ctt = w1 and ct−1
                                                             t   = w2 .
b. A young of generation t chooses a consumption plan ctt , ctt+1 , a money holding
mt and an IOU holding bt so as to maximize

                                       ln(ctt ) + ln(ctt+1 )
                         subject to    ctt + bt + mptt ≤ w1
                                       ctt+1 ≤ w2 + Rt bt + pm    t
                                                                t+1
                                       [ctt , ctt+1 , mt ] ≥ 0.
The problem of the initial old is simply to maximize c01 subject to c01 ≤ M
                                                                          p1
                                                                             . We
have
      Definition 14. An equilibrium with valued fiat currency is a consumption
plan for the initial old c01 , consumption plans for the young born at time t ≥ 1,
{ctt , ctt+1 }+∞                        +∞                           +∞
              t=1 , money holdings {mt }t=1 , and bond holdings {bt }t=1 , a positive price
sequence and a positive interest rate sequence {pt , Rt }+∞ t=1 , such that the following
conditions are satisfied:
      (i) Optimality: given p1 , c01 solves the initial old problem. Given {pt , pt+1 , Rt },
          {ctt , ctt+1 , mt , bt } solves agent of generation t problem, for all t ≥ 1.
                      8. OVERLAPPING GENERATION MODELS                            123

       (ii) Feasibility: the market for good, the market for money and the market
            for IOU clear for all t ≥ 1:
                     N (t)ctt + N (t)ct−1
                                      t   = N (t)w1 + N (t − 1)w2
                     N (t)mt = N (0)
                     N (t)bt = 0.
c. Walras Law allows to restrict attention to the market for money and the
market for IOU. Also, by no arbitrage, it must be that both money and IOU earn
the same return, that is Rt = pt /pt+1 . The savings of the young agents are
                                  w1    w2         mt
                          s(Rt ) =   −      = bt +    .
                                  2     2Rt        pt
Using bt = 0, the equilibrium equations reduce to
                                  µ                ¶
                                      w1   w2              N (0)
(76)                      N (t)          −               =
                                      2    2Rt               pt
                                                            pt
(77)                                               Rt    =      .
                                                           pt+1
Substitutiong the second equation into the first and rearanging, we obtain that
all equilibria are the positive solutions of

(78)                          w1 pt − w2 pt+1 = 2n−t .
When nw1 = w2 , the the previous equation can be written
                                           µ        ¶t+1
                                               w1                 w1
                          pt+1 = −2w1                         +      pt .
                                               w2                 w2
Iterating backwards we find that
                                       µ ¶t+1 µ ¶t
                                      w1         w1
                        pt+1 = −2t           +          p1 .
                                      w2         w2
Which is negative for t large enough. Thus, when nw1 = w2 , there is no equilib-
rium with valued fiat currency.
When nw1 6= w2 , a particular solution of this equation is p∗ n−t , where p∗ =
2n/(nw1 − w2 ). Substracting this particular solution from equation (78), we find
that the general solution takes the form

                                               µ        ¶t
                                  ∗ −t             w1
(79)                     pt+1 = p n        +                 (p1 − p∗ ) .
                                                   w2
    If nw1 − w2 < 0, then since p∗ < 0 and 1/n > w
                                                 w2
                                                   1
                                                     , it is clear that all solutions
are negative for t large enough. Thus, there do not exists an equilibrium with
valued fiat currency.
124                    8. OVERLAPPING GENERATION MODELS

   If, on the other hand, nw1 − w2 > 0, then all solution such that p1 ≥ p∗ are
positive for all t.

      d. When nw1 > w2 , then

                                               ³        ´t−1
                                   ∗ −(t−1)        w1
                                 pn       +        w2
                                                       (p1 − p∗ )
                       Rt    =              ³ ´t
                                  p∗ n−t + w  1
                                                    (p1 − p∗ )
                                         ³ w2 ´
                                                w2
                               w2         1 − nw  1
                                                      n−t+1 p∗
                       Rt    =    +           ³ ´t                  .
                               w1                w2
                                      p∗ n−t + w   1
                                                       (p 1 −  p ∗)


Therefore, if p1 = p∗ , then the limiting rate of return on curruncy is n. Otherwise
                                                         w2
if p1 > p∗ , the limiting rate of return on currency is w 1
                                                            .

e. To rank the various equilibria we first note that

                            ln(w1 − s(R)) + ln(w2 + Rs(R)).
is increasing in R whenever R > w w1
                                    2
                                      , which is true in all our equilibria. Further-
more, as it is clear from the last expression for Rt , Rt is a decreasing function
of p1 . Since the initial old are better off with lower p1 , this implies that the
p1 -equilibrium pareto dominate all p01 -equilibria with p01 > p1 .


      Exercise 8.6. Exchange rate determinacy ¦
The world consists of two economies, named i = 1, 2, which except for their
governments’ policies are “copies” of one another. At each date t ≥ 1, there
is a single consumption good, which is storable, but only for rich people. Each
economy consists of overlapping generations of two-period-lived agents. For each
t ≥ 1, in economy i, N poor people and N rich people are born. Let cht (s), yth (s)
be the time s (consumption, endowment) of a type-h agent born at t. Poor agents
are endowed [yth (t), yth (t+1)] = (α, 0); Rich agents are endowed [yth (t), yth (t+1)] =
(β, 0), where β >> α. In each country, there are 2N initial old who are endowed
in the aggregate with Hi (0) units of an unbacked currency, and with 2N ² units of
the time-1 consumption good. For the rich people, storing k units of the time-t
consumption good produces Rk units of the time–t + 1 consumption good, where
R > 1 is a fixed gross rate of return on storage. Rich people can earn the rate
of return R either by storing goods or lending to either government by means of
indexed bonds. We assume that poor people are prevented from storing capital or
holding indexed government debt by the sort of denomination and intermediation
restrictions described by Sargent and Wallace (1982).
For each t ≥ 1, all young agents order consumption streams according to ln cht (t)+
ln cht (t + 1).
                      8. OVERLAPPING GENERATION MODELS                             125

For t ≥ 1, the government of country i finances a stream of purchases (to be
thrown into the ocean) of Gi (t) subject to the following budget constraint:
                                               Hi (t) − Hi (t − 1)
(1)          Gi (t) + RBi (t − 1) = Bi (t) +                       + Ti (t),
                                                      pi (t)
where Bi (0) = 0; pi (t) is the price level in country i; Ti (t) are lump-sum taxes
levied by the government on the rich young people at time t; Hi (t) is the stock of
i’s fiat currency at the end of period t; Bi (t) is the stock of indexed government
interest-bearing debt (held by the rich of either country). The government does
not explicitly tax poor people, but might tax through an inflation tax. Each
government levies a lump-sum tax of Ti (t)/N on each young rich citizen of its
own country.
Poor people in both countries are free to hold whichever currency they prefer.
Rich people can hold debt of either government and can also store; storage and
both government debts bear a constant gross rate of return R.
a. Define an equilibrium with valued fiat currencies (in both countries). b. In
a nonstochastic equilibrium, verify the following proposition: if an equilibrium
exists in which both fiat currencies are valued, the exchange rate between the two
currencies must be constant over time.
c. Suppose that government policy in each country is characterized by specified
(exogenous) levels Gi (t) = Gi , Ti (t) = Ti , Bi (t) = 0, ∀t ≥ 1. (The remaining ele-
ments of government policy adjust to satisfy the government budget constraints.)
Assume that the exogenous components of policy have been set so that an equi-
librium with two valued fiat currencies exists. Under this description of policy,
show that the equilibrium exchange rate is indeterminate.
d. Suppose that government policy in each country is described as follows:
Gi (t) = Gi , Ti (t) = Ti , Hi (t + 1) = Hi (1), Bi (t) = Bi (1) ∀t ≥ 1. Show that if
there exists an equilibrium with two valued fiat currencies, the exchange rate is
indeterminate.
e. Suppose that government policy in country 1 is specified in terms of exogenous
levels of s1 = [H1 (t) − H1 (t − 1)]/p1 (t) ∀t ≥ 2, and G1 (t) = G1 ∀t ≥ 1. For coun-
try 2, government policy consists of exogenous levels of B2 (t) = B2 (1), G2 (t) =
G2 ∀t ≥ 1. Show that if there exists an equilibrium with two valued fiat currencies,
then the exchange rate is determinate.
Solution
a. In order to simplify the analysis we assume that the rate of return on money
is strictly less than the rate of return on storage R. This implies that only poor
agents hold money and therefore simplify considerably the demand for money. At
the end of the exercise, we provide restrictions on exogenous parameters ensuring
that this assumption hold.
    We first state the choice problem faced by the agents. Agents are indexed
by h ∈ {1, . . . 4N }. Agents h ∈ {1, . . . 2N } are from country 1 and agents h ∈
126                     8. OVERLAPPING GENERATION MODELS

{2N + 1, . . . 4N } are from country 2. A young poor agent of generation t chooses
some positive consumption plan cht (t), cht (t + 1), some positive money holdings
H1h (t), H2h (t), so as to maximize ln(cht (t)) + ln(cht (t + 1)) subject to

                               h       H1h (t) H2h (t)
                             ct (t) +           +          ≤α
                                        p1 (t)      p2 (t)
                                               H1h (t)      H2h (t)
                             cht (t + 1) ≤               +          .
                                             p1 (t + 1) p2 (t + 1)

A young rich agent of generation t chooses some positive consumption plan
cht (t), cht (t + 1), some bond holdings B1h (t), B2h (t), and some positive storage Ah (t),
so as to maximize ln(cht (t)) + ln(cht (t + 1)) subject to

                           cht (t) + B1h (t) + B2h (t) ≤ β − T h (t)
(81)                       cht (t + 1) ≤ R(B1h (t) + B2h (t) + Ah (t)).
                                                                         Hi (0)
The initial old in country i maximizes ch1 (0) subject to 0 ≤ ch0 (1) ≤ 2N pi (1)
                                                                                  + ε.
We define an equilibrium
    Definition 15. An equilibrium with valued fiat currency is a consumption
plan for the initial old ch0 (1), consumption plans for the young agents born at
time t ≥ 1, {cht (t), cht (t + 1)}+∞                                   h  +∞
                                      t=1 , money demand {Hi (t)}t=1 , bond demands
{Bih (t)}+∞                                                                           +∞
         t=1 , government fiscal and monetary policies {Ti (t), Hi (t), Bi (t)}t=1 , and
                                             +∞
positive price sequences {p1 (t), p2 (t)}t=1 , such that the three following conditions
are satisfied:
       (i) Optimality: given pi (t), ch0 (1) solves the initial old h problem. Given
           prices pi (t) and interest rate R, the consumption plans, the money hold-
           ings, the bond holdings and the storage plans solve the young agents’
           problems.
      (ii) Feasibility: the markets for good, the market for money and the market
           for bonds clear for all t ≥ 1:
                       P ¡                                   ¢
   t = 1 i = 1, 2 Ph∈i ¡cht (t) + cht−1 (t) + Ah (t)¢ + Gi (t) = N α + N β + 2NP           ε
                                h          h           h                                          h
   t ≥ 2 i = 1, 2             c t (t)  + c t−1 (t) + A   (t)   + G i (t) = N  α  + N β + R   h∈i A (t − 1)
                       Ph∈i     h
                          4N Hi (t)                                          h
                                                                            H (t)
   i = 1, 2               h=1 p1 (t)                                     = pii(t)
                       P4N h
   i = 1, 2               h=1 Bi (t)                                     = Bi (t).
       (iii) The governments’ policies satisfy their budget constraints:
         t≥1    i = 1, 2      Gi (t) + RBi (t − 1) = Bi (t) + Hi (t)−H  i (t−1)
                                                                  pi (t−1)
                                                                                + Ti (t).
b. In an equilibrium with valued fiat currency, both currencies are held in equi-
librium. Therefore, they must earn the same rate of return:

                               p1 (t)       p2 (t)
                                        =               ∀t ≥ 1.
                             p1 (t + 1)   p2 (t + 1)
                          8. OVERLAPPING GENERATION MODELS                          127

This is equivalent to

                           p1 (t)    p1 (t + 1)
                                   =            ≡ e ∀t ≥ 1.
                           p2 (t)    p2 (t + 1)
In other words, the exchange rate must be constant over time. In all what follows,
we’ll thus write p2 (t) = p1e(t) .

The equilibrium equations

We derive the equilibrium equations and we show that they are recursive. Namely,
we show that one can solve first for prices, bond and money holding using the
money demand and the government budget constraints. Then, one chooses stor-
age so that the market clearing condition for good holds at each date.
    With log utility, the saving function of a young agents is of the form s(R t ) =
yt
 2
   − y2R
       t+1
         t
           . We let Rm (t) = pip(t+1)
                                 i (t)
                                       be the rate of return on money. We assume that
Rm (t) < R for all t, so that the world demand for money is equal to N α. At the
end of the solution, we present sufficient conditions ensuring that Rm (t) < R, at
each time. The market clearing condition for the good markets are

                            N α N β − Ti (1) Hi (0)
(82) t = 1, i = 1, 2            +             +        + 2N ε + N Ai (1) + Gi (1)
                             2         2        pi (1)
(83)                      = N α + N β + 2N ε.


                           N α N β − Ti (t)              Nα    N β − Ti (t − 1)
       t ≥ 2, i = 1, 2          +           + Rm (t − 1)    +R
                            2           2                 2          2
                         +N Ai (t) + Gi (t)
(84)                     = N α + N β + RN Ai (t − 1).
The market clearing condition for the money market and the market for bond
and storage are, for all t ≥ 1

                          H1 (t) H2 (t)
(85)           Nα =              +
                          p1 (t)   p2 (t)
                                             T1 (t)            T2 (t)
(86)           N β = B1 (t) + B2 (t) + A1 (t) +     + A2 (t) +        .
                                               2                 2
Lastly, the government budget constraints are for all t ≥ 1

                                      Hi (t) − Hi (t − 1)
(87)         Gi (t) + RBi (t − 1) =                       + Ti (t) + Bi (t).
                                             pi (t)
We observe that, by Walras Law, one equation can be ignored at each t. Let’s
ignore the market clearing condition for bonds and storage (86). Also, it is
convenient to substitute the market clearing condition for money (85) into the
128                      8. OVERLAPPING GENERATION MODELS

sum of government budget constraints (87). Then, we can ignore (85) and keep
the following equations


(88)        t = 1 G1 (1) + G2 (1)
                                                                  H1 (0) H2 (0)
                    = T1 (1) + T2 (1) + B1 (1) + B2 (1) + N α −          −
                                                                  p1 (1)   p2 (1)
(89)        t ≥ 2 G1 (t) + G2 (t) + R(B1 (t − 1) + B2 (t − 1))
                  = T1 (t) + T2 (t) + N α(1 − Rm (t − 1)) + B1 (t) + B2 (t).

Equilibria are solution of (82), (84), (87) (88) and (89). Furthermore, since we
ignore (86), storage appears only in (82) and (84). This shows that the equilib-
rium equations can be solved recursively. First, we solves equations (87), (88), and
(89). Then, we choose a sequence of storage such that (82) and (84) hold for all t.

c. and d. In these questions, we assume that the governments chooses Bi (t),
Gi (t) and Ti (t) for all t. With equations (89), we solve for the rate of return on
money Rm (t), t ≥ 1. Given p1 (1) and p2 (1), this allows to solve for the entire
sequence of price pi (t), t ≥ 2. Given a sequence of price, we use the government
budget constraints to solve for the the money supply Hi (t), t ≥ 1.
    We need to determine the initial price p1 (1) and p2 (1). We have only one
equation left, the worldwide government budget constraint at time 1, (88). The
exchange rate p1 (1)/p2 (1) is thus indeterminate.

Sufficient Conditions for Rm (t) < R. Consider the world wide government
budget constraint t ≥ 2


        G1 (t) + G2 (t) − T1 (t) − T2 (t) + RB1 (t − 1) − B1 (t) + RB2 (t − 1) − B2 (t)
        H1 (t) H2 (t) H1 (t − 1) H2 (t − 1)
      =        +         −              −
        p1 (t)    p2 (t)       p1 (t)        p2 (t)
      ≡ h(t) − Rm (t − 1)h(t − 1).

Assume that the governments are running a global deficit for all t


(90) G1 (t) + G2 (t) − T1 (t) − T2 (t) + RB1 (t − 1) − B1 (t) + RB2 (t − 1) − B2 (t) > 0.

This ensures that the government needs to raise seignoriage revenue and forces
Rm (t) to be less then R: assume, towards a contradiction, that Rm (τ −1) ≥ R > 1
for some τ ≥ 2. Then, necessarily h(τ ) > h(τ − 1) ≥ N α. Since the demand
for real balance is greater than N α, it must be that the rate of return on money
weakly dominate the rate of return on storage. In other words, Rm (τ ) ≥ R. Thus
h(τ + 1) > h(τ ). By induction, one can show that h(t) is an increasing sequence
                     8. OVERLAPPING GENERATION MODELS                            129

and Rm (t) ≥ R for t ≥ τ . Since h(t) is bounded above by N α + N β, it has a
finite limit. In particular h(t) − h(t − 1) goes to zero. Therefore

(91)   h(t) − Rm (t − 1)h(t − 1) = h(t) − h(t − 1) + h(t − 1)(1 − Rm (t − 1)).
is negative for t large enough, which contradicts (90). Assumptions on exogenous
parameters that garantee (90) are

          Question c. G1 + G2 − T1 − T2 > 0
          Question d. G1 + G2 − T1 − T2 − B1 (1 − R) − B2 (1 − R) > 0
          Question e. s1 + G2 − T2 − B2 (1 − R) > 0


   Exercise 8.7. Credit Controls
Consider the following overlapping-generations model. At each date t ≥ 1 there
appear N two-period-lived young people, said to be of generation t, who live and
consume during periods t and (t + 1). At time t = 1 there exist N old people
who are endowed with H(0) units of paper “dollars,” which they offer to supply
inelastically to the young of generation 1 in exchange for goods. Let p(t) be the
price of the one good in the model, measured in dollars per time t good. For each
t ≥ 1, N/2 members of generation t are endowed with y > 0 units of the good at
t and 0 units at (t + 1), whereas the remaining N/2 members of generation t are
endowed with 0 units of the good at t and y > 0 units when they are old. All
members of all generations have the same utility function:

                      u[cht (t), cht (t + 1)] = ln cht (t) + ln cht (t + 1),
where cht (s) is the consumption of agent h of generation t in period s. The old
at t = 1 simply maximize ch0 (1). The consumption good is nonstorable. The
currency supply is constant through time, so H(t) = H(0), t ≥ 1.
a. Define a competitive equilibrium without valued currency for this model. Who
trades what with whom?
b. Compute the nonvalued-currency competitive equilibrium values of the gross
return on consumption loans, the consumption allocation of the old at t = 1, and
that of the “borrowers” and “lenders” for t ≥ 1.
c. Define a competitive equilibrium with valued currency. Who trades what with
whom?
d. Prove that for this economy there does not exist a competitive equilibrium
with valued currency.
e. Now suppose that the government imposes the restriction that lth (t)[1+r(t)] ≥
−y/4, where lth (t)[1 + r(t)] represents claims on (t + 1)-period consumption pur-
chased (if positive) or sold (if negative) by household h of generation t. This
is a restriction on the amount of borrowing. For an equilibrium without valued
130                      8. OVERLAPPING GENERATION MODELS

currency, compute the consumption allocation and the gross rate of return on
consumption loans.
f. In the setup of (e), show that there exists an equilibrium with valued currency
in which the price level obeys the quantity theory equation p(t) = qH(0)/N .
Find a formula for the undetermined coefficient q. Compute the consumption
allocation and the equilibrium rate of return on consumption loans.
g. Are lenders better off in economy (b) or economy (f)? What about borrowers?
What about the old of period 1 (generation 0)?

      Solution

a. We first describe the problem faced by the young of generation t. This problem
is:

                           maxcht (t),cht (t+1),lth (t),mht (t) uh (cht (t), cht (t + 1))
                                                 mh (t)
            subject to     cht (t) + lth (t) + p(t)
                                                t
                                                    ≤ wth (t)
                                                                                       mh (t)
                           cht (t + 1) ≤ wth (t + 1) + [1 + r(t)]lth (t) + p(t+1)
                                                                             t
                                                                                  ,
                              h      h           h
                           [ct (t), ct (t + 1), mt (t)] ≥ 0.
Let cht = [cht (t), cht (t + 1)] and denote by ct = (c1t , . . . , cN
                                                                    t ) the consumption vector
of generation t. We use c0 to denote second-period consumption of the generation
that is old at t = 1. A sequence c = {ct }∞       t=0 is called an allocation. We are now
ready to define an equilibrium. A competitive equilibrium without valued fiat
money is a sequence {1/p(t)}∞        t=1 identically equal to zero, a sequence {r(t)}t=1 ,
                                                                                           ∞

and an allocation c that satisfies two conditions.
        (i) Given r(t), cht solves the agents’ maximization problem for every h and
            t ≥ 1.
       (ii) Given cht , we know that lth (t) = wth (t) − cht (t). Market clearing requires
            that
                                 XN
                                     lth (t) = 0,    t = 1, 2, . . .
                              h=1
In this economy with only one good at each date, the only possible trades are
intertemporal ones, that is, exchanges of consumption in one period for consump-
tion in some other period. No intergenerational trades are possible. At any time
t, an “old” agent cares only about consumption. This agent would be willing to
buy the good but has nothing to offer to a young agent in exchange. Therefore no
exchanges can be made. Intragenerational trades will occur in equilibrium. The
utility function is such that agents want consumption over time to be smooth.
Endowments vary across time, however, and are asymmetric across agents, mak-
ing room for exchange of loans. Agents who are well endowed during their first
period of life will be willing to give up some consumption when they are young in
exchange for goods in their second period of life. Agents who are well endowed
when they are old will be willing to accept those trades.
                          8. OVERLAPPING GENERATION MODELS                                         131

b. Solving the competitive problem for the Cobb-Douglas utility function we find
that                                            µ                      ¶
                   h          h       h       1    h       wth (t + 1)
                  st (t) ≡ wt (t) − ct (t) =      wt (t) −
                                              2             1 + r(t)
In the nonvalued-currency equilibrium, sht (t) = lth (t). To compute the rate of
interest that clears the market for consumption loans, we need to determine the
aggregate savings function. For an agent endowed (y, 0), savings are y/2. As
there are N/2 agents of this type, their aggregate demand is given by N y/4. For
an agent endowed (0, y), the savings are −y/(2[1 + r(t)]). Total savings for this
group are −(N y/4)[1 + r(t)]−1 . The aggregate per capita savings function of the
economy is                                   µ              ¶
                                           1           y
                           f [1 + r(t)] ≡      y−              .
                                           4       1 + r(t)
We defined an equilibrium as a sequence {r(t)} and c, satisfying utility maxi-
mization and market clearing. Then the first part – utility maximization – is
embedded already in f (·), whereas market clearing requires that
                                        N
                                1 X h
                                     l (t) = f [1 + r(t)] = 0.
                                N h=1 t
The unique solution to this condition is r(t) = 0, for all t, corresponding to a
gross rate of return of one. To compute the equilibrium allocation, recall that it
can be obtained from
         cht (t) = wth (t) − lth (t),             cht (t + 1) = wth (t + 1) + [1 + r(t)]lth (t).
For a lender – an agent endowed (y, 0) – we obtain lth (t) = y/2. Consequently,
cht (t) = y/2, cht (t + 1) = y/2, h = 1, . . . , N/2, and t ≥ 1. In the case of a borrower
– an individual endowed (0, y) – we obtain lth (t) = −y/2. Therefore cht (t) = y/2,
cht (t + 1) = y/2, h = N/2 + 1, . . . , N , and t ≥ 1. The old at t = 1, that is, the
members of generation zero, consume their endowments of the one good.
c. Notice that our definition of the competitive problem faced by the young
is general enough to incorporate the maximization exercise that is solved in an
equilibrium with valued currency. As in (a), define mt = [m1t (t), . . . , mN      t (t)],
m = {mt }∞  t=1 . Then a  competitive    equilibrium  with valued fiat currency is a pair
                     ∞                ∞
of sequences {r(t)}t=1 and {p(t)}t=1 with p(t) finite and greater than zero ∀t, an
allocation c, and a sequence m such that
       (i) Given r(t) and p(t), cht and mht (t) solve the maximization problem de-
           fined in (a), for h = 1, . . . , N, t ≥ 1.
      (ii) Given the choices of individual agents, markets clear, that is,
                        N
                        X                   N
                                            X mh (t) t         H(t)
                              lth (t) +                    =        ,     t ≥ 1.
                        h=1                 h=1
                                                    p(t)       p(t)
          This last condition is equivalent to the condition that the market for
          the consumption good clears.
132                     8. OVERLAPPING GENERATION MODELS

In this equilibrium, there occur the same kinds of trades as in the equilibrium
without valued fiat currency, because no markets have been shut. The fact that
there is a “new” market, however – the market for currency – permits additional
exchanges to be made. In this equilibrium, the “old” at each t have something
that is valuable to the young – currency. The “young” are willing to give up some
of the good at t in exchange for currency, because they know that next period
– when they are the “old” – they will be able to exchange currency for goods.
It is still true that agents engage in trade for the sole purpose of making the
time pattern of consumption different (in general, also smoother) than the time
pattern of endowments.
d. To prove the nonexistence results, we proceed by contradiction. From the
first-order condition of the utility maximization problem we obtain
         cht (t) : uh1 [cht (t), cht (t + 1)] − λh1t ≤ 0,     = 0 if cht (t) > 0
         cht (t + 1) : uh2 [cht (t), cht (t + 1)] − λh2t ≤ 0,    = 0 if cht (t + 1) > 0
          n             h                    h
         lt (t) : −λ1t + [1 + r(t)]λ2t = 0
                          1                 1
         mht (t) : − p(t)    λh1t + λh2t p(t+1) ≤ 0,      = 0 if mht (t) > 0,

where λh1t and λh2t are nonnegative Lagrange multipliers.
Because the definition of an equilibrium with valued currency requires that m ht (t) >
0 for some h and for every t, we have that, for that h [assuming that cht (t) and
cht (t + 1) are strictly positive, which is true in any equilibrium],
                                                  p(t)
                                   1 + r(t) =            .
                                                p(t + 1)
This arbitrage condition must hold in equilibrium.
Notice that as both assets – loans and currency – have the same rate of return
and are equally safe, individuals are indifferent about the composition of their
portfolios, because assets are held to profit only from the intertemporal shifts
of consumption that they allow, and because, if a valued currency equilibrium
exists, both assets must offer exactly the same intertemporal terms of trade.
Consequently, agents should not care which asset they hold. We can therefore
view each agent as choosing “savings”: sht (t) = lth (t)+mht (t)/p(t). The equilibrium
aggregate composition of “savings” is determined not from the asset demand side
but from the restriction that markets clear. Formally the choice of sht (t) is no
different from the choice of lth (t) that we analyzed in (b).
We first derive a contradiction from the assumption that an equilibrium exists
in a somewhat more general setup. Subsequently we analyze the particular case
that constitutes the present exercise.
Given 1 + r(t) = p(t)/p(t + 1), it is clear that sht (t) depends on 1 + r(t) [or
p(t)/p(t + 1)]. If we denote this function as sht (t) = f h [1 + r(t)], and
                      N            N
                   1 X h        1 X h
                        s (t) =       f [1 + r(t)] = f [1 + r(t)],
                   N h=1 t      N h=1
                      8. OVERLAPPING GENERATION MODELS                            133

then the equilibrium condition (ii) instructs us to set r(t) such that
                                                 H(t)
                                f [1 + r(t)] =
                                                 p(t)N
or
                 f [1 + r(t)]p(t) = H(t)
                                     N
                                         = H(t+1)
                                             N
                                         = p(t + 1)f [1 + r(t + 1)].
Hence
                        f [1 + r(t + 1)] = [1 + r(t)]f [1 + r(t)].
We have shown that, in an equilibrium where currency is not valued, r(t) = 0,
that is, f (1) = 0. Moreover, if f (·) is increasing in r(t) (an assumption satisfied
in this exercise), we have that H(t)/p(t)N > 0 implies r(t) > 0. If we set
r(t) > 0, then [1 + r(t)]f [1 + r(t)] > f [1 + r(t)] > 0. Hence r(t + 1) > r(t)
because f [1 + r(t + 1)] = [1 + r(t)]f [1 + r(t)]. Thus we see that, if we start
with any r(1) > 0, the sequence {r(t)} generated under the assumption that
an equilibrium with valued fiat currency exists is increasing. Now at every t,
f [1 + r(t)] = H(t)/p(t)N has a natural interpretation as the amount of time t
good that the “old” at t consume in excess of their endowment. In this economy
total resources are finite (actually they are constant), so f [1 + r(t)] must be
bounded, that is,
                            f [1 + r(t)] ≤ B, some B > 0.
Because f (·) is an increasing function of r(t), however, we have that [1+r(t)]f [1+
r(t)] grows without bound. Inasmuch as f [1 + r(t + 1)] = [1 + r(t)]f [1 + r(t)],
this is a contradiction.
Notice that the “key” element in the argument is that r(1) > 0. Without this
inequality we would not have been able to show that {r(t)} is increasing. Yet
r(1) > 0 is an implication of p(1) > 0 and the requirement that the per capita
excess saving function be equal to H(1)/p(1)N .
In our case, we have
                                             µ              ¶
                                           1           y
                            f [1 + r(t)] =     y−
                                           4       1 + r(t)
Using 1 + r(t) = p(t)/p(t + 1) and f [1 + r(t)] = H(0)/p(t)N , we have
             y                                                     4H(0)
               [p(t) − p(t + 1)] = H(0)N or p(t + 1) = p(t) −            .
             4                                                      Ny
Hence for any finite p(1) > 0, the sequence p(t) is decreasing with constant
decrements of size 4H(0)/N y. Consequently, no matter how high p(1) is, there
exists a finite T such that p(t) < 0, ∀t ≥ T . This series of statements contradicts
our definition of equilibrium.
e. To analyze this form of credit limit, we solve the same problem as in (a)
supplemented by the constraint lth (t)[1 + r(t)] ≥ −y/4. Clearly for the first
group – the natural lenders – the new constraint is not going to be binding,
and f h [1 + r(t)] = y/2, h = 1, . . . , N/2. For the borrowers, the constraint is
binding. Recall that the “unconstrained” problem for this group gives mht (t) =
134                   8. OVERLAPPING GENERATION MODELS

0 and lth (t) = −y/(2[1 + r(t)]). Then no matter what r(t) is, we have [1 +
r(t)]lth (t) = −y/2 < −y/4. Hence borrowers will be effectively constrained, and
[1 + r(t)]lth (t) = −y/4. This equation gives a new savings schedule equal to
                                       −y                N
                f h [1 + r(t)] =               ,    h=     + 1, . . . , N.
                                   4[1 + r(t)]           2
In an equilibrium where currency is not valued, 1/p(t) = 0∀t, and the relevant
market-clearing condition is (ii) in (a),
                           N
                       1 X h
                             f [1 + r(t)] ≡ f [1 + r(t)] = 0.
                       N h=1
Substituting the “new” functions f h (·), we have
                                        ½                 ¾
                                      y            1
                      f [1 + r(t)] =      1−               .
                                      4       2[1 + r(t)]
Then the equilibrium rate is r(t) = −1/2. As in (b), we can compute cht , given
sht (t) and the endowment to get
                            ¡        ¢
                      cht = ¡ y2 , y4 ¢, h = 1, . . . , N2 ,
                              y 3y
                        h
                      ct = 2 , 4 ,        h = N2 + 1, . . . , N.
It is clear that as expected, because the interest rate decreased, borrowers are bet-
ter off and lenders worse off. The welfare of the old at t = 1 remains unchanged,
as they do not trade with any generation born at t = 1 or later.
f. The savings function that we derived in (e) remains unchanged. The relevant
equilibrium conditions are
                  f [1 + r(t)] = H(t)/[p(t)N ],          t = 1, 2, . . . ,
                  1 + r(t)     = p(t)/p(t + 1),          t = 1, 2, . . .
Given H(t) = H(0) and the particular form of f (·), the equilibrium price sequence
must satisfy the difference equation
                                                    8H(0)
                               p(t + 1) = 2p(t) −         .
                                                     Ny
One possible solution to this difference equation (for which we do not have “initial
conditions”) is a constant p(t). Then p(t) = p∗ = 8H(0)/N y is a solution. If we
write the quantity equation as
                                       p(t) = qH/N
it follows that q = 8/y.
It is not hard to see that, if p(1) < p∗ , the corresponding {p(t)} sequence cannot
be an equilibrium, because there is a finite T1 such that ∀t ≥ T1 , p(t) < 0. On the
other hand, if p(1) > p∗ , we can establish – given the linearity of the difference
equation – that p(t) > p(t − 1)∀t ≥ 2 and that p(t) → ∞. This is still an
equilibrium with valued fiat currency, but as H(t)/p(t)N → 0 in equilibrium, we
must have that f [1 + r(t)] → 0 and consequently that the equilibrium allocation
                      8. OVERLAPPING GENERATION MODELS                          135

converges to the allocation of the equilibrium in which currency is not valued.
For the “stationary” equilibrium p(t) = p∗ , we compute cht as in (b) to get
                            ¡        ¢
                      cht = ¡ y2 , y2 ¢, h = 1, . . . , N2 ,
                              y 3y
                        h
                      ct = 4 , 4 ,        h = N2 + 1, . . . , N.
Because 1 + r(t) = p(t)/p(t + 1) = p∗ /p∗ = 1, we get r(t) = 0.
g. Lenders face the same constraints in economies (b) and (f), because the rate
of return is in both cases zero, and the constraint on borrowing is not effective
for them. Consequently, their welfare level must be the same.
The initial old are better off in economy (f), because their endowment is more
highly valued. In economy (b) the value of their endowment of H(0) is zero,
whereas in economy (f) this value is H(0)/p∗ > 0. Their consumption can there-
fore be higher. Because for the old the ranking according to consumption and
welfare is the same, we conclude that the old at t = 1 are better off in (f). Fi-
nally borrowers are worse off in economy (f). They cannot be better off, because
in both cases the rate of return is the same, but they face an additional con-
straint in economy (f), which can only shrink their choice set. [This argument
depends heavily on the fact that the rate of return is the same. If that were
not the case, the conclusion would not follow. For a counter-example, consider
economy (e). In its environment borrowers are more constrained than in (b), but
the rate of interest is sufficiently low to allow them to achieve a higher level of
welfare.] To establish that borrowers in economy (f) are actually worse off, we
use strict convexity and symmetry of preferences. By strict convexity we mean
that if u(x1 ) = u(x2 ), x1 6= x2 , then
                               u(xλ ) > u(x1 ) = u(x2 ),
where xλ = λx1 + (1 − λ)x2 , 0 < λ < 1.
By “symmetry” we mean
                      u(c1 , c2 ) = u(c2 , c1 ),      ∀(c1 , c2 ) > 0.
In economy (b) borrowers completely smooth out consumption over their life
span. The consumption bundle is cht = (ĉ, ĉ), where ĉ = y/2. In economy (f)
they consume cht = (c1 , c2 ), where c1 = y/4 and c2 = 3y/4. Then we have
u(c1 , c2 ) = u(c2 , c1 ). Define
                 c̃1 = λc1 + (1 − λ)c2 ,           c̃2 = λc2 + (1 − λ)c1 .
By strictly convexity of preferences
                          u(c̃1 , c̃2 ) > u(c1 , c2 ) = u(c2 , c1 )
for any 0 < λ < 1. Choose λ = 1/2 to get c̃1 = ĉ and c̃2 = ĉ. This statement
completes the proof.


   Exercise 8.8. Inside Money and Real Bills
136                   8. OVERLAPPING GENERATION MODELS

Consider the following overlapping-generations model of two-period-lived people.
At each date t ≥ 1 there are born N1 individuals of type 1 who are endowed with
y > 0 units of the consumption good when they are young and zero units when
they are old; there are also born N2 individuals of type 2 who are endowed with
zero units of the consumption good when they are young and Y > 0 units when
they are old. The consumption good is nonstorable. At time t = 1, there are N
old people, all of the same type, each endowed with zero units of the consumption
good and H0 /N units of unbacked paper called “fiat currency.” The populations
of type 1 and 2 individuals, N1 and N2 , remain constant for all t ≥ 1. The young
of each generation are identical in preferences and maximize the utility function
ln cht (t) + ln cht (t + 1) where cht (s) is consumption in the sth period of a member
h of generation t.
a. Consider the equilibrium without valued currency (that is, the equilibrium
in which there is no trade between generations). Let [1 + r(t)] be the gross rate
of return on consumption loans. Find a formula for [1 + r(t)] as a function of
N1 , N2 , y, and Y .

b. Suppose that N1 , N2 , y, and Y are such that [1 + r(t)] > 1 in the equilibrium
without valued currency. Then prove that there can exist no quantity-theory-style
equilibrium where fiat currency is valued and where the price level p(t) obeys the
quantity theory equation p(t) = q · H0 , where q is a positive constant and p(t) is
measured in units of currency per unit good.

c. Suppose that N1 , N2 , y, and Y are such that in the nonvalued-currency equilib-
rium, 1 + r(t) < 1. Prove that there exists an equilibrium in which fiat currency
is valued and that there obtains the quantity theory equation p(t) = q · H 0 , where
q is a constant. Construct an argument to show that the equilibrium with valued
currency is not Pareto superior to the nonvalued-currency equilibrium.

d. Suppose that N1 , N2 , y, and Y are such that, in the above nonvalued-currency
economy, [1 + r(t)] < 1, so that there exists an equilibrium in which fiat currency
is valued. Let p̄ be the stationary equilibrium price level in that economy. Now
consider an alternative economy, identical with the preceding one in all respects
except for the following feature: a government each period purchases a constant
amount Lg of consumption loans and pays for them by issuing debt on itself,
called “inside money” MI , in the amount MI (t) = Lg · p(t). The government
never retires the inside money, using the proceeds of the loans to finance new
purchases of consumption loans in subsequent periods. The quantity of outside
money, or currency, remains H0 , whereas the “total high-power money” is now
H0 + MI (t).
       (i) Show that in this economy there exists a valued-currency equilibrium in
           which the price level is constant over time at p(t) = p̄, or equivalently,
           as in the economy in (c), p(t) = qH0 .
                          8. OVERLAPPING GENERATION MODELS                                 137

        (ii) Explain why government purchases of private debt are not inflationary
             in this economy.
       (iii) In standard macroeconomic models, once-and-for-all government open-
             market operations in private debt normally affect real variables and/or
             the price level. What accounts for the difference between those models
             and the one in this problem?

      Solution

a. The problem solved by the young of generation t ≥ 1 is
             maxcht (t),cht (t+1),sht (t) uh [cht (t), cht (t + 1)]
             subject to                   cht (t) + sht (t) ≤ wth (t),
                                          cht (t + 1) ≤ wth (t + 1) + [1 + r(t)]sht (t),
where sht (t) is interpreted as savings, measured in time t consumption good,
and [1 + r(t)] is the rate of return on savings. Given any desired amount of
savings, an agent has to choose the composition of his portfolio. If two assets
are available – loans and currency – we have that sht (t) = lth (t) + mht (t)/p(t). Let
the rate of return on consumption loans be [1 + r(t)]. Next period the value of
the portfolio lth (t) + mht (t)/p(t) will be [1 + r(t)]lth (t) + mht (t)p(t)/[p(t + 1)p(t)].
In an equilibrium with valued currency 1/p(t) > 0 and mht (t) > 0 for some h;
consequently, currency cannot be dominated by loans – otherwise no agent would
hold currency – and both assets have the same rate of return p(t)/p(t + 1) =
1 + r(t). Therefore, the value of the portfolio in terms of (t + 1) good can be
written as [1+r(t)][lth (t)+mht (t)/p(t)] = [1+r(t)]sht (t). Clearly, in an equilibrium
where currency is not valued, 1/p(t) = 0, and the same formulation in terms of
sht (t) is applicable.
For the logarithmic utility function, the first-order conditions yield
                                               ·                       ¸
                       h       h             1 h           wth (t + 1)
                     st (t) = f [1 + r(t)] =     w (t) −                 .
                                             2 t            1 + r(t)
Let                                                    PN1 +N2
                                                1
                    f [1 + r(t)]           ≡ N1h+N 2      h=1    f h [1 i+ r(t)]
                                           = 21 (1 − α)y − 1+r(t)
                                                            αY
                                                                  ,
                    where          1 − α = N1N+N
                                               1
                                                 2
                                                         and α = N1N+N
                                                                     2
                                                                       2
                                                                         .
In an equilibrium in which currency is not valued, the relevant equilibrium con-
dition is that the market for (intragenerational) loans clears, that is,
                                        f [1 + r(t)] = 0.
Using the particular form of f [1 + r(t)], we get that the unique rate of return
that clears the market is given by
                                                       N2 Y
                                       1 + r(t) =           .
                                                       N1 y
138                   8. OVERLAPPING GENERATION MODELS

b. We give a proof of a more general result, namely, that no equilibrium with
valued currency can exist – either quantity-theory style or not – for an even larger
class of economies. To do so we assume that f [1 + r(t)] is monotone increasing
and continuous, an assumption that is clearly satisfied by the f (·) function we
derived.
If the rate of return that clears the market in the nonmonetary equilibrium, say
r1 , is greater than zero, we have
                                   f (1 + r1 ) = 0.
In an equilibrium such that currency is valued, we have
                              H0
             f [1 + r(t)] =         > 0, all t, where N̄ = N1 + N2 .
                            N̄ p(t)
Given
                                              p(t)
                                 1 + r(t) =          ,
                                            p(t + 1)
the implication is that
            f [1 + r(t + 1)] = [1 + r(t)]f [1 + r(t)],         r(t) > r1 > 0.
Then notice that r(1) > r1 implies f [1 + r(2)] > f [1 + r(1)], which in turn implies
r(2) > r(1). Proceeding in this manner, we establish that the sequence of rates of
return that can potentially be equilibrium rates of return is monotone increasing.
Then it either converges to some r̄ or diverges. We now prove that it cannot
converge. By continuity of f (·), we have that if r(t) → r̄ then f [1 + r(t)] →
f (1 + r̄). Then as t goes to infinity, we have
                            f (1 + r̄) = (1 + r̄)f (1 + r̄).
Yet r̄ ≥ r(t) > r1 > 0, which yields a contradiction. Therefore the sequence
{r(t)} goes to infinity. But this contradicts the assumption that an equilibrium
exists, because f [1 + r(t)] is bounded by, say, total endowments, whereas [1 +
r(t)]f [1 + r(t)] is going to infinity as t → ∞. Consequently, we cannot have
equality for all t.
For the example at hand, we can show this result by simply establishing that
no matter how large p(1) is, the sequence {p(t)} generated by the equilibrium
condition contains negative terms for all t ≥ T , T finite.
The condition f [1 + r(t)] = H0 /N̄ p(t) corresponds to (1/2){(1 − α)y − αY /[1 +
r(t)]} = H0 /N̄ p(t), whereas 1 + r(t) > 1 in a nonvalued-currency equilibrium is
simply N2 Y /N1 y > 1. Using 1 + r(t) = p(t)/p(t + 1), we get
                                                         2H0
                          (1 − α)yp(t) − αY p(t + 1) =
                                                          N̄
or
                                         N1 y        2H0
                             p(t + 1) =       p(t) −
                                        N2 Y         N2 Y
Let
                                       N1 y
                                            = φ.
                                      N2 Y
                       8. OVERLAPPING GENERATION MODELS                              139

Then
                                                        t−1
                                        t     2H0 X j
                          p(t + 1) = φ p(1) −          φ.
                                              N2 Y j=0
Because 0 < φ < 1, however, for t large the first term becomes negligible, whereas
the second term converges to −2H0 /[N2 Y (1 − φ)], a negative number. Therefore,
for large t, p(t) must be negative.
c. As in (b), we can first show that this result obtains in greater generality.
Assume, as before, that f (·) is increasing and continuous. We are given that
                            f (1 + r1 ) = 0 and r1 < 0.
By continuity and monotonicity, we have that f (1) > 0. Then let p(t) = p̄ =
H0 /f (1)N̄ . It is easy to verify that the conditions for existence of an equilibrium
with valued currency are satisfied by construction. For the example, we want a
constant solution to
                                           N1 y        2H0
                              p(t + 1) =        p(t) −
                                           N2 Y        N2 Y
where
                                        N1 y
                                               > 1.
                                        N2 Y
Such a solution is
                                   2H0
                   p(t) = p =               > 0, and 1 + r(t) = 1.
                               N1 y − N 2 Y
To argue that the equilibrium with valued currency does not Pareto dominate
the equilibrium where currency is valueless, it suffices to show that at least one
agent is worse off. We do so for the type 2 agents, that is, for borrowers. The
basic idea is that when the rate of interest increases – and the rate of return
in the equilibrium with valued currency is higher than the rate of return in the
equilibrium without valued currency – borrowers are worse off.
Given a rate of interest r, we say that an agent is a borrower if argmax u[w1 −
s, w2 + (1 + r)s] < 0. Let si be the solution to the maximization problem when
the rate of interest is ri . Assume that r1 > r2 and that s1 and s2 are negative
(the agent is a borrower). Then
             u[w1 − s1 , w2 + (1 + r2 )s1 ] ≤ u[w1 − s2 , w2 + (1 + r2 )s2 ],
given that the optimal choice is s2 when r = r2 . Still, u(w1 − s1 , w2 + [1 + r2 ]s1 ) <
u[w1 − s1 , w2 + (1 + r2 )s1 ], given s1 < 0, r1 > r2 , and monotonicity of u(·). This
statement proves the proposition. In terms of the example, pick an agent of type
2 endowed (0, Y ). This agent will always borrow, and the logarithmic utility
function is monotone increasing. Consequently the previous result applies.
d. i. The basic argument that explains this sort of irrelevance result is that
the gross composition of individual portfolios is not determinate. Consider, for
example, an individual who, at the going rate of return, wants to “save” ten
dollars. This agent should be indifferent among portfolios that consist of (10 + l)
assets or loans acquired and l debts or loans granted, for any l. This result implies
140                    8. OVERLAPPING GENERATION MODELS

that, if the government wants to increase its demand for “loans,” private agents
will be willing to supply those “loans” and simultaneously to “borrow” in another
market – the market for currency, for example – so that their net asset position
remains unchanged.
Given the government policy, the “new” per capita aggregate demand is Lg /N +
f [1 + r(t)]. Equilibrium requires that excess demand for loans, that is, excess
savings, be equal to net supply of assets, which is MI (t)/p(t) + H/p(t). Let p̄ be
the price we found in (c), that is,
                                             H
                                   f (1) =        .
                                             N p̄
If p(t) = p̄ is an equilibrium, we must have MI (t) = MI = Lg p̄, and
                             Lg           H     MI
                                + f (1) =     +     .
                             N            N p̄ N p̄
This is the case if and only if Lg = MI /p̄ – exactly the condition we are given.
Hence the conjecture is verified.
ii. Notice that in this setup it is a little bit arbitrary to call M I money. We can
think of MI as liabilities of a financial intermediary that are fully backed by real
loans. In this sense there is no creation of new currency, because the “new” asset
inherits all the characteristics of the real loans by which it is backed. Therefore
such a trivial operation – an exchange of names – cannot have any effects.
iii. In standard macro models we usually assume that money and bonds are
“different” assets, different enough for us to start out with well-defined demands
for each. In the model we are analyzing, we have a well-defined demand for savings
but not for each asset that can potentially be part of those savings. Actually,
in our model, in an equilibrium with valued currency, agents are completely
indifferent between portfolios that contain only bonds and portfolios that contain
only currency, because the rate of return is the same.
We could alter our model in at least two ways to obtain well-defined demands
for each asset. First, we could suppose that, even though bonds have a higher
return, currency is held because of some legal restrictions. Second, in the absence
of legal restrictions there are perhaps sources of demand other than the stream of
goods that assets can buy. Currency-in-the-utility-function and cash-in-advance
models are examples of such approaches.
It seems possible to imagine a transactions technology that makes money and
bonds “different.” This technology must be rich enough to rule out private in-
termediation that produces “moneylike” assets backed by bonds. In some sense,
these situations can be interpreted either as some form of legal restriction or as
arising from the assumption that the government and the private sector have dif-
ferent technologies for producing “currencylike” assets. In either case, we would
also have obtained nonneutrality of an open-market operation.


      Exercise 8.9. Social Security and the Price Level
                         8. OVERLAPPING GENERATION MODELS                                 141

Consider an economy (“economy I”) that consists of overlapping generations of
two-period-lived people. At each date t ≥ 1 there are born a constant number
N of young people, who desire to consume both when they are young, at t,
and when they are old, at (t + 1). Each young person has the utility function
ln ct (t) + ln ct (t + 1), where cs (t) is time t consumption of an agent born at s. For
all dates t ≥ 1, young people are endowed with y > 0 units of a single nonstorable
consumption good when they are young and zero units when they are old. In
addition, at time t = 1 there are N old people endowed in the aggregate with
H units of unbacked fiat currency. Let p(t) be the nominal price level at t,
denominated in dollars per time t good.
a. Define and compute an equilibrium with valued fiat currency for this economy.
Argue that it exists and is unique. Now consider a second economy (“economy
II”) that is identical to the above economy except that economy II possesses a
social security system. In particular, at each date t ≥ 1, the government taxes
τ > 0 units of the time t consumption good away from each young person and at
the same time gives τ units of the time t consumption good to each old person
then alive.
b. Does economy II possess an equilibrium with valued fiat currency? Describe
the restrictions on the parameter τ , if any, that are needed to ensure the existence
of such an equilibrium.
c. If an equilibrium with valued fiat currency exists, is it unique?
d. Consider the stationary equilibrium with valued fiat currency. Is it unique?
Describe how the value of currency or price level would vary across economies
with differences in the size of the social security system, as measured by τ .

   Solution

a. We first define an equilibrium with valued currency as a pair of sequences
{p(t)}∞                  ∞
       t=1 and {r(t)}t=1 , with p(t) > 0 and finite, all t; and an allocation c =
  h ∞
{ct }t=1 such that
       (i) 1 + r(t) = p(t)/p(t + 1).
      (ii) Given {p(t)} and {r(t)}, each agent h of generation t chooses savings,
           sht (t), and lifetime consumption cht = [cht (t), cht (t + 1)] to solve
            maxcht (t),cht (t+1),sht (t) uh [cht (t), cht (t + 1)]
            subject to                   cht (t) + sht (t) ≤ wth (t),
                                         cht (t + 1) ≤ wth (t + 1) + [1 + r(t)]sht (t).
          Denote
                           f h [1 + r(t)] ≡ wth (t) − cht (t).
     (iii) Market clearing requires that
                 N
             1 X h                                H(t)
                   f [1 + r(t)] ≡ f [1 + r(t)] =       ,                t = 1, 2, . . .
             N h=1                               p(t)N
142                   8. OVERLAPPING GENERATION MODELS

Notice that condition (i) requires that neither currency nor private loans dominate
the other in rate of return. This is a consequence of utility maximization. If an
agent holds both loans and currency, then the two must have equal rates of return.
If not, the budget set can clearly be enlarged by holding only one asset, namely
the one with the higher rate of return.
It is easy to derive f h (·) for the Cobb-Douglas utility function. It turns out to be
                                          ·                     ¸
                           h            1 h         wth (t + 1)
                         f [1 + r(t)] =     w (t) −               .
                                        2 t          1 + r(t)
For economy I, we have wth (t) = y and wth (t + 1) = 0. Then
                                                  y
                                    f [1 + r(t)] = .
                                                  2
Still, (iii) requires f [1 + r(t)] = H/p(t)N . Hence the unique solution is p(t) =
2H/N y, and r(t) = 0.
This condition establishes existence – because p(t) > 0 – and uniqueness.
b. To compute an equilibrium for economy II, we note that this second eco nomy
shares the characteristics of economy I except for one, namely the endowment
pattern. In this economy, part of the first-period endowment is taxed away by the
government. The effective or disposable first-period endowment is then wth (t) =
y − τ . On the other hand, agents receive a transfer in their second period of life
that can formally be considered an endowment. Consequently we set wth (t + 1) =
τ.
The definition of equilibrium remains unchanged. For this “new” economy, we
can compute that f [1 + r(t)] = (1/2)(y − τ − τ /[1 + r(t)]).
We know that a valued-currency equilibrium with a gross rate of interest strictly
greater than one cannot exist. To see this point, suppose that 1+r(t) = 1+r1 > 1.
We have p(t)/p(t + 1) = 1 + r(t), however, or p(t + 1) = (1 + r1 )−1 p(t). Hence
prices decrease in this economy. On the other hand, aggregate real currency
balances H/p(t), are growing without bound. [It is easy to see that they grow
exponentially at the rate (1 + r1 ).] This statement violates condition (iii) in the
definition of equilibrium, because the left-hand side – savings – is bounded by
the level of first-period endowments. Then it is clear that, if moving τ affects the
“admissible” values r(t), we will probably have to rule out some τ to guarantee
the existence of an equilibrium.
In any equilibrium with valued currency, f [1 + r(t)] > 0. For this economy that
condition is                   ·                     ¸
                             1                 τ
                                 (y − τ ) −            > 0,
                             2              1 + r(t)
or equivalently
                                                 τ
                                   1 + r(t) >        .
                                               y−τ
We have argued, however, that in an equilibrium with valued currency the rate of
return cannot be bounded below by a number strictly greater than one. Therefore,
we cannot have τ /(y − τ ) > 1. This situation requires that τ ≤ y/2. The case
                      8. OVERLAPPING GENERATION MODELS                          143

τ = y/2 can be handled similarly, as we now see. Notice that, if 1 + r(t) = 1,
then f h [1 + r(t)] = 0. Hence we need 1 + r(t) > 1. We also have to rule out the
possibility of a sequence of terms r(t) that has strictly positive components but
that converges to zero. To do so, we show that if r(1) > 0 – a necessary condition
for H/p(1) > 0 – the sequence r(t) goes to infinity. We have that
                        h           i
                      y         1         H           H
                      2
                          1 − 1+r(t) = p(t)N  = p(t+1)N   [1 + r(t)]
                                                  h              i
                                            y              1
                                      = 2[1+r(t)]   1 − 1+r(t+1)   .
Rearranging terms we get
                                               r(t)
                               r(t + 1) =            .
                                            1 − r(t)
It is easy to see that, if r(1) > 0, then r(2) > r(1). The sequence {r(t)} is
increasing (actually it diverges, but we do not need such a strong result) and
hence {1 + r(t)} cannot converge to one.
To recapitulate, we learned that if τ ≥ y/2 there cannot be an equilibrium with
valued fiat currency. Now it is simple to establish that for any τ < y/2 there
exists at least one such equilibrium. We prove this claim by simply constructing
one. Notice that if τ < y/2, then f (1) > 0. Pick p(t) = p̄ = f (1)−1 H/N , and
this is an equilibrium.
The restrictions on the parameters of the economy – basically the relative size of
first- and second-period endowments – that are needed for an equilibrium with
valued fiat currency to exist have a natural economic interpretation. Recall that
condition (iii) of the definition of equilibrium requires that the economy save a
positive amount. Moreover we know that aggregate average savings must occur
at rates of return that are less than or equal to one. Young individuals – the only
potential savers – will save positive amounts only to increase their consumption
in the second period of their life. If their lifetime endowments are tilted toward
their second period (in other words, if τ is large), then at “low” interest rates
there will be no positive excess savings and hence no valued fiat currency.
This interpretation readily suggests that a model to generate nonexistence of an
equilibrium with valued fiat money can be devised by increasing the number of
borrowers to the point where the “average” agent does not want to have positive
savings at rates of return smaller than or equal to one.
c. In this section, we argue that there are many equilibria with valued currency.
The conditions for existence are
                     ³              ´
                   1          w2          H
                   2
                       w 1 − 1+r(t)
                                      = p(t)N ,
                                      p(t)
                 1 + r(t)          = p(t+1) ,   p(t) > 0,   all t,
where w1 = y−τ , w2 = τ , and w1 > w2 , because τ < y/2. Making the appropriate
substitutions, we can reduce the condition for existence to finding a solution to
the following difference equation
                                  2H                  w1         2H
           p(t)w1 − w2 p(t + 1) =       or p(t + 1) =    p(t) −       .
                                   N                  w2         N w2
144                    8. OVERLAPPING GENERATION MODELS

Notice that we are not given an initial condition. Therefore many different func-
tions mapping the positive integers into real numbers can be solutions of that
difference equation. One of them is precisely that found in (b), that is, a con-
stant price.
                                                2H
                              p(t) = p̄ =               .
                                           N (w1 − w2 )
We can now parameterize the set of solutions by the initial value p(1). Basically,
we care about two sets: (1) the set of paths {p(t)} such that p(1) < p̄ and (2)
the set of paths {p(t)} such that p(1) > p̄. We want to argue that no element of
the first set can be an equilibrium and that any element of the second is, that is,
that there is a continuum of equilibria.
First, given the definition of p̄, we can rearrange the difference equation to read
                                             w1
                            p(t + 1) − p̄ =     [p(t) − p̄].
                                             w2
This is a first-order homogeneous difference equation in the variable Zt ≡ p(t)− p̄.
For any initial condition Z1 , the solution is
                                    µ ¶t
                                     w1             w1
                           Zt+1 =          Z1 ,         > 1.
                                     w2             w2
Then if Z1 < 0 – that is, p(1) < p̄ − Zt decreases without bound, and for some
finite T , Zt < −p̄ for all t ≥ T . The implication is that p(t) < 0, which contradicts
the definition of equilibrium.
If we pick p(1) in the second set, Z1 = p(1)−p̄ > 0. Then as t grows, Zt also grows,
that is, p(t) diverges. Yet this is an equilibrium. Nothing prevents prices from
going to infinity in our definition of equilibrium with valued currency. Clearly,
“real” currency balances, H/p(t), are converging to zero. The rate of return
is also converging to the rate of return of the nonvalued-currency equilibrium,
and the consumption allocation converges to the equilibrium allocation of the
economy without currency. The equilibrium is not “stationary,” in the sense that
the allocations depend on time even in a purely stationary physical endowment.
d. We have already argued that there is only one equilibrium with constant rate
of return, namely the one that obtains when p(t) = p̄, all t.
Now if we analyze different economies indexed by τ , it is clear from our findings
in (b) that, if τ1 > τ2 , which corresponds to w11 < w12 and w21 > w22 , we have
                                 2H                   2H
                       p̄1 =      1    1
                                          > p̄2 =                .
                             N (w1 − w2 )         N (w12 − w22 )
One interpretation of this result is that, the more “important” the social security
system (τ1 > τ2 ), the less important are private savings as a way of providing
consumption in the second period of life. Consequently the value of those savings
must be smaller (H/p̄1 < H/p̄2 ).
For these economies a social security system is a perfect substitute for private
savings in the sense that per capita second-period consumption is y/2 regardless
of τ .
                      8. OVERLAPPING GENERATION MODELS                            145

   Exercise 8.10. Seignorage
Consider an economy consisting of overlapping generations of two-period-lived
agents. At each date t ≥ 1, there are born N1 “lenders” who are endowed with
α > 0 units of the single consumption good when they are young and zero units
when they are old. At each date t ≥ 1, there are also born N2 “borrowers” who
are endowed with zero units of the consumption good when they are young and
β > 0 units when they are old. The good is nonstorable, and N1 and N2 are
constant through time. The economy starts at time 1, at which time there are
N old people who are in the aggregate endowed with H(0) units of unbacked,
intrinsically worthless pieces of paper called dollars. Assume that α, β, N 1 , and
N2 are such that
                                     N2 β
                                          < 1.
                                     N1 α
Assume that everyone has preferences
                    u[cht (t), cht (t + 1)] = ln cht (t) + ln cht (t + 1),
where cht (s) is consumption of time s good of agent h born at time t.
a. Compute the equilibrium interest rate on consumption loans in the equilibrium
without valued currency.
b. Construct a brief argument to establish whether or not the equilibrium without
valued currency is Pareto optimal.
The economy also contains a government that purchases and destroys Gt units
of the good in period t, t ≥ 1. The government finances its purchases entirely by
currency creation. That is, at time t,
                                       H(t) − H(t − 1)
                                Gt =                   ,
                                             p(t)
where [H(t) − H(t − 1)] is the additional dollars printed by the government at
t and p(t) is the price level at t. The government is assumed to increase H(t)
according to
                          H(t) = zH(t − 1),     z ≥ 1,
where z is a constant for all time t ≥ 1.
At time t, old people who carried over H(t − 1) dollars between (t − 1) and t offer
these H(t − 1) dollars in exchange for time t goods. Also at t the government
offers H(t) − H(t − 1) dollars for goods, so that H(t) is the total supply of dollars
at time t, to be carried over by the young into time (t + 1).
c. Assume that 1/z > N2 β/N1 α. Show that under this assumption there exists
a continuum of equilibria with valued currency.
d. Display the unique stationary equilibrium with valued currency in the form
of a “quantity theory” equation. Compute the equilibrium rate of return on
currency and consumption loans.
146                      8. OVERLAPPING GENERATION MODELS

e. Argue that if 1/z < N2 β/N1 α, then there exists no valued-currency equilib-
rium. Interpret this result. (Hint: Look at the rate of return on consumption
loans in the equilibrium without valued currency.)
f. Find the value of z that maximizes the government’s Gt in a stationary equi-
librium. Compare this with the largest value of z that is compatible with the
existence of a valued-currency equilibrium.

      Solution

a. Given the logarithmic structure of preferences, it is easy to show that the
solution to the problem
             maxcht (t),cht (t+1),sht (t) uh [cht (t), cht (t + 1)]
             subject to                   cht (t) + sht (t) ≤ wth (t),
                                          cht (t + 1) ≤ wth (t + 1) + [1 + r(t)]sht (t)
is a savings function of the form
                                                      ·                         ¸
                                                1                  wh (t + 1)
                     sht (t) ≡ f h [1 + r(t)] =           wth (t) − t
                                                  2                1 + r(t)
where, as usual, savings is to be understood as the sum of loans lth (t) and “real”
currency holdings mht (t)/p(t). It has also been proved in the text that, if mht (t) >
0, then p(t)/p(t + 1) = 1+r(t), and hence there is no loss of generality in assuming
a single rate of return on savings.
In an equilibrium without valued currency, 1/p(t) = 0, all t. Then an equilibrium
is a sequence {r(t)}, t = 1, 2, . . ., and an allocation [{cht−1 (t)}, h = 1, . . . , N, t =
1, 2, . . .] such that
                                             NX
                                              1 +N2
                                         1
                     f [1 + r(t)] =                 f h [1 + r(t)] = 0.
                                      N1 + N2 h=1

In this environment there are N1 agents with savings function α/2, and N2 agents
with savings function −β/2[1 + r(t)]. Denoting k = N1 /(N1 + N2 ), average
aggregate savings are
                              ·               ¸
                            1        (1 − k)β
             f [1 + r(t)] =     kα −            , and f [1 + r(t)] = 0
                            2        1 + r(t)
implies
                                           (1 − k)β   N2 β
                             1 + r(t) =             =      < 1.
                                              kα      N1 α
b. We want to argue that, because the rate of return is lower than the rate of
growth, the equilibrium allocation is not Pareto optimal. To prove this point
it suffices to display another allocation that is Pareto superior, that is, that is
feasible and increases the utility level of at least one agent in the economy without
decreasing the utility of others.
                         8. OVERLAPPING GENERATION MODELS                                  147

A typical “lender” consumes cL = (α/2, N2 βα/N1 α2), whereas a “borrower”
consumes cB = (βN1 α/2N2 β, β/2). The new allocation that we are going to con-
struct gives borrowers exactly the same lifetime consumption as the competitive
equilibrium. In the competitive allocation, lenders’ total consumption is
                                µ        ¶
                        α         N2 β α      1
                     N1 + N 1              = (N1 α + N2 β).
                        2         N1 α 2      2
An allocation that is stationary (all generations indexed t ≥ 1 get the same
lifetime consumption) and treats all lenders symmetrically must satisfy
                                             1
                            N1 ĉ1 + N1 ĉ2 ≤ (N1 α + N2 β).
                                             2
In particular, we can write ĉ1 = cL1 − δ and ĉ2 = cL2 + δ. This guarantees
that feasibility is satisfied. The utility derived from the competitive bundle is
u(cL1 , cL2 ). The maximal utility that is consistent with feasibility and keeping the
consumption of the initial old at least at the original level can be obtained by
setting δ so that
                            δ = argmax u(cL1 − δ, cL2 + δ).
                                     δ≥0

If the solution is δ > 0, strict quasi-concavity of u(·) implies that u(ĉ 1 , ĉ2 ) >
u(cL1 , cL2 ). That the solution is indeed positive can be established from the first-
order condition of the maximization problem that requires
                                  u2 (cL1 − δ, cL2 + δ)
                                                        = 1.
                                  u1 (cL1 − δ, cL2 + δ)
In a competitive equilibrium
                           u2 (cL1 , cL2 )      1       N1 α
                                 L L
                                           =          =      > 1.
                           u1 (c1 , c2 )     1 + r(t)   N2 β
Still,
                          u2 (cL1 − δ, cL2 + δ)
                                L        L
                                                → 0 as δ → cL1
                          u1 (c1 − δ, c2 + δ)
and goes to infinity as δ → −cL2 . Moreover, u2 /u1 is monotone decreasing. Then
if
                                u2 (cL1 − δ, cL2 + δ)
                                                      = 1,
                                u1 (cL1 − δ, cL2 + δ)
it must be that δ > 0. This conclusion shows that the “new” allocation makes
all lenders better off, increases the consumption of the old at t = 1, and gives the
borrowers the same consumption that they get in the competitive equilibrium.
Consequently we have found an allocation that is Pareto superior (although not
Pareto optimal) to the competitive allocation. Therefore the latter cannot be
Pareto optimal.
c. An equilibrium with valued fiat currency
                                          £         is a pair of sequences {r(t)} and ¤
{p(t)}, p(t) > 0, all t; and an allocation {cht−1 (t)}, h = 1, . . . , N1 + N2 , t = 1, 2, . . .
148                    8. OVERLAPPING GENERATION MODELS

such that
                                        H(t)
                    f [1 + r(t)] = p(t)(N 1 +N2 )
                                                  ,   t = 1, 2, . . . (1)
                                    p(t)
                    1 + r(t)     = p(t+1) .                           (2)
We can reduce the two equations to
                    ·                          ¸
                  1                  p(t + 1)            H(t)
                      kα − (1 − k)β               =
                  2                     p(t)        p(t)(N1 + N2 )
or
                               kα                2H(0)       zt
                p(t + 1) =             p(t) −                       .
                            (1 − k)β            (1 − k)β (N1 + N2 )
Define
                                             p(t)
                                   p̂(t) = t .
                                              z
Then
                              N1 α                   2H(0)
(3)              p̂(t + 1) =        p̂(t) −                       .
                              N2 βz          (1 − k)βz(N1 + N2 )
Notice that there is a one-to-one correspondence between solutions {p̂(t)} and
{p(t)}. In particular, if for some parameter values p̂(t) < 0 for some t, for those
values p(t) < 0 in the same set of values t.
Assume that 1/z > N2 β/N1 α. Then define
                                             2H(0)
                                   p̄ =                .
                                          N1 α − N2 βz
Clearly, p̂(t) = p̄ is a solution to (3), which means that p(t) = z t p̄ is an equilibrium
price sequence. By simple iteration it follows that, if p̂(1) > p̄, then the sequence
{p̂(t)} is positive and diverges. Correspondingly, the sequence {p(t)}, with initial
condition p(1) = p̂(1)z and given by p(t) = z t p̂(t), also diverges, but this in no
way contradicts our definition of equilibrium. In this equilibrium, “real” currency
balances H(t)/p(t) are converging to zero. The rate of return on loans and the
consumption allocation converge to the values we computed in (a).
d. We have already done much of the work. Notice that an equilibrium is station-
ary if the consumption allocation does not depend on time. For the environment
of this exercise, such an equilibrium requires that the interest rate be constant.
In such an equilibrium
                                                      H(t)
                       f [1 + r(t)] = f (1 + r) =          ,   all t.
                                                      p(t)
Then
                          H(t)      H(t + 1)      zH(t)
                                  =            =          .
                           p(t)      p(t + 1)    p(t + 1)
This equality requires p(t + 1) = zp(t) and 1 + r = p(t)/p(t + 1) = 1/z. Recall,
however, that we have already found an equilibrium where prices grow at the rate
z. This is given by p(t) = z t p̄. This is the unique path {p(t)} that satisfies the
difference equation and gives 1 + r(t) = 1/z, all t.
                      8. OVERLAPPING GENERATION MODELS                            149

e. If 1/z < N2 β/N1 α, we can write (3) as
                                        2H(0)
                p̂(t + 1) = φp̂(t) −          ,     φ = N1 α/N2 βz < 1.
                                        N2 βz
Iterating on this equation, we get
                                                 2H(0) 1 − φt−1
                          p̂(t) = φt−1 p̂(1) −                  .
                                                 N2 βz 1 − φ
Then, because 0 < φ < 1, it is clear that, no matter how high p̂(1) is, there exists
a finite T such that for every t ≥ T , p̂(t) < 0. This statement in turn implies that
p(t) < 0, which contradicts the definition of equilibrium. This nonexistence result
clearly puts a bound to z, that is, currency supply cannot grow too fast. It shows
that, for an equilibrium with valued fiat currency to exist, it is necessary that the
“stationary rate of return” 1/z be greater than the rate of return that obtains
when currency is not valued, N2 β/N1 α. The result illustrated here holds for this
class of models, namely that, if an equilibrium with valued currency exists, then
the rate of return is greater than the rate that clears the market for loans when
currency has no value.
f. In this section, we compare different stationary equilibria. In any of these
equilibria, average real currency balances are constant, and we can write
                   G(z)
                    N
                           = H(t+1)−H(t)
                                N p(t+1)
                             H(t+1)      p(t) H(t)
                                                          ¡ 1 ¢¡     1
                                                                       ¢
                           = N p(t+1) − p(t+1) N p(t)
                                                      = f   z
                                                                 1 − z
                                                                        .
For the economy of this exercise, we have
                                                 µ      ¶
                          G(z)  1                     1
                               = [kα − (1 − k)βz] 1 −    .
                           N    2                     z
It is clear that, if G(z) > 0, we need z > 1. On the other hand, to guarantee
existence of an equilibrium, z < N1 α/N2 β. The value of z that maximizes G
solves                                                 µ      ¶
                                     1                      1
                           max         [kα − (1 − k)βz] 1 −     .
                       1<z<N1 α/N2 β 2                      z
This is a concave program. The solution is given by any z within the feasible
                                                                      1
set that satisfies the first-order condition. Such a z is (N1 α/N2 β) 2 . Notice that
the value of z, or steady-state inflation, that maximizes government revenue from
inflation is not the largest z for which an equilibrium with valued currency exists.
The underlying intuition is simple: this largest feasible z maximizes the rate at
which real currency balances are taxed. A higher z, however, reduces real money
balances or the “base” of the inflation tax. The optimal choice balances the
effects of the higher tax rate against the lower base on which the inflation tax is
levied.


   Exercise 8.11. Unpleasant monetarist arithmetic
150                    8. OVERLAPPING GENERATION MODELS

Consider an economy in which the aggregate demand for government currency
for t ≥ 1 is given by [M (t)p(t)]d = g[R1 (t)], where R1 (t) is the gross rate of return
on currency between t and (t + 1), M (t) is the stock of currency at t, and p(t)
is the value of currency in terms of goods at t (the reciprocal of the price level).
The function g(R) satisfies

       g(R)(1 − R) = h(R) > 0     for R ∈ (R, 1),
       h(R) ≤ 0    for R < R,      R ≥ 1,      R > 0.
       h0 (R) < 0   for R > Rm
       h0 (R) > 0   for R < Rm
       h(Rm ) > D,     where D is a positive number to be defined shortly.
The government faces an infinitely elastic demand for its interest-bearing bonds
at a constant-over-time gross rate of return R2 > 1. The government finances a
budget deficit D, defined as government purchases minus explicit taxes, that is
constant over time. The government’s budget constraint is
(1)        D = p(t)[M (t) − M (t − 1)] + B(t) − B(t − 1)R2 ,          t≥1
subject to B(0) = 0, M (0) > 0. In equilibrium,
(2)                              M (t)p(t) = g[R1 (t)]
The government is free to choose paths of M (t) and B(t), subject to equations
(1) and (2).
a. Prove that, for B(t) = 0, for all t > 0, there exist two stationary equilibria for
this model.
b. Show that there exist values of B > 0, such that there exist stationary
equilibria with B(t) = B, M (t)p(t) = M p.
c. Prove a version of the following proposition: among stationary equilibria, the
lower the value of B, the lower the stationary rate of inflation consistent with
equilibrium. (You will have to make an assumption about Laffer curve effects to
obtain such a proposition.)
This problem displays some of the ideas used by Sargent and Wallace (1981).
They argue that, under assumptions like those leading to the proposition stated
in part c, the “looser” money is today [that is, the higher M (1) and the lower
B(1)], the lower the stationary inflation rate.
Solution
Let’s recall the properties of the function h(R). Those property are illustrated in
figure 8.5 in the book.
Solutions of h(R) = 0: The function has two zeros, R < 1 and 1. It is non
negative for R ∈ [R, 1] and negative otherwise.
Maximum: The function is increasing for R < Rm and decreasing for R > Rm .
Clearly, Rm achieves its maximum.
In the economy we consider, the government finances its deficit either by printing
money Mt − Mt−1 , or by issuing interest bearing bonds B(t).
                      8. OVERLAPPING GENERATION MODELS                            151

a. Assume first that the government does not issue bond. Let’s call Rt−1 ≡
 pt
pt−1
     the rate of return on currency. The government budget constraint can be
conveniently written:

                                        p(t)
                    D = p(t)M (t) −            p(t − 1)M (t − 1)
                                      p(t − 1)
Now use the equilibrium condition on the market for money:

                             D = g(Rt ) − Rt−1 g(Rt−1 )
In a stationary equilibrium, the return on money is constant:

                             D = g(R)(1 − R) = h(R)
h(R) is the amount of real resources raised by the government by printing money
when inflation is constant and equal to R1 . It is a “Laffer curve”. For high
inflation R1 , nobody is willing to hold money and the government does not raise
any inflation tax. Also, when there is no inflation R = 1, then the government
obviously does not raise any inflation tax. And there is an “optimal” rate of
inflation 1 < R1m < R1 which maximizes government revenue.
h(R) increases from 0 to h(Rm ) > D for R < R < Rm , so there is a unique
stationary equilibrium Rlow ∈ [R, Rm ]. Similarly, h(R) decreases from h(Rm ) > D
to 0 for Rm < R < 1, so that there is a unique stationary equilibrium Rhigh ∈
[Rm , 1]. Since h(R) is negative otherwise, those are the only stationary equilibria.


b. If B(t) = B, the government budget constraint can be rewritten:

                      D + (R2 − 1)B = g(R)(1 − R) = h(R)
Deficit is augmented by constant interest payment on government debt. The
reasoning of part (a) applies with D being replaced by D + (R2 − 1)B. So there
are two stationary equilibria provided D + (R2 − 1)B < h(Rm ).
c. We know that there are two stationary equilibria, one associated with a l
except that now Rhigh belongs to the decreasing side of h(R). Take B 0 > B. We
have

               0
            h(Rhigh ) = D + (R2 − 1)B 0 > D + (R2 − 1)B > h(Rhigh )
            0
So that h(Rlow ) > h(Rlow ). But this time h is decreasing in the range we consider,
                      0
so this implies that Rhigh < Rhigh .
The unpleasant monetarist arithmetic is thus associated with the low interest
rate equilibrium.


   Exercise 8.12. Grandmont-Hall
152                   8. OVERLAPPING GENERATION MODELS

Consider a nonstochastic, one-good overlapping-generations model consisting of
two-period-lived young people born in each t ≥ 1 and an initial group of old
people at t = 1 who are endowed with H(0) > 0 units of unbacked currency
at the beginning of period 1. The one good in the model is not storable. Let
the aggregate first-period saving function of the young be time invariant and be
denoted f [1+r(t)] where [1+r(t)] is the gross rate of return on consumption loans
between t and (t + 1). The saving function is assumed to satisfy f (0) = −∞,
f 0 (1 + r) > 0, f (1) > 0.
Let the government pay interest on currency, starting in period 2 (to holders of
currency between periods 1 and 2). The government pays interest on currency
at a nominal rate of [1 + r(t)]p(t + 1)/p̄, where [1 + r(t)] is the real gross rate of
return on consumption loans, p(t) is the price level at t, and p̄ is a target price
level chosen to satisfy

(1)                               p̄ = H(0)/f (1).

The government finances its interest payments by printing new money, so that
the government’s budget constraint is:
                            ½                      ¾
                                       p(t + 1)
(2)       H(t + 1) − H(t) = [1 + r(t)]          − 1 H(t),    t ≥ 1,
                                           p̄

given H(1) = H(0) > 0. The gross rate of return on consumption loans in this
economy is 1 + r(t). In equilibrium, we have that [1 + r(t)] must be at least as
great as the real rate of return on currency

                                                    p(t + 1) p(t)
                   [1 + r(t)]p(t)/p̄ = [1 + r(t)]
                                                        p̄  p(t + 1)

w with equality if currency is valued,

(3)               1 + r(t) ≥ [1 + r(t)]p(t)/p̄,        0 < p(t) < ∞.

The loan market-clearing condition in this economy is

(4)                           f [1 + r(t)] = H(t)/p(t).


a. Define an equilibrium.

b. Prove that there exists a unique monetary equilibrium in this economy and
compute it.


      Solution
                       8. OVERLAPPING GENERATION MODELS                             153

a. We define an equilibrium as sequences {r(t)}, {p(t)}, and {H(t)} and an
allocation associated with the savings function f (·) such that
                       H(t + 1) = [1 + r(t)] p(t+1)
                                                  p̄
                                                       H(t), t ≥ 1, (1)
                          H(1) = H(0) > 0
                       f [1 + r(t)] = H(t)
                                      p(t)
                                                                    (2)
                                             p(t)
                       1 + r(t) ≥ [1 + r(t)] p̄                     (3)
                       n                             o
                                               p(t) H(t)
            and          1 + r(t) − [1 + r(t)] p̄ p(t) = 0.

b. We want to argue that the unique equilibrium is given by H(t) = H(0),
p(t) = p̄, and r(t) = 0, all t. That this is in fact an equilibrium can be verified
by checking conditions (1)–(3). Given 1 + r(t) = 1 and p(t) = p̄, (1) implies that
H(t) = H(1) = H(0), all t. Because f (1) > 0, we have f (1) = H(0)/p̄ > 0.
Finally condition (3) is satisfied with equality.
To prove that the equilibrium just discussed is unique within the class of valued-
currency equilibria, notice that, in any such equilibrium, (3) must be met with
equality. The implication is that p(t) = p̄, all t ≥ 1. At t = 1, we have from (2)
                                         H(1)   H(0)
                        f [1 + r(1)] =        =      = f (1)
                                          p̄     p̄
or
                                         r(1) = 0.
Hence
                          H(2) = [1 + r(1)]H(1) = H(0),
and consequently
                               r(2) = r(1) = 0.
Iterating upon this argument, it follows that r(t) = 0, all t, which establishes
uniqueness.

     Exercise 8.13. Bryant-Keynes-Wallace
Consider an economy consisting of overlapping generations of two-period-lived
agents. There is a constant population of N young agents born at each date
t ≥ 1. There is a single consumption good that is not storable. Each agent born
in t ≥ 1 is endowed with w1 units of the consumption good when young and with
w2 units when old, where 0 < w2 < w1 . Each agent born at t ≥ 1 has identical
preferences ln cht (t) + ln cht (t + 1), where cht (s) is time s consumption of agent h
born at time t. In addition, at time 1, there are alive N old people who are
endowed with H(0) units of unbacked paper currency and who want to maximize
their consumption of the time 1 good.
A government attempts to finance a constant level of government purchases
G(t) = G > 0 for t ≥ 1 by printing new base money. The government’s budget
constraint is
                                G = [H(t) − H(t − 1)]/p(t),
154                   8. OVERLAPPING GENERATION MODELS

where p(t) is the price level at t, and H(t) is the stock of currency carried over
from t to (t + 1) by agents born in t. Let g = G/N be government purchases per
young person. Assume that purchases G(t) yield no utility to private agents. a.
Define a stationary equilibrium with valued fiat currency.
b. Prove that, for g sufficiently small, there exists a stationary equilibrium with
valued fiat currency.
c. Prove that, in general, if there exists one stationary equilibrium with valued
fiat currency, with rate of return on currency 1 + r(t) = 1 + r1 , then there exists
at least one other stationary equilibrium with valued currency with 1 + r(t) =
1 + r2 6= 1 + r1 .
d. Tell whether the equilibria described in (b) and (c) are Pareto optimal, among
those allocations that allocate among private agents what is left after the gov-
ernment takes G(t) = G each period. (A proof is not required here: an informal
argument will suffice.)
Now let the government institute a forced saving program of the following form.
At time 1, the government redeems the outstanding stock of currency H(0),
exchanging it for government bonds. For t ≥ 1, the government offers each young
consumer the option of saving at least F worth of time t goods in the form
of bonds bearing a constant rate of return (1 + r2 ). A legal prohibition against
private intermediation is instituted that prevents two or more private agents from
sharing one of these bonds. The government’s budget constraint for t ≥ 2 is
                         G/N = B(t) − B(t − 1)(1 + r2 ),
where B(t) ≥ F . Here B(t) is the saving of a young agent at t. At time t = 1,
the government’s budget constraint is
                                               H(0)
                              G/N = B(1) −            ,
                                               N p(1)
where p(1) is the price level at which the initial currency stock is redeemed at
t = 1. The government sets F and r2 .
Consider stationary equilibria with B(t) = B for t ≥ 1 and r2 and F constant.
e. Prove that if g is small enough for an equilibrium of type (a) to exist, then a
stationary equilibrium with forced saving exists. (Either a graphic argument or
an algebraic argument is sufficient.)
f. Given g, find the values of F and r2 that maximize the utility of a representative
young agent for t ≥ 1.
g. Is the equilibrium allocation associated with the values of F and (1+r2 ) found
in (f) optimal among those allocations that give G(t) = G to the government for
all t ≥ 1? (Here an informal argument will suffice.)

      Solution
                         8. OVERLAPPING GENERATION MODELS                                 155

a. Consider the problem faced by agent h of generation t ≥ 1.
            maxcht (t),cht (t+1),sht (t) uh [cht (t), cht (t + 1)]
            subject to                   cht (t) + sht (t) ≤ wth (t),
                                         cht (t + 1) ≤ wth (t + 1) + [1 + r(t)]sht (t),
where sht (t) is interpreted as savings at time t, and 1 + r(t) is the rate of return
on savings. The solution to this maximization problem is a function sht (t) =
f h [1 + r(t)].
In this economy two assets can be used to transfer wealth between the first and
second period of life, namely privately issued bonds and currency. Because there
is no randomness, an arbitrage argument establishes that, if currency is held,
1 + r(t) = p(t)/p(t + 1).
We can now define equilibrium with valued fiat currency. It is a set of sequences
[{r(t)}, {p(t)}, {H(t)}] and an allocation {cht−1 (t)}, h = 1, . . . , N , and t ≥ 1, such
that
       (i) 1 + r(t) = p(t)/p(t + 1) all t. (Both assets are held.)
      (ii) G = [H(t) − H(t − 1)]/p(t). (The government budget constraint is
           satisfied.)
           P
     (iii) N         h
               h=1 f [1 + r(t)] ≡ N f [1 + r(t)] = H(t)/p(t), all t ≥ 1. (This condition
           incorporates utility maximization and imposes market clearing.)
     (iv) cht (t) = wth (t) − f h [1 + r(t)]
           cht (t + 1) = wth (t + 1) + [1 + r(t)]f h [1 + r(t)]
           for all h = 1, . . . , N and all t ≥ 1.
Consumption of the old at t = 1 is given by the value of the currency they hold,
H(0), plus whatever endowment they have.
We say that an equilibrium is stationary if cht (t) = ch1 and cht (t + 1) = ch2 , all
t ≥ 1. In this particular setup, in which there is no heterogeneity, consumption
will not be indexed by h. Moreover, given the logarithmic utility function, it is
easy to show that the individual and the average aggregate savings function take
the form                                         ·               ¸
                                 h             1          w2
                 f [1 + r(t)] = f [1 + r(t)] =     w1 −            .
                                               2        1 + r(t)
In our setup stationary equilibria are necessarily associated with constant interest
rates. This is the type of equilibrium we seek.
b. In any stationary equilibrium we have that
                                                    H(t)
                                     f (1 + r) =           .
                                                    N p(t)
Then H(t)/p(t) must be constant. The government budget constraint requires
that
                     eg = NH(t)
                             p(t)
                                  − p(t−1) H(t−1)
                                     p(t) N p(t−1)
                    or
                     g = f (1 + r) − (1 + r)f (1 + r).
156                     8. OVERLAPPING GENERATION MODELS

We want to claim that, if there exists a rate of return (1+r) such that f (1+r) > 0
and 1 + r < 1, then there exists a range of g values that can be financed. To see
this point, let (1 + r) satisfy the assumptions. Because (1 + r) < 1, we have
                              (1 + r)f (1 + r) < f (1 + r).
Define g = f (1 + r) − (1 + r)f (1 + r), and we have our result. For our particular
economy it is easy to see that for any w2 /w1 < 1 + r < 1, f (1 + r) > 0. Moreover,
any g given by
                                                      w2
            0 < g = f (1 + r) − (1 + r)f (1 + r),         <1+r <1
                                                      w1
can be financed.
To sum up, to describe the set of g that is feasible to finance we can follow these
steps: first pick any gross interest rate in the interval (w2 /w1 , 1). Then compute
f (1+r)−(1+r)f (1+r). By construction, this quantity is positive. Set g equal to
this value. Then the set of feasible g corresponds to the image of that expression
for values of (1 + r) in the interval (w2 /w1 , 1). The key step in demonstrating
existence is to establish that the interest rate at which aggregate savings equal
zero (in this case w2 /w1 ) is less than one.
c. This problem can be posed in the following alternative way: fix any g in the
feasible interval. Then, in general, there are at least two r’s, r1 and r2 , such that
        g = f (1 + r1 ) − (1 + r1 )f (1 + r1 ) = f (1 + r2 ) − (1 + r2 )f (1 + r2 ).
Let
                       h(1 + r) = f (1 + r) − (1 + r)f (1 + r).
We know h(w2 /w1 ) = h(1) = 0. If f (·) is continuous and differentiable, these
properties are inherited by h(·). Now if it can be established that h 0 (w2 /w1 ) > 0
and h0 (1) < 0, then it follows that any g = h(1 + r) can be financed with at least
two r’s except possibly for ḡ = maxr h(1 + r). Now
                h0 (1 + r) = f 0 (1 + r) − (1 + r)f 0 (1 + r) − f (1 + r).
It follows that f (1) > 0 implies that h0 (1) < 0. Also h0 (w2 /w1 ) = (1−w2 /w1 )f 0 (w2 /w1 )−
f (w2 /w1 ) = (1 − w2 /w1 )f 0 (w2 /w1 ), because f (w2 /w1 ) = 0. Thus, whenever
savings increase with the rate of interest – a condition satisfied for the savings
function derived from the logarithmic utility – we get the desired result.
d. We want to argue that the equilibrium is not Pareto optimal. To do so we
show that there exist feasible allocations that improve the welfare of at least one
individual, without reducing the utility level of the others. We first note that any
allocation consistent with the government purchasing G(t) = G > 0 each period
satisfies
                    XN           N
                                 X
                         h
                        ct (t) +    cht−1 (t) ≤ N w2 + N w1 − G.
                     h=1          h=1
                         8. OVERLAPPING GENERATION MODELS                                   157

Any feasible allocation that treats all agents symmetrically and is stationary – in
the sense of (b) – satisfies
                                  c1 + c2 ≤ w1 + w2 − g.
The allocation corresponding to a stationary equilibrium with valued currency
(ĉ1 , ĉ2 ) also satisfies that constraint. Let (c∗1 , c∗2 ) be the solution to
               max            u(c1 , c2 )
               subject to     c1 + c2 ≤ w1 + w2 − g,                  c1 ≥ 0, c2 ≥ 0.
Such an allocation is feasible. We want to claim that it is Pareto superior to
(ĉ1 , ĉ2 ). Suppose that c∗1 > 0 and c∗2 > 0. Then (c∗1 , c∗2 ) satisfy
                                        u1 (c∗1 , c∗2 )
                                                        = 1.
                                        u2 (c∗1 , c∗2 )
Denote
                                                    u1 (c1 , c2 )
                                   v(c1 , c2 ) ≡                  .
                                                    u2 (c1 , c2 )
We make the following assumptions about v(c1 , c2 ):
    (i) ∀ c2 > 0 lim v(c1 , c2 ) = ∞
                      c1 →0
      (ii) ∀ c1 > 0 lim v(c1 , c2 ) = 0
                      c2 →0
     (iii) v1 < 0, v2 > 0.
The assumptions are satisfied by the logarithmic utility function. Recall that in
a stationary equilibrium, utility maximization requires (for an interior solution)
that v(c1 , c2 ) = (1 + r). Because g > 0 implies that w2 /w1 < (1 + r) < 1, it
follows that
                              v(ĉ1 , ĉ2 ) < v(c∗1 , c∗2 ) = 1.
Given that the feasibility constraint is satisfied with equality for both allocations,
we can write
                            v(y − ĉ2 , ĉ2 ) < v(y − c∗2 , c∗2 ),
where
                                      y ≡ w1 + w2 − g.
Our assumptions on v(·) imply that the above inequality holds if and only if
ĉ2 < c∗2 . Then c∗1 < ĉ1 , and the old at t = 1 consume – on a per capita basis –
y−c∗1 > y−ĉ1 . Consequently the old are better off. We now have to argue that the
young born at t ≥ 1 are not worse off, but this follows by construction, because
(ĉ1 , ĉ2 ) satisfies the feasibility constraint and (c∗1 , c∗2 ) is chosen to maximize utility
subject to that constraint. Therefore
                                    u(c∗1 , c∗2 ) ≥ u(ĉ1 , ĉ2 ).
e. Consider the competitive problem faced by the young born at t ≥ 1. Notice
that the legal restriction permits no borrowing and lending among agents of the
158                    8. OVERLAPPING GENERATION MODELS

same generation. If that were not the case, a given agent would be able to share
a bond by issuing private IOUs. The choice problem can be formulated as
                 max          uh [cht (t), cht (t + 1)]
                 subject to   cht (t) + bht (t) ≤ wth (t),
                              cht (t + 1) ≤ wth (t + 1) + (1 + r2 )bht (t)
F ≤ bht (t) and bht (t) = 0 if bht (t) < F .
The optimal decision rule gives bht (t) as a function of (1 + r2 ) and F . Let
                                                   N
                                             1 X h
                              b(1 + r; F ) ≡      b (t)
                                             N h=1 t
be the aggregate demand for bonds.
We can define a stationary equilibrium as a sequence {B(t)}, an allocation
{cht−1 (t)}, and a vector of numbers [F, r2 , p(1)] such that
        G          H(0)                G
(1)       = B(1) −        ,              = B(t) − B(t − 1)(1 + r2 ),         t≥2
        N          N p(1)              N
where B(t) = b(1 + r2 , F )
                    cht (t)     = wth (t) − bht (t),   t ≥ 1, (2)
                    cht (t + 1) = wth (t + 1) + (1 + r2 )bht (t).
Notice that, because r2 and F are constant, B(t) = B, all t, and B = b(1 + r2 , F ).
Then to show existence we need to find numbers F, N2 , g such that, b(1 + r2 , F )
is given by
                b(1 + r2 , F ) ≡ argmax u(w1 − b, w2 + (1 + r2 )b)
                                        b
subject to b ≥ F and b = 0 if b < F ,
g satisfies the government budget constraint, that is,
              g = −r2 b(1 + r2 , F )        and finally     − 1 < r2 < 0.
Given such values, g = b − (1 + r2 )b > 0 and H(0)/N p(1) = (1 + r2 )b determines
p(1). The problem is to establish existence of the vector (r2 , F, g). This can be
done analytically, but the argument turns out to be complicated. Instead we give
a diagrammatic proof.
We fix g at the same level as in (a). [Clearly, we could pick F = f (1 + r1 ) and
1 + r2 = 1 + r1 and trivially we have existence.] In Figure 7.2, the (a) equilibrium
is shown. The budget constraint is represented by the line that passes through
the endowment point w. Tangency of that line [which has slope −(1 + r1 )−1 ]
and an indifference curve occurs at the point A. Notice that, for this to be an
equilibrium, the resulting allocation (ĉ1 , ĉ2 ) has to satisfy market clearing, that
is, ĉ1 + ĉ2 ≤ w1 + w2 − g; therefore, the tangency occurs on the feasibility locus
denoted by T T 0 .
Consider now point B on T T 0 , which also allows the government to consume g
per capita. That this point exists and lies southwest of A is a key element of the
argument. Notice that at A the indifference curve has slope −1/(1 + r1 ) < −1,
making it steeper than T T 0 . Moreover, as they have been drawn, the indifference
                      8. OVERLAPPING GENERATION MODELS                             159

curves are very flat near the axis. Therefore the same indifference curve û must
cross also the locus T T 0 at a point like that labeled A0 . Strict convexity implies
that the slope at A0 is, in absolute value, less than one. These two facts guarantee
the existence of an indifference curve that yields a level of utility u∗ > û, which
is tangent to T T 0 somewhere between A and A0 .
If we set F = w1 − c∗1 and choose r2 such that the slope of the line BD is
−(1 + r2 )−1 , the budget constraint faced by a representative agent is the shaded
area c∗1 BD and the endowment point. Utility maximization occurs at B.
Notice that we apparently have some freedom in choosing r2 in the sense that
many different values would have resulted in the same choice of the same utility-
maximizing bundle (c∗1 , c∗2 ). This freedom is illusory, because it must also be true
that g = −r2 F , that is, g = −r2 (w1 − c∗1 ), or
                                              g
                                      r2 = ∗        .
                                           c1 − w 1
This equality satisfies −1 < r2 < 0, because c∗1 − w1 < 0 and c∗1 + g < w1 as
c∗2 > w2 .
f. We now find F and r2 for our economy. First we want to determine (c∗1 , c∗2 ).
We have already argued in (d) what program this vector solves, namely,
                        maxc1 ,c2            ln c1 + ln c2
                        subject to           c1 + c2 ≤ w1 + w2 − g.
The solution is c∗1 = (w1 + w2 − g)/2, c∗2 = (w1 + w2 − g)/2. We choose
                                  w1 − w 2 + g              2g
            F ∗ = w1 − c∗1 =                      and r2∗ =    − w1 − g.
                                        2                   w2
Then we verify that (c∗1 , c∗2 ) is also the solution to
                               ½                               ¾
                    argmax max [ln c1 + ln c2 ], ln w1 + ln w2 ,
                                 [c1 ,c2 ]

where the maximization inside the braces is subject to
                c1 + b ≤ w 1 ,           c2 ≤ w2 + (1 + r2∗ )b,   b ≥ F ∗.
To verify this point, notice that c∗1 , c∗2 are the optimizing values, given the less
restrictive constraint for the previous programming problem. Then if they are
feasible, they must also be the solution to this problem. Feasibility is guaranteed
by construction. The last step is to make sure that the utility is higher than in
autarky, that is,
                    2 ln(w1 + w2 − g) − 2 ln 2 ≥ ln w1 + ln w2 .
This requirement is clearly met for small g.
g. We can show directly that the allocation (c∗1 , c∗2 ) would also be the equilibrium
allocation for another economy with endowment patterns w̃1 = (w1 + w2 − g)/2
and w̃2 = (w1 + w2 − g)/2, which when we use the Balasko-Shell criterion is
Pareto optimal (the gross interest rate is one). In terms of feasible allocations
(though not in terms of individual endowments), however, both economies are
160                   8. OVERLAPPING GENERATION MODELS

identical. Because optimality is defined only in terms of preferences and aggregate
endowments – or feasibility constraints – it must be the case that the allocation
for our original economy is also Pareto optimal.
     CHAPTER 9

Ricardian equivalence




         161
 CHAPTER 10

Asset pricing




     163
164                              10. ASSET PRICING

      Exercise 10.1. Hansen-Jagannathan bounds
Consider the following annual data for annual gross returns on U.S. stocks and
U.S. Treasury bills from 1890 to 1979.£ These are¤ the data used by Mehra and
                          ¸ are µ = 1.07 1.02 and the covariance matrix of
Prescott. ·The mean returns
             0274 .00104
returns is                 .
            .00104 .00308
a. For data on the excess return of stocks over bonds, compute Hansen and
Jagannathan’s bound on the stochastic discount factor y. Plot the bound for
E(y) on the interval [.9, 1.02].
b. Using data on both returns, compute and plot the bound for E(y) on the
interval [.9, 1.02]. Plot this bound on the same figure as you used in part a.
c. On the textbook’s web page
ftp://zia.stanford.edu/pub/sargent/webdocs/matlab, there is a Matlab file
epdata.m with Kydland and Prescott’s time series. The series epdata(:,4) is the
annual growth rate of aggregate consumption ct /ct−1 . Assume that β = .99 and
that mt = βu0 (ct )/u0 (ct−1 ), where u(·) is the CRRA utility function. For the three
values of γ = 0, 5, 10, compute the standard deviation and mean of mt and plot
them on the same figure as in part b. What do you infer from where the points
lie?

      Solution
The matlab program associated with this exercise is .

a. Denote the excess return by z. Following the text, the Hansen-Jagannathan
bound is given by
                                   µ      ¶
                                     E(z)
                            σ(y) ≥          E(y).
                                     σ(z)
From the data we compute E(z) = 1.07 − 1.02 = 0.05 and σ 2 (z) = 0.0274 +
0.00308 − 2 ∗ 0.00104. This gives a HJ bound of 0.297. Figure 10.1 plots the
bound on σ(y) for E(y) ∈ [0.9, 1.02]. the bound in the straight line.


b. For returns, we compute the bounds using
                          b = [cov(x, x)]−1 [1 − E(y)E(x)]
                              p
                       σ(y) ≥    b0 cov(x, x)b.
Here, x is the vector containing both returns on stocks and bonds. Figure 10.1
plots the bound on σ(y) for E(y) ∈ [0.9, 1.02]. The bound is the convex shaped
curve.
                                       10. ASSET PRICING                            165

c. From the annual consumption growth data we find that the mean and standard
deviation of the discount factor are given by
                                T    µ      ¶−γ
                             1X        ct+1
                  E(y) =           β
                            T t=0       ct
                                     T
                                        " µ       ¶−γ       #2
                               1 X           ct+1
                  σ(y) =                  β           − E(y) .
                            T 2 − 1 t=0       ct

We find for γ = 0, E(y) = 1, σ(y) = 0. for γ = 5, E(y) = 0.9307, σ(y) = 0.1739
and for for γ = 10, E(y) = 0.8961, σ(y) = 0.3635. These three points are plotted
into 10.
                   1.8


                   1.6


                   1.4


                   1.2


                       1
               σ(mt)




                   0.8


                   0.6


                   0.4


                   0.2


                       0
                       0.88   0.9   0.92    0.94           0.96   0.98   1   1.02
                                                   E(mt)




             Figure 1. Exercise 10.1 : Hansen-Jagannathan bounds


  Exercise 10.2. The term structure and regime switching, donated by Rodolfo
Manuelli
Consider a pure exchange economy where the stochastic process for consumption
is given by,
                        ct+1 = ct exp[α0 − α1 st + εt+1 ],
where

        (i) α0 > 0, α1 > 0, and α0 − α1 > 0.
     (ii) εt is a sequence of i.i.d. random variables distributed N (µ, τ 2 ). Note:
          Given this specification, it follows that E[eε ] = exp[µ + τ 2 /2].
166                                  10. ASSET PRICING

       (iii) st is a Markov process independent from εt that can take only two values,
             {0, 1}. The transition probability matrix is completely summarized by

                              Prob[st+1 = 1|st = 1] = π(1),
                              Prob[st+1 = 0|st = 0] = π(0).
       (iv) The information set at time t,Ωt , contains {ct−j , st−j , εt−j ; j ≥ 0}.
There is a large number of individuals with the following utility function
                                      X∞
                              U = E0      β t u(ct ),
                                             t=0
                  (1−σ)
where u(c) = c     /(1 − σ). Assume that σ > 0 and 0 < β < 1. As usual, σ = 1
corresponds to the log utility function.
a. Compute the “short-term” (one-period) interest rate.
b. Compute the “long-term” (two-period) interest rate measured in the same
time units as the rate you computed in a. (That is, take the appropriate square
root.)
c. Note that the log of the rate of growth of consumption is given by
                          log(ct+1 ) − log(ct ) = α0 − α1 st + εt+1 .
Thus, the conditional expectation of this growth rate is just α0 − α1 st + µ. Note
that when st = 0, growth is high and, when st = 1, growth is low. Thus, loosely
speaking, we can identify st = 0 with the peak of the cycle (or good times) and
st = 1 with the trough of the cycle (or bad times). Assume µ > 0. Go as far as
you can describing the implications of this model for the cyclical behavior of the
term structure of interest rates.
d. Are short term rates pro- or countercyclical?
e. Are long rates pro- or countercyclical? If you cannot give a definite answer to
this question, find conditions under which they are either pro- or countercyclical,
and interpret your conditions in terms of the “permanence” (you get to define
this) of the cycle.

      Solution
a. We use the formula derived in chapter 10. Specifically:
                                  Ã µ      ¶−σ !
                     1                ct+1
(92)                    = Et       β
                    R1t                ct
                     1
(93)                    = β exp(−σα0 + σα1 st )Et (exp(−σεt+1 ))
                    R1t
                     1
(94)                    = β exp(−σα0 + σα1 st − σµ + σ 2 τ 2 /2),
                    R1t
                                             10. ASSET PRICING                           167

where the last equality follows from the fact that −σεt+1 is normal with mean
−σµ and variance σ 2 τ 2 .

b. Using again the formula of chapter 10 we have :

                 Ã           µ               ¶−σ !
     1                   2       ct+2 ct+1
(95) 2 = Et          β
    R2t                          ct+1 ct
     1
(96) 2 = β 2 Et (exp(−σα0 + σα1 st+1 + σεt+2 )) exp(−σα0 + σα1 st + σεt+1 )
    R2t
     1            ¡                       ¢
(97) 2 = β 2 exp 2(−σα0 − σµ + σ 2 τ 2 /2) Et (exp(σα1 (st + st+1 ))) .
    R2t
Observe that either st+1 = st , or st+1 = 1 − st . Therefore, we can write:


  Et (exp(σα1 st+1 )) = exp(σα1 st ) × [π(st |st ) + π(1 − st |st ) exp(σα1 (1 − 2st ))] .
This yields to the following two expressions for the long rate :

            1     1
(98)           =     [π(st |st ) + π(1 − st |st ) exp(σα1 (1 − 2st ))]1/2
           R2t   R1t
            1
(99)           = β exp(−σα0 − σµ + σ 2 τ 2 /2)
           R2t
(100)                    × [π(st |st ) exp(2σα1 st ) + π(1 − st |st ) exp(σα1 )]1/2 .
c.,d. and e. Equation (98) implies that, at the peak st = 0, the long rate is
smaller than the sort rate : the term structure of interest rates is downwards
slopping. The intuition goes as follows. In two periods, there is a positive prob-
ability of low growth. Therefore, “long term consumption” is relatively scarcer
than “short term consumption”. Its price should be higher. In other words, the
long term interest rate is lower than the short term interest rate.
Conversely, at the trough st = 1, the long term interest rate is higher than the
short term interest rate : the term structure of interest rates is upwards slopping.

Short term interest rates are low when st = 1 (trough) and high when st = 0
(peak). Again, this is because when st = 1, the growth rate of consumption is
low. Tomorrow’s good is relatively scarcer than if st = 1. Therefore, tomorrow’s
good should have a higher price when st = 1 than when st = 0. In other words,
the short term interest rate is low at a trough and high at a peak. In this precise
sense, the short term interest rate is procyclical

Examination of equation (100) shows that long term interest rate is procycli-
cal. Also, procyclicality is stronger if π(st |st ) is closer to one, i.e. if shocks are
persistent.
168                                    10. ASSET PRICING

   Exercise 10.3. Growth slowdowns and stock market crashes, donated by
Rodolfo Manuelli

Consider a simple one-tree pure exchange economy. The only source of consump-
tion is the fruit that grows on the tree. This fruit is called dividends by the
tribe inhabiting this island. The stochastic process for dividend dt is described
as follows: If dt is not equal to dt−1 , then dt+1 = γdt with probability π, and
dt+1 = dt with probability (1 − π). If in any pair of periods j and j + 1, dj = dj+1 ,
then for all t > j, dt = dj . In words, the process – if not stopped – grows at a
rate γ in every period. However, once it stops growing for one period, it remains
constant forever on. Let d0 equal one. Preferences over stochastic processes for
consumption are given by
                                                   ∞
                                                   X
                                      U = E0             β t u(ct ),
                                                   t=0
                    (1−σ)
where u(c) = c              /(1 − σ). Assume that σ > 0, 0 < β < 1, γ > 1, and
βγ (1−σ) < 1.
a. Define a competitive equilibrium in which shares to this tree are traded.
b. Display the equilibrium process for the price of shares in this tree pt as a
function of the history of dividends. Is the price process a Markov process in the
sense that it depends just on the last period’s dividends?
c. Let T be the first time in which dT −1 = dT = γ (T −1) . Is pT −1 > pT ? Show
conditions under which this is true. What is the economic intuition for this result?
What does it say about stock market declines or crashes?
d. If this model is correct, what does it say about the behavior of the aggregate
value of the stock market in economies that switched from high to low growth
(e.g., Japan)?

      Solution
a. First define the household’s problem :
                                             XX              ¡        ¢
(101)                             max
                                    t
                                                        β t u ct (dt ) ,
                                 {ct (d )}
                                             t≥0   dt

subject to ct (dt ) + st (dt )pt (dt ) = st (dt )dt + st−1 (dt−1 )pt (dt ) and with s−1 = 1.
Observe that we assume that the tree price is “cum-dividend”.
   Definition 16. An equilibrium is an allocation {ct (dt ), st (dt )}t≥0 and a price
process {pt (dt )}t≥0 such that:
      (i) Optimality: given price, the allocation solves the household’s problem

        (ii) Feasibility: markets clear, i.e. ct (dt ) ≤ dt for all dt .
                                     10. ASSET PRICING                                       169

Let’s derive the first order conditions of the household problem. Attach multiplier
µt (dt ) to node dt budget constraint. The first order conditions are :

        ct (dt ) : β t π(dt )u0 (ct (dt )) = µt (dtP
                                                   )
             t           t       t
        st (d ) : µt (d )pt (d )           = dt + dt+1 µt+1 (dt , dt+1 )pt+1 (dt , dt+1 ).
Substituting the first equation into the second one gives the familiar Euler equa-
tion:
                                           µ 0            ¶
                                            u (ct+1 )
(102)                        pt = dt + βEt            pt+1 .
                                             u0 (ct )
Imposing market clearing ct = dt gives the pricing formula :
                                           µ 0            ¶
                                            u (dt+1 )
(103)                        pt = dt + βEt            pt+1 .
                                             u0 (dt )
b. We guess and verify that the price of the tree is of the form pi dt , where i = g
if the growth process is not stopped and i = s if the growth process is stopped.

If the growth process is stopped, then ct+k = dt for all k ≥ 0. Therefore
     0
β k uu(c0 (ct+k
             t)
                )                                                    dt
                  = β k and the (cum dividend) price of the tree is 1−β . Thus :

                                      ps = 1/(1 − β).
If the growth process is not stopped then two things can happen tomorrow. First,
with probability π the economy grows. In this event ct+1 /ct = γ and the dividend
of the tree is dt+1 = γdt . Second, with probability 1 − π the economy stops
growing. In this event ct+1 /ct = 1 and the dividend of the tree is dt+1 = dt .
Thus, the (cum dividend) price of the tree at time t is
                                 ¡                                 ¢
                   pg dt = dt + β πγ −σ pg γdt + (1 − π)dt /(1 − β) .
Solving for pg gives :
                                                   ·               ¸
                               ¡             ¢
                                          1−σ −1          β(1 − π)
(104)                    pg = 1 − βπγ                  1+            .
                                                           1−β
The price of the tree is Markov provided we expand the state to (dt , dt−1 ). Specif-
ically, if dt = dt−1 , then the price is ps dt . If dt 6= dt−1 , then dt = pg dt .

c. and d. In term of our notations, we need to find conditions under which
pg > ps . Using the above expressions shows that the inequality is equivalent to
γ > 1. The value of the aggregate stock market is the value of a claim to the
economy output. In the event of a growth slowdown, the economy is expected to
grow at a lower rate and, thus, the value of the stock market declines from pg dt
to ps dt . This can be interpreted as a stock market crash.
170                                   10. ASSET PRICING

  Exercise 10.4. The term structure and consumption, donated by Rodolfo
Manuelli

Consider an economy populated by a large number of identical households. The
(common) utility function is
                               X∞
                                   β t u(ct ),
                                            t=0
                                      1−θ
where 0 < β < 1, and u(x) = x /(1 − θ), for some θ > 0. (If θ = 1, the utility
is logarithmic.) Each household owns one tree. Thus, the number of households
and trees coincide. The amount of consumption that grows in a tree satisfies
                                        ct+1 = c∗ cϕt εt+1 ,
where 0 < ϕ < 1, and εt is a sequence of i.i.d. log normal random variables with
mean one, and variance σ 2 . Assume that, in addition to shares in trees, in this
economy bonds of all maturities are traded.
a. Define a competitive equilibrium.
b. Go as far as you can calculating the term structure of interest rates, R̃jt , for
j = 1, 2, . . ..
c. Economist A argues that economic theory predicts that the variance of the log
of short-term interest rates (say one-period) is always lower than the variance of
long-term interest rates, because short rates are “riskier.” Do you agree? Justify
your answer.
d. Economist B claims that short-term interest rates, i.e., j = 1, are “more
responsive” to the state of the economy, i.e., ct , than are long-term interest rates,
i.e., j large. Do you agree? Justify your answer.
e. Economist C claims that the Fed should lower interest rates because whenever
interest rates are low, consumption is high. Do you agree? Justify your answer.
f. Economist D claims that in economies in which output (consumption in our
case) is very persistent (ϕ ≈ 1), changes in output (consumption) do not af-
fect interest rates. Do you agree? Justify your answer and, if possible, provide
economic intuition for your argument.

      Solution
a. We first describe the household’s problem. To simplify it, we assume that
bonds of maturities k = j, . . . J are traded, for a fix J ≥ 1. In any period, the
agent chooses bond holding of various maturities Bjt . The price at time t of a zero
coupon bond maturing j periods from now is written qjt 1. The corresponding
gross interest rate is Rjt ≡ (1/qjt )1/j . The representative agent maximize:
      1This bond pays 1 for sure at time t + j.
                                          10. ASSET PRICING                                     171

                                               " +∞          #
                                                X
                                                       t
                                          E0          β u(ct ) ,
                                                t=0
subject to:
                          J
                          X                                             J−1
                                                                        X
          ct + p t st +         qjt Bjt = st dt + pt st−1 + B1t−1 +            qjt Bj+1,t−1 ,
                          j=1                                            j=1

and Bj,−1 = 0 for all j. We have dropped the dependence on εt to simplify
notations.
     Definition 17. An equilibrium is an allocation {ct , st , Bjt }+∞
                                                                    t=0 , a price process
           +∞
{pt , qjt }t=0 such that given prices, the allocation solves the household’s problem
and markets clear, i.e. ct ≤ dividend of the tree, st = 1 and Bjt = 0.
After imposing market clearing, the first order conditions with respect to B jt
become :
                                      µ     ¶
                                 u0 (ct+1 )
(105)               q1t    = Et β 0
                                  u (ct )
                               µ 0                   ¶
                                 u (ct+1 )
(106)               qjt    = Et β 0         qj−1,t+1               j = 2 . . . J.
                                  u (ct )
Iterating forward over the second equation and applying the law of iterated ex-
pectation gives the familiar :
                                              µ     0
                                                             ¶
                                                 j u (ct+j )
(107)                                 qjt = Et β               .
                                                    u0 (ct )
b. Before computing Rjt we note that the log of consumption is an AR(1) process.
Namely, we have :
                                      µ                    ¶
                          log(c∗ )                log(c∗ )
             log(ct+1 ) −          = φ log(ct ) −            + log(εt+1 ).
                           1−φ                     1−φ
Iterating on this equation, it is then easy to show that :

                                   µ                  ¶ Xj−1
                     log(c∗ )    j           log(c∗ )
        log(ct+j ) −          = φ log(ct ) −           +     φk log(εt+j−k ).
                      1−φ                     1−φ        k=0

Consumption growth between period t and t + j is :

                                                                j−1
                                               1 − φj           X
                                  j                        ∗
    log(ct+j ) − log(ct ) = (φ − 1) log(ct ) +        log(c ) +     φk log(εt+j−k ).
                                               1−φ              k=0

Now observe that :
172                                    10. ASSET PRICING


                                 "µ          ¶−θ #
                                      ct+j
(108)            qjt = β j Et
                                       ct
(109)            qjt = β j Et [exp (−θ(log(ct+j ) − log(ct ))]
                                µ                                        ¶
                         j             j                 1 − φj       ∗
(110)            qjt = β exp −θ(φ − 1) log(ct ) − θ              log(c )
                                                         1−φ
                             "     Ã j−1                    !#
                                     X
(111)                  ×Et exp           −θφk log(εt+j−k )     .
                                         k=0

Remember that log(εt ) is normal, with mean 1 and variance σ 2 . In particular
the −θφk log(εt+j−k¡) is normal, with
                                  ¢    mean −θφk and variance θ 2 φ2k σ 2 . The
expectation of exp (φ log(εt+j−k ) is thus −θφk + θ2 φ2k σ 2 /2. This gives :
                      k

                            ³                                      ´
                        j          j                     1−φj    ∗
              qjt = β exp −θ(φ − 1) log(ct ) + −θ 1−φ log(c )
                            ³       j
                                                     ´
                                             2 1−φ2j
                      × exp −θ 1−φ
                                 1−φ
                                      + 1/2θ    1−φ
                                                       .
Using the definition Rjt = (1/qjt )1/j , we obtain:

(112)                           log(Rjt ) = a(j) + b(j) log(ct ).
Where b(j) = −θ(1−φj )/j and the constant a(j) collects all the terms that do not
depend on ct . Importantly, b(j) is negative and |b(j)| decreases with maturity 2.
Equation (112) together with these two observations are the basis for answering
all the following questions.

c.,d.,e.,f. Since the magnitude of b(j) is decreasing with maturity, if follows that
the variance of the interest rates is decreasing with maturity. Similarly, long term
interest rates are less responsive than short term interest rates.
Economist C could not make his claim from studying our model. It is true
that interest rates are countercyclical because b(j) is negative. However, in our
model, causation runs from consumption towards interest rates, not the converse.
Specifically, properties of the exogenous consumption process pin down properties
of the interest rates.
Lastly, if consumption is very persistent, it is easy to show that the term structure
is flat and b(j) = 0. An intuition for this result is as follows : the interest rate
reflects information about the growth rate of future consumption log(c t+j ) −
log(ct ). When |φ| < 1, the log-consumption process is reverting to its long run
value log(c∗ )/(1 − φ). The current consumption level has thus some predictive
content about consumption growth rate over subsequent periods: you know it
is likely to revert to its mean. When φ = 1 then the log-consumption process
is a random walk (with drift). Therefore, the current consumption level has no
      2to show this fact, study the function 1/x(1 − φx ).
                              10. ASSET PRICING                           173

predictive content about future consumption growth rate. Interest rate should
not depend on the current consumption level.
  CHAPTER 11

Economic growth




      175
176                                11. ECONOMIC GROWTH

      Exercise 11.1.

      Solution
a. The interior solution to the planning problem obeys the first order necessary
conditions:

(113)                 u0 (ct ) = βu0 (ct+1 ) [fk (kt+1 , gt+1 ) + 1 − δ] ,
(114)             fg (kt , gt ) = 1,
the resource constraint:
                        ct + kt+1 + gt = f (kt , gt ) + (1 − δ)kt ,
the restriction (ct , kt , gt ) > (0, 0, 0) and an appropriate transversality condition:
                                   lim β T uc (cT )kT +1 = 0
                                   T →∞

Together with the transversality condition, the first order conditions guarantee
optimality.
b. The steady state is characterized by constant levels of consumption, capi-
tal stock and government spending. Then, the intertemporal marginal rate of
substitution is 1 and equation (113) becomes
(115)                          fk (k ∗ , g ∗ ) = β −1 − 1 + δ,
and equation 114 becomes
(116)                                  fg (k ∗ , g ∗ ) = 1.
These are two equations in the two unknowns (k ∗ , g ∗ ). The functions fk and
fg are monotone, strictly decreasing (by virtue of the strict concavity of f) and
converge to zero as k resp. g converge to ∞. Let h(y) = f (y, y). Equations 115
and 116 have a unique solution (g ∗ , k ∗ ) under the assumptions:
                                                 lim h0 (y) = 0,
                                                y→∞

                        h0 (y) > β −1 + δ, y small enough,
                                     f (0, g) = f (k, 0) = 0.
Proof: Consider the optimization problem
(117)                      max f (k, g) − (β −1 − 1 + δ)k − g.
                         (k,g)≥0

The objective is strictly concave, implying that (117) has a unique solution. If
k = 0 or g = 0, the objective is zero. If k = g = y, the objective is
                    h(y) − (β −1 + δ)y ≥ [h0 (y) − β −1 − δ]y > 0
for y small enough. Therefore, equation (117) has an interior solution that satisfies
equations (115) and (116).
                                  11. ECONOMIC GROWTH                                177

c. We use characterization (117) and monotone comparative statics analysis. Let
θ = (β −1 − 1 + δ), then we define f˜ and F :
                                              ½                   ¾
           max [f (k, g) − θk − g] = max max [f (k, g) − g] − θk
            (k,g)≥0                           (k)≥0   g≥0

                                          = max {F (k, θ)} .
                                               k≥0

F (k, θ) has increasing differences in (k, −θ) because
                   F (k 0 , θ) − F (k, θ) = f˜(k 0 ) − f˜(k) − (k 0 − k)θ.
If F has increasing differences in (k, −θ), then k ∗ (−θ) is non-decreasing. There-
fore, k ∗ (θ) is non-increasing and k ∗ (β) is non-decreasing. From fg (k, g) = 1 and
       ∂2f           2
from ∂k∂g     > 0, ∂∂gf2 < 0, we find that g ∗ (k ∗ ) is increasing. Therefore g ∗ (β) is
non-decreasing.
d. The optimality conditions at the steady state become:
(118)                          zαk α−1 g η = β −1 − 1 + δ
(119)                          zηk α g η−1 = 1.
and upon substitution of equation (119) in equation (118), we obtain an expres-
sion for the steady state government spending to capital ratio:
                               g ∗ ¡ −1           ¢η
                                 ∗
                                   = β −1+δ
                               k                   α
From equation 119 and the steady state ratio, we get the expression for the steady
state capital stock as a function of parameters:
                           −1  ¡            ¢ 1−η     η−1     −η
                  k ∗ = z α+η−1 β −1 − 1 + δ α+η−1 α α+η−1 η α+η−1 .
The steady state value of government spending is obtained from the steady state
capital stock and the steady state government spending to capital ratio:
                           −1  ¡            ¢ α       −α      α−1
                  g ∗ = z α+η−1 β −1 − 1 + δ α+η−1 α α+η−1 η α+η−1 .
As long as there are decreasing returns to scale (α + η < 1), it is easy to show
that the partial derivatives of k ∗ (β) and g ∗ (β) are positive. This confirms our
findings in part c.
    Now we assume decreasing returns to scale. The investment in steady state
is x∗ = δk ∗ , whereas GDP is zk α g η . The investment to GDP ratio in the steady
state simplifies to:                     µ              ¶
                              δk                δηα
                                     =                    z
                            zk α g η       β −1 − 1 + δ
and the government spending to GDP ratio
                            g        ¡                    ¢
                            α  η
                                   = δηα(β −1 − 1 + δ) z
                          zk g
           −1
Because β − 1 + δ > 0, the partial derivatives w.r.t. z are strictly positive.

    Exercise 11.2.
178                              11. ECONOMIC GROWTH

      Solution
a. Let: h(x) = f (x, 1) and g(n) = uunc (an−b,1−n)
                                        (an−b,1−n)
                                                   with a > 0 and b < a. We make
the following assumptions:
                                f (λk, λn) = λf (k, n)
                                        lim hx (x) = 0
                                       x→∞
                                       lim hx (x) = ∞
                                       x→0
                                                ∂2u
                                                     >0
                                               ∂c∂n
                                           lim g(n) = ∞
                                           n→1
                                           lim g(n) = 0.
                                           n→ ab

    The first equation says that the production function has constant returns
to scale. The second and the fourth assumption are Inada conditions. The
dynamics of this economy are characterized by the first order necessary conditions
for optimality:
(120)     uc (ct , 1 − nt ) = βuc (ct+1 , 1 − nt+1 ) [zfk (kt+1 , nt+1 ) + 1 − δ] ,
          un (ct , 1 − nt )
(121)                       = zfn (kt , nt ),
          uc (ct , 1 − nt )
the resource constraint
                        ct + kt+1 + gt = zf (kt , nt ) + (1 − δ)kt ,
and the restriction (ct , kt , nt ) > (0, 0, 0).
The steady state (k, n, c) is then implicitly defined by
                                   1 = β [zfk (k, n) + 1 − δ]
                                         ·     µ ¶            ¸
                                                  k
                                     = β zhx          +1−δ ,
                                                  n
                      un (c, 1 − n)
                                     = zfn (k, n)
                      uc (c, 1 − n)
                                          µ ¶             µ ¶
                                            k       k       k
                                     = zh        − zhx          ,
                                            n       n       n
                               c + g = zf (k, n) − δk
                                         · µ ¶            ¸
                                                k       k
                                     = n zh          −δ     .
                                                n       n
                                       ∗
First, there exists a unique x∗ = nk ∗ that solves the first equation. Second substi-
tute the third into the second equation to get:
              un (n(zh(x∗ ) − δx∗ ) − g, 1 − n)
(122)                   ∗       ∗
                                                = zh (x∗ ) − zx∗ hx (x∗ ) .
              uc (n(zh(x ) − δx ) − g, 1 − n)
                              11. ECONOMIC GROWTH                                 179

This is one equation in one unknown n. By concavity of h:
               zh(x∗ ) − δx∗ ≥ x∗ (zhx (x∗ ) − δ) = x∗ (β −1 − 1) > 0.
We then use the last assumption with a = zh(x∗ ) − δx∗ , which is positive by the
previous argument, and b = g. The right-hand side of equation (122) is constant.
The left-hand side is increasing, goes to zero when n goes to b/a, and goes to
infinity when n goes to 1. This establishes existence and uniqueness.
b. The steady state conditions become
                                      £                  ¤
(123)                            1 = β zαk α−1 nη + 1 − δ ,
                    1−µ    c
(124)                           = zηk α nη−1 ,
                     µ (1 − n)
(125)                     c + g = zk α nη − δk.
After going through the steps described in part a, we obtain an equation with n
as its only argument:
                                    1      α ¡             ¢ −α          α+η−1
                                ηz 1−α α 1−α β −1 − 1 + δ 1−α (1 − n)n 1−α =
1−µh            1
                   n α ¡
                             −1
                                       ¢ 1−α
                                          −α       1 ¡
                                                         −1
                                                                      −1 o
                                                                   ¢ 1−α      η
                                                                                 i
        −g + z 1−α   α 1−α β −1+δ            − δα 1−α   β −1+δ             n 1−α   ,
  µ
For the CD technology of part b, η = 1 − α and the above expression simplifies
to a linear expression in n:
                      1             1−µh              1
                                                         n       1
                                                                   o i
            (1 − α)z A(1 − n) =
                     1−α                     −g + z 1−α    A − δA n ,
                                                                 α
                                       µ
where A(β, α, δ) is given by
                                  α ¡              ¢ −α
                           A = α 1−α β −1 − 1 + δ 1−α .
Solving for the steady state labor level n, we get
                                                     −1
                               (1 − α)A + 1−µ gz 1−α
                         n=                ³µ        1
                                                       ´
                                       1−µ
                            (1 − α)A + µ A − δA      α


For any given, strictly positive level of government spending, the partial derivative
of of employment w.r.t. the productivity level is strictly negative. Its magnitude
depends on the level of government spending. Without government spending, the
SS level of employment is independent of the technology level.
From equation (123) we solve for the capital labor ratio in steady state. The
expression for output per capita is
                                     µ ¶α
                                       k             1
                               y=z            n = z 1−α An
                                       n
The partial derivative of output per capita w.r.t. the technology level is
                           ∂y               α           1  ∂n
                              = (1 − α)z 1−α An + z 1−α A
                           ∂z                              ∂z
It is strictly positive, even when g = 0.
180                           11. ECONOMIC GROWTH

c. For the Cobb-Douglas specification, the capital to labor ratio is a function of
the parameters (β, δ, α) and the technology level z. It is independent of govern-
ment spending. The partial derivative of output per capita w.r.t. the government
spending is strictly positive:
                                         1−µ
                 ∂y    1  ∂n               µ
                                             A
                    =z A
                      1−α    =                n        o
                 ∂g       ∂g                         1
                               (1 − α)A + 1−µ A − δA α
                                                   µ

We also investigate these partial derivatives for a general production function
zk α nη ; 0 < α < 1, 0 < η < 1, which allows for decreasing (α + η < 1) and
increasing returns to scale (α + η > 1). The capital to labor ratio in the steady
state is
                                 k     1   1  α+η−1
                                   = A α z α n 1−α
                                 n
The partial derivative w.r.t. government spending is:
                      ¡ ¢ µ               ¶
                    ∂ nk       α+η−1           1    1   2α+η−2 ∂n
                           =                 A α z 1−α n 1−α
                      ∂g          1−α                          ∂g
Using the implicit function theorem, the partial derivative of n w.r.t. g can be
shown to be
                                                1−α−η
           ∂n   1 − µ 1−α
                       −1                    n 1−α
              =      z                n          o      ¡ 1−α−η ¢ ¡ 1−n ¢ .
           ∂g     µ       ηA +     η
                                        A − δA
                                               1
                                               α   + ηA
                                  1−α                      1−α       n

Substituting this expression into the previous, we get
     ¡ ¢
   ∂ nk     1−µ 1                            α+η−1
          =       Aα                  n           o                     .
    ∂g        µ                                 1
                     (1 − α)ηAn + η A − δA α n + ηA (1 − α − η) (1 − n)
When the production function displays IRS, the steady state capital to labor ratio
increases with government spending if and only if the steady state employment
level exceeds a threshold level C, where
                                    ηA(α + η − 1)
                            C=          n         1
                                                    o.
                                  2
                                 η A + η A − δA   α



When the production function displays decreasing returns to scale, the steady
state capital to labor ratio increases with government spending if and only if the
steady state employment level is below C.
For output per capita we know that
                         µ ¶α−1          ¡k¢     µ ¶α
               ∂y          k        η−α ∂ n       k             ∂n
                   = αz           n          +z        (η − α)A
               ∂g          n             ∂g       n             ∂g
The above analysis for the partial derivatives of the capital to labor ratio and the
employment w.r.t. government spending can be used to sign the derivative. The
new element is the sign of η − α.
                                   11. ECONOMIC GROWTH                                        181

     Exercise 11.3.

     Solution
a. The first order necessary conditions for optimality of the planner problem are
described by a second order difference equation in (c, k):

 uc (ct ) = β [uc (ct+1 )zf 0 (kt+1 + kt ) + 1] + β 2 uc (ct+2 )zf 0 (kt+2 + kt+1 ), ∀t k0 given
For sufficiency we impose some appropriate transversality conditions:
                                           lim β T uc (c∗T )kT∗ +1 = 0,
                                          T →∞

                       lim β T +1 uc (c∗T +1 )kT∗ fk (kT∗ + kT∗ −1 ) = 0.
                      T →∞
b. In steady state, the marginal utility of consumption and the capital stock are
constant. The standard growth model has constant returns to scale technology,
so that the production function is homogenous of degree 1. The steady state
capital stock is uniquely determined by

                                 1 = 2βzf 0 (k) + 2β 2 zf 0 (k),
or
                                         1   1
                                     f 0 (k) =     .
                                        2z β + β 2
Existence and uniqueness follow from the monotonicity of f 0 , the Inada condition
                                                                    1  1
limk→∞ f 0 (k) = 0, and the additional assumption limk→0 f 0 (k) > 2z β+β 2
                                                                            .

c. We will show that a cyclical steady state cannot exist be assuming it does
and deriving a contradiction. In odd and even periods resp. The SS equations
become:
                             ·             ¸
                               uc (ce )
                      1 =               + β βzf 0 (k 0 + k e ),
                               uc (co )
                             ·             ¸
                               uc (co )
                      1 =               + β βzf 0 (k 0 + k e ).
                               uc (ce )
Both equations can only hold simultaneously if and only if uc (ce ) = uc (co ) or
ce = co . This is a contradiction to the cyclical steady state.

     Exercise 11.4.

     Solution
a. The three constraints are:
                            ct + kt+1 ≤ zf (κt ) − δκt + kt ,
                                                    κt ≤ k t ,
                                                ct ≤ zf (κt ).
182                            11. ECONOMIC GROWTH

Let λt , ηt and νt be the Lagrange multipliers on the time t resource constraint,
capacity constraint non-negativity constraint on investment respectively.
   The first order necessary conditions for optimality of the planner problem are
described by:
(126)                                   uc (ct ) = λt + νt ,
(127)                               λt = β(λt+1 + ηt+1 ),
(128)                   λt (zf (κt − δ) + νt zf 0 (κt ) = ηt ,
                              0


plus the complementary slackness conditions. For sufficiency, we impose the
transversality condition:
                            lim β T λT kT +1 = 0.
                                 T →∞
When the capacity constraint binds, the economy operates at full capacity, ηt > 0,
and kt = κt . The budget constraint and capacity utilization equations reduce to
the standard ones. The intertemporal marginal rate of substitution is smaller
than 1. For log utility, consumption at time t is higher than consumption at time
t − 1 multiplied by the discount factor.
     When the capacity constraint does not bind, ηt = 0 kt > κt . The intertempo-
ral marginal rate of substitution equals 1. If investment is positive, ν t = 0 and
zf 0 (κt ) = δ. The last equality says that the economy utilizes machinery up to the
point where the marginal productivity equals the depreciation rate. If investment
is zero, νt > 0, and the marginal product of of utilized capital is lower than the
depreciation rate.
b. and c. In steady state, the first order conditions become
                                     uc (c∗ ) = λ + ν,
                                      λ = β(λ + η),
                        λ(zf (κ − δ) + νzf 0 (κ∗ ) = η.
                            0 ∗


We show that in steady state the economy operates at full capacity: k ∗ = κ∗ .
    Proof: Because of the Inada conditions on uc , the steady state consumption
level is strictly positive. From the budget constraint c∗ ≤ zf (κ∗ ) − δκ∗ . Because
c∗ > 0, κ∗ > 0 and hence c∗ ≤ zf (κ∗ ). Therefore ν = 0. Second, η > 0. If η were
zero, then λ = β(λ + η) only holds for λ = 0. But that implies that uc (c) = 0
which contradicts a finite consumption level. Therefore k ∗ = κ∗ .
Combining the first order conditions, we then get β(1 − δ + zf 0 (k ∗ )) = 1 and c∗ =
zf (k ∗ ) − δk ∗ . The equations pins down a unique steady state capital stock and
consumption level. This follows from the monotonicity of f’, the Inada condition
limk→∞ f 0 (k) = 0 and the additional assumption limk→0 f 0 (k) > 1−β+δ z
                                                                           .
d. In the steady state all countries are operating at full capacity. Hence, in
steady state, differences in output per capita are eliminated. In the long-run, the
model is inconsistent with the statement. The reason is that there is a unique
level of used machines κ∗ that satisfies f 0 (κ∗ ) = 1−β+δ
                                                       z
                                                           .
    Along the path to the steady state, differences in output per capita can arise,
and stem from differences in capacity utilization. There is a (weakly) negative
                                 11. ECONOMIC GROWTH                                    183

relationship between capacity utilization and output per capita. Countries with
low capacity utilization have high output per capita and vice versa.
     Absent fluctuations in z, countries with a high initial capital stock (k 0 > κ̂)
will not use their capital stock fully, but choose a constant level of machines κ̂
such that f 0 (κ̂) = zδ . They use capital up to the point where its marginal product
equals the depreciation. They do not invest. Note that κ̂ > κ∗ > k0 . Because
utilized capital depreciates, capacity utilization rises over time. Output per capita
is constant and at a level zf (κ̂). At some point τ , full capacity utilization is
reached kτ = κτ = κ̂. From that point onwards, the capacity constraint starts
to bind (ητ > 0), full capacity utilization is maintained (kt = κt , t > τ ) and the
number of machines employed, κt , gradually decreases to the steady state level
κ∗ .
     Countries with a low initial capital stock (k0 < κ∗ ) operate at full capacity
along the transition path kt = κt . They accumulate capital until kt = κ∗ .


    Exercise 11.5.


    Solution
                                                              1
a. Given a uniform initial wealth distribution {k0i }i=0 , a competitive equilibrium
is a feasible allocation {ci , k i , ni } for each agent i and a price vector {w, r} such
that
        • Given prices, households maximize the present discounted value of util-
           ity streams subject to their budget constraint cit + kt+1 i
                                                                        ≤ (1 − δ + rt )kti +
           wt nt , given k0i .
        • Firms maximize profits
        • The labor market and goods market clear.

b. i. The first order necessary conditions for the household problem and firm
problem imply:
                     uic (cit ) = βuic (cit+1 )(zfk (kt+1 , nt+1 ) + 1 − δ).
Households supply their unit of labor inelastically. Capital and labor are paid
their marginal products.
In steady state, consumption is constant for every agent, and so is marginal
utility. Therefore, there is a unique steady state capital stock, determined by
zfk (k, 1) = β −1 − 1 + δ. The existence and uniqueness follow from the mono-
tonicity of fk (·, 1), the Inada condition on fk and the additional assumption
limk→0 f 0 (k) > β −1 − 1 + δ. The steady state interest rate r(k ∗ ) can be calculated
without info on ui . Optimal steady state consumption is: c∗ = f (k ∗ , 1) − δk ∗ .
Economist A is correct.

ii. Economist A is correct again. At any period t, optimality requires equalization
of the IMRS of any pair of agents (i, j). Rewriting this equality, we get:
184                           11. ECONOMIC GROWTH


                              ¡ ¡ ¢¢            ¡     ¡ j ¢¢
                           ujc cjt ktj       ujc cjt+1 kt+1
                                            = i ¡ i ¡ i ¢¢
                           uic (cit (kti ))  uc ct+1 kt+1
This condition implies that the marginal rate of substitution between consumers
(i, j) is constant through time. The initial distribution of capital determines the
initial marginal rate of substitution between consumers (i, j). By the equation
above, the initial capital stock determines the consumption inequality and the
latter stays constant over time.
c. In steady state, the capital stock is constant at k ∗ . The wage and rental price
are w = FN (k ∗ , 1) and r ∗ = FK (k ∗ , 1) = β −1 − 1 + δ. The steady state consump-
tion level in an economy without taxes is ci = w + (1 − β)k i . In an economy with
a tax z i on individual i, we find ci = w + (β −1 − 1)k i + (1 − β)z i .

i. Since this is merely a redistribution of capital, the aggregate capital stock stays
constant and the economy remains in the steady state. All aggregate variables are
unchanged. Obviously, those taxed choose a lower level of consumption relative
to those who receive the transfer. There may exist a tax and transfer scheme
that generates ci = cj , ∀ (i, j). These allocations cannot be Pareto ranked with
the original one.
More formally, we check that markets clear.
              Z 1                            Z 1                    Z 1
                   i                 −1           i
                  c di = wN + (β − 1)            k di + (1 − β)            z i di,
                0                             0                        0
                                                            Z 1
                     C = FN N + FK K − δK + (1 − β)                z i di,
                                                               0
                                                       Z 1
                     C = F (K, N ) − δK + (1 − β)          z i di.
                                                          0
                                                     R1
In this question there is market clearing because     0
                                                          z i di = 0.

ii. Same answer as in part i. because aggregate consumption does not change and
neither
R 1 i does the aggregate capital stock. Again there is market clearing because
  0
    z di = 0.
                                                         R1
iii. We consider two scenarios. In the first one Gt = g = 0 z i di ∀t. The economy
stays in the steady state. The steady state level of capital is unchanged (and
likewise for the interest rate and the wage). The aggregate level of consumption
is lower by the amount of government spending. The tax reduces the consumption
of those taxed.                  R1
     In a second scenario G0 = 0 z i di > 0, Gt = 0 ∀t ≥ 1. Then at t = 1, the
market does not clear at the steady state capital level - consumption pair. The
tax acts as an aggregate shock to the economy. The economy slowly returns to
the consumption capital level steady state.
                              11. ECONOMIC GROWTH                                185

   Exercise 11.6.

   Solution
a. The first order necessary condition for an optimum of the second planner’s
problem is
                    uic (cit ) = βuic (cit+1 )((1 − τ )fk (kt+1 ) + 1 − δ).
The steady state capital stock is the solution to
                                                β −1 − 1 + δ
                                   fk (k) =                   .
                                                   (1 − τ )
The existence and uniqueness of the solution follow from the monotonicity of
fk (·), the Inada condition on fk and the additional assumption limk→0 f 0 (k) >
β −1 − 1 + δ. Steady state consumption is c = f (k) − δk − g.
b. The new steady state is characterized by a lower tax rate and hence a higher
steady state capital level. The transition dynamics are as follows. Upon impact
investment jumps up and consumption jumps down. That follows from the fact
that the marginal product of capital increased and from the resource constraint
respectively. Because of the higher level of investment, the capital stock increases
(but does not jump). Because of the higher marginal product of capital, it is more
valuable to postpone consumption. That is, consumption grows after impact. It
does so until it reaches its new steady state level c∗∗ > c∗ . Investment decreases
gradually after its initial jump to its new steady state x∗∗ > x∗ . The investment
level in the new steady state is higher because the capital stock is higher and so
is the capital stock that depreciates each period. Capital monotonically increases
to its new steady state level.
c. This economy decentralizes the planner problem in parts a and b. Labor is
supplied inelastically: n = 1. The equilibrium interest rate equals the after-tax
marginal product of capital. The new steady state interest rate is lower under the
new, low tax regime. In the transition to the new steady state the interest rate
decreases so as to make an increasing consumption profile optimal. Upon impact
the interest rate jumps up so that consumers are induced to save and invest.
           CHAPTER 12

Optimal taxation with commitment




               187
188                  12. OPTIMAL TAXATION WITH COMMITMENT

      Exercise 12.1. A small open economy (Razin and Sadka, 1995)
Consider the non stochastic model with capital and labor in this chapter, but
assume that the economy is a small open economy that cannot affect the interna-
tional rental rate on capital, rt∗ . Domestic firms can rent any amount of capital at
this price, and the households and the government can choose to go short or long
in the international capital market at this rental price. There is no labor mobility
across countries. We retain the assumption that the government levies a tax τtn
on households’ labor income but households no longer have to pay taxes on their
capital income. Instead, the government levies a tax τ̂tk on domestic firms rental
payments to capital regardless of the capital origin (domestic or foreign). Thus, a
domestic firm faces a total cost of (1+ τ̂tk )rt∗ on a unit of capital rented in period t.


a. Solve for the optimal capital tax τ̂tk .
b. Compare the optimal tax policy of this small open economy to that of the
closed economy of this chapter.

      Solution
a. and b. The household problem is to choose consumption, labor, capital and
                          H           +∞
bonds holding {ct , nt , kt+1 , bH
                                 t+1 }t=0 , so as to maximize


                                    +∞
                                    X
(129)                                     β t u(ct , 1 − nt ),
                                    t=0

subject to


                   H       bH
                            t+1
(130)        ct + kt+1 +        = (1 − τtn )wt nt + rt∗ ktH + (1 − δ)ktH + bH
                                                                            t ,
                            Rt∗
and a transversality condition. No arbitrage imposes that Rt∗ = rt+1
                                                                 ∗
                                                                     + (1 − δ).
The government has the budget constraint

                                                                 bG
                                                                  t+1
(131)                      g t + bG     k ∗        n
                                  t = τ̂t rt kt + τt wt nt +          ,
                                                                  Rt∗
where bGt denotes government debt and kt is the total capital stock of the econ-
omy, that may not be entirely owned by domestic household. A transversality
condition needs also to be added to the government budget constraint. Firm’s
profit maximization implies :


(132)                           Fk (kt , nt ) = (1 + τ̂tk )rt∗
(133)                           Fn (kt , nt ) = wt .
                     12. OPTIMAL TAXATION WITH COMMITMENT                                         189

Add (130) and (131), and use the homogeneity of degree one of the production
function to obtain

(134)
                   H                                                     bG      H
                                                                          t+1 − bt+1
ct + kt+1 + gt + (kt+1 − kt+1 ) + (bG    H
                                    t − bt ) = F (kt , nt ) +                        + (1 − δ + rt∗ )(ktH − kt ).
                                                                             Rt∗
Observe that, since both the government and the households can borrow and save
in the international capital market, the resource constraint of the close economy
does not necessarily hold. First, bG                         H
                                   t may be different from bt which means that
all government bonds are not necessarily owned by domestic households. bG        H
                                                                            t − bt
may be interpreted as the country deficit. Similarly kt may be different from ktH .
If kt > ktH then some domestic capital is owned by foreign investors. If on the
other hand kt < ktH , then domestic investors own foreign capital.

The primal approach to the Ramsey problem in this small economy context is
to maximize the representative agent utility subject to the intertemporal budget
constraint of the household and the intertemporal budget constraint of the gov-
ernment. Observe that those two intertemporal budget constraints do not imply
the resource constraint of the closed economy. To write these constraints, we note
that the first order conditions of the household’s problem give


(135)                           β t uc (t) = λ0 qt∗
(136)                           β t ul (t) = λ0 qt∗ (1 − τtn )wt ,
where λ0 is the multiplier on the time zero budget constraint and 1/qt∗ = Rt−1
                                                                           ∗    ∗
                                                                               Rt−2 . . . R0∗ .
The intertemporal budget constraint of the household becomes

             +∞ µ
             X                         ¶
                  ∗         t ul (t)
                                         ¡                       ¢
(137)            qt c t − β          nt = (1 − δ) + r0 (1 − τ0k ) k0 + b0 .
             t=0
                              uc (0)

To write the government intertemporal budget constraint, we note that


         τ̂tk rt∗ kt + τtn wt nt = (1 + τ̂tk )rt∗ kt + wt nt − rt∗ kt − (1 − τtn )wt nt
                                 = F (kt , nt ) − rt∗ kt − (1 − τtn )wt nt .
So that the intertemporal budget constraint of the government is

                                          +∞
                                          X        ¡                            ¢
(138)                             bG
                                   0 +          qt∗ gt − τ̂tk rt∗ kt + τtn wt nt =
                                          t=0
                   +∞ µ
                   X                                                               ¶
                                       ul (t)
(139)       bG
             0 +          qt∗ gt − β t        nt + qt∗ F (kt , nt ) − qt∗ rt∗ kt       = 0.
                   t=0
                                       uc (0)
190                  12. OPTIMAL TAXATION WITH COMMITMENT

The Ramsey problem is to choose {ct , nt , kt+1 } to maximize (129) subject to
(137) and (139). Observe that the capital stock appears only in the government’s
budget constraint. Taking derivative in the Lagrangian with respect to k t yields

(140)                                      Fk (t) = rt∗ .
which, together with (132) implies that τ̂tk = 0 for all t ≥ 1.

      Exercise 12.2. Exercise 12.2 Consumption Taxes
Consider the non stochastic model with capital and labor in this chapter, but
instead of labor and capital taxation assume that the government sets labor
and consumption taxes, {τtn , τtc }. Thus, the household’s present-value budget
constraint is now given by
           X∞                     ∞
                                  X
               qt0 (1 + τtc )ct =   qt0 (1 − τtn )wt nt + [r0 + 1 − δ] k0 + b0 .
             t=0                 t=0

a. Solve for the Ramsey plan.
b. Suppose that the solution to the Ramsey problem converges to a steady state.
Characterize the optimal limiting sequence of consumption taxes.
c. In the case of capital taxation, we imposed an exogenous upper bound on
τ0k . Explain why a similar exogenous restriction on τ0c is needed to ensure an
interesting Ramsey problem. (Hint: Explore the implications of setting τ tc = τ c
and τtn = −τ c for all t ≥ 0, where τ c is a large positive number.)

      Solution
a. We follow the steps described in the paragraph “constructing the Ramsey
Plan”.
     Step 1: Write the household’s problem

We first recall the household problem when trading is sequential. The household
chooses consumption, labor, capital and bond holdings {ct , nt , kt+1 , bt+1 }+∞
                                                                              t=0 so as
to maximize

                                     +∞
                                     X
(141)                                      β t u(ct , 1 − nt ),
                                     t=0

subject to

                               bt+1
(142)        (1 + τtc )ct + kt+1 +  = (1 − τtn )wt nt + (rt + (1 − δ)) kt + bt .
                                Rt
Attach a Lagrange multiplier β t λt to time t budget constraint. The first order
conditions of the household’s problem are:
                          12. OPTIMAL TAXATION WITH COMMITMENT                                      191



                              ct : β t uc (t)        = λt (1 + τtc )
                              nt : β t un (t)        = λt (1 − τtn )wt
                            kt+1 :     λt            = βλt+1 [rt+1 + (1 − δ)]
                                       λt
                            bt+1 :     Rt
                                                     = βλt+1 .
Observe that the previous equations imply the no-arbitrage condition

(143)                                       Rt = rt+1 + (1 − δ).
To apply the primal approach, we need to reformulate the household problem in
the context of time zero trading. We thus define 1/qt0 ≡ Rt−1 Rt−2 . . . R0 . We
have

(144)                              β t uc (t) = λ0 qt0 (1 + τtc )
(145)                              β t un (t) = λ0 qt0 (1 − τtn )wt .
Observe that (144) and (145) imply in particular that

                                 qt0 (1 + τtc )   = β t uucc(0)
                                                             (t)
                                                                 (1 + τ0c )
                                 qt0 (1 − τtn )wt = β t uucl (0)
                                                             (t)
                                                                 (1 + τ0c ).
Furthermore, (144) and (145) also show that the household choice of consumption
and labor maximizes

                                            +∞
                                            X
(146)                                              β t u(ct , 1 − nt ),
                                             t=0

subject to an intertemporal budget constraint

                 +∞
                 X                          +∞
                                            X
(147)                  qt0 (1 + τtc )ct ≤          qt0 wt (1 − τtn )nt + (r0 + (1 − δ)) k0 + b0 .
                 t=0                        t=0

        Step 2: Write the intertemporal budget constraint.

The intertemporal budget constraint is
          +∞
          X
                 β t (1 + τ0c )(uc (t)ct − ul (t)nt ) = uc (0) ((r0 + (1 − δ))k0 + b0 ) .
           t=0
Let A ≡ uc (0) ((r0 + (1 − δ))k0 + b0 ).

        Step 3: Form the Lagrangian.

Now define:
192                      12. OPTIMAL TAXATION WITH COMMITMENT



          V (ct , nt , Φ) ≡ u(ct , 1 − nt ) + Φ(1 + τ0c )(uc (t)ct − ul (t)nt ).
The Lagrangian associated with the Ramsey plan is:

           +∞
           X
      J=         β t {V (ct , nt , Φ) + θt (F (kt , nt ) − (1 − δ)kt − ct − gt − kt+1 )} − ΦA.
           t=0

The first order conditions are:

                     ct : Vc (t)     =    θt , t ≥ 1
                     nt : Vn (t)     =    −θt Fn (t), t ≥ 1
                     kt+1 : θt       =    βθt+1 [Fk (t + 1) + (1 − δ)],    t≥0
                     c0 : Vc (0)     =    θ0 + ΦAc
                     n0 : Vn (0)     =    −θ0 Fn (0) + ΦAn .


The Ramsey Plan is thus solution of the following system of difference equations:


                       Vc (t) = βVc (t + 1)[Fk ((t + 1) + 1 − δ],         t≥1
                       Vn (t) = −Vc (t)Fn (t), t ≥ 1
                       Vn (0) = [ΦAc − Vc (0)]Fn (0) + ΦAn .


                     ct + gt + kt+1 = F (kt , nt ) + (1 − δ)kt
                     P  +∞ t         c
                        t=0 β (1 + τ0 )(uc (t)ct − ul (t)nt ) − A = 0.
b. Assume this system converges to a steady state. Remember that the no-
                                                        q0          k
arbitrage condition (143) must hold, that is Rt = q0t = (1−τt+1        )Fk (t + 1)+1−δ.
                                                        t+1
The steady
        £ state   version of the first ¤difference equation defining the Ramsey plan
               k
is 1 = β (1 − τt+1 )Fk (t + 1) + 1 − δ . So that:

                                     qt0   1
                                     0
                                         = .
                                    qt+1   β
On the other hand, the first order conditions of the household problem gives:

                             qt0 (1 + τtc )     uc (t)
                            0           c
                                            =             .
                           qt+1 (1 + τt+1 )   βuc (t + 1)
In steady state, this becomes:

                                 (1 + τtc )
                                      c
                                             = 1.
                                (1 + τt+1  )
Which proves that the steady state consumption tax is constant.

c. Consider the household problem under the suggested taxation scheme:
                     12. OPTIMAL TAXATION WITH COMMITMENT                                193


                                 P+∞ t
         max{ct }+∞
                 t=0 ,{l t } +∞
                             t=0  t=0 β u(ct , 1 − nt )
         subject
         P+∞ 0 to c                 P+∞ 0           c
           t=0 qt (1 + τ )ct =         t=0 qt (1 + τ )wt nt + (r0 + (1 − δ)) k0 + b0 .
The budget set is more conveniently described as:
                     +∞
                     X                            (r0 + (1 − δ))k0 + b0
                            qt0 (ct − wt nt ) =                         .
                      t=0
                                                         1 + τc
So that it is now apparent that this taxation scheme is equivalent to a lump sum
tax on time 0 assets (capital and bonds) and and no other tax afterwards. As we
know, this scheme is optimal because it does not induce distortion. Therefore, in
order to study what an optimal distortive tax on consumption would be, we need
to impose an upper bound on τ0c .

   Exercise 12.3. Specific utility function (Chamley, 1986)
Consider the non stochastic model with capital and labor in this chapter, and
assume that the period utility function in equation (12.1) is given by

                                        c1−σ
                          u(ct , `t ) = t    + v(`t ),
                                       1−σ
where σ > 0. When σ is equal to one, the term c1−σ
                                               t    /(1−σ) is replaced by log(ct ).
 a. Show that the optimal tax policy in this economy is to set capital taxes equal
to zero in period 2 and from thereon, i.e., τtk = 0 for t ≥ 2. (Hint: Given the
preference specification, evaluate and compare equations (12.30) and (12.35a))
b. Suppose there is uncertainty in the economy as in the stochastic model with
capital and labor in this chapter. Derive the optimal ex ante capital tax rate for
t ≥ 2.

   Solution
a. We use the notations developed in the paragraph “constructing the Ramsey
plan”. We have

                     V (c, n, ¡Φ) ≡ u(c,¢1 − n) + Φ(uc c − ul n)
                                 1                               .
                     = c1−σ 1−σ    + Φ + v(1 − n) − Φvl n
This shows in particular that:

                               Vc (t + 1)   uc (t + 1)
                                          =            .
                                 Vc (t)       uc (t)
Now recall that the first of the difference equations defining the Ramsey plan is:

                    Vc (t) = βVc (t + 1)[Fk (t + 1) + 1 − δ] t ≥ 1.
194                         12. OPTIMAL TAXATION WITH COMMITMENT

Also, the Ramsey plan is a competitive equilibrium, so that the Euler equation
of the household problem is satisfied:
                    £      k
                                            ¤             £      k
                                                                                        ¤
uc (t) = βuc (t + 1) (1 − τt+1 )rt+1 + 1 − δ = βuc (t + 1) (1 − τt+1 )Fk (t + 1) + 1 − δ .
Combined with the previous equation and with the identity VcV(t+1)
                                                             c (t)
                                                                   = ucu(t+1)
                                                                        c (t)
                                                                              , it
implies that, for t ≥ 1:
                                     £      k
                                                                   ¤
               [Fk (t + 1) + 1 − δ] = (1 − τt+1 )Fk (t + 1) + 1 − δ .
So that τtk = 0 for all t ≥ 2.
b. The reasoning is very similar. Under uncertainty, the first of the difference
equations defining a Ramsey plan is:
                            X                                  £                       ¤
           Vc (st ) = β            π(st+1 | st )Vc (st+1 , st ) Fk (st+1 , st ) + 1 − δ t ≥ 1.
                            st+1

As before, the Ramsey plan is a competitive equilibrium, so that the Euler equa-
tion of the household problem is verified:
                 P                                  £¡                   ¢                       ¤
            ) = β st+1 π(st+1 | st )uc (st+1
      uc (stP                              £¡ , st ) 1 − τ k (st+1
                                                                ¢  , st ) r(st+1 , st ) + 1¤ − δ
      = β st+1 π(st+1 | st )uc (st+1 , st ) 1 − τ k (st+1 , st ) Fk (st+1 , st ) + 1 − δ .
We use again the fact that:

                                          Vc (st+1 , st )   uc (st+1 , st )
                                                          =                 .
                                             Vc (st )          uc (st )
And we find:
                 X                   uc (st+1 , st ) k
                                     t
             β          π(st+1 | s )         t
                                                    τ (st+1 , st )Fk (st+1 , st ) = 0 t ≥ 1.
                 st+1
                                        uc (s )
                                                           t
With p(st+1 | st ) = βπ(st+1 | st ) uc (s t+1 ,s )
                                       uc (st )
                                                   and r(st+1 , st ) = Fk (st+1 , st ), this can
be rewritten:
                       X
                     β    p(st+1 | st )τ k (st+1 , st ) = 0 t ≥ 1.
                                   st+1
i.e., the ex-ante capital tax is zero for t ≥ 2.

      Exercise 12.4. Two labor inputs
Consider the non stochastic model with capital and labor in this chapter, but
assume that there are two labor inputs, n1t and n2t , entering the production
function, F (kt , n1t , n2t ). The household’s period utility function is still given by
u(ct , `t ) where leisure is now equal to
                                               `t = 1 − n1t − n2t .
                      12. OPTIMAL TAXATION WITH COMMITMENT                                   195

Let τitn be the flat-rate tax at time t on wage earnings from labor nit , for i = 1, 2,
and τtk denotes the tax on earnings from capital.
a. Solve for the Ramsey plan. What is the relationship between the optimal
tax rates τ1tn and τ2tn for t ≥ 1? Explain why your answer is different for period
t = 0. As an example, assume that k and n1 are complements while k and n2 are
substitutes.
We now assume that the period utility function is given by u(ct , `1t , `2t ) where
                        `1t = 1 − n1t ,       and        `2t = 1 − n2t .
Further, the government is now constrained to set the same tax rate on both
types of labor, i.e., τ1tn = τ2tn for all t ≥ 0.
b. Solve for the Ramsey plan. (Hint: Using the household’s first-order conditions,
we see that the restriction τ1tn = τ2tn can be incorporated into the Ramsey problem
by adding the constraint u`1 (t)Fn2 (t) = u`2 (t)Fn1 (t).)
c. Suppose that the solution to the Ramsey problem converges to a steady state
where the constraint that the two labor taxes should be equal is binding. Show
that the limiting capital tax is not zero unless Fn1 Fn2 k = Fn2 Fn1 k .

   Solution
a. We follow the steps described in the paragraph “constructing the Ramsey
Plan”.

      Step 1: Solve the household problem.

The household problem is:
                             P+∞ t
   max{ct }+∞
            t=0 ,{l t } +∞
                        t=0     t=0 β u(ct , 1 − n1t − n2t )
   subject
   P+∞ 0 to c                     P+∞ 0             n1                n2
     t=0 q t (1  +     τ t )c t =    t=0 qt ((1 − τt )w1t n1t + (1 − τt )w2t n2t ) + (r0 + (1 − δ)) k0 + b0 .
The first order conditions are

                      ct : β t uc (t) = λqt0 (1 + τtc )
                      n1t : β t ul (t) = λqt0 (1 − τtn1 )w1t
                      n2t : β t ul (t) = λqt0 (1 − τtn2 )w2t .
Taking time zero consumption as numeraire we find:

                      qt0                = β t uucc(0)
                                                   (t)

                      qt0 (1 − τtn1 )w1t = qt0 (1 − τtn2 )w2t = β t uucl (0)
                                                                         (t)
                                                                             .


      Step 2: Write the intertemporal budget constraint.

The intertemporal budget constraint is:
196                       12. OPTIMAL TAXATION WITH COMMITMENT


            +∞
            X
                  β t (uc (t)ct − ul (t)(n1t + n2t )) = uc (0) ((r0 + (1 − δ))k0 + b0 ) .
            t=0
Let A ≡ uc (0) ((r0 + (1 − δ))k0 + b0 ).

       Step 3: Form the Lagrangian.

Now define:

 V (ct , n1t , n2t , Φ) ≡ u(ct , 1 − n1t − n2t ) + Φ(1 + τ0c ) (uc (t)ct − ul (t)(n1t + n2t )) .
The Lagrangian associated with the Ramsey plan is:

      +∞
      X
J=          β t {V (ct , n1t , n2t , Φ) + θt (F (kt , n1t , n2t ) − (1 − δ)kt − ct − gt − kt+1 )}−ΦA.
      t=0

The first order conditions are:

              ct : Vc (t)                   =   θt , t ≥ 1
              n1t : Vn1 (t) = Vn2 (t)       =   −θt Fn1 (t), t ≥ 1
              n2t : Vn2 (t) = Vn1 (t)       =   −θt Fn2 (t), t ≥ 1
              kt+1 : θt                     =   βθt+1 [Fk (t + 1) + (1 − δ)],     t≥0
              c0 : Vc (0)                   =   θ0 + ΦAc
              n10 : Vn1 (0)                 =   −θ0 Fn1 (0) + ΦAn1
              n20 : Vn2 (0)                 =   −θ0 Fn2 (0) + ΦAn2 .
The Ramsey Plan is thus solution of the following system of difference equations:

                  Vc (t)              =   βVc (t + 1)[F (k (t + 1) + 1 − δ],    t≥1
                  Vn1 (t) = Vn2 (t)   =   −Vc (t)Fn1 (t), t ≥ 1
                  Vn2 (t) = Vn1 (t)   =   −Vc (t)Fn2 (t), t ≥ 1
                  Vn1 (0)             =   [ΦAc − Vc (0)]Fn1 (0) + ΦAn1
                  Vn2 (0)             =   [ΦAc − Vc (0)]Fn2 (0) + ΦAn2 .
                   ct + gt + kt+1 = F (kt , n1t , n2t ) + (1 − δ)kt
                   P  +∞ t
                      t=0 β (uc (t)ct − ul (t)(n1t + n2t )) − A = 0.
Now note that, from the first order conditions of the household problem, we have:

                                  (1 − τtn1 )w1t = (1 − τtn2 )w2t .
From the first order condition of the firm’s problem we have w1t = Fn1 (t) and
w2t = Fn2 (t). But the difference equations defining the Ramsey plan imply that
Fn1 (t) = Fn2 (t), for all t ≥ 1. Therefore :

                                      (1 − τtn1 ) = (1 − τtn2 ).
                     12. OPTIMAL TAXATION WITH COMMITMENT                             197

That is, τtn1 = τtn2 , for all t ≥ 1. At t = 0 we don’t have Fn1 (0) = Fn2 (0) because
time zero capital tax is fixed exogenously. The following applies instead:


  θ0 (Fn1 (0) − Fn2 (0)) = Φ(An1 − An2 ) = Φuc (0)(1 − τ0k )k0 (Fkn1 (0) − Fkn2 (0)),
where the last equality is found by differentiating A with respect to n1 and n2 .
Note that when Φ = 0, i.e. when we don’t put restrictions on τ0k , then we have
Fn1 (0) = Fn2 (0).
As before use the first order conditions of the household’s problem and of the
                                                                              F (0)
firm’s problem to write that (1 − τ0n1 )Fn1 (0) = (1 − τ0n2 )Fn2 (0), so that Fnn2 (0) =
                                                                                  1
   n
1−τ0 1
   n . Replacing this relationship in the equation above, we find:
1−τ0 2

                       τ n1 − τ0n2
             θ0 Fn1 (0) 0          = Φuc (0)(1 − τ0k )k0 (Fkn1 (0) − Fkn2 (0)).
                        1 − τ0n2
Recall that θ0 and Φ are Lagrange multipliers of inequality constraints and are
therefore positive. We have:

                      sign(τ0n1 − τ0n2 ) = sign(Fkn1 (0) − Fkn2 (0)).
Now assume as an example that k and n1 are complement, so that the marginal
return with respect to k is increasing in n1 . Also assume that k and n2 are
substitute, so that the marginal return with respect to k is decreasing in n 2 . This
implies:

                                        τ0n1 > τ0n2 .
Some intuition may be gained by remembering that the welfare cost of distor-
tionary taxation is measured by the derivative of the Lagrangian with respect to
τ0k :

                                 ∂J
(148)                                 = φuc (0)Fk (0)k0 .
                                 ∂τk0
Note that, if the marginal product of capital is high, then the welfare cost of
using distortionary taxation is high – equivalently welfare could be improved a
lot by increasing τ0k . Therefore, one can reduce the welfare cost of distortionary
taxation by lowering the marginal product of capital. Therefore, the planner
should choose a relatively high n2 and a relatively low n1 , which is achieved by
taxing n2 less than n1 .
b. We follow the usual steps.

        Step 1: Solve the household problem.
198                       12. OPTIMAL TAXATION WITH COMMITMENT

The household problem is:
                           P+∞ t
  max{ct }+∞
           t=0 ,{l t } +∞
                       t=0  t=0 β u(ct , 1 − n1t , 1 − n2t )
  subject
  P+∞ 0 to c                  P+∞ 0             n                 n
     t=0 qt (1 + τt )ct =        t=0 qt ((1 − τt )w1t n1t + (1 − τt )w2t n2t ) + (r0 + (1 − δ)) k0 + b0 .

The first order conditions are

                               ct : β t uc (t)   = λqt0 (1 + τtc )
                               n1t : β t ul1 (t) = λqt0 (1 − τtn )w1t
                               n2t : β t ul2 (t) = λqt0 (1 − τtn )w2t .
Taking time zero consumption as numeraire we find:

                                      qt0 = β t uucc(0)
                                                    (t)

                                                               u (t)
                                      qt0 (1 − τtn )w1t = β t ulc1(0)
                                                               u (t)
                                      qt0 (1 − τtn )w2t = β t ulc2(0) .
         Step 2: Write the intertemporal budget constraint.

The intertemporal budget constraint is:

         +∞
         X
               β t (uc (t)ct − ul1 (t)n1t − ul2 (t)n2t )) = uc (0) ((r0 + (1 − δ))k0 + b0 ) .
         t=0

Let A ≡ uc (0) ((r0 + (1 − δ))k0 + b0 ).
     Step 3: Form the Lagrangian.

We follow the hint and incorporate constraints forcing the planner to raise equal
taxes on both labor inputs. Recall that from the first order conditions of the
household problem, we have (1 − τtni )w1 = uli (t), i = 1, 2. From the first order
conditions of the firm’s problem, we have wit = Fni (t), i = 1, 2. In a competitive
equilibrium, both labor taxes are equal if and only if:

                         ul1 (t)  ul (t)
                                 = 1      ⇔ ul1 (t)Fn2 (t) = ul2 (t)Fn1 (t).
                        Fn1 (t))  Fn2 (t)
Define as usual:

  V (ct , n1t , n2t , Φ) ≡ u(ct , 1 − n1t , 1 − n2t ) + Φ (uc (t)ct − ul1 (t)n1t − ul2 (t)n2t )) .
The Lagrangian associated with the Ramsey plan is, with the new constraint:
         P+∞ t
      J=
       P t=0t β {V (ct , n1t , n2t , Φ) + θt (F (kt , n1t , n2t ) − (1 − δ)kt − ct − gt − kt+1 )}
      + +∞
         t=0 β ψt {ul1 (t)Fn2 (t) − ul2 (t)Fn1 (t)} − ΦA.

We only state the associated first order conditions :
                      12. OPTIMAL TAXATION WITH COMMITMENT                                   199



   ct : Vc (t)        =   θt − ψt [ul1 ,c (t)Fn2 (t) − ul2 ,c (t)Fn1 (t)]
   n1t : Vn1 (t)      =   −θt Fn1 (t)
                          −ψt [−ul1 ,l1 (t)Fn2 (t) + ul1 (t)Fn1 ,n2 (t) + ul1 ,l2 (t)Fn1 (t) − ul1 (t)Fn1 ,n1 (t)] t ≥ 1
   n2t :    Vn2 (t)   =   −θt Fn2 (t)
                          −ψt [−ul1 ,l2 (t)Fn2 (t) + ul1 (t)Fn2 ,n2 (t) + ul2 ,l2 (t)Fn1 (t) − ul2 (t)Fn1 ,n2 (t)] t ≥ 1
   kt+1 :    θt       =   βθt+1 [Fk (t + 1) + (1 − δ)]
                          −βψt+1 [ul1 (t + 1) + Fn2 ,k (t + 1) − ul2 (t + 1)Fn1 ,k (t + 1)], t ≥ 0
   c0 : Vc (0)   =        θ0 − ψ0 [ul1 ,c (0)Fn2 (0) − ul2 ,c (0)Fn1 (0)] + ΦAc
   n10 : Vn1 (0) =        −θ0 Fn1 (0)
                          −ψ0 [−ul1 ,l1 (0)Fn2 (0) + ul1 (0)Fn1 ,n2 (0) + ul1 ,l2 (0)Fn1 (0) − ul1 (0)Fn1 ,n1 (0)]
                          +ΦAn1
   n20 :    Vn2 (0) =     −θ0 Fn2 (0)
                          −ψ0 [−ul1 ,l2 (0)Fn2 (0) + ul1 (0)Fn2 ,n2 (0) + ul2 ,l2 (0)Fn1 (0) − ul2 (0)Fn1 ,n2 (0)]
                          +ΦAn2 .
   And:

                 cP
                  t + gt + kt+1 = F (kt , n1t , n2t ) + (1 − δ)kt , t≥0
                    +∞ t
                    t=0 β (uc (t)ct − ul1 (t)n1t − ul2 (t)n2t ) − A = 0
                 ψt {ul1 (t)Fn2 (t) − ul2 (t)Fn1 (t)} = 0, t ≥ 0.
c. Assume that the solution of this Ramsey converges to a steady state for which
the constraint that the two labor taxes should be equal binds. Thus ψt → ψ 6= 0
as t → +∞. The steady state version of the first order condition associated with
kt+1 can be written:
                                      ψ
                1 = β(Fk + 1 − δ) − β (ul1 Fn2 ,k − ul2 Fn1 ,k ).
                                       θ
On the other hand the no arbitrage condition for capital is, in steady state:

                 qt0   1 uc (t)       1         k
                 0
                     =              =   = (1 − τt+1 )Fk + 1 − δ.
                qt+1   β uc (t + 1)   β
Combining the last two equations gives:

                           k       ψ
                         τt+1 = − (ul1 Fn2 ,k − ul2 Fn1 ,k ),
                                   θ
which is different from zero unless ul1 Fn2 ,k − ul2 Fn1 ,k is zero. Now recall that

   ul1 Fn2 ,k = ul2 Fn1 ,k ⇔ (1 − τ n )w1 Fn2 ,k = (1 − τ n )Fn1 ,k ⇔ Fn1 Fn2 ,k = Fn2 Fn1 ,k .
Thus the steady state tax on capital is not zero unless Fn1 Fn2 ,k = Fn2 Fn1 ,k .
 CHAPTER 13

Self-insurance




      201
202                               13. SELF-INSURANCE

      Exercise 13.1.
A single consumer has  P∞preferences over sequences of a single consumption good
                             t
that are ordered by t=0 β u(ct ) where β ∈ (0, 1) and u(·) is strictly increasing,
twice continuously differentiable, strictly concave, and satisfies the Inada condi-
tion limc&0 u0 (c) = +∞. The one good is not storable. The consumer has an
endowment sequence of the one good yt = λt , t ≥ 0, where |λβ| < 1. The con-
sumer can borrow or lend at a constant and exogenous risk-free net interest rate
of r that satisfies (1 + r)β = 1. The consumer’s budget constraint at time t is
                             bt + ct ≤ yt + (1 + r)−1 bt+1 ,
for all t ≥ 0, where bt is the debt (if positive) or assets (if negative) due at t, and
the consumer has initial debt b0 = 0.
Part I. In this part, assume that the consumer is subject to the ad hoc borrowing
constraint bt ≤ 0 ∀t ≥ 0. Thus, the consumer can lend but not borrow.
a. Assume that λ < 1. Compute the household’s optimal plan for {ct , bt+1 }∞
                                                                           t=0 .

b. Assume that λ > 1. Compute the household’s optimal plan {ct , bt+1 }∞
                                                                       t=0 .

Part II. In this part, assume that the consumer is subject to the natural bor-
rowing constraint associated with the given endowment sequence.
c. Compute the natural borrowing limits for all t ≥ 0.
d. Assume that λ < 1. Compute the household’s optimal plan for {ct , bt+1 }∞
                                                                           t=0 .

e. Assume that λ > 1. Compute the household’s optimal plan {ct , bt+1 }∞
                                                                       t=0 .


      Solution
We let {bt+1 }+∞
              t=0 ≥ 0 be a sequence of borrowing limits. The first order necessary
conditions of the agent’s problem are

(149)                   u0 (ct ) ≥ u0 (ct+1 ) = if bt < bt
(150)                                   ct + bt = yt + βbt+1 .
Sufficient conditions for optimality are given as follows. A sequence {c∗t , b∗t+1 }+∞
                                                                                    t=0
is a solution of the agent’s problem if it satisfies (186) and (150) together with
the “transversality condition”

(151)                    lim β T +1 u0 (c∗T +1 )(b∗T +1 − bT +1 ) = 0
                       T →+∞

a. We guess and verify that consumption ct is constant and equal to the annuity
value c̄ of the agents’ endowment

                                          +∞
                                          X                 1−β
(152)                      c̄ = (1 − β)         β t yt =          .
                                          t=0
                                                           1 − βλ
                                   13. SELF-INSURANCE                            203

Because |βλ| < 1, we can compute the corresponding sequence of borrowing bt+1
by iterating forward on the budget constraint bt = yt − ct + βbt+1 . Namely

                                   +∞
                                   X              µ                        ¶
                                              j           t+j      1−β
                         bt =             β           λ         −
                                    j=0
                                                                  1 − βλ
                                    λt − 1
(153)                    bt =
                                    1 − βλ
The sequence {bt , ct = c̄}+∞
                           t=0 satisfies the first order conditions (186), (150)
together with the transversality condition (151) and the borrowing constraint
bt ≤ 0.

   The intuition is that, if λ < 1, the endowment sequence is decreasing mono-
tonically. The consumer can achieve a constant consumption stream by saving.
More specifically, the consumer will consume the annuity value of his total en-
dowment stream:
                              X ∞
                                               1
                                   (βλ)j =
                               j=0
                                            1 − βλ

The annuity value, and hence the constant consumption, is:
                                     r      1      1−β
                       ct ≡ c̄ =                =
                                   1 + r 1 − βλ   1 − βλ
b. When λ > 1, we guess that ct = yt = λt and bt = 0. This sequence of
consumption and borrowings clearly satisfies (186), (150), and (151).

    When λ > 1, the consumer faces a monotonically increasing endowment se-
quence. She wants to borrow in the earlier periods, and repay the loan in later
periods. As βλ < 1, he would like to consume the annuity value of the dis-
                                           1−β
counted sum of her endowment stream, 1−βλ      , at all periods. However, at time
0, this amount exceeds the time 0 endowment, 1. Hence, the ad hoc borrowing
constraint is binding. Similarly, given that the consumer consumed all her en-
                                                   1−β
dowment at time t − 1, she wants to consume λt 1−βλ      at time t, which, again, is
                                      t
more than what she has at time t, λ . That is, the ad hoc borrowing constraint
is binding for all t. In summary, ct = yt ≡ λt and bt ≡ 0 for all t ≥ 0. Note that
the consumption does diverge to infinity, although there is no uncertainty.
c. The sequence of natural borrowing limits is given by

                                    +∞
                                    X           λtj
(154)                       bt =     β yt+j =
                                 j=0
                                              1 − βλ

  Under the non-negativity constraint on consumption, the maximum repay-
ment will be in the form of surrendering all future endowment from time t on.
204                              13. SELF-INSURANCE

d. and e. We guess and verify that the consumption is constant and equal to
the annuity value c̄ of the agent’s endowment, given by (152). The corresponding
sequence of borrowing is given by (153), clearly satisfies the natural borrowing
limit, bt ≤ bt , and the transversality condition (151).
    When |λ| < 1, bt < 0, meaning that the agent is saving. The natural bor-
rowing limit is less restrictive than the ad hoc borrowing constraint. In part a,
we derived the consumption and borrowing process. The ad hoc borrowing con-
straint was not binding at any period. Hence, relaxing the borrowing constraint
will not produce any different outcome. The same {ct }∞                ∞
                                                          t=0 and {bt }t=1 will be
chosen.
    When |λ| > 1, bt > 0, meaning that the agent is a perpetual borrower. From
                                                                   1−β
part b, we know that the desired consumption sequence is ct ≡ 1−βλ     . bt , the
amount of borrowing that the consumer enter time t with, is the cumulative sum
of his past dissavings.
                           t−1
                           X               ·             ¸
                                       t−j    1−β      j
                     bt =      (1 + r)              −λ
                           j=0
                                             1 − βλ
                               ·                           ¸
                            −t    1 − β 1 − β t 1 − (βλ)t
                        = β                      −
                                 1 − βλ 1 − β       1 − βλ
                             t
                           λ −1
                        =
                           1 − βλ
Comparing to the borrowing limit in part b, we readily see that the natural
borrowing constraint is never binding. Hence, the desired consumption sequence,
      1−β
ct ≡ 1−βλ , for all t is admissible under the natural borrowing constraint. The
sequence {bt }∞
              t=1 follows the formula above.



      Exercise 13.2.
The household has preferences P∞ over stochastic processes of a single consumption
good that are ordered by E0 t−0 β t ln(ct ) where β ∈ (0, 1) and E0 is the mathe-
matical expectation with respect to the distribution of the consumption sequence
of a single nonstorable good, conditional on the value of the time 0 endowment.
The consumer’s endowment is the following stochastic process: at times t = 0, 1,
the household’s endowment is drawn from the distribution prob(yt = 2) = π,
prob(yt = 1) = 1 − π, where π ∈ (0, 1). At all times t ≥ 2, yt = yt−1 . At
each date t ≥ 0, the household can lend, but not borrow, at an exogenous and
constant risk-free one-period net interest rate of r that satisfies (1 + r)β = 1. The
consumer’s budget constraint at t is at+1 = (1 + r)(at − ct ) + yt+1 , subject to the
initial condition a0 = y0 . One-period assets carried (at − ct ) over into period t + 1
from t must be nonnegative, so that the no-borrowing constraint is at ≥ ct .
a. Draw a tree that portrays the possible paths for the endowment sequence from
date 0 onward.
                                   13. SELF-INSURANCE                                205

b. Assume that y0 = 2. Compute the consumer’s optimal consumption and
lending plan.
c. Assume that y0 = 1. Compute the consumer’s optimal consumption and
lending plan.
d. Under the two assumptions on the initial condition for y0 in the preceding
two questions, compute the asymptotic distribution of the marginal utility of
consumption u0 (ct ) (which in this case is the distribution of u0 (ct ) = Vt0 (at ) for
t ≥ 2), where Vt (a) is the consumer’s value function at date t).
e. Discuss whether your results in part d conform to Chamberlain and Wilson’s
application of the supermartingale convergence theorem.

   Solution
a. The tree is displayed in figure 1.

                                                 t=1      t=2     t=3      ...
                                         y(t)     2        2       2        2
                          π


               y(0)


                      1−π
                                        y(t)     1         1       1       1


                               Figure 1. Exercise 13.2

   The four possibilities are:
                 {y0 = 1, y1 = 1, y2 = 1, y3 = 1, . . . , yt = 1, . . .}
                 {y0 = 1, y1 = 2, y2 = 2, y3 = 2, . . . , yt = 2, . . .}
                 {y0 = 2, y1 = 1, y2 = 1, y3 = 1, . . . , yt = 1, . . .}
                 {y0 = 2, y1 = 2, y2 = 2, y3 = 2, . . . , yt = 2, . . .}


b.and c. We solve the consumer problem backward. Given an asset position a1
at t = 1, and given that the endowment stays constant for all t ≥ 1, we know
that the agent’s optimal consumption plan is to consume the annuity value c1 of
his asset position a1 and of his stream of income

(155)                            c1 = (1 − β)a1 + βy1 .
206                              13. SELF-INSURANCE

where a1 = y1 + β −1 (y0 − c0 ). Therefore, the agent’s problem can be reduced to

                                     ¡ ¡                           ¢¢
(156)       max u(c0 ) + β(1 − β)−1 E u y1 + (1 − β)β −1 (y0 − c0 ) .
          0≤c0 ≤y0

The first order condition of this program is

                         ¡ ¡                            ¢¢
(157)        u0 (c0 ) ≥ E u0 y1 + (1 − β)β −1 (y0 − c0 ) ,    =   if c0 < y0 .
Clearly, because u0 (c) → +∞ when c → 0, we have c0 > 0. Furthermore, the
agent is saving (c0 < y0 ) if and only if

(158)                           u0 (y0 ) − E(u0 (y1 )) < 0
    If y0 = 2, then (158) reduces to (1 − π)(u0 (2) − u0 (1)) < 0.
    Given that all the uncertainty is resolved at time 1, and that the endowment
is constant for all t ≥ 1, we can write the problem.
                                (1 − π)β
             max      ln(c) +            ln((1 + r)(a − c)(1 − β) + 1)
               c                  1−β
                          πβ
                      +       ln((1 + r)(a − c)(1 − β) + 2)
                        1−β
                      s.t. c ≤ a,
where a is the time zero asset wealth and c the time zero consumption level. The
first-order condition w.r.t. c can be easily derived.
           1                 1−π                          π
              =                              +
           c       (1 + r)(a − c)(1 − β) + 1 (1 + r)(a − c)(1 − β) + 2
Since a = 2, we can solve for c to obtain the following.
                                    p
                       π −  r − 2 +   (π − r − 2)2 + 8(r2 + r)(1 − π)
           c∗ = 2 −
                                           2(r2 + r)
It can be shown that 1 < c0 = c∗ < 2, as long as π ∈ (0, 1).

    On the other hand, if y0 = 1, the (158) reduces to π(u0 (1) − u0 (2)) > 0.
Intuitively, if y0 = 1, the consumer realizes that her endowment for all t ≥ 1
will be greater than or equal to her current endowment. We know that she
would like to consume more today (equalizing current marginal utility with the
expected future marginal utility), but it is impossible due to the ad hoc borrowing
constraint. She will consume all her endowment, 1, at time 0. If y1 = 2, she will
consume 2 for all t ≥ 1. Likewise, if y1 = 1, she will consume 1 for all t ≥ 1. Her
lending (saving) will be st = 0 for all t ≥ 0.
    In other words, if the initial endowment is high (y0 = 2) the agent saves, and
if the initial endowment is low (y0 = 1), the agent consume all her endowment
and does not save.
                                 13. SELF-INSURANCE                                 207

d. We let c0 be the agent’s consumption at time 0. When y0 = 2, the distribu-
tion of the marginal utility of consumption for t ≥ 2 is (1 + β −1 (2 − c0 ))−1 with
probability 1 − π and (2 + β −1 (2 − c0 ))−1 with probability π. When y0 = 1, for
all t ≥ 1, u0 (ct ) = 21 with probability π (y1 = 2), and u0 (ct ) = 1 with probability
1 − π (y1 = 1).

e. The results do not conform to Chamberlain and Wilson application of the
supermartingale convergence theorem because the sufficient condition of propo-
sition 2 is not satisfied. Namely, the annuity value of the endowment process is
not “sufficiently stochastic”.


   Exercise 13.3.
Consider the stochastic version of the savings problem under the following natural
borrowing constraints. At each date t ≥ 0, the consumer can issue risk-free one-
period debt up to an amount that it is feasible for him to repay almost surely,
given the nonnegativity constraint on consumption ct ≥ 0 for all t ≥ 0.
a. Verify that the natural debt limit is (1 + r)−1 bt+1 ≤ yr1 .
b. Show that the natural debt limit can also be expressed as at+1 −yt+1 ≥ − (1+r)y
                                                                               r
                                                                                   1

for all t ≥ 0.
c. Assume that yt is an i.i.d. process with nontrivial distribution {Πs }, in the
sense that at least two distinct endowments occur with positive probabilities.
Prove that optimal consumption diverges to +∞ under the natural borrowing
limits.
d. For identical realizations of the endowment sequence, get as far as you can
in comparing what would be the sequences of optimal consumption under the
natural and ad hoc borrowing constraints.

   Solution
a. Assume that, at time t, the agent enters a loan of size βbt+1 . Then, she pays
to the lender the stream {zt+j }+∞
                                j=1 . The borrowing position of the agents evolves
according to the difference equation

(159)                          βbt+1+j = bt+j − zt+j .
A payment plan is some adapted sequence {zt+j }+∞j=1 . Iterating forward on (159),
we obtain that the borrowing position of the agent after J payments to the lender
is
                                          Ã             J
                                                                         !
                                                        X
(160)                 bt+J+1 = β −(J+1)       βbt+1 −         β j zt+j
                                                        j=1
208                                  13. SELF-INSURANCE

We adopt the following definition: a loan of size bt+1 can be repaid if there exists
a payment (state contingent) plan {zt+j }+∞
                                         j=1 such that

                                 µ                  ¶
(161)                           P lim sup bt+J+1 < 0 = 1.
                                     J→+∞

In words,the loan can be repaid almost surely if, for some payment plan, the
borrowing position bt+J+1 is negative for J large enough, for almost all income
realizations {yt+j }+∞
                    j=1 .
    We now verify that βbt+1 = ȳ1 /r is the natural borrowing limit, that is, the
largest loan size that can be repaid almost surely. For simplicity we assume that
the income process yt satisfies the assumptions of question c. A loan of size
βbt+1 ≤ ȳ1 /r can be repaid almost surely by consuming ct+j = 0 and paying yt+j
to the lender, for all j ≥ 1. The time t present value of this stream of payments
is

                                 +∞
                                 X                  ȳ1
(162)                                  β j yt+j ≥       ≥ βbt+1 ,
                                 j=1
                                                     r
because yt+j ≥ ȳ1 , for all j ≥ 1. Since the event {yt+j = ȳ1 , j ≥ 0} has prob-
ability zero, (162) holds with a strict inequality almost surely. Therefore, for
J sufficiently large, bt+J+1 is negative. In other words, the loan can be repaid
almost surely.
    We let βbt+1 = ȳ1 /r + ε, for some ε > 0. First, since β < 1, there is a J ∈ N
such that,

                     J
                     X               +∞
                                     X
                            j                             β                   1
(163)      βbt+1 >         β ȳ1 +           β j ȳS =       (1 − β J )ȳ1 +     β J+1 ȳS
                     j=1             j=J+1
                                                         1−β                 1−β
Now consider the set of income streams starting with J “low” income realizations
yt+j = ȳ1
                         ©                                   ª
(164)                 D = {yt+j }+∞
                                 j=1 : yt+j = ȳ1 , 1 ≤ j ≤ J .

The inequality (163) ensures that, for all income realizations in D, the time t
present value of the agent’s income stream is less than the value of the loan.
Since yt is assumed i.i.d., the probability of D is positive and equal to ΠK
                                                                           1 . In
other words, with positive probability, the loan cannot be repaid.

b. This follows from the definition bt+1 = at+1 − yt+1 .

c. Because the agent faces a borrowing constraint and (1 + r)−1 = β, the first
order condition of her program is u(ct ) ≥ E(u(ct+1 )). The proof of at → +∞
then follow from the argument outlined in the text, in the case bt = 0.
                                     13. SELF-INSURANCE                                209

d. Under either borrowing constraint, the asset and consumption level will even-
tually diverge to infinity. However, we can characterize the differences in con-
sumption patterns associated with these two borrowing constraints.
    When a = y and the endowment realization is low enough, the natural bor-
rowing constraint allows the agent to bring forward some of her future endowment
by borrowing, whereas the ad hoc constraint precludes this option. That is, she
can consume more under the natural borrowing constraint.
    When a − y ≥ 0 and the endowment realization is high enough, the agent
will save some of her current endowment. The optimal consumption requires
intertemporal smoothing. Hence, a binding borrowing constraint translates into
sub-optimality. Given the same asset level and endowment realization, the agent
will save more when she is facing the ad hoc constraint, because this constraint
is more likely to be binding in the future. Thus, cN (a, y) ≥ cA (a, y), for all (a, y)
pairs such that a ≥ y, where the optimal policy functions cN and cA correspond
to natural borrowing constraint and ad hoc constraint, respectively.
    However, we cannot claim that cN weakly dominates cA for identical realiza-
tion of endowment sequence, because the same endowment process will generate
different asset level sequences for each borrowing limit specification. For exam-
ple, if the worst case endowment sequence (yt = ȳ1 , ∀t ≤ τ ) is realized and the
natural borrowing constraint is “almost” binding at time τ , we can easily see that
                                                                       1
ȳ1 = cA     N
       τ > cτ = ȳ1 − Rτ , where Rτ denotes the interest repayment.
    The bottom line is that the ability to borrow provides a degree of buffer for
the consumer, especially when the endowment realization is low and the asset
level is close to zero. As a result, the marginal utility process under the natural
borrowing constraint will be less volatile. In addition, the expected utility is
higher under the natural borrowing limit.




    1If we assume lim                                0
                        c→0 u(c) = −∞ and/or limc→0 u (c) = +∞, the natural borrowing con-
straint will never be binding, although it does affect the allocations.
       CHAPTER 14

Incomplete markets models




           211
212                        14. INCOMPLETE MARKETS MODELS

      Exercise 14.1. Stochastic discount factor (Bewley-Krusell-Smith)
A household has preferences over consumption of a single good ordered by a value
function defined recursively according to v(βt , at , st ) = u(ct )+βt Et v(βt+1 , at+1 , st+1 ),
where βt ∈ (0, 1) is the time-t value of a discount factor, and at is time-t hold-
ing of a single asset. Here v is the discounted utility for a consumer with as-
set holding at , discount factor βt , and employment state st . The discount fac-
tor evolves according to a three-state Markov chain with transition probabilities
Pi,j = Prob(βt+1 = β̄j |βt = β̄i ). The discount factor and employment state at t
are both known. The household faces the sequence of budget constraints
                                at+1 + ct ≤ (1 + r)at + wst
where st evolves according to an n-state Markov chain with transition matrix
P . The household faces the borrowing constraint at+1 ≥ −φ for all t. Formulate
Bellman equations for the household’s problem. Describe an algorithm for solving
the Bellman equations. Hint: Form three coupled Bellman equations.
      Solution
Let P be the transition matrix for β and Q the transition matrix for s. The
household’s problem is to solve
                         (                                                  )
                                    XX
        v(β, a, s) = max
                      0
                           u(c) + β      v(β 0 , a0 , s0 )P (β 0 |β)Q(s0 |s) ,
                         a ,c
                                           β0   s0

subject to
                                a0 + c ≤ (1 + r)a + ws
                                    a0 ≥ −φ.
By substituting in for consumption and the restriction on asset holdings we obtain
the Bellman equation:
                  (                                                                      )
                                                XX
v(β, a, s) = max
             0
                    u [(1 + r)a + ws − a0 ] + β       v(β 0 , a0 , s0 )P (β 0 |β)Q(s0 |s) .
             a ≥−φ
                                                     β0   s0

     To solve the household’s problem assume that the household can choose from
a finite set of asset holdings (assume M gridpoints for the asset holdings), and
write the value function as a 2 + N + M ×1 vector. Starting from an initial guess
v0 , solve the Bellman equation by policy iteration, in each iteration respecting
the borrowing constraint. Iterate until convergence.

    Exercise 14.2. Mobility Costs (Bertola) ¦
                                 P
A worker seeks to maximize E ∞          t                                       c1−σ
                                   t=0 β u(ct ), where β ∈ (0, 1) and u(c) = (1−σ) ,
and E is the expectation operator. Each period, the worker supplies one unit
of labor inelastically (there is no unemployment) and either w g or wb , where
wg > wb . A new “job” starts off paying w g the first period. Thereafter, a job earns
a wage governed by the two-state Markov process governing transition between
                             14. INCOMPLETE MARKETS MODELS                                         213
                                                                          · ¸
                                                              p     (1 − p)
good and bad wages on all jobs; the transition matrix is                      . A
                                                           (1 − p)     p
new (well-paying) job is always available, but the worker must pay mobility cost
m > 0 to change jobs. The mobility cost is paid at the beginning of the period
that a worker decides to move. The worker’s period-t budget constraint is
                                 At+1 + ct + mIt ≤ RAt + wt ,
where R is a gross interest rate on assets, ct is consumption at t, m > 0 is moving
costs, It is an indicator equaling 1 if the worker moves in period t, zero otherwise,
and wt is the wage. Assume that A0 > 0 is given and that the worker faces the
no-borrowing constraint, At ≥ 0 for all t.
a. Formulate the Bellman equation for the worker.
b. Write a Matlab program to solve the worker’s Bellman equation. Show the
optimal decision rules computed for the following parameter values: m = .9, p =
.8, R = 1.02, β = .95, w g = 1.4, w b = 1, σ = 4. Use a range of assets levels of
[0, 3]. Describe how the decision to move depends on wealth.
c. Compute the Markov chain governing the transition of the individual’s state
(A, w). If it exists, compute the invariant distribution.
d. In the fashion of Bewley, use the invariant distribution computed in part c
to describe the distribution of wealth across a large number of workers all facing
this same optimum problem.

    Solution
a. A worker enters the period with asset holdings A and a job that payed w k ∈
{wg , wb } last period. To fix notation, if w k = wg then w−k = wb and vice versa.
At the beginning of the period the worker decides to move (M ) or stay (S). After
that decision she chooses asset holdings optimally. Consumption is such that the
budget constraint is satisfied.
                      ©                                   ª
 v(A, w k ) = max qM , pqS (wk ) + (1 − p)qS (w−k )
                  M,S
                      ©           g     0                     0     g                       0     b
                                                                                                      ª
       qM = max        u(RA   + w   − A    − m) + βpv(A         , w   ) + β(1 − p)v(A         , w   )
                  A0
         g
                      ©           g     0           0     g                       0     b
                                                                                            ª
   qS (w ) = max       u(RA   + w   − A   ) + βpv(A   , w   )   +  β(1   − p)v(A    , w   )
                  A0
         b
                      ©           b     0           0     b                      0      g
                                                                                            ª
   qS (w ) = max    0
                       u(RA   + w   − A   ) + βpv(A   , w   )   +  β(1   − p)v(A   ,  w   )     ,
                     A

A0 is given and there are no future binding borrowing constraints.
b. Correction: moving cost m = 0.4. The value conditional on a good wage in
the last period is higher than the value conditional on a low wage (see figure 14.
Conditional on the bad wage in the previous period, it is always optimal to move
(see figure 14). Conditional on the good wage, it is always optimal to not move
(see figure 14). The matlab program is in ex1402b.m .
c. The matlab program is in ex1402b.m.
214                                14. INCOMPLETE MARKETS MODELS

                                                      Value of worker
                        −2.6
                                                                                       bad wage
                                                                                       good wage
                        −2.7


                        −2.8


                        −2.9


                         −3
              v(A;w)

                        −3.1


                        −3.2


                        −3.3


                        −3.4


                        −3.5


                        −3.6
                               0    0.5         1          1.5            2      2.5               3
                                                      Asset holdings



                                          Figure 1. Exercise 14.2 a
                                                    The moving decision
                        −2.7
                                                                              moving − bad wage
                                                                              staying − bad wage
                        −2.8


                        −2.9


                         −3


                        −3.1
              Utility




                        −3.2


                        −3.3


                        −3.4


                        −3.5


                        −3.6


                        −3.7
                               0    0.5         1          1.5            2      2.5               3
                                                      Asset holdings



                                          Figure 2. Exercise 14.2 b

d. The matlab program is in ex1402b.m.

      Exercise 14.3. Unemployment
There is a continuum of workers with identical probabilities λ of being fired each
period when they are employed. With probability µ ∈ (0, 1), each unemployed
worker receives one offer to work at wage w drawn from the cumulative distri-
bution function F (w). If he accepts the offer, the worker receives the offered
                                   14. INCOMPLETE MARKETS MODELS                                        215

                                                    The moving decision
                        −2.6
                                                                              moving − good wage
                                                                              staying − good wage
                        −2.7


                        −2.8


                        −2.9


                         −3
              Utility

                        −3.1


                        −3.2


                        −3.3


                        −3.4


                        −3.5


                        −3.6
                               0    0.5         1          1.5            2       2.5               3
                                                      Asset holdings



                                          Figure 3. Exercise 14.2 c


wage each period until he is fired. With probability 1 − µ, an unemployed worker
receives no offer this period. The probability µ is determined by the function
                                                      0
µ = f (U ), where U is the unemployment
                                  P∞ t rate, and f (U ) < 0, f (0) = 1, f (1) = 0.
A worker’s utility is given by E t=0 β yt , where β ∈ (0, 1) and yt is income in
period t, which equals the wage if employed and zero otherwise. There is no
unemployment compensation. Each worker regards U as fixed and constant over
time in making his decisions.

a. For fixed U , write the Bellman equation for the worker. Argue that his optimal
policy has the reservation wage property.

b. Given the typical worker’s policy (i.e., his reservation wage), display a differ-
ence equation for the unemployment rate. Show that a stationary unemployment
rate must satisfy
                                            £         ¤
                         λ(1 − U ) = f (U ) 1 − F (w̄) U,

where w̄ is the reservation wage.

c. Define a stationary equilibrium.

d. Describe how to compute a stationary equilibrium. You don’t actually have
to compute it.


   Solution
216                         14. INCOMPLETE MARKETS MODELS

a. Assume the support of F is [0, B] and F (B) = 1, F (0) = 0. The Bellman
equation for an unemployed and the employed worker is
                 Z B       ½                Z 1               ¾                       Z 1
  u                              e    0           u  0      0      0
V (U ) = f (U )       max V (w ), β             V (U )df (U ) dF (w ) + (1 − f (U ))β     V u (U 0 )df (U 0 )
                  0   A,R                    0                                         0
                    Z 1
V e (w) = w + λβ        V u (U 0 )df (U 0 ) + (1 − λ)βV e (w).
                        0
Rewrite the value of being employed
                   ·            ¸    ·           ¸Z 1
           e              1                λβ
          V (w) =                 w+                  V u (U 0 )df (U 0 ).
                     1 − β + λβ        1 − β + λβ 0
Substituting this into the value function of being unemployed we obtain the Bell-
man equation
(165)
                Z B
  u
V (U ) = f (U )     max {Aw + λβAE (V u ) , βE (V u )} dF (w 0 )+(1−f (U ))βE (V u ) ,
                  0   A,R

where
                                           Z B
                              E (w) =            w0 dF (w0 )
                                            0
                                           Z 1
                             E (V u ) =   V u (U 0 )df (U 0 )
                                       ·0             ¸
                                             1
                                   A =                  .
                                        1 − β + λβ
For a fixed U the optimal policy will be a reservation policy. Conditional on
receiving an offer, the unemployed worker accepts the draw w iff w ≥ w̄, where
                                  1 − λA
                            w̄ = β       E (V u )
                                     A
                               = β(1 − β − λ + λβ)E (V u ) .
The reservation wage depends on the expected value of unemployment, because
that will determine the probability of getting an offer when fired in the future.
b. The unemployment rate evolves as follows: a fraction λ of the employed (1−U )
get fired and a fraction f (U )(1 − F (w̄)) of the unemployed receive an offer and
accept it. The rest of the unemployed stay in unemployment.
                      U 0 = λ(1 − U ) + U (1 − [f (U )(1 − F (w̄))]).
In a stationary equilibrium U 0 = U . The above equation simplifies to
(166)                        λ(1 − U ) = U f (U )(1 − F (w̄)).

c. A stationary equilibrium is an unemployement rate U , a policy funtion w̄,
such that the policy function solves the worker’s problem in equation (165) and
the equilibrium unemployment rate satisfies equation (166).
                            14. INCOMPLETE MARKETS MODELS                         217

d. Fix the unemployment rate and solves the household problem by iterating
to convergence on the Bellman equation (165). Calculate the cutoff rule for the
household and the resulting unemployment rate in the next period U 0 . If U 0 > U ,
lower U and solve the household problem again. Continue this algorithm until
the the resulting U 0 = U .

   Exercise 14.4. Asset insurance
Consider the following setup. There is a continuum of households who maximize
                                   X∞
                                 E      β t u(ct ),
                                          t=0

subject to
             ct + kt+1 + τ ≤ y + max(xt , g)ktα ,    ct ≥ 0, kt+1 ≥ 0, t ≥ 0,
where y > 0 is a constant level of income not derived from capital, α ∈ (0, 1), τ
is a fixed lump sum tax, kt is the capital held at the beginning of t, g ≤ 1 is an
“investment insurance” parameter set by the government, and xt is a stochastic
household-specific gross rate of return on capital. We assume that xt is governed
by a two-state Markov process with stochastic matrix P , which takes on the two
values x̄1 > 1 and x̄2 < 1. When the bad investment return occurs, (xt = x̄2 ),
the government supplements the household’s return by max(0, g − x̄2 ).
The household-specific randomness is distributed identically and independently
across households. Except for paying taxes and possibly receiving insurance pay-
ments from the government, households have no interactions with one another;
there are no markets.
Given the government policy parameters τ, g, the household’s Bellman equation
is
                        £                            ¤     X
                                         α     0
       v(k, x) = max
                  0
                     {u   y + max(x, g)k   − k   − τ   + β   v(k 0 , x0 )P (x, x0 )}.
                   k
                                                              x0

The solution of this problem is attained by a decision rule
                                        k 0 = G(k, x),
that induces a stationary distribution λ(k, x) of agents across states (k, x).
The average (or per capita) physical output of the economy is
                                XX
                          Y =          (x × k α )λ(k, x).
                                    k     x

The average return on capital to households, including the investment insurance,
is                  X                                   X
               ν=      x̄1 k α λ(k, x1 ) + max(g, x̄2 )   k α λ(k, x2 ),
                        k                                 k
which states that the government pays out insurance to all households for which
g > x̄2 .
Define a stationary equilibrium.
218                        14. INCOMPLETE MARKETS MODELS

      Solution
A stationary equilibrium is a policy function G(k, x), a probability distribution
λ(k, x), and positive real numbers (Y, ν) such that
   (i) The policy function solves the household problem in (??)
   (ii) The stationary distribution λ(k, x) is induced by P (x0 , x) and G(k, x) :
                                    X      X
                     λ(k 0 , x0 ) =             λ(k, x)P (x0 , x).
                                    {k:k0 =G(k,x)} x0

      (iii) The average value of output is implied by the households’ decision rules
                                 XX
                            Y =         [xG(k, x)α ] λ(k, x),
                                    k     x

and the average return on capital is implied by the households’ decision rules
          X                                                X
      ν=      [x̄1 G(k, x̄1 )α ] λ(k, x̄1 ) + max(g, x̄2 )   [x̄2 G(k, x̄2 )α ] λ(k, x̄2 ).
              k                                              k



      Exercise 14.5.
One of a continuum of ex ante identical households, each with initial assets A0 ,
wants to maximize
                             X∞
                     E0 − .5     β t (ct − b)2 , β ∈ (0, 1)
                                    t=0
subject to the sequence of budget constraints
(1)                       At+1 = R(At + yt − ct ),          A0 given
where yt is an i.i.d. endowment sequence with mean y, R = β −1 , ct is consumption
at t. Here b is a bliss level of consumption satisfying b >> y. The household is
also subject to the following constraint on its assets:
                                        lim β t A2t < +∞.
                                        t→∞
This condition rules out ‘Ponzi schemes’.
a. Show that the household’s optimal decision rule can be expressed as
                                 ct = (1 − R−1 )(yt + At ).
Please interpret this condition. Show under the optimal consumption plan that
ct is a martingale. Prove that under the optimal consumption plan ct+1 = ct +
(1 − R−1 )(yt+1 − ȳ).
b. Show under the optimal consumption plan
                                   At+1 = At + R−1 yt .
Show that assets are a martingale.
c. Does the martingale convergence theorem tell you anything about the conver-
gence of ct or At ?
                        14. INCOMPLETE MARKETS MODELS                          219

d. Suppose that yt is an i.i.d. Gaussian process with mean y and variance σy2 .
Consider a cohort of ex ante identical agents each of whom starts with the same
A0 . Compute the means and variances of the cross section distributions of con-
sumption for t ≥ 0. Compute the means and variances of the cross section
distributions of assets for t ≥ 0. Plot these for t = 0, . . . , 200. Comment.
e. Extra credit Solve the typical household’s problem by formulating it as an
optimal linear regulator using olrp.m in Matlab. Does the solution from Matlab
agree with what you found by hand? Why or why not? Hint: Does your optimal
linear regulator impose condition (1)?

   Solution
a. Solve the difference equation
                             1
                               At+1 = At + (yt − ct ) ,
                             R
forward to obtain
                    X∞ µ ¶j                  X∞ µ ¶j
                          1                        1
                              Et ct+j = At +            Et yt+j ,
                    j=0
                         R                   j=0
                                                  R
maximize                       ∞
                               X
                          E0         β t u(yt + At − R−1 At+1 ).
                               t=0
The Euler equations are :
                               uc (ct ) = Et Rβuc (ct+1 ).
This and Rβ = 1 implies that consumption is a martingale
(167)                                   ct = Et ct+1 .
Substituting this condition into the budget constraint gives
                X∞ µ ¶j              X∞ µ ¶j
                     1                    1
             ct             = At +             Et yt+j
                j=0
                     R               j=0
                                          R
                                         Ã       ∞ µ ¶j
                                                                   !
                                                X      1
                        ct = (1 − R−1 ) At +               Et yt+j
                                                j=0
                                                       R
(168)                    ct = (1 − R−1 ) (At + yt ) + R−1 ȳ.
Equations (167) and (168) characterize the optimal consumption plan. Writing
the consumption rule for period t and t + 1 and using the martingale property of
consumption we obtain:
             ct+1 = (R − 1)At + (R − 1) (yt − ct ) + (1 − R−1 )yt+1 + R−1 ȳ
          Et ct+1 = (R − 1)At + (R − 1) (yt − ct ) + ȳ
        ct+1 − ct = (1 − R−1 )(yt+1 − ȳ).
Thus, ct+1 = ct + (1 − R−1 )(yt+1 − ȳ).
220                    14. INCOMPLETE MARKETS MODELS

b. The optimal asset holdings satisfy:
                             ct = (1 − R−1 ) (At + yt ) + R−1 ȳ
                          ct+1 = (1 − R−1 ) (At+1 + yt+1 ) + R−1 ȳ
          (1 − R−1 )(yt+1 − ȳ) = (1 − R−1 )(At+1 + yt+1 − At − yt ).
Taking expectations on each side, we find that assets follow a random walk:
Et At+1 = At .Using (168) into the law of motion of assets we get:
                      R−1 At+1 = R−1 (At + yt ) − R−1 ȳ
                          At+1 = At + yt − ȳ.
c. The martingale convergence theorem says that bounded martingales converge.
Boundedness requires the existence of a finite M such that E[|At |] < M . The
asset holdings and consumption are a martingale. But they are not bounded.
The theorem does not apply. Assets and consumption scaled by the standard
deviation of the income process converge to a Brownian motion.
d. The cross-sectional mean of consumption and assets stays constant but their
cross-sectional dispersion increase. The matlab code is in ex1405.m . This con-
firms the lack of convergence found in the previous part.
e. Upon solving this problem with the olrp we find that the optimal solution is
to consumpe the bliss level of consumption b. This solution does not impose the
no-Ponzi scheme condition.
                           14. INCOMPLETE MARKETS MODELS                                                 221



Figure 4. Exercise 14.5 : Cross-sectional Mean and Dispersion of
Consumption and Assets

 0.4001                                             0.012

                                                     0.01
 0.4001
                                                    0.008

    0.4                                             0.006

                                                    0.004
    0.4
                                                    0.002

 0.3999                                                0
          0       100 200 300 400 500                   0      100 200 300 400 500
              Cross−sectional Mean of Consumption    Cross−sectional Standard Deviation of Consumption

               −3
          x 10
     2                                               0.25

                                                      0.2
     1
                                                     0.15

                                                      0.1
     0
                                                     0.05

    −1                                                 0
          0       100 200 300 400 500                    0     100 200 300 400 500
                 Cross−sectional Mean of Assets         Cross−sectional Standard Deviation of Assets
      CHAPTER 15

Optimal social insurance




           223
224                            15. OPTIMAL SOCIAL INSURANCE

      Exercise 15.1. Lagrangian method with two-sided no commitment
Consider the model of Kocherlakota with two-sided P∞ lack    of commitment. There
                                                         t
are two consumers, each having preferences E0 t=0 β u[ci (t)], where u is increas-
ing, twice differentiable, and strictly concave, and where ci (t) is the consumption
of consumer i. The good is not storable, and the consumption allocation must sat-
isfy c1 (t)+c2 (t) ≤ 1. In period t, consumer 1 receives an endowment of yt ∈ [0, 1],
and consumer 2 receives an endowment of 1 − yt . Assume that yt is i.i.d. over
time and is distributed according to the discrete distribution Prob(yt = ys ) = Πs .
At the start of each period, after the realization of ys but before consumption has
occurred, each consumer is free to walk away from the loan contract.
a. Find expressions for the expected value of autarky, before the state ys is
revealed, for consumers of each type. (Note: These need not be equal.)
b. Using the Lagrangian method, formulate the contract design problem of find-
ing an optimal allocation that for each history respects feasibility and the partic-
ipation constraints of the two types of consumers.
c. Use the Lagrangian method to characterize the optimal contract as completely
as you can.

      Solution
a. The value of autarchy consists of the present discounted value of future labor
income. For agent 1 it is
                                                 ∞
                                                 X
                                   v1aut = E−1         β t u(yt ),
                                                 t=0

      and for agent 2, it is
                                               ∞
                                               X
                                 v2aut = E−1         β t u(1 − yt ).
                                               t=0

b. The Lagrangean associated with the optimal contract, for given initial utility
promise to agent 1, v, is:
                                         h P                               i 
                                             ∞
              X∞
                        u(1 − ct ) + αt Et j=0 β u(ct+j ) − [u(yt ) + βv1 ] 
                                        1       j                       aut
  J = E−1         βt            h                                          i
                      +αt2 Et P∞ β j u(1 − ct+j ) − [u(1 − yt ) + βv2aut ] 
              t=0                      j=0
             "      ∞
                                     #
                   X
         +φ E−1        β t u(ct ) − v .
                      t=0

c. Using Abel’s partial summation formula and the law of iterated expectations,
we can rewrite J as
        X∞      ½                                                                             ¾
              t   (1 + µ2t )u(1 − ct ) + (φ + µ1t )u(ct ) − (µ1t − µ1t−1 ) [u(yt ) + βv1aut ]
J = E−1     β                                                                                  −φv,
                                   −(µ2t − µ2t−1 ) [u(1 − yt ) + βv2aut ]
            t=0
                         15. OPTIMAL SOCIAL INSURANCE                           225

where
                          µ1t = µ1t−1 + αt1     µ1−1 = 0
                          µ2t = µ2t−1 + αt2     µ2−1 = 0.
In addition to the complementary slackness conditions, the first order condition
with respect to ct is
                                1 + µ2t     uc (ct )
                                      1
                                        =              .
                                φ + µt    uc (1 − ct )
Assume that both agent’s have the same history of binding constraints up to
time t − 1 (µ2t−1 = µ1t−1 ). When agent 1’s participation constraint binds whereas
agent 2’s constraint is not binding then agent 1’s multiplier is increased whereas
agent 2’s multiplier stays constant (αt1 > 0, αt2 = 0). Then the optimal contract
prescribes increasing agent 1’s consumption ct at the expense of agent 2’s con-
sumption (1 − ct ). When nobody’s participation constraint binds the allocation
of consumption is identical to the one of the previous period and a function of all
past binding constraints.

   Exercise 15.2. Optimal unemployment compensation
a. Write a program to compute the autarky solution, and use it to reproduce
Hopenhayn and Nicolini’s calibration of r, as described in text.
b. Use your calibration from part a. Write a program to compute the optimum
value function C(V ) for the insurance design problem with incomplete informa-
tion. Use the program to form versions of Hopenhayn and Nicolini’s table 1,
column 4 for three different initial values of V , chosen by you to belong to the
set (Vaut , V e ).

   Solution
a. See first part of program hopnic.m . The value under autarky is 16759.
b. See hopnic.m, hnval.m and hnval2.m . The replacement rate graph is plotted
for initial promised utilities [16800, 16942, 17050]. The graph is in figure ??

   Exercise 15.3. Taxation after employment
Show how the functional equation (15.61) and (15.62) would be modified if the
planner were permitted to tax workers after they became employed.

   Solution
If the planner were permitted to tax workers after they became employed the
equations for the optimal unemployment contract would become
              C(V ) = minu {c + βp(a)C(V e ) + β(1 − p(a))C(V u )} ,
                      c,a,V

subject to the promise keeping constraint
                   u(c) − a + β [p(a)V e + (1 − p(a))V u ] ≥ V,
226                             15. OPTIMAL SOCIAL INSURANCE

                 2.5




                  2




                 1.5




                  1




                 0.5




                  0
                       0   10   20    30    40    50   60      70   80      90   100



                                     Figure 1. Exercise 15.2

and the incentive compatibility constraint
                            βp0 (a) [V e − V u ] ≤ 1        = 1 if a > 0,
but were the definition for the value of employment is adjusted for a permanent
tax on labor income τ :
                                       u(w − τ )
                                 Ve =            .
                                         1−β


      Exercise 15.4. A model of Dixit, Grossman, and Gul
For each date t ≥ 0, two political parties divide a “pie” of fixed sizeP 1. Party        1
receives a sequence of shares y = {yt }t≥0 and has utility function E ∞   t=0 β t
                                                                                  U (y t ),
where β ∈ (0, 1), E is the mathematical expectation operator, and U (·) is an
increasing, strictly concave, twice differentiable
                                                 Pperiod   utility function. Party 2
                                                   ∞     t
receives share 1 − yt and has utility function E t=0 β U (1 − yt ). A state variable
Xt is governed by a Markov process; X resides in one of K states. There is
a partition S1 , S2 of the state space. If Xt ∈ S1 , party 1 chooses the division
yt , 1 − yt , where yt is the share of party 1. If Xt ∈ S2 , party 2 chooses the
division. At each point in time, each party has the option of choosing “autarky,”
in which case its share is 1 when it is in power and zero when it is not in power.
Formulate the optimal history-dependent sharing rule as a recursive contract.
Formulate the Bellman equation. Hint: Let V [u0 (x), x] be the optimal value for
party 1 in state x when party 2 is promised value u0 (x).

      Solution
                          15. OPTIMAL SOCIAL INSURANCE                          227

The Bellman equation for V (u0 (x), x) is
                 V (u0 (x), x) = max {U (y) + βE[V (w(x0 ), x0 )|x]}
                                (w(.),y)

where the maximization is subject to the following several constraints:

   Promise Keeping:
                      u0 (x) = U (1 − y) + βE[w(x0 )|x],           ∀x.
Incentive constraints (choice of sharing rule):

            U (1 − y) + βE[w(x0 )|x] ≥ U (1) + βE[Uaut
                                                   2
                                                       (x0 )|x] ∀x ∈ S2 .
          U (y) + βE[V (w(x0 ), x0 )|x] ≥ U (1) + βE[Uaut
                                                      1
                                                          (x0 )|x] ∀x ∈ S1 .
Incentive Constraint (No Quitting):

                             w(x0 ) ≥ Uaut
                                       2
                                           (x0 ) ∀x0 ∈ S2
                         V (w(x0 ), x0 ) ≥ Uaut
                                            1
                                                (x0 ) ∀x0 ∈ S1 .


   Exercise 15.5. Two-state numerical example of social insurance
Consider an endowment economy populated by a large number of individuals
with identical preferences,
               X∞               X∞     µ        ¶
                    t                t      c2t
            E      β u(ct ) = E     β 4ct −       , with β = 0.8.
               t=0              t=0
                                            2
With respect to endowments, the individuals are divided into two types of equal
size. All individuals of a particular type receive 0 goods with probability 0.5 and
2 goods with probability 0.5 in any given period. The endowments of the two
types of individuals are perfectly negatively correlated so that the per capita en-
dowment is always 1 good in every period. The social planner attaches the same
welfare weight to all individuals. Without access to outside funds or borrowing
and lending opportunities, the social planner seeks to provide insurance by sim-
ply reallocating goods between the two types of individuals. The design of the
social insurance contract is constrained by a lack of commitment on behalf of the
individuals. The individuals are free to walk away from any social arrangement,
but they must then live in autarky evermore.
a. Compute the optimal insurance contract when the social planner lacks mem-
ory; that is, transfers in any given period can be a function only of the current
endowment realization.
b. Can the insurance contract in part a be improved if we allow for history-
dependent transfers?
c. Explain how the optimal contract changes when the parameter β goes to one.
Explain how the optimal contract changes when the parameter β goes to zero.
228                         15. OPTIMAL SOCIAL INSURANCE

      Solution

a. It is useful to compute a benchmark utility level vpool that is attained in the
unconstrained symmetric allocation,
                                     ∞
                                     X                   3.5
                      vpool = E            β t u(1) =        = 17.5,
                                     t=0
                                                        1−β
and the utility level associated with autarky,
                            ∞
                            X                                  3
                 vaut = E         β t [0.5u(0) + 0.5u(2)] =       = 15.
                            t=0
                                                              1−β
In the memory-less insurance contract, let c and 2 − c be the consumption level
of an agent with a current endowment of 2 and 0 units, respectively. Evidently,
if any participation constraint is binding in the design of the optimal contract, it
is the participation constraint of the former agent,
                              u(c) + βv ≥ u(2) + βvaut ,
where v is an agent’s continuation value of remaining within the social insurance
arrangement. The continuation value satisfies
                     v = 0.5[u(c) + βv] + 0.5[u(2 − c) + βv],
or
                                0.5u(c) + 0.5u(2 − c)
                              v=                      .
                                        1−β
After substituting equation 15 into equation 15 at equality, and invoking the
specific parametrization in the question, we arrive at the following quadratic
equation
                             0.625c2 − 2c + 1.5 = 0.
The equation has two roots, as given by the quadratic formula,
                                   √
                               2 ± 4 − 3.75      2,
                          c=                  =
                                    1.25        1.2.
Thus, the optimal contract has c = 1.2 and it attains the expected utility level
                                  0.5u(1.2) + 0.5u(0.8)
                        v=                              = 17.4.
                                          1−β

b. The solution in part a cannot be improved upon. The reason is that the shocks
are i.i.d. The solution described in the previous part smooths consumption as
much as possible when agents can revert to autarky.
c. For a sufficiently high β, the first-best outcome (1,1) with utility v pool is
attainable since constraint 15 will no longer be binding. We can solve for the
range of β where this is true,
                                    vpool ≥ u(2) + βvaut ,
                         15. OPTIMAL SOCIAL INSURANCE                          229

or
                     3.5             3                      5
                          >6+β                =⇒       β≥ .
                    1−β            1−β                      6
In contrast, when β goes to zero, less and less risk sharing can be achieved. For
β < .66 the autarkic solution (2,0) results.


    Exercise 15.6. Optimal unemployment compensation with unobservable wage
offers
Consider an unemployed person with preferences given by
                                      ∞
                                      X
                                  E         β t u(ct ) ,
                                      t=0

where β ∈ (0, 1) is a subjective discount factor, ct ≥ 0 is consumption at time
t, and the utility function u(c) is strictly increasing, twice differentiable, and
strictly concave. Each period the worker draws one offer w from a uniform wage
distribution on the domain [wL , wH ] with 0 ≤ wL < wH < ∞. Let the cumulative
density function be denoted F (x) = prob{w ≤ x}, and denote its density by
f , which is constant on the domain [wL , wH ]. After the worker has accepted
a wage offer w, he receives the wage w per period forever. He is then beyond
the grasp of the unemployment insurance agency. During the unemployment
spell, any consumption smoothing has to be done through the unemployment
insurance agency because the worker holds no assets and cannot borrow or lend.
a. Characterize the worker’s optimal reservation wage when he is entitled to a
time-invariant unemployment compensation b of indefinite duration.
b. Characterize the optimal unemployment compensation scheme under full in-
formation. That is, we assume that the insurance agency can observe and control
the unemployed worker’s consumption and reservation wage.
c. Characterize the optimal unemployment compensation scheme under asym-
metric information where the insurance agency cannot observe wage offers, though
it can observe and control the unemployed worker’s consumption. Discuss the op-
timal time profile of the unemployed worker’s consumption level.

     Solution
a. When the worker is entitled to a time-invariant unemployment compensation
b his problem is
(169)           V u = max {u(b) + βF (w̄)V u + β(1 − F (w̄))V e } ,
                      w̄≥0

where the value of being employed is
                                            Z wH
                         e     1                   u(w0 )
(170)                  V =                                dF (w0 ).
                           1 − F (w̄)        w̄    1−β
230                       15. OPTIMAL SOCIAL INSURANCE

The first order condition w.r.t. w̄ is
                                             u(w̄)
(171)                                Vu ≤          ,
                                             1−β
with equality if w̄ > 0.
    The worker searches until she finds a job, which leaves her at least as well off
as the value of unemployment. The optimal policy is to accept a job when w ≥ w̄
and to reject otherwise.
b. Under full information the optimal compensation scheme is
                         C(V ) = minu {c + βF (w̄)C(V u )} ,
                                  c,w̄,V

subject to the promise keeping constraint
(172)                 V ≤ u(c) + βF (w̄)V u + β(1 − F (w̄))V e ,
where the value of employment is as in equation (170). Denote by θ the Lagrange
multiplier on the promise keeping constraint. The first order conditions are
                                       1
                             u0 (c) =
                                       θ·            ¸
                                 u         u   u(w̄)
                          C(V ) = θ V −                .
                                               1−β
                         C 0 (V u ) = θ.
The Benveniste-Scheinkman condition is
                                       C 0 (V ) = θ.
Therefore the value of unemployment is constant
                         C 0 (V u ) = θ = C 0 (V ) =⇒ V u = V,
given that C is continuous and convex. Likewise, the optimal consumption pat-
tern cF I is constant. This consumption level cF I is higher than the unemployment
benefit b of part a, because the insurance scheme is costly: (C (V u ) ≥ 0). The
latter implies that VFuI > u(1−β
                              w̄F I )
                                      , whereas this relationship holds with equality in
the autarchy case of part a.

c. Under asymmetric info the optimal contract is
                         C(V ) = minu {c + βF (w̄)C(V u )} ,
                                  c,w̄,V

subject to the promise keeping constraint
(173)                 V ≤ u(c) + βF (w̄)V u + β(1 − F (w̄))V e ,
the incentive compatibility constraint
                                         u(w̄)
                                     Vu ≤      ,
                                        1−β
where the value of employment is as in equation (170). Denote by θ the Lagrange
multiplier on the promise keeping constraint and by η the Lagrange multiplier on
                          15. OPTIMAL SOCIAL INSURANCE                            231

the incentive compatibility constraint. The first order conditions w.r.t. c, w̄, and
V u are
                              1
                    u0 (c) =    ,
                              θ·                          ¸    · 0      ¸
                        u               u           u(w̄)        u (w̄)
           βf (w̄)C(V ) = θ βf (w̄)V − βf (w̄)              +η            ,
                                                    1−β          1−β
         βF (w̄)C 0 (V u ) = θβF (w̄) − η.
For w̄ > 0, the second first order condition simplifies to
                                             1 u0 (w̄)
                             C(V u ) = η                 ,
                                           βf (w̄) 1 − β
by virtue of the first order condition from the autarky problem holding with
equality. The third first order condition simplifies to
                                                 1
                              C 0 (V u ) = θ −         η.
                                               βF (w̄)
The Benveniste-Scheinkman condition is
                                     C 0 (V ) = θ.
Therefore, because η > 0, F (w̄) > 0, the value of unemployment is decreasing as
the unemployment spell continues:
                           C 0 (V u ) < C 0 (V ) =⇒ V u < V.
by virtue of the convexity of C. The optimal consumption pattern c is decreasing
as well in order to provide the proper incentives to set a low enough w̄. That is,
w̄ decreases over time.

   Exercise 15.7. Convergence in Kocherlakota model

We return to Kocherlakota’s study of the conditions under which there obtains
convergence to a unique nontrivial invariant distribution of continuation values.
Suppose that there exists a first-best sustainable allocation. Among such alloca-
tions let v F B be the highest initial utility that can be to the first agent and let
vF B be the lowest possible utility that can be assigned to the first agent. Then
prove that for any v < vF B , limt→∞ vt = vF B , and that and for any initial utility
satisfying v > v F B , limt→+∞ vt = v F B .

   Solution
In the first best allocation neither agent’s participation constraint binds with
strictly positive probability. Let v denote the promised utility for agent 1. As-
sume its initial level is v < vF B . Denote by λs the Lagrange multiplier on agent
1’s participation constraint in state s and by θs the multiplier on agent 2’s par-
ticipation constraint in state s. Let µ be the multiplier on the promise keeping
232                       15. OPTIMAL SOCIAL INSURANCE

constraint. Since agent 1’s utility promise is less than vF B , her participation con-
straint binds and agent 2’s constraint is not binding (λs > 0, θs = 0). From the
first order conditions for the closed economy model, we know
                                 πs uc (cs ) = µπs uc (cs ) + λs uc (cs )
                πs βPw (ws ) + πs µβ + λs = 0,
using these conditions and the Benveniste-Scheinkman condition Pw (v) = −µ
we obtain Pw (ws ) < Pw (v) which implies (by the concavity of P ) that ws > v.
Agent 1’s utility promise is a nondecreasing sequence in this region. The set
of sample paths along which every income state is realized has measure one.
Along each of these sample paths the utility promise for agent 1 is increasing.
Agent 2’s participation constraint does not bind in this region. Note that w s > v
implies that E (ws ) > v. Therefore w is a sub-martingale, bounded by vF B . By
the martingale convergence theorem it converges to vF B . Agent 1’s v will not
increase above vF B in a Pareto optimal solution. Suppose it did, that is for a
time τ : vτ −1 ≤ vF B and vτ > vF B . If vτ −1 = vF B then by definition of the first
best allocation vτ = vF B , a contradiction. If vτ −1 < vF B then setting vτ∗ = vF B
would satisfy agent 1 and 2’s participation constraint and make agent 2 strictly
better off P (vτ∗ ) > P (vτ ) ,a contradiction to a Pareto optimal allocation. We
have shown that starting at v < vF B , w is a monotone increasing sequence which
converges to vF B . Likewise, for v > v F B : limt→∞ wt = v F B

      Exercise 15.8. Full unemployment insurance
An unemployed worker orders stochastic processes of consumption, search effort
{ct , at }∞
          t=0 according to
                              ∞
                              X
                           E     β t [u(ct ) − at ] ,
                                   t=0
where β ∈ (0, 1) and u(c) is strictly increasing, twice differentiable, and strictly
concave. It is required that ct ≥ 0 and at ≥ 0.
All jobs are alike and pay wage w > 0 units of the consumption good each
period forever. After a worker has found a job, the unemployment insurance
agency can tax the employed worker at a rate τ consumption goods per period.
The unemployment agency can make τ depend on the worker’s unemployment
history. The probability of finding a job is p(a) where p is an increasing and
strictly concave and twice differentiable function of a, satisfying p(a) ∈ [0, 1] for
a ≥ 0, p(0) = 0. The consumption good is non-storable. The unemployed person
cannot borrow or lend and holds no assets. If the unemployed worker is to do
any consumption smoothing, it has to be through the unemployment insurance
agency. The insurance agency can observe the worker’s search effort and can
control his consumption. An employed worker’s consumption is w − τ per period.
a. Let Vaut be the value of an unemployed worker’s expected discounted utility
when he has no access to unemployment insurance. An unemployment insurance
agency wants to insure unemployed workers and to deliver expected discounted
                         15. OPTIMAL SOCIAL INSURANCE                           233

discounted utility V > Vaut at minimum expected discounted cost C(V ). The
insurance agency also uses the discount factor β. The insurance agency controls
c, a, τ , where c is consumption of an unemployed worker. The worker pays the tax
τ only after he becomes employed. Formulate the Bellman equation for C(V ).
b. Prove that the optimal policy of the insurance agency is a policy that satisfies
c = w − τ.

   Solution
a. The Bellman equation is:
                              ½                             ·     ¸¾
                                                 u             τ
         C(V ) = min           c + β[1 − p(a)]C(V ) − βp(a)          ,
                 c,a,V u ,V e                                 1−β
   where the minimization is subject to the promise keeping constraints


                  V ≤ u(c) − a + β [p(a)V e + (1 − p(1))V u ]
                                                  u(w − τ )
                                            Ve =             .
                                                    1−β

b. The optimal policy is to set a constant consumption level c = w − τ . Note
that this makes the worker equally well off in employment as in unemployment.
Denote by λ the Lagrange multiplier on the promise keeping constraint. The first
order conditions of the problem with respect to c, a, V u respectively are:
(174)                                1 = λu0 (c)
                    ·                ¸
                                 τ
(175)         βp0 (a) C(V u ) +        = λ [1 − βp0 (a)(V e − V u )]
                              1−β
(176)              β(1 − p(a))C 0 (V u ) = β(1 − p(a))λ.
The Benveniste-Scheinkman condition says
(177)                               C 0 (V ) = λ.
Combining equations (177) and (176), we see that V u = V . It is optimal to keep
the utility promises constant across time. From this and from equations (174)
and (175) it follows that it is also optimal to keep consumption and search effort
constant during the unemployment spell. Consumption is fully smoothed in un-
employment. Constant consumption c and search effort a during unemployment
require a constant tax rate τ . To find the optimal constant tax rate, take the
first order condition with respect to τ .
                                    1
                                      = u0 (w − τ ).
                                    λ
This and equation (174) proof the claim. Consumption is only smoothed across
states of employment and unemployment when V e = V u . This is only the case
when c = w − τ . Risk aversion of the agent makes it optimal for the social
234                        15. OPTIMAL SOCIAL INSURANCE

insurance agency to equate marginal utility across states of employment and
unemployment by setting a tax/transfer τ such that c = w − τ .

      Exercise 15.9. Kocherlakota meets Markov
A household orders sequences {ct }∞
                                  t=0 of a single nondurable good by
                             X∞
                           E      β t u(ct ), β ∈ (0, 1)
                                   t=0

where u is strictly increasing, twice continuously differentiable, and strictly con-
cave with u0 (0) = +∞. The household receives an endowment of the consump-
tion good of yt that obeys a discrete state Markov chain with Pij = Prob(yt+1 =
y j |yt = y i ), where the endowment yt can take one of the I values [y 1 , . . . , y I ].
a. Conditional on having observed the time t value of the household’s endowment,
a social insurer wants to deliver expected discounted utility v to the household in
the least cost way. The insurer observes yt at the beginning of every period, and
contingent on the observed history of those endowments, can make a transfer τt
to the household. The transfer can be positive or negative and can be enforced
without cost. Let C(v, i) be the minimum expected discounted cost to the insur-
ance agency of delivering promised discounted utility v when the household has
just received endowment y i . (Let the insurer discount with factor β.) Write a
Bellman equation for C(v, i).
b. Characterize the consumption plan and the transfer plan that attains C(v, i);
find an associated law of motion for promised discounted value.
c. Now assume that the household is isolated and has no access to insurance.
Let v a (i) be the expected discounted value of utility for a household in au-
tarky, conditional on current income being y i . Formulate Bellman equations
for v a (i), i = 1, . . . , I.
d. Now return to the problem of the insurer mentioned in part b, but assume
that the insurer cannot enforce transfers because each period the consumer is
free to walk away from the insurer and live in autarky thereafter. The insurer
must structure a history-dependent transfer scheme that prevents the household
from every exercising the option to revert to autarky. Again, let C(v, i) be the
minimum cost for an insurer that wants to deliver promised value discounted
utility v to a household with current endowment i. Formulate Bellman equations
for C(v, i), i = 1, . . . , I. Briefly discuss the form of the law of motion for v
associated with the minimum cost insurance scheme.

      Solution
a. Let v be the promised value. The Bellman equation for the planner is
                                   (                      )
                                          X
                  C(v, i) = min      τ +β    Pij C(wj , j) ,
                               τ,{wj }Ij=1
                                                  j
                          15. OPTIMAL SOCIAL INSURANCE                               235

    subject to the promise keeping constraint
                                                           X
                            v ≤ u(yi + τ ) + β                 Pij wj
                                                           j
,
    or equivalently
                                                  (                           )
                                                               X
                C(v, i) = −yi + min                   c+β          Pij C(wj , j) ,
                                    c,{wj }Ij=1
                                                               j

    subject to the promise keeping constraint
                                                      X
                              v ≤ u(c) + β                 Pij wj .
                                                       j

b. The conjecture is that, without enforcement problem, the planner can achieve
full insurance. To prove this conjecture, we first prove that the cost function is
separable in v and i: C(v, i) = φ(v) + ψ(i). Separability requires that (i) the
set of functions of this form is closed and (ii) that the Bellman operator maps
separable functions of this form into separable functions.
    (i) Let Cn (v, i) → C(v, i) and Cn (v, i) = φn (v) + ψn (i) ∀n. Then Cn (v, i) −
Cn (v, 1) = ψn (i) − ψn (1) = fn (i) → C(v, i) − C(v, 1) = f (i). The latter is
independent of v since it is the limit of a sequence that is independent of v. Thus
C(v, i) = C(v, 1) + f (i) is separable.             n                      o
                                                           P
    (ii) We have to check that −yi + minc,{wj }I      c + β j Pij C(wj , j) is of the
                                                j=1
same form as C(v, i) = φ(v) + ψ(i). Let λ be the Lagrange multiplier on the
promise keeping constraint, then the first order condition w.r.t. wj yields

                        βPij φ0 (vj0 ) = λβPij ∀j ∈ {1, ..., I}
This implies that wj does not depend on j. Therefore we can rewrite the program
as
                                              X
                      −yi + min {c + βφ(w)} +     Pij ψ(j),
                              c,w
                                                               j

    subject to the promise keeping constraint

                                     v ≤ u(c) + βw.
    The solution to this program is separable in v and i.
    The separability of the cost function, the first order condition and the Benveniste-
Scheinkman condition C 0 (v, i) = λ imply that wj = v ∀j ∈ {1, ..., I}.
    So, for any given realization of today’s income yi , the planner offers a constant
utility promise in every state of nature tomorrow. From the first order condition
w.r.t. consumption 1 = u0 (c)φ0 (w), we find that the optimal consumption (and
hence transfer τ ) is also constant.
236                        15. OPTIMAL SOCIAL INSURANCE

c. The Bellman equation in autarky is:
                                                    X
                                 via = u(yi ) + β           Pij vja .
                                                        j

This is a linear system of n equations in n unknowns.

d. The problem with limited commitment imposes an additional participation
constraint on the allocations. The Bellman equation for the planner is
                                  (                         )
                                               X
                 C(v, i) = min      c − yi + β   Pij C(w, j) ,
                              c,{wj }Ij=1
                                                             j
      subject to the promise keeping constraint
                                            X
                               v ≤ u(c) + β     Pij wj ,
                                                    j
and subject to the enforcement constraint
                         X                      X
                u(c) + β    Pij wj ≥ u(yi ) + β   Pij vja = v a (i).
                             j                                j

The first order condition w.r.t. wj now becomes: βPij C 0 (wj , j) = (λ + η)βPij ,
where η is the Lagrange multiplier associated with the participation constraint.
The Benveniste-Scheinkman condition still is C 0 (v, i) = λ.
    Therefore, C 0 (wj , j) ≥ C 0 (v, i) in states of the world i where the enforcement
constraint binds. By the strict convexity of C, this implies that wj > vi . From
the first order condition w.r.t. the transfer τ , it follows that the transfer should
be strictly greater when η > 0. The current period transfer and the promised
utility rise at the same time for the agent whose constraint is binding. The
planner keeps the agent who threatens to walk away in the contract by increasing
today’s transfers and increasing tomorrow’s promises. When the constraint is not
binding, a constant utility promise and transfer level are optimal.
    Alternatively, the separability of the cost function shown in part (b) breaks
down because states with a binding promise keeping constraint introduce depen-
dence on i into the cost function. Full insurance is no longer optimal.

      Exercise 15.10. Wealth dynamics in money lender model
Consider the model in the text of the village with a money lender. The village
consists of a large number (e.g., a continuum) of households each of whom has
an i.i.d. endowment process that is distributed as
                                               1 − λ s−1
                           Prob(yt = y s ) =          λ
                                              1 − λS
where λ ∈ (0, 1) and y s = s + 5 is the sth possible endowment value, s = 1, . . . , S.
Let β ∈ (0, 1) be the discount factor and β −1 the gross rate of return at which
the money lender can borrow or lend. The typical household’s one-period utility
                          15. OPTIMAL SOCIAL INSURANCE                            237

function is u(c) = (1 − γ)−1 c1−γ where γ is the household’s coefficient of relative
risk aversion. Assume the parameter values (β, S, γ, λ) = (.95, 20, 2, .95).
Hint: The formulas given in the section ‘Recursive computation of the optimal
contract’ will be helpful in answering the following questions.
a. Using matlab, compute the optimal contract that the money lender offers a
villager, assuming that the contract leaves the villager indifferent between refusing
and accepting the contract.
b. Compute the expected profits that the money lender earns by offering this
contract for an initial discounted utility that equals the one that the household
would receive in autarky.
c. Let the cross section distribution of consumption at time t ≥ 0 be given by
the c.d.f. Prob(ct ≤ C) = Ft (C). Compute Ft . Plot it for t = 0, t = 5, t = 10,
t = 500.
d. Compute the money lender’s savings for t ≥ 0 and plot it for t = 0, . . . , 100.
e. Now adapt your program to find the initial level of promised utility v > v aut
that would set P (v) = 0. Hint: Think of an iterative algorithm to solve P (v) = 0.

   Solution
a. The matlab code is in ex1510.m , which uses Kochrecur.m . The optimal
contract is to give c0 = 6 and vaut = −1.73156 as long as the highest endowment
realization is lower than yj min = y2 = 7. For higher income realizations the
contract offers higher consumption and promised utility. For the highest income
state s = 20, cS = 11.87 and wS = −1.685.
b. Following the algorithm in the text, the money lender makes an expected
profit of 44.06 when holding the households at their reservation value.
c. The cumulative consumption distribution shifts to the right as agents largest
income realization thus far increases. In the limit it collapses to a spike at s = S.
See figure 2.
d. The money lender’s bank balance increases exponentially. His first period
saving equal his first period profits which are positive. He earns an interest rate
β −1 on this balance. In addition he obtains increasing profits as agents’ income
realizations become higher. See figure 3.
e. The initial value which makes the moneylender’s profits equal to zero will be
such that the moneylender pays out all expected earnings. For the parameters
that are given, E[ys ] = 13.82. The value associated with paying a constant con-
                               u(c)
sumption c = 13.82 forever is 1−β   = −1.4468. Note that this level is substantially
higher than wS = −1.685 in the contract derived in part a, which maximizes the
lender’s profits. Figure 4 plots the optimal contract, expected profits and bank
balance for the money lender for this initial value v = −1.4468.

   Exercise 15.11. Folk theorem
238                         15. OPTIMAL SOCIAL INSURANCE



                Figure 2. Exercise 15.10 a : Consumption Distribution

       1


      0.9


      0.8


      0.7


      0.6                   t=1


      0.5


      0.4                                    t=3


      0.3                                          t=5
                                                              t=10

      0.2
                                                                     t=25

      0.1
                                                                             t=100

       0
            6    8     10     12    14       16          18    20           22       24   26



Consider the following version of Kocherlakota’s model. The one-period utility
function is u(c) = (1 − γ)−1 (c + b)1−γ , where b = 5, γ = 2. The endowment
of agent 1 is yt and the endowment of agent 2 is 1 − yt , where yt is i.i.d. and
Prob(yt = y s ) = Πs = S −1 . Assume that y s = s/S, s = 1, . . . , S. To begin
assume that β = .95 and σ = 4.

a. Compute vaut .
                                                     u(c)
b. Consider the case of full risk-sharing. Let v = 1−β    and P (v) = u(1−c)
                                                                       1−β
                                                                             ; the
locus (v, P (v)) traces out a Pareto frontier as c ranges from 0 to 1. Write a
Matlab program to compute that (unconstrained) Pareto frontier and plot it.
                                   PS
c. Compute vaut = (1 − β)−1         s=1 Πs u(y s ).   Plot (vaut , vaut ) on the figure from
part b.
                                                           15. OPTIMAL SOCIAL INSURANCE                                                        239



       Figure 3. Exercise 15.10 b : Consumption, Promised Utility,
       Profits and Bank Balance in Contract that Maximizes the Money
       Lender’s Profits


                                           12

                                           11                                                   −1.68




                                                                            Promised Utility
         Consumption




                                           10
                                                                                                 −1.7
                                            9

                                            8
                                                                                                −1.72
                                            7

                                            6                                                   −1.74
                                                5   10     15     20   25                               5    10      15            20    25
                                                         Income                                                    Income


                                           45                                                   8000
         Expected Profit of Money Lender




                                           44
                                                                                                6000
                                                                                 Bank Balance




                                           43

                                           42                                                   4000

                                           41
                                                                                                2000
                                           40

                                           39                                                      0
                                                5   10     15     20   25                               0   20    40          60    80   100
                                                         Income                                                        Time


d. Consider the two participation constraints
                      ³P                  ´
                          +∞ j
         u(ct ) + βEt     j=0 β u(c t+j )          ≥ u(yt ) + vaut
                          ³P                     ´
                              +∞ j
         u(1 − ct ) + βEt     j=0 β u(1 − ct+j )   ≥ u(1 − yt ) + vaut .
Find the values v̌ and v̂ that solve
                            v̌     = u(yS ) + βvaut
                            P (v̂) = u(1 − y1 ) + βvaut .
240                                                                 15. OPTIMAL SOCIAL INSURANCE



       Figure 4. Exercise 15.10 c : Consumption, Promised Utility, Prof-
       its and Bank Balance in Contract that Gives Zero Profits to Money
       Lender



                              14.5                                                                       −1.4

                                                    14
                                                                                                        −1.41
                              13.5




                                                                                     Promised Utility
         Consumption




                                                    13                                                  −1.42

                              12.5                                                                      −1.43
                                                    12
                                                                                                        −1.44
                              11.5

                                                    11                                                  −1.45
                                                         5   10     15     20   25                              5    10      15            20    25
                                                                  Income                                                   Income


                                                     0                                                    20
                  Expected Profit of Money Lender




                                                    −1                                                     0

                                                    −2                                                   −20
                                                                                         Bank Balance




                                                    −3                                                   −40

                                                    −4                                                   −60

                                                    −5                                                   −80

                                                    −6                                                  −100

                                                    −7                                                  −120
                                                         5   10     15     20   25                              0   20    40          60    80   100
                                                                  Income                                                       Time




Plot a vertical line at v̌ and a horizontal line at P (v̂) on the figure from part
b. Please interpret v̌ as the minimum value of v such that the participation
constraint for agent 1 will never bind; and interpret P (v̂) as the minimum value
of P (v) such that the continuation value of agent two will never bind. Check
whether there is a piece of the (v, P (v)) frontier each point of which satifies v ≥ v̌
and P (v) ≥ P (v̂).
                                15. OPTIMAL SOCIAL INSURANCE                            241



                  Figure 5. Exercise 15.11 a : Pareto Frontier, β = 0.95


                                                                v*
                −3.4               Pareto Frontier




                −3.5




                −3.6                                                          P(v*)
         P(v)




                −3.7
                                             Vaut


                −3.8




                −3.9




                         −3.9       −3.8             −3.7       −3.6   −3.5      −3.4
                                                            v


e. Show that there is a set of assignments of initial values (v, P (v)) that (i) lie on
the Pareto frontier traced out in part b, such that (ii) the participation of neither
agent will ever bind. Argue that complete risk sharing then occurs forevermore.
f. Lower β to such a value that the region defined in part c no longer exists.
Argue that in this case, perpetually incomplete risk sharing must occur.

   Solution
a.-d. Figure 5 summarizes the first 4 parts for β = 0.95 . The matlab code is in
ex1511.m . We see that there is a region where both agents are unconstrained.
242                                     15. OPTIMAL SOCIAL INSURANCE



                   Figure 6. Exercise 15.11 b : Pareto Frontier, β = 0.85


                 −1.12


                 −1.14


                 −1.16


                 −1.18


                  −1.2
          P(v)




                 −1.22


                 −1.24


                 −1.26


                 −1.28


                  −1.3       β =0.85

                 −1.32

                         −1.32   −1.3    −1.28 −1.26 −1.24 −1.22   −1.2   −1.18 −1.16 −1.14 −1.12
                                                            v


We obtain perfect risk sharing. Starting from outside this region, we won’t enter
in it as shown in exercise 15.9. That is, the participation constraints won’t bind
and hence the promised utilities won’t need to be changed.
e. Figures 6 and 7 plot the same graph for β < 0.9473 and , there is no region
with complete insurance. Whenever one agent’s constraint binds, the planner
increases the stochastic Negishi weight of that agent. One agent’s constraint will
always bind.


      Exercise 15.12. Thomas and Worrall (1988)
                                  15. OPTIMAL SOCIAL INSURANCE                              243



                   Figure 7. Exercise 15.11 c : Pareto Frontier, β = 0.99

                −17.8




                −17.9
                                                             β=0.99


                 −18




                −18.1
         P(v)




                −18.2




                −18.3




                −18.4




                −18.5
                  −18.5   −18.4      −18.3   −18.2       −18.1        −18   −17.9   −17.8
                                                     v



There is a competitive spot market for labor always available to each of a contin-
uum of workers. Each worker is endowed with one unit of labor each period that
he supplies inelastically to work either permanently for ”the company” or each
period in a new one-period job in the spot labor market. The worker’s produc-
tivity in either the spot labor market or with the company is an i.i.d. endowment
process that is distributed as

                                                          1 − λ s−1
                                  Prob(wt = ws ) =              λ ,
                                                         1 − λS
244                       15. OPTIMAL SOCIAL INSURANCE

where λ ∈ (0, 1) and w s = s + 5 is the sth possible marginal product realization,
s = 1, . . . , S. In the spot market, the worker is paid wt . In the the company, the
worker is offered a history-dependent payment ωt = ft (ht ) where ht = wt , . . . , w0 .
Let β ∈ (0, 1) be the discount factor and β −1 the gross rate of return at which the
company can borrow or lend. The worker cannot borrow or lend. The worker’s
one-period utility function is u(ω) = (1 − γ)−1 w1−γ where ω is the period wage
from the company, which equals consumption, and γ is the worker’s coefficient of
relative risk aversion. Assume the parameter values (β, S, γ, λ) = (.95, 20, 2, .95).
    The company’s discounted expected profits are
                                     X∞
(178)                             E      β t (wt − ωt ) .
                                    t=0
    The worker is free to walk away from the company at the start of any period,
but must then stay in the spot labor market forever. In the spot labor market,
the worker receives continution value
                                            Eu(w)
                                    vspot =        .
                                            1−β
The company designs a history-dependent compensation contract that must be
sustainable (i.e., self-enforcing) in the face of the worker’s freedom to enter the
spot labor market at the beginning of period t after he has observed wt but before
he receives the t period wage.
Hint: Do these questions ring a bell? See exercise 5.10.
a. Using Matlab, compute the optimal contract that the company offers the
worker, assuming that the contract leaves the worker indifferent between refusing
and accepting the contract. b. Compute the expected profits that the firm earns
by offering this contract for an initial discounted utility that equals the one that
the worker would receive by remaining forever in the spot market.
c. Let the distribution of wages that the firm offers to its workers at time t ≥ 0
be given by the c.d.f. Prob(ωt ≤ w) = Ft (w). Compute Ft . Plot it for t = 0,
t = 5, t = 10, t = 500.
d. Plot an expected wage-tenure profile for a new worker.
e. Now assume that there is competition among companies and free entry. New
companies enter by competing for workers by raising initial promised utility with
the company. Adapt your program to find the initial level of promised utility
v > vspot that would set expected profits from the averager worker P (v) = 0.
      Solution
The solution to this problem is identical to the solution to problem 15.10. Figures
15,15 and 15 plot the optimal contract that promises vs pot , the consumption
CDF and its evolution as time goes on, and the wagee-tenure profile. The initial
promised utility that makes expected profits zero is -1.4468. The matlab program
is ex1512.m .
                                                            15. OPTIMAL SOCIAL INSURANCE                                                      245



       Figure 8. Exercise 15.12 a : Consumption, Promised Utility,
       Profits and Bank Balance in Contract that Maximizes the Money
       Lender’s Profits


                                           12

                                           11                                                  −1.68




                                                                            Promised Utility
         Consumption




                                           10
                                                                                                −1.7
                                            9

                                            8
                                                                                               −1.72
                                            7

                                            6                                                  −1.74
                                                5   10     15     20   25                              5    10      15            20    25
                                                         Income                                                   Income


                                           45                                                   8000
         Expected Profit of Money Lender




                                           44
                                                                                                6000
                                                                                 Bank Balance




                                           43

                                           42                                                   4000

                                           41
                                                                                                2000
                                           40

                                           39                                                     0
                                                5   10     15     20   25                              0   20    40          60    80   100
                                                         Income                                                       Time


   Exercise 15.13. Cole and Kocherlakota (2001)

Consider a closed version of our two period model (T=2) based upon Cole and
Kocherlakota’s (2001) framework, where the planner has no access to outside bor-
rowing. In this economy, suppose that an incomplete-markets equilibrium would
give rise to an interest rate on bonds equal to 1 + r > β −1 . Show that this decen-
tralized outcome is inefficient. That is, show that there exists an incentive-feasible
allocation that yields a higher ex-ante utility than the decentralized outcome.
246                                                    15. OPTIMAL SOCIAL INSURANCE



                                       Figure 9. Exercise 15.12 b : Consumption Distribution

                              1


                             0.9


                             0.8


                             0.7
       CDF for Consumption




                             0.6                           t=1


                             0.5
                                                                                 t=3

                             0.4
                                                                                            t=5

                             0.3                                                                    t=10


                             0.2                                                                           t=25


                             0.1
                                                                                                                  t=100


                                   6       8      10       12    14       16           18           20     22             24
                                                                      Income


      Solution
Let (c, A, r) be the incomplete markets equilibrium. Let β −1 = R. Recall from
the FOC that
                                                                           S
                                                                           X
                                               u0 (c1 (ȳs )) = β(1 + r)         Πj u0 (c2 (ȳs , ȳj ))
                                                                           j=1
                                                                   S
                                                                   X
                                                            < βR         Πj u0 (c2 (ȳs , ȳj )).
                                                                   j=1

The last equation says that individuals   P have no incentive to store at rate R. Let
bt (ht ) = yt (ht ) − ct (ht ) and Kt = ht π(ht )At (ht ) = 0. The incentive-feasible
allocation (c, 0, b, 0) is not efficient because there exists another incentive-feasible
allocation that raises ex-ante utility by redistributing from high income agents to
low income agents. Let the candidate allocation satisfy: c̃1 (ȳj ) = c1 (ȳj )−², where
                                     15. OPTIMAL SOCIAL INSURANCE                      247



                            Figure 10. Exercise 15.12 c : Wage-Tenure Profile

                  12




                 11.5




                  11
          Wage




                 10.5




                  10




                  9.5
                        0      10    20   30   40     50     60   70   80   90   100
                                                    Tenure


² < ȳj − ȳj−1 and c̃1 (ȳj−1 ) = c1 (ȳj−1 ) + δ(²) so that ex-ante utility is unchanged.
A sufficiently small ² can be found such that (1) the agent with income state j has
no incentive to lie down to state j −1 (2) the agents still have no incentive to store
under the candidate allocation. Because of the concavity of the utility function
² > δ(²). This relaxes the resource constraint. With the extra resources available,
the candidate allocation can strictly improve upon the allocation implied by the
incomplete markets equilibrium.


   Exercise 15.14. Thomas and Worrall meet Phelan-Townsend
248                            15. OPTIMAL SOCIAL INSURANCE

Consider the Thomas Worrall environment and denote Π(y) the density of the
i.i.d. endowment process, where y belongs to the discrete set of endowment levels
Y = [y 1 , . . . , y S ]. The one-period utility function is u(c) = (1 − γ)−1 (c − a)1−γ
where γ > 1 and y S > a > 0.
     Discretize the set of transfers B and the set of continuation values W . We
assume that the discrete set B ⊂ (a − y S , b]. Notice that with the one period
utility function above, the planner could never extract more than a − y S from the
agent. Denote Πv (b, w|y) the joint density over (b, w) that the planner offers the
agent who reports y and to whom he has offered beginning of period promised
value v. For each y ∈ Y and each v ∈ W , the planner chooses a set of conditional
probabililites Πv (b, w|y) to satisfy the Bellman equation
                                        X
(179)                   P (v) = vmax           [−b + βP (w)] Πv (b, w, y),
                           Π (b,w,y)
                                       B×W ×Y

      subject to the following constraints:
                                                 X
                                        v=               [u(y + b) + βw] Πv (b, w, y)
                                                B×W ×Y
 X                                              X
                           v
        [u(y + b) + βw] Π (b, w|y)       ≥            [u(y + b) + βw] Πv (b, w|ỹ)
 B×W                                            B×W
                                                ∀(y, ỹ) ∈ Y × Y
                     v
                  X Π (b, w, y)          =      Π(y)Πv (b, w|y) ∀(b, w, y) ∈ B × W × Y
                    Πv (b, w, y)         =      1.
                B×W ×Y



    Here (180) is the promise keeping constraint, (180) are the truth-telling con-
straints, and (180), (180) are restrictions imposed by the laws of probability.
a. Verify that that given P (w), one step on the Bellman equation is a linear
programming problem.
b. Set β = .94, a = 5, γ = 3. Let S, NB , NW be the number of points        £ in the grids ¤
for Y, B, W , respectively. Set S = 10, NB = NW = 25. Set Y = 6 7 . . . 15 ,
Prob(yt = y s ) = S −1 . Set W = [wmin , . . . , wmax ] and B = [bmin , . . . , bmax ], where
the intermediate points in W and B, respectively, are equally spaced. Please set
wmin = 1−β1   1
            1−γ
                (ymin − a)1−γ and wmax = wmin /20 (these are negative numbers, so
wmin < wmax ). Also set bmin = (1 − ymax + .33) and bmax = ymax − ymin . For these
parameter values, compute the optimal contract by formulating a linear program
for one step on the Bellman equation, then iterating to convergence on it.
c. Notice the following probability laws:
                                                 wt
                 Prob(bt , wt+1 , yt |wt ) P≡ Π (bt , w t+1 , yt )
                      Prob(wt+1 |wt ) = b∈B,y∈Y Πwt (b, wt+1 , y)
                                           P
(181)                 Prob(bt , yt |wt ) = wt+1 ∈W Πwt (bt , wt+1 , yt ).
                         15. OPTIMAL SOCIAL INSURANCE                           249

   Please use these and other probability laws to compute Prob(wt+1 |wt ). Show
how to compute Prob(ct ), assuming a given initial promised value w0 . d. Assume
that w0 ≈ −2. Compute and plot Ft (c) = Prob(ct ≤ c) for t = 1, 5, 10, 100.
Qualitatively, how do these distributions compare with those for the simple village
and money lender model with no information problem and one-sided lack of
commitment?
   Solution
a. The objective function and all constraints are linear in the probabilities. This
makes this problem into a linear programming problem.
b. The program linprogTWexp.m solves the problem.
c. The probability laws for w and c are also computed in linprogTWexp.m.
The unconditional distribution over consumption at time t is obtained by first
computing the t-period transition probabilities for the promised utilities w and
multiplying those with the probability distribution over consumption states con-
ditional on w, P (ct |wt ).
d. The successive consumption cdf’s are moving to the left. Ever more agents
are receiving a low consumption allocation. The reason is that promised utilities
are headed south in the Thomas-Worral model. In contrast, in the village lender
economy, the consumption distribution converges eventually becomes degenerate
when all agents have obtained the highest income distribution. Promised utilities
are non-decreasing processes in that model.
250                        15. OPTIMAL SOCIAL INSURANCE



      Figure 11. Exercise 15.14 a : Profits of Money Lender in Thomas-
      Worral Model

                                Profits to Money Lender in TW Economy
              290




              285




              280
       P(v)




              275




              270




              265
                    −0.2                             −0.1               0
                                                 v
                   15. OPTIMAL SOCIAL INSURANCE                               251



Figure 12. Exercise 15.14 b Evolution of Consumption Distribu-
tion over Time

                                Evolution of Consumption CDF over time

          1


         0.9

                       t=2
         0.8           t=200
                       t=2000

         0.7


         0.6
 F(c )
    t




         0.5


         0.4


         0.3


         0.2


         0.1


          0
               0   5                     10                  15          20
                                              Consumption
252                         15. OPTIMAL SOCIAL INSURANCE

      Exercise 15.15. Kehoe-Levine-Kocherlakota without risk

Consider an economy in which each of two types of households
                                                      P             has preferences
over streams of a single good that are ordered by v = ∞ t=0 β t
                                                                u(c t ) where u(c) =
        −1      1−γ
(1 − γ) (c + b)      for γ ≥ 1 and β ∈ (0, 1), and b > 0. For ² > 0 and t ≥ 0,
households of type 1 are endowed with an endowment stream y1,t = 1 + ² in even
numbered periods and y1,t = 1 − ² in odd numbered periods. Households of type
2 own an endowment stream of y2,t that equals 1 − ² in even periods and 1 + ²
in odd periods. There are equal numbers of the two types of household. For
convenience, you can assume that there is one of each type of household.
Assume that β = .8, b = 5, γ = 2, and ² = .5.
a. Compute autarky levels of discounted utility v for the two types of households.
Call them vaut,h and vaut,` .
b. Compute the competitive equilibrium allocation and prices. Here assume that
there are no enforcement problems.
c.Compute the discounted utility to each household for the competitive equilib-
rium allocation. Denote them viCE for i = 1, 2.
d. Verify that the competitive equilibrium allocation is not self-enforcing in the
sense that at each t > 0, some households would prefer autarky to the competitive
equilibrium allocation.
e. Now assume that there are enforcement problems because at the beginning of
each period, each household can renege on contracts and other social arrangments
with the consequence that it receives the autarkic allocation from that period
on. Let vi be the discounted utility at time 0 of consumer i. Formulate the
consumption smoothing problem of a planner who wants to maximize v1 subject
to v2 ≥ ṽ2 , and constraints that the express that the allocation must be self-
enforcing.
f. Find an efficient self-enforcing allocation of the periodic form c1,t = č, 2−č, č, . . .
and c2,t = 2 − č, č, 2 − č, . . ., where continuation utilities of the two agents oscillate
between two values vh and v` . Compute č. Compute discounted utilities vh for
the agent who receives 1 + ² in the period and v` for the agent who receives 1 − ²
in the period.
Plot consumption paths for the two agents for (i) autarky, (ii) complete mar-
kets without enforcement problems, (iii) complete markets with the enforcement
constraint. Plot continuation utilities for the two agents for the same three allo-
cations. Comment on them.
g. Compute one-period gross interest rates in the complete market economies
with and without enforcement constraints. Plot them over time. In which econ-
omy is the interest rate higher? Explain.
h. Keep all parameters the same, but gradually increase the discount factor. As
you raise β toward one, compute interest rates as in part (g). At what value of β
                            15. OPTIMAL SOCIAL INSURANCE                             253

do interest rates in the two economies become equal. At that value of β, is either
participation constraint ever binding?

   Solution

a. The value of autarky for agent h is
        h
       vaut = u(1 + ²) + βu(1 − ²) + β 2 u(1 + ²) + β 3 u(1 − ²) + ...
                       £                  ¤             £                  ¤
            = u(1 + ²) 1 + β 2 + β 4 + ... + βu(1 − ²) 1 + β 2 + β 4 + ...
              u(1 + ²) + βu(1 − ²)
            =
                     1 − β2
            = −0.8314.
                            l
Analogously, for agent l : vaut = βu(1+²)+u(1−²)
                                       1−β 2
                                                 = −0.8469
b. A competitive equilibrium is an allocation (c1 , c2 ) = {c1t , c2t }∞
                                                                       t=0 and a sequence
of Arrow-Debreu prices P = {Pt }∞  t=0 such that
(i) given prices {Pt } each agent solves
                                    X (b + ct )1−γ
                               max      βt            ,
                                c
                                     t
                                            1−γ
subject to the AD budget constraint
                             X            X
                                 P t ct ≤   P t yt .
                                     t               t

   (ii) markets clear: ∀t                X           X
                                             cit =       yti .
                                    i         i
                                   i    i
Guess that the solution satisfies ct = cCE , i = 1, 2. The first order conditions for
agent i ∈ {l, h} are:
                                  ¡        ¢−γ
                               β t cit + b     = λ i Pt .
Using our guess in the first order condition and the normalization P0 = 1 gives
us the expression for the competitive equilibrium prices
                                                 −γ
                              (ciCE + b)
                          Pt = β t        = β t P0 = β t .
                                    λi
The budget constraint for agent i becomes
                             X∞          X∞
                                  t i
                                 β cCE =    β t yt .
                                 t=0                 t=0

For agent 1 this gives
                          c1CE    (1 + ²) + β(1 − ²)
                                =
                         1−β        (1 − β)(1 + β)
                                        µ      ¶
                             1            1−β
                            cCE = 1 + ²          = 1.0556.
                                          1+β
254                         15. OPTIMAL SOCIAL INSURANCE

      Using market clearing consumption of agent 2 is
                                      µ      ¶
                           2            1−β
                          cCE = 1 − ²          = 0.9444.
                                        1+β
   It is easy to prove that c1t and c2t are constant. From the first order condition
β u (c1t ) = λpt and β t u0 (c2t ) = µpt it follows that the ratio of marginal utilities is
 t 0

constant. Together with the resource constraint c1t + c2t = 2 this implies that the
consumption shares are constant.
                                                                 1−γ
                                      1              (b+c1CE )                        l
c. The value from this allocation is vCE =           (1−γ)(1−β)
                                                                       = −0.8257 and vCE =
         1−γ
(b+cCE )
    2

 (1−γ)(1−β)
             = −0.8411.
d. Combining the results of part a and part c, in odd periods, the household with
the high endowment (type 2) would like to walk away (v aut = −.8314 > v CE =
−.844). In even periods, nobody wants to default.
e. Formulate the planner problem for the case with limited commitment
                                      X∞            1 1−γ
                                  1         t (b + ct )
                         max     v0 =     β               ,
                          c1 ,c2
                                      t=0
                                                 1−γ
subject to the participation constraints for agent 2 :
                                   ∞
                                   X
                               2
                                           ¡ ¢
                              vt =    β t u c2t ≥ v̄ 2 ,
                                       t=0

and enforcement constraints for each agent, ∀t :
                                      2       2
                                     vCE,t ≥ vaut,t
                                      1       1
                                     vCE,t ≥ vaut,t .

f. The contract can be formulated recursively as {c1 , c2 , v l , v h } where c1t = č, 2 −
č, č, 2 − č, ... and c2t = 2 − c1t . The discounted utility v h for the agent who receives
(1 + ²) in that period and v l for the agent who receives (1 − ²) are given by:
                                   u(č) + βu(2 − č)
                               vh =
                                         1 − β2
                                   βu(č) + u(2 − č)
                           vl =                       .
                                         1 − β2
In line with part d, we guess that tonly the enforcement constraint of the high
endowment household is binding:
                                    u(č) + βu(2 − č)
                             vh =              2
                                                          h
                                                       = vaut .
                                          1−β
From that equation we compute č = 1.1645 and v h = −0.8314. It follows that v l =
−0.8365. The planner thus achieves more risk sharing (consumption smoothing)
than in autarky but less than in the perfect enforcement case.
                         15. OPTIMAL SOCIAL INSURANCE                            255

g. In complete markets and with perfect enforcement we know that agents equate
their intertemporal marginal rates of consumption. Because consumption alloca-
tions are constant, the IMRS equals one for both agents in every period. It follows
that the stochastic discount factor is simply β. The interest rate is the inverse
of the stochastic discount factor. Therefore, the interest rate equals β −1 = 1.25.
In the case of limited commitment the stochastic discount factor is the maximal
IMRS among the agents. This is the IMRS of the unconstrained agent. We know
that the agent with the low income realization is unconstrained. Therefore the
SDF is                                         µ            ¶−γ
                                u0 (2 − č)      b + 2 − č
                      mt,t1 = β             =β                  .
                                   u0 (č)         b + č
The risk-free interest rate is m−1
                                 t,t1 = 1.1202. It is constant. The interest rate is
lower than the complete markets interest rate, because at any higher rate than
the prevailing one, the unconstrained household wants to save more. One has to
lower the interest rate from the complete markets benchmark interest rate until
the unconsatrined household will find the current allocation optimal. A Pareto-
improvement implies more saving buy the unconstrained household, who is the
household that is pricing the assets in the economy (the highest IMRS). This
necessitates a higher interest rate or a lower IMRS.
h. For β = 0.843265 the interest rates are the same with or without perfect
enforcement. The interest rate is 1.185866. For β = 0.92 the constraints stop
binding. For β high enough, the CE allocation is sustainable. The interest rate
of the unconstrained economy is β1 = 13    and is decreasing in β. The interest
                                   1
                                     ¡ 11
                                       c̃
                                          ¢−γ
rate of the constrained economy is β 2−c̃     which is smaller and increasing in
                     11
β, until β becomes 13 . At that point the economy collapses to the frictionless
economy where the participation constraint is never binding.
        CHAPTER 16

Credible government policies




             257
258                     16. CREDIBLE GOVERNMENT POLICIES

      Exercise 16.1.
Consider the following one-period economy. Let (ξ, x, y) be the choice variables
available to a representative agent, the market as a whole, and a benevolent
government, respectively. In a rational expectations equilibrium or competitive
equilibrium, ξ = x = h(y), where h(·) is the “equilibrium response” correspon-
dence that gives competitive equilibrium values of x as a function of y; that is,
[h(y), y] is a competitive equilibrium. Let C be the set of competitive equilibria.
    Let X = {xM , xH }, Y = {yM , yH }. For the one-period economy, when ξi = xi ,
the payoffs to the government and household are given by the values of u(xi , xi , yj )
entered in the following table:
                 One-period payoffs to the government–household
                               [values of u(xi , xi , yj )]

                                                 xM      xH
                           yM                     10*    20
                           yH                      4     15*
                           ∗
                             Denotes (x, y) ∈ C.
The values of u(ξk , xi , yj ) not reported in the table are such that the competitive
equilibria are the outcome pairs denoted by an asterisk (*).
a. Find the Nash equilibrium (in pure strategies) and Ramsey outcome for the
one-period economy.
b. Suppose that this economy is repeated twice. Is it possible to support the
Ramsey outcome in the first period by reverting to the Nash outcome in the
second period in case of a deviation?
c. Suppose that this economy is repeated three times. Is it possible to support
the Ramsey outcome in the first period? In the second period? Consider the
following expanded version of the preceding economy. Y = {yL , yM , yH }, X =
{xL , xM , xH }. When ξi = xi , the payoffs are given by u(xi , xi , yj ) entered here:
                 One-period payoffs to the government–household
                                [values of u(xi , xi , yj )]

                                               xL    xM      xH
                       yL                       3*     7      9
                       yM                       1     10*    20
                       yH                       0      4     15*
                       ∗
                         Denotes (x, y) ∈ C.
d. What are Nash equilibria in this one-period economy?
e. Suppose that this economy is repeated twice. Find a subgame perfect equi-
librium that supports the Ramsey outcome in the first period. For what values
of δ will this equilibrium work? f. Suppose that this economy is repeated three
times. Find a subgame perfect equilibrium that supports the Ramsey outcome
in the first two periods (assume δ = 0.8). Is it unique?
                      16. CREDIBLE GOVERNMENT POLICIES                          259

   Solution
a. The Nash equilibrium is (xM , yM ) ∈ C because 10 = u(xM , xM , yM ) >
u(xM , xM , yH ) = 4. The Ramsey outcome is (xH , yH ) ∈ C because 15 = u(xH , xH , yH ) >
u(xM , xM , yM ) = 10.
b. It is not possible to support the Ramsey by Nash reversion for the 2-period
economy. In the second period agent and government play the Nash equilibrium.
The condition to support the Ramsey equilibrium is violated:
                 (1 − δ)v R + δv N ≥ (1 − δ)ṽ + δv N =⇒ 15 ≥ 20
c. There is a unique NE in the stage game. In a finitely repeated game, repetition
of the NE of the stage game is the only subgame perfect equilibrium. Therefore,
it is not possible to support the Ramsey in the first nor in the second period by
Nash reversion for the 3-period economy.
d. The Nash equilibrium are {(xL , yL ), (xM , yM )} ∈ C . The Ramsey outcome is
(xH , yH ) ∈ C.
e. There is a unique SPE for the 2-period economy if we punish with the worst NE
(xL , yL ) = N2 in case of a deviation and prescribe the best NE (xM , yM ) = N1 in
case of adherence. We can support Ramsey in the first period when the discount
factor is at least 0.4166
                   (1 − δ)v R + δv N1 ≥ (1 − δ)ṽ + δv N2 =⇒
                    (1 − δ)15 + δ10 ≥ (1 − δ)20 + δ3 =⇒
                                         5
                                    δ ≥
                                        12
                    5
f. Because 0.8 > 12   , in the second period we can sustain playing Ramsey in the
second period if we play N1 in case of adherence and N2 in case of a deviation.
This follows immediately from part e. Working backwards, in period 1 we can
sustain Ramsey if we play Ramsey in period 2 and N1 in period 3. In case of
deviation we play N2 forever after. This works because the gain from deviating
is less than the loss from deviating: 5 ≤ δ12 + δ 2 7 = 14.08. A second equilibrium
that works is to punish with N2 in period 2 and with N1 in period 3, because
5 ≤ δ12 + δ 2 0 = 9.6. The third and last equilibrium that works is to punish with
N1 in period 2 and with N2 in period 3, because 5 ≤ δ5 + δ 2 7 = 8.48. Therefore,
there is no unique SPE.


   Exercise 16.2.
Consider a version of the setting studied by Stokey (1989). Let (ξ, x, y) be the
choice variables available to a representative agent, the market as a whole, and
a benevolent government, respectively. In a rational expectations or competitive
equilibrium, ξ = x = h(y), where h(·) is the “equilibrium response” correspon-
dence that gives competitive equilibrium values of x as a function of y; that is,
[h(y), y] is a competitive equilibrium. Let C be the set of competitive equilibria.
260                    16. CREDIBLE GOVERNMENT POLICIES

   Consider the following special case. Let X = {xL , xH } and Y = {yL , yH }. For
the one-period economy, when ξi = xi , the payoffs to the government are given
by the values of u(xi , xi , yj ) entered in the following table:
                One-period payoffs to the government–household
                                   [values of u(xi , xi , yj )]

                                                 xL     xH
                        yL                        0*    20
                        yH                        1     10*
                        ∗
                          Denotes (x, y) ∈ C.
The values of u(ξk , xi , yj ) not reported in the table are such that the competitive
equilibria are the outcome pairs denoted by an asterisk (*).
a. Define a Ramsey plan and a Ramsey outcome for the one-period economy.
Find the Ramsey outcome.
b. Define a Nash equilibrium (in pure strategies) for the one-period economy.
c. Show that there exists no Nash equilibrium (in pure strategies) for the one-
period economy.
d. Consider the infinitely repeated version of this economy, starting with t = 1
and continuing forever. Define a subgame perfect equilibrium.
e. Find the value to the government associated with the worst subgame perfect
equilibrium.
f. Assume that the discount factor is δ = .8913 = (1/10)1/20 = .1.05 . Determine
whether infinite repetition of the Ramsey outcome is sustainable as a subgame
perfect equilibrium. If it is, display the associated subgame perfect equilibrium.
g. Find the value to the government associated with the best subgame perfect
equilibrium.
h. Find the outcome path associated with the worst subgame perfect equilibrium.

i. Find the one-period continuation value v1 and the outcome path associated
with the one-period continuation strategy σ 1 that induces adherence to the worst
subgame perfect equilibrium.
j. Find the one-period continuation value v2 and the outcome path associated
with the one-period continuation strategy σ 2 that induces adherence to the first-
period outcome of the σ 1 that you found in part i.
k. Proceeding recursively, define vj and σ j , respectively, as the one-period con-
tinuation value and the continuation strategy that induces adherence to the
first-period outcome of σ j−1 , where (v1 , σ 1 ) were defined in part i. Find vj for
j = 1, 2, . . . , and find the associated outcome paths.
l. Find the lowest value for the discount factor for which repetition of the Ramsey
outcome is a subgame perfect equilibrium.

      Solution
                         16. CREDIBLE GOVERNMENT POLICIES                                261

a. A Ramsey plan: the government chooses y and walks away. Then the public
plays a competitive equilibrium as response:
                    max u(x, x, y)        or      max u(h(y), h(y), y)
                   (x,y)∈C                          y

The Ramsey plan in the example is yH , the public’s response is xH and the
Ramsey outcome is v R = 10.
b. A nash equilibrium satisfies (1) (xN , y N ) ∈ C            and (2) u(xN , xN , y N ) =
maxη∈Y u(xN , xN , η)
c. For each of the two competitive equilibria the condition for second consition
for a NE is violated:
                     10 = u(xH , xH , yH ) < u(xH , xH , yL ) = 20
                      0 = u(xL , xL , yL ) < u(xL , xL , yH ) = 1

d. A strategy profile σ = (σ h , σ g ) is a SPE if ∀t, ∀(xt−1 , y t−1 ) : (1) (xt , yt ) ∈ C,
xt = σ h (xt−1 , y t−1 ), yt = σ g (xt−1 , y t−1 ) and (2) ∀η ∈ Y :
                                    ¡           ¢                   ¡               ¢
        (1 − δ)r(xt , yt ) + δV σ|(xt ,yt ) ≥ (1 − δ)r(xt , η) + δV σ|(xt ,yt−1 ,η)
A SPE prescribes to play a NE in every period and specifies that no deviations
can be optimal.
e. The worst SPE is self-enforcing and has associated value v obtained from
                                                            ¯
                     v = min {(1 − δ)r(h(y), y) + δv1 }
                     ¯ v1 ∈V,y∈Y
subject to
             (1 − δ)r(h(y), y) + δv1 ≥ (1 − δ)r(h(y), H(h(y))) + δv
                                                                    ¯
where the worst SPE is used as the continuation value in the event opf a deviation.
The minimum is attained when the constraint is binding:
                         v = min(1 − δ)r(h(y), H(h(y))) + δv
                         ¯ y∈Y                             ¯
For y = yL , h(yL ) = xL , H(xL ) = yH and r(xL , yH ) = 1 whereas for y = yH ,
h(yH ) = xH , H(xH ) = yL and r(xH , yL ) = 20. The minimum is attained for
y = yL and the value associated with the worst SPE is v= 1. We find v1 =
1
  [v − (1 − δ)r(h(yL ), H(h(yL )))] = 1δ .                 ¯
δ ¯

f. We can sustain infinite repitition of the Ramsey outcome by reverting to the
worst SPE calculated in the previous part in case of deviation.
                              10                0.8913
                                       ≥ 20 +            1
                          1 − 0.8913          1 − 0.8913
For this value of δ, v1 = 1.122
g. The best SPE is self-rewarding
                                   v̄ = max r(h(y), y)
                                         y∈Y
262                     16. CREDIBLE GOVERNMENT POLICIES

subject to
                     r(h(y), y) ≥ (1 − δ)r(h(y), H(h(y))) + δ v
                                                              ¯
When y = yL , the constraint is violated, whereas for y = yH the constraint is
satisfied for δ = 0.8913 :
                            10 ≥ (1 − 0.8913)20 + 0.8913
Therefore v̄ = 10
h. the outcome path associated with the worst SPE is (xL , yL ) in the first (p − 1)
periods, (xH , yH ) in the pth period, (xL , yL ) in the next (p−1) periods, (xH , yH ) in
the 2pth period, etc. This output path implies that p = b20 log(11)
                                                                 log(10)
                                                                         c = b20.83c = 21.
i. We know that v1 = 1δ .The output path is (xL , yL ) in the first (p − 1) periods,
(xH , yH ) in the pth period, (xL , yL ) in the next (p − 1) periods, (xH , yH ) in the
2pth period, etc. The resulting p is
                                       1        10δ p
                                            =
                                    0.10.05    1 − δp
                                  log(1 + 10(0.10.05 ))
                         p = 20                         = 19.92
                                        log(10)
j. v2 = δ12 . The output path is (xL , yL ) in the first (p − 1) periods, (xH , yH ) in
the pth period, (xL , yL ) in the next (p − 1) periods, (xH , yH ) in the 2pth period,
etc. Where p is determined from
                                      1       10δ p
                                           =
                                   0.10.10   1 − δp
                                  log(1 + 10(0.10.10 ))
                         p = 20                         = 19.03
                                        log(10)
k. v3 = δ13 .The output path is (xL , yL ) in the first (p − 1) periods, (xH , yH ) in
the pth period, (xL , yL ) in the next (p − 1) periods, (xH , yH ) in the 2pth period,
etc. Where p is determined from
                                                  3
                                 log(1 + 10(0.1 20 ))
                          p = 20                      = 18.15
                                       log(10)
For 4 periods: p = 17.28, for 5 periods p = 16.42, etc.
l. From part f we know that we can support repetition of the Ramsey outcome
by reverting to the worst SPE for δ such that.
                              10               δ
                                    ≥ 20 +
                            1−δ              1−δ
                                        10
                                 δ ≥       = 0.526
                                        19

      Exercise 16.3.
                       16. CREDIBLE GOVERNMENT POLICIES                           263

Consider the following model of Kydland and Prescott (1977). A government
chooses the inflation rate y from a closed interval [0, 10]. There is a family of
Phillips curves indexed by the public’s expectation of inflation x:
(1)                              U = U ∗ − θ(y − x)
where U is the unemployment rate, y is the inflation rate set by the government,
and U ∗ > 0 is the natural rate of unemployment and θ > 0 is the slope of the
Phillips curve, and where x is the average of private agents’ setting of a forecast
of y, called ξ. Private agents’ only decision in this model is to forecast inflation.
They choose their forecast ξ to maximize
(2)                                 −.5(y − ξ)2 .
Thus, if they know y, private agents set ξ = y. All agents choose the same ξ so
that x = ξ in a rational expectations equilibrium. The government has one-period
return function
(3)            r(x, y) = −.5(U 2 + y 2 ) = −.5[(U ∗ − (y − x))2 + y 2 ].
Define a competitive equilibrium as a 3-tuple U, x, y such that given y, private
agents solve their forecasting problem and (1) is satisfied.
a. Verify that in a competitive equilibrium, x = y and U = U ∗ .
b. Define the government best response function in the one-period economy.
Compute it.
c. Define a Nash equilibrium (in the spirit of Stokey (1989) or chapter 16).
Compute it.
d. Define the Ramsey problem for the one-period economy. Define the Ramsey
outcome. Compute it.
e. Verify that the the Ramsey outcome is better than the Nash outcome.
Now consider the repeated economy where the government cares about
                                   ∞
                                   X
(4)                        (1 − δ)   δ t−1 r(xt , yt ),
                                       t=1

where δ ∈ (0, 1).
f. Define a subgame perfect equilibrium.
g. Define a recursive subgame perfect equilibrium.
h. Find a recursive subgame perfect equilibrium that sustains infinite repetition
of the one-period Nash equilibrium outcome.
i. For δ = .95, U ∗ = 5, θ = 1, find the value of (4) associated with the worst
subgame perfect equilibrium. Carefully and completely show your method for
computing the worst subgame perfect equilibrium value. Also, compute the values
associated with the repeated Ramsey outcome, the Nash equilibrium, and Abreu’s
simple stick-and-carrot strategy.
264                     16. CREDIBLE GOVERNMENT POLICIES

j. Compute a recursive subgame perfect equilibrium that attains the worst sub-
game perfect equilibrium value (4) for the parameter values in part i.
k. For U ∗ = 5, θ = 1, find the cutoff value δc of the discount factor δ below which
the Ramsey value v R cannot be sustained by reverting to repetition of v N as a
consequence of deviation from the Ramsey y.
l. For the same parameter values as in part k, find another cut off value δ̃c for
δ below which Ramsey cannot be sustained by reverting after a deviation to an
equilibrium attaining the worst subgame perfect equilibrium value. Compute the
worst subgame perfect equilibrium value for δ̃c .
m. For δ = .08, compute values associated with the best and worst subgame
perfect equilibrium strategies. Hint: Read the section leading up to formulas
equations 16.29–16.32.

      Solution
a. In a competitive equilibrium or rational expectations equilibrium the private
sectors forecasts materialize: x = y. plugging this in into the Phillips curve gives
U = U ∗ . denote the set of competitive equilibria by C
b. From the government’s first order condition w.r.t. y we find its best response
               2 x+θU ∗
is y = H(x) = θ 1+θ 2   = 0.5(U ∗ + x).
c. A Nash equilibrium (xN , y N ) is a competitive equilibrium (xN = y N ) that
satisfies r(xN , y N ) > r(xN , η), ∀ ∈ [0, 10]. The Nash equilibrium is y N = xN =
θU ∗ = U ∗ as long as θU ∗ < 10. This gives a value of V N = − (U ∗ )2 .
d. The Ramsey problem for the government is max(x,y)∈C r(x, y). The policy y R
that attains the maximum of the Ramsey problem is the Ramsey outcome. The
Ramsey outcome is xR = y R = 0, which gives a value V R = −0.5 (U ∗ )2 .
e. The Nash outcome is twice as low as the Ramsey outcome.
f. A strategy profile (σ h , σ g ) is a subgame perfect equilibrium of the infintely
repeated economy if for each t and each history (xt−1 , y t−1 ) ∈ X t−1 xY t−1 : (1)
the outcome xt = σth (xt−1 , y t−1 ) is consistent with a¡competitve  ¢ equilibrium when
yt =¡ σtg (xt−1 , y¢t−1 ) and (2) (1 − δ)r(xt , yt ) + δVg σ|(xt ,yt ) ≥ (1 − δ)r(xt , η) +
δVg σ|(xt ,yt−1 ,η)        ∀η ∈ Y .
g. A recursive strategy (φ, υ) is a subgame perfect equilibrium if (1) the first
period outcome pair is a competitive equilibrium: x = z h (v) given y = z g (v),
(2) V(v, z h (v), η) is a value for a subgame perfect equilibrium ∀η ∈ Y and (3)
v = (1−δ)r(z (v), z (v))+δV(v, z (v), z (v)) ≥ (1−δ)r(z (v), η)+δV(v, z h (v), η).
                h       g              h    g                 h


h. Infinite repitition of Nash can be sustained by deviating to the Nash outcome.
The Nash equilibrium is a competitive equilibrium and the continuation value V N
associated with deviating is itself the outcome of a SPE. In particular z h (v) =
xN , z g (v) = y N and v = V N .
                           16. CREDIBLE GOVERNMENT POLICIES                                      265

i. The worst SPE is self-enforcing. As shown in the text, to find its value we solve
v worst = miny∈Y r{h(y), H(h(y))}. Using the expression for the best response H,
we minimize
                           1£                                          ¤
                   min − [U ∗ − (0.5U ∗ + 0.5h(y) − h(y))]2 + h(y)2
                    y∈Y    2
                           1£                            ¤
               = min − [0.5U ∗ + 0.5h(y))]2 + h(y)2
                    y∈Y    2
This function is concave and reaches a minimum at y = 10. If follows that
H(h(y)) = 7.5. The value associated with the worst SPE is then v worst = −56.25.
For the same parameter values V N = −25, V R = −12.5. For the stick and carrot
stategy, the stick is plaing the worst competitve equilibrium, which value is -62.5.
The value of the stick and carrot is is given by v SC = (1 − δ)(−62.5) + δ(−12.5) =
−15.
j. We need to compute the best SPE equilibrium. This is self-rewarding. It is
easily found to be v best = V R = −12.5. We use the following recursive proce-
dure to find a SPE that achieves the worst. Set the first period promised value
v0 = v worst = −56.25. Use v worst in the event of a deviation. In the event of
adherence in the first period specify a continuation value v1 = δ −1 v worst + δ −1 (1 −
δ)(V R ) = −55.9211. In the event of adherence in the next period, the value
is v2 = δ −1 v1 + δ −1 (1 − δ)(V R ) = −55.5748. We can continue the work recur-
sively forward and find the increasing set of subgame perfect equilibria that are
played upon adherence. The government decision ỹ that satisfies r(ỹ, ỹ) = v1
is 9.319. Summarizing: v worst = −56.25, z h (v) = z g (v) = 10 if v = v worst and
z h (v) = z g (v) = 9.319 otherwise. V(vt , xt , yt ) = v1 if (xt , yt ) = [z h (vt ), z h (vt )] and
v worst otherwise.
k. Ramsey cannot be sustained by Nash reversion when
               (1 − δ)r(xR , y R ) + δV R > (1 − δ)r(xR , H(xR )) + δV N
                                   −12.5 > (1 − δ)(−6.25) + δ(−25)
we find that r(xR , y R ) = −12.5 and r(xR , H(xR )) = −6.25. The value δc = 0.333.
l. Proceeding likewise
               (1 − δ)r(xR , y R ) + δV R > (1 − δ)r(xR , H(xR )) + δv worst
We find δ̃c = 0.125.
m. Assume δ = 0.08, then 15.625 = v1 > v best = −12.5.so we need to find a new
set [v worst , v best ]. The formula’s (16.29)-(16.31) in the text can be solved to get
v worst = −43.56, v best = −14.12, y best = 1.8 and y worst = 8.2. We can verify that
now v1 = v best = −14.12.
            CHAPTER 17

Fiscal-monetary theories of inflation




                 267
268                17. FISCAL-MONETARY THEORIES OF INFLATION

   Exercise 17.1. Why deficits in Italy and Brazil were once extraordinary
proportions of GDP
The government’s budget constraint can be written as
                            bt                  bt+1      bt      Mt+1 Mt
(1)           g t − τt +        (Rt−1 − 1) =         −         +       −    .
                         Rt−1                    Rt     Rt−1        pt   pt
The left side is the real gross-of-interest government deficit; the right side is change
in the real value of government liabilities between t−1 and t. Government budgets
often report the nominal gross-of-interest government deficit, defined as
                                              µ                    ¶
                                                           1
                         pt (gt − τt ) + pt bt 1 −                   ,
                                                     Rt−1 pt /pt−1
and their ratio to nominal GNP, pt yt , namely,
                     ·                ³                  ´¸
                                                 1
                       (gt − τt ) + bt 1 −                  /yt .
                                           Rt−1 pt /pt−1
For countries with a large bt (e.g., Italy) this number can be very big even with
a moderate rate of inflation. For countries with a rapid inflation rate, like Brazil
in 1993, this number sometimes comes in at 30 percent of GDP. Fortunately,
this number overstates the magnitude of the government’s “deficit problem,” and
there is a simple adjustment to the interest component of the deficit that renders
a more accurate picture of the problem. In particular, notice that the real values
of the interest component of the real and nominal deficits are related by
                      µ          ¶          µ                   ¶
                              1                         1
                    bt 1 −          = α t bt 1 −                  ,
                            Rt−1                  Rt−1 pt /pt−1
where
                                       Rt−1 − 1
                                αt =                .
                                    Rt−1 − pt−1 /pt
Thus, we should multiply the real value of nominal interest payments bt (1− Rpt−1
                                                                               t−1
                                                                                  pt
                                                                                     )
by αt to get the real interest component of the debt that appears on the left side
of equation (1).
a. Compute αt for a country that has a bt /y ratio of .5, a gross real interest rate
of 1.02, and a zero net inflation rate.
b. Compute α for a country that has a bt /y ratio of .5, a gross real interest rate
of 1.02, and a 100 percent per year net inflation rate.

      Solution
a. Zero net inflation rate means that pt−1
                                       pt
                                           = 1, so that αt = 1 as well.
b. 100% inflation rate means that pt−1
                                   pt
                                       = 0.5. This time:
                                        1.02 − 1    1
                               αt =               = .
                                       1.02 − 0.5  26
                  17. FISCAL-MONETARY THEORIES OF INFLATION                        269

   Exercise 17.2. A strange example of Brock (1974)

Consider an economy consisting of a government and a representative household.
There is one consumption good, which is not produced and not storable. The
exogenous supply of the good at time t ≥ 0 is yt = y > 0. The household owns
the good. At time t the representative household’s preferences are ordered by
                          ∞
                          X
                             β t {ln ct + γ ln(mt+1 /pt )}
                            t=0

where ct is the household’s consumption at t, pt is the price level at t, and mt+1 /pt
is the real balances that the household carries over from time t to t + 1. Assume
that β ∈ (0, 1) and γ > 0. The household maximizes the above utility function
over choices of {ct , mt+1 } subject to the sequence of budget constraints
                      ct + mt+1 /pt = yt − τt + mt /pt ,    t≥0
where τt is a lump-sum tax due at t. The household faces the price sequence {pt }
as a price taker and has given initial value of nominal balances m0 .
At time t the government faces the budget constraint
                         gt = τt + (Mt+1 − Mt )/pt ,       t≥0
where Mt is the amount of currency that the government has outstanding at the
beginning of time t and gt is government expenditures at time t. In equilibrium,
we require that Mt = mt for all t ≥ 0. The government chooses sequences of
{gt , τt , Mt+1 }∞
                 t=0 subject to the government budget constraints being satisfied for
all t ≥ 0 and subject to the given initial value M0 = m0 .
a. Define a competitive equilibrium.
For the remainder of this problem assume that gt = g < y for all t ≥ 0, and that
τt = τ for all t ≥ 0. Define a stationary equilibrium as an equilibrium in which
the rate of return on currency is constant for all t ≥ 0.
b. Find conditions under which there exists a stationary equilibrium for which
pt > 0 for all t ≥ 0. Derive formulas for real balances and the rate of return on
currency in that equilibrium, given that it exists. Is the stationary equilibrium
unique?
c. Find a first-order difference equation in the equilibrium level of real balances
ht = Mt+1 /pt whose satisfaction assures equilibrium (possibly nonstationary).
d. Show that there is a fixed point of this difference equation with positive real
balances, provided that the condition that you derived in part b is satisfied. Show
that this fixed point agrees with the level of real balances that you computed in
part b.
f. Within which of the equilibria that you found in parts b and e is the following
“old-time religion” true: “Larger sustained government deficits imply perma-
nently larger inflation rates”?

   Solution
270                17. FISCAL-MONETARY THEORIES OF INFLATION

a. We state the following definition:
    Definition 18. An equilibrium is a sequence of price {pt }+∞         t=0 , sequences of
household consumption and money holding {ct , mt+1 }, sequences of government
policy {gt , τt , Mt+1 } such that the following conditions are satisfied:
       (i) Optimality: given {pt }+∞                   +∞
                                     t=0 , {ct , mt+1 }t=0 solves the household problem.
      (ii) Feasibility: the market for good and the market for money clear for all
           t ≥ 0:
                                        ct + g t = y
                                        mt+1 = Mt+1 .
     (iii) The government’s budget constraint is satisfied for all t ≥ 0:
                                              Mt+1 − Mt
                                  gt = τ t +               .
                                                    pt
b, c, and d. We form the Lagrangian of the household problem:

         +∞
         X    ½               µ      ¶      µ                     ¶¾
              t                 mt+1              mt+1        mt
             β ln(ct ) + γ ln          − λ t ct +      −y−τ −        .
         t=0
                                 p t               p t        p t

The first order conditions are :

                                         1
                                         ct
                                             = λt
(182)                               γ
                                   mt+1
                                        = pt − β λpt+1
                                            λt     t+1
                                                       ,
and an appropriate sufficient transversality condition is

                                        mT +1
(183)                             lim λT +1    = 0.
                              T →+∞      pT +1
Market clearing imposes that ct = y − g and mt+1 = Mt+1 . This implies in turn
           1
that λt = y−g . Replacing these expressions into the second first order condition
gives:
                                        µ           ¶
                            γ        1     1     β
                                 =            −       .
                          Mt+1     y − g pt pt+1
Note also that market clearing and the household budget constraint imply the
government budget constraint:

                                              Mt+1 − Mt
                          y − τ − ct = g − τ =             .
                                                   pt
Therefore, equilibrium price sequences and money holding sequences are charac-
terized by the following system of difference equation:
                                              ³           ´
                           t ≥ 0 Mγt+1 = y−g
                                           1    1
                                                pt
                                                   −   β
                                                     pt+1
                             t ≥ 0 g − τ = Mt+1pt−Mt .
                  17. FISCAL-MONETARY THEORIES OF INFLATION                       271

The first equation is the first order conditions evaluated at the equilibrium allo-
cation and the second is the government budget constraint.
Anticipating question (c.) and (d.) , we rewrite this system of difference equations
using auxiliary variables, the level of real balance ht ≡ mpt+1
                                                              t
                                                                 and the return on
                pt
currency Rt = pt+1 . We find, after some manipulations:

                           t ≥ 0 γ(y − g) = ht (1 − βRt )
                           t = 0 g − τ = h0 − M p0
                                                  0


                           t ≥ 1 g − τ = ht − Rt−1 ht−1
                                 pt
                           Rt = pt+1 and ht = Mpt+1 t
                                                      .
The first equation allows to express ht−1 Rt−1 as a function of ht−1 . Replacing
this expression in the third equation yields to:
                                      ³            ´
                                    1       γ(y−g)
                       t ≥ 0 R t = β 1 − ht
                       t = 0 g − τ = h0 − M p0
                                              0


                       t ≥ 1 ht = g − τ − βγ (y − g) + β1 ht−1
                             pt
                       Rt = pt+1 and ht = Mpt+1 t
                                                  .

The linear difference equation for ht is easily solved. First we solve for its unique
fixed point h∗ = g − τ − βγ (y − g) + β1 h∗ . Then we substract the equation defining
h∗ to the difference equation to find ht − h∗ = β1 (ht−1 − h∗ ). We iterate on it and
                  ³ ´t
obtain ht = h + β1 (h0 − h∗ ).
               ∗

Equilibria are then constructed the following way:

(1) Choose h0 > 0
(2) Solve for p0 using g − τ = h0 − M  0

                                 ³ ´pt0
(3) Solve for ht using ht = h∗ + β1 (h0 − h∗ ).
                               ³           ´
                             1      γ(y−g)
(4) Solve for Rt using Rt = β 1 − ht
(5) Solve for pt and Mt+1 using Rt = pt+1pt
                                            and ht = Mpt+1
                                                        t
                                                           .
(6) Accept this equilibrium candidate only if p0 , ht and Rt are positive, and sat-
isfy the transversality condition (183).

Stationary equilibria are such that the rate of return on currency Rt is constant.
From the above equations it implies that ht is constant as well. But the difference
                                                   1
equation for ht has a unique fixed point h∗ = 1−β    (γ(y − g) − β(g − τ )). Thus
there is a unique candidate stationary equilibrium:

                                  1
                           h∗ = 1−β  (γ(y − g) − β(g − τ ))
                             ∗   1 γ(y−g)−(y−τ )
                           R = β γ(y−g)−β(y−τ )
                           M0      1
                           p∗
                               = 1−β  (γ(y − g) − (y − τ )) .
                            0
272                 17. FISCAL-MONETARY THEORIES OF INFLATION

The positivity restrictions on ht , Rt and p0 imposes the following necessary and
sufficient condition for existence of a stationary equilibrium:

                                 γ(y − g) > (y − τ ).


      Exercise 17.3. Optimal inflation tax in a cash-in-advance model
Consider the version of Ireland’s (1997) model described in the text but assume
perfect competition (i.e., α = 0) with flexible market-clearing wages. Suppose
now that the government must finance a constant amount of purchases g in each
period by levying flat-rate labor taxes and raising seigniorage. Solve the optimal
taxation problem under commitment.

      Solution
We follow the usual steps to solve this Ramsey problem (see chapter 12).
   Step 1: Define a competitive equilibrium.
The household problem is:
                                                         P+∞ t ³ cγt       ´
                            max{ct ,nt ,mt+1 ,bt+1 }t=0 t=0 β γ − nt
                                                    +∞

             subject to     0 ≤ nt ≤ 1
                            mt+1 ≥ 0
                            0 ≤ ct ≤ mptt + bt − bR    t+1
                                                         t
                            ct + bR
                                  t+1
                                    t
                                       +  mt+1
                                           pt
                                                 ≤    mt
                                                      pt
                                                          + bt + (1 − τt )nt .
   Definition 19. An equilibrium is a price and an interest rate sequence {pt , Rt }+∞t=0 ,
                                                           +∞
a sequence of household decisions, {ct , nt , mt+1 , bt+1 }t=0 and a sequence of gov-
ernment policy {τt , Mt+1 }+∞
                           t=0 such that the following conditions are satisfied:
      (i) Optimality: given prices and interest rates, the household decisions
          solves the household problem.
     (ii) Feasibility: the market for good, the market for money and the market
          for bond clear for all t ≥ 0:
                                     ct + g = n t
                                     mt+1 = Mt+1
                                     bt+1 = 0.
       (iii) The government budget constraint is satisfied:
                                           Mt+1 − Mt
                              g = τ t nt +            .
                                              pt
The Ramsey problem is to choose a competitive equilibrium that maximizes the
household welfare.
    Step 2: Characterize a competitive equilibrium.
We form the Lagrangian of the household problem, ignoring the positivity con-
straints on consumption, labor and money holding:
                     17. FISCAL-MONETARY THEORIES OF INFLATION                       273



       P+∞         ³ γ          ´            ³                    ´
                    ct
         t=0 β
               t
                    γ
                         − nt       −β t µt ct − mptt − bt + bR
                                                              t+1

                                             ³                  t
                                                                               ´
                                       t           bt+1  Mt+1       mt
                                    −β λt ct + Rt + pt − bt − pt − (1 − τt )nt
                                    −β t νt (nt − 1).
The first order conditions are:

                           ct :             cγ−1
                                             t               =   µt + λt
                           nt :             1                =   λt (1 − τt ) + νt
                           mt+1 :               λt
                                                pt
                                                             =   β µt+1pt+1
                                                                        +λt+1

                                                λt +µt
                           bt+1 :                  pt
                                                             =   β(µt+1 + λt+1 ).
The market clearing conditions are, assuming as in the text that the CIA binds.

                                           ct            =   nt − g
                                           bt            =   0
                                           Mt
                                           pt
                                                         =   ct
                                           Mt+1
                                            pt
                                                         =   (1 − τt )nt .
Note that the household is taxed “twice”: once by the tax on labor and once
by the inflation tax through the cash in advance constraint. To see this, use the
market clearing conditions to write

                             Mt      Mt Mt+1      1 − τt
                            ct = =             =         nt .
                              pt    Mt+1 pt         xt
This implies that the effective tax rate on labor income is given by αt ≡ 1 −
1−τt
 xt
     . This also tells that, in this set-up, the labor tax and the inflation tax
are indeterminate: the same effective tax rate αt can be achieved with different
combinations of xt and τt .
   Step 3: Solve for the Ramsey plan.
The Ramsey problem is to choose a competitive equilibrium that maximizes the
household welfare.
Given g, the household utility at a feasible allocation is given by:
                                    +∞
                                    X               µ                 ¶
                                                t       (nt − g)γ
                                           β                      − nt .
                                     t=0
                                                            γ
What is the first best ? Assume that the planner is free to impose a choice of
                                                                γ
nt to the agent. It is easily shown that the function (nt −g)
                                                            γ
                                                                  − nt is increasing for
nt ∈ [0, 1]. Thus, the first best is to choose nt = 1 for all t ≥ 0, so that ct = 1 − g
for all t ≥ 0.

We now show that the first best allocation is implementable as a competitive
equilibrium. Specifically, we construct (positive) Lagrange multipliers µ t , λt , νt
274               17. FISCAL-MONETARY THEORIES OF INFLATION

such that the first order conditions of the household problem are satisfied at the
first best allocation.
Note first that, at the first best allocation, αt nt = αt 1 − 1−τ
                                                                xt
                                                                   t
                                                                     = g. Second,
                                pt     Mt ct+1     1
market clearing implies that pt+1 = Mt+1 ct = xt . Third, replacing the first best
allocation in the first order conditions gives, after some manipulations:
                                1−τt
                                 xt
                                     =1−g
                                Rt = β1
                                             γ
                                λt = β (1−g)
                                        1−τt
                                                          γ
                                µt = (1 − g)γ−1 − β (1−g)
                                                     1−τt
                                νt = 1 − β(1 − g)γ .
Note that the positivity of µt imposes a restriction on the τt :

                          1 − τt ≥ β(1 − g) ⇔ xt ≥ β.
This shows that, apart from the above restriction, the optimal labor tax rate and
optimal money growth are indeterminate.

      Exercise 17.4.

      Solution
a. The household problem is to maximize

                          +∞
                                     Ã               µ          ¶1−α !
                          X               α−η(1−α)       mt+1
(184)                           βt       ct                                ,
                          t=0
                                                          pt
with respect to {ct , mt+1 , bt+1 }+∞
                                   t=0 and subject to the budget constraint


                           mt+1 bt+1             mt
(185)                  ct +    +     = y − τt +     + bt .
                            pt   Rt              pt
Letting λt > 0 be the Lagrange multiplier on the time t budget constraint, the
first order conditions are

                 u(ct , mt+1 /pt )
(186)                              (α − η(1 − α)) = λt
                         ct
                           u(ct , mt+1 /pt )                   pt
(187)                                        (1 − α) = λt − β      λt+1
                              mt+1 /pt                        pt+1
(188)                                             λt = βRt λt+1 ,
and the transversality condition is
                                              µ                 ¶
                                          T       mT
(189)                         lim β λT               + bT           = 0.
                           T →+∞                  pT
                  17. FISCAL-MONETARY THEORIES OF INFLATION                           275

In order to derive the demand for money, we substitute equation (188) in (187).
We obtain the equation

                    u(ct , mt+1 /pt )
(190)                                 (1 − α) = λt (1 − 1/(πt Rt )) ,
                       mt+1 /pt
which, combined with (186), gives the demand for money

                   mt+1             1−α
(191)                     = ct               (1 − 1/(πt Rt ))−1
                     pt         α − η(1 − α)
                                    1−α
                          = ct               (1 + 1/it ),
                                α − η(1 − α)
which is a decreasing function of the nominal interest rate it .

b. and c. We characterize the unique equilibrium with β = 1/R. The market
clearing conditions are y = ct + g, bt = B, and

                                        1−α
(192)      ht ≡ mt+1 /pt = (y − g)                (1 − β/πt ))−1 ≡ f (πt )
                                     α − η(1 − α)
This equation is of the form ht = k(1 − β/πt )−1 , with k = (y − g)(1 − α)/(α −
η(1 − α)). It implies in particular that

(193)                            πt = βht /(k − ht ).
We use the government budget constraint to compute the path of real money
balances. Specifically, we have

                                                     M0
(194)                            t=0        d = ht −
                                                     p0
                                                     ht−1
(195)                       t = 1, 2, . . . d = ht −      ,
                                                     πt−1
where d ≡ g + B(1 − β) − τ is the deficit. Substituting expression (193) into
(195), we obtain that the path of real money balances follows the linear difference
equation
                                                                   µ ¶t
                  1                 1                               1
(196)     ht = d + (ht−1 − k) = h∗ + (ht−1 − h∗ ) = h∗ +                (h0 − h∗ ),
                  β                 β                               β
where h∗ = (k − βd)/(1 − β) is the stationary point of (196). Clearly, if h0 < h∗ ,
then, for t large enough, ht < 0, which cannot be the basis of an equilibrium.
Also, if h0 > h∗ , then ht grows at rate 1/β, violating the transversality condition
(189), and therefore cannot be the basis of an equilibrium. The only candidate
is ht = h∗ , for all t ≥ 0. If h∗ ≤ k, this candidate cannot be the basis of an
equilibrium, because (193) implies that the inflation rate is negative. Otherwise,
276               17. FISCAL-MONETARY THEORIES OF INFLATION

ht = h∗ > k, together with ct = y−g and bt = B, satisfies the first order conditions
(186) as well as the transversality condition (189). The maximum level of deficit
is the that can be financed in this economy is therefore the maximum d consistent
with the condition h∗ > k, that is


(197)                                  d < d¯ ≡ k.

d. Since the government announces its intention to cut back the deficit to zero
at t ≥ T + 1, the inflation rate is πt = 1, for t ≥ T . The price level at time T is
found by writing the government budget constraint

                                                            M
(198)                  g + B = τ + B − β∆B + f (1) −           ,
                                                            pT
where ∆B is the quantity of bonds purchased by the government and g + B =
τ + βB by assumption. The quantity ∆M of money used to purchase these bonds
satisfies ∆M/pT = β∆B. Substituting this last expression into (198), we obtain

                                  (1 + µ)M
(199)                                      = f (1).
                                      pT
Since, on the other hand, the inflation rate is 1 for all t ≤ T − 1, we must have
f (1) = M/pT −1 , which implies, together with (199), that pT = (1 + µ)pT −1 .

e. As in the previous question, the inflation rate is πt = 1, for all t ≥ T . The
government budget constraints are

                                      1
(200)               t=T                    f (πT −1 ) = f (1) − β∆B < f (1)
                                    πT −1
                                      1
(201)          t = 1, . . . , T − 1       f (πt−1 ) = f (πt )
                                    πt−1
                                               M
(202)                t=0            f (π0 ) =     .
                                               p0

The time T constraint (200) implies that πT −1 > 1. Using the constraints for
t = 1, . . . , T − 1, we obtain by induction that 1/πt−1 f (πt−1 ) = f (πt ) < f (1),
and thus that πt−1 ‘ > 1. We also observe that πt > 1 implies that f (πt−1 ) =
πt−1 f (πt ) > f (πt ) and therefore that πt > πt−1 . Thus, the sequence of inflation
rate is increasing. Lastly, π0 > 1 implies that

                                     M            (1 + µ)M
(203)                    f (π0 ) =      < f (1) =          .
                                     p0               pT
                  17. FISCAL-MONETARY THEORIES OF INFLATION                         277

Therefore, the inflation rate between t = 0 and t = T is equal to 1 + µ. However,
because the increase of the money supply is announced at t = 0, the inflation
rate is greater than 1 and increasing for t = 0, . . . , T − 1. Therefore, we have

(204)                               1 < πT −1 < 1 + µ.


   Exercise 17.5.
We interpret the exercise as follows. We let {Mt+1 , Bt+1 , τt , gt }+∞
                                                                     t=0 be a feasible
government policy, and the associated path of prices and inflation rate {pt , πt }+∞
                                                                                  t=0 .
We let the demand for money be

                                   mt+1
(205)                                   = f (πt )
                                    pt
The inflation elasticity of the demand for money is

                                               πf 0 (π)
(206)                               ε(π) = −            .
                                                f (π)
Since the nominal interest rate is 1 + it = Rt πt , the interest elasiticity is equal
to the inflation elasiticity. We assume that the government sells a small quantity
∆B1 of bonds at t = 0, and repurchases these bonds with money at t = 1. We
let ∆pt and ∆πt be changes in prices and inflations rates induced by this policy
experiment. Because bonds are repurchased at t = 1 and all variables except pt
and πt are unchanged by assumption, we know that ∆πt = 0, for all t = 1, 2, . . ..
We differentiate the government’s budget constraint at t = 0 and t = 1 to obtain

                              ∆B1                   M0
(207)                    0 =       + f 0 (π0 )∆π0 + 2 ∆p0
                               R0                    p0
                                  µ                     ¶
                                      1 0          1
(208)                ∆B1    = ∆π0 − f (π0 ) + 2 f (π0 ) .
                                     π0            π0
We use equation (208) to express ∆π0 as a function of ∆B1 , and we substitute
the resulting expression in (207). We obtain
                              µ                       ¶
                                    1     ε(π0 )                 M0
(209)                π0 ∆B1            −                    =−       ∆p0
                                  π0 R0 1 + ε(π0 )               p20
This shows that ∆p0 < 0 if and only if

                                      ε(π0 )        1
(210)                                          <
                                    1 + ε(π0 )   π 0 R0
In other words, if the interest elasticity of the money demand is sufficiently small,
the open market operation results in a decrease of the price at t = 0. However,
278                 17. FISCAL-MONETARY THEORIES OF INFLATION

since money needs to be printed at t = 1 to repurchase the bonds, equation (208)
shows that the inflation rate between t = 0 and t = 1 increases.

      Exercise 17.6.

      Solution
a. The “law of one price” implies that the price level in country A after the dol-
larization is equal to the US price level p∗ , and the inflation rate is equal to the
US inflation rate π ∗ . Given the money demand equation, the country A demand
the US government a quantity M ∗ = p∗ F (c, π ∗ ) US dollars. The quantity M of
peso is exchanged for M ∗ US dollars, at an exchange rate e = M/M ∗ .

b. Since dollarization implies that the government stops printing money, it stops
raising the inflation tax of τ = (1 − Rm )F (y − g, βRm ) per period. However,
the US government is now raising an inflation tax on country A, τ ∗ ≡ F (y −
      ∗         ∗
g, βRm  )(1 − Rm  ) per period. Thus, if the government of country A is a good
negociator, it could claim this inflation tax to the US government. In that even,
the required increase in tax would be τ − τ ∗ (which is positive, by the assumption
that country A is on the good part of the Laffer curve.)

      Exercise 17.7.

      Solution
a. Since the foreign inflation is zero, Rmt = 1 for all t ≥ 0. We write the
government budget constraints, using the fact that, for all t ≥ 0, Mt+1 /pt =
                                 ∗
F (y − g, Rmt /R) and Mt+1 = eBt+1 . The time zero constraint is

                                                                   B0∗ e M0
(211)       g0 + B(1 − 1/R) − τ0 = (1 − 1/R)F (y0 − g, 1/R) +           −    .
                                                                    p0    p0
and, for t ≥ 1, the budget constraint is

(212)            gt + B(1 − 1/R) − τt = (1 − 1/R)F (yt − g, 1/(Rπ ∗ )).
The left-hand side of the government budget constraint can be viewed as the
current deficit. The right-hand side is the income that the government raises by
printing money. We observe in particular that, in spite of the currency board
contract, the government is still raising a positive income by printing money.
This is because the money supply Mt+1 of time t + 1 is backed by dollar denomi-
nated bond bought at time t. In other words, to back the issue of one additional
unit of real money balance, the government is only “paying” 1/R < 1 unit of
consumption good. The difference 1 − 1/R is government income. Therefore,
a permanent increase in y raises permanently government income and allow to
                 17. FISCAL-MONETARY THEORIES OF INFLATION                       279

lower permanently the level of taxes.

b. We derive the government budget constraint, taking into account that inflation
is π ∗ and that the price of a one-period dollar-denominated bond is 1/(Rπ ∗ ). At
time zero, the government budget constraint is

                                                                     B0∗ e M0
(213) g0 + B(1 − 1/R) − τ0 = (1 − 1/Rπ ∗ )F (y0 − g, 1/(R/π ∗ )) +        −    .
                                                                      p0    p0
and, for t ≥ 1, the budget constraint is

(214)       gt + B(1 − 1/R) − τt = (1 − 1/Rπ ∗ )F (yt − g, 1/(Rπ ∗ )).
Thus, the government is facing a modified Laffer curve. In particular, a raise in
foreign inflation raise the government income if 1/(Rπ ∗ ) is on the “good part” of
the curve.

c. For t ≥ 1, the “currency board contract” takes the form

(215)                           Mt (e + ∆e) = Bt∗ .
Therefore, the government budget constraint for t ≥ 1 (214) is unchanged. At
time zero, however, (213) becomes

                                    ∗                   ∗    B0∗ (e + ∆e) M0
 g0 + B(1 − 1/R) − τ0 = (1 − 1/Rπ )F (y0 − g, 1/(R/pi )) +               −     .
                                                                   p0       p0
The currency board contract holds at t = 0 with the exchange rate e that was
anticipated at t = −1, that is M0 = eB0∗ . Thus, the time zero budget constraint
can be rewritten

                                                                      B0∗ ∆e
(216)    g0 + B(1 − 1/R) − τ0 = (1 − 1/Rπ ∗ )F (y0 − g, 1/(R/pi∗ )) +        .
                                                                        p0
After the devaluation, the dollar value of the current money supply is
(217)                 M0 /(e + ∆e ) = B0∗ e/(e + ∆e) < B0∗ .
In words, the dollar value of the government liability has decreased. Since, on the
other hand, the government holds a quantity B0∗ of dollars, the dollar value of its
income is unchanged. This results in a (real) surplus of (B0∗ ∆e)/p0 > 0 that it
can use to lower temporarily the level of per capita taxes.

   Exercise 17.8.

   Solution
a. and b. For “transversality,” we assume that βγ φ(1−σ) < 1. We solve for a
“balanced growth path” of the economy in which yt , gt , ct and mt+1 /pt grow at
280               17. FISCAL-MONETARY THEORIES OF INFLATION

the same rate γ > 1, and lt and st as well as Rt and Rmt are constant. The
model is a special case of the shopping time economy studied in chapter 17, with
H(c, m/p) = ψc(m/p)−1 . The first order necessary conditions are the same as in
the text, and the transversality condition is
                                          µ             ¶
                                 T            mT
(218)                     lim β uc (T )          + bT       = 0.
                         T →+∞                pT
Equilibrium on the good market imposes that ct = yt − gt = γ t (y − g). We now
solve for the real rate and the real money balances. Using the expression (17.14)
derived in the text we obtain that, on a balanced growth path, the real rate on
government bond is constant and equal to

(219)                         R = γ(βγ φ(1−σ) )−1 > 1.
Equation (17.16) derived in the text, defining the money demand is
                          µ             ¶
                         uc (t)
          (1 − Rmt /R)          − Hc (t) + Hm/p (t) = 0
                         ul (t)
                       Ã                µ      ¶−1 !       µ      ¶−2
                            φ lt          mt+1               mt+1
        ⇔ (1 − Rmt /R)            −ψ                 − ψct            =0
                         1 − φ ct          pt                 pt
(220)   ⇔ (1 − Rmt /R)(φ − st ) − s2t = 0.
Equation (220) describes the demand for real money balance per unit of con-
sumption good s−1
                t  = 1/ct mt+1 /pt as a function f ( · ), with s−1 t  = f (Rmt ). To
determine the sequence {pt , Rmt }∞
                                  t=0 , we substitute f (R mt ) into the government
budget constraint. We find, assuming that Bt = τt = 0 and dividing through by
ct

                  g               M0
(221)                = f (Rm1 ) −
                 y−g               p0
                  g               1
(222)                = f (Rmt ) − Rmt−1 f (Rmt−1 ),                t ≥ 1.
                 y−g              γ
An equilibrium constant inflation rate Rmt = Rm solves

                           g             1
(223)                         = f (Rm ) − Rm f (Rm ).
                          y−g            γ
Then, the initial price level p0 is implied by (221) and, for t ≥ 1, the price level
          −t
is pt = Rm   p0 . The ratio of real money balance to consumption is constant and
equal to f (Rm ), implying that real money balance grows at rate γ. The transver-
sality condition (218) is satisfied because of the assumption βγ φ(1−σ) < 1.
                 17. FISCAL-MONETARY THEORIES OF INFLATION                   281

c. In an equilibrium for which the inflation rate is equal to 1, demand for real
money balance is growing at rate γ. More consumption requires more money to
keep the shopping time st constant. The government raises a postive amount of
revenue

                                Mt
(224)                               (γ − 1) > 0.
                                 p
d. The previous discussion suggests that a monetary policy that promote growth
may also promote the demand for real money balance. Thus, it may allow the
government increase the money supply and raise revenue without generating in-
flation.
    CHAPTER 18

Credit and currency




        283
284                            18. CREDIT AND CURRENCY

      Exercise 18.1. Arrow-Debreu
Consider an environment with equal numbers N of two types of agents, odd and
even, who have endowment sequences
                            {yto }∞
                                  t=0 = {1, 1, 0, 1, 1, 0, . . .}
                               e ∞
                            {yt }t=0 = {0, 0, 1, 0, 0, 1, . . .}.
                                                                                 P∞    t   h
Households of each type h order consumption sequences by                          t=0 β u(ct ). Com-
pute the Arrow-Debreu equilibrium for this economy.

      Solution
Let β t qt0 be the time zero price of a unit of consumption at time t. We form the
Lagrangian of the household problem:

                      +∞
                                               Ã +∞                       !
                      X                         X
                            β t u(cht ) − λh            β t qt0 (cht − yth ) .
                      t=0                         t=0

The first order condition is :

                        u0 (cht ) = λh qt0 ⇒ cht = (u0 )−1 (λh qt0 ).
On the other hand market clearing imposes:
                       X                 X
                               N cht =           N (u0 )−1 (λh qt0 ) = N.
                       h=o,e             h=o,e

The left hand side is a decreasing function of qt0 since (u0 )−1 is decreasing. This
implies that the solution of the above equation is unique, that qt0 is a constant,
and, from the first order condition of the household problem, that cht is constant
as well.
Now normalize q00 = 1 to have qt0 = 1 for all t. We use the even agent budget
constraint to find ce :
                     P+∞     t e     e          ce   3    6
                        t=0 β (c − yt ) = 0 ⇔ 1−β = β + β + . . .
                                      P                        β3
                 ⇔   ce = (1 − β)β 3 ( +∞    3k    e
                                        k=0 β ) ⇔ c = (1 − β) 1−β 3 .

Use the identity (1 − β 3 ) = (1 − β)(1 + β + β 2 ) and the market clearing condition
to obtain:

                                                 β      3
                                          ce = 1+β+β 2
                                           o       e
                                          c =1−c .


      Exercise 18.2. One-period consumption loans
                              18. CREDIT AND CURRENCY                                285

Consider an environment with equal numbers N of two types of agents, odd and
even, who have endowment sequences

                              {yto }∞
                                    t=0 = {1, 0, 1, 0, . . .}
                                 e ∞
                              {yt }t=0 = {0, 1, 0, 1, . . .}.
                                                              P
Households of each type h order consumption sequences by ∞           t   h
                                                                t=0 β u(ct ). The
only market that exists is for one-period loans. The budget constraints of house-
hold h are
                        cht + bht ≤ yth + Rt−1 bht−1 , t ≥ 0,
where bh−1 = 0, h = o, e. Here bht is agent h’s lending (if positive) or borrowing (if
negative) from t to t+1, and Rt−1 is the gross real rate of interest on consumption
loans from t − 1 to t.
a. Define a competitive equilibrium with one-period consumption loans.
b. Compute a competitive equilibrium with one-period consumption loans.
c. Is the equilibrium allocation Pareto optimal? Compare the equilibrium allo-
cation with that for the corresponding Arrow-Debreu equilibrium for an economy
with identical endowment and preference structure.

   Solution
a. The household problem is to maximize

                                       +∞
                                       X
                                             β t u(cht ),
                                       t=0

with respect to {cht , bht }+∞
                            t=0 , and subject to


                                 cht + bht ≤ yth + Rt−1 bht−1
                                 bht ≥ −B
                                 b−1 given,
where B ≥ 0 is some borrowing constraint, chosen large enough so that it never
binds.
    Definition 20. A competitive equilibrium is an interest rate sequence {Rt }+∞   t=0 ,
                                      h h +∞
sequences of household decisions {ct , bt }t=0 , h = o, e, such that the following con-
ditions are satisfied:
       (i) Optimality: given interest rates, the household decisions solve the house-
           hold problem.
      (ii) Feasibility: the market for bond and the market for good clear for all t:
                                  P           h
                                  Ph=o,e N cht = N
                                     h=o,e N bt  = 0.
286                           18. CREDIT AND CURRENCY

b. We form the Lagrangian of the household problem:
                    +∞
                    X
                h
                              ©             ¡                            ¢ª
              L =          β t u(cht ) − λht cht + bht − yth − Rt−1 bht−1 .
                     t=0
The first order conditions are:

                              cht : u0 (cht ) = λht
                              bht : λht       = βλht+1 ,
and an appropriate sufficient transversality condition is
                                          ¡       ¢
                                lim β T λT B + bhT = 0.
                              T →+∞
We guess and verify that there is an equilibrium in which Rt = β −1 for all t. The
second equation implies that, in such an equilibrium, λht is constant. Then, the
first equation implies that consumption is constant as well. Now consider the
budget constraint of agent h, it implies that:

                      bht = yth − ch + β1 bht−1
                          = yth − ch + β1 (yt−1
                                             h
                                                − ch ) + β12 bht−2 .
Remember that the endowment process is of period 2. This means that yth − ch +
1
  (y h − ch ) is constant. Therefore bht follows a time invariant linear difference
β t−1
equation of the form bht = constant + β12 bht−2 . This difference equation has one
stationary solution and an infinity of non-stationary solutions growing at rate β1 .
But the transversality condition imposes that bond holdings cannot grow at a
rate greater or equal than β. This implies that
                                   bht = bht−2   ∀t ≥ 1
.
Since bh−1 = 0, the above restriction implies that, for t = 2k+1, bh2k+1 = 0. What’s
left to compute is bht for t = 2k, co and ch . To do so write the odd agent budget
constraints:

                                  t = 2k :    co + bo2k = 1
                                  t = 2k + 1 : co = β1 bo2k ,
                                   β
which implies that bo2k = −be2k = 1+β . The corresponding equilibrium consump-
           o   1         e    β
tions are c = 1+β and c = 1+β .
c. The equilibrium allocation is Pareto optimal since

                                u0 (cot )
                                          = constant.
                                u0 (cet )
Calculations identical to those of exercise 18.1 show that the equilibrium alloca-
tion is the one corresponding to the Arrow-Debreu equilibrium of this economy.
                               18. CREDIT AND CURRENCY                                   287

    Exercise 18.3. Stock Market
Consider a “stock market” version of an economy with endowment and preference
structure identical to the one in the previous economy. Now odd and even agents
begin life owning one of two types of “trees.” Odd agents own the “odd” tree,
which is a perpetual claim to a dividend sequence
                                {yto }∞
                                      t=0 = {1, 0, 1, 0, . . .},

while even agents initially own the “even” tree, which entitles them to a perpetual
claim on dividend sequence
                                {yte }∞
                                      t=0 = {0, 1, 0, 1, . . .}.

Each period, there is a stock market in which people can trade the two types of
trees. These are the only two markets open each period. The time-t price of type
j trees is ajt , j = o, e. The time-t budget constraint of agent h is
                 cht + aot sho   e he     o    o ho        e    e he
                            t + at st ≤ (at + yt )st−1 + (at + yt )st−1 ,

where shj
        t is the number of shares of stock in tree j held by agent h from t to
                                         jk
t + 1. We assume that soo       ee
                       −1 = 1, s−1 = 1, s−1 = 0 for j 6= k.

a. Define an equilibrium of the stock market economy.
b. Compute an equilibrium of the stock market economy.
c. Compare the allocation of the stock market economy with that of the corre-
sponding Arrow-Debreu economy.

    Solution
a. The household problem is to maximize
                                        +∞
                                        X
                                             β t u(cht ),
                                       t=0
                  h ho he +∞
with respect to {ct , st , st }t=0 , and subject to

                    cht + aot sho   e he     o    o ho        e    e he
                               t + at st ≤ (at + yt )st−1 + (at + yt )st−1
                    sho o    he e
                     t at + st at ≥ −A,

where A ≥ 0 is some borrowing constraint which is chosen large enough so that
it never binds.
   Definition 21. A competitive equilibrium is a two price sequences {aot , aet }+∞     t=0 ,
                                                he +∞
sequences of household decisions {cht , sho
                                         t  , s t } t=0 , h = o, e, such that the following
conditions are satisfied:
      (i) Optimality: given tree prices, the household decisions solve the house-
          hold problem.
288                                 18. CREDIT AND CURRENCY

          (ii) Feasibility: the tree market and the good market clear for all t ≥ 0:
                                        P          ho
                                                   t = 1
                                        Ph=o,e N she
                                        Ph=o,e N sht = 1
                                          h=o,e N ct = 0.

b. We form the Lagrangian of the household problem:

           +∞
           X
      h
                     ©             ¡                                                       ¢ª
 L =              β t u(cht ) − λht cht + aot sho   e he     o    o ho        e    e he
                                               t + at st − (at + yt )st−1 − (at + yt )st−1    .
            t=0

The first order conditions are:

                        cht : u0 (cht ) = λht
                        sho
                          t :   λht aot = βλht+1 (aot+1 + yt+1
                                                           o
                                                               )
                          he     h e          h    e       e
                        st : λt at = βλt+1 (at+1 + yt+1 ).
An appropriate sufficient transversality condition is
                                          ¡                 ¢
                                lim β T λT sho o    he e
                                            t at + st at − A = 0.
                              T →+∞

We guess and verify that there is a competitive equilibrium with cht = ch =
constant. Then, the first equation implies that λht is also constant and, with the
transversality condition, the second and third equation can thus be written:
                                                 P
                        aot = β(aot+1 + yt+1
                                         o
                                             ) = P+∞     t o
                                                   τ =1 β yt+τ
                          e      e       e        +∞ t e
                        at = β(at+1 + yt+1 ) = τ =1 β yt+τ .
                                                                                     β        2
In odd period (resp. even), the odd tree (resp. even) has value β 2 +β 4 +. . . = 1−β   2
                                                   3            β
and the even tree (resp. odd) has value β + β + . . . = 1−β 2 .
A constant consumption ch can be achieved by the constant portfolio (sho , she ) =
                                                                                β
(ch , ch ). Note that the price of this portfolio is itself constant, equal to 1−β ch .
Our candidate equilibrium has the following features: at time t = 0, the household
trades its initial portfolio (its periodic endowment) for a portfolio of the type
(ch , ch ), which synthesizes the constant consumption stream cht = ch . Then, from
t = 1 on, the household holds the same portfolio: there is no trade on the tree
market. The ch , h = o, e, are given by the budget constraint at time 0:

                                               β o          β2
                                  co :   co +     c =1+
                                              1−β         1 − β2
                                               β e      β
                                  ce :   ce +     c =        ,
                                              1−β     1 − β2
which imply that co = 1/(1 + β) and ce = β/(1 + β).
c. As in question (18.3) this allocation is the one corresponding to the Arrow-
Debreu economy.
                            18. CREDIT AND CURRENCY                                  289

   Exercise 18.4. Inflation

Consider a Townsend turnpike model in which there are N odd agents and N
even agents who have endowment sequences, respectively, of
                             {yto }∞
                                   t=0 = {1, 0, 1, 0, . . .}
                                e ∞
                             {yt }t=0 = {0, 1, 0, 1, . . .}.
                                                               P∞      t
Households of each type order consumption sequences by            t=0 β u(ct ). The gov-
ernment makes the stock of currency move according to
                               Mt = zMt−1 ,       t ≥ 0.
At the beginning of period t, the government hands out (z − 1)mht−1 to each
type-h agent who held mht−1 units of currency from t − 1 to t. Households of type
h = o, e have time-t budget constraint of
                     pt cht + mht ≤ pt yth + mht−1 + (z − 1)mht−1 .


a. Guess that an equilibrium endowment sequence of the periodic form (18.9)
exists. Make a guess at an equilibrium price sequence {pt } and compute the
equilibrium values of (c0 , {pt }). Hint: Make a “quantity theory” guess for the
price level.
b. How does the allocation vary with the rate of inflation? Is inflation “good” or
“bad”? Describe odd and even agents’ attitudes toward living in economies with
different values of z.
   Solution
a. The first order condition of the household problem has the same form as in
the text:

                     pt u0 (cht+1 )
                    β               ≤1   = 1 if mht > 0.
                    pt+1 u0 (cht )
We guess a periodic equilibrium of the kind described in the text. The con-
sumption stream and the money holding sequence of the agents has the following
form:

                         co = {co , 1 − co , co , . . .}
                         ce = {1 − co , co , 1 − co , . . .}
                         mo = {M1 , 0, M3 , 0, . . .}
                         me = {0, M2 , 0, M4 , . . .}.
We make the expected “quantity theory” guess for the price level:

                                       pt = z t p0 .
This allocation of consumption and money is feasible. We just need to set co and
po such that it satisfies both the first order condition and the budget constraints.
co must be chosen such that:
290                             18. CREDIT AND CURRENCY



                     β u0 (1 − co )        u0 (1 − co )   z
                           0  o
                                    = 1 ⇔      0  o
                                                         = > 1.
                      z u (c )                u (c )      β
The left hand size is an increasing function of c since u0 (x) is a positive and
                                                       o

decreasing function. Furthermore, from the Inada conditions, the left hand side
goes to 0 as co → 0 and to +∞ as co → 1. Therefore, the above equation has a
unique solution co (z). Since the left hand side is increasing and is 1 at co = 12 ,
we know that co (z) > 12 . Also, since the left hand side is increasing in co and the
right hand side is increasing in z, co (z) is an increasing function of z. In other
words, more inflation increases consumption fluctuations. Lastly, since both the
left and the right hand side are differentiable, co (z) is differentiable – this is
needed because we’ll take derivative in the next question.
Note that the first order condition is also met in period of zero money holding:
                                              µ ¶2
                             β u0 (co )        β
                                            =      < 1.
                             z u0 (1 − co )    z
Now the price level p0 is found by using the agent budget constraint when money
holding is positive:

                             Mt                      M0
                          pt co +
                                = p t ⇔ p t co + z t    = pt ,
                             N                       N
which implies that pt has the expected form:

                               M0                M0
                          pt = z t  o
                                       ⇒ p0 =             .
                            N (1 − c )        N (1 − co )
Note that the budget constraint when money holding is zero is also verified :

                   Mt                         Mt−1           Mt−1
               pt co + = pt ⇔ pt (1 − co ) =       + (z − 1)      .
                   N                            N             N
b. The intertemporal utilities of the agents are:
                                     1
                         U o (z) = 1−β        o                o
                                       2 (u (c (z)) + βu (1 − c (z)))
                                     1
                         U e (z) = 1−β            o            o
                                       2 (u (1 − c (z)) + βu (c (z))) .

                                                                      0       o
Taking derivative with respect to z and using the fact that βz u u(1−c
                                                                   0 (co )
                                                                           )
                                                                             = 1, we find:
                             dU o     1 dco 0 o
                                  = 1−β 2 dz u (c )(1 − z) < 0
                              dz                    ³      ´
                             dU e     1 dco 0 o          z
                              dz
                                  = 1−β 2 dz
                                             u (c )  β − β
                                                             < 0.
                                                                          o
The sign of these derivatives is found by noting that u0 > 0, dc
                                                               dz
                                                                   > 0 and z > 1.
This means that both agents are worse off when inflation increase. This is because
inflation increases consumption fluctuations and therefore pushes the equilibrium
allocation further away from the Pareto frontier where consumption stream are
constant. Note also that
                             18. CREDIT AND CURRENCY                            291


                             dU e     dU o
                                  <        < 0.
                              dz       dz
Which means that the even agent suffers higher welfare loss than the odd agent.

   Exercise 18.5. A Friedman-like scheme
Consider Friedman’s scheme to improve welfare by generating a deflation. Sup-
pose that the government tries to boost the rate of return on currency above β −1
by setting β > (1 + τ ). Show that there exists no equilibrium with an allocation
of the class (18.9) and a price level path satisfying pt = (1 + τ )pt−1 , with odd
agents holding mo0 > 0. [That is, the piece of the “restricted Pareto optimality
frontier” does not extend above the allocation (.5,.5) in Figure 18.3.]
   Solution
From the text we know that a candidate equilibrium must satisfy the two following
first order condition:
                                                             0 (co )
                         When mt > 0 :             1
                                                  1+τ
                                                      = βuu0 (1−c    o)
                                                   1    u0 (1−co )
                         When mt = 0 :            1+τ
                                                      ≤ βu0 (co ) .
Replacing the first equation in the second one yields the following necessary
condition for equilibrium existence:
                                 µ      ¶2
                                     β
                                            ≤ 1,
                                   1+τ
which shows the claim: there exists no equilibrium of the required class such that
β > 1 + τ.

   Exercise 18.6. Distribution of currency
Consider an economy consisting of large and equal numbers of two types of infin-
itely lived agents. There is one kind of consumption good, which is nonstorable.
“Odd” agents have period-2 endowment pattern {yto }∞      t=0 , while “even” agents
                                         e ∞
have period-2 endowment pattern {yt }t=0 . Agents of both types have preferences
that are ordered by the utility functional
                       X∞
                           β t ln(cit ), i = o, e, 0 < β < 1,
                       t=0

where cit is the time-t consumption of the single good by an agent of type i.
   Assume the following endowment pattern:
                              yto = {1, 0, 1, 0, 1, 0, . . .}
                              yte = {0, 1, 0, 1, 0, 1, . . .}.
Now assume that all borrowing and lending is prohibited, either ex cathedra
through legal restrictions or by virtue of traveling and locational restrictions
292                        18. CREDIT AND CURRENCY

of the kind introduced by Robert Townsend. At time t = 0, all odd agents are
endowed with αH units of an unbacked, inconvertible currency, and all even units
are endowed with (1 − α)H units of currency, where α ∈ [0, 1]. The currency is
denominated in dollars and is perfectly durable. Currency is the only object that
agents are permitted to carry over from one period to the next. Let pt be the price
level at time t, denominated in units of dollars per time-t consumption good.
a. Define an equilibrium with valued fiat currency.
b. Let an “eventually stationary” equilibrium with valued fiat currency be one
in which there exists a t̄ such that for t ≥ t̄, the equilibrium allocation to each
type of agent is of period 2 (i.e., for each type of agent, the allocation is a
periodic sequence that oscillates between two values). Show that for each value
of α ∈ [0, 1], there exists such an equilibrium. Compute this equilibrium.

      Solution
a. Let us first write the household problem:
                                                     P+∞ t       i
                                   max{cit ,mit }+∞
                                                 t=0   t=0 β ln(ct )
                    subject to     pt cit + mit ≤ pt yti + mit−1
                                   mit ≥ 0.
     Definition 22. A competitive equilibrium with valued fiat currency is a pos-
itive price process {pt }+∞ t=0 with pt < +∞ and a sequence of household decisions
   i    i +∞
{ct , mt }t=0 , i = o, e, such that the two following conditions are satisfied:
        (i) Optimality Given prices, the household decisions solve the household
            problem.
       (ii) Feasibility The market for consumption and the market for money clear
            for all t ≥ 0:            P          i
                                      Pi=o,e N ct i= N
                                         i=o,e N mt = H.

b. We guess and verify that there exists an eventually stationary equilibrium
such that t̄ = 1. In other words, we look for an equilibrium of the form:

                            co = {coα , 1 − co , co , . . .}
                            ce = {1 − coα , co , 1 − co , . . .}
                            mo = {H, 0, H, 0, . . .}
                            me = {0, H, 0, H, . . .}
                            p = {p0 , p1 , p1 , p1 . . .}.
The first order conditions are the same as in the text. Specifically, we have:
                       1        1 pt
                        i
                          ≥β i           = if mit > 0.
                       ct     ct+1 pt+1
First, when money holdings are positive and t ≥ 1, we have:
                            1 − co             1
                                o
                                   = β ⇒ co =     .
                              c               1+β
                               18. CREDIT AND CURRENCY                           293

When money holdings are zero, we check that:
                                   co      1
                                       o
                                         = > β.
                                  1−c      β
The price level for t ≥ 1 is found using the odd agent budget constraint:
                               H                     H
                        p1 co +   = p1 ⇒ p1 =                .
                               N                 N (1 − co )
Similarly, at t = 0, the odd agent first order condition implies:
                                1 − co       p0
                                   o
                                       =β .
                                  cα         p1
Also, the odd agent budget constraint gives:

                          H          H           (1 − α)H
                    p0 coα + = p0 + α ⇒ p0 =                  .
                          N          N           N (1 − coα )
Replacing the expression for p1 and p0 into the odd agent first order condition
gives:
                                           1
                                   coα =          .
                                     1 + (1 − α)β
Note that when α = 0 we find, as expected, the equilibrium consumption de-
scribed in the text.
We now need to verify that the first order condition of the even agent is satisfied.
We have, using the expression for p0 and p1 :
                               co                  o          o
                             1−coα
                                   ≥ β pp01   c
                                           ⇔ 1−c       1−c
                                                 o ≥ β 1−co
                                                 α        α
                                                   1        1
                    ⇔        c ≥ β(1 − co ) ⇔ 1+β
                              o
                                                     ≥ β 2 1+β ,
which is true since β < 1.

   Exercise 18.7. Capital overaccumulation
Consider an environment with equal numbers N of two types of agents, odd and
even, who have endowment sequences
                        {yto }∞
                              t=0 = {1 − ε, ε, 1 − ε, ε, . . .}
                           e ∞
                        {yt }t=0 = {ε, 1 − ε, ε, 1 − ε, . . .}.
Here ε is a small positive number that isPvery close to zero. Households of each
type h order consumption sequences by ∞          t    h
                                            t=0 β ln(ct ) where β ∈ (0, 1). The one
good in the model is storable. If a nonnegative amount kt of the good is stored
at time t, the outcome is that δkt of the good is carried into period t + 1, where
δ ∈ (0, 1). Households are free to store nonnegative amounts of the good.
a. Assume that there are no markets. Households are on their own. Find
the autarkic consumption allocations and storage sequences for the two types of
agents. What is the total per-period storage in this economy?
294                           18. CREDIT AND CURRENCY

b. Now assume that there exists a fiat currency, available in fixed supply of M ,
all of which is initially equally distributed among the even agents. Define an
equilibrium with valued fiat currency. Compute a stationary equilibrium with
valued fiat currency. Show that the associated allocation Pareto dominates the
one you computed in part a.
c. Suppose that in the storage technology δ = 1 (no depreciation) and that there
is a fixed supply of fiat currency, initially distributed as in part b. Define an
“eventually stationary” equilibrium. Show that there is a continuum of eventually
stationary equilibrium price levels and allocations.

      Solution

a. In autarky the household problem is:
                                                   P+∞ t
                                   max{ct ,kt }+∞
                                               t=0  t=0 β ln(ct )
                    subject to     kt = yt + δkt−1 − ct
                                   kt ≥ 0, k−1 = 0.
The first order necessary condition takes the usual form:

                       u0 (ct ) ≥ βδu0 (ct+1 ) = if kt > 0.
It is natural to guess that there is a periodic solution, that the household stores
in high endowment periods and eat all storage (and store nothing) in low endow-
ment periods.

More precisely, we guess that the odd agent chooses:

                           c = (co , ce , co , ce , . . .)
                           k = (k o , 0, k o , 0, . . .),
and that the even agent chooses:

                            c = (ε, co , ce , co , . . .)
                            k = (0, k o , 0, k o , . . .).
Notice that ε > 0 is needed to make sure that the even agent has something to
eat in period 0.

Let’s verify this guess. First, use the budget constraint to write all expressions
in term of k o . We obtain co = 1 − ε − k o and ce = ε + δk o . We use the first order
condition in high endowment period to find k o :
                             1            βδ
                             co
                                      =   ce
                             1              βδ
                        ⇔ 1−ε−k o     =   ε+δko
                                           β                  1
                        ⇔ ko          =   1+β
                                               (1 − ε) − ε δ(1+β) .
Note that k o is positive provided that ε is small enough. The first order condition
holds as well in low endowment period:
                             18. CREDIT AND CURRENCY                                295


                                1     (βδ)2        βδ
                                 e
                                   >      e
                                               = o.
                               c        c          c
b. In the monetary economy the household problem is:
                                                   P+∞ t
                               max{ct ,mt ,kt }+∞
                                               t=0    t=0 β ln(ct )
                 subject to    ct + pt + kt = yt + mpt−1
                                     mt
                                                           t
                                                             + δkt−1
                               kt ≥ 0, k−1 = 0
                               mt ≥ 0, m−1 ,
and an equilibrium is defined as follows:
      Definition 23. A competitive equilibrium with valued fiat currency is a pos-
itive price process {pt }+∞      t=0 with pt < +∞ and a sequence of household decisions
{cit , mit , kti }+∞
                  t=0 , i = o, e, such that the two following conditions are satisfied:
         (i) Optimality Given prices, the household decisions solve the household
                problem.
        (ii) Feasibility The market for consumption and the market for money clear
                for all t ≥ 0:
                                     P           i
                                                     P          i
                                     Pi=o,e  N c t +   i=o,e N kt = N
                                                   i
                                       i=o,e N mt = M.

We guess and verify that there exists a stationary equilibrium of the usual form.
Price pt = constant = p so that the gross return on money is 1, allocations
are periodic and capital is not stored since it is dominated in return by money.
Precisely, the odd agent choice is:

                        c = (co , 1 − co , co , 1 − co . . .)
                        m = (M, 0, M, 0 . . .)
                        k = (0, 0, 0, 0 . . .),
and the even agent choice is

                         c = (1 − co , co , 1 − co , co . . .)
                         m = (0, M, 0, M . . .)
                         k = (0, 0, 0, 0 . . .).
This candidate allocation is feasible. We just need to check optimality, i.e. the
first order conditions and the budget constraints. The first order condition in
high endowment period is:
                            1      β            1
                              o
                                =     o
                                        ⇔ co =      .
                            c     1−c          1+β
The first order condition in low endowment period is also satisfied since

                                   1       β2      β
                                     o
                                       >      o
                                                = o.
                                1−c      1−c      c
The price level is set to satisfy the budget constraint in high endowment period.
296                          18. CREDIT AND CURRENCY


                           M                     M
                         co + =1−ε⇔p=                   .
                           p                 1 − ε − co
Note that we need ε small enough to ensure that p > 0.

The utility of the odd agent in one of the previous periodic allocation is of the
form:
                                  1
                           Uo =        (ln(co ) + β ln(ce )) .
                               1 − β2
The utility of the even agent is of the form:

                              U e = ln(ce0 ) + βU o .
Note that, if ε is small enough, the time zero consumption of the even agent
is lower in autarky (question a.) than in the monetary economy (question b.).
Thus, in order to prove that the agents are better off in the monetary economy
it is enough to show that:

                      U o (question a.) > U o (question b.).
It is convenient to write the utility difference as:
  1                                            1                 β
  1+β (U o (question b) − U o (question a)) = 1+β ln (xo (δ)) + 1+β ln (xe (δ))
   xo (δ) = 1 − ε + δε
  e
   x (δ) = δ(1 − ε) + ε.
Note that the first equation has the form of an expected utility. The associated
                                                           1       β
lottery has prize (xo (δ), xe (δ)), and probabilities are 1+β and 1+β . The expecta-
tion of this lottery is, when ε = 0:
                                       1 + βδ
                                               < 1.
                                       1+β
So that it is still less than 1 provided ε is small enough. Using Jensen’s inequality
we obtain:

   1                                               1             β
       (U o (question b.) − U o (question a.)) ≤        ln(1) +      ln(1) = 0.
 1+β                                              1+β           1+β
Therefore, agents are better off in the monetary equilibrium than in autarky.

c. An eventually “stationary equilibrium” is an equilibrium which becomes sta-
tionary after some T ≥ 0. For simplicity we focus on eventually stationary
equilibria with T = 1. Precisely, the price sequence is of the form

                                  p = (p, p, p, p, . . .),
where p is the price level
                              18. CREDIT AND CURRENCY                             297

The choice of the odd agent is
                  
                   c(odd) = (co , 1 − co , co , 1 − co , . . .)
                     m(odd) = (M, 0, M, 0, . . .)
                   k(odd) = (k o , 0, k o , 0, k o . . .) k = 0,
                                                            −1
and the choice of the even agent is:
                 
                  c(even) = (1 − co − k o , co , 1 − co , co , . . .)
                    m(even) = (0, M, 0, M, . . .)
                  k(even) = (0, k o , 0, k o , 0 . . .) k = 0,
                                                           −1
          o   o
where p, c , k are constant to be determined.

This candidate equilibrium is feasible by construction. We only need to check
optimality, i.e. the first order conditions and the budget constraints.

First, since capital and money earn the same return, they can be both held in
equilibrium.

In high endowment periods, the first order condition is:
                         1         1         o    1
                           =  β        ⇔   c   =      .
                        co      1 − co           1+β
In low endowment periods, the first order condition is also verified:

                                  1      β       β2
                                       >    =         .
                                1 − co   co    1 − co
Lastly, at time t = 0, the first order condition for the even agent is also verified:

                            1           1       β      β2
                                    >        >     =        .
                       1 − co − k o   1 − co    co   1 − co
p is set so that the budget constraint holds in high endowment period:
                                       M
                                co + k o + = 1 − ε.
                                        p
Note that any 0 < k o < 1 − ε − co defines an eventually stationary equilibrium.
Thus, there is a continuum of eventually stationary equilibrium.

   Exercise 18.8. Altered endowments

Consider a Bewley model identical to the one in the text, except that now the
odd and even agents are endowed with the sequences
                           yt0 = {1 − F, F, 1 − F, F, . . .}
                           yte = {F, 1 − F, F, 1 − F, . . .},
where 0 < F < (1 − co ), where co is the solution of equation (18.10).
298                         18. CREDIT AND CURRENCY

    Compute the equilibrium allocation and price level. How do these objects
vary across economies with different levels of F ? For what values of F does a
stationary equilibrium with valued fiat currency exist?

      Solution
The first order condition of the household’s problem is the same as in the text:

                        u0 (ct+1 )   u0 (ct )
                       β           ≤          = if mt > 0.
                          pt+1         pt
As in the text we guess and verify a stationary solution of the following form.
The price level is constant equal to p. The odd agent’s choice is:
                       ½
                           c = (co , 1 − co , co , 1 − co , . . .)
                           m = (M, 0, M, 0, . . .),
and the even agent’s choice is:
                       ½
                           c = (1 − co , co , 1 − co , co , . . .)
                           m = (0, M, 0, M, . . .).
This candidate equilibrium is feasible. We only need to check optimality, i.e. the
first order conditions and the budget constraints. The first order conditions are
the same as in the text. In high endowment periods, we have:

                               βu0 (1 − co ) = u0 (co ).
So that co solves the same equation as in the text. Note also that the previous
equation implies the first order condition in low endowment periods:

                       βu0 (co ) = β 2 u0 (1 − co ) < u0 (1 − co ).
p is set so that the budget constraint holds in high endowment period:

                                       M
                                  co +    = 1 − F.
                                        p
So that an equilibrium with valued fiat currency exists if and only if F < 1 − c o .
Furthermore, the price level is increasing in F , or, equivalently, the value of money
is decreasing in F . This reflects the fact that, as agents’ endowment get closer
to a full insurance point, the smoothing service provided by money becomes less
valuable.

      Exercise 18.9. Inside money ¦

Consider an environment with equal numbers N of two types of households, odd
and even, who have endowment sequences
                             {yto }∞
                                   t=0 = {1, 0, 1, 0, . . .}
                                e ∞
                             {yt }t=0 = {0, 1, 0, 1, . . .}.
                             18. CREDIT AND CURRENCY                               299
                                                            P
Households of type h order consumption sequences by ∞               t  h
                                                              t=0 β u(ct ). At the be-
ginning of time 0, each even agent is endowed with M units of an unbacked fiat
currency and owes F units of consumption goods; each odd agent is owed F units
of consumption goods and owns 0 units of currency. At time t ≥ 0, a household
of type h chooses to carry over mht ≥ 0 of currency from time t to t + 1. (We
start households out with these debts or assets at time 0 to support a stationary
equilibrium.) Each period t ≥ 0, households can issue indexed one-period debt
in amount bt , promising to pay off bt Rt at t + 1, subject to the constraint that
bt ≥ −F/Rt , where F > 0 is a parameter characterizing the borrowing constraint
and Rt is the rate of return on these loans between time t and t+1. (When F = 0,
we get the Bewley-Townsend model.) A household’s period-t budget constraint
is
                     ct + mt /pt + bt = yt + mt−1 /pt + bt−1 Rt−1 ,
where Rt−1 is the gross real rate of return on indexed debt between time t − 1
and t. If bt < 0, the household is borrowing at t, and if bt > 0, the household is
lending at t.
a. Define a competitive equilibrium in which valued fiat currency and private
loans coexist.
b. Argue that, in the equilibrium defined in part a, the real rates of return on
currency and indexed debt must be equal.
c. Assume that 0 < F < (1 − co )/2, where co is the solution of equation (18.10).
Show that there exists a stationary equilibrium with a constant price level and
that the allocation equals that associated with the stationary equilibrium of the
F = 0 version of the model. How does F affect the price level? Explain.
d. Suppose that F = (1 − co )/2. Show that there is a stationary equilibrium
with private loans but that fiat currency is valueless in that equilibrium.
                          1
e. Suppose that F = 2(1+β)    . For a stationary equilibrium, find an equilibrium
allocation and interest rate.
                                     1
f. Suppose that F ∈ [(1 − co )/2, 2(1+β) ]. Argue that there is a stationary equi-
librium (without valued currency) in which the real rate of return on debt is
R ∈ (1, β −1 ).

   Solution

a. The household problem is:
                                                   P+∞ t
                               max{ct ,mt ,bt }+∞
                                               t=0  t=0 β u(ct )
                subject to     ct + pt + bt = yt + mpt−1
                                    mt
                                                         t
                                                           + bt−1 Rt−1
                               mt ≥ 0, m−1
                               bt ≥ − RFt , b−1 ,
and an equilibrium is defined as follows:
300                          18. CREDIT AND CURRENCY

     Definition 24. A competitive equilibrium with valued fiat currency is a pos-
itive price process {pt }+∞   t=0 with pt < +∞ and a sequence of household decisions
   i    i i +∞
{ct , mt , bt }t=0 , i = o, e, such that the two following conditions are satisfied:
        (i) Optimality: Given prices, the household decisions solve the household
              problem.
       (ii) Feasibility: The market for consumption good, the market for money
              and the market for private loans clear for all t ≥ 0:
                                        P           i
                                        Pi=o,e N ct i= N
                                        Pi=o,e N mi t = M
                                           i=o,e N bt = 0.


b. We need to prove that, in an equilibrium in which private loans and money
               pt
coexist, Rt = pt+1 .
          pt
If Rt > pt+1 , private loans earn a better return than money. Thus, no agent is
willing to hold money unless it has no value (p = +∞). Therefore, in an equi-
                                                              pt
librium with valued fiat currency, it must be that Rt ≤ pt+1     . If, on the other
               pt
hand, Rt < pt+1 , it is optimal for the agents to borrow as much as possible at
the rate Rt (i.e. choose bt = −F Rt
                                    ) in order to buy money. This cannot be an
equilibrium on the market for private loans. Therefore, in an equilibrium with
                                               pt
valued fiat currency, it must be that Rt ≥ pt+1   . The last two inequalities imply
that Rt = pt /pt+1 , meaning that money and private loans earn the same return
in equilibrium.

c. We guess and verify a stationary solution of the following form. The price
level is constant equal to p. The return on private loan is constant equal to 1.
The odd agent’s choice is:
                       
                        c = (co , 1 − co , co , 1 − co , . . .)
                          m = (M, 0, M, 0, . . .)
                        b = (F, −F, F, −F, . . .).

And the even agent’s choice is:
                     
                      c = (1 − co , co , 1 − co , co , . . .)
                        m = (0, M, 0, M, . . .)
                      b = (−F, F, −F, F, . . .).

This candidate equilibrium is feasible and satisfies the borrowing constraints. We
only need to check optimality, i.e. the first order conditions and the budget con-
straints.

   When money and private loans coexist and earn the same return, the first
order condition is a slightly modified version of (18.8) :
                            18. CREDIT AND CURRENCY                              301


                  u0 (ct )   βu0 (ct+1 )                −F
                           ≥             = if bt + mt >    .
                    pt         pt+1                     Rt
In high endowment periods, the usual (18.10) holds, namely:

                                u0 (co ) = βu0 (1 − co ),
which also implies the first order condition in low endowment periods. The price
level p is set so that the budget constraints hold. Specifically, in high endowment
period, we have:

                                  M
                               co +  + F = 1 − F.
                                   p
Note that it implies the budget constraint in low endowment period. It is clear
that the above has a solution 0 < p < +∞ if and only if:

                                            1 − co
                                      F <          .
                                              2
               o
d. If F = (1−c
             2
               )
                 , we can repeat the analysis with pt = +∞. Precisely, we guess
and verify that there exists an equilibrium of the same form as in the previous
question, but in which agents hold no money. The return on private loans is
R = 1. The first order condition becomes:

                                                              −F
                      u0 (ct ) ≥ βRt u0 (ct+1 )   = if bt >      .
                                                              Rt
The same analysis go through.
              1
e. If F = 2(1+β) , we show that we can support a Pareto optimal allocation. As the
aggregate endowment is constant, it gives constant consumption streams to the
agents. It is natural to guess that both agents have the same consumption stream,
with initial bond holdings b−1 that are to be chosen to ensure this symmetry.

                                    1 1 1
                               c = ( , , , . . .).
                                    2 2 2
We guess that the gross interest rate is R = β −1 . The loan stream of an
odd agent is b = (βF, −βF, βF, −βF, . . .), while the one of an even agent is
b = (−βF, βF, −βF, βF, . . .).

As usual we have chosen a feasible candidate which satisfies the borrowing con-
straint bt ≥ − RFt . We only need to check the first order conditions and the budget
constraints. The first order condition clearly holds:
                                      µ ¶        µ ¶
                                    0  1       0   1
                                βRu        =u          ,
                                       2           2
while the budget constraint is, in high endowment periods:
302                        18. CREDIT AND CURRENCY


                          1      β                 1
                            +          =1−              .
                          2 2(1 + β)           2(1 + β)
Note that it implies the budget constraint in low endowment periods.
          o
f. For 1−c
         2
                        1
             < F < 2(1+β)   , we guess and verify an equilibrium of the following
form. Money is valueless so that we can assume that no agent hold money. Private
loans earn a gross return Rt = R > 1. The odd agent choice is:
                 ½           o             o        o            o
                   c = (c ¡ F (F ),F 1 F− c F(F ), c¢ (F ), 1 − c (F ), . . .)
                   b = R, −R, R, −R, . . . ,
and the even agent’s choice is:
                 ½
                   c = (1 ¡ −    co (F ), co (F ), 1¢− co (F ), co (F ), . . .)
                               F F
                   b = − R , R , − FR , FR , . . . .
This candidate equilibrium is feasible and satisfies the borrowing constraints.
We only need to check optimality, i.e. the first order condition and the budget
constraint. The first order condition and the budget constraint in high endowment
period are:
                           ½ 0 o
                               u (c ) = βRu0 (1 − co )
                               co + FR = 1 − F.
To complete the construction of an equilibrium, it is enough to solve the above
system in (co , R). Note that the budget constraint in high endowment period
implies the budget constraint in low endowment period. Also the first order
condition in high endowment period implies the first order condition in low en-
dowment periods provided Rβ < 1. Therefore, we look for a solution R < β1 .
                                          ¡ 1+R ¢
The second equation gives 1 − co = F         R
                                                    . Replacing this expression in the
first equation, we obtain:
                                  ¡ ¡    ¢¢
                                u0 F 1+R
(225)                      βR 0 ¡     ¡R ¢¢ = 1.
                             u 1 − F 1+RR

The left hand side of (225)is an increasing function of R. When evaluated at
R = 1 it is:

                                        u0 (2F )
(226)                            β                ,
                                     u0 (1 − 2F )
                                                           o                o
a decreasing function of F which is 1 when F = 1−c  2
                                                      . Since F > 1−c
                                                                   2
                                                                      , (226) is
                     1
less than 1. At R = β > 1, the left hand side of (225) is:

                                  u0 (F (1 + β))
(227)                                             ,
                               u0 (1 − F (1 + β))
                             18. CREDIT AND CURRENCY                                  303

                                                   1                  1
a decreasing function of F which is 1 when F = 2(1+β)  . Since F < 2(1+β) , (227)
                                                                        1
is greater than 1. This shows that (225) has a unique solution 1 < R < β .

   Exercise 18.10. Initial conditions and inside money ¦
Consider a version of the preceding model in which each odd person is initially
endowed with no currency and no IOUs, and each even person is initially endowed
with M/N units of currency, but no IOUs. At every time t ≥ 0, each agent can
issue one-period IOUs promising to pay off F/Rt units of consumption in period
t + 1, where Rt is the gross real rate of return on currency or IOUs between
periods t and t + 1. The parameter F obeys the same restrictions imposed in
exercise 18.9.
a. Find an equilibrium with valued fiat currency in which the “tail” of the
allocation for t ≥ 1 and the tail of the price level sequence, respectively, are
identical with that found in exercise 18.9.
b. Find the price level, the allocation, and the rate of return on currency and
consumption loans at period 0.

   Solution
Since we look for an equilibrium with valued fiat currency we impose 0 < F <
1−co
  2
      . Our candidate equilibrium is of the following form. The sequence of price is
(p0 , p, p, . . .), where p is the price in exercise 18.9. The sequence of interest rates
is (R0 , 1, 1, . . .). The choice of an odd agent is:
                             
                              c = (co0 , 1 − co , co , 1 − co . . .)
                                m = (M, 0, M, 0, . . .)
                              b = ( F , −F, F, −F, . . .),
                                          R0
and the choice of the even agent is:
                             
                              c = (1 − co0 , co , 1 − co , co . . .)
                                m = (0, M, 0, M, . . .)
                              b = ( −F , F, −F, F, . . .).
                                          R0
As in exercise 18.9, private loans and money must earn the same return. There-
fore R0 = pp0 .

The candidate allocation is feasible and satisfies the borrowing constraints. We
only need to check optimality, i.e. the first order condition and the budget con-
straint. From exercise 18.9, we already know that they are satisfied for t ≥ 1.
We only need to check them at t = 0. Let’s focus first on the odd agent. The
first order condition and the budget constraint are:
                             (
                                βR0 u0 (1−co )
                                   u0 (co0 )
                                                 = 1
                                 o     M       F
                                c0 + p0 + R0 = 1.
304                         18. CREDIT AND CURRENCY

Remember pp0 = R0 . Now we use the budget constraint to express co0 in term of
R0 and replace it in the first order condition. We find:

                                βR0 u0 (1 − co )
                              ³         ³        ´´ = 1.
                            u0 1 − R10 Mp + F
The left hand side is an increasing function of R0 . At R0 = 1, it is

                   βu0 (1 − co )   βu0 (1 − co ) βu0 (1 − co )
                   ³             ´> ³         ´=               = 1,
                 u0 1 − Mp − F     u0 1 − Mp       u0 (co )

and, when R0 → M 1+F , it goes to 0 because of the Inada conditions. Thus, the
                    p

above system of equation has a unique solution M 1+F < R0 < 1. Note that the
                                                     p
lower bound on R0 implies that co0 > 0, as expected.

Let’s now check optimality for the even agent. Her budget constraint is implied
                                                            0 (co )
by the odd agent’s one. We only need to show that uβu    0 (1−co ) < 1. To do so, use
                                                                 0
first the odd agent’s first order condition to notice that:

                            βR0 u0 (1 − co )    u0 (1 − co )
                        1=                   <β              .
                                 u0 (co0 )         u0 (co0 )
The right hand side is an increasing function of co0 which takes value 1 at co0 = co .
Therefore co0 > co . Now consider the even agent’s first order condition:

                           βR0 u0 (co )    βR0 u0 (co )
                                         <              < 1.
                           u0 (1 − co0 )   u0 (1 − co )
The first inequality holds because co0 > co . The second one because R0 < 1 and
 βu0 (co )
u0 (1−co )
           < 1.
      Exercise 18.11.

      Solution
a. and b. At t = 0, the government issues M̄ − M units of money and purchases
∆ units of IOU issued by the private sector. Then, the government uses the
interest payments to decrease the stock of money. Since the initial condition is
an equilibrium in which fiat money and private IOU coexists (an equilibrium of
the type derived question c of exercise 18.9), we impose F < (1 − co )/2, where co
solves equation (18.10).
    We guess and verify that there exists an equilibrium with zero inflation, that
is pt = p for all t ≥ 0. The consumption co is the solution of equation (18.10).
The gross return on private IOU must be the same as the return on money, that
is 1. The equilibrium is the one described in question c of exercise 18.9, with M
there replaced here by M̄ .
                           18. CREDIT AND CURRENCY                            305

    Since the government does not earn any interest on private IOU, it cannot
decrease the stock of money. The real bill experiment amounts to replace intrisi-
cally worthless and unbacked pieces of paper issued by the private sector by some
issued by the government. The amount of consumption smoothing that can be
achieved is dictated by the condition

                                    u0 (1 − co )
(228)                           β                = 1.
                                       u0 (co )
and does not depend on the quantity of money M̄ . The price level is determined
by writing the budget constraint of an agent in an high endowment period

                                          M̄
(229)                        co + F +        = 1 − F.
                                           p
which implies

                                     M
(230)                          ∆+        + 2F = 1.
                                      p
Therefore, the price level increases with ∆.

c. The “quantity theory of money” do hold in the sense that

                               M
(231)                              = 1 − co − 2F.
                                p
An increase of the stock of money of M + ∆M = M (2 + µ) results in an increase
of the price of p + ∆p = (1 + µ)p.
          CHAPTER 19

Equilibrium search and matching




              307
308                    19. EQUILIBRIUM SEARCH AND MATCHING

      Exercise 19.1. An island economy (Lucas and Prescott, 1974)

Let the island economy in this chapter have a productivity shock that takes
on two possible values, {θL , θH } with 0 < θL < θH . An island’s productivity
remains constant from one period to another with probability π ∈ (.5, 1), and its
productivity changes to the other possible value with probability 1 − π. These
symmetric transition probabilities imply a stationary distribution where half of
the islands experience a given θ at any point in time. Let x̂ be the economy’s
labor supply (as an average per market).
a. If there exists a stationary equilibrium with labor movements, argue that an
island’s labor force has two possible values, {x1 , x2 } with 0 < x1 < x2 .
b. In a stationary equilibrium with labor movements, construct a matrix Γ with
the transition probabilities between states (θ, x), and explain what the employ-
ment level is in different states.
c. In a stationary equilibrium with labor movements, we observe only four values
of the value function v(θ, x) where θ ∈ {θL , θH } and x ∈ {x1 , x2 }. Argue that the
value function takes on the same value for two of these four states.
d. Show that the condition for the existence of a stationary equilibrium with
labor movements is
(232)                              β(2π − 1)θH > θL ,
and, if this condition is satisfied, an implicit expression for the equilibrium value
of x2 is
(233)               [θL + β(1 − π)θH ] f 0 (2x̂ − x2 ) = βπθH f 0 (x2 ) .
e. Verify that the allocation of labor in part d coincides with a social plan-
ner’s solution when maximizing the present value of the economy’s aggregate
production. Starting from an initial equal distribution of workers across islands,
condition (232) indicates when it is optimal for the social planner to increase the
number of workers on high-productivity islands. The first-order condition for the
social planner’s choice of x2 is then given by equation (233).
{Hint: Consider an employment plan (x1 , x2 ) such that the next period’s labor
force is x1 (x2 ) for an island currently experiencing productivity shock θL (θH ).
If x1 ≤ x2 , the present value of the economy’s production (as an island average)
becomes
              X∞
          0.5     β t [θL f (2x̂ − x2 ) + (1 − π)θH f (2x̂ − x2 ) + πθH f (x2 )] .
              t=0
Examine the effect of a once-and-for-all increase in the number of workers allo-
cated to high-productivity islands.}
      Solution
a. We know from the text that labor movements are characterized by two in-
creasing functions X − (θ) ≤ X + (θ). Assume that the current shock is θ. If, at
                      19. EQUILIBRIUM SEARCH AND MATCHING                             309

the beginning of period, the island labor force is x < X − (θ), then outside workers
move in the island so that next period labor force is X − (θ). If, at the beginning
of a period, the island labor force is x > X + (θ), then workers move out of the
island so that next period labor force is X + (θ). Agents who move out cannot
work this period. Otherwise, that is if X − (θ) ≤ x ≤ X + (θ), all workers stay and
no outside workers move in. We discuss two cases.

   Case 1, no movements : X − (θH ) ≤ X + (θL )

This implies that, since X − and X + are increasing in θ:

                     X − (θL ) ≤ X − (θH ) ≤ X + (θL ) ≤ X + (θH ).
If the island labor force is x ∈ [X − (θH ), X + (θL )], then for all s = L, H, it is true
that X − (θs ) ≤ x ≤ X + (θs ). Thus, x is within the “moving boundaries” for all
possible θ. It implies that the island labor force never change in equilibrium.

If the initial island labor force is x < X − (θH ), then, at the first θ = θH the
island labor force becomes X − (θH ) and stay constant afterward. Similarly, if the
initial labor force is x > X + (θL ), then, at the first θ = θL , the island labor force
becomes x = X + (θL ) and stay constant afterward.

   Case 2, movements: X + (θL ) < X − (θH )

Since X − ≤ X + are increasing, this implies :

                      X − (θL ) ≤ X + (θL ) < X − (θH ) ≤ X + (θH ).
First observe that if the initial island labor force is x ≤ X + (θL ), then at the first
θ = θH , the island labor force is X − (θH ). Similarly, if the initial island labor
force is x ≥ X − (θL ), then, at the first θ = θL , the island labor force is X + (θL ).
Lastly, assume that the initial island labor force is X + (θL ) ≤ x ≤ X − (θH ). If
θ = θL , workers move out and next period labor force is X + (θL ). If θ = θH ,
workers move in and next period labor force is X − (θH ).

The above discussion shows that, for any initial labor force, the island labor force
lies eventually in the set {X + (θL ), X − (θH )}. Furthermore, once in the set, the
labor force switch back and forth between X + (θL ) and X − (θH ). From X + (θL ) to
X − (θH ) after a “positive shock” θH , and back to X − (θL ) after a “negative shock”
θL . Therefore, in a stationary equilibrium with movement, an island labor force
take only two possible values :

                            x1 ≡ X + (θL ) < X − (θH ) ≡ x2 .
b. In a stationary equilibrium, an island is in one of the following states. Re-
member that workers who are moving do not work.
310                   19. EQUILIBRIUM SEARCH AND MATCHING

      (i) (θL , x1 ). No movement. Employment is n = x1 .
     (ii) (θH , x1 ). Outside worker move in, next period labor force is x2 . Em-
          ployment is n = x1 .
    (iii) (θL , x2 ). Workers move out, next period labor force is x1 . Since worker
          move this period, employment is n = x1 .
    (iv) (θH , x2 ). No movement. Employment is n = x2 .
The above description implies that the transition matrix is :
                                                     
                                  π 1−π        0    0
                                0      0    1 − π π
                            Γ= π 1 − π
                                                      .
                                               0    0
                                  0     0    1−π π
We solve for the stationary distribution of island across states. It is a vector
q ∈ R+ 4 such that :

                                       q0Γ        = q
                                       P4
                                         i=1 qi   = 1.
Simple algebra shows that :

                                  q1 = q4 = π/2
                                  q2 = q3 = (1 − π)/2.
Observe that the proportion of islands with current shock θ1 is 1/2 as expected.

c. We know write the system of Bellman equations. We can drop the max oper-
ator since know the employment level and next period labor force in each state.



(234)               v(x1 , θL )    =   θL f 0 (x1 ) + βE [v(x1 , θ0 )|θL ]
(235)               v(x1 , θH )    =   θH f 0 (x1 ) + βE [v(x2 , θ0 )|θH ]
(236)               v(x2 , θL )    =   θL f 0 (x1 ) + βE [v(x1 , θ0 )|θL ]
(237)               v(x2 , θH )    =   θH f 0 (x2 ) + βE [v(x2 , θ0 )|θH ] .
Clearly v(x1 , θL ) = v(x2 , θL ). This reflect the fact that, if the initial labor force
is x2 and the current shock is θL , agents are moving out of the island and thus
are not working.

d. To simplify notations we number the states 1, 2, 3, 4 as in question b. We note
f1 = f 0 (x1 ) and f2 = f 0 (x2 ). The system of Bellman equations is:

(238)                   w2 = θH f1 + β(πw4 + (1 − π)w3 )
(239)                   w3 = θL f1 + β(πw3 + (1 − π)w2 )
(240)                   w4 = θH f2 + β(πw4 + (1 − π)w3 ).
                     19. EQUILIBRIUM SEARCH AND MATCHING                            311

Those are only three equations and we have 5 unknowns : w2 , w3 , w4 , x1 , x2 . We
need two more equations. The first expresses that in state 3 (x2 , θL ), agents are
indifferent between staying and moving :

(241)                         w3 = β(πw4 + (1 − π)w3 ).
The left hand side is the value of staying and the right hand side is the value of
moving (to an island who is currently in θH ). The second additional equation
expresses that the steady state labor force is x̂ :

(242)                             x̂ = 1/2(x1 + x2 ).
We solve the system as follows. First substitute equation (241) in equation (238)
to obtain :

(243)                              w 2 = θ H f1 + w 3 ,
substitute (243) in (239) :

(244)                    w3 (1 − β) = θL f1 + β(1 − π)θH f1 ,
now eliminate w4 in equations (240) and (241). This gives :

(245)                           w3 (1 − β) = βπθH f2 .
Equate (244) and (245) :

(246)                 (θL + θH β(1 − π)) f 0 (x1 ) = βπθH f 0 (x2 ).
Using x1 = 2x̂ − x2 (that is equation (242)) gives the expression of the text. This
last equation characterize uniquely a stationary equilibrium with labor movement.
Remember that it is only a “necessary condition”. We need to verify that the
candidate equilibrium we found is indeed an equilibrium. In particular, we need
to check that:

                                       x1 < x 2 .
Since f 0 is a strictly decreasing function, it is equivalent to check that f 0 (x1 ) >
f 0 (x2 ). From (246) this is equivalent to θL + θH β(1 − π) < βπθH . Rearranging
gives:

(247)                             θL < βθH (2π − 1).
e. In this question we show the following: (247) is a necessary condition for a
steady state to be an optimum in a planning problem. The planner is constraint
by the same “moving technology” as the agents. Namely, if the planner moves
some worker from island A to island B, then the workers cannot work this period
312                      19. EQUILIBRIUM SEARCH AND MATCHING

and are available for work next period in island B.

Consider a steady state that has the same form as in the competitive equilibrium.
The steady state is characterized by two numbers x1 < x2 . x1 is the labor force
in an island who experienced shock θL last period, and x2 is the labor force in
an island who experienced θH last period. The steady state distribution and
the employment levels that we derived in question b imply that, the aggregate
production in this steady state is, per period :

(248)            1/2θL f (x1 ) + 1/2(1 − π)θH f (x1 ) + 1/2πθH f (x2 ).
We now conduct two variational experiments. The first one goes as follows.
Suppose that the planner wants to move the economy to the steady state (x1 −
ε, x2 + ε), for some ε > 0 small. In order to do so she moves today ε of agents
from islands experiencing shock θL . Then, from tomorrow on, the economy is in
the steady state (x1 − ε, x2 + ε).
    The payoff associated with this variational experiment is :

                               β
(249) −1/2εθL f 0 (x1 ) + 1/2ε     (−θL f 0 (x1 ) − (1 − π)θH f 0 (x1 ) + πθH f 0 (x2 )) .
                             1−β
The first term reflect the cost of moving ε agents (who cannot work) from θL
islands. The second term is the gain of moving to steady state (x1 − ε, x2 + ε),
from tomorrow on.

If (x1 , x2 ) is an optimum then (249) must be negative. Rearranging gives :

(250)                  θL f 0 (x1 ) + β(1 − π)θH f 0 (x1 ) ≥ βπθH f 0 (x2 ).
To obtain the reverse inequality, we conduct the following variational experiment.
We start from the steady state (x1 , x2 ). In a given period there is a fraction
(1 − π)/2 of islands in state (x2 , θL ) and a fraction (1 − π)/2 of islands in state
(x1 , θH ). Suppose that the planner moves x2 − x1 − ε from (x2 , θL ) to (x1 , θH )
where, as before, ε is a small positive number. Then, from tomorrow on, a fraction
1 − π of the islands lives in steady state (x1 + ε, x2 − ε) and a fraction π still
lives in steady state (x1 , x2 ). In other word, this experiment engineers a change
of steady state for a fraction 1 − π of the population. The payoff associated with
this experiment is:
                   ·                                                                ¸
                           0     β         0                   0             0
(251) ε(1 − π)/2 θL f (x1 ) +         (θL f (x1 ) + (1 − π)θH f (x1 ) − πθH f (x2 )) .
                              1−β
The first term is positive because the planner moves less agents today than it
would have in steady state (x1 , x2 ). Rearranging produce the inequality :

(252)                  θL f 0 (x1 ) + β(1 − π)θH f 0 (x1 ) ≤ βπθH f 0 (x2 ).
                     19. EQUILIBRIUM SEARCH AND MATCHING                          313

Thus, if a steady state solves the planning problem, it is uniquely characterized
by :

                   θL f 0 (x1 ) + β(1 − π)θH f 0 (x1 ) = βπθH f 0 (x2 ).


   Exercise 19.2. Business cycles and search (Gomes, Greenwood and Rebelo,
1997)

Part 1 The worker’s problem
Think about an economy in which workers all confront the following common
environment: Time is discrete. Let t = 0, 1, 2, . . . index time. At the beginning of
each period, a previously employed worker can choose to work at her last period’s
wage or to draw a new wage. If she draws a new wage, the old wage is lost and she
will be unemployed in the current period. She can start work at the new wage in
the next period. New wages are independent and identically distributed from the
cumulative distribution function F , where F (0) = 0, and F (M ) = 1 for M < ∞.
Unemployed workers face a similar problem. At the beginning of each period, a
previously unemployed worker can choose to work at last period’s wage offer or to
draw a new wage from F . If she draws a new wage, the old wage offer is lost and
she can start working at the new wage in the following period. Someone offered
a wage is free to work at that wage for as long as she chooses (she cannot be
fired). The income of an unemployed worker is b, which includes unemployment
insurance
    P∞ and the        value of home production. Each worker seeks to maximize
                  t t
E0 t=0 (1 − µ) β It , where µ is the probability that a worker dies at the end
of a period, β is the subjective discount factor, and It is the worker’s income in
period t; that is, It is equal to the wage wt when employed and the income b when
unemployed. Here E0 is the mathematical expectation operator, conditioned on
information known at time 0. Assume that β ∈ (0, 1) and µ ∈ (0, 1).
a. Describe the worker’s optimal decision rule. In particular, what should an
employed worker do? What should an unemployed worker do?
b. How would an unemployed worker’s behavior be affected by an increase in µ?
Part 2 Equilibrium unemployment rate
The economy is populated with a continuum of the workers just described. There
is an exogenous rate of new workers entering the labor market equal to µ, which
equals the death rate. New entrants are unemployed and must draw a new wage.

c. Find an expression for the economy’s unemployment rate in terms of exogenous
parameters and the endogenous reservation wage. Discuss the determinants of
the unemployment rate.
We now change the technology so that the economy fluctuates between booms
(B) and recessions (R). In a boom, all employed workers are paid an extra z > 0.
314                        19. EQUILIBRIUM SEARCH AND MATCHING

That is, the income of a worker with wage w is It = w + z in a boom and It = w
in a recession. Let whether the economy is in a boom or a recession define the
state of the economy. Assume that the state of the economy is i.i.d. and that
booms and recessions have the same probabilities of 0.5. The state of the econ-
omy is publicly known at the beginning of a period before any decisions are made.

d. Describe the optimal behavior of employed and unemployed workers. When,
if ever, might workers choose to quit?
e. Let wB and wR be the reservation wages in booms and recessions, respectively.
Assume that wB < wR . Let Gt be the fraction of workers employed at wages
w ∈ [wB , wR ] in period t. Let Ut be the fraction of workers unemployed in period
t. Derive difference equations for Gt and Ut in terms of the parameters of the
model and the reservation wages, {F, µ, wB , wR }.
f. The following time series is a simulation from the solution of the model with
booms and recessions. Interpret the time series in terms of the model.

      Solution
Part 1 a. Since an employed worker who quits receives unemployment compen-
sation in the first period of unemployment, we can describe the optimal decisions
using only one value function. Let V (w) be the value of an employed (unemployed
) worker with wage w ( wage offer w) in hand at the beginning of the period and
who behaves optimally. The employed worker decides whether to stay or quit
and the unemployed worker whether to accept or reject. The Bellman equation
is:
                                ½                                Z M              ¾
                                                                         0      0
      V (w) =      max           w + β(1 − µ)V (w), b + β(1 − µ)     V (w )dF (w ) .
                accept,reject                                         0

As we know from chapter 5, this Bellman equation implies that the optimal policy
of a worker is described by a reservation wage w̄. An unemployed worker accepts
the offer and stay forever if w ≥ w̄ and reject the offer otherwise. An implicit
equation for w̄ can be derived as in McCall’s model described in chapter 5. One
finds :

                                                  Z M
                                    β(1 − µ)
(253)                    w̄ − b =                       (1 − F (w 0 ))dw0 .
                                  1 − β(1 − µ)     w̄

Part 1 b. This question is answered by writing equation (253) as:
                                         Z M
                             β(1 − µ)
                  w̄ − b −                    (1 − F (w))dw = 0.
                           1 − β(1 − µ) w̄
Observe that the left hand side is increasing in w̄ and in µ. Therefore, an increase
in µ results in a decrease in w̄. Similarly, the left hand side is decreasing in b.
                     19. EQUILIBRIUM SEARCH AND MATCHING                       315

Thus, an increase in b results in an increase in w̄.

Part 2 c. The dynamic of the unemployment rate Ut can be described as follows.
In any given period, a mass of µ of newborn agents enters the labor market, and
they start unemployed. Also, out of the (1 − µ) unemployed workers who do not
die, a fraction F (w̄) rejects the offer they draw. This is summarized by:

                            Ut+1 = µ + (1 − µ)F (w̄)Ut .
The steady state level of unemployment is therefore:

                                            µ
                             U∗ =                     .
                                    1 − (1 − µ)F (w̄)
An increase in b increases w̄ which in turn increases the unemployment rate.
An increase in µ has two opposite effects. First, more newborn agents enter the
labor market every period, which increases the unemployment rate. Second, it
increases the incentive to accept a wage offer, which reduces w̄ and in turn de-
creases the unemployment rate.

Part 2 d. As in part 1, both employed and unemployed workers share the
same value function. Let V (w, s) (s = R, B) be the value of a worker with
wage w in hand at the beginning of a period where the state of the economy is
s ∈ {Recession, Boom} and who behaves optimally. The Bellman equations are:

                ©   P                         P            R                     ª
 V (w, R) = max ©w + s β2 (1 − µ)V (w, i), b + s β2 (1 − µ) V (w
                                                               R
                                                                 0
                                                                   , s)dF (w 0
                                                                               )   ª
                       P                          P
 V (w, B) = max w + z + s β2 (1 − µ)V (w, s), b + s β2 (1 − µ) V (w0 , s)dF (w 0 ) ,
where it is understood that sums are over s = R, B. The value functions are
weakly increasing in w. The left hand side of the Bellman equations is thus
increasing and the right hand side is a constant Q. This implies that the optimal
policy is characterized by a pair of reservation wage wR and wB . The worker
accepts a job in recession (boom) if the wage offer is greater than wR (wB ) and
rejects otherwise. The reservation wages solve :
                         P
                     wR + s β2 (1 − µ)V (wR , s) = Q
                         P
                     wB + s β2 (1 − µ)V (wB , s) = Q − z.
Since the left hand side of those two equations is weakly increasing, this implies
that wB < wR . Thus a worker may accept a job in a boom (when the job is more
productive) and quit it in a recession.
One can characterize further those two quantities as follows. We consider the
three regions w ≥ wR , wB ≤ w ≤ wR and w ≤ wB . In each of those three regions
we know which term is greater in each Bellman equations. We can drop the max
and solve for the value functions. We find, for w ≥ wR :
316                     19. EQUILIBRIUM SEARCH AND MATCHING


                                    w          (1−µ)βz
                      V (w, R) = 1−(1−µ)β + 2(1−(1−µ)β)
                      V (w, B) = V (w, R) + z.
Similarly for wB ≤ w ≤ wR :

                   V (w, R) = Q
                                 w+z         1/2(1−µ)β
                   V (w, B) = 1−1/2(1−µ)β + 1−1/2(1−µ)β Q.
For all other w ≤ wB :

                           V (w, R) = V (w, B) = Q.
Now use the above expressions to write the indifference conditions V (wB , B) = Q
and and V (wR , R) = Q. It gives
                                      wB +z
                                    1−β(1−µ)
                                               = Q
                                    wR +βz/2
                                    1−β(1−µ)
                                               = Q,
which shows that wR = wB + (1 − β/2)z. Now we can write an implicit equation
for wB :


          wB +z
                  = Q
           1−β                      hR
                                        w    wB +z
                  = b     +β(1 − µ) 0 B 1−β(1−µ)    dF (w0 )
                               R wR w0 +z                wB +z
                          +1/2 wB 1−β/2(1−µ) + (1−β(1−µ))(1−β/2(1−µ)) dF (w0 )
                            R M w0 +z/2          i
                          + wR 1−β(1−µ)  dF (w0 ) .
Part 2 e. Let B = 1 if the economy is in a boom and zero otherwise. The
difference equations for Ut , Gt is given by:

      Ut+1 = µ + (1 − µ)(F (wB )B + F (wR )(1 − B))Ut + (1 − µ)Gt (1 − B)
      Gt+1 = B(1 − µ) (Gt + (F (wR ) − F (wB ))Ut ) .
Part 2 f. The graph presented feature an asymmetry: increases in unemployment
rate are sharper than decreases. This reflect the fact that all workers in G t quit
their jobs when the economy experiences a recession.

      Exercise 19.3. Business cycles and search again
The economy is either in a boom (B) or recession (R) with probability .5. The
state of the economy (R or B) is i.i.d. through time. At the beginning of each
period, workers know the state of the economy for that period. At the beginning
of each period, a previously employed worker can choose to work at her last
period’s wage or draw a new wage. If she draws a new wage, the old wage is
lost, b is received this period, and she can start working at the new wage in the
following period. During recessions, new wages (for jobs to start next period) are
i.i.d. draws from the c.d.f. F , where F (0) = 0 and F (M ) = 1 for M < ∞. During
                         19. EQUILIBRIUM SEARCH AND MATCHING                                                     317

booms, the worker can choose to quit and take two i.i.d. draws of a possible new
wage (with the option of working at the higher wage, again for a job to start the
next period) from the same c.d.f. F that prevails during recessions. (This ability
to choose is what “Jobs are more plentiful during booms” means to workers.)
Workers who are unemployed at the beginning of a period receive b this period
and draw either one (in recessions) or two (in booms) wages offers
                                                               P∞from the tc.d.f.
F to start work next period. A worker seeks to maximize E0 t=0 (1 − µ) β t It ,
where µ is the probability that a worker dies at the end of a period, β is the
subjective discount factor, and It is the worker’s income in period t; that is, It is
equal to the wage wt when employed and the income b when unemployed.
a. Write the Bellman equation(s) for a previously employed worker.
b. Characterize the worker’s quitting policy. If possible, compare reservation
wages in booms and recessions. Will employed workers ever quit? If so, who will
quit and when?

   Solution
a. The value function for a previously employed worker v with current wage w
in hand in the recession state s = R is given by

(254)                     (                                                                               )
                                         X                              XZ M
  V (w, R) = max              w + β̃/2             V (w, s), b + β̃/2                    V (w0 , s)dF (w 0 ) .
              stay,quit                                                             0
                                              s                             s

where β̃ = β(1 − µ) and sums are over s = R, B. In a boom, quitters are allowed
to draw twice from F :

(255)                    (                                                                                  )
                                        X                              XZ M
 V (w, B) = max              w + β̃/2             V (w, s), b + β̃/2                    V (w0 , s)d(F 2 )(w0 ) .
             stay,quit                                                          0
                                         s                              s


b. This problem is analogous to problem 5.2. The left hand side of the Bellman
equations is weakly increasing and the right hand side is a constant. It implies
that the optimal policy is described by two reservation wages wR and wB . In a
recession (in a boom), the worker quits if her wage is lower than wR (lower than
wB ) and stays otherwise. The reservation wages in s = R, B solve:

                          X                                  XZ M
                                          0
(256)      ws + β̃/2              V (ws , s ) = b + β̃/2                    V (w0 , s0 )dGs (w0 ),
                             s0                               s0   0

where GR (w) = F (w) and GB (w) = F 2 (w). Observe that F 2 (w) ≤ F (w) which
implies that F 2 first order stochastically dominates F . Also note that V (w, s) is
a weakly increasing function of w. This implies:
318                     19. EQUILIBRIUM SEARCH AND MATCHING


                  Z M                         Z M
                             0        0
                         V (w , s)dF (w ) ≤         V (w0 , s)d(F 2 )(w0 ).
                    0                         0
Using this inequality in (256) gives :
                          X                            X
               wR + β̃/2      V (wR , s0 ) ≤ wB + β̃/2   V (wB , s0 ).
                             s0                              s0
Since V (w, s) is weakly increasing in w this implies that:

                                     wB > w R .
This shows that, in contrast with the conclusions of exercise 19.2, workers may
accept a job in a recession and quit it in a boom. In exercise 19.2, the value
of accepting a job increases in a boom because of higher productivity. In this
exercise, the value of quitting increases in a boom because job offers are better.

    European unemployment
The following three exercises are based on work by Ljungqvist and Sargent (1998),
Marimon and Zilibotti (1999), and Mortensen and Pissarides (1999b), who cal-
ibrate versions of search and matching models to explain high European unem-
ployment. Even though the specific mechanisms differ, they all attribute the rise
in unemployment to generous benefits in times of more dispersed labor market
outcomes for job seekers.

   Exercise 19.4. Skill-biased technological change, (Mortensen and Pissarides,
1999b)

Consider a matching model in discrete time with infinitely lived and risk-neutral
workers who are endowed with different skill levels. A worker of skill type i
produces hi goods in each period that she is matched to a firm, where i ∈
{1, 2, . . . , N } and hi+1 > hi . Each skill type has its own but identical matching
function M (ui , vi ) = Auαi vi1−α , where ui and vi are the measures of unemployed
workers and vacancies in skill market i. Firms incur a vacancy cost chi in ev-
ery period that a vacancy is posted in skill market i; that is, the vacancy cost
is proportional to the worker’s productivity. All matches are exogenously de-
stroyed with probability s ∈ (0, 1) at the beginning of a period. An unemployed
worker receives unemployment compensation b. Wages are determined in Nash
bargaining between matched firms and workers. Let φ ∈ [0, 1) denote the worker’s
bargaining weight in the Nash product, and we adopt the standard assumption
that φ = α.
a. Show analytically how the unemployment rate in a skill market varies with
the skill level hi .
b. Assume an even distribution of workers across skill levels. For different benefit
levels b, study numerically how the aggregate steady-state unemployment rate is
affected by mean-preserving spreads in the distribution of skill levels.
                     19. EQUILIBRIUM SEARCH AND MATCHING                          319

c. Explain how the results would change if unemployment benefits are propor-
tional to a worker’s productivity.

   Solution
a. Since there is no interaction between labor markets for different skill levels,
the analysis of the first section on matching model applies. Specifically, equations
(19.6) and (19.18) can be used to obtain:
                                             s
                              ui     =    s+θi q(θi )
                                          r+s+αθi q(θi )
                              hi − b =     (1−α)q(θi )
                                                         .
We divide both sides of the second equation by hi . Also, the Cobb-Douglas form
of the matching function implies that q(θi ) = Aθi−α . This manipulations give:
                                        s
                         ui      =   s+Aθ³1−α
                                          i              ´
                                            (r+s) α
                         1 − hbi =    c
                                     1−α      A
                                                 θi + αθi .




                                                              RHS( θ)




                                                               1−b/h i




                         θi                                   θ

               Figure 1. Exercise 19.4 a: implicit equation for θi

The second equation is illustrated in figure ??. It is clear from it that an increase
in skill is associated with a rise of the horizontal line 1 − b/hi , and thus with an
increase of θi . From the first equation, this is associated in turn with an decrease
in the equilibrium unemployment level ui .
Observe that the assumption of constant unemployment benefit across skill levels
is crucial to obtain this result. High skill workers are given a smaller replacement
rate so that they have more incentive to accept a job offer.
320                                19. EQUILIBRIUM SEARCH AND MATCHING

b. We wrote the following matlab programs. unemp1.m computes the equilibrium
level of unemployment in market i by solving the implicit equation:

                                       r + s + αθi q(θi )
                                           hi − b −       .
                                         (1 − α)q(θi )
ex1904.m computes the aggregate unemployment level for various benefit levels
and distributions of skills. Specifically, we contrasted the three following distri-
butions. The first is a dirac, for which all the probability mass is concentrated at
the mean. The second is a tent function. The third is the uniform distribution.
All three distributions have the same mean. The tent has an larger spread than
the Dirac, and the uniform has a larger spread than the tent. The results are
illustrated in figure 2 and 3.

                                           Unemployment function, per skill level
                                                                                     b=3
                       0.096                                                         b = 3.3333
                                                                                     b = 3.6667
                                                                                     b=4
                       0.094


                       0.092


                        0.09


                       0.088
                u(h)




                       0.086


                       0.084


                       0.082


                        0.08


                       0.078


                       0.076

                               8       9       10       11       12       13        14            15
                                                             h

         Figure 2. Exercise 19.4 b : Solving for unemployment level in
         each skill market
First, figure 2 shows that the equilibrium unemployment level is a convex and
decreasing function of h. Thus, one should expect mean preserving increase in
spread of the skill distribution to increase the aggregate unemployment rate. This
point is illustrated in figure 3.

      Exercise 19.5. Dispersion of match values (Marimon and Zilibotti, 1999)

We retain the matching framework of exercise 19.4 but assume that all workers
have the same innate ability h = h̄ and any earnings differentials are purely
match specific. In particular, we assume that the meeting of a firm and a worker
is associated with a random draw of a match-specific productivity p from an
exogenous distribution G(p). If the worker and firm agree upon staying together,
the output of the match is then p · h in every period as long as the match is not
                                  19. EQUILIBRIUM SEARCH AND MATCHING                                                   321

                                                Cumulative Distribution of skill levels
                         1                                                                               Dirac
                                                                                                         Tent
                        0.8                                                                              Uniform

                        0.6




                  cdf
                        0.4

                        0.2

                         0

                              8           9          10           11         12          13         14             15
                                                                 h
                                                    Aggregate unemployment level
                      0.086
                                                                                                         Dirac
                                                                                                         Tent
                      0.084                                                                              Uniform
               U(b)




                      0.082


                       0.08


                      0.078
                              3     3.1       3.2    3.3    3.4        3.5        3.6   3.7   3.8        3.9       4
                                                                       b

        Figure 3. Exercise 19.4 b : Solving for the aggregate unemploy-
        ment level

exogenously destroyed as in exercise 19.4. We also keep the assumptions of a
constant unemployment compensation b and Nash bargaining over wages.

a. Characterize the equilibrium of the model.

b. For different benefit levels b, study numerically how the steady-state unem-
ployment rate is affected by mean-preserving spreads in the exogenous distribu-
tion G(p).


   Solution

a. The analysis of this model parallels the one done in the text, with some
adjustments to account for the match specific productivity. We first define Ω,
the set of match specific productivities such that the firm and the worker agree
to stay together. We will later show that this set is of the form {p ≥ p min }.
The probability that a match results in employment is G(Ω). The equilibrium
unemployment level is thus given by:

                                                                  s
(257)                                               u=                   .
                                                           s + θq(θ)G(Ω)
We now write Bellman equations. Let wp be the wage in a match of productivity
p. The firm’s value of a filled job with productivity p is Jp . The value of a vacancy
is V . The worker’s value of accepting a match of productivity p is Ep , and the
value of being unemployed is U . Those values solve:
322                    19. EQUILIBRIUM SEARCH AND MATCHING



(258)    Jp      =   ph − w(p) + β(sV + (1 − s)Jp )
(259)    V       =   −c + β (q(θ)G(Ω)E (Jp | p ∈ Ω) + (1 − q(θ)G(Ω)) V )
(260)    Ep      =   w(p) + β(sU + (1 − s)Ep )
(261)    U       =   z + β (θq(θ)G(Ω)E (Ep | p ∈ Ω) + (1 − q(θ)G(Ω)) U ) .
We define an equilibrium as follows:
    Definition 25. An equilibrium is a collection of value functions Jp , V, Ep , U ,
a tightness parameter θ and a set Ω such that:
       (i) Jp , V, Ep , U solve the Belman equations (258),(259),(260),(261)
      (ii) Free entry: V = 0
     (iii) Nash Bargaining: Ep − U = α(Ep − U + J)
     (iv) Optimality: Ω = {p : Ep − U + J ≥ 0}
Observe that, if we take conditional expectations in equations (258) and (260), we
obtain the same system of value functions as in the text, with q(θ) being replaced
by G(Ω)q(θ). This implies in particular that equation (19.16) holds, namely:

                                r             α
(262)                              U =z+         cθ.
                              1+r           1−α
Note also that from equation (258) and the free entry condition we have Jp =
 ph−wp                                              wp        βs
1−β(1−s)
         . Similarly, equation (260) gives Ep = 1−β(1−s) + 1−β(1−s) U . With the
help of equation (262), we can write the surplus of match p :
                                                            µ           ¶
                                  ph           1                   α
(263)         E p + Jp − U =             −                   z+       cθ .
                             1 − β(1 − s) 1 − β(1 − s)            1−α
Only positive surplus match are formed. The last equation thus implies that
there exists pθ such that a match is accepted if and only if p > pθ . Solving form
pθ gives:
                                   z    α c
                                 pθ =+        θ.
                                   h 1−αh
Therefore Ω = {p ≥ pθ }. Observe that equation (19.18) holds in conditional
expectation (when replacing q(θ) by G(Ω)q(θ)). Specifically:

                                     r + s + αθq(θ)G(Ω)
                        hE(p | Ω) − z =                  c.
                                       (1 − α)q(θ)G(Ω)
Rearranging this last equation shows that the equilibrium tightness parameters
is a solution of:
           Z 1                                    µ                          ¶
                                          c           r+s α
(264)    h    pdG(p) − z (1 − G (pθ )) =                 θ + φθ (1 − G (pθ )) .
           pθ                            1−α           A
                               19. EQUILIBRIUM SEARCH AND MATCHING                                      323

b. We wrote the following matlab programs. impl2.m is the implicit equation
(264) solved by the equilibrium θ. unemp2.m computes the equilibrium unem-
ployment level by solving (264) and then using (257). ex1905.m plot the results.

                                       Cumulative Distribution of skill levels
                      1

                     0.8

                     0.6
              cdf
                                                                                  Dirac
                     0.4                                                          Tent
                                                                                  Uniform
                     0.2

                      0

                           0   10     20    30     40    50     60     70    80        90     100
                                                        h
                                           Aggregate unemployment level
                    0.24


                    0.22
             U(b)




                                                                                              Dirac
                     0.2                                                                      Tent
                                                                                              Uniform

                    0.18


                    0.16
                        15     15.5   16    16.5   17   17.5    18    18.5   19        19.5   20
                                                         b


       Figure 4. Exercise 19.5 : Solving for equilibrium unemployment

The results are illustrated in figure 4. We use three distributions with mean
1/2: Dirac, tent and uniform. The unemployment level is the highest for the
uniform distribution, i.e. for the highest spread. When the spread increases,
low productivity offers are more likely but a worker has can reject them enjoy
unemployment benefit. He is insured against this risk. At the same time, high
productivity offers are more likely. Therefore, an unemployed worker has an
incentive to stay longer in unemployment in order to obtain a high productivity
offer. Also, the unemployment rate increases with b. Higher b corresponds to
a more valuable outside option when choosing to accept or reject an offer, and
leads therefore to more rejections.

   Exercise 19.6. Idiosyncratic shocks to human capital (Ljungqvist and Sar-
gent, 1998)

We retain the assumption of exercise 19.5 that a worker’s output is the product
of his human capital h and a job-specific component which we now denote w, but
we replace the matching framework with a search model. In each period of un-
employment, a worker draws a value w from an exogenous wage offer distribution
G(w) and, if the worker accepts the wage w, he starts working in the following
period. The wage w remains constant throughout the employment spell that ends
either because the worker quits or the job is exogenously destroyed with prob-
ability s at the beginning of each period. Thus, in a given job with wage w, a
324                   19. EQUILIBRIUM SEARCH AND MATCHING

worker’s earnings wh can only vary over time because of changes in human capital
h. For simplicity, we assume that there are only two levels of human capital, h 1
and h2 where 0 < h1 < h2 < ∞. At the beginning of each period of employment,
a worker’s human capital is unchanged from last period with probability πe and
is equal to h2 with probability 1 − πe . Losses of human capital are only triggered
by exogenous job destruction. In the period of an exogenous job loss, the laid off
worker’s human capital is unchanged from last period with probability πu and is
equal to h1 with probability 1 − πu . All unemployed workers receive unemploy-
ment compensation, and the benefits are equal to a replacement ratio γ ∈ [0, 1)
times a worker’s last job earnings.
a. Characterize the equilibrium of the model.
b. For different replacement ratios γ, study numerically how the steady-state
unemployment rate is affected by changes in h1 .

      Solution

a. In this exercise, we assume that there are finitely many wages. The set of
wages is denoted by W ≡ {w1 , . . . , wN }, and an unemployed worker draws wage
wn with probability G(wn ). The corresponding set of unemployment benefit is
B ≡ {γw1 h1 , . . . γwN h1 , γw1 h2 , . . . , γwN h2 }. Lastly, the set of human capital
levels is denoted by H ≡ {h1 , h2 }. We let U (b, h) be the value of an unemployed
worker, with benefit b ∈ B and human capital h ∈ H, and we let V (w, h) be the
value of an employed worker with wage w ∈ W and human capital h ∈ H. The
Bellman equation for the an unemployed worker is

                                    N
                                    X
(265)            U (b, h) = b + β         G(wn ) max{V (wn , h), U (b, h)}.
                                    n=1

The timing of (265) is the following: an unemployed worker receives compensation
b and draws an offer w that she either accepts or rejects. Since she starts working
in the following period, the value of accepting or rejecting the offer is discounted
by β. The Bellman equation for an employed worker with human capital h1 is


          V (w, h1 ) = wh1 + βsU (γwh1 , h1 )
                                       ©                          ª
                       +β(1 − s)πe max V (w, h1 ), U (γwh1 , h1 )
                                              ©                         ª
(266)                  +β(1 − s)(1 − πe ) max V (w, h2 ), U (wγh1 , h2 ) .
The worker receives the wage wh1 , and next period she can be laid off, or can
experience an increase of her human capital. If she is not laid off, she is given
the option of quitting her job. Similarly, the Bellman equation for an employed
worker with human h2 is
                    19. EQUILIBRIUM SEARCH AND MATCHING                         325



             V (w, h2 ) = wh2 + βsπu U (γwh2 , h2 )
                          +βs(1 − πu )U (γwh2 , h1 )
                                         ©                        ª
(267)                     +β(1 − s) max V (w, h2 ), U (wγh2 , h2 ) .
An high-skilled worker who looses her job might experience a loss of human
capital. As before, a worker is given the option of quitting her job after any
period of employment. The system of Bellman equations (265), (266) and (267)
is solved numerically by the program ex196f.m using a value function iteration
algorithm.
    We now characterize the equilibrium unemployment level. We let µ(b, h) be
the fraction of unemployed worker with benefit b ∈ B and human capital h ∈ H.
Similarly, λ(w, h) is the fraction of employed worker with wage w ∈ W and human
capital h ∈ H. These must satisfy the accounting equation
                       X                      X
(268)                           µ(b, h) +               λ(w, h) = 1.
                    (b,h)∈B×H               (w,h)∈W×H

We define the set of wage accepted by an unemployed worker,

(269)               A(b, h) = {w ∈ W : V (w, h) ≥ U (b, h)},
for all (b, h) ∈ B×H. Similarly, we define a “quit” indicator-function q : W ×H →
{0, 1} as follows: q(w, h) = 1 if and only if U (γwh, h) > V (w, h). Lastly, we
define another “quit” indicator-function qe : W → {0, 1}, which keeps track of
quits when a worker human capital increases. Namely, qe (w) = 1 if and only if
U (γwh1 , h2 ) > V (w, h2 ). Equipped with these notations, we write the steady-
state equations for the distribution of worker types. We start with the unemployed
types (γwh1 , h1 ):
                    ¡                       ¢                ¡             ¢
(270)      λ(w, h1 ) s + (1 − s)πe q(w, h1 ) = µ(γwh1 , h1 )G A(γwh1 , h1 ) ,
for w ∈ W. The left-hand (right-hand) side is the inflow (outflow) of workers in
this type. Now, for the unemployed types (γwh2 , h1 ),
                                                    ¡             ¢
(271)           λ(w, h2 )s(1 − πu ) = µ(γwh2 , h1 )G A(γwh2 , h1 ) ,
for w ∈ W. For the unemployed types (γwh2 , h2 ),
                    ¡                      ¢                ¡             ¢
(272)      λ(w, h2 ) sπu + (1 − s)q(w, h2 ) = µ(γwh2 , h2 )G A(γwh2 , h2 ) ,
for w ∈ W. Lastly, for the unemployed type (γwh1 , h2 ),
                                                             ¡             ¢
(273)        λ(w, h1 )(1 − s)(1 − πe )qe (w) = µ(γwh1 , h2 )G A(γwh1 , h2 ) .
Similarly, the steady-state equation for the employed types (w, h1 ) is
326                     19. EQUILIBRIUM SEARCH AND MATCHING


                      X
(274)                         µ(b, h1 )G(w)I{w∈A(b,h1 )}
                      b∈B
                             ¡                                          ¢
                  = λ(w, h1 ) s + (1 − s)πe q(w, h1 ) + (1 − s)(1 − πe ) ,
for w ∈ W. And, for the employed type (w, h2 ),

           X                                                            ¡           ¢
(275)             µ(b, h2 )G(w)I{w∈A(b,h2 )} + λ(w, h1 )(1 − s)(1 − πe ) 1 − qe (w)
            b∈B
                   ¡                       ¢
        = λ(w, h2 ) s + (1 − s)πe q(w, h2 ) ,
for w ∈ W. Equations (270)-(275) sum to zero, reflecting the fact that an outflow
from some type is an inflow in some other type. The Matlab program ex196f.m
organizes these equations in a large matrix and solve for the steady-state dis-
tribution of types. Figure 5 plots the unemployment level as a function of the
replacement ratio γ, for two choices of H. The first choice has a low spread
h2 − h1 and the second a large spread. The equilibrium unemployment level
increases with the replacement ration, reflecting the fact that unemployed work-
ers with larger benefit have more incentive to reject job offers. The equilibrium
unemployment level is also sensitive to the distribution of human capital level.
Namely, when the spread is larger, previously high-skilled unemployed workers,
with type (γwh2 , h1 ), have a larger benefit relative to the job offers they receive.
This give them more incentive to reject job offers.

                                       Unemployment Rate
                       20




                       18




                       16
                   %




                       14




                       12




                       10

                                                                        Small Skill Spread
                                                                        Large Skill Spread
                        8
                        0.2     0.25   0.3   0.35   0.4   0.45   0.5   0.55   0.6   0.65     0.7

                                                          γ

        Figure 5. Execise 19.6 : Solving for equilibrium unemployment


Comparison of models
                     19. EQUILIBRIUM SEARCH AND MATCHING                         327

c. Explain how the different models in exercises 19.4–19.6 address the observa-
tions that European welfare states have experienced less of an increase in earnings
differentials as compared to the United States, but suffer more from long-term
unemployment where the probability of gaining employment drops off sharply
with the length of the unemployment spell.

   Solution
In the three exercises, the increase in earning differentials can be captured by
an increase in the spread of the distribution of h. Moreover, a welfare state can
be represented by a larger unemployment benefit. The three exercises share the
feature that, in a welfare state, an increase in the earning differential results in
an higher unemployment level. The mechanisms are different.
    In first exercise, the unemployment benefit is constant for all wages. As a
result, low-skilled workers have stronger incentives to reject an offer than high-
skilled workers. An increase in the skill spread increases the fraction of low-skill
workers with stronger incentive to reject, resulting in an increase in unemploy-
ment. It also increase the fraction of high-skill worker, with stronger incentive to
accept, resulting in an decrease in unemployment. The total effect is to increase
unemployment.
    In the second exercise, the increase in the spread of match values increases
the option value of staying unemployed. The unemployment benefit also increase
this option value. The combination of a larger benefit and a larger spread yield
to a larger unemployment level.
    Lastly, in the last exercise, with an increase in the skill spread, previously
high-skilled workers have stronger incentive to reject, resulting in an increase of
the unemployment level.
   d. Explain why the assumption of infinitely lived agents is innocuous for the
models in exercises 19.4 and 19.5, but the alternative assumption of finitely lived
agents can make a large difference for the model in exercise 19.6.

   Solution
In the three exercises, assuming finite lives would mechanically increase the
turnover of workers in jobs. As a result, search-and-matching delays are likely to
increase the “frictional” unemployment.
    Assuming finitely lives might also change the incentive to accept a job offer.
In the first two exercises, the value of being employed does not increase with
tenure. As a result, finitely-lived and infinitely-lived workers have similar incen-
tive to accept a job offer. In the third exercise, however, because a worker’s skill
increases with tenure, a finite life can reduce dramatically the value of accepting
a low-skilled job offers. It might result in a further increase in the equilibrium
unemployment level.

   Exercise 19.7. Temporary jobs and layoff costs
328                  19. EQUILIBRIUM SEARCH AND MATCHING

Consider a search model with temporary jobs. At the beginning of each period,
a previously employed worker loses her job with probability µ, and she can keep
her job and wage rate from last period with probability 1 − µ. If she loses
her job (or chooses to quit), she draws a new wage and can start working at
the new wage in the following period with probability one. After a first period
on the new job, she will again in each period face probability µ of losing her
job. New wages are independent and identically distributed from the cumulative
distribution function F , where F (0) = 0, and F (M ) = 1 for M < ∞. The
situation during unemployment is as follows. At the beginning of each period, a
previously unemployed worker can choose to start working at last period’s wage
offer or to draw a new wage from F . If she draws a new wage, the old wage offer
is lost and she can start working at the new wage in the following period. The
income of an unemployed worker is b, which includes unemployment P      insurance
and the value of home production. Each worker seeks to maximize E0 ∞            t
                                                                           t=0 β It ,
where β is the subjective discount factor, and It is the worker’s income in period
t; that is, It is equal to the wage wt when employed and the income b when
unemployed. Here E0 is the mathematical expectation operator, conditioned on
information known at time 0. Assume that β ∈ (0, 1) and µ ∈ (0, 1].
a. Describe the worker’s optimal decision rule.
Suppose that there are two types of temporary jobs: short-lasting jobs with µ s
and long-lasting jobs with µl , where µs > µl . When the worker draws a new wage
from the distribution F , the job is now randomly designated as either short-
lasting with probability πs or long-lasting with probability πl , where πs + πl = 1.
The worker observes the characteristics of a job offer, (w, µ).
b. Does the worker’s reservation wage depend on whether a job is short-lasting
or long-lasting? Provide intuition for your answer.
We now consider the effects of layoff costs. It is assumed that the government
imposes a cost τ > 0 on each worker that loses a job (or quits).
c. Conceptually, consider the following two reservation wages, for a given value
of µ: (i) a previously unemployed worker sets a reservation wage for accepting
last period’s wage offer; (ii) a previously employed worker sets a reservation wage
for continuing working at last period’s wage. For a given value of µ, compare
these two reservation wages.
d. Show that an unemployed worker’s reservation wage for a short-lasting job
exceeds her reservation wage for a long-lasting job.
e.     Let w̄s and w̄l be an unemployed worker’s reservation wages for short-
lasting jobs and long-lasting jobs, respectively. In period t, let Nst and and Nlt
be the fractions of workers employed in short-lasting jobs and long-lasting jobs,
respectively. Let Ut be the fraction of workers unemployed in period t. Derive
difference equations for Nst , Nlt and Ut in terms of the parameters of the model
and the reservation wages, {F, µs , µl , πs , πl , w̄s , w̄l }.
                    19. EQUILIBRIUM SEARCH AND MATCHING                            329

   Solution
a. Let V (w) be the value function of a worker (employed or unemployed), with
wage w in hand, at the beginning of the period and who behaves optimally. The
Bellman equation is :

(276)   V (w) =         max       {w + β (µ(b + βQ) + (1 − µ)V (w)) , b + βQ}
                  accept,reject
                  Z M
(277)      Q =           V (w0 )dF (w 0 ).
                    0

The worker’s decision is described by a reservation wage w̄. If the wage offer is
greater than w̄ the worker accepts it, otherwise she rejects it.

b. In this situation we can describe the optimal decision by very similar Bellman
equations :

(278)V (w, µ) =         max      {w + β (µ(b + βQ) + (1 − µ)V (w, µ)) , b + βQ}
                  accept,reject
                        Z M                           Z M
                                   0          0
(279)      Q = πs             V (w , µs )dF (w ) + πl     V (w0 , µl )dF (w 0 ).
                         0                            0

As before, the optimal policy is described by a reservation wage w̄(µ). To char-
acterize it further, observe first that when w is greater than w̄(µ), we have :

                V (w, µ) = w + β (µ(b + βQ) + (1 − µ)V (w, µ)) .
Solving the above equation for V (w, µ) gives :

                               w           βµ
               V (w, µ) =            +             (b + βQ).
                         1 − β(1 − µ) 1 − β(1 − µ)
Now the reservation wage solves

                                   V (w̄(µ), µ) = b + βQ.
Solving this equation shows that the reservation wage does not depend on µ :

                                  w̄(µ) = (1 − β)(b + βQ).
An intuition for this result goes as follows. At the reservation wage, agents are
indifferent between rejecting, or accepting and then quitting, or accepting and
then being fired. It implies that, at the reservation wage, the value of rejecting
equals the value of keeping the job forever. That is :

                                                w̄(µ)
                                     b + βQ =         .
                                                1−β
c. As before, the value functions are:
330                        19. EQUILIBRIUM SEARCH AND MATCHING




 V u (w, µ) =
(280)                max          {w + β (µ(b − τ + βQ) + (1 − µ)V (w, µ)) , b + βQ}
                  accept,reject

 V e (w, µ) =
(281)                max       {w + β (µ(b − τ + βQ) + (1 − µ)V (w, µ)) , b − τ + βQ}
                  accept,reject
                     Z M                            Z M
                                 0          0
(282) Q = πs                V (w , µs )dF (w ) + πl     V (w0 , µl )dF (w 0 ).
                       0                                0

The optimal policy is described by reservation wages w̄ i (µ), i = u, e. The left
hand side of the Bellman equations is weakly increasing and is the same for both
employed and unemployed workers. The right hand side is a constant, lower
for an employed worker than for an unemployed worker. Thus the indifference
conditions defining the reservation wage imply that

                                         w̄e (µ) < w̄ u (µ).
The above equation shows in particular that employed worker would never quit
a job unless they are fired.

d. We repeat the step of question b. First, we solve for the value function of an
employed worker when w ≥ w̄ u (µ) > w̄ e (µ). We obtain :

                                       w            βµ
                V e (w, µ) =                  +             (b − τ + βQ).
                                  1 − β(1 − µ) 1 − β(1 − µ)
Since w̄u (µ) ≥ w̄ e (µ), we know that:

                           V u (w̄u (µ), µ) = V e (w̄u (µ), µ) = b + βQ.
Solving this equation shows that :

                                    w̄u (µ)              βµτ
(283)                                       = (b + βQ) +     .
                                    1−β                  1−β
Now the reservation wage depends on the duration. Short lived jobs (high µ)
are associated with higher reservation wage. This follows from the fact that,
when there are firing cost, an employed worker is no longer indifferent between
rejecting and accepting and then quitting (or being fired). He now needs to be
compensated for the firing cost. Thus jobs with higher expected firing cost (short
lived) are associated with higher reservation wages.

Equation (283) has the following intuitive interpretation. The left hand side is
the value of working at the reservation wage forever. This should be equal to the
value of accepting the job plus the value of staying forever, that is the value of
never paying any firing cost. What is this value ? In each period on the job, a
worker need to pay a firing τ cost with probability µ. The expected present value
of this stream of cost is :
                    19. EQUILIBRIUM SEARCH AND MATCHING                        331


                                       +∞
                                       X
                                   E         β t τ Bt .
                                       t=1
Where Bt are i.i.d. binomial random variable which are 1 with probability µ and
zero otherwise. The above expression simplifies to :
                                     βµτ
                                           .
                                     1−µ
e. Recall that employed worker never quit jobs unless they are fired. This implies
the following difference equations :

(284)         Ut+1 = µs Nst + µl Nlt + (1 − πs F (w̄s ) − πl F (w̄l ))Ut
(285)        Nst+1 = (1 − µs )Nst + πs (1 − F (w̄s ))Ut
(286)        Nst+1 = (1 − µl )Nlt + πl (1 − F (w̄l ))Ut .


   Exercise 19.8. Productivity shocks, job creation, and job destruction, do-
nated by Rodolfo Manuelli
Consider an economy populated by a large number of identical individuals. The
utility function of each individual is
                                       ∞
                                       X
                                         β t xt ,
                                       t=0

where 0 < β < 1, β = 1/(1 + r), and xt is income at time t. All individuals are
endowed with one unit of labor that is supplied inelastically: if the individual
is working in the market, its productivity is yt , while if he/she works at home
productivity is z. Assume that z < yt . Individuals who are producing at home
can also — at no cost — search for a market job. Individuals who are searching
and jobs that are vacant get randomly matched. Assume that the number of
matches per period is given by
                                      M (ut , vt ),
where M is concave, increasing in each argument, and homogeneous of degree
one. In this setting, ut is interpreted as the total number of unemployed workers,
and vt is the total number of vacancies. Let θ ≡ v/u, and let q(θ) = M (u, v)/v
be the probability that a vacant job (or firm) will meet a worker. Similarly, let
θq(θ) = M (u, v)/u be the probability that an unemployed worker is matched
with a vacant job. Jobs are exogenously destroyed with probability s. In order
to create a vacancy a firm must pay a cost c > 0 per period in which the vacancy
is “posted” (i.e., unfilled). There is a large number of potential firms (or jobs)
and this guarantees that the expected value of a vacant job, V , is zero. Finally,
assume that, when a worker and a vacant job meet, they bargain according to
the Nash Bargaining solution, with the workers’ share equal to ϕ. Assume that
yt = y for all t. a. Show that the zero profit condition implies that,
332                  19. EQUILIBRIUM SEARCH AND MATCHING



                               w = y − (r + s)c/q(θ).

b. Show that if workers and firms negotiate wages according to the Nash Bar-
gaining solution (with worker’s share equal to ϕ), wages must also satisfy

                              w = z + ϕ(y − z + θc).

c. Describe the determination of the equilibrium level of market tightness, θ.

d. Suppose that at t = 0, the economy is at its steady state. At this point, there
is a once and for all permanent increase in productivity. The new value of y is
y 0 > y. Show how the new steady state value of θ, θ 0 , compares with the previous
value. Argue that the economy “jumps” to the new value right away. Explain
why there are no “transitional dynamics” for the level of market tightness, θ.

e. Let ut be the unemployment rate at time t. Assume that at time 0 the economy
is at the steady state unemployment rate corresponding to θ — the “old” market
tightness — and display this rate. Denote this rate as u0 . Let θ0 = θ0 . Note
that that change in unemployment rate is equal to the difference between Job
Destruction at t, JDt and Job Creation at t, JCt . It follows that
                             JDt       = (1 − ut )s,
                             JCt       = θt q(θt )ut ,
                             ut+1 − ut = JDt − JCt .
Go as far as you can characterizing job creation and job destruction at t = 0 (after
the shock). In addition, go as far as you can describing the behavior of both JCt
and JDt during the transition to the new steady state (the one corresponding to
θ0 ).

      Solution
a. , b. and c. See pp 575-578, chapter 19, in Recursive Macroeconomic Theory.


d. Let’s first settle some timing issues. Let ut be the unemployment rate in
period t. In period t, firms post vacancies vt , which result in M (ut , vt ) matches.
Matched workers start working in period t + 1. Let θt ≡ vt /ut . The dynamic of
the unemployment rate is :


(287)               ut+1 = ut + s(1 − ut ) − θt q(θt ),   u0 given.
The rest of the equations defining an equilibrium is:
                       19. EQUILIBRIUM SEARCH AND MATCHING                                        333



(288)                Jt     =   y 0 − wt + β (sVt+1 + (1 − s)Jt+1 )
(289)                Vt     =   −c + β (q(θt )Jt+1 + (1 − q(θt ))Vt )
(290)                Et     =   wt + β (sUt+1 + (1 − s)Et+1 )
(291)                Ut     =   z + β (θt q(θt )Et+1 + (1 − θt q(θt ))Ut+1 )
(292)           Et − U t    =   φ(Jt − Vt + Et − Ut )
(293)                Vt     =   0.
Equations (288) and (289) are the Bellman equations of the firm. Equations
(290) and (291) are the Bellman equations of the worker. Equation (292) ex-
presses Nash bargaining and equation (293) is the free entry condition. An equi-
librium is {ut , θt , wt , Jt , Vt , Et , Ut }+∞
                                              t=0 that satisfies equations (287) to (293) and
the transversality conditions

(294)                                  lim β t Wt = 0.
                                      t→+∞

For Wt = Jt , Vt , Et , Ut . Observe that the system of equilibrium equation separates
in two blocks. We can first solve for {θt , wt , Jt , Vt , Et , Ut }+∞  t=0 using (288)-(293).
Observe that the solution does not depend on u0 . Then, we solve for {ut+1 }+∞             t=0
using (287). Now note that one solution of (288)-(293) is a constant vector
(θ0 , w0 , J 0 , V 0 , E 0 , U 0 ). The values correspond to the steady state equilibrium in a
basic matching model in which productivity is y 0 . Going back to equation (287)
we can analyze the dynamics of the unemployment rate.

This discussion shows that there is an equilibrium in which all equilibrium quan-
tities except the unemployment rate “jump” to the new steady state right away.
It does not rule out a priori existence of other equilibria.

e. The dynamic of the unemployment rate is given by:

(295)                      ut+1 = ut + (1 − ut )s − q(θ 0 )θ0 ut .
Let u0 = u be the old steady state unemployment and u0 be the new one. u0
solves :

(296)                        u0 = u0 + (1 − u0 )s − q(θ 0 )θ0 u0 .
Subtract (296) to (295) to obtain :

                                                                               t+1
(297)      ut+1 − u0 = (1 − s − θ 0 q(θ0 ))(ut − u0 ) = [1 − s − θ 0 q(θ0 )]         (u − u0 ).
Since 0 < s + θ 0 q(θ0 ) < 2, the above equation implies that ut → u0 as t → +∞ (as
it should). For simplicity assume that 0 < 1 − s − θ 0 q(θ0 ) < 1. Since y 0 > y, we
know from comparative statics of the basic matching model that θ 0 > θ and thus
334                   19. EQUILIBRIUM SEARCH AND MATCHING

that u0 < u. Therefore ut = u0 + [1 − s − θ 0 q(θ0 )]t (u − u0 ) decreases geometrically
towards the new steady state at rate 1 − s − θ 0 q(θ0 ). This implies in turn that the
number of job creations is decreasing over time and the number of job destruction
is increasing. Specifically, at the time of the productivity shocks, JCt jumps to
θ0 q(θ0 )ut while JDt is equal to (1 − ut ) ∗ s. Thus, there are more jobs created
than destructed. Over time, JCt decreases while JDt increases. Asymptotically,
job creation is equal to job destruction.


   Exercise 19.9. Workweek restrictions, unemployment, and welfare, donated
by Rodolfo Manuelli

Recently, France has moved to a shorter workweek of about 35 hours per week. In
this exercise you are asked to evaluate the consequences of such a move. To this
end, consider an economy populated by risk-neutral, income-maximizing workers
with preferences given by
                           ∞
                           X
                  U = Et         β j yt+j ,    0 < β < 1,   1 + r = β −1 .
                           j=0

Assume that workers produce z at home if they are unemployed, and that they
are endowed with one unit of labor. If a worker is employed, he/she can spend
x units of time at the job, and (1 − x) at home, with 0 ≤ x ≤ 1. Productivity
on the job is yx, and x is perfectly observed by both workers and firms. Assume
that if a worker works x hours, his/her wage is wx. Assume that all jobs have
productivity y > z, and that to create a vacancy firms have to pay a cost of
c > 0 units of output per period. Jobs are destroyed with probability s. Let the
number of matches per period be given by
                                              M (u, v),
where M is concave, increasing in each argument, and homogeneous of degree one.
In this setting, u is interpreted as the total number of unemployed workers, and v
is the total number of vacancies. Let θ ≡ v/u, and let q(θ) = M (u, v)/v. Assume
that workers and firms bargain over wages, and that the outcome is described by
a Nash Bargaining outcome with the workers’ bargaining power equal to ϕ.

a. Go as far as you can describing the unconstrained (no restrictions on x other
than it be a number between zero and one) market equilibrium.

b. Assume that q(θ) = Aθ −α , for some 0 < α < 1. Does the solution of the
planner’s problem coincide with the market equilibrium?

c. Assume now that the workweek is restricted to be less than or equal to x∗ < 1.
Describe the equilibrium.
                       19. EQUILIBRIUM SEARCH AND MATCHING                      335

d. For the economy in part c go as far as you can (if necessary make addi-
tional assumptions) describing the impact of this workweek restriction on wages,
unemployment rates, and the total number of jobs. Is the equilibrium optimal?

   Solution
a. We first describe the equilibrium equations, following the notation of chapter
19.


(298)       s(1 − u)    = θq(θ)u
(299)              J    = x(y − w) + β (sV + (1 − s)J)
(300)             V     = −c + β (q(θ)J + (1 − q(θ))V )
(301)             E     = max {wx + z(1 − x) + β (sU + (1 − s)E)}
                           0≤x≤1

(302)             U = z + β (θq(θ)E + (1 − θq(θ))U )
(303)         E − U = φ(J − V + E − U )
(304)             V = 0.
Equation (298) is the steady state condition for the unemployment rate. Equa-
tions (299) and (300) are the Bellman equations for the firm. Equations (301)
and (302) are the Bellman equations for the worker. Equation (303) reflect Nash
bargaining. Lastly, equation (304) is the free entry condition. An equilibrium is
(u, θ, w, J, V, E, U ) that satisfies the above system of equations.

We now show that, in equilibrium, w ≥ z. Suppose not. Then the optimal choice
of the worker is x = 0. From equations (299) and (304), it follows that J = 0.
But then equation (300) implies that V < 0. A contradiction.
In equilibrium, w ≥ z. Let’s assume that if w = z then the worker chooses x = 1.
We can then drop the max in equation (301) and replace x by 1 in all other equa-
tions. The equilibrium is then the one of the basic matching model described in
chapter 19, pp 575 − 578.


b. First observe that, since y > z, the social planner necessarily chooses that all
worker spend x = 1 on the job. Thus we can replace x by 1 in the social planner
objective. Then the question is answered using the argument of section Analysis
of welfare, page 578 in Recursive Macroeconomic Theory. The steady state market
equilibrium coincides with steady state of the social optimum if and only if α = φ.


c. and d. Under this new assumption the equilibrium equations have the same
form as before except that the max is subject to 0 ≤ x ≤ x∗ . The same argument
as in part a shows that, in equilibrium, w ≥ z. If we resolve indifference by
setting x = x∗ , we can drop the max from equation (301) and replace x by x∗ .
Now make the following change of variables:
336                  19. EQUILIBRIUM SEARCH AND MATCHING



(305)                           w̃ ≡ x∗ w
(306)                            ỹ ≡ x∗ y
(307)                            z̃ ≡ x∗ z
                                           z(1 − x∗ )
(308)                          Ẽ ≡ E −
                                             1−β
                                           z(1 − x∗ )
(309)                          Ũ ≡ U −               .
                                             1−β
It is then easy to verify that the system of equilibrium equation is exactly (298)-
(304) when all variables have been replaced by their ˜ counterparts. Thus, we
can apply formula of chapter 19. We know that the market tightness of the
constrained equilibrium, θ̃), solves:

                                                r + s + φθ̃q(θ̃)
(310)                  ỹ − z̃ = x∗ (y − z) =                    c.
                                                            ˜
                                                  (1 − φ)q (θ)
The right hand side is increasing in θ̃. The left hand side is increasing in x∗ . Thus,
lower x∗ are associated with lower θ̃ and higher unemployment. The period wage
w̃ solves :

(311)                    wx∗ = w̃ = (1 − φ)z̃ + φỹ + φθ̃c.
All the terms on the right hand side increase with x∗ . Therefore, lower x∗ are
associated with lower wages. Note that the wage per hour w̃/x∗ may increase of
decrease.

The equilibrium is not optimal. Since y > z a central planner would necessarily
impose that employed worker spend x = 1 on the job. If the planner is constrained
to choose x ≤ x∗ , we find that the equilibrium is optimal if and only if φ = α.

   Exercise 19.10. Costs of creating a vacancy and optimality, donated by
Rodolfo Manuelli

Consider an economy populated by risk-neutral, income-maximizing workers with
preferences given by
                        ∞
                        X
                 U = Et   β j yt+j , 0 < β < 1, 1 + r = β −1 .
                          j=0

Assume that workers produce z at home if they are unemployed. Assume that
all jobs have productivity y > z, and that to create a vacancy firms have to pay
pA , with pA = C 0 (v), per period when they have an open vacancy, with v being
the total number of vacancies. Assume that the function C(v) is strictly convex,
twice differentiable and increasing. Jobs are destroyed with probability s. Let
                     19. EQUILIBRIUM SEARCH AND MATCHING                          337

the number of matches per period be given by
                                      M (u, v),
where M is concave, increasing in each argument, and homogeneous of degree one.
In this setting, u is interpreted as the total number of unemployed workers, and v
is the total number of vacancies. Let θ ≡ v/u, and let q(θ) = M (u, v)/v. Assume
that workers and firms bargain over wages, and that the outcome is described by
a Nash Bargaining outcome with the workers’ bargaining power equal to ϕ.

a. Go as far as you can describing the market equilibrium. In particular, discuss
how changes in the exogenous variables, z, y and the function C(v), affect the
equilibrium outcomes.

b. Assume that q(θ) = Aθ −α , for some 0 < α < 1. Does the solution of the
planner’s problem coincide with the market equilibrium? Describe instances, if
any, in which this is the case.

   Solution
a. Since C 0 (v) is taken as given by the entrepreneur when deciding to post a
vacancy, the equilibrium equations have the same form as in the basic matching
model of chapter 19, replacing c by C 0 (v). Following the algebra outlined in the
book, we find :

                                    r + s + φθq(θ) 0
(312)                      y−z =                  C (v).
                                      (1 − φ)q(θ)
This equation has two unknowns, θ ≡ uv and v. We obtain a second equation in
(θ, v) using the steady state condition u(1 − s) = uθq(θ):

                                v         s
(313)                             =u=           .
                                θ     s + θq(θ)
which implies that v(θ) = sθ/(s + θq(θ)). Observe that this is an increasing
function of θ because q(θ) is decreasing in θ. Replacing this expression in (312),
we obtain :
                                            ·           ¸
                           r + s + φθq(θ) 0      sθ
(314)                y−z =               C                .
                             (1 − φ)q(θ)      s + θq(θ)
C 0 (v) strictly increasing is because C is strictly convex. v(θ) is increasing. This
implies that the right hand side of the above equation is increasing in θ. Thus, if
there is an equilibrium, it is unique. Existence requires that the right hand side
evaluated at zero is less than y − z.

The usual comparative statics are still true. An increase in y or a decrease in
z increases the market tightness θ and reduce employment. An additive shift of
338                  19. EQUILIBRIUM SEARCH AND MATCHING

the cost function (C(v) + ∆c) do not affect the equilibrium, entry decision de-
pends on the marginal cost. However, a multiplicative shift of the cost function
((1 + k)C(v)) has an impact on the equilibrium outcome. k > 0 shifts the mar-
ginal cost C 0 upward, implying that the equilibrium market tightness is lower.
Thus, in equilibrium, less vacancies are created and the unemployment rate is
higher.

b. The planner’s problem is :
                                      +∞
                                      X
                        max                 [nt y + (1 − nt )z − C(vt )] .
                     {vt ,nt+1 }+∞
                                t=0   t=0
Subject to nt+1 ≤ (1 − s)nt + M (1 − nt , vt ). We attach the multiplier β t λt to the
constraint. With this normalization λt is measured in term of time t consumption
good. When taking derivative, we observe that ∂M      ∂u
                                                         = αM (u, v)/u = αθq(θ) and
∂M
 ∂v
    = (1 −  α)M (u, v)/v = (1 − α)q(θ).  The    first order conditions are :

(315)              y − z = λt+1 (1 − s) + λt /β − αθt+1 q(θt+1 )
(316)                  0 = −C 0 (vt+1 ) + λt+1 (1 − α)q(θt+1 ).
In a steady state θt , vt and λt are constant. Rearranging gives the familiar :

                                     r + s + αθq(θ)
(317)                           y−z =                .
                                       (1 − α)q(θ)
The usual result follows. The steady state market equilibrium is the steady state
of the social planning problem if and only if α = φ.

   Exercise 19.11. Financial wealth, heterogeneity,and unemployment, do-
nated by Rodolfo Manuelli

Consider the behavior of a risk-neutral worker that seeks to maximize the ex-
pected present discounted value of wage income. Assume that the discount factor
is fixed and equal to β, with 0 < β < 1. The interest rate is also constant and
satisfies 1 + r = β −1 . In this economy, jobs last forever. Once the worker has
accepted a job, he/she never quits and the job is never destroyed. Even though
preferences are linear, a worker needs to consume a minimum of a units of con-
sumption per period. Wages are drawn from a distribution with support on [a, b].
Thus, any employed individual can have a feasible consumption level. There is
no unemployment compensation. Individuals of type i are born with wealth ai ,
i = 0, 1, 2, where a0 = 0, a1 = a, a2 = a(1 + β). Moreover, in the period that they
are born, all individuals are unemployed. Population, Nt , grows at the constant
rate 1 + n. Thus, Nt+1 = (1 + n)Nt . It follows that, at the beginning of period
t, at least nNt−1 individuals — those born in that period — will be unemployed.
Of the nNt−1 individuals born at time t, ϕ0 are of type 0, ϕ1 of type 1, and the
                     19. EQUILIBRIUM SEARCH AND MATCHING                         339

rest, 1 − ϕ0 − ϕ1 , are of type 2. Assume that the mean of the offer distribution
(the mean offered, not necessarily accepted, wage) is greater than a/β.

a. Consider the situation of an unemployed worker who has a0 = 0. Argue that
this worker will have a reservation wage w ∗ (0) = a. Explain.

b. Let w∗ (i) be the reservation wage of an individual with wealth i. Argue
that w∗ (2) > w ∗ (1) > w ∗ (0). What does this say about the cross sectional
relationship between financial wealth and employment probability? Discuss the
economic reasons underlying this result.

c. Let the unemployment rate be the number of unemployed individuals at t, Ut ,
relative to the population at t, Nt . Thus, ut = Ut /Nt . Argue that in this economy
the unemployment rate is constant.

d. Consider a policy that redistributes wealth in the form of changes in the
fraction of the population that is born with wealth ai . Describe as completely as
you can the effect upon the unemployment rate of changes in ϕi . Explain your
results.
Extra Credit: Go as far as you can describing the distribution of the random
variable “number of periods unemployed” for an individual of type 2.

   Solution
a. All worker need to consume at least a. A worker with no financial wealth
can consume a only if she works. Thus, workers with no financial wealth al-
ways accept the first offer they receive. In other words, their reservation wage is
w∗ (i) = a.

Consider a worker with financial wealth a. If she accepts the offer to work forever
at wage w, her utility is :

                                                  +∞
                                                  X
(318)                         Vaccept = max
                                         +∞
                                                        β t ct .
                                       {ct }t=0
                                                  t=0

Subject to the intertemporal budget constraint:

                         +∞
                         X                 +∞
                                           X
                                ct                w
(319)                                t
                                       ≤a+              .
                         t=0
                             (1 + r)       t=0
                                               (1 + r)t
Since the utility function is increasing, the budget constraint is biding. When
assuming furthermore that β = 1/(1 + r), we find that the right hand side of the
budget constraint is equal to the objective, i.e. :
                                                   w
                               Vaccept = a +          .
                                                  1−β
340                   19. EQUILIBRIUM SEARCH AND MATCHING

Observe also that, if she rejects, the unemployed worker need to consume a. She
will enter next period with no financial wealth. In other word, if she rejects
this period, she will accept any wage offer next period. Thus, the value function
equation of an unemployed worker of type 1 with wage w in hand solves the
following Bellman equation :
                                          ½                     ¾
                    1                        w             E(w)
                  V (w) = max                   + a, a + β        .
                            accept,reject   1−β            1−β
The above equation implies that the optimal policy is characterized by a reser-
vation wage w ∗ (1) that solves :

                             w∗ (1)   βE(w)       a
                                    =         >       .
                             1−β       1−β       1−β
Since βE(w) > a by assumption. Consider now an unemployed worker with
financial wealth (1 + β)a. If she accepts, the same reasoning as above shows that
her utility is :
                                  w
                                       + (1 + β)a.
                                 1−β
If she rejects, she has to consume a this period, she saves βa so that next period
she has financial wealth β(1 + r)a = a . Thus, her value function solves the
Bellman equation :
                                      ½                                 ¾
              2                            w                    £ 1 0 ¤
(320)       V (w) =      max                  + (1 + β)a, a + βE V (w ) .
                      accept,reject       1−β
The above equation shows that the optimal policy is characterized by a reservation
wage w∗ (2) that solves :

                       w∗ (2)                    £         ¤
(321)                         + (1 + β)a = a + βE V 1 (w0 ) .
                       1−β
To compare w ∗ (1) and w ∗ (2) we make the following observation. From the Bell-
man equation for V 1 , it is clear that:
                                           w
                                      V 1 (w) ≥+ a.
                                         1−β
Furthermore, for all w < w ∗ (1), the inequality is strict. Taking expectations on
both sides implies that :
                               £        ¤         E(w)
                             E V 1 (w0 ) > a +          .
                                                  1−β
Now replace this inequality into (321) to obtain w ∗ (2) > w ∗ (1). This model thus
implies that, in a cross section, employment probability is negatively correlated
with financial wealth. Interestingly, this is in spite of the fact that leisure do not
enter in the utility function. There is negative correlation because a wealthier
                       19. EQUILIBRIUM SEARCH AND MATCHING                           341

agent can buy the option to wait for a new offer.

c.
Observe first that unemployment lasts at the most 2 periods. Thus, at time t,
there is no unemployed agent from generation t − 2 and earlier. Unemployment
at time t is :

(322)        Ut = nNt−1 (φ1 F (w1 ) + φ2 F (w2 )) + nNt−2 φ2 F (w2 )F (w1 ).
The first term on the right hand side is the number of newborn agents who refuse
their wage offer. The second term is the measure of agents born in period t − 1
who rejects twice their offer. Dividing by Nt , using the fact that Nt /Nt−1 = 1+n,
we find :

                 n                                  n
(323)      ut =      (φ1 F (w1 ) + φ2 F (w2 )) +          φ2 F (w2 )F (w1 ),
               n+1                               (n + 1)2
which shows that the unemployment rate is constant in this economy.

d. Let’s describe a redistributive policy as follows. It is a pair x1 , x2 , of fractions
of agents with wealth a and wealth (1 + β)a that satisfies the budget constraint :

                    x1 a + x2 (1 + β)a = φ1 a + φ2 (1 + β)a.
Observe that we constraint the government to redistribute within generations
only. The above budget constraint can be written :

(324)             x1 = φ1 + φ2 (1 + β) − x2 (1 + β) = Φ − x2 (1 + β).
Replacing the above expression into the unemployment rate equation, we find :

(325)                  ·                                                             ¸
       n                  n                 n                       n
u=         ΦF (w1 )+x2         F (w2 ) +          F (w1 )F (w2 ) −     F (w1 )(1 + β) .
     1+n                 1+n             (1 + n)2                  1+n
As one could expect, an increase in x2 has two effects. It first increase the frac-
tion of unemployed agents born with wealth (1 + β)a. Since the increase in x2 is
engineered by decreasing x1 , the fraction of unemployed agents born with wealth
a is decreasing. The net effect is ambiguous at this stage.

Extra Credit. An agent born with wealth (1 + β)a stays unemployed one pe-
riod with probability F (w2 )(1 − F (w1 )) and stays unemployed two periods with
probability F (w2 )F (w1 ).
                              Index



bigshow.m, 21

dlqrmon.m, 53
doublej.m, 12, 14, 18

epdata.m, 164
ex0103.m, 10
ex0104, 12
ex0105.m, 19
ex0406b.m, 53
ex0702.m, 97
ex1001.m, 164
ex1402b.m, 213
ex1405.m, 220
ex1510.m, 237
ex1511.m, 241
ex1512.m, 244
ex1904.m, 320
ex1905.m, 323

freq.m, 21

hnval.m, 225
hnval2.m, 225
hopnic.m, 225

impl2.m, 323

Kochrecur.m, 237

linprogTWexp.m, 249

nash.m, 89

olrp.m, 46, 84, 87, 88, 219

show.m, 51
shur.m, 54

unemp1.m, 320
unemp2.m, 323




                               343



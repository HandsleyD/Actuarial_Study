---
normalized_id: shared-pdf-reference-computational-game-theory-lctn-yishay-mansour
exam_code: SHARED
material_scope: computational game theory lctn - yishay mansour.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Computational Game Theory Lctn - Yishay Mansour.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-computational-game-theory-lctn-yishay-mansour

  Computational Learning Theory                              Spring Semester, 2003/4

                                Lecture 1: March 2
  Lecturer: Yishay Mansour                              Scribe: Gur Yaari, Idan Szpektor




1.1     Introduction
Several fields in computer science and economics are focused on the analysis of Game theory.
Usually they observe Game Theory as a way to solve optimization problems in systems where
the participants act independently and their decisions affect the whole system.
Following is a list of research fields that utilize Game Theory:
   • Artificial Intelligence (AI) - Multiple Agents settings where the problem is usually a
     cooperation problem rather than a competition problem.

   • Communication Networks - Distribution of work where each agent works indepen-
     dantly.

   • Computer Science Theory - There are several subfields that use Game Theory:

        – Maximizing profit in bidding
        – Minimum penalty when using distributional environment
        – Complexity
        – Behavior of large systems


1.2     Course Syllabus
   • Basic definitions in Game Theory, concentrating on Nash Equilibrium

   • Coordination Ratio

        – Comparison between global optimum and Nash Equilibrium
        – Load Balancing Models

   • Computation of Nash Equilibrium

        – Zero Sum games (Linear Programming)
        – Existence of Nash Equilibrium in general games

                                             1
2                                                                           Lecture 1: March 2

    • Regret - playing an “unknown” game. Optimizing a player’s moves when the player
      can only view her own payoff

    • Vector Payoff - the Payoff function is a vector and the target is to reach a specific
      target set

    • Congestion and Potential games - games that model a state of load

    • Convergence into Equilibrium

    • Other...


1.3      Strategic Games
A strategic game is a model for decision making where there are N players, each one choosing
an action. A player’s action is chosen just once and cannot be changed afterwards.
    Each player i can choose an action ai from a set of actions Ai . let A be the set of all
possible action vectors ×j∈N Aj . Thus, the outcome of the game is an action vector ~a ∈ A.
    All the possible outcomes of the game are known to all the players and each player i has
a preference relation over the different outcomes of the game: ~a i ~b for every ~a, ~b ∈ A. The
relation stands if the player prefers ~b over ~a, or has equal preference for either.
Definition A Strategic Game is a triplet hN, (Ai ), (i )i where N is the number of players,
Ai is the finite set of actions for player i and i is the preference relation of player i.
    We will use a slightly different notation for a strategic game, replacing the preference
relation with a payoff function ui : A → R. The player’s target is to maximize her own
payoff. Such strategic game will be defined as: hN, (Ai ), (ui )i.
    This model is very abstract. Players can be humans, companies, governments etc. The
preference relation can be subjective evolutional etc. The actions can be simple, such as “go
forward” or “go backwards”, or can be complex, such as design instructions for a building.
    Several player behaviors are assumed in a strategic game:

    • The game is played only once

    • Each player “knows” the game (each player knows all the actions and the possible
      outcomes of the game)

    • The players are rational. A rational player is a player that plays selfishly, wanting to
      maximize her own benefit of the game (the payoff function).

    • All the players choose their actions simultaneously
1.4. PARETO OPTIMAL                                                                           3

1.4      Pareto Optimal
 An outcome ~a ∈ A of a game hN, (Ai ), (ui )i is Pareto Optimal if there is no other outcome
~b ∈ A that makes every player at least as well off and at least one player strictly better off.
 That is, a Pareto Optimal outcome cannot be improved upon without hurting at least one
 player.
 Definition An outcome ~a is Pareto Optimal if there is no outcome ~b such that
 ∀j∈N uj (~a) ≤ uj (~b) and ∃j∈N uj (~a) < uj (~b).


1.5      Nash Equilibrium
A Nash Equilibrium is a state of the game where no player prefers a different action if the
current actions of the other players are fixed.
Definition An outcome a∗ of a game hN, (Ai ), (i )i is a Nash Equilibrium if:
∀i∈N ∀bi ∈Ai (a∗−i , bi )  (a∗−i , a∗i ).
(a−i , x) means the replacement of the value ai with the value x.
    We can look at a Nash Equilibrium as the best action that each player can play based
on the given set of actions of the other players. Each player cannot profit from changing her
action, and because the players are rational, this is a “steady state”.
Definition Player i Best Response for a given set of other players actions a−i ∈ A−i is
the set: BR(a−i ) := {b ∈ Ai | ∀c∈Ai (a−i , c) i (a−i , b)}.
   Under this notation, an outcome a∗ is a Nash Equilibrium if ∀i∈N a∗i ∈ BR(a∗−i ).


1.6      Matrix Representation
A two player strategic game can be represented by a matrix whose rows are the possible
actions of player 1 and the columns are the possible actions of player 2. Every entry in the
matrix is a specific outcome and contains a vector of the payoff value of each player for that
outcome.
    For example, if A1 is {r1,r2} and A2 is {c1,c2} the matrix representation is:


                                            c1       c2
                                   r1   (w1, w2) (x1, x2)
                                   r2    (y1, y2) (z1, z2)
4                                                                      Lecture 1: March 2

    Where u1 (r1, c2) = x1 and u2 (r2, c1) = y2.


1.7      Strategic Game Examples
The following are examples of two players games with two possible actions per player. The
set of deterministic Nash Equilibrium points is described in each example.


1.7.1     Battle of the Sexes


                                            Sports    Opera
                                   Sports    (2, 1)   (0, 0)
                                   Opera     (0, 0)   (1, 2)


    There are two Nash Equilibrium points: (Sports, Opera) and (Opera, Sports).


1.7.2     A Coordination Game


                                          Attack    Retreat
                             Attack       (10, 10) (−10, −10)
                             Retreat    (−10, −10)   (0, 0)


   There are two Nash Equilibrium outcomes: (Attack, Attack) and (Retreat, Retreat).
A question that raises from this game and its equilibria is how the two players can move
from one Equilibrium point, (Retreat, Retreat), to the better one (Attack, Attack). Another
the way to look at it is how the players can coordinate to choose the preferred equilibrium
point.


1.7.3     The Prisoner’s Dilemma
There is one Nash Equilibrium point: (Confess, Confess). Here, though it looks natural that
the two players will cooperate, the cooperation point (Don’t Confess, Don’t Confess) is not
a steady state since once in that state, it is more profitable for each player to move into
’Confess’ action, assuming the other player will not change its action.
Strategic Game Examples                                                                            5


                                             Don’t Confess      Confess
                           Don’t Confess       (−1, −1)         (−4, 0)
                             Confess            (0, −4)        (−3, −3)



1.7.4     Dove-Hawk


                                               Dove Hawk
                                      Dove     (3, 3) (1, 4)
                                      Hawk     (4, 1) (0, 0)



   There are two Nash Equilibrium points: (Dove, Hawk) and (Hawk, Dove).


1.7.5     Matching Pennies


                                              Head     Tail
                                     Head    (1, −1) (−1, 1)
                                     Tail    (−1, 1) (1, −1)


   In this game there is no Deterministic Nash Equilibrium point. However, there is a Mixed
Nash Equilibrium which is ( 12 , 12 ), ( 12 , 21 ) This is a zero sum game (the sum of the profits of
each player over all possible outcomes is 0).


1.7.6     Auction
There are N players, each one wants to buy an object.

   • Player i ’s valuation of the object is vi , and, without loss of generality, v1 > v2 > ... >
     vn > 0.

   • The players simultaneously submit bids - ki ∈ [0, ∞). The player who submit the
     highest bid - ki wins.
6                                                                          Lecture 1: March 2

    • In a first( price auction the payment of the winner is the price that she bids. Her payoff
                   vi − ki , i = argmax ki
      is ui =                              .
                   0, otherwise
      A Nash equilibrium point is k1 = v2 + , k2 = v2 , ..., kn = vn . In fact one can see that
      k3 , . . . , kn have no influence.
   In a second price auction the payment of the winner is the highest bid among those
submitted by the players who do not win. Player i’s payoff when she bids vi is at least as
high as her payoff when she submits any other bid, regardless of the other players’ actions.
Player 1 payoff is v1 − v2 . This strategy causes the player to bid truthfully.

1.7.7     A War of Attrition
Two players are involved in a dispute over an object.
    • The value of the object to player i is vi > 0. Time t ∈ [0, ∞).
    • Each player chooses when to concede the object to the other player
    • If the first player to concede does so at time t, her payoff ui = −t, the other player
      obtains the object at that time and her payoff is uj = vj − t.
    • If both players concede simultaneously, the object is split equally, player i receiving a
      payoff of v2i − t.
   The Nash equilibrium point is when one of the players concede immediately and the other
wins.

1.7.8     Location Game
    • Each of n people chooses whether or not to become a political candidate, and if so
      which position to take.
    • The distribution of favorite positions is given by the density function f on [0, 1].
    • A candidate attracts the votes of the citizens whose favorite positions are closer to her
      position.
    • If k candidates choose the same position then each receives the fraction k1 of the votes
      that the position attracts.
    • Each person prefers to be the unique winning candidate than to tie for first place,
      prefers to tie the first place than to stay out of the competition, and prefers to stay
      out of the competition than to enter and lose.
1.8. MIXED STRATEGY                                                                                    7

    When n = 3 there is no Nash equilibrium. No player wants to be in the middle, since
the other players will be as close as possible to the middle player, either from the left or the
right.


1.8       Mixed Strategy
Now we will expand our game and let the players’ choices to be nondeterministic. Each
player i ∈ N will choose a probability distribution Pi over Ai :
   1. P = hP1 , ....PN i
                 Q
   2. P (~a) =       Pi (ai )
   3. ui (P ) = E~a∼P [ui (~a)]
Note that the function ui is linear in Pi : Ui (Pi , λαi + (1 − λ)βi ) = λUi (P−i , αi ) + (1 −
λ)Ui (P−i , βi ).
Definition support(Pi ) = {a|Pi (a) > 0}
    Note that the set of Nash equilibria of a strategic game is a subset of its set of mixed
strategy Nash equilibria.
Lemma 1.1 Let G = hN, (Ai ), (ui )i.            Then α∗ is Nash equilibria of G if and only if
                          ∗
∀i∈N support(Pi ) ⊆ BRi (α−i )
   Proof:
⇒ Let α∗ be a mixed strategy Nash equilibria (α∗ = (P1 , ..., PN )). Suppose ∃a∈support(Pi ) a 6∈
       ∗
BRi (α−i  ) . Then player i can increase her payoff by transferring probability to a0 ∈ BRi (α−i     ∗
                                                                                                       );
         ∗
hence α is not mixed strategy Nash equilibria - contradiction.
                                                                                            ∗
⇐ Let qi be a probability distribution s.t. ui (Q) > ui (P ) in response to α−i               . Then by
                                                          ∗              ∗                         ∗
the linearity of ui , ∃b∈support(Qi ),c∈support(Pi ) ui (α−i , b) > Ui (α−i , c); hence c 6∈ BRi (α−i ) -
contradiction.                                                                                         2

1.8.1      Battle of the Sexes
As we mentioned above, this game has two deterministic Nash equilibria, (S,S) and (O,O).
Suppose α∗ is a stochastic Nash equilibrium:
   • α1∗ (S) = 0 or α1∗ (S) = 1 ⇒ same as the deterministic case.
   • 0 < α1∗ (S) < 1 ⇒ by the lemma above 2α2∗ (O) = α2∗ (S) (α2∗ (O) + α2∗ (S) = 1) and
     thus α2∗ (O) = 13 , α2∗ (S) = 23 . Since 0 < α2∗ (S) < 1 it follows from the same result that
     2α1∗ (S) = α1∗ (O) so α1∗ (S) = 13 , α1∗ (O) = 32 .
   The mixed strategy Nash Equilibrium is (( 32 , 13 ), ( 31 , 32 )).
8                                                                         Lecture 1: March 2

1.9     Correlated Equilibrium
We can think of a traffic light that correlates, advises the cars what to do. The players
observe an object that advises each player of her action. A player can either accept the
advice or choose a different action. If the best action is to obey the advisor, the advice is a
correlated equilibrium.
Definition Q is probability distribution over A. ~a ∈ Q is a Nash correlated equilibrium if
∀zi ∈ suppport(Q) EQ [Ui (a−i , zi )|ai = zi ] > EQ [Ui (a−i , x)|ai = zi ]


1.10      Evolutionary Equilibrium
This type of game describes an ”evolution” game between different species. There are B types
of species, b, x ∈ B. The payoff function is u(b,x). The game is defined as h{1, 2}, B, (ui )i.
    The equilibrium b∗ occurs when for each mutation b the payoff function satisfies
(1 − )u(b∗ , b) + u(b, b) < (1 − )u(b∗ , b∗ ) + u(b∗ , b).
    This kind of equilibrium is defined as an evolutionarily stable strategy since it toler-
ates small changes in each type.
  Computational Learning Theory                              Spring Semester, 2003/4

                                Lecture 2: March 9
  Lecturer: Yishay Mansour                           Scribe: Noa Bar-Yosef, Eitan Yaffe




2.1     Coordination Ratio
Our main goal is to compare the ”cost” of Nash equilibrium (NE ) to the ”cost” of a global
optimum of our choice. The following examples will help us get a notion of the Coordination
Ratio:



              S                                                          T



                           Figure 2.1: Routing on parallel lines


   • Assume there is a network of parallel lines from an origin to a destination as shown
     in figure 2.1. Several agents want to send a particular amount of traffic along a path
     from the source to the destination. The more traffic on a particular line, the longer
     the traffic delay.

   • Allocation jobs to machines as shown in figure 2.2. Each job has a different size and
     each machine has a different speed. The performance of each machine reduces as more
     jobs are allocated to it. An example for a global optimum function, in this case, would
     be to minimize the load on the most loaded machine.

   In these scribes we will use only the terminology of the scheduling problem.




                                             1
2                                                                           Lecture 2: March 9




                                job1
                                                                     job4

                                                 job3                job5
                                job2
                                                                     job6
                                M1                M2                 M3

                             Figure 2.2: Scheduling jobs on machines




2.2      The Model
    • Group of n users (or players), denoted N = {1, 2, ..., n}

    • m machines: M1 , M2 , ..., Mm

    • ~s speeds: s1 , s2 , ..., sm (in accordance to Mi )

    • Each user i has a weight: wi > 0

    • ψ : mapping of users to machines:

                                                  ψ(i) = j

      where i is the user and j is the machine’s index. Note that NE is a special type of ψ -
      one which is also an equilibrium.

    • The load on machine Mj will be:
                                                    P
                                                       i:ψ(i)=j wj
                                             Lj =
                                                            sj

    • The cost of a configuration will be defined as the maximal load of a machine:

                                             cost(ψ) = max Lj
                                                             j
2.3. POINTS OF EQUILIBRIA                                                                  3

   Our goal is to minimize the cost. The minimal cost, sometimes referred to as the social
optimum is denoted by OP T and defined as follows:

                                      OP T = min cost(ψ)
                                                    ψ


Definition We name the ratio between the worst NE and OPT the Coordination Ratio and
define it to be:
                                     maxN E cost(N E)
                              CR =
                                           OP T



2.3     Points of equilibria
In our discussion we will attend two types of equilibria:
   • Deterministic: Each user i is assigned to one machine, Mj .

   • Stochastic: Each user i has a distribution pi over M ~ . Note that the deterministic
                                                                    (
                                                                      1 if j = j0
     model is a special case of the stochastic model where pi (j) =               .
                                                                      0 otherwise
When each player chooses a certain distribution, the expected load on machine j is:
                                                  Pn
                                                   i=1 pi (j) ∗ wi
                                     E[Lj ] =
                                                            sj
Next we define for player i the cost of choosing machine j. This function represents the
point of view of player i: we define it as if he chose the machine in a deterministic manner.
                              X pk (j) ∗ wk       wi            (1 − pi (j)) ∗ wj
                   Ci (j) =                   +      = E[Lj ] +
                              k6=i   sj           sj                   sj

In other words, Ci (j) is the load on Mj if player i moves to machine j.
   In an equilibrium player i will choose the machine with the minimal cost (and therefore
he has no interest in changing to another machine). We define the cost to be:

                                      Cost(i) = min Ci (j)
                                                        j

    Minimizing the cost function for player i means that pi (j) > 0 only for machines that
will have a minimal load after the player moves to them. For this reason, i actually shows
Best Response. (As such, for each machine j: If Ci (j) > Cost(i), then pi (j) = 0. In such a
case choosing Mj does not yield a Best Response).
4                                                                        Lecture 2: March 9

2.4     Bounding CR
First we will show a simple bound on CR.

Claim 2.1 For m machines, CR ∈ [1, m].

   Proof: As any equilibrium point cannot be better than the global optimal solution,
CR >= 1. Therefore we need only to establish the upper bound.
Let S = maxj sj . In the worst case any Nash equilibrium is bounded by:
                                                 Pn
                                                  i=1 wi
                                   Cost N E ≤
                                                      S

(Otherwise, the player can move to a machine with speed S for which its load is always less
than Cost N E).
We also have that                           Pn
                                                 wi
                                     OP T ≥ Pi=1
                                              m
                                              j=1 sj

(As if we can distribute each player’s weight in an equal manner over all the machines).
Using the above bounds, we get:
                                            Pn
                                                 wi       Pm
                             Cost N E                      j=1 sj
                                         i=1

                        CR =          ≤ PnS w =                     ≤m
                              OP T      Pi=1
                                         m
                                             i             S
                                                 s
                                              j=1 j


                                                                                           2

Note 2.2 The bound now for CR is linear, but in Theorem 2.9 we will show that the bound
is in fact logarithmic.

Claim 2.3 Finding OPT for m=2, is an NP-Complete problem.

    Proof: Given that s1 = s2, this problem becomes identical to dividing natural numbers
into two disjoint sets such that the numbers in both sets yield the same sum. This problem
(called partitioning) is known to be NP-C.                                               2

Note 2.4 We’ve seen models where the optimal solution was not an equilibrium (such the
’prisoner dilema’). In this example the optimal solution is a Nash Equilibrium.
2.5. TWO IDENTICAL MACHINES, DETERMINISTIC MODEL                                           5




                                                            2

                     2           2
                                                1
                                                            2
                     1           1              1
                         OPT                         NE

                             Figure 2.3: Example of CR = 34




2.5     Two Identical Machines, Deterministic Model
As can be seen in figure 2.3, at a Nash Equilibrium point, the maximal load is 4. However,
the maximal load of the optimal solution is only 3. Therefore CR = 43 .

Claim 2.5 For 2 identical machines in the deterministic model, CR ≥ 43 .

   Proof: Without loss of generality, let us assume that L1 > L2 . We define v = L2 − L1 .

  a. If L2 ≥ v :
     L1 = L2 + v. Therfore Cost N E = L2 + v, and OPT is at least L1 +L
                                                                     2
                                                                       2
                                                                         = L2 + v2 . Hence,
                                                  v          v
                           NE     L2 + v          2          2    4
                    CR =        =      v = 1 +      v ≤ 1 +    v = .
                           OP T   L2 + 2       L2 + 2       v+2   3

  b. If L2 < v:
     As before L1 = L2 + v. Therefore 2L2 < L1 < 2v. If L1 consists of the weight of more
     than one player, we will define w to be the weight of the user with the smallest weight.
     Since this is a Nash Equilibrium, w > v. (Otherwise the player would rather move).
     However, L1 < 2v, hence it is not possible to have two or more players on the same
     machine. Because of this, we will get one player on M1 which is the optimal solution,
     and CR = 1 accordingly.

                                                                                           2
6                                                                                   Lecture 2: March 9

2.6      Two Identical Machines, Stochastic Model
For an example we’ll look at 2 identical users, for which w1 = w2 = 1, as shown in figure
2.4. Each of the players chooses a machine at random.


                  User1                                                User2




                     1/2          1/2                 1/2              1/2




                                 M1                        M2


                             Figure 2.4: Stochastic model example

   At a Nash Equilibrium point, with a probability of 1/2, the players will choose the same
machine and with a probability of 1/2, each player will choose a different machine. Together
we get Cost N E = 1/2 ∗ 2 + 1/2 ∗ 1 = 3/2. The cost of OPT is 1 and so it follows that
CR = 3/2.

Theorem 2.6 For 2 identical machines in the stochastic model, CR ≤ 32

    Proof: Let pi (b) be the probability that player i chooses machine Mb . We get that
                                                   n
                                                   X
                                  L̄b = E[Lb ] =          (pi (b) ∗ wi ).
                                                   i=1

    And the cost of player i when he chooses machine Mb becomes:
                                                   X
                           (E[Costi (b)]) = wi +          (pj (b) ∗ wj ) = Ci (b)
                                                   j6=i

Since we have 2 machines, Cost(i) = min{Ci (1), Ci (2)}.
Basically, the least loaded machine, when ignoring the weight of user i, is chosen. Since each
user performs according to its optimal solution, we get that in a case of an equilibrium point,
if pi (b) > 0 then Ci (b) = Cost(i).
On the other hand, if Ci (b) > Cost(i) then pi (b) = 0. In other words, the player chooses her
Best Response according to what he sees.
Two Identical Machines, Stochastic Model                                                            7

  We now define qi to be the probability that player i chooses the most loaded machine.
We get that
                                                                           n
                                                                           X
                                Cost N E = E[max Lb ] =                          (qi ∗ wi ).
                                                                           i=1

Furthermore, we will define the probability of a collision on a machine (both user i and user
j choose the same machine) as tij .
    Pay attention to the following properties:
                                             P
  1. In a Nash Equilibrium point,               k6=i (tik ∗ wk ) + wi = Cost(i).
                                               Pn
  2. For m machines, Cost(i) ≤ m1                k=1 wk +
                                                                  m−1
                                                                   m
                                                                      wi
     Proof:                                                                    m
                                                                            1 X
                                     Cost(i) = min Ci (j) ≤                       Ci (j)
                                                             j              m j=1
                         m                                    m X n
                      1 X                                  1 X                       m−1
                  =        (E[Lj ] + (1 − pi (j)) ∗ wi ) =          (pk (j) ∗ wk ) +     wi
                      m j=1                                m j=1 k=1                  m
                                                     n
                                                  1 X        m−1
                                                =       wk +     wi
                                                  m k=1       m
       Substituting m for 2 machines, we get that
                                                                     n
                                                                  1X         wi
                                               Cost(i) ≤                wk +
                                                                  2 k=1      2

  3. qi + qj ≤ 1 + tij
     Proof:
     qi + qj − tij ≤ P r[i and j choose the most loaded machine] ≤ 1.
       P                          3P
  4.       k6=i (1 + tik ) ∗ wk ≤ 2 k6=i wk
       Proof:                       X                               X               X
                                           (1 + tik ) ∗ wk =               wk +            tik wk
                                    k6=i                            k6=i            k6=i
                                                      X
                                               =             wk + Cost(i) − wi
                                                      k6=i

       using property 2:
                                               X                 1X       wi
                                           ≤          wk +           wk +    − wi
                                               k6=i              2 k      2
                                                      3X         1    1
                                               =             wk + wi − wi
                                                      2 k6=i     2    2
8                                                                                        Lecture 2: March 9

                                                           3X
                                                       ≤          wk
                                                           2 k6=i

To finish the proof of the theorem we now get:
                                                            n
                                                            X
                                        Cost N E =                qk wk =
                                                            k=1
                                        X                         X
                                            (qi + qk )wk −             qi w k
                                        k                          k
                                              X                             X
                                = 2qi wi +           (qi + qk )wk − qi              wk
                                              k6=i                              k
                                              X                             X
                                ≤ 2qi wi +           (1 + tik )wk − qi              wk
                                              k6=i                              k

                                                     3X              X
                                   ≤ 2qi wi +               w k − qi   wk
                                                     2 k6=i          k

                                          3       3       X
                                  = (2qi − )wi + ( − qi )   wk
                                          2       2       k
                                            P
As previously shown, OP T ≥ max{ 12 nk=1 wk , wi }.
Realize that one of the following 2 situations may occur:

    1. There exists a player i such that qi ≥ 34 .
       In such a case, (2qi − 32 )wi ≤ (2qi − 32 ) ∗ OP T .
       Therefore,
                                          3                      3
                          Cost N E ≤ ( − qi ) ∗ 2OP T + (2qi − ) ∗ OP T
                                          2                      2
                                               3       3
                                     ≤ [2qi − + 2( − qi )] ∗ OP T
                                               2       2
                                                    3
                                                = ∗ OP T
                                                    2
    2. For all i, qi ≤ 34 , therefore
                                                        n
                                                        X    n
                                                          3 X
                                    Cost N E =     qk wk ≤ ∗    wk
                                               k=1        4 k=1

                                                           3
                                                      ≤      ∗ OP T
                                                           2
In both cases we reach our desired result that Cost N E ≤ 32 ∗ OP T .                                    2
2.7. IDENTICAL MACHINES, DETERMINISTIC USERS                                          9

2.7     Identical machines, deterministic users
First we define some variables:
                                    wmax = max wi                                  (2.1)
                                              i

                                    Lmax = max Lj                                  (2.2)
                                              j

                                     Lmin = min Lj                                 (2.3)
                                              j


Claim 2.7 In a Nash equilibrium, Lmax − Lmin ≤ wmax

  Proof: Otherwise there would be some user j s.t. wj ≤ wmax , which could switch to the
machine with load Lmin .                                                              2

Theorem 2.8 Given identical machines and deterministic users, CR ≤ 2

   Proof: There are two options:

   • Lmin ≤ wmax
      Then Lmax ≤ 2wmax
      But since OP T ≥ wmax we get CR ≤ LOP
                                          max
                                            T
                                              ≤2

   • Lmin > wmax
      Then Lmax ≤ Lmin + wmax ≤ 2Lmin , which results in
               P
      OP T ≥ m1 k wk ≥ Lmin . Therefore CR ≤ LOP
                                               max
                                                 T
                                                   ≤ 2L  min
                                                       Lmin
                                                             =2

                                                                                      2
10                                                                                          Lecture 2: March 9

2.7.1          Example of CR → 2




                                                                               1



                     ε                                      ε



        1/
           ε
               {     ε
                     ε
                     ε
                     M1
                                                            ε
                                                            ε
                                                            ε
                                                            Mm-1
                                                                               1



                                                                               Mm


                                   Figure 2.5: CR comes near to 2

    Let’s examine an example of a configuration with a CR that approaches 2. Consider m
machines and m−1 ε
                   users with a weight of ε and 2 users with a weight of 1 as shown in figure
2.5. This is a Nash equilibrium with a cost of 2.
    The optimal configuration is obtained by scheduling the two ”heavy” users (with w = 1)
on two separate machines and dividing the other users among the rest of the machines. In
this configuration we get:
    C = OP T = 1 + m1 → 1


2.8       Identical machines, stochastic users
2.8.1          Example
Consider the following example: m machines, n = m users, wi = 1, pi (j) = m1 . What is the
maximal expected load?
    This problem is identical to the following problem: m balls are thrown randomly into m
bins; What is the expected maximum number of balls in a single bin? Let us first see what
is the probability that k balls will fall into a certain bin:
                          Ã       !µ       ¶k µ          ¶m−k      µ    ¶k µ       ¶k       µ ¶k
                              m        1             1            c∗m          1             c
                   Pr =                           1−            ≈                       =
                              k        m             m             k           m             k
Identical machines, stochastic users                                                             11

   The probability that there exists a bin with at least k balls is 1 − (1 − ( kc )k )m which is
constant for k ∼ lnlnlnmm . Therefore the maximal load is roughly lnlnlnmm .

2.8.2     Upper bound
Using the Azuma-Hoeffding inequality we will establish a highly probable upper bound on
the maximum expected load. Using theorem 2.8 from the deterministic part we know that:

                                       L̄j = E[Lj ] ≤ 2OP T

We wish to prove that the probability of having a j for which Lj À L̄j is negligible. The
                                                              P
Azuma-Hoeffding inequality for some random variable X =         xi , where xi are random
variables with values in the interval [0, z], is:
                                                   Ã              !λ
                                                       e ∗ E[X]     z
                                   P [X ≥ λ] ≤
                                                           λ
                                                    (
                                                         wi if pi (j) > 0
Let us define λ = 2αOP T , z = wmax and xi =
                                                         0 otherwise
By applying the inequality we get:
                                             Ã                ! 2αOP T       µ ¶2α
                                                 e ∗ E[Lj ]     wmax
                                                                              e
                        P [Lj ≥ 2αOP T ] ≤                               ≤
                                                 2αOP T                       α
which results in                                                 µ ¶2α
                                                                   e
                                P [∃j Lj ≥ 2αOP T ] ≤ m
                                                                   α
Note that for α = Ω( lnlnlnmm ) the probability is smaller than 2m
                                                                 1
                                                                   .
                                                                               ³             ´
                                                                                    ln m
Theorem 2.9 For m identical machines the worst case CR is O                        ln ln m

   Proof: We shall calculate the expected cost including high loads which have a low
probability, and see that their contribution is O(1). For any random variable X and a
natural number A we know that:
                                                   ∞
                                                   X
                                   E[X] ≤ A +            P [X ≥ i]
                                                   i=A

In our case we get
                                            ∞
                                            X
               E[cost-NE] ≤ A ∗ OP T +            P [cost-NE ≥ 2α ∗ OP T ] ∗ 2OP T
                                           α=A
12                                                                           Lecture 2: March 9

Therefore we define A = 2 ∗ c lnlnlnmm for some constant c and get
                                                                µ ¶2α
                                                              X e
                                            ln m
                      E[cost-NE] ≤ 2 ∗ c           ∗ OP T + m           ∗ OP T
                                           ln ln m            α α

But since αe ≤ 2m
                1
                  we get

                                               ln m
                         E[cost-NE] ≤ 2 ∗ c           ∗ OP T + O(1) ∗ OP T
                                              ln ln m
Resulting in                                      Ã         !
                                               ln m
                                       CR = O
                                              ln ln m
                                                                                                2


2.9       Non-identical machines, deterministic users
We shall first examine a situation with a ’bad’ coordination ratio of lnlnlnmm , then establish an
upper bound.


2.9.1     Example
Let us have k + 1 groups of machines, with Nj machines in group j. The total number of
                   P
machines m = N = kj=0 Nj . We define the size of the groups by induction:
              √
     • Nk =       N

     • Nj = (j + 1) ∗ Nj+1

     • N0 = k! ∗ Nk

From the above it results that:
                                                   ln N
                                             k∼
                                                  ln ln N
the speed of the machines in group Nj is defined sj = 2j .
   First we set up an equilibrium with a high cost. Each machine in group Nj receives j
users, each with a weight of 2j . It is easy to see that the load in group Nj is j and therefore
the cost is k. Note that group N0 received no users.

Claim 2.10 This setup is a Nash equilibrium.
Non-identical machines, deterministic users                                                     13

    Proof: Let us take a user in group Nj . If we attempt to move him to group Nj−1 he will
see a load of
                                            2j
                                  (j − 1) + j−1 = j + 1 > j
                                           2
    On the other hand, on group Nj+1 the load is j + 1 even without his job and therefore
he has no reason to move there.                                                          2
    To achieve the optimum we simply need to move all the users of group Nj to group Nj−1
(for j = 1...k). Now there is a separate machine for each user and the load on all machines
    2j
is 2j−1 = 2.
Corollary 2.11 The coordination ratio is ∼ lnlnlnmm

2.9.2     Upper bound
The machines have different speeds; Without loss of generality let us assume that s1 ≥
s2 · · · ≥ sm . The cost is defined C = max Lj .
     For k ≥ 1, define Jk to be the smallest index in {0, 1, . . . , m} such that LJk +1 < k ∗ OP T
or, if no such index exists, Jk = m. We can observe the following:
   • All machines up to Jk have a load of at least k ∗ OP T

   • The load of the machine with an index of Jk + 1 is less than k ∗ OP T
Let C ∗ be defined:
                                            C − OP T
                                       C∗ = b            c
                                                OP T
Our goal is to show that C ∗ ! < J1 which will result in
                                          Ã           !
                                        log m
                                  C=O           ∗ OP T
                                      log log m
   We will show this using induction.

Claim 2.12 (The induction base) JC ∗ ≥ 1

    Proof: By the way of contradiction, assume JC ∗ = 0. This implies (from the definition
of Jk ) that L1 < C ∗ ∗ OP T ≤ C − OP T . Let q denote the machine with the maximum
expected load. Then L1 + OP T < C = Lq .
    We observe that any user that uses q must have a weight wi larger than s1 ∗ OP T .
Otherwise he could switch to the fastest machine, reaching a cost of L1 + ws1i ≤ L1 +OP T < Lq ,
which contradicts the stability of the Nash equilibrium.                                     2
    We shall divide the proof of the induction step into two claims. Let S be the group of
users of the machines M1 , . . . , MJk+1 .
14                                                                                           Lecture 2: March 9

Claim 2.13 An optimal strategy will not assign a user from group S to a machine r > Jk .

    Proof: From the definition of Jk , the users in S have a load of at least (k + 1) ∗ OP T .
Machine Jk + 1 has a load of at most k ∗ OP T . No user from S will want to switch to Jk + 1
because the minimal weight in S is sJk +1 ∗ OP T . Switching to machine r > Jk + 1 will result
in a load bigger than OPT because sr < sJk +1 .                                             2

Claim 2.14 If an optimal strategy assigns users from group S to machines 1, 2, . . . , Jk then
Jk ≥ (k + 1)Jk+1
                      P
     Proof: Let W =     i∈S wi .
                                   X                                          X
                        W =             sj ∗ E[Lj ] ≥ (k + 1)OP T (                   sj )
                              j≤Jk+1                                         j≤Jk+1


Since an optimal strategy uses only machines 1, 2, . . . , Jk we get:
                                                       X
                                              OP T (       sj ) ≥ W
                                                   j≤Jk

                                       X                        X
                                              sj ≥ (k + 1) ∗            sj
                                       j≤Jk                    j≤Jk+1

Since the sequence of the speeds is non-increasing, this implies that Jk ≥ (k + 1)Jk+1 , the
induction step.                                                                           2
Now we can combine the two claims above using induction to obtain:

Corollary 2.15 C ∗ ! < J1

By definition J1 ≤ m. Consequently C ∗ ! ≤ m, which implies the following:

Corollary 2.16 (Upper bound) C = O( logloglogmm )
  Computational Game Theory                                     Spring Semester, 2003/4

            Lecture 3: Coordination Ratio of Selfish Routing
  Lecturer: Yishay Mansour                              Scribe: Anat Axelrod, Eran Werner




3.1       Lecture Overview
In this lecture we consider the problem of routing traffic to optimize the performance
of a congested and unregulated network. We are given a network, a rate of traffic
between each pair of nodes and a latency function specifying the time needed to
traverse each edge given its congestion. The goal is to route traffic while minimizing
the total latency. In many situations, network traffic cannot be regulated, thus each
user minimizes his latency by choosing among the available paths with respect to the
congestion caused by other users. We will see that this ”selfish” behavior does not
perform as well as an optimized regulated network.
We start by exploring the characteristics of Nash equilibrium and minimal latency
optimal flow to investigate the coordination ratio. We prove that if the latency of
each edge is a linear function of its congestion, then the coordination ratio of selfish
routing is at most 4/3. We also show that if the latency function is only known
to be continuous and nondecreasing in the congestion, then there is no bounded
coordination ratio; however, we prove that the total latency in such a network is no
more than the total latency incurred by optimally routing twice as much traffic on
the same network.


3.2       Introduction
We shall investigate the problem of routing traffic in a network. The problem is de-
fined as follows: Given a rate of traffic between each pair of nodes in a network find an
assignment of the traffic to paths so that the total latency is minimized. Each link in
the network is associated with a latency function which is typically load-dependent,
i.e. the latency increases as the link becomes more congested.
In many domains (such as the internet or road networks) it is impossible to impose
regulation of traffic, and therefore we are interested in those settings where each user
acts according to his own selfish interests. We assume that each user will always select
the minimum latency path to its destination. In other words, we assume all users are
rational and non malicious. This can actually be viewed as a noncooperative game
where each user plays the best response given the state of all other users, and thus
we expect the routes chosen to form a Nash equilibrium.
The network contains a numerous amount of users where each user holds only a neg-
ligible portion of the total traffic. Alternatively, we can think of a model with a finite

                                            1
2                                       Lecture 3: Coordination Ratio of Selfish Routing



     l ( x) = x    V       l ( x) = 1                   l ( x) = x        V    l ( x) = 1


      S                           T                      S       l ( x) = 0           T

     l ( x) = 1            l ( x) = x                   l ( x) = 1             l ( x) = x
                   W                                                      W

                  (a)                                                    (b)


                                        Figure 3.1:


number of users that are allowed to split their load between different paths. Our tar-
get function is to minimize the average (or total) latency suffered by all users. We will
compare the overall performance under a Nash equilibrium against the theoretically
optimal performance of a regulated network.

Before we continue, let’s examine an example setting which has inspired much of the
work in this traffic model. Consider the network in Figure 3.1(a). There are two
disjoint paths from S to T. Each path follows exactly two edges. The latency func-
tions are labelled on the edges. Suppose one unit of traffic needs to be routed from
S to T. The optimal flow coincides with the Nash equilibrium such that half of the
traffic takes the upper path and the other half takes the lower path. In this manner,
the latency perceived by each user is 32 . In any other nonequal distribution of traffic
among the two paths, there will be a difference in the total latency of the two paths
and users will be motivated to reroute to the less congested path.

Note Incidentally, we will soon realize that in any scenario in which the flow at
Nash is split over more than a single path, the latency of all the chosen paths must
be equal.
Now, consider Figure 3.1(b) where a fifth edge of latency zero is added to the network.
While the optimum flow has not been affected by this augmentation, Nash will only
occur by routing the entire traffic on the single S → V → W → T path, hereby
increasing the latency each user experiences to 2. Amazingly, adding a new zero
latency link had a negative effect for all agents. This counter-intuitive impact is
known as Braess’s paradox.


Anecdote 1 Two live and well known examples of Braess’s paradox occurred when
42nd street was closed in New York City and instead of the predicted traffic gridlock,
traffic flow actually improved. In the second case, traffic flow worsened when a new
road was constructed in Stuttgart, Germany, and only improved after the road was
torn up.
3.3.   CHARACTERIZATIONS OF NASH & OPT FLOWS                                                3

3.2.1      The Model - Formal Definition
   • We consider a directed graph G = (V,E) with k pairs (si , ti ) of source and
     destination vertices.

   • ri - The amount of flow required between si and ti .
                                                                        S
   • Pi - The set of simple paths connecting the pair (si , ti ). P =       i Pi .


   • Flow f - A function that maps a path to a positive real number. Each path P
     is associated with a flow fP .
                                                                        P
   • fe - The flow on edge e defined for a fixed flow function. fe =          P :e∈P fP .

                                              P
   • A flow f is said to be feasible if ∀i,       P ∈Pi fP = ri .


   • Each edge e ∈ E is given a load-dependent latency function denoted `e (·). We
     restrict our discussion to nonnegative, differentiable and nondecreasing latency
     functions.

   • (G, r, `) - A triple which defines an instance of the routing problem.

   • The latency of P
                    a path `P is defined as the sum of latencies of all edges in the
     path. `P (f ) = e∈P `e (fe ).
                                                                             P
   • C(f ) - The total latency, also defined as the cost of a flow f. C(f )P
                                                                           = P ∈P `P (f )fP .
     Alternatively, we can accumulate over the edges to get C(f ) = e∈E `e (fe )fe .




3.3       Characterizations of Nash & OPT Flows
3.3.1       Flows at Nash Equilibrium
Lemma 3.3.1 A feasible flow f for instance (G, r, `) is at Nash equilibrium iff for
every i ∈ {1, ..., k} and P1 , P2 ∈ Pi with fP1 > 0, `P1 (f ) ≤ `P2 (f ).


From the lemma it follows that flow at Nash equilibrium will be routed only on best
response paths. Consequently, all paths assigned with a positive flow between (si , ti )
have equal latency denoted by Li (f ).

Corollary
       Pk 3.1 If f is a flow at a Nash equilibrium for instance (G, r, `) then
C(f ) = i=1 Li (f )ri .
4                                     Lecture 3: Coordination Ratio of Selfish Routing

3.3.2        Optimal (Minimum Total Latency) Flows
                                                              P
Recall that a cost of a flow f is expressed by C(f ) =           e∈E `e (fe )fe .   We seek to
minimize this function for finding an optimal solution.
Observation 3.2 Finding the minimum latency feasible flow is merely a case of the
following non-linear program:
                   P
              min e∈E ce (fe )

                subject to:           P
                                            P
                                         P ∈P  f = ri
                                              i P
                                                              ∀i ∈ {1, ...k}
    (NLP)                             fe = P ∈P:e∈P fP        ∀e ∈ E
                                      fP ≥ 0                  ∀P ∈ P

where in our problem we assign ce (fe ) = `e (fe )fe .

Note For simplicity the above formulation of (NLP) is given with an exponential
number of variables (there can be an exponential number of paths). This formulation
can be easily modified with decision variables only on edges giving a polynomial num-
ber of variables and constraints.

In our case we assume that for each edge e ∈ E the function ce (fe ) = `e (fe )fe is
a convex function and therefore, our target function C(f ) is also convex. This is a
special case of convex programming. We wish to optimize (minimize) a convex func-
tion F(x) where x belongs to a convex domain.
Recall the following properties of convex sets and functions:
    1. If f is strictly convex then the solution is unique.
    2. If f is convex then the solution set U is convex.
    3. If y is not optimal (∃x : F (x) < F (y)) then y is not a local minimum. Conse-
       quently, any local minimum is also the global minimum.

Lemma 3.3.2 The flow f is optimal for the convex program of the form (NLP) iff
∀i ∈ {1, ..., k} and P1 , P2 ∈ Pi with fP1 > 0, c0P1 (f ) ≤ c0P2 (f ).

Notice the striking similarity between the characterization of optimal solutions (Lemma
3.3.2) and Nash equilibrium (Lemma 3.3.1). In fact, an optimal flow can be inter-
preted as a Nash equilibrium with respect to a different edge latency functions.
Let x`e (x) be a convex function for all e ∈ E. Define `∗e (fe ) = (`e (fe )fe )0 .


Corollary 3.3 A feasible flow f is an optimal flow for (G, r, `) iff it is at Nash equi-
librium for the instance (G, r, `∗ ).
    Proof. f is OPT for ` ⇔ c0P1 (f ) ≤ c0P2 (f ) ⇔ `∗P1 (f ) ≤ `∗P2 (f ) ⇔ f is Nash for `∗
(∀i ∀P1 , P2 ∈ Pi ).                                                                        2
3.3.   CHARACTERIZATIONS OF NASH & OPT FLOWS                                               5

3.3.3       Existence of Flows at Nash Equilibrium
We exploit the similarity between the characterizations of Nash and OPT flows to
establish that a Nash equilibrium indeed exists and its cost is unique.R
                                                                             x
For the outline of the proof we define an edge cost function he (x) = 0 `e (t)dt.
                              d
By definition (he (fe ))0 = dx  he (fe ) = `e (fe ) thus he is differentiable with non de-
creasing derivative `e and therefore convex. Next, we consider the following convex
program:
                    P
               min      e∈E he (fe )


               subject to:           P
                                            P
                                         P ∈P  f = ri
                                              i P
                                                                        ∀i ∈ {1, ..., k}
   (NLP2)                            fe = P ∈P:e∈P fP                   ∀e ∈ E
                                     fP ≥ 0                             ∀P ∈ P
Observation 3.4 The optimal solution for (NLP2) is Nash for the modified instance
where `e (x) = h0e (x).
   Proof. The proof follows directly from Lemma 3.3.1 and Lemma 3.3.2                      2
Since Nash is an optimal solution for a different convex setting we conclude that:
   • Nash equilibrium exists.
   • The cost at Nash equilibrium is unique.

3.3.4       Bounding the Coordination ratio
The relationship between Nash and OPT characterizations provide a general method
                                        C(f )     N ash
for bounding the coordination ratio ρ = C(f ∗ ) = OP T .




Theorem 3.5 For an instance (G, r, `), if there exists a constant α ≥ 1 s.t.
                                                   Z x
                                  +
                  ∀e ∈ E ∀x ∈ R x`e (x) ≤ α            `e (t)dt
                                                                 0

then ρ(G, r, `) ≤ α.
   Proof.
                                         P
                              C(f) =         e∈E `e (fe )fe

                                          P          R fe
                                     ≤α        e∈E    0
                                                             `e (t)dt
                                          P          R fe∗
                                     ≤α        e∈E    0
                                                             `e (t)dt
                                          P             ∗   ∗
                                     ≤α        e∈E `e (fe )fe


                                     = α · C(f ∗ )
6                                   Lecture 3: Coordination Ratio of Selfish Routing

The first inequality follows from the hypothesis,
                                       P    R x the second follows from the fact that
Nash flow f is OPT for the function e∈E 0 `e (t)dt and the final inequality follows
from the assumption that the latency functions `e are nondecreasing.
2
                                                                 P
Corollary 3.6 If every latency function `e has the form `e (x) = di=0 ae,i xi (meaning
latency is a polynomial function of order d) then ρ(G, r, `) ≤ d + 1.

Note From the corollary, an immediate coordination ratio of 2 is established for
linear latency functions. Later, we will show a tighter bound of 43 .



                 l ( x) = 1                                     l ( x) = 1
      1-x                                            1-x

       S                       T                      S                        T
       x                                              x
                 l ( x) = x                                     l ( x) = x d

                   (a)                                            (b)


                                     Figure 3.2:

Figure 3.2(a) shows an example for which Nash flow will only traverse in the lower
path while OPT will divide the flow equally among the two paths. The target func-
tion is 1(1 − x) + x · x and it reaches minimum with value 34 when x = 12 , giving a
coordination ratio of 43 for this example. Combining the example with the tighter up-
per bound to be shown, we demonstrate a tight bound of 43 for linear latency functions.

In Figure 3.2(b) the flow at Nash will continue to use only the lower path but OPT
                                                                              1
will reach minimum for the cost function x · xd + (1 − x) · 1 at x = (d + 1)− d , giving
                    d
a total latency 1- d+1 (d + 1)−1/d which approaches 0 as d → ∞. So, limd→∞ ρ = ∞
meaning, ρ cannot be bounded from above in some cases when nonlinear latency
functions are allowed.


3.4         A Bicriteria Bound for latency functions
We now examine an interesting bicriteria result. We show that the cost of a flow at
Nash equilibrium can be bounded by the cost of an optimal flow feasible for twice the
amount of traffic.
Theorem 3.7 If f is a flow at Nash equilibrium for instance (G, r, `) and f ∗ is a
feasible flow for instance (G, 2r, `) (same network but with twice the required rate),
then C(f ) ≤ C(f ∗ ).
3.4.    A BICRITERIA BOUND FOR LATENCY FUNCTIONS                                                  7
                                                                                   P
  Proof. Let Li (f ) be the latency of a si − ti flow path, so that C(f ) =            i Li (f )ri .
We define a new latency function:

                                             ½
                                                 `e (fe ) if x ≤ fe
                                 `¯e (x) =
                                                 `e (x) if x ≥ fe

This latency function will allow us to approximate the original latencies as well as to
lower bound the cost of any feasible flow.


   • Step 1: Let’s compare the cost of f ∗ under the new latency function `¯ with
     respect to the original cost C(f ∗ ).
     From the construction of `¯e (x) we get:

                                 `¯e (x) − `e (x) = 0       for x ≥ fe
                                  ¯
                                 `e (x) − `e (x) ≤ `e (fe ) for x ≤ fe

       So, for all x we get x[`¯e (x) − `e (x)] ≤ `e (fe )fe .

       The difference between the new cost under `¯e and the original cost under `
       is:
                     P ¯ ∗ ∗             ∗
                                              P      ∗ ¯     ∗          ∗
                       e `e (fe )fe − C(f ) =   e∈E fe (`e (fe ) − `e (fe ))

                                                          P
                                                      ≤     e∈E `e (fe )fe


                                                      = C(f ).
       The cost of OPT with the latency function `¯ increased by at most the cost of
       Nash (an additive C(f ) factor).

   • Step 2: Denote z0 the zero flow in G. For the pair si − ti we can observe that
     by construction, ∀P ∈ Pi `¯P (z0 ) ≥ `P (f ) ≥ Li (f ).
     Hence, since `¯e is nondecreasing for each edge e, ∀P ∈ Pi `¯P (f ∗ ) ≥ `¯P (z0 ) ≥
     `P (f ) ≥ Li (f ), revealing that the cost of f ∗ with respect to `¯ can be bounded
     as follows:
                            P ¯ ∗ ∗           P P                  ∗
                               P `P (f )fP ≥     i   P ∈Pi Li (f )fP

                                                      P
                                                  =       i 2Li (f )ri = 2C(f ).

Combining the results from the previous two steps finishes the proof of the theorem:
                                   P
                         C(f ∗ ) ≥ P `¯P (f ∗ )fP∗ − C(f )

                                        ≥ 2C(f ) − C(f ) = C(f ).
                                                                                                 2
8                                        Lecture 3: Coordination Ratio of Selfish Routing

3.5         A Tight Bound for Linear Latency Functions
Finally, we consider a scenario where all edge latency functions are linear
`e (x) = ae x + be , for constants ae , be ≥ 0. A fairly natural example for such a model
is a network employing a congestion control protocol such as TCP. We have already
seen in Figure 3.2(a) an example where the coordination ratio was 43 . We have also
established an upper bound of 2 according to Corollary 3.6. We shall now show that
the 43 ratio is also a tight upper bound. Prior to this result, we examine two simple
cases:

    1. `e (x) = b

    2. `e (x) = ae x.

For both these cases we will show that OPT=Nash.


    • Case 1 is obvious since the latency on each path is constant, so both OPT and
      Nash will route all the flow to the paths with minimal latency.

    • Case 2:

          – Using Lemma 3.3.1, a flow f is at Nash equilibrium iff for each source-sink
                           0
            pair i and
                     PP, P ∈ Pi withP fP > 0 then
                                                P
            `P (f ) = e∈P `e (fe ) = e∈P ae fe ≤ e0 ∈P 0 ae0 fe0 = `P 0 (f ).
          – Using Lemma 3.3.2, a flow f ∗ is an optimal flow iff for each source-sink
            pair i and P  P, P 0 ∈ Pi withP
                                          fP∗ > 0 then          P             P
            CP0 (f ∗ ) = e∈P Ce0 (fe∗ ) = e∈P ((ae fe∗ )fe∗ )0 = e∈P 2ae fe∗ ≤ e0 ∈P 0 2ae0 f ∗0e =
            CP0 0 (f ∗ ).

       Corollary 3.8 For the latency functions `e (x) = ae (x) f is at Nash equilibrium
       iff f is an optimal flow.

Observation 3.9 In the example shown in Figure 3.2(a) we showed that even a
simple combination of the two sets of functions is enough to demonstrate that OPT
6= Nash.

Theorem 3.10 Let f be a flow at Nash equilibrium and f ∗ an optimal flow . If the
latency functions are all of the form `e (x) = ae x + be then ρ ≤ 34 .

    Proof. We define a new latency function `¯e ,

                                 `¯e (x) = (`e (fe )) · x = `fe · x

Under this definition of `¯e , OP T ≡ N ash (by Corollary 3.8).
Hence, f is at Nash equilibrium with respect to `¯ ⇔ for every feasible flow x where
                                    ¯ C f (f ) ≤ C f (x).
C f (·) is the cost with respect to `,
3.6.   FIN                                                                      9



                                     P
                        C f (x) =        e (ae fe + be ) · xe

                                     P                       1
                                                                 P          2
                                 ≤       e (ae xe + be )xe + 4       e a e fe


                                 ≤ C(x) + 41 C(f )

The first inequality is justified by the following algebraic steps:
                                                                       2
                     (ae fe + be )xe      ≤ (ae xe + be )xe + ae4fe
                                                           2
                   ⇔         ae fe xe     ≤ ae xe xe + ae4fe
                                                    2
                   ⇔            fe xe     ≤ x2e + f4e
                                                             2
                   ⇔                0     ≤ x2e − fe xe + f4e = (xe − f2e )2
Since f brings C f (·) to minimum,

                            C(f ) = C f (f ) ≤ C f (x)

                                                 ≤ C(x) + 41 C(f )


or,
                                       3
                                         C(f ) ≤ C(x).
                                       4
As this is true for all x, let’s plug-in x = f ∗ :
                                            4
                                     C(f ) ≤ C(f ∗ ).
                                            3
                                                                                2


3.6       FIN
All good things must come to an end.
  Computational Learning Theory                                    Spring Semester, 2003/4

                     Lecture 4: 2-Player Zero Sum Games
  Lecturer: Yishay Mansour                                  Scribe: Yair Halevi, Daniel Deutch




4.1      2-Player Zero Sum Games
In this lecture we will discuss 2-player zero sum games. Such games are completely compet-
itive, where whatever one player wins, the other must lose. Examples of such games include
chess, checkers, backgammon, etc. We will show that in such games:

   • An equilibrium always exists;

   • All equilibrium points yield the same payoff for all players;

   • The set of equilibrium points is actually the cartesian product of independent sets of
     equilibrium strategies per player.

We will also show applications of this theory.
Definition Let G be the game defined by hN, (Ai ) , (ui )i where N is the number of players,
Ai is the set of possible pure strategiesQ
                                         for player i, and ui is the payoff function for player
i. Let A be the cartesian product A = ni=1 Ai . Then G is a zero sum game if and only if:
                                               n
                                               X
                                    ∀~a ∈ A,         ui (~a) = 0                           (4.1)
                                               i=1



     In other words, a zero sum game is a game in which, for any outcome (any combination
of pure strategies, one per player), the sum of payoffs for all players is zero.
     We naturally extend the definition of ui to any probability distribution p~ over A by
ui (~p) = E~a ∼ p~ (ui (~a)). The following is immediate due to the linearity of the expectation
and the zero sum constraint:

Corollary 4.1 Let G be a zero sum game, and ∆ the set of probability distributions over A.
Then
                                         n
                                         X
                                ∀~p ∈ ∆,    ui (~p) = 0                              (4.2)
                                               i=1


                                                1
2                                                                  Lecture 4: 2-Player Zero Sum Games

   Specifically, this will also hold for any probability distribution that is the product of
N independent distributions, one per player, which applies to our normal mixed strategies
game.
   A 2-player zero sum game is a zero sum game with N = 2. In this case, 4.1 may be
written as
                        ∀a1 ∈ A1 , a2 ∈ A2 , u1 (a1 , a2 ) = −u2 (a1 , a2 )            (4.3)
    Such a game is completely competitive. There is no motivation for cooperation between
the players.
    A two person zero sum game may also be described by a single function π : A1 × A2 → R
describing the payoff value for player I, or the loss value for player II. The goal of player I is
to maximize π, while the goal of player II is to minimize π. We say that π (i, j) is the value
of the game for strategies i and j or simply the payoff for i and j.
    Given a certain ordering of the pure strategies of both players, we can also represent a
finite 2-player zero sum game using a real matrix Am×n (the payoff matrix), where m is the
number of pure strategies for player I and n is the number of pure strategies for player II.
The element aij in the ith row and jth column of A is the payoff (for player I) assuming
player I chooses his ith strategy and player II chooses his jth strategy.


4.2        Nash Equilibria
The Nash equilibria of a 2-player zero sum game have several interesting properties. First,
they all exhibit the same value. Second, they are interchangeable, meaning that given 2 Nash
equilibrium points, it is possible to replace a strategy for one of the players in the first point
by the strategy of the same player in the second point and obtain another Nash equilibrium.
Formally:

Theorem 4.2 Let G be a 2-player zero sum game defined by h(A1 , A2 ) , πi. Let (τ1 , τ2 ) and
(σ1 , σ2 ) be two Nash equilibria for G. Then

    1. Both (σ1 , τ2 ) and (τ1 , σ2 ) are Nash equilibria of G.

    2. π (τ1 , τ2 ) = π (τ1 , σ2 ) = π (σ1 , τ2 ) = π (σ1 , σ2 )

  Proof: (σ1 , σ2 ) is a Nash equilibrium. Therefore, for the first player (who plays to
maximize π), we have
                                 π (σ1 , σ2 ) ≥ π (τ1 , σ2 )
However, (τ1 , τ2 ) is a Nash equilibrium as well. Therefore, for the second player (who plays
to minimize π) we have
                                       π (τ1 , σ2 ) ≥ π (τ1 , τ2 )
Nash Equilibria                                                                                   3

Combining these two inequalities we get

                                π (σ1 , σ2 ) ≥ π (τ1 , σ2 ) ≥ π (τ1 , τ2 )

Similarly,
                                π (σ1 , σ2 ) ≤ π (σ1 , τ2 ) ≤ π (τ1 , τ2 )
From the last two inequalities we obtain

                         π (σ1 , σ2 ) = π (τ1 , τ2 ) = π (σ1 , τ2 ) = π (τ1 , σ2 )

Which proves part 2 of the theorem. To prove part 1 we observe that because (σ1 , σ2 ) is a
Nash equilibrium for player I,

                        ∀α10 ∈ A1 ,     π (α10 , σ2 ) ≤ π (σ1 , σ2 ) = π (τ1 , σ2 )

Where the right-hand equation is due to part 2 of the theorem which has already been
proven. Similarly, because (τ1 , τ2 ) is a Nash equilibrium for player II,

                        ∀α20 ∈ A2 ,     π (τ1 , α20 ) ≥ π (τ1 , τ2 ) = π (τ1 , σ2 )

Which means that (τ1 , σ2 ) is a Nash equilibrium as well. The proof is similar for (σ1 , τ2 ).
                                                                                             ¤
    Theorem 4.2 holds with the same proof for both the deterministic and the nondetermin-
istic case.
    We define the equilibrium strategies of a player as the set of all strategies played by the
player in any equilibrium point. For player I, this is given by

                        {σ1 ∈ A1 | ∃σ2 ∈ A2 , (σ1 , σ2 ) is an eq. pt. }

Corollary 4.3 The set of Nash equilibrium points of a 2-player zero sum game is the carte-
sian product of the equilibrium strategies of each player.

   When a 2-player zero sum game is represented as a matrix A, a deterministic Nash
equilibrium for the game is a saddle point of A, or a pair of strategies i, j so that

                                            aij = max akj
                                                      k


                                             aij = min ail
                                                       l

Such an equilibrium does not necessarily exist.
4                                                               Lecture 4: 2-Player Zero Sum Games

4.3       Payoff Bounds
For a deterministic game, player I can guarantee a payoff lower bound by choosing a pure
strategy for which the minimal payoff is maximized. This assumes player II is able to know
player I’s choice and will play the worst possible strategy for player I (note that in a 2-player
zero sum game this is also player II’s best response to player I’s chosen strategy).
    We denote this ”gain-floor” by VI0 :

                                        VI0 = max min aij
                                                i    j

Similarly, player II can guarantee a loss upper bound by choosing the pure strategy for which
the maximal payoff is minimal. We denote this ”loss-ceiling” by VII0 :

                                        VII0 = min max aij
                                                j     i

Lemma 4.4 For any function F : X × Y → R, for which all the relevant minima and
maxima exist:
    1. maxx∈X miny∈Y F (x, y) ≤ miny∈Y maxx∈X F (x, y)

    2. Equality holds iff:

                     ∃x0 ∈ X, y0 ∈ Y , F (x0 , y0 ) = min F (x0 , y) = max F (x, y0 )
                                                          y∈Y             x∈X


   Proof: The proof of this lemma is trivial and is not shown here.                        ¤
   Applying Lemma 4.4 to our case proves the intuitive fact that player I’s gain-floor cannot
be greater than player II’s loss-ceiling,

                                             VI0 ≤ VII0

and that equality holds iff we have a saddle point and thus an equilibrium.


4.4       Mixed Strategies
For a finite 2-player zero sum game denoted as a matrix Am×n , we denote a mixed strategy
for a player I (II) by a stochastic vector of length m (n), where the ith element in the vector is
the probability for the ith pure strategy of this player (using the same order used to generate
the payoff matrix).
    Vectors in this text are always row vectors. We will typically use x for player I mixed
strategies, and y for player II mixed strategies. We shall denote by ∆d the set of stochastic
vectors in Rd .
Mixed Strategies                                                                                 5

   For a 2-player zero sum game given by matrix Am×n , and given mixed strategies x for
player I and y for player II, the expected payoff is given by
                                           X n
                                           m X
                              A (x, y) =             xi aij yj = xAy T                        (4.4)
                                           i=1 j=1

Once again, if player I chose strategy x, the minimum gain (which is also player II’s best
response loss) is
                                    vII (x) = min xAy T                              (4.5)
                                                y∈∆n

Assuming player II knows what player I has played before selecting a strategy. The minimum
exists because ∆n is compact and xAy T is continuous in y. It is easily shown that this
minimum must be reachable in at least one pure strategy of player II.
Lemma 4.5
                        ∀x ∈ ∆m , vII (x) = min xAy T = min xAeTj
                                               y∈∆n             1≤j≤n

    Proof: The proof is trivial given the fact that xAy T is a stochastic combination of
xAeTj , so xAy T can never be less than all of xAeTj , and on the other hand, ej is also in ∆n ,
so vII (x) ≤ xAeTj .
                                                                                             ¤
    Therefore we can write 4.5 as
                                                                m
                                                                X
                            vII (x) = min xAeTj = min                 xi aij                  (4.6)
                                     1≤j≤n       1≤j≤n
                                                                i=1

    Which means that player I can guarantee the following lower bound on his payoff (gain-
floor)
                                                                   m
                                                                   X
                                 T                   T
             VI = max min xAy = max min xAej = max min                xi aij         (4.7)
                     x∈∆m y∈∆n          x∈∆m 1≤j≤n               x∈∆m 1≤j≤n
                                                                               i=1

Such a mixed strategy x that maximizes vII (x) is a maximin strategy for player I. Once
again, this maximum exists due to compactness and continuity.
   We define vI (y) in a similar fashion as player I’s most harmful response (to player II)
to strategy y of player II (this is also player I’s best response to y). Then, player II can
guarantee the following upper bound on his loss (loss-ceiling)
                                                                               n
                                                                               X
                                    T                       T
              VII = min max xAy = min max ei Ay = min max                            yj aij   (4.8)
                     y∈∆n x∈∆m          y∈∆n 1≤i≤m                y∈∆n 1≤i≤m
                                                                               j=1

Such a mixed strategy y that maximizes vI (y) is a minimax strategy for player II.
   VI and VII are called the values of the game for players I and II, respectively.
6                                                               Lecture 4: 2-Player Zero Sum Games

4.5      The Minimax Theorem
Applying Lemma 4.4 to the maximin and minimax values of the game we obtain

                                               VI ≤ VII                                      (4.9)

    In fact, we will show the following fundamental property of 2-player zero sum games

Theorem 4.6 (The Minimax Theorem)

                                               VI = VII

    We start by proving two lemmas.

 Lemma 4.7 (Supporting Hyperplane Theorem) Let B ⊆ Rd be a closed convex set and
~x 6∈ B then α
             ~ = (α1 , α2 , . . . , αd ) and αd+1 exist such that
                                               d
                                               X
                                    α
                                    ~ · ~x =         αi xi = αd+1                           (4.10)
                                               i=1

                                                      d
                                                      X
                              ∀y ∈ B,     α
                                          ~ · ~y =           αi yi > αd+1                   (4.11)
                                                       i=1

In other words, given a convex closed set B and a point outside the set ~x, the lemma
claims that we can pass a hyperplane through ~x such that B lies entirely on one side of the
hyperplane. This lemma and it’s proof are schematically shown in figure 4.1.
    Proof: Let ~z ∈ B be the point in B nearest to ~x. Such a point exists because B is closed,
and the distance function is both continuous and bounded from below by 0. We define

                                           α
                                           ~ = ~z − ~x
                                        αd+1 = α~ · ~x

4.10 holds immediately. We shall prove 4.11. Note that α       ~ 6= 0 because ~z ∈ B and ~x 6∈ B.
Thus,
               α
               ~ · ~z − αd+1 = α
                               ~ · ~z − α
                                        ~ · ~x = α
                                                 ~ · (~z − ~x) = α
                                                                 ~ ·α    α |2 > 0
                                                                    ~ = |~
Therefore,
                                          α
                                          ~ · ~z > αd+1
Now, assume that there exists ~y ∈ B such that

                                          α
                                          ~ · ~y ≤ αd+1
The Minimax Theorem                                                                        7




                             Figure 4.1: Supporting Hyperplane

As B is convex, for any 0 ≤ λ ≤ 1,
                                   w
                                   ~ λ = λ~y + (1 − λ) ~z ∈ B
The square of the distance between ~x and w
                                          ~ λ is given by
                                                         d
                                                         X
                2
              D (~x, w                             2
                     ~ λ ) = |~x − λ~y − (1 − λ) ~z| =         (xi − λyi − (1 − λ) zi )2
                                                         i=1

   Deriving by λ we obtain
                     ∂D2
                         = 2 (~x − λ~y − (1 − λ) ~z) · (~z − ~y )
                      ∂λ
                         = 2 (~z − ~x) · ~y − 2 (~z − ~x) · ~z + 2λ (~z − ~y )2
                         = 2~
                            α · ~y − 2~ α · ~z + 2λ (~z − ~y )2
8                                                               Lecture 4: 2-Player Zero Sum Games

Evaluating for λ = 0 we get
                                    ∂D2
                                          = 2~α · ~y − 2~α · ~z
                                     ∂λ
But according to our assumption the first term α     ~ · ~y ≤ αd+1 and we have shown that the
second term α
            ~ · ~z > αd+1 , and therefore
                                               ¯
                                          ∂D2 ¯¯
                                                     <0
                                           ∂λ ¯λ=0
Hence, for λ close enough to 0 we must have
                                        D2 (~x, w
                                                ~ λ ) < D2 (~x, ~z)
But ~z was chosen to minimize the distance to ~x, so we have a contradiction. Therefore for
all ~y ∈ B, 4.11 must hold.
                                                                                         ¤

Lemma 4.8 (Theorem of the Alternative for Matrices). Let A = (aij ) be an m × n real
matrix. Let {~ai }m
                  i=1 = (ai1 , ai2 , . . . , ain ) be the rows of the matrix. Then one of the following
must hold:
                                                                                     S
  1. The point ~0 in Rn is in the convex hull of the m + n points {~ai }m        i=1   {~ei }ni=1 where ~ei
     is the ith elementary vector in Rn .
    2. There exists a stochastic vector ~x = (x1 , . . . , xn ) ∈ Rn satisfying
                                                        Pn
                                                            j=1 xj       =1
                                ∀1 ≤ j ≤ n,                  xj          >0
                                                            Pn
                               ∀1 ≤ i ≤ m, ~ai · ~x = j=1 aij xj > 0

   Proof: Suppose 1 does not hold. Denote the convex hull mentioned in 1 by C. If we
                             ~ ∈ Rn and αn+1 such that
apply Lemma 4.7, there exist α
                                              ~ · ~0 = αn+1
                                              α
(which means that αn+1 = 0, of course) and
                                          ∀~y ∈ C,    α
                                                      ~ · ~y > 0
In particular, this will hold if ~y is any of the vectors ~ai or ~ei . Thus
                                   ~ai · α
                                         ~ >0     for all 1 ≤ i ≤ m,
                                        αj > 0    for all 1 ≤ j ≤ n.
The Minimax Theorem                                                                                  9
                                          Pn
Since ∀1 ≤ j ≤ n, αj > 0 we have            j=1 αj > 0, so we can scale by the sum and define
                                                       , n
                                                        X
                                            xj = α j            αj
                                                          j=1

Therefore
                                                       Pn
                                                          j=1 xj           =1
                                ∀1 ≤ j ≤ n,           xj                   >0
                                                      Pn
                                ∀1 ≤ i ≤ m, ~ai · ~x = j=1 aij xj          >0

                                                                                      ¤
      Proof of the Minimax Theorem: Let Am×n be a payoff matrix for a 2-player zero
sum game. Applying Lemma 4.8 to AT , either 1 or 2 must hold. If 1 holds, then ~0 is in
the convex hull of the columns of A and the elementary vectors in Rm . Thus, there exist
s1 , . . . , sn+m such that
                                n
                                X
                                      aij sj + sn+i = 0 ∀1 ≤ i ≤ m
                                j=1
                                                 si ≥ 0 ∀1 ≤ i ≤ n + m
                                           n+m
                                           X
                                                 si = 1
                                           i=1

    Now, it is impossible for all of s1 , . . . , sn to be equal to 0, because the first equation would
mean that all si are 0, and then equation 3 cannot hold (in other words, the vector ~0 cannot
be a convex combination of ~ei alone, P       because they are linearly independent). Therefore at
least one of s1 , . . . , sn is positive, and nk=1 sk > 0. We can therefore define a mixed strategy
y for player II by                                               , n
                                                                  X
                                      ∀1 ≤ j ≤ n,       yj = s j       sk
                                                                     k=1

And we have:

                                                          yj ≥ 0 ∀1 ≤ j ≤ n
                                                    n
                                                    X
                                                          yj = 1
                                                    j=1
                         n
                                                 , n
                         X                        X
                                aij yj = −sn+i            sk ≤ 0 ∀1 ≤ i ≤ m
                          j=1                       k=1
10                                                          Lecture 4: 2-Player Zero Sum Games

     Therefore
                                   vI (y) = max ei Ay T ≤ 0
                                           1≤i≤m

Thus VII ≤ 0.
    If 2 holds, then we have a stochastic vector x ∈ Rm , which we will view as a mixed
strategy for player I, that satisfies
                                                 m
                                                 X
                                   ∀1 ≤ j ≤ n,         aij xi > 0
                                                 i=1

so vII (x) = min1≤j≤n xAeTj > 0 and therefore VI > 0. Because one of the two must hold, we
see that it is impossible to have VI ≤ 0 < VII .
    Now, for any real M , let us look at the 2-player zero sum game defined by the payoff
matrix B = (bij ) where
                                        bij = aij − M
For any x, y,
                                     xBy T = xAy T − M
Hence,

                                    VI (B) = VI (A) − M
                                   VII (B) = VII (A) − M

And since it is impossible that VI (B) ≤ 0 < VII (B), it is also impossible that

                                    VI (A) ≤ M < VII (A)

But this is true for any real M , thus it is impossible that

                                           VI < VII

And we have shown that VI ≤ VII , therefore

                                           VI = VII

                                                                                            ¤


4.6      Results
We have shown that in a 2-player zero sum game the gain-ceiling for player I is equal to the
loss-floor for player II. We denote this value simply by V and call it the value of the game.
Results                                                                                         11

    Part 2 of Lemma 4.4 tells us that VI = VII means that we have a Nash equilibrium point.
It is easy to see that the payoff in this equilibrium is exactly the value of the game. Theorem
4.2 tells us that all Nash equilibria will have this value, and that the set of all Nash equilibria
is actually a cartesian product of the equilibrium strategies of each player.
    A strategy x for player I satisfying
                                                  m
                                                  X
                                  ∀1 ≤ j ≤ n,           xi aij ≥ V                          (4.12)
                                                  i=1

is optimal for player I in the sense that this strategy guarantees a payoff of V against every
strategy of player II, and there is no strategy that guarantees a higher payoff against every
strategy of player II. Similarly, a strategy y for player II satisfying
                                                  n
                                                  X
                                  ∀1 ≤ i ≤ m,           yj aij ≤ V                          (4.13)
                                                  j=1

is optimal for player II. It is clear that
                                             xAy T = V
otherwise one of 4.12 or 4.13 will not hold. It is easy to see that (x, y) is a Nash equilibrium.
Also, any Nash equilibrium must satisfy 4.12 and 4.13.
   To summarize
Theorem 4.9 Let G be a 2-player zero sum game. Then
  1. The gain-floor for player I and loss-ceiling for player II are equal (the value of the
     game, V ).
  2. There is at least one Nash equilibirium.
  3. The set of equilibrium points for the game is the cartesian product of the sets of equi-
     librium strategies for each player.
  4. The value of the game in all equilibrium points is V
  5. The set of equilibrium strategies for each player is equal to the set of optimal strategies
     for the player
  6. The set of optimal strategies for player I is the solution of the following linear program
     in variables x1 , . . . , xm , V
                                                Pm
                              ∀1 ≤ j ≤ n,          i=1 xi aij − V        ≥0
                              ∀1 ≤ i ≤ m                xi               ≥0
                                                    Pm
                                                       i=1 xi            =1
                                          Maximize target function V
12                                                       Lecture 4: 2-Player Zero Sum Games

      and the dual program gives the optimal strategies for player II.

   The
    T problem of finding Nash equilibria for a 2-player zero sum game is therefore in
NP     co-NP, and is solvable in polynomial time by linear programming.


4.7     Application of Zero Sum Games in Computer Sci-
        ence
4.7.1     Deterministic vs. Random Algorithms
In this example Ω = {Ai } is a finite set of deterministic algorithms that can take as input
any element of the finite input set Λ = {xj }. We will denote by ∆S the set of probability
distributions over the set S, for any set S.
Definition Time(A, x) is the time complexity (measured, as usual in complexity, in the
means of number of commands) of running the deterministic algorithm A with the input x.
Also denoted T (A, x).

Definition A Random Algorithm is a probability distribution over the deterministic
algorithms, p~ ∈ ∆Ω . We denote the probability for algorithm Ai by pi .

Definition RTime(~p, x) is time complexity of the random algorithm defined by distribution
p~ for fixed input x. It is defined as the expected deterministic time complexity for the fixed
input x:                                          X
                                  RT ime(~p, x) =    pi · T (Ai , x)
                                                 i



Definition AvgTime(A, ~q) is the time complexity of deterministic algorithm A given
distribution ~q over inputs. This is in essence an average-case complexity analysis for A.
It is defined as the expected time complexity for the deterministic algorithm A with input
distributed according to ~q:
                                               X
                             AvgT ime(A, ~q) =     qj · T (A, xj )
                                                     j




Complexity Analysis
Corollary 4.10 Deterministic worst-case time complexity is mini maxj T (Ai , xj ).
Application of Zero Sum Games in Computer Science                                          13

    Proof: The complexity of the problem is the minimum complexity over all relevant
algorithms (Ω). We must choose the deterministic algorithm before knowing the input.
Thus, the complexity of deterministic algorithm Ai is analyzed for the worst input, which
yields complexity maxj T (A, xj ), and then the complexity of the problem is the complexity
of the best algorithm, which results in complexity mini maxj T (Ai , xj ).               ¤

Corollary 4.11 Non-deterministic worst-case time complexity is maxj mini T (Ai , xj )

    Proof: For non-deterministic algorithms we can guess the best deterministic algorithm
given the input. Thus, for input xj , the complexity is mini T (Ai , xj ). We now analyze for
the worst case input, which yields complexity maxj mini T (Ai , xj ).                      ¤

Corollary 4.12 Random worst-case time complexity is

                                      min max RT ime(~p, xj )
                                      p
                                      ~∈∆Ω   j


Theorem 4.13 (Yao’s Lemma) For any distribution p~ on the algorithms and ~q on inputs

                          max Ei∼~p [T (Ai , xj )] ≥ min Ej∼~q [T (Ai , xj )]
                             j                         i


    Proof: We can view the complexity analysis as a 2-player zero sum game in the following
way. The max. player pure strategies are the possible inputs, Λ. The min. player pure
strategies are the deterministic algorithms Ω. The payoff is the time complexity T (Ai , xj ).
    Given such a game, we can see that

                min max Ei∼~p,j∼~q [T (Ai , xj )] = max min Ei∼~p,j∼~q [T (Ai , xj )]   (4.14)
                ~∈∆Ω q~∈∆Λ
                p                                    q~∈∆Λ p
                                                           ~∈∆Ω

   As in the previous game analysis, it is easily shown that the internal maximum and
minimum are obtained in deterministic points:

                     max Ei∼~p,j∼~q [T (Ai , xj )] = max Ei∼~p [T (Ai , xj )]           (4.15)
                     ~
                     q ∈∆Λ                                   j

                     min Ei∼~p,j∼~q [T (Ai , xj )] = min Ej∼~q [T (Ai , xj )]           (4.16)
                     p
                     ~∈∆Ω                                    i

   Using only the ≥ part of 4.14, and substituting using 4.15 and 4.16 we obtain

                    min max Ei∼~p [T (Ai , xj )] ≥ max min Ej∼~q [T (Ai , xj )]         (4.17)
                   p
                   ~∈∆Ω      j                       ~
                                                     q ∈∆Λ       i


   Hence for any p~ ∈ ∆Ω

                      max Ei∼~p [T (Ai , xj )] ≥ max min Ej∼~q [T (Ai , xj )]
                        j                         q~∈∆Λ    i
14                                                               Lecture 4: 2-Player Zero Sum Games

     Thus for any p~ ∈ ∆Ω and ~q ∈ ∆Λ

                         max Ei∼~p [T (Ai , xj )] ≥ min Ej∼~q [T (Ai , xj )]
                           j                             i


                                                                                           ¤
    Note that Yao’s Lemma is actually a result of the weaker inequality established in Lemma
4.4.

Corollary 4.14 In order to prove a lower bound for the worst-case complexity of any random
algorithm for a given problem, it is sufficient to prove a lower bound for any deterministic
algorithm on some distribution of the input.

     Proof: Using

                               Ei∼~p [T (Ai , xj )] = RT ime(~p, xj )
                               Ej∼~q [T (Ai , xj )] = AvgT ime(Ai , ~q)

we can write Yao’s Lemma as

                          max RT ime(~p, xj ) ≥ min AvgT ime(Ai , ~q)
                               j                     i


so given a lower bound B on the complexity of any deterministic algorithm on some input
distribution ~q, we obtain

                       B ≤ min AvgT ime(Ai , ~q) ≤ max RT ime(~p, xj )
                                   i                         j


So B is a lower bound on the worst-case complexity of any random algorithm.                      ¤

Example - Sorting a List of Numbers
We wish to bound the complexity of a random algorithm for sorting n numbers (comparison
based sort). We can describe any deterministic comparison based sort algorithm as a decision
tree, where each internal node corresponds to a comparison the algorithm performs, with 2
possible outcomes (we assume all elements are different). For a specific input, the exectuion
of the algorithm corresponds to a path from the root to a leaf. It is impossible for 2 different
permutations to result in the same path. The running time for the algorithm over an input
is the length of the path.
    Therefore, the decision tree must have at least n! leaves. Thus the depth of the tree is
at least log(n!) = O(nlogn) nodes. The number of leaves whose depth is not greater than l
is ≤ 2l+1 .
Application of Zero Sum Games in Computer Science                                         15

    Thus, for any deterministic algorithm A, at least one half of the permutations are in
depth greater than l, where l + 1 = log(n!/2) (since then the number of leaves whose depth
is less than l is ≤ 2log(n!/2) = n!/2). l + 1 = log(n!/2) =⇒ l = log(n!) − 2 = O(nlogn).
    We shall choose a uniform distribution ~q over the possible inputs (all permutations of n
numbers), and fix a deterministic algorithm A. The running time of A over this distribution
is simply the average of the depths of the leaves for all possible inputs. But at least n!/2
inputs are of depth at least log(n!) − 1, so the average running time will be at least
                                n!
                                2
                                   · (log(n!) − 1)
                                                     = Ω(nlogn)
                                       n!
   And using Yao’s lemma, the complexity of any random algorithm is also Ω(nlogn).


4.7.2    Weak vs. Strong Learning
Given a weak learner for a binary classification problem we will show that strong learning is
possible.
   The model: f is the target function, H a function family.

                                      f : X −→ {0, 1}

                                ∀h ∈ H,     h : X −→ {0, 1}
   X is finite, and as a consequence H is finite (|H| ≤ 2|X| )
   The WL (weak learning) assumption: For every distribution D on X there exists
h ∈ H and ² > 0 such that
                                [P rD [h(x) = f (x)] ≥ 1/2 + ²            (4.18)
    Question: can f be approximated by functions in H?
    We represent the problem as a 2-player zero sum game as follows. The max. player pure
strategies are the inputs X. The min. player pure strategies are the functions H. The payoff
is an error indicator:
                                   ½                                ¾
                                     0 if f (x) = h(x) (no error)
                        M (h, x) =
                                     1 if f (x) 6= h(x) (error)

    Note that M (h, x) = |(f (x) − h(x)|. The max. player is trying to select a distribution
over X that will maximize the expected error, while the min. player is trying to select a
distribution over H that will minimize it.
    The WL proposition implies that for each D there exists an ² > 0 and h ∈ H such that

           1/2 − ² ≥ P rD [h(x) 6= f (x)] = P rD [M (h, x) = 1] = Ex∼D D[M (h, x)]
16                                                              Lecture 4: 2-Player Zero Sum Games

     Thus there exists an ² > 0 so that
                                 min Ex∼D [M (h, x)] ≤ 1/2 − ²
                                    h

     Which means that
                                            VX P layer ≤ 1/2 − ²
     Since in a zero sum game, the values of both players are equal, we conclude that
                                            VH P layer < 1/2 − ²
     hence
                               min max Eh∼q [M (h, x)] ≤ 1/2 − ²
                                q       x

   therefore there exists a distribution q (the one in which the minimum is obtained) such
that
                                max Eh∼q [M (h, x)] ≤ 1/2 − ²
                                    x
     thus
                              ∀x ∈ X,         Eh∼q [M (h, x)] ≤ 1/2 − ²
     In other words, for this q, and all x ∈ X,
                                  X                 X
                      1/2 − ² ≥      q(h)M (h, x) =   q(h) |f (x) − h(x)|
                                h∈H                       h∈H
                                                P
     We define an approximation G(x) = h∈H q(h) · h(x). Now, for all x ∈ X,
                            ¯                    ¯
                            ¯X                   ¯ X
                            ¯                    ¯
           |f (x) − G(x)| = ¯  q(h)[f (x) − h(x)]¯ ≤  q(h) |f (x) − h(x)| < 1/2
                            ¯                    ¯
                             h∈H                             h∈H

    So G(x) is a strong approximation for f (x) (by rounding G(x) to 0 or 1 we obtain f (x)
for all x ∈ X.

4.7.3        Playing a Zero-Sum Game
Let A be the game matrix. In each time t:
     • The rows player chooses a distribution pt .
     • The columns player chooses a distribution qt (the player may or may not know pt before
       choosing qt ).
                                                                              P
     • The rows player loses pt AqtT . His goal is to minimize his total loss, t pt AqtT
     • After playing time t, the rows player is also given the vector AqtT , so he knows what
       his loss would have been in time t for any strategy he would have played.
Application of Zero Sum Games in Computer Science                                               17

KL distance

Definition    KL(Kullback-Leibler) distance is defined as follows
                                         X             µ        ¶
                                                         P1 (x)
                          KL(P1 kP2 ) =       P1 (x)ln
                                          x
                                                         P2 (x)

   Characteristics: KL(P1 kP1 ) = 0, and for every P 1 6= P 2,      KL(P 1kP 2) > 0.

An algorithm
We attach a weight for each action, at each time. The weights are updated as follows:

                                      wt+1 (i) = wt (i)β Lt (i)
   where β ∈ (0, 1) is a parameter,
                                            ¡    ¢
                                    Lt (i) = AqtT i = ei AqtT
   is the loss caused by strategy i at time t, and
                                              w1 (i) = 1
   At time t the algorithm chooses a distribution pt such that
                                                , N
                                                 X
                                pt (i) = wt (i)      wt (j)
                                                           j=1

   Denoting
                                                 N
                                                 X
                                          zt =         wt (j)
                                                 j=1

Theorem 4.15 For any game matrix A and for any q1 , · · · qt the p1 , · · · , pt that the algorithm
chooses satisfy:
                                       "                                       #
                        X                  X ¡         ¢
                 Loss =   pt AqtT ≤ min aβ   p AqtT + cβ KL(pkp1 )
                                          p
                            t                          t

   where
                                                ln(1/β)
                                        aβ =
                                                 1−β
                                                  1
                                         cβ   =
                                                1−β
18                                                                         Lecture 4: 2-Player Zero Sum Games

Lemma 4.16 For every iteration t and for every p̃
                                        µ ¶
                                         1              ¡                   ¢
         KL(p̃kpt+1 ) − KL(p̃kpt ) ≤ ln      p̃AqtT + ln 1 − (1 − β)pt AqtT
                                         β

     Proof:
                                                 X              µ              ¶       X             µ                ¶
                                                                     pt (i)                               zt+1
           KL(p̃kpt+1 ) − KL(p̃kpt ) =                p̃(i)ln                      =       p̃(i)ln                        =
                                                  i
                                                                    pt+1 (i)           i
                                                                                                         β t (i) zt
                                                                                                          L


                 µ          ¶       X           µ ¶Lt (i)       µ      ¶      µ ¶X
                     zt+1                         1               zt+1         1
            ln                  +       p̃(i)ln            = ln          + ln      p̃(i)Lt (i) =
                      zt            i
                                                  β                zt          β i
                                                  µ      ¶      µ ¶
                                                    zt+1          1
                                               ln          + ln        p̃AqtT                                                 (4.19)
                                                     zt           β
     But                     P
                    zt+1        wt+1 (i)      X wt (i)                   X
                 ln      = ln Pi         = ln   P        · β Lt (i) = ln   pt (i)β Lt (i)
                     zt           w
                                 i t (i)      i
                                                  w
                                                 j t (j)                 i

     Using β x ≤ 1 − (1 − β)x for x ∈ [0, 1] we obtain
                  Ã                                !
        zt+1        X                                    ³           P                 ´
     ln      ≤ ln       pt (i) (1 − (1 − β)Lt (i))   = ln 1 − (1 − β) N
                                                                      i=1 p t (i)Lt (i)  =
         zt          i
                               ¡                   ¢
                            ln 1 − (1 − β)pt AqtT                                          (4.20)

     Combining 4.19 and 4.20
                                                                                               µ ¶
                                               ¡                  ¢                             1
                 KL(p̃kpt+1 ) − KL(p̃kpt ) ≤ ln 1 − (1 − β)pt AqtT + ln                            p̃AqtT                     (4.21)
                                                                                                β

                                                                                                                                  ¤
     Proof of the Theorem:
     Let p̃ be some distribution over the rows. Since ln(1 − x) ≤ −x for x < 1 we have,
                               ¡                 ¢
                            ln 1 − (1 − β)pt AqtT ≤ −(1 − β)pt AqtT

     Hence from Lemma 4.16,
                                                                                           µ ¶
                                                                                            1
                      KL(p̃kpt+1 ) − KL(p̃kpt ) ≤ −(1 − β)pt AqtT + ln                         p̃AqtT                         (4.22)
                                                                                            β
Application of Zero Sum Games in Computer Science                                                    19

   Summing 4.22 for all t = 1, . . . , T yields a telescope sum, resulting in
                                                            T
                                                            X                     µ ¶ X
                                                                                      T
                                                                                   1
           KL(p̃kpT +1 ) − KL(p̃kp1 ) ≤ −(1 − β)                  pt AqtT + ln           p̃AqtT
                                                            t=1
                                                                                   β t=1

   But since KL(p̃kpT +1 ) ≥ 0 we obtain
                               T
                               X                                     µ ¶ X
                                                                         T
                                                                      1
                     (1 − β)         pt AqtT ≤ KL(p̃kp1 ) + ln              p̃AqtT
                               t=1
                                                                      β t=1

   Thus
                                 T
                                 X                                         T
                                                                           X
                       Loss =          pt AqtT ≤ cβ KL(p̃kp1 ) + aβ               p̃AqtT
                                 t=1                                        t=1

   For any distribution p̃, which proves the theorem.
                                                                                          ¤
   We can now use the theorem to bound the average loss per step for our algorithm.
Substituting p1 to be uniform distribution (w1 (i) = 1) means KL(p̃kp1 ) ≤ ln(N ), because
                  X           µ       ¶ X                         X
                                p̃(x)
     KL(p̃kp1 ) =     p̃(x)ln          =    p̃(x)ln(p̃(x) · N ) ≤   p̃(x)ln(N ) ≤ ln(N )
                    x
                                1/N      x                        x

   So now we have
                               T
                               X                                  T
                                                                  X
                                      pt AqtT ≤ cβ lnN + aβ             p̃AqtT                    (4.23)
                                t=1                               t=1
                                         ³q          ´
   Choosing β =     q1        ∼1−Θ            ln N       we get
                     2ln(n)                      T
                  1+   T


                                    T                  T
                        1        1X         T       1X
                          Loss =       pt Aqt ≤ min       pAqtT + ∆
                        T        T t=1           p  T t=1
                q
   Where ∆ = 2lnN   T
                        + lnN
                           T
                              . This is achieved by substituting our choice of β in 4.23 and
using the approximation ln(1/β) ≤ (1 − β 2 )/(2β) for β ∈ (0, 1].
   The meaning of this is that the difference between average loss per step to that of the
optimal fixed strategy is bounded by a value that be made arbitrarily small for large T .
  Computational Game Theory                                     Spring Semester, 2003/04

                                  Lecture 5: March 30
  Lecturer: Yishay Mansour                             Scribe: Nataly Sharkov,Itamar Nabriski




5.1     Introduction
In this lecture we explore issues concerning the computability of Nash Equilibrium
in any general game. First we prove any game has at least one Nash Equilibrium
using Brouwer’s Fixed Point Theorem (The proof is presented at section 5.6 ). Then
we discuss how to compute a Nash Equilibrium of a game and a Nash Equilibrium
approximation called -Nash. We conclude by proving that the computation of most
information concerning Nash Equilibrium is N P -hard.


5.2     Proof of existence of Stochastic Nash Equilib-
        rium in any game
5.2.1     Proof Outline
We prove that any game has a Nash Equilibrium, though not necessarily a determin-
istic one. Using Brouwer’s Fixed Point Theorem, we prove that in any game if we
map every game state to another state, such that at least one player is better off,
then there is some state which is mapped into itself (a fixed point). In other words,
this game state cannot be improved by any player by changing his strategy, and thus
is, by definition, a Nash Equilibrium.


5.2.2     Notations
   • There are n players: N = {1, ..., n}

   • Each player can choose from a set of m pure strategies, thus the possible Strate-
     gies for each Player i are: Ai = {ai1 , ..aim }

   • ui - utility function of player i

   • pi - distribution over Ai

   • ℘=       pi - product of players’ distributions
          Q


   • (q, ℘−i ) - taking ℘ with pi replaced by q

   • ui (℘) = Eu~ ∼℘ [ui (~a)] - expected utility of player i

                                              1
2                                                                     Lecture 5: March 30

    • ∆i - all possible distributions for player i (infinite set - since each distribution
      contains m values in the range [0, 1])

    • Λ=       ∆i - product of all players’ possible distributions
           Q



5.2.3     Definitions
    • Nash Equilibrium - ℘∗ is a Nash Equilibrium if:

                                                ℘∗ ∈ Λ

                                         ∀i ∈ N : qi ∈ ∆i

                                       ui (qi , ℘∗−i ) ≤ ui (℘∗ )

    • Revenue of player i from deterministic action ai,j :

                                  Revenuei,j (℘) = ui (ai,j , ℘−i )


    • Profit of player i from deterministic action ai,j :

                            P rof iti,j (℘) = (Revenuei,j (℘) − ui (℘))


    • Gain of player i from deterministic action ai,j :

                                Gaini,j = max(P rof iti,j (℘), 0)

      Gaini,j is non zero only if player i has positive profit from playing strategy ai,j
      instead of his strategy in ℘. Thus in Nash Equilibrium (℘ = ℘∗ ) all Gaini,j ’s
      are zero.

    • We define a mapping:
                                             y:Λ→Λ
                                                 pi,j + Gaini,j
                                   yi,j (℘) =
                                                1+ m  k=1 Gaini,k
                                                    P



         – yi,∗ is a distribution over Ai (where ∗ means for any j)
         – yi,j is continuous (since Revenuei,j is continuous → P rof iti,j is continuous
           → Gaini,j is continuous → yi,j is continuos)
         – Notice that the denominator of the expression on the right is there in order
           to normalize the expression to be a value in ℘.
5.3. COMPUTING OF NASH EQUILIBRIA                                                          3

5.2.4        Proof
By Brouwer’s Theorem (see section 5.6) for a continuous function f : S → S such
that S is a convex and compact set, there exists s ∈ S such that s = f (s). s is called
a fixed point of f . Thus in our case, for y, there exists ℘∗ :
                                                        pi,j + Gaini,j
                            yi,j (℘∗ ) = pi,j =
                                                       1+ m  k=1 Gaini,k
                                                           P


We argue that this point is a Nash Equilibrium.

   • If m k=1 Gaini,k = 0 then we are done since all Gaini,k are zero and thus there
        P

     is no room for improvement which is by definition a Nash Equilibrium.
                   Pm
   • Otherwise       k=1 Gaini,k > 0:

                                        m
                                        X
                            pi,j (1 +          Gaini,k ) = pi,j + Gaini,j =⇒
                                        k=1

                                               m
                                               X
                                        pi,j         Gaini,k = Gaini,j
                                               k=1

      This implies one of two cases:
        1.

                                           pi,j = 0 ⇐⇒ Gaini,j = 0

             Then we are in a Nash Equilibrium and the fixed point is 0.
        2.

                                           pi,j > 0 ⇐⇒ Gaini,j > 0

             This implies that for every strategy that has a positive probability ai,k ,
             playing it purely will net a higher utility. pi,j is a distribution, thus, if we
             take pi,j over all strategies we will net a higher utility. But this implies
             that we can improve pi,j by selecting pi,j , which is a contradiction


5.3     Computing of Nash equilibria
5.3.1        General sum games
We begin from the example of the general sum game. Let A,B be payoff matrices of
player 1 and 2 accordingly.                    !
                                     1 5 7 3
                              A=
                                     2 3 4 3
                                                                !
                                                     2 3 1 5
                                    B=
                                                     4 1 6 0
4                                                                   Lecture 5: March 30




                        Figure 5.1: The viewpoint of player 2.




Player 1 has only two strategies: (x, 1-x).
Player 2 has vector of strategies. Let number all strategies of player 2. j ∈ [1, 4] - the
index of player 2’s strategies. The utility of playing strategy j is b1j x + b2j (1 − x).
   p ∈ [0, 1] is the probability that player 1 plays bottom strategy. (1-p) that he plays
top strategy. We can receive Nash equilibrium in points those player 2 is indifferent
between strategies 3 and 4. Let see all cases.

    • The side (3,3). For this side the player 1 is indifferent, since for all values p
      lengthwise the side that is equilibrium.

    • Extreme points. Let see the case of extreme points p=0, p=1. In these points
      Equilibrium can be received if the action p is better than x - reverse action.

    • Pass points. Check the pass points from one to other side. There are two such
      points. The first one is (3,3)-(1,2) pass point. In this point player 2 prefer other
      strategy. The second one is (1,2)-(7,4). There is Nash equilibrium in this point.
      Let compute it.
                               1 · p + 7 · (1 − p) = 2p + 4(1 − p)

                                  (7 − 4)(1 − p) = (2 − 1)p
                                           7−4    p
                                      3=       =
                                           2−1   1−p
                                                  3
                                             p=
                                                  4
                                                      1
                                           1−p=
                                                      4

In the same way we can compute the case when player 1 is indifferent between top
and bottom strategies. For player 2 those are strategies number three and fourth.
Computing of Nash equilibria                                                       5

5.3.2      An algorithm that uses the support vectors
Consider a general two-players game
A- payoff matrix of player 1.
B- payoff matrix of player 2.
As stipulated by Nash’s theorem a Nash Equilibrium (p,q) is exists.
Suppose we know the support sets. p has support Sp = {i : pi 6= 0} and q has
support Sq = {j : qj 6= 0}. How can we compute the Nash equilibrium? Let’s
determine requirements for the best response of these players.
For player 1:
                                  ∀i ∈ Sp , ∀l ∈ A
                                        ei Aq T ≥ el Aq T .
Where ei is unit vector for i=1.
If i, l ∈ Sp then ei Aq T = el Aq T .
For player 2:
                                        ∀j ∈ Sq , ∀l ∈ B
                                        pBeTj ≥ pBeTl

                                     Σqj = 1 Σpi = 1
                             j ∈ S q qj > 0   pi > 0 i ∈ Sp
                             j 6∈ Sq qj = 0   pi = 0 i 6∈ Sp

To find NE we only need to solve the following system of constraints:

                          j ∈ Sq pBeTj = v ei Aq T = u i ∈ Sp
                          k 6∈ Sq qk = 0      pk = 0   k 6∈ Sp
                                  Σqj = 1   Σpi = 1

There are 2(N+1) equations and 2(N+1) variables.
Unique solution requires non-degenerate system of constraints. Otherwise there is an
infinite number of Nash equilibria.
Algorithm: For all possible subsets of supports:
    • Check if the corresponding linear programming has feasible solution (using e.g.
      simplex);
    • If so, STOP : the feasible solution is Nash equilibrium.

Question: How many possible subsets supports are there to try?
Answer: At most 2n · 2n = 4n . The algorithm finds all the Nash equilibria. So,
unfortunately, the algorithm requires worst-case exponential time.

The following is an example of the game with an exponential number of Nash equi-
libria.                                        (
                                                 1 if i=j
                       u2 (i, j) = u1 (i, j) =
                                                 0 otherwise
6                                                                      Lecture 5: March 30

For each support, a uniform distribution for both players is Nash Equilibrium.


5.4      Approximate Nash Equilibrium
5.4.1     Algorithms for approximating equilibria
Definition ℘∗ is -Nash if for every player p* and every (mixed) strategy aj ∈ Ai ,

                               ui (aj , p∗− i) ≤ ui (aj , p∗− i) + 


If  = 0 then this is a general Nash equilibrium.

Theorem 5.1 For any two-player game G, there exists an -Nash, whose support’s
size is 12
        2
           logn.

   Proof: The proof is based on the probabilistic method. For the present we assume
that all utilities are between 0 to 1. By Chernoff bound, for every i.i.d.x1 , x2 , ...xn s.t.
E[xi ] = p. We have
                                                        2
                                 P r[|x − p| ≥ ] ≤ e−2 l ,
where
                                      1X
                                         x=xi .
                                      n
Let (p,q) be a Nash equilibrium. By sampling each distribution l times we get the
distribution (p̂,q̂).                                                     Q.E.D.

We now prove that (p̂,q̂) is an -Nash.
Lemma 5.2

                                    | p̂Aq̂ T − pAq T |≤ 

                                    | p̂B q̂ T − pBq T |≤ 

   Proof: We prove the inequality for A, a similar proof holds for B. Using the
Chernoff bound again we get:

                               P r[∃i | ei Aq̂ T − ei Aq T |≥ ]

                              ≤ N P r[| ei Aq̂ T − ei Aq T |≥ ]
                                                      2
                                          ≤ N e−2 l
Where N is the number of actions.
We define the random variable:

                                Qij = {(li A)j = aij w.p · qj }
5.5. HARDNESS RESULTS FOR NASH EQUILIBRIUM                                                    7

                                       E[Qij ] = ei Aq T
                                      1X i
                                        Q = ei Aq̂ T
                                      l
                                               2
The bound of the error probability is N e−2 l . Perform this action for (B, p)(B, q)(A, p)(A, q).
                                2
Hence, with probability 4N e−2 l this takes place for q̂ and p̂. Show that we receive
the -Nash equilibrium.
                                  | pAq T − p̂Aq̂ T |≤
                         | pAq T − pAq̂ T | + | pAq̂ T − p̂Aq̂ T |≤ 2
Since (p,q) is Nash equilibrium, ei Aq T ≤ pAq T . From the approximation we get
                                                                         2
ei Aq̂ T ≤ pAq T +  ≤ p̂Aq̂ + 3, with success probability of 2N e−2 l . We choose 0 = 3
for l ≥ 29 102 ln 2N . The success probability is positive. This would mean that there
are exist q̂ and q̂ satisfy all conditions. Hence, (q̂, q̂) is -Nash equilibrium. Ω( 12 ln N )
Q.E.D.

Algorithm: For all groups whose size is at most 12 ln N

   • compute -Nash equlibrium for all pairs of groups.


5.5      Hardness results for Nash Equilibrium
In this section we prove that many problems related to Nash Equilibrium are N P -hard
to compute.

5.5.1     Proof Outline
We construct a 2 Player game G. Our decidability problem is the following: Is there
an expected Nash equilibrium in G, where both players have an expected utility of
1. We use a reduction from the well known N P -hard problem SAT to this decid-
ability problem. Afterwards we elaborate on this result to illustrate that many Nash
Equilibrium problems about 2 player games are N P -hard to compute.

5.5.2     Definitions
   • Let θ be a boolean CNF (Conjunctive Normal Form) formula.

   • Let V be the set of variables vi ∈ θ. |V | = n.

   • Let L be the set of all possible literals li composed from the variables in V .
     Thus for every xi ∈ V there exists xi , x̄i ∈ L and |L| = 2n.

   • Let C be the set of clauses whose conjunction is θ.

   • Let getV ar(·) be a function that returns for any literal l ∈ L the variable
     appearing in the literal, i.e. getV ar(xi ) = getV ar(x̄i ) = xi .
8                                                                              Lecture 5: March 30

        • Let f be an arbitrary symbol.
        • Let G(θ) be a 2-Player game. In this game each player selects one of the
          following: a variable, a literal, a clause from θ or the symbol f . This constitutes
          his sole action in the game. Game G’s outcomes are defined in table 5.1

        Thus Σ1 = Σ2 = V ∪ L ∪ C ∪ {f }

              `2 ∈ L                     v2 ∈ V                     c2 ∈ C                 f
    `1 ∈ L    (1, 1) `1 6= `¯2           (−2, −n + 2) v(`1 ) = v2   (−2, +2) `1 6∈ c2      (−2, 1)
              (−2, −2) `1 = `¯2          (−2, +2) v(`1 ) 6= v2      (−2, −n + 2) `1 ∈ c2   (−2, 1)
    v1 ∈ V    (+2, −2) v(`2 ) 6= v1      (−2, −2)                   (−2, −2)               (−2, 1)
              (−n + 2, −2) v(`2 ) = v1
    c1 ∈ C    (+2, −2) `2 6∈ c1          (−2, −2)                   (−2, −2)               (−2, 1)
              (−n + 2, −2) `2 ∈ c1
    f         (1, −2)                    (1, −2)                    (1, −2)                (0, 0)

                                Table 5.1: Definiton of Game G(θ)


5.5.3         Reduction Proof
Lemma 5.3 If θ is satisfiable then there exists a (1,1) Nash equilibrium in G

    Proof: If θ is satisfiable then there are l1 , l2 , ..., ln ∈ L (where getV ar(li ) = xi )
that when assigned the value T rue (by setting the value of the underlying variable
to the satisfying assignment) satisfy θ. If the other player plays all of these li with
probability n1 then playing the same strategy as well with the same probability yields
a utility of 1. We argue this is a Nash Equilibrium.
We show that neither players can net a higher utility by changing his strategy and
thus, by definition, it is a Nash Equilibrium:
        • Playing the negation of one of the li ’s gives an expected utility of:
                                           1        n−1
                                             (−2) +     (1) < 1
                                           n         n

        • Playing a vi ∈ V yields a utility of:
                                         1           n−1
                                           (2 − n) +     (2) = 1
                                         n            n
          The reason is that there is a probability of n1 that the other player chose an li
          such that getV ar(li ) = xi .
        • playing a clause c ∈ C gives a utility of:
                                         1           n−1
                                           (2 − n) +     (2) = 1
                                         n            n

          This happens since each li is a member of one or more of the clauses.
Hardness results for Nash Equilibrium                                                  9

   • Finally, by choosing f the utility is also 1.
                                                                           Q.E.D.
   This is the only Nash Equilibrium in the game that has an expected utility of 1
to both players. Actually the game has only one more Nash Equilibrium where both
players put probability 1 on f and get (0, 0).
   Proof:

  1. It is easy to verify there are no equilibriums where one player plays purely f
     and the other does not.
  2. Assume both play a mixed strategy where the probability of playing f is 0.
     The maximal joint utility (u1 + u2 ) in the game is 2. If any player has expected
     utility less than 1 than he is better off switching to playing f with probability
     1. Thus (1,1) is also the maximal joint utility in any equilibrium. If either
     player plays V and C with a positive probability it follows that the joint utility
     is below 2. By the linearity of expectation it follows that at least one player
     has utility below 1. This player is better off playing purely f and thus V or C
     are never played in a Nash Equilibrium.
  3. Thus we can assume both players put positive probabilities on strategies in
     L ∪ {f }. If one player puts positive probability on f then the other player is
     strictly better off playing purely f since, like playing L, it yields 1 when the
     other player plays L and it performs better than L when the other player plays
     f . It follows that the only equilibrium where f is ever played is the one when
     both players play purely f .
  4. Now we can assume both player only put positive probabilities on elements of
     L. Suppose that for some l ∈ L, the probability that player 1 plays either l or ¯l
     is less than n1 then the expected utility of the player 2, playing v ∈ V such that
     v = getV ar(l), is:
                                     1            n−1
                               u2 > (2 − n) +           (2) = 1
                                     n              n
     Hence, this cannot be a Nash Equilibrium. Thus we can assume that for any
     l ∈ L the probability that a given player plays l or ¯l is precisely n1 .
  5. If there is an element of L such that player 1 plays with a positive probability
     and player 2 plays with a positive probability its negation, then both players
     have expected utilities of less than 1 and thus are better off playing purely
     f . Thus, in a Nash Equilibrium, if player 1 plays l with some probability,
     player 2 must play l with probability n1 and thus player 1 must also play l with
     probability n1 . Thus we can assume that for any variable exactly one of its
     literals is played by both players with a probability of n1 . It follows that in any
     Nash Equilibrium (besides the one where both players play purely f ), literals
     that are played indeed correspond to an assignment to the variables.

                                                                                 Q.E.D.
10                                                                  Lecture 5: March 30

Lemma 5.4 If θ is not satisfiable then a Nash Equilibrium with expected utilities of
(1,1) doesn’t exist in G

    Proof: As we verified above, when θ is satisifiable, the only Nash Equilibrium
where the utility is 1 for both players is when both players choose li with probability
1
n
  . But when θ is not satisfiable, this is not a Nash Equilibrium anymore:

     • Let c ∈ C be a clause that is not satisfied by the assignment, that is, none of
       its literals are ever played. Thus playing c nets a utility of 2 and each player is
       better off switching to this strategy.

                                                                                  Q.E.D.

5.5.4       Conclusions and Corollaries
Thus it is N P -hard to determine whether a certain equilibrium exists in a game.
Also, since (1, 1) is the equilibrium that maximizes the ”social welfare” (combined
utility of both players) it can be viewed as the optimal Nash Equilibrium of the game.
Thus finding the optimal Nash Equilibrium of the game is also N P -hard. Using the
same game G, depending on how we state the decidability problem, we can deduce
that many other Nash Equilibrium related problems are N P -hard. For example the
number of different Nash Equilibrium in the game, is there an Nash Equilibrium
where all players are guaranteed at least k and so on. Thus information regarding
the Nash Equilibrium of games is generally hard to compute.


5.6        Brouwer’s fixed point theorem
Theorem 5.5 (Brouwer) Let f : S → S be a continuous function from a non-empty,
compact, convex set S ∈ <n into itself, then there is x· ∈ S such that x· = f (x∗ ) (i.e.
x· is a fixed point of function f ).

5.6.1       Proof Outline
For <1 the proof is a simple one is proved directly. For the two dimensional case we
prove the theorem on triangles, aided by Sperner’s lemma (which we will prove as
well). Since we can ”cut out” a triangle out of any convex, compact set, the theorem
holds for any such set in <2 . Generalization of the theorem for a triangle in <n
follows, but will not be shown here.

5.6.2       In One Dimension
Let f : [0, 1] −→ [0, 1] be a continuous function. Then, there exists a fixed point, i.e.
there is a x∗ in [0, 1] such that f (x∗ ) = x∗ . There are 2 possibilities:

     1. If f (0) = 0 or f (1) = 1 then we are done.
Brouwer’s fixed point theorem                                                          11

  2. If f (0) 6= 0 and f (1) 6= 1. Then define:

                                      F (x) = f (x) − x

     In this case:
                                F (0) = f (0) − 0 = f (0) > 0
                                    F (1) = f (1) − 1 < 0
     Thus F : [0, 1] −→ < where F (0) · F (1) < 0. Since f (·) is continuous, F (·) is
     continuous as well. By the Intermidate Value Theorem, there exists x∗ ∈ [0, 1]
     such that F (x∗ ) = 0. By definition of F (·):

                                     F (x∗ ) = f (x∗ ) − x∗

     And thus:
                                          f (x∗ ) = x∗




   Figure 5.2: A one dimensional fixed point (left) and the function F (·) (right)




5.6.3    In Two Dimensions
Sperner’s Lemma
Lemma 5.6 (Sperner’s Lemma) Given a triangle and a triangulation of it into an
arbitrary number of ”baby triangles”.

  1. Mark the vertices of the original triangle by 0,1,2.

  2. Mark all other vertices with one of the labels according to the following rule:

        • If a vertex lies on the edge of the original triangle, label it by one of the
          numbers at the end points of that edge.
12                                                                  Lecture 5: March 30

          • If a vertex is inside the original triangle label it any way you like.


There exists a baby triangle that has all three of the labels (one vertex is 0, the second
is 1 and the third is 2). In fact there is an odd number of such triangles.




                          Figure 5.3: Sperner labeled triangle




Proof of Sperner’s lemma in one dimension

Given a line segment whose endpoints are labeled 0 and 1 is divided to subsegments,
each interior point is labeled is 0 or 1.
 Definition A segment is called completely labeled if it has a label of 0 at one end
and a label of 1 at the other end

     • C = number of completely labeled subsegments.

     • Z = number of subsegments labeled with 0 and 0.

     • O = number of occurrences of 0 at an endpoint of a subsegment - an odd number
       (since for every 0 you label two edges are added and you start off with one such
       edge)

     • O = 2Z + C

Thus, C must be odd numbered (and thus 6= 0s)
Brouwer’s fixed point theorem                                                        13




                          Figure 5.4: Sperner labeled segment


Proof of Sperner’s lemma in two dimensions

Definition A triangle is called completely labeled if it has a label of 0 at one vertex,
a label of 1 at another vertex and a label of 2 at the third vertex

   • C = number of baby triangles that are completely labeled
   • Z = number of baby triangles with 0 and 1 but not 2 (with 0,1,0 or with 0,1,1)
   • O = number of occurrences of 0,1 at an edge of a baby triangle an odd number

        1. All occurrences of 0,1 for an interior baby triangle are paired up (since
           each interior edge is shared by two baby triangles ...)- an even number.
        2. All occurrences of 0,1 for a side baby triangle occur along the base of
           the original triangle, and thus are an odd number by the one dimension
           argument.

   • O = 2Z + C
     Since each triangle in Z has two edges labeled 0,1 it contributes two edges to
     O. In sum, 2Z edges are contributed by all triangles in Z. This suggests the
     remaining edges in O come from triangles in C. Each triangle in C has one
     edge labeled 0,1 and thus contributes one edge to O.

Since O is odd and 2Z is even, C must be odd numbered (and thus 6= 0); which
implies there exists at least one completely labeled baby triangle.

Proof of Brouwer’s theorem
We can find a triangle in any convex, compact two-dimensional shape. Define the
three vertices of the original triangle as A,B and C. Each point p in the triangle will
be represented by its barycentric coordinates:
                        p = x0 A + x1 B + x2 C; x0 + x1 + x2 = 1
Thus p can be represented as p = (x0 , x1 , x2 ).

   Label all points of the triangle as follows:
14                                                                      Lecture 5: March 30




                  Figure 5.5: Labeling baby triangles in two dimensions




                  Figure 5.6: Sample barycentric coordinates of point p


                                           0   0   0
     • If p = (x0 , x1 , x2 ) and f (p) = (x0 , x1 , x2 ) inspect the coordinates of p and f (p)
                                                                     0
       until you find the first index i ∈ {0, 1, 2} such that xi < xi , label p by the label
       i.

     • If it happens that for some point p there is no strict inequality like that, it must
                 0        0         0
       be that x0 = x0 , x1 = x1 , x2 = x2 . Thus p is a fixed point and we are done.

     • According to this rule, the vertices A,B,C are labeled by 0,1,2.

     • Each point of the edge 0,1 is marked by either 0 or 1. Similar statements hold
       for the other edges.

     • Divide the triangles into smaller and smaller triangles with diameters approach-
       ing 0. At each step label the triangles by the rule above. Labeling is as in
       Sperner’s Lemma.

     • For each subdivision there exists at least one triangle labeled with all three
       labels.

     • As we divide to smaller and smaller triangles, the vertices of the baby tri-
       angles that are completely labeled must eventually converge to some point
       q = (y0 , y1 , y2 ) (see figure 5.8). Now we use the labeling scheme we devel-
       oped earlier and the completely labeled property of q that assures us that, due
Brouwer’s fixed point theorem                                                           15




  the coordinates of p are (∗, ∗, 0) and they transformed by f into (∗, ∗, ∗); the x2
      increases, thus the label of p cannot be 2, thus it must be either 0 or 1;

         Figure 5.7: Example of how a labeling of a point p is determined


     to continuity, for q and f (q) we must have:
                                  0          0         0
                                 y0 ≤ y 0 ; y1 ≤ y 1 ; y2 ≤ y 2

     Since the barycentric coordinates of a point add up to 1, these must be equali-
     ties:
                                 0          0          0
                                y0 = y 0 ; y1 = y 1 ; y2 = y 2
     And thus f (q) = q and q is a fixed point. The proof for n-dimensional spaces
     is similar using an n-dimensional triangle.




  Figure 5.8: Dividing into smaller and smaller triangles - approaching to point q
  Computational Learning Theory                               Spring Semester, 2003/4

                 Lecture 6:Congestion and potential games
  Lecturer:Yishay Mansour                                    Scribe:Nir Yosef, Ami Koren




6.1     Lecture overview
So far we’ve seen that not every strategic game has a deterministic Nash equilibrium.
In this lecture we discuss a certain class of games: congestion and potential games, for which
we prove the existence of a deterministic Nash equilibrium.
In the coming sections we define the above classes, show the relation between them and
estimate the complexity of finding a deterministic Nash equilibrium for a potential game.


6.2     Congestion game
6.2.1    Example




                            Fig.1 Example of a congestion game

Let us start with an illustrative example: In the model described above, Players A,B and C
have to go from point S to T using road segments SX,XY,...etc. Numbers on edges denote
the cost for a single user for using the corresponding road segment, where the actual cost
is a function of the actual number of players using that road segment(i.e. a descrete delay
function). For example: if segment SX is used by a 1,2, or 3 users, the cost on that segment
would be 2,3, or 5, respectively. The total cost of each player is the sum of all segments he
uses. Note that the players are therefore engaged in a game which can be represented in a
strategic form(as a cost matrix).

                                              1
2                                                      Lecture 6:Congestion and potential games

6.2.2     Congestion game - Definition
A congestion model (N,M,(Ai )i∈N ,(cj )j∈M ) is defined as follows:
    • N = {1..n} denotes the set of players
    • M = {1..m} denotes the set of facilities
    • For i ∈ N , Ai denotes the set of strategies of player i, where each ai ∈ Ai is a non
      empty subset of the facilities.
    • For j ∈ M , cj ∈ Rn denotes the vector of costs, where cj (k) is the cost related to each
      user of facility j, if there are exactly k players using that facility.
 The congestion game associated with a congestion model is a game in strategic form with
 the set of N players, with sets of strategies (Ai )i∈N and with cost function defined as follows:
 Let A = ×i∈N Ai be the set of all possible deterministic profiles(players strategy vectors). For
 any ~a ∈ A and for any j ∈ M , let nj (~a) be the number of players using facility j, assuming
~a to be the current profile.                                  P
 Now, define the overall cost function for player i: ui (~a) = j∈ai cj (nj (~a))
Remark 6.1 All players are equal in a sense that they have the same ’weight’(it doesn’t
matter which players are using a facility, only how many players are using it).

6.2.3     Deterministic equilibrium
Theorem 6.2 Every finite congestion game has a pure strategy(deterministic) equilibrium.
     Proof: Let ~a ∈ A be a deterministic strategy vector as defined above,
                                                                              P Pnj (~a)
 let Φ: A → R be a potential function defined as follows: Φ(~a) = m               j=1     k=1 cj (k)
 Consider the case where a single player changes its strategy from ai to bi (where ai , bi ∈ Ai ).
 Let ∆ui be the change in its costPcaused by the the change           P in strategy:
 ∆ui = ui (bi , a~−i ) − ui (ai , a~−i ) = j∈bi −ai cj (nj (~a) + 1) − j∈ai −bi cj (nj (~a))
 (explanation: change in cost = cost related to the use of new facilities minus cost related to
 use of those facilities which are not in use anymore due to strategy change)
 Let ∆Φ be the change in the potential    P      caused by the change P in strategy:
 ∆Φ = Φ(bi , a~−i ) − Φ(ai , a~−i ) = j∈bi −ai cj ((nj (~a) + 1) − j∈ai −bi cj (nj (~a))
 (explanation: immediate from potential function’s definition)
 Thus we can conclude that for a single player’s strategy change we get
 ∆Φ = ∆ui .
     That’s an interesting result: We can start from an arbitrary deterministic strategy vector
~a, and at each step one player reduces it’s cost. That means, that at each step Φ is reduced
 identically. Since Φ can accept a finite amount of values, it will eventually reach a local
 minima. At this point, no player can achieve any improvement, and we reach a NE.                    
6.3. POTENTIAL GAMES                                                                                             3

6.3        Potential games
6.3.1       Potential functions
Let G =< N, (Ai ), (ui ) > be a game in strategic form and let A = ×i∈N Ai be the collection
of all deterministic strategy vectors in G.

Definition A function Φ: A → R is an exact potential for game G if
∀~a∈A ∀ai ,bi ∈Ai Φ(bi , a~−i ) − Φ(ai , a~−i ) = ui (bi , a~−i ) − ui (ai , a~−i )

Definition A function Φ: A → R is a weighted potential for game G if
∀~a∈A ∀ai ,bi ∈Ai Φ(bi , a~−i ) − Φ(ai , a~−i ) = ωi (ui (bi , a~−i ) − ui (ai , a~−i )) = ωi ∆ui
Where (ωi )i∈N is a vector of positive numbers (weight vector).

Definition A function Φ: A → R is an ordinal potential for a minimum game G if
∀~a∈A ∀ai ,bi ∈Ai (Φ(bi , a~−i ) − Φ(ai , a~−i ) < 0) ⇐ (ui (bi , a~−i ) − ui (ai , a~−i ) < 0) (the opposite takes
place for a maximum game).

Remark 6.3 Considering the above definitions, it can be seen that the first two definitions
are private cases of the third.

6.3.2       Potential games
Definition A game G is called an ordinal potential game if it admits an ordinal potential.

Theorem 6.4 Every finite ordinal potential game has a pure strategy(deterministic) equi-
librium.

   Proof: Similarly to the previous proof, starting from an arbitrary deterministic strategy
vector,after a finite number of steps of single player improvement, we will reach a local
minima which is, as was explained above, a deterministic equilibrium.                     

6.3.3       Examples
Exact potential game
Consider an undirected graph G = (V, E) with a weight function ω    ~ on its edges. The goal is
to partition the vertices set V into two distinct subsets D1 , D2 (where D1 ∪ D2 = V ):
for every player i, choose si ∈ {−1, 1} where choosing si = 1 means that i ∈ D1 and the
opposite for D2 . The weight on each edge denotes how much the correspondingP   vertices ’want’
to be on the same set. Thus, define the value function of player i as ui (~s) = j6=i ωi,j si sj
4                                                      Lecture 6:Congestion and potential games




                           Fig.2 Example for an exact potential game

On the example given in figure 2 it can be seen that players 1,2,4 have no interest in changing
their strategies, However, player 3 is not satisfied, it can increase his profit by changing his
chosen set to D P1 .
Using Φ(~s) = j<i ωi,j si sj as our potential function, let us consider the case where a single
player iPchanges its strategy(shifts
                         P               from onePset to another):
∆uPi = j6=i ωi,j si sj −
                       P j6=i ωi,j (−si )sj = 2 j6=i ωi,j si sj =
2 j: j<i ωi,j si sj + 2 j: i<j ωi,j si sj = ∆(Φ)
Which means that Φ is an exact potential function, therefore we conclude that the above
game is an exact potential game.

Weighted potential game
Consider the following load balancing congestion model(N,M,(ωi )i∈N ) with M identical ma-
chines, N jobs and (ωi )i∈N weight vector(ωi ∈ R+ ). The          P load on a machine is defined as
the sum of weights of the jobs which use it: Lj (~a) = i: ai =j ωi where ~a ∈ [1..M ]N is a
deterministic strategy vector.
Let ui (~a) = Lai (~a) denote the cost function of player i. We would like to define a potential
function whose reaction to a single player’s strategy change will be correlated with the reac-
tion on the player’s cost function.
The potential function is defined as follows: Φ(~a) = M               1 2
                                                                 P
                                                                  j=1 2 Lj , consider the case where a
single job shifts from its selected machine M1 to another machine M2 (where M1 and M2 are
two arbitrary machines):
Let ∆ui be the change in its cost caused by the strategy change:
∆ui = ui (M2 , a~−i ) − ui (M1 , a~−i ) = L2 (~a) + ωi − L1 (~a)
(explanation: change in job’s load = load on new machine minus load on old machine)
Let ∆Φ be the change in the potential caused by the strategy change:
∆Φ = Φ(M2 , a~−i ) − Φ(M1 , a~−i ) = 21 [(L1 (~a) − ωi )2 + (L2 (~a) + ωi )2 − L21 (~a) − L22 (~a)] =
= ωi (L2 (~a) − L1 (~a)) + ωi2 = ωi (L2 (~a) + ωi − L1 (~a)) = ωi ∆ui
Potential games                                                                                                 5

Therefore, we can conclude that the model at hand is a weighted potential game.

General(ordinal) potential game
Consider the following load balancing congestion model(N ,M ,(ωi,j )i∈N,j∈M ) with M related
machines, N jobs and ω        ~ a machine dependent weight vector(where ωi,j ∈ N + is the weight
of job i having been assigned to machine j).
Here we have similar definitionsPto those we have presented in the above example:
Load on a machine j: Lj (~a) = i: ai =j ωi,j
Cost function for player i: ui (~a) = Lai (~a)
The potential function will now be defined as Φ(~a) = M                      Lj (~a)
                                                                  P
                                                                      j=1 4
Consider the case where a single job shifts from its selected machine M1 to another ma-
chine M2 . Change in players’ cost is calculated in a similar fashion to the above example:
∆ui = L2 (~a) + ωi,2 − L1 (~a)
Change in the potential caused by the strategy change will now be:
∆Φ = 4L1 (~a)−ωi,1 + 4L2 (~a)+ωi,2 − 4L1 (~a) − 4L2 (~a)
If ∆ui < 0 ⇒ L2 (~a) + ωi,2 < L1 (~a) ⇒ L2 (~a) + ωi,2 + 1 ≤ L1 (~a).
In addition L1 (~a) − ωi,1 + 1 ≤ L1 (~a) (both conclusions under the assumption that(ωi,j ∈
N + )). From the two inequalities we conclude:
{4L1 (~a)−ωi,1 ≤ 4L1 (~a)−1 , 4L2 (~a)+ωi,2 ≤ 4L1 (~a)−1 } ⇒ ∆Φ ≤ 2 · 4L1 (~a)−1 − 4L1 (~a) = −2 · 4L1 (~a)−1 < 0.
Therefore, we can conclude that the model at hand is a general potential game.

    Another example of a general potential game is given by taking the same model we have
described as an exampleP  for an exact potential game, along with a slightly different value
function ui (~s) = SIGN ( j6=i ωi,j si sj ) and the same potential function.
Following a similar proof it can be seen that this time we get an ordinal potential.

6.3.4       Finite improvement path
We use the concept of a Finite improvement path in order to define an abstract ordinal po-
tential function for a given strategic game. A finite improvement path is defined as follows:
For G =< N, (Ai ), (ui ) > minimum game in strategic form, and A = ×i∈N Ai collection of
all deterministic strategy vectors let Π = (V, E) be a graph such that
V = A and E = {< ~a, ~b >∈ A2 : ∃i [(bi , a~−i ) = ~b ] ∧ [ui (~b) < ui (~a)]}


Lemma 6.5 If Π is acyclic then the corresponding game G possesses a deterministic equi-
librium.

    Proof: Every acyclic graph has a sink(vertex without outgoing edges). Every sink on Π
is a deterministic equilibrium(follows immediately from the definition of E).           
6                                                  Lecture 6:Congestion and potential games


Now let us define the potential function Φ(~a) as the length of the longest route on Π starting
from ~a. Note that going from one vertex to another on Π(which is equivalent to a step
where a single user changes its strategy, thus reducing its cost) will reduce the value of Φ
(immediate from the definition of Φ). In addition - the number of such steps is final(because
G is final).
Having said that and from the definition at 8.3.1 we can conclude that Φ is an ordinal
potential function.
Every path on that graph is an improvement path with respect to the above potential func-
tion. The last vertex of every such path corresponds to an equilibrium point, as was explained
in the proof above.


6.4      Computing equilibrium in congestion games
We have seen on proof of theorem 8.2 that every general congestion game has an exact po-
tential function. We can use that potential function in order to find an equilibrium point(by
following the same scheme as described on the proof of theorem 8.2). The problem is that
the number of steps might be exponential in the size of the game.

6.4.1     Symmetric network’s game
(An example for computing equilibrium using reduction)
A symmetric network’s game NG is defined as follows: given a graph G = (V, E) with source
and destination vertices (S, T ), the players have to choose a route on G leading from S to
T. Each edge has a delay value which is a function of number of players using it.
Now, let us look at the full definition of NG as a congestion game (N,E,(Ai )i∈N ,(ce )e∈E ):
    • N denotes the set of players
    • E denotes the set of edges of G
    • Ai is the set of strategies of player i, where each ai ∈ Ai is a route on G leading from
      S to T
    • For e ∈ E, ce ∈ Rn denotes the vector of delays, where ce (k) is the delay related to
      edge e, if there are exactly k players using that edge.
                                           P
    • Player’s cost function is ui (~a) =    e∈ai ce (ne (~
                                                          a)) (where ne as before denotes the
      number of players using edge e)
Remark P6.6 On proof of theorem 8.2 we saw that for this kind of game the potential function
        m Pne (~a)
Φ(~a) = e=1 k=1 ce (k) is exact.
Computing equilibrium in congestion games                                                     7

reduction to min-cost flow
considering the graph G = (V, E) and the delay functions {ce }e∈E , we replace in G each
edge e with n parallel edges between the same nodes, each with capacity 1, and with costs
ce (1), .., ce (n).

Lemma 6.7 The cost of a full min-cost flow of n units on the new network is equal to Φ(~a)
where ~a is a strategy vector corresponding to that flow.

    Proof: Let f be a full flow of n units.f can be divided into n distinct routes(because the
capacity of each edge is exactly 1). Consider every route as the strategy of a single player of
the game NG. We define the corresponding strategy vector ~a as some ordered collection of
all these routes(it is not important in which order we define ~a because all players are equal).
Since f is minimal then it will first use the cheaper edges, therefore the contribution of a
collection
    Pne (~a) of edges e1 , .., en on the new networkP
                                                    which
                                                      Pnecorresponds to single edge e on G will
                                                          (~a)
be k=1 ce (k) and the total cost of f is thus e k=1 ce (k) = Φ(~a)
                                                                                              

Remark 6.8


   • Any minima on Φ is an equilibrium point(Immediate from the definition of Φ).

   • It is easy to see that for any integer min-cost flow in the new network, the strategy
     vector corresponding to that flow minimizes Φ.

Corollary 6.9 For every min-cost flow on the network defined above, the corresponding
strategy vector is an equilibrium point.

Corollary 6.10 There is a polynomial algorithm for finding a pure equilibrium in symmetric
network congestion games.

6.4.2     PLS class
We saw that we can always find deterministic equilibrium in general congestion game. We
also saw that in some cases, we have polynomial algorithm for doing that. How hard it
is to find the equilibrium? We will now show, that in some cases, the problem becomes
exponential. In order to do this, we will define a class for local-optima search.
Definition PLS class(Polynomial-time Local Search)
  Terminology:

   • I - Collection of possible inputs(graphs, for example)
8                                                  Lecture 6:Congestion and potential games

    • Fx - For each instance x ∈ I we have a finite set Fx of the possible solutions, all with
      the same polynomially bounded length(For example, all TSP paths at each graph).
    • c(x, s) - Cost function of a solution s ∈ Fx given an instance x ∈ I. For example- for
      each graph x ∈ I and path s ∈ Fx , c(x, s) marks the cost of the path(For s ∈ / Fx c()
      returns ”illegal”)
    • Nx (s) ⊆ Fx - Neighborhood function. This function defines the environment of each
      possible solution.
    • both Nx (s) and Fx are recognizable in polynomial time
The problem: finding a local optimum solution. That is, to find x ∈ I and s ∈ Fx , such that
∀s̀ ∈ Nx (s) : c(x, s̀) ≥ c(x, s)

For complete definition of PLS, see [3].

    Sample for generic problem
    • I = {0, 1}n
    • Fx = I -(has no meaning for solution)
    • Nx = {y|H(x, y) = 1} - The set of neighbors of each vector, defined as the set of all
      vectors which differ from it in exactly one bit(Hamming distance of 1)
    • c(x) - Some generic cost function
This problem can be thought of as seeking for a local minimal-cost vector among the set
{0, 1}n where locality is defined by hamming distance.
It can be shown that there are cost functions for which there exists an improvement path
at length 14 2n ≤ l ≤ 2n (Snake in a box ). This means that the improvement path has to go
through a significant number of the edges of the box in order to reach a local optima.
    The complexity of the problem is cost-function depended. For example, if we define cost
function c(x) : I → {0, 1}, we have an easy 1-step algorithm: Check all your neighbors, if
they’re all 1 - exit, else - go to the 0-neighbor and exit. The problem is getting hard when
there are a lot of different costs, since the improvement at each step can be much smaller
then the range of the costs.


PLS-Complete problems
Definition L ∈ P LS is PLS-complete when every Π ∈ P LS is reducible to L

    Here are some of the problem which are known to be PLS-Complete:
Computing equilibrium in congestion games                                                   9

   • Local minima in a cube(See above)

   • MAX-CUT - Find the edges that give maximal weight cut of graph vertices - In the
     local version, we consider two cuts as neighbors, if they differ in exactly one vertex

   • W2SAT - Try to satisfy as much clauses as possible(in cases that the expression is not
     satisfiable). In the local-version, we consider two solutions as neighbors if they differ
     in the value of exactly one variable( i.e. our goal is to reach a solution where a single
     switch of variable will not improve the cost)

   • T SP2 - Local version of Traveling Sales Person, where 2 routes are considered as
     neighbors if they differ in at most 2 edges

Theorem 6.11 A general congestion game, symmetric congestion game, and asymmetric
network game are all PLS-complete

   Proof:
We will show that a generic congestion game is PLS-complete. We will do it by a reduction
from a known PLS-complete problem:


Weighted not-all-equal 3SAT is a PLS-complete problem described as follows:

   • Input - Monotonic 3-CNF. A clause is considered satisfied if it is not all-1 and not
     all-0. There is a weight for each clause

   • Output - An assignment that satisfies maximal weight of clauses

   • Cost - Sum of weights on all unsatisfied clauses

   • Locality - In the local version, we consider two assignments as neighbors if they have
     different values for exactly one variable


The Reduction
Given an instance of the 3SAT problem above, we build a corresponding congestion game.
We want to show that the Nash equilibrium at the congestion game is equivalent to local-
minima at the above 3SAT problem. Therefore, had we known to find a Nash equilibrium
at the congestion game, we would have been able to solve our 3SAT problem.

For any given 3-CNF, we build the corresponding congestion game as follows:

   • variable −→ player
10                                                    Lecture 6:Congestion and potential games

     • clause Tj −→ 2 resources: m0j , m1j

     • action −→ For a player we have 2 actions:

          – I = {m1j | xi ∈ Tj }
          – II = {m0j | xi ∈ Tj }

       Explanation: Each player can choose whether to play all on 0, or all on 1

     • 3SAT cost function: For a ∈ {0, 1}, Cmaj (1) = Cmaj (2) = 0, Cmaj (3) = wi - This cost
       function punishes clauses with all-equal values. Cmaj (0) = 0, because we already punish
       it at Cm1−a
               j
                   (3).

     • assignment of xi = 1 (3SAT ) ⇐⇒ Player’s action Ai =I(congestion game) , which
       means that for every vector of deterministic strategy on the congestion game there
       exists a corresponding assignment on(3SAT) and vice versa.


After defining the game, we show the equivalence between Nash equilibrium at the congestion
game to local minima at the our 3SAT problem.

     • Change of player’s action at game: Assuming a player changed it’s action from I to
       II :

          – D1 - The clauses that became satisfied as result of the change
          – D2 - The clauses that became unsatisfied as result of the change

       The gain from the change:
                                               X             X
                                       4ui =          wj −          wj
                                               j∈D2          j∈D1


     • Switching a variable’s value at 3SAT will have the same affect:
                                             X         X
                                       4ui =      wj −     wj
                                               j∈D2          j∈D1


Therefore, Nash equilibrium at the congestion game is equivalent to a local-minima at the
3SAT problem
                                                                                       
6.5. EQUIVALENCE OF POTENTIAL AND CONGESTION GAME                                          11

6.4.3     ε-Nash of congestion game
Finding deterministic Nash equilibrium for a general congestion game is hard, but it might
be easier in some cases. For instance, for small number of players, or for finding ε-Nash.


We now present an algorithm for finding an ε-Nash of a congestion game with the following
potential function:
                                           m Xnj
                                    →
                                    −
                                           X
                                  φ( a ) =       cj (nk )
                                                      j=1 k=1

We start from an arbitrary deterministic strategy vector a~0 . At each step we decrease φ with
at least ε. If we can’t, we reached the ε-Nash. Since for each ~a we have
                                             m
                              φ(−
                                →
                                             X
                                a)≤                 nj cj (nj ) ≤ n · m · cmax
                                             j=1
                                                −
                                                →
Then the number of steps is at most φ(εa0 ) , which is limited by n·m·cε max


6.5      Equivalence of potential and congestion game
At the beginning of this lecture we saw that each congestion game admits a potential function
and therefore it is a potential game. We now show the other direction: For each exact
potential game there exists a matching congestion game.
Definition Equivalence of games
  Assuming there are 2 games: < N, (Ai1 )i∈N , (ui1 )i∈N >, < N, (Ai2 )i∈N , (ui2 )i∈N >

   If there is a 1-1 mapping between game 1 and game 2: g i : Ai1 −→ Ai2 such that:
                             ui1 (a1 , . . . , an ) = ui2 (g i (a1 ), . . . , g i (an ))
We say that the games are equivalent.

Theorem 6.12 Each game with exact potential function has equivalent congestion game



    Proof:
Given a game < N, (Ai )i∈N , (ui1 )i∈N > with an exact potential function φ. For simplic-
ity let us assume that ∀i ∈ N : l = |Ai |.
We’ll start building an equivalent congestion game < N, V, (cj )j∈M >.
12                                                                 Lecture 6:Congestion and potential games

 Players: Stay the same

 Resources: V = {0, 1}l·n - Each vector represent a single resource, which gives us a total
    of 2l·n resources.
    We treat each of these vectors as n vectors, each of size l.

 Holding resources: Each player i that play action j, holds the resources with the appro-
                                                              ln
    priate bit set: Bji = {v : vij = 1} (therefore, |Bji | = 22 ).
    We now seek for a cost function on the resources of the new congestion game, such that
the cost ui2 for each player will satisfy: ui2 (a1 , . . . , an ) = ui1 (a1 , . . . , an ) (according to the
definition above).
We define the cost function c for specific resources that will sum to the desired cost for each
player. All other resources will have a cost=0.

Given strategy vector ~a, then for the vector v~ia0 ,j 0 ∈ {0, 1}l∗n such that:
                                                              0
                                                            1 j = ai0
                                         v~ia0 ,j 0 =
                                                            0 otherwise

There is a congestion of exactly n(because it is held by all players). For this vector, we
define: cv~a (k) = φ(−
                     →
                     a ) for k = n and 0 otherwise.
    If these resources were the only ones with non-zero-cost, then each player would have a
cost of φ(~a). Therefore, we have to fix it for each player i, by ui1 (−
                                                                       →
                                                                       a ) − φ(−
                                                                               →
                                                                               a ).
    In order to do this, we find a resource ri ∈ V that only playeri holds. For ~a, we define:
                                                  0
                                               1 i =i
                                                   0       0
                                  rii0 ,j 0 =   0 i 6= i, j ∈ ai0
                                                1 Otherwise
                                              

Meaning: ri is 1 anywhere, except at the locations corresponding to the actions of the rest
of the players
The cost we define for these resources are:

                                          cri (1) = ui (−
                                                        →
                                                        a ) − φ(−
                                                                →
                                                                a)

We have to show that cri (1) is well defined for player i. That is, that it doesn’t change if
the player changes it’s action. We do it by using the fact that φ is an exact potential, and
therefore, for actions ai , bi of player i:

                          ui1 (ai , a−i ) − φ(ai , a−i ) = ui1 (bi , a−i ) − φ(bi , a−i )

                        ⇒ ui1 (ai , a−i ) − ui (bi , a−i ) = φ(ai , a−i ) − φ(bi , a−i )
6.6. BIBLIOGRAPHY                                                                        13

                                   ⇒ ∆ui1 (ai → bi ) = ∆φ(ai → bi )
                            ⇒ ∆cri = ∆ui1 (ai → bi ) − ∆φ(ai → bi ) = 0


All other resources have cost=0.

The cost Pof player i:
u2 (~a) = j∈ai cj (nj (~a)) = cv~a (n) + cri (1) = φ(~a) + ui (~a) − φ(~a) = ui (~a)
 i



Therefore, by the definition above, the potential game is equivalent to the congestion game
we’ve built.

   Notice, that the number of resources is exponential in this representation. That means
that a general potential game might be much harder then a congestion game.
                                                                                       


6.6       Bibliography
[1] The Complexity of Pure Nash Equilibria, A. Fabrikant, C. Papadimitriou, K. Talawar
[2] Potential Games, D. Monderer, L. Shapley, 1994
[3] How Easy Is Local Search?, D. Johnson, C. Papadimitriou, M. Yannakakis, 2004, http://faculty.cs.tam
  Computational Game Theory                                  Spring Semester, 2003/4

                                  Lecture 7: May 4
  Lecturer: Yishay Mansour                              Scribe: Gur Yaari, Idan Szpektor




7.1     Extensive Games with Perfect Information
An extensive game is a detailed description of the sequential structure of the decision prob-
lems encountered by the players in strategic situation. There is perfect information in such
a game if each player, when making any decision, is perfectly informed of all the events that
have previously occurred.



7.1.1    Definitions
Definition An extensive game with perfect information hN, H, P, Ui i has the fol-
lowing components:

   • A set of N players

   • A set H of sequences (finite or infinite). Each element of H is a history; each compo-
     nent of a history is an action taken by a player.

   • P is the player function, P (h) being the player who takes an action after the history
     h.

   • Payoff function Ui , i ∈ N

   After any history h player P (h) chooses an action from the set A(h) = {a : (h, a) ∈ H}.
The empty history is the starting point of the game.


Example
Two players want two identical objects. One of them propose an allocation which the other
either accepts or rejects. Both players are reasonable.
In this representation each node corresponds to a history and any edge corresponds to an
action.

                                             1
2                                                                                         Lecture 7: May 4




    Figure 7.1: An extensive game, allocating two identical objects between two people


    • H = {∅, (2, 0), (1, 1), (0, 2), ((0, 2), y), ((2, 0), n), ((1, 1), y), ((1, 1), n), ((0, 2), y), ((0, 2), n)}

    • P (∅) = 1 and P ((2, 0)) = P ((1, 1)) = P ((0, 2)) = 2


7.1.2      Strategy
Definition A strategy of player i ∈ N in an extensive game hN, H, P, Ui i is a function
that assigns an action in A(h) to each history h ∈ H for which P (h) = i
A strategy specifies the action chosen by a player for every history after which it is her turn
to move, even for histories that , if the strategy is followed, are never reached.


Example
In the game shown in figure 7.2, the strategies of the first player S1 = {AE, AF, BE, BF },
i.e. her strategy specifies an action after the history (A, C), even if she chooses B at the
beginning of the game.
One can transform an extensive game with perfect information to a normal game by setting
all the possible histories as the possible choices for a normal game.



7.1.3      Nash Equilibrium
Definition A Nash equilibrium of an extensive game with perfect information
hN, H, P, Ui i is a strategy profile s∗ = (si )i∈N such that for every player i ∈ N and for every
Extensive Games with Perfect Information                                                  3




     Figure 7.2: An extensive game in which player 1 moves before and after player 2


strategy s we have Ui (s∗ ) ≥ Ui (s)



Example




                           Figure 7.3: Two players extensive game


    The game has two Nash equilibria: (A, R) and (B, L) with payoff (2, 1) and (1, 2). The
strategy profile (B, L) is a Nash equilibrium because given that player 2 chooses L, it is
optimal for player 1 to choose B at the beginning. (B, R) is not a Nash equilibrium since
then player one prefer to choose A. Player 2’s choice L is a ”threat” if player 1 chooses A.
If player 2 chooses R, then player 1 prefer A since her payoff increases.

7.1.4     Subgame perfect Equilibrium
Definition     The subgame of the extensive game with perfect information Γ =
4                                                                                    Lecture 7: May 4

hN, H, P, Ui i that follows the history h is the extensive game Γ(h) = hN, H|h , P |h , Ui |h i
where H|h is the set of sequences h0 of actions for which (h, h0) ∈ H.

Definition A subgame perfect equilibrium of an extensive game with perfect in-
formation hN, H, P, Ui i is a strategy profile s∗ such that for every player i ∈ N and every
history h ∈ H for which P (h) = i we have Ui (s∗ |h ) ≥ Ui (s|h ) for every strategy si of player
i in the subgame Γ(h)


Lemma 7.1 The strategy profile s∗ is a subgame perfect equilibrium if and only if for every
player i ∈ N and every history h ∈ H for which P (h) = i and for every ai ∈ Ai (h) exists
Ui (s∗ |h ) ≥ Ui (s∗−i |h , si ) such that si differs from s∗i |h only in the action ai after the history
h.
   Proof: If s∗ is a subgame perfect equilibrium then it satisfies the condition. Now suppose
there is a history h which player P (h) should change her action. Let h be the longest history
as above. For P (h) = i she can change to ai ∈ Ai (h) and increases her payoff. Thus s∗ is
not a subgame perfect equilibrium.                                                          

Theorem 7.2 Every extensive game with perfect information has a subgame perfect equilib-
rium.

   Proof:We will use a backwards induction procedure. We start with the leaves and walk
up through the tree. In every vertex we choose the best action (Best Response). By Lemma
?? this profile is a subgame perfect equilibrium.                                      

The Chain-Store Game




                 Figure 7.4: Player’s choices in city k in the chain-store game


   A chain-store (player CS) has branches in K cities. In each city k there is a single
competitor, player k. In each period one of the potential competitors decides whether or
7.2. REPEATED GAMES                                                                         5

not to compete. If player k decides to compete then the chain-store can either fight (F ) or
cooperate (C). If challenged in any given city the chain-store prefers to cooperate rather
then fight, but obtains the highest payoff if there is no entry. Each potential competitor is
better off staying out than entering and being fought, but obtains the highest payoff when
it enters and the chain-store is cooperative.
The game has a multitude of Nash equilibria: (Out, F ) or (In, C).
The game has a unique subgame perfect equilibrium: every challenger chooses In and
the chain-store always chooses C.


7.2     Repeated Games
The idea behind repeated games is that if we let the players play the same game a couple of
times, they could get to different equilibria than those of a Nash Equilibrium of a one single
round game. For example, we would like to achieve cooperation in the Prisoner’s Dilemma
game.

7.2.1    Finitely Repeated Games
Lets look again at the Prisoner’s Dilemma game:

                                            C      D
                                      C   (3, 3) (0, 4)
                                      D   (4, 0) (1, 1)



Claim 7.3 In a repeated game of T steps, where T is a final number, the only Nash Equi-
librium is to play (D,D) in all T steps.

   Proof: In the last step, both players will play D, since otherwise at least one of the
players would want to change her decision in order to improve her benefit. Now, using
induction, if both players played the last i steps (D,D), then the same reason will hold for
the i − 1 step.                                                                           
   We shall look now at a modified Prisoner’s Dilemma game:

Claim 7.4 In the finite T steps modified game, there is a subgame perfect equilibrium for
which the outcome is (C,C) in every step but the last three, in which it is (D,D).

   Proof: The strategy chosen by the first player should be to play T − 3 times C and then
the last 3 times to play D. However, if the second player has played differently than this
6                                                                               Lecture 7: May 4

                                          C      D        E
                                    C   (3, 3) (0, 4) (0, 0)
                                    D   (4, 0) (1, 1) (0, 0)
                                    E   (0, 0) (0, 0) ( 21 , 21 )



strategy, we will play E for the rest of the steps. Since we stop cooperating at the T − 2
step, its enough to see if the other player has played differently at the T − 3 step. Here are
the two possible outcomes starting from the T − 3 step:
Playing according to the strategy will yield (C,C) (D,D) (D,D) (D,D). The total payoff if
these steps for the second player is 3 + 1 + 1 + 1 = 6.
If the second player will change her strategy, the best moves that can be made are (C,D)
(E,E) (E,E) (E,E). The total payoff for the second player is 4 + 12 + 21 + 12 = 5 12 .
As we can see playing differently than the stated strategy will yield less profit for the deviating
player. Thus it is best to play the proposed strategy by both players.                           
                                                                           6
    The average payoff in this game is (3(T − 3) + 3)/T which is 3 − T . This payoff is close
to 3 which is the payoff of repeated cooperation.


7.2.2     Infinitely Repeated Games
There are several ways to look at the payoff of a player in an infinitely repeated game, a
game that is repeated an infinite number of steps. We shall look at an N players game G
with a payoff function ~u, where ui is the payoff function of player i. We define uit as the
payoff of player i at step t.
Definition The average payoff of a game G is the limit of the average payoff of the first
T steps:
1
  ( Tt=1 uit ) →T →∞ ui
   P
T

DefinitionPThe finite payoff of a game G is the sum of the payoff of the first H steps of
the game: H     i
           t=1 ut

Definition The discount   payoff of a game G is the weighted sum of the payoff of the
steps of the game: ∞    i
                  P
                      u
                   t=1 t

   In the rest of the document when we refer to the payoff of an infinitely repeated game,
we shall mean an average payoff ui .
Definition The payoff profile of an infinitely repeated game G is the payoff vector w,   ~
where wi is the payoff of player i. A payoff profile w
                                                     ~ is feasible if there are βa for each
Repeated Games                                                                                 7
                      P                          P     βa
outcome a ∈ A, K =       a∈A βa , such that w
                                            ~=     a∈A K ~u(a).

Definition The minimax payoff of player i in a single step is: vi = mina−i ∈A−i maxai ∈Ai ui (a−i , ai )


Claim 7.5 In every Nash Equilibrium of a single game, the payoff of player i is at least vi .

   Proof: If a player has a smaller payoff than vi then by the definition of the minimax
payment, there is a different strategy that she can play in order to profit at least vi . 
Definition A payoff profile w ~ is enforceable if ∀i∈N vi ≤ wi . A payoff profile is strictly
enforceable if ∀i∈N vi < wi .

Theorem 7.6 Every feasible enforceable payoff profile w
                                                      ~ in an infinitely repeated game G is
a Nash Equilibrium with an average payoff.

    Proof: We will describe a strategy that is Nash Equilibrium     with the payoff
                                                                                  P w.~
                                                                             ~ = a∈A βKa ~u(a).
                                                        P
      ~ is feasible there are βa for each a ∈ A, K = a∈A βa , such that w
Since w
We shall assume that ∀a∈A βa ∈ N.
The strategy of each player is to play cycles of K steps, going over all the possible outcomes
a ∈ A in an ordered list and playing her outcome in a βa times. If player i deviates from this
strategy, the rest of the players will change to a new strategy P−i that enforces the payoff of
player i to be at most the minimax payoff vi .
Thus, if a player i deviates from the main strategy, her payoff will be vi . which is not better
than her payoff in w.~ Because each deviation will not improve the payoff of player i, w  ~ is a
Nash Equilibrium.                                                                             

Theorem 7.7 Every feasible strictly enforceable payoff profile w
                                                               ~ in an infinitely repeated
game G has a Subgame Perfect Equilibrium with an average payoff.

   Proof: We will describe a strategy that is Subgame Perfect Equilibrium with the payoff
w.
~
We shall use the same cyclic strategy as in the previous theorem, where all the players play
the outcome a for βa steps. If a player deviates from the strategy, the other players will
punish her but only in a finite number of steps. At the end of the punishing steps all players
will resume to play the cyclic strategy.
More specifically, at the end of each K steps cycle, the players will check if one of the
players has deviated from the cyclic strategy. If a player, let say player j, has indeed played
differently, the other players will play, for m∗ steps, the minimax strategy P−j that will
enforce a payoff of at most vj for player j, where m∗ is chosen as follows:
                                                                 0
We mark player j’s strategy in each step t of the last cycle as ajt . The maximal payoff benefit
8                                                                                   Lecture 7: May 4

                                                                       0
for player j out of the steps in the cycle is g ∗ = maxat [uj (at−j , ajt ) − uj (at )], where at ∈ A is
the expected outcome in step t of the K steps. We would like to get Kg ∗ + m∗ vj < m∗ wj
in order to make the punishment worthwhile. However, since w           ~ is strictly enforceable, we
                                                                 ∗
know that vj < wj and so there exist m∗ such that 0 < wKg     j −vj
                                                                     <  m∗ .
Playing the punishment strategy for m∗ steps will yield a strictly smaller payoff for player j
than playing the cyclic strategy without deviation.                                                   


7.3      Bounded Rationality
We have seen that in a repeated Prisoner’s Dilemma game of N rounds there is no coopera-
tion. A way to circumvent this problem is to assume that the players have limited resources.
This kind of player is said to have Bounded Rationality.
    A Bounded Rationality player is an automata with:

S - the state set.

A - the actions.

δ : S × A → S - the state transfer function.

f : S → A - the actions function.

S0 - the starting state.

   We assume that the automata is deterministic and that in each state only one action is
chosen. A stochastic strategy is to randomly choose one automata from a set of deterministic
automatas.

7.3.1     Tit for Tat
The Tit for Tat strategy (TfT) for the repeated Prisoner’s Dilemma game will play in the
next round what the opponent played in the last round (see figure ??).

Theorem 7.8 The TfT strategy is a Nash Equilibrium if the opponents has at most N − 1
states while the game is of N rounds.

   Proof: Any diversion of the opponent from the cooperation action C for k > 0 rounds,
playing D, will yield a profit of 4 + 1(k − 1) + 0δ for the opponent. On the other hand, if
a cooperation is kept, the opponent’s profit is 3k + 3δ. Where δ is 1 when the diversion is
not at the end of the game (i.e. there are more rounds afterwards) and 0 at the end of the
game. If δ is 1, the next round the opponent will play C, she will profit 0, while profiting 3
Bounded Rationality                                                                           9




                    Figure 7.5: The automata of the Tit for Tat strategy


if a cooperation was maintained. This means that in the middle of the game the opponent
will always prefer to cooperate since it has a bigger profit, 3k + 3 > 3 + k. The problem is at
the end of the game. While k > 1 it is still more profitable to cooperate, since 3k > 3 + k.
However when k is 1, it is better to defect, meaning that the only time that it is better to
defect is in the last round.
    If the opponent has an automata of at most N − 1 states then for any action series of
length N − 1 the automata will return to an already visited state, arriving at a cycle. If until
then the automata did not play D, it will never play D. However, if it did play D in one of
the first N − 1 rounds the opponent will gain less than playing a full cooperation. Thus, the
only Nash Equilibrium for at most N − 1 states automata is to play C constantly.
    Since this logic is true for any kind of at most N − 1 states automata, it is also true for
a stochastic strategy over a set of such automatas.                                          

7.3.2     Bounded Prisoner’s Dilemma
We have seen an example for a simple bounded rationality strategy for the Prisoner’s
Dilemma game that will yield a cooperation in some conditions. The next step is to an-
alyze any general bounded rationality strategy for that game, described by a final automata,
and find what are the conditions that will lead to a cooperation between two players using
these strategies in an N rounds game.
Theorem 7.9 If, in a Repeated Prisoner’s Dilemma with N rounds, both players have an
automata with at least 2N −1 states then the only Equilibrium is the one is which both players
play (D,D) in all rounds.
   Proof: Given an opponent, that optionally can play stochastically, it is possible to play
an optimal strategy as follows:
10                                                                          Lecture 7: May 4

    We shall build a game history tree of depth N . At each node we shall calculate the
distribution of the optimal action using dynamic programming, starting from the leafs and
up the tree. Based on the profits of all the possible paths from a specific node to the leafs,
we can choose the best response at every node.
    The chosen optimal startegy can be encoded in a full binary tree of depth N −1, describing
the first N − 1 rounds, and one node for the last round (any optimal automata plays D in
the last stage for every history of nonzero probability), summing to 2N −1 states.
    As this is the optimal unrestricted strategy, the only Equilibrium is to play (D,D) at
each round, as shown earlier.                                                               

Theorem 7.10 For a Repeated Prisoner’s Dilemma with N rounds, when both players have
automatas with at most 21 N states (when it is possible to change to a different automata
with a related size boundary 22 N ), there exists an Equilibrium with a profit of 3 − 3 .
  Computational Game Theory                                     Spring Semester, 2003/4

                               Lecture 8: May 11, 2004
  Lecturer: Yishay Mansour                              Scribe: Eitan Yaffe, Noa Bar-Yosef




8.1     Regret
Our goal is to build a strategy with good performance when dealing with repeated games.
Let us start with a simple model of regret.


8.2     Basic Model
Assuming that the opponent has the same stochastic strategy at each step, how should we
play?
Let’s formalize this:

   • N actions

   • For each step t, we choose a distribution pt over the N actions

   • For each step, we have a loss lt where lt (i) ∈ [0, 1] is the loss from action i
                   PN    t    t
   • Our loss is    i=1 p (i)l (i)


Note that we do not rely on the number of opponents or on their actions. Once we assume
that the opponent is constant and does not depend on us, then the opponent’s influence is
only on the cost of each action.
Our goals:

   • Bring the loss to a minimum

   • Choose the best action (the opponent does not change throughout time)


8.3     A Greedy Algorithm
One way to implement our goal is by using the greedy algorithm:

                                               1
2                                                                                Lecture 8: May 11, 2004

    • For the t + 1 step, we will calculate for each i:
                                                  t
                                                  X
                                          Lti =         lk (i) = Lt−1
                                                                  i   + lt (i)
                                                  k=1

    • For the t + 1 step, we will chose the best action that we had up until now:
                                                  at+1 = arg min Lti
                                                                  i

    We can see that this is not the optimal algorithm, because although the history gives us
a good hint regarding the probability of each action, this does not necessarily give the best
action, but rather an approximation of the best action.
To simplify, let’s assume that lt (i) ∈ {0, 1} and define pi = P r[lt (i) = 1] (the probability of
the loss of action i to be 1). The best action is a∗ = arg mini pi . Thus the average loss is p∗
for each step. And so we get that the optimal loss for T steps is p∗ T .
                                                P
The loss of the Greedy algorithm is LTG = Tk=1 Greedy k . Define R (The regret) to be:
R = LTG − p∗ T . We get that the average of R is:
                                                  T
                                                  X
                                      E[R] =            E[Greedy k ] − p∗
                                                  k=1

We analyze this by looking at each step k, separately. When k is large enough, it converges
to p∗ .
                                                  Lk
The average we get for the i-th action is: p̂ki = ki .
Thus, using the Chernoff bound, we get:
                                                                       2
                                        P r[|pi − p̂ki | ≥ ²] ≤ e−2² k
If for all the actions P r[|pi − p̂ki |] ≤ ², then:
                                                                            2
                                    E[Greedy k ] − p∗ ≤ 2² + N e−2² k
             q                         q
Taking ² = ln kN k , results in: O( ln N
                                       k
                                         T
                                           )
Now we just need to sum up all the losses:
                              s
                        T
                        X                 √       Z T          √
                                  ln N T               1
                                         ≈ ln N T     √ dk = O( T ln N T )
                        k=1          k             1    k

Meaning that the extra loss (the regret) is:
                                                   √
                                          E[R] = O( T ln N T )

    Note that this bound is not tight.
8.4. EXTERNAL REGRET                                                                            3

8.4      External Regret
In the above analysis we assumed that the system does not change throughout time. We
would like to change this assumption, but this means we must change our analysis (e.g. we
cannot use p∗ since it changes over time and isn’t defined). First we shall consider comparing
to the performance of OPT. This turns out to be a not a very informative measure. Then
we shall introduce the External Regret measure. Consider the following example:


8.4.1     ”Bad” example
On each step OP T chooses a random i ∈ N such that: lj6t =i (j) = 1 and lt (i) = 0. We can see
that the average loss for any online algorithm is at least 1 − N1 (on average), while OP T ’s
loss is 0.



8.4.2     Definition
Instead of comparing to OPT we can compare our performance to the performance of the
single best action: Lmin = mini LTi . In general, for any Algorithm (or Hypothesis) denoted
                                                                          P
H, we define its loss on step t to be LtH and its overall loss to be LTH = Tt=1 LtH . The External
Regret is defined as follows:
                                       Rext = LTH − Lmin


8.4.3     Analyzing the greedy algorithm
The loss of the Greedy algorithm over T steps is LTG . Reducing Rext means coming as close
as possible to Lmin .


Claim 8.1 LTG ≤ N (Lmin + 1)


   Proof: For simplicity we assume that lt (i) ∈ {0, 1}. At step k, let bk = mini Lki and
nk = |{i : Lki = bk }|. We define a lexicographic order over the pairs (bk , nk ). On each step
that Greedy losses 1, either bk increases by 1 or nk decreases by 1. Note that nk can decrease
only N − 1 times, consecutively. Therefore the loss of Greedy is bounded by bk N .            2
The problem of deterministic algorithms is that we can always create a large loss. The
following (bad) example, is true for every deterministic algorithm.
4                                                                      Lecture 8: May 11, 2004

8.4.4     Example
At the k-th step, the opponent’s algorithm chooses action ak . The loss is lk (ak ) = 1 for
action k and for the rest of the actions it is 0. The loss of the online deterministic algorithm
                                                        T
is thus T , while there exists an action whose loss is N  . (Since the sums of 1’s is T, then the
            T
average is N ).



8.4.5     A stochastic strategy
                                                                        √
We will examine a strategy that has an (expected) external regret of O( Lmax log N +log N ).
What we shall do is build a distribution over the actions, dependant on the Regret.
                                                                          P
           t
We define lH                                                          t
               as the loss of the online algorithm in the t-th step: lH = N     t    t
                                                                           i=1 p (i)l (i) and
       P T
RaT = t=1 [lHt
                − lt (a)]. We also define a ”pseudo-regret” where we multiply our loss by
0 < β < 1:
                                               T
                                               X
                                      R˜aT =            t
                                                     [βlH − lt (a)]
                                               t=1

It is easy to see that Ra − R̃a is small for β ≈ 1. We now build the exponential weights that
are dependant on R̃a :
                                              wa0 = 1
                                                           t       t
                                       wat+1 = wat β l (a)−βlH
According to these weights, we can define the probabilities by normalizing:
                                                       X
                                         W t+1 =               wat+1
                                                      a∈N

                                                          wat+1
                                           pt+1
                                            a   =
                                                          W t+1
                   P        t
Claim 8.2 0 ≤          a∈N wa ≤ N

In other words, all the weights are positive and do not ”run off” to very large sizes.
The proof of this claim will appear shortly, but in the meanwhile until then we will assume
its correctness.
Using the claim, we get that for each action a:
                                               T      T
                                    waT = β La −βLH = β −R̃ ≤ N
               T       T
Comparing β La −βLH ≤ N , and taking ln, results in:

                                     (LTa − βLTH ) ln β ≤ ln N
External Regret                                                                         5

Dividing by ln(β):
                                                             ln N
                                      LTa − βLTH ≥ −
                                                             ln β1

                                         LTa   ln N
                                             +         ≥ LTH
                                         β     β ln β1
Choosing β = 1 − γ, ln β1 ≈ γ,

                                          γ          ln N
                                 LTa +       LTa + 2      ≥ LTH
                                         1−γ           γ
           γ
Note that 1−γ LTa + 2 lnγN is basically the Regret. Defining Lmax = maxa LTa we have:

                                                         ln N
                                            γLmax =
                                                           γ
                                                 s
                                                     ln N   1
                                           γ=             <
                                                     Lmax   2

                                             q
                              ⇒ R = O( ln N · Lmax + log N )


In each step, we incur a loss of at most 1, thus Lmax ≤ T .
In each step, the opponent chooses some kind of loss that can be dependant on our distri-
bution. Nevertheless, we are able to approach quite well, as we can see:
                                                  √
                                  LTH ≤ Lmin + O( T ln N )

where Lmin = mina LTa .

   We shall now proceed to prove our above claim about our weights that states that:
                                                 X
                                           0≤          wat ≤ N
                                                 a∈N

                          P
  Proof: Trivially, 0 ≤ a∈N wat .
We are left to see that the weights are in fact bounded:
                                     X                       X wat
                               t
                              lH =         P t (a)lt (a) =         t
                                                                       lt (a)
                                     a∈N                     a∈N W
6                                                                                        Lecture 8: May 11, 2004
                                                           X
                                              W t lH
                                                   t
                                                     =           wat lt (a)                                (8.1)
                                                           a∈N

We can give a linear bound for the function β x (relying on it’s convexity) for any β ∈ [0, 1].
For x ∈ [0, 1] we know that β x ≤ 1 − (1 − β)x. For x ∈ [−1, 0] we get β x ≤ 1 − 1−β
                                                                                   β
                                                                                     |x|.
                           t+1
Now, by the definition of wa :
                                        X               X              t      t
                                              wat+1 =         wat · β l (a)−βlH
                                        a∈N             a∈N


By the above properties of beta we get the bound:
                                  X
                              ≤         wat (1 − (1 − β)lt (a))(1 + (1 − β)lH
                                                                            t
                                                                              )
                                  a∈N


By opening the parenthesis and discarding (1 − β)lt (a)(1 − β)lH
                                                               t
                                                                 since it is negative (the
product of positive and negative)
                        X                        X                                X
                    ≤         wat − (1 − β)[          wat · lt (a)] + (1 − β)[          wat · lH
                                                                                               t
                                                                                                 ]
                        a∈N                     a∈N                               a∈N


Using equation (8.1):
                                                      X
                                                 ≤         wat ≤ N
                                                     a∈N

                                                                                                              2


8.4.6     Example
We have shown a probabilistic algorithm whose bound is relatively tight. An example for
the tightness of its bound follows:
Let the loss of one action be 12 − ² and the loss of the rest of the actions be 12 . Taking ² = √1T
and randomly
      √         choosing between these two actions, will not be able to incur a loss of less
than T the overall loss.
   Up until now we’ve discussed External Regret whereas:

                                               Rext = LTH − Lmin

i.e. Our loss is not measured according to our algorithm, but rather in relation to each
separate action taken. We can easily define other measures...
8.5. CORRELATED EQUILIBRIUM                                                                 7

8.5     Correlated Equilibrium
   • Game with M players

   • Ai - N actions of player i

   • S i - The loss function of player i:

                                       S i : Ai × (×Aj ) → [0, 1]

Definition L et Q be a distribution over the joint actions (×Ai ), such that for each player
i and for each action α ∈ Ai :

                       Ea∼Q [S i (ai , a−i )|ai = α] ≤ E[S i (b, a−i )|ai = α]

In other words, this means that given an action ai from the distribution Q to player i, then
this is also his best response to play it!
We can formalize this also in a different manner:
Let us define the function F : Ai → Ai , then Q is a Correlated Equilibrium if for each player
i and for each F we have:

                          Ea∼Q [S i (ai , a−i )] ≤ Ea∼Q [S i (F (ai ), a−i )]

Furthermore we will now define that Q is Epsilon-Correlated when for each player i and for
each F :
                      Ea∼Q [S i (ai , a−i )] ≤ Ea∼Q [S i (F (ai ), a−i )] + ²
This means that F ”exchanges” the actions of i according to the suggestions of Q. We bound
the gain from using F by ².

   We define the Swap Regret to be:
                                                       T
                                                       X
                    Rswap = max{LH − LH,F } =                pt (i)[lt (i) − lt (F (i))]
                                 F
                                                       t=1

Claim 8.3 Let us assume a game with M players where each player plays a strategy that
has Rswap ≤ R. Let p be the empirical distribution at time [1, T ] (This means that each step
has a vector of actions and for each one of these vectors we will give a probability). Then:
  1. The average loss of the player according to p is his loss in the ”game”.

  2. p is ²-correlated for ² = R
                               T
                                 . This is true because every player can gain no more than R
     by using F.
8                                                                              Lecture 8: May 11, 2004

8.5.1      Internal Regret
We also define Internal Regret: For ai , aj ∈ A, we swap ai → aj . (We swap only between a
pair of actions).


8.5.2      Reduction of External Regret to Swap Regret


                                       q1
                                A1
                                       l1

                                       q2                                  p
                                A2
                                        l2


                                                                           l

                                       qN
                                AN
                                        lN




             Figure 8.1: Reduction of External Regret to Swap Regret algorithm

    Having already discussed Rext , we now present a reduction from Rext to Rsw :
For each action i, there will be an algorithm Ai . Intuitively, the goal of Ai is to avoid regret
by replacing action i with any other action. We construct an algorithm which combines
N algorithms, as shown in figure 8.1. Each algorithm guarantees us of a small Rext . Each
algorithm outputs a vector of what it would like to play, and we need to return to each
separate algorithm its loss. We need to wrap up these algorithms in some sort of interface
which will calculate the distribution and return the loss. Thus we have two important actions
to do:

    1. Calculate pt from q~1t , ..., q~N
                                       t

       For this we will choose a distribution p such that: p = p · Q where q~i is the i-th row of
       Q. Specifically:
                                                        N
                                                        X
                                             ∀j ptj =         pti · qi,j
                                                                     t

                                                        i=1

       This means that choosing an action j according to p is equivalent to choosing an
       algorithm Ai according to p, and then choosing action j according to Ai .
Correlated Equilibrium                                                                                                        9

  2. ”Distribute” the loss of ~lt to l~1t , ..., l~N
                                                   t
                                                     .
                    ~t                   t ~t
     Upon receiving l , we return pi · l to Ai . The loss that Ai ”sees” is:

                                                       (pti · ~lt )q~it = pti (q~it · ~lt )

     Thus, for each Ai and for each action j we have a bound on the regret:

                                              T
                                              X                           T
                                                                          X
                                                    pti (q~it · ~lt ) ≤         pti · lt (j) + Ri
                                              t=1                         t=1


     (Ri may be dependant on T , N , or a loss as before, but it is not dependant on the
     game itself.)
     When we sum up the losses, we get that for any point in time:

                                        N
                                        X
                                              pti (q~it · ~lt ) = pt · Q · lt = pt · lt = lH
                                                                                           t

                                        i=1


     Therefore we get in total:

                     N X
                     X T                               T
                                                       X                         N X
                                                                                 X T                               N
                                                                                                                   X
                          [     pti (q~it · ~lt )] =          t
                                                             lH = LTH ≤                       pti · lt (F (i)) +         Ri
                     i=1 t=1                           t=1                       i=1 t=1                           i=1

                PN PT              t    t           T
     However,       i=1       t=1 pi · l (F (i)) = LH,F and so this results in:


                                                                                  N
                                                                                  X
                                                        LTH ≤ LTH,F +                   Ri
                                                                                  i=1

                                                  √
     Recall that we previously proved that: R = O( T log N + log N ) so by summing over
     all Ri we have that:
                                                                 q
                                           Rsw = O(N T log N + N log N )

     Thus,
                                                             q
                                              R = O( Lmaxi log N + log N )

     And finally,
                                                                    q
                                      LH ≤ LTH,F + O( Lmaxi log N + log N )
                               P                                              T
     Since in our case,            Lmaxi ≤ T , the worst case is when Lmaxi = N .
10                                                                  Lecture 8: May 11, 2004

     Prior knowledge of Lmax

     We need to know Lmaxi in order to define Ai . We will change our previous algorithm
     for External Regret so that it won’t need to have Lmax beforehand.
     We start with Lmax = 1, and each time we reach the bound, we multiply Lmax by 2
     and start over again.
     We now have that the regret is:
                 logX
                    Lmax     q                       q
                           O( 2j log N + log N ) = O( Lmax log N + log T log N )
                  j=1

     It is easy to see that our new bound is a bit worse than the previous, but here we do
     not need to rely on knowing Lmax .
                                                                              T
     Using the new algorithms, we get that the worst case is (still): Lmaxi = N and thus:

                             LH ≤ LH,F + O(T N log N + N log N log T )
  Computational Game Theory                                    Spring Semester, 2003/4

                  Lecture 9: Dynamics in Load Balancing
  Lecturer: Yishay Mansour                            Scribe: Anat Axelrod, Eran Werner




9.1       Lecture Overview
In this lecture we consider dynamics of a load balancing system. We study the number
of steps required to reach pure Nash equilibrium in a system of ”selfish” and greedy
players (jobs). We are interested in the convergence time to Nash equilibrium, rather
than the quality of the allocation. We consider a variety of load balancing models
including identical, restricted, related and unrelated machines. We compare different
scheduling strategies such as allowing the largest job to move first (or smallest weight
first) and compare their effect on the convergence time. Note that the discussion can
be easily extended to the domain of routing problems.
The lecture is divided into two major sections. In the first we deal with migration
policies that allow a single user to migrate at a time. In the second part we discuss
the case where users migrate concurrently.
For the former part we consider two settings:

  1. An empty system where jobs are added gradually. We will show an upper bound
     of O(n) for this case using the Max Weight First policy.

  2. A system at an arbitrary initial state. Here we begin by showing that any
     scheduler will converge, even in the unrelated and restricted assignment model.
     Afterwards, we give special treatment to the case of identical machines where
     we show both an upper bound of O(n) using Max Weight First and a lower
     bound of Ω(n2 ), on the other hand, using Min Weight First.

When users are allowed to migrate concurrently from overloaded to underloaded ma-
chines, we present two algorithms for the special setting of two identical machines
and we conclude by showing a general algorithm for multiple identical machines.


9.2       The Model - Formal Definition
In our load balancing scenario there are m parallel machines and n independent jobs.
At each step each job is assigned to exactly one machine.

   • Si - The speed of machine Mi . Si ∈ [1, Smax ] where the speeds are normalized
     s.t. Smin = 1 and the maximum speed is Smax . When considering the identical
     or unrelated machines models, Si = 1 for 1 ≤ i ≤ m.

                                           1
2                                            Lecture 9: Dynamics in Load Balancing

    • Wj - The weight of job j. We will mainly deal with the related and identical
      machine models. When generalizing to the unrelated machine models we denote
      wi,j as the weight of job j when assigned on machine Mi .

    • Bi (t) - The set of jobs on machine Mi at time t.

    • Li (t) - The load of machine M
                                   Pi at time t. This is the sum of the weights of the
      jobs that chose Mi . Li (t) = j∈Bi (t) Wj .

    • Ti (t) - The normalized load on machine Mi at time t, obtained by dividing the
      load of the machine with its speed. Ti (t) = LSi (t)
                                                       i


    • U (t) - The set of jobs that may decrease their experienced load at time t by
      migrating to another machine. A job wishes to migrate if and only if its cost
      (load) will strictly reduce after the migration. Note that the users (jobs) are
      considered to be myopic i.e. at each step they wish only to improve their state
      regardless of future consequences. We examine arbitrary improvement steps,
      and when the job selects a machine which minimizes its cost it is said to have
      played the best response policy.

    • The Scheduler - Before migrating between machines a job needs to receive
      a grant from the centralized scheduler. The scheduler does not influence the
      selection of the target machine but merely controls the order in which the jobs
      migrate.

    • Scheduling Strategies - The input at time t is the set of jobs U (t) and the
      output is a job j ∈ U (t) which is allowed to migrate at time t. When only one
      job is allowed to migrate at a time it is easy to define some natural selecting
      strategies, for example:

        – Max Weight First
        – Min Weight First
        – Arbitrary Job Next

    • Pure Nash Equilibrium - A state in which no job can benefit from unilat-
      erally migrating to another machine. For every user j on machine Mi it holds
      that ∀k Ti ≤ Tk + wk,j .


9.2.1      Dynamics of Migration
We consider two models in which jobs are allowed to migrate in order to improve their
costs. First, we examine a scenario where at each step a single user (job), selected by
the scheduler from the group of ”unsatisfied” jobs, is allowed to move. In the latter
model this group of jobs is allowed to migrate simultaneously.
9.3.   SINGLE MIGRATOR                                                               3

9.3       Single Migrator
We will divide our discussion into two settings:
In 9.3.1 we start from an empty system and gradually add one job at a time.
In 9.3.2 we consider starting from an arbitrary state, then applying the scheduling
policy until the system converges to equilibrium.

9.3.1       Starting from Scratch
Let the jobs enter the system in descending sorted order of weights:
w1 ≥ w2 ≥ ... ≥ wn . When entering the system, each job immediately selects its best
response.
Claim 9.1 The system will remain in Nash equilibrium at each step.
    Proof. By induction on the number of steps.
Trivially, the system is in Nash for the initial step of an empty system.
Assume that it is also in Nash at step j − 1, immediately before wj is added.
w.l.o.g job j selects machine M1 .
Obviously, all jobs on machines other than M1 remain in equilibrium. It is enough
to show that all jobs on M1 are in equilibrium as well. Assume by contradiction
that there exists a job k on M1 which wishes to migrate to machine M2 . Then,
                                                                  w
T1 > T2 + wS2k . Since wj ≤ wk it is also true that T1 > T2 + S2j , contradicting our
assumption that machine M1 was the best response for (and selected by) job j. 2
Food For Thought 1 How would you show an existence of a pure Nash equilibrium
in the unrelated machines model?

9.3.2       Starting from Something
Now the system is initially in an arbitrary state and we seek to reach equilibrium by
a sequence of steps in which only one job, selected by the scheduler, can move. This
model is called Elementary Stepwise System (ESS).


 Unrelated Machines
First we will show that even for the general model of unrelated machines with re-
stricted assignments, convergence to equilibrium is promised. Furthermore, we estab-
lish this result without relying on best response moves but only general improvement
steps. We obtain this result by identifying a potential function and showing that the
potential strictly decreases after each improvement step. Consider the sorted vec-
tor of machine loads. We show that defining a lexicographic order on those sorted
vectors provides us with a potential function. Using lexicographic order, vectors are
compared by their first unequal component. One vector is called lexicographically
larger than the other if its first non equal component is larger than its corresponding
counterpart in the second vector.
4                                                Lecture 9: Dynamics in Load Balancing

Claim 9.2 The sorted lexicographic order of the machine loads decreases when a job
migrates via improvement.

    Proof. Improvement influences only two components of the sorted vector: one
corresponding to the load on the machine that the job has left while the other to the
machine the job has joined. The load on the machine the job joined cannot be higher
than the load it experienced on the machine it had left (otherwise would it have
moved?). Formally, if the job migrated from machine Mi to machine Mj , we have
Li (t) > Lj (t + 1). Additionally, Li (t) > Li (t + 1) since the job had left. Thus, if Li (t)
was the k th component in the sorted vector of loads then the respective component
in the new vector cannot be larger and the new vector is considered lexicographically
smaller.                                                                                    2
Since we have shown that improvement always decreases the potential, this gives us
an upper bound on the convergence time which is equal to the number of different
sorted loads vectors (trivially bounded by the number of configurations) - mn .

Corollary 9.3 For any ESS strategy, the system of unrelated machines with re-
stricted assignments reaches Nash equilibrium in at most mn steps.

This result was obtained for any scheduler. We now wish to investigate how specific
scheduling strategies may give better bounds. Unfortunately, we can provide results
only in more specific models.

    Identical Machines - Upper Bound
In the identical machines model with unrestricted assignments we use the Max Weight
First (MWF) scheduling strategy to establish an upper bound of O(n) on the con-
vergence time. The scheduler always selects a job J(t) = arg maxj∈U (t) {wj }, i.e. the
largest unsatisfied job. We assume that the jobs play their best response.

Claim 9.4 Suppose that a job J has migrated to machine M which is its best response
at time t0 . If J wishes to migrate again at a later time t2 > t0 then another job J 0
such that wJ 0 > wJ must have joined machine M at time t1 , t0 < t1 ≤ t2 .

    Proof. Since J wishes to migrate, one of two things must have happened at some
earlier time t1 :
    1. Job J 0 has moved from machine MJ 0 to a different machine M 0 6= M .

    2. Job J 0 has joined job J at machine M .

    1. Obviously, Job J does not wish to deviate to M 0 since it did not wish to do so
       prior to the move of J 0 , and now the load on M 0 has only increased.
       Fortunately, job J has also no desire to move to MJ 0 even though its load
       decreased. The reason for this is:
       TMJ 0 (t1 − 1) > TM 0 (t1 − 1) + wJ 0 = TM 0 (t1 ) (J 0 shifted from MJ 0 to M 0 ).
       ⇓
9.3.   SINGLE MIGRATOR                                                                     5

       TMJ 0 (t1 ) = TMJ 0 (t1 − 1) − wJ 0 > TM 0 (t1 − 1).
       The resulting load on MJ 0 is higher than the load that was on M 0 at time t1 − 1.
       Since M 0 was not a best response for J at that time MJ 0 certainly isn’t now.

   2. In this case we want to show that J will want to leave M only if wJ 0 > wJ .
      Assume by contradiction that wJ 0 ≤ wJ . Let M 0 be the machine that J wishes to
      move to. Thus, TM (t1 ) = TM (t1 −1)+wJ 0 > TM 0 (t1 −1)+wJ ≥ TM 0 (t1 −1)+wJ 0
      Hence, TM (t1 ) ≥ TM 0 (t1 − 1) + wJ 0 contradicting the assumption that J 0 played
      his best response at time t1 .

                                                                                           2

Theorem 9.5 The Max Weight Job strategy with best response policy, for a system
of identical machines with unrestricted assignments, reaches Nash equilibrium in at
most n steps.

    Proof. By claim 9.4 once a job has migrated to a new machine, it will never leave
it unless a larger job arrives. Since the jobs arrive in descending weight order (MWF)
only smaller jobs may arrive at subsequent steps. Therefore each job stabilizes after
its first migration, and the theorem follows.                                       2

 Identical Machines - Lower Bound
We now present a lower bound using the Min Weight strategy. We demonstrate
a setting with two identical machines and n jobs. Later, we explain the idea for
generalizing the result to m machines.
Consider the following scenario. There are n2 classes of jobs C1 , ..., C n2 . Each class Ck
contains exactly two jobs with weights wk = 3k−1 . Notice that a job in Ck has weight
equal to the total weight of all of the jobs in the first k − 1 classes plus 1. Initially all
jobs are located at the first machine. The scheduling process is divided into phases.
At each phase k all jobs from classes C1 to Ck except one job from Ck move from one
machine to another. Thus, the duration of phase k is 2k − 1. The scheduling consists
of phases n2 , ..., 1, since after each phase the two jobs of the heaviest class are set on
two different machines and the scheduling can be regarded as continuing recursively
with one less class. At equilibrium each machine will occupy exactly one job from
each class. The convergence time is given by the recursive formula:

                                f (r) = f (r − 1) + 2r − 1

for r = n2 and this is clearly Ω(n2 ).
For the general lower bound we have m = k + 1 machines and n jobs. We divide
the jobs into k weight classes of size nk . The weight of a job in class j is chosen such
that it is larger than the sum of all the job
                                            P weights   of earlier classes: if we denote by
wj the weight of a job ∈ Cj then, wj > j−1        n
                                              i=1 k i Initially all jobs from class i are
                                                    w .
assigned to machine i and machine 0 is empty. Applying the Min weight scheduling
consists of phases such that before a job from class k is granted to move all the lighter
6                                                 Lecture 9: Dynamics in Load Balancing

jobs are equally distributed between machines [0, k − 1]. However, as soon as the first
heavy job is allowed to move it causes all of the lighter jobs to shift among the other
machines, not containing a heavy weight job, and this process continues recursively,
as the scheduling is from the lightest job first. This example gives a lower bound of
   (n )k
Ω( 2(k!)
    k
         )

Food For Thought 2 Could you think of a natural scheduling strategy that would
quickly converge to equilibrium in the related (or maybe even unrelated) model ?


9.4        Concurrent Jobs Migration
In this section we examine the setting of n identical users i.e. ∀j wj = 1. For
simplicity we also deal with identical machines i.e. ∀i Si = 1. With contrast to the
previous model, several users can now move concurrently. Consequently, equilibrium
is no longer promised, as the system may oscillate. For example, consider a two ma-
chine setting, where all jobs are initially placed on one of the machines. Since they
all want to migrate at once they will find themselves all in a similar situation but on
the second machine. We overcome this problem by introducing randomization into
the decision if a job should migrate.
The system is at Nash equilibrium at time t if for every pair of machines Mi , Mj it
holds that Li (t) ≤ Lj (t) + 1.

We will divide our discussion into two:
In 9.4.1 we start from the specific case of two identical machines.
In 9.4.2 we extend our discussion and deal with multiple identical machines.


9.4.1        Two Identical Machines
    The Balance Algorithm
First we consider the case of only two identical machines M1 , M2 with load functions
L1 (t), L2 (t) respectively. We use two variables over, under ∈ {M1 , M2 } to identify
at each step which is the more/less loaded machine i.e. its load is above/under the
                 n
average load ( m     or n2 in this case) in the system. Obviously, Lover (t) ≥ Lunder (t). Let
dt = |L1 (t) − L2 (t)|.
The BALANCE algorithm moves every job j ∈ Bover (t) to the other machine with
                  dt
probability 2Lover   (t)
                         . The idea is to achieve an equal expected load on both machines
at the end of each step: E[L1 (t + 1)|L1 (t), L2 (t)] = n2 . So, each job on over moves
                          dt                               dt
with probability 2Lover      (t)
                                 and we get Lover (t) · 2Lover (t)
                                                                   = dt2 expected movements, as
desired.
We would like to show that after expected O(log log n) steps the system will reach an
equilibrium. For the proof we use the following lemma.
9.4.       CONCURRENT JOBS MIGRATION                                                         7

Lemma 9.4.1 (Chernoff ) Let z1 , ..., zn be independent random binary variables
       P                P                      Pn
and Z = i zi , where p = ni=1 E[z
                               n
                                  i]
                                     and p
                                         b = 1
                                             n  i=1 zi . Then,
                                      q
                                           2p ln(1/δ)
                 (1) P [p ≤ pb +                n
                                                      ]   ≥1−δ          p ∈ [0, 1]
                                      q
                                           3p ln(1/δ)
                 (2) P [p ≥ pb −                n
                                                      ]   ≥1−δ          p ∈ [ ln(1/δ)
                                                                                3n
                                                                                      , 1]

                 (3) P [p ≥ pb − 2 ln(1/δ)
                                     n
                                           ]              ≥1−δ          p ∈ [0, ln(1/δ)
                                                                                  3n
                                                                                        ]


Theorem 9.6 The BALANCE algorithm terminates within expected O(ln ln n) steps.

   Proof. Let k be an upper bound on the number of steps of the BALANCE
algorithm until it reaches Nash equilibrium. We divide our proof into two stages:
   1. dt > 3 ln( δ10 )
   2. dt ≤ 3 ln( δ10 )
             δ
where δ 0 = 2k and δ indicates the probability of the algorithm failing to end within k
time steps.
First we show that the first stage terminates with probability 1 − 2δ within O(ln ln n)
                                                          q
steps. By lemma 9.4.1 (2) for every step t ≤ k, dt+1 ≤ 3dt ln( δ10 ) with probability
       0
1 − δ2 : represent each job on over as a binary random variable with P (1) = 2Lover  dt
                                                                                        (t)
                                                                                            .
            Pn E[zi ]                     P
Thus, p = i=1 n = 2Ldover   t
                               and pb = n1 ni=1 zi is the ratio of jobs that were actually
moved in this step.
Since d1 ≤ n we get
                               q
                       dt+1 ≤ 3dt ln( δ10 )

                                  √          q
                              =       dt ·      3 ln( δ10 )
                                  rq                           q
                              ≤            3dt−1 ln( δ10 ) ·    3 ln( δ10 )

                                qp       rq              q
                              =   dt−1 ·    3 ln( δ10 ) · 3 ln( δ10 )

                              :
                                       1
                              ≤ n 2t+1 · 3 ln( δ10 )
                       1
For t = O(ln ln n), n 2t = O(1) and therefore, dt ≤ 3 ln ( δ10 ) and the first stage termi-
nates within O(ln ln(n)) steps. This situation remains with high probability until the
k th step.
8                                                 Lecture 9: Dynamics in Load Balancing

In the second stage exactly d2t jobs will be displaced √
                                                       in one step with probability
O( √ 1 ), so the expected number of steps will be O( log k).
     log(k)
                                                 √
Summing the two stages we have k = O(ln ln n + log k) = O(ln ln n).              2

Unfortunately, the BALANCE algorithm does not assure that players will indeed act
according to their best response at each step. For example, consider the setting in
figure 9.1 at time t. What is the point of view of a single user on over (M1 )? Each
                                                  dt        200
user on M1 will migrate to M2 with probability 2Lover (t)
                                                          = 800 = 14 . Hence, for a single
user on M1 :
     • The expected load on M1 without him is (400 − 1) − 14 (400 − 1) = 300 − 34 .
     • The expected load on M2 is 200 + 41 (400 − 1) = 300 − 14 .
and the user prefers to remain on M1 . This provides an incentive for users to ”cheat”
and deviate from the joint strategy.
We now try to establish an algorithm which prevents such behavior.


                                            1/4




                                     400          200
                                     M1            M2


                                      Figure 9.1:


    The NashTwo Algorithm
Consider any stage before reaching Nash equilibrium where L1 = k +d and L2 = k −d
i.e. dt = 2d. We examine w.l.o.g a single user on L1 . We want to define the probabil-
ity of migration p such that a single user will see an expected identical load on both
machines (when excluding himself):
(L1 − 1)(1 − p) = L2 + (L1 − 1)p
m
p = (L2(L
        1 −L2 )−1
           1 −1)
                      dt −1
                  = 2(L 1 −1)


The NashTwo algorithm moves jobs from over to under with probability p.

Lemma 9.4.2 At every stage Algorithm NashTwo is a Nash migration policy.
9.4.         CONCURRENT JOBS MIGRATION                                                  9

    Proof. Again we compare the loads on the two machines when excluding one
user on the overloaded machine.
                        2d−1
L1 = (k + d − 1)(1 − 2(k+d)−2 ) = n − 21
                                2d−1
L2 = k − d + (k + d − 1)(1 − 2(k+d)−2 ) = n − 12
Therefore, each user on the overloaded machine cannot gain by deviating from the
joint strategy. Users on the underloaded machine, like before, can obviously only lose
by rerouting to the overloaded machine.                                             2

It can be shown (in a different scribe...) that NashTwo converges at a similar rate as
that of BALANCE.

9.4.2           Multiple Identical Machines
In the final subsection we extend the results to multiple identical machines. We seek a
                                                                                     n
goal of dividing the load equally among the machines, i.e. to achieve a load of L = m
which we assume to be an integer value. For each machine Mi , define di (t) = Li (t)−L,
the difference between the current and the average load on machine Mi . Next, for
each time t partition the machines into two disjoint sets,
     • U nder(t) = {Mi |di (t) < 0}

      • Over(t) = {Mi |di (t) ≥ 0}
                     P
We define dt = i∈Over(t) di (t).
Using these definitions the MultipleBALANCE algorithm proceeds as follows. Each
user j on machine Mi ∈ Over(t) determines whether it should move with probability
di (t)
Li (t)
       , and if so, selects its target underloaded machine Mk ∈ U nder(t) with probability
|dk (t)|
  dt
         .

Lemma 9.4.3 (without proof
                      P ) Let Z1 , ..., Zn be an i.i.d random binary variables with
                                                         1√ 1
P (Zi = 1) = p and Z = i Zi . Then, P (Z = dpne) ≥ e             . If pn = q is an
                                                                 2πdpne
                           1
integer then, P (Z = q) ≥ √2πq .

Theorem 9.7 The MultipleBALANCE algorithm convergence within expected
O(log log n + log2 m) steps.

   Proof. Let k be an upper bound on the number of steps of the MultipleBALANCE
algorithm until it reaches Nash equilibrium. We divide our proof into two stages:
1. While there exists a machine Mi such that di (t) > 3 ln( δ10 )
2. ∀i, di (t) ≤ 3 ln( δ10 )
               δ
where δ 0 = 3mk    and δ as before.
Similarly to the proof of the convergence time ofqthe BALANCE algorithm, we get
that for any machine Mi and time t, di (t + 1) ≤ 3dk (t) ln( δ10 ). As before, using the
fact that di (1) ≤ n and the mentioned computations will provide us the bound of
O(ln ln n) on the expected number of steps in the first stage.
10                                                   Lecture 9: Dynamics in Load Balancing

During all of the second phase ∀i it holds that di (t) ≤ 3 ln( δ10 ). Denote the number of
unbalanced machines at time t as U nbalanced(t). Note that U nbalanced(t) can only
decrease over time since once a machine is balanced it won’t be changed.
We examine substages of the second phase. First we deal with the system when
U nbalanced(t) ≥ β log1.5 ( δ10 ) with β > 0 a constant which will be specified from the
proof. By lemma 9.4.3, since di (t) ≤ 3 ln( δ10 ), each unbalanced machine terminates
in one step with probability q = Θ( √ 1 1 ). According to the standard properties
                                          ln( δ0 )
of a binomial distribution, the expected number of machines in U nder(t) is at most
1
2
  U nbalanced(t − 1). Since machines become balanced with probability q < 0.01, the
expected number of machines in Over(t) is E[|Over(t)|] ≥ 0.49U nbalanced(t−1). Let
Oi (t) be a variable
              Pm indicating whether machine Mi ∈ Over(t), thus we can write that
|Over(t)| = i=1 Oi (t). The variables Oi (t) are negatively associated and therefore
we can apply the Chernoff bound on the number of overloaded machines as follows.
                                                q
           |Over(t)| ≥ 0.49U nbalanced(t − 1) − 3U nbalanced(t − 1) ln δ10
                     ≥ 0.48U nbalanced(t − 1)
for U nbalanced(t − 1) ≥ γ(log( δ10 )), for some constant γ > 0 (with probability
1 − δ 0 ). The expected number of machines that become balanced at time t is at least
q|Over(t − 1)|. Note that each overloaded machine (∈ Over(t − 1)) becomes balanced
with probability q independently and therefore we can apply the Chernoff bound on
the number of new balanced machines as follows.
                                                        q
             U nb(t) − U nb(t − 1) ≥ 0.48U nb(t − 1) − 3qU nb(t − 1) log δ10
                                    ≥ 0.47qU nb(t − 1)
for U nbalanced(t − 1) ≥ β(log1.5 (1/δ 0 )), for sufficientlyplarge constant β (with prob-
ability 1 − δ 0 ). Consequently, after O( logm
                                            q
                                                ) = O(log m log(1/δ 0 )) the first substage
terminates. Now, when U nbalanced(t) < β log1.5 (1/δ 0 ), the number of unbalanced
machines is only O(log1.5 (1/δ 0 )). Recall the second stage in the proof of the conver-
gence time of the p BALANCE algorithm.          In a similar manner, it implies that after
      1.5    0            0            2      0
O(log (1/δ ) · log(1/δ )) = O(log (1/δ )) the remaining machines will be balanced.
To conclude, we sum up our results to get,
                                              p
                   k = O(log log n + log mplog(1/δ 0 ) + log2 (1/δ 0 ))
                      = O(log log n + log m log(mk/δ) + log2 (mk/δ))
                      = O(log log n + log2 (m/δ))
                                                                                         2
Note 9.8 The component log2 can be improved to log1.5 . Also, we can get a bound
on the expected time of O(log log n + log1.5 m) (without dependency on δ).


9.5       The End
Nothing lasts forever.
  Computational Learning Theory                                Spring Semester, 2003/4

            Lecture 10: Mechanism Design and Social Choice
  Lecturer: Yishay Mansour                 Scribe: Yair Halevi, Daniel Deutch, Ami Koren




10.1      Mechanism Design
10.1.1     Motivation
So far we’ve seen various types of games, and investigated how they work. In this lecture we’ll
ask the opposite question: We want to reach a certain result. How should we plan a game
that will lead to this result? This area is called Mechanism Design. In the second part of
the lecture we will show that designing such a mechanism, even under simple assumptions,
is sometimes impossible.
    At any game, the rules (mechanism, institute) by which the game is taking place have a
profound effect on both the way the players (agents) play, and on the decisions eventually
taken. Examples:

   • Auction – Are the bids given by sealed envelopes, or is it a public auction, with bids
     given orally? The method of offering the bids effects what participants learn on each
     other, the bids they give, and eventually the result of the auction.

   • Scheduling – The scheduling-policy, effects which jobs are sent, and when.

   • Public project (new highway, new library, park, defense system, etc.) – The way we
     spread the costs of the project across the society, effect the decision of whether the
     project is undertaken or not.


The aim is to plan a mechanism that guarantees certain objectives, based on the following
assumptions:

   • The agents have a strategic behavior. That is, they have a benefit function they want
     to maximize

   • The agents have private information known only to them, that effect their decision.

For Example, Negotiation between a buyer and a seller.

 Each side has a value of the deal (private information)

                                              1
2                                          Lecture 10: Mechanism Design and Social Choice

 The seller will claim that his value is higher than it’s real value (Increase the price)

 The buyer will claim that his value is lower then it’s real value (decrease the price)

Sample Questions:

    • Plan a mechanism in which the negotiation takes place, that will cause an efficient
      merchandizing. That is, that a successful trade will take place whenever the buyer
      valuation exceeds the valuation of the seller.

    • Is there an efficient mechanism where both the buyer and the seller agree to participate
      voluntarily?

    • Elections – How do we plan fair elections. That is, how do we cause voters to vote by
      their real preferences, without lying?


Building blocks:

    • Usually there is a central institution that governs the game

    • Messages (For example, envelopes in auction) – These are the means of interaction
      with the agents. On literature, also called called types, strategies, or states.

    • Payments – Optionally, we can tax or subsidize agents, in or to create incentives for a
      desired behavior.


Negative results:
We will show that in some cases, it is impossible to achieve all the following goals:

    • Efficient result (maximum overall benefit)

    • Voluntary participation

    • Budget balancing (of tax/subside payments)

10.1.2     Formal Model
    • Agents – N = {1..n}

    • Decisions - d ∈ D

    • Private information for agent i – θi ∈ Θi
Mechanism Design                                                                                3

   • Utility function – vi : D × Θi −→ R – The benefit of player i with private information
     θi from decision d ∈ D
                                     ` θi ) means that agent i prefer decision d over decision d`
   • Preferences – vi (d, θi ) > vi (d,


Example 1 – Public project
The society want to decide whether or not to build a certain public project

   • Cost of project – c (cost for participant - nc )

   • Decision – D = {0, 1} (1–do / 0–don’t do the project)

   • Benefit of agent i from doing the project – θi .

   • Benefit of agent i –
                                                         ½
                                                  c          0      d=0
                              vi (d, θi ) = d(θi − ) =            c
                                                  n          θi − n d=1


Example 2 – Allocating a private product
An indivisible good is to be allocated to one member of the society. For instance, an enter-
prize is to be privatized. We have N = {1..n} potential buyers. We want to give the product
to one of them.

   • Decision – D = {1..n}

   • Benefit of agent i if achieving the product – θi

   • Benefit of agent i –
                                       vi (d, θi ) = I(d = i) · θi

10.1.3     Decision rules and efficiency
The society would like to make a decision that maximizes the overall benefit of it’s members.
For example:

   • For the public project, we will decide to build the project if the sum of benefits over
     all agents is more then it’s cost

   • For the private product, we might want to give it to the agent that have the maximal
     benefit from it
4                                                Lecture 10: Mechanism Design and Social Choice

We will now phrase it formally.

From now on, we assume Θ = Θ1 × . . . × Θn

Definition – Decision rule
                                           d : Θ −→ D
Definition – Efficiency

A decision d is efficient if it maximize the overall benefit:
                                           X                   X
                          ∀θ ∈ Θ, d` ∈ D :    vi (d(θ), θi ) ≥       ` θi )
                                                                 vi (d,
                                             i                  i




For example:

    • The public
              P project shouldP be done onlyPif the overall benefit
                                                              P is higher then the cost:
      d = 1 ⇔ i vi (1, θi )) ≥ i vi (0, θi )) ⇔ i θi − c ≥ 0 ⇔ i θi ≥ c

    • Private product – The efficient decision is d = maxargi {θi }




Payments
The definition of efficiency as the basis for decision making has a problem: We base it on a
private information, which we don’t actually have. We could ask the agents to give us their
private value, but the answers will often be dishonest or deceptive.
For instance, in the public project, an agent with θi < nc has an incentive to underreport his
value, and claim he has no profit from the project, and hence try to manipulate the decision
to his own benefit. In the same way, an agent with θi > nc has an incentive to overreport his
value. This could result in wrong decision. Other mechanisms of decision aimed to bypass
this problem, such as voting and decide whether to build the project by the majority’s vote,
could also result in a decision which is not efficient.
The question is, can we create incentives for the agents to reveal their real private informa-
tion? Many times the answer is yes. We can balance their interests by putting taxes (to
reduce the profit) or by subsidizing agents (to reduce the loss). That is done by a payment
function, which indicates how much each agent receives:

                                           ti : Θi −→ R
Mechanism Design                                                                           5

                                                 t : Θ −→ Rn

Definition – Social Choice Function
A social choice function is a pair of decision and payment:

                                             f (θ) = (d(θ), t(θ))




From now on, we will assume θ̂ to be the value declared by the agents, while θ is their true
private value.


The utility that agent i receives is based on it’s benefit from the decision taken, plus the
payment he receives from the mechanism (both are based on it’s declared value):

                                   ui (θ̂, θi , d, t) = vi (d(θ̂), θi ) + ti (θ̂)


A utility function at this form, where all arguments are concave except the last which is
linear, is called Quasi-linear.

Definition – Balanced and Feasible payments
The payments are:
                         P
   • Feasible, if ∀θ :       i t(θ) ≤ 0
                         P
   • Balanced, if ∀θ :        i t(θ) = 0

We want the payments to be balanced. If the payments are feasible and not balanced, we
have a surplus we have to waste, or return to outside source. We can not return the change
to the society, because the only way to do it is by changing the payment functions.
Balance is an important property if we wish (d, t) to be efficient rather then just d. If
payments are feasible and not balanced, then there is some loss to the society relative to an
efficient decision with no transfers.

Definition – Mechanism (M, g)


   • Messages of agents: (m1 , . . . , mn ) ∈ M , while M = M1 × . . . × Mn
6                                                   Lecture 10: Mechanism Design and Social Choice

    • Outcome function: The outcome function g : M −→ D × Rn is defined as
      g(m) = (gd (m), gt,1 (m), . . . , gt,n (m))

      While:
         – gd : M −→ D is the decision function
         – gt,i : M −→ R is the transfer function of agent i

    For example, First price auction:
    • Benefit of agent i, if he achieves the product, is mi
    • Outcome:
                                                gd (m) = maxarg{mi }
                                                       ½
                                                         0,    N o win
                                          gt,i (m) =
                                                         −mi , W in

Mechanism Design and Dominant strategies

Definition – Dominant strategy
A strategy mi ∈ Mi is a dominant strategy at θi ∈ Θi if it is superior to all other player
strategies, regardless of other players strategies:

    ∀mi , m0i ∈ M : vi (gd (m−i , mi ), θi ) + gt,i (m−i , mi ) ≥ vi (gd (m−i , m0i ), θi ) + gt,i (m−i , m0i )


For example: Confess at the prisoner dilemma.

A dominant strategy is a compelling property of a mechanism, if it exists. It allows us a
better prediction of which strategies will be employed by the agents. However, because it is
such a strong property, it exists only at narrow space of problems.

Definition
A Social Choice Function f = (d, t) is implemented in dominant strategies by a mechanism
(M, g) if:
    • There are functions mi : Θi −→ Mi such that for any agent i with strategy θi ∈ Θ ,
      mi (θi ) is a dominant strategy
    • ∀θ ∈ Θ : g(m(θ)) = f (θ)
Mechanism Design                                                                              7

10.1.4      Direct Mechanism and Revelation theorem
We’ll now show that if there is a dominant strategy, there is no need to use the complicated
(M, g) mechanism. There is an equivalent and much simple method, called Direct Mechanism
(DM)

Definition
A social choice function f can be viewed as a mechanism, where Mi = Θi , and g = f . That
is called Direct Mechanism(DM)

Definition
DM f (d, t) is dominant strategy incentive compatible (DS IC) if for each agent i with strategy
θi ∈ Θi , θi ∈ Mi is a dominant strategy at θi ∈ Θi
A social choice function f is strategy proof if it is dominant strategy incentive compatible.

In other words, saying that DM is dominant strategy incentive compatible means that telling
the truth is the dominant strategy.

Theorem 10.1 Revelation principle for dominant strategies
If a mechanism (M, g) implements a social choice function f = (d, t) in dominant strategies,
then the DM f is dominant strategy incentive compatible

   Proof:
Since (M, g) implements f in dominant strategies, then there are m(θ) = (m1 (θ), . . . , mn (θ))
such that:
                                  ∀θ : g(m(θ)) = f (θ)
And also:
                                       ∀mi , m̂i = mi (θi )
                                                                                              ¤

Negative Results:
We will see later that there is no voting method between 3 or more candidates that guarantees
that the voters will tell their true preferences.

Theorem 10.2 – Grove method
If:

   • d is an efficient decision rule
8                                                     Lecture 10: Mechanism Design and Social Choice

    • There is a function P hi : Θ−i −→ R such that:
      ti (θ) = hi (θ−i ) + j6=ı vj (d(θ), θj )
then (d, t) is dominant strategy incentive compatible


Remark: Under some additional conditions, this is the only way to define dominant strategy
incentive compatible.

   Proof:
By way of contradiction, suppose d is an efficient decision rule, and that for each agent i
there are hi that define together t : Θ −→ Rn , But (d, t) is not dominant strategy incentive
compatible.
Then, there is an agent i, and states θ and θi0 such that θi0 is more beneficial to agent i:

                          vi (d(θ−i , θi0 ), θi ) + ti (θ−i , θi0 ) > vi (d(θ), θi ) + ti (θ)

We’ll expand ti explicitly, and write d0 instead of d(θ−i , θi0 ) for simplicity:
                                     X                                              X
         vi (d0 , θi ) + hi (θ−i ) +   vj (d0 , θj ) > vi (d(θ), θi ) + hi (θ−i ) +   vj (d(θ), θj )
                                     j6=ı                                                  j6=ı

Therefore:                         n                      n
                                   X                      X
                                              0
                                         vj (d , θj ) >         vj (d(θ−i , θi ), θj )
                                   j=1                    j=1
       0
And d contradicts the efficiency of d(θ). The conclusion is that (d, y) is dominant strategy
incentive compatible.
                                                                                          ¤

Clark Mechanism
Clark suggested a specific implementation of hi
                                                                   X
                                   hi (θ−i ) = −maxd∈D {                  vj (d, θj )}
                                                                   j6=i

which is actually the decision that would have been taken if agent i had not participated.
Therefore, ti is defined as follows:
                                X                          X
                           ti =     vj (d, θj ) − maxd∈D {   vj (d, θj )}
                                     j6=i                                 j6=i

Properties of Clack mechanism:
Mechanism Design                                                                           9

   • The price is non-positive. That means that the agents pay to the mechanism, and
     assures feasible payments.

   • If agent i does not effect the decision, then ti (θ) = 0

   • ti (θ) can be thought of as loss for the other agents


Example 1 – Second price auction
We give the products to the agent with the highest bid. How much should we charge for it?

   • d(θ) = maxarg{θi }
                     ½
                         0 d 6= i
   • vi (d, θi ) =
                         θi d = i

   • For the agent with the highest value:
            P
        –       j6=ı vj (d(θ), θj ) = 0

        – hi = −v2nd (d2nd , θ2nd ) = −θ2nd
        – ⇒ ti (θ) = −θ2nd

   • The participation of all other agents does not effect the decision, i.e. ti (θ) = 0

Explanation: The winner is the agent with the highest bid, and he pays the 2nd highest offer.
No other payments are done.

Example 2 – Building graph pathes
Given a graph G = (V, E) with weights ~c on the each e ∈ E.

   • Each e ∈ E is an agent

   • The cost of each agent is ce (benefit is −ce )

   • The objective: to choose a minimal cost path

   • te (~c) = (Cost of shortest path − ce ) − (shortest path without e)
     te (~c) = (shortest path without e) − (cost of shortest path with e)
10                                            Lecture 10: Mechanism Design and Social Choice

Budget balancing vs. Incentive Compatible
It is not enough to require efficiency of decision. The society should also aspire to balanced
payments. Transfer functions that are not balanced, cause waste, and it can be considerable.
An example for it can be seen in the public project case:

Consider two agents. Project cost is c = 32 , and Θ1 = Θ2 = R.
According to Clark, there are h1 and h2 . We’ll check what we can conclude from the feasi-
bility of the payments.
     1. Assume θ1 = θ2 = 1 ,
        d(1, 1) = 1, and therefore:

                             0 ≥ t1 (1, 1) + t2 (1, 1) = h1 (1) + 1 + h2 (1) + 1
                                         ⇒ −2 ≥ h1 (1) + h2 (1)

     2. Assume θ1 = θ2 = 0 ,
        d(0, 0) = 0, and therefore:

                                 0 ≥ t1 (0, 0) + t2 (0, 0) ≥ h1 (0) + h2 (0)

From both inequalities we can conclude that there must be either −1 ≥ h1 (1) + h2 (0)
or −1 ≥ h1 (0) + h2 (1). Since d(1, 0) = d(0, 1) = 0, in one of the cases (0, 1) or (1, 0)
the payments are negative. That means that: a. to have a dominant strategy incentive
compatible mechanism with efficient decision rule, one cannot satisfy balance. b. In some
cases, there are payments without a project.
10.2. SOCIAL CHOICE                                                                             11

10.2       Social Choice
Social choice is the general problem of mapping a set of multiple individual preferences to a
single social preference, that will best reflect the aggregate individual preferences. Common
examples for such scenarios are public elections, voting, etc. While in mechanism design we
have shown how to select a mechanism that will exhibit desired behavior, for social choice we
shall show that given very simple and reasonable requirements, no such mechanism exists.
    We shall show two theorems for two slightly different social choice scenarios: Arrow’s
Impossibility Theorem and the Gibbard-Satterthwaite Theorem.

10.2.1      Arrow’s Impossibility Theorem
Arrow’s Impossibility Theorem deals with social ordering. Given a set of alternatives A =
{A, B, C, . . .}, a transitive preference is a ranking of the alternatives from top to bottom, with
ties allowed. Given a set of individuals (a society, so to speak), a social preference function is
a function associating any tuple of personal transitive preferences, one per individual, with
a single transitive preference called the social preference.
Definition A Transitive Preference is an ordering of A with ties allowed.
   For example: A > B > C = D = E > F > G.
Definition Given alternatives A and a set of individuals N , a Social Profile is an asso-
ciation of a transitive preference per individual.
   We will typically denote individual by numbers 1 . . . N , in which case a social profile will
be represented by an N-tuple of transitive preferences. We will also represent a profile by a
matrix, where each column is the transitive preference of single individual, ranked from top
to bottom. For example:
                            1    2   3   4         5        6
                            A    A   B,C C         A,B,D    A,B,C,D
                            C    B   -   A,B       -        -
                            B    D   A   -         -        -
                            D    C   D   D         C        -

Definition A Social Preference Function is a function associating each profile with a
transitive preference, called the social preference.

                     1 2 3           4   5           6                Social
                     A A B,C         C   A,B,D       A,B,C,D          A
                     C B -           A,B -           -           →    C
                     B D A           -   -           -                B,D
                     D C D           D   C           -                -
12                                           Lecture 10: Mechanism Design and Social Choice




     Figure 10.1: Moving C strictly above A without changing relative preference to B



Definition A social preference function respects Unanimity if the social preference strictly
prefers α over β whenever all of the individuals strictly prefer α over β.

Definition A social preference function respects I.I.A (independence of irrelevant
alternatives) if the relative social ranking (higher, lower or indifferent) of α and β depends
only on their relative ranking in the profile.

Definition Given a social preference function, an individual n is a Dictator if the social
preference strictly prefers α over β whenever n strictly prefers α over β. If a dictator exists,
the social preference function is a Dictatorship.
    Unless specifically stated, relationships (such as prefer, above, first, last, etc) are non-
strict. We are now ready to present Arrow’s Impossibility Theorem.

Theorem 10.3 Arrow’s Impossibility Theorem For 3 or more alternatives, any social
preference function that respects transitivity, unanimity and I.I.A is a dictatorship.

   Proof: Assume a social preference function meeting the conditions set in the theorem.
Let B ∈ A be chosen arbitrarily.

Claim 10.4 For any profile where B is always either strictly first or strictly last in the
ranking (for all individuals), the social preference must place B either strictly first or strictly
last as well.
Social Choice                                                                                   13

    Assume to the contrary that the social preference does not place B strictly first or strictly
last. Then there exist two alternatives A and C (different from each other and B) such that
in the social preference, A ≥ B and B ≥ C. Since all individuals place B strictly first or
strictly last, moving C strictly above A for an individual is possible without changing the
relative preference between A and B or B and C for this individual. This is depicted in
figure 10.1. Due to I.I.A, we conclude that moving C strictly above A for all individuals
should not change the relative social preference between A and B, and between B and C,
so we still have A ≥ B and B ≥ C, which implies A ≥ C due to transitivity. But this
contradicts unanimity, because now all individuals strictly prefer C over A.
    Therefore, the social preference must place B strictly first or strictly last.

Claim 10.5 There exists an individual n∗ and a specific profile such that n∗ can swing B
from the strictly last position in the social preference to the strictly first position by changing
his preference.

    We observe an arbitrary profile where B is strictly last for all individuals. Due to una-
nimity, B must be strictly last in the social preference. Now let the individuals from 1 to N
move B from the strictly last position to the strictly first position successively. Due to the
previous claim, in any stage B must be strictly first or strictly last in the social preference.
Because it starts strictly last, and must end strictly first, there must be an individual whose
change causes B to move from the former position to the latter. We denote this individual
by n∗ . Denote by profile I the profile just before n∗ changes his preference, and by profile
II the profile just after the change. Profile I is the profile mentioned in the claim, and n∗ is
the individual. This is depicted in figure 10.2.
    Note that n∗ will have this behavior for any profile where all individuals i < n∗ place B
strictly first and all individuals i ≥ n∗ place B strictly last. The reason is that the (strict)
relative preferences between B and any other alternative in such a profile and in profile I are
identical, so this must hold in the social preference, and thus B must still be strictly last in
any such profile. The same is true for the changed profile and profile II, where B must be
strictly first. Therefore the choice of n∗ is only dependent on B, not the profile, and we can
denote n∗ = n(B).

Claim 10.6 n∗ is a dictator for any pair of alternatives A and C that does not include B.

   Given any profile III where for n∗ , A > C, create profile IV from profiles II and III by:

   1. Start with profile II

   2. Have n∗ move A strictly above B, without changing the relative preferences among all
      alternatives other than A.
14             Lecture 10: Mechanism Design and Social Choice




     Figure 10.2: Existence of n∗
Social Choice                                                                                      15




                                      Figure 10.3: Profile IV

   3. Have all other individuals change the preference between A and C to be identical to
      profile III, while B remains in it’s profile II position.
    In profile IV, the relative preference between A and B is identical to their relative pref-
erence in profile I for all individuals, and due to I.I.A we must have A > B in the social
preference for profile IV (because in profile I B is strictly last). The relative preference
between C and B is in profile IV is identical to that of profile II for all individuals, thus
(I.I.A) we must have B > C in the social preference for profile IV (because in profile II B is
strictly first). This is depicted in figure 10.3.
    Therefore we must have A > C in the social preference for profile IV. But the relative
preferences between A and C in profiles III and IV are identical, so we must also have A > C
in the social preference for profile III. This is true for any profile III with n∗ strictly preferring
A over C, thus n∗ is a dictator for A and C.
Claim 10.7 n∗ is a dictator for any pair of alternatives A and B.
    Choose a third alternative C. By the same construction above, there exists n(C) that is
a dictator for any pair of alternatives exclusive of C, such as A and B. But n(B) definitely
effects the relative social preference of A and B, so he is the only possible dictator for A and
B, thus n(C) = n(B). Therefore n(B) is also a dictator for A and B.
    We have shown that there is a single individual that is dictator for any pair of alternatives,
thus the social preference function is a dictatorship.                                          ¤

10.2.2      Gibbard-Satterthwaite Theorem
We shall now deal with an even simpler problem. The general scenario is similar to the one
described previously. The difference is that we will only be interested in a single ”most-
16                                           Lecture 10: Mechanism Design and Social Choice

desired” alternative, instead of an entire social preference. Instead of looking for a social
preference function, we are looking for an election mechanism.
Definition An Election Mechanism is a function mapping each social profile to a single
alternative (the elected alternative) .

Definition An election mechanism M that decides an election is Unanimous if it elects
alternative A whenever all individuals rate A as strictly first.

Definition A mechanism M that decides an election is defined to be a strategy proof
one, when:
    The dominant strategy of each voter is voting in the order of his real preferences (”telling
the truth”). Namely, if the voter prefers candidate A over B, his dominant strategy will be
to rank A above B. In other words, it is worthy for every voter to ”tell the truth”.

Definition A mechanism M that decides an election is defined to be a dictatorial one,
when:
   There exist a dictator, namely a voter v such that if v votes for candidate A, then A will
win the election regardless of the other voters’ votes.

Definition      A profile is defined as a set that includes the preferences of all voters.
     We are now ready to present the central theorem of this section.

Theorem 10.8 (Gibbard-Satterthwaite Theorem) An election mechanism for 3 or more
alternatives which is:

     • Unanimous

     • Strategy proof

     is a dictatorship.

    This theorem will also be referred to as the GS Theorem. We precede the proof with
a few lemmas.

Lemma 10.9 Irrelevance Lemma
    Suppose that an alternative A is selected by the mechanism given a profile P . Then a
modification of P which raises the ranking of an alternative X in the preference ranking of
a single voter i, will cause either A or X to be selected by the mechanism.

   Proof:
   Suppose an alternative C, C 6= X, C 6= A is elected. In P , A was elected, and the fact
that i raised its vote for X caused C to be elected. There exist two cases:
Social Choice                                                                                  17

    1. If i prefers A to C, i would not raise his vote for X, even if the higher ranking of X
is the truth for him, since then he causes C to be voted instead of A, in contradiction to
strategy proof.
    2. If i prefers C to A, i would never had reported his (maybe real) Low vote for X. He
could gain profit from not reporting the truth, giving X a high vote, and thus C would be
voted. Again, contradiction to strategy proof.
                                                                                            ¤

Lemma 10.10 Unanimous last Lemma
  If an alternative B is ranked last by all voters, B is not elected.

    Proof:
    Assume B is elected. Then, for an alternative A, A 6= B, suppose that every voter, one
at a time, raises his vote for A to the top of their priority. Then, by strategy proof, B is still
elected, because otherwise for a voter interested in B to be elected, it would be profitable to
him to vote for B last, thus not reporting the truth, and contradicting strategy proof.
    But after all voters had raised their votes for A to the top, A must be elected, because
of unanimity. Contradiction, thus the assumption that B was elected is not true, meaning
B is not elected.
                                                                                               ¤
    Proof of the GS Theorem:
Step 1
    Begin with a profile P which is arbitrary in any sense, besides the ranking of B in it-
every voter in P ranks B as his last vote. Thus, B is not elected, by ”Unanimous last”
Lemma. One voter at a time(arrange the voters in some order), have B ”jump” from the
bottom to the top of the voter’s preferences. At the end of this process, all voters vote for
B first, and thus B is elected(unanimity). So, let r be the first voter for which the change
of his vote will cause B to be elected. r is called the pivot for B.
    In all of the following tables, ’ ?’ stands for unknown, ’...’ means the sequence written
before and after the dots (in the same line) is kept in between them.
    Profile 1
     1 2 . . r . . n
     B . . B K ? ? ?
     ? ? . . . . . ?
     ? ? . . . . . ?
     ? . . ? B B . B
X 6= B is elected.

   Profile 2
18                                        Lecture 10: Mechanism Design and Social Choice

     1 2    . . r .        .   n
     B .    . B B ?        .   ?
     ? ?    . . . .        .   ?
     ? ?    . . . .        .   .
     ? .    . . ? B        .   B
B is elected.
Consider profile 2:
    1. If any voter i > r changes his vote, B is still elected. Otherwise i, who does
not want B to be elected, would change his vote to prevent it, in contradiction to strategy
proof.
    2. If any voter i ≤ r keeps B ranked first, and changes the ranking of the other
alternatives, B is still elected. Otherwise i, who prefers B to be elected, would prefer to
submit his original ranking even if his real preferences is represented by the modified one.
Once again, contradiction to strategy proof.
    Conclusion 1: B is elected if the first r voters rank B first.
Consider profile 1:
    1. If any voter i < r changes his vote, B is still not elected. Otherwise it is
profitable for i to do this change, such that B will be elected. Contradiction to strategy
proof.
    2.If any voter i ≥ r keeps B ranked last, and changes the ranking of the other
alternatives, B is still not elected.
    Otherwise it is profitable for i to submit his original ranking(to prevent B from being
elected) even if his real preferences are represented by the modified one. Contradiction to
strategy proof.
    Conclusion 2: B is not elected if the voters r through n rank B last.
    We will show that the voter r is a dictator.

     Step 2
     profile 3
      1 2 . .      r . . n
      ? . . ?      K ? ? ?
      ? ? . .      . . . ?
      ? ? . .      . . . ?
      B B . .      . B . B
  Raise K in profile 3 to the top position for all voters. K is now chosen, by unanimity.
Now raise B to the top positions for voters 1... r − 1:
  profile 4
Social Choice                                                                               19

    1    2   . r-1 r .       .   n
    B    .   . B   K .       .   K
    K    K   . K ? .         .   ?
    .    .   . .   . .       .   .
    ?    ?   . ?   B .       .   B
    Since K was chosen in profile 3, and the modifications from profile 3 to 4 are only raises
K or B, it is inferred from the Irrelevance Lemma above that either K or B are chosen in
profile 4. But in profile 4 B is not chosen, by Conclusion 2 above (r through n ranked B
last). Thus K is chosen in profile 4.
    Now raise B to the second position for the voter r:
    profile 5
     1 2 . r-1 r r+1 . n
     B . . B          K K       . K
     K K . K B ?                . ?
     ? . . .          . .       . ?
     ? ? . ?          ? B       . B
   K is still elected, since otherwise r would not have reported the change even if this is a
change in his real preferences, in contradiction to strategy proof.
   Reconsider profile 3.
Lemma 10.11 In profile 3, K is elected.
     Proof:
     Start with profile 3, and assume G 6= K is elected. Raise B to the top position for the
first r − 1 voters. By Conclusion 2, B is not elected, and by the Irrelevance Lemma, G is
still elected.
     Now raise B to the second position in the voter r’s ranking.
     profile 6
      1 2 . r-1 r r+1 . n
      B . . B         K ?       . ?
      ? ? . ?         B ?       . ?
      ? . . .         . .       . ?
      ? ? . ?         ? B       . B
    B is elected in profile 6.
    Assume B is not elected in profile 6. By the Irrelevance Lemma, G is still elected. By
Conclusion 1, if we raise alternative B in the vote of r one step up, to the top position, then
B is elected. In profile 6, r prefers B over G 6= B, so he would profit from falsely reporting
B above K, in contradiction to strategy proof.
    Now, in profile 6, raise K to the second place in the votes of voters 1 through r − 1, and
to the top position for voters r + 1 through n.
20                                         Lecture 10: Mechanism Design and Social Choice

     Profile 7
      1 2 .      r-1 r r+1     .   n
      B . .      B   K K       .   K
      K . .      K B ?         .   ?
      ? . .      .   . .       .   ?
      ? ? .      ?   ? B       .   B
   B is still elected in profile 7:
   Assume B is not elected.
   Voters 1 through r − 1 who want B to be elected will profit by not reporting the
change(even if it is truthful). Voters r + 1 through n who want B not to be elected will profit
by falsely reporting the change. Thus B is elected in profile 7. But profile 7 = profile 5, and
we proved above that K 6= B, is elected in profile 5, in contradiction. Thus, the assumption
that G 6= K is elected in profile 3 is not true. Meaning, K is elected in profile 3.
                                                                                              ¤
   Step 3

Lemma 10.12 Consider an arbitrary profile P where r ranks some alternative K 6= B on
top. Then K or B is elected.

    Proof:
    First, modify the profile by moving B to the bottom for all voters. We get profile 3, and
we showed that K is elected. Now, one voter at a time, restore the profile by raising B to
its original position. By the Irrelevance Lemma, either K or B is elected.
                                                                                            ¤

Lemma 10.13 Consider an arbitrary profile P where r ranks some alternative K 6= B on
top. Then K is elected.

     Proof:
     Consider:
     Profile 8
      1 2 .      r-1   r r+1 .     n
      B . .      B     B A   .     A
      ? ? .      ?     ? ?   .     ?
      ? ? .      ?     ? ?   .     ?
      C C .      .     . .   .     C
   where C 6= B and C 6= K. Again, similarly to step 1, have C jump in the ranking of the
voters one by one, starting from voter 1 until a pivot m, the first for whom the election will
become C is found. Symmetrically to step 2, the top choice of m is selected in profile 8. But
from Conclusion 1, we know that B is chosen in profile 8. Meaning, the top choice of m in
Social Choice                                                                           21

profile 8 is B, meaning m ≤ r. But a symmetric argument, starting with m and then finding
r ( Everything is done exactly the same, replacing m with r and B with C), will lead to the
conclusion that r ≤ m, and so m = r. So r, the pivot in respect to B, is also the pivot in
respect to C. Using Lemma 10.10 for C instead of B, we obtain that K or C are elected in
P . Thus, In P :
    K or C are elected.
    K or B are elected.
    And we obtain:
    K is elected in P .
                                                                                         ¤
    For K = B, similar arguments show that r is a pivot for A, as well as C, and that B is
elected. Hence, for each K, K 6= B or K = B, if r ranks some alternative K on top, Then
K is elected. Hence, r is a dictator.
                                                                                         ¤
  Computational Game Theory                                    Spring Semester, 2003/4

                                  Lecture 11:June 8
  Lecturer:Yishay Mansour               Scribe:Nir Yosef, Itamar Nabriski, Nataly Sharkov



11.1       Introduction
In this lecture we consider Combinatorial Auctions (abbreviated CA), that is, auctions
where instead of competing for a single resource we have multiple resources. The resources
assignments and bids are defined on subsets of resources and each player has a valuation
defined on subsets of the resource set he was assigned. The interesting cases here is when the
valuation of a given set of resources is different form the sum of valuations of each resource
separately (the whole is different from the sum of its parts). That could happen when we
have a set of complementary products that is, each product alone is useless but the group
has a significantly larger value (for example - left and right shoes). On the other hand we
might have a set of substitutional products where the opposite takes place (for example -
tickets for a movie - no use of having two tickets if you are going alone).
In these cases there is an importance for pricing groups of resources rather than single
resources separately, i.e. in the absence of complementarity and substitutability (if every
participant values a set of goods at the sum of the values of its elements), one should or-
ganize the multiple auction as a set of independent simple auctions, but, in the presence of
these two attributes, organizing the multiple auction as a set or even a sequence of simple
auctions will lead to less than optimal results, in such a case we use Combinatorial Auc-
tions.



11.2       Preliminaries
Throughout this lecture, we shall consider single-side combinatorial auctions, that is, auctions
with single seller and multiple buyers.
Any such auction must specify three elements:
   • The bidding rules (i.e., what one is allowed to bid for and when).
   • The market clearing rules (i.e., when is it decided who bought what and who pays
     what)
   • The information disclosure rules (i.e., what information about the bid state is disclosed
     to whom and when).

                                               1
2                                                                            Lecture 11:June 8

We consider only one-stage, sealed-bid CAs: each bidder submits zero or more bids, the
auction clears, and the results are announced.
The third element of the specification is thus straightforward: no information is released
about other bidders’ bids prior to the close of the auction. The first element of the spec-
ification is almost as straightforward: each bidder may submit one or more bids, each of
which mentions a subset of the goods and a price. One has to be precise, however, about the
semantics of the collection of bids submitted by a single bidder, because, as was mentioned,
the bid for a group doesn’t necessarily equal to the sum of bids of its elements.
Only the second element of the above specification, the clearing policy, provides choices for
the designer of the CA. There are two choices to be made here: which goods does every
bidder receive, and how much does every bidder pay? We address these below.

11.2.1      The model
    • N = {1..n} set of players.

    • S = {1..m} set of resources (products).

    • Θ - set of players private information, player i has information θi ∈ Θi which is the
      inner state he is currently in.

    • D - Mechanisms decision space - each vector specifiesS resources allocation amongst the
      players. D = {< s1 ..sn > | (∀i 6= j si ∩ sj = ∅) ∧ ( 1≤i≤n si ⊆ S) }.

    • V = {V1 ..Vn } - set of preference functions Vi : D × Θi → R
      which is the value which player i attributes to every subset of S given its internal state
      θi .

    • ~t = {t1 ..tn } - set of payments defined for each player by the mechanism
       t : Θ → Rn , ti (Θ) ∈ R.

Remark 11.1 Monotonicity for every s1 , s2 ∈ S such that s1 ⊆ s2 , the value attributed
to s2 will not be smaller to that of s1 . i.e. s1 ⊆ s2 ⇒ Vi (s1 ) ≤ Vi (s2 ) for any player i.

11.2.2      Goals and assumptions
    • Our goal will be guaranteeing Efficiency - find a pareto-optimal allocation, that is,
      no further trade among the buyers can improve the situation of some trader without
      hurting any of them. This is typically achieved by using an assignment which brings
      the sum of benefits to a maximum.

    • An alternative goal - maximizing Seller’s revenue (will not be discussed on this lecture)
11.3. MECHANISM DESIGN FOR CA                                                                        3

   • Assumption - no-externalities : Players’ preferences are over subsets of S and do not
     include full specification of preferences about the outcomes of the auction (the resulting
     allocation). Thus, a player cannot express externalities, for example, that he would
     prefer, if he does not get a specific resource, this resource to be allocated to player X
     and not to player Y.


11.3       Mechanism Design for CA
In order to get an efficient allocation where for each player telling the truth is a dominant
strategy we’ll use the VCG mechanism.

11.3.1     VCG mechanism - definition
   • Decision rule(resource
                        P allocation): d =< s1 ..sn >∈ D such that
     d = ArgMax d∈D i Vi (si , θi ). That is, the chosen allocation maximizes the sum of
     the declared valuations of the players.
                                P                                         P
   • Payment scheme: ti (θ) = j6=i Vj (sj , θj ) − V Max<s′1 ..s′n>|s′i =∅ j6=i Vj (sj , θj ). That is,
     each player receives a monetary amount that equals the sum of the declared valuations
     of all other players, and pays the auctioneer the sum of such valuations that would
     have been obtained if he had not participated in the auction.

Remark 11.2 Note that A bidder knows his own inner state, but this information is private
and neither the auctioneer nor the other players have access to it, thus both of the above are
functions of the players’ declarations rather than its inner state.

In the previous lecture we’ve seen that this mechanism brings the social benefit (sum of all
benefits calculated according to players’ declarations) to a maximum while keeping truth-
telling as a dominant strategy.

11.3.2     Problems with the implementation of VCG mechanism
The main problem we confront trying to implement VCG mechanism is a computational
problem, as it turns out, finding such a maximum benefit allocation is a NP-hard optimiza-
tion problem (moreover, in our case we need to calculate a maximum benefit allocation n + 1
times) that, in the worst case, cannot be even approximated in a feasible way.
An additional problem is describing players’ preferences: the domain of the preference func-
tion is the product of all subsets of S with player’s internal state and as such, for a given
state, its size is exponential in m.
Comment: the size of the domain mentioned above is under the assumption of no-externalities.
4                                                                          Lecture 11:June 8

Without that assumption, the domain would have been much larger (|D| × |Θ|)

In the following sections we consider a simplified model of CA called SMB (single minded
bidder) defined as:
For every player i there exists a single set si ⊆ S which he wants and for which he is willing
to pay the (non-negative) price ci .

                                             
                                                 ci si ⊆ S
                                  Vi (s) =
                                                 0 otherwise


We have a compact description for the players’ preferences < si , ci >, thus overcoming the
second problem, next we’ll see that even for that simplified model, implementing VCG i.e.
finding maximal allocations, is NP-hard.




11.3.3     Reduction from IS

Claim 11.3 Finding an optimal allocation on CA with SMB model is NP-hard



   Proof: We prove the claim by showing a reduction from the graph-theory problem of
maximum independent set to a maximum allocation problem on SMB model: Given an
undirected graph G = (V, E) let us build an instance of CA as follows:


    • S = E: every edge is considered as a resource


    • N = V : every vertex is considered as a player


    • for each player (vertex) i, define si as the set of all edges (resources) coming out of
      that vertex and ci = 1 .


    For example, see following figure:
11.4. THE GREEDY ALLOCATION                                                                 5




Fig.1 Reduction from IS on an undirected graph to finding optimal allocation on CA with
SMB
For example: Player1 desired set of resources (s1 ) is {2, 5, 1}

>From the definition of D above, it is easy to see that:
   • any legal allocation defines an independent set (the set of all players(vertices) with a
     non-zero benefit) with the same value


   • on the other hand, any independent set ∆ defines a legal allocation (Allocate si for
     every player(vertex) i such that i ∈ ∆) with the same value as well.
Thus, finding a maximal social benefit is equivalent to finding a maximum independent set.
From the above reduction and since IS is in NPC, we conclude the same on the problem of
finding an optimal allocation.                                                          
Corollary 11.4 Since we have |E| ≤ |V |2 resources and since
                                                           √ no approximation scheme for
                                      1−ǫ
IS has an approximation ratio of |V |     we get a bound of m on the approximation ratio
for our problem where m is the number of resources.


11.4      The greedy allocation
As we have seen, for all practical purposes, there does not exist a polynomial-time algorithm
for computing an optimal allocation, or even for computing an allocation that is guaranteed to
6                                                                             Lecture 11:June 8

be off from optimal by at most a constant, any given constant. One approach to meeting this
difficulty is to replace the exact optimization by an approximated one. Next, we shall propose
a family of algorithms that provide such an approximation. Each of those algorithms runs
in a polynomial time in n, the number of single-minded bidders. Finally, we (unfortunately)
see that the properties guaranteed by the mechanism (such as truthful bidding, to be defined
later), disappear when using these approximated allocations.
(comment - traditional analysis of established CA mechanisms relies strongly on the fact
that the goods are allocated in an optimal manner ).
General description of the algorithms:

    • First phase: the players are sorted by some criteria. The algorithms of the family are
      distinguished by the different criteria they use.

    • Second phase: a greedy algorithm generates an allocation. Let L be the list of sorted
      players obtained in the first phase. The bid of the first player i1 of L (< si1 , ci1 >); is
      granted, that is, the set si1 will be allocated to player i1 . Then, the algorithm examines
      all other player of L, in order, and grants its bid if it does not conflict with any of the
      bids previously granted. If it does, it denies (i.e., does not grant) the bid.


11.4.1      First sort criteria: ci
Claim 11.5 Using a greedy algorithm, G1 , with ci as a sort criteria would yield an approx-
imation factor of m


   Proof:
⇒ The ratio is at least m, proof by example:
Suppose we have a set N = {1..n} of players (SMB ’s) and a set S = {1..m} of resources
where m = n. and suppose:

    • Player 1 asks for all the resources and his value is 1 + ǫ , [s1 = S, c1 = 1 + ǫ]

    • ∀2 ≤ i ≤ n player i asks for resource i and his value is 1 , [si = {i}, ci = 1]

In this case it follows that OP T = m but G1 = 1 + ǫ

⇐ The ratio can be at most m because the value of the first player in a greedy alloca-
tion is higher than that of any player in OP T (follows immediately from the feasibility of
OP T )                                                                                   
The greedy allocation                                                                        7

11.4.2           Second sort criteria: |scii |
Claim 11.6 Using a greedy algorithm, G2 , with |scii| as a sort criteria would yield an approx-
imation factor of m.

   Proof:
⇒ The ratio is at least m, proof by example:
Assuming we have a set of two players and a set of resources similar to the above, suppose:
    • Player 1 asks for resource 1 and his value is 1 [s1 = 1, c1 = 1]

    • Player 2 asks for all the resources and his value is m − ǫ [s2 = S, c2 = m − ǫ]
In this case it follows that OP T = m − ǫ but Greedy = 1

⇐ The ratio can be at most m:
>From the greediness property of G2 , for any subset si (requested by player i) that was allo-
cated by OPT and not allocated by Greedy there exists at least one other subset which was
previously allocated by G2 and because of which si was not allocated.
Let us consider the following function defined on the subsets allocated by OPT :
                                
                                  j : (j ∈ G2 ) ∧ (si ∪ sj 6= ∅) i ∈/ G2
                ∀i∈OP T J(i) =
                                  i                               otherwise

Explanation: for any subset si (requested by player i) that was allocated by OPT and not
allocated by G2 , we take sJ(i) as a subset because of which si was not allocated. And, for
any subset si which was allocated both by OPT and G2 we take J(i) to be equal to i

Now, from the above definition of J and from the feasibility and greediness of G2 , we can
conclude (∀i∈OP T ):
   1. si ∩ sJ(i) 6= ∅
                   c
   2. |scii | ≤ |sJJ (i)
                     (i) |


>From which follows: ci ≤ |s|sJ (i)
                                i|
                                     c
                                    | J(i)
                                           ≤ |si|cJ(i)

And finally:
            P                 P                       P                P
OP T =          i∈OP T ci ≤   i∈OP T |si |cJ(i) ≤ m   i∈OP T cJ(i) ≤   j∈G2 cj = m · G2


- The third inequality is due to the fact that OPT is feasible i.e.,
(s1 , s2 ∈ OP T ) → (s1 ∩ s2 = ∅)                                                            
8                                                                                          Lecture 11:June 8


Remark on notation: for a player i and an algorithm ALG we say that i ∈ ALG if the
request of player i was granted by ALG




11.4.3        Third sort criteria: √ci
                                                    |si |

Claim 11.7 Using a greedy algorithm, G3 , with ri = √ci as a sort criteria would yield an
                                                      |si |
                       √
approximation factor of m
   Proof:
Consider the following two inequalities:
                  qP            qP
                            2              2
     P
G3 = j∈G3 cj ≥            c
                      j∈G3 j  =      j∈G3 rj |sj |


- Because ∀1<j<n , cj > 0
          P              p             pP       2
                                                    pP                       √ pP        2
OP T =       i∈OP T rj       |sj | ≤    i∈OP T ri           i∈OP T |si | ≤    m  i∈OP T ri .


- The last inequality follows from: (∀i1 , i2 ∈ OP T i1 6= i2 ) → (si1 ∪ si2 = ∅)
                                qP                    pP
                                            2                      2
Thus it is enough to compare        j∈G3 rj |sj | and      i∈OP T ri


Let us consider the function J(i) as in the last proof. In the same manner we can con-
clude ∀i ∈ OP T :
    1. si ∩ sJ(i) 6= ∅
    2. ri ≤ rJ(i)
    >From the feasibility of OPT it follows that for every subset sj allocated by G3 , there
exists at most |sj | subsets which are allocated by OPT and rejected by G3 because of sj .
Summing for all i ∈ OP T , we get:
pP               qP                  qP
             2                 2               2
           r
     i∈OP T i  ≤             r
                       i∈OP T J(i) ≤     j∈G3 rj |sj |




And finally, we get:
        √ pP             2
                             qP
                                     2
                                               √
OP T ≤ m               r
                 i∈OP T i  ≤   j∈G3 rj |sj | ≤   mG3                                                      
11.5. TRUTHFUL MECHANISM WITH GREEDY ALLOCATION IN SMB                                          9

11.5       Truthful Mechanism with Greedy Allocation in
           SMB
11.5.1      Greedy Allocation Scheme and VCG do not make a Truth-
            ful Mechanism in SMB
The following example illustrates a case where using G2 and V CG doesn’t yield a truthful
mechanism (and simiraly for any Gi ):



                                                  vi
                           Player   < si , vi >  |si |
                                                         ti
                           R        ({a}, 10)    10      8 − 19 = −11
                           G        ({a, b}, 19) 9.5     0
                           B        ({b}, 8)     8       10 − 10 = 0




Since the ti ’s represent the value gained by the other players in the auction minus the value
gained by the other players had i not participated in the auction, R ends up with a lose of
11. Had R not been truthful and bid below 9.5 (G2 ’s |svii | ), he would be better off gaining 0.
Thus in this case being truthful is not a dominant strategy for R and thus this mechanism
is not truthful.
We now explore the conditions necessary for a truthful greedy allocation mechanism in SMB.


11.5.2      Sufficient Conditions for a Thruthful Mechanism in SMB
Let {g1 , ..., gn } denote the set of allocations the mechanism grants to each player. For brevity
all bids and valuations are not labeled by the player index and all pretain to player i
 Definition Exactness: Either gi = s or gi = ∅ .

In other words player i is allocated all the goods he bid for or none at all. There are no
partial allocations.
                                          ′       ′         ′    ′
Definition    Monotonicity: s ⊆ gi , s ⊆ s, v ≥ v ⇒ s ⊆ gi .
This means that if player i’s bid was granted for bidding < s, v > then his bid would also
                          ′   ′          ′          ′
be granted for bidding < s , v > where s ⊆ s and v ≥ v. Thus if a bid for a set of goods is
granted then a bid (with at least the same amount of money) for a subset of the goods will
be granted as well.
10                                                                              Lecture 11:June 8

Lemma 11.8 In a mechanism that satisfies Exactness and Monotonicity, given a bidder i,
a set si of goods and declarations for all other bidders in the game, there exists a critical
value vc such that:
                                      vi < vc ⇒ gi = ∅
                                           vi > vc ⇒ gi = si
Note that we do not know if i’s bid is granted when vi = vc and that vc can be infinite and
thus for every v, gi = ∅.

   Proof: Assume by contradiction our mechanism supports Exactness and Monotonicity,
but a vc as described above does not exist then either:

     1. For a bid vi by player i, gi 6= s and gi 6= ∅. But this contradicts Exactness. Contradic-
        tion.

     2. For two different possible bids of player i, v1 , v2 :   v1 < v2 and gi1 = s, gi2 = ∅. But
        this contradicts Monotonicity. Contradiction.

                                                                                                
Definition       Critical: s ⊆ gi ⇒ ti = vc
This has two meanings:

     1. The payment for a bid granted to player i does not depend on his bid but on the bids
        of the other players.

     2. The payment equals exactly to the (critical) value below which the bid will not be
        granted.

Definition       Participation: s 6⊆ gi ⇒ ti = 0

   This implies that if you are not granted the goods you bid for, you will not incur any
payments.

Lemma 11.9 In a mechanism that satisfies Exactness and Participation, a bidder whose
bid is denied has a profit of zero.

   Proof:
   By Exactness, the bidder gets nothing and thus his income is zero. By participation his
payment (expenditure) is zero. Thus prof it = income − expenditure = 0 − 0 = 0.
                                                                                        
Truthful Mechanism with Greedy Allocation in SMB                                                 11

Lemma 11.10 In a mechanism that satisfies Exactness, Monotonicity, Participation and
Critical a truthful bidder’s profit is nonnegative.

    Proof:
    If player i’s bid is denied, we conclude be lemma 11.9 that i’s profit is zero. Assume i’s
bid is granted and his type is < s, v >. Being truthful, i declaration is di =< s, v >. Thus
i is allocated s and his income is v. By lemma 11.8 , since i’s bid is granted, v ≥ vc . By
Critical, i’s payment is vc , thus his profit is v − vc ≥ 0.
                                                                                            

Lemma 11.11 In a mechanism that satisfies Exactness, Monotonicity, Participation and
Critical, a bidder i of type < s, v > is never better off declaring < s, v ′ > for some v ′ 6= v
than being truthful.

   Proof:
   For player i, compare the case i bids truthfully < s, v > and the case he bids < v ′ , s >.
Let gi be the goods he recieves for < s, v > and gi′ be the goods he recieves for < s, v ′ >.
There are three cases:
   1. If i’s bid is denied for < s, v ′ > (thus g ′ 6= s), then by lemma 11.9, his profit is zero
      and by lemma 11.10 his profit for < s, v > is nonnegative and the claim holds.
   2. Assume i’s bid is granted both for < s, v ′ > and < s, v > thus gi′ = s, gi = s. If both
      bids are granted then in both cases the player gets goods that he values to be worth v.
      In both cases the player pays the same payment vc (by Critical).Thus profit is identical
      in both cases and the player is not better off lying.
   3. Assume i’s bid is granted for < s, v ′ > but denied for < s, v > thus gi′ = s, gi = ∅. It
      must be that v ≥ vc ≥ v ′ . By lemma 11.9, being truthful gives i zero profit. Lying
      gives him profit v − vc ≤ 0.
                                                                                                 

Lemma 11.12 In a mechanism that satisfies Exactness, Monotonicity and Critical, a bidder
i declaring < s, v > whose bid is granted (gi = s), pays a price ti where ti ≥ t′i and t′i being
the price payed for declaring < s′ , v > where s′ ⊆ s.

     Proof:
     Since < s, v > was granted, by Monotonicity, so would < s′ , v >. By Critical, the price
t′i payed for < s′ , v > satisfies: for any x < t′i the bid < s′ , x > would be denied. By Critical,
for any x > ti the bid would be granted. Thus, it must that t′i ≤ ti .
                                                                                                 
     Using the above lemmas we will prove the following central Theorem:
12                                                                             Lecture 11:June 8

Theorem 11.13 If a mechanism satisfies Exactness, Monotonicity, Participation and Crit-
ical, then it is a truthful mechanism.

     Proof:
     Suppose player i’s type is < s, v >, we prove he is not better off declaring < s′ , v ′ >:
By lemma 11.10 the only case we must consider is when declaring < s′ , v ′ > yields positive
profit to i and by lemma 11.9 this means that this bid was granted. Assume, therfore that
gi′ = s′ .

     1. Assume s 6⊂ s′ . By SMB defintion, player i’s income is zero (he got the bundle he
        doesn’t want...). Since, by Critical, his payment is non-negative, his profit cannot be
        positive.

     2. Assume s ⊂ s′ . Being an SMB , i’s income from s′ is the same as from s. By
        lemma 11.12 it is evident that instead of declaring < s′ , v ′ >, i would not be worse off
        declaring < s′ , v >. By lemma 11.11 it is evident that < s′ , v > is not better off than
        being truthful, or in other words declaring < s, v >.

                                                                                                

11.5.3       A Truthful Mechanism with Greedy Allocation
We shall now describe a payment scheme that used with greedy algorithms of type Gi creates
a truthful mechanism for SMB.
The mechanism proposed is for G2 , i.e. sorting bids by |svii | . This can easily be adapted to
G1 ,G3 or any sort of G3 with a different norm with no added complexity.
The payment computation is done in parallel with the execution of Gi . Each payment calcu-
lation takes O(n) and thus computing all the payments is O(n2 ). Since Gi takes O(n log n)
the total running time is O(n2).

Definitions
     • AverageCosti = |svii|

     • NextBidder(i) : N −→ N, returns the first bidder following i (in the the sorted
       descending list of bids, that is AverageCosti ≥ AverageCostN extBidder(i) ) whose bid
       was denied, but would be granted had we removed i from the game. Defined Formally:

        NextBidder(i) = min{i|i < i, s(i)∩s(i) 6= ∅, ∀l, l < i, l 6= i, l granted ⇒ s(l)∩s(i) = ∅}

     • Greedy Payment Scheme (GP S). Let L be the sorted list created by Gi :
Truthful Mechanism with Greedy Allocation in SMB                                               13

       1. If gi = si , i pays AverageCostN extBidder(i) ×|si | (if there is no next bidder payment
          is 0), else:
       2. i pays 0.

Proposed Mechanism
Theorem 11.14 Gi together with GP S comprise a truthful mechanism for the SMB.

   Proof:
   We shall prove that Gi together with GP S satisfies Exactness, Motonicity , Participation
and Critical and use Theorem 11.13 to conclude it is a truthful mechanism:
  1. Exactness:
     By definiton of Gi .

  2. Motonicity:
     For any Gi and a player i with bids of < s, v >, < s′ , v ′ >, if gi = s, s′ ⊆ s and v ′ ≥ v
     then bidding < s′ , v ′ > would put i in an equal or better place in L and thus gi′ = s′
     as well.

  3. Participation:
     By definiton of GP S.

  4. Critical:
     For G2 with GP S, but similarly for any type of Gi with a similar GP S, if player i
     bids < s, v > and gi = s then i pays AverageCostN extBidder(i) × |s|. If i where to bid
     < s, v ′ > such that v ′ < AverageCostN extBidder(i) × |s| than he would lose the bid since
     v′
     |s|
         < AverageCostN extBidder(i) and thus be rated below NextBidder(i) in L. Thus the
     payment of i is equal to the critical value of i.
                                                                                                

11.5.4     Examples
  1. Let us return to the example we used in 11.5.1, but this time for For Gi with GP S:



                                                          vi
                                   Player   < si , vi >  |si |
                                                                 ti
                                   R        ({a}, 10)    10      9.5
                                   G        ({a, b}, 19) 9.5     0
                                   B        ({b}, 8)     8       0
14                                                                           Lecture 11:June 8




       We see the algorithm granted R his bid with a payment of 9.5 which is G’s average
       value, G’s bid is denied since some of his goods where allocated to R. B’s bid is granted
       as well with no payment since there is no next player after him in L.
     2. Another example of this algorithm at work:


                                                            vi
                                    Player    < si , vi >  |si |
                                                                   ti
                                    R         ({a}, 20)    20      0
                                    G         ({b}, 15)    15      0
                                    B         ({a, b}, 10) 10      0




       R and G’s bids are granted, B’s bid is denied. Had R not participated G’s bid would
       still be granted a and B’s bid would still be denied, thus his payment is 0. Had G
       not participated, B’s bid would still be denied, thus his payment is 0. In this case the
       allocation is also the efficient one.


11.6        Single-Unit Combinatorial Auctions
In a Single-Unit Combinatorial Auction bidders are interested in buying as many copies
of the a single good as offered by the seller. In this case the term auction maybe a bit
misleading, since the sellers acts more like a shopkeeper that chooses a price tag for the
product he is selling without knowing the potential buyers’ valuations.

11.6.1       Definitions
     1. All buyer valuations of the good are within a given range, thus:
                                             ∀i, vi ∈ [1, w].

     2. The highest valuation among buyers is denoted by
                                             v ∗ = max(vi )
Single-Unit Combinatorial Auctions                                                                   15

11.6.2     Single Copy Auction
In this type of auction only one copy of the good is sold. We construct an algorithm ALG
to determine the price tag we will give the product as follows (we are interested, of course,
in selling the product for the maximal bidder valuation):
    We pick a price tag of 2i (0 ≤ i ≤ log w) with probability of log1 w . We define l such that:
                                           2l−i ≤ v ∗ ≤ 2l
Effectively we cut the potential tag range into about log w segments, each segment being
twice as wide as the segment preceding it. We randomly choose one of the segments with
equal probability and fix the price to be in this segment. OP T , knowing all valuations, will,
of course, select a price tag of v ∗ . Our ALG has log1 w chance of picking a price tag in the
segment containing v ∗ , a price tag in this segment can be at the worst case equal to v ∗ /2.
Thus the expected revenue generated by ALG is bounded from below by 2 log w. Thus we
get a competitive ratio of:
                                          v∗
                                              ≤ 2 log w.
                                         ALG

11.6.3     Several Copies Auction
Assume several copies of the single product are for sale and they number log w. OP T will
always sell all the products for a total revenue of v ∗ log w (selling all the products to the
buyer with the highest valuation).
Our algorithm, ALG, begins by selling the good with a price of 1 and after every sale we
make, we double the price.
We consider the final price tag 2l , that is the price tag where no willing buyers are left for
the product or we run out of stock, and observe two cases:
  1. If 2l ≤ v ∗ , (actually it is exactly 2l = v ∗ , since this is the only possible way the seller can
     clear his stock), then the best price we got is no worse than v ∗ , yielding a competitive
     ratio of about log w.
  2. If v ∗ < 2l , then exists player j that bought at 2l−1 , and so 2l−1 ≤ vj ≤ v ∗ . Thus, the
     last item sold guarantees the following:
                                                            1
                                         v(ALG) ≥ vj ≥ v ∗
                                                            2
     and since
                                          v(OP T ) ≤ v ∗ log w.
      In this case we get a competitive ratio of:
                                           v(OP T )
                                                    ≤ 2 log w.
                                           v(ALG)
16                                                                                    Lecture 11:June 8

11.7         Multi-Unit Combinatorial Auctions
In this part we study multi-unit combinatorial auctions. In a Multi-Unit Combinatorial
Auction there are n types of goods, for each good i there are ki copies for sale. We isolate
our treatment to auctions where the number of copies of each good are relatively small.

11.7.1        Definitions
     • Let U be the set of all possible bundles, thus every member of U is a bundle that may
       be requested by one of the bidders. Formally:

                                      U = {0, ..., k1 } × ... × {0, ..., kn }

     • For each bidder j, there exists a valuation function:

                                                 vj : U −→ ℜ+

     • There exists a lower bound α and and upper bound β. Each bidder desires 0 or at
       least αki and at most βki units of good i .

     • We simplify the problem by assuming 1 unit exists for each product but players can
       request fractional amounts of it (bids for each product are in the range [0, ..1]]).

     • Demand Oracle . A demand oracle for valuation v accepts as input a vector of item
       prices p(1) , p(2) ...p(n) and outputs the demand for the items at these prices, i.e. it
       outputs the vector λ =       P(λ(1) , λ(2) , ..., λ(n) ) that maximizes the surplus v(λ) − h~λ, pi =
                                        (i) (i)
       v(λ(1) , λ(2) , ..., λ(n) ) − i λ P

     • Allocation. An allocation is a collection of m non-negative vectors λ1 , λ2 ..., λm , where
         (i)
       λj specifies the amount of good i that bidder j has received. An allocation is feasible
                    P (i)
       if for all i, j λj ≤ 1.
                                                                       P
     • Value of an allocation. The value of an allocation A is V (A) = j vj (λj ). An allocation
       is optimal if it achieves the maximal value of any feasible allocation.

     • Direct Relevation mechanism. A direct relevation mechanism recieves as input a vector
       of declared valuations v1 , .., vm and produces as output an allocation λ1 , .., λm and a
       vector of payments P1 , .., Pm , where bidder j recieves λj and pays Pj .

     • Incentive Compatibility. A direct relevation mechanism is inncentive compatible if for
       every bidder j, every valuation vj , all declarations of the other bidders v−j , and all
       possible ”false declaratrions” vj′ we have that bidder j’s utility with bidding vj′ is no
Multi-Unit Combinatorial Auctions                                                           17

     more than his utility truthfully bidding vj . I.e. Let λj and Pj be the mechanism’s
     output with input (vj , v−j ) and λ′j and Pj′ be the mechanism’s output with input
     (vj′ , v−j ) then vj (λ) − Pj ≥ vj (λ′ ) − Pj′

11.7.2     The Online Algorithm
We present an Online Algorithm for the problem of Multi-Unit Auction with Bounded De-
mand. The idea of the algorithm is as follows :
At any point in time good i has a price of P (i) . The bidders arrive one after the other, and
when bidder j is considered he chooses which bundle he prefers according to the current
prices. The prices P (i) are initialized to some parameter P0 and are increased whenever a
quantity of that good is allocated. The increase in price is exponential with a rate r per unit
allocation.
    Formally, the online Algorithm with Parameters P0 and r is as follows,
                       (i)
   • for each good i, l1 = 0
   • for each bidder j = 1 to m
                                       (i)
                              (i)
         – for each good i, Pj = P0 r lj
         – Query j’s demand oracle on the current prices and allocate:
                      (1)    (n)       (1)      (n)
           Demand(Pj , ..., Pj ) −→ (xj , ..., xj )
         – determinePbidder  j’s payment as:
                        (i) (i)
           Pjtotal = i xj Pj
         – update
            (i)    (i)  (i)
           lj+1 = lj + xj

11.7.3     Analysis of Online Algorithm
The correctness of the algorithm involves three elements: incentive compatibility (as defined
in previous lectures), validity and approximation ratio.
Lemma 11.15 For any outer choice of parameters P0 and r, the online algorithm is incen-
tive compatible.
The lemma follows from the theorem below:
Theorem 11.16 A direct relevation mechanism is incentive compatible if and only if for
every bidder j and every vector of bids of the other players v−j it:
  1. fixes a price pj (λ) for every possible allocation λ to bidder j, and whenever bidder j is
     allocated λ his payment is pj (λ). (Note that pj (λ) does not depend on vj .)
18                                                                                   Lecture 11:June 8

     2. allocates to j, λ that maximizes the value of vj (λ)−pj (λ) over all λ that can be allocated
        to j (for any choice of vj ).
     Proof:

     1. We show the two conditions are sufficient. Fix v−j and vj . Now consider an alternative
        ”lie” vj′ for bidder j. Let λ and p be the mechanism’s output for j with input (vj , v−j )
        and λ′ and p′ be the mechanism’s output for for j with input (vj′ , v−j ). If λ = λ′
        then the first condition ensures that p = p′ = pj (λ), and thus both allocation and
        the payments with declaration vj′ are equivalent to those obtained with a truthful
        bid. If λ 6= λ′ , then p = pj (λ), p′ = pj (λ′ ), and the second codition ensures that
        vj (λ) − pj (λ) ≥ vj (λ′ ) − pj (λ′ ), and thus the utility with declaration vj′ is less than that
        obtained with a truthful bid.

     2. We show the two conditions are necessary.
           • Assume to the contrary that the first condition does not hold, i.e. that for some
             v−j , and the valuations vj and vj′ , the mechanism yields the same allocation λ to
             player j, but charges different payments p > p′ , respectively, from him. Now it
             is clear that for the case where bidders’ valuations are v−j and vj , for bidder j
             to declare vj′ instead of vj will imorove his utility (since the allocation remains
             the same, while the payment decreases), contrary to the definition of incentive
             compatibility.
           • Now assume the first condition holds, but assume to the contrary that the second
             condtion doen’t, i.e. that for some v−j and valuation vj , the mechanism allocates
             λ to j with the property that vj (λ) − pj (λ) < vj (λ′ ) − pj (λ′ ), for some λ′ that can
             be allocated to j, e.g. if he bids vj′ . But this exactly says that for the case where
             bidders’ valuations are v−j and vj , the for bidder j to declare vj′ instead of vj will
             improve his utility (since he is now allocated λ′ and charged pj (λ′ )), contrary to
             the definition of incentive compatibility.

                                                                                             
    Next we prove the validity of the algorithm. i.e. that it never allocates more than the
available quantity of each good. This is true as long as the values of P0 and r satisfy a
                            j−1
                        (i) P (i)
certain condition. Let lj =     xt the total allocation of good i to players in [1..j − 1]. Let
                            t=1
 (i)  (i)                                       (i)
l∗ = lm+1 the total allocation to all players, l∗ ≤ 1.          Let vmax = max vj (λ) be the highest
                                                                              j,λ
valuation in the auction.
                                                                                          (i)
Lemma 11.17 Let P0 , r be such that the condition P0 r γ ≥ vmax
                                                            α
                                                                holds, then l∗ ≤ γ + β In
particular for γ = 1 − β the algorithm is valid.
Multi-Unit Combinatorial Auctions                                                              19

                                              (i)
    Proof: Assume to the contrary that lj+1 > γ +β, and let j be the first player that caused
                                       (i)
this to happen for some good i, i.e. lj+1 > γ + β since no player is allocated more than β
                                   (i)                       (i)
units of each good, we have that (lj > γ). It follows that (Pj > P0 r γ ≥ vmax
                                                                            β
                                                                               ). Since player
                                                                                (i)
j is allocated at least α units of good i, his payment is at least αPj > vmax ≥ vj (xj ). Thus
player j’s payment is more than his valuation for the bundle allocated, in contradiction to
the definition of the demand oracle and the possibility of choosing the empty bundle and
paying nothing.                                                                              
    Our final step is to prove a bound on the approximation ratio. For an allocation algorithm
A, let V(A)
          P denote the total sum of bidders’ valuations for the allocation produced, i.e.
V (A) = j vj (xj ), where (x1 , ..., xm ) is the allocation produced by A.
    We now prove that:

                                            rβ − 1
                           V (ALG)(1 +             ) ≥ V (OP T ) − nP0 .
                                               β
To get this conjecture we prove some additional lemmas.

                                 −
                                 →                      −
                                                        →
Lemma 11.18 For any j and λj , vj (−   →
                                       xj ) ≥ vj −hλj , P∗ i, where P∗ is the vector of the goods’
                                       (1)    (n)                (i)         (i)
prices at the end of allocation, P∗ = P∗ ...P∗ , and where P∗ = P (0) r l∗

   Proof: When bidder j is allocated than the inequality
                                              →
                                              −          −
                                                         →        −
                                                                  → −   →
                             vj (−
                                 →
                                 xj ) − h−
                                         →
                                         xj , Pj i ≥ vj ( λj ) − h λj , Pj i

takes place. It derives from definition of demand oracle.
      −
      → −   →
Since P∗ ≥ Pj for any j, then
                                              →
                                              −          −
                                                         →        −
                                                                  → −   →
                             vj (−
                                 →
                                 xj ) − h−
                                         →
                                         xj , Pj i ≥ vj ( λj ) − h λj , P∗ i.
                                     −
                                     → −  →               →
                                                          −
The last inequality holds true since P∗ ≥ P . Since h−
                                                     →
                                                     xj , Pj i ≥ 0 the lemma holds.             

Corollary 11.19                                                 X
                                 V (ALG) ≥ V (OP T ) −                P∗i
                                                                  i

    Since each bidder pays no more than the value of the bundle he gets, the total revenue
is a lower bound for the total valuation. When the j is allocated we have
                                               −
                                               →
                             vj (−
                                 →
                                 xj )) ≥ h−
                                          →
                                                      X (i)       (i)
                                          xj , Pj i =  xj P(0) r lj
                                                           i
20                                                                                                  Lecture 11:June 8

     Summing for all bidders we have
                                                                            (i)                     (i)
                                                                     (i)                      (i)
                                    X                  XX                          XX
                    V (ALG) =           vj (xj ) ≥                  xj P0 r lj =           xj P0 r lj
                                    j                   j      i                   i   j

             P (i)     (i)                                                                (i)
                                                                                    (i)
   Let R(i) = xj P0 r lj be the total revenue obtained for good i. Let ∆j R(i) = xj P0 r lj ,
              j
                                       (i)    (i)
then R = ∆j R(i) . We denote h = xj , t = lj , so ∆j R(i) =
      (i)
                                                                ∆j R(i) = hP0 r t .
            P                                                P
                j
Let ∆R(i) be the change when the price grows continuously. We compare this value to

                                    Zt+h
                          ∆R(i)                   r x t+h r t+h − r t    rt h
                                =       r x dx =      |t =            =      (r − 1).
                           P0                    ln r         ln r      ln r
                                    t


Since the demand of any good is bounded by β we can bound the ratio between ∆R(i) and
∆R(i) , (in other words, bounding the ratio between the continuous and discrete evaluations).
                                      r           t
                         ∆R(i)       ln r
                                          (r h − 1)       rh − 1    1 rβ − 1
                     max       = max                = max        =
                     h≤β ∆R(i)   h≤β       hr t       h≤β h ln r   ln r β
And so
                                                           β
                                           R(i) ≥             (P i − P0 ),
                                                        rβ − 1 ∗
where P∗ = r t+h and P0 = r t .
Summing this result over all goods, we achieve the following bound:

Lemma 11.20
                                             X                        β     X
                              V (ALG) ≥               R(i) ≥              (   P∗(i) − nP0 )
                                              j
                                                                   rβ − 1

                                                rβ − 1         X
                                    V (ALG) =          + nP0 ≥     P∗(i)
                                                   β            i
                                                              X
                                        V (ALG) ≥ V (OP T ) −   P∗(i)
We obtain compatible, valid and approximation algorithm as long as following two conditions
on the parameters P0 and r hold:

     1. nP0 ≤ V (OP
                  2
                    T)


     2. r 1−β ≥ vαP
                 max
                    0
                      .
11.8. REFERENCES                                                                               21

And so
                                         rβ − 1  1
                               V (ALG)          ≥ V (OP T ).
                                            β    2
Under these conditions no item is over allocated and the approximation ratio is C = 2(1 +
r β −1
   β
       )
In order to obtain a complete online algorithm we need to choose parameters to our ALG.
In our algorithm we choose them before any players arrive. This is possible, only if there
exists an a priory known bounds vmin and vmax such that:

                               vmin ≤ max vj (β, ..., β) ≤ vmax
                                         j



We will assume this condition holds.                                    β
                                                                     ρ 1−β
                                                                           −1
Using the algorithm with P0 = vmin
                                 2n
                                     and r = vαP
                                              max
                                                 0
                                                     we achieve 2   2αn
                                                                       β
                                                                                - approximation to
                                   vmax
the optimal allocation, where ρ = vmin .


11.8      References
  1. Mansour Y. ”Topics in Computational Game Theory” Course, Notes from lecture 11
     presented at 11/6/2004, Tel Aviv University, Israel.

  2. Lehmann D, O’Callaghan LI, Shoham Y. Truth Revelation in Approximately Efficient
     Combinatorial Auctions. Journal of the ACM, October 19, 2002.

  3. Bartal Y, Gonen R, Nisan N. Incentive Compatible Multi Unit Combinatorial Auctions.
     ACM Press, 2003.



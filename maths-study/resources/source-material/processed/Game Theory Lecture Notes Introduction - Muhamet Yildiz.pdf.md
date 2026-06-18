---
normalized_id: shared-lecture-notes-game-theory-lecture-notes-introduction-muhamet-yildiz
exam_code: SHARED
material_scope: game theory lecture notes introduction - muhamet yildiz.pdf
material_group: shared
document_type: lecture-notes
source_repo_path: resources/source-material/shared/Game Theory Lecture Notes Introduction - Muhamet Yildiz.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-lecture-notes-game-theory-lecture-notes-introduction-muhamet-yildiz

               14.12 Game Theory Lecture Notes
                                  Introduction
                                  Muhamet Yildiz

                                     (Lecture 1)


   Game Theory is a misnomer for Multiperson Decision Theory, analyzing the decision-
making process when there are more than one decision-makers where each agent’s payoﬀ
possibly depends on the actions taken by the other agents. Since an agent’s preferences
on his actions depend on which actions the other parties take, his action depends on his
beliefs about what the others do. Of course, what the others do depends on their beliefs
about what each agent does. In this way, a player’s action, in principle, depends on the
actions available to each agent, each agent’s preferences on the outcomes, each player’s
beliefs about which actions are available to each player and how each player ranks the
outcomes, and further his beliefs about each player’s beliefs, ad infinitum.
   Under perfect competition, there are also more than one (in fact, infinitely many)
decision makers. Yet, their decisions are assumed to be decentralized. A consumer tries
to choose the best consumption bundle that he can aﬀord, given the prices — without
paying attention what the other consumers do. In reality, the future prices are not
known. Consumers’ decisions depend on their expectations about the future prices. And
the future prices depend on consumers’ decisions today. Once again, even in perfectly
competitive environments, a consumer’s decisions are aﬀected by their beliefs about
what other consumers do — in an aggregate level.
   When agents think through what the other players will do, taking what the other
players think about them into account, they may find a clear way to play the game.
Consider the following “game”:




                                            1
                                    1\2        L        m        R
                                      T      (1, 1) (0, 2)     (2, 1)
                                      M      (2, 2) (1, 1)     (0, 0)
                                      B      (1, 0) (0, 0) (−1, 1)

       Here, Players 1 has strategies, T, M, B and Player 2 has strategies L, m, R. (They
pick their strategies simultaneously.) The payoﬀs for players 1 and 2 are indicated by
the numbers in parentheses, the first one for player 1 and the second one for player 2.
For instance, if Player 1 plays T and Player 2 plays R, then Player 1 gets a payoﬀ of 2
and Player 2 gets 1. Let’s assume that each player knows that these are the strategies
and the payoﬀs, each player knows that each player knows this, each player knows that
each player knows that each player knows this,... ad infinitum.
       Now, player 1 looks at his payoﬀs, and realizes that, no matter what the other player
plays, it is better for him to play M rather than B. That is, if 2 plays L, M gives 2 and
B gives 1; if 2 plays m, M gives 1, B gives 0; and if 2 plays R, M gives 0, B gives -1.
Therefore, he realizes that he should not play B.1 Now he compares T and M. He realizes
that, if Player 2 plays L or m, M is better than T, but if she plays R, T is definitely
better than M. Would Player 2 play R? What would she play? To find an answer to
these questions, Player 1 looks at the game from Player 2’s point of view. He realizes
that, for Player 2, there is no strategy that is outright better than any other strategy.
For instance, R is the best strategy if 1 plays B, but otherwise it is strictly worse than
m. Would Player 2 think that Player 1 would play B? Well, she knows that Player 1 is
trying to maximize his expected payoﬀ, given by the first entries as everyone knows. She
must then deduce that Player 1 will not play B. Therefore, Player 1 concludes, she will
not play R (as it is worse than m in this case). Ruling out the possibility that Player 2
plays R, Player 1 looks at his payoﬀs, and sees that M is now better than T, no matter
what. On the other side, Player 2 goes through similar reasoning, and concludes that 1
must play M, and therefore plays L.
       This kind of reasoning does not always yield such a clear prediction. Imagine that
you want to meet with a friend in one of two places, about which you both are indiﬀerent.
Unfortunately, you cannot communicate with each other until you meet. This situation
   1
       After all, he cannot have any belief about what Player 2 plays that would lead him to play B when
M is available.


                                                    2
is formalized in the following game, which is called pure coordination game:

                                   1 \ 2 Left         Right
                                   Top          (1,1) (0,0)
                                   Bottom       (0,0) (1,1)

   Here, Player 1 chooses between Top and Bottom rows, while Player 2 chooses between
Left and Right columns. In each box, the first and the second numbers denote the von
Neumann-Morgenstern utilities of players 1 and 2, respectively. Note that Player 1
prefers Top to Bottom if he knows that Player 2 plays Left; he prefers Bottom if he
knows that Player 2 plays Right. He is indiﬀerent if he thinks that the other player is
likely to play either strategy with equal probabilities. Similarly, Player 2 prefers Left if
she knows that player 1 plays Top. There is no clear prediction about the outcome of
this game.
   One may look for the stable outcomes (strategy profiles) in the sense that no player
has incentive to deviate if he knows that the other players play the prescribed strategies.
Here, Top-Left and Bottom-Right are such outcomes. But Bottom-Left and Top-Right
are not stable in this sense. For instance, if Bottom-Left is known to be played, each
player would like to deviate — as it is shown in the following figure:

                              1\ 2       Left          Right
                             Top         (1,1)         ⇐⇓(0,0)
                             Bottom (0,0)⇑=⇒ (1,1)

   (Here, ⇑ means player 1 deviates to Top, etc.)
   Unlike in this game, mostly players have diﬀerent preferences on the outcomes, in-
ducing conflict. In the following game, which is known as the Battle of Sexes, conflict
and the need for coordination are present together.

                                   1 \ 2 Left         Right
                                   Top       (2,1) (0,0)
                                   Bottom (0,0) (1,2)

   Here, once again players would like to coordinate on Top-Left or Bottom-Right, but
now Player 1 prefers to coordinate on Top-Left, while Player 2 prefers to coordinate on
Bottom-Right. The stable outcomes are again Top-Left and Bottom- Right.

                                                 3
                                           1


                                  T                        B



                              2                                2

                          L           R             L              R



                      (2,1)           (0,0)        (0,0)               (1,2)


                                          Figure 1:

   Now, in the Battle of Sexes, imagine that Player 2 knows what Player 1 does when
she takes her action. This can be formalized via the following tree:
   Here, Player 1 chooses between Top and Bottom, then (knowing what Player 1 has
chosen) Player 2 chooses between Left and Right. Clearly, now Player 2 would choose
Left if Player 1 plays Top, and choose Right if Player 1 plays Bottom. Knowing this,
Player 1 would play Top. Therefore, one can argue that the only reasonable outcome of
this game is Top-Left. (This kind of reasoning is called backward induction.)
   When Player 2 is to check what the other player does, he gets only 1, while Player 1
gets 2. (In the previous game, two outcomes were stable, in which Player 2 would get 1
or 2.) That is, Player 2 prefers that Player 1 has information about what Player 2 does,
rather than she herself has information about what player 1 does. When it is common
knowledge that a player has some information or not, the player may prefer not to have
that information — a robust fact that we will see in various contexts.

Exercise 1 Clearly, this is generated by the fact that Player 1 knows that Player 2
will know what Player 1 does when she moves. Consider the situation that Player 1
thinks that Player 2 will know what Player 1 does only with probability π < 1, and this
probability does not depend on what Player 1 does. What will happen in a “reasonable”
equilibrium? [By the end of this course, hopefully, you will be able to formalize this

                                               4
situation, and compute the equilibria.]

    Another interpretation is that Player 1 can communicate to Player 2, who cannot
communicate to player 1. This enables player 1 to commit to his actions, providing a
strong position in the relation.

Exercise 2 Consider the following version of the last game: after knowing what Player
2 does, Player 1 gets a chance to change his action; then, the game ends. In other words,
Player 1 chooses between Top and Bottom; knowing Player 1’s choice, Player 2 chooses
between Left and Right; knowing 2’s choice, Player 1 decides whether to stay where he
is or to change his position. What is the “reasonable” outcome? What would happen if
changing his action would cost player 1 c utiles?

    Imagine that, before playing the Battle of Sexes, Player 1 has the option of exiting,
in which case each player will get 3/2, or playing the Battle of Sexes. When asked to
play, Player 2 will know that Player 1 chose to play the Battle of Sexes.
    There are two “reasonable” equilibria (or stable outcomes). One is that Player 1
exits, thinking that, if he plays the Battle of Sexes, they will play the Bottom-Right
equilibrium of the Battle of Sexes, yielding only 1 for player 1. The second one is
that Player 1 chooses to Play the Battle of Sexes, and in the Battle of Sexes they play
Top-Left equilibrium.
    1
                 Play



                                          2
                                      1           Left    Right
         Exit
                                      Top         (2,1)   (0,0)
                                      Bottom      (0,0)   (1,2)




 (3/2,3/2)


    Some would argue that the first outcome is not really reasonable? Because, when
asked to play, Player 2 will know that Player 1 has chosen to play the Battle of Sexes,
forgoing the payoﬀ of 3/2. She must therefore realize that Player 1 cannot possibly be

                                              5
planning to play Bottom, which yields the payoﬀ of 1 max. That is, when asked to play,
Player 2 should understand that Player 1 is planning to play Top, and thus she should
play Left. Anticipating this, Player 1 should choose to play the Battle of Sexes game,
in which they play Top-Left. Therefore, the second outcome is the only reasonable one.
(This kind of reasoning is called Forward Induction.)
   Here are some more examples of games:

  1. Prisoners’ Dilemma:
      1    \       2     Confess Not Confess
      Confess            (-1, -1)     (1, -10)
      Not Confess (-10, 1)            (0, 0)
     This is a well known game that most of you know. [It is also discussed in Gibbons.]
     In this game no matter what the other player does, each player would like to
     confess, yielding (-1,-1), which is dominated by (0,0).

  2. Hawk-Dove game
      1 \ 2 Hawk          Dove
            ¡ V −C V −C ¢
      Hawk      2
                  , 2     (V , 0)
      Dove      (0,V )              ( V2 , V2 )
     This is a generic biological game, but is also quite similar to many games in
     economics and political science. V is the value of a resource that one of the players
     will enjoy.       If they shared the resource, their values are V /2. Hawk stands for
     a “tough” strategy, whereby the player does not give up the resource. However,
     if the other player is also playing hawk, they end up fighting, and incur the cost
     C/2 each. On the other hand, a Hawk player gets the whole resource for itself
     when playing a Dove. When V > C, we have a Prisoners’ Dilemma game, where
     we would observe fight.
     When we have V < C, so that fighting is costly, this game is similar to another
     well-known game, inspired by the movie Rebel Without a Cause, named “Chicken”,
     where two players driving towards a cliﬀ have to decide whether to stop or continue.
     The one who stops first loses face, but may save his life. More generally, a class
     of games called “wars of attrition” are used to model this type of situations. In



                                                  6
this case, a player would like to play Hawk if his opponent plays Dove, and play
Dove if his opponent plays Hawk.




                                    7
               14.12 Game Theory Lecture Notes
                              Theory of Choice
                                   Muhamet Yildiz

                                       (Lecture 2)


1     The basic theory of choice
We consider a set X of alternatives. Alternatives are mutually exclusive in the sense
that one cannot choose two distinct alternatives at the same time. We also take the set
of feasible alternatives exhaustive so that a player’s choices will always be defined. Note
that this is a matter of modeling. For instance, if we have options Coﬀee and Tea, we
define alternatives as C = Coﬀee but no Tea, T = Tea but no Coﬀee, CT = Coﬀee and
Tea, and NT = no Coﬀee and no Tea.
    Take a relation º on X. Note that a relation on X is a subset of X × X. A relation
º is said to be complete if and only if, given any x, y ∈ X, either x º y or y º x. A
relation º is said to be transitive if and only if, given any x, y, z ∈ X,

                               [x º y and y º z] ⇒ x º z.

A relation is a preference relation if and only if it is complete and transitive. Given any
preference relation º, we can define strict preference Â by

                             x Â y ⇐⇒ [x º y and y 6º x],

and the indiﬀerence ∼ by

                             x ∼ y ⇐⇒ [x º y and y º x].

    A preference relation can be represented by a utility function u : X → R in the
following sense:
                          x º y ⇐⇒ u(x) ≥ u(y)         ∀x, y ∈ X.

                                             1
The following theorem states further that a relation needs to be a preference relation in
order to be represented by a utility function.

Theorem 1 Let X be finite. A relation can be presented by a utility function if and only
if it is complete and transitive. Moreover, if u : X → R represents º, and if f : R → R
is a strictly increasing function, then f ◦ u also represents º.

    By the last statement, we call such utility functions ordinal.
    In order to use this ordinal theory of choice, we should know the agent’s preferences on
the alternatives. As we have seen in the previous lecture, in game theory, a player chooses
between his strategies, and his preferences on his strategies depend on the strategies
played by the other players. Typically, a player does not know which strategies the
other players play. Therefore, we need a theory of decision-making under uncertainty.


2     Decision-making under uncertainty
We consider a finite set Z of prizes, and the set P of all probability distributions p : Z →
                   P
[0, 1] on Z, where z∈Z p(z) = 1. We call these probability distributions lotteries. A
lottery can be depicted by a tree. For example, in Figure 1, Lottery 1 depicts a situation
in which if head the player gets $10, and if tail, he gets $0.


                                                                 10
                                              1/2
                         Lottery 1

                                                 1/2             0

                                        Figure 1:

    Unlike the situation we just described, in game theory and more broadly when agents
make their decision under uncertainty, we do not have the lotteries as in casinos where the
probabilities are generated by some machines or given. Fortunately, it has been shown
by Savage (1954) under certain conditions that a player’s beliefs can be represented by

                                             2
a (unique) probability distribution. Using these probabilities, we can represent our acts
by lotteries.
      We would like to have a theory that constructs a player’s preferences on the lotteries
from his preferences on the prizes. There are many of them. The most well-known–and
the most canonical and the most useful–one is the theory of expected utility maximiza-
tion by Von Neumann and Morgenstern. A preference relation º on P is said to be
represented by a von Neumann-Morgenstern utility function u : Z → R if and only if
                                 X              X
                p º q ⇐⇒ U (p) ≡   u(z)p(z) ≥       u(z)q(z) ≡ U(q)              (1)
                                           z∈Z               z∈Z

for each p, q ∈ P . Note that U : P → R represents º in ordinal sense. That is, the agent
acts as if he wants to maximize the expected value of u. For instance, the expected
utility of Lottery 1 for our agent is E(u(Lottery 1)) = 12 u(10) + 12 u(0).1
      The necessary and suﬃcient conditions for a representation as in (1) are as follows:

Axiom 1 º is complete and transitive.

      This is necessary by Theorem 1, for U represents º in ordinal sense. The second
condition is called independence axiom, stating that a player’s preference between two
lotteries p and q does not change if we toss a coin and give him a fixed lottery r if “tail”
comes up.

Axiom 2 For any p, q, r ∈ P , and any a ∈ (0, 1], ap + (1 − a)r Â aq + (1 − a)r ⇐⇒
p Â q.

      Let p and q be the lotteries depicted in Figure 2. Then, the lotteries ap + (1 − a)r
and aq + (1 − a)r can be depicted as in Figure 3, where we toss a coin between a fixed
lottery r and our lotteries p and q. Axiom 2 stipulates that the agent would not change
his mind after the coin toss. Therefore, our axiom can be taken as an axiom of “dynamic
consistency” in this sense.
      The third condition is purely technical, and called continuity axiom. It states that
there are no “infinitely good” or “infinitely bad” prizes.

Axiom 3 For any p, q, r ∈ P , if p Â r, then there exist a, b ∈ (0, 1) such that ap + (1 −
a)r Â q Â bp + (1 − r)r.
  1
                                                                                     R
      If Z were a continuum, like R, we would compute the expected utility of p by       u(z)p(z)dz.

                                                   3
                   ³                                 ³
                ³³³                              ³³³
             ³³                                ³³
         d
         ³ ³³
       p PPP                               d
                                           ³ ³³
                                         q PPP
             PP                                PP
                PP                               PP
                  PP                               PP




                       Figure 2: Two lotteries




                  ³³                              ³³
              ³ ³³                             ³³³
       p d³                             q dP
             ³                               ³³
           ³³                              ³³
          PP
       ¡    PP                          ¡ PPP
     ¡        PP                      ¡        PP
                 PP                              PP
   ¡
   a               P                ¡
                                    a               P
d                                d
  ¡                                ¡
¡                                ¡
@                                @
  @1 − a                           @1 − a
   @                                @
     @                                @
       @r                               @r


ap + (1 − a)r                    aq + (1 − a)r


                Figure 3: Two compound lotteries




                                 4
      p(z2 )
      6


  1
   @
     @
      @
       @
  βH
   p    @
     HH     @
       HHl   @
   p0
  αH        HH@
     HH       H@H@
       HHl0        Hq
            HH     ¡@
              HH¡     @
              ¡q 0 HH @
             ¡        HH@
            ¡            @
                        HH
        ¡                 @
                          H
       ¡                   @
      ¡                     @
     ¡                       @
   ¡                          @                        - p(z1 )
   δ z0                                        1

                    Figure 4: Indiﬀerence curves on the space of lotteries

      Axioms 2 and 3 imply that, given any p, q, r ∈ P and any a ∈ [0, 1],

                        if p ∼ q, then ap + (1 − a) r ∼ aq + (1 − a)r.                    (2)

This has two implications:

   1. The indiﬀerence curves on the lotteries are straight lines.

   2. The indiﬀerence curves, which are straight lines, are parallel to each other.

      To illustrate these facts, consider three prizes z0 , z1 , and z2 , where z2 Â z1 Â z0 .
A lottery p can be depicted on a plane by taking p (z1 ) as the first coordinate (on
the horizontal axis), and p (z2 ) as the second coordinate (on the vertical axis). p (z0 )
is 1 − p (z1 ) − p (z2 ).   [See Figure 4 for the illustration.] Given any two lotteries p
and q, the convex combinations ap + (1 − a) q with a ∈ [0, 1] form the line segment
connecting p to q. Now, taking r = q, we can deduce from (2) that, if p ∼ q, then

                                               5
ap + (1 − a) q ∼ aq + (1 − a)q = q for each a ∈ [0, 1]. That this, the line segment
connecting p to q is an indiﬀerence curve. Moreover, if the lines l and l0 are parallel,
then α/β = |q0 | / |q|, where |q| and |q 0 | are the distances of q and q 0 to the origin,
respectively. Hence, taking a = α/β, we compute that p0 = ap + (1 − a) δz0 and q 0 =
aq + (1 − a) δ z0 , where δ z0 is the lottery at the origin, and gives z0 with probability 1.
Therefore, by (2), if l is an indiﬀerence curve, l0 is also an indiﬀerence curve, showing
that the indiﬀerence curves are parallel.
   Line l can be defined by equation u1 p (z1 ) + u2 p (z2 ) = c for some u1 , u2 , c ∈ R. Since
l0 is parallel to l, then l0 can also be defined by equation u1 p (z1 ) + u2 p (z2 ) = c0 for some
c0 . Since the indiﬀerence curves are defined by equality u1 p (z1 ) + u2 p (z2 ) = c for various
values of c, the preferences are represented by

                      U (p) = 0 + u1 p (z1 ) + u2 p (z2 )
                              ≡ u(z0 )p(z0 ) + u(z1 )p (z1 ) + u(z2 )p(z2 ),

where

                                        u (z0 ) = 0,
                                         u(z1 ) = u1 ,
                                         u(z2 ) = u2 ,

giving the desired representation.
   This is true in general, as stated in the next theorem:

Theorem 2 A relation º on P can be represented by a von Neumann-Morgenstern
utility function u : Z → R as in (1) if and only if º satisfies Axioms 1-3. Moreover, u
and ũ represent the same preference relation if and only if ũ = au + b for some a > 0
and b ∈ R.

   By the last statement in our theorem, this representation is “unique up to aﬃne
transformations”. That is, an agent’s preferences do not change when we change his
von Neumann-Morgenstern (VNM) utility function by multiplying it with a positive
number, or adding a constant to it; but they do change when we transform it through a
non-linear transformation. In this sense, this representation is “cardinal”. Recall that,
in ordinal representation, the preferences wouldn’t change even if the transformation

                                                6
                                                                                    √
were non-linear, so long as it was increasing. For instance, under certainty, v =    u and
u would represent the same preference relation, while (when there is uncertainty) the
                        √
VNM utility function v = u represents a very diﬀerent set of preferences on the lotteries
than those are represented by u. Because, in cardinal representation, the curvature of
the function also matters, measuring the agent’s attitudes towards risk.


3     Attitudes Towards Risk
Suppose individual A has utility function uA . How do we determine whether he dislikes
risk or not?
    The answer lies in the cardinality of the function u.
    Let us first define a fair gamble, as a lottery that has expected value equal to 0. For
instance, lottery 2 below is a fair gamble if and only if px + (1 − p)y = 0.



                                                              x
                                                 p
                           Lottery 2

                                                 1-p          y

    We define an agent as Risk-Neutral if and only if he is indiﬀerent between accepting
and rejecting all fair gambles. Thus, an agent with utility function u is risk neutral if
and only if


                       E(u(lottery 2)) = pu(x) + (1 − p)u(y) = u(0)

for all p, x, and y.
    This can only be true for all p, x, and y if and only if the agent is maximizing the
expected value, that is, u(x) = ax + b. Therefore, we need the utility function to be
linear.
    Therefore, an agent is risk-neutral if and only if he has a linear Von-Neumann-
Morgenstern utility function.

                                             7
   An agent is strictly risk-averse if and only if he rejects all fair gambles:

                          E(u(lottery 2)) < u(0)
                     pu(x) + (1 − p)u(y) < u(px + (1 − p)y) ≡ u(0)

Now, recall that a function g(·) is strictly concave if and only if we have

                         g(λx + (1 − λ)y) > λg(x) + (1 − λ)g(y)

for all λ ∈ (0, 1). Therefore, strict risk-aversion is equivalent to having a strictly concave
utility function. We will call an agent risk-averse iﬀ he has a concave utility function,
i.e., u(λx + (1 − λ)y) > λu(x) + (1 − λ)u(y) for each x, y, and λ.
   Similarly, an agent is said to be (strictly) risk seeking iﬀ he has a (strictly) convex
utility function.
   Consider Figure 5. The cord AB is the utility diﬀerence that this risk-averse agent
would lose by taking the gamble that gives W1 with probability p and W2 with probability
1 − p. BC is the maximum amount that she would pay in order to avoid to take the
gamble. Suppose W2 is her wealth level and W2 − W1 is the value of her house and p is
the probability that the house burns down. Thus in the absence of fire insurance this
individual will have utility given by EU (gamble), which is lower than the utility of the
expected value of the gamble.


3.1    Risk sharing
                                                     √
Consider an agent with utility function u : x 7→      x. He has a (risky) asset that gives
$100 with probability 1/2 and gives $0 with probability 1/2. The expected utility of
                                     √      √
our agent from this asset is EU0 = 12 0 + 12 100 = 5. Now consider another agent
who is identical to our agent, in the sense that he has the same utility function and an
asset that pays $100 with probability 1/2 and gives $0 with probability 1/2. We assume
throughout that what an asset pays is statistically independent from what the other
asset pays. Imagine that our agents form a mutual fund by pooling their assets, each
agent owning half of the mutual fund. This mutual fund gives $200 the probability 1/4
(when both assets yield high dividends), $100 with probability 1/2 (when only one on the
assets gives high dividend), and gives $0 with probability 1/4 (when both assets yield low
dividends). Thus, each agent’s share in the mutual fund yields $100 with probability

                                              8
                  EU
                  u


                                   A
u(pW1+(1- p)W2)
                       C
 EU(Gamble)                        B




                  W1        pW1+(1-p)W2   W2



                           Figure 5:




                               9
1/4, $50 with probability 1/2, and $0 with probability 1/4. Therefore, his expected
                                                      √        √       √
utility from the share in this mutual fund is EUS = 14 100 + 12 50 + 14 0 = 6.0355.
This is clearly larger than his expected utility from his own asset. Therefore, our agents
gain from sharing the risk in their assets.


3.2        Insurance
Imagine a world where in addition to one of the agents above (with utility function
        √
u : x 7→ x and a risky asset that gives $100 with probability 1/2 and gives $0 with
probability 1/2), we have a risk-neutral agent with lots of money. We call this new agent
the insurance company. The insurance company can insure the agent’s asset, by giving
him $100 if his asset happens to yield $0. How much premium, P , our risk averse agent
would be willing to pay to get this insurance? [A premium is an amount that is to be
paid to insurance company regardless of the outcome.]
     If the risk-averse agent pays premium P and buys the insurance his wealth will be
$100 − P for sure. If he does not, then his wealth will be $100 with probability 1/2
and $0 with probability 1/2. Therefore, he will be willing to pay P in order to get the
insurance iﬀ
                                          1       1
                            u (100 − P ) ≥ u (0) + u (100)
                                          2       2
i.e., iﬀ
                               √          1√   1√
                                100 − P ≥   0+   100
                                          2    2
iﬀ
                                   P ≤ 100 − 25 = 75.

On the other hand, if the insurance company sells the insurance for premium P , it will
get P for sure and pay $100 with probability 1/2. Therefore it is willing to take the deal
iﬀ
                                        1
                                  P ≥ 100 = 50.
                                        2
Therefore, both parties would gain, if the insurance company insures the asset for a
premium P ∈ (50, 75), a deal both parties are willing to accept.

Exercise 3 Now consider the case that we have two identical risk-averse agents as
above, and the insurance company. Insurance company is to charge the same premium


                                              10
P for each agent, and the risk-averse agents have an option of forming a mutual fund.
What is the range of premiums that are acceptable to all parties?




                                          11
                   14.12 Game Theory Lecture Notes∗
                                       Lectures 3-6
                                        Muhamet Yildiz†


       We will formally define the games and some solution concepts, such as Nash Equi-
librium, and discuss the assumptions behind these solution concepts.
       In order to analyze a game, we need to know

       • who the players are,

       • which actions are available to them,

       • how much each player values each outcome,

       • what each player knows.

       Notice that we need to specify not only what each player knows about external
parameters, such as the payoﬀs, but also about what they know about the other players’
knowledge and beliefs about these parameters, etc. In the first half of this course, we
will confine ourselves to the games of complete information, where everything that is
known by a player is common knowledge.1 (We say that X is common knowledge if
   ∗
       These notes are somewhat incomplete – they do not include some of the topics covered in the
class.
   †
     Some parts of these notes are based on the notes by Professor Daron Acemoglu, who taught this
course before.
   1
     Knowledge is defined as an operator on the propositions satisfying the following properties:

   1. if I know X, X must be true;

   2. if I know X, I know that I know X;

   3. if I don’t know X, I know that I don’t know X;

   4. if I know something, I know all its logical implications.



                                                   1
everyone knows X, and everyone knows that everyone knows X, and everyone knows
that everyone knows that everyone knows X, ad infinitum.) In the second half, we will
relax this assumption and allow player to have asymmetric information, focusing on
informational issues.


1         Representations of games
The games can be represented in two forms:

    1. The normal (strategic) form,

    2. The extensive form.


1.1         Normal form
Definition 1 (Normal form) An n-player game is any list G = (S1 , . . . , Sn ; u1 , . . . , un ),
where, for each i ∈ N = {1, . . . , n}, Si is the set of all strategies that are available to
player i, and ui : S1 × . . . × Sn → R is player i’s von Neumann-Morgenstern utility
function.

        Notice that a player’s utility depends not only on his own strategy but also on the
strategies played by other players. Moreover, each player i tries to maximize the expected
value of ui (where the expected values are computed with respect to his own beliefs); in
other words, ui is a von Neumann-Morgenstern utility function. We will say that player
i is rational iﬀ he tries to maximize the expected value of ui (given his beliefs).2
        It is also assumed that it is common knowledge that the players are N = {1, . . . , n},
that the set of strategies available to each player i is Si , and that each i tries to maximize
expected value of ui given his beliefs.
        When there are only two players, we can represent the (normal form) game by a
bimatrix (i.e., by two matrices):
                                            1\2     left right
                                            up      0,2    1,1
                                            down 4,1       3,2
    2
        We have also made another very strong “rationality” assumption in defining knowledge, by assuming
that, if I know something, then I know all its logical consequences.

                                                     2
   Here, Player 1 has strategies up and down, and 2 has the strategies left and right. In
each box the first number is 1’s payoﬀ and the second one is 2’s (e.g., u1 (up,left) = 0,
u2 (up,left) = 2.)


1.2    Extensive form
The extensive form contains all the information about a game, by defining who moves
when, what each player knows when he moves, what moves are available to him, and
where each move leads to, etc., (whereas the normal form is more of a ‘summary’ repre-
sentation). We first introduce some formalisms.

Definition 2 A tree is a set of nodes and directed edges connecting these nodes such
that

  1. there is an initial node, for which there is no incoming edge;

  2. for every other node, there is one incoming edge;

  3. for any two nodes, there is a unique path that connect these two nodes.

   Imagine the branches of a tree arising from the trunk. For example,



                                                         .

                                    .                             .
                     .                               .
                                                                      .
                                .

is a tree. On the other hand,




                                           3
                                      B


                                                       A


                                    C


is not a tree because there are two alternative paths through which point A can be
reached (via B and via C).

                                            B

                              A



                                                D
                                C

is not a tree either since A and B are not connected to C and D.



Definition 3 (Extensive form) A Game consists of a set of players, a tree, an al-
location of each node of the tree (except the end nodes) to a player, an informational
partition, and payoﬀs for each player at each end node.

   The set of players will include the agents taking part in the game. However, in many
games there is room for chance, e.g. the throw of dice in backgammon or the card draws
in poker. More broadly, we need to consider “chance” whenever there is uncertainty
about some relevant fact. To represent these possibilities we introduce a fictional player:
Nature. There is no payoﬀ for Nature at end nodes, and every time a node is allocated
to Nature, a probability distribution over the branches that follow needs to be specified,
e.g., Tail with probability of 1/2 and Head with probability of 1/2.
   An information set is a collection of points (nodes) {n1 , . . . , nk } such that

  1. the same player i is to move at each of these nodes;

  2. the same moves are available at each of these nodes.

                                                4
Here the player i, who is to move at the information set, is assumed to be unable to
distinguish between the points in the information set, but able to distinguish between
the points outside the information set from those in it. For instance, consider the game
in Figure 1. Here, Player 2 knows that Player 1 has taken action T or B and not action
X; but Player 2 cannot know for sure whether 1 has taken T or B. The same game is
depicted in Figure 2 slightly diﬀerently.

                                                1           x


                                  T                             B


                             2
                         L             R            L               R



                                        Figure 1:


                                            1               x


                                   T                    B

                             2

                         L                                          R
                                        R           L




                                        Figure 2:

   An information partition is an allocation of each node of the tree (except the starting
and end-nodes) to an information set.




                                            5
To sum up: at any node, we know: which player is to move, which moves are available
to the player, and which information set contains the node, summarizing the player’s
information at the node. Of course, if two nodes are in the same information set,
the available moves in these nodes must be the same, for otherwise the player could
distinguish the nodes by the available choices. Again, all these are assumed to be
common knowledge. For instance, in the game in Figure 1, player 1 knows that, if
player 1 takes X, player 2 will know this, but if he takes T or B, player 2 will not know
which of these two actions has been taken. (She will know that either T or B will have
been taken.)

Definition 4 A strategy of a player is a complete contingent-plan determining which
action he will take at each information set he is to move (including the information sets
that will not be reached according to this strategy).

   For certain purposes it might suﬃce to look at the reduced-form strategies. A reduced
form strategy is defined as an incomplete contingent plan that determines which action
the agent will take at each information set he is to move and that has not been precluded
by this plan. But for many other purposes we need to look at all the strategies. Let us
now consider some examples:

Game 1: Matching Pennies with Perfect Information
                                                                      (-1, 1)
                                                 Head
                                        2
                                       O           Tail
                                                                        (1, -1)
                            Head

                      1

                            Tail                                            (1, -1)
                                                        Head
                                            2
                                            O
                                                               Tail

                                                                                (-1, 1)




   The tree consists of 7 nodes.    The first one is allocated to player 1, and the next
two to player 2. The four end-nodes have payoﬀs attached to them. Since there are

                                             6
two players, payoﬀ vectors have two elements. The first number is the payoﬀ of player
1 and the second is the payoﬀ of player 2. These payoﬀs are von Neumann-Morgenstern
utilities so that we can take expectations over them and calculate expected utilities.
   The informational partition is very simple; all nodes are in their own information set.
In other words, all information sets are singletons (have only 1 element). This implies
that there is no uncertainty regarding the previous play (history) in the game. At this
point recall that in a tree, each node is reached through a unique path. Therefore, if all
information sets are singletons, a player can construct the history of the game perfectly.
For instance in this game, player 2 knows whether player 1 chose Head or Tail. And
player 1 knows that when he plays Head or Tail, Player 2 will know what player 1 has
played. (Games in which all information sets are singletons are called games of perfect
information.)
   In this game, the set of strategies for player 1 is {Head, Tail}. A strategy of player
2 determines what to do depending on what player 1 does. So, his strategies are:

     HH = Head if 1 plays Head, and Head if 1 plays Tail;
     HT = Head if 1 plays Head, and Tail if 1 plays Tail;
     TH = Tail if 1 plays Head, and Head if 1 plays Tail;
     TT = Tail if 1 plays Head, and Tail if 1 plays Tail.

   What are the payoﬀs generated by each strategy pair? If player 1 plays Head and 2
plays HH, then the outcome is [1 chooses Head and 2 chooses Head] and thus the payoﬀs
are (-1,1). If player 1 plays Head and 2 plays HT, the outcome is the same, hence the
payoﬀs are (-1,1). If 1 plays Tail and 2 plays HT, then the outcome is [1 chooses Tail
and 2 chooses Tail] and thus the payoﬀs are once again (-1,1). However, if 1 plays Tail
and 2 plays HH, then the outcome is [1 chooses Tail and 2 chooses Head] and thus the
payoﬀs are (1,-1). One can compute the payoﬀs for the other strategy pairs similarly.
   Therefore, the normal or the strategic form game corresponding to this game is

                                     HH    HT     TH    TT
                             Head -1,1 -1,1 1,-1 1,-1
                             Tail    1,-1 -1,1 1,-1 -1,1

   Information sets are very important! To see this, consider the following game.

                                            7
Game 2: Matching Pennies with Imperfect Information
                                                                               (-1, 1)
                                                            Head



                                                              Tail                   (1, -1)
                            Head


                     1
                                                                                            (1, -1)
                                  Tail                             Head

                                                        2

                                                                        Tail
                                                                                           (-1, 1)




   Games 1 and 2 appear very similar but in fact they correspond to two very diﬀerent
situations. In Game 2, when she moves, player 2 does not know whether 1 chose Head
or Tail. This is a game of imperfect information (That is, some of the information sets
contain more than one node.)
   The strategies for player 1 are again Head and Tail. This time player 2 has also only
two strategies: Head and Tail (as he does not know what 1 has played). The normal
form representation for this game will be:
                                              1\2      Head Tail
                                              Head -1,1               1,-1
                                              Tail     1,-1           -1,1



Game 3: A Game with Nature:
                                                                                  (5, 0)
                                                                     Left
                                                        1

                                                        O
                                         Head 1/2
                                                                     Right           (2, 2)

                         Nature
                                                                                         (3, 3)
                                                                       Left
                                            Tail 1/2          2

                                                             O
                                                                     Right
                                                                                    (0, -5)



                                                        8
    Here, we toss a fair coin, where the probability of Head is 1/2. If Head comes up,
Player 1 chooses between Left and Right; if Tail comes up, Player 2 chooses between
Left and Right.

Exercise 5 What is the normal-form representation for the following game:
                   1       A        2       α        1       a
                                                                        (1,-5)

               D                        δ        d


                   (4,4)        (5,2)                (3,3)

    Can you find another extensive-form game that has the same normal-form represen-
tation?

    [Hint: For each extensive-form game, there is only one normal-form representation
(up to a renaming of the strategies), but a normal-form game typically has more than
one extensive-form representation.]

    In many cases a player may not be able to guess exactly which strategies the other
players play. In order to cover these situations we introduce the mixed strategies:

Definition 6 A mixed strategy of a player is a probability distribution over the set of
his strategies.

    If player i has strategies Si = {si1 , si2 , . . . , sik }, then a mixed strategy σ i for player
i is a function on Si such that 0 ≤ σ i (sij ) ≤ 1 and σ i (si1 ) + σ i (si2 ) + · · · + σ i (sik ) = 1.
Here σ i represents other players’ beliefs about which strategy i would play.


2     How to play?
We will now describe the most common “solution concepts” for normal-form games. We
will first describe the concept of “dominant strategy equilibrium,” which is implied by
the rationality of the players. We then discuss “rationalizability” which corresponds
to the common knowledge of rationality, and finally we discuss the Nash Equilibrium,
which is related to the mutual knowledge of players’ conjectures about the other players’
actions.

                                                     9
2.1       Dominant-strategy equilibrium
Let us use the notation s−i to mean the list of strategies sj played by all the players j
other than i, i.e.,
                                        s−i = (s1 , ...si−1 , si+1 , ...sn ).

Definition 7 A strategy s∗i strictly dominates si if and only if

                                   ui (s∗i , s−i ) > ui (si , s−i ), ∀s−i ∈ S−i .

      That is, no matter what the other players play, playing s∗i is strictly better than
playing si for player i. In that case, if i is rational, he would never play the strictly
dominated strategy si .3
      A mixed strategy σ i dominates a strategy si in a similar way: σ i strictly dominates
si if and only if

 σ i (si1 )ui (si1 , s−i ) + σ i (si2 )ui (si2 , s−i ) + · · · σ i (sik )ui (sik , s−i ) > ui (si , s−i ), ∀s−i ∈ S−i .

A rational player i will never play a strategy si iﬀ si is dominated by a (mixed or pure)
strategy.
      Similarly, we can define weak dominance.

Definition 8 A strategy s∗i weakly dominates si if and only if

                                    ui (s∗i , s−i ) ≥ ui (si , s−i ), ∀s−i ∈ S−i

and
                                            ui (s∗i , s−i ) > ui (si , s−i )

for some s−i ∈ S−i .

      That is, no matter what the other players play, playing s∗i is at least as good as
playing si , and there are some contingencies in which playing s∗i is strictly better than
si . In that case, if rational, i would play si only if he believes that these contingencies
will never occur. If he is cautious in the sense that he assigns some positive probability
for each contingency, he will not play si .
  3
      That is, there is no belief under which he would play si . Can you prove this?


                                                          10
Definition 9 A strategy sdi is a (weakly) dominant strategy for player i if and only if sdi
weakly dominates all the other strategies of player i. A strategy sdi is a strictly dominant
strategy for player i if and only if sdi strictly dominates all the other strategies of player
i.

         If i is rational, and has a strictly dominant strategy sdi , then he will not play any
other strategy. If he has a weakly dominant strategy and cautious, then he will not play
other strategies.

Example:
                                        1\2          work hard shirk
                                        hire             2,2         1,3
                                        don’t hire       0,0         0,0
         In this game, player 1 (firm) has a strictly dominant strategy which is to “hire.”
Player 2 has only a weakly dominated strategy. If players are rational, and in addition
player 2 is cautious, then we expect player 1 to ”hire”, and player 2 to ”shirk”:4
                                     1\2             work hard shirk
                                     hire            2,2 =⇒        1,3
                                     don’t hire 0,0 ⇑              0,0 ⇑
Definition 10 A strategy profile sd = (sd1 , sd2 , ....sdN ) is a dominant strategy equilibrium,
if and only if sdi is a dominant strategy for each player i.

         As an example consider the Prisoner’s Dilemma.
                                  1\2                confess don’t confess
                                  confess             -5,-5         0,-6
                                  don’t confess       -6,0          -1,-1

         “Confess” is a strictly dominant strategy for both players, therefore (“confess”, “con-
fess”) is a dominant strategy equilibrium.
                                  1\2                confess don’t confess
                                  confess            -5,-5      ⇐= 0,-6
                                  don’t confess -6,0 ⇑          ⇐=-1,-1 ⇑
     4
         This is the only outcome, provided that each player is rational and player 2 knows that player 1 is
rational. Can you show this?

                                                       11
Example: (second-price auction) We have an object to be sold through an auction.
There are two buyers. The value of the object for any buyer i is vi , which is known by
the buyer i. Each buyer i submits a bid bi in a sealed envelope, simultaneously. Then,
we open the envelopes;
   the agent i∗ who submits the highest bid

                                         bi∗ = max {b1 , b2 }

gets the object and pays the second highest bid (which is bj with j 6= i∗ ). (If two or
more buyers submit the highest bid, we select one of them by a coin toss.)
   Formally the game is defined by the player set N = {1, 2}, the strategies bi , and the
payoﬀs                                        ⎧
                                              ⎪
                                              ⎪     vi − bj     if bi > bj
                                              ⎨
                            ui (b1 , b2 ) =       (vi − bj ) /2 if bi = bj
                                              ⎪
                                              ⎪
                                              ⎩        0        if bi < bj
where i 6= j.
   In this game, bidding his true valuation vi is a dominant strategy for each player i.
To see this, consider the strategy of bidding some other value b0i 6= vi for any i. We want
to show that b0i is weakly dominated by bidding vi . Consider the case b0i < vi . If the
other player bids some bj < b0i , player i would get vi − bj under both strategies b0i and vi .
If the other player bids some bj ≥ vi , player i would get 0 under both strategies b0i and
vi . But if bj = b0i , bidding vi yields vi − bj > 0, while b0i yields only (vi − bj ) /2. Likewise,
if b0i < bj < vi , bidding vi yields vi − bj > 0, while b0i yields only 0. Therefore, bidding vi
dominates b0i . The case b0i > vi is similar, except for when b0i > bj > vi , bidding vi yields
0, while b0i yields negative payoﬀ vi − bj < 0. Therefore, bidding vi is dominant strategy
for each player i.

Exercise 11 Extend this to the n-buyer case.

   When it exists, the dominant strategy equilibrium has an obvious attraction.                  In
that case, the rationality of players implies that the dominant strategy equilibrium will
be played. However, it does not exist in general. The following game, the Battle of the
Sexes, is supposed to represent a timid first date (though there are other games from
animal behavior that deserve this title much more).                 Both the man and the woman

                                                    12
want to be together rather than go alone. However, being timid, they do not make a
firm date. Each is hoping to find the other either at the opera or the ballet. While the
woman prefers the ballet, the man prefers the opera.

                              Man\Woman opera ballet
                              opera                   1,4       0,0
                              ballet                  0,0       4,1


   Clearly, no player has a dominant strategy:

                         Man\Woman opera                       ballet
                         opera             1,4                 ⇐= ⇓ 0,0
                         ballet            0,0 ⇑ =⇒                     4,1


2.2    Rationalizability or Iterative elimination of strictly domi-
       nated strategies
Consider the following Extended Prisoner’s Dilemma game:

                   1\2             confess don’t confess run away
                   confess             -5,-5            0,-6            -5,-10
                   don’t confess        -6,0           -1,-1            0,-10
                   run away            -10,-6          -10,0            -10,-10

   In this game, no agent has any dominant strategy, but there exists a dominated
strategy: “run away” is strictly dominated by “confess” (both for 1 and 2).          Now
consider 2’s problem. She knows 1 is “rational,” therefore she can predict that 1 will not
choose “run away,” thus she can eliminate “run away” and consider the smaller game

                   1\2             confess don’t confess run away
                   confess             -5,-5            0,-6            -5,-10
                   don’t confess        -6,0           -1,-1            0,-10




                                                 13
where we have eliminated “run away” because it was strictly dominated; the column
player reasons that the row player would never choose it.
   In this smaller game, 2 has a dominant strategy which is to “confess.” That is, if 2
is rational and knows that 1 is rational, she will play “confess.”
   In the original game “don’t confess” did better against “run away,” thus “confess” was
not a dominant strategy. However, player 1 playing “run away” cannot be rationalized
because it is a dominated strategy. This leads to the Elimination of Strictly Dominated
Strategies. What happens if we “Iteratively Eliminate Strictly Dominated” strategies?
That is, we eliminate a strictly dominated strategy, and then look for another strictly
dominated strategy in the reduced game. We stop when we can no longer find a strictly
dominated strategy. Clearly, if it is common knowledge that players are rational, they
will play only the strategies that survive this iteratively elimination of strictly dominated
strategies. Therefore, we call such strategies rationalizable. Caution: we do eliminate
the strategies that are dominated by some mixed strategies!
   In the above example, the set of rationalizable strategies is once again “confess,”
“confess.”
   At this point you should stop and apply this method to the Cournot
duopoly!! (See Gibbons.) Also, make sure that you can generate the rationality as-
sumption at each elimination. For instance, in the game above, player 2 knows that
player 1 is rational and hence he will not “run away;” and since she is also rational,
she will play only “confess,” for the “confess” is the only best response for any belief of
player 2 that assigns 0 probability to that player 1 “runs away.”
   The problem is there may be too many rationalizable strategies. Consider the Match-
ing Pannies game:

                                    1\2     Head Tail
                                    Head     -1,1   1,-1
                                    Tail     1,-1   -1,1

   Here, every strategy is rationalizable. For example, if player 1 believes that player
2 will play Head, then he will play Tail, and if player 2 believes that player 1 will play
Tail, then she will play Tail. Thus, the strategy-pair (Head,Tail) is rationalizable. But
note that the beliefs of 1 and 2 are not congruent.


                                             14
   The set of rationalizable strategies is in general very large. In contrast, the concept
of dominant strategy equilibrium is too restrictive: usually it does not exist.
   The reason for existence of too many rationalizable strategies is that we do not re-
strict players’ conjectures to be ‘consistent’ with what the others are actually doing. For
instance, in the rationalizable strategy (Head, Tail), player 2 plays Tail by conjecturing
that Player 1 will play Tail, while Player 1 actually plays Head. We consider another
concept – Nash Equilibrium (henceforth NE), which assumes mutual knowledge of con-
jectures, yielding consistency.


2.3    Nash Equilibrium
Consider the battle of the sexes

                                Man\Woman opera ballet
                                opera                 1,4      0,0
                                ballet                0,0      4,1

   In this game, there is no dominant strategy. But suppose W is playing opera. Then,
the best thing M can do is to play opera, too.              Thus opera is a best-response for M
against opera. Similarly, opera is a best-response for W against opera. Thus, at (opera,
opera), neither party wants to take a diﬀerent action. This is a Nash Equilibrium.
   More formally:

Definition 12 For any player i, a strategy sBR
                                            i  is a best response to s−i if and only if

                              ui (sBR
                                   i , s−i ) ≥ ui (si , s−i ), ∀si ∈ Si


   This definition is identical to that of a dominant strategy except that it is not for
all s−i ∈ S−i but for a specific strategy s−i . If it were true for all s−i , then SiBR would
also be a dominant strategy, which is a stronger requirement than being a best response
against some strategy s−i .

Definition 13 A strategy profile (sNE      NE                                        NE
                                   1 , ...sN ) is a Nash Equilibrium if and only if si
is a best-response to sNE     NE      NE NE            NE
                       −i = (s1 , ...si−1 , si+1 , ...sN ) for each i. That is, for all i, we
have that
                          ui (sNE   NE               NE
                               i , s−i ) ≥ ui (si , s−i )      ∀si ∈ Si .

                                                 15
       In other words, no player would have an incentive to deviate, if he knew which
strategies the other players play.
       If a strategy profile is a dominant strategy equilibrium, then it is also a NE, but the
reverse is not true. For instance, in the Battle of the Sexes, both (O,O) and (B,B) are
Nash equilibria, but neither are dominant strategy equilibria. Furthermore, a dominant
strategy equilibrium is unique, but as the Battle of the Sexes shows, Nash equilibrium
is not unique in general.
       At this point you should stop, and compute the Nash equilibrium in
Cournot Duopoly game!! Why does Nash equilibrium coincide with the rational-
izable strategies. In general: Are all rationalizable strategies Nash equilibria? Are
all Nash equilibria rationalizable?            You should also compute the Nash equilibrium in
Cournot oligopoly, Bertrand duopoly and in the commons problem.
       The definition above covers only the pure strategies. We can define the Nash equi-
librium for mixed strategies by changing the pure strategies with the mixed strategies.
Again given the mixed strategy of the others, each agent maximizes his expected payoﬀ
over his own (mixed) strategies.5

Example Consider the Battle of the Sexes again where we located two pure strat-
egy equilibria. In addition to the pure strategy equilibria, there is a mixed strategy
equilibrium.

                                      Man\Woman opera ballet
                                      opera                 1,4      0,0
                                      ballet                0,0      4,1

       Let’s write q for the probability that M goes to opera; with probability 1 − q, he goes
to ballet. If we write p for the probability that W goes to opera, we can compute her
   5
       In terms of beliefs, this correspondes to the requirement that, if i assigns positive probability to the
event that j may play a particular pure strategy sj , then sj must be a best response given j’s beliefs.




                                                       16
expected utility from this as

      U2 (p; q) = pqu2 (opera,opera) + p (1 − q) u2 (ballet,opera)
                      + (1 − p) qu2 (opera,ballet) + (1 − p) (1 − q) u2 (ballet,ballet)
                   = p [qu2 (opera,opera) + (1 − q) u2 (ballet,opera)]
                      + (1 − p) [qu2 (opera,ballet) + (1 − q) u2 (ballet,ballet)]
                   = p [q4 + (1 − q) 0] + (1 − p) [0q + 1 (1 − q)]
                   = p[4q] + (1 − p) [1 − q] .

Note that the term [4q] multiplied with p is her expected utility from going to opera, and
the term multiplied with (1 − p) is her expected utility from going to ballet. U2 (p; q) is
strictly increasing with p if 4q > 1 − q (i.e., q > 1/5); it is strictly decreasing with p if
4q < 1 − q, and is constant if 4q = 1 − q. In that case, W’s best response is p = 1 of
q > 1/5, p = 0 if q < 1/5, and p is any number in [0, 1] if q = 1/5. In other words, W
would choose opera if her expected utility from opera is higher, ballet if her expected
utility from ballet is higher, and can choose any of opera or ballet if she is indiﬀerent
between these two.
   Similarly we compute that q = 1 is best response if p > 4/5; q = 0 is best response
if p < 4/5; and any q can be best response if p = 4/5. We plot the best responses in the
following graph.
                        q

                        1

                                                           A


                                                               (A, B, C) are all equilibria




                       1/5                             B



                         0 C                     4/5       1            p




   The Nash equilibria are where these best responses intersect. There is one at (0,0),
when they both go to ballet, one at (1,1), when they both go to opera, and there is one
at (4/5,1/5), when W goes to opera with probability 4/5, and M goes to opera with
probability 1/5.

                                                 17
   Note how we compute the mixed strategy equilibrium (for 2 x2 games). We choose 1’s
probabilities so that 2 is indiﬀerent between his strategies, and we choose 2’s probabilities
so that 1 is indiﬀerent.




                                             18
           14.12 Game Theory–Notes on Theory
                              Rationalizability
                                  Muhamet Yildiz


    What are the implications of rationality and players’ knowledge of payoﬀs? What
can we infer more if we also assume that players know that the other players are rational?
What is the limit of predictive power we obtain as we make more and more assumptions
about players’ knowledge about the fellow players’ rationality? These notes try to explore
these questions.


1     Rationality and Dominance
We say that a player is rational if and only if he maximizes the expected value of his
payoﬀs (given his beliefs about the other players’ play.) For example, consider the
following game.
                                    1\2 L         R
                                    T      2,0    -1,1
                                                                                      (1)
                                    M     0,10    0,0
                                    B     -1,-6   2,0
Consider Player 1. He is contemplating about whether to play T, or M, or B. A quick
inspection of his payoﬀs reveals that his best play depends on what he thinks the other
player does. Let’s then write p for the probability he assigns to L (as Player 2’s play.)
Then, his expected payoﬀs from playing T, M, and B are

                            UT = 2p − (1 − p) = 3p − 1,
                           UM = 0,
                            UB = −p + 2(1 − p) = 2 − 3p,


                                            1
respectively. These values as a function of p are plotted in the following graph:
                             U

                                                                                       2
                                   UB                                  UT


                                                               UM
                     0

                    -1
                         0                                                        1
                                                      p
As it is clear from the graph, UT is the largest when p > 1/2, and UB is the largest
when p < 1/2. At p = 1/2, UT = UB > 0. Hence, if player 1 is rational, then he will
play B when p < 1/2, D when p > 1/2, and B or D if p = 1/2. Notice that, if Player
1 is rational, then he will never play M–no matter what he believes about the Player
2’s play. Therefore, if we assume that Player 1 is rational (and that the game is as it is
described above), then we can conclude that Player 1 will not play M. This is because
M is a strictly dominated strategy, a concept that we define now.
      Let us use the notation s−i to mean the list of strategies sj played by all the players
j other than i, i.e.,
                                     s−i = (s1 , ...si−1 , si+1 , ...sn ).

Definition 1 A strategy s∗i strictly dominates si if and only if

                                 ui (s∗i , s−i ) > ui (si , s−i ), ∀s−i ∈ S−i .

      That is, no matter what the other players play, playing s∗i is strictly better than
playing si for player i. In that case, if i is rational, he would never play the strictly
dominated strategy si .1 A mixed strategy σ i dominates a strategy si in a similar way:
  1
      That is, there is no belief under which he would play si . Can you prove this?


                                                       2
σ i strictly dominates si if and only if

 σ i (si1 )ui (si1 , s−i ) + σ i (si2 )ui (si2 , s−i ) + · · · σ i (sik )ui (sik , s−i ) > ui (si , s−i ), ∀s−i ∈ S−i .

Notice that neither of the pure strategies T, M, and B dominates any strategy. Never-
theless, M is dominated by the mixed strategy that σ1 that puts probability 1/2 on each
of T and B. For each p, the payoﬀ from σ 1 is
                                         1          1          1
                                    Uσ1 = (3p − 1) + (2 − 3p) = ,
                                         2          2          2
which is larger than 0, the payoﬀ from M. As an exercise, one can show that a rational
player i will never play a strategy si iﬀ si is dominated by a (mixed or pure) strategy.
    To sum up: if we assume that players are rational (and that the game is as de-
scribed), then we conclude that no player plays a strategy that is strictly dominated (by
some mixed or pure strategy), and this is all we can conclude.
    Although there are few strictly dominated strategies–and thus we can conclude little
from the assumption that players are rational–in general, there are interesting games in
which the little assumption can lead us to sometimes counterintuitive conclusions. For
example, consider the well-known Prisoners’ Dilemma game:

                                 1\2                   confess don’t confess
                                 confess                -5,-5             0,-6
                                 don’t confess           -6,0             -1,-1

Clearly, “don’t confess” is strictly dominated by confess, and hence we expect each player
to confess, assuming that the game is as described and players are rational.


2     Rationalizability or Iterative elimination of strictly
      dominated strategies
We now want to understand the implications of the assumption that players know that
the other players are also rational. To be concrete consider the game in (1). Now,
rationality of player 1 requires that he does not play M. For Player 2, her both actions
can be a best reply. If she thinks that Player 1 is not likely to play M, then she must
play R, and if she thinks that it is very likely that Player 1 will play M, then she must

                                                           3
play L. Hence, rationality of player 2 does not put any restriction on her behavior. But,
what if she thinks that it is very likely that player 1 is rational (and that his payoﬀ are
as in (1)? In that case, since a rational player 1 does not play M, she must assign very
small probability for player 1 playing M. In fact, if she knows that player 1 is rational,
then she must be sure that he will not play M. In that case, being rational, she must
play R. In summary, if player 2 is rational and she knows that player 1 is rational, then
she must play R.
   Notice that we first eliminated all of the strategies that are strictly dominated
(namely M), then taking the resulting game, we eliminated again all of the strate-
gies that are strictly dominated (namely L). This is called twice iterated elimination of
strictly dominated strategies.
   General fact: If a player (i) is rational and (ii) knows that the other players are
also rational (and the payoﬀs are as given), then he must play a strategy that survives
twice iterated elimination of strictly dominated strategies.
   As we impose further assumptions about rationality, we keep iteratively eliminating
all strictly dominated strategies (if there remains any). Let’s go back to our example in
(1). Recall that rationality of player 1 requires him to play T or B, and knowledge of
the fact that player 2 is also rational does not put any restriction on his behavior–as
rationality itself does not restrict Player 2’s behavior. Now, assume that Player 1 also
knows (i) that Player 2 is rational and (ii) that Player 2 knows that Player 1 is rational
(and that the game is as in (1)). Then, as the above analysis knows, Player 1 must know
that Player 2 will play R. In that case, being rational he must play B.
   This analysis gives us a mechanical procedure to analyze the games, n-times Iter-
ated Elimination of Strictly Dominated Strategies: eliminate all the strictly dominated
strategies, and iterate this n times.
   General fact: If (1) every player is rational, (2) every player knows that every
player is rational, (3) every player knows that every player knows that every player is
rational, . . . and (n) every player knows that every player knows that . . . every player is
rational, then every player must play a strategy that survives n-times iterated elimination
of strictly dominated strategies.
   Caution: we do eliminate the strategies that are dominated by some mixed strate-
gies!


                                             4
    Notice that when there are only finitely many strategies, this elimination process
must stop at some n, i.e., there will be no dominated strategy to eliminate.

Definition 2 We call the elimination process that keeps iteratively eliminating all strictly
dominated strategies until there is no strictly dominated strategy Iterated Elimination
of Strictly Dominated Strategies; we eliminate indefinitely if the process does not stop.
We call a strategy rationalizable if and only if it survives iterated elimination of strictly
dominated strategies.

    Clearly,
    General fact: If it is common knowledge that every player is rational (and the game
is as described), then every player must play a rationalizable strategy. Moreover, any
rationalizable strategy is consistent with common knowledge of rationality.
    A problem is there are usually too many rationalizable strategies; the elimination
process usually stops too early. In that case a researcher cannot make much prediction
based on such analysis. An equally crucial problem is that elimination process may be too
slow so that many strategies are eliminated at high iterations. In that case, predictions
based on rationalizability will heavily rely on strong assumptions about rationality, i.e.,
everybody knows that everybody knows that ... everybody is rational.


3     Problem description
In the class, we will apply notion of rationalizability for

    1. Cournot oligopoly,

    2. Bertrand (price) competition, and

    3. partnership games.




                                             5
    14.12 Game Theory – Supplementary notes on
                Partnership Games
                                  Muhamet Yildiz


1    Intrroduction
Many relationships can be taken as a partnership in which two partners provide an input
towards an outcome that they will share. For example, in a firm, the employer and the
worker provide capital, know-how, and eﬀort to produce a good that will generate a
revenue, which will be divided between the employer and the worker according to the
parties’ relative bargaining power, or an existing contract that reflects these bargaining
powers. Many times, the generated value depends on the parties’ inputs in a way that is
not additively separable. For example, the marginal increase in the revenue as we change
the worker’s eﬀort level depends on the level of capital and the machinery employed by
the firm. Similarly, the value of an additional machine depends on the eﬀort level of the
worker. In most cases, there is a synergy between the parties, i.e., a party’s marginal
input is more valuable when the other party provides higher input.
    This is also true in a grander level when the firms and the workers choose the tech-
nologies and the education levels. In an environment with few skilled workers who can
operate computers, computerization of the production process will have low return as
the firm will have to pay a lot for few skilled workers or employ low-skill workers who
will not be able to utilize the computerized system skillfully. Similarly, the value of
higher education will be low when there are few firms that can utilize the skills obtained
in higher education. A historical example of this is provided by Acemoglu (1998). High
school enrollment and graduation rates doubled in the 1910s, mostly due to changes
in the location and curricula of schools and the decline in transport costs. The skill
premium (white collar wage relative to blue collar wage) fell sharply in the 1910s. Yet,
despite the even faster increase in the supply of high school skills during the 1920s,
the skill premium levelled oﬀ and started a mild increase. Similarly, in 1970s college
graduates earned 55 percent more than high school graduates. This premium fell to 41
percent in 1980, but then increased to 62 percent in 1995. As an explanation of this
pattern, Acemoglu illustrates that, "when there are more skilled workers, the market for

                                            1
skill-complementary technologies is larger. Therefore, the inventor will be able to obtain
higher profits, and more eﬀort will be devoted to the invention of skill complementary
technologies," which will increase the value of skilled workers.
    Similar relationship exists when the firms have strategic alliances, or produce com-
plementary goods. For example, the value of a computer depends on both the quality of
the operating system (along with other software) and the CPU (and other hardware).
More able software requires large memory and fast computation, and such equipment is
valuable most when there are software that can utilize such high capacity. Since each
firm’s profit comes from the sale of computers (which embody both operating system
and hardware), they will have a partnership relationship as described above.
    Similar partnership games are played by diﬀerent departments within a firm. For
example, both R&D and marketing departments (and their managers) of a firm get
shares from the sale of the product, while the sales depends both on the quality of
the product (which presumably is increasing with the eﬀort exerted by the researchers
in R&D) and the creative advertisement. Once again, the marginal value of better
advertisement increases with higher product quality, and vice verse.
    I will now formalize such a partnership relationship as a formal game and compute
its Nash equilibria.


2    Formulation
We have two players, E and W, denoting an employer and a worker. Simultaneously E
and W choose K ∈ [0, ∞) and L ∈ [0, ∞), which yields an output level f (K, L). To
formalize the notion that there is a synergy between the employer and the worker, we
assume that f is “supermodular,” i.e., given any K, K 0 , L, L0 with K > K 0 and L > L0 ,
we have
                     f (K, L) − f (K 0 , L) > f (K, L0 ) − f (K 0 , L0 ) .
In particular, we will assume a functional form

                        f (K, L) = K α Lβ    (α, β, α + β ∈ (0, 1)),

which satisfies the above condition. We will assume that the parties share the output
equally and the costs of their inputs are linear so that the payoﬀs of E and W are
                         1                          1
                     UE = K α Lβ − K        and UW = K α Lβ − L,
                         2                          2
respectively. We will assume that all these are common knowledge, so that the both
strategy spaces are [0, ∞) and the payoﬀ functions are UE and UW .


                                             2
3    Nash Equilibrium
In order to compute the Nash equilibrium we firs compute the best reply function of
each player. Given any L, UE (K, L) is maximized (as a function of K) at K ∗ that is
the unique solution to the first order condition that
                                    ∂UE  α
                               0=       = K α−1 Lβ − 1,
                                    ∂K   2
which yields
                                                ³α           ´1/(1−α)
                                        ∗                β
                                  K =      L         .
                                         2
Similarly, the best reply L∗ of W against any given K is
                                            µ                ¶1/(1−β)
                                    ∗            β α
                                 L =               K                    .
                                                 2

These functions are plotted in Figure 1. A Nash equilibrium is any (K ∗ , L∗ ) that simul-
taneously solves the last two equations. Graphically these solutions are the intersections
of the graphs of best reply functions. Clearly there are two Nash equilibria one is given
by K = L = 0, and the other is given by
                                            µ                 ¶1/(1−α−β)
                                                α1−β β α
                              K =
                                                   2
                                            µ                 ¶1/(1−α−β)
                                                αβ β 1−α
                              L =                                           .
                                                   2


References
[1] Acemoglu, Daron (1998): "Why Do New Technologies Complement Skills? Directed
    Technical Change and Wage Inequality," Quarterly Journal of Economics, volume
    113, pp. 1055-1089.




                                                     3
L


        L*



                K*




                     K


    Figure 1:




        4
                     14.12 Game Theory Lecture Notes∗
                                         Lectures 7-9
                                          Muhamet Yildiz


        In these lectures we analyze dynamic games (with complete information). We first
analyze the perfect information games, where each information set is singleton, and
develop the notion of backwards induction. Then, considering more general dynamic
games, we will introduce the concept of the subgame perfection. We explain these
concepts on economic problems, most of which can be found in Gibbons.


1         Backwards induction
The concept of backwards induction corresponds to the assumption that it is common
knowledge that each player will act rationally at each node where he moves — even if
his rationality would imply that such a node will not be reached.1 Mechanically, it is
computed as follows. Consider a finite horizon perfect information game. Consider any
node that comes just before terminal nodes, that is, after each move stemming from this
node, the game ends. If the player who moves at this node acts rationally, he will choose
the best move for himself. Hence, we select one of the moves that give this player the
highest payoﬀ. Assigning the payoﬀ vector associated with this move to the node at
hand, we delete all the moves stemming from this node so that we have a shorter game,
where our node is a terminal node. Repeat this procedure until we reach the origin.
    ∗
        These notes do not include all the topics that will be covered in the class. See the slides and
supplementary notes for a more complete picture.
   1
     More precisely: at each node i the player is certain that all the players will act rationally at all
nodes j that follow node i; and at each node i the player is certain that at each node j that follows
node i the player who moves at j will be certain that all the players will act rationally at all nodes k
that follow node j,...ad infinitum.


                                                    1
Example Consider the following well-known game, called as the centipedes game. This
game illustrates the situation where it is mutually beneficial for all players to stay in
a relationship, while a player would like to exit the relationship, if she knows that the
other player will exit in the next day.


              1       A        2    a         1           α
              •                •              •               (2,5)

             D             d              δ


             (1,1)         (0,4)          (3,3)



   In the third day, player 1 moves, choosing between going across (α) or down (δ). If
he goes across, he would get 2; if he goes down, he will get 3. Hence, we reckon that he
will go down. Therefore, we reduce the game as follows:


              1       A        2    a
              •                •                  (3,3)

             D             d


             (1,1)         (0,4)



   In the second day, player 2 moves, choosing between going across (a) or down (d). If
she goes across, she will get 3; if she goes down, she will get 4. Hence, we reckon that
she will go down. Therefore, we reduce the game further as follows:




                                              2
                     1          A
                     •                      (0,4)

                    D


                    (1,1)


   Now, player 1 gets 0 if he goes across (A), and gets 1 if he goes down (D). Therefore,
he goes down. The equilibrium that we have constructed is as follows:


                1           A           2     a         1   α
                •                       •               •       (2,5)

            D                       d               δ


             (1,1)                  (0,4)           (3,3)



   That is, at each node, the player who is to move goes down, exiting the relationship.
   Let’s go over the assumptions that we have made in constructing our equilibrium.
We assumed that player 1 will act rationally at the last date, when we reckoned that he
goes down. When we reckoned that player 2 goes down in the second day, we assumed
that player 2 assumes that player 1 will act rationally on the third day, and also assumed
that she is rational, too. On the first day, player 1 anticipates all these. That is, he is
assumed to know that player 2 is rational, and that she will keep believing that player
1 will act rationally on the third day.
   This example also illustrates another notion associated with backwards induction —
commitment (or the lack of commitment). Note that the outcomes on the third day
(i.e., (3,3) and (2,5)) are both strictly better than the equilibrium outcome (1,0). But
they cannot reach these outcomes, because player 2 cannot commit to go across, and
anticipating that player 2 will go down, player 1 exits the relationship in the first day.
There is also a further commitment problem in this example. If player 1 where able

                                                        3
to commit to go across on the third day, then player 2 would definitely go across on
the second day. In that case, player 1 would go across on the first. Of course, player 1
cannot commit to go across on the third day, and the game ends in the first day, yielding
the low payoﬀs (1,0).
   As another example, let us apply backwards induction to the Matching Pennies with
Perfect Information:

                                                                       (-1, 1)
                                                  Head
                                          2
                                          O         Tail
                                                                         (1, -1)
                           Head

                       1

                            Tail                                             (1, -1)
                                                         Head
                                              2
                                              O
                                                                Tail

                                                                                 (-1, 1)



   If player 1 chooses Head, player 2 will Head; and if 1 chooses Tail, player 2 will prefer
Tail, too. Hence, the game is reduced to
                                                            (-1,1)

                                   Head


                             1


                                   Tail                           (-1,1)


   In that case, Player 1 will be indiﬀerent between Head and Tail, choosing any of these
two option or any randomization between these two acts will give us an equilibrium with
backwards induction.
   At this point, you should stop and study the Stackelberg duopoly in Gib-
bons. You should also check that there is also a Nash equilibrium of this game in which

                                              4
the follower produces the Cournot quantity irrespective of what the leader produces,
and the leader produces the Cournot quantity. Of course, this is not consistent with
backwards induction: when the follower knows that the leader has produced the Stack-
elberg quantity, he will change his mind and produce a lower quantity, the quantity that
is computed during the backwards induction. For this reason, we say that this Nash
equilibrium is based on a non-credible threat (of the follower).
    Backwards induction is a powerful solution concept with some intuitive appeal. Un-
fortunately, we cannot apply it beyond perfect information games with a finite horizon.
Its intuition, however, can be extended beyond these games through subgame perfection.


2     Subgame perfection
A main property of backwards induction is that, when we confine ourselves to a sub-
game of the game, the equilibrium computed using backwards induction remains to be
an equilibrium (computed again via backwards induction) of the subgame. Subgame
perfection generalizes this notion to general dynamic games:

Definition 1 A Nash equilibrium is said to be subgame perfect if an only if it is a Nash
equilibrium in every subgame of the game.

    What is a subgame? In any given game, there may be some smaller games embedded;
we call each such embedded game a subgame. Consider, for instance, the centipedes
game (where the equilibrium is drawn in thick lines):


                1    A         2    a        1    α
                •              •             •             (2,5)

            D              d             δ


             (1,1)         (0,4)         (3,3)



    This game has three subgames. Here is one subgame:

                                             5
                                                  1   α
                                                  •         (2,5)

                                              δ


                                              (3,3)


   This is another subgame:

                                  2   a           1   α
                                  •               •         (2,5)

                              d               δ


                              (0,4)           (3,3)


   And the third subgame is the game itself. We call the first two subgames (excluding
the game itself) proper. Note that, in each subgame, the equilibrium computed via
backwards induction remains to be an equilibrium of the subgame.
   Now consider the matching penny game with perfect information. In this game, we
have three subgames: one after player 1 chooses Head, one after player 1 chooses Tail,
and the game itself. Again, the equilibrium computed through backwards induction is
a Nash equilibrium at each subgame.
   Now consider the following game.




                                          6
                                                         1

                                                 E            X
                                             1
                                                              (2,6)
                                     T
                                                         B

                             2
                         L               R       L                R
                         (0,1)      (3,2)            (-1,3)   (1,5)


   We cannot apply backwards induction in this game, because it is not a perfect in-
formation game. But we can compute the subgame perfect equilibrium. This game has
two subgames: one starts after player 1 plays E; the second one is the game itself. We
compute the subgame perfect equilibria as follows. We first compute a Nash equilibrium
of the subgame, then fixing the equilibrium actions as they are (in this subgame), and
taking the equilibrium payoﬀs in this subgame as the payoﬀs for entering in the subgame,
we compute a Nash equilibrium in the remaining game.
   The subgame has only one Nash equilibrium, as T dominates B: Player 1 plays T
and 2 plays R, yielding the payoﬀ vector (3,2).
                                           1

                                     T
                                                         B

                             2
                         L               R       L                R
                         (0,1)      (3,2)            (-1,3)   (1,5)

Given this, the remaining game is




                                             7
                                            1

                                    E                    X

                                 (3,2)                   (2,6)

where player 1 chooses E. Thus, the subgame-perfect equilibrium is as follows.
                                                1
                                                    E
                                                                 X
                                                1
                                                                 (2,6)
                                    T
                                                             B

                             2
                         L              R           L                R
                         (0,1)     (3,2)                (-1,3)   (1,5)

Note that there are other Nash Equilibria; one of them is depicted below.
                                                   1
                                                    E
                                                                 X
                                                1
                                                                 (2,6)
                                    T
                                                             B

                             2
                         L              R           L                R
                         (0,1)     (3,2)                (-1,3)   (1,5)

You should be able to check that this is a Nash equilibrium. But it is not subgame
perfect, for, in the proper subgame, 2 plays a strictly dominated strategy.
   Now, consider the following game, which is essentially the same game as above, with
a slight diﬀerence that here player 1 makes his choices at once:




                                                8
                                                       X
                                              1                  (2,6)

                                      T
                                                       B

                             2
                         L                R        L             R
                          (0,1)     (3,2)          (-1,3)    (1,5)

Note that the only subgame of this game is itself, hence any Nash equilibrium is subgame
perfect. In particular, the non-subgame-perfect Nash equilibrium of the game above is
subgame perfect. In the new game it takes the following form:

                                                       X
                                              1                  (2,6)

                                      T
                                                       B

                             2
                         L                R        L             R
                          (0,1)     (3,2)          (-1,3)    (1,5)


    At this point you should stop reading and study “tariﬀs and imperfect
international competition”.


3     Sequential Bargaining
Imagine that two players own a dollar, which they can use only after they decide how to
divide it. Each player is risk-neutral and discounts the future exponentially. That is, if
a player gets x dollar at day t, his payoﬀ is δ t x for some δ ∈ (0, 1). The set of all feasible
                  ©                            ª
divisions is D = (x, y) ∈ [0, 1]2 |x + y ≤ 1 . Consider the following scenario. In the
first day player one makes an oﬀer (x1 , y1 ) ∈ D. Then, knowing what has been oﬀered,


                                               9
player 2 accepts or rejects the oﬀer. If he accepts the oﬀer, the oﬀer is implemented,
yielding payoﬀs (x1 , y1 ). If he rejects the oﬀer, then they wait until the next day, when
player 2 makes an oﬀer (x2 , y2 ) ∈ D. Now, knowing what player 2 has oﬀered, player
1 accepts or rejects the oﬀer. If player 1 accepts the oﬀer, the oﬀer is implemented,
yielding payoﬀs (δx2 , δy2 ). If player two rejects the oﬀer, then the game ends, when they
lose the dollar and get payoﬀs (0,0).
       Let us analyze this game. On the second day, if player 1 rejects the oﬀer, he gets 0.
Hence, he accepts any oﬀer that gives him more than 0, and he is indiﬀerent between
accepting and rejecting any oﬀer that gives him 0. Assume that he accepts the oﬀer
(0,1).2 Then, player 2 would oﬀer (0,1), which is the best player 2 can get. Therefore,
if they do not agree on the first day, then player 2 takes the entire dollar on the second
day, leaving player 1 nothing. The value of taking the dollar on the next day for player
2 is δ. Hence, on the first day, player 2 will accept any oﬀer that gives him more than δ,
will reject any oﬀer that gives him less than δ, and he is indiﬀerent between accepting
and rejecting any oﬀer that gives him δ. As above, assume that player 2 accepts the
oﬀer (1 − δ, δ). In that case, player 1 will oﬀer (1 − δ, δ), which will be accepted. For
any division that gives player 1 more than 1 − δ will give player 2 less than δ, and will
be rejected.
       Now, consider the game in which the game above is repeated n times. That is, if they
have not yet reached an agreement by the end of the second day, on the third day, player
1 makes an oﬀer (x3 , y3 ) ∈ D. Then, knowing what has been oﬀered, player 2 accepts
or rejects the oﬀer. If he accepts the oﬀer, the oﬀer is implemented, yielding payoﬀs
¡ 2           ¢
 δ x3 , δ 2 y3 . If he rejects the oﬀer, then they wait until the next day, when player 2
makes an oﬀer (x4 , y4 ) ∈ D. Now, knowing what player 2 has oﬀered, player 1 accepts or
rejects the oﬀer. If player 1 accepts the oﬀer, the oﬀer is implemented, yielding payoﬀs
¡ 3           ¢
 δ x4 , δ 3 y4 . If player two rejects the oﬀer, then they go to the 5th day... And this goes
on like this until the end of day 2n. If they have not yet agreed at the end of that day,
the game ends, when they lose the dollar and get payoﬀs (0,0).
       The subgame perfect equilibrium will be as follows. At any day t = 2n − 2k (k is a
   2
       In fact, player 1 must accept (0,1) in equilibrium. For, if he doesn’t accept (0,1), the best response
of player 2 will be empty, inconsistent with an equilibrium. (Any oﬀer ( , 1 − ) of player 2 will be
accepted. But for any oﬀer ( , 1 − ), there is a better oﬀer ( /2, 1 − /2), which will also be accepted.)




                                                      10
non-negative integer), player 1 accepts any oﬀer (x, y) with
                                          ¡         ¢
                                         δ 1 − δ 2k
                                    x≥
                                            1+δ
and will reject any oﬀer (x, y) with
                                           ¡         ¢
                                          δ 1 − δ 2k
                                       x<              ;
                                             1+δ
and player 2 oﬀers
                     Ã ¡         ¢       ¡        ¢! Ã ¡        ¢           !
                      δ 1 − δ 2k        δ 1 − δ2k     δ 1 − δ 2k 1 + δ 2k+1
        (xt , yt ) =               ,1 −             ≡             ,           .
                         1+δ               1+δ           1+δ        1+δ

And at any day t − 1 = 2n − 2k − 1, player 2 accepts an oﬀer (x, y) iﬀ
                                       ¡           ¢
                                      δ 1 + δ 2k+1
                                y≥                   ;
                                         1+δ
and Player 1 will oﬀer
                 Ã        ¡         ¢ ¡          ¢! Ã             ¡           ¢!
                         δ 1 + δ2k+1 δ 1 + δ2k+1      1 − δ 2k+2 δ 1 + δ 2k+1
   (xt−1 , yt−1 ) =   1−             ,             ≡            ,                .
                            1+δ         1+δ             1+δ         1+δ

   We can prove this is the equilibrium given by backwards induction using mathemat-
ical induction on k. (That is, we first prove that it is true for k = 0; then assuming that
it is true for some k − 1, we prove that it is true for k.)
   Proof. Note that for k = 0, we have the last two periods, identical to the 2-period
example we analyzed above. Letting k = 0, we can easily check that the behavior
described here is the same as the equilibrium behavior in the 2-period game. Now,
assume that, for some k − 1 the equilibrium is as described above. That is, at the
beginning of date t + 1 := 2n − 2 (k − 1) − 1 = 2n − 2k + 1, player 1 oﬀers
                     ⎛                 ³               ´⎞ Ã
                             2(k−1)+2 δ 1 + δ
                                              2(k−1)+1                  ¡          ¢!
                       1 − δ                                1 − δ 2k
                                                                       δ 1 + δ2k−1
    (xt+1 , yt+1 ) = ⎝               ,                  ⎠=           ,                ;
                           1+δ             1+δ               1+δ          1+δ

and his oﬀer is accepted. At date t = 2n − 2k, player one accepts an oﬀer iﬀ the oﬀer is
                               2k                                 δ (1−δ2k )
at least as good as having 1−δ
                            1+δ
                                  in the next day, which is worth    1+δ
                                                                             . Therefore, he
will accept an oﬀer (x, y) iﬀ              ¡         ¢
                                          δ 1 − δ 2k
                                       x≥              ;
                                             1+δ

                                              11
as we have described above. In that case, the best player 2 can do is to oﬀer
                     Ã ¡         ¢       ¡         ¢! Ã ¡       ¢           !
                      δ 1 − δ 2k        δ 1 − δ 2k     δ 1 − δ2k 1 + δ 2k+1
        (xt , yt ) =               ,1 −              =            ,           .
                         1+δ               1+δ            1+δ        1+δ

For any oﬀer that gives 2 more than yt will be rejected in which case player 2 will get
                                        ¡           ¢
                                     δ 2 1 + δ 2k−1
                             δyt+1 =                  < yt .
                                          1+δ
That is, at t player 2 oﬀers (xt , yt ) ; and it is accepted. In that case, at t − 1, player 2
will accept an oﬀer (x, y) iﬀ
                                              ¡           ¢
                                             δ 1 + δ 2k+1
                                   y ≥ δyt =                .
                                                1+δ
In that case, at t − 1, player 1 will oﬀer
                                                     Ã               ¡          ¢!
                                                         1 − δ 2k+2 δ 1 + δ2k+1
               (xt−1 , yt−1 ) ≡ (1 − δyt , δyt ) =                 ,               ,
                                                           1+δ         1+δ

completing the proof.
   Now, let n → ∞. At any odd date t, player 1 will oﬀer
                            Ã                ¡           ¢! µ         ¶
                                    2k+2            2k+1
             ∞ ∞              1 − δ        δ  1 + δ            1   δ
           (xt , yt ) = lim              ,                 =     ,      ;
                        k→∞     1+δ             1+δ           1+δ 1+δ

and any even date t player 2 will oﬀer
                             Ã ¡           ¢              ! µ         ¶
                                        2k           2k+1
              ∞ ∞              δ  1 − δ        1 + δ           δ   1
            (xt , yt ) = lim                 ,             =     ,      ;
                         k→∞       1+δ           1+δ          1+δ 1+δ

and the oﬀers are barely accepted.




                                                12
                14.12 Game Theory Lecture Notes
                             Forward Induction
                                       Muhamet Yildiz


    Forward induction is a term that is used for the vague idea that when one sees a move
by a player, he tries to understand what the player intends to do in the future–even if
this move is not supposed to be taken (according to a theory one might have in mind.)
Many economists have attempted to formalize this notion. These notes intend to present
this idea informally (following a recent formalization by Battigalli and Siniscalchi.)


1     Example
In order to see the basic idea, consider the following game.
                                             1
                                       Out       In


                               (2,2)                   B     S
                                                 B    3,1   0,0
                                                 S    0,0   1,3

In this game, player 1 has option of staying out and getting the payoﬀ of 2, rather
than playing the battle of sexes game with player 2. Now the battle of sexes has three
Nash equilibria: the pure strategy equilibria (B,B) and (S,S), and the mixed strategy
equilibrium ((3/4,1/4),(1/4,3/4)), where player 1 (resp., 2) plays strategy B (resp, S)
with probability 3/4. These equilibria lead to three subgame-perfect equilibria in the
larger game:

    1. Player 1 plays In and then they play (B,B);

    2. Player 1 plays out, but they would play (S,S) if player 1 played In, and

                                                 1
   3. Player 1 plays out, but they would play the mixed-strategy equilibrium ((3/4,1/4),(1/4,3/4))
         if player 1 played In.

       Let us look at the last two equilibria closely. In these equilibria, after seeing that
player 1 has played In, player 2 believes that player 1 will play S with positive probability
(namely with probabilities 1 and 1/4 in equilibria in 2 and 3, respectively, above). In
other words, after seeing In, player 2 thinks that player 1 plays the strategy InS with
positive probability. But notice that this strategy is strictly dominated by staying out
(i.e., by the strategies OutB and OutS). Hence, after observing that player 1 has played
In, Player 2 comes to think that Player 1 may be irrational. Notice, however, that playing
In does not provide any strong evidence for irrationality of Player 1. Player 1 might have
played In with the intention of playing B afterwards, thinking that player 2 will also play
B. That is, after seeing In, Player 2 has revised his beliefs about the rationality of Player
1, while he could have revised his beliefs about Player 1’s intentions and beliefs. That
means that he did not believe in the rationality of Player 1 strongly enough. Had he
believed in the rationality of player 1 strongly, after seeing In, he would become certain
that player 1 will play B, and thus he would also play B. Therefore, if player 1 had
suﬃcient confidence in that player 2 strongly believes that player 1 is rational, then she
would anticipate that he would play B, and she would play In. Therefore, the last two
equilibria cannot be consistent with the assumptions (i) that players “strongly believe”
in players’ rationality and (ii) that they are certain that players “strongly believe” in
players’ rationality.1
       The argument in the previous paragraph is a froward induction argument, as it is
based an the idea that after seeing a move players must try to think about what the
other players are trying to do, and interpret these moves as parts of a rational strategy
if possible. In this way, forward induction introduces two important notions into the
analysis:

   1. Context: In analyzing a game, one should not take the game in isolation, but
         should rather determine the larger context in which the game is being played.
         For example, the analysis of the battle of sexes may change dramatically, once we
   1
       But, since they are equilibria, they must be consistent with the common knowledge of rationality.
Think about this issue until you see why this may look paradoxical and why we do not have any
contradiction.

                                                    2
       realize that one of the players had forgone some high payoﬀ in order to play this
       game. There is a clear tension between this idea and the idea that “bygones are
       bygones,” the idea that is partly embedded in the solution concepts of backwards
       induction and subgame-perfection.

    2. Communication: In a dynamic game, a player’s moves may also reveal informa-
       tion about his intentions in the future, and a player may try to communicate his
       intensions through his actions. For example, by playing In, player 1 communicates
       his intention that he will play B.


2      Concepts
Communication Consider a dynamic game. At the beginning each player has some
beliefs about the players’ payoﬀs and the physical world; he also has a belief about
what kind of beliefs the other players may have about this underlying world, and beliefs
about other players’ beliefs about other players’ beliefs and so on. Call this external
uncertainty. In addition to this, each player also have some beliefs about what the
other players intend to play (as a function their beliefs and payoﬀs), beliefs about other
players’ beliefs about how the game will be played, and so on. Call the latter uncertainty
epistemic uncertainty. During the play of the game, players observe the actions taken
by the other players. Each action of a player reveals some information about

    (i) the player’s beliefs (and information) regarding the external and epistemic uncer-
       tainty, and

 (ii) the strategy the player intends to play.

Hence, as the game evolves the players interpret every move and revise their beliefs
about the external uncertainty and their theories about how the players will play in
the future. Now, knowing all these, sophisticated players must also think (and have a
belief) about how each player will interpret any given move. (And, again, they have
beliefs about these beliefs, and so on.) Hence, when they take an action, they also take
into account what they communicate with their actions. The communication about the



                                             3
epistemic uncertainty is the subject matter of forward induction. In order to focus on
this issue, we will assume that there is no external uncertainty.2
       Keep in mind that a player has a new set of beliefs at each node–about everything
one can think of, including the players’ beliefs at all decision nodes. We usually require
that a player’s beliefs at any two nodes are consistent in the sense that when we reach a
new node he updates his beliefs (from his beliefs in the previous node) using the Bayes’
rule whenever that rule is applicable.3

Sequential Rationality Recall that by rationality we usually mean that the player
maximizes the expected value of his payoﬀs (given his beliefs about the other players’
play.) This definition does not put any restriction about how a player acts at decision
nodes that will not be reached according to the player’s beliefs. For forward induction,
we will use a stronger notion of rationality, known as sequential rationality, which is also
used in backwards induction.

Definition 1 We say that a player is sequentially rational if and only if, at each in-
formation set he is to move, he maximizes his expected utility with respect to his beliefs
conditional on that he is at that information set.

       Notice that we require that a player’s action at a node (or information set) is optimal
even if this node is precluded by his own strategy, or he thinks at the beginning of the
game that this node will not be reached. For example, in the example above, if player
1 believes that player 2 will play S, then the only sequentially rational move for her is
OutS; at her decision node after In, she must give a best reply to S, which is necessarily
S, and at the initial node, she will choose Out and get 2, rather than playing In and
getting 1. Notice that, given her beliefs, OutB is rational but not sequentially rational.
Similarly, if player 1 believes that player 2 will play B, then the only rational (and hence
the only sequentially rational) strategy for her is InB.
   2
       This issue has been analyzed in game theory extensively using signaling games, and it is very
important in analysis of dynamic games, from bargaining to auctions. Of course, these two issues are
closely related.
   3
     We also require consistency in another sense, but describing this is beyond the scope of these notes.




                                                    4
Correct Strong Belief As it must be clear by now, a player may initially believe in
an event but may lose his belief after observing some moves. The moves may contradict
his initial beliefs after all. We are interested strong beliefs.

Definition 2 We say that a player strongly believes in some event (or some propo-
sition), if she keeps believing in the event (or the proposition) at each information set
where it is possible that the event (or the proposition) is true.

   As an example, consider the event

                              Player 1 is sequentially rational                        (SR1)

in the game above. If player 1 strongly believes in this, he must believe at the beginning
that player 1 will not play the strictly dominated strategy InS. All the other strategies
are consistent with sequential rationality of player 1 at the beginning. Consider his
information set after he observes In. There are two possible strategies of player 1 that
is consistent with this history: InS and InB. Moreover, InB is consistent with SR1, and
InS is not. Hence, if player 2 strongly believes in SR1, then he must believe at this
information set that player 1 plays InB.
   That someone strongly believes in something does not mean that it is true. For
example, it is conceivable that there are two individuals, one strongly believes in the
existence of God, while the other strongly believes in the non-existence of God. We
face some subtle diﬃculties when we analyze strong beliefs that happens to be false.
Hence, we will consider only the cases that someone believes is some event and that
event happens to be true.

Definition 3 We say that a player i correctly strongly believes in some event E, de-
noted by CSBi (E), iﬀ E is true and he strongly believes that E is true.

   For example, that player 2 correctly, strongly believes in SR1 is equivalent to (i)
that player 2 believes in SR1 whenever it is possible and (ii) that it is actually true that
Player 1 is sequentially rational. Recall also that this implies that player 1 is sequentially
rational, and at his information set, player 2 believes that player 1 plays InB.




                                              5
Iterated Correct Strong Belief Recall the definition of common knowledge: we
say that an event E is common knowledge iﬀ E is true and everyone knows that it
is true and everyone knows that everyone knows that E is true, ad infinitum. We
want to define such an iterated notion for correct strong beliefs. We write CSB(E)
to mean that everyone correctly strongly believes that E is true. We can also write
CSB 2 (E) = CSB(CSB(E)) to mean that everybody correctly and strongly believes
that everybody correctly and strongly believes that E is true. We can write CSB k (E) =
      ¡           ¢
CSB CSB k−1 (E) , obtaining an iteration. We can now talk about common correct
strong belief ; when applied to some event E, this means that E is true and everyone
correctly and strongly believes that E is true and everybody correctly and strongly
believes that everybody correctly and strongly believes that E is true, and so on.
   To see how these assumptions work, consider CSB 2 (E). Let us write SB(E) to mean
that everybody strongly believes that E is true, and also write ∩ to mean “and”. We
have

                     CSB 2 (E) = CSB(CSB(E))
                                 = CSB (E) ∩ SB (CSB (E))
                                 = E ∩ SB(E) ∩ SB (E ∩ SB(E)) ,

where the second and third equalities are obtained by inserting the definition of correct
strong belief. Notice that when CSB 2 (E) is true,

  1. E is true,

  2. everyone strongly believes that E is true, that is, at every history where E is not
       contradicted everyone keeps believing in truthfulness of E, and

  3. everyone strongly believes that the preceding two propositions are true, i.e., they
       keep believing in them until it is not possible to believe in both propositions
       simultaneously.

   What happens if we reach a history that does not contradict E but could not be
reached if E were true and everyone strongly believed that E is true? Let us look at a
player’s beliefs at such a history. Since E is not contradicted, he believes that E is true,
but he no longer believes that everybody strongly believes that E is true. That is, when

                                             6
a stronger assumption (i.e., E ∩ SB(E)) is contradicted, he keeps believing in E, until
it is not possible. Or consider a history at which it is not possible that E is true and
everyone strongly believes in this (i.e., SB (E)) and all the other players strongly believe
in these two (i.e., ∩j6=i SBj (E ∩ SB(E))), but it is possible that E ∩ SB(E). In that
history, our player will believe E ∩ SB(E) but will not believe in ∩j6=i SBj (E ∩ SB(E)).
In summary, he believes in everyone strongly believes that everyone strongly believes
that ... everyone strongly believes that E is true as many times as he can.


3     Forward Induction
We use common correct strong belief in sequential rationality to formalize forward in-
duction. Consider the assumption

                           Everybody is sequentially rational.                        (SR)

Consider
              CCSB (SR) ≡ SR ∩ CSB (SR) ∩ CSB (CSB (SR)) ∩ · · · ,
i.e., everybody is sequentially rational, everybody correctly and strongly believes that
everybody is sequentially rational, and everybody correctly and strongly believes that
everybody correctly and strongly believes that everybody is sequentially rational, ... By
forward induction, we mean the implications of this set of assumptions.
    In our example, notice that CSB2 (SR1) implies that at his information set, player
2 believes that player 1 will play InB. Hence, SR2 ∩ CSB2 (SR1) implies that, if player
1 plays In, player 2 will play S. Now,

CSB1 (CSB (SR)) = SR1 ∩ SR2 ∩ SB1 (SR2) ∩ SB2 (SR1) ∩ SB1 (SR2 ∩ CSB2 (SR1)) .

Hence, CSB1 (CSB (SR)) implies that at the beginning player 1 believes that if she
plays In, then player 2 will play S (this comes from SB1 (SR2 ∩ CSB2 (SR1))). Since
CSB1 (CSB (SR)) implies SR1 (i.e., player 1 is rational), this further implies that player
1 must play In.


4     Problem Descriptions
Think about how you can apply this, in games where

                                             7
   • there are entry costs (which may be of the form of opportunity cost, such as the
       possibility of working for a competitive wage in our partnership game), or

   • some of the players have opportunity to wastefully spend some of his wealth (e.g.,
       a candidate spending his champaign contributions in ways that do not necessarily
       increase his popularity, or a well-known company, such as CocaCola or Pepsi,
       having excessive advertisements that do not contain much information about its
       products–and would not presumably increase the name recognition of such a well-
       known company), or

   • the right to participate in the game is auctioned (e.g., the telecommunication
       companies bid in an auction for FCC licenses, which they need to have in order to
       be in the telecommunication market, where they also compete with each other).

   Think also about the internet markets (such as e-bay and yahoo) where the par-
ticipants pay a fee. Would the demand for these market be decreasing in the entree
fee?




                                            8
                        14.12 Game Theory Lecture Notes
                                      Lectures 11-12
                                        Muhamet Yildiz



1     Repeated Games
In these notes, we’ll discuss the repeated games, the games where a particular smaller game is
repeated; the small game is called the stage game. The stage game is repeated regardless of
what has been played in the previous games.             For our analysis, it is important whether the
game is repeated finitely or infinitely many times, and whether the players observe what each
player has played in each previous game.


1.1   Finitely repeated games with observable actions

We will first consider the games where a stage game is repeated finitely many times, and at the
beginning of each repetition each player recalls what each player has played in each previous
play. Consider the following entry deterrence game, where an entrant (1) decides whether to
enter a market or not, and the incumbent (2) decides whether to fight or accommodate the
entrant if he enters.

                              1       Enter       2 Acc.
                                                                     (1,1)

                          X                         Fight


                              (0,2)           (-1,-1)

    Consider the game where this entry deterrence game is repeated twice, and all the previous
actions are observed. Assume that a player simply cares about the sum of his payoﬀs at the
stage games. This game is depicted in the following figure.




                                                   1
                                             1       Enter           2 Acc.             1      Enter      2 Acc.
                                                                                                                       (2,2)

                                         X                               Fight      X                          Fight
                 Acc.       2 Enter          1
        (1,3)                                                                           (1,3)          (0,0)
                                                                 1          Enter         2 Acc.
                    Fight                X                                                                     (0,0)

                                                             X                              Fight
                        (-1,1)               (0,4)

                                                                 (-1,1)             (-2,-2)


   Note that after the each outcome of the first play, the entry deterrence game is played again
—where the payoﬀ from the first play is added to each outcome. Since a player’s preferences
over the lotteries do not change when we add a number to his utility function, each of the three
games played on the second “day” is the same as the stage game (namely, the entry deterrence
game above). The stage game has a unique subgame perfect equilibrium, where the incumbent
accommodates the entrant, and anticipating this, the entrant enters the market.

                                     1           Enter           2 Acc.
                                                                                                (1,1)

                                 X                                   Fight


                                     (0,2)               (-1,-1)

   In that case, each of the three games played on the second day has only this equilibrium
as its subgame perfect equilibrium. This is depicted in the following.

                                             1       Enter           2 Acc.             1      Enter      2 Acc.
                                                                                                                       (2,2)

                                         X                               Fight      X                          Fight
                 Acc.       2 Enter          1
        (1,3)                                                                           (1,3)          (0,0)
                                                                 1          Enter         2 Acc.
                    Fight                X                                                                     (0,0)

                                                             X                              Fight
                        (-1,1)               (0,4)

                                                                 (-1,1)             (-2,-2)


   Using backward induction, we therefore reduce the game to the following.




                                                                     2
                                      1           Enter           2 Acc.
                                                                                                 (2,2)

                                  X                                   Fight


                                      (1,3)               (0,0)

   Notice that we simply added the unique subgame perfect equilibrium payoﬀ of 1 from
the second day to each payoﬀ in the stage game.                                   Again, adding a constant to a player’s
payoﬀs does not change the game, and hence the reduced game possesses the subgame perfect
equilibrium of the stage game as its unique subgame perfect equilibrium.                                                Therefore, the
unique subgame perfect equilibrium is as depicted below.
                                              1       Enter           2 Acc.             1      Enter      2 Acc.
                                                                                                                         (2,2)

                                          X                               Fight      X                          Fight
                  Acc.       2 Enter          1
          (1,3)                                                                          (1,3)          (0,0)
                                                                  1          Enter         2 Acc.
                     Fight                X                                                                     (0,0)

                                                              X                              Fight
                         (-1,1)               (0,4)

                                                                  (-1,1)             (-2,-2)


   This can be generalized. That is, given any finitely repeated game with observable actions,
if the stage game has a unique subgame perfect equilibrium, then the repeated game has a
unique subgame perfect equilibrium, where the subgame perfect equilibrium of the stage game
is player at each day.
      If the stage game has more than one equilibrium, then in the repeated game we may have
some subgame perfect equilibria where, in some stages, players play some actions that are not
played in any subgame perfect equilibria of the stage game. For the equilibrium to be played
on the second day can be conditioned to the play on the first day, in which case the “ reduced
game” for the first day is no longer the same as the stage game, and thus may obtain some
diﬀerent equilibria. To see this, see Gibbons.


1.2     Infinitely repeated games with observed actions

  Now we consider the infinitely repeated games where all the previous moves are common
knowledge at the beginning of each stage. In an infinitely repeated game, we cannot simply
add the payoﬀs of each stage, as the sum becomes infinite. For these games, we will confine

                                                                      3
ourselves to the case where players maximize the discounted sum of the payoﬀs from the stage
games. The present value of any given payoﬀ stream π = (π 0 , π 1 , . . . , π t , . . .) is computed by
                                                  ∞
                                                  X
                                P V (π; δ) =            δ t π t = π 0 + δπ 1 + · · · + δ t π t + · · · ,
                                                  t=0

where δ ∈ (0, 1) is the discount factor.                     By the average value, we simply mean
                                                                                 ∞
                                                                                 X
                                           (1 − δ) P V (π; δ) ≡ (1 − δ)                δt πt .
                                                                                 t=0

Note that, when we have a constant payoﬀ stream (i.e., π 0 = π 1 = · · · = π t = · · · ), the average
value is simply the stage payoﬀ (namely, π 0 ). Note that the present and the average values
can be computed with respect to the current date. That is, given any t, the present value at t
is
                                            ∞
                                            X
                           P Vt (π; δ) =          δ s−t π s = π t + δπ t+1 + · · · + δ k π t+k + · · · .
                                            s=t
Clearly,
                               P V (π; δ) = π 0 + δπ 1 + · · · + δ t−1 π t−1 + δ t P Vt (π; δ) .

Hence, the analysis does not change whether one uses P V or P Vt , but using P Vt is simpler.
          The main property of infinitely repeated games is that the set of equilibria becomes very
large as players get more patients, i.e., δ → 1. given any payoﬀ vector that gives each player
more than some Nash equilibrium outcome of the stage game, for suﬃciently large values of
δ, there exists some subgame perfect equilibrium that yields the payoﬀ vector at hand as
the average value of the payoﬀ stream. This fact is called the folk theorem.                                 See Gibbons
for details.
         In these games, to check whether a strategy profile s = (s1 , s2 , . . . , sn ) is a subgame perfect
equilibrium, we use the single-deviation principle, defined as follows.1 Take any formation set,
where some player i is to move, and play a strategy a∗ of the stage game according to the
strategy profile s. Assume that the information set is reached, each player j 6= i sticks to his
strategy sj in the remaining game, and player i will stick to his strategy si in the remaining
game except for the information set at hand. given all these, we check whether the player
has an incentive to deviate to some action a0 at the information set (rather than playing a∗ ).
[Note that all players, including player i, are assumed to stick to this strategy profile in the
remaining game.] The single-deviation principle states that if there is no information set the
     1
         Note that a strategy profile si is an infinite sequence si = (a0 , a1 , . . . , at , . . .) of functions at determining
which “strategy of the stage game” to be played at t depending on which actions each player has taken in the
previous plays of the stage game.


                                                                    4
player has an incentive to deviate in this sense, then the strategy profile is a subgame perfect
equilibrium.
   Let us analyze the infinitely repeated version of the entry deterrence game. Consider
the following strategy profile.   At any given stage, the entrant enters the market if an only
if the incumbent has accommodated the entrant sometimes in the past.                The incumbent
accommodates the entrant if an only if he has accommodated the entrant before. (This is
a switching strategy, where initially incumbent fights whenever there is an entry and the
entrant never enters. If the incumbent happens to accommodate an entrant, they switch to
the new regime where the entrant enters the market no matter what the incumbent does after
the switching, and incumbent always accommodates the entrant.) For large values of δ, this
an equilibrium.
   To check whether this is an equilibrium, we use the single-deviation principle. We first take
a date t and any history (at t) where incumbent has accommodated the entrants. According to
the strategy of the incumbent, he will always accommodate the entrant in the remaining game,
and the entrant will always enter the market (again according to his own strategy). Thus, the
continuation value of incumbent (i.e., the present value of the equilibrium payoﬀ-stream of the
incumbent) at t + 1 is
                               VA = 1 + δ + δ 2 + · · · = 1/ (1 − δ) .

If he accomodates at t, his present value (at t) will be 1+δVA . If he fights, then his present value
will be −1+δVA . Therefore, the incumbent has no incentive to fight, rather than accomodating
as stipulated by his strategy. The entrants continuation value at t + 1 will also be independent
of what happens at t, hence the entrant will enter (whence he gets 1 + δ[His present value at
t + 1]) rather than deviating (whence he gets 0 + δ[His present value at t + 1]).
   Now consider a history at some date t where the incumbent has never accommodated the
entrant before. Consider the incumbent’s information set. If he accommodates the entrant,
his continuation value at t + 1 will be VA = 1/ (1 − δ), whence his continuation value at t
will be 1 + δVA = 1 + δ/ (1 − δ). If he fights, however, according to the strategy profile, he
will never accommodate any entrants in the future, and the entrant will never enter, in which
case the incumbent will get the constant payoﬀ stream of 2, whose present value att + 1 is
2/ (1 − δ). Hence, in this case, his continuation value at t will be −1 + δ · 2/ (1 − δ). Therefore,
the incumbent will not have any incentive to deviate (and accommodate the entrant) if and
only if
                               −1 + δ · 2/ (1 − δ) ≥ 1 + δ/ (1 − δ) ,




                                                 5
which is true if and only if
                                             δ ≥ 2/3.

When this condition holds, the incumbent do not have an incentive to deviate in such histories.
Now, if the entrant enters the market, incumbent will fight, and the entrant will never enter in
the future, in which case his continuation value will be −1. If he does not enter, his continuation
value is 0. Therefore, he will not have any incentive to enter, either. Since we have covered all
possible histories, by the single-deviation principle, this strategy profile is a subgame perfect
equilibrium if and only if δ ≥ 2/3.
   Now, study the cooperation in the prisoners’ dilemma, implicit collusion in a
Cournot duopoly, and other examples in Gibbons.




                                                6
                            14.12 Game Theory Lecture Notes
                                              Lectures 15-18
                                                Muhamet Yildiz∗




1        Static Games with Incomplete Information
An incomplete information game is a game where a party knows something that some other
party does not know. For instance, a player may not know another player’s utility function,
while the player himself knows his utility function. Such situations are modeled through games
where Nature moves and some players can distinguish certain moves of nature while some others
cannot.
        Example: Firm hiring a worker, the worker can be high or low ability and the firm does
not know which.

    ∗
        These notes are heavily based on the notes by Professor Daron Acemoglu, who taught this course in previous
years.




                                                          1
                                                                       Work           (1, 2)
                                                                W
                                            Firm         Hire
                                                                      Shirk
                            High p                                                     (0, 1)
             Nature                                      Do not (0, 0)
                                                         hire
                                                                        Work           (1, 1)
                                                                  W
                        Low 1-p                       Hire
                                                                      Shirk
                                                                                      (-1, 2)
                                                   Do not
                                                   hire                 (0, 0)
In this game W knows whether he is of high (who will work) or low (who will shirk) ability
worker, while the Firm does not know this; the Firm believes that the worker is of high ability
with probability p. And all these are common knowledge. We call a player’s private information
as his “type”. For instance, here W has two types — high and low — while Firm has only one
type (as everything firm knows is common knowledge). Note that we represent the incomplete
information game in an extensive form very similar to imperfect information games.
    Formally, a static game with incomplete information is as follows. First, Nature chooses
some t = (t1 , t2 , . . . , tn ) ∈ T , where each t ∈ T is selected with probability p (t). Here, ti ∈ Ti is
the type of player i ∈ N = {1, 2, . . . , n}. Then, each player observes his own type, but not the
others’. finally, players simultaneously choose their actions, each player knowing his own type.
We write a = (a1 , a2 , . . . , a2 ) ∈ A for any list of actions taken by all the players, where ai ∈ Ai
is the action taken by player i. Such a static gamewith incomplete information is denoted by
(N, T, A, p).
    Notice that a strategy of that player determines which action he will take at each infor-
mation set of his, represented by some ti ∈ Ti . That is, a strategy of a player i is a function
si : Ti → Ai —from his types to his actions. for instance, in example above, W has four strate-
gies, such as (Work,Work) —meaning that he will work regardless nature chooses high or low—
(Work, Shirk), (Shirk, Work), and (Shirk, Shirk).
    Any Nash equilibrium of such a game is called Bayesian Nash equilibrium. For instance,
for p > 1/2, a Bayesian Nash equilibrium of the game above is as follows. Worker chooses to



                                                     2
Work if he is of high ability, and chooses to Shirk if he is of low ability; and the firm Hires him.
    Notice that there is another Nash equilibrium, where the worker chooses to Shirk regardless
of his type and the firm doesn’t hire him. Since the game has no proper subgame, the latter
equilibrium is subgame perfect, even though it clearly relies on an “incredible” threat. this
is a very common problem in games with incomplete information, motivating a more refined
equilibrium concept we’ll discuss in our next lectures.
    It’s very important to note that players’ types may be “correlated”, meaning that a player
“updates” his beliefs about the other players’ type when he learns his own type. Since he
knows his type when he takes his action, he maximizes his expected utility with respect to the
new beliefs he came to after “updating” his beliefs. We assume that he updates his beliefs
using Bayes’ Rule.

Bayes’ Rule Let A and B be two events, then probability that A occurs conditional on B
occurring is

                                                                  P (A ∩ B)
                                               P (A | B) =                  ,
                                                                    P (B)
where P (A ∩ B) is the probability that A and B occur simultaneously and P (B): the (uncon-
ditional) probability that B occurs.
    In static games of incomplete information, the application of Bayes’ Rule will often be
trivial, but as we move to study dynamic games of incomplete information, the importance of
Bayes’ Rule will increase.
    Let pi (t0−i |ti ) denote i’s belief that the types of all other players is t0−i = (t01 , t02 , ..., t0i−1 , t0i+1 , . . . , t0n )
given that his type is ti. [We may need to use Bayes’ Rule if types across players are ‘correlated’.
But if they are independent, then life is simpler; players do not update their beliefs.]
    With this formalism, a strategy profiles s∗ = (s∗1 , ..., s∗n ) is a Bayesian Nash Equilibrium
in an n-person static game of incomplete information if and only if for each player i and type
ti ∈ Ti ,

                                              X
                       s∗i (t1i ) ∈ arg max       ui [s∗i (ti ), ..., ai , ..., s∗N (tN )] × pi (t0−i |ti )
                                         ai

where ui is the utility of player i and ai denotes action. That is, for each player i each possible
type, the action chosen is optimal given the conditional beliefs of that type against the optimal
strategies of all other players.
    The remaining notes are about the applications and very sketchy; for the details see Gib-
bons.


                                                              3
   Example: Cournot with Incomplete Information.
   P (Q) = a − Q
   Q = q1 + q2
   c1 (q1 ) = cq1

   Both firms Risk-Neutral

   Firm 2’s types (private information)
   c2 (q2 ) = cH q2        with probability θ
                cL q2        with probability 1 − θ

              common knowledge among players.

   How to find the Bayesian Nash Equilibrium?

   Firm 2 has two possible types; and diﬀerent actions will be chosen for the two diﬀerent
types.
   {q2 (cL ), q2 (cH )}
   Suppose firm 2 is type high.
   =⇒
                                  max(P − cH )q2 = [a − q1 − q2 − cH ] q2
                                   q2

   given the action of player q1 .

                                                            a − q1 − cH
                                        =⇒ q2 (cH ) =                                        (*)
                                                                 2
   Similarly suppose firm 2 is low type:


                                         max [a − q1 − q2 − cH ] q2
                                          q2


                                          a − q1 − cH
                                           q2 (cL ) =                                       (**)
                                               2
   Important Remark: The same level of q1 in both cases. Why??
   Firm 1’s problem


                    maxθ [a − q1 − q2 (cH ) − c] q1 + (1 − θ) [a − q1 − q2 (cL ) − c] q1
                      q1


                                  θ [a − q2 (cH ) − c] + (1 − θ) [a − q2 (cL ) − c]
                           q1 =                                                            (***)
                                                          2

                                                        4
   Solve *, **, and *** for q1 , q2 (cL ), q2 (cH )

                                                a − 2cH + c (1 − θ)(cH − cL )
                                  q2∗ (cH ) =              +
                                                     3              6

                                                   a − 2cL + c θ(cH − cL )
                                     q2∗ (cL ) =              +
                                                        3          6

                                                  a − 2c + θcH + (1 − θ)cL
                                        q1∗ =
                                                             3

   Harsaryi’s Justification for Mixed Strategies
          O         F
    O     2 + t1 , 1       0, 0
     F       0, 0     1, 2 + t2
   t1 , t2 private information of players.

   t1 , t2 are independent draws from uniform distribution over [0, X].
   Harsayi shows that as X −→ 0 (as uncertainty disappears), we converge to a mixed strategy
equilibrium where 1 plays 0 with probability 2/3 and 2 plays F with probability 2/3. See
Gibbons for details.

   Auctions
   Two bidders for a unique good.
   vi : valuation of bidder i.
   Let us assume that vi ’s are drawn independently from a uniform distribution over [0, 1]. vi
is player i’s private information. The game takes the form of both bidders submitting a bid,
then the highest bidder wins and pays her bid.
   Let bi be player i’s bid.
   vi (b1 , b2 , v1 , v2 ) = vi − bi if bi > bj
                              vi −bi
                                 2   if bi = bj
                                  0 if bi < bj


                                                                1
   max(vi − bi )P rob{bi > bj (vj )|given beliefs of player i) + (vi − bi )P rob{bi = bj (vj )|...)
    bi                                                          2
   1
   2 (vi − bi )P rob{bi = bj (vj )|...) = 0 since a continuum of possibilities.
   Let us first conjecture the form of the equilibrium: Conjecture:               Symmetric and linear
equilibrium

                                                          5
                                                b = a + cv.

Then



                        max(vi − bi )P rob{bi ≥ a + cvj } =
                         bi
                                                     bi − a                  (bi − a)
                              (vi − bi )P rob{vj ≤          } = (vi − bi ) ·
                                                        c                        c
  FOC:


                                            vi + a
                                         bi =         if vi ≥ a
                                               2
                                           =a      if vi < a                                   (1)

  A linear strategy is BR to a linear strategy only if a = 0

                                                       1
                                                =⇒ bi = vi
                                                       2

                                                     1
                                                 bi = vj
                                                     2


  Double Auction
  Seller names Ps
  Buyer names Pb
  Pb < Ps      no trade
  Pb ≥ Ps      trade at p = Pb +P
                               2
                                 s


  Valuations again private information.
  Vb uniform over (0, 1)
  Vs uniform over (0, 1) and independent from Vb
  Strategies Pb (Vb )         Ps (Vs )

  The buyer maximizes
                   ∙                                   ¸
                        Pb + E{Ps (Vs )|Pb ≥ Ps (Vs )}
               max Vb −                                  × P rob{Pb ≥ Ps (Vs )}
                Pb                   2
  where E(Ps (Vs )|Pb ≥ Ps (Vs ) expected seller bid conditional on Pb being greater than Ps (Vs ).

                                                      6
   Similarly, the seller maximizes


                 max [Ps + E{Pb (Vb )|Pb (Vb ) ≥ Ps ] − Vs ] × P rob{Pb (Vb ) ≥ Ps }
                  Ps

   Equilibrium         Ps (Vj )BR      to    Pb (Vb )
                        Pb (Vb )BR      to    Ps (Vs )

   Bayesian Nash Equilibria?
   There are many: Let us construct some examples
   1. Seller Ps = X         if      Vs ≤ X
            Pb = X         if       Vb ≥ X
   An equilibrium with “fixed” price.

   Why is this an equilibrium? because given Ps = X if Vs ≤ X, the buyer does not want to
trade with Vb < X and with Vb > X, Pb = X is optimal.



            Vb
                                                                              Vb /Vs

                        Trade

                                                                            Efficient
            X
                                                                          not to trade




            0                                                       VS
                                      Inefficient
                                       lack of equilibrium

   See Gibbons for other equilibria.
   Theorem ( Myerson and Satterthwrite): There is no Bayesian Nash Equilibrium without
ineﬃcient lack of trade.




                                                  7
               14.12 Game Theory Lecture Notes
                                Lectures 16-18
                                   Muhamet Yildiz



1     Dynamic Games with Incomplete Information
In these lectures, we analyze the issues arise in a dynamics context in the presence of
incomplete information, such as how agents should interpret the actions the other parties
take. We define perfect Bayesian Nash equilibrium, and apply it in a sequential bargain-
ing model with incomplete information. As in the games with complete information,
now we will use a stronger notion of rationality – sequential rationality.


2     Perfect Bayesian Nash Equilibrium
Recall that in games with complete information some Nash equilibria may be based on
the assumption that some players will act sequentially irrationally at certain information
sets oﬀ the path of equilibrium. In those games we ignored these equilibria by focusing
on subgame perfect equilibria; in the latter equilibria each agent’s action is sequentially
rational at each information set. Now, we extend this notion to the games with incom-
plete information. In these games, once again, some Bayesian Nash equilibria are based
on sequentially irrational moves oﬀ the path of equilibrium.
    Consider the game in Figure 1. In this game, a firm is to decide whether to hire a
worker, who can be hard-working (High) or lazy (Low). Under the current contract, if
the worker is hard-working, then working is better for the worker, and the firm makes
profit of 1 if the worker works. If the worker’s lazy, then shirking is better for him, and
the firm will lose 1 if the worker shirks. If the worker is sequentially rational, then he
will work if he’s hard-working and shirk if he’s lazy.    Since the firm finds the worker

                                            1
                                                                  Work     (1, 2)
                                                             W
                                          Firm        Hire
                                                                 Shirk
                                High .7                                     (0, 1)
                     Nature                        Do not    (0, 0)
                                                   hire
                                                                  Work      (1, 1)
                                                             W
                              Low .3              Hire
                                                                 Shirk
                                                                           (-1, 2)
                                                 Do not
                                                 hire             (0, 0)




                                          Figure 1:

more likely to be hard-working, the firm will hire the worker.                       But there is another
Bayesian Nash equilibrium: the worker always shirks (independent of his type), and
therefore the firm does not hire the worker. This equilibrium is indicated in the figure
by the bold lines.   It is based on the assumption that the worker will shirk when he
is hard-working, which is sequentially irrational.               Since this happens oﬀ the path of
equilibrium, such irrationality is ignored in the Bayesian Nash equilibrium–as in the
ordinary Nash equilibrium.
   We’ll now require sequential rationality at each information set.                      Such equilibria
will be called perfect Bayesian Nash equilibrium. The oﬃcial definition requires more
details.
   For each information set, we must specify the beliefs of the agent who moves at that
information set. Beliefs of an agent at a given information set are represented by a
probability distribution on the information set. In the game in figure 1, the players’
beliefs are already specified. Consider the game in figure 2. In this game we need to
specify the beliefs of player 2 at the information set that he moves. In the figure, his
beliefs are summarized by µ, which is the probability that he assigns to the event that
player 1 played T given that 2 is asked to move.
   Given a player’s beliefs, we can define sequential rationality:

Definition 1 A player is said to be sequentially rational iﬀ, at each information set he
is to move, he maximizes his expected utility given his beliefs at the information set (and
given that he is at the information set) — even if this information set is precluded by his

                                                  2
                                                                X
                                                  1                        ( 2 ,6 )

                                    T
                                                                B

                                    µ                  1−µ
                           2
                       L                 R             L                   R
                        ( 0 ,1 ) ( 3 ,2 )                  (-1 , 3 )   ( 1 ,5 )


                                                Figure 2:

own strategy.

   In the game of figure 1, sequential rationality requires that the worker works if he
is hard-working and shirks if he is lazy. Likewise, in the game of figure 2, sequential
rationality requires that player 2 plays R.


                                                   1

                                        T
                                                                B

                                    .1                         .9
                               2
                           L                R              L              R
                           (0,10)   (3,2)                  (-1,3)      (1,5)



                                                Figure 3:

   Now consider the game in figure 3.             In this figure, we depict a situation in which
player 1 plays T while player 2 plays R, which is not rationalizable. Player 2 assigns
probability .9 to the event that player 1 plays B. Given his beliefs, player 2’s move
is sequentially rational. Player 1 plays his dominant strategy, therefore his move is
sequentially rational. The problem with this situation is that player 2’s beliefs are not

                                                       3
consistent with player 1’s strategy. In contrast, in an equilibrium a player maximizes
his expected payoﬀ given the other players’ strategies. Now, we’ll define a concept of
consistency, which will be required in a perfect Bayesian Nash equilibrium.

Definition 2 Given any (possibly mixed) strategy profile s, an information set is said to
be on the path of play iﬀ the information set is reached with positive probability according
to s.

Definition 3 (Consistency on the path) Given any strategy profile s and any infor-
mation set I on the path of play of s, a player’s beliefs at I is said to be consistent with
s iﬀ the beliefs are derived using the Bayes’ rule and s.

   For example, in figure 3, consistency requires that player 2 assigns probability 1
to the event that player 1 plays T. This definition does not apply oﬀ the equilibrium
path.   Consider the game in Figure 4. In this game, after player 1 plays E, there

                                                            1

                                                    E           X
                                                2
                                                                2
                                        T                       0
                                                            B   0


                                   3
                               L            R       L               R

                                   1    3               0       0
                                   2    3               1       1
                                   1    3               2       1




                                        Figure 4:

is a subgame with a unique rationalizable strategy profile: 2 plays T and 3 plays R.
Anticipating this, player 1 must play E. Now consider the strategy profile (X,T,L), in
which player 1 plays X, 2 plays T, and 3 plays L, and assume that, at his information
set, player 3 assigns probability 1 to the event that 2 plays B. Players’ moves are all
sequentially rational, but player 3’s beliefs are not consistent with what the other players
play. Since our definition was valid only for the information sets that are on the path of
equilibrium, we could not preclude such beliefs. Now, we need to extend our definition

                                                4
of consistency to the information sets that are oﬀ the path of equilibrium. The diﬃculty
is that the information sets oﬀ the path of equilibrium are reached with probability 0
by definition.   Hence, we cannot apply Bayes’ formula to compute the beliefs.           To
check the consistency we might make the players “tremble” a little bit so that every
information sets is reached with positive probability. We can then apply Bayes rule to
compute the conditional probabilities for such a perturbed strategy profile. Consistency
requires that the players’ beliefs must be close to the probabilities that are derived using
Bayes’ rule for some such small tremble (as the size of the tremble goes to 0). In figure
4, for any small tremble (for player 1 and 2), the Bayes rule yields a probability close
to 1 for the event that player 2 plays T. In that case, consistency requires that player 3
assigns probability 1 to this event. Consistency is required both on and oﬀ the
equilibrium path.
   In the definition of sequential rationality above, the players’ beliefs about the nodes
of the information set are given but his beliefs about the other players’ play in the
continuation game are not specified.      In order to have an equilibrium, we also need
these beliefs to be specified consistently with the other players’ strategies.

Definition 4 A strategy profile is said to be sequentially rational iﬀ, at each in-
formation set, the player who is to move maximizes his expected utility given

  1. his beliefs at the information set, and

  2. given that the other players play according to the strategy profile in the continuation
      game (and given that he is at the information set).

Definition 5 A Perfect Bayesian Nash Equilibrium is a pair (s,b) of strategy profile
and a set of beliefs such that

  1. s is sequentially rational given beliefs b, and

  2. b is consistent with s.

   The only perfect Bayesian equilibrium in figure 4 is (E,T,R). This is the only subgame
perfect equilibrium. Note that every perfect Bayesian equilibrium is subgame perfect.



                                             5
3     Examples
Beer-Quiche Game Consider the game in figure 5.                          In this game, player one has
two types: weak or strong. Player 2 thinks that player 1 is strong with probability .9.
Player 2, who happens to be a bully, wants to fight with player 1 if player 1 is weak and
would like to avoid a fight if player 1 is strong. Player 1 is about to order his breakfast,
knowing that player 2 observes what player 1 orders. He prefers beer if he is strong,
and he prefers quiche if he is weak. He wants to avoid a fight.

                         0                                                    1
                         1      du                                            1
                                   el                                    el
                                        beer             quiche     du
                                                    {.1}            don
                         2        ’t                                              3
                         0     don                  tw
                                                                       ’t
                                                                                  0

                         1                                                    0
                         0                          ts
                                                                              0

                                                                      el
                               du




                                                                    du
                                  el




                                        beer {.9}        quiche
                      3            ’t                               don           2
                      1         don                                    ’t         1



                                               Figure 5:

    This game has two equilibria. (For each equilibrium there is a continuum of mixed
strategy equilibria oﬀ the path of equilibrium.) First, consider the perfect Bayesian Nash
equilibrium depicted in figure 6. We need to check two things: sequential rationality
and consistency.    Let us first check that the strategy profile is sequentially rational.
In his information set on the right, player 2 is sure that player 1 is weak, hence he
chooses to duel. When he sees that player 1 is having beer for his breakfast he assigns
probability .9 to the event that player 1 is strong.              Hence, his expected payoﬀs from
duel is .9 × 1 = .9, and his expected payoﬀ is .1 otherwise. Therefore, his moves are
sequentially rational.       Now consider the strong type of player 1.                If he chooses beer,
then he gets 3, and if he chooses quiche, then he gets 0. He chooses beer. Now consider
the weak type. If he chooses beer, he gets 2, while he gets only 1 if he chooses quiche.
He chooses beer. Therefore, player 1’s moves are sequentially rational.

                                                    6
                         0                                                           1
                         1    du                                                     1
                                el                                          el
                                        beer              quiche       du

                                       .1            {.1}          1 d
                        2       ’t                                    on’                3
                        0    don                     tw                   t
                                                                                         0

                         1                                                           0
                         0                           ts
                                                                                     0




                                                                        el
                             du




                                                                       du
                               el
                                      .9 beer {.9}        quiche   0

                        3        ’t                                    don               2
                        1     don                                         ’      t       1



                                               Figure 6:

   Let’s now check the consistency. The information set after the beer is on the path
of equilibrium; hence we need to use the Bayes’ rule. The probabilities .9 and .1 are
indeed computed through Bayes’ rule. The information set after the quiche is oﬀ the
equilibrium path. In this game, any belief oﬀ the equilibrium path is consistent. For
the present belief, which puts probability 1 to the weak type, consider a perturbation in
which player 1 trembles and orders quiche with probability ε if he is weak, and he does
not tremble if his strong. Now Bayes’ rule yields ε/ε = 1 as the conditional probability
of being weak given quiche. Therefore, the players beliefs are consistent, and we have a
perfect Bayesian Nash equilibrium.
   Note that we have a continuum of equilibria in which player 1 orders beer. After
the quiche, player 2 assigns equal probabilities to each node and mixes between duel
and not duel, where the probability of duel is at least .5.                          Check also that there is a
perfect Bayesian Nash equilibrium in which player 1 orders quiche independent of this
type, and player 2 fights when he observes a beer.

Another example Consider the game in figure 7. sequential rationality requires that
at the last note in the upper branch player 1 goes down, and at the last node of the
lower branch player 1 goes across. Moreover, it requires that player 1 goes across at the
first node of the lower branch. Therefore, player 1 must go across throughout the lower
branch and go down at the last node of the upper branch at any perfect Bayesian Nash
equilibrium. We now show that, in any perfect Bayesian Nash equilibrium, the players


                                                     7
                                     1               2               1
                                                                                     (1,-5)
                        .9



                                   (4,4)            (5,2)           (3,3)
                             .1
                                             1           2                    1
                                                                                          (0,-5)




                                           (-1,4)           (0,2)           (-1,3)




                                                      Figure 7:

must play mixed strategies at the remaining information sets (i.e., at the first node of
the upper branch, and at the information set of player 2). Suppose that player 1 goes
down with probability 1 at the first node on the upper branch. Then, by Bayes’ rule,
player 2 must assign probability 1 to the lower branch at his information set and must
go down with probability 1. In that case, it is better for player 1 to go across and get
5, rather than going down and getting 4 –a contradiction. Therefore, player 1 must
go across with positive probability at the first node of a upper branch. Now, suppose
that player 1 goes across with probability 1 at this node. Then by Bayes’ rule, player 2
must assign probability .9 to the upper branch in his information set. If he goes down,
he gets 2; if he goes across, he gets .9 × 3 + .1 × (−5) = 2.2. Then, he must go across
with probability 1. In that case, player 1 must go down with probability 1 at the node
at hand–another contradiction. Therefore, player 1 must mix at the present node. In
order to have this, player 1 must be indiﬀerent between going across and going down.
Let’s write β for the probability that 2 goes across. For indiﬀerence, we must have

                                   4 = 5 (1 − β) + 3β = 5 − 2β,

i.e.,
                                                         β = 1/2.
 Player 2 must also play a mixed strategy. Since player 2 plays a mixed strategy, he
must be indiﬀerent. Let’s write µ for the probability he assigns to the upper branch at
his information set. For indiﬀerence, we must have

                                  2 = 3µ + (1 − µ) (−5) = 8µ − 5,

                                                                8
i.e.,
                                                     µ = 7/8.

If player 1 goes across with probability α, then by Bayes’ rule, we must have
                                                       .9α     7
                                                µ=            = ,
                                                     .9α + .1  8
hence
                                                     α = 7/9.

Therefore, there is a unique perfect Bayesian Nash equilibrium as depicted in figure 8.

                                 1 α=7/9         2        β=1/2    1
                                                                                   (1,-5)
                     .9                              µ=7/8



                               (4,4)            (5,2)             (3,3)
                          .1
                                         1           2                     1
                                                                                        (0,-5)




                                       (-1,4)            (0,2)            (-1,3)




                                                     Figure 8:




4       Sequential bargaining

4.1     A one-period model with two types
We have a seller S with valuation 0 and a buyer B with valuation v. B knows v, S does
not; S believes that v = 2 with probability π, and v = 1 with probability 1 − π. We
have the following moves. First, S sets a price p ≥ 0. Knowing p, B either buys, yielding
(p, v − p) (where the first entry is the payoﬀ of the seller), or does not, yielding (0,0).
The game is depicted in Figure 9.



                                                             9
                                              H                L
                                         S


                                         p                         p

                                                                           N
                                Y              N         Y

                              p               0         p                  0
                              2 -p            0         1 -p               0



                                             Figure 9:
                                     US(p)



                                     1



                                                                       p
                                                   1           2




                                             Figure 10:

   The perfect Bayesian Nash equilibrium is as follows. B buys iﬀ v ≥ p. If p ≤ 1, both
types buy, and S gets p. If 1 < p ≤ 2, only H-type buys, and S gets πp. If p > 2, no
one buys. The expected payoﬀ of S is plotted in Figure 10. S oﬀers 1 if π < 12 , and he
oﬀers 2 if π > 12 . He is indiﬀerent between the prices 1 and 2 when π = 1/2.


4.2    A two-period model with two types
Consider the same buyer and the seller, but allow them to trade at two dates t = 0, 1.
The moves are as follows. At t = 0, S sets a price p0 ≥ 0. B either buys, yielding
(p0 , v − p0 ), or does not. If he does not buy, then at t = 1, S sets another price p1 ≥ 0;
B either buys, yielding (δp1 , δ(v − p1 )), or does not, yielding (0,0).
   The equilibrium behavior at t = 1 is the same as above. Let’s write

                              µ = Pr(v = 2|history at t = 1).

                                                   10
B buys iﬀ v ≥ p1 . If µ > 12 , p1 = 2; if µ < 12 , p1 = 1. If µ = 12 , S is indiﬀerent between 1
and 2.
    Given this, B with v = 1 buys at t = 0 if p0 ≤ 1. Hence, by Bayes’ rule, if p0 > 1,

                                µ = Pr(v = 2|p0 , t = 1) ≤ π.

When π < 1/2, this determines the equilibrium. This is because

                            µ = Pr(v = 2|p0 , t = 1) ≤ π < 1/2,

and thus
                                             p1 = 1.

Hence, B with v = 2 buys at t = 0 if

                                  (2 − p0 ) ≥ δ(2 − 1) = δ.

This is true iﬀ
                                           p0 ≤ 2 − δ.

Now S has two options: either set p0 = 1 and sell the good with probability 1, yielding
payoﬀ 1, or set p0 = 2−δ, and sell to the high-value buyer at t = 0 and sell the low-value
buyer at t = 1. The former is better, and thus p0 = 1:

                  π (2 − δ) + (1 − π) δ = 2π (1 − δ) + δ < (1 − δ) + δ = 1.

    Consider the case π > 1/2. In that case, after any price p0 ∈ (2 − δ, 2), the players
must mix (see the slides). At any p0 > 2 − δ, since B mixes at t = 1, we must have

                            µ (p0 ) = Pr(v = 2|p0 , t = 1) = 1/2.

Write β (p0 ) for the probability that high-value buyer does not buy at price p0 . Then,
by Bayes’ rule,
                                                β (p0 ) π      1
                              µ (p0 ) =                       = ,
                                          β (p0 ) π + (1 − π)  2
i.e.,
                                     β (p0 ) = (1 − π) /π.



                                               11
Since the buyer with v = 2 mixes (i.e., β (p0 ) ∈ (0, 1)), he must be indiﬀerent towards
buying at p0 . That is, writing γ(p0 ) = Pr(p1 = 1|p0 ), we have

                                          2 − p0 = δγ(p0 )

i.e.,
                                       γ(p0 ) = (2 − p0 ) /δ.


4.3     A one-period model with continuum of types
Modify the one-period model above by letting v be distributed uniformly on some interval
[0, a]. In equilibrium, again B buys at price p iﬀ v ≥ p. S gets

                             U(p) = p Pr(v ≥ p) = p(a − p)/a.

Therefore, S sets
                                              p = a/2.


4.4     A two-period model with continuum of types
Modify the two-period model above by letting v be distributed uniformly on [0, 1]. B
buys at p0 iﬀ
                                    v − p0 ≥ δ (v − E [p1 |p0 ]) ,                   (1)

where E [p1 |p0 ] is the expected value of p1 given p0 . This inequality holds iﬀ
                                        p0 − E [p1 |p0 ]
                                v≥                       ≡ a (p0 ) .
                                            1−δ
Hence, if B does not buy at price p0 , S’s posterior belief will be that v is uniformly
distributed on [0, a (p0 )], in which case he will set the price at t = 1 to

                                        p1 (p0 ) = a (p0 ) /2

as shown above. Substituting this into the previous definition we obtain
                                     p0 − δE [p1 |p0 ] p0 − δa (p0 ) /2
                        a (p0 ) =                     =                 ,
                                         1−δ               1−δ
i.e.,
                                                        p0
                                         a (p0 ) =           .
                                                     1 − δ/2

                                                 12
(One could obtain this, simply by observing that (1) is an equality when v = a (p0 ) and
E [p1 |p0 ] = a (p0 ) /2.) Notice that, if S oﬀers p0 , in equilibrium, he sells to the types
v ≥ a (p0 ) at price p0 (at date t = 0), to the types with a (p0 ) /2 ≤ v ≤ a (p0 ) at
p1 = a (p0 ) /2 at date 1, and does not sell to the types v < a (p0 ) /2 at all. His expected
payoﬀ is

                US (p0 ) = Pr (v > a (p0 )) p0 + δ Pr (p1 ≤ v < a (p0 )) p1
                          = (1 − a (p0 )) p0 + δ (a (p0 ) /2) (a (p0 ) /2)
                            µ               ¶         µ        ¶2
                                     p0                    p0
                          =   1−              p0 + δ               .
                                  1 − δ/2                2−δ

The first order condition yields
                                                  2p0     2δp0
                          0 = US0 (p0 ) = 1 −          +         ,
                                                1 − δ/2 (2 − δ)2

i.e.,
                                           (1 − δ/2)2
                                     p0 =              .
                                          2 (1 − 3δ/4)




                                                13
                14.12 Game Theory Lecture Notes
                       Reputation and Signaling
                                   Muhamet Yildiz


    In these notes, we discuss the issues of reputation from an incomplete information
point of view, using the centipede game. We also introduce the signaling games and
illustrate the separating, pooling, and partial-pooling equilibria.


1     Reputation
Consider a game in which a player i has two types, say A and B. Imagine that if the
other players believe that i is of type A, then i’s equilibrium payoﬀ will be much higher
than his equilibrium payoﬀ when the other players believe that he is of type B. If there’s
a long future in the game and i is patient, then he will act as if he is of type A even
when his type is B, in order to convince the other players that he is of type A. In
other words, he will try to form a reputation for being of type A. This will change
the equilibrium behavior dramatically when the other players assign positive probability
to each type.   For example, if a seller thinks that the buyer does not value the good
that much, then he will be willing to sell the good at a low price. Then, even if the
buyer values the good highly, he will pretend that he does not value the good that much
and will not buy the object at higher prices–although he could have bought at those
prices if it were common knowledge that he values the object highly.       (If the players
are suﬃciently patient, then in equilibrium the price will be very low.) Likewise, in the
entry deterrence game, if it is possible that the incumbent gains from a fight in case of
an entry, if this is the incumbent’s private information, and if there is a long future in
the game, then he will fight whenever the entrant enters, in order to form a reputation
for being a fighter and deter the future entries. In that case, the entrants will avoid


                                             1
entering even if they are confident that the incumbent is not a fighter.      We will now
illustrate this notion of reputation formation on the centipede game.
     Consider the centipede game in figure 1. In this game, a player prefers to exit (or

         1         2        1            1         2      1       2            100
                                                                               100
                                 …

          1        0        2           98         97     99     98
          1        3        2           98         100    99     101


                                         Figure 1:

to go down) if he believes that the other player will exit at the next node. Moreover,
player 2 prefers exiting at the last node.       Therefore, the unique backward induction
outcome in this game is that each player goes down at each node. In particular, player
1 goes down at the first node and the game ends. This outcome is considered to be very
counterintuitive, as the players forego very high payoﬀs. We will see that it is not robust
to asymmetric information, in the sense that the outcome would change dramatically if
there were a slight probability that a player is of a certain “irrational” type. In figure
2, we consider such a case.     Here, player 2 assigns probability .999 to the event that
player 1 is a regular rational type, but she also assigns probability .001 to the event that
player 1 is a “nice” irrational type who would not want to exit the game. We index
the nodes by n starting from the end. Sequential rationality requires that player 1 goes
across at each information set on the lower branch. Moreover at the last information
set (n = 1), player 2 goes down with probability 1. These facts are indicated in figure
3.    We will now prove further facts. We need some notation. Let’s write µn for the
probability player 2 assigns to the lower branch at information set n. Moreover, let pn
be the probability that player 1 goes down at node n if he is rational.

Facts about the perfect Bayesian Nash equilibrium

     1. For any n > 1, player 2 goes across with positive probability. Suppose that player

                                             2
          197                      5            4             3          2             1           =n
1          2                       2            1              2         1             2                 100
                                                                                                         100
                         …

1          0                       96           98            97         99         98
1          3                       99           98            100        99         101

    1                                                 1                        1                               0
                                                                                                               100
                               …

    -1               0                     0          -1               0      -1             0
    1                3                     99         98               100    99             101



                                                Figure 2:




                         197              5          4            3      2         1         =n
        {.999}
            1            2                2          1             2     1         2               100
                                                                                                   100
                p198                                  p4
                                   …

            1            0                96         98        97        99        98
            1            3                99         98        100       99        101

                 1                 µ197              µ5 1               µ3    1             µ1           0
        {.001}                                                                                           100
                                       …

                  -1           0                0         -1           0      -1           0
                  1            3                99        98           100    99           101



                                                Figure 3:



                                                          3
     2 goes down with probability 1 at n > 1. Then, if rational, player 1 must go down
     with probability 1 at n + 1. Hence, we must have µn = 1. That is, player 2 is
     sure that player 1 is irrational and will go across until the end. She must then go
     across with probability 1 at n.

  2. Every information set of player 2 is reached. (This is because irrational player 1
     and player 2 go across with positive probability.) Hence, the beliefs are determined
     by the Bayes’ rule.

  3. For any n > 2, rational player 1 goes across with positive probability. Suppose
     that rational player 1 goes down with probability 1 at n > 2. Then, µn−1 = 1,
     and thus player 2 must go across with probability 1 at n−1. Then, rational player
     1 must go across at n with probability 1.

  4. If player 2 strictly prefers to go across at n, then

      (a) 1 goes across with probability 1 at n+1,
      (b) 2 must strictly prefer to go across at n+2,
      (c) 2’s posterior at n is her prior.

     Parts a and b must be clear by now. Inductive application of parts a and b imply
     that players go across with probability 1 until n. Then, c follows from the Bayes’
     rule.

  5. If rational player 1 goes across with probability 1 at n, then 2’s posterior at n − 1
     is her prior. (This follows from 4.c.)

  6. There exists n∗ such that each player go across with probability 1 before n∗ (i.e.,
     when n > n∗ ), and rational player 1 and player 2 mix after n∗ (i.e., when n < n∗ ).
     (This fallows from 1,3, and 4.)

   We will now compute the equilibrium. Firstly, note that player 2 mixes at n = 3
(i.e., n∗ > 3). [Otherwise, we would have µ3 = .001 by 4.c, when player 2 would go down
with probability 1 at n = 3, contradicting Fact 1.] That is, she is indiﬀerent between
going across and going down at n = 3. Hence,

                           100 = 101µ3 + 99 (1 − µ3 ) = 99 + 2µ3 ,

                                              4
i.e.,
                                         µ3 = 1/2.

    Now consider any odd n with 3 < n < n∗ ; player 2 moves at n. Write x for the payoﬀ
of player 2 at n (if she goes down). Since player 2 is indiﬀerent being going across and
going down, we have

               x = µn (x + 1) + (1 − µn )[(x − 1)pn−1 + (1 − pn−1 )(x + 1)].

The left hand side of this equation is the payoﬀ if she goes down. Let us look at the
right hand side. If she goes across, with probability µn , player 1 is irrational and will
go across at n − 1 with probability 1, reaching the information set at n − 2.       Since
player 2 is indiﬀerent between going down and going across at the information set n − 2,
the expected payoﬀ from reaching this information set for player 2 is x + 1. This gives
the first term. With probability 1 − µn , he is rational and will go down at n − 1 with
probability pn−1 , yielding payoﬀ x − 1 for player 2, and will go across with probability
1 − pn−1 , reaching the information set at n − 2, which yields x + 1 for player 2. This
gives the second term. After some algebraic manipulations, this equation simplifies to

                                    (1 − µn )pn−1 = 1/2.                              (1)

 But, by the Bayes’ rule, we have
                                  µn
              µn−2 =
                        µn + (1 − µn ) (1 − pn−1 )
                                    µn                        µn
                      =                              =
                        µn + 1 − µn − (1 − µn ) pn−1   1 − (1 − µn ) pn−1
                      = 2µn ,                                                         (2)

    where the last equality is due to (1). Therefore,
                                               µn−2
                                        µn =        .
                                                2




                                               5
By applying the last equality iteratively, we obtain

                             µ3 = 1/2
                             µ5 = µ3 /2 = 1/4
                             µ7 = µ5 /2 = 1/8
                             µ9 = µ7 /2 = 1/16
                            µ11 = µ9 /2 = 1/32
                            µ13 = µ11 /2 = 1/64
                            µ15 = µ13 /2 = 1/128
                            µ17 = µ15 /2 = 1/256
                            µ19 = µ17 /2 = 1/512
                            µ21 = µ19 /2 = 1/1024 < .001.

Therefore, n∗ = 20. At any even n < n∗ , player 1 goes across with probability
                                                  1
                                     pn =                 ,
                                             2(1 − µn+1 )

and at n − 1 player 2 mixes so that player 1 is indiﬀerent between going across and going
down. If we write qn−1 for the probability that 2 goes down at n − 1 and y for the payoﬀ
of rational 1 at n, then we have

                 y = qn−1 (y − 1) + (1 − qn−1 ) (y + 1) = y + 1 − 2qn−1 ,

i.e.,
                                           qn−1 = 1/2.

At n∗ + 1 = 21, µn∗ +1 = .001, and at n∗ − 1 = 19, µn∗ −1 = 1/512. Hence, by Bayes’ rule,
                                           µ ∗               .001
                 1/512 = µn∗ −1 =       ¡ n +1 ¢        =             ,
                                     1 − 1 − µn∗ +1 pn∗   1 − .999pn∗

yielding
                                       1 − .512 ∼
                                   pn∗ =        = .488.
                                         .999
At any n > n∗ , each player goes across with probability 1.



                                                6
2     Signaling Games
In a signaling game, there are two players: Sender (denoted by S) and Receiver (denoted
by R). First, Nature selects a type ti from a type space T = {t1 , . . . , tI } with probability
p(ti ). Sender observes ti , and then chooses a message mj from a message space M =
{m1 , . . . , mJ } to be sent to the receiver. Receiver observes mj (but not ti ), and then
chooses an action ak from an action space A = {a1 , . . . , aK }. The payoﬀs for the Sender
and the Receiver are US (ti , mj , ak ) and UR (ti , mj , ak ), respectively. A good example for
a signaling game is the Beer-Quiche game (depicted in figure 4).

                           0                                                     1
                           1    du                                               1
                                  el                                    el
                                           beer             quiche   du
                                                       {.1}          don
                           2      ’t                                                 3
                           0   don                     tw
                                                                        ’    t
                                                                                     0

                           1                                                     0
                           0                           ts
                                                                                 0
                                                                       el
                               du




                                                                     du
                                  el




                                           beer {.9}        quiche
                          3        ’   t                             don             2
                          1     don                                     ’t           1



                                                  Figure 4:

    In this game, Sender is player 1; Receiver is player 2. Type space is T = {ts , tw },
messages are beer and quiche (i.e., M = {beer, quiche}), and the actions are “duel”
and “don’t”. In this game there were two equilibrium outcomes; either both types have
beer, or both types have quiche. (The former equilibrium is depicted in figure 5.)
Such equilibria are called pooling equilibrium, because the types are all send the same
message, and thus no information is conveyed to the receiver; the receiver’s posterior
beliefs on the path of equilibrium is the same as his priors. Formally,

Definition 1 A pooling equilibrium is an equilibrium in which all types of sender send
the same message.

    Another type of perfect Bayesian Nash equilibrium is separating equilibrium:



                                                       7
                          0                                                           1
                          1    du                                                     1
                                 el                                          el
                                         beer              quiche       du

                                        .1            {.1}          1 d
                          2      ’t                                    on’                3
                          0   don                     tw                   t
                                                                                          0

                          1                                                           0
                          0                           ts
                                                                                      0




                                                                         el
                              du




                                                                        du
                                el
                                       .9 beer {.9}        quiche   0

                          3       ’t                                    don               2
                          1    don                                         ’      t       1



                                                Figure 5:

Definition 2 A separating equilibrium is an equilibrium in which all types of sender
send diﬀerent messages.

     Since each type sends a diﬀerent message on the path of a separating equilibrium
receiver learns the sender’s type (the truth). Such an equilibrium is depicted in Figure
6.   Notice that player 2 assigns probability 1 to the strong type after beer and to the
weak type after quiche.
     Most equilibria in many games will be partially pooling and partially separating:

Definition 3 A partially separating/pooling equilibrium is an equilibrium in which some
types of sender send the same message, while some others sends some other messages.

     Such an equilibrium is depicted in figure 7 for a beer-quiche game in which player 1
is very likely to be weak. In this equilibrium, strong player 1 orders beer, while the weak
type mixes between beer and quiche so that after beer, player 2 finds the types equally
likely, making him indiﬀerent between the duel and not duel. After beer, player 2 mixes
between duel and not duel with equal probabilities so that the weak type of player 1
is indiﬀerent between beer and quiche, allowing him to mix. Note that the beliefs are
derived via the Bayes’ rule. Note also that, after quiche, player 2 knows that player 1 is
weak, while he is not sure about player 1’s type after beer – although he updates his
belief and find player 1 more likely to be strong.



                                                      8
          0                                                                       1
          1          du                                                           1
                          el                                            el
                                   beer                quiche        du
                               0                  {.1}          1 don
        0.5            ’t                                                             3
        0           don                           tw
                                                                     ’t
                                                                                      0

          1                                                                       0
          0                                       ts
                                                                                  0




                                                                       el
                   du




                                                                     du
                      el
                               1 beer {.9}             quiche    0
         3              ’t                                           don              2
         1           don                                                ’t            1



                                          Figure 6:




    0                                                                                     1
    1          du                                                                         1
                                                                           el
             .5 el              beer                    quiche           du
    p =.5 ’t .5 q=1/9                          {.9} 8/9              1 do                     3
2                                                                        n’t
0        don                                      tw                                          0

    1                                                                                 0
    0                                             ts
                                                                                      0
                                                                             el
              du




                                                                         du
                el




              .5           .5 beer {.1}                quiche        0
    3         .5                                                         don              2
                      ’t
    1              don                                                      ’t            1


                                          Figure 7:




                                              9
               14.12 Game Theory Lecture Notes
                                    Lecture 20
                                   Muhamet Yildiz


1     Adverse Selection
In strategic interactions, a party often knows something that is relevant to the problem
but is not known by some other party. In that case, we say that players have asymmetric
information. When you are interacting with parties that have private information, if you
don’t take the necessary precautions, you will likely to end up in a situation that you
wouldn’t want to be in. This is because the other party will act in his self interest given
his information, which will not necessarily be in your interest. This is called adverse
selection. For example, the used car that you buy at a low price is likely to be a lemon
with many defects, as the owner wouldn’t want to sell at such a low price if it were a good
car. The candidate who accepted your low wage oﬀer was probably desperately looking
for a job and would have accepted even a lower wage. What is worse, he is desperate
because he is often fired for misbehavior. The nice looking guy that you have met the
other day is likely to be a lousy boyfriend whose relationships do not last long. Why else
is he still single? What if he is not single? These kinds of concerns usually make people
cautious and prevent trade or other joint decisions that would have been beneficial for
all parties and would have been realized if there were no asymmetric information. In
this lecture I present examples of adverse selection and illustrate how we compute an
equilibrium.


1.1    Bargaining
Consider a seller, who owns an object, and a buyer. The value of object is c ∈ [0, 1] for
the seller and v ∈ [0, 1] for the buyer. Seller sets a price p, and buyer decides whether to

                                             1
buy it. Seller knows c. Let’s first assume that the buyer does not know v; he thinks that
v is uniformly distributed on [0, 1]. Clearly, buyer will by the object iﬀ p ≤ 1/2. The
seller will set p = 1/2 if c ≤ 1/2, and will set a high price if c is higher. Trade is realized
if c ≤ 1/2, i.e., if it is eﬃcient given what players know. Now, consider the case that
buyer knows v, and seller thinks that v is uniformly distributed on [0, 1]. Now, buyer
will buy the object if v ≥ p. Hence the seller’s expected payoﬀ is
                                 Z 1
                         U (p) =     (p − c) dv = (p − c) (1 − p) .
                                    p

Hence, he will set price
                                           c+1
                                         p=     .
                                             2
Notice that, when 0 < c ≤ 1/2, the seller sets a higher price. Moreover, when c < v <
(c + 1) /2, they do not trade although the trade would have been mutually beneficial (if
they traded at price (v + c) /2).


1.2     Buying a car
Imagine that you found a job in a suburb, and you need to commute everyday. You
want to buy a car. You can buy a car from a private party. Since you need to commute
everyday, you think that the value of car for you is higher than the owner. If the value
of the car is v for the owner, its value is v + b for you. Here, v is determined by the
condition of the car and the maintenance of the car so far. Assume that v is uniformly
distributed on [0, 1]. You don’t know v, but you know that the owner knows v. How
much are you willing to pay? If the owner didn’t know v, you would be willing to pay
b + 1/2 for the car. (Why?) But the owner knows v. He will sell his car at price p only
if p ≥ v. Hence, if you buy the car at p, then you know that v ≤ p. The value of the
car for you is then b + p/2. (why?) Therefore, you are willing to pay p iﬀ

                                        p ≤ b + p/2,

i.e.,
                                           p ≤ 2b.

If b < 1/2, you are willing to pay less when you realize that the seller knows v.


                                              2
     How much should you oﬀer, if you were able to make a take it or leave it oﬀer? Your
expected payoﬀ from oﬀering a price p is
                               Z p
                      U (p) =      (b + v − p) dv = bp − p2 /2,
                                   0

which is maximized at
                                            p = b.


1.3     Market for Lemons
Consider a used-car market. There are n + m cars. n of the cars are lemon and require
high maintenance. The remaining m cars are peach, i.e., they are great cars that do not
require high maintenance. A peach is worth $2500 to seller, $3000 to buyer; a lemon is
worth $1000 to seller, $2000 to buyer. Each seller knows whether his car is a peach or
lemon; buyers cannot tell. There are more buyers than cars. We want to compute the
market-clearing price. A market-clearing price is a price at which demand and supply
curves intersect each other. The supply function is clear. Given any price p, the supply
is                     ⎧
                       ⎪
                       ⎪ 0                                 if p < 1000
                       ⎪
                       ⎪
                       ⎪
                       ⎪
                       ⎪
                       ⎨ k ≤ n lemons, 0 peaches           if p = 1000
               S (p) =   n lemons, 0 peaches               if 1000 < p < 2500
                       ⎪
                       ⎪
                       ⎪
                       ⎪ n lemons, k ≤ m peaches           if p = 2500
                       ⎪
                       ⎪
                       ⎪
                       ⎩ n lemons, m peaches               if p > 2500.
The supply curve is plotted in Figure 1. When a buyer decides to buy a car at this price,
he must take into account which cars are sold in the market. Consider first p > 2500.
At this price, all the cars are in the market. Hence, the probability that a car is peach
is
                                             m
                                         π=     .
                                           n+m
The expected value of a car for a buyer is then

                          3000π + (1 − π) 2000 = 1000 (π + 2) .

A buyer wants to buy a car iﬀ
                                       1000 (π + 2) ≥ p.                              (1)


                                              3
              P                                               Supply



            2500

            2000


            1000
                                                                      Demand



                                          n               m       b      Q


                                        Figure 1:

First consider the case that π < 1/2, or equivalently m < n. That is, there are fewer
peaches on the market. In that case, the left-hand side of (1) is less than 2500. Since
the right-hand side is greater than 2500, the inequality is never satisfied. Therefore, for
any price p > 2500, the demand is zero. Similarly, demand remain zero at p = 2500, as
the probability of peach does not increase as we decrease the price to 2500. At any price
p ∈ [1000, 2500), all the cars in the market are lemon, so that the probability of peach
is π = 0, and therefore the expected value of a car for a buyer is 2000. Hence, a buyer
wants to buy a car if p ≤ 2000. The demand function is given by
                                   ⎧
                                   ⎪
                                   ⎪
                                   ⎨ 0       if p > 2000
                           D (p) =    k ≤ b if p = 2000
                                   ⎪
                                   ⎪
                                   ⎩ b       if p < 2000.
The market-clearing price is then
                                        p∗ = 2000,
as it is plotted in Figure 1. That is, in competitive equilibrium, only the lemons are
traded, and peaches are driven out of market.
   Now consider the case n < m, i.e., the case that there are more peaches than lemons.
In that case, if p > 2500, the probability that a car in the market is a peach is π =

                                              4
m/ (n + m) > 1/2. Hence, by (1), a buyer wants to buy a car if

                                  p ≤ p̄ = 1000 (π + 2) ,

where p̄ > 2500. At p = 2500, π depends on the ratio of the peaches that are on the
market; recall that a peach owner is indiﬀerent towards selling his car at this price.
The demand at this price depend on π ∈ [0, m/ (n + m)]. When we choose π = 1/2,
the demand at p = 2500 can be any number that is less than b. When p < 2000, the
demand is as in the previous case. Hence the demand function is given by
                                ⎧
                                ⎪
                                ⎪  0      if p > p̄
                                ⎪
                                ⎪
                                ⎪
                                ⎪  k ≤ b if p = p̄
                                ⎪
                                ⎪
                                ⎪
                                ⎪
                                ⎪
                                ⎪         if 2500 < p < p̄
                                ⎨ b
                       D (p) =     k ≤ b if p = 2500
                                ⎪
                                ⎪
                                ⎪
                                ⎪  0      if 2000 < p < 2500
                                ⎪
                                ⎪
                                ⎪
                                ⎪
                                ⎪
                                ⎪  k ≤ b if p = 2000
                                ⎪
                                ⎪
                                ⎩
                                   b      if p < 2000.

This demand function is plotted in Figure 2. Clearly, the demand and supply curves
intersect each other at three prices: 2000, 2500, and p̄. As in the previous case, at price
p = 2000, we have only lemons in the market. At price p = 2500, all the lemons are sold
in the market; only n out of m peaches are in the market so that π = 1/2, and n + m
buyers want to buy a car. Recall that at this price (and given π = 1/2), the buyers are
indiﬀerent. At price p̄, all the cars are supplied in the market, and only n + m buyers
want to buy a car. The buyers are again indiﬀerent between buying and not buying a
car.




                                            5
 P                     Supply
  p

2500

2000


1000
                              Demand



         n         m      b     Q


       Figure 2:




             6



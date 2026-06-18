---
normalized_id: shared-pdf-reference-game-theory-instructor-lctn-yuval-peres
exam_code: SHARED
material_scope: game theory instructor lctn - yuval peres.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Game Theory Instructor Lctn - Yuval Peres.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-game-theory-instructor-lctn-yuval-peres

  Stat 155, Yuval Peres                                                         Fall 2004

                                         Game theory




Contents
1 Introduction                                                             2

2 Combinatorial games                                                       7
  2.1 Some definitions . . . . . . . . . . . . . . . . . . . . . . . . .    7
  2.2 The game of nim, and Bouton’s solution . . . . . . . . . . . .       10
  2.3 The sum of combinatorial games . . . . . . . . . . . . . . . .       14
  2.4 Staircase nim and other examples . . . . . . . . . . . . . . . .     18
  2.5 The game of Green Hackenbush . . . . . . . . . . . . . . . . .       20
  2.6 Wythoff’s nim . . . . . . . . . . . . . . . . . . . . . . . . . .    21

3 Two-person zero-sum games                                             23
  3.1 Some examples . . . . . . . . . . . . . . . . . . . . . . . . . . 23
  3.2 The technique of domination . . . . . . . . . . . . . . . . . . 25
  3.3 The use of symmetry . . . . . . . . . . . . . . . . . . . . . . . 27
  3.4 von Neumann’s minimax theorem . . . . . . . . . . . . . . . . 28
  3.5 Resistor networks and troll games . . . . . . . . . . . . . . . . 31
  3.6 Hide-and-seek games . . . . . . . . . . . . . . . . . . . . . . . 33
  3.7 General hide-and-seek games . . . . . . . . . . . . . . . . . . 34
  3.8 The bomber and submarine game . . . . . . . . . . . . . . . . 37
  3.9 A further example . . . . . . . . . . . . . . . . . . . . . . . . 38

4 General sum games                                                       39
  4.1 Some examples . . . . . . . . . . . . . . . . . . . . . . . . . . 39
  4.2 Nash equilibrium . . . . . . . . . . . . . . . . . . . . . . . . . 40
  4.3 General sum games with k ≥ 2 players . . . . . . . . . . . . . 44
  4.4 The proof of Nash’s theorem . . . . . . . . . . . . . . . . . . 45
      4.4.1 Some more fixed point theorems . . . . . . . . . . . . 47
      4.4.2 Sperner’s lemma . . . . . . . . . . . . . . . . . . . . . 49
      4.4.3 Proof of Brouwer’s fixed point theorem . . . . . . . . 51
  4.5 Some further examples . . . . . . . . . . . . . . . . . . . . . . 51
  4.6 Potential games . . . . . . . . . . . . . . . . . . . . . . . . . . 52




                                     1
Game theory                                                                 2


5 Coalitions and Shapley value                                          55
  5.1 The Shapley value and the glove market . . . . . . . . . . . . 55
  5.2 Probabilistic interpretation of Shapley value . . . . . . . . . . 57
  5.3 Two more examples . . . . . . . . . . . . . . . . . . . . . . . 59

6 Mechanism design                                                         61


1    Introduction
In this course on game theory, we will be studying a range of mathematical
models of conflict and cooperation between two or more agents. The course
will attempt an overview of a broad range of models that are studied in
game theory, and that have found application in, for example, economics
and evolutionary biology. In this Introduction, we outline the content of
this course, often giving examples.
     One class of games that we begin studying are combinatorial games.
An example of a combinatorial game is that of hex, which is played on an
hexagonal grid shaped as a rhombus: think of a large rhombus-shaped region
that is tiled by a grid of small hexagons. Two players, R and G, alternately
color in hexagons of their choice either red or green, the red player aiming
to produce a red crossing from left to right in the rhombus and the green
player aiming to form a green one from top to bottom. As we will see, the
first player has a winning strategy; however, finding this strategy remains
an unsolved problem, except when the size of the board is small (9 × 9, at
most). An interesting variant of the game is that in which, instead of taking
turns to play, a coin is tossed at each turn, so that each player plays the
next turn with probability one half. In this variant, the optimal strategy for
either player is known.
     A second example which is simpler to analyse is the game of nim. There
are two players, and several piles of sticks at the start of the game. The
players take turns, and at each turn, must remove at least one stick from
one pile. The player can remove any number of sticks that he pleases, but
these must be drawn from a single pile. The aim of the game is to force
the opponent to take the last stick remaining in the game. We will find the
solution to nim: it is not one of the harder examples.
     Another class of games are congestion games. Imagine two drivers, I
and II, who aim to travel from cities B to D, and from A to C, respectively:
Game theory                                                                   3


          A            (1,2)                 D


           (3,5)                        (2,4)

                       (3,4)
          B                                  C

    The costs incurred to the drivers depend on whether they travel the
roads alone or together with the other driver (not necessarily at the very
same time). The vectors (a, b) attached to each road mean that the cost
paid by either driver for the use of the road is a if he travels the road alone,
and b if he shares its use with the other driver. For example, if I and II
use the road AB — which means that I chooses the route via A and II
chooses that via B — then each pays 5 units for doing so, whereas if only
one of them uses that road, the cost is 3 units to that driver. We write a
cost matrix to describe the game:
                                   II    B         D
                               I
                               A         (6,8)     (5,4)
                               C         (6,7)     (7,5)
    The vector notation (·, ·) denotes the costs to players I and II of their
joint choice.
    A fourth example is that of penalty kicks, in which there are two
participants, the penalty-taker and the goalkeeper. The notion of left and
right will be from the perspective of the goalkeeper, not the penalty-taker.
The penalty-taker chooses to hit the ball either to the left or the right, and
the goalkeeper dives in one of these directions. We display the probabilities
that the penalty is scored in the following table:

                                 GK          L     R
                               PT
                               L             0.8   1
                               R             1     0.5

    That is, if the goalie makes the wrong choice, he has no chance of saving
the goal. The penalty-taker has a strong ‘left’ foot, and has a better chance
if he plays left. The goalkeeper aims to minimize the probability of the
penalty being scored, and the penalty-taker aims to maximize it. We could
write a payoff matrix for the game, as we did in the previous example, but,
since it is zero-sum, with the interests of the players being diametrically
opposed, doing so is redundant. We will determine the optimal strategy for
the players for a class of games that include this one. This strategy will
often turn out to be a randomized choice among the available options.
Game theory                                                                 4


     Such two person zero-sum games have been applied in a lot of con-
texts: in sports, like this example, in military contexts, in economic appli-
cations, and in evolutionary biology. These games have a quite complete
theory, so that it has been tempting to try to apply them. However, real
life is often more complicated, with the possibility of cooperation between
players to realize a mutual advantage. The theory of games that model such
an effect is much less complete.
     The mathematics associated to zero-sum games is that of convex geom-
etry. A convex set is one where, for any two points in the set, the straight
line segment connecting the two points is itself contained in the set.
     The relevant geometric fact for this aspect of game theory is that, given
any closed convex set in the plane and a point lying outside of it, we can
find a line that separates the set from the point. There is an analogous
statement in higher dimensions. von Neumann exploited this fact to solve
zero sum games using a minimax variational principle. We will prove this
result.
     In general-sum games, we do not have a pair of optimal strategies any
more, but a concept related to the von Neumann minimax is that of Nash
equilibrium: is there a ‘rational’ choice for the two players, and if so, what
could it be? The meaning of ‘rational’ here and in many contexts is a valid
subject for discussion. There are anyway often many Nash equilibria and
further criteria are required to pick out relevant ones.
     A development of the last twenty years that we will discuss is the ap-
plication of game theory to evolutionary biology. In economic applications,
it is often assumed that the agents are acting ‘rationally’, and a neat theo-
rem should not distract us from remembering that this can be a hazardous
assumption. In some biological applications, we can however see Nash equi-
libria arising as stable points of evolutionary systems composed of agents
who are ‘just doing their own thing’, without needing to be ‘rational’.
     Let us introduce another geometrical tool. Although from its statement,
it is not evident what the connection of this result to game theory might be,
we will see that the theorem is of central importance in proving the existence
of Nash equilibria.

Theorem 1 (Brouwer’s fixed point theorem) : If K ⊆ Rd is closed,
bounded and convex, and T : K → K is continuous, then T has a fixed
point. That is, there exists x ∈ K for which T (x) = x.

    The assumption of convexity can be weakened, but not discarded entirely.
To see this, consider the example of the annulus C = {x ∈ R2 : 1 ≤ |x| ≤ 2},
and the mapping T : C → C that sends each point to its rotation by
90 degrees anticlockwise about the origin. Then T is isometric, that is,
|T (x) − T (y)| = |x − y| for each pair of points x, y ∈ C. Certainly then, T
is continuous, but it has no fixed point.
Game theory                                                                  5


    Another interesting topic is that of signalling. If one player has some
information that another does not, that may be to his advantage. But if he
plays differently, might he give away what he knows, thereby removing this
advantage?
    A quick mention of other topics, related to mechanism design. Firstly,
voting. Arrow’s impossibility theorem states roughly that if there is an
election with more than two candidates, then no matter which system one
chooses to use for voting, there is trouble ahead: at least one desirable
property that we might wish for the election will be violated. A recent topic
is that of eliciting truth. In an ordinary auction, there is a temptation to
underbid. For example, if a bidder values an item at 100 dollars, then he has
no motive to bid any more or even that much, because by exchanging 100
dollars for the object at stake, he has gained an item only of the same value
to him as his money. The second-price auction is an attempt to overcome
this flaw: in this scheme, the lot goes to the highest bidder, but at the
price offered by the second-highest bidder. This problem and its solutions
are relevant to bandwidth auctions made by governments to cellular phone
companies.
Example: Pie cutting. As another example, consider the problem of a
pie, different parts of whose interior are composed of different ingredients.
The game has two or more players, who each have their own preferences
regarding which parts of the pie they would most like to have. If there are
just two players, there is a well-known method for dividing the pie: one splits
it into two halves, and the other chooses which he would like. Each obtains
at least one-half of the pie, as measured according to each own preferences.
But what if there are three or more players? We will study this question,
and a variant where we also require that the pie be cut in such a way that
each player judges that he gets at least as much as anyone else, according
to his own criterion.
Example: Secret sharing. Suppose that we plan to give a secret to two
people. We do not trust either of them entirely, but want the secret to
be known to each of them provided that they co-operate. If we look for a
physical solution to this problem, we might just put the secret in a room,
put two locks on the door, and give each of the players the key to one of
the locks. In a computing context, we might take a password and split it in
two, giving each half to one of the players. However, this would force the
length of the password to be high, if one or other half is not to be guessed
by repeated tries. A more ambitious goal is to split the secret in two in such
a way that neither person has any useful information on his own. And here
is how to do it: suppose that the secret s is an integer that lies between 0
and some large value M , for example, M = 106 . We who hold the secret
at the start produce a random integer x, whose distribution is uniform on
the interval {0, . . . , M − 1} (uniform means that each of the M possible
Game theory                                                                 6


outcomes is equally likely, having probability 1/M ). We tell the number x
to the first person, and the number y = (s − x) mod M to the second person
(mod M means adding the right multiple of M so that the value lies on the
interval {0, . . . , M − 1}). The first person has no useful information. What
about the second? Note that

                 P(y = j) = P((s − x) mod M = j) = 1/M,

where the last equality holds because (s − x) mod M equals y if and only
if the uniform random variable x happens to hit one particular value on
{0, . . . , M − 1}. So the second person himself only has a uniform random
variable, and, thus, no useful information. Together, however, the players
can add the values they have been given, reduce the answer mod M , and
get the secret s back. A variant of this scheme can work with any number
of players. We can have ten of them, and arrange a way that any nine of
them have no useful information even if they pool their resources, but the
ten together can unlock the secret.
Example: Cooperative games. These games deal with the formation of
coalitions, and their mathematical solution involves the notion of Shapley
value. As an example, suppose that three people, I,II and III, sit in
a store, the first two bearing a left-handed glove, while the third has a
right-handed one. A wealthy tourist, ignorant of the bitter local climatic
conditions, enters the store in dire need of a pair of gloves. She refuses to
deal with the glove-bearers individually, so that it becomes their job to form
coalitions to make a sale of a left and right-handed glove to her. The third
player has an advantage, because his commodity is in scarcer supply. This
means that he should be able to obtain a higher fraction of the payment that
the tourist makes than either of the other players. However, if he holds out
for too high a fraction of the earnings, the other players may agree between
them to refuse to deal with him at all, blocking any sale, and thereby risking
his earnings. We will prove results in terms of the concept of the Shapley
value that provide a solution to this type of problem.
Game theory                                                                  7


2     Combinatorial games
2.1    Some definitions
Example. We begin with n chips in one pile. Players I and II make their
moves alternately, with player I going first. Each players takes between one
and four chips on his turn. The player who removes the last chip wins the
game. We write

       N = {n ∈ N : player I wins if there are n chips at the start},

where we are assuming that each player plays optimally. Furthermore,

       P = {n ∈ N : player II wins if there are n chips at the start}.

Clearly, {1, 2, 3, 4} ⊆ N, because player I can win with his first move. Then
5 ∈ P, because the number of chips after the first move must lie in the
set {1, 2, 3, 4}. That {6, 7, 8, 9} ∈ N follows from the fact that player I can
force his opponent into a losing position by ensuring that there are five chips
at the end of his first turn. Continuing this line of argument, we find that
P = {n ∈ N : n is divisible by five}.

Definition 1 A combinatorial game has two players, and a set, which is
usually finite, of possible positions. There are rules for each of the players
that specify the available legal moves for the player whose turn it is. If the
moves are the same for each of the players, the game is called impartial.
Otherwise, it is called partisan. The players alternate moves. Under nor-
mal play, the player who cannot move loses. Under misère play, the player
who makes the final move loses.

Definition 2 Generalising the earlier example, we write N for the collec-
tion of positions from which the next player to move will win, and P for
the positions for which the other player will win, provided that each of the
players adopts an optimal strategy.

   Writing this more formally, assuming that the game is conducted under
normal play, we define

        P0 = {0}
      Ni+1 = { positions x for which there is a move leading to Pi }
        Pi = { positions y such that each move leads to Ni }

for each i ∈ N. We set
                               [                [
                          N=         Ni , P =         Pi .
                               i≥0              i≥0
Game theory                                                                 8


     A strategy is just a function assigning a legal move to each possible
position. Now, there is the natural question whether all positions of a game
lie in N ∪ P, i.e., if there is a winning strategy for either player.
Example: hex. Recall the description of hex from the Introduction, with
R being player I, and G being player II. This is a partisan combinatorial
game under normal play, with terminal positions being the colorings that
have either type of crossing. (Formally, we could make the game “impartial”
by letting both players use both colors, but then we have to declare two types
of terminal positions, according to the color of the crossing.)
    Note that, instead of a rhombus board with the four sides colored in the
standard way, the game is possible to define on an arbitrary board, with a
fixed subset of pre-colored hexagons — provided the board has the property
that in any coloring of all its unfixed hexagons, there is exactly one type
of crossing between the pre-colored red and green parts. Such pre-colored
boards will be called admissible.
    However, we have not even proved yet that the standard rhombus board
is admissible. That there cannot be both types of crossing looks completely
obvious, until you actually try to prove it carefully. This statement is the
discrete analog of the Jordan curve theorem, saying that a continuous closed
curve in the plane divides the plane into two connected components. This
innocent claim has no simple proof, and, although the discrete version is
easier, they are roughly equivalent. On the other hand, the claim that in
any coloring of the board, there exists a monochromatic crossing, is the
discrete analog of the 2-dimensional Brouwer fixed point theorem, which we
have seen in the Introduction and will see proved in Section 4. The discrete
versions of these theorems have the advantage that it might be possible
to prove them by induction. Such an induction is done beautifully in the
following proof, due to Craige Schensted.
    Consider the game of Y: given a triangular board, tiled with hexagons,
the two players take turns coloring hexagons as in hex, with the goal of
establishing a chain that connects all three sides of the triangle.




          Red has a winning Y here.                  Reduction to hex.
Game theory                                                                  9


    Hex is a special case of Y: playing Y, started from the position shown on
the right hand side picture, is equivalent to playing hex in the empty region
of the board. Thus, if Y always has a winner, then this is also true for hex.

Theorem 2 In any coloring of the triangular board, there is exactly one
type of Y.

Proof. We can reduce a colored board with sides of size n to a color board
of size n − 1, as follows. Each little group of three adjacent hexagonal cells,
forming a little triangle that is oriented the same way as the whole board,
is replaced by a single cell. The color of the cell will be the majority of the
colors of the three cells in the little triangle. This process can be continued
to get a colored board of size n − 2, and so on, all the way down to a single
cell. We claim that the color of this last cell is the color of the winner of Y
on the original board.




                             Reducing a red Y to smaller and smaller ones.


    Indeed, notice that any chain of connected red hexagons on a board of
size n reduces to a connected red chain on the board of size n − 1. Moreover,
if the chain touched a side of the original board, it also touches the side of
the smaller one. The converse statement is just slightly harder to see: if
there is a red chain touching a side of the smaller board, then there was a
corresponding a red chain, touching the same side of the larger board. Since
the single colored cell of the board of size 1 forms a winner Y on that board,
there was a Y of the same color on the original board. ¤
    Going back to hex, it is easy to see by induction on the number of
unfilled hexagons, that on any admissible board, one of the players has a
winning strategy. One just has to observe that coloring red any one of
the unfilled hexagons of an admissible board leads to a smaller admissible
board, for which we can already use the induction hypothesis. There are
two possibilities: (1) R can choose that first hexagon in such a way that
on the resulting smaller board R has a winning strategy as being player II.
Then R has a winning strategy on the original board. (2) There is no such
hexagon, in which case G has a winning strategy on the original board.

Theorem 3 On a standard symmetric hex board of arbitrary size, player I
has a winning strategy.
Game theory                                                                      10


Proof. The idea of the proof is strategy-stealing. We know that one of
the players has a winning strategy; suppose that player II is the one. This
means that whatever player I’s first move is, player II can win the game
from the resulting situation. But player I can pretend that he is player
II: he just has to imagine that the colors are inverted, and that, before his
first move, player II already had a move. Whatever move he imagines, he
can win the game by the winning strategy stolen from player II; moreover,
his actual situation is even better. Hence, in fact, player I has a winning
strategy, a contradiction. ¤
   Now, we generalize some of the ideas appearing in the example of hex.

Definition 3 A game is said to be progressively bounded if, for any
starting position x, the game must finish within some finite number B(x) of
moves, no matter which moves the two players make.

Example: Lasker’s game. A position is finite collection of piles of chips.
A player may remove chips from a given pile, or he may not remove chips,
but instead break one pile into two, in any way that he pleases. To see that
this game is progressively bounded, note that, if we define
                                                 k
                                                 X
                         B(x1 , . . . , xk ) =         (2xi − 1),
                                                 i=1

then the sum equals the total number of chips and gaps between chips in
a position (x1 , . . . , xk ). It drops if the player removes a chip, but also if he
breaks a pile, because, in that case, the number of gaps between chips drops
by one. Hence, B(x1 , . . . , xk ) is an upper bound on the number of steps that
the game will take to finish from the starting position (x1 , . . . , xk ).
     Consider now a progressively bounded game, which, for simplicity, is
assumed to be under normal play. We prove by induction on B(x) that all
positions lie in N∪P. If B(x) = 0, this is true, because P0 ⊆ P. Assume the
inductive hypothesis for those positions x for which B(x) ≤ n, and consider
any position z satisfying B(z) = n + 1. There are two cases to handle: the
first is that each move from z leads to a position in N (that is, to a member
of one of the previously constructed sets Ni ). Then z lies in one of the
sets Pi and thus in P. In the second case, there is a move from z to some
P -position. This implies that z ∈ N. Thus, all positions lie in N ∪ P.

2.2    The game of nim, and Bouton’s solution
In the game of nim, there are several piles, each containing finitely many
chips. A legal move is to remove any positive number of chips from a single
pile. The aim of nim (under normal play) is to take the last stick remain-
ing in the game. We will write the state of play in the game in the form
Game theory                                                                         11


(n1 , n2 . . . , nk ), meaning that there are k piles of chips still in the game, and
that the first has n1 chips in it, the second n2 , and so on.
    Note that (1, 1) ∈ P, because the game must end after the second turn
from this beginning. We see that (1, 2) ∈ N, because the first player can
bring (1, 2) to (1, 1) ∈ P. Similarly, (n, n) ∈ P for n ∈ N and (n, m) ∈ N if
n, m ∈ N are not equal. We see that (1, 2, 3) ∈ P, because, whichever move
the first player makes, the second can force there to be two piles of equal
size. It follows immediately that (1, 2, 3, 4) ∈ N. By dividing (1, 2, 3, 4, 5)
into two subgames, (1, 2, 3) ∈ P and (4, 5) ∈ N, we get from the following
lemma that it is in N.

Lemma 1 Take two nim positions, A = (a1 , . . . , ak ) and B = (b1 , . . . , b` ).
Denote the position (a1 , . . . , ak , b1 , . . . , b` ) by (A, B). If A ∈ P and B ∈ N,
then (A, B) ∈ N. If A, B ∈ P, then (A, B) ∈ P. However, if A, B ∈ N,
then (A, B) can be either in P or in N.

Proof. If A ∈ P and B ∈ N, then Player I can reduce B to a position
B 0 ∈ P, for which (A, B 0 ) is either terminal, and Player I won, or from
which Player II can move only into pair of a P and an N-position. From
that, Player I can again move into a pair of two P-positions, and so on.
Therefore, Player I has a winning strategy.
    If A, B ∈ P, then any first move takes (A, B) to a pair of a P and an
N-position, which is in N, as we just saw. Hence Player II has a winning
strategy for (A, B).
    We know already that the positions (1, 2, 3, 4), (1, 2, 3, 4, 5), (5, 6) and
(6, 7) are all in N. However, as the next exercise shows, (1, 2, 3, 4, 5, 6) ∈ N
and (1, 2, 3, 4, 5, 6, 7) ∈ P. ¤
Exercise. By dividing the games into subgames, show that (1, 2, 3, 4, 5, 6) ∈
N, and (1, 2, 3, 4, 5, 6, 7) ∈ P. A hint for the latter one: adding two 1-chip
piles does not affect the outcome of any position.
   This divide-and-sum method still loses to the following ingenious theo-
rem, giving a simple and very useful characterization of N and P for nim:

Theorem 4 (Bouton’s Theorem) Given a starting position (n1 , . . . , nk ),
write each ni in binary form, and sum the k numbers in each of the digital
places mod 2. The position is in P if and only if all of the sums are zero.

    To illustrate the theorem, consider the starting position (1, 2, 3):

               number of chips (decimal) number of chips (binary)
                              1                                 01
                              2                                 10
                              3                                 11
Game theory                                                                          12


Summing the two columns of the binary expansions modulo two, we obtain
00. The theorem confirms that (1, 2, 3) ∈ P.
Proof of Bouton’s Theorem. We write n ⊕ m to be the nim-sum of
n, m ∈ N. This operation is the one described in the statement of the
theorem; i.e., we write n and m in binary, and compute the value of the sum
of the digits in each column modulo 2. The result is the binary expression
for the nim-sum n ⊕ m. Equivalently, the nim-sum of a collection of values
(m1 , m2 , . . . , mk ) is the sum of all the powers of 2 that occurred an odd
number of times when each of the numbers mi is written as a sum of powers
of 2. Here is an example: m1 = 13, m2 = 9, m3 = 3. In powers of 2:

                            m1 = 2 3 + 2 2                + 20
                            m2 = 2 3                   + 20
                            m3 =                 +21 + 20 .

In this case, the powers of 2 that appear an odd number of times are 20 = 1
and 21 = 2. This means that the nim-sum is m1 ⊕ m2 ⊕ m3 = 1 + 2 = 3. For
the case where (m1 , m2 , m3 ) = (5, 6, 15), we write, in purely binary notation,

                                   5    0   1    0    1
                                   6    0   1    1    0
                                  15    1   1    1    1
                                        1   1    0    0

making the nim-sum 12 in this case. We define P̂ to be those positions with
nim-sum zero, and N̂ to be all other positions. We claim that

                              P̂ = P and         N̂ = N.

To check this claim, we need to show two things. Firstly, that 0 ∈ P̂ , and
that, for all x ∈ N̂ , there exists a move from x leading to P̂ . Secondly, that
for every y ∈ P̂ , all moves from y lead to N̂ .
    Note firstly that 0 ∈ P̂ is clear. Secondly, suppose that

                            x = (m1 , m2 , . . . , mk ) ∈ N̂ .

Set s = m1 ⊕ . . . ⊕ mk . Writing each mi in binary, note that there are
an odd number of values of i ∈ {1, . . . , k} for which the binary expression
for mi has a 1 in the position of the left-most one in the expression for s.
Choose one such i. Note that mi ⊕ s < mi , because mi ⊕ s has no 1 in this
left-most position, and so is less than any number whose binary expression
does have a 1 there. So we can play the move that removes from the i-th
pile mi − mi ⊕ s chips, so that mi becomes mi ⊕ s. The nim-sum of the
resulting position (m1 , . . . , mi−1 , mi ⊕ s, mi+1 , . . . , mk ) is zero, so this new
Game theory                                                                        13


position lies in P̂ . We have checked the first of the two conditions which we
require.
      To verify the second condition, we have to show that if y = (y1 , . . . , yk ) ∈
P̂ , then any move from y leads to a position z ∈ N̂ . We write the yi in binary:
                                                         m
                                (n) (n−1)       (0)         (j)
                                                         X
                     y1 = y 1 y1            . . . y1 =     y1 2 j
                                                         j=0
                                 ···
                                                         m
                                (n) (n−1)        (0)        (j)
                                                         X
                     yk =     y k yk      . . . yk =       yk 2 j .
                                                         j=0
                                                                    (j)   (j)
By assumption, y ∈ P̂ . This means that the nim-sum y1 ⊕ . . . ⊕ yk = 0 for
                                     (j)
each j. In other words, kl=1 yl is even for each j. Suppose that we remove
                              P
chips from pile l. We get a new position z = (z1 , . . . , zk ) with zi = yi for
i ∈ {1, . . . , k}, i 6= l, and with zl < yl . (The case where zl = 0 is permitted.)
Consider the binary expressions for yl and zl :
                                       (n) (n−1)          (0)
                            yl = y l yl            . . . yl
                                       (n) (n−1)          (0)
                            z1 = z l zl            . . . zl     .
We scan these two rows of zeros and ones until we locate the first instance of
a disagreement between them. In the column where it occurs, the nim-sum
of yl and zl is one. This means that the nim-sum of z = (z1 , . . . , zk ) is also
equal to one in this column. Thus, z ∈ N̂ . We have checked the second
condition that we needed, and so, the proof of the theorem is complete. ¤
Example: the game of rims. In this game, a starting position consists of a
finite number of dots in the plane, and a finite number of continuous loops.
Each loop must not intersect itself, nor any of the other loops. Each loop
must pass through at least one of the dots. It may pass through any number
of them. A legal move for either of the two players consists of drawing a
new loop, so that the new picture would be a legal starting position. The
players’ aim is to draw the last legal loop.
    We can see that the game is identical to a variant of nim. For any given
position, think of the dots that have no loop going through them as being
divided into different classes. Each class consists of the set of dots that can
be reached by a continuous path from a particular dot, without crossing any
loop. We may think of each class of dots as being a pile of chips, like in nim.
What then are the legal moves, expressed in these terms? Drawing a legal
loop means removing at least one chip from a given pile, and then splitting
the remaining chips in the pile into two separate piles. We can in fact split
in any way we like, or leave the remaining chips in a single pile.
    This means that the game of rims has some extra legal moves to those
of nim. However, it turns out that these extra make no difference, and so
that the sets N or P coincide for the two games. We now prove this.
Game theory                                                               14


   Thinking of a position in rims as a finite number of piles, we write Pnim
and Nnim for the P and N positions for the game of nim (so that these sets
were found in Bouton’s Theorem). We want to show that

                       P = Pnim    and   N = Nnim ,                       (1)

where P and N refer to the game of rims.
    What must we check? Firstly, that 0 ∈ P, which is immediate. Secondly,
that from any position in Nnim , we may move to Pnim by a move in rims.
This is fine, because each nim move is legal in rims. Thirdly, that for any
y ∈ Pnim , any rims move takes us to a position in Nnim . If the move does
not involve breaking a pile, then it is a nim move, so this case is fine. We
need then to consider a move where yl is broken into two parts u and v
whose sum satisfies u + v < y. Note that the nim-sum u ⊕ v of u and v is at
most the ordinary sum u + v: this is because the nim-sum involves omitting
certain powers of 2 from the expression for u + v. Thus,

                            u ⊕ v ≤ u + v < yl .

So the rims move in question amounted to replacing the pile of size yl by
one with a smaller number of chips, u ⊕ v. Thus, the rims move has the
same effect as a legal move in nim, so that, when it is applied to y ∈ Pnim ,
it produces a position in Nnim . This is what we had to check, so we have
finished proving (1).
Example: Wythoff nim. In this game, we have two piles. Legal moves
are those of nim, but with the exception that it is also allowed to remove
equal numbers of chips from each of the piles in a single move. This stops
the positions {(n, n) : n ∈ N} from being P-positions. We will see that this
game has an interesting structure.

2.3   The sum of combinatorial games
Definition 4 The sum of two combinatorial games, G1 and G2 , is that
game G where, for any move, a player may choose in which of the games
G1 and G2 to play. The terminal positions in G are (t1 , t2 ), where ti is a
terminal in Gi for both i ∈ {1, 2}. We will write G = G1 + G2 .

    We say that two pairs (Gi , xi ), i ∈ {1, 2}, of a game and a starting
position are equivalent if (x1 , x2 ) is a P-position of the game G1 + G2 .
We will see that this notion of “equivalent” games defines an equivalence
relation.
Optional exercise: Find a direct proof of transitivity of the relation “being
equivalent games”.
   As an example, we see that the nim position (1, 3, 6) is equivalent to the
nim position (4), because the nim-sum of the sum game (1, 3, 4, 6) is zero.
Game theory                                                                      15


More generally, the position (n1 , . . . , nk ) is equivalent to (n1 ⊕ . . . ⊕ nk ),
since the nim-sum of (n1 , . . . , nk , n1 ⊕ . . . ⊕ nk ) is zero.
    Lemma 1 of the previous subsection clearly generalizes to the sum of
combinatorial games:

      (G1 , x1 ) ∈ P and (G2 , x2 ) ∈ N imply (G1 + G2 , (x1 , x2 )) ∈ N,

           (G1 , x1 ), (G2 , x2 ) ∈ P imply (G1 + G2 , (x1 , x2 )) ∈ P.
We also saw that the information (Gi , xi ) ∈ N is not enough to decide what
kind of position (x1 , x2 ) is. Therefore, if we want solve games by dividing
them into a sum of smaller games, we need a finer description of the positions
than just being in P or N.

Definition 5 Let G be a progressively bounded combinatorial game in nor-
mal play. Its Sprague-Grundy function g is defined as follows: for ter-
minal positions t, let g(t) = 0, while for other positions,

                  g(x) = mex{g(y) : x → y is a legal move},

where mex(S) = min{n ≥ 0 : n 6∈ S, for a finite set S ⊆ {0, 1, . . .}. (This is
short for ‘minimal excluded value’).

    Note that g(x) = 0 is equivalent to x ∈ P. And a very simple example
is that the Sprague-Grundy value of the nim pile (n) is just n.

Theorem 5 (Sprague-Grundy theorem) Every progressively bounded com-
binatorial game G in normal play is equivalent to a single nim pile, of size
g(x) ≥ 0, where g is the Sprague-Grundy function of G.

    We illustrate the theorem with an example: a game where a position
consists of a pile of chips, and a legal move is to remove 1, 2 or 3 chips. The
following table shows the first few values of the Sprague-Grundy function
for this game:

                        x       0   1   2   3   4   5   6
                        g(x)    0   1   2   3   0   1   2.

That is, g(2) = mex{0, 1} = 2, g(3) = mex{0, 1, 2} = 3, and g(4) =
mex{1, 2, 3} = 0. In general for this example, g(x) = x mod 4. We have
(0) ∈ Pnim and (1), (2), (3) ∈ Nnim , hence the P-positions for our game are
the naturals that are divisible by four.
Example: a game consisting of a pile of chips. A legal move from a position
with n chips is to remove any positive number of chips strictly smaller than
n/2 + 1. Here, the first few values of the Sprague-Grundy function are:
Game theory                                                                     16


                      x        0   1    2   3    4   5     6
                      g(x)     0   1    0   2    1   3     0.

Definition 6 The subtraction game with substraction set {a1 , . . . , am }
is the game in which a position consists of a pile of chips, and a legal move
is to remove from the pile ai chips, for some i ∈ {1, . . . , m}.

    The Sprague-Grundy theorem is a consequence of the Sum Theorem just
below, by the following simple argument. We need to show that the sum of
(G, x) and the single nim pile (g(x)) is a P-position. By the Sum Theorem
and the remarks following Definition 5, the Sprague-Grundy value of this
game is g(x) ⊕ g(x) = 0, which means that is in P.

Theorem 6 (Sum Theorem) If (G1 , x1 ) and (G2 , x2 ) are two pairs of
games and initial starting positions within those games, then, for the sum
game G = G1 + G2 , we have that

                         g(x1 , x2 ) = g1 (x1 ) ⊕ g2 (x2 ),

where g, g1 , g2 respectively denote the Sprague-Grundy functions for the games
G, G1 and G2 .

Proof. First of all, note that if both Gi are progressively bounded, then
G is such, too. Hence, we define B(x1 , x2 ) to be the maximum number of
moves in which the game (G, (x1 , x2 )) will end. Note that this quantity is
not merely an upper bound on the number of moves, it is the maximum.
We will prove the statement by an induction on B(x1 , x2 ) = B(x1 ) + B(x2 ).
Specifically, the inductive hypothesis at n ∈ N asserts that, for positions
(x1 , x2 ) in G for which B(x1 , x2 ) ≤ n,

                         g(x1 , x2 ) = g1 (x1 ) ⊕ g2 (x2 ).                     (2)

If at least one of x1 and x2 is terminal, then (2) is clear: indeed, if x1 is
terminal and x2 is not, then the game G may only be played in the second
coordinate, so it is just the game G2 in disguise. Suppose then that neither
of the positions x1 and x2 are terminal ones. We write in binary form:
                                            (m) (m−1)           (0)
                       g1 (x1 ) = n1 = n1 n1             · · · n1
                                            (m) (m−1)           (0)
                       g2 (x2 ) = n2 = n2 n2             · · · n2 ,
                             Pm     (j) j
so that, for example, n1 =     j=0 n1 2 . We know that

   g(x1 , x2 ) = mex{g(y1 , y2 ) : (x1 , x2 ) → (y1 , y2 ) a legal move in G}
               = mex(A),
Game theory                                                                             17


where A := {g1 (y1 ) ⊕ g2 (y2 ) : (x1 , x2 ) → (y1 , y2 ) is a legal move in G}. The
second equality here follows from the inductive hypothesis, because we know
that B(y1 , y2 ) < B(x1 , x2 ) (the maximum number of moves left in the game
G must fall with each move). Writing s = n1 ⊕ n2 , we must show that

                   (a):      s 6∈ A ;
                   (b):      t ∈ N, 0 ≤ t < s implies that t ∈ A,

since these two statements will imply that mex(A) = s, which yields (2).
Deriving (a): If (x1 , x2 ) → (y1 , y2 ) is a legal move in G, then either y1 = x1
and x2 → y2 is a legal move in G2 , or y2 = x2 and x1 → y1 is a legal move
in G1 . Assuming the first case, we have that

              g1 (y1 ) ⊕ g2 (y2 ) = g1 (x1 ) ⊕ g2 (y2 ) 6= g1 (x1 ) ⊕ g2 (x2 ),

for otherwise, g2 (y2 ) = g1 (x1 ) ⊕ g1 (x1 ) ⊕ g2 (y2 ) = g1 (x1 ) ⊕ g1 (x1 ) ⊕ g2 (x2 ) =
g2 (x2 ). This however is impossible, by the definition of the Sprague-Grundy
function g2 , hence s 6∈ A.
Deriving (b): We take t < s, and observe that if t(`) is the leftmost digit
of t that differs from the corresponding one of s, then t(`) = 0 and s(`) = 1.
                (`)     (`)                                       (`)
Since s(`) = n1 + n2 mod 2, we may suppose that n1 = 1. We want to
move in G1 from x1 , for which g1 (x1 ) = n1 , to a position y1 for which

                                  g1 (y1 ) = n1 ⊕ s ⊕ t.                               (3)

Then we will have (x1 , x2 ) → (y1 , x2 ) on one hand, while

     g1 (y1 ) ⊕ g2 (x2 ) = n1 ⊕ s ⊕ t ⊕ n2 = n1 ⊕ n2 ⊕ s ⊕ t = s ⊕ s ⊕ t = t

on the other, hence t = g1 (y1 ) ⊕ g2 (x2 ) ∈ A, as we sought. But why is (3)
possible? Well, note that
                               n1 ⊕ s ⊕ t < n 1 .                         (4)
Indeed, the leftmost digit at which n1 ⊕ s ⊕ t differs from n1 is `, at which
the latter has a 1. Since a number whose binary expansion contains a 1
in place ` exceeds any number whose expansion has no ones in places ` or
higher, we see that (4) is valid. The definition of g1 (x1 ) now implies that
there exists a legal move from x1 to some y1 with g(y1 ) = n1 ⊕ s ⊕ t. This
finishes case (b) and the proof of the theorem. ¤
Example. Let G1 be the subtraction game with subtraction set S1 =
{1, 3, 4}, G2 be the subtraction game with S2 = {2, 4, 6}, and G3 be the
subtraction game with S3 = {1, 2, . . . , 20}. Who has a winning strategy
from the starting position (100, 100, 100) in G1 + G2 + G3 ?
Game theory                                                                        18


2.4    Staircase nim and other examples
Staircase nim. A staircase of n steps contains coins on some of the steps.
Let (x1 , x2 , . . . , xn ) denote the position in which there are xj coins on step j,
j = 1, . . . , n. A move of staircase nim consists of moving any positive number
of coins from any step j to the next lower step, j − 1. Coins reaching the
ground (step 0) are removed from play. The game ends when all coins are
on the ground. Players alternate moves and the last to move wins.
    We claim that a configuration is a P-position in staircase nim if the
numbers of coins on odd-numbered steps forms a P-position in nim. To
see this, note that moving coins from an odd-numbered step to an even-
numbered one represents a legal move in a game of nim consisting of piles
of chips lying on the odd-numbered steps. We need only check that moving
chips from even to odd numbered steps is not useful. A player who has just
seen his opponent to do this may move the chips newly arrived at an odd-
numbered location to the next even-numbered one, that is, he may repeat his
opponent’s move at one step lower. This restores the nim-sum on the odd-
numbered steps to its value before the opponent’s last move. This means
that the extra moves can play no role in changing the outcome of the game
from that of nim on the odd-numbered steps.
Moore’s nimk : In this game, recall that players are allowed to remove any
number of chips from at most k piles in any given turn. We write the binary
expansions of the pile sizes (n1 , . . . , n` ):
                                                         m
                                      (m)       (0)             (j)
                                                         X
                       n1   =     n1        · · · n1 ≡         n1 2 j ,
                                                         j=0
                            ···
                                                          m
                                    (m)      (0)                 (j)
                                                          X
                       n`   =     n ` · · · n`        ≡         n` 2 j .
                                                          j=0

We set
             n                     X̀ (r)                             o
         P̂ = (n1 , . . . , n` ) :   ni = 0 mod (k + 1) for each r ≥ 0 .
                                i=1

Theorem 7 (Moore’s theorem) We have P̂ = P.

Proof. Firstly, note that the terminal position 0 lies in P̂ . There are two
other things to check: firstly, that from P̂ , any legal move takes us out of
there. To see this, take any move from a position in P̂ , and consider the
leftmost column for which this move changes the binary expansion of one of
the pile numbers. Any change in this column must be from one to zero. The
existing sum of the ones and zeros mod (k + 1) is zero, and we are adjusting
at most k piles. Since ones are turning into zeros, and at least one of them
Game theory                                                                    19


is changing, we could get back to 0 mod k + 1 in this column only if we were
to change k + 1 piles. This isn’t allowed, so we have verified that no move
from P̂ takes us back there.
     We must also check that for each position in N̂ (which we define to be
the complement of P̂ ), there exists a move into P̂ . This step of the proof is
a bit harder. How to select the k piles from which to remove chips? Well,
we work by finding the leftmost column whose mod (k + 1) sum is not-zero.
We select any r rows with a one in this column, where r is the number of
ones in the column reduced mod (k + 1) (so that r ∈ {0, . . . , k}). We’ve
got the choice to select k − r more rows if we need to. We do this moving
to the next column to the right, and computing the number s of ones in
that column, ignoring any ones in the rows that we selected before, and
reduced mod (k + 1). If r + s < k, then we add s rows to the list of those
selected, choosing these so that there is a one in the column currently under
consideration, and different from the rows previously selected. If r + s ≥ k,
we choose k − r such rows, so that we have a complete set of k chosen rows.
In the first case, we still need more rows, and we collect them successively
by examining each successive column to the right in turn, using the same
rule as the one we just explained. The point of doing this is that we have
chosen the rows in such a way that, for any column, either that column has
no ones from the unselected rows because in each of these rows, the most
significant digit occurs in a place to the right of this column, or the mod
(k + 1) sum in the rows other than the selected ones is not zero. If a column
is of the first type, we set all the bits to zero in the selected rows. This gives
us complete freedom to choose the bits in the less significant places. In the
other columns, we may have say t ∈ {1, . . . , k} as the mod (k + 1) sum of
the other rows, so we choose the number of ones in the selected rows for this
column to be equal to k − t. This gives us a mod (k + 1) sum zero in each
row, and thus a position in P̂ . This argument is not all that straightforward,
it may help to try it out on some particular examples: choose a small value
of k, make up some pile sizes that lie in N̂ , and use it to find a specific move
to a position in P̂ . Anyway, that’s what had to be checked, and the proof
is finished. ¤
The game of chomp and its solution: A rectangular array of chocolate
is to be eaten by two players who alternatively must remove some part of it.
A legal move is to choose a vertex and remove that part of the remaining
chocolate that lies to the right or above the chosen point. The part removed
must be non-empty. The square of chocolate located in the lower-left corner
is poisonous, making the aim of the game to force the other player to make
the last move. The game is progressively bounded, so that each position is
in N or P. We will show that each rectangular position is in N.
    Suppose, on the contrary, that there is a rectangular position in P. Con-
sider the move by player I of chomping the upper-right hand corner. The
Game theory                                                                  20


resulting position must be in N. This means that player II has a move to
P. However, player I can play this move to start with, because each move
after the upper-right square of chocolate is gone is available when it was still
there. So player I can move to P, a contradiction.
    Note that it may not be that chomping the upper-right hand corner is a
winning move. This strategy-stealing argument, just as in the case of hex,
proves that player I has a winning strategy, without identifying it.

2.5   The game of Green Hackenbush
In the game of Green Hackenbush, we are given a finite graph, that consists
of vertices and some undirected edges between some pairs of the vertices.
One of the vertices is called the root, and might be thought of as the ground
on which the rest of the structure is standing. We talk of ‘green’ Hackenbush
because there is an partisan variant of the game in which edges may be
colored red or blue instead.
    The aim of the players I and II is to remove the last edge from the
graph. At any given turn, a player may remove some edge from the graph.
This causes not only that edge to disappear, but also all those edges for
which every path to the root travels through the edge the player removes.
    Note firstly that, if the original graph consists of a finite number of
paths, each of which ends at the root, then, in this case, Green Hackenbush
is equivalent to the game of nim, where the number of piles is equal to the
number of paths, and the number of chips in a pile is equal to the length of
the corresponding path.
    We need a lemma to handle the case where the graph is a tree:

Lemma 2 (Colon Principle) The Sprague-Grundy function of Green Hack-
enbush on a tree is unaffected by the following operation: for any example
of two branches of the tree meeting at a vertex, we may replace these two
branches by a path emanating from the vertex whose length is the nim-sum
of the Sprague-Grundy functions of the two branches.

Proof. See Ferguson, I-42. The proof in outline: if the two branches
consist simply of paths (or ‘stalks’) emanating from a given vertex, then
the result is true, by noting that the two branches form a two-pile game of
nim, and using the direct sum Theorem for the Sprague-Grundy functions of
two games. More generally, we show that we may perform the replacement
operation on any two branches meeting at a vertex, by iterating replacing
pairs of stalks meeting inside a given branch, until each of the two branches
itself has become a stalk. ¤
    As a simple illustration, see the figure. The two branches in this case are
stalks, of length 2 and 3. The Sprague-Grundy values of these stalks equal
Game theory                                                                              21




2 and 3, and their nim-sum is equal to 1. Hence, the replacement operation
takes the form shown.
    For further discussion of Hackenbush, and references about the game,
see Ferguson, Part I, Section 6.

2.6    Wythoff ’s nim
A position in Wythoff ’s nim consists of a pair of (n, m) of natural numbers,
n, m ≥ 0. A legal move is one of the following: to reduce n to some value
between 0 and n−1 without changing m, to reduce m to some value between
0 and m − 1 without changing n, or to reduce each of n and m by the same
amount, so that the outcome is a pair of natural numbers. The one who
reaches (0, 0) is the winner.
    Consider the following recursive definition of a sequence of pairs of nat-
ural numbers: (a0 , b0 ) = (0, 0), (a1 , b1 ) = (1, 2), and, for each k ≥ 1,

                    ak = mex{a0 , a1 , . . . , ak−1 , b0 , b1 , . . . , bk−1 }

and bk = ak +k. Each natural number greater than zero is equal to precisely
one of the ai or the bi . To see this, note that aj cannot be equal to any of
a0 , . . . , aj−1 or b0 , . . . , bj−1 , moreover, for k > j we have ak > aj because
otherwise aj would have taken the slot that ak did. Furthermore, bk =
ak + k > a j + j = b j .
      It is easy to see that the set of P positions is exactly {(0, 0), (ak , bk ), (bk , ak ),
k = 1, 2, . . .}. But is there a fast, non-recursive, method to decide if a given
position is in P?
      There is a nice way to construct partitions of the positive integers: fix
any irrational θ ∈ (0, 1), and set

                   αk (θ) = bk/θc,                 βk (θ) = bk/(1 − θ)c.

(For rational θ, this definition has to be slightly modified.) Why is this a
partition of Z+ ? Clearly, αk < αk+1 and βk < βk+1 for any k. Furthermore,
it is impossible to have k/θ, `/(1 − θ) ∈ [N, N + 1) for integers k, `, N ,
because that would easily imply that there are integers in both intervals
IN = [N θ, (N + 1)θ) and JN = [(N + 1)θ − 1, N θ), which cannot happen
with θ ∈ (0, 1). These show that there is no repetition in the set S = {αk , βk ,
k = 1, 2, . . .}. On the other hand, it cannot be that neither of the intervals
IN and JN contains any integer, and this easily implies N ∈ S, for any N.
Game theory                                                                  22


   Now, we have the question: does there exist a θ ∈ (0, 1) for which

                       αk (θ) = ak      and     βk (θ) = bk ?               (5)

We are going to show that there is only one θ for which this might be true.
Since bk = ak + k, (5) implies that bk/θc + k = bk/(1 − θ)c. Dividing by k
and noting that
                           0 ≤ k/θ − bk/θc < 1,
so that
                         0 ≤ 1/θ − (1/k)bk/θc < 1/k,
we find that
                              1/θ + 1 = 1/(1 − θ).                       (6)
                                                    √
Thus, θ 2 + θ − 1 = 0, so that θ or 1/θ equal 2/(1 + 5). Thus, if there is a
solution in (0, 1), it must be this
                                √ value.
    We now define θ = 2/(1 + 5). Note that (6) implies that

                              1/θ + 1 = 1/(1 − θ),

so that
                           bk/(1 − θ)c = bk/θc + k.
This means that βk = αk + k. We need to verify that

                   αk = mex{α0 , . . . , αk−1 , β0 , . . . , βk−1 }.

We checked earlier that αk is not one of these values. Why is it equal to
their mex? Define z to be this mex. If z 6= αk , then Z < αk ≤ αl ≤ βl for
all l ≥ k. Since z is defined as a mex, z 6= αi , βi for i ∈ {0, . . . , k − 1}.
Game theory                                                                  23


3     Two-person zero-sum games
We now turn to studying a class of games that involve two players, with the
loss of one equalling the gain of the other in each possible outcome.

3.1   Some examples
A betting game. Suppose that there are two players, a hider and a chooser.
The hider has two coins. At the beginning of any given turn, he decides
either to place one coin in his left hand, or two coins in his right. He does
so, unseen by the chooser, although the chooser is aware that this is the
choice that the hider had to make. The chooser then selects one of his
hands, and wins the coins hidden there. That means she may get nothing
(if the hand is empty), or one or two coins. How should each of the agents
play if she wants to maximize her gain, or minimize his loss? Calling the
chooser player I and the hider player II, we record the outcomes in a normal
or strategic form:

                                        II   L       R
                                    I
                                    L        2       0
                                    R        0       1

If the players choose non-random strategies, and he seeks to minimize his
worst loss, while she wants to assure some gain, what are these amounts?
In general, consider a pay-off matrix (ai,j )m,n
                                             i=1,j=1 , so that player I may play
one of m possible plays, and player II one of n possibilities. The meaning
of the entries is that aij is the amount that II pays I in the event that I
plays i and II plays j. Let’s calculate the assured payment for player I if
pure strategies are used. If she announces to player II that she will play
i, then II will play that j for which minj aij is attained. Therefore, if she
were announcing her choice beforehand, player I would play that i attaining
maxi minj aij . On the other hand, if player II has to announce his intention
for the coming round to player I, then a similar argument shows that he
plays j, where j attains minj maxi aij .
    In the example, the assured value for II is 1, and the assured value for I
is zero. In plain words, the hider can assure losing only one unit, by placing
one coin in his left hand, whereas the chooser knows that he will never lose
anything by playing.
    It is always true that the assured values satisfy the inequality

                         min max aij ≥ max min aij .
                           j    i                i       j

Intuitively, this is because player I cannot be assured of winning more than
player II can be guaranteed not to lose. Mathematically, let j ∗ denote the
Game theory                                                               24


value of j that attains the minimum of maxi aij , and let î denote the value
of i that attains the maximum of minj aij . Then

          min max aij = max aij ∗ ≥ aîj ∗ ≥ min aîj = max min aij .
           j    i           i                       j    i    j

    If the assured values are not equal, then it makes sense to consider ran-
dom strategies for the players. Back to our example, suppose that I plays
L with probability x and R the rest of the time, whereas II plays L with
probability t, and R with probability 1 − t. Suppose that I announces to
II her choice for x. How would II react? If he plays L, his expected loss is
2x, if R, then 1 − x. He minimizes the payout and achieves min{2x, 1 − x}.
Knowing that II will react in this way to hearing the value of x, I will seek
to maximize her payoff by choosing x to maximize min{2x, 1 − x}. She is
choosing the value of x at which the two lines in this graph cross:



                           ¢y=2x
                          ¢
                      ¢
                 @   ¢
                    @¢
                    ¢ @y=1-x
                  ¢    @
                 ¢       @

   So her choice is x = 1/3, with which she can assure a payoff 2/3 on the
average, a significant improvement from 0. Looking at things the other way
round, suppose that player II has to announce t first. The payoff for player
I becomes 2t if she picks left and 1 − t if she picks right. Player II should
choose t = 1/3 to minimize his expected payout. This assures him of not
paying more than 2/3 on the average. The two assured values now agree.
   Let’s look at another example. Suppose we are dealing with a game
that has the following payoff matrix:

                                       II   L   R
                                   I
                                   T        0   2
                                   B        5   1

Suppose that player I plays T with probability x and B with probability
1 − x, and that player II plays L with probability y and R with probability
1 − y. If player II has declared the value of y, then Player I has expected
payoff of 2(1 − y) if he plays T , and 4y + 1 if he plays B. The maximum
of these quantities is the expected payoff for player I under his optimal
strategy, given that he knows y. Player II minimizes this, and so chooses
y = 1/6 to obtain an expected payoff of 5/3.
Game theory                                                                  25




                      ¤ 4y+1
                     ¤
               2 ¤
            5/3 @¤
                 ¤ @
               1¤    @2-2y
                             @
                                 @

If player I has declared the value of x, then player II has expected payment
of 5(1 − x) if he plays L and 1 + x if he plays R. He minimizes this, and
then player II chooses x to maximize the resulting quantity. He therefore
picks x = 2/3, with expected outcome of 5/3.



                         1+x
                             ¡
                 @       ¡
                     @
                     ¡
                 ¡       @5-5x
                          @
                            @
                     2/3
   In general, player I can choose a probability vector
                                                     m
                                                     X
                                           T
                      x = (x1 , . . . , xm ) ,             xi = 1,
                                                     i=1

where xi is the probability that he plays i. Player II similarly chooses a
strategy y = (y1 , . . . , yn )T . Such randomized
                                              P strategiesT are called mixed.
The resulting expected payoff is given by        xi aij yj = x Ay. We will prove
von Neumann’s minimax theorem, which states that

                         min max xT Ay = max min xT Ay.
                           y     x               x   y

The joint value of the two sides is called the value of the game; this is the
expected payoff that both players can assure.

3.2   The technique of domination
We illustrate a useful technique with another example. Two players choose
numbers in {1, 2, . . . , n}. The player whose number is higher than that of
her opponent by one wins a dollar, but if it exceeds the other number by
two or more, she loses 2 dollars. In the event of a tie, no money changes
hands. We write the payoff matrix for the game:
Game theory                                                                        26


                       II    1        2    3     4     ···         n
                     I
                     1       0        -1   2     2     ···         2
                     2       1        0    -1    2     ···         2
                     3       -2       1    0     -1    2     ···   2
                     ·
                     ·
                     n−1     -2       -2   ···         1     0     -1
                     n       -2       -2   ···               1     0

     This apparently daunting example can be reduced by a new technique,
that of domination: if row i has each of its elements at least the correspond-
ing element in row î, that is, if aij ≥ aîj for each j, then, for the purpose of
determining the value of the game, we may erase row î. (The value of the
game is defined as the value arising from von Neumann’s minimax theorem).
Similarly, there is a notion of domination for player II: if aij ≤ aij ∗ for each
i, then we can eliminate column j ∗ without affecting the value of the game.
     Let us see in details why this is true. Assuming that aij ≤ aij ∗ for each i,
if player II changes a mixed strategy y to another z by letting zj = yj + yj ∗ ,
zj ∗ = 0 and z` = y` for all ` 6= j, j ∗ , then
                   X                          X
                      xi ai,` y` = xT Ay ≥      xi ai,` z` = xT Az,
                   i,`                           i,`
         P                             P
because i xi (ai,j yj + ai,j ∗ yj ∗ ) ≥ i xi ai,j (yj + yj ∗ ). Therefore, strategy z,
in which she didn’t use column j ∗ , is at least as good for player II as y.
    In the example in question, we may eliminate each row and column
indexed by four or greater. We obtain the reduced game:

                                      II   1      2    3
                                  I
                                  1        0      -1   2
                                  2        1      0    -1
                                  3        -2     1    0

Consider (x1 , x2 , x3 ) as a strategy for player I. The expected payments
made by player II under her pure strategies 1,2 and 3 are

                         (x2 − 2x3 , −x1 + x3 , 2x1 − x3 ).                       (7)

Player II seeks to minimize her expected payment. Player I is choosing
(x1 , x2 , x3 ): for the time being, suppose that she fixes x3 , and optimizes her
choice for x1 . Eliminating x2 , (7) becomes

                     (1 − x1 − 3x3 , −x1 + x3 , 3x1 + x3 − 1).
Game theory                                                                 27


Computing the choice of x1 for which the maximum of the minimum of these
quantities is attained, and then maximising this over x3 , yields an optimal
strategy for each player of (1/4, 1/2, 1/4), and a value for the game of zero.
Remark. It can of course happen in a game that none of the rows dominates
another one, but there are two rows, v, w, whose convex combination pv +
(1 − p)w for some p ∈ (0, 1) does dominate some other rows. In this case
the dominated rows can still be eliminated.

3.3   The use of symmetry
We illustrate a symmetry argument by analysing the game of battleship
and salvo:
                                    X   X
                                        B


A battleship is located on two adjacent squares of a three-by-three grid,
shown by the two Xs in the example. A bomber, who cannot see the sub-
merged craft, hovers overhead. He drops a bomb, denoted by B in the figure,
on one of the nine squares. He wins if he hits and loses if he misses the sub-
marine. There are nine pure strategies for the bomber, and twelve for the
submarine. That means that the payoff matrix for the game is pretty big.
We can use symmetry arguments to simplify the analysis of the game.
   Indeed, suppose that we have two bijections

                     g1 : { moves of I } → { moves of I }

and
                   g2 : { moves of II } → { moves of II },
for which the payoffs aij satisfy

                               ag1 (i),g2 (j) = aij .                      (8)

If this is so, then there are optimal strategies for player I that give equal
weight to g1 (i) and i for each i. Similarly, there exists a mixed strategy for
player II that is optimal and assigns the same weight to the moves g2 (j)
and j for each j.
    In the example, we may take g1 to the the map that flips the first and
the third columns. Similarly, we take g2 to do this, but for the battleship
location. Another example of a pair of maps satisfying (8) for this game: g 1
rotates the bomber’s location by 90 degrees anticlockwise, whereas g 2 does
the same for the location of the battleship. Using these two symmetries, we
may now write down a much more manageable payoff matrix:
Game theory                                                               28


                          SHIP     center    off-center
                      BOMBER
                      corner       0         1/4
                      midside      1/4       1/4
                      middle       1         0

These are the payoff in the various cases for play of each of the agents.
Note that the pure strategy of corner for the bomber in this reduced game
in fact corresponds to the mixed strategy of bombing each corner with 1/4
probability in the original game. We have a similar situation for each of the
pure strategies in the reduced game.
    We use domination to simplify things further. For the bomber, the
strategy ‘midside’ dominates that of ‘corner’. We have busted down to:

                        SHIP       center    off-center
                      BOMBER
                      midside      1/4       1/4
                      middle       1         0

Now note that for the ship (that is trying to escape the bomb and thus is
heading away from the high numbers on the table), off-center dominates
center, and thus we have the reduced table:

                             SHIP      off-center
                         BOMBER
                         midside       1/4
                         middle        0

The bomber picks the better alternative — technically, another application
of domination — and picks midside over middle. The value of the game is
1/4, the bomb drops on one of the four middles of the sides with probability
1/4 for each, and the submarine hides in one of the eight possible locations
that exclude the center, choosing any given one with a probability of 1/8.

3.4   von Neumann’s minimax theorem
We begin this section with some preliminaries of the proof of the minimax
theorem. We mentioned that convex geometry plays an important role in
the von Neumann minimax theorem. Recall that:

Definition 7 A set K ⊆ Rd is convex if, for any two points a, b ∈ K, the
line segment that connects them,

                        {pa + (1 − p)b : p ∈ [0, 1]},

also lies in K.
Game theory                                                               29


   The main fact about convex sets that we will need is:

Theorem 8 (Separation theorem for convex sets) Suppose that K ⊆
Rd is closed and convex. If 0 6∈ K, then there exists z ∈ Rd and c ∈ R such
that
                                0 < c < zT v ,
for all v ∈ K.

    What the theorem is saying is that there is a hyperplane that separates
0 from K: this means a line in the plane, or a plane in R3 . The hyperplane
is given by
                           {x ∈ Rd : zT x = c}.
The theorem implies that on any continuous path from 0 to K, there is some
point that is on this hyperplane.


Proof: There is z ∈ K for which
                              v
                              u d
                              uX
                      ||z|| = t   zi2 = inf ||v||.
                                             v∈K
                                    i=1

This is because the function v 7→ ||v||, considered as K ∩ {x ∈ Rd : ||x|| ≤
R} → [0, ∞), is continuous, with its domain being a closed and bounded
set, which is non-empty if R is large enough. Therefore, the map attains its
infimum, at a point that we have called z. Since ||z|| ≤ R, there can be no
point with a lower norm that is in the part of K not in the domain of this
map.
    Now choose c = (1/2)||z||2 > 0. We have to check that c < zT v for
each v ∈ K. To do so, consider such a v. For ² ∈ (0, 1), we have that
²v + (1 − ²)z ∈ K, because z, w ∈ K and K is convex. Hence,

       ||z||2 ≤ ||²v + (1 − ²)z||2 = (²vT + (1 − ²)zT )(²v + (1 − ²)z),

the first inequality following from the fact that z has the minimum norm of
any point in K. We obtain

                 zT z ≤ ²2 vT v + (1 − ²)2 zT z + 2²(1 − ²)vT z.

Multiplying out and cancelling an ²:

                   ²(2vT z − vT v − zT z) ≤ 2(vT z − zT z).

Taking ² ↓ 0, we find that

                                0 ≤ vT z − zT z,
Game theory                                                                      30


which implies that
                                  vT z ≥ 2c > c,
as required. ¤
     The minimax theorem shows that two-person zero-sum games have a
value, in a sense we now describe. Suppose given a payoff matrix A =
(aij )m,n
      i,j=1 , with aij equal to the payment of II to I if I picks i and II picks
j. Denote by
                                                m
                                                X
                                      m
                        ∆m = {x ∈ R : xi ≥ 0,      xi = 1}
                                                 i=1
the set of all probability distributions on m values. Now, player I can assure
an expected payoff of maxx∈∆m miny∈∆n xT Ay. On the other hand, player
II can be assured of not paying more than miny∈∆n maxx∈∆m xT Ay on the
average. Having prepared some required tools, we will now prove:
Theorem 9 (von Neumann minimax)

                      max min xT Ay = min max xT Ay.
                     x∈∆m y∈∆n             y∈∆n x∈∆m

Proof: The direction

                      max min xT Ay ≤ min max xT Ay
                      x∈∆m y∈∆n            y∈∆n x∈∆m

is easy, and has the same proof as that given for pure strategies. For the
other inequality, we firstly assume that

                              min max xT Ay > 0.                                (9)
                              y∈∆n x∈∆m

Let K denote the set of payoff vectors that player II can achieve, or that
are better for player I than some such vector. That is,
               n
      K =        Ay + v = y1 A(1) + y2 A(2) + . . . + yn A(n) + v :
                                                                                  o
                   y = (y1 , . . . , yn )T ∈ ∆n , v = (v1 , . . . , vm )T , vi ≥ 0 ,

where A(i) denotes the ith column of A. It is easy to show that K is convex
and closed: this uses the fact that ∆n is closed and bounded. Note also that

                                      0 6∈ K.                                  (10)

To see this, note that (9) means that, for every y, there exists x such that
player I has a uniformly positive expected payoff xT Ay > δ > 0. If 0 ∈ K,
this means that, for some y, we have that

                   Ay = y1 A(1) + y2 A(2) + . . . + yn A(n) ≤ 0,
Game theory                                                                    31


where by ≤ 0 we mean that in each of the coordinates. However, this
contradicts (9), and proves (10).
    The separation theorem now allows us to find z ∈ Rm and c > 0 such
that 0 < c < z T w for all w ∈ K. That is, z T (Ay + v) > c > 0 for all
y ∈ ∆n , v ≥ 0, v ∈ Rm . We deduce that zi ≥ 0 by considering large and
positive choices for vi , and using z T v = z1 v1 + . . . + zm vm .PMoreover, not
all of the zi can be zero. This means that we may set s = m         i=1 zi > 0, so
                                T                         T
that x = (1/s)(z1 , . . . , zm ) = (1/s)z ∈ ∆m with x Ay > 0 for all y ∈ ∆n .
Since ∆n is closed, we also have miny∈∆n xT Ay > 0 for this x ∈ ∆m .
    We now remove the assumption (9), and suppose, playing on contradic-
tion, that
                   max min xT Ay < λ < min max xT Ay.
                  x∈∆m y∈∆n                 y∈∆n x∈∆m

Consider a new game with payoff matrix Â given by Âm×n = (âij )1≤i≤m,1≤j≤n ,
with âij = aij − λ. We find that

                   max min xT Ây < 0 < min max xT Ây.
                   x∈∆m y∈∆n                y∈∆n x∈∆m


The right hand inequality says that Â satisfies (9), so, as we saw above, we
also have maxx∈∆m miny∈∆n xT Ây > 0. But this contradicts the left hand
inequality. ¤
     The above proof shows only the existence of the minimax, but does not
tell how one can actually find it. It can be shown that finding the minimax
in general is equivalent to solving a general linear program, which is known
to be an algorithmically difficult task.

3.5    Resistor networks and troll games
Suppose that two cities, A and B, are connected by a ‘parallel-series’ network
of roads. Such a network is built by modifying an initial straight road that
runs from A to B. The modification takes the form of a finite number of
steps, these steps being of either series or parallel type. A series step is to
find a road in the current network and to replace it by two roads that run
one after the other along the current path of the road. The parallel step
consists of replacing one current road by two, each of which runs from the
start to the finish of the road being replaced.
     Imagine that each road has a cost attached to it. A troll and a traveller
will each travel from city A to city B along some route of their choice. The
traveller will pay the troll the total cost of the roads that both of them
choose.
     This is of course a zero-sum game. However, as we shall see in a minute,
it is of a quite special type, and there is a nice general way to solve such
games, as follows.
Game theory                                                                32


    We interpret the road network as an electrical one, and the costs as
resistances. Resistances add in series, whereas conductances, which are their
reciprocals, add in parallel. We claim that the optimal strategies for both
players are the same. Under the optimal strategy, a player who reaches a
fork should move along any of the edges emanating from the fork towards
B with a probability proportional to the conductance of that edge.
    A way of seeing why these games are solved like this is to introduce
the notion of two games being summed in parallel or in series. Suppose
given two zero-sum games G1 and G2 with values v1 and v2 . Their series
addition just means: play G1 , and then G2 . The series sum game has value
v1 + v2 . In the parallel-sum game, each player chooses either G1 or G2 to
play. If each picks the same game, then it is that game which is played. If
they differ, then no game is played, and the payoff is zero. We may write a
big payoff matrix as follows:

                                  II
                             I
                                        G1   0
                                        0    G2

If the two players play G1 and G2 optimally, the payoff matrix is effectively:

                                   II
                              I
                                        v1   0
                                        0    v2

The optimal strategy for each player consists of playing G1 with probability
v2 /(v1 + v2 ), and G2 with probability v1 /(v1 + v2 ). Given that
                            v1 v2          1
                                    =             ,
                           v1 + v 2   1/v1 + 1/v2

this explains the form of the optimal strategy in troll-traveller games on
series-parallel graphs.
Example: see the figure. It shows that the game on the network in the
upper left corner, with resistances all equaling to 1, has value 3/5.
    On general graphs with two distinguished vertices A, B, we need to define
the game in the following way: if the troll and the traveller traverse an
edge in the opposite directions, then the troll pays the cost of the road
to the traveller. Then the value of the game turns out to be the effective
resistance between A and B, a quantity with important meaning in several
probabilistic contexts.
Game theory                                                                                 33


                           1                           1

                                 1
                                                             3/2
                  1
                                 1

                       1


                   1       1/2
                                                           3/5


                Adding in series and parallel for the troll−traveller game



3.6     Hide-and-seek games
Games of hide and seek form another class of two-person zero-sum games
that we will analyse. For this, we need a tool:
Lemma 3 (Hall’s marriage lemma) Suppose given a set B of boys and
a set G of girls, with |B| = b and |G| = g satisfying g ≥ b. Let f : B → 2G
be such that f (c) denotes the subset of G that are the girls known to boy
c. Each boy can be matched to a girl that he knows if and only if, for each
B 0 ⊆ B, we have that |f (B 0 )| ≥ |B 0 |. (Here, the function f has been extended
to subsets B 0 of B by setting f (B 0 ) = ∪c∈B 0 f (c).)
Proof: It is clear from the definition of a matching that the existence of a
matching implies the other condition. We will prove the opposite direction
by an induction on b, the number of boys. The case when b = 1 is easy. For
larger values of b, suppose that the statement we seek is known for b0 < b.
Two cases: firstly, suppose that there exists B 0 ⊆ B satisfying |f (B 0 )| = |B 0 |
with |B 0 | < b. We perform a matching of B 0 to f (B 0 ) by using the inductive
hypothesis. If A ⊆ B \ B 0 , then |f (A) \ f (B 0 )| ≥ |A|; this is because
|f (A ∪ B 0 )| = |f (B 0 )| + |f (A) \ f (B 0 )| and |f (A ∪ B 0 )| ≥ |A ∪ B 0 | = |A| + |B 0 |
by assumption. Hence, we may apply the inductive hypothesis to the set
B \ B 0 to find a matching of this set to girls in G \ f (B 0 ). We have found a
matching of B into G as required.
    In the second case, |f (B 0 )| > |B 0 | for each B 0 ⊆ B. This case is easy:
we just match a given boy to any girl he knows. Then the set of remaining
boys still satisfies the second condition in the statement of the lemma. By
the inductive hypothesis, we match them, and we have finished the proof.
¤
   We now prove a valuable result, a version of König’s lemma, by using
Hall’s marriage lemma.
Game theory                                                                 34


Lemma 4 Consider an n × m matrix whose entries consist of 0s and 1s.
Call two 1s independent if no row nor column contain them both. A cover
of the matrix is a collection of rows and column whose union contains each
of the 1s. Then: the maximal size of a set of independent 1s is equal to the
minimal size of a cover.

Proof: Consider a maximal independent set of 1s (of size k), and a minimal
cover consisting of ` lines. That k ≤ ` is easy: each 1 in the independent
set is covered by a line, and no two are covered by the same line. For the
other direction we make use of Hall’s lemma. Suppose that among these `
lines, there are r rows and c columns. In applying Hall’s lemma, the rows
correspond to the boys and columns not in the cover to girls. A row knows
such a column if their intersection contains a 1 from the independent set.
    Suppose that j of these rows know s < j columns not in the minimal
cover. We could replace these j rows by these s columns to obtain a smaller
cover. This is impossible, meaning that every set of j rows has to know at
least j columns not in the minimal cover. By Hall’s lemma, we can match
up the r rows with columns outside the cover and known to them.
    Similarly, we obtain a 1 − 1 matching of the c columns in the cover with
c rows outside the cover. Each of the intersections of these c matched rows
and columns contains a 1. Similarly, with the r matched rows and columns
just constructed. The r + c resulting 1s are independent, hence k ≥ `. This
completes the proof. ¤
    We use König’s lemma to analyse a hide-and-seek game in a matrix.
In this game, a matrix whose entries are 0s and 1s is given. Player I chooses
a 1 somewhere in the matrix, and hides there. Player II chooses a row
or column and wins a payoff of 1 if the line that he picks contains the
location chosen by player I. A strategy for player I is to pick a maximal
independent set of 1s, and then hide in a uniformly chosen element of it.
A strategy for player II consists of picking uniformly at random one of the
lines of a minimal cover of the matrix. König’s lemma shows that this is a
joint optimal strategy, and that the value of the game is k −1 , where k is the
size of the maximal set of independent 1s.

3.7   General hide-and-seek games
We now analyse a more general version of the game of hide-and-seek. A
matrix of values (bij )n×n is given. Player II chooses a location (i, j) at
which to hide. Player I chooses a row or a column of the matrix. He wins
a payment of bij if the line he has chosen contains the hiding place of his
opponent.
   Firstly, we propose a strategy for player II, later checking that it is
optimal. The player may choose a fixed permutation π of the set {1, . . . , n}
and then hide at location (i, πi ) with a probability pi that he chooses. Given
Game theory                                                                          35


a choice π,Pthe optimal choice for pi is pi = di,πi /Dπ , where dij = b−1             ij
and Dπ = ni=1 di,πi , because it is this choice that equalizes the expected
payments. The expected payoff for the game is then 1/Dπ .
    Thus, if Player II is going to use a strategy that consists of picking a
permutation π ∗ and then doing as described, the right permutation to pick
is one that maximizes Dπ . We will in fact show that doing this is an optimal
strategy, not just in the restricted class of those involving permutations in
this way, but over all possible strategies.
    To find an optimal strategy for Player I, we need an analogue of König’s
lemma. In this context, a covering of the matrix D = (dij )n×n will be a pair
of vectors u = (u1 , . . . , un ) and w = (w1 , . . . , wn ) such that ui + wj ≥ dij for
each pair (i, j). (We assume that u and w have non-negative components).
The analogue of the König lemma:

Lemma                                   ∗  ∗
     Pn5 Consider a minimal covering (u , w ). (This means one for
which i=1 (ui + wi ) is minimal). Then:
                             n
                             X
                                   (u∗i + wi∗ ) = max Dπ .                         (11)
                                                    π
                             i=1

Proof: Note firstly that a minimal covering exists, because the map
                                          n
                                          X
                              (u, w) 7→         (ui + wi ),
                                          i=1

defined on the closed and bounded set {(u, w) : 0 ≤ ui , wi ≤ M, ui + wj ≥
dij }, where M = maxi,j di,j , does indeed attain its infimum.
     Note also that we may assume that mini u∗i > 0.
     That the left-hand-side of (11) is at least the right-hand-side is straight-
forward. Indeed, for any π, we have that u∗i + wπ∗ i ≥ di,πi . Summing over i,
we obtain this inequality.
     Showing the other inequality is harder, and requires Hall’s marriage
lemma, or something similar. We need a definition of ‘knowing’ to use
the Hall lemma. We say that row i knows column j if
                                    u∗i + wj∗ = dij .
Let’s check Hall’s condition. Suppose that k rows i1 , . . . , ik know between
them only ` < k columns j1 , . . . , j` . Define ũ from u∗ by reducing these rows
by a small amount ². Leave the other rows unchanged. The condition that
² must satisfy is in fact that
                                      ² ≤ min u∗i
                                            i

and also
            ² ≤ min {ui + wj − dij : (i, j) such that ui + wj > dij }.
Game theory                                                                  36


Similarly, define w̃ from w ∗ by adding ² to the ` columns known by the k
rows. Leave the other columns unchanged. That is, for the columns that
are changing,
                        w̃ji = wj∗i + ² for i ∈ {1, . . . , `}.
We claim that (ũ, w̃) is a covering of the matrix. At places where the equality
dij = u∗i + wj∗ holds, we have that dij = ũi + w̃j , by construction. In places
where dij < u∗i + wj∗ , then

                        ũi + w̃j ≥ u∗i − ² + wj∗ > dij ,

the latter inequality by the assumption on the value of ².
     The covering (ũ, w̃) has a strictly smaller sum of components than does
(u∗ , w∗ ), contradicting the fact that this latter covering was chosen to be
minimal.
     We have checked that Hall’s condition holds. Hall’s lemma provides a
matching of columns and rows. This is a permutation π ∗ such that, for each
i, we have that
                                u∗i + wπ∗ i = di,π(i) ,
from which it follows that
                             n
                             X             n
                                           X
                                   u∗i +         wi∗ = Dπ∗ .
                             i=1           i=1

We have found a permutation π ∗ that gives the other inequality required to
prove the lemma. ¤
     This lemma shows a pair of optimal strategies for the players. Player
I chooses row i with probability u∗i /Dπ∗ , and column j with probability
wj∗ /Dπ∗ . Against this strategy, if player II chooses some (i, j), then the
payoff will be
                         u∗i + vj∗       dij bij
                                   bij ≥         = Dπ−1
                                                      ∗ .
                            Dπ ∗          Dπ ∗
We deduce that the permutation strategy for player II described before the
lemma is indeed optimal.
Example. Consider the hide-and-seek game with payoff matrix B given by
                                      1          1/2
                                      1/3        1/5
This means that the matrix D is equal to
                                           1     2
                                           3     5
Game theory                                                                      37


To determine a minimal cover of the matrix D, consider first a cover that has
all of its mass on the rows: u = (2, 5) and v = (0, 0). Note that rows 1 and
2 know only column 2, according to the definition of ‘knowing’ introduced
in the analysis of this game. Modifying the vectors u and v according to
the rule given in this analysis, we obtain updated vectors, u = (1, 4) and
v = (0, 1), whose sum is 6, equal to the expression maxπ Dπ (obtained by
choosing the permutation π = id.)
    An optimal strategy for the hider is to play p(1, 1) = 1/6 and p(2, 2) =
5/6. An optimal strategy for the seeker consists of playing q(row1) = 1/6,
q(row2) = 2/3 and q(col2) = 1/6. The value of the game is 1/6.

3.8    The bomber and submarine game
In the bomber and submarine game, a submarine is located at a site in Z
at any given time step in {0, 1, . . .}, and moves either left or right for the
next time step. In the game Gn , the bomber drops one bomb at some time
j ∈ {0, 1, . . . , n} at some site in Z. The bomb arrives at time j + 2, and
destroys the submarine if it hits the right site. What is the value of the
game Gn ? The answer depends on n. The value of G0 is 1/3, because the
submarine may ensure that it has a 1/3 probability of being at any of the
sites −2,0 or 2 at time 2. It moves left or right with equal probability at
the first time step, and then turns with probability of 1/3. The value of
1/3 for the game G1 can be obtained by pursuing the above strategy. We
have already decided how the submarine should move in the first two time
steps. If the submarine is at 1 at time 1, then it moves to 2 at time 2 with
probability 2/3. Thus, it should move with probability 1/2 to each of sites
1 or 3 at time 2 if it is at site 2 at that time, to ensure a value of 1/3 for G 1 .
This forces it to move from site 0 to site 1 with probability 1, if it visited
site 1 at time 1. Obtaining the same values in the symmetric case where the
submarine moves through site −1 at time 1, we obtain a strategy for the
submarine that ensures that it is hit with a maximum probability of 1/3 in
G1 .
     It is impossible to pursue this strategy to obtain a value of 1/3 for the
game G2 . Indeed, v(G2 ) > 1/3. We now describe Isaac’s strategy for the
game. It is not optimal in any given game Gn , but it does have the merit
of having the same limiting value, as n → ∞, as optimal play. In G0 , the
strategy is as shown:
     The rule in general is: turn with a probability of 1 − a, and keep going
with a probability of a. The strategy is simple in the sense that the transi-
tion rates in any 2-play subtree of the form in the figure has the transition
rates shown there, or its mirror image. We now choose a to optimize the
probability of evasion for the submarine. Its probabilities of arrival at sites
−2,0 or 2 at time 2 are a2 , 1 − a and a(1 − a). We have to choose a so that
max{a2 , 1 − a} is minimal. This value is achieved when a2 = 1 − a, whose
Game theory                                                                38



                                                  1−a
                              a

                                  1−a       1−a         a
                     a




                                         √
solution in (0, 1) is given by a = 2/(1 + 5).
    The payoff for the bomber against this strategy is at most 1 − a. We
have proved that the value v(Gn ) of the game Gn is at most 1 − a, for each
n.

3.9   A further example
Consider the zero sum game whose payoff matrix is given by:
                                  II
                              I
                                        1   0     8
                                        2   3     -1
To solve this game, firstly, we search for saddle points — a value in the
matrix that is maximal in its column and minimal in its row. None exist in
this case. Nor are there any evident dominations of rows or columns.
    Suppose then that player I plays the mixed strategy (p, 1 − p). If there
is an optimal strategy for player II in which she plays each of her three pure
strategies with positive probability, then

                          2 − p = 3 − 3p = 9p − 1.

No solution exists, so we consider now mixed strategies for player II in
which one pure strategy is never played. If the third column has no weight,
then 2 − p = 3 − 3p implies that p = 1/2. However, the entry 3 in the matrix
becomes a saddle point in the 2 × 2 matrix formed by eliminating the third
column, which is not consistent with p = 1/2.
    Consider instead strategies supported on columns 1 and 3. The equality
2 − p = 9p − 1 yields p = 3/10, giving a payoff for player II of
                           ³                    ´
                             17/10, 27/10, 17/10 .

If player II plays column 1 with probability x and column 3 otherwise, then
player I sees the payoff vector (8 − 7x, 3x − 1). These quantities are equal
when x = 9/10, so that player I sees the payoff vector (17/10, 17/10). Thus,
the value of the game is 17/10.
Game theory                                                                    39


4     General sum games
We now turn to discussing the theory of general sum games. Such a game
is given in strategic form by two matrices A and B, whose entries give the
payoffs of given joint pure strategies to each of the two players. Usually there
is no joint optimal strategy for the players, but still exists a generalization of
the von Neumann minimax, the so-called Nash equilibrium. These equilibria
give the strategies that “rational” players could follow. However, there are
often several Nash equilibria, and in choosing one of them, some degree
of cooperation between the players may be optimal. Moreover, a pair of
strategies based on cooperation might be better for both players than any
of the Nash equilibria. We begin with two examples.

4.1    Some examples
Example: the prisoner’s dilemma. Two suspects are held and ques-
tioned by police who ask each of them to confess or to remain silent. The
charge is serious, but the evidence held by the police is poor. If one confesses
and the other is silent, then the first goes free, and the other is sentenced to
ten years. If both confess, they will each spend eight years in prison. If both
remain silent, one year to each is the sentence, for some minor crime that
the police is able to prove. Writing the payoff as the number of years that
remain in the following decade apart from those spent in prison, we obtain
the following payoff matrix:

                                 II   S        C
                             I
                             S        (9,9)    (0,10)
                             C        (10,0)   (2,2)

     The pay-off matrices for players I and II are the 2 × 2 matrices given by
the collection of first, or second, entries in each of the vectors in the above
matrix.
     If the players only play one round, then there is an argument involving
domination saying that each should confess: the outcome she secures by
confessing is preferable to the alternative of remaining silent, whatever the
behaviour of the other player. However, this outcome is much worse for
each player than the one achieved by both remaining silent. In a once-only
game, the ‘globally’ preferable outcome of each remaining silent could only
occur were each player to suppress the desire to achieve the best outcome in
selfish terms. In games with repeated play ending at a known time, the same
applies, by an argument of backward induction. In games with repeated play
ending at a random time, however, the globally preferable solution may arise
even with selfish play.
Game theory                                                                40


Example: the battle of the sexes. The wife wants to head to the
opera but the husband yearns instead to spend an evening watching baseball.
Neither is satisfied by an evening without the other. In numbers, player I
being the wife and II the husband, here is the scenario:

                                 II   O       B
                             I
                             O        (4,1)   (0,0)
                             B        (0,0)   (1,4)

One might naturally come up with two modifications of von Neumann’s min-
imax. The first one is that the players do not suppose any rationality about
their partner, so they just want to assure a payoff assuming the worst-case
scenario. Player I can guarantee a safety value of maxp∈∆2 minq∈∆2 pT Aq,
where A denotes the matrix of payoffs received by her. This gives the strat-
egy (1/5, 4/5) for her, with an assured payoff 4/5, which value actually does
not depend on what player II does. The analogous strategy for player II
is (4/5, 1/5), with the same assured payoff 4/5. Note that these values are
lower than what each player would get from just agreeing to go where the
other prefers.
    The second possible adaptation of the minimax approach is that player I
announces her value p, expecting player II to maximize his payoff given this
p. Then player I maximizes the result over p. However, in contrast to the
case of zero-sum games, the possibility of announcing a strategy and com-
mitting to it in a general-sum game might actually raise the payoff for the
announcer, and hence it becomes a question how a model can accommodate
this possibility. In our game, each player could just announce their favorite
choice, and to expect their spouse to behave “rationally” and agree with
them. This leads to a disaster, unless one of them manages to make this
announcement before the spouse does, and the spouse truly believes that
this decision is impossible to change, and takes the effort to act rationally.
    In this example, it is quite artificial to suppose that the two players
cannot discuss, and that there are no repeated plays. Nevertheless, this
example shows clearly that a minimax approach is not suitable any more.

4.2   Nash equilibrium
We now introduce a central notion for the study of general sum games:

Definition 8 (Nash equilbrium) A pair of vectors (x∗ , y ∗ ) with x∗ ∈ ∆m
and y ∗ ∈ ∆n define a Nash equilibrium, if no player gains by deviating
unilaterally from it. That is,

                              x∗ T Ay ∗ ≥ xT Ay ∗
Game theory                                                                      41


for all x ∈ ∆m , and
                                   x∗ T By ∗ ≥ x∗ T By
for all y ∈ ∆n . The game is called symmetric if m = n and Aij = Bji
for all i, j ∈ {1, 2, . . . , n}. A pair (x, y) of strategies is called symmetric if
xi = yi for all i = 1, . . . , n.

    We will see that there always exists a Nash equilibrium; however, there
can be many of them. If x and y are unit vectors, with a 1 in some coordinate
and 0 in the others, then the equilibrium is called pure.
    In the above example of the battle of the sexes, there are two pure equi-
libria: these are BB and OO. There is also a mixed equilibrium, (4/5, 1/5)
for player I and (1/5, 4/5) for II, having the value 4/5, which is very low,
again.
Example: lions, cheetahs and antelopes. Antelopes have been observed
to jump energetically when a lion nearby seems liable to hunt them. Why
do they expend energy in this way? One theory was that the antelopes
are signalling danger to others at some distance, in a community-spirited
gesture. However, the antelopes have been observed doing this all alone.
The currently accepted theory is that the signal is intended for the lion, to
indicate that the antelope is in good health and is unlikely to be caught in
a chase. Another justification of this explanation is that the antelopes do
not jump when cheetahs are approaching, but start running as fast as they
can. Being healthy is only a necessary, not a sufficient condition to escape
from a cheetah.
    Consider a simple model, where two cheetahs are giving chase to two
antelopes. The cheetahs will catch any antelope they choose. If they choose
the same one, they must share the spoils. If they catch one without the other
cheetah doing likewise, the catch is unshared. There is a large antelope and
a small one, that are worth ` and s to the cheetahs. Here is the matrix of
payoffs:
                              II    L            S
                          I
                          L         (`/2, `/2)   (`, s)
                          S         (s, `)       (s/2, s/2)
If ` ≥ 2s, the first row dominates the second, and likewise, the columns;
hence each cheetah should just chase the larger antelope. If s < ` < 2s,
then there are two pure Nash equilibria, (L,S) and (S,L). These pay off
quite well for both cheetahs — but how would two healthy cheetahs agree
which should chase the smaller antelope? Therefore it makes sense to look
for symmetric mixed equilibria.
    If the first cheetah chases the large antelope with probability x, then
the expected payoff to the second cheetah by chasing the larger antelope is
Game theory                                                                42


equal to
                               `
                                 x + (1 − x)`,
                              2
and that arising from chasing the smaller antelope is
                                           s
                               xs + (1 − x) .
                                           2
A mixed Nash equilibrium arises at that value of x for which these two
quantities are equal, because, at any other value of x, player II would have
cause to deviate from the mixed strategy (x, 1 − x) to the better of the pure
strategies available. We find that
                                      2` − s
                                 x=          .
                                       `+s
This actually yields a symmetric mixed equilibrium.
    Symmetric mixed Nash equilibria are of particular interest. It has been
experimentally verified that in some biological situations, systems approach
such equilibria, presumably by mechanisms of natural selection. We explain
briefly how this might work. First of all, it is natural to consider symmetric
strategy pairs, because if the two players are drawn at random from the
same large population, then the probabilities with which they follow a par-
ticular strategy are the same. Then, among symmetric strategy pairs, Nash
equilibria play a special role. Consider the above mixed symmetric Nash
equilibrium, in which x0 = (2` − s)/(` + s) is the probability of chasing the
large antelope. Suppose that a population of cheetahs exhibits an overall
probability x > x0 for this behavior (having too many greedy cheetahs, or
every single cheetah being slightly too greedy). Now, if a particular cheetah
is presented with a competitor chosen randomly from this population, then
chasing the small antelope has a higher expected payoff to this particular
cheetah than chasing the large one. That is, the more modest a cheetah
is, the larger advantage it has over the average cheetah. Similarly, if the
cheetah population is too modest on the average, i.e., x < x0 , then the more
ambitious cheetahs have an advantage over the average. Altogether, the
population seems to be forced by evolution to chase antelopes according to
the symmetric mixed Nash equilibrium.
Example: the game of chicken. Two drivers speed head-on toward each
other and a collision is bound to occur unless one of them chickens out at
the last minute. If both chicken out, everything is okay (they both win 1).
If one chickens out and the other does not, then it is a great success for
the player with iron nerves (payoff= 2) and a great disgrace for the chicken
(payoff= −1). If both players have iron nerves, disaster strikes (both lose
some big value M ).
    We solve the game of chicken. Write C for the strategy of chickening
out, D for driving forward. The pure equilibria are (C, D) and (D, C). To
Game theory                                                                 43


determine the mixed equilibria, suppose that player I plays C with proba-
bility x and D with probability 1 − x. This presents player II with expected
payoffs of 2x − 1 if she plays C, and (M + 2)x − M if she plays D. We seek
an equilibrium where player II has positive weight on each of C and D, and
thus one for which
                           2x − 1 = (M + 2)x − M.
That is, x = 1−1/M . The payoff for player to is 2x−1, which equals 1−2/M .
Note that, as M increases to infinity, this symmetric mixed equilibrium gets
concentrated on (C, C), and the expected payoff increases up to 1.
     There is an abstract paradox here. We have a symmetric game with pay-
off matrices A and B that has a unique symmetric equilibrium with payoff
γ. By replacing A and B by smaller matrices Ã and B̃, we obtain a payoff
γ̃ in a unique symmetric equilibrium that exceeds γ. This is impossible in
zero-sum games.
     However, if the decision of each player gets switched randomly with
some small but fixed probability, then letting M → ∞ does not yield total
concentration on the strategy pair (C, C).
     Furthermore, this is again a game in which the possibility of a binding
commitment increases the payoff. If one player rips out the stirring wheel
and throws it out of the car, then he makes it impossible to chicken out. If
the other player sees this and believes her eyes, then she has no other choice
but to chicken out.
One more example. In the battle of sexes and the game of chicken, mak-
ing a binding commitment pushed the game into a pure Nash equilibrium,
and the nature of that equilibrium strongly depended on who managed to
commit first. In the game of chicken, the payoff for the one who did not
make the commitment was lower than the payoff in the unique mixed Nash
equilibrium, while, in the battle of sexes, it was higher. Here is an exam-
ple where there is no pure equilibrium, only a unique mixed one, and both
commitment strategy pairs have the property that the player who did not
make the commitment still gets the Nash equilibrium payoff.
                              II   C          D
                          I
                          A        (6, −10)   (0, 10)
                          B        (4, 1)     (1, 0)
In this game, there is no pure Nash equilibrium (one of the players always
prefers another strategy, in a cyclic fashion). For mixed strategies, if player
I plays (A, B) with probabilities (p, 1 − p), and player II plays (C, D) with
probabilities (q, 1−q), then the expected payoffs are f (p, q) = 1+3q−p+3pq
for I and g(p, q) = 10p + q − 21pq for II. We easily get that the unique
mixed equilibrium is p = 1/21 and q = 1/3, with payoffs 2 for I and 10/21
for II. If I can make a commitment, then by choosing p = 1/21 − ² for
Game theory                                                                                                          44


some small ² > 0 he will make II choose q = 1, and the payoffs will be
4 + 2/21 − 2² for I and 10/21 + 11² for II. If II can make a commitment,
then by choosing q = 1/3 + ² she will make I choose p = 1, and the payoffs
will be 2 + 6² for I and 10/3 − 11² for II.

4.3      General sum games with k ≥ 2 players
It does not make sense to talk about zero-sum games when there are more
than two players. The notion of a Nash equilibrium, however, can be used
in this context. We now describe formally the set-up of a game with k ≥ 2
players. Each player i has a set Si of pure strategies. If, for each i ∈
{1, . . . , k}, player i uses strategy li ∈ Si , then player j has a payoff of
Fj (l1 , . . . , lk ), where we are given functions Fj : S1 × S2 × . . . × Sk → R, for
j ∈ {1, . . . , k}.
Example: an ecology game. Three firms will either pollute a lake in
the following year, or purify it. They pay 1 unit to purify, but it is free to
pollute. If two or more pollute, then the water in the lake is useless, and each
firm must pay 3 units to obtain the water that they need from elsewhere. If
at most one firm pollutes, then the water is usable, and the firms incur no
further costs. Assuming that firm III purifies, the cost matrix is:
                                          II       Pu             Po
                                        I
                                        Pu         (1,1,1)        (1,0,1)
                                        Po         (0,1,1)        (3,3,3+1)
If firm III pollutes, then it is:
                                        II      Pu                   Po
                                      I
                                      Pu        (1,1,0)              (3+1,3,3)
                                      Po        (3,3+1,3)            (3,3,3)
    To discuss the game, we firstly introduce the notion of Nash equilibrium
in the context of games with several players:

Definition 9 A pure Nash equilibrium in a k-person game is a set of
pure strategies for each of the players,
                                       (l1∗ , . . . , lk∗ ) ∈ S1 × . . . × Sk
such that, for each j ∈ {1, . . . , k} and lj ,
         Fj (l1∗ , . . . , lj−1
                            ∗           ∗
                                , lj , lj+1 , . . . , lk∗ ) ≤ Fj (l1∗ , . . . , lj−1
                                                                                 ∗
                                                                                     , lj∗ , lj+1
                                                                                              ∗
                                                                                                  , . . . , lk∗ ).
More generally, a mixed Nash equilibrium is a collection of k probability
vectors X̃ i , each of length |Si |, such that
Fj (X̃ 1 , . . . , X̃ j−1 , X, X̃ j+1 , . . . , X̃ k ) ≤ Fj (X̃ 1 , . . . , X̃ j−1 , X̃ j , X̃ j+1 , . . . , X̃ k ),
Game theory                                                                                 45


for each probability vector X of length |Sj |. We have written:
                                      X
     Fj (X 1 , X 2 , . . . , X k ) :=     X 1 (l1 ) . . . X k (lk )Fj (l1 , . . . , lk ).
                                     l1 ∈S1 ,...,lk ∈Sk

Definition 10 A game is symmetric if, for every i0 , j0 ∈ {1, . . . , k}, there
is a permutation π of the set {1, . . . , d} such that π(i0 ) = j0 and

                        Fπ(i) (lπ(1) , . . . , lπ(k) ) = Fi (l1 , . . . , lk ).

For this definition to make sense, we are in fact requiring that the strategy
sets of the players coincide.

    We will prove the following result:

Theorem 10 (Nash’s theorem) Every game has a Nash equilibrium.

    Note that the equilibrium may be mixed.

Corollary 1 In a symmetric game, there is a symmetric Nash equilibrium.

     Returning to the ecology game, note that the pure equilibria consist of
each firm polluting, or one of the three firms polluting, and the remaining
two purifying. We now seek mixed equilibria. Let x, y, z be the probability
that firm I, II, III purifies, respectively. If firm III purifies, then its ex-
pected cost is xy + x(1 − y) + y(1 − x) + 4(1 − x)(1 − y). If it pollutes, then
the cost is 3x(1 − y) + 3y(1 − x) + 3(1 − x)(1 − y). If we want an equilibrium
with 0 < z < 1, then these two expected values must coincide, which gives
the equation 1 = 3(x + y − 2xy). Similarly, assuming 0 < y < 1 we get
1 = 3(x + z − 2xz), and assuming 0 < x < 1 we get 1 = 3(y + z − 2yz). Sub-
tracting the second equation from the first one we get 0 = 3(y − z)(1 − 2x).
If y = z, then the
                 √ third equation becomes quadratic in y, with two solutions,
y = z = (3 ± 3)/6, both in (0, 1). Substituting these solutions into the
first equation, both yield x = y = z, so there are two symmetric mixed equi-
libria. If, instead of y = z, we let x = 1/2, then the first equation becomes
1 = 3/2, which is nonsense. This means that there is no asymmetric equilib-
rium with at least two mixed strategies. It is easy to check that there is no
equilibrium with two pure and one mixed strategy. Thus we have found all
Nash equilibria: one symmetric and three asymmetric pure equilibria, and
two symmetric mixed ones.

4.4     The proof of Nash’s theorem
Recall Nash’s theorem:
Theorem 11 For any general sum game with k ≥ 2 players, there exists at
least one Nash equilibrium.
Game theory                                                                  46


    To prove this theorem, we will use:

Theorem 12 (Brouwer’s fixed point theorem) If K ⊆ Rd is closed,
convex and bounded, and T : K → K is continuous, then there exists x ∈ K
such that T (x) = x.

Remark. We will prove this fixed point theorem later, but observe now
that it is easy in dimension d = 1, when K is just a closed interval [a, b].
Defining f (x) = T (x) − x, note that T (a) ≥ a implies that f (a) ≥ 0, while
T (b) ≤ b implies that f (b) ≤ 0. The intermediate value theorem assures the
existence of x ∈ [a, b] for which f (x) = 0, and thus, so that T (x) = x. Note
also that each of the hypotheses on K in the theorem are required. Consider
T : R → R given by T (x) = x + 1, as well as T : (0, 1) → (0, 1) given by
T (x) = x/2, and also, T : {z ∈ C : |z| ∈ [1, 2]} → {z ∈ C : |z| ∈ [1, 2]} given
by T (x) = x exp(iπ/2).
Proof of Nash’s theorem using Brouwer’s theorem. Suppose that
there are two players and the game is specified by payoff matrices Am×n
and Bm×n for players I and II. We will define a map F : K → K (with
K = ∆m × ∆n ) from a pair of strategies for the two players to another such
pair. Note firstly that K is convex, closed and bounded. Define, for x ∈ ∆m
and y ∈ ∆n ,
                                        X
                 ci (x, y) = ci = max {   aij yj − xT Ay , 0}.
                                           j


Or, ci = max {Ai y − xT Ay , 0}, where Ai denotes the ith row of the matrix
A. That is, ci is equal to the gain for player I obtained by switching from
strategy x to pure strategy i, if this gain is positive: otherwise, it is zero.
Similarly, we define

                   dj (x, y) = dj = max {xT B (j) − xT By , 0},

where B (j) denotes the j-th column of B. The quantities dj have the same
interpretation for player II as the ci do for player I. We now define the map
F ; it is given by F (x, y) = (x̃, ỹ), where
                                         xi + c i
                               x̃i =
                                       1+ m
                                          P
                                             k=1 ck

for i ∈ {1, . . . , m}, and
                                          yj + d j
                               ỹj =
                                       1 + nk=1 dk
                                           P

for j ∈ {1, . . . , n}. Note that F is continuous, because ci and bj are. Ap-
plying Brouwer’s theorem, we find that there exists (x, y) ∈ K for which
(x, y) = (x̃, ỹ). We now claim that, for this choice of x and y, each ci = 0
Game theory                                                                           47


for i ∈ {1, . . . , m}, and dj = 0 for j ∈ {1, . . . , n}. To see this, suppose,
for example, thatP     c1 > 0. Note that the current payoff of player I is a
weighted average m      i=1 xi Ai y. There must exists i ∈ {1, . . . , m} for which
xT Ay ≥ Ai y, and xi > 0. For this i, we have that ci = 0. This implies that
                                         xi + c i
                               x̃i =                < xi ,
                                       1+ m
                                          P
                                             k=1 ck

because c1 > 0. That is, the assumption that c1 > 0 has brought a contra-
diction.
    We may repeat this argument for each i ∈ {1, . . . , m}, thereby proving
that each ci = 0. Similarly, each dj = 0. We deduce that xT Ay ≥ Ai y for
all i ∈ {1, . . . , m}. This implies that
                                                   T
                                     xT Ay ≥ x0 Ay

for all x0 ∈ ∆m . Similarly,

                                     xT By ≥ xT By 0

for all y 0 ∈ ∆n . Thus, (x, y) is a Nash equilibrium. ¤
    For k > 2 players, we still can consider the functions
                       (j)
                     ci (x(1) , . . . , x(k) )   for i, j = 1, . . . , k,
                                                                            (j)
where x(j) ∈ ∆n(j) is a mixed strategy for player j, and ci is the gain for
player j obtained by switching from strategy x(j) to pure strategy i, if this
                                                   (j)
gain is positive. The simple matrix notation for ci is lost, but the proof
carries over.
    We also stated that in a symmetric game, there is always a symmetric
Nash equilibrium. This also follows from the above proof, by noting that
the map F , defined from the k-fold product ∆n × . . . × ∆n to itself, can be
restricted to the diagonal

                         D = {(x, . . . , x) ∈ ∆kn : x ∈ ∆n }.

The image of D under F is again in D, because, in a symmetric game,
 (1)                         (k)
ci (x, . . . , x) = . . . = ci (x, . . . , x) for all i = 1, . . . , k and x ∈ ∆n . Then,
Brouwer’s fixed point theorem gives us a fixed point within D, which is a
symmetric Nash equilibrium.

4.4.1    Some more fixed point theorems
We will discuss some fixed point theorems, beginning with:
Game theory                                                                         48


Theorem 13 (Banach’s fixed point theorem) Let K be a complete met-
ric space. Suppose that T : K → K satisfies d(T x, T y) ≤ λd(x, y) for all
x, y ∈ K, with 0 < λ < 1 fixed. Then T has a unique fixed point in K.

Note: Recall that a metric space is complete if each Cauchy sequence
therein converges to a point in the space. Consider the metric space being
a subset of Rd and the metric d being Euclidean distance if you are not
familiar with these definitions.
Proof. Uniqueness of the fixed point: if T x = x and T y = y, then

                         d(x, y) = d(T x, T y) ≤ λd(x, y).

Thus, d(x, y) = 0, and x = y. As for existence, given any x ∈ K, we define
xn = T xn−1 for each n ≥ 1, setting x0 = x. Set a = d(x0 , x1 ), and note that
d(xn , xn+1 ) ≤ λn a. If k > n, then
                                                                                 aλn
 d(xk , xn ) ≤ d(xn , xn+1 ) + . . . + d(xk−1 , xk ) ≤ a(λn + . . . + λk−1 ) ≤       .
                                                                                 1−λ
This implies that {xn : n ∈ N} is a Cauchy sequence. The metric space K
is complete, whence xn → z as n → ∞. Note that

d(z, T z) ≤ d(z, xn ) + d(xn , xn+1 ) + d(xn+1 , T z) ≤ (1 + λ)d(z, xn ) + λn a → 0

as n → ∞. Hence, d(T z, z) = 0, and T z = z. ¤
Example regarding Banach’s fixed point theorem. Consider the map
T : R → R given by
                                     1
                    T (x) = x +            .
                                1 + exp(x)
Note that, if x < y, then
                                  1            1
               T (x) − x =              >            = T (y) − y,
                             1 + exp(x)   1 + exp(y)
implying that T (y) − T (x) < y − x. Note also that
                                           exp(−x)
                         T 0 (x) = 1 −                   > 0,
                                         (1 + exp(x))2
so that T (y) − T (x) > 0. Thus, T decreases distances, but it has no fixed
point. This is not a counterexample to Banach’s fixed point theorem, how-
ever, because there does not exist any λ ∈ (0, 1) for which |T (x) − T (y)| <
λ|x − y| for all x, y ∈ R.

Theorem 14 (Compact fixed point theorem) If X is a compact met-
ric space and T : X → X satisfies |T (x) − T (y)| < λ|x − y| for all x, y ∈ X,
x 6= y, then T has a fixed point.
Game theory                                                                       49


Proof. Let f : X → X be given by f (x) = d(T x, x). Note that f is
continuous:
  |f (x) − f (y)| ≤ |d(x, T x) − d(y, T y)| ≤ d(x, y) + d(T x, T y) ≤ 2d(x, y),
where the first inequality followed from two applications of the triangle in-
equality. By the compactness of X, there exists x0 ∈ X such that
                                 f (x0 ) = inf f (x).                        (12)
                                              x∈X

If T x0 6= x0 , then d(x, T x0 ) > d(T x0 , T 2 x0 ), contradiction (12). Thus im-
plies that T x0 = x0 . ¤


4.4.2   Sperner’s lemma
We now state and prove a tool to be used in the proof of Brouwer’s fixed
point theorem.
Lemma 6 (Sperner) In d = 1: suppose that the unit interval is subdivided
0 = t0 < t1 < . . . < tn = 1, with each ti being marked zero or one, t0
marked zero and t1 marked one. Then the number of adjacent pairs (tj , tj+1 )
with different markings is odd. In d = 2: subdivide a triangle into smaller

                                              2

                                 1
                                          1       1       2
                             2
                                                              0
                                              2
                     1       1                                    2
                                      0
                                                      2
                                                              2
                1        0
                                                  0
                                                                      0

                    Figure 1: Sperner’s lemma when d = 2.

triangles in such a way that a vertex of any of the small triangles may not lie
in the interior of an edge of another. Label the vertices of the small triangles
0, 1 or 2: the three vertices of the big triangle must be labelled 0,1 and 2;
vertices of the small triangles that lie on an edge of the big triangle must
receive the label of one of the endpoints of that edge. Then the number of
small triangles with three differently labeled vertices is odd; in particularly,
it is non-zero.
Game theory                                                                 50


Remark. Sperner’s lemma holds in any dimension. In the general case d, we
replace the triangle by a d-simplex, use d labels, with analogous restrictions
on the labels used.
Proof. For d = 1, this is obvious. For d = 2, we will count in two ways
the set Q of pairs of a small triangle and an edge on that triangle. Let A 12
denote the number of 12 type edges in the boundary of the big triangle.
Let B12 be the number of such edges in the interior. Let Nabc denote the
number of triangles where the three labels are a, b and c. Note that

                    N012 + 2N112 + 2N122 = A12 + 2B12 ,

because each side of this equation is equal to the number of pairs of triangle
and edge, where the edge is of type (12). From the case d = 1 of the lemma,
we know that A12 is odd, and hence N012 is odd, too. (In general, we may
induct on the dimension, and use the inductive hypothesis to find that this
quantity is odd.) ¤

Corollary 2 (No retraction theorem) Let K ⊆ Rd be compact and con-
vex, and with non-empty interior. There is no continuous map f : K → ∂K
whose restriction to ∂K is the identity.

Proof for d = 2. Firstly, we show that it suffices to take K = ∆, where
∆ is an equilateral triangle. For, we may locate x ∈ K such that there
exists a small triangle centered at x and contained in K, because K has a
non-empty interior. We call this triangle ∆ for convenience. Construct a
map h : K → ∆ as follows. For each y ∈ ∂K, define h(y) to be equal to that
element of ∂∆ that the line segment from x through y intersects. Setting
h(x) = x, define h(z) for other z ∈ K by a linear interpolation of the values
h(x) and h(q), where q is the element of ∂K lying on the line segment from
x through z.
    Note that, if F : K → ∂K is a retraction from K to ∂K, then h◦F ◦h−1 :
∆ → ∂∆ is a retraction of ∆. This is the reduction we claimed.
    Now suppose that F∆ : ∆ → ∂∆ is a retraction of the equilateral triangle
with sidelength 1. Since F = F∆ is continuous and ∆ is compact, there exists
                                                                           √
δ > 0 such that x, y ∈ ∆ satisfying |x−y| < δ also satisfy |f (x)−f (y)| < 43 .
    Label the three vertices of ∆ by 0, 1, 2. Triangulate ∆ into triangles of
sidelength less than δ. In this subdivision, label any vertex x according to
the label of the label of the vertex of ∆ nearest to F (x), with an arbitrary
choice being made to break ties.
    By Sperner’s lemma, there exists a small triangle√ whose vertices are
labelled 0, 1, 2. The condition that |f (x) − f (y)| < 43 implies that any
pair of these vertices must be mapped under F to interior points of one of
the side of ∆, with a different side of ∆ for each pair. This is impossible,
implying that no retraction of ∆ exists. ¤
Game theory                                                                   51


Note. As we already remarked in the Introduction, Brouwer’s fixed point
theorem fails if the convexity assumption is completely omitted. This is
also true for the above corollary. However, the main property of K that
we used was not convexity; it is enough if there is a homeomorphism (a 1-1
continuous map with continuous inverse) between K and ∆.

4.4.3    Proof of Brouwer’s fixed point theorem
Recall that we are given a continuous map T : K → K, with K a closed,
bounded and convex set. Suppose that T has no fixed point. Then we can
define a continuous map F : K → ∂K as follows. For each x ∈ K, we draw
a ray from T (x) through x until it meets ∂K. We set F (x) equal to this
point of intersection. If T (x) ∈ ∂K, we set F (x) equal that intersection
point of the ray with ∂K which is not equal to T (x). E.g., in the case of
the domain K = {(x, y) ∈ R2 : x2 + y 2 ≤ 1}, the map F may be written
explicitly in terms of T . With some checking, it follows that F : K → ∂K
is continuous. Thus, F is a retraction of K — but this contradicts the No
Retraction Theorem, so T must have a fixed point. ¤

4.5     Some further examples
Example: the fish-selling game. Fish being sold at the market is fresh
with probability 2/3 and old otherwise, and the customer knows this. The
seller knows whether the particular fish on sale now is fresh or old. The
customer asks the fish-seller whether the fish is fresh, the seller answers,
and then the customer decides to buy the fish, or to leave without buying it.
The price asked for the fish is $12. It is worth $15 to the costumer if fresh,
and nothing if it is old. The seller bought the fish for $6, and if it remains
unsold, then he can sell it to another seller for the same $6 if it is fresh, and
he has to throw it out if it is old. On the other hand, if the fish is old, the
seller claims it to be fresh, and the customer buys it, then the seller loses
$R in reputation.

                               F                   O

                    "F"                      "F"            "O"

             B            L           B       L           B         L

           (6, 3)     (0, 0)       (6−R, −12) (−6, 0)   (6, −12)   (−6, 0)


             Figure 2: The Kuhn tree for the fish-selling game.
Game theory                                                                                      52


    The tree of all possible scenarios, with the net payoffs shown as (seller,customer),
is depicted in the figure. This is called the Kuhn tree of the game.
    The seller clearly should not say ”old” if the fish is fresh, hence we should
examine two possible pure strategies for him: ”FF” means he always says
”fresh”; ”FO” means he always tells the truth. For the customer, there are
four ways to react to what he might hear. Hearing ”old” means that the
fish is indeed old, so it is clear that he should leave in this case. Thus two
rational strategies remain: BL means he buys the fish if he hears ”fresh”
and leaves if he hears ”old”; LL means he just always leaves. Here are
the expected payoffs for the two players, with randomness coming from the
actual condition of the fish.
                                 C         BL                  LL
                               S
                               ”FF”        (6-R/3,-2)          (-2,0)
                               ”FO”        (2,2)               (-2,0)

We see that if losing reputation does not cost too much in dollars, i.e.,
if R < 12, then there is only one pure Nash equilibrium: ”FF” against
LL. However, if R ≥ 12, then the (”FO”,BL) pair also becomes a pure
equilibrium, and the payoff for this pair is much higher than for the other
equilibrium.

4.6    Potential games
We now discuss a collection of games called potential games, which are k-
player general sum games that have a special feature. Let Fi (s1 , s2 , . . . , sk )
denote the payoff to player i if the players adopt the pure strategies s 1 , s2 ,
. . ., sk , respectively. In a potential game, there is a function ψ : S1 × . . . ×
Sk → R, defined on the product of the players’ strategy spaces, such that

                    Fi (s1 , . . . , si−1 , s̃i , si+1 , . . . , sk ) − Fi (s1 , . . . , sk )
               = ψ(s1 , . . . , si−1 , s̃i , si+1 , . . . , sk ) − ψ(s1 , . . . , sk ),         (13)

for each i. We assume that each Si is finite. We call the function ψ the
potential function associated with the game.
Example of a potential game: a simultaneous congestion game. In
this sort of game, the cost of using each road depends on the number of
users of the road. For the road AC, it is li if there are i users, for i ∈ {1, 2},
in the case of the game depicted in the figure. Note that the cost paid by a
given driver depends only on the number of users, not on which user she is.
Game theory                                                                     53


          A              (l1 , l2 )          C


           (m1 , m2 )                   (n1 , n2 )

                         (r1 , r2 )
          B                                  D

     More generally, for k drivers, we may define R-valued map C on the
product space of the road-index set and the set {1, . . . , k}, so that C(j, uj )
is equal to the cost incurred by any driver using road j in the case that
the total number of drivers using this road is equal to uj . Note that the
strategy vector s = (s1 , s2 , . . . , sk ) determines the usage of each road. That
is, it determines ui (s) for each i ∈ {1, . . . k}, where
               ¯n                                                            o¯
      ui (s) = ¯ j ∈ {1, . . . , k} : player j uses road i under strategy sj ¯,
               ¯                                                               ¯

for i ∈ {1, . . . , R} (with R being the number of roads.)
    In the case of the game depicted in the figure, we suppose that two
drivers, I and II, have to travel from A to D, or from B to C, respectively.
    In general, we set
                                                     r (s)
                                                  R uX
                                                  X
                        ψ(s1 , . . . , sk ) = −              C(r, l).
                                                  r=1 l=1

We claim that ψ is a potential function for such a game. We show why this
is so in the specific example. Suppose that driver 1, using roads 1 and 2,
makes a decision to use roads 3 and 4 instead. What will be the effect on
her cost? The answer is a change of
     ³                                      ´ ³                           ´
       C(3, u3 (s) + 1) + c3 (4, u4 (s) + 1) − C(1, u1 (s)) + C(2, u2 (s)) .

How did the potential function change as a result of her decision? We find
that, in fact,

ψ(s) − ψ(s̃) = C(3, u3 (s) + 1) + c3 (4, u4 (s) + 1) − C(1, u1 (s)) − C(2, u2 (s))

where s̃ denotes the new joint strategy (after her decision), and s denotes
the previous one. Noting that payoff is the negation of cost, we find that the
change in payoff is equal to the change in the value of ψ. To show that ψ is
indeed a potential function, it would be necessary to reprise this argument
in the case of a general change in strategy by one of the players.
   Now, we have the following result:

Theorem 15 (Monderer and Shapley, Rosenthal) Every potential game
has a Nash equilibrium in pure strategies.
Game theory                                                                       54


Proof. By the finiteness of the set S1 × . . . × Sk , there exists some s that
maximizes ψ(s). Note that the expression in (13) is at most zero, for any
i ∈ {1, . . . , k} and any choice of s̃i . This implies that s is a Nash equilibrium.
¤
   It is interesting to note P
                             that the very natural idea of looking for a Nash
equilibrium by minimizing R    r=1 ur C(r, ur ) does not work.
                 Game theory                                                                    55


                 5     Coalitions and Shapley value
                 We will discuss two further topics in this class. One is that of finding
                 evolutionarily stable strategies: which Nash equilibria arise naturally? We
                 will discuss only some examples, of which the celebrated game of ‘hawks and
                 doves’ is one.
                     The topic we now turn to is that of games involving coalitions. Suppose
                 we have a group of k > 2 players. Each seeks a part of a given prize, but
                 may achieve that prize only by joining forces with some of the other players.
                 The players have varying influence — but how much power does each have?
                 This is a pretty general summary. We describe the theory in the context of
                 an example.

                 5.1    The Shapley value and the glove market
                 We discuss an example, mentioned in the Introduction. A customer enters
                 a shop seeking to buy a pair of gloves. In the store are the three players.
                 Player 1 has a left glove and players 2 and 3 each have a right glove. The
                 customer will make a payment of 100 dollars for a pair of gloves. In their
                 negotiations prior to the purchase, how much can each player realistically
                 demand of the payment made by the customer? To resolve this question,
                 we introduce a characteristic function v, defined on subsets of the player
                 set. By an abuse of notation, we will write v12 in place of v{12} , and so on.
                 The function v will take the values 0 or 1, and will take the value 1 precisely
                 when the subset of players in question are able between them to affect their
                 aim. In this case, this means that the subset includes one player with a left
                 glove, and one with a right one — so that, between them, they may offer
                 the customer a pair of gloves. Thus, the values are

                                                 v123 = v23 = v13 = 1,

                 and the value is 0 on every other subset of {1, 2, 3}. Note that v is a {0, 1}-
                 valued monotone function: if S ⊆ T , then vS ≤ vT . Such a function is
                 always superadditive: v(S ∪ T ) ≥ v(S) + v(T ) if S and T are disjoint.
                     In general, a characteristic function is just a superadditive function with
                 v(∅) = 0. Shapley was searching for a value function ψi , i ∈ {1, . . . , k}, such
                 that ψi (v) would be the arbitration value (now called Shapley value)
                 for player i in a game whose characteristic function is v. Shapley analysed
                 this problem by introducing the following axioms:
          Symmetry: if v(S ∪ {i}) = v(S ∪ {j}) for all S with i, j 6∈ S, then ψi (v) = ψj (v).
No power / no value: if v(S ∪ {i}) = v(S) for all S, then ψi (v) = 0.
          Additivity: ψi (v + u) = ψi (v) + ψi (u).
                      Pn
          Efficiency:    i=1 ψi (v) = v({1, . . . , n}).
Game theory                                                                   56


The second one is also called the “dummy” axiom. The third axiom is the
most problematic: it assumes that for any of the players, there is no effect
of earlier games on later ones.

Theorem 16 (Shapley) There exists a unique solution for ψ.

A simpler example first: For a fixed subset S ⊆ {1, . . . , n}, consider the
S-veto game, in which the effective coalitions are those that contain each
member of S. This game has characteristic function wS , given by wS (T ) = 1
if and only if S ⊆ T . It is easy to find the unique function that is a Shapley
value. Firstly, the “dummy” axiom gives that

                            ψi (wS ) = 0       if i 6∈ S.

Then, for i, j ∈ S, the “symmetry” axiom gives ψi (wS ) = ψj (wS ). This and
the “efficiency” axiom imply
                                         1
                           ψi (wS ) =           if i ∈ S,
                                        |S|
and we have determined the Shapley value. Moreover, we have that ψi (cwS ) =
cψi (wS ) for any c ∈ [0, ∞).
   Now, note that the glove market game has the same payoffs as w23 +w13 ,
except for the case of the set {1, 2, 3}. In fact, we have that

                             w23 + w13 = v + w123 .

In particular, the “additivity” axiom gives

                    ψi (w23 ) + ψi (w12 ) = ψi (v) + ψi (w123 ).

If i = 1, then 0 + 1/2 = ψ1 (v) + 1/3, while, if i = 3, then 1/2 + 1/2 =
ψ3 (v) + 1/3. Hence ψ3 (v) = 2/3 and ψ1 (r) = ψ2 (r) = 1/6. This means that
player I has two-thirds of the arbitration value, while player II and III
have one-third between them.
Example: the four stockholders. Four people own stock in ACME.
Player i holds i units of stock, for each i ∈ {1, 2, 3, 4}. Six shares are needed
to pass a resolution at the board meeting. How much is the position of each
player worth in the sense of Shapley value? Note that

                             1 = v1234 = v24 = v34 ,

while v = 1 on any 3-tuple, and v = 0 in each other case.
   We will assume that the value v may be written in the form
                                  X
                              v=      cS wS .
                                        ∅6=S
Game theory                                                                57


Later, we will see that there always exists such a way of writing v. For now,
however, we assume this, and compute the coefficients cS . Note first that

                                  0 = v 1 = c1

(we write c1 for c{1} , and so on). Similarly,

                               0 = c 2 = c3 = c4 .

Also,
                           0 = v12 = c1 + c2 + c12 ,
implying that c12 = 0. Similarly,

                                c13 = c14 = 0.

Next,
                           1 = v24 = c2 + c4 + c24 ,
implying that c24 = 0. Similarly, c34 = 1. We have that

                               1 = v123 = c123 ,

while
                            1 = v124 = c24 + c124 ,
implying that c124 = 0. Similarly, c134 = 0, and

1 = v234 = c24 +c34 +c123 +c124 +c134 +c234 +c1234 = 1+1+1+0+0−1+c1234 ,

implying that c1234 = −1. Thus,

                    v = w24 + w34 + w123 − w234 − w1234 ,

whence
                          ψ1 (v) = 1/3 − 1/4 = 1/12,
and
                   ψ2 (v) = 1/2 + 1/3 − 1/3 − 1/4 = 1/4,
while ψ3 (v) = 1/4, by symmetry with player 2. Finally, ψ4 (v) = 5/12.

5.2     Probabilistic interpretation of Shapley value
Suppose that the players arrive at the board meeting in a uniform random
order. Then there exists a moment when, with the arrival of the next stock-
holder, the coalition already present in the board-room becomes effective.
The Shapley value of a given player is the probability of that player being
the one to make the existing coalition effective. We will now prove this
assertion.
    Recall that we are given v(S) for all sets S ⊆ [n] := {1, . . . , n}, with
v(∅) = 0, and v(S ∪ T ) ≥ v(S) + v(T ) if S, T ⊆ [n] are disjoint.
Game theory                                                                                   58


Theorem 17 Shapley’s four axioms uniquely determine the functions φi .
Moreover, we have the random arrival formula:
                n
              1 X      X          ³                                                       ´
   φi (v) =                           v(π(1), . . . , π(k)) − v(π(1), . . . , π(k − 1))
              n!
               k=1 π∈Sn :π(k)=i


Remark. Note that this formula indeed specifies the probability just men-
tioned.
Proof. Recall the game for which wS (T ) = 1 if S ⊆ T , and wS (T ) = 0 in
the other case. We showed that φi (wS ) = 1/|S| if i ∈ S, and φi (wS ) = 0
otherwise. Our aim is, given v, to find coefficients {cS }S⊆[n],S6=∅ such that
                                           X
                                  v=                cS wS .                               (14)
                                         ∅6=S⊆[n]

   Firstly, we will assume (14), and determine the values of {cS }. Applying
(14) to the singleton {i}:
                           X
                 v({i}) =        cS wS ({i}) = c{i} wi (i) = ci ,       (15)
                           ∅6=S⊆[n]

where we may write ci in place of c{i} . More generally, suppose that we have
determined cS for all S with |S| < l. We want to determine cS̃ for some S̃
with |S̃| = l. We have that
                         X                    X
                v(S̃) =        cS wS (S̃) =         cS + cS̃ .           (16)
                         ∅6=S⊆[n]                    S⊆S̃,|S|<l

This determines cS̃ . Now let us verify that (14) does indeed hold. Define
the coefficients {cS } via (15) and (16), inductively for sets S̃ of size l > 1;
that is,                                   X
                           cS̃ = v(S̃) −         cS .
                                                s⊆S̃:|S|<l

However, once (15) and (16) are satisfied, (14) also holds (something that
should be checked by induction). We now find that
                   ³ X        ´      X                    X cS
       φi (v) = φi       cS wS =           φi (cS wS ) =           .
                                                               |S|
                    ∅6=S⊆[n]                 ∅6=S⊆[n]               S⊆[n],i∈S

This completes the proof of the first statement made in the theorem.
    As for the second statement: for each permutation π with π(k) = i, we
define
            ψi (v, π) = v(π(1), . . . , π(k)) − v(π(1), . . . , π(k − 1)),
Game theory                                                                     59


and
                                          1 X
                             Ψi (v) =          ψi (v, π).
                                          n! π
Our goal is to show that Ψi (v) satisfies all four axioms.
   For a given π, note that ψi (v, π) satisfies the “dummy” and “efficiency”
axioms. It also satisfies the “additivity” axiom, but not the “symmetry”
axiom. We now show that averaging produces a new object that is already
symmetric — that is, that {Ψi (v)} satisfies this axiom. To this end, suppose
that i and j are such that

                             v(S ∪ {i}) = v(S ∪ {j})

for all S ⊆ [n] with S ∩ {i, j} = ∅. For every permutation π, define π ∗ that
switches the locations of i and j. That is, if π(k) = i and π(l) = j, then
π ∗ (k) = j and π ∗ (l) = i, with π ∗ (r) = π(r) with r 6= k, l. We claim that

                                ψi (v, π) = ψj (v, π ∗ ).

Suppose that π(k) = i and π(l) = j. Note that ψi (v, π) contains the term

                 v(π(1), . . . , π(k)) − v(π(1), . . . , π(k − 1)),

whereas ψi (v, π ∗ ) contains the corresponding term

               v(π ∗ (1), . . . , π ∗ (k)) − v(π ∗ (1), . . . , π ∗ (k − 1)).

We find that
                              1 X                    1 X
               Ψi (v) =               ψi (v, π) =           ψj (v, π ∗ )
                              n!                    n!
                                 π∈Sn                  π∈Sn
                              1 X
                        =              ψj (v, π ∗ ) = Ψj (v),
                              n! ∗
                                 π ∈Sn

where in the second equality, we used the fact that the map π 7→ π ∗ is a
one-to-one map from Sn to itself, for which π ∗∗ = π. Therefore, Ψi (v) is
indeed the unique Shapley value function. ¤


5.3   Two more examples
A fish without intrinsic value. A seller has a fish having no intrinsic
value to him, i.e., he values it at zero dollars. A buyer values the fish at 10
dollars. We find the Shapley value: suppose that the buyer pays x for the
fish, with 0 < x ≤ 10. Writing S and B for the seller and buyer, we have that
v(S) = 0, v(B) = 0, with v(S, B) = (10 − x) + x, so that φs (v) = φB (v) = 5.
Game theory                                                                      60


   A potential problem with using the Shapley value in this case is the
possibility that the buyer under-reports his desire for the fish to the party
that arbitrates the transaction.
Many right gloves. Find the Shapley values for the following variant of
the glove game. There are n = r + 2 players. Players 1 and 2 have left
gloves. The remaining players each have a right glove. Note that V (S) is
equal to the maximal number of proper and disjoint pairs of gloves. In other
words, V (S) is equal to the minimum of the number of left, and of right,
gloves held by members of S. Note that φ1 (v) = φ2 (v), and φr (v) = φ3 (v),
for each r ≥ 3. Note also that

                              2φ1 (v) + rφ3 (v) = 2,

provided that r ≥ 2. For which permutations does the third player add
value to the coalition already formed? The answer is the following orders:

                            13, 23, {1, 2}3, {1, 2, j}3,

where j is any value in {4, . . . , n}, and where the curly brackets mean that
each of the resulting orders is to be included. The number of permutations
corresponding to these possibilities is: r!, r!, 2(r − 1)!, and 6(r − 1) · (r − 2)!.
This gives that
                                       2r! + 8(r − 1)!
                          φ3 (v) =                     .
                                           (r + 2)!
That is,
                                           2r + 8
                            φ3 (v) =                   .
                                       (r + 2)(r + 1)r
Game theory                                                                           61


6    Mechanism design
Example: Keeping the meteorologist honest. The employer of a
weatherman is determined that he should provide a good prediction of the
weather for the following day. The weatherman’s instruments are good, and
he can, with sufficient effort, tune them to obtain the correct value for the
probability of rain on the next day. There are many days, and, on the i-th
of them, this correct probability is called pi . On the evening of the i − 1-th
day, the weatherman submits his estimate p̂i for the probability of rain on
the following day, the i-th one. Which scheme should we adopt to reward
or penalize the weatherman for his predictions, so that he is motivated to
correctly determine pi (that is, to declare p̂i = pi )? The employer does
not know what pi is, because he has no access to technical equipment, but
he does know the p̂i values that the weatherman provides, and he knows
whether or not it is raining on each day.
     One suggestion is to pay the weatherman, on the i-th day, the amount
p̂i (or some dollar multiple of that amount) if it rains, and 1 − p̂i if it shines.
If p̂i = pi = 0.6, then the payoff is

            p̂i P(it rains) + (1 − p̂i )P(it shines) = p̂i pi + (1 − p̂i )(1 − pi )
        = 0.6 × 0.6 + 0.4 × 0.4 = 0.52.

But in this case, even if the weatherman does correctly compute that pi =
0.6, he is tempted to report the p̂i value of 1, because, by the same formula,
in this case, his earnings are 0.6.
    Another idea is to wait for a long time, one year, say, and reward the
weatherman according to how accurate his predictions have been on the
average. More concretely, suppose for the sake of simplicity that the weath-
erman is only able to report p̂i values on a scale of 0.1: so that he has eleven
choices, namely {k/10 : k ∈ {0, . . . , 10}}. When a year has gone by, the days
of that year may be divided into eleven types, according to the p̂i -value that
the weatherman declared. We would reward the weatherman if, for each of
the eleven values of k, the fraction of days it rained in the class of days on
which p̂i was declared to be the value k/10, is actually close to k/10.
    A scheme like this is quite reasonable and would certainly ensure that
the weatherman tuned his instruments at the beginning of the year. How-
ever, it is not perfect. For example, ordinary random fluctuation mean that
the weatherman will probably be slightly wrong as the end of the year ap-
proaches. It might be that it rained on 95 percent of the days on which
the weatherman declared p̂ = 0.9, while, on those which he declared at 0.6,
the average in reality has been 55 percent. Suppose that on the evening
of one of the later days he sees that his instruments accurately predict 0.9.
He knows that it very likely to rain on the next day. But he is tempted to
declare the next day at 0.6 — that is, to set p̂i = 0.6 for the i in question,
Game theory                                                                 62


because doing so will (with probability 0.9) boost his 0.6 category and allow
his 0.9 category to catch up with the downpour.
    In fact, it is possible to design a scheme whereby we decide day-by-day
how to reward the weatherman only on the basis of his declaration from the
previous evening, without encountering the kind of problem that the last
scheme had. Suppose that we pay f (p̂i ) to the weatherman if it rains, and
f (1 − p̂i ) if it shines on day i. If pi = p and p̂i = x, then the expected
payment made on day i is equal to

                      pf (x) + (1 − p)f (1 − x) = gp (x).

(We are defining gp (x) to be this left-hand-side, because we are interested in
how the payout is expected to depend on the prediction x of the weatherman
on a given day where the probability of rain is p). Our aim is to reward the
weatherman if his p̂i equals pi , in other words, to ensure that the expected
payout is maximized when x = p. This means that the function gp : [0, 1] →
R should satisfy gp (p) > gp (x) for all x ∈ [0, 1] − {p}. By checking the
derivative of gp (x), we see that f (x) = log x or f (x) = −(1 − x)2 are good
choices.



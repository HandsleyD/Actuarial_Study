---
normalized_id: shared-pdf-reference-game-theory-lctn-thomas-s-ferguson
exam_code: SHARED
material_scope: game theory lctn - thomas s. ferguson.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/GAME THEORY Lctn - Thomas S. Ferguson.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-game-theory-lctn-thomas-s-ferguson

                            GAME THEORY
                              Thomas S. Ferguson
                     University of California at Los Angeles



    Contents

Introduction.
    References.

Part I. Impartial Combinatorial Games.
    1.1 Take-Away Games.
    1.2 The Game of Nim.
    1.3 Graph Games.
    1.4 Sums of Combinatorial Games.
    1.5 Coin Turning Games.
    1.6 Green Hackenbush.
    References.

Part II. Two-Person Zero-Sum Games.
    2.1 The Strategic Form of a Game.
    2.2 Matrix Games. Domination.
    2.3 The Principle of Indiﬀerence.
    2.4 Solving Finite Games.
    2.5 The Extensive Form of a Game.

                                         1
    2.6 Recursive and Stochastic Games.
    2.7 Continuous Poker Models.


Part III. Two-Person General-Sum Games.
    3.1 Bimatrix Games — Safety Levels.
    3.2 Noncooperative Games — Equilibria.
    3.3 Models of Duopoly.
    3.4 Cooperative Games.

Part IV. Games in Coalitional Form.
    4.1 Many-Person TU Games.
    4.2 Imputations and the Core.
    4.3 The Shapley Value.
    4.4 The Nucleolus.

Appendixes.
    A.1 Utility Theory.
    A.2 Contraction Maps and Fixed Points.
    A.3 Existence of Equilibria in Finite Games.




                                          2
                                  INTRODUCTION.

     Game theory is a fascinating subject. We all know many entertaining games, such
as chess, poker, tic-tac-toe, bridge, baseball, computer games — the list is quite varied
and almost endless. In addition, there is a vast area of economic games, discussed in
Myerson (1991) and Kreps (1990), and the related political games, Ordeshook (1986),
Shubik (1982), and Taylor (1995). The competition between ﬁrms, the conﬂict between
management and labor, the ﬁght to get bills through congress, the power of the judiciary,
war and peace negotiations between countries, and so on, all provide examples of games in
action. There are also psychological games played on a personal level, where the weapons
are words, and the payoﬀs are good or bad feelings, Berne (1964). There are biological
games, the competition between species, where natural selection can be modeled as a game
played between genes, Smith (1982). There is a connection between game theory and the
mathematical areas of logic and computer science. One may view theoretical statistics as
a two person game in which nature takes the role of one of the players, as in Blackwell and
Girshick (1954) and Ferguson (1968).
     Games are characterized by a number of players or decision makers who interact,
possibly threaten each other and form coalitions, take actions under uncertain conditions,
and ﬁnally receive some beneﬁt or reward or possibly some punishment or monetary loss.
In this text, we study various models of games and create a theory or a structure of the
phenomena that arise. In some cases, we will be able to suggest what courses of action
should be taken by the players. In others, we hope to be able to understand what is
happening in order to make better predictions about the future.
     As we outline the contents of this text, we introduce some of the key words and
terminology used in game theory. First there is the number of players which will be
denoted by n. Let us label the players with the integers 1 to n, and denote the set of
players by N = {1, 2, . . . , n}. We will study mostly two person games, n = 2, where the
concepts are clearer and the conclusions are more deﬁnite. When specialized to one-player,
the theory is simply called decision theory. Games of solitaire and puzzles are examples
of one-person games as are various sequential optimization problems found in operations
research, and optimization, (see Papadimitriou and Steiglitz (1982) for example), or linear
programming, (see Chvátal (1983)), or gambling (see Dubins and Savage(1965)). There
are even things called “zero-person games”, such as the “game of life” of Conway (see
Berlekamp et al. (1982) Chap. 25); once an automaton gets set in motion, it keeps going
without any person making decisions. We will assume throughout that there are at least
two players, that is, n ≥ 2. In macroeconomic models, the number of players can be very
large, ranging into the millions. In such models it is often preferable to assume that there
are an inﬁnite number of players. In fact it has been found useful in many situations to
assume there are a continuum of players, with each player having an inﬁnitesimal inﬂuence
on the outcome as in Aumann and Shapley (1974). In this course, we always take n to be
ﬁnite.
    There are three main mathematical models or forms used in the study of games, the
extensive form, the strategic form and the coalitional form. These diﬀer in the

                                             3
amount of detail on the play of the game built into the model. The most detail is given
in the extensive form, where the structure closely follows the actual rules of the game. In
the extensive form of a game, we are able to speak of a position in the game, and of a
move of the game as moving from one position to another. The set of possible moves
from a position may depend on the player whose turn it is to move from that position.
In the extensive form of a game, some of the moves may be random moves, such as the
dealing of cards or the rolling of dice. The rules of the game specify the probabilities of
the outcomes of the random moves. One may also speak of the information players have
when they move. Do they know all past moves in the game by the other players? Do they
know the outcomes of the random moves?
     When the players know all past moves by all the players and the outcomes of all past
random moves, the game is said to be of perfect information. Two-person games of
perfect information with win or lose outcome and no chance moves are known as combi-
natorial games. There is a beautiful and deep mathematical theory of such games. You
may ﬁnd an exposition of it in Conway (1976) and in Berlekamp et al. (1982). Such a
game is said to be impartial if the two players have the same set of legal moves from each
position, and it is said to be partizan otherwise. Part I of this text contains an introduc-
tion to the theory of impartial combinatorial games. For another elementary treatment of
impartial games see the book by Guy (1989).
     We begin Part II by describing the strategic form or normal form of a game. In the
strategic form, many of the details of the game such as position and move are lost; the main
concepts are those of a strategy and a payoﬀ. In the strategic form, each player chooses a
strategy from a set of possible strategies. We denote the strategy set or action space
of player i by Ai , for i = 1, 2, . . . , n. Each player considers all the other players and their
possible strategies, and then chooses a speciﬁc strategy from his strategy set. All players
make such a choice simultaneously, the choices are revealed and the game ends with each
player receiving some payoﬀ. Each player’s choice may inﬂuence the ﬁnal outcome for all
the players.
     We model the payoﬀs as taking on numerical values. In general the payoﬀs may
be quite complex entities, such as “you receive a ticket to a baseball game tomorrow
when there is a good chance of rain, and your raincoat is torn”. The mathematical and
philosophical justiﬁcation behind the assumption that each player can replace such payoﬀs
with numerical values is discussed in the Appendix under the title, Utility Theory. This
theory is treated in detail in the books of Savage (1954) and of Fishburn (1988). We
therefore assume that each player receives a numerical payoﬀ that depends on the actions
chosen by all the players. Suppose player 1 chooses a1 ∈ Ai , player 2 chooses a2 ∈ A2 , etc.
and player n chooses an ∈ An . Then we denote the payoﬀ to player j, for j = 1, 2, . . . , n,
by fj (a1 , a2 , . . . , an ), and call it the payoﬀ function for player j.
     The strategic form of a game is deﬁned then by the three objects:
     (1) the set, N = {1, 2, . . . , n}, of players,
     (2) the sequence, A1 , . . . , An , of strategy sets of the players, and

                                                  4
    (3) the sequence, f1 (a1 , . . . , an ), . . . , fn (a1 , . . . , an ), of real-valued payoﬀ functions of
the players.
     A game in strategic form is said to be zero-sum if the sum of the payoﬀs to the
players is zero no matter what actions are chosen by the players. That is, the game is
zero-sum if
                               n
                                   fi (a1 , a2 , . . . , an ) = 0
                                       i=1

for all a1 ∈ A1 , a2 ∈ A2 ,. . . , an ∈ An . In the ﬁrst four chapters of Part II, we restrict
attention to the strategic form of two-person, zero-sum games. Theoretically, such games
have clear-cut solutions, thanks to a fundamental mathematical result known as the mini-
max theorem. Each such game has a value, and both players have optimal strategies
that guarantee the value.
     In the last three chapters of Part II, we treat two-person zero-sum games in extensive
form, and show the connection between the strategic and extensive forms of games. In
particular, one of the methods of solving extensive form games is to solve the equivalent
strategic form. Here, we give an introduction to Recursive Games and Stochastic Games,
an area of intense contemporary development (see Filar and Vrieze (1997), Maitra and
Sudderth (1996) and Sorin (2002)).
     In Part III, the theory is extended to two-person non-zero-sum games. Here the
situation is more nebulous. In general, such games do not have values and players do not
have optimal optimal strategies. The theory breaks naturally into two parts. There is the
noncooperative theory in which the players, if they may communicate, may not form
binding agreements. This is the area of most interest to economists, see Gibbons (1992),
and Bierman and Fernandez (1993), for example. In 1994, John Nash, John Harsanyi
and Reinhard Selten received the Nobel Prize in Economics for work in this area. Such
a theory is natural in negotiations between nations when there is no overseeing body
to enforce agreements, and in business dealings where companies are forbidden to enter
into agreements by laws concerning constraint of trade. The main concept, replacing
value and optimal strategy is the notion of a strategic equilibrium, also called a Nash
equilibrium. This theory is treated in the ﬁrst three chapters of Part III.
    On the other hand, in the cooperative theory the players are allowed to form binding
agreements, and so there is strong incentive to work together to receive the largest total
payoﬀ. The problem then is how to split the total payoﬀ between or among the players.
This theory also splits into two parts. If the players measure utility of the payoﬀ in the
same units and there is a means of exchange of utility such as side payments, we say the
game has transferable utility; otherwise non-transferable utility. The last chapter
of Part III treat these topics.
    When the number of players grows large, even the strategic form of a game, though less
detailed than the extensive form, becomes too complex for analysis. In the coalitional
form of a game, the notion of a strategy disappears; the main features are those of a
coalition and the value or worth of the coalition. In many-player games, there is a
tendency for the players to form coalitions to favor common interests. It is assumed each

                                                     5
coalition can guarantee its members a certain amount, called the value of the coalition.
The coalitional form of a game is a part of cooperative game theory with transferable
utility, so it is natural to assume that the grand coalition, consisting of all the players,
will form, and it is a question of how the payoﬀ received by the grand coalition should be
shared among the players. We will treat the coalitional form of games in Part IV. There we
introduce the important concepts of the core of an economy. The core is a set of payoﬀs
to the players where each coalition receives at least its value. An important example is
two-sided matching treated in Roth and Sotomayor (1990). We will also look for principles
that lead to a unique way to split the payoﬀ from the grand coalition, such as the Shapley
value and the nucleolus. This will allow us to speak of the power of various members
of legislatures. We will also examine cost allocation problems (how should the cost of a
project be shared by persons who beneﬁt unequally from it).
     Related Texts. There are many texts at the undergraduate level that treat various
aspects of game theory. Accessible texts that cover certain of the topics treated in this
text are the books of Straﬃn (1993), Morris (1994) and Tijs (2003). The book of Owen
(1982) is another undergraduate text, at a slightly more advanced mathematical level. The
economics perspective is presented in the entertaining book of Binmore (1992). The New
Palmgrave book on game theory, Eatwell et al. (1987), contains a collection of historical
sketches, essays and expositions on a wide variety of topics. Older texts by Luce and
Raiﬀa (1957) and Karlin (1959) were of such high quality and success that they have been
reprinted in inexpensive Dover Publications editions. The elementary and enjoyable book
by Williams (1966) treats the two-person zero-sum part of the theory. Also recommended
are the lectures on game theory by Robert Aumann (1989), one of the leading scholars of
the ﬁeld. And last, but actually ﬁrst, there is the book by von Neumann and Morgenstern
(1944), that started the whole ﬁeld of game theory.

    References.

Robert J. Aumann (1989) Lectures on Game Theory, Westview Press, Inc., Boulder, Col-
      orado.
R. J. Aumann and L. S. Shapley (1974) Values of Non-atomic Games, Princeton University
       Press.
E. R. Berlekamp, J. H. Conway and R. K. Guy (1982), Winning Ways for your Mathe-
      matical Plays (two volumes), Academic Press, London.
Eric Berne (1964) Games People Play, Grove Press Inc., New York.
H. Scott Bierman and Luis Fernandez (1993) Game Theory with Economic Applications,
      2nd ed. (1998), Addison-Wesley Publishing Co.
Ken Binmore (1992) Fun and Games — A Text on Game Theory, D.C. Heath, Lexington,
      Mass.
D. Blackwell and M. A. Girshick (1954) Theory of Games and Statistical Decisions, John
      Wiley & Sons, New York.

                                             6
V. Chvátal (1983) Linear Programming, W. H. Freeman, New York.
J. H. Conway (1976) On Numbers and Games, Academic Press, New York.
Lester E. Dubins amd Leonard J. Savage (1965) How to Gamble If You Must: Inequal-
       ities for Stochastic Processes, McGraw-Hill, New York. 2nd edition (1976) Dover
       Publications Inc., New York.
J. Eatwell, M. Milgate and P. Newman, Eds. (1987) The New Palmgrave: Game Theory,
      W. W. Norton, New York.
Thomas S. Ferguson (1968) Mathematical Statistics – A decision-Theoretic Approach,
     Academic Press, New York.
J. Filar and K. Vrieze (1997) Competitive Markov Decision Processes, Springer-Verlag,
       New York.
Peter C. Fishburn (1988) Nonlinear Preference and Utility Theory, John Hopkins Univer-
      sity Press, Baltimore.
Robert Gibbons (1992) Game Theory for Applied Economists, Princeton University Press.
Richard K. Guy (1989) Fair Game, COMAP Mathematical Exploration Series.
Samuel Karlin (1959) Mathematical Methods and Theory in Games, Programming and
     Economics, in two vols., Reprinted 1992, Dover Publications Inc., New York.
David M. Kreps (1990) Game Theory and Economic Modeling, Oxford University Press.
R. D. Luce and H. Raiﬀa (1957) Games and Decisions — Introduction and Critical Survey,
       reprinted 1989, Dover Publications Inc., New York.
A. P. Maitra ans W. D. Sudderth (1996) Discrete Gambling and Stochastic Games, Ap-
      plications of Mathematics 32, Springer.
Peter Morris (1994) Introduction to Game Theory, Springer-Verlag, New York.
Roger B. Myerson (1991) Game Theory — Analysis of Conﬂict, Harvard University Press.
Peter C. Ordeshook (1986) Game Theory and Political Theory, Cambridge University
      Press.
Guillermo Owen (1982) Game Theory 2nd Edition, Academic Press.
Christos H. Papadimitriou and Kenneth Steiglitz (1982) Combinatorial Optimization, re-
      printed (1998), Dover Publications Inc., New York.
Alvin E. Roth and Marilda A. Oliveira Sotomayor (1990) Two-Sided Matching – A Study
      in Game-Theoretic Modeling and Analysis, Cambridge University Press.
L. J. Savage (1954) The Foundations of Statistics, John Wiley & Sons, New York.
Martin Shubik (1982) Game Theory in the Social Sciences, The MIT Press.
John Maynard Smith (1982) Evolution and the Theory of Games, Cambridge University
      Press.

                                          7
Sylvain Sorin (2002) A First Course on Zero-Sum Repeated Games, Mathématiques &
       Applications 37, Springer.
Philip D. Straﬃn (1993) Game Theory and Strategy, Mathematical Association of Amer-
       ica.
Alan D. Taylor (1995) Mathematics and Politics — Strategy, Voting, Power and Proof,
      Springer-Verlag, New York.
Stef Tijs (2003) Introduction to Game Theory, Hindustan Book Agency, India.
J. von Neumann and O. Morgenstern (1944) The Theory of Games and Economic Behavior,
       Princeton University Press.
John D. Williams, (1966) The Compleat Strategyst, 2nd Edition, McGraw-Hill, New York.




                                         8
                        GAME THEORY


                             Thomas S. Ferguson


Part I. Impartial Combinatorial Games

1. Take-Away Games.
    1.1 A Simple Take-Away Game.
    1.2 What is a Combinatorial Game?
    1.3 P-positions, N-positions.
    1.4 Subtraction Games.
    1.5 Exercises.

2. The Game of Nim.
    2.1 Preliminary Analysis.
    2.2 Nim-Sum.
    2.3 Nim With a Larger Number of Piles.
    2.4 Proof of Bouton’s Theorem.
    2.5 Misère Nim.
    2.6 Exercises.

3. Graph Games.
    3.1 Games Played on Directed Graphs.
    3.2 The Sprague-Grundy Function.
    3.3 Examples.
    3.4 The Sprague-Grundy Function on More General Graphs.
    3.5 Exercises.

4. Sums of Combinatorial Games.
    4.1 The Sum of n Graph Games.
    4.2 The Sprague Grundy Theorem.
    4.3 Applications.

                                     I–1
    4.4 Take-and-Break Games.
    4.5 Exercises.

5. Coin Turning Games.
    5.1 Examples.
    5.2 Two-dimensional Coin Turning Games.
    5.3 Nim Multiplication.
    5.4 Tartan Games.
    5.5 Exercises.

6. Green Hackenbush.
    6.1 Bamboo Stalks.
    6.2 Green Hackenbush on Trees.
    6.3 Green Hackenbush on General Rooted Graphs.
    6.4 Exercises.

References.




                                     I–2
          Part I. Impartial Combinatorial Games

    1. Take-Away Games.

     Combinatorial games are two-person games with perfect information and no chance
moves, and with a win-or-lose outcome. Such a game is determined by a set of positions,
including an initial position, and the player whose turn it is to move. Play moves from one
position to another, with the players usually alternating moves, until a terminal position
is reached. A terminal position is one from which no moves are possible. Then one of the
players is declared the winner and the other the loser.
     There are two main references for the material on combinatorial games. One is the
research book, On Numbers and Games by J. H. Conway, Academic Press, 1976. This
book introduced many of the basic ideas of the subject and led to a rapid growth of the
area that continues today. The other reference, more appropriate for this class, is the
two-volume book, Winning Ways for your mathematical plays by Berlekamp, Conway and
Guy, Academic Press, 1982, in paperback. There are many interesting games described in
this book and much of it is accessible to the undergraduate mathematics student. This
theory may be divided into two parts, impartial games in which the set of moves available
from any given position is the same for both players, and partizan games in which each
player has a diﬀerent set of possible moves from a given position. Games like chess or
checkers in which one player moves the white pieces and the other moves the black pieces
are partizan. In Part I, we treat only the theory of impartial games. An elementary
introduction to impartial combinatorial games is given in the book Fair Game by Richard
K. Guy, published in the COMAP Mathematical Exploration Series, 1989. We start with
a simple example.
     1.1 A Simple Take-Away Game. Here are the rules of a very simple impartial
combinatorial game of removing chips from a pile of chips.
     (1) There are two players. We label them I and II.
     (2) There is a pile of 21 chips in the center of a table.
     (3) A move consists of removing one, two, or three chips from the pile. At least one
chip must be removed, but no more than three may be removed.
     (4) Players alternate moves with Player I starting.
     (5) The player that removes the last chip wins. (The last player to move wins. If you
can’t move, you lose.)
     How can we analyze this game? Can one of the players force a win in this game?
Which player would you rather be, the player who starts or the player who goes second?
What is a good strategy?
     We analyze this game from the end back to the beginning. This method is sometimes
called backward induction.

                                           I–3
         If there are just one, two, or three chips left, the player who moves next wins
     simply by taking all the chips.
          Suppose there are four chips left. Then the player who moves next must
     leave either one, two or three chips in the pile and his opponent will be able to
     win. So four chips left is a loss for the next player to move and a win for the
     previous player, i.e. the one who just moved.
         With 5, 6, or 7 chips left, the player who moves next can win by moving to
     the position with four chips left.
         With 8 chips left, the next player to move must leave 5, 6, or 7 chips, and so
     the previous player can win.
         We see that positions with 0, 4, 8, 12, 16, . . . chips are target positions; we
     would like to move into them. We may now analyze the game with 21 chips.
     Since 21 is not divisible by 4, the ﬁrst player to move can win. The unique
     optimal move is to take one chip and leave 20 chips which is a target position.

   1.2 What is a Combinatorial Game? We now deﬁne the notion of a combinatorial
game more precisely. It is a game that satisﬁes the following conditions.
     (1) There are two players.
     (2) There is a set, usually ﬁnite, of possible positions of the game.
      (3) The rules of the game specify for both players and each position which moves to
other positions are legal moves. If the rules make no distinction between the players, that
is if both players have the same options of moving from each position, the game is called
impartial; otherwise, the game is called partizan.
     (4) The players alternate moving.
     (5) The game ends when a position is reached from which no moves are possible for
the player whose turn it is to move. Under the normal play rule, the last player to move
wins. Under the misère play rule the last player to move loses.
     If the game never ends, it is declared a draw. However, we shall nearly always add
the following condition, called the Ending Condition. This eliminates the possibility of
a draw.
     (6) The game ends in a ﬁnite number of moves no matter how it is played.
     It is important to note what is omitted in this deﬁnition. No random moves such as the
rolling of dice or the dealing of cards are allowed. This rules out games like backgammon
and poker. A combinatorial game is a game of perfect information: simultaneous moves
and hidden moves are not allowed. This rules out battleship and scissors-paper-rock. No
draws in a ﬁnite number of moves are possible. This rules out tic-tac-toe. In these notes,
we restrict attention to impartial games, generally under the normal play rule.

    1.3 P-positions, N-positions. Returning to the take-away game of Section 1.1,
we see that 0, 4, 8, 12, 16, . . . are positions that are winning for the Previous player (the
player who just moved) and that 1, 2, 3, 5, 6, 7, 9, 10, 11, . . . are winning for the Next player
to move. The former are called P-positions, and the latter are called N-positions. The

                                              I–4
P-positions are just those with a number of chips divisible by 4, called target positions in
Section 1.1.
     In impartial combinatorial games, one can ﬁnd in principle which positions are P-
positions and which are N-positions by (possibly transﬁnite) induction using the following
labeling procedure starting at the terminal positions. We say a position in a game is a
terminal position, if no moves from it are possible. This algorithm is just the method
we used to solve the take-away game of Section 1.1.
    Step 1: Label every terminal position as a P-position.
    Step 2: Label every position that can reach a labelled P-position in one move as an
N-position.
     Step 3: Find those positions whose only moves are to labelled N-positions; label such
positions as P-positions.
    Step 4: If no new P-positions were found in step 3, stop; otherwise return to step 2.
     It is easy to see that the strategy of moving to P-positions wins. From a P-position,
your opponent can move only to an N-position (3). Then you may move back to a P-
position (2). Eventually the game ends at a terminal position and since this is a P-position,
you win (1).
   Here is a characterization of P-positions and N-positions that is valid for impartial
combinatorial games satisfying the ending condition, under the normal play rule.

Characteristic Property. P-positions and N-positions are deﬁned recursively by the
following three statements.
     (1) All terminal positions are P-positions.
     (2) From every N-position, there is at least one move to a P-position.
     (3) From every P-position, every move is to an N-position.

     For games using the misére play rule, condition (1) should be replaced by the condition
that all terminal positions are N-positions.

     1.4 Subtraction Games. Let us now consider a class of combinatorial games that
contains the take-away game of Section 1.1 as a special case. Let S be a set of positive
integers. The subtraction game with subtraction set S is played as follows. From a pile
with a large number, say n, of chips, two players alternate moves. A move consists of
removing s chips from the pile where s ∈ S. Last player to move wins.
     The take-away game of Section 1.1 is the subtraction game with subtraction set S =
{1, 2, 3}. In Exercise 1.2, you are asked to analyze the subtraction game with subtraction
set S = {1, 2, 3, 4, 5, 6}.
     For illustration, let us analyze the subtraction game with subtraction set S = {1, 3, 4}
by ﬁnding its P-positions. There is exactly one terminal position, namely 0. Then 1, 3,
and 4 are N-positions, since they can be moved to 0. But 2 then must be a P-position
since the only legal move from 2 is to 1, which is an N-position. Then 5 and 6 must be
N-positions since they can be moved to 2. Now we see that 7 must be a P-position since
the only moves from 7 are to 6, 4, or 3, all of which are N-positions.

                                            I–5
     Now we continue similarly: we see that 8, 10 and 11 are N-positions, 9 is a P-position,
12 and 13 are N-positions and 14 is a P-position. This extends by induction. We ﬁnd
that the set of P-positions is P = {0, 2, 7, 9, 14, 16, . . .}, the set of nonnegative integers
leaving remainder 0 or 2 when divided by 7. The set of N-positions is the complement,
N = {1, 3, 4, 5, 6, 8, 10, 11, 12, 13, 15, . . .}.

           x 0 1        2 3       4    5    6 7     8 9     10   11 12     13   14 . . .
    position P N        P N      N    N    N P     N P      N    N N       N    P ...

                  The pattern P NP NNNN of length 7 repeats forever.
     Who wins the game with 100 chips, the ﬁrst player or the second? The P-positions
are the numbers equal to 0 or 2 modulus 7. Since 100 has remainder 2 when divided by 7,
100 is a P-position; the second player to move can win with optimal play.

     1.5 Exercises.
     1. Consider the misère version of the take-away game of Section 1.1, where the last
player to move loses. The object is to force your opponent to take the last chip. Analyze
this game. What are the target positions (P-positions)?
     2. Generalize the Take-Away Game: (a) Suppose in a game with a pile containing a
large number of chips, you can remove any number from 1 to 6 chips at each turn. What
is the winning strategy? What are the P-positions? (b) If there are initially 31 chips in
the pile, what is your winning move, if any?
     3. The Thirty-one Game. (Geoﬀrey Mott-Smith (1954)) From a deck of cards,
take the Ace, 2, 3, 4, 5, and 6 of each suit. These 24 cards are laid out face up on a table.
The players alternate turning over cards and the sum of the turned over cards is computed
as play progresses. Each Ace counts as one. The player who ﬁrst makes the sum go above
31 loses. It would seem that this is equivalent to the game of the previous exercise played
on a pile of 31 chips. But there is a catch. No integer may be chosen more than four times.
(a) If you are the ﬁrst to move, and if you use the strategy found in the previous exercise,
what happens if the opponent keeps choosing 4?
(b) Nevertheless, the ﬁrst player can win with optimal play. How?
     4. Find the set of P-positions for the subtraction games with subtraction sets
(a) S = {1, 3, 5, 7}.
(b) S = {1, 3, 6}.
(c) S = {1, 2, 4, 8, 16, . . .} = all powers of 2.
(d) Who wins each of these games if play starts at 100 chips, the ﬁrst player or the second?
     5. Empty and Divide. (Ferguson (1998)) There are two boxes. Initially, one box
contains m chips and the other contains n chips. Such a position is denoted by (m, n),
where m > 0 and n > 0. The two players alternate moving. A move consists of emptying
one of the boxes, and dividing the contents of the other between the two boxes with at
least one chip in each box. There is a unique terminal position, namely (1, 1). Last player
to move wins. Find all P-positions.
     6. Chomp! A game invented by Fred. Schuh (1952) in an arithmetical form was
discovered independently in a completely diﬀerent form by David Gale (1974). Gale’s

                                            I–6
version of the game involves removing squares from a rectangular board, say an m by n
board. A move consists in taking a square and removing it and all squares to the right
and above. Players alternate moves, and the person to take square (1, 1) loses. The
name “Chomp” comes from imagining the board as a chocolate bar, and moves involving
breaking oﬀ some corner squares to eat. The square (1, 1) is poisoned though; the player
who chomps it loses. You can play this game on the web at
http://www.math.ucla.edu/ tom/Games/chomp.html .
                            ˜
     For example, starting with an 8 by 3 board, suppose the ﬁrst player chomps at (6, 2)
gobbling 6 pieces, and then
                         second player chomps at (2, 3) gobbling 4 pieces, leaving the
following board, where     denotes the poisoned piece.



                                


      (a) Show that this position is a N-position, by ﬁnding a winning move for the ﬁrst
player. (It is unique.)
      (b) It is known that the ﬁrst player can win all rectangular starting positions. The
proof, though ingenious, is not hard. However, it is an “existence” proof. It shows that
there is a winning strategy for the ﬁrst player, but gives no hint on how to ﬁnd the ﬁrst
move! See if you can ﬁnd the proof. Here is a hint: Does removing the upper right corner
constitute a winning move?
      7. Dynamic subtraction. One can enlarge the class of subtraction games by letting
the subtraction set depend on the last move of the opponent. Many early examples appear
in Chapter 12 of Schuh (1968). Here are two other examples. (For a generalization, see
Schwenk (1970).)
(a) There is one pile of n chips. The ﬁrst player to move may remove as many chips as
desired, at least one chip but not the whole pile. Thereafter, the players alternate moving,
each player not being allowed to remove more chips than his opponent took on the previous
move. What is an optimal move for the ﬁrst player if n = 44? For what values of n does
the second player have a win?
(b) Fibonacci Nim. (Whinihan (1963)) The same rules as in (a), except that a player
may take at most twice the number of chips his opponent took on the previous move.
The analysis of this game is more diﬃcult than the game of part (a) and depends on the
sequence of numbers named after Leonardo Pisano Fibonacci, which may be deﬁned as
F1 = 1, F2 = 2, and Fn+1 = Fn + Fn−1 for n ≥ 2. The Fibonacci sequence is thus:
1, 2, 3, 5, 8, 13, 21, 34, 55, . . .. The solution is facilitated by

Zeckendorf ’s Theorem. Every positive integer can be written uniquely as a sum of
distinct non-neighboring Fibonacci numbers.

    There may be many ways of writing a number as a sum of Fibonacci numbers, but
there is only one way of writing it as a sum of non-neighboring Fibonacci numbers. Thus,
43=34+8+1 is the unique way of writing 43, since although 43=34+5+3+1, 5 and 3 are

                                           I–7
neighbors. What is an optimal move for the ﬁrst player if n = 43? For what values of n
does the second player have a win? Try out your solution on
http://www.math.ucla.edu/ tom/Games/ﬁbonim.html .
                            ˜
     8. The SOS Game. (From the 28th Annual USA Mathematical Olympiad, 1999)
The board consists of a row of n squares, initially empty. Players take turns selecting an
empty square and writing either an S or an O in it. The player who ﬁrst succeeds in
completing SOS in consecutive squares wins the game. If the whole board gets ﬁlled up
without an SOS appearing consecutively anywhere, the game is a draw.
(a) Suppose n = 4 and the ﬁrst player puts an S in the ﬁrst square. Show the second
player can win.
(b) Show that if n = 7, the ﬁrst player can win the game.
(c) Show that if n = 2000, the second player can win the game.
(d) Who, if anyone, wins the game if n = 14?




                                          I–8
     2. The Game of Nim.

     The most famous take-away game is the game of Nim, played as follows. There are
three piles of chips containing x1 , x2 , and x3 chips respectively. (Piles of sizes 5, 7, and 9
make a good game.) Two players take turns moving. Each move consists of selecting one
of the piles and removing chips from it. You may not remove chips from more than one
pile in one turn, but from the pile you selected you may remove as many chips as desired,
from one chip to the whole pile. The winner is the player who removes the last chip. You
can play this game on the web at (http://www.chlond.demon.co.uk/Nim.html ), or at Nim
Game (http://www.dotsphinx.com/nim/).

     2.1 Preliminary Analysis. There is exactly one terminal position, namely (0, 0, 0),
which is therefore a P-position. The solution to one-pile Nim is trivial: you simply remove
the whole pile. Any position with exactly one non-empty pile, say (0, 0, x) with x > 0
is therefore an N-position. Consider two-pile Nim. It is easy to see that the P-positions
are those for which the two piles have an equal number of chips, (0, 1, 1), (0, 2, 2), etc.
This is because if it is the opponent’s turn to move from such a position, he must change
to a position in which the two piles have an unequal number of chips, and then you can
immediately return to a position with an equal number of chips (perhaps the terminal
position).
      If all three piles are non-empty, the situation is more complicated. Clearly, (1, 1, 1),
(1, 1, 2), (1, 1, 3) and (1, 2, 2) are all N-positions because they can be moved to (1, 1, 0) or
(0, 2, 2). The next simplest position is (1, 2, 3) and it must be a P-position because it can
only be moved to one of the previously discovered N-positions. We may go on and discover
that the next most simple P-positions are (1, 4, 5), and (2, 4, 6), but it is diﬃcult to see
how to generalize this. Is (5, 7, 9) a P-position? Is (15, 23, 30) a P-position?
     If you go on with the above analysis, you may discover a pattern. But to save us
some time, I will describe the solution to you. Since the solution is somewhat fanciful and
involves something called nim-sum, the validity of the solution is not obvious. Later, we
prove it to be valid using the elementary notions of P-position and N-position.

    2.2 Nim-Sum. The nim-sum of two non-negative integers is their addition without
carry in base 2. Let us make this notion precise.
     Every non-negative integer x has a unique base 2 representation of the form x =
xm 2 + xm−1 2m−1 + · · · + x1 2 + x0 for some m, where each xi is either zero or one. We use
    m

the notation (xm xm−1 · · · x1 x0 )2 to denote this representation of x to the base two. Thus,
22 = 1 · 16 + 0 · 8 + 1 · 4 + 1 · 2 + 0 · 1 = (10110)2 . The nim-sum of two integers is found
by expressing the integers to base two and using addition modulo 2 on the corresponding
individual components:

Deﬁnition. The nim-sum of (xm · · · x0 )2 and (ym · · · y0 )2 is (zm · · · z0 )2 , and we write
(xm · · · x0 )2 ⊕ (ym · · · y0 )2 = (zm · · · z0 )2 , where for all k, zk = xk + yk (mod 2), that is,
zk = 1 if xk + yk = 1 and zk = 0 otherwise.

                                               I–9
     For example, (10110)2 ⊕ (110011)2 = (100101)2 . This says that 22 ⊕ 51 = 37. This is
easier to see if the numbers are written vertically (we also omit the parentheses for clarity):
                                         22 = 101102
                                         51 = 1100112
                                   nim-sum = 1001012 = 37

      Nim-sum is associative (i.e. x ⊕ (y ⊕ z) = (x ⊕ y) ⊕ z) and commutative (i.e. x ⊕ y =
y ⊕ x), since addition modulo 2 is. Thus we may write x ⊕ y ⊕ z without specifying the
order of addition. Furthermore, 0 is an identity for addition (0⊕ x = x), and every number
is its own negative (x ⊕ x = 0), so that the cancellation law holds: x ⊕ y = x ⊕ z implies
y = z. (If x ⊕ y = x ⊕ z, then x ⊕ x ⊕ y = x ⊕ x ⊕ z, and so y = z.)
      Thus, nim-sum has a lot in common with ordinary addition, but what does it have to
do with playing the game of Nim? The answer is contained in the following theorem of C.
L. Bouton (1902).
Theorem 1. A position, (x1 , x2 , x3 ), in Nim is a P-position if and only if the nim-sum of
its components is zero, x1 ⊕ x2 ⊕ x3 = 0.
    As an example, take the position (x1 , x2 , x3 ) = (13, 12, 8). Is this a P-position? If not,
what is a winning move? We compute the nim-sum of 13, 12 and 8:
                                          13 = 11012
                                          12 = 11002
                                           8 = 10002
                                    nim-sum = 10012 = 9
Since the nim-sum is not zero, this is an N-position according to Theorem 1. Can you ﬁnd
a winning move? You must ﬁnd a move to a P-position, that is, to a position with an even
number of 1’s in each column. One such move is to take away 9 chips from the pile of 13,
leaving 4 there. The resulting position has nim-sum zero:
                                           4 = 1002
                                          12 = 11002
                                           8 = 10002
                                    nim-sum = 00002 = 0
Another winning move is to subtract 7 chips from the pile of 12, leaving 5. Check it out.
There is also a third winning move. Can you ﬁnd it?
     2.3 Nim with a Larger Number of Piles. We saw that 1-pile nim is trivial, and
that 2-pile nim is easy. Since 3-pile nim is much more complex, we might expect 4-pile
nim to be much harder still. But that is not the case. Theorem 1 also holds for a larger
number of piles! A nim position with four piles, (x1 , x2 , x3 , x4 ), is a P-position if and only
if x1 ⊕ x2 ⊕ x3 ⊕ x4 = 0. The proof below works for an arbitrary ﬁnite number of piles.
    2.4 Proof of Bouton’s Theorem. Let P denote the set of Nim positions with nim-
sum zero, and let N denote the complement set, the set of positions of positive nim-sum.
We check the three conditions of the deﬁnition in Section 1.3.

                                             I – 10
     (1) All terminal positions are in P. That’s easy. The only terminal position is the
position with no chips in any pile, and 0 ⊕ 0 ⊕ · · · = 0.
     (2) From each position in N , there is a move to a position in P. Here’s how we
construct such a move. Form the nim-sum as a column addition, and look at the leftmost
(most signiﬁcant) column with an odd number of 1’s. Change any of the numbers that
have a 1 in that column to a number such that there are an even number of 1’s in each
column. This makes that number smaller because the 1 in the most signiﬁcant position
changes to a 0. Thus this is a legal move to a position in P.
     (3) Every move from a position in P is to a position in N . If (x1 , x2 , . . .) is in P
and x1 is changed to x1 < x1 , then we cannot have x1 ⊕ x2 ⊕ · · · = 0 = x1 ⊕ x2 ⊕ · · ·,
because the cancellation law would imply that x1 = x1 . So x1 ⊕ x2 ⊕ · · · = 0, implying
that (x1 , x2 , . . .) is in N .
     These three properties show that P is the set of P-positions.

    It is interesting to note from (2) that in the game of nim the number of winning
moves from an N-position is equal to the number of 1’s in the leftmost column with an
odd number of 1’s. In particular, there is always an odd number of winning moves.

     2.5 Misère Nim. What happens when we play nim under the misère play rule? Can
we still ﬁnd who wins from an arbitrary position, and give a simple winning strategy? This
is one of those questions that at ﬁrst looks hard, but after a little thought turns out to be
easy.
     Here is Bouton’s method for playing misère nim optimally. Play it as you would play
nim under the normal play rule as long as there are at least two heaps of size greater than
one. When your opponent ﬁnally moves so that there is exactly one pile of size greater
than one, reduce that pile to zero or one, whichever leaves an odd number of piles of size
one remaining.
     This works because your optimal play in nim never requires you to leave exactly one
pile of size greater than one (the nim sum must be zero), and your opponent cannot move
from two piles of size greater than one to no piles greater than one. So eventually the game
drops into a position with exactly one pile greater than one and it must be your turn to
move.
     A similar analysis works in many other games. But in general the misère play theory is
much more diﬃcult than the normal play theory. Some games have a fairly simple normal
play theory but an extraordinarily diﬃcult misère theory, such as the games of Kayles and
Dawson’s chess, presented in Section 4 of Chapter 3.

     2.6 Exercises.
     1. (a) What is the nim-sum of 27 and 17?
(b) The nim-sum of 38 and x is 25. Find x.
     2. Find all winning moves in the game of nim,
(a) with three piles of 12, 19, and 27 chips.
(b) with four piles of 13, 17, 19, and 23 chips.
(c) What is the answer to (a) and (b) if the misére version of nim is being played?

                                           I – 11
     3. Nimble. Nimble is played on a game board consisting of a line of squares labelled:
0, 1, 2, 3, . . . . A ﬁnite number of coins is placed on the squares with possibly more than
one coin on a single square. A move consists in taking one of the coins and moving it to
any square to the left, possibly moving over some of the coins, and possibly onto a square
already containing one or more coins. The players alternate moves and the game ends
when all coins are on the square labelled 0. The last player to move wins. Show that this
game is just nim in disguise. In the following position with 6 coins, who wins, the next
player or the previous player? If the next player wins, ﬁnd a winning move.

0     1     2     3       4    5     6     7       8        9   10   11   12     13    14




     4. Turning Turtles. Another class of games, due to H. W. Lenstra, is played with
a long line of coins, with moves involving turning over some coins from heads to tails or
from tails to heads. See Chapter 5 for some of the remarkable theory. Here is a simple
example called Turning Turtles.
     A horizontal line of n coins is laid out randomly with some coins showing heads and
some tails. A move consists of turning over one of the coins from heads to tails, and in
addition, if desired, turning over one other coin to the left of it (from heads to tails or tails
to heads). For example consider the sequence of n = 13 coins:

                      T   H T      T H     T T          T   H H T H T
                      1   2 3      4 5     6 7          8   9 10 11 12 13

One possible move in this position is to turn the coin in place 9 from heads to tails, and
also the coin in place 4 from tails to heads.
(a) Show that this game is just nim in disguise if an H in place n is taken to represent a
nim pile of n chips.
(b) Assuming (a) to be true, ﬁnd a winning move in the above position.
(c) Try this game and some other related games at
http://www.chlond.demon.co.uk/Coins.html .
     5. Northcott’s Game. A position in Northcott’s game is a checkerboard with one
black and one white checker on each row. “White” moves the white checkers and “Black”
moves the black checkers. A checker may move any number of squares along its row, but
may not jump over or onto the other checker. Players move alternately and the last to
move wins. Try out this game at http://www.chlond.demon.co.uk/Northcott.html .
     Note two points:
1. This is a partizan game, because Black and White have diﬀerent moves from a given
position.
2. This game does not satisfy the Ending Condition, (6) of Section 1.2. The players could
move around endlessly.
     Nevertheless, knowing how to play nim is a great advantage in this game. In the
position below, who wins, Black or White? or does it depend on who moves ﬁrst?


                                               I – 12
     6. Staircase Nim. (Sprague (1937)) A staircase of n steps contains coins on some of
the steps. Let (x1 , x2 , . . . , xn ) denote the position with xj coins on step j, j = 1, . . . , n. A
move of staircase nim consists of moving any positive number of coins from any step, j, to
the next lower step, j − 1. Coins reaching the ground (step 0) are removed from play. A
move taking, say, x chips from step j, where 1 ≤ x ≤ xj , and putting them on step j − 1,
leaves xj − x coins on step j and results in xj−1 + x coins on step j − 1. The game ends
when all coins are on the ground. Players alternate moves and the last to move wins.
    Show that (x1 , x2 , . . . , xn ) is a P-position if and only if the numbers of coins on the
odd numbered steps, (x1 , x3 , . . . , xk ) where k = n if n is odd and k = n − 1 if n is even,
forms a P-position in ordinary nim.
     7. Moore’s Nimk . A generalization of nim with a similar elegant theory was pro-
posed by E. H. Moore (1910), called Nimk . There are n piles of chips and play proceeds
as in nim except that in each move a player may remove as many chips as desired from
any k piles, where k is ﬁxed. At least one chip must be taken from some pile. For
k = 1 this reduces to ordinary nim, so ordinary nim is Nim1 . Try playing Nim2 at
http://www.math.ucla.edu/ tom/Games/Moore.html .
                                ˜
     Moore’s Theorem states that a position (x1 , x2 , . . . , xn ), is a P-position in Nimk if
and only if when x1 to xn are expanded in base 2 and added in base k + 1 without carry,
the result is zero. (In other words, the number of 1’s in each column must be divisible by
k + 1.)
    (a) Consider the game of Nimble of Exercise 3 but suppose that at each turn a player
may move one or two coins to the left as many spaces as desired. Note that this is really
Moore’s Nimk with k = 2. Using Moore’s Theorem, show that the Nimble position of
Exercise 3 is an N-position, and ﬁnd a move to a P-position.
     (b) Prove Moore’s Theorem.
     (c) What constitutes optimal play in the misère version of Moore’s Nimk ?




                                                I – 13
     3. Graph Games.

     We now give an equivalent description of a combinatorial game as a game played on a
directed graph. This will contain the games described in Sections 1 and 2. This is done by
identifying positions in the game with vertices of the graph and moves of the game with
edges of the graph. Then we will deﬁne a function known as the Sprague-Grundy function
that contains more information than just knowing whether a position is a P-position or an
N-position.

     3.1 Games Played on Directed Graphs. We ﬁrst give the mathematical deﬁnition
of a directed graph.

Deﬁnition. A directed graph, G, is a pair (X, F ) where X is a nonempty set of vertices
(positions) and F is a function that gives for each x ∈ X a subset of X, F (x) ⊂ X. For
a given x ∈ X, F (x) represents the positions to which a player may move from x (called
the followers of x). If F (x) is empty, x is called a terminal position.

     A two-person win-lose game may be played on such a graph G = (X, F ) by stipulating
a starting position x0 ∈ X and using the following rules:
     (1) Player I moves ﬁrst, starting at x0 .
     (2) Players alternate moves.
     (3) At position x, the player whose turn it is to move chooses a position y ∈ F (x).
     (4) The player who is confronted with a terminal position at his turn, and thus cannot
move, loses.
     As deﬁned, graph games could continue for an inﬁnite number of moves. To avoid
this possibility and a few other problems, we ﬁrst restrict attention to graphs that have
the property that no matter what starting point x0 is used, there is a number n, possibly
depending on x0 , such that every path from x0 has length less than or equal to n. (A
path is a sequence x0 , x1 , x2 , . . . , xm such that xi ∈ F (xi−1 ) for all i = 1, . . . , m, where m
is the length of the path.) Such graphs are called progressively bounded. If X itself is
ﬁnite, this merely means that there are no cycles. (A cycle is a path, x0 , x1 , . . . , xm , with
x0 = xm and distinct vertices x0 , x1 , . . . , xm−1 , m ≥ 3.)
     As an example, the subtraction game with subtraction set S = {1, 2, 3}, analyzed in
Section 1.1, that starts with a pile of n chips has a representation as a graph game. Here
X = {0, 1, . . . , n} is the set of vertices. The empty pile is terminal, so F (0) = ∅, the empty
set. We also have F (1) = {0}, F (2) = {0, 1}, and for 2 ≤ k ≤ n, F (k) = {k−3, k−2, k−1}.
This completely deﬁnes the game.

0        1         2          3         4         5         6          7         8         9          10


                      Fig. 3.1 The Subtraction Game with S = {1, 2, 3}.
     It is useful to draw a representation of the graph. This is done using dots to represent
vertices and lines to represent the possible moves. An arrow is placed on each line to

                                                I – 14
indicate which direction the move goes. The graphic representation of this subtraction
game played on a pile of 10 chips is given in Figure 3.1.

     3.2 The Sprague-Grundy Function. Graph games may be analyzed by consid-
ering P-positions and N-positions. It may also be analyzed through the Sprague-Grundy
function.

Deﬁnition. The Sprague-Grundy function of a graph, (X, F ), is a function, g, deﬁned
on X and taking non-negative integer values, such that

                      g(x) = min{n ≥ 0 : n = g(y)    for y ∈ F (x)}.                    (1)

    In words, g(x) the smallest non-negative integer not found among the Sprague-Grundy
values of the followers of x. If we deﬁne the minimal excludant, or mex, of a set of
non-negative integers as the smallest non-negative integer not in the set, then we may
write simply
                               g(x) = mex{g(y) : y ∈ F (x)}.                         (2)

     Note that g(x) is deﬁned recursively. That is, g(x) is deﬁned in terms of g(y) for
all followers y of x. Moreover, the recursion is self-starting. For terminal vertices, x,
the deﬁnition implies that g(x) = 0, since F (x) is the empty set for terminal x. For
non-terminal x, all of whose followers are terminal, g(x) = 1. In the examples in the
next section, we ﬁnd g(x) using this inductive technique. This works for all progressively
bounded graphs, and shows that for such graphs, the Sprague-Grundy function exists, is
unique and is ﬁnite. However, some graphs require more subtle techniques and are treated
in Section 3.4.
     Given the Sprague-Grundy function g of a graph, it is easy to analyze the correspond-
ing graph game. Positions x for which g(x) = 0 are P-positions and all other positions are
N-positions. The winning procedure is to choose at each move to move to a vertex with
Sprague-Grundy value zero. This is easily seen by checking the conditions of Section 1.3:
     (1) If x is a terminal position, g(x) = 0.
     (2) At positions x for which g(x) = 0, every follower y of x is such that g(y) = 0, and
     (3) At positions x for which g(x) = 0, there is at least one follower y such that
g(y) = 0.
     The Sprague-Grundy function thus contains a lot more information about a game
than just the P- and N-positions. What is this extra information used for? As we will see
in the Chapter 4, the Sprague-Grundy function allows us to analyze sums of graph games.

     3.3 Examples.
     1. We use Figure 3.2 to describe the inductive method of ﬁnding the SG-values, i.e.
the values that the Sprague-Grundy function assigns to the vertices. The method is simply
to search for a vertex all of whose followers have SG-values assigned. Then apply (1) or
(2) to ﬁnd its SG-value, and repeat until all vertices have been assigned values.
     To start, all terminal positions are assigned SG-value 0. There are exactly four ter-
minal positions, to the left and below the graph. Next, there is only one vertex all of

                                          I – 15
                                                           2
                                                                                1
                                      3
                                                                                              0

                   0                               2            0
                                  1                                                   2

                                                                    1
                         0                0 c                                             0
                                                                0


                                          a                                b
                                              1                            2
                          0
                                              Fig. 3.2                                    0


whose followers have been assigned values, namely vertex a. This is assigned value 1, the
smallest number not among the followers. Now there are two more vertices, b and c, all
of whose followers have been assigned SG-values. Vertex b has followers with values 0
and 1 and so is assibgned value 2. Vertex c has only one follower with SG-value 1. The
smallest non-negative integer not equal to 1 is 0, so its SG-value is 0. Now we have three
more vertices whose followers have been assigned SG-values. Check that the rest of the
SG-values have been assigned correctly.
     2. What is the Sprague-Grundy function of the subtraction game with subtraction set
S = {1, 2, 3}? The terminal vertex, 0, has SG-value 0. The vertex 1 can only be moved to
0 and g(0) = 0, so g(1) = 1. Similarly, 2 can move to 0 and 1 with g(0) = 0 and g(1) = 1,
so g(2) = 2, and 3 can move to 0, 1 and 2, with g(0) = 0, g(1) = 1 and g(2) = 2, so
g(3) = 3. But 4 can only move to 1, 2 and 3 with SG-values 1, 2 and 3, so g(4) = 0.
Continuing in this way we see

       x 0    1   2 3   4     5   6 7     8       9 10     11   12 13      14 . . .
    g(x) 0    1   2 3   0     1   2 3     0       1 2       3    0 1        2...

In general g(x) = x (mod 4), i.e. g(x) is the remainder when x is divided by 4.

     3. At-Least-Half. Consider the one-pile game with the rule that you must remove
at least half of the counters. The only terminal position is zero. We may compute the
Sprague-Grundy function inductively as

       x 0    1   2 3   4     5   6 7     8       9 10     11   12 . . .
    g(x) 0    1   2 2   3     3   3 3     4       4 4       4    4 ...

We see that g(x) may be expressed as the exponent in the smallest power of 2 greater than
x: g(x) = min{k : 2k > x}.

                                                  I – 16
     In reality, this is a rather silly game. One can win it at the ﬁrst move by taking all
the counters! What good is it to do all this computation of the Sprague-Grundy function
if one sees easily how to win the game anyway?
     The answer is given in the next chapter. If the game is played with several piles instead
of just one, it is no longer so easy to see how to play the game well. The theory of the
next chapter tells us how to use the Sprague-Grundy function together with nim-addition
to ﬁnd optimal play with many piles.

     3.4 The Sprague-Grundy Function on More General Graphs. Let us look
brieﬂy at the problems that arise when the graph may not be progressively bounded, or
when it may even have cycles.
     First, suppose the hypothesis that the graph be progressively bounded is weakened
to requiring only that the graph be progressively ﬁnite. A graph is progressively ﬁnite
if every path has a ﬁnite length. This condition is essentially equivalent to the Ending
Condition (6) of Section 1.2. Cycles would still be ruled out in such graphs.
     As an example of a graph that is progressively ﬁnite but not progressively bounded,
consider the graph of the game in Figure 3.3 in which the ﬁrst move is to choose the
number of chips in a pile, and from then on to treat the pile as a nim pile. From the initial
position each path has a ﬁnite length so the graph is progressively ﬁnite. But the graph is
not progressively bounded since there is no upper limit to the length of a path from the
initial position.

                                    ω



        0          1          2            3          4          5          6


            Fig 3.3 A progressively ﬁnite graph that is not progressively bounded.


    The Sprague-Grundy theory can be extended to progressively ﬁnite graphs, but trans-
ﬁnite induction must be used. The SG-value of the initial position in Figure 3.3 above
would be the smallest ordinal greater than all integers, usually denoted by ω. We may also
deﬁne nim positions with SG-values ω + 1, ω + 2, . . . , 2ω, . . . , ω 2 , . . . , ω ω , etc., etc., etc. In
Exercise 6, you are asked to ﬁnd several of these transﬁnite SG-values.
    If the graph is allowed to have cycles, new problems arise. The SG-function satisfying
(1) may not exist. Even if it does, the simple inductive procedure of the previous sections
may not suﬃce to ﬁnd it. Even if the the Sprague-Grundy function exists and is known,
it may not be easy to ﬁnd a winning strategy.
    Graphs with cycles do not satisfy the Ending Condition. Play may last forever, in
which case we say the game ends in a tie; neither player wins. Here is an example where
there are tied positions.

                                                  I – 17
                          a
                                     c        d        e

                          b
                                Figure 3.4 A cyclic graph.

     The node e is terminal and so has Sprague-Grundy value 0. Since e is the only follower
of d, d has Sprague-Grundy value 1. So a player at c will not move to d since such a move
obviously loses. Therefore the only reasonable move is to a. After two more moves, the
game moves to node c again with the opponent to move. The same analysis shows that
the game will go around the cycle abcabc . . . forever. So positions a, b and c are all tied
positions. In this example the Sprague-Grundy function does not exist.
     When the Sprague-Grundy function exists, more subtle techniques are required to ﬁnd
it. Some examples for the reader to try his/her skill are found in Exercise 9. But there is
another problem. Suppose the Sprague-Grundy function is known. If you are at a position
with non-zero SG-value, you know you can win by moving to a position with SG-value 0.
But which one? You may choose one that takes you on a long trip and after many moves
you ﬁnd yourself back where you started. An example of this is in Northcott’s Game in
Exercise 5 of Chapter 2. There it is easy to see how to proceed to end the game, but in
general it may be diﬃcult to see what to do. For an eﬃcient algorithm that computes the
Sprague-Grundy function along with a counter that gives information on how to play, see
Fraenkel (2002).

    3.5 Exercises.
    1.




                       Fig 3.5 Find the Sprague-Grundy function.

    2. Find the Sprague-Grundy function of the subtraction game with subtraction set
S = {1, 3, 4}.
     3. Consider the one-pile game with the rule that you may remove at most half the
chips. Of course, you must remove at least one, so the terminal positions are 0 and 1. Find
the Sprague-Grundy function.

                                           I – 18
     4. (a) Consider the one-pile game with the rule that you may remove c chips from a
pile of n chips if and only if c is a divisor of n, including 1 and n. For example, from a
pile of 12 chips, you may remove 1, 2, 3, 4, 6, or 12 chips. The only terminal position is 0.
This game is called Dim+ in Winning Ways. Find the Sprague-Grundy function.
     (b) Suppose the above rules are in force with the exception that it is not allowed
to remove the whole pile. This is called the Aliquot game by Silverman, (1971). (See
http://www.cut-the-knot.com/SimpleGames/Aliquot.html .) Thus, if there are 12 chips,
you may remove 1, 2, 3, 4, or 6 chips. The only terminal position is 1. Find the Sprague-
Grundy function.
     5. Wythoﬀ’s Game. (Wythoﬀ (1907)) The positions of the Wythoﬀ’s game are
given by a queen on a chessboard. Players, sitting on the same side of the board, take
turns moving the queen. But the queen may only be moved vertically down, or horizon-
tally to the left or diagonally down to the left. When the queen reaches the lower left
corner, the game is over and the player to move last wins. Thinking of the squares of
the board as vertices and the allowed moves of the queen as edges of a graph, this be-
comes a graph game. Find the Sprague-Grundy function of the graph by writing in each
square of the 8 by 8 chessboard its Sprague-Grundy value. (You may play this game at
http://www.chlond.demon.co.uk/Queen.html .)
     6. Two-Dimensional Nim is played on a quarter-inﬁnite board with a ﬁnite number
of counters on the squares. A move consists in taking a counter and moving it any number
of squares to the left on the same row, or moving it to any square whatever on any lower
row. A square is allowed to contain any number of counters. If all the counters are on the
lowest row, this is just the game Nimble of Exercise 3 of Chapter 2.
     (a) Find the Sprague-Grundy values of the squares.
     (b) After you learn the theory contained in the next section, come back and see if you
can solve the position represented by the ﬁgure below. Is the position below a P-position
or an N-position? If it is an N-position, what is a winning move? How many moves will
this game last? Can it last an inﬁnite number of moves?




    (c) Suppose we allow adding any ﬁnite number of counters to the left of, or to any
row below, the counter removed. Does the game still end in a ﬁnite number of moves?

                                           I – 19
     7. Show that subtraction games with ﬁnite subtraction sets have Sprague-Grundy
functions that are eventually periodic.
     8. Impatient subtraction games. Suppose we allow an extra move for impatient
players in subtraction games. In addition to removing s chips from the pile where s is
in the subtractions set, S, we allow the whole pile to be taken at all times. Let g(x)
represent the Sprague-Grundy function of the subtraction game with subtraction set S,
and let g +(x) represent the Sprague-Grundy function of impatient subtraction game with
subtraction set S. Show that g +(x) = g(x − 1) + 1 for all x ≥ 1.
     9. The following directed graphs have cycles and so are not progressively ﬁnite. See
if you can ﬁnd the P- and N- positions and the Sprague-Grundy function.

(a)                  (b)                     (c)




                                         I – 20
     4. Sums of Combinatorial Games.

     Given several combinatorial games, one can form a new game played according to the
following rules. A given initial position is set up in each of the games. Players alternate
moves. A move for a player consists in selecting any one of the games and making a legal
move in that game, leaving all other games untouched. Play continues until all of the
games have reached a terminal position, when no more moves are possible. The player
who made the last move is the winner.
     The game formed by combining games in this manner is called the (disjunctive)
sum of the given games. We ﬁrst give the formal deﬁnition of a sum of games and then
show how the Sprague-Grundy functions for the component games may be used to ﬁnd the
Sprague-Grundy function of the sum. This theory is due independently to R. P. Sprague
(1936-7) and P. M. Grundy (1939).

     4.1 The Sum of n Graph Games. Suppose we are given n progressively bounded
graphs, G1 = (X1 , F1 ), G2 = (X2 , F2 ), . . . , Gn = (Xn , Fn ). One can combine them into a
new graph, G = (X, F ), called the sum of G1 , G2 , . . . , Gn and denoted by G = G1 +· · ·+Gn
as follows. The set X of vertices is the Cartesian product, X = X1 ×· · ·×Xn . This is the set
of all n-tuples (x1 , . . . , xn ) such that xi ∈ Xi for all i. For a vertex x = (x1 , . . . , xn ) ∈ X,
the set of followers of x is deﬁned as

                     F (x) = F (x1 , . . . , xn ) = F1 (x1 ) × {x2 } × · · · × {xn }
                                                  ∪ {x1 } × F2 (x2 ) × · · · × {xn }
                                               ∪ ···
                                               ∪ {x1 } × {x2 } × · · · × Fn (xn ).

Thus, a move from x = (x1 , . . . , xn ) consists in moving exactly one of the xi to one of its
followers (i.e. a point in Fi (xi )). The graph game played on G is called the sum of the
graph games G1 , . . . , Gn .
     If each of the graphs Gi is progressively bounded, then the sum G is progressively
bounded as well. The maximum number of moves from a vertex x = (x1 , . . . , xn ) is the
sum of the maximum numbers of moves in each of the component graphs.
     As an example, the 3-pile game of nim may be considered as the sum of three one-pile
games of nim. This shows that even if each component game is trivial, the sum may be
complex.

    4.2 The Sprague-Grundy Theorem. The following theorem gives a method for
obtaining the Sprague-Grundy function for a sum of graph games when the Sprague-
Grundy functions are known for the component games. This involves the notion of nim-sum
deﬁned earlier. The basic theorem for sums of graph games says that the Sprague-Grundy
function of a sum of graph games is the nim-sum of the Sprague-Grundy functions of its
component games. It may be considered a rather dramatic generalization of Theorem 1 of
Bouton.
    The proof is similar to the proof of Theorem 1.

                                                 I – 21
Theorem 2. If gi is the Sprague-Grundy function of Gi , i = 1, . . . , n, then G = G1 +
· · · + Gn has Sprague-Grundy function g(x1 , . . . , xn ) = g1 (x1 ) ⊕ · · · ⊕ gn (xn ).
      Proof. Let x = (x1 , . . . , xn ) be an arbitrary point of X. Let b = g1 (x1 )⊕ · · ·⊕ gn (xn ).
We are to show two things for the function g(x1 , . . . , xn ):
                 (1) For every non-negative integer a < b, there is a follower of
          (x1 , . . . , xn ) that has g-value a.
                 (2) No follower of (x1 , . . . , xn ) has g-value b.
Then the SG-value of x, being the smallest SG-value not assumed by one of its followers,
must be b.
      To show (1), let d = a ⊕ b, and k be the number of digits in the binary expansion of
d, so that 2k−1 ≤ d < 2k and d has a 1 in the kth position (from the right). Since a < b, b
has a 1 in the kth position and a has a 0 there. Since b = g1 (x1 ) ⊕ · · · ⊕ gn (xn ), there is at
least one xi such that the binary expansion of gi (xi ) has a 1 in the kth position. Suppose
for simplicity that i = 1. Then d ⊕ g1 (x1 ) < g1 (x1 ) so that there is a move from x1 to
some x1 with g1 (x1 ) = d ⊕ g1 (x1 ). Then the move from (x1 , x2 , . . . , xn ) to (x1 , x2 , . . . , xn )
is a legal move in the sum, G, and
     g1 (x1 ) ⊕ g2 (x2 ) ⊕ · · · ⊕ gn(xn ) = d ⊕ g1 (x1 ) ⊕ g2 (x2 ) ⊕ · · · ⊕ gn (xn ) = d ⊕ b = a.

      Finally, to show (2), suppose to the contrary that (x1 , . . . , xn ) has a follower with the
same g-value, and suppose without loss of generality that this involves a move in the ﬁrst
game. That is, we suppose that (x1 , x2 , . . . , xn ) is a follower of (x1 , x2 , . . . , xn ) and that
g1 (x1 ) ⊕ g2 (x2 ) ⊕ · · · ⊕ gn (xn ) = g1 (x1 ) ⊕ g2 (x2 ) ⊕ · · · ⊕ gn (xn ). By the cancellation law,
g1 (x1 ) = g1 (x1 ). But this is a contradiction since no position can have a follower of the
same SG-value.
      One remarkable implication of this theorem is that every progressively bounded im-
partial game, when considered as a component in a sum of such games, behaves as if it
were a nim pile. That is, it may be replaced by a nim pile of appropriate size (its Sprague-
Grundy value) without changing the outcome, no matter what the other components of
the sum may be. We express this observation by saying that every (progressively bounded)
impartial game is equivalent to some nim pile.
      4.3 Applications. 1. Sums of Subtraction Games. The one-pile subtraction game,
G(m), with subtraction set Sm = {1, 2, . . . , m}, in which from 1 to m chips may be removed
from the pile, has Sprague-Grundy function gm (x) = x (mod m + 1), and 0 ≤ gm (x) ≤ m.
      Consider the sum of three subtraction games. In the ﬁrst game, m = 3 and the pile
has 9 chips. In the second, m = 5 and the pile has 10 chips. And in the third, m = 7
and the pile has 14 chips. Thus, we are playing the game G(3) + G(5) + G(7) and the
initial position is (9, 10, 14). The Sprague-Grundy value of this position is g(9, 10, 14) =
g3 (9) ⊕ g5 (10) ⊕ g7 (14) = 1 ⊕ 4 ⊕ 6 = 3. One optimal move is to change the position in
game G(7) to have Sprague-Grundy value 5. This can be done by removing one chip from
the pile of 14, leaving 13. There is another optimal move. Can you ﬁnd it?
      This shows the importance of knowing the Sprague-Grundy function. We present
further examples of computing the Sprague-Grundy function for various one-pile games.

                                                   I – 22
Note that although many of these one-pile games are trivial, as is one-pile nim, the Sprague-
Grundy function has its main use in playing the sum of several such games.
     2. Even if Not All – All if Odd. Consider the one-pile game with the rule that you
can remove (1) any even number of chips provided it is not the whole pile, or (2) the whole
pile provided it has an odd number of chips. There are two terminal positions, zero and
two. We compute inductively,

                    x 0     1   2 3   4   5 6       7   8   9 10   11   12 . . .
                 g(x) 0     1   0 2   1   3 2       4   3   5 4     6    5 ...

and we see that g(2k) = k − 1 and g(2k − 1) = k for k ≥ 1.
    Suppose this game is played with three piles of sizes 10, 15 and 20. The SG-values are
g(10) = 4, g(15) = 7 and g(20) = 9. Since 4 ⊕ 7 ⊕ 9 = 10 is nit zero, this is an N-position.
A winning move is to change the SG-value 9 to a 3. For this we may remove 12 chips from
the pile of 20 leaving 8, since g(8) = 3.
     3. A Sum of Three Diﬀerent Games. Suppose you are playing a three pile take-away
game. For the ﬁrst pile of 18 chips, the rules of the previous game, Even if Not All – All
if Odd, apply. For the second pile of 17 chips, the rules of At-Least-Half apply (Example
3.3.3). For the third pile of 7 chips, the rules of nim apply. First, we ﬁnd the SG-values of
the three piles to be 8, 5, and 7 respectively. This has nim-sum 10 and so is an N-position.
It can be changed to a P-position by changing the SG-value of the ﬁrst pile to 2. From
the above table, this occurs for piles of 3 and 6 chips. We cannot move from 18 to 3, but
we can move from 18 to 6. Thus an optimal move is to subtract 12 chips from the pile of
18 chips leaving 6 chips.

     4.4 Take-and-Break Games. There are many other impartial combinatorial games
that may be solved using the methods of this chapter. We describe Take-and-Break Games
here, and in the next chapter, we look in greater depth at another impartial combinatorial
game called Green Hackenbush. Take-and-Break Games are games where the rules allow
taking and/or splitting one pile into two or more parts under certain conditions, thus
increasing the number of piles.
    1. Lasker’s Nim. A generalization of Nim into a Take-and-Break Game is due
to Emanuel Lasker, world chess champion from 1894 to 1921, and found in his book,
Brettspiele der Völker (1931), 183-196.
    Suppose that each player at his turn is allowed (1) to remove any number of chips
from one pile as in nim, or (2) to split one pile containing at least two chips into two
non-empty piles (no chips are removed).
     Clearly the Sprague-Grundy function for the one-pile game satisﬁes g(0) = 0 and
g(1) = 1. The followers of 2 are 0, 1 and (1, 1), with respective Sprague-Grundy values
of 0, 1, and 1 ⊕ 1 = 0. Hence, g(2) = 2. The followers of 3 are 0, 1, 2, and (1, 2), with
Sprague-Grundy values 0, 1, 2, and 1 ⊕ 2 = 3. Hence, g(3) = 4. Continuing in this manner,
we see
                    x 0 1 2 3 4 5 6 7 8 9 10 11 12 . . .
                 g(x) 0 1 2 4 3 5 6 8 7 9 10 12 11 . . .

                                           I – 23
We therefore conjecture that g(4k + 1) = 4k + 1, g(4k + 2) = 4k + 2, g(4k + 3) = 4k + 4
and g(4k + 4) = 4k + 3, for all k ≥ 0.
    The validity of this conjecture may easily be veriﬁed by induction as follows.
          (a) The followers of 4k + 1 that consist of a single pile have Sprague-Grundy
    values from 0 to 4k. Those that consist of two piles, (4k, 1), (4k − 1, 2), . . . , (2k +
    1, 2k), have even Sprague-Grundy values, and therefore g(4k + 1) = 4k + 1.
          (b) The followers of 4k + 2 that consist of a single pile have Sprague-Grundy
    values from 0 to 4k+1. Those that consist of two piles, (4k+1, 1), (4k, 2), . . . , (2k+
    1, 2k + 1), have Sprague-Grundy values alternately divisible by 4 and odd, so that
    g(4k + 2) = 4k + 2.
          (c) The followers of 4k + 3 that consist of a single pile have Sprague-Grundy
    values from 0 to 4k + 2. Those that consist of two piles, (4k + 2, 1), (4k +
    1, 2), . . . , (2k + 2, 2k + 1), have odd Sprague-Grundy values, and in particular
    g(4k + 2, 1) = 4k + 3. Hence g(4k + 3) = 4k + 4.
          (d) Finally, the followers of 4k + 4 that consist of a single pile have Sprague-
    Grundy values from 0 to 4k + 2, and 4k + 4. Those that consist of two piles,
    (4k + 3, 1)(4k + 2, 2), . . . , (2k + 2, 2k + 2), have Sprague-Grundy values alternately
    equal to 1 (mod 4) and even. Hence, g(4k + 4) = 4k + 3.

     Suppose you are playing Lasker’s nim with three piles of 2, 5, and 7 chips. What
is your move? First, ﬁnd the Sprague-Grundy value of the component positions to be 2,
5, and 8 respectively. The nim-sum of these three numbers is 15. You must change the
position of Sprague-Grundy value 8 to a position of Sprague-Grundy value 7. This may
be done by splitting the pile of 7 chips into two piles of say 1 and 6 chips. At the next
move, your opponent will be faced with a four pile game of Lasker’s nim with 1, 2, 5 and
6 chips. This has Sprague-Grundy value zero and so is a P-position.
     2. The Game of Kayles. This game was introduced a century ago by Sam Loyd
(see Mathematical Puzzles of Sam Loyd, Vol 2., 1960, Dover Publications), and by H. E.
Dudeney (see The Canterbury Puzzles and Other Curious Problems, 1958, Dover Publica-
tions, New York). Two bowlers face a line of 13 bowling pins in a row with the second pin
already knocked down. “It is assumed that the ancient players had become so expert that
they could always knock down any single kayle-pin, or any two kayle-pins that stood close
together (i.e. adjacent pins). They therefore altered the game, and it was agreed that the
player who knocked down the last pin was the winner.”
     This is one of our graph games played with piles of chips whose moves can be described
as follows. You may remove one or two chips from any pile after which, if desired, you
may split that pile into two nonempty piles.
     Removing one chip from a pile without splitting the pile corresponds to knocking down
the end chip of a line. Removing one chip with splitting the pile into two parts corresponds
to knocking down a pin in the interior of the line. Similarly for removing two chips.
     Let us ﬁnd the Sprague-Grundy function, g(x), for this game. The only terminal
position is a pile with no chips, so g(0) = 0. A pile on one chip can be moved only to
an empty pile, so g(1) = 1. A pile of two chips can be moved either to a pile of one or

                                           I – 24
zero chips, so g(2) = 2. A pile of three chips can be moved to a pile of two or one chips,
(SG-value 1 and 2) or to two piles of one chip each (SG-value 0), so g(3) = 3. Continuing
in this way, we ﬁnd more of the Sprague-Grundy values in Table 4.1.

               y\z     0       1       2   3       4      5     6    7   8   9 10 11
               0       0       1       2   3       1      4     3    2   1   4 2 6
              12       4       1       2   7       1      4     3    2   1   4 6 7
              24       4       1       2   8       5      4     7    2   1   8 6   7
              36       4       1       2   3       1      4     7    2   1   8 2   7
              48       4       1       2   8       1      4     7    2   1   4 2   7
              60       4       1       2   8       1      4     7    2   1   8 6 7
              72       4       1       2   8       1      4     7    2   1   8 2   7
       Table 4.1. The SG-values for Kayles. Entries for the Table are for g(y + z)
                     where y is on the left side and z is at the top.

     From x = 72 on, the SG-values are periodic with period 12, with the values in the
last line repeating forever. There are only 14 exceptions to the sequence of the last line.
They are displayed in bold face type. The last exception is at x = 70. Since we know all
the SG-values, we may consider the game as solved.
     3. Dawson’s Chess. One of T. R. Dawson’s fanciful problems in Caissa’s Wild Roses
(1935), republished in Five Classics of Fairy Chess by Dover (1973), is give-away chess
played with pawns. “Given two equal lines of opposing Pawns, White on 3rd rank, Black
on 5th, n adjacent ﬁles, White to play at losing game, what is the result?” (Captures must
be made, last player to move loses.) We treat this game here under the normal ending
rule, that the last player to move wins.
     Those unfamiliar with the movement of the pawn in chess might prefer a diﬀerent way
of describing the game as a kind of misére tic-tac-toe on a line of n squares, with both
players using X as the mark. A player may place an X on any empty square provided it
is not next to an X already placed. (The player who is forced to move next to another X
loses.)
     This game may be described as a game of removing chips from a pile and possibly
splitting a pile into two piles. If n = 1 there is only one move to n = 0, ending the game.
For n > 1, a move of placing an X at the end of a line removes the two squares at that end
of the line from the game. This corresponds to removing two chips from the pile. Similarly,
placing an X one square from the end corresponds to removing three chips from the pile.
Placing an X in one of the squares not at the end or next to it corresponds to removing
three chips from the pile and splitting the pile into to parts. Thus the rules of the game
are: (1) You may remove one chip if it is the whole pile, or (2) you may remove two chips
from any pile, or (3) you may remove three chips from any pile and if desired split that
pile into two parts.
     The Sprague-Grundy sequence for Dawson’s chess begins
       x 0     1     2 3   4       5   6 7     8       9 10     11   12 13   14   15 16   17 18
    g(x) 0     1     1 2   0       3   1 1     0       3 3       2    2 4     0    5 2     2 3

                                                       I – 25
It is eventually periodic with period 34. There are only 7 exceptions and the last exception
occurs at n = 51. Can you ﬁnd the winning move on a line of 18 squares? Armed with the
above Sprague-Grundy sequence, you may hone your skill at the game by playing against
the computer at http://www.math.ucla.edu/ tom/Games/dawson.html .
                                                  ˜
     4. Grundy’s Game. In Grundy’s Game, the only legal move is to split a single pile
into two nonempty piles of diﬀerent sizes. Thus the only terminal positions are piles of
size one or two. The Sprague-Grundy sequence is easy to compute for small pile sizes
(see Exercise 10) and the values increase very slowly. Is the Sprague-Grundy sequence
eventually periodic? This is unknown though more than 20,000,000,000 values have been
computed as of 2002.

     4.5 Exercises.
    1. Consider the take-away game with the rule that (1) you may remove any even
number of chips from any pile, or (2) you may remove any pile consisting of one chip. The
only terminal position is 0. Find the Sprague-Grundy function.
     2. Consider the one-pile game with the rule that you may remove (1) any number of
chips divisible by three provided it is not the whole pile, or (2) the whole pile, but only if
it has 2 (mod 3) chips (that is, only if it has 2, or 5, or 8, . . . chips). The terminal positions
are zero, one and three. Find the Sprague-Grundy function.
    3. Suppose you are playing a three-pile subtraction game. For the ﬁrst pile of 18
chips, the rules of Exercise 1 hold. For the second pile of 17 chips, the rules of Exercise 2
apply. For the third pile of 7 chips, the rules of nim apply. What is the Sprague-Grundy
value of this position? Find an optimal move.
     4. Solve the Kayles problem of Dudeney and Loyd. Of the 13 bowling pins in a row,
the second has been knocked down, leaving:




                  1          3   4    5    6     7      8   9   10   11   12   13


                      Figure 4.1 The Kayles problem of Dudeney and Loyd

(a) Show this is an N-position. You may use Table 4.1.
(b) Find a winning move. Which pin(s) should be knocked down?
(c) Now that you know the theory and have Table 4.1 at hand, you can go to
http://www.chlond.demon.co.uk/Kayles.html and beat the computer.
     5. Suppose at each turn a player may (1) remove one or two chips, or (2) remove one
chip and split the remaining chips into two piles.
(a) Find the Sprague-Grundy function.
(b) Suppose the starting position consists of one pile with 15 chips. Find an optimal ﬁrst
move.

                                               I – 26
     6. Suppose that at each turn a player may (1) remove one chip if it is a whole pile,
or (2) remove two or more chips and, if desired, split the remaining chips into two piles.
Find the Sprague-Grundy function.
    7. Suppose that at each turn a player may select one pile and remove c chips if c = 1
(mod 3) and, if desired, split the remaining chips into two piles. Find the Sprague-Grundy
function.
     8. Rims. A position in the game of Rims is a ﬁnite set of dots in the plane, possibly
separated by some nonintersecting closed loops. A move consists of drawing a closed loop
passing through any positive number of dots (at least one) but not touching any other
loop. Players alternate moves and the last to move wins.
(a) Show that this game is a disguised form of nim.
(b) In the position given in Figure 4.2, ﬁnd a winning move, if any.




                               Figure 4.2 A Rims Position
     9. Rayles. There are many geometric games like Rims treated in Winning Ways,
Chapter 17. In one of them, called Rayles, the positions are those of Rims, but in Rayles,
each closed loop must pass through exactly one or two points.
(a) Show that this game is a disguised form of Kayles.
(b) Assuming the position given in Figure 4.2 is a Rayles position, ﬁnd a winning move, if
any.
     10. Grundy’s Game. (a) Compute the Sprague-Grundy function for Grundy’s
game, Example 4 Section 4.4, for a pile of n chips for n = 1, 2, . . . , 13.
(b) In Grundy’s game with three piles of sizes 5, 8, and 13, ﬁnd all winning ﬁrst moves, if
any.
     11. A game is played on a ﬁnite (undirected) graph as follows. Players alternate
moves. A move consists of removing a vertex and all edges incident to that vertex, with
the exception that a vertex without any incident edges may not be removed. That is, at
least one edge must be removed. Last player to move wins. Investigate this game. For
example,
(a) Find the Sprague-Grundy value of Sn , the star with n points. (The star with n points
is the graph with n + 1 vertices and n edges that share a common vertex.)
(b) Find the Sprague-Grundy value of Ln , the line of n edges and n + 1 vertices (at least
for small values of n).
(c) Find the Sprague-Grundy value of Cn, the circular graph of n vertices and n edges.
(d) Find the Sprague-Grundy value of a double star. (A double star is a graph of two stars
joined by a single edge.)

                                          I – 27
(e) Who wins the 3 by 3 square lattice, (i)? Who wins the tic-tac-toe board, (ii)? Gener-
alize.




                       (i)                                   (ii)

                                       Figure 4.3




                                         I – 28
    5. Coin Turning Games.

     We have mentioned the game called Turning Turtles in Exercise 2.4 as a disguised
version of nim. This form of the game of nim is a prototype of a class of other games
that have similar descriptions. These ideas are due to H. W. Lenstra. In particular,
the extension of these games to two dimensions leads to a beautiful theory involving nim
multiplication which, with the deﬁnition of nim addition, makes the non-negative integers
into a ﬁeld.
     In this class of games, called Coin Turning Games, we are given a ﬁnite number of
coins in a row, each showing either heads or tails. A move consists of turning over, from
heads to tails or from tails to heads, all coins in a set of coins allowed by the rules of the
game. The rules always specify that the rightmost coin turned over must go from heads
to tails. The purpose of this is to guarantee that the game will end in a ﬁnite number of
moves no matter how it is played (the Ending Condition).
     The rules also specify that the set of coins that may be turned over depends only on
the position of the rightmost coin turned over and not otherwise on the position of the
other heads and tails, or on the previous moves of the game, or on time, etc. Moreover,
the games are impartial and the last player to move wins.
     Under these conditions, the same decomposition that worked for Turning Turtles also
works for all these games, namely: A position with k heads in positions x1 , . . . , xk is the
(disjunctive) sum of k games each with exactly one head, where for j = 1, . . . , k the head
in game j is at xj . For example, the game, T H H T T H, is the sum of the three games,
T H, T T H, and T T T T T H. This implies that to ﬁnd the Sprague-Grundy value of a
position, we only need to know the Sprague-Grundy values of positions with exactly one
head. In the example, g(T H H T T H) = g(T H) ⊕ g(T T H) ⊕ g(T T T T T H). We begin
with some examples.

    5.1 Examples.
     1. Subtraction Games. Many impartial combinatorial games can be put into
the form of coin turning games, though the description may become rather complex. On
the other hand, some games with simple descriptions as coin turning games have com-
plex descriptions as games played with piles of counters. Subtraction Games have simple
descriptions under both forms.
     Take for example the simple take-away game of Section 1.1, where we may remove
from 1 to 3 counters from a pile. As a coin turning game, we may take the rules to be
as follows. Label the positions of the coins starting from 1 for the leftmost coin, to n for
the rightmost coin, where n is the number of coins. Some coin, say in position x, must be
turned over from heads to tails, and a second coin in one of the positions x − 1, x − 2, or
x − 3, must be turned over, except when x ≤ 3, in which case a second coin need not be
turned over.
     We may compute the Sprague-Grundy function of this game as we did in Section 3.3.
A heads in position 1 can only be turned over, ending the game; so it has SG-value 1. A
single heads in the second position can be moved to a single heads in the ﬁrst position or

                                           I – 29
to all tails; so it has SG-value 2. Continuing this analysis, we ﬁnd

            position x : 1      2   3 4    5    6   7 8     9    10 11    12    13 14 . . .
                                                                                                   (1)
                  g(x) : 1      2   3 0    1    2   3 0     1     2 3      0     1  2...

exactly as before. A row of coins with several heads corresponds to several piles of counters.
     Other subtraction games may be treated similarly. If S is the subtraction set, then
as a coin turning game it may be described as: Some x goes from heads to tails, and also
some y = x − z is turned over for some z in S, unless x − z = 0 for some z in S in which
case no second coin need be reversed.
     There is another way of describing subtraction games as coin turning games. We
require exactly two coins to be turned over at all times, the distance between the coins
being y for some y ∈ S, with the rightmost coin going from heads to tails. In the analysis
for this case, it is more convenient to start labelling the positions of the coins from 0
instead of 1. The ﬁrst coin on the left is in position 0, the second coin from the left is in
position 1 and so on.
     In the analysis of the simple case where S = {1, 2, 3}, a singleton heads in position
0 is a terminal position and so has SG-value 0. A singleton heads in position 1 can only
be moved to a singleton heads in position 0 and so has SG-value 1. Continuing in the
manner gives the same Sprague-Grundy function as in (1) but starting at position x = 0
with g(0) = 0.
     2. Twins. This method applied to the game Turning Turtles gives us an equivalent
game called Twins, which is also equivalent to nim. In turning Turtles, we may turn over
one or two coins, with the rightmost coin going from heads to tails. In the game, Twins, the
rules are: Turn over exactly two coins, with the rightmost coin going from heads to tails. If
we label the positions of the coins from the left starting with 0, then the Sprague-Grundy
function will be g(x) = x, the same as nim.
     3. Mock Turtles. Here is a game that is better suited for description as a coin-
turning game than as a game involving piles of counters. It is like Turning Turtles but we
are allowed to turn over up to three coins. The rules are : Turn over one, two, or three
coins with the rightmost going from heads to tails. In computing the Sprague-Grundy
function, it is again useful to start labelling the positions from 0, but for a diﬀerent reason.
     A heads in position 0 can only move to the terminal position and so has SG-value 1.
A heads in position 1 can move to heads in position 0 or to the terminal position and so
has SG-value 2. A heads in position 2 can move to heads in position 1 (SG-value 2), or to
heads in position 0 (SG-value 1), or to heads in positions 0 and 1 (SG-value 3) or to the
terminal position, and so has SG-value 4. Continuing further we ﬁnd

      position x :   0 1    2   3   4 5         6    7 8         9 10    11    12 13    14 . . .
                                                                                                   (2)
            g(x) :   1 2    4   7   8 11       13   14 16       19 21    22    25 26    28 . . .

    What are these numbers? It seems as if g(x) is equal to either 2x or 2x + 1; but which
one? The answer depends on the number of 1’s appearing in the binary expansion of 2x.
An nonnegative integer is called odious if the number of 1’s in its binary expansion is odd,

                                               I – 30
and it is called evil otherwise. Thus the numbers 1, 2, 4, and 7 are odious since the binary
expansions are 1, 10, 100, and 111. The numbers 0, 3, 5, and 6 are evil (expansions 0,
11, 101, and 110). All the numbers appearing as g(x) in (2) are odious. Moreover, the
sequence (2) seems to contain all the odious numbers in order. Thus it seems as if g(x) is
2x if 2x is odious and 2x + 1 if 2x is evil. How can we check this?
   The key observation is to note that the nim-sum of two evil numbers or two odious
numbers is evil, and that the nim-sum of a evil number and an odious number is odious.
Symbolically,

                             evil ⊕ evil = odious ⊕ odious = evil
                            evil ⊕ odious = odious ⊕ evil = odious

     To show that the SG-values in (2) are just the odious numbers in order, we proceed
by induction. Suppose this hypothesis is true for every position to the left of x, and we
want to show that g(x) is the next odious number. Note that we can always move to an
SG-value 0 by turning over just the coin at x. By turning over the coin at x and one other
coin, we can move to all previous odious numbers. By turning over the coin at x and two
other coins, we can move all smaller evil numbers, since every nonzero evil number is the
nim-sum of two smaller odious numbers; but we can never move the next odious number
because the sum of two odious numbers is evil. This completes the induction.
     Suppose now that a Mock Turtles position with heads at positions x1 , x2 , . . . , xn is a
P-position, so that g(x1 ) ⊕ · · · ⊕ g(xn ) = 0. Then certainly n must be even since the sum
of an odd number of odious numbers is odious and cannot be zero. Moreover, since g(x) is
just 2x with a 1 added if necessary to make g(x) odious, we must have x1 ⊕ · · · ⊕ xn = 0.
Conversely, if x1 ⊕ · · · ⊕ xn = 0 and n is even, then g(x1 ) ⊕ · · · ⊕ g(xn ) = 0. This gives us
a very simple description of the P-positions in Turning Turtles.
    The P-positions in Mock Turtles are exactly those P-positions in nim that have an
even number of piles.
     Note that {1, 2, 3} is a P-position in nim, but not in Mock Turtles. However, the
position {0, 1, 2, 3} is a P-position in Mock Turtles. The coin at position 0 is known
as the Mock Turtle. Even though the Mock Turtle has Sprague-Grundy value 0 in this
interpretation of the P-positions, it still plays a role in the solution.
     4. Ruler. Here is another game with a simple description as a coin turning game.
Any number of coins may be turned over but they must be consecutive, and the rightmost
coin must be turned from heads to tails. If we number the positions of the coins starting
with 1 on the left, the Sprague-Grundy function for this game satisﬁes

          g(n) = mex{0, g(n − 1), g(n − 1) ⊕ g(n − 2), . . . , g(n − 1) ⊕ . . . ⊕ g(1)}.

From this, it is easy to show that the function satisﬁes

      position x :   1 2    3   4   5 6    7    8   9 10    11 12     13   14 15     16 . . .
                                                                                                (3)
            g(x) :   1 2    1   4   1 2    1    8   1 2      1 4       1    2 1      16 . . .

                                               I – 31
Thus, g(x) is the largest power of 2 dividing x. This game is called Ruler because of
the way the function g(x) imitates the marks on a ruler, (similar to the Sprague-Grundy
function for Dim+ ).
     5. Grunt. Turn over four symmetric coins, one of which is the leftmost coin, with
the rightmost coin going from heads to tails. This is Grundy’s game in disguise. Number
the positions of the coins from 0. A singleton heads in positions 0, 1, or 2, is a terminal
position and so has SG-value 0. A singleton heads in position n ≥ 3 gets replaced by heads
in positions 0, x and n − x for some x < n/2. The heads in position 0 has SG-value 0, so
this is like taking a pile of n counters and splitting it into two nonempty piles of diﬀerent
sizes — exactly Grundy’s Game.

     5.2 Two-dimensional Coin Turning Games. In the generalization of coin turning
games to two dimensions, the coins to be turned are in a rectangular array. We number
the coordinates of the array starting at (0, 0), with coins at coordinates (x, y) with x ≥ 0
and y ≥ 0.
     The condition that the rightmost coin turned must be from heads to tails is replaced
by the condition that one of the coins, say at (x, y) and referred to as the southeast coin,
goes from heads to tails and that any other coins that are turned over must be in the
rectangle {(a, b) : 0 ≤ a ≤ x, 0 ≤ b ≤ y}.
     1. Acrostic Twins. A move is to turn over two coins, either in the same row or
the same column, with the southeast coin going from heads to tails. The Sprague-Grundy
function satisﬁes

                   g(x, y) = mex{g(x, b), g(a, y) : 0 ≤ b < y, 0 ≤ a < x},               (4)

this being the least number not appearing earlier in the same row or column as (x, y).
If y = 0, this game is just nim, so g(x, 0) = x; similarly g(0, y) = y, the function being
symmetric. It is easy to construct the following table of the values of g(x, y); each entry
is just the mex of the numbers above it and to the left. When we do we ﬁnd a pleasant
surprise — that g(x, y) is just the nim-sum, x ⊕ y.

                           0    1    2   3      4     5   6    7    8    9
                     0     0    1    2 3       4       5 6     7    8    9
                     1     1    0    3 2       5       4 7     8    9    8
                     2     2    3    0 1       6       7 4     5   10   11
                     3     3    2    1 0       7       6 5     4   11   10
                     4     4    5    6 7       0       1 2     3   12   13
                     5     5    4    7 6       1       0 3     2   13   12
                     6     6    7    4 5       2       3 0     1   14   15
                     7     7    6    5 4       3       2 1     0   15   14
                     8     8    9   10 11     12      13 14   15    0    1
                     9     9    8   11 10     13      12 15   14    1    0

                      Table 5.1. For Acrostic Twins, g(x, y) = x ⊕ y.

                                             I – 32
      To ﬁx the ideas, consider the game with layout
                                         T T T T T
                                         T T T H T
                                         T T T T T                                       (5)
                                         T T H T T
                                         T T T T H
We use the convention when referring to a position at (x, y) in such a layout, that x
represents row and y represents column. Thus, the three heads are at positions (1,3), (3,2)
and (4,4). The heads are at positions with SG-values, 2, 1 and 0. Since 2 ⊕ 1 ⊕ 0 = 3, this
is an N-position. It can be moved to a P-position by moving the SG-value 2 to SG-value
1. This is done by turning over the coins at positions (1,3) and (1,0). (There are other
winning moves. Can you ﬁnd them?)
      2. Turning Corners. Let us examine a more typical game.
      A move consists of turning over four distinct coins at the corners of a rectangle, i.e.
(a, b), (a, y), (x, b) and (x, y), where 0 ≤ a < x and 0 ≤ b < y.
      The Sprague-Grundy function of this game satisﬁes the condition
             g(x, y) = mex{g(x, b) ⊕ g(a, y) ⊕ g(a, b) : 0 ≤ a < x, 0 ≤ b < y}.             (6)
Since we require that the four corners of the selected rectangle be distinct, no coin along
the edge of the board may be used as the southeast coin. Therefore, g(x, 0) = g(0, y) = 0
for all x and y. Moreover, g(1, 1) = 1 and g(x, 1) = mex{g(a, 1) : 0 ≤ a < x} = x by
induction (or simply by noticing that the game starting at (x, 1) is just nim). The rest of
Table 5.2 may be constructed using equation (6).


             0    1    2    3    4    5    6   7     8    9 10     11   12 13     14   15
       0     0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0
       1     0    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15
       2     0    2    3    1    8   10   11    9   12   14   15   13    4    6    7    5
       3     0    3    1    2   12   15   13   14    4    7    5    6    8   11    9   10
       4     0    4    8   12    6    2   14   10   11   15    3    7   13    9    5    1
       5     0    5   10   15    2    7    8   13    3    6    9   12    1    4   11   14
       6     0    6   11   13   14    8    5    3    7    1   12   10    9   15    2    4
       7     0    7    9   14   10   13    3    4   15    8    6    1    5    2   12   11
       8     0    8   12    4   11    3    7   15   13    5    1    9    6   14   10    2
       9     0    9   14    7   15    6    1    8    5   12   11    2   10    3    4   13
      10     0   10   15    5    3    9   12    6    1   11   14    4    2    8   13    7
      11     0   11   13    6    7   12   10    1    9    2    4   15   14    5    3    8
      12     0   12    4    8   13    1    9    5    6   10    2   14   11    7   15    3
      13     0   13    6   11    9    4   15    2   14    3    8    5    7   10    1   12
      14     0   14    7    9    5   11    2   12   10    4   13    3   15    1    8    6
      15     0   15    5   10    1   14    4   11    2   13    7    8    3   12    6    9

                      Table 5.2. For Turning Corners, g(x, y) = x ⊗ y.

                                           I – 33
     As an illustration, let us compute g(4, 4) using equation (6). The are 16 moves from
position (4,4), but using symmetry we can reduce the number to 10, say (x, y) for 0 ≤
x ≤ y ≤ 3. Computing the SG-values of each of these moves separately, we ﬁnd g(4, 4) =
mex{0, 4, 8, 12, 1, 14, 11, 3, 5, 2} = 6.
    If (5) represents a position in Turning Corners, we can ﬁnd the SG-value easily as
3 ⊕ 1 ⊕ 6 = 4. This is therefore an N-position, that can be moved to a P-position by
moving the SG-value 6 to an SG-value 2. There is a unique way that this may be done,
namely by turning over the four coins at (3,3), (3,4), (4,3) and (4,4).

                        T   T   T T T               T   T T   T T
                        T   T   T H T               T   T T   H T
                        T   T   T T T       −→      T   T T   T T
                        T   T   H T T               T   T H   H H
                        T   T   T T H               T   T T   H T

     5.3 Nim Multiplication. The entries in Table 5.2 may seem rather haphazard, but
such an appearance is deceptive. In fact, the function g deﬁned by (6) may be considered
as a form of nim multiplication. Using the notation x⊗ y to represent g(x, y), we can easily
see that 0 acts like a zero for multiplication since x ⊗ 0 = 0 ⊗ x = 0 for all x; and 1 acts
like a unit for multiplication since x ⊗ 1 = 1 ⊗ x = x for all x. Moveover, the commutative
law obviously holds: x ⊗ y = y ⊗ x for all x and y.
    Not at all obvious is the fact that the associative law holds:

                      x ⊗ (y ⊗ z) = (x ⊗ y) ⊗ z,    for all x, y and z.                  (7)

Thus 3 ⊗ (5 ⊗ 6) = 3 ⊗ 8 = 4, and (3 ⊗ 5) ⊗ 6 = 15 ⊗ 6 = 4.
    Even more remarkably, when combined with nim addition, the distributive law holds:

                    x ⊗ (y ⊕ z) = (x ⊗ y) ⊕ (x ⊗ z) for all x, y and z.                  (8)

For example, 3 ⊗ (5 ⊕ 6) = 3 ⊗ 3 = 2 and (3 ⊗ 5) ⊕ (3 ⊗ 6) = 15 ⊕ 13 = 2.
     Another signiﬁcant fact is that every number other than zero has a multiplicative
inverse. One sees this by noting that there is a 1 in every row except the top row of the
multiplication table. Thus the nim reciprocal of 2 is 3 since 2 ⊗ 3 = 1. Using  to indicate
nim division, this is written as 1  2 = 3. Check that we also have 1  7 = 11 and 6  5 = 9.
     In mathematical terms, the nonnegative integers form a ﬁeld under the operations
of nim addition and nim multiplication. See Lenstra (1977-78). In the book of Conway
(1976), it is shown that this is the “simplest” ﬁeld, in some sense, that one can make out
of the integers. We assume in what follows that laws (7) and (8) hold.
    Aren’t you glad you don’t have to memorize this multiplication table? Still, it would
be nice if one could ﬁnd the product, say 24 ⊗ 17, without ﬁrst ﬁnding all products of
smaller numbers. Here is a method of acomplishing that feat. Let us call a number of the
       n
form 22 for n = 0, 1, 2, . . ., a Fermat 2-power. These are the numbers 2, 4, 16, 256, 65536,

                                           I – 34
. . . . We can ﬁnd the product of two numbers using the following two rules, along with the
associative and distributive laws, (7) and (8).
    (i) The nim-product of a Fermat 2-power and any smaller number is their ordinary
product.
     (ii) The nim-product of a Fermat 2-power with itself is the Fermat 2-power times 3/2
in the ordinary sense.
    Thus, 2 ⊗ 16 = 32, but 16 ⊗ 16 = (3/2)16 = 24. Let us ﬁnd 24 ⊗ 17.

         24 ⊗ 17 = (16 ⊕ 8) ⊗ (16 ⊕ 1) = (16 ⊗ 16) ⊕ (16 ⊗ 1) ⊕ (8 ⊗ 16) ⊕ (8 ⊗ 1)
                 = 24 ⊕ 16 ⊕ 128 ⊕ 8 = 128.

As another example, let us ﬁnd 8 ⊗ 8. We cannot write 8 as the nim-sum of two simpler
numbers, but we can write it as the nim-product of two simpler numbers, namely, 8 = 2⊗4.
So,
          8 ⊗ 8 = (2 ⊗ 4) ⊗ (2 ⊗ 4) = 2 ⊗ 2 ⊗ 4 ⊗ 4 = 3 ⊗ 6 = (2 ⊕ 1) ⊗ (4 ⊕ 2)
                 = (2 ⊗ 4) ⊕ (2 ⊗ 2) ⊕ (1 ⊗ 4) ⊕ (1 ⊗ 1) = 8 ⊕ 3 ⊕ 4 ⊕ 2 = 13,
which agrees with the value given in Table 5.2.

     5.4 Tartan Games. The game Turning Corners is an example of a class of games
with solutions that can be found with the aid of nim multiplication. These are the Tartan
Games. Given two one-dimensional coin turning games, G1 and G2 , one can deﬁne the
tartan game G1 ×G2 to be the two dimensional coin turning game whose moves can be
described as follows. If turning coins at positions x1 , x2 , . . . , xm is a legal move in G1
and turning coins at positions y1 , y2 , . . . , yn is a legal move in G2 , then turning coins at
positions (xi , yj ) for all 1 ≤ i ≤ m and 1 ≤ j ≤ n is a legal move in G1 ×G2 (provided, of
course, that the southeast coin goes from heads to tails).
    With this deﬁnition, the game Turning Corners is just the game Twins×Twins. In
Twins, we turn over two coins, so in Turning Corners, we turn over four coins at the
corners of a rectangle. Tartan Games may be analyzed by means of the following theorem
in which G1 and G2 represent two 1-dimensional coin turning games.

The Tartan Theorem. If g1 (x) is the Sprague-Grundy function of G1 and g2 (y) is the
Sprague-Grundy function of G2 , then the Sprague-Grundy function, g(x, y), of G1 ×G2 is
the nim product,
                                g(x, y) = g1 (x) ⊗ g2 (y).                         (9)

    For the game of Twins, the Sprague-Grundy function is simply g(x) = x. Since
Turning Corners = Twins×Twins, the Tartan Theorem says that the Sprague-Grundy
function for Turning Corners is just g(x, y) = x ⊗ y.
    Turning Turtles Squared. In the game (Turning Turtles)×(Turning Turtles), we
may turn over any four coins at the corners of a rectangle as in Turning Corners, but we
may also turn over any two coins in the same row, or any two coins in the same column, or
we may turn over any single coin. Thus it is like Turning Corners, but the rectangle may

                                             I – 35
be degenerate. Although the Sprague-Grundy function of Turning Turtles is g(x) = x for
x ≥ 1, remember that we started labelling the positions from 1 rather than 0. Equivalently,
we may cross out all the zeros from Table 5.2 and use that as the Sprague-Grundy function,
but we must remember that we are starting the labelling at (1,1).
    For example, if display (5) is a position in (Turning Turtles)2 , the SG-value is 8 ⊕
12 ⊕ 7 = 3. A winning move is to change the SG-value 7 to SG-value 4. This may be done
by turning over the coin at (5,5) (remember we begin the labelling at (1,1)) and also the
three coins at (2,3), (2,5) and (5,3), whose combined SG-value is 1 ⊕ 10 ⊕ 15 = 4.

                        T       T   T T T                  T   T T   T T
                        T       T   T H T                  T   T H   H H
                        T       T   T T T          −→      T   T T   T T
                        T       T   H T T                  T   T H   T T
                        T       T   T T H                  T   T H   T T

     Rugs. A more interesting example is given by the game Rugs = Ruler×Ruler. Since
a move in Ruler is to turn over all coins in any set of consecutive coins, a move in Rugs
is to turn over all coins in any rectangular block of coins. Let us construct a table of the
SG-values of the game Rugs. Recall that the Sprague-Grundy sequence for Ruler is 1, 2,
1, 4, 1, 2, 1, 8,. . . , starting the labelling at 1. The SG-values for Rugs are therefore just
the nim products of these numbers. In Table 5.3, we put the SG-values for Ruler along
the edges, and the nim products in the body of the table.

                                    1     2   1      4     1   2     1    8
                            1       1    2    1     4      1 2       1    8
                            2       2    3    2     8      2 3       2   12
                            1       1    2    1     4      1 2       1    8
                            4       4    8    4     6      4 8       4   11
                            1       1    2    1     4      1 2       1    8
                            2       2    3    2     8      2 3       2   12
                            1       1    2    1     4      1 2       1    8
                            8       8   12    8    11      8 12      8   13

                     Table 5.3. The Sprague-Grundy values for Rugs.

    As an example, consider the position of display (5) as a position in Rugs, The SG-
values of the heads are 8, 4, and 1 with nim sum 13. There is a winning move that takes
the SG-value 8 and replaces it with an SG-value 5. The move that achieves this is the
move that turns over all the coins in the 2 × 4 rectangle from (1,1) to (2,4).

                        T       T   T T   T                H   H H H T
                        T       T   T H   T                H   H H T T
                        T       T   T T   T        −→      T   T T T T
                        T       T   H T   T                T   T H T T
                        T       T   T T   H                T   T T T H

                                                  I – 36
    This game is sometimes called Turnablock. Now that you know how to play well, try
your skill on the web at http://thinks.com/java/turnablock/turnablock.htm .
    Solving Tartan Games. One of the diﬃculties of dealing with tartan games is
that it is not always easy to ﬁnd winning moves due to the bewildering number and
complexity of moves available. Consider for example the following position in a game of
(Mock Turtles)×(Mock Turtles) with just two heads.

                                    T    H T     T     T    T
                                    T    T T     T     T    T
                                    T    T T     T     T    T
                                    T    T T     T     T    T
                                    T    T T     T     T    H

It is easy to ﬁnd whether or not we can win if we are to move in this position. Recalling
that the SG-sequence for Mock Turtles is 1, 2, 4, 7, 8, 11, we can ﬁnd the corresponding
SG-values for this problem using the multiplication table.

                                     1    2      4      7       8   11
                              1      1 2        4       7    8      11
                              2      2 3        8       9   12      13
                              4      4 8        6      10   11       7
                              7      7 9       10       4   15       1
                              8      8 12      11      15   13       9

               Table 5.4. The Sprague-Grundy values for (Mock Turtles)2 .

      We see that the two heads in our position occur at SG-values 2 and 9, with a nim-sum
of 11. Therefore we can win if it is our turn to move. Moreover, to win we must replace the
heads with SG-value 9 with some move of SG-value 2, but how do we ﬁnd such a move?
There are 176 diﬀerent moves from this position using the heads with SG-value 9 as the
southeast corner, and many of them are rather complex. Here is a method that will make
the search for a winning move easier. It has the advantage that if you understand why the
method works, you will be able to see why the Tartan Theorem holds. (See Exercise 7.)
      The method is as follows. In playing G1 × G2 , suppose you are at position (x, y)
with SG-value g1 (x) ⊗ g2 (y) = v and suppose you desire to replace the SG-value v by an
SG-value u. (In the above example, (x, y) = (4, 5), g1 (x) = 8, g2 (y) = 11, v = 9, and
u = 2.) The method is in three parts.
(1) Let v1 = g1 (x) and v2 = g2 (y). First, ﬁnd a move in Turning Corners that takes
(v1 , v2 ) into an SG-value u. Denote the northwest corner of the move by (u1 , u2 ), so that
(u1 ⊗ u2 ) ⊕ (u1 ⊗ v2 ) ⊕ (v1 ⊗ u2 ) = u.
(2) Find a move M1 in the 1-dimensional game G1 that moves the SG-value g1 (x) at x
into an SG-value u1 . (Note that u1 < g1 (x).)
(3) Find a move M2 in the 1-dimensional game G2 that moves the SG-value g2 (y) at y
into an SG-value u2 . (Note that u2 < g2 (y).)
Then the move M1 × M2 in G1 × G2 moves to an SG-value u as desired.

                                              I – 37
     Let us use this method to ﬁnd a winning move in our position in (Mock Turtles)2 .
We have (v1 , v2 ) = (8, 11) and we want to ﬁnd (u1 , u2 ) with u1 < v1 and u2 < v2 such
that (u1 ⊗ u2 ) ⊕ (u1 ⊗ 11) ⊕ (8 ⊗ u2 ) = 2. One possibility is (u1 , u2 ) = (3, 10), since
(3 ⊗ 10) ⊕ (3 ⊗ 11) ⊕ (8 ⊗ 10) = 5 ⊕ 6 ⊕ 1 = 2. (A simpler possibility is (u1 , u2 ) = (1, 1), but
it would not illustrate the method as well.) Now we want to ﬁnd a move in Mock Turtles
to change the SG-value 8 into an SG-value 3. This is accomplished by turning over the
coins at 1,2 and 5, since g1 (1) ⊕ g1 (2) = 1 ⊕ 2 = 3. We also want to ﬁnd a move in Mock
Turtles to change the SG-value 11 into an SG-value 10. This is accomplished by turning
over coins at 2, 5 and 6, since g2 (2) ⊕ g2 (5) = 2 ⊕ 8 = 10. Therefore, the move of turning
over the 9 coins at {1, 2, 5} × {2, 5, 6}, resulting in position
                                      T   T T   T     H H
                                      T   H T   T     H H
                                      T   T T   T     T T
                                      T   T T   T     T T
                                      T   H T   T     H T

is a winning move. Check that it has SG-value 0.
     There are many more aspects to this beautiful topic and many more examples that
may be found in Chapter 14 of Winning Ways.

     5.5 Exercises.
     1. Consider the following position in a coin turning game.

                                     TTHTHHTTH

Find a winning move, if any, if the game being played is
(a) Turning Turtles.
(b) Twins.
(c) The subtraction game with subtraction set S = {1, 3, 4} when exactly two coins must
be turned over.
(d) Mock Turtles.
     2. (a) How many moves can a game of Turning Turtles last, if the initial position has
a just one heads as the rightmost coin of a line of n coins?
(b) Same question but for the game of Mock Turtles.
(c) Same question but for the game of Ruler.
     3. Triplets. Suppose in Mock Turtles, we are not allowed to turn over just one or
two coins, but are required to turn over three coins. This game is called Triplets. The
rules are: Turn over exactly three coins, with the rightmost coin going from heads to tails.
Find the Sprague-Grundy function for Triplets. Relate it to the Sprague-Grundy function
for Mock Turtles.
     4. Rulerette. Suppose in the game Ruler, we are not allowed to turn over just one
coin. The rules are: Turn over any consecutive set of coins with at least two coins being
turned over, and the rightmost coin going from heads to tails. Find the Sprague-Grundy
function for this game and relate it to the Sprague-Grundy function for Ruler.

                                             I – 38
     5. Consider a coin turning game of the subtraction game variety, but allow a single
coin to be turned over also. The rules are: Turn over one or two coins, with the rightmost
coin going from heads to tails; if two coins are turned over the distance between them
must be in the subtraction set S. Relate the Sprague-Grundy function of this game to the
Sprague-Grundy function of the subtraction game with subtraction set S.
     6. (a) Find 6 ⊗ 21.
(b) Find 25 ⊗ 40.
(c) Find 15  14.
(d) Find the nim square root of 8. (Note that every integer has an integer nim square
root.)
(e) Solve x2 ⊕ x ⊕ 6 = 0. There are two roots. (Here x2 represents x ⊗ x.)
     7. Use the notation in the statement of the Tartan Theorem.
(a) Consider a position in Turning Corners with a single heads at (v1 , v2 ). It has SG-value
v1 ⊗ v2 . Consider also a position in G1 × G2 with a single heads at (x, y), where g1 (x) = v1
and g2 (y) = v2 . Assume that the Tartan Theorem holds for all positions (x , y  ) = (x, y)
with x ≤ x, y  ≤ y. Show that there exists a move from the position in Turning Corners
to a position of SG-value u if, and only if, there exists a move from the position in G1 × G2
to a position of SG-value u.
(b) Conclude that the position in G1 × G2 also has SG-value v1 ⊗ v2 .
     8. Consider the following position in the tartan game of (Mock Turtles)×Ruler.

                                 T   H T   T   T    T   T   T
                                 T   T T   T   T    T   T   T
                                 T   T T   T   T    T   T   T
                                 T   T T   T   T    T   T   T
                                 T   T T   T   T    T   T   H

(a) Construct the table of Sprague-Grundy values for this position.
(b) Note that the SG-value of this position is 15. Find a winning move for the ﬁrst player.
     9. (a) Who wins the n by n game of Rugs if the initial placement of the coins is
such that heads occurs at (i, j) if and only if i + j is odd? Can you give a simple winning
strategy?
(b) Who wins it if heads occurs at (i, j) if and only if i + j is even? Can you give a simple
winning strategy?
     10. Consider the tartan game, G1 × G2 , where G1 is the subtraction game with
subtraction set S = {1, 2, 3, 4} in which exactly two coins must be turned over, and G2
is the game Ruler. The initial position consists of a rectanguler block of 100 × 100 coins.
(Each coin is a penny, but the winner gets all of them, worth 100 dollars.) Initially, all
coins are tails, except for heads at positions (100,100) and (4,1). You get to move ﬁrst.
What move do you make to win?




                                           I – 39
    6. Green Hackenbush

     The game of Hackenbush is played by hacking away edges from a rooted graph and
removing those pieces of the graph that are no longer connected to the ground. A rooted
graph is an undirected graph with every edge attached by some path to a special vertex
called the root or the ground. The ground is denoted in the ﬁgures that follow by a
dotted line.
     In this section, we discuss the impartial version of this game in which either player
at his turn may chop any edge. This version is called Green Hackenbush where each edge
is considered to be colored green. There is also the partizan version of the game, called
Blue-Red Hackenbush, in which some edges are colored blue and some are colored red.
Player I may only chop the blue edges and Player II may only chop the red edges so the
game is no longer impartial. Blue-Red Hackenbush is the ﬁrst game treated in Winning
Ways. In the general game of Hackenbush, there may be some blue edges available only
to Player I, some red edges available only to Player II, and some green edges that either
player may chop.

     6.1 Bamboo Stalks. As an introduction to the game of Green Hackenbush, we
investigate the case where the graph consists of a number of bamboo stalks as in the left
side of Figure 6.1. A bamboo stalk with n segments is a linear graph of n edges with the
bottom of the n edges rooted to the ground. A move consists of hacking away one of the
segments, and removing that segment and all segments above it no longer connected to
the ground. Players alternate moves and the last player to move wins. A single bamboo
stalk of n segments can be moved into a bamboo stalk of any smaller number of segments
from n − 1 to 0. So a single bamboo stalk of n segments is equivalent to a nim pile of n
chips. Playing a sum of games of bamboo stalks is thus equivalent to playing nim.




                                        Figure 6.1
     For example, the “forest” of three stalks on the left, is equivalent to the game of nim
with three piles of 3, 4 and 5 chips. Since 3 ⊕ 4 ⊕ 5 = 2, this is an N-position which can
be moved to a P-position by hacking the second segment of the stalk with three segments,
leaving a stalk of one segment. The resulting position on the right has Sprague-Grundy
value 0, and so is a P-position.

                                          I – 40
     6.2 Green Hackenbush on Trees. Played with bamboo stalks, Green Hackenbush
is just nim in a rather transparent disguise. But what happens if we allow more general
structures than these simple bamboo stalks? Suppose we have the “forest” of three rooted
trees found in Figure 6.2. A “rooted tree” is a graph with a distinguished vertex called the
root, with the property that from every vertex there is a unique path (that doesn’t repeat
edges) to the root. Essentially this means there are no cycles.




                                         Figure 6.2


     Again a move consists of hacking away any segment and removing that segment and
anything not connected to the ground. Since the game is impartial, the general theory of
Section 4 tells us that each such tree is equivalent to some nim pile, or if you will, to some
bamboo stalk. The problem is to ﬁnd the Sprague-Grundy values of each of the trees.
    This may be done using the following principle, known in its more general form as
the Colon Principle: When branches come together at a vertex, one may replace the
branches by a non-branching stalk of length equal to their nim sum.
     Let us see how this principle works to ﬁnd the bamboo stalk equivalent to the left
tree of Figure 6.2. There are two vertices with two branches. The higher of these vertices
has two branches each with one edge. The nim sum of one and one is zero; so the two
branches may be replaced by a branch with zero edges. That is to say, the two branches
may be removed. This leaves a Y-shaped tree and the same reasoning may be used to
show that the two branches at the Y may be removed. Thus the tree on the left of Figure
6.2 is equivalent to a nim pile of size one.
     This may have been a little too simple for illustrative purposes, so let’s consider the
second tree of Figure 6.2. The leftmost branching vertex has two branches of lengths three
and one. The nim sum of three and one is two, so the two branches may be replaced by a
single branch of length two. The rightmost branching vertex has two branches of lengths
one and two whose nim sum is three, so the two branches may be replaced by a single
branch of length three. See the reduction in Figure 6.3. Continuing in like manner we
arrive at the conclusion that the second tree of Figure 6.2 is equivalent to a nim pile of 8
chips.

                                           I – 41
                          =                         =                      =


                                         Figure 6.3

     Now try your luck with the third tree of Figure 6.2. See if you can show that it is
equivalent to a nim pile of size 4.
     Now we can compute the Sprague-Grundy value of the sum of the three trees of Figure
6.2. It is 1 ⊕ 8 ⊕ 4 = 13. Since this is not zero, it is a win for the next person to play.
The next problem is to ﬁnd a winning move. It is clear that there is a winning move
using the second tree that may be obtained by chopping some edge to arrive at a tree of
Sprague-Grundy value 5. But which edge must be chopped to achieve this?
     The last version of the tree in Figure 6.3 has length 8 because the three branches of the
previous tree were 3, 2 and 6, whose nim-sum is 3⊕2⊕6 = 7. To achieve length 5 in the last
tree, we must change one of the three branches to achieve nim-sum 4. This may be done
most easily by chopping the leftmost branch entirely, since 2 ⊕ 6 = 4. Alternatively, we
may hack away the top edge of the middle branch leaving one edge, because 3 ⊕ 1 ⊕ 6 = 4.
     Each of these moves is easily translated into the corresponding chop on the tree on the
left of Figure 6.3. However, there is another way to reduce this tree to Sprague-Grundy
value 5, that uses the right branch of the tree. See if you can ﬁnd it.
     The method of pruning trees given by the colon principle works to reduce all trees
to a single bamboo stalk. One starts at the highest branches ﬁrst, and then applies the
principle inductively down to the root. We now show the validity of this principle for
rooted graphs that may have circuits and several edges attached to the ground.
     Proof of the Colon Principle. Consider a ﬁxed but arbitrary graph, G, and select
an arbitrary vertex, x, in G. Let H1 and H2 be arbitrary trees (or graphs) that have the
same Sprague-Grundy value. Consider the two graphs G1 = Gx : H1 and G2 = Gx : H2 ,
where Gx : Hi represents the graph constructed by attaching the tree Hi to the vertex x
of the graph G. The colon principle states that the two graphs G1 and G2 have the same
Sprague-Grundy value. Consider the sum of the two games as in Figure 6.4.
     The claim that G1 and G2 have the same Sprague-Grundy value is equivalent to the
claim that the sum of the two games has Sprague-Grundy value 0. In other words, we are
to show that the sum G1 + G2 is a P-position.

                                           I – 42
                                                             H2
                            H1
                                   x                              x

                             G                             G


                         Gx : H1                        Gx : H2
                                       Figure 6.4

     Here is a strategy that guarantees you a win if you are the second player to move
in G1 + G2 . If the ﬁrst player moves by chopping one of the edges in G in one of the
games, then you chop the same edge in G in the other game. (Such a pair of moves may
delete H1 and H2 from the games, but otherwise H1 and H2 are not disturbed.) If the
ﬁrst player moves by chopping an edge in H1 or H2 , then the Sprague-Grundy values of
H1 and H2 are no longer equal, so that there exists a move in H1 or H2 that keeps the
Sprague-Grundy values the same. In this way you will always have a reply to every move
the opponent may make. This means you will make the last move and so win.

     6.3 Green Hackenbush on general rooted graphs. We now consider arbitrary
graphs. These graphs may have circuits and loops and several segments may be attached
to the ground. Consider Figure 6.5 as an example.




                                       Figure 6.5

     From the general theory of Chapter 4, each separate graph is equivalent to some
nim pile. To ﬁnd the equivalent nim pile, we look for an equivalent tree, from which the
equivalent nim pile may be found. This is done using the fusion principle. We fuse two
neighboring vertices by bringing them together into a single vertex and bending the edge
joining them into a loop. A loop is an edge joining a vertex to itself, as for example the
head of the juggler on the right of Figure 6.5. As far as Green Hackenbush is concerned,
a loop may be replaced by a leaf (an edge with one end unattached).

                                          I – 43
     The Fusion Principle: The vertices on any circuit may be fused without changing
the Sprague-Grundy value of the graph.
     The fusion principle allows us to reduce an arbitrary rooted graph into an equivalent
tree which can be further reduced to a nim pile by the colon principle. Let us see how this
works on the examples of Figure 6.5.
     Consider the door in the house on the left. The two vertices on the ground are the
same vertex (remember the ground is really a single vertex) so the door is really the same
as a triangle with one vertex attached to the ground. The fusion principle says that this is
equivalent to a single vertex with three loops attached. Each loop is equivalent to a nim
pile of size 1, and the nim sum of these is also a nim pile of size 1.


                =                =                    =                  =


                                         Figure 6.6

     We see more generally that a circuit with an odd number of edges reduces to a single
edge, and a circuit with an even number of edges reduces to a single vertex. For example,
the circuit of four edges in the Christmas tree in the center of Figure 6.5 reduces to a
single vertex with four loops, which reduces to a single vertex. So the Christmas tree is
equivalent to a nim pile of size 1. Similarly, the chimney on the house becomes a single
vertex, and the window on the right of the house is also a single vertex. Continuing further,
we ﬁnd that the house (door included) has SG-value 3.




                                =                         =                  =


                                         Figure 6.7

     Now see if you can show that the juggler on the right of Figure 6.5 has SG-value 4.
And then see if you can ﬁnd a winning move in the Hackenbush position given by Figure
6.5.
    The proof of the fusion principle is somewhat longer than the proof of the colon
principle, and so is omitted. For a proof, see Winning Ways, Chapter 7.



                                           I – 44
    6.4 Exercises.
    1. (Stolen from Fair Game by Richard Guy.) Find the SG-values of the graphs in
Figure 6.8, and ﬁnd a winning move, if any.




                                    Figure 6.8




                                      I – 45
    References.

E. R. Berlekamp, J. H. Conway and R. K. Guy (1982)Winning Ways for your mathematical
       plays, vols. 1 and 2, Academic Press, New York.
C. L. Bouton (1902) Nim, a game with a complete mathematical theory, Ann. Math. 3,
      35-39.
J. H. Conway (1976) On Numbers and Games, Academic Press, New York.
T. S. Ferguson (1998) Some chip transfer games, Theoretical Computer Science 191, 157-
       171.
A. S. Fraenkel (2002) Two-player games on cellular automata, in More Games of No
       Chance, MSRI Publications 42, R. Nowakowski ed., Cambridge University Press,
       279-306.
D. Gale (1974) A curious nim-type game, Amer. Math. Mo. 81, 876-879.
P. M. Grundy (1939) Mathematics and games, Eureka 2, 6-8. (reprinted (1964), Eureka
      27, 9-11.)
Richard K. Guy (1989) Fair Game, COMAP Math. Exploration Series, Arlington, MA.
R. K. Guy (1996) Impartial games, in Games of No Chance, MSRI Publications 29, R.
      Nowakowski ed., Cambridge University Press, 61-78.
Emanuel Lasker (1931) Brettspiele der Völker (1931) Berlin, 183-196.
H. W. Lenstra (1977-78) Nim multiplication, in Seminaire de Theorie des Nombres, exposé
      No. 11, Univ. Botdeaux.
E. H. Moore (1910) A generalization of a game called nim, Ann. Math. 11, 93-94.
Geoﬀrey Mott-Smith (1954), Mathematical Puzzles for Beginners and Enthusiasts, 2nd
      edition, Dover Publ. Inc.
Fred. Schuh (1952) The game of divisions, Nieuw Tijdschrift voor Wiskunde 39, 299-304.
Fred. Schuh (1968) The Master Book of Mathematical Recreations, translated from the
       1934 edition, Dover Publ. Inc.
A. J. Schwenk (1970) Take-away games, Fibonacci Quart. 8, 225-234.
David L. Silverman (1971) Your Move, McGraw-Hill, New York.
R. Sprague (1936) Über mathematische Kampfspiele, Tohoku Math. J. 41, 438-444.
R. Sprague (1937) Über zwei Abarten von Nim, Tohoku Math. J. 43, 351-354.
M. J. Whinihan (1963) Fibonacci Nim, Fibonacci Quart. 1 #4, 9-13.
W. A. Wythoﬀ (1907) A modiﬁcation of the game of nim, Nieuw Archief voor Wiskunde
      7, 199-202.




                                         I – 46
                          GAME THEORY

                            Thomas S. Ferguson



Part II. Two-Person Zero-Sum Games


1. The Strategic Form of a Game.
    1.1 Strategic Form.
    1.2 Example: Odd or Even.
    1.3 Pure Strategies and Mixed Strategies.
    1.4 The Minimax Theorem.
    1.5 Exercises.

2. Matrix Games. Domination.
    2.1 Saddle Points.
    2.2 Solution of All 2 by 2 Matrix Games.
    2.3 Removing Dominated Strategies.
    2.4 Solving 2 × n and m × 2 Games.
    2.5 Latin Square Games.
    2.6 Exercises.

3. The Principle of Indiﬀerence.
    3.1 The Equilibrium Theorem.
    3.2 Nonsingular Game Matrices.
    3.3 Diagonal Games.
    3.4 Triangular Games.
    3.5 Symmetric Games.
    3.6 Invariance.
    3.7 Exercises.

4. Solving Finite Games.

                                     II – 1
    4.1 Best Responses.
    4.2 Upper and Lower Values of a Game.
    4.3 Invariance Under Change of Location and Scale.
    4.4 Reduction to a Linear Programming Problem.
    4.5 Description of the Pivot Method for Solving Games.
    4.6 A Numerical Example.
    4.7 Exercises.

5. The Extensive Form of a Game.
    5.1 The Game Tree.
    5.2 Basic Endgame in Poker.
    5.3 The Kuhn Tree.
    5.4 The Representation of a Strategic Form Game in Extensive Form.
    5.5 Reduction of a Game in Extensive Form to Strategic Form.
    5.6 Example.
    5.7 Games of Perfect Information.
    5.8 Behavioral Strategies.
    5.9 Exercises.

6. Recursive and Stochastic Games.
    6.1 Matrix Games with Games as Components.
    6.2 Multistage Games.
    6.3 Recursive Games. -Optimal Strategies.
    6.4 Stochastic Movement Among Games.
    6.5 Stochastic Games.
    6.6 Approximating the Solution.
    6.7 Exercises.

7. Continuous Poker Models.
    7.1 La Relance.
    7.2 The von Neumann Model.
    7.3 Other Models.
    7.4 Exercises.

References.

                                      II – 2
           Part II. Two-Person Zero-Sum Games

    1. The Strategic Form of a Game.

     The individual most closely associated with the creation of the theory of games is
John von Neumann, one of the greatest mathematicians of this century. Although others
preceded him in formulating a theory of games - notably Émile Borel - it was von Neumann
who published in 1928 the paper that laid the foundation for the theory of two-person
zero-sum games. Von Neumann’s work culminated in a fundamental book on game theory
written in collaboration with Oskar Morgenstern entitled Theory of Games and Economic
Behavior, 1944. Other more current books on the theory of games may be found in the
text book, Game Theory by Guillermo Owen, 2nd edition, Academic Press, 1982, and
the expository book, Game Theory and Strategy by Philip D. Straﬃn, published by the
Mathematical Association of America, 1993.
     The theory of von Neumann and Morgenstern is most complete for the class of games
called two-person zero-sum games, i.e. games with only two players in which one player
wins what the other player loses. In Part II, we restrict attention to such games. We will
refer to the players as Player I and Player II.

     1.1 Strategic Form. The simplest mathematical description of a game is the strate-
gic form, mentioned in the introduction. For a two-person zero-sum game, the payoﬀ
function of Player II is the negative of the payoﬀ of Player I, so we may restrict attention
to the single payoﬀ function of Player I, which we call here L.
Deﬁnition 1. The strategic form, or normal form, of a two-person zero-sum game is given
by a triplet (X, Y, A), where
    (1) X is a nonempty set, the set of strategies of Player I
    (2) Y is a nonempty set, the set of strategies of Player II
    (3) A is a real-valued function deﬁned on X × Y . (Thus, A(x, y) is a real number for
every x ∈ X and every y ∈ Y .)

     The interpretation is as follows. Simultaneously, Player I chooses x ∈ X and Player
II chooses y ∈ Y , each unaware of the choice of the other. Then their choices are made
known and I wins the amount A(x, y) from II. Depending on the monetary unit involved,
A(x, y) will be cents, dollars, pesos, beads, etc. If A is negative, I pays the absolute value
of this amount to II. Thus, A(x, y) represents the winnings of I and the losses of II.
     This is a very simple deﬁnition of a game; yet it is broad enough to encompass the
ﬁnite combinatorial games and games such as tic-tac-toe and chess. This is done by being
suﬃciently broadminded about the deﬁnition of a strategy. A strategy for a game of chess,

                                            II – 3
for example, is a complete description of how to play the game, of what move to make in
every possible situation that could occur. It is rather time-consuming to write down even
one strategy, good or bad, for the game of chess. However, several diﬀerent programs for
instructing a machine to play chess well have been written. Each program constitutes one
strategy. The program Deep Blue, that beat then world chess champion Gary Kasparov
in a match in 1997, represents one strategy. The set of all such strategies for Player I is
denoted by X. Naturally, in the game of chess it is physically impossible to describe all
possible strategies since there are too many; in fact, there are more strategies than there
are atoms in the known universe. On the other hand, the number of games of tic-tac-toe
is rather small, so that it is possible to study all strategies and ﬁnd an optimal strategy
for each player. Later, when we study the extensive form of a game, we will see that many
other types of games may be modeled and described in strategic form.
     To illustrate the notions involved in games, let us consider the simplest non-trivial
case when both X and Y consist of two elements. As an example, take the game called
Odd-or-Even.

     1.2 Example: Odd or Even. Players I and II simultaneously call out one of the
numbers one or two. Player I’s name is Odd; he wins if the sum of the numbers if odd.
Player II’s name is Even; she wins if the sum of the numbers is even. The amount paid to
the winner by the loser is always the sum of the numbers in dollars. To put this game in
strategic form we must specify X, Y and A. Here we may choose X = {1, 2}, Y = {1, 2},
and A as given in the following table.
                                        II (even)      y
                                                  1        2
                                                             
                                               1 −2        +3
                             I (odd)      x
                                               2 +3        −4

                            A(x, y) = I’s winnings = II’s losses.
     It turns out that one of the players has a distinct advantage in this game. Can you
tell which one it is?
     Let us analyze this game from Player I’s point of view. Suppose he calls ‘one’ 3/5ths
of the time and ‘two’ 2/5ths of the time at random. In this case,
1. If II calls ‘one’, I loses 2 dollars 3/5ths of the time and wins 3 dollars 2/5ths of the
time; on the average, he wins −2(3/5) + 3(2/5) = 0 (he breaks even in the long run).
2. If II call ‘two’, I wins 3 dollars 3/5ths of the time and loses 4 dollars 2/5ths of the time;
on the average he wins 3(3/5) − 4(2/5) = 1/5.
     That is, if I mixes his choices in the given way, the game is even every time II calls
‘one’, but I wins 20/ c on the average every time II calls ‘two’. By employing this simple
strategy, I is assured of at least breaking even on the average no matter what II does. Can
Player I ﬁx it so that he wins a positive amount no matter what II calls?

                                              II – 4
     Let p denote the proportion of times that Player I calls ‘one’. Let us try to choose p
so that Player I wins the same amount on the average whether II calls ‘one’ or ‘two’. Then
since I’s average winnings when II calls ‘one’ is −2p + 3(1 − p), and his average winnings
when II calls ‘two’ is 3p − 4(1 − p) Player I should choose p so that

                               −2p + 3(1 − p) = 3p − 4(1 − p)
                                        3 − 5p = 7p − 4
                                           12p = 7
                                              p = 7/12.

Hence, I should call ‘one’ with probability 7/12, and ‘two’ with probability 5/12. On the
average, I wins −2(7/12) + 3(5/12) = 1/12, or 8 13 cents every time he plays the game, no
matter what II does. Such a strategy that produces the same average winnings no matter
what the opponent does is called an equalizing strategy.
    Therefore, the game is clearly in I’s favor. Can he do better than 8 13 cents per game
on the average? The answer is: Not if II plays properly. In fact, II could use the same
procedure:
    call ‘one’ with probability 7/12
    call ‘two’ with probability 5/12.
If I calls ‘one’, II’s average loss is −2(7/12) + 3(5/12) = 1/12. If I calls ‘two’, II’s average
loss is 3(7/12) − 4(5/12) = 1/12.
    Hence, I has a procedure that guarantees him at least 1/12 on the average, and II has
a procedure that keeps her average loss to at most 1/12. 1/12 is called the value of the
game, and the procedure each uses to insure this return is called an optimal strategy or
a minimax strategy.
     If instead of playing the game, the players agree to call in an arbitrator to settle this
conﬂict, it seems reasonable that the arbitrator should require II to pay 8 13 cents to I. For
I could argue that he should receive at least 8 13 cents since his optimal strategy guarantees
him that much on the average no matter what II does. On the other hand II could argue
that he should not have to pay more than 8 13 cents since she has a strategy that keeps her
average loss to at most that amount no matter what I does.

     1.3 Pure Strategies and Mixed Strategies. It is useful to make a distinction
between a pure strategy and a mixed strategy. We refer to elements of X or Y as pure
strategies. The more complex entity that chooses among the pure strategies at random in
various proportions is called a mixed strategy. Thus, I’s optimal strategy in the game of
Odd-or-Even is a mixed strategy; it mixes the pure strategies one and two with probabilities
7/12 and 5/12 respectively. Of course every pure strategy, x ∈ X, can be considered as
the mixed strategy that chooses the pure strategy x with probability 1.
     In our analysis, we made a rather subtle assumption. We assumed that when a player
uses a mixed strategy, he is only interested in his average return. He does not care about his

                                             II – 5
maximum possible winnings or losses — only the average. This is actually a rather drastic
assumption. We are evidently assuming that a player is indiﬀerent between receiving 5
million dollars outright, and receiving 10 million dollars with probability 1/2 and nothing
with probability 1/2. I think nearly everyone would prefer the $5,000,000 outright. This is
because the utility of having 10 megabucks is not twice the utility of having 5 megabucks.
      The main justiﬁcation for this assumption comes from utility theory and is treated
in Appendix 1. The basic premise of utility theory is that one should evaluate a payoﬀ by
its utility to the player rather than on its numerical monetary value. Generally a player’s
utility of money will not be linear in the amount. The main theorem of utility theory
states that under certain reasonable assumptions, a player’s preferences among outcomes
are consistent with the existence of a utility function and the player judges an outcome
only on the basis of the average utility of the outcome.
    However, utilizing utility theory to justify the above assumption raises a new diﬃculty.
Namely, the two players may have diﬀerent utility functions. The same outcome may be
perceived in quite diﬀerent ways. This means that the game is no longer zero-sum. We
need an assumption that says the utility functions of two players are the same (up to
change of location and scale). This is a rather strong assumption, but for moderate to
small monetary amounts, we believe it is a reasonable one.
     A mixed strategy may be implemented with the aid of a suitable outside random
mechanism, such as tossing a coin, rolling dice, drawing a number out of a hat and so
on. The seconds indicator of a watch provides a simple personal method of randomization
provided it is not used too frequently. For example, Player I of Odd-or-Even wants an
outside random event with probability 7/12 to implement his optimal strategy. Since
7/12 = 35/60, he could take a quick glance at his watch; if the seconds indicator showed
a number between 0 and 35, he would call ‘one’, while if it were between 35 and 60, he
would call ‘two’.

     1.4 The Minimax Theorem. A two-person zero-sum game (X, Y, A) is said to be
a ﬁnite game if both strategy sets X and Y are ﬁnite sets. The fundamental theorem
of game theory due to von Neumann states that the situation encountered in the game of
Odd-or-Even holds for all ﬁnite two-person zero-sum games. Speciﬁcally,
The Minimax Theorem. For every ﬁnite two-person zero-sum game,
    (1) there is a number V , called the value of the game,
    (2) there is a mixed strategy for Player I such that I’s average gain is at least V no
matter what II does, and
    (3) there is a mixed strategy for Player II such that II’s average loss is at most V no
matter what I does.
     This is one form of the minimax theorem to be stated more precisely and discussed in
greater depth later. If V is zero we say the game is fair. If V is positive, we say the game
favors Player I, while if V is negative, we say the game favors Player II.

                                           II – 6
    1.5 Exercises.
    1. Consider the game of Odd-or-Even with the sole change that the loser pays the
winner the product, rather than the sum, of the numbers chosen (who wins still depends
on the sum). Find the table for the payoﬀ function A, and analyze the game to ﬁnd the
value and optimal strategies of the players. Is the game fair?
    2. Player I holds a black Ace and a red 8. Player II holds a red 2 and a black 7. The
players simultaneously choose a card to play. If the chosen cards are of the same color,
Player I wins. Player II wins if the cards are of diﬀerent colors. The amount won is a
number of dollars equal to the number on the winner’s card (Ace counts as 1.) Set up the
payoﬀ function, ﬁnd the value of the game and the optimal mixed strategies of the players.
     3. Sherlock Holmes boards the train from London to Dover in an eﬀort to reach the
continent and so escape from Professor Moriarty. Moriarty can take an express train and
catch Holmes at Dover. However, there is an intermediate station at Canterbury at which
Holmes may detrain to avoid such a disaster. But of course, Moriarty is aware of this too
and may himself stop instead at Canterbury. Von Neumann and Morgenstern (loc. cit.)
estimate the value to Moriarty of these four possibilities to be given in the following matrix
(in some unspeciﬁed units).
                                                Holmes
                                          Canterbury Dover
                                                          
                             Canterbury      100       −50
               Moriarty
                             Dover            0        100

 What are the optimal strategies for Holmes and Moriarty, and what is the value? (His-
torically, as related by Dr. Watson in “The Final Problem” in Arthur Conan Doyle’s The
Memoires of Sherlock Holmes, Holmes detrained at Canterbury and Moriarty went on to
Dover.)
    4. The entertaining book The Compleat Strategyst by John Williams contains many
simple examples and informative discussion of strategic form games. Here is one of his
problems.
         “I know a good game,” says Alex. “We point ﬁngers at each other; either
    one ﬁnger or two ﬁngers. If we match with one ﬁnger, you buy me one Daiquiri,
    If we match with two ﬁngers, you buy me two Daiquiris. If we don’t match I let
    you oﬀ with a payment of a dime. It’ll help pass the time.”
          Olaf appears quite unmoved. “That sounds like a very dull game — at least
    in its early stages.” His eyes glaze on the ceiling for a moment and his lips ﬂutter
    brieﬂy; he returns to the conversation with: “Now if you’d care to pay me 42
    cents before each game, as a partial compensation for all those 55-cent drinks I’ll
    have to buy you, then I’d be happy to pass the time with you.
    Olaf could see that the game was inherently unfair to him so he insisted on a side
payment as compensation. Does this side payment make the game fair? What are the
optimal strategies and the value of the game?

                                            II – 7
     2. Matrix Games — Domination

      A ﬁnite two-person zero-sum game in strategic form, (X, Y, A), is sometimes called
a matrix game because the payoﬀ function A can be represented by a matrix. If X =
{x1 , . . . , xm } and Y = {y1 , . . . , yn }, then by the game matrix or payoﬀ matrix we mean
the matrix                                        
                             a11 · · · a1n
                                .               .. 
                       A =  ..                  .       where aij = A(xi , yj ),
                             am1 · · · amn
In this form, Player I chooses a row, Player II chooses a column, and II pays I the entry
in the chosen row and column. Note that the entries of the matrix are the winnings of the
row chooser and losses of the column chooser.
     A mixed strategy for Player I may be represented by an m-tuple, p = (p1 , p2 , . . . , pm )
of probabilities that add to 1. If I uses the mixed            strategy   p = (p1 , p2 , . . . , pm ) and II
                                                                 m
chooses column j, then the (average) payoﬀ to I is i=1 pi aij . Similarly, a mixed strategy
for Player II is an n-tuple q = (q1 , q2 , . . . , qn ). If II uses q and I uses row i the payoﬀ to I is
  n
   j=1 aij qj . More generally, if I uses them n
                                                   mixed strategy p and II uses the mixed strategy
                                   T
q, the (average) payoﬀ to I is p Aq = i=1 j=1 pi aij qj .
     Note that the pure strategy for Player I of choosing row i may be represented as the
mixed strategy ei , the unit vector with a 1 in the ith position and 0’s elsewhere. Similarly,
the pure strategy for II of choosing the jth column may be represented by ej . In the
following, we shall be attempting to ‘solve’ games. This means ﬁnding the value, and at
least one optimal strategy for each player. Occasionally, we shall be interested in ﬁnding
all optimal strategies for a player.

    2.1 Saddle points. Occasionally it is easy to solve the game. If some entry aij of
the matrix A has the property that
     (1) aij is the minimum of the ith row, and
     (2) aij is the maximum of the jth column,
then we say aij is a saddle point. If aij is a saddle point, then Player I can then win at
least aij by choosing row i, and Player II can keep her loss to at most aij by choosing
column j. Hence aij is the value of the game.
Example 1.                                                      
                                            4               1 −3
                                        A= 3               2  5
                                            0               1  6

     The central entry, 2, is a saddle point, since it is a minimum of its row and maximum
of its column. Thus it is optimal for I to choose the second row, and for II to choose the
second column. The value of the game is 2, and (0, 1, 0) is an optimal mixed strategy for
both players.

                                                   II – 8
     For large m × n matrices it is tedious to check each entry of the matrix to see if it
has the saddle point property. It is easier to compute the minimum of each row and the
maximum of each column to see if there is a match. Here is an example of the method.

                                       row min                                          row min
                                                                                 
                 3          2   1   0     0                   3         1   1   0         0
               0           1   2   0 0                    0          1   2   0        0
             A=                                         B=                     
                 1          0   2   1     0                   1         0   2   1         0
                 3          1   2   2     1                   3         1   2   2         1
          col max       3   2 2     2                 col max       3   1   2   2

In matrix A, no row minimum is equal to any column maximum, so there is no saddle
point. However, if the 2 in position a12 were changed to a 1, then we have matrix B. Here,
the minimum of the fourth row is equal to the maximum of the second column; so b42 is a
saddle point.

    2.2 Solution of All 2 by 2 Matrix Games. Consider the general 2 × 2 game
matrix                                  
                                     a b
                               A=          .
                                     d c
To solve this game (i.e. to ﬁnd the value and at least one optimal strategy for each player)
we proceed as follows.
    1. Test for a saddle point.
    2. If there is no saddle point, solve by ﬁnding equalizing strategies.
     We now prove the method of ﬁnding equalizing strategies of Section 1.2 works when-
ever there is no saddle point by deriving the value and the optimal strategies.
    Assume there is no saddle point. If a ≥ b, then b < c, as otherwise b is a saddle point.
Since b < c, we must have c > d, as otherwise c is a saddle point. Continuing thus, we see
that d < a and a > b. In other words, if a ≥ b, then a > b < c > d < a. By symmetry, if
a ≤ b, then a < b > c < d > a. This shows that
    If there is no saddle point, then either a > b, b < c, c > d and d < a, or a < b, b < c,
c < d and d > a.
    In equations (1), (2) and (3) below, we develop formulas for the optimal strategies
and value of the general 2 × 2 game. If I chooses the ﬁrst row with probability p (i.e. uses
the mixed strategy (p, 1 − p)), we equate his average return when II uses columns 1 and 2.

                                    ap + d(1 − p) = bp + c(1 − p).

Solving for p, we ﬁnd
                                                   c−d
                                        p=                     .                                  (1)
                                             (a − b) + (c − d)

                                                 II – 9
Since there is no saddle point, (a − b) and (c − d) are either both positive or both negative;
hence, 0 < p < 1. Player I’s average return using this strategy is

                                                         ac − bd
                              v = ap + d(1 − p) =                .
                                                        a−b+c−d

If II chooses the ﬁrst column with probability q (i.e. uses the strategy (q, 1 − q)), we equate
his average losses when I uses rows 1 and 2.

                                   aq + b(1 − q) = dq + c(1 − q)

Hence,
                                                c−b
                                         q=           .                                    (2)
                                              a−b+c−d
Again, since there is no saddle point, 0 < q < 1. Player II’s average loss using this strategy
is
                                                ac − bd
                             aq + b(1 − q) =                = v,                           (3)
                                              a−b+c−d
the same value achievable by I. This shows that the game has a value, and that the players
have optimal strategies. (something the minimax theorem says holds for all ﬁnite games).
Example 2.
                                                      −4 − 3
                                               p=                 = 7/12
                                                 −2 − 3 − 4 − 3
                              −2     3
                    A=                         q = same
                               3    −4
                                                        8−9
                                               v=                 = 1/12
                                                   −2 − 3 − 4 − 3
Example 3.
                                                     2−1
                                            p=                = 1/11
                              0    −10           0 + 10 + 2 − 1
                    A=
                              1     2                2 + 10
                                              q=                = 12/11.
                                                 0 + 10 + 2 − 1
But q must be between zero and one. What happened? The trouble is we “forgot to test
this matrix for a saddle point, so of course it has one”. (J. D. Williams The Compleat
Strategyst Revised Edition, 1966, McGraw-Hill, page 56.) The lower left corner is a saddle
point. So p = 0 and q = 1 are optimal strategies, and the value is v = 1.

    2.3 Removing Dominated Strategies. Sometimes, large matrix games may be
reduced in size (hopefully to the 2×2 case) by deleting rows and columns that are obviously
bad for the player who uses them.
     Deﬁnition. We say the ith row of a matrix A = (aij ) dominates the kth row if
aij ≥ akj for all j. We say the ith row of A strictly dominates the kth row if aij > akj
for all j. Similarly, the jth column of A dominates (strictly dominates) the kth column if
aij ≤ aik (resp. aij < aik ) for all i.

                                              II – 10
     Anything Player I can achieve using a dominated row can be achieved at least as well
using the row that dominates it. Hence dominated rows may be deleted from the matrix.
A similar argument shows that dominated columns may be removed. To be more precise,
removal of a dominated row or column does not change the value of a game. However, there
may exist an optimal strategy that uses a dominated row or column (see Exercise 9). If so,
removal of that row or column will also remove the use of that optimal strategy (although
there will still be at least one optimal strategy left). However, in the case of removal of a
strictly dominated row or column, the set of optimal strategies does not change.
     We may iterate this procedure and successively remove several rows and columns. As
an example, consider the matrix, A.                                          
                                                                      2 0 4
     The last column is dominated by the middle               A = 1 2 3
column. Deleting the last column we obtain:                         4 1 2
                                                        2 0
     Now the top row is dominated by the bottom       1 2
row. (Note this is not the case in the original         4 1
matrix). Deleting the top row we obtain:                                    
                                                                        1 2
     This 2 × 2 matrix does not have a saddle point, so p = 3/4,
                                                                        4 1
q = 1/4 and v = 7/4. I’s optimal strategy in the original game is
(0, 3/4, 1/4); II’s is (1/4, 3/4, 0).
     A row (column) may also be removed if it is dominated by a probability combination
of other rows (columns).
     If for some 0 < p < 1, pai1 j + (1 − p)ai2 j ≥ akj for all j, then the kth row is dominated
by the mixed strategy that chooses row i1 with probability p and row i2 with probability
1 − p. Player I can do at least as well using this mixed strategy instead of choosing row
k. (In addition, any mixed strategy choosing row k with probability pk may be replaced
by the one in which k’s probability is split between i1 and i2 . That is, i1 ’s probability is
increased by ppk and i2 ’s probability is increased by (1 − p)pk .) A similar argument may
be used for columns.
                                            
                                    0 4 6
     Consider the matrix A =  5 7 4 .
                                    9 6 3
     The middle column is dominated by the outside columns taken with probability 1/2
each. With the central column deleted, the middle row is dominated by the combination
of the top
          row with
                probability 1/3 and the bottom row with probability 2/3. The reduced
           0 6
matrix,          , is easily solved. The value is V = 54/12 = 9/2.
           9 3
    Of course, mixtures of more than two rows (columns) may be used to dominate and
remove other rows (columns). For example,the mixture of columns one two and three
                                            1 3 5 3
with probabilities 1/3 each in matrix B =  4 0 2 2  dominates the last column,
                                            3 7 3 5

                                            II – 11
and so the last column may be removed.
    Not all games may be reduced by dominance. In fact, even if the matrix has a saddle
point, there may not be any dominated rows or columns. The 3 × 3 game with a saddle
point found in Example 1 demonstrates this.

    2.4 Solving 2 × n and m × 2 games. Games with matrices of size 2 × n or m × 2
may be solved with the aid of a graphical interpretation. Take the following example.
                                                      
                                   p       2 3 1 5
                                 1−p       4 1 6 0

Suppose Player I chooses the ﬁrst row with probability p and the second row with proba-
bility 1 − p. If II chooses Column 1, I’s average payoﬀ is 2p + 4(1 − p). Similarly, choices of
Columns 2, 3 and 4 result in average payoﬀs of 3p+(1−p), p+6(1−p), and 5p respectively.
We graph these four linear functions of p for 0 ≤ p ≤ 1. For a ﬁxed value of p, Player I can
be sure that his average winnings is at least the minimum of these four functions evaluated
at p. This is known as the lower envelope of these functions. Since I wants to maximize
his guaranteed average winnings, he wants to ﬁnd p that achieves the maximum of this
lower envelope. According to the drawing, this should occur at the intersection of the lines
for Columns 2 and 3. This essentially, involves  solving
                                                       the game in which II is restricted
                                                  3 1
to Columns 2 and 3. The value of the game                is v = 17/7 , I’s optimal strategy is
                                                  1 6
(5/7, 2/7), and II’s optimal strategy is (5/7, 2/7). Subject to the accuracy of the drawing,
we conclude therefore that in the original game I’s optimal strategy is (5/7, 2/7) , II’s is
(0, 5/7, 2/7, 0) and the value is 17/7.

                                  6         Fig 2.1

                                  5                              col. 4

                                  4

                                  3                              col. 2

                                  2                              col. 1

                                  1                              col. 3

                                  0
                                      0        p      5/7    1


    The accuracy of the drawing may be checked: Given any guess at a solution to a
game, there is a sure-ﬁre test to see if the guess is correct, as follows. If I uses the strategy
(5/7, 2/7), his average payoﬀ if II uses Columns 1, 2, 3 and 4, is 18/7, 17/7, 17/7, and 25/7

                                            II – 12
respectively. Thus his average payoﬀ is at least 17/7 no matter what II does. Similarly,
if II uses (0, 5/7, 2/7, 0), her average loss is (at most) 17/7. Thus, 17/7 is the value, and
these strategies are optimal.

    We note that the line for Column 1 plays no role in the lower envelope (that is, the
lower envelope would be unchanged if the line for Column 1 were removed from the graph).
This is a test for domination. Column 1 is, in fact, dominated by Columns 2 and 3 taken
with probability 1/2 each. The line for Column 4 does appear in the lower envelope, and
hence Column 4 cannot be dominated.

     As an example of a m × 2 game, consider the matrix associated with Figure 2.2. If
q is the probability that II chooses Column 1, then II’s average loss for I’s three possible
choices of rows is given in the accompanying graph. Here, Player II looks at the largest
of her average losses for a given q. This is the upper envelope of the function. II wants
to ﬁnd q that minimizes this upper envelope. From the graph, we see that any value of q
between 1/4 and 1/3 inclusive achieves this minimum. The value of the game is 4, and I
has an optimal pure strategy: row 2.

                                               Fig 2.2
                                    6

                                    5                             row 3
      q    1−q
                                  4                             row 2
      1     5
     4     4 
                                    3
      6     2

                                    2

                                    1                             row 1

                                    0
                                        0   1/4       1/2     1
                                                  q


    These techniques work just as well for 2 × ∞ and ∞ × 2 games.

     2.5 Latin Square Games. A Latin square is an n × n array of n diﬀerent letters
such that each letter occurs once and only once in each row and each column. The 5 × 5
array at the right is an example. If in a Latin square each letter is assigned a numerical
value, the resulting matrix is the matrix of a Latin square game. Such games have simple
solutions. The value is the average of the numbers in a row, and the strategy that chooses
each pure strategy with equal probability 1/n is optimal for both players. The reason is
not very deep. The conditions for optimality are satisﬁed.

                                            II – 13
                                                  a = 1, b = 2, c = d = 3, e = 6
                                                                     
                     a b c d e                           1 2 3 3 6
                   b e a c d                        2 6 1 3 3
                                                                     
                   c a d e b                        3 1 3 6 2
                                                                     
                     d c e b a                           3 3 6 2 1
                     e d b a c                           6 3 2 1 3
     In the example above, the value is V = (1+2+3+3+6)/5 = 3, and the mixed strategy
p = q = (1/5, 1/5, 1/5, 1/5, 1/5) is optimal for both players. The game of matching pennies
is a Latin square game. Its value is zero and (1/2, 1/2) is optimal for both players.

     2.6 Exercises.
                                                     
                                                −1 −3
     1. Solve the game with matrix                      , that is ﬁnd the value and an optimal
                                                −2  2
(mixed) strategy for both players.
                                         
                                     0 2
      2. Solve the game with matrix         for an arbitrary real number t. (Don’t forget
                                     t 1
to check for a saddle point!) Draw the graph of v(t), the value of the game, as a function
of t, for −∞ < t < ∞.
    3. Show that if a game with m × n matrix has two saddle points, then they have equal
values.
     4. Reduce by dominance to 2 × 2 games and solve.
                                                                          
                 5   4    1   0
                                                     10 0              7   1
             4      3    2 −1                   
     (a)                                 (b)        2 6              4   7 .
                 0 −1     4   3
                                                      6 3              3   5
                 1 −2     1   2
                                                      
                                      3   2    4     0
     5. Solve the game with matrix                       .
                                     −2   1 −4       5
     6. Reduce to a 3 × 2 matrix game by dominance and solve.
                                                
                                      0    8   5
                                    8     4   6
                                     12 −4     3

     7. In general, the sure-ﬁre test may be stated thus: For a given game, conjectured
optimal strategies (p1 , . . . , pm ) and (q1 , . . . , qn ) are indeed optimal if the minimum of I’s
average payoﬀs using (p1 , . . . , pm ) is equal to the maximum of II’s average payoﬀs us-
ing (q1 , . . . , qn ). Show that for the game with the following matrix the mixed strategies
p = (6/37, 20/37, 0, 11/37) and q = (14/37, 4/37, 0, 19/37, 0) are optimal for I and II re-
spectively. What is the value?
                                                                 
                                           5 8 3 1 6
                                         4 2 6 3 5
                                                                 
                                           2 4 6 4 1
                                           1 3 2 5 3

                                                 II – 14
     8. Given that p = (52/143, 50/143, 41/143) is optimal for I in the game with the
following matrix, what is the value?
                                                       
                                        0  5         −2
                                      −3  0          4
                                        6 −4          0

     9. Player I secretly chooses one of the numbers, 1, 2 and 3, and Player II tries to guess
which. If II guesses correctly, she loses nothing; otherwise, she loses the absolute value of
the diﬀerence of I’s choice and her guess. Set up the matrix and reduce it by dominance
to a 2 by 2 game and solve. Note that II has an optimal pure strategy that was eliminated
by dominance. Moreover, this strategy dominates the optimal mixed strategy in the 2 by
2 game.
    10. Magic Square Games. A magic square is an n × n array of the ﬁrst n integers
with the property that all row and column sums are equal. Show how to solve all games
with magic square game matrices. Solve the example,
                                                   
                                     16 3      2 13
                                    5 10      11 8 
                                                   .
                                     9  6      7 12
                                     4 15      14 1

(This is the magic square that appears in Albrecht Dürer’s engraving, Melencolia. See
http://freemasonry.bcy.ca/art/melencolia.html)
     11. In an article, “Normandy: Game and Reality” by W. Drakert in Moves, No. 6
(1972), an analysis is given of the invasion of Europe at Normandy in World War II. Six
possible attacking conﬁgurations (1 to 6) by the Allies and six possible defensive strategies
(A to F ) by the Germans were simulated and evaluated, 36 simulations in all. The following
table gives the estimated value to the Allies of each hypothetical battle in some numerical
units.
                                   A B C D E F
                                                            
                              1 13 29 8 12 16 23
                              2 18 22 21 22 29 31 
                                                             
                              3  18 22 31 31 27 37 
                                
                                                             
                              4 11   22   12   21   21  26 
                                                             
                              5  18 16 19 14 19 28 
                              6 23 22 19 23 30 34
(a) Assuming this is a matrix of a six by six game, reduce by dominance and solve.
(b) The historical defense by the Germans was B, and the historical attack by the Allies
was 1. Criticize these choices.




                                           II – 15
      3. The Principle of Indiﬀerence.

       For a matrix game with m × n matrix A, if Player I uses the mixed   m strategy p =
(p1 , . . . , pm ) and Player II uses column j, Player I’s average payoﬀ is i=1 pi aij . If V is
the value of the game, an optimal strategy, p, for I is characterized by the property that
Player I’s average payoﬀ is at least V no matter what column j Player II uses, i.e.
                                  m
                                        pi aij ≥ V             for all j = 1, . . . , n.                                   (1)
                                  i=1

Similarly, a strategy q = (q1 , . . . , qn ) is optimal for II if and only if
                                  n
                                        aij qj ≤ V             for all i = 1, . . . , m.                                   (2)
                                 j=1
                                                                                                
When both players use their optimal strategies the average payoﬀ,                                 i    j pi aij qj , is exactly
V . This may be seen from the inequalities
                              n                  n         m                    m     n
                       V =         V qj ≤             (         pi aij )qj =               pi aij qj
                             j=1               j=1 i=1                          i=1 j=1
                                                m      n                         m
                                                                                                                           (3)
                                           =          pi (         aij qj ) ≤         pi V = V.
                                               i=1           j=1                i=1

Since this begins and ends with V we must have equality throughout.

     3.1 The Equilibrium Theorem. The following simple theorem – the Equilibrium
Theorem – gives conditions for equality to be achieved in (1) for certain values of j, and
in (2) for certain values of i.

Theorem 3.1. Consider a game with m × n matrix A and value V . Let p = (p1 , . . . , pm )
be any optimal strategy for I and q = (q1 , . . . , qn ) be any optimal strategy for II. Then
                             n
                                  aij qj = V              for all i for which pi > 0                                       (4)
                            j=1

and
                             m
                                  pi aij = V          for all j for which qj > 0.                                          (5)
                            i=1
                                                       n
Proof. Suppose there is a k such that pk > 0 and j=1 akj qj = V . Then from (2),
n
  j=1 akj qj < V . But then from (3) with equality throughout

                                         m           n                   m
                              V =             pi (         aij qj ) <         pi V = V.
                                        i=1          j=1                i=1


                                                           II – 16
The inequality is strict since it is strict for the kth term of the sum. This contradiction
proves the ﬁrst conclusion. The second conclusion follows analogously.
     Another way of stating the ﬁrst conclusion of this theorem is: If there exists an optimal
strategy for I giving positive probability to row i, then every optimal strategy of II gives
I the value of the game if he uses row i.
     This theorem is useful in certain classes of games for helping direct us toward the
solution. The procedure this theorem suggests for Player 1 is to try to ﬁnd a solution to
the set of equations (5) formed by those j for which you think it likely that qj > 0. One
way of saying this is that Player 1 searches for a strategy that makes Player 2 indiﬀerent
as to which of the (good) pure strategies to use. Similarly, Player 2 should play in such a
way to make Player 1 indiﬀerent among his (good) strategies. This is called the Principle
of Indiﬀerence.
    Example. As an example of this consider the game of Odd-or-Even in which both
players simultaneously call out one of the numbers zero, one, or two. The matrix is
                                             Even
                                                   
                                           0   1 −2
                                 Odd      1 −2   3
                                          −2   3 −4

 Again it is diﬃcult to guess who has the advantage. If we play the game a few times we
might become convinced that Even’s optimal strategy gives positive weight (probability)
to each of the columns. If this assumption is true, Odd should play to make Player 2
indiﬀerent; that is, Odd’s optimal strategy p must satisfy

                                            p2 − 2p3 = V
                                      p1 − 2p2 + 3p3 = V                                  (6)
                                   −2p1 + 3p2 − 4p3 = V,

for some number, V — three equations in four unknowns. A fourth equation that must be
satisﬁed is
                                  p1 + p2 + p3 = 1.                               (7)
This gives four equations in four unknowns. This system of equations is solved as follows.
First we work with (6); add the ﬁrst equation to the second.

                                     p1 − p2 + p3 = 2V                                    (8)

Then add the second equation to the third.

                                    −p1 + p2 − p3 = 2V                                    (9)

Taken together (8) and (9) imply that V = 0. Adding (7) to (9), we ﬁnd 2p2 = 1, so that
p2 = 1/2. The ﬁrst equation of (6) implies p3 = 1/4 and (7) implies p1 = 1/4. Therefore

                                     p = (1/4, 1/2, 1/4)                                 (10)

                                             II – 17
is a strategy for I that keeps his average gain to zero no matter what II does. Hence the
value of the game is at least zero, and V = 0 if our assumption that II’s optimal strategy
gives positive weight to all columns is correct. To complete the solution, we note that if the
optimal p for I gives positive weight to all rows, then II’s optimal strategy q must satisfy
the same set of equations (6) and (7) with p replaced by q (because the game matrix here
is symmetric). Therefore,
                                     q = (1/4, 1/2, 1/4)                                  (11)
is a strategy for II that keeps his average loss to zero no matter what I does. Thus the
value of the game is zero and (10) and (11) are optimal for I and II respectively. The game
is fair.

    3.2 Nonsingular Game Matrices. Let us extend the method used to solve this
example to arbitrary nonsingular square matrices. Let the game matrix A be m × m,
and suppose that A is nonsingular. Assume that I has an optimal strategy giving positive
weight to each of the rows. (This is called the all-strategies-active case.) Then by the
principle of indiﬀerence, every optimal strategy q for II satisﬁes (4), or
                               m
                                    aij qj = V   for i = 1, . . . , m.                     (12)
                              j=1

This is a set of m equations in m unknowns, and since A is nonsingular, we may solve
for the qi . Let us write this set of equations in vector notation using q to represent the
column vector of II’s strategy, and 1 = (1, 1, . . . , 1)T to represent the column vector of all
1’s:
                                          Aq = V 1                                         (13)
We note that V cannot be zero since (13) would imply that A was singular. Since A is
non-singular, A−1 exists. Multiplying both sides of (13) on the left by A−1 yields
                                          q = V A−1 1.                                     (14)
If the value of V were known, this   would give the unique optimal strategy for II. To ﬁnd
                                 m
V , we may use the equation j=1 qj = 1, or in vector notation 1Tq = 1. Multiplying both
sides of (14) on the left by 1T yields 1 = 1Tq = V 1TA−1 1. This shows that 1TA−1 1 cannot
be zero so we can solve for V :
                                        V = 1/1TA−1 1.                                  (15)
The unique optimal strategy for II is therefore
                                      q = A−1 1/1TA−1 1.                                   (16)
However, if some component, qj , turns out to be negative, then our assumption that I has
an optimal strategy giving positive weight to each row is false.
    However, if qj ≥ 0 for all j, we may seek an optimal strategy for I by the same method.
The result would be
                                    pT = 1TA−1 /1TA−1 1.                               (17)

    We summarize this discussion as a theorem.

                                             II – 18
Theorem 3.2. Assume the square matrix A is nonsingular and 1TA−1 1 = 0. Then the
game with matrix A has value V = 1/1TA−1 1 and optimal strategies pT = V 1TA−1 and
q = V A−1 1, provided both p ≥ 0 and q ≥ 0.

     If the value of a game is zero, this method cannot work directly since (13) implies
that A is singular. However, the addition of a positive constant to all entries of the matrix
to make the value positive, may change the game matrix into being nonsingular. The
previous example of Odd-or-Even is a case in point. The matrix is singular so it would
seem that the above method would not work. Yet if 1, say, were added to each entry of
the matrix to obtain the matrix A below, then A is nonsingular and we may apply the
above method. Let us carry through the computations. By some method or another A−1
is obtained.                                                           
                          1    2 −1                        13 −2 −7
                                                      1 
                 A =  2 −1         4       A−1 =         −2     4     6
                                                     16
                        −1     4 −3                        −7     6     5
Then 1TA−1 1 , the sum of the elements of A−1 , is found to be 1, so from (15), V = 1.
Therefore, we may compute pT = 1TA = (1/4, 1/2, 1/4)T, and q = A−1 1 = (1/4, 1/2, 1/4)T.
Since both are nonnegative, both are optimal and 1 is the value of the game with matrix
A.
     What do we do if either p or q has negative components? A complete answer to
questions of this sort is given in the comprehensive theorem of Shapley and Snow (1950).
This theorem shows that an arbitrary m × n matrix game whose value is not zero may be
solved by choosing some suitable square submatrix A, and applying the above methods and
checking that the resulting optimal strategies are optimal for the whole matrix, A. Optimal
strategies obtained in this way are called basic, and it is noted that every optimal strategy
is a probability mixture of basic optimal strategies. See Karlin (1959, Vol. I, Section 2.4)
for a discussion and proof. The problem is to determine which square submatrix to use.
The simplex method of linear programming is simply an eﬃcient method not only for
solving equations of the form (13), but also for ﬁnding which square submatrix to use.
This is described in Section 4.4.

    3.3 Diagonal Games. We apply these ideas to the class of diagonal games - games
whose game matrix A is square and diagonal,
                                                              
                                    d1         0     ...    0
                                   0          d2    ...    0 
                                A=
                                   ...         ..          ..                         (18)
                                                             . 
                                                     ..
                                                 .      .
                                         0     0     ...    dm

Suppose all diagonal terms are positive, di > 0 for all i. (The other cases are treated in
Exercise 2.) One may apply Theorem 3.2 to ﬁnd the solution, but it is as easy to proceed
directly. The set of equations (12) becomes

                                pi di = V     for i = 1, . . . , m                      (19)

                                             II – 19
whose solution is simply
                                pi = V /di        for i = 1, . . . , m.              (20)
To ﬁnd V , we sum both sides over i to ﬁnd
                                    m                            m
                           1=V            1/di   or       V =(         1/di )−1 .    (21)
                                    i=1                          i=1

Similarly, the equations for Player II yield

                                qi = V /di        for i = 1, . . . , m.              (22)

Since V is positive from (21), we have pi > 0 and qi > 0 for all i, so that (20) and (22)
give optimal strategies for I and II respectively, and (21) gives the value of the game.
    As an example, consider the game with matrix C.
                                                                
                                          1           0    0   0
                                        0            2    0   0
                                      C=                        
                                          0           0    3   0
                                          0           0    0   4

From (20) and (22) the optimal strategy is proportional to the reciprocals of the diagonal
elements. The sum of these reciprocals is 1 + 1/2 + 1/3 + 1/4 = 25/12. Therefore, the
value is V = 12/25, and the optimal strategies are p = q = (12/25, 6/25, 4/25, 3/25)

     3.4 Triangular Games. Another class of games for which the equations (12) are
easy to solve are the games with triangular matrices - matrices with zeros above or below
the main diagonal. Unlike for diagonal games, the method does not always work to solve
triangular games because the resulting p or q may have negative components. Nevertheless,
it works often enough to merit special mention. Consider the game with triangular matrix
T.                                                       
                                        1 −2       3 −4
                                     0       1 −2      3
                               T =                       
                                        0     0    1 −2
                                        0     0    0    1

    The equations (12) become

                                 p1                  =V
                               −2p1 + p2             =V
                                3p1 − 2p2 + p3       =V
                               −4p1 + 3p2 − 2p3 + p4 = V .

These equations may be solved one at a time from the top down to give

                           p1 = V       p2 = 3V       p3 = 4V          p4 = 4V.

                                                 II – 20
        
Since       pi = 1, we ﬁnd V = 1/12 and p = (1/12, 1/4, 1/3, 1/3). The equations for the q’s
are
                                    q1 − 2q2 + 3q3 − 4q4 = V
                                          q2 − 2q3 + 3q4 = V
                                                q3 − 2q4 = V
                                                      q4 = V .
The solution is
                               q1 = 4V   q2 = 4V   q3 = 3V   q4 = V.
Since the p’s and q’s are non-negative, V = 1/12 is the value, p = (1/12, 1/4, 1/3, 1/3) is
optimal for I, and q = (1/3, 1/3, 1/4, 1/12) is optimal for II.

     3.5 Symmetric Games. A game is symmetric if the rules do not distinguish between
the players. For symmetric games, both players have the same options (the game matrix
is square), and the payoﬀ if I uses i and II uses j is the negative of the payoﬀ if I uses j
and II uses i. This means that the game matrix should be skew-symmetric: A = −AT,
or aij = −aji for all i and j.

Deﬁnition 3.1. A ﬁnite game is said to be symmetric if its game matrix is square and
skew-symmetric.

    Speaking more generally, we may say that a game is symmetric if after some rear-
rangement of the rows or columns the game matrix is skew-symmetric.
     The game of paper-scissors-rock is an example. In this game, Players I and II simul-
taneously display one of the three objects: paper, scissors, or rock. If they both choose the
same object to display, there is no payoﬀ. If they choose diﬀerent objects, then scissors win
over paper (scissors cut paper), rock wins over scissors (rock breaks scissors), and paper
wins over rock (paper covers rock). If the payoﬀ upon winning or losing is one unit, then
the matrix of the game is as follows.
                                                        II
                                              paper scissors rock
                                                                 
                                   paper         0    −1       1
                           I       scissors     1      0     −1 
                                   rock        −1       1      0


     This matrix is skew-symmetric so the game is symmetric. The diagonal elements of
the matrix are zero. This is true of any skew-symmetric matrix, since aii = −aii implies
aii = 0 for all i.
     A contrasting example is the game of matching pennies. The two players simultane-
ously choose to show a penny with either the heads or the tails side facing up. One of the
players, say Player I, wins if the choices match. The other player, Player II, wins if the
choices diﬀer. Although there is a great deal of symmetry in this game, we do not call it
a symmetric game. Its matrix is

                                              II – 21
                                                    II
                                               heads tails
                                                          
                                       heads      1    −1
                                I
                                       tails    −1      1
This matrix is not skew-symmetric.
    We expect a symmetric game to be fair, that is to have value zero, V = 0. This is
indeed the case.

Theorem 3.3. A ﬁnite symmetric game has value zero. Any strategy optimal for one
player is also optimal for the other.

Proof. Let p be an optimal strategy for I. If II uses the same strategy the average payoﬀ
is zero, because
        pTAp =           pi aij pj =        pi (−aji )pj = −            pj aji pi = −pTAp   (23)
implies that pTAp = 0. This shows that the value V ≤ 0. A symmetric m argument shows
that V ≥ 0.
          mHence V = 0.Now        suppose p is optimal for I. Then i=1 pi aij ≥ 0 for all
                              m
j. Hence j=1 aij pj = − j=1 pj aji ≤ 0 for all i, so that p is also optimal for II. By
symmetry, if q is optimal for II, it is optimal for I also.
     Mendelsohn Games. (N. S. Mendelsohn (1946)) In Mendelsohn games, two players
simultaneously choose a positive integer. Both players want to choose an integer larger
but not too much larger than the opponent. Here is a simple example. The players choose
an integer between 1 and 100. If the numbers are equal there is no payoﬀ. The player that
chooses a number one larger than that chosen by his opponent wins 1. The player that
chooses a number two or more larger than his opponent loses 2. Find the game matrix
and solve the game.
    Solution. The payoﬀ matrix is
                                  1    2    3  4   5           ···
                                                                   
                              1      0 −1    2  2   2          ···
                              2 1      0   −1  2   2          ···
                                                                   
                              3  −2    1    0 −1   2          ···
                                                                                          (24)
                              4  −2 −2      1  0 −1           ···
                                                                   
                              5  −2 −2     −2  1   0          ···
                             ..    ..                          ..
                              .     .                             .
The game is symmetric so the value is zero and the players have identical optimal strategies.
We see that row 1 dominates rows 4, 5, 6, . . . so we may restrict attention to the upper left
3 × 3 submatrix. We suspect that there is an optimal strategy for I with p1 > 0, p2 > 0
and p3 > 0. If so, it would follow from the principle of indiﬀerence (since q1 = p1 > 0,
q2 = p2 > 0 q3 = p3 > 0 is optimal for II) that
                                          p2 − 2p3 = 0
                                  −p1          + p3 = 0
                                   2p1 − p2           = 0.                               (25)

                                            II – 22
We ﬁnd p2 = 2p3 and p1 = p3 from the ﬁrst two equations, and the third equation is
redundant. Since p1 + p2 + p3 = 1, we have 4p3 = 1; so p1 = 1/4, p2 = 1/2, and p3 = 1/4.
Since p1 , p2 and p3 are positive, this gives the solution: p = q = (1/4, 1/2, 1/4, 0, 0, . . .) is
optimal for both players.
    3.6 Invariance. Consider the game of matching pennies: Two players simultaneously
choose heads or tails. Player I wins if the choices match and Player II wins otherwise.
      There doesn’t seem to be much of a reason for either player to choose heads instead of
tails. In fact, the problem is the same if the names of heads and tails are interchanged. In
other words, the problem is invariant under interchanging the names of the pure strategies.
In this section, we make the notion of invariance precise. We then deﬁne the notion of
an invariant strategy and show that in the search for a minimax strategy, a player may
restrict attention to invariant strategies. Use of this result greatly simpliﬁes the search for
minimax strategies in many games. In the game of matching pennies for example, there is
only one invariant strategy for either player, namely, choose heads or tails with probability
1/2 each. Therefore this strategy is minimax without any further computation.
     We look at the problem from Player II’s viewpoint. Let Y denote the pure strategy
space of Player II, assumed ﬁnite. A transformation, g of Y into Y is said to be onto Y
if the range of g is the whole of Y , that is, if for every y1 ∈ Y there is y2 ∈ Y such that
g(y2 ) = y1 . A transformation, g, of Y into itself is said to be one-to-one if g(y1 ) = g(y2 )
implies y1 = y2 .

Deﬁnition 3.2. Let G = (X, Y, A) be a ﬁnite game, and let g be a one-to-one transfor-
mation of Y onto itself. The game G is said to be invariant under g if for every x ∈ X
there is a unique x ∈ X such that

                             A(x, y) = A(x , g(y))        for all y ∈ Y .                    (26)

     The requirement that x be unique is not restrictive, for if there were another point
x ∈ X such that
                        A(x, y) = A(x , g(y))   for all y ∈ Y ,                     (27)
then, we would have A(x , g(y)) = A(x , g(y)) for all y ∈ Y , and since g is onto,

                               A(x , y) = A(x , y)     for all y ∈ Y .                     (28)

Thus the strategies x and x have identical payoﬀs and we could remove one of them from
X without changing the problem at all.
     To keep things simple, we assume without loss of generality that all duplicate pure
strategies have been eliminated. That is, we assume

               A(x , y) = A(x , y)      for all y ∈ Y implies that x = x , and
                                                                                              (29)
               A(x, y  ) = A(x, y  )    for all x ∈ X implies that y  = y  .

Unicity of x in Deﬁnition 3.2 follows from this assumption.

                                                II – 23
   The given x in Deﬁnition 3.2 depends on g and x only. We denote it by x = g(x).
We may write equation (26) deﬁning invariance as

                     A(x, y) = A(g(x), g(y))           for all x ∈ X and y ∈ Y .                  (26 )


    The mapping g is a one-to-one transformation of X since if g(x1 ) = g(x2 ), then

                    A(x1 , y) = A(g(x1 ), g(y)) = A(g(x2 ), g(y)) = A(x2 , y)                     (30)

for all y ∈ Y , which implies x1 = x2 from assumption (29). Therefore the inverse, g −1 , of
g, deﬁned by g −1 (g(x)) = g(g −1 (x)) = x, exists. Moreover, any one-to-one transformation
of a ﬁnite set is automatically onto, so g is a one-to-one transformation of X onto itself.

Lemma 1. If a ﬁnite game, G = (X, Y, A), is invariant under a one-to-one transformation,
g, then G is also invariant under g −1 .

Proof. We are given A(x, y) = A(g(x), g(y)) for all x ∈ X and all y ∈ Y . Since true for
all x and y, it is true if y is replaced by g −1 (y) and x is replaced by g −1 (x). This gives
A(g −1 (x), g −1 (y)) = A(x, y) for all x ∈ X and all y ∈ Y . This shows that G is invariant
under g −1 .

Lemma 2. If a ﬁnite game, G = (X, Y, A), is invariant under two one-to-one transfor-
mations, g1 and g2 , then G is also invariant under under the composition transformation,
g2 g1 , deﬁned by g2 g1 (y) = g2 (g1 (y)).

Proof. We are given A(x, y) = A(g 1 (x), g1 (y)) for all x ∈ X and all y ∈ Y , and A(x, y) =
A(g 2 (x), g2 (y)) for all x ∈ X and all y ∈ Y . Therefore,

 A(x, y) = A(g 2 (g1 (x)), g2 (g1 (y))) = A(g 2 (g 1 (x)), g2 g1 (y))        for all y ∈ Y and x ∈ X.
                                                                                                   (31)
which shows that G is invarant under g2 g1 .
    Furthermore, these proofs show that

                              g2 g1 = g 2 g 1 ,     and      g −1 = g −1 .                        (32)

Thus the class of transformations, g on Y , under which the problem is invariant forms a
group, G, with composition as the multiplication operator. The identity element, e of the
group is the identity transformation, e(y) = y for all y ∈ Y . The set, G of corresponding
transformations g on X is also a group, with identity e(x) = x for all x ∈ X. Equation
(32) says that G is isomorphic to G; as groups, they are indistinguishable.
     This shows that we could have analyzed the problem from Player I’s viewpoint and
arrived at the same groups G and G.

                                                  II – 24
Deﬁnition 3.3. A ﬁnite game G = (X, Y, A) is said to be invariant under a group, G of
transformations, if (26 ) holds for all g ∈ G.

    We now deﬁne what it means for a mixed strategy, q, for Player II to be invariant
under a group G. Let m denote the number of elements in X and n denote the number of
elements in Y .

Deﬁnition 3.4. Given that a ﬁnite game G = (X, Y, A) is invariant under a group, G,
of one-to-one transformations of Y , a mixed strategy, q = (q(1), . . . , q(n)), for Player II is
said to be invariant under G if
                       q(g(y)) = q(y)          for all y ∈ Y and all g ∈ G.                  (33)
Similarly a mixed strategy p = (p(1), . . . , p(m), for Player I is said to be invariant under
G (or G) if
                     p(g(x)) = p(x)        for all x ∈ X and all g ∈ G.                   (34)

     Two points y1 and y2 in Y are said to be equivalent if there exists a g in G such that
g(y2 ) = y1 . It is an easy exercise to show that this is an equivalence relation. The set of
points, Ey = {y  : g(y  ) = y for some g ∈ G}, is called an equivalence class, or an orbit.
Thus, y1 and y2 are equivalent if they lie in the same orbit. Deﬁnition 3.4 says that a mixed
strategy q for Player II is invariant if it is constant on orbits, that is, if it assigns the same
probability to all pure strategies in the orbit. The power of this notion is contained in the
following theorem.

Theorem 3.4. If a ﬁnite game G = (X, Y, A) is invariant under a group G, then there
exist invariant optimal strategies for the players.

Proof. It is suﬃcient to show that Player II has an invariant optimal strategy. Since the
game is ﬁnite, there exists a value, V , and an optimal mixed strategy for player II, q ∗ .
This is to say that
                             A(x, y)q ∗ (y) ≤ V   for all x ∈ X.                     (35)
                           y∈Y

We must show that there is an invariant strategy q̃ that satisﬁes this same condition. Let
N = |G| be the number of elements in the group G. Deﬁne
                                               1
                                     q̃(y) =               q ∗ (g(y))                        (36)
                                               N
                                                     g∈G

(This takes each orbit and replaces each probability by the average of the probabilities in
the orbit.) Then q̃ is invariant since for any g  ∈ G,
                                               1
                               q̃(g  (y)) =             q ∗ (g(g  (y)))
                                               N
                                                   g∈G
                                                                                             (37)
                                           1              ∗
                                         =               q (g(y)) = q̃(y)
                                           N
                                                   g∈G


                                                   II – 25
since applying g  to Y = {1, 2, . . . , n} is just a reordering of the points of Y . Moreover, q̃
satisﬁes (35) since

                                                            1
                           A(x, y)q̃(y) =         A(x, y)             q ∗ (g(y))
                                                            N
                     y∈Y                    y∈Y                 g∈G
                                            1
                                       =                    A(x, y)q ∗ (g(y))
                                            N
                                                g∈G y∈Y
                                            1
                                       =                    A(g(x), g(y))q ∗ (g(y))          (38)
                                            N
                                                g∈G y∈Y
                                            1
                                       =                    A(g(x), y)q ∗ (y)
                                            N
                                                g∈G y∈Y
                                         1
                                       ≤              V = V.
                                         N
                                                g∈G




     In matching pennies, X = Y = {1, 2}, and A(1, 1) = A(2, 2) = 1 and A(1, 2) =
A(2, 1) = −1. The Game G = (X, Y, A) is invariant under the group G = {e, g}, where e is
the identity transformation, and g is the transformation, g(1) = 2, g(2) = 1. The (mixed)
strategy (q(1), q(2)) is invariant under G if q(1) = q(2). Since q(1) + q(2) = 1, this implies
that q(1) = q(2) = 1/2 is the only invariant strategy for Player II. It is therefore minimax.
Similarly, p(1) = p(2) = 1/2 is the only invariant, and hence minimax, strategy for Player
I.
    Similarly, the game of paper-scissors-rock is invariant under the group G = {e, g, g 2 },
where g(paper)=scissors, g(scissors)=rock and g(rock)=paper. The unique invariant, and
hence minimax, strategy gives probability 1/3 to each of paper, scissors and rock.

    Colonel Blotto Games. For more interesting games reduced by invariance, we
consider a class of tactical military games called Blotto Games, introduced by Tukey
(1949). There are many variations of these games; see for example the web page,
http://www.amsta.leeds.ac.uk/ pmt6jrp/personal/blotto.html.
                               ˜
We describe the discrete version treated in Williams (1954), Karlin (1959) and Dresher
(1961).
     Colonel Blotto has 4 regiments with which to occupy two posts. The famous Lieu-
tenant Kije has 3 regiments with which to occupy the same posts. The payoﬀ is deﬁned as
follows. The army sending the most units to either post captures it and all the regiments
sent by the other side, scoring one point for the captured post and one for each captured
regiment. If the players send the same number of regiments to a post, both forces withdraw
and there is no payoﬀ.
    Colonel Blotto must decide how to split his forces between the two posts. There are
5 pure strategies he may employ, namely, X = {(4, 0), (3, 1), (2, 2), (1, 3), (0, 4)}, where

                                                  II – 26
(n1 , n2 ) represents the strategy of sending n1 units to post number 1, and n2 units to post
number two. Lieutenant Kije has 4 pure strategies, Y = {(3, 0), (2, 1), (1, 2), (0, 3)}. The
payoﬀ matrix is
                                       (3, 0) (2, 1) (1, 2) (0, 3)
                                                                  
                              (4, 0)     4      2      1      0
                              (3, 1) 
                                      1        3      0     −1   
                              (2, 2) 
                                       −2      2      2     −2    
                                                                                        (39)
                              (1, 3)  −1       0      3      1 
                              (0, 4)     0      1      2      4

     Unfortunately, the 5 by 4 matrix game cannot be reduced by removing dominated
strategies. So it seems that to solve it, we must use the simplex method. However, there is
an invariance in this problem that simpliﬁes it considerably. This involves the symmetry
between the posts. This leads to the group, G = {e, g}, where

          g((3, 0)) = (0, 3)   g((0, 3)) = (3, 0)   g((2, 1)) = (1, 2)   g((1, 2)) = (2, 1)

and the corresponding group, G = {e, g}, where

          g((4, 0)) = (0, 4)   g((0, 4)) = (4, 0)   g((3, 1)) = (1, 3)   g((1, 3)) = (3, 1)
                                     and g((2, 2)) = (2, 2)


     The orbits for Kije are {(3, 0), (0, 3)} and {(2, 1), (1, 2)}. Therefore a strategy, q, is
invariant if q((3, 0)) = q((0, 3)) and q((2, 1)) = q((1, 2)). Similarly, the orbits for Blotto
are {(4, 0), (0, 4)}, {(3, 1), (1, 3)} and {(2, 2)}. So a strategy, p, for Blotto is invariant if
p((4, 0)) = p((0, 4)) and p((3, 1)) = p((1, 3)).
     We may reduce Kije’s strategy space to two elements, deﬁned as follows:
(3, 0)∗ : use (3, 0) and (0, 3) with probability 1/2 each.
(2, 1)∗ : use (2, 1) and (1, 2) with probability 1/2 each.
     Similarly, Blotto’s strategy space reduces to three elements:
(4, 0)∗ : use (4, 0) and (0, 4) with probability 1/2 each.
(3, 1)∗ : use (3, 1) and (1, 3) with probability 1/2 each.
(2, 2): use (2, 2).
     With these strategy spaces, the payoﬀ matrix becomes

                                              (3, 0)∗   (2, 1)∗
                                                               
                                    (4, 0)∗      2        1.5
                                    (3, 1)∗  0           1.5                                (40)
                                    (2, 2)      −2         2

                                              II – 27
As an example of the computations used to arrive at these payoﬀs, consider the upper
left entry. If Blotto uses (4,0) and (0,4) with probability 1/2 each, and if Kije uses (3,0)
and (0,3) with probability 1/2 each, then the four corners of the matrix (14) occur with
probability 1/4 each, so the expected payoﬀ is the average of the four numbers, 4, 0, 0, 4,
namely 2.
     To complete the analysis, we solve the game with matrix (40). We ﬁrst note that
the middle row is dominated by the top row (even though there was no domination in the
original matrix). Removal of the middle row reduces the game to a 2 by 2 matrix game
whose solution is easily found. The mixed strategy (8/9,0,1/9) is optimal for Blotto, the
mixed strategy (1/9,8/9) is optimal for Kije, and the value is V = 14/9.
     Returning now to the original matrix (39), we ﬁnd that (4/9,0,1/9,0,4/9) is optimal
for Blotto, (1/18,4/9,4/9,1/18) is optimal for Kije, and V = 14/9 is the value.

     3.7 Exercises.
                                                             
                                       −2              2   −1
     1. Consider the game with matrix  1              1    1 .
                                        3              0    1
     (a) Note that this game has a saddle point.
     (b) Show that the inverse of the matrix exists.
     (c) Show that II has an optimal strategy giving positive weight to each of his columns.
     (d) Why then, don’t equations (16) give an optimal strategy for II?
     2. Consider the diagonal matrix game with matrix (18).
     (a) Suppose one of the diagonal terms is zero. What is the value of the game?
     (b) Suppose one of the diagonal terms is positive and another is negative. What is
the value of the game?
     (c) Suppose all diagonal terms are negative. What is the value of the game?
     3. Player II chooses a number j ∈ {1, 2, 3, 4}, and Player I tries to guess what number
II has chosen. If he guesses correctly and the number was j, he wins 2j dollars from II.
Otherwise there is no payoﬀ. Set up the matrix of this game and solve.
    4. Player II chooses a number j ∈ {1, 2, 3, 4} and I tries to guess what it is. If
he guesses correctly, he wins 1 from II. If he overestimates he wins 1/2 from II. If he
underestimates, there is no payoﬀ. Set up the matrix of this game and solve.
     5. Player II chooses a number j ∈ {1, 2, . . . , n} and I tries to guess what it is. If he
guesses correctly, he wins 1. If he guesses too high, he loses 1. If he guesses too low, there
is no payoﬀ. Set up the matrix and solve.
      6. Player II chooses a number j ∈ {1, 2, . . . , n}, n ≥ 2, and Player I tries to guess
what it is by guessing some i ∈ {1, 2, . . . , n}. If he guesses correctly, i.e. i = j, he wins 1.
If i > j, he wins bi−j for some number b < 1. Otherwise, if i < j, he wins nothing. Set up

                                             II – 28
the matrix and solve. Hint: If An = (aij ) denotes the game matrix, then show the inverse
                                      1     if i = j
matrix is A−1
           n  =  (a ij
                       ), where aij
                                    = −b    if i = j + 1 , and use Theorem 3.2.
                                      0     otherwise
    7. The Pascal Matrix Game. The Pascal matrix of order n is the n × n matrix
Bn of elements bij , where
                                       
                                  i−1
                      bij =                 if i ≥ j, and bij = 0 if i < j.
                                  j−1

The ith row of Bn consists of the binomial coeﬃcients in the expansion of (x + y)i . Call
and Velleman (1993) show that the inverse of Bn is the the matrix An with entries aij ,
where aij = (−1)i+j bij . Using this, ﬁnd the value and optimal strategies for the matrix
game with matrix An .
     8. Solve the games with the following matrices.

                                                                              
                                                                  2 1      1  1
                        1         −1 −1
                       0                                        1 3/2    1  1 
                (a)                2  1              (b)                       
                                                                  1 1     4/3 1
                        0          0  3
                                                                  1 1      1 5/4
                                                                 
                                                2    0      0   2
                                              0     3      0   0
                                        (c)                      
                                                0    0      4   3
                                                1    1      0   1

     9. Another Mendelsohn game. Two players simultaneously choose an integer
between 1 and n inclusive, where n ≥ 5. If the numbers are equal there is no payoﬀ. The
player that chooses a number one larger than that chosen by his opponent wins 2. The
player that chooses a number two or more larger than that chosen by his opponent loses
1.
(a) Set up the game matrix.
(b) It turns out that the optimal strategy satisﬁes pi > 0 for i = 1, . . . , 5, and pi = 0 for all
other i. Solve for the optimal p. (It is not too diﬃcult since you can argue that p1 = p5
and p2 = p4 by symmetry of the equations.) Check that in fact the strategy you ﬁnd is
optimal.
     10. Silverman Games. (See R. T. Evans (1979) and Heuer and Leopold-Wildburger
(1991).) Two players simultaneously choose positive integers. As in Mendelsohn games, a
player wants to choose an integer larger but not too much larger than the opponent, but in
Silverman games “too much larger” is determined multiplicatively rather than additively.
Solve the following example: The player whose number is larger but less than three times
as large as the opponent’s wins 1. But the player whose number is three times as large or
larger loses 2. If the numbers are the same, there is no payoﬀ.
(a) Note this is a symmetric game, and show that dominance reduces the game to a 3 by

                                                  II – 29
3 matrix.
(b) Solve.
    11. Solve the following games.
                                                                     
                         0    1 −2                         0       1 −2
               (a)  −1       0    3              (b)  −2        0  1
                         2 −3      0                       1      −2  0
                                                        
                                        1       4 −1   5
                                      4       −1  5   1
                                                        
                               (c)    −1       5  1   4
                                                        
                                        5       1  4 −1
                                        2       2  2   2

     12. Run the original Blotto matrix (39) through the Matrix Game Solver, on the
web at: http://www.math.ucla.edu/ tom/gamesolve.html, and note that it gives diﬀerent
                                     ˜
optimal strategies than those found in the text. What does this mean? Show that (3, 1)∗ is
strictly dominated in (40). This means that no optimal strategy can give weight to (3, 1)∗ .
Is this true for the solution found?
    13. (a) Suppose Blotto has 2 units and Kije just 1 unit, with 2 posts to capture.
Solve.
    (b) Suppose Blotto has 3 units and Kije 2 units, with 2 posts to capture. Solve.
    14. (a) Suppose there are 3 posts to capture. Blotto has 4 units and Kije has 3. Solve.
(Reduction by invariance leads to a 4 by 3 matrix, reducible further by domination to 2
by 2.)
    (b) Suppose there are 4 posts to capture. Blotto has 4 units and Kije has 3. Solve.
(A 5 by 3 reduced matrix, reducible by domination to 4 by 3. But you may as well use
the Matrix Game Solver to solve it.)
     15. Battleship. The game of Battleship, sometimes called Salvo, is played on a two
square boards, usually 10 by 10. Each player hides a ﬂeet of ships on his own board and
tries to sink the opponent’s ships before the opponent sinks his. (For one set of rules, see
http://www.kielack.de/games/destroya.htm, and while you are there, have a game.)
     For simplicity, consider a 3 by 3 board and suppose that Player I hides a destroyer
(length 2 squares) horizontally or vertically on this board. Then Player II shoots by calling
out squares of the board, one at a time. After each shot, Player I says whether the shot
was a hit or a miss. Player II continues until both squares of the destroyer have been hit.
The payoﬀ to Player I is the number of shots that Player II has made. Let us label the
squares from 1 to 9 as follows.

                                         1     2       3
                                         4     5       6
                                         7     8       9

                                             II – 30
      The problem is invariant under rotations and reﬂections of the board. In fact, of
the 12 possible positions for the destroyer, there are only two distinct invariant choices
available to Player I: the strategy, [1, 2]∗ , that chooses one of [1,2], [2,3], [3,6], [6,9], [8,9],
[7,8], [4,7], and [1,4], at random with probability 1/8 each, and the strategy, [2, 5]∗ , that
chooses one of [2,5], [5,6], [5,8], and [4,5], at random with probability 1/4 each. This means
that invariance reduces the game to a 2 by n game where n is the number of invariant
strategies of Player II. Domination may reduce it somewhat further. Solve the game.
      16. Dresher’s Guessing Game. Player I secretly writes down one of the numbers
1, 2, . . . , n. Player II must repeatedly guess what I’s number is until she guesses correctly,
losing 1 for each guess. After each guess, Player I must say whether the guess is correct,
too high, or too low. Solve this game for n = 3. (This game was investigated by Dresher
(1961) and solved for n ≤ 11 by Johnson (1964). A related problem is treated in Gal
(1974).)
    17. Thievery. Player I wants to steal one of m ≥ 2 items from Player II. Player II
can only guard one item at a time. Item i is worth ui > 0, for i = 1, . . . , m. This leads to
a matrix game with m × m matrix,
                                                                    
                                   0          u1    u1    ...    u1
                                  u2         0     u2    ...    u2 
                                                                    
                               A= u
                                  .3
                                              u3    0     ...    u3 
                                  ..          ..    ..           .. 
                                                                   . 
                                                          ..
                                                .     .      .
                                         um   um    um    ...    0

Solve!
      Hint: It might be expected that for some k ≤ m Player I will give all his probability
to stealing one of the k most expensive items. Order the items from most expensive to
least expensive, u1 ≥ u2 ≥ . . . ≥ um > 0, and use the principle of indiﬀerence on the upper
left k × k submatrix of A for some k.
      18. Player II chooses a number j ∈ {1, 2, . . . , n}, n ≥ 2, and Player I tries to guess what
it is by guessing some i ∈ {1, 2, . . . , n}. If he guesses correctly, i.e. i = j, he wins 1. If he
misses by exactly 1, i.e. |i−j| = 1, he loses 1/2. Otherwise there is no payoﬀ. Solve. (If the
payoﬀ −1/2 for |i − j| = 1 is replaced by some number α ≥ 0, this is called the “Helicopter
versus Submarine Game”. It has been solved by Garnaev (1992) for 0 ≤ α ≤ 1/2.) Hint:
Let An denote the n by n payoﬀ matrix, and show that A−1             n = (2/(n + 1))Bn , where
Bn = (bij ) with bij = bji , and for i ≤ j, bij = i(n + 1 − j).
      19. The Number Hides Game. The following game is a special case of the Number
Hides Game, introduced by Ruckle (1983) and solved by Baston, Bostock and Ferguson
(1989). Player II chooses an integer j, 1 ≤ j ≤ n. Player I tries to guess j by choosing an
integer i, 1 ≤ i ≤ n. Player I wins 2 if he is exactly right (i = j), he wins 1 if he if oﬀ by
1 (|i − j| = 1), and he wins nothing otherwise. Show the following.
     (a) For n odd, the value is Vn = 4/(n + 1). There is an optimal equalizing strategy
(the same for both players) that is proportional to (1, 0, 1, 0, . . . , 0, 1).

                                              II – 31
     (b) For n even, the value is 4(n+1)/(n(n+2)). There is an optimal equalizing strategy
(the same for both players) that is proportional to (k, 1, k − 1, 2, k − 3, 3, . . . , 2, k − 1, 1, k),
where k = n/2.




                                               II – 32
     4. Solving Finite Games.

      Consider an arbitrary ﬁnite two-person zero-sum game, (X, Y, A), with m × n matrix,
A. Let us take the strategy space X to be the ﬁrst m integers, X = {1, 2, . . . , m}, and
similarly, Y = {1, 2, . . . , n}. A mixed strategy for Player I may be represented by a column
vector, (p1 , p2 , . . . , pm )T of probabilities that add to 1. Similarly, a mixed strategy for Player
II is an n-tuple q = (q1 , q2 , . . . , qn )T. The sets of mixed strategies of players I and II will
be denoted respectively by X ∗ and Y ∗ ,
                                                                        m
      X ∗ = {p = (p1 , . . . , pm )T : pi ≥ 0, for i = 1, . . . , m and 1 pi = 1}
                                                                       n
      Y ∗ = {q = (q1 , . . . , qn )T : qj ≥ 0, for j = 1, . . . , n and 1 qj = 1}
     The m-dimensional unit vector ek ∈ X ∗ with a one for the kth component and zeros
elsewhere may be identiﬁed with the pure strategy of choosing row k. Thus, we may
consider the set of Player I’s pure strategies, X, to be a subset of X ∗ . Similarly, Y may
be considered to be a subset of Y ∗ . We could if we like consider the game (X, Y, A) in
which the players are allowed to use mixed strategies as a new game (X ∗ , Y ∗ , A), where
A(p, q) = pTAq, though we would no longer call this game a ﬁnite game.
     In this section, we give an algorithm for solving ﬁnite games; that is, we show how to
ﬁnd the value and at least one optimal strategy for each player. Occasionally, we shall be
interested in ﬁnding all optimal strategies for a player.

    4.1 Best Responses. Suppose that Player II chooses a column at random using
q ∈ Y ∗ . If Player I chooses row i, the average payoﬀ to I is
                                                n
                                                        aij qj = (Aq)i ,                           (1)
                                                j=1

the ith component of the vector Aq. Similarly, if Player I uses p ∈ X ∗ and Player II
chooses column j, Then I’s average payoﬀ is
                                                n
                                                      pi aij = (pTA)j ,                            (2)
                                              i=1

the jth component of the vector pTA. More generally, if Player I uses p ∈ X ∗ and Player
II uses q ∈ Y ∗ , the average payoﬀ to I becomes
                                     
                          m         n                         m     n
                                         aij qj  pi =                 pi aij qj = pTAq.          (3)
                          i=1       j=1                      i=1 j=1


     Suppose it is known that Player II is going to use a particular strategy q ∈ Y ∗ . Then
Player I would choose that row i that maximizes (1); or, equivalently, he would choose
that p ∈ X ∗ that maximizes (3). His average payoﬀ would be
                                                    n
                                          max            aij qj = max∗ pTAq                        (4)
                                        1≤i≤m                       p∈X
                                                 j=1


                                                          II – 33
To see that these quantities are equal, note that the left side is the maximum of pTAq over
p ∈ X ∗ , and so, since X ⊂ X ∗ , must be less than or equal to the right side. The reverse
inequality follows since (3) is an average of the quantities in (1) and so must be less than
or equal to the largest of the values in (1).
     Any p ∈ X ∗ that achieves the maximum of (3) is called a best response or a Bayes
strategy against q. In particular, any row i that achieves the maximum of (1) is a (pure)
Bayes strategy against q. There always exist pure Bayes strategies against q for every
q ∈ Y ∗ in ﬁnite games.
     Similarly, if it is known that Player I is going to use a particular strategy p ∈ X ∗ , then
Player II would choose that column j that minimizes (2), or, equivalently, that q ∈ Y ∗
that minimizes (3). Her average payoﬀ would be
                                         m
                                   min         pi aij = min∗ pTAq.                           (5)
                                 1≤j≤n                       q∈Y
                                         i=1

Any q ∈ Y ∗ that achieves the minimum in (5) is called a best response or a Bayes strategy
for Player II against p.
     The notion of a best response presents a practical way of playing a game: Make a
guess at the probabilities that you think your opponent will play his/her various pure
strategies, and choose a best response against this. This method is available in quite
complex situations. In addition, it allows a player to take advantage of an opponent’s
perceived weaknesses. Of course this may be a dangerous procedure. Your opponent may
be better at this type of guessing than you. (See Exercise 1.)

     4.2 Upper and Lower Values of a Game. Suppose now that II is required to
announce her choice of a mixed strategy q ∈ Y ∗ before I makes his choice. This changes
the game to make it apparently more favorable to I. If II announces q, then certainly I
would use a Bayes strategy against q and II would lose the quantity (4) on the average.
Therefore, II would choose to announce that q that minimizes (4). The minimum of (4)
over all q ∈ Y ∗ is denoted by V and called the upper value of the game (X, Y, A).
                                               n
                        V = min∗ max                aij qj = min∗ max∗ pTAq.                 (6)
                             q∈Y   1≤i≤m                       q∈Y   p∈X
                                           j=1

Any q ∈ Y ∗ that achieves the minimum in (6) is called a minimax strategy for II. It
minimizes her maximum loss. There always exists a minimax strategy in ﬁnite games: the
quantity (4), being the maximum of m linear functions of q, is a continuous function of q
and since Y ∗ is a closed bounded set, this function assumes its minimum over Y ∗ at some
point of Y ∗ .
    In words, V as the smallest average loss that Player II can assure for herself no matter
what I does.
    A similar analysis may be carried out assuming that I must announce his choice of a
mixed strategy p ∈ X ∗ before II makes her choice. If I announces p, then II would choose

                                                   II – 34
that column with the smallest average payoﬀ, or equivalently that q ∈ Y ∗ that minimizes
the average payoﬀ (5). Given that (5) is the average payoﬀ to I if he announces p, he
would therefore choose p to maximize (5) and obtain on the average
                                          m
                        V = max∗ min           pi aij = max∗ min∗ pTAq.                    (7)
                             p∈X 1≤j≤n                  p∈X q∈Y
                                         i=1

The quantity V is called the lower value of the game. It is the maximum amount that I can
guarantee himself no matter what II does. Any p ∈ X ∗ that achieves the maximum in (7)
is called a minimax strategy for I. Perhaps maximin strategy would be more appropriate
terminology in view of (7), but from symmetry (either player may consider himself Player
II for purposes of analysis) the same word to describe the same idea may be preferable
and it is certainly the customary terminology. As in the analysis for Player II, we see that
Player I always has a minimax strategy. The existence of minimax strategies in matrix
games is worth stating as a lemma.

Lemma 1. In a ﬁnite game, both players have minimax strategies.

     It is easy to argue that the lower value is less than or equal to the upper value. For if
V < V and if I can assure himself of winning at least V , Player II cannot assure herself of
not losing more than V , an obvious contradiction. It is worth stating this fact as a lemma
too.

Lemma 2. The lower value is less than or equal to the upper value,

                                           V ≤ V.

    This lemma also follows from the general mathematical principle that for any real-
valued function, f(x, y), and any sets, X ∗ and Y ∗ ,

                           max min f(x, y) ≤ min∗ max∗ f(x, y).
                           x∈X ∗ y∈Y ∗            y∈Y   x∈X

To see this general principle, note that miny f(x, y  ) ≤ f(x, y) ≤ maxx f(x , y) for every
ﬁxed x and y. Then, taking maxx on the left does not change the inequality, nor does
taking miny on the right, which gives the result.
     If V < V , the average payoﬀ should fall between V and V . Player II can keep it from
getting larger than V and Player I can keep it from getting smaller than V . When V = V ,
a very nice stable situation exists.

Deﬁnition. If V = V , we say the value of the game exists and is equal to the common
value of V and V , denoted simply by V . If the value of the game exists, we refer to
minimax strategies as optimal strategies.

     The Minimax Theorem, stated in Chapter 1, may be expressed simply by saying that
for ﬁnite games, V = V .

                                           II – 35
The Minimax Theorem. Every ﬁnite game has a value, and both players have minimax
strategies.

     We note one remarkable corollary of this theorem. If the rules of the game are changed
so that Player II is required to announce her choice of a mixed strategy before Player I
makes his choice, then the apparent advantage given to Player I by this is illusory. Player
II can simply announce her minimax strategy.

     4.3 Invariance under Change of Location and Scale. Another simple observa-
tion is useful in this regard. This concerns the invariance of the minimax strategies under
the operations of adding a constant to each entry of the game matrix, and of multiplying
each entry of the game matrix by a positive constant. The game having matrix A = (aij )
and the game having matrix A = (aij ) with aij = aij + b, where b is an arbitrary real
number, are very closely related. In fact, the game with matrix A is equivalent to the
game in which II pays I the amount b, and then I and II play the game with matrix A.
Clearly any strategies used in the game with matrix A give Player I b plus the payoﬀ
using the same strategies in the game with matrix A. Thus, any minimax strategy for
either player in one game is also minimax in the other, and the upper (lower) value of the
game with matrix A is b plus the upper (lower) value of the game with matrix A.
     Similarly, the game having matrix A = (aij ) with aij = caij , where c is a positive
constant, may be considered as the game with matrix A with a change of scale (a change
of monetary unit if you prefer). Again, minimax strategies do not change, and the upper
(lower) value of A is c times the upper (lower) value of A. We combine these observations
as follows. (See Exercise 2.)

Lemma 3. If A = (aij ) and A = (aij ) are matrices with aij = caij + b, where c > 0,
then the game with matrix A has the same minimax strategies for I and II as the game
with matrix A . Also, if V denotes the value of the game with matrix A, then the value
V  of the game with matrix A satisﬁes V  = cV + b.

     4.4 Reduction to a Linear Programming Problem. There are several nice proofs
of the Minimax Theorem. The simplest proof from scratch seems to be that of G. Owen
(1982). However, that proof is by contradiction using induction on the size of the matrix.
It gives no insight into properties of the solution or on how to ﬁnd the value and optimal
strategies. Other proofs, based on the Separating Hyperplane Theorem or the Brouwer
Fixed Point Theorem, give some insight but are based on nontrivial theorems not known
to all students.
      Here we use a proof based on linear programming. Although based on material not
known to all students, it has the advantage of leading to a simple algorithm for solving
ﬁnite games. For a background in linear programming, the book by Chvátal (1983) can be
recommended. A short course on Linear Programming more in tune with the material as
it is presented here may be found on the web at http://www.math.ucla.edu/˜tom/LP.pdf.
    A Linear Program is deﬁned as the problem of choosing real variables to maximize or
minimize a linear function of the variables, called the objective function, subject to linear

                                           II – 36
constraints on the variables. The constraints may be equalities or inequalities. A standard
form of this problem is to choose y1 ,. . . ,yn , to

                                  maximize            b1 y1 + · · · + bn yn ,             (8)

subject to the constraints
                                        a11 y1 + · · · + a1n yn ≤ c1
                                                               ..                         (9)
                                                                .
                                    am1 y1 + · · · + amn yn ≤ cm
and
                                    yj ≥ 0            for j = 1, . . . , n.

        Let us consider the game problem from Player I’s point of view. He wants to choose
p1 , . . . , pm to maximize (5) subject to the constraint p ∈ X ∗ . This becomes the mathe-
matical program: choose p1 , . . . , pm to
                                                                  m
                                    maximize             min           pi aij            (10)
                                                        1≤j≤n
                                                                 i=1


subject to the constraints
                                           p1 + · · · + pm = 1                           (11)
and
                                        pi ≥ 0    for i = 1, . . . , m.

     Although the constraints are linear, the objective function is not a linear function of
the p’s because of the min operator, so this is not a linear program. However, it can be
changed into a linear program through a trick. Add one new variable v to   Player I’s list of
                                                                              m
variables, restrict it to be less than the objective function, v ≤ min1≤j≤n i=1 pi aij , and
try to make v as large as possible subject to this new constraint. The problem becomes:
      Choose v and p1 , . . . , pm to
                                              maximize v                                 (12)
subject to the constraints
                                                        m
                                                 v≤           pi ai1
                                                        i=1
                                                 ..
                                                  .                                      (13)
                                                        m
                                                 v≤           pi ain
                                                        i=1
                                           p1 + · · · + pm = 1

                                                      II – 37
and
                                pi ≥ 0         for i = 1, . . . , m.
This is indeed a linear program. For solving such problems, there exists a simple algorithm
known as the simplex method.
     In a similar way, one may view the problem from Player II’s point of view and arrive
at a similar linear program. II’s problem is: choose w and q1 , . . . , qn to

                                       minimize w                                     (14)

subject to the constraints
                                                      n
                                         w≥                a1j qj
                                                     j=1
                                              ..
                                               .                                      (15)
                                                      n
                                         w≥                amj qj
                                                     j=1

                                     q1 + · · · + qn = 1
and
                                 qj ≥ 0 for j = 1, . . . , n.

     In Linear Programming, there is a theory of duality that says these two programs,
(12)-(13), and (14)-(15), are dual programs. And there is a remarkable theorem, called the
Duality Theorem, that says dual programs have the same value. The maximum Player I
can achieve in (14) is equal to the minimum that Player II can achieve in (12). But this is
exactly the claim of the Minimax Theorem. In other words, the Duality Theorem implies
the Minimax Theorem.
     There is another way to transform the linear program, (12)-(13), into a linear program
that is somewhat simpler for computations when it is known that the value of the game
is positive. So suppose v > 0 and let xi = pi /v. Then the constraint p1 + · · · + pm = 1
becomes x1 + · · · + xm = 1/v, which looks nonlinear. But maximizing v is equivalent to
minimizing 1/v, so we can remove v from the problem by minimizing x1 + · · · + xm instead.
The problem, (12)-(13), becomes: choose x1 , . . . , xm to
                                minimize x1 + · · · + xm                              (16)

subject to the constraints
                                                    m
                                       1≤                 xi ai1
                                                    i=1
                                         ..                                           (17)
                                          .
                                                    m
                                       1≤                 xi ain
                                                    i=1


                                                   II – 38
and
                                   xi ≥ 0     for i = 1, . . . , m.
When we have solved this problem, the solution of the original game may be easily found.
The value will be v = 1/(x1 + · · · + xm ) and the optimal strategy for Player I will be
pi = vxi for i = 1, . . . .m.

    4.5 Description of the Pivot Method for Solving Games The following algo-
rithm for solving ﬁnite games is essentially the simplex method for solving (16)-(17) as
described in Williams (1966).
Step 1. Add a constant to all elements of the game matrix if necessary to insure that the
value is positive. (If you do, you must remember at the end to subtract this constant from
the value of the new matrix game to get the value of the original matrix game.)
Step 2. Create a tableau by augmenting the game matrix with a border of −1’s along
the lower edge, +1’s along the right edge, and zero in the lower right corner. Label I’s
strategies on the left from x1 to xm and II’s strategies on the top from y1 to yn .

                                   y1       y2      ···      yn
                           x1      a11      a12     ···      a1n      1
                           x2      a21      a22     ···      a2n      1
                            ..      ..       ..               ..      ..
                             .       .        .                .       .
                          xm       am1      am2     ···     amn       1
                                   −1       −1      ···      −1       0

Step 3. Select any entry in the interior of the tableau to be the pivot , say row p column q,
subject to the properties:
    a. The border number in the pivot column, a(m + 1, q), must be negative.
    b. The pivot, a(p, q), itself must be positive.
    c. The pivot row, p, must be chosen to give the smallest of the ratios the border
number in the pivot row to the pivot, a(p, n + 1)/a(p, q), among all positive pivots for that
column.
Step 4. Pivot as follows:
      a. Replace each entry, a(i, j), not in the row or column of the pivot by a(i, j)− a(p, j)·
a(i, q)/a(p, q).
      b. Replace each entry in the pivot row, except for the pivot, by its value divided by
the pivot value.
      c. Replace each entry in the pivot column, except for the pivot, by the negative of its
value divided by the pivot value.
      d. Replace the pivot value by its reciprocal.
      This may be represented symbolically by

                                 
                                 p r              1/p     r/p
                                         −→
                                 c q              −c/p q − (rc/p)

                                              II – 39
where p stands for the pivot, r represents and number in the same row as the pivot, c
represents any number in the same column as the pivot, and q is an arbitrary entry not in
the same row or column as the pivot.
Step 5. Exchange the label on the left of the pivot row with the label on the top of the
pivot column.
Step 6. If there are any negative numbers remaining in the lower border row, go back to
step 3.
Step 7. Otherwise, a solution may now be read out:
     a. The value, v, is the reciprocal of the number in the lower right corner. (If you
subtracted a number from each entry of the matrix in step 1, it must be added to v here.)
     b. I’s optimal strategy is constructed as follows. Those variables of Player I that end
up on the left side receive probability zero. Those that end up on the top receive the value
of the bottom edge in the same column divided by the lower right corner.
     c. II’s optimal strategy is constructed as follows. Those variables of Player II that
end up on the top receive probability zero. Those that end up on the left receive the value
of the right edge in the same row divided by the lower right corner.

     4.6 A Numerical Example. Let us illustrate these steps using an example. Let’s
take a three-by-three matrix since that is the simplest example one we cannot solve using
previous methods. Consider the matrix game with the following matrix,
                                                   
                                       2       −1 6
                                  B=  0       1 −1 
                                       −2      2  1

We might check for a saddle point (there is none) and we might check for domination
(there is none). Is the value positive? We might be able to guess by staring at the matrix
long enough, but why don’t we simply make the ﬁrst row positive by adding 2 to each
entry of the matrix:                               
                                            4 1 8
                                     B =  2 3 1 
                                            0 4 3
The value of this game is at least one since Player I can guarantee at least 1 by using the
ﬁrst (or second) row. We will have to remember to subtract 2 from the value of B  to get
the value of B. This completes Step 1 of the algorithm.
    In Step 2, we set up the tableau for the matrix B  as follows.

                                       y1 y2 y3
                                  x1    4 1   8         1
                                  x2    2 3   1         1
                                  x3    0 4   3         1
                                       −1 −1 −1         0

                                           II – 40
     In Step 3, we must choose the pivot. Since all three columns have a negative number
in the lower edge, we may choose any of these columns as the pivot column. Suppose we
choose column 1. The pivot row must have a positive number in this column, so it must be
one of the top two rows. To decide which row, we compute the ratios of border numbers
to pivot. For the ﬁrst row it is 1/4; for the second row it is 1/2. the former is smaller, so
the pivot is in row 1. We pivot about the 4 in the upper left corner.
     Step 4 tells us how to pivot. The pivot itself gets replaced by its reciprocal, namely
1/4. The rest of the numbers in the pivot row are simply divided by the pivot, giving 1/4,
2, and 1/4. Then the rest of the numbers in the pivot column are divided by the pivot and
changed in sign. The remaining nine numbers are modiﬁed by subtracting r · c/p for the
corresponding r and c. For example, from the 1 in second row third column we subtract
8 × 2/4 = 4, leaving −3. The complete pivoting operation is

                   y1 y2 y3                               x1   y2    y3
              x1    
                    4  1  8         1             y1     1/4 1/4      2      1/4
              x2    2  3  1         1    −→       x2    −1/2 5/2     −3      1/2
              x3    0  4  3         1             x3       0    4     3        1
                   −1 −1 −1         0                    1/4 −3/4     1      1/4

     In the ﬁfth step, we interchange the labels of the pivot row and column. Here we
interchange x1 and y1 . This has been done in the display.
     For Step 6, we check for negative entries in the lower edge. Since there is one, we
return to Step 3.
    This time, we must pivot in column 2 since it has the unique negative number in the
lower edge. All three numbers in this column are positive. We ﬁnd the ratios of border
numbers to pivot for rows 1, 2 and 3 to be 1, 1/5, and 1/4. The smallest occurs in the
second row, so we pivot about the 5/2 in the second row, second column. Completing
Steps 4 and 5, we obtain

                 x1   y2       y3                             x1  x2    y3
         y1     1/4 1/4         2       1/4             y1    .3 −.1   2.3         .2
         x2    −1/2 5/2       −3       1/2     −→      y2   −.2   .4 −1.2         .2
         x3       0    4        3         1             x3    .8 −1.6  7.8         .2
                1/4 −3/4        1       1/4                   .1   .3   .1         .4


    At Step 6 this time, all values on the lower edge are non-negative so we pass to Step
7. We may now read the solution to the game with matrix B  .
    The value is the reciprocal of .4, namely 5/2.
     Since x3 is on the left in the ﬁnal tableau, the optimal p3 is zero. The optimal p1
and p2 are the ratios, .1/.4 and .3/.4, namely 1/4 and 3/4. Therefore, I’s optimal mixed
strategy is (p1 , p2 , p3 ) = (.25, .75, 0).

                                              II – 41
     Since y3 is on the top in the ﬁnal tableau, the optimal q3 is zero. The optimal q1
and q2 are the ratios, .2/.4 and .2/.4, namely 1/2 and 1/2. Therefore, II’s optimal mixed
strategy is (q1 , q2 , q3 ) = (.5, .5, 0).
    The game with matrix B has the same optimal mixed strategies but the value is
5/2 − 2 = 1/2.


     Remarks. 1. The reason that the pivot row is chosen according to the rule in Step
3(c) is so that the numbers in the resulting right edge of the tableau stay non-negative. If
after pivoting you ﬁnd a negative number in the last column, you have made a mistake,
either in the choice of the pivot row, or in your numerical calculations for pivoting.
     2. There may be ties in comparing the ratios to choose the pivot row. The rule given
allows you to choose among those rows with the smallest ratios. The smallest ratio may
be zero.
     3. The value of the number in the lower right corner never decreases. (Can you see
why this is?) In fact, the lower right corner is always equal to the sum of the values in the
lower edge corresponding to Player I’s labels along the top. Similarly, it is also the sum
of the values on the right edge corresponding to Player II’s labels on the left. This gives
another small check on your arithmetic.
    4. One only pivots around numbers in the main body of the tableau, never in the
lower or right edges.
     5. This method gives one optimal strategy for each player. If other optimal strategies
exist, there will be one or more zeros in the bottom edge or right edge in the ﬁnal tableau.
Other optimal basic strategies can be found by pivoting further, in a column with a zero
in the bottom edge or a row with a zero in the right edge, in such a way that the bottom
row and right edge stay nonnegative.

     4.7 Exercises.
     1. Consider the game with matrix A. Past experience in playing the game with Player
II enables Player I to arrive at a set of probabilities reﬂecting his belief of the column that II
will choose. I thinks that with probabilities 1/5, 1/5, 1/5, and 2/5, II will choose columns
1, 2, 3, and 4 respectively.
                                                             
                                    0           7    2      4
                                A= 1           4    8      2.
                                    9           3   −1      6


     (a) Find for I a Bayes strategy (best response) against (1/5, 1/5, 1/5, 2/5).
     (b) Suppose II guesses correctly that I is going to use a Bayes strategy against
(1/5, 1/5, 1/5, 2/5). Instruct II on the strategy she should use - that is, ﬁnd II’s Bayes
strategy against I’s Bayes strategy against (1/5, 1/5, 1/5, 2/5).

                                             II – 42
    2. The game with matrix A has value zero, and (6/11, 3/11, 2/11) is optimal for I.
                                                                                
                         0       −1  1                      5           3        7
                   A=   2        0 −2               B=   9           5        1
                        −3        3  0                     −1          11        5

    (a) Find the value of the game with matrix B and an optimal strategy for I.
    (b) Find an optimal strategy for II in both games.
    3. A game without a value. Let X = {1, 2, 3, . . .}, let Y = {1, 2, 3, . . .} and

                                                  +1 if i > j
                                  A(i, j) =        0 if i = j
                                                  −1 if i < j

This is the game “The player that chooses the larger integer wins”. Here we may take for
the space X ∗ of mixed strategies of Player I
                                                                       ∞
                    ∗
                  X = {(p1 , p2 , . . .) : pi ≥ 0 for all i, and             pi = 1}.
                                                                       i=1

Similarly,
                                                                       ∞
                    ∗
                  Y = {(q1 , q2 , . . .) : qj ≥ 0 for all j, and             qj = 1}.
                                                                       j=1

The payoﬀ for given p ∈ X ∗ and q ∈ Y ∗ is
                                              ∞   ∞
                               A(p, q) =              pi A(i, j)qj .
                                           i=1 j=1


                                                  ∞
    (a) Show that for all q ∈ Y ∗ , sup1≤i<∞        j=1 A(i, j)qj = +1.

    (b) Conclude that V = +1.
    (c) Using symmetry, argue that V = −1.
    (d) What are I’s minimax strategies in this game?
    4. Use the method presented in Section 4.5 to solve the game with matrix
                                                    
                                        0    1     2
                              A =  2 −1 −2  .
                                        3 −3       0

Either argue that the value is positive, or add +1 to the elements of the matrix. To go
easy on the homework grader, make the ﬁrst pivot in the second column.

                                            II – 43
    5. An Example In Which the Lower Value is Greater than the Upper
Value? Consider the inﬁnite game with strategy spaces X = Y = {0, 1, 2, . . .}, and payoﬀ
function,
                                         0     if i = j
                              A(i, j) = 4j     if i > j
                                         −4i if i < j.
Note that the game is symmetric. Let p = (p0 , p1 , p2 , . . .) = (1/2, 1/4, 1/8, . . .) be be a
mixed strategy for Player I, pi = 2−(i+1).
                                                                      ∞
     (a) Show that if Player I uses this strategy, his average return, i=0 pi A(i, j), is equal
to 1/2 for all pure strategies j for Player II.
     (b) So p is an equalizer strategy that guarantees Player I at least 1/2. So the lower
value is at least 1/2. Perhaps he can do better. In fact he can, but . . . Wait a minute! The
game is symmetric. Shouldn’t the value be zero? Worse, suppose Player II uses the same
strategy. By symmetry, she can keep Player I’s winnings down to −1/2 no matter what
pure strategy he chooses. So the upper value is at most −1/2. What is wrong? What
if both players use the mixed strategy, p? We haven’t talked much about inﬁnite games,
but what restrictions would you place on inﬁnite games to avoid such absurd examples?
Should the restrictions be placed on the payoﬀ function, A, or on the notion of a mixed
strategy?




                                            II – 44
    5. The Extensive Form of a Game

     The strategic form of a game is a compact way of describing the mathematical aspects
of a game. In addition, it allows a straightforward method of analysis, at least in principle.
However, the ﬂavor of many games is lost in such a simple model. Another mathematical
model of a game, called the extensive form, is built on the basic notions of position and
move, concepts not apparent in the strategic form of a game. In the extensive form, we
may speak of other characteristic notions of games such as bluﬃng, signaling, sandbagging,
and so on. Three new concepts make their appearance in the extensive form of a game:
the game tree, chance moves, and information sets.

     5.1 The Game Tree. The extensive form of a game is modelled using a directed
graph. A directed graph is a pair (T, F ) where T is a nonempty set of vertices and F is
a function that gives for each x ∈ T a subset, F (x) of T called the followers of x. When
a directed graph is used to represent a game, the vertices represent positions of the game.
The followers, F (x), of a position, x, are those positions that can be reached from x in one
move.
    A path from a vertex t0 to a vertex t1 is a sequence, x0 , x1 , . . . , xn , of vertices
such that x0 = t0 , xn = t1 and xi is a follower of xi−1 for i = 1, . . . , n. For the extensive
form of a game, we deal with a particular type of directed graph called a tree.

Deﬁnition. A tree is a directed graph, (T, F ) in which there is a special vertex, t0 , called
the root or the initial vertex, such that for every other vertex t ∈ T , there is a unique path
beginning at t0 and ending at t.

     The existence and uniqueness of the path implies that a tree is connected, has a unique
initial vertex, and has no circuits or loops.
     In the extensive form of a game, play starts at the initial vertex and continues along
one of the paths eventually ending in one of the terminal vertices. At terminal vertices,
the rules of the game specify the payoﬀ. For n-person games, this would be an n-tuple of
payoﬀs. Since we are dealing with two-person zero-sum games, we may take this payoﬀ to
be the amount Player I wins from Player II. For the nonterminal vertices there are three
possibilities. Some nonterminal vertices are assigned to Player I who is to choose the move
at that position. Others are assigned to Player II. However, some vertices may be singled
out as positions from which a chance move is made.
     Chance Moves. Many games involve chance moves. Examples include the rolling of
dice in board games like monopoly or backgammon or gambling games such as craps, the
dealing of cards as in bridge or poker, the spinning of the wheel of fortune, or the drawing
of balls out of a cage in lotto. In these games, chance moves play an important role. Even
in chess, there is generally a chance move to determine which player gets the white pieces
(and therefore the ﬁrst move which is presumed to be an advantage). It is assumed that
the players are aware of the probabilities of the various outcomes resulting from a chance
move.

                                            II – 45
     Information. Another important aspect we must consider in studying the extensive
form of games is the amount of information available to the players about past moves of
the game. In poker for example, the ﬁrst move is the chance move of shuﬄing and dealing
the cards, each player is aware of certain aspects of the outcome of this move (the cards he
received) but he is not informed of the complete outcome (the cards received by the other
players). This leads to the possibility of “bluﬃng.”

     5.2 Basic Endgame in Poker. One of the simplest and most useful mathematical
models of a situation that occurs in poker is called the “classical betting situation” by
Friedman (1971) and “basic endgame” by Cutler (1976). These papers provide explicit
situations in the game of stud poker and of lowball stud for which the model gives a very
accurate description. This model is also found in the exercises of the book of Ferguson
(1967). Since this is a model of a situation that occasionally arises in the last round of
betting when there are two players left, we adopt the terminology of Cutler and call it
Basic Endgame in poker. This will also emphasize what we feel is an important feature of
the game of poker, that like chess, go, backgammon and other games, there is a distinctive
phase of the game that occurs at the close, where special strategies and tactics that are
analytically tractable become important.
     Basic Endgame is played as follows. Both players put 1 dollar, called the ante, in the
center of the table. The money in the center of the table, so far two dollars, is called the
pot. Then Player I is dealt a card from a deck. It is a winning card with probability 1/4
and a losing card with probability 3/4. Player I sees this card but keeps it hidden from
Player II. (Player II does not get a card.) Player I then checks or bets. If he checks, then
his card is inspected; if he has a winning card he wins the pot and hence wins the 1 dollar
ante from II, and otherwise he loses the 1 dollar ante to II. If I bets, he puts 2 dollars more
into the pot. Then Player II – not knowing what card Player I has – must fold or call. If
she folds, she loses the 1 dollar ante to I no matter what card I has. If II calls, she adds 2
dollars to the pot. Then Player I’s card is exposed and I wins 3 dollars (the ante plus the
bet) from II if he has a winning card, and loses 3 dollars to II otherwise.
     Let us draw the tree for this game. There are at most three moves in this game: (1)
the chance move that chooses a card for I, (2) I’s move in which he checks or bets, and (3)
II’s move in which she folds or calls. To each vertex of the game tree, we attach a label
indicating which player is to move from that position. Chance moves we generally refer to
as moves by nature and use the label N. See Figure 1.
     Each edge is labelled to identify the move. (The arrows are omitted for the sake of
clarity. Moves are assumed to proceed down the page.) Also, the moves leading from a
vertex at which nature moves are labelled with the probabilities with which they occur.
At each terminal vertex, we write the numerical value of I’s winnings (II’ s losses).
     There is only one feature lacking from the above ﬁgure. From the tree we should be
able to reconstruct all the essential rules of the game. That is not the case with the tree of
Figure 1 since we have not indicated that at the time II makes her decision she does not
know which card I has received. That is, when it is II’s turn to move, she does not know at
which of her two possible positions she is. We indicate this on the diagram by encircling the

                                           II – 46
                                                  N

                                winning                       losing
                                  I     1/4               3/4      I

                       bet              check              bet                check
                      II                                  II
                                         1                                     −1
              call               fold            call              fold

               3                  1             −3                   1
                                              Figure 1.

two positions in a closed curve, and we say that these two vertices constitute an information
set. The two vertices at which I is to move constitute two separate information sets since
he is told the outcome of the chance move. To be complete, this must also be indicated
on the diagram by drawing small circles about these vertices. We may delete one of the
labels indicating II’s vertices since they belong to the same information set. It is really
the information set that must be labeled. The completed game tree becomes
                                              N

                                winning                          losing
                                 I      1/4               3/4             I


                          bet           check             bet                 check
                     II
                                         1                                     −1
              call               fold            call              fold

               3                  1             −3                   1
                                              Figure 2.

    The diagram now contains all the essential rules of the game.

     5.3 The Kuhn Tree. The game tree with all the payoﬀs, information sets, and labels
for the edges and vertices included is known as the Kuhn Tree. We now give the formal
deﬁnition of a Kuhn tree.
     Not every set of vertices can form an information set. In order for a player not to
be aware of which vertex of a given information set the game has come to, each vertex in
that information set must have the same number of edges leaving it. Furthermore, it is
important that the edges from each vertex of an information set have the same set of labels.
The player moving from such an information set really chooses a label. It is presumed that
a player makes just one choice from each information set.

                                                II – 47
Deﬁnition. A ﬁnite two-person zero-sum game in extensive form is given by
     1) a ﬁnite tree with vertices T ,
     2) a payoﬀ function that assigns a real number to each terminal vertex,
    3) a set T0 of non-terminal vertices (representing positions at which chance moves
occur) and for each t ∈ T0 , a probability distribution on the edges leading from t,
     4) a partition of the rest of the vertices (not terminal and not in T0 ) into two groups
of information sets T11 , T12 , . . . , T1k1 (for Player I) and T21 , T22 , . . . , T2k2 (for Player II),
and
    5) for each information set Tjk for player j, a set of labels Ljk , and for each t ∈ Tjk ,
a one-to-one mapping of Ljk onto the set of edges leading from t.

     The information structure in a game in extensive form can be quite complex. It may
involve lack of knowledge of the other player’s moves or of some of the chance moves. It
may indicate a lack of knowledge of how many moves have already been made in the game
(as is the case With Player II in Figure 3).
                                                  I

                                       A                         B
                              II                                           II

                                       c                          d
             a       b                                                              e
                 I
        0
             D           E         d       e          D      E                  a   b       c

             1           –1        1       –1         0     –2         2                    1
                                                                                D       E
                                                Figure 3.
                                                                                1       2
     It may describe situations in which one player has forgotten a move he has made
earlier (as is the case With Player I in Figures 3 or 4). In fact, one way to try to model
the game of bridge as a two-person zero-sum game involves the use of this idea. In bridge,
there are four individuals forming two teams or partnerships of two players each. The
interests of the members of a partnership are identical, so it makes sense to describe this
as a two-person game. But the members of one partnership make bids alternately based
on cards that one member knows and the other does not. This may be described as a
single player who alternately remembers and forgets the outcomes of some of the previous
random moves. Games in which players remember all past information they once knew
and all past moves they made are called games of perfect recall.
    A kind of degenerate situation exists when an information set contains two vertices
which are joined by a path, as is the case with I’s information set in Figure 5.

                                                 II – 48
                                                                          I

                                                   f                                        g

                                                                                                            II

                               a                       b                                a                        b
                                                                                            I
                           1                                                                                         2
                                           c                    d               c               d

                                   –1                           0               0               –1

                                                                    Figure 4.

     We take it as a convention that a player makes one choice from each information set
during a game. That choice is used no matter how many times the information set is
reached. In Figure 5, if I chooses option a there is no problem. If I chooses option b, then
in the lower of I’s two vertices the a is superﬂuous, and the tree is really equivalent to
Figure 6. Instead of using the above convention, we may if we like assume in the deﬁnition
of a game in extensive form that no information set contains two vertices joined by a path.

                               I                                                                                         I

               a                       b                                                            a                            b
                                                       II                                                                            II

      c            d               c                        d                       c                   d                    c            d
                                                                                                                                 I
     2             0                                        2                   2                       0                                 2
                           a               b                                                                                 b

                          0                    1                                                                             1

                       Figure 5.                                                                             Figure 6.
     Games in which both players know the rules of the game, that is, in which both players
know the Kuhn tree, are called games of complete information. Games in which one or
both of the players do not know some of the payoﬀs, or some of the probabilities of chance
moves, or some of the information sets, or even whole branches of the tree, are called
games with incomplete information, or pseudogames. We assume in the following
that we are dealing with games of complete information.

     5.4 The Representation of a Strategic Form Game in Extensive Form. The
notion of a game in strategic form is quite simple. It is described by a triplet (X, Y, A) as in
Section 1. The extensive form of a game on the other hand is quite complex. It is described

                                                                     II – 49
by the game tree with each non-terminal vertex labeled as a chance move or as a move
of one of the players, with all information sets speciﬁed, with probability distributions
given for all chance moves, and with a payoﬀ attached to each terminal vertex. It would
seem that the theory of games in extensive is much more comprehensive than the theory
of games in strategic form. However, by taking a game in extensive form and considering
only the strategies and average payoﬀs, we may reduce the game to strategic form.
     First, let us check that a game in strategic form can be put into extensive form. In the
strategic form of a game, the players are considered to make their choices simultaneously,
while in the extensive form of a game simultaneous moves are not allowed. However,
simultaneous moves may be made sequentially as follows. We let one of the players, say
Player I, move ﬁrst, and then let player II move without knowing the outcome of I’s move.
This lack of knowledge may be described by the use of an appropriate information set.
The example below illustrates this.
                                                                          I

                                                              1                        2
                                                                                               II

                                              1         2       3                1       2        3
                       3 0     1
                       −1 2    0            3         0               1       –1           2            0
                  Matrix Form                       Equivalent Extensive Form
Player I has 2 pure strategies and Player II has 3. We pretend that Player I moves ﬁrst by
choosing row 1 or row 2. Then Player II moves, not knowing the choice of Player I. This is
indicated by the information set for Player II. Then Player II moves by choosing column
1, 2 or 3, and the appropriate payoﬀ is made.

     5.5 Reduction of a Game in Extensive Form to Strategic Form. To go in
the reverse direction, from the extensive form of a game to the strategic form, requires the
consideration of pure strategies and the usual convention regarding random payoﬀs.
       Pure strategies. Given a game in extensive form, we ﬁrst ﬁnd X and Y , the sets of
pure strategies of the players to be used in the strategic form. A pure strategy for Player
I is a rule that tells him exactly what move to make in each of his information sets. Let
T11 , . . . , T1k1 be the information sets for Player I and let L11 , . . . , L1k1 be the corresponding
sets of labels. A pure strategy for I is a k1 -tuple x = (xl , ..., xk1 ) where for each i, xi is one
of the elements of L1i . If there are mi elements in L1i , the number of such kl -tuples and
hence the number of I s pure strategies is the product m1 m2 · · · mk . The set of all such
strategies is X. Similarly, if T21 , . . . , T2k represent II’s information sets and L21 , . . . , L2k2
the corresponding sets of labels, a pure strategy for II is a k2 -tuple, y = (y1 , . . . , yk ) where
y ∈ L2j for each j. Player II has n1 n2 · · · nk pure strategies if there are nj elements in L2j .
Y denotes the set of these strategies.
    Random payoﬀs. A referee, given x ∈ X and y ∈ Y , could play the game, playing the
appropriate move from x whenever the game enters one of I’s information sets, playing the

                                                II – 50
appropriate move from y whenever the game enters one of II’s information sets, and playing
the moves at random with the indicated probabilities at each chance move. The actual
outcome of the game for given x ∈ X and y ∈ Y depends on the chance moves selected,
and is therefore a random quantity. Strictly speaking, random payoﬀs were not provided
for in our deﬁnition of games in normal form. However, we are quite used to replacing
random payoﬀs by their average values (expected values) when the randomness is due to
the use of mixed strategies by the players. We adopt the same convention in dealing with
random payoﬀs when the randomness is due to the chance moves. The justiﬁcation of this
comes from utility theory.

Convention. If for ﬁxed pure strategies of the players, x ∈ X and y ∈ Y , the payoﬀ is
a random quantity, we replace the payoﬀ by the average value, and denote this average
value by A(x, y).

       For example, if for given strategies x ∈ X and y ∈ Y , Player I wins 3 with probability
1/4, wins 1 with probability 1/4, and loses 1 with probability 1/2, then his average payoﬀ
is 14 (3) + 14 (1) + 12 (−1) = 1/2 so we let A(x, y) = 1/2.
    Therefore, given a game in extensive form, we say (X, Y, L) is the equivalent strategic
form of the game if X and Y are the pure strategy spaces of players I and II respectively,
and if A(x, y) is the average payoﬀ for x ∈ X and y ∈ Y .

     5.6 Example. Let us ﬁnd the equivalent strategic form to Basic Endgame in Poker
described in the Section 5.2, whose tree is given in Figure 2. Player I has two information
sets. In each set he must make a choice from among two options. He therefore has 2 · 2 = 4
pure strategies. We may denote them by
    (b, b): bet with a winning card or a losing card.
    (b, c): bet with a winning card, check with a losing card.
    (c, b): check with a winning card, bet with a losing card.
    (c, c): check with a winning card or a losing card.
Therefore, X = {(b, b), (b, c), (c, b), (c, c)}. We include in X all pure strategies whether
good or bad (in particular, (c, b) seems a rather perverse sort of strategy.)
    Player II has only one information set. Therefore, Y = {c, f}, where
    c: if I bets, call.
    f: if I bets, fold.
     Now we ﬁnd the payoﬀ matrix. Suppose I uses (b, b) and II uses c. Then if I gets a
winning card (which happens with probability l/4), he bets, II calls, and I wins 3 dollars.
But if I gets a losing card (which happens with probability 3/4), he bets, II calls, and I
loses 3 dollars. I’s average or expected winnings is
                                             1      3        3
                            A((b, b), c) =     (3) + (−3) = − .
                                             4      4        2

                                             II – 51
This gives the upper left entry in the following matrix. The other entries may be computed
similarly and are left as exercises.

                                             c  f
                                                   
                                   (b, b) −3/2  1
                                   (b, c) 
                                           0  −1/2 
                                                    
                                   (c, b)  −2  1 
                                   (c, c) −1/2 −1/2


     Let us solve this 4 by 2 game. The third row is dominated by the ﬁrst row, and the
fourth row is dominated by the second row. In terms of the original form of the game, this
says something you may already have suspected: that if I gets a winning card, it cannot
be good for him to check. By betting he will win at least
                                                        as much, andmaybe more. With
                                                          −3/2      1
the bottom two rows eliminated the matrix becomes                        , whose solution is
                                                            0    −1/2
easily found. The value is V = −1/4. I’s optimal strategy is to mix (b, b) and (b, c) with
probabilities 1/6 and 5/6 respectively, while II’s optimal strategy is to mix c and f with
equal probabilities 1/2 each. The strategy (b, b) is Player I’s bluﬃng strategy. Its use
entails betting with a losing hand. The strategy (b, c) is Player I’s “honest” strategy, bet
with a winning hand and check with a losing hand. I’s optimal strategy requires some
bluﬃng and some honesty.
      In Exercise 4, there are six information sets for I each with two choices. The number
of I’s pure strategies is therefore 26 = 64. II has 2 information sets each with two choices.
Therefore, II has 22 = 4 pure strategies. The game matrix for the equivalent strategic
form has dimension 64 by 4. Dominance can help reduce the dimension to a 2 by 3 game!
(See Exercise 10(d).)

    5.7 Games of Perfect Information. Now that a game in extensive form has been
deﬁned, we may make precise the notion of a game of perfect information.

Deﬁnition. A game of perfect information is a game in extensive form in which each
information set of every player contains a single vertex.

     In a game of perfect information, each player when called upon to make a move knows
the exact position in the tree. In particular, each player knows all the past moves of the
game including the chance ones. Examples include tic-tac-toe, chess, backgammon, craps,
etc.
     Games of perfect information have a particularly simple mathematical structure. The
main result is that every game of perfect information when reduced to strategic form has
a saddle point ; both players have optimal pure strategies. Moreover, the saddle point can
be found by removing dominated rows and columns. This has an interesting implication
for the game of chess for example. Since there are no chance moves, every entry of the
game matrix for chess must be either +1 (a win for Player I), or −1 (a win for Player

                                            II – 52
II), or 0 (a draw). A saddle point must be one of these numbers. Thus, either Player
I can guarantee himself a win, or Player II can guarantee himself a win, or both players
can assure themselves at least a draw. From the game-theoretic viewpoint, chess is a very
simple game. One needs only to write down the matrix of the game. If there is a row of all
+1’s, Player I can win. If there is a column of all −1’s, then Player II can win. Otherwise,
there is a row with all +1’s and 0’s and a column with all −1’s and 0’s, and so the game is
drawn with best play. Of course, the real game of chess is so complicated, there is virtually
no hope of ever ﬁnding an optimal strategy. In fact, it is not yet understood how humans
can play the game so well.

     5.8 Behavioral Strategies. For games in extensive form, it is useful to consider a
diﬀerent method of randomization for choosing among pure strategies. All a player really
needs to do is to make one choice of an edge for each of his information sets in the game.
A behavioral strategy is a strategy that assigns to each information set a probability
distributions over the choices of that set.
     For example, suppose the ﬁrst move of a game is the deal of one card from a deck of
52 cards to Player I. After seeing his card, Player I either bets or passes, and then Player
II takes some action. Player I has 52 information sets each with 2 choices of action, and
so he has 252 pure strategies. Thus, a mixed strategy for I is a vector of 252 components
adding to 1. On the other hand, a behavioral strategy for I simply given by the probability
of betting for each card he may receive, and so is speciﬁed by only 52 numbers.
     In general, the dimension of the space of behavioral strategies is much smaller than
the dimension of the space of mixed strategies. The question arises – Can we do as well
with behavioral strategies as we can with mixed strategies? The answer is we can if both
players in the game have perfect recall . The basic theorem, due to Kuhn in 1953 says that
in ﬁnite games with perfect recall, any distribution over the payoﬀs achievable by mixed
strategies is achievable by behavioral strategies as well.
     To see that behavioral strategies are not always suﬃcient, consider the game of im-
perfect recall of Figure 4. Upon reducing the game to strategic form, we ﬁnd the matrix

                                                a        b
                                                          
                                       (f, c)   1       −1
                                              
                                       (f, d)  1       0 
                                       (g, c)  0       2 
                                       (g, d) −1        2

The top and bottom rows may be removed by domination, so it is easy to see that the
unique optimal mixed strategies for I and II are (0, 2/3, 1/3, 0) and (2/3, 1/3) respectively.
The value is 2/3. However, Player I’s optimal strategy is not achievable by behavioral
strategies. A behavioral strategy for I is given by two numbers, pf , the probability of choice
f in the ﬁrst information set, and pc , the probability of choice c in the second information
set. This leads to the mixed strategy, (pf pc , pf (1 − pc ), (1 − pf )pc , (1 − pf )(1 − pc )). The
strategy (0, 2/3, 1/3, 0) is not of this form since if the ﬁrst component is zero, that is if

                                              II – 53
pf pc = 0, then either pf = 0 or pc = 0, so that either the second or third component must
be zero also.
     If the rules of the game require players to use behavioral strategies, as is the case for
certain models of bridge, then the game may not have a value. This means that if Player I
is required to announce his behavioral strategy ﬁrst, then he is at a distinct disadvantage.
The game of Figure 4 is an example of this. (see Exercise 11.)

    5.9 Exercises.
     1. The Silver Dollar. Player II chooses one of two rooms in which to hide a silver
dollar. Then, Player I, not knowing which room contains the dollar, selects one of the
rooms to search. However, the search is not always successful. In fact, if the dollar is
in room #1 and I searches there, then (by a chance move) he has only probability 1/2 of
ﬁnding it, and if the dollar is in room #2 and I searches there, then he has only probability
1/3 of ﬁnding it. Of course, if he searches the wrong room, he certainly won’t ﬁnd it. If
he does ﬁnd the coin, he keeps it; otherwise the dollar is returned to Player II. Draw the
game tree.
     2. Two Guesses for the Silver Dollar. Draw the game tree for problem 1, if
when I is unsuccessful in his ﬁrst attempt to ﬁnd the dollar, he is given a second chance
to choose a room and search for it with the same probabilities of success, independent of
his previous search. (Player II does not get to hide the dollar again.)
     3. A Statistical Game. Player I has two coins. One is fair (probability 1/2 of heads
and 1/2 of tails) and the other is biased with probability 1/3 of heads and 2/3 of tails.
Player I knows which coin is fair and which is biased. He selects one of the coins and tosses
it. The outcome of the toss is announced to II. Then II must guess whether I chose the
fair or biased coin. If II is correct there is no payoﬀ. If II is incorrect, she loses 1. Draw
the game tree.
     4. A Forgetful Player. A fair coin (probability 1/2 of heads and 1/2 of tails) is
tossed and the outcome is shown to Player I. On the basis of the outcome of this toss, I
decides whether to bet 1 or 2. Then Player II hearing the amount bet but not knowing
the outcome of the toss, must guess whether the coin was heads or tails. Finally, Player I
(or, more realistically, his partner), remembering the amount bet and II’s guess, but not
remembering the outcome of the toss, may double or pass. II wins if her guess is correct
and loses if her guess is incorrect. The absolute value of the amount won is [the amount
bet (+1 if the coin comes up heads)] (×2 if I doubled). Draw the game tree.
      5. The Kuhn Poker Model. (H. W. Kuhn (1950)) Two players are both dealt one
card at random from a deck of three cards {1, 2, 3}. (There are six possible equally likely
outcomes of this chance move.) Then Player I checks or bets. If I bets, II may call or fold.
If I checks, II may check or bet. If I checks and II bets, then I may call or fold. If both
players check, the player with the higher card wins 1. If one player bets and the other
folds, the player who bet wins 1. If one player bets and the other calls, the player with
the higher card wins 2. Draw the game tree.

                                           II – 54
     6. Basic Endgame in Poker. Generalize Basic Endgame in poker by letting the
probability of receiving a winning card be an arbitrary number p, 0 ≤ p ≤ 1, and by letting
the bet size be an arbitrary number b > 0. (In Figure 2, 1/4 is replaced by p and 3/4 is
replaced by 1 − p. Also 3 is replaced by 1 + b and −3 is replaced by −(1 + b).) Find the
value and optimal strategies. (Be careful. For p ≥ (2 + b)/(2 + 2b) there is a saddle point.
When you are ﬁnished, note that for p < (2 + b)/(2 + 2b), Player II’s optimal strategy does
not depend on p!)
    7. (a) Find the equivalent strategic form of the game with the game tree:
                                                                    N

                                                  1/3                                 2/3
                                     I                                                                   II


               a             b                c                                      d                                e
                                                                                                                               II
       3
                f            g           d              e                a       b               c                    f             g

           3             0               3              –3          –3           0                   0                0             3
    (b) Solve the game.
    8. (a). Find the equivalent strategic form of the game with the game tree:
                                                                    N

                                             1/2                                             1/2
                                 I                                                                            I


                         A                         B                                     C                            D
                    II                                                                                                    II


               a             b                c              d               a               b                    c             d

            0                2                1              –1              2               –2                   0             4
    (b). Solve the game.
     9. Coin A has probability 1/2 of heads and 1/2 of tails. Coin B has probability 1/3 of
heads and 2/3 of tails. Player I must predict “heads” or “tails”. If he predicts heads, coin
A is tossed. If he predicts tails, coin B is tossed. Player II is informed as to whether I’s
prediction was right or wrong (but she is not informed of the prediction or the coin that
was used), and then must guess whether coin A or coin B was used. If II guesses correctly
she wins 1 dollar from I. If II guesses incorrectly and I’s prediction was right, I wins 2
dollars from II. If both are wrong there is no payoﬀ.
(a) Draw the game tree.

                                                                  II – 55
(b) Find the equivalent strategic form of the game.
(c) Solve.
     10. Find the equivalent strategic form and solve the game of
(a) Exercise 1.
(b) Exercise 2.
(c) Exercise 3.
(d) Exercise 4.
     11. Suppose, in the game of Figure 4, that Player I is required to use behavioral
strategies. Show that if Player I is required to announce his behavioral strategy ﬁrst, he
can only achieve a lower value of 1/2. Whereas, if Player II is required to announce her
strategy ﬁrst, Player I has a behavioral strategy reply that achieves the upper value of 2/3
at least.
     12. (Beasley (1990), Chap. 6.) Player I draws a card at random from a full deck of
52 cards. After looking at the card, he bets either 1 or 5 that the card he drew is a face
card (king, queen or jack, probability 3/13). Then Player II either concedes or doubles. If
she concedes, she pays I the amount bet (no matter what the card was). If she doubles,
the card is shown to her, and Player I wins twice his bet if the card is a face card, and
loses twice his bet otherwise.
(a) Draw the game tree. (You may argue ﬁrst that Player I always bets 5 with a face card
and Player II always doubles if Player I bets 1.)
(b) Find the equivalent normal form.
(c) Solve.




                                          II – 56
    6. Recursive and Stochastic Games

    6.1 Matrix Games with Games as Components. We consider now matrix games
in which the outcome of a particular choice of pure strategies of the players may be that
the players have to play another game. Let us take a simple example.
    Let G1 and G2 denote 2 × 2 games with matrices
                                                                  
                             0 3                      0          1
                     G1 =               and    G2 =
                             2 –1                     4          3

and let G denote the 2 × 2 game whose matrix is represented by
                                                
                                        G1 4
                                  G=               .
                                        5 G2

The game G is played in the usual manner with Player I choosing a row and Player II
choosing a column. If the entry in the chosen row and column is a number, II pays I that
amount and the game is over. If I chooses row 1 and II chooses column 1, then the game
G1 is played. If I chooses row 2 and II chooses column 2, then G2 is played.
    We may analyze the game G by ﬁrst analyzing G1 and G2 .

                           G1 :    Optimal for I is (1/2,1/2)
                                   Optimal for II is (2/3,1/3)
                                   Val(G1 ) = 1.


                           G2 :    Optimal for I is (0,1)
                                   Optimal for II is (0,1)
                                   Val(G2 ) = 3.

If after playing the game G the players end up playing G1 , then they can expect a payoﬀ
of the value of G1 , namely 1, on the average. If the players end up playing G2 , they can
expect an average payoﬀ of the value of G2 , namely 3. Therefore, the game G can be
considered equivalent to the game with matrix
                                               
                                           1 4
                                           5 3

                                   Optimal for I is (2/5,3/5)
                           G:      Optimal for II is (1/5,4/5)
                                   Val(G)=17/5.

    This method of solving the game G may be summarized as follows. If the matrix of
a game G has other games as components, the solution of G is the solution of the game
whose matrix is obtained by replacing each game in the matrix of G by its value.

                                         II – 57
     Decomposition. This example may be written as a 4×4 matrix game. The four pure
strategies of Player I may be denoted {(1, 1), (1, 2), (2, 1), (1, 2)}, where (i, j) represents:
use row i in G, and if this results in Gi being played use row j. A similar notation may
be used for Player II. The 4 × 4 game matrix becomes
                                     0 3          4 4 
                                             2 –1            4   4       
                                G=                                       
                                              5 5             0   1
                                              5 5             4   3
We can solve this game by the methods of Chapter 4.
     Conversely, suppose we are given a game G and suppose after some rearrangement of
the rows and of the columns the matrix may be decomposed into the form
                                                     
                                         G11    G12
                                G=
                                         G21    G22
where G11 and G22 are arbitrary matrices and G12 and G21 are constant matrices. (A
constant matrix has the same numerical value for all of its entries.) Then we can solve
G by the above method, pretending that as the ﬁrst move the players choose a row and
column from the 2 × 2 decomposed matrix. See Exercise 1(b).

    6.2 Multistage Games. Of course, a game that is the component of some matrix
game may itself have other games as components, in which case one has to iterate the
above method to obtain the solution. This works if there are a ﬁnite number of stages.
Example 1. The Inspection Game. (M. Dresher (1962)) Player II must try to perform
some forbidden action in one of the next n time periods. Player I is allowed to inspect II
secretly just once in the next n time periods. If II acts while I is inspecting, II loses 1 unit
to I. If I is not inspecting when II acts, the payoﬀ is zero.
    Let Gn denote this game. We obtain the iterative equations
                                           act wait
                                                   
                            inspect         1   0
                     Gn =                                         for n = 2, 3, . . .
                            wait            0 Gn−1
with boundary condition G1 = (1). We may solve iteratively.
                            Val(G1 ) = 1
                                                         
                                                  1   0
                            Val(G2 ) = Val                = 1/2
                                                  0   1
                                                         
                                                  1    0
                            Val(G3 ) = Val                  = 1/3
                                                  0   1/2
                                      ..
                                       .
                                                                     
                                                  1       0
                            Val(Gn ) = Val                                = 1/n
                                                  0   1/(n − 1)

                                               II – 58
                                1         1
since inductively, Val(Gn ) = n−1  /(1 + n−1 ) = 1/n. The optimal strategy in the game Gn
for both players is (1/n, (n − 1)/n). For other games of this sort, see the book by Garnaev
(2000).
Example 2. Guess it! (Rufus Isaacs (1955); see also Martin Gardner (1978), p. 40.) As
a more complex example of a multistage game, consider the following game loosely related
to the game Cluedo. From a deck with m + n + 1 distinct cards, m cards are dealt to
Player I, n cards are dealt to Player II, and the remaining card, called the “target card”,
is placed face down on the table. Players knows their own cards but not those of their
opponent. The objective is to guess correctly the target card. Players alternate moves,
with Player I starting. At each move, a player may either
(1) guess at the target card, in which case the game ends, with the winner being the player
who guessed if the guess is correct, and his opponent if the guess is incorrect, or
(2) ask if the other player holds a certain card. If the other player has the card, that card
must be shown and is removed from play.
     With a deck of say 11 cards and each player receiving 5 cards, this is a nice playable
game that illustrates need for bluﬃng in a clear way. If a player asks about a card that is
in his own hand, he knows what the answer will be. We call such a play a bluﬀ . If a player
asks about a card not in his hand, we say he is honest . If a player is always honest and
the card he asks about is the target card, the other player will know that the requested
card is the target card and so will win. Thus a player must bluﬀ occasionally. Bluﬃng
may also lure the opponent into a wrong guess at the target card.
     Let us denote this game with Player I to move by Gm,n . The game Gm,0 is easy to
play. Player I can win immediately. Since his opponent has no cards, he can tell what the
target card is. Similarly, the game G0,n is easy to solve. If Player I does not make a guess
immediately, his opponent will win on the next move. However, his probability of guessing
correctly is only 1/(n + 1). Valuing 1 for a win and zero for a loss, we have
                                                               1
         Val(Gm,0 ) = 1   for all m ≥ 0,   and Val(G0,n ) =           for all n ≥ 0.     (1)
                                                              n+1

     If Player I asks for a card that Player II has, that card is removed from play and it is
Player II’s turn to move, holding n − 1 cards to her opponent’s m cards. This is exactly
the game Gn−1,m but with Player II to move. We denote this game by G n−1,m . Since the
probability that Player I wins is one minus the probability that Player II wins, we have

                      Val(G n,m ) = 1 − Val(Gn,m ) for all m and n.                      (2)

     Suppose Player I asks for a card that Player II does not have. Player II must imme-
diately decide whether or not Player I was bluﬃng. If she decides Player I was honest, she
will announce the card Player I asked for as her guess at the target card, and win if she
was right and lose if she was wrong. If she decides Player I was bluﬃng and she is wrong,
Player I will win on his turn. If she is correct, the card Player I asked for is removed from
his hand, and the game played next is G n,m−1 .

                                           II – 59
     Using such considerations, we may write the game as a multistage game in which
a stage consists of three pure strategies for Player I (honest, bluﬀ, guess) and two pure
strategies for Player II (ignor the asked card, call the bluﬀ by guessing the asked card).
The game matrix becomes, for m ≥ 1 and n ≥ 1,

                                              ignore            call
                                         n             1     n          
                         honest          n+1 G n−1,m + n+1   n+1 G n−1,m
                  Gm,n = bluﬀ               G n,m−1             1                      (3)
                                                1                1
                         guess                 n+1              n+1



     This assumes that if Player I asks honestly, he chooses among the n + 1 unknown
cards with probability 1/(n + 1) each; also if he bluﬀs, he chooses among his m cards with
probability 1/m each. That this may be done follows from the invariance considerations
of Section 3.6.
    As an example, the upper left entry of the matrix is found as follows. With probability
n/(n + 1), Player I asks a card that is in Player II’s hand and the game becomes G n−1,m ;
with probability 1/(n + 1), Player I asks the target card, Player II ignors it and Player I
wins on his next turn, i.e. gets 1. The upper right entry is similar, except this time if the
asked card is the target card, Player II guesses it and Player I gets 0.
     It is reasonable to assume that if m ≥ 1 and n ≥ 1, Player I should not guess,
because the probability of winning is too small. In fact if m ≥ 1 and n ≥ 1, there is a
strategy for Player I that dominates guessing, so that the last row of the matrix may be
deleted. This strategy is: On the ﬁrst move, ask any of the m + n + 1 cards with equal
probability 1/(m + n + 1) (i.e. use row 1 with probability (n + 1)/(m + n + 1) and row
2 with probability m/(m + n + 1)), and if Player II doesn’t guess at her turn, then guess
at the next turn. We must show that Player I wins with probability at least 1/(n + 1)
whether or not Player II guesses at her next turn. If Player II guesses, her probability of
win is exactly 1/(m + 1) whether or not the asked card is one of hers. So Player I’s win
probability is m/(m + 1) ≥ 1/2 ≥ 1/(n + 1). If Player II does not guess, then at Player
I’s next turn, Player II has at most n cards (she may have n − 1) so again Player I’s win
probability is at least 1/(n + 1).
    So the third row may be removed in (3) and the games reduce to

                                              ignore            call
                                         n             1     n          
                            honest       n+1 G n−1,m + n+1   n+1 G n−1,m
                   Gm,n =                                                                (4)
                            bluﬀ             G n,m−1             1

for m ≥ 1 and n ≥ 1. These 2 by 2 games are easily solved recursively, using the boundary
conditions (1). One can ﬁnd the value and optimal strategies of Gm,n after one ﬁnds the
values of Gn,m−1 and
                   Gn−1,m and uses (2). For example, the game G1,1 reduces to the
                    3/4 1/4
game with matrix               . The value of this game is 1/2, an optimal strategy for
                      0   1

                                             II – 60
Player I is (2/3,1/3) (i.e. bluﬀ with probability 1/3), and the optimal strategy of player
II is (1/2,1/2).
     One can also show that for all m ≥ 1 and n ≥ 1 these games do not have saddle points.
In fact, one can show more: that Val(Gm,n ) is nondecreasing in m and nonincreasing in n.
(The more cards you have in your hand, the better.) Let Vm,n = Val(Gm,n ). Then using
      a b
Val           = (ad − bc)/(a + d − b − c), we have after some algebra
      c d
                                                                                
                                  n
                                 n+1
                                     (1 − Vn−1,m ) + n+1
                                                      1       n
                                                             n+1
                                                                 (1 − Vn−1,m )
               Vm,n = Val
                                      (1 − Vn,m−1 )                 1
                          1 + n(1 − Vn−1,m )Vn,m−1
                     =                             .
                             1 + (n + 1)Vn,m−1

for m ≥ 1 and n ≥ 1. This provides a simple direct way to compute the values recursively.
    The following table gives the computed values as well as the optimal strategies for the
players for small values of m and n.


           m\n        1            2         3           4          5            6
                   0.5000        0.5000    0.4000      0.3750    0.3333     0.3125
           1       0.3333        0.2500    0.2000      0.1667    0.1429     0.1250
                   0.5000        0.5000    0.4000      0.3750    0.3333     0.3125
                   0.6667        0.5556    0.5111      0.4500    0.4225     0.3871
           2       0.5000        0.3333    0.2667      0.2143    0.1818     0.1563
                   0.3333        0.3333    0.2889      0.2500    0.2301     0.2055
                   0.6875        0.6250    0.5476      0.5126    0.4667     0.4411
           3       0.5000        0.3750    0.2857      0.2361    0.1967     0.1701
                   0.3750        0.3250    0.2762      0.2466    0.2167     0.1984
                   0.7333        0.6469    0.5966      0.5431    0.5121     0.4749
           4       0.5556        0.3947    0.3134      0.2511    0.2122     0.1806
                   0.3333        0.3092    0.2634      0.2342    0.2118     0.1899
                   0.7500        0.6809    0.6189      0.5810    0.5389     0.5112
           5       0.5714        0.4255    0.3278      0.2691    0.2229     0.1917
                   0.3333        0.2908    0.2566      0.2284    0.2062     0.1885
                   0.7714        0.6972    0.6482      0.6024    0.5704     0.5353
           6       0.6000        0.4410    0.3488      0.2808    0.2362     0.2003
                   0.3143        0.2834    0.2461      0.2236    0.2028     0.1854

Table of values and optimal strategies of Gm,n for 1 ≤ m, n ≤ 6. The top number in each
box is the value, the middle number is the probability with which Player I should bluﬀ,
and the bottom number is the probability with which Player II should call the asked card.

                                            II – 61
    6.3 Recursive Games. -Optimal Strategies. In some games with games as
components, it may happen that the original game comes up again. Such games are called
recursive. A simple example is                 
                                           G 1
                                    G=
                                            1 0
This is an inﬁnite game. If the players always play the ﬁrst row and ﬁrst column, the game
will be played forever. No matter how unlikely such a possibility is, the mathematical
deﬁnition is not complete until we say what the payoﬀ is if G is played forever. Let us say
that II pays I Q units if they both choose their ﬁrst pure strategy forever, and write
                                                       
                                               G    1
                                     G=                     , Q.
                                               1    0


     We are not automatically assured the existence of a value or the existence of optimal
strategies in inﬁnite games. However, it is easy to see that the value of G exists and is
equal to 1 no matter what the value of the number Q is. The analysis can be made as
follows.
      II can restrict her losses to at most 1 by choosing the second column. If Q ≥ 1, I can
guarantee winning at least 1 by playing his ﬁrst row forever. But if Q < 1, this won’t work.
It turns out that an optimal strategy for I, guaranteeing him at least 1, does not exist in
this case. However, for any  > 0 there is a strategy for I that guarantees him an average
gain of at least 1 − . Such a strategy, that guarantees a player an average payoﬀ within
 of the value, is called -optimal. In this case, the strategy that continually uses the
mixed strategy (1 − , ) (top row with probability 1 −  and bottom row with probability
) is -optimal for I. The use of such a strategy by I insures that he will eventually choose
row 2, so that the payoﬀ is bound to be 0 or 1 and never Q. The best that Player II can
do against this strategy is to choose column 2 immediately, hoping that I chooses row 2.
The expected payoﬀ would then be 1 · (1 − ) + 0 ·  = 1 − .
    In summary, for the game G above, the value is 1; Player II has an optimal strategy,
namely column 2; If Q ≥ 1, the ﬁrst row forever is optimal for I; if Q < 1, there is no
optimal strategy for I, but the strategy (1 − , ) forever is -optimal for I.
    Consider now the game                              
                                               G0   5
                                    G0 =                     , Q.
                                               1    0
For this game, the value depends on Q. If Q ≥ 1, the ﬁrst row forever is optimal for I,
and the value is Q if 1 ≤ Q ≤ 5, and the value is 5 if Q ≥ 5. For Q < 1, the value is 1;
however, in contrast to the game G above, I has an optimal strategy for the game G0 , for
example (1/2, 1/2) forever. II’s optimal strategy is the ﬁrst column forever if Q < 5, the
second column if Q > 5 and anything if Q = 5.
    In analogy to what we did for games with games as components, we might attempt
to ﬁnd the value v of such a game by replacing G0 by v in the matrix and solving the

                                           II – 62
equation                                                    
                                                    v    5
                                     v = Val
                                                    1    0
for v. Here there are many solutions to this equation. The set of all solutions to this
equation is the set of numbers v in the interval 1 ≤ v ≤ 5. (Check this!)
     This illustrates a general result that the equation, given by equating v to the value of
the game obtained by replacing the game in the matrix by v, always has a solution equal
to the value of the game. It may have more solutions but the value of the game is that
solution that is closest to Q. For more information on these points, consult the papers of
Everett (1957) and of Milnor and Shapley (1957).
Example 3. Let                                           
                                      G         1       0
                                    
                                  G= 1          0       G  , Q.
                                      0         G       1
Then, if the value of G is v,
                                                     
                                         v     1    0
                                                        1+v
                                v = Val 1      0    v =     .
                                                          3
                                         0     v    1

This equation has a unique solution, v = 1/2. This must be the value for all Q. The
strategy (1/3,1/3,1/3) forever is optimal for both players.
Example 4. The basic game of Dare is played as follows. Player I, the leader, and Player
II, the challenger, simultaneously “pass” or “dare”. If both pass, the payoﬀ is zero (and
the game is over). If I passes and II dares, I wins 1. If I dares and II passes, I wins 3. If
both dare, the basic game is played over with the roles of the players reversed (the leader
becomes the challenger and vice versa). If the players keep daring forever, let the payoﬀ
be zero. We might write
                                             pass dare
                                                         
                                      pass     0      1
                                G=
                                      dare     3    −GT
where −GT represents the game with the roles of the players reversed. (Its matrix is the
negative of the transpose of the matrix G.) The value of −GT is the negative of the value
of G.
     If v represents the value of G, then v ≥ 0 because of the top row. Therefore the matrix
for G with −GT replaced by −v does not have a saddle point, and we have
                                                 
                                            0 1          3
                                  v = Val           =        .
                                            3 −v       4+v

This√gives the quadratic equation, v 2 + 4v − 3 = 0. The only  √ nonnegative
                                                                       √        solution is
v = 7 − 2 = .64575 · · ·. The √optimal
                                   √   strategy for I is ((5 −  7)/3, (  7 − 2)/3) and the
optimal strategy for II is (3 − 7, 7 − 2).

                                             II – 63
Example 5. Consider the following three related games.
                                                                                   
                   G2 0                    G1 1               G1                    2
           G1 =                   G2 =                 G3 =
                    0 G3                    1 0               2                     0

and suppose the payoﬀ if the games are played forever is Q. Let us attempt to solve these
games. Let v1 = Val(G1 ), v2 = Val(G2 ), and v3 = Val(G3 ). Player I can guarantee that
v1 > 0, v2 > 0 and v3 > 0 by playing (1/2, 1/2) forever. In addition, v2 ≤ 1 and v3 ≤ 2,
which implies v1 < 1. Therefore none of the games has a saddle point and we may write

                               v2 v3                   1                   4
                       v1 =           ,       v2 =          ,     v3 =          .
                              v2 + v3                2 − v1              4 − v1

Substituting the latter two equations into the former, we obtain

                                 v1       4v1            4
                                      +        =
                               2 − v1   4 − v1   (2 − v1 )(4 − v1 )
                                           5v12 − 12v1 + 4 = 0
                                          (5v1 − 2)(v1 − 2) = 0

Since 0 < v1 < 1, this implies that v1 = 2/5. Hence

                           Game           value      opt. for I= opt for II
                            G1             2/5           (16/25, 9/25)
                            G2             5/8             (5/8, 3/8)
                            G3            10/9             (5/9, 4/9)

for all values of Q.

     6.4 Stochastic Movement Among Games. We may generalize the notion of a
recursive game by allowing the choice of the next game played to depend not only upon the
pure strategy choices of the players, but also upon chance. Let G1 , . . . , Gn be games and
let p1 , . . . , pn be probabilities that sum to one. We use the notation, p1 G1 + · · · + pn Gn , to
denote the situation where the game to be played next is chosen at random, with game Gi
being chosen with probability pi , i = 1, . . . , n. Since, for a given number z, the 1×1 matrix
(z) denotes the trivial game in which II pays I z, we may, for example, use 12 G1 + 12 (3) to
represent the situation where G1 is played if a fair coin comes up heads, and II pays I 3
otherwise.
Example 6. Let G1 and G2 be related as follows.
                  1      1
                                               2       1
                                                                   
                     G2 +   (0)  1                 G1 +    (−2)  0
            G1 = 2        2               G2 = 3         3
                        2        0                     0        −1

The game must eventually end (with probability 1). In fact, the players could not play
forever even if they wanted to. Even if they choose the ﬁrst row and ﬁrst column forever,

                                                  II – 64
eventually the game would end with a payoﬀ of 0 or −2. Thus we do not need to specify
any payoﬀ if play continues forever. To solve, let vi = Val(Gi ) for i = 1, 2. Then 0 ≤ v1 ≤ 1
and −1 ≤ v2 ≤ 0, so neither game has a saddle point. Hence,
                                  1           
                                     2 v2 1           4
                         v1 = Val                =            and
                                       2     0      6 − v2
                                  2                 
                                       v   −  2
                                                  0        2(1 − v1 )
                         v2 = Val 3      1    3        =−
                                          0      −1         5 − 2v1

Thus
                                            4             2(5 − 2v1 )
                                v1 =                  =               .
                                       6 + 2(1−v 1)        16 − 7v1
                                            5−2v1
                                                                                  √
This leads to the quadratic equation, 7v12 −20v1 +10 = 0, with solution, v1 = √
                                                                              (10− 30)/7 =
.646 · · ·. We may substitute back into the equation for v2 to ﬁnd v2 = −(2 30 − 10)/5 =
−.191 · · ·. From these values one can easily ﬁnd the optimal strategies for the two games.
Example 7. A coin with probability 2/3 of heads is tossed. Both players must guess
whether the coin will land heads or tails. If I is right and II is wrong, I wins 1 if the coin
is heads and 4 if the coin is tails and the game is over. If I is wrong and II is right, there
is no payoﬀ and the game is over. If both players are right, the game is played over. But
if both players are wrong., the game is played over with the roles of the players reversed.
If the game never ends, the payoﬀ is Q.
     If we denote this game by G, then
                             2                                              
                                G + 13 (−GT )               2
                                                              (1) + 13 (0)
                         G = 32          1                2
                                                            3
                                                                 T      1
                                 3 (0) + 3 (4)            3 (−G ) + 3 G

If we let its value be denoted by v, then
                                                 1        2
                                                                   
                                       v = Val     3v      3
                                                   4
                                                   3      − 13 v

If v ≥ 2, then there is a saddle at the upper right corner with v = 2/3. This contradiction
shows that v < 2 and there is no saddle. Therefore,

                                8 + v2
                           v=                or         v 2 − 18v + 8 = 0.
                                  18
This has a unique solution less than two,
                                                 √
                                    v =9−         73 = .456 · · ·

from which we may calculate the optimal strategy for I:
                            √     √
                       13 − 73      73 − 7
                     (          ,          ) = (.743 · · · , .256 · · ·)
                           6         6

                                                II – 65
and the optimal strategy for II:
                              √    √
                         11 − 73    73 − 5
                       (         ,         ) = (.409 · · · , .591 · · ·).
                             6       6
The value and optimal strategies are independent of Q.

     6.5 Stochastic Games. If to the features of the games of the previous section is
added the possibility of a payoﬀ at each stage until the game ends, the game is called
a Stochastic Game. This seems to be the proper level of generality for theoretical
treatment of multistage games. It is an area of intense contemporary research. See for
example the books of Filar and Vrieze (1997) and Maitra and Sudderth (1996). Stochastic
games were introduced by Shapley in (1953) in a beautiful paper that has been reprinted
in Raghavan et al. (1991), and more recently in Kuhn (1997). In this section, we present
Shapley’s main result.
     A Stochastic Game, G, consists of a ﬁnite set of positions or states, {1, 2, . . . , N}, one
of which is speciﬁed as the starting position. We denote by G(k) the game in which k is the
                                                                                    (k)
starting position. Associated with each state, k, is a matrix game, A(k) = aij . If the
stochastic game is in state k, the players simultaneously choose a row and column of A(k) ,
                                                                                          (k)
say i and j. As a result, two things happen. First, Player I wins the amount aij from
Player II. Second, with probabilities that depend on i, j and k, the game either stops, or
it moves to another state (possibly the same one). The probability that the game stops is
              (k)                                                               (k)
denoted by sij , and the probability that the next state is . is denoted by Pij (.), where

                                             N
                                      (k)            (k)
                                     sij +         Pij (.) = 1                               (5)
                                             =1

for all i, j and k.
    The payoﬀs accumulate throughout the game until it stops. To make sure the game
eventually stops, we make the assumption that all the stopping probabilities are positive.
Let s denote the smallest of these probabilities.
                                                     (k)
                                        s = min sij > 0                                      (6)
                                             i,j,k

Under this assumption, the probability is one that the game ends in a ﬁnite number of
moves. This assumption also makes the expected accumulated payoﬀ ﬁnite no matter how
the game is played, since if M denotes the largest of the absolute values of the payoﬀs,
               (k)
M = maxi,j,k |aij |, then the total expected payoﬀ to either player is bounded by

                          M + (1 − s)M + (1 − s)2 M + · · · = M/s.                           (7)

     Player I wishes to maximize the total accumulated payoﬀ and Player II to minimize
it. We use a modiﬁcation of the notation of the previous section to describe this game.

                                             II – 66
                                                     N
                                                                           
                                            (k)               (k)
                               G(k) =      aij +            Pij (.) G()       .                (8)
                                                      =1

Note that the probabilities in each component of this matrix sum to less than one. It is
                                                   (k)
understood that with the remaining probability, sij , the game ends. It should be noted
that in contrast to the previous section, a payoﬀ does not end the game. After a payoﬀ is
made, it is then decided at random whether the game ends and, if not, which state should
be played next.
     Since no upper bound can be placed on the length of the game, this is an inﬁnite
game. A strategy for a player must specify for every n how to choose an action if the game
reaches stage n. In general, theory does not guarantee a value. Moreover, the choice of
what to do at stage n may depend on what happened at all previous stages, so the space
of possible strategies is extremely complex.
     Nevertheless, in stochastic games, the value and optimal strategies for the players
exist for every starting position. Moreover, optimal strategies exist that have a very simple
form. Strategies that prescribe for a player a probability distribution over his choices that
depends only on the game, Gk , being played and not on the stage n or past history are
called stationary strategies. The following theorem states that there exist stationary
optimal strategies.

Theorem 1. (Shapley (1952)) Each game G(k) has a value, v(k). These values are the
unique solution of the set of equations,
                                       N
                                                                
                                (k)             (k)
                 v(k) = Val    aij +          Pij (.) v(.)             for k = 1, . . . , N.    (9)
                                        =1


Each player has a stationary optimal strategy that in state k uses the optimal mixed
strategy for the game with matrix
                                                         N
                                                                               
                                                (k)              (k)
                              A(k) (v) =        aij +           Pij (.) v(.)                   (10)
                                                          =1


where v represents the vector of values, v = (v(1), . . . , v(N )).

     In equations (9), we see the same principle as in the earlier sections: the value of a
game is the value of the matrix game (8) with the games replaced by their values. A proof
of this theorem may be found in Appendix 2.
    Example 8. As a very simple example, consider the following stochastic game with
one state, call it G.                                 
                               1 + (3/5)G 3 + (1/5)G
                        G=
                               1 + (4/5)G 2 + (2/5)G

                                                  II – 67
From Player II’s viewpoint, column 1 is better than column 2 in terms of immediate payoﬀ,
but column 2 is more likely to end the game sooner than column 1, so that it should entail
smaller future payoﬀs. Which column should she choose?
   Assume that all strategies are active, i.e. that the game does not have a saddle point.
We must check when we are ﬁnished to see if the assumption was correct. Then
                                                   
                     1 + (3/5)v   3 + (1/5)v
       v = Val
                     1 + (4/5)v   2 + (2/5)v
             (1 + (4/5)v)(3 + (1/5)v) − (1 + (3/5)v)(2 + (2/5)v)
         =                                                       = 1 + v − (2/25)v 2
              1 + (4/5)v + 3 + (1/5)v − 1 − (3/5)v − 2 − (2/5)v

This leads to
                                               (2/25)v 2 = 1.
                                                                                   √
Solving this quadratic equation gives two possible solutions v = ± 25/2 = ±(5/2)   √ 2.
Since the value is obviously positive, we must use the plus sign. This is v = (5/2) 2 =
3.535. If we put this value into the matrix above, it becomes
                                         √             √ 
                                 1 + (3/2)
                                        √   2 3 +  (1/2)
                                                      √ 2
                                   1+2 2         2+ 2
                                                            √            √
The optimal strategy for Player I in this matrix is √ p = √(  2 − 1, 2 −  2) = (.414, .586),
and the optimal strategy for Player II is q = (1 − 2/2, 2/2) = (.293, .707). Since these
are probability
         √      vectors, our assumption is correct and these are the optimal strategies, and
v = (5/2) 2 is the value of the stochastic game.

     6.6 Approximating the solution. For a general stochastic game with many states,
equations (9) become a rather complex system of simultaneous nonlinear equations. We
cannot hope to solve such systems in general. However, there is a simple iterative method
of approximating the solution. This is based on Shapley’s proof of Theorem 1, and is called
Shapley iteration.
    First we make a guess at the solution, call it v0 = (v0 (1), . . . , v0 (N )). Any guess will
do. We may use all zero’s as the initial guess, v0 = 0 = (0, . . . , 0). Then given vn , we
deﬁne inductively, vn+1, by the equations,
                                             N
                                                                 
                                       (k)            (k)
                vn+1(k) = Val         aij +         Pij (.) vn (.)   for k = 1, . . . , N.   (11)
                                              =1


With v0 = 0, the vn (k) have an easily understood interpretation. vn (k) is the value of the
stochastic game starting in state k if there is forced stopping if the game reaches stage n.
In particular, v1 (k) = Val(Ak ) for all k.
     The proof of Theorem 1 shows that vn (k) converges to the true value, v(k), of the
stochastic game starting at k. Two useful facts should be noted. First, the convergence

                                                     II – 68
is at an exponential rate: the maximum error goes down at least as fast as (1 − s)n .
(See Corollary 1 of Appendix 2.) Second, the maximum error at stage n + 1 is at most
the maximum change from stage n to n + 1 multiplied by (1 − s)/s. (See Corollary 2 of
Appendix 2.)
   Let us take an example of a stochastic game with two positions. The corresponding
games G(1) and G(2), are related as follows.
                                                                         
         (1)    4 + .3G(1) 0 + .4G(2)         (2)    0 + .5G(1)     −5
       G =                                   G =
                1 + .4G(2) 3 + .5G(1)                   −4       1 + .5G(2)
Using v0 = (0, 0) as the initial guess, we ﬁnd v1 = (2, −2), since
                                                                
                              4 0                            0 −5
               v1 (1) = Val           =2     v1 (2) = Val            = −2.
                              1 3                           −4 1
The next iteration gives
                                                                                           
                        4.6 −.8                                                    1 −5
         v2 (1) = Val             = 2.0174              v2 (2) = Val                              = −2.
                         .2  4                                                     −4 0
Continuing, we ﬁnd
                                v3 (1) = 2.0210   v3 (2) = −1.9983
                                v4 (1) = 2.0220   v4 (2) = −1.9977
                                v5 (1) = 2.0224   v5 (2) = −1.9974
                                v6 (1) = 2.0225   v6 (2) = −1.9974
The smallest stopping probability is .5, so the rate of convergence is at least (.5)n and the
maximum error of v6 is at most .0002.
     The optimal strategies using v6 are easily found. For game G(1), the optimal strategies
are p(1) = (.4134, .5866) for Player I and q (1) = (.5219, .4718) for Player II. For game G(2),
the optimal strategies are p(2) = (.3996, .6004) for Player I and q (2) = (.4995, .5005) for
Player II.

    6.7 Exercises
    1.(a) Solve the system of games
                                                                                                   
            0 G1                  4 3                          0       6                          0 −2
    G=                    G1 =                    G2 =                                 G3 =                   .
           G2 G3                  1 2                          5       1                          −2 0

    (b). Solve the games with matrices
                (a)                               (b)
                                                                                        
                                                         3       0       5       2   2
                        0   6     0   1
                                                         1        3       5       2   2
                      0    3     0   5                                                
                                                       4        4       1       2   2
                        5   0     2   0                                                 
                                                           1       1       1       6   3
                        1   0     4   0
                                                           1       1       1       4   7

                                              II – 69
     2. The Inspection Game. Let Gm,n denote the inspection game in which I is
allowed m inspections in the n time periods. (Thus, for 1 ≤ n ≤ m, Val(Gm,n ) = 1, while
for n ≥ 1, Val(G0,n ) = 0.) Find the iterative structure of the games and solve.
     3. A Game of Endurance. II must count from n down to zero by subtracting
either one or two at each stage. I must guess at each stage whether II is going to subtract
one or two. If I ever guesses incorrectly at any stage, the game is over and there is no
payoﬀ. Otherwise, if I guesses correctly at each stage, he wins 1 from II. Let Gn denote
this game, and use the initial conditions G0 = (1) and G1 = (1). Find the recursive
structure of the games and solve. (In the solution, you may use the notation Fn to denote
the Fibonacci sequence, 1, 1, 2, 3, 5, 8, 13,. . . , with deﬁnition F0 = 1, F1 = 1, and for
n ≥ 2, Fn = Fn−1 + Fn−2 .)
    4. Solve the sequence of games, G0 , G1 , . . ., where
                                                                                     
                                   3 2                              n+3          n+2
                      G0 =                     , . . . , Gn =                               ,...
                                   1 G1                             n+1          Gn+1

Assume that if play continues forever, the payoﬀ is zero.
     5. (a) In the game “Guess it!”, G1,n , with m = 1 and arbitrary n, show that Player
I’s optimal strategy if to bluﬀ with probability 1/(n + 2).
    (b) Show that Player II’s optimal strategy in G1,n is to call the asked card with
probability V1,n , the value of G1,n .
                                                         
                                                    G 2
    6. Recursive Games. (a) Solve the game G =              , Q.
                                                    0 1
                                       
                                 G 1 1
    (b) Solve the game G =  1 0 G  , Q.
                                  1 G 0
    7. Consider the following three related games.
                                                                                                   
                          G2       1                      G3     0                          G1      1
               G1 =                            G2 =                              G3 =
                          1        0                      0      2                          1       0

and suppose the payoﬀ is Q if the games are played forever. Solve.
    8. Consider the following three related games.
                                         
                 G1        G2          G3                                                                    
                                                               G1       0                         G2       1
           G1 = G2         G3          G1         G2 =                            G3 =
                                                                0        2                         1        0
                 G3        G1          G2

and suppose the payoﬀ is Q if the games are played forever. Solve.

                                                    II – 70
     9. There is one point to go in the match. The player that wins the last point while
serving wins the match. The server has two strategies, high and low. The receiver has
two strategies, near and far. The probability the server wins the point is given in the
accompanying table.
                                           near    far
                                   high     .8      .5
                                   low      .6      .7
If the server misses the point, the roles of the players are interchanged and the win prob-
abilities for given pure strategies are the same for the new server. Find optimal strategies
for server and receiver, and ﬁnd the probability the server wins the match.
     10. Player I tosses a coin with probability p of heads. For each k = 1, 2, . . ., if I tosses
k heads in a row he may stop and challenge II to toss the same number of heads; then II
tosses the coin and wins if and only if he tosses k heads in a row. If I tosses tails before
challenging II, then the game is repeated with the roles of the players reversed. If neither
player ever challenges, the game is a draw.
(a) Solve when p = 1/2.
(b) For arbitrary p, what are the optimal strategies of the players? Find the limit as p → 1
of the probability that I wins.
     11. Solve the following stochastic game.
                                                                         
                                                   4     1 + (1/3)G
                                          G=                                  .
                                                   0     1 + (2/3)G

     12. Consider the following stochastic game with two positions.
                                                                                                    
        (1)           2   2 + (1/2)G(2)                (2)                −4                0
      G       =                                    G         =
                      0   4 + (1/2)G(2)                              −2 + (1/2)G(1)   −4 + (1/2)G(1)

     (a) Solve the equations (9) exactly for the values v(1) and v(2).
    (b) Carry out Shapley iteration to ﬁnd v2 starting with the initial guess v0 = (0, 0),
and compare with the exact values found in (a).




                                                       II – 71
    7. Continuous Poker Models.

      As an example of a game with more than a countable number of pure strategies, we
look at some poker models in which the set of possible “hands” of the players is the interval,
[0, 1]. This presents a clear example of the use of the principle of indiﬀerence in solving
games.
     The study of two-person zero-sum poker models with independent uniform hands goes
back to Borel and von Neumann. Borel discusses a form of poker in Chapter 5, “Le jeu
de poker” of his 1938 book, Applications aux Jeux des Hazard. Von Neumann presents
his analysis of a similar form of poker in the seminal book on game theory — Theory of
Games and Economic Behavior by von Neumann and Morgenstern (1944). Chapter 19
of the book is devoted to certain mathematical models of poker, with both discrete and
continuous hands, and with both simultaneous bets and alternating bets.
    Player I is dealt a hand x ∈ [0, 1] completely at random, by which we mean that x
has a uniform distribution over the interval [0, 1]; the prior probability that x is in any
subinterval of [0, 1] is the length of the subinterval. Similarly, Player II receives a hand y
completely at random in [0, 1]. Throughout the play, both players know the value of their
own hand, but not that of the opponent.
     We assume that x and y are independent random variables; that is, learning the
value of his own hand gives a player no information about the hand of his opponent. (This
assumption would not be satisﬁed if the players were dealt distinct hands from a ﬁnite deck,
so it would be nice to weaken this assumption. Some work has been done by Sakaguchi
and Sakai (1981) in the case of a negative dependence of the hands (i.e. a high hand for
one player tends to go with a low hand of the opponent), but the positive dependent case
(when higher hands tend to occur together) is completely open.)
     There follows some rounds of betting in which the players take turns acting. After the
dealing of the hands, all actions that the players take are announced. Thus, except for the
dealing of the hands at the start of the game, this would be a game of perfect information.
Games of this sort, where, after an initial random move giving secret information to the
players, the game is played with no further introduction of hidden information, are called
games of almost perfect information. Techniques for solving such games have been studied
by Ponssard (1975) and applied to a poker model by Sorin and Ponssard (1980).
      It is convenient to study the action part of games of almost complete information by
what we call the betting tree. This is distinct from the Kuhn tree in that it neglects the
information sets that may arise from the initial distribution of hands. The examples below
illustrate this concept.

    7.1 La Relance. In his book, Borel discusses a model of poker he calls “la relance”.
The players receive independent uniform hands on the interval [0, 1], and each contributes
an ante of 1 unit into the pot. Player I acts ﬁrst either by folding and thus conceding the
pot to Player II, or by betting a prescribed amount β > 0 which he adds to the pot. If
Player I bets, then Player II acts either by folding and thus conceding the pot to Player I,

                                           II – 72
or by calling and adding β to the pot. If Player II calls the bet of Player I, the hands are
compared and the player with the higher hand wins the entire pot. That is, if x > y then
Player I wins the pot; if x < y then Player II wins the pot. We do not have to consider
the case x = y since this occurs with probability 0.
    The betting tree is
                                                    I
                                    bet                     fold
                               II
                                                              –1
                        call              fold

                      ±(β+1)              +1


    In this diagram, the plus-or-minus sign indicates that the hands are compared, and
the higher hand wins the amount β + 1.
     In the analysis, Borel ﬁnds that there is a unique optimal strategy for Player II. The
optimal strategy for Player II is of the form for some number b in the interval [0,1], to fold
if y < b and to call if y > b. The optimal value of b may be found using the principle of
indiﬀerence. Player II chooses b to make I indiﬀerent between betting and folding when I
has some hand x < b. If I bets with such an x, he, wins 2 (the pot) if II has y < b and
loses β if II has y > b. His expected winnings are in this case, 2b − β(1 − b). On the other
hand, if I folds he wins nothing. (This views the game as a constant-sum game. It views
the money already put into the pot as a sunk cost, and so the sum of the player’s winnings
is 2 whatever the outcome. This is a minor point but it is the way most poker players view
the pot.) He will be indiﬀerent between betting and folding if

                                           2b − β(1 − b) = 0

from which we conclude
                                               b = β/(2 + β).                             (1)

     Player I’s optimal strategy is not unique, but Borel ﬁnd all of them. These strategies
are of the form: if x > b, bet; and if x < b, do anything provided the total probability
that you fold is b2 . For example, I may fold with his worst hands, i.e. with x < b2 , or he
may fold with the best of his hands less than b, i.e. with b − b2 < x < b, or he may, for
all 0 < x < b, simply toss a coin with probability b of heads and fold if the coin comes up
heads.
     The value of the game may easily be computed. Suppose Player I folds with any
x < b2 and bets otherwise and suppose Player II folds with y < b. Then the payoﬀ in the
unit square has the values given in the following diagram. The values in the upper right

                                                  II – 73
corner cancel and the rest is easy to evaluate. The value is v(β) = −(β + 1)(1 − b)(b −
b2 ) + (1 − b2 )b − b2 , or, recalling b = β/(2 + β),

                                                            β2
                                      v(β) = −b2 = −              .                      (2)
                                                         (2 + β)2

Thus, the game is in favor of Player II.

                       0         b2        b                    1
                                                                    1
                                               –(β+1)
                                  –(β+1)

                                                    β+1
                   y        –1                                      b


                                               +1


                    0                                               0
                        0                  x

    We summarize in

Theorem 7.1. The value of la relance is given by (2). An optimal strategy for Player I
is to bet if x > b − b2 and to fold otherwise, where b is given in (1). An optimal strategy
for Player II is to call if y > b and to fold otherwise.

     As an example, suppose β = 2. (When the size of the bet is restricted to be no larger
than the size of the pot, it is called pot-limit poker). Then b = 1/2; an optimal strategy
for Player I is to bet if x > 1/4 and fold otherwise; the optimal strategy of Player II is to
call if y > 1/2. The game favors Player II, whose expected return is 1/4 unit each time
the game is played.
     If I bets when x < b, he knows he will lose if called, assuming II is using an optimal
strategy. Such a bet is called a bluﬀ. In la relance, it is necessary for I to bluﬀ with
probability b2 . Which of the hands below b he chooses to bluﬀ with is immaterial as far as
the value of the game is concerned. However, there is a secondary advantage to bluﬃng
(betting) with the hands just below b, that is, with the hands from b2 to b. Such a strategy
takes maximum advantage of a mistake the other player may make.
     A particular strategy σ for a player is called a mistake if there exists an optimal
strategy for the opponent when used against σ gives the opponent an expected payoﬀ
better than the value of the game. In la relance, it is a mistake for Player II to call with

                                               II – 74
some y < b or to fold with some y > b. If II calls with some y < b, then I can gain from
the mistake most proﬁtably if he bluﬀs only with his best hands below b.
     A strategy is said to be admissible for a player if no other strategy for that player
does better against one strategy of the opponent without doing worse against some other
strategy of the opponent. The rule of betting if and only if x > b2 is the unique admissible
optimal strategy for Player I.

     7.2 The von Neumann Model. The model of von Neumann diﬀers from the model
of Borel in one small but signiﬁcant respect. If Player I does not bet, he does not necessarily
lose the pot. Instead the hands are immediately compared and the higher hand wins the
pot. We say Player I checks rather than folds. This provides a better approximation to
real poker and a clearer example of the concept of “bluﬃng” in poker. The betting tree of
von Neumann’s poker is the same as Borel’s except that the −1 payoﬀ on the right branch
is changed to ±1.
                                                                I
                                             bet                         check
                                       II
                                                                           ±1
                                call               fold

                               ±(β+1)              +1


    This time it is Player I that has a unique optimal strategy. It is of the form for some
numbers a and b with a < b: bet if x < a or if x > b, and check otherwise. Although there
are many optimal strategies for Player II (and von Neumann ﬁnds all of them), one can
show that there is a unique admissible one and it has the simple form: call if y > c for
some number c. It turns out that 0 < a < c < b < 1.

     I: |      bet     |          check            |       bet       |
         0                 a                        b                 1
    II:   |          fold               |               call         |
           0                             c                            1

     The region x < a is the region in which Player I bluﬀs. It is noteworthy that Player
I must bluﬀ with his worst hands, and not with his moderate hands. It is a mistake for
Player I to do otherwise. Here is a rough explanation of this somewhat counterintuitive
feature. Hands below c may be used for bluﬃng or checking. For bluﬃng it doesn’t matter
much which hands are used; one expects to lose them if called. For checking though it
certainly matters; one is better oﬀ checking with the better hands.
     Let us apply the principle of indiﬀerence to ﬁnd the optimal values of a, b and c. This
will lead to three equations in three unknowns, known as the indiﬀerence equations (not

                                                               II – 75
to be confused with diﬀerence equations). First, Player II should be indiﬀerent between
folding and calling with a hand y = c. Again we use the gambler’s point of view of the
game as a constant sum game, where winning what is already in the pot is considered as
a bonus. If II folds, she wins zero. If she calls with y = c, she wins (β + 2) if x < a and
loses β if x > b. Equating her expected winnings gives the ﬁrst indiﬀerence equation,

                                 (β + 2)a − β(1 − b) = 0.                                (3)

     Second, Player I should be indiﬀerent between checking and betting with x = a. If
he checks with x = a, he wins 2 if y < a, and wins nothing otherwise, for an expected
return of 2a. If he bets, he wins 2 if y < c and loses β if y > c, for an expected return of
2c − β(1 − c). Equating these gives the second indiﬀerence equation,

                                    2c − β(1 − c) = 2a.                                  (4)

     Third, Player I should be indiﬀerent between checking and betting with x = b. If he
checks, he wins 2 if y < b. If he bets, he wins 2 if y < c and wins β + 2 if c < y < b, and
loses β if y > b, for an expected return of 2c + (β + 2)(b − c) − β(1 − b). This gives the
third indiﬀerence equation,

                            2c + (β + 2)(b − c) − β(1 − b) = 2b,

which reduces to
                                         2b − c = 1.                                     (5)

    The optimal values of a, b and c can be found by solving equations (4) (5) and (6) in
terms of β. The solution is

                      β                   β 2 + 4β + 2                β(β + 3)
           a=                       b=                      c=                    .      (6)
                (β + 1)(β + 4)           (β + 1)(β + 4)            (β + 1)(β + 4)
The value is
                              v(β) = a = β/((β + 1)(β + 4)).                             (7)
This game favors Player I. We summarize this in

Theorem 7.2. The value of von Neumann’s poker is given by (7). An optimal strategy
for Player I is to check if a < x < b and to bet otherwise, where a and b are given in (6).
An optimal strategy for Player II is to call if y > c and to fold otherwise, where c is given
in (6).

    For pot-limit poker where β = 2, we have a = 1/9, b = 7/9, and c = 5/9, and the
value is v(2) = 1/9.
    It is interesting to note that there is an optimal bet size for Player I. It may be found
by setting the derivative of v(β) to zero and solving the resulting equation for β. It is
β = 2. In other words, the optimal bet size is the size of the pot, exactly pot-limit poker!

                                           II – 76
     7.3 Other Models. Most of the subsequent uniform poker models treated in the
mathematical literature have been extensions of la relance. Such extensions might not be
as interesting as extensions of the von Neumann model, but they are somewhat simpler.
Bellman and Blackwell (1949) extend la relance to allow Player I to choose from two
diﬀerent sizes of bets. In Bellman and Blackwell (1950), la relance is extended to allow
Player II to raise a bet by Player I, the size of the raise being equal to the size of the bet (see
Bellman (1952).) These two papers are extended in Karlin and Restrepo (1957), the 1949
model to allow a ﬁnite number of allowable bet sizes for Player I, and the (1950) model
to allow any ﬁnite number of raises. In Goldman and Stone (1960a), the (1950) model of
Blackwell and Bellman is extended to allow the raise size to be diﬀerent from the bet size.
All of these models and a few others are summarized in Chapter 9 of Volume 2 of Karlin
(1959). An extension of la relance to allow dependent hands has been made by Sakaguchi
and Sakai (1981), and to more complex information structure by Sakaguchi (1993). In
Karlin (1959) (Exercise 9.3) and Sakaguchi (1984), the hands x and y are allowed to have
arbitrary distinct continuous distributions, not necessarily uniform.
     There are two important extensions of the von Neumann model. One, by Newman
(1959), allows Player I to choose the bet size, β(x), as an arbitrary nonnegative quantity
depending on the hand, x, he received. Betting 0 is equivalent to checking. Player I must
be careful letting the bet size depend on the hand because this gives information to Player
II. However with a judicious use of bluﬃng, Player I’s optimal strategy bets arbitrarily
large amounts. Newman’s result may be summarized as follows. An optimal strategy for
Player I is to check if 1/7 < x < 4/7, to bet β if x = 1 − (7/12)(β + 2)−2 for x > 4/7, and to
bet β if x = (7/36)(2+3β)(β +2)−3 for x < 1/7. An optimal strategy for Player II is to call
a bet of β if y > 1 − (12/7)(β + 2)−1 . The value is 1/7. Cutler (1976) solves the problem
when the bets are restricted to an interval [a,b] on the positive real line. Sakaguchi (1994)
treats the case where Player I is told Player II’s card.
     The other important extension, by Cutler (1975), is to allow an unlimited number of
raises under pot-limit rules. Cutler treats two cases. The ﬁrst is when Player I is forced
to bet on the ﬁrst round. Thereafter the players in turn may fold, call or raise indeﬁnitely
until someone folds or calls. This is solved by recursion. In the other case, Player I is
allowed to check on the ﬁrst round, but he is forbidden to raise if he checks and Player II
bets. This game is also solved completely. He says, “However, solving the problem with
check raises appears to be quite diﬃcult . . . ”.
    Some other uniform poker models that have been considered are the simultaneous
move models of Gillies, Mayberry and von Neumann (1953) and Goldman and Stone
(1960b), the high-low models with negatively dependent hands of Sakaguchi and Sakai
(1982), and the three-person poker models of Nash and Shapley (1950), Sakai (1984) and
Sakaguchi and Sakai (1992b), a stud poker model of Pruitt (1961), and the multistage
models of Sakaguchi and Sakai (1992a).

     7.4 Exercises.
    1. Suppose that when Player I checks, Player II is given a choice between checking
in which case there is no payoﬀ, and calling in which case the hands are compared and

                                             II – 77
the higher hand wins the antes. Otherwise, the game is the same as la relance or von
Neumann’s poker.
    (a) Draw the betting tree.
    (b) Find the indiﬀerence equations. (Assume that I checks if and only if a < x < b.
Also assume that if I bets, then II calls iﬀ y > c, and if Player I checks, Player II calls iﬀ
y > d, where a ≤ c ≤ b and a ≤ d ≤ b.)
    (c) Solve the equations when β = 2.
    (d)* Does the game favor Player I or Player II, or does it depend on the size of β?




                                           II – 78
    References.

V. J. Baston, F. A. Bostock and T. S. Ferguson (1989) The number hides game, Proc.
      Amer. Math. Soc. 107, 437-447.
R. Bellman (1952) On games involving bluﬃng, Rendiconti del Circolo Math. di Palermo
       Ser. 2, Vol. 1 139-156.
R. Bellman and D. Blackwell (1949) Some two-person games involving bluﬃng, Proc. Nat.
       Acad. Sci. 35, 600-605. 8/04/49.
Bellman and Blackwell (1950) On games involving bluﬃng, RAND Memo P-168, 8/01/50.
John D. Beasley (1990) The Mathematics of Games, Oxford University Press.
Émile Borel (1938) Traité du Calcul des Probabilités et ses Applications Volume IV, Fas-
       cicule 2, Applications aux jeux des hazard, Gautier-Villars, Paris.
G. S. Call and D. J. Velleman (1993) Pascal’s matrices, Amer. Math. Mo. 100, 372-376.
W. H. Cutler (1975) An optimal strategy for pot-limit poker, Amer. Math. Monthly 82,
      368-376.
W. H. Cutler (1976) End-Game Poker, Preprint.
Melvin Dresher (1961) Games of Strategy: Theory and Applications, Prentice Hall, Inc.
      N.J.
Melvin Dresher (1962) A sampling inspection problem in arms control agreements: a game-
      theoretic analysis, Memorandum RM-2972-ARPA, The RAND Corporation, Santa
      Monica, California.
R. J. Evans (1979) Silverman’s game on intervals, Amer. Math. Mo. 86, 277-281.
H. Everett (1957) Recursive games, Contrib. Theor. Games III, Ann. Math. Studies 39,
      Princeton Univ. Press, 47-78.
T. S. Ferguson (1967) Mathematical Statistics — A Decision-Theoretic Approach, Aca-
       demic Press, New York.
J. Filar and K. Vrieze (1997) Competitive Markov Decision Processes, Springer-Verlag,
       New York.
L. Friedman (1971) Optimal bluﬃng strategies in poker, Man. Sci. 17, B764-B771.
S. Gal (1974) A discrete search game, SIAM J. Appl. Math. 27, 641-648.
M. Gardner (1978) Mathematical Magic Show, Vintage Books, Random House, New York.
Andrey Garnaev (2000) Search Games and Other Applications of Game Theory, Lecture
      Notes in Economics and Mathematical Systems 485, Springer.
D. B. Gillies, J. P. Mayberry and J. von Neumann (1953) Two variants of poker, Contrib.
      Theor. Games II, Ann. Math. Studies 28, Princeton Univ. Press, 13-50.

                                          II – 79
A. J. Goldman and J. J. Stone (1960b) A symmetric continuous poker model, J. Res. Nat.
       Bur. Standards 64B 35-40.
G. A. Heuer and U. Leopold-Wildburger (1991) Balanced Silverman Games on General
      Discrete Sets, Lecture Notes in Econ. & Math. Syst., No. 365, Springer-Verlag.
R. Isaacs (1955) A card game with bluﬃng, Amer. Math. Mo. 62, 99-108.
S. M. Johnson (1964) A search game, Advances in Game Theory, Ann. Math. Studies 52,
       Princeton Univ. Press, 39-48.
Samuel Karlin (1959) Mathematical Methods and Theory in Games, Programming and
     Economics, in two vols., Reprinted 1992, Dover Publications Inc., New York.
S. Karlin and R. Restrepo (1957) Multistage poker models, Contrib. Theor. Games III,
      Ann. Math. Studies 39, Princeton Univ. Press, 337-363.
H. W. Kuhn, (1950) A simpliﬁed two-person poker, Contrib. Theor. Games I, Ann. Math.
      Studies 24, Princeton Univ. Press, 97-103.
H. W. Kuhn (1997) Classics in Game Theory, Princeton University Press.
Maitra and Sudderth (1996) Discrete Gambling and Stochastic Games, in the Series Ap-
      plications in Mathematics 32, Springer.
J. J. C. McKinsey (1952) Introduction to the Theory of Games, McGraw-Hill, New York.
N. S. Mendelsohn (1946) A psychological game, Amer. Math. Mo. 53, 86-88.
J. Milnor and L. S. Shapley (1957) On games of survival, Contrib. Theor. Games III, Ann.
       Math. Studies 39, Princeton Univ. Press, 15-45.
J. F. Nash and L. S. Shapley (1950) A simple 3-person poker game, Contrib. Theor. Games
       I, Ann. Math. Studies 24, Princeton Univ. Press, 105-116.
D. J. Newman (1959) A model for “real” poker, Oper. Res. 7, 557-560.
Guillermo Owen (1982) Game Theory, 2nd Edition, Academic Press.
J. P. Ponssard (1975) Zero-sum games with almost perfect information, Man. Sci. 21,
       794-805.
W. E. Pruitt (1961) A class of dynamic games, Nav. Res. Log. Quart. 8, 55-78.
T. E. S. Raghavan, T. S. Ferguson, T. Parthasarathy and O. J. Vrieze, eds. (1991) Stochas-
       tic Games and Related Topics, Kluwer Academic Publishers.
W. H. Ruckle (1983) sl Geometric games and their applications, Research Notes in Math-
      ematics 82, Pitman Publishing Inc.
M. Sakaguchi (1984) A note on the disadvantage for the sente in poker, Math. Japonica
      29, 483-489.
M. Sakaguchi (1993) Information structures and perfect information in some two-person
      poker, Math. Japonica 38, 743-755.

                                         II – 80
M. Sakaguchi (1994) Partial information in Newman’s real poker, Math. Japonica 39,
      167-176.
M. Sakaguchi and S. Sakai (1981) Partial information in a simpliﬁed two person poker,
      Math. Japonica 26, 695-705.
M. Sakaguchi and S. Sakai (1992a) Multistage poker with random amount of bets, Math.
      Japonica 37, 827-838.
M. Sakaguchi and S. Sakai (1992b) Solutions of some three-person stud and draw poker,
      Math. Japonica 37, 1147-1160.
S. Sakai (1984) Solutions to three-person hi-lo poker, Math. Japonica 29, 449-469.
L. S. Shapley (1953) Stochastic Games, Proc. Nat. Acad. Sci. 39, 1095-1100.
L. S. Shapley and R. N. Snow (1950) Basic solutions of discrete games, Contrib. Theor.
       Games I, Ann. Math. Studies 24, Princeton Univ. Press, 27-35.
S. Sorin and J. P. Ponssard (1980) The LP formulation of ﬁnite zero-sum games with
       incomplete information, Int. J. Game Theory 9, 99-105.
Philip D. Straﬃn (1993) Game Theory and Strategy, Mathematical Association of Amer-
       ica.
John Tukey (1949) A problem in strategy, Econometrica 17, 73.
J. von Neumann and O. Morgenstern (1944) The Theory of Games and Economic Behavior,
       Princeton University Press.
J. D. Williams, (1966) The Compleat Strategyst, 2nd Edition, McGraw-Hill, New York.




                                         II – 81
                         GAME THEORY

                             Thomas S. Ferguson


Part III. Two-Person General-Sum Games

1. Bimatrix Games — Safety Levels.
    1.1 General-Sum Strategic Form Games.
    1.2 General-Sum Extensive Form Games.
    1.3 Reducing Extensive Form to Strategic Form.
    1.4 Overview.
    1.5 Safety Levels.
    1.6 Exercises.

2. Noncooperative Games.
    2.1 Strategic Equilibria.
    2.2 Examples.
    2.3 Finding All PSE’s.
    2.4 Iterated Elimination of Strictly Dominated Strategies.
    2.5 Exercises.

3. Models of Duopoly.
    3.1 The Cournot Model of Duopoly.
    3.2 The Bertrand Model of Duopoly.
    3.3 The Stackelberg Model of Duopoly.
    3.4 Entry Deterrence.
    3.5 Exercises.

4. Cooperative Games.
    4.1 Feasible Sets of Payoﬀ Vectors.
    4.2 Cooperative Games with Transferable Utility.
    4.3 Cooperative Games with Non-Transferable Utility.
    4.4 End-Game with an All-In Player.
    4.5 Exercises.

                                     III – 1
      PART III. Two-Person General-Sum Games
    1. Bimatrix Games — Safety Levels

     The simplest case to consider beyond two-person zero-sum games are the two-person
non-zero-sum games. Examples abound in Economics: the struggle between labor and
management, the competition between two producers of a single good, the negotiations
between buyer and seller, and so on. Good reference material may be found in books
of Owen and Straﬃn already cited. The material treated in the rest of the course is
much more oriented to economic theory. For a couple of good references with emphasis
on applications in economics, consult the books, Game Theory for Applied Economists
by Robert Gibbons (1992), Princeton University Press, and Game Theory with Economic
Applications by H. Scott Bierman and Luis Fernandez (1993), Addison-Wesley Publishing
Co. Inc.

     1.1 General-Sum Strategic Form Games. Two-person general-sum games may
be deﬁned in extensive form or in strategic form. The normal or strategic form of a two-
person game is given by two sets X and Y of pure strategies of the players, and two
real-valued functions u1 (x, y) and u2(x, y) deﬁned on X × Y , representing the payoﬀs to
the two players. If I chooses x ∈ X and II chooses y ∈ Y , then I receives u1 (x, y) and II
receives u2 (x, y).
     A ﬁnite two-person game in strategic form can be represented as a matrix of ordered
pairs, sometimes called a bimatrix. The ﬁrst component of the pair represents Player I’s
payoﬀ and the second component represents Player II’s payoﬀ. The matrix has as many
rows as Player I has pure strategies and as many columns as Player II has pure strategies.
For example, the bimatrix
                                                           
                              (1, 4) (2, 0) (−1, 1) (0, 0)
                            (3, 1) (5, 3) (3, −2) (4, 4)                            (1)
                              (0, 5) (−2, 3) (4, 1) (2, 2)
represents the game in which Player I has three pure strategies, the rows, and Player II
has four pure strategies, the columns. If Player I chooses row 3 and Player II column 2,
then I receives −2 (i.e. he loses 2) and Player II receives 3.
     An alternative way of describing a ﬁnite two person game is as a pair of matrices. If
m and n representing the number of pure strategies of the two players, the game may be
represented by two m × n matrices A and B. The interpretation here is that if Player I
chooses row i and Player II chooses column j, then I wins aij and II wins bij , where aij
and bij are the elements in the ith row, jth column of A and B respectively. Note that
B represents the winnings of Player II rather than her losses as would be the case for a
zero-sum game. The game of bimatrix (1) is represented as (A, B), where
                                                                      
                     1 2 −1 0                              4 0 1 0
              A = 3 5         3 4         and     B =  1 3 −2 4                   (2)
                     0 −2 4 2                              5 3 1 2

                                          III – 2
Note that the game is zero-sum if and only if the matrix B is the negative of the matrix
A, i.e. B = −A.

     1.2 General-Sum Extensive Form Games. The extensive form of a game may
be deﬁned in the same manner as it was deﬁned in Part II. The only diﬀerence is that
since now the game is not zero-sum, the payoﬀ cannot be expressed as a single number.
We must indicate at each terminal vertex of the Kuhn tree how much is won by Player I
and how much is won by Player II. We do this by writing this payoﬀ as an ordered pair
of real numbers whose ﬁrst component indicates the amount that is paid to Player I, and
whose second component indicates the amount paid to player II. The following Kuhn tree
is an example.
                                                   N


                                 1/4                          3/4
                             I                                      II

                        c              d                  a              b

                    (–1,3)             (0,2)                             (1,0)
                                                   c            d

                                               (2,–1)           (0,0)
                                            Figure 1.1.
     If the ﬁrst move by chance happens to go down to the right, if Player II chooses a,
and if Player I happens to choose c, the payoﬀ is (2, −1), which means that Player I wins
2 and Player II loses 1. Note that the second component represents Player II’s winnings
rather than losses. In particular, a game is a zero-sum game if and only if the components
of each payoﬀ vector sum to zero.

     1.3 Reducing Extensive Form to Strategic Form. The problem of reducing
a general sum game in extensive form to one in strategic form is solved in a completely
similar manner as for the case of a zero-sum game. The only diﬀerence is that the payoﬀs
are ordered pairs. If there are random moves, the outcome is a random distribution over
these ordered pairs which is replaced by the average of the ordered pairs. This is done by
taking the corresponding average over each component of the pair separately.
    As an illustration, consider the game of Figure 1. Player I has two pure strategies,
X = {c, d}, and Player II has two pure strategies, Y = {a, b}. The corresponding strategic
form of this game is given by the 2 × 2 bimatrix,

                                             a        b
                                                            
                                 c       (5/4, 0) (2/4, 3/4)
                                                              .                       (3)
                                 d       (0, 2/4) (3/4, 2/4)

                                               III – 3
For example, the component of the ﬁrst row, ﬁrst column is computed as follows. One-
fourth of the time nature goes left, and I uses c, resulting in a payoﬀ of (−1, 3). Three-
fourths of the time nature goes right, Player II uses a and Player I uses c, giving a payoﬀ of
(2, −1). Therefore, the average payoﬀ is (1/4)(−1, 3) + (3/4)(2, −1) = (−1/4 + 6/4, 3/4 −
3/4) = (5/4, 0). The other components of the bimatrix are computed similarly.

     1.4 Overview. The analysis of two-person games is necessarily more complex for
general-sum games than for zero-sum games. When the sum of the payoﬀs is no longer
zero (or constant), maximizing one’s own payoﬀ is no longer equivalent to minimizing the
opponent’s payoﬀ. The minimax theorem does not apply to bimatrix games. One can
no longer expect to play “optimally” by simply looking at one’s own payoﬀ matrix and
guarding against the worst case. Clearly, one must take into account the opponent’s matrix
and the reasonable strategy options of the opponent. In doing so, we must remember that
the opponent is doing the same. The general-sum case requires other more subtle concepts
of solution.
     The theory is generally divided into two branches, the noncooperative theory and
the cooperative theory. In the noncooperative theory, either the players are unable to
communicate before decisions are made, or if such communication is allowed, the players
are forbidden or are otherwise unable to make a binding agreement on a joint choice of
strategy. The main noncooperative solution concept is the strategic equilibrium. This
theory is treated in the next two chapters. In the cooperative theory, it is assumed that
the players are allowed to communicate before the decisions are made. They may make
threats and counterthreats, proposals and counterproposals, and hopefully come to some
compromise. They may jointly agree to use certain strategies, and it is assumed that such
an agreement can be made binding.
    The cooperative theory itself breaks down into two branches, depending on whether
or not the players have comparable units of utility and are allowed to make monetary side
payments in units of utility as an incentive to induce certain strategy choices. The corre-
sponding solution concept is called the TU cooperative value if side payments are allowed,
and the NTU cooperative value if side payments are forbidden or otherwise unattainable.
The initials TU and NTU stand for “transferable utility” and “non-transferable utility”
respectively.

     1.5 Safety Levels. One concept from zero-sum games carries over and ﬁnds impor-
tant use in general sum games. This is the safety level, or the amount that each player
can guarantee winning on the average. In a bimatrix game with m × n matrices A and B,
Player I can guarantee winning on the average at least
                                             
                                             m
                             vI = max min          pi aij = Val(A).                       (4)
                                    p    j
                                             i=1

This is called the safety level of Player I. (This is by deﬁnition the lower value of A,
which by the minimax theorem is also the upper value or the value of A. So we may write
vI = Val(A).) Player I can achieve this payoﬀ without considering the payoﬀ matrix of

                                             III – 4
Player II. A strategy, p, that achieves the maximum in (4) is called a maxmin strategy
for Player I.
    Similarly, the safety level of Player II is

                                                
                                                n
                                vII = max min         bij qj = Val(B T ),                         (5)
                                      q    i
                                                j=1


since Player II can guarantee winning this amount on the average. Any strategy q, that
achieves the maximum in (5) is a maxmin strategy for Player II. (Note as a technical
point that vII is the value of B T, the transpose of B. It is not the value of B. This is
because Val(B) is deﬁned as the value of a game where the components represent winnings
of the row chooser and losses of the column chooser.) An example should clarify this.
    Consider the example of the following game.
                                                                                     
                (2, 0) (1, 3)                             2 1                     0   3
                                     or        A=                   and B =                   .
                (0, 1) (3, 2)                             0 3                     1   2

From the matrix A, we see that Player I’s maxmin strategy is (3/4, 1/4) and his safety
level is vI = 3/2. From the matrix B, we see the second column dominates the ﬁrst.
(Again these are II’s winnings; she is trying to maximize) Player II guarantees winning at
least vII = 2 by using her maxmin strategy, namely column 2. Note that this is the value
of B T (whereas Val(B) = 1).
    Note that if both players use their maxmin strategies, then Player I only gets vI ,
whereas Player II gets (3/4)3 + (1/4)2 = 11/4. This is pleasant for Player II. But if
Player I looks at B, he can see that II is very likely to choose column 2 because it strictly
dominates column 1. Then Player I would get 3 which is greater than vI , and Player II
would get vII = 2.
     The payoﬀ (3,2) from the second row, second column, is rather stable. If each believes
the other is going to choose the second strategy, then each would choose the second strategy.
This is one of the main viewpoints of noncooperative game theory, where such a strategy
pair is called a strategic equilibrium.
     In TU cooperative game theory, where the units used to measure I’s payoﬀ are assumed
to be the same as the units used to measure Player II’s payoﬀ, the players will jointly agree
on (3,2), because it gives the largest sum, namely 5. However, in the agreement the players
must also specify how the 5 is to be divided between the two players. The game is not
symmetric; Player II has a threat to use column 1 and Player I has no similar threat. We
will see later some of the suggestions on how to split the 5 between the players.
    The NTU theory is more complex since it is assumed that the players measure their
payoﬀs in noncomparable units. Side payments are not feasible or allowed. Any deviation
from the equilibrium (3,2) would have to be an agreed upon mixture of the other three
payoﬀs. (The only one that makes sense to mix with (3,2) is the payoﬀ (1,3)).

                                               III – 5
    1.6 Exercises.
    1. Convert the following extensive form game to strategic form.
                                                      N

                                    1/4                      3/4
                             I

                        a                 b
                                                                   II
                     (1,3)
                                    c         d              c          d

                                 (4,1)        (0,8)       (4,3)         (7,0)

    2. Find the safety levels and maxmin strategies for the players in the bimatrix games,
                       
          (1, 1) (5, 0)
    (a)                   .
          (0, 5) (4, 4)
                           
          (3, 10) (1, 5)
    (b)                       .
           (2, 0) (4, 20)
     3. Contestants I and II in a game show start the last round with winnings of $400
and $500 dollars respectively. Each must decide to pass or gamble, not knowing the choice
of the other. A player who passes keeps the money he/she started with. If Player I
gambles, he wins $200 with probability 1/2 or loses his entire $400 with probability 1/2.
If Player II gambles, she wins or loses $200 with probability 1/2 each. These outcomes
are independent. Then the contestant with the higher amount at the end wins a bonus of
$400.
(a) Draw the Kuhn tree.
(b) Put into strategic form.
(c) Find the safety levels.
     4. A Coordination Game. The following game is a coordination game. The safety
levels and maxmin strategies for the players indicate that the ﬁrst row, ﬁrst column would
be chosen giving both players 4. Yet if they could coordinate on the second row, second
column, they would receive 6 each.
                                                    
                                       (4, 4) (4, 0)
                                       (0, 4) (6, 6)
Suppose you, as row chooser, are playing this game once against a person chosen at random
from this class. Which row would you choose? or, if you prefer, which mixed strategy would
you use? Your score on this question depends on what the other students in the class do.
You must try to predict what they are going to do. Do not reveal your answer to this
question to the other students in the class.

                                              III – 6
     2. Noncooperative Games

     Two-person general-sum games and n-person games for n > 2 are more diﬃcult to
analyze and interpret than the zero-sum two-person games of Part II. The notion of “op-
timal” behavior does not extend to these more complex situations. In the noncooperative
theory, it is assumed that the players cannot overtly cooperate to attain higher payoﬀs. If
communication is allowed, no binding agreements may be formed. One possible substitute
for the notion of a “solution” of a game is found in the notion of a strategic equilibrium.

     2.1 Strategic Equilibria. A ﬁnite n-person game in strategic form is given by n
nonempty ﬁnite sets, X1 , X2 , . . . , Xn , and n real-valued functions u1, u2 , . . . , un , deﬁned
on X1 × X2 × · · · × Xn . The set Xi represents the pure strategy set of player i and
ui (x1 , x2 , . . . , xn ) represents the payoﬀ to player i when the pure strategy choices of the
players are x1 , x2 , . . . , xn , with xj ∈ Xj for j = 1, 2, . . . , n.

Deﬁnition. A vector of pure strategy choices (x1 , x2 , . . . , xn ) with xi ∈ Xi for i = 1, . . . , n
is said to be a pure strategic equilibrium, or PSE for short, if for all i = 1, 2, . . . , n, and
for all x ∈ Xi ,

             ui (x1 , . . . , xi−1 , xi , xi+1 , . . . , xn ) ≥ ui (x1 , . . . , xi−1 , x, xi+1 , . . . , xn ).   (1)

     Equation (1) says that if the players other than player i use their indicated strategies,
then the best player i can do is to use xi . Such a pure strategy choice of player i is called
a best response to the strategy choices of the other players. The notion of strategic
equilibrium may be stated: a particular selection of strategy choices of the players forms
a PSE if each player is using a best response to the strategy choices of the other players.
     Consider the following examples with two players,
                                                                                                
                                  (3, 3) (0, 0)                                  (3, 3) (4, 3)
                      (a)                                           (b)
                                  (0, 0) (5, 5)                                  (3, 4) (5, 5)

In (a), the ﬁrst row, ﬁrst column, denoted 1, 1 , is a strategic equilibrium with equilibrium
payoﬀ (3, 3). If each believes the other is going to choose the ﬁrst strategy, neither player
will want to change to the second strategy. The second row, second column, 2, 2 , is
also a strategic equilibrium. Since its equilibrium payoﬀ is (5, 5), both players prefer this
equilibrium. In (b), the ﬁrst row, ﬁrst column, 1, 1 , is still an equilibrium according to
the deﬁnition. Neither player can gain by changing strategy. On the other hand, neither
player can be hurt by changing, and if they both change, they both will be better oﬀ. So
the equilibrium 1, 1 is rather unstable.
     Example (a) is of a game in which the players receive the same payoﬀ, but are not
allowed to communicate. If they were allowed to communicate, they would choose the
joint action giving the maximum payoﬀ. Other examples of this nature occur in the class
of rendezvous games, in which two players randomly placed on a graph, each not knowing

                                                         III – 7
the position of the other, want to meet in minimum time. See the book of Alpern and Gal
(2003).
     If players in a noncooperative game are allowed to communicate and do reach some
informal agreement, it may expected to be a strategic equilibrium. Since no binding
agreements may be made, the only agreements that may be expected to occur are those that
are self-enforcing, in which no player can gain by unilaterally violating the agreement.
Each player is maximizing his return against the strategy the other player announced he
will use.
    It is useful to extend this deﬁnition to allow the players to use mixed strategies. We
denote the set of probabilities over k points by Pk :
                                                                            k
             Pk = {p = (p1 , . . . , pk ) : pi ≥ 0 for i = 1, . . . , k, and 1 pi = 1}. (2)
Let mi denote the number of pure strategy choices of player i, so that the set Xi has mi
elements. Then the set of mixed strategies of player i is just Pmi . It is denoted by Xi∗
where Xi∗ = Pmi .
    We denote the set of elements of Xi by the ﬁrst mi integers, Xi = {1, 2, . . . , mi }.
Suppose that for i = 1, 2, . . . , n, Player i uses pi = (pi1 , pi2 , . . . , pimi ) ∈ Xi∗ . Then the
average payoﬀ to player j is
                                                
                                                m1            
                                                              mn
                      gj (p1 , . . . , pn ) =           ···           p1i1 · · · pnin uj (i1 , . . . , in ).      (3)
                                                i1 =1         in =1

Then the analogous deﬁnition of equilibrium using mixed strategies is as follows.

Deﬁnition. A vector of mixed strategy choices (p1 , p2 , . . . , pn ) with pi ∈ Xi∗ for i =
1, . . . , n is said to be a strategic equilibrium, or SE for short, if for all i = 1, 2, . . . , n, and
for all p ∈ Xi∗ ,
             gi (p1 , . . . , pi−1 , pi , pi+1 , . . . , pn ) ≥ gi (p1 , . . . , pi−1 , p, pi+1 , . . . , pn ).   (4)

     Any mixed strategy pi that satisﬁes (4) for all p ∈ Xi∗ is a best response of player i
to the mixed strategies of the other players. Thus, a particular selection of mixed strategy
choices of the players forms an SE if and only if each player is using a best response to the
strategy choices of the other players. No player can gain by unilaterally changing strategy.
Note that a PSE is a special case of an SE.
     This notion of best response represents a practical way of playing a game: Make
a guess at the probabilities that you think your opponents will play their various pure
strategies, and choose a best response to this. This is an example of the famous Bayesian
approach to decision making. Of course in a game, this may be a dangerous procedure.
Your opponents may be better at this type of guessing than you.
     The ﬁrst question that arises is “Do there always exist strategic equilibria?”. This
question was resolved in 1951 by John Nash in the following theorem which generalizes
von Neumann’s minimax theorem. In honor of this achievement, strategic equilibria are
also called Nash equilibria.

                                                          III – 8
Theorem. Every ﬁnite n-person game in strategic form has at least one strategic equi-
librium.

     A proof of this theorem using the Brouwer Fixed Point Theorem is given in Appendix
3. This proof is an existence proof and gives no indication of how to go about ﬁnding
equilibria. However, in the case of bimatrix games where n = 2, the Lemke-Howson
algorithm may be used to compute strategic equilibria in a ﬁnite number of steps using a
simplex-like pivoting algorithm (see Parthasarathy and Raghavan (1971) for example).
     One of the diﬃculties of the noncooperative theory is that there are usually many
equilibria giving diﬀerent payoﬀ vectors as we shall see in the following examples. Another
diﬃculty is that even if there is a unique strategic equilibrium, it may not be considered
as a reasonable solution or a predicted outcome. In the rest of this section we restrict
attention to n = 2, the two-person case.

    2.2 Examples. Example 1. A Coordination Game. Consider the game with
bimatrix                                    
                               (3, 3) (0, 2)
                               (2, 1) (5, 5)
and corresponding payoﬀ matrices
                                                                
                             3 0                             3 2
                      A=                   and      B=
                             2 5                             1 5

The corresponding maxmin (MM) strategies are (1/2,1/2) for Player I and (3/5,2/5) for
Player II. The safety levels are (vI , vII ) = (5/2, 13/5).
     Here there are two obvious pure strategic equilibria (PSE’s) corresponding to the
payoﬀs (3,3) and (5,5). Both players prefer the second SE because it gives them both
5 instead of 3. If they could coordinate their actions, this outcome would be expected.
However, if they cannot communicate and if both players believe the other is going to
choose the ﬁrst strategy, then they are both going to choose the ﬁrst strategy and receive
the payoﬀ 3. One cannot say the outcome (3,3) is irrational. If that’s the way things
have always been, then one who tries to change things hurts oneself. This phenomenon
occurs often, usually with many players. To try to change the structure of a language or
the typewriter keyboard or the system of measurement requires a lot of people to change
simultaneously before any advantage is realized.
     There is a third less obvious equilibrium point that sometimes occurs in these games.
If each player has an equalizing strategy for the other player’s matrix, then that pair of
strategies forms an equilibrium. This is because if an opponent uses a strategy that makes
it not matter what you do, then anything you do is a best response, in particular the
equalizing strategy on the opponent’s matrix. (Recall that an equalizing strategy is one
that gives the same average payoﬀ to the opponent no matter what the opponent does.)
    Let us ﬁnd this equalizing strategic equilibrium for the above game. Note that
each player uses the matrix of his opponent. Player I has the equalizing strategy p =

                                          III – 9
(4/5, 1/5) for B, and Player II has the equalizing strategy q = (5/6, 1/6) for A. If the
players use these strategies, the average payoﬀ is (5/2, 13/5), the same as the safety levels.
      Is it possible that the average payoﬀ from a strategic equilibrium is less than the
safety level for one of the players? The answer is no. (See Exercise 1.) Therefore the
strategic equilibrium (p, q) is as poor a strategic equilibrium as you can get. Moreover,
it is extremely unstable. It is true that it does neither player any good to deviate from
his/her equilibrium strategy, but on the other hand it does not harm a player to change
to another strategy.
     In the above example, the payoﬀs for the three SE’s are all diﬀerent. The players have
the same preferences as to which of the three outcomes they would prefer. In the next
example, the players have diﬀerent preferences between the two pure strategic equilibria.
    Example 2. The Battle of the Sexes. Suppose the matrices are

                 a      b                                 a   b              a    b
                                                                               
       a       (2, 1) (0, 0)                     a        2   0           a 1     0
                                 so that   A=                     and B =             .
       b       (0, 0) (1, 2)                     b        0   1           b 0     2

The name of this game arises as a description of the game played between a husband
and wife in choosing which movie to see, a or b. They prefer diﬀerent movies, but going
together is preferable to going alone. Perhaps this should be analyzed as a cooperative
game, but we analyze it here as a noncooperative game.
    The pure strategy vectors (a, a) and (b, b) are both PSE’s but Player I prefers the ﬁrst
and Player II the second.
     First note that the safety levels are vI = vII = 2/3, the same for both players. Player
I’s MM strategy is (1/3,2/3), while Player II’s MM strategy is (2/3,1/3). There is a third
strategic equilibrium given by the equalizing strategies p = (2/3, 1/3) and q = (1/3, 2/3).
The equilibrium payoﬀ for this equilibrium point, (vI , vII ) = (2/3, 2/3), is worse for both
players than either of the other two equilibrium points.
    Example 3. The Prisoner’s Dilemma. It may happen that there is a unique SE
but that there are other outcomes that are better for both players. Consider the game
with bimatrix
                                        cooperate defect
                                                          
                            cooperate     (3, 3)    (0, 4)
                            defect        (4, 0)    (1, 1)
In this game, Player I can see that no matter which column Player II chooses, he will be
better oﬀ if he chooses row 2. For if Player I chooses row 2 rather than row 1, he wins
4 rather than 3 if Player II chooses column 1, and he wins 1 rather than 0 if she chooses
column 2. In other words, Player I’s second strategy of choosing the second row strictly
dominates the strategy of choosing the ﬁrst. On the other hand, the game is symmetric.
Player II’s second column strictly dominates her ﬁrst. However, if both players use their
dominant strategies, each player receives 1, whereas if both players use their dominated
strategies, each player receives 3.

                                           III – 10
     A game that has this feature, that both players are better oﬀ if together they use
strictly dominated strategies, is called the Prisoner’s Dilemma. The story that leads to this
bimatrix and gives the game its name is as follows. Two well-known crooks are captured
and separated into diﬀerent rooms. The district attorney knows he does not have enough
evidence to convict on the serious charge of his choice, but oﬀers each prisoner a deal. If
just one of them will turn state’s evidence (i.e. rat on his confederate), then the one who
confesses will be set free, and the other sent to jail for the maximum sentence. If both
confess, they are both sent to jail for the minimum sentence. If both exercise their right
to remain silent, then the district attorney can still convict them both on a very minor
charge. In the numerical matrix above, we take the units of measure of utility to be such
that the most disagreeable outcome (the maximum sentence) has value 0, and the next
most disagreeable outcome (minimum sentence) has value 1. Then we let being convicted
on a minor charge to have value 3, and being set free to have value 4.
     This game has abundant economic application. An example is the manufacturing by
two companies of a single good. Both companies may produce either at a high or a low
level. If both produce at a low level, the price stays high and they both receive 3. If they
both produce at the high level the price drops and they both receive 1. If one produces at
the high level while the other produces at the low level, the high producer receives 4 and
the low producer receives 0. No matter what the other producer does, each will be better
oﬀ by producing at a high level.

     2.3 Finding All PSE’s. For larger matrices, it is not diﬃcult to ﬁnd all pure strategic
equilibria. This may be done using an extension of the method of ﬁnding all saddle points
of a zero-sum game. With the game written in bimatrix form, put an asterisk after each
of Player I’s payoﬀs that is a maximum of its column. Then put an asterisk after each of
Player II’s payoﬀs that is a maximum of its row. Then any entry of the matrix at which
both I’s and II’s payoﬀs have asterisks is a PSE, and conversely.
    An example should make this clear.

                       a         b         c     d           e        f
                                         ∗      ∗              ∗
                                                                            
                A    (2, 1)   (4, 3) (7 , 2) (7 , 4)      (0, 5 ) (3, 2)
                  
                B  (4 , 0) (5∗ , 4) (1, 6∗ ) (0, 4)
                       ∗
                                                           (0, 3) (5∗ , 1) 
                C  (1, 3∗ ) (5∗ , 3∗ ) (3, 2) (4, 1)     (1∗ , 0) (4, 3∗ ) 
                D (4∗ , 3) (2, 5∗ ) (4, 0) (1, 0)        (1∗ , 5∗ ) (2, 1)
In the ﬁrst column, Player I’s maximum payoﬀ is 4, so both 4’s are given asterisks. In the
ﬁrst row, Player II’s maximum is 5, so the 5 receives an asterisk. And so on.
     When we are ﬁnished, we see two payoﬀ vectors with double asterisks. These are the
pure strategic equilibria, (C, b) and (D, e), with payoﬀs (5, 3) and (1, 5) respectively. At
all other pure strategy pairs, at least one of the players can improve his/her payoﬀ by
switching pure strategies.
   In a two-person zero-sum game, a PSE is just a saddle point. Many games have no
PSE’s, for example, zero-sum games without a saddle point. However, just as zero-sum

                                          III – 11
games of perfect information always have saddle points, non-zero-sum games of perfect
information always have at least one PSE that may be found by the method of backward
induction.

     2.4 Iterated Elimination of Strictly Dominated Strategies. Since in general-
sum games diﬀerent equilibria may have diﬀerent payoﬀ vectors, it is more important than
in zero-sum games to ﬁnd all strategic equilibria. We may remove any strictly dominated
row or column without losing any equilibrium points (Exercise 7).
      We, being rational, would not play a strictly dominated pure strategy, because there
is a (possibly mixed) strategy that guarantees us a strictly better average payoﬀ no matter
what the opponent does. Similarly, if we believe the opponent is as rational as we are, we
believe that he/she will not use a dominated strategy either. Therefore we may cancel any
dominated pure strategy of the opponent before we check if we have any dominated pure
strategies which may now be eliminated.
     This argument may be iterated. If we believe our opponent not only is rational but
also believes that we are rational, then we may eliminate our dominated pure strategies,
then eliminate our opponent’s dominated pure strategies, and then again eliminate any
of our own pure strategies that have now become dominated. The ultimate in this line
of reasoning is that if it is common knowledge that the two players are rational, then we
may iteratively remove dominated strategies as long as we like. (A statement is “common
knowledge” between two players if each knows the statement, and each knows the other
knows the statement, and each knows the other knows the other knows the statement, ad
inﬁnitum.)
     As an example of what this sort of reasoning entails, consider a game of Prisoner’s
Dilemma that is to be played sequentially 100 times. The last time this is to be played it is
clear that rational players will choose to defect. The other strategy is strictly dominated.
But now that we know what the players will do on the last game we can apply strict
domination to the next to last game to conclude the players will defect on that game too.
Similarly all the way back to the ﬁrst game. The players will each receive 1 at each game.
If they could somehow break down their belief in the other’s rationality, they might receive
3 for each game.
    Here is another game, called the Centipede Game, that illustrates this anomaly
more vividly. This is a game of perfect information with no chance moves, so it is easy to
apply the iterated removal of strictly dominated strategies. Here is the game in extensive
form.

    I       II       I       II                I       II       I       II
                                                                                  (100,100)



  (1,1)    (0,3)   (2,2)    (1,4)           (98,98) (97,100) (99,99) (98,101)


                             Figure 2.1 The Centipede Game.

                                          III – 12
     Since this is a game of perfect information, it may be solved by backward induction.
At the last move, Player II will certainly go down instead of across since that gives her
101 instead of 100. Therefore at the next to last move, Player I will go down rather than
across since that gives him 99 instead of the 98. And so forth, back to the initial position,
where Player I will go down rather than across because he receives 1 instead of 0. This is
the unique PSE because all eliminated strategies were strictly dominated.
    Empirical evidence acquired by playing similar games shows that this gives a poor
prediction of how people actually play this game. See the book of David M. Kreps (1990)
Game Theory and Economic Modeling, Oxford University Press, for a discussion.

    2.5 Exercises.
     1. Strategic Equilibria Are Individually Rational. A payoﬀ vector is said to
be individually rational if each player receives at least his safety level. Show that if (p, q)
is a strategic equilibrium for the game with matrices A and B, then pTAq ≥ vI and
pTBq ≥ vII . Thus, the payoﬀ vector for a strategic equilibrium is individually rational.
    2. Find the safety levels, the MM-strategies, and ﬁnd all SE’s and associated vector
payoﬀs of the following games in strategic form.
                                                                        
          (0, 0) (2, 4)               (1, 4) (4, 1)           (0, 0) (0, −1)
    (a)                   .     (b)                   . (c)                    .
          (2, 4) (3, 3)               (2, 2) (3, 3)           (1, 0) (−1, 3)
      3. The Game of Chicken. Two players speed head-on toward each other and a
collision is bound to occur unless one of them chickens out at the last minute. If both
chicken out, everything is okay (they both win 1). If one chickens out and the other does
not, then it is a great success for the player with iron nerves (payoﬀ = 2) and a great
disgrace for the chicken (payoﬀ = −1). If both players have iron nerves, disaster strikes
(both lose 2).
(a) Set up the bimatrix of this game.
(b) What are the safety levels, what are the MM strategies, and what is the average payoﬀ
if the players use the MM strategies?
(c) Find all three SE’s.
     4. An extensive form non-zero-sum game. A coin with probability 2/3 of heads
and 1/3 of tails is tossed and the outcome is shown to player I but not to player II. Player
I then makes a claim which may be true or false that the coin turned up heads or that the
coin turned up tails. Then, player II, hearing the claim, must guess whether the coin came
up heads or tails. Player II wins $3 if his guess is correct, and nothing otherwise. Player
I wins $3 if I has told the truth in his claim. In addition, Player I wins an additional $6 if
player II guesses heads.
(a) Draw the Kuhn tree.
(b) Put into strategic (bimatrix) form.
(c) Find all PSE’s.
    5. Find all PSE’s of the following games in strategic form.

                                           III – 13
                                                          
               (−3, −4)    ( 2, −1)     ( 0, 6)   ( 1, 1)
              2, 0)
               (           ( 2, 2)      (−3, 0)   ( 1, −2) 
     (a)                                                  .
               ( 2, −3)    (−5, 1)      (−1, −1)  ( 1, −3)
               (−4, 3)     ( 2, −5)     ( 1, 2)   (−3, 1)
                                                          
               ( 0, 0)      ( 1, −1) ( 1, 1) (−1, 0)
              (−1, 1)      ( 0, 1) ( 1, 0) ( 0, 0) 
                                                          
     (b)      ( 1, 0)      (−1, −1) ( 0, 1) (−1, 1) .
                                                          
               ( 1, −1)     (−1, 0) ( 1, −1) ( 0, 0)
               ( 1, 1)      ( 0, 0) (−1, −1) ( 0, 0)
                                                             
                                         (0, 0) (1, 2) (2, 0)
     6. Consider the bimatrix game:                             .
                                         (0, 1) (2, 0) (0, 1)
(a) Find the safety levels for the two players.
(b) Find all PSE’s.
(c) Find all SE’s given by mixed equalizing strategies.
      7. Strategic Equilibria Survive Elimination of Strictly Dominated Strate-
gies. Suppose
           m row 1 is strictly dominated (by a probability
                                                  m          mixture of rows 2 through m,
i.e. a1j < i=2 xi aij for all j where xi ≥ 0 and 2 xi = 1), and suppose (p∗ , q ∗ ) is a
strategic equilibrium. Show that p∗1 = 0.
                                                                             
                                                         (3, 4) (2, 3) (3, 2)
      8. Consider the non-cooperative bimatrix game:  (6, 1) (0, 2) (3, 3) .
                                                         (4, 6) (3, 4) (4, 5)
(a) Find the safety levels, and the maxmin strategies for both players.
(b) Find as many strategic equilibria as you can.
     9. A PSE vector of strategies in a game in extensive form is said to be a subgame
perfect equilibrium if at every vertex of the game tree, the strategy vector restricted
to the subgame beginning at that vertex is a PSE. If a game has perfect information, a
subgame perfect equilibrium may be found by the method of backward induction. Figure
2.2 is an example of a game of perfect information that has a subgame perfect PSE and
another PSE that is not subgame perfect.
(a) Solve the game for an equilibrium using backward induction.
(b) Put the game into strategic form.
(c) Find another PSE of the strategic form game, relate it to the extensive form game and
show it is not subgame perfect.
                                                   I

                                         A               B
                                                             II
                                      (0,1)
                                                   a               b

                                               (1,0)              (–10,–1)
                           Figure 2.2 An Extensive Form Game.

                                              III – 14
    10. Suppose you are playing the centipede game once as Player I against a person
chosen at random from this class. At what point would you choose the option to go down
ending the game, assuming the opponent has not already ended the game?
    Now answer the same question assuming you are Player II.
     Your score on this question depends on what the other students in the class do. Do
not reveal your answer to this question to the other students in the class.




                                       III – 15
    3. Models of Duopoly

     The examples given of the noncooperative theory of equilibrium have generally shown
the theory to have poor predictive power. This is mainly because there may be multiple
equilibria with no way to choose among them. Alternately, there may be a unique equilib-
rium with a poor outcome, even one found by iterated elimination of dominated strategies
as in the prisoner’s dilemma or the centipede game. But there are some situations, such
as the prisoner’s dilemma played once, in which strategic equilibria are quite reasonable
predictive indicators of behavior. We begin with a model of duopoly due to A. Cournot
(1838).

     3.1 The Cournot Model of Duopoly. There are two competing ﬁrms producing a
single homogeneous product. These ﬁrms must choose how much of the good to produce.
The cost of producing one unit of the good is a constant c, the same for both ﬁrms. If
a Firm i produces the quantity qi units of the good, then the cost to Firm i is cqi , for
i = 1, 2. (There is no setup cost.) The price of a unit of the good is negatively related to
the total amount produced. If Firm 1 produces q1 and Firm 2 produces q2 for a total of
Q = q1 + q2 , the price is

                                   a − Q if 0 ≤ Q ≤ a
                       P (Q) =                        = (a − Q)+                         (1)
                                   0     if Q > a

for some constant a. (This is not a realistic assumption, but the price will be approximately
linear near the equilibrium point, and that is the main thing.) We assume the ﬁrms must
choose their production quantities simultaneously; no collusion is allowed.
     The pure strategy spaces for this game are the sets X = Y = [0, ∞). Note these are
inﬁnite sets, so the game is not a ﬁnite game. It would not hurt to restrict the strategy
spaces to [0, a]; no player would like to produce more than a units because the return is
zero. The payoﬀs for the two players are the proﬁts,

                 u1 (q1 , q2 ) = q1 P (q1 + q2 ) − cq1 = q1 (a − q1 − q2 )+ − cq1        (2)
                 u2 (q1 , q2 ) = q2 P (q1 + q2 ) − cq2 = q2 (a − q1 − q2 ) − cq2
                                                                        +
                                                                                         (3)

This deﬁnes the strategic form of the game. We assume that c < a, since otherwise the
cost of production would be at least as great as any possible return.
     First, let us ﬁnd out what happens in the monopolistic case when there is only one
producer. That is, suppose q2 = 0. Then the return to Firm 1 if it produces q1 units is
u(q1 ) = q1 (a − q1 )+ − cq1 . The ﬁrm will choose q1 to maximize this quantity. Certainly
the maximum will occur for 0 < q1 < a; in this case, u(q1 ) = q1 (a − c) − q12 , and we may
ﬁnd the point at which the maximum occurs by taking a derivative with respect to q1 ,
setting it to zero and solving for q1 . The resulting equation is u (q1 ) = a − c − 2q1 = 0,
whose solution is q1 = (a − c)/2. The monopoly price is P ((a − c)/2) = (a + c)/2, and the
monopoly proﬁt is u((a − c)/2) = (a − c)2 /4.

                                            III – 16
     To ﬁnd a duopoly PSE, we look for a pure strategy for each player that is a best
response to the other’s strategy. We ﬁnd simultaneously the value of q1 that maximizes
(2) and the value of q2 that maximizes (3) by setting the partial derivatives to zero.

                              ∂
                                 u1 (q1 , q2 ) = a − 2q1 − q2 − c = 0                      (4)
                             ∂q1
                              ∂
                                 u2 (q1 , q2 ) = a − q1 − 2q2 − c = 0                      (5)
                             ∂q2

(u1 is a quadratic function of q1 with a negative coeﬃcient, so this root represents a point
of maximum.) Solving these equations simultaneously and denoting the result by q1∗ and
q2∗ , we ﬁnd
                         q1∗ = (a − c)/3    and     q2∗ = (a − c)/3.                     (6)
Therefore, (q1∗ , q2∗ ) is a PSE for this problem.
     In this SE, each ﬁrm produces less than the monopoly production, but the total
produced is greater than the monopoly production. The payoﬀ each player receives from
this SE is
                                 a−c      a−c a−c     a−c    (a − c)2
               u1 (q1∗ , q2∗ ) =     (a −    −    )−c     =           .            (7)
                                  3        3   3       3        9
Note that the total amount received by the ﬁrms in this equilibrium is (2/9)(a − c)2 .
This is less than (1/4)(a − c)2 , which is the amount that a monopoly would receive using
the monopolistic production of (a − c)/2. This means that if the ﬁrms were allowed to
cooperate, they could improve their proﬁts by agreeing to share the production and proﬁts.
Thus each would produce less, (a − c)/4 rather than (a − c)/3, and receive a greater proﬁt,
(a − c)2 /8 rather than (a − c)2 /9.
    On the other hand, the duopoly price is P (q1∗ + q2∗ ) = (a + 2c)/3, which is less than the
monopoly price, (a + c)/2 (since c < a). Thus, the consumer is better oﬀ under a duopoly
than under a monopoly.

     This PSE is in fact the unique SE. This is because it can be attained by iteratively
deleting strictly dominated strategies. To see this, consider the points at which the function
u1 has positive slope as a function of q1 ≥ 0 for ﬁxed q2 ≥ 0. The derivative (4) is positive
provided 2q1 + q2 < a − c. See Figure 3.1.

    For all values of q2 ≥ 0, the slope is negative for all q1 > (a − c)/2. Therefore, all
q1 > (a − c)/2 are strictly dominated by q1 = (a − c)/2.
    But since the game is symmetric in the players, we automatically have all q2 > (a−c)/2
are strictly dominated and may be removed. When all such points are removed from
consideration in the diagram, we see that for all remaining q2 , the slope is positive for all
q1 < (a − c)/4. Therefore, all q1 < (a − c)/4 are strictly dominated by q1 = (a − c)/4.
     Again symmetrically eliminating all q2 < (a − c)/4, we see that for all remaining q2 ,
the slope is negative for all q1 > 3(a − c)/8. Therefore, all q1 > 3(a − c)/8 are strictly

                                             III – 17
                                         Figure 3.1
                        a-c




                                                      Area of

                                                      Negative
                     (a-c)/2
                                                      slope of u1

                         q2
                                  Area of

                     (a-c)/4      Positive

                                  slope of u1




                         0
                              0     q1      (a-c)/4    3(a-c)/8     (a-c)/2

dominated by q1 = 3(a − c)/8. And so on, chipping a piece oﬀ from the lower end and
then one from the upper end of the interval of the remaining q1 not yet eliminated. If
this is continued an inﬁnite number of times, all q1 are removed by iterative elimination
of strictly dominated strategies except the point q1∗ , and by symmetry q2∗ for Player II.
    Note that the prisoner’s dilemma puts in an appearance here. Instead of using the
SE obtained by removing strictly dominated strategies, both players would be better oﬀ if
they could cooperate and produce (a − c)/4 each.

    3.2 The Bertrand Model of Duopoly. In 1883, J. Bertrand proposed a diﬀerent
model of competition between two duopolists, based on allowing the ﬁrms to set prices
rather than to ﬁx production quantities. In this model, demand is a function of price
rather than price a function of quantity available.
     First consider the case where the two goods are identical and price information to the
consumer is perfect so that the ﬁrm that sets the lower price will corner the market. We
use the same price/demand function (1) solved for demand Q in terms of price P ,
                                  a−P     if 0 ≤ P ≤ a
                      Q(P ) =                          = (a − P )+ .                    (8)
                                  0       if P > a

                                          III – 18
The actual demand is Q(P ) where P is the lowest price. The monopoly behavior under this
model is the same as for the Cournot model of the previous section. The monopolist sets
the price at (a + c)/2 and produces the quantity (a − c)/2, receiving a proﬁt of (a − c)2 /4.
    Suppose ﬁrms 1 and 2 choose prices p1 and p2 respectively. We assume that if p1 = p2
the ﬁrms share the market equally. We take the cost for a unit production again to be
c > 0 so that the proﬁt is pi − c times the amount sold. Then the payoﬀ functions are
                                    
                                     (p1 − c)(a − p1 )+   if p1 < p2
                     u1 (p1 , p2 ) = (p1 − c)(a − p1 )+ /2 if p1 = p2                 (9)
                                    
                                      0                    if p1 > p2
and                                   
                                       (p2 − c)(a − p2 )+   if p2 < p1
                       u2 (p1 , p2 ) = (p2 − c)(a − p2 )+ /2 if p2 = p1                  (10)
                                      
                                        0                    if p2 > p1
Here there is a unique PSE but it is rather disappointing. Both ﬁrms charge the production
cost, p∗1 = p∗2 = c, and receive a payoﬀ of zero. This is the safety level for each player. It
is easy to check that this is an equilibrium. No other pair of prices can be an equilibrium
because either ﬁrm could capture the entire market by slightly undercutting the other’s
price.
     This feature of capturing the entire market by undercutting the other’s price is not
entirely reasonable for a number of reasons. Usually the products of two ﬁrms are not
entirely interchangeable so some consumers may prefer one product to the other even if
it costs somewhat more. In addition there is the problem of the consumer getting the
information on the prices, and there is the feature of brand loyalty by consumers. We may
modify the model in an attempt to take this into account.
     The Bertrand Model with Diﬀerentiated Products. Again we assume that the ﬁrms
choose prices p1 and p2 and that the cost of unit production is c > 0. Since the proﬁts per
unit produced are p1 − c and p2 − c, we may assume that the prices will satisfy p1 ≥ c and
p2 ≥ c. This time we assume that the demand functions of the products of the ﬁrms for
given price selections are given by
                                 q1 (p1 , p2 ) = (a − p1 + bp2 )+
                                                                                         (11)
                                 q2 (p1 , p2 ) = (a − p2 + bp1 )+ ,
where b > 0 is a constant representing how much the product of one ﬁrm is a substitute
for the product of the other. We assume b ≤ 1 for simplicity. These demand functions
are unrealistic in that one ﬁrm could conceivably charge an arbitrarily high price and still
have a positive demand provided the other ﬁrm also charges a high enough price. However,
this function is chosen to represent a linear approximation to the “true” demand function,
appropriate near the usual price settings where the equilibrium is reached.
    Under these assumptions, the strategy sets of the ﬁrms are X = [0, ∞) and Y = [0, ∞),
and the payoﬀ functions are
                 u1(p1 , p2 ) = q1 (p1 , p2 )(p1 − c) = (a − p1 + bp2 )+ (p1 − c)
                                                                                         (12)
                 u2(p1 , p2 ) = q2 (p1 , p2 )(p2 − c) = (a − p2 + bp1 )+ (p2 − c).

                                             III – 19
To ﬁnd the equilibrium prices, we must ﬁnd points (p∗1 , p∗2 ) at which u1 is maximized in p1
and u2 is maximized in p2 simultaneously. Assuming a − p1 + bp2 > 0 and a − p2 + bp1 > 0,
we ﬁnd
                           ∂
                             u1 (p1 , p2 ) = a − 2p1 + bp2 + c = 0
                         ∂p1
                           ∂
                             u2 (p1 , p2 ) = a − 2p2 + bp1 + c = 0.
                         ∂p2
Again the functions are quadratic in the variable of diﬀerentiation with a negative coeﬃ-
cient, so the resulting roots represent maxima. Solving simultaneously and denoting the
result by p∗1 and p∗2 , we ﬁnd
                                                  a+c
                                      p∗1 = p∗2 =     .
                                                  2−b

     3.3 The Stackelberg Model of Duopoly. In the Cournot and Bertrand models
of duopoly, the players act simultaneously. H. von Stackelberg (1934) proposed a model
of duopoly in which one player, called the dominant player or leader, moves ﬁrst and the
outcome of that player’s choice is made known to the other player before the other player’s
choice is made. An example might be General Motors, at times big enough and strong
enough in U.S. history to play such a dominant role in the automobile industry. Let us
analyze the Cournot model from this perspective.
     Firm 1 chooses an amount to produce, q1 , at a cost c per unit. This amount is then
told to Firm 2 which then chooses an amount q2 to produce also at a cost of c per unit.
Then the price P per unit is determined by equation (1), P = (a − q1 − q2 )+ , and the
players receive u1 (q1 , q2 ) and u2(q1 , q2 ) of equations (2) and (3).
     Player I’s pure strategy space is X = [0, ∞). From the mathematical point of view, the
only diﬀerence between this model and the Cournot model is that Firm 2’s pure strategy
space, Y , is now a set of functions mapping q1 into q2 . However, this is now a game of
perfect information that can be solved by backward induction. Since Firm 2 moves last,
we ﬁrst ﬁnd the optimal q2 as a function of q1 . That is, we solve equation (5) for q2 . This
gives us Firm 2’s strategy as

                                   q2 (q1 ) = (a − q1 − c)/2.                           (13)

Since Firm 1 now knows that Firm 2 will choose this best response, Firm 1 now wishes to
choose q1 to maximize

                     u1 (q1 , q2 (q1 )) = q1 (a − q1 − (a − q1 − c)/2) − cq1
                                             1      a−c                                 (14)
                                        = − q12 +        q1 .
                                             2        2
This quadratic function is maximized by q1 = q1∗ = (a − c)/2. Then Firm 2’s best response
is q2∗ = q2 (q1∗ ) = (a − c)/4.
    Let us analyze this SE and compare its payoﬀ to the payoﬀ of the SE in the Cournot
duopoly. Firm 1 produces the monopoly quantity and Firm 2 produces less than the

                                            III – 20
Cournot SE. The payoﬀ to Firm 1 is u1 (q1∗ , q2∗ ) = (a − c)2 /8 and the payoﬀ to Firm 2
is u2 (q1∗ , q2∗ ) = (a − c)2 /16. Therefore Firm 1’s proﬁts are greater than that given by
the Cournot equilibrium, and Firm 2’s are less. Note that the total amount produced is
(3/4)(a − c), which is greater than (2/3)(a − c), the total amount produced under the
Cournot equilibrium. This means the Stackelberg price is lower than the Cournot price,
and the consumer is better oﬀ under the Stackelberg model.
     The information that Firm 2 received about Firm 1’s production has been harmful.
Firm 1 by announcing its production has increased its proﬁt. This shows that having more
information may make a player worse oﬀ. More precisely, being given more information
and having that fact be common knowledge may make you worse oﬀ.

     3.4 Entry Deterrence. Even if a ﬁrm acts as a monopolist in a certain market, there
may be reasons why it is in the best interests of the ﬁrm to charge less than the monopoly
price, or equivalently, produce more than the monopoly production. One of these reasons
is that the high price of the good may attract another ﬁrm to enter the market.
    We can see this in the following example. Suppose the price/demand relationship can
be expressed as
                                       17 − Q if 0 ≤ Q ≤ 17
                            P (Q) =                                                (15)
                                       0       otherwise,
where Q represents the total amount produced, and P represents the price per unit amount.
Suppose additionally, that the cost to the ﬁrm of producing q1 items is q1 + 9. That is,
there is a ﬁxed cost of 9 and a constant marginal cost of 1 per unit quantity. The proﬁt
to the ﬁrm of producing quantity q1 of the good is

                      u(q1 ) = (17 − q1 )q1 − (q1 + 9) = 16q1 − q12 − 9.                (16)

The value of q1 that maximizes the proﬁt is found by setting the derivative of u(q1 ) to zero
and solving for q1 :
                                 u (q1 ) = 16 − 2q1 = 0.
So the monopoly production is
                                           q1 = 8,
the monopoly price is 9, and the monopoly proﬁt is

                                   u(8) = 9 · 8 − 17 = 55.


     Suppose now a competing ﬁrm observes this market and thinks of producing a small
amount, q2 , to hopefully make a small proﬁt. Suppose also that this ﬁrm also has the same
cost, q2 +9, as the monopoly ﬁrm. On producing q2 the price will drop to P (8+q2 ) = 9−q2,
and the competing ﬁrm’s proﬁt will be

                        u2 = (9 − q2 )q2 − (q2 + 9) = 8q2 − q22 − 9.                    (17)

                                          III – 21
This is maximized at q2 = 4 and the proﬁt there is u2 = 7. Since this is positive, the ﬁrm
has an incentive to enter the market.
    Of course, the incumbent monopolist can foresee this possibility and can calculate the
negative eﬀect it will have on the ﬁrm’s proﬁts. If the challenger enters the market with a
production of 4, the price will drop to P (8 + 4) = 5, and the monopolist’s proﬁts will drop
from 55 to 5 · 8 − 17 = 23. It seems reasonable that some preventative measures might be
worthwhile.
    If the monopolist produces a little more than the monopoly quantity, it might deter
the challenger from entering the market. How much more should be produced? If the
monopolist produces q1 , then the challenger’s ﬁrm’s proﬁts may be computed as in (17)
by
                         u2 (q1 , q2 ) = (17 − q1 − q2 )q2 − (q2 + 9).
This is maximized at q2 = (16 − q1 )/2 for a proﬁt of

                           u2 (q1 , (16 − q1 )/2) = (16 − q1 )2 /4 − 9.

The proﬁt is zero if (16 − q1 )2 = 36, or equivalently, if q1 = 10.
     This says that if the monopolist produces 10 rather than 8, then the challenger can
see that it is not proﬁtable to enter the market.
     However, the monopolist’s proﬁts are reduced by producing 10 rather than 8. From
(16) we see that the proﬁts to the ﬁrm when q1 = 10 are

                                  u1 (10) = 7 · 10 − 19 = 51

instead of 55. This is a relatively small amount to pay as insurance against the much
bigger drop in proﬁts from 55 to 18 the monopolist would suﬀer if the challenger should
enter the market.
     The above analysis assumes that the challenger believes that, even if the challenger
should enter the market, the monopolist will continue with the monopoly production,
or the pre-entry production. This would be the case if the incumbent monopolist were
considered as the dominant player in a Stackelberg model. Note that the strategy pair,
q1 = 10 and q2 = 0, does not form a strategic equilibrium in this Stackelberg model, since
q1 = 10 is not a best response to q2 = 0. To analyze the situation properly, we should
enlarge the model to allow the game to be played sequentially several times.
    When analyzed as a Stackelberg duopoly, then at equilibrium, the dominant player
produces 8, the weaker player produces 4, and the price drops to 5. The dominant player’s
proﬁt is 23, and the weaker player’s proﬁt is 7.
    If this problem were analyzed as a Cournot duopoly, we would ﬁnd that, at equilibrium,
each ﬁrm would produce 5 13 , the price would drop to 6 13 , and each ﬁrm would realize a
proﬁt of 19 94 . This low proﬁt is another reason that the incumbent ﬁrm should make strong
eﬀorts to deter the entry of a challenger.

                                            III – 22
        3.5 Exercises.
     1.(a) Suppose in the Cournot model that the ﬁrms have diﬀerent production costs.
Let c1 and c2 be the costs of production per unit for ﬁrms 1 and 2 respectively, where both
c1 and c2 are assumed less than a/2. Find the Cournot equilibrium.
     (b) What happens, if in addition, each ﬁrm has a set up cost. Suppose Player I’s cost
of producing x is x + 2, and II’s cost of producing y is 3y + 1. Suppose also that the price
function is p(x, y) = 17 − x − y, where x and y are the amounts produced by I and II
respectively. What is the equilibrium production, and what are the players’ equilibrium
payoﬀs?

     2. Extend the Cournot model of Section 3.1 to three ﬁrms. Firm i chooses to produce
qi at cost cqi where c > 0. The selling price is P (Q) = (a − Q)+ where Q = q1 + q2 + q3 .
What is the strategic equilibrium?

     3. Modify the Bertrand model with diﬀerentiated products to allow sequential selec-
tion of the price as in Stackelberg’s variation of Cournot’s model. The dominant player
announces a price ﬁrst and then the subordinate player chooses a price. Solve by backward
induction and compare to the SE for the simultaneous selection model.

        4. Consider the Cournot duopoly model with the somewhat more realistic price func-
tion,
                                     4 Q − 5Q + 26      for 0 ≤ Q ≤ 10,
                                     1 2
                         P (Q) =
                                     1                  for Q ≥ 10.
This price function starts at 26 for Q = 0 and decreases down to 1 at Q = 10 and then
stays there. Assume that the cost, c, of producing one unit is c = 1 for both ﬁrms. No
ﬁrm would produce more than 10 because the return for selling a unit would barely pay
for the cost of producing it. Thus we may restrict the productions q1 , q2 , to the interval
[0, 10].
        (a) Find the monopoly production, and the optimal monopoly return.
    (b) Show that if q2 = 5/2, then u1 (q1 , 5/2) is maximized at q1 = 5/2. Show that this
implies that q1 = q2 = 5/2 is an equilibrium production in the duopoly.

     5. An Advertising Campaign. Two ﬁrms may compete for a given market of
total value, V , by investing a certain amount of eﬀort into the project through advertising,
securing outlets, etc. Each ﬁrm may allocate a certain amount for this purpose. If ﬁrm 1
allocates x > 0 and ﬁrm 2 allocates y > 0, then the proportion of the market that ﬁrm 1
corners is x/(x + y). The ﬁrms have diﬀering diﬃculties in allocating these resources. The
cost per unit allocation to ﬁrm i is ci , i = 1, 2. Thus the proﬁts to the two ﬁrms are
                                                    x
                                   M1 (x, y) = V ·     − c1 x
                                                   x+y
                                                    y
                                   M2 (x, y) = V ·     − c2 y
                                                   x+y

                                             III – 23
If both x and y are zero, the payoﬀs to both are zero.
     (a) Find the equilibrium allocations, and the equilibrium proﬁts to the two ﬁrms, as
a function of V , c1 and c2 .
    (b) Specialize to the case V = 1, c1 = 1, and c2 = 2.




                                         III – 24
     4. Cooperative Games

     In one version of the noncooperative theory, communication between the players is
allowed but the players are forbidden to make binding agreements. In the cooperative
theory, we allow communication of the players and also allow binding agreements to be
made. This requires some outside mechanism to enforce the agreements. In the noncoop-
erative theory, the only believable outcome would be some Nash equilibrium because such
an outcome is self-enforcing: neither player can gain by breaking the agreement. With
the extra freedom to make enforceable binding agreements in the cooperative theory, the
players can generally do much better. For example in the prisoner’s dilemma, the only
Nash equilibrium is for both players to defect. In the cooperative theory, they can reach a
binding agreement to both use the cooperate strategy, and both players will be better oﬀ.
      The cooperative theory is divided into two classes of problems depending on whether
or not there is a mechanism for transfer of utility from one player to the other. If there
such a mechanism, we may think of the transferable commodity as “money”, and assume
that both players have a linear utility for money. We may take the scaling of the respective
utilities to be such that the utility of no money is 0 and the utility of one unit of money is
1. In Section 2, we treat the transferable utility (TU) case. In Section 3, we treat the
nontransferable utility (NTU) case.

     4.1 Feasible Sets of Payoﬀ Vectors. One of the main features of cooperative games
is that the players have freedom to choose a joint strategy. This allows any probability
mixture of the payoﬀ vectors to be achieved. For example in the battle of the sexes, the
players may agree to toss a coin to decide which movie to see. (They may also do this in
the noncooperative theory, but after the coin is tossed, they are allowed to change their
minds, whereas in the cooperative theory, the coin toss is part of the agreement.) The set
of payoﬀ vectors that the players can achieve if they cooperate is called the feasible set.
The distinguishing feature of the TU case is that the players may make side payments
of utility as part of the agreement. This feature results in a distinction between the NTU
feasible set and the TU feasible set.
     When players cooperate in a bimatrix game with matrices (A, B), they may agree to
achieve a payoﬀ vector of any of the mn points, (aij , bij ) for i = 1, . . . , m and j = 1 . . . , n.
They may also agree to any probability mixture of these points. The set of all such payoﬀ
vectors is the convex hull these mn points. Without a transferable utility, this is all that
can be achieved.

Deﬁnition. The NTU feasible set is the convex hull of the mn points, (aij , bij ) for i =
1, . . . , m and j = 1 . . . , n.

     By making a side payment, the payoﬀ vector (aij , bij ) can be changed to (aij +s, bij −s).
If the number s is positive, this represents a payment from Player II to Player I. If s is
negative, the side payment is from Player I to Player II. Thus the whole line of slope −1
through the point (aij , bij ) is part of the TU feasible set. And we may take probability
mixtures of these as well.

                                              III – 25
Deﬁnition. The TU feasible set is the convex hull of the set of vectors of the form
(aij + s, bij − s) for i = 1, . . . , m and j = 1 . . . , n and for arbitrary real numbers s.

     As an example, the bimatrix game
                                                                
                                               (4, 3)   (0, 0)
                                                                                                       (1)
                                               (2, 2)   (1, 4)

has two pure strategic equilibria, upper left and lower right. This game has the NTU
feasible and TU feasible sets given in Figure 4.1.




           (1,4)                                                     (1,4)


                                 (4,3)                                                  (4,3)

                   (2,2)                                                     (2,2)




   (0,0)                                                 (0,0)


           The NTU Feasible Set                                         The TU Feasible Set
                                                Figure 4.1


    If an agreement is reached in a cooperative game, be it a TU or an NTU game, it may
be expected to be such that no player can be made better oﬀ without making at least one
other player worse oﬀ. Such an outcome is said to be Pareto optimal.

Deﬁnition. A feasible payoﬀ vector, (v1 , v2 ), is said to be Pareto optimal if the only
feasible payoﬀ vector (v1 , v2 ) such that v1 ≥ v1 and v2 ≥ v2 is the vector (v1 , v2 ) = (v1 , v2 ).

    In the example above, the Pareto feasible outcomes for the NTU game are simply
the vectors on the line segment joining the points (4, 3) and (1, 4). The Pareto optimal
outcomes for the TU game are the vectors on the line of slope −1 through the point (4, 3).
     For more general convex feasible sets in the plane, the set of Pareto optimal points is
the set of upper right boundary points.

                                                 III – 26
     4.2 Cooperative Games with Transferable Utility. In this section, we restrict
attention to the transferable utility case and assume that the players are “rational” in the
sense that, given a choice between two possible outcomes of diﬀering personal utility, each
player will select the one with the higher utility.
     The TU-Problem: In the model of the game, we assume there is a period of preplay
negotiation, during which the players meet to discuss the possibility of choosing a joint
strategy together with some possible side payment to induce cooperation. They also discuss
what will happen if they cannot come to an agreement; each may threaten to use some
unilateral strategy that is bad for the opponent.
    If they do come to an agreement, it may be assumed that the payoﬀ vector is Pareto
optimal. This is because if the players are about to agree to some feasible vector v and
there is another feasible vector, v  , that is better for one of the players without making
any other player worse oﬀ, that player may propose changing to the vector v  , oﬀering to
transfer some of his gain in utility to the other players. The other players, being rational
would agree to this proposal.
     In the discussion, both players may make some threat of what strategy they will take
if an agreement is not reached. However, a threat to be believable must not hurt the player
who makes it to a greater degree than the opponent. Such a threat would not be credible.
For example, consider the following bimatrix game.
                                                           
                                         (5, 3)   (0, −4)
                                                                                           (2)
                                         (0, 0)    (3, 6)

If the players come to an agreement, it will be to use the lower right corner because it has
the greatest total payoﬀ, namely 9. Player II may argue that she should receive at least
half the sum, 4 12 . She may even feel generous in “giving up” as a side payment some of
the 6 she would be winning. However, Player I may threaten to use row 1 unless he is
given at least 5. That threat is very credible since if Player I uses row 1, Player II’s cannot
make a counter-threat to use column 2 because it would hurt her more than Player I. The
counter-threat would not be credible.
    In this model of the preplay negotiation, the threats and counter-threats may be made
and remade until time to make a decision. Ultimately the players announce what threats
they will carry out if agreement is not reached. It is assumed that if agreement is not
reached, the players will leave the negotiation table and carry out their threats. However,
being rational players, they will certainly reach agreement, since this gives a higher utility.
The threats are only a formal method of arriving at a reasonable amount for the side
payment, if any, from one player to the other.
     The TU problem then is to choose the threats and the proposed side payment judi-
ciously. The players use threats to inﬂuence the choice of the ﬁnal payoﬀ vector. The
problem is how do the threats inﬂuence the ﬁnal payoﬀ vector, and how should the play-
ers choose their threat strategies? For two-person TU-games, there is a very convincing
answer.

                                            III – 27
     The TU Solution: If the players come to an agreement, then rationality implies
that they will agree to play to achieve the largest possible total payoﬀ, call it σ,
                                  σ = max max(aij + bij )                                 (3)
                                         i      j

as the payoﬀ to be divided between them. That is they will jointly agree to use some row
i0 and column j0 such that ai0 j0 + bi0 j0 = σ. Such a joint choice i0 , j0 , is called their
cooperative strategy. But they must also agree on some ﬁnal payoﬀ vector (x∗ , y ∗ ),
such that x∗ + y ∗ = σ, as the appropriate division of the total payoﬀ. Such a division may
then require a side payment from one player to the other. If x∗ > ai0 j0 , then Player I
would receive a side payment of the diﬀerence, x∗ − ai0 j0 , from Player II. If x∗ < ai0 j0 ,
then Player II would receive a side payment of the diﬀerence, ai0 j0 − x∗ , from Player I.
     Suppose now that the players have selected their threat strategies, say p for Player
I and q for Player II. Then if agreement is not reached, Player I receives pTAq and Player
II receives pTBq. The resulting payoﬀ vector,
                         D = D(p, q) = (pTAq, pTBq) = (D1 , D2 )                          (4)
is in the NTU feasible set and is called the disagreement point or threat point. Once
the disagreement point is determined, the players must agree on the point (x, y) on the line
x + y = σ to be used as the cooperative solution. Player I will accept no less than D1 and
Player II will accept no less than D2 since these can be achieved if no agreement is reached.
But once the disagreement point has been determined, the game becomes symmetric. The
players are arguing about which point on the line interval from (D1 , σ−D1 ) to (σ−D2 , D2 )
to select as the cooperative solution. No other considerations with respect to the matrices
A and B play any further role. Therefore, the midpoint of the interval, namely
                                                                     
                                          σ − D2 + D1 σ − D1 + D2
                       ϕ = (ϕ1 , ϕ2 ) =                ,                                  (5)
                                               2              2
is the natural compromise. Both players suﬀer equally if the agreement is broken. The
point, ϕ, may be determined by drawing the line from D with 45◦ slope until it hits the
line x + y = σ as in Figure 4.2.



                                      (D1,σ − D1)


                                               ϕ


                                                        (σ − D2,D2)
                                  D




                                          Figure 4.2

                                             III – 28
    We see from (5) what criterion the players should use to select the threat point. Player
I wants to maximize D1 − D2 and Player II wants to minimize it. This is in fact a zero-sum
game with matrix A − B:

                          D1 − D2 = pTAq − pTBq = pT(A − B)q.                                 (6)


    Let p∗ and q ∗ denote optimal strategies of the game A − B for Players I and II
respectively, and let δ denote the value,

                              δ = Val(A − B) = p∗ (A − B)q ∗ .
                                                             T
                                                                                              (7)

If Player I uses p∗ as his threat, then the best Player II can do is to use q ∗ , and con-
versely. When these strategies are used, the disagreement point becomes D ∗ = (D1∗ , D2∗ ) =
D(p∗ , q ∗ ). Since δ = p∗ TAq ∗ − p∗ TBq ∗ = D1∗ − D2∗ , we have as the TU solution:
                                                                          
                                ∗                           σ+δ σ−δ
                              ϕ     = (ϕ∗1 , ϕ∗2 ) =           ,               .              (8)
                                                             2   2

      Suppose the players have decided on i0 , j0 as the cooperative strategy to be used,
where ai0 j0 +bi0 j0 = σ. To achieve the payoﬀ (8), this requires a side payment of (σ+δ)/2−
ai0 j0 from Player II to Player I. If this quantity is negative, the payment of ai0 j0 − (σ + δ)/2
goes from Player I to Player II.
     Examples. 1. Consider the TU game with bimatrix
                                                                  
                                       (0, 0)    (6, 2) (−1, 2)
                                                                           .
                                      (4, −1)    (3, 6) (5, 5)

This is the matrix upon which Figure 4.2 is based. But we shall see that the optimal
disagreement point is in a somewhat diﬀerent place than the one in the ﬁgure.
     The maximum value of aij + bij occurs in the second row third column, so the coop-
erative strategy is 2, 3 , giving a total payoﬀ of σ = 10. If they come to an agreement,
Player I will select the second row, Player II will select the third column and both players
will receive a payoﬀ of 5. They must still decide on a side payment, if any.
     They consider the zero-sum game with matrix,
                                                                  
                                                    0       4 −3
                                    A−B =                              .
                                                    5       −3 0

The ﬁrst column is strictly dominated by the last. The threat strategies are then easily
determined to be
                                    p∗ = (.3, .7)T
                                           q ∗ = (0, .3, .7)T

                                                III – 29
                                                  
                                          4   −3
The value of this game is: δ = Val                     = −9/10. Therefore from (8), the TU-value
                                         −3   0
is
                        ϕ∗ = ((10 − .9)/2, (10 + .9)/2) = (4.55, 5.45).
To arrive at this payoﬀ from the agreed payoﬀ vector, (5, 5), requires a side payment of
0.45 from Player I to Player II.
     We may also compute the disagreement point, D ∗ = (D1∗ , D2∗ ).

                 D1∗ = p∗ TAq ∗ = .3(6 · .3 − .7) + .7(3 · .3 + 5 · .7) = 3.41
                 D2∗ = p∗ TBq ∗ = .3(2 · .3 + 2 · .7) + .7(6 · .3 + 5 · .7) = 4.31

It is easy to see that the line from D ∗ to ϕ∗ is 45◦ , because D2∗ − D1∗ = ϕ∗2 − ϕ∗1 = 0.9.
     2. It is worthwhile to note that there may be more than one possible cooperative
strategy yielding σ as the sum of the payoﬀs. The side payment depends on which one
is used. Also there may be more than one possible disagreement point because there
may be more than one pair of optimal strategies for the game A − B. However, all such
disagreement points must be on the same 45◦ line, since the point ϕ depends on the
disagreement point only through the value, δ, and all disagreement points have the same
TU-value.
     Here is an example containing both possibilities.
                                                      
                                  (1, 5) (2, 2) (0, 1)
                                 (4, 2) (1, 0) (2, 1) 
                                  (5, 0) (2, 3) (0, 0)

There are two cooperative strategies giving total payoﬀ σ = 6, namely 1, 1 and 2, 1 .
The matrix A − B is                               
                                     −4 0 −1
                                    2     1     1 
                                      5 −1 0
which has a saddle-point at 2, 3 . Thus D = (2, 1) is the disagreement point, and the
value is δ = 1. Thus the TU cooperative value is ϕ = (7/2, 5/2).
    However, there is another saddle-point at 2, 2 that, of course, has the same value
δ = 1. But this time the disagreement point is ϕ = (1, 0). All such disagreement points
must be on the 45◦ line through ϕ.
     If 2, 1 is used as the cooperative strategy, the resulting vector payoﬀ of (4, 2) requires
that Player I pay 1/2 to Player I. If 1, 1 is used as the cooperative strategy, the resulting
vector payoﬀ of (5, 1) requires that Player I pay 3/2 to Player II.

     4.3 Cooperative Games with Non-Transferable Utility.
    We now consider games in which side payments are forbidden. It may be assumed
that the utility scales of the players are measured in noncomparable units. The players

                                              III – 30
may argue, threaten, and come to a binding agreement as before, but there is no monetary
unit with which the players can agree to make side payments. The players may barter
goods that they own, but this must be done within the game and reﬂected in the bimatrix
of the game.
     We approach NTU games through the Nash Bargaining Model. This model is
based on two elements assumed to be given and known to the players. One element is a
compact (i.e. bounded and closed), convex set, S, in the plane. One is to think of S as the
set of vector payoﬀs achievable by the players if they agree to cooperate. It is the analogue
of the NTU-feasible set, although it is somewhat more general in that it does not have to
be a polyhedral set. It could be a circle or an ellipse, for example. We refer to S as the
NTU-feasible set.
     The second element of the Nash Bargaining Model is a point, (u∗ , v ∗ ) ∈ S, called
the threat point or status-quo point. Nash viewed the bargaining model as a game
between two players who come to a market to barter goods. For him, the players have the
option of not entering into any trade agreement at all, and it was natural for him to take
the status-quo point as (u∗ , v ∗ ) = (0, 0) ∈ S. The subsequent theory requires that (u∗ , v ∗ )
be an arbitrary point of S.
     Given an NTU-feasible set, S, and a threat point, (u∗ , v ∗ ) ∈ S, the problem is to decide
on a feasible outcome vector for this game that will somehow reﬂect the value of the game
to the players. That is, we want to ﬁnd a point, (ū, v̄) = f (S, u∗ , v ∗ ), to be considered a
“fair and reasonable outcome” or “solution” of the game for an arbitrary compact convex
set S and point (u∗ , v ∗ ) ∈ S. In the approach of Nash, “fair and reasonable” is deﬁned by
a few axioms. Then it is shown that these axioms lead to a unique solution, f (S, u∗ , v ∗ ).
Here are the axioms.
    Nash Axioms for f (S, u∗ , v ∗ ) = (ū, v̄).
    (1) Feasibility. (ū, v̄) ∈ S.
    (2) Pareto Optimality. There is no point (u, v) ∈ S such that u ≥ ū and v ≥ v̄
except (ū, v̄) itself.
    (3) Symmetry. If S is symmetric about the line u = v, and if u∗ = v ∗ , then ū = v̄.
    (4) Independence of irrelevant alternatives. If T is a closed convex subset of S,
and if (u∗ , v ∗ ) ∈ T and (ū, v̄) ∈ T , then f (T, u∗ , v ∗ ) = (ū, v̄).
     (5) Invariance under change of location and scale. If T = {(u , v  ) : u =
α1 u + β1 , v  = α2 v + β2 for (u, v) ∈ S}, where α1 > 0, α2 > 0, β1 , and β2 are given
numbers, then
                      f (T, α1 u∗ + β1 , α2 v ∗ + β2 ) = (α1 ū + β1 , α2 v̄ + β2 ).

    Analysis of the Axioms. It is useful to review the axioms to see which might be
weakened or changed to allow other “solutions”.
    The ﬁrst axiom is incontrovertible. The agreed outcome must be feasible.

                                            III – 31
       The second axiom reﬂects the rationality of the players. If the players work together
and reach agreement, they would not accept (u, v) as the outcome if they could also achieve
(û, v̂) with û > u and v̂ > v. However, the second axiom is slightly stronger than this. It
says that they would not accept (u, v) if they could achieve (û, v̂) with û ≥ u and v̂ > v
(or û > u and v̂ ≥ v). This plays no role in the main case of the theorem (when there
is a (u, v) ∈ S such that u > u∗ and v > v ∗ ). But suppose S consists of the line from
(0,0) to (0,1), inclusive, and (u∗ , v ∗ ) = (0, 0). Player 1 can achieve a payoﬀ of 0 without
entering into any agreement. So to agree to the point (0,1) requires a weak kind of altruistic
behavior on his part. It is true that this agreement would not hurt him, but still this weak
altruism does not follow from the assumed rationality of the players.
    The third axiom is a fairness axiom. If the game is symmetric in the players, there is
nothing in the game itself to distinguish the players so the outcome should be symmetric.
     The fourth axiom is perhaps the most controversial. It says that if two players agree
that (ū, v̄) is a fair and reasonable solution when S is the feasible set, then points in S far
away from (ū, v̄) and (u∗ , v ∗ ) are irrelevant. If S is reduced to a subset T ⊂ S, then as long
as T still contains (ū, v̄) and (u∗ , v ∗ ), the players would still agree on (ū, v̄). But let S be
the triangle with vertices (0,0), (0,4) and (2,0), and let the threat point be (0,0). Suppose
the players agree on (1,2) as the outcome. Would they still agree on (1,2) if the feasible
set were T , the quadralateral with vertices (0,0), (0,2), (1,2) and (2,0)? Conversely, if they
agree on (1,2) for T , would they agree on (1,2) for S? The extra points in S cannot be used
as threats because it is assumed that all threats have been accounted for in the assumed
threat point. These extra points then represent unattainable hopes or ideals, which player
2 admits by agreeing to the outcome (1,2).
     The ﬁfth axiom, just reﬂects the understanding that the utilities of the players are
separately determined only up to change of location and scale. Thus, if one of the players
decides to change the location and scale of his utility, this changes the numbers in the
bimatrix, but does not change the game. The agreed solution should undergo the same
change.

Theorem. There exists a unique function f satisfying the Nash axioms. Moreover, if
there exists a point (u, v) ∈ S such that u > u∗ and v > v ∗ , then f (S, u∗ , v ∗ ) is that point
of S that maximizes (u − u∗ )(v − v ∗ ) among points of S such that u ≥ u∗ and v ≥ v ∗ .

    Below we sketch the proof in the interesting case where there exists a point (u, v) ∈ S
such that u > u∗ and v > v ∗ . The uninteresting case is left to the exercises.
     First we check that the point (ū, v̄) in S + = {(u, v) ∈ S : u ≥ u∗ , v ≥ v ∗ } indeed
satisﬁes the Nash axioms. The ﬁrst 4 axioms are very easy to verify. To check the ﬁfth
axiom, note that
     if (u − u∗ )(v − v ∗ ) is maximized over S + at (ū, v̄),
     then (α1 u − α1 u∗ )(α2 v − α2 v ∗ ) is maximized over S + at (ū, v̄),
     so (α1 u + β1 − α1 u∗ − β1 )(α2 v + β2 − α2 v ∗ − β2 ) is maximized over S + at (ū, v̄),
     hence (u − α1 u∗ − β1 )(v  − α2 v ∗ − β2 ) is maximized over T + at (α1 ū + β1 , α2 v̄ + β2 ),
where T + = {(u , v  ) ∈ S + : u = α1 u + β1 , v  = α2 v + β2 }.

                                              III – 32
     To see that the axioms deﬁne the point uniquely, we ﬁnd what (ū, v̄) must be for certain
special sets S, and extend step by step to all closed bounded convex sets. First note that
if S is symmetric about the line u = v and (0, 0) ∈ S, then axioms (1), (2), and (3) imply
that f (S, 0, 0) is that point (z, z) ∈ S farthest up the line u = v. Axiom 4 then implies
that if T is any closed bounded convex subset of the half plane Hz = {(u, v) : u + v ≤ 2z}
where z > 0, and if (z, z) ∈ T and (0, 0) ∈ T , then f (T, 0, 0) = (z, z), since such a set T is
a subset of a symmetric set with the same properties.
     Now for an arbitrary closed convex set S and (u∗ , v ∗ ) ∈ S, let (û, v̂) be the point of
                                                                                       α1 u∗ + β1 = 0
S + that maximizes (u − u∗ )(v − v ∗ ). Deﬁne α1 , β1 , α2 , and β2 so that
                                                                                       α1 û + β1 = 1
        α2 v ∗ + β2 = 0
and                       , and let T be as in axiom 5. According to the invariance of (û, v̂)
        α2 v̂ + β2 = 1
under change of location and scale, the point (1, 1) = (α1 û + β1 , α2 v̂ + β2 ) maximizes
u · v over T ∗ . Since the slope of the curve uv = 1 at the point (1, 1) is −1, the set T ,
being convex, is a subset of H1 , and so by the last sentence of the previous paragraph,
f (T, 0, 0) = (1, 1). By axiom 5, f (T, 0, 0) = (α1 ū+β1 , α2 v̄+β2 ) where f (S, u∗ , v ∗ ) = (ū, v̄).
Since (α1 ū + β1 , α2 v̄ + β2 ) = (1, 1) = (α1 û + β1 , α2 v̂ + β2 ), we have ū = û and v̄ = v̂, so
that (û, v̂) = f (S, u∗ , v ∗ ).
     Here is a geometric interpretation. Consider the curves (hyperbolas) (u−u∗ )(v−v ∗ ) =
c for a constant c. For large enough c, this curve will not intersect S. Now bring c down
until the curve just osculates S. The NTU-solution is the point of osculation.


                                                            (u-u*)(v-v*)=c




                                                                (u,v)            c=4
                                                                                 c=2
                                         S                                       c=1
                                          (u*,v*)



                                              Figure 4.3

     Moreover, at the point (ū, v̄), of osculation, the slope of the curve is the negative of
the slope of the line from (u∗ , v ∗ ) to (ū, v̄). (Check this.)
    Examples. 1. Let S be the triangle with vertices (0, 0), (0, 1) and (3, 0), and let the
threat point be (0, 0). The Pareto optimal boundary is the line from (0, 1) to (3, 0) of slope
−1/3. The curve of the form u · v = c that osculates this line must have slope −1/3 at the

                                                III – 33
point of osculation. So the slope of the line from (0,0) to (ū, v̄) must be 1/3. This intersects
the Pareto boundary at the midpoint, (3/2, 1/2). This is therefore the NTU-solution.


                           1

                                                     (u,v)=(1.5,.5)
                                  S


                        (u*,v*)             1               2         3

                                                Figure 4.4

     2. Let the NTU-feasible set be the ellipse, S = {(x, y) : (x − 2)2 + 4(y − 1)2 ≤ 8}.
Let the threat point be (u∗ , v ∗ ) = (2, 1). The situation looks much like that of Figure 4.2.
The point (x, y) ∈ S that maximizes the product, (x − 2)(y − 1), is the NTU-solution.
This point must
              √ be on the √     Pareto optimal boundary consisting
                                                                  of the arc of the ellipse
from (2, 1 + 2) to (2 + 2 2, 1). On this arc, y − 1          =    2 − (x − 2)2 /4, so we seek
             √
x ∈ [2, 2 +
          2 2] to maximize (x − 2)(y        − 1) = (x − 2) 2 − (x − 2)2 /4. The derivative
of this is 2 − (x − 2)2 /4 − (x − 2)2 /4 2 − (x − 2)2 /4. Setting this to zero reduces to
                                                          √
(x − 2)2 = 4, whose roots are 2 ± 2. Since x ∈ [2, 2 + 2 2], we must have x = 4, and y = 2.
Therefore (ū, v̄) = (4, 2) is the NTU-solution of the game.
     3. Consider the game with bimatrix (1), whose NTU-feasible set is given in Figure
4.1(a). What should be taken as the threat point? If we take the view of Nash, that either
player may refuse to enter into agreement, thus leaving the players at the status-quo point
(0, 0), then we should add this strategy of non-cooperation to the player’s pure strategy
sets. The resulting bimatrix of the game is really
                                                               
                                        (4, 3)    (0, 0) (0, 0)
                                       (2, 2)    (1, 4) (0, 0)                             (9)
                                        (0, 0)    (0, 0) (0, 0)

This has the same NTU-feasible set as Figure 4.1(a). We may take the threat point to be
(u∗ , v ∗ ) = (0, 0). The Pareto optimal boundary is the line segment from (1,4) to (4,3). This
line has slope −1/3. However, the line of slope 1/3 from the origin intersects the extension
of this line segment at a point to the right of (4,3). This means that x · y increases as (x, y)
travels along this line segment from (1,4) to (4,3). The NTU-solution is therefore (4,3).
     The Lambda-Transfer Approach. There is another approach, due to Lloyd Shap-
ley, to solving the NTU-problem that has certain advantages over the Nash approach.
First, it relates the solution to the corresponding solution to the TU-problem. Second, it
avoids the diﬃcult-to-justify fourth axiom. Third, the threat point arises naturally as a
function of the bimatrix and does not have to be speciﬁed a priori. Fourth, it extends to
more general problems, but when specialized to the problems with status-quo point (0,0),
it gives the same answer as the Nash solution.

                                                 III – 34
     The main diﬃculty with the NTU-problems is the lack of comparability of the utilities.
If we pretend the utilities are measured in the same units and apply the TU-theory to arrive
at a solution, it may happen that the TU-solution is not in the NTU-feasible set. If it did
happen to be in the NTU-feasible set, the players can use it as the NTU-solution since it
can be achieved without any transfer of utility. But what can be done if the TU-solution
is not in the NTU-feasible set?
     Recall that the utilities are not measured in the same units. Someone might suggest
that an increase of one unit in Player 1’s utility is worth an increase of λ units in Player
2’s utility, where λ > 0. If that were so, we could analyze the game as follows. If the
original bimatrix is (A, B), we ﬁrst consider the game with bimatrix (λA, B), solve it
for the TU-solution, and then divide Player 1’s payoﬀ by λ to put it back into Player 1’s
original units. This is called the λ-transfer game. By the methods of Section 4.2, the
TU-solution to the λ-transfer game is ϕ(λ) = (ϕ1 (λ), ϕ2 (λ)), where

                                 σ(λ) + δ(λ)                   σ(λ) − δ(λ)
                      ϕ1 (λ) =               ,     ϕ2 (λ) =                                 (10)
                                     2λ                             2

where σ(λ) = maxij {λaij + bij } and δ(λ) = Val(λA − B). If the point ϕ(λ) is in the NTU-
feasible set, it could, with the justiﬁcation given earlier, be used as the NTU-solution.
      It turns out that there generally exists a unique value of λ, call it λ∗ , such that ϕ(λ∗ )
is in the NTU-feasible set. This ϕ(λ∗ ) can be used as the NTU-solution. The value of λ∗
is called the equilibrium exchange rate.
     Though it is easy, in principle with the help of a computer, to approximate the value
of ϕ(λ∗ ), it is diﬃcult to ﬁnd Val(λA − B) analytically. This problem disappears for
bimatrix games, (A, B), when the matrices A and −B have saddle points in the same
position in the matrix. Such bimatrix games, when played as NTU games, are said to be
ﬁxed threat point games. This is because whatever be the value of λ, the matrix game,
λA − B, which is used to determine the threat point, has a saddle point at that same
position in the matrix. Thus, the threat strategy and the threat point of the λ-transfer
game will not depend on λ. For example, in the bimatrix (10), the ﬁxed threat point is in
the lower right corner, because both A and −B have saddle points there.
    Here is another example. Consider the bimatrix,
                                                          
                                         (−1, 1) (1, 3)
                                                                                            (11)
                                          (0, 0) (3, −1)

Both
     A and −B have saddlepoints in the lower left corner. Therefore, λA − B =
  −λ − 1 λ − 3
                     has a saddle point in the lower left corner, whatever be the value
     0      3λ + 1
of λ ≥ 0. So, (0,0) is a ﬁxed threat point of the game. To ﬁnd the NTU-solution, we
change scale along the x-axis until we ﬁnd a λ∗ such that the diagonal line, x = y, exits S
at a point of slope −1 (or more precisely, S is contained below the line of slope −1 at the
point of exit). Then we change scale back, and ﬁnd that the line of slope λ∗ from (0,0)

                                            III – 35
exits the set S at a point of slope −λ∗ . The point of exit is of course the NTU-solution,
and the method of ﬁnding it is the same as for the Nash solution!
    In the example, λ∗ = 2, and the NTU-solution is (1.25, 2.5).
     The argument, that the NTU-solution for the λ-transfer game with a ﬁxed threat
point is the Nash solution, is perfectly general and works even if the ﬁxed threat point is
not the origin. The NTU-solution is found as the point of exit from S of a line of slope
λ∗ from the ﬁxed threat point, such that all of S is contained below the line of slope −λ∗
through the point of exit.

     4.4 End-Game with an All-In Player. Poker is usually played with the “table-
stakes” rule. This rule states that each player risks only the amount of money before him
at the beginning of the hand. This means that a player can lose no more than what is in
front of him on the table. It also means that a player cannot add to this amount during
the play of a hand.
      When a player puts all the money before him into the pot, he is said to be “all-in”.
When a player goes all-in, his money and an equal amount matched by each other player
still contesting the pot is set aside and called the main pot. All further betting, if any,
occurs only among the remaining players who are not all in. These bets are placed in a
side pot. Since the all-in player places no money in the side pot, he/she is not allowed to
win it. The winner of the main pot is the player with the best hand and the winner of
the side pot is the non-all-in player with the best hand. Betting in the side pot may cause
a player to fold. When this happens, he/she relinquishes all rights to winning the main
pot as well as the side pot. This gives the all-in player a subtle advantage. Occasionally,
a player in the side pot will fold with a winning hand which allows the all-in player to
win the main pot, which he would not otherwise have done. This possibility leads to some
interesting problems.
     As an example, consider End-Game in which there is an all-in player. Let’s call the all-
in player Player III. He can do nothing. He can only watch and hope to win the main pot.
Let’s assume he has four kings showing in a game of 5 card stud poker. Unfortunately for
him, Player II has a better hand showing, say four aces. However, Player I has a possible
straight ﬂush. If he has the straight ﬂush, he beats both players; otherwise he loses to
both players. How should this hand be played? Will the all-in player with the four kings
ever win the main pot?
     We set up an idealized version of the problem mathematically. Let A denote the
size of the main pot, and let p denote the probability that Player I has the winning hand.
(Assume that the value of p is common knowledge to the players.) As in End-Game, Player
I acts ﬁrst by either checking or betting a ﬁxed amount B. If Player I checks, he wins A
if he has the winning hand, and Player II wins A otherwise. Player III wins nothing. If
Player I bets, Player II may call or fold. If Player II calls and Player I has a winning hand,
Player I wins A + B, Player II loses B, and Player III wins nothing. If Player II calls and
Player I does not have the winning hand, Player I loses B and Player II wins A + B and
Player III wins nothing. If Player II folds and Player I has the winning hand, Player I

                                           III – 36
                                                     N

                                    p                                1−p

                             I                                                I

                            bet                               bet                 check
                            II
                                                                                  (0,A,0)
                     call          fold             call            fold

              (A+B,−B,0)          (A,0,0) (−B,A+B,0) (0,0,A)

wins A and the others win nothing. But if Player II folds and Player I does not have the
winning hand, Player III wins A and the others win nothing.
     As in Basic Endgame, Player I never gains by checking with a winning hand, so Player
I has two pure strategies, the honest strategy (bet with a winning hand, fold with a losing
hand) and the bluﬀ strategy (bet with a winning or losing hand). Player II also has two
pure strategies, call , and fold. Player III has no strategies so the payoﬀs of the three
players may be written in a 2 by 2 table as follows.
                                        call                            fold
                                                                                  
     honest               (p(A + B), −pB + (1 − p)A, 0)          (pA, (1 − p)A, 0)
     bluﬀ         (p(A + B) − (1 − p)B, −pB + (1 − p)(A + B), 0) (pA, 0, (1 − p)A)

     Ordinarily, A will be somewhat larger than B, and p will be rather small. The analysis
does not depend very much on the actual values of these three numbers, so it will be easier
to understand if we take speciﬁc values for them. Let’s take A = 100, B = 10 and p = 1/10.
Then the payoﬀ matrix becomes
                                                   call          fold
                                                                         
                                  honest       (11, 89, 0)    (10, 90, 0)
                                  bluﬀ          (2, 98, 0)    (10, 0, 90)
This is a constant-sum game for three players, but since Player III has no strategy choices
and since coalitions among players are strictly forbidden by the rules of poker, it is best
to consider this as non-constant-sum game between Players I and II. Removing the payoﬀ
for Player III from consideration, the matrix becomes
                                                     call       fold
                                                                      
                                    honest         (11, 89)   (10, 90)
                                                                                            (12)
                                    bluﬀ            (2, 98)    (10, 0)

    First note that row 1 is weakly dominates row 2, and if row 2 is removed, column
2 dominates column 1. This gives us an equilibrium at (row 1, column 2), with payoﬀ

                                                   III – 37
(10,90). Player I cannot gain by betting with a losing hand. Even if the bluﬀ is successful
and Player II folds, Player III will still beat him. Worse, Player II may call his bluﬀ and
he will lose the bet.
     So it seems that Player I might as well be honest. The result is that Player I never
bluﬀs and Player II always folds when Player I bets, and the payoﬀ is (10,90,0). This is
the accepted and time-honored course of action in real games in poker rooms around the
world. But let’s look at it more closely.
      As long as Player II uses column 2, it doesn’t hurt Player I to bluﬀ. In fact, there are
more equilibria. The strategy pair (1 − p, p) for Player I and column 2 for Player II is a
equilibrium provided p ≤ 1/99 (Exercise 7(a)). The equilibrium with p = 1/99 has payoﬀ
         1 10
(10, 89 11 , 11 ). This takes payoﬀ from Player II and gives it to Player III, something Player
II wants to avoid. She may be willing to concede a small fracion of her winnings to avoid
this.
     Player I can play this equilibrium without loss. In fact, he can try for more by bluﬃng
with probability greater than p = 1/99. If he does this, Player II’s best reply is column
1. If Player I uses p = 1/9 and Player II uses column 2, Player I’s average payoﬀ is still
11(8/9) + 2(1/9) = 10. A value of p between 1/99 and 1/9 encourages Player II to play
column 1, and then Player I’s average payoﬀ will be greater than 10. So Player I wants
more than 10, and Player II wants Player I not to use row 2.
     Noncooperative games that are repeated in time in which side payments are not al-
lowed may be considered as NTU cooperative games, in which the results of play over time
take the place of preplay negotiations. If this game is analyzed as an NTU game by the
methods of this section, the resulting payoﬀ is (10 56 , 89 16 , 0) (Exercise 7(b)). This may be
achieved by Player I always playing row 1, and Player II playing column 1 with probability
5/6. In other words, Player II calls 5 times out of 6, even though she knows that Player I
never bluﬀs. (Another way of achieving this payoﬀ is to have Player II call all the time,
and to have Player I bluﬀ with probability 1/54.)

    4.5 Exercises.
    1. For the following bimatrix games, draw the NTU and TU feasible sets. What are
the Pareto optimal outcomes?
                                                                     
                     (0, 4) (3, 2)                        (3, 1) (0, 2)
             (a)                                   (b)
                     (4, 0) (2, 3)                        (1, 2) (3, 0)

     2. Find the cooperative strategy, the TU solution, the side payment, the optimal
threat strategies, and the disagreement point for the two matrices (1) and (2) of Sections
4.1 and 4.2.
     3. Find the cooperative strategy, the TU solution, the side payment, the optimal
threat strategies, and the disagreement point for the following matrices of Exercise 2.5.5.
For (a), you may want to use the Matrix Game Solver on the web at
http://www.math.ucla.edu/ tom/gamesolve.html.
                             ˜
                                           III – 38
                                                           
               (−3, −4)    ( 2, −1)    ( 0, 6)     ( 1, 1)
              2, 0)
               (           ( 2, 2)     (−3, 0)     ( 1, −2) 
    (a)                                                    .
               ( 2, −3)    (−5, 1)     (−1, −1)    ( 1, −3)
               (−4, 3)     ( 2, −5)    ( 1, 2)     (−3, 1)
                                                           
               ( 0, 0)     ( 1, −1)    ( 1, 1)     (−1, 0)
              (−1, 1)     ( 0, 1)     ( 1, 0)     ( 0, 0) 
                                                           
    (b)       ( 1, 0)     (−1, −1)    ( 0, 1)     (−1, 1) .
                                                           
               ( 1, −1)    (−1, 0)     ( 1, −1)    ( 0, 0)
               ( 1, 1)     ( 0, 0)     (−1, −1)    ( 0, 0)
    4. Let S = {(x, y) : y ≥ 0    and y ≤ 4 − x2 } be the NTU-feasible set.
    (a) Find the NTU-solution if (u∗ , v ∗ ) = (0, 0).
    (b) Find the NTU-solution if (u∗ , v ∗ ) = (0, 1).
    5. Find the NTU-solution and the equilibrium exchange rate for the following ﬁxed
threat point games.
                               
           (6, 3) (0, 0) (0, 0)                                      
                                              (1, 0) (−1, 1) (0, 0)
    (a) (1, 8) (4, 6) (0, 0) .           (b)                            .
                                                (3, 3) (−2, 9) (2, 7)
           (0, 0) (0, 0) (0, 0)
    6. Find the NTU-solution and the equilibrium exchange rates of the following games
without a ﬁxed threat point.
                                                   
          (5, 2) (0, 0)                 (3, 2) (0, 5)
    (a)                   .       (b)                   .
          (0, 0) (1, 4)                 (2, 1) (1, 0)
     7. (a) In Endgame with an all-in player with the values A = 100, and B = 10, show
that the strategy pair (1 − p, p) for Player I and column 2 for Player II is an equilibrium
pair with payoﬀ (10, 90(1 − p), 90p) provided 0 ≤ p ≤ 1/99. Show that these are the only
equilibria. Show that if p = 1/99, Players I and II only get their safety levels.
     (b) Find the TU solution of this game. Show that the TU solution is in the NTU
feasible set and so is also the NTU solution.




                                           III – 39
                        GAME THEORY

                            Thomas S. Ferguson



Part IV. Games in Coalitional Form

1. Many-Person TU Games.
    1.1 Coalitional Form. Characteristic Functions.
    1.2 Relation to Strategic Form.
    1.3 Constant-Sum Games.
    1.4 Example.
    1.5 Exercises.

2. Imputations and the Core.
    2.1 Imputations.
    2.2 Essential Games.
    2.3 The Core.
    2.4 Examples.
    2.5 Exercises.

3. The Shapley Value.
    3.1 Value Functions. The Shapley Axioms.
    3.2 Computation of the Shapley Value.
    3.3 An Alternative Form of the Shapley Value.
    3.4 Simple Games. The Shapley-Shubik Power Index.
    3.5 Exercises.

4. The Nucleolus.
    4.1 Deﬁnition of the Nucleolus.
    4.2 Properties of the Nucleolus.
    4.3 Computation of the Nucleolus.
    4.4 Exercises.

                                       IV – 1
            PART IV. Games in Coalitional Form

     1. Many-Person TU Games

     We now consider many-person cooperative games. In such games there are no
restrictions on the agreements that may be reached among the players. In addition, we
assume that all payoﬀs are measured in the same units and that there is a transferrable
utility which allows side payments to be made among the players. Side payments may
be used as inducements for some players to use certain mutually beneﬁcial strategies.
Thus, there will be a tendency for players, whose objectives in the game are close, to
form alliances or coalitions. The structure given to the game by coalition formation is
conveniently studied by reducing the game to a form in which coalitions play a central
role. After deﬁning the coalitional form of a many-person TU game, we shall learn how to
transform games from strategic form to coalitional form and vice versa.

     1.1 Coalitional Form. Characteristic Functions. Let n ≥ 2 denote the number
of players in the game, numbered from 1 to n, and let N denote the set of players, N =
{1, 2, . . . , n}. A coalition, S, is deﬁned to be a subset of N , S ⊂ N , and the set of
all coalitions is denoted by 2N . By convention, we also speak of the empty set, ∅, as a
coalition, the empty coalition. The set N is also a coalition, called the grand coalition.
    If there are just two players, n = 2, then there are four coalition, {∅, {1}, {2}, N }. If
there are 3 players, there are 8 coalitions, {∅, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, N }. For n
players, the set of coalitions, 2N , has 2n elements.
     Deﬁnition. The coalitional form of an n-person game is given by the pair (N, v),
where N = {1, 2, . . . , n} is the set of players and v is a real-valued function, called the
characteristic function of the game, deﬁned on the set, 2N , of all coalitions (subsets of
N ), and satisfying
         (i) v(∅) = 0, and
         (ii) (superadditivity) if S and T are disjoint coalitions (S ∩ T = ∅), then
     v(S) + v(T ) ≤ v(S ∪ T ).
     Compared to the strategic or extensive forms of n-person games, this is a very simple
deﬁnition. Naturally, much detail is lost. The quantity v(S) is a real number for each
coalition S ⊂ N , which may be considered as the value, or worth, or power, of coalition S
when its members act together as a unit. Condition (i) says that the empty set has value
zero, and (ii) says that the value of two disjoint coalitions is at least as great when they
work together as when they work apart. The assumption of superadditivity is not needed
for some of the theory of coalitional games, but as it seems to be a natural condition, we
include it in the deﬁnition.

   1.2 Relation to Strategic Form. Recall that the strategic form of an n-person
game is given by the 2n-tuple, (X1 , X2 , . . . , Xn , u1 , u2 , . . . , un ), where

                                             IV – 2
         (1) for i = 1, . . . , n, Xi is the set of pure strategies of Player i, and
        (2) for i = 1, . . . , n, ui (x1 , . . . , xn ) is the payoﬀ function to Player i, if Player
    1 uses x1 ∈ X1 , Player 2 uses x2 ∈ X2 , . . . , and Player n uses xn ∈ Xn .
     Transforming a game from strategic form to coalitional form entails specifying the
value, v(S), for each coalition S ∈ 2N . The usual way to assign a characteristic function to a
strategic form game is to deﬁne v(S) for each S ∈ 2N as the value of the 2-person zero-sum
game obtained when the coalition S acts as one player and the complementary
                                                                                    coalition,
S = N − S, acts as the other player, and where the payoﬀ to S is i∈S ui (x1 , . . . , xn ), the
total of the payoﬀs to the players in S:
                                                                   
                                v(S) = Val      ui (x1 , . . . , xn )                       (1)
                                                i∈S

The value, v(S), is the analogue of the safety level. It represents the total amount that
coalition S can guarantee for itself, even if the members of S gang up against it, and have
as their only object to keep the sum of the payoﬀs to members of S as small as possible.
This is a lower bound to the payoﬀ S should receive because it assumes that the members of
S ignore what possible payoﬀs they might receive as a result of their actions. An example
of the computations involved in a three person game is given below.
     To see that v of equation (1) is a characteristic function, note that Condition (i) holds,
since the empty sum is zero. To see that (ii) holds, note that if s is a set of strategies for
S that guarantees them v(S), and t is a set of strategies for T that guarantees them v(T ),
then the set of strategies (s,t) guarantees S ∪ T at least v(S) + v(T ). Perhaps other joint
strategies can guarantee even more, so certainly, v(S ∪ T ) ≥ v(S) + v(T ).
     Every ﬁnite n-person game in strategic form can be reduced to coalitional form in
this way. Often, such a reduction to coalitional form loses important features in the game,
such as threats. So for a given characteristic function v, there are usually many games
in strategic form whose reduction by the above method has characteristic function v. See
Exercise 3 for a two-person game that favors one of the players, yet the the reduction in
coalitional form is symmetric in the players.
      One way of constructing a strategic form game whose reduction to coalitional form
has a given characteristic function, v, is as follows. The strategy space Xi for Player i is
taken to be the set of all coalitions that contain i: Xi = {S ∈ 2N : i ∈ S}. Then the
payoﬀ to player i is the minimum amount, v({i}), unless all members of the coalition, Si ,
chosen by Player i, choose the same coalition as player i has, in which case the coalition Si
is given its value v(Si ) which it then splits among its members. Thus the payoﬀ function
ui is                                     
                                            v(Si )/|Si | if Sj = Si for all j ∈ Si
                   ui (S1 , . . . , Sn) =                                                 (2)
                                            v({i})       otherwise
where |Si | represents the number of members of the coalition Si . Clearly, a coalition S
can guarantee itself v(S) simply by having each member of S select S as his coalition of
choice. Moreover, since v is superadditive, the coalition S cannot guarantee more for itself
by having its members form subcoalitions.

                                                IV – 3
 1.3 Constant-Sum Games. A game in strategic form is said to be zero-sum if
   i∈N ui
         (x1 , . . . , xn ) = 0 for all strategy choices x1 , . . . , xn of the players. In such a game,
                                          
we have i∈S ui (x1 , . . . , xn ) = − i∈S ui (x1 , . . . , xn ) for any coalition S, where S = N −S
is the complement of S. This implies that in the reduction of such a game to coalitional
form, the value of the game coalition S plays against S is the negative of the value of the
game S plays against S, so that v(S) + v(S) = 0 for all coalitions S. We may take this as
the deﬁnition of a      zero-sum game in coalitional form. Similarly, a strategic form game is
constant-sum if i∈N ui (z1 , . . . , zn ) = c for some constant c. By a similar reasoning, the
reduction of such a game leads to v(S) + v(S) = c = v(N ) for all coalitions S in a constant
sum game. This may be taken as the deﬁnition of a constant-sum game in coalitional form.

     Deﬁnition. A game in coalitional form is said to be constant-sum, if v(S) + v(S) =
v(N ) for all coalitions S ∈ 2N . It is said to be zero-sum if, in addition, v(N ) = 0.


    1.4 Example. Consider the three-person game with players I, II, and III with two
pure strategies each and with payoﬀ vectors:

If I chooses 1:                                       If I chooses 2
                        III:                                                    III:
                1                  2                                    1                  2
II:   1     (0, 3, 1)          (2, 1, 1)              II:    1      (1, 0, 0)          (1, 1, 1)
      2     (4, 2, 3)          (1, 0, 0)                     2      (0, 0, 1)          (0, 1, 1)


     Let us ﬁnd the associated game in coalitional form by ﬁnding the characteristic func-
tion, v. We automatically have v(∅) = 0. It is easy to ﬁnd v(N ). It is the largest sum in
the eight cells. This occurs for the cell (1, 2, 1) and gives total payoﬀ v(N ) = 9. To ﬁnd
v({1}), compute the payoﬀ matrix for the winnings of I against (II,III):
                                                               (II,III)
                                               1, 1         1, 2      2, 1      2, 2
                                 I:        1    0            2          4        1
                                           2    1            1          0        0

                                                                                                  
                                                                                           0   1
The second and third columns are dominated, so v({1}) = Val                                            = 1/2.
                                                                                           1   0

     To ﬁnd v({2}) and v({3}), we make similar constructions of the matrices of II’s win-
nings vs I and III, and III’s winnings vs I and II and ﬁnd the values of the resulting games.
In the matrix of II’s winnings, the choice 2 by II and (2,1) by (I,III) is a saddlepoint with
value v({2}) = 0. In the matrix of III’s winnings, the value is v({3}) = 3/4.

     To ﬁnd v({1, 3}) say, we ﬁrst construct the matrix of the sum of the winnings of I and
III playing against II. This is

                                                      IV – 4
                                                               II
                                                           1        2
                                                 1,1       1        7
                                      (I,III):   1,2       3        1
                                                 2,1       1        1
                                                 2,2       2        1

    The lower
            two rows are dominated by the second row, so that the value is v({1, 3}) =
      1 7
Val          = 5/2. Similarly, we may compute the matrix of I and II playing against III,
      3 1
and the matrix of II and III playing against I. Both these matrices have saddle points. We
ﬁnd v({1, 2}) = 3 and v{2, 3}) = 2. This completes the speciﬁcation of the characteristic
function.

      1.5 Exercises.
     1. Find the characteristic function of the 3-person game with players I, II, and III
with two pure strategies each and with the following payoﬀ vectors. Note that this is a
zero-sum game. Hence, v({1, 3}) = −v({2}), etc.
If I chooses 1:                                          If I chooses 2
                         III:                                                          III:
                1                    2                                        1                    2
II:   1    (−2, 1, 1)           (1, −4, 3)               II:   1         (−1, −2, 3)           (−4, 2, 2)
      2    (1, 3, −4)          (10, −5, −5)                    2        (12, −6, −6)          (−1, 3, −2)

    2. Find the characteristic function of the 3-person game in strategic form when the
payoﬀ vectors are:
If I chooses 1:                                    If I chooses 2
                        III:                                                 III:
                1                   2                                    1              2
II:   1     (1, 2, 1)           (3, 0, 1)          II:     1        (−1, 2, 4)      (1, 0, 3)
      2    (−1, 6, −3)          (3, 2, 1)                  2         (7, 5, 4)      (3, 2, 1)

      3. Consider the two-person game with bimatrix
                                                   
                                      (0, 2) (4, 1)
                                      (2, 4) (5, 4)

    (a) Find the associated game in coalitional form. Note that in coalitional form the
game is symmetric in the two players.
    (b) Argue that the above game is actually favorable to Player 2.
    (c) Find the TU-value as a game in strategic form. Note that this value gives more
to Player 2 than to Player 1.
    (d) If the game in coalitional form found in (a) is transformed to strategic form by
the method of Equation (2), what is the bimatrix that arises?

                                                 IV – 5
     2. Imputations and the Core

     In cooperative games, it is to the joint beneﬁt of the players to form the grand coalition,
N , since by superadditivity the amount received, v(N ), is as large as the total amount
received by any disjoint set of coalitions they could form. As in the study of 2-person TU
games, it is reasonable to suppose that “rational” players will agree to form the grand
coalition and receive v(N ). The problem is then to agree on how this amount should be
split among the players. In this section, we discuss one of the possible properties of an
agreement on a fair division, that it be stable in the sense that no coalition should have
the desire and power to upset the agreement. Such divisions of the total return are called
points of the core, a central notion of game theory in economics.

     2.1 Imputations. A payoﬀ vector x = (x1 , x2 , . . . , xn ) of proposed amounts to be
received by the players, with the understanding that player i is to receive xi , is sometimes
called an imputation. The ﬁrst desirable property of an imputation is that the total
amount received by the players should be v(N ).

          n A payoﬀ vector, x = (x1 , x2 , . . . , xn ), is said to be group rational or
   Deﬁnition.
eﬃcient if i=1 xi = v(N ).
      No player could be expected to agree to receive less than that player could obtain
acting alone. Therefore, a second natural condition to expect of an imputation, x =
(x1 , x2 , . . . , xn ), is that xi ≥ v({i}) for all players, i.
     Deﬁnition. A payoﬀ vector, x, is said to be individually rational if xi ≥ v({i})
for all i = 1, . . . , n.
     Imputations are deﬁned to be those payoﬀ vectors that satisfy both these conditions.
     Deﬁnition. An imputation is a payoﬀ vector that is group rational and individually
rational. The set of imputations may be written
                                        
            {x = (x1 , . . . , xn ) :   i∈N xi = v(N ), and xi ≥ v({i}) for all i ∈ N }.        (1)



        n an imputation is an n-vector, x = (x1 , . . . , xn ), such that xi ≥ v({i}) for all
     Thus,
i and     i=1 xi = v(N ).       The set of imputations is never empty, since from the super-
                                   n
additivity of v, we have i=1 v({i}) ≤ v(N ). For example, one imputation is given by
                                                                                         n−1
x = (x1 , x2 , . . . , xn ), where xi = v({i}) for i = 1, . . . , n − 1, and xn = v(N ) − 1 v({i}).
This is the imputation most preferred by player n. In fact the set of imputations is exactly
the simplex consisting of the convex hull of the n points         n obtained by letting xi = v({i})
for all xi except one, which is then chosen to satisfy 1 xi = v(N ).
    In Example 1.4, v({1}) = 1/2, v({2}) = 0, v({3}) = 1, and v(N ) = 9. The set of
imputations is

                 {(x1 , x2 , x3 ) : x1 + x2 + x3 = 9, x1 ≥ 1/2, x2 ≥ 0, x3 ≥ 1}.

                                                 IV – 6
This is a triangle each of whose vertices satisfy two of the three inequalities with equal-
ity, namely, (8, 0, 1), (1/2, 15/2, 1), and (1/2, 0, 17/2). These are the imputations most
preferred by players 1, 2, and 3 respectively.

     2.2 Essential Games. There is one trivial case in which the set of imputations
consists of one point. Such a game is called inessential.
                                                                            n
     Deﬁnition. A game  n in coalitional form is said to be inessential if  i=1 v({i}) =
v(N ), and essential if i=1 v({i}) < v(N ).
     If a game is inessential, then the unique imputation is x = (v({1}), . . . , v({n})), which
may be considered the “solution” of the game. Every player can expect to receive his safety
level. Two-person zero-sum games are all inessential. (Exercise 1.)
     From the game-theoretic viewpoint, inessential
                                                   games are very simple. For every
coalition S, v(S) is determined by v(S) =    i∈S v({i}). There is no tendency for the
players to form coalitions.
     In Example 1.4, v({1}) + v({2}) + v({3}) = 1/2 + 0 + 1 < 9 = v(N ), so the game is
essential.

     2.3 The Core. Suppose some imputation, x, is being proposed as a division of v(N )
among the players. If there exists a coalition, S, whosetotal return from x is less than what
that coalition can achieve acting by itself, that is, if i∈S xi < v(S), then there will be a
tendency for coalition S to form and upset the proposed x because such a coalition could
guarantee each of its members more than they would receive from x. Such an imputation
has an inherent instability.
    Deﬁnition.
                An imputation x is said to be unstable through a coalition S if
v(S) > i∈S xi . We say x is unstable if there is a coalition S such that x is unstable
through S, and we say x is stable otherwise.
    Deﬁnition. The set, C, of stable imputations is called the core,
                                                   
    C = {x = (x1 , . . . , xn ) : i∈N xi = v(N ) and i∈S xi ≥ v(S), for all S ⊂ N }.        (2)



     The core can consist of many points as in the examples below; but the core can also be
empty. It may be impossible to satisfy all the coalitions at the same time. One may take the
size of the core as a measure of stability, or of how likely it is that a negotiated agreement
is prone to be upset. One may take the essential constant-sum games as examples of games
with empty cores:

Theorem 1. The core of an essential n-person constant-sum game is empty.
                                                                    
Proof. Let x be an imputation. Since the game is essential, we have i∈N v({i}) < v(N ).
Then
    there must be  a player, k, such that xk > v({k}), for otherwise v(N ) =  i∈N xi ≤
  i∈N v({i}) < v(N ). Since the game is constant-sum, we have v(N − {k}) + v({k}) =


                                            IV – 7
                                                                                                   
v(N ). But then, x must be unstable through the coalition N − {k}, because
                                                                                                      i=k xi =
  i∈N xi − xk < V (N ) − v({k}) = v(N − {k}).

     2.4 Examples. Example 1. Consider the game with characteristic function v given
by

                        v({1}) = 1           v({1, 2}) = 4
         v(∅) = 0       v({2}) = 0           v({1, 3}) = 3         v({1, 2, 3}) = 8
                        v({3}) = 1           v({2, 3}) = 5
    The imputations are the points (x1 , x2 , x3 ) such that x1 + x2 + x3 = 8 and x1 ≥ 1,
x2 ≥ 0, x3 ≥ 1. This set is the triangle with vertices (7, 0, 1), (1, 6, 1) and (1, 0, 7).
     It is useful to plot this triangle in barycentric coordinates. This is done by pre-
tending that the plane of the plot is the plane x1 + x2 + x3 = 8, and giving each point on
the plane three coordinates which add to 8. Then it is easy to draw the lines x1 = 1 or
the line x1 + x3 = 3 (which is the same as the line x2 = 5), etc. It then becomes apparent
that the set of imputations is an equilateral triangle.
     On the plane x1 + x2 + x3 = 8:                          (7,0,1)


                                                  (6,1,1)              (6,0,2)

                                                                                         x1 + x2 = 4
                                             (5,2,1)
                                                            Unstable
                                                            through
                                        (4,3,1)              {2,3}               (4,0,4)


                                   (3,4,1)                                             (3,0,5) x2 + x3 = 5
                    x 1 + x3 = 3

                                                                            Unstable
                             (2,5,1)          THE CORE
                                                                            through
                                   Uns                                       {1,2}
                                  {1,3}
                            (1,6,1) (1,5,2)                  (1,3,4)                         (1,0,7)
     Let us ﬁnd which imputations are unstable. The coalition {2, 3} can guarantee itself
v({2, 3}) = 5, so all points (x1 , x2 , x3 ) with x2 + x3 < 5 are unstable through {2, 3}. These
are the points below the line x2 + x3 = 5 in the diagram. Since {1, 2} can guarantee itself
v({1, 2}) = 4, all points below and to the right of the line x1 + x2 = 4 are unstable. Finally,
since {1, 3} can guarantee itself v({1, 3}) = 3, all points below the line x1 + x3 = 3 are
unstable. The core is the remaining set of points in the set of imputations given by the
5-sided ﬁgure in the diagram, including the boundary.
    Example 2. A certain objet d’art is worth ai dollars to Player i for i = 1, 2, 3. We
assume a1 < a2 < a3 , so Player 3 values the object most. But Player 1 owns this object so
v({1}) = a1 . Player 2 and 3 by themselves can do nothing, so v({2}) = 0, v({3}) = 0, and

                                                  IV – 8
v({2, 3}) = 0. If Players 1 and 2 come together, the joint worth is a2 , so v({1, 2}) = a2 .
Similarly, v({1, 3}) = a3 . If all three get together, the object is still only worth a3 , so
v(N ) = a3 . Let us ﬁnd the core of this game.
    The core consists of all vectors (x1 , x2 , x3 ) satisfying

         x1 ≥ a1      x1 + x2 ≥ a2
         x2 ≥ 0       x1 + x3 ≥ a3         x1 + x2 + x3 = a3
         x3 ≥ 0       x2 + x3 ≥ 0
     It follows from x2 = a3 − x1 − x3 ≤ 0 and x2 ≥ 0 that x2 = 0 for all points of the
core. Then we ﬁnd that x1 ≥ a2 and x3 = a3 − x1 . Hence the core is C = {(x, 0, a3 − x) :
a2 ≤ x ≤ a3 }.
    This indicates that the object will be purchased by Player 3 at some purchase price x
between a2 and a3 . Player 1 ends up with x dollars and player 3 ends up with the object
minus x dollars. Player 2 plays no active role in this, but without her around Player 3
might hope to get the object for less than a2 .

    2.5 Exercises.
    1. Show that every 2-person constant-sum game is inessential.
    2. Find the set of imputations and the core of the battle of the sexes with bimatrix:
                                                            
                                           (4, 2)   (1, 1)
                                                                 .
                                           (0, 0)   (2, 4)


     3. Graph the core for the 3-person game with characteristic function: v(∅) = 0,
v({1}) = 0, v({2}) = −1, v({3}) = 1, v({1, 2}) = 3, v({1, 3}) = 2, v({2, 3}) = 4, and
v(N ) = 5.
     4. Deﬁnition. A game with characteristic function v is said to be symmetric if
v(S) depends only on the number of elements of S, say v(S) = f(|S|) for some function f.
(a) In a symmetric 3-player game with v({i}) = 0, v({i, j}) = a and v({1, 2, 3}) = 3, for
what values of a is the core non-empty?
     (b) In a symmetric 4-player game with v({i}) = 0, v({i, j}) = a, v({i, j, k}) = b, and
v(N ) = 4, for what values of a and b is the core non-empty?
     (c) Generalize. Find necessary and suﬃcient conditions on the values of f(|S|) = v(S)
for a symmetric game to have a non-empty core.

n 5. Let δi = v(N ) − v(N − {i}) for i = 1, . . . , n. Show that the core is empty if
 1 δi < v(N ).

     6. We say that Player i is a dummy in a game (N, v), if v({i} ∪ S) = v(S) for
all coalitions, S. In particular, v({i}) = 0. Thus, a dummy cannot help (or harm) any
coalition. Show that if Player 1 is a dummy and if (x1 , x2 , . . . , xn ) is in the core, then
x1 = 0.

                                               IV – 9
    7. The Glove Market. Let N consist of two types of players, N = P ∪ Q, where
P ∩ Q = ∅. Let the characteristic function be deﬁned by

                             v(S) = min{|S ∩ P |, |S ∩ Q|}.

The game (N, v) is called the glove market because of the following interpretation. Each
player of P owns a right-hand glove and each player of Q owns a left-hand glove. If j
members of P and k members of Q form a coalition, they have min{j, k} complete pairs
of gloves, each being worth 1. Unmatched gloves are worth nothing.
     (a) Suppose |P | = 2 and |Q| = 2. Find the core.
     (b) Suppose |P | = 2 and |Q| = 3. Show the core consists of a single point.
     (c) Generalize to arbitrary |P | and |Q|.
    8. There are two machine owners (players 1 and 2) and three workers (players 3, 4
and 5). Each machine owner owns two machines. Each worker can produce 1 unit on any
machine. Thus for example,
    v({i, k}) = 1 for i = 1, 2 and k = 3, 4, 5,
    v({i, j, k}) = 2 for i = 1, 2 and j, k = 3, 4, 5.
    v({1, 2, 3, 4, 5}) = 3.
Find the core.




                                        IV – 10
    3. The Shapley Value

    We now treat another approach to n-person games in characteristic function form.
The concept of the core is useful as a measure of stability. As a solution concept, it
presents a set of imputations without distinguishing one point of the set as preferable to
another. Indeed, the core may be empty.
     Here we deal with the concept of a value. In this approach, one tries to assign to each
game in coalitional form a unique vector of payoﬀs, called the value. The ith entry of the
value vector may be considered as a measure of the value or power of the ith player in
the game. Alternatively, the value vector may be thought of as an arbitration outcome of
the game decided upon by some fair and impartial arbiter. The central “value concept”
in game theory is the one proposed by Shapley in 1953. We deﬁne the Shapley value in
this section and discuss its application to measuring power in voting systems where it is
called the Shapley-Shubik power index. In Section 4, we treat another value concept, the
nucleolus.

     3.1 Value Functions. The Shapley Axioms. As an example of the type of
reasoning involved in arbitrating a game, consider Example 1 of Section 2.4. Certainly
the arbiter should require the players to form the grand coalition to receive 8, but how
should this be split among the players? Player 2 can get nothing by himself, yet he is more
valuable than 1 or 3 in forming coalitions. Which is more important? We approach this
problem by axiomatizing the concept of fairness.
     A value function, φ, is function that assigns to each possible characteristic function
of an n-person game, v, an n-tuple, φ(v) = (φ1 (v), φ2 (v), . . . , φn (v)) of real numbers. Here
φi (v) represents the worth or value of player i in the game with characteristic function v.
The axioms of fairness are placed on the function, φ.
        The Shapley Axioms for φ(v):
                    
    1. Eﬃciency.      i∈N φi (v) = v(N ).
    2. Symmetry. If i and j are such that v(S ∪ {i}) = v(S ∪ {j}) for every coalition
    S not containing i and j, then φi (v) = φj (v).
    3. Dummy Axiom. If i is such that v(S) = v(S ∪ {i}) for every coalition S not
    containing i, then φi (v) = 0.
    4. Additivity. If u and v are characteristic functions, then φ(u + v) = φ(u) +
    φ(v).
     Axiom 1 is group rationality, that the total value of the players is the value of the
grand coalition. The second axiom says that if the characteristic function is symmetric in
players i and j, then the values assigned to i and j should be equal. The third axiom says
that if player i is a dummy in the sense that he neither helps nor harms any coalition he
may join, then his value should be zero. The strongest axiom is number 4. It reﬂects the
feeling that the arbitrated value of two games played at the same time should be the sum
of the arbitrated values of the games if they are played at diﬀerent times. It should be
noted that if u and v are characteristic functions, then so is u + v.

                                            IV – 11
Theorem 1. There exists a unique function φ satisfying the Shapley axioms.

Proof. For a given nonempty set S ⊂ N , let wS represent the special characteristic
function, deﬁned for all T ⊂ N to be
                                                  
                                                      1 if S ⊂ T
                                   wS (T ) =                                               (1)
                                                      0 otherwise.

From axiom 3, φi (wS ) = 0 if i ∈     S. From axiom 2, if both i and j are in S, then
φi (wS ) = φj (wS ). From axiom 1, i∈N φi (wS ) = wS (N ) = 1, so that φi (wS ) = 1/|S|
for all i ∈ S. Applying similar analysis to the characteristic function cwS for an arbitrary
number, c, we ﬁnd                          
                                             c/|S| for i ∈ S
                               φi (cwS ) =                                               (2)
                                             0      for i ∈ S.
In the next paragraph, we show that any characteristic function, v, is representable as
a weighted sum of characteristic functions of the form (1), v =    S⊂N cS wS , for some
appropriate, easily computable, constants cS . Then axiom 4 may be applied to show that
if a value function exists, it must be
                                                        cS
                                       φi (v) =              .                             (3)
                                                         |S|
                                                      S⊂N
                                                      i∈S


where this sum is taken over all coalitions S containing i. This works even if some of the
cS are negative, since axiom 4 also implies that φ(u − v) = φ(u) − φ(v), provided u, v,
and u − v are characteristic functions. (Just write u = (u − v) + v.) To complete the proof,
one must show existence, namely that (3) with the cS deﬁned below, satisﬁes the Shapley
axioms. This is not diﬃcult but we defer the proof to Theorem 2, where we show existence
by showing another value function satisﬁes the Shapley axioms (and therefore must be the
same as (3)).
                                                                
    Now let us show that any v may be written as v =              S⊂N cS wS by ﬁnding the
constants cS . Let c∅ = 0, and deﬁne inductively on the number of elements in T , for all
T ⊂ N,                                            
                                    cT = v(T ) −      cS .                               (4)
                                                         S⊂T
                                                         S=T

Note that each cT is deﬁned in terms of cS for all S ⊂ T , S = T . Then,
                                                              
                             cS wS (T ) =         cS = cT +            cS = v(T ).         (5)
                       S⊂N                  S⊂T                 S⊂T
                                                                S=T

             
Hence, v =       S⊂N cS wS as was to be shown.

    It is interesting to note that the superadditivity of v is not needed in this proof.

                                              IV – 12
    3.2 Computation of the Shapley Value. The proof of Theorem 1 provides a
method of computing the Shapley value: First ﬁnd the numbers cS inductively using
Equation (4). Then form the Shapley value using Equation (3).
     As an example of this method, consider the characteristic function of Example 1 of
Section 2.4.
                       v({1}) = 1       v({1, 2}) = 4
         v(∅) = 0      v({2}) = 0       v({1, 3}) = 3       v({1, 2, 3}) = 8
                       v({3}) = 1       v({2, 3}) = 5
    We ﬁnd inductively, c{1} = v({1}) = 1, c{2} = 0 and c{3} = 1. Then, c{1,2} =
v({1, 2}) − c{1} − c{2} = 4 − 1 − 0 = 3, c{1,3} = 3 − 1 − 1 = 1, and c{2,3} = 5 − 0 − 1 = 4.
Finally,

cN = v(N ) − c{1,2} − c{1,3} − c{2,3} − c{1} − c{2} − c{3} = 8 − 3 − 1 − 4 − 1 − 0 − 1 = −2.

Hence, we know we can write v as

                 v = w{1} + w{3} + 3w{1,2} + w{1,3} + 4w{2,3} − 2w{1,2,3}

From this we ﬁnd
                                            3 1 2      1
                                φ1 (v) = 1 + + − = 2+
                                            2 2 3      3
                                         4 3 2     5
                                φ2 (v) = + − = 2 +
                                         2 2 3     6
                                            1 4 2      5
                                φ3 (v) = 1 + + − = 2 +
                                            2 2 3      6
The Shapley value is φ = (14/6, 17/6, 17/6). This point is in the core (see the diagram in
Section 2). The Shapley value is not always in the core. For one thing, it could happen that
the core is empty. But even if the core is not empty, the Shapley value is not necessarily
in the core. (See Exercise 1, for example.)

     3.3 An Alternative Form of the Shapley Value. There is an alternate way of
arriving at the Shapley value that gives additional insight into its properties. Suppose we
form the grand coalition by entering the players into this coalition one at a time. As each
player enters the coalition, he receives the amount by which his entry increases the value
of the coalition he enters. The amount a player receives by this scheme depends on the
order in which the players are entered. The Shapley value is just the average payoﬀ to the
players if the players are entered in completely random order.
    Theorem 2. The Shapley value is given by φ = (φ1 , . . . , φn ), where for i = 1, . . . , n,

                                (|S| − 1)!(n − |S|)!
                    φi (v) =                             [v(S) − v(S − {i})].               (6)
                                           n!
                               S⊂N
                                i∈S


                                               IV – 13
     The summation in this formula is the summation over all coalitions S that contain
i. The quantity, v(S) − v(S − {i}), is the amount by which the value of coalition S − {i}
increases when player i joins it. Thus to ﬁnd φi (v), merely list all coalitions containing
i, compute the value of player i’s contribution to that coalition, multiply this by (|S| −
1)!(n − |S|)!/n!, and take the sum.
      The interpretation of this formula is as follows. Suppose we choose a random order of
the players with all n! orders (permutations) of the players equally likely. Then we enter
the players according to this order. If, when player i is enters, he forms coalition S (that
is, if he ﬁnds S − {i} there already), he receives the amount [v(S) − v(S − {i})].
     The probability that when i enters he will ﬁnd coalition S − {i} there already is
(|S| − 1)!(n − |S|)!/n!. The denominator is the total number of permutations of the n
players. The numerator is number of these permutations in which the |S| − 1 members of
S − {i} come ﬁrst ((|S| − 1)! ways), then player i, and then the remaining n − |S| players
((n − |S|)! ways). So this formula shows that φi (v) is just the average amount player i
contributes to the grand coalition if the players sequentially form this coalition in a random
order.
     As an illustration of the use of this formula, let us compute φ1 (v) again for Example
1 of Section 2.4. The probability that player 1 enters ﬁrst is 2!0!/3! = 1/3, and then his
payoﬀ is v({1}) = 1. The probability that 1 enters second and ﬁnds 2 there is 1/6, and his
payoﬀ is v({1, 2}) − v({2}) = 4 − 0 = 4. The probability that 1 enters second and ﬁnds 3
there is 1/6, and the expected payoﬀ is v({1, 3}) − v({3}) = 3 − 1 = 2. The probability
that 1 enters last is 1/3, and then his payoﬀ is v({1, 2, 3}) − v({2, 3}) = 8 − 5 = 3. Player
1’s average payoﬀ is therefore
                                    1      1     1     1
                         φ1 (v) =     · 1 + · 4 + · 2 + · 3 = 14/6
                                    3      6     6     3
as found earlier.
     The following table shows the computations for all three players simultaneously. The
6 diﬀerent orders of the players are listed along with the payoﬀs to the players. In the ﬁrst
row, the players enter in the order 1, 2, 3. Player 1 receives v(1) = 1 upon entry; then Player
2 receives v(1, 2) − v(1) = 4 − 1 = 3; ﬁnally Player 3 receives v(N ) − v(1, 2) = 8 − 4 = 4.
Each of the six rows is equally likely, probability 1/6 each. The Shapley value is the average
of the six numbers in each column.
                                               Player
                     Order of Entry        1     2    3          Total
                         123               1     3    4            8
                         132               1     5    2            8
                         213               4     0    4            8
                         231               3     0    5            8
                         312               2     5    1            8
                         321               3     4    1            8
                        Average           14/6 17/6 17/6           8

                                           IV – 14
Proof of Theorem 2. To see that formula (6) gives the Shapley value, we have only to
see that it satisﬁes axioms 1 through 4, since we have already shown that there is at most
one such function, φ. Axioms 2, 3, and 4 are easy to check directly from the formula of
Theorem 2. Axiom 1 follows from the above interpretation of the formula, since in each
realization of forming the grand coalition, exactly v(N ) is given to the players. Hence, the
average amount given to the players is also v(N ).

     3.4 Simple Games. The Shapley-Shubik Power Index. The Shapley value
has an important application in modeling the power of members of voting games. This
application was developed by Shapley and Shubik in 1954 and the measure is now known
as the Shapley-Shubik Power Index.
     Players are members of legislature or members of the board of directors of a corpo-
ration, etc. In such games, a proposed bill or decision is either passed or rejected. Those
subsets of the players that can pass bills without outside help are called winning coalitions
while those that cannot are called losing coalitions. In all such games, we may take the
value of a winning coalition to be 1 and the value of a losing coalition to be 0. Such games
are called simple games.
Deﬁnition. A game (N, v) is simple if for every coalition S ⊂ N , either v(S) = 0 or
v(S) = 1.
     In a simple game, a coalition S is said to be a winning coalition if v(S) = 1 and
a losing coalition if v(S) = 0. So in a simple game every coalition is either winning or
losing. It follows from superadditivity of v that in simple games every subset of a losing
coalition is losing, and every superset of a winning coalition is winning.
     Typical examples of simple games are
(1) the majority rule game where v(S) = 1 if |S| > n/2, and v(S) = 0 otherwise;
(2) the unanimity game where v(S) = 1 if S = N and v(S) = 0 otherwise; and
(3) the dictator game where v(S) = 1 if 1 ∈ S and v(S) = 0 otherwise.
     For simple games, formula (6) for the Shapley value simpliﬁes because the diﬀerence
[v(S) − v(S − {i})] is always zero or one. It is zero if v(S) and v(S − {i}) are both zero
or both one, and it is one otherwise. Therefore we may remove [v(S) − v(S − {i})] from
formula (6) provided we sum only over those coalitions S that are winning with i and
losing without i. Formula (6) for the Shapley value (the Shapley-Shubik Index) becomes
                                                  (|S| − 1)!(n − |S|)!
                         φi (v) =                                       .                (7)
                                                            n!
                                     S winning
                                    S−{i} losing


    Example. There is a large class of simple games called weighted voting games.
They are deﬁned by a characteristic function of the form
                                            
                                       1 if i∈S wi > q
                            v(S) =                       ,
                                       0 if i∈S wi ≤ q

                                            IV – 15
for some non-negative numbers
                             wi , called the weights, and some positive number q, called
the quota. If q = (1/2) i∈N wi , this is called a weighted majority game.
     As an example, consider the game with players 1, 2, 3, and 4, having 10, 20, 30, and
40 shares of stock respectively, in a corporation. Decisions require approval by a majority
(more than 50%) of the shares. This is a weighted majority game with weights w1 = 10,
w2 = 20, w3 = 30 and w4 = 40 and with quota q = 50.
     Let us ﬁnd the Shapley value of this game. The winning coalitions are {2, 4}, {3, 4},
{1, 2, 3}, and all supersets (sets containing one of these). For i = 1, v(S) − v(S − {1}) = 0
unless S = {1, 2, 3}. So
                                               2!1!    1
                                      φ1 (v) =      =    .
                                                4!    12
For i = 2, v(S) − v(S − {2}) = 0 unless S = {2, 4}, {1, 2, 3}, or {1, 2, 4}, so that

                                            1!2!    2!1!  1
                                 φ2 (v) =        +2      = .
                                             4!      4!   4
Similarly, φ3 (v) = 1/4. For i = 4, v(S) − v(S − {4}) = 0 unless S = {2, 4}, {3, 4}, {1, 2, 4},
{1, 3, 4} or {2, 3, 4}. So
                                           1!2!    2!1!   5
                                φ4 (v) = 2      +3      =    .
                                            4!      4!    12
The Shapley value is φ = (1/12, 3/12, 3/12, 5/12). Note that the value is the same for
players 2 and 3 although player 3 has more shares.

    3.5 Exercises.
     1. (Market with one seller and two buyers) Player 1 owns an art object of no intrinsic
worth to him. Therefore he wishes to sell it. The object is worth $30 to player 2 and $40
to player 3. Set this up as a game in characteristic function form. Find the Shapley value.
Is the Shapley value in the core? (Refer to Example 2 of Section 2.4.)
    2. Find the Shapley value of the game with characteristic function
                       v({1}) = 1        v({1, 2}) = 2
         v(∅) = 0      v({2}) = 0        v({1, 3}) = −1        v({1, 2, 3}) = 6
                       v({3}) = −4       v({2, 3}) = 3
    3. (a) Using the superadditivity of v, show that the Shapley value is an imputation.
     (b) Let T be a ﬁxed coalition in N . Show that φx (v) is a strictly increasing function
of v(T ) (with the other v(S), S = T , held ﬁxed) if x ∈ T , and a strictly decreasing function
of V (T ) if x ∈ T .
    4. Find the Shapley value of the n-person game with characteristic function,
                                               
    (a) v(S) = |S| if 1 ∈ S          (b) v(S) = |S| if 1 ∈ S or 2 ∈ S
                 0   otherwise.                   0   otherwise.
               
    (c) v(S) = |S| if 1 ∈ S and 2 ∈ S .
                 0   otherwise.

                                            IV – 16
    5. Is every simple game a weighted voting game? Prove or give a counterexample.
     6. Find the Shapley value of the weighted majority game with 4 players having 10,
30, 30, and 40 shares.
    7. Find the Shapley value of the weighted majority game with n ≥ 3 players in which
player 1 has 2n − 3 shares and players 2 to n have 2 shares each.
    8. Modify the example of Section 3.4 so that the chairman of the board may decide tie
votes. (The chairman of the board is a ﬁfth player who has no shares.) Find the Shapley
value.
     9. (a) (One large political party and three smaller ones.) Consider the weighted ma-
jority game with one large party consisting of 1/3 of the votes and three equal sized smaller
parties with 2/9 of the vote each. Find the Shapley value. Is the power of the large party
greater or less than its proportionate size?
     (b) (Two large political parties and three smaller ones.) Consider the weighted major-
ity game with two large parties with 1/3 of the votes each and three smaller parties with
1/9 of the votes each. Find the Shapley value. Is the combined power of the two larger
parties greater or less than its proportionate size?
     10. (L. S. Shapley (1981) “Measurement of Power in Political Systems” in Game The-
ory and its Applications Proceedings in Applied Mathematics vol. 24, Amer. Math. Soc.,
Providence RI.) “County governments in New York are headed by Boards of Supervisors.
Typically each municipality in a county has one seat, though a larger city may have two
or more. But the supervisorial districts are usually quite unequal in population, and an
eﬀort is made to equalize citizen representation throughout the county by giving individual
supervisors diﬀerent numbers of votes in council. Table 1 shows the situation in Nassau
County in 1964.
                                        Table 1
    District             Population                    %   No. of votes           %
                                                             
    Hempstead 1              728,625              57.1         31              27.0
    Hempstead 2                                                31              27.0
    Oyster Bay               285,545              22.4         28              24.3
    North Hempstead          213,335              16.7         21              18.3
    Long Beach                25,654               2.0           2              1.7
    Glen Cove                 22,752               1.8           2              1.7
       Totals              1,275,801 (sic)                    115
     Under this system, a majority of 58 out of 115 votes is needed to pass a measure. But
an inspection of the numerical possibilities reveals that the three weakest members of the
board actually have no voting power at all. Indeed, their combined total of 25 votes is
never enough to tip the scales. The assigned voting weights might just as well have been
(31, 31, 28, 0, 0, 0) — or (1, 1, 1, 0, 0, 0) for that matter.”
     The Shapley value is obviously (1/3,1/3,1/3,0,0,0). This is just as obviously unsatis-
factory. In 1971, the law was changed, setting the threshold required to pass legislation to

                                             IV – 17
63 votes rather than 58. Find the Shapley value under the changed rules, and compare to
the above table.
     11. In the United Nations Security Council, there are 15 voting nations, including the
“big ﬁve”. To pass a resolution, 9 out of the 15 votes are needed, but each of the big ﬁve
has veto power. One way of viewing this situation is as a weighted voting game in which
each of the big ﬁve gets 7 votes and each of the other 10 nations gets 1 vote, and 39 votes
are required to pass a resolution. Find the Shapley value.
     12. Cost Allocation. A scientist has been invited for consultation at three distant
cities. In addition to her consultation fees, she expects travel compensation. But since
these three cities are relatively close, travel expenses can be greatly reduced if she accom-
modates them all in one trip. The problem is to decide how the travel expenses should be
split among her hosts in the three cities. The one-way travel expenses among these three
cities, A, B, and C, and her home base, H, are given in the accompanying table (measured
in some unspeciﬁed units).
         Between H and A, cost = 7.               Between A and B, cost = 2.
         Between H and B, cost = 8.               Between A and C, cost = 4.
         Between H and C, cost = 6.               Between B and C, cost = 4.
    Assume that the value of the visit is the same for each of the hosts, say 20 units
each. Set the problem up as a three-person game in coalitional form by specifying the
characteristic function. Find the Shapley value. How much is the trip going to cost and
how much should each host contribute to travel expenses?
     13. A one-product balanced market. (Vorob’ev) Consider a market with one
completely divisible commodity where the set N of players is divided into two disjoint
sets, the buyers B and the sellers C, N = B ∪ C. Each seller owns a certain amount of
the commodity, say seller k ∈ C owns yk , and each buyer demands a certain amount, say
buyer j ∈ B demandsxj . We assume
                                  that the market is balanced, that is that the supply
is equal to demand, k∈C yk = j∈B xj . We may set up such a game in characteristic
function form by letting
                                                           
                                                         
                           v(S) = min          xj ,      yk
                                                           
                                          j∈S∩B       k∈S∩C


Thus, the value of a coalition is the total amount of trading that can be done among
members of the coalition. Find the Shapley value of the game. (Hint: for each permutation
of the players, consider also the reverse permutation in which the players enter the grand
coalition in reverse order.)
    14. (a) Consider the n-person game with players 1, 2, . . . , n, whose characteristic
function satisﬁes
                   v(S) = k if {1, . . . , k} ⊂ S but k + 1 ∈ S.
For example, v({2, 3, 5}) = 0, v({1, 3, 4, 6}) = 1 and v({1, 2, 3, 5, 6, 7}) = 3. Find the
Shapley value. (Use the method of Theorem 1.)

                                          IV – 18
     (b) Generalize to the case

                       v(S) = ak      if {1, . . . , k} ⊂ S   but k + 1 ∈ S,

where 0 ≤ a1 ≤ a2 ≤ . . . ≤ an .
     15. The Airport Game. (Littlechild and Owen (1973).) Consider the following cost
allocation problem. Building an airﬁeld will beneﬁt n players. Player j requires an airﬁeld
that costs cj to build, so to accommodate all the players, the ﬁeld will be built at a cost
of max1≤j≤n cj . How should this cost be split among the players? Suppose all the costs
are distinct and let c1 < c2 < · · · < cn . Take the characteristic function of the game to be

                                          v(S) = − max cj .
                                                      j∈S


     (a) Let Rk = {k, k +1, . . . , n} for k = 1, 2, . . . , n, and deﬁne the characteristic function
vk through the equation
                                      
                                          −(ck − ck−1 ) if S ∩ Rk = ∅
                           vk (S) =
                                          0             if S ∩ Rk = ∅.
              n
Show that v = k=1 vk .
    (b) Find the Shapley value.
     16. A Market with 1 Seller and m Buyers. Player 0 owns an object of no intrinsic
worth to himself. Buyer j values the object at aj dollars. Suppose a1 > a2 > · · · > am > 0.
Set up the characteristic functionand ﬁnd the Shapley value.
                                    m
(Answer: For the seller, φ0 (v) = k=1 ak /(k(k + 1)), and for the buyers,

                                       aj           m
                                                        ak
                         φj (v) =            −2                   .)
                                    j(j + 1)      (k − 1)k(k + 1)
                                                  k=j+1



    17. The Core of a Simple Game. In a simple game, (N, v), a player, i, is said to
be a veto player, if v(N − {i}) = 0.
    (a) Show that the core is empty if there are no veto players.
    (b) Show, conversely, that the core is not empty if there is at least one veto player.
    (c) Characterize the core.




                                               IV – 19
     4. The Nucleolus

     Another interesting value function for n-person cooperative games may be found in
the nucleolus, a concept introduced by Schmeidler (SIAM J. Appl. Math, 1969). Instead
of applying a general axiomatization of fairness to a value function deﬁned on the set of
all characteristic functions, we look at a ﬁxed characteristic function, v, and try to ﬁnd
an imputation x = (x1 , . . . , xn ) that minimizes the worst inequity. That is, we ask each
coalition S how dissatisﬁed it is with the proposed imputation x and we try to minimize
the maximum dissatisfaction.

     4.1 Deﬁnition of the Nucleolus. As a measure of the inequity of an imputation x
for a coalition S is deﬁned as the excess,
                                                      
                                   e(x, S) = v(S) −         xj ,
                                                      j∈S


which measures the amount (the size of the inequity) by which coalition S falls short of
its potential
            v(S) in the allocation x. Since the core is deﬁned as the set of imputations
such that i∈S xi ≥ v(S) for all coalitions S, we immediately have that an imputation x
is in the core if and only if all its excesses are negative or zero.
     On the principle that the one who yells loudest gets served ﬁrst, we look ﬁrst at those
coalitions S whose excess, for a ﬁxed allocation x, is the largest. Then we adjust x, if
possible, to make this largest excess smaller. When the largest excess has been made as
small as possible, we concentrate on the next largest excess, and adjust x to make it as
small as possible, and so on. An example should clarify this procedure.
    Example 1. The Bankruptcy Game. (O’Niell (1982)) A small company goes
bankrupt owing money to three creditors. The company owes creditor A $10,000 , creditor
B $20,000 , and creditor C $30,000. If the company has only $36,000 to cover these debts,
how should the money be divided among the creditors? A pro rata split of the money
would lead to the allocation of $6000 for A, $12,000 for B, and $18,000 for C, denoted
by x = (6, 12, 18) in thousands of dollars. We shall compare this allocation with those
suggested by the Shapley value and the nucleolus.
     First, we must decide on a characteristic function to represent this game. Of course
we will have v(∅) = 0 from the deﬁnition of characteristic function, and v(ABC) = 36
measured in thousands of dollars, By himself, A is not guaranteed to receive anything
since the other two could receive the whole amount; thus we take v(A) = 0. Similarly,
v(B) = 0. Creditor C is assured of receiving at least $6000, since even if A and B receive the
total amount of their claim, namely $30,000, that will leave $36,000 - $30,000 = $6000 for
C. Thus we take v(C) = 6. Similarly, we ﬁnd v(AB) = 6, v(AC) = 16, and v(BC) = 26.
     To ﬁnd the nucleolus of this game, let x = (x1 , x2 , x3 ) be an eﬃcient allocation (that is,
let x1 +x2 +x3 = 36), and look at the excesses as found in the table below. We may omit the
empty set and the grand coalition from consideration since their excesses are always zero.

                                            IV – 20
To get an idea of how to proceed, consider ﬁrst an arbitrary point, say the pro rata point
(6, 12, 18). As seen in the table, the vector of excesses is e = (−6, −12, −12, −12, −8, −4).
The largest of these numbers is −4 corresponding to the coalition BC. This coalition will
claim that every other coalition is doing better than it is. So we try to improve on things for
this coalition by making x2 +x3 larger, or, equivalently, x1 smaller (since x1 = 36−x2 −x3 ).
But as we decrease the excess for BC, the excess for A will increase at the same rate and
so these excesses will meet at −5, when x1 = 5. It is clear that no choice of x can make
the maximum excess smaller than −5 since at least one of the coalitions A or BC will have
excess at least −5. Hence, x1 = 5 is the ﬁrst component of the nucleolus.
     S     v(S)   e(x, S)          (6, 12, 18) (5, 12, 19)   (5, 10.5, 20.5) (6, 11, 19)
     A       0      −x1                −6          −5              −5            −6
     B       0      −x2               −12         −12            −10.5          −11
     C       6     6 − x3             −12         −13            −14.5          −13
     AB      6  6 − x1 − x2           −12         −11             −9.5          −11
     AC     16 16 − x1 − x3            −8          −8             −9.5           −9
     BC     26 26 − x2 − x3            −4          −5              −5            −4
    Though x1 is ﬁxed, we still have x2 and x3 to vary subject to x2 + x3 = 36 − 5 = 31,
and we choose them to make the next largest excess smaller. If we choose the point
x = (5, 12, 19) as the next guess, we see that the next largest excess after the −5’s is the
−8 corresponding to coalition AC. To make this smaller, we must increase x3 (decrease x2 ).
But as we do so, the excesses for coalitions B and AB increase at the same rate. Since the
excess for coalition AB starts closer to −8 we ﬁnd x2 and x3 so that e(x, AB) = e(x, AC).
This occurs at x2 = 10.5 and x3 = 20.5. The nucleolus is therefore (5, 10.5, 20.5).
    It is of interest to compare this solution to the Shapley value. We may compute the
Shapley value by any of the methods given in Section 3. Using the formula, we ﬁnd

                  φA = (1/3)(0) + (1/6)(6) + (1/6)(10) + (1/3)(10) = 6
                  φB = (1/3)(0) + (1/6)(6) + (1/6)(20) + (1/3)(20) = 11
                  φC = (1/3)(6) + (1/6)(16) + (1/6)(26) + (1/3)(30) = 19

The last column in the table shows the excesses for the Shapley value.
     It is time to deﬁne more precisely the concept of the nucleolus of a game with char-
acteristic function v. First we deﬁne an ordering on vectors that reﬂects the notion of
smaller maximum excess as given in the above example.
     Deﬁne O(x) as the vector of excesses arranged in decreasing (nonincreasing) order. In
the example, if x = (6, 12, 18) then O(x) = (−4, −6, −8, −12, −12, −12). On the vectors
O(x) we use the lexographic order. We say a vector y = (y1 , . . . , yk ) is lexographically
less than a vector z = (z1 , . . . , zk ), and write y <L z, if y1 < z1 , or y1 = z1 and y2 < z2 ,
or y1 = z1 , y2 = z2 and y3 < z3 ,. . ., or y1 = z1 , . . ., yk−1 = zk−1 and yk < zk .
      That is, y <L z if in the ﬁrst component in which y and z diﬀer, that component of y
is less than the corresponding component of z. Similarly, we write y ≤L z if either y <L z

                                            IV – 21
or y = z. The nucleolus is an eﬃcient allocation that minimizes O(x) in the lexographic
ordering.
                            n
Deﬁnition. Let X = {x : j=1 xj = v(N )} be the set of eﬃcient allocations. We say
that a vector ν ∈ X is a nucleolus if for every x ∈ X we have O(ν) ≤L O(x).

    4.2 Properties of the Nucleolus. The main properties of the nucleous are stated
without proof in the following theorem.

Theorem 1. The nucleolus of a game in coalitional form exists and is unique. The
nucleolus is group rational, individually rational, and satisﬁes the symmetry axiom and
the dummy axiom. If the core is not empty, the nucleolus is in the core.

     The most diﬃcult part to prove is the uniqueness of the nucleolus. See the book of
Owen for a discussion. Since the nucleolus always exists and is unique, we may speak of the
nucleolus of a game. Like the Shapley value, the nucleolus will satisfy individual rationality
if the characteristic function is super-additive or, more generally, if it is monotone in the
sense that for all players i and for all coalitions S not containing i, we have v(S)+ v({i}) ≤
v(S ∪ {i}). In contrast to the Shapley value, the nucleolus will be in the core provided the
core is not empty. (Exercise 1.)
     Since the nucleolus satisﬁes the ﬁrst three axioms of the Shapley value, it does not
satisfy the linearity axiom.
     It is interesting to see how the nucleolus and the Shapley value change in the bankrupt
company example as the total remaining assets of the company change from $0 to $60,000,
that is, as v(N ) changes from 0 to 60. Consider the nucleolus. If v(N ) is between 0 and
15, the nucleolus divides this amount equally among the players. For v(N ) between 15
and 25, the nucleolus splits the excess above 15 equally between B and C, while for v(N )
between 25 and 35, all the excess above 25 goes to C. For v(N ) between 35 and 45, the
excess above 35 is split between B and C, and for v(N ) between 45 and 60, the excess
above 45 is divided equally among the three players.
       Nucleolus
Amount of v(N ) between      0 and 15    share equally
                             15 and 25   B and C share
                             25 and 35   C gets it all
                             35 and 45   B and C share
                             45 and 60   share equally
       Shapley Value
Amount of v(N ) between       0 and 10   share equally
                             10 and 20   B and C share
                             20 and 40   C gets 2/3rds and A and B get 1/6th
                             40 and 50   B and C share
                             50 and 60   share equally
     One notes that at v(N ) = 30, the nucleolus and the Shapley value coincide with the
pro rata point. Compared to the pro rata point, both the Shapley value and the nucleolus

                                           IV – 22
favor the weaker players if v(N ) is small, and favor the stronger players if v(N ) is large,
more so for the Shapley value than the nucleolus.

     4.3 Computation of the Nucleolus. The nucleolus is more diﬃcult to compute
than the Shapley value. In fact, the ﬁrst step of ﬁnding the nucleolus is to ﬁnd a vector
x
= (x1 , . . . , xn ) that minimizes the maximum of the excesses e(x, S) over all S subject to
   xj = v(N ). This problem of minimizing the maximum of a collection of linear functions
subject to a linear constraint is easily converted to a linear programming problem and can
thus be solved by the simplex method, for example. After this is done, one may have to
solve a second linear programming problem to minimize the next largest excess, and so on.
    For n = 3, these problems are not hard, but they may be more diﬃcult than the
example of the bankrupt company. It may be useful to work out another example. Suppose
                       v({A}) = −1     v({AB}) = 3
         v(∅) = 0      v({B}) = 0      v({AC}) = 4         v({ABC}) = 5
                       v({C}) = 1      v({BC}) = 2
Alone, A is in the worst position, but in forming coalitions he is more valuable. The
Shapley value is φ = (10/6, 7/6, 13/6). Let us ﬁnd the nucleolus.
     As an initial guess, try (1, 1, 3). In the table below, we see that the maximum excess
occurs at the coalition AB. To improve on this, we must decrease x3 . Since the next
largest excess is for coalition AC, we keep x2 ﬁxed (increase x1 ) and choose x3 = 2 to
make the excess for AB equal to the excess for AC. This leads to the point (2, 1, 2) whose
largest excess is 0, occurring at coalitions AB and AC. To make this smaller, we must
decrease both x2 and x3 . This involves increasing x1 , and will increase the excess for BC.
We can see that the best we can do will occur when the excesses for AB and AC and BC
are all equal. Solving the three equations,

                    x3 − 2 = x2 − 1 = x1 − 3,     and x1 + x2 + x3 = 5,

we ﬁnd x3 = x2 + 1 and x1 = x2 + 2 so that the solution is x = (8/3, 2/3, 5/3). This is the
nucleolus.
         S     v(S)        e(x, S)              (1, 1, 3) (2, 1, 2)   (8/3, 2/3, 5/3)
         A      −1        −1 − x1                 −2        −3            −11/3
         B       0          −x2                   −1        −1            −2/3
         C       1         1 − x3                 −2        −1            −2/3
         AB      3  3 − x1 − x2 = x3 − 2            1         0           −1/3
         AC      4  4 − x1 − x3 = x2 − 1            0         0           −1/3
         BC      2  2 − x2 − x3 = x1 − 3          −2        −1            −1/3
    Compared to the Shapley value, the nucleolus is very generous to Player 1. The
Shapley value gives Player 1 one-third of v(N ), whereas the nucleolus gives Player 1 more
than half v(N ).



                                           IV – 23
    4.4 Exercises.
    1. Show that if the core is not empty, then the nucleolus is in the core.
    2. Show that for a constant-sum three-person game, the nucleolus is the same as the
Shapley value.
     3. The Cattle Drive. Rancher A has some cattle ready for market, and he foresees
a proﬁt of $1200 on the sale. But two other ranchers lie between his ranch and the market
town. The owners of these ranches, B and C, can deny passage through their land or
require payment of a suitable fee. The question is: What constitutes a suitable fee? The
characteristic function may be taken to be: v(A) = v(B) = v(C) = v(BC) = 0 and
v(AB) = v(AC) = v(ABC) = 1200.
(a) Find the core, and note that it consists of one point. This point must then be the
nucleolus. (Why?)
(b) Find the Shapley value.
(c) Which do you think is more suitable for settling the question of a fee, the nucleolus or
the Shapley value, and why?
    4. Find the nucleolus for Exercise 3.5.1. Compare to the Shapley value. How could
you tell before computing it that the nucleolus was not the same as the Shapley value?
    5. Find the nucleolus for Exercise 3.5.2.
     6. Find the nucleolus for Exercise 3.5.4(a). You may assume that the nucleolus
satisﬁes the symmetry axiom.
     7. Find the nucleolus for Exercise 3.5.6. You may assume that the nucleolus satisﬁes
the dummy axiom.
     8. Cost Allocation. Three farms are connected to each other and to the main
highway by a series of rough trails as shown in the ﬁgure. Each farmer would beneﬁt by
having a paved road connecting his farm to the highway. The amounts of these beneﬁts
are indicated in square brackets [. . .]. The costs of paving each section of the trails are
also indicated on the diagram.

                           [10]                [9]      [8]
                            A         8         B 3      C
                                                          2
                                  6        7
                                                         2
                                                5
                                      5                       6
                                                    5

                                          Highway

    It is clear that no single farmer would ﬁnd it proﬁtable to build his own road, but a
cooperative project would obviously be worthwhile.
    (a) Determine the characteristic function.

                                           IV – 24
    (b) Find the Shapley value.
    (c) Find the nucleolus.
     9. The Landowner and the Peasants. Here is a generalization of symmetric games
allowing one special player. The game is played with one landowner and m peasants,
n = m + 1 players. The peasants can produce nothing by themselves, but neither can the
landowner. All peasants are interchangeable. If k peasants and the landowner cooperate,
they can jointly receive the amount f(k), where 0 = f(0) < f(1) < f(2) < · · · < f(m).
We denote the landowner as player number 1 and the peasants as players 2 through n.
Thus,                                
                                       f(|S| − 1) if 1 ∈ S
                              v(S) =
                                       0           if 1 ∈ S.
(a) Suppose m = 3 and f(x) = x. Find the Shapley value.
(b) Suppose m = 3 and f(x) = x. Find the nucleolus.
(c) Find a simple formula for the Shapley value for general m and f(x).
(d) Find a general formula for the nucleolus of this game.
     10. An Assignment Game. Two house owners, A and B, are expecting to sell their
houses to two potential buyers, C and D, each wanting to buy one house at most. Players
A and B value their houses at 10 and 20 respectively, in some unspeciﬁed units. In the
same units, Player C values A’s house at 14 and B’s house at 23, while Player D values
A’s house at 18 and B’s house at 25.
(a) Determine a characteristic function for the game.
(b) Find the Shapley value.
(c) Find the nucleolus.
    11. Find the nucleolus for the n-person game of Exercise 3.5.14 (a). (Answer: ν =
(n/2, 1, 1/2, . . . , 1/2).)




                                        IV – 25
                             Appendix 1: Utility Theory


     Much of the theory presented is based on utility theory at a fundamental level. This
theory gives a justiﬁcation for our assumptions (1) that the payoﬀ functions are numerical
valued and (2) that a randomized payoﬀ may be replaced by its expectation. There are
many expostions on this subject at various levels of sophistication. The basic theory was
developed in the book of Von Neumann and Morgenstern (1947). Further developments are
given in Savage (1954), Blackwell and Girshick (1954) and Luce and Raiﬀa (1957). More
recent descriptions may be found in Owen (1982) and Shubik (1984), and a more complete
exposition of the theory may be found in Fishburn (1988). Here is a brief description of
the basics of linear utility theory.
     The method a ‘rational’ person uses in choosing between two alternative actions, a1
and a2 , is quite complex. In general situations, the payoﬀ for choosing an action is not
necessarily numerical, but may instead represent complex entities such as “you receive a
ticket to a ball game tomorrow when there is a good chance of rain and your raincoat is
torn” or “you lose ﬁve dollars on a bet to someone you dislike and the chances are that
he is going to rub it in”. Such entities we refer to as payoﬀs or prizes. The ‘rational’
person in choosing between two actions evaluates the value of the various payoﬀs and
balances it with the probabilities with which he thinks the payoﬀs will occur. He may
do, and usually does, such an evaluation subconsciously. We give here a mathematical
model by which such choices among actions are made. This model is based on the notion
that a ‘rational’ person can express his preferences among payoﬀs in a method consistent
with certain axioms. The basic conclusion is that the ‘value’ to him of a payoﬀ may be
expressed as a numerical function, called a utility, deﬁned on the set of payoﬀs, and that
the preference between lotteries giving him a probability distribution over the payoﬀs is
based only on the expected value of the utility of the lottery.
    Let P denote the set of payoﬀs of the game. We use P , P1 , P2 , and so on to denote
payoﬀs (that is, elements of P).

Deﬁnition. A preference relation on P, or simply preference on P, is a (weak) linear
ordering, , on P; that is,
(a) (linearity) if P1 and P2 are in P, then either P1  P2 or P2  P1 (or both), and
(b) (transitivity) if P1 , P2 and P3 are in P, and if P1  P2 and P2  P3 , then P1  P3 .
If P1  P2 and P2  P1 , then we say P1 and P2 are equivalent and write P1 ≃ P2 .

     We assume that our ‘rational’ being can express his preferences over the set P in a
way that is consistent with some preference relation. If P1  P2 and P1 ≃ P2 , we say that
our rational person prefers P2 to P1 and write P1 ≺ P2 . If P1 ≃ P2 , we say that he is
indiﬀerent between P1 and P2 . The statement P1  P2 means either he either prefers P2
to P1 or he is indiﬀerent between them.
    Unfortunately, just knowing that a person prefers P2 to P1 , gives us no indication
of how much more he prefers P2 to P1 . In fact, the question does not make sense until

                                           A–1
a third point of comparison is introduced. We could, for example, ask him to compare
P2 with the joint payoﬀ of P1 and $100 in order to get some comparison of how much
more he prefers P2 to P1 in terms of money. We would like to go farther and express all
his preferences in some numerical form. To do this however requires that we ask him to
express his preferences on the space of all lotteries over the payoﬀs.

Deﬁnition. A lottery is a ﬁnite probability distribution over the set P of payoﬀs. We
denote the set of lotteries by P ∗ .

   (A ﬁnite probability distribution is one that gives positive probability to only a ﬁnite
number of points.)
    If P1 , P2 and P3 are payoﬀs, the probability distribution, p, that chooses P1 with
probability 1/2, P2 with probability 1/4, and P3 with probability 1/4 is a lottery. We use
lower case letters, p, p1 , p2 to denote elements of P ∗ . Note that the lottery p that gives
probability 1 to a ﬁxed payoﬀ P may be identiﬁed with P , since receiving payoﬀ P is the
same as receiving payoﬀ P with probability 1. With this identiﬁcation, we may consider
P to be a subset of P ∗ .
     We note that if p1 and p2 are lotteries and 0 ≤ λ ≤ 0, then λp1 + (1 − λ)p2 is also
a lottery. It is that lottery that ﬁrst tosses a coin with probability λ of heads; if heads
comes up, then it uses p1 to choose an element of P and if tails comes up, it uses p2 . Thus
λp1 + (1 − λ)p2 is an element of P ∗ . Mathematically, a lottery of lotteries is just another
lottery.
      We assume now that our ‘rational’ person has a preference relation not only over P
but over P ∗ as well. One very simple way of setting up a preference over P ∗ is through a
utility function.

Deﬁnition. A utility function is a real-valued function deﬁned over P.

     Given a utility function, u(P ), we may extend the domain of u to the set P ∗ of all
lotteries by deﬁning u(p) for p ∈ P ∗ to be the expected utility: i.e. if p ∈ P ∗ is the lottery
that chooses P1 , P2 , . . . , Pk with respective probabilities λ1 , λ2 , . . . , λk , where λi ≥ 0 and

   λi = 1, then
                                                 k
                                          u(p) =    λi u(Pi )                                        (1)
                                                 i=1
is the expected utility of the payoﬀ for lottery p. Thus given a utility u, a simple preference
over P ∗ is given by
                          p1  p2       if and only if      u(p1 ) ≤ u(p2 ),                        (2)
i.e. that lottery with the higher expected utility is preferred.
     The basic question is, can we go the other way around? Given an arbitrary preference,
 on P ∗ , does there exist a utility u deﬁned on P such that (2) holds? The answer is no
in general, but under the following two axioms on the preference relation, the answer is
yes!

                                                A–2
A1. If p1 , p2 and q are in P ∗ , and 0 < λ ≤ 1, then

              p1  p2     if, and only if     λp1 + (1 − λ)q  λp2 + (1 − λ)q.             (3)

A2. For arbitrary p1 , p2 and q in P ∗ ,

        p1 ≺ p2      implies     there exists a λ > 0 such that p1 ≺ λq + (1 − λ)p2        (4)

and similarly,

        p1 ≺ p2      implies     there exists a λ > 0 such that λq + (1 − λ)p1 ≺ p2        (5)

     Axiom A1 is easy to justify. Consider a coin with probability λ of coming up heads. If
the coin comes up tails you receive q. If it comes up heads you are asked to choose between
p1 and p2 . If you prefer p2 , you would naturally choose p2 . This axiom states that if you
had to decide between p1 and p2 before learning the outcome of the toss, you would make
the same decision. A minor objection to this axiom is that we might be indiﬀerent between
λp1 + (1 − λ)q and λp2 + (1 − λ)q if λ is suﬃciently small, say λ = 10−100 , even though
we prefer p1 to p2 . Another objection comes from the person who dislikes gambles with
random payoﬀs. He might prefer a p2 that gives him $2 outright to a gamble, p1 , giving
him $1 with probability 1/2 and $3.10 with probability 1/2. But if q is $5 for sure and
λ = 1/2, he might prefer λp1 + (1 − λ)q to λp2 + (1 − λ)q on the basis of larger expected
monetary reward, because the payoﬀ is random in either case.
     Axiom A2 is more debatable. It is called the continuity axiom. Condition (4) says
that if p1 ≺ λq + (1 − λ)p2 when λ = 0, then it holds for λ suﬃciently close to 0. It might
not be true if q is some really horrible event like death. It is safe to assume that for most
people, p2 = $100 is strictly preferred to p1 = $1, which is strictly preferred to q = death.
Yet, would you ever prefer a gamble giving you death with probability λ and $100 with
probability 1 − λ, for some positive λ, to receiving $1 outright? If not, then condition (4)
is violated. However, people do not behave as if avoiding death is an overriding concern.
They will drive on the freeway to get to go the theater or the ballpark for entertainment,
even though they have increased the probability of death (by a very small amount) by
doing so. At any rate, Axiom A2 implies that there is no payoﬀ inﬁnitely less desirable or
inﬁnitely more desirable than any other payoﬀ.

Theorem 1. If a preference relation, , on P ∗ satisﬁes A1 and A2, then there exists a
utility, u, deﬁned on P that satisﬁes (2). Furthermore, u is uniquely determined up to
change of location and scale.

      If a utility u(P ) satisﬁes (2), then for arbitrary real numbers a and b > 0, the utility
û(P ) = a + bu(P ) also satisﬁes (2). Thus the uniqueness of u up to change of location and
scale the strongest uniqueness that can be obtained.
    One may conclude from Theorem 1 that if a person has a preference relation on P ∗
that satisﬁes Axioms 1 and 2, then that person is acting as if his preferences were based

                                            A–3
on a utility deﬁned on P and that of two lotteries in P ∗ he prefers the one with the larger
expected utility. Ordinarily, the person does not really think in terms of a utility function
and is unaware of its existence. However, a utility function giving rise to his preferences
may be approximated by eliciting his preferences from a series of questions.
     Countable Lotteries and Bounded Utility. It is sometimes desirable to extend
the notion of a lottery to countable probability distributions, i.e. distributions giving all
their weight to a countable number of points. If this is done, it must generally be assumed
that utility is bounded. The reason for this is that if equation (1) is to be satisﬁed
for countable lotteries and if u is unbounded, then there will exist lotteries p such that
u(p) = ±∞. The reason is as follows.
     Suppose we have a utility function u(P ) on P, and suppose thatfor a lottery, p,
                                                                                     ∞
that chooses P1 , P2 , . . . with respective probabilities λ1 , λ2 , . . . such that n=1 λn = 1, the
extension of u to countable lotteries satisﬁes
                                                ∞
                                                
                                      u(p) =          λn u(Pn ).                               (1 )
                                                n=1


If u(P ) is unbounded, say unbounded above, then we could ﬁnd a sequence, P1 , P2 , . . .,
such that u(Pn ) ≥ 2n . Then if we consider the lottery, p, that chooses Pn with probability
2−n for n = 1, 2, . . ., we would have
                                    ∞
                                                        ∞
                                                         
                           u(p) =         2−n u(Pn ) ≥         2−n 2n = ∞.
                                    n=1                  n=1

Then p would be a lottery that is inﬁnitely more desirable than P1 , say.
    Since the extension of utility to countable lotteries seems innocuous, it is generally
thought that utility indeed should be considered to be bounded.
     Exercises. 1. Does every preference given by a utility as in (1) satisfy A1 and A2?
    2. Take P = {P1 , P2 }, and give an example of a preference on P ∗ satisfying A2 but
not A1.
    3. Take P = {P1 , P2 , P3 }, and give an example of a preference on P ∗ satisfying A1
but not A2.




                                                A–4
                Appendix 2: Contraction Maps and Fixed Points


Deﬁnition 1. A metric space, (X, d), consists of a nonempty set X of points together
with a function d from X × X to the reals satisfying the four following properties for all
x, y and z in X:
     (1) d(x, x) = 0 for all x.
     (2) d(x, y) > 0 for all x = y.
     (3) d(x, y) = d(y, x) for all x and y.
     (4) d(x, y) ≤ d(x, z) + d(z, y)

Deﬁnition 2. A metric space, (X, d), is said to be complete if every Cauchy sequence
in X converges to a point in X. In other words, for any sequence xn ∈ X for which
maxn>m d(xm , xn ) → 0 as m → ∞, the exists a point x∗ ∈ X such that d(xn , x∗ ) → 0 as
n → ∞.

Examples. Euclidean space in N -dimensions, RN , with points x = (x1 , . . . , xN ), is an
example of a complete metric  space under any of the following metrics.
1. Euclidean distance, x = x21 + x22 + · · · + x2N .
2. L1 distance: x = |x1 | + |x2 | + · · · + |xN |.
3. Sup norm: x = max{|x1 |, |x2 |, . . . , |xN |}.
    These metrics are equivalent in the sense that if for one of them xn → 0 for a
sequence xn ∈ X, then xn  → 0 for the others also. In what follows, we take a ﬁxed
metric space (X, d).

Deﬁnition 3. A map T : X → X is a contraction map if there is a positive constant
c < 1, called the contraction factor, such that

                                    d(T x, T y) ≤ c d(x, y)

for all x ∈ X and y ∈ X.

Deﬁnition 4. A point, x ∈ X, is said to be a ﬁxed point of a map T : X → X, if T x = x.

Contraction Mapping Theorem. A contraction map, T , on a complete metric space
(X, d) has a unique ﬁxed point, x0 . Moreover, for any y ∈ X, d(T n y, x0 ) → 0 as n → ∞.

Proof. Let c < 1 denote the contraction factor of T . Then, d(T 2 y, T y) ≤ c d(T y, y), and
inductively, d(T n+1 y, T n y) ≤ cn d(T y, y) for every n. The inequality,

                      d(T n+1 y, y) ≤ d(T n+1 y, T n y) + · · · + d(T y, y)
                                    ≤ (cn + · · · + 1)d(T y, y)                         (∗)
                                    ≤ d(T y, y)/(1 − c),

                                             A–5
for all n > 0, implies that for all n > m,

                                             d(T m+1 y, T m y)   cm d(T y, y)
                       d(T   n+1
                                   y, T y) ≤
                                       m
                                                               ≤              .
                                                  1−c               1−c

This shows that {T n y} is a Cauchy sequence. Hence, there is a point x0 ∈ Rd such that
T n y → x0 as n → ∞. That x0 is a ﬁxed point follows from

                         d(T x0 , x0 ) ≤ d(T x0 , T n y) + d(T n y, x0 )
                                        ≤ c d(T n−1 y, x0 ) + d(T n y, x0 ) → 0,

as n → ∞, so that d(T x0 , x0 ) = 0. The ﬁxed point must be unique because if z is another
ﬁxed point, then d(x0 , z) = d(T x0 , T z) ≤ c d(x0 , z) shows that d(x0 , z) = 0.

Corollary 1. For any y ∈ X, d(T n y, x0 ) ≤ cnd(y, x0 ), where x0 is the ﬁxed point of T .

Proof. d(T n y, x0 ) = d(T n y, T n x0 ) ≤ cn d(y, x0 ).

Corollary 2. For any y ∈ X, d(x0 , T y) ≤ 1−c
                                           c
                                              d(T y, y), where x0 is the ﬁxed point of T .

Proof. From (*), letting n → ∞, we have d(x0 , y) ≤ d(T y, y)/(1 − c). Therefore,
d(x0 , T y) ≤ c d(x0 , y) ≤ c d(T y, y)/(1 − c).

    Corollary 1 gives a bound on the rate of convergence of T n y to x0 . Corollary 2 gives
an upper bound on the distance of T y to x0 based on the distance from y to T y.


   Proof of Theorem 1 of Section II.6. This proof is based on the Contraction
Mapping Theorem and the following simple lemma.

Lemma. If A and B are two matrices of the same dimensions, then

                               |Val(A) − Val(B)| ≤ max |aij − bij |.
                                                           i,j




Proof. Let z = maxi,j |aij − bij |. Then Val(A) + z = Val(aij + z) ≥ Val(B), because
bij ≤ aij + z for all i and j. Similarly, Val(B) + z ≥ Val(A), completing the proof.

Proof of Theorem 1. Let T be the map from RN to RN deﬁned by T x = y where
yk = Val A(k) (x)) for k = 1, . . . , N, where A(k) (x)) is the matrix of equation (10) of
Section II.6. We show that T is a contraction map with contraction factor c = 1 − s under

                                                  A–6
the sup norm metric, x = maxk {|xk | : k = 1, . . . , N}. Using the Lemma,

                                  (k) N
                                            (k)      (k) N
                                                                (k) 
           T x − T y = max |Val aij +   Pij x − Val aij +   Pij y |
                             k
                                                       =1                    =1
                                    
                                    N
                                           (k)
                                                        
                                                        N
                                                                  (k)
                        ≤ max |           Pij x −                Pij y |
                           k,i,j
                                     =1                     =1
                                   
                                   N
                                          (k)
                        ≤ max            Pij |x − y |
                           k,i,j
                                    =1
                                    
                                    N
                                           (k)
                        ≤ (max            Pij )x − y
                            k,i,j
                                    =1
                        = (1 − s)x − y

Assumption (6) insures that the contraction factor c = 1 − s is less than 1. Therefore by
the Contraction Mapping Theorem, there is a unique vector v such that T v = v. But this
is exactly equation (9) of Theorem 1.
     We must now show that the suggested stationary optimal strategies guarantee the
value. Let x∗ = (p1 , . . . , pN ) denote the suggested stationary strategy for Player I where
pk is optimal for him for the matrix A(k) (v). We must show that in the stochastic game
that starts at state k, this gives an expected return of at least v(k) no matter what Player
II does. Let n be arbitrary and consider the game up to stage n. If at stage n, play is
                                                  (h)  N       (h)                         (h)
forced to stop and the payoﬀ at that stage is aij +        =1 Pij ()v(l) rather than just aij ,
assuming the state at that time were h, then x∗ would be optimal for this multistage game
and the value would be v(k). Hence in the inﬁnite stage game, Player I’s expected payoﬀ
for the ﬁrst n stages is at least

                                         
                                         N
                                                 (h)
              v(k) − (1 − s) max
                             n
                                               Pij ()v() ≥ v(k) − (1 − s)n max v().
                                 h,i,j
                                          =1


and for the remaining stages is bounded below by (1− s)n M/s, as in (7). Therefore, Player
I’s expected payoﬀ is at least

                          v(k) − (1 − s)n max v() − (1 − s)n M/s.

Since this is true for all n and n is arbitrary, Player I’s expected payoﬀ is at least v(k).
By symmetry, Player II’s expected loss is at most v(k). This is true for all k, proving the
theorem.




                                                       A–7
                Appendix 3: Existence of Equilibria in Finite Games

    We give a proof of Nash’s Theorem based on the celebrated Fixed Point Theorem of
L. E. J. Brouwer. Given a set C and a mapping T of C into itself, a point z ∈ C is said
to be a ﬁxed point of T , if T (z) = z.

The Brouwer Fixed Point Theorem. Let C be a nonempty, compact, convex set in a
ﬁnite dimensional Euclidean space, and let T be a continuous map of C into itself. Then
there exists a point z ∈ C such that T (z) = z.

     The proof is not easy. You might look at the paper of K. Kuga (1974), “Brouwer’s
Fixed Point Theorem: An Alternate Proof”, SIAM Journal of Mathematical Analysis,
5, 893-897. Or you might also try Y. Kannan (1981), “An elementary proof of the no
retraction theorem”, Amer. Math. Monthly 88, 264-268, or P. Lax (1999) “Change of
variables in multiple integrals”, Amer. Math. Monthly 106, 497-501.
     Now consider a ﬁnite n-person game with the notation of Section III.2.1. The pure
strategy sets are denoted by X1 , . . . , Xn , with Xk consisting of mk ≥ 1 elements, say
Xk = {1, . . . , mk }. The space of mixed strategies of Player k is given by Xk∗ ,
                                                                                mk
      Xk∗ = {pk = (pk,1 , . . . , pk,mk ) : pk,i ≥ 0 for i = 1, . . . , mk , and i=1 pk,i = 1}. (1)

    For a given joint pure strategy selection, x = (i1 , . . . , in ) with ij ∈ Xj for all j, the
payoﬀ, or utility, to Player k is denoted by uk (i1 , . . . , in ) for k = 1, . . . , n. For a given joint
mixed strategy selection, (p1 , . . . , pn ) with pj ∈ Xj∗ for j = 1, . . . , n, the corresponding
expected payoﬀ to Player k is given by gk (p1 , . . . , pn ),

                                              
                                              m1            
                                                            mn
                    gk (p1 , . . . , pn ) =           ···           p1,i1 · · · pn,in uk (i1 , . . . , in ).   (2)
                                              i1 =1         in =1

Let us use the notation gk (p1 , . . . , pn |i) to denote the expected payoﬀ to Player k if Player
k changes strategy from pk to the pure strategy i ∈ Xk ,

                      gk (p1 , . . . , pn |i) = gk (p1 , . . . , pk−1 , δi , pk+1 , . . . , pn ).              (3)

where δi represents the probability distribution giving probability 1 to the point i. Note
that gk (p1 , . . . , pn ) can be reconstructed from the gk (p1 , . . . , pn |i) by

                                                            
                                                            mk
                              gk (p1 , . . . , pn ) =             pk,i gk (p1 , . . . , pn |i)                 (4)
                                                            i=1


        A vector of mixed strategies, (p1 , . . . , pn ), is a strategic equilibrium if for all k =
1, . . . , n, and all i ∈ Xk ,

                                   gk (p1 , . . . , pn |i) ≤ gk (p1 , . . . , pn ).                            (5)

                                                            A–8
Theorem. Every ﬁnite n-person game in strategic form has at least one strategic equi-
librium.

Proof. For each k, Xk∗ is a compact convex subset of mk dimensional Euclidean space,
and so the product,
             n     C = X1∗ × · · · × Xn∗ , is a compact convex subset of a Euclidean space
of dimension i=1 mi . For z = (p1 , . . . , pn ) ∈ C, deﬁne the mapping T (z) of C into C by

                                       T (z) = z  = (p1 , . . . , pn )                               (6)

where
                             pk,i + max(0, gk (p1 , . . . , pn |i) − gk (p1 , . . . , pn ))
                  pk,i =      mk                                                           .           (7)
                           1 + j=1   max(0, gk (p1 , . . . , pn |j) − gk (p1 , . . . , pn ))
                                                                             mk 
Note that pk,i ≥ 0, and the denominator is chosen so that i=1                          pk,i = 1. Thus z  ∈
C. Moreover the function f(z) is continuous since each gk (p1 , . . . , pn ) is continuous.
Therefore, by the Brouwer Fixed Point Theorem, there is a point, z  = (q1 , . . . , qn ) ∈ C
such that T (z  ) = z  . Thus from (7)

                                       qk,i + max(0, gk (z  |i) − gk (z  ))
                            qk,i =       mk                                   .                        (8)
                                     1 + j=1   max(0, gk (z  |j) − gk (z  ))

for all k = 1, . . . , n and i = 1, . . . , mn . Since from (4) gk (z  ) is an average of the numbers
gk (z  |i), we must have gk (z  |i) ≤ gk (z  ) for at least one i for which  mk qk,i > 0, so that
                             
max(0, gk (z |i) − gk (z )) = 0 for that i. But then (8) implies that j=1 max(0, gk (z |j) −
gk (z  )) = 0, so that gk (z  |i) ≤ gk (z  ) for all k and i. From (5) this shows that z  =
(q1 , . . . , qn ) is a strategic equilibrium.
     Remark. From the deﬁnition of T (z), we see that z = (p1 , . . . , pn ) is a strategic
equilibrium if and only if z is a ﬁxed point of T . In other words, the set of strategic
equilibria is given by {z : T (z) = z}. If we could solve the equation T (z) = z we
could ﬁnd the equilibria. Unfortunately, the equation is not easily solved. The method of
iteration does not ordinarily work because T is not a contraction map.




                                                    A–9



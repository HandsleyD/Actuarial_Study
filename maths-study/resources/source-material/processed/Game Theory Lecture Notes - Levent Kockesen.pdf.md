---
normalized_id: shared-lecture-notes-game-theory-lecture-notes-levent-kockesen
exam_code: SHARED
material_scope: game theory lecture notes - levent kockesen.pdf
material_group: shared
document_type: lecture-notes
source_repo_path: resources/source-material/shared/Game Theory Lecture Notes - Levent Kockesen.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-lecture-notes-game-theory-lecture-notes-levent-kockesen

Chapter 1


Introduction

                           1.1     W HAT IS G AME T HEORY ?

    We, humans, cannot survive without interacting with other humans, and ironically, it some-
times seems that we have survived despite those interactions. Production and exchange require
cooperation between individuals at some level but the same interactions may also lead to disastrous
confrontations. Human history is as much a history of fights and wars as it is a history of success-
ful cooperation. Many human interactions carry the potentials of cooperation and harmony as well
as conflict and disaster. Examples are abound: relationships among couples, siblings, countries,
management and labor unions, neighbors, students and professors, and so on.
    One can argue that the increasingly complex technologies, institutions, and cultural norms that
have existed in human societies have been there in order to facilitate and regulate these interactions.
For example, internet technology greatly facilitates buyer-seller transactions, but also complicates
them further by increasing opportunities for cheating and fraud. Workers and managers have usu-
ally opposing interests when it comes to wages and working conditions, and labor unions as well as
labor law provide channels and rules through which any potential conflict between them can be ad-
dressed. Similarly, several cultural and religious norms, such as altruism or reciprocity, bring some
order to potentially dangerous interactions between individuals. All these norms and institutions
constantly evolve as the nature of the underlying interactions keep changing. In this sense, under-
standing human behavior in its social and institutional context requires a proper understanding of
human interaction.
    Economics, sociology, psychology, and political science are all devoted to studying human
behavior in different realms of social life. However, in many instances they treat individuals in
isolation, for convenience if not for anything else. In other words, they assume that to understand

                                                  1
                                2                                                                                          Introduction


                                one individual’s behavior it is safe to assume that her behavior does not have a significant effect on
                                other individuals. In some cases, and depending upon the question one is asking, this assumption
                                may be warranted. For example, what a small farmer in a local market, say in Montana, charges for
                                wheat is not likely to have an effect on the world wheat prices. Similarly, the probability that my
                                vote will change the outcome of the U.S. presidential elections is negligibly small. So, if we are
                                interested in the world wheat price or the result of the presidential elections, we may safely assume
                                that one individual acts as if her behavior will not affect the outcome.
                                    In many cases, however, this assumption may lead to wrong conclusions. For example, how
                                much our farmer in Montana charges, compared to the other farmers in Montana, certainly affects
                                how much she and other farmers make. If our farmer sets a price that is lower than the prices
                                set by the other farmers in the local market, she would sell more than the others, and vice versa.
                                Therefore, if we assume that they determine their prices without taking this effect into account,
                                we are not likely to get anywhere near understanding their behavior. Similarly, the vote of one
                                individual may radically change the outcome of voting in small committees and assuming that they
                                vote in ignorance of that fact is likely to be misleading.
                                    The subject matter of game theory is exactly those interactions within a group of individuals (or
                                governments, firms, etc.) where the actions of each individual have an effect on the outcome that
Game theory studies strategic
                                is of interest to all. Yet, this is not enough for a situation to be a proper subject of game theory: the
interactions
                                way that individuals act has to be strategic, i.e., they should be aware of the fact that their actions
                                affect others. The fact that my actions have an effect on the outcome does not necessitate strategic
                                behavior, if I am not aware of that fact. Therefore, we say that game theory studies strategic
                                interaction within a group of individuals. By strategic interaction we mean that individuals know
                                that their actions will have an effect on the outcome and act accordingly.
                                    Having determined the types of situations that game theory deals with, we have to now discuss
                                how it analyzes these situations. Like any other theory, the objective of game theory is to organize
                                our knowledge and increase our understanding of the outside world. A scientific theory tries to
                                abstract the most essential aspects of a given situation, analyze them using certain assumptions and
                                procedures, and at the end derive some general principles and predictions that can be applied to
                                individual instances.
                                    For it to have any predictive power, game theory has to postulate some rules according to which
rules of the game
                                individuals act. If we do not describe how individuals behave, what their objectives are and how
                                they try to achieve those objectives we cannot derive any predictions at all in a given situation. For
                                example, one would get completely different predictions regarding the price of wheat in a local
                                market if one assumes that farmers simply flip a coin and choose between $1 and $2 a pound
                                compared to if one assumes they try to make as much money as possible. Therefore, to bring some
1.1. What is Game Theory?                                                                                 3


discipline to the analysis one has to introduce some structure in terms of the rules of the game.
    The most important, and maybe one of the most controversial, assumption of game theory
which brings about this discipline is that individuals are rational.                              We assume that individuals are
                                                                                                              rational.


     Definition. An individual is rational if she has well-defined objectives (or preferences)
     over the set of possible outcomes and she implements the best available strategy to pursue
     them.

    Rationality implies that individuals know the strategies available to each individual, have com-
plete and consistent preferences over possible outcomes, and they are aware of those preferences.
Furthermore, they can determine the best strategy for themselves and flawlessly implement it.


      If taken literally, the assumption of rationality is certainly an unrealistic one, and if
     applied to particular cases it may produce results that are at odds with reality. We should
     first note that game theorists are aware of the limitations imposed by this assumption
     and there is an active research area studying the implications of less demanding forms
     of rationality, called bounded rationality. This course, however, is not the appropriate
     place to study this area of research. Furthermore, to really appreciate the problems with
     rationality assumption one has to first see its results. Therefore, without delving into
     too much discussion, we will argue that one should treat rationality as a limiting case.
     You will have enough opportunity in this book to decide for yourself whether it produces
     useful and interesting results. As the saying goes: “the proof of the pudding is in the
     eating.”

    The term strategic interaction is actually more loaded than it is alluded to above. It is not
enough that I know that my actions, as well as yours, affect the outcome, but I must also know that
you know this fact. Take the example of two wheat farmers. Suppose both farmer A and B know
that their respective choices of prices will affect their profits for the day. But suppose, A does not
know that B knows this. Now, from the perspective of farmer A, farmer B is completely ignorant
of what is going on in the market and hence farmer B might set any price. This makes farmer
A’s decision quite uninteresting itself. To model the situation more realistically, we then have to
assume that they both know that they know that their prices will affect their profits. One actually
has to continue in this fashion and assume that the rules of the game, including how actions affect
the participants and individuals’ rationality, are common knowledge.
    A fact X is common knowledge if everybody knows it, if everybody knows that everybody
knows it, if everybody knows that everybody knows that everybody knows it, an so on. This has
                              4                                                                                         Introduction


                              some philosophical implications and is subject to a lot of controversy, but for the most part we will
We assume that the game and
                              avoid those discussions and take it as given.
rationality are common
knowledge

                                  In sum, we may define game theory as follows:


                                   Definition. Game theory is a systematic study of strategic interaction among rational
                                   individuals.

                                  Its limitations aside, game theory has been fruitfully applied to many situations in the realm of
                              economics, political science, biology, law, etc. In the rest of this chapter we will illustrate the main
                              ideas and concepts of game theory and some of its applications using simple examples. In later
                              chapters we will analyze more realistic and complicated scenarios and discuss how game theory is
                              applied in the real world. Among those applications are firm competition in oligopolistic markets,
                              competition between political parties, auctions, bargaining, and repeated interaction between firms.


                                                                     1.2       E XAMPLES

                                  For the sake of comparison, we first start with an example in which there is no strategic inter-
                              action, and hence one does not need game theory to analyze.

                              Example 1.1 (A Single Person Decision Problem). Suppose Ali is an investor who can invest his
                              $100 either in a safe asset, say government bonds, which brings 10% return in one year, or he can
                              invest it in a risky asset, say a stock issued by a corporation, which either brings 20% return (if the
                              company performance is good) or zero return (if the company performance is bad).

                                                                                   State

                                                                                Good       Bad
                                                                      Bonds      10%       10%
                                                                      Stocks     20%        0%

                                  Clearly, which investment is best for Ali depends on his preferences and the relative likelihoods
                              of the two states of the world. Let’s denote the probability of the good state occurring p and that of
                              the bad state 1 − p, and assume that Ali wants to maximize the amount of money he has at the end
                              of the year. If he invests his $100 on bonds, he will have $110 at the end of the year irrespective
                              of the state of the world (i.e., with certainty). If he invests on stocks, however, with probability
1.2. Examples                                                                                                 5


p he will have $120 and with probability 1 − p he will have $100. We can therefore calculate his
average (or expected) money holdings at the end of the year as

                                 p × 120 + (1 − p) × 100 = 100 + 20 × p

If, for example, p = 1/2, then he expects to have $110 at the end of the year. In general, if p > 1/2,
then he would prefer to invest in stocks, and if p < 1/2 he would prefer bonds.
     This is just one example of a single person decision making problem, in which the decision
problem of an individual can be analyzed in isolation of the other individuals’ behavior. Any A single person decision
uncertainty involved in such problems are exogenous in the sense that it is not determined or in- problem        has no strategic
                                                                                                       interaction
fluenced in any way by the behavior of the individual in question. In the above example, the only
uncertainty comes from the performance of the stock, which we may safely assume to be inde-
pendent of Ali’s choice of investment. Contrast this with the situation illustrated in the following
example.
Example 1.2 (An Investment Game). Now, suppose Ali again has two options for investing his
$100. He may either invest it in bonds, which have a certain return of 10%, or he may invest it in
a risky venture. This venture requires $200 to be a success, in which case the return is 20%, i.e.,
$100 investment yields $120 at the end of the year. If total investment is less than $200, then the
venture is a failure and yields zero return, i.e., $100 investment yields $100. Ali knows that there
is another person, let’s call her Beril, who is exactly in the same situation, and there is no other
potential investor in the venture. Unfortunately, Ali and Beril don’t know each other and cannot
communicate. Therefore, they both have to make the investment decision without knowing the
decisions of each other.
     We can summarize the returns on the investments of Ali and Beril as a function of their deci-
sions in the table given in Figure 1.1. The first number in each cell represents the return on Ali’s
investment, whereas the second number represents Beril’s return. We assume that both Ali and
Beril know the situation represented in this table, i.e., they know the rules of the game.

                                       Figure 1.1: Investment Game.
                                                           Beril
                                                    Bonds      Venture
                                         Bonds     110, 110 110, 100
                                 Ali
                                        Venture    100, 110    120, 120

    The existence of strategic interaction is apparent in this situation, which should be contrasted
with the one in Example 1.1. The crucial element is that the outcome of Ali’s decision (i.e., the
return on the investment chosen) depends on what Beril does. Investing in the risky option, i.e., the
6                                                                                         Introduction


venture, has an uncertain return, as it was the case in Example 1.1. However, now the source of the
uncertainty is another individual, namely Beril. If Ali believes that Beril is going to invest in the
venture, then his optimal choice is the venture as well, whereas, if he thinks Beril is going to invest
in bonds, his optimal choice is to invest in bonds. Furthermore, Beril is in a similar situation, and
this fact makes the problem significantly different from the one in Example 1.1.
    So, what should Ali do? What do you expect would happen in this situation? At this point
we do not have enough information in our model to provide an answer. First we have to describe
Ali and Beril’s objectives, i.e., their preferences over the set of possible outcomes. One possibility,
economists’ favorite, is to assume that they are both expected payoff, or utility, maximizers. If
we further take utility to be the amount of money they have, then we may assume that they are
expected money maximizers. This, however, is not enough for us to answer Ali’s question, for we
have to give Ali a way to form expectations regarding Beril’s behavior.
     One simple possibility is to assume that Ali thinks Beril is going to choose bonds with some
given probability p between zero and one. Then, his decision problem becomes identical to the one
in Example 1.1. Under this assumption, we do not need game theory to solve his problem. But,
is it reasonable for him to assume that Beril is going to decide in such a mechanical way? After
all, we have just assumed that Beril is an expected money maximizer as well. So, let’s assume that
they are both rational, i.e., they choose whatever action that maximizes their expected returns, and
they both know that the other is rational.
    Is this enough? Well, Ali knows that Beril is rational, but this is still not enough for him to
deduce what she will do. He knows that she will do what maximizes her expected return, which,
in turn, depends on what she thinks Ali is going to do. Therefore, what Ali should do depends on
what she thinks Beril thinks that he is going to do. So, we have to go one more step and assume
that not only each knows that the other is rational but also each knows that the other knows that
the other is rational. We can continue in this manner to argue that an intelligent solution to Ali’s
connundrum is to assume that both know that both are rational; both know that both know that both
are rational; both know that both know that both know that both are rational; ad infinitum. This
is a difficult problem indeed and game theory deals exactly with this kind of problems. The next
example provides a problem that is relatively easier to solve.

Example 1.3 (Prisoners’ Dilemma). Probably the best known example, which has also become
a parable for many other situations, is called the Prisoners’ Dilemma. The story goes as follows:
two suspects are arrested and put into different cells before the trial. The district attorney, who is
pretty sure that both of the suspects are guilty but lacks enough evidence, offers them the following
deal: if both of them confess and implicate the other (labeled C), then each will be sentenced to,
say, 5 years of prison time. If one confesses and the other does not (labeled N), then the “rat” goes
1.2. Examples                                                                                      7


free for his cooperation with the authorities and the non-confessor is sentenced to 6 years of prison
time. Finally, if neither of them confesses, then both suspects get to serve one year.
    We can compactly represent this story as in Figure 1.2 where each number within each cell is
the number of free years that will be enjoyed by each prisoner in the next six years.

                                Figure 1.2: Prisoners’ Dilemma.
                                                    Player 2
                                                 C          N
                                         C     −5, −5     0, −6
                                Player 1
                                         N     −6, 0      −1, −1

     For instance, the best outcome for the player 1 is the case in which he confesses and the player
2 does not. The next best outcome for player 1 is (N, N), and then (C,C) and finally (N,C). A
similar interpretation applies to player 2.
     How would you play this game in the place of player 1? One useful observation is the follow-
ing: no matter what player 2 intends to do, playing C yields a better outcome for player 1. This is
so because (C,C) is a better outcome for him than (N,C), and (C, N) is a better outcome for him
than (N, N). So, it seems only “rational” for player 1 to play C by confessing. The same reasoning
for player 2 entails that this player too is very likely to play C. A very reasonable prediction here
is, therefore, that the game will end in the outcome (C,C) in which both players confess to their
crimes.
     And this is the dilemma: wouldn’t each of the players be strictly better off by playing N in-
stead? After all, (N, N) is preferred by both players to (C,C). It is really a pity that the rational
individualistic play leads to an inferior outcome from the perspective of both players.
     You may at first think that this situation arises here only because the prisoners are put into
separate cells and hence are not allowed to have pre-play communication. Surely, you may argue,
if the players debate about how to play the game, they would realize that (N, N) is superior relative
to (C,C) for both of them, and thus agree to play N instead of C. But even if such a verbal agreement
is reached prior to the actual play of the game, what makes player 1 so sure that player 2 will not
backstab him in the last instant by playing C; after all, if player 2 is convinced that player 1 will
keep his end of the bargain by playing N, it is better for her to play C. Thus, even if such an
agreement is reached, both players may reasonably fear betrayal, and may thus choose to betray
before being betrayed by playing C; we are back to the dilemma.

     ☞ What do you think would happen if players could sign binding contracts?

   Even if you are convinced that there is a genuine dilemma here, you may be wondering why
8                                                                                           Introduction


we are making such a big deal out of a silly story. Well, first note that the “story” of the prisoners’
dilemma is really only a story. The dilemma presented above correspond to far more realistic
scenarios. The upshot is that there are instances in which the interdependence between individuals
who rationally follow their self-interest yields socially undesirable outcomes. Considering that
one of the main claims of the neoclassical economics is that selfish pursuit of individual welfare
yields efficient outcomes (the famous invisible hand), this observation is a very important one, and
economists do take it very seriously. We find in prisoners’ dilemma a striking demonstration of the
fact that the classical claim that “decentralized behavior implies efficiency” is not necessarily valid
in environments with genuine room for strategic interaction.


      Prisoners’ dilemma type situations actually arise in many interesting scenarios, such
     as arms-races, price competition, dispute settlements with or without lawyers, etc. The
     common element in all these scenarios is that if everybody is cooperative a good outcome
     results, but nobody finds it in her self-interest to act cooperatively, and this leads to a less
     desirable outcome. As an example consider the pricing game in a local wheat market
     (depicted in Figure 1.3) where there are only two farmers and they can either set a low
     price (L) or a high price (H). The farmer who sets the lowest price captures the entire
     market, whereas if they set the same price they share the market equally.



                                     Figure 1.3: Pricing Game.
                                                       Farmer B
                                                       L     H
                                                 L    1, 1 4, 0
                                     Farmer A
                                                 H    0, 4 2, 2

    This example paints a very grim picture of human interactions. Indeed, many times we observe
cooperation rather than its complete failure. One important area of research in game theory is the
analysis of environments, institutions, and norms, which actually sustain cooperation in the face of
such seemingly hopeless situations as the prisoners’ dilemma.
    Just to illustrate one such scenario, consider a repetition of the Prisoners’ Dilemma game.
In a repeated interaction, each player has to take into account not only what is their payoff in
each interaction but also how the outcome of each of these interactions influences the future ones.
For example, each player may induce cooperation by the other player by adopting a strategy that
punishes bad behavior and rewards good behavior. We will analyze such repeated interactions in
Chapter 9.
1.2. Examples                                                                                                          9


Example 1.4 (Rebel Without a Cause). In the classic 1955 movie Rebel Without a Cause, Jim,
played by James Dean, and Buzz compete for Judy, played by Natalie Wood. Buzz’s gang members
gather by a cliff that drops down to the Pacific Ocean. Jim and Buzz are to drive toward the cliff;
the first person to jump from his car is declared the chicken whereas the last person to jump is a
hero and captures Judy’s heart. Each player has two strategies: jump before the other player (B)
and after the other player (A). If they jump at the same time (B, B), they survive but lose Judy. If
one jumps before and the other after, the latter survive and gets Judy, whereas the former gets to
live, but without Judy. Finally, if both choose to jump after the other (A, A), they die an honorable
death.
    The situation can be represented as in Figure 1.4.

                                         Figure 1.4: Game of Chicken.
                                                               Buzz
                                                            B      A
                                                    B      2, 2 1, 3
                                              Jim
                                                    A      3, 1 0, 0

    The likely outcome is not clear. If Jim thinks Buzz is going to jump before him, then he is
better off waiting and jumping after. On the other hand, if he thinks Buzz is going to wait him
out, he better jumps before: he is young and there will be other Judys. In the movie Buzz’s leather
jacket’s sleeve is caught on the door handle of his car. He cannot jump, even though Jim jumps.
Both cars and Buzz plunge over the cliff.1
    Game of chicken is also used as a parable of situations which are more interesting than the
above story. There are dynamic versions of the game of chicken called the war of attrition. In a
war of attrition game, two individuals are supposed to take an action and the choice is the timing
of that action. Both players desire to be the last to take that action. For example, in the game of
chicken, the action is to jump. Therefore, both players try to wait each other out, and the one who
concedes first loses.

Example 1.5 (Entry Game). In all the examples up to here we assumed that the players either
choose their strategies simultaneously or without knowing the choice of the other player. We
model such situations by using what is known as Strategic (or Normal) Form Games.
    In some situations, however, players observe at least some of the moves made by other players
and therefore this is not an appropriate modeling choice. Take for example the Entry Game depicted
in Figure 1.5. In this game Pepsi (P) first decides whether to enter a market curently monopolized
   1 In real life, James Dean killed himself and injured two passengers while driving on a public highway at an estimated

speed of 100 mph.
10                                                                                        Introduction


                                      Figure 1.5: Entry Game
                                              P

                                     Out                   In
                                                                C
                                    0, 4
                                                  A                       F

                                                2, 2                    −1, 0

                                   Table 1.1: Voters’ Preferences


                                      voter 1     voter 2       voter 3
                                           A           B            S
                                           S           A            A
                                           B           S            B



by Coke (C). After observing Pepsi’s choice Coke decides whether to fight the entry (F) by, for
example, price cuts and/or advertisement campaigns, or acquiesce (A).
   Such games of sequential moves are modeled using what is known as Extensive Form Games,
and can be represented by a game tree as we have done in Figure 1.5.
   In this example, we assumed that Pepsi prefers entering only if Coke is going to acquiesce, and
Coke prefers to stay as a monopoly, but if entry occurs it prefers to acquiesce; hence the payoff
numbers appended to the end nodes of the game.


     ☞ What do you think Pepsi should do?
     ☞ Is there a way for Coke to avoid entry?


Example 1.6 (Voting). Another interesting application of game theory, to political science this
time, is voting. As a simple example, suppose that there are two competing bills, A and B, and
three legislators, voters 1, 2 and 3, who are to vote on these bills. The voting takes place in two
stages. They first vote between A and B, and then between the winner of the first stage and the
status-quo, denoted S. The voters’ rankings of the alternatives are given in Table 1.1.
    First note that if each voter votes truthfully, A will be the winner in the first round, and it will
also win against the status-quo in the second round. Do you think this will be the outcome? Well,
voter 3 is not very happy about the outcome and has another way to vote which would make him
1.2. Examples                                                                                         11


                                        Figure 1.6: Voting Game

                                        Second Round                   A
                            A
     First Round
                            B           Second Round                    S

happier. Assuming that the other voters keep voting truthfully, she can vote for B, rather than A,
in the first round, which would make B the winner in the first round. B will lose to S in the second
round and voter 3 is better off. Could this be the outcome? Well, now voter 2 can switch her vote
to A to get A elected in the first round which then wins against S. Since she likes A better than S
she would like to do that.
    We can analyze the situation more systematically starting from the second round. In the second
round, each voter should vote truthfully, they have nothing to gain and possibly something to lose
by voting for a less preferred option. Therefore, if A is the winner of the first round, it will also win
in the second round. If B wins in the first round, however, the outcome will be S. This means that,
by voting between A and B in the first round they are actually voting between A and S. Therefore,
voter 1 and 2 will vote for A and eventual outcome will be A. (see Figure 1.6.)

Example 1.7 (Investment Game with Incomplete Information). So far, in all the examples, we
have assumed that every player knows everything about the game, including the preferences of the
other players. Reality, however, is not that simple. In many situations we lack relevant information
regarding many components of a strategic situation, such as the identity and preferences of other
players, strategies available to us and to other players, etc. Such games are known as Games with
Incomplete (or Private) Information.
    As an illustration, let us go back to Example 1.2, which we modify by assuming that Ali is
not certain about Beril’s preferences. In particular, assume that he believes (with some probability
p) that Beril has the preferences represented in Figure 1.1, and with probability 1 − p he believes
Beril is a little crazy and has some inherent tendency to take risks, even if they are unreasonable
from the perspective of a rational investor. We represent the new situation in Figure 1.7.

                   Figure 1.7: Investment Game with Incomplete Information
                                        Beril                                Beril
                                 Bonds      Venture                   Bonds      Venture
                   Bonds        110, 110    110, 100                 110, 110    110, 120
            Ali
                  Venture       100, 110    120, 120                 100, 110    120, 120
                                    Normal (p)                           Crazy (1 − p)
12                                                                                       Introduction


    If Ali was sure that Beril was crazy, then his choice would be clear: he should choose to invest
in the venture. How small should p be for the solution of this game to be both Ali and Beril,
irrespective of her preferences, investing in the venture? Suppose that “normal” Beril chooses
bonds and Ali believes this to be the case. Investing in bonds yields $110 for Ali irrespective of
what Beril does. Investing in the venture, however, has the following expected return for Ali

                               p × 100 + (1 − p) × 120 = 120 − 20p

which is bigger than $110 if p < 1/2. In other words, we would expect the solution to be investment
in the venture for both players if Ali’s belief that Beril is crazy is strong enough.

Example 1.8 (Signalling). In Example 1.7 one of the players had incomplete information but they
chose their strategies without observing the choices of the other player. In other words, players did
not have a chance to observe others’ behavior and possibly learn from them. In certain strategic
interactions this is not the case. When you apply for a job, for example, the employer is not exactly
sure of your qualities. So, you try to impress your prospective boss with your resume, education,
dress, manners etc. In essence, you try to signal your good qualities, and hide the bad ones, with
your behavior. The employer, on the other hand, has to figure out which signals she should take
seriously and which ones to discount (i.e. she tries to screen good candidates).
     This is also the case when you go out on a date with someone for the first time. Each person
tries to convey their good sides while trying to hide the bad ones, unless of course, it was a failure
from the very beginning. So, there is a complex interaction of signalling and screening going on.
Suppose, for example, that Ali takes Beril out on a date. Beril is going to decide whether she is
going to have a long term relationship with him (call that marrying) or dump him. However, she
wants to marry a smart guy and does not know whether Ali is smart or not. However, she thinks he
is smart or dumb with equal probabilities. Ali really wants to marry her and tries to show that he
is smart by cracking jokes and being funny in general during the date. However, being funny is not
very easy. It is just stressful, and particularly so if one is dumb, to constantly try to come up with
jokes that will impress her. Figure 1.8 illustrates the situation.
     What do yo think will happen at the end? Is it possible for a dumb version of Ali to be funny
and marry Beril? Or, do you think it is more likely for a smart Ali to marry Beril by being funny,
while a dumb Ali prefers to be quite and just enjoys the food, even if the date is not going further
than the dinner?

Example 1.9 (Hostile Takeovers). During the 1980s there was a huge wave of mergers and acqui-
sitions in the Uniter States. Many of the acquisitions took the form of “hostile takeovers,” a term
used to describe takeovers that are implemented against the will of the target company’s manage-
1.2. Examples                                                                                     13


                                    Figure 1.8: Dating Game
                         2, 1 r                                          r 1, 1
                              @@ marry                           marry
                                @
                                 @
                                    @r      quite   Ar   funny
                                                            r
                                        p                   p@
                                        p                    p
                                        p                    p @
                                                             pdump @
                                        p                    p
                                  dump p
                                                                     @@r −1, 0
                                        p                    p
                         0, 0 r         p
                                        p             smart
                                                             p
                                                             p
                                        p                    p
                                        p                    p
                                        p                    p
                                        p                    p
                                        p                    p
                                        p                    p
                                    B pp             bGod B p
                                                             p
                                        p                    p
                                        p                    p
                                        p                    p
                                        p                    p
                                        p                    p
                         2, 0 r         p
                                                      dumb
                                                             p         r −1, 0
                              @
                                        p                    p
                               @ marry pp                    p
                                                             pmarry
                                @       p                    p
                                 @ pp
                                        p                    p
                                                             p
                                    @pr
                                                             p
                                                     r       pr
                                            quite   A funny @
                                                                 @
                                    dump                       dump @
                                                                     @@r −3, 1
                         0, 1 r


ment. They usually take the form of direct tender offers to shareholders, i.e., the acquirer publicly
offers a price to all the shareholders. Some of these tender offers were in the form of what is known
as “two-tiered tender offer.”
    Such was the case in 1988 when Robert Campeau made a tender offer for Federated Department
Stores. Let us consider a simplified version of the actual story. Suppose that the pre-takeover price
of a Federated share is $100. Campeau offers to pay $105 per share for the first 50% of the shares,
and $90 for the remainder. All shares, however, are bought at the average price of the total shares
tendered. If the takeover succeeds, the shares that were not rendered are worth $90 each.
   For example, if 75% of the shares are tendered, Campeau pays $105 to the first 50% and pays
$90 to the remaining 25%. The average price that Campeau pays is then equal to


                                                    50        25
                                     p = 105 ×         + 90 ×
                                                    75        75
                                       = 100

   In general, if s percent of the shares are tendered the average price paid by Campeau, and thus
14                                                                                     Introduction


the price of a tendered share, is given by
                                 
                                 105                       if s ≤ 50
                              p=
                                 105 × 50 + 90 × s−50      if s > 50
                                             s         s

    Notice that if everybody tenders, i.e., s = 100, then Campeau pays $97.5 per share which is less
than the current market price. So, this looks like a good deal for Campeau, but only if sufficiently
high number of shareholders tender.

     ☞ If you were a Federated shareholder, would you tender your shares to Campeau?
     ☞ Does your answer depend on what you think other shareholders will do?
     ☞ Now suppose Macy’s offers $102 per share conditional upon obtaining the majority.
       What would you do?

    The actual unfolding of events were quite unfortunate for Campeau. Macy’s joined the bidding
and this increased the premium quite significantly. Campeau finally won out (not by a two-tiered
tender offer, however) but paid $8.17 billion for the stock of a company with a pre-acquisition
market value of $2.93 billion. Campeau financed 97 percent of the purchase price with debt. Less
than two years later, Federated filed for bankruptcy and Campeau lost his job.


                              1.3     O UR M ETHODOLOGY
    So, we have seen that many interesting situations involve strategic interactions between indi-
viduals and therefore render themselves to a game theoretical study. At this point one has two
options. We can either analyze each case separately or we may try to find general principals that
apply to any game. As we have mentioned before, game theory provides tools to analyze strate-
gic interactions, which may then be applied to any arbitrary game-like situation. In other words,
throughout this course we will analyze abstract games, and suggest “reasonable” outcomes as solu-
tions to those games. To fix ideas, however, we will discuss applications of these abstract concepts
to particular cases which we hope you will find interesting.
    We will analyze games along two different dimensions: (1) the order of moves; (2) information.
This gives us four general forms of games, as we illustrate in Table 1.2.
1.3. Our Methodology                                                              15




                                 Table 1.2: Game Forms

                                            Information
                                Complete                    Incomplete
                          Strategic Form Games            Bayesian Games
        Simultaneous    with Complete Information
Moves                          Example 1.2                 Example 1.7
                          Extensive form Games         Extensive form Games
           Sequential   with Complete Information   with Incomplete Information
                               Example 1.5                  Example 1.8
                                            
          
         

         !" # #"   "$  "  "
         ## #  "   "
 "  # "  !   #  #   "    "!
## %"  " #   &    "       ##
#  # "    " !#!  # # "    # 
 #    #    !   !  # 
   '   !  # $"   ("  #)               
'   #  "

              

 "    "           ! !  
""         !#
   $  #  "

         %  &      *       

+            "        , ! 
!-  " !  "      '  "   " # ! ,"
 "  #   -  " "  "   ."         "     / #  
   0 #   " "  "    ."  " / %  &
    1  " "     #)        ! 

                                            

            !   " ) 
           #"         ! !" 
 #     "   ##    #  #"

            *          

        2 "  #"       "  
   "#   """ "  3                 
 # #      "        "     "
          ""      2     # #    
 " "          " ""       " !

                                                     4
       # " #     ""   # ! !  ! "
#"      !  ! #"   
   +  #       !                   
         "!  !   #2"       
           ##          "   "
, -  #   '  "     0 #  ! " ## 
 !! 2 5   4   " % &  6    # # 
 !    "       !#  %      & %"    "    
  !#  % & "      "       !#  % &&
3  "     7! "   " ## " "  
  #    
   8!   #)    !  !"     

                                        

%    , 9 !-     #   &    
  ,!  !" -    #    "    
 ## 3 "    !    #      %       
# $"   "  *

                                            

  "   )   "     :   "   
 ;9   !  !"      $    #   
 "     0 #  3 "      "    
   4 %    & "    #  ; %    & "   "  
     ""         !  !"     "  
 "  "   !" # #" !        
 "       !  " "     
 !"  !      #   ##   "  
 <    !  "   

        ""    #  !  !"    ! 
     ! %         " #   
" &     "    ! +   "   
      !   ! #       "   
      !   ! #   =          "
      =    ""    "    6  
           !     ! 


                                              ;
"        +      " ! 
 "       #   2 "      ! 
#)#   "  !"  !  "   3  " 
   ""     #   ! #" "   
"          

        ""       "  !   !  !"
   #     ")" $  "  $ "




  
                                        
                                     
          !""#$% &       %                 '% 
()*+#

                                                  >
    
   %4&      %& ?"     0 #  "   # 9
" #   #"    #   $

                                             
                                          44 @5 
                                         5@ AA

B                          #              
        #     # #   $

                                                          
                                                         
                                                        

       !                      

   %;&      % &  #   ! "*  ##  !!
   #     ! C  4    !     
   ;    !     %""#!    $      
   4    #  ;   6 "     !& B  " 
         !      # ! !6 
  ! , #-    #  !
   +         ;9   !  !"       !
  

                                            
                                         ;4 55 
                                         55 4;

B                     #     
      %" !  ""            ! 
 "   &      0 #   =8      $  
!           ! ""    8  
  !#         #   !  "  +  
 #"   "   !    ""D +  
""D

    %>&       !  % !&  #  ## "   " 
 % &   % !& 3  "" #  "  "  2  7
   #   "#  " "  2  4 #   "#

                                                    E
   " "  2  ; 8         #  ! !                  #
   #   $
                                                   
                                               44 55 
                                              55 ;;
 !     !  #   " "      # " 
2"    "" !    '        #"
   !  # "   # # #     "" 
 #  
    %E& "  #$  !  %"$ &  #   ! "*   
 "!    #           =  #   
  #    " !     # #   !  %&
  %8&  "                "!  
 # #       %  4  "  &    #   
%  ;     &       " "  "   
"    #
       " "    #   ;9   !  !"     
 ! $*
                                                8
                                             54 45 
                                            8 45 54
    $"   #  " "   !  !"  # #
 $  " #    " # "#  F   
, -   !  !
    = " #!  ""  # $       CF # 1
 %9  &                !  "# *
    %&       "     " 
    %&                          $"!  "  
   %   9   "      #!   0 " )$#& 
 2        $"!# %"        
  "   2    "    "&
    '  "  CF                                    "   
#  =8 # G+   " B     " ! 
                                8                         G ?
                             54 ;5           #        45 4; 54 
                            8 45 54                     F 5> 54 ;5

                                                    A
    " !   !     " ! "   !
         H"  " !  # #   
        +   7  "   $     " # 
  
      $  !     "# $    !  !" 
 $    #       #  !7 #  
        < 

    %A& %    "
       #      !  %! & !#       ## "

                                            
    "   !# #    < ### +    
"   "  #" ! 8      $"   ) #"!
 !#  "  "    ) 

                                           

    " #2  " #)#      #  
    +  #    "    )   ;9   !  !" 
   *
    %&    
    %&                  )   #"!   
 "              #     #"  )
"!      
    %&               "        
     #  "   !               ' 
   " ")" # #       ##   )
  # #"            #     ##
 !                             
                                             
                                 
                                                   
    #              ! !             
    ")" <     ! "  )  #   "  #"
     $"#    !    #   ! ! ) 
+    #                #     2 " 
)    #  *
                              
                                            
                   
                                                         

                                               @
 "            "# ;9   !  !"  
 " %     "    "    ! # &
       !      #         "
 " "  %  ) # !#  "   ) " " )
  #   ! !     & #     %     )
#  &  )0 " #    #  "   #
    !   #  #"   "     "

   +    "   $   !  !"  =  
       <       !" !




                                         I
           
            !" !   #"#    "    
 ! " "           " ##   
 "(" !#!  " ""     #        
  =   "   #H"  #      "       
  !  "    ##      +   "  #
"# "       0 #  3##  !  " 
"  " !       4     0 #    
   ;    !  # 3          , -   ! 
CF   4 %#      ;&* " !  +  7 " 9) "
 !    

             " "   9   !  !" 
#           ' "     #   "

                                             

#            !   )   "      
 !    + #     " )  "     ' 
   !        

     1  !  !"   "       "
      
                                       
#
                                                
3          


                                                 



     1  !  !"   "         
  #  "    3  " #        "  #
 "   
         # "    < +D 

      # !      "        
     # C #2      # " #  
                !6       !  

                                                        J
   "           !  # "      <  
 !#          #   # "   !
! % "  ##  " "   &  # #     !
<  "" 

               !   !"
  #)#     # " )  #  ##    ? "!
 # , -  , " -  #  #)      # !
<  "  ##   
       #    "   "  #     CF
  CF         "       # ! <    " 
# "       # "   $      #
 ! <  "   " " #

                                         ?
                                      ;4 5; 
                                     F ;> E>

3  !    "  # ! <         
# ! <  !   " )  F ?

    F ! <   <     <  ""  " # 
##  $"    , -     3   ##  
  % &  7 # #  <        
    ""        ! ! "  $ "  
# "          ! !        % " 
      # ! <   =8 1 G+ #   !  
! & 3    #  ##         
  #"  +      "   #!  




                                           K
          
    +  !#    , -   #   # " % " 
" $  & !  !   #       , - 
 #    "     "       !
 "   2         "   ##     +  
 "  "   "  ## " ' 

        !  !"  # " #   "      
     +            

                                              

+                        


                                              

 
                                             

     #    !    , -  #   " 
## "  '   ! !           # 
 ##    "   "  ## "      !
 !   !"            "  ## " 
     6   , -           "
" =      #      !   ! %  # &
 "  ## "   !    " ! ! #   &
   !   !  =   #0  "  "  ##
"     !     $  "  ## "  
    '  (  )         #   "
      "D
    + #!           !  # # #!   "$
     " "  " #                  
  %& " "  #     ! <  ""  '  
   #  $    "  # ! <  +     
        #         %C     &
    G  38F "      !   # ! <9
  #   #  #" ""!     !      
# "  #"     !    < " 3
 "           


                                                    45
           ! *      &      +  *,   
  '     ' -          & 
            

      CF  #"     C       #  38F
" #    )  " "   =8 "      
 "  ## "   !* =8   #"     !   
$  " #  !
                                          G ?
                                     45 4; 54
                                    F 5> 54 ;5
" #     # ! <     ?  "  ##
  ; % " G&    )  !   38F "    ?
 #    4 ! , -    ;    ? # 
 ! 2"  
                                            G
                                       45 4;
                                      F 5> 54
=  ; ! , -    4    " !    
   ! # "    ! F  "  ##   4 8
   ;   %  #&  " F   4    "# !  
38F " #     !

                                         G
                                       45 4;

+  "   ) !   38F "        ; B"
 !  #"    # 38F " #   " % G& 

        !  "  38F "   "    ) !  "" 
  3  $     "  "  #  #   !
)  ?  F #   B   #   #   !  "
    ,         -    !   #
# "  ,  -  ##    #  C #2    38F
"    ""        "       "  ##
"     "         0 #    
       0 #  #   8  ""                   
 " "# !  B   $    #"    ! " < 


                                           44
       "   ,)   -   # #"#     
     38F "   $ 

    + " #    #    
                             
                                 
                           
                                                  

                                            
          
                                       
                                                  %        
                                                                 
   # #   &   #"             
                                                                     "  ##
                                                                                    
%  & 3  )  !   38F " "              
                                                                                       
     <           %  # "   #
  "  #    #     ) "   "  
38F "   "    "  ## "   )   &
                               
   <  !      
                                    

                          
                                      
                          
                                                      
                                                   
                                     
                                                    
                                
                                       
                                  
                                                          
  
                    
                                           
                                                                     = ! 
                                                          
     "       
                                                     
                                                                   3! )  
                                
     "        38F "  %  *   &
B"    #  #"    

   + #)              %"& "   
 !   38F "  =           "
  38F "   !        "#"   "#*
 ! #   !   ## "      "  
#      " ""         ## "
  #    # ' $     ! !

                                          ?
                                       ;4 5;
                                      F ;> E>

  4  #    "           #   ;  
?   "#   !   ## "    # ! "


                                           4;
 "             !#                        #    ! !

                                                     ?
                                                  >4 ;5
                                                 G E5 44
                                                 F EE ;E

  #    !   4  !    %  &   
    ;         "  1   # #   ;0 "  9
"   ## # "  "  # #    !!   #  7
   "#"!     "   # #  ! 
     3+F "   # #   ""  "  !  #
    7  ""   ""           $  
  %#      "   #"#    &  
  3+F " 

    #!## &   $  #  9   !" !  " "
   "  !  4 # KKK 8      #       
                                                                    
       " )                 
 !       ""  !  "      

        '     )   #"#    #                   !

          $  38F " #  #                         #" 6  ! 
          #"   

             3+F "                     
               9#   !   " $"# @@@ =
           ! !  @@@    ##  @@@   ## %
          D& 8"            3+F " ##    
          "     =  ! "   #   ! 
                ##   !   %! ) 
           &  )#     "    3+F "    
         
   
       ,  %               
                                                        
                                                      
                                               
                                                    
                                                                
                                                     

           




                                                       4>
    #       $  #  "     %#   
4 ; # >&      "       ""        
!      "       (      "
!      "     "       %   " 
   #2     "   "     >
    #"#   "    "  #" !     
          " 8     " !     
     >  !"           
        "     !     !  *

                               C  4 C  ; C  >
                                                    
                                           
                                  

B  "       " "   "  #    9
        " #!  '  "  4 "  
               "      !   "   
#    "  #    #2   #   "   >  #
$  ##   #"            "
   B          #     "    #
#       # )  +        ! !    D
    #     "    #  "   !  !" 
       % "  " ##       !!  " & #
" #   ! $   *

                                          
                             ;54 54; 54;
                                                    > "  
                             54; 4;5 54;
                            5 4 ; 5 4 ; 54 ;
                                      
                             ;54 ;54 ;54
                                                    > " 
                             ;54 4;5 54;
                            ;54 54; 54;
                                      
                             ;54 4;5 54;
                                                    > " 
                             4;5 4;5 4;5
                            ;54 4;5 54;


                                           4E
B   "        "   "   "    "   " 
   # "   > % "        " #
  " # "# &
            3+F "   ! B     #!  *
  %4&    46 %;& #    ;6 %>& #   >6 %E&  
4 B"  3+F " #   "     "     
  "       " "      "   "  
 " ! 3 "  !" !        "   "# 
    > %     3+F " &    #        
 6       !   " #        %+ #
      ,$ -  #$" "D +   ##   
  "    D +   ##0          D
F  !   #" "# !  3+F " D& 

          <      #    "" #  "
  * " #  ! 38F " #  #2          " 
#2 # D '       %     D& B   
 #       #   ## "     '  "
" #  ;9   !  !"  !   $

                                           ?
                                        >4 ;5
                                       G E5 44
                                       F EE ;E

B   )     40 "    ;0 "  #   40
" G  !  " %F ?&     )    G %#  ? #  & 
!  " %F &     #       "   3+F
"  




                                            4A
   The Nash Equilibrium
   Levent Koçkesen, Columbia University
   Efe A. Ok, New York University
   As we have mentioned in our …rst lecture, one of the assumptions that we will maintain
throughout is that individuals are rational, i.e., they take the best available actions to pursue
their objectives. This is not any di¤erent from the assumption of rationality, or optimiz-
ing behavior, that you must have come across in your microeconomics classes. In most of
microeconomics, individual decision making boils down to solving the following problem:

                                           max u (x; µ)
                                           x2X

where x is the vector of choice variables, or possible actions, (such as a consumption bundle)
of the individual, X denotes the set of possible actions available (such as the budget set), µ
denotes a vector of parameters that are outside the control of the individual (such as the price
vector and income), and u is the utility (or payo¤) function of the individual.
    What makes a situation a strategic game, however, is the fact that what is best for one
individual, in general, depends upon other individuals’ actions. The decision problem of an
individual in a game can still be phrased in above terms by treating µ as the choices of other
individuals whose actions a¤ect the subject individual’s payo¤. In other words, letting x = ai ;
X = Ai ; and µ = a¡i , the decision making problem of player i in a game becomes

                                        max ui (ai ; a¡i ) :
                                        ai 2Ai

The main di¢culty with this problem is the fact that an individual does not, in general,
know the action choices of other players, a¡i ; whereas in single decision making problems
the parameter vector, µ, is assumed to be known, or determined as an outcome of exogenous
chance events. Therefore, determining the best action for an individual in a game, in general,
requires a joint analysis of every individual’s decision problem.
    In the previous section we have analyzed situations in which this problem could be circum-
vented, and hence we could analyze the problem by only considering it from the perspective
of a single individual. If, independent of the other players’ actions, the individual in question
has an optimal action, then rationality requires taking that action, and hence we can analyze
that individual’s decision making problem in isolation from that of others. If every individ-
ual is in a similar situation this leads to (weakly or strictly) dominant strategy equilibrium.
Remember that, the only assumptions that we used to justify dominant strategy equilibrium
concept was the rationality of players (and the knowledge of own payo¤ function, of course).
Unfortunately, many interesting games do not have a dominant strategy equilibrium and this
forces us to increase the rationality requirements for individuals. The second solution concept

                                                 1
that we introduced, i.e., iterated elimination of dominated strategies, did just that. It required
not only the rationality of each individual and the knowledge of own payo¤ functions, but
also the (common) knowledge of other players’ rationality and payo¤ functions. However, in
this case we run into other problems: there may be too many outcomes that survive IESD
actions, or di¤erent outcomes may arise as outcomes that survive IEWD actions, depending
on the order of elimination.
    In this section we will analyze by far the most commonly used equilibrium concept for
strategic games, i.e., the Nash equilibrium concept, which overcomes some of the problems
of the solution concepts introduced before.1 As we have mentioned above, the presence of
interaction among players requires each individual to form a belief regarding the possible
actions of other individuals. Nash equilibrium is based on the premises that (i) each individual
acts rationally given her beliefs about the other players’ actions, and that (ii) these beliefs are
correct. It is the second element which makes this an equilibrium concept. It is in this sense
we may regard Nash equilibrium outcome as a steady state of a strategic interaction. Once
every individual is acting in accordance with the Nash equilibrium, no one has an incentive to
unilaterally deviate and take another action. More formally, we have the following de…nition:
       De…nition. A Nash equilibrium of a game G in strategic form is de…ned as any outcome
(a¤1 ; :::; a¤n ) such that
                              ui (a¤i ; a¤¡i ) ¸ ui (ai ; a¤¡i )   for all ai 2 Ai :
holds for each player i: The set of all Nash equilibria of G is denoted N(G):
    In a two player game, for example, an action pro…le (a¤1 ; a¤2 ) is a Nash equilibrium if the
following two conditions hold

                                        a¤1 2 arg max u1 (a1 ; a¤2 )
                                                        ai 2A1
                                        a¤2   2 arg max u2 (a¤1 ; a2 ):
                                                        a2 2A2

   Therefore, we may say that, in a Nash equilibrium, each player’s choice of action is a best
response to the actions actually taken by his opponents. This suggests, and sometimes more
useful, de…nition of Nash equilibrium, based on the notion of the best response correspon-
   1
     The discovery of the basic idea behind the Nash equilibrium goes back to the 1838 work of Augustine
Cournot. (Cournot’s work is translated into English in 1897 as Researches into the Mathematical Principles
of the Theory of Wealth, New York: MacMillan.) The formalization and rigorous analysis of this equilibrium
concept was not given until the seminal 1950 work of the mathematician John Nash. Nash was awarded the
Nobel prize in economics in 1994 (along with John Harsanyi and Reinhardt Selten) for his contributions to
game theory. For an exciting biography of Nash, we refer the reader to S. Nasar (1998), A Beautiful Mind,
New York: Simon and Schuster.




                                                          2
dence.2 We de…ne the best response correspondence of player i in a strategic form game as the
correspondence Bi : A¡i ¶ Ai given by

                   Bi (a¡i ) = fai 2 Ai : ui (ai ; a¡i ) ¸ ui (bi ; a¡i ) for all bi 2 Ai g
                             = arg max ui (ai ; a¡i ) :
                                      ai 2Ai

(Notice that, for each a¡i 2 A¡i , Bi (a¡i ) is a set which may or may not be a singleton.) So,
for example, in a 2-person game, if player 2 plays a2 ; player 1’s best choice is to play some
action in B1 (a2 );

                    B1 (a2 ) = fa1 2 A1 : u1 (a1 ; a2 ) ¸ u2 (b1 ; a2 ) for all b1 2 A1 g:

       For instance, in the game
                                                  L M R
                                               U 1,0 1,2 0,2
                                               D 0,3 1,1 2,0
we have B1 (L) = fUg; B1 (M) = fU,Dg and B1 (R) = fDg; while B2 (U) = fM,Rg and
B2 (D) = fLg.
    The following is an easy but useful observation.

   Proposition B. For any 2-person game in strategic form G; we have (a¤1 ; a¤2 ) 2 N(G) if,
and only if,
                          a¤1 2 B1 (a¤2 ) and a¤2 2 B2 (a¤1 ):

       Exercise. Prove Proposition B.
    Proposition B suggests a way of computing the Nash equilibria of strategic games. In par-
ticular, when the best response correspondence of the players are single-valued, then Proposi-
tion B tells us that all we need to do is to solve two equations in two unknowns to characterize
the set of all Nash equilibria (once we have found B1 and B2 , that is). The following examples
will illustrate.
    Example. We have N(BoS) = f(m,m); (o,o)g. Indeed, in this game, B1 (o) = fog;
B1 (m) = fmg; B2 (o) = fog; and B2 (m) = fmg: These observations also show that (m,o) and
(o,m) are not equilibrium points of BoS. Similar computations yield N(CG) = f(l,l); (r,r)g
and N(MW) = ;:
   2
    Mathematical Reminder : Recall that a function f from a set A to a set B assigns to each x 2 A one
and only one element f(x) in B: By de…nition, a correspondence f from A to B; on the other hand, assigns
to each x 2 A a subset of B; and in this case we write f : A ¶ B: (For instance, f : [0; 1] ¶ [0; 1] de…ned
as f (x) = fy 2 [0; 1] : x · yg is a correspondence; draw the graph of f .) In the special case where a
correspondence is single-valued (i.e. f (x) is a singleton set for each x 2 A), then f can be thought of as a
function.

                                                      3
    An easy way of …nding Nash equilibrium in two-person strategic form games is to utilize
the best response correspondences and the bimatrix representation. You simply have to mark
the best response(s) of each player given the action choice of the other player and any action
pro…le at which both players are best responding to each other is a Nash equilibrium. In the
BoS game, for example, given player 1 plays m, the best response of player 2 is to play m,
which is expressed by underscoring player 2’s payo¤ at (m,m), and her best response to o is
o, which is expressed by underscoring her payo¤ at (o,o).
                                            m    o
                                          m 2,1 0,0 :
                                          o 0,0 1,2
The same procedure is applied to player 1 as well. The set of Nash equilibrium is then the set
of outcomes at which both players’ payo¤s are underscored, i.e., f(m,m); (o,o)g:2
    Nash equilibrium concept has been motivated in many di¤erent ways, mostly on an infor-
mal basis. We will now give a brief discussion of some of these motivations:
    Self Enforcing Agreements. Let us assume that two players debate about how they
should play a given 2-person game in strategic form through preplay communication. If no
binding agreement is possible between the players, then what sort of an agreement would
they be able to implement, if any? Clearly, the agreement (whatever it is) should be “self
enforcing” in the sense that no player should have a reason to deviate from her promise if
she believes that the other player will keep his end of the bargain. A Nash equilibrium is an
outcome that would correspond to a self enforcing agreement in this sense. Once it is reached,
no individual has an incentive to deviate from it unilaterally.
    Social Conventions. Consider a strategic interaction played between two players, where
player 1 is randomly picked from a population and player 2 is randomly picked from another
population. For example, the situation could be a bargaining game between a randomly picked
buyer and a randomly picked seller. Now imagine that this situation is repeated over time,
each iteration being played between two randomly selected players. If this process settles down
to an action pro…le, that is if time after time the action choices of players in the role of player
1 and those in the role of player 2 are always the same, then we may regard this outcome
as a convention. Even if players start with arbitrary actions, as long as they remember how
the actions of the previous players fared in the past and choose those actions that are better,
any social convention must correspond to a Nash equilibrium. If an outcome is not a Nash
equilibrium, then at least one of the players is not best responding, and sooner or later a player
in that role will happen to land on a better action which will then be adopted by the players
afterwards. Put di¤erently, an outcome which is not a Nash equilibrium lacks a certain sense
of stability, and thus if a convention were to develop about how to play a given game through
time, we would expect this convention to correspond to a Nash equilibrium of the game.

                                                4
    Focal Points. Focal points are outcomes which are distinguished from others on the
basis of some characteristics which are not included in the formalism of the model. Those
characteristics may distinguish an outcome as a result of some psychological or social process
and may even seem trivial, such as the names of the actions. Focal points may also arise due
to the optimality of the actions, and Nash equilibrium is considered focal on this basis.
    Learned Behavior. Consider two players playing the same game repeatedly. Also sup-
pose that each player simply best responds to the action choice of the other player in the
previous interaction. It is not hard to imagine that over time their play may settle on an
outcome. If this happens, then it has to be a Nash equilibrium outcome. There are, however,
two problems with this interpretation: (1) the play may never settle down, (2) the repeated
game is di¤erent from the strategic form game that is played in each period and hence it
cannot be used to justify its equilibrium.
    So, whichever of the above parables one may want to entertain, they all seem to suggest
that, if a reasonable outcome of a game in strategic form exists, it must possess the property of
being a Nash equilibrium. In other words, being a Nash equilibrium is a necessary condition
for being a reasonable outcome: But notice that this is a one-way statement; it would not be
reasonable to claim that any Nash equilibrium of a given game corresponds to an outcome
that is likely to be observed when the game is actually played. (More on this shortly.)
    We will now introduce two other celebrated strategic form games to further illustrate the
Nash equilibrium concept.
   Example. Stag Hunt (SH) Two hungry hunters go to the woods with the aim of
catching a stag, or at least a hare. They can catch a stag only if they both remain alert
and devote their time and energy to catching it. Catching a hare is less demanding and does
not require the cooperation of the other hunter. Each hunter prefers half a stag to a hare.
Letting S denote the action of going after the stag, and H the action of catching a hare, we
can represent this game by the following bimatrix

                                            S   H
                                         S 2,2 0,1 :
                                         H 1,0 1,1

   One can easily verify that N(SH) = f(S,S); (H,H)g:
   Exercise. Hawk-Dove (HD) Two animals are …ghting over a prey. The prey is worth
v to each player, and the cost of …ghting is c1 for the …rst animal (player 1) and c2 for the
second animal (player 2). If they both act aggressively (hawkish) and get into a …ght, they
share the prey but su¤er the cost of …ghting. If both act peacefully (dovish), then they get to
share the prey without incurring any cost. If one acts dovish and the other hawkish, there is
no …ght and the latter gets the whole prey.

                                               5
    (1) Write down the strategic form of this game
    (2) Assume v; c1 ; c2 are all non-negative and …nd the Nash equilibria of this game in each
of the following cases: (a) c1 > v=2; c2 > v=2; (b) c1 > v=2; c2 < v=2; (c) c1 < v=2; c2 < v=2:
   We have previously introduced a simple Cournot duopoly model and analyzed its outcome
by applying IESD actions. Let us now try to …nd its Nash equilibria. We will …rst …nd the
best response correspondence of …rm 1. Given that …rm 2 produces Q2 2 [0; a=b]; the best
response of …rm 1 is found by solving the …rst order condition
                                  du1
                                      = (a ¡ c) ¡ 2bQ1 ¡ bQ2
                                  dQ1
                                                                                    2
which yields Q1 = a¡c 2b
                         ¡ Q22 : (Second order condition checks since ddQu21 = ¡2b < 0:) But
                                                                           1
notice that this equation yields Q1 < 0 if Q2 > a¡c
                                                  b
                                                      while producing a negative quantity is not
feasible for …rm 1. Consequently, we have
                                     ½              ¾
                                       a ¡ c Q2                  a¡c
                          B1 (Q2 ) =         ¡          if Q2 ·
                                        2b      2                  b

and
                                                                      a¡c
                                 B1 (Q2 ) = f0g        if Q2 >            :
                                                                       b
By using symmetry, we also …nd
                                        ( ©               ª
                                              a¡c
                                               2b
                                                  ¡ Q21       ; if Q1 · a¡c
                                                                         b
                           B2 (Q1 ) =
                                          f0g;                  if Q1 > a¡c
                                                                         b
                                                                            :

Observe next that it is impossible that either …rm will choose to produce more than a¡c
                                                                                      b
                                                                                         in
the equilibrium (why?). Therefore, by Proposition B, to compute the Nash equilibrium all we
need to do is to solve the following two equations:
                                 a ¡ c Q¤1                            a ¡ c Q¤2
                         Q¤2 =        ¡          and          Q¤1 =        ¡    :
                                  2b    2                              2b    2
Doing this, we …nd that the unique Nash equilibrium of this game is
                                             µ          ¶
                                  ¤    ¤       a¡c a¡c
                                (Q1 ; Q2 ) =       ;      :
                                                3b   3b

(See Figure 1.) Interestingly, this is precisely the only outcome that survives the IESD actions.
   An interesting question to ask at this point is if in the Cournot model it is ine¢cient for
these …rms to produce their Nash equilibrium levels of output. The answer is yes, showing
that the ine¢ciency of decentralized behavior may surface in more realistic settings than the
scenario of the prisoners’ dilemma suggests. To prove this, let us entertain the possibility that
…rms 1 and 2 collude (perhaps forming a cartel) and act as a monopolist with the proviso that

                                                   6
                            Q2

                           a/b


                        (a-c)/b   B1
                                                Nash
                                                equilibrium
                                               ((a-c)/3b, (a-c)/3b)
                       (a-c)/2b



                                                          B2
                                                                          Q1
                                          (a-c)/2b       (a-c)/b   a/b



                   Figure 1: Nash Equilibrium of Cournot Duopoly Game

the pro…ts earned in this monopoly will be distributed equally among the …rms. Given the
market demand, the objective function of the monopolist is

                                       U (Q) = (a ¡ c ¡ bQ)Q

where Q = Q1 + Q2 2 [0; 2a=b]: By using calculus, we …nd that the optimal level of production
for this monopoly is Q = a¡c
                          2b
                             : (Since the cost functions of the individual …rms are identical, it
does not really matter how much of this production takes place in whose plant.) Consequently,
                                         µ           µ       ¶ ¶µ       ¶
          pro…ts of the monopolist     1               a¡c         a¡c       (a ¡ c)2
                                    =      a¡c¡b              )            =
                      2                2                2b           2b         4b
while
                                                                    (a ¡ c)2
                 pro…ts of …rm i in the equilibrium = ui (Q¤1 ; Q¤2 ) =      :
                                                                       9b
Thus, while both parties could be strictly better o¤ had they formed a cartel, the equilibrium
predicts that this will not take place in actuality. (Do you think this insight generalizes to
the n-…rm case?) 2

    Remark. There is reason to expect that symmetric outcomes will materialize in symmetric
games since in such games all agents are identical to one another. Consequently, symmetric
equilibria of symmetric games is of particular interest. Formally, we de…ne a symmetric
equilibrium of a symmetric game as a Nash equilibrium of this game in which all players play
the same action. (Note that this concept does not apply to asymmetric games.) For instance,
in the Cournot duopoly game above, (Q¤1 ; Q¤2 ) corresponds to a symmetric equilibrium. More

                                                     7
generally, if the Nash equilibrium of a symmetric game is unique, then this equilibrium must
be symmetric. Indeed, suppose that G is a symmetric 2-person game in strategic form with
a unique equilibrium and (a¤1 ; a¤2 ) 2 N(G): But then using the symmetry of G one may show
easily that (a¤2 ; a¤1 ) is a Nash equilibrium of G as well. Since there is only one equilibrium of
G; we must then have a¤1 = a¤2 : 2
    Nash equilibrium requires that no individual has an incentive to deviate from it. In other
words, it is possible that at a Nash equilibrium a player may be indi¤erent between her
equilibrium action and some other action, given the other players’ actions. If we do not allow
this to happen, we arrive at the notion of a strict Nash equilibrium. More formally, an
action pro…le a¤ is a strict Nash equilibrium if

                  ui (a¤i ; a¤¡i ) > ui (ai ; a¤¡i )   for all ai 2 Ai such that ai 6= a¤i

holds for each player i:
    For example, both Nash equilibria are strict in Stag-Hunt game, whereas the unique equi-
librium of the following game, (M,R), is not strict

                                                   L           R
                                               T ¡1; 0       0; ¡1
                                                                   :
                                               M 0; 1         0; 1
                                               B 1; ¡1       ¡1; 0




                                                         8
      The Nash Equilibrium and Dominant/Dominated Actions
   Now that we have seen a few solution concepts for games in strategic form, we should
analyze the relations between them. We turn to such an analysis in this section.
   It follows readily from the de…nitions that every strictly dominant strategy equilibrium is
a weakly dominant strategy equilibrium, and every weakly dominant strategy equilibrium is
a Nash equilibrium. Thus,
                                  Ds (G) µ Dw (G) µ N(G)
for all strategic games G: For instance, (C,C) is a Nash equilibrium for PD; in fact this is the
only Nash equilibrium of this game (do you agree?).

   Exercise. Show that if all players have a strictly dominant strategy in a strategic game,
then this game must have a unique Nash equilibrium.

    However, there may exist a Nash equilibrium of a game which is not a weakly or strictly
dominant strategy equilibrium; the BoS provides an example to this e¤ect. What is more
interesting is that a player may play a weakly dominated action in Nash equilibrium. Here is
an example:
                                             ®    ¯
                                         ® 0,0 1,0                                      (1)
                                         ¯ 0,1 3,3
Here (®; ®) is a Nash equilibrium, but playing ¯ weakly dominates playing ® for both players.
This observation can be stated in an alternative way:

      Proposition C. A Nash equilibrium need not survive the IEWD actions.

   Yet the following result shows that if IEWD actions somehow yields a unique outcome,
then this must be a Nash equilibrium in …nite strategic games.

    Proposition D. Let G be a game in strategic form with …nite action spaces. If the iterated
elimination of weakly dominated actions results in a unique outcome, then this outcome must
be a Nash equilibrium of G:3
    Proof. For simplicity, we provide the proof for the 2-person case, but it is possible to
generalize the argument in a straightforward way. Let the only actions that survive the IEWD
actions be a¤1 and a¤2 ; but to derive a contradiction, suppose that (a¤1 ; a¤2 ) 2 = N(G): Then, one of
the players must not be best-responding to the other, say this player is the …rst one. Formally,
we have
                              u1 (a¤1 ; a¤2 ) < u1 (a01 ; a¤2 ) for some a01 2 A1 .                  (2)
  3
      So, for instance, (1; :::; 1) must be a Nash equilibrium of guess-the average game:


                                                         9
But a01 must have been weakly dominated by some other action a001 2 A1 at some stage of the
elimination process, so

           u1 (a01 ; a2 ) · u1 (a001 ; a2 )   for each a2 2 A2 not yet eliminated at that stage.

Since a¤2 is never eliminated (by hypothesis), we then have

                                                u1 (a01 ; a¤2 ) · u1 (a001 ; a¤2 ):

Now if a001 = a¤1 ; then we contradict (2). Otherwise, we continue as we did after (2) to obtain an
action a000
        1 2 = fa01 ; a001 g such that u1 (a01 ; a¤2 ) · u1 (a000  ¤        000  ¤
                                                             1 ; a2 ): If a1 = a1 we are done again, otherwise
we continue this way and eventually reach the desired contradiction since A1 is a …nite set by
hypothesis. ¥

   However, even if IEWD actions results in a unique outcome, there may be Nash equilibria
which do not survive IEWD actions (The game given by (1) illustrates this point). Further-
more, it is important that IEWD actions leads to a unique outcome for the proposition to
hold. For example in the BoS game all outcomes survive IEWD actions, yet the only Nash
equilibrium outcomes are (m,m) and (o,o). One can also, by trivially modifying the proof
given above show that if IESD actions results in a unique outcome, then that outcome must
be a Nash equilibrium. In other words, any …nite and dominance solvable game has a unique
Nash equilibrium. But how about the converse of this? Is it the case that a Nash equilib-
rium always survives the IESD actions. In contrast to the case with IEWD actions (recall
Proposition C), the answer is given in the a¢rmative by our next result.

   Proposition E. Let G be a 2-person game in strategic form. If (a¤1 ; a¤2 ) 2 N(G); then a¤1
and a¤2 must survive the iterated elimination of strictly dominated actions.
    Proof. We again give the proof in the 2-person case for simplicity. To obtain a contra-
diction, suppose that (a¤1 ; a¤2 ) 2 N(G); but either a¤1 or a¤2 is eliminated at some iteration.
Without loss of generality, assume that a¤1 is eliminated before a¤2 : Then, there must exist an
action a01 2 A1 (not yet eliminated at the iteration at which a¤1 is eliminated) such that,

                     u1 (a¤1 ; a2 ) < u1 (a01 ; a2 )    for each a2 2 A2 not yet eliminated.

But a¤2 is not yet eliminated, and thus

                                                u1 (a¤1 ; a¤2 ) < u1 (a01 ; a¤2 )

so that (a¤1 ; a¤2 ) cannot be a Nash equilibrium, a contradiction. ¥




                                                               10
   Di¢culties with the Nash Equilibrium
   Given that the Nash equilibrium is the most widely used equilibrium concept in economic
applications, it is important to understand its limitations. We discuss some of these as the
…nal order of business in this chapter.

   (1) A Nash equilibrium may involve a weakly dominated action by some play-
ers.
    We observed this possibility in Proposition C. Ask yourself if (®; ®) in the game (1) is a
sensible outcome at all. You may say that if player 1 is “certain” that player 2 will play ® and
vice versa, then it is. But if either one of the players assigns a probability in her mind that her
opponent may play ¯; the expected utility maximizing (rational) action would be to play ¯;
no matter how small this probability is. Since it is rare that all players are “certain” about the
intended plays of their opponents (even if pre-play negotiation is possible), weakly dominated
Nash equilibrium appears unreasonable. This leads us to re…ne the Nash equilibrium in the
following manner.

    De…nition. An undominated Nash equilibrium of a game G in strategic form is
de…ned as any Nash equilibrium (a¤1 ; :::; a¤n ) such that none of the a¤i s is a weakly dominated
action. The set of all undominated Nash equilibria of G is denoted Nundom (G):

    Example. If G denotes the game given in (1), then Nundom (G) = f(¯; ¯)g: On the
other hand, Nundom (G) = N(G) where G = PD, BoS, CG. The same equality holds for the
linear Cournot model. (Question: Are all strict Nash equilibria of a game in strategic form
undominated?)

   Exercise. Compute the set of all Nash and undominated Nash equilibria of the chairman’s
paradox game.

   (2) Nash equilibrium need not exist.
   For instance, N(MW) = ;: Thus the notion of Nash equilibrium does not help us predict
how the MW game would be played in practice. However, it is possible to circumvent this
problem to some extent by enlarging the set of actions available to the players by allowing
them to “randomize” among their actions. This leads us to the notion of a mixed strategy
which we shall talk about later in the course.

   (3) Nash equilibrium need not be unique.
   The BoS and CG provide two examples to this e¤ect. This is a troubling issue in that
multiplicity of equilibria avoids making a sharp prediction with regard to the actual play of
the game. (What do you think will be the outcome of BoS?) However, sometimes preplay
negotiation and/or conventions may provide a way out of this problem.

                                                11
    Preplay Negotiation. Consider the CG game and allow the players to communicate (cheap
talk) prior to the game being played. What do you think will be the outcome then? Most
people answer this question as (r,r). The reason is that agreement on the outcome (r,r) seems
in the nature of things, and what is more, there is no reason why players should not play r once
this agreement is reached (i.e. such an agreement is self-enforcing). Thus, pure coordination
games like CG can often be “solved” via preplay negotiation. (More on this shortly.)
    But how about BoS? It is not at all obvious which agreement would surface in the preplay
communication in this game, and hence, even if an agreement on either (m,m) or (o,o) would
be self-enforcing, preplay negotiation does not help us “solve” the BoS. Maybe we should learn
to live with the fact that some games do not admit a natural “solution.”

    Focal Points. It has been argued by many game theorists that the story of some games
isolate certain Nash equilibria as “focal” in that certain details that are not captured by the
formalism of a game in strategic form may actually entail a clear path of play. The following
will illustrate.

    Example. (A Nash Demand Game) Suppose that two individuals (1 and 2) face the
problem of dividing $100 among themselves. They decide to use the following method in
doing this: each of them will simultaneously declare how much of the $100 (s)he wishes to
have, and if their total demand exceeds $100 no one will get anything (the money will then
go to a charity) while they will receive their demands otherwise (anything left on the table
will go to a charity).
    We may formulate this scenario as a 2-person game in strategic form where Ai = [0; 100]
and                                         (
                                              xi ; if x1 + x2 · 100
                            ui (x1 ; x2 ) =
                                              0; otherwise.
Notice that we are assuming here that money is utility; an assumption which is often useful.
(Caveat: But this is not an unexceptionable assumption - what if the bargaining was between
a father and his 5 year old daughter or between two individuals who hate each other?).

   ² Play the game.

   ² Verify that the set of Nash equilibria of this game is

                                f(x1 ; x2 ) 2 [0; 100]2 : x1 + x2 = 100g:

   ² Well, there are just too many equilibria here; any division of $100 is an equilibrium!
     Thus, for this game, the predictions made on the basis of the Nash equilibrium are
     bound to be very weak. Yet, when people actually played this game in the experiments,
     in an overwhelming number of times the outcome (50; 50) is observed to surface. So, in

                                                12
        this example, 50-50 split appears to be a focal point suggesting that equity considerations
        (which are totally missed by the formalism of the game theory we have developed so
        far) may play a role in certain Nash equilibrium to be selected in actual play. 2


    Unfortunately, the notion of a focal point is an elusive one. It is di¢cult to come up with
a theory for it since it is not clear what is the general principle that underlies it. The above
example provides, after all, only a single instance of it; one can think of other scenarios with
a focal equilibrium.4 It is our hope that experimental game theory (which we shall talk about
further later on) will shed light into the matter in the future.

       (4) Nash equilibrium is not immune to coalitional deviations.
    Consider again the CG game in which we argued that preplay negotiation would eliminate
the Nash equilibrium (1,1). The idea is that the players can jointly deviate from the outcome
(1,1) through communication that takes place prior to play), for at the Nash equilibrium
outcome (r,r) they are both strictly better o¤. This suggests the following re…nement of the
Nash equilibrium.

   De…nition. A Pareto optimal Nash equilibrium of a game G in strategic form is
any Nash equilibrium a¤ = (a¤1 ; :::; a¤n ) such that there does not exist another equilibrium
b¤ = (b¤1 ; :::; b¤n ) 2 N(G) with

                                   ui (a¤ ) < ui (b¤ )        for each i 2 N:

We denote the set of all Pareto optimal Nash equilibrium of G by NPO (G):

    A Pareto optimal Nash equilibrium outcome in a 2-person game in strategic form is par-
ticularly appealing (when preplay communication is allowed), for once such an outcome has
been somehow realized, the players would not have an incentive from deviating from it neither
unilaterally (as the Nash property requires) nor jointly (as Pareto optimality requires). As
you would expect, this re…nement of Nash equilibrium delivers us what we wish to …nd in the
CG: NPO (CG) = f(r,r)g: As you might expect, however, the Pareto optimal Nash equilibrium
concept does not help us “solve” the BoS, for we have NPO (BoS) = N(BoS):
   4
    Here is another game in strategic form with some sort of a focal point. Two players are supposed to
partition the letters A,B,C,D,E,F,G,H with the proviso that player 1’s list must contain A and player 2’s list
must contain H. If their lists do not overlap, then they both win, they lose otherwise. (How would you play
this game in the place of player 1? Player 2?) What happens very often when the game is played in the
experiments is that people in the position of player 1 chooses {A,B,C,D} and people in the position of player
2 chooses {E,F,G,H}; what is going on here, how do people coordinate so well? For more examples of this
sort and a thorough discussion of focal points, an excellent reference is T. Schelling (1960), The Strategy of
Con‡ict, London: Oxford University Press.


                                                         13
    The fact that Pareto optimal Nash equilibrium re…nes the Nash equilibrium points to the
fact that the latter is not immune to coalitional deviations. This is because the stability
achieved by the Nash equilibrium is by means of avoiding only the unilateral deviations of
each individual. Put di¤erently, the Nash equilibrium does not ensure that no coalition of
the players will …nd it bene…cial to defect. The Pareto optimal Nash equilibrium somewhat
corrects for this through avoiding defection of the entire group of the players (the so-called
grand coalition) in addition to that of the individuals (the singleton coalitions). Unfortunately,
this re…nement does not solve the problem entirely. Here is a game in which the Pareto optimal
Nash equilibrium does not re…ne the Nash equilibrium in a way that deals with coalitional
considerations in a satisfactory way.
   Example. In the following game G player 1 chooses rows, player 2 chooses columns and
player 3 chooses tables.

                                   ®      ¯
                              a 1,1,-5 -5,-5,0 if player 3 chooses U
                              b -5,-5,0 0,2,7
                                   ®       ¯
                              a 1,1,6 -5,-5,0 if player 3 chooses D
                              b -5,-5,0 -2,-2,0

(For instance, we have N = f1; 2; 3g; A3 = fU; Dg and u3 (a,¯;D) = 0:) In this game we have

                           NPO (G) = f(b; ¯; U); (a; ®; D)g = N(G);

but coalitional considerations indicate that the equilibrium (a; ®;D) is rather unstable, pro-
vided that players can communicate prior to play. Indeed, it is quite conceivable in this case
that players 2 and 3 would form a coalition and deviate from (a; ®;D) equilibrium by publicly
agreeing to take actions ¯ and U, respectively. Since this is clearly a self-enforcing agreement,
it casts doubt on the claim that (a; ®;D) is a reasonable prediction for this game. 2

   You probably see where the above example is leading to. It suggest that there is merit in
re…ning even the Pareto optimal Nash equilibrium by isolating those Nash equilibria that are
immune against all possible coalitional deviations. To introduce this idea formally, we need a
…nal bit of

   Notation. Let A = £i2N Ai be the outcome space of an n-person game in strategic form,
and let (a1 ; :::; an ) 2 A: For each K µ N; we let aK denote the vector (ai )i2K 2 £i2K Ai ; and
a¡K the vector (ai )i2NnK 2 £i2NnK Ai : By (aK ; a¡K ); we then mean the outcome (a1 ; :::; an ):
Clearly, aK is the pro…le of actions taken by all players who belong to the coalition K; and
we denote the set of all such pro…les by AK (that is, AK = £i2K Ai by de…nition). Similarly,

                                               14
a¡K is the pro…le of actions taken by all players who does not belong to K; and A¡K is a
shorthand notation for the set A¡K = £i2NnK Ai :

   De…nition. A Strong Nash equilibrium of a game G in strategic form is any outcome
a = (a¤1 ; :::; a¤n ) such that, for all nonempty coalitions K µ N and all aK 2 AK ; there exists
 ¤

a player i 2 K such that

                                     ui (a¤K ; a¤¡K ) ¸ ui (aK ; a¤¡K ):

We denote the set of all strong Nash equilibrium of G by NS (G):5

   While its formal de…nition is a bit mouthful, all that the strong Nash equilibrium concept
does is to choose those outcomes at which no coalition can …nd it in the interest of each of its
members to deviate. Clearly, we have

                                     NS (G) µ NPO (G) µ N(G)

fort any game G in strategic form. Since, for 2-person games the notions of Pareto optimal
and strong Nash equilibrium coincide (why?), the only strong Nash equilibrium of the CG is
(r,r): On the other hand, in the 3-person game discussed above, we have NS (G) = f(b; ¯;U)g
as is desired (verify!).
    Unfortunately, while the notion of the strong Nash equilibrium solves some of our problems,
it is itself not free of di¢culties. In particular, in many interesting games no strong Nash
equilibrium exists, for it is simply too demanding to disallow for all coalitional deviations.
What we need instead is a theory of coalition formation so that we can look for the Nash
equilibria that are immune to deviations by those coalitions that are likely to form. At
present, however, there does not exist such a theory that is commonly used in game theory,
the issue awaits much further research.6




     5
     The notion of the strong Nash equilibrium was …rst introduced by the mathematician and economist
Robert Aumann.
   6
     If you are interested in coalitional re…nements of the Nash equilibrium, a good place to start is the
highly readable paper by D. Bernheim, B. Peleg and M. Whinston (1987), “Coalition-proof Nash equilibria I:
Concepts,” Journal of Economic Theory, 42, pp. 1-12.

                                                     15
      Nash Equilibrium: Applications
      Prof. Levent Koçkesen
      Columbia University
      and
      Prof. Efe A. Ok
      New York University

      Introduction
    In this section, we shall consider several economic scenarios which are modeled well by
means of strategic games. We shall also examine the predictions that game theory provides
in such scenarios by using some of the equilibrium concepts that we have studied so far. One
major objective of this section is actually to establish a solid understanding of the notion of
Nash equilibrium, undoubtedly the most commonly used equilibrium concept in game theory.
We contend that the best way of understanding the pros and cons of Nash equilibrium is seeing
this concept in action. For this reason we shall consider below quite a number of examples.
Most of these examples are the toy versions of more general economic models and we shall
return to some of them in later chapters when we are better equipped to cover more realistic
scenarios.
      Auctions
    Many economic transactions are conducted through auctions. Governments sell treasury
bills, foreign exchange, mineral rights, and more recently airwave spectrum rights via auctions.
Art work, antiques, cars, and houses are also sold by auctions. Auction theory has also been
applied to areas as diverse as queues, wars of attrition, and lobbying contests.1
    There are four commonly used and studied forms of auctions: the ascending-bid auction
(also called English auction), the descending-bid auction (also called Dutch auction), the
…rst-price sealed bid auction, and the second-price sealed bid auction (also known as Vickrey
auction2 ). In the ascending-bid auction, the price is raised until only one bidder remains, and
that bidder wins the object at the …nal price. In the descending-bid auction, the auctioneer
starts at a very high price and lowers it continuously until the someone accepts the currently
announced price. That bidder wins the object at that price. In the …rst-price sealed bid
auction each bidder submits her bid in a sealed envelope without seeing others’bids, and the
object is sold to the highest bidder at her bid. The second-price sealed bid auction works the
same way except that the winner pays the second highest bid.
  1
     For a good introductory survey to the auction theory see Paul Klemperer (1999), “Auction Theory: A
Guide to the Literature,” Journal of Economic Surveys, 13(3), July 1999, pp. 227-286.
   2
     Named after William Vickrey of Columbia University who was awarded the Nobel Prize in economics in
1996.

                                                  1
     In this section we will analyze the last two forms of auctions, not only because they are
simpler to analyze but also because under the assumptions we will work with in this section
the …rst-price sealed bid auction is strategically equivalent to descending bid auction and the
second-price sealed bid auction is strategically equivalent to ascending bid auction.
     For simplicity we will assume there are only two individuals, players 1 and 2, who are
competing in an auction for a valuable object. While this may require a stretch of imagination,
it is commonly known that the value of the object to the player i is vi dollars, i = 1; 2; where
v1 > v2 > 0: (What we mean by this is that player i is indi¤erent between buying the object
at price vi and not buying it.) The outcome of the auction, of course, depends on the rules of
the auctioning procedure. In fact, identifying the precise nature of the outcomes in a setting
like this (and in similar scenarios) under various procedures is the subject matter of a very
likely sub…eld of game theory, namely the auction theory. In this section, our aim is to provide
an elementary introduction to this topic. let us then begin with analyzing this game theoretic
scenario …rst under the most common auctioning procedure.
    First-price sealed bid auction
    The rules of the …rst-price auction is such that after both players cast their bid (without
observing each others’bid), the highest bidder wins the object and pays her own bid. In case
of a tie, the object is awarded to player 1.3
    Assuming that utility is money (i.e., individuals are risk neutral), this bargaining procedure
results in the 2-person game in strategic form G = (A1 ; A2 ; u1 ; u2 ) where A1 = A2 = R+ ,
                                                (
                                                  v1 b1 ; if b1 b2
                                u1 (b1 ; b2 ) =
                                                  0;      otherwise

and                                                  (
                                                         v2   b2 ; if b2 > b1
                                   u2 (b1 ; b2 ) =
                                                         0;        otherwise
for all (b1 ; b2 ) 2 R2+ : (Here bi stands for the bid of player i; i = 1; 2).
    We now wish to identify the set of Nash equilibria of G. (In case you are wondering
why we are not checking for dominant strategy equilibrium, note that the following analysis
will demonstrate that Ds (G) = Dw (G) = ;.) Rather than computing the best response
correspondences of the players, we adopt here instead a direct approach towards this goal.
Let us try to …nd what properties a Nash equilibrium has to satisfy. We …rst claim that
    (1) In any Nash equilibrium player 1 (the individual who values the object the most) wins
the object.
   3
     There are other tie-breaking methods such as, randomly selecting a winner (by means of coin toss, say).
Our choice of the tie-breaking rule is useful in that it leads to a simple analysis. The reader should not …nd
it di¢ cult to modify the results reported below by using other tie-breaking rules.


                                                          2
    Proof: Let (b1 ; b2 ) be a Nash equilibrium, but for a contradiction, suppose player 1 does
not win the object. This implies that b1 < b2 and player 1’s payo¤ in equilibrium is zero, i.e.
u1 (b1 ; b2 ) = 0: Now if b2    v2 ; then b2 < v1 (since v2 < v1 ), and hence bidding, say b2 ; is a
strictly better response for player 1 when player 2 is bidding b2 : Therefore, bidding a strictly
smaller amount than b2 cannot be a best response for player 1. If, on the other hand, b2 > v2 ;
then u2 (b1 ; b2 ) < 0 so that bidding anything in the interval [0; b1 ] is a pro…table deviation for
player 2. In either case, then, we obtain a contradiction to the hypothesis that (b1 ; b2 ) is an
equilibrium. Therefore, we conclude that in any equilibrium (b1 ; b2 ) of G player 1 obtains the
object, that is, b1 b2 :
    Secondly,
    (2) b1 > b2 cannot hold in equilibrium, for in this case player 1 would deviate by bidding,
say, b2 and increase her payo¤ from v1 b1 to v1 b2 : Together with our …nding that b1 b2 ;
this implies that b1 = b2 must hold in equilibrium.
    Thirdly,
    (3) Neither b1 < v2 nor b1 > v1 can hold (player 2 would have a pro…table deviation in
the …rst case, and player 1 in the second case).
    So, any Nash equilibrium (b1 ; b2 ) of this game must satisfy

                                        v2    b1 = b2    v1 :

Is any pair (b1 ; b2 ) that satisfy these inequalities an equilibrium? Yes. The inequality v2 b1
guarantees that player 2 does not wish to win the object when player 1 bids b1 , so his action
is optimal. The inequality, b2 v1 ; on the other hand, guarantees that player 1 is also best
responding. We thus conclude that

                              N(G) = f(b1 ; b2 ) : v2   b1 = b2   v1 g

   Exercise. Verify the above conclusion by means of computing the best response corre-
spondences of the players 1 and 2, and plotting their graph in the (b1 ; b2 ) space.
    While N(G) is rather a large set and hence does not lead us to a sharp prediction, re…ning
this set by eliminating the weakly dominated actions solves this problem. Indeed, it is easily
veri…ed that bidding anything strictly higher than v2 is a weakly dominated action for player
2. To see this, suppose player 2 bids b02 which is strictly higher than v2 : Now, if player 1’s bid
b1 is greater than equal to b01 ; then player 1 wins the object and player 2’s payo¤ to b02 and to
bidding her valuation v2 are both zero. If, however, player 1’s bid is strictly smaller than b02
but greater than or equal to v2 ;then player 2 wins by bidding b02 but obtains a negative payo¤
since she pays more than her valuation. The payo¤ to bidding v2 ; on the other hand, is zero.
Similarly, bidding v2 is strictly better than bidding b02 if player 1’s bid is strictly smaller than

                                                  3
v2 : The following table summarizes this discussion. (Does bidding v2 weakly dominate bids
less than v2 as well?).

                                  b1     b02   v2        b1 < b02   b1 < v 2
                            v2    0            0                    0
                            b02   0            v2       b02 < 0     v2 b02 < 0
   Consequently, we have
                                       Nundom (G) = f(v2 ; v2 )g:
   Now, there is an intriguing normative problem with this equilibrium: the …rst player is not
bidding his true valuation. It is often argued that it would be desirable to design an auctioning
method in which all players are induced to bid their true valuations in equilibrium. But is such
a thing possible? This question was answered in the a¢ rmative by the economist William
Vickrey who has showed that truth-telling can be established even as a dominant action by
modifying the rules of the auction suitably. Let us carefully examine Vickrey’s modi…cation.
    Second-price sealed bid (Vickrey) auction
    The rules of the second-price auction is such that after both players cast their bid (without
observing each others’bid), the highest bidder wins the object and pays the bid of the other
player. In case of a tie, the object is awarded to player 1.
    Assuming that utility is money, this bargaining procedure results in the 2-person game in
strategic form G0 = (A1 ; A2 ; u1 ; u2 ) where A1 = A2 = R+ ,
                                                  (
                                                    v1 b2 ; if b1 b2
                                  u1 (b1 ; b2 ) =
                                                    0;      otherwise

and                                                 (
                                                        v2   b1 ; if b2 > b1
                                  u2 (b1 ; b2 ) =
                                                        0;        otherwise
for all (b1 ; b2 ) 2 R2+ : (Contrast G0 with the game G we studied above.)
    We now claim that Dw (G0 ) = f(v1 ; v2 )g: To see that bidding b1 = v1 is a dominant action
for player 1, we distinguish between two cases:
    Case 1. Player 2 bids strictly less than v1 (that is, b2 < v1 )
    In this case, by bidding v1 player 1 wins the object and achieves a utility level of v1 b2 > 0:
Bidding strictly less than v1 either makes her win the object (if b2         b1 < v1 ) with payo¤
v1 b2 ; or she looses the object (if b1 < b2 < v1 ) with payo¤ zero. So, bidding v1 is at least
as good as bidding strictly less than v1 ; and sometimes it is strictly better. Bidding strictly
greater than v1 ; on the other hand, brings player 1 a payo¤ of v1 b2 > 0; the same payo¤ as
she would get by bidding v1 :
    Case 2. Player 2 bids v1 (that is, b2 = v1 )

                                                         4
    In this case, every bid brings player 1 a payo¤ of zero.
    Case 3. Player 2 bids strictly more than v1 (that is, b2 > v1 )
    In this case, player 1 loses the object and obtains utility 0: So bidding v1 is again optimal
for player 1 since winning the object in this case would entail negative utility for him.
    Consequently, bidding v1 is a dominant action for player 1. A similar reasoning shows that
bidding v2 is a dominant action for player 2, and hence we have Dw (G0 ) = f(v1 ; v2 )g as is
sought. We hope you agree that this is a very nice result. Since, a weakly dominant strategy
equilibrium is also a Nash equilibrium, we also have that (v1 ; v2 ) is a Nash equilibrium. How-
ever, there are other Nash equilibria of this game. For example (v1 ; 0) is a Nash equilibrium
too (verify).

   Exercise. Generalize the above analysis by considering n 2 many individuals assuming
that the value of the object to player i is vi dollars, i = 1; :::; n; where v1 > > vn ; that the
object is given to the highest bidder with the smallest index in both the …rst and second-price
auctions, and that the winner pays the second highest bid in the second-price auction.

    By an ingenious modi…cation of the …rst-price auction, therefore, Vickrey was able to
guarantee the truthful revelation of the preferences of the agents in dominant strategy equi-
librium. This result shows that, by designing the rules of interaction carefully, one may force
the individuals to coordinate on normatively appealing outcomes, and this even without know-
ing the true valuations of the individuals! Vickrey’s technique provides a foundation for the
theory of implementation which has important applications in public economics where one
frequently needs to put on the mask of a social engineering. We shall talk about some of these
applications later on.




                                               5
       Buyer-Seller Games
    A seller,call him player s; is in possession of an object that is worth vs dollars to him (that
is, player s is indi¤erent between receiving vs dollars for the object and keeping the object).
The value of this object is vb dollars to a potential buyer, player b: We assume in what follows
that
                                            vb > vs > 0:
So, since the value of the object is higher for the buyer than it is for the seller, an e¢ cient
state of a¤airs demand that trade takes place. But what is the price that player b will pay
to player s? The buyer wants to pay only vs (well, she wants to pay nothing, but she knows
that the seller will not sell the object at a price strictly less than vs ) while the seller wants
to charge vb : The actual price of the object will thus be determined through the bargaining
of the players. Di¤erent bargaining scenarios would presumably lead to di¤erent equilibrium
prices. To demonstrate this, we shall consider here two such scenarios.4

    Bargaining Scenario 1: Sealed-bid …rst-price auction
    Each party proposes a price between vs and vb simultaneously (by means of a sealed bid).
If the price suggested by the buyer pb is strictly higher than that proposed by the seller, say ps ;
then trade takes place at price pb ; otherwise there is no trade. Assuming that utility is money,
this bargaining procedure results in the 2-person game in strategic form (Ab ; As ; ub ; us ) where
Ab = As = [vs ; vb ],                           (
                                                  vb pb ; if pb > ps
                                ub (pb ; ps ) =
                                                  0;      otherwise
and                                                   (
                                                          pb   vs ; if pb > ps
                                    us (pb ; ps ) =
                                                          0;        otherwise
for all (pb ; ps ) 2 [vs ; vb ]2 :
    We …rst observe that there is no Nash equilibrium (pb ; ps ) in which the buyer b buys the
object. Indeed, if pb > ps ; then bidding anything between ps and pb (e.g. pb =2 + ps =2) would
be a strictly better response for player b (than playing pb ) against ps :

   Exercise. Consider the game described above. Show that the best response correspon-
dence of players b and s are given as
                                         (
                                           ;;          if ps 2 [vs ; vb )
                              Bb (ps ) =
                                           [vs ; vb ]; if ps = vb
   4
     It is very likely that these scenarios will strike you as unrealistic. The objective of these examples is,
however, not achieving a satisfactory level of realism, but rather to illustrate the use of Nash equilibrium in
certain simple buyer-seller games. In later chapters, we will return to this setting and consider much more
realistic bargaining scenarios that involve sequential o¤ers and countero¤ers by the players.

                                                           6
and                                          (
                                                 [vs ; pb ]; if pb 2 (vs ; vb ]
                                Bs (pb ) =
                                                 [vs ; vb ]; if pb = vs
respectively. Deduce from this that the only equilibrium of the game is (pb ; ps ) = (vs ; vb ):

    Bargaining Scenario 2: Modi…ed sealed-bid …rst-price auction
    Each party proposes a price between vs and vb simultaneously (by means of a sealed bid).
If the price suggested by the buyer pb is at least as large as that proposed by the seller, say ps ;
then trade takes place at price pb ; otherwise there is no trade. Assuming again that utility is
money, this bargaining procedure results in the 2-person game in strategic form (Ab ; As ; ub ; us )
where Ab = As = [vs ; vb ],                    (
                                                 vb pb ; if pb ps
                               ub (pb ; ps ) =
                                                 0;      otherwise
and                                               (
                                                      pb   vs ; if pb ps
                                us (pb ; ps ) =
                                                      0;        otherwise
for all (pb ; ps ) 2 [vs ; vb ]2 :
    If you have solved the exercise above, you will …nd it easy to show that we have
                                             (
                                                 fps g; if ps 2 [vs ; vb )
                                Bb (ps ) =
                                                 [vs ; vb ]; if ps = vb
and                                          (
                                                 [vs ; pb ]; if pb 2 (vs ; vb ]
                                Bs (pb ) =
                                                 [vs ; vb ]; if pb = vs
in this game. Consequently, (pb ; ps ) 2 Bb (ps ) Bs (pb ) holds if, and only if, either (pb ; ps ) =
(vs ; vb ) (the no-trade equilibrium) or pb = ps 2 [vs ; vb ] (see Figure 2).
     Therefore, with a minor modi…cation of the bargaining procedure, one is able to generate
many equilibria in which trade occurs. (This is an important observation for especially the
seller, for, in many instances, it is the seller who design the bargaining procedure.) However,
the prediction of the Nash equilibrium in the resulting game is less than satisfactory due to the
large multiplicity of equilibria. (Check if undominated and/or Pareto optimal Nash equilibria
provide sharper predictions here.)




                                                       7
      Price Competition Models
    Game theory has many applications in the …eld of industrial organization. We have already
encountered one such application when we have considered in some detail the model of Cournot
duopoly in the previous chapter. Recall that in this scenario individual …rms were modeled
as competing in the market by choosing their output levels. However, it has been argued
in the literature that this model is not entirely satisfactory, especially if one is interested
in the short-run decision making of the …rms. For, as the argument goes, in the short-run
…rms would …nd it too costly to adjust their output level at will; it is rather through price
setting that they engage in competition with other …rms.5 To deal with this problem, several
oligopoly models in which …rms choose their prices (as opposed to quantities) were developed
in the literature. We now brie‡y discuss such a price competition model, which leads to a
dramatically di¤erent conclusion than does the Cournot model..
   Bertrand Duopoly with Homogeneous Products
   Consider the market structure underlying the linear Cournot model, but this time assume
that the …rms in the market engage in price competition, that is, they choose how much to
charge for their products. Recalling that a is the maximum price level in the market, we thus
model the action space for …rm i = 1; 2 as [0; a]: The pro…t function of …rm i on [0; a]2 in this
model (called the linear Bertrand duopoly) is de…ned as
                             ui (P1 ; P2 ) = Pi Qi (P1 ; P2 )   cQi (P1 ; P2 );
where Qi (P1 ; P2 ) denotes the output sold by …rm i at the price pro…le (P1 ; P2 ): If we assume
that there is no qualitative di¤erence between the products of the two …rms, it would be
natural to assume that the consumers always buy the cheaper good. In case both …rms charge
the same price, we assume that …rms 1 and 2 share the market equally. These assumptions
entail that                                   8
                                                a   Pi
                                              >
                                              <b    b
                                                       ;      Pi < Pj
                                                1 a      Pi
                               Qi (P1 ; P2 ) = 2 b          ; Pi = Pj
                                              >
                                              :
                                                         b
                                                0;            Pi > Pj
where j 6= i = 1; 2, and complete the formulation of the model at hand as a 2-person game in
strategic form.
    An immediate question to ask is if our prediction (based on the Nash equilibrium) about
the market outcome would be di¤erent in this model than in the linear Cournot duopoly
model. The answer is easily seen to be yes. To see this, recall that in the Nash equilibrium of
the linear Cournot duopoly model both …rms charge the same price, namely
                                               a c        2a c
                            P1 = P2 = a b              =     + ;
                                                3b         3     3
  5
   The argument was …rst given by the French mathematician Joseph Bertrand in 1883 as a critique of the
Cournot model.

                                                     8
so that …rm 1’s level of pro…ts is found as

                                                  2(a        c)     1   a   1   2a c          1
       ui (P1 ; P2 ) = (P1   c)Q1 (P1 ; P2 ) =                                     +      =      (a   c)2 :
                                                        3           2   b   b    3   3        9b

But, given that P2 = 2a   3
                            + 3c ; if …rm 1 undercuts …rm 2 by charging a marginally smaller price
than 2a
      3
        + 3c ; say 2a
                    3
                      + 3c " where " is some small positive number, then the pro…t level of …rm
1 increases since this …rm then grabs the entire market. Indeed, it can easily be checked that

                 2a c             2a c         2                    1                  2a c 2a c
        lim ui      +        ";      +     =      (a        c)2 >      (a   c)2 = ui      + ;  +        :
        "&0       3   3            3   3       9b                   9b                  3  3 3   3

Thus, the Cournot prices cannot constitute an equilibrium for the linear Bertrand model.
(How did we conclude this, really?) The problem is that the tie-breaking rule of the Bertrand
duopoly introduces a discontinuity to the model allowing …rms to achieve relatively large gains
through small alterations of their actions.6
    What then is the equilibrium? The analysis outlined in the previous paragraph actually
brings us quite close to answering this question. First observe that neither …rm would ever
charge a price below c as this would yield negative pro…ts (which can always be avoided
by charging exactly c dollars for the unit product). Thus, if the price pro…le (P1 ; P2 ) is
a Nash equilibrium, we must have P1 ; P2          c: Is P1 > P2 > c possible? No, for in this
case …rm 1 would be making zero pro…ts, and thus it would better for it to charge, say, P2
which will ensure positive pro…ts given that …rm 2’s price is P2 : How about P1 = P2 > c?
This is also impossible, because in this case either …rm can unilaterally increase its pro…ts by
undercutting the other …rm (just as in the discussion above) contradicting that (P1 ; P2 ) is a
Nash equilibrium. By symmetry, P2         P1 > c is also impossible, and hence we conclude that
at least one …rm must be charging precisely its unit cost c in the equilibrium. Can we have
P1 > P2 = c then? No, for in this case …rm 2 would not be best responding; it can increase
its pro…ts by charging, say, P1 =2 + c=2: Similarly, P2 > P1 = c is not possible. The only
candidate for equilibrium is thus (P1 ; P2 ) = (c; c); and this is indeed an equilibrium as you
can easily check: in the Nash equilibrium of the linear Bertrand duopoly, all …rms price their
products at unit cost.
    This is a surprising result since it envisages that all …rms operate with zero pro…ts in the
equilibrium. In fact, the equilibrium outcome here is nothing but the competitive equilibrium
outcome which is justi…ed in microeconomics only by hypothesizing a very large number of
…rms who act as price takers (not setters) in the industry. Here, however, we predict precisely
the same outcome in equilibrium with only two price setting …rms!
   6
     Notice that this is the third time we are observing that the tie-breaking rule is playing an important role
with regard to the nature of equilibrium. This is quite typical in many interesting strategic games, and hence,
it is always a good idea to inquire into the suitability of a speci…c tie-breaking rule in such models.


                                                            9
    Remark. The major culprit behind the above …nding is the fundamental discontinuity
that the Bertrand game possesses. Indeed, as noted earlier, it is possible in this game to alter
one’s action marginally (in…nitesimally) and increase the associated pro…ts signi…cantly, given
the other’s action. Such games are called discontinuous games, and often do not possess a
Nash equilibrium. For example, if we modify the linear Bertrand model so that the unit cost
of …rm 1, call it c1 ; exceeds that of …rm 2, we obtain an asymmetric Bertrand game that does
not have an equilibrium. (Exercise: Prove this.) But this is not a severe di¢ culty. It arises
only because we take the prices as continuous variables in the classic Bertrand model. If the
medium of exchange was discrete but small, then there would exist an equilibrium of this
game such that the high cost …rm 1 charges its unit cost (and thus make zero pro…ts) while
the low cost …rm 2 would grab the entire market by charging the lowest possible price strictly
below c1 : (Challenge: Formalize and prove this claim.)




                                              10
       Spatial Voting Games
    The example of Chairman’s paradox was our …rst excursion into voting theory which
provides an extensive realm for fruitful applications of game theory. In this section we provide
a more daring excursion, and introduce the so-called spatial voting model.
    If we think of the policy space as one-dimensional, then we can identify the set of all
political positions with the closed interval [0; 1]: Here we may think of 0 as the most leftist
position and 1 as the most rightist position. The interpretation of any other point in [0; 1]
is then given in the straightforward way.7 Let us assume next that each voter has an ideal
position in the political spectrum, and evaluate every other policy in [0; 1] by looking at the
distance between this point and her ideal point. For instance, the voter with the ideal point
1=2 2 [0; 1] likes the point 1=4 better than 1: More generally, an individual with ideal point
x in [0; 1] likes the point y better than z i¤ jx yj < jx zj : Such preferences are called
single-peaked in the literature because, for any x 2 [0; 1]; the mapping y 7! jx yj is strictly
increasing on [0; x] and strictly decreasing on [x; 1]: (Plot the graph of this mapping on [0; 1]
and see for yourself.)
    We model the society as a continuum, and posit that the voters (which can be identi…ed
with their ideal positions in this model) are distributed uniformly over [0; 1]: Thus 1/2 corre-
sponds to the median ideal position in the society, that is, the ideal positions of exactly half
of the society lie to the left of 1=2:
    The players in a voting game are the political candidates or parties. We consider the case
in which there are n 2 f2; 3g many candidates whose problem is to decide upon which policy
to propose (or, equivalently, which position to take in the political spectrum). Each citizen
votes for the candidate who has chosen the closest position to her ideal point (because she
has single-peaked preferences), and all this is known by the candidates. We assume that the
only goal of each candidate is to win the election.8 Of course, to complete the speci…cation
of the model, we must append to this setting a tie-breaking rule. We postulate in this regard
that candidates share equally the votes that they attract together. Each candidate prefers to
win the election to a tie for the …rst place, and the tie for the …rst place to losing the election.
   7
     The political spectrum is of course better modeled as being multidimensional; for instance, in the national
elections voters not only care about the position of a candidate on the heath care reform but also about his/her
position on the tax policy, education reform, social security, and so on. Allowing for multidimensionality in
voting models, however, complicates matters to a considerable degree, and hence we choose to con…ne our
attention here to the unidimensional setting.
   8
     Once again this is not the most realistic of assumptions. For instance, it would certainly be reasonable to
posit that the candidates have policy preferences on their own, and hence, care also about the policy that will
be implemented in equilibrium. However, vote maximization is certainly one of the major goals of politicians,
and the above model (which is sometimes called the Downsian model of political competition) is useful in
identifying the implictions of such an objective about the pre-election behavior of the candidates. It is by far
the most standard in the literature.

                                                      11
Losing the election may or may not be the worst outcome for a candidate, however, depending
on whether or not running in the election is costly. We take up each of these possibilities in
turn.

   Elections when running is not costly
   Let us …rst consider the case where there are two political candidates. In this case the
game at hand is a 2-person game with action spaces A1 = A2 = [0; 1]: The utility function for
candidate i is given as
                         8
                         >
                         < 1; if i wins the election alone at the position pro…le (`1 ; `2 )
          ui (`1 ; `2 ) = 12 ; if there is a tie at the position pro…le (`1 ; `2 )
                         >
                         :
                           0; if i loses the election at the position pro…le (`1 ; `2 );

where `j denotes the policy chosen by candidate j = 1; 2:
    We wish to …nd the set of Nash equilibria of this voting game. Rather then computing
the best response correspondences of the players, we again launch a direct attack. (You
are welcome to verify the validity of the subsequent analysis by using the best response
correspondences of the candidates.) Suppose that (`1 ; `2 ) is a Nash equilibrium. Consider
…rst the possibility that candidate 1 is winning the election at this position pro…le. Now
notice that if `1 6= 1=2; then candidate 2 hcan forceia win by choosing 1=2.
                                                                           h       Thisiis because, in
                                               `1 +1=2                       `1 +1=2
this case, she gets all the votes either in 0; 2       (if `1 > 1=2) or in       2
                                                                                     ; 1 (if `1 < 1=2)
which add up to more than the half of the total number of votes. But then since `2 is a
best response of candidate 2 against `1 ; it must also guarantee a win for her, contradicting
that candidate 1 is the winner in the equilibrium outcome (`1 ; `2 ): Therefore, we must have
`1 = 1=2: But this will not do either, because the best response of candidate 2 against `1 = 1=2
is to play 1=2 which forces a tie, contradicting again the hypothesis that candidate 1 was the
winner of the election in equilibrium. Thus, candidate 1 cannot win the election alone in
equilibrium, and by symmetry, neither can candidate 2. We thus learn that `1 = `2 must
be the case, that is, the election is bound to end up in a tie in equilibrium. But it is easily
checked that we cannot have `1 = `2 6= 1=2 in equilibrium (either party would then deviate
to, say, 1=2). The only possibility of equilibrium outcome in this game is thus `1 = `2 = 1=2;
and this is indeed an equilibrium as you can easily verify. The conclusion is that in the unique
equilibrium of the game both parties choose the median position.9
    Life gets more complicated if a third candidate decides to join the race. In the 3-person
game that obtains in this case, the action spaces are A1 = A2 = A3 = [0; 1] and the utility
   9
    If you are careful, you will notice that the assumption of carefully distributed individuals did not really
play a role in arriving at this conclusion. If the distribution is given by an arbitrary continuous density function
f on [0; 1] with f (x) > 0; the equilibrium would have both parties to locate on the median of this distribution.



                                                        12
function for candidate i is given as
                           8
                           >
                           < 1; if i wins the election alone at the position pro…le (`1 ; `2 ; `3 )
       ui (`1 ; `2 ; `3 ) = 12 ; if i there is a tie at the position pro…le (`1 ; `2 ; `3 )
                           >
                           :
                             0; if i loses the election at the position pro…le (`1 ; `2 ; `3 );

where `j denotes the policy chosen by candidate j = 1; 2; 3: The equilibrium of this game is
not a trivial extension of the previous game. Indeed, (`1 ; `2 ; `3 ) = (1=2; 1=2; 1=2) does not
correspond to a Nash equilibrium here. For, each candidate is getting approximately the 33%
of the total votes at this pro…le, and by moving slightly to the left (or right) of 1=2 any of the
candidates can increase her share of the votes almost to 50%. None of the candidates is thus
playing optimally given the actions of others.
    It turns out that there are many Nash equilibria of this 3-person voting game. As an
example let us verify that (`1 ; `2 ; `3 ) = (1=4; 1=4; 3=4) is an equilibrium. Begin with observing
that candidate 3 wins the election alone at this position pro…le. Therefore, this candidate
obviously does not have any incentive to deviate from 3=4 given that the other two candidates
position themselves at 1=4: Does candidate 1 (hence candidate 2) has a pro…table deviation?
No. Given that (`1 ; `3 ) = (1=4; 3=4); it is readily observed that if candidate 1 chooses instead
of 1=4 any position in the interval [0; 1=4]; then candidate 3 remains as the winner, and if she
deviates to any position in the interval [3=4; 1]; the candidate 2 becomes the winner alone.
Less clear is the implication of choosing a policy in the interval (1=4; 3=4): The hkey observation   i
here is that by doing so candidate 1 would attract the votes that belong to `1 +1=4     2
                                                                                            ; `1 +3=4
                                                                                                  2
                                                                                                        :
Thus in this case candidate 1 would get exactly the 25% of the total vote (see Figure 5.) But
either candidate 2 (3=4 > `1         1=2) or candidate 3 (if 1=2        `1 > 1=4) is bound to collect
37.5% of the votes in this case. Therefore, choosing 1=4 is as good as choosing any other
position in [0; 1] for candidate 1 given the actions of others, she maintains a payo¤ level of 0
with any such choice. So, at the pro…le (`1 ; `2 ; `3 ) = (1=4; 1=4; 3=4); neither candidate 1 nor
candidate 2 can force a win by means of a unilateral deviation, and we conclude that this
outcome is a Nash equilibrium. (Challenge: Compute all the Nash equilibria of this game.)
    But in voting problems the issue of coalitions arise very naturally. So we better ask if the
equilibrium (1=4; 1=4; 3=4) is actually strong or not. Indeed, it is not. For, candidates 1 and 2
can jointly deviate at this pro…le to, say, 3=4 " for small " > 0; and thus force a win (which
yields a payo¤ of 1=2 to each). What is more, there is no strong Nash equilibrium of this
game. (Challenge: Prove this.)

   Elections when running is costly
   In this case, staying out is a meaningful alternative for each political candidate. Conse-
quently, we model the situation as a game in strategic form by setting, for each candidate i;



                                                    13
Ai = [0; 1] [ fstay outg and
                    8
                    >
                    > 1; if i wins the election alone at the position pro…le `
                    >
                    < 1 ; if i ties for the …rst place at the position pro…le `
            ui (`) = 2
                    >
                    > 0; if i stays out at the position pro…le `
                    >
                    :
                         1; if i runs but loses the election at the position pro…le `
         Q
where ` 2 ni=1 Ai with n 2 f2; 3g:
   The equilibrium analysis of this game is essentially identical to the …rst game considered
above when n = 2: Consequently, we leave the related analysis as an

   Exercise. Prove: If n = 2; the unique Nash equilibrium of the game de…ned above is
(1=2; 1=2):

     Once again, life is more complicated in the 3-person scenario, but now this is not because
of the multiplicity of equilibria. On the contrary, this game has no Nash equilibrium when
n = 3: A sketch of proof can be given as follows. First observe that, since each candidate can
avoid losing by staying out of the election, all running candidates must tie for the …rst place
in any equilibrium. Moreover, there cannot be only one running candidate in equilibrium, for
otherwise, any other player may choose the same location with the running candidate and
forces a tie for the …rst place (which is better than staying out). Similarly, it cannot be that
everyone stays out in equilibrium. Therefore, in any given equilibrium, there must exist two or
more running candidates who tie for the …rst place. Consider …rst the possibility that there are
exactly two such candidates. Then, by the exercise above, both candidates must be choosing
1=2: But since the running candidates share the total votes, the remaining candidate can force
a win by choosing slightly to the left (or right) of 1=2. Thus staying out cannot be a best
response for this candidate, contradicting that we are at an equilibrium. The …nal possibility
is the case in which all three candidates choose not to stay out and tie for the …rst place.
Suppose that (`1 ; `2 ; `3 ) is such an equilibrium. If `1 = `2 = `3 ; any one of the candidates can
pro…tably deviate and force a win (why?), so at least two components of (`1 ; `2 ; `3 ) must be
distinct. Suppose that `1 6= `2 = `3 : In this case, candidate 1 can force a win by getting very
close to `2 (see this?), and hence she cannot be best responding in the pro…le (`1 ; `2 ; `3 ): The
two other possibilities in which exactly two components of (`1 ; `2 ; `3 ) are distinct are ruled out
similarly. We are then left with the following …nal possibility: `1 6= `2 6= `3 6= `1 : To rule out
this case as well, we pick the leftist candidate, call her i (so we have `i = minf`1 ; `2 ; `3 g); and
observe that this candidate can force a win by choosing a position very close to the median of
f`1 ; `2 ; `3 g. So, …nally, we can conclude that there does not exist a Nash equilibrium for the
3-person voting game at hand.
     The following table summarizes our …ndings in the four spatial voting games we have


                                                 14
examined above.

                                                The number of candidates
                                         2                            3
                               the only equilibrium
   Running is       costly                              a Nash equilibrium does not exist
                               is the median position
                               the only equilibrium     there are many Nash equilibria but a
                  not costly
                               is the median position   strong Nash equilibrium does not exist

It is illuminating to observe how seemingly minor alterations in these voting models result in
such vast changes in the set of equilibria.




                                               15
                        Mixed Strategy Equilibrium
                                      Levent Koçkesen




1    Introduction
Up to now we have assumed that the only choice available to players was to pick an action
from the set of available actions. In some situations a player may want to randomize between
several actions. If a player chooses which action to play randomly, we say that the player is
using a mixed strategy, as opposed to a pure strategy. In a pure strategy the player chooses
an action for sure, whereas in a mixed strategy, she chooses a probability distribution over
the set of actions available to her. In this section we will analyze the implications of allowing
players to use mixed strategies.
   As a simple illustration, consider the following matching-pennies game.

                                            H       T
                                       H    1; ¡1   ¡1; 1
                                       T    ¡1; 1   1; ¡1

    If we restrict players’ strategies only to actions, as we have done so far, this game has no
Nash equilibrium (check), i.e., it has no Nash equilibrium in pure strategies. Since we have
argued that Nash equilibrium is a necessary condition for a steady state, does that mean that
the matching-pennies game has no steady state? To answer this question let us allow players
to use mixed strategies. In particular, let each player play H and T with half probability
each. We claim that this choice of strategies constitute a steady-state, in the sense that if
each player predicts that the other player will play in this manner, then she has no reason not
to play in the speci…ed manner. Since player 2 plays H with probability 1=2; the expected
payo¤ of player 1 if she plays H is (1=2) (1) + (1=2) (¡1) = 0: Similarly, the expected payo¤
to action T is 0. Therefore, player 1 has no reason to deviate from playing H and T with
probability 1=2 each. Similarly, if player 2 predicts that player 1 will play H and T with
half probability each, she has no reason to deviate from doing the same. This shows that the
strategy pro…le where player 1 and 2 play H and T with half probability each is a steady-state
of this situation. We say that playing H and T with probabilities 1=2 and 1=2 respectively
constitutes a mixed strategy equilibrium of this game.
    If we assume that players repeatedly play this game and forecast each other’s action on the
basis of past play, then each player actually has an incentive to adopt a mixed strategy with
these probabilities. If, for example, player 1 plays H constantly, rather than the above mixed

                                               1
strategy, then it is reasonable that player 2 will come to expect him to play H again and play
her best response, which is T: This will result in player 1 getting ¡1 as long as he continues
playing H: Therefore, he should try to be unpredictable, for as soon as his opponent becomes
able to predict his action, she will be able to take advantage of the situation. Therefore, player
1 should try to mimic playing a mixed strategy by playing H and T with frequencies 1=2 and
1=2:
    Consider the Hawk-Dove game for a another motivation.

                                                H      D
                                           H    0; 0   6; 1
                                           D    1; 6   3; 3

Suppose each period two randomly selected individuals, who both belong to a large population,
play this game. Also suppose that 3=4 of the population plays H (is hawkish) and 1=4 plays
D (is dovish), but no player can identify the opponent’s type before the game is played. We
claim that this is a stable population composition. Since the opponent is chosen randomly
from a large population, each player expects the opponent to play H with probability 3=4 and
D with probability 1=4: Would a dovish player do better if she were a hawkish player? Well,
on average a dovish player gets a payo¤ of (3=4) (1) + (1=4) (3) = 3=2: A hawkish player gets
(3=4) (0) + (1=4) (6) = 3=2 as well. Therefore, neither type of player has a reason to change
his behavior.


2     Mixed Strategies and Expected Payo¤s
De…nition 1 A mixed strategy ®i for player i; is a probability distribution over his set of
available actions, Ai : In other words, if player i has m actions available, a mixed strategy
is an m dimensional vector (®1i ; ®2i ; : : : ; ®m              k
                                                 i ) such that ®i ¸ 0; for all k = 1; 2; : : : m; and
Pm     k
  k=1 ®i = 1:


    We will denote by ®i (ai ) the probability assigned to action ai by the mixed strategy ®i : Let
4 (X) denote the set of all probability distributions on a set X: Then, any mixed strategy ®i
for player i is an element of 4 (Ai ) ; i.e., ®i 2 4 (Ai ) : Following the convention we developed
for action pro…les, we will denote by ® = (®i )i2N a mixed strategy pro…le, i.e., a mixed strategy
for each player in the game. To denote the strategy    ³
                                                             pro…le
                                                                 ´
                                                                     in which player i plays ®0i and
the rest of the players play ®¤j ; j 6= i; we will use ®0i ; ®¤¡i : Unless otherwise stated, we will
assume that players choose their mixed strategies independently.
    Notice that not all actions have to receive a positive probability in a mixed strategy.
Therefore, it is also possible to see pure strategies as degenerate mixed strategies, in which all
but one action is played with zero probability.

                                                  2
   Let us illustrate these concepts by using the Battle of the Sexes game that we introduced
before:
                                             m    o
                                        m 2,1 0,0 :
                                         o 0,0 1,2
A possible mixed strategy for player 1 is (1=2; 1=2) ; or ®1 (m) = ®1 (o) = 1=2: Another
is (1=3; 2=3) ; or ®1 (m) = 1=3; ®1 (o) = 2=3: For player 2, we may have (2=3; 1=3) ; i.e.,
®2 (m) = 2=3; ®2 (o) = 1=3; as a possible mixed strategy. A mixed strategy pro…le could be
((1=2; 1=2) ; (2=3; 1=3)) another could be ((1=3; 2=3) ; (2=3; 1=3)) : Notice that we always have
®1 (o) = 1 ¡ ®1 (m) and ®2 (o) = 1 ¡ ®2 (m) simply because probabilities have to add up to
one. Therefore, sometimes we may want to simplify the notation by de…ning, say p ´ ®1 (m) ;
q ´ ®2 (m) ; and using (p; q) to denote a strategy pro…le, where player 1 chooses m with
probability p and action o with probability 1 ¡ p; and player 2 chooses m with probability q
and action o with probability 1 ¡ q: Notice, if there were 3 actions for a player, then we would
need at least two numbers to specify a mixed strategy for that player.
    Once we allow players to use mixed strategies, the outcomes are not deterministic anymore.
For example if both players play m with probability 1=2 in the BoS game, then each action
pro…le is obtained with probability 1=4: Therefore, we have to specify players’ preferences
over lotteries, i.e., over probability distributions over outcomes, rather than preferences over
certain outcomes. We will assume that players’ preferences satisfy the assumptions of Von
Neumann and Morgenstern so that the payo¤ to an uncertain outcome is the weighted
average of the payo¤s to underlying certain outcomes, weight attached to each outcome being
the probability with which that outcome occurs. (See Dutta, P., ch. 27 for more on this).
In other words, we assume that for each player i, there is a payo¤ function ui de…ned over
the certain outcomes a 2 A, such that the player’s preferences over lotteries on A can be
represented by the expected value of ui : If each outcome a 2 A occurs with probability p (a) ;
then the expected payo¤ of player i is
                                               X
                                    ui (p) ´         p (a) ui (a) :
                                               a2A

Example 2 For example, in the BoS game if each player i plays the mixed strategy ®i ; then
the expected payo¤ of player i is given by

               u1 (®1 ; ®2 ) = ®1 (m) ®2 (m) ui (m; m) + ®1 (m) ®2 (o) ui (m; o)
                                +®1 (o) ®2 (m) ui (o; m) + ®1 (o) ®2 (o) ui (o; o)
                            = ®1 (m) [®2 (m) ui (m; m) + ®2 (o) ui (m; o)]
                                +®1 (o) [®2 (m) ui (o; m) + ®2 (o) ui (o; o)]
                            = ®1 (m) u1 (m; ®2 ) + ®1 (o) u1 (o; ®2 ) ;

                                                 3
or,

                  u1 (®1 ; ®2 ) = ®1 (m) ®2 (m) (2) + ®1 (m) ®2 (o) ui (m; o) (0)
                                  +®1 (o) ®2 (m) (0) + ®1 (o) ®2 (o) (1)
                              = 2®1 (m) ®2 (m) + ®1 (o) ®2 (o) ;

and that of player 2 is

                          u2 (®1 ; ®2 ) = ®1 (m) ®2 (m) + 2®1 (o) ®2 (o) :

Notice that, since ®i (o) = 1 ¡ ®i (m) ; we can write these expected payo¤s as

                   u1 (®1 ; ®2 ) = 2®1 (m) ®2 (m) + (1 ¡ ®1 (m)) (1 ¡ ®2 (m))
                               = 1 ¡ ®2 (m) + ®1 (m) [3®2 (m) ¡ 1]

and
                        u2 (®1 ; ®2 ) = 2 ¡ 2®1 (m) + ®2 (m) [3®1 (m) ¡ 2] :
For example, if player 1 plays m for sure, i.e., ®1 (m) = 1; and player 2 plays m with probability
1=3; then

                           u1 (®1 ; ®2 ) = 1 ¡ 1=3 + 1 [3 £ (1=3) ¡ 1]
                                        = 2=3

and

                           u2 (®1 ; ®2 ) = 2 ¡ 2 (1) + (1=3) [3 (1) ¡ 2]
                                        = 1=3:

De…nition 3 The support of a mixed strategy ®i is the set of actions to which ®i assigns a
positive probability, i.e.,
                            supp (®i ) = fai 2 Ai : ®i (ai ) > 0g :

      In the above example we have, supp(®1 ) = fmg ; and supp(®2 ) = fm; og :


3       Mixed Strategy Equilibrium
De…nition 4 Best response correspondence of player i is the set of mixed strategies which
are optimal given the other players’ mixed strategies. In other words:

                               Bi (®¡i ) = arg max ui (®i ; ®¡i ) :
                                               ®i 24(Ai )



                                                 4
Example 5 Suppose ®2 (m) = 1=2: Then, we have

                        u1 (®1 ; (1=2; 1=2)) = 1 ¡ 1=2 + ®1 (m) [3 (1=2) ¡ 1]
                                               1 1
                                             =   + ®1 (m)
                                               2 2
therefore,
                                         B1 ((1=2; 1=2)) = f(1; 0)g :
In general, letting p ´ ®1 (m) ; and q ´ ®2 (m) ; we can express the best response of player 1
in terms of optimal choice of p in response to q
                                                 8
                                                 >
                                                 < f1g ;
                                                 >        if q > 1=3
                                      B1 (q) = > [0; 1] ; if q = 1=3 :
                                               >
                                               :
                                                 f0g ; if q < 1=3

     The best response correspondence of player 2, i.e., optimal choices of q in response to p; is
                                                 8
                                                 >
                                                 < f1g ;
                                                 >       if p > 2=3
                                     B2 (p) = > [0; 1] ; if q = 2=3 :
                                              >
                                              :
                                                f0g ; if q < 2=3

     [See Figure 1.]

De…nition 6 A mixed strategy equilibrium is a mixed strategy pro…le (®¤1 ; : : : ; ®¤n ) such that,
for all i = 1; : : : ; n                        ³        ´
                             ®¤i 2 arg max ui ®i ; ®¤¡i
                                                   ®i 24(Ai )

or                                                           ³   ´
                                                ®¤i 2 Bi ®¤¡i :

     In the Battle of the Sexes game, then, the set of mixed strategy Nash equilibria is

                       f((1; 0) ; (0; 1)) ; ((0; 1) ; (1; 0)) ; ((2=3; 1=3) ; (1=3; 2=3))g :

Alternatively, we may say that the set of mixed strategy equilibria is

                             f(®1 (m) ; ®2 (m)) : (1; 0) ; (0; 1) ; (2=3; 1=3)g :


Remark 1 A mixed strategy ®i is a best response to ®¡i if and only if every action in the
support of ®i is itself a best response to ®¡i : Otherwise, player i could transfer probability
from the action which is not a best response to an action which is a best response and strictly
increase his payo¤.

                                                         5
                             q                           B2(p)



                             1

                                                                 B1(q)




                            1/3


                              0               2/3    1           p




                    Figure 1: Best Response Correspondences in BoS game

Remark 2 This suggests an easy way to …nd mixed strategy Nash equilibrium. A mixed
strategy pro…le ®¤ is a mixed strategy Nash equilibrium if and only if for each player i, each
action in the support of ®¤i is a best response to ®¤¡i : In other words, each action in the support
of ®¤i yields the same expected payo¤ when played against ®¤¡i ; and no other action yields a
strictly higher payo¤.

Remark 3 One implication of the above remark is that a nondegenerate mixed strategy equi-
librium is not strict.

Example 7 In the BoS game, if (®¤1 ; ®¤2 ) is a mixed strategy equilibrium with supp(®¤1 ) =supp(®¤2 ) =
fm; og, then it must be that the expected payo¤s to m and o are the same for both player against
®¤¡i : In other words, for player 1

                                      2®¤2 (m) = 1 ¡ ®¤2 (m)

and for player 2
                                      ®¤1 (m) = 2 ¡ 2®¤1 (m)
which imply that

                                         ®¤2 (m) = 1=3
                                         ®¤1 (m) = 2=3

Proposition 8 Every …nite strategic form game has a mixed strategy equilibrium.



                                                 6
4    Dominated Actions and Mixed Strategies
In earlier lectures we de…ned an action to be weakly or strictly dominated, only if there existed
another action which weakly or strictly dominated that action. However, it is possible that
an action is not dominated by any other action, yet it is dominated by a mixed strategy.

De…nition 9 In a strategic form game, player i’s mixed strategy ®¤i strictly dominates her
action a0i if
                       ui (®i ; a¡i ) > ui (a0i ; a¡i ) for all a¡i 2 A¡i :

Example 10 Consider the following game,

                                             L      R
                                        T    1; 1   1; 0
                                                         :
                                        M    3; 0   0; 3
                                        B    0; 1   4; 1

Clearly, no action dominates T; but the mixed strategy ®1 (M ) = 1=2; ®1 (B) = 1=2 strictly
dominates T:

Remark 4 A strictly dominated action is never used with positive probability in a mixed
strategy equilibrium

    To …nd the mixed strategy equilibria in games where one of the players have more than two
actions one should …rst look for strictly dominated actions and eliminate them. (see example
118.2 in Osborne chapter 4 on my web page).




                                               7
                                  Bayesian Games
                                          Levent Koçkesen


    So far we have assumed that all players had perfect information regarding the elements
of a game. These are called games with complete information. A game with incomplete
information, on the other hand, tries to model situations in which some players have private
information before the game begins. The initial private information is called the type of the
player. For example, types could be the privately observed costs in an oligopoly game, or
privately known valuations of an object in an auction, etc.


1     Preliminaries
A Bayesian game is a strategic form game with incomplete information. It consists of:

    ² a set of players, N = f1; : : : ; ng ;
      and for each i 2 N

    ² an action set, Ai ; (A = £i2N Ai )

    ² a type set, £i ; (£ = £i2N £i )

    ² a probability function,
                                               pi : £i ! 4 (£¡i )

    ² a payo¤ function,
                                               ui : A £ £ ! R:

    The function pi summarizes what player i believes about the types of the other players given
her type. So, pi (µ¡i jµi ) is the conditional probability assigned to the type pro…le µ¡i 2 £¡i :
Similarly, ui (ajµ) is the payo¤ of player i when the action pro…le is a and the type pro…le is µ:
    We call a Bayesian game …nite if N; Ai and £i are all …nite, for all i 2 N: A pure
strategy for player i in a Bayesian game is a function which maps player i’s type into her
action set
                                            ai : £i ! Ai ;
so that ai (µi ) is the action choice of type µi of player i:
    A mixed strategy for player i is

                                           ®i : £i ! 4 (Ai )

                                                    1
so that ®i (ai jµi ) is the probability assigned by ®i to action ai by type µi of player i:
    Suppose there are two players, player 1 and 2 and for each player there are two possible
types. Player i’s possible types are µi and µ0i : Suppose that the types are independently
distributed and the probability of µ1 is p and the probability of µ2 is q: For a given pure
strategy pro…le a¤ the expected payo¤ of player 1 of type µ 1 is
                      qu1 (a¤1 (µ1 ) ; a¤2 (µ2 ) jµ1 ; µ2 ) + (1 ¡ q) u1 (a¤1 (µ1 ) ; a¤2 (µ02 ) jµ1 ; µ 02 ) :
Similarly, for a given mixed strategy pro…le ®¤ the expected payo¤ of player 1 of type µ1 is
     X                                                                          X                   ³      0
                                                                                                               ´
 q         ®¤1 (a1 jµ1 ) ®¤2 (a2 jµ2 ) u1 (a1 ; a2 jµ1 ; µ2 ) + (1 ¡ q)             ®¤1 (a1 jµ1 ) ®¤2 a2 jµ2 u1 (a1 ; a2 jµ1 ; µ02 )
     a2A                                                                      a2A


2      Bayesian Equilibrium
De…nition 1 A Bayesian equilibrium of a Bayesian game is a mixed strategy pro…le ® =
(®i )i2N ; such that for every player i 2 N and every type µi 2 £i ; we have
                                                                            0                       1
                                             X                        X         Y
             ®i (:jµi ) 2 arg max                     pi (µ¡i jµi )         @            ®j (aj jµj )A ° (ai ) ui (ajµ) :
                                °24(Ai )
                                           µ¡i 2£¡i                   a2A     j2Nnfig

Remark 1 Type, in general, can be any private information that is relevant to the player’s
decision making, such as the payo¤ function, player’s beliefs about other players’ payo¤ func-
tions, her beliefs about what other players believe her beliefs are, and so on.
Remark 2 Notice that, in the de…nition of a Bayesian equilibrium we need to specify strategies
for each type of a player, even if in the actual game that is played all but one of these types
are non-existent. This is because, given a player’s incomplete information, analysis of that
player’s decision problem requires us to consider what each type of the other players would do,
if they were to play the game.


3      Some Examples

3.1        Battle of the Sexes with incomplete information.
Suppose player 2 has perfect information and two types l and h: Type l loves going out with
player 1 whereas type h hates it. Player 1 has only one type and does not know which type is
player 2. Her beliefs place probability 1=2 on each type. The following tables give the payo¤s
to each action and type pro…le:
                                                 B S                            B S
                                            B    2,1 0,0                  B     2,0 0,2
                                            S    0,0 1,2                  S     0,1 1,0
                                                 type l                         type h


                                                                  2
We can represent this situation as a Bayesian game:

   ² N = f1; 2g

   ² A1 = A2 = fB; Sg

   ² £1 = fxg ; £2 = fl; hg

   ² p1 (ljx) = p1 (hjx) = 1=2; p2 (xjl) = p2 (xjh) = 1:

   ² u1 ; u2 are given in the tables above.

    Since player 1 has only one type (i.e., his type is common knowledge) we will omit references
to his type from now on.
    Let us …nd the Bayesian equilibria of this game by analyzing the decision problem of each
player of each type:
    Player 2 of type l : Given player 1’s strategy ®1 ; his expected payo¤ to

   ² action B is ®1 (B) ;

   ² action S is 2 (1 ¡ ®1 (B))

   so that his best response is to play B if ®1 (B) > 2=3 and to play S if ®1 (B) < 2=3:
   Player 2 of type h : Given player 1’s strategy ®1 ; his expected payo¤ to

   ² action B is (1 ¡ ®1 (B)) ;

   ² action S is 2®1 (B)

   so that his best response is to play B if ®1 (B) < 1=3 and to play S if ®1 (B) > 1=3:
   Player 1 : Given player 2’s strategy ®2 (:jl) and ®2 (:jh) ; her expected payo¤ to

   ² action B is
                        1               1
                          ®2 (Bjl) (2) + ®2 (Bjh) (2) = ®2 (Bjl) + ®2 (Bjh) ;
                        2               2
   ² action S is
                1                     1                         ®2 (Bjl) + ®2 (Bjh)
                  (1 ¡ ®2 (Bjl)) (1) + (1 ¡ ®2 (Bjh)) (1) = 1 ¡                     :
                2                     2                                  2




                                               3
    Therefore, her best response is to play B if ®2 (Bjl) + ®2 (Bjh) > 2=3 and to play S if
®2 (Bjl) + ®2 (Bjh) < 2=3:
    Let us …rst check if there is a pure strategy equilibrium in which both types of player
2 play B; i.e. ®2 (Bjl) = ®2 (Bjh) = 1: In this case player 1’s best response is to play B
as well to which playing B is not a best response for player 2 type h: Similarly check that
®2 (Bjl) = ®2 (Bjh) = 0 and ®2 (Bjl) = 0 and ®2 (Bjh) = 1 cannot be part of a Bayesian
equilibrium. Let’s check if ®2 (Bjl) = 1 and ®2 (Bjh) = 0 could be part of an equilibrium. In
this case player 1’s best response is to play B: Player 2 type l’s best response is to play B and
that of type h is S: Therefore,

                             (®1 (Bjx) ; ®2 (Bjl) ; ®2 (Bjh)) = (1; 1; 0)

is a Bayesian equilibrium.
    Clearly, there is no equilibrium in which both types of player 2 mixes. Suppose only type
l mixes. Then, ®1 (B) = 2=3; which implies that ®2 (Bjl) + ®2 (Bjh) = 2=3: This, in turn,
implies that ®2 (Bjh) = 0: Since ®2 (Bjh) = 0 is a best response to ®1 (Bjx) = 2=3; the
following is another Bayesian equilibrium of this game

                          (®1 (B) ; ®2 (Bjl) ; ®2 (Bjh)) = (2=3; 2=3; 0) :

As an exercise show there is one more equilibrium given by

                          (®1 (B) ; ®2 (Bjl) ; ®2 (Bjh)) = (1=3; 0; 2=3) :


3.2    Cournot Duopoly with incomplete information.
The pro…t functions are given by

                                       ui = qi (µi ¡ qi ¡ qj ) :

Firm 1 has one type µ1 = 1; but …rm 2 has private information about its type µ2 : Firm 1
believes that µ 2 = 3=4 with probability 1=2 and µ 2 = 5=4 with probability 1=2; and this belief
is common knowledge.
    We will look for a pure strategy equilibrium of this game. Firm 2 of type µ 2 ’s decision
problem is to
                                     max q2 (µ 2 ¡ q1 ¡ q2 )
                                         q2

which is solved at
                                              µ2 ¡ q1
                                         q2¤ (µ 2 ) = :
                                                 2
   Firm 1’s decision problem, on the other hand, is
                         ½                                                   ¾
                         1                        1
                     max q1 (1 ¡ q1 ¡ q2¤ (3=4)) + q1 (1 ¡ q1 ¡ q2¤ (5=4))
                      q1 2                        2

                                                    4
which is solved at
                                2 ¡ q2¤ (3=4) ¡ q2¤ (5=4)
                        q1¤ =                             :
                                            4
Solving yields,
                          1             11             5
                     q1¤ = ; q2¤ (3=4) = ; q2¤ (5=4) = :
                          3             24            24




                                         5
      Auctions
    Many economic transactions are conducted through auctions. Governments sell treasury
bills, foreign exchange, publicly owned companies, mineral rights, and more recently airwave
spectrum rights via auctions. Art work, antiques, cars, and houses are also sold by auctions.
Government contracts are awarded by procurement auctions, which are also used by …rms
to buy inputs or to subcontract work. Takeover battles are e¤ectively auctions as well and
auction theory has been applied to areas as diverse as queues, wars of attrition, and lobbying
contests.1
    There are four commonly used and studied forms of auctions:

   1. ascending-bid auction (also called the open, oral, or, English auction): the price is raised
      until only one bidder remains, and that bidder wins the object at the …nal price.

   2. descending-bid auction (also called Dutch auction): the auctioneer starts at a very high
      price and lowers it continuously until someone accepts the currently announced price.
      That bidder wins the object at that price.

   3. …rst-price sealed bid auction: each bidder submits her bid in a sealed envelope without
      seeing others’bids, and the object is sold to the highest bidder at her bid.

   4. second-price sealed bid auction (also known as Vickrey auction2 ). Bidders submit their
      bids in a sealed envelope, the highest bidder wins but pays the second highest bid.

    Auctions also di¤er with respect to the valuation of the bidders. In a private value auction
each bidder’s valuation is known only by the bidder, as it could be the case, for example, in an
artwork or antique auction. In a common value auction, the actual value of the object is the
same for everyone, but bidders have di¤erent private information regarding that value. For
example, the value of an oil tract or a company maybe the same for everybody but di¤erent
bidders may have di¤erent estimates of that value.
    We will analyze sealed bid auctions, not only because they are simpler to analyze but also
because in the private values case, the …rst-price sealed bid auction is strategically equivalent
to descending bid auction and the second-price sealed bid auction is strategically equivalent
to ascending bid auction.
  1
     For a good introductory survey to the auction theory see Paul Klemperer (1999), “Auction Theory: A
Guide to the Literature,” Journal of Economic Surveys, 13(3), July 1999, pp. 227-286.
   2
     Named after William Vickrey of Columbia University who was awarded the Nobel Prize in economics in
1996.




                                                  1
1     Independent Private Values
Previously, we have looked at two forms of auctions, namely First Price and Second Price
Auctions, in a complete information framework in which each bidder knew the valuations
of every other bidder. In this section we relax the complete information assumption and
revisit these two form of auctions. In particular, we will assume that each bidder knows only
her own valuation, and the valuations are independently distributed random variables whose
distributions are common knowledge.
    The following elements de…ne the general form of an auction that we will analyze:

      Set of bidders, N = f1; 2; : : : ; ng ;
      and for each i 2 N

      a type set (set of possible valuations),     i = [v; v] ; v     0:

      an action set, Ai = R+ (actions are bids)

      a belief function: player i believes that her opponents’valuations are independent draws
      from a distribution function F that is strictly increasing and continuous on [v; v] :

      a payo¤ function, which is de…ned for any a 2 A; v 2 as follows
                           (
                             vi P (a)
                                m
                                      ; if aj ai for all j 6= i; and jfj : aj = ai gj = m
               ui (a; v) =
                             0;         if aj > ai for some j 6= i

      where P (a) is the price paid by the winner if the bid pro…le is a: Notice that in the case
      of a tie the object is divided equally among all winners.

1.1    Second Price Auctions
In this design, highest bidder wins and pays a price equal to the second highest bid. Although
there are many Bayesian equilibria of second price auctions, bidding own valuation vi is weakly
dominant for each player i: To see this let x be the highest of the other bids and consider
bidding a0i < vi ; vi ; and a00i > vi : Depending upon the value of x; the following table gives the
payo¤s to each of these actions by i

                      x a0i        a0i < x < vi      x = vi          vi < x a00i    a00i < x
            a0i    win/tie;pay x   lose           lose              lose            lose
                                                                                             :
            vi     win; pay x      win; pay x     tie; pay vi       lose            lose
            a00i   win; pay x      win; pay x     win; pay vi       win/tie;pay x   lose

   By bidding smaller than vi ; you sometimes lose when you should win (ai < x < vi ) and by
bidding more than vi , you sometimes win when you should lose (ai > x > vi ):

                                                   2
1.2    First Price Auctions
In …rst price auctions, the highest bidder wins and pays her bid. Let us denote the bid of
player with type vi by i (vi ) and look for symmetric equilibria, i.e. i (v) = (v) for all
i 2 N: First, although we will not attempt to do so here, it is possible to show that strategies
  i (vi ) ; and hence (v) ; are strictly increasing and continuous on [v; v] :(see Fudenberg and
Tirole, 1991). So, let’s assume that they are, and check if they are once we locate a possible
equilibrium.
     The expected payo¤ of player with type v who bids b when all the others are bidding
according to is given by

                        (v    b) prob (highest bid is b) = (v               b) (prob ( (v)                     b))n 1
                                                                                           1             n 1
                                                             = (v           b) F               (b)             :

(Because vi are independently distributed). The …rst order condition for maximizing the
expected payo¤ is

                    1         n 1                                 1         n 2                1                   1
          F             (b)         + (v   b) (n    1) F              (b)         F0               (b)         0    1         = 0:
                                                                                                                        (b)

by the fact that is almost everywhere di¤erentiable (since it is strictly increasing), and by
the inverse function theorem. For (v) to be an equilibrium …rst order condition must hold
when we substitute (v) for b;
                                                                                                         1
                             F (v)n 1 + (v         (v)) (n       1) F (v)n 2 F 0 (v)                 0       = 0;
                                                                                                         (v)
or
              0
                  (v) F (v)n 1 + (n          1) (v) F 0 (v) F (v)n 2 = (n                       1) vF 0 (v) F (v)n 2
which is a di¤erential equation in : Integrating both sides, we get
                                         Z v
                                   n 1
                          (v) F (v)    =     (n 1) xF (x)n 2 F 0 (x) dx
                                          v
                                                    Z v
                                               n 1
                                       = vF (v)         F (x)n 1 dx:
                                                                            v

Solving for       (v) ;                                      Rv
                                                             v
                                                                  F (x)n 1 dx
                                              (v) = v                                  :
                                                                  F (v)n 1
One can easily show that is continuous and strictly increasing in v as we hypothesized.
Furthermore, notice that (v) = v; but (v) < v for v > v: That is, except the player with
the lowest valuation, everybody bids less than her valuation. As an exercise, let’s calculate
assuming F is uniform on [0; 1]; i.e., F (x) = x.

                                                             3
                                          Rv
                                          0
                                               xn 1 dx                       1 vn    n 1
                             (v) = v                   =v                          =     v:
                                               vn 1                        v n 1 n    n

   Uniform example solved explicitly: Let’s look for a symmetric equilibrium of the
form (v) = av: The expected payo¤ of player with type v who bids b when all the others are
bidding according to is given by

                     (v    b) prob (highest bid is b) = (v                            b) (prob (av           b))n 1
                                                                 = (v                 b) (b=a)n 1 :

The …rst order condition for maximizing the expected payo¤ is

                                              (v      b) (n          1) = b;

which is solved at
                                                            n        1
                                                    b=                   v:
                                                                 n
1.3    All-Pay Auctions
Consider an auction in which the highest bidder wins the auction but every bidder pays
his/her bid. This model could model bribes, political contests, Olympic competition, war-of-
attritions, etc. Again, let’s look for a symmetric equilibrium, i (v) = (v) for all i 2 N:The
expected payo¤ of player with type v who bids b when all the others are bidding according to
  is given by

                 v        prob (highest bid is b)            b=v                  prob ( (v)            b)n 1         b
                                                                                        1         n 1
                                                                 = vF                       (b)          b:

Let F be uniform over [0; 1]: Then, this becomes
                                                      1          n 1
                                               v           (b)                    b:

The …rst order condition for maximizing the expected payo¤ is

                                                       1             n 2                 1
                               1 + v (n       1)           (b)                    0         1         = 0:
                                                                                                (b)

For   (v) to be an equilibrium …rst order condition must hold when we substitute                                          (v) for b;
                                                                                  1
                                       1 + v (n            1) v n 2           0       = 0;
                                                                                  (v)
or
                                               0
                                                   (v) = (n           1) v n 1

                                                             4
which is a di¤erential equation in : Integrating both sides, we get
                                         Z v
                                   (v) =     (n 1) xn 1 dx
                                                    0
                                                    (n   1) n
                                                =          v :
                                            n
Notice that as n increases the equilibrium bid decreases.

2    Revenue Equivalence
In second price auctions each bidder bids her value and pays the second highest. Therefore,
the expected revenue of the seller is the expected second highest value. In a …rst price auction,
the highest bidder is the one with the highest value and bids a function of her value, which is
n 1
 n
    vmax in our example above. Therefore, the seller’s expected revenue in a …rst price and a
second price auction depends on the expectation of the highest and the second highest value,
respectively. Given that there are n bidders who each has a value (drawn independently from a
common distribution), what are the expected values of the highest and second highest values?
Order statistics provide the answer.

    Order Statistics
    Suppose that v is a real-valued random variable with distribution function F and density
function f . Also suppose that n independent values are drawn from the same distribution to
form a random sample (v1 ; v2 ; : : : ; vn ) : Let v(k) denote the kth smallest of (v1 ; v2 ; : : : ; vn ) and
call it kth order statistic. In particular v(n) is the highest and v(n 1) is the second highest
order statistics. Let Fk denote the distribution function of v(k) : Let’s start with the distribution
function of v(n) :

                             Fn (x) = prob v(n)          x = prob (all vi       x)
                                     = [F (x)]n :

Similarly,

                        Fn 1 (x) = prob v(n 1)           x
                                  = prob (either n or (n          1) of v’s are       x)
                                            n                             n 1
                                  = [F (x)] + n (1           F (x)) [F (x)]

In general,

                          Fk (x) = prob (vk         x)
                                 = prob ((number of v’s that are x)                  k)
                                   Xn
                                            n!
                                 =                 F (x)j (1 F (x))n j
                                   j=k
                                       j! (n   j)!

                                                         5
   Hence, if F is uniform on [0; 1]; i.e., F (x) = x, we have

                      Fn (x) = xn ; Fn 1 (x) = xn + n (1                     x) xn 1
                      fn (x) = nxn 1 ; fn 1 (x) = (n                  1) n (1      x) xn 2 :

Therefore,
                                                    Z 1
                                    E[v(n) ] =                xnxn 1 dx
                                                      0
                                                     n
                                                =
                                                    n+1
and
                                         Z 1
                          E[v(n 1) ] =         x (n       1) n (1            x) xn 2 dx
                                          0
                                     n 1
                                   =      :
                                     n+1
Now, in a second price auction the expected revenue is the expected second highest value
                                                     n 1
                                 E[R2 ] = E[v(n 1) ] =     ;
                                                     n+1
and the revenue in the …rst price auction is the expected bid of the bidder with the highest
value, i.e.,
                                                    n         1
                                     E[R1 ] =                     E[v(n) ]
                                                          n
                                                    n         1    n
                                                =
                                                          n       n+1
                                             n 1
                                                = :
                                             n+1
    Therefore, both auction forms generate the same expected revenues. This is an illustration
of the revenue equivalence theorem:

Theorem Any auction with independent private values with a common distribution in which

        1. the number of the bidders are the same and the bidders are risk-neutral,
        2. the object always goes to the buyer with the highest value,
        3. the bidder with the lowest value expects zero surplus,

      yields the same expected revenue.

    Therefore, all four types of the auctions yield the same expected revenue for the seller in
the case of independent private values and risk neutrality. This theorem also allows us to
calculate bidding strategies of other auctions. An all-pay auction, for example, satis…es the
conditions of the theorem and hence must yield the same expected revenue.

                                                      6
3    Common Values and The Winner’s Curse
In a common value auction, bidders have all the same value but each bidder only observes
a private signal about the value. Therefore, if a bidder wins the auction, i.e., is the highest
bidder, it is likely that the other bidders received worse signals than the winner. In other words,
the value of the object conditional on winning is smaller than the unconditional expected value.
If this is not taken into account, then the winner might bid an amount more than the actual
value of the object, a situation known as the winner’s curse.
    As an example suppose v = t1 +t2 ; where v is the common value but bidder i observes only
the signal ti : Assume that each ti is distributed independently and has a uniform distribution
over [0; 1]: This, for example, be a takeover battle where the value of the target company is
the same but each bidder obtains an independent signal about the value. Suppose that the
auction is a …rst-price sealed bid auction. Denote the strategies by bi (ti ) and look for an
equilibrium in which bi (ti ) = ati : The expected payo¤ of player 1 given that player 2 bids
according to b2 (t2 ) = at2 is given by

                     U1 (b1 ; t1 ) = E[v     b1 j b1 > b2 ]prob (b1 > b2 )
                                = E[t1 + t2            b1 j b1 > at2 ]prob (b1 > at2 )
                                = E[t1 + t2    b1 j t2 < b1 =a]prob (t2 < b1 =a)
                                                                 b1
                                = (t1 + E[t2 j t2 < b1 =a] b1 )
                                                                 a
                                         b1          b1
                                = t1 +         b1
                                         2a          a

First order condition is
                     @U1 (b1 ; t1 )               b1               1 b1        1
                                    =      t1 +             b1       +             1   = 0;
                        @b1                       2a               a   a      2a

which implies that
                                                        1
                                           2 1                   b1 = t1 :
                                                       2a
For b1 = at1 to be optimal we must have

                                                        1
                                           2 1                   at1 = t1 ;
                                                       2a

which implies that a = 1: Therefore, bi (ti ) = ti is a Nash equilibrium.
   As a comparison consider the independent private values case where vi = ti + 0:5: Note
that this is the expected value in the above model conditional upon observing ti (but not
conditional upon winning). Let’s look for an equilibrium of the form bi (ti ) = ati + c: The



                                                         7
expected payo¤ of player 1 to bidding b1 given that player 2 is using the strategy at2 + c is

                         U1 (b1 ; t1 ) = E[v        b1 ]prob (b1 > b2 )
                                    = E[t1 + 0:5              b1 ]prob (b1 > at2 + c)
                                                                             b1 c
                                    = (t1 + 0:5             b1 ) prob t2 <
                                                                               a
                                                                 b1 c
                                    = (t1 + 0:5             b1 )
                                                                   a
if a    b1   a + c: Assume that this holds. Then, the …rst order condition is
                         @U1 (b1 ; t1 )        b1       c                         1
                                        =                   + (t1 + 0:5    b1 )     =0
                            @b1                     a                             a
which is solved at
                                          1     1
                                      b1 = c + t1 + 0:25:
                                          2     2
For b1 (t1 ) = at1 + c to be optimal, we must have
                                     1    1
                                       c + t1 + 0:25 = at1 + c;
                                     2    2
which implies that a = 0:5; c = 0:5: Therefore,
                                                      t1 1
                                            b1 (t1 ) =  + ;
                                                      2  2
                                                      t2 1
                                            b2 (t2 ) = +
                                                      2  2
constitutes a Bayesian Nash equilibrium (indeed the unique equilibrium) of this auction. (No-
tice that this satis…es that above restriction a b1 a + c for all t1 :) Also note that
                                               t1 1
                                                 +              t1
                                               2   2
for all t1 2 [0; 1]; hence there is always underbidding in common value auctions. The reason
is that the expected value of the object is smaller conditional upon winning in common value
auctions, whereas this value does not depend on the event of winning or not winning.

4      Auction Design
The auctioneer may have di¤erent objectives in designing an auction. The government which
is privatizing a company, for example, might want to generate the highest revenue from the
auction, or might want to make sure that it is e¢ cient, i.e., that the company goes to the
bidder with the highest valuation for it, or to a bidder with some other characteristics. Auction
theory helps in designing auctions by comparing di¤erent auction formats in terms of their
equilibrium outcomes. For example, if the objective is to generate the highest revenue, then

                                                            8
di¤erent auction formats may be compared on the basis of the expected equilibrium revenues
to …nd the best one. In the case of private, independent values with the same number of risk
neutral bidders, revenue equivalence theorem says that the format does not matter, as long
as the reserve price is set right. Therefore, the cases where the values are correlated (as in
the case of common value auctions), or the bidders are risk averse, auction design becomes a
challenging matter. In practice, collusion and entry-deterrence also becomes relevant design
problems. Collusion is relevant because revenue equivalence does not hold if there is collusion.
Also, remember that the expected revenue from an auction increases in the number of bidders
even when the revenue equivalence holds, and hence the auctioneer has an incentive to prevent
entry-deterrence.

4.1    Need for a Reserve Price
If there is only one bidder who comes to the auction, the seller will not make any money,
unless she sets a reserve price. What is the optimal reserve price? This is similar to the case
where the seller is a monopoly and tries to …nd the optimal price. Assuming that the costs
are sunk and therefore the total payo¤ of the seller is given by the total revenue, the expected
payo¤ is given by

                          E[R (p)] = prob (sale occurs at price p)   p
                                  = prob (p < v)       p
                                  = (1    F (p)) p:

This is maximized when
                                    f (p) p + (1      F (p)) = 0
or
                                              1     F (p)
                                         p=               :
                                                  f (p)
So, if F is uniform over [0,1],
                                                  1   p
                                          p=
                                             1
which implies that p = 1=2: So, an optimal auction must set a reserve price of 0:5 in this
particular case.

4.2    Common Values
We have seen above that …rst-price sealed bid auction leads to lower bids in the case of common
value auctions. In general, if the signals received by the bidders are positively correlated,
ascending auction raises more expected revenue than the second-price sealed bid auction,
which in turn beats the …rst-price auction.


                                                  9
4.3      Risk-Averse Bidders
In a second price auction risk aversion does not matter, i.e., the bidders always bid their
values. In a …rst-price auction however, an increase in risk aversion leads to higher bids since
it increases the probability of winning at the cost of reducing the value of winning. Therefore,
a risk-neutral seller faced with risk-averse bidders prefers the …rst-price or (descending) Dutch
auction to second-price or (ascending) English auctions.

4.4      Practical Concerns3
4.4.1     Collusion
A major concern in practical auction design is the possibility that the bidders explicitly or
tacitly collude to avoid higher prices. As an example consider a multi-unit (simultaneous)
ascending auction. In such an auction, bidders can use the early stages when prices are still
low to signal who should win which objects, and then tacitly agree to stop pushing prices up.

        1999 Germany spectrum auction: any new bid must exceed the previous one by at
        least 10 percent. Mannesman bid 18.18 mil. on blocks 1-5 and 20 mil. on blocks 1-6
        (18.18 1.1'20). This was like an o¤er to T-Mobil (the only other credible bidder) to
        bid 20 mil. on blocks 1-5 and not bid on blocks 6-10. This is exactly what happened.

        1996-97 U.S. spectrum auction: U.S. West was competing vigorously with McLeod for lot
        number 378 - a licence in Rochester, Minnesota. U.S. West bid $313,378 and $62,378 for
        two licences in Iowa in which it had earlier shown no interest, overbidding McLeod who
        had seemed to be the uncontested high-bidder for these licenses. McLeod got the point
        that it was being punished for competing in Rochester, and dropped out of that market.
        Since McLeod made subsequent higher bids on the Iowa licenses, the “punishment”bids
        cost U.S. West nothing

        A related phenomenon can arise in one special kind of sealed-bid auction, namely a
        uniform-price auction in which each bidder submits a sealed bid stating what price it
        would pay for di¤erent quantities of a homogenous good, e.g., electricity (that is, it
        submits a demand function), and then the good is sold at the single price determined
        by the lowest winning bid. In this format, bidders can submit bids that ensure that any
        deviation from a (tacit or explicit) collusive agreement is severely punished: each bidder
        bids very high prices for smaller quantities than its collusively agreed share. Then if
        any bidder attempts to obtain more than its agreed share (leaving other …rms with less
        than their agreed shares), all bidders will have to pay these very high prices. However,
  3
    This part is based on Paul Klemperer, "What Really Matters in Auction Design," Journal of Economic
Perspectives 2002, 16(1), 169-189.


                                                 10
        if everyone sticks to their agreed shares then these very high prices will never need to be
        paid. So deviation from the collusive agreement is unpro…table. The electricity regulator
        in the United Kingdom believes the market in which distribution companies purchase
        electricity from generating companies has fallen prey to exactly this kind of “implicit
        collusion.”
   Much of the kind of behavior discussed so far is hard to challenge legally. Indeed, trying
to outlaw it all would require cumbersome rules that restrict bidders’ ‡exibility and might
generate ine¢ ciencies, without being fully e¤ective. It would be much better to solve these
problems with better auction designs.
4.4.2     Entry Deterrence
The second major area of concern of practical auction design is to attract bidders, since
an auction with too few bidders risks being unpro…table for the auctioneer and potentially
ine¢ cient. Ascending auctions are often particularly poor in this respect, since they can allow
some bidders to deter the entry, or depress the bidding, of rivals. In an ascending auction,
there is a strong presumption that the …rm which values winning the most will be the eventual
winner, because even if it is outbid at an early stage, it can eventually top any opposition. As
a result, other …rms have little incentive to enter the bidding, and may not do so if they have
even modest costs of bidding.
        Glaxo’s 1995 takeover of the Wellcome drugs company. After Glaxo’s …rst bid of 9 billion
        pounds, Zeneca expressed willingness to o¤er about 10 billion pounds if it could be sure
        of winning, while Roche considered an o¤er of 11 billion pounds. But certain synergies
        made Wellcome worth a little more to Glaxo than to the other …rms, and the costs of
        bidding were tens of millions of pounds. Eventually, neither Roche nor Zeneca actually
        entered the bidding, and Wellcome was sold at the original bid of 9 billion pounds,
        literally a billion or two less than its shareholders might have received. Wellcome’s own
        chief executive admitted “...there was money left on the table”.
4.4.3     Solutions
Much of our discussion has emphasized the vulnerability of ascending auctions to collusion
and predatory behavior. However, ascending auctions have several virtues, as well.
        An ascending auction is particularly likely to allocate the prizes to the bidders who value
        them the most, since a bidder with a higher value always has the opportunity to rebid
        to top a lower-value bidder who may initially have bid more aggressively.

        If there are complementarities between the objects for sale, a multi-unit ascending auc-
        tion makes it more likely that bidders will win e¢ cient bundles than in a pure sealed-bid
        auction in which they can learn nothing about their opponents’intentions.

                                                 11
     Allowing bidders to learn about others’valuations during the auction can also make the
     bidders more comfortable with their own assessments and less cautious, and often raises
     the auctioneer’s revenues if information is correlated.

    A number of methods to make the ascending auction more robust are clear enough. For
example, bidders can be forced to bid “round”numbers, the exact increments can be prespec-
i…ed, and bids can be made anonymous. These steps make it harder to use bids to signal other
buyers. Lots can be aggregated into larger packages to make it harder for bidders to divide the
spoils, and keeping secret the number of bidders remaining in the auction also makes collusion
harder. But while these measures can be useful, they do not eliminate the risks of collusion
or of too few bidders. An alternative is to choose a di¤erent type of auction.
    In a standard sealed-bid auction (or “…rst-price”sealed-bid auction), each bidder simulta-
neously makes a single “best and …nal”o¤er, so collusion is much harder than in an ascending
auction because …rms are unable to retaliate against bidders who fail to cooperate with them.
Tacit collusion is particularly di¢ cult since …rms are unable to use the bidding to signal.
    From the perspective of encouraging more entry, the merit of a sealed-bid auction is that the
outcome is much less certain than in an ascending auction. An advantaged bidder will probably
win a sealed-bid auction, but it must make its single …nal o¤er in the face of uncertainty about
its rivals’bids, and because it wants to get a bargain its sealed-bid will not be the maximum
it could be pushed to in an ascending auction. So “weaker”bidders have at least some chance
of victory, even when they would surely lose an ascending auction. It follows that potential
entrants are likely to be more willing to enter a sealed-bid auction than an ascending auction.
    A solution to the dilemma of choosing between the ascending (often called “English”) and
sealed-bid (or “Dutch”) forms is to combine the two in a hybrid, the “Anglo-Dutch”, which
often captures the best features of both, and was …rst described and proposed in Klemperer
(1998. “Auctions with Almost Common Values.” European Economic Review. 42, pp. 757-
69.).
    In an Anglo-Dutch auction the auctioneer begins by running an ascending auction in which
price is raised continuously until all but two bidders have dropped out. The two remaining
bidders are then each required to make a …nal sealed-bid o¤er that is not lower than the
current asking price, and the winner pays his bid.
    Good auction design is not “one size …ts all” and must be sensitive to the details of the
context.




                                               12
                                                      
                                       




                        
                          
                        
                      
                      
                       
                     
 !                    
                
             "         
              
     #                      $
    %            
        


     
                & '()   
  '*)       '+)      #        
 ,             
     #                  
           $  %     
    #                         
    ,     -.//  -(//         -0// #  
         -./      ')    ') 
 1               (
    2       

      

     

       

                                             (
                                            "
                                            
                                      
                                               
                                             
                                                   
                                               
                                                   
                                                 
                                                

                                   (& " 2 

     

     

   

     

         &             
                      
                                 
        '           
         ) #            
                     
#                      
        #            
                    
                 3   
                    
     
    #                    4 
                  #   
                        1
                           
                     1 
                         
 '    *)
    5                   
                           
                



                                               *
                                                      "
                                                    
                                            
                                                               
                                                             
                                                     
                                                                      
                                                                        
                                                                 
                                                                        
                                                                      
                                                           

                    *& " 2   4  4 

   4                  
                      
      


          
                 
  4                        
                 #     
                      
  4                   
                       
1                      
                  (         
   &                   
                     
                 & (//  .//  
    #          & '()  '*)  '+)  '6)
         
    #                7             
             +

                                            (
                                        
                                              *
                                             
                                            
                                                  
                                                  (
                                                   
                                                    
                                                       
                                                       
                                                              *(

                           +&  3                    2 


                                                    +
        (                   
              &         5
  ,           (      
              #      
       %           
        $   '    6)       
   
                                            4
                                            
                                            
                                       
                                   8            8
                                                  
                                                     
                                                   
                                                             

                                      6& $9 2 

    4                                    


          
                            
                     # 
                   #  
                               
                          
                     
#           '      )     
    
    #      :          ,     
                         
                               
                  '4   
                           )
                 '             
       $ )              
          :                 
         
                      
 ,                   

                                                 6
    $  !              
 (    -(// #           
               '   .) # 
                          
   '   0)
                                             "
                                          
                                     
                                               
                                                 
                                      
                                                 
                              
                                                 
                                                       
                                                     
                                                          

                                    .& " 2 

                                           4
                                         
                                          
                                      
                                       
                                            
                                 8           8
                                                  
                                  
                                                  
                                                  
                                                  
                                                  
                                                
                                                                 

                                    0& $9 2 

                            + 
     
   #       (         
         1         (    
    *   4      *          
  "    *          *   
 (             #       
  (   ,                   
    
                                            (
                                      
                                        
                                       
                                             *
                                            
                                            
                                                 
                                                 
                                                  (
                                                        
                                                   
                                                        
                                                        
                                                        
                                                              *(

                           ;&  3                    2 


                                                    .
           
#    $             
                        
                  .//         
5                    .//  
             /   .//    (//
#                          
   5              (// #  
                           
       
        $                 
                      
                      
                  
  
                        
       $         , 
      +         5             
                ,        
     <

                                             8
                                           
                                            
                                         
                                         
                                              
                                   4          
                                                    4
                                   
                                                  
                                                       
                                                      
                                                    
                                                           

                             <& = , $9 2 

   #                            6
       *     #     
        ,      #         
        "              
   
   >         ,      ?        
     8           ' 
  
                                       
  


                                                0
    )    '      )     
    @                 
                  
        #                    
       '  )           #    
  A              ,       
(/           B                    

                                            4
                                           
                                        
                                                
                                               
                                                
                                  8            8
                                                    
                                   
                                                   
                                                    
                                                    
                                                    
                                                  
                                                    

                                 A& $9 2  44


                                              8
                                            
                                         
                                          
                                               
                                                  4
                                   4              
                                
                                                   
                                                     
                                                   
                                                    

                           (/& = , $9 2  44



                                           
                     
      2                
     C      ,         

                                           

         
                                            
#                 '       )
                       

   #    

                                               ;
  (                                

  *                 

  +             $           
                                

  6     ,   

                          4                

    # ,                  
              #      
                 

! "                     
         !  

   " !  


     ! "                          #                      
#        

  ( #            
         

  * #     

  + #   
                                                        
                          , 

             ,          
      
          ,         #   
                          #
          

                                                         
                                              
                                            

                                                    <
    # #        $ !       
                                                            
                                                    

 !  %                                   
                                                   

     #         5          
   5   ,   5               
                    
   #                       
           -(// #       
                -(//       
,         
     "                    
                     $
                       
                   $
     5                    
              -.//         
 ,         -(//           
       -(//


$                            %  & # #                           
4           %           
                    
                         4     
                              
                      
       
    4                   
                       
                   # 
                     
                 
                    '    *) 4
                   

                                                       A
  (//  .// 1              
                      
   #                  
         

                                                          
                                                 
                                                 

    #   5                        
                      D
#          5                        
        $         -(//
    1               %    
     4            
                    
        
              $     E     
          "  8         4 8
   ,                            #
                     
     ((   ,          8   
 E 
                                        8
                               
                                    
                                       
                                           
                                               E
                                                
                                                 
                                                        
                                                          
                                                               
                                8                                8
                                                   
                                                                       

                                                                         

                                                                             
                                                                


                                          ((& 3$ 

   4                      

                                                      (/
  &
                                                                  
                                                               
                                                               
                                                             
                                                              
    #   5       &          4  
5      8                E          $
 8    4   F 4          
     8     5          !
                     
           8    5 
   8         G H


                                                          E
                                                       
                                                            
                                                                   
                                                                     
                                     8                8

                                                                                

                                                                                    
                                                                       


                                       (*& 3$G I

        

                                                E 
                                                   
                                     8     
                                                

   4 8  E                  '5  
       E    #        5   
                4     $
               



                                                        ((
            
        %                     
           # ,                   
   ,  ,   

    % #             

  &          %

  '           %

  (            %               )
      

    4                    
       $     ,  ((     & 
           8    !     
     
    2                              
        $     $   '               
   ,  (*)        

    & #                              
  *"             $ !    

     #    E3   $ &      
     1                
'      )  5                      
1 ,                   , 
                 ,   
    ,                 
  !               ,
   ,    5                        
                   4  
  ,    E3                
                    
  4    5                    
      E3           
         


                                              (*
              ,  +  ,  5     E3 B
   5                
   E3      




                                             (+
                                          
                                       




     
                  
                               
                         
                      
      !            "   
 #          #     
   $  %     %  #   %   &% % '()*  
 +   %   ,         ,    
                        
-  %                     
    (   ()      

                                        

. %                $  ,  
   / +%      / . %          %  
            %             
      +%            / .0
   %                   
    "                           
                          
                                                 
        % &% ()      

                                         

   % &% () %     


                           
       

                     1       
                    

                                                
                      %  
         %             
             2            3   
  %  #  %       
                        
    ,             ,  %     
          ,    

          

$  #      ()                  
()       

          &% %       

  3            &% %

   4     &% %     5       3  %  
    %                  &% %

                                                
                                                                                   '*

( 
                                                
                                                                                   '3*
          % &% %
                                              
                                                                                   '6*
                                              
                                              
                                                                                   '7*
                                              
    %   !       ()          %    
    !  %  &% % +      #     #  
     8               
     8                
              #   ()        

                                 
                                          
                             
                                    
                          
        

                                              3
!       !                         
         "      #  $     %&&%  %%'(
    )                        *

       +)                   ,       

   "                            

     +                         "       
    
                                                       
                                                 

 &% '*         %           
                   
                                                     
                                             


 &% '*         #  9      %   
   
   .   %                          
                                                          
                     (      #
 
        %      ,        %
 


               
#$ %            - 

      4      %                    + 
 % %     &%  '              
     *   %     () 4       ()
      %    

                                                    
                                                   

                                                                                  
 &        -                                  -
               
  
                                     
                                       

                                                6
          .
    '          
      /  % -           %           
(    !   &% %                  #
   %  &% %      %           
    '          
      /  0                               
             
                                                        
                             
                                                  
                                           
                                             
                                              

   
                                           

    +    3  

                                                                                 ':*
                                                                                 ';*
                                                                                 '<*
                                                                                 '=*

-  ;  
                                          
 
                                           
   <  

                                          


                                               
                                                                                     '>*
                                               
 =  
                                           
   :  

                                           

                                              7

                                               
                                                                                 '1*
                                               
(      >   1  
                                                   
                                                                              '*
                                                   
( 
                                                   
                                                                              '3*
                                                   
    % &%   #             % &%   #  
      
   $            %   4 : $ #    
&% %        () (%    !   ()    ,
     4 : , &% %    %    %  4
: ,   %               &% %  
    %        %         %  
                                                         
                                            
                                                  


     (   , &% %  %   
   (       ()         (%     
 ()       %        &% % %      %
        %     4 :   %              
                                                           
  &% %     . %       ()      
 %       %             %       %
    4 : (       %         () (   %   
    
   (      % &% ()                6 
   


            
    (  )*
                       2     ! 
   %%  &%   %   ?    
     +,, -
   .             % &% () 
                                                   
                                     
                                                   

                                             :
     
                                                          
                                   
                                                
                               
                 
        &%         
                                      
                                                          
                                                  
        #    
   #         
                                                      
                                           
                                                   
                                                      
                                                    
                                                   




                                                ;
                                                         
                                                




    
                           
                           
                         
                 

                                                         
                                                       
                                                       

                      
!               " # $           $
                         $  
                        % $   
          $              $  
   $     &              
           '       $   $      
                 
                $      ( 
       '        


              
)             *     +       
      ,  ( $            !-."    
    /                *             
                               
           /             
    *      0        $
                                                         
                                     
                                                      



                                                      0
   &          !$                   " ,  (
                                                           
 $    -.      *                   
1+                *      $  
          2              

                                                                 
                                                                            

                             
                                                                                     -.  

                                                 
                                                       
                                                                 

             

         
                   
                                     

  /             * 3          
                                 
 
    /                                   
  $                           
       4                          $
         
                                                                                                                  
                                                                        
                                                                                      
                                                                                                              

,  ( $    -.      
                                                
                                             
                                                      
                                                                
                                                               
                                                                                                          
                                       
                                                 
                                                              

                             
           $       $         !   
          $                
        " +              
         *      /   *          
           ,  ( $          
  *                  

                                                                                     5
               *      # $       
     *                    $
          *                / 
        *      $          
 $                          
         *           
                                             
                                                               
                                                        

                                             

    '                    
        ,  ( $             
                                             
                                             
                                                   
                                             

             *     
                                                       
                                                                        
                                                              

                                                       

            *            *   ,  ( $
               * $         * 
               
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       
                                                          
                                                       
                                     

               $         *      
 
           (               +      
       '              
      6
                                                     
                                                                                       
                                                                  

                                                        

     *                                                   
 

     )         *     



                                                   
                
                                                                
 
                                                

    )                                          -. 
             -             
             $                 
      
    ! "   )     &       *     
  #    5       3   0       
                 

                                                             

         

                                                                

                 
                                    
                                                                               
                                                                                
                                                 
                                                                        
                                                                             

   $                0 ,         * 
               *                   
    $  $       0          !     5
              0       " )   
          *         0      $    
         *       

                                                            
                                                                                
                                                                            

#    5                    
+ $           0                   
     $          0           
 * 
                                   
                                                                   
                                                               


                                                                   7
               

                                                            
                                                       
                                                       

                                 

                                                                  
                          

8    &                      $   
    $ $          *       
  *   -. 

 !                                                          
                                  
                         
                                                                      
                                                            

#  $ %&   #           
                            
              

                  $    '   #-9   
      
   )  *     *      :  &         
      #-9          !"         $     
                                    $ 
                  $              
                                                                       
                                     
                                                                    
                          
   #-9 13                -   
  ' 
   )        *     
                               3      *       *  
                                        
                                                                                        
                                                                            
     $       !  &                                   "
  ! "           $             +                                    &
         *                                           

                                                                 ;
                  $    *      5   ) 
   5    *      3   5        
 $      0  &       $          
 *      !      5"

                                                           

       
                                                                  
         3              !
      &        $        0   $
              0   $      *     
         *          
   $ "   (( + $ $          
   #-9     * $       33$   
                                           
                                                       
                            
                                                         
                                                                                  
                                           
                                                            
                $                
             +       #-9      
                           $      
      ,    0$           
                                                                         
                                                                           
                                                                            
                                                                            

<            

                                                                          
                                                                                         
                                                                                          
                                           
      #  $                                                          $
                                                                         
                                                                           
                                                                           
                                                                            

          

                                                                         
                                                                                   
                                                                                   

                                                                     =
#             5              #-9
         *       $      +
                           
#-9   
    ) *    3                
                 3         $
             (     /         
       
    #                  $ $            
                     +            &   
  (     *          #    5      
  3   0                 
           3   0          
  $                

                                               
                                                
                                             

                  

                                                       

  $      *                                     

                                                        

 
                                                        
3$   ( $                   

                                                        

          *      3$ $             *
       3  $                $     
           
    +             &       *             
                    
#                       3   0     
            *     '

                                                 
                                       
                                       


                                                        >
              

                                          
                                    
                                    

  $                  
                         $     
     #-9
    #     '     -.                
                  
    '                      #-9
        $ &   ? &    @$            
         #-9    *    $      
       !  ,   $     0AA0        "
    +               ( $     
   '    

+'        )                        
                                              
                                                   
                                    
                                                    

                             
  
                                       
      !              
                   "   
       #      




                                                  B
    Extensive Form Games with Incomplete Information
                                          Levent Koçkesen




1     Introduction
So far we have analyzed games in strategic form with and without incomplete information, and
extensive form games with complete information. In this section we will analyze extensive form
games with incomplete information. Many interesting strategic interactions can be modelled
in this form, such as signalling games, repeated games with incomplete information in which
reputation building becomes a concern, bargaining games with incomplete information, etc.
    The analysis of extensive form games with incomplete information will show that we need
to provide further re…nements of the Nash equilibrium concept. In particular, we will see
that subgame perfect equilibrium (SPE) concept that we have introduced when we studied
extensive form games with complete information is not adequate. To illustrate the main
problem in the SPE concept, however, the following game with imperfect, but complete,
information is su¢cient.
                              1; 3 r
                                        O      b1
                                                         ¡@
                                                      ¡           @
                                                T¡                    @B
                                               ¡                          @
                                      2 pr¡p¡p p p p p p p p Ip p p p p p p p@p@p r2
                                      ¢A                                         ¢A
                                     ¢ A                                       ¢ A
                                 L¢          AR                           L¢         AR
                                   ¢           A                           ¢          A
                               r¢                 Ar                    r¢              Ar
                                 ¢               A                        ¢            A

                             2; 1              0; 0               0; 2                0; 1


                           Figure 1: Something Wrong with SPE

    The strategic form of this game is given by

                                                       L         R
                                               O       1; 3      1; 3
                                               T       2; 1      0; 0
                                               B       0; 2      0; 1

It can be easily seen that the set of Nash equilibria of this game is f(T; L) ; (O; R)g : Since
this game has only one subgame, i.e., the game itself, this is also the set of SPE. But there

                                                          1
is something implausible about the (O; R) equilibrium. Action R is strictly dominated for
player 2 at the information set I: Therefore, if the game ever reaches that information set,
player 2 should never play R: Knowing that, then, player 1 should play T; as she would know
that player 2 would play L; and she would get a payo¤ of 2 which is bigger than the payo¤
that she gets by playing O: Subgame perfect equilibrium cannot capture this, because it does
not test rationality of player 2 at the non-singleton information set I.
    The above discussion suggests the direction in which we have to strengthen the SPE
concept. We would like players to be rational not only in very subgame but also in every con-
tinuation game. A continuation game in the above example is composed of the information
set I and the nodes that follow from that information set. First, notice that the continuation
game does not start with a single decision node, and hence it is not a subgame. However,
rationality of player 2 requires that he plays action L if the game ever reaches there.
    In general, the optimal action at an information set may depend on which node in the
information set the play has reached. Consider the following modi…cation of the above game.
                              1; 3 r             b1
                                         O
                                                        ¡@
                                                     ¡           @
                                               T¡                    @B
                                              ¡                          @
                                     2 pr¡p¡p p p p p p p p Ip p p p p p p p@p@p r2
                                     ¢A                                         ¢A
                                    ¢ A                                       ¢ A
                                L¢          AR                           L¢         AR
                                  ¢           A                           ¢          A
                              r¢                 Ar                    r¢              Ar
                                ¢               A                        ¢            A
                            2; 1              0; 0               0; 1                0; 2


                                                 Figure 2:

    Here the optimal action of player 2 at the information set I depends on whether player 1
has played T or B - information that 2 does not have. Therefore, analyzing player 2’s decision
problem at that information set requires him forming beliefs regarding which decision node
he is at. In other words, we require that
(1) (Condition 1: Beliefs) At each information set the player who moves at that information
set has beliefs over the set of nodes in that information set.
and
(2) (Condition 2: Sequential Rationality) At each information set, strategies must be
optimal, given the beliefs and subsequent strategies.
   Let us check what these two conditions imply in the game given in Figure 1. Condition 1
requires that player 2 assigns beliefs to the two decision nodes at the information set I: Let

                                                         2
the probability assigned to the node that follows T be ¹ 2 [0; 1] and the one assigned to the
node that follows B be 1 ¡ ¹: Given these beliefs the expected payo¤ to action L is

                                    ¹ £ 1 + (1 ¡ ¹) £ 2 = 2 ¡ ¹

whereas the expected payo¤ to R is

                                   ¹ £ 0 + (1 ¡ ¹) £ 1 = 1 ¡ ¹:

Notice that 2 ¡ ¹ > 1 ¡ ¹ for any ¹ 2 [0; 1] : Therefore, Condition 2 requires that in equilib-
rium player 2 never plays R with positive probability. This eliminates the subgame perfect
equilibrium (O; R) ; which, we argued, was implausible.
     Although it requires players to form beliefs at non-singleton information sets, condition
1, does not specify how these beliefs are formed. As we are after an equilibrium concept, we
require the beliefs to be consistent with the players’ strategies. As an example consider the
game given in Figure 2 again. Suppose player 1 plays actions O; T; and B with probabilities
¯ 1 (O) ; ¯ 1 (T ) ; and ¯ 1 (B) ; respectively. Also let ¹ be the belief assigned to node that follows
T in the information set I: If, for example, ¯ 1 (T ) = 1 and ¹ = 0; then we have a clear
inconsistency between player 1’s strategy and player 2’s beliefs. The only consistent belief
in this case would be ¹ = 1: In general, we may apply Bayes’ Rule, whenever possible, to
achieve consistency:
                                                      ¯ 1 (T )
                                           ¹=                      :
                                                ¯ 1 (T ) + ¯ 1 (B)
Of course, this requires that ¯ 1 (T ) + ¯ 1 (B) 6= 0: If ¯ 1 (T ) + ¯ 1 (B) = 0; i.e., player 1 plays
action O with probability 1, then player 2 does not obtain any information regarding which
one of his decision nodes has been reached from the fact that the play has reached I: The
weakest consistency condition that we can impose is then,
(3) (Condition 3: Weak Consistency) Beliefs are determined by Bayes’ Rule and strate-
gies whenever possible.
   These three conditions de…ne the equilibrium concept Perfect Bayesian Equilibrium
(PBE).


2     Perfect Bayesian Equilibrium
To be able to de…ne PBE more formally, let Hi be the set of all information sets a player has
in the game, and let A (h) be the set of actions available at information set h: A behavioral
strategy for player i is a function ¯ i which assigns to each information set h 2 Hi a probability
distribution on A (h) ; i.e.,
                                           X
                                                ¯ i (a) = 1:
                                          a2A(h)


                                                   3
Let Bi be the set of all behavioral strategies available for player i and B be the set of all
behavioral strategy pro…les, i.e., B = £i Bi : A belief system ¹ : X ! [0; 1] assigns to each
                                                                          P
decision node x in the information set h a probability ¹ (x), where x2h ¹ (x) = 1 for all
h 2 H: Let M be the set of all belief systems. An assessment (¹; ¯) 2 M £ B is a belief
system combined with a behavioral strategy pro…le.
    Perfect Bayesian equilibrium is an assessment (¹; ¯) that satisfy conditions 1-3.1 To
illustrate, consider the game in Figure 2 again. Let ¯ i (a) be the probability assigned to action
a by player i; and ¹ be the belief assigned to the node that follows T in information set I: In
any PBE of this game we have (i) ¯ 2 (L) = 1; (ii) ¯ 2 (L) = 0; or (iii) ¯ 2 (L) 2 (0; 1) : Let us
check each of the possibilities in turn:
(i) ¯ 2 (L) = 1: In this case, sequential rationality of player 2 implies that the expected payo¤
to L is greater than or equal to the expected payo¤ to R; i.e.,

                             ¹ £ 1 + (1 ¡ ¹) £ 1 ¸ ¹ £ 0 + (1 ¡ ¹) £ 2

or
                                      1 ¸ 2 ¡ 2¹ () ¹ ¸ 1=2:
Sequential rationality of player 1 on the other hand implies that she plays T; i.e., ¯ 1 (T ) = 1:
Bayes’ rule then implies that

                                             ¯ 1 (T )        1
                                 ¹=                       =     = 1;
                                       ¯ 1 (T ) + ¯ 1 (B)   1+0

which is greater than 1/2, and hence does not contradict player 2’s sequential rationality.
Therefore, the following assessment is a PBE

                                    ¯ 1 (T ) = 1; ¯ 2 (L) = 1; ¹ = 1:

(ii) ¯ 2 (L) = 0: Sequential rationality of player 2 now implies that ¹ · 1=2; and sequential
rationality of player 1 implies that ¯ 1 (O) = 1: Since ¯ 1 (T ) + ¯ 1 (B) = 0; however, we cannot
apply Bayes’ rule, and hence condition 3 is trivially satis…ed. Therefore, there is a continuum
of equilibria of the form
                                 ¯ 1 (O) = 1; ¯ 2 (L) = 0; ¹ · 1=2:

(iii) ¯ 2 (L) 2 (0; 1) : Sequential rationality of player 2 implies that ¹ = 1=2: For player 1 the
expected payo¤ to O is 1; to T is 2¯ 2 (L) ; and to B is 0: Clearly, player 1 will never play B
     1
    Perfect Bayesian equilibrium, as it was de…ned in D. Fudenberg and J. Tirole (1991), “Perfect Bayesian
and Sequential Equilibrium,” Journal of Economic Theory, 53, 236-60, puts more restrictions on the out-of-
equilibrium beliefs and hence is stronger than the de…nition provided here.


                                                    4
with positive probability, that is in this case we always have ¯ 1 (B) = 0. If, ¯ 1 (O) = 1; then
we must have 2¯ 2 (L) · 1 () ¯ 2 (L) · 1=2; and we cannot apply Bayes’ rule. Therefore,
any assessment that has

                               ¯ 1 (O) = 1; 0 < ¯ 2 (L) · 1=2; ¹ = 1=2

is a PBE. If, on the other hand, ¯ 1 (O) = 0; then we must have ¯ 1 (T ) = 1; and Bayes’ rule
implies that ¹ = 1; contradicting ¹ = 1=2: If ¯ 1 (0) 2 (0; 1) ; then Bayes’ rule implies that
¹ = 1; again contradicting ¹ = 1=2:
    Perfect Bayesian Equilibrium could be considered a weak equilibrium concept, because
it does not put enough restrictions on out-of-equilibrium beliefs. Consider the three-player
game given in Figure 3. The unique subgame perfect equilibrium of this game is (D; L; R0 ) :
However, the strategy pro…le (A; L; L0 ) together with the belief system that puts probability 1
to the node that follows R is an assessment that satis…es conditions 1-3. Clearly, this is not a
plausible outcome, as (L; L0 ) is not a Nash equilibrium of the subgame that starts with player
2’s move. Also, notice that player 3’s beliefs are not consistent with player 2’s strategy, but
since player 3’s information set is o¤-the-equilibrium, Bayes’ rule has no bite there.
                                     1b
                                      ¡@
                                   ¡         @
                              A¡                 @D
                              ¡                      @
                         r¡                               @r
                           ¡                            @2
                      2; 0; 0                             ¡  @
                                                      ¡          @
                                                L¡                  @R
                                               ¡                        @
                                        pr p p p p p p p p p p p p p p p p p p @
                                                                               p r
                                       3¡   ¡                               @3
                                       ¢A                                       ¢A
                                    0 ¢ A          0                       0 ¢ A       0
                                 L¢          AR                         L¢         AR
                                   ¢           A                           ¢        A
                                r¢                Ar                   r¢             Ar
                                  ¢              A                       ¢           A

                              1; 2; 1           3; 3; 3          0; 1; 2          0; 1; 1


                       Figure 3: PBE may have "unreasonable" beliefs

    The most commonly used equilibrium concept that do not su¤er from such de…ciencies
is that of sequential equilibrium. Before we can de…ne sequential equilibrium, however, we
have to de…ne a particular consistency notion. A behavioral strategy pro…le is said to be
completely mixed if every action receives positive probability.
De…nition (Consistency): An assessment (¹; ¯) is consistent if there exists a completely
mixed sequence (¹n ; ¯ n ) that converges to (¹; ¯) such that ¹n is derived from ¯ n using Bayes’
rule for all n:

                                                            5
    An assessment (¹; ¯) is a sequential equilibrium if it is sequentially rational and con-
sistent. To illustrate, consider the game in Figure 3 again. Let ¹ be the probability assigned
to the node that follows L; and consider the assessment ((A; L; L0 ) ; ¹ = 0) : For this to be a
sequential equilibrium, we have to …nd a completely mixed behavioral strategy pro…le ¯ n such
that
                                                                      ¯ n2 (L)
                ¯ n1 (A) ! 1; ¯ n2 (L) ! 1; ¯ n3 (L0 ) ! 1; ¹n = n                 ! 0,
                                                                ¯ 2 (L) + ¯ n2 (R)
which is not possible. However, the assessment given by ((D; L; R0 ) ; ¹ = 1) is easily checked
to satisfy sequential rationality. To check consistency, let
                                 1 n              1                  1          1
                ¯ n1 (D) = 1 ¡     ; ¯ 2 (L) = 1 ¡ ; ¯ n3 (R0 ) = 1 ¡ ; ¹n = 1 ¡ :
                                 n                n                  n          n
Notice that ¹n is derived from ¯ n via Bayes’ rule and (¹n ; ¯ n ) ! (¹; ¯) : Therefore, this
assessment is a sequential equilibrium.


3    Signalling Games
One of the most common applications in economics of extensive form games with incomplete
information is signalling games. In its simplest form, in a signalling game there are two
players, a sender S; and a receiver, R: Nature draws the type of the sender from a type set
£; whose typical element will be denoted µ: The probability of type µ being drawn is p (µ) :
Sender observes his type and chooses a message m 2 M: The receiver observes m (but not µ)
and chooses an action a 2 A: The payo¤s are given by uS (m; a; µ) and uR (m; a; µ) :
    Let ¹ (µjm) denote the receiver’s belief that the sender’s type is µ if message m is observed.
Also let ¯ S (mjµ) denote the probability that type µ sender sends message m; and ¯ R (ajm)
denote the probability that the receiver chooses action a after observing message m: Given an
assessment (¹; ¯), the expected payo¤ of a sender of type µ is then
                                       XX
                      US (¹; ¯; µ) =             ¯ S (mjµ) ¯ R (ajm) uS (m; a; µ) ;
                                        m    a

whereas the expected payo¤ of the receiver conditional upon receiving message m is
                                        XX
                      UR (¹; ¯jm) =              ¹ (µjm) ¯ R (ajm) uR (m; a; µ) :
                                         µ   a

Also, Bayes’ rule implies,
                                                  ¯ (m0 jµ0 ) p (µ0 )
                                   ¹ (µ0 jm0 ) = P S       0
                                                                      ;
                                                   µ ¯ S (m jµ) p (µ)
          P
whenever µ ¯ S (m0 jµ) p (µ) 6= 0; i.e., at least one type of sender sends the message m0 :
   To illustrate consider the game in …gure 4, known as Beer or Quiche. In this game
Nature (N) chooses the type of player 1 to be Tough (T ) (with probability 0.9) or Weak (W )

                                                     6
(with probability 0.1). Player 1 observes her type and chooses Quiche (Q) or Beer (B) : Player
2 observes only the action choice of player 1 but not the type, and chooses to …ght (F ) or not
to …ght (A):
                          1; 1 r                                r 0; 1
                               @@                             ¡¡
                                 @F                         F¡
                                     @r         1r B ¡ r
                                  @                        ¡
                                     ¡pp               p@
                                            Q
                                                        p
                                  ¡ pp                  p @
                                                        p
                                 ¡ A pp                 p A@
                                                        p
                               r        p               p      @r 2; 0
                                        p               p
                                ¡                             @
                                        p               p
                          3; 0 ¡
                                        p               p
                                                  W
                                        p               p
                                        p               p
                                        p               p
                                        p               p
                                     2 pp        bN 2 pp
                                        p               p
                                        p               p
                                        p               p
                                        p               p
                                        p               p
                               r        p               p       r 1; 0
                                        p               p
                                        p               p
                                        p               p F
                          0; 0                    T
                                        p               p
                               @@                             ¡¡
                                        p               p
                                  @ pp                  p ¡
                                 @ F                         ¡
                                                        p
                                     @pr         r      pr¡
                                     ¡      Q   1 B @
                                  ¡                        @
                                 ¡A                         A@
                          2; 1 r¡
                               ¡                              @@r 3; 1


                                   Figure 4: Beer or Quiche

   Let us …nd the pure strategy PBE of this game. There are four types of possible equilibria:

  1. Each type chooses a di¤erent action (Separating Equilibria):

      (a) Weak chooses quiche, Tough chooses beer (¯ S (QjW ) = 1; ¯ S (QjT ) = 0) :
          Bayes’ rule implies that
                                      ¯ S (QjW ) p (W )                    1 £ 0:1
                 ¹ (W jQ) =                                         =                   = 1:
                              ¯ S (QjW ) p (W ) + ¯ S (QjT ) p (T )   1 £ 0:1 + 0 £ 0:9
          Similarly, ¹ (T jB) = 1: Therefore, the receiver’s sequential rationality implies that
          ¯ R (AjB) = 1 and ¯ R (F jQ) = 1: Sequential rationality of the sender, then, implies
          that ¯ S (QjW ) = 0; contradicting our hypothesis. So, there is no PBE of this type.
      (b) Weak chooses beer, Tough chooses quiche (¯ S (QjW ) = 0; ¯ S (QjT ) = 1) :
          Bayes’ rule implies that ¹ (T jQ) = 1 and ¹ (W jB) = 1: Therefore, the receiver’s
          sequential rationality implies that ¯ R (F jB) = 1 and ¯ R (AjQ) = 1: Sequential
          rationality of the sender, then, implies that ¯ S (QjW ) = 1; contradicting our hy-
          pothesis. So, there is no PBE of this type either.

                                                7
  2. Both types choose the same action (Pooling Equilibria)

         (a) Both choose quiche (¯ S (QjW ) = 1; ¯ S (QjT ) = 1) :
              Bayes’ rule implies that ¹ (W jQ) = 0:1 and ¹ (T jQ) = 0:9: Therefore, after observ-
              ing Q, the receiver’s expected payo¤ to F is

                                               0:1 £ 1 + 0:9 £ 0 = 0:1

              and expected payo¤ to A is

                                               0:1 £ 0 + 0:9 £ 2 = 1:8;

              and hence sequential rationality implies that ¯ R (AjQ) = 1: The weak type’s se-
              quential rationality implies, then, that ¯ S (QjW ) = 1; con…rming our hypothesis.
              For the tough type, playing quiche would be rational only if the receiver chooses
              to …ght after observing beer. Therefore, we must have ¯ R (F jB) = 1; which in
              turn requires that ¹ (W jB) ¸ 1=2: Therefore, any assessment which satis…es the
              following is a PBE:

                          ¯ S (QjW ) = 1; ¯ S (QjT ) = 1; ¯ R (AjQ) = 1; ¯ R (F jB) = 1;
                           ¹ (W jQ) = 0:1; ¹ (W jB) ¸ 1=2:

         (b) Both choose beer (¯ S (BjW ) = 1; ¯ S (BjT ) = 1) : It is easily checked that the fol-
             lowing constitute the set of PBE of this type:

                          ¯ S (BjW ) = 1; ¯ S (BjT ) = 1; ¯ R (F jQ) = 1; ¯ R (AjB) = 1;
                           ¹ (W jB) = 0:1; ¹ (W jQ) ¸ 1=2:

Job Market Signalling2
    Suppose there are two types of workers, a high ability (H) and a low ability (L) type. We
let the probability of having high ability be denoted by p 2 (0; 1) : The output is equal to 2 if
the worker is of high ability and equal to 1 if he is of low ability. The worker can choose a level
of education e ¸ 0 before applying for a job. However, the cost of having level of education
e is e for the low ability worker and e=2 for the high ability worker. The worker knows his
ability but the employer observes only the level of education, not the ability. Therefore, the
employer o¤ers a wage schedule w (e) as a function of education. The payo¤s of the workers
are given by

                                        u (w; e; H) = w ¡ e=2;
                                        u (w; e; L) = w ¡ e:
  2
      Based on M. Spence (1973), “Job Market Signalling,” Quarterly Journal of Economics, 87, 355-74.

                                                     8
    We assume that the job market is competitive and hence the employer o¤ers a wage
schedule w (e) such that the expected pro…t is equal zero. Therefore, if ¹ (Hje) denotes the
belief of the employer that the worker is of high ability given that he has chosen education
level e; the wage schedule will satisfy w (e) = 2¹ (Hje) + (1 ¡ ¹ (Hje)) : We are interested in
the set of PBE of this game. Let eH and eL denote the education levels chosen by the high
and low ability workers, respectively.

  1. Separating Equilibria (eH 6= eL ): The Bayes’ rule in this case implies that ¹ (HjeH ) =
     1 and ¹ (LjeL ) = 1: Therefore, we have w (eH ) = 2 and w (eL ) = 1: Given that, the low
     ability worker will choose e = 0: In equilibrium, it must be such that the low ability
     worker does not want to mimic the high ability worker and vice versa. Therefore, we
     need to have
                                               eH
                                           2¡      ¸1
                                                2
     or eH · 2 and
                                           1 ¸ 2 ¡ eH
     or 1 · eH : We can support any eH between 1 and 2 with the following belief system
                                               8
                                               < 0; e < e
                                                          H
                                     ¹ (Hje) =              :
                                               : 1; e ¸ eH


  2. Pooling Equilibria (eH = eL = e¤ ): The Bayes’ rule in this case implies that ¹ (Hje¤ ) =
     p and ¹ (Lje¤ ) = 1 ¡ p: Therefore, w (e¤ ) = 2p + (1 ¡ p) : = p + 1 and hence

                                  u (w; e¤ ; H) = p + 1 ¡ e¤ =2;
                                   u (w; e¤ ; L) = p + 1 ¡ e¤ :

     It must be the case that

                                        p + 1 ¡ e¤ =2 ¸ 0
                                          p + 1 ¡ e¤ ¸ 0:

     We also need to have

                                   p + 1 ¡ e¤ =2 ¸ w (e) ¡ e=2;
                                     p + 1 ¡ e¤ ¸ w (e) ¡ e;

     for all e ¸ 0: The above inequalities are satis…ed if and only if e¤ · p: We can, in turn,
     show that any such e¤ can be supported as an equilibrium by the following belief system
                                                8
                                                < p; e = e¤
                                      ¹ (Hje) =
                                                : 0; e 6= e¤




                                              9



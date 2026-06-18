---
normalized_id: shared-pdf-reference-basics-of-financial-mathematics
exam_code: SHARED
material_scope: basics of financial mathematics.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Basics of Financial Mathematics.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-basics-of-financial-mathematics

                      The Basics of Financial Mathematics

                                     Spring 2003


                                  Richard F. Bass
                             Department of Mathematics
                              University of Connecticut

       These notes are c 2003 by Richard Bass. They may be used for personal use or
class use, but not for commercial purposes. If you find any errors, I would appreciate
hearing from you: bass@math.uconn.edu




                                          1
1. Introduction.
      In this course we will study mathematical finance. Mathematical finance is not
about predicting the price of a stock. What it is about is figuring out the price of options
and derivatives.
        The most familiar type of option is the option to buy a stock at a given price at
a given time. For example, suppose Microsoft is currently selling today at $40 per share.
A European call option is something I can buy that gives me the right to buy a share of
Microsoft at some future date. To make up an example, suppose I have an option that
allows me to buy a share of Microsoft for $50 in three months time, but does not compel
me to do so. If Microsoft happens to be selling at $45 in three months time, the option is
worthless. I would be silly to buy a share for $50 when I could call my broker and buy it
for $45. So I would choose not to exercise the option. On the other hand, if Microsoft is
selling for $60 three months from now, the option would be quite valuable. I could exercise
the option and buy a share for $50. I could then turn around and sell the share on the
open market for $60 and make a profit of $10 per share. Therefore this stock option I
possess has some value. There is some chance it is worthless and some chance that it will
lead me to a profit. The basic question is: how much is the option worth today?
        The huge impetus in financial derivatives was the seminal paper of Black and Scholes
in 1973. Although many researchers had studied this question, Black and Scholes gave a
definitive answer, and a great deal of research has been done since. These are not just
academic questions; today the market in financial derivatives is larger than the market
in stock securities. In other words, more money is invested in options on stocks than in
stocks themselves.
       Options have been around for a long time. The earliest ones were used by manu-
facturers and food producers to hedge their risk. A farmer might agree to sell a bushel of
wheat at a fixed price six months from now rather than take a chance on the vagaries of
market prices. Similarly a steel refinery might want to lock in the price of iron ore at a
fixed price.
        The sections of these notes can be grouped into five categories. The first is elemen-
tary probability. Although someone who has had a course in undergraduate probability
will be familiar with some of this, we will talk about a number of topics that are not usu-
ally covered in such a course: σ-fields, conditional expectations, martingales. The second
category is the binomial asset pricing model. This is just about the simplest model of a
stock that one can imagine, and this will provide a case where we can see most of the major
ideas of mathematical finance, but in a very simple setting. Then we will turn to advanced
probability, that is, ideas such as Brownian motion, stochastic integrals, stochastic differ-
ential equations, Girsanov transformation. Although to do this rigorously requires measure
theory, we can still learn enough to understand and work with these concepts. We then

                                             2
return to finance and work with the continuous model. We will derive the Black-Scholes
formula, see the Fundamental Theorem of Asset Pricing, work with equivalent martingale
measures, and the like. The fifth main category is term structure models, which means
models of interest rate behavior.
       I found some unpublished notes of Steve Shreve extremely useful in preparing these
notes. I hope that he has turned them into a book and that this book is now available.
The stochastic calculus part of these notes is from my own book: Probabilistic Techniques
in Analysis, Springer, New York, 1995.
       I would also like to thank Evarist Giné who pointed out a number of errors.




                                           3
2. Review of elementary probability.
       Let’s begin by recalling some of the definitions and basic concepts of elementary
probability. We will only work with discrete models at first.
       We start with an arbitrary set, called the probability space, which we will denote
by Ω, the capital Greek letter “omega.” We are given a class F of subsets of Ω. These are
called events. We require F to be a σ-field.

Definition 2.1. A collection F of subsets of Ω is called a σ-field if

  (1) ∅ ∈ F,
  (2) Ω ∈ F,
  (3) A ∈ F implies Ac ∈ F, and
  (4) A1 , A2 , . . . ∈ F implies both ∪∞               ∞
                                        i=1 Ai ∈ F and ∩i=1 Ai ∈ F.

Here Ac = {ω ∈ Ω : ω ∈   / A} denotes the complement of A. ∅ denotes the empty set, that
is, the set with no elements. We will use without special comment the usual notations of
∪ (union), ∩ (intersection), ⊂ (contained in), ∈ (is an element of).
        Typically, in an elementary probability course, F will consist of all subsets of
Ω, but we will later need to distinguish between various σ-fields. Here is an exam-
ple. Suppose one tosses a coin two times and lets Ω denote all possible outcomes. So
Ω = {HH, HT, T H, T T }. A typical σ-field F would be the collection of all subsets of Ω.
In this case it is trivial to show that F is a σ-field, since every subset is in F. But if
we let G = {∅, Ω, {HH, HT }, {T H, T T }}, then G is also a σ-field. One has to check the
definition, but to illustrate, the event {HH, HT } is in G, so we require the complement of
that set to be in G as well. But the complement is {T H, T T } and that event is indeed in
G.
        One point of view which we will explore much more fully later on is that the σ-field
tells you what events you “know.” In this example, F is the σ-field where you “know”
everything, while G is the σ-field where you “know” only the result of the first toss but not
the second. We won’t try to be precise here, but to try to add to the intuition, suppose
one knows whether an event in F has happened or not for a particular outcome. We
would then know which of the events {HH}, {HT }, {T H}, or {T T } has happened and so
would know what the two tosses of the coin showed. On the other hand, if we know which
events in G happened, we would only know whether the event {HH, HT } happened, which
means we would know that the first toss was a heads, or we would know whether the event
{T H, T T } happened, in which case we would know that the first toss was a tails. But
there is no way to tell what happened on the second toss from knowing which events in G
happened. Much more on this later.

       The third basic ingredient is a probability.

                                             4
Definition 2.2. A function P on F is a probability if it satisfies

   (1) if A ∈ F, then 0 ≤ P(A) ≤ 1,
   (2) P(Ω) = 1, and
   (3) P(∅) = 0, and
                                                                        P∞
   (4) if A1 , A2 , . . . ∈ F are pairwise disjoint, then P(∪∞
                                                             i=1 Ai ) =  i=1 P(Ai ).


A collection of sets Ai is pairwise disjoint if Ai ∩ Aj = ∅ unless i = j.
       There are a number of conclusions one can draw from this definition. As one
example, if A ⊂ B, then P(A) ≤ P(B) and P(Ac ) = 1 − P(A). See Note 1 at the end of
this section for a proof.
       Someone who has had measure theory will realize that a σ-field is the same thing
as a σ-algebra and a probability is a measure of total mass one.

       A random variable (abbreviated r.v.) is a function X from Ω to R, the reals. To
be more precise, to be a r.v. X must also be measurable, which means that {ω : X(ω) ≥
a} ∈ F for all reals a.
       The notion of measurability has a simple definition but is a bit subtle. If we take
the point of view that we know all the events in G, then if Y is G-measurable, then we
know Y . Phrased another way, suppose we know whether or not the event has occurred
for each event in G. Then if Y is G-measurable, we can compute the value of Y .
       Here is an example. In the example above where we tossed a coin two times, let X
be the number of heads in the two tosses. Then X is F measurable but not G measurable.
To see this, let us consider Aa = {ω ∈ Ω : X(ω) ≥ a}. This event will equal

                                Ω             if a ≤ 0;
                              
                              
                                {HH, HT, T H} if 0 < a ≤ 1;
                              

                               {HH}
                                             if 1 < a ≤ 2;
                                ∅             if 2 < a.

For example, if a = 23 , then the event where the number of heads is 32 or greater is the
event where we had two heads, namely, {HH}. Now observe that for each a the event Aa
is in F because F contains all subsets of Ω. Therefore X is measurable with respect to F.
However it is not true that Aa is in G for every value of a – take a = 23 as just one example
– the subset {HH} is not in G. So X is not measurable with respect to the σ-field G.

        A discrete r.v. is one where P(ω : X(ω) = a) = 0 for all but countably many a’s,
                         P
say, a1 , a2 , . . ., and i P(ω : X(ω) = ai ) = 1. In defining sets one usually omits the ω;
thus (X = x) means the same as {ω : X(ω) = x}.
        In the discrete case, to check measurability with respect to a σ-field F, it is enough
that (X = a) ∈ F for all reals a. The reason for this is that if x1 , x2 , . . . are the values of

                                                5
x for which P(X = x) 6= 0, then we can write (X ≥ a) = ∪xi ≥a (X = xi ) and we have a
countable union. So if (X = xi ) ∈ F, then (X ≥ a) ∈ F.
       Given a discrete r.v. X, the expectation or mean is defined by
                                         X
                                  EX =       xP(X = x)
                                             x

provided the sum converges. If X only takes finitely many values, then this is a finite sum
and of course it will converge. This is the situation that we will consider for quite some
time. However, if X can take an infinite number of values (but countable), convergence
needs to be checked. For example, if P(X = 2n ) = 2−n for n = 1, 2, . . ., then E X =
P∞ n −n
   n=1 2 · 2   = ∞.
       There is an alternate definition of expectation which is equivalent in the discrete
setting. Set                             X
                                 EX =       X(ω)P({ω}).
                                          ω∈Ω

To see that this is the same, look at Note 2 at the end of the section. The advantage of the
second definition is that some properties of expectation, such as E (X + Y ) = E X + E Y ,
are immediate, while with the first definition they require quite a bit of proof.
       We say two events A and B are independent if P(A ∩ B) = P(A)P(B). Two random
variables X and Y are independent if P(X ∈ A, Y ∈ B) = P(X ∈ A)P(X ∈ B) for all A
and B that are subsets of the reals. The comma in the expression P(X ∈ A, Y ∈ B) means
“and.” Thus
                       P(X ∈ A, Y ∈ B) = P((X ∈ A) ∩ (Y ∈ B)).
The extension of the definition of independence to the case of more than two events or
random variables is not surprising: A1 , . . . , An are independent if

                          P(Ai1 ∩ · · · ∩ Aij ) = P(Ai1 ) · · · P(Aij )

whenever {i1 , . . . , ij } is a subset of {1, . . . , n}.
       A common misconception is that an event is independent of itself. If A is an event
that is independent of itself, then

                        P(A) = P(A ∩ A) = P(A)P(A) = (P(A))2 .

The only finite solutions to the equation x = x2 are x = 0 and x = 1, so an event is
independent of itself only if it has probability 0 or 1.
      Two σ-fields F and G are independent if A and B are independent whenever A ∈ F
and B ∈ G. A r.v. X and a σ-field G are independent if P((X ∈ A) ∩ B) = P(X ∈ A)P(B)
whenever A is a subset of the reals and B ∈ G.

                                                 6
        As an example, suppose we toss a coin two times and we define the σ-fields G1 =
{∅, Ω, {HH, HT }, {T H, T T }} and G2 = {∅, Ω, {HH, T H}, {HT, T T }}. Then G1 and G2 are
independent if P(HH) = P(HT ) = P(T H) = P(T T ) = 14 . (Here we are writing P(HH)
when a more accurate way would be to write P({HH}).) An easy way to understand this
is that if we look at an event in G1 that is not ∅ or Ω, then that is the event that the first
toss is a heads or it is the event that the first toss is a tails. Similarly, a set other than ∅
or Ω in G2 will be the event that the second toss is a heads or that the second toss is a
tails.

       If two r.v.s X and Y are independent, we have the multiplication theorem, which
says that E (XY ) = (E X)(E Y ) provided all the expectations are finite. See Note 3 for a
proof.
       Suppose X1 , . . . , Xn are n independent r.v.s, such that for each one P(Xi = 1) = p,
                                                                          Pn
P(Xi = 0) = 1 − p, where p ∈ [0, 1]. The random variable Sn =               i=1 Xi is called a
binomial r.v., and represents, for example, the number of successes in n trials, where the
probability of a success is p. An important result in probability is that

                                              n!
                            P(Sn = k) =              pk (1 − p)n−k .
                                          k!(n − k)!

       The variance of a random variable is

                                  Var X = E [(X − E X)2 ].

This is also equal to
                                       E [X 2 ] − (E X)2 .

It is an easy consequence of the multiplication theorem that if X and Y are independent,

                               Var (X + Y ) = Var X + Var Y.

The expression E [X 2 ] is sometimes called the second moment of X.
       We close this section with a definition of conditional probability. The probability
of A given B, written P(A | B) is defined by

                                          P(A ∩ B)
                                                   ,
                                            P(B)

provided P(B) 6= 0. The conditional expectation of X given B is defined to be

                                           E [X; B]
                                                    ,
                                            P(B)

                                               7
provided P(B) 6= 0. The notation E [X; B] means E [X1B ], where 1B (ω) is 1 if ω ∈ B and
0 otherwise. Another way of writing E [X; B] is
                                               X
                                E [X; B] =           X(ω)P({ω}).
                                               ω∈B


(We will use the notation E [X; B] frequently.)

Note 1. Suppose we have two disjoint sets C and D. Let A1 = C, A2 = D, and Ai = ∅ for
i ≥ 3. Then the Ai are pairwise disjoint and
                                                  ∞
                                                  X
                    P(C ∪ D) = P(∪∞
                                  i=1 Ai ) =            P(Ai ) = P(C) + P(D)           (2.1)
                                                  i=1


by Definition 2.2(3) and (4). Therefore Definition 2.2(4) holds when there are only two sets
instead of infinitely many, and a similar argument shows the same is true when there are an
arbitrary (but finite) number of sets.
        Now suppose A ⊂ B. Let C = A and D = B − A, where B − A is defined to be
       c
B ∩ A (this is frequently written B \ A as well). Then C and D are disjoint, and by (2.1)

                    P(B) = P(C ∪ D) = P(C) + P(D) ≥ P(C) = P(A).

      The other equality we mentioned is proved by letting C = A and D = Ac . Then C and
D are disjoint, and

                  1 = P(Ω) = P(C ∪ D) = P(C) + P(D) = P(A) + P(Ac ).

Solving for P(Ac ), we have
                                      P(Ac ) = 1 − P(A).

Note 2. Let us show the two definitions of expectation are the same (in the discrete case).
Starting with the first definition we have
                                     X
                              EX =       xP(X = x)
                                     x
                                     X           X
                                =        x                  P({ω})
                                     x       {ω∈Ω:X(ω)=x}
                                     X         X
                                =                        X(ω)P({ω})
                                     x {ω∈Ω:X(ω)=x}
                                     X
                                =          X(ω)P({ω}),
                                     ω∈Ω


                                                 8
and we end up with the second definition.

Note 3. Suppose X can takes the values x1 , x2 , . . . and Y can take the values y1 , y2 , . . ..
Let Ai = {ω : X(ω) = xi } and Bj = {ω : Y (ω) = yj }. Then
                                   X                                        X
                              X=          xi 1Ai ,                 Y =          y j 1B j ,
                                     i                                      j


and so                                       XX
                                   XY =                           xi yi 1Ai 1Bj .
                                                 i        j

Since 1Ai 1Bj = 1Ai ∩Bj , it follows that
                                             XX
                               E [XY ] =                          xi yj P(Ai ∩ Bj ),
                                                 i        j


assuming the double sum converges. Since X and Y are independent, Ai = (X = xi ) is
independent of Bj = (Y = yj ) and so
                                             XX
                             E [XY ] =                        xi yj P(Ai )P(Bj )
                                             i        j
                                             X                hX          i
                                         =           xi P(Ai )   yj P(Bj )
                                             i                          j
                                             X
                                         =           xi P(Ai )E Y
                                             i
                                         = (E X)(E Y ).




                                                              9
3. Conditional expectation.
       Suppose we have 200 men and 100 women, 70 of the men are smokers, and 50 of
the women are smokers. If a person is chosen at random, then the conditional probability
that the person is a smoker given that it is a man is 70 divided by 200, or 35%, while the
conditional probability the person is a smoker given that it is a women is 50 divided by
100, or 50%. We will want to be able to encompass both facts in a single entity.
       The way to do that is to make conditional probability a random variable rather
than a number. To reiterate, we will make conditional probabilities random. Let M, W be
man, woman, respectively, and S, S c smoker and nonsmoker, respectively. We have

                             P(S | M ) = .35,         P(S | W ) = .50.

We introduce the random variable

                                      (.35)1M + (.50)1W

and use that for our conditional probability. So on the set M its value is .35 and on the
set W its value is .50.
       We need to give this random variable a name, so what we do is let G be the σ-field
consisting of {∅, Ω, M, W } and denote this random variable P(S | G). Thus we are going
to talk about the conditional probability of an event given a σ-field.
       What is the precise definition?
Definition 3.1. Suppose there exist finitely (or countably) many sets B1 , B2 , . . ., all hav-
ing positive probability, such that they are pairwise disjoint, Ω is equal to their union, and
G is the σ-field one obtains by taking all finite or countable unions of the Bi . Then the
conditional probability of A given G is
                                            X P(A ∩ Bi )
                               P(A | G) =                   1Bi (ω).
                                             i
                                                  P(Bi )

In short, on the set Bi the conditional probability is equal to P(A | Bi ).
        Not every σ-field can be so represented, so this definition will need to be extended
when we get to continuous models. σ-fields that can be represented as in Definition 3.B are
called finitely (or countably) generated and are said to be generated by the sets B1 , B2 , . . ..
       Let’s look at another example. Suppose Ω consists of the possible results when we
toss a coin three times: HHH, HHT, etc. Let F3 denote all subsets of Ω. Let F1 consist of
the sets ∅, Ω, {HHH, HHT, HT H, HT T }, and {T HH, T HT, T T H, T T T }. So F1 consists
of those events that can be determined by knowing the result of the first toss. We want to
let F2 denote those events that can be determined by knowing the first two tosses. This will

                                                 10
include the sets ∅, Ω, {HHH, HHT }, {HT H, HT T }, {T HH, T HT }, {T T H, T T T }. This is
not enough to make F2 a σ-field, so we add to F2 all sets that can be obtained by taking
unions of these sets.
       Suppose we tossed the coin independently and suppose that it was fair. Let us
calculate P(A | F1 ), P(A | F2 ), and P(A | F3 ) when A is the event {HHH}. First
the conditional probability given F1 . Let C1 = {HHH, HHT, HT H, HT T } and C2 =
{T HH, T HT, T T H, T T T }. On the set C1 the conditional probability is P(A∩C1 )/P(C1 ) =
P(HHH)/P(C1 ) = 18 / 12 = 14 . On the set C2 the conditional probability is P(A∩C2 )/P(C2 )
= P(∅)/P(C2 ) = 0. Therefore P(A | F1 ) = (.25)1C1 . This is plausible – the probability of
getting three heads given the first toss is 14 if the first toss is a heads and 0 otherwise.
       Next let us calculate P(A | F2 ). Let D1 = {HHH, HHT }, D2 = {HT H, HT T }, D3
= {T HH, T HT }, D4 = {T T H, T T T }. So F2 is the σ-field consisting of all possible unions
of some of the Di ’s. P(A | D1 ) = P(HHH)/P(D1 ) = 18 / 41 = 12 . Also, as above, P(A |
Di ) = 0 for i = 2, 3, 4. So P(A | F2 ) = (.50)1D1 . This is again plausible – the probability
of getting three heads given the first two tosses is 21 if the first two tosses were heads and
0 otherwise.

        What about conditional expectation? Recall E [X; Bi ] = E [X1Bi ] and also that
E [1B ] = 1 · P(1B = 1) + 0 · P(1B = 0) = P(B). Given a random variable X, we define
                                             X E [X; Bi ]
                                 E [X | G] =              1Bi .
                                             i
                                                P(Bi )
This is the obvious definition, and it agrees with what we had before because E [1A | G]
should be equal to P(A | G).

       We now turn to some properties of conditional expectation. Some of the following
propositions may seem a bit technical. In fact, they are! However, these properties are
crucial to what follows and there is no choice but to master them.
Proposition 3.2. E [X | G] is G measurable, that is, if Y = E [X | G], then (Y > a) is a
set in G for each real a.

Proof. By the definition,
                                         X E [X; Bi ]           X
                       Y = E [X | G] =                  1Bi =       bi 1Bi
                                          i
                                              P(Bi )            i
if we set bi = E [X; Bi ]/P(Bi ). The set (Y ≥ a) is a union of some of the Bi , namely, those
Bi for which bi ≥ a. But the union of any collection of the Bi is in G.

       An example might help. Suppose
                          Y = 2 · 1B1 + 3 · 1B2 + 6 · 1B3 + 4 · 1B4
and a = 3.5. Then (Y ≥ a) = B3 ∪ B4 , which is in G.

                                              11
Proposition 3.3. If C ∈ G and Y = E [X | G], then E [Y ; C] = E [X; C].
                    P E [X;Bi ]
Proof. Since Y =         P(Bi )   1Bi and the Bi are disjoint, then

                                           E [X; Bj ]
                           E [Y ; Bj ] =              E 1Bj = E [X; Bj ].
                                            P(Bj )

Now if C = Bj1 ∪ · · · ∪ Bjn ∪ · · ·, summing the above over the jk gives E [Y ; C] = E [X; C].


       Let us look at the above example for this proposition, and let us do the case where
C = B2 . Note 1B2 1B2 = 1B2 because the product is 1 · 1 = 1 if ω is in B2 and 0 otherwise.
On the other hand, it is not possible for an ω to be in more than one of the Bi , so
1B2 1Bi = 0 if i 6= 2. Multiplying Y in the above example by 1B2 , we see that

                         E [Y ; C] = E [Y ; B2 ] = E [Y 1B2 ] = E [3 · 1B2 ]
                                    = 3E [1B2 ] = 3P(B2 ).

However the number 3 is not just any number; it is E [X; B2 ]/P(B2 ). So

                                   E [X; B2 ]
                     3P(B2 ) =                P(B2 ) = E [X; B2 ] = E [X; C],
                                    P(B2 )

just as we wanted. If C = B1 ∪ B4 , for example, we then write

                  E [X; C] = E [X1C ] = E [X(1B2 + 1B4 )]
                            = E [X1B2 ] + E [X1B4 ] = E [X; B2 ] + E [X; B4 ].

By the first part, this equals E [Y ; B2 ]+E [Y ; B4 ], and we undo the above string of equalities
but with Y instead of X to see that this is E [Y ; C].
      If a r.v. Y is G measurable, then for any a we have (Y = a) ∈ G which means that
(Y = a) is the union of one or more of the Bi . Since the Bi are disjoint, it follows that Y
must be constant on each Bi .
      Again let us look at an example. Suppose Z takes only the values 1, 3, 4, 7. Let
D1 = (Z = 1), D2 = (Z = 3), D3 = (Z = 4), D4 = (Z = 7). Note that we can write

                           Z = 1 · 1D1 + 3 · 1D2 + 4 · 1D3 + 7 · 1D4 .

To see this, if ω ∈ D2 , for example, the right hand side will be 0 + 3 · 1 + 0 + 0, which agrees
with Z(ω). Now if Z is G measurable, then (Z ≥ a) ∈ G for each a. Take a = 7, and we
see D4 ∈ G. Take a = 4 and we see D3 ∪ D4 ∈ G. Taking a = 3 shows D2 ∪ D3 ∪ D4 ∈ G.

                                                  12
Now D3 = (D3 ∪ D4 ) ∩ D4c , so since G is a σ-field, D3 ∈ G. Similarly D2 , D1 ∈ G. Because
sets in G are unions of the Bi ’s, we must have Z constant on the Bi ’s. For example, if it
so happened that D1 = B1 , D2 = B2 ∪ B4 , D3 = B3 ∪ B6 ∪ B7 , and D4 = B5 , then
           Z = 1 · 1B1 + 3 · 1B2 + 4 · 1B3 + 3 · 1B4 + 7 · 1B5 + +4 · 1B6 + 4 · 1B7 .

      We still restrict ourselves to the discrete case. In this context, the properties given
in Propositions 3.2 and 3.3 uniquely determine E [X | G].
Proposition 3.4. Suppose Z is G measurable and E [Z; C] = E [X; C] whenever C ∈ G.
Then Z = E [X | G].

Proof. Since Z is G measurable, then Z must be constant on each Bi . Let the value of Z
                    P
on Bi be zi . So Z = i zi 1Bi . Then
                              zi P(Bi ) = E [Z; Bi ] = E [X; Bi ],
or zi = E [X; Bi ]/P(Bi ) as required.

       The following propositions contain the main facts about this new definition of con-
ditional expectation that we will need.
Proposition 3.5. (1) If X1 ≥ X2 , then E [X1 | G] ≥ E [X2 | G].
  (2) E [aX1 + bX2 | G] = aE [X1 | G] + bE [X2 | G].
  (3) If X is G measurable, then E [X | G] = X.
  (4) E [E [X | G]] = E X.
  (5) If X is independent of G, then E [X | G] = E X.
       We will prove Proposition 3.5 in Note 1 at the end of the section. At this point it
is more fruitful to understand what the proposition says.
       We will see in Proposition 3.8 below that we may think of E [X | G] as the best
prediction of X given G. Accepting this for the moment, we can give an interpretation of
(1)-(5). (1) says that if X1 is larger than X2 , then the predicted value of X1 should be
larger than the predicted value of X2 . (2) says that the predicted value of X1 + X2 should
be the sum of the predicted values. (3) says that if we know G and X is G measurable,
then we know X and our best prediction of X is X itself. (4) says that the average of the
predicted value of X should be the average value of X. (5) says that if knowing G gives us
no additional information on X, then the best prediction for the value of X is just E X.
Proposition 3.6. If Z is G measurable, then E [XZ | G] = ZE [X | G].
        We again defer the proof, this time to Note 2.
        Proposition 3.6 says that as far as conditional expectations with respect to a σ-
field G go, G-measurable random variables act like constants: they can be taken inside or
outside the conditional expectation at will.

                                              13
Proposition 3.7. If H ⊂ G ⊂ F, then

                     E [E [X | H] | G] = E [X | H] = E [E [X | G] | H].

Proof. E [X | H] is H measurable, hence G measurable, since H ⊂ G. The left hand
equality now follows by Proposition 3.5(3). To get the right hand equality, let W be the
right hand expression. It is H measurable, and if C ∈ H ⊂ G, then

                          E [W ; C] = E [E [X | G]; C] = E [X; C]

as required.

      In words, if we are predicting a prediction of X given limited information, this is
the same as a single prediction given the least amount of information.
       Let us verify that conditional expectation may be viewed as the best predictor of
a random variable given a σ-field. If X is a r.v., a predictor Z is just another random
variable, and the goodness of the prediction will be measured by E [(X − Z)2 ], which is
known as the mean square error.
Proposition 3.8. If X is a r.v., the best predictor among the collection of G-measurable
random variables is Y = E [X | G].

Proof. Let Z be any G-measurable random variable. We compute, using Proposition
3.5(3) and Proposition 3.6,

           E [(X − Z)2 | G] = E [X 2 | G] − 2E [XZ | G] + E [Z 2 | G]
                            = E [X 2 | G] − 2ZE [X | G] + Z 2
                            = E [X 2 | G] − 2ZY + Z 2
                            = E [X 2 | G] − Y 2 + (Y − Z)2
                            = E [X 2 | G] − 2Y E [X | G] + Y 2 + (Y − Z)2
                            = E [X 2 | G] − 2E [XY | G] + E [Y 2 | G] + (Y − Z)2
                            = E [(X − Y )2 | G] + (Y − Z)2 .

We also used the fact that Y is G measurable. Taking expectations and using Proposition
3.5(4),
                       E [(X − Z)2 ] = E [(X − Y )2 ] + E [(Y − Z)2 ].

The right hand side is bigger than or equal to E [(X − Y )2 ] because (Y − Z)2 ≥ 0. So the
error in predicting X by Z is larger than the error in predicting X by Y , and will be equal
if and only if Z = Y . So Y is the best predictor.

                                             14
        There is one more interpretation of conditional expectation that may be useful. The
collection of all random variables is a linear space, and the collection of all G-measurable
random variables is clearly a subspace. Given X, the conditional expectation Y = E [X | G]
is equal to the projection of X onto the subspace of G-measurable random variables. To
see this, we write X = Y + (X − Y ), and what we have to check is that the inner product
of Y and X − Y is 0, that is, Y and X − Y are orthogonal. In this context, the inner
product of X1 and X2 is defined to be E [X1 X2 ], so we must show E [Y (X − Y )] = 0. Note

         E [Y (X − Y ) | G] = Y E [X − Y | G] = Y (E [X | G] − Y ) = Y (Y − Y ) = 0.

Taking expectations,

                          E [Y (X − Y )] = E [E [Y (X − Y ) | G] ] = 0,

just as we wished.

           If Y is a discrete random variable, that is, it takes only countably many values
y1 , y2 , . . ., we let Bi = (Y = yi ). These will be disjoint sets whose union is Ω. If σ(Y )
is the collection of all unions of the Bi , then σ(Y ) is a σ-field, and is called the σ-field
generated by Y . It is easy to see that this is the smallest σ-field with respect to which Y
is measurable. We write E [X | Y ] for E [X | σ(Y )].

Note 1. We prove Proposition 3.5. (1) and (2) are immediate from the definition. To prove
(3), note that if Z = X, then Z is G measurable and E [X; C] = E [Z; C] for any C ∈ G; this
is trivial. By Proposition 3.4 it follows that Z = E [X | G];this proves (3). To prove (4), if we
let C = Ω and Y = E [X | G], then E Y = E [Y ; C] = E [X; C] = E X.
         Last is (5). Let Z = E X. Z is constant, so clearly G measurable. By the in-
dependence, if C ∈ G, then E [X; C] = E [X1C ] = (E X)(E 1C ) = (E X)(P(C)). But
E [Z; C] = (E X)(P(C)) since Z is constant. By Proposition 3.4 we see Z = E [X | G].


Note 2. We prove Proposition 3.6. Note that ZE [X | G] is G measurable, so by Proposition
3.4 we need to show its expectation over sets C in G is the same as that of XZ. As in the
proof of Proposition 3.3, it suffices to consider only the case when C is one of the Bi . Now Z
is G measurable, hence it is constant on Bi ; let its value be zi . Then

  E [ZE [X | G]; Bi ] = E [zi E [X | G]; Bi ] = zi E [E [X | G]; Bi ] = zi E [X; Bi ] = E [XZ; Bi ]

as desired.




                                                 15
4. Martingales.
       Suppose we have a sequence of σ-fields F1 ⊂ F2 ⊂ F3 · · ·. An example would be
repeatedly tossing a coin and letting Fk be the sets that can be determined by the first
k tosses. Another example is to let Fk be the events that are determined by the values
of a stock at times 1 through k. A third example is to let X1 , X2 , . . . be a sequence of
random variables and let Fk be the σ-field generated by X1 , . . . , Xk , the smallest σ-field
with respect to which X1 , . . . , Xk are measurable.

Definition 4.1. A r.v. X is integrable if E |X| < ∞. Given an increasing sequence of
σ-fields Fn , a sequence of r.v.’s Xn is adapted if Xn is Fn measurable for each n.

Definition 4.2. A martingale Mn is a sequence of random variables such that

  (1) Mn is integrable for all n,
  (2) Mn is adapted to Fn , and
  (3) for all n
                                       E [Mn+1 | Fn ] = Mn .                             (4.1)

       Usually (1) and (2) are easy to check, and it is (3) that is the crucial property. If
we have (1) and (2), but instead of (3) we have
  (30) for all n
                                      E [Mn+1 | Fn ] ≥ Mn ,

then we say Mn is a submartingale. If we have (1) and (2), but instead of (3) we have
  (300) for all n
                                    E [Mn+1 | Fn ] ≤ Mn ,

then we say Mn is a supermartingale.
        Submartingales tends to increase and supermartingales tend to decrease. The
nomenclature may seem like it goes the wrong way; Doob defined these terms by anal-
ogy with the notions of subharmonic and superharmonic functions in analysis. (Actually,
it is more than an analogy: we won’t explore this, but it turns out that the composition
of a subharmonic function with Brownian motion yields a submartingale, and similarly for
superharmonic functions.)
        Note that the definition of martingale depends on the collection of σ-fields. When
it is needed for clarity, one can say that (Mn , Fn ) is a martingale. To define conditional
expectation, one needs a probability, so a martingale depends on the probability as well.
When we need to, we will say that Mn is a martingale with respect to the probability P.
This is an issue when there is more than one probability around.
        We will see that martingales are ubiquitous in financial math. For example, security
prices and one’s wealth will turn out to be examples of martingales.

                                             16
       The word “martingale” is also used for the piece of a horse’s bridle that runs from
the horse’s head to its chest. It keeps the horse from raising its head too high. It turns out
that martingales in probability cannot get too large. The word also refers to a gambling
system. I did some searching on the Internet, and there seems to be no consensus on the
derivation of the term.
        Here is an example of a martingale. Let X1 , X2 , . . . be a sequence of independent
r.v.’s with mean 0 that are independent. (Saying a r.v. Xi has mean 0 is the same as
saying E Xi = 0; this presupposes that E |X1 | is finite.) Set Fn = σ(X1 , . . . , Xn ), the
                                                Pn
σ-field generated by X1 , . . . , Xn . Let Mn =   i=1 Xi . Definition 4.2(2) is easy to see.
                 Pn
Since E |Mn | ≤ i=1 E |Xi |, Definition 4.2(1) also holds. We now check
         E [Mn+1 | Fn ] = X1 + · · · + Xn + E [Xn+1 | Fn ] = Mn + E Xn+1 = Mn ,
where we used the independence.
      Another example: suppose in the above that the Xk all have variance 1, and let
                         Pn
Mn = Sn2 − n, where Sn = i=1 Xi . Again (1) and (2) of Definition 4.2 are easy to check.
We compute
                E [Mn+1 | Fn ] = E [Sn2 + 2Xn+1 Sn + Xn+1
                                                      2
                                                          | Fn ] − (n + 1).
We have E [Sn2 | Fn ] = Sn2 since Sn is Fn measurable.
                 E [2Xn+1 Sn | Fn ] = 2Sn E [Xn+1 | Fn ] = 2Sn E Xn+1 = 0.
          2                 2
And E [Xn+1   | Fn ] = E Xn+1    = 1. Substituting, we obtain E [Mn+1 | Fn ] = Mn , or Mn is
a martingale.
       A third example: Suppose you start with a dollar and you are tossing a fair coin
independently. If it turns up heads you double your fortune, tails you go broke. This is
“double or nothing.” Let Mn be your fortune at time n. To formalize this, let X1 , X2 , . . .
be independent r.v.’s that are equal to 2 with probability 12 and 0 with probability 12 . Then
Mn = X1 · · · Xn . Let Fn be the σ-field generated by X1 , . . . , Xn . Note 0 ≤ Mn ≤ 2n , and
so Definition 4.2(1) is satisfied, while (2) is easy. To compute the conditional expectation,
note E Xn+1 = 1. Then
                  E [Mn+1 | Fn ] = Mn E [Xn+1 | Fn ] = Mn E Xn+1 = Mn ,
using the independence.
       Before we give our fourth example, let us observe that
                                  |E [X | F]| ≤ E [|X| | F].                             (4.2)
To see this, we have −|X| ≤ X ≤ |X|, so −E [|X| | F] ≤ E [X | F] ≤ E [|X| | F]. Since
E [|X| | F] is nonnegative, (4.2) follows.
        Our fourth example will be used many times, so we state it as a proposition.

                                             17
Proposition 4.3. Let F1 , F2 , . . . be given and let X be a fixed r.v. with E |X| < ∞. Let
Mn = E [X | Fn ]. Then Mn is a martingale.

Proof. Definition 4.2(2) is clear, while

                          E |Mn | ≤ E [E [|X| | Fn ]] = E |X| < ∞

by (4.2); this shows Definition 4.2(1). We have

                E [Mn+1 | Fn ] = E [E [X | Fn+1 ] | Fn ] = E [X | Fn ] = Mn .




                                             18
5. Properties of martingales.
           When it comes to discussing American options, we will need the concept of stopping
times. A mapping τ from Ω into the nonnegative integers is a stopping time if (τ = k) ∈ Fk
for each k.
           An example is τ = min{k : Sk ≥ A}. This is a stopping time because (τ = k) =
(S1 , . . . , Sk−1 < A, Sk ≥ A) ∈ Fk . We can think of a stopping time as the first time
something happens. σ = max{k : Sk ≥ A}, the last time, is not a stopping time. (We will
use the convention that the minimum of an empty set is +∞; so, for example, with the
above definition of τ , on the event that Sk is never in A, we have τ = ∞.
           Here is an intuitive description of a stopping time. If I tell you to drive to the city
limits and then drive until you come to the second stop light after that, you know when
you get there that you have arrived; you don’t need to have been there before or to look
ahead. But if I tell you to drive until you come to the second stop light before the city
limits, either you must have been there before or else you have to go past where you are
supposed to stop, continue on to the city limits, and then turn around and come back two
stop lights. You don’t know when you first get to the second stop light before the city
limits that you get to stop there. The first set of instructions forms a stopping time, the
second set does not.
           Note (τ ≤ k) = ∪kj=0 (τ = j). Since (τ = j) ∈ Fj ⊂ Fk , then the event (τ ≤ k) ∈ Fk
for all k. Conversely, if τ is a r.v. with (τ ≤ k) ∈ Fk for all k, then

                               (τ = k) = (τ ≤ k) − (τ ≤ k − 1).

Since (τ ≤ k) ∈ Fk and (τ ≤ k − 1) ∈ Fk−1 ⊂ Fk , then (τ = k) ∈ Fk , and such a τ must
be a stopping time.
       Our first result is Jensen’s inequality.
Proposition 5.1. If g is convex, then

                                  g(E [X | G]) ≤ E [g(X) | G]

provided all the expectations exist.
       For ordinary expectations rather than conditional expectations, this is still true.
That is, if g is convex and the expectations exist, then

                                       g(E X) ≤ E [g(X)].

We already know some special cases of this: when g(x) = |x|, this says |E X| ≤ E |X|;
when g(x) = x2 , this says (E X)2 ≤ E X 2 , which we know because E X 2 − (E X)2 =
E (X − E X)2 ≥ 0.

                                               19
       For Proposition 5.1 as well as many of the following propositions, the statement of
the result is more important than the proof, and we relegate the proof to Note 1 below.
       One reason we want Jensen’s inequality is to show that a convex function applied
to a martingale yields a submartingale.
Proposition 5.2. If Mn is a martingale and g is convex, then g(Mn ) is a submartingale,
provided all the expectations exist.

Proof. By Jensen’s inequality,

                      E [g(Mn+1 ) | Fn ] ≥ g(E [Mn+1 | Fn ]) = g(Mn ).



        If Mn is a martingale, then E Mn = E [E [Mn+1 | Fn ]] = E Mn+1 . So E M0 =
E M1 = · · · = E Mn . Doob’s optional stopping theorem says the same thing holds when
fixed times n are replaced by stopping times.
Theorem 5.3. Suppose K is a positive integer, N is a stopping time such that N ≤ K
a.s., and Mn is a martingale. Then

                                        E MN = E MK .

Here, to evaluate MN , one first finds N (ω) and then evaluates M· (ω) for that value of N .
Proof. We have
                                           K
                                           X
                               E MN =            E [MN ; N = k].
                                           k=0

If we show that the k-th summand is E [Mn ; N = k], then the sum will be
                                 K
                                 X
                                       E [Mn ; N = k] = E Mn
                                 k=0

as desired. We have
                             E [MN ; N = k] = E [Mk ; N = k]

by the definition of MN . Now (N = k) is in Fk , so by Proposition 2.2 and the fact that
Mk = E [Mk+1 | Fk ],
                           E [Mk ; N = k] = E [Mk+1 ; N = k].

We have (N = k) ∈ Fk ⊂ Fk+1 . Since Mk+1 = E [Mk+2 | Fk+1 ], Proposition 2.2 tells us
that
                       E [Mk+1 ; N = k] = E [Mk+2 ; N = k].

                                                 20
We continue, using (N = k) ∈ Fk ⊂ Fk+1 ⊂ Fk+2 , and we obtain

        E [MN ; N = k] = E [Mk ; N = k] = E [Mk+1 ; N = k] = · · · = E [Mn ; N = k].



If we change the equalities in the above to inequalities, the same result holds for sub-
martingales.
       As a corollary we have two of Doob’s inequalities:
Theorem 5.4. If Mn is a nonnegative submartingale,
  (a)        P(maxk≤n Mk ≥ λ) ≤ λ1 E Mn .
  (b)        E (maxk≤n Mk2 ) ≤ 4E Mn2 .
       For the proof, see Note 2 below.
Note 1. We prove Proposition 5.1. If g is convex, then the graph of g lies above all the
tangent lines. Even if g does not have a derivative at x0 , there is a line passing through x0
which lies beneath the graph of g. So for each x0 there exists c(x0 ) such that

                                 g(x) ≥ g(x0 ) + c(x0 )(x − x0 ).

Apply this with x = X(ω) and x0 = E [X | G](ω). We then have

                      g(X) ≥ g(E [X | G]) + c(E [X | G])(X − E [X | G]).

If g is differentiable, we let c(x0 ) = g 0 (x0 ). In the case where g is not differentiable, then we
choose c to be the left hand upper derivate, for example. (For those who are not familiar with
derivates, this is essentially the left hand derivative.) One can check that if c is so chosen,
then c(E [X | G]) is G measurable.
        Now take the conditional expectation with respect to G. The first term on the right is
G measurable, so remains the same. The second term on the right is equal to

                             c(E [X | G])E [X − E [X | G] | G] = 0.




Note 2. We prove Theorem 5.4. Set Mn+1 = Mn . It is easy to see that the sequence
M1 , M2 , . . . , Mn+1 is also a submartingale. Let N = min{k : Mk ≥ λ} ∧ (n + 1), the first
time that Mk is greater than or equal to λ, where a ∧ b = min(a, b). Then

                                  P(max Mk ≥ λ) = P(N ≤ n)
                                     k≤n


                                                 21
and if N ≤ n, then MN ≥ λ. Now
                                                                   hM                 i
                                                                         N
                    P(max Mk ≥ λ) = E [1(N ≤n) ] ≤ E                         ;N ≤ n       (5.1)
                       k≤n                                           λ
                                              1                    1
                                          =     E [MN ∧n ; N ≤ n] ≤ E MN ∧n .
                                              λ                    λ
Finally, since Mn is a submartingale, E MN ∧n ≤ E Mn .
        We now look at (b). Let us write M ∗ for maxk≤n Mk . If E Mn2 = ∞, there is nothing
to prove. If it is finite, then by Jensen’s inequality, we have

                  E Mk2 = E [E [Mn | Fk ]2 ] ≤ E [E [Mn2 | Fk ] ] = E Mn2 < ∞

for k ≤ n. Then
                                                                   n
                                                                  hX
                               ∗ 2
                                                  Mk2 ] ≤ E              Mk2 < ∞.
                                                                            
                       E (M ) = E [ max
                                          1≤k≤n
                                                                   k=1

We have
                                                    ∞
                                                    X
                            E [MN ∧n ; N ≤ n] =           E [Mk∧n ; N = k].
                                                    k=0

Arguing as in the proof of Theorem 5.3,

                               E [Mk∧n ; N = k] ≤ E [Mn ; N = k],

and so
                                          ∞
                                          X
                  E [MN ∧n ; N ≤ n] ≤           E [Mn ; N = k] = E [Mn ; N ≤ n].
                                          k=0

The last expression is at most E [Mn ; M ∗ ≥ λ]. If we multiply (5.1) by 2λ and integrate over
λ from 0 to ∞, we obtain
                      Z ∞                               Z ∞
                                      ∗
                             2λP(M ≥ λ)dλ ≤ 2                     E [Mn : M ∗ ≥ λ]
                        0                                 0
                                                          Z ∞
                                                  = 2E             Mn 1(M ∗ ≥λ) dλ
                                                              0
                                                          h        Z M∗           i
                                                  = 2E Mn                    dλ
                                                                     0
                                                  = 2E [Mn M ∗ ].

Using Cauchy-Schwarz, this is bounded by

                                     2(E Mn2 )1/2 (E (M ∗ )2 )1/2 .

                                                   22
On the other hand,
                      Z ∞                            Z ∞
                                   ∗
                            2λP(M ≥ λ)dλ = E               2λ1(M ∗ ≥λ) dλ
                       0                              0
                                                     Z M∗
                                              =E            2λ dλ = E (M ∗ )2 .
                                                      0
We therefore have
                             E (M ∗ )2 ≤ 2(E Mn2 )1/2 (E (M ∗ )2 )1/2 .
Recall we showed E (M ∗ )2 < ∞. We divide both sides by (E (M ∗ )2 )1/2 , square both sides,
and obtain (b).

Note 3. We will show that bounded martingales converge. (The hypothesis of boundedness
can be weakened; for example, E |Mn | ≤ c < ∞ for some c not depending on n suffices.)
Theorem 5.5. Suppose Mn is a martingale bounded in absolute value by K. That is,
|Mn | ≤ K for all n. Then limn→∞ Mn exists a.s.

Proof. Since Mn is bounded, it can’t tend to +∞ or −∞. The only possibility is that it
might oscillate. Let a < b be two rationals. What might go wrong is that Mn might be larger
than b infinitely often and less than a infinitely often. If we show the probability of this is 0,
then taking the union over all pairs of rationals (a, b) shows that almost surely Mn cannot
oscillate, and hence must converge.
        Fix a < b, let Nn = (Mn − a)+ , and let S1 = min{k : Nk ≤ 0}, T1 = min{k > S1 :
Nk ≥ b − a}, S2 = min{k > T1 : Nk ≤ 0}, and so on. Let Un = max{k : Tk ≤ n}. Un
is called the number of upcrossings up to time n. We want to show that maxn Un < ∞ a.s.
Note by Jensen’s inequality Nn is a submartingale. Since S1 < T1 < S2 < · · ·, then Sn+1 > n.
        We can write
                                    n+1
                                    X                           n+1
                                                                X
           2K ≥ Nn − NSn+1 ∧n =         (NSk+1 ∧n − NTk ∧n ) +      (NTk ∧n − NSk ∧n ).
                                       k=1                         k=1
Now take expectations. The expectation of the first sum on the right and the last term are
greater than or equal to zero by optional stopping. The middle term is larger than (b − a)Un ,
so we conclude
                                      (b − a)E Un ≤ 2K.
Let n → ∞ to see that E maxn Un < ∞, which implies maxn Un < ∞ a.s., which is what we
needed.

Note 4. We will state Fatou’s lemma in the following form.
       If Xn is a sequence of nonnegative random variables converging to X a.s., then E X ≤
       supn E Xn .
This formulation is equivalent to the classical one and is better suited for our use.

                                                23
6. The one step binomial asset pricing model.
        Let us begin by giving the simplest possible model of a stock and see how a European
call option should be valued in this context.
        Suppose we have a single stock whose price is S0 . Let d and u be two numbers with
0 < d < 1 < u. Here “d” is a mnemonic for “down” and “u” for “up.” After one time unit
the stock price will be either uS0 with probability P or else dS0 with probability Q, where
P + Q = 1. We will assume 0 < P, Q < 1. Instead of purchasing shares in the stock, you
can also put your money in the bank where one will earn interest at rate r. Alternatives
to the bank are money market funds or bonds; the key point is that these are considered
to be risk-free.
        A European call option in this context is the option to buy one share of the stock
at time 1 at price K. K is called the strike price. Let S1 be the price of the stock at time
1. If S1 is less than K, then the option is worthless at time 1. If S1 is greater than K, you
can use the option at time 1 to buy the stock at price K, immediately turn around and
sell the stock for price S1 and make a profit of S1 − K. So the value of the option at time
1 is
                                      V1 = (S1 − K)+ ,

where x+ is max(x, 0). The principal question to be answered is: what is the value V0 of
the option at time 0? In other words, how much should one pay for a European call option
with strike price K?
        It is possible to buy a negative number of shares of a stock. This is equivalent to
selling shares of a stock you don’t have and is called selling short. If you sell one share
of stock short, then at time 1 you must buy one share at whatever the market price is at
that time and turn it over to the person that you sold the stock short to. Similarly you
can buy a negative number of options, that is, sell an option.
        You can also deposit a negative amount of money in the bank, which is the same
as borrowing. We assume that you can borrow at the same interest rate r, not exactly a
totally realistic assumption. One way to make it seem more realistic is to assume you have
a large amount of money on deposit, and when you borrow, you simply withdraw money
from that account.
        We are looking at the simplest possible model, so we are going to allow only one
time step: one makes an investment, and looks at it again one day later.
        Let’s suppose the price of a European call option is V0 and see what conditions
one can put on V0 . Suppose you start out with V0 dollars. One thing you could do is
buy one option. The other thing you could do is use the money to buy ∆0 shares of
stock. If V0 > ∆0 S0 , there will be some money left over and you put that in the bank. If
V0 < ∆0 S0 , you do not have enough money to buy the stock, and you make up the shortfall
by borrowing money from the bank. In either case, at this point you have V0 − ∆0 S0 in

                                             24
the bank and ∆0 shares of stock.
      If the stock goes up, at time 1 you will have

                                ∆0 uS0 + (1 + r)(V0 − ∆0 S0 ),

and if it goes down,
                                ∆0 dS0 + (1 + r)(V0 − ∆0 S0 ).

       We have not said what ∆0 should be. Let us do that now. Let V1u = (uS0 − K)+
and V1d = (dS0 − K)+ . Note these are deterministic quantities, i.e., not random. Let

                                                  V1u − V1d
                                         ∆0 =               ,
                                                 uS0 − dS0
and we will also need
                                1 h 1 + r − d u u − (1 + r) d i
                        W0 =                 V1 +          V1 .
                               1+r    u−d          u−d
      In a moment we will do some algebra and see that if the stock goes up and you had
bought stock instead of the option you would now have

                                   V1u + (1 + r)(V0 − W0 ),

while if the stock went down, you would now have

                                   V1d + (1 + r)(V0 − W0 ).

Let’s check the first of these, the second being similar. We need to show

                  ∆0 uS0 + (1 + r)(V0 − ∆0 S0 ) = V1u + (1 + r)(V0 − W0 ).              (6.1)

The left hand side of (6.1) is equal to

                                             V1u − V1d
           ∆0 S0 (u − (1 + r)) + (1 + r)V0 =           (u − (1 + r)) + (1 + r)V0 .      (6.2)
                                               u−d
The right hand side of (6.1) is equal to
                            h1 + r − d           u − (1 + r) d i
                    V1u −                V1u +              V1 + (1 + r)V0 .            (6.3)
                               u−d                  u−d

Now check that the coefficients of V0 , of V1u , and of V1d agree in (6.2) and (6.3).
      Suppose that V0 > W0 . What you want to do is come along with no money, sell
one option for V0 dollars, use the money to buy ∆0 shares, and put the rest in the bank

                                                  25
(or borrow if necessary). If the buyer of your option wants to exercise the option, you give
him one share of stock and sell the rest. If he doesn’t want to exercise the option, you sell
your shares of stock and pocket the money. Remember it is possible to have a negative
number of shares. You will have cleared (1 + r)(V0 − W0 ), whether the stock went up or
down, with no risk.
       If V0 < W0 , you just do the opposite: sell ∆0 shares of stock short, buy one option,
and deposit or make up the shortfall from the bank. This time, you clear (1 + r)(W0 − V0 ),
whether the stock goes up or down.
       Now most people believe that you can’t make a profit on the stock market without
taking a risk. The name for this is “no free lunch,” or “arbitrage opportunities do not
exist.” The only way to avoid this is if V0 = W0 . In other words, we have shown that the
only reasonable price for the European call option is W0 .
       The “no arbitrage” condition is not just a reflection of the belief that one cannot get
something for nothing. It also represents the belief that the market is freely competitive.
The way it works is this: suppose W0 = $3. Suppose you could sell options at a price
V0 = $5; this is larger than W0 and you would earn V0 − W0 = $2 per option without risk.
Then someone else would observe this and decide to sell the same option at a price less
than V0 but larger than W0 , say $4. This person would still make a profit, and customers
would go to him and ignore you because they would be getting a better deal. But then a
third person would decide to sell the option for less than your competition but more than
W0 , say at $3.50. This would continue as long as any one would try to sell an option above
price W0 .
       We will examine this problem of pricing options in more complicated contexts, and
while doing so, it will become apparent where the formulas for ∆0 and W0 came from. At
this point, we want to make a few observations.
Remark 6.1. First of all, if 1 + r > u, one would never buy stock, since one can always
do better by putting money in the bank. So we may suppose 1 + r < u. We always have
1 + r ≥ 1 > d. If we set

                                 1+r−d                 u − (1 + r)
                            p=         ,          q=               ,
                                  u−d                     u−d
then p, q ≥ 0 and p + q = 1. Thus p and q act like probabilities, but they have nothing to
do with P and Q. Note also that the price V0 = W0 does not depend on P or Q. It does
depend on p and q, which seems to suggest that there is an underlying probability which
controls the option price and is not the one that governs the stock price.
Remark 6.2. There is nothing special about European call options in our argument
above. One could let V1u and Vd1 be any two values of any option, which are paid out if the

                                             26
stock goes up or down, respectively. The above analysis shows we can exactly duplicate
the result of buying any option V by instead buying some shares of stock. If in some model
one can do this for any option, the market is called complete in this model.

Remark 6.3. If we let P be the probability so that S1 = uS0 with probability p and
S1 = dS0 with probability q and we let E be the corresponding expectation, then some
algebra shows that
                                         1
                                  V0 =       E V1 .
                                        1+r
This will be generalized later.

Remark 6.4. If one buys one share of stock at time 0, then one expects at time 1 to
have (P u + Qd)S0 . One then divides by 1 + r to get the value of the stock in today’s
dollars. (r, the risk-free interest rate, can also be considered the rate of inflation. A dollar
tomorrow is equivalent to 1/(1 + r) dollars today.) Suppose instead of P and Q being the
probabilities of going up and down, they were in fact p and q. One would then expect to
have (pu + qd)S0 and then divide by 1 + r. Substituting the values for p and q, this reduces
to S0 . In other words, if p and q were the correct probabilities, one would expect to have
the same amount of money one started with. When we get to the binomial asset pricing
model with more than one step, we will see that the generalization of this fact is that the
stock price at time n is a martingale, still with the assumption that p and q are the correct
probabilities. This is a special case of the fundamental theorem of finance: there always
exists some probability, not necessarily the one you observe, under which the stock price
is a martingale.

Remark 6.5. Our model allows after one time step the possibility of the stock going up or
going down, but only these two options. What if instead there are 3 (or more) possibilities.
Suppose for example, that the stock goes up a factor u with probability P , down a factor
d with probability Q, and remains constant with probability R, where P + Q + R = 1.
The corresponding price of a European call option would be (uS0 − K)+ , (dS0 − K)+ , or
(S0 − K)+ . If one could replicate this outcome by buying and selling shares of the stock,
then the “no arbitrage” rule would give the exact value of the call option in this model.
But, except in very special circumstances, one cannot do this, and the theory falls apart.
One has three equations one wants to satisfy, in terms of V1u , V1d , and V1c . (The “c” is
a mnemonic for “constant.”) There are however only two variables, ∆0 and V0 at your
disposal, and most of the time three equations in two unknowns cannot be solved.

Remark 6.6. In our model we ruled out the cases that P or Q were zero. If Q = 0,
that is, we are certain that the stock will go up, then we would always invest in the stock
if u > 1 + r, as we would always do better, and we would always put the money in the
bank if u ≤ 1 + r. Similar considerations apply when P = 0. It is interesting to note that

                                              27
the cases where P = 0 or Q = 0 are the only ones in which our derivation is not valid.
It turns out that in more general models the true probabilities enter only in determining
which events have probability 0 or 1 and in no other way.




                                           28
7. The multi-step binomial asset pricing model.
       In this section we will obtain a formula for the pricing of options when there are n
time steps, but each time the stock can only go up by a factor u or down by a factor d.
The “Black-Scholes” formula we will obtain is already a nontrivial result that is useful.

       We assume the following.
   (1) Unlimited short selling of stock
   (2) Unlimited borrowing
   (3) No transaction costs
   (4) Our buying and selling is on a small enough scale that it does not affect the market.

            We need to set up the probability model. Ω will be all sequences of length n of H’s
and T ’s. S0 will be a fixed number and we define Sk (ω) = uj dk−j S0 if the first k elements
of a given ω ∈ Ω has j occurrences of H and k − j occurrences of T . (What we are doing is
saying that if the j-th element of the sequence making up ω is an H, then the stock price
goes up by a factor u; if T , then down by a factor d.) Fk will be the σ-field generated by
S0 , . . . , S k .
            Let
                                   (1 + r) − d          u − (1 + r)
                               p=              ,    q=
                                      u−d                  u−d
and define P(ω) = pj q n−j if ω has j appearances of H and n − j appearances of T . We
observe that under P the random variables Sk+1 /Sk are independent and equal to u with
probability p and d with probability q. To see this, let Yk = Sk /Sk−1 . Thus Yk is the
factor the stock price goes up or down at time k. Then P(Y1 = y1 , . . . , Yn = yn ) = pj q n−j ,
where j is the number of the yk that are equal to u. On the other hand, this is equal to
P(Y1 = y1 ) · · · P(Yn = yn ). Let E denote the expectation corresponding to P.
       The P we construct may not be the true probabilities of going up or down. That
doesn’t matter - it will turn out that using the principle of “no arbitrage,” it is P that
governs the price.

       Our first result is the fundamental theorem of finance in the current context.

Proposition 7.1. Under P the discounted stock price (1 + r)−k Sk is a martingale.

Proof. Since the random variable Sk+1 /Sk is independent of Fk , we have

            E [(1 + r)−(k+1) Sk+1 | Fk ] = (1 + r)−k Sk (1 + r)−1 E [Sk+1 /Sk | Fk ].

Using the independence the conditional expectation on the right is equal to

                               E [Sk+1 /Sk ] = pu + qd = 1 + r.

                                               29
Substituting yields the proposition.

       Let ∆k be the number of shares held between times k and k + 1. We require ∆k
to be Fk measurable. ∆0 , ∆1 , . . . is called the portfolio process. Let W0 be the amount
of money you start with and let Wk be the amount of money you have at time k. Wk is
the wealth process. If we have ∆k shares between times k and k + 1, then at time k + 1
those shares will be worth ∆k Sk+1 . The amount of cash we hold between time k and k + 1
is Wk minus the amount held in stock, that is, Wk − ∆k Sk . At time k + 1 this is worth
(1 + r)[Wk − ∆k Sk ]. Therefore

                          Wk+1 = ∆k Sk+1 + (1 + r)[Wk − ∆k Sk ].

Note that in the case where r = 0 we have

                               Wk+1 − Wk = ∆k (Sk+1 − Sk ),

or
                                             k
                                             X
                             Wk+1 = W0 +           ∆i (Si+1 − Si ).
                                             i=0

This is a discrete version of a stochastic integral. Since

                      E [Wk+1 − Wk | Fk ] = ∆k E [Sk+1 − Sk | Fk ] = 0,

it follows that in the case r = 0 that Wk is a martingale. More generally
Proposition 7.2. Under P the discounted wealth process (1 + r)−k Wk is a martingale.

Proof. We have

       (1 + r)−(k+1) Wk+1 = (1 + r)−k Wk + ∆k [(1 + r)−(k+1) Sk+1 − (1 + r)−k Sk ].

Observe that

         E [∆k [(1 + r)−(k+1) Sk+1 − (1 + r)−k Sk | Fk ]
                              = ∆k E [(1 + r)−(k+1) Sk+1 − (1 + r)−k Sk | Fk ] = 0.

The result follows.

       Our next result is that the binomial model is complete. It is easy to lose the idea
in the algebra, so first let us try to see why the theorem is true.
       For simplicity let us first consider the case r = 0. Let Vk = E [V | Fk ]; by Propo-
sition 4.3 we see that Vk is a martingale. We want to construct a portfolio process, i.e.,

                                             30
choose ∆k ’s, so that Wn = V . We will do it inductively by arranging matters so that
Wk = Vk for all k. Recall that Wk is also a martingale.
       Suppose we have Wk = Vk at time k and we want to find ∆k so that Wk+1 = Vk+1 .
At the (k + 1)-st step there are only two possible changes for the price of the stock and so
since Vk+1 is Fk+1 measurable, only two possible values for Vk+1 . We need to choose ∆k
so that Wk+1 = Vk+1 for each of these two possibilities. We only have one parameter, ∆k ,
to play with to match up two numbers, which may seem like an overconstrained system of
equations. But both V and W are martingales, which is why the system can be solved.
       Now let us turn to the details. In the following proof we allow r ≥ 0.

Theorem 7.3. The binomial asset pricing model is complete.

The precise meaning of this is the following. If V is any random variable that is Fn
measurable, there exists a constant W0 and a portfolio process ∆k so that the wealth
process Wk satisfies Wn = V . In other words, starting with W0 dollars, we can trade
shares of stock to exactly duplicate the outcome of any option V .

Proof. Let
                                   Vk = (1 + r)k E [(1 + r)−n V | Fk ].

By Proposition 4.3 (1 + r)−k Vk is a martingale. If ω = (t1 , . . . , tn ), where each ti is an H
or T , let

                   Vk+1 (t1 , . . . , tk , H, tk+2 , . . . , tn ) − Vk+1 (t1 , . . . , tk , T, tk+2 , . . . , tn )
        ∆k (ω) =                                                                                                   .
                   Sk+1 (t1 , . . . , tk , H, tk+2 , . . . , tn ) − Sk+1 (t1 , . . . , tk , T, tk+2 , . . . , tn )

Set W0 = V0 , and we will show by induction that the wealth process at time k equals Vk .
       The first thing to show is that ∆k is Fk measurable. Neither Sk+1 nor Vk+1 depends
on tk+2 , . . . , tn . So ∆k depends only on the variables t1 , . . . , tk , hence is Fk measurable.
       Now tk+2 , . . . , tn play no role in the rest of the proof, and t1 , . . . , tk will be fixed,
so we drop the t’s from the notation. If we write Vk+1 (H), this is an abbreviation for
Vk+1 (t1 , . . . , tk , H, tk+2 , . . . , tn ).
       We know (1 + r)−k Vk is a martingale under P so that

                                  Vk = E [(1 + r)−1 Vk+1 | Fk ]                                                        (7.1)
                                         1
                                     =       [pVk+1 (H) + qVk+1 (T )].
                                       1+r

(See Note 1.) We now suppose Wk = Vk and want to show Wk+1 (H) = Vk+1 (H) and
Wk+1 (T ) = Vk+1 (T ). Then using induction we have Wn = Vn = V as required. We show
the first equality, the second being similar.

                                                          31
         Wk+1 (H) = ∆k Sk+1 (H) + (1 + r)[Wk − ∆k Sk ]
                    = ∆k [uSk − (1 + r)Sk ] + (1 + r)Vk
                      Vk+1 (H) − Vk+1 (T )
                    =                      Sk [u − (1 + r)] + pVk+1 (H) + qVk+1 (T )
                            (u − d)Sk
                    = Vk+1 (H).
We are done.

       Finally, we obtain the Black-Scholes formula in this context. Let V be any option
that is Fn -measurable. The one we have in mind is the European call, for which V =
(Sn − K)+ , but the argument is the same for any option whatsoever.
Theorem 7.4. The value of the option V at time 0 is V0 = (1 + r)−n E V .

Proof. We can construct a portfolio process ∆k so that if we start with W0 = (1+r)−n E V ,
then the wealth at time n will equal V , no matter what the market does in between. If
we could buy or sell the option V at a price other than W0 , we could obtain a riskless
profit. That is, if the option V could be sold at a price c0 larger than W0 , we would sell
the option for c0 dollars, use W0 to buy and sell stock according to the portfolio process
∆k , have a net worth of V + (1 + r)n (c0 − W0 ) at time n, meet our obligation to the buyer
of the option by using V dollars, and have a net profit, at no risk, of (1 + r)n (c0 − W0 ).
If c0 were less than W0 , we would do the same except buy an option, hold −∆k shares at
time k, and again make a riskless profit. By the “no arbitrage” rule, that can’t happen,
so the price of the option V must be W0 .

Remark 7.5. Note that the proof of Theorem 7.4 tells you precisely what hedging
strategy (i.e., what portfolio process) to use.
      In the binomial asset pricing model, there is no difficulty computing the price of a
European call. We have
                                       X
                        E (Sn − K)+ =       (x − K)+ P(Sn = x)
                                             x

and                                           
                                              n
                                 P(Sn = x) =     pk q n−k
                                              k
if x = uk dn−k S0 . Therefore the price of the European call is
                                   n                    
                               −n
                                  X
                                        k n−k        +   n
                       (1 + r)       (u d     S0 − K)         pk q n−k .
                                                         k
                                  k=0


                                                 32
       The formula in Theorem 7.4 holds for exotic options as well. Suppose

                               V = max Si − min Sj .
                                    i=1,...,n        j=1,...,n


In other words, you sell the stock for the maximum value it takes during the first n time
steps and you buy at the minimum value the stock takes; you are allowed to wait until
time n and look back to see what the maximum and minimum were. You can even do this
if the maximum comes before the minimum. This V is still Fn measurable, so the theory
applies. Naturally, such a “buy low, sell high” option is very desirable, and the price of
such a V will be quite high. It is interesting that even without using options, you can
duplicate the operation of buying low and selling high by holding an appropriate number
of shares ∆k at time k, where you do not look into the future to determine ∆k .
       Let us look at an example of a European call so that it is clear how to do the
calculations. Consider the binomial asset pricing model with n = 3, u = 2, d = 12 , r = 0.1,
S0 = 10, and K = 15. If V is a European call with strike price K and exercise date n, let
us compute explicitly the random variables V1 and V2 and calculate the value V0 . Let us
also compute the hedging strategy ∆0 , ∆1 , and ∆2 .
       Let
                          (1 + r) − d                u − (1 + r)
                     p=               = .4,     q=               = .6.
                             u−d                        u−d
The following table describes the values of the stock, the payoff V , and the probabilities
for each possible outcome ω.




                                                33
      ω               S1              S2                S3                V            Probability


     HHH          10u               10u2               10u3              65                p3
     HHT          10u               10u2              10u2 d              5                p2 q
     HTH          10u               10ud              10u2 d              5                p2 q
     HTT          10u               10ud              10ud2              0                 pq 2
     THH          10d               10ud              10u2 d              5                p2 q
     THT          10d               10ud              10ud2              0                 pq 2
     TTH          10d               10d2              10ud2               0                pq 2
     TTT          10d               10d2               10d3               0                 q3
      We then calculate

                  V0 = (1 + r)−3 E V = (1 + r)−3 (65p3 + 15p2 q) = 4.2074.

V1 = (1 + r)−2 E [V | F1 ], so we have

     V1 (H) = (1 + r)−2 (65p2 + 10pq) = 10.5785,          V1 (T ) = (1 + r)−2 5pq = .9917.

V2 = (1 + r)−1 E [V | F2 ], so we have

     V2 (HH) = (1 + r)−1 (65p + 5q) = 24.5454,          V2 (HT ) = (1 + r)−1 5p = 1.8182,
                V2 (T H) = (1 + r)−1 5p = 1.8182,       V2 (T T ) = 0.

       The formula for ∆k is given by
                                         Vk+1 (H) − Vk+1 (T )
                                ∆k =                          ,
                                         Sk+1 (H) − Sk+1 (T )
so
                                      V1 (H) − V1 (T )
                               ∆0 =                    = .6391,
                                      S1 (H) − S1 (T )
where V1 and S1 are as above.
                V2 (HH) − V2 (HT )                              V2 (T H) − V2 (T T )
     ∆1 (H) =                      = .7576,         ∆1 (T ) =                        = .2424.
                S2 (HH) − S2 (HT )                              S2 (T H) − S2 (T T )
                                     V3 (HHH) − V3 (HHT )
                        ∆2 (HH) =                              = 1.0,
                                     S3 (HHH) − S3 (HHT )
                                    V3 (HT H) − V3 (HT T )
                        ∆2 (HT ) =                            = .3333,
                                    S3 (HT H) − S3 (HT T )
                                    V3 (T HH) − V3 (T HT )
                        ∆2 (T H) =                            = .3333,
                                    S3 (T HH) − S3 (T HT )
                                    V3 (T T H) − V3 (T T T )
                        ∆2 (T T ) =                          = 0.0.
                                    S3 (T T H) − S3 (T T T )

                                               34
Note 1. The second equality is (7.1) is not entirely obvious. Intuitively, it says that one has
a heads with probability p and the value of Vk+1 is Vk+1 (H) and one has tails with probability
q, and the value of Vk+1 is Vk+1 (T ).
       Let us give a more rigorous proof of (7.1). The right hand side of (7.1) is Fk measurable,
so we need to show that if A ∈ Fk , then

                              E [Vk+1 ; A] = E [pVk+1 (H) + qVk+1 (T ); A].

By linearity, it suffices to show this for A = {ω = (t1 t2 · · · tn ) : t1 = s1 , . . . , tk = sk }, where
s1 s2 · · · sk is any sequence of H’s and T ’s. Now

     E [Vk+1 ; s1 · · · sk ] = E [Vk+1 ; s1 · · · sk H] + E [Vk+1 ; s1 · · · sk T ]
                           = Vk+1 (s1 · · · sk H)P(s1 · · · sk H) + Vk+1 (s1 · · · sk T )P(s1 · · · sk T ).

By independence this is

                  Vk+1 (s1 · · · sk H)P(s1 · · · sk )p + Vk+1 (s1 · · · sk T )P(s1 · · · sk )q,

which is what we wanted.




                                                        35
8. American options.
        An American option is one where you can exercise the option any time before some
fixed time T . For example, on a European call, one can only use it to buy a share of stock
at the expiration time T , while for an American call, at any time before time T , one can
decide to pay K dollars and obtain a share of stock.
        Let us give an informal argument on how to price an American call, giving a more
rigorous argument in a moment. One can always wait until time T to exercise an American
call, so the value must be at least as great as that of a European call. On the other hand,
suppose you decide to exercise early. You pay K dollars, receive one share of stock, and
your wealth is St − K. You hold onto the stock, and at time T you have one share of stock
worth ST , and for which you paid K dollars. So your wealth is ST − K ≤ (ST − K)+ . In
fact, we have strict inequality, because you lost the interest on your K dollars that you
would have received if you had waited to exercise until time T . Therefore an American
call is worth no more than a European call, and hence its value must be the same as that
of a European call.
       This argument does not work for puts, because selling stock gives you some money
on which you will receive interest, so it may be advantageous to exercise early. (A put is
the option to sell a stock at a price K at time T .)

       Here is the more rigorous argument. Suppose that if you exercise the option at time
k, your payoff is g(Sk ). In present day dollars, that is, after correcting for inflation, you
have (1 + r)−k g(Sk ). You have to make a decision on when to exercise the option, and that
decision can only be based on what has already happened, not on what is going to happen
in the future. In other words, we have to choose a stopping time τ , and we exercise the
option at time τ (ω). Thus our payoff is (1 + r)−τ g(Sτ ). This is a random quantity. What
we want to do is find the stopping time that maximizes the expected value of this random
variable. As usual, we work with P, and thus we are looking for the stopping time τ such
that τ ≤ n and
                                      E (1 + r)−τ g(Sτ )

is as large as possible. The problem of finding such a τ is called an optimal stopping
problem.
       Suppose g(x) is convex with g(0) = 0. Certainly g(x) = (x−K)+ is such a function.
We will show that τ ≡ n is the solution to the above optimal stopping problem: the best
time to exercise is as late as possible.
       We have


     g(λx) = g(λx + (1 − λ) · 0) ≤ λg(x) + (1 − λ)g(0) = λg(x),         0 ≤ λ ≤ 1.       (8.1)

                                             36
By Jensen’s inequality,
                                                             h 1                i
                      −(k+1)                           −k
            E [(1 + r)         g(Sk+1 ) | Fk ] = (1 + r) E        g(Sk+1 ) | Fk
                                                              1+r
                                                             h  1              i
                                               ≥ (1 + r)−k E g      Sk+1 | Fk
                                                                1+r
                                                             h 1              i
                                               ≥ (1 + r)−k g E      Sk+1 | Fk
                                                                1+r
                                                        −k
                                               = (1 + r) g(Sk ).

For the first inequality we used (8.1). So (1 + r)−k g(Sk ) is a submartingale. By optional
stopping,
                          E [(1 + r)−τ g(Sτ )] ≤ E [(1 + r)−n g(Sn )],

so τ ≡ n always does best.
       For puts, the payoff is g(Sk ), where g(x) = (K − x)+ . This is also convex function,
but this time g(0) 6= 0, and the above argument fails.
       Although good approximations are known, an exact solution to the problem of
valuing an American put is unknown, and is one of the major unsolved problems in financial
mathematics.




                                               37
9. Continuous random variables.
        We are now going to start working toward continuous times and stocks that can
take any positive number as a value, so we need to prepare by extending some of our
definitions.
        Given any random variable X ≥ 0, we can approximate it by r.v’s Xn that are
discrete. We let
                                  n2n
                                  X    i
                            Xn =         1 n             n .
                                        n (i/2 ≤X<(i+1)/2 )
                                  i=0
                                      2

In words, if X(ω) lies between 0 and n, we let Xn (ω) be the closest value i/2n that is
less than or equal to X(ω). For ω where X(ω) > n + 2−n we set Xn (ω) = 0. Clearly
the Xn are discrete, and approximate X. In fact, on the set where X ≤ n, we have that
|X(ω) − Xn (ω)| ≤ 2−n .
       For reasonable X we are going to define E X = lim E Xn . Since the Xn increase
with n, the limit must exist, although it could be +∞. If X is not necessarily nonnegative,
we define E X = E X + − E X − , provided at least one of E X + and E X − is finite. Here
X + = max(X, 0) and X − = max(−X, 0).
       There are some things one wants to prove, but all this has been worked out in
measure theory and the theory of the Lebesgue integral; see Note 1. Let us confine ourselves
here to showing this definition is the same as the usual one when X has a density.
       Recall X has a density fX if
                                                             Z b
                                      P(X ∈ [a, b]) =              fX (x)dx
                                                              a


for all a and b. In this case                   Z ∞
                                         EX =                xfX (x)dx
                                                    −∞
           R∞
provided   −∞
                 |x|fX (x)dx < ∞. With our definition of Xn we have

                                                                          Z (i+1)/2n
                            n                   n                   n
                P(Xn = i/2 ) = P(X ∈ [i/2 , (i + 1)/2 )) =                             fX (x)dx.
                                                                              i/2n


Then
                            X i                       X Z (i+1)/2n i
                                                    n
                   E Xn =              P(Xn = i/2 ) =                 f (x)dx.
                                                                     n X
                                i
                                    2n                i  i/2 n     2

Since x differs from i/2n by at most 1/2n when x ∈ [i/2n , (i + 1)/2n ), this will tend to
R
  xfX (x)dx, unless the contribution to the integral for |x| ≥ n does not go to 0 as n → ∞.
           R
As long as |x|fX (x)dx < ∞, one can show that this contribution does indeed go to 0.

                                                        38
        We also need an extension of the definition of conditional probability. A r.v. is G
measurable if (X > a) ∈ G for every a. How do we define E [Z | G] when G is not generated
by a countable collection of disjoint sets?
        Again, there is a completely worked out theory that holds in all cases; see Note 2.
Let us give a definition that is equivalent that works except for a very few cases. Let us
suppose that for each n the σ-field Gn is finitely generated. This means that Gn is generated
by finitely many disjoint sets Bn1 , . . . , Bnmn . So for each n, the number of Bni is finite but
arbitrary, the Bni are disjoint, and their union is Ω. Suppose also that G1 ⊂ G2 ⊂ · · ·. Now
∪n Gn will not in general be a σ-field, but suppose G is the smallest σ-field that contains
all the Gn . Finally, define P(A | G) = lim P(A | Gn ).
        This is a fairly general set-up. For example, let Ω be the real line and let Gn be
generated by the sets (−∞, n), [n, ∞) and [i/2n , (i + 1)/2n ). Then G will contain every
interval that is closed on the left and open on the right, hence G must be the σ-field that
one works with when one talks about Lebesgue measure on the line.
        The question that one might ask is: how does one know the limit exists? Since
the Gn increase, we know by Proposition 4.3 that Mn = P(A | Gn ) is a martingale with
respect to the Gn . It is certainly bounded above by 1 and bounded below by 0, so by the
martingale convergence theorem, it must have a limit as n → ∞.
        Once one has a definition of conditional probability, one defines conditional expec-
                                                                         P
tation by what one expects. If X is discrete, one can write X as j aj 1Aj and then one
defines                                         X
                                  E [X | G] =        aj P(Aj | G).
                                                j

If the X is not discrete, one write X = X + −X − , one approximates X + by discrete random
variables, and takes a limit, and similarly for X − . One has to worry about convergence,
but everything does go through.
        With this extended definition of conditional expectation, do all the properties of
Section 2 hold? The answer is yes. See Note 2 again.
        With continuous random variables, we need to be more cautious about what we
mean when we say two random variables are equal. We say X = Y almost surely, abbre-
viated “a.s.”, if
                                  P({ω : X(ω) 6= Y (ω)}) = 0.
So X = Y except for a set of probability 0. The a.s. terminology is used other places as
well: Xn → Y a.s. means that except for a set of ω’s of probability zero, Xn (ω) → Y (ω).
Note 1. The best way to define expected value is via the theory of the Lebesgue integral. A
probability P is a measure that has total mass 1. So we define
                                           Z
                                    E X = X(ω) P(dω).

                                               39
                                                                                 Pm
To recall how the definition goes, we say X is simple if X(ω) =                     i=1 ai 1Ai (ω) with each
ai ≥ 0, and for a simple X we define
                                                    m
                                                    X
                                            EX =           ai P(Ai ).
                                                    i=1

If X is nonnegative, we define

                                  E X = sup{E Y : Y simple , Y ≤ X}.

Finally, provided at least one of E X + and E X − is finite, we define

                                        E X = E X + − E X −.

This is the same definition as described above.
Note 2. The Radon-Nikodym theorem from measure theory says that if Q and P are two
finite measures on (Ω, G) and Q(A) = 0 whenever P(A) = 0 and A ∈ G, then there exists an
                                                                  R
integrable function Y that is G-measurable such that Q(A) = A Y dP for every measurable
set A.
        Let us apply the Radon-Nikodym theorem to the following situation. Suppose (Ω, F, P)
is a probability space and X ≥ 0 is integrable: E X < ∞. Suppose G ⊂ F. Define two new
probabilities on G as follows. Let P0 = P|G , that is, P0 (A) = P(A) if A ∈ G and P0 (A) is not
                                                R
defined if A ∈ F − G. Define Q by Q(A) = A XdP = E [X; A] if A ∈ G. One can show
(using the monotone convergence theorem from measure theory) that Q is a finite measure on
G. (One can also use this definition to define Q(A) for A ∈ F, but we only want to define Q
on G, as we will see in a moment.) So Q and P0 are two finite measures on (Ω, G). If A ∈ G
and P0 (A) = 0, then P(A) = 0 and so it follows that Q(A) = 0. By the Radon-Nikodym
theorem there exists an integrable random variable Y such that Y is G measurable (this is why
we worried about which σ-field we were working with) and
                                                Z
                                       Q(A) =       Y dP0
                                                           A

if A ∈ G. Note
  ((a) Y is G measurable, and
   (b) if A ∈ G,
                                                 E [Y ; A] = E [X; A]

       because
                              Z             Z                           Z
                                                     0
    E [Y ; A] = E [Y 1A ] =        Y dP =        Y dP = Q(A) =              XdP = E [X1A ] = E [X; A].
                              A              A                          A

                                                      40
      We define E [X | G] to be the random variable Y . If X is integrable but not necessarily
nonnegative, then X + and X − will be integrable and we define

                             E [X | G] = E [X + | G] − E [X − | G].

We define
                                     P(B | G) = E [1B | G]

if B ∈ F.
       Let us show that there is only one r.v., up to almost sure equivalence, that satisfies (a)
and (b) above. If Y and Z are G measurable, and E [Y ; A] = E [X; A] = E [Z; A] for A ∈ G,
then the set An = (Y > Z + n1 ) will be in G, and so

               E [Z; An ] + n1 P(An ) = E [Z + n1 ; An ] ≤ E [Y ; An ] = E [Z; An ].

Consequently P(An ) = 0. This is true for each positive integer n, so P(Y > Z) = 0. By
symmetry, P(Z > Y ) = 0, and therefore P(Y 6= Z) = 0 as we wished.
        If one checks the proofs of Propositions 2.3, 2.4, and 2.5, one sees that only properties
(a) and (b) above were used. So the propositions hold for the new definition of conditional
expectation as well.
        In the case where G is finitely or countably generated, under both the new and old
definitions (a) and (b) hold. By the uniqueness result, the new and old definitions agree.




                                                41
10. Stochastic processes.
          We will be talking about stochastic processes. Previously we discussed sequences
S1 , S2 , . . . of r.v.’s. Now we want to talk about processes Yt for t ≥ 0. For example, we
can think of St being the price of a stock at time t. Any nonnegative time t is allowed.
          We typically let Ft be the smallest σ-field with respect to which Ys is measurable
for all s ≤ t. So Ft = σ(Ys : s ≤ t). As you might imagine, there are a few technicalities
one has to worry about. We will try to avoid thinking about them as much as possible,
but see Note 1.
          We call a collection of σ-fields Ft with Fs ⊂ Ft if s < t a filtration. We say the
filtration satisfies the “usual conditions” if the Ft are right continuous and complete (see
Note 1); all the filtrations we consider will satisfy the usual conditions.
          We say a stochastic process has continuous paths if the following holds. For each
ω, the map t → Yt (ω) defines a function from [0, ∞) to R. If this function is a continuous
function for all ω’s except for a set of probability zero, we say Yt has continuous paths.

Definition 10.1. A mapping τ : Ω → [0, ∞) is a stopping time if for each t we have

                                         (τ ≤ t) ∈ Ft .

       Typically, τ will be a continuous random variable and P(τ = t) = 0 for each t, which
is why we need a definition just a bit different from the discrete case.
       Since (τ < t) = ∪∞              1                1
                                                                  1 ⊂ Ft , then for a stopping
                          n=1 (τ ≤ t − n ) and (τ ≤ t − n ) ∈ Ft− n
time τ we have (τ < t) ∈ Ft for all t.
       Conversely, suppose τ is a nonnegative r.v. for which (τ < t) ∈ Ft for all t. We
claim τ is a stopping time. The proof is easy, but we need the right continuity of the Ft
here, so we put the proof in Note 2.
       A continuous time martingale (or submartingale) is what one expects: each Mt is
integrable, each Mt is Ft measurable, and if s < t, then

                                       E [Mt | Fs ] = Ms .

(Here we are saying the left hand side and the right hand side are equal almost surely; we
will usually not write the “a.s.” since almost all of our equalities for random variables are
only almost surely.)
       The analogues of Doob’s theorems go through. Note 3 has the proofs.

Note 1. For technical reasons, one typically defines Ft as follows. Let Ft0 = σ(Ys : s ≤ t).
This is what we referred to as Ft above. Next add to Ft0 all sets N for which P(N ) = 0. Such
sets are called null sets, and since they have probability 0, they don’t affect anything. In fact,
one wants to add all sets N that we think of being null sets, even though they might not be

                                               42
measurable. To be more precise, we say N is a null set if inf{P(A) : A ∈ F, N ⊂ A} = 0.
Recall we are starting with a σ-field F and all the Ft0 ’s are contained in F. Let Ft00 be the σ-
field generated by Ft0 and all null sets N , that is, the smallest σ-field containing Ft0 and every
null set. In measure theory terminology, what we have done is to say Ft00 is the completion of
Ft0 .
                                                                                           00
        Lastly, we want to make our σ-fields right continuous. We set Ft = ∩ε>0 Ft+ε          . Al-
though the union of σ-fields is not necessarily a σ-field, the intersection of σ-fields is. Ft
contains Ft00 but might possibly contain more besides. An example of an event that is in Ft
but that may not be in Ft00 is

                                 A = {ω : lim Yt+ n1 (ω) ≥ 0}.
                                             n→∞

        00                                                                          00
A ∈ Ft+    1 for each m, so it is in Ft . There is no reason it needs to be in Ft      if Y is not
           m
necessarily continuous at t. It is easy to see that ∩ε>0 Ft+ε = Ft , which is what we mean
when we say Ft is right continuous.
        When talking about a stochastic process Yt , there are various types of measurability
one can consider. Saying Yt is adapted to Ft means Yt is Ft measurable for each t. However,
since Yt is really a function of two variables, t and ω, there are other notions of measurability
that come into play. We will be considering stochastic processes that have continuous paths or
that are predictable (the definition will be given later), so these various types of measurability
will not be an issue for us.

Note 2. Suppose (τ < t) ∈ Ft for all t. Then for each positive integer n0 ,

                                 (τ ≤ t) = ∩∞             1
                                            n=n0 (τ < t + n ).


For n ≥ n0 we have (τ < t + n1 ) ∈ Ft+ n1 ⊂ Ft+ n1 . Therefore (τ ≤ t) ∈ Ft+ n1 for each n0 .
                                                    0                          0
Hence the set is in the intersection: ∩n0 >1 Ft+ n1 ⊂ ∩ε>0 Ft+ε = Ft .
                                                     0

Note 3. We want to prove the analogues of Theorems 5.3 and 5.4. The proof of Doob’s
inequalities are simpler. We only will need the analogue of Theorem 5.4(b).

Theorem 10.2. Suppose Mt is a martingale with continuous paths and E Mt2 < ∞ for
all t. Then for each t0
                         E [(sup Ms )2 ] ≤ 4E [|Mt0 |2 ].
                                      s≤t0


Proof. By the definition of martingale in continuous time, Nk is a martingale in discrete time
with respect to Gk when we set Nk = Mkt0 /2n and Gk = Fkt0 /2n . By Theorem 5.4(b)

                             2                      2         2        2
                  E [ max n Mkt      n ] = E [ max Nk ] ≤ 4E N2n = 4E Mt .
                                0 /2              n                     0
                     0≤k≤2                   0≤k≤2


                                                43
(Recall (maxk ak )2 = max a2k if all the ak ≥ 0.)
                                                                     2
       Now let n → ∞. Since Mt has continuous paths, max0≤k≤2n Mkt     0 /2
                                                                            n increases up to
          2
sups≤t0 Ms . Our result follows from the monotone convergence theorem from measure theory
(see Note 4).

       We now prove the analogue of Theorem 5.3. The proof is simpler if we assume that
E Mt2 is finite; the result is still true without this assumption.

Theorem 10.3. Suppose Mt is a martingale with continuous paths, E Mt2 < ∞ for all t,
and τ is a stopping time bounded almost surely by t0 . Then E Mτ = E Mt0 .

Proof. We approximate τ by stopping times taking only finitely many values. For n > 0
define
                       τn (ω) = inf{kt0 /2n : τ (ω) < kt0 /2n }.

τn takes only the values kt0 /2n for some k ≤ 2n . The event (τn ≤ jt0 /2n ) is equal to
(τ < jt0 /2n ), which is in Fjt0 /2n since τ is a stopping time. So (τn ≤ s) ∈ Fs if s is of the
form jt0 /2n for some j. A moment’s thought, using the fact that τn only takes values of the
form kt0 /2n , shows that τn is a stopping time.
       It is clear that τn ↓ τ for every ω. Since Mt has continuous paths, Mτn → Mτ a.s.
       Let Nk and Gk be as in the proof of Theorem 10.2. Let σn = k if τn = kt0 /2n . By
Theorem 5.3,
                                         E Nσn = E N2n ,

which is the same as saying
                                         E Mτn = E Mt0 .

         To complete the proof, we need to show E Mτn converges to E Mτ . This is almost
obvious, because we already observed that Mτn → Mτ a.s. Without the assumption that
E Mt2 < ∞ for all t, this is actually quite a bit of work, but with the assumption it is not too
bad.
         Either |Mτn − Mτ | is less than or equal to 1 or greater than 1. If it is greater than 1,
it is less than |Mτn − Mτ |2 . So in either case,

                                |Mτn − Mτ | ≤ 1 + |Mτn − Mτ |2 .                           (10.1)

Because both |Mτn | and |Mτ | are bounded by sups≤t0 |Ms |, the right hand side of (10.1) is
bounded by 1 + 4 sups≤t0 |Ms |2 , which is integrable by Theorem 10.2. |Mτn − Mτ | → 0, and
so by the dominated convergence theorem from measure theory (Note 4),

                                       E |Mτn − Mτ | → 0.

                                                44
Finally,
               |E Mτn − E Mτ | = |E (Mτn − Mτ )| ≤ E |Mτn − Mτ | → 0.




Note 4. The dominated convergence theorem says that if Xn → X a.s. and |Xn | ≤ Y a.s.
for each n, where E Y < ∞, then E Xn → E X.
       The monotone convergence theorem says that if Xn ≥ 0 for each n, Xn ≤ Xn+1 for
each n, and Xn → X, then E Xn → E X.




                                         45
11. Brownian motion.
      First, let us review a few facts about normal random variables. We say X is a
normal random variable with mean a and variance b2 if
                                        Z d
                                               1          2   2
                        P(c ≤ X ≤ d) =      √      e−(y−a) /2b dy
                                         c    2πb2
and we will abbreviate this by saying X is N (a, b2 ). If X is N (a, b2 ), then E X = a,
Var X = b2 , and E |X|p < ∞ is finite for every positive integer p. Moreover
                                                        2 2
                                        E etX = eat et b /2 .

       Let Sn be a simple symmetric random walk. This means that Yk = Sk − Sk−1
equals +1 with probability 12 , equals −1 with probability 12 , and is independent of Yj for
                                                         Pn
j < k. We notice that E Sn = 0 while E Sn2 = i=1 E Yi2 + i6=j E Yi Yj = n using the fact
                                                                         P

that E [Yi Yj ] = (E Yi )(E Yj ) = 0.
                                √
       Define Xtn = Snt / n if nt is an integer and by linear interpolation for other t. If
nt is an integer, E Xtn = 0 and E (Xtn )2 = t. It turns out Xtn does not converge for any ω.
       However there is another kind of convergence, called weak convergence, that takes
place. There exists a process Zt such that for each k, each t1 < t2 < · · · < tk , and each
a1 < b1 , a2 < b2 , . . . , ak < bk , we have
   (1) The paths of Zt are continuous as a function of t.
   (2) P(Xtn1 ∈ [a1 , b1 ], . . . , Xtnk ∈ [ak , bk ]) → P(Zt1 ∈ [a1 , b1 ], . . . , Ztk ∈ [ak , bk ]).
See Note 1 for more discussion of weak convergence.
        The limit Zt is called a Brownian motion starting at 0. It has the following prop-
erties.
   (1) E Zt = 0.
   (2) E Zt2 = t.
   (3) Zt − Zs is independent of Fs = σ(Zr , r ≤ s).
   (4) Zt − Zs has the distribution of a normal random variable with mean 0 and variance
        t − s. This means
                                              Z b
                                                      1          2
                        P(Zt − Zs ∈ [a, b]) =     p           e−y /2(t−s) dy.
                                               a    2π(t − s)

       (This result follows from the central limit theorem.)
   (5) The map t → Zt (ω) is continuous for almost all ω.
See Note 2 for a few remarks on this definition.
        It is common to use Bt (“B” for Brownian) or Wt (“W” for Wiener, who was the
first person to prove rigorously that Brownian motion exists). We will most often use Wt .

                                                  46
        We will use Brownian motion extensively and develop some of its properties. As
one might imagine for a limit of a simple random walk, the paths of Brownian motion have
a huge number of oscillations. It turns out that the function t → Wt (ω) is continuous, but
it is not differentiable; in fact one cannot define a derivative at any value of t. Another
bizarre property: if one looks at the set of times at which Wt (ω) is equal to 0, this is a
set which is uncountable, but contains no intervals. There is nothing special about 0 – the
same is true for the set of times at which Wt (ω) is equal to a for any level a.

      In what follows, one of the crucial properties of a Brownian motion is that it is a
martingale with continuous paths. Let us prove this.

Proposition 11.1. Wt is a martingale with respect to Ft and Wt has continuous paths.

Proof. As part of the definition of a Brownian motion, Wt has continuous paths. Wt is Ft
measurable by the definition of Ft . Since the distribution of Wt is that of a normal random
variable with mean 0 and variance t, then E |Wt | < ∞ for all t. (In fact, E |Wt |n < ∞ for
all n.)
        The key property is to show E [Wt | Fs ] = Ws .

         E [Wt | Fs ] = E [Wt − Ws | Fs ] + E [Ws | Fs ] = E [Wt − Ws ] + Ws = Ws .

We used here the facts that Wt − Ws is independent of Fs and that E [Wt − Ws ] = 0
because Wt and Ws have mean 0.

       We will also need

Proposition 11.2. Wt2 − t is a martingale with continuous paths with respect to Ft .

Proof. That Wt2 − t is integrable and is Ft measurable is as in the above proof. We
calculate

    E [Wt2 − t | Fs ] = E [((Wt − Ws ) + Ws )2 | Fs ] − t
                    = E [(Wt − Ws )2 | Fs ] + 2E [(Wt − Ws )Ws | Fs ] + E [Ws2 | Fs ] − t
                    = E [(Wt − Ws )2 ] + 2Ws E [Wt − Ws | Fs ] + Ws2 − t.

We used the facts that Ws is Fs measurable and that (Wt − Ws )2 is independent of Fs
because Wt − Ws is. The second term on the last line is equal to Ws E [Wt − Ws ] = 0. The
first term, because Wt − Ws is normal with mean 0 and variance t − s, is equal to t − s.
Substituting, the last line is equal to

                               (t − s) + 0 + Ws2 − t = Ws2 − s

                                              47
as required.


Note 1. A sequence of random variables Xn converges weakly to X if P(a < Xn < b) →
P(a < X < b) for all a, b ∈ [−∞, ∞] such that P(X = a) = P(X = b) = 0. a and b can be
infinite. If Xn converges to a normal random variable, then P(X = a) = P(X = b) = 0 for all
a and b. This is the type of convergence that takes place in the central limit theorem. It will
not be true in general that Xn converges to X almost surely.
          For a sequence of random vectors (X1n , . . . , Xkm ) to converge to a random vector
(X1 , . . . , Xk ), one can give an analogous definition. But saying that the normalized random
walks Xn (t) above converge weakly to Zt actually says more than (2). A result from probability
theory says that Xn converges to X weakly if and only if E [f (Xn )] → E [f (X)] whenever f
is a bounded continuous function on R. We use this to define weak convergence for stochastic
processes. Let C([0, ∞) be the collection of all continuous functions from [0, ∞) to the reals.
This is a metric space, so the notion of function from C([0, ∞)) to R being continuous makes
sense. We say that the processes Xn converge weakly to the process Z, and mean by this
that E [F (Xn )] → E [F (Z)] whenever F is a bounded continuous function on C([0, ∞)). One
example of such a function F would be F (f ) = sup0≤t<∞ |f (t)| if f ∈ C([0, ∞)); Another
                       R1
would be F (f ) = 0 f (t)dt.
          The reason one wants to show that Xn converges weakly to Z instead of just showing
(2) is that weak convergence can be shown to imply that Z has continuous paths.

Note 2. First of all, there is some redundancy in the definition: one can show that parts
of the definition are implied by the remaining parts, but we won’t worry about this. Second,
we actually want to let Ft to be the completion of σ(Zs : s ≤ t), that is, we throw in all the
null sets into each Ft . One can prove that the resulting Ft are right continuous, and hence
the filtration Ft satisfies the “usual” conditions. Finally, the “almost all” in (5) means that
t → Zt (ω) is continuous for all ω, except for a set of ω of probability zero.




                                              48
12. Stochastic integrals.
                                                                       Rt
       If one wants to consider the (deterministic) integral 0 f (s) dg(s), where f and g
are continuous and g is continuously differentiable, we can define it analogously to the
                                                                 Pn
usual Riemann integral as the limit of Riemann sums i=1 f (si )[g(si ) − g(si−1 )], where
s1 < s2 < · · · < sn is a partition of [0, t]. This is known as the Riemann-Stieltjes integral.
One can show (using the mean value theorem, for example) that
                                Z t               Z t
                                    f (s) dg(s) =      f (s)g 0 (s) ds.
                                        0                          0

If we were to take f (s) = 1[0,a] (s) (which is not continuous, but that is a minor matter
here), one would expect the following:
           Z t                    Z t                      Z a
                                                 0
               1[0,a] (s) dg(s) =     1[0,a] (s)g (s) ds =     g 0 (s) ds = g(a) − g(0).
             0                              0                                   0

Note that although we use the fact that g is differentiable in the intermediate stages, the
first and last terms make sense for any g.
        We now want to replace g by a Brownian path and f by a random integrand. The
             R
expression f (s) dW (s) does not make sense as a Riemann-Stieltjes integral because it is
a fact that W (s) is not differentiable as a function of t. We need to define the expression
by some other means. We will show that it can be defined as the limit in L2 of Riemann
sums. The resulting integral is called a stochastic integral.
        Let us consider a very special case first. Suppose f is continuous and deterministic
(i.e., does not depend on ω). Suppose we take a Riemann sum approximation
                                             n
                                            2X −1
                                   In =               f ( 2in )[W ( i+1          i
                                                                     2n ) − W ( 2n )].
                                                i=0

Since Wt has zero expectation for each t, E In = 0. Let us calculate the second moment:
                    h X                                  2 i
          E In2 = E      f ( 2in )[W ( i+1
                                        2 n ) − W ( 2
                                                     i
                                                      n )]                        (12.1)
                            i
                       n
                      2X −1
                 =E             f ( 2in )2 [W ( i+1          i
                                                 2n ) − W ( 2n )]
                                                                 2

                      i=0
                            X
                      +E               f ( 2in )f ( 2jn )[W ( i+1          i        j+1          j
                                                               2n ) − W ( 2n )] [W ( 2n ) − W ( 2n )].
                                i6=j

The first sum is bounded by
                                                                       Z 1
                                         X                  1
                                                 f ( 2in )2 n ≈              f (t)2 dt,
                                            i
                                                           2            0


                                                              49
since the second moment of W ( i+1          i         n
                                2n ) − W ( 2n ) is 1/2 . Using the independence and the
fact that Wt has mean zero,
                            j+1        j                                 j+1        j
 E [W ( i+1        i                                i+1        i
                                          
         2n − W ( 2n )] [W ( 2n − W ( 2n )] = E [W ( 2n − W ( 2n )]E [W ( 2n − W ( 2n )] = 0,

and so the second sum on the right hand side of (12.1) is zero. This calculation is the key
to the stochastic integral.
       We now turn to the construction. Let Wt be a Brownian motion. We will only
consider integrands Hs such that Hs is Fs measurable for each s (see Note 1). We will
          Rt
construct 0 Hs dWs for all H with
                                               Z t
                                           E         Hs2 ds < ∞.                       (12.2)
                                                0


       Before we proceed we will need to define the quadratic variation of a continuous
martingale. We will use the following theorem without proof because in our applications we
can construct the desired increasing process directly. We often say a process is a continuous
process if its paths are continuous, and similarly a continuous martingale is a martingale
with continuous paths.
Theorem 12.1. Suppose Mt is a continuous martingale such that E Mt2 < ∞ for all t.
There exists one and only one increasing process At that is adapted to Ft , has continuous
paths, and A0 = 0 such that Mt2 − At is a martingale.
       The simplest example of such a martingale is Brownian motion. If Wt is a Brownian
motion, we saw in Proposition 11.2 that Wt2 − t is a martingale. So in this case At = t
almost surely, for all t. Hence hW it = t.
       We use the notation hM it for the increasing process given in Theorem 12.1 and call
it the quadratic variation process of M . We will see later that in the case of stochastic
integrals, where                           Z              t
                                           Nt =               Hs dWs ,
                                                      0
                            Rt
it turns out that hN it =   0
                                 Hs2 ds.
      We will use the following frequently, and in fact, these are the only two properties
of Brownian motion that play a significant role in the construction.
Lemma 12.1. (a) E [Wb − Wa | Fa ] = 0.
  (b) E [Wb2 − Wa2 | Fa ] = E [(Wb − Wa )2 | Fa ] = b − a.

Proof. (a) This is E [Wb − Wa ] = 0 by the independence of Wb − Wa from Fa and the
fact that Wb and Wa have mean zero.

                                                      50
       (b) (Wb − Wa )2 is independent of Fa , so the conditional expectation is the same as
E [(Wb − Wa )2 ]. Since Wb − Wa is a N (0, b − a), the second equality in (b) follows.
       To prove the first equality in (b), we write

    E [Wb2 − Wa2 | Fa ] = E [((Wb − Wa ) + Wa )2 | Fa ] − E [Wa2 | Fa ]
                        = E [(Wb − Wa )2 | Fa ] + 2E [Wa (Wb − Wa ) | Fa ] + E [Wa2 | Fa ]
                             − E [Wa2 | Fa ]
                        = E [(Wb − Wa )2 | Fa ] + 2Wa E [Wb − Wa | Fa ],

and the first equality follows by applying (a).


       We construct the stochastic integral in three steps. We say an integrand Hs = Hs (ω)
is elementary if
                                  Hs (ω) = G(ω)1(a,b] (s)

where 0 ≤ a < b and G is bounded and Fa measurable. We say H is simple if it is a finite
linear combination of elementary processes, that is,
                                            n
                                            X
                                Hs (ω) =           Gi (ω)1(ai ,bi ] (s).                (12.3)
                                            i=1

We first construct the stochastic integral for H elementary; the work here is showing the
stochastic integral is a martingale. We next construct the integral for H simple and here
the difficulty is calculating the second moment. Finally we consider the case of general H.
First step. If G is bounded and Fa measurable, let Hs (ω) = G(ω)1(a,b] (s), and define the
stochastic integral to be the process Nt , where Nt = G(Wt∧b − Wt∧a ). Compare this to
the first paragraph of this section, where we considered Riemann-Stieltjes integrals.
                                                    2
Proposition 12.2. Nt is a continuous martingale, E N∞ = E [G2 (b − a)] and
                                            Z t
                                  hN it =          G2 1[a,b] (s) ds.
                                               0


Proof. The continuity is clear. Let us look at E [Nt | Fs ]. In the case a < s < t < b, this
is equal to

            E [G(Wt − Wa ) | Fs ] = GE [(Wt − Wa ) | Fs ] = G(Ws − Wa ) = Ns .

In the case s < a < t < b, E [Nt | Fs ] is equal to

               E [G(Wt − Wa ) | Fs ] = E [GE [Wt − Wa | Fa ] | Fs ] = 0 = Ns .

                                                   51
The other possibilities are s < t < a < b, a < b < s < t, as < a < b < t, and a < s < b < t;
these are done similarly.
               2
       For E N∞  , we have using Lemma 12.1(b)

         2
      E N∞ = E [G2 E [(Wb − Wa )2 | Fa ]] = E [G2 E [Wb2 − Wa2 | Fa ]] = E [G2 (b − a)].

       For hN it , we need to show

              E [G2 (Wt∧b − Wt∧a )2 − G2 (t ∧ b − t ∧ a) | Fs ]
                                       = G2 (Ws∧b − Ws∧a )2 − G2 (s ∧ b − s ∧ a).

We do this by checking all six cases for the relative locations of a, b, s, and t; we do one of
the cases in Note 2.


Second step. Next suppose Hs is simple as in (12.3). In this case define the stochastic
integral
                          Z t           Xn
                     Nt =     Hs dWs =      Gi (Wbi ∧t − Wai ∧t ).
                                 0                 i=1

                                                    2
                                                                             R∞
Proposition 12.3. Nt is a continuous martingale, E N∞ = E                     0
                                                                                    Hs2 ds, and hN it =
Rt 2
 0
   Hs ds.

Proof. We may rewrite H so that the intervals (ai , bi ] satisfy a1 ≤ b1 ≤ a2 ≤ b2 ≤ · · · ≤ bn .
For example, if we had a1 < a2 < b1 < b2 , we could write

                      Hs = G1 1(a1 ,a2 ] + (G1 + G2 )1(a2 ,b1 ] + G2 1(b1 ,b2 ] ,

and then if we set G01 = G1 , G02 = G1 + G2 , G03 = G2 and a01 = a1 , b01 = a2 , a02 = a2 , b02 =
b1 , a03 = b1 , b03 = b2 , we have written H as

                                           3
                                           X
                                                 G0i 1(a0i ,b0i ] .
                                           i=1


So now we have H simple but with the intervals (a0i , b0i ] non-overlapping.
       Since the sum of martingales is clearly a martingale, Nt is a martingale. The sum
of continuous processes will be continuous, so Nt has continuous paths.
       We have
                  hX                     i     hX                               i
          2
       E N∞ =E          G2i (Wbi − Wai )2 + 2E    Gi Gj (Wbi − Wai )(Wbj − Waj ) .
                                                           i<j


                                                    52
The terms in the second sum vanish, because when we condition on Faj , we have

                         E [Gi Gj (Wbi − Wai )E [(Wbj − Waj ) | Faj ] = 0.

Taking expectations,
                             E [Gi Gj (Wbi − Wai )(Wbj − Waj )] = 0.

For the terms in the first sum, by Lemma 12.1

          E [G2i (Wbi − Wai )2 ] = E [G2i E [(Wbi − Wai )2 | Fai ]] = E [G2i ([bi − ai )].

So
                                                      n
                                                      X
                                      2
                                   E N∞ =                   E[G2i ([bi − ai )],
                                                      i=1
                             R∞
and this is the same as E     0
                                  Hs2 ds.

                                                R∞
Third step. Now suppose Hs is adapted and E 0 Hs2 ds < ∞. Using some results from
                                                             R∞
measure theory (Note 3), we can choose Hsn simple such that E 0 (Hsn − Hs )2 ds → 0.
The triangle inequality then implies (see Note 3 again)
                                 Z ∞
                               E      (Hsn − Hsm )2 ds → 0.
                                            0
               Rt
Define Ntn =   0
                    Hsn dWs using Step 2. By Doob’s inequality (Theorem 10.3) we have
                                                        h        Z t                 2 i
                     E [sup(Ntn − Ntm )2 ] = E        sup      (Hsn − Hsm ) dWs
                         t                             t     0
                                                      Z ∞                   2
                                                 ≤ 4E       (Hsn − Hsm ) dWs
                                                         0
                                                      Z ∞
                                                 = 4E      (Hsn − Hsm )2 ds → 0.
                                                             0

This should look reminiscent of the definition of Cauchy sequences, and in fact that is what
is going on here; Note 3 has details. In the present context Cauchy sequences converge,
and one can show (Note 3) that there exists a process Nt such that
                                  h            Z t                     2 i
                              E        sup            Hsn dWs − Nt             → 0.
                                        t        0
                                                                     Rt
      If Hsn and Hsn 0 are two sequences converging to H, then E ( 0 (Hsn − Hsn 0 ) dWs )2 =
  Rt
E 0 (Hsn − Hsn 0 )2 ds → 0, or the limit is independent of which sequence H n we choose. See
                                                             Rt                    Rt
Note 4 for the proof that Nt is a martingale, E Nt2 = E 0 Hs2 ds, and hN it = 0 Hs2 ds.

                                                            53
              Rt
Because supt [ 0 Hsn dWs − Nt ] → 0, one can show there exists a subsequence such that the
convergence takes place almost surely, and with probability one, Nt has continuous paths
(Note 5).
                       Rt
      We write Nt = 0 Hs dWs and call Nt the stochastic integral of H with respect to
W.

        We discuss some extensions of the definition. First of all, if we replace Wt by a
                                                         Rt
continuous martingale Mt and Hs is adapted with E 0 Hs2 dhM is < ∞, we can duplicate
everything we just did (see Note 6) with ds replaced by dhM is and get a stochastic integral.
In particular, if dhM is = Ks2 ds, we replace ds by Ks2 ds.
        There are some other extensions of the definition that are not hard. If the random
          R∞
variable 0 Hs2 dhM is is finite but without its expectation being finite, we can define the
stochastic integral by defining it for t ≤ TN for suitable stopping times TN and then letting
TN → ∞; look at Note 7.
        A process At is of bounded variation if the paths of At have bounded variation. This
                                          −                  −
means that one can write At = A+                     +
                                    t −At , where At and At have paths that are increasing.
                                      −
|A|t is then defined to be A+ t +A      . A semimartingale is the sum of a martingale and a
                                     Rt∞ 2            R∞
process of bounded variation. If 0 Hs dhM is + 0 |Hs | |dAs | < ∞ and Xt = Mt + At ,
we define                   Z          t   Z             Zt                          t
                                           Hs dXs =           Hs dMs +                   Hs dAs ,
                                   0                  0                          0

where the first integral on the right is a stochastic integral and the second is a Riemann-
Stieltjes or Lebesgue-Stieltjes integral. For a semimartingale, we define hXit = hMt i. Note
7 has more on this.
        Given two semimartingales X and Y we define hX, Y it by what is known as polar-
ization:
                          hX, Y it = 12 [hX + Y it − hXit − hY it ].
                       Rt                     Rt                       Rt
As an example, if Xt = 0 Hs dWs and Yt = 0 Ks dWs , then (X + Y )t = 0 (Hs + Ks )dWs ,
so                    Z        t            Z           Z         t  Z                   t                     t
          hX + Y it =              (Hs + Ks )2 ds =                   Hs2 ds +               2Hs Ks ds +           Ks2 ds.
                           0                                  0                      0                     0
               Rt
Since hXit =   0
                    Hs2 ds with a similar formula for hY it , we conclude

                                                               Z t
                                              hX, Y it =               Hs Ks ds.
                                                                  0



       The following holds, which is what one would expect.

                                                              54
                                                        R∞
Proposition 12.4. Suppose Ks is adapted to Fs and E 0 Ks2 ds < ∞. Let Nt =
Rt                                     R∞                       R∞
 0
   Ks dWs . Suppose Hs is adapted and E 0 Hs2 dhN is < ∞. Then E 0 Hs2 Ks2 ds < ∞
and                          Z        t  Z               t
                                          Hs dNs =           Hs Ks dWs .
                                  0                  0

       The argument for the proof is given in Note 8.

       What does a stochastic integral mean? If one thinks of the derivative of Zt as being
                     Rt
a white noise, then 0 Hs dZs is like a filter that increases or decreases the volume by a
factor Hs .
                                                                           Rt
       For us, an interpretation is that Zt represents a stock price. Then 0 Hs dZs repre-
sents our profit (or loss) if we hold Hs shares at time s. This can be seen most easily if
Hs = G1[a,b] . So we buy G(ω) shares at time a and sell them at time b. The stochastic
integral represents our profit or loss.
       Since we are in continuous time, we are allowed to buy and sell continuously and
instantaneously. What we are not allowed to do is look into the future to make our
decisions, which is where the Hs adapted condition comes in.

Note 1. Let us be more precise concerning the measurability of H that is needed. H is a
stochastic process, so can be viewed as a map from [0, ∞) × Ω to R by H : (s, ω) → Hs (ω).
We define a σ-field P on [0, ∞) × Ω as follows. Consider the collection of processes of the form
G(ω)1(a,b]) (s) where G is bounded and Fa measurable for some a < b. Define P to be the
smallest σ-field with respect to which every process of this form is measurable. P is called the
predictable or previsible σ-field, and if a process H is measurable with respect to P, then the
process is called predictable. What we require for our integrands H is that they be predictable
processes.
        If Hs has continuous paths, then approximating continuous functions by step functions
shows that such an H can be approximated by linear combinations of processes of the form
G(ω)1(a,b]) (s). So continuous processes are predictable. The majority of the integrands we
will consider will be continuous.
        If one is slightly more careful, one sees that processes whose paths are functions which
are continuous from the left at each time point are also predictable. This gives an indication
of where the name comes from. If Hs has paths which are left continuous, then Ht =
limn→∞ Ht− n1 , and we can “predict” the value of Ht from the values at times that come
before t. If Ht is only right continuous and a path has a jump at time t, this is not possible.

Note 2. Let us consider the case a < s < t < b; again similar arguments take care of the
other five cases. We need to show

            E [G2 (Wt − Wa )2 − G2 (t − a) | Fs ] = G2 (Ws − Wa )2 − G2 (s − a).         (12.4)

                                                 55
The left hand side is equal to G2 E [(Wt − Wa )2 − (t − a) | Fs ]. We write this as

   G2 E [((Wt − Ws ) + (Ws − Wa ))2 − (t − a) | Fs ]
             n
      = G2 E [(Wt − Ws )2 | Fs ] + 2E [(Wt − Ws )(Ws − Wa ) | Fs ]
                                           o
                          2
           + E [(Ws − Wa ) | Fs ] − (t − a)
             n                                                                    o
      = G2 E [(Wt − Ws )2 ] + 2(Ws − Wa )E [Wt − Ws | Fs ] + (Ws − Wa )2 − (t − a)
             n                                   o
           2                          2
      = G (t − s) + 0 + (Ws − Wa ) − (t − a) .

The last expression is equal to the right hand side of (12.4).
Note 3. A definition from measure theory says that if µ is a measure, kf k2 , the L2 norm of
                                               R             1/2
f with respect to the measure µ, is defined as    f (x)2 µ(dx)     . The space L2 is defined
to be the set of functions f for which kf k2 < ∞. (A technical proviso: one has to identify as
equal functions which differ only on a set of measure 0.) If one defines a distance between two
functions f and g by d(f, g) = kf − gk2 , this is a metric on the space L2 , and a theorem from
measure theory says that L2 is complete with respect to this metric. Another theorem from
                                                                                    Pn
measure theory says that the collection of simple functions (functions of the form i=1 ci 1Ai )
is dense in L2 with respect to the metric.
       Let us define a norm on stochastic processes; this is essentially an L2 norm. Define
                                                  1/2
                                  kN k = E sup Nt2      .
                                              0≤t<∞

One can show that this is a norm, and hence that the triangle inequality holds. Moreover, the
space of processes N such that kN k < ∞ is complete with respect to this norm. This means
that if N n is a Cauchy sequence, i.e., if given ε there exists n0 such that kN n − N m k < ε
whenever n, m ≥ n0 , then the Cauchy sequence converges, that is, there exists N with kN k <
∞ such that kN n − N k → 0.
        We can define another norm on stochastic processes. Define
                                            Z ∞          1/2
                                kHk2 = E           Hs2 ds      .
                                                  0

This can be viewed as a standard L2 norm, namely, the L2 norm with respect to the measure
µ defined on P by                         Z       ∞
                                  µ(A) = E            1A (s, ω)ds.
                                              0

Since the set of simple functions with respect to µ is dense in L2 , this says that if H is
measurable with respect to P, then there exist simple processes Hsn that are also measurable
with respect to P such that kH n − Hk2 → 0.

                                              56
Note 4. We have kN n − N k → 0, where the norm here is the one described in Note 3. Each
N n is a stochastic integral of the type described in Step 2 of the construction, hence each Ntn
is a martingale. Let s < t and A ∈ Fs . Since E [Ntn | Fs ] = Nsn , then

                                        E [Ntn ; A] = E [Nsn ; A].                                 (12.5)

By Cauchy-Schwarz,
                                                                          1/2          1/2
       |E [Ntn ; A] − E [Nt ; A]| ≤ E [ |Ntn − Nt |; A] ≤ E [(Ntn − Nt )2 ]       E [12A ]
                                  ≤ kN n − N k → 0.                                                (12.6)

We have a similar limit when t is replaced by s, so taking the limit in (12.5) yields

                                         E [Nt ; A] = E [Ns ; A].

Since Ns is Fs measurable and has the same expectation over sets A ∈ Fs as Nt does, then
by Proposition 4.3 E [Nt | Fs ] = Ns , or Nt is a martingale.
       Suppose kN n − N k → 0. Given ε > 0 there exists n0 such that kN n − N k < ε if
n ≥ n0 . Take ε = 1 and choose n0 . By the triangle inequality,

                          kN k ≤ kN n k + kN n − N k ≤ kN n k + 1 < ∞

since kN n k is finite for each n.
        That Nt2 − hN it is a martingale is similar to the proof that Nt is a martingale, but
slightly more delicate. We leave the proof to the reader, but note that in place of (SEC.402)
one writes

   |E [(Ntn )2 ; A] − E [(Nt )2 ; A]| ≤ E [ |(Ntn )2 − (Nt )2 |] ≤ E [ |Ntn − Nt | |Ntn + Nt |].   (12.7)

By Cauchy-Schwarz this is less than

                                        kNtn − Nt k kNtn + Nt k.

since kNtn + Nt k ≤ kNtn k + kNt k is bounded independently of n, we see that the left hand
side of (12.7) tends to 0.
Note 5. We have kN n − N k → 0, where the norm is described in Note 3. This means that

                                        E [sup |Ntn − Nt |2 ] → 0.
                                            t

A result from measure theory implies that there exists a subsequence nk such that

                                   sup |Ntnk − Nt |2 → 0,            a.s.
                                    t


                                                   57
So except for a set of ω’s of probability 0, Ntnk (ω) converges to Nt (ω) uniformly. Each Ntnk (ω)
is continuous by Step 2, and the uniform limit of continuous functions is continuous, therefore
Nt (ω) is a continuous function of t. Incidentally, this is the primary reason we considered
Doob’s inequalities.

Note 6. If Mt is a continuous martingale, E [Mb − Ma | Fa ] = E [Mb | Fa ] − Ma =
Ma − Ma = 0. This is the analogue of Lemma 12.1(a). To show the analogue of Lemma
12.1(b),

     E [(Mb − Ma )2 | Fa ] = E [Mb2 | Fa ] − 2E [Mb Ma | Fa ] + E [Ma2 | Fa ]
                           = E [Mb2 | Fa ] − 2Ma E [Mb | Fa ] + Ma2
                           = E [Mb2 − hM ib | Fa ] + E [hM ib − hM ia | Fa ] + Ma2 − hM ia
                           = E [hM ib − hM ia | Fa ],

since Mt2 − hM it is a martingale. That

                          E [Mb2 − Ma2 | Fa ] = E [hM ib − hM ia | Fa ]

is just a rewriting of

                  E [Mb2 − hM ib | Fa ] = Ma2 − hM ia = E [Ma2 − hM ia | Fa ].

         With these two properties in place of Lemma 12.1, replacing Ws by Ms and ds by
                                                     Rt
dhM is , the construction of the stochastic integral 0 Hs dMs goes through exactly as above.
                                        Rt
Note 7. If we let TK = inf{t > 0 : 0 Hs2 dhM is ≥ K}, the first time the integral is larger
                                                           R∞
than or equal to K, and we let HsK = Hs 1(s≤TK ) , then 0 HsK dhM is ≤ K and there is no
                          Rt
difficulty defining NtK = 0 HsK dMs for every t. One can show that if t ≤ TK1 and TK2 , then
                      Rt
NtK1 = NtK2 a.s. If 0 Hs dhM is is finite for every t, then TK → ∞ as K → ∞. If we call the
common value Nt , this allows one to define the stochastic integral Nt for each t in the case
                     Rt
where the integral 0 Hs2 dhM is is finite for every t, even if the expectation of the integral is
not.
         We can do something similar is Mt is a martingale but where we do not have E hM i∞ <
∞. Let SK = inf{t : |Mt | ≥ K}, the first time |Mt | is larger than or equal to K. If we let
MtK = Mt∧SK , where t ∧ Sk = min(t, SK ), then one can show M K is a martingale bounded
                                                   Rt
in absolute value by K. So we can define JtK = 0 Hs dMtK for every t, using the paragraph
above to handle the wider class of H’s, if necessary. Again, one can show that if t ≤ SK1 and
t ≤ SK2 , then the value of the stochastic integral will be the same no matter whether we use
M K1 or M K2 as our martingale. We use the common value as a definition of the stochastic
integral Jt . We have SK → ∞ as K → ∞, so we have a definition of Jt for each t.

                                               58
Note 8. We only outline how the proof goes. To show
                                Z t              Z t
                                      Hs dNs =         Hs Ks dWs ,                      (12.8)
                                  0               0

one shows that (SEC.801) holds for Hs simple and then takes limits. To show this, it suffices
to look at Hs elementary and use linearity. To show (12.8) for Hs elementary, first prove this
in the case when Ks is elementary, use linearity to extend it to the case when K is simple, and
then take limits to obtain it for arbitrary K. Thus one reduces the proof to showing (12.8)
when both H and K are elementary. In this situation, one can explicitly write out both sides
of the equation and see that they are equal.




                                              59
13. Ito’s formula.
        Suppose Wt is a Brownian motion and f : R → R is a C 2 function, that is, f and its
first two derivatives are continuous. Ito’s formula, which is sometime known as the change
of variables formula, says that
                                            Z t                                    Z t
                                                         0
                   f (Wt ) − f (W0 ) =                  f (Ws )dWs + 12                     f 00 (Ws )ds.
                                                0                                      0

      Compare this with the fundamental theorem of calculus:
                                                                  Z t
                                     f (t) − f (0) =                    f 0 (s)ds.
                                                                   0

In Ito’s formula we have a second order term to carry along.
        The idea behind the proof is quite simple. By Taylor’s theorem.
                                      n−1
                                      X
               f (Wt ) − f (W0 ) =          [f (W(i+1)t/n ) − f (Wit/n )]
                                      i=0
                                      n−1
                                      X
                                 ≈          f 0 (Wit/n )(W(i+1)t/n − Wit/n )
                                      i=1
                                                 n−1
                                                 X
                                        + 21                 f 00 (Wit/n )(W(i+1)t/n − Wit/n )2 .
                                                    i=0

The first sum on the right is approximately the stochastic integral and the second is
approximately the quadratic variation.
      For a more general semimartingale Xt = Mt + At , Ito’s formula reads
Theorem 13.1. If f ∈ C 2 , then
                                        Z t                                  Z t
                                                    0
                 f (Xt ) − f (X0 ) =            f (Xs )dXs + 21                      f 00 (Xs )dhM is .
                                            0                                  0


       Let us look at an example. Let Wt be Brownian motion, Xt = σWt − σ 2 t/2, and
f (x) = ex . Then hXit = hσW it = σ 2 t, f 0 (x) = f ”(x) = ex , and
                                                Z t                            Z t
                      σWt −σ 2 t/2                           Xs
                     e               =1+               e          σdWs − 12                eXs 12 σ 2 ds    (13.1)
                                                    0                              0
                                                      Z t
                                       + 12    eXs σ 2 ds
                                             0
                                         Z t
                                     =1+     eXs σdWs .
                                                    0

                                                             60
This example will be revisited many times later on.
       Let us give another example of the use of Ito’s formula. Let Xt = Wt and let
f (x) = xk . Then f 0 (x) = kxk−1 and f 00 (x) = k(k − 1)xk−2 . We then have
                                 Z t                 Z t
                    k        k          k−1
                 Wt = W0 +           kWs dWs + 2   1
                                                          k(k − 1)Wsk−2 dhW is
                                  0                   0
                          Z t                         Z t
                                             k(k − 1)
                       =       kWsk−1 dWs +                Wsk−2 ds.
                           0                    2       0
                            3
                                  Rt
When k = 3, this says Wt − 3 0 Ws ds is a stochastic integral with respect to a Brownian
motion, and hence a martingale.
       For a semimartingale Xt = Mt +At we set hXit = hM it . Given two semimartingales
X, Y , we define
                         hX, Y it = 12 [hX + Y it − hXit − hY it ].

       The following is known as Ito’s product formula. It may also be viewed as an
integration by parts formula.
Proposition 13.2. If Xt and Yt are semimartingales,
                                 Z t          Z t
                 Xt Yt = X0 Y0 +     Xs dYs +     Ys dXs + hX, Y it .
                                       0                 0

Proof. Applying Ito’s formula with f (x) = x2 to Xt + Yt , we obtain
                                       Z t
                   2             2
         (Xt + Yt ) = (X0 + Y0 ) + 2       (Xs + Ys )(dXs + dYs ) + hX + Y it .
                                           0
                                       2
Applying Ito’s formula with f (x) = x to X and to Y , then
                                         Z t
                               2     2
                            Xt = X0 + 2      Xs dXs + hXit
                                                0
and                                            Z t
                               Yt2 = Y02 + 2         Ys dYs + hY it .
                                                0
Then some algebra and the fact that
                             Xt Yt = 21 [(Xt + Yt )2 − Xt2 − Yt2 ]
yields the formula.

       There is a multidimensional version of Ito’s formula: if Xt = (Xt1 , . . . , Xtd ) is a
vector, each component of which is a semimartingale, and f ∈ C 2 , then
                               d Z t                     d Z t 2
                              X      ∂f         i   1
                                                       X      ∂ f          i   j
          f (Xt ) − f (X0 ) =            (Xs )dXs + 2            2 (Xs )dhX , X is .
                              i=1 0
                                     ∂xi              i,j=1 0
                                                              ∂x i

       The following application of Ito’s formula, known as Lévy’s theorem, is important.

                                               61
Theorem 13.3. Suppose Mt is a continuous martingale with hM it = t. Then Mt is a
Brownian motion.
Before proving this, recall from undergraduate probability that the moment generating
function of a r.v. X is defined by mX (a) = E eaX and that if two random variables have
the same moment generating function, they have the same law. This is also true if we
replace a by iu. In this case we have ϕX (u) = E eiuX and ϕX is called the characteristic
function of X. The reason for looking at the characteristic function is that ϕX always
exists, whereas mX (a) might be infinite. The one special case we will need is that if X is
                                                               2
a normal r.v. with mean 0 and variance t, then ϕX (u) = e−u t/2 . This follows from the
formula for mX (a) with a replaced by iu (this can be justified rigorously).
Proof. We will prove that Mt is a N (0, t); for the remainder of the proof see Note 1.
      We apply Ito’s formula with f (x) = eiux . Then
                            Z t                    Z t
                 iuMt              iuMs
                e      =1+      iue     dMs + 2  1
                                                       (−u2 )eiuMs dhM is .
                                0                    0

Taking expectations and using hM is = s and the fact that a stochastic integral is a
martingale, hence has 0 expectation, we have
                                           u2 t iuMs
                                             Z
                                iuMt
                             Ee      =1−        e    ds.
                                            2 0
Let J(t) = E eiuMt . The equation can be rewritten
                                           u2 t
                                              Z
                                J(t) = 1 −       J(s)ds.
                                           2 0
So J 0 (t) = − 12 u2 J(t) with J(0) = 1. The solution to this elementary ODE is J(t) =
   2
e−u t/2 . Since
                                                  2
                                     E eiuMt = e−u t/2 ,
then by our remarks above the law of Mt must be that of a N (0, t), which shows that Mt
is a mean 0 variance t normal r.v.

Note 1. If A ∈ Fs and we do the same argument with Mt replaced by Ms+t − Ms , we have
                        Z t                          Z t
      iu(Ms+t −Ms )            iu(Ms+r −Ms )
     e              =1+     iue                    1
                                             dMr + 2     (−u2 )eiu(Ms+r −Ms ) dhM ir .
                            0                              0

Multiply this by 1A and take expectations. Since a stochastic integral is a martingale, the
stochastic integral term again has expectation 0. If we let K(t) = E [eiu(Mt+s −Mt ) ; A], we
now arrive at K 0 (t) = − 21 u2 K(t) with K(0) = P(A), so
                                                    2
                                    K(t) = P(A)e−u t/2 .

                                             62
Therefore                h                  i
                        E eiu(Mt+s −Ms ) ; A = E eiu(Mt+s −Ms ) P(A).                   (13.2)

If f is a nice function and fb is its Fourier transform, replace u in the above by −u, multiply
by fb(u), and integrate over u. (To do the integral, we approximate the integral by a Riemann
sum and then take limits.) We then have

                      E [f (Ms+t − Ms ); A] = E [f ((Ms+t − Ms )]P(A).

By taking limits we have this for f = 1B , so

                     P(Ms+t − Ms ∈ B, A) = P(Ms+t − Ms ∈ B)P(A).

This implies that Ms+t − Ms is independent of Fs .
       Note Var (Mt − Ms ) = t − s; take A = Ω in (13.2).




                                                63
14. The Girsanov theorem.
     Suppose P is a probability and

                                   dXt = dWt + µ(Xt )dt,

where Wt is a Brownian motion. This is short hand for
                                                   Z t
                              Xt = X0 + Wt +             µ(Xs )ds.                   (14.1)
                                                    0

Let                                 Z t                  Z t
                                                                          
                     Mt = exp −           µ(Xs )dWs −          µ(Xs )2 ds/2 .        (14.2)
                                     0                     0

Then as we have seen before, by Ito’s formula, Mt is a martingale. This calculation is
reviewed in Note 1. We also observe that M0 = 1.
      Now let us define a new probability by setting

                                     Q(A) = E [Mt ; A]                               (14.3)

if A ∈ Ft . We had better be sure this Q is well defined. If A ∈ Fs ⊂ Ft , then E [Mt ; A] =
E [Ms ; A] because Mt is a martingale. We also check that Q(Ω) = E [Mt ; Ω] = E Mt . This
is equal to E M0 = 1, since Mt is a martingale.

       What the Girsanov theorem says is

Theorem 14.1. Under Q, Xt is a Brownian motion.

       Under P, Wt is a Brownian motion and Xt is not. Under Q, the process Wt is no
longer a Brownian motion.
       In order for a process Xt to be a Brownian motion, we need at a minimum that Xt
is mean zero and variance t. To define mean and variance, we need a probability. Therefore
a process might be a Brownian motion with respect to one probability and not another.
Most of the other parts of the definition of being a Brownian motion also depend on the
probability.
       Similarly, to be a martingale, we need conditional expectations, and the conditional
expectation of a random variable depends on what probability is being used.
       There is a more general version of the Girsanov theorem.

Theorem 14.2. If Xt is a martingale under P, then under Q the process Xt − Dt is a
martingale where
                                   Z t
                                       1
                             Dt =        dhX, M is .
                                    0 Ms

                                              64
hXit is the same under both P and Q.
        Let us see how Theorem 14.1 can be used. Let St be the stock price, and suppose

                                   dSt = σSt dWt + mSt dt.

(So in the above formulation, µ(x) = m for all x.) Define
                                                           2      2
                               Mt = e(−m/σ)(Wt )−(m /2σ )t .

Then from (13.1) Mt is a martingale and
                                      Z t
                                             m
                            Mt = 1 +       −    Ms dWs .
                                        0    σ
Let Xt = Wt . Then
                                   Z t                         Z t
                                              m                           m
                      hX, M it =            −    Ms ds = −            Ms     ds.
                                    0         σ                   0        σ
Therefore               Z t                       Z t
                           1                             m
                              dhX, M is = −                ds = −(m/σ)t.
                         0 Ms                          0 σ

Define Q by (14.3). By Theorem 14.2, under Q the process W  ft = Wt + (m/σ)t is a
martingale. Hence
                      dSt = σSt (dWt + (m/σ)dt) = σSt dW
                                                       ft ,

or                                               Z t
                                   St = S0 +            σSs dW
                                                             fs
                                                   0
is a martingale. So we have found a probability under which the asset price is a martingale.
This means that Q is the risk-neutral probability, which we have been calling P.
        Let us give another example of the use of the Girsanov theorem. Suppose Xt =
Wt + µt, where µ is a constant. We want to compute the probability that Xt exceeds the
level a by time t0 .
        We first need the probability that a Brownian motion crosses a level a by time t0 .
If At = sups≤t Wt , (note we are not looking at |Wt |), we have
                                                          Z d
                          P(At > a, c ≤ Wt ≤ d) =               ϕ(t, a, x),          (14.4)
                                                           c

where                                   (          2
                                            √ 1 e−x /2t               x≥a
                                             2πt
                        ϕ(t, a, x) =                    2
                                            √ 1 e−(2a−x) /2t          x < a.
                                             2πt

                                                 65
This is called the reflection principle, and the name is due to the derivation, given in Note
2. Sometimes one says

                      P(Wt = x, At > a) = P(Wt = 2a − x),                   x < a,

but this is not precise because Wt is a continuous random variable and both sides of the
above equation are zero; (14.4) is the rigorous version of the reflection principle.
                                                                                     2
       Now let Wt be a Brownian motion under P. Let dQ/dP = Mt = eµWt −µ t/2 . Let
Yt = Wt − µt. Theorem 14.1 says that under Q, Yt is a Brownian motion. We have
Wt = Yt + µt.
       Let A = (sups≤t0 Ws ≥ a). We want to calculate

                                      P(sup (Ws + µs) ≥ a).
                                          s≤t0


Wt is a Brownian motion under P while Yt is a Brownian motion under Q. So this proba-
bility is equal to
                               Q(sup (Ys + µs) ≥ a).
                                           s≤t0

This in turn is equal to
                                     Q(sup Ws ≥ a) = Q(A).
                                          s≤t0

       Now we use the expression for Mt :
                              2
     Q(A) = E P [eµWt0 −µ t0 /2 ; A]
            Z ∞
                        2
          =       eµx−µ t0 /2 P(sup Ws ≥ a, Wt0 = x)dx
                −∞                 s≤t0
                           hZ a                                       Z ∞
               −µ2 t0 /2           1               2                             1          2
                                                                                                     i
           =e                   √      eµx e−(2a−x) /2t0 dx +               √        eµx e−x /2t0 dx.
                             −∞   2πt0                                 a        2πt0

Proof of Theorem 14.1. Using Ito’s formula with f (x) = ex ,
                                                  Z t
                                   Mt = 1 −             µ(Xr )Mr dWr .
                                                   0

So                                                     Z t
                                  hW, M it = −               µ(Xr )Mr dr.
                                                        0

       Since Q(A) = E P [Mt ; A], it is not hard to see that

                                   E Q [Wt ; A] = E P [Mt Wt ; A].

                                                       66
By Ito’s product formula this is
                      hZ t                i         hZ t                i     h            i
                 EP          Mr dWr ; A + E P                 Wr dMr ; A + E P hW, M it ; A .
                        0                             0

      Rt             Rt
Since 0 Mr dWr and 0 Wr dMr are stochastic integrals with respect to martingales, they
are themselves martingales. Thus the above is equal to
                      hZ s                i         hZ s                      i           h              i
                 EP          Mr dWr ; A + E P                  Wr dMr ; A + E P hW, M it ; A .
                        0                             0

Using the product formula again, this is

 E P [Ms Ws ; A] + E P [hW, M it − hW, M is ; A] = E Q [Ws ; A] + E P [hW, M it − hW, M is ; A].

The last term on the right is equal to
      hZ t                  i       h     Z t                       i              h     Z t                               i
 EP          dhW, M ir ; A = E P −              Mr µ(Xr )dr; A = E P −                         E P [Mt | Fr ]µ(Xr )dr; A
        s                                  s                                              s
                                    h     Z t                       i              h     Z t                 i
                                = EP −          Mt µ(Xr )dr; A = E Q −       µ(Xr )dr; A
                                           s                               s
                                         hZ t               i      hZ s             i
                                = −E Q          µ(Xr ) dr; A + E Q      µ(Xr ) dr; A .
                                           0                                      0

Therefore                          Z t                                            Z s
                        h                             i            h                               i
                      E Q Wt +           µ(Xr )dr; A = E Q Ws +                         µ(Xr )dr; A ,
                                    0                                              0

which shows Xt is a martingale with respect to Q.
      Similarly, Xt2 − t is a martingale with respect to Q. By Lévy’s theorem, Xt is a
Brownian motion.

        In Note 3 we give a proof of Theorem 14.2 and in Note 4 we show how Theorem
14.1 is really a special case of Theorem 14.2.

Note 1. Let                               Z t                          Z t
                                 Yt = −         µ(Xs )dWs − 21               [µ(Xs )]2 ds.
                                           0                            0

We apply Ito’s formula with the function f (x) = ex . Note the martingale part of Yt is the
stochastic integral term and the quadratic variation of Y is the quadratic variation of the
martingale part, so                      Z                t
                                           hY it =            [−µ(Xs )]2 ds.
                                                      0

                                                              67
Then f 0 (x) = ex , f 00 (x) = ex , and hence
                                              Z t               Z t
                                 Yt       Y0        Ys
                          Mt = e = e +             e dYs + 2  1
                                                                     eYs dhY is
                                                 0                0
                                     Z t                          Z t
                              =1+         Ms (−µ(Xs )dWs − 2    1
                                                                      [µ(Xs )]2 ds
                                       0                            0
                                         Z t
                                   + 21      Ms [−µ(Xs )]2 ds
                                          0
                                     Z t
                              =1−         Ms µ(Xs )dWs .
                                      0

Since stochastic integrals with respect to a Brownian motion are martingales, this completes
the argument that Mt is a martingale.
Note 2. Let Sn be a simple random walk. This means that X1 , X2 , . . . , are independent
and identically distributed random variables with P(Xi = 1) = P(Xi = −1) = 21 ; let Sn =
Pn
  i=1 Xi . If you are playing a game where you toss a fair coin and win $1 if it comes up heads
and lose $1 if it comes up tails, then Sn will be your fortune at time n. Let An = max0≤k≤n Sk .
We will show the analogue of (14.4) for Sn , which is
                                                
                                                   P(Sn = x)          x≥a
                        P(Sn = x, An ≥ a) =                                              (14.5)
                                                   P(Sn = 2a − x) x < a.
(14.4) can be derived from this using a weak convergence argument.
        To establish (14.5), note that if x ≥ a and Sn = x, then automatically An ≥ a, so
the only case to consider is when x < a. Any path that crosses a but is at level x at time n
has a corresponding path determined by reflecting across level a at the first time the Brownian
motion hits a; the reflected path will end up at a + (a − x) = 2a − x. The probability on the
left hand side of (14.5) is the number of paths that hit a and end up at x divided by the total
number of paths. Since the number of paths that hit a and end up at x is equal to the number
of paths that end up at 2a − x, then the probability on the left is equal to the number of paths
that end up at 2a − x divided by the total number of paths; this is P(Sn = 2a − x), which is
the right hand side.
Note 3. To prove Theorem 14.2, we proceed as follows. Assume without loss of generality
that X0 = 0. Then if A ∈ Fs ,
         E Q [Xt ; A] = E P [Mt Xt ; A]
                            hZ t           i      hZ t           i
                      = EP       Mr dXr ; A + E P      Xr dMr ; A + E P [hX, M it ; A]
                              0                     0
                            hZ s           i      hZ s           i
                      = EP       Mr dXr ; A + E P      Xr dMr ; A + E P [hX, M it ; A]
                                0                          0
                      = E Q [Xs ; A] + E Q [hX, M it − hX, M is ; A].

                                                    68
Here we used the fact that stochastic integrals with respect to the martingales X and M are
again martingales.
       On the other hand,
                                                      hZ t                    i
                E P [hX, M it − hX, M is ; A] = E P          dhX, M ir ; A
                                                        s
                                                      hZ t                i
                                             = EP            Mr dDr ; A
                                                        s
                                                      hZ t                            i
                                             = EP            E P [Mt | Fr ] dDr ; A
                                                        s
                                                      hZ t                i
                                             = EP            Mt dDr ; A
                                                        s
                                             = E P [(Dt − Ds )Mt ; A]
                                             = E Q [Dt − Ds ; A].

      The proof of the quadratic variation assertion is similar.


Note 4. Here is an argument showing how Theorem 14.1 can also be derived from Theorem
14.2.
       From our formula for M we have dMt = −Mt µ(Xt )dWt , and therefore dhX, M it =
−Mt µ(Xt )dt. Hence by Theorem 14.2 we see that under Q, Xt is a continuous martingale
with hXit = t. By Lévy’s theorem, this means that X is a Brownian motion under Q.




                                              69
15. Stochastic differential equations.
       Let Wt be a Brownian motion. We are interested in the existence and uniqueness
for stochastic differential equations (SDEs) of the form

                            dXt = σ(Xt ) dWt + b(Xt ) dt,              X0 = x0 .                    (15.1)

This means Xt satisfies
                                           Z t                  Z t
                             Xt = x0 +           σ(Xs ) dWs +         b(Xs ) ds.                    (15.2)
                                            0                    0

Here Wt is a Brownian motion, and (15.2) holds for almost every ω.
      We have to make some assumptions on σ and b. We assume they are Lipschitz,
which means:
                 |σ(x) − σ(y)| ≤ c|x − y|,    |b(x) − b(y)| ≤ c|x − y|

for some constant c. We also suppose that σ and b grow at most linearly, which means:

                            |σ(x)| ≤ c(1 + |x|),          |b(x)| ≤ c(1 + |x|).

Theorem 15.1. There exists one and only one solution to (15.2).
        The idea of the proof is Picard iteration, which is how existence and uniqueness for
ordinary differential equations is proved; see Note 1.
        The intuition behind (15.1) is that Xt behaves locally like a multiple of Brownian
motion plus a constant drift: locally Xt+h − Xt ≈ σ(Wt+h − Wt ) + b((t + h) − t). However
the constants σ and b depend on the current value of Xt . When Xt is at different points,
the coefficients vary, which is why they are written σ(Xt ) and b(Xt ). σ is sometimes called
the diffusion coefficient and µ is sometimes called the drift coefficient.
        The above theorem also works in higher dimensions. We want to solve
                               d
                               X
                      dXti =         σij (Xs )dWsj + bi (Xs )ds,           i = 1, . . . , d.
                               j=1

This is an abbreviation for the equation
                                           d
                                        Z tX                         Z t
                          Xti = xi0 +             σij (Xs )dWsj +          bi (Xs )ds.
                                          0 j=1                       0


Here the initial value is x0 = (x10 , . . . , xd0 ), the solution process is Xt = (Xt1 , . . . , Xtd ), and
Wt1 , . . . , Wtd are d independent Brownian motions. If all of the σij and bi are Lipschitz
and grow at most linearly, we have existence and uniqueness for the solution.

                                                     70
       Suppose one wants to solve

                                     dZt = aZt dWt + bZt dt.

Note that this equation is linear in Zt , and it turns out that linear equations are almost
the only ones that have an explicit solution. In this case we can write down the explicit
solution and then verify that it satisfies the SDE. The uniqueness result above (Theorem
15.1) shows that we have in fact found the solution.
       Let
                                                   2
                                   Zt = Z0 eaWt −a t/2+bt .

We will verify that this is correct by using Ito’s formula. Let Xt = aWt − a2 t/2 + bt. Then
Xt is a semimartingale with martingale part aWt and hXit = a2 t. Zt = eXt . By Ito’s
formula with f (x) = ex ,
                                 Z t                            Z t
                                         Xs
                     Zt = Z0 +           e       dXs + 12             eXs a2 ds
                                     0                           0
                                 Z t                        Z t                   Z t
                                                   a2
                        = Z0 +     aZs dWs −          Zs ds +                             bZs ds
                                0                0 2                                  0
                                     Z t
                                +2 1
                                         a2 Zs ds
                                      0
                          Z t            Z t
                        =     aZs dWs +      bZs ds.
                            0                          0

This is the integrated form of the equation we wanted to solve.
       There is a connection between SDEs and partial differential equations. Let f be a
 2
C function. If we apply Ito’s formula,
                                         Z t                              Z t
                                                   0
                  f (Xt ) = f (X0 ) +            f (Xs )dXs + 21                f 00 (Xs )dhXis .
                                             0                             0
                                Rt
From (15.2) we know hXit =      0
                                     σ(Xs )2 ds. If we substitute for dXs and dhXis , we obtain
                                         Z t                            Z t
                                                   0
                  f (Xt ) = f (X0 ) +       f (Xs )dWs +      µ(Xs )ds
                                       0                    0
                                   Z t
                               +21
                                       f 00 (Xs )σ(Xs )2 ds
                                    0
                                             Z t               Z t
                                                  0
                               = f (X0 ) +       f (Xs )dWs +      Lf (Xs )ds,
                                                       0                          0

where we write
                            Lf (x) = 21 σ(x)2 f 00 (x) + µ(x)f 0 (x).

                                                           71
L is an example of a differential operator. Since the stochastic integral with respect to a
Brownian motion is a martingale, we see from the above that
                                                            Z t
                               f (Xt ) − f (X0 ) −                Lf (Xs )ds
                                                             0

is a martingale. This fact can be exploited to derive results about PDEs from SDEs and
vice versa.

Note 1. Let us illustrate the uniqueness part, and for simplicity, assume b is identically 0 and
σ is bounded.

Proof of uniqueness. If X and Y are two solutions,
                                           Z t
                              Xt − Yt =          [σ(Xs ) − σ(Ys )]dWs .
                                            0

So                               Z t                                     Z t
                          2                                      2
              E |Xt − Yt | = E         |σ(Xs ) − σ(Ys )| ds ≤ c                E |Xs − Ys |2 ds,
                                  0                                       0

using the Lipschitz hypothesis on σ. If we let g(t) = E |Xt − Yt |2 , we have
                                                   Z t
                                        g(t) ≤ c            g(s) ds.
                                                    0

                                              Rt
Since we are assuming σ is bounded, E Xt2 = E 0 (σ(Xs ))2 ds ≤ ct and similarly for E Yt2 , so
g(t) ≤ ct. Then
                                       Z th Z s        i
                              g(t) ≤ c     c    g(r) dr ds.
                                            0           0

Iteration implies
                                          g(t) ≤ Atn /n!

for each n, which implies g must be 0.




                                                   72
16. Continuous time financial models.
       The most common model by far in finance is one where the security price is based
on a Brownian motion. One does not want to say the price is some multiple of Brownian
motion for two reasons. First, of all, a Brownian motion can become negative, which
doesn’t make sense for stock prices. Second, if one invests $1,000 in a stock selling for $1
and it goes up to $2, one has the same profit, namely, $1,000, as if one invests $1,000 in a
stock selling for $100 and it goes up to $200. It is the proportional increase one wants.
       Therefore one sets ∆St /St to be the quantity related to a Brownian motion. Differ-
ent stocks have different volatilities σ (consider a high-tech stock versus a pharmaceutical).
In addition, one expects a mean rate of return µ on one’s investment that is positive (oth-
erwise, why not just put the money in the bank?). In fact, one expects the mean rate
of return to be higher than the risk-free interest rate r because one expects something in
return for undertaking risk.
       So the model that is used is to let the stock price be modeled by the SDE

                                      dSt /St = σdWt + µdt,

or what looks better,
                                      dSt = σSt dWt + µSt dt.                          (16.1)

       Fortunately this SDE is one of those that can be solved explicitly, and in fact we
gave the solution in Section 15.

Proposition 16.1. The solution to (16.1) is given by
                                                           2
                                   St = S0 eσWt +(µ−(σ /2)t) .                         (16.2)


Proof. Using Theorem 15.1 there will only be one solution, so we need to verify that St
as given in (16.2) satisfies (16.1). We already did this, but it is important enough that we
will do it again. Let us first assume S0 = 1. Let Xt = σWt + (µ − (σ 2 /2)t, let f (x) = ex ,
and apply Ito’s formula. We obtain
                                            Z t                   Z t
                             Xt       X0          Xs
                        St = e=e +          e          dXs + 21  eXs dhXis
                                          0                  0
                              Z t              Z t
                          =1+     Ss σdWs +         Ss (µ − 21 σ 2 )ds
                               0                 0
                                      Z t
                                 + 12     Ss σ 2 ds
                                       0
                              Z t              Z t
                          =1+     Ss σdWs +         Ss µds,
                                  0                    0

                                                  73
which is (16.1). If S0 6= 0, just multiply both sides by S0 .

        Suppose for the moment that the interest rate r is 0. If one purchases ∆0 shares
(possibly a negative number) at time t0 , then changes the investment to ∆1 shares at time
t1 , then changes the investment to ∆2 at time t2 , etc., then one’s wealth at time t will be
               Xt0 + ∆0 (St1 − St0 ) + ∆1 (St2 − St1 ) + · · · + ∆i (Sti+1 − Sti ).   (16.3)
To see this, at time t0 one has the original wealth Xt0 . One buys ∆0 shares and the cost
is ∆0 St0 . At time t1 one sells the ∆0 shares for the price of St1 per share, and so one’s
wealth is now Xt0 + ∆0 (St1 − St0 ). One now pays ∆1 St1 for ∆1 shares at time t1 and
continues. The right hand side of (16.3) is the same as
                                           Z t
                                     Xt0 +     ∆(s)dSs ,
                                               t0
where we have t ≥ ti+1 and ∆(s) = ∆i for ti ≤ s < ti+1 . In other words, our wealth is
given by a stochastic integral with respect to the stock price. The requirement that the
integrand of a stochastic integral be adapted is very natural: we cannot base the number
of shares we own at time s on information that will not be available until the future.
       How should we modify this when the interest rate r is not zero? Let Pt be the
present value of the stock price. So
                                          Pt = e−rt St .
Note that P0 = S0 . When we hold ∆i shares of stock from ti to ti+1 , our profit in present
days dollars will be
                                  ∆i (Pti+1 − Pti ).
The formula for our wealth then becomes
                                              Z t
                                      Xt0 +         ∆(s)dPs .
                                               t0
By Ito’s product formula,
                        dPt = e−rt dSt − re−rt St dt
                             = e−rt σSt dWt + e−rt µSt dt − re−rt St dt
                             = σPt dWt + (µ − r)Pt dt.
Similarly to (16.2), the solution to this SDE is
                                                           2
                                  Pt = P0 eσWt +(µ−r−σ /2)t .                         (16.4)
       The continuous time model of finance is that the security price is given by (16.1)
(often called geometric Brownian motion), that there are no transaction costs, but one can
trade as many shares as one wants and vary the amount held in a continuous fashion. This
clearly is not the way the market actually works, for example, stock prices are discrete,
but this model has proved to be a very good one.

                                               74
17. Markov properties of Brownian motion.
       Let Wt be a Brownian motion. Because Wt+r − Wt is independent of σ(Ws : s ≤ t),
then knowing the path of W up to time s gives no help in predicting Wt+r − Wt . In
particular, if we want to predict Wt+r and we know Wt , then knowing the path up to time
t gives no additional advantage in predicting Wt+r . Phrased another way, this says that
to predict the future, we only need to know where we are and not how we got there.
       Let’s try to give a more precise description of this property, which is known as the
Markov property.
       Fix r and let Zt = Wt+r − Wr . Clearly the map t → Zt is continuous since the
same is true for W . Since Zt − Zs = Wt+r − Ws+r , then the distribution of Zt − Zs is
normal with mean zero and variance (t + r) − (s + r). One can also check the other parts
of the definition to show that Zt is also a Brownian motion.
        Recall that a stopping time in the continuous framework is a r.v. T taking values
in [0, ∞) such that (T ≤ t) ∈ Ft for all t. To make a satisfactory theory, we need that the
Ft be right continuous (see Section 10), but this is fairly technical and we will ignore it.
        If T is a stopping time, FT is the collection of events A such that A ∩ (T > t) ∈ Ft
for all t.
        Let us try to provide some motivation for this definition of FT . It will be simpler to
consider the discrete time case. The analogue of FT in the discrete case is the following:
if N is a stopping time, let

                          FN = {A : A ∩ (N ≤ k) ∈ Fk for all k}.

If Xk is a sequence that is adapted to the σ-fields Fk , that is, Xk is Fk measurable when
k = 0, 1, 2, . . ., then knowing which events in Fk have occurred allows us to calculate Xk
for each k. So a reasonable definition of FN should allow us to calculate XN whenever
we know which events in FN have occurred or not. Or phrased another way, we want XN
to be FN measurable. Where did the sequence Xk come from? It could be any adapted
sequence. Therefore one definition of the σ-field of events occurring before time N might
be:
       Consider the collection of random variables XN where Xk is a sequence adapted
       to Fk . Let GN be the smallest σ-field with respect to which each of these random
       variables XN is measurable.
       In other words, we want GN to be the σ-field generated by the collection of random
variables XN for all sequences Xk that are adapted to Fk .
       We show in Note 1 that FN = GN . The σ-field FN is just a bit easier to work with.
       Now we proceed to the strong Markov property for Brownian motion, the proof of
which is given in Note 2.

                                              75
Proposition 17.1. If Xt is a Brownian motion and T is a bounded stopping time, then
XT +t − XT is a mean 0 variance t random variable and is independent of FT .
       This proposition says: if you want to predict XT +t , you could do it knowing all of
FT or just knowing XT . Since XT +t − XT is independent of FT , the extra information
given in FT does you no good at all.
       We need a way of expressing the Markov and strong Markov properties that will
generalize to other processes.
       Let Wt be a Brownian motion. Consider the process Wtx = x + Wt , which is known
as Brownian motion started at x. Define Ω0 to be set of continuous functions on [0, ∞), let
Xt (ω) = ω(t), and let the σ-field be the one generated by the Xt . Define Px on (Ω0 , F 0 ) by

                Px (Xt1 ∈ A1 , . . . , Xtn ∈ An ) = P(Wtx1 ∈ A1 , . . . , Wtxn ∈ An ).

What we have done is gone from one probability space Ω with many processes Wtx to one
process Xt with many probability measures Px .
        An example in the Markov chain setting might help. No knowledge of Markov chains
is necessary to understand this. Suppose we have a Markov chain with 3 states, A, B, and
C. Suppose we have a probability P and three different Markov chains. The first, called
XnA , represents the position at time n for the chain started at A. So X0A = A, and X1A can
be one of A, B, C, X2A can be one of A, B, C, and so on. Similarly we have XnB , the chain
started at B, and XnC . Define Ω0 = {(AAA), (AAB), (ABA), . . . , (BAA), (BAB), . . .}.
So Ω0 denotes the possible sequence of states for time n = 0, 1, 2. If ω = ABA, set
Y0 (ω) = A, Y1 (ω) = B, Y2 (ω) = A, and similarly for all the other 26 values of ω. Define
PA (AAA) = P(X0A = A, X1A = A, X2A = A). Similarly define PA (AAB), . . .. Define
PB (AAA) = P(X0B = A, X1B = A, X2B = A) (this will be 0 because we know X0B = B),
and similarly for the other values of ω. We also define PC . So we now have one process,
Yn , and three probabilities PA , PB , PC . As you can see, there really isn’t all that much
going on here.
        Here is another formulation of the Markov property.
Proposition 17.2. If s < t and f is bounded or nonnegative, then

                           E x [f (Xt ) | Fs ] = E Xs [f (Xt−s )],    a.s.

The right hand side is to be interpreted as follows. Define ϕ(x) = E x f (Xt−s ). Then
E Xs f (Xt−s ) means ϕ(Xs (ω)). One often writes Pt f (x) for E x f (Xt ). We prove this in
Note 3.
        This formula generalizes: If s < t < u, then

                       E x [f (Xt )g(Xu ) | Fs ] = E Xs [f (Xt−s )g(Xu−s )],

                                                  76
and so on for functions of X at more times.

       Using Proposition 17.1, the statement and proof of Proposition 17.2 can be extended
to stopping times.

Proposition 17.3. If T is a bounded stopping time, then

                              E x [f (XT +t ) | FT ] = E XT [f (Xt )].


      We can also establish the Markov property and strong Markov property in the
context of solutions of stochastic differential equations. If we let Xtx denote the solution
to                                  Z       t          Z           t
                          Xtx = x +             σ(Xsx )dWs +           b(Xsx )ds,
                                        0                      0

so that Xtx is the solution of the SDE started at x, we can define new probabilities by

               Px (Xt1 ∈ A1 , . . . , Xtn ∈ An ) = P(Xtx1 ∈ A1 , . . . , Xtxn ∈ An ).

This is similar to what we did in defining Px for Brownian motion, but here we do not
have translation invariance. One can show that when there is uniqueness for the solution
to the SDE, the family (Px , Xt ) satisfies the Markov and strong Markov property. The
statement is precisely the same as the statement of Proposition 17.3.

Note 1. We want to show GN = FN . Since GN is the smallest σ-field with respect to which
XN is measurable for all adapted sequences Xk and it is easy to see that FN is a σ-field, to
show GN ⊂ FN , it suffices to show that XN is measurable with respect to FN whenever Xk
is adapted. Therefore we need to show that for such a sequence Xk and any real number a,
the event (XN > a) ∈ FN .
       Now (XN > a) ∩ (N = j) = (Xj > a) ∩ (N = j). The event (Xj > a) ∈ Fj
since X is an adapted sequence. Since N is a stopping time, then (N ≤ j) ∈ Fj and
(N ≤ j − 1)c ∈ Fj−1 ⊂ Fj , and so the event (N = j) = (N ≤ j) ∩ (N ≤ j − 1)c is in Fj . If
j ≤ k, then (N = j) ∈ Fj ⊂ Fk . Therefore

                 (XN > a) ∩ (N ≤ k) = ∪kj=0 ((XN > a) ∩ (N = j)) ∈ Fk ,

which proves that (XN > a) ∈ FN .
       To show FN ⊂ GN , we suppose that A ∈ FN . Let Xk = 1A∩(N ≤k) . Since A ∈ FN ,
then A∩(N ≤ k) ∈ Fk , so Xk is Fk measurable. But XN = 1A∩(N ≤N ) = 1A , so A = (XN >
0) ∈ GN . We have thus shown that FN ⊂ GN , and combining with the previous paragraph,
we conclude FN = GN .

                                                    77
Note 2. Let Tn be defined by Tn (ω) = (k + 1)/2n if T (ω) ∈ [k/2n , (k + 1)/2n ). It is easy
to check that Tn is a stopping time. Let f be continuous and A ∈ FT . Then A ∈ FTn as
well. We have
                                      X
           E [f (XTn +t − XTn ); A] =   E [f (X kn +t − X kn ); A ∩ Tn = k/2n ]
                                               2         2
                                      X
                                    =   E [f (X kn +t − X kn )]P(A ∩ Tn = k/2n )
                                                      2          2

                                      = E f (Xt )P(A).
Let n → ∞, so
                            E [f (XT +t − XT ); A] = E f (Xt )P(A).
Taking limits this equation holds for all bounded f .
       If we take A = Ω and f = 1B , we see that XT +t − XT has the same distribution as Xt ,
which is that of a mean 0 variance t normal random variable. If we let A ∈ FT be arbitrary
and f = 1B , we see that
           P(XT +t − XT ∈ B, A) = P(Xt ∈ B)P(A) = P(XT +t − XT ∈ B)P(A),
which implies that XT +t − XT is independent of FT .

Note 3. Before proving Proposition 17.2, recall from undergraduate analysis that every
bounded function is the limit of linear combinations of functions eiux , u ∈ R. This follows
from using the inversion formula for Fourier transforms. There are various slightly different
formulas for the Fourier transform. We use fb(u) = eiux f (x) dx. If f is smooth enough and
                                                    R

has compact support, then one can recover f by the formula
                                            Z
                                          1
                                 f (x) =       e−iux fb(u) du.
                                         2π
We can first approximate this improper integral by
                                        Z N
                                      1
                                            e−iux fb(u) du
                                     2π −N
                                                               1
                                                                  R N −iux
by taking N larger and larger. For each N we can approximate 2π    −N
                                                                        e   fb(u) du by using
Riemann sums. Thus we can approximate f (x) by a linear combination of terms of the form
eiuj x . Finally, bounded functions can be approximated by smooth functions with compact
support.
Proof. Let f (x) = eiux . Then
                          E x [eiuXt | Fs ] = eiuXs E x [eiu(Xt −Xs ) | Fs ]
                                                          2
                                           = eiuXs e−u (t−s)/2 .
On the other hand,
                                                                           2
                  ϕ(y) = E y [f (Xt−s )] = E [eiu(Wt−s +y) ] = eiuy e−u (t−s)/2 .
So ϕ(Xs ) = E x [eiuXt | Fs ]. Using linearity and taking limits, we have the lemma for all f .


                                                 78
18. Martingale representation theorem.
        In this section we want to show that every random variable that is Ft measurable
can be written as a stochastic integral of Brownian motion. In the next section we use
this to show that under the model of geometric Brownian motion the market is complete.
This means that no matter what option one comes up with, one can exactly replicate the
result (no matter what the market does) by buying and selling shares of stock.
        In mathematical terms, we let Ft be the σ-field generated by Ws , s ≤ t. From (16.2)
we see that Ft is also the same as the σ-field generated by Ss , s ≤ t, so it doesn’t matter
which one we work with. We want to show that if V is Ft measurable, then there exists
Hs adapted such that                         Z
                                   V = V0 +           Hs dWs ,                            (18.1)

where V0 is a constant.
      Our goal is to prove

Theorem 18.1. If V is Ft measurable and E V 2 < ∞, then there exists a constant c and
                              Rt
an adapted integrand Hs with E 0 Hs2 ds < ∞ such that
                                                Z t
                                    V =c+             Hs dWs .
                                                 0


      Before we prove this, let us explain why this is called a martingale representation
theorem. Suppose Ms is a martingale adapted to Fs , where the Fs are the σ-field generated
by a Brownian motion. Suppose also that E Mt2 < ∞. Set V = Mt . By Theorem 18.1, we
can write                                    Z            t
                                 Mt = V = c +                 Hs dWs .
                                                      0

The stochastic integral is a martingale, so for r ≤ t,

                                          hZ t                      i    Z r
              Mr = E [Mt | Fr ] = c + E          Hs dWs | Fr = c +             Hs dWs .
                                            0                             0

We already knew that stochastic integrals were martingales; what this says is the converse:
every martingale can be represented as a stochastic integral. Don’t forget that we need
E Mt2 < ∞ and Ms adapted to the σ-fields of a Brownian motion.
       In Note 1 we show that if every martingale can be represented as a stochastic
integral, then every random variable V that is Ft measurable can, too, provided E V 2 < ∞.
       There are several proofs of Theorem 18.1. Unfortunately, they are all technical. We
outline one proof here, giving details in the notes. We start with the following, proved in
Note 2.

                                                79
Proposition 18.2. Suppose
                                                     Z t
                                        n
                                    V       = cn +         Hsn dWs ,
                                                      0

cn → c,
                                   E |V n − V |2 → 0,
                                                   Rt
and for each n the process H n is adapted with E 0 (Hsn )2 ds < ∞. Then there exist a
                                      Rt
constant c and an adapted Hs with E 0 Hs2 ds < ∞ so that
                                                 Z t
                                     Vt = c +             Hs dWs .
                                                     0

What this proposition says is that if we can represent a sequence of random variables Vn
and Vn → V , then we can represent V .
       Let R be the collection of random variables that can be represented as stochastic
integrals. By this we mean
                                                                          Z t
                            2
            R = {V : E V < ∞,V is Ft measurable,V = c +                         Hs dWs
                                                                           0
                                                                          Z t
                                    for some adapted H with E                   Hs2 ds < ∞}.
                                                                           0

      Next we show R contains a particular collection of random variables. (The proof is
in Note 3.)
Proposition 18.3. If g is bounded, the random variable g(Wt ) is in R.
       An almost identical proof shows that if f is bounded, then
                                                           Z t
                                f (Wt − Ws ) = c +               Hr dWr
                                                             s

for some c and Hr .
Proposition 18.4. If t0 ≤ t1 ≤ · · · ≤ tn ≤ t and f1 , . . . , fn are bounded functions, then
f1 (Wt1 − Wt0 )f2 (Wt2 − Wt1 ) · · · fn (Wtn − Wtn−1 ) is in R.
      See Note 4 for the proof.
      We now finish the proof of Theorem 18.1. We have shown that a large class of
random variables is contained in R.
Proof of Theorem 18.1. We have shown that random variables of the form

                      f1 (Wt1 − Wt0 )f2 (Wt2 − Wt1 ) · · · fn (Wtn − Wtn−1 )                   (18.2)

                                                 80
are in R. Clearly if Vi ∈ R for i = 1, . . . , m, and ai are constants, then a1 V1 + · · · am Vm is
also in R. Finally, from measure theory we know that if E V 2 < ∞ and V is Ft measurable,
we can find a sequence Vk such that E |Vk − V |2 → 0 and each Vk is a linear combination
of random variables of the form given in (18.2). Now apply Proposition 18.2.


Note 1. Suppose we know that every martingale Ms adapted to Fs with E Mt2 can be
                       Rr
represented as Mr = c+ 0 Hs dWs for some suitable H. If V is Ft measurable with E V 2 < ∞,
let Mr = E [V | Fr ]. We know this is a martingale, so
                                              Z r
                                   Mr = c +       Hs dWs
                                                              0

for suitable H. Applying this with r = t,
                                                                         Z t
                            V = E [V | Ft ] = Mt = c +                            Hs dWs .
                                                                              0


Note 2. We prove Proposition 18.2. By our assumptions,

                                 E |(V n − cn ) − (V m − cm )|2 → 0

as n, m → ∞. So                       Z t                                 2
                                  E           (Hsn − Hsm )dWs                 → 0.
                                          0

From our formulas for stochastic integrals, this means
                                          Z t
                                      E               |Hsn − Hsm |2 ds → 0.
                                              0

This says that Hsn is a Cauchy sequence in the space L2 (with respect to the norm k · k2 given
              R         1/2
                 t
by kY k2 = E 0 Ys2 ds         ). Measure theory tells us that L2 is a complete metric space, so
there exists Hs such that            Z            t
                                      E               |Hsn − Hs |2 ds → 0.
                                              0

In particular Hsn → Hs , and this implies Hs is adapted. Another consequence, due to Fatou’s
                  Rt
lemma, is that E 0 Hs2 ds.
                  Rt
        Let Ut = 0 Hs dWs . Then as above,
                                                              Z t
                             n                         2
                       E |(V − cn ) − Ut | = E                        (Hsn − Hs )2 ds → 0.
                                                                  0

Therefore Ut = V − c, and U has the desired form.

                                                            81
Note 3. Here is the proof of Proposition 18.3. By Ito’s formula with Xs = −iuWs + u2 s/2
and f (x) = ex ,
                               Z t                  Z t
                     Xt             Xs
                    e =1+          e (−iu)dWs +          eXs (u2 /2)ds
                                0                     0
                                       Z t
                                  + 21     eXs (−iu)2 ds
                                        0
                                  Z t
                        = 1 − iu      eXs dWs .
                                          0
                             −u2 t/2
If we multiply both sides by e         , which is a constant and hence adapted, we obtain
                                                     Z t
                                      −iuWt
                                     e      = cu +       Hsu dWs                          (18.3)
                                                            0

for an appropriate constant cu and integrand H u .
         If f is a smooth function (e.g., C ∞ with compact support), then its Fourier transform
fb will also be very nice. So if we multiply (18.3) by fb(u) and integrate over u from −∞ to
∞, we obtain                                      Z             t
                                       f (Wt ) = c +                Hs dWs
                                                            0
for some constant c and some adapted integrand H. (We implicitly used Proposition 18.2,
because we approximate our integral by Riemann sums, and then take a limit.) Now using
Proposition 18.2 we take limits and obtain the proposition.

Note 4. The argument is by induction; let us do the case n = 2 for clarity. So we suppose

                                       V = f (Wt )g(Wu − Wt ).

From Proposition 18.3 we now have that
                            Z t                                                   Z u
              f (Wt ) = c +     Hs dWs ,               g(Wu − Wt ) = d +                   Ks dWs .
                                 0                                                     t

Set H r = Hr if 0 ≤ s < t and 0 otherwise. Set K r = Kr if s ≤ r < t and 0 otherwise. Let
         Rs                       Rs
Xs = c + 0 H r dWr and Ys = d + 0 K r dWr . Then
                                         Z s
                              hX, Y is =     H r K r dr = 0.
                                                   0

Then by the Ito product formula,
                                                  Z s                   Z s
                          Xs Ys = X0 Y0 +               Xr dYr +              Yr dXr
                                                   0                     0
                                             + hX, Y is
                                            Z s
                                     = cd +     [Xr K r + Yr H r ]dWr .
                                              0

                                                       82
If we now take s = u, that is exactly what we wanted. Note that Xr K r + Yr H r is 0 if r > u;
this is needed to do the general induction step.




                                             83
19. Completeness.
       Now let Pt be a geometric Brownian motion. As we mentioned in Section 16, if
Pt = P0 exp(σWt + (µ − r − σ 2 /2)t), then given Pt we can determine Wt and vice versa,
so the σ fields generated by Pt and Wt are the same. Recall Pt satisfies

                              dPt = σPt dWt + (µ − r)Pt dt.

      Define a new probability P by
                             dP
                                = Mt = exp(aWt − a2 t/2).
                             dP
By the Girsanov theorem,
                                      ft = Wt − at
                                      W
is a Brownian motion under P. So
                                    ft + σPt adt + (µ − r)Pt dt.
                         dPt = σPt dW

If we choose a = −(µ − r)/σ, we then have

                                      dPt = σPt dW
                                                 ft .                               (19.1)

Since W
      ft is a Brownian motion under P, then Pt must be a martingale, since it is a
stochastic integral of a Brownian motion. We can rewrite (19.1) as
                                    ft = σ −1 Pt−1 dPt .
                                   dW                                               (19.2)

      Given a Ft measurable variable V , we know by Theorem 18.1 that there exist a
                                               Rt
constant and an adapted process Hs such that E 0 Hs2 ds < ∞ and
                                         Z t
                                 V =c+       Hs d W
                                                  fs .
                                               0

But then using (19.2) we have
                                        Z t
                                V =c+         Hs σ −1 Ps−1 dPs .
                                         0

      We have therefore proved
Theorem 19.1. If Pt is a geometric Brownian motion and V is Ft measurable and square
integrable, then there exist a constant c and an adapted process Ks such that
                                             Z t
                                    V =c+        Ks dPs .
                                                0

Moreover, there is a probability P under which Pt is a martingale.
       The probability P is called the risk-neutral measure. Under P the present day value
of the stock price is a martingale.

                                              84
20. Black-Scholes formula, I.
        We can now derive the formula for the price of any option. Let T ≥ 0 be a fixed
real. If V is FT measurable, we have by Theorem 19.1 that
                                             Z T
                                   V =c+             Ks dPs ,                       (20.1)
                                                0


and under P, the process Ps is a martingale.

Theorem 20.1. The price of V must be E V .

Proof. This is the “no arbitrage” principle again. Suppose the price of the option V at
time 0 is W . Starting with 0 dollars, we can sell the option V for W dollars, and use the
W dollars to buy and trade shares of the stock. In fact, if we use c of those dollars, and
invest according to the strategy of holding Ks shares at time s, then at time T we will
have
                                     erT (W0 − c) + V

dollars. At time T the buyer of our option exercises it and we use V dollars to meet that
obligation. That leaves us a profit of erT (W0 − c) if W0 > c, without any risk. Therefore
W0 must be less than or equal to c. If W0 < c, we just reverse things: we buy the option
instead of sell it, and hold −Ks shares of stock at time s. By the same argument, since
we can’t get a riskless profit, we must have W0 ≥ c, or W0 = c.
       Finally, under P the process Pt is a martingale. So taking expectations in (20.1),
we obtain
                                          E V = c.



      The formula in the statement of Theorem 20.1. is amenable to calculation. Suppose
we have the standard European option, where

               V = e−rt (St − K)+ = (e−rt St − e−rt K)+ = (Pt − e−rt K)+ .

Recall that under P the stock price satisfies

                                      dPt = σPt dW
                                                 ft ,

where W
      ft is a Brownian motion under P. So then

                                                       2
                                              e t −σ t/2 .
                                    Pt = P0 eσW

                                                85
Hence

                          E V = E [(PT − e−rT K)+ ]                                  (20.2)
                                        e T −(σ2 /2)T − e−rT K)+ ].
                              = E [(P eσW0

                                                          2
We know the density of WfT is just (2πT )−1/2 e−y /(2T ) , so we can do some calculations
(see Note 1) and end up with the famous Black-Scholes formula:

                          W0 = xΦ(g(x, T )) − Ke−rT Φ(h(x, T )),
                    Rz      2
where Φ(z) = √12π   −∞
                         e−y /2 dy, x = P0 = S0 ,

                                         log(x/K) + (r + σ 2 /2)T
                            g(x, T ) =             √              ,
                                                  σ T
                                                         √
                                  h(x, T ) = g(x, T ) − σ T .

        It is of considerable interest that the final formula depends on σ but is completely
independent of µ. The reason for that can be explained as follows. Under P the process Pt
satisfies dPt = σPt dW ft , where W
                                  ft is a Brownian motion. Therefore, similarly to formulas
we have already done,
                                       Pt = P0 eσWe t −σ2 t/2 ,

and there is no µ present here. (We used the Girsanov formula to get rid of the µ.) The
price of the option V is
                                   E [PT − e−rT K]+ ,                             (20.3)

which is independent of µ since Pt is.

Note 1. We want to calculate
                                 h                                 i
                                E (xe e T −σ2 T /2
                                     σW               −rT
                                                     −e        +
                                                              K)       ,             (20.4)


where W
      ft is a Brownian motion under P and we write x for P0 = S0 . Since W fT is a normal
                                                               √
random vairable with mean 0 and variance T , we can write it as T Z, where Z is a standard
mean 0 variance 1 normal random variable.
      Now                           √      2
                                xeσ T Z−σ T /2 > e−rT K

if and only if
                                    √
                           log x + σ T Z − σ 2 T /2 > −r + log K,

                                               86
or if
                               Z > (σ 2 T /2) − r + log K − log x.

We write z0 for the right hand side of the above inequality. Recall that 1 − Φ(z) = Φ(−z) for
all z by the symmetry of the normal density. So (20.4) is equal to
                  Z ∞      √      2                     2
            √1
             2π
                      (xeσ T z−σ T /2 − e−rT K)+ e−z /2 dz
                   z0
                           Z ∞                √
                                                                         Z ∞
                                   1    2             2                         2
                                 −        −2σ                    −rT
                       1
                  = x √2π       e 2  (z         T z+σ   T
                                                          dz − Ke    √1
                                                                      2π
                                                                             e−z /2 dz
                            z                                             z0
                           Z 0∞            √ 2
                                   1
                  = x √12π      e− 2 (z−σ T ) dz − Ke−rT (1 − Φ(z0 ))
                            z
                           Z 0∞
                                       −y 2 /2
                  = x √12π       √ e           dy − Ke−rT Φ(−z0 )
                            z0 −σ T
                                      √
                  = x(1 − Φ(z0 − σ T )) − Ke−rT Φ(−z0 )
                           √
                  = xΦ(σ T − z0 ) − Ke−rT Φ(−z0 ).
                                                      √
This is the Black-Scholes formula if we observe that σ T − z0 = g(x, T ) and −z0 = h(x, T ).




                                                87
21. Hedging strategies.
        The previous section allows us to compute the value of any option, but we would also
                                                                                  RT
like to know what the hedging strategy is. This means, if we know V = E V + 0 Hs dSs ,
what should Hs be? This might be important to know if we wanted to duplicate an option
that was not available in the marketplace, or if we worked for a bank and wanted to provide
an option for sale.
        It is not always possible to compute H, but in many cases of interest it is possible.
We illustrate one technique with two examples.
        First, suppose we want to hedge the standard European call V = e−rT (ST − K)+ =
(PT − e−rT K)+ . We are working here with the risk-neutral probability only. It turns out
                                          Rt
it makes no difference: the definition of 0 Hs dXs for a semimartingale X does not depend
on the probability P, other than worrying about some integrability conditions.
        We can rewrite V as
                                      V = E V + g(WfT ),

where
                                             2
                           g(x) = (eσx−σ T /2 − e−rT K)+ − E V.

Therefore the expectation of g(W
                               fT ) is 0. Recall that under P, W
                                                               f is a Brownian motion.
If we write g(W
              fT ) as
                                      Z T
                                          Hs d W
                                               fs ,                             (21.1)
                                             0

then since dPt = σPt dW
                      ft , we have
                                                 Z T
                                                        1
                                g(W
                                  fT ) = c +               Hs dPs .                     (21.2)
                                                  0    σPs

Therefore it suffices to find the representation of the form (21.1).
      Recall from the section on the Markov property that
                                                    Z
                          x                              1 −(y)2 /2t
            Pt f (x) = E f (Wt ) = E f (x + Wt ) =
                             f              f          √     e       f (x + y)dy.
                                                         2πt

              fT ) | Ft ]. By Proposition 4.3, we know that Mt is a martingale. By the
Let Mt = E [g(W
Markov property Proposition 17.2, we see that

                                      W
                                      et
                             Mt = E        [g(W
                                              fT −t ] = PT −t g(W
                                                                ft ).                   (21.3)

      Now let us apply Ito’s formula with the function f (x1 , x2 ) = Px2 g(x1 ) to the process
Xt = (Xt1 , Xt2 ) = (W
                     ft , T − t). So we need to use the multidimensional version of Ito’s
formula. We have dXt1 = dW   ft and dXt2 = −dt. Since Xt2 is a decreasing process and has

                                                 88
no martingale part, then dhX 2 it = 0 and dhX 1 , X 2 it = 0, while dhX 1 it = dt. Ito’s formula
says that
                                               Z tX 2
                     1   2         1     2              ∂f
                f (Xt , Xt ) = f (X0 , X0 ) +              (Xt )dXti
                                                0 i=1 ∂xi
                                       Z t X 2
                                                  ∂2f
                                  +21
                                                         (Xt )dhX i , X j it
                                        0 i,j=1 ∂x i ∂xj
                                   Z t
                                         ∂f
                             =c+             (Xt )dW
                                                   ft + some terms with dt.
                                     0  ∂x 1

But we know that f (Xt ) = PT −t g(W   ft ) = Mt is a martingale, so the sum of the terms
involving dt must be zero; if not, f (Xt ) would have a bounded variation part. We conclude
                                       Z t
                                          ∂
                                Mt =         PT −s g(W
                                                     fs )dW
                                                          fs .
                                        0 ∂x

If we take t = T , we then have
                                             Z T
                                                   ∂
                          g(W
                            fT ) = MT =               PT −s g(W
                                                              fs )dW
                                                                   fs ,
                                              0    ∂x

and we have our representation.

        For a second example, let’s look at the sell-high option. Here the payoff is sups≤T Ss ,
the largest the stock price ever is up to time T . This is FT measurable, so we can compute
its value. How can one get the equivalent outcome without looking into the future?
        For simplicity, let us suppose the interest rate r is 0. Let Nt = sups≤t Ss , the
maximum up to time t. It is not the case that Nt is a Markov process. Intuitively, the
reasoning goes like this: suppose the maximum up to time 1 is $100, and we want to
predict the maximum up to time 2. If the stock price at time 1 is close to $100, then we
have one prediction, while if the stock price at time 1 is close to $2, we would definitely
have another prediction. So the prediction for N2 does not depend just on N1 , but also
the stock price at time 1. This same intuitive reasoning does suggest, however, that the
triple Zt = (St , Nt , t) is a Markov process, and this turns out to be correct. Adding in the
information about the current stock price gives a certain amount of evidence to predict
the future values of Nt ; adding in the history of the stock prices up to time t gives no
additional information.
        Once we believe this, the rest of the argument is very similar to the first example.
                  z
Let Pu f (z) = E f (Zu ), where z = (s, n, t). Let g(Zt ) = Nt − E NT . Then

                                                  Zt
                     Mt = E [g(ZT ) | Ft ] = E         [g(ZT −t )] = PT −t g(Zt ).

                                                  89
We then let f (s, n, t) = PT −t g(s, n, t) and apply Ito’s formula. The process Nt is always
increasing, so has no martingale part, and hence hN it = 0. When we apply Ito’s formula,
we get a dSt term, which is the martingale term, we get some terms involving dt, which are
of bounded variation, and we get a term involving dNt , which is also of bounded variation.
But Mt is a martingale, so all the dt and dNt terms must cancel. Therefore we should be
left with the martingale term, which is
                                Z t
                                   ∂
                                      PT −s g(Ss , Ns , s)dSs ,
                                 0 ∂s

where again g(s, n, t) = n. This gives us our hedging strategy for the sell-high option, and
it can be explicitly calculated.

      There is another way to calculate hedging strategies, using what is known as the
Clark-Haussmann-Ocone formula. This is a more complicated procedure, and most cases
can be done as well by an appropriate use of the Markov property.




                                             90
22. Black-Scholes formula, II.
        Here is a second approach to the Black-Scholes formula. This approach works for
European calls and several other options, but does not work in the generality that the
first approach does. On the other hand, it allows one to compute more easily what the
equivalent strategy of buying or selling stock should be to duplicate the outcome of the
given option. In this section we work with the actual price of the stock instead of the
present value.
       Let Vt be the value of the portfolio and assume Vt = f (St , T − t) for all t, where f
is some function that is sufficiently smooth. We also want VT = (ST − K)+ .
       Recall Ito’s formula. The multivariate version is
                                  d
                               Z tX                                 d
                                                                Z t X
                                                        1
         f (Xt ) = f (X0 ) +           fxi (Xs ) dXsi +                       fxi xj (Xs ) dhX i , X j is .
                               0 i=1                       2    0 i,j=1


Here Xt = (Xt1 , . . . , Xtd ) and fxi denotes the partial derivative of f in the xi direction,
and similarly for the second partial derivatives.
      We apply this with d = 2 and Xt = (St , T − t). From the SDE that St solves,
dhX it = σ 2 St2 dt, hX 2 it = 0 (since T − t is of bounded variation and hence has no
    1

martingale part), and hX 1 , X 2 it = 0. Also, dXt2 = −dt. Then

                  Vt − V0 = f (St , T − t) − f (S0 , T )                                                      (22.1)
                            Z t                             Z t
                          =     fx (Su , T − u) dSu −           fs (Su , T − u) du
                              0                              0
                                     Z t
                               +2 1
                                         σ 2 Su2 fxx (Su , T − u) du.
                                        0

On the other hand, if au and bu are the number of shares of stock and bonds, respectively,
held at time u,                       Z          t Z                 t
                               Vt − V0 =             au dSu +            bu dβu .                             (22.2)
                                             0                   0

This formula says that the increase in net worth is given by the profit we obtain by holding
au shares of stock and bu bonds at time u. Since the value of the portfolio at time t is

                                         Vt = at St + bt βt ,

we must have
                                        bt = (Vt − at St )/βt .                                               (22.3)

Also, recall
                                             βt = β0 ert .                                                    (22.4)

                                                      91
To match up (22.2) with (22.1), we must therefore have

                                         at = fx (St , T − t)                                (22.5)

and
                                                                 1
      r[f (St , T − t) − St fx (St , T − t)] = −fs (St , T − t) + σ 2 St2 fxx (St , T − t)   (22.6)
                                                                 2

for all t and all St . (22.6) leads to the parabolic PDE

                  fs = 12 σ 2 x2 fxx + rxfx − rf,        (x, s) ∈ (0, ∞) × [0, T ),          (22.7)

and
                                       f (x, 0) = (x − K)+ .                                 (22.8)

Solving this equation for f , f (x, T ) is what V0 should be, i.e., the cost of setting up the
equivalent portfolio. Equation (22.5) shows what the trading strategy should be.




                                                  92
23. The fundamental theorem of finance.
       In Section 19, we showed there was a probability measure under which Pt = e−rt St
was a martingale. This is true very generally. Let St be the price of a security in today’s
dollars. We will suppose St is a continuous semimartingale, and can be written St =
M t + At .
       Arbitrage means that there is a trading strategy Hs such that there is no chance that
we lose anything and there is a positive profit with positive probability. Mathematically,
arbitrage exists if there exists Hs that is adapted and satisfies a suitable integrability
condition with                    Z      T
                                             Hs dSs ≥ 0,    a.s.
                                     0
and
                                        Z T               
                                    P            Hs dSs > b > ε
                                             0
for some b, ε > 0. It turns out that to get a necessary and sufficient condition for St to be
a martingale, we need a slightly weaker condition.
       The NFLVR condition (“no free lunch with vanishing risk”) is that there do not
exist a fixed time T , ε, b > 0, and Hn (that are adapted and satisfy the appropriate
integrability conditions) such that
                               Z T
                                                   1
                                   Hn (s) dSs > − ,       a.s.
                                 0                 n
for all t and
                                    Z T                    
                                P             Hn (s) dSs > b > ε.
                                         0
      Here T, b, ε do not depend on n. The condition says that one can with positive
probability ε make a profit of b and with a loss no larger than 1/n.
        Two probabilities P and Q are equivalent if P(A) = 0 if and only Q(A) = 0,
i.e., the two probabilities have the same collection of sets of probability zero. Q is an
equivalent martingale measure if Q is a probability measure, Q is equivalent to P, and St
is a martingale under Q.
Theorem 23.1. If St is a continuous semimartingale and the NFLVR conditions holds,
then there exists an equivalent martingale measure Q.
       The proof is rather technical and involves some heavy-duty measure theory, so we
will only point examine a part of it. Suppose that we happened to have St = Wt + f (t),
where f (t) is a deterministic increasing continuous function. To obtain the equivalent
martingale measure, we would want to let
                                      Rt 0         1 Rt 0
                                    −   f (s)dWs − 2    (f (s))2 ds
                            Mt = e 0                  0             .

                                                   93
In order for Mt to make sense, we need f to be differentiable. A result from measure
theory says that if f is not differentiable, then we can find a subset A of [0, ∞) such
     Rt
that 0 1A (s)ds = 0 but the amount of increase of f over the set A is positive. This last
statement is phrased mathematically by saying
                                           Z t
                                                 1A (s)df (s) > 0,
                                            0

where the integral is a Riemann-Stieltjes (or better, a Lebesgue-Stieltjes) integral. Then
if we hold Hs = 1A (s) shares at time s, our net profit is
                          Z t              Z t                 Z t
                                Hs dSs =         1A (s)dWs +         1A (s) df (s).
                            0               0                   0

The second term would be positive since this is the amount of increase of f over the set
                                 Rt               Rt
A. The first term is 0, since E ( 0 1A (s)dWs )2 = 0 1A (s)2 ds = 0. So our net profit is
nonrandom and positive, or in other words, we have made a net gain without risk. This
contradicts “no arbitrage.” See Note 1 for more on this.

      Sometime Theorem 23.1 is called the first fundamental theorem of asset pricing.
The second fundamental theorem is the following.

Theorem 23.2. The equivalent martingale measure is unique if and only if the market is
complete.

        We will not prove this.

Note 1. We will not prove Theorem 23.1, but let us give a few more indications of what is
going on. First of all, recall the Cantor set. This is where E1 = [0, 1], E2 is the set obtained
from E1 by removing the open interval ( 31 , 23 ), E3 is the set obtained from E2 by removing
the middle third from each of the two intervals making up E2 , and so on. The intersection,
E = ∩∞ n=1 En , is the Cantor set, and is closed, nonempty, in fact uncountable, yet it contains
no intervals. Also, the Lebesgue measure of A is 0. We set A = E. Let f be the Cantor-
Lebesgue function. This is the function that is equal to 0 on (−∞, 0], 1 on [1, ∞), equal to
1                   1 2               1      1 2               3      7 8
2 on the interval [ 3 , 3 ], equal to 4 on [ 9 , 9 ], equal to 4 on [ 9 , 9 ], and is defined similarly on
each interval making up the complement of A. It turns out we can define f on A so that it is
                                  R1
continuous, and one can show 0 1A (s)df (s) = 1. So this A and f provide a concrete example
of what we were discussing.




                                                      94
24. American puts.
       The proper valuation of American puts is one of the important unsolved problems
in mathematical finance. Recall that a European put pays out (K − ST )+ at time T ,
while an American put allows one to exercise early. If one exercises an American put at
time t < T , one receives (K − St )+ . Then during the period [t, T ] one receives interest,
and the amount one has is (K − St )+ er(T −t) . In today’s dollars that is the equivalent of
(K − St )+ e−rt . One wants to find a rule, known as the exercise policy, for when to exercise
the put, and then one wants to see what the value is for that policy. Since one cannot look
into the future, one is in fact looking for a stopping time τ that maximizes

                                     E e−rτ (K − Sτ )+ .

      There is no good theoretical solution to finding the stopping time τ , although good
approximations exist. We will, however, discuss just a bit of the theory of optimal stopping,
which reworks the problem into another form.
      Let Gt denote the amount you will receive at time t. For American puts, we set

                                    Gt = e−rt (K − St )+ .

Our problem is to maximize E Gτ over all stopping times τ .
      We first need
Proposition 24.1. If S and T are bounded stopping times with S ≤ T and M is a
martingale, then
                              E [MT | FS ] = MS .

Proof. Let A ∈ FS . Define U by
                                           
                                               S(ω) if ω ∈ A,
                                 U (ω) =
                                               T (ω) if ω ∈
                                                          / A.

It is easy to see that U is a stopping time, so by Doob’s optional stopping theorem,

                         E M0 = E MU = E [MS ; A] + E [MT ; Ac ].

Also,
                         E M0 = E MT = E [MT ; A] + E [MT ; Ac ].

Taking the difference, E [MT ; A] = E [Ms ; A], which is what we needed to show.

      Given two supermartingales Xt and Yt , it is routine to check that Xt ∧ Yt is also a
supermartingale. Also, if Xtn are supermartingales with Xtn ↓ Xt , one can check that Xt

                                                95
is again a supermartingale. With these facts, one can show that given a process such as
Gt , there is a least supermartingale larger than Gt .
        So we define Wt to be a supermartingale (with respect to P, of course) such that
Wt ≥ Gt a.s for each t and if Yt is another supermartingale with Yt ≥ Gt for all t, then
Wt ≤ Yt for all t. We set τ = inf{t : Wt = Gt }. We will show that τ is the solution to the
problem of finding the optimal stopping time. Of course, computing Wt and τ is another
problem entirely.
        Let
                        Tt = {τ : τ is a stopping time, t ≤ τ ≤ T }.

Let
                                     Vt = sup E [Gτ | Ft ].
                                          τ ∈Tt

Proposition 24.2. Vt is a supermartingale and Vt ≥ Gt for all t.

Proof. The fixed time t is a stopping time in Tt , so Vt ≥ E [Gt | Ft ] = Gt , or Vt ≥ Gt . so
we only need to show that Vt is a supermartingale.
       Suppose s < t. Let π be the stopping time in Tt for which Vt = E [Gπ | Ft ].
π ∈ Tt ⊂ Ts . Then

                     E [Vt | Fs ] = E [Gπ | Fs ] ≤ sup E [Gτ | Fs ] = Vs .
                                                        τ ∈Ts




Proposition 24.3. If Yt is a supermartingale with Yt ≥ Gt for all t, then Yt ≥ Vt .

Proof. If τ ∈ Tt , then since Yt is a supermartingale, we have

                                       E [Yτ | Ft ] ≤ Yt .

So
                        Vt = sup E [Gτ | Ft ] ≤ sup E [Yτ | Ft ] ≤ Yt .
                             τ ∈Tt                     τ ∈Tt




      What we have shown is that Wt is equal to Vt . It remains to show that τ is optimal.
There may in fact be more than one optimal time, but in any case τ is one of them. Recall
we have F0 is the σ-field generated by S0 , and hence consists of only ∅ and Ω.

                                                  96
Proposition 24.4. τ is an optimal stopping time.

Proof. Since F0 is trivial, V0 = supτ ∈T0 E [Gτ | F0 ] = supτ E [Gτ ]. Let σ be a stopping
time where the supremum is attained. Then

                        V0 ≥ E [Vσ | F0 ] = E [Vσ ] ≥ E [Gσ ] = V0 .

Therefore all the inequalities must be equalities. Since Vσ ≥ Gσ , we must have Vσ = Gσ .
Since τ was the first time that Wt equals Gt and Wt = Vt , we see that τ ≤ σ. Then

                             E [Gτ ] = E [Vτ ] ≥ EVσ = E Gσ .

Therefore the expected value of Gτ is as least as large as the expected value of Gσ , and
hence τ is also an optimal stopping time.

      The above representation of the optimal stopping problem may seem rather bizarre.
However, this procedure gives good usable results for some optimal stopping problems. An
example is where Gt is a function of just Wt .




                                            97
25. Term structure.
        We now want to consider the case where the interest rate is nondeterministic, that
is, it has a random component. To do so, we take another look at option pricing.
Accumulation factor. Let r(t) be the (random) interest rate at time t. Let
                                            Rt
                                               r(u)du
                                    β(t) = e 0

be the accumulation factor. One dollar at time T will be worth 1/β(T ) in today’s dollars.
       Let V = (ST − K)+ be the payoff on the standard European call option at time T
with strike price K, where St is the stock price. In today’s dollars it is worth, as we have
seen, V /β(T ). Therefore the price of the option should be
                                           h V i
                                         E         .
                                            β(T )
We can also get an expression for the value of the option at time t. The payoff, in terms
of dollars at time t, should be the payoff at time T discounted by the interest or inflation
rate, and so should be               R   T
                                   −         r(u)du
                                  e     t             (ST − K)+ .
Therefore the value at time t is
           h RT                       i    h β(t)       i        h V        i
             −    r(u)du         +
         E e    t        (ST − K) | Ft = E        V | Ft = β(t)E        | Ft .
                                            β(T )                 β(T )
      From now on we assume we have already changed to the risk-neutral measure and
we write P instead of P.
Zero coupon. A zero coupon bond with maturity date T pays $1 at time T and nothing
before. This is equivalent to an option with payoff value V = 1. So its price at time t, as
above, should be
                                    h 1        i    h RT              i
                                                       −   r(u)du
                   B(t, T ) = β(t)E        | Ft = E e    t        | Ft .
                                     β(T )
      Let’s derive the SDE satisfied by B(t, T ). Let Nt = E [1/β(T ) | Ft ]. This is a
martingale. By the martingale representation theorem,
                                                Z t
                            Nt = E [1/β(T )] +      Hs dWs
                                                           0

for some adapted integrand Hs . So B(t, T ) = β(t)Nt . Here T is fixed. By Ito’s product
formula,
                        dB(t, T ) = β(t)dNt + Nt dβ(t)
                                      = β(t)Ht dWt + Nt r(t)β(t)dt
                                      = β(t)Ht dWt + B(t, T )r(t)dt,

                                                 98
and we thus have
                           dB(t, T ) = β(t)Ht dWt + B(t, T )r(t)dt.                   (25.1)

Forward rates. We now discuss forward rates. If one holds T fixed and graphs B(t, T ) as
a function of t, the graph will not clearly show the behavior of r. One sometimes specifies
interest rates by what are known as forward rates.
       Suppose we want to borrow $1 at time T and repay it with interest at time T + ε.
At the present time we are at time t ≤ T . Let us try to accomplish this by buying a zero
coupon bond with maturity date T and shorting (i.e., selling) N zero coupon bonds with
maturity date T + ε. Our outlay of money at time t is

                                B(t, T ) − N B(t, T + ε) = 0.

If we set
                                  N = B(t, T )/B(t, T + ε),

our outlay at time t is 0. At time T we receive $1. At time T +ε we pay B(t, T )/B(t, T +ε).
The effective rate of interest R over the time period T to T + ε is

                                                B(t, T )
                                       eεR =               .
                                               B(t, T + ε)

Solving for R, we have
                               log B(t, T ) − log B(t, T + ε)
                             R=                               .
                                              ε
We now let ε → 0. We define the forward rate by

                                                  ∂
                                 f (t, T ) = −      log B(t, T ).                     (25.2)
                                                 ∂T

Sometimes interest rates are specified by giving f (t, T ) instead of B(t, T ) or r(t).
Recovering B from f . Let us see how to recover B(t, T ) from f (t, T ). Integrating, we have
               Z T                    Z T
                                       ∂
                     f (t, u)du = −       log B(t, u)du = − log B(t, u) |u=T
                                                                         u=t
                 t                  t  ∂u
                              = − log B(t, T ) + log B(t, t).

Since B(t, t) is the value of a zero coupon bond at time t which expires at time t, it is
equal to 1, and its log is 0. Solving for B(t, T ), we have
                                                     RT
                                                 −        f (t,u)du
                                  B(t, T ) = e        t               .               (25.3)

                                                 99
Recovering r from f . Next, let us show how to recover r(t) from the forward rates. We
have                                     h RT            i
                                           −  r(u)du
                             B(t, T ) = E e t        | Ft .

Differentiating,
                        ∂             h          RT            i
                                               −    r(u)du
                          B(t, T ) = E − r(T )e   t        | Ft .
                       ∂T
Evaluating this when T = t, we obtain

                                  E [−r(t) | Ft ] = −r(t).                      (25.4)

       On the other hand, from (25.3) we have

                            ∂
                                                      RT
                                                    −    f (t,u)du
                              B(t, T ) = −f (t, T )e t             .
                           ∂T

Setting T = t we obtain −f (t, t). Comparing with (25.4) yields

                                       r(t) = f (t, t).                         (25.5)




                                             100
26. Some interest rate models.
Heath-Jarrow-Morton model
       Instead of specifying r, the Heath-Jarrow-Morton model (HJM) specifies the forward
rates:
                              df (t, T ) = σ(t, T )dWt + α(t, T )dt.                (26.1)

       Let us derive the SDE that B(t, T ) satisfies. Let
                                Z T                                        Z T
                    ∗                                           ∗
                  α (t, T ) =         α(t, u)du,            σ (t, T ) =          σ(t, u)du.
                                 t                                          t
                      RT
Since B(t, T ) = exp(− t f (t, u)du), we derive the SDE for B by using Ito’s formula with
                            RT
the function ex and Xt = − t f (t, u)du. We have
                                           Z T
                 dXt = f (t, t)dt −              df (t, u)du
                                            t
                                      Z T
                        = r(t)dt −             [α(t, u)dt + σ(t, u)dWt ] du
                                       t
                                      hZ T                  i       hZ T            i
                        = r(t)dt −               α(t, u)du dt −            σ(t, u)du dWt
                                           t                          t
                                       ∗                    ∗
                        = r(t)dt − α (t, T )dt − σ (t, T )dWt .

Therefore, using Ito’s formula,

                dB(t, T ) = B(t, T )dXt + 21 B(t, T )(σ ∗ (t, T ))2 dt
                                    h                      i
                          = B(t, T ) r(t) − α∗ + 21 (σ ∗ )2 dt − σ ∗ B(t, T )dWt .

       From (25.1) we know the dt term must be B(t, T )r(t)dt, hence

                          dB(t, T ) = B(t, T )r(t)dt − σ ∗ B(t, T )dWt .

Comparing with (26.1), we see that if P is the risk-neutral measure, we have α∗ = 21 (σ ∗ )2 .
See Note 1 for more on this.
Hull and White model
       In this model, the interest rate r is specified as the solution to the SDE

                            dr(t) = σ(t)dWt + (a(t) − b(t)r(t))dt.                            (26.2)

Here σ, a, b are deterministic functions. The stochastic integral term introduces random-
ness, while the a − br term causes a drift toward a(t)/b(t). (Note that if σ(t) = σ, a(t) =
a, b(t) = b are constants and σ = 0, then the solution to (26.2) becomes r(t) = a/b.)

                                                      101
                                                                                                  Rt
       (26.2) is one of those SDE’s that can be solved explicitly. Let K(t) =                     0
                                                                                                       b(u)du.
Then
          h          i                          h               i
         d eK(t) r(t) = eK(t) r(t)b(t)dt + eK(t) a(t) − b(t)r(t) dt + eK(t) [σ(t)dWt ]
                      = eK(t) a(t)dt + eK(t) [σ(t)dWt ].

Integrating both sides,
                                          Z t                          Z t
                   K(t)                         K(u)
                  e       r(t) = r(0) +         e      a(u)du +                 eK(u) σ(u)dWu .
                                           0                            0

Multiplying both sides by e−K(t) , we have the explicit solution
                             h        Z t                Z t              i
                       −K(t)               K(u)
              r(t) = e         r(0) +     e     a(u)du +     eK(u) σ(u)dWu .
                                           0                            0

If F (u) is deterministic, then
                          Z t                        X
                                F (u)dWu = lim           F (ui )(Wui+1 − Wui ).
                           0

From undergraduate probability, linear combinations of Gaussian r.v.’s (Gaussian = nor-
mal) are Gaussian, and also limits of Gaussian r.v.’s are Gaussian, so we conclude that the
    Rt
r.v. 0 F (u)dWu is Gaussian. We see that the mean at time t is
                                                h            Z t                     i
                                       −K(t)                        K(u)
                            E r(t) = e              r(0) +         e        a(u)du .
                                                              0

We know how to calculate the second moment of a stochastic integral, so
                                           Z t
                                    −2K(t)
                        Var r(t) = e           e2K(u) σ(u)2 du.
                                                         0

(One can similarly calculate the covariance of r(s) and r(t).) Limits of linear combinations
                                                                            RT
of Gaussians are Gaussian, so we can calculate the mean and variance of 0 r(t)dt and get
an explicit expression for                       R            T
                                                         −         r(u)du
                                     B(0, T ) = E e           0             .

Cox-Ingersoll-Ross model
       One drawback of the Hull and White model is that since r(t) is Gaussian, it can take
negative values with positive probability, which doesn’t make sense. The Cox-Ingersoll-
Ross model avoids this by modeling r by the SDE
                                                                   p
                                dr(t) = (a − br(t))dt + σ           r(t)dWt .

                                                      102
The difference from the Hull and White model is the square root of r in the stochastic
integral term. This square root term implies that when r(t) is small, the fluctuations in
r(t) are larger than they are in the Hull and White model. Provided a ≥ 21 σ 2 , it can be
shown that r(t) will never hit 0 and will always be positive. Although one cannot solve
for r explicitly, one can calculate the distribution of r. It turns out to be related to the
square of what are known in probability theory as Bessel processes. (The density of r(t),
for example, will be given in terms of Bessel functions.)

Note 1. If P is not the risk-neutral measure, it is still possible that one exists. Let θ(t) be a
                                Rt                Rt
function of t, let Mt = exp(− 0 θ(u)dWu − 21 0 θ(u)2 du) and define P(A) = E [MT ; A] for
A ∈ FT . By the Girsanov theorem,
                                  h
              dB(t, T ) = B(t, T ) r(t) − α∗ + 21 (σ ∗ )2 + σ ∗ θ]dt − σ ∗ B(t, T )dW
                                                                                    ft ,


where W
      ft is a Brownian motion under P. Again, comparing this with (25.1) we must have

                                      α∗ = 12 (σ ∗ )2 + σ ∗ θ.

Differentiating with respect to T , we obtain

                           α(t, T ) = σ(t, T )σ ∗ (t, T ) + σ(t, T )θ(t).

If we try to solve this equation for θ, there is no reason off-hand that θ depends only on t and
not T . However, if θ does not depend on T , P will be the risk-neutral measure.




                                                103
                                         Problems

1. Show E [XE [Y | G] ] = E [Y E [X | G] ].
2. Prove that E [aX1 + bX2 | G] = aE [X1 | G] + bE [X2 | G].
3. Suppose X1 , X2 , . . . , Xn are independent and for each i we have P(Xi = 1)
                                   Pn
= P(Xi = −1) = 21 . Let Sn = i=1 Xi . Show that Mn = Sn3 − 3nSn is a martingale.
4. Let Xi and Sn be as in Problem 3. Let φ(x) = 12 (ex +e−x ). Show that Mn = eaSn φ(a)−n
is a martingale for each a real.
5. Suppose Mn is a martingale, Nn = Mn2 , and E Nn < ∞ for each n. Show
E [Nn+1 | Fn ] ≥ Nn for each n. Do not use Jensen’s inequality.
6. Suppose Mn is a martingale, Nn = |Mn |, and E Nn < ∞ for each n. Show
E [Nn+1 | Fn ] ≥ Nn for each n. Do not use Jensen’s inequality.
7. Suppose Xn is a martingale with respect to Gn and Fn = σ(X1 , . . . , Xn ). Show Xn is
a martingale with respect to Fn .
8. Show that if Xn and Yn are martingales with respect to {Fn } and Zn = max(Xn , Yn ),
then E [Zn+1 | Fn ] ≥ Zn .
9. Let Xn and Yn be martingales with E Xn2 < ∞ and E Yn2 < ∞. Show
                                        n
                                        X
                  E Xn Yn − E X0 Y0 =         E (Xm − Xm−1 )(Ym − Ym−1 ).
                                        m=1


10. Consider the binomial asset pricing model with n = 3, u = 3, d = 21 , r = 0.1, S0 = 20,
and K = 10. If V is a European call with strike price K and exercise date n, compute
explicitly the random variables V1 and V2 and calculate the value V0 .
11. In the same model as problem 1, compute the hedging strategy ∆0 , ∆1 , and ∆2 .
12. Show that in the binomial asset pricing model the value of the option V at time k is
Vk .
13. Suppose Xn is a submartingale. Show there exists a martingale Mn such that if
An = Xn − Mn , then A0 ≤ A1 ≤ A2 ≤ · · · and An is Fn−1 measurable for each n.
14. Suppose Xn is a submartingale and Xn = Mn + An = Mn0 + A0n , where both An and
A0n are Fn−1 measurable for each n, both M and M 0 are martingales, both An and A0n
increase in n, and A0 = A00 . Show Mn = Mn0 for each n.
15. Suppose that S and T are stopping times. Show that max(S, T ) and min(S, T ) are
also stopping times.

                                              104
16. Suppose that Sn is a stopping time for each n and S1 ≤ S2 ≤ · · ·. Show S = limn→∞ Sn
is also a stopping time. Show that if instead S1 ≥ S2 ≥ · · · and S = limn→∞ Sn , then S is
again a stopping time.
                                                                   2
17. Let Wt be Brownian motion. Show that eiuWt +u t/2 can be written in the form
Rt
 0
   Hs dWs and give an explicit formula for Hs .

18. Suppose Mt is a continuous bounded martingale for which hM i∞ is also bounded.
Show that                       n
                               2X −1
                                     (M i+1
                                         n
                                            − M in )2
                                                   2          2
                                       i=0

converges to hM i1 as n → ∞.
[Hint: Show that Ito’s formula implies
                                  Z (i+1)/2n
                              2
            (M i+1
                n
                   − M in ) =                    (Ms − M in )dMs + hM i i+1
                                                                         n
                                                                            − hM i in .
                2       2                                 2              2          2
                                   i/2n


Then sum over i and show that the stochastic integral term goes to zero as n → ∞.]

19. Let fε (0) = fε0 (0) = 0 and fε00 (x) = 2ε
                                            1
                                               1(−ε,ε) (x). You may assume that it is valid to
use Ito’s formula with the function fε (note fε ∈   / C 2 ). Show that
                                           Z t
                                      1
                                                 1(−ε,ε) (Ws )ds
                                      2ε     0

converges as ε → 0 to a continuous nondecreasing process that is not identically zero and
that increases only when Xt is at 0.
                                    1
                                       Rt
[Hint: Use Ito’s formula to rewrite 2ε    1
                                        0 (−ε,ε)
                                                 (Ws )ds in terms of fε (Wt ) − fε (W0 ) plus a
stochastic integral term and take the limit in this formula.]

20. Let Xt be the solution to

                            dXt = σ(Xt )dWt + b(Xt )dt,            X0 = x,

where Wt is Brownian motion and σ and b are bounded C ∞ functions and σ is bounded
below by a positive constant. Find a nonconstant function f such that f (Xt ) is a martin-
gale.
[Hint: Apply Ito’s formula to f (Xt ) and obtain an ordinary differential equation that f
needs to satisfy.]

21. Suppose Xt = Wt + F (t), where F is a twice continuously differentiable function,
F (0) = 0, and Wt is a Brownian motion under P. Find a probability measure Q under

                                                   105
which Xt is a Brownian motion and prove your statement. (You will need to use the
general Girsanov theorem.)
                       Rt
22. Suppose Xt = Wt − 0 Xs ds. Show that
                                           Z t
                                    Xt =         es−t dWs .
                                            0


23. Suppose we have a stock where σ = 2, K = 15, S0 = 10, r = 0.1, and T = 3. Suppose
we are in the continuous time model. Determine the price of the standard European call
using the Black-Scholes formula.

23. Let
                  ψ(t, x, y, µ) = P(sup(Ws + µs) = y for s ≤ t, Wt = x),
                                   s≤t

where Wt is a Brownian motion. More precisely, for each A, B, C, D,
                                                          Z DZ B
          P(A ≤ sup(Ws + µs) ≤ B, C ≤ Wt ≤ D) =                       ψ(t, x, y, µ)dy dx.
                 s≤t                                          C   A


(ψ has an explicit formula, but we don’t need that here.) Let the stock price St be given
by the standard geometric Brownian motion. Let V be the option that pays off sups≤T Ss
at time T . Determine the price at time 0 of V as an expression in terms of ψ.

25. Suppose the interest rate is 0 and St is the standard geometric Brownian motion stock
price. Let A and B be fixed positive reals, and let V be the option that pays off 1 at time
T if A ≤ ST ≤ B and 0 otherwise.
   (a) Determine the price at time 0 of V .
   (b) Find the hedging strategy that duplicates the claim V .

26. Let V be the standard European call that has strike price K and exercise date T . Let
r and σ be constants, as usual, but let µ(t) be a deterministic (i.e., nonrandom) function.
Suppose the stock price is given by

                                dSt = σSt dWt + µ(t)St dt,

where Wt is a Brownian motion. Find the price at time 0 of V .




                                            106


